import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Georgia Department of Driver
// Services Driver's Manual (2023-2024), which DDS publishes both as a PDF and
// section by section on dds.georgia.gov, plus DDS's own teen-driving and points
// pages for the rules the manual chapters do not spell out. Questions are
// original. Explanations, context notes and trap notes are written from scratch
// - the deep link is there so the learner reads DDS's own authoritative wording
// on the state's site.

const B = "https://dds.georgia.gov/";
const SIGNS = B + "section-7-signs-signals-markings";
const SIGNS2 = B + "section-7-continued";
const WARN = B + "section-7-continued-warning-signs";
const WARN2 = B + "section-7-continued-more-warning-signs";
const GUIDE = B + "section-7-continued-guide-signs";
const CONSTR = B + "section-7-continued-construction-maintenance-warning-signs";
const SIGNALS = B + "section-7-continued-traffic-signals-and-signs";
const SIGNALS2 = B + "section-7-more-signals-signs";
const MARKINGS = B + "section-7-continued-other-signs-signals";
const ROW = B + "section-5-continued";
const TURNS = B + "section-5-turning-signals-parallel-parking";
const KEEPRIGHT = B + "section-5-continued-keep-right-except-pass";
const OTHER = B + "section-5-continued-other-laws";
const TEEN = B + "section-6-continued";
const JOSHUA = B + "teen-drivers/joshuas-law-requirements";
const TESTING = B + "section-3-testing-information";
const SAFETY2 = B + "section-8-continued-more-safety-guidelines";
const SAFETY3 = B + "section-8-continued-more-safety-guidelines-pt2";
const SHARE = B + "section-9-continued";
const SHARE2 = B + "section-9-continued-sharing-road";
const CRASH = B + "section-11-crashes";
const LOSING = B + "section-10-continued";
const PDF = B + "document/publication/ga-drivers-manual/download";

export const georgiaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Georgia Basics",
    difficulty: "starter",
    description:
      "The first things a Georgia driver has to know cold: what the sign shapes mean, who goes first, and the handful of numbers DDS expects you to recite. Signs get the biggest share here, because half the real exam is signs.",
    questions: [
      {
        id: "ga_s1_01",
        topic: "signs",
        question:
          "You come to an eight-sided red sign with a marked stop line painted across your lane. Where does Georgia require you to stop?",
        choices: [
          "At the stop line",
          "Past the line, far enough forward to see traffic",
          "Level with the sign itself",
          "Anywhere before you enter the intersection",
        ],
        correctIndex: 0,
        explanation:
          "An octagon always means stop, and when a stop line is painted you stop at the line. The line is placed where a stopped vehicle still leaves the crosswalk clear, so creeping past it defeats its purpose.",
        context:
          "Georgia sets a fallback order for stopping: at the marked stop line if there is one, otherwise before the crosswalk on your side of the intersection, and if there is no crosswalk either, at the point where you can best see oncoming traffic. Only one of those applies at a time, and the painted line always outranks the others. You then stay put until pedestrians have finished crossing your half of the road and you have yielded to traffic coming close.",
        trap:
          "Stopping level with the pole is the instinctive answer, but the sign is set back from the intersection and the line is the legal stopping point.",
        excerptKey: "sign-octagon",
        sourceLabel: "Georgia Driver's Manual - Shapes of Signs",
        sourceUrl: SIGNS,
      },
      {
        id: "ga_s1_02",
        topic: "signals",
        question: "A steady red light is showing as you reach an intersection. What must you do?",
        choices: [
          "Slow to a crawl and continue if nothing is coming",
          "Stop only if a vehicle or pedestrian is already in the intersection",
          "Stop, then proceed straight ahead once you have yielded",
          "Come to a complete stop before the crosswalk or intersection and wait for green",
        ],
        correctIndex: 3,
        explanation:
          "Steady red means a full stop before the crosswalk or intersection, and you wait there until the light turns green. The only movement Georgia allows on red is a turn, and only after that stop.",
        context:
          "Georgia's steady signals run red for stop, yellow as a warning that red is coming, and green to proceed when it is safe. Green is not a licence to drive into a blocked intersection - you still stop for pedestrians and yield to vehicles already inside it. A police officer directing traffic outranks every signal, even when the instruction contradicts the light.",
        trap:
          "Treating red as a yield is the single most common way people lose the point. Red is an absolute stop; a flashing red is the one that behaves like a stop sign.",
        excerptKey: "signal-red",
        sourceLabel: "Georgia Driver's Manual - Traffic Signals and Signs",
        sourceUrl: SIGNALS,
      },
      {
        id: "ga_s1_03",
        topic: "speed",
        question:
          "You are driving through a residential district in Georgia and there is no speed limit sign anywhere. What speed does the law assume?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "With nothing posted, an urban or residential district in Georgia carries a 30 mph maximum. A local authority can post something lower, but absent a sign, 30 is the number you are held to.",
        context:
          "Georgia publishes standard maximums so an unposted road is never guesswork: 30 mph in an urban or residential district, 35 mph on an unpaved county road, 55 mph everywhere else, 65 mph on an urban interstate or a multi-lane divided highway, and 70 mph on a rural interstate. Every one of them is a ceiling that a posted sign can override in either direction.",
        trap:
          "25 mph is the residential default in a lot of other states, which is exactly why drivers who learned elsewhere pick it in Georgia.",
        commonlyMissed: true,
        excerptKey: "speed-limits-general",
        sourceLabel: "Georgia Driver's Manual - Speed Limits",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s1_04",
        topic: "signs",
        question: "What does a downward-pointing triangular sign require of you?",
        choices: [
          "Slow to a safe speed, stop if necessary, and give way",
          "Stop completely, then proceed",
          "Merge without changing your speed",
          "Nothing unless another vehicle is visible",
        ],
        correctIndex: 0,
        explanation:
          "The triangle is the yield sign. You slow to a speed that suits the conditions, stop if that is what it takes, and give way to vehicles already in the intersection or closing on it.",
        context:
          "A yield is a conditional stop: the obligation to give way is absolute, the obligation to halt is not. If there is a marked stop line and you do have to stop, you stop at that line. The vehicles you owe the right of way to are those already inside the intersection and those approaching closely on the road you are joining.",
        trap:
          "'Merge without changing speed' describes what an impatient driver does at a yield, and it is how yield-sign collisions happen.",
        excerptKey: "sign-triangle",
        sourceLabel: "Georgia Driver's Manual - Shapes of Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s1_05",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection with no signs or signals at the same moment, approaching from roads that cross at right angles. Who yields?",
        choices: [
          "The car travelling faster",
          "The driver on the left yields to the driver on the right",
          "The driver on the right yields to the driver on the left",
          "The car on the wider of the two roads goes first",
        ],
        correctIndex: 1,
        explanation:
          "At an uncontrolled intersection where two vehicles arrive together, Georgia gives it to the driver on the right, so the driver on the left is the one who yields.",
        context:
          "The same tie-break carries over to a four-way stop: everyone yields to pedestrians first, then vehicles go in the order they arrived, and when two arrive together the one on the right goes. Georgia frames right of way as something given rather than taken - if another driver takes your turn, letting them go is the correct response even when you were legally entitled to proceed.",
        trap:
          "Reversing it to 'yield to the left' is the single most common error, and it produces a collision rather than a stand-off.",
        excerptKey: "row-uncontrolled",
        sourceLabel: "Georgia Driver's Manual - Laws Governing Right-of-Way",
        sourceUrl: ROW,
      },
      {
        id: "ga_s1_06",
        topic: "signs",
        question: "A yellow diamond-shaped sign with a black symbol on it is telling you what?",
        choices: [
          "A rule you must obey applies from this point",
          "Roadwork is being carried out here",
          "You are approaching a place of public interest",
          "There is a hazard on or beside the road ahead",
        ],
        correctIndex: 3,
        explanation:
          "Diamonds warn. Yellow with a black word or symbol means a hazard exists on the roadway ahead or right beside it, and you should be adjusting before you reach it.",
        context:
          "Georgia's shape system lets you react before you can read the words: octagon means stop, triangle means yield, diamond warns, a round sign means a railroad crossing is coming, a pentagon means school, a vertical rectangle is regulatory and a horizontal rectangle is a guide sign. Warning diamonds are usually yellow, but they can also be fluorescent green where school, pedestrian or cycling activity needs extra emphasis.",
        trap:
          "Orange, not yellow, is the roadwork colour - an orange diamond means construction, a yellow one means a permanent hazard.",
        excerptKey: "sign-diamond",
        sourceLabel: "Georgia Driver's Manual - Shapes of Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s1_07",
        topic: "safety",
        question:
          "Five people are riding in a car in Georgia. Under state law, which of them must wear a seat belt?",
        choices: [
          "Everyone in the front seat, plus every occupant under 18 wherever they sit",
          "Only the driver",
          "Everyone in the vehicle, whatever their age or seat",
          "Only the people in the front seats",
        ],
        correctIndex: 0,
        explanation:
          "Georgia requires a lap-and-shoulder belt on every front-seat occupant, and separately requires a belt on every occupant under 18 no matter which seat they are in.",
        context:
          "The rule has two independent halves - a seat test for adults and an age test for minors - so an adult in the back seat of a car is outside the belt requirement while a 16-year-old in the same seat is not. Georgia enforces this as a primary law, meaning an officer can stop and cite you for the belt alone without seeing any other violation. Children under eight are covered by a stricter rule again and need a proper child restraint.",
        trap:
          "'Only the front seats' is the rule as it applies to adults, which is why it feels right - it just leaves out the under-18 half.",
        excerptKey: "seat-belts",
        sourceLabel: "Georgia Driver's Manual - Safety Belts",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s1_08",
        topic: "rules",
        question:
          "You are at a red light in the right lane and want to turn right. No sign at the intersection says anything about turning. What does Georgia allow?",
        choices: [
          "Turn without stopping if the way is clear",
          "Turn after a complete stop, once you have yielded to traffic and pedestrians",
          "Wait for green - right on red is not allowed in Georgia",
          "Turn only when a green arrow appears",
        ],
        correctIndex: 1,
        explanation:
          "Right on red is permitted in Georgia unless a sign at that intersection forbids it, but only after a complete stop and only when you have yielded to everything with the right of way and judged the turn safe.",
        context:
          "The stop comes first and it has to be a real one, made before the crosswalk. Georgia also allows a left turn on red in one narrow case: from the left lane of a one-way street onto another one-way street where traffic runs to your left, again after stopping and yielding. Either turn disappears the moment a NO TURN ON RED sign is posted.",
        trap:
          "Rolling the turn is the classic failure. The manual treats the complete stop as the condition that makes the turn lawful at all.",
        excerptKey: "right-turn-on-red",
        sourceLabel: "Georgia Driver's Manual - Laws Governing Right-of-Way",
        sourceUrl: ROW,
      },
      {
        id: "ga_s1_09",
        topic: "signs",
        question: "A five-sided sign beside the road is warning you about what?",
        choices: [
          "A rest area",
          "A hospital ahead",
          "A hidden driveway",
          "A school zone or school crossing",
        ],
        correctIndex: 3,
        explanation:
          "The pentagon is used for school warnings - a school zone, a school crossing, or both. Georgia puts it well before the school so you have time to slow.",
        context:
          "Where a pentagon is used it goes up no less than 150 feet and no more than 700 feet ahead of the school grounds or crossing. The shape can appear in fluorescent yellow-green rather than plain yellow, which is a high-emphasis colour Georgia reserves for school, pedestrian and cycling activity. A separate rectangular school speed limit sign sets the reduced limit, and that limit applies when its yellow lights are flashing.",
        trap:
          "Blue signs, not five-sided ones, point you toward hospitals and other motorist services.",
        excerptKey: "sign-pentagon",
        sourceLabel: "Georgia Driver's Manual - Shapes of Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s1_10",
        topic: "sharing",
        question:
          "On an ordinary two-lane street a school bus ahead of you switches its flashing lights to red and swings out its stop arm. What must traffic do?",
        choices: [
          "Drivers in both directions must stop",
          "Only the vehicles behind the bus need to stop",
          "Stop only if you can see children on the road",
          "Pass slowly on the left if the way looks clear",
        ],
        correctIndex: 0,
        explanation:
          "Once the red lights are flashing and the stop arm is out, passing the bus is unlawful for every driver approaching or meeting it. On an undivided road that means traffic in both directions stops.",
        context:
          "The bus warns you first: yellow flashers mean it is about to stop, and every approaching driver should be slowing and preparing to stop before the lights turn red. The one relief comes on a highway split by a median, where traffic on the far side of the divider may keep going. After stopping you stay stopped until the bus moves off or switches its warnings off and every child is clear of the road.",
        trap:
          "'Only if children are visible' inverts the rule - the child you cannot see is exactly the one it protects. Unlawfully passing a stopped school bus is a six-point offence in Georgia.",
        commonlyMissed: true,
        excerptKey: "school-bus-red-lights",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With School Buses",
        sourceUrl: SHARE2,
      },
      {
        id: "ga_s1_11",
        topic: "signals",
        question: "The signal above your lane is a red light flashing on and off. How do you treat it?",
        choices: [
          "Wait where you are until the signal returns to normal",
          "As a stop sign - stop completely, then go when it is safe",
          "As a green light, since the intersection is running on flashers",
          "Slow down and pass through with caution",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red is handled exactly like a stop sign: stop completely, yield to pedestrians and to other vehicles at the intersection, then proceed when the way is clear.",
        context:
          "Flashing signals split by colour. Flashing red is a stop sign; flashing yellow means slow down and use caution but you need not stop. A flashing yellow arrow is different again - it lets you turn left after yielding, because oncoming traffic still has a green. If the signal is dead altogether rather than flashing, every driver treats the intersection as an all-way stop.",
        trap:
          "Waiting for the signal to fix itself blocks the intersection. A flashing red is a working instruction, not a fault to sit through.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Georgia Driver's Manual - Traffic Signals and Signs",
        sourceUrl: SIGNALS,
      },
      {
        id: "ga_s1_12",
        topic: "licensing",
        question:
          "A 15-year-old holds a Georgia Class C Instructional Permit. Who has to be in the car with them?",
        choices: [
          "Nobody, as long as they stay off the interstate",
          "Any licensed driver over 18",
          "A licensed Class C driver at least 21 years old, sitting beside them",
          "A parent or legal guardian, in any seat",
        ],
        correctIndex: 2,
        explanation:
          "A permit holder may drive a Class C vehicle only when accompanied by someone at least 21 who is licensed for Class C, capable of taking control, and occupying the seat beside the driver.",
        context:
          "The instructional permit is the first of Georgia's three graduated stages. You can apply at 15, you pass a knowledge exam on road signs and road rules to get it, and it stays valid for two years. The supervising adult has to be next to you - not in a back seat and not following in another car - precisely so they can grab the wheel if it comes to that.",
        trap:
          "'Any licensed driver over 18' is the rule in some other states. Georgia sets the bar at 21 and requires the front passenger seat.",
        excerptKey: "class-cp-conditions",
        sourceLabel: "Georgia Driver's Manual - Conditions of a Class C Instructional Permit",
        sourceUrl: TEEN,
      },
      {
        id: "ga_s1_13",
        topic: "signs",
        question: "A round yellow sign with a black X and two Rs appears beside the road. What is ahead?",
        choices: [
          "A weight-restricted bridge",
          "A hospital zone",
          "A crossroads with a minor road",
          "A railroad crossing",
        ],
        correctIndex: 3,
        explanation:
          "The circle is reserved for one message in Georgia: a railroad crossing is coming. It goes up a few hundred feet before the tracks so you can slow, look and listen.",
        context:
          "The round sign is the advance warning; the white X-shaped crossbuck stands at the crossing itself. At the crossing you yield to any train, and a complete stop is required when a red light is flashing, when gates are down, when a flagman signals, when a stop sign is posted, or when a train is close enough to be a hazard. Passing another vehicle is prohibited at every railroad crossing.",
        trap:
          "Never try to judge whether you can beat a train across. The manual's instruction is to stop, not to calculate.",
        excerptKey: "sign-round",
        sourceLabel: "Georgia Driver's Manual - Shapes of Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s1_14",
        topic: "impairment",
        question:
          "For a driver aged 21 or over in Georgia, what blood alcohol concentration puts them legally under the influence?",
        choices: ["0.02", "0.05", "0.08", "0.10"],
        correctIndex: 2,
        explanation:
          "At 0.08 grams or more by alcohol weight in the blood, a driver 21 or older is considered under the influence in Georgia.",
        context:
          "There are two thresholds in Georgia, not one. Drivers 21 and over are at 0.08; anyone under 21 is irrefutably under the influence at 0.02, which is close enough to zero that a single drink will do it. Neither number is a safe-driving line - you can be convicted below the limit if alcohol, a drug or any other substance has impaired your ability to drive safely.",
        trap:
          "0.10 was the old national figure and still surfaces in people's memories. Georgia's adult limit is 0.08.",
        excerptKey: "dui-21-and-over",
        sourceLabel: "Georgia Driver's Manual - Driving Under the Influence",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s1_15",
        topic: "parking",
        question: "How close to a fire hydrant may you leave a parked car in Georgia?",
        choices: ["No closer than 10 feet", "No closer than 15 feet", "No closer than 25 feet", "No closer than 30 feet"],
        correctIndex: 1,
        explanation:
          "Georgia keeps 15 feet clear either side of a fire hydrant. Inside that distance you may only pause momentarily to pick up or set down a passenger.",
        context:
          "The manual lists a set of clearances that get tested together: 15 feet from a fire hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway, 30 feet from a stop sign, yield sign or traffic signal, 50 feet from a railroad crossing, and 75 feet from the point directly across the street from a fire station driveway. Learn them as a set - the exam mixes them up.",
        trap:
          "30 feet is the stop-sign and signal figure, not the hydrant one. Swapping the two is the usual slip.",
        excerptKey: "parking-distances",
        sourceLabel: "Georgia Driver's Manual - Stopping, Standing, and Parking",
        sourceUrl: TURNS,
      },
      {
        id: "ga_s1_16",
        topic: "signs",
        question: "You see a diamond-shaped sign with an orange background and black markings. What does the colour tell you?",
        choices: [
          "Road construction or maintenance",
          "A permanent hazard in the road",
          "A school or pedestrian crossing",
          "A detour onto a numbered route",
        ],
        correctIndex: 0,
        explanation:
          "Orange is Georgia's roadwork colour. An orange sign with black markings marks construction or maintenance ahead and is meant to give you time to adjust your speed.",
        context:
          "Inside a work zone the whole traffic-control kit changes. Orange signs and flaggers direct you through, and a flagger carries the same authority as a regulatory sign. Work vehicles show flashing amber lights and you must yield to them. Speeding past a posted work-zone limit is a misdemeanour of a high and aggravated nature in Georgia, with a fine of at least $100 and up to $2,000.",
        trap:
          "Yellow warns of a hazard that is always there; orange warns of one that crews have created and will remove.",
        excerptKey: "construction-signs-orange",
        sourceLabel: "Georgia Driver's Manual - Construction and Maintenance Warning Signs",
        sourceUrl: CONSTR,
      },
      {
        id: "ga_s1_17",
        topic: "signals",
        question:
          "There is a white line painted across your lane a few feet before the crosswalk. What is it for?",
        choices: [
          "It warns that the lane ends ahead",
          "It marks the point beyond which your vehicle should not cross when stopping for a traffic control device",
          "It marks the edge of the pedestrian crosswalk",
          "It shows where a bicycle lane begins",
        ],
        correctIndex: 1,
        explanation:
          "That is a stop line. It marks the limit your vehicle should not cross when you stop for a signal or a stop sign, and in urban areas it usually sits about four feet back from the crosswalk.",
        context:
          "Georgia is explicit that drivers stop at the stop line when one is present, not level with the stop sign or under the signal head. The line exists so a stopped vehicle leaves the crosswalk usable. Crosswalk lines are a separate marking, painted across the road and sometimes in a ladder pattern, and pedestrians in them have the right of way over vehicles.",
        trap:
          "Confusing the stop line with the crosswalk costs you the crosswalk - stopping on it forces pedestrians into the traffic lane.",
        excerptKey: "stop-lines",
        sourceLabel: "Georgia Driver's Manual - Pavement Markings",
        sourceUrl: MARKINGS,
      },
      {
        id: "ga_s1_18",
        topic: "rules",
        question:
          "Your light turns green but the intersection ahead is still occupied by cross traffic clearing it. What should you do?",
        choices: [
          "Move in slowly - the green gives you priority",
          "Sound your horn to clear the way",
          "Wait until the intersection is clear before entering",
          "Enter and stop in the middle so you are ready to go",
        ],
        correctIndex: 2,
        explanation:
          "Green means you may proceed only when it is safe. Georgia tells you to wait for the intersection to clear rather than driving in just because the light has changed.",
        context:
          "A green light resolves the conflict between the signals, not the conflict between vehicles. You still stop for pedestrians already in the crosswalk and still yield to vehicles inside the intersection. Entering an intersection you cannot get clear of is separately an offence - obstructing an intersection carries three points in Georgia.",
        trap:
          "Nosing in and waiting feels assertive but leaves you stranded across the cross traffic when the light changes.",
        excerptKey: "row-green-light",
        sourceLabel: "Georgia Driver's Manual - Laws Governing Right-of-Way",
        sourceUrl: ROW,
      },
      {
        id: "ga_s1_19",
        topic: "safety",
        question:
          "The Georgia manual gives a counting method for checking your following distance. What do you count?",
        choices: [
          "Three seconds between you and the vehicle ahead in all conditions",
          "One second for every 10 mph of your speed",
          "One car length for every 10 mph of your speed",
          "Two seconds from the moment the car ahead passes a fixed point",
        ],
        correctIndex: 3,
        explanation:
          "Pick a fixed object, and when the car ahead passes it count 'one-thousand-one, one-thousand-two'. If you reach the object before you finish counting, you are too close.",
        context:
          "Two seconds is the floor on a dry road in daylight, not a target. Georgia says the gap should be bigger in bad weather, in construction, in heavy traffic and always at night. Following a motorcycle deserves three or four seconds because riders can stop faster than you can, and following a loaded tractor-trailer deserves more still, since it needs about three times a car's stopping distance from 55 mph.",
        trap:
          "The one-car-length-per-10-mph rule appears in the manual's truck-safety advice, not as the general following-distance test.",
        excerptKey: "following-too-closely",
        sourceLabel: "Georgia Driver's Manual - Following Too Closely",
        sourceUrl: SAFETY2,
      },
      {
        id: "ga_s1_20",
        topic: "signs",
        question: "A round red sign with a white horizontal bar faces you at the mouth of a street. What does it mean?",
        choices: [
          "Do not enter - this is a one-way road with traffic coming toward you",
          "Traffic ahead has been temporarily halted",
          "You are entering a restricted parking zone",
          "The road ahead is closed for construction",
        ],
        correctIndex: 0,
        explanation:
          "That is the DO NOT ENTER sign. It marks a one-way road you would be entering against the flow, so traffic would be coming straight at you.",
        context:
          "Georgia pairs it with the WRONG WAY sign, a red rectangle that appears further along when a driver has already turned in the wrong direction. Both are regulatory, and a red circle with a slash through a symbol is the general Georgia shorthand for 'no' - whatever is pictured inside the circle is what is forbidden.",
        trap:
          "Do not read it as advisory. Ignoring it puts you head-on into traffic that has no reason to expect you.",
        excerptKey: "sign-do-not-enter",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s1_21",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with lights and siren going. What does Georgia expect you to do?",
        choices: [
          "Pull left so the ambulance can use the right lane",
          "Slow down, move over to the shoulder or as far right as you can, and stop",
          "Speed up until you reach a wider stretch of road",
          "Stay in your lane and hold a steady speed",
        ],
        correctIndex: 1,
        explanation:
          "You slow, move to the shoulder or as far right in the roadway as you can manage, and stop - taking care not to endanger other drivers, cyclists or pedestrians while doing it.",
        context:
          "The one thing you must not do is stop where you block the emergency vehicle's path. Georgia warns specifically against leaving your car sitting in an intersection or anywhere it stops the ambulance making a turn it needs. A separate rule keeps you 200 feet back from fire apparatus responding to an alarm, and forbids parking within 500 feet of fire apparatus stopped at one.",
        trap:
          "Pulling left is how you end up in the lane the ambulance chose. Georgia's default is right, always.",
        excerptKey: "row-emergency-vehicle",
        sourceLabel: "Georgia Driver's Manual - Laws Governing Right-of-Way",
        sourceUrl: ROW,
      },
      {
        id: "ga_s1_22",
        topic: "signs",
        question: "What is the white X-shaped sign standing at a railroad crossing called, and what does it require?",
        choices: [
          "A crossing gate indicator - proceed only on a green arrow",
          "A cattle guard marker - no action needed",
          "A crossbuck - yield to any approaching train",
          "A grade marker - stop every time you reach it",
        ],
        correctIndex: 2,
        explanation:
          "It is the crossbuck, placed at every railroad crossing, and it means yield to any train that is coming. Slow down, look and listen before you cross.",
        context:
          "A plate below the crossbuck tells you how many tracks there are, which matters because a second train can be hidden behind the first. A complete stop becomes mandatory when a red light is flashing at the crossing. When you do have to stop, Georgia puts you between 15 and 50 feet from the nearest rail.",
        trap:
          "The crossbuck by itself is a yield, not a stop - but the moment lights flash or gates drop, stopping is compulsory.",
        excerptKey: "sign-crossbuck",
        sourceLabel: "Georgia Driver's Manual - Guide Signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ga_s1_23",
        topic: "speed",
        question:
          "Nothing is posted on a rural stretch of Georgia interstate. What is the maximum speed the law allows?",
        choices: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctIndex: 2,
        explanation:
          "A rural interstate in Georgia carries a 70 mph general maximum. Urban interstates and multi-lane divided highways sit lower, at 65 mph.",
        context:
          "The interstate figures are the pair people mix up, because the difference is the surroundings rather than the road design. Rural interstate is 70, urban interstate or multi-lane divided highway is 65, everything else that is not urban, residential or unpaved county road is 55. Posted signs override all of it, and the Georgia DOT or a local jurisdiction can adjust a limit for local conditions.",
        trap:
          "75 mph does not appear anywhere in Georgia's general rules - but drive 85 anywhere, or 75 on a two-lane road, and the Super Speeder fee lands on top of your fine.",
        excerptKey: "speed-limits-general",
        sourceLabel: "Georgia Driver's Manual - Speed Limits",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s1_24",
        topic: "rules",
        question: "Under Georgia's Hands Free Law, what may you not do with a phone while driving?",
        choices: [
          "Use it in a dashboard mount",
          "Use it through headphones",
          "Talk on it hands-free",
          "Hold it or support it with any part of your body",
        ],
        correctIndex: 3,
        explanation:
          "The law bans holding or supporting a wireless device with any part of the body. Mounted, wired to headphones or otherwise hands-free is fine; propped between shoulder and ear is not.",
        context:
          "House Bill 673 also bars writing, sending or reading any text-based message, and watching, recording or broadcasting video while driving. Penalties climb with each conviction: one point and up to $50 for the first, two points and up to $100 for the second, three points and up to $150 for the third or later. Georgia separately requires drivers to exercise due care and prohibits anything that distracts from safe operation.",
        trap:
          "'Support with any part of the body' is deliberately broad. Wedging the phone against your leg or shoulder is exactly what it catches.",
        commonlyMissed: true,
        excerptKey: "hands-free-law",
        sourceLabel: "Georgia Driver's Manual - Texting and Cell Phones",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s1_25",
        topic: "signs",
        question: "A yellow diamond shows a black octagon shape with the word STOP inside it. What is it telling you?",
        choices: [
          "A stop sign is coming - start slowing and be ready to stop",
          "Stop right here, at this sign",
          "Traffic on the crossing road has a stop sign",
          "The stop sign ahead has been removed",
        ],
        correctIndex: 0,
        explanation:
          "It is an advance warning. A stop sign is ahead, usually where you would not see it in time, so you start slowing now and arrive ready to stop.",
        context:
          "Georgia uses several of these advance-warning diamonds and they all work the same way: stop ahead, yield ahead, and signal ahead each warn you about a control device you cannot see yet. None of them is itself the control - you do not stop at the warning, you stop at the sign it warns about.",
        trap:
          "Stopping at the warning diamond is the wrong reading and puts you at risk of a rear-end collision.",
        excerptKey: "sign-stop-ahead",
        sourceLabel: "Georgia Driver's Manual - More Warning Signs",
        sourceUrl: WARN2,
      },
      {
        id: "ga_s1_26",
        topic: "sharing",
        question:
          "You are overtaking a cyclist on a road where you cannot change lanes. What is the minimum space Georgia requires between your vehicle and the bike?",
        choices: ["Two feet", "Three feet", "Four feet", "Six feet"],
        correctIndex: 1,
        explanation:
          "Three feet is the minimum legal passing space in Georgia, and it has to be maintained for the whole of the manoeuvre, not just at the closest point.",
        context:
          "Georgia's first preference is that you change into a lane that is not next to the bicycle at all. Only when a lane change is impossible, unlawful or unsafe do you fall back on passing in the same lane, and then you must slow to at least 10 mph under the posted limit or 25 mph, whichever is higher, before easing past with three feet of clearance. Passing a cyclist improperly is a misdemeanour carrying a fine of up to $250.",
        trap:
          "Cyclists are entitled to the full lane and are not obliged to use a bike lane even where one exists, so 'they should have moved over' is not a defence.",
        commonlyMissed: true,
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With Bicycles",
        sourceUrl: SHARE,
      },
      {
        id: "ga_s1_27",
        topic: "licensing",
        question: "How is Georgia's knowledge exam built, and what does it take to pass?",
        choices: [
          "One 20-question test, 15 correct to pass",
          "Two 20-question parts - road signs and road rules - needing 15 correct in each",
          "Two 20-question parts scored together, needing 30 correct overall",
          "One 40-question test, 30 correct to pass",
        ],
        correctIndex: 1,
        explanation:
          "The exam is a road signs part and a road rules part, 20 questions each, and you must answer 15 of 20 correctly in each part. The parts are passed separately.",
        context:
          "That structure is why a strong half cannot rescue a weak one: 20 out of 20 on signs and 14 out of 20 on rules is still a fail. The signs part is given in English only, though the rules part is available in some other languages. Fail a part and you wait until the next day to retake it the first time, and seven days after a second or later failure.",
        trap:
          "Adding the halves together and looking for 30 out of 40 is the wrong model - Georgia scores each part on its own.",
        commonlyMissed: true,
        excerptKey: "exam-road-signs",
        sourceLabel: "Georgia Driver's Manual - Testing Information",
        sourceUrl: TESTING,
      },
      {
        id: "ga_s1_28",
        topic: "signs",
        question: "A regulatory sign shows a U-shaped arrow inside a red circle with a slash. What is prohibited?",
        choices: [
          "Stopping anywhere in the intersection",
          "Turning right at this intersection",
          "Turning around to go back the other way at this intersection",
          "Changing lanes through the intersection",
        ],
        correctIndex: 2,
        explanation:
          "The crossed-out U-turn arrow means you cannot turn around to head in the opposite direction at that intersection.",
        context:
          "Even where no sign forbids it, Georgia restricts U-turns by sight line: you must not make one on a curve or near the crest of a hill where drivers approaching from either direction cannot see you. The red circle and slash is a general convention here - whatever the symbol inside shows is the manoeuvre being banned.",
        trap:
          "A crossed-out right-turn arrow is a different sign entirely. Read the arrow shape, not just the red circle.",
        excerptKey: "sign-no-u-turn",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s1_29",
        topic: "impairment",
        question:
          "A 19-year-old is stopped in Georgia. At what blood alcohol concentration are they irrefutably considered under the influence?",
        choices: ["0.02", "0.04", "0.05", "0.08"],
        correctIndex: 0,
        explanation:
          "Anyone under 21 is irrefutably under the influence at 0.02 grams or more by alcohol weight - a quarter of the adult threshold and effectively a zero-tolerance rule.",
        context:
          "Georgia's under-21 regime is harsher throughout. A first DUI suspension for a young driver with a reading between 0.02 and 0.08 runs a minimum of six months, and no limited driving permit is available for a DUI conviction before age 21. Drugs, including prescribed medication that impairs you, count the same as alcohol.",
        trap:
          "0.04 is the commercial-vehicle figure and 0.08 is the adult one. Neither applies to an under-21 driver in a car.",
        commonlyMissed: true,
        excerptKey: "dui-under-21",
        sourceLabel: "Georgia Driver's Manual - Driving Under the Influence",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s1_30",
        topic: "emergencies",
        question:
          "You have a minor collision in Georgia with no injuries. At what level of property damage must you notify law enforcement?",
        choices: [
          "Only when a vehicle has to be towed",
          "Any damage at all",
          "When damage exceeds $250",
          "When damage exceeds $500",
        ],
        correctIndex: 3,
        explanation:
          "Georgia requires you to notify the nearest law enforcement agency immediately if anyone is injured or killed, or if property damage exceeds $500.",
        context:
          "Alongside the report you stop in a safe place, give reasonable assistance to anyone hurt, warn approaching traffic if you can do so safely, and exchange name, address, plate number and licence number with the other driver. If you damage an unattended vehicle you either find the owner or leave your details somewhere they will be found.",
        trap:
          "Waiting to see whether a vehicle needs towing is not the test. The threshold is the value of the damage, not how the car leaves the scene.",
        excerptKey: "crash-notify-500",
        sourceLabel: "Georgia Driver's Manual - If You Are Involved In A Crash",
        sourceUrl: CRASH,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Signs, Signals and Everyday Rules",
    difficulty: "easy",
    description:
      "Thirty questions on the material most Georgia candidates get right once they have read the manual - sign shapes and colours, signal behaviour, lane markings and the ordinary courtesies the law happens to require.",
    questions: [
      {
        id: "ga_s2_01",
        topic: "signs",
        question: "Georgia uses vertical rectangular signs mainly for what purpose?",
        choices: [
          "Regulatory instructions you must obey like traffic laws",
          "Warning of hazards in the road ahead",
          "Marking places of historic interest",
          "Guiding you to a destination",
        ],
        correctIndex: 0,
        explanation:
          "A vertical rectangle is generally a regulatory sign - it tells you what you must do, and it carries the force of a traffic law.",
        context:
          "The orientation of the rectangle is the tell. Standing tall means regulatory, so a speed limit, a keep right or a no parking sign are all vertical. Lying wide means guide, so route markers and destination signs are horizontal. Georgia relies on the seven shapes precisely so a driver can start reacting before the words become readable.",
        trap:
          "Both kinds are rectangles, so people match on shape alone. It is the orientation that separates them.",
        excerptKey: "sign-vertical-rectangle",
        sourceLabel: "Georgia Driver's Manual - Shapes of Signs",
        sourceUrl: SIGNS,
      },
      {
        id: "ga_s2_02",
        topic: "signals",
        question: "The traffic signal at an intersection is completely dead - no lights at all. How do you proceed?",
        choices: [
          "Yield to traffic on your right and keep moving",
          "Treat the intersection as if a stop sign is posted for every direction",
          "The larger road keeps priority",
          "Proceed with caution without stopping",
        ],
        correctIndex: 1,
        explanation:
          "When the signal is out entirely, every driver treats the intersection as an all-way stop. That converts an unpredictable situation into one everybody already knows the rules for.",
        context:
          "Georgia distinguishes a dead signal from a flashing one. Dead means all-way stop. Flashing means you follow the colour you are facing - yellow lets you proceed with caution, red requires a complete stop and a wait until it is safe. Get the two cases the wrong way round and you either stop needlessly on a flashing yellow or roll through a dark intersection.",
        trap:
          "'Bigger road wins' is a folk rule with no legal basis in Georgia. Road size decides nothing here.",
        commonlyMissed: true,
        excerptKey: "signal-not-functioning",
        sourceLabel: "Georgia Driver's Manual - Traffic Signals and Signs",
        sourceUrl: SIGNALS,
      },
      {
        id: "ga_s2_03",
        topic: "signs",
        question: "Warning signs in Georgia are usually which colour combination?",
        choices: [
          "Yellow with black markings",
          "Orange with black markings",
          "White with black letters",
          "Blue with white symbols",
        ],
        correctIndex: 0,
        explanation:
          "Yellow with black markings is the standard warning combination, alerting you to a condition immediately ahead that needs a response from you.",
        context:
          "Georgia allows one substitution: a warning sign can be fluorescent yellow-green with black markings where school, pedestrian or bicycle activity needs extra emphasis. Orange belongs to construction, blue and white to motorist services, and white with black lettering to regulatory signs such as speed limits.",
        trap:
          "Orange looks close enough to yellow at a distance, but it means crews are working rather than the road itself is awkward.",
        excerptKey: "warning-signs-color",
        sourceLabel: "Georgia Driver's Manual - Warning Signs",
        sourceUrl: WARN,
      },
      {
        id: "ga_s2_04",
        topic: "rules",
        question:
          "You are driving on a two-lane road and the yellow line nearest your side of the centre is solid. What does that mean for you?",
        choices: [
          "The road narrows ahead",
          "You are not in a passing zone",
          "Passing is allowed if oncoming traffic is clear",
          "You must move into the left lane",
        ],
        correctIndex: 1,
        explanation:
          "A solid yellow line on your side of the centre marks a no-passing zone for you. If the line nearest your vehicle is solid, you may not pass.",
        context:
          "The lines are read from your own side outward. Broken yellow beside you means passing is permitted when the road ahead is clear; solid yellow beside you means it is not. Where both lines are solid, neither direction may pass. The oncoming driver can have a broken line while you have a solid one, so 'they are passing, so I can' is not a safe inference.",
        trap:
          "Reading the far line instead of the near one reverses the answer, which is why people pass out of a no-passing zone believing they were legal.",
        excerptKey: "no-passing-lines",
        sourceLabel: "Georgia Driver's Manual - No Passing Lines",
        sourceUrl: MARKINGS,
      },
      {
        id: "ga_s2_05",
        topic: "signs",
        question: "A yellow diamond warns that the bridge ahead allows room for only two lanes of traffic. Which sign is that?",
        choices: [
          "Low clearance",
          "Road ends",
          "Narrow bridge",
          "Divided highway ends",
        ],
        correctIndex: 2,
        explanation:
          "That is the narrow bridge warning. The structure has room for two lanes and no more, so you approach with caution and hold your lane position.",
        context:
          "Georgia's structural warnings each address a different constraint. Narrow bridge is about width. Low clearance is about height, and you must not enter if your vehicle or load exceeds the figure shown. Soft shoulder warns that the surface beside the pavement will not carry you except in an emergency.",
        trap:
          "Low clearance and narrow bridge both mean 'this structure is tight', but only one of them is a reason to turn a tall vehicle around.",
        excerptKey: "sign-narrow-bridge",
        sourceLabel: "Georgia Driver's Manual - Warning Signs",
        sourceUrl: WARN,
      },
      {
        id: "ga_s2_06",
        topic: "rightOfWay",
        question:
          "You are turning left at an intersection with no arrow and oncoming traffic is approaching. What is your obligation?",
        choices: [
          "Oncoming traffic must yield to a signalling vehicle",
          "Complete the turn before the oncoming vehicles arrive",
          "Both directions share the intersection equally",
          "Yield the right of way to all traffic coming from the opposite direction",
        ],
        correctIndex: 3,
        explanation:
          "A left turn yields. Whether you are turning at an intersection or into an alley or driveway, you give way to everything coming the other way.",
        context:
          "The duty extends beyond cars. You yield to bicycles coming toward you, and you stop and remain stopped for pedestrians crossing the road you are turning into until they have cleared the lanes you are travelling on. Once you have entered the intersection to turn left you may not change lanes inside it.",
        trap:
          "A turn signal announces your intention; it does not transfer the right of way to you.",
        excerptKey: "row-left-turn",
        sourceLabel: "Georgia Driver's Manual - Laws Governing Right-of-Way",
        sourceUrl: ROW,
      },
      {
        id: "ga_s2_07",
        topic: "signs",
        question: "What does a yellow diamond showing two curving arrows that cross mean in Georgia?",
        choices: [
          "Two-way traffic - you are leaving a separated one-way highway",
          "A divided highway begins ahead",
          "Lanes merge from both sides",
          "A roundabout is ahead",
        ],
        correctIndex: 0,
        explanation:
          "It warns that the separated one-way road you are on is ending and you will shortly be on a two-way highway, with traffic coming toward you again.",
        context:
          "Georgia pairs this with two divided-highway signs that catch people out. 'Divided highway begins' tells you a median is about to separate the directions; 'divided highway ends' tells you the median is running out and opposing traffic will return. All three ask for the same thing - change lanes or shift your position within the lane before the change arrives.",
        trap:
          "Mistaking it for 'divided highway begins' has you relaxing exactly when opposing traffic reappears.",
        excerptKey: "sign-two-way-traffic",
        sourceLabel: "Georgia Driver's Manual - Warning Signs",
        sourceUrl: WARN,
      },
      {
        id: "ga_s2_08",
        topic: "parking",
        question: "Where does Georgia permit you to park on a highway?",
        choices: [
          "On the shoulder for up to 15 minutes",
          "Nowhere - parking on a highway is against the law",
          "Anywhere no sign forbids it",
          "In the right-hand lane if your hazard lights are on",
        ],
        correctIndex: 1,
        explanation:
          "Parking on a highway is unlawful in Georgia. If your vehicle is disabled you make every practical effort to get it off the highway altogether.",
        context:
          "When you cannot move it, the standard is visibility: leave free passage and a clear view of your vehicle for 200 feet in each direction. On an expressway the rule is stricter still - stopping is prohibited except in an emergency, and swapping drivers, stretching your legs or fetching something from the back does not count as one.",
        trap:
          "Hazard lights make you visible; they do not make an unlawful stop lawful.",
        excerptKey: "parking-on-highway",
        sourceLabel: "Georgia Driver's Manual - Stopping, Standing, and Parking",
        sourceUrl: TURNS,
      },
      {
        id: "ga_s2_09",
        topic: "signals",
        question:
          "A left-turn signal shows a flashing yellow arrow. What are you permitted to do?",
        choices: [
          "Stop and wait for a green arrow",
          "Clear the intersection immediately - the arrow is about to go red",
          "Turn left after yielding to oncoming traffic and pedestrians",
          "Turn left with priority over oncoming traffic",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow arrow is a permitted turn. You may turn left, but oncoming traffic still has a green light, so you go only after yielding to it and to pedestrians.",
        context:
          "Georgia's arrows form a sequence worth keeping straight. A green arrow is a protected movement in the direction it points, taken after stopping for pedestrians and yielding to vehicles already inside the intersection. A yellow arrow after a green one is a warning to clear the intersection. A flashing yellow arrow is the unprotected version - permission to go, with the yielding still on you.",
        trap:
          "Treating a flashing yellow arrow as protected is how left-turn collisions happen. Flashing means yield; steady green means protected.",
        commonlyMissed: true,
        excerptKey: "signal-flashing-yellow-arrow",
        sourceLabel: "Georgia Driver's Manual - Traffic Signals and Signs",
        sourceUrl: SIGNALS,
      },
      {
        id: "ga_s2_10",
        topic: "signs",
        question: "A slow-moving vehicle emblem is a reflective orange triangle. What does Georgia say it identifies?",
        choices: [
          "A vehicle being towed",
          "A learner driver under supervision",
          "A vehicle carrying hazardous materials",
          "A vehicle travelling less than 25 miles per hour",
        ],
        correctIndex: 3,
        explanation:
          "The emblem marks a slow-moving vehicle, defined in Georgia as any vehicle moving at less than 25 mph. Such vehicles are required by law to display it.",
        context:
          "You will meet the emblem most often on farm equipment and construction machinery on rural roads. The point is closing speed: at 55 mph you are gaining on a 15 mph tractor at nearly 60 feet a second, so a vehicle that looks stationary in the distance is on you far sooner than instinct suggests.",
        trap:
          "Hazardous cargo is announced by diamond-shaped placards with numbers, not by the orange triangle.",
        excerptKey: "sign-slow-moving-vehicle",
        sourceLabel: "Georgia Driver's Manual - Guide Signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ga_s2_11",
        topic: "rules",
        question:
          "You are in the left-hand lane of an interstate at the speed limit when a faster vehicle comes up behind you. What does Georgia's Slow Poke Law require?",
        choices: [
          "Move out of the passing lane and let it by",
          "Move over only if the vehicle behind is an emergency vehicle",
          "Nothing, as long as you are at or above the limit",
          "Speed up so the vehicle behind no longer needs to pass",
        ],
        correctIndex: 0,
        explanation:
          "House Bill 459 requires you to move out of the passing lane for faster traffic regardless of your own speed. Sitting at the limit in the left lane is no defence.",
        context:
          "The trigger is the vehicle behind you, not your speedometer. A short list of exceptions exists - heavy traffic, weather, obstructions, complying with a traffic control device, being in that lane to exit or turn left, paying a toll, or being an emergency or highway maintenance vehicle on duty. Impeding traffic carries three points and a fine of up to $1,000.",
        trap:
          "'I was doing the limit' is the commonest misconception about this law, and it is exactly the argument the statute forecloses.",
        commonlyMissed: true,
        excerptKey: "slow-poke-law",
        sourceLabel: "Georgia Driver's Manual - Keep Right, Except to Pass",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s2_12",
        topic: "signs",
        question: "What does a yellow diamond showing a car with wavy lines behind it warn you about?",
        choices: [
          "Loose gravel on the surface",
          "The roadway is slippery when wet",
          "A rough or broken surface ahead",
          "A steep grade ahead",
        ],
        correctIndex: 1,
        explanation:
          "The skidding-car symbol warns that the roadway is slippery when wet. It goes up where the surface loses grip faster than drivers expect.",
        context:
          "Georgia attaches a specific warning to this sign: the first half-hour of rain is the most hazardous, because water lifts oil and other chemicals off the surface before washing them away. The same conditions make hydroplaning possible - partial loss of contact can start as low as 35 mph, and by 55 mph the tyres may lose contact with the road entirely.",
        trap:
          "The sign warns about wet grip specifically, so a dry look at the surface tells you nothing about how it behaves in the first minutes of a shower.",
        excerptKey: "sign-slippery-when-wet",
        sourceLabel: "Georgia Driver's Manual - More Warning Signs",
        sourceUrl: WARN2,
      },
      {
        id: "ga_s2_13",
        topic: "sharing",
        question: "How much of a lane is a motorcyclist entitled to in Georgia?",
        choices: [
          "Only the portion they are actually occupying",
          "The right-hand third of the lane",
          "The full width of the lane",
          "Half the lane, so a car may share it",
        ],
        correctIndex: 2,
        explanation:
          "A motorcyclist legally occupies the full width of a single lane. Passing one means using an adjacent lane - you may not share the lane with them.",
        context:
          "Riders move around within their lane on purpose, not to show off. Shifting position lets them be seen, dodge road debris and keep clear of the effects of passing vehicles. Georgia asks you to allow three or four seconds of following distance behind a motorcycle, and warns that motorcycle turn signals may not self-cancel, so a flashing indicator is not proof a rider is about to turn.",
        trap:
          "A motorcycle leaves visible space in the lane, which tempts drivers to squeeze past. That space is the rider's manoeuvring room.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With Motorcycles",
        sourceUrl: SHARE2,
      },
      {
        id: "ga_s2_14",
        topic: "signs",
        question: "A yellow diamond shows an arrow bending sharply to the right. What is ahead?",
        choices: [
          "A right-hand exit ramp",
          "A side road joining from the right",
          "A right-turn-only lane",
          "A sharp turn to the right",
        ],
        correctIndex: 3,
        explanation:
          "A sharply bent arrow means a sharp turn - the road changes direction abruptly rather than curving gently.",
        context:
          "Georgia distinguishes the sharp turn from the gentler curve, which is drawn as a smooth bend, and from the winding road sign, which warns of a series of turns. Any of them may carry a speed advisory plaque underneath, and that advisory figure is usually lower than the posted limit for the road.",
        trap:
          "A side road entering is drawn as a junction of two lines, not as a bent arrow. One is your road changing direction; the other is somebody else's road arriving.",
        excerptKey: "warning-signs-color",
        sourceLabel: "Georgia Driver's Manual - Warning Signs",
        sourceUrl: WARN,
      },
      {
        id: "ga_s2_15",
        topic: "licensing",
        question: "How long must a Georgia teenager hold an instructional permit before applying for a Class D licence?",
        choices: [
          "Six months",
          "Nine months",
          "One year and one day",
          "Two years",
        ],
        correctIndex: 2,
        explanation:
          "A teen must have held a valid instructional permit for one year and one day, and be at least 16, before applying for the Class D provisional licence.",
        context:
          "That waiting period is a core part of TADRA, Georgia's graduated licensing programme for drivers aged 15 to 18. The three steps run Class C Instructional Permit at 15, Class D provisional licence at 16 or 17, and full Class C licence at 18. One narrow exception exists: a 17-year-old with proof of military enlistment is excused from the year-and-a-day hold.",
        trap:
          "Taking driver education does not shorten the hold. It is a requirement on top of the year, not a substitute for it.",
        excerptKey: "joshuas-law",
        sourceLabel: "Georgia DDS - Joshua's Law Requirements",
        sourceUrl: JOSHUA,
      },
      {
        id: "ga_s2_16",
        topic: "rules",
        question:
          "You want to move into a centre turn lane bordered by solid and broken yellow lines to make a left turn. How early may you enter it?",
        choices: [
          "As soon as you can see the turn ahead",
          "No more than 300 feet from where you will turn",
          "No more than 100 feet from where you will turn",
          "At any point, provided you signal",
        ],
        correctIndex: 1,
        explanation:
          "Georgia caps entry into a centre turn lane at 300 feet from the location of the left turn, and prohibits using that lane for any purpose other than turning left.",
        context:
          "Two-way centre turn lanes are shared with drivers coming the other way who are also waiting to turn, which is why using one as a running lane is both unlawful and dangerous. Enter with extra caution in congested areas, because a vehicle heading the other direction may be entering the same stretch at the same moment.",
        trap:
          "Treating it as an acceleration or merging lane is a common local habit and a three-point improper-use-of-turn-lane violation.",
        excerptKey: "turn-lanes",
        sourceLabel: "Georgia Driver's Manual - Turn Lanes",
        sourceUrl: MARKINGS,
      },
      {
        id: "ga_s2_17",
        topic: "safety",
        question: "When must you use your headlights in Georgia?",
        choices: [
          "Only between sunset and sunrise",
          "Only when you cannot see 500 feet ahead",
          "From half an hour after sunset to half an hour before sunrise, whenever it is raining, and whenever visibility is limited",
          "Whenever your wipers are running, and at no other time",
        ],
        correctIndex: 2,
        explanation:
          "Georgia sets three triggers: the half-hour-after-sunset to half-hour-before-sunrise window, any time it is raining, and any time visibility is limited.",
        context:
          "Dimming has its own set of distances. Drop to low beam within 500 feet of an oncoming vehicle, within 200 feet of a vehicle you are following, on lighted roads, in rain, fog, snow or smoke, and whenever your own vision is down to less than 200 feet. In heavy fog high beams actively make things worse, because the glare bounces straight back at you.",
        trap:
          "Sunset itself is not the trigger - Georgia gives you a half-hour margin either side, and rain switches the requirement on at any hour.",
        excerptKey: "headlights-when",
        sourceLabel: "Georgia Driver's Manual - Use Headlights Properly",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s2_18",
        topic: "signs",
        question: "A rectangular sign reads SPEED LIMIT 55 in black on white. What exactly does it tell you?",
        choices: [
          "55 mph applies only in good weather",
          "You may not drive slower than 55 mph here",
          "55 mph is the recommended cruising speed here",
          "55 mph is the maximum speed permitted in this area",
        ],
        correctIndex: 3,
        explanation:
          "A black-on-white speed limit sign states the maximum permitted in that area. It is a ceiling, not a target and not a minimum.",
        context:
          "Georgia separates regulatory limits from advisory speeds by colour and shape. Black on white is the enforceable limit. A black-on-yellow or black-on-orange plaque under a warning sign is advisory, telling you the speed at which the curve or the work zone can be taken safely. Minimum speeds, where they exist, are posted separately.",
        trap:
          "A posted maximum does not make that speed safe. Conditions can make a legal speed reckless, and driving too slowly to suit conditions is its own offence.",
        excerptKey: "sign-speed-limit",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s2_19",
        topic: "rightOfWay",
        question:
          "You are pulling out of a private driveway onto a street. What does Georgia require before you enter?",
        choices: [
          "Stop and yield to all pedestrians and vehicles already on the roadway or sidewalk",
          "Sound the horn and edge out slowly",
          "Yield only to vehicles, since a driveway is not a crosswalk",
          "Nothing, provided you signal your intention",
        ],
        correctIndex: 0,
        explanation:
          "Entering or crossing a highway from an alley, private road or driveway, you stop and yield to everything already using the roadway or the sidewalk you are crossing.",
        context:
          "Two duties stack here. You stop before the sidewalk area and let pedestrians pass, and you yield to traffic already on the road. Drivers waiting to turn left into a driveway have the mirror-image obligation - wait for a gap in oncoming traffic and for pedestrians to finish crossing the sidewalk portion of the driveway.",
        trap:
          "'A driveway is not a crosswalk' is wrong twice over: Georgia treats the sidewalk crossing as a place you must stop for, and crosswalks exist at intersections even when unmarked.",
        excerptKey: "row-alley-private-road",
        sourceLabel: "Georgia Driver's Manual - Laws Governing Right-of-Way",
        sourceUrl: ROW,
      },
      {
        id: "ga_s2_20",
        topic: "signs",
        question: "You see a yellow pennant-shaped sign reading NO PASSING ZONE on the left side of the road. What does it mark?",
        choices: [
          "The end of a passing zone you may still be using",
          "The beginning of a no passing zone",
          "A stretch where only trucks may not pass",
          "A zone where passing is allowed on the right only",
        ],
        correctIndex: 1,
        explanation:
          "The pennant marks the start of a no passing zone. Any passing manoeuvre you have begun must be finished before you reach it.",
        context:
          "It is deliberately placed on the left, in your field of view when you are out in the oncoming lane and looking that way. The yellow centre lines carry the same information from the pavement, and Georgia layers additional prohibitions on top: no passing within 100 feet of a railroad crossing, bridge, viaduct or tunnel, none on a hill or curve where you cannot see far enough, none on the shoulder, and none when a school bus is stopped to load or unload.",
        trap:
          "Reading it as the end of a zone gets the geography backwards and puts you in the oncoming lane exactly where sight lines fail.",
        excerptKey: "sign-no-passing-zone",
        sourceLabel: "Georgia Driver's Manual - More Warning Signs",
        sourceUrl: WARN2,
      },
      {
        id: "ga_s2_21",
        topic: "sharing",
        question: "Which roads in Georgia may a bicyclist legally use?",
        choices: [
          "Any road, including the interstate, if riding single file",
          "Only roads with a marked bike lane",
          "Every road except interstates and interstate-like limited access highways",
          "Only roads posted at 35 mph or less",
        ],
        correctIndex: 2,
        explanation:
          "Cyclists are entitled to use every road in Georgia except the interstate and interstate-like limited access highways, and the law allows them the full lane.",
        context:
          "A bike lane is a facility, not an obligation - a cyclist is not required to be in one even where it exists. Motorists, by contrast, are prohibited from driving or parking in a bike lane except to cross it while turning, and must yield to any cyclist present when they do cross it. Before turning right, you yield to cyclists going straight through the intersection.",
        trap:
          "Assuming a marked bike lane confines cyclists to it produces exactly the right-hook collision the yield rule is written to prevent.",
        commonlyMissed: true,
        excerptKey: "bicyclists-entitled",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With Bicycles",
        sourceUrl: SHARE,
      },
      {
        id: "ga_s2_22",
        topic: "signals",
        question:
          "You are approaching a pedestrian hybrid beacon showing alternating flashing red lights. What must you do?",
        choices: [
          "Stop only if the pedestrian signal is showing WALK",
          "Slow down and continue, since flashing red at a crossing is advisory",
          "Wait until the beacon goes dark before moving",
          "Come to a full stop, then proceed once pedestrians have cleared the crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "Alternating flashing red at a hybrid beacon requires a full stop, after which you may proceed once the crosswalk is clear of pedestrians.",
        context:
          "The beacon runs a fixed sequence when a pedestrian pushes the button: dark, then flashing yellow, then solid yellow to tell you to slow and prepare to stop, then double solid red requiring a stop, then alternating flashing red. It returns to dark until somebody presses the button again, which is why an unlit beacon is not a fault.",
        trap:
          "Waiting for the beacon to go dark stalls traffic unnecessarily - the flashing red stage is the one that lets you go when the crossing is clear.",
        excerptKey: "phb-flashing-red",
        sourceLabel: "Georgia Driver's Manual - Pedestrian-Hybrid Beacons",
        sourceUrl: SIGNALS2,
      },
      {
        id: "ga_s2_23",
        topic: "rules",
        question: "What does Georgia require of a driver making a turn, in terms of signalling?",
        choices: [
          "A continuous signal for an adequate distance before the turn",
          "A signal given at least 100 feet before the turn in all cases",
          "A hand signal whenever the turn is to the left",
          "A signal only when other traffic is present",
        ],
        correctIndex: 0,
        explanation:
          "A signal is required for every turn, left or right, and it must be continuous for an adequate distance ahead of the turn so other drivers get real notice.",
        context:
          "Georgia also makes a specific misuse unlawful: flashing your turn signals as a courtesy or 'do pass' invitation to a driver behind you. Signalling exists to announce what your vehicle is about to do, and a signal that means something else muddies that. Sudden slowing or stopping calls for the proper hand, arm or brake signal as well.",
        trap:
          "'Only when other traffic is present' assumes you can see everyone who can see you, which is precisely the assumption that fails.",
        excerptKey: "turn-signal-required",
        sourceLabel: "Georgia Driver's Manual - Turn Signals and Making Turns Safely",
        sourceUrl: TURNS,
      },
      {
        id: "ga_s2_24",
        topic: "signs",
        question: "A yellow diamond shows two lines converging into one with an arrow. What is it warning you about?",
        choices: [
          "A one-way road beginning",
          "Traffic merging from the right",
          "A passing lane starting",
          "A weight limit ahead",
        ],
        correctIndex: 1,
        explanation:
          "The merge warning tells you traffic will be joining from the right and asks you to prepare to let it in safely.",
        context:
          "Georgia's merging rule works both ways. When you are the one joining, you adjust speed and position to slot in without stopping. When traffic is joining you, change lanes away from the merge if you safely can, and if you cannot, adjust your speed and position so the merging driver has somewhere to go.",
        trap:
          "The lane-reduction sign looks similar but means something different: your own lane is disappearing, not somebody else's arriving.",
        excerptKey: "sign-merge",
        sourceLabel: "Georgia Driver's Manual - More Warning Signs",
        sourceUrl: WARN2,
      },
      {
        id: "ga_s2_25",
        topic: "safety",
        question:
          "You are backing your car out of a parking space. What does the Georgia manual tell you to do?",
        choices: [
          "Sound the horn once before reversing",
          "Rely on the rear-view mirror and back slowly",
          "Turn your head and look over your right shoulder rather than depending on mirrors",
          "Use the backup camera and keep both hands on the wheel",
        ],
        correctIndex: 2,
        explanation:
          "Check all sides first, then turn your head and look over your right shoulder while backing. Mirrors alone are not enough.",
        context:
          "Georgia allows for technology at the road test but insists the applicant demonstrate the skill without it, and the same logic runs through the manual - a camera supplements the look over your shoulder rather than replacing it. In buses and large vehicles the guidance is to use all mirrors and have a reliable person outside directing the manoeuvre.",
        trap:
          "Reversing is also where the expressway rule bites: driving in reverse on an expressway is prohibited under any circumstances, even after a missed exit.",
        excerptKey: "backing-up",
        sourceLabel: "Georgia Driver's Manual - Backing Up",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s2_26",
        topic: "signs",
        question: "Georgia guide signs give you which kind of information?",
        choices: [
          "Where roadwork crews are operating",
          "Hazards immediately ahead",
          "Rules you must follow on this stretch of road",
          "Which road you are on and how to reach your destination",
        ],
        correctIndex: 3,
        explanation:
          "Guide signs identify the road you are on and route you toward your destination. Route markers, destination, distance and location signs are all guide signs.",
        context:
          "Most guide signs are rectangular and laid out wide rather than tall, though some take other shapes. They are frequently paired with a 'To' plate or an arrow showing which way to follow them. Blue and white service signs are a related family, directing you to food, fuel, lodging, hospitals and rest areas.",
        trap:
          "Guide signs never carry a legal obligation, so 'you must follow this route' is not what a green destination sign means.",
        excerptKey: "guide-signs",
        sourceLabel: "Georgia Driver's Manual - Guide Signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ga_s2_27",
        topic: "impairment",
        question:
          "Your doctor has prescribed a medication that makes you drowsy. You take it and drive. Where does Georgia stand?",
        choices: [
          "Having a prescription is no defence if the medication impairs your ability to drive safely",
          "The prescription is a complete defence",
          "Only illegal drugs can put you under the influence",
          "You are fine as long as you took the prescribed dose",
        ],
        correctIndex: 0,
        explanation:
          "Georgia says plainly that a prescription is not a defence when the medication impairs your ability to operate a vehicle safely. The impairment is what the law reaches, not the legality of the substance.",
        context:
          "The DUI provision covers alcohol, drugs whether prescription or illegal, and any other substance that impairs safe driving. Certain drugs make a person irrefutably under the influence in the same way a blood alcohol reading does. Penalties run to fines of up to $1,000, up to 12 months in jail, and mandatory suspension of driving privileges.",
        trap:
          "Sticking to the prescribed dose changes nothing about whether you are impaired behind the wheel.",
        excerptKey: "dui-prescription",
        sourceLabel: "Georgia Driver's Manual - Driving Under the Influence",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s2_28",
        topic: "rules",
        question: "You are approaching a single-lane roundabout in Georgia. What must you do as you enter?",
        choices: [
          "Enter to the left and circulate clockwise",
          "Yield to all vehicles already circulating in the roundabout",
          "Take your turn in the order you arrived, as at a four-way stop",
          "Stop completely before entering, in every case",
        ],
        correctIndex: 1,
        explanation:
          "Traffic already in the roundabout has the right of way. You slow to the advisory speed, yield to circulating vehicles, wait for a gap and merge.",
        context:
          "Georgia roundabouts always circulate counterclockwise, you always enter to the right, and you always exit to the right. You stop for pedestrians in the crosswalk on the way in and again on the way out, and on a multi-lane roundabout you pick your lane before entering and do not change lanes inside it. The point of the design is to keep traffic moving without a signal or a four-way stop.",
        trap:
          "Treating a roundabout as a four-way stop stalls it. The order of arrival decides nothing once vehicles are circulating.",
        excerptKey: "roundabouts",
        sourceLabel: "Georgia Driver's Manual - Roundabouts",
        sourceUrl: MARKINGS,
      },
      {
        id: "ga_s2_29",
        topic: "signs",
        question: "A regulatory sign shows a black arrow bending around a black bar, on a white background. What does it require?",
        choices: [
          "Turn at the next intersection",
          "Pass only on the right",
          "Keep to the right of the median or obstruction",
          "The lane ahead is closed",
        ],
        correctIndex: 2,
        explanation:
          "That is the KEEP RIGHT sign. Traffic is required to pass to the right of the median or obstruction it marks.",
        context:
          "It usually stands at the nose of a median, a traffic island or a fixed obstruction that splits the road. The same instinct is written into the pavement as traffic striping - diagonal yellow lines forming a triangle where the road narrows or an obstruction sits, and you always keep to the right of those markings too.",
        trap:
          "A separate SLOWER TRAFFIC KEEP RIGHT sign is about lane discipline on a multi-lane road, not about steering around an object.",
        excerptKey: "sign-keep-right",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s2_30",
        topic: "licensing",
        question: "You have just moved to Georgia. How long do you have to get a Georgia licence or permit?",
        choices: [
          "60 days of becoming a Georgia resident",
          "Until your out-of-state licence expires",
          "10 days",
          "30 days of becoming a Georgia resident",
        ],
        correctIndex: 3,
        explanation:
          "You must apply for a Georgia licence or permit within 30 days of becoming a resident if you intend to drive on the state's highways.",
        context:
          "Transferring an out-of-state licence usually means surrendering it, proving identity, citizenship or lawful presence, your Social Security number and two documents showing Georgia residency, then passing a vision test. Once licensed, a separate 60-day clock applies to changes of address and to name changes.",
        trap:
          "A valid out-of-state licence does not buy you time. Residency starts the 30-day clock regardless of what is in your wallet.",
        excerptKey: "new-resident-30-days",
        sourceLabel: "Georgia Driver's Manual - New Georgia Residents",
        sourceUrl: B + "section-2-continued-other-license-types-continued",
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Exam Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real road rules and road signs papers sit: the numbers DDS expects you to have memorised, and the rules where a plausible answer is still the wrong one.",
    questions: [
      {
        id: "ga_s3_01",
        topic: "sharing",
        question:
          "A school bus with red lights flashing is stopped on the far side of a highway divided by a median. What must you do?",
        choices: [
          "Traffic on the opposite side of the median is not required to stop",
          "Slow to 10 mph and continue past",
          "Stop until the bus withdraws its signals",
          "Stop only if children are crossing the median",
        ],
        correctIndex: 0,
        explanation:
          "Where a median separates the directions, drivers on the opposite side from the stopped bus are not required to stop - though the manual still expects them to watch for children walking along or crossing.",
        context:
          "The exception turns on a physical divider, not on a painted line or the number of lanes. On an ordinary undivided road, including a multi-lane one with only a centre line, every driver in both directions stops. When you do have to stop, you stay stopped until the bus moves off or turns its warnings off and all the passengers are clear of the road.",
        trap:
          "A centre turn lane or a double yellow line is not a median. Treating four lanes of undivided road as 'divided' is exactly how drivers earn a six-point violation.",
        commonlyMissed: true,
        excerptKey: "school-bus-median",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With School Buses",
        sourceUrl: SHARE2,
      },
      {
        id: "ga_s3_02",
        topic: "speed",
        question:
          "You are convicted of driving 78 mph on a two-lane Georgia road. What does the Super Speeder law add?",
        choices: [
          "An automatic 30-day suspension",
          "A $200 state fee on top of any local fine",
          "Nothing - Super Speeder starts at 85 mph on every road",
          "A three-point endorsement and nothing more",
        ],
        correctIndex: 1,
        explanation:
          "Super Speeder catches 75 mph or more on a two-lane road, and 85 mph or more on any road in Georgia. It adds a $200 state fee on top of whatever the local court imposes.",
        context:
          "The fee is a state charge, separate from the fine and separate from the points. Fail to pay it on time and your licence is suspended, with a further $50 reinstatement fee to undo that. The points for the underlying speeding still apply on their own scale, running from two points at 15-18 mph over the limit to six points at 34 mph or more over.",
        trap:
          "The two-lane threshold is the one people forget. 78 mph on a rural two-lane road triggers it even though the same speed on an interstate would not.",
        commonlyMissed: true,
        excerptKey: "super-speeder",
        sourceLabel: "Georgia Driver's Manual - Super Speeder",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s3_03",
        topic: "signs",
        question: "What does a horizontal white line painted across the lane at the mouth of an intersection require?",
        choices: [
          "Your vehicle should not cross it when stopping for a traffic control device",
          "You must stop with your front bumper on the line",
          "It marks where a bike lane crosses",
          "It shows where the crosswalk ends",
        ],
        correctIndex: 0,
        explanation:
          "A stop line marks the limit your vehicle should not pass when stopping for a signal or a stop sign, and Georgia says you stop at the line rather than at the sign or signal itself.",
        context:
          "Urban stop lines usually sit about four feet before the crosswalk, and that gap is the whole point - it leaves the crosswalk usable while you wait. Crossing the line to see better defeats it, and a driver in the next lane loses sight of any pedestrian your vehicle now shields.",
        trap:
          "'Bumper on the line' sounds precise but puts your vehicle over the marking. The line is a limit, not a target.",
        excerptKey: "stop-lines",
        sourceLabel: "Georgia Driver's Manual - Stop Lines",
        sourceUrl: MARKINGS,
      },
      {
        id: "ga_s3_04",
        topic: "rules",
        question:
          "You are approaching a police car stopped on the shoulder with its lights flashing, and traffic makes it unsafe to change lanes. What does Georgia's Move Over law require?",
        choices: [
          "Maintain your speed and keep to your lane position",
          "Slow down below the speed limit and be prepared to stop",
          "Stop completely until the officer waves you past",
          "Sound your horn and pass at the posted limit",
        ],
        correctIndex: 1,
        explanation:
          "Move over to the next lane if you safely can. If you cannot, you must slow down below the speed limit and be prepared to stop.",
        context:
          "Georgia's law covers more than police cars. It applies to any emergency, sanitation or utility service vehicle parked on the shoulder and displaying flashing yellow, amber, white, red or blue lights, and it was amended specifically to bring active sanitation and utility workers inside it. A first offence carries a fine of no more than $500, and the violation itself is three points.",
        trap:
          "'Slow down' has a definition here - below the posted limit, not merely a bit off your cruising speed.",
        commonlyMissed: true,
        excerptKey: "move-over-requirements",
        sourceLabel: "Georgia Driver's Manual - The Move Over Law",
        sourceUrl: PDF,
      },
      {
        id: "ga_s3_05",
        topic: "licensing",
        question:
          "A Georgia Class D licence holder has had the licence for four months. Who may ride with them?",
        choices: [
          "Anyone, provided nobody is under 16",
          "Any three passengers under 21",
          "One passenger under 21 who is not family",
          "Immediate family members only",
        ],
        correctIndex: 3,
        explanation:
          "For the first six months after issuance, only immediate family members may ride in the vehicle. Everything else waits.",
        context:
          "The restriction loosens in two steps. During the second six months, one passenger under 21 who is not immediate family may ride. After both six-month periods, up to three passengers under 21 who are not immediate family may ride. Immediate family is defined broadly, taking in parents and step-parents, grandparents, siblings and step-siblings, children, and anybody else living at the driver's address.",
        trap:
          "The passenger limits count from the date the licence was issued, not from a birthday, so a 17-year-old who has just been licensed is at the strictest stage.",
        commonlyMissed: true,
        excerptKey: "class-d-first-six-months",
        sourceLabel: "Georgia Driver's Manual - Conditions of a Class D Provisional License",
        sourceUrl: TEEN,
      },
      {
        id: "ga_s3_06",
        topic: "signs",
        question: "A yellow diamond shows a symbol of a road that stops at a crossbar ahead. What is it warning?",
        choices: [
          "The road you are on ends straight ahead - slow and prepare to turn right or left",
          "A dead end with no turning space",
          "A weight-restricted bridge",
          "A railroad crossing",
        ],
        correctIndex: 0,
        explanation:
          "The road ends ahead. You slow down and prepare to yield or stop before turning right or left, because straight on is no longer an option.",
        context:
          "Georgia distinguishes this from the crossroads warning, which tells you another road crosses yours and you carry on through, and from lane-reduction warnings, where your road continues but with fewer lanes. Reading the symbol tells you whether you are losing the road, losing a lane, or simply meeting a junction.",
        trap:
          "A dead end and a road-ends warning are different: one is a street with no exit, the other is a T-junction you must turn at.",
        excerptKey: "sign-road-ends",
        sourceLabel: "Georgia Driver's Manual - More Warning Signs",
        sourceUrl: WARN2,
      },
      {
        id: "ga_s3_07",
        topic: "parking",
        question: "How far from a stop sign, yield sign or traffic signal may you not stand or park in Georgia?",
        choices: ["Within 15 feet", "Within 20 feet", "Within 30 feet", "Within 50 feet"],
        correctIndex: 2,
        explanation:
          "Thirty feet. Inside that distance, stopping is permitted only momentarily to pick up or drop off a passenger.",
        context:
          "Georgia's clearances rise with how badly a parked vehicle would block sight lines or access: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection and from a fire station driveway, 30 feet from a stop sign, yield sign or signal, 50 feet from a railroad crossing, and 75 feet from the point across the street from a fire station driveway. A separate list bans stopping outright - on a sidewalk, in an intersection, on a crosswalk, on a bridge or in a tunnel, on railroad tracks, on a controlled access roadway, or on the street side of another parked vehicle.",
        trap:
          "The 50-foot figure belongs to railroad crossings. Applying it to stop signs is the usual confusion.",
        excerptKey: "parking-distances",
        sourceLabel: "Georgia Driver's Manual - Stopping, Standing, and Parking",
        sourceUrl: TURNS,
      },
      {
        id: "ga_s3_08",
        topic: "safety",
        question:
          "Your car begins to skid on a wet road. What does the Georgia manual tell you to do first?",
        choices: [
          "Pull the parking brake to slow the wheels",
          "Ease your foot off the accelerator",
          "Brake firmly to shed speed",
          "Steer hard the other way to straighten up",
        ],
        correctIndex: 1,
        explanation:
          "Ease off the accelerator first. Then turn the wheel in the direction of the skid, and only once you have regained control apply the brakes lightly and steer somewhere safe.",
        context:
          "A skid means the tyres have lost their grip, so the engine's power and the brakes' authority are both gone until grip returns. That is why braking hard makes it worse. Georgia notes that the first half-hour of rainfall is the most dangerous stretch of any storm, because water lifts oil and chemicals off the surface before diluting them.",
        trap:
          "'Steer the other way' inverts the correct input. Steering into the skid is what lines the tyres up with the direction of travel.",
        excerptKey: "skidding",
        sourceLabel: "Georgia Driver's Manual - Skidding",
        sourceUrl: PDF,
      },
      {
        id: "ga_s3_09",
        topic: "rules",
        question:
          "You must stop at a railroad crossing because the lights are flashing. Where does Georgia require you to stop?",
        choices: [
          "Exactly 25 feet from the nearest rail",
          "At least 100 feet from the nearest rail",
          "Anywhere before the first rail",
          "Not less than 15 feet and not more than 50 feet from the nearest rail",
        ],
        correctIndex: 3,
        explanation:
          "The stopping band is 15 to 50 feet from the nearest rail - close enough to see, far enough to be clear of an overhanging train.",
        context:
          "The same band applies whenever a stop is required: flashing signal, lowered gates, a flagman signalling, a posted stop sign, or a train close enough to be an immediate hazard. Driving through, around or under a lowered gate is prohibited in all circumstances, and after stopping you stay put until the tracks are clear, the signals stop flashing and the gates are raised.",
        trap:
          "The lower bound matters as much as the upper one. Trains and their loads overhang the rails, so stopping too close is its own hazard.",
        excerptKey: "railroad-stop-distance",
        sourceLabel: "Georgia Driver's Manual - Railroad Crossings",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s3_10",
        topic: "signs",
        question:
          "A white regulatory sign shows a red circle and slash over a right-turn arrow with the words ON RED. What does it prohibit?",
        choices: [
          "Turning right on red, even after a complete stop",
          "Turning right unless a green arrow is showing for the cross street",
          "Turning right at any time from this lane",
          "Turning right during posted hours only",
        ],
        correctIndex: 0,
        explanation:
          "It removes the right-on-red permission entirely at that intersection. Stopping first does not restore it - you wait for green.",
        context:
          "Georgia's default is that right on red is allowed after a complete stop and after yielding to traffic and pedestrians, which is exactly why the prohibition has to be posted. Sight lines, heavy pedestrian flow or an unusual intersection geometry are the usual reasons an engineer puts one up.",
        trap:
          "Assuming a complete stop earns you the turn is the error the sign exists to prevent - the prohibition is on the movement, not on rolling.",
        excerptKey: "sign-no-turn-on-red",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s3_11",
        topic: "rightOfWay",
        question:
          "A pedestrian steps into a marked crosswalk on the far half of a two-lane road and starts toward you. When must you stop?",
        choices: [
          "Only when the pedestrian reaches your lane",
          "When the pedestrian is on your half of the road, or approaching and within one lane of it",
          "Only if a pedestrian signal is showing WALK",
          "Only at intersections controlled by signals",
        ],
        correctIndex: 1,
        explanation:
          "You stop and remain stopped once the pedestrian is on your half of the roadway or is approaching and within one lane of it. 'Half of the roadway' means all the lanes carrying traffic in your direction.",
        context:
          "The duty is not limited to signalised intersections. It applies at any crosswalk, when you are turning left or right at any intersection, at stop signs after your stop, at traffic signals even on green if pedestrians are still crossing, and when you enter a street from an alley, driveway or private road. Crosswalks exist at all four corners of an intersection whether or not anybody has painted them.",
        trap:
          "Waiting until the pedestrian is actually in your lane leaves them nowhere to go if you have misjudged your stopping distance.",
        commonlyMissed: true,
        excerptKey: "pedestrian-half-of-roadway",
        sourceLabel: "Georgia Driver's Manual - Georgia's Law Concerning Pedestrians",
        sourceUrl: SHARE,
      },
      {
        id: "ga_s3_12",
        topic: "licensing",
        question: "What curfew applies to a Georgia Class D provisional licence holder?",
        choices: [
          "No curfew once the holder turns 17",
          "No driving between 11:00 p.m. and 6:00 a.m. except for work",
          "No driving between midnight and 5:00 a.m., with no exceptions",
          "No driving between midnight and 6:00 a.m. unless accompanied",
        ],
        correctIndex: 2,
        explanation:
          "A Class D holder may not drive between 12:00 a.m. and 5:00 a.m. The manual states it with no exceptions attached - not for work, not for school, not with an adult in the car.",
        context:
          "The restriction attaches to the class of licence rather than the driver's age, so an 18-year-old still holding a Class D is still subject to it. The way out is to upgrade: a Class D holder who reaches 18 and has been free of major traffic convictions for the preceding 12 months can exchange it for a full Class C licence.",
        trap:
          "Turning 17, or even 18, does not lift the curfew by itself. Only the upgrade to Class C does.",
        commonlyMissed: true,
        excerptKey: "class-d-curfew",
        sourceLabel: "Georgia Driver's Manual - Conditions of a Class D Provisional License",
        sourceUrl: TEEN,
      },
      {
        id: "ga_s3_13",
        topic: "signs",
        question: "What does a yellow diamond showing a truck on a downward slope tell you?",
        choices: [
          "A runaway truck ramp is on the right",
          "A truck route begins here",
          "Trucks are prohibited beyond this point",
          "A steep hill is ahead - be ready to shift to a lower gear",
        ],
        correctIndex: 3,
        explanation:
          "It warns of a steep hill ahead. Slow down and be ready to shift down, so the engine helps hold your speed and the brakes are not doing all the work.",
        context:
          "Georgia separately makes it unlawful to coast downhill with the gears or transmission in neutral, which is the same idea from the other direction: you keep the drivetrain connected so it can restrain the vehicle. Riding the brakes down a long grade overheats them, which is precisely when you need them most.",
        trap:
          "The sign is about your descent, not about trucks specifically. Every vehicle on that grade is being warned.",
        excerptKey: "sign-hill",
        sourceLabel: "Georgia Driver's Manual - More Warning Signs",
        sourceUrl: WARN2,
      },
      {
        id: "ga_s3_14",
        topic: "emergencies",
        question:
          "A deer runs into the road directly ahead of you at night. What does Georgia tell you to do?",
        choices: [
          "Slow down as much as possible, but never swerve",
          "Swerve into the next lane if it is clear",
          "Brake as hard as you can and steer for the shoulder",
          "Accelerate to clear the animal's path",
        ],
        correctIndex: 0,
        explanation:
          "Slow as much as you can and do not swerve. Swerving is what puts you into another vehicle or off the road entirely, which is usually the worse outcome.",
        context:
          "Deer travel in groups, so seeing one means slowing for the others behind it. At night, dip to low beam and blink your lights rather than pinning the animal in a high beam. Deer are most active in October, November and December, and again in late February and early March, and they are usually seen in the early morning and late evening.",
        trap:
          "The instinct to swerve is exactly what the guidance is written against - a deer strike is survivable in a way that a head-on collision often is not.",
        excerptKey: "deer-never-swerve",
        sourceLabel: "Georgia Driver's Manual - Deer-Automobile Crashes",
        sourceUrl: CRASH,
      },
      {
        id: "ga_s3_15",
        topic: "rules",
        question: "In a Georgia work zone, what authority does a flagger have?",
        choices: [
          "Authority only over commercial vehicles",
          "The same authority as a regulatory sign",
          "Advisory only - the posted signs still govern",
          "Authority only when a police officer is present",
        ],
        correctIndex: 1,
        explanation:
          "A flagger in a work zone carries the same authority as a regulatory sign. Disobeying a flagger's directions is disobeying the traffic control at that site.",
        context:
          "Work zones flip several defaults. Fines go up, orange signs replace yellow ones, and work vehicles with flashing amber lights have the right of way over you. Where an official speed reduction applies it appears on standard black-and-white signs, and disobeying it is a misdemeanour of a high and aggravated nature with a fine between $100 and $2,000.",
        trap:
          "Following the painted lines instead of the flagger is exactly the conflict the rule resolves, and it resolves it in the flagger's favour.",
        excerptKey: "work-zone-flagger",
        sourceLabel: "Georgia Driver's Manual - Obey Flaggers",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s3_16",
        topic: "signs",
        question:
          "What does a yellow diamond showing an arrow that goes right, then left, then right again mean?",
        choices: [
          "Traffic merges from alternate sides",
          "Lane shifts ahead through a work zone",
          "A series of curves - winding road ahead",
          "A detour route begins",
        ],
        correctIndex: 2,
        explanation:
          "It warns of a winding road: a run of successive turns rather than a single bend, so the speed you pick now needs to last.",
        context:
          "Georgia's turn-warning family scales with severity. A smooth arc is a curve, a sharply bent arrow is a sharp turn, an arrow bending right then left is a sharp turn followed by another the opposite way, and the multi-bend arrow is a winding stretch. A speed advisory plaque underneath tells you the speed at which the geometry actually works.",
        trap:
          "One bend is not a winding road. Reading a single sharp turn as a series makes you slower than you need to be; reading a series as one turn makes you far too fast for the second bend.",
        excerptKey: "warning-signs-color",
        sourceLabel: "Georgia Driver's Manual - Warning Signs",
        sourceUrl: WARN,
      },
      {
        id: "ga_s3_17",
        topic: "impairment",
        question:
          "You are lawfully arrested for DUI in Georgia and refuse the state-administered chemical test. What follows?",
        choices: [
          "A 30-day suspension you can appeal",
          "Nothing until you are convicted",
          "A fine, but your licence stays valid",
          "Your licence or driving privilege is suspended for a minimum of one year",
        ],
        correctIndex: 3,
        explanation:
          "Refusing implied consent testing brings a suspension of at least one year, entirely separate from whatever happens in court on the DUI itself.",
        context:
          "Georgia law treats holding a licence as consent in advance to chemical testing of blood, breath, urine or other bodily substances. Your refusal can be offered in evidence at trial. If you do submit and the result is at or above the limit, a minimum one-year suspension may follow as well - and after taking the state's test you are entitled to additional tests at your own expense from personnel of your choosing.",
        trap:
          "Refusing is not a way of avoiding evidence. It creates its own penalty and the refusal itself becomes evidence.",
        commonlyMissed: true,
        excerptKey: "implied-consent-refusal",
        sourceLabel: "Georgia Driver's Manual - Implied Consent",
        sourceUrl: LOSING,
      },
      {
        id: "ga_s3_18",
        topic: "parking",
        question: "Which of these is prohibited in Georgia at all times, not merely restricted?",
        choices: [
          "Stopping in the area between the roadways of a divided highway",
          "Parking on a residential street overnight",
          "Stopping to let a passenger out within 30 feet of a signal",
          "Parking within 20 feet of a fire station driveway",
        ],
        correctIndex: 0,
        explanation:
          "The area between the roadways of a divided highway, crossovers included, is on Georgia's no-stopping-at-any-time list. The other options describe restrictions that still allow a momentary stop.",
        context:
          "The at-any-time list also covers the street side of a parked vehicle, a sidewalk, an intersection, a crosswalk, the space between a safety zone and the adjacent curb, a bridge, overpass or tunnel, railroad tracks, a controlled access roadway, and anywhere a no-parking sign is posted. The second, softer list allows a brief pause to pick up or set down a passenger - that is the distinction the exam probes.",
        trap:
          "Both lists look like 'do not park here'. The difference is whether a momentary stop for passengers is allowed at all.",
        excerptKey: "parking-never",
        sourceLabel: "Georgia Driver's Manual - Stopping, Standing, and Parking",
        sourceUrl: TURNS,
      },
      {
        id: "ga_s3_19",
        topic: "signs",
        question: "A pair of solid double white lines separates your lane from the next. What do they mean?",
        choices: [
          "You may cross only to make a left turn",
          "Lane changes are prohibited",
          "The lane to your left is a bus lane",
          "You may cross only in an emergency",
        ],
        correctIndex: 1,
        explanation:
          "Solid double white lines prohibit lane changes. Where the same double white lines are dashed, crossing into the adjacent lane is allowed.",
        context:
          "You meet them most often at HOV and express lane boundaries and at gore areas. Gores are the triangular zones of solid white line where an acceleration lane meets the through lane, and drivers entering a controlled access highway are prohibited by law from crossing that line - you stay in the acceleration lane until the solid white ends.",
        trap:
          "Yellow lines separate opposing directions; white lines separate lanes going the same way. Applying the yellow-line 'cross to turn left' logic to double white is the mix-up.",
        excerptKey: "double-white-lines",
        sourceLabel: "Georgia Driver's Manual - Double White Lines",
        sourceUrl: MARKINGS,
      },
      {
        id: "ga_s3_20",
        topic: "rules",
        question:
          "You are on a two-lane road and want to pass. Oncoming traffic is visible in the distance. How much clearance does Georgia require?",
        choices: [
          "Any gap is acceptable if you can accelerate hard",
          "You must be back in your lane before oncoming traffic is within 500 feet of you",
          "You must be back in your lane before oncoming traffic is within 200 feet of you",
          "You must be back in your lane before oncoming traffic is within 100 feet of you",
        ],
        correctIndex: 2,
        explanation:
          "The pass must be complete, with your vehicle fully back in the right lane, before oncoming traffic gets within 200 feet of you.",
        context:
          "Three conditions have to be satisfied together: you finish before the passing zone ends, before you enter an intersection, and before oncoming traffic is within 200 feet. Passing is separately prohibited within 100 feet of a railroad crossing, bridge, viaduct or tunnel, on the shoulder, on a hill or curve without sight distance, and whenever a school bus is stopped to load or unload.",
        trap:
          "The 100-foot figure is real but belongs to the railroad-and-bridge prohibition, not to the oncoming-traffic margin.",
        excerptKey: "passing-complete-200-feet",
        sourceLabel: "Georgia Driver's Manual - How To Pass On A Two-Lane Road",
        sourceUrl: ROW,
      },
      {
        id: "ga_s3_21",
        topic: "safety",
        question: "At roughly what speed can partial hydroplaning begin in a standard passenger car?",
        choices: ["15 mph", "25 mph", "35 mph", "60 mph"],
        correctIndex: 2,
        explanation:
          "Partial hydroplaning can start as low as 35 mph in a standard passenger car. By 55 mph the tyres may lose contact with the road altogether.",
        context:
          "Below about 35 mph, tread channels water away much as a wiper clears a windscreen. Above it, the water arrives faster than the tread can shift it and the tyre begins riding on a film. Once contact is lost there is no friction available to brake, accelerate or steer, so the response is to lift off the accelerator and let the car slow itself.",
        trap:
          "Hydroplaning at 35 mph surprises people because it feels like a highway-speed problem. Standing water on a suburban street is enough.",
        commonlyMissed: true,
        excerptKey: "hydroplaning",
        sourceLabel: "Georgia Driver's Manual - Hydroplaning",
        sourceUrl: PDF,
      },
      {
        id: "ga_s3_22",
        topic: "signs",
        question: "What does a fluorescent yellow-green sign in Georgia signify?",
        choices: [
          "An emergency evacuation route",
          "A toll facility ahead",
          "A permanent construction zone",
          "A high-emphasis warning, used for school, pedestrian and cycling activity",
        ],
        correctIndex: 3,
        explanation:
          "Fluorescent yellow-green is a high-emphasis warning colour. Georgia allows warning signs and school pentagons to appear in it where the activity warrants extra visibility.",
        context:
          "The colour system is worth carrying as a whole: red for stop and prohibition, yellow for general warning, fluorescent yellow-green for school and pedestrian emphasis, orange for construction, blue and white for motorist services, and black on white for regulatory instructions.",
        trap:
          "Orange and fluorescent yellow-green both read as 'bright' at a glance, but only orange means crews are on the road.",
        excerptKey: "sign-pentagon",
        sourceLabel: "Georgia Driver's Manual - Shapes of Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s3_23",
        topic: "sharing",
        question:
          "A fully loaded tractor-trailer is travelling at 55 mph. Roughly how much stopping distance does it need compared with a car?",
        choices: [
          "About three times as much",
          "About the same",
          "Around half again as much",
          "About twice as much",
        ],
        correctIndex: 0,
        explanation:
          "Georgia puts it at about three times the distance a car needs from 55 mph. That gap is why cutting in front of a truck and then slowing is so dangerous.",
        context:
          "Trucks also carry much larger blind spots, the 'No-Zones' on both sides, directly behind and directly in front. The side No-Zone on the right is the worst of them, because truck drivers have to swing wide to turn right. If you cannot see the driver's face in the truck's side mirror, the driver cannot see you.",
        trap:
          "Merging back in as soon as you clear the cab puts you in the front No-Zone with a vehicle behind you that cannot stop in time.",
        excerptKey: "truck-stopping-distance",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With Commercial Motor Vehicles",
        sourceUrl: SHARE2,
      },
      {
        id: "ga_s3_24",
        topic: "licensing",
        question:
          "Under Joshua's Law, what driver education must a Georgia teenager complete to get a Class D licence at 16 or 17?",
        choices: [
          "Six hours of classroom instruction only",
          "A DDS-approved course: 30 hours of classroom or equivalent online instruction, plus behind-the-wheel training",
          "Nothing, provided they pass the road test",
          "An online course of any length plus a parent's affidavit",
        ],
        correctIndex: 1,
        explanation:
          "An approved course means 30 hours of classroom instruction or an equivalent online virtual course, plus six hours of behind-the-wheel training with a certified instructor or completion of the DDS Parent/Teen Driving Guide.",
        context:
          "Joshua's Law came from Senate Bill 226 and originally applied at 16; since 1 July 2021 it reaches 17-year-olds applying for a Class D licence as well. On top of the course, the teen must have accumulated at least 40 hours of other supervised driving experience, six of them at night, and must have completed the Alcohol and Drug Awareness Program.",
        trap:
          "Assuming a 17-year-old can skip driver education is the single most common Georgia misconception, and it has been wrong since 2021.",
        commonlyMissed: true,
        excerptKey: "joshuas-law-manual",
        sourceLabel: "Georgia DDS - Joshua's Law Requirements",
        sourceUrl: JOSHUA,
      },
      {
        id: "ga_s3_25",
        topic: "rules",
        question:
          "Georgia allows a left turn on red in one specific situation. Which is it?",
        choices: [
          "Never - Georgia does not permit left turns on red",
          "From any lane onto a one-way street after stopping",
          "From the left lane of a one-way street onto another one-way street where traffic runs to your left",
          "From a two-way street onto a one-way street between midnight and 5 a.m.",
        ],
        correctIndex: 2,
        explanation:
          "The permission is narrow: from the left lane of a one-way street onto a one-way street on which traffic moves toward the driver's left, after a complete stop and after yielding.",
        context:
          "Both streets have to be one-way, and you have to be in the left lane of the one you are leaving. As with right on red, a posted sign at the intersection removes the permission, and the stop, the yield to traffic, and the stop for pedestrians all come before the turn.",
        trap:
          "'Onto a one-way street' is only half the condition. The street you are turning from must be one-way as well.",
        commonlyMissed: true,
        excerptKey: "left-turn-on-red",
        sourceLabel: "Georgia Driver's Manual - Laws Governing Right-of-Way",
        sourceUrl: ROW,
      },
      {
        id: "ga_s3_26",
        topic: "signs",
        question: "What does a black-on-white regulatory sign reading SLOWER TRAFFIC KEEP RIGHT require?",
        choices: [
          "All traffic must move right when a vehicle approaches from behind",
          "Vehicles under 45 mph must leave the highway",
          "Trucks must use the right lane at all times",
          "Slower vehicles must travel in the right or outside lanes where two or more lanes run your way",
        ],
        correctIndex: 3,
        explanation:
          "Where two or more lanes run in your direction, slower traffic belongs in the right or outside lanes, leaving the left lanes free for overtaking.",
        context:
          "This sign carries the same idea as Georgia's Slow Poke Law, which goes further and requires you to move out of the passing lane for faster traffic whatever your own speed. Driving slowly enough to impede the normal movement of traffic is a separate offence, carrying three points and a fine of up to $1,000.",
        trap:
          "'Slower' means slower than the traffic around you, not slower than the speed limit. You can be the slow vehicle at 70 mph.",
        excerptKey: "sign-slower-traffic-keep-right",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s3_27",
        topic: "emergencies",
        question:
          "A minor crash blocks a lane of an Atlanta expressway. Nobody appears seriously hurt and both cars still drive. What does Georgia expect?",
        choices: [
          "Move the vehicles off the roadway to the shoulder or another safe refuge",
          "Move only if a police officer directs you to",
          "Move the vehicles only after photographing the scene from every angle",
          "Leave the vehicles exactly where they stopped until police arrive",
        ],
        correctIndex: 0,
        explanation:
          "On a multilane highway or expressway with no apparent serious injury or death, drivers have a duty to move drivable vehicles off the roadway to the shoulder, emergency lane, median or other safe refuge.",
        context:
          "Georgia protects you for doing it: moving the vehicles does not make you at fault, does not stop you filing a written report, and cannot be treated as failing to stop and provide information. If you are not able to move the vehicles yourself, you may ask another licensed driver nearby to do it, and they are authorised to comply.",
        trap:
          "Leaving cars in a live lane to preserve the scene causes the secondary collision - about thirty percent of crashes happen as the result of another crash.",
        commonlyMissed: true,
        excerptKey: "move-vehicles-after-crash",
        sourceLabel: "Georgia Driver's Manual - Moving Vehicles Following a Crash",
        sourceUrl: CRASH,
      },
      {
        id: "ga_s3_28",
        topic: "signals",
        question:
          "The pedestrian signal across the street shows a flashing DON'T WALK. What does that tell a pedestrian?",
        choices: [
          "The signal is faulty and should be ignored",
          "Do not leave the curb, but finish crossing if already started",
          "Wait for a vehicle to stop before stepping out",
          "Cross quickly - there is still time",
        ],
        correctIndex: 1,
        explanation:
          "Flashing means do not start crossing, but if you are already in the road, keep going and complete the crossing.",
        context:
          "The three pedestrian states are WALK, meaning leave the curb; steady DON'T WALK, meaning do not leave the curb; and flashing DON'T WALK, which is the clearance phase. Drivers need the same information from the other side: at signals you stop for pedestrians still in the crosswalk even when your own light is green.",
        trap:
          "Sprinting on a flashing signal is what the phase is designed to avoid - it is a clearance interval for people already crossing, not a last call.",
        excerptKey: "ped-signal-flashing",
        sourceLabel: "Georgia Driver's Manual - Pedestrian Signals",
        sourceUrl: SIGNALS2,
      },
      {
        id: "ga_s3_29",
        topic: "speed",
        question: "What is Georgia's general maximum speed on an unpaved county road with nothing posted?",
        choices: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctIndex: 2,
        explanation:
          "An unpaved county road carries a 35 mph general maximum in Georgia unless a sign says otherwise.",
        context:
          "It is the only one of Georgia's standard limits keyed to the road surface rather than the surroundings. The rest read off the setting: 30 in an urban or residential district, 65 on an urban interstate or multi-lane divided highway, 70 on a rural interstate, and 55 everywhere else.",
        trap:
          "30 mph is the urban and residential figure. An unpaved county road is neither, and it sits five miles an hour higher.",
        commonlyMissed: true,
        excerptKey: "speed-limits-general",
        sourceLabel: "Georgia Driver's Manual - Speed Limits",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s3_30",
        topic: "signs",
        question: "What does a yellow diamond marked with an arrow bending around a black bar and the word DIP mean?",
        choices: [
          "The road ahead is unpaved",
          "A speed hump has been installed",
          "There is a dip in the road ahead - slow down",
          "A drainage channel crosses the road, closed after rain",
        ],
        correctIndex: 2,
        explanation:
          "A dip warns of a low point in the road surface immediately ahead. Georgia's instruction is simply to slow down before you reach it.",
        context:
          "Dip and bump are the pair of surface warnings. Both ask for the same response, both come without a required speed, and both matter because taking them fast unloads the suspension at exactly the moment you might need to steer or brake. A dip also hides oncoming traffic and standing water.",
        trap:
          "A dip is not a speed hump. Nobody built it deliberately, and it is often deeper than it looks from a distance.",
        excerptKey: "sign-dip",
        sourceLabel: "Georgia Driver's Manual - Warning Signs",
        sourceUrl: WARN,
      },
      {
        id: "ga_s3_31",
        topic: "rules",
        question: "In Georgia, when may you legally pass another vehicle on the right?",
        choices: [
          "Never - passing on the right is prohibited",
          "Whenever the vehicle ahead is below the speed limit",
          "By using the shoulder, if the shoulder is paved",
          "When the vehicle ahead is making or about to make a left turn and there is enough pavement width",
        ],
        correctIndex: 3,
        explanation:
          "You may pass on the right of a vehicle that is making or about to make a left turn, provided the pavement is wide enough for both vehicles. You may also pass on the right on a multi-lane highway carrying two or more lanes your way.",
        context:
          "Neither case allows the shoulder. Georgia lists passing on the shoulder among the prohibited manoeuvres on a two-lane road, and stopping or driving on the shoulder of an expressway is restricted to emergencies. Weaving between lanes to get ahead of the flow is separately unlawful.",
        trap:
          "'There was room on the shoulder' is not a lawful passing lane in Georgia, however wide the shoulder looks.",
        excerptKey: "passing-on-the-right",
        sourceLabel: "Georgia Driver's Manual - Passing On The Right",
        sourceUrl: PDF,
      },
      {
        id: "ga_s3_32",
        topic: "safety",
        question:
          "You are entering an interstate from an on-ramp and the acceleration lane is bounded by a solid white line. What does Georgia require?",
        choices: [
          "Stay in the acceleration lane until the solid white line disappears",
          "Stop at the end of the ramp and wait for a gap",
          "Merge only where a dashed white line is painted on the through lane",
          "Cross the line as soon as a gap appears in traffic",
        ],
        correctIndex: 0,
        explanation:
          "That triangular area of solid white line is a gore. Drivers entering a controlled access highway are prohibited by law from crossing it and must stay in the acceleration lane until the line ends.",
        context:
          "The acceleration lane exists so you can reach the speed of the traffic you are joining before you have to fit into it. Vehicles already on the expressway have the right of way; the courteous ones will make room, but the obligation to merge safely is yours. Driving within a gore is a three-point violation in Georgia.",
        trap:
          "Stopping at the end of the ramp is the classic novice error and leaves you merging into 65 mph traffic from a standstill.",
        excerptKey: "gores",
        sourceLabel: "Georgia Driver's Manual - Gores",
        sourceUrl: SAFETY3,
      },
      {
        id: "ga_s3_33",
        topic: "signs",
        question: "You see a yellow diamond warning that the number of lanes is reduced ahead. What should you do?",
        choices: [
          "Move immediately onto the shoulder",
          "Prepare to change lanes or adjust position before the lanes run out",
          "Stop and wait until the lane reopens",
          "Speed up to claim a position before the merge",
        ],
        correctIndex: 1,
        explanation:
          "The warning gives you distance to sort your lane position out early, rather than arriving at the taper with nowhere to go.",
        context:
          "Lane reductions turn up permanently where a road narrows and temporarily in work zones. Georgia's work-zone advice is the same either way: reduce speed, watch for speed limit signs, and shift your lane position away from workers. If a lane change is not possible you shift within your own lane to buy distance.",
        trap:
          "Racing to the front of a closing lane is what creates the abrupt merge the sign is warning you to avoid.",
        excerptKey: "sign-lanes-reduced",
        sourceLabel: "Georgia Driver's Manual - More Warning Signs",
        sourceUrl: WARN2,
      },
      {
        id: "ga_s3_34",
        topic: "sharing",
        question:
          "You are stopping at a crosswalk on a multi-lane road to let a pedestrian cross. How far back should you stop?",
        choices: [
          "At least 30 feet before the crosswalk",
          "Wherever the stop line happens to be",
          "At least 10 feet before the crosswalk",
          "Right at the crosswalk line",
        ],
        correctIndex: 2,
        explanation:
          "Stop at least 10 feet before the crosswalk on a multi-lane road, so a driver in the next lane can see the pedestrian rather than seeing only your vehicle.",
        context:
          "This is the multiple-threat collision Georgia is guarding against: one vehicle stops, the pedestrian steps out from behind it, and a driver in the adjacent lane arrives with no warning. The law reinforces it from the other side too - a driver approaching from the rear may not overtake and pass a vehicle stopped to let a pedestrian cross.",
        trap:
          "Stopping right on the line feels considerate but hides the pedestrian from exactly the driver who most needs to see them.",
        commonlyMissed: true,
        excerptKey: "multilane-ten-feet",
        sourceLabel: "Georgia Driver's Manual - Passing Stopped Cars in Lanes of Travel",
        sourceUrl: SHARE,
      },
      {
        id: "ga_s3_35",
        topic: "licensing",
        question:
          "Your Georgia licence expired more than two years ago. What is required to renew it?",
        choices: [
          "Apply for a new instructional permit and start again",
          "Pay the renewal fee and a late penalty",
          "Take a vision test only",
          "Pass a vision test, a driving test, and the road signs and road rules knowledge exam",
        ],
        correctIndex: 3,
        explanation:
          "Once a licence has been expired for more than two years, renewal means passing the vision test, the driving test, and the knowledge exam on road signs and road rules again.",
        context:
          "The two-year mark is a hard line in Georgia. A licence expired for less can be renewed on the ordinary terms, and a licence expired for two years or more cannot be renewed by mail at all. Real ID documentation requirements have to be satisfied as well if you have not already done so.",
        trap:
          "Assuming a fee clears a long lapse skips both tests. The state treats a driver who has been off the road that long as needing to demonstrate competence afresh.",
        excerptKey: "expired-license",
        sourceLabel: "Georgia Driver's Manual - Expired License",
        sourceUrl: PDF,
      },
    ],
  },
];
