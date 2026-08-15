import type { DrivingTestSet } from "../types";

// Sourced the same way as sets 1-3: the Illinois Rules of the Road (2026
// edition, DSD A 112.47) published by the Illinois Secretary of State, the
// Secretary of State's graduated-licensing pages, and the Illinois Vehicle
// Code (625 ILCS 5) plus 92 Ill. Adm. Code 1030 where the handbook is silent
// or states a rule only as a table.
const HB = "https://www.ilsos.gov/content/dam/publications/pdf_publications/dsd_a112.pdf";
const GDL = "https://www.ilsos.gov/departments/drivers/teen-driver-safety/gdl.html";
const ILCS = (section: string) =>
  `https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=${section}`;
const EXAM_RULE =
  "https://www.ilga.gov/commission/jcar/admincode/092/092010300000800R.html";

export const illinoisSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Wider Ground",
    difficulty: "medium",
    description:
      "Thirty-five questions across the whole handbook - equipment, permits, emergencies and the rules that only turn up once you are driving unsupervised.",
    questions: [
      {
        id: "il_s4_01",
        topic: "signals",
        question: "The light ahead of you turns steady yellow. What does that mean?",
        choices: [
          "The signal is changing, and once the red appears you must not enter the intersection",
          "Speed up to clear the intersection before the red",
          "Stop immediately, wherever you are",
          "Proceed with caution as you would at a flashing yellow",
        ],
        correctIndex: 0,
        explanation:
          "Steady yellow is the warning that green is ending. The operative instruction is what happens next: once the red appears, you do not enter the intersection.",
        context:
          "Illinois writes the yellow light around the moment the red arrives rather than around the yellow itself, which is why a driver already inside the intersection when it changes is expected to clear it rather than stop dead. That is the same reasoning behind allowing a driver who entered on green to complete a left turn after the light goes red. A flashing yellow is a different signal altogether and simply means proceed with caution.",
        trap:
          "Treating yellow as an invitation to accelerate is how intersections produce right-angle collisions, and it is not what the handbook says the light means.",
        excerptKey: "signal-yellow",
        sourceLabel: "Illinois Rules of the Road - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "il_s4_02",
        topic: "rules",
        question: "You are entering a roundabout. Who must yield?",
        choices: [
          "Traffic already in the roundabout yields to traffic entering",
          "You yield to all traffic in the roundabout, including pedestrians and bicycles",
          "Nobody yields - drivers alternate one at a time",
          "The vehicle on the left yields to the vehicle on the right",
        ],
        correctIndex: 1,
        explanation:
          "Vehicles entering or leaving a roundabout give way to everything already circulating, and that includes pedestrians and bicycles.",
        context:
          "Illinois roundabouts run counter-clockwise around a central island, and you always enter by turning right. Slow on approach, look for signs and pavement markings that forbid particular movements, hold your lane once you are in, and use your right turn signal to tell other drivers you are about to exit. Do not change lanes inside the roundabout without checking - other vehicles will be sitting in your blind spots.",
        trap:
          "The left-yields-to-right rule governs uncontrolled intersections, not roundabouts. Inside a roundabout, circulating traffic simply has priority.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Illinois Rules of the Road - Rotary and Roundabout",
        sourceUrl: HB,
      },
      {
        id: "il_s4_03",
        topic: "licensing",
        question: "How soon must you tell the Secretary of State's office that you have moved?",
        choices: [
          "Within 30 days",
          "Within 20 days",
          "Within 10 days",
          "At your next licence renewal",
        ],
        correctIndex: 2,
        explanation:
          "Ten days for an address change. A legal name change gets a longer window - 30 days - and requires a corrected licence rather than just a notification.",
        context:
          "Notifying the office does not automatically get you a new card: to have the new address printed on your licence you have to visit a facility, present residency documents and pay the fee. The practical reason to do it promptly is that renewal notices and other correspondence go to the address on file, and failing to update it is a common way people miss a renewal and end up driving on an expired licence.",
        trap:
          "The 30-day figure is real but belongs to name changes. The address deadline is three times shorter.",
        excerptKey: "licence-address-change",
        sourceLabel: "Illinois Rules of the Road - Changing the Name/Address",
        sourceUrl: HB,
      },
      {
        id: "il_s4_04",
        topic: "sharing",
        question: "You are following a large truck. How can you tell whether the driver can see you?",
        choices: [
          "If you can see the truck's rear lights, the driver can see you",
          "If you can see the driver in the truck's side mirrors, they can see you",
          "If you are within three car lengths, you are always visible",
          "If your headlights are on, you are always visible",
        ],
        correctIndex: 1,
        explanation:
          "The side mirrors are the test. A truck driver sees surrounding vehicles in those mirrors, so if you cannot see them in the mirror, they cannot see you.",
        context:
          "Large vehicles need far more room to turn and to stop, and they make wide right turns that sometimes open a gap on the right just before the turn - a gap that closes on anything that drives into it. Dim your headlights when following a truck at night, because full beams reflect off those big mirrors straight into the driver's eyes, and complete any pass quickly rather than sitting alongside.",
        trap:
          "Distance is not the right measure - a car can be close behind a trailer and completely invisible. Mirror visibility is.",
        excerptKey: "truck-blind-spots",
        sourceLabel: "Illinois Rules of the Road - Large Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s4_05",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing at an unmarked crosswalk on your side of the road, and there are no traffic signals. What must you do?",
        choices: [
          "Nothing - they have no right of way outside a marked crosswalk",
          "Yield to them",
          "Sound your horn and proceed",
          "Yield only if they are already halfway across",
        ],
        correctIndex: 1,
        explanation:
          "You yield. An unmarked crosswalk on the driver's side of the roadway with no signals still carries a right of way for the pedestrian.",
        context:
          "Illinois divides pedestrian duties into two tiers. The stronger one requires a complete stop: a pedestrian in a marked crosswalk, and children near a school zone crosswalk on school days. The weaker one requires a yield, and covers unmarked crosswalks, any turn you make at an intersection, a lawful turn on red, a pedestrian who entered the crosswalk before the light changed, and anyone using a guide dog, white cane or wheelchair.",
        trap:
          "'No paint, no crosswalk' is a widely held belief and is wrong. An unmarked crosswalk exists at an intersection whether or not anyone painted it.",
        excerptKey: "ped-unmarked-crosswalk",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Pedestrian Right of Way",
        sourceUrl: HB,
      },
      {
        id: "il_s4_06",
        topic: "speed",
        question:
          "You are travelling at the posted limit and approaching a blind crest. What does Illinois require?",
        choices: [
          "Slow down - the law requires it when approaching the top of a hill",
          "Maintain the posted limit, since you are driving legally",
          "Sound your horn and maintain speed",
          "Move to the left lane and maintain speed",
        ],
        correctIndex: 0,
        explanation:
          "Illinois requires you to slow down when approaching and crossing an intersection, going round a curve, approaching the top of a hill or travelling a narrow winding road. The posted limit is not a defence.",
        context:
          "The posted number is the maximum for good conditions, and Illinois says plainly that you may drive at it only when it is safe to do so. Weather, traffic, mechanical problems, the state of the road, and pedestrians or cyclists all shift what is safe. That is also why the exam frames questions around whether you should reduce speed rather than whether you are under the limit.",
        trap:
          "Being at or under the posted limit is not the same as driving lawfully. Illinois writes a separate duty to slow for conditions.",
        excerptKey: "speed-slow-down-when",
        sourceLabel: "Illinois Rules of the Road - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "il_s4_07",
        topic: "parking",
        question:
          "A parking bay is fitted with an electric vehicle charging station. Who may park there?",
        choices: [
          "Any vehicle, if the space would otherwise be empty",
          "Any vehicle, for up to 30 minutes",
          "Hybrid and electric vehicles",
          "Only electric vehicles",
        ],
        correctIndex: 3,
        explanation:
          "Only electric vehicles may use a designated charging space. Leaving a petrol car in one is a parking violation however empty the lot is.",
        context:
          "Illinois treats these the way it treats accessible parking: the space is reserved by category, not by need at that moment. The accessible-parking rules go further still - the placard or plate holder has to actually be in the vehicle and getting in or out of it, and the striped hatching alongside an accessible bay is part of the reserved space, so nobody may park in it even with a placard.",
        trap:
          "'It was empty and I was only a minute' is not an exception the rule recognises.",
        excerptKey: "park-ev-spaces",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Parking for Electric Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s4_08",
        topic: "emergencies",
        question: "Fire hoses are laid across the road ahead of you. May you drive over them?",
        choices: [
          "Yes, if you go slowly",
          "Yes, if no fire crew is visible",
          "Only if a fire official in command of the scene permits it",
          "Yes, provided you have no other route available",
        ],
        correctIndex: 2,
        explanation:
          "Driving over a fire hose is prohibited unless the fire official in command of the scene lets you. Nothing else creates the permission.",
        context:
          "Crushing a charged hose can cut the water supply to the crew working the fire, which is why the decision is the incident commander's rather than yours. Illinois also bans photography and wireless phone use within 500 feet of an emergency scene, defined as anywhere a stationary authorised vehicle has its oscillating, rotating or flashing lights running.",
        trap:
          "Going slowly does not make it lawful and does not protect the hose. The rule turns on permission, not on speed.",
        excerptKey: "fire-hoses",
        sourceLabel: "Illinois Rules of the Road - Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s4_09",
        topic: "impairment",
        question: "Which of these turns a DUI into an Aggravated DUI in Illinois?",
        choices: [
          "Being involved in a crash that kills or injures someone while under the influence",
          "Registering a BAC over .10%",
          "Refusing to take a chemical test",
          "Being stopped in a school zone",
        ],
        correctIndex: 0,
        explanation:
          "Causing death or personal injury in a crash while under the influence is the clearest route to an Aggravated DUI charge.",
        context:
          "The list also covers a third or subsequent DUI, a DUI committed while driving a school bus carrying children or a vehicle for hire such as a limousine, a DUI committed without a valid licence, permit or insurance, and a DUI by someone with a previous reckless homicide or fatal aggravated DUI. Separately, a BAC of .16% or more, or having a child under 16 in the vehicle, brings enhanced penalties on an ordinary DUI.",
        trap:
          ".16% is the enhanced-penalty threshold, not the aggravating one, and refusing a test brings a longer suspension rather than a heavier charge.",
        excerptKey: "aggravated-dui-list",
        sourceLabel: "Illinois Rules of the Road - Related DUI Offenses",
        sourceUrl: HB,
      },
      {
        id: "il_s4_10",
        topic: "signs",
        question: "A KEEP RIGHT sign with an arrow is posted ahead of you. What is it for?",
        choices: [
          "It marks the start of a one-way street",
          "It tells slow traffic to move over",
          "It tells you which side of an island, median or obstruction to drive on",
          "It indicates the right lane is ending",
        ],
        correctIndex: 2,
        explanation:
          "It marks an obstruction in the middle of the roadway - a traffic island, a median, a physical barrier - and tells you which side to pass it on.",
        context:
          "A separate SLOWER TRAFFIC KEEP RIGHT sign does the different job of telling drivers below the flow of traffic to use the right-hand lane on a multi-lane highway. The two are easy to confuse because both use the words keep right, but one is about a physical object in front of you and the other is about how fast you are going relative to everyone else.",
        trap:
          "SLOWER TRAFFIC KEEP RIGHT is the lane-discipline sign. This one is about steering around an obstruction.",
        excerptKey: "sign-keep-right",
        sourceLabel: "Illinois Rules of the Road - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s4_11",
        topic: "safety",
        question: "How far should a driver sit from the steering wheel air bag?",
        choices: ["4 to 6 inches", "6 to 8 inches", "10 to 12 inches", "18 to 24 inches"],
        correctIndex: 2,
        explanation:
          "Ten to twelve inches is the recommended gap, and it matters most for short, elderly or pregnant drivers who tend to sit closest.",
        context:
          "Air bags are supplemental to safety belts, not a substitute for them, and they deploy hard enough to injure someone sitting too close. Passengers should push their seats back as far as is practical. Children 12 and under belong in the back seat, and a rear-facing child safety seat must never be installed in front of an active air bag - some vehicles let you switch the passenger bag off for exactly that reason.",
        trap:
          "Short drivers often sit far closer than this because it feels like better control. The distance is a safety minimum, not a comfort preference.",
        excerptKey: "airbag-distance",
        sourceLabel: "Illinois Rules of the Road - Air Bag Safety",
        sourceUrl: HB,
      },
      {
        id: "il_s4_12",
        topic: "rules",
        question:
          "There is a two-way left turn lane down the middle of the road. What may you use it for?",
        choices: [
          "Overtaking slower traffic on either side",
          "Waiting to join a queue of traffic in the through lane",
          "Driving in it for up to 200 feet before your turn",
          "Preparing for or making a left turn, or a lawful U-turn",
        ],
        correctIndex: 3,
        explanation:
          "It is for left turns into or out of the road, and for U-turns where those are permitted. Driving along it for any other reason is prohibited.",
        context:
          "The lane is marked with yellow lines on both sides and white arrows inside it, because traffic uses it from both directions. Where such a lane is provided, a left turn may not be made from any other lane at all. It exists to take turning vehicles out of the through lanes at mid-block driveways, not to give anyone an extra running lane.",
        trap:
          "Drivers treat it as a merge lane or an acceleration lane. It is neither, and using it that way is a violation in its own right.",
        excerptKey: "mark-two-way-left-turn",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "il_s4_13",
        topic: "signals",
        question:
          "You are on foot and the orange upraised hand starts flashing while you are halfway across. What should you do?",
        choices: [
          "Turn back to the kerb you started from",
          "Stop where you are and wait in the road",
          "Carry on to the sidewalk or safety island",
          "Run back and wait for the next walk signal",
        ],
        correctIndex: 2,
        explanation:
          "A flashing hand means do not start crossing, but if you are already in the road you may finish and reach the sidewalk or safety island.",
        context:
          "The pedestrian signals form a ladder: a walking person means you may set off in that direction, a flashing upraised hand means do not start but you may complete a crossing already begun, and a steady upraised hand means do not enter the roadway at all. Pedestrians in Illinois are required to obey these signals - the right of way is not unconditional.",
        trap:
          "Turning back mid-crossing puts you in the road for longer, not less, and drivers are not expecting it.",
        excerptKey: "ped-signal-flashing-hand",
        sourceLabel: "Illinois Rules of the Road - Pedestrian Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "il_s4_14",
        topic: "licensing",
        question:
          "You have permanently moved to Illinois holding a valid licence from another state. How long do you have to get an Illinois one?",
        choices: [
          "90 days, or before your out-of-state licence expires - whichever comes first",
          "30 days from the date you move",
          "Six months from the date you move",
          "One year, or until your out-of-state licence expires",
        ],
        correctIndex: 0,
        explanation:
          "Ninety days, or the expiry of the licence you already hold, whichever arrives sooner. A licence that expires in 40 days shortens the window to 40 days.",
        context:
          "The 90-day clock applies to people who have permanently moved. Visitors passing through, out-of-state students at Illinois colleges and their families, and active-duty armed forces personnel and their dependants may all continue to drive on a valid licence from their home state or country. The Secretary of State's office describes the transfer as an in-person visit to a facility that includes a vision screening and a written exam.",
        trap:
          "The 'whichever comes first' clause is what people miss. A licence about to expire cuts the window short.",
        excerptKey: "licence-new-resident",
        sourceLabel: "Illinois Rules of the Road - Exemptions",
        sourceUrl: HB,
      },
      {
        id: "il_s4_15",
        topic: "signs",
        question:
          "A yellow diamond shows a stop sign symbol. The actual stop sign is not yet in sight. What is it doing there?",
        choices: [
          "Warning you of a traffic control ahead so you can start slowing down",
          "Indicating that the stop sign further on has been removed",
          "Marking a place where you may stop to let passengers out",
          "Telling you a police checkpoint is operating ahead",
        ],
        correctIndex: 0,
        explanation:
          "It is an advance warning sign. The control it warns about may still be hidden, and the sign is placed far enough back that you can slow down comfortably.",
        context:
          "Illinois uses the same pattern for STOP AHEAD, YIELD AHEAD and SIGNAL AHEAD, and places them further out on high-speed roads where the stopping distance is longer. They are warnings, not orders - the obligation attaches at the control itself - but ignoring one usually means arriving at the control too fast to do anything about it.",
        trap:
          "It is easy to read the symbol as the control itself and stop at the warning sign. The warning tells you what is coming, not what to do here.",
        excerptKey: "sign-advance-warning",
        sourceLabel: "Illinois Rules of the Road - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s4_16",
        topic: "sharing",
        question:
          "A scooter has an engine of 180cc. What licence does Illinois require to ride it on the road?",
        choices: [
          "Any valid Illinois driver's licence",
          "A Class M motorcycle licence",
          "A Class L motorcycle licence",
          "No licence, provided it is titled and registered",
        ],
        correctIndex: 1,
        explanation:
          "At 150cc or more the machine counts as a motorcycle and needs a Class M licence. Below 150cc it is a motor-driven cycle and a Class L will do.",
        context:
          "Mopeds sit outside that split entirely - any valid Illinois licence covers a moped, provided its combustion engine does not exceed 50cc and it does not require gear changes. A low-speed electric scooter is different again: under 100 pounds, capped at 10 mph, no licence at all, riders must be 18 or over, and it may not be used on any road with a speed limit above 35 mph.",
        trap:
          "L and M are easy to transpose. The larger engine takes the later letter - 150cc and up is Class M.",
        excerptKey: "scooter-licence-class",
        sourceLabel: "Illinois Rules of the Road - Scooters and Mopeds",
        sourceUrl: HB,
      },
      {
        id: "il_s4_17",
        topic: "speed",
        question:
          "You have just passed the last barrel of a work zone. When may you return to normal speed?",
        choices: [
          "Immediately after the last barrel",
          "Once you are safely past any workers or authorised vehicles",
          "As soon as the lane markings return to normal",
          "After 500 feet",
        ],
        correctIndex: 1,
        explanation:
          "You hold the reduced speed until you are safely past the last worker or authorised vehicle, which is not always the same point as the last cone.",
        context:
          "Work zone rules in Illinois are wide: slow down on approach, put the phone away unless it is genuinely hands-free, yield to workers and authorised vehicles, move to a lane away from the workers where you can, and treat the whole zone as a no passing zone. The posted limit runs 24 hours a day whether or not anyone is working, and causing a crash in a construction zone by failing to slow or change lanes is itself a ground for suspension.",
        trap:
          "The physical end of the cones feels like the end of the zone. Workers and vehicles are often beyond it.",
        excerptKey: "work-zone-duties",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Construction Zones",
        sourceUrl: HB,
      },
      {
        id: "il_s4_18",
        topic: "rightOfWay",
        question: "You are turning at an intersection and a pedestrian is crossing the road you are turning into. Who goes first?",
        choices: [
          "The pedestrian - you must yield when making a turn at any intersection",
          "You do, because you were in the intersection first",
          "You do, if you have a green light",
          "Whoever is closer to the far kerb",
        ],
        correctIndex: 0,
        explanation:
          "Turning at any intersection carries a duty to yield to pedestrians, and a green light does not displace it.",
        context:
          "The obligation runs through most of the Illinois right-of-way list: you yield to pedestrians and other road users when you turn right on red, when you pull away from a stop sign or flashing red, when you emerge from an alley or driveway, and when a pedestrian entered the crosswalk before the light changed. Green means you may proceed once the intersection and crosswalk are clear, not that everyone else must get out of your way.",
        trap:
          "A green light feels like an entitlement. It is a permission conditioned on everyone already in the intersection clearing it first.",
        excerptKey: "ped-yield-when-turning",
        sourceLabel: "Illinois Rules of the Road - Pedestrian Right of Way",
        sourceUrl: HB,
      },
      {
        id: "il_s4_19",
        topic: "parking",
        question:
          "You want to park on the left-hand side of a two-way street, facing oncoming traffic. Is that allowed?",
        choices: [
          "Yes, if the street is wide enough",
          "Yes, outside business districts",
          "Yes, if you park within 12 inches of the curb",
          "No - vehicles must be parked facing the direction traffic is moving",
        ],
        correctIndex: 3,
        explanation:
          "Illinois requires vehicles to be parked in the direction traffic is moving, which rules out facing the wrong way on a two-way street.",
        context:
          "On a one-way street the rule relaxes, because both kerbs run with the flow: you may park within 12 inches of either the right or the left curb. On a two-way street it is the right-hand wheels, within 12 inches, pointing the way the traffic goes. Getting into that position means crossing oncoming traffic and reversing, which is the whole reason the rule exists.",
        trap:
          "In quiet residential streets people park facing whichever way is convenient. Convenience is not one of the exceptions.",
        excerptKey: "park-direction-of-traffic",
        sourceLabel: "Illinois Rules of the Road - Parallel Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s4_20",
        topic: "emergencies",
        question:
          "Your car breaks down on a busy multi-lane highway and you get it onto the right shoulder. What does Illinois advise?",
        choices: [
          "Get out and stand well back from the vehicle",
          "Stay in the vehicle with your seatbelt on, put the hazards on and call 911",
          "Walk to the nearest exit for help",
          "Raise the hood and stand in front of the vehicle so you are visible",
        ],
        correctIndex: 1,
        explanation:
          "On a high-capacity road you stay inside with your belt fastened, put the hazard lights on and call 911, then wait for a responder.",
        context:
          "Illinois splits the advice by road type, and the split is deliberate. On a high-capacity road there is nowhere safe to stand, so the vehicle is the safest place. On a lower-capacity road you may leave, exiting on the side away from oncoming traffic and moving to a sidewalk, behind a guardrail or to the edge of a field. On the Illinois Tollway you stay put and call *999 or 911.",
        trap:
          "Getting out of the car feels safer and is exactly the mistake. On a fast multi-lane road the shoulder is the most dangerous ground there is.",
        excerptKey: "stranded-high-capacity",
        sourceLabel: "Illinois Rules of the Road - Stranded Motorists' Safety Protocols",
        sourceUrl: HB,
      },
      {
        id: "il_s4_21",
        topic: "impairment",
        question:
          "A driver picks up a second DUI conviction 15 years after the first. What is the minimum revocation?",
        choices: ["One year", "Two years", "Three years", "Five years"],
        correctIndex: 3,
        explanation:
          "A second conviction within 20 years brings a minimum five-year revocation. The window is 20 years, so a 15-year gap does not reset anything.",
        context:
          "The ladder runs one year for a first conviction, five years for a second within 20 years, ten years for a third, and lifetime revocation for a fourth or subsequent. A revocation is indefinite: you apply to get your privileges back after the minimum period, and only after an alcohol and drug evaluation, a rehabilitation or education programme, an administrative hearing and a reinstatement fee.",
        trap:
          "People assume a long gap wipes the slate. Illinois looks back 20 years for the second-offence figure.",
        excerptKey: "dui-revocation-ladder",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - DUI Conviction",
        sourceUrl: HB,
      },
      {
        id: "il_s4_22",
        topic: "safety",
        question: "Your car starts to hydroplane on standing water. What should you do?",
        choices: [
          "Brake firmly to slow the car",
          "Accelerate to push the water aside",
          "Steer sharply toward the shoulder",
          "Release the accelerator and ride out the skid",
        ],
        correctIndex: 3,
        explanation:
          "Come off the accelerator and ride it out. The tyres are floating on water, so braking and steering inputs have nothing to act on until they touch the road again.",
        context:
          "The prevention matters more than the recovery: slow down in rain, switch off the cruise control, lengthen your following distance and be extra careful on curves and while braking. Illinois is blunt about flooded roads - do not drive into one at all, because you cannot judge the depth or the current, and the advice is to turn round and find another route.",
        trap:
          "Braking is the reflex and it is the wrong input. You have no braking traction while the tyres are riding on water.",
        excerptKey: "rain-hydroplane",
        sourceLabel: "Illinois Rules of the Road - Rain",
        sourceUrl: HB,
      },
      {
        id: "il_s4_23",
        topic: "signs",
        question:
          "A yellow sign on a freeway exit ramp shows a speed. What kind of limit is it?",
        choices: [
          "The maximum safe speed for driving the ramp",
          "The minimum speed you must maintain on the ramp",
          "The speed limit on the road the ramp joins",
          "An advisory that applies only in wet weather",
        ],
        correctIndex: 0,
        explanation:
          "It is the maximum safe speed for that ramp. Ramps tighten as they go, so the figure assumes you have slowed to it before the curve, not during it.",
        context:
          "The same style of small sign appears below turn and curve warning signs on ordinary roads, giving the maximum safe speed for the bend. Illinois expects you to do your slowing in the speed-change lane before the exit rather than braking on the ramp itself, and to be in the correct lane well ahead of the exit. If you miss an exit you carry on to the next one, because backing up on an expressway is against the law.",
        trap:
          "Ramp speeds get treated as suggestions. They are calculated for the tightest part of the curve, which is usually out of sight from the entrance.",
        excerptKey: "sign-exit-ramp",
        sourceLabel: "Illinois Rules of the Road - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s4_24",
        topic: "rules",
        question: "You have overshot your exit on an Illinois expressway. What are you allowed to do?",
        choices: [
          "Reverse along the shoulder to the exit",
          "Reverse in the exit lane if traffic is light",
          "Stop and wait for a gap, then reverse",
          "Continue to the next exit",
        ],
        correctIndex: 3,
        explanation:
          "Carry on to the next exit. Backing up on any shoulder or roadway of a controlled-access road is illegal in Illinois.",
        context:
          "The prohibition is absolute on controlled-access roads and conditional elsewhere - on ordinary roads you may reverse only when it can be done safely and without interfering with other vehicles. Illinois also forbids entering or leaving a controlled-access road anywhere other than a posted entrance or exit, and forbids driving across median strips, unpaved dividers and median barriers.",
        trap:
          "'The shoulder is not really the road' is the reasoning people use. The statute names the shoulder specifically.",
        excerptKey: "lane-no-backing-controlled",
        sourceLabel: "Illinois Rules of the Road - Lane Usage",
        sourceUrl: HB,
      },
      {
        id: "il_s4_25",
        topic: "licensing",
        question:
          "You are diagnosed with a condition likely to cause a loss of consciousness. What does Illinois require?",
        choices: [
          "Notify the Secretary of State's office within 10 days of learning of it",
          "Notify the Secretary of State's office at your next renewal",
          "Nothing, provided your doctor has not told you to stop driving",
          "Surrender your licence immediately",
        ],
        correctIndex: 0,
        explanation:
          "Ten days from becoming aware of it. Failing to report can lead to cancellation of your licence and driving privileges.",
        context:
          "Cancellation is a distinct sanction from suspension and revocation: it is used where a driver is no longer entitled to the licence at all - because of a medical or vision problem, a failure to sit a required re-examination, or a defect in the application. You may be asked to provide a Medical Report completed by a licensed physician, which must reach the facility within 90 days of the doctor signing it.",
        trap:
          "The duty falls on you, not on your doctor, and it is triggered by becoming aware of the condition rather than by anyone telling you to stop.",
        excerptKey: "licence-medical-notify",
        sourceLabel: "Illinois Rules of the Road - Medical Report",
        sourceUrl: HB,
      },
      {
        id: "il_s4_26",
        topic: "sharing",
        question: "What is the maximum speed of a low-speed vehicle in Illinois?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 2,
        explanation:
          "Twenty-five miles per hour. Because of that, they may only be used on streets with a posted limit of 30 mph or less, unless the local municipality bans them outright.",
        context:
          "A low-speed vehicle is a four-wheeled vehicle with a federal safety certification label and a vehicle identification number, and Illinois requires it to be titled and registered like any other vehicle. It also has to carry a full equipment list - parking brake, steering wheel, windshield, safety belts, mirrors, headlights, taillights, brake lights and turn signals - which is what separates it from a golf cart.",
        trap:
          "The 25 mph capability and the 30 mph road limit are two different numbers in the same rule, and they get swapped.",
        excerptKey: "lsv-speed",
        sourceLabel: "Illinois Rules of the Road - Low-Speed Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s4_27",
        topic: "signals",
        question: "There is a white line painted across your lane at a red light. What is it for?",
        choices: [
          "It marks the edge of the crosswalk",
          "It shows where you must stop, and no part of your vehicle may cross it",
          "It marks the start of a bus lane",
          "It indicates the point at which the signal sensor is buried",
        ],
        correctIndex: 1,
        explanation:
          "It is the stop line, and you must stop before any part of your vehicle crosses it. In urban areas it usually sits about four feet back from the crosswalk.",
        context:
          "The four-foot gap is deliberate: it leaves the crosswalk clear for people on foot, including anyone who has to pass in front of your bumper. If there is no stop line you stop before the crosswalk, and if there is no crosswalk either you stop before entering the intersection. That order applies to stop signs and red lights alike.",
        trap:
          "Nosing over the line for a better view puts your car into the space pedestrians are entitled to, and it is also how right-turn-on-red tickets get written.",
        excerptKey: "mark-stop-line",
        sourceLabel: "Illinois Rules of the Road - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "il_s4_28",
        topic: "rightOfWay",
        question:
          "It is a school day and children are near a school zone crosswalk ahead of you. What does Illinois require?",
        choices: [
          "Come to a complete stop and yield",
          "Slow to 20 mph and continue",
          "Yield only if a crossing guard is present",
          "Sound your horn to alert them",
        ],
        correctIndex: 0,
        explanation:
          "A complete stop, and then yield. It is one of only two situations in which Illinois requires a stop rather than a yield for pedestrians.",
        context:
          "The other is a pedestrian in a marked crosswalk. The school zone case adds a separate obligation on the same stretch of road - within a posted school speed zone you reduce to 20 mph and put the phone away entirely - so a school zone crossing typically triggers three duties at once. Adult crossing guards and police officers directing traffic there outrank the signals.",
        commonlyMissed: true,
        trap:
          "The presence of a crossing guard is not what creates the duty, and their absence does not remove it.",
        excerptKey: "school-zone-duties",
        sourceLabel: "Illinois Rules of the Road - School Zones",
        sourceUrl: HB,
      },
      {
        id: "il_s4_29",
        topic: "safety",
        question: "The brake pedal sinks to the floor. What should you try first?",
        choices: [
          "Pull the parking brake on hard",
          "Switch off the engine",
          "Pump the pedal to build pressure",
          "Shift straight into reverse",
        ],
        correctIndex: 2,
        explanation:
          "Pump the pedal first to build pressure. If that does not work, use the emergency or parking brake and shift down a gear to help slow the car.",
        context:
          "Illinois lists a handful of equipment failures with a recommended order of response, and none of them starts by switching the engine off. A blowout means easing off the gas, gripping the wheel and avoiding sudden braking. A steering failure means easing off the gas and braking gently - but not killing the ignition, because that takes away the power steering or locks the wheel. A stuck accelerator means hooking your toe under it, then shifting to neutral.",
        trap:
          "Yanking the parking brake straight away can lock the rear wheels. It is the fallback, not the first move.",
        excerptKey: "brake-failure",
        sourceLabel: "Illinois Rules of the Road - Equipment Failure",
        sourceUrl: HB,
      },
      {
        id: "il_s4_30",
        topic: "emergencies",
        question: "A power line has come down across your car after a crash. What should you do?",
        choices: [
          "Get out immediately and walk away",
          "Stay in the vehicle until help arrives",
          "Push the line off with a dry stick",
          "Get out and stand touching the vehicle so you are earthed",
        ],
        correctIndex: 1,
        explanation:
          "Stay inside until help arrives. The car shields you; stepping out puts you in contact with the vehicle and the ground at the same time.",
        context:
          "The only reason to leave is an immediate fire, and then the technique matters: jump clear without touching the car and the ground simultaneously, land on both feet, and hop or shuffle with your arms tucked in for about fifty feet. The current spreads outward through the ground, so a normal walking stride can bridge two points at very different voltages.",
        trap:
          "Getting out feels like escaping the danger. The moment of stepping down, with one hand on the car and one foot on the ground, is the most dangerous moment there is.",
        excerptKey: "power-lines",
        sourceLabel: "Illinois Rules of the Road - Electricity",
        sourceUrl: HB,
      },
      {
        id: "il_s4_31",
        topic: "impairment",
        question:
          "You know your friend is over the limit and you hand them your car keys anyway. What is your position under Illinois law?",
        choices: [
          "You have no liability - the offence is theirs alone",
          "You are liable only if there is a crash",
          "You are liable only if your friend is under 21",
          "It is illegal to let someone drive your vehicle when you know they are under the influence",
        ],
        correctIndex: 3,
        explanation:
          "Illinois makes it an offence in its own right to allow someone to drive your vehicle when you know they are under the influence. No crash is required.",
        context:
          "There is a related offence for supplying alcohol to anyone under 21, which can bring a fine, jail and the suspension of your own driving privileges. Parents and guardians face a further duty: it is illegal to allow under-21s to drink, or to fail to control access to alcohol, on property under your control - and that expressly includes a vehicle or a watercraft.",
        trap:
          "'It is their licence, not mine' is the instinct. Illinois writes a separate offence for the person who hands over the keys.",
        excerptKey: "contributing-to-dui",
        sourceLabel: "Illinois Rules of the Road - Contributing to a DUI",
        sourceUrl: HB,
      },
      {
        id: "il_s4_32",
        topic: "parking",
        question:
          "There is diagonal hatching painted beside an accessible parking bay. May you park on it if you display a disability placard?",
        choices: [
          "Yes - the placard covers the whole bay including the hatching",
          "Yes, if the bay itself is already occupied",
          "Yes, for loading and unloading only",
          "No - the striped area is part of the reserved space and no vehicle may park on it",
        ],
        correctIndex: 3,
        explanation:
          "The hatching is part of the reserved space and nobody may park on it, placard or not. It exists so a wheelchair or a ramp has room to deploy.",
        context:
          "Illinois attaches other conditions to accessible parking that people overlook: the authorised holder of the placard or plates must actually be present and must be getting into or out of the vehicle. Most placard types do not exempt you from parking meter fees or time limits - only the meter-exempt permanent placard does, and only at meters with more than a 30-minute limit.",
        trap:
          "A placard reads as blanket permission. It does not cover the hatching, and it does not cover using the space when the holder is not there.",
        excerptKey: "park-disability-striped",
        sourceLabel: "Illinois Rules of the Road - Parking for Persons with Disabilities",
        sourceUrl: HB,
      },
      {
        id: "il_s4_33",
        topic: "rules",
        question:
          "Traffic is heavy and you keep changing lanes to make better progress than the flow. What is the legal position?",
        choices: [
          "Legal, provided you signal every change",
          "Weaving from lane to lane to move faster than the flow of traffic is unlawful",
          "Legal on roads with three or more lanes",
          "Legal, provided you stay under the speed limit",
        ],
        correctIndex: 1,
        explanation:
          "Illinois names it specifically: weaving from lane to lane in order to move faster than the traffic flow is unlawful, signals or no signals.",
        context:
          "It sits alongside a set of lane-discipline rules that are easy to forget once you have your licence - slow vehicles keep right except to pass or turn left, the left lane of an interstate is for passing, and traffic must follow the direction of one-way streets. Illinois also lists lane weaving among the behaviours that make up aggressive driving, which is defined as operating a vehicle in a way likely to endanger people or property.",
        commonlyMissed: true,
        trap:
          "Signalling each change makes it feel compliant. The offence is the pattern of movement, not the failure to indicate.",
        excerptKey: "lane-weaving",
        sourceLabel: "Illinois Rules of the Road - Lane Usage",
        sourceUrl: HB,
      },
      {
        id: "il_s4_34",
        topic: "speed",
        question:
          "The posted limit is 55 mph. Heavy rain has cut visibility and the surface is wet. What speed does Illinois expect?",
        choices: [
          "55 mph, since the limit does not change with the weather",
          "Whatever the traffic around you is doing",
          "A speed below the limit, adjusted for the conditions",
          "45 mph, which is the standard wet-weather reduction",
        ],
        correctIndex: 2,
        explanation:
          "You adjust downward for the conditions. The posted figure is a maximum for good conditions, and weather or traffic can make it necessary to drive more slowly.",
        context:
          "Illinois does not publish a fixed wet-weather reduction, which is exactly why the exam frames it as judgement rather than arithmetic. Your speed should suit the conditions and match the flow of traffic, so long as it does not exceed the posted maximum. Turning off the cruise control is part of the same package on any wet, icy or snowy surface.",
        trap:
          "There is no standard wet-weather number in Illinois. Anyone offering one is offering a rule that does not exist.",
        excerptKey: "speed-max-safe-only",
        sourceLabel: "Illinois Rules of the Road - Vehicle Speed",
        sourceUrl: HB,
      },
      {
        id: "il_s4_35",
        topic: "signs",
        question:
          "A truck involved in a crash ahead of you displays a hazardous materials placard. What should you do?",
        choices: [
          "Drive past quickly with the windows up",
          "Approach and offer assistance to the driver",
          "Stop and photograph the placard for the emergency services",
          "Follow responders' directions to evacuate, or avoid the area and report it from somewhere safe",
        ],
        correctIndex: 3,
        explanation:
          "Follow the emergency responders' instructions to get clear. If no emergency vehicles have arrived, avoid the crash area and report it from a safe location.",
        context:
          "Placards use symbols, colours and text to say what is being carried, and they are there for responders as much as for you. Exposure to a toxic environment can show up hours later rather than immediately, so the handbook's advice is to seek medical attention if you start to feel unwell after passing an incident like this - even if nothing seemed wrong at the time.",
        trap:
          "Approaching to help is the humane instinct and the wrong call here. A hazmat scene needs people with breathing apparatus, not bystanders.",
        excerptKey: "sign-hazmat-placard",
        sourceLabel: "Illinois Rules of the Road - Hazardous Materials Signs",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail",
    difficulty: "hard",
    description:
      "The Illinois rules that trip up experienced drivers: move-over duties, the under-21 thresholds, the conditional passing rules, and the numbers nobody remembers until they are asked.",
    questions: [
      {
        id: "il_s5_01",
        topic: "emergencies",
        question:
          "You are on a two-lane road and a stopped ambulance is on the shoulder with its lights going. You cannot change lanes. What does Illinois require?",
        choices: [
          "Maintain your speed and pass wide",
          "Reduce your speed and proceed with caution",
          "Stop completely until it moves off",
          "Nothing - the duty applies only where there are two lanes in your direction",
        ],
        correctIndex: 1,
        explanation:
          "Where changing lanes is not possible, you slow down and pass with caution, holding the reduced speed until you are safely past.",
        context:
          "The move-over duty has two limbs and drivers usually learn only the first. Where the road has enough lanes, you change into a lane away from the stopped vehicle. Where it does not, the duty converts into a speed reduction rather than disappearing. The same applies at any emergency scene - anywhere a stationary authorised vehicle is running oscillating, rotating or flashing lights.",
        trap:
          "'I could not move over, so there was nothing to do' is the standard defence and the statute answers it directly.",
        excerptKey: "move-over-no-lane",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s5_02",
        topic: "licensing",
        question:
          "A 19-year-old Illinois driver is convicted of two moving violations 20 months apart. What happens?",
        choices: [
          "Nothing - the threshold is three violations",
          "Nothing, because the violations are more than a year apart",
          "A written warning from the Secretary of State",
          "A driver's licence suspension of at least 30 days",
        ],
        correctIndex: 3,
        explanation:
          "For a driver under 21, two moving violations within any 24-month period bring a suspension of at least 30 days. The length rises with the seriousness of the offences.",
        context:
          "Drivers 21 and over are on a different and more forgiving schedule: three traffic violation convictions in a 12-month period. That is why the same two tickets produce a suspension for a 20-year-old and nothing for a 22-year-old. A driver under 21 may also be required to complete a remedial education course before reinstatement, and is limited to one court supervision for serious traffic offences.",
        trap:
          "The 'three in twelve months' figure is the one everybody quotes. It is the adult rule, and using it under 21 gets the answer wrong twice over - wrong count and wrong window.",
        excerptKey: "suspension-three-violations",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Suspension",
        sourceUrl: HB,
      },
      {
        id: "il_s5_03",
        topic: "rules",
        question: "May you pass another vehicle inside an Illinois construction zone?",
        choices: [
          "Yes, if no workers are present",
          "Yes, if the lane markings permit it",
          "No - every construction zone in Illinois is a no passing zone",
          "Yes, but only vehicles travelling below 20 mph",
        ],
        correctIndex: 2,
        explanation:
          "All construction zones in Illinois are no passing zones. Worker presence and lane markings make no difference.",
        context:
          "It joins the list of situations where passing is banned regardless of what the lines say: hills and curves without a clear view, within 100 feet of an intersection or railroad crossing, where the view is blocked within 100 feet of a bridge, viaduct or tunnel, where a vehicle has stopped at a crosswalk for a pedestrian, in a school zone, and wherever a school bus is loading or unloading.",
        trap:
          "Broken lines running through a work zone read as permission. The blanket rule overrides the markings.",
        excerptKey: "pass-prohibited-where",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Passing",
        sourceUrl: HB,
      },
      {
        id: "il_s5_04",
        topic: "signals",
        question:
          "A double solid yellow line runs down the middle of the road and your driveway is on the far side. May you cross it?",
        choices: [
          "No - a double solid yellow line may never be crossed",
          "Only if there is a break in the line at your driveway",
          "Yes - you may cross it to make a left turn into or from an alley, private road, driveway or street",
          "Only between sunrise and sunset",
        ],
        correctIndex: 2,
        explanation:
          "A double solid yellow may be crossed to turn left into or out of an alley, private road, driveway or street. What it forbids is passing.",
        context:
          "The distinction runs through Illinois markings: a solid yellow line is a passing prohibition, not a barrier. You may also cross a solid yellow on your side to finish a pass you had lawfully begun before the no-passing zone started. A double solid white line, by contrast, is an actual barrier - crossing it is prohibited outright.",
        trap:
          "'Double yellow means never cross' is one of the most widespread driving beliefs in the country, and it is not what Illinois says.",
        excerptKey: "mark-double-yellow",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "il_s5_05",
        topic: "speed",
        question:
          "It is 9 a.m. on a Tuesday, the school zone signs are up, and there is not a child in sight. Does the 20 mph limit apply?",
        choices: [
          "Yes - the posted hours are what matter",
          "No - the reduced limit applies when children are present",
          "Yes, but only within 500 feet of the school building",
          "No, because 9 a.m. falls outside the enforcement window",
        ],
        correctIndex: 1,
        explanation:
          "The reduced limit is conditional on children being present and close enough to traffic that a hazard exists. Signs and school-day hours are necessary but not sufficient on their own.",
        context:
          "All three conditions have to hold together: a school day, posted signs, and children present. Because that last one is a judgement call from a moving car, the safe habit is to slow whenever the signs are up during school hours. A quite separate rule bans wireless phone use inside a posted school speed zone, at any age, and it is written without the children-present condition.",
        trap:
          "This is a genuinely conditional rule that gets taught as an absolute one, so both the 'always applies' and 'never applies' answers feel defensible.",
        excerptKey: "sign-school-zone-hours",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - School Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s5_06",
        topic: "sharing",
        question:
          "How far ahead of a stop does an Illinois school bus start flashing its warning lights on a rural road?",
        choices: ["50 feet", "100 feet", "150 feet", "200 feet"],
        correctIndex: 3,
        explanation:
          "Two hundred feet in rural areas, and 100 feet elsewhere. The stop arm swings out only after the bus has come to a complete stop.",
        context:
          "The sequence matters because it tells you what stage you are at: flashing lights first as a warning, then the full stop, then the stop arm. You must remain stopped until the arm folds away and the lights go off, or until the bus driver signals you past. The one exemption is traffic travelling the opposite way on a four-lane roadway.",
        trap:
          "The rural figure is the longer one. People reverse them because 100 feet sounds like the default and rural roads feel emptier.",
        excerptKey: "bus-warning-distance",
        sourceLabel: "Illinois Rules of the Road - School Buses",
        sourceUrl: HB,
      },
      {
        id: "il_s5_07",
        topic: "parking",
        question:
          "You have to stop on a rural highway in an emergency. How much clear visibility must there be in each direction?",
        choices: ["50 feet", "100 feet", "150 feet", "200 feet"],
        correctIndex: 3,
        explanation:
          "Two hundred feet in each direction. You also put the hazard flashers on and make sure there is enough space for other vehicles to get past.",
        context:
          "Outside business and residential districts, Illinois expects you to stop or park off the roadway entirely wherever that is practical - the emergency provision is the exception to that, not the default. It sits alongside a rule requiring parking lights on a vehicle left on a highway between sunset and sunrise, unless it is in an urban district where lights are not required.",
        trap:
          "'It is an emergency, so the rules do not apply' is the assumption. Illinois writes conditions into the emergency permission itself.",
        excerptKey: "park-emergency-200-feet",
        sourceLabel: "Illinois Rules of the Road - Prohibited Stopping, Standing or Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s5_08",
        topic: "impairment",
        question:
          "A driver with a DUI court supervision three years ago refuses a chemical test after a new arrest. How long is the suspension?",
        choices: ["Three years", "One year", "Six months", "Three months"],
        correctIndex: 0,
        explanation:
          "Three years. A prior statutory summary suspension, an out-of-state refusal, a DUI court supervision or a DUI conviction within the last five years makes you a second offender.",
        context:
          "The second-offender figures are one year for failing a test and three years for refusing one, against six months and one year respectively for a first offender. Court supervision counts even though it is not technically a conviction, which is the part that surprises people. Refusing after a crash involving serious injury or death brings revocation for at least a year rather than a suspension.",
        trap:
          "Court supervision feels like the case went away. For statutory summary suspension purposes it counts as a prior.",
        excerptKey: "summary-suspension-refuse",
        sourceLabel: "Illinois Rules of the Road - Statutory Summary Suspension",
        sourceUrl: HB,
      },
      {
        id: "il_s5_09",
        topic: "safety",
        question: "You want to take calls through an earpiece while driving in Illinois. What is allowed?",
        choices: [
          "A single-sided headset or earpiece is permitted",
          "Any headset is permitted provided the volume is low",
          "Headsets are permitted only on interstates",
          "Headsets in both ears are permitted if you are 19 or older",
        ],
        correctIndex: 0,
        explanation:
          "Illinois bans headsets while driving but expressly allows a single-sided headset or earpiece with a phone. One ear stays open to the road.",
        context:
          "A headset here means any device other than a hearing aid that lets you hear or receive electronic communications, so music headphones are caught as much as call headsets. Motorcycle, motor-driven cycle and moped riders may use intercom helmets to talk to each other. For drivers 19 and over, hands-free and Bluetooth are allowed - but holding the phone on speaker is not hands-free and is a violation.",
        commonlyMissed: true,
        trap:
          "The general ban is the well-known half of this rule. The single-sided exception is the half people never hear about.",
        excerptKey: "distracted-single-earpiece",
        sourceLabel: "Illinois Rules of the Road - Distracted Driving",
        sourceUrl: HB,
      },
      {
        id: "il_s5_10",
        topic: "rightOfWay",
        question:
          "Your light turns green but a car is still stuck in the middle of the intersection. What must you do?",
        choices: [
          "Proceed - the green gives you the right of way",
          "Sound your horn until they move",
          "Drive round them on the right",
          "Yield to them until the intersection is clear",
        ],
        correctIndex: 3,
        explanation:
          "You yield even after the light turns green when there are vehicles in the intersection. Green permits you to go once the way is actually clear.",
        context:
          "It works together with the rule that lets a driver who entered on green finish a left turn after the light goes red - one rule empties the intersection, the other stops it being refilled too soon. Illinois also forbids entering an intersection or a marked crosswalk at all unless there is enough room on the far side for your vehicle without blocking others.",
        trap:
          "Right of way is something other people give you, not something you take. Green is a permission conditioned on the intersection being clear.",
        excerptKey: "row-block-intersection",
        sourceLabel: "Illinois Rules of the Road - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "il_s5_11",
        topic: "signs",
        question: "What does a pink traffic sign indicate?",
        choices: [
          "A school crossing",
          "Roadworks scheduled for the following week",
          "An unplanned traffic incident such as a crash or a natural disaster",
          "A toll plaza ahead",
        ],
        correctIndex: 2,
        explanation:
          "Pink marks unplanned traffic incidents - crashes, natural disasters and similar disruptions that nobody scheduled.",
        context:
          "Pink is the newest colour in the Illinois scheme and it exists to separate the unexpected from the planned. Orange means planned construction and maintenance, where the layout has been changed deliberately and the signs have been in place for weeks. Pink means something has just gone wrong, so the situation ahead may be changing minute by minute.",
        trap:
          "Pink and orange read as the same family at speed. The distinction is planned versus unplanned, and it changes how much you should expect the scene to shift.",
        excerptKey: "sign-color-pink",
        sourceLabel: "Illinois Rules of the Road - Colors of Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s5_12",
        topic: "licensing",
        question:
          "An 18-year-old Illinois driver has a flat tyre and wants to call for help. What does the law allow?",
        choices: [
          "An emergency call to a law enforcement agency, health care provider or emergency services agency",
          "Any call, since the vehicle is stopped",
          "Nothing - under-19 drivers may never use a phone in the vehicle",
          "Any hands-free call, since they hold a full licence",
        ],
        correctIndex: 0,
        explanation:
          "The under-19 ban carves out emergency calls to a law enforcement agency, a health care provider, a fire department or another emergency services agency. Ordinary calls stay prohibited.",
        context:
          "The exception is written around who you are calling, not around how urgent it feels. For everyone else, Illinois separately allows a phone that is not hands-free when you are reporting an emergency, when you are parked on the shoulder, or when traffic is obstructed and the vehicle is in neutral or park. Video streaming, video conferencing and social media are prohibited for drivers of any age.",
        trap:
          "'The car is stopped, so I am not driving' fails once you are stopped in a traffic lane rather than parked on the shoulder.",
        excerptKey: "ilcs-under-19-emergency",
        commonlyMissed: true,
        sourceLabel: "Illinois Vehicle Code - Wireless telephones",
        sourceUrl: ILCS("062500050K12-610.1"),
      },
      {
        id: "il_s5_13",
        topic: "rules",
        question:
          "A truck ahead flashes its turn signals to let you know the road is clear to pass. What is the legal position in Illinois?",
        choices: [
          "It is a recognised courtesy signal",
          "It is against the law to flash turn signals as a courtesy or do-pass signal",
          "It is legal only between commercial vehicles",
          "It is legal on two-lane roads only",
        ],
        correctIndex: 1,
        explanation:
          "Illinois makes it unlawful to flash turn signals as a courtesy or do-pass signal to another driver. The decision to pass has to be yours, based on what you can see.",
        context:
          "The problem is that the other driver's view is not your view, and a pass begun on someone else's say-so leaves you committed to the wrong lane with no information. Illinois also requires the driver being passed not to speed up until you have completed the manoeuvre, and requires you to be back in your own lane before you are within 200 feet of an oncoming vehicle.",
        commonlyMissed: true,
        trap:
          "The practice is common and well-meant on rural highways. That does not make it lawful in Illinois.",
        excerptKey: "pass-do-pass-signal",
        sourceLabel: "Illinois Rules of the Road - Passing",
        sourceUrl: HB,
      },
      {
        id: "il_s5_14",
        topic: "signals",
        question:
          "You began a legal pass, and partway through, the broken yellow line on your side turns solid. What may you do?",
        choices: [
          "Brake hard and drop back behind the vehicle immediately",
          "Cross the solid yellow to complete the pass you had already lawfully begun",
          "Continue in the oncoming lane until the line becomes broken again",
          "Stop in the oncoming lane and wait for a gap",
        ],
        correctIndex: 1,
        explanation:
          "You may cross the solid yellow on your side to finish a pass you had lawfully started before the no-passing zone began. Getting back into your lane is the priority.",
        context:
          "The rule exists because the alternative - braking hard in the oncoming lane, or hanging there until the markings change - is far more dangerous than completing the manoeuvre. The other permission to cross a solid yellow on your side is to turn left into or out of an alley, private road or driveway. Neither permission lets you start a pass inside the zone.",
        trap:
          "Dropping back sounds like the law-abiding move. It puts you alongside a vehicle in the oncoming lane while you decelerate.",
        excerptKey: "mark-no-passing-lines",
        sourceLabel: "Illinois Rules of the Road - Yellow No Passing Lines",
        sourceUrl: HB,
      },
      {
        id: "il_s5_15",
        topic: "emergencies",
        question:
          "You are in a minor crash with about $900 of damage, and the other car turns out to be uninsured. Must a crash report be filed?",
        choices: [
          "No - the damage is under $1,500",
          "No, unless someone was injured",
          "Yes - the threshold drops to more than $500 when any vehicle involved is uninsured",
          "Yes, but only the uninsured driver has to file it",
        ],
        correctIndex: 2,
        explanation:
          "Where any vehicle involved is uninsured, the reporting threshold falls to more than $500 in property damage. At $900, the report is required.",
        context:
          "The general threshold is more than $1,500, plus any crash involving death or bodily injury and any crash involving a school bus whatever the damage. A report is also needed if a crash within 50 feet of a school bus injures or kills someone waiting to board or who has just got off. You have 30 minutes to report, and the duty falls on the driver regardless of fault.",
        commonlyMissed: true,
        trap:
          "The $1,500 figure sticks because it is the one people learn first. The uninsured figure is a third of it.",
        excerptKey: "crash-report-threshold",
        sourceLabel: "Illinois Rules of the Road - Crash Reports",
        sourceUrl: HB,
      },
      {
        id: "il_s5_16",
        topic: "sharing",
        question:
          "A motorcyclist is stopped at a red light that will not change because the sensor cannot detect the bike. What does Illinois allow?",
        choices: [
          "Nothing - they must wait for a vehicle to pull up behind them",
          "They may proceed after 30 seconds",
          "They may treat the signal as a stop sign at any point",
          "They may proceed after 120 seconds, having yielded to oncoming traffic",
        ],
        correctIndex: 3,
        explanation:
          "If the red light fails to turn green after 120 seconds, a motorcyclist may go through the intersection after yielding to oncoming traffic.",
        context:
          "Many signals are triggered by an induction loop in the road that a motorcycle simply is not heavy or metallic enough to set off, which would otherwise leave a rider stuck indefinitely. The permission is specific to motorcyclists and specific to a signal that has not changed - it does not turn every red light into a stop sign, and it does not extend to cars.",
        commonlyMissed: true,
        trap:
          "Drivers assume this is folklore rather than law, and riders sometimes assume it applies after any short wait. Two minutes is the figure.",
        excerptKey: "moto-red-light-120",
        sourceLabel: "Illinois Rules of the Road - Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "il_s5_17",
        topic: "speed",
        question:
          "A driver is convicted of speeding in a construction zone with workers present, then does it again 18 months later. What follows?",
        choices: [
          "Suspension of driving privileges",
          "A fine only",
          "Mandatory community service",
          "Nothing extra - the second offence is treated like the first",
        ],
        correctIndex: 0,
        explanation:
          "A second conviction for speeding in a construction zone with workers present, within two years of the first, is a ground for suspending driving privileges.",
        context:
          "Illinois treats work zones as a separate enforcement category rather than as ordinary road. Causing a crash in a construction zone by failing to reduce speed or change lanes is itself a ground for suspension, whether or not you were speeding. The posted work zone limit applies around the clock, all week, whether or not workers are present, and the limit may drop further when they are.",
        trap:
          "The two-year lookback and the workers-present condition both have to hold, which is why people misremember this as a straightforward repeat-speeding rule.",
        excerptKey: "suspension-work-zone-crash",
        sourceLabel: "Illinois Rules of the Road - Suspension",
        sourceUrl: HB,
      },
      {
        id: "il_s5_18",
        topic: "safety",
        question: "Someone is tailgating you closely on a two-lane road. What does Illinois advise?",
        choices: [
          "Tap your brakes to warn them off",
          "Speed up until the gap opens",
          "Change lanes or pull off the road and let them pass",
          "Maintain your speed and ignore them",
        ],
        correctIndex: 2,
        explanation:
          "Move out of their way - change lanes, or pull off the road slowly and let them past. Removing yourself is the whole strategy.",
        context:
          "Tailgating is the biggest single cause of rear-end collisions, and the driver behind has already used up whatever margin existed. Illinois lists slamming on the brakes in front of a tailgater among the behaviours that constitute aggressive driving, along with speeding, running lights, cutting people off, gesturing, shouting and repeated horn or headlight use.",
        trap:
          "Brake-checking feels like it teaches a lesson. It is on the handbook's own list of aggressive driving and makes you part of the problem.",
        excerptKey: "being-tailgated",
        sourceLabel: "Illinois Rules of the Road - Following Distances",
        sourceUrl: HB,
      },
      {
        id: "il_s5_19",
        topic: "parking",
        question:
          "You leave your car parked on a highway overnight, outside any urban district. What does Illinois require?",
        choices: [
          "Hazard lights flashing all night",
          "A warning triangle 100 feet behind the vehicle",
          "Nothing beyond parking within 12 inches of the curb",
          "Front and rear parking lights displayed",
        ],
        correctIndex: 3,
        explanation:
          "Between sunset and sunrise a vehicle parked on a highway must display front and rear parking lights, unless it is in an urban district where lights are not required.",
        context:
          "Headlights on a parked vehicle must be dimmed, so this is the parking lights rather than the main beams. Illinois also requires front and rear parking lights as standard equipment for any vehicle stopped on a highway at night, and some local communities allow unlighted night parking on their streets - which is the reason the urban district carve-out is there.",
        trap:
          "Hazard lights are the modern instinct and are not what the rule asks for. Parking lights are a separate circuit.",
        excerptKey: "park-night-lights",
        sourceLabel: "Illinois Rules of the Road - Prohibited Stopping, Standing or Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s5_20",
        topic: "impairment",
        question:
          "What does a Monitoring Device Driving Permit allow a first-time DUI offender to do?",
        choices: [
          "Drive to work and back during the suspension, on specified routes",
          "Drive at any time of day, in a vehicle fitted with a breath alcohol ignition interlock device",
          "Shorten the statutory summary suspension by half",
          "Drive with no restrictions once the reinstatement fee is paid",
        ],
        correctIndex: 1,
        explanation:
          "An MDDP lets a first-time offender drive at any hour during the statutory summary suspension, provided the vehicle has an interlock device fitted and they do not drink before driving or tamper with it.",
        context:
          "The permit is monitored by the Secretary of State's office, which is alerted if the driver tries to start the vehicle after drinking or interferes with the device, and unless declared indigent the offender pays for the permit, the installation and the monitoring. An MDDP cannot be issued to anyone under 18. A first-time offender who declines the permit and is then caught driving during the suspension is guilty of a felony.",
        trap:
          "A Restricted Driving Permit is the one limited to particular times and routes. The MDDP is broader but comes with the interlock attached.",
        excerptKey: "mddp-baiid",
        sourceLabel: "Illinois Rules of the Road - Breath Alcohol Ignition Interlock Device",
        sourceUrl: HB,
      },
      {
        id: "il_s5_21",
        topic: "rightOfWay",
        question:
          "Traffic is heavy and a funeral procession is moving through. May you tuck in behind it to get through the junction?",
        choices: [
          "No - joining a procession to secure the right of way is prohibited",
          "Yes, if you keep your headlights on",
          "Yes, if you leave at the next junction",
          "Yes, provided you do not overtake anyone in it",
        ],
        correctIndex: 0,
        explanation:
          "Joining a funeral procession to get the right of way for yourself is prohibited, as is passing any vehicle in one except where a passing lane has been specifically provided.",
        context:
          "Vehicles in the procession run headlights and hazard lights so they can be identified. You must yield to every vehicle in it and must not drive between them, though Illinois does not require you to pull over and stop. A police officer directing traffic can override all of it, and a municipality may impound a vehicle that interferes with a procession through reckless driving.",
        trap:
          "It looks like a harmless piece of opportunism. Illinois writes it as a specific prohibition.",
        excerptKey: "funeral-no-cutting",
        sourceLabel: "Illinois Rules of the Road - Funeral Processions",
        sourceUrl: HB,
      },
      {
        id: "il_s5_22",
        topic: "signs",
        question: "Who is a SLOWER TRAFFIC KEEP RIGHT sign addressed to?",
        choices: [
          "All traffic, on any multi-lane road",
          "Drivers going slower than the normal speed of traffic on a multi-lane highway",
          "Trucks and buses only",
          "Drivers below the posted minimum speed limit",
        ],
        correctIndex: 1,
        explanation:
          "It speaks to anyone travelling below the normal speed of traffic on a multi-lane highway, telling them to use the right-hand lane.",
        context:
          "The measure is your speed relative to the traffic around you, not your speed relative to the posted limit, which is why a driver doing exactly the limit can still be the person the sign is addressing. It backs up the general Illinois rule that slow vehicles use the right-hand lane except when passing or turning left, and the stricter interstate rule reserving the left lane for passing.",
        trap:
          "Reading it as 'below the speed limit' inverts it. You can be at the limit and still be slower traffic.",
        excerptKey: "sign-slower-traffic-right",
        sourceLabel: "Illinois Rules of the Road - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s5_23",
        topic: "licensing",
        question:
          "A 34-year-old has been suspended for three moving violations in 12 months. What might let them keep driving?",
        choices: [
          "A probationary licence, issued alongside a driver improvement course",
          "A Monitoring Device Driving Permit",
          "A Family Financial Responsibility Driving Permit",
          "Nothing - a suspension for moving violations admits no relief",
        ],
        correctIndex: 0,
        explanation:
          "A probationary licence is for drivers 21 and over suspended for three moving violations in a 12-month period, and is issued in conjunction with completing a driver improvement course.",
        context:
          "Illinois runs several distinct permits and mixing them up is a classic exam error. A Restricted Driving Permit covers limited times and routes for work, education, childcare or medical needs, and cannot go to anyone under 16. A Monitoring Device Driving Permit is for first-time DUI offenders with an interlock. An Occupational Driving Permit covers professional drivers suspended for three moving violations. The Family Financial Responsibility permit is for child support suspensions.",
        trap:
          "Under 21 the threshold is two violations in 24 months, and a probationary licence is expressly limited to drivers 21 and over.",
        excerptKey: "probationary-licence",
        sourceLabel: "Illinois Rules of the Road - Special Driving Permits",
        sourceUrl: HB,
      },
      {
        id: "il_s5_24",
        topic: "rules",
        question: "When may you pass on the right in Illinois?",
        choices: [
          "Whenever the shoulder is wide enough to use",
          "Only on interstates",
          "Never - passing on the right is prohibited",
          "On a one-way street or a road with two or more clear lanes in each direction",
        ],
        correctIndex: 3,
        explanation:
          "Passing on the right is allowed on a one-way street or where there are two or more clear lanes in each direction, when the vehicle ahead is turning left on a two-lane road, and at an intersection widened for the purpose - but never on the shoulder.",
        context:
          "The shoulder exclusion is the operative part: Illinois permits passing on the right in several ordinary situations, and in none of them may you leave the pavement or the main travelled part of the road to do it. Passing on the shoulder is also on the handbook's list of aggressive driving behaviours, alongside tailgating and cutting people off.",
        commonlyMissed: true,
        trap:
          "Both extremes are wrong here: passing on the right is not banned, and it is not a licence to use the shoulder.",
        excerptKey: "pass-on-right",
        sourceLabel: "Illinois Rules of the Road - Passing",
        sourceUrl: HB,
      },
      {
        id: "il_s5_25",
        topic: "signals",
        question:
          "A two-way left turn lane runs down the middle of the road and you want to turn left into a shop. From which lane do you turn?",
        choices: [
          "From the two-way left turn lane - a left turn may not be made from any other lane",
          "From whichever lane you happen to be in",
          "From the nearest through lane, using the turn lane only to wait",
          "From the shoulder, to keep the through lanes clear",
        ],
        correctIndex: 0,
        explanation:
          "Where a two-way left turn lane is provided, a left turn may not be made from any other lane at all.",
        context:
          "The lane is marked with yellow lines on both sides and white arrows inside it, and traffic from both directions uses it. You may drive in it only while preparing for or making a left turn into or out of the roadway, or a U-turn where the law permits one. Using it as a running lane, an acceleration lane or a merge lane is prohibited.",
        trap:
          "Turning across from the through lane feels harmless when the turn lane is empty. Illinois makes the turn lane compulsory rather than optional.",
        excerptKey: "mark-two-way-left-turn",
        sourceLabel: "Illinois Rules of the Road - Two-Way Left Turn Lanes",
        sourceUrl: HB,
      },
      {
        id: "il_s5_26",
        topic: "sharing",
        question: "What is the minimum age to ride a low-speed electric scooter in Illinois?",
        choices: ["16", "18", "21", "There is no minimum age"],
        correctIndex: 1,
        explanation:
          "Eighteen. No driver's licence is required, but the age floor is firm, and the scooter may not be used on any highway with a limit above 35 mph.",
        context:
          "A low-speed electric scooter under Illinois law weighs under 100 pounds, has two or three wheels, handlebars and a floorboard you stand on, is powered by an electric motor and human propulsion, and tops out at 10 mph. Only one person may ride it, it needs a head lamp visible up to 500 feet and a red rear reflector or lamp, and whether it may use roads, trails or sidewalks is up to the local municipality or park district.",
        trap:
          "Sixteen is the age floor for Class 3 e-bikes and for gas or electric bicycles. The scooter rule is 18, and the two get conflated.",
        excerptKey: "escooter-rules",
        sourceLabel: "Illinois Rules of the Road - Scooters and Mopeds",
        sourceUrl: HB,
      },
      {
        id: "il_s5_27",
        topic: "emergencies",
        question:
          "You drive past a crash scene where a fire engine has its lights running. May you film it on your phone?",
        choices: [
          "Yes, provided you keep both hands on the wheel",
          "No - photography and wireless phone use are prohibited within 500 feet of an emergency scene",
          "Yes, if a passenger holds the phone",
          "Yes, once you are past the scene",
        ],
        correctIndex: 1,
        explanation:
          "Illinois prohibits photography and wireless phone use within 500 feet of an emergency scene, subject to narrow exceptions.",
        context:
          "An emergency scene is defined as anywhere a stationary authorised vehicle is present with its oscillating, rotating or flashing lights activated. The prohibition applies regardless of the driver's age, and it sits alongside the same rule's ban on phone use inside posted school speed zones and construction or maintenance speed zones.",
        commonlyMissed: true,
        trap:
          "It reads as a distracted-driving rule that hands-free would satisfy. This one is about the scene, not about how you hold the phone.",
        excerptKey: "ilcs-school-zone-phone",
        sourceLabel: "Illinois Vehicle Code - Wireless telephones",
        sourceUrl: ILCS("062500050K12-610.1"),
      },
      {
        id: "il_s5_28",
        topic: "safety",
        question:
          "Your car has run off the road into water and is floating, not yet sinking. What should you do?",
        choices: [
          "Get out through a window",
          "Open a door and swim clear",
          "Wait for the car to fill so the pressure equalises, then open a door",
          "Stay belted in and call 911",
        ],
        correctIndex: 0,
        explanation:
          "Go out through a window while the car is still floating. Water pressure will very likely stop you opening a door at all.",
        context:
          "If the car does sink before you get out, the advice changes: move to the back seat, where an air pocket usually forms, take a deep breath and go out through a rear window. Every second of the floating phase is the best chance you will get, which is why the handbook puts the window first rather than treating it as a fallback.",
        trap:
          "Trying the door is the reflex and burns the few seconds in which a window would still have worked.",
        excerptKey: "water-crash",
        sourceLabel: "Illinois Rules of the Road - Water Crashes",
        sourceUrl: HB,
      },
      {
        id: "il_s5_29",
        topic: "speed",
        question:
          "A minimum speed limit is posted on a freeway. When may you legally drive below it?",
        choices: [
          "Whenever you are uncomfortable at that speed",
          "In the right-hand lane only",
          "When it is necessary for safety",
          "Never, without exception",
        ],
        correctIndex: 2,
        explanation:
          "Driving below a posted minimum is illegal unless safety requires it. Weather, a mechanical problem or traffic conditions can all make it necessary.",
        context:
          "Illinois posts minimums on some freeways and controlled-access highways precisely because a slow vehicle in fast traffic is a hazard in its own right. Where no minimum is posted, the softer version of the rule still applies: you should not drive so slowly as to interfere with the normal movement of traffic. Slow vehicles also have to keep to the right-hand lane except when passing or turning left.",
        trap:
          "Being uncomfortable at a given speed is not a safety exception. It is a reason to choose a different road.",
        excerptKey: "sign-minimum-speed",
        sourceLabel: "Illinois Rules of the Road - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s5_30",
        topic: "impairment",
        question:
          "You refuse a breath test and an officer suspects drugs, so a blood test is taken. Who may end up paying for it?",
        choices: [
          "The arresting agency, in all cases",
          "Your insurer",
          "You, up to $500, if you are found guilty of DUI",
          "Nobody - the test is free by statute",
        ],
        correctIndex: 2,
        explanation:
          "If you refuse a breath test or an officer believes a blood test may show drugs, you can be held financially liable for up to $500 of the blood test costs when you are found guilty of DUI.",
        context:
          "It sits inside the implied consent regime: driving on Illinois roads means you have already agreed to breath, blood, urine or other testing. Where a crash involves personal injury or death and officers have probable cause to believe you were impaired, they are required to request a test rather than merely permitted to. You may have a qualified person of your choosing run additional tests at your own expense.",
        trap:
          "The liability is conditional on a guilty finding, so it is neither automatic nor free-of-charge in every case.",
        excerptKey: "blood-test-cost",
        sourceLabel: "Illinois Rules of the Road - Implied Consent Law",
        sourceUrl: HB,
      },
      {
        id: "il_s5_31",
        topic: "parking",
        question: "May you stop on the shoulder of an Illinois controlled-access roadway to check your phone?",
        choices: [
          "No - stopping, standing and parking are prohibited on a controlled-access roadway",
          "Yes, for up to five minutes",
          "Yes, provided your hazard lights are on",
          "Yes, but only beyond the last exit ramp",
        ],
        correctIndex: 0,
        explanation:
          "Stopping, standing and parking are all prohibited on a controlled-access roadway - one you may enter or leave only at set points.",
        context:
          "The distracted-driving rules do separately allow phone use while parked on the shoulder of a roadway, which is why the two rules get confused. On a controlled-access road, the parking prohibition means you should not be stopped there at all except in a genuine breakdown or emergency, and in that case the advice is to stay in the vehicle with your belt on, put the hazards on and call 911.",
        trap:
          "The phone exception for the shoulder makes it sound as if stopping there is generally lawful. On a controlled-access road, it is not.",
        excerptKey: "park-prohibited-list",
        sourceLabel: "Illinois Rules of the Road - Prohibited Stopping, Standing or Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s5_32",
        topic: "signs",
        question:
          "A NO U-TURN sign stands at a gap in the median of a divided highway. Who is that gap for?",
        choices: [
          "Any vehicle, once traffic has cleared in both directions",
          "Authorised vehicles such as police cars, ambulances, snow ploughs and maintenance equipment",
          "Vehicles displaying disability plates or placards",
          "Farm vehicles and other slow-moving vehicles",
        ],
        correctIndex: 1,
        explanation:
          "Median crossovers on divided highways and expressways are for authorised vehicles - police, ambulances, snow ploughs, construction and maintenance equipment and other emergency vehicles. Other traffic may not use them.",
        context:
          "It is worth knowing because the gap looks like an ordinary turning point and there is often no physical barrier stopping you using it. Illinois separately prohibits driving across median strips, unpaved dividers and median barriers, and restricts U-turns on curves and hills to places where you can see 500 feet in all directions. Municipalities may forbid U-turns on particular roads outright.",
        trap:
          "A clear road in both directions feels like the only condition that matters. The restriction is about who you are, not about visibility.",
        excerptKey: "sign-no-u-turn",
        sourceLabel: "Illinois Rules of the Road - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s5_33",
        topic: "rules",
        question:
          "A friend's car has broken down and you plan to tow it home with a rope. What does Illinois require?",
        choices: [
          "A rope no longer than 25 feet, with a red flag attached",
          "Nothing beyond hazard lights on both vehicles",
          "A drawbar, with the gap generally not exceeding 15 feet",
          "A commercial tow licence",
        ],
        correctIndex: 2,
        explanation:
          "Illinois requires towing by drawbar, with the distance between the vehicles generally not exceeding 15 feet, and the towed vehicle coupled with two chains or cables.",
        context:
          "A rope allows the towed vehicle to swing and to run into the back of the tow car whenever it brakes, which is why a rigid connection is required. Illinois also forbids pushing a disabled vehicle on a rural highway except in an emergency to remove a hazard, and requires anyone removing a wrecked vehicle to clear away all the glass and debris.",
        trap:
          "The 15-foot figure gets remembered and the drawbar requirement forgotten, which leaves people thinking a short rope is compliant.",
        excerptKey: "tow-drawbar",
        sourceLabel: "Illinois Rules of the Road - Disabled Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s5_34",
        topic: "rightOfWay",
        question:
          "A pedestrian stepped into the crosswalk while they still had the walk signal, and your light has now turned green. What must you do?",
        choices: [
          "Proceed - their signal has ended",
          "Sound your horn to hurry them",
          "Edge forward until they clear your lane",
          "Yield to them and let them finish crossing",
        ],
        correctIndex: 3,
        explanation:
          "A pedestrian who entered the crosswalk before the light changed keeps the right of way. You wait until they are clear.",
        context:
          "The pedestrian signals are written to work with this: a flashing upraised hand tells someone not to start crossing, but expressly allows anyone already in the road to continue to the sidewalk or a safety island. Your green light is a permission to go once the intersection and crosswalk are clear, and Illinois lists the duty to yield in these circumstances among its right-of-way rules.",
        trap:
          "The changed signal reads as the end of their permission. It is not - it only stops new pedestrians setting off.",
        excerptKey: "ped-entered-before-change",
        sourceLabel: "Illinois Rules of the Road - Pedestrian Right of Way",
        sourceUrl: HB,
      },
      {
        id: "il_s5_35",
        topic: "licensing",
        question:
          "A driver is convicted of operating without mandatory insurance. What is the minimum consequence?",
        choices: [
          "A fine, with no effect on driving privileges",
          "A one-month suspension and a $50 reinstatement fee",
          "Loss of driving privileges for at least three months, plus a $100 reinstatement fee, with no permit available",
          "Loss of driving privileges for one year",
        ],
        correctIndex: 2,
        explanation:
          "At least three months of lost driving privileges plus a $100 reinstatement fee, and no driving permit is available during that period.",
        context:
          "Illinois also suspends your vehicle registration and blocks plate renewal until you can show proof of cover. Three or more mandatory insurance tickets, or court supervision for one, forces you to file proof of financial responsibility - usually an SR-22 certificate lodged by your insurer directly with the Secretary of State, who then monitors the policy and suspends your licence if it lapses.",
        commonlyMissed: true,
        trap:
          "The 'no permit available' part is the sting. Most Illinois suspensions leave some route to limited driving; this one does not.",
        excerptKey: "insurance-violation-penalty",
        sourceLabel: "Illinois Rules of the Road - Safety Responsibility Law",
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
      "Thirty questions, mixed topics, no hints in the wording - the shape of the real thing. The Secretary of State's rule sets the Class D written test at a minimum of 35 questions with 80 percent required, so 28 of 35 is the bar you are training for.",
    questions: [
      {
        id: "il_s6_01",
        topic: "signs",
        question:
          "You reach a stop sign at an intersection with no stop line and no crosswalk. Where do you stop?",
        choices: [
          "Level with the sign itself",
          "Before entering the intersection",
          "Wherever you can see best, even if that is inside the intersection",
          "At least 30 feet back from the sign",
        ],
        correctIndex: 1,
        explanation:
          "With no stop line and no crosswalk, you stop before entering the intersection, then yield to pedestrians and approaching traffic.",
        context:
          "Illinois sets a fixed order for stopping points that applies at stop signs and red lights alike: the marked stop line if there is one, otherwise before the crosswalk, otherwise before the intersection. A temporary stop sign put up by a highway authority is treated exactly like a permanent one, and a hand-held stop sign held by a crossing guard or a work zone flagger means stay stopped until they signal you on.",
        trap:
          "Stopping level with the sign puts you too far forward at some intersections and too far back at others. The stopping point is defined by the road markings, not by the post.",
        excerptKey: "sign-stop-octagon",
        sourceLabel: "Illinois Rules of the Road - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s6_02",
        topic: "rules",
        question:
          "You are on a rural highway well outside any town. How far ahead must you signal a turn?",
        choices: [
          "At least 50 feet",
          "At least 100 feet",
          "At least 200 feet",
          "At least 300 feet",
        ],
        correctIndex: 2,
        explanation:
          "Two hundred feet outside business and residential areas. Inside them the requirement halves to 100 feet.",
        context:
          "The signal has to be continuous over that distance rather than flicked on at the last moment, and it applies to lane changes as well as turns. If your indicators fail, Illinois still recognises hand signals given with the left arm: straight out for left, bent upward for right, pointed down for slowing or stopping. The distances do not change when you use your arm.",
        trap:
          "100 feet is the built-up-area figure. On the open road, where closing speeds are higher, the requirement is double.",
        excerptKey: "signal-distance",
        sourceLabel: "Illinois Rules of the Road - Signaling",
        sourceUrl: HB,
      },
      {
        id: "il_s6_03",
        topic: "rightOfWay",
        question:
          "Two vehicles on different roads reach a four-way stop at exactly the same instant. Who goes first?",
        choices: [
          "The vehicle on the right",
          "The vehicle on the left",
          "The vehicle going straight ahead",
          "The vehicle that signals first",
        ],
        correctIndex: 0,
        explanation:
          "On a simultaneous arrival the vehicle on the left yields, so the vehicle on the right goes first.",
        context:
          "The primary rule at a four-way stop is order of arrival - the first driver to stop is the first to go. The left-yields-to-right rule is only a tie-break for genuine simultaneous arrivals, and it is the same rule that governs an intersection with no controls at all. Neither depends on which vehicle is larger, faster or on the wider road.",
        trap:
          "Under pressure the direction gets flipped. You yield to your right; the driver on your right goes.",
        excerptKey: "row-four-way-stop",
        sourceLabel: "Illinois Rules of the Road - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "il_s6_04",
        topic: "signals",
        question: "What does a broken white line between two lanes tell you?",
        choices: [
          "Traffic on the far side is moving toward you",
          "Traffic is moving the same way and you may cross to change lanes or turn",
          "You must stay in your lane until the line becomes solid",
          "The lane on your right is a bicycle lane",
        ],
        correctIndex: 1,
        explanation:
          "White separates traffic going the same direction, and broken means you may cross - specifically, to change lanes or to turn.",
        context:
          "The full ladder for white markings runs broken (cross freely to change lanes or turn), single solid (crossing calls for special care and is discouraged) and double solid (crossing prohibited). Solid white lines are also used along the right-hand edge of the pavement as edge lines, while solid yellow marks the left edge of a divided roadway.",
        trap:
          "Broken yellow looks similar at speed and means a two-way road where passing is allowed. The colour is what separates them.",
        excerptKey: "mark-broken-white",
        sourceLabel: "Illinois Rules of the Road - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "il_s6_05",
        topic: "speed",
        question:
          "You are on a two-lane rural highway in Illinois with no speed limit signs posted. What is the limit?",
        choices: ["35 mph", "45 mph", "50 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "Fifty-five miles per hour on other highways and rural areas. Four-lane highways go to 65 and interstates and tollways to 70.",
        context:
          "Illinois sets its defaults by road type rather than by setting, so a road through farmland and a road through a small town can carry different numbers without any sign changing. Local municipalities may post something different, and where they have, the sign governs. These are all maximums for good conditions and you are expected to go slower when the conditions call for it.",
        trap:
          "The scenery invites a guess. The classification of the road, not what it looks like, sets the default.",
        excerptKey: "speed-standard-limits",
        sourceLabel: "Illinois Rules of the Road - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "il_s6_06",
        topic: "licensing",
        question: "How long is a standard Illinois driver's license valid?",
        choices: ["Four years", "Three years", "Five years", "Eight years"],
        correctIndex: 0,
        explanation:
          "Four years, expiring on the driver's birthday. Drivers under 21 are the exception - their licence runs to three months after their 21st birthday.",
        context:
          "Older drivers renew more often: two-year licences from 81 to 86 and annual renewal at 87 and over. A written exam is required every eight years except for drivers with no traffic convictions, and the Safe Driver Renewal programme lets qualifying drivers aged 22 to 74 with clean records renew from home and visit a facility only once every eight years.",
        trap:
          "Eight years is the written-exam interval and the Safe Driver Renewal cycle, not the length of the licence itself.",
        excerptKey: "licence-validity",
        sourceLabel: "Illinois Rules of the Road - Driver's License Renewal",
        sourceUrl: HB,
      },
      {
        id: "il_s6_07",
        topic: "parking",
        question: "May you stop in front of a private driveway to wait for a passenger?",
        choices: [
          "Yes, if the vehicle is occupied",
          "Yes, for up to five minutes",
          "No - standing or parking in front of a public or private driveway is prohibited",
          "Yes, if the driveway does not appear to be in use",
        ],
        correctIndex: 2,
        explanation:
          "Standing or parking in front of a public or private driveway is prohibited, occupied or not.",
        context:
          "Illinois separates stopping, standing and parking, and the restrictions differ. Stopping, standing and parking are all banned on sidewalks, in crosswalks, inside intersections, in bike lanes, on bridges and on controlled-access roadways. Standing and parking are banned in front of driveways, within 15 feet of a hydrant, within 20 feet of a fire station driveway or an intersection crosswalk, and within 30 feet of a stop sign, yield sign or signal.",
        commonlyMissed: true,
        trap:
          "Staying in the car reads as 'not really parked'. Illinois calls that standing, and it is prohibited here too.",
        excerptKey: "park-hydrant-15",
        sourceLabel: "Illinois Rules of the Road - Prohibited Stopping, Standing or Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s6_08",
        topic: "safety",
        question: "Where should the shoulder strap of a safety belt sit?",
        choices: [
          "Behind your back, if it rubs your neck",
          "Under your arm, so it crosses the ribs",
          "Loose enough to lean forward freely",
          "Snug across the body, at or near the neck or face",
        ],
        correctIndex: 3,
        explanation:
          "As snug as possible while still letting you reach the controls, crossing the body at or near the neck or face. It never goes behind the back or under the arm.",
        context:
          "The lap portion has its own rule: across the hip bones, never across the stomach or the soft part of the abdomen, because the hips are bone and can take the load. Illinois requires belts for every driver and passenger aged 8 and older, front seat and back, and makes the driver responsible for securing anyone with a disability or medical condition who cannot fasten their own.",
        trap:
          "Tucking the strap behind you to stop it rubbing removes the upper-body restraint entirely, which is the part that keeps you off the wheel.",
        excerptKey: "belt-fitting",
        sourceLabel: "Illinois Rules of the Road - Safety Belt Fitting",
        sourceUrl: HB,
      },
      {
        id: "il_s6_09",
        topic: "impairment",
        question:
          "What THC concentration in whole blood makes it illegal to drive in Illinois regardless of how you are driving?",
        choices: [
          "1 nanogram per millilitre",
          "2 nanograms per millilitre",
          "5 nanograms per millilitre",
          "10 nanograms per millilitre",
        ],
        correctIndex: 2,
        explanation:
          "Five nanograms per millilitre of whole blood. The figure for other bodily substances is ten nanograms per millilitre.",
        context:
          "Illinois permits cannabis use at 21 and over and still treats driving strictly: you may not drive while impaired by it whether it was medical or recreational, it must travel in a sealed, odour-proof, child-resistant container, and neither driver nor passenger may use it in the vehicle. Any trace of a controlled substance or intoxicating compound in the blood is separately illegal, with no threshold at all.",
        trap:
          "The two numbers belong to two different sample types. Five is whole blood; ten is other bodily substances.",
        excerptKey: "thc-limit",
        sourceLabel: "Illinois Rules of the Road - Blood-Alcohol Concentration",
        sourceUrl: HB,
      },
      {
        id: "il_s6_10",
        topic: "sharing",
        question:
          "A truck ahead of you swings left and leaves a gap on its right just before a junction. What is happening?",
        choices: [
          "The driver is letting you through",
          "The driver has changed their mind about the turn",
          "The driver is pulling over to park",
          "The driver is setting up for a wide right turn, and the gap will close",
        ],
        correctIndex: 3,
        explanation:
          "Large vehicles swing wide to get round a corner, and the space that opens on the right closes as the trailer comes round. Driving into it puts you where the trailer is going.",
        context:
          "Sharing the road with trucks and buses is mostly about giving them room and staying visible: hang back far enough to see the driver in their side mirrors, watch their signals carefully, dim your headlights when following at night, and complete any pass quickly rather than sitting alongside. Size and weight change how a large vehicle manoeuvres and how long it takes to stop.",
        commonlyMissed: false,
        trap:
          "The gap looks like an invitation, and squeezing into it is one of the most common ways cars are crushed against a kerb.",
        excerptKey: "truck-wide-right",
        sourceLabel: "Illinois Rules of the Road - Large Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s6_11",
        topic: "emergencies",
        question: "You have just been in a crash. What is the first thing Illinois asks you to do?",
        choices: [
          "Stop in a safe, well-lit public place that does not obstruct traffic",
          "Exchange insurance details before doing anything else",
          "Move the vehicles off the road immediately, whatever their condition",
          "Photograph the scene before moving anything",
        ],
        correctIndex: 0,
        explanation:
          "Stop somewhere safe, well lit and out of the traffic flow if you can. Helping anyone injured, calling 911 and warning other drivers follow from there.",
        context:
          "The full sequence runs: stop safely, help anyone injured if needed or asked, call 911, warn other drivers with your hazard flashers and flares if you have them, then exchange names, addresses, phone numbers, licence numbers and plate numbers. You have 30 minutes to report the crash, and reports are required for any injury or death, property damage over $1,500, or over $500 if any vehicle involved is uninsured.",
        trap:
          "Exchanging details first leaves everyone standing in a live traffic lane, which is how secondary collisions happen.",
        excerptKey: "crash-first-steps",
        sourceLabel: "Illinois Rules of the Road - Traffic Violations/Crashes",
        sourceUrl: HB,
      },
      {
        id: "il_s6_12",
        topic: "signs",
        question: "You see a rectangular DO NOT PASS sign on a two-lane road. What else should you expect?",
        choices: [
          "A speed reduction of 10 mph",
          "A flagger controlling traffic",
          "A stop sign shortly ahead",
          "Yellow no-passing lines painted on the road",
        ],
        correctIndex: 3,
        explanation:
          "The sign and the markings work together. Where DO NOT PASS is posted, yellow no-passing lines run along the road for the same stretch.",
        context:
          "A PASS WITH CARE sign marks the far end of the zone and tells you that passing is permitted again when it is safe. A yellow pennant on the left-hand side of the road does the same job as DO NOT PASS at the start of a zone. Passing is separately prohibited in a range of places with no sign at all, including within 100 feet of an intersection and anywhere in a construction zone.",
        trap:
          "The end of the sign is not the end of the zone. Look for the markings or the PASS WITH CARE sign before you pull out.",
        excerptKey: "sign-no-passing-pennant",
        sourceLabel: "Illinois Rules of the Road - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s6_13",
        topic: "rules",
        question: "How do you tell other drivers you are about to leave a roundabout?",
        choices: [
          "Move to the outside lane without signalling",
          "Flash your headlights",
          "Use your right turn signal",
          "Slow down markedly on the approach to the exit",
        ],
        correctIndex: 2,
        explanation:
          "Use the right turn signal as you approach your exit. Traffic waiting to enter is reading your intentions and cannot see them any other way.",
        context:
          "Illinois roundabouts run counter-clockwise, so every exit is a right turn and every entry is made by turning right when it is safe. Slow on approach, read the signs and markings for movements that are prohibited, hold your lane through the circle, and check for vehicles in your blind spots before changing lanes or taking an exit.",
        commonlyMissed: true,
        trap:
          "Drivers signal on entry, which tells nobody anything, and then leave without signalling at the point where the information would actually be useful.",
        excerptKey: "roundabout-exit-signal",
        sourceLabel: "Illinois Rules of the Road - Rotary and Roundabout",
        sourceUrl: HB,
      },
      {
        id: "il_s6_14",
        topic: "signals",
        question:
          "You are on foot facing a steady orange upraised hand. What does it mean?",
        choices: [
          "Do not enter the roadway",
          "Cross quickly",
          "Cross only if no vehicle is turning",
          "Wait for a police officer to signal you",
        ],
        correctIndex: 0,
        explanation:
          "A steady upraised hand means do not enter the roadway at all. The flashing version is the one that lets you finish a crossing already begun.",
        context:
          "Illinois requires pedestrians to obey signals, observe walk lights and use crosswalks, and pedestrians crossing anywhere other than a marked or unmarked crosswalk must give way to drivers. Pedestrians also may not walk in the roadway where there is a sidewalk or shoulder, and in two-way traffic they should walk facing the oncoming vehicles.",
        trap:
          "Steady and flashing hands look alike from across a junction and carry different permissions.",
        excerptKey: "ped-signal-flashing-hand",
        sourceLabel: "Illinois Rules of the Road - Pedestrian Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "il_s6_15",
        topic: "speed",
        question:
          "Which of these is a situation in which Illinois requires you to slow below the posted limit?",
        choices: [
          "Going round a curve",
          "Passing a parked car",
          "Driving after dark on a lit street",
          "Driving with a full load of passengers",
        ],
        correctIndex: 0,
        explanation:
          "Curves are on the list, along with approaching and crossing an intersection, coming to the top of a hill, and travelling a narrow winding road.",
        context:
          "Illinois pairs the list with a general standard: the posted maximum applies only under safe conditions, and pedestrians, cyclists, traffic, weather, mechanical problems and the state of the road can all make a lower speed necessary. Small increases in speed produce large increases in stopping distance, since doubling your speed quadruples the distance the car needs to stop.",
        trap:
          "The wrong options are all situations where slowing is sensible. The question is which ones Illinois writes into the rule.",
        excerptKey: "speed-slow-down-when",
        sourceLabel: "Illinois Rules of the Road - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "il_s6_16",
        topic: "rightOfWay",
        question:
          "You have stopped at a stop sign and are about to pull out. What does Illinois require next?",
        choices: [
          "Nothing further - the stop discharged your duty",
          "Yield the right of way to other drivers, bicyclists and pedestrians",
          "Signal before moving off, whether or not you are turning",
          "Wait five seconds before moving",
        ],
        correctIndex: 1,
        explanation:
          "The stop and the yield are two separate duties. After stopping you must give way to other drivers, bicyclists and pedestrians before you move off.",
        context:
          "The same two-step structure runs through the Illinois right-of-way list: stop then yield at a stop sign or flashing red, stop then yield before a right turn on red, and stop then yield when emerging from an alley, building, private road or driveway. If there is no stop line you stop before the crosswalk, and if there is no crosswalk you stop where you can see all the approaching traffic.",
        trap:
          "Coming to a genuine stop feels like the whole obligation. It is only the first half of it.",
        excerptKey: "row-stop-sign-position",
        sourceLabel: "Illinois Rules of the Road - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "il_s6_17",
        topic: "licensing",
        question:
          "A 17-year-old has held their Illinois licence for 18 months. How many passengers may they now carry?",
        choices: [
          "One passenger under 20, as before",
          "One passenger of any age",
          "Two passengers under 20",
          "One in the front seat, and no more in the back than there are safety belts",
        ],
        correctIndex: 3,
        explanation:
          "After the first 12 months the strict under-20 limit lifts and the general rule takes over: one passenger in the front seat, and no more in the back than there are safety belts.",
        context:
          "The tight limit runs for the first 12 months of licensing or until the driver turns 18, whichever comes first, and during it only siblings, stepsiblings, children and stepchildren are exempt from the count. A traffic conviction in the six months before an 18th birthday can extend graduated-licensing restrictions beyond 18, so the timeline is not purely a matter of the calendar.",
        commonlyMissed: true,
        trap:
          "People remember the first-year restriction and assume it runs the whole way to 18. It expires at 12 months if that comes first.",
        excerptKey: "gdl-permit-passengers",
        sourceLabel: "Illinois Secretary of State - Graduated Driver Licensing",
        sourceUrl: GDL,
      },
      {
        id: "il_s6_18",
        topic: "parking",
        question:
          "You park on a slope on a road with no curb at all. Which way do the front wheels go?",
        choices: [
          "Toward the side of the road you are parked on",
          "Away from the side of the road",
          "Straight ahead",
          "It depends on whether you are facing uphill or downhill",
        ],
        correctIndex: 0,
        explanation:
          "With no curb, the wheels turn toward the side of the road you are parked on - uphill or downhill, it makes no difference.",
        context:
          "The three cases are worth learning as a set. Downhill with a curb: wheels toward the curb. Uphill with a curb: wheels away from the curb, so the tyre backs into it. No curb, either direction: wheels toward the side of the road. In every case the logic is the same - if the car rolls, it should leave the carriageway rather than cross it.",
        commonlyMissed: true,
        trap:
          "The uphill-versus-downhill distinction is real when there is a curb and irrelevant when there is not, which is why the no-curb case is the one people overthink.",
        excerptKey: "park-hill-no-curb",
        sourceLabel: "Illinois Rules of the Road - Hill Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s6_19",
        topic: "safety",
        question: "What does Illinois say about drowsy driving?",
        choices: [
          "It is only a risk on journeys over four hours",
          "Opening a window restores alertness sufficiently",
          "It can impair your ability to drive safely even if you never fall asleep",
          "It affects reaction time but not decision-making",
        ],
        correctIndex: 2,
        explanation:
          "Drowsiness impairs your driving whether or not you actually fall asleep - the reaction that never comes is the problem, not the moment of sleep.",
        context:
          "The handbook's advice is to be properly rested before setting out and to stop frequently on long journeys, and it suggests exercising your eyes by reading road signs and shifting your focus around the roadway. Alcohol compounds it, and mixing even small amounts of alcohol with other drugs, including ordinary antihistamines and cold remedies, is treated as particularly dangerous.",
        trap:
          "The danger is framed as falling asleep at the wheel. The more common failure is being awake and simply too slow to brake.",
        excerptKey: "drowsy-driving",
        sourceLabel: "Illinois Rules of the Road - Drowsy Driving",
        sourceUrl: HB,
      },
      {
        id: "il_s6_20",
        topic: "impairment",
        question: "What does Illinois's implied consent law mean for you as a driver?",
        choices: [
          "You must carry a breath testing device in the vehicle",
          "By driving on Illinois roads you have already consented to chemical testing",
          "You consent to testing only if you sign a form at a traffic stop",
          "You may choose which type of test is administered",
        ],
        correctIndex: 1,
        explanation:
          "Driving on Illinois roads carries automatic consent to breath, blood, urine or other bodily substance testing to establish whether you were under the influence.",
        context:
          "Where a crash involves personal injury or death and officers have probable cause to believe you were impaired, they are required to request a test rather than merely permitted to. You may arrange additional tests by a qualified person of your own choosing at your own expense. Refusing brings a longer suspension than failing, and the refusal itself may be used as evidence against you.",
        trap:
          "Consent is not something you give or withhold at the roadside. Refusing is possible, but it is a separate offence with its own penalty rather than an exercise of choice.",
        excerptKey: "implied-consent",
        sourceLabel: "Illinois Rules of the Road - Implied Consent Law",
        sourceUrl: HB,
      },
      {
        id: "il_s6_21",
        topic: "sharing",
        question: "May two bicyclists ride side by side on an Illinois road?",
        choices: [
          "No - bicyclists must always ride in single file",
          "Only on roads with a speed limit of 30 mph or less",
          "Yes, provided they do not impede the normal and reasonable movement of traffic",
          "Only where a bike lane is marked",
        ],
        correctIndex: 2,
        explanation:
          "Riding two abreast is permitted so long as it does not impede the normal and reasonable flow of traffic. More than two abreast is prohibited except on paths set aside for bicycles.",
        context:
          "Illinois gives bicyclists the same rights and responsibilities as other road users on most roads. They travel in the same direction as traffic, typically just to the right of faster vehicles, and may move toward the centre of the lane to avoid rough surfaces, debris, drainage grates or a lane too narrow to share. Bicycles are barred from controlled-access highways and expressways.",
        trap:
          "'Single file always' is a widespread assumption among drivers, and it is not the Illinois rule.",
        excerptKey: "bike-two-abreast",
        sourceLabel: "Illinois Rules of the Road - Bicycles",
        sourceUrl: HB,
      },
      {
        id: "il_s6_22",
        topic: "emergencies",
        question:
          "A driver leaves the scene of a crash in which $4,000 of property damage was done and nobody was hurt. What follows?",
        choices: [
          "A fine only",
          "Suspension of driving privileges",
          "Revocation of driving privileges",
          "Nothing, if the driver reports it within 24 hours",
        ],
        correctIndex: 1,
        explanation:
          "Where damage exceeds $1,000 and nobody was injured, leaving the scene brings suspension. Where death or personal injury occurred, the Secretary of State is required to revoke instead.",
        context:
          "Revocation and suspension are different sanctions. A suspension is a temporary loss ending on a fixed date once you pay the reinstatement fee. A revocation is an indefinite withdrawal, with a minimum period of a year before you may even apply to be relicensed. Leaving the scene of a crash that killed or injured someone sits on the revocation list alongside DUI, reckless homicide and aggravated fleeing.",
        trap:
          "Reporting it later does not undo leaving. The offence is completed when you drive away.",
        excerptKey: "crash-leaving-scene",
        sourceLabel: "Illinois Rules of the Road - Leaving the Scene of a Crash",
        sourceUrl: HB,
      },
      {
        id: "il_s6_23",
        topic: "signs",
        question:
          "Traffic is heavily congested and a sign warns that two lanes reduce to one ahead. What does Illinois recommend?",
        choices: [
          "Merge as early as possible, whatever the traffic",
          "Use both lanes up to the merge point and take turns",
          "Stay in the through lane and refuse to let others in",
          "Use the shoulder to bypass the queue",
        ],
        correctIndex: 1,
        explanation:
          "In dense, slow-moving traffic Illinois advises using both lanes right up to the merge point and alternating turns - the zipper merge.",
        context:
          "The advice flips with the traffic. When the road is not congested, merge into the open lane as early as you can. When it is congested, both lanes stay in use to the merge point because that keeps the queue shorter and the traffic moving. Portable changeable message signs are often used to tell drivers which of the two to do.",
        trap:
          "Merging early is treated as the polite thing to do and is the wrong advice in heavy traffic - it wastes half the road.",
        excerptKey: "sign-zipper-merge",
        sourceLabel: "Illinois Rules of the Road - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s6_24",
        topic: "rules",
        question:
          "At what distance must you dim your high beams for an oncoming vehicle in Illinois?",
        choices: ["100 feet", "200 feet", "300 feet", "500 feet"],
        correctIndex: 3,
        explanation:
          "Five hundred feet before meeting an oncoming vehicle, and 300 feet before passing one from behind.",
        context:
          "The two distances differ because of where the light lands: an oncoming driver takes your beams straight in the eyes, while a driver you are overtaking gets them via the mirrors, so the shorter figure is enough. Headlights are required from sunset to sunrise, whenever your wipers are running, and when you cannot see objects a thousand feet away.",
        commonlyMissed: true,
        trap:
          "The 300-foot figure is real but belongs to the vehicle you are following. Meeting an oncoming vehicle needs the longer distance.",
        excerptKey: "night-dim-distances",
        sourceLabel: "Illinois Rules of the Road - Night Driving",
        sourceUrl: HB,
      },
      {
        id: "il_s6_25",
        topic: "signals",
        question:
          "Broad white lines are painted across the road mid-block, with a pedestrian crossing sign beside them. What is your obligation?",
        choices: [
          "Yield only if a pedestrian is more than halfway across",
          "Sound your horn on approach",
          "Pedestrians in the crosswalk have the right of way over vehicles",
          "Nothing, because a crosswalk away from a junction is advisory",
        ],
        correctIndex: 2,
        explanation:
          "It is a crosswalk, and pedestrians in it have the right of way over vehicles. Being mid-block rather than at an intersection changes nothing.",
        context:
          "Illinois crosswalk lines are painted across the full width of the pavement and are sometimes hatched with diagonal stripes for visibility. Mid-block crossings are exactly why the handbook tells you to watch both sides of the street rather than only scanning junctions, and some are fitted with a yellow flashing beacon to raise the chance a driver notices them.",
        trap:
          "Drivers scan for pedestrians at intersections and stop scanning between them. Mid-block crosswalks carry the same right of way.",
        excerptKey: "mark-crosswalk-row",
        sourceLabel: "Illinois Rules of the Road - White Crosswalk Lines",
        sourceUrl: HB,
      },
      {
        id: "il_s6_26",
        topic: "licensing",
        question: "How many license plates must an Illinois passenger car display?",
        choices: [
          "One, on the rear",
          "Two - one front and one rear",
          "One, on the front",
          "Two, but only for vehicles over 8,000 pounds",
        ],
        correctIndex: 1,
        explanation:
          "Two - one on the front and one on the rear. Motorcycles, mopeds, trailers and semitrailers display a single rear plate.",
        context:
          "Plate frames must not cover any of the information on the plate, and plate covers are not allowed at all. In Illinois the plates belong to the owner rather than to the vehicle, so when you sell a car you take the plates off and keep them. The registration ID card that comes with the plates has to be carried in the vehicle or on you when you drive.",
        trap:
          "Single-plate states are common enough that new residents assume the rear plate is sufficient here.",
        excerptKey: "plates-two-required",
        sourceLabel: "Illinois Rules of the Road - License Plate Requirements",
        sourceUrl: HB,
      },
      {
        id: "il_s6_27",
        topic: "safety",
        question: "From how far away must a vehicle's horn be audible in Illinois?",
        choices: ["200 feet", "100 feet", "300 feet", "500 feet"],
        correctIndex: 0,
        explanation:
          "Two hundred feet. Sirens, whistles and bells are allowed only on authorised emergency vehicles.",
        context:
          "The required-equipment list is worth reading as a group of numbers: a rearview mirror giving at least 200 feet of view behind, taillights visible from 500 feet, turn signals visible from 300 feet, a licence plate light making the plate readable from 50 feet, and a foot brake capable of stopping a vehicle doing 20 mph within 30 feet. Tinted windows are not permitted on the front windshield beyond a six-inch strip along the top.",
        trap:
          "200 feet is also the mirror figure, which is why the horn and the mirror get swapped with the 300 and 500 foot lighting figures.",
        excerptKey: "equip-horn",
        sourceLabel: "Illinois Rules of the Road - Required Equipment",
        sourceUrl: HB,
      },
      {
        id: "il_s6_28",
        topic: "impairment",
        question: "What actually reduces the amount of alcohol in your body?",
        choices: [
          "Strong coffee",
          "A cold shower",
          "Eating a substantial meal",
          "Time",
        ],
        correctIndex: 3,
        explanation:
          "Only time. Food, coffee and showers change how awake you feel and do nothing at all to the alcohol in your system.",
        context:
          "How alcohol affects you at a given moment depends on what you have eaten, your tolerance and any drugs you have taken - but none of that speeds up elimination. Illinois is explicit that alcohol impairs your driving well below the point of legal intoxication, slowing reaction times and affecting vision, so even a small amount raises the chance of causing a crash.",
        trap:
          "Coffee makes an intoxicated person a wide-awake intoxicated person. It changes nothing about their blood-alcohol concentration.",
        excerptKey: "time-only-cure",
        sourceLabel: "Illinois Rules of the Road - Blood-Alcohol Concentration",
        sourceUrl: HB,
      },
      {
        id: "il_s6_29",
        topic: "sharing",
        question:
          "A vehicle has been abandoned on the shoulder of an Illinois interstate. After how long may law enforcement have it towed at the owner's expense?",
        choices: ["30 minutes", "One hour", "Two hours", "Ten hours"],
        correctIndex: 2,
        explanation:
          "Two hours on an interstate, expressway or toll highway. The window is ten hours on an urban highway and 24 hours on a non-urban one.",
        context:
          "Illinois requires a disabled, unattended or abandoned vehicle to be removed from the roadway as soon as possible, and the towing windows reflect how dangerous each road is. Related duties sit alongside: you may not push a disabled vehicle on a rural highway except in an emergency to remove a hazard, and anyone removing a wrecked vehicle has to clear away the glass and debris.",
        commonlyMissed: true,
        trap:
          "The ten-hour figure sounds like the general rule because it is the middle one. On an interstate the window is five times shorter.",
        excerptKey: "abandoned-removal",
        sourceLabel: "Illinois Rules of the Road - Disabled Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s6_30",
        topic: "emergencies",
        question:
          "A car clips a school bus in a car park and leaves a scratch worth about $200. Is a crash report required?",
        choices: [
          "Yes - any crash involving a school bus must be reported",
          "No, because the damage is below $1,500",
          "No, because it happened in a car park rather than on a road",
          "Only if children were on board at the time",
        ],
        correctIndex: 0,
        explanation:
          "A crash involving a school bus must be reported for any property damage, personal injury or crash - the dollar thresholds do not apply.",
        context:
          "A report is also required where a crash within 50 feet of a school bus injures or kills someone waiting to board or who has just got off. The general thresholds - more than $1,500 in property damage, or more than $500 where any vehicle involved is uninsured, plus any death or bodily injury - are the rules for everything else. You have 30 minutes to report either way.",
        trap:
          "Reaching for the $1,500 figure is the natural move, and school buses are carved out of it entirely.",
        excerptKey: "crash-school-bus-report",
        sourceLabel: "Illinois Rules of the Road - Crash Reports",
        sourceUrl: HB,
      },
    ],
  },
];
