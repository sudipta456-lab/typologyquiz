import type { DrivingTestSet } from "../types";

// Sets 4 to 6 of the Florida bank. Same sourcing rules as sets 1 to 3: every
// fact checked against the Official Florida Driver License Handbook
// (rev. 08/2023) and FLHSMV's own licensing pages, with the Florida Statutes
// used only where the handbook does not state the operative rule. Questions,
// explanations, context and trap notes are original.
const HB = "https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf";
const GDL =
  "https://www.flhsmv.gov/driver-licenses-id-cards/licensing-requirements-teens-graduated-driver-license-laws-driving-curfews/";
const EXAM =
  "https://www.flhsmv.gov/driver-licenses-id-cards/licensing-requirements-teens-graduated-driver-license-laws-driving-curfews/class-e-knowledge-exam-driving-skills-test/";

export const floridaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Wider Ground",
    difficulty: "medium",
    description:
      "Thirty-five questions across the parts of the handbook people skim: work zones, equipment, crash duties, insurance consequences, and the right-of-way rules that only show up in Florida.",
    questions: [
      {
        id: "fl_s4_01",
        topic: "signs",
        question: "What is a fluorescent yellow-green sign used for in Florida?",
        choices: [
          "Emergency detour routes",
          "High emphasis warning of school, pedestrian and bicycling activity",
          "Temporary construction warnings",
          "Hurricane evacuation routes",
        ],
        correctIndex: 1,
        explanation:
          "The bright yellow-green colour is reserved for high emphasis warnings about school, pedestrian and bicycling activity. It is deliberately different from ordinary yellow so it stands out.",
        context:
          "Florida's colour system does a lot of work. Red is stop or prohibition, orange is construction and maintenance, yellow is general warning, fluorescent yellow-green is school and vulnerable road users, white with black is regulatory, green is guide information, blue is driver services and disabled parking, and brown marks recreation and historic sites.",
        trap:
          "Orange is the construction colour, and it is the one people reach for whenever a sign is not ordinary yellow.",
        excerptKey: "sign-color-fluorescent-green",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Traffic Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_02",
        topic: "rules",
        question:
          "You are stopped at a red light on a one-way street, wanting to turn left onto another one-way street whose traffic runs to the left. What does Florida allow?",
        choices: [
          "Nothing; left on red is never permitted",
          "The turn, but only where a sign specifically authorises it",
          "The turn after stopping, yielding to pedestrians and oncoming traffic",
          "The turn only between one-way streets in a signed business district",
        ],
        correctIndex: 2,
        explanation:
          "Florida permits a left turn on red from a one-way street onto a one-way street carrying traffic to the left. You stop first, then yield to pedestrians in the crosswalk and to oncoming traffic.",
        context:
          "It is the mirror of right on red and carries the same conditions: a complete stop, no NO TURN ON RED sign, and a clear way. The permission applies at a red arrow as well as a steady red. Both permissions vanish the moment a NO TURN ON RED sign is posted, which is why that sign is worded to cover left turns as well as right.",
        trap:
          "'Left on red is never permitted' is true in plenty of states and is not the Florida rule for one-way to one-way turns.",
        excerptKey: "left-turn-on-red-one-way",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_03",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a white cane with a red tip is stepping into the road ahead of you. What must you do?",
        choices: [
          "Sound your horn to make your presence known",
          "Slow and pass behind them",
          "Come to a complete stop and yield the right-of-way",
          "Yield only if they are within a marked crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "Florida requires a complete stop, yielding the right-of-way, and extra caution for a visually impaired pedestrian using a white cane with a red tip or a guide animal.",
        context:
          "The same duty covers pedestrians using a walker, crutch, orthopaedic cane or wheelchair, anyone with a guide dog or service animal, and children or any confused or incapacitated pedestrian. It sits on top of the ordinary crosswalk rules, and it does not depend on markings or signals.",
        trap:
          "Sounding the horn is actively unhelpful with a visually impaired pedestrian, who is navigating by sound and has just lost their reference.",
        excerptKey: "white-cane",
        sourceLabel: "Official Florida Driver License Handbook - Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_04",
        topic: "speed",
        question:
          "You are driving well under the limit on a clear road and a queue has built up behind you. What is your position under Florida law?",
        choices: [
          "You are safe, because you are under the posted limit",
          "You may be breaking the law by blocking or delaying traffic moving at normal, safe speeds",
          "You are required to pull over every mile to let traffic pass",
          "You are legal as long as you are not in the left lane",
        ],
        correctIndex: 1,
        explanation:
          "Driving too slowly is against Florida law. You must not drive so slowly that you block or delay traffic that is moving at normal, safe speeds.",
        context:
          "The practical answer is to drive with the flow within the limit, and to keep right when you are slower than everyone else so they can pass. Slower traffic must move out of the left lane when a faster vehicle comes up behind, and on a road posted at 70 mph there is also a hard minimum of 50 mph.",
        trap:
          "'Under the limit therefore legal' is the assumption. Florida enforces the bottom of the range as well as the top.",
        excerptKey: "driving-too-slowly",
        sourceLabel: "Official Florida Driver License Handbook - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_05",
        topic: "parking",
        question: "How close to a stop sign or traffic signal may you park in Florida?",
        choices: [
          "No closer than 20 feet",
          "No closer than 50 feet",
          "No closer than 30 feet",
          "No closer than 15 feet",
        ],
        correctIndex: 2,
        explanation:
          "Thirty feet is the required clearance from any flashing signal, stop sign or traffic signal, so a parked vehicle cannot hide the control from approaching drivers.",
        context:
          "The full set is worth memorising as a list because the exam picks one at random: 15 feet from a fire hydrant, 20 feet from an intersection, 20 feet from the entrance to a fire, ambulance or rescue station, 30 feet from a rural mailbox on a state highway between 8 am and 6 pm, 30 feet from a flashing signal, stop sign or traffic signal, and 50 feet from a railroad crossing.",
        trap:
          "Twenty feet is the intersection figure. A stop sign usually sits close to the intersection, which is exactly why the two get merged.",
        excerptKey: "parking-distances",
        sourceLabel: "Official Florida Driver License Handbook - Parking",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_06",
        topic: "licensing",
        question:
          "You let your Florida insurance lapse and never provide proof of new coverage. What is the maximum period your licence and plate can be suspended?",
        choices: [
          "Six months",
          "Three years",
          "One year",
          "Until the next registration renewal",
        ],
        correctIndex: 1,
        explanation:
          "Failing to provide proof of new insurance can suspend your driver licence and licence plate for up to three years.",
        context:
          "The chain starts with your insurer, which must tell FLHSMV when a policy is renewed, cancelled or dropped. You then get a notice asking for proof of new coverage. Reinstatement costs between $150 and $500, and while the suspension is running you cannot get a temporary or hardship licence for any reason, not even to get to work. Turning in the plate before you cancel the policy avoids the whole sequence.",
        trap:
          "People assume the penalty ends when the registration expires. It runs on its own three-year clock.",
        excerptKey: "insurance-suspension-three-years",
        sourceLabel: "Official Florida Driver License Handbook - Insurance Laws",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_07",
        topic: "impairment",
        question:
          "A 20-year-old driver registers a breath alcohol level of .06. Beyond the suspension, what else does Florida require?",
        choices: [
          "Attendance at a substance abuse course",
          "Twelve hours of DUI school",
          "An ignition interlock device for six months",
          "Fifty hours of community service",
        ],
        correctIndex: 0,
        explanation:
          "Any driver under 21 with a level of .05 or higher is required to attend a substance abuse course, on top of the six-month suspension that .02 already triggers.",
        context:
          "The under-21 rules use two thresholds and it pays to keep them apart. At .02 or above the driving privilege is suspended for six months. At .05 or above the substance abuse course is added, and where the driver is under 19 an evaluation is done and the parents or guardians are notified of the result.",
        trap:
          "DUI school, interlock devices and community service belong to the adult DUI conviction schedule, not the under-21 administrative rules.",
        excerptKey: "under-21-05-course",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Zero Tolerance",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_08",
        topic: "sharing",
        question:
          "A semi-truck ahead of you swings out to the left before turning right at a junction. What should you do?",
        choices: [
          "Move into the gap on its right to keep traffic flowing",
          "Overtake on the left while the truck is committed to the turn",
          "Stay back; do not drive between the truck and the kerb",
          "Sound your horn to warn the driver you are alongside",
        ],
        correctIndex: 2,
        explanation:
          "Commercial vehicles have to swing wide to the left in order to bring the trailer round a right turn. You must not drive into the gap between the truck and the kerb, because the driver cannot see you there.",
        context:
          "It is one instance of the No Zone, the set of large blind spots a commercial vehicle carries front, rear and along both sides. The related habits are to avoid tailgating, to pass on the left and get through quickly, to be able to see the cab in your mirror before pulling back in, and never to cross behind a truck that is backing or about to back.",
        trap:
          "The gap on the right looks like a lane opening up and is the single most dangerous piece of road near a turning truck.",
        excerptKey: "cmv-right-turn-swing",
        sourceLabel: "Official Florida Driver License Handbook - Commercial Motor Vehicles",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_09",
        topic: "emergencies",
        question: "A front tyre blows out at highway speed. What is the first thing you should do?",
        choices: [
          "Brake firmly to bring the speed down quickly",
          "Take your foot off the gas and stay off the brakes",
          "Steer hard toward the shoulder immediately",
          "Apply the parking brake to slow the car evenly",
        ],
        correctIndex: 1,
        explanation:
          "Come off the accelerator and leave the brakes alone. Concentrate on steering, let the speed fall away gradually, brake softly once the car is under control, then pull completely off the road.",
        context:
          "Braking during a blowout is what turns a straight-line deceleration into a spin, because the car is already pulling toward the failed tyre. The same off-the-gas, hands-steady discipline covers dropping a wheel off the pavement and the general problem of overcorrection, which Florida singles out as a cause of rollover crashes.",
        trap:
          "Braking firmly is the instinct in every emergency and is precisely wrong here.",
        excerptKey: "tire-blowout",
        sourceLabel: "Official Florida Driver License Handbook - Handling Emergencies",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_10",
        topic: "signals",
        question: "A yellow X appears above the lane you are travelling in. What does it mean?",
        choices: [
          "The lane signal is about to turn red",
          "The lane is reserved for turning traffic",
          "You must stop within the lane",
          "The lane has become a high occupancy vehicle lane",
        ],
        correctIndex: 0,
        explanation:
          "A yellow X warns that the lane signal is about to turn red, so you should move out of that lane.",
        context:
          "Lane signals are used where flow direction changes through the day, where toll lanes open and close, and where lanes are shut for incidents. Red X means never drive in that lane. Green arrow means you may use it, subject to every other sign and signal. Reversible lanes carry their own pavement markings and signs on top of the overhead signals.",
        trap:
          "Reading the yellow X as an instruction to stop where you are treats a lane signal like a traffic light, which it is not.",
        excerptKey: "lane-signal-yellow-x",
        sourceLabel: "Official Florida Driver License Handbook - Lane Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_11",
        topic: "safety",
        question: "Where does the Florida handbook say children under 13 should sit?",
        choices: [
          "In the front seat where the driver can supervise them",
          "In the rear seat",
          "In any seat, provided they are belted",
          "In the rear seat only until they reach 80 pounds",
        ],
        correctIndex: 1,
        explanation:
          "Children under 13 should be in the rear seat, because a deploying front airbag can injure or kill a young child.",
        context:
          "The related absolute is that a rear-facing car seat must never be placed in front of an airbag. Air bags are designed to work with belts rather than instead of them. Below that age band the restraint rules take over: a safety seat under 4, and a safety seat or booster at ages 4 and 5.",
        trap:
          "A weight threshold sounds plausible because car seats use them, but the handbook's guidance here is stated as an age.",
        excerptKey: "children-under-13-rear-seat",
        sourceLabel: "Official Florida Driver License Handbook - Child Passenger Safety",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_12",
        topic: "signs",
        question:
          "White markings shaped like connected X's are painted around a railroad crossing. What are they for?",
        choices: [
          "They mark a pedestrian route across the tracks",
          "They show where the crossing gates come down",
          "They highlight the zone where you must never stop",
          "They indicate a crossing with more than one track",
        ],
        correctIndex: 2,
        explanation:
          "That marking is the dynamic envelope. It highlights the danger zone a train sweeps through, and anything stopped inside it can be struck.",
        context:
          "Everything else about railroad crossings follows the same logic. Never stop on the tracks or within 15 feet of the crossing. Make sure there is room for your vehicle on the far side before you start across. If there is more than one track, check them all. And a stalled train warning gives you very little time: about 20 seconds passes between the lights starting to flash and a train reaching the crossing.",
        trap:
          "The number of tracks is shown on a small sign under the crossbuck, not by the pavement marking.",
        excerptKey: "dynamic-envelope",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Railroad Crossing Signs & Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_13",
        topic: "rules",
        question: "How close to an intersection or a bridge does Florida forbid passing?",
        choices: [
          "Within 50 feet",
          "Within 200 feet",
          "Within 100 feet",
          "Within 500 feet",
        ],
        correctIndex: 2,
        explanation:
          "Passing is prohibited within 100 feet of an intersection, bridge, viaduct, tunnel or railroad crossing.",
        context:
          "The other passing distances sit around it: no passing on a hill or curve where you cannot see 500 feet ahead, and you must be back on the right side of the road before you come within 200 feet of an approaching vehicle. You also must not pass where the line on your side is solid, in a marked no-passing zone, when a school bus has its stop signal out, or at a crosswalk where a vehicle has stopped for a pedestrian.",
        trap:
          "Five hundred feet is the sight-distance figure for hills and curves. Applying it here makes the rule far broader than it is.",
        excerptKey: "no-pass-zones",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Passing",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_14",
        topic: "rightOfWay",
        question:
          "You are in the acceleration lane joining a Florida expressway. Who has the right-of-way?",
        choices: [
          "You do, because merging traffic has priority",
          "Traffic already on the highway",
          "Whichever vehicle is travelling faster",
          "Traffic in the right-hand highway lane must move over for you",
        ],
        correctIndex: 1,
        explanation:
          "You yield to traffic already on the highway and merge when you can do so safely. The acceleration lane exists so you can match speed while you look for the gap.",
        context:
          "Every expressway entrance has three parts: the entrance ramp, the acceleration lane and the merging area. You start looking for a gap on the ramp, signal, build speed as the ramp straightens, and merge by the end of the acceleration lane. Stopping in the acceleration lane is only acceptable when traffic is so heavy there is genuinely no space to enter.",
        trap:
          "Drivers already on the highway are asked to make room where they can, which is courtesy and good practice, not a transfer of the right-of-way.",
        excerptKey: "merge-yield-highway",
        sourceLabel: "Official Florida Driver License Handbook - Limited Access Highways",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_15",
        topic: "speed",
        question:
          "On dry pavement with good brakes at 50 mph, roughly how far does a car travel while braking, once the brakes are actually applied?",
        choices: [
          "About 55 feet",
          "About 268 feet",
          "About 100 feet",
          "About 158 feet",
        ],
        correctIndex: 3,
        explanation:
          "Braking distance alone at 50 mph on dry pavement is about 158 feet. That is the distance after you are already on the brake pedal.",
        context:
          "Total stopping distance adds two more pieces. Perception distance covers the time between your eyes seeing the hazard and your brain recognising it, and reaction distance is the roughly 55 feet you cover at 50 mph before your foot reaches the brake. Put together, stopping from 50 mph takes a minimum of about 268 feet, nearly the length of a football field.",
        trap:
          "268 feet is the total including perception and reaction. The question asks for the braking component alone.",
        excerptKey: "braking-distance-50",
        sourceLabel: "Official Florida Driver License Handbook - Braking Distance",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_16",
        topic: "parking",
        question: "What does Florida ask you to do before opening your door into the roadway?",
        choices: [
          "Sound the horn briefly",
          "Switch on the hazard lights",
          "Check the traffic around you, including cyclists",
          "Open it only from the kerb side",
        ],
        correctIndex: 2,
        explanation:
          "Check traffic around you before getting out, so you do not open your door into a cyclist or another vehicle.",
        context:
          "The rest of the parking routine is just as concrete: park as far from traffic as you can, on the right side of the road unless it is a one-way street, parallel to the kerb in the direction of travel with the right-hand wheels within 12 inches, brake set, gear selected, engine off and keys removed. Before pulling away you check the road is clear, signal and yield.",
        trap:
          "Insisting on the kerb side only would leave the driver climbing over the passenger seat, which is not what the handbook asks for. It asks you to look.",
        excerptKey: "parking-check-before-door",
        sourceLabel: "Official Florida Driver License Handbook - Parking",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_17",
        topic: "licensing",
        question:
          "You have never held a driver licence anywhere. What course must you complete before applying in Florida?",
        choices: [
          "A basic driver improvement course",
          "An advanced driver improvement course",
          "The Traffic Law and Substance Abuse Education course",
          "A defensive driving course approved by your insurer",
        ],
        correctIndex: 2,
        explanation:
          "The Traffic Law and Substance Abuse Education course is required before you apply, if you have never held or do not have in your possession a driver licence from any state, country or jurisdiction.",
        context:
          "Florida's other courses exist for different reasons. Basic driver improvement is what you take after certain crashes or convictions, or in place of points on a citation. Advanced driver improvement is a reinstatement requirement after a suspension for points, habitual offender status or a court order. A certified school driver education course can substitute for the entry-level requirement.",
        trap:
          "Basic driver improvement is the course most Floridians have heard of, because it is the one people take to avoid points.",
        excerptKey: "tlsae-required",
        sourceLabel: "Official Florida Driver License Handbook - Driving Schools & Test Providers",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_18",
        topic: "impairment",
        question:
          "Someone is convicted of possessing a controlled substance in a case with no vehicle involved at all. What happens to their Florida driver licence?",
        choices: [
          "Nothing, because driving was not involved",
          "Points are added but the licence continues",
          "It must be suspended",
          "It is suspended only if they are under 21",
        ],
        correctIndex: 2,
        explanation:
          "Florida law requires the driver licence to be suspended on conviction for possessing, selling or trafficking in drugs, including marijuana. No vehicle needs to have been involved.",
        context:
          "Florida also attaches vehicle consequences to drug offences directly: a car used to transport, sell or distribute drugs, or to help commit another felony, can be seized and forfeited to the arresting agency. Separately, a felony conviction for drug possession is on the list of offences that require revocation of the driving privilege.",
        trap:
          "'No driving, no driving penalty' is the intuitive position and it is exactly what this Florida rule departs from.",
        excerptKey: "drug-conviction-suspension",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Your Driving Privilege",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_19",
        topic: "sharing",
        question: "Which motorcycle riders may legally ride without a helmet in Florida?",
        choices: [
          "Riders 18 or over on roads posted at 35 mph or less",
          "Riders 21 or over who carry at least $10,000 in medical benefits coverage",
          "Riders 21 or over, with no further condition",
          "No one; helmets are mandatory for all riders",
        ],
        correctIndex: 1,
        explanation:
          "A motorcycle operator must wear a helmet unless they are 21 or older and carry a medical insurance policy providing at least $10,000 in medical benefits for injuries. Both conditions have to be met.",
        context:
          "It sits inside a wider set of motorcycle rules. Riders must be 16 or over, and an operator must complete an approved safety course and hold either a motorcycle endorsement or a Motorcycle Only licence. An under-18 rider must hold a learner's licence for 12 months with no moving violation convictions first. Motorcycle and moped riders are not required to carry personal injury protection insurance.",
        trap:
          "Remembering only the age half of the rule is the usual failure, and the insurance condition is the half that actually does the work.",
        excerptKey: "motorcycle-helmet-21",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Motorcycles and Mopeds",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_20",
        topic: "emergencies",
        question: "Your car goes into a canal and starts to sink. What does the handbook tell you to do first?",
        choices: [
          "Call 911 before the phone gets wet",
          "Wait for the cabin to fill so the pressure equalises, then open the door",
          "Unbuckle and get out immediately, before the car sinks",
          "Open the door straight away while the car is still floating",
        ],
        correctIndex: 2,
        explanation:
          "Get out immediately. The vehicle will only float for about 30 to 60 seconds, and the handbook is explicit that you do not call 911 until you are out.",
        context:
          "The sequence is unbuckle, get the window down before the car sinks, and if the window will not lower, kick out a side window. Opening the door is possible while the car is still on the surface, but the cabin fills instantly when you do, which is why the window is the better route.",
        trap:
          "Waiting for pressure to equalise is advice that circulates widely and spends the only 30 to 60 seconds you have.",
        excerptKey: "submerged-vehicle",
        sourceLabel: "Official Florida Driver License Handbook - Handling Emergencies",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_21",
        topic: "signals",
        question: "A signal on the entrance ramp to a Florida expressway shows red. What must you do?",
        choices: [
          "Wait for the green signal before entering the expressway",
          "Treat it as a yield and merge when there is a gap",
          "Stop only if traffic is queueing on the ramp",
          "Treat it as a stop sign and proceed after stopping",
        ],
        correctIndex: 0,
        explanation:
          "Ramp signals alternate between red and green to control how fast vehicles enter the expressway. You wait for the green before entering.",
        context:
          "Metering the ramp keeps merging traffic from arriving in clumps that force the main carriageway to brake. It sits alongside the rest of the entry procedure: look for a gap while you are still on the ramp, signal, build speed through the acceleration lane, and yield to traffic already on the highway.",
        trap:
          "Treating it like a stop sign, and going as soon as you have stopped, defeats the metering and puts you into the gap the signal was holding you back from.",
        excerptKey: "ramp-signals",
        sourceLabel: "Official Florida Driver License Handbook - Ramp Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_22",
        topic: "signs",
        question: "A sign reads PASS WITH CARE. What is it telling you?",
        choices: [
          "Passing is prohibited from this point",
          "You are leaving a no-passing zone and may pass, cautiously",
          "You may pass only vehicles travelling under 35 mph",
          "Passing is permitted only on the right",
        ],
        correctIndex: 1,
        explanation:
          "PASS WITH CARE tells you passing is allowed here and asks you to do it carefully. It typically marks the end of a stretch where passing was not permitted.",
        context:
          "It pairs with DO NOT PASS and with the pavement markings that carry the same message. Whatever the sign says, the ordinary passing conditions still apply: signal before you move out, do not exceed the speed limit while passing, do not pass more than one vehicle at a time, and be back on the right side before you come within 200 feet of an approaching vehicle.",
        trap:
          "Reading the word 'care' as a warning that passing is discouraged inverts the sign, which is a permission.",
        excerptKey: "pass-with-care-sign",
        sourceLabel: "Official Florida Driver License Handbook - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_23",
        topic: "rules",
        question:
          "You are in the right-hand lane of a four-lane road and a police car is stopped ahead on the shoulder with its lights flashing. Traffic makes it impossible to change lanes safely. What does the Move Over law require?",
        choices: [
          "Stop until the lane beside the police car is clear",
          "Continue at the posted limit, since you cannot move over",
          "Slow to 20 mph below the posted speed limit",
          "Slow to 5 mph and pass in the same lane",
        ],
        correctIndex: 2,
        explanation:
          "On a multi-lane road you must vacate the lane closest to the stopped vehicle. Where that cannot be done safely, you must slow to 20 mph below the posted limit instead.",
        context:
          "The law covers law enforcement, emergency workers, tow trucks, sanitation and utility vehicles, and road and bridge maintenance or construction vehicles displaying warning lights, and it now also covers disabled vehicles stopped with hazard lights, flares or signage, or where people are visibly present. On a two-lane road the rule is different again: slow to 20 mph below the limit, or to 5 mph if the limit is 20 mph or less.",
        trap:
          "5 mph is the two-lane figure and only applies where the posted limit is already 20 mph or less.",
        excerptKey: "move-over-multi-lane",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Move Over Law",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_24",
        topic: "rightOfWay",
        question:
          "The car ahead of you in the next lane has stopped at a crosswalk to let someone cross, though you cannot see anyone. What may you do?",
        choices: [
          "Pass, since your lane is clear",
          "Pass slowly with your horn ready",
          "You may not overtake it; assume a pedestrian is crossing",
          "Pass only if the crosswalk is unmarked",
        ],
        correctIndex: 2,
        explanation:
          "You may not overtake or pass a vehicle that has stopped at a crosswalk to let a pedestrian cross. A driver approaching from behind must assume someone is crossing even when nobody is visible.",
        context:
          "The whole rule is written around the sightline problem: the stopped car is the very thing hiding the pedestrian from you. The same reasoning drives the wider crosswalk duties, which are to stop and remain stopped for anyone crossing at a marked crossing or intersection, and never to let your car overhang a crosswalk at a red light.",
        trap:
          "'My lane is clear' is exactly the reasoning the rule anticipates, and it is why the handbook tells you to assume a pedestrian is there.",
        excerptKey: "ped-no-pass-stopped-vehicle",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_25",
        topic: "safety",
        question: "Florida groups driver distraction into three categories. What are they?",
        choices: [
          "Visual, manual and cognitive",
          "Internal, external and mechanical",
          "Auditory, visual and emotional",
          "Physical, chemical and emotional",
        ],
        correctIndex: 0,
        explanation:
          "Distraction is visual, taking your eyes off the road; manual, taking your hands off the wheel; and cognitive, thinking about anything other than driving.",
        context:
          "Texting is treated as the most dangerous common behaviour precisely because it hits all three at once, and it is illegal in Florida to operate a motor vehicle while texting. Handheld device use is additionally banned in a school crossing, school zone or work zone. The list of other distractions runs from unsecured pets to grooming, eating and daydreaming.",
        trap:
          "Auditory sounds like it belongs and is not one of the three. The framework is about eyes, hands and attention.",
        excerptKey: "distraction-categories",
        sourceLabel: "Official Florida Driver License Handbook - Distracted Driving",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_26",
        topic: "signs",
        question: "A yellow sign shows one lane merging into another with the right-hand lane ending. What should you do?",
        choices: [
          "Speed up to get ahead of the traffic in the continuing lane",
          "Stop at the end of the lane and wait for a gap",
          "If you are in the right lane, merge left; if you are in the left lane, let others in",
          "Straddle the lane line until the merge is complete",
        ],
        correctIndex: 2,
        explanation:
          "The right lane ends and its traffic must merge left. Drivers already in the left lane are expected to allow others to merge smoothly.",
        context:
          "It is distinct from the MERGING TRAFFIC sign, which warns that another lane is about to join yours and that you may need to yield. Both signs are yellow diamonds because both describe something the road is about to do rather than something you are forbidden to do.",
        trap:
          "Racing to the front of the ending lane is a habit rather than a rule, and it is not what the sign asks of either driver.",
        excerptKey: "reduction-of-lanes-sign",
        sourceLabel: "Official Florida Driver License Handbook - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_27",
        topic: "speed",
        question: "A small square panel showing 30 hangs beneath a curve warning sign. What is that number?",
        choices: [
          "The fastest safe speed for the curve",
          "The legal speed limit through the curve",
          "The minimum speed for the curve",
          "The distance in yards to the curve",
        ],
        correctIndex: 0,
        explanation:
          "An advisory speed panel gives the fastest safe speed for the hazard ahead. It can be attached to any warning sign.",
        context:
          "Advisory speeds are about physics rather than enforcement, but ignoring one still leaves you outside the general duty to adjust to conditions, since the posted limit only applies under favourable conditions in the first place. Exit speed signs work the same way for expressway ramps.",
        trap:
          "Treating it as the legal limit is a small error in the right direction; treating it as a minimum is what puts cars into the outside of the curve.",
        excerptKey: "advisory-speed-sign",
        sourceLabel: "Official Florida Driver License Handbook - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_28",
        topic: "parking",
        question:
          "Someone parks in a disabled space using a permit belonging to a relative who is not in the car. What can follow?",
        choices: [
          "A parking fine only",
          "A warning for a first offence",
          "A second degree misdemeanour charge, a fine or jail, towing and loss of the permit",
          "Nothing, since the permit itself is valid",
        ],
        correctIndex: 2,
        explanation:
          "Using a permit that does not belong to you is a second degree misdemeanour, punishable by a $500 fine or up to six months in jail, and the vehicle can be towed and the permit confiscated.",
        context:
          "The permit only works when the vehicle is actually transporting the person with the disability who owns it. A valid permit does let that person park free at public street, highway and metered spaces as well as in designated disabled bays, which is exactly why misuse is treated as more than a parking matter.",
        trap:
          "'The permit is valid' misses the point. The offence is using someone else's, not displaying an invalid one.",
        excerptKey: "disabled-permit-misuse",
        sourceLabel: "Official Florida Driver License Handbook - Disabled Parking Permit Violations",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_29",
        topic: "licensing",
        question:
          "What vision standard clears a Florida applicant without referral to an eye specialist?",
        choices: [
          "20/20 in at least one eye",
          "20/40 or better in each eye, with or without corrective lenses",
          "20/50 or better in each eye",
          "20/70 combined across both eyes",
        ],
        correctIndex: 1,
        explanation:
          "20/40 or better in each eye, with or without corrective lenses, meets the state requirement with no referral.",
        context:
          "Below that, 20/50 or worse in either eye means a referral to an eye specialist, and 20/70 in either eye or both together can still pass after referral provided the worse eye is better than 20/200. If one eye is blind or 20/200 or worse, the other must be 20/40 or better. The minimum acceptable field of vision is 130 degrees, and every driver aged 80 or over must pass a vision exam at renewal.",
        trap:
          "20/50 is the threshold that triggers a referral rather than the one that clears you outright.",
        excerptKey: "vision-20-40",
        sourceLabel: "Official Florida Driver License Handbook - Driver License Testing",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_30",
        topic: "sharing",
        question: "What is a low-speed vehicle in Florida?",
        choices: [
          "Any vehicle that cannot exceed 35 mph",
          "A golf cart used off a golf course",
          "A four-wheeled vehicle with a top speed of 21 to 25 mph",
          "A three-wheeled vehicle limited to 30 mph",
        ],
        correctIndex: 2,
        explanation:
          "A low-speed vehicle is a four-wheeled vehicle with a top speed of 21 to 25 mph. A golf cart can be converted into one.",
        context:
          "The conversion brings real obligations: a low-speed vehicle needs headlamps, stop lamps, turn signals, tail lamps, reflectors, parking brakes, mirrors, a windshield, safety belts and a vehicle identification number, and it must be registered and insured. You need a valid driver licence to operate one, and it may only be used on streets posted at 35 mph or less.",
        trap:
          "'Anything under 35 mph' confuses the vehicle's own top speed with the speed limit of the roads it is allowed on.",
        excerptKey: "lsv-definition",
        sourceLabel: "Official Florida Driver License Handbook - Low-Speed Vehicles",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_31",
        topic: "emergencies",
        question:
          "You reach a crash and a passenger is conscious but complaining of neck pain. What should you do?",
        choices: [
          "Move them to the roadside so they are away from traffic",
          "Sit them upright and give them water",
          "Leave them where they are and do not move them",
          "Remove any helmet so you can check their airway",
        ],
        correctIndex: 2,
        explanation:
          "Do not move an injured person who may have a neck or spinal injury, and do not remove the helmet of an injured motorcycle or bicycle rider.",
        context:
          "The rest of the first aid guidance is about shock, which can be fatal and should be treated for whether or not it is obvious: keep the person calm, give them nothing to drink, have them lie flat with their legs elevated, cover them to hold body heat and keep the airway open. Before any of that, park well off the road, put your hazards on and stay out of traffic.",
        trap:
          "Moving someone away from traffic sounds protective and is exactly the action that can turn a spinal injury into a permanent one.",
        excerptKey: "do-not-move-injured",
        sourceLabel: "Official Florida Driver License Handbook - First Aid",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_32",
        topic: "signals",
        question: "You see red reflectors facing you on the lane lines. What have you got wrong?",
        choices: [
          "You are in a lane reserved for high occupancy vehicles",
          "You are facing traffic the wrong way and risk a head-on collision",
          "You are approaching a toll plaza",
          "You are in a lane that is closed ahead",
        ],
        correctIndex: 1,
        explanation:
          "Red reflectors on the lane lines always mean you are facing traffic the wrong way. You turn around or get into the correct lane immediately.",
        context:
          "There is a related version at the edges: red reflectors on the edge lines mean you are going the wrong way on an entrance or exit ramp, and you should pull over immediately and turn around when it is safe. This is also the one situation where Florida permits backing up on a ramp, alongside seeing a WRONG WAY or DO NOT ENTER sign.",
        trap:
          "Treating red reflectors as a lane-closure or toll marker delays exactly the response that has to be immediate.",
        excerptKey: "red-reflectors",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Traffic Lanes",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_33",
        topic: "rules",
        question: "If you have to use hand signals, where must they be given from?",
        choices: [
          "The left side of the vehicle",
          "Whichever side matches the direction of the turn",
          "The right side, so oncoming traffic can see them",
          "Through the windscreen, above the dashboard",
        ],
        correctIndex: 0,
        explanation:
          "Hand signals must be given from the left side of the vehicle, which is the side drivers behind you and oncoming traffic can actually see.",
        context:
          "Florida expects the vehicle to be capable of hand signals at all, and the driving skills test will not be given in a car that prevents them. The signals themselves are the standard set for left turn, right turn and slow or stop, and a bicyclist is additionally allowed to indicate a right turn by extending the right arm horizontally.",
        trap:
          "Signalling a right turn out of the right window feels logical and puts the signal where nobody behind you can see it.",
        excerptKey: "hand-signals-left-side",
        sourceLabel: "Official Florida Driver License Handbook - Turning",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_34",
        topic: "signs",
        question: "What is a SCHOOL BUS STOP AHEAD sign warning you about?",
        choices: [
          "A school zone speed limit begins here",
          "A school bus depot is on this road",
          "A bus stop that may be hidden by a curve or hill, so be ready to stop",
          "Buses turn across the road at this point",
        ],
        correctIndex: 2,
        explanation:
          "It warns of an upcoming school bus stop that may be unexpected or obscured by the shape of the road, such as a curve or a crest, so you should be prepared to stop.",
        context:
          "It belongs to the school sign family. SCHOOL means you are near a school and should watch for children at all times, not just during school hours. SCHOOL CROSSING means slow down, watch for children and obey any crossing guard. BEGIN SCHOOL ZONE marks a reduced limit that applies during the posted times or when the light is flashing.",
        trap:
          "It is a warning sign, not the start of a school zone, so no reduced speed limit takes effect at the sign itself.",
        excerptKey: "school-bus-stop-ahead-sign",
        sourceLabel: "Official Florida Driver License Handbook - School Zone Signs & Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s4_35",
        topic: "safety",
        question: "What exactly is hydroplaning?",
        choices: [
          "Losing traction because the road surface has been polished smooth",
          "Sliding on a thin layer of water between the tyres and the road",
          "The pull to one side that happens when brakes get wet",
          "Aquaplaning caused only by standing water deeper than two inches",
        ],
        correctIndex: 1,
        explanation:
          "Hydroplaning is the tyres riding up on a thin film of water so they are no longer touching the road. With no contact there is no grip, so you can lose control and skid.",
        context:
          "Low tyre pressure, worn tread and speed all raise the risk, which is why Florida sets a minimum tread of 3/32 of an inch. Roads are at their slickest at the start of a shower after a dry spell, because oil lifts off the surface. Wet roads lengthen stopping distance, so following distance goes up along with everything else.",
        trap:
          "The wet-brake pull is a different problem with a different fix, which is to dry the brakes by driving slowly in low gear while applying them gently.",
        excerptKey: "hydroplaning-def",
        sourceLabel: "Official Florida Driver License Handbook - Rain",
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
      "Exact figures, sign pairs that look alike, and Florida rules with more than one condition in play. Work through this set slowly; almost everything here is something candidates report getting wrong on the real exam.",
    questions: [
      {
        id: "fl_s5_01",
        topic: "rules",
        question:
          "You are on a two-lane road posted at 15 mph and a tow truck is stopped ahead with warning lights on. What does the Move Over law require?",
        choices: [
          "Slow to 20 mph below the limit",
          "Stop until you can pass without coming near it",
          "Travel at 5 mph",
          "Maintain 15 mph, since you cannot go 20 mph below it",
        ],
        correctIndex: 2,
        explanation:
          "On a two-lane road you slow to 20 mph below the posted limit, and where the limit is 20 mph or less you travel at 5 mph. At a 15 mph limit that means 5 mph.",
        context:
          "The multi-lane version of the law works differently: you vacate the lane closest to the stopped vehicle, and only if you cannot do that safely do you slow to 20 mph below the limit. Both versions cover law enforcement, emergency workers, tow trucks, sanitation and utility vehicles, road and bridge maintenance vehicles, and disabled vehicles displaying hazard lights, flares or signage, or with people visibly present.",
        trap:
          "Subtracting 20 from 15 gives a negative number, which is exactly why Florida wrote the 5 mph floor into the rule.",
        excerptKey: "move-over-two-lane",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Move Over Law",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_02",
        topic: "signs",
        question:
          "You are entering a right turn lane marked with a BEGIN RIGHT TURN LANE sign and a cyclist is riding straight on. Who has priority?",
        choices: [
          "You do, because you are already in the turn lane",
          "The cyclist; you must yield",
          "Whoever reaches the junction first",
          "The cyclist, but only if they are in a marked bike lane",
        ],
        correctIndex: 1,
        explanation:
          "The sign exists because you may meet cyclists travelling straight where you are turning across their path. You must yield to them.",
        context:
          "It matches the general rule for turning across a bike lane: yield to any bicyclist and make your turn behind them. Florida also asks you to assume a cyclist is going straight unless they signal otherwise, and reminds drivers that motor vehicles may not drive in a bike lane at all, only cross it when turning and only when no cyclist is in it.",
        trap:
          "Being established in the turn lane feels like priority and is not. The cyclist going straight is the through movement here.",
        excerptKey: "begin-right-turn-lane-sign",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_03",
        topic: "rightOfWay",
        question:
          "You are on a secondary road approaching an open intersection with a state highway. Nothing is signed. What must you do?",
        choices: [
          "Proceed, since neither road is controlled",
          "Yield, because you are entering a state highway from a secondary road",
          "Yield only if a vehicle is within 100 feet",
          "Treat it as a four-way stop",
        ],
        correctIndex: 1,
        explanation:
          "One of the four open intersection rules is that you yield when you enter or cross a state highway from a secondary road. The more important road keeps priority even with nothing painted on it.",
        context:
          "The complete list of yields at an open intersection is: when a vehicle is already in the intersection, when you enter or cross a state highway from a secondary road, when you enter a paved road from an unpaved road, and when you intend to turn left and a vehicle is approaching from the opposite direction.",
        trap:
          "Treating an uncontrolled junction as a four-way stop invents a rule Florida does not apply and gives both drivers a false sense of who moves first.",
        excerptKey: "open-intersection-yield",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Open Intersections",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_04",
        topic: "speed",
        question:
          "You turn off a highway into an unposted business district in a Florida town. What limit applies?",
        choices: [
          "20 mph",
          "25 mph",
          "35 mph",
          "30 mph",
        ],
        correctIndex: 3,
        explanation:
          "Municipal, business and residential areas share one standard figure in Florida: 30 mph where nothing is posted.",
        context:
          "The four standard limits are 20 mph in school zones, 30 mph in municipal, business or residential areas, 55 mph on streets and highways generally, and 70 mph on limited access highways. Each is a maximum except where something else is posted, and a sign always overrides the standard number.",
        trap:
          "25 mph is the business and residential default in many other states, which is exactly why it looks right to anyone who learned to drive elsewhere.",
        excerptKey: "speed-standard-limits",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_05",
        topic: "parking",
        question:
          "You want to park beside a rural mailbox on a state highway at 2 pm. What does Florida require?",
        choices: [
          "Keep 20 feet clear at all times",
          "Keep 30 feet clear between 8 am and 6 pm",
          "Keep 15 feet clear during postal delivery hours",
          "There is no restriction outside city limits",
        ],
        correctIndex: 1,
        explanation:
          "You must stay 30 feet from a rural mailbox on a state highway between 8 am and 6 pm, which is the only parking clearance in Florida that carries a time window.",
        context:
          "Every other clearance applies all day: 15 feet from a fire hydrant, 20 feet from an intersection, 20 feet from the entrance to a fire, ambulance or rescue station, 30 feet from a flashing signal, stop sign or traffic signal, and 50 feet from a railroad crossing.",
        trap:
          "Missing the time window is the usual error, in both directions: people either apply it around the clock or assume it does not exist.",
        excerptKey: "parking-distances",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Parking",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_06",
        topic: "licensing",
        question:
          "A 17-year-old driver picks up 6 points inside a 12-month period. What happens?",
        choices: [
          "A 30-day suspension, as for any driver",
          "A written warning and mandatory driver improvement course",
          "Nothing until 12 points are reached",
          "A one-year restriction to Business Purposes Only driving",
        ],
        correctIndex: 3,
        explanation:
          "Any driver under 18 who accumulates 6 or more points within 12 months is automatically restricted for one year to driving for Business Purposes Only.",
        context:
          "The restriction is extended by a further 90 days for every additional point after that. Business Purposes Only is broader than Employment Purposes Only, covering driving needed to maintain a livelihood such as work, education, church and medical trips. Adult drivers face the ordinary thresholds instead: 12 points in 12 months, 18 in 18 months, 24 in 36 months.",
        trap:
          "Applying the adult 12-point threshold to a minor doubles the real trigger, and two speeding citations can reach six points.",
        excerptKey: "minor-six-points",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Mandatory Restriction for Minors",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_07",
        topic: "impairment",
        question:
          "A driver refuses a breath test for the second time in their driving career. What are the consequences?",
        choices: [
          "A one-year suspension, the same as the first refusal",
          "An 18-month suspension and a first degree misdemeanour",
          "A six-month suspension and a mandatory DUI school",
          "A two-year suspension with no criminal charge",
        ],
        correctIndex: 1,
        explanation:
          "A second refusal brings an 18-month suspension and a first degree misdemeanour charge, on top of whatever happens with the underlying driving offence.",
        context:
          "Under implied consent you agreed to submit to a breath, blood or urine test when you signed for your licence. A first refusal is an automatic one-year suspension. Where a DUI case involves death or serious injury, a blood test can be taken with or without consent, and blood may be drawn while the driver is unconscious.",
        trap:
          "Assuming the penalty is the same each time misses that Florida turns the second refusal into a criminal charge as well as a longer suspension.",
        excerptKey: "implied-consent-refusal",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Implied Consent Law",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_08",
        topic: "sharing",
        question:
          "You are driving a golf cart in a community where they are permitted and need to cross a state road. When is that allowed?",
        choices: [
          "Where the posted limit is 45 mph or less, at an intersection with a traffic control device",
          "Anywhere the sightlines are clear for 500 feet",
          "Where the posted limit is 35 mph or less, at any point",
          "Only where a signed golf cart crossing exists",
        ],
        correctIndex: 0,
        explanation:
          "A golf cart may cross a state road where the posted speed limit is 45 mph or less, and only at an intersection that has a traffic control device.",
        context:
          "Golf carts are otherwise restricted to golf courses and roads specifically designated for them, and only where the county or city allows them at all. They run between sunrise and sunset unless the local government permits otherwise and the extra night equipment is fitted. Under-18 drivers need a learner's licence or driver licence, and a sidewalk must be at least 5 feet wide before a cart may use it.",
        trap:
          "The 35 mph figure belongs to low-speed vehicles, which are a different category with a different rule.",
        excerptKey: "golf-cart-crossing",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Golf Carts",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_09",
        topic: "emergencies",
        question: "Your car breaks down in a live lane on a Florida highway. What does the law require?",
        choices: [
          "Leave it where it is with the hazards on until help arrives",
          "Move it so all four wheels are out of the traffic lanes as soon as possible",
          "Move it onto the median where it is out of the way",
          "Push it to the nearest exit ramp",
        ],
        correctIndex: 1,
        explanation:
          "You must move the vehicle so that all four wheels are out of the traffic lanes as soon as possible, and if you cannot move it yourself you must have it moved.",
        context:
          "After that: park where the vehicle can be seen for 200 feet in each direction if you can, switch on the hazard lights, get everyone out on the side away from traffic and call for assistance. A vehicle left on the pavement, shoulder or a connecting ramp on a limited access highway may not stay there more than six hours, and you must never drive across or park on the median.",
        trap:
          "The median looks like a safe refuge and is explicitly off limits on a limited access highway.",
        excerptKey: "disabled-vehicle-four-wheels",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Breakdowns/Disabled Vehicles",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_10",
        topic: "signals",
        question:
          "A green arrow is lit at the same time as the red light beside it. What are you allowed to do?",
        choices: [
          "Turn in the direction of the arrow from the proper lane, yielding to anything already in the intersection",
          "Go straight ahead, since the arrow overrides the red",
          "Turn in either direction after stopping",
          "Wait, because a red light always overrides an arrow",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow lets you make the movement it shows. When a red light is lit at the same time you must be in the proper lane for that turn, and you still yield to vehicles and pedestrians already in the intersection.",
        context:
          "Compare it with the flashing yellow arrow, which permits the turn but gives no protection because oncoming traffic has a green. A steady yellow arrow means the protected phase is ending. A red arrow means no movement that way until the green appears, though a right on red after stopping is still allowed unless a sign forbids it.",
        trap:
          "Reading the arrow as a general green and driving straight through is the mistake this signal combination is designed to catch.",
        excerptKey: "green-arrow",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_11",
        topic: "safety",
        question: "How far back must you stay from a fire truck responding to an emergency?",
        choices: [
          "300 feet",
          "500 feet",
          "200 feet",
          "1,000 feet",
        ],
        correctIndex: 1,
        explanation:
          "Following a fire truck responding to an emergency closer than 500 feet is against the law in Florida.",
        context:
          "It is one of the fixed distances that sit on top of the four-second following rule. The other is 300 feet, which is how far a truck or a vehicle in tow must stay behind another truck or towed vehicle outside cities and towns. Both exist because these vehicles stop, turn and manoeuvre in ways ordinary traffic does not expect.",
        trap:
          "300 feet is the truck-behind-truck figure. Swapping the two is the standard error in this part of the handbook.",
        excerptKey: "fire-truck-500-feet",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Following Distances",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_12",
        topic: "signs",
        question: "How far ahead does a DIVIDED HIGHWAY ENDS sign warn you of the change?",
        choices: [
          "100 to 200 feet",
          "350 to 500 feet",
          "About a quarter of a mile",
          "1,000 feet",
        ],
        correctIndex: 1,
        explanation:
          "The sign tells you the divided highway ends 350 to 500 feet ahead, after which you will be on a road with two-way traffic and must keep right.",
        context:
          "Its pair, DIVIDED HIGHWAY AHEAD, warns that a median or physical barrier is about to separate the directions. The transition in either direction is where wrong-way entries happen, which is why Florida also puts red reflectors on the lane lines: if they are facing you, you are pointed into oncoming traffic and must correct immediately.",
        trap:
          "The exact figures are the point of the question. Everything else in that sentence is intuitive, so the exam tests the part that is not.",
        excerptKey: "divided-highway-ends",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_13",
        topic: "rules",
        question:
          "You are behind a slow vehicle approaching a crest. How far ahead must you be able to see before passing is allowed?",
        choices: [
          "200 feet",
          "300 feet",
          "1,000 feet",
          "500 feet",
        ],
        correctIndex: 3,
        explanation:
          "You must not pass on a hill or curve where you cannot see at least 500 feet ahead. Below that, the manoeuvre is prohibited regardless of the markings.",
        context:
          "The three passing figures are worth learning as a group: 500 feet of sight distance on hills and curves, 100 feet of clearance from an intersection, bridge, viaduct, tunnel or railroad crossing, and 200 feet as the point by which you must be back on the right side of the road ahead of an approaching vehicle.",
        trap:
          "200 feet is the return-to-lane figure and 100 feet is the intersection clearance. All three numbers live in the same paragraph and get shuffled.",
        excerptKey: "no-pass-zones",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Passing",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_14",
        topic: "rightOfWay",
        question:
          "You are travelling the same direction as a school bus on a highway divided by a five-foot unpaved median. The bus stops and puts out its stop signal. What must you do?",
        choices: [
          "Continue with caution, since the road is divided",
          "Slow to 20 mph and pass when clear",
          "Stop, and stay stopped until the stop signal is withdrawn",
          "Stop only if you are within 100 feet of the bus",
        ],
        correctIndex: 2,
        explanation:
          "The divided highway exception only ever helps traffic moving the opposite way to the bus. Moving the same direction, you always stop and stay stopped until the stop signal is withdrawn.",
        context:
          "The exception itself needs a raised barrier or an unpaved median at least five feet wide, and painted lines or pavement markings never count. Passing a stopped school bus carries 4 points, a mandatory basic driver improvement course and a minimum fine of $265, rising to $465 if you pass on the side where children get on and off.",
        trap:
          "The word 'divided' is doing all the work in the wrong direction here. It relieves oncoming traffic and nobody else.",
        excerptKey: "school-bus-same-direction",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - School Buses",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_15",
        topic: "speed",
        question:
          "What is the lowest speed you may legally travel on a Florida highway posted at 70 mph?",
        choices: [
          "45 mph",
          "40 mph",
          "50 mph",
          "There is no minimum, only a maximum",
        ],
        correctIndex: 2,
        explanation:
          "Where the posted limit is 70 mph, the minimum speed is 50 mph. Anything slower obstructs traffic and can be cited.",
        context:
          "It works with the general prohibition on driving so slowly that you block or delay traffic moving at normal, safe speeds, and with the requirement that slower drivers keep right and move out of the left lane when a faster vehicle comes up behind. Weather does not repeal the minimum, but the safe-speed duty means very poor conditions are a reason to leave the highway rather than crawl along it.",
        trap:
          "'Only maximums are enforceable' is a widely held belief. Florida writes the minimum into the rules for 70 mph roads.",
        excerptKey: "minimum-speed-50",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_16",
        topic: "parking",
        question: "How close to a railroad crossing may you park?",
        choices: [
          "No closer than 15 feet",
          "No closer than 30 feet",
          "No closer than 100 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 3,
        explanation:
          "Fifty feet is the required clearance from a railroad crossing, and it is the largest of Florida's standard parking distances.",
        context:
          "There is a separate 15-foot rule about stopping: you must never stop on the tracks or within 15 feet of the crossing while driving, which is different from where you may leave a parked car. The rest of the parking distances are 15 feet from a hydrant, 20 feet from an intersection, 20 feet from an emergency station entrance and 30 feet from a signal, stop sign or rural mailbox on a state highway.",
        trap:
          "The 15-foot figure is real but belongs to stopping on the approach, and importing it here shortens the parking clearance by more than two thirds.",
        excerptKey: "parking-distances",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Parking",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_17",
        topic: "licensing",
        question:
          "A Florida licence holder is convicted of a moving violation in another state. What happens to their Florida points?",
        choices: [
          "No points, since the offence happened elsewhere",
          "The same number of points is applied as if it happened in Florida",
          "Half the Florida value is applied",
          "Points are applied only for offences committed in bordering states",
        ],
        correctIndex: 1,
        explanation:
          "An out-of-state or federal conviction earns the same number of points it would have earned in Florida. Crossing a state line does not clear the record.",
        context:
          "The point thresholds it feeds into are 12 points in 12 months for a 30-day suspension, 18 in 18 months for three months, and 24 in 36 months for a year, with a separate 6-point trigger for drivers under 18. Florida drivers cited elsewhere may be able to have adjudication withheld by completing an approved advanced driver improvement course.",
        trap:
          "The belief that out-of-state tickets vanish is common and produces surprise suspensions when the points arrive months later.",
        excerptKey: "points-out-of-state",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Point System",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_18",
        topic: "impairment",
        question:
          "After a DUI conviction, what insurance limits must a Florida driver carry, and for how long?",
        choices: [
          "$10,000 bodily injury and $10,000 property damage for one year",
          "$50,000 bodily injury and $25,000 property damage for two years",
          "$100,000 per person and $300,000 per crash bodily injury, plus $50,000 property damage, for three years",
          "$30,000 combined single limit for five years",
        ],
        correctIndex: 2,
        explanation:
          "A DUI conviction forces coverage of at least $100,000 bodily injury liability for one person, $300,000 for two or more, and $50,000 property damage liability, held for three years.",
        context:
          "That is a long way above the ordinary Florida minimum of $10,000 personal injury protection and $10,000 property damage liability. The higher limits drop away only if the driver avoids another DUI or any felony traffic offence during those three years. A separate and lower set of raised limits applies after a points suspension, an injury crash you caused, or a habitual traffic offender revocation.",
        trap:
          "The $10,000 and $20,000 figures are real Florida numbers, but they belong to the lesser set of raised limits, not the DUI schedule.",
        excerptKey: "dui-higher-coverage",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Financial Responsibility Law",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_19",
        topic: "sharing",
        question: "What is a bicycle's legal status on Florida public roads?",
        choices: [
          "A vehicle with the same rights and responsibilities as a car, except on limited access highways",
          "A pedestrian conveyance in all circumstances",
          "A vehicle only when ridden in a marked bike lane",
          "A vehicle only when the rider is 16 or over",
        ],
        correctIndex: 0,
        explanation:
          "A bicycle is legally defined as a vehicle in Florida, with all the privileges, rights and responsibilities of a motor vehicle on public roads, except limited access highways where bicycles are not allowed.",
        context:
          "It cuts both ways. Cyclists must obey every traffic control and signal, signal their turns, and use the bike lane when travelling slower than the rest of the traffic. Drivers must give three feet of clearance, yield to cyclists as they would to any vehicle, and turn behind a cyclist rather than across them. On a sidewalk or crosswalk a cyclist takes on the rights and duties of a pedestrian instead.",
        trap:
          "Treating a cyclist as a pedestrian on the carriageway is what leads drivers to squeeze past rather than treating them as traffic.",
        excerptKey: "bicycle-is-vehicle",
        sourceLabel: "Official Florida Driver License Handbook - Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_20",
        topic: "emergencies",
        question:
          "The lights at a railroad crossing start flashing. How much time does that typically give you before a train reaches the crossing?",
        choices: [
          "About 5 seconds",
          "About 20 seconds",
          "About one minute",
          "It varies too much to state",
        ],
        correctIndex: 1,
        explanation:
          "Twenty seconds is the minimum time it takes a train to reach the crossing after the warning lights begin flashing. That is the whole margin you have.",
        context:
          "If your car stalls on the tracks you get everyone out immediately and away from the vehicle. If a train is coming, run at about 45 degrees away from the tracks but toward the train, so debris from the impact is thrown away from you rather than at you. Every highway-rail grade crossing in Florida has a blue emergency notification sign with the number to call.",
        trap:
          "Twenty seconds sounds long enough to try something. It is not enough time to restart a stalled car and clear the tracks.",
        excerptKey: "rr-20-seconds",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Stalled on Railroad Tracks",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_21",
        topic: "signals",
        question: "What does a flashing yellow light at an intersection mean?",
        choices: [
          "Stop, then proceed when safe",
          "The light is about to turn red",
          "Proceed with caution",
          "Yield to traffic on the crossing road, then go",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow means proceed with caution. It is used at or just before intersections considered dangerous, and to draw attention to a warning sign such as a school crossing or a sharp curve.",
        context:
          "Set it against the flashing red, which is used at dangerous intersections and is treated exactly as a stop sign. The two flashing colours are the pair most often mixed up, and they demand opposite things: one requires a stop, the other requires alertness without stopping.",
        trap:
          "'Stop, then proceed' is the flashing red. Stopping unnecessarily at a flashing yellow invites a rear-end collision.",
        excerptKey: "flashing-yellow-light",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_22",
        topic: "signs",
        question: "What does a RESTRICTED LANE AHEAD sign tell you?",
        choices: [
          "The lane will be closed for roadworks",
          "A lane is reserved for certain purposes or vehicles, such as buses or carpools",
          "The lane is restricted to vehicles under a set weight",
          "The lane narrows and cannot take large vehicles",
        ],
        correctIndex: 1,
        explanation:
          "It means a lane ahead is reserved for a specific purpose or class of vehicle, such as buses or carpool vehicles at rush hour. It is also used with bike lanes.",
        context:
          "The commonest example is a high occupancy vehicle lane, which Florida reserves for vehicles with two or more occupants or for hybrid and low emission vehicles with the right decal. Those lanes are marked with signs and diamond symbols, separated by a striped buffer, and you may only enter and leave them at designated points.",
        trap:
          "'Closed for roadworks' would be an orange construction sign. This one is a standing restriction, not a temporary closure.",
        excerptKey: "restricted-lane-ahead-sign",
        sourceLabel: "Official Florida Driver License Handbook - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_23",
        topic: "rules",
        question:
          "You want to let the driver behind you know it is safe to overtake. What does Florida say about using your directional signals to do it?",
        choices: [
          "It is encouraged as a courtesy",
          "It is permitted outside city limits",
          "It is permitted with the left signal only",
          "It is against the law",
        ],
        correctIndex: 3,
        explanation:
          "Florida specifically prohibits using directional signals to tell drivers behind you that they can pass. A signal has one meaning, and a wrong reading of it puts someone into oncoming traffic.",
        context:
          "The lawful uses are narrow: signalling a turn at least 100 feet in advance, and signalling lane changes and overtaking, both of which the law requires. Hand signals must be given from the left side. If someone wants past, the correct response is to stay right, hold a steady speed and let them make their own judgement.",
        trap:
          "It is a genuine courtesy in some countries, which is exactly how the habit reaches Florida roads.",
        excerptKey: "signal-not-invite-pass",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Turning",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_24",
        topic: "rightOfWay",
        question:
          "A cyclist is approaching an intersection ahead of you and has given no signal. What should you assume?",
        choices: [
          "That they will stop and let you go",
          "That they intend to travel straight ahead",
          "That they will turn right toward the kerb",
          "That they will dismount and cross as a pedestrian",
        ],
        correctIndex: 1,
        explanation:
          "At intersections you assume cyclists are travelling straight unless they signal otherwise, and you yield to them as you would to any other vehicle.",
        context:
          "It follows from the bicycle's legal status as a vehicle. The other half of the rule is what you do when your path crosses theirs: when you must cross a bike lane to turn, yield to the cyclist and make the turn behind them, and treat the BEGIN RIGHT TURN LANE sign as a specific warning that you will meet cyclists going straight.",
        trap:
          "Assuming a cyclist will yield to a car because a car is bigger is the assumption behind a large share of intersection collisions with cyclists.",
        excerptKey: "bike-assume-straight",
        sourceLabel: "Official Florida Driver License Handbook - Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_25",
        topic: "safety",
        question:
          "Including perception and reaction, roughly how far does a car travel before stopping from 50 mph?",
        choices: [
          "About 158 feet",
          "About 268 feet",
          "About 100 feet",
          "About 400 feet",
        ],
        correctIndex: 1,
        explanation:
          "Total stopping distance from 50 mph is a minimum of about 268 feet, close to the length of a football field.",
        context:
          "It breaks into three parts. Perception distance is what you cover between seeing a hazard and recognising it, reaction distance is the roughly 55 feet you cover at 50 mph before your foot reaches the pedal, and braking distance on dry pavement with good brakes is about 158 feet. Doubling your speed multiplies braking distance and impact by four.",
        trap:
          "158 feet is the braking component alone, and treating it as the whole stop underestimates the gap you need by more than a hundred feet.",
        excerptKey: "total-stopping-distance-50",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Braking Distance",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_26",
        topic: "speed",
        question: "What is Florida's standard school zone speed limit?",
        choices: [
          "15 mph",
          "20 mph",
          "25 mph",
          "30 mph",
        ],
        correctIndex: 1,
        explanation:
          "Twenty miles per hour is the standard school zone limit in Florida, applying during the posted times or while the light is flashing.",
        context:
          "The zone is marked by a BEGIN SCHOOL ZONE sign and closed off by an END SCHOOL ZONE sign. Speeding fines double inside an active school zone, handheld phone use is separately prohibited in a school crossing, school zone or work zone, and the plain SCHOOL sign asks you to watch for children at all times, not only during school hours.",
        trap:
          "Twenty-five and thirty are the school zone figures in other states, and 30 mph is Florida's own default for residential streets, which is what makes it feel plausible.",
        excerptKey: "speed-standard-limits",
        sourceLabel: "Official Florida Driver License Handbook - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_27",
        topic: "parking",
        question: "Which of these is on Florida's list of places you may not park?",
        choices: [
          "Any street without a kerb",
          "On a bridge",
          "Within 100 feet of a bus stop",
          "On any road posted above 55 mph",
        ],
        correctIndex: 1,
        explanation:
          "Bridges are on the prohibited list, along with overpasses, tunnels, crosswalks, sidewalks, bicycle lanes, intersections, in front of driveways and beside yellow-painted kerbs.",
        context:
          "The prohibitions are about places where a stopped car creates a hazard or blocks something people need. Double parking on the roadway side of another parked vehicle is banned for the same reason, as is parking on highway pavement that is not marked for parking, or anywhere that blocks or creates a hazard for other vehicles.",
        trap:
          "The 100-foot bus stop figure is invented. Florida's actual clearances are 15, 20, 30 and 50 feet, each tied to a named feature.",
        excerptKey: "parking-illegal-places",
        sourceLabel: "Official Florida Driver License Handbook - Parking",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_28",
        topic: "licensing",
        question:
          "A 16-year-old has held a Florida learner's licence for eight months. When can they take the driving skills test?",
        choices: [
          "Straight away, since they are already 16",
          "After the learner's licence has been held for 12 months, or on their 18th birthday if that comes first",
          "After 10 months, provided they have 50 hours of experience",
          "After a further six months regardless of age",
        ],
        correctIndex: 1,
        explanation:
          "The learner's licence must be held for 12 months, or until the 18th birthday, whichever comes first. At 16 with eight months elapsed, four months remain.",
        context:
          "The other conditions run alongside it: at least 50 certified hours of driving experience with 10 at night, no moving violation convictions during that year, though one is tolerated where adjudication was withheld, a signed parental consent form, and compliance with school attendance requirements.",
        trap:
          "Turning 16 satisfies the age requirement and does nothing about the holding period, which is the condition that usually decides the date.",
        excerptKey: "hold-learner-12-months",
        sourceLabel: "Official Florida Driver License Handbook - Driver Licenses & ID Cards",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_29",
        topic: "impairment",
        question:
          "A crash involving suspected impairment causes serious injury and the driver refuses a blood test. What happens?",
        choices: [
          "No sample can be taken without consent",
          "A blood test will be required with or without consent",
          "A breath test is substituted",
          "The test is deferred until a warrant is obtained the next day",
        ],
        correctIndex: 1,
        explanation:
          "In DUI cases involving death or serious injury, a blood test is required with or without the driver's consent. It must be drawn by a doctor, nurse or other health professional, and blood may be drawn from an unconscious person.",
        context:
          "This sits outside the ordinary implied consent framework, where refusing a test brings an automatic one-year suspension for a first refusal and an 18-month suspension plus a first degree misdemeanour for a second. In the death or serious injury case, refusal does not prevent the sample being taken.",
        trap:
          "The right to refuse under implied consent is real for ordinary stops and does not survive a crash causing death or serious injury.",
        excerptKey: "dui-blood-test-required",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Implied Consent Law",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_30",
        topic: "sharing",
        question:
          "An orange triangle with a dark border is fixed to the back of a vehicle ahead of you. What does it tell you?",
        choices: [
          "The vehicle is carrying a wide or projecting load",
          "The vehicle is designed to operate at less than 25 mph",
          "The vehicle is a low-speed vehicle limited to 21 to 25 mph",
          "The vehicle is towing a trailer over 3,000 pounds",
        ],
        correctIndex: 1,
        explanation:
          "The slow moving vehicle emblem is required on farm vehicles designed to operate at speeds under 25 mph when they use public highways.",
        context:
          "Those vehicles are barred from limited access highways and interstates, and they may only be operated during daylight hours unless they carry the proper lights and reflectors for night driving. The practical point is closing speed: at 55 mph you reach a 15 mph tractor far faster than the sight picture suggests.",
        trap:
          "A low-speed vehicle is a separate legal category with its own definition and equipment list, and it does not carry this emblem.",
        excerptKey: "slow-moving-vehicle-sign",
        sourceLabel: "Official Florida Driver License Handbook - Slow Moving Vehicles",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_31",
        topic: "emergencies",
        question:
          "A driver leaves the scene of a crash in which someone is killed. What does Florida law provide?",
        choices: [
          "A second degree felony",
          "A third degree felony",
          "A first degree misdemeanour with a mandatory fine",
          "A first degree felony with a minimum four-year prison term",
        ],
        correctIndex: 3,
        explanation:
          "Leaving the scene of a crash that results in death is a first degree felony carrying a minimum four-year prison term.",
        context:
          "The scale steps down from there: serious bodily injury is a second degree felony, injury is a third degree felony, and all of those also cost the driver their licence for at least three years. Leaving the scene of damage to a vehicle or property that is driven or attended by any person is a second degree misdemeanour.",
        trap:
          "Second and third degree felonies are the real penalties for the injury cases, which is why they read as plausible answers for the fatal one.",
        excerptKey: "hit-and-run-death",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Stay at the Scene",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_32",
        topic: "signals",
        question:
          "The lane you are in is marked with a curved arrow and the word ONLY. What does that require?",
        choices: [
          "You must turn in the direction of the arrow",
          "You may turn or continue straight ahead",
          "The lane is reserved for turning vehicles at peak times only",
          "You may turn only when a green arrow is showing",
        ],
        correctIndex: 0,
        explanation:
          "A curved arrow with the word ONLY means you must turn in the direction the arrow shows. There is no option to go straight.",
        context:
          "The contrast is a lane marked with both a curved and a straight arrow, which lets you either turn or continue. Signs above the road say the same thing: LEFT LANE MUST TURN and MUST TURN, which tells you that going straight is not available. If you find yourself in the wrong lane, Florida's answer is to carry on to the next intersection rather than make a last-minute change.",
        trap:
          "Reading ONLY as a restriction on who may use the lane rather than on where it goes gets the sign backwards.",
        excerptKey: "turn-lane-only-arrow",
        sourceLabel: "Official Florida Driver License Handbook - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_33",
        topic: "rules",
        question: "Which of these is not allowed on a Florida limited access highway?",
        choices: [
          "A motorcycle with an engine over 150 cubic centimetres",
          "A vehicle towing a trailer",
          "A motor scooter of 150 cubic centimetres or less",
          "A low emission vehicle with an HOV decal",
        ],
        correctIndex: 2,
        explanation:
          "Motor-driven cycles and motor scooters of 150 cubic centimetres displacement or less are barred from limited access highways, along with pedestrians, hitchhikers, bicycles and animal-drawn vehicles.",
        context:
          "Limited access highways are the expressways, interstates, turnpikes, toll roads and freeways, and they carry no stop signs, traffic lights or railroad crossings. The rules that come with them are about entering and leaving cleanly: yield to traffic on the highway, never stop on the pavement, shoulder or a connecting ramp except in an emergency, never cross or park on the median, and never back up on a ramp.",
        trap:
          "Small scooters look like motorcycles and are treated completely differently once the engine falls to 150 cubic centimetres or less.",
        excerptKey: "limited-access-prohibited",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Limited Access Highways",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_34",
        topic: "signs",
        question: "A yellow sign warns ONE LANE BRIDGE. What does it require of you?",
        choices: [
          "Stay in your lane; there is very little clearance",
          "Reduce speed to 20 mph before the bridge",
          "Make sure the bridge is clear of oncoming traffic before you cross",
          "Give way to any vehicle already on the approach",
        ],
        correctIndex: 2,
        explanation:
          "Only one vehicle can be on the bridge at a time, so you check it is clear of oncoming traffic before you start across.",
        context:
          "Its near neighbour is NARROW BRIDGE, which means two lanes will fit but with very little room, so you hold your lane rather than waiting. The pair is deliberately similar, and knowing which one requires you to wait and which one requires you to hold position is the whole point of learning both.",
        trap:
          "'Stay in your lane' is the narrow bridge answer, and on a one lane bridge it would put you head-on with whatever is already crossing.",
        excerptKey: "one-lane-bridge-sign",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s5_35",
        topic: "safety",
        question:
          "A 22-year-old passenger in the back seat is not wearing a safety belt during a stop. Who is charged?",
        choices: [
          "The driver, who is responsible for all occupants",
          "The passenger, who is 18 or older",
          "Nobody, because rear seat adults are exempt",
          "The vehicle's registered owner",
        ],
        correctIndex: 1,
        explanation:
          "Passengers 18 or older are charged personally when they fail to wear a belt where the law requires it. The driver is charged only when a passenger under 18 is unrestrained.",
        context:
          "The underlying requirement covers all drivers, all front seat passengers and every passenger under 18 wherever they sit. That is why the responsibility splits the way it does: the driver answers for the children, and adults answer for themselves. A handful of exemptions exist, including a certified medical condition and certain commercial vehicles.",
        trap:
          "'The driver is responsible for everyone' overstates the rule, and 'rear seat adults are exempt' understates the responsibility of the passenger.",
        excerptKey: "passengers-18-charged",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Safety Belts",
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
      "Thirty questions drawn the way FLHSMV draws them, mixed across signs, traffic law and safe driving with no hints. The real Class E Knowledge Exam is 50 questions and you need 40 of them right, which is 80 percent - so hold yourself to at least 24 out of 30 here.",
    questions: [
      {
        id: "fl_s6_01",
        topic: "signs",
        question: "You see a WRONG WAY sign directly ahead of you. What has happened?",
        choices: [
          "You are entering a one-way street from the correct end",
          "You are travelling against the flow and must turn around immediately",
          "The road ahead is closed to through traffic",
          "You have left the state highway system",
        ],
        correctIndex: 1,
        explanation:
          "WRONG WAY means you are already travelling against the flow of traffic. You turn around immediately rather than looking for somewhere convenient to do it.",
        context:
          "It usually follows a DO NOT ENTER sign, which marks the point you should not have crossed. Florida gives you a third warning in the pavement itself: red reflectors facing you on the lane lines mean you are pointed at oncoming traffic, and red reflectors on the edge lines mean you are going the wrong way on a ramp.",
        trap:
          "Reading it as a road closure delays the one response that has to be immediate.",
        excerptKey: "wrong-way-sign",
        sourceLabel: "Official Florida Driver License Handbook - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_02",
        topic: "rules",
        question:
          "There is no NO TURN ON RED sign, the light is red and the way is clear. What must happen before you turn right?",
        choices: [
          "You must come to a complete stop",
          "You must wait for a gap of at least five seconds",
          "You must signal for 100 feet before the junction",
          "You must wait for the light to show a green arrow",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is permitted only after a complete stop. Florida also expects you to look both ways for pedestrians in the crosswalk before you go.",
        context:
          "The same conditions apply at a red arrow. You yield to pedestrians and oncoming traffic before making the turn, and both the right-on-red and the one-way left-on-red permissions disappear the moment a NO TURN ON RED sign is posted.",
        trap:
          "Rolling through because the road looks empty is the everyday version of this violation and is exactly what the rule prohibits.",
        excerptKey: "ped-right-on-red-stop",
        sourceLabel: "Official Florida Driver License Handbook - Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_03",
        topic: "speed",
        question: "What is the maximum speed limit on a Florida limited access highway?",
        choices: [
          "65 mph",
          "75 mph",
          "70 mph",
          "55 mph",
        ],
        correctIndex: 2,
        explanation:
          "Seventy miles per hour is the standard maximum on limited access highways, and Florida never posts higher than that anywhere.",
        context:
          "The standard set is 20 mph in school zones, 30 mph in municipal, business or residential areas, 55 mph on streets and highways generally, and 70 mph on limited access highways. On a 70 mph road there is also a 50 mph minimum, because a slow vehicle among fast ones is its own hazard.",
        trap:
          "55 mph is the standard figure for ordinary streets and highways, which is a different row of the same table.",
        excerptKey: "speed-standard-limits",
        sourceLabel: "Official Florida Driver License Handbook - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_04",
        topic: "rightOfWay",
        question:
          "Three cars reach a four-way stop, one clearly first and two others at the same moment. How is the order settled?",
        choices: [
          "The first to arrive goes first, then the driver on the right of the remaining pair",
          "The first to arrive goes first, then the driver on the left of the remaining pair",
          "The vehicle going straight goes first regardless of arrival",
          "The driver who signals first among the remaining pair goes next",
        ],
        correctIndex: 0,
        explanation:
          "Vehicles proceed in the order they arrived, so the first car goes first. Where two arrive at about the same time, each driver yields to the driver on their right.",
        context:
          "The same pair of rules applies to a dead traffic signal, which is treated as a four-way stop. A separate rule covers the two-way stop, where the turning vehicle yields to the vehicle going straight.",
        trap:
          "Yielding to the left reverses the tie-breaker and leaves two drivers each waiting for the other.",
        excerptKey: "all-way-stop-tie",
        sourceLabel: "Official Florida Driver License Handbook - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_05",
        topic: "parking",
        question: "You are parking uphill next to a kerb. Which way should the front wheels point?",
        choices: [
          "Toward the kerb",
          "Straight ahead",
          "To the right, off the road",
          "Away from the kerb",
        ],
        correctIndex: 3,
        explanation:
          "Uphill with a kerb, you turn the wheels away from the kerb so that if the car rolls back the tyre catches on the kerb and stops it.",
        context:
          "The three cases follow one idea: aim the car at the kerb or away from traffic. Downhill, wheels toward the kerb. Uphill with a kerb, wheels away from it. Uphill with no kerb, wheels to the right so the car rolls off the road. Then the parking brake, Park for an automatic or Reverse downhill and First uphill for a manual, engine off.",
        trap:
          "'Toward the kerb' is the downhill answer. The two hill cases are mirror images and swapping them is the classic error.",
        excerptKey: "parking-hills-wheels",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Parking on Hills",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_06",
        topic: "licensing",
        question: "What does personal injury protection cover under Florida's no-fault law?",
        choices: [
          "Damage you cause to other people's property",
          "Your own injuries in a crash, whoever caused it",
          "Injuries to other people that you cause",
          "Repairs to your own vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Personal injury protection covers your own injuries in a crash no matter who caused it. That is what makes Florida a no-fault state.",
        context:
          "The companion coverage is property damage liability, which pays for damage you cause to other people's property. Both are required at a minimum of $10,000 each before you can register a vehicle, and both must stay in force for the whole registration period. Basic Florida registration does not require bodily injury liability at all.",
        trap:
          "'Injuries to other people that you cause' is bodily injury liability, which is a different coverage and not part of the basic Florida requirement.",
        excerptKey: "pip-pdl-what-they-cover",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - No-Fault Law",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_07",
        topic: "impairment",
        question: "What can Florida charge you with driving under the influence of?",
        choices: [
          "Alcohol and illegal drugs only",
          "Alcohol only, unless a drug test is administered at the scene",
          "Alcohol, controlled substances, prescriptions and over-the-counter medications",
          "Any substance, but only where the level exceeds a published threshold",
        ],
        correctIndex: 2,
        explanation:
          "The Florida DUI definition covers alcoholic beverages, controlled substances, prescriptions and over-the-counter medications alike, and applies whether you are driving or in physical control of the vehicle.",
        context:
          "Impairment by drugs carries the same penalties as impairment by alcohol, and having a valid prescription is not a defence. Mixing alcohol with a cold or allergy medicine can multiply the effect so that one drink behaves like several. For alcohol specifically, the administrative suspension threshold is .08 for drivers 21 and over and .02 for anyone under 21.",
        trap:
          "'Illegal drugs only' is the assumption behind most prescription-related DUI charges, and the phrase 'in physical control' means you do not have to be moving.",
        excerptKey: "dui-definition",
        sourceLabel: "Official Florida Driver License Handbook - Driving Under the Influence",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_08",
        topic: "sharing",
        question:
          "You are about to pass a cyclist on a narrow two-lane road with oncoming traffic approaching. What should you do?",
        choices: [
          "Pass now, keeping as far left in your lane as possible",
          "Sound your horn so the cyclist moves closer to the kerb",
          "Wait until you can pass safely with at least three feet of clearance",
          "Pass at low speed with less clearance, since low speed makes it safe",
        ],
        correctIndex: 2,
        explanation:
          "Florida requires a minimum of three feet of clearance when passing a bicycle. On a two-lane road you treat a cyclist like a slow-moving vehicle and pass only when it is safe.",
        context:
          "Drivers are specifically allowed to move briefly to the left of centre to overtake a bicycle, a non-motorised vehicle, an electric bicycle or a pedestrian when it is safe. Beyond clearance, the handbook asks you not to follow a cyclist closely, not to use high beams as one approaches at night, and to avoid startling them with the horn.",
        trap:
          "Sounding the horn is listed as something to avoid around cyclists, since a startled rider can swerve into the space you are trying to use.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Official Florida Driver License Handbook - Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_09",
        topic: "emergencies",
        question:
          "You hit a parked car in a car park and cannot find the owner. What must you do?",
        choices: [
          "Wait 30 minutes and then leave if nobody appears",
          "Report it to your insurer within 10 days",
          "Leave a note with your name, contact details and licence plate number, and notify law enforcement",
          "Leave only if the damage is superficial",
        ],
        correctIndex: 2,
        explanation:
          "You must make every attempt to find the owner and notify law enforcement. If the owner cannot be found, you leave a note with your name, contact information and licence plate number.",
        context:
          "Leaving the scene of a crash involving property damage is against the law, and leaving the scene where a vehicle or property is driven or attended by someone is a second degree misdemeanour. Where damage does not require a law enforcement report, you must still file a written report with FLHSMV within 10 days.",
        trap:
          "A quiet car park feels like an exception and is not. The duty attaches to the damage, not to whether anyone saw it.",
        excerptKey: "crash-unattended-vehicle",
        sourceLabel: "Official Florida Driver License Handbook - Handling Emergencies",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_10",
        topic: "signals",
        question: "How should you treat a flashing red signal?",
        choices: [
          "As a stop sign",
          "As a yield sign",
          "As a caution to slow down without stopping",
          "As a signal failure requiring you to wait",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red is used at dangerous intersections and is treated exactly like a stop sign: stop, then proceed when it is safe.",
        context:
          "Its counterpart is the flashing yellow, used at or just before hazardous intersections and to draw attention to a warning sign, which means proceed with caution without stopping. If the signal is completely dark and no officer is directing traffic, the intersection becomes a four-way stop.",
        trap:
          "Treating it as a yield sign lets you roll through, and these are the intersections where the flashing red was installed precisely because rolling through causes crashes.",
        excerptKey: "flashing-red-light",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_11",
        topic: "safety",
        question:
          "Conditions are good. What is the minimum following distance the Florida handbook expects?",
        choices: [
          "Two seconds",
          "Three seconds",
          "Four seconds",
          "Five seconds",
        ],
        correctIndex: 2,
        explanation:
          "Four seconds is the minimum in favourable weather and traffic. You count from the moment the vehicle ahead passes a fixed marker until you reach the same point.",
        context:
          "Rear-end collisions are almost always caused by following too closely, so the four seconds is a floor that goes up in rain, in low visibility, when you are being passed, when you are loaded or towing, on an incline behind a stopped vehicle, and behind motorcycles, emergency vehicles, buses and trucks with a blocked rear view.",
        trap:
          "Two and three seconds are the figures used in other handbooks, and they are the ones Florida drivers usually quote from memory.",
        excerptKey: "following-four-seconds",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Following Distances",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_12",
        topic: "signs",
        question: "You pass a plain SCHOOL sign. What does it ask of you?",
        choices: [
          "Reduce to 20 mph immediately",
          "Watch for children at all times, not just during school hours",
          "Stop if a crossing guard is present",
          "Expect a school bus stop within 500 feet",
        ],
        correctIndex: 1,
        explanation:
          "The plain SCHOOL sign tells you a school is nearby and asks you to watch for children at all times. It is not a speed limit on its own.",
        context:
          "The reduced limit comes with the BEGIN SCHOOL ZONE sign, which applies at the posted times or when the light is flashing, and ends at the END SCHOOL ZONE sign. SCHOOL CROSSING asks you to slow, watch for children and obey any crossing guard. When children or crossing guards are in a crosswalk you must yield and stop at the stop line rather than in the crosswalk.",
        trap:
          "Treating every school sign as a 20 mph zone reads the speed rule into a sign that does not carry it.",
        excerptKey: "school-sign",
        sourceLabel: "Official Florida Driver License Handbook - School Zone Signs & Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_13",
        topic: "rules",
        question: "Which vehicles does Florida's Move Over law protect?",
        choices: [
          "Marked law enforcement vehicles only",
          "Emergency vehicles and tow trucks only",
          "Any vehicle stopped on the shoulder for any reason",
          "Law enforcement, emergency, tow, sanitation, utility and road maintenance vehicles with warning lights, plus disabled vehicles showing hazard lights or with people visibly present",
        ],
        correctIndex: 3,
        explanation:
          "The law covers law enforcement officers, emergency workers, tow truck drivers, sanitation workers, utility workers and road and bridge maintenance or construction vehicles displaying warning lights, and it extends to disabled vehicles stopped with hazard lights, flares or signage, or where people are visibly present.",
        context:
          "What you must do depends on the road. On a multi-lane road you vacate the lane closest to the stopped vehicle, and only if that cannot be done safely do you slow to 20 mph below the limit. On a two-lane road you slow to 20 mph below the limit, or to 5 mph where the limit is 20 mph or less.",
        trap:
          "Limiting it to police cars is how most drivers understand the law, and it is the narrowest of the four options here.",
        excerptKey: "move-over-who",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Move Over Law",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_14",
        topic: "rightOfWay",
        question:
          "A school bus with its stop signal out is on the far side of a road separated only by a wide painted median. You are travelling the opposite way. What must you do?",
        choices: [
          "Stop, because painted markings are not a barrier",
          "Continue with caution, since the road is divided",
          "Slow to 20 mph and continue",
          "Stop only if children are visible",
        ],
        correctIndex: 0,
        explanation:
          "Painted lines and pavement markings are not considered barriers. Without a raised barrier or an unpaved median at least five feet wide, oncoming traffic must stop.",
        context:
          "The exception is deliberately narrow: it needs a physical divider, and it only ever relieves traffic moving the opposite direction. Traffic moving the same way as the bus stops every time and remains stopped until the stop signal is withdrawn.",
        trap:
          "A wide painted median looks exactly like a divided highway from the driver's seat, and this is the version of the school bus question that catches the most people.",
        excerptKey: "school-bus-divided",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - School Buses",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_15",
        topic: "speed",
        question:
          "You are driving through an active school zone with the beacon flashing. What speed applies unless something else is posted?",
        choices: [
          "15 mph",
          "20 mph",
          "25 mph",
          "30 mph",
        ],
        correctIndex: 1,
        explanation:
          "Twenty miles per hour is the standard Florida school zone limit, applying during the posted times or while the light is flashing.",
        context:
          "Speeding fines are doubled inside an active school zone or work zone, with civil penalties reaching $1,000 and the possibility of being ordered onto a driving course. Handheld phone use is separately prohibited in a school crossing, school zone or work zone and carries 3 points on its own.",
        trap:
          "Thirty is Florida's own residential default, so it feels like the safe guess in a residential neighbourhood that happens to contain a school.",
        excerptKey: "speed-standard-limits",
        sourceLabel: "Official Florida Driver License Handbook - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_16",
        topic: "signals",
        question: "A single broken yellow line runs down the centre of the road. What does it allow?",
        choices: [
          "Passing from either direction whenever it is safe",
          "Passing only when a PASS WITH CARE sign is posted",
          "No passing from either direction",
          "Passing only for vehicles turning left",
        ],
        correctIndex: 0,
        explanation:
          "A single broken yellow line means you stay to the right of it normally, and you may cross it to pass a vehicle ahead when it is safe to do so.",
        context:
          "Yellow means the traffic on the other side of the line is coming toward you. The pattern on your own side sets your permission: broken means you may cross to pass when safe, solid means you may not. That is why a double yellow line has to be read one half at a time, according to which half is nearest you.",
        trap:
          "Requiring a PASS WITH CARE sign adds a condition that is not there. The marking alone carries the permission.",
        excerptKey: "broken-yellow-line",
        sourceLabel: "Official Florida Driver License Handbook - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_17",
        topic: "safety",
        question:
          "A 15-year-old passenger in your back seat is not wearing a safety belt. Who is charged?",
        choices: [
          "The passenger, since they are old enough to know",
          "Nobody, since rear seats are exempt",
          "The driver",
          "The vehicle's registered owner",
        ],
        correctIndex: 2,
        explanation:
          "The driver is charged with a safety belt or child restraint violation whenever any passenger under 18 is not properly restrained.",
        context:
          "The requirement covers all drivers, all front seat passengers and every passenger under 18 wherever they sit. Passengers 18 or older are charged personally for their own belt, which is what splits the responsibility. Children under 4 must be in a safety seat, and 4 and 5 year olds in a safety seat or booster.",
        trap:
          "'Rear seats are exempt' is true for adults in the back and false for anyone under 18, which is exactly the distinction being tested.",
        excerptKey: "driver-charged-under-18",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Safety Belts",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_18",
        topic: "licensing",
        question:
          "A learner's licence holder has held the licence for four months. When may they drive?",
        choices: [
          "Daylight hours only, with a licensed driver 21 or over",
          "Until 10 pm, with a licensed driver 21 or over",
          "Until 11 pm, unaccompanied",
          "At any hour, provided a licensed adult is in the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "For the first three months a learner drives daylight hours only. After three months the limit extends to 10 pm, and a licensed driver aged 21 or over must always be in the seat closest to the right of the driver.",
        context:
          "The accompanying driver requirement never lifts while the licence is a learner's. The curfews then relax at each stage: 16-year-olds with a driver licence may drive 6 am to 11 pm, and 17-year-olds 5 am to 1 am, both with exceptions for driving to or from work or being accompanied by a licensed driver 21 or over.",
        trap:
          "The three-month change catches people out in both directions, either applying daylight-only for the whole learner period or applying the 10 pm limit from day one.",
        excerptKey: "learner-curfew",
        commonlyMissed: true,
        sourceLabel: "FLHSMV - Graduated Driver License Laws and Driving Curfews",
        sourceUrl: GDL,
      },
      {
        id: "fl_s6_19",
        topic: "impairment",
        question:
          "What is the consequence of a first refusal to take a breath, blood or urine test in Florida?",
        choices: [
          "An automatic one-year licence suspension",
          "A six-month suspension",
          "No consequence unless a court convicts you",
          "An 18-month suspension and a misdemeanour charge",
        ],
        correctIndex: 0,
        explanation:
          "A first refusal brings an automatic one-year suspension under implied consent. A second refusal is 18 months plus a first degree misdemeanour.",
        context:
          "By signing for your licence you have already consented to submit to a test when an officer has reasonable cause to believe you are under the influence. The administrative suspension is separate from anything a court does about the driving charge, so refusing adds a penalty rather than avoiding one. In a crash causing death or serious injury, a blood test is taken regardless of consent.",
        trap:
          "The six-month figure belongs to the under-21 zero tolerance rule, and the 18-month figure to the second refusal.",
        excerptKey: "implied-consent-refusal",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Implied Consent Law",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_20",
        topic: "sharing",
        question:
          "You are following a motorcycle on a wet Florida road. What buffer does the handbook ask for?",
        choices: [
          "The same four seconds as any other vehicle",
          "More than a four-second buffer, increased further in these conditions",
          "Two seconds, since motorcycles stop faster",
          "Three feet of lateral clearance",
        ],
        correctIndex: 1,
        explanation:
          "Florida asks for more than a four-second buffer behind a motorcycle, and for more space again in bad weather, gusty winds, on wet roads, or over potholes, gravel and railway crossings.",
        context:
          "Motorcycles can stop more quickly than a car, and riders often slow by downshifting or rolling off the throttle without the brake light coming on, so the warning you normally rely on may never appear. Riders are also more likely to fall on wet or gravel surfaces or on metal bridge decks, which is exactly where you need the extra distance.",
        trap:
          "'They stop faster so I need less room' inverts the reasoning: their shorter stopping distance is precisely why you need more.",
        excerptKey: "motorcycle-buffer",
        sourceLabel: "Official Florida Driver License Handbook - Motorcycles and Mopeds",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_21",
        topic: "emergencies",
        question: "Your rear wheels start to slide sideways. What should you do first?",
        choices: [
          "Take your foot off the gas and avoid using the brakes",
          "Brake steadily to bring the car back into line",
          "Apply the parking brake to stop the rotation",
          "Steer sharply in the opposite direction",
        ],
        correctIndex: 0,
        explanation:
          "Come off the accelerator, keep off the brakes if you can, and turn the front tyres in the direction you want the car to go.",
        context:
          "Braking mid-slide locks the wheels and takes away the steering you need, which is why the handbook puts it second. If a collision becomes unavoidable, the emergency braking rules take over, and those differ by system: hard constant pressure with ABS, pumping with conventional brakes.",
        trap:
          "Steering sharply the opposite way is the intuitive correction and is what turns a slide into a spin.",
        excerptKey: "skid-steer-direction",
        sourceLabel: "Official Florida Driver License Handbook - Skidding/Hydroplaning",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_22",
        topic: "signs",
        question: "What do brown signs indicate in Florida?",
        choices: [
          "Roadside services such as fuel and food",
          "Areas of public recreation, cultural and historical significance",
          "Detours around closed roads",
          "County boundaries and mile markers",
        ],
        correctIndex: 1,
        explanation:
          "Brown marks recreation areas, parks and places of cultural or historical significance. It is the one colour that never carries an instruction.",
        context:
          "Blue and white signs point to services such as fuel, food, motels and hospitals, and blue is also used for disabled parking spaces. Green signs give guide and directional information, with east-west routes carrying even numbers and north-south routes odd ones, and in Florida the mile markers match the exit numbers.",
        trap:
          "Blue is the services colour. Brown is scenery and history, which is a category people rarely study because it never asks anything of them.",
        excerptKey: "sign-colors-brown",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_23",
        topic: "rules",
        question: "When must you use a turn signal in Florida?",
        choices: [
          "Only when turning at an intersection",
          "Only when other traffic is present",
          "When turning, and also when changing lanes or overtaking",
          "When turning, and when slowing without braking",
        ],
        correctIndex: 2,
        explanation:
          "Turn signals are required by law when changing lanes or overtaking as well as when turning, and the signal must be given at least 100 feet before a turn.",
        context:
          "Hand signals are an acceptable substitute and must be given from the left side of the vehicle. The one prohibited use is signalling to tell drivers behind you that they can pass, which Florida bans outright because a misread signal sends someone into oncoming traffic.",
        trap:
          "'Only when other traffic is present' is how many drivers behave and is not what the law says, since the driver you have not seen is the reason for the rule.",
        excerptKey: "turn-signals-required-lane-change",
        sourceLabel: "Official Florida Driver License Handbook - Turning",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_24",
        topic: "rightOfWay",
        question:
          "You are stopped at a red light intending to turn right, and a pedestrian steps into the crosswalk on the road you want to enter. What must you do?",
        choices: [
          "Complete the turn quickly ahead of them",
          "Edge forward into the crosswalk to signal your intention",
          "Yield to the pedestrian and wait until they have crossed",
          "Sound your horn and proceed once they have seen you",
        ],
        correctIndex: 2,
        explanation:
          "You must yield the right-of-way to pedestrians in the crosswalk before making a turn on red, and Florida also tells you to stop first and look both ways for people on foot.",
        context:
          "The wider duty is to stop and remain stopped for pedestrians crossing at any marked crossing or intersection, never to let your vehicle overhang a crosswalk at a red light, and never to overtake a vehicle that has stopped at a crosswalk to let someone cross.",
        trap:
          "Edging into the crosswalk is a common habit that puts the vehicle exactly where the handbook says it must not be.",
        excerptKey: "ped-no-block-crosswalk",
        sourceLabel: "Official Florida Driver License Handbook - Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_25",
        topic: "parking",
        question: "Which of these parking clearances is correct in Florida?",
        choices: [
          "30 feet from a fire hydrant",
          "15 feet from a fire hydrant",
          "50 feet from an intersection",
          "10 feet from a railroad crossing",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet is the clearance required from a fire hydrant. Thirty feet applies to signals, stop signs and rural mailboxes on state highways, and fifty feet applies to railroad crossings.",
        context:
          "The whole set is 15 feet from a fire hydrant, 20 feet from an intersection, 20 feet from the entrance to a fire, ambulance or rescue station, 30 feet from a rural mailbox on a state highway between 8 am and 6 pm, 30 feet from a flashing signal, stop sign or traffic signal, and 50 feet from a railroad crossing.",
        trap:
          "Every wrong option here is a real Florida distance attached to the wrong feature, which is exactly how the exam builds these items.",
        excerptKey: "parking-distances",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Parking",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_26",
        topic: "safety",
        question: "Which lights should you use in daytime fog or heavy smoke?",
        choices: [
          "High beam headlights",
          "Low beam headlights",
          "Parking lights",
          "Hazard lights while moving",
        ],
        correctIndex: 1,
        explanation:
          "Use low beams. High beams reflect off fog and smoke and make visibility worse rather than better.",
        context:
          "Headlights are required in low visibility and parking lights are never a substitute. Wildfire smoke, controlled burns, fog and heavy rain all call for the same set of adjustments: wipers and defrosters on, distractions off, the right-hand edge line used as a visual guide, and extra alertness for slow or parked vehicles.",
        trap:
          "High beams feel like the stronger tool and are the wrong choice in exactly the conditions where visibility matters most.",
        excerptKey: "low-visibility-low-beam",
        sourceLabel: "Official Florida Driver License Handbook - Low Visibility",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_27",
        topic: "signals",
        question:
          "You are approaching a signal on green, travelling at the limit. What does the handbook expect of your speed?",
        choices: [
          "Maintain it, since the light is green",
          "Approach at a speed that lets you stop if the light changes",
          "Accelerate slightly to be sure of clearing the junction",
          "Slow to half the limit at every signalled intersection",
        ],
        correctIndex: 1,
        explanation:
          "Approach a green at a speed that will let you slow down if the light changes. That is what makes the yellow-light decision straightforward rather than a gamble.",
        context:
          "Green means go only if the intersection is clear, and you still yield to pedestrians in the crosswalk and to vehicles that have not finished crossing. When the light does change, steady yellow means stop if you can do so safely, because being inside the intersection as it turns red is the situation the sequence exists to prevent.",
        trap:
          "Accelerating to beat the change is the behaviour behind a large share of intersection crashes, and intersections are where Florida says crashes happen more than anywhere else.",
        excerptKey: "green-light",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_28",
        topic: "sharing",
        question:
          "You are overtaking a semi-truck on a Florida interstate. When may you move back into its lane?",
        choices: [
          "As soon as your rear bumper clears the truck's cab",
          "Once you can see the truck's cab in your rear-view mirror",
          "Once you are two car lengths ahead of the trailer",
          "As soon as the truck flashes its headlights",
        ],
        correctIndex: 1,
        explanation:
          "Wait until you can see the cab in your rear-view mirror before completing the pass. Cutting in early puts you inside the truck's forward blind spot with far less stopping distance behind you than the truck needs.",
        context:
          "It is part of a set of habits around the No Zone: pass on the left for maximum visibility, get through the blind spot quickly, avoid passing on a downgrade where the truck's weight builds speed, and keep right when a truck passes you rather than speeding up. Truck drivers may flash their headlights to signal that it is clear to merge back.",
        trap:
          "Clearing the cab is not the same as being visible from it, and the moment your bumper passes the mirror is the moment you disappear.",
        excerptKey: "cmv-pass-left",
        sourceLabel: "Official Florida Driver License Handbook - Commercial Motor Vehicles",
        sourceUrl: HB,
      },
      {
        id: "fl_s6_29",
        topic: "licensing",
        question: "How many multiple-choice questions are on the Florida Class E Knowledge Exam, and how many must you answer correctly?",
        choices: [
          "40 questions, 32 correct",
          "50 questions, 45 correct",
          "50 questions, 40 correct",
          "30 questions, 24 correct",
        ],
        correctIndex: 2,
        explanation:
          "The Class E Knowledge Exam is 50 multiple-choice questions and you must answer 40 of them correctly, which is 80 percent.",
        context:
          "The questions cover Florida traffic laws, safe driving practices and identifying traffic controls. The exam can be taken at a service centre, and applicants under 18 may also take it online through an approved third party administrator with a notarised parent proctoring form. Whoever administers it, FLHSMV can require a random no-fee retest afterwards.",
        trap:
          "Knowing the 80 percent figure without the question count leaves you guessing between plausible pairs, which is why the exam format is worth memorising as two numbers.",
        excerptKey: "class-e-pass-40",
        sourceLabel: "FLHSMV - Class E Knowledge Exam & Driving Skills Test",
        sourceUrl: EXAM,
      },
      {
        id: "fl_s6_30",
        topic: "emergencies",
        question:
          "A hurricane has knocked out power and the traffic signals at a busy junction are dark. How do you proceed?",
        choices: [
          "Treat the junction as a four-way stop, moving off in arrival order",
          "Give priority to the larger road",
          "Proceed without stopping if the way is clear",
          "Wait for a police officer before crossing",
        ],
        correctIndex: 0,
        explanation:
          "With the power out and the signals inactive, you treat the intersection as a four-way stop. Vehicles move through in the order they arrived, and where several arrive together the driver on the left yields to the driver on the right.",
        context:
          "The same result applies to any signal that is out of order when no officer is present. If an officer is directing traffic, the officer overrides every sign and signal at that junction, including instructions that contradict the lights.",
        trap:
          "Giving the bigger road priority is what most drivers actually do at a dark signal, and it has no basis in Florida law.",
        excerptKey: "power-outage-four-way",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Power Outage",
        sourceUrl: HB,
      },
    ],
  },
];
