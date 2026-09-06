import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets 1 to 3: the South Carolina Driver's
// License Manual as published by the SCDMV at dmv.sc.gov in April 2026, plus
// Title 56 of the South Carolina Code of Laws for the numbers the manual never
// prints. The manual is the AAMVA model manual with SC material bolted on, so
// almost every figure a test candidate is expected to recite - speed limits,
// parking distances, signal distance, the adult BAC limit, fines and points -
// comes from the Code rather than the book.
//
// Set 4 sweeps the parts of the manual people skim on the way to the signs
// chapter: the licensing ladder's paperwork, the pre-drive checks, trailers,
// rural roads and the parking distances.
//
// Set 5 is built from what South Carolina learners actually report failing on.
// The three that come up again and again are the school-bus rule (SC stops
// for AMBER as well as red, and the multi-lane carve-out only excuses
// oncoming traffic), the four-second following distance the manual teaches
// where most drivers were taught three, and the point system, where the
// number that suspends a permit or a conditional licence is six, not twelve.
//
// Set 6 runs 30 questions with no scaffolding beyond the standard fields,
// mirroring the mix of a real beginner's permit test.
//
// Page numbers in sourceUrl anchors are PDF page numbers. The manual numbers
// its pages per section, so PDF page 62 is printed "6-3"; the section offsets
// are 1:+4, 2:+28, 3:+31, 4:+43, 5:+53, 6:+59, 7:+75, 8:+93, 9:+103, 10:+109,
// 11:+125, 12:+139.
//
// Questions are original. Nothing here is copied from the manual, from a
// practice site, or from anyone's recollection of the real exam.
const HB = "https://dmv.sc.gov/sites/scdmv/files/2026-04/Driver's%20Manual.pdf";
const pg = (n: number) => `${HB}#page=${n}`;
const C5 = "https://www.scstatehouse.gov/code/t56c005.php";
const C1 = "https://www.scstatehouse.gov/code/t56c001.php";

export const southcarolinaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "A second exam-level set that reaches into the chapters people skip: the paperwork behind the licence, the checks you make before you move, trailers and rural roads, and the parking distances the manual leaves to the Code.",
    questions: [
      {
        id: "sc_s4_01",
        topic: "licensing",
        question:
          "Besides your licence or permit, what else does the SCDMV manual say you must have with you every time you drive?",
        choices: [
          "The vehicle registration and a valid insurance card",
          "The registration only; insurance is checked electronically",
          "A copy of the title and the registration",
          "Nothing else, as long as the vehicle is insured",
        ],
        correctIndex: 0,
        explanation:
          "South Carolina expects three documents in the vehicle: your licence or permit for the class of vehicle you are driving, the registration, and a valid insurance card. Missing any of them can earn you a fine at a traffic stop.",
        context:
          "The manual treats these as a set rather than as separate rules, and the fine attaches to not having them in your possession, not to being uninsured or unregistered. The title stays at home; it is a proof of ownership document, not a driving document. Keeping the registration and insurance card in the glovebox is the usual habit, and an officer will normally give you time to reach for them after telling you to.",
        trap:
          "The insurance card is the one people leave behind, on the assumption that the state can look the policy up. It can, but the manual still requires the card in the vehicle.",
        excerptKey: "carry-documents",
        sourceLabel: "SC Driver's License Manual - Section 1 The Driver's License (p. 1-3)",
        sourceUrl: pg(7),
      },
      {
        id: "sc_s4_02",
        topic: "licensing",
        question:
          "A Class D licence covers non-commercial cars and trucks up to what gross vehicle weight?",
        choices: [
          "10,000 pounds",
          "16,000 pounds",
          "20,000 pounds",
          "26,000 pounds",
        ],
        correctIndex: 3,
        explanation:
          "Class D is the ordinary South Carolina driver's licence, and it runs up to 26,000 pounds gross vehicle weight. Above that you are into commercial licence territory.",
        context:
          "South Carolina splits non-commercial driving into classes: D for cars and light trucks, E and F for larger non-commercial vehicles, M for motorcycles and G for mopeds. The 26,000-pound line is the same one federal rules use to define a commercial vehicle, which is why it turns up in the manual's very first table.",
        trap:
          "10,000 pounds is a common guess because it sounds like a heavy pickup. The real ceiling is much higher, and a loaded motorhome can still sit under it.",
        excerptKey: "class-d-weight",
        sourceLabel: "SC Driver's License Manual - Section 1 The Driver's License (p. 1-1)",
        sourceUrl: pg(5),
      },
      {
        id: "sc_s4_03",
        topic: "licensing",
        question:
          "You are 15 and holding a beginner's permit. How much supervised practice does the manual require before you move up, and how much of it must be at night?",
        choices: [
          "20 hours in total, with 5 at night",
          "40 hours in total, with 10 at night",
          "50 hours in total, with 10 at night",
          "60 hours in total, with 20 at night",
        ],
        correctIndex: 1,
        explanation:
          "A 15 or 16 year old must log at least 40 hours of practice driving, and at least ten of those hours must be at night, with one of the supervising adults the manual lists.",
        context:
          "The hours sit alongside the other conditions for stepping up from the permit: the holding period, the driver education course, and the vision and skills tests. A parent or guardian signs off on the hours, so they are recorded rather than tested. Adults aged 18 and over do not have an hours requirement at all - they have a 30-day holding period instead.",
        trap:
          "50 with 10 at night is the figure many other states use, and it is the one people import from a friend in another state. South Carolina's number is 40.",
        excerptKey: "practice-40-hours",
        sourceLabel: "SC Driver's License Manual - Section 1 The Driver's License (p. 1-5)",
        sourceUrl: pg(9),
      },
      {
        id: "sc_s4_04",
        topic: "licensing",
        question:
          "You fail the road skills test on your first attempt. How soon can you try again?",
        choices: [
          "The same day, at a different branch",
          "The next calendar day",
          "After two business days",
          "After 30 days",
        ],
        correctIndex: 2,
        explanation:
          "South Carolina makes you wait two business days after a failed skills test before you can be retested, and the wait applies no matter how old you are or how much driving you have done.",
        context:
          "The wait exists so that a failed attempt is followed by practice rather than by another roll of the dice. Business days means the wait can stretch across a weekend or a holiday. The knowledge test and the skills test are separate hurdles, and failing one does not cancel a pass on the other.",
        trap:
          "Branch-hopping does not work. The wait is recorded against you rather than against the office, so a different location will simply turn you away.",
        excerptKey: "skills-retest-wait",
        sourceLabel: "SC Driver's License Manual - Section 1 The Driver's License (p. 1-13)",
        sourceUrl: pg(17),
      },
      {
        id: "sc_s4_05",
        topic: "licensing",
        question:
          "You move to a new address inside South Carolina. How long do you have to notify the SCDMV?",
        choices: [
          "10 days",
          "30 days",
          "45 days",
          "Until your licence next comes up for renewal",
        ],
        correctIndex: 0,
        explanation:
          "State law gives you ten days to tell the SCDMV in writing about a change of address or a change of name, and to quote the number of the licence you hold.",
        context:
          "The ten-day window is short because the address on file is how the state reaches you: a suspension letter, a points warning letter or a recall notice all go to the address the SCDMV has. If you never receive the letter because you moved, the suspension still takes effect. The same ten days applies to a name change after marriage or a court order.",
        trap:
          "Waiting until renewal feels harmless, but the point of the rule is the mail that arrives between renewals, not the card in your wallet.",
        excerptKey: "code-address-change",
        sourceLabel: "SC Code Section 56-1-230 - Notification of change of address or name",
        sourceUrl: C1,
      },
      {
        id: "sc_s4_06",
        topic: "safety",
        question:
          "How should the head restraint behind your head be set?",
        choices: [
          "As low as it will go, so it does not block the rear window",
          "So the top of it is level with the top of your shoulders",
          "So it touches the back of your neck",
          "So it contacts the back of your head, no lower than the level of your ears",
        ],
        correctIndex: 3,
        explanation:
          "The restraint is there to stop your head snapping backwards in a rear-end collision, so it has to be behind your head rather than behind your neck. The manual sets the floor at the level of your ears.",
        context:
          "Head restraints are anti-whiplash devices, not headrests for comfort, and a restraint set too low can act as a pivot and make a neck injury worse. Adjusting it belongs with the rest of the pre-drive routine: seat, restraint, mirrors, belt. Every occupant's restraint needs setting, not only the driver's.",
        trap:
          "Dropping the restraint to clear the rear view is a common habit and the manual specifically rules it out. Adjust the mirrors instead.",
        excerptKey: "head-restraint",
        sourceLabel: "SC Driver's License Manual - Section 4 Before You Drive (p. 4-3)",
        sourceUrl: pg(46),
      },
      {
        id: "sc_s4_07",
        topic: "safety",
        question:
          "Where does the shoulder half of a seat belt belong?",
        choices: [
          "Across the shoulder and chest, with as little slack as possible",
          "Under the arm, so it does not rub your neck",
          "Behind the back if the belt is uncomfortable",
          "Loose across the chest, so it does not restrict breathing",
        ],
        correctIndex: 0,
        explanation:
          "The shoulder harness has to cross the shoulder and chest with minimal slack. Those are the parts of your body strong enough to take the load in a crash.",
        context:
          "Routing the belt under your arm or behind your back puts the force into your abdomen or leaves you unrestrained, and the manual warns that this can cause serious internal injuries in a collision. Belts and air bags are designed to work together: the bag is a supplemental restraint that assumes the belt is holding you in position.",
        trap:
          "Tucking the belt under the arm feels like a comfort fix rather than a safety decision. It changes where the crash load goes, which is exactly what the belt is meant to control.",
        excerptKey: "shoulder-harness",
        sourceLabel: "SC Driver's License Manual - Section 4 Before You Drive (p. 4-6)",
        sourceUrl: pg(49),
      },
      {
        id: "sc_s4_08",
        topic: "safety",
        question:
          "The manual describes checking tread depth with a penny. How do you hold the coin?",
        choices: [
          "Flat against the tread, to see whether it rocks",
          "Head first into the deepest-looking groove",
          "Head up, in the shallowest groove",
          "On its edge across three grooves at once",
        ],
        correctIndex: 1,
        explanation:
          "You put the penny into the deepest-looking groove with Lincoln's head going in first. If you can see all of the head, the tread has worn down too far.",
        context:
          "Tread is what clears water out from under the tyre, so a worn tyre is mostly a wet-weather problem: less tread means hydroplaning starts at a lower speed. The manual pairs the penny check with a monthly pressure check using a gauge, reading the target PSI off the sticker in the driver's doorframe rather than off the tyre wall.",
        trap:
          "Testing the shallowest groove sounds more cautious but gives you a worse reading. The manual points you at the deepest groove.",
        excerptKey: "penny-test",
        sourceLabel: "SC Driver's License Manual - Section 4 Before You Drive (p. 4-2)",
        sourceUrl: pg(45),
      },
      {
        id: "sc_s4_09",
        topic: "safety",
        question:
          "What is hydroplaning, and what does the manual say is the best way to avoid it?",
        choices: [
          "The engine losing power in deep water; avoid it by revving harder",
          "The brakes fading when wet; avoid it by pumping the pedal",
          "The wipers failing to clear the screen; avoid it by using high beams",
          "The steering tyres riding up on a layer of water; avoid it by slowing down in the rain",
        ],
        correctIndex: 3,
        explanation:
          "Hydroplaning is the front tyres lifting onto a film of water, like water skis, so the steering stops biting. The manual's answer is speed: slow down on wet roads and where water has pooled.",
        context:
          "Because it is a water-clearing problem, everything that reduces the tyre's ability to shed water makes it worse - worn tread, low pressure, standing water and speed. If it happens, the recovery is to ease off the accelerator and hold the wheel straight rather than to brake or steer hard. Deeper water is a separate danger: six inches reaches the bottom of most cars and two feet of moving water can carry one away.",
        trap:
          "Braking feels like the answer to losing control, but with no traction at the front the brakes have nothing to work with and can make the slide worse.",
        excerptKey: "hydroplaning",
        sourceLabel: "SC Driver's License Manual - Section 8 Safe Driving Tips (p. 8-3)",
        sourceUrl: pg(96),
      },
      {
        id: "sc_s4_10",
        topic: "safety",
        question:
          "The manual teaches you to count seconds as the vehicle ahead passes a fixed object. Which count means you are following too closely?",
        choices: [
          "Passing the point before you reach one thousand two",
          "Passing the point before you reach one thousand three",
          "Passing the point before you reach one thousand four",
          "Passing the point before you reach one thousand six",
        ],
        correctIndex: 2,
        explanation:
          "South Carolina teaches a four-second gap. You pick a fixed point, start counting when the vehicle ahead passes it, and if you reach that point before you finish saying one thousand four you are too close.",
        context:
          "Four seconds is the base figure for good conditions, and the manual adds to it rather than subtracting: at least one more second at night, at least two more on an unfamiliar road at night, and more again behind large vehicles, motorcycles and anything required to stop at railroad crossings. Distance in feet is not the rule here, because a time gap scales automatically with speed.",
        trap:
          "Most drivers were taught a three-second rule, and it is the single most commonly wrong answer on this question in South Carolina. The manual's number is four.",
        excerptKey: "following-count",
        sourceLabel: "SC Driver's License Manual - Section 8 Safe Driving Tips (p. 8-6)",
        sourceUrl: pg(99),
        commonlyMissed: true,
      },
      {
        id: "sc_s4_11",
        topic: "sharing",
        question:
          "A tractor-trailer ahead of you signals a right turn but swings out to the left first. What is happening?",
        choices: [
          "The driver needs the extra room to get the trailer around the corner",
          "The driver has signalled the wrong way and is turning left",
          "The driver is inviting you to pass on the right",
          "The trailer is unloaded and the driver has lost steering",
        ],
        correctIndex: 0,
        explanation:
          "A long vehicle turning right often has to swing wide to the left first so the trailer's rear wheels clear the kerb. The signal is correct; the path just starts in the other direction.",
        context:
          "The gap that opens on the right during that swing is not a lane, it is the space the trailer is about to sweep through. Moving into it puts you where the driver cannot see you and where the trailer is going. Hang back and let the whole vehicle finish the turn before you move.",
        trap:
          "The opening on the right looks like an invitation and it is the classic way cars get crushed against a kerb by a turning trailer.",
        excerptKey: "truck-wide-right-turn",
        sourceLabel: "SC Driver's License Manual - Section 10 Sharing the Road (p. 10-10)",
        sourceUrl: pg(119),
        commonlyMissed: true,
      },
      {
        id: "sc_s4_12",
        topic: "sharing",
        question:
          "How far back does the blind spot directly behind a large truck extend?",
        choices: [
          "About 20 feet",
          "About 50 feet",
          "About 100 feet",
          "Up to 200 feet",
        ],
        correctIndex: 3,
        explanation:
          "A large vehicle's rear blind spot runs up to 200 feet behind it. Sit inside that and the truck driver cannot see you at all, and you cannot see the road ahead of the truck either.",
        context:
          "The manual calls these areas No Zones, and there are four of them - front, rear and one down each side, with the right-side blind spot the larger of the two. The practical rule is that if you cannot see the truck driver's mirrors, the driver cannot see you. The rear No Zone matters most in traffic, because a truck that has to brake hard has nowhere to go.",
        trap:
          "Fifty feet sounds generous for a car, but a loaded tractor-trailer is longer than that before you even start measuring the blind spot.",
        excerptKey: "rear-no-zone-200",
        sourceLabel: "SC Driver's License Manual - Section 10 Sharing the Road (p. 10-9)",
        sourceUrl: pg(118),
      },
      {
        id: "sc_s4_13",
        topic: "sharing",
        question:
          "When may you drive or stop in a marked bicycle lane?",
        choices: [
          "Whenever no bicycle is in sight",
          "When you are entering or leaving an alley or driveway, or an emergency or an officer requires it",
          "For up to two minutes while dropping off a passenger",
          "Whenever the general traffic lane is congested",
        ],
        correctIndex: 1,
        explanation:
          "A bike lane is not spare road. You may cross or use it only to enter or leave an alley or driveway, on official duties, when a police officer directs you, or in an emergency.",
        context:
          "South Carolina treats bicycles as vehicles with the same rights and duties as cars, and the lane is their travel lane. Parking or idling in it forces riders out into general traffic at the least predictable moment. When you do cross one to reach a driveway, you yield to any rider already in it, exactly as you would yield when crossing a traffic lane.",
        trap:
          "An empty lane is still a lane. The exception list is about why you are there, not about whether a cyclist happens to be visible.",
        excerptKey: "bike-lane-driving",
        sourceLabel: "SC Driver's License Manual - Section 10 Sharing the Road (p. 10-3)",
        sourceUrl: pg(112),
      },
      {
        id: "sc_s4_14",
        topic: "sharing",
        question:
          "You come up behind a horse-drawn buggy on a rural road. What does the manual tell you not to do?",
        choices: [
          "Sound your horn or rev the engine",
          "Pass on the left",
          "Slow to below the posted limit",
          "Leave extra following distance",
        ],
        correctIndex: 0,
        explanation:
          "Horns and engine noise can frighten the animal, and a startled horse in traffic is how these collisions happen. You pass with caution and keep the noise down.",
        context:
          "The same caution applies to riders on horseback and, for a different reason, to farm machinery: the operator of a tractor usually cannot hear you coming over the machinery, so do not assume you have been noticed. Both are slow vehicles that are entitled to use the road, and both give you very little room on a narrow rural lane.",
        trap:
          "A warning tap on the horn feels courteous with a car and is the wrong instinct here. The animal is the reason the rule exists.",
        excerptKey: "animal-drawn",
        sourceLabel: "SC Driver's License Manual - Section 10 Sharing the Road (p. 10-16)",
        sourceUrl: pg(125),
      },
      {
        id: "sc_s4_15",
        topic: "rules",
        question:
          "Traffic is backing up behind a lane-closed-ahead sign. What does the manual's zipper merge tell you to do?",
        choices: [
          "Move over as soon as you see the sign and leave the closing lane empty",
          "Use the closing lane to get as far forward as possible, then force your way in",
          "Straddle the line so nobody can pass you",
          "Stay in your lane until the merge point, then take turns easing into the open lane",
        ],
        correctIndex: 3,
        explanation:
          "When traffic is already backing up, both lanes are used right up to the merge point and drivers then alternate one for one. Using the full length of both lanes shortens the queue.",
        context:
          "The manual is explicit that the zipper merge is a best practice rather than a legal requirement, and that it is for backed-up traffic in a work zone. When traffic is still moving at highway speed with no queue, the opposite advice applies: move over early, because a late merge into fast traffic is dangerous. The deciding factor is whether traffic has slowed, not the sign itself.",
        trap:
          "Merging early feels polite and the manual does not condemn it, but in a queue it wastes half the road and makes the jam longer.",
        excerptKey: "zipper-merge",
        sourceLabel: "SC Driver's License Manual - Section 7 General Driving (p. 7-17)",
        sourceUrl: pg(92),
      },
      {
        id: "sc_s4_16",
        topic: "rules",
        question:
          "On a controlled-access highway in South Carolina, when may you drive in the farthest left-hand lane?",
        choices: [
          "When you are overtaking and passing another vehicle",
          "Any time you are at or above the posted limit",
          "Any time, since the left lane is a normal travel lane",
          "Only between sunrise and sunset",
        ],
        correctIndex: 0,
        explanation:
          "State law reserves the far left lane of a controlled-access highway for overtaking. Once you have completed the pass you are expected to move back to the right.",
        context:
          "A second rule points the same way: any vehicle moving slower than the general flow has to keep to the right-hand lane, except when passing or setting up a left turn. Together they make the left lane a passing lane rather than a fast lane, and sitting in it is an offence even at the speed limit.",
        trap:
          "Driving the limit does not buy you the left lane. The law is written around what you are doing, not how fast you are going.",
        excerptKey: "code-left-lane",
        sourceLabel: "SC Code Section 56-5-1885 - Overtaking and passing in the farthest left-hand lane",
        sourceUrl: C5,
      },
      {
        id: "sc_s4_17",
        topic: "rules",
        question:
          "You have pulled out and passed a slower car. When is it safe to signal and move back in?",
        choices: [
          "As soon as your rear bumper clears the other car's front bumper",
          "As soon as the other driver flashes their headlights",
          "When you can see the whole front of the passed vehicle in your rearview mirror",
          "After counting three seconds from the start of the pass",
        ],
        correctIndex: 2,
        explanation:
          "The manual gives you a visual test rather than a distance: keep going until the entire front of the car you passed shows in your interior mirror, then signal and check over your shoulder before moving back.",
        context:
          "The reason for the visual test is that mirrors compress distance, and a gap that looks adequate in the mirror often is not. The rest of the passing sequence is built on the same idea of minimising exposure: pass as quickly as you safely can, because time spent alongside is time spent in the other driver's blind spot.",
        trap:
          "A headlight flash from the driver you passed is a courtesy signal in some places and means nothing here. Use the mirror, not the other driver.",
        excerptKey: "passing-return",
        sourceLabel: "SC Driver's License Manual - Section 7 General Driving (p. 7-16)",
        sourceUrl: pg(91),
      },
      {
        id: "sc_s4_18",
        topic: "rules",
        question:
          "You have overshot your exit on an interstate. What does South Carolina law say about backing up?",
        choices: [
          "It is allowed on the shoulder if your hazard lights are on",
          "Backing on the shoulder or roadway of a controlled-access highway is prohibited outright",
          "It is allowed if you back no more than 100 feet",
          "It is allowed as long as no vehicle is within 500 feet",
        ],
        correctIndex: 1,
        explanation:
          "The Code bans backing anywhere on the roadway or the shoulder of a controlled-access highway. There is no distance allowance and hazard lights do not create one.",
        context:
          "The general backing rule elsewhere is a judgement rule - you may back only when it can be done safely and without interfering with other traffic - but on a controlled-access highway it becomes an absolute prohibition, because closing speeds there leave no margin for a vehicle travelling the wrong way. A missed exit costs you the next interchange, and that is the intended answer.",
        trap:
          "The shoulder feels like a safe place to reverse because it is out of the traffic lanes. The statute names the shoulder specifically.",
        excerptKey: "code-backing-freeway",
        sourceLabel: "SC Code Section 56-5-3810 - Limitations on backing",
        sourceUrl: C5,
      },
      {
        id: "sc_s4_19",
        topic: "parking",
        question:
          "You are parking on a street that has a kerb. How close to the kerb must your right-hand wheels be?",
        choices: [
          "Within 6 inches",
          "Within 18 inches",
          "Within 2 feet",
          "Within 3 feet",
        ],
        correctIndex: 1,
        explanation:
          "State law puts the right-hand wheels parallel to the kerb and within eighteen inches of it. Beyond that the vehicle is parked illegally even in a legal space.",
        context:
          "Eighteen inches is also what the road skills test measures on the parallel parking exercise, so the number does double duty. The manual's own parallel parking sequence gets you there by lining your front bumper up with the rear bumper of the car ahead before you start backing. On a one-way street the same eighteen inches applies to whichever kerb you park against.",
        trap:
          "Six inches sounds like the safer answer because it is tighter, but it is not the legal figure and it is hard to hit without kerbing a wheel.",
        excerptKey: "code-park-18-inches",
        sourceLabel: "SC Code Section 56-5-2560 - Parking at right-hand curb",
        sourceUrl: C5,
      },
      {
        id: "sc_s4_20",
        topic: "parking",
        question:
          "How close to the driveway entrance of a fire station may you park?",
        choices: [
          "No closer than 20 feet",
          "No closer than 10 feet",
          "No closer than 50 feet",
          "There is no set distance; just leave the entrance clear",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet is the limit at a fire station driveway. Across the street from the entrance the restriction is wider, at seventy-five feet, where it is properly signposted.",
        context:
          "These are part of a list of measured no-parking distances the manual never prints: fifteen feet from a fire hydrant, twenty feet from a crosswalk at an intersection, thirty feet from a stop sign or signal, and fifty feet from the nearest rail of a railroad crossing. The list also has unmeasured entries - never on a sidewalk, in an intersection, on a crosswalk, or on the roadway side of a parked vehicle.",
        trap:
          "The seventy-five-foot figure belongs to the far side of the street, not to the driveway itself. Mixing the two is the usual error.",
        excerptKey: "code-parking-fire-station",
        sourceLabel: "SC Code Section 56-5-2530 - Stopping, standing, or parking prohibited in specified places",
        sourceUrl: C5,
      },
      {
        id: "sc_s4_21",
        topic: "parking",
        question:
          "Your grandmother has a disability placard. When may you use her car to park in a designated disability space?",
        choices: [
          "Any time you are driving her car, because the placard belongs to the car",
          "Any time, provided the placard is showing",
          "For up to 30 minutes while running an errand for her",
          "Only when she is in the car with you, or you are driving her somewhere",
        ],
        correctIndex: 3,
        explanation:
          "The placard travels with the person, not with the vehicle. The space may be used only when the person named on the placard or plate registration is driving or being transported.",
        context:
          "That is why enforcement officers check who gets out of the car rather than only whether a placard is hanging in the window. Using a relative's placard when they are not with you is a misuse of it and can cost them the placard as well as costing you a fine. The rule is the same for a disability licence plate.",
        trap:
          "Displaying the placard is necessary but not sufficient. The question the law asks is who is in the vehicle.",
        excerptKey: "disability-parking",
        sourceLabel: "SC Driver's License Manual - Section 7 General Driving (p. 7-10)",
        sourceUrl: pg(85),
      },
      {
        id: "sc_s4_22",
        topic: "parking",
        question:
          "You are parking a manual-transmission car on a hill. Besides setting the parking brake and turning the engine off, what does the manual tell you to do?",
        choices: [
          "Leave it in neutral so it can roll if it is bumped",
          "Leave it in the highest gear",
          "Leave it in first or reverse",
          "Leave it in neutral with the wheels straight",
        ],
        correctIndex: 2,
        explanation:
          "A manual car parked on a hill goes into first or reverse, so the engine's compression backs up the parking brake. An automatic goes into park.",
        context:
          "The gear is only half of the hill-parking answer; the other half is which way the front wheels point. Facing downhill, or uphill with no kerb, they turn towards the edge of the road. Facing uphill with a kerb they turn away from it so the back of the front tyre rests against the kerb. In every case the parking brake goes on and the engine goes off.",
        trap:
          "Neutral is the instinctive choice for a car that is not being driven, and it is the one that lets the car roll into traffic if the brake slips.",
        excerptKey: "hill-parking-gear",
        sourceLabel: "SC Driver's License Manual - Section 7 General Driving (p. 7-13)",
        sourceUrl: pg(88),
      },
      {
        id: "sc_s4_23",
        topic: "signs",
        question:
          "South Carolina posts a distinctive sign along certain coastal roads. What does an evacuation route sign tell you?",
        choices: [
          "This road is used to move traffic inland if a hurricane evacuation is ordered",
          "This road floods in heavy rain and should be avoided",
          "This is the shortest route to the nearest hospital",
          "This road is closed to trucks during storm season",
        ],
        correctIndex: 0,
        explanation:
          "The sign marks a road designated to carry traffic away from the coast when a mandatory hurricane evacuation is declared. It has nothing to say about the road on an ordinary day.",
        context:
          "South Carolina's coast draws mandatory evacuations often enough that the routes are signed permanently, and during an evacuation some of them are run with all lanes flowing inland. The sign is a state-specific one, so it is a fair target for a South Carolina test even though it never appears in a national sign chart.",
        trap:
          "It is easy to read the sign as a flood warning, because flooding is what you associate with the coast. It is a routing sign, not a hazard sign.",
        excerptKey: "evacuation-route",
        sourceLabel: "SC Driver's License Manual - Section 6 Rules of the Road (p. 6-12)",
        sourceUrl: pg(71),
      },
      {
        id: "sc_s4_24",
        topic: "signs",
        question:
          "A regulatory sign shows a symbol inside a red circle with a red slash across it. What does it mean?",
        choices: [
          "The action shown is recommended",
          "The action shown is allowed only at certain hours",
          "There is a hazard of the kind shown ahead",
          "The action shown is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "The red circle and slash is the standard prohibition marking. Whatever the symbol shows - a U-turn, a left turn, a truck, a bicycle - you may not do it here.",
        context:
          "Regulatory signs tell you what the law requires or forbids at that spot, and disobeying one is a traffic offence in its own right. They are usually white with black and red, which separates them from yellow diamond warning signs, orange work-zone signs and green guide signs. Shape and colour give you the category before you have read a single word.",
        trap:
          "A red slash looks like a warning to people who have not learned the colour code, and warnings are only advisory. This one is enforceable.",
        excerptKey: "red-circle-slash",
        sourceLabel: "SC Driver's License Manual - Section 6 Rules of the Road (p. 6-9)",
        sourceUrl: pg(68),
      },
      {
        id: "sc_s4_25",
        topic: "signs",
        question:
          "What is the white, X-shaped sign at a railroad crossing called, and what does it require?",
        choices: [
          "A cattle guard sign; it warns of livestock on the track bed",
          "A crossbuck; you must stop behind the stop line or before the crossing when a train is approaching",
          "A crossbuck; you must always come to a full stop before crossing",
          "A grade sign; it marks a crossing that is closed to traffic",
        ],
        correctIndex: 1,
        explanation:
          "The X-shaped crossbuck marks the crossing itself. It requires you to yield and, when a train or railroad vehicle is approaching, to stop behind the stop line or before the crossing until the crossing is clear.",
        context:
          "A crossbuck alone is not a stop sign, so you do not stop at every crossing - the manual actually tells you to look both ways and cross without stopping once you know it is clear, because stopping on the tracks is the worst outcome. Not every crossing has lights or gates, and not every multi-track crossing is signed as one, so you check for a second track every time.",
        trap:
          "Treating the crossbuck as an unconditional stop sign is the tempting answer. The duty is to yield, and to stop only when something is coming.",
        excerptKey: "crossbuck",
        sourceLabel: "SC Driver's License Manual - Section 6 Rules of the Road (p. 6-6)",
        sourceUrl: pg(65),
      },
      {
        id: "sc_s4_26",
        topic: "signals",
        question:
          "You have a green arrow pointing left. What does it give you, and what does it not?",
        choices: [
          "You may make the movement the arrow shows, but you still yield to pedestrians in the crosswalk and to traffic lawfully in the intersection",
          "You have an absolute right of way and nobody may enter your path",
          "You may turn left or go straight, since a green arrow includes a green light",
          "You may turn only after stopping first",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow gives you a protected movement in the direction it points, and only that movement. It still does not override a pedestrian lawfully in the crosswalk or a vehicle already legitimately in the intersection.",
        context:
          "The statute says you may cautiously enter the intersection to make the movement the arrow shows, which is a deliberate choice of words: the arrow clears the conflicting traffic, it does not clear the intersection. A green arrow shown alongside a circular red means the arrow's movement only. The one to watch for is the flashing yellow arrow, which permits the turn but requires you to yield to oncoming traffic.",
        trap:
          "Reading the arrow as an absolute right of way is how left-turning drivers hit pedestrians who are still finishing a crossing.",
        excerptKey: "code-green-arrow",
        sourceLabel: "SC Code Section 56-5-970 - Traffic-control signal legend",
        sourceUrl: C5,
      },
      {
        id: "sc_s4_27",
        topic: "signals",
        question:
          "For how long before a turn must your signal be showing?",
        choices: [
          "For at least 3 seconds",
          "For at least 50 feet",
          "For at least the last 200 feet",
          "Continuously for at least the last 100 feet",
        ],
        correctIndex: 3,
        explanation:
          "South Carolina measures the signal in distance, not time: it has to run continuously through the last one hundred feet you travel before turning or changing lanes.",
        context:
          "Because it is a distance, the time it takes shrinks as you speed up - a hundred feet is well under two seconds at highway speed, so on a fast road you signal earlier than the minimum. The manual also wants a signal before you slow down for a turn or a parking space where there is no separate turning lane, so the brake lights are not the first warning the driver behind gets.",
        trap:
          "Three seconds is the rule in several other states and is the answer people import. South Carolina's figure is a distance.",
        excerptKey: "code-signal-100",
        sourceLabel: "SC Code Section 56-5-2150 - Turning movements and required signals",
        sourceUrl: C5,
        commonlyMissed: true,
      },
      {
        id: "sc_s4_28",
        topic: "emergencies",
        question:
          "Your accelerator sticks open and the car is speeding up on its own. What is the first thing the manual tells you to do?",
        choices: [
          "Stand on the brakes and hold them",
          "Turn off the engine",
          "Steer onto the shoulder immediately",
          "Pull the parking brake",
        ],
        correctIndex: 1,
        explanation:
          "The manual's sequence starts with switching the engine off. Then you shift to neutral and look for an escape path, and finally steer smoothly, brake gently and pull off the road.",
        context:
          "The order matters because it cuts the power before you try to manage the car. Switching off does mean losing power steering and power braking assistance, so the wheel gets heavy and the pedal firm, which is why the manual then tells you to steer smoothly and brake gently rather than to grab at either. Aim for a place to leave the road rather than for a sudden stop in a live lane.",
        trap:
          "Braking against an engine that is still driving the wheels can boil the brakes away in seconds. Kill the power first.",
        excerptKey: "stuck-accelerator",
        sourceLabel: "SC Driver's License Manual - Section 9 Emergency Situations (p. 9-5)",
        sourceUrl: pg(108),
      },
      {
        id: "sc_s4_29",
        topic: "emergencies",
        question:
          "A front tyre blows out at speed. What will the car do?",
        choices: [
          "Pull sharply towards the side that blew",
          "Wobble and shake but track straight",
          "Pull towards the opposite side",
          "Lose braking entirely",
        ],
        correctIndex: 0,
        explanation:
          "A front blowout drags the car hard towards the side that failed, because that corner has suddenly lost its grip and its height. A rear blowout feels different - the car wobbles and shakes and pulls a little the same way.",
        context:
          "Knowing which end went tells you how much steering correction to expect, but the response is the same either way: hold the wheel firmly, keep the car straight, ease off the accelerator and let the speed fall before you steer gently onto the shoulder. Braking hard transfers weight onto the failed tyre and can turn a blowout into a spin.",
        trap:
          "Expecting the car to pull away from the blowout gets the correction backwards, which is worse than no correction at all.",
        excerptKey: "blowout-pull",
        sourceLabel: "SC Driver's License Manual - Section 9 Emergency Situations (p. 9-4)",
        sourceUrl: pg(107),
      },
      {
        id: "sc_s4_30",
        topic: "emergencies",
        question:
          "You have been in a collision that damaged another occupied vehicle. What information must you give?",
        choices: [
          "Your insurance policy number only",
          "Your name and phone number, and nothing more without a lawyer",
          "Only what a police officer asks for at the scene",
          "Your name, address and the vehicle's registration number, and your licence on request if you have it",
        ],
        correctIndex: 3,
        explanation:
          "The statutory duty is to give your name, your address and the registration number of the vehicle you were driving, and to show your licence if it is asked for and you have it with you.",
        context:
          "The same section requires you to render reasonable aid to anyone injured. If the crash caused injury or death you must also stop at the scene, or as close to it as you can get, and stay there until you have met those duties. Where the only damage is to vehicles and one of them is blocking traffic, you are expected to move a driveable vehicle off the roadway rather than leave the lane blocked.",
        trap:
          "Handing over an insurance card feels like the complete answer, but the law lists name, address and registration number, and none of those is on the card by default.",
        excerptKey: "code-collision-information",
        sourceLabel: "SC Code Section 56-5-1230 - Duty to give information and render aid",
        sourceUrl: C5,
      },
      {
        id: "sc_s4_31",
        topic: "speed",
        question:
          "Can you be ticketed for driving too slowly in South Carolina?",
        choices: [
          "No, as long as you stay under the posted limit",
          "Only on interstates",
          "Yes, if your speed impedes the normal and reasonable movement of traffic without good reason",
          "Only if a minimum speed is posted",
        ],
        correctIndex: 2,
        explanation:
          "The Code makes it an offence to drive so slowly that you impede the normal and reasonable movement of traffic, unless the slower speed is needed for safety or required by law.",
        context:
          "It applies whether or not a minimum speed is posted, which is what makes it a live rule on ordinary roads. A related duty puts any vehicle moving below the flow of traffic in the right-hand lane. Weather, a mechanical problem or a genuine hazard are all reasons that take you outside the offence, so it is not simply a matter of being slower than the traffic around you.",
        trap:
          "Staying under the limit is not a defence. The offence is measured against the traffic around you, not against the sign.",
        excerptKey: "code-minimum-speed",
        sourceLabel: "SC Code Section 56-5-1560 - Minimum speed limits",
        sourceUrl: C5,
      },
      {
        id: "sc_s4_32",
        topic: "speed",
        question:
          "What is the maximum speed the manual recommends for most vehicle-and-trailer combinations?",
        choices: [
          "55 mph",
          "45 mph",
          "65 mph",
          "The posted limit, whatever it is",
        ],
        correctIndex: 0,
        explanation:
          "The manual recommends a ceiling of 55 mph for most vehicle-trailer combinations, regardless of what the posted limit allows.",
        context:
          "Towing changes almost everything about how a car behaves: it takes longer to stop, it is far more sensitive to crosswinds and it can start to sway. Loading helps - about sixty per cent of the cargo weight goes in the front half of the trailer, nearest the tow vehicle, and forty per cent behind. When backing a trailer, keeping a hand at the bottom of the wheel means the trailer follows the direction you move your hand.",
        trap:
          "A posted 70 does not mean 70 with a trailer behind you. The recommendation is a separate, lower ceiling.",
        excerptKey: "trailer-55-mph",
        sourceLabel: "SC Driver's License Manual - Section 11 Special Driving Situations (p. 11-11)",
        sourceUrl: pg(136),
      },
      {
        id: "sc_s4_33",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shop's driveway onto a city street. What does the law require?",
        choices: [
          "Nothing special, as long as you yield to traffic on the street",
          "Sound your horn before crossing the sidewalk",
          "Stop only if a pedestrian is actually visible",
          "Stop immediately before you drive onto the sidewalk or sidewalk area",
        ],
        correctIndex: 3,
        explanation:
          "Emerging from a driveway, alley, private road or building in a business or residential district, you must stop before you cross the sidewalk or the area the sidewalk would occupy, and only then edge out.",
        context:
          "The stop is for the footway, not for the road: a pedestrian walking past a driveway has no reason to expect a car to appear, and the sightlines out of a driveway are often blocked by a wall or a parked vehicle. Once past the sidewalk you still yield to everything on the roadway before joining it, so this is a two-stage manoeuvre.",
        trap:
          "Yielding to street traffic is the obvious duty and it is not the one being tested here. The mandatory stop happens before you reach the street at all.",
        excerptKey: "code-driveway-sidewalk",
        sourceLabel: "SC Code Section 56-5-2745 - Emerging from alley, driveway, or building",
        sourceUrl: C5,
      },
      {
        id: "sc_s4_34",
        topic: "rightOfWay",
        question:
          "Two cars approach a narrow single-lane bridge from opposite ends. Who goes first?",
        choices: [
          "The heavier vehicle, because it needs more room to stop",
          "Generally the driver who reached the bridge first",
          "The driver travelling uphill",
          "The driver on the right-hand side of the road",
        ],
        correctIndex: 1,
        explanation:
          "The manual's rule for a single-lane bridge is to take turns, and generally the first driver to the bridge has the right of way.",
        context:
          "Rural roads are where these one-at-a-time situations live, and the manual pairs the bridge rule with a warning about uncontrolled intersections, which have no stop or yield sign at all. In both cases the safe habit is to slow down and be ready to give way even when the rule is on your side, because the other driver may not know it or may not have seen you.",
        trap:
          "Vehicle size is never a right-of-way rule in South Carolina, on a bridge or anywhere else. Arrival order is what decides it.",
        excerptKey: "single-lane-bridge",
        sourceLabel: "SC Driver's License Manual - Section 11 Special Driving Situations (p. 11-5)",
        sourceUrl: pg(130),
      },
      {
        id: "sc_s4_35",
        topic: "impairment",
        question:
          "You hold a South Carolina licence and are arrested for DUI while driving through another state. Whose implied consent law applies?",
        choices: [
          "The law of the state where you were arrested",
          "South Carolina's, because that is where your licence was issued",
          "Whichever of the two is more lenient",
          "Federal law, because you crossed a state line",
        ],
        correctIndex: 0,
        explanation:
          "Implied consent laws differ from state to state, and the one that applies is the law of the state where the arrest happened - not the state that issued your licence.",
        context:
          "By driving in a state you are treated as having agreed to a lawfully requested breath, blood or urine test if you are suspected of impaired driving there. A refusal carries its own penalty separate from any DUI conviction, and the resulting suspension follows you home, because points and suspensions from out-of-state violations can be applied to your South Carolina record.",
        trap:
          "Assuming your home state's rules travel with your licence is the natural reading and the wrong one. The arresting state's law governs.",
        excerptKey: "implied-consent-state",
        sourceLabel: "SC Driver's License Manual - Section 3 Be in Shape to Drive (p. 3-8)",
        sourceUrl: pg(39),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The South Carolina rules that catch people out: the school bus carve-out on multi-lane roads, the four-second gap where the rest of the country teaches three, the point totals that suspend a young driver at half the adult figure, and an alcohol chapter that is the densest cluster of wrong answers in the book.",
    questions: [
      {
        id: "sc_s5_01",
        topic: "sharing",
        question:
          "You are on a four-lane highway, two lanes each way with no barrier, travelling the opposite way from a school bus that has stopped with its red lights flashing. What must you do?",
        choices: [
          "Stop, because all traffic in both directions stops for a school bus",
          "Stop, unless there is a painted median between you",
          "Slow to 15 mph and pass with caution",
          "Keep going; on a multi-lane highway only traffic behind the bus has to stop",
        ],
        correctIndex: 3,
        explanation:
          "South Carolina's stopping duty on a four-lane or multi-lane highway falls only on traffic travelling behind the bus. Oncoming traffic on such a road does not have to stop, though slowing and watching is still sensible.",
        context:
          "On a two-lane highway the rule is the familiar one: everybody stops, both directions. It is the multi-lane road that splits the two cases, and the split does not depend on a median or a barrier - the manual draws the line at the number of lanes. Behind the bus you always stop, on any highway, and you stay stopped until the bus moves off or the red lights stop flashing.",
        trap:
          "National driving-education material routinely says all traffic in both directions must stop. That is true in some states and it is not the South Carolina rule on a multi-lane road.",
        excerptKey: "school-bus-two-lane",
        sourceLabel: "SC Driver's License Manual - Section 7 General Driving (p. 7-9)",
        sourceUrl: pg(84),
        commonlyMissed: true,
      },
      {
        id: "sc_s5_02",
        topic: "sharing",
        question:
          "You are following a school bus and its AMBER lights begin to flash. What is required?",
        choices: [
          "Stop; the requirement covers red or amber flashing signals, not red alone",
          "Slow down but keep moving until the red lights come on",
          "Nothing; amber is only a warning to the bus driver's passengers",
          "Sound your horn to warn the bus you are behind it",
        ],
        correctIndex: 0,
        explanation:
          "South Carolina's rule names red or amber flashing signals. Attempting to pass a stopped bus while either colour is flashing is the offence, so amber is not a free run-up to the red.",
        context:
          "Behind a bus you must stop on any highway, whatever the lane count, and you may not move again until the bus itself moves or the red lights stop flashing. The one exception is a bus in a passenger loading zone that is completely off the main travel lanes where pedestrians cannot cross the roadway. Amber comes on before the stop arm goes out, which is precisely when children start walking towards the road.",
        trap:
          "Treating amber like a traffic signal's yellow - a hint to hurry - is the exact behaviour the rule was written to stop.",
        excerptKey: "school-bus-behind",
        sourceLabel: "SC Driver's License Manual - Section 7 General Driving (p. 7-10)",
        sourceUrl: pg(85),
        commonlyMissed: true,
      },
      {
        id: "sc_s5_03",
        topic: "sharing",
        question:
          "When does the manual say you do NOT have to stop for a school bus that is picking up passengers?",
        choices: [
          "When the bus is on the far side of a painted centre line",
          "When you can see that no children are near the road",
          "When the bus is in a loading zone completely off the main travel lanes and pedestrians are not allowed to cross the roadway",
          "When you are already past the front of the bus",
        ],
        correctIndex: 2,
        explanation:
          "The exception is a purpose-built loading zone that is entirely off the travelled way, where children are not permitted to cross the road at all. Anywhere else, the stopping rules apply.",
        context:
          "The exception is narrow on purpose: the whole point of the school bus rule is the child you cannot see, crossing in front of or behind the bus. A bus pulled fully off the road into a dedicated bay with a controlled walking route removes that risk, which is why the duty lifts there and only there.",
        trap:
          "Judging by whether you can see children is the wrong test. The rule is about where the bus is, not about what you can see.",
        excerptKey: "school-bus-loading-zone",
        sourceLabel: "SC Driver's License Manual - Section 7 General Driving (p. 7-9)",
        sourceUrl: pg(84),
      },
      {
        id: "sc_s5_04",
        topic: "sharing",
        question:
          "What is the minimum fine for a first offence of unlawfully passing a stopped school bus in South Carolina?",
        choices: [
          "$100",
          "$500, and the violation also carries six points",
          "$1,000, and the violation carries four points",
          "$250, with points only on a second offence",
        ],
        correctIndex: 1,
        explanation:
          "A first offence carries a fine of not less than five hundred dollars, or up to thirty days in jail, with community service available in place of imprisonment. The point schedule puts passing a stopped school bus at six points.",
        context:
          "Six points is in the same band as reckless driving and hit-and-run with property damage, which tells you how the state ranks it. For a driver on a permit, a conditional licence or a special restricted licence, six points on its own is enough to trigger a suspension. A bill to raise the fine has been through the House but is not law, so the five-hundred-dollar minimum is still the figure.",
        trap:
          "The thousand-dollar figure circulating online comes from a proposed increase that has not been enacted. The current minimum is five hundred.",
        excerptKey: "code-school-bus-fine",
        sourceLabel: "SC Code Section 56-5-2780 - Penalties for unlawfully passing a stopped school bus",
        sourceUrl: C5,
        commonlyMissed: true,
      },
      {
        id: "sc_s5_05",
        topic: "sharing",
        question:
          "What following distance does the manual set as the minimum behind a motorcycle in good conditions?",
        choices: [
          "2 seconds",
          "The same distance you would leave behind a car",
          "3 seconds",
          "At least 4 seconds, and more in the wet",
        ],
        correctIndex: 3,
        explanation:
          "The manual asks for a minimum four-second gap behind a motorcycle, and more than that in wet conditions or when the road surface is poor.",
        context:
          "Motorcycles can stop in a shorter distance than a car and they can go down without warning on a patch of gravel, a wet manhole cover or a pothole a car would ride over. The extra space is time to react to a rider who has become an obstacle in your lane. Four seconds is also the manual's baseline gap behind an ordinary car, so this is the general rule rather than an exception.",
        trap:
          "Because a bike is small it feels far away, and a two-second gap behind one looks enormous from the driver's seat. It is not enough time to stop.",
        excerptKey: "motorcycle-following",
        sourceLabel: "SC Driver's License Manual - Section 10 Sharing the Road (p. 10-7)",
        sourceUrl: pg(116),
      },
      {
        id: "sc_s5_06",
        topic: "sharing",
        question:
          "A motorcycle is riding in the centre of the lane ahead of you and there is room to squeeze past within the same lane. May you?",
        choices: [
          "No; a motorcycle is entitled to the full use of a lane",
          "Yes, if you leave three feet of clearance",
          "Yes, if the motorcycle is riding to one side of the lane",
          "Yes, but only on a road with a posted limit above 45 mph",
        ],
        correctIndex: 0,
        explanation:
          "State law gives a motorcycle the full use of its lane, and forbids driving in a way that deprives a rider of it. Sharing the lane to get past is not permitted.",
        context:
          "The one exception in the statute is two motorcycles riding abreast in a single lane, which is allowed between riders. Riders move around within the lane deliberately - to be seen, to avoid a rut or an oil strip, or to set up for a bend - so an apparently free half of the lane is often about to be occupied. To pass, you change lanes exactly as you would for a car.",
        trap:
          "A rider hugging one side of the lane looks like an invitation to slip by. It is usually a rider positioning for a hazard you have not seen yet.",
        excerptKey: "code-motorcycle-lane",
        sourceLabel: "SC Code Section 56-5-3640 - Motorcycle entitled to full use of lane",
        sourceUrl: C5,
      },
      {
        id: "sc_s5_07",
        topic: "sharing",
        question:
          "A tow truck is stopped on the shoulder ahead with amber warning lights flashing. What does South Carolina's move-over law require of you?",
        choices: [
          "Nothing; the law covers police, fire and ambulance only",
          "Slow down significantly and, if you can do it safely, move into a lane away from it",
          "Stop until the tow truck operator waves you past",
          "Sound your horn as you pass to warn the operator",
        ],
        correctIndex: 1,
        explanation:
          "The law covers any stationary authorised emergency vehicle showing red, red and white, blue, red and blue, or amber or yellow warning lights - so a tow truck is included. You proceed with due caution, significantly reduce speed, and change lanes away from it when that is safe.",
        context:
          "Changing lanes is the primary duty and slowing is what you do when you cannot change lanes safely, not an alternative you may choose. The statute exists because officers, paramedics, fire crews and tow operators keep being struck while working at the roadside. A violation is a misdemeanour with a fine of not less than three hundred and not more than five hundred dollars.",
        trap:
          "Amber lights read as maintenance rather than emergency, so drivers assume the law does not apply. The statute lists amber and yellow explicitly.",
        excerptKey: "code-move-over-lights",
        sourceLabel: "SC Code Section 56-5-1538 - Emergency scene management",
        sourceUrl: C5,
        commonlyMissed: true,
      },
      {
        id: "sc_s5_08",
        topic: "sharing",
        question:
          "What is the fine range for violating the move-over law?",
        choices: [
          "$25 to $100",
          "$100 to $200",
          "Not less than $300 and not more than $500",
          "A flat $1,000",
        ],
        correctIndex: 2,
        explanation:
          "It is a misdemeanour called endangering emergency services personnel, and on conviction the fine runs from three hundred to five hundred dollars.",
        context:
          "The offence sits alongside the endangerment of a highway worker provision, which carries five hundred to one thousand dollars where the worker is not injured. Both are built the same way: a fine band rather than a fixed figure, with the court choosing within it. Neither is a simple traffic-ticket amount, which is the point the manual is making about roadside workers.",
        trap:
          "It is easy to file this with ordinary moving violations in the low hundreds. The minimum here is three hundred dollars.",
        excerptKey: "code-move-over-fine",
        sourceLabel: "SC Code Section 56-5-1538 - Emergency scene management",
        sourceUrl: C5,
      },
      {
        id: "sc_s5_09",
        topic: "licensing",
        question:
          "You are 16 and have held your licence for eight months when you pick up six points. What happens?",
        choices: [
          "A warning letter, since suspension starts at 12 points",
          "The points are halved because you are a new driver",
          "The restrictions on your licence are extended by 30 days",
          "Your licence is suspended for six months",
        ],
        correctIndex: 3,
        explanation:
          "A driver under 17 who reaches six or more points before completing one year of licensed driving has the licence suspended for six months. The adult threshold of twelve does not apply.",
        context:
          "Six points is not much: one conviction for passing a stopped school bus, for reckless driving, or for speeding twenty-five or more over the limit gets you there in a single ticket. Two speeding tickets in the four-point band do it as well. Points do halve after one year from the violation date, but that reduction comes too late to save you from a suspension you have already triggered.",
        trap:
          "The famous number is twelve, and it is the adult number. Under 17, in your first licensed year, the number that matters is six.",
        excerptKey: "gdl-six-points",
        sourceLabel: "SC Driver's License Manual - Section 1 The Driver's License (p. 1-8)",
        sourceUrl: pg(12),
        commonlyMissed: true,
      },
      {
        id: "sc_s5_10",
        topic: "licensing",
        question:
          "You are 20 and have accumulated six points. What does the SCDMV do?",
        choices: [
          "Sends you a letter telling you to drive more carefully",
          "Suspends your licence for three months",
          "Requires you to retake the knowledge test",
          "Nothing at all until you reach 12",
        ],
        correctIndex: 0,
        explanation:
          "At six points a driver aged 17 or over gets a warning letter. Suspension does not start until the total reaches twelve.",
        context:
          "That gives the adult system two rungs where the young-driver system has one. Once the total does reach twelve, the length of the suspension scales with the total: three months for twelve to fifteen points, four for sixteen or seventeen, five for eighteen or nineteen, and six months at twenty and above. Points can come from violations committed outside South Carolina as well as inside it.",
        trap:
          "The letter is easy to dismiss as junk mail, which is exactly why the address-change rule has a ten-day deadline attached to it.",
        excerptKey: "points-twelve-suspend",
        sourceLabel: "SC Driver's License Manual - Section 1 The Driver's License (p. 1-19)",
        sourceUrl: pg(23),
      },
      {
        id: "sc_s5_11",
        topic: "licensing",
        question:
          "How do points come off your South Carolina record?",
        choices: [
          "They are removed entirely after two years",
          "They are reduced by half one year after the violation date on the ticket",
          "They are removed as soon as the fine is paid",
          "They stay until you renew your licence",
        ],
        correctIndex: 1,
        explanation:
          "Points are halved one year after the date of the violation shown on the ticket, not the date you paid or the date of a court appearance.",
        context:
          "Halving rather than clearing means a heavy violation keeps some weight for a long time: six points becomes three after a year, and another year later it becomes one and a half. A defensive driving course can knock points off as well, but only a course taken in South Carolina, in a classroom rather than online, taken after the violation, and only once in any three-year period.",
        trap:
          "Paying the ticket disposes of the fine, not the points. The clock runs from the violation date regardless.",
        excerptKey: "points-halved",
        sourceLabel: "SC Driver's License Manual - Section 1 The Driver's License (p. 1-18 to 1-19)",
        sourceUrl: pg(22),
      },
      {
        id: "sc_s5_12",
        topic: "licensing",
        question:
          "You are convicted of driving 18 mph over the posted limit. How many points does that carry?",
        choices: [
          "2 points",
          "3 points",
          "4 points",
          "6 points",
        ],
        correctIndex: 2,
        explanation:
          "The speeding ladder has three rungs: two points up to ten over, four points for more than ten but less than twenty-five over, and six points at twenty-five or more over.",
        context:
          "Eighteen over lands squarely in the middle band. Two convictions in that band put an adult driver's warning letter in the post and put a young driver over the six-point suspension threshold in a single year. The top rung, six points, is the same weight as reckless driving, and it applies to any speed twenty-five or more above the limit however briefly it was held.",
        trap:
          "Assuming the count rises smoothly with speed leads people to guess three. The schedule jumps in steps, and the middle step is four.",
        excerptKey: "code-points-speeding",
        sourceLabel: "SC Code Section 56-1-720 - Point system established; schedule of points",
        sourceUrl: C1,
      },
      {
        id: "sc_s5_13",
        topic: "licensing",
        question:
          "An adult driver reaches 14 points. How long is the suspension?",
        choices: [
          "One month",
          "Two months",
          "Six months",
          "Three months",
        ],
        correctIndex: 3,
        explanation:
          "Twelve to fifteen points brings a three-month suspension. The bands then step up: four months at sixteen or seventeen, five months at eighteen or nineteen, and six months at twenty points and above.",
        context:
          "The ladder is deliberately steep at the top, so a driver who keeps collecting points loses the licence for progressively longer. None of it applies to the offences that carry mandatory suspensions of their own - driving under the influence is handled outside the point system entirely, so a DUI is not simply a large number of points.",
        trap:
          "Six months is the top of the ladder, not the entry point. Fourteen points is at the bottom rung.",
        excerptKey: "code-points-suspension-lengths",
        sourceLabel: "SC Code Section 56-1-740 - Suspension of driver's license; point accumulation",
        sourceUrl: C1,
      },
      {
        id: "sc_s5_14",
        topic: "licensing",
        question:
          "How many points does a DUI conviction put on your South Carolina record?",
        choices: [
          "None; DUI carries a mandatory suspension and sits outside the point system",
          "Six points",
          "Twelve points, which is an automatic suspension",
          "Four points for a first offence",
        ],
        correctIndex: 0,
        explanation:
          "Certain violations, driving under the influence among them, require a mandatory licence suspension and are not handled through points at all.",
        context:
          "That is why hunting for the DUI figure in the point schedule is a dead end. The consequences come from a different set of rules: a fine and jail exposure for a first offence, an enrolment requirement in the Ignition Interlock Device Program, and a separate suspension if you refused testing or blew 0.15 or more. A conviction for driving under the influence of drugs is treated the same way as one for alcohol.",
        trap:
          "Looking for a points number for the most serious offence in the book feels natural. There is none, and that is the answer.",
        excerptKey: "dui-not-points",
        sourceLabel: "SC Driver's License Manual - Section 1 The Driver's License (p. 1-19)",
        sourceUrl: pg(23),
      },
      {
        id: "sc_s5_15",
        topic: "licensing",
        question:
          "You are 16 with a special restricted licence and a waiver for your evening job. How late may you drive alone?",
        choices: [
          "Until 8 p.m., the same as without the waiver",
          "Until midnight, but no later",
          "There is no time limit once you hold a waiver",
          "Until 2 a.m. on nights before a non-school day",
        ],
        correctIndex: 1,
        explanation:
          "The waiver extends solo driving to midnight for work or for certain extracurricular activities. It does not let you drive after midnight, waiver or not.",
        context:
          "Without a waiver the special restricted licence carries the same daily pattern as the conditional licence: alone until 6 p.m., or until 8 p.m. while daylight saving time is in effect, and after that only with a licensed driver aged 21 or over. Some teen-driving guides claim the special restricted licence removes the time-of-day restrictions altogether, and it does not.",
        trap:
          "A waiver sounds like an exemption from the curfew. It moves the curfew to midnight and stops there.",
        excerptKey: "waiver-midnight",
        sourceLabel: "SC Driver's License Manual - Section 1 The Driver's License (p. 1-9)",
        sourceUrl: pg(13),
        commonlyMissed: true,
      },
      {
        id: "sc_s5_16",
        topic: "licensing",
        question:
          "You hold a conditional licence. How many passengers under 21 may ride with you when no licensed adult is in the car?",
        choices: [
          "One",
          "Three",
          "As many as there are seat belts",
          "Two",
        ],
        correctIndex: 3,
        explanation:
          "The cap is two passengers under 21 unless a licensed adult aged at least 21 is in the vehicle. Family members, and students being carried to and from school, do not count against it.",
        context:
          "Passenger caps exist because crash risk for a young driver rises sharply with each additional young passenger. The same cap applies to the special restricted licence, so moving up a rung does not lift it. Having a licensed adult of 21 or over aboard removes the limit entirely, which is the same adult who lets you drive after the evening curfew.",
        trap:
          "Counting seat belts is how vehicle capacity works and it is not how this restriction works. The number is fixed at two.",
        excerptKey: "conditional-passengers",
        sourceLabel: "SC Driver's License Manual - Section 1 The Driver's License (p. 1-7)",
        sourceUrl: pg(11),
      },
      {
        id: "sc_s5_17",
        topic: "licensing",
        question:
          "Where must your supervising driver be while you drive on a beginner's permit?",
        choices: [
          "In the seat beside you",
          "Anywhere in the vehicle, including the back seat",
          "Within sight of you in a following vehicle",
          "Reachable by phone",
        ],
        correctIndex: 0,
        explanation:
          "The accompanying driver has to occupy the seat beside the permit holder. The only variation is for a motorcycle or moped, where the supervisor must stay within a safe viewing distance instead.",
        context:
          "The reason for the front seat is that the supervisor is expected to see what you see and to be able to reach the controls or the wheel. A supervisor asleep in the back or following in another car does not meet the requirement, and a permit holder driving in that situation is driving unsupervised as far as the law is concerned.",
        trap:
          "Having a licensed adult somewhere in the car feels like it satisfies the rule. The statute specifies the seat beside you.",
        excerptKey: "code-permit-seat-beside",
        sourceLabel: "SC Code Section 56-1-50 - Beginner's permit; hours and conditions",
        sourceUrl: C1,
      },
      {
        id: "sc_s5_18",
        topic: "licensing",
        question:
          "It is 1 a.m. and you hold a beginner's permit. Who may supervise you?",
        choices: [
          "Any licensed driver aged 21 or over",
          "Any licensed driver aged 25 or over",
          "Only a person named in the statute's supervision list, such as a parent, guardian or custodian",
          "Nobody; permit holders may not drive after midnight at all",
        ],
        correctIndex: 2,
        explanation:
          "Between midnight and six in the morning the permit holder's supervisor must be one of the people the statute lists - a parent, legal guardian, custodian or other adult specifically named there - rather than any licensed adult.",
        context:
          "So the permit has two supervision tiers rather than a curfew. From six in the morning until midnight, a licensed driver aged 21 or over with at least a year of experience can sit beside you. After midnight the list narrows. This is a rule people meet for the first time on the drive home from a late event, which is exactly when it is easiest to get wrong.",
        trap:
          "An older sibling or a friend's parent who satisfies the daytime rule does not automatically satisfy the after-midnight one.",
        excerptKey: "permit-after-midnight",
        sourceLabel: "SC Code Section 56-1-50 - Beginner's permit; hours and conditions",
        sourceUrl: C1,
        commonlyMissed: true,
      },
      {
        id: "sc_s5_19",
        topic: "licensing",
        question:
          "You are driving on a conditional licence and are convicted of a traffic offence. What happens to your progress towards a full licence?",
        choices: [
          "Nothing, provided you pay the fine promptly",
          "You must retake the knowledge test",
          "The restrictions are extended by 90 days",
          "Removal of the restrictions is postponed for twelve months from the offence",
        ],
        correctIndex: 3,
        explanation:
          "A conviction, or an at-fault collision, while driving on a conditional or special restricted licence pushes the removal of your restrictions back by twelve months from that date. You cannot get a regular licence until that year is up or until you turn 17.",
        context:
          "It is the graduated licensing system's real teeth: the penalty is time rather than money. The turning-17 escape hatch matters, because for a driver close to their birthday the postponement may make no practical difference, while for a 15-year-old it can cost a full year. An at-fault collision counts even without a conviction.",
        trap:
          "It is easy to read this as a fine-and-move-on situation. The consequence is a twelve-month delay in earning full privileges.",
        excerptKey: "code-gdl-postpone",
        sourceLabel: "SC Code Section 56-1-185 - Removal of restrictions postponed",
        sourceUrl: C1,
      },
      {
        id: "sc_s5_20",
        topic: "impairment",
        question:
          "You are 19. At what blood alcohol concentration does the SCDMV suspend your licence?",
        choices: [
          "0.08 percent, the same as an adult",
          "0.02 percent",
          "0.05 percent",
          "Any measurable amount above zero",
        ],
        correctIndex: 1,
        explanation:
          "For a driver under 21 the suspension threshold is two one-hundredths of one percent - 0.02. That is far below the 0.08 that defines the adult offence.",
        context:
          "This is what the zero-tolerance label means in practice: not literally zero, but a figure low enough that a single drink can reach it. It sits on top of the ordinary DUI law rather than replacing it, so an under-21 driver at 0.09 faces both. Alcohol starts degrading vision at around 0.02 in any driver, which is roughly where the threshold was set.",
        trap:
          "Zero tolerance is widely read as literally zero. The number the statute uses is 0.02.",
        excerptKey: "code-under-21-0-02",
        sourceLabel: "SC Code Section 56-1-286 - Suspension of license of persons under twenty-one",
        sourceUrl: C1,
        commonlyMissed: true,
      },
      {
        id: "sc_s5_21",
        topic: "impairment",
        question:
          "You are stopped on suspicion of DUI and you refuse the breath test. What happens?",
        choices: [
          "Your driving privilege is suspended for at least six months, and the refusal can be used against you in court",
          "Nothing, because you cannot be forced to give evidence against yourself",
          "A $500 fine, but no effect on your licence",
          "The officer must release you if there is no other evidence",
        ],
        correctIndex: 0,
        explanation:
          "You may physically refuse, but refusing carries a suspension of at least six months in its own right, and the fact of the refusal is admissible against you. Enrolling in the Ignition Interlock Device Program is the route to ending the suspension early.",
        context:
          "Implied consent is a bargain attached to the privilege of driving: by driving here you have already agreed to a lawfully requested breath, blood or urine test. The suspension for refusing is separate from any DUI conviction, so refusing can leave you off the road even if the underlying charge fails. The same happens on a reading of 0.15 or more.",
        trap:
          "Refusing feels like denying the state its evidence. It is itself a penalised act, and the refusal becomes evidence.",
        excerptKey: "code-implied-consent-refusal",
        sourceLabel: "SC Code Section 56-5-2950 - Implied consent to testing for alcohol or drugs",
        sourceUrl: C5,
      },
      {
        id: "sc_s5_22",
        topic: "impairment",
        question:
          "You are 30 years old and blow 0.06 after taking a prescription antihistamine. Can you be convicted?",
        choices: [
          "No; 0.06 is below the legal limit",
          "No, provided the prescription is valid and in your name",
          "Only if you refuse a further blood test",
          "Yes; you can be convicted of impaired driving at 0.05 or lower in combination with drugs",
        ],
        correctIndex: 3,
        explanation:
          "The manual is explicit that a conviction is possible at a BAC of 0.05, or lower, when it is combined with drugs - including prescription and over-the-counter medications.",
        context:
          "The 0.08 figure defines one way of proving the offence, not the whole offence. Alcohol and other depressants multiply each other, so a dose that is harmless on its own can become impairing with a drink. A conviction for driving under the influence of drugs alone is treated exactly like an alcohol DUI, and a valid prescription is no defence to being impaired.",
        trap:
          "Reading 0.08 as a safe-harbour line below which nothing can happen is the single most common misunderstanding in this chapter.",
        excerptKey: "bac-0-05-drugs",
        sourceLabel: "SC Driver's License Manual - Section 3 Be in Shape to Drive (p. 3-7)",
        sourceUrl: pg(38),
      },
      {
        id: "sc_s5_23",
        topic: "impairment",
        question:
          "After a first DUI conviction, how long must the ignition interlock device stay on the vehicle?",
        choices: [
          "One month",
          "Three months",
          "Six months",
          "Two years",
        ],
        correctIndex: 2,
        explanation:
          "A first offender enrols in the Ignition Interlock Device Program to end the suspension and obtain a restricted licence, and the device stays fitted for six months.",
        context:
          "The interlock is how South Carolina lets a first offender keep driving rather than losing the licence outright: you take a breath test to start the car, and the device logs every attempt. The same programme is the exit route from an implied-consent refusal suspension. Because none of this runs through the point system, a clean point total is no protection against any of it.",
        trap:
          "The interlock period is not the same as the suspension it replaces, and guessing the shorter figure is the usual error.",
        excerptKey: "code-interlock-first",
        sourceLabel: "SC Code Section 56-5-2990 - Suspension of convicted person's driver's license",
        sourceUrl: C5,
      },
      {
        id: "sc_s5_24",
        topic: "impairment",
        question:
          "Under South Carolina's hands-free law, which of these is still allowed while you are driving?",
        choices: [
          "Speaking a message that the device converts to text and sends, as long as you are not holding or supporting the device",
          "Holding the phone in your lap to read a message at a red light",
          "Propping the phone between your shoulder and ear for a call",
          "Watching a video on a mounted screen",
        ],
        correctIndex: 0,
        explanation:
          "The law bans holding or supporting a device with any part of your body. Voice-initiated messaging is expressly permitted so long as the device is neither held nor supported by you.",
        context:
          "The Act took effect on 1 September 2025 with a warning period, and citations began at the end of February 2026. It also exempts a driver who is lawfully parked or stopped, and one reporting an accident, emergency or safety hazard to a public safety official. A first offence is a hundred dollars; a second within three years is two hundred dollars and two points.",
        trap:
          "Being stationary at a red light does not count as parked or stopped for this law. Holding the phone is still holding it.",
        excerptKey: "code-hands-free-exceptions",
        sourceLabel: "SC Code Section 56-5-3890 - Unlawful use of a mobile electronic device",
        sourceUrl: C5,
        commonlyMissed: true,
      },
      {
        id: "sc_s5_25",
        topic: "impairment",
        question:
          "Does the hands-free law prohibit talking on the phone at all?",
        choices: [
          "Yes; all phone conversations while driving are banned",
          "No; an earpiece or a wrist-worn device may be used for voice communication",
          "No, but only through a factory-fitted system",
          "Yes, unless you are on a road with a limit below 35 mph",
        ],
        correctIndex: 1,
        explanation:
          "The prohibition is on holding or supporting a device with any part of your body. Using an earpiece, or a device worn on the wrist, to hold a voice conversation is specifically carved out.",
        context:
          "So the law targets what your hands and eyes are doing, not the conversation. Reading, composing or sending text and watching video are all out regardless of how the device is mounted. Navigation you do not hold is fine. The manual's wider point stands underneath the statute: a distraction is anything that takes your attention away from driving, and a legal distraction is still a distraction.",
        trap:
          "Hands-free is often heard as no-phone-at-all, which then makes people assume a mounted device is illegal too. Mounting is fine; holding is not.",
        excerptKey: "hands-free-earpiece",
        sourceLabel: "SC Code Section 56-5-3890 - Unlawful use of a mobile electronic device",
        sourceUrl: C5,
      },
      {
        id: "sc_s5_26",
        topic: "safety",
        question:
          "At what distance from an oncoming vehicle must you dim your high beams?",
        choices: [
          "100 feet",
          "200 feet",
          "300 feet",
          "500 feet",
        ],
        correctIndex: 3,
        explanation:
          "High beams come down at five hundred feet from an oncoming vehicle. The statute frames it as not projecting glaring rays into the oncoming driver's eyes.",
        context:
          "There is a second, shorter distance for the vehicle you are following, at two hundred feet, because glare in a mirror blinds just as effectively as glare through a windscreen. If someone leaves their high beams on at you, the manual's advice is to glance towards the right edge of the road rather than stare into the light. In fog, rain or snow you use low beams, since high beams reflect back off the moisture.",
        trap:
          "Two hundred feet is a real figure in this area, but it belongs to following, not to oncoming traffic.",
        excerptKey: "dim-500-feet",
        sourceLabel: "SC Driver's License Manual - Section 11 Special Driving Situations (p. 11-1)",
        sourceUrl: pg(126),
        commonlyMissed: true,
      },
      {
        id: "sc_s5_27",
        topic: "safety",
        question:
          "You flick the wipers on intermittently in a light mist. Must your headlights be on?",
        choices: [
          "Yes; any wiper use requires headlights, without exception",
          "No; the wiper rule does not apply to intermittent use in misting rain, sleet or snow",
          "Only if visibility is under 500 feet",
          "Only between sunset and sunrise",
        ],
        correctIndex: 1,
        explanation:
          "The wipers-mean-headlights rule has one written exception: wipers used intermittently in misting rain, sleet or snow. Continuous wiper use in rain still requires headlights.",
        context:
          "The main rule is one of South Carolina's most-tested numbers-free facts: headlights from half an hour after sunset to half an hour before sunrise, and any time you are running the wipers because of rain, sleet or snow. The exception is narrow, and since headlights make you visible rather than helping you see, switching them on in a mist costs you nothing anyway.",
        trap:
          "Learning the rule as an absolute makes this look like a trick question. The exception is in the statute, and it is limited to intermittent use.",
        excerptKey: "code-wipers-intermittent",
        sourceLabel: "SC Code Section 56-5-4450 - Times when vehicles must be equipped with lights",
        sourceUrl: C5,
      },
      {
        id: "sc_s5_28",
        topic: "safety",
        question:
          "You are driving at night on a road you do not know. What following gap does the manual want?",
        choices: [
          "At least 6 seconds - the base 4 plus 2 for an unfamiliar road at night",
          "4 seconds, the same as in daylight",
          "5 seconds",
          "3 seconds, since traffic is lighter at night",
        ],
        correctIndex: 0,
        explanation:
          "The manual builds up from the four-second base: add at least one second for night driving, and at least two for driving on unfamiliar roads at night. That puts this scenario at six.",
        context:
          "The additions are cumulative with the other reasons to leave more room - following a large vehicle, a motorcycle, or anything required to stop at railroad crossings, and driving in rain or on a poor surface. At night your headlights show you less road than you can cover in four seconds at highway speed, which is the physical reason behind the extra time.",
        trap:
          "Adding one second for darkness and stopping there is the near-miss answer. The unfamiliar-road addition is two, not one.",
        excerptKey: "night-following",
        sourceLabel: "SC Driver's License Manual - Section 11 Special Driving Situations (p. 11-2)",
        sourceUrl: pg(127),
        commonlyMissed: true,
      },
      {
        id: "sc_s5_29",
        topic: "safety",
        question:
          "What is the maximum fine for a seat belt violation in South Carolina?",
        choices: [
          "$100",
          "$25, with no court costs or surcharges added",
          "$250 for a second offence",
          "$50 per unbelted occupant, with no cap",
        ],
        correctIndex: 1,
        explanation:
          "The fine is capped at twenty-five dollars, and no court costs, assessments or surcharges may be added. One incident involving several violations cannot cost more than fifty dollars in total.",
        context:
          "The small fine sits oddly beside the fact that South Carolina enforces belts as a primary offence, meaning an officer may stop you for the belt alone with no other reason. Every occupant must be belted, and the driver is responsible for anyone aged seventeen or younger. On the road skills test, not wearing your belt is an automatic fail.",
        trap:
          "A rule enforced this strictly feels like it must carry a heavy fine. The deterrent here is the stop, not the money.",
        excerptKey: "code-seat-belt-fine",
        sourceLabel: "SC Code Section 56-5-6540 - Penalty; nature of offense",
        sourceUrl: C5,
      },
      {
        id: "sc_s5_30",
        topic: "safety",
        question:
          "A five-year-old has outgrown the forward-facing car seat. How must the booster seat be used?",
        choices: [
          "With a lap belt alone, in the front seat",
          "With a lap belt alone, in a rear seat",
          "With the shoulder belt only",
          "With both the lap and shoulder belts, in a rear seat",
        ],
        correctIndex: 3,
        explanation:
          "A belt-positioning booster goes in a rear seat and must be used with both the lap and the shoulder belt. The statute says specifically that it must not be used with a lap belt alone.",
        context:
          "The booster's job is to raise the child so the adult belt crosses the strong parts of the body, which only works if there is a shoulder belt to position. The child stays in it until they meet the height and fit requirements for an adult belt. Younger children go rear-facing, and a rear-facing seat must never be put in front of an air bag - children of seven and under belong in the back seat.",
        trap:
          "An older centre-rear seat with only a lap belt is exactly where a booster gets misused, and the statute rules that combination out by name.",
        excerptKey: "code-child-booster",
        sourceLabel: "SC Code Section 56-5-6410 - Child passenger restraint systems",
        sourceUrl: C5,
      },
      {
        id: "sc_s5_31",
        topic: "rightOfWay",
        question:
          "A pedestrian steps into the road mid-block, well away from any crosswalk, and starts across in front of you. What is your duty?",
        choices: [
          "Exercise due care to avoid hitting them, and sound your horn if that is needed",
          "None; they are crossing unlawfully and must give way to you",
          "Stop completely and wait, exactly as at a crosswalk",
          "Continue at your speed, since they must yield",
        ],
        correctIndex: 0,
        explanation:
          "The pedestrian is required to yield to you away from a crosswalk, but that does not release you. Every driver still owes a duty of due care to avoid colliding with any pedestrian, with an audible warning where one is needed.",
        context:
          "The statute goes further for people who may not be able to look after themselves: you must take proper precaution on seeing any child, or anyone obviously confused, incapacitated or intoxicated. So there are two duties running at once, and the pedestrian's breach of theirs never becomes a defence to yours. At a marked or unmarked crosswalk the duty is stronger still: you yield.",
        trap:
          "Right of way is not permission to proceed into someone. Being in the right does not excuse a collision you could have avoided.",
        excerptKey: "code-due-care",
        sourceLabel: "SC Code Section 56-5-3230 - Drivers to exercise due care",
        sourceUrl: C5,
        commonlyMissed: true,
      },
      {
        id: "sc_s5_32",
        topic: "rightOfWay",
        question:
          "You pass a yield sign without stopping and collide with a vehicle in the intersection. How does the law treat that?",
        choices: [
          "It is treated as a no-fault collision",
          "Fault is decided only by the officer's judgement at the scene",
          "The collision is prima facie evidence that you failed to yield",
          "It is treated as reckless driving automatically",
        ],
        correctIndex: 2,
        explanation:
          "Colliding with a vehicle in the intersection after driving past a yield sign without stopping is treated by statute as prima facie evidence that you failed to yield the right of way.",
        context:
          "A yield sign does not always require a stop - it requires you to slow, and to stop if stopping is what yielding takes. The statute puts the risk of that judgement on you: if the judgement turns out to be wrong and there is a collision, the collision itself becomes the proof. Prima facie means the evidence stands unless you can displace it, not that the question can never be argued.",
        trap:
          "Because a yield sign is not a stop sign, drivers assume fault is open to argument. The statute closes it by default.",
        excerptKey: "code-yield-collision",
        sourceLabel: "SC Code Section 56-5-2330 - Stop signs and yield signs",
        sourceUrl: C5,
      },
      {
        id: "sc_s5_33",
        topic: "parking",
        question:
          "How close to the nearest rail of a railroad crossing may you park?",
        choices: [
          "Within 15 feet",
          "No closer than 50 feet",
          "No closer than 100 feet",
          "There is no set distance if the crossing has gates",
        ],
        correctIndex: 1,
        explanation:
          "Parking is prohibited within fifty feet of the nearest rail, with a narrow exception for temporarily loading or unloading property or passengers while actually engaged in doing so.",
        context:
          "Fifty feet is the largest of the measured parking distances in the Code, and it exists because a train overhangs the rails and cannot swerve. The rest of the list sits below it: thirty feet from a stop sign or signal, twenty feet from a crosswalk at an intersection and from a fire station driveway, fifteen feet from a hydrant. Note that the measurement is from the rail, not from the crossbuck or the gate.",
        trap:
          "Fifteen feet is the hydrant figure, and it is the number people reach for whenever a parking distance is asked about.",
        excerptKey: "code-parking-railroad-50",
        sourceLabel: "SC Code Section 56-5-2530 - Stopping, standing, or parking prohibited in specified places",
        sourceUrl: C5,
      },
      {
        id: "sc_s5_34",
        topic: "rules",
        question:
          "A fire engine is running to a call ahead of you with its lights and siren on. How far back must you stay?",
        choices: [
          "100 feet",
          "200 feet",
          "300 feet",
          "At least 500 feet",
        ],
        correctIndex: 3,
        explanation:
          "Unless you are on official business you may not follow fire apparatus responding to an emergency closer than five hundred feet, and you may not stop within five hundred feet of fire apparatus that has stopped at an emergency.",
        context:
          "Five hundred feet is roughly a tenth of a mile, so this is a genuinely large gap and it rules out the temptation to use the engine as a way through traffic. The second half of the rule - not stopping within five hundred feet of parked apparatus - keeps the ground clear for hoses, ladders and crews working around the vehicle.",
        trap:
          "This is a much bigger distance than any other following rule in the book, so an intuitive guess is almost always too short.",
        excerptKey: "code-fire-apparatus-500",
        sourceLabel: "SC Code Section 56-5-1960 - Following fire apparatus prohibited",
        sourceUrl: C5,
      },
      {
        id: "sc_s5_35",
        topic: "licensing",
        question:
          "You have your phone switched off in your pocket during the knowledge test, and you step out to use the bathroom. What is the consequence?",
        choices: [
          "You fail automatically, both for the device and for leaving the test area before finishing",
          "Nothing, as long as the phone stays off",
          "A warning for the first offence",
          "You must restart the test from the first question",
        ],
        correctIndex: 0,
        explanation:
          "Written material and electronic devices of any kind are barred from the knowledge test area, and leaving the test area before the test is complete is an automatic failure on its own.",
        context:
          "The manual names cell phones, laptops and tablet readers as examples, and the rule is about possession in the area rather than about use. Talking to anyone during the test fails you as well. None of this is announced on the SCDMV website, so people arrive without knowing it, which is what makes it worth learning ahead of time.",
        trap:
          "A switched-off phone still counts as an electronic device in the test area. The rule is possession, not use.",
        excerptKey: "knowledge-test-devices",
        sourceLabel: "SC Driver's License Manual - Section 1 The Driver's License (p. 1-10)",
        sourceUrl: pg(14),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix a real beginner's permit test uses - signs and signals interleaved with rules, right of way, parking and emergencies - with no hints beyond what you would get at the SCDMV counter.",
    questions: [
      {
        id: "sc_s6_01",
        topic: "signs",
        question:
          "Which of these counts as a traffic control device you are legally required to obey?",
        choices: [
          "A school crossing guard's directions",
          "A flashing porch light beside the road",
          "A neighbourhood sign asking drivers to slow down",
          "A driver ahead waving you through",
        ],
        correctIndex: 0,
        explanation:
          "Traffic control devices include signals, signs, pavement markings and directions given by law enforcement, highway personnel and school crossing guards. A crossing guard's signal carries the same weight as a sign.",
        context:
          "The category matters because obeying a device is a legal duty rather than a courtesy, and because a person directing traffic overrides the signal behind them. Privately erected signs and gestures from other drivers are not in the category at all, and acting on another driver's wave is how right-of-way collisions happen.",
        trap:
          "A wave from the driver ahead feels authoritative in the moment. That driver cannot see what is coming in the lane you are about to cross.",
        excerptKey: "traffic-control-devices",
        sourceLabel: "SC Driver's License Manual - Section 6 Rules of the Road (p. 6-2)",
        sourceUrl: pg(61),
      },
      {
        id: "sc_s6_02",
        topic: "signs",
        question:
          "A black-on-white speed limit sign reads 55. What exactly does that number mean?",
        choices: [
          "The speed you should aim to hold",
          "The average speed expected over the whole road",
          "A minimum below which you may be ticketed",
          "The maximum legal speed under ideal conditions",
        ],
        correctIndex: 3,
        explanation:
          "The posted number is the maximum the law allows when conditions are ideal. Rain, fog, traffic, darkness or a bad surface all require you to drive below it.",
        context:
          "The Code puts that in explicit terms: you must reduce speed when approaching an intersection or a railway crossing, going into a curve, coming up to a hillcrest, on a narrow bridge or a winding road, and whenever weather, road conditions, pedestrians or traffic create a special hazard. Driving the posted number in bad conditions can still be an offence.",
        trap:
          "Treating the sign as a target rather than a ceiling is the mindset behind most weather-related crashes on rural roads.",
        excerptKey: "speed-limit-signs",
        sourceLabel: "SC Driver's License Manual - Section 6 Rules of the Road (p. 6-10)",
        sourceUrl: pg(69),
      },
      {
        id: "sc_s6_03",
        topic: "signs",
        question:
          "What are pavement markings for?",
        choices: [
          "Marking where road repairs have been carried out",
          "Dividing lanes, showing where passing and lane changes are allowed, marking turn lanes, defining pedestrian walkways and showing where to stop",
          "Showing where the road surface is weakest",
          "Indicating the boundary between county maintenance areas",
        ],
        correctIndex: 1,
        explanation:
          "Markings are lines, arrows, words and symbols painted on the road to give directions or warnings. They divide lanes, tell you where passing and lane changes are permitted, assign turn lanes, define walkways and show where to stop.",
        context:
          "Because they do so many jobs, colour and pattern carry the meaning. Yellow separates traffic moving in opposite directions; white separates lanes moving the same way. Solid means do not cross for passing, broken means passing is permitted when it is safe, and a broken line on your side alone means only your side may pass.",
        trap:
          "Markings are often treated as decoration rather than instruction. Crossing a solid line to pass is an offence in its own right.",
        excerptKey: "pavement-markings",
        sourceLabel: "SC Driver's License Manual - Section 6 Rules of the Road (p. 6-12)",
        sourceUrl: pg(71),
      },
      {
        id: "sc_s6_04",
        topic: "signs",
        question:
          "You see white lane lines between the lane you are in and the lane beside you. What does the colour tell you?",
        choices: [
          "The lane beside you is a bus lane",
          "The road narrows ahead",
          "Traffic beside you is coming towards you",
          "Traffic beside you is travelling in the same direction as you",
        ],
        correctIndex: 3,
        explanation:
          "White markings separate lanes of traffic moving in the same direction. Yellow is what separates opposing flows.",
        context:
          "Once you know the colour code you can read an unfamiliar road quickly: white lines mean a one-direction roadway, and where the white line is broken, passing and lane changes are permitted. Cross onto yellow and you are heading into traffic coming the other way, which is why a yellow line on your left is the one to watch on a two-lane road.",
        trap:
          "Colour is easy to overlook at night or in rain, and it is the single most reliable clue about which way the next lane is flowing.",
        excerptKey: "white-markings",
        sourceLabel: "SC Driver's License Manual - Section 6 Rules of the Road (p. 6-14)",
        sourceUrl: pg(73),
      },
      {
        id: "sc_s6_05",
        topic: "signs",
        question:
          "You have just crossed one set of railroad tracks. What should you check before you accelerate away?",
        choices: [
          "Whether there is a second track, since not every multi-track crossing is signed as one",
          "Whether the crossbuck is reflective",
          "Whether your tyres picked up any gravel",
          "Whether the gate has finished rising",
        ],
        correctIndex: 0,
        explanation:
          "The manual warns that not every crossing with more than one track carries a sign saying so, so you check for a second track, a second train or a railroad vehicle at every crossing.",
        context:
          "A second track is dangerous precisely because the first train hides the second and takes your attention with it. Not all crossings have lights or gates either. Once you know the crossing is clear, cross without stopping - stopping on the tracks is the failure mode the whole chapter is written around.",
        trap:
          "The relief of a train having passed is what makes drivers pull straight out. The second train is the one that arrives then.",
        excerptKey: "multiple-tracks",
        sourceLabel: "SC Driver's License Manual - Section 6 Rules of the Road (p. 6-6)",
        sourceUrl: pg(65),
      },
      {
        id: "sc_s6_06",
        topic: "signs",
        question:
          "In a work zone, a flagger signals you to stop while the signed direction says to proceed. What do you do?",
        choices: [
          "Follow the sign, because signs are the legal control",
          "Proceed slowly past the flagger",
          "Follow the flagger's instruction",
          "Wait for a police officer to arrive",
        ],
        correctIndex: 2,
        explanation:
          "Work zone traffic may be controlled by a person with a sign or flag, and you must follow their instructions. A person directing traffic outranks the fixed signing.",
        context:
          "The reason is that the flagger can see the site and you cannot: an alternating one-way section, a reversing truck or a crew working in the lane can all make the posted arrangement wrong for the next thirty seconds. Work zone signs stay in force until you see the End Road Work sign, and endangering a highway worker carries a fine of five hundred to a thousand dollars even where nobody is hurt.",
        trap:
          "Signs feel like the authority because they are permanent. A flagger is a traffic control device in the same list, and a live one.",
        excerptKey: "flagger",
        sourceLabel: "SC Driver's License Manual - Section 6 Rules of the Road (p. 6-8)",
        sourceUrl: pg(67),
      },
      {
        id: "sc_s6_07",
        topic: "signals",
        question:
          "You approach an intersection where the signal is showing a rapidly flashing yellow light. What are you permitted to do?",
        choices: [
          "Nothing until it changes to green",
          "Proceed at the posted limit, since flashing yellow has no legal effect",
          "Stop, then proceed as at a four-way stop",
          "Proceed through the intersection, but only with caution",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow lets you go through the intersection or past the signal, but only with caution. You slow down and be ready to stop for anything that may enter.",
        context:
          "It contrasts with a flashing red, which means exactly what a stop sign means: stop, then proceed when it is safe. Flashing signals usually appear late at night, when a full cycle would hold people at an empty junction, or when a signal has partly failed. Cross traffic will often be facing a flashing red, so it will be stopping while you are not.",
        trap:
          "Because it needs no stop, a flashing yellow gets treated as a green. The legal wording is that you may proceed only with caution.",
        excerptKey: "code-flashing-yellow",
        sourceLabel: "SC Code Section 56-5-1000 - Flashing signals",
        sourceUrl: C5,
      },
      {
        id: "sc_s6_08",
        topic: "signals",
        question:
          "There is a stop line painted well back from a crosswalk at a signal. Where do you stop?",
        choices: [
          "On the crosswalk, so you can see the cross street",
          "At the stop line, which must be obeyed first",
          "Between the two, so you block neither",
          "Wherever the vehicle ahead of you stopped",
        ],
        correctIndex: 1,
        explanation:
          "Where a stop line is painted before the crosswalk, the stop line is what you obey. Only if there is no apparent crosswalk do you simply stop before entering the intersection.",
        context:
          "Stop lines are often set unusually far back on purpose, to give trucks and buses room to swing a turn into or out of the cross street. The crosswalk behind you belongs to pedestrians, who may be entering it whether or not it is marked, and you must yield to anyone in one. Creeping forward for a better view is not permitted where a line is painted.",
        trap:
          "Rolling up to the crosswalk for visibility is the instinct that this rule exists to override.",
        excerptKey: "stop-line-first",
        sourceLabel: "SC Driver's License Manual - Section 6 Rules of the Road (p. 6-15)",
        sourceUrl: pg(74),
      },
      {
        id: "sc_s6_09",
        topic: "signals",
        question:
          "Your electrical system has failed and you need to signal a right turn by hand. What is the correct arm position?",
        choices: [
          "Hand and arm extended upward",
          "Hand and arm extended horizontally",
          "Hand and arm extended downward",
          "Arm waved repeatedly out of the window",
        ],
        correctIndex: 0,
        explanation:
          "Right turn is arm out and bent upward. Horizontal is a left turn, and downward means stopping or slowing.",
        context:
          "The three signals are worth knowing even with working lights, because cyclists use the same set and South Carolina expects them to. A rider signalling downward with the left arm is slowing, not turning left. The manual also notes that a cyclist may be unable to signal at all if the road or the traffic needs both hands on the handlebars.",
        trap:
          "Upward and downward are easy to reverse under pressure, and downward is the one that means slowing rather than turning.",
        excerptKey: "code-hand-signals",
        sourceLabel: "SC Code Section 56-5-2170 - Method of giving hand and arm signals",
        sourceUrl: C5,
      },
      {
        id: "sc_s6_10",
        topic: "signals",
        question:
          "A centre lane is marked with a solid yellow line on each side and a broken yellow line inside it, carrying left-turn arrows in both directions. What may you use it for?",
        choices: [
          "Passing slower traffic in either direction",
          "Driving in it for up to a quarter of a mile before your turn",
          "Waiting to merge into either flow of traffic",
          "Preparing for or making a left turn, or a U-turn where one is permitted",
        ],
        correctIndex: 3,
        explanation:
          "A two-way left turn lane is only for preparing to make or making a left turn out of or into the road, or a U-turn where one is legal. It is not a travel lane.",
        context:
          "Both directions share it, so a driver coming the other way may be sitting in it a short distance ahead waiting to turn. That is why the law bars using it as a running lane or a merging lane: two drivers using it as one would meet head on. You enter it close to your turn, not several hundred yards out.",
        trap:
          "It looks like a convenient place to wait for a gap when joining traffic from a driveway, and using it that way is expressly prohibited.",
        excerptKey: "code-two-way-left-turn-lane",
        sourceLabel: "SC Code Section 56-5-2120 - Required position and method of turning",
        sourceUrl: C5,
      },
      {
        id: "sc_s6_11",
        topic: "speed",
        question:
          "The posted limit is 55 and there is dense fog. What does the law require?",
        choices: [
          "Nothing extra; the posted limit applies in all conditions",
          "Turn on your hazard flashers and hold the limit",
          "Drive at an appropriate reduced speed for the conditions",
          "Stop on the shoulder until the fog clears",
        ],
        correctIndex: 2,
        explanation:
          "The Code requires an appropriate reduced speed whenever a special hazard exists because of weather or highway conditions, regardless of what is posted.",
        context:
          "The same duty applies approaching and crossing an intersection or a railway crossing, going into and around a curve, approaching a hillcrest, and on a narrow bridge or a narrow or winding road. In fog you also use low beams rather than high, because high beams reflect off the water droplets and make it harder to see. Hazard flashers are for a stopped or disabled vehicle, not for driving.",
        trap:
          "Driving the posted number in fog feels legally safe, and it is not. The limit is a ceiling for ideal conditions only.",
        excerptKey: "code-speed-reduced",
        sourceLabel: "SC Code Section 56-5-1520 - General rules as to maximum speed limits",
        sourceUrl: C5,
      },
      {
        id: "sc_s6_12",
        topic: "speed",
        question:
          "When does a school zone's lower speed limit apply?",
        choices: [
          "When the lights are flashing or children are present",
          "Only on school days between 8 a.m. and 4 p.m.",
          "Only when a crossing guard is on duty",
          "All day, every day of the year",
        ],
        correctIndex: 0,
        explanation:
          "The reduced limit is in force when the zone's lights are flashing or when children are present. Either condition is enough on its own.",
        context:
          "The children-present half of the rule is what makes school zones catch people out, because it applies outside term time and outside the posted hours - an after-school activity or a summer programme puts children on the footway with the lights off. Where a school crossing has a traffic patrol, you stop and yield if you are signalled to do so.",
        trap:
          "Watching only for the flashing lights misses the second condition, which is the one an officer will point to.",
        excerptKey: "school-zone-speed",
        sourceLabel: "SC Driver's License Manual - Section 10 Sharing the Road (p. 10-2)",
        sourceUrl: pg(111),
      },
      {
        id: "sc_s6_13",
        topic: "speed",
        question:
          "You are convicted of endangering a highway worker in a work zone, and the worker was not injured. What is the fine?",
        choices: [
          "Not more than $100",
          "A flat $250",
          "Not more than $2,500 and not less than $1,500",
          "Not less than $500 and not more than $1,000",
        ],
        correctIndex: 3,
        explanation:
          "Where the highway worker suffers no physical injury, the fine runs from five hundred to one thousand dollars. Injury raises the penalty further.",
        context:
          "Work zones stack penalties on top of ordinary speeding: you can be fined and have points assessed for endangering a worker as well as for the speed itself. The manual's practical advice is simpler than the statute - cut your speed, be ready to stop suddenly, do not tailgate, and keep obeying the work zone signs until the End Road Work sign appears.",
        trap:
          "Guessing an ordinary traffic-fine figure in the low hundreds understates this by a factor of several.",
        excerptKey: "code-work-zone-fine",
        sourceLabel: "SC Code Section 56-5-1535 - Endangerment of a highway worker; penalties",
        sourceUrl: C5,
      },
      {
        id: "sc_s6_14",
        topic: "rules",
        question:
          "Besides being fined, what else can happen to you for endangering a highway worker in a work zone?",
        choices: [
          "Your vehicle can be impounded at the scene",
          "Points can be assessed against your driving record",
          "You must complete a defensive driving course before driving again",
          "Nothing further; the fine is the whole penalty",
        ],
        correctIndex: 1,
        explanation:
          "The manual warns that endangering a highway worker can bring both a fine and points against your driving record. The points are what put a young driver's licence at risk.",
        context:
          "Six points suspends a permit, conditional or special restricted licence, and twelve suspends an adult licence, so a work-zone offence is not simply a money penalty for a driver early in the graduated system. The behaviours the manual names as the risk are speeding, tailgating and not being ready to stop suddenly.",
        trap:
          "Thinking of a work-zone ticket as an expensive fine and nothing more misses the part that costs you the licence.",
        excerptKey: "work-zone-points",
        sourceLabel: "SC Driver's License Manual - Section 6 Rules of the Road (p. 6-9)",
        sourceUrl: pg(68),
      },
      {
        id: "sc_s6_15",
        topic: "emergencies",
        question:
          "The manual names three ways to avoid a collision or reduce its impact. What are they?",
        choices: [
          "Braking, sounding the horn, or flashing your lights",
          "Braking, swerving, or shifting to neutral",
          "Braking, steering, or using the parking brake",
          "Braking, steering, or accelerating",
        ],
        correctIndex: 3,
        explanation:
          "The three options are braking, steering and accelerating. Speeding up is a real option when the danger is behind or beside you and there is space ahead.",
        context:
          "Listing accelerating alongside the other two is the manual's way of breaking the assumption that braking is always the answer. Sometimes stopping is what puts you in the path of the danger - a vehicle closing from behind, a car drifting into your lane from the side. The choice depends on where the escape route is, which is why the manual keeps returning to leaving yourself space.",
        trap:
          "Accelerating feels like the wrong instinct in an emergency, so it is the option people leave out.",
        excerptKey: "three-options",
        sourceLabel: "SC Driver's License Manual - Section 9 Emergency Situations (p. 9-1)",
        sourceUrl: pg(104),
      },
      {
        id: "sc_s6_16",
        topic: "emergencies",
        question:
          "Your right wheels drop off the pavement onto a lower shoulder. What does the manual tell you to do?",
        choices: [
          "Slow down gradually when it is safe, then steer gently back onto the pavement",
          "Steer back onto the pavement immediately before you lose control",
          "Brake hard to stop on the shoulder",
          "Accelerate to climb the edge in one movement",
        ],
        correctIndex: 0,
        explanation:
          "You stay on the shoulder, ease your speed down when it is safe to do so, and then steer gently back up onto the road surface.",
        context:
          "The danger is the lip between the shoulder and the pavement. Yanking the wheel at speed makes the front tyre climb the edge suddenly and throws the car across the road into oncoming traffic, which is how a recoverable drift becomes a head-on collision. Slowing first turns the edge into a small step rather than a launch ramp.",
        trap:
          "The instinct to get back on the road immediately is exactly the movement that causes the crash.",
        excerptKey: "drop-off-recovery",
        sourceLabel: "SC Driver's License Manual - Section 9 Emergency Situations (p. 9-3)",
        sourceUrl: pg(106),
      },
      {
        id: "sc_s6_17",
        topic: "emergencies",
        question:
          "You are braking on an icy road in a car with anti-lock brakes. What should you do?",
        choices: [
          "Pump the brakes gently",
          "Brake hard once, then release",
          "Apply steady pressure and let the brakes pulse",
          "Use the parking brake to help slow the car",
        ],
        correctIndex: 2,
        explanation:
          "With ABS you apply steady pressure and hold it. The pulsing you feel through the pedal is the system working, not a fault. Pumping is only for older cars with standard brakes, and then gently.",
        context:
          "ABS only works while you keep the pressure on, so lifting off because the pedal shudders defeats it. Winter conditions in South Carolina catch drivers out because bridges, overpasses and lightly travelled roads freeze first, and ice can be waiting in shady spots even when the temperature is above freezing. Cruise control has no place on a slippery road.",
        trap:
          "Pumping is what a generation of drivers was taught, and it is the wrong technique with ABS.",
        excerptKey: "winter-skid-brakes",
        sourceLabel: "SC Driver's License Manual - Section 11 Special Driving Situations (p. 11-8)",
        sourceUrl: pg(133),
      },
      {
        id: "sc_s6_18",
        topic: "emergencies",
        question:
          "You have a minor collision with no injuries and your car still drives, but it is blocking a lane. What does the law expect?",
        choices: [
          "Leave everything exactly where it is until police arrive",
          "Move only if the other driver agrees in writing",
          "Push the vehicles apart but stay in the lane",
          "Make every reasonable effort to move a driveable vehicle off the roadway",
        ],
        correctIndex: 3,
        explanation:
          "Where a crash caused damage to vehicles only and one of them is obstructing traffic, the driver must make every reasonable effort to move a vehicle that can be driven safely off the roadway.",
        context:
          "The rule exists because a blocked lane is where the second, worse collision happens. It is limited to damage-only crashes - where anyone is injured or killed you stop at the scene, or as near to it as you can, and stay there until you have given your name, address and registration number and rendered whatever aid is reasonable.",
        trap:
          "Leaving everything untouched for the police is standard advice in some places and is the opposite of what South Carolina asks for in a damage-only crash.",
        excerptKey: "code-collision-move-vehicle",
        sourceLabel: "SC Code Section 56-5-1220 - Duties of driver involved in accident resulting in damage",
        sourceUrl: C5,
      },
      {
        id: "sc_s6_19",
        topic: "parking",
        question:
          "Which of these is prohibited outright, with no distance to measure?",
        choices: [
          "Parking within 25 feet of a driveway",
          "Stopping on the roadway side of a vehicle already parked at the kerb",
          "Parking facing against the flow of traffic on a one-way street",
          "Stopping within 40 feet of a bus stop",
        ],
        correctIndex: 1,
        explanation:
          "Double parking - stopping or standing on the roadway side of a vehicle already parked at the kerb - is on the flat prohibition list, along with parking on a sidewalk, within an intersection or on a crosswalk.",
        context:
          "The Code's parking rules come in two kinds. Some are absolute: no sidewalk, no intersection, no crosswalk, no double parking. Others are measured, and those are the ones people memorise - fifteen feet from a hydrant, twenty from a crosswalk at an intersection, thirty from a stop sign or signal, fifty from the nearest rail. Outside a business or residential district there is a third rule again, based on leaving a clear view.",
        trap:
          "Hazard lights and a short errand do not make double parking legal. The prohibition has no time allowance attached.",
        excerptKey: "code-no-stopping-places",
        sourceLabel: "SC Code Section 56-5-2530 - Stopping, standing, or parking prohibited in specified places",
        sourceUrl: C5,
      },
      {
        id: "sc_s6_20",
        topic: "parking",
        question:
          "You have to stop on a rural highway outside any town. What does the law require of where you leave the vehicle?",
        choices: [
          "Enough clear road opposite it for other vehicles to pass, and a clear view of it from 200 feet in each direction",
          "At least one full lane free, whatever the sightlines",
          "Hazard lights on, with no requirement about position",
          "A warning triangle placed 100 feet behind it",
        ],
        correctIndex: 0,
        explanation:
          "Outside a business or residential district, an unobstructed width of highway must be left opposite the standing vehicle for other traffic to pass, and the vehicle must be visible from two hundred feet in each direction.",
        context:
          "The visibility half is what rules out stopping just over a hillcrest or round a bend, even where the shoulder is wide. Rural roads are exactly where a stopped vehicle is hit, because approach speeds are high and the sightlines are short. If you can get further along to a place with a clear view in both directions, that is what the rule is asking for.",
        trap:
          "A generous shoulder feels like it satisfies the rule on its own. The two-hundred-foot sightline is a separate requirement.",
        excerptKey: "code-parking-outside-district",
        sourceLabel: "SC Code Section 56-5-2510 - Stopping, standing, or parking outside of business or residential district",
        sourceUrl: C5,
      },
      {
        id: "sc_s6_21",
        topic: "parking",
        question:
          "You are parallel parking. How far back do you go before you start turning the wheel towards the kerb?",
        choices: [
          "Until your rear bumper is level with the other car's rear bumper",
          "Until you are one car length behind the space",
          "Until your front bumper is level with the rear bumper of the car you are parking behind",
          "Until you can no longer see the other car in your mirror",
        ],
        correctIndex: 2,
        explanation:
          "You keep backing until your front bumper lines up with the rear bumper of the vehicle ahead of the space. That is the pivot point the rest of the manoeuvre is built on.",
        context:
          "Getting the reference point wrong is what leaves you either stranded in the road or up against the kerb. The target when you finish is the same one the law sets: right-hand wheels parallel to the kerb and within eighteen inches of it. This is a scored exercise on the road skills test, so the sequence is worth practising until it is automatic.",
        trap:
          "Lining up the rear bumpers is the mirror image of the correct reference and puts you far too far forward.",
        excerptKey: "parallel-parking-bumper",
        sourceLabel: "SC Driver's License Manual - Section 7 General Driving (p. 7-12)",
        sourceUrl: pg(87),
      },
      {
        id: "sc_s6_22",
        topic: "rules",
        question:
          "When is passing on the right permitted in South Carolina?",
        choices: [
          "Whenever the vehicle ahead is under the speed limit",
          "Never; passing on the right is always illegal",
          "On any road with a paved shoulder",
          "Only where conditions allow it safely, and never by driving off the roadway",
        ],
        correctIndex: 3,
        explanation:
          "The Code permits passing on the right only where conditions allow the movement to be made safely, and it forbids doing it by leaving the roadway.",
        context:
          "The situations the manual has in mind are a vehicle ahead turning left, and a road wide enough for two lines of traffic moving your way. What is never allowed is using the shoulder or the verge to get around someone. There is a matching duty on the driver being passed: give way to the right on an audible signal, and do not speed up until the pass is complete.",
        trap:
          "Using the shoulder to get round a left-turning car feels like a small thing and is specifically named in the statute.",
        excerptKey: "code-pass-right-off-road",
        sourceLabel: "SC Code Section 56-5-1850 - When passing on the right is permitted",
        sourceUrl: C5,
      },
      {
        id: "sc_s6_23",
        topic: "rules",
        question:
          "A car behind you signals and begins to pass. What does the law require of you?",
        choices: [
          "Move onto the shoulder to give more room",
          "Give way to the right and do not increase your speed until the pass is complete",
          "Maintain your speed and position exactly",
          "Brake to shorten the pass",
        ],
        correctIndex: 1,
        explanation:
          "The driver being overtaken must give way to the right on an audible signal and must not speed up until the other vehicle has completely passed.",
        context:
          "Speeding up during a pass is dangerous because the passing driver committed to the manoeuvre based on the gap that existed when they started, and stretching it leaves them alongside for longer, in the oncoming lane on a two-lane road. Giving way to the right means easing over within your own lane, not leaving the roadway for the shoulder.",
        trap:
          "Braking to help sounds cooperative and it is unpredictable for the driver alongside you. Hold your speed steady and move right.",
        excerptKey: "code-being-passed",
        sourceLabel: "SC Code Section 56-5-1840 - Overtaking and passing vehicles proceeding in same direction",
        sourceUrl: C5,
      },
      {
        id: "sc_s6_24",
        topic: "rules",
        question:
          "You are leaving an interstate at a marked exit with a deceleration lane. Where do you slow down?",
        choices: [
          "In the deceleration lane, after signalling and moving into it at your travelling speed",
          "On the main roadway, before you reach the lane",
          "On the ramp itself, once you have left the deceleration lane",
          "Wherever the traffic behind you allows",
        ],
        correctIndex: 0,
        explanation:
          "You hold your speed while you are still on the main roadway, signal, move into the deceleration lane, and do your slowing there before the ramp.",
        context:
          "The deceleration lane sits to the right of the roadway and comes before the ramp proper. Braking on the main carriageway puts you slower than everything around you in a live lane, which is the situation the lane was built to avoid. Once you are in it, check the posted ramp speed - it is often far lower than the highway limit and it is set for the curve ahead.",
        trap:
          "Slowing early feels cautious and puts you in the path of traffic still travelling at highway speed.",
        excerptKey: "deceleration-lane",
        sourceLabel: "SC Driver's License Manual - Section 7 General Driving (p. 7-15)",
        sourceUrl: pg(90),
      },
      {
        id: "sc_s6_25",
        topic: "rules",
        question:
          "You are approaching an intersection where you intend to turn. Which lane should you be in, and where should you be looking?",
        choices: [
          "The centre lane, looking at the vehicle ahead",
          "Any lane, looking at the traffic signal",
          "The lane you find shortest, looking at the kerb",
          "The lane closest to the direction you want to turn, looking through the turn to the farthest point on your intended path",
        ],
        correctIndex: 3,
        explanation:
          "You get into the lane nearest the direction of your turn and stay in it, and you look through the turn to the farthest point you can see along the path you intend to take.",
        context:
          "Looking far through the turn is what keeps the car tracking smoothly, because you steer towards where you are looking. The lane rule has a matching pair on each side: turn right from the right-most part of your lane, and turn left from the left-most part, so you end up in the correct lane on the new road rather than swinging wide across it.",
        trap:
          "Watching the kerb or the car in front pulls your steering towards it. The manual wants your eyes on the exit of the turn.",
        excerptKey: "turn-lane-position",
        sourceLabel: "SC Driver's License Manual - Section 7 General Driving (p. 7-1)",
        sourceUrl: pg(76),
      },
      {
        id: "sc_s6_26",
        topic: "rightOfWay",
        question:
          "You are on a rural road approaching an intersection with no stop sign, no yield sign and no signal. What should you do?",
        choices: [
          "Maintain speed, since you have the right of way by default",
          "Slow down and be prepared to stop for crossing or oncoming traffic",
          "Stop completely, as at a four-way stop",
          "Sound your horn as you enter",
        ],
        correctIndex: 1,
        explanation:
          "An uncontrolled rural intersection has no default winner, so you slow down on the approach and be ready to stop for anything crossing or coming the other way.",
        context:
          "These intersections are dangerous because the absence of a sign reads as an absence of risk, and because sightlines are often blocked by crops, trees or a bank right up to the corner. Where two vehicles genuinely arrive together, the driver on the right has the right of way, but the manual's advice comes first: nobody should ever assume they automatically have it.",
        trap:
          "No sign does not mean priority. It means the decision has been left to both drivers.",
        excerptKey: "uncontrolled-intersection",
        sourceLabel: "SC Driver's License Manual - Section 11 Special Driving Situations (p. 11-6)",
        sourceUrl: pg(131),
      },
      {
        id: "sc_s6_27",
        topic: "rightOfWay",
        question:
          "Why does the manual say roundabouts are safer than ordinary intersections?",
        choices: [
          "They are always signalled",
          "They are always smaller",
          "They remove head-on and high-speed right-angle collisions",
          "They are the only intersection type where pedestrians are prohibited",
        ],
        correctIndex: 2,
        explanation:
          "A roundabout takes away the two crash types that hurt people most - head-on impacts and high-speed collisions at right angles - because all the traffic is travelling the same way around.",
        context:
          "Traffic runs counterclockwise and entering drivers yield to traffic already circulating. Because everyone is moving in the same rotational direction at a low speed, the impacts that remain are glancing ones. The rule that makes it work is the yield on entry, and it applies no matter how large the circle or how many lanes it has.",
        trap:
          "Roundabouts feel risky because they are unfamiliar, which makes the safety claim look like a trick. The geometry is the reason.",
        excerptKey: "roundabout-safer",
        sourceLabel: "SC Driver's License Manual - Section 7 General Driving (p. 7-8)",
        sourceUrl: pg(83),
      },
      {
        id: "sc_s6_28",
        topic: "rightOfWay",
        question:
          "The light in front of you turns green. What does the manual tell you to do first?",
        choices: [
          "Move off promptly so you do not hold up the traffic behind",
          "Flash your headlights to warn cross traffic",
          "Wait for the vehicle behind you to sound its horn",
          "Take a moment to make sure your path is clear and no traffic is still crossing",
        ],
        correctIndex: 3,
        explanation:
          "A green light gives you permission to go, not a guarantee that the intersection is empty. The manual asks you to avoid moving off immediately and to check your path is clear first.",
        context:
          "The same idea shows up as look left, then right, then left again before entering an intersection after a stop. The extra second is aimed at the driver running the red on the cross street, who arrives in the first moments after your light changes. It is also when pedestrians who started late are still finishing their crossing.",
        trap:
          "Pressure from the car behind is what pushes drivers into the intersection before they have looked. A held horn is not a reason to move.",
        excerptKey: "green-light-pause",
        sourceLabel: "SC Driver's License Manual - Section 7 General Driving (p. 7-5)",
        sourceUrl: pg(80),
      },
      {
        id: "sc_s6_29",
        topic: "safety",
        question:
          "When does the manual say you should NOT use your horn?",
        choices: [
          "Near a blind pedestrian",
          "When a driver ahead has not noticed the light change",
          "When a vehicle is drifting into your lane",
          "When you are about to be hit and there is no other option",
        ],
        correctIndex: 0,
        explanation:
          "The manual singles out blind pedestrians: a horn near someone navigating by sound can startle them into the road. Elsewhere a light tap is all that should be needed.",
        context:
          "The same caution applies around cyclists, where a sudden horn can make a rider swerve into your path, and around horses and other animals, where it can cause a bolt. The horn is a tool for getting attention, not for expressing an opinion, and the manual notes that using it inappropriately can scare or anger other road users.",
        trap:
          "Warning someone feels helpful, and for a blind pedestrian the warning is the hazard.",
        excerptKey: "horn-blind-pedestrians",
        sourceLabel: "SC Driver's License Manual - Section 8 Safe Driving Tips (p. 8-9)",
        sourceUrl: pg(102),
      },
      {
        id: "sc_s6_30",
        topic: "safety",
        question:
          "You have just had a serious argument and you are due to drive. What does the manual recommend?",
        choices: [
          "Drive, but keep the radio off to help you concentrate",
          "Give yourself time to cool off, and stay off the road until the feeling has passed",
          "Drive a familiar route only",
          "Drive with the windows down to stay alert",
        ],
        correctIndex: 1,
        explanation:
          "Strong emotion is treated as a fitness-to-drive problem in the same chapter as fatigue and alcohol. The advice is to take the time to cool off - a short walk or a nap - and to stay off the road until the symptoms have passed.",
        context:
          "Anger and worry narrow your attention onto the thing you are thinking about and away from the road, which is exactly what the manual defines a distraction as. It is also the state that turns into aggressive driving, which the manual describes as intentionally acting in a way that endangers other people or property, including speeding, tailgating and unsafe lane changes.",
        trap:
          "Distracting yourself with fresh air or a familiar route treats the symptom. The manual's answer is not to start the drive yet.",
        excerptKey: "emotions-cool-off",
        sourceLabel: "SC Driver's License Manual - Section 3 Be in Shape to Drive (p. 3-10)",
        sourceUrl: pg(41),
      },
    ],
  },
];
