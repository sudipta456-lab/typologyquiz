import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sources and same rules as sets-1-3.ts: the Idaho Driver's
// Handbook (Idaho Transportation Department, Division of Motor Vehicles, July
// 2026), Idaho Code on the Legislature's own site, and two ITD web pages for
// the process details the handbook leaves out.
//
// Set 5 is the one built from what learners actually report. Thirty-seven
// Reddit threads were read for this bank (they are listed in
// docs/driving/research/idaho.md), together with ITD's own 60-question sample
// Class D test. Every claim from a forum was then checked against the handbook
// or the statute before it became a question: a forum tells you which rule
// catches people, never what the rule is. Where the two disagreed, the
// official source won and the confusion became the trap. No recalled exam
// question was reproduced, and no comment text appears anywhere.
const HB = "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf";
/** The handbook's printed page number IS its PDF page number. */
const hb = (page: number) => `${HB}#page=${page}`;
const CODE = "https://legislature.idaho.gov/statutesrules/idstat";

export const idahoSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Everything the handbook covers and most practice sites skip: required equipment, documents, weather, freeway technique, the points system and the chapters at the back of the book.",
    questions: [
      {
        id: "id_s4_01",
        topic: "licensing",
        question: "What does an approved Idaho driver training course consist of?",
        choices: [
          "20 hours of classroom and 4 hours of driving",
          "30 hours of classroom and 10 hours of driving",
          "40 hours of classroom only",
          "30 hours of classroom, 6 hours observing and 6 hours behind the wheel",
        ],
        correctIndex: 3,
        explanation:
          "Thirty hours of classroom instruction, six hours of in-car experience observing other student drivers, and six hours of behind-the-wheel practice with an approved instructor.",
        context:
          "Driver training is required for anyone under 17 applying for an Idaho license. Public school courses are open to any Idaho resident between 14 and a half and 21, whether or not they attend that school, and you must buy a driver training instruction permit before the first class.",
        trap: "The six hours of observing are part of the required course, not optional extra. People remember the six behind the wheel and forget the six in the back seat.",
        excerptKey: "driver-training-hours",
        sourceLabel: "Idaho Driver's Handbook - Driver Training",
        sourceUrl: hb(19),
      },
      {
        id: "id_s4_02",
        topic: "safety",
        question: "Up to what age does Idaho law require a child to ride in an approved safety seat?",
        choices: [
          "Under 4 years old",
          "6 years of age or younger",
          "Under 8 years old",
          "Until they reach 60 pounds",
        ],
        correctIndex: 1,
        explanation:
          "Six or younger. Idaho requires anyone carrying a child of six or under in a non-commercial vehicle to secure them in an approved child safety seat.",
        context:
          "The law applies to cars built with seat belts after 1 January 1966. Idaho Code 49-672 adds the exception: if every belt in the car is already in use, an unrestrained child covered by the rule goes in the rear seat.",
        trap: "Idaho's statutory age is lower than the eight-year booster rules many neighboring states use. The handbook separately passes on the federal advice that children under 13 belong in the back seat, which is guidance, not Idaho law.",
        excerptKey: "child-restraint-age",
        sourceLabel: "Idaho Driver's Handbook - Child Restraints are Required",
        sourceUrl: hb(41),
      },
      {
        id: "id_s4_03",
        topic: "signs",
        question: "A sign shows an arrow splitting around an obstacle. What is it telling you?",
        choices: [
          "A lane is closed ahead",
          "There is a hazard in the middle of the road",
          "The road ahead is divided, so stay to the right of the island or barrier",
          "You may pass on either side",
        ],
        correctIndex: 2,
        explanation:
          "Keep Right of Island. The road ahead is divided, and you stay on the right side of the island or barrier.",
        context:
          "It is a regulatory sign, so it carries a legal requirement rather than a warning. Idaho groups it with Stop, Yield, Do Not Enter and the speed limit sign in the regulatory family.",
        trap: "Passing on either side is what the sign exists to forbid. Which side you take is not a matter of judgment here.",
        excerptKey: "keep-right-of-island",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signs, Keep Right of Island",
        sourceUrl: hb(45),
      },
      {
        id: "id_s4_04",
        topic: "rules",
        question:
          "You are in the shared center lane marked by a solid yellow line and a yellow dashed line. What may you use it for?",
        choices: [
          "Making a left turn, or a U-turn where one is permitted, from either direction",
          "Passing slower traffic on your left",
          "Travelling in it until your turn comes up",
          "Parking briefly to drop off a passenger",
        ],
        correctIndex: 0,
        explanation:
          "It is a turn lane and nothing else: left turns, and U-turns where they are permitted, made from either direction of travel.",
        context:
          "Idaho adds the prohibition in the same breath: you may not travel in the shared turn lanes or interfere with another vehicle preparing to turn from it. Idaho Code 49-644 says a left turn may not be made from any other lane where the center lane exists.",
        trap: "Running along it to get to your turn is the common misuse, and it puts you head-on into somebody turning the other way.",
        excerptKey: "shared-center-lane",
        sourceLabel: "Idaho Driver's Handbook - Pavement Markings, Shared Lanes",
        sourceUrl: hb(58),
      },
      {
        id: "id_s4_05",
        topic: "parking",
        question:
          "Who may park in a space marked with the international symbol of accessibility in Idaho?",
        choices: [
          "Only a vehicle displaying the symbol on its plate or a special card",
          "Anyone, for up to 15 minutes",
          "Anyone, if no accessible space is otherwise occupied",
          "Anyone dropping off a passenger",
        ],
        correctIndex: 0,
        explanation:
          "Only vehicles displaying the symbol on a license plate or a special card. Drivers without one are prohibited from parking there and may be fined.",
        context:
          "The handbook adds a benefit that goes with the placard: a car displaying the symbol may park in a reserved space without paying and for unlimited time.",
        trap: "A short stop is still parking. There is no grace period in the rule for dropping someone off.",
        excerptKey: "handicapped-parking",
        sourceLabel: "Idaho Driver's Handbook - Handicapped Parking",
        sourceUrl: hb(82),
      },
      {
        id: "id_s4_06",
        topic: "emergencies",
        question:
          "A car is coming straight at you in your lane on a two-lane Idaho highway. What does the handbook tell you to do?",
        choices: [
          "Steer left into the empty oncoming lane",
          "Brake hard and hold your line",
          "Slow, flash your lights and sound your horn, and pull as far right as you can",
          "Accelerate past on the left before they reach you",
        ],
        correctIndex: 2,
        explanation:
          "Slow down, try to warn the other driver with your lights and horn, and pull to the right as far as you can.",
        context:
          "The handbook is explicit about why not to go left: the other driver may recover into their own lane and hit you broadside. If a crash cannot be avoided, steer so the cars meet at an angle rather than head-on.",
        trap: "Steering into the empty lane feels obvious and is the answer the handbook names as wrong. The other driver is heading for that lane too.",
        excerptKey: "head-on-pull-right",
        sourceLabel: "Idaho Driver's Handbook - Oncoming Car in Your Lane",
        sourceUrl: hb(119),
      },
      {
        id: "id_s4_07",
        topic: "signals",
        question: "On a horizontally mounted Idaho traffic signal, where is the red light?",
        choices: [
          "In the middle",
          "On the far left",
          "On the far right",
          "The order varies by city",
        ],
        correctIndex: 1,
        explanation:
          "Far left. A horizontal signal runs red, yellow, green from left to right, which is the vertical top-to-bottom order laid on its side.",
        context:
          "The handbook gives both layouts because color blindness makes position the reliable cue. A vertical signal is red at the top, yellow in the middle, green at the bottom.",
        trap: "Far right is green, and getting the ends the wrong way round on a horizontal signal is exactly the error the fixed order exists to prevent.",
        excerptKey: "signal-light-order",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals",
        sourceUrl: hb(55),
      },
      {
        id: "id_s4_08",
        topic: "sharing",
        question: "You come up behind someone riding a horse on an Idaho road. What should you do?",
        choices: [
          "Sound your horn so the rider knows you are there",
          "Pass close and fast to get by quickly",
          "Flash your headlights and wait for the rider to leave the road",
          "Slow down, give plenty of room, and do not use your horn",
        ],
        correctIndex: 3,
        explanation:
          "Slow down and allow plenty of room. The handbook says never to sound your horn, because it may frighten the horse and cause an accident.",
        context:
          "Riders are allowed to use most public roads and have the same rights and duties as drivers. If a rider is having trouble controlling the animal, use extreme caution going around, and stop if that is what it takes not to become part of the hazard.",
        trap: "Warning the rider with the horn is well-meant and is the specific thing Idaho tells you not to do.",
        excerptKey: "horseback-no-horn",
        sourceLabel: "Idaho Driver's Handbook - Horseback Riders",
        sourceUrl: hb(98),
      },
      {
        id: "id_s4_09",
        topic: "speed",
        question: "What does Idaho say about speeding in a designated work zone?",
        choices: [
          "The limit is advisory when no workers are present",
          "The limit is the same as the surrounding road",
          "You may exceed it by up to 15 mph while passing",
          "It can bring an enhanced, fixed penalty",
        ],
        correctIndex: 3,
        explanation:
          "Violating a work zone speed limit can result in an enhanced, fixed penalty. The sign chapter says the same thing in plainer words: fines for speeding are increased in work zones where the signage indicates.",
        context:
          "The work-zone rules run further than speed. You must yield to any vehicle or pedestrian actually working on the project, and you may not go around or move barriers or signs to cross a road closed to traffic.",
        trap: "The 15 mph passing allowance is written to exclude construction zones. It is the one place the exception does not reach.",
        excerptKey: "work-zone-penalty",
        sourceLabel: "Idaho Driver's Handbook - Speed Limits, Work zones",
        sourceUrl: hb(69),
      },
      {
        id: "id_s4_10",
        topic: "impairment",
        question: "According to the handbook, what does marijuana do to a driver?",
        choices: [
          "It has no measurable effect on driving",
          "It slows reaction time and impairs judgment of time and distance",
          "It causes aggressive and reckless behavior",
          "It only affects driving when combined with alcohol",
        ],
        correctIndex: 1,
        explanation:
          "Marijuana slows reaction time and impairs the judgment of time and distance. That combination is directly what a driver needs for gaps, turns and stopping.",
        context:
          "The handbook runs through the others in the same paragraph: methamphetamine or cocaine causes aggressive and reckless behavior, opioids cause drowsiness and impaired memory and thinking, and sedatives cause dizziness and drowsiness.",
        trap: "Aggression is the stimulant profile, not the cannabis one. Idaho lists them separately because the driving failures they produce are different.",
        excerptKey: "drug-effects",
        sourceLabel: "Idaho Driver's Handbook - Impaired Driving",
        sourceUrl: hb(131),
      },
      {
        id: "id_s4_11",
        topic: "licensing",
        question:
          "How many hours of supervised driving must an Idaho GDL learner accumulate, and how many at night?",
        choices: [
          "30 hours, 6 at night",
          "40 hours, 10 at night",
          "50 hours, 10 at night",
          "60 hours, 20 at night",
        ],
        correctIndex: 2,
        explanation:
          "At least 50 hours of supervised driving time, ten of which must be at night.",
        context:
          "The hours run alongside a minimum six-month violation-free supervised instruction period, with a licensed driver of 21 or over in the front passenger seat and nobody else in the front.",
        trap: "A traffic conviction during the period cancels the permit and restarts the six months from scratch with a new one, which is a far heavier penalty than the hours suggest.",
        excerptKey: "gdl-50-hours",
        sourceLabel: "Idaho Driver's Handbook - Graduated Driver's License (GDL) Program",
        sourceUrl: hb(19),
      },
      {
        id: "id_s4_12",
        topic: "safety",
        question: "Where does the Idaho handbook say to put your hands on the steering wheel?",
        choices: [
          "At approximately the nine o'clock and three o'clock positions",
          "At ten and two",
          "At eight and four, below the airbag",
          "One hand at twelve o'clock",
        ],
        correctIndex: 0,
        explanation:
          "Nine and three, on opposite sides of the wheel. That gives the fastest, most predictable steering response in an emergency.",
        context:
          "The handbook adds a caveat that matters in an airbag car: check the owner's manual for the proper hand placement for your vehicle.",
        trap: "Ten and two is what an older generation was taught and it puts your forearms across a deploying airbag. Idaho has moved to nine and three.",
        excerptKey: "hand-position",
        sourceLabel: "Idaho Driver's Handbook - Defensive Driving",
        sourceUrl: hb(89),
      },
      {
        id: "id_s4_13",
        topic: "signs",
        question:
          "A SHARE THE ROAD sign sits below a bicycle symbol. What does its presence usually mean?",
        choices: [
          "There is a bike lane in this stretch",
          "Bicycles are prohibited beyond this point",
          "The lane is wide enough to share safely",
          "There is no bike lane here, so drivers and riders must share the highway",
        ],
        correctIndex: 3,
        explanation:
          "It is used on highways where bike lanes are not provided. It warns drivers and bicyclists that they have to share the road.",
        context:
          "The handbook says the signs may be placed where there are narrow lanes, narrow shoulders, high traffic volumes or high speeds - all the conditions that make sharing hardest.",
        trap: "The sign appears because there is no bike lane, not because there is one. Its presence is a signal to give more room, not less.",
        excerptKey: "share-the-road-sign",
        sourceLabel: "Idaho Driver's Handbook - Warning Signs, Share the Road",
        sourceUrl: hb(52),
      },
      {
        id: "id_s4_14",
        topic: "rules",
        question: "What does the handbook tell you to do while backing up?",
        choices: [
          "Watch the rear-view mirror carefully",
          "Rely on the reversing camera if the vehicle has one",
          "Look over your shoulder through the rear window and back slowly",
          "Back quickly to spend less time in the traffic lane",
        ],
        correctIndex: 2,
        explanation:
          "Put your right arm on the back of the passenger seat, look over your shoulder directly through the rear window, and back slowly. Do not rely on your mirrors.",
        context:
          "The step before that is walking round: check behind the vehicle before you get in, because children and small objects are hard to see from the driver's seat. Keep looking back until you have come to a complete stop.",
        trap: "The handbook names mirrors as the specific thing not to depend on. ITD's own sample test asks what to do before backing out of a driveway, and the answer is to check behind before you get in.",
        excerptKey: "backing-look-back",
        sourceLabel: "Idaho Driver's Handbook - Backing",
        sourceUrl: hb(82),
      },
      {
        id: "id_s4_15",
        topic: "rightOfWay",
        question:
          "You are driving through a marked highway construction area and a worker steps into the lane ahead. What does Idaho Code require?",
        choices: [
          "The worker must yield to traffic in the travel lane",
          "You yield the right of way to any vehicle or pedestrian working on the highway there",
          "You may proceed at the posted work-zone speed",
          "The requirement applies only when a flagger is present",
        ],
        correctIndex: 1,
        explanation:
          "Idaho Code 49-643 requires drivers to yield to any vehicle or pedestrian actually engaged in work on a highway inside a construction or maintenance area marked by traffic-control devices.",
        context:
          "The handbook repeats the rule in its yielding list and adds that a work vehicle displaying flashing lights and obviously engaged in work gets the same right of way anywhere on the road, not just inside a marked zone.",
        trap: "The travel lane does not stay yours inside a work zone. Workers are inches from traffic and the statute puts the duty on the driver.",
        excerptKey: "code-work-zone-yield",
        sourceLabel: "Idaho Code 49-643 - Highway Construction and Maintenance",
        sourceUrl: `${CODE}/Title49/T49CH6/SECT49-643/`,
      },
      {
        id: "id_s4_16",
        topic: "emergencies",
        question:
          "You have a minor crash on an Idaho interstate. Nobody is hurt and both cars still drive. What does the Quick Clearance law require?",
        choices: [
          "Leave the vehicles exactly where they stopped until police arrive",
          "Drive to the nearest exit and call from there",
          "Photograph the scene before anything is moved",
          "Move the vehicles safely to a shoulder, median or emergency lane",
        ],
        correctIndex: 3,
        explanation:
          "On an interstate or major divided highway, a crash that causes no death or injury has to be cleared: you move the vehicle safely to a shoulder, median or emergency lane.",
        context:
          "The handbook allows moving vehicles that pose a traffic hazard before police arrive in any crash, and Quick Clearance makes it a requirement on the big roads. Your other duties are unchanged: stop, help anyone injured, and call police and medical help.",
        trap: "Leaving the cars in the lane to preserve the scene is the old advice and it is now the wrong answer on a divided highway. The secondary crash is the bigger risk.",
        excerptKey: "quick-clearance",
        sourceLabel: "Idaho Driver's Handbook - Crashes & the Law",
        sourceUrl: hb(121),
      },
      {
        id: "id_s4_17",
        topic: "safety",
        question:
          "How much earlier does the handbook say to start slowing on ice or snow?",
        choices: [
          "Slightly earlier than normal",
          "About twice as early",
          "Whenever the anti-lock brakes activate",
          "At least three times sooner than you normally would",
        ],
        correctIndex: 3,
        explanation:
          "At least three times sooner than usual when turning or stopping. The handbook puts it in the same paragraph as getting the feel of the road by testing your steering and braking gently as you set off.",
        context:
          "The rest of the winter list: keep the windows fully clear before you move, do not use cruise control on wet or icy roads, use chains on very slippery roads, and expect ice on bridges, overpasses and shady spots first.",
        trap: "Anti-lock brakes keep you steering; they do not shorten the stopping distance. Waiting for them to intervene is already too late.",
        excerptKey: "winter-slow-three-times",
        sourceLabel: "Idaho Driver's Handbook - Winter Driving",
        sourceUrl: hb(113),
      },
      {
        id: "id_s4_18",
        topic: "sharing",
        question:
          "A semi ahead of you swings left before making a right turn at an intersection. What should you do?",
        choices: [
          "Move up on the truck's right, since the lane is now open",
          "Stay back and give the truck room to complete the turn",
          "Pass on the left while the truck is turning",
          "Sound your horn to tell the driver they are in the wrong lane",
        ],
        correctIndex: 1,
        explanation:
          "Large vehicles sometimes need more than one lane to turn. The handbook warns specifically against squeezing by on the right when a truck is making that kind of turn and calls it a frequent cause of crashes.",
        context:
          "The gap the truck opens on its right is not a lane, it is the space the trailer is about to occupy. The general rule for large vehicles is to give them room to turn, to stop and to change lanes.",
        trap: "The opening looks like an invitation and is the exact position the trailer sweeps through. It is one of the few maneuvers the handbook names as a frequent cause of crashes.",
        excerptKey: "truck-wide-right-turn",
        sourceLabel: "Idaho Driver's Handbook - Large Vehicles, Turning Space",
        sourceUrl: hb(106),
      },
      {
        id: "id_s4_19",
        topic: "licensing",
        question:
          "A 16-year-old holds an Idaho license and their parent signed as liability signer. What can the parent do?",
        choices: [
          "Nothing, once the license has been issued",
          "Ask ITD to add a curfew restriction",
          "Withdraw consent at any time, which cancels the credential",
          "Withdraw consent only at renewal",
        ],
        correctIndex: 2,
        explanation:
          "While the driver is under 18, the liability signer may withdraw consent at any time, and the department cancels the driving credential when they do.",
        context:
          "The signer takes on legal responsibility for the young driver's actions on the road, which is why the power to withdraw goes with it. If the signer is not the parent named on the birth certificate, Idaho requires documents proving the authority to consent.",
        trap: "The license is not the teenager's property in the way it feels. Consent is a live condition of it, not a one-time signature.",
        excerptKey: "liability-withdraw",
        sourceLabel: "Idaho Driver's Handbook - Liability Signer",
        sourceUrl: hb(26),
      },
      {
        id: "id_s4_20",
        topic: "signs",
        question:
          "A yellow diamond shows a truck on a steep downward slope. What does the handbook suggest you do?",
        choices: [
          "Check your brakes before going down the hill",
          "Shift into neutral to save fuel",
          "Increase speed so you carry momentum up the far side",
          "Move to the left lane for the descent",
        ],
        correctIndex: 0,
        explanation:
          "The Hill sign warns all vehicles that the road goes down a steep hill, and the handbook's advice is to check your brakes before you start down.",
        context:
          "Idaho's mountain driving section says the rest: use a lower gear to control speed on long descents, never coast downhill in neutral or with the clutch in, and stay close to the right edge away from oncoming traffic.",
        trap: "Coasting in neutral is precisely what the handbook forbids on a hill. It removes engine braking exactly where you need it most.",
        excerptKey: "hill-sign",
        sourceLabel: "Idaho Driver's Handbook - Warning Signs, Hill",
        sourceUrl: hb(52),
      },
      {
        id: "id_s4_21",
        topic: "rules",
        question:
          "You have missed your exit on an Idaho interstate and there is a gap in the median. May you use it?",
        choices: [
          "No - median crossovers are for maintenance and emergency vehicles only",
          "Yes, if no traffic is coming in either direction",
          "Yes, if you signal and cross at walking speed",
          "Only between midnight and 5am",
        ],
        correctIndex: 0,
        explanation:
          "Freeway median crossovers are for highway maintenance or emergency vehicle use only, and it is illegal for any other vehicle to use them.",
        context:
          "The handbook says the same thing twice. It is illegal to drive across a barrier or unpaved strip separating the two halves of a roadway except at an authorized opening, and on interstates the crossovers are for emergency vehicles.",
        trap: "An empty road is not the test. The prohibition is about who the opening is for, not about whether it looks safe at that moment.",
        excerptKey: "freeway-wrong-ramp",
        sourceLabel: "Idaho Driver's Handbook - Entering a Freeway",
        sourceUrl: hb(84),
      },
      {
        id: "id_s4_22",
        topic: "speed",
        question:
          "Where designated and as weather permits, what is the top speed on a rural Idaho interstate compared with an urban one?",
        choices: [
          "75 rural and 75 urban",
          "70 rural and 55 urban",
          "80 rural and 65 urban",
          "80 rural and 75 urban",
        ],
        correctIndex: 2,
        explanation:
          "Up to 80 mph on rural interstates and up to 65 on urban interstates, where designated and as weather conditions permit, unless posted otherwise.",
        context:
          "The base statutory maximum on interstates is 75, and 80 becomes available only after ITD completes an engineering and traffic study and the transportation board agrees. The number on the sign is always what governs.",
        trap: "The 80 mph headline is a rural figure only. An urban interstate through Boise runs at a much lower ceiling.",
        excerptKey: "freeway-speeds",
        sourceLabel: "Idaho Driver's Handbook - Freeway Driving",
        sourceUrl: hb(83),
      },
      {
        id: "id_s4_23",
        topic: "signals",
        question: "What does a flashing circular yellow signal require?",
        choices: [
          "A complete stop before proceeding",
          "Slow down, look carefully for hazards, and proceed with caution",
          "The same treatment as a four-way stop",
          "Yield to traffic on the cross street, then go",
        ],
        correctIndex: 1,
        explanation:
          "Caution. Slow down, look carefully for hazards, and proceed. There is no requirement to stop at a flashing yellow.",
        context:
          "Its partner is the flashing red, which is a stop sign in light form. The pair is deliberately learned together, because the only difference in what you must do is whether you stop at all.",
        trap: "A dead signal is treated as a four-way stop, and a flashing red requires a stop. A flashing yellow requires neither.",
        excerptKey: "flashing-yellow",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals, Flashing Yellow Light",
        sourceUrl: hb(55),
      },
      {
        id: "id_s4_24",
        topic: "parking",
        question: "May you park in a marked bicycle lane in Idaho?",
        choices: [
          "Yes, briefly, if you stay with the vehicle",
          "Yes, outside commuting hours",
          "Yes, if you are loading or unloading",
          "No - bike lanes are designated travel lanes and must not be blocked",
        ],
        correctIndex: 3,
        explanation:
          "Parking in bike lanes is not allowed. The handbook calls them designated travel lanes for bicyclists and says they should not be blocked.",
        context:
          "The no-parking list says the same thing first, with bike lanes at the top of it alongside sidewalks, intersections, bridges and driveways.",
        trap: "A car parked in a bike lane forces every rider out into the traffic lane at the worst possible moment. The rule has no loading exception in the handbook.",
        excerptKey: "bike-lane-no-parking",
        sourceLabel: "Idaho Driver's Handbook - Bicyclists, Bike Lanes",
        sourceUrl: hb(101),
      },
      {
        id: "id_s4_25",
        topic: "safety",
        question:
          "Oncoming headlights are dazzling you on a dark Idaho highway. What does the handbook tell you to do?",
        choices: [
          "Flash your high beams to make the other driver dim theirs",
          "Close one eye to preserve night vision",
          "Wear tinted glasses at night to cut the glare",
          "Shift your eyes down to the lower right side of your lane",
        ],
        correctIndex: 3,
        explanation:
          "Look away from the lights and down to the lower right side of your traffic lane, which keeps the beam out of your eyes while you stay tracking the road edge.",
        context:
          "The handbook is blunt about the tinted-glasses idea: never wear sunglasses when light levels are low. It also asks you to keep the windshield and headlights clean, since dirt both dims your light and scatters everyone else's.",
        trap: "Flashing back is retaliation, not a technique, and it blinds the other driver at the moment you are closest to each other.",
        excerptKey: "night-glare",
        sourceLabel: "Idaho Driver's Handbook - Night Driving",
        sourceUrl: hb(109),
      },
      {
        id: "id_s4_26",
        topic: "impairment",
        question:
          "According to the handbook, how much does the risk of causing a crash change at a BAC slightly above .05?",
        choices: [
          "It is unchanged below the legal limit",
          "It doubles",
          "It rises by about a quarter",
          "It is six times greater",
        ],
        correctIndex: 1,
        explanation:
          "At slightly above .05 the risk of causing a crash doubles - and that is well below Idaho's .08 threshold for an adult driver.",
        context:
          "The handbook continues the scale: at .10 the risk is six times as great, and at .15 it is 25 times as great. It also warns that your ability to drive may be impaired long before you or anyone with you notices.",
        trap: "Six times is the figure for .10, not .05. The point of the scale is that the risk is already climbing steeply before you reach the legal limit.",
        excerptKey: "bac-risk-multiplier",
        sourceLabel: "Idaho Driver's Handbook - How Much is Too Much",
        sourceUrl: hb(128),
      },
      {
        id: "id_s4_27",
        topic: "sharing",
        question:
          "You are following a truck displaying hazardous materials placards as it approaches a railroad crossing. What should you expect?",
        choices: [
          "It will slow but not stop unless a train is coming",
          "It will sound its horn and cross without stopping",
          "It must stop at the crossing, so be prepared to stop behind it",
          "It will pull onto the shoulder to let you pass first",
        ],
        correctIndex: 2,
        explanation:
          "All vehicles carrying hazardous materials must stop at all railroad crossings. If you are behind one, be ready to stop.",
        context:
          "The handbook's railroad section makes the same point from the other side: watch out for vehicles that must stop at crossings, because some buses and trucks are required to.",
        trap: "The stop happens whether or not a train is anywhere near, which is why it surprises the driver behind. Following too closely at a crossing is how this becomes a rear-end collision.",
        excerptKey: "hazmat-railroad",
        sourceLabel: "Idaho Driver's Handbook - Large Vehicles, Hazardous Materials",
        sourceUrl: hb(106),
      },
      {
        id: "id_s4_28",
        topic: "emergencies",
        question:
          "You are stranded in your car during heavy snowfall on an Idaho mountain road. What does the handbook advise?",
        choices: [
          "Stay with your vehicle",
          "Walk toward the nearest town while you still have daylight",
          "Leave the engine running with the windows sealed for warmth",
          "Abandon the car in the traffic lane so plows can find it",
        ],
        correctIndex: 0,
        explanation:
          "Stay with the vehicle if heavy snow is falling. The handbook says most deaths happen when people leave the car, get lost and freeze.",
        context:
          "If you run the engine for heat, make sure the exhaust pipe is clear of snow. Tie something brightly colored to the antenna if you can, and if you must abandon the car, leave it as far off the road as possible so it does not endanger the plow crews.",
        trap: "Walking for help feels active and is what kills people. The car is shelter and it is far easier to find than a person on foot.",
        excerptKey: "stranded-stay-with-car",
        sourceLabel: "Idaho Driver's Handbook - Getting Stranded During Winter Weather",
        sourceUrl: hb(115),
      },
      {
        id: "id_s4_29",
        topic: "licensing",
        question: "How long do you have to tell ITD that you have moved?",
        choices: [
          "30 days",
          "60 days",
          "Until your next renewal",
          "There is no requirement as long as mail reaches you",
        ],
        correctIndex: 0,
        explanation:
          "Thirty days. You notify ITD within 30 days of an address change, online, on a form at any county driver's license office, or in writing.",
        context:
          "Changing the address on your record is not the same as changing it on the card. To get the new address printed you apply for a duplicate, unless you happen to be eligible to renew. Your record has to show your actual physical address, though a PO box may be used for mail.",
        trap: "Thirty days is also the deadline for a new resident to get an Idaho license, and the two rules use the same number for different things.",
        excerptKey: "address-change",
        sourceLabel: "Idaho Driver's Handbook - Address Change",
        sourceUrl: hb(29),
      },
      {
        id: "id_s4_30",
        topic: "signs",
        question:
          "An ADDED LANE sign appears ahead of you on the right lane of a highway. What does it warn of?",
        choices: [
          "Your lane is about to end",
          "A passing lane opens for you",
          "Two highways are converging, so watch for traffic in the left lane moving right",
          "A truck climbing lane begins",
        ],
        correctIndex: 2,
        explanation:
          "Two highways are converging. You watch for traffic in the left lane that may move into the right lane, and check the left lane is clear before you signal and move into it yourself.",
        context:
          "It is easily confused with the Merging Traffic sign, where you are on the main road and other vehicles enter your lane, and with Lane Ends, where two lanes become one and the merging driver must yield.",
        trap: "An added lane is not the same as a lane ending, and only one of the three signs puts the duty to yield on the other driver.",
        excerptKey: "added-lane-sign",
        sourceLabel: "Idaho Driver's Handbook - Warning Signs, Added Lane",
        sourceUrl: hb(50),
      },
      {
        id: "id_s4_31",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light with no arrow, and an oncoming car is approaching. What does Idaho require?",
        choices: [
          "The oncoming car yields, because you signaled first",
          "You yield to oncoming traffic unless a traffic-control device directs otherwise",
          "You may turn if you can clear the intersection before the other car arrives",
          "Whichever driver entered the intersection first has priority",
        ],
        correctIndex: 1,
        explanation:
          "Always yield to oncoming traffic in the intersection when you turn left, unless a traffic-control device directs otherwise. The device that changes it is a green arrow.",
        context:
          "Idaho Code 49-802 words the same rule around the signal: a driver facing a green arrow for the left turn still yields to traffic and pedestrians lawfully within the intersection or an adjacent crosswalk.",
        trap: "Judging that you can beat the oncoming car is the most common cause of serious motorcycle crashes, which is why the handbook tells you to look and then look again before turning left.",
        excerptKey: "left-turn-yield",
        sourceLabel: "Idaho Driver's Handbook - Yielding to Other Drivers",
        sourceUrl: hb(76),
      },
      {
        id: "id_s4_32",
        topic: "rules",
        question: "How should you position the car for a right turn in Idaho?",
        choices: [
          "Swing left first so the turn is less sharp",
          "Stay in the middle of the lane throughout",
          "Use the left lane if the right lane is occupied",
          "Approach in the right-hand lane, as close to the curb as is reasonable",
        ],
        correctIndex: 3,
        explanation:
          "Signal, approach in the right-hand lane staying as close to the right curb as is reasonable, yield to pedestrians and traffic with the right of way, and turn into the right-hand lane of the cross street.",
        context:
          "The handbook adds two words on the end: do not swing wide. Idaho Code 49-644 uses the same standard for the approach and the turn - as close as practicable to the right-hand curb or edge.",
        trap: "Swinging left before a right turn opens a gap on your right that a cyclist may already be in. The handbook tells you to watch for bicycles between your vehicle and the curb for exactly that reason.",
        excerptKey: "right-turn-method",
        sourceLabel: "Idaho Driver's Handbook - Turns, Right Turns",
        sourceUrl: hb(73),
      },
      {
        id: "id_s4_33",
        topic: "safety",
        question: "What does the handbook tell you to do when you start feeling drowsy at the wheel?",
        choices: [
          "Open a window and turn up the radio",
          "Drink an energy drink and press on",
          "Take a stay-awake tablet",
          "Get off the road at the first rest stop and take a nap",
        ],
        correctIndex: 3,
        explanation:
          "Stop driving. Pull off at the first rest stop or service area and sleep. The handbook calls drowsiness one of the greatest killers in interstate highway driving.",
        context:
          "It names highway hypnosis as the freeway version, drowsiness brought on by monotony and the drone of wind and tires, and suggests shifting your eyes between near and far objects to fight it.",
        trap: "The handbook says outright not to rely on stay-awake drugs or energy drinks, because they can make your driving even more dangerous.",
        excerptKey: "drowsy-driving",
        sourceLabel: "Idaho Driver's Handbook - Fatigue & Highway Hypnosis",
        sourceUrl: hb(93),
      },
      {
        id: "id_s4_34",
        topic: "signals",
        question:
          "You are slowing sharply on an Idaho road because of something ahead. What does the law require of you?",
        choices: [
          "Nothing, as long as you do not stop completely",
          "Give a signal to drivers behind, with brake lights or an arm signal",
          "Turn on your hazard lights",
          "Sound your horn",
        ],
        correctIndex: 1,
        explanation:
          "When slowing down or stopping you must signal to other drivers, using either the brake-operated lights on the rear of your vehicle or an arm signal.",
        context:
          "Idaho Code 49-808 adds the condition: no person shall stop or suddenly decrease speed without first giving an appropriate signal to the driver immediately behind, when there is an opportunity to give one.",
        trap: "Hazard lights are for a stopped or disabled vehicle. The handbook warns against using them while moving, because other drivers read them as meaning you have stopped.",
        excerptKey: "stop-signal-required",
        sourceLabel: "Idaho Driver's Handbook - Stopping, Stop signals",
        sourceUrl: hb(71),
      },
      {
        id: "id_s4_35",
        topic: "speed",
        question: "What does Idaho law say about racing on a public road?",
        choices: [
          "It is permitted on closed sections with a permit",
          "It is an offense only if someone is injured",
          "Any race, speed exhibition or speed contest on a public road is illegal",
          "It is treated as ordinary speeding",
        ],
        correctIndex: 2,
        explanation:
          "Idaho makes it illegal to engage in any vehicle race, speed exhibition or speed contest on any public road, street or highway. No injury is needed for the offense.",
        context:
          "It sits alongside reckless driving, which the handbook defines as driving with willful disregard for the safety of people or property, and which applies on private property as well as public roads. Both are grounds for suspension.",
        trap: "A short burst between two cars at a light is a speed contest. The statute is about the contest, not the distance covered.",
        excerptKey: "racing-illegal",
        sourceLabel: "Idaho Driver's Handbook - Speed Limits, Racing",
        sourceUrl: hb(69),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Built from what Idaho learners say beat them and from the rules ITD chooses to sample on its own practice test. Open range, the five-second signal, the 35 mph default, and the page of the handbook that is out of date.",
    questions: [
      {
        id: "id_s5_01",
        topic: "sharing",
        question:
          "You hit a cow that wandered onto an open range highway in Idaho and your car is wrecked. Who pays for the car?",
        choices: [
          "The livestock owner, because the animal was loose",
          "The county, which maintains the fencing",
          "You do - on open range the owner is not liable for damage to your vehicle",
          "Your insurer recovers it from the owner automatically",
        ],
        correctIndex: 2,
        explanation:
          "On open range the owner of the animal is not liable for damage to your vehicle or injury to anyone in it. You may even be liable for the animal if you were negligent.",
        context:
          "Idaho Code 25-2118 says a person owning livestock running on open range has no duty to keep them off the highway. Open range means all uninclosed lands outside cities, villages and herd districts where livestock are grazed or permitted to roam.",
        trap: "Idaho learners name this as the question that beat them more often than any other, and the fences are why: the handbook warns that the presence of fences does not necessarily mean the animals are not present or do not have the right of way.",
        excerptKey: "open-range-liability",
        sourceLabel: "Idaho Driver's Handbook - Open Range",
        sourceUrl: hb(108),
        commonlyMissed: true,
      },
      {
        id: "id_s5_02",
        topic: "speed",
        question:
          "You drive into a small Idaho town on a state highway. The 65 mph signs stop and nothing new is posted. What is the limit through town?",
        choices: ["25 mph", "30 mph", "45 mph", "35 mph"],
        correctIndex: 3,
        explanation:
          "Thirty-five. Once you are in a residential, business or urban district, that is Idaho's maximum unless a sign says otherwise.",
        context:
          "Idaho Code 49-654 sets the same 35 mph and lets local authorities post something different. Where nothing is posted, the statutory figure governs, and the basic rule can still require less.",
        trap: "Three separate Idaho drivers describe guessing 25 because that is what every town they had driven through elsewhere used. It is the single most repeated wrong answer in Idaho.",
        excerptKey: "max-speed-urban",
        sourceLabel: "Idaho Driver's Handbook - Speed Limits",
        sourceUrl: hb(68),
        commonlyMissed: true,
      },
      {
        id: "id_s5_03",
        topic: "rules",
        question:
          "You are pulling out of a parallel parking space into traffic. How long must you signal first under Idaho Code?",
        choices: [
          "Not less than five seconds",
          "Not less than 100 feet of travel",
          "One flash of the indicator is enough",
          "No signal is required until you are moving",
        ],
        correctIndex: 0,
        explanation:
          "Idaho Code 49-808 puts pulling out of a parked position in the same category as a controlled-access highway: the signal runs continuously for not less than five seconds.",
        context:
          "Everywhere else the measure is distance, not time: not less than the last 100 feet travelled before turning. The handbook's version pairs 100 feet in business or residential areas with five seconds on freeways or highways, and its five-step routine for pulling out from the curb asks for the required five seconds or 100 feet.",
        trap: "Idaho drivers describe the five-second rule as the one nobody knows about. Pulling out from a parked position is the half of it that almost nobody knows.",
        excerptKey: "code-signal-five-seconds",
        sourceLabel: "Idaho Code 49-808 - Turning Movements and Required Signals",
        sourceUrl: `${CODE}/Title49/T49CH8/SECT49-808/`,
        commonlyMissed: true,
      },
      {
        id: "id_s5_04",
        topic: "safety",
        question:
          "You are stopped at a red light in Idaho and pick up your phone to check a message. Is that legal?",
        choices: [
          "Yes, because the vehicle is not moving",
          "No - Idaho Code prohibits using a mobile electronic device while operating a vehicle, and a stop for a signal still counts as operating",
          "Yes, as long as you do not type anything",
          "Yes, because only texting is prohibited in Idaho",
        ],
        correctIndex: 1,
        explanation:
          "Idaho Code 49-1401A prohibits operating a motor vehicle while using a mobile electronic device, and it defines operating to include being temporarily stationary because of traffic or a traffic control device.",
        context:
          "The exceptions are narrow: emergencies, hands-free navigation you are not typing into, one-touch or voice selection of a number, and fully hands-free or voice-operated use. A vehicle that is lawfully parked, or pulled off the road where it is legal to stop, is outside the definition.",
        trap: "The handbook's Cell Phones section on page 92 still describes only the older texting ban, which is why so many Idaho drivers think reading a message is fine. The statute has been broader since 1 July 2020, and it is a primary offense with a $75 fine for a first violation.",
        excerptKey: "code-distracted-driving",
        sourceLabel: "Idaho Code 49-1401A - Distracted Driving",
        sourceUrl: `${CODE}/Title49/T49CH14/SECT49-1401A/`,
        commonlyMissed: true,
      },
      {
        id: "id_s5_05",
        topic: "licensing",
        question:
          "A 15-year-old in Idaho has finished driver training. When do they sit the knowledge test?",
        choices: [
          "Before starting driver training, to get the driver training permit",
          "After driver training and the supervised instruction period, before the license is issued",
          "At 14 and a half, at the same time as the driver training permit",
          "Only at 17, when the Class D instruction permit becomes available",
        ],
        correctIndex: 1,
        explanation:
          "Under 17, the knowledge test comes at the end. You finish driver training, complete the GDL supervised instruction period, and then take and pass a knowledge and skills test before a license is issued.",
        context:
          "The handbook sets the floor separately: applicants must be 15 or older to take the knowledge and skills tests at all. The driver training permit at 14 and a half needs no knowledge test, because it is only valid with an instructor in the car.",
        trap: "Idaho parents describe passing the written test and then discovering the teenager still cannot practice with them. Which permit the test unlocks depends entirely on age.",
        excerptKey: "gdl-final-tests",
        sourceLabel: "Idaho Driver's Handbook - Graduated Driver's License (GDL) Program",
        sourceUrl: hb(19),
        commonlyMissed: true,
      },
      {
        id: "id_s5_06",
        topic: "signs",
        question:
          "Two fluorescent yellow-green signs sit a block apart. One shows a single walking figure; the other shows two figures, one carrying something. What is the difference?",
        choices: [
          "One is a pedestrian crossing, the other a school crossing",
          "One is for adults, the other for cyclists",
          "The single figure marks a crosswalk, the pair marks a bus stop",
          "There is no difference; both mean pedestrians ahead",
        ],
        correctIndex: 0,
        explanation:
          "A single figure is the Pedestrian Crossing sign. Two figures is the School Crossing sign, which tells you to watch for children, reduce speed and obey crossing guard signals.",
        context:
          "Both may be printed yellow or fluorescent yellow-green, so the color does not separate them. The Pedestrian Crossing sign may also carry flashing lights indicating that someone is crossing.",
        trap: "An Idaho driver who took the test recently described the difference in exactly these terms and listed it among the obscure items that caught them. Counting the figures is the whole answer.",
        excerptKey: "pedestrian-crossing-sign",
        sourceLabel: "Idaho Driver's Handbook - Warning Signs, Pedestrian Crossing",
        sourceUrl: hb(51),
        commonlyMissed: true,
      },
      {
        id: "id_s5_07",
        topic: "sharing",
        question:
          "You are travelling the opposite way from a school bus on a four-lane road with two lanes in each direction. The bus stops and its red lights flash. What must you do?",
        choices: [
          "Stop, because the rule applies from either direction",
          "Slow to 20 mph and pass with care",
          "Stop only if you see children",
          "You are not required to stop",
        ],
        correctIndex: 3,
        explanation:
          "On a road with four or more lanes carrying two lanes in each direction, oncoming traffic is not required to stop. That is the only exception the handbook gives.",
        context:
          "Idaho Code 49-1422 words it slightly differently, freeing oncoming traffic on a highway of more than three lanes with no condition about two lanes each way. Where the road has four lanes split two and two, both readings agree.",
        trap: "The exception is narrow and directional. Travelling the SAME way as the bus you always stop, and on any two-lane or three-lane road you stop from either direction. A first offense is a $300 fine.",
        excerptKey: "school-bus-exception",
        sourceLabel: "Idaho Driver's Handbook - Stopping",
        sourceUrl: hb(70),
        commonlyMissed: true,
      },
      {
        id: "id_s5_08",
        topic: "rightOfWay",
        question:
          "You have edged into the intersection waiting to turn left and the light goes red. What does Idaho law say about the position you are in?",
        choices: [
          "It is standard practice and legal, so complete the turn on the red",
          "It is legal only if you entered on green",
          "You should not have entered without room to clear the intersection, and you must not enter on a red",
          "It is legal as long as no cross traffic has started moving",
        ],
        correctIndex: 2,
        explanation:
          "Idaho tells you not to enter an intersection unless there is sufficient space on the other side for your vehicle to pass completely through, regardless of the signal. Idaho Code 49-802 requires a driver facing a steady red to stop before entering and to remain stopped, and behind the limit line while stopped.",
        context:
          "The turning rules do allow a left on red in one narrow case, from a one-way street onto a one-way street, after a full stop and yielding. Nothing in Idaho law permits sitting in the middle of an intersection through the red and then completing a turn.",
        trap: "Idaho drivers argue about this one in public. An insurance agent in Idaho Falls wrote in 2026 that they had lost the argument repeatedly to drivers who said it was how Idaho does it, and the statute is on the agent's side.",
        excerptKey: "do-not-block-intersection",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals, Green Circular Light",
        sourceUrl: hb(56),
        commonlyMissed: true,
      },
      {
        id: "id_s5_09",
        topic: "impairment",
        question:
          "You fail an evidentiary breath test in Idaho for the first time. What does the administrative suspension look like?",
        choices: [
          "30 days, with work privileges throughout",
          "60 days, all of it absolute",
          "90 days, with absolutely no driving privileges for the first 30",
          "One year, with no exceptions",
        ],
        correctIndex: 2,
        explanation:
          "Ninety days, and the first 30 of those are absolute - no driving privileges of any kind. An ignition interlock is then required on any vehicle you drive for a year after the suspension ends.",
        context:
          "This is a civil penalty imposed by ITD and it is separate from whatever the criminal court does. You have seven days from the date on the notice to request an administrative hearing, and you still have to appear in court on the DUI charge.",
        trap: "One year is the penalty for REFUSING the test, not for failing it. A second failure within five years is also a year, absolute.",
        excerptKey: "als-first-failure",
        sourceLabel: "Idaho Driver's Handbook - Administrative License Suspension",
        sourceUrl: hb(126),
        commonlyMissed: true,
      },
      {
        id: "id_s5_10",
        topic: "signals",
        question:
          "A green left-turn arrow shows at the same time as a steady red ball. What may you do?",
        choices: [
          "Nothing, since a red ball overrides any arrow",
          "Turn left or go straight, since the arrow makes the whole signal permissive",
          "Turn left after stopping, as at a red light",
          "Proceed only in the direction of the green arrow",
        ],
        correctIndex: 3,
        explanation:
          "When a green arrow shows along with a steady red, you may proceed only in the direction of the arrow. The red still governs every other movement.",
        context:
          "The green arrow is a protected movement: oncoming traffic is held. Idaho Code 49-802 still asks a driver facing a green left-turn arrow to yield to traffic and pedestrians lawfully already inside the intersection or the adjacent crosswalk.",
        trap: "Reading the green arrow as a general green is what puts a car straight into cross traffic. The arrow permits one movement, not all of them.",
        excerptKey: "stop-green-arrow",
        sourceLabel: "Idaho Driver's Handbook - Stopping",
        sourceUrl: hb(69),
      },
      {
        id: "id_s5_11",
        topic: "rules",
        question:
          "You are passing a slower car on a two-lane Idaho highway and an oncoming vehicle appears. How much clearance must you have when you finish the pass?",
        choices: [
          "The pass must be complete before you come within 200 feet of oncoming traffic",
          "100 feet is enough",
          "Any distance, as long as you are back in your lane",
          "300 feet",
        ],
        correctIndex: 0,
        explanation:
          "Two hundred feet. The handbook tells you to complete a pass before coming within 200 feet of oncoming traffic, and before you reach any no-passing zone.",
        context:
          "The other half of finishing a pass is visual: signal and wait until you can see the vehicle you passed in your rear-view mirror before you move back over. If you start a pass and decide you cannot make it, pull back and wait for another opening.",
        trap: "One hundred feet is Idaho's other passing number, the distance from an intersection or railroad crossing where passing is banned. An Idaho driver on a public forum named this exact distance as the one they missed.",
        excerptKey: "passing-200-feet",
        sourceLabel: "Idaho Driver's Handbook - Passing",
        sourceUrl: hb(78),
        commonlyMissed: true,
      },
      {
        id: "id_s5_12",
        topic: "parking",
        question: "How far from a stop sign, yield sign or traffic signal does Idaho prohibit parking?",
        choices: ["15 feet", "30 feet", "20 feet", "50 feet"],
        correctIndex: 1,
        explanation:
          "Thirty feet. It is the largest of the three short distances in Idaho's no-parking list, and it exists so that a parked car does not hide the sign or the signal.",
        context:
          "The full set: 15 feet from a fire hydrant, 20 feet from a crosswalk, 20 feet from a fire station driveway, 30 feet from a stop sign, yield sign or traffic signal, and 50 feet from railroad tracks.",
        trap: "Twenty feet appears twice in the list and 15 once, so guessing from memory of a nearby entry is easy. The sign and signal distance is its own number.",
        excerptKey: "no-parking-distances",
        sourceLabel: "Idaho Driver's Handbook - No-Parking Zones",
        sourceUrl: hb(81),
        commonlyMissed: true,
      },
      {
        id: "id_s5_13",
        topic: "emergencies",
        question:
          "You scrape a parked car in a Boise lot and cannot find the owner. What does Idaho require?",
        choices: [
          "Nothing, if the damage is only cosmetic",
          "Leave a note with your name and phone number, after a reasonable effort to find the owner",
          "Report it to police within 24 hours regardless of the damage",
          "Wait 30 minutes and then leave",
        ],
        correctIndex: 1,
        explanation:
          "You must make a reasonable effort to find the owner, and if you cannot, leave a note about the crash with your name and phone number.",
        context:
          "Police notification kicks in separately, at the same $1,500 threshold as any other crash, or if anyone was injured. Leaving the scene of a crash that caused property damage is one of Idaho's listed grounds for suspension.",
        trap: "The note is not optional and it is not a courtesy. Driving off without one is leaving the scene of a crash, which is a suspendable offense in its own right.",
        excerptKey: "hit-unattended-vehicle",
        sourceLabel: "Idaho Driver's Handbook - If You Hit an Unattended Vehicle",
        sourceUrl: hb(119),
      },
      {
        id: "id_s5_14",
        topic: "safety",
        question:
          "Visibility on I-84 has dropped in heavy dust and you are crawling along. Should you switch on your hazard lights?",
        choices: [
          "No - other drivers may think you have stopped, so avoid using flashers while moving",
          "Yes, hazard lights are required below 500 feet visibility",
          "Yes, but only above 45 mph",
          "Yes, since they are brighter than tail lights",
        ],
        correctIndex: 0,
        explanation:
          "The handbook says to avoid using your emergency flashers while moving, because other drivers may think you have stopped. In poor visibility that misreading is what causes the rear-end collision.",
        context:
          "What Idaho does require is headlights, on low beam, once daytime visibility drops to 500 feet or less. If conditions get too bad, pull off the road and stop rather than creeping along in the lane.",
        trap: "Hazard lights feel like the safest thing to do and are the specific thing named as a mistake. They belong on a stopped or disabled vehicle.",
        excerptKey: "flashers-while-moving",
        sourceLabel: "Idaho Driver's Handbook - Fog, Smoke, Dust, or Rain",
        sourceUrl: hb(111),
        commonlyMissed: true,
      },
      {
        id: "id_s5_15",
        topic: "sharing",
        question:
          "A cyclist ahead of you stops at a red light, then rides through it while the light is still red. Is that legal in Idaho?",
        choices: [
          "No, cyclists obey signals exactly as drivers do",
          "Only in cities that have adopted the rule locally",
          "Only if the signal has failed to detect them",
          "Yes, after stopping and yielding to traffic already in the intersection",
        ],
        correctIndex: 3,
        explanation:
          "Idaho lets a bicyclist proceed with caution through a red light after stopping and yielding to vehicles already in the intersection or close enough to be a hazard. Turning right on red, they need not come to a complete stop at all.",
        context:
          "It is the second half of the rule known nationally as the Idaho stop. At a stop sign a cyclist may slow, yield and roll through; at a red light they must stop first, then yield, then may proceed.",
        trap: "Stop signs and red lights are treated differently even for cyclists. The red light still requires the stop, and it is one statewide rule rather than a local option.",
        excerptKey: "bicycle-red-light",
        sourceLabel: "Idaho Driver's Handbook - Bicyclists",
        sourceUrl: hb(98),
        commonlyMissed: true,
      },
      {
        id: "id_s5_16",
        topic: "licensing",
        question:
          "A 16-year-old Idaho driver is convicted of a second moving violation. What happens to the license?",
        choices: [
          "A warning letter",
          "Points only, until the total reaches 12",
          "A 30-day suspension",
          "A 60-day suspension",
        ],
        correctIndex: 2,
        explanation:
          "Under Idaho's GDL penalties, a driver under 17 gets a warning letter for a first moving violation conviction, a 30-day suspension for a second and a 60-day suspension for a third or later one.",
        context:
          "The GDL suspensions are absolute: no driving privileges of any kind, no work or school exception. They come on top of any permit cancellation during the supervised instruction period and anything a court or the department adds separately.",
        trap: "These penalties run in parallel with the ordinary points system, not instead of it. A young driver can collect both at once for the same conviction.",
        excerptKey: "gdl-penalties-suspensions",
        sourceLabel: "Idaho Driver's Handbook - Graduated Drivers License (GDL) Penalties",
        sourceUrl: hb(125),
        commonlyMissed: true,
      },
      {
        id: "id_s5_17",
        topic: "speed",
        question:
          "Traffic on a 55 mph Idaho highway is flowing at 55 and you are doing 40 in the only lane. Are you breaking the law?",
        choices: [
          "No, since you are under the posted limit",
          "No, unless a minimum speed is posted",
          "Yes, if you are impeding the safe flow of traffic you are violating the basic rule",
          "Yes, but only if a police officer is behind you",
        ],
        correctIndex: 2,
        explanation:
          "Idaho's basic rule cuts both ways. Driving too slowly for existing conditions and impeding the safe flow of traffic violates it, even though you are under the posted limit.",
        context:
          "A separate rule makes it illegal to drive so slowly that you disrupt the normal flow of traffic, and Idaho adds that on a slower two-lane road, any vehicle delaying three or more others in a rural area must turn off the road wherever it is safe to let them past.",
        trap: "Being under the limit feels like a complete defense and is not one. Idaho drivers in Boise complain about exactly this pattern, and the handbook backs them up.",
        excerptKey: "basic-rule-too-slow",
        sourceLabel: "Idaho Driver's Handbook - Speed Limits",
        sourceUrl: hb(68),
        commonlyMissed: true,
      },
      {
        id: "id_s5_18",
        topic: "rules",
        question:
          "The car ahead is doing 40 in a 55 and there is a wide gravel shoulder. May you use it to pass on the right?",
        choices: [
          "Yes, if you stay off the traffic lane",
          "Yes, if the driver ahead does not signal a turn",
          "Yes, but only above 45 mph",
          "No - passing on the right may never be done by driving off the roadway",
        ],
        correctIndex: 3,
        explanation:
          "The handbook attaches an absolute condition to passing on the right: the movement shall not be made by driving off the roadway. A shoulder is not a lane.",
        context:
          "The only two situations that allow a right-side pass are a vehicle on a two-lane, two-way road signaling a left turn, and a one-way or multi-lane street with two or more lanes going your direction.",
        trap: "This wrong answer is printed almost word for word in ITD's own sample test and in the handbook's practice questions, which is a strong hint about how often it is chosen.",
        excerptKey: "passing-on-right",
        sourceLabel: "Idaho Driver's Handbook - Passing, Passing on the Right",
        sourceUrl: hb(77),
        commonlyMissed: true,
      },
      {
        id: "id_s5_19",
        topic: "signs",
        question:
          "You are inside a marked work zone. Which of these is TRUE about the signs around you?",
        choices: [
          "Warning signs are orange and black, while regulatory signs stay black and white or red and white",
          "Every sign inside a work zone is orange",
          "Work zone signs are advisory until workers are present",
          "The speed limit sign turns orange to show it is temporary",
        ],
        correctIndex: 0,
        explanation:
          "The colors split by function even inside the zone. Warning signs go orange and black; regulatory signs, including the speed limit, stay black and white or red and white.",
        context:
          "That distinction matters because the regulatory ones carry the enhanced penalties. Violating a work zone speed limit can bring an enhanced fixed penalty, and fines for speeding are increased in work zones where the signage indicates.",
        trap: "The zone is not advisory when nobody is visible. Workers may be out of sight behind equipment, and the signs bind regardless.",
        excerptKey: "work-zone-sign-colors",
        sourceLabel: "Idaho Driver's Handbook - Work Zone Signs",
        sourceUrl: hb(46),
      },
      {
        id: "id_s5_20",
        topic: "impairment",
        question:
          "A 19-year-old in Idaho blows .03 on an evidentiary test. What does the law say?",
        choices: [
          "It is below every threshold, so no offense",
          "It is unlawful, because the limit for a driver under 21 is at least .02 but less than .08",
          "It is only an offense in a commercial vehicle",
          "It is a warning for a first occasion",
        ],
        correctIndex: 1,
        explanation:
          "Idaho Code 18-8004 makes it unlawful for anyone under 21 to drive with a concentration of at least .02 but less than .08. A 19-year-old at .03 is inside that band.",
        context:
          "Three thresholds run at once in Idaho: .02 for drivers under 21, .04 in a commercial vehicle, and .08 for drivers 21 and over. The handbook prints all three in one sentence.",
        trap: "Well under .08 sounds safe and is not. Roughly one drink can put someone under 21 over the line.",
        excerptKey: "code-dui-under-21",
        sourceLabel: "Idaho Code 18-8004 - Persons Under the Influence",
        sourceUrl: `${CODE}/Title18/T18CH80/SECT18-8004/`,
        commonlyMissed: true,
      },
      {
        id: "id_s5_21",
        topic: "safety",
        question:
          "You must overtake a snowplow on an Idaho highway. Which side is the wrong side to pass on?",
        choices: [
          "The left, because that is where oncoming traffic is",
          "The side the plow is spraying snow, because the force can put you out of control",
          "Either side is equally safe once you can see ahead",
          "The right, because plows always run in the left lane",
        ],
        correctIndex: 1,
        explanation:
          "Never pass on the side where the plow is throwing snow. The handbook says the force of it can knock your car out of control.",
        context:
          "Before that comes the rule about whether to pass at all: do not pass a snowplow unless it is absolutely necessary, and only when you can clearly see the road ahead. Afterwards, do not cut back in front, because the blades are wide and often hidden under snow.",
        trap: "Idaho drivers pass the shortened version around - do not pass snowplows - and the handbook's actual rule has more in it than that. The spray side is the specific hazard.",
        excerptKey: "snowplow-passing",
        sourceLabel: "Idaho Driver's Handbook - Snow Removal Equipment",
        sourceUrl: hb(110),
        commonlyMissed: true,
      },
      {
        id: "id_s5_22",
        topic: "rightOfWay",
        question:
          "Someone is crossing mid-block on an Idaho street where there is no painted crosswalk. What does the handbook tell you to do?",
        choices: [
          "Stop and let them finish crossing, even though you technically have the right of way",
          "Proceed, because a pedestrian outside a crosswalk must yield",
          "Sound your horn and continue",
          "Slow to 20 mph and pass behind them",
        ],
        correctIndex: 0,
        explanation:
          "The handbook gives this exact scenario and the answer is to stop and let them finish crossing, even if you technically have the right of way.",
        context:
          "The right of way rule and the duty are two different things. Pedestrians must yield when crossing where there is no crosswalk or intersection, and Idaho Code 49-615 still requires every driver to exercise due care to avoid colliding with a pedestrian and to sound the horn when necessary.",
        trap: "Being in the right does not license you to drive into somebody. The handbook is deliberately explicit that the technical right of way does not settle it.",
        excerptKey: "pedestrian-no-crosswalk",
        sourceLabel: "Idaho Driver's Handbook - Pedestrians",
        sourceUrl: hb(96),
        commonlyMissed: true,
      },
      {
        id: "id_s5_23",
        topic: "emergencies",
        question:
          "You are first on the scene of a serious crash on a rural Idaho road. Someone is trapped and there is no fire. What does the handbook advise?",
        choices: [
          "Pull them clear immediately in case the vehicle catches fire",
          "Move them only far enough to lie flat",
          "Do not attempt to help at all, in case you are sued",
          "Do not move them unless you have medical training or there is immediate danger",
        ],
        correctIndex: 3,
        explanation:
          "Give what help you can, call for police and medical help, but do not try to move an injured person from a wrecked vehicle unless you have the necessary medical training or there is an immediate danger such as fire.",
        context:
          "Idaho's Good Samaritan law protects you from civil liability if you act in good faith, so the fear of being sued is not the reason to hold back. The reason is that moving someone with a spinal injury can do more harm than the crash did.",
        trap: "Fear of liability is the wrong reason to stand back and the handbook removes it. The right reason is medical.",
        excerptKey: "good-samaritan",
        sourceLabel: "Idaho Driver's Handbook - Crashes & the Law",
        sourceUrl: hb(121),
      },
      {
        id: "id_s5_24",
        topic: "licensing",
        question:
          "You have been practicing on a third-party practice test app. What does the Idaho handbook say about that?",
        choices: [
          "It is the recommended way to prepare",
          "Any practice test is fine as long as it is current",
          "Web-based practice tests are not an accurate representation, except the sample questions ITD itself provides",
          "Practice tests are prohibited before the exam",
        ],
        correctIndex: 2,
        explanation:
          "The handbook says web-based driver practice tests are not an accurate representation of Idaho knowledge tests, with the exception of the sample test questions ITD provides through itd.idaho.gov.",
        context:
          "ITD publishes a 60-question sample Class D test and an answer sheet on apps.itd.idaho.gov. The real exam is 40 questions drawn from a larger bank, so the questions differ every time even for the same candidate.",
        trap: "Passing a practice test is not evidence that you will pass this one. The handbook itself is the source the questions come from, and there is no substitute for reading it.",
        excerptKey: "practice-tests-warning",
        sourceLabel: "Idaho Driver's Handbook - Knowledge Test: Class D",
        sourceUrl: hb(32),
      },
      {
        id: "id_s5_25",
        topic: "signals",
        question:
          "At a HAWK pedestrian beacon the two red lights are showing SOLID rather than flashing. What may you do?",
        choices: [
          "Proceed once the crosswalk is clear",
          "Slow down and pass with caution",
          "Stop completely at the stop line and wait",
          "Treat it as a four-way stop",
        ],
        correctIndex: 2,
        explanation:
          "Two solid red lights mean stop at the stop line and stay there. Vehicles must stop completely when the signal lights are steady red.",
        context:
          "The alternating flashing red that follows is the phase where you may go: stop, yield to anyone still in the crosswalk, then proceed once it is clear. Traffic resumes normally when the beacon goes dark again.",
        trap: "The solid and flashing red phases look similar at a glance and mean different things. The beacon also faces only the main road, so a side street controlled by a stop sign stays controlled by that stop sign.",
        excerptKey: "hawk-flashing-red",
        sourceLabel: "Idaho Driver's Handbook - Pedestrian Crossings",
        sourceUrl: hb(57),
      },
      {
        id: "id_s5_26",
        topic: "sharing",
        question:
          "A motorcycle ahead of you has its right indicator flashing as it approaches a side street. What should you assume?",
        choices: [
          "The rider is turning, so you may pull out ahead of them",
          "The bike is about to slow sharply",
          "The rider has changed their mind and will go straight",
          "Nothing - the signal may not have cancelled, so wait until the bike actually turns",
        ],
        correctIndex: 3,
        explanation:
          "Most motorcycles do not have self-cancelling signals, and riders sometimes forget to switch them off. Before you turn in front of a motorcycle with a signal flashing, be sure it is actually turning.",
        context:
          "It sits among the reasons Idaho asks drivers to look twice at motorcycles: they hide in blind spots, their speed and distance are hard to judge, and cars turning left in front of an oncoming bike cause serious crashes.",
        trap: "Trusting the indicator is the reasonable-looking assumption that produces the collision. The rule is to wait for the bike to commit.",
        excerptKey: "motorcycle-signals",
        sourceLabel: "Idaho Driver's Handbook - Motorcycles, Turn Signals",
        sourceUrl: hb(103),
        commonlyMissed: true,
      },
      {
        id: "id_s5_27",
        topic: "rules",
        question:
          "May you drive along in the shared center turn lane for a block to reach your turn?",
        choices: [
          "No - you may not travel in a shared turn lane",
          "Yes, for up to 200 feet",
          "Yes, if you signal throughout",
          "Yes, outside business hours",
        ],
        correctIndex: 0,
        explanation:
          "You may not travel in the shared turn lanes, and you may not interfere with another vehicle preparing to turn from one. The lane exists to hold turning vehicles, not to move them.",
        context:
          "Idaho Code 49-644 puts the other half of the rule in place: where a center turn lane exists, a left turn may not be made from any other lane, and the lane may only be used when preparing for or making a left turn or a lawful U-turn.",
        trap: "Nobody is coming the other way until somebody is, and they will be doing the same thing you are. A head-on in a turn lane is the whole reason for the prohibition.",
        excerptKey: "shared-center-lane-use",
        sourceLabel: "Idaho Driver's Handbook - Pavement Markings, Shared Lanes",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "id_s5_28",
        topic: "speed",
        question:
          "You are passing a slow truck on a 55 mph two-lane road that runs through a marked construction zone. May you use the 15 mph passing allowance?",
        choices: [
          "Yes, the allowance applies anywhere above 55 mph",
          "No - the allowance does not apply in construction zones",
          "Yes, if no workers are present",
          "Yes, but only up to 10 mph over",
        ],
        correctIndex: 1,
        explanation:
          "The allowance is written with an explicit exclusion: it does not apply in construction zones. Inside one, the posted limit is the limit.",
        context:
          "Elsewhere the exception lets a passenger car, motorcycle or pickup not towing anything exceed the posted limit by up to 15 mph while passing a slower vehicle, where the posted limit is 55 or greater, and you drop back as soon as practicable.",
        trap: "Work-zone speeding carries an enhanced fixed penalty, so this is the worst possible place to assume the allowance still runs.",
        excerptKey: "passing-speed-exception",
        sourceLabel: "Idaho Driver's Handbook - Passing, Passing Speed Limit Exception",
        sourceUrl: hb(77),
        commonlyMissed: true,
      },
      {
        id: "id_s5_29",
        topic: "parking",
        question:
          "Your friend leaves the car in the traffic lane beside a row of parked cars while running into a shop. What is that?",
        choices: [
          "Legal for under five minutes",
          "Double parking, which Idaho's no-parking list forbids",
          "Legal if the hazard lights are on",
          "Legal outside marked business districts",
        ],
        correctIndex: 1,
        explanation:
          "Parking on the street side of any parked vehicle is double parking, and Idaho's no-parking list forbids it outright.",
        context:
          "The list also covers bike lanes, sidewalks, intersections, within 50 feet of railroad tracks, on bridges or overpasses, in front of a driveway, on any controlled-access highway, and anywhere signs or a red-painted curb prohibit it.",
        trap: "Hazard lights and a short stop do not turn a prohibited parking place into a legal one. Nothing in Idaho's list has a time limit attached.",
        excerptKey: "no-parking-list",
        sourceLabel: "Idaho Driver's Handbook - No-Parking Zones",
        sourceUrl: hb(81),
      },
      {
        id: "id_s5_30",
        topic: "safety",
        question:
          "You are following at three seconds and it starts to snow. What does the handbook want you to do?",
        choices: [
          "Increase the following distance",
          "Keep three seconds, since that is already the rule",
          "Reduce to two seconds so you can see the car ahead more clearly",
          "Switch on your hazard lights and hold your position",
        ],
        correctIndex: 0,
        explanation:
          "Three seconds is the minimum for good conditions. At high speeds or in bad weather the handbook tells you to increase it, and in bad weather to increase it several times over.",
        context:
          "Idaho gives specific increases elsewhere: more than three seconds behind a motorcycle, two car lengths per 10 mph behind a snowplow, and a longer gap behind any large vehicle so you can still see the road ahead.",
        trap: "The three-second rule is a floor, not a target. Idaho Code 49-638 states the underlying duty as following no more closely than is reasonable and prudent for the speed, traffic and condition of the road.",
        excerptKey: "three-second-rule",
        sourceLabel: "Idaho Driver's Handbook - Following Distances",
        sourceUrl: hb(79),
      },
      {
        id: "id_s5_31",
        topic: "signs",
        question:
          "You are approaching the yellow 3-WAY INTERSECTION warning sign on the stem of a T. What does the handbook say it requires?",
        choices: [
          "Slow down; there is no duty attached to a warning sign",
          "Yield only to traffic coming from your right",
          "Sound your horn before entering",
          "You must stop and yield to drivers approaching from the other two directions",
        ],
        correctIndex: 3,
        explanation:
          "Idaho's gloss on this warning sign is unusually strong: you are approaching a 3-way T, you will have to turn right or left, and you must stop and yield to drivers approaching from the other two directions.",
        context:
          "The yielding chapter says the same thing without the sign: at an unmarked or uncontrolled three-way T where you have to turn, stop and yield to any drivers approaching from the other two directions.",
        trap: "Most yellow diamonds only warn. This one carries a duty in the handbook's own words, which is exactly the kind of detail an 85 percent pass mark exists to find.",
        excerptKey: "three-way-sign",
        sourceLabel: "Idaho Driver's Handbook - Warning Signs, 3-Way Intersection",
        sourceUrl: hb(49),
        commonlyMissed: true,
      },
      {
        id: "id_s5_32",
        topic: "licensing",
        question:
          "Your Idaho license carries a lens restriction and you drive without your glasses. What can happen?",
        choices: [
          "Nothing, since the restriction is only advisory",
          "A fine, but no effect on the license",
          "You can be cited and have your driving privileges suspended",
          "A warning letter for the first occasion",
        ],
        correctIndex: 2,
        explanation:
          "If a lens restriction is on your license you must always wear your glasses or contacts while driving, or you may be cited and have your driving privileges suspended.",
        context:
          "Idaho lists violation of a restriction, naming daylight only and lenses, among its reasons for suspension. If eye surgery has improved your vision, a physician's note can get the restriction removed.",
        trap: "The daylight-only restriction on a 15-year-old's license is enforced the same way, and it is the other half of the same line in the suspension list.",
        excerptKey: "lens-restriction",
        sourceLabel: "Idaho Driver's Handbook - Medical/Visual Screening",
        sourceUrl: hb(32),
      },
      {
        id: "id_s5_33",
        topic: "emergencies",
        question:
          "Water is running across a dip in the road ahead of you after a thunderstorm and you cannot tell how deep it is. What does the handbook say?",
        choices: [
          "Cross slowly in low gear",
          "Cross quickly to build a bow wave",
          "Do not drive through it - turn around and find another route",
          "Cross only if another vehicle has just made it",
        ],
        correctIndex: 2,
        explanation:
          "Do not drive through flooded areas. Turn around and find another route, because a road under water may no longer be intact.",
        context:
          "Idaho averages about seven flash floods a year, usually during or right after a severe thunderstorm. Six inches of fast-moving water can knock a person off their feet, and two feet can wash a vehicle away.",
        trap: "Watching another car get through proves nothing about the roadbed under the water or about how fast the level is rising.",
        excerptKey: "flash-flood-turn-around",
        sourceLabel: "Idaho Driver's Handbook - Flash Floods",
        sourceUrl: hb(112),
      },
      {
        id: "id_s5_34",
        topic: "impairment",
        question:
          "Your license was suspended after an administrative license suspension. What happens when the suspension ends?",
        choices: [
          "Nothing further; the license is simply reinstated",
          "You retake the knowledge test",
          "You must complete a defensive driving course",
          "An ignition interlock device is mandatory on any vehicle you drive",
        ],
        correctIndex: 3,
        explanation:
          "The ignition interlock is mandatory on all administrative license suspensions, and it starts after the suspension ends. For a first failure it runs a year.",
        context:
          "The device requires a breath sample before the engine will start and blocks it above a preset level. The driver pays for installation, maintenance and monthly fees, and reinstatement costs a further $25 to $285 depending on the suspension.",
        trap: "Serving the suspension is not the end of it. Serious offenses also require proof of financial responsibility, an SR-22 certificate, for three years.",
        excerptKey: "ignition-interlock",
        sourceLabel: "Idaho Driver's Handbook - Ignition Interlock Device",
        sourceUrl: hb(127),
      },
      {
        id: "id_s5_35",
        topic: "sharing",
        question:
          "A rancher is moving a herd of sheep along an Idaho highway with two people helping. What does the law say?",
        choices: [
          "Livestock under controlled movement over a highway have the right of way",
          "The herd must clear the road within five minutes",
          "You may proceed at 10 mph through the herd",
          "The right of way belongs to the vehicle on the paved surface",
        ],
        correctIndex: 0,
        explanation:
          "Horses, cattle, sheep, goats and other livestock under controlled movement over a highway or road have the right of way in Idaho. You are asked to be careful and cooperate with the workers in charge.",
        context:
          "The same paragraph covers the other case, animals grazing unattended on open range, where they also have the right of way and where an owner is not liable for damage to your vehicle if you hit one.",
        trap: "Controlled movement and open range are two different situations with the same answer, which is why the question can be set either way and still comes out the same.",
        excerptKey: "livestock-right-of-way",
        sourceLabel: "Idaho Driver's Handbook - Open Range",
        sourceUrl: hb(108),
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix the real Idaho test uses, with no hints beyond what the exam gives you. Six wrong is the limit on the real thing, so treat 25 out of 30 as your line here.",
    questions: [
      {
        id: "id_s6_01",
        topic: "signs",
        question: "What does an eight-sided red sign always mean?",
        choices: [
          "Stop",
          "Yield",
          "Do not enter",
          "Road closed",
        ],
        correctIndex: 0,
        explanation:
          "The octagon is reserved for STOP. Idaho tells you to stop at a marked stop line, or before the crosswalk if there is no line, or at the point nearest the intersecting road where you can see traffic.",
        context:
          "Idaho asks you to learn signs by shape and color as well as by their message, because shape stays readable in snow, glare or a language you cannot read. Stop and Yield are the two red-and-white regulatory signs.",
        trap: "Yield is also red and white, but it is a downward-pointing triangle. Shape separates them, not color.",
        excerptKey: "stop-sign-where",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signs, Stop",
        sourceUrl: hb(44),
      },
      {
        id: "id_s6_02",
        topic: "signals",
        question: "A traffic signal is completely dark because of a power cut. What do you do?",
        choices: [
          "Proceed with caution without stopping",
          "Treat the intersection as a four-way stop",
          "Yield only to traffic on your right",
          "Wait for a police officer to direct traffic",
        ],
        correctIndex: 1,
        explanation:
          "Idaho gives one rule for a dead signal: treat the intersection as a four-way stop, and yield to other drivers in the same way you would there.",
        context:
          "That means every approach stops, order of arrival decides, and a simultaneous arrival is settled by the vehicle on the left yielding to the vehicle on the right.",
        trap: "A dark signal is not an uncontrolled intersection. The stop is required first, before any yielding rule applies.",
        excerptKey: "signal-out-four-way",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals",
        sourceUrl: hb(56),
      },
      {
        id: "id_s6_03",
        topic: "rules",
        question: "When is passing prohibited in Idaho?",
        choices: [
          "Only where a solid yellow line is painted",
          "Only where a DO NOT PASS sign is posted",
          "Only on hills",
          "On hills and curves where you cannot see oncoming traffic, and within 100 feet of an intersection or railroad crossing",
        ],
        correctIndex: 3,
        explanation:
          "The bans include hills, curves and other obstructions that hide oncoming vehicles, and 100 feet of an intersection, a railroad crossing, or a bridge or tunnel where the view is obstructed.",
        context:
          "The list continues: no passing a school bus stopped to load or unload, no passing a vehicle that has stopped at a crosswalk for a pedestrian, and no pass that takes you off the pavement.",
        trap: "The handbook is explicit that signs and markings tell you where passing is prohibited but only you can tell when it is safe. The absence of a line is not permission.",
        excerptKey: "passing-prohibited-100ft",
        sourceLabel: "Idaho Driver's Handbook - Passing",
        sourceUrl: hb(76),
      },
      {
        id: "id_s6_04",
        topic: "rightOfWay",
        question: "When must a pedestrian yield to a motor vehicle in Idaho?",
        choices: [
          "Whenever a vehicle is approaching at speed",
          "Only inside city limits",
          "When crossing where there is no crosswalk or intersection",
          "Never - pedestrians always have priority",
        ],
        correctIndex: 2,
        explanation:
          "A pedestrian must yield when crossing a street where there is no crosswalk or intersection, and when a traffic signal at an intersection or crosswalk directs them to.",
        context:
          "The duty runs the other way in three named cases: a pedestrian in a marked or unmarked crosswalk at an intersection, a vehicle coming out of an alley or driveway, and a blind pedestrian with a white cane or guide dog.",
        trap: "Even where a pedestrian should have yielded, the handbook still tells drivers to stop and let them finish crossing, and Idaho Code requires due care to avoid hitting anyone on foot.",
        excerptKey: "pedestrians-must-yield",
        sourceLabel: "Idaho Driver's Handbook - Pedestrians & Right-of-Way",
        sourceUrl: hb(75),
      },
      {
        id: "id_s6_05",
        topic: "speed",
        question: "What is the unposted maximum on an Idaho state highway?",
        choices: ["55 mph", "60 mph", "65 mph", "75 mph"],
        correctIndex: 2,
        explanation:
          "Sixty-five on state highways unless posted otherwise, with 70 allowed where it is posted after an engineering study.",
        context:
          "The full set: 35 mph in a residential, business or urban district; 65 on state highways; 75 on interstates, up to 80 where posted; and 55 in other locations, up to 70 where posted.",
        trap: "Seventy-five is the interstate figure. Which road you are on decides which number applies, and the two are easy to swap.",
        excerptKey: "max-speed-interstate",
        sourceLabel: "Idaho Driver's Handbook - Speed Limits",
        sourceUrl: hb(68),
      },
      {
        id: "id_s6_06",
        topic: "parking",
        question: "You are parking uphill against a curb. Which way do the front wheels go?",
        choices: [
          "Straight ahead",
          "Sharply toward the curb",
          "It does not matter with the parking brake set",
          "Sharply away from the curb",
        ],
        correctIndex: 3,
        explanation:
          "Uphill against a curb, the front wheels turn sharply away from the curb, so that if the car rolls back the wheel catches on the curb.",
        context:
          "Downhill is the reverse: wheels sharply toward and against the curb. Where there is no curb at all, turn the wheels sharply toward the edge of the road either way.",
        trap: "Toward the curb is the downhill answer. Reversing them puts the car into the road rather than against the edge.",
        excerptKey: "parking-on-hill",
        sourceLabel: "Idaho Driver's Handbook - Parking on a Hill or Incline",
        sourceUrl: hb(81),
      },
      {
        id: "id_s6_07",
        topic: "safety",
        question: "What causes most rear-end collisions, according to the Idaho handbook?",
        choices: [
          "Faulty brake lights",
          "Vehicles following too closely",
          "Poor road surface",
          "Sudden steering inputs",
        ],
        correctIndex: 1,
        explanation:
          "Following too closely. The handbook says so in the section on checking behind you, and asks you to look in the mirror several times a minute so you know who is tailgating you.",
        context:
          "Its answer to a tailgater is not to speed up but to slow down and let them pass, or change lanes when you can. Its answer to being the tailgater is the three-second rule.",
        trap: "Braking sharply to discourage a tailgater removes the only margin either of you has left.",
        excerptKey: "look-behind",
        sourceLabel: "Idaho Driver's Handbook - Defensive Driving, Look Behind",
        sourceUrl: hb(90),
      },
      {
        id: "id_s6_08",
        topic: "sharing",
        question:
          "You are about to open your car door on a Boise street where cyclists ride. What does the handbook suggest?",
        choices: [
          "Reach across with your opposite hand, which turns you to look behind",
          "Open the door a crack first and listen",
          "Check only the side mirror",
          "Open quickly so the door is out of the traffic lane sooner",
        ],
        correctIndex: 0,
        explanation:
          "Reach across your body for the handle with the opposite hand. That forces you to turn toward the mirror and look over your shoulder, which is what catches an approaching bicyclist.",
        context:
          "The handbook calls the crash it prevents the most common type involving bicyclists. The sharrow marking exists for the same reason: it positions riders far enough out to clear an opening door.",
        trap: "The side mirror alone does not cover a bicycle already close alongside. The point of the technique is that it makes the head turn automatic.",
        excerptKey: "dutch-reach",
        sourceLabel: "Idaho Driver's Handbook - Bicyclists, Parallel Parking",
        sourceUrl: hb(101),
      },
      {
        id: "id_s6_09",
        topic: "impairment",
        question: "What is the BAC threshold for driving a commercial vehicle in Idaho?",
        choices: [".04 or more", ".02 or more", ".08 or more", ".05 or more"],
        correctIndex: 0,
        explanation:
          "Point zero four in a commercial vehicle, half the .08 that applies to an adult in a private car.",
        context:
          "The three Idaho thresholds sit in one sentence in the handbook: .02 or more under 21, .04 or more in a commercial vehicle, .08 or more at 21 or over. Idaho Code 18-8004 sets the same figures.",
        trap: "The under-21 and commercial numbers are both lower than .08 and are different from each other. There are enhanced penalties for CDL drivers, up to lifetime loss of commercial privileges.",
        excerptKey: "dui-thresholds",
        sourceLabel: "Idaho Driver's Handbook - Driving Under The Influence",
        sourceUrl: hb(131),
      },
      {
        id: "id_s6_10",
        topic: "emergencies",
        question: "Your car has stalled and you cannot get it fully off the road. What should you do?",
        choices: [
          "Stay in the driver's seat with the engine running",
          "Stop where drivers behind have a clear view of you, turn on the flashers and lift the hood",
          "Stop just beyond the crest of a hill so you are out of the main lane",
          "Leave the car and walk for help immediately",
        ],
        correctIndex: 1,
        explanation:
          "Make sure you are seen. Stop where drivers behind you have a clear view, turn on the emergency flashers and lift the hood so it is obvious the vehicle has a problem.",
        context:
          "The handbook adds that if you have flares you put them 200 to 300 feet behind the car, and if you do not, you stand clear of the roadway and wave traffic around with something white if you have it.",
        trap: "Stopping just over a hill or around a curve is the specific position named as wrong. Following drivers get no warning at all.",
        excerptKey: "car-trouble-flares",
        sourceLabel: "Idaho Driver's Handbook - If You Have Car Trouble",
        sourceUrl: hb(117),
      },
      {
        id: "id_s6_11",
        topic: "licensing",
        question: "Where do you go in Idaho to take the knowledge test and be issued a permit?",
        choices: [
          "An ITD office in Boise",
          "Any Idaho Department of Motor Vehicles branch",
          "Any approved driving school",
          "A county sheriff's driver's license office",
        ],
        correctIndex: 3,
        explanation:
          "Idaho driver's licenses, ID cards and instruction permits are issued through the county sheriff's driver's license offices, not by a state DMV counter.",
        context:
          "ITD sets the rules and keeps the record, and the counties do the transaction. Skills tests are different again: they are administered by third-party contractors you contact yourself.",
        trap: "There is no walk-in state DMV branch for a license in Idaho. Finding the right county office is the first step, and the list is on ITD's site.",
        excerptKey: "county-offices-issue",
        sourceLabel: "Idaho Driver's Handbook - Where to Get an Idaho Credential",
        sourceUrl: hb(14),
      },
      {
        id: "id_s6_12",
        topic: "signs",
        question: "What does a single solid white line between two lanes going the same way mean?",
        choices: [
          "Lane changes are prohibited",
          "A bike lane begins",
          "Avoid changing lanes across it",
          "The lane is for buses only",
        ],
        correctIndex: 2,
        explanation:
          "A single solid white line is a discouragement rather than a ban: Idaho says to avoid changing lanes where one separates lanes moving in the same direction.",
        context:
          "Two solid white lines are the prohibition - lane changes are not allowed there. Dashed white lines mark ordinary lanes you may cross when it is safe, and you drive within them rather than straddling them.",
        trap: "Single and double white lines are not the same rule. Only the double one prohibits the lane change outright.",
        excerptKey: "solid-white-lane-line",
        sourceLabel: "Idaho Driver's Handbook - Pavement Markings",
        sourceUrl: hb(59),
      },
      {
        id: "id_s6_13",
        topic: "signals",
        question: "What is the one movement a steady red arrow always forbids?",
        choices: [
          "Going straight through the intersection",
          "Any movement at all until it changes",
          "Turning in the direction the arrow points",
          "Turning right after a stop",
        ],
        correctIndex: 2,
        explanation:
          "No turn is permitted in the direction of the arrow until a green or yellow indication allows movement. Other movements may be governed by other signals showing at the same time.",
        context:
          "That is what separates the arrow from a red ball. A red ball still allows a right turn after stopping, and a left onto a one-way street after stopping. The arrow removes that permission for its own direction.",
        trap: "Idaho lists stopping for a steady red arrow among the situations where you must stop, and the same list says you may not make the turn until the indication changes.",
        excerptKey: "steady-red-arrow",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals, Steady Red Arrow",
        sourceUrl: hb(55),
      },
      {
        id: "id_s6_14",
        topic: "rules",
        question: "How far ahead must you signal a turn in an Idaho business or residential area?",
        choices: [
          "50 feet",
          "Two seconds",
          "One car length",
          "At least 100 feet",
        ],
        correctIndex: 3,
        explanation:
          "One hundred feet in a business or residential area. On a freeway or highway the measure switches to time: at least five seconds.",
        context:
          "Idaho Code 49-808 phrases it as a general rule with a specific exception: five seconds on controlled-access highways and when pulling out of a parked position, and not less than the last 100 feet travelled everywhere else.",
        trap: "Signalling as you begin to turn is not a signal in Idaho's sense. Both measures are about warning the driver behind before you act.",
        excerptKey: "signal-distance",
        sourceLabel: "Idaho Driver's Handbook - Turns",
        sourceUrl: hb(72),
      },
      {
        id: "id_s6_15",
        topic: "rightOfWay",
        question:
          "Three cars are waiting at a four-way stop and a fourth arrives. What decides the order?",
        choices: [
          "The size of the vehicle",
          "The order in which they arrived, with the right-hand vehicle going first in a tie",
          "Whoever signals first",
          "Vehicles going straight, before any that are turning",
        ],
        correctIndex: 1,
        explanation:
          "Order of arrival decides. The first vehicle to arrive has the right of way, and only if two arrive at the same time does the vehicle on the left yield to the vehicle on the right.",
        context:
          "The same tiebreaker settles a simultaneous arrival at an uncontrolled intersection, and the same yielding rules apply when a signal is out because of a power cut.",
        trap: "Going straight does not create priority at a four-way stop. It matters only for whether you can go at the same time as somebody else safely, not for whose turn it is.",
        excerptKey: "four-way-stop",
        sourceLabel: "Idaho Driver's Handbook - Yielding to Other Drivers",
        sourceUrl: hb(75),
      },
      {
        id: "id_s6_16",
        topic: "speed",
        question:
          "Fog has cut visibility on an Idaho highway to around 400 feet in the middle of the afternoon. What does the law require?",
        choices: [
          "Headlights on, and low beams are best",
          "Hazard lights on and headlights off",
          "Nothing, since it is daytime",
          "Parking lights only",
        ],
        correctIndex: 0,
        explanation:
          "You are required to turn on your headlights in daytime once vision drops to 500 feet or less, and low beams are best in fog, smoke, dust or rain.",
        context:
          "The 500-foot figure is the same one Idaho Code 49-903 uses for lighting generally: lamps are required from sunset to sunrise and whenever there is not enough light to see people and vehicles clearly at 500 feet.",
        trap: "High beams in fog reflect off the water droplets and make it worse. The handbook says to check your beams are on low when you first switch on.",
        excerptKey: "fog-headlights",
        sourceLabel: "Idaho Driver's Handbook - Fog, Smoke, Dust, or Rain",
        sourceUrl: hb(110),
      },
      {
        id: "id_s6_17",
        topic: "safety",
        question: "Which is the safest response if a car is tailgating you?",
        choices: [
          "Slow down gradually, or change lanes when you can, and let them pass",
          "Speed up until the gap opens",
          "Brake sharply to make the point",
          "Turn on your hazard lights",
        ],
        correctIndex: 0,
        explanation:
          "Idaho's advice is to slow down and let the tailgater pass. Keeping a space cushion is about the room in front of you, which is the only part of the situation you control.",
        context:
          "The handbook adds the wider version: keep plenty of space on all sides, stay in the middle of your lane, and make sure there is always room ahead to stop or pass safely.",
        trap: "Speeding up hands the tailgater the same gap at a higher speed. Brake-checking removes the margin from a driver who has already shown they have none.",
        excerptKey: "space-cushion",
        sourceLabel: "Idaho Driver's Handbook - Keep a Space Cushion",
        sourceUrl: hb(80),
      },
      {
        id: "id_s6_18",
        topic: "sharing",
        question:
          "Approximately what proportion of motorcycle crashes involve another motor vehicle, according to the handbook?",
        choices: ["About a quarter", "About one half", "About three quarters", "Almost all of them"],
        correctIndex: 1,
        explanation:
          "About one half. The handbook gives the figure to explain why safe driving by everyone else matters so much to riders.",
        context:
          "The situations it flags are left turns in front of an oncoming bike, signals that do not cancel, lane sharing, bad weather, rough road surfaces and blind spots. Its answer to most of them is to look and then look again.",
        trap: "That half of motorcycle crashes are single-vehicle events does not make the other half the rider's problem alone. The handbook puts the precaution on the driver.",
        excerptKey: "motorcycle-half-crashes",
        sourceLabel: "Idaho Driver's Handbook - Motorcycles",
        sourceUrl: hb(103),
      },
      {
        id: "id_s6_19",
        topic: "parking",
        question: "Which of these is NOT on Idaho's list of places where parking is prohibited?",
        choices: [
          "On a bridge or overpass",
          "In front of a driveway",
          "On a controlled-access highway",
          "On a residential street after dark",
        ],
        correctIndex: 3,
        explanation:
          "There is no general after-dark parking ban in Idaho. The list covers bike lanes, sidewalks, double parking, intersections, within 50 feet of railroad tracks, bridges and overpasses, in front of driveways, and any controlled-access highway.",
        context:
          "It also covers anywhere prohibited by signs or a red-painted curb, plus the measured distances from hydrants, crosswalks, stop and yield signs, signals and fire station driveways.",
        trap: "Every other option in this question is on the list. The one that sounds most like a local ordinance is the invented one.",
        excerptKey: "no-parking-list",
        sourceLabel: "Idaho Driver's Handbook - No-Parking Zones",
        sourceUrl: hb(81),
      },
      {
        id: "id_s6_20",
        topic: "emergencies",
        question: "Your wheels have dropped off the pavement onto a soft shoulder at speed. What do you do?",
        choices: [
          "Brake hard and steer back onto the pavement at once",
          "Turn the wheel sharply left to regain the lane",
          "Grip the wheel, steer straight ahead, ease off the gas and brake gently before easing back on",
          "Accelerate so the tires climb the edge more easily",
        ],
        correctIndex: 2,
        explanation:
          "Hold the wheel firmly, keep going straight along the shoulder if nothing is in the way, take your foot off the accelerator and brake gently. Only once you have slowed do you check for a gap and steer back on.",
        context:
          "The handbook warns about the last step in particular: do not oversteer, or you will cross the center line into oncoming traffic. Running off the road and a tire blowout get the same shape of answer.",
        trap: "Yanking the wheel back onto the pavement at speed is what turns a dropped wheel into a rollover or a head-on.",
        excerptKey: "run-off-road",
        sourceLabel: "Idaho Driver's Handbook - Running Off the Road",
        sourceUrl: hb(120),
      },
      {
        id: "id_s6_21",
        topic: "licensing",
        question:
          "How many errors are allowed on the Idaho skills test before you fail?",
        choices: [
          "Six or fewer",
          "Nine or fewer",
          "Twelve or fewer",
          "There is no error limit, only critical errors",
        ],
        correctIndex: 2,
        explanation:
          "Twelve or fewer errors is a passing score. A single critical driving error fails you outright and ends the test immediately.",
        context:
          "Five errors of the same skill counts as a critical driving error in itself. The other critical errors include disobeying a sign or signal, driving onto a curb or sidewalk, a lane violation, speeding, striking an object, and parking more than 18 inches from the curb while impeding traffic.",
        trap: "The twelve-error allowance sounds generous and is undercut by the critical-error rule. Repeating the same small mistake five times ends the test whatever your running total is.",
        excerptKey: "skills-test-score",
        sourceLabel: "Idaho Driver's Handbook - Skills Test: Class D",
        sourceUrl: hb(33),
      },
      {
        id: "id_s6_22",
        topic: "signs",
        question:
          "A white-on-green sign lists towns and mileages ahead. What kind of sign is it?",
        choices: [
          "A regulatory sign",
          "A warning sign",
          "A work zone sign",
          "A guide sign",
        ],
        correctIndex: 3,
        explanation:
          "Green on white is Idaho's directional and distance guide sign. Guide signs tell you where things are; they do not impose a rule.",
        context:
          "Blue guide signs carry motorist services and brown ones carry cultural, historical and scenic points. Regulatory signs are black and white, or red and white, and warning signs are yellow diamonds or orange in a work zone.",
        trap: "A sign carrying a distance is not automatically a speed or a rule. The color is what tells you which family it belongs to.",
        excerptKey: "guide-sign-colors",
        sourceLabel: "Idaho Driver's Handbook - Guide Signs",
        sourceUrl: hb(53),
      },
      {
        id: "id_s6_23",
        topic: "rules",
        question: "When must you use a turn signal in Idaho?",
        choices: [
          "Only when other traffic is present",
          "Changing lanes, passing, exiting a roundabout, turning, entering or leaving a freeway, and pulling out from or over to the side of the road",
          "Only at intersections",
          "Only when turning left",
        ],
        correctIndex: 1,
        explanation:
          "Idaho lists all of them: changing lanes or passing, exiting a roundabout, turning at an intersection or into a driveway, entering or leaving a freeway, pulling away from a parked position, and pulling over to the side.",
        context:
          "The handbook explains the point in one line: proper signaling may prevent a rear-end collision. If you plan to turn just beyond an intersection, signal after you pass through it so you do not confuse other drivers.",
        trap: "The presence of other traffic is not the trigger. Idaho Code 49-808 makes the signal a condition of the movement itself.",
        excerptKey: "signal-when",
        sourceLabel: "Idaho Driver's Handbook - Turns",
        sourceUrl: hb(72),
      },
      {
        id: "id_s6_24",
        topic: "safety",
        question: "How does the Idaho handbook describe the effect of wearing a seat belt in a crash?",
        choices: [
          "It halves the chance of serious injury and is 60 to 70 percent effective in preventing fatalities",
          "It reduces damage to the vehicle",
          "It matters only above 40 mph",
          "It is less important in a car fitted with airbags",
        ],
        correctIndex: 0,
        explanation:
          "The handbook cites NHTSA figures: belts reduce the chance of serious injury in a crash by 50 percent and are 60 to 70 percent effective in preventing fatalities.",
        context:
          "It adds a second benefit that has nothing to do with impact: belts help a driver keep control of the car on winding or rough roads, and when swerving to avoid a collision.",
        trap: "Airbags are designed to work with a belt, not instead of one. The handbook calls buckling up before you start the trip the best protection available.",
        excerptKey: "seat-belt-effectiveness",
        sourceLabel: "Idaho Driver's Handbook - Seat Belts & Shoulder Straps",
        sourceUrl: hb(42),
      },
      {
        id: "id_s6_25",
        topic: "signals",
        question:
          "You are facing a flashing red light at an intersection where the cross street has a flashing yellow. Who stops?",
        choices: [
          "You do, and then you yield to the cross traffic before proceeding",
          "Both directions stop, as at a four-way stop",
          "The cross traffic stops, since yellow means prepare to stop",
          "Neither, if the intersection is clear",
        ],
        correctIndex: 0,
        explanation:
          "The flashing red is yours to obey. You stop completely, yield to cross traffic or pedestrians, then proceed when clear. The flashing yellow gives the cross street caution, not a stop.",
        context:
          "Idaho Code 49-804 describes the pair the same way: a flashing red requires the same stop as a stop sign, and a flashing yellow lets a driver proceed only with caution.",
        trap: "The cross traffic is not required to stop, so waiting for a gap they do not have to give you is the whole point of stopping first.",
        excerptKey: "code-flashing-red",
        sourceLabel: "Idaho Code 49-804 - Flashing Signals",
        sourceUrl: `${CODE}/Title49/T49CH8/SECT49-804/`,
      },
      {
        id: "id_s6_26",
        topic: "sharing",
        question:
          "You are passing a large truck on an Idaho interstate. When may you move back into its lane?",
        choices: [
          "As soon as your rear bumper clears the cab",
          "Once you can see the whole cab in your rear-view mirror",
          "Once you have passed the front of the trailer",
          "Whenever the truck flashes its lights",
        ],
        correctIndex: 1,
        explanation:
          "Keep a steady speed while passing and be sure you can see the cab of the large vehicle in your rear-view mirror before you merge back in.",
        context:
          "The reason is the stopping distance behind you: a loaded truck at 55 needs about 450 feet to stop, and truck drivers deliberately hold a bigger gap in front that you should not take.",
        trap: "Cutting back in too soon and then slowing is the pattern the handbook names, and the truck driver has almost no time or room to react.",
        excerptKey: "truck-stopping-distance",
        sourceLabel: "Idaho Driver's Handbook - Large Vehicles, Passing",
        sourceUrl: hb(105),
      },
      {
        id: "id_s6_27",
        topic: "speed",
        question:
          "You are stuck behind a farm tractor on a two-lane rural Idaho highway with four cars queued behind you. What does the law require of the tractor driver?",
        choices: [
          "Nothing; slow vehicles have the same rights as any other",
          "To move onto the shoulder and keep driving",
          "To stop completely until the queue has passed",
          "To turn off the road wherever it is safe and let the vehicles pass",
        ],
        correctIndex: 3,
        explanation:
          "Any vehicle travelling slower than the normal speed of traffic and delaying three or more vehicles in a rural area or on a two-lane highway must turn off the road wherever it is safe to let them by.",
        context:
          "Slow-moving vehicles designed for no more than 25 mph may use public roads during daylight only, which Idaho defines as 30 minutes before sunrise to 30 minutes after sunset, and must display the approved orange emblem.",
        trap: "Three vehicles delayed is the threshold, which is a smaller queue than most people expect. Snow removal and farm equipment on non-interstate roads with flashing lights are exempt from the daylight limit.",
        excerptKey: "slow-vehicle-turn-out",
        sourceLabel: "Idaho Driver's Handbook - Slow-Moving Vehicle",
        sourceUrl: hb(79),
      },
      {
        id: "id_s6_28",
        topic: "impairment",
        question:
          "Which of these does the Idaho handbook list as a sign of a drinking driver?",
        choices: [
          "Driving with the windows down",
          "Signalling every turn early",
          "Weaving within the lane and making quick stops at signals",
          "Keeping a long following distance",
        ],
        correctIndex: 2,
        explanation:
          "The handbook lists weaving, quick stops at signs and lights rather than easing up to them, speeding, unusually slow driving and jerky steering or acceleration.",
        context:
          "It explains why the pattern is mixed: alcohol makes some drivers overconfident and fast, and others overly cautious and slow. Either way the reaction time and judgment are gone.",
        trap: "Slow and careful is on the list too. An unusually slow driver at 2am is as much a warning sign as a fast one.",
        excerptKey: "drinking-driver-signs",
        sourceLabel: "Idaho Driver's Handbook - How Drinking Affects Driving",
        sourceUrl: hb(130),
      },
      {
        id: "id_s6_29",
        topic: "rightOfWay",
        question:
          "You are entering a roundabout and a pedestrian steps into the crossing on the approach. What do you do?",
        choices: [
          "Continue, since roundabout traffic has priority",
          "Sound the horn and slow down",
          "Yield to the pedestrian, and to traffic already in the circle",
          "Stop in the circle to let them cross behind you",
        ],
        correctIndex: 2,
        explanation:
          "Idaho asks you to yield to pedestrians and bicyclists both entering and exiting a roundabout, and to yield to traffic on your left already in the circle.",
        context:
          "The rest of the technique: slow down on the approach, obey all signs and markings, keep your speed low inside, and signal right as you approach your exit.",
        trap: "Stopping inside the circle is the one thing not to do. It blocks everyone behind you and defeats the design.",
        excerptKey: "roundabout-signal-exit",
        sourceLabel: "Idaho Driver's Handbook - Intersections, Roundabouts",
        sourceUrl: hb(62),
      },
      {
        id: "id_s6_30",
        topic: "safety",
        question:
          "Which of these does the handbook name as one of the things that can distract your attention while driving?",
        choices: [
          "Checking your mirrors",
          "Scanning the road ahead",
          "Looking to both sides at an intersection",
          "Dealing with children or pets in the car",
        ],
        correctIndex: 3,
        explanation:
          "Dealing with children or pets is on the handbook's distraction list, alongside texting or talking on the phone, eating, reading or writing, changing the radio station, applying makeup and looking for things inside the car.",
        context:
          "Its remedies are practical: set the radio before you move, keep the volume low enough to hear sirens and horns outside, use a front-seat passenger as a navigator, put pets in a carrier, and if you are lost in thought, pull over and stop.",
        trap: "The first three options are the defensive-driving routine, not distractions. Checking mirrors and scanning are what the handbook asks you to do.",
        excerptKey: "distraction-list",
        sourceLabel: "Idaho Driver's Handbook - Things that Can Distract Your Attention",
        sourceUrl: hb(91),
      },
    ],
  },
];
