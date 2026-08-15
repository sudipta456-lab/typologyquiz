// British Columbia practice sets 1-3.
//
// Every fact below was checked against ICBC's own material: the current
// "Learn to drive smart: your guide to driving safely" (the guide the Class 7L
// knowledge test is written from - the edition read here states the law as of
// March 2026), ICBC's Get your L / Get your N / Graduated licensing pages, and
// ICBC's own "Before you take your knowledge test" tip sheet. Where the guide
// states a rule only as a sign caption, only as a table, or not at all, the
// Motor Vehicle Act (RSBC 1996 c.318, Part 3) on bclaws.gov.bc.ca is cited
// instead and named as such.
//
// Five things are worth naming up front, because a learner arriving from
// Alberta, Ontario or a US state will get them wrong.
//
// 1. FLASHING GREEN. In B.C. a flashing green circular light is a
//    pedestrian-controlled light: the cross street faces a stop sign and a
//    pedestrian may push a button to change it. It is NOT an advance left turn.
//    In Alberta and Ontario the same lamp means the opposite - a protected
//    left. B.C. uses a flashing green ARROW for that.
// 2. SCHOOL BUS. Flashing red lights stop traffic in BOTH directions, and B.C.
//    states no distance in metres anywhere - s.149 says only that you stop
//    before reaching the bus, so metre figures circulating for B.C. are
//    imported from other provinces. Every school bus item here is set on an
//    UNDIVIDED road on purpose: official B.C. sources disagree about a divided
//    highway (the Ministry's TranBC has told readers oncoming traffic across a
//    curbed median must stop; DriveSmartBC reads a divided highway as two
//    separate highways), and s.149 contains no median exception either way.
// 3. TWENTY. B.C. has a third default speed almost nobody carries in their
//    head: 20 km/h in a lane or alleyway inside a municipality.
// 4. PASSING A VULNERABLE ROAD USER. 1.0 m normally, 1.5 m where the limit is
//    above 50 km/h, 0.5 m if the person is on a sidewalk or in a protected
//    cycle lane. Three numbers, and which one applies depends on the limit.
// 5. FOLLOWING DISTANCE. B.C. teaches TWO seconds as the baseline, not three -
//    three on high-speed roads, four in bad conditions, three behind a large
//    vehicle or a motorcycle.
//
// Four disagreements between official B.C. sources shaped what is NOT asked
// here, and they are worth naming so nobody re-adds the questions later.
//
//  - LANE SPEED. The guide states flatly that "20 km/h is the maximum speed
//    limit in a lane or alleyway within municipalities unless otherwise
//    posted." MVA s.146 (8) and (11) make that a rule only in a municipality
//    that has passed a bylaw for lanes not more than 8 m wide - though s.146
//    (10) then says no signs are required. The exam is written from the guide,
//    so the item follows the guide and the trap note says where the statute is
//    narrower.
//  - PARKING SETBACKS. The guide says "within six metres of a crosswalk or
//    intersection." The Act has no 6 m intersection setback at all - s.189 (1)
//    (c) says only "in an intersection" - and states the crosswalk rule as 6 m
//    from the APPROACH SIDE. No question is keyed on that six. The figures both
//    sources agree on are the ones tested: 5 m from a hydrant, 15 m from the
//    nearest rail, 30 cm from the curb.
//  - TRAFFIC CIRCLES. The guide tells you on the same page both to "yield to
//    any traffic in the traffic circle" and, where there are no signs, to
//    "treat it as an uncontrolled intersection" - which point in opposite
//    directions when a vehicle is entering on your right. B.C. case law has
//    applied s.173 (1) against a driver already inside an unsigned circle. So
//    the item here is keyed on the presence or absence of a sign, never on the
//    word "traffic circle" versus "roundabout".
//  - MOVE OVER. The Regulations and the guide give the light colours as red,
//    blue, white or amber; gov.bc.ca and the RCMP say red, blue or yellow.
//    The item tests the two SPEEDS, which every source agrees on, and does not
//    ask you to recite a colour list.
//
// Questions are original. No handbook sentence is reproduced as a question, no
// item is lifted from a practice-test site, and the explanation, context and
// trap notes are written from scratch. Where a number appears (30 km/h, 5 m,
// 40 out of 50), it is the number ICBC or the statute publishes, and sourceUrl
// points at the official page so the learner reads the authoritative wording on
// ICBC's or the King's Printer's own site.

import type { DrivingTestSet } from "../types";

// Official pages, each one actually fetched and read while writing these items.
const GUIDE = "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart";
const GUIDE_PDF = "https://www.icbc.com/assets/en/63cHBOAVpOAQGOOMBFhFbL/driver-full.pdf";
const GET_L = "https://www.icbc.com/driver-licensing/new-drivers/Get-your-L";
const GET_N = "https://www.icbc.com/driver-licensing/new-drivers/Get-your-N";
const GLP = "https://www.icbc.com/driver-licensing/new-drivers/Graduated-licensing";
const TIPSHEET = "https://www.icbc.com/assets/en/4zwylo9j9OaOX2I7Q8Epat/knowledge-test-tip-sheet.pdf";
const mva = (section: string) =>
  `https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section${section}`;

export const britishcolumbiaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Set 1 · First Drive in B.C.",
    difficulty: "starter",
    description:
      "Thirty warm-up questions on the rules you meet in your first hour on a B.C. road: what the shapes mean, who releases the brake first, and the handful of numbers ICBC's 50-question knowledge test expects you to know cold.",
    questions: [
      {
        id: "bc_s1_01",
        topic: "signs",
        question:
          "B.C. reserves one sign shape for one message. What is a red eight-sided sign telling you to do?",
        choices: [
          "Slow down and carry on if nothing is coming",
          "Stop completely, then go on only when it is safe",
          "Give way to traffic already on the cross street",
          "Stop only if another road user is close enough to matter",
        ],
        correctIndex: 1,
        explanation:
          "The octagon is kept for STOP and nothing else, and the stop it asks for is a real one - the wheels have to stop turning. Once stopped, moving off is a second, separate decision you make when the way is genuinely clear.",
        context:
          "B.C. builds meaning into a sign's shape and colour so you can identify it from behind, in the dark or under road spray, before you can read a word of it. The octagon is stop, the downward triangle is yield, the yellow diamond warns of something ahead, and fluorescent yellow-green marks schools. Regulatory signs carry the force of law: ignoring one is an offence under the Motor Vehicle Act, not just poor form.",
        trap:
          "\"Slow down and carry on\" describes a yield sign. An empty cross street never converts a stop sign into a yield sign.",
        excerptKey: "stop-sign-meaning",
        sourceLabel: "Learn to drive smart - Chapter 3, regulatory signs",
        sourceUrl: GUIDE,
        commonlyMissed: false,
      },
      {
        id: "bc_s1_02",
        topic: "speed",
        question:
          "You turn onto a residential street inside a B.C. city and there is no speed limit sign anywhere. What limit applies?",
        choices: ["30 km/h", "50 km/h", "60 km/h", "80 km/h"],
        correctIndex: 1,
        explanation:
          "B.C. sets a built-in limit of 50 km/h on a highway inside a municipality, so an unsigned city street is a 50 zone. Signs are only needed when the municipality wants something other than 50 - which is why some streets are posted at 30 or 40.",
        context:
          "B.C. gives you three defaults that apply when no sign says otherwise: 50 km/h within cities and towns, 80 km/h outside them, and 20 km/h in a lane or alleyway inside a municipality. Any posted sign overrides all three, and municipalities may set their own numbers. The posted figure is the maximum for ideal conditions, not a target - bare, dry pavement and good visibility.",
        trap:
          "40 km/h feels plausible because several B.C. municipalities have adopted it on residential streets, but that only binds you where it is actually posted.",
        excerptKey: "default-speed-limits",
        sourceLabel: "Learn to drive smart - Chapter 5, appropriate speeds",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_03",
        topic: "signals",
        question:
          "You are approaching an intersection where the round green light is flashing. In British Columbia, what does that mean?",
        choices: [
          "It is a pedestrian-controlled light - approach ready to stop and go on only if the intersection is clear",
          "You have a protected left turn and oncoming traffic is stopped",
          "The signal has failed, so treat the intersection as a four-way stop",
          "Only buses may proceed on this signal",
        ],
        correctIndex: 0,
        explanation:
          "A flashing green circle in B.C. marks a crosswalk or intersection where pedestrians control the light with a button. You still have to approach ready to stop, because someone standing at the button can turn it yellow and then red under you.",
        context:
          "This is the single biggest difference between B.C. and the rest of Canada. In Alberta and Ontario a flashing green circle is an advance left turn. In B.C. it is a pedestrian-controlled light: traffic on the side street is facing a stop sign, and a pedestrian may change your green at any moment. B.C. does use a flashing green ARROW for a protected left, so the arrow, not the circle, is the one that protects you.",
        trap:
          "If you learned to drive anywhere else in Canada, your instinct says \"advance left.\" Acting on that instinct in B.C. means turning left across traffic that has a green light.",
        excerptKey: "flashing-green-bc",
        sourceLabel: "Learn to drive smart - Chapter 3, traffic lights",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s1_04",
        topic: "rightOfWay",
        question:
          "You and a vehicle to your right reach an uncontrolled intersection at the same moment. Who goes first?",
        choices: [
          "Whoever is travelling straight through",
          "You, because the other driver is approaching from a side street",
          "The vehicle on your right",
          "Whoever signals their intention first",
        ],
        correctIndex: 2,
        explanation:
          "When two vehicles arrive together and nothing controls the intersection, the vehicle on the left yields to the vehicle on the right. Going straight buys you nothing here, and neither does signalling early.",
        context:
          "An uncontrolled intersection has no sign and no light, and B.C. decides it in two steps. If one vehicle clearly got there first, that vehicle goes. Only if the arrival is a genuine tie does position break it, and then it is the driver on the left who gives way. The Motor Vehicle Act says the same thing for two vehicles entering from different highways at approximately the same time.",
        trap:
          "Uncontrolled intersections are usually quiet residential corners, which is exactly why drivers roll through them assuming nothing is coming.",
        excerptKey: "uncontrolled-yield-right",
        sourceLabel: "Learn to drive smart - Chapter 4, uncontrolled intersections",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_05",
        topic: "rules",
        question:
          "You are stopped at a steady red light and want to turn right. What does B.C. allow?",
        choices: [
          "Turn without stopping, provided the way looks clear",
          "Turn only once a green arrow appears",
          "Turn only where a sign expressly permits it",
          "Turn after a complete stop, unless a sign forbids it, yielding to everyone lawfully proceeding",
        ],
        correctIndex: 3,
        explanation:
          "Right on red is permitted in B.C. by default. Two things attach: you must actually come to a full stop first, and there must be no sign taking the permission away. After that you give way to pedestrians and to traffic moving on the green.",
        context:
          "B.C. treats red as stop and stay stopped, with turns as the exception. Right on red is allowed after a full stop unless a sign forbids it. A left on red is also allowed on the same terms, but only onto a one-way street heading the way you are turning. A red arrow removes the permission for that movement entirely.",
        trap:
          "\"Clear enough to go\" is not the test. If you never actually stopped, the turn is unlawful even on a deserted road at 3 a.m.",
        excerptKey: "steady-red-turns",
        sourceLabel: "Learn to drive smart - Chapter 3, traffic lights",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_06",
        topic: "safety",
        question:
          "In good weather on dry pavement, what is the minimum following distance B.C. teaches?",
        choices: ["One second", "One and a half seconds", "Three seconds", "Two seconds"],
        correctIndex: 3,
        explanation:
          "B.C.'s baseline is two seconds of space in front in good weather and good road conditions. That is the floor, not the target - the guide immediately tells you to stretch it when the road or the vehicle ahead gives you reason to.",
        context:
          "Two seconds is only the starting point. Go to three seconds on high-speed roads, and to four in bad weather or on uneven or slippery surfaces. Give three seconds behind a large vehicle that blocks your view, behind a motorcycle that can stop far shorter than you can, when someone is tailgating you, and on unpaved roads where dust and gravel are in the air.",
        trap:
          "Drivers who learned the three-second rule elsewhere often assume B.C. teaches three as the baseline. It teaches two, then names the situations that push it to three or four.",
        excerptKey: "two-second-rule",
        sourceLabel: "Learn to drive smart - Chapter 5, space in front",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s1_07",
        topic: "sharing",
        question:
          "On an undivided two-lane road, a school bus coming towards you stops and its alternating red lights start flashing. What must you do?",
        choices: [
          "Carry on past at reduced speed, since the children get off on the far side",
          "Slow to 30 km/h and continue past",
          "Stop before reaching the bus",
          "Stop only if you are behind the bus",
        ],
        correctIndex: 2,
        explanation:
          "Flashing red lights on a school bus stop traffic in both directions. Meeting the bus head-on on an undivided road, you stop before reaching it - the same duty a driver behind the bus has.",
        context:
          "The bus driver usually warns you first with alternating flashing amber lights, so amber is your cue to start slowing. B.C. states no distance in metres for this stop: the Motor Vehicle Act says only that you stop before reaching the bus and do not move off until the bus moves or its driver signals that it is safe. Children cross in front of the bus where its driver can see them, which is exactly where an impatient driver would go.",
        trap:
          "Metre figures for stopping behind a school bus circulate widely for B.C. and none of them is in B.C. law - the 20 m figure people quote comes from Ontario, Nova Scotia and New Brunswick.",
        excerptKey: "school-bus-stop-either-direction",
        sourceLabel: "Learn to drive smart - Chapter 6, school buses",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s1_08",
        topic: "signs",
        question: "What does a yellow diamond-shaped sign tell you?",
        choices: [
          "There is a possible hazard ahead",
          "You are entering a construction zone",
          "A driving law applies from this point on",
          "A service or destination is nearby",
        ],
        correctIndex: 0,
        explanation:
          "Most warning signs in B.C. are yellow diamonds, and they warn of something ahead: a curve, a crossing, a narrowing, a change in surface. They tell you to prepare, not that a specific law has just started.",
        context:
          "The colour does as much work as the shape. Yellow diamonds warn; orange diamonds warn about construction; fluorescent yellow-green marks school crossings and school areas; white rectangles with black lettering carry regulations; blue and green give services and destinations. A warning sign is often paired with a smaller advisory speed tab, and that advisory number is a recommendation for the hazard, not a posted limit.",
        trap:
          "Orange is the construction colour, not yellow. A yellow diamond can warn of anything from a deer crossing to an opening bridge.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Learn to drive smart - Chapter 3, warning signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_09",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in B.C.?",
        choices: [
          "No closer than three metres",
          "No closer than five metres",
          "No closer than six metres",
          "No closer than fifteen metres",
        ],
        correctIndex: 1,
        explanation:
          "Five metres, measured from the point at the curb beside the hydrant. It is the smallest of B.C.'s parking clearances, which is exactly why people mix it up with the six-metre ones.",
        context:
          "B.C.'s parking clearances come in three sizes and they stack in your memory badly unless you group them. Five metres from a fire hydrant. Six metres from a crosswalk, intersection, stop sign or traffic light. Fifteen metres from the nearest rail of a railway crossing. On top of those, never park on a sidewalk or boulevard, across a driveway or back lane, in a bicycle lane, on a bridge or in a tunnel, or where you block a traffic sign from view.",
        trap:
          "Six metres is the more common number in the list, so it gets applied to the hydrant by reflex. The hydrant is the five-metre one - and it is the figure the guide and the Motor Vehicle Act state identically, which the six-metre ones are not.",
        excerptKey: "parking-hydrant-5m",
        sourceLabel: "Learn to drive smart - Chapter 4, parking tips and rules",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_10",
        topic: "signals",
        question: "A steady yellow light comes on as you approach an intersection. What is required?",
        choices: [
          "Stop before the intersection, unless you cannot do it safely",
          "Speed up to clear the intersection before the red",
          "Continue at your current speed - yellow means proceed with caution",
          "Stop only if a pedestrian is waiting to cross",
        ],
        correctIndex: 0,
        explanation:
          "Yellow means the signal is about to turn red, and the requirement is to stop before entering the intersection. The only escape is that you cannot make that stop safely - typically because you are too close and someone is right behind you.",
        context:
          "B.C. teaches you to make this decision before the light changes by watching for a stale green: one that has been green a long time and is about to end. Pick your point of no return on the approach - the last place you could stop safely - and past that point you keep going. If you are already in the intersection waiting to turn left when the light goes yellow, you are entitled to complete the turn.",
        trap:
          "\"I can make it\" is a decision about speed, not safety. Accelerating on a yellow is the classic way to arrive in an intersection at the same moment as the cross traffic that just got green.",
        excerptKey: "yellow-light-rule",
        sourceLabel: "Learn to drive smart - Chapter 4, intersections controlled by traffic lights",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_11",
        topic: "licensing",
        question: "How many questions are on ICBC's passenger-vehicle knowledge test, and how many must you get right?",
        choices: [
          "30 questions, 25 correct",
          "40 questions, 32 correct",
          "50 questions, 45 correct",
          "50 questions, 40 correct",
        ],
        correctIndex: 3,
        explanation:
          "The passenger-vehicle knowledge test is 50 multiple-choice questions and you need 40 of them right - 80 per cent. ICBC publishes both figures, on the Get your L page and in its knowledge test tip sheet.",
        context:
          "ICBC sets 80 per cent as the pass mark on every one of its knowledge tests; only the length changes with the class. The passenger-vehicle test allows 45 minutes, and it can end early - it finishes as soon as you have enough right answers to pass or enough wrong ones to fail. You may skip a difficult question once and it comes back at the end. If you fail, you can try again after one day, and there is a fee each time.",
        trap:
          "The motorcycle test is 40 questions with 32 to pass, and the commercial Class 2/3/4 test is 35 with 28. Those are different tests - the car test is 50 and 40.",
        excerptKey: "test-pass-40-of-50",
        sourceLabel: "ICBC - Get your L, take the knowledge test",
        sourceUrl: GET_L,
      },
      {
        id: "bc_s1_12",
        topic: "rules",
        question: "You are in a designated turn lane and the intersection is right in front of you. What may you not do?",
        choices: [
          "Follow the arrow painted in your lane",
          "Complete the turn the lane-use sign shows",
          "Move into or out of the designated lane while you are in the intersection",
          "Signal before you begin the turn",
        ],
        correctIndex: 2,
        explanation:
          "Once you are in a designated lane you must follow the direction the arrows show, and you may not move into or out of that lane while you are inside the intersection. The lane choice has to be made before you get there.",
        context:
          "Lane-use signs sit above the lane or beside it before the intersection, and the painted arrows repeat the message on the road. B.C. asks you to sort out your lane in advance for the same reason it tells you not to change lanes at an intersection at all: a driver who swerves mid-intersection surprises everyone reading the lane markings. Turn control signs mounted directly above the intersection work the same way - you must follow the arrow.",
        trap:
          "Realising you are in the wrong lane is not a licence to fix it inside the intersection. Complete the movement your lane requires and correct it on the next block.",
        excerptKey: "lane-use-signs",
        sourceLabel: "Learn to drive smart - Chapter 3, lane use signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_13",
        topic: "speed",
        question: "A playground zone sign shows 30 km/h and no times underneath. When does that limit apply?",
        choices: [
          "Only between 8 a.m. and 5 p.m. on school days",
          "Every day, from dawn until dusk",
          "Only when children are visible in the playground",
          "Twenty-four hours a day, all year",
        ],
        correctIndex: 1,
        explanation:
          "A B.C. playground zone runs every day from dawn to dusk. Weekends and school holidays count, and the sign does not need to say so - dawn to dusk is built into the rule.",
        context:
          "B.C.'s two 30 km/h zones look similar and run on completely different clocks. A school zone is 30 km/h between 8 a.m. and 5 p.m. on school days, or whatever extended hours the tab under the sign states. A playground zone is 30 km/h every day from dawn to dusk. The Motor Vehicle Act sets both figures out, and the practical difference is that a playground zone is live on a Sunday in July while a school zone is not.",
        trap:
          "Applying school-zone hours to a playground zone is the classic B.C. mistake. On a summer Saturday evening at 7 p.m. the playground zone is still in force and the school zone is not.",
        excerptKey: "playground-zone-30",
        sourceLabel: "Learn to drive smart - Chapter 3, school, playground and crosswalk signs",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s1_14",
        topic: "rightOfWay",
        question:
          "Four vehicles arrive at a four-way stop one after another. In what order do they move off?",
        choices: [
          "Whoever signals first",
          "The vehicles going straight, then those turning",
          "Clockwise from the northbound vehicle",
          "In the order they arrived and stopped, first to arrive first to go",
        ],
        correctIndex: 3,
        explanation:
          "At a four-way stop the first vehicle to arrive and come to a complete stop goes first, then the next, and so on. Arrival order is the whole rule when there is no tie.",
        context:
          "Only when arrivals tie do the tiebreakers matter, and B.C. gives two. If two vehicles arrive together side by side, the one on the right goes. If two arrive facing each other and one wants to turn left, the left-turner gives way to the one going straight. Every driver still has to make a complete stop first, so this is about who releases the brake, not who stops.",
        trap:
          "Arriving first is not enough - you have to have stopped. A driver who rolls in ahead of you has not taken their turn, they have committed an offence.",
        excerptKey: "four-way-stop-order",
        sourceLabel: "Learn to drive smart - Chapter 4, intersections controlled by stop signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_15",
        topic: "sharing",
        question:
          "You are passing a cyclist on a street posted at 50 km/h. What is the minimum space B.C. law requires?",
        choices: ["0.5 metre", "1.0 metre", "1.5 metres", "2.0 metres"],
        correctIndex: 1,
        explanation:
          "One metre is the minimum on a road posted at 50 km/h or less. The requirement is a legal minimum, not a courtesy - and if you cannot leave that much, you cannot pass yet.",
        context:
          "B.C. has three passing distances and the posted limit picks between them. On roads with limits above 50 km/h the minimum rises to 1.5 metres, because closing speed does the damage. If the person is on a sidewalk or in a protected cycle lane the minimum is 0.5 metre. The rule covers pedestrians and people on personal mobility devices too, not just cyclists, and you are allowed to cross a single solid yellow line to give a cyclist room when it is safe.",
        trap:
          "1.5 metres is not the general rule - it is the rule for roads posted above 50 km/h. On a 50 zone the number is one metre.",
        excerptKey: "passing-distance-vulnerable",
        sourceLabel: "Learn to drive smart - Chapter 5, space beside",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_16",
        topic: "signs",
        question: "What does a downward-pointing triangular sign require of you?",
        choices: [
          "Give the right-of-way to other vehicles and to crossing pedestrians",
          "Stop completely before going on",
          "Merge into the lane to your left",
          "Reduce speed to the number on the sign below",
        ],
        correctIndex: 0,
        explanation:
          "The downward triangle is YIELD. You may enter without stopping if nothing is coming, but you must slow, be ready to stop, and give way to traffic on the through road and to pedestrians.",
        context:
          "Yield and stop are different obligations that people blur together. A yield sign means the through road has priority and you wait for a safe gap; a stop sign means the wheels stop turning first, every time, and only then do you decide. B.C. puts yield signs where the geometry lets you merge at speed, such as a right-turn slip lane or a roundabout approach, and the Motor Vehicle Act requires a driver facing a yield sign to give way to all other traffic.",
        trap:
          "\"Yield\" is not \"stop if busy.\" You can be ticketed for failing to yield even if you stopped, when you then pulled out in front of someone.",
        excerptKey: "yield-sign-meaning",
        sourceLabel: "Learn to drive smart - Chapter 3, regulatory signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_17",
        topic: "safety",
        question: "How far ahead does B.C. want you to be scanning as you drive?",
        choices: [
          "As far as your headlights reach",
          "To the vehicle directly in front of you",
          "At least 12 seconds ahead",
          "About 30 metres",
        ],
        correctIndex: 2,
        explanation:
          "Twelve seconds ahead - roughly one to two blocks in the city and about half a kilometre on the highway. New drivers tend to stare at the pavement just past the bonnet, which is precisely how a hazard becomes a surprise.",
        context:
          "Scanning far ahead is one half of B.C.'s observation cycle; the other half is running the whole loop - well ahead, side to side, then the mirrors - every five to eight seconds. You should also be checking each mirror on about the same rhythm, and doing a shoulder check of at least 45 degrees before any change of lane or road position. Blind spot monitors and back-up cameras help but do not replace turning your head.",
        trap:
          "\"As far as your headlights reach\" is the night-driving rule for how fast you may go, not how far you should be looking. Twelve seconds is a time, so on a fast road it is a much longer distance.",
        excerptKey: "scan-12-seconds",
        sourceLabel: "Learn to drive smart - Chapter 5, observing ahead",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_18",
        topic: "impairment",
        question: "What actually lowers your blood alcohol content after you have been drinking?",
        choices: [
          "Strong coffee",
          "A large meal",
          "Time, and nothing else",
          "A cold shower and some exercise",
        ],
        correctIndex: 2,
        explanation:
          "Only time lowers your BAC. Coffee, food, cold showers and exercise change how awake you feel; none of them speeds up how fast your body clears alcohol.",
        context:
          "The guide gives a figure worth carrying: from a BAC of .08, Transport Canada says it takes about six hours for the body to return to zero. A glass of beer holds about as much alcohol as a glass of wine or an average cocktail, so switching drinks changes nothing. In B.C.'s Graduated Licensing Program the number that matters is not .08 at all - both the L and the N stage require zero blood alcohol and zero blood drug concentration.",
        trap:
          "A cold shower and a coffee make an impaired driver feel alert. Feeling alert and being unimpaired are not the same thing, and the roadside test measures the second one.",
        excerptKey: "only-time-sobers",
        sourceLabel: "Learn to drive smart - Chapter 7, facts about alcohol",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_19",
        topic: "signals",
        question: "A flashing red light is showing at an intersection. What does it require?",
        choices: [
          "Slow down and go through with caution",
          "Stop only if traffic is approaching on the cross street",
          "Treat it as a yield sign",
          "Come to a complete stop, then go on when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is a stop sign in light form. You stop completely, then move into the intersection when it is clear and safe - the same two-step you make at a stop sign.",
        context:
          "The flashing pair are easy to keep straight once you map them onto signs. Flashing red behaves like a stop sign; flashing yellow behaves like a warning, so you slow and proceed with caution while yielding to pedestrians. If a signal fails completely, or all four faces start flashing, B.C. tells you to treat the intersection as a four-way stop.",
        trap:
          "Flashing red and flashing yellow are not two shades of the same instruction. One requires a full stop; the other requires caution.",
        excerptKey: "flashing-red",
        sourceLabel: "Learn to drive smart - Chapter 3, traffic lights",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_20",
        topic: "rules",
        question: "Where must you stop at an intersection that has a marked stop line?",
        choices: [
          "Just before the stop line",
          "With your front bumper level with the crossing street",
          "Just past the crosswalk, so you can see",
          "Anywhere within the intersection, as long as you stop",
        ],
        correctIndex: 0,
        explanation:
          "If there is a stop line, you stop just before it. The line marks where you can be seen and where you are out of the crossing traffic's path.",
        context:
          "B.C. gives an ordered list for where to stop. Stop line first if there is one. If there is no stop line but there is a crosswalk, stop just before the crosswalk - and treat an unmarked crosswalk the same way you would a painted one. If there is no line, no crosswalk and no sidewalk, stop just before you enter the intersection at the point where you can see approaching traffic.",
        trap:
          "Creeping past the line for a better view puts your bumper in the crosswalk. Stop at the line first, then edge forward only if the view genuinely requires it.",
        excerptKey: "stop-position-line",
        sourceLabel: "Learn to drive smart - Chapter 4, stopping at intersections",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_21",
        topic: "emergencies",
        question: "Your vehicle has ABS and you need to stop as fast as possible. What do you do with the brake pedal?",
        choices: [
          "Pump it rapidly",
          "Squeeze gently to avoid triggering the system",
          "Press hard and hold it down until you stop",
          "Press hard, then release the moment you feel the pedal shudder",
        ],
        correctIndex: 2,
        explanation:
          "With ABS you apply continuous, firm, hard pressure and keep it there until the vehicle stops. The system releases and reapplies the brakes for you, far faster than a foot can.",
        context:
          "Pumping the pedal switches ABS off, so the one habit drivers were taught for older cars is the one that defeats it. Expect noise and a shudder through the pedal - that is the system working. ABS lets you brake and steer at the same time, which ordinary brakes will not, but it does not shorten your stopping distance and on gravel it can lengthen it. Without ABS, the technique is different: press hard but short of locking, and release and reapply if you feel a skid start.",
        trap:
          "Backing off when the pedal shudders is the commonest mistake. The shudder is the ABS cycling; lifting off wastes the stop.",
        excerptKey: "abs-technique",
        sourceLabel: "Learn to drive smart - Chapter 8, anti-lock braking systems",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_22",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light. Oncoming traffic is coming through the intersection. What must you do?",
        choices: [
          "Turn ahead of them if you have room, since you arrived first",
          "Yield to oncoming traffic and wait for a safe gap",
          "Edge into the intersection and force the gap",
          "Sound your horn and complete the turn",
        ],
        correctIndex: 1,
        explanation:
          "A green light gives you permission to enter the intersection, not priority over oncoming traffic. Turning left, you give way and wait for a gap that is genuinely big enough.",
        context:
          "The Motor Vehicle Act says the left-turning driver yields to traffic approaching from the opposite direction that is in the intersection or so close it is an immediate hazard. There is a second half to that rule people forget: once you have yielded and signalled and begun the turn, oncoming traffic must yield to you. So if the light goes yellow while you are waiting in the intersection, you are legally entitled to complete the turn.",
        trap:
          "Motorcycles and bicycles are the ones that get hit here. Both look further away and slower than they are, so the gap that feels comfortable often is not.",
        excerptKey: "left-turn-steady-green",
        sourceLabel: "Learn to drive smart - Chapter 4, intersections controlled by traffic lights",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_23",
        topic: "signs",
        question: "What is a fluorescent yellow-green sign used for in B.C.?",
        choices: [
          "Construction and maintenance work",
          "Schools, school zones and school crosswalks",
          "Reserved lanes and HOV lanes",
          "Highway exits and destinations",
        ],
        correctIndex: 1,
        explanation:
          "That deliberately unnatural yellow-green is reserved for school signs - school zones, school crosswalks and the warning signs for them. Nothing else on a B.C. road uses that colour.",
        context:
          "Giving schools their own colour means you can register the message before you read it, from a distance, in poor light. It fits B.C.'s broader system, where colour and shape carry meaning independently of the words: orange for construction, yellow for general warnings, white for regulations, blue and green for information. Remember that a school zone's 30 km/h limit only runs 8 a.m. to 5 p.m. on school days unless the sign gives extended hours.",
        trap:
          "Orange is construction. The yellow-green is schools, and it is used for both the zone sign and the crosswalk warning sign ahead of it.",
        excerptKey: "school-sign-colour",
        sourceLabel: "Learn to drive smart - Chapter 3, signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_24",
        topic: "parking",
        question: "You are parking parallel to a curb. How close to the curb must the vehicle be?",
        choices: [
          "Within 30 centimetres",
          "Within 50 centimetres",
          "Within one metre",
          "Close enough that no wheel touches the traffic lane",
        ],
        correctIndex: 0,
        explanation:
          "Thirty centimetres - about a foot. The Motor Vehicle Act sets the same figure and also requires you to park on the right side of the roadway with the right-hand wheels parallel to it.",
        context:
          "Parking a long way off the curb narrows the traffic lane and puts your door where a cyclist rides. B.C. pairs the 30-centimetre rule with a hill rule: set the parking brake, leave an automatic in park, and turn the wheels so the vehicle cannot roll into traffic if the brake lets go. An automatic goes in park; a manual goes in reverse facing downhill and first gear facing uphill or on the level.",
        trap:
          "Thirty centimetres is a legal maximum, not a suggestion. On the road test an examiner measures it, and a wide park is a marked fault.",
        excerptKey: "parking-30cm-curb",
        sourceLabel: "Learn to drive smart - Chapter 4, parking tips and rules",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_25",
        topic: "safety",
        question: "When must you do a shoulder check?",
        choices: [
          "Only when the mirrors show something",
          "Only when changing lanes on a highway",
          "Only when reversing",
          "Whenever you plan to change your direction or road position",
        ],
        correctIndex: 3,
        explanation:
          "Any change of direction or road position gets a shoulder check first - lane change, pulling out, moving right, turning. You look at least 45 degrees over the shoulder on the side you are moving towards.",
        context:
          "Mirrors cannot cover the blind spots beside the vehicle, and those are the dangerous ones - large enough to hide a cyclist or a motorcycle completely. B.C. treats even a slight move into the next lane as a lane change, so it earns the full sequence: mirror, signal, shoulder check. The same applies before you open your door to get out, which is one of the most common ways drivers injure cyclists.",
        trap:
          "Blind spot monitors and back-up cameras are aids, not substitutes. B.C. is explicit that they do not replace turning your head.",
        excerptKey: "shoulder-check-45",
        sourceLabel: "Learn to drive smart - Chapter 5, observing behind",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_26",
        topic: "sharing",
        question:
          "A vehicle ahead of you has stopped at a crosswalk. What does B.C. require of you?",
        choices: [
          "Sound your horn and pass on the left",
          "Pass on the right if there is space",
          "Do not pass it",
          "Pass slowly, keeping an eye on the crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "You do not pass a vehicle stopped at a crosswalk. It has almost certainly stopped for someone crossing, and that person is hidden from you by the very vehicle you would be passing.",
        context:
          "The Motor Vehicle Act puts this plainly: when a vehicle is slowing or stopped at a crosswalk or intersection to let a pedestrian cross, a driver coming up behind must not overtake and pass it. It is one of B.C.'s vision-block rules - the hazard is not what you can see but what the stopped vehicle is hiding. Pedestrians on your half of the road have the right-of-way in marked crosswalks and at intersections, marked or not.",
        trap:
          "Passing slowly is still passing. The pedestrian steps out from in front of the stopped vehicle at walking pace, and there is no room to react.",
        excerptKey: "no-pass-stopped-at-crosswalk",
        sourceLabel: "Learn to drive smart - Chapter 6, pedestrians",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s1_27",
        topic: "speed",
        question: "What does a white sign showing a number and the word MAXIMUM tell you?",
        choices: [
          "The highest legal speed when the road is bare and dry and visibility is good",
          "The speed most drivers travel on that road",
          "A speed you should hold steadily regardless of conditions",
          "A recommended speed you may exceed if traffic is moving faster",
        ],
        correctIndex: 0,
        explanation:
          "A posted maximum is the highest legal speed for ideal conditions - bare, dry pavement and good visibility. Rain, snow, fog or heavy traffic all mean the safe speed is lower than the sign.",
        context:
          "B.C. is careful to describe a posted limit as a ceiling under good conditions, not an entitlement. That has a practical consequence: you can be driving under the posted number and still be driving too fast for the conditions. The guide also warns the other way - driving much slower than surrounding traffic frustrates other drivers into risky passes, so the safest speed is rarely the slowest one.",
        trap:
          "An advisory speed on a yellow tab under a curve warning is a different thing again: that is a recommendation for the hazard, not a posted limit.",
        excerptKey: "speed-sign-meaning",
        sourceLabel: "Learn to drive smart - Chapter 3, regulatory signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_28",
        topic: "rules",
        question: "You want to pass the vehicle in front of you on the right. When does B.C. allow it?",
        choices: [
          "Any time the shoulder is wide and paved",
          "Only on a one-way street",
          "On a roadway with two or more lanes, or when the driver ahead is turning left",
          "Whenever the vehicle ahead is under the speed limit",
        ],
        correctIndex: 2,
        explanation:
          "Passing on the right is allowed where the roadway has two or more lanes going your way, or where the driver ahead is turning left and has left you room. In both cases you must stay on the roadway.",
        context:
          "The Motor Vehicle Act sets out the same exceptions and adds one flat prohibition: you may never pass on the right by driving off the roadway, so the shoulder is out. Passing on the left is the default and needs a clear view for a safe distance plus lane markings that permit it. B.C. also makes it an offence to speed up while someone is passing you, and asks you to help by easing off instead.",
        trap:
          "A wide paved shoulder is not a lane. Using it to slip past a left-turning vehicle is exactly what the statute forbids.",
        excerptKey: "passing-rules",
        sourceLabel: "Learn to drive smart - Chapter 4, passing",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s1_29",
        topic: "licensing",
        question: "You hold a Class 7L learner's licence. Who may supervise you?",
        choices: [
          "Anyone over 19 who holds a valid licence",
          "Any licensed driver with at least two years of experience",
          "A family member who holds a full Class 5",
          "Someone 25 or older holding a valid Class 1, 2, 3, 4 or 5 licence, sitting beside you",
        ],
        correctIndex: 3,
        explanation:
          "Your supervisor must be at least 25, hold a valid Class 1, 2, 3, 4 or 5 licence, and sit beside you in the front passenger seat. All three conditions apply at once.",
        context:
          "The L stage stacks several restrictions and they are all enforceable. Zero blood alcohol and zero blood drug concentration. No hand-held or hands-free electronic devices at all, apart from calling 9-1-1. The L sign displayed on the back of the vehicle. Only two passengers, meaning your supervisor plus one other person. And you may drive only between 5 a.m. and midnight.",
        trap:
          "Twenty-five, not 19 and not 21. A 22-year-old with a full Class 5 is not a qualified supervisor in B.C.",
        excerptKey: "l-supervisor",
        sourceLabel: "Learn to drive smart - Chapter 9, learner stage driving restrictions",
        sourceUrl: GLP,
        commonlyMissed: true,
      },
      {
        id: "bc_s1_30",
        topic: "signs",
        question: "What does a solid double yellow line between you and oncoming traffic mean?",
        choices: [
          "No passing allowed",
          "Passing allowed with extra caution",
          "The lane is reversible",
          "Both directions may use this lane to turn left",
        ],
        correctIndex: 0,
        explanation:
          "A double solid yellow line means no passing. Yellow separates opposing directions, and two solid lines say neither side may cross to overtake.",
        context:
          "B.C.'s yellow lines form a small vocabulary. Broken yellow means passing is allowed when safe. A broken line beside a solid one means you may pass only if the broken line is on your side. A single yellow line permits passing with extra caution. A double broken yellow marks a reversible lane controlled by overhead signals, and yellow lines with broken lines inside solid ones mark a two-way left-turn lane shared by both directions.",
        trap:
          "There are two narrow exceptions people over-extend: you may cross a solid double yellow to turn left into a driveway mid-block when it is safe and not obstructing traffic, and you may cross a single solid yellow to give a cyclist room. Neither one licenses a normal overtake.",
        excerptKey: "double-solid-yellow",
        sourceLabel: "Learn to drive smart - Chapter 3, yellow lines",
        sourceUrl: GUIDE,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Set 2 · Core Rules",
    difficulty: "easy",
    description:
      "Thirty questions on the rules most B.C. drivers get right - signals, lane discipline, parking clearances and the licensing steps - with a few of the numbers that quietly decide whether you pass.",
    questions: [
      {
        id: "bc_s2_01",
        topic: "rules",
        question: "When is a B.C. driver required to signal?",
        choices: [
          "Only when turning at an intersection",
          "Only when other traffic is present",
          "Only when changing lanes on a highway",
          "Turning, changing lanes, parking, and moving toward or away from the side of the road",
        ],
        correctIndex: 3,
        explanation:
          "B.C. lists four occasions: turning left or right, changing lanes, parking, and moving toward or away from the roadside. Pulling out of a parking spot counts, and so does pulling in.",
        context:
          "The Motor Vehicle Act adds the timing: a turn signal must be given continuously for enough distance beforehand to actually warn traffic, and you must signal before slowing or stopping suddenly if there is any opportunity to do so. B.C. asks you to be timely and clear - signal early enough to be useful, but not so early that drivers cannot tell which of three driveways you mean.",
        trap:
          "\"There was nobody around\" is not an exemption. Signalling a lane change is a legal requirement, not a courtesy extended to visible traffic.",
        excerptKey: "signal-when",
        sourceLabel: "Learn to drive smart - Chapter 4, signalling",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_02",
        topic: "speed",
        question: "Unless posted otherwise, what is the maximum speed in a lane or alleyway inside a B.C. municipality?",
        choices: ["10 km/h", "15 km/h", "20 km/h", "30 km/h"],
        correctIndex: 2,
        explanation:
          "Twenty km/h. It is B.C.'s least-known default, and it applies in the back lanes that run behind houses and shops in most B.C. towns.",
        context:
          "Learn to drive smart gives three defaults for when no sign tells you otherwise: 50 km/h within cities and towns, 80 km/h outside them, and 20 km/h in a lane or alleyway within municipalities. Lanes are where children, pedestrians, cyclists and reversing vehicles all share a strip barely wide enough for one car, and where sight lines at every driveway are close to zero.",
        trap:
          "The Motor Vehicle Act is narrower than the guide here: s.146 makes the 20 km/h lane limit something a municipality enacts by bylaw for lanes no more than 8 m wide, though no signs are then required. The guide states it as the general rule, and the exam is written from the guide.",
        excerptKey: "default-speed-limits",
        sourceLabel: "Learn to drive smart - Chapter 5, appropriate speeds",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s2_03",
        topic: "rightOfWay",
        question:
          "You reach a small residential traffic circle and there is no yield sign and no stop sign at your approach. How should you treat it?",
        choices: [
          "As an uncontrolled intersection",
          "As though a yield sign were posted, giving priority to everyone already inside",
          "As a four-way stop",
          "As a through road, since you are on the outside of the circle",
        ],
        correctIndex: 0,
        explanation:
          "With no traffic control sign at the approach, B.C. tells you to treat the circle as an uncontrolled intersection. That means slowing down, looking both ways and being ready to give way rather than assuming any fixed priority.",
        context:
          "The sign is what decides this, not the word on the map. Where a yield or stop sign is posted at a circle or roundabout, obey it. Where nothing is posted, the ordinary uncontrolled-intersection rules apply - first to arrive goes, and a genuine tie goes to the vehicle on the right. You still enter by turning right, travel counter-clockwise, and leave by turning right.",
        trap:
          "ICBC's own page on traffic circles says both to yield to traffic already inside and, where there are no signs, to treat it as an uncontrolled intersection - and those point in opposite directions when someone is entering on your right. The signs are what you can rely on; the label is not.",
        excerptKey: "traffic-circle-no-signs",
        sourceLabel: "Learn to drive smart - Chapter 4, traffic circles",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_04",
        topic: "signals",
        question: "A green arrow is displayed for your lane. What does it allow?",
        choices: [
          "Proceed in any direction, since you have a green",
          "Turn in the direction the arrow points",
          "Wait - a green arrow is a warning that the signal is about to change",
          "Turn only after yielding to oncoming traffic",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow lets you move in the direction it points, and it points because that movement is protected - through traffic on the conflicting approach is facing a red.",
        context:
          "B.C. uses a few arrow combinations that reward learning as a set. A green arrow alongside a red light means only that movement is permitted. A flashing green arrow with a steady green means you may turn or continue straight. A flashing green arrow with a steady red means the left turn is allowed while through traffic waits. When the arrow turns yellow, the protection is ending - stop unless you cannot do so safely.",
        trap:
          "Protection is not permission to stop looking. You still yield to pedestrians lawfully in the crosswalk and to anyone already in the intersection.",
        excerptKey: "green-arrow",
        sourceLabel: "Learn to drive smart - Chapter 3, traffic lights",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_05",
        topic: "safety",
        question: "You are following a large truck that blocks your view ahead. What following distance should you leave?",
        choices: ["Two seconds", "At least three seconds", "Four seconds", "One vehicle length per 10 km/h"],
        correctIndex: 1,
        explanation:
          "At least three seconds behind a large vehicle. Two seconds is the ordinary baseline; a vehicle that hides the road ahead of it earns an extra second so you get some warning of what it is reacting to.",
        context:
          "B.C. names the same three seconds for several situations: behind a large vehicle, behind a motorcycle that can stop far shorter than a car, when someone is tailgating you, and on unpaved roads with dust or gravel in the air. Bad weather and slippery or uneven surfaces push it to four. Behind a truck there is a second reason for the gap - you need to stay out of its blind spots, and the test is whether you can see both its mirrors.",
        trap:
          "Tucking in close behind a truck to avoid spray does the opposite of what you want: it puts you in the driver's blind spot with no view and no room.",
        excerptKey: "three-second-large-vehicle",
        sourceLabel: "Learn to drive smart - Chapter 5, space in front",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_06",
        topic: "parking",
        question:
          "You are leaving your manual-transmission vehicle parked facing downhill. Besides turning the front wheels, what does B.C. require?",
        choices: [
          "Leave it in neutral so it can be pushed if needed",
          "Leave it in first gear with the parking brake off",
          "Chock a wheel if the grade is steep",
          "Set the parking brake and leave it in reverse",
        ],
        correctIndex: 3,
        explanation:
          "Set the parking brake and leave the vehicle in gear. Facing downhill, a manual goes in reverse; facing uphill or on the level it goes in first. An automatic goes in park.",
        context:
          "Turning the wheels, setting the brake and leaving it in gear are three separate requirements that work together, because any one of them can fail. The wheel direction follows its own table: right when facing uphill without a curb or facing downhill with or without one, and left only when facing uphill with a curb. The Motor Vehicle Act adds that a parked vehicle must be locked or otherwise secured against unauthorised use.",
        trap:
          "Neutral is the answer that feels courteous and is exactly wrong. A vehicle in neutral has nothing but the parking brake holding it.",
        excerptKey: "parking-gear",
        sourceLabel: "Learn to drive smart - Chapter 4, parking tips and rules",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_07",
        topic: "sharing",
        question:
          "You are approaching a stopped tow truck with flashing lights on a road posted at 90 km/h. What speed must you not exceed as you pass?",
        choices: ["50 km/h", "60 km/h", "80 km/h", "70 km/h"],
        correctIndex: 3,
        explanation:
          "Seventy km/h, because the posted limit is 80 km/h or more. If you are in the lane nearest the stopped vehicle you must also move over, when it is safe to do so.",
        context:
          "B.C.'s slow-down-move-over rule has two speeds decided by the posted limit: no faster than 70 km/h where the limit is 80 or more, and no faster than 40 km/h where the limit is under 80. It reaches far past police, fire and ambulance - commercial vehicle inspectors, conservation officers, tow truck operators, highway maintenance and utility workers, land surveyors, animal control officers and garbage collectors are all covered. Learn the two speeds rather than the light colours, because official B.C. sources do not describe the colours identically.",
        trap:
          "There is one exception, and it is narrow: the rule does not apply if you are on a divided highway and approaching from the opposite direction.",
        excerptKey: "slow-down-move-over-speeds",
        sourceLabel: "Learn to drive smart - Chapter 6, stopped vehicles with flashing lights",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s2_08",
        topic: "signs",
        question: "What does an orange diamond-shaped sign indicate?",
        choices: [
          "Construction or maintenance work",
          "A school zone ahead",
          "A permanent hazard on the roadway",
          "A reserved lane beginning",
        ],
        correctIndex: 0,
        explanation:
          "Orange is B.C.'s construction colour. These signs warn of construction and maintenance work and you must obey the instructions on them.",
        context:
          "Construction zones come with duties that go beyond reading the sign. You must obey traffic control persons, stay within the posted speed from the start of the zone to the end of it, keep well back from equipment and pass only when it is safe. Posted construction zone speed limits apply 24 hours a day, whether or not you can see anyone working, and traffic fines are doubled inside them.",
        trap:
          "An empty-looking work zone at 11 p.m. is still a work zone. The limit does not switch off with the crew, and the doubled fine does not either.",
        excerptKey: "construction-signs",
        sourceLabel: "Learn to drive smart - Chapter 3, construction signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_09",
        topic: "licensing",
        question: "How long must you hold your Class 7L learner's licence before taking the Class 7 road test?",
        choices: ["Three months", "At least 12 months", "Six months", "24 months"],
        correctIndex: 1,
        explanation:
          "At least 12 months, and you must have stayed prohibition-free. ICBC also recommends at least 60 hours of supervised practice before you book the test.",
        context:
          "B.C.'s Graduated Licensing Program is three tests and roughly three years if you drive safely: the knowledge test for your L, the Class 7 road test for your N, and the Class 5 road test to exit the programme. Your learner's licence stays valid for two years, and renewing it means re-taking the knowledge test. Take a prohibition during the L stage and the clock stops - you accumulate no further time toward the novice stage until it is served.",
        trap:
          "The 12 months is a minimum wait, not a countdown that runs regardless. A prohibition extends the learner stage rather than shortening it.",
        excerptKey: "l-12-months",
        sourceLabel: "ICBC - Get your L",
        sourceUrl: GET_L,
      },
      {
        id: "bc_s2_10",
        topic: "rules",
        question: "You are driving on a freeway with three lanes in each direction. Which lane should you normally use?",
        choices: [
          "The centre lane or a right-hand lane",
          "The left lane, so slower traffic can merge",
          "Whichever lane has the least traffic",
          "The right lane only, at all times",
        ],
        correctIndex: 0,
        explanation:
          "On a freeway with more than two lanes each way, drive in the centre lane or a right-hand lane. That leaves the left lane free for faster traffic and for passing.",
        context:
          "B.C. is explicit that driving at the speed limit does not entitle you to sit in the left lane. A driver cruising there causes other drivers to pass on the right, which is less safe than passing on the left. On a two-lane-each-way highway the equivalent instruction is to travel in one of the right-hand lanes, especially if you are slower than surrounding traffic or a sign directs you to keep out of the left lane.",
        trap:
          "\"I'm doing the limit, so I can stay here\" is precisely the reasoning the guide rejects. Lane discipline is about flow, not about policing other drivers' speed.",
        excerptKey: "freeway-centre-lane",
        sourceLabel: "Learn to drive smart - Chapter 4, which lane should you use?",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_11",
        topic: "emergencies",
        question:
          "An emergency vehicle is approaching with lights and siren on an undivided road. What must you do?",
        choices: [
          "Speed up to clear the intersection ahead",
          "Stop where you are, even if you are in an intersection",
          "Pull over parallel to the nearest curb, clear of any intersection, and stop",
          "Move to the left lane and continue at reduced speed",
        ],
        correctIndex: 2,
        explanation:
          "Pull over as close as you can to the nearest edge or curb, clear of the intersection, stop, and stay there until the emergency vehicle has passed. Traffic moving in both directions must do it.",
        context:
          "Usually that means pulling right, though you go left if you are in the left lane of a divided highway or on a one-way street. Do not stop in an intersection - if you are already in one and blocking the path, you may have to turn the corner to clear it. There is a narrow exception: on a divided highway with the emergency vehicle approaching on the far side of the median, you may not need to stop, provided it could not cross to your side. Following a fire truck, stay back at least 150 metres, and never drive over a fire hose.",
        trap:
          "Watch and listen after the first vehicle passes. There is often a second one behind it, and drivers pull back out into its path.",
        excerptKey: "mva-emergency-vehicle",
        sourceLabel: "Motor Vehicle Act s.177 - approach of emergency vehicle",
        sourceUrl: mva("177"),
      },
      {
        id: "bc_s2_12",
        topic: "signals",
        question:
          "Overhead lane control signals show a red X above your lane. What must you do?",
        choices: [
          "Slow to half the posted speed and continue in the lane",
          "Stop in the lane and wait for the signal to change",
          "Use the lane only to pass",
          "Move out of that lane into one showing a green arrow",
        ],
        correctIndex: 3,
        explanation:
          "A red X means do not drive in that lane. Move into a lane showing a green arrow, which marks a lane that is open in your direction.",
        context:
          "Lane control signals sit above the lanes on reversible and variable-direction roadways, and they are the only thing that tells you whether the lane is running your way today. A green arrow means the lane is open to you. If every lane shows a flashing yellow X, that is a different instruction - slow down and proceed with caution. On the road surface, a double broken yellow line marks the reversible lane these signals control.",
        trap:
          "The red X is not advisory and not a lane closure ahead. It means that lane is being used by traffic coming the other way.",
        excerptKey: "lane-control-yellow-x",
        sourceLabel: "Learn to drive smart - Chapter 3, lane control signals",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_13",
        topic: "safety",
        question: "How often should you complete a full observation cycle - ahead, side to side, then mirrors?",
        choices: [
          "Once a minute",
          "Only when traffic conditions change",
          "Every 20 to 30 seconds",
          "Every five to eight seconds",
        ],
        correctIndex: 3,
        explanation:
          "Every five to eight seconds, continuously. Look well ahead, scan across the road for developing hazards, glance at the mirrors, then start over.",
        context:
          "The cycle pairs with the twelve-second scan: twelve seconds is how far ahead you look, five to eight seconds is how often you complete the loop. Mirrors get the same rhythm. Check the rear-view before you slow or stop, so you know whether the driver behind has room, and use the side mirrors whenever you plan to change road position - left mirror pulling out from the curb, right mirror moving right.",
        trap:
          "Staring fixedly at the road ahead feels like concentration but is the opposite: it is how drivers miss the vehicle that has been closing on their blind spot for twenty seconds.",
        excerptKey: "observation-cycle-seconds",
        sourceLabel: "Learn to drive smart - Chapter 5, observation",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_14",
        topic: "rightOfWay",
        question:
          "You are stopped at a two-way stop waiting to turn left. A vehicle facing you at the other stop sign is going straight. Who yields?",
        choices: [
          "The driver going straight, because you arrived first",
          "Neither - whoever moves first has the right-of-way",
          "You do, because you are turning left",
          "It depends which street is wider",
        ],
        correctIndex: 2,
        explanation:
          "The left-turning driver gives way to the one going straight through. The single exception is if the left-turning vehicle is already in the intersection and has begun the turn, in which case the other driver yields.",
        context:
          "The same principle runs through B.C.'s intersection rules: a left turn crosses the path of oncoming traffic, so it yields. At a four-way stop, two vehicles facing each other resolve it the same way. At a green light, the left-turner waits for a gap. And once a left-turning driver has properly yielded and started the turn, the priority flips - traffic coming the other way must then yield to them.",
        trap:
          "Arriving first does not override the left-turn rule when you are still stopped. Priority passes to you only once you have actually begun the turn.",
        excerptKey: "two-way-stop-left-turn",
        sourceLabel: "Learn to drive smart - Chapter 4, intersections controlled by stop signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_15",
        topic: "signs",
        question: "A white sign shows a bicycle inside a red circle with a diagonal line. What does it mean?",
        choices: [
          "No bicycle riding beyond this point",
          "Watch for cyclists on the roadway",
          "A bicycle lane begins here",
          "Cyclists must dismount and walk",
        ],
        correctIndex: 0,
        explanation:
          "A red circle with a diagonal line through a symbol is B.C.'s way of showing an action that is not permitted. Around a bicycle, it means no bicycle riding beyond that point.",
        context:
          "B.C. builds its regulatory signs from two components you can read anywhere. A green circle around a symbol shows a permitted action; a red circle with a diagonal line shows a prohibited one. That grammar covers signs you have never seen before - a red circle over a right-turn arrow with a red light symbol means no right turn on red, and a red circle over a U-turn arrow means no U-turns. Yellow diamonds with a bicycle, by contrast, warn that cyclists may be on the roadway.",
        trap:
          "A yellow diamond showing a bicycle is a warning to drivers, not a prohibition on cyclists. Shape and colour separate the two.",
        excerptKey: "regulatory-signs-offence",
        sourceLabel: "Learn to drive smart - Chapter 3, regulatory signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_16",
        topic: "rules",
        question: "When may you drive in a bicycle lane in B.C.?",
        choices: [
          "You may cross it where the white line is broken, or to turn into or out of a driveway",
          "Any time no cyclist is using it",
          "To pass a vehicle that is turning left",
          "When traffic in the regular lanes is stopped",
        ],
        correctIndex: 0,
        explanation:
          "You do not drive, stop or park in a bicycle lane. You may cross one where the white line is broken, or to turn into or out of a driveway, and even then you signal and yield to cyclists first.",
        context:
          "Bicycle lanes are marked with a bicycle outline and sometimes a diamond, and they are reserved for cyclists in the same way a bus lane is reserved for buses. B.C. also asks you to signal well ahead and yield to all cyclists whenever you must cross one, and reminds you that even a slight move into another lane counts as a lane change - mirror, signal, shoulder check.",
        trap:
          "An empty bike lane is still a bike lane. Using it to queue for a right turn or to park briefly is an offence, not a grey area.",
        excerptKey: "bicycle-lane-rules",
        sourceLabel: "Learn to drive smart - Chapter 4, bicycle lanes",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_17",
        topic: "impairment",
        question: "You hold a Class 7 novice licence. What alcohol level may you have in your body while driving?",
        choices: [
          "Under .05",
          "Zero",
          "Under .08, the Criminal Code limit",
          "Under .04 if you are over 19",
        ],
        correctIndex: 1,
        explanation:
          "Zero. Both stages of B.C.'s Graduated Licensing Program require zero blood alcohol content and zero blood drug concentration - not a lower limit, none at all.",
        context:
          "The restriction runs the whole way through GLP, learner stage and novice stage alike, and it applies regardless of your age. Breaking it can bring an immediate roadside suspension or prohibition, a fine, penalty points and vehicle impoundment. A prohibition during the novice stage wipes out the time you have accumulated: after reinstatement you need another 24 consecutive prohibition-free months before you can take the Class 5 road test.",
        trap:
          "You do not have to be over .08 to be prohibited. A police officer who considers your ability to drive affected by alcohol or drugs can act without any threshold being reached.",
        excerptKey: "l-zero-alcohol",
        sourceLabel: "Learn to drive smart - Chapter 9, novice stage driving restrictions",
        sourceUrl: GLP,
      },
      {
        id: "bc_s2_18",
        topic: "parking",
        question: "You are parking facing uphill on a street with a curb. Which way do you turn the front wheels?",
        choices: [
          "Straight ahead",
          "To the left, so the wheels catch the curb if the vehicle rolls back",
          "To the right, away from traffic",
          "It does not matter if the parking brake is set",
        ],
        correctIndex: 1,
        explanation:
          "Uphill with a curb, turn the wheels to the left. If the vehicle rolls backwards the rear of the front tyre catches the curb and stops it before it reaches traffic.",
        context:
          "B.C. gives one rule with two halves. Turn the wheels to the right when facing uphill without a curb, or facing downhill with or without a curb - in all three of those cases a rolling vehicle should be steered off the road. Turn them left only when facing uphill with a curb, where the curb itself is the backstop. Set the parking brake as well, leave an automatic in park, and use reverse facing downhill or first gear facing uphill in a manual.",
        trap:
          "A rolling or mountable curb is not high enough to stop a vehicle, so treat uphill parking beside one as though there were no curb and turn the wheels right.",
        excerptKey: "parking-hill-wheels",
        sourceLabel: "Learn to drive smart - Chapter 4, parking tips and rules",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s2_19",
        topic: "sharing",
        question:
          "A public transit bus is signalling to pull out from a bus stop on a road posted at 50 km/h and shows a yield-to-bus sign. What must you do?",
        choices: [
          "Continue - buses give way to through traffic",
          "Sound your horn to warn the driver",
          "Let the bus move out",
          "Stop completely until the bus has fully re-entered the lane",
        ],
        correctIndex: 2,
        explanation:
          "You must allow the bus to move out from the curb lane or bus stop. Change lanes to give it room if there is space, or slow down if you cannot change lanes safely.",
        context:
          "The duty applies on all roads where the speed limit is 60 km/h or lower, so it covers city streets and most arterials but not highways. Two conditions have to be met: the bus is displaying a yield-to-bus sign, and its driver has signalled the intention to move into traffic. The bus driver still cannot pull out unless it is safe, so the rule shares responsibility rather than handing the bus a free pass.",
        trap:
          "The 60 km/h ceiling is the part people miss. On a road posted at 70 or 80 the yield-to-bus duty does not apply.",
        excerptKey: "yield-to-bus-60",
        sourceLabel: "Learn to drive smart - Chapter 6, public transit buses",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_20",
        topic: "safety",
        question: "Your vehicle has airbags. How far should your seat be from the steering wheel?",
        choices: [
          "As close as is comfortable for control",
          "About 15 cm",
          "Far enough that your arms are fully straight",
          "At least 25 cm",
        ],
        correctIndex: 3,
        explanation:
          "At least 25 centimetres - about ten inches. The airbag needs that distance to inflate and decelerate you rather than strike you.",
        context:
          "B.C. pairs the airbag with several seating rules. Keep the seat upright rather than reclined, because a seatbelt is designed for an upright body and a deeply reclined passenger can slide underneath the lap belt. Never route the shoulder belt under your arm or behind your back. And an airbag supplements a seatbelt rather than replacing it - the belt is what keeps you in position for the bag to work.",
        trap:
          "Airbag hand position matters too: at 10 and 2 your hands can be thrown into your face by an inflating bag, which is why B.C. suggests 9 and 3 or even 8 and 4.",
        excerptKey: "airbag-25cm",
        sourceLabel: "Learn to drive smart - Chapter 2, airbags",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_21",
        topic: "signals",
        question:
          "You are waiting to turn left on a flashing green arrow with a steady red light beside it. What does that combination mean?",
        choices: [
          "Stop - the red light governs all movements",
          "The left turn is allowed, and through traffic must stop for the red",
          "Turn left only after yielding to oncoming traffic",
          "Only buses may proceed",
        ],
        correctIndex: 1,
        explanation:
          "The flashing green arrow gives you the left turn while the steady red holds everyone going straight. It is a protected left, so the oncoming approach is stopped.",
        context:
          "B.C. splits protected turns into two arrangements. Some intersections give the left-turn lane its own set of lights with a green arrow at the bottom; when that arrow turns yellow you stop and wait for the next one. Others put the advance arrow on the regular lights, and when the arrow goes out and only the round green remains, you may still turn - but the protection is gone and you yield to pedestrians and oncoming traffic.",
        trap:
          "A flashing green ARROW is a protected left. A flashing green CIRCLE in B.C. is a pedestrian-controlled light and protects nothing. The two are easy to conflate at speed.",
        excerptKey: "flashing-green-arrow-red",
        sourceLabel: "Learn to drive smart - Chapter 3, traffic lights",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s2_22",
        topic: "rightOfWay",
        question: "You are pulling out of a driveway onto a street. What does B.C. require?",
        choices: [
          "Sound the horn and proceed",
          "Reverse out slowly with your hazard lights on",
          "Stop before the sidewalk or area where pedestrians may be walking, then yield to traffic on the road",
          "Yield only to vehicles, since pedestrians must watch for you",
        ],
        correctIndex: 2,
        explanation:
          "Stop before the sidewalk, give way to anyone walking there, then pull out carefully yielding to traffic on the road and waiting for a safe gap.",
        context:
          "The Motor Vehicle Act says the same thing twice over: a driver emerging from an alley, driveway, building or private road must stop before driving onto the sidewalk and yield to pedestrians on it, and must then yield to traffic on the highway that is close enough to be an immediate hazard. The pedestrian half is the part people forget, because the sidewalk is behind them when they are reversing out.",
        trap:
          "Pedestrians on a sidewalk are not required to watch for vehicles coming out of driveways. The duty to stop and look sits entirely with the driver.",
        excerptKey: "entering-roadway-driveway",
        sourceLabel: "Learn to drive smart - Chapter 4, entering a roadway",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_23",
        topic: "licensing",
        question: "You hold an N licence. How many passengers may you carry?",
        choices: [
          "As many as there are seatbelts",
          "Two, plus a supervisor",
          "None for the first six months",
          "One, unless they are immediate family or you have a qualified supervisor beside you",
        ],
        correctIndex: 3,
        explanation:
          "One passenger, with three exceptions: your immediate family, a supervisor aged 25 or over holding a valid Class 1 to 5 licence sitting beside you, or a licensed driving instructor supervising your training.",
        context:
          "Immediate family means parents, children, spouse, brothers, sisters and grandparents, including step and foster relationships. The rest of the N stage carries the same zero blood alcohol and zero drug restrictions as the L stage, the same total ban on hand-held and hands-free devices apart from calling 9-1-1, and the requirement to display the N sign on the back of the vehicle so it is visible to drivers behind you.",
        trap:
          "The L stage limit is different: two passengers, meaning your supervisor and one other person. The N stage limit is one, with family and supervisor exceptions.",
        excerptKey: "n-passenger-limit",
        sourceLabel: "Learn to drive smart - Chapter 9, novice stage driving restrictions",
        sourceUrl: GET_N,
        commonlyMissed: true,
      },
      {
        id: "bc_s2_24",
        topic: "rules",
        question: "Where does B.C. tell you never to change lanes?",
        choices: [
          "On a bridge",
          "At an intersection",
          "Within 100 metres of a traffic light",
          "In a construction zone only",
        ],
        correctIndex: 1,
        explanation:
          "Do not change lanes at an intersection. Other drivers are reading the lane markings and the lane-use signs to predict where you are going, and a mid-intersection swerve breaks that prediction.",
        context:
          "The instruction sits alongside the designated-lane rule: if you are in a lane governed by arrows, you may not move into or out of it while you are in the intersection. The general point is that intersections are already the busiest decision points on the road, and adding an unexpected lateral movement is how side-swipes happen. Construction zones get their own version - B.C. asks you to avoid lane changes there and to merge early instead.",
        trap:
          "Realising late that you need the other lane is not an exception. Carry on, and correct it once you are through the intersection.",
        excerptKey: "no-lane-change-intersection",
        sourceLabel: "Learn to drive smart - Chapter 4, bicycle lanes",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_25",
        topic: "signs",
        question: "What does a white diamond painted on the road surface mark?",
        choices: [
          "A reserved lane",
          "A pedestrian crosswalk ahead",
          "A passing lane",
          "The start of a school zone",
        ],
        correctIndex: 0,
        explanation:
          "A white diamond on the pavement marks a reserved lane. Signs over or beside the lane tell you which vehicles may use it - buses, high occupancy vehicles, or cyclists.",
        context:
          "HOV lanes are reserved for buses and carpools, and on some roads motorcycles, bicycles and taxis as well; the sign states the minimum number of people. Most operate 24 hours a day but some only at peak times, so read the sign. Bus lanes show a diamond with a bus symbol and are for buses and sometimes cyclists, plus vanpools of six or more occupants where a Vanpool Permitted tab is displayed.",
        trap:
          "Enter and leave a reserved lane only where the lines are broken. Crossing a solid line into an HOV lane is an offence even if you are entitled to be in the lane.",
        excerptKey: "reserved-lane-diamond",
        sourceLabel: "Learn to drive smart - Chapter 3, reserved lane signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_26",
        topic: "emergencies",
        question: "You are involved in a collision. What are your legal responsibilities?",
        choices: [
          "Exchange names only, then leave if nobody is hurt",
          "Move the vehicles and call your insurer within 24 hours",
          "Remain at the scene, give all reasonable assistance, and exchange the required information",
          "Wait for police before speaking to anyone",
        ],
        correctIndex: 2,
        explanation:
          "Three duties: stay at the scene, give all reasonable assistance including calling emergency services if needed, and exchange information with the other driver, anyone injured and anyone whose property was damaged.",
        context:
          "The information you must exchange is specific: your name and address, the name and address of the registered owner of the vehicle, the licence plate number, and insurance details. You must give the same to police or to a witness who asks. Beyond the legal minimum, B.C. suggests moving vehicles off the road if it is safe, avoiding any discussion of fault, noting witnesses' names, photographing the scene and notifying your insurer straight away.",
        trap:
          "The duties are triggered even if the crash was someone else's fault, and even if it happened because of something you did that did not involve your own vehicle in the collision.",
        excerptKey: "crash-exchange-info",
        sourceLabel: "Learn to drive smart - Chapter 8, you are involved in a crash",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_27",
        topic: "safety",
        question: "When must you use your headlights in B.C.?",
        choices: [
          "Only between sunset and sunrise",
          "Whenever the vehicle is moving",
          "Only when you cannot see the vehicle ahead",
          "From 30 minutes after sunset until 30 minutes before sunrise, and whenever visibility drops below 150 metres",
        ],
        correctIndex: 3,
        explanation:
          "The clock rule is 30 minutes after sunset to 30 minutes before sunrise. On top of that, headlights are required any time visibility falls below 150 metres, which covers fog and heavy rain in daylight.",
        context:
          "B.C. adds a companion rule that catches a lot of modern vehicles: it is illegal to drive at night on parking lights or daytime running lights instead of headlights, because daytime running lights usually leave the tail lights dark. Low beams light about 30 metres of road ahead and high beams about 100, and you must dim high beams within 150 metres of another vehicle, whether you are meeting it or following it.",
        trap:
          "Daytime running lights make the dashboard look lit and the road look bright enough. They do not turn on your tail lights, so from behind you are invisible.",
        excerptKey: "headlight-hours",
        sourceLabel: "Learn to drive smart - Chapter 8, using the headlights",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s2_28",
        topic: "sharing",
        question: "How much following distance should you leave behind a motorcycle?",
        choices: ["One second", "Two seconds", "At least three seconds", "Four seconds"],
        correctIndex: 2,
        explanation:
          "At least three seconds. A motorcycle can stop far shorter than a car, and its rider can also skid and fall on a poor surface - either way you need room.",
        context:
          "B.C. groups motorcycles with the other three-second cases: large vehicles, tailgaters behind you, and unpaved roads. Two more motorcycle rules go with it. Never share a lane with a motorcycle, because the rider needs the whole lane to move within it. And do not read a rider positioned in the left of the lane as signalling a left turn - riders often sit there to be seen.",
        trap:
          "The instinct to close up because a motorcycle takes so little space is exactly backwards. The narrower the vehicle, the harder it is to judge its distance and speed.",
        excerptKey: "motorcycle-three-seconds",
        sourceLabel: "Learn to drive smart - Chapter 6, motorcycle riders",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s2_29",
        topic: "parking",
        question: "You are parking on a public street. On which side of the roadway must you park?",
        choices: [
          "The right side, with the right-hand wheels parallel to it",
          "Either side, provided you are clear of traffic",
          "The left side on a one-way street only",
          "Whichever side has the wider shoulder",
        ],
        correctIndex: 0,
        explanation:
          "On the right side of the roadway, with the right-hand wheels parallel to it and within 30 centimetres of the curb where there is one. Only a municipality or the ministry can permit otherwise.",
        context:
          "Parking against the flow means you arrived by driving on the wrong side of the road, and you leave by pulling out into oncoming traffic. B.C. also requires you to secure a parked vehicle: lock it or otherwise prevent unauthorised use, and if it is standing on a grade, turn the front wheels to the curb or the side of the highway.",
        trap:
          "\"There was no traffic and it was a wide street\" does not create an exception. The rule is about how you got there and how you will leave, not about the moment you are parked.",
        excerptKey: "mva-parking-30cm",
        sourceLabel: "Motor Vehicle Act s.190 - manner of parking",
        sourceUrl: mva("190"),
      },
      {
        id: "bc_s2_30",
        topic: "signals",
        question: "The traffic lights at an intersection have gone completely dark. What should you do?",
        choices: [
          "Proceed with caution, since nobody has a green",
          "Treat the intersection as a four-way stop",
          "Yield only to traffic on the larger road",
          "Wait until the lights come back on",
        ],
        correctIndex: 1,
        explanation:
          "Treat it as a four-way stop. That gives every approach the same rule, which is the only arrangement that works when nobody can tell whose turn it is.",
        context:
          "B.C. gives the same answer for a second failure mode: if all four faces start flashing, treat the intersection as a four-way stop as well. Once you are operating it as a four-way stop, the ordinary rules apply - first to arrive and stop goes first, ties go to the vehicle on the right, and facing vehicles resolve by the left-turner yielding. If a traffic control person is directing traffic, their directions override everything.",
        trap:
          "\"Proceed with caution\" is what a flashing yellow means, not what a dead signal means. A dark signal is a stop, on every approach.",
        excerptKey: "lights-out-four-way",
        sourceLabel: "Learn to drive smart - Chapter 4, right-of-way at intersections",
        sourceUrl: GUIDE,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Set 3 · Real Exam Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched at the level ICBC's real 50-question test sits: the thresholds that stack, the rules with exceptions attached, and the B.C. answers that differ from every neighbouring jurisdiction.",
    questions: [
      {
        id: "bc_s3_01",
        topic: "speed",
        question:
          "It is 7 p.m. on a Saturday in July. You pass a school zone sign showing 30 km/h with no times on the tab. What limit applies?",
        choices: [
          "The ordinary posted limit for that street",
          "30 km/h, because school zone limits run every day",
          "30 km/h until dusk",
          "50 km/h regardless of what the street is posted at",
        ],
        correctIndex: 0,
        explanation:
          "A school zone with no extended hours on the tab runs 8 a.m. to 5 p.m. on school days. A Saturday evening in July is neither, so the ordinary limit for the street applies.",
        context:
          "B.C.'s two 30 km/h zones run on different clocks and this is where the difference bites. School zones are tied to school days and to 8 a.m. to 5 p.m. unless the sign extends the hours - and the Motor Vehicle Act says extended times may not start later than 8 a.m. or end earlier than 5 p.m., so the sign can only widen the window. Playground zones run every day, dawn to dusk, all year.",
        trap:
          "Reverse the two and you get this backwards: a playground zone at 7 p.m. on a July Saturday IS in force, because dusk has not fallen. The school zone is not.",
        excerptKey: "school-zone-30-hours",
        sourceLabel: "Learn to drive smart - Chapter 6, pedestrians",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s3_02",
        topic: "rules",
        question:
          "You are on a two-lane road behind a cyclist and there is no room to pass within the lane. What does B.C. allow?",
        choices: [
          "Sound the horn to ask the cyclist to move right",
          "Cross a single solid yellow line to pass, provided you can do it safely",
          "Pass using the shoulder",
          "Follow closely until the cyclist pulls over",
        ],
        correctIndex: 1,
        explanation:
          "B.C. expressly permits crossing a single solid yellow line to pass a cyclist, so long as you can do it safely and leave the required space. Waiting for a clear, straight stretch is part of doing it safely.",
        context:
          "The passing distance comes with it: at least one metre on a road posted at 50 km/h or less, and at least 1.5 metres where the limit is above 50. On a multi-lane road, change lanes rather than squeezing past in the same lane. Cyclists are also entitled to move out toward the middle when the right side has glass, a pothole, or a lane too narrow to share.",
        trap:
          "Honking at a cyclist is specifically discouraged - a loud horn can startle a rider into a fall. Use it only as a genuine warning.",
        excerptKey: "cross-single-yellow-for-cyclist",
        sourceLabel: "Learn to drive smart - Chapter 6, cyclists",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_03",
        topic: "signals",
        question:
          "You are stopped at a red light on a two-way street and want to turn left onto a one-way street running left. What does B.C. allow?",
        choices: [
          "Nothing - left on red is never permitted in B.C.",
          "Turn after a complete stop, unless a sign forbids it, yielding to everyone lawfully proceeding",
          "Turn only from a one-way street onto another one-way street",
          "Turn only if there is a green arrow",
        ],
        correctIndex: 1,
        explanation:
          "B.C. permits a left turn on a red light onto a one-way street carrying traffic in the direction you are turning. You stop completely first, there must be no sign prohibiting it, and you yield to pedestrians and to traffic moving on the green.",
        context:
          "The Motor Vehicle Act phrases it as a turn at the intersection of not more than two highways, into a highway on which traffic is restricted to the direction the driver is turning. So the destination street has to be one-way in your direction; the street you start from does not have to be. The rule mirrors right on red - both are defaults that a posted sign can withdraw.",
        trap:
          "Many jurisdictions allow left on red only from a one-way onto a one-way. B.C. does not add that restriction on the street you are leaving.",
        excerptKey: "mva-left-on-red-oneway",
        sourceLabel: "Motor Vehicle Act s.129 (4) (b) - red light",
        sourceUrl: mva("129"),
        commonlyMissed: true,
      },
      {
        id: "bc_s3_04",
        topic: "sharing",
        question:
          "How far back must you stop from the nearest rail when you are required to stop at a railway crossing?",
        choices: [
          "At least two metres, no more than ten",
          "At least three metres, no more than twelve",
          "At least ten metres, no more than twenty",
          "No closer than five metres and no further than 15 metres",
        ],
        correctIndex: 3,
        explanation:
          "Between five and 15 metres from the nearest rail. Closer than five puts you inside the swing of the train and any load overhanging it; further than 15 puts you too far back to see clearly and leaves room for someone to pull in beside you.",
        context:
          "You must stop when a gate is down, when flashing red lights are showing, when a flag person directs you, or when you can see or hear a train coming - and you wait for a gate to rise fully before crossing. Trains always have the right-of-way, need about two kilometres to stop, and can travel at up to 160 km/h in Canada. Watch for a second train hidden behind the first; that is one of the main causes of car-train crashes.",
        trap:
          "If there is a red light at an intersection just past the crossing, do not stop on the tracks. Stop before the crossing unless there is genuinely room for your whole vehicle on the far side.",
        excerptKey: "railway-stop-5-15",
        sourceLabel: "Learn to drive smart - Chapter 6, trains",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_05",
        topic: "parking",
        question: "How close to a railway crossing may you park in B.C.?",
        choices: [
          "No closer than five metres",
          "No closer than six metres",
          "No closer than 15 metres from the nearest rail",
          "No closer than 30 metres from the nearest rail",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen metres from the nearest rail. It is the largest of B.C.'s parking clearances, and it exists so a parked vehicle never blocks a driver's view down the track.",
        context:
          "The three clearances are worth memorising as a set because two of them are so close together: five metres from a fire hydrant, six from a crosswalk, intersection, stop sign or traffic light, and fifteen from the nearest rail of a railway crossing. The Motor Vehicle Act lists all three in the same subsection, along with prohibitions on parking on a sidewalk, in front of a driveway, in an intersection or on a crosswalk.",
        trap:
          "Five and 15 are the two ends of the range. The 15 metres here is the parking clearance; the five-to-15 metre band is where you stop when a train is coming. Different rules, same numbers.",
        excerptKey: "parking-railway-15m",
        sourceLabel: "Learn to drive smart - Chapter 4, parking tips and rules",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_06",
        topic: "safety",
        question:
          "It is raining hard and the road is wet. How much braking distance should you allow compared with a dry road?",
        choices: ["The same", "About a quarter more", "About half again", "At least twice as much"],
        correctIndex: 3,
        explanation:
          "At least twice the normal braking distance on wet roads. B.C. also asks you to slow down, leave more following distance, and brake gently so the wheels do not lock.",
        context:
          "Rain is most dangerous at the start: water mixes with the oil on the surface to make a slippery film that later rain washes away, so a light shower after a dry spell is worse than a downpour. On ice the multiplier is far larger - it can take ten times the normal braking distance to stop. Bad weather also pushes B.C.'s following distance from two seconds to four.",
        trap:
          "Hydroplaning is a separate failure. If the steering suddenly goes light, decelerate and drive straight - never brake, and do not steer sharply.",
        excerptKey: "wet-road-braking",
        sourceLabel: "Learn to drive smart - Chapter 8, rain",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_07",
        topic: "rightOfWay",
        question:
          "You are going straight through an intersection on a green light. A vehicle is already in the intersection waiting to turn left. What do you do?",
        choices: [
          "Continue - you have the right-of-way on a green",
          "Sound the horn and continue",
          "Yield to the vehicle already in the intersection",
          "Stop and wait for it to complete the turn before entering",
        ],
        correctIndex: 2,
        explanation:
          "A vehicle already in the intersection turning left has established its position, and B.C. tells the through driver to yield. The left-turner had to yield to reach that point; once there, priority passes.",
        context:
          "The Motor Vehicle Act builds this into the left-turn rule itself. A left-turning driver must yield to oncoming traffic that is in the intersection or so close as to be an immediate hazard - but having yielded and signalled, they may turn, and approaching traffic must then yield to them. It is why a driver caught in the intersection when the light goes yellow is entitled to complete the turn.",
        trap:
          "A green light is permission to enter, not a guarantee the intersection is empty. B.C. calls a just-changed light a fresh green and tells you to scan before moving.",
        excerptKey: "left-turn-yield-basic",
        sourceLabel: "Learn to drive smart - Chapter 4, understanding intersections",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_08",
        topic: "licensing",
        question:
          "You take a driving prohibition during your novice stage. What happens to the time you have already accumulated?",
        choices: [
          "It is preserved and resumes when the prohibition ends",
          "Six months are deducted",
          "You lose it all and must complete 24 consecutive prohibition-free months after reinstatement",
          "Nothing changes, but you pay a higher premium",
        ],
        correctIndex: 2,
        explanation:
          "A prohibition in the novice stage wipes the clock. Once your licence is reinstated you start the novice stage again and need 24 consecutive prohibition-free months before you can take the Class 5 road test.",
        context:
          "The learner stage works differently but is no gentler: a prohibition there does not reset anything, it simply stops the clock - you accumulate no further time toward the novice stage until you have served it and been reinstated. B.C. also charges a $250 fee to reinstate a licence after a prohibition, and the threshold for driver improvement action is more stringent for GLP drivers than for everyone else.",
        trap:
          "It is not just alcohol or drug offences that do this. Breaking any learner or novice restriction can bring fines and penalty points, and enough points bring a prohibition.",
        excerptKey: "glp-prohibition-novice",
        sourceLabel: "Learn to drive smart - Chapter 9, GLP penalties",
        sourceUrl: GLP,
      },
      {
        id: "bc_s3_09",
        topic: "signs",
        question:
          "A yellow diamond shows a curve, and a smaller yellow tab below it reads 40. What is that number?",
        choices: [
          "A legal maximum for the curve",
          "The minimum speed for the curve",
          "The speed limit for trucks only",
          "An advisory speed for the curve",
        ],
        correctIndex: 3,
        explanation:
          "An advisory speed - a recommendation for negotiating that curve safely under good conditions. It is attached to a warning sign, not a regulatory one, so it is not itself a posted limit.",
        context:
          "B.C. uses the same advisory arrangement for sharp curves and for highway exit ramps. It reflects the geometry of the road rather than a legal decision about the corridor. The practical instruction goes further than the number: slow down before you enter the curve to a speed that lets you get through it without braking, then straighten and accelerate gently from the middle. Braking mid-curve is what puts a vehicle into a skid.",
        trap:
          "Ignoring an advisory speed is not automatically an offence, but taking a curve too fast for the conditions is - and driving without due care and attention does not need a posted number to be proved.",
        excerptKey: "advisory-speed-curve",
        sourceLabel: "Learn to drive smart - Chapter 3, warning signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_10",
        topic: "impairment",
        question:
          "Which devices may a driver in B.C.'s Graduated Licensing Program use while driving?",
        choices: [
          "Hands-free phones and GPS only",
          "None, except to call 9-1-1 to report an emergency",
          "Any device while stopped at a red light",
          "Music players, but not phones",
        ],
        correctIndex: 1,
        explanation:
          "None at all. Every B.C. driver is banned from hand-held devices, and GLP drivers are additionally banned from hands-free ones - the only exception is calling 9-1-1 to report an emergency.",
        context:
          "The general ban covers operating, viewing or holding a hand-held phone or communication device, sending or reading email or texts, holding a music or portable gaming device, and programming or adjusting a GPS by hand. It applies whenever you are in control of the vehicle, including stopped at a red light or sitting in bumper-to-bumper traffic. For GLP drivers there is no hands-free carve-out at all.",
        trap:
          "One ticket is enough to matter. ICBC says a GLP driver who receives a single ticket may have their driving record reviewed and may face a prohibition.",
        excerptKey: "glp-handsfree-ban",
        sourceLabel: "Learn to drive smart - Chapter 7, cellphones and other devices",
        sourceUrl: GLP,
        commonlyMissed: true,
      },
      {
        id: "bc_s3_11",
        topic: "rules",
        question: "When may you legally make a U-turn in a B.C. business district?",
        choices: [
          "At an intersection where there is no traffic light",
          "At any intersection controlled by a traffic light",
          "Anywhere with 150 metres of clear visibility",
          "Never, under any circumstances",
        ],
        correctIndex: 0,
        explanation:
          "In a business district a U-turn is only permitted at an intersection where there is no traffic light. Everywhere else in a business district it is prohibited.",
        context:
          "B.C.'s U-turn prohibitions stack. They are illegal if they interfere with other traffic, on a curve, on or near the crest of a hill where you cannot be seen by other traffic within 150 metres, where a sign prohibits them, at any intersection with a traffic light, in a business district except at an intersection with no light, and wherever a municipal bylaw forbids them. The Motor Vehicle Act sets out the same list.",
        trap:
          "The business-district rule reads backwards from what people expect. A signalled intersection feels like the safe, orderly place to turn around; it is the one place a business-district U-turn is banned.",
        excerptKey: "uturn-business-district",
        sourceLabel: "Learn to drive smart - Chapter 4, U-turns",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s3_12",
        topic: "sharing",
        question:
          "You are passing a pedestrian walking on the shoulder of a road posted at 80 km/h. What is the minimum space required?",
        choices: ["0.5 metre", "1.0 metre", "1.2 metres", "1.5 metres"],
        correctIndex: 3,
        explanation:
          "One and a half metres, because the posted limit is above 50 km/h. The rule covers pedestrians and people on personal mobility devices, not only cyclists.",
        context:
          "B.C. gives three numbers and the posted limit selects between the first two. One metre is the general minimum. It rises to 1.5 metres where the limit is above 50 km/h. And it falls to 0.5 metre where the person is on a sidewalk or in a protected cycle lane, because a physical separation already exists. Slowing down and passing only when it is safe is part of the same rule, not an add-on.",
        trap:
          "The threshold is \"above 50 km/h,\" so a road posted at exactly 50 stays on the one-metre rule and a road posted at 60 does not.",
        excerptKey: "passing-distance-vulnerable",
        sourceLabel: "Learn to drive smart - Chapter 5, space beside",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_13",
        topic: "signals",
        question: "You see a steady white rectangular light at an intersection. What is it?",
        choices: [
          "A transit priority signal - only buses may go on it",
          "A pedestrian signal about to change",
          "A warning that the signal is out of service",
          "A signal for emergency vehicles only",
        ],
        correctIndex: 0,
        explanation:
          "A steady white rectangle is a transit priority signal. It gives buses a head start through the intersection, and only buses may proceed on it.",
        context:
          "The Motor Vehicle Act builds the exception directly into the red-light rule: a bus facing a red light and a prescribed white rectangular indicator may proceed through the intersection. For every other driver the red still means stop. Transit priority signals appear on bus routes in the larger B.C. centres, usually alongside a bus lane or a queue-jump lane.",
        trap:
          "It is not a flashing white and it is not a pedestrian signal. If you are not driving a bus, the red beside it is the one that governs you.",
        excerptKey: "transit-priority-white",
        sourceLabel: "Learn to drive smart - Chapter 3, traffic lights",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_14",
        topic: "safety",
        question:
          "You are driving at night on a rural road. How fast should you be going relative to your headlights?",
        choices: [
          "Fast enough to keep up with surrounding traffic",
          "At the posted limit, since headlights are designed for it",
          "Whatever speed lets you see the centre line clearly",
          "Slow enough to stop within the distance your headlights light up",
        ],
        correctIndex: 3,
        explanation:
          "Never outrun your headlights. If you cannot stop within the lit distance, you are driving blind into whatever is beyond it - and B.C. calls that overdriving your headlights.",
        context:
          "The numbers make the problem concrete. Low beams light about 30 metres ahead, high beams about 100. At highway speed the distance you need to see, think and brake exceeds what low beams give you. Overdriving is especially dangerous in a curve, where the beam sweeps off the road ahead of the corner. The same principle applies in fog, rain and snow, where the lit distance collapses further.",
        trap:
          "High beams do not solve it either. You must dim them within 150 metres of another vehicle, which is exactly when you most want the reach.",
        excerptKey: "overdriving-headlights",
        sourceLabel: "Learn to drive smart - Chapter 8, overdriving the headlights",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_15",
        topic: "rightOfWay",
        question:
          "You are in a multi-lane roundabout and entered from the left lane. Which exits may you take?",
        choices: [
          "Any exit, provided you signal",
          "Only the first exit on your right",
          "Straight through or a left turn, staying in the lane you entered in",
          "Any exit, after changing to the right lane inside the roundabout",
        ],
        correctIndex: 2,
        explanation:
          "Entering from the left lane commits you to going straight or turning left, and you stay in that lane. You cannot change lanes inside a roundabout, so the right-hand exits are not available to you.",
        context:
          "B.C. asks you to sort out your route before you enter: read the lane-use signs and road markings on the approach, choose the left lane for a left turn, the right lane for a right turn, and either lane to go straight. Inside, go counter-clockwise, do not change lanes, yield to pedestrians at the crosswalk before you enter and again at the one where you exit, and signal right before leaving.",
        trap:
          "Roundabouts and residential traffic circles are different. At a small traffic circle with no signs you treat it as an uncontrolled intersection and yield to the vehicle on your right; a roundabout is governed by lane markings and yielding to traffic already inside.",
        excerptKey: "roundabout-lane-choice",
        sourceLabel: "Learn to drive smart - Chapter 4, roundabouts",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_16",
        topic: "emergencies",
        question: "You are stranded in your vehicle in a snowstorm. What does B.C. advise?",
        choices: [
          "Walk to the nearest visible building",
          "Run the engine continuously for warmth",
          "Sleep to conserve energy until help arrives",
          "Stay with the vehicle unless you are certain you can reach help",
        ],
        correctIndex: 3,
        explanation:
          "Stay with the vehicle unless you are absolutely sure you can reach help. A vehicle is shelter, it is far easier to find than a person on foot, and distances in a whiteout are almost impossible to judge.",
        context:
          "If you run the engine for warmth, do it for about five minutes an hour, not continuously, and keep one window slightly open. Carbon monoxide is the danger, and a blocked or damaged exhaust makes it worse - dizziness or drowsiness with the engine running is the warning sign. Make sure at least one person stays awake at all times.",
        trap:
          "Sleeping to conserve energy is the instinct that kills people in this scenario. Someone has to stay awake, precisely because carbon monoxide poisoning feels like getting sleepy.",
        excerptKey: "stranded-stay-with-vehicle",
        sourceLabel: "Learn to drive smart - Chapter 8, stranded or snowbound",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_17",
        topic: "rules",
        question:
          "You want to turn left into a driveway in the middle of a block, and a solid double yellow line separates you from oncoming traffic. What does B.C. allow?",
        choices: [
          "Nothing - a double solid line may never be crossed",
          "Only if a two-way left-turn lane is provided",
          "The turn is allowed if you do it carefully and safely, do not impede other traffic, and no sign prohibits it",
          "Only between 9 a.m. and 4 p.m.",
        ],
        correctIndex: 2,
        explanation:
          "B.C. permits a mid-block left turn across a solid double yellow line, provided you make it carefully and safely, do not impede other traffic, and there is no sign forbidding such turns.",
        context:
          "This is one of two narrow exceptions to the double-yellow rule; the other is crossing a single solid yellow to give a cyclist the required passing space. Neither one licenses overtaking. The Motor Vehicle Act sets out how to make the turn: approach from the part of the right-hand side nearest the centre line, be in that position before you turn, and satisfy yourself the movement can be made safely given the traffic that is there or could reasonably be expected.",
        trap:
          "\"Do not impede other traffic\" is doing real work. If you have to sit blocking a through lane while you wait for a gap, the turn was not one you were entitled to start.",
        excerptKey: "midblock-left-over-double-yellow",
        sourceLabel: "Learn to drive smart - Chapter 4, turns in the middle of a block",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s3_18",
        topic: "signs",
        question: "What must you do when you see a sign showing a tyre chain symbol?",
        choices: [
          "Use winter tyres or chains - they are required while the sign is displayed",
          "Reduce speed by 20 km/h",
          "Stop at the next chain-up area regardless of your tyres",
          "Nothing, unless snow is falling",
        ],
        correctIndex: 0,
        explanation:
          "It is a regulatory sign: winter tyres or chains must be used when it is displayed. Ignoring a regulatory sign is an offence under the Motor Vehicle Act.",
        context:
          "Snow tyres or chains are a legal requirement on many B.C. roads during the winter, and the sign is how the requirement is imposed on a given route. Carry chains on mountain routes and know how to fit them before you need to. If you do have to fit them, use a designated chain-up area rather than a hill - fitting chains on a grade is close to impossible and dangerous besides.",
        trap:
          "All-season tyres are not winter tyres. The sign requires winter tyres or chains, and clear pavement at the sign says nothing about the pass twenty minutes further on.",
        excerptKey: "winter-tire-sign",
        sourceLabel: "Learn to drive smart - Chapter 3, regulatory signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_19",
        topic: "sharing",
        question:
          "A pedestrian who is visually impaired raises a white cane at the edge of the roadway. What does that signal?",
        choices: [
          "They are waiting for someone and do not intend to cross",
          "They are uncertain about crossing - stop and give them the right-of-way",
          "They want you to sound your horn so they can locate you",
          "They are directing traffic and you should follow their signal",
        ],
        correctIndex: 1,
        explanation:
          "A raised cane usually means the person is unsure whether it is safe to cross. That is your cue to stop and give them the right-of-way.",
        context:
          "B.C. asks for extra care around pedestrians with disabilities generally - people with a white cane or a guide dog, and people using motorised scooters or wheelchairs, who may be travelling along the road where a sidewalk is missing, too narrow or too rough. Do not startle a person or their guide dog by revving the engine or sounding the horn. The overarching rule is that it is always the driver's responsibility to avoid hitting a pedestrian.",
        trap:
          "Sounding the horn to indicate you have stopped is the wrong instinct here. It can startle both the person and the dog.",
        excerptKey: "white-cane-raised",
        sourceLabel: "Learn to drive smart - Chapter 6, pedestrians",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_20",
        topic: "speed",
        question:
          "In B.C., how far over the posted limit counts as excessive speeding, with the vehicle liable to be impounded?",
        choices: [
          "20 km/h or more over",
          "40 km/h or more over",
          "30 km/h or more over",
          "50 km/h or more over",
        ],
        correctIndex: 1,
        explanation:
          "Forty km/h or more over the applicable limit is excessive speeding under the Motor Vehicle Act, and it is one of the offences for which police may impound the vehicle on the spot.",
        context:
          "Impoundment for excessive speeding starts at seven days and can escalate to 30 or 60 days for repeat offenders, with the owner paying towing and storage to get the vehicle back. The same immediate impoundment applies to driving while unlicensed, driving while suspended or prohibited, street racing or stunt driving, and riding or allowing a passenger to ride improperly seated. Excessive speeding convictions also feed the Driver Risk Premium.",
        trap:
          "The threshold is measured against the applicable limit, not against the highway default - so 70 km/h in a 30 km/h school zone is excessive speeding.",
        excerptKey: "excessive-speeding-impound",
        sourceLabel: "Learn to drive smart - Chapter 9, vehicle impoundment",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_21",
        topic: "safety",
        question: "Your vehicle begins to skid with the rear end sliding to the right. What should you do?",
        choices: [
          "Brake firmly to slow the vehicle",
          "Steer left to counter the slide",
          "Apply the parking brake",
          "Ease off the accelerator and steer smoothly in the direction you want to go",
        ],
        correctIndex: 3,
        explanation:
          "Come off the accelerator and steer smoothly where you want to go - to the right in this case. Do not brake; braking mid-skid makes it worse.",
        context:
          "B.C. warns that overcorrecting starts a second skid the other way, so be prepared to repeat the same response in the opposite direction until you regain control. The better answer is prevention: skids happen when drivers slam on the brakes, brake and steer at once, take a corner too fast, or accelerate suddenly. In slippery conditions B.C. says the main cause of skidding is poor driving skills, not the weather.",
        trap:
          "\"Steer into the skid\" is a phrase people half-remember and reverse. The instruction that never reverses is: look and steer where you want the vehicle to go.",
        excerptKey: "skid-steer-look",
        sourceLabel: "Learn to drive smart - Chapter 8, steps to handle a skid",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_22",
        topic: "parking",
        question: "Which of these is a legal place to stop your vehicle in B.C.?",
        choices: [
          "In a bicycle lane, briefly, to drop off a passenger",
          "Parallel to the curb on the right, 25 cm out, clear of driveways and crossings",
          "On a bridge, if you switch on your hazard lights",
          "Across a back lane entrance, if you stay with the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Right side, parallel, within 30 centimetres of the curb and clear of the prohibited locations is the legal park. Bicycle lanes, bridges and lane entrances are all on B.C.'s prohibited list.",
        context:
          "The prohibited list is long and worth reading as a whole: sidewalks and boulevards, across a driveway, back lane or intersection, within five metres of a fire hydrant, within six metres of a crosswalk, intersection, stop sign or traffic light, within 15 metres of the nearest rail of a railway crossing, in a bicycle lane, on a bridge or in a highway tunnel, anywhere your vehicle blocks a traffic sign from view, and in a disability space without displaying a permit and carrying a person with a disability.",
        trap:
          "Staying with the vehicle changes nothing. B.C. defines parking to include standing whether occupied or not, except when actually loading or unloading.",
        excerptKey: "parking-illegal-list",
        sourceLabel: "Learn to drive smart - Chapter 4, parking tips and rules",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_23",
        topic: "signals",
        question:
          "You are approaching a green light that has been green since before you could see the intersection. What should you do?",
        choices: [
          "Maintain speed - a long green means plenty of time",
          "Accelerate to clear it before it changes",
          "Treat it as a stale green and be prepared to stop",
          "Cover the horn in case someone runs the red",
        ],
        correctIndex: 2,
        explanation:
          "A green you did not see turn green may be stale - about to end. B.C. tells you to be ready to stop and to look for clues about how long it has been showing.",
        context:
          "The clues are practical. A long queue of cars waiting on the cross street means the light has been green your way for a while. In many places the pedestrian signal switches from a walking figure to an orange hand, or starts counting down, just before your light goes yellow. On the approach you decide your point of no return - the last spot you could stop safely - and past that you keep going even if it changes.",
        trap:
          "Accelerating at a stale green is how drivers end up in the intersection on the red. The point of spotting a stale green is to prepare to stop, not to beat it.",
        excerptKey: "stale-green",
        sourceLabel: "Learn to drive smart - Chapter 4, intersections controlled by traffic lights",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_24",
        topic: "licensing",
        question:
          "You move to B.C. from another province. How long may you drive on your existing licence?",
        choices: ["30 days", "60 days", "90 days", "One year"],
        correctIndex: 2,
        explanation:
          "Ninety days. After that you need a B.C. driver's licence, which means turning in your old one and passing whatever tests apply to your class and experience.",
        context:
          "The class you held and your driving experience decide which tests you face. New residents holding a Canadian, American, Australian, Austrian, Dutch, French, German, Japanese, New Zealand, South Korean, Swiss or United Kingdom licence can usually complete the exchange the same day. If you want a full-privilege B.C. licence you must prove you have held a licence for at least two years; without that proof you are placed in the Graduated Licensing Program.",
        trap:
          "Ninety days is not a grace period you can extend by applying late. ICBC advises applying well within it, because the exchange can take longer than expected.",
        excerptKey: "new-resident-90-days",
        sourceLabel: "Learn to drive smart - Chapter 9, new B.C. residents",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_25",
        topic: "rules",
        question: "You are merging onto a freeway from an entrance ramp. What is the acceleration lane for?",
        choices: [
          "Waiting for a gap while stopped",
          "Matching your speed to the traffic already on the freeway",
          "Passing slower vehicles already on the freeway",
          "Merging immediately, before the broken line begins",
        ],
        correctIndex: 1,
        explanation:
          "The acceleration lane is where you build speed to match the traffic you are about to join. It is separated from the freeway by a solid white line, so you are not merging yet.",
        context:
          "The three parts of a B.C. freeway entrance do different jobs. On the ramp you scan the freeway for a gap. In the acceleration lane, behind the solid white line, you match speed. In the merging area, marked off by a broken white line, you find your gap and move across. Some entrances have ramp meters controlling how many vehicles proceed. Cycling is permitted on some B.C. freeways, so check before you cut across.",
        trap:
          "Stopping in the acceleration lane or the merging area is specifically warned against - you risk being rear-ended by a driver who assumed you would keep moving.",
        excerptKey: "acceleration-lane-solid-white",
        sourceLabel: "Learn to drive smart - Chapter 4, highway or freeway entrances and exits",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_26",
        topic: "sharing",
        question:
          "Your vehicle stalls on a railway crossing and a train is not yet in sight. What should you do first?",
        choices: [
          "Try to restart the engine",
          "Put the vehicle in gear and use the starter motor to move it",
          "Switch on the hazard lights and wait for help",
          "Get every passenger out and move at least 30 metres from the track",
        ],
        correctIndex: 3,
        explanation:
          "People first. Get everyone out and move at least 30 metres away from the track, well clear of flying debris, before you do anything about the vehicle.",
        context:
          "Once you are clear, phone for help. Transport Canada's number is printed on the back of the railway crossing sign along with a location identifier - report that location, or call 911 or local police. Do not underestimate what is coming: a train needs about two kilometres to stop, may be travelling at up to 160 km/h, and cannot swerve.",
        trap:
          "Trying to restart the engine is the instinct that gets people killed. The vehicle is replaceable and the time you spend on it is the time you needed to walk away.",
        excerptKey: "stuck-on-tracks-30m",
        sourceLabel: "Learn to drive smart - Chapter 6, trains",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_27",
        topic: "signs",
        question: "Two solid white lines mark the edge between your lane and the next. What do they mean?",
        choices: [
          "Do not change lanes",
          "Lane changing is allowed when safe",
          "The lane is reserved for buses",
          "You are approaching a crosswalk",
        ],
        correctIndex: 0,
        explanation:
          "A solid white line means do not change lanes. White separates traffic moving in the same direction, and solid means the separation is not to be crossed.",
        context:
          "The white-line vocabulary is short. Broken white means lane changing is allowed when safe. Solid white means it is not. White is also used for stop lines, for crosswalks, and to mark the right shoulder of a highway. On a freeway entrance the solid white line beside the acceleration lane is the reason you do not merge until the line goes broken.",
        trap:
          "Yellow and white carry different information. Yellow separates opposing directions and governs passing; white separates same-direction lanes and governs lane changes.",
        excerptKey: "solid-white-no-change",
        sourceLabel: "Learn to drive smart - Chapter 3, white lines",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_28",
        topic: "safety",
        question:
          "You are driving in fog during the day. Which lights should you use?",
        choices: [
          "Low beam headlights",
          "High beam headlights, for maximum reach",
          "Hazard lights while moving",
          "Parking lights only",
        ],
        correctIndex: 0,
        explanation:
          "Low beams in rain, snow and fog. High beams reflect off the water droplets and bounce the light straight back at you, which makes seeing harder rather than easier.",
        context:
          "Headlights are also legally required in fog: any time visibility drops below 150 metres you must have them on, daylight or not. B.C. adds several fog strategies - slow down, keep bigger space margins, scan more carefully, do not pass, and pull well off the road and stop if it gets bad enough. If you use fog lamps instead of headlamps where they help, do not run both at once.",
        trap:
          "Hazard lights while moving are not a fog strategy in B.C. They tell other road users you have stopped for an emergency, so using them in motion sends the wrong message.",
        excerptKey: "low-visibility-strategies",
        sourceLabel: "Learn to drive smart - Chapter 8, loss of visibility",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_29",
        topic: "rightOfWay",
        question:
          "You have stopped at a stop sign on a side street, waiting to enter a through highway. Once you have yielded and started to pull out, what must approaching traffic do?",
        choices: [
          "Maintain speed - you had the duty to wait for a clear road",
          "Sound the horn to warn you back",
          "Yield to you while you are proceeding into or across the highway",
          "Nothing - the through highway always has priority",
        ],
        correctIndex: 2,
        explanation:
          "The duty flips once you have properly stopped, yielded and begun to move. Traffic approaching on the through highway must then yield to you while you proceed into or across it.",
        context:
          "The Motor Vehicle Act sets both halves out together. First, a driver who has stopped in compliance with the stop-sign rule yields to traffic already in the intersection or approaching so closely as to be an immediate hazard. Having yielded, they may proceed with caution - and traffic approaching the intersection must yield to the entering vehicle. The same two-stage structure governs left turns.",
        trap:
          "This is not permission to pull out into a gap that was never big enough. The flip only applies once you have properly yielded first.",
        excerptKey: "mva-through-highway",
        sourceLabel: "Motor Vehicle Act s.175 - entering through highway",
        sourceUrl: mva("175"),
      },
      {
        id: "bc_s3_30",
        topic: "impairment",
        question: "How do over-the-counter cold and allergy medicines affect driving?",
        choices: [
          "They have no effect once symptoms improve",
          "They can cause drowsiness and inattentiveness, sometimes for many hours",
          "They only matter if taken with alcohol",
          "They are safe as long as you take the lowest dose",
        ],
        correctIndex: 1,
        explanation:
          "Over-the-counter medicines for allergies, coughs, colds and nausea can cause drowsiness and inattentiveness, and those effects can persist for many hours after you take the dose.",
        context:
          "Prescription drugs go further: sedatives, tranquillisers, painkillers and some antidepressants can blunt alertness, concentration and reaction time. B.C. tells you to read the label and not to drive if it warns of drowsiness or dizziness, and to ask a pharmacist or doctor about combined effects if you take more than one. Even a mild cold on its own affects alertness before any medication enters the picture.",
        trap:
          "Feeling better is not the test. A cold remedy that lifted your symptoms can still be slowing your reaction time hours later.",
        excerptKey: "medication-drowsy",
        sourceLabel: "Learn to drive smart - Chapter 7, assessing your health",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_31",
        topic: "rules",
        question: "Someone is overtaking you on a two-lane highway. What does B.C. require of you?",
        choices: [
          "Do not speed up - it is illegal, and you should help by slowing down and making room",
          "Maintain your exact speed so the other driver can judge the gap",
          "Move onto the shoulder to let them by",
          "Accelerate briefly so they can complete the pass sooner",
        ],
        correctIndex: 0,
        explanation:
          "Speeding up while someone is passing you is illegal in B.C. The guide asks you to do the opposite: ease off and make room so they can get back in.",
        context:
          "The Motor Vehicle Act phrases it as a duty on the overtaken driver - on hearing an audible signal from the overtaking vehicle, give way to the right, and do not increase speed until you have been completely passed. The mirror image applies when you are the one passing: keep within the speed limit, make sure the lane markings permit it, and do not return to your side until you are safely clear.",
        trap:
          "Pulling onto the shoulder to help is not what B.C. asks for. Slowing down inside your lane is - the shoulder is not a travel lane.",
        excerptKey: "no-speeding-up-when-passed",
        sourceLabel: "Learn to drive smart - Chapter 4, pulling into a lane",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_32",
        topic: "signals",
        question:
          "You are stopped at a red light. Under B.C. law, where must you have stopped?",
        choices: [
          "Anywhere before the far side of the intersection",
          "Level with the traffic signal itself",
          "At least three metres before the crosswalk",
          "Before the marked crosswalk on the near side, or before the intersection if there is no crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "Before the marked crosswalk on the near side of the intersection, or if there is no marked crosswalk, before entering the intersection. That is the statutory stopping position for a red light.",
        context:
          "The guide sets out the same ordering for stop signs and gives one more step: where there is a stop line, stop just before the line; where there is a crosswalk but no line, before the crosswalk; and treat an unmarked crosswalk exactly as you would a painted one. If a red-light turn is permitted, you make it from as close as practicable to the crosswalk or intersection, not from wherever you happened to halt.",
        trap:
          "Nosing forward into the crosswalk for a better view is a stopping-position fault. The crosswalk belongs to pedestrians even when it is not painted.",
        excerptKey: "mva-stop-sign-position",
        sourceLabel: "Motor Vehicle Act s.186 - stop signs",
        sourceUrl: mva("186"),
      },
      {
        id: "bc_s3_33",
        topic: "sharing",
        question: "Where are a large truck's most dangerous blind spots, and how do you check you are clear of them?",
        choices: [
          "Behind and beside - if you cannot see both of the truck's mirrors, the driver cannot see you",
          "Directly in front only - stay back two vehicle lengths",
          "There are none, because trucks have convex mirrors on both sides",
          "Only on the driver's side, so pass on the right",
        ],
        correctIndex: 0,
        explanation:
          "Large vehicles have big blind spots behind and beside them. The practical test B.C. gives you is simple: if you cannot see both of the truck's mirrors, its driver cannot see you.",
        context:
          "Several truck-specific habits follow. Never slip behind a truck that is backing into a loading bay or out of a driveway. When you pass, make sure you can see its headlights in your rear-view mirror before pulling back in, and hold your speed once you are there. If a truck starts slowing well before a red light, leave that space alone - the driver needs all of it. And expect a truck to cross the centre line or cut a corner when turning.",
        trap:
          "Trucks can slow without their brake lights coming on. Engine retarders and gear changes shed speed silently, so listen for the engine note and watch the gap, not the lamps.",
        excerptKey: "truck-see-both-mirrors",
        sourceLabel: "Learn to drive smart - Chapter 6, large vehicles",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_34",
        topic: "parking",
        question: "You are parking in a space reserved for people with disabilities. What does B.C. require?",
        choices: [
          "Display a disabled person parking permit in the windshield and be carrying a person with a disability",
          "Display a permit, whether or not that person is with you",
          "Nothing, if you are only stopping briefly",
          "A doctor's note kept in the glove compartment",
        ],
        correctIndex: 0,
        explanation:
          "Both conditions apply at once: the permit must be displayed in the windshield, and the vehicle must actually be carrying a person with a disability.",
        context:
          "The reserved space is one entry on B.C.'s parking prohibition list, alongside sidewalks, driveways, bicycle lanes, bridges and tunnels. The consequence for parking illegally anywhere on that list is a fine, towing, or both. Police may also move or impound a vehicle parked so as to interfere with snow removal, fire fighting, the normal flow of traffic, or road work.",
        trap:
          "Holding a permit is not enough on its own. If the person the permit belongs to is not in the vehicle, the space is not yours.",
        excerptKey: "parking-disabled-permit",
        sourceLabel: "Learn to drive smart - Chapter 4, parking tips and rules",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s3_35",
        topic: "licensing",
        question:
          "You complete an ICBC-approved GLP driver training course during your learner stage. What can that earn you?",
        choices: [
          "A shorter learner stage, dropping the 12 months to six",
          "An exemption from the Class 7 road test",
          "Six months off the novice stage, if you stay violation-free through the first 18 months of it",
          "A reduction in the knowledge test pass mark",
        ],
        correctIndex: 2,
        explanation:
          "An approved course taken during the learner stage can cut six months off the novice stage - but only if you have no violations, prohibitions or at-fault crashes during the first 18 months of that stage.",
        context:
          "Approved courses run at least 32 hours of classroom and on-road instruction and must be completed within one year from start to finish. High school students can also claim two Grade 11 credits by taking their Declaration of Completion to the school office. Without the reduction, the novice stage runs 24 consecutive prohibition-free months before you can take the Class 5 road test.",
        trap:
          "The reduction applies to the novice stage, not the learner stage, and it is conditional. Pick up a violation in the first 18 months of your N and the six months goes away.",
        excerptKey: "glp-course-reduction",
        sourceLabel: "Learn to drive smart - Chapter 9, ICBC-approved driver education courses",
        sourceUrl: GLP,
        commonlyMissed: true,
      },
    ],
  },
];
