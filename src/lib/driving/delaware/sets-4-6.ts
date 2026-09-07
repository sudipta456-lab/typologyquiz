import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Sources and method are described in the header of sets-1-3.ts:
// the Delaware Driver Manual (July 2026), Title 21 of the Delaware Code for the
// numbers the manual leaves out, and the Division's own dmv.de.gov pages for the
// shape of the knowledge test.
//
// Set 5 is built from what learners report. The r/Delaware and r/DMV threads
// listed in docs/driving/research/delaware.md agree on a short list of rules
// that catch Delaware candidates out - the four-way stop tie-breaker, the
// four-lane school-bus exception, the wipers-and-headlights law, the 300-foot
// signal, the arrows, and the fact that the Division's ten-question sample test
// is a fraction of a 32-question exam. Those rules are what set 5 tests, written
// from the manual rather than from anybody's memory of the real exam.
const HB = "https://dmv.de.gov/forms/driver_serv_forms/pdfs/dr_frm_manual.pdf";
const p = (n: number) => `${HB}#page=${n}`;
const WRITTEN =
  "https://dmv.de.gov/DriverServices/drivers_license/index.shtml?dc=dr_lic_written";
const del = (sub: string) => `https://delcode.delaware.gov/title21/${sub}/index.html`;

export const delawareSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions drawn from every corner of the book, including the sections people skip: vehicle equipment, insurance minimums, traffic stops, crash scenes and the Delaware point system.",
    questions: [
      {
        id: "de_s4_01",
        topic: "rules",
        question:
          "Delaware's inspection standard requires a minimum tire tread depth of what?",
        choices: [
          "1/32 inch",
          "4/32 inch",
          "2/32 inch, measured in two adjacent treads",
          "There is no minimum, only a ban on visible cord",
        ],
        correctIndex: 2,
        explanation:
          "Two thirty-seconds of an inch, measured in two adjacent treads. A tire that fails that, or shows bulges, fabric, bald areas or cuts, fails inspection.",
        context:
          "The manual's own quick check is the penny test - push a penny into the tread head first, and if the tread does not reach Lincoln's head the tire is unsafe. Worn tires lengthen your stopping distance, make turning harder on a wet road, and start hydroplaning at lower speeds than good ones.",
        trap:
          "Tread that looks fine across the middle can be gone at the edges. The standard asks for two adjacent grooves, not the deepest one you can find.",
        excerptKey: "equip-tread-depth",
        sourceLabel: "Delaware Driver Manual - Section Three, Vehicle Inspection",
        sourceUrl: p(64),
      },
      {
        id: "de_s4_02",
        topic: "safety",
        question:
          "Delaware law requires a child to ride in a rear-facing car seat until what point?",
        choices: [
          "Until age 1",
          "Until age 2 and 30 pounds",
          "Until age 4 and 40 pounds",
          "Until they can sit unaided",
        ],
        correctIndex: 1,
        explanation:
          "Delaware's rear-facing requirement runs to age 2 and 30 pounds - both, not either. The next stage, a harnessed car seat, runs to age 4 and 40 pounds on the same and-not-or basis.",
        context:
          "After the harness comes a belt-positioning booster, and the child stays in it until they reach the height or weight maximum the booster's manufacturer sets. From there until age 16 they wear a properly secured seat belt in every seating position. A rear-facing seat must never go in front of an active frontal air bag.",
        trap:
          "Reaching one of the two numbers is not enough. Age and weight are joined by AND in the statute and in the manual.",
        excerptKey: "child-rear-facing",
        sourceLabel: "Delaware Driver Manual - Section Five, Use Child Restraints",
        sourceUrl: p(109),
        commonlyMissed: true,
      },
      {
        id: "de_s4_03",
        topic: "signs",
        question:
          "Recreation signs in Delaware, such as one directing you to a state park, use which colors?",
        choices: [
          "White letters on blue",
          "White letters on brown",
          "Black letters on yellow",
          "White letters on green",
        ],
        correctIndex: 1,
        explanation:
          "Brown with white letters marks recreation, including state parks. Blue with white letters marks motorist services such as fuel, food and lodging.",
        context:
          "Delaware's color scheme is consistent enough to answer sign questions you have never seen. Red and white for regulation, yellow for warning, orange for work zones, green for guidance, blue for services, brown for recreation. The Highway Sign and Signal Test asks you to identify signs by color and shape without labels, so the scheme is what is really being examined.",
        trap:
          "Brown and green are both dark backgrounds with white letters. Brown means somewhere to visit; green means the way to get there.",
        excerptKey: "sign-recreation",
        sourceLabel: "Delaware Driver Manual - Section Four, Information signs",
        sourceUrl: p(78),
      },
      {
        id: "de_s4_04",
        topic: "rightOfWay",
        question:
          "You are crossing a sidewalk to leave a parking lot in Delaware. Who has the right of way?",
        choices: [
          "You, since the sidewalk is not a roadway",
          "Whoever arrives first",
          "Pedestrians on the sidewalk - you must yield to them",
          "Pedestrians only if they are within a marked crossing",
        ],
        correctIndex: 2,
        explanation:
          "A driver crossing a sidewalk to enter or leave a driveway, alley or parking lot yields to pedestrians. The manual adds that driving on a sidewalk at all is illegal except to cross it.",
        context:
          "Pedestrians also have the right of way where a sidewalk crosses an alley, entrance or driveway, so the duty runs both when you enter and when you leave. Then, once you reach the road, a second duty starts: yield to traffic already on it, stopping if necessary.",
        trap:
          "Rolling across the sidewalk to get a view of the road puts your bumper in the pedestrian's path. Stop before the sidewalk, then edge forward.",
        excerptKey: "row-sidewalk-driveway",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(88),
      },
      {
        id: "de_s4_05",
        topic: "licensing",
        question:
          "What are Delaware's minimum liability insurance limits for bodily injury?",
        choices: [
          "$15,000 per person and $30,000 per crash",
          "$50,000 per person and $100,000 per crash",
          "$10,000 per person and $20,000 per crash",
          "$25,000 per person and $50,000 for two or more people",
        ],
        correctIndex: 3,
        explanation:
          "Delaware requires $25,000 for injury or death of one person and $50,000 where two or more are hurt in one crash, plus $10,000 for damage to other people's property.",
        context:
          "There is a separate Personal Injury Protection minimum of $15,000 for any one person and $30,000 for everyone injured in a crash, which is the figure people confuse with the bodily-injury limits. The insurance card must be in the vehicle at all times, and driving uninsured carries a fine of $1,500 to $2,000 on a first offense.",
        trap:
          "The $15,000 and $30,000 figures are the PIP minimums, not the liability limits. Both pairs appear on the same page.",
        excerptKey: "insurance-bodily-injury",
        sourceLabel: "Delaware Driver Manual - Section Three, Liability Insurance",
        sourceUrl: p(63),
      },
      {
        id: "de_s4_06",
        topic: "emergencies",
        question:
          "You arrive first at a crash where someone is bleeding badly. What does the manual tell you to do?",
        choices: [
          "Move them to the side of the road first",
          "Give them water while you wait for the ambulance",
          "Apply a tourniquet above the wound",
          "Apply direct pressure to the wound with your hand or a cloth",
        ],
        correctIndex: 3,
        explanation:
          "Direct pressure on the wound with your hand or a cloth. The manual says even severe bleeding can almost always be stopped or slowed that way.",
        context:
          "The order of operations is get help first, then help anyone who is not already walking and talking, checking for breathing and then for bleeding. Do not move an injured person unless they are in a burning vehicle or in danger of being hit, do not give them anything to drink - not even water - and cover them to help prevent shock.",
        trap:
          "Giving water to an injured person feels like care and the manual names it specifically as something not to do.",
        excerptKey: "crash-bleeding",
        sourceLabel: "Delaware Driver Manual - Section Five, If Someone Is Injured",
        sourceUrl: p(141),
      },
      {
        id: "de_s4_07",
        topic: "signals",
        question:
          "What is a High Intensity Activated Crosswalk, or HAWK, signal?",
        choices: [
          "A camera that photographs drivers who fail to yield",
          "A warning beacon for emergency vehicle driveways",
          "A pedestrian-activated signal that stops traffic long enough for a crossing, then resets",
          "A signal used only at school crossings during arrival and dismissal",
        ],
        correctIndex: 2,
        explanation:
          "A HAWK is activated by a pedestrian pressing a button. It then runs through a series of stages that hold traffic long enough for the crossing, lets traffic go again, and resets until the next press.",
        context:
          "Delaware also uses rectangular rapid flashing beacons at crosswalks, mounted above or below pedestrian and bicycle warning signs and activated by a push button. They flash in a fast stutter pattern rather than the regular once-per-second rhythm of a standard beacon, and when you see them you slow, look and yield.",
        trap:
          "A dark HAWK is not a broken signal. It sits unlit until somebody presses the button.",
        excerptKey: "hawk",
        sourceLabel: "Delaware Driver Manual - Section Four, High Intensity Activated Crosswalk",
        sourceUrl: p(73),
      },
      {
        id: "de_s4_08",
        topic: "rules",
        question:
          "When may you cross a single solid yellow line on a Delaware road?",
        choices: [
          "Never",
          "To pass a vehicle traveling under 25 mph",
          "To turn into a driveway, if it is safe",
          "Whenever the oncoming lane is empty",
        ],
        correctIndex: 2,
        explanation:
          "You may cross a solid yellow line to turn into a driveway when it is safe. What you may not do is cross it to pass.",
        context:
          "Delaware adds one more exception elsewhere in the manual, and it is a big one: when passing a bicycle in a lane too narrow to share, the law requires you to change lanes completely, including crossing a double yellow center line. Absent those two cases, a solid yellow line on your side means no passing.",
        trap:
          "An empty oncoming lane does not lift the line. The marking reflects sight distance and hazards you may not be able to see.",
        excerptKey: "mark-double-yellow",
        sourceLabel: "Delaware Driver Manual - Section Four, Pavement Markings",
        sourceUrl: p(85),
      },
      {
        id: "de_s4_09",
        topic: "speed",
        question:
          "What is the maximum speed limit on a Delaware controlled-access highway such as a turnpike or expressway, unless posted otherwise?",
        choices: ["55 mph", "45 mph", "50 mph", "65 mph"],
        correctIndex: 0,
        explanation:
          "Fifty-five. Controlled-access highways sit at the same figure as divided roads and roads with four or more lanes in Delaware's table.",
        context:
          "The only exceptions the manual names are Route 1 and Interstate 495 at 65 mph. Delaware's whole scale is compressed - 20 in a posted school zone, 25 in business and residential districts, 50 on two-lane roads and 55 for most of the rest.",
        trap:
          "Controlled access suggests the highest limit. In Delaware it is the same 55 as an ordinary four-lane road.",
        excerptKey: "speed-table",
        sourceLabel: "Delaware Driver Manual - Section Four, Speed Limits",
        sourceUrl: p(93),
      },
      {
        id: "de_s4_10",
        topic: "safety",
        question:
          "What does the Delaware manual say you should do first if your tires lose traction and the car starts to float on water?",
        choices: [
          "Brake firmly to slow down",
          "Turn toward the shoulder",
          "Shift into a lower gear",
          "Ease your foot off the gas pedal",
        ],
        correctIndex: 3,
        explanation:
          "Take your foot off the gas. Then hold the wheel straight and do not try to stop or turn until the tires are gripping again.",
        context:
          "Hydroplaning starts when a tire cannot clear the water in front of it, which the manual puts at above about 35 mph on wet roads and about 50 mph in heavy rain. Bald tires go much earlier. The only reliable prevention is slowing down in the rain before it happens.",
        trap:
          "Braking or steering while the tires are on top of the water does nothing until they touch pavement again, and then it does too much at once.",
        excerptKey: "hydroplane-response",
        sourceLabel: "Delaware Driver Manual - Section Five, Water on the roadway",
        sourceUrl: p(124),
      },
      {
        id: "de_s4_11",
        topic: "sharing",
        question:
          "A cyclist is riding on a Delaware road and you are behind them in a narrow lane with a double yellow line. What does the law require?",
        choices: [
          "Wait behind them until the double line ends",
          "Change lanes completely to pass, crossing the double yellow line if that is what it takes",
          "Sound the horn and pass close but slowly",
          "Pass within the lane at no more than 15 mph",
        ],
        correctIndex: 1,
        explanation:
          "Where the lane is too narrow for your vehicle and the bicycle side by side, Delaware requires you to change lanes completely, and specifically permits crossing a double yellow line to do it.",
        context:
          "On a genuinely wide lane you may pass without changing lanes, but you must slow down and keep at least three feet of clearance throughout. If the road has only two lanes and you cannot see far enough or oncoming traffic will not allow it, the manual says follow at a safe distance and wait.",
        trap:
          "Honking at a cyclist is illegal in Delaware except to warn of an imminent collision. It is not a way to ask them to move over.",
        excerptKey: "bike-pass-double-yellow",
        sourceLabel: "Delaware Driver Manual - Section Four, Bicycles",
        sourceUrl: p(97),
      },
      {
        id: "de_s4_12",
        topic: "rightOfWay",
        question:
          "You are turning right at a red light. A pedestrian steps into the crosswalk you are about to cross. What must you do?",
        choices: [
          "Complete the turn quickly before they reach your lane",
          "Yield to them and wait",
          "Sound the horn and proceed",
          "Reverse to give them room",
        ],
        correctIndex: 1,
        explanation:
          "You yield. Right on red only ever gives you permission to make the turn, and it never places you ahead of a pedestrian in the crosswalk.",
        context:
          "The manual builds the same instruction into its turning advice - do not begin a turn without checking for pedestrians crossing where you will be turning. The duty to yield to a pedestrian within a crosswalk is stated separately and without qualification, and you must stop if that is what it takes.",
        trap:
          "\"I can beat them across\" is the calculation this rule exists to remove. The pedestrian's pace is not yours to judge.",
        excerptKey: "ped-yield-crosswalk",
        sourceLabel: "Delaware Driver Manual - Section Four, Pedestrians",
        sourceUrl: p(95),
      },
      {
        id: "de_s4_13",
        topic: "signs",
        question:
          "Beacons flashing beside a Stop or Do Not Enter sign in Delaware are what color?",
        choices: ["Red", "Yellow", "Blue", "White"],
        correctIndex: 0,
        explanation:
          "Red beacons supplement Stop and Do Not Enter signs. Yellow beacons supplement warning signs and speed limit signs.",
        context:
          "Supplementary beacons are there to make a critical sign harder to miss, or to show when its message is active - the manual's example is a sign reading Red Signal Ahead When Flashing. They flash in a regular pattern about once a second, whether they run continuously or only at certain times.",
        trap:
          "The beacon does not change what the sign says. A red beacon by a stop sign is emphasis, not a signal you can wait out.",
        excerptKey: "beacons-supplement",
        sourceLabel: "Delaware Driver Manual - Section Four, Beacons Supplementing Signs",
        sourceUrl: p(78),
      },
      {
        id: "de_s4_14",
        topic: "impairment",
        question:
          "The Delaware manual warns about which everyday medicines affecting driving?",
        choices: [
          "Drugs for headaches, colds, hay fever and allergies, and pills taken to calm nerves",
          "Only prescription sedatives",
          "Only illegal drugs",
          "None - over-the-counter medicines are tested for driving safety",
        ],
        correctIndex: 0,
        explanation:
          "The manual names headache, cold, hay fever and allergy medicines, and drugs taken to calm nerves, as things that can make a driver drowsy. Many of them need no prescription at all.",
        context:
          "Stimulants get their own warning: pep pills, uppers and diet pills give short-lived alertness and then leave a driver nervous, dizzy, unable to concentrate and with affected vision. The instruction is to read the label before you take anything and to ask a doctor or pharmacist if you are unsure, and never to mix alcohol with any other drug.",
        trap:
          "Over the counter does not mean safe to drive on. The manual treats the two categories the same way.",
        excerptKey: "drugs-otc",
        sourceLabel: "Delaware Driver Manual - Section Two, Drugs Combined With Alcohol",
        sourceUrl: p(52),
      },
      {
        id: "de_s4_15",
        topic: "rules",
        question:
          "You are stopped by a Delaware police officer. What does the manual say to do once you have pulled over?",
        choices: [
          "Get out and walk back to the patrol car",
          "Have your license and registration already in your hand before the officer reaches you",
          "Keep the engine running in case you are told to move",
          "Turn off the ignition and radio, stay in the vehicle and keep your hands visible on the wheel",
        ],
        correctIndex: 3,
        explanation:
          "Ignition and radio off, stay in the car unless told otherwise, and hands on the wheel where they can be seen. The officer will tell you when to reach for documents.",
        context:
          "The manual is specific about not making sudden moves or searching for documents before you are asked. If there is a weapon in the vehicle, say so at first contact. Passengers should stay in the car with their hands visible too, and nobody should be using a phone.",
        trap:
          "Digging out the paperwork early looks helpful and reads as reaching for something unseen. Wait to be asked.",
        excerptKey: "stop-turn-off-stay-in",
        sourceLabel: "Delaware Driver Manual - Section Five, What to Do When Stopped by Law Enforcement",
        sourceUrl: p(112),
      },
      {
        id: "de_s4_16",
        topic: "safety",
        question:
          "The manual describes a specific test for whether you are driving too fast for the conditions. What is it called?",
        choices: [
          "The three-second rule",
          "The ten-second scan",
          "The four-second sight distance rule",
          "The two-second wet-road rule",
        ],
        correctIndex: 2,
        explanation:
          "The four-second sight distance rule. Pick the furthest object you can clearly see, count four seconds, and if you reach it before you finish counting you are going too fast for how far you can see.",
        context:
          "It is a different measurement from the three-second following distance, which is about the vehicle in front rather than the road ahead. The manual asks you to use the sight distance rule at night as well, to check you are not over-driving your headlights, which reach about 350 feet - enough for about 50 mph.",
        trap:
          "Three seconds and four seconds measure different things. Following distance is three; sight distance is four.",
        excerptKey: "sight-distance-rule",
        sourceLabel: "Delaware Driver Manual - Section Five, Sight Distance Rule",
        sourceUrl: p(127),
      },
      {
        id: "de_s4_17",
        topic: "parking",
        question:
          "Delaware prohibits stopping or parking within how many feet of a stop sign or traffic signal?",
        choices: ["10 feet", "20 feet", "50 feet", "30 feet"],
        correctIndex: 3,
        explanation:
          "Thirty feet from a flashing beacon, stop sign or traffic signal. The same 30-foot figure applies to the end of a safety zone or island unless signs say otherwise.",
        context:
          "The list is easiest as a ladder: 15 feet from a hydrant, 20 from a crosswalk at an intersection and from a fire station driveway, 30 from a beacon, stop sign, signal or safety zone, and 50 from a railroad crossing. Yellow-painted curbs and yellow lines at the road edge are no-parking regardless of distance.",
        trap:
          "Twenty feet belongs to the crosswalk, not the sign. Both numbers sit in the same bullet list.",
        excerptKey: "park-stop-sign-30",
        sourceLabel: "Delaware Driver Manual - Section Four, Stopping And Parking Violations",
        sourceUrl: p(93),
      },
      {
        id: "de_s4_18",
        topic: "signals",
        question:
          "You are approaching a green light that has been green for some time. What does the manual say about entering the intersection?",
        choices: [
          "Look left and right anyway, because some drivers do not obey signals",
          "Proceed at your normal speed - the signal is yours",
          "Slow to half the limit as a precaution",
          "Cover the brake but do not look aside, so you keep your eyes on the road ahead",
        ],
        correctIndex: 0,
        explanation:
          "The manual says not to rely on signals or signs to tell you that nobody will cross in front of you. Look left and right even when the cross traffic has a red light or a stop sign.",
        context:
          "It singles out the moment just after the light turns green as the most dangerous, because that is when cross-street drivers are most likely to be hurrying through on the change. The other drivers it names as unlikely to stop are those who have been drinking and reckless drivers generally.",
        trap:
          "A stale green feels safer than a fresh one because you know it will not change. It says nothing about whether the cross street will stop.",
        excerptKey: "scan-green-light",
        sourceLabel: "Delaware Driver Manual - Section Five, Scanning - Intersections",
        sourceUrl: p(117),
      },
      {
        id: "de_s4_19",
        topic: "emergencies",
        question:
          "Your accelerator sticks open while you are driving. What does the manual tell you to do?",
        choices: [
          "Keep your eyes on the road and shift quickly to neutral",
          "Switch off the ignition immediately",
          "Pump the accelerator to free it",
          "Brake hard and hold the car against the engine",
        ],
        correctIndex: 0,
        explanation:
          "Eyes on the road, shift to neutral, pull off when it is safe and then turn off the engine. Neutral disconnects the engine from the wheels without taking away your steering.",
        context:
          "Turning the ignition off while moving is the mistake this ordering avoids - the manual warns separately that turning the ignition to lock while in motion locks the steering and costs you control of the car. The same principle governs a power failure: keep a firm grip, expect the steering to go heavy, and pull off the road.",
        trap:
          "Reaching for the key first is the instinct. Neutral gets the same result and leaves you steering.",
        excerptKey: "emerg-gas-pedal",
        sourceLabel: "Delaware Driver Manual - Section Five, Gas Pedal Sticks",
        sourceUrl: p(137),
      },
      {
        id: "de_s4_20",
        topic: "sharing",
        question:
          "Delaware requires helmets for bicycle riders of what age?",
        choices: [
          "All ages",
          "Under 18",
          "Under 16",
          "Under 12",
        ],
        correctIndex: 1,
        explanation:
          "Everyone under 18 must wear a properly fitted and fastened bicycle helmet in Delaware. Above that age it is a choice.",
        context:
          "A parent or guardian can be held responsible if their child breaks a traffic law while cycling, and specifically if a child under 18 is riding without a helmet. The night-riding equipment rules are equally specific: a white headlight visible for 500 feet, a red rear reflector visible for 600 feet, and side reflective material or a lamp.",
        trap:
          "Sixteen is the age used for several other Delaware rules, including the seat belt requirement for children. The helmet age is eighteen.",
        excerptKey: "bike-helmet-under-18",
        sourceLabel: "Delaware Driver Manual - Section Four, Bicycles",
        sourceUrl: p(99),
      },
      {
        id: "de_s4_21",
        topic: "rules",
        question:
          "Delaware prohibits studded tires during which period?",
        choices: [
          "All year",
          "From October 15 to April 15 inclusive",
          "From April 16 to October 14 inclusive",
          "From June 1 to September 30 inclusive",
        ],
        correctIndex: 2,
        explanation:
          "Studded tires are legal from October 15 through April 15, and illegal from April 16 through October 14. The manual states both halves so the dates cannot be misread.",
        context:
          "The manual adds a warning for anyone driving out of state: other states set different periods, and a few do not permit studded tires at any time, so you must abide by their laws when passing through. The prohibited-equipment section also covers red lights showing to the front, most flashing lights, muffler cut-outs and sirens on ordinary vehicles.",
        trap:
          "The two date ranges are near-mirror images and easy to reverse. Studs are the winter tire, so the winter half is the legal half.",
        excerptKey: "equip-studded-tires",
        sourceLabel: "Delaware Driver Manual - Section Three, Prohibited Equipment",
        sourceUrl: p(62),
      },
      {
        id: "de_s4_22",
        topic: "speed",
        question:
          "Delaware's minimum speed law says what?",
        choices: [
          "You must always drive at least 10 mph below the posted limit",
          "You must maintain at least 45 mph on all divided highways",
          "You must not drive so slowly as to impede normal and reasonable movement of traffic",
          "There is no minimum speed rule in Delaware",
        ],
        correctIndex: 2,
        explanation:
          "Driving too slowly is an offense in its own right when it impedes normal and reasonable traffic movement. The exceptions are when slowness is necessary for safety or to comply with the law.",
        context:
          "Where a minimum speed limit is posted you must obey it, unless weather or other conditions make that unsafe. The manual's practical companion to this rule is in the driving section - if traffic is piling up behind you, pull over when it is safe and let it pass.",
        trap:
          "Going slowly feels like the cautious choice and it is a violation when it bunches traffic up behind you.",
        excerptKey: "speed-minimum",
        sourceLabel: "Delaware Driver Manual - Section Four, Minimum Speed",
        sourceUrl: p(94),
      },
      {
        id: "de_s4_23",
        topic: "safety",
        question:
          "How does the manual say you should adjust your side mirrors?",
        choices: [
          "So you can just see the side of your own vehicle when you lean forward slightly",
          "So the side of your vehicle fills a third of the mirror",
          "So they point straight back along the lane lines",
          "So you can see the rear bumper without moving your head",
        ],
        correctIndex: 0,
        explanation:
          "Set them so a slight lean forward brings the side of your own car just into view. Set that way, the mirror spends its whole field of view on the lane beside you rather than on your own paintwork.",
        context:
          "The rest of the pre-drive routine is in the same section: adjust the seat so you can see the road clearly, sit roughly 12 inches from the steering wheel, use the rearview mirror to see out the back window, and set the head restraint so it contacts the back of your head. All of it happens before you move.",
        trap:
          "Mirrors that show your own doors are showing you the one thing that never moves. That wasted field is exactly where the blind spot lives.",
        excerptKey: "mirror-adjust",
        sourceLabel: "Delaware Driver Manual - Section Five, Adjust Seat And Mirrors",
        sourceUrl: p(108),
      },
      {
        id: "de_s4_24",
        topic: "signs",
        question:
          "A regulatory sign in Delaware shows a red circle with a diagonal slash over a symbol. What does it mean?",
        choices: [
          "The action shown is recommended against",
          "The action shown is prohibited",
          "The action shown is permitted only at certain times",
          "A hazard of the kind shown is ahead",
        ],
        correctIndex: 1,
        explanation:
          "The crossed red circle is the international prohibition symbol. Delaware uses it for No Left Turn, No Right Turn and No U Turn, among others, and it means the movement is not allowed.",
        context:
          "The manual points out that these are international signs adopted in Delaware and the other 49 states, which is why they carry symbols rather than words. Regulatory signs generally are square, rectangular or specially shaped in white, red or black, and they tell you a law rather than warning you of a hazard.",
        trap:
          "A symbol sign with no words still carries the full force of law. It is not advice.",
        excerptKey: "sign-international-turns",
        sourceLabel: "Delaware Driver Manual - Section Four, Regulatory Signs",
        sourceUrl: p(74),
      },
      {
        id: "de_s4_25",
        topic: "licensing",
        question:
          "You move to Delaware from another state. How long do you have to get a Delaware license?",
        choices: ["30 days", "90 days", "6 months", "60 days"],
        correctIndex: 3,
        explanation:
          "Sixty days after becoming a resident. The same 60-day window applies to titling and registering your vehicles.",
        context:
          "You surrender the out-of-state license or produce a current certified copy of your driving record, prove legal presence and your social security number, and give two proofs of Delaware residency. Written and road exams may be given but are normally waived if your license is valid. Address changes must be reported to the Division within 30 days.",
        trap:
          "Thirty days is the address-change deadline, not the new-resident deadline. The license window is sixty.",
        excerptKey: "newres-60-days",
        sourceLabel: "Delaware Driver Manual - Section Two, Transfer Of Licenses Into Delaware",
        sourceUrl: p(31),
      },
      {
        id: "de_s4_26",
        topic: "rightOfWay",
        question:
          "Two roads meet with no signs or signals, and you arrive clearly before the other driver. What does the manual advise?",
        choices: [
          "Yield to the right, and consider yielding to all vehicles before entering",
          "Proceed - arriving first settles it",
          "Yield anyway if the other vehicle is larger",
          "Sound the horn and proceed",
        ],
        correctIndex: 0,
        explanation:
          "At an uncontrolled intersection Delaware's rule is to yield to vehicles coming from the right, and the manual then adds that the safest course is to consider yielding to all vehicles before entering.",
        context:
          "The arrival-order rule belongs to the four-way stop, where every driver has a sign telling them to stop. At an uncontrolled intersection nobody has been told to stop, so the manual falls back on the right-hand rule and then undercuts it with the advice to give way generally.",
        trap:
          "Arriving first is what decides a four-way stop, not an uncontrolled intersection. The two rules live two bullet points apart.",
        excerptKey: "row-uncontrolled",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(88),
        commonlyMissed: true,
      },
      {
        id: "de_s4_27",
        topic: "impairment",
        question:
          "The manual lists signs of a drowsy driver. Which of these is one of them?",
        choices: [
          "Gripping the wheel more tightly than usual",
          "Not remembering driving the last few miles",
          "Feeling unusually alert on a quiet road",
          "Checking the mirrors more often",
        ],
        correctIndex: 1,
        explanation:
          "Not remembering the last few miles is on the manual's list, alongside eyes closing or losing focus, trouble holding your head up, constant yawning, wandering thoughts, missing your exit, drifting out of your lane and a speed that keeps changing.",
        context:
          "The manual gives this state a name - highway hypnosis, the condition of being unaware of your surroundings, brought on by the monotony of wind, tires and engine noise. The remedy is not coffee or fresh air but stopping to rest or swapping drivers, because being tired dulls the mind and slows reactions.",
        trap:
          "Drowsy driving is not the same as feeling sleepy. By the time you notice the gap in your memory, you have already been driving impaired.",
        excerptKey: "drowsy-signs",
        sourceLabel: "Delaware Driver Manual - Section Two, Drowsy Driving",
        sourceUrl: p(53),
      },
      {
        id: "de_s4_28",
        topic: "rules",
        question:
          "Where does Delaware allow you to make a left turn on a red light?",
        choices: [
          "Nowhere",
          "From any street onto a one-way street",
          "From a one-way street onto another one-way street, after a full stop, unless prohibited",
          "Only where a sign expressly permits it",
        ],
        correctIndex: 2,
        explanation:
          "Delaware permits a left on red only from a one-way street onto another one-way street, and only after a full stop. A posted sign or a steady red arrow cancels it.",
        context:
          "It is the mirror image of the right-on-red rule and carries the same conditions: stop first, obey any sign forbidding it, and yield to pedestrians and traffic. Both permissions vanish when a steady red arrow is displayed for that movement.",
        trap:
          "Both streets must be one-way. Turning left on red from a two-way street is never lawful in Delaware.",
        excerptKey: "red-left-turn",
        sourceLabel: "Delaware Driver Manual - Section Four, Understanding Traffic Signals",
        sourceUrl: p(69),
        commonlyMissed: true,
      },
      {
        id: "de_s4_29",
        topic: "safety",
        question:
          "Delaware's manual gives one reason above all for keeping a load secured. What is it?",
        choices: [
          "An unsecured load voids most insurance policies",
          "A 20 pound object at 55 mph hits with a force of 1,000 pounds",
          "Loose loads are the leading cause of tire damage",
          "It is required for vehicle inspection",
        ],
        correctIndex: 1,
        explanation:
          "The manual puts a number on it: a 20-pound object leaving a vehicle at 55 mph strikes with a force of 1,000 pounds. A load counts as secure only when nothing can slide, fall or become airborne.",
        context:
          "The six steps it gives are practical - tie down with rope, netting or straps, tie large objects directly to the vehicle or trailer, cover the whole load with a tarp or netting, do not overload, double-check, and secure it as though your own family were in the car behind. Loose objects inside the car matter too, especially anything that could roll under the brake pedal.",
        trap:
          "A load that has not moved on previous trips has not been tested by a hard stop.",
        excerptKey: "secure-load-force",
        sourceLabel: "Delaware Driver Manual - Section Five, Secure Your Load",
        sourceUrl: p(107),
      },
      {
        id: "de_s4_30",
        topic: "sharing",
        question:
          "Why does the manual warn that a motorcyclist's turn signal may mislead you?",
        choices: [
          "Motorcycle signals are dimmer than car signals",
          "Motorcycles are not required to have turn signals",
          "Most motorcycle signals do not cancel themselves, so the rider may have forgotten to switch it off",
          "Riders often signal the opposite way on purpose",
        ],
        correctIndex: 2,
        explanation:
          "Turn signals are not automatically self-canceling on most motorcycles, so a blinking signal may be left over from an earlier turn. Make sure the rider is actually turning before you pull out in front of them.",
        context:
          "The manual repeats the point in its space-management section as a general rule about all vehicles - do not turn just because an approaching vehicle has a signal on, and wait until the driver actually starts to turn. It notes that this is particularly true of motorcycles.",
        trap:
          "A signal is a statement of intention, not a commitment. Acting on it is how left-turn collisions with motorcycles happen.",
        excerptKey: "moto-signals-not-cancel",
        sourceLabel: "Delaware Driver Manual - Section Four, Sharing The Road With Motorcycles",
        sourceUrl: p(100),
      },
      {
        id: "de_s4_31",
        topic: "parking",
        question:
          "You are about to open your door into a Delaware street. What does the manual ask you to do?",
        choices: [
          "Open the door slowly so traffic can react",
          "Switch on the hazard lights first",
          "Open the door only when no vehicle is within 100 feet",
          "Use the curb-side door, and if you must use the street side, turn and check for oncoming traffic and cyclists",
        ],
        correctIndex: 3,
        explanation:
          "Use the door on the curb side. If you have to use the street side, turn and look for anything coming, and the manual names cyclists specifically because a car door can injure them severely.",
        context:
          "The underlying rule is that you must never open a door so as to impede the flow of traffic or endanger any person or vehicle. Delaware's Bicycle Friendly law and its three-foot passing rule show how much of the road cyclists occupy, and a door swung into a bike lane crosses that space entirely.",
        trap:
          "Checking the mirror is not enough for a door. A cyclist can be in the mirror's blind spot at the exact moment the handle moves.",
        excerptKey: "park-door-cyclists",
        sourceLabel: "Delaware Driver Manual - Section Four, Opening Door of Parked Vehicle",
        sourceUrl: p(92),
      },
      {
        id: "de_s4_32",
        topic: "emergencies",
        question:
          "Your right wheels drop off the pavement onto the shoulder at speed. What does the manual tell you to do?",
        choices: [
          "Grip the wheel, ease off the gas, and return to the pavement only once you are down to 15 mph or less",
          "Steer back onto the pavement immediately before you lose control",
          "Brake hard to stop as quickly as possible",
          "Accelerate gently to keep the car stable, then steer back",
        ],
        correctIndex: 0,
        explanation:
          "Hold the wheel tightly, come off the accelerator, brake carefully or not at all, and only steer back once you have control and your speed is down to 15 mph or less. Then turn the front wheels sharply toward the pavement.",
        context:
          "The manual warns that the drop can twist the wheel out of your hands, which is why the grip comes first. It also says to check for traffic behind you before you come back on, and to be careful not to cross the center line as the car returns to the road.",
        trap:
          "Steering back at speed is the panic response and the one that puts a car across the center line into oncoming traffic.",
        excerptKey: "emerg-off-pavement",
        sourceLabel: "Delaware Driver Manual - Section Five, Running Off The Pavement",
        sourceUrl: p(136),
      },
      {
        id: "de_s4_33",
        topic: "signals",
        question:
          "A steady yellow arrow appears while you are approaching a turn. What does it mean?",
        choices: [
          "The turn is now prohibited",
          "Yield to oncoming traffic and turn when clear",
          "Stop, then turn when safe",
          "The green arrow has ended - if you are too close to stop safely, complete the turn with care",
        ],
        correctIndex: 3,
        explanation:
          "A steady yellow arrow announces that the protected turn has finished. If you are too close to stop safely, go through and complete the turn carefully.",
        context:
          "It is the arrow equivalent of the round yellow light, and it carries the same instruction: prepare to stop, but do not brake so hard that you become the hazard. The manual sets out the whole arrow family together, because the exam tends to present them as a set.",
        trap:
          "Yellow arrow and flashing yellow arrow are different signals. One says the protected phase is ending; the other says you may turn after yielding.",
        excerptKey: "arrow-yellow-steady",
        sourceLabel: "Delaware Driver Manual - Section Four, Arrows",
        sourceUrl: p(71),
      },
      {
        id: "de_s4_34",
        topic: "signs",
        question:
          "What is the meaning of a white X-shaped crossbuck sign at a Delaware railroad crossing?",
        choices: [
          "It has the same meaning as a yield sign - you must yield to crossing trains",
          "It has the same meaning as a stop sign",
          "It marks a crossing that is no longer in use",
          "It shows the number of tracks at the crossing",
        ],
        correctIndex: 0,
        explanation:
          "The crossbuck has the same meaning as a yield sign, and you must give way to trains. It sits at the crossing itself, not on the approach.",
        context:
          "A separate sign below the crossbuck shows the number of tracks where there is more than one, and the manual says that where no such sign exists you should check for a second track yourself. Flashing lights mean stop, a bell means wait until it has stopped, and a lowered gate is never to be driven around.",
        trap:
          "A crossbuck is not a stop sign. It is a yield, which is why the flashing lights and gates exist to add the stop when a train is coming.",
        excerptKey: "rr-crossbuck-yield",
        sourceLabel: "Delaware Driver Manual - Section Four, Highway-Rail Intersection Signs",
        sourceUrl: p(84),
      },
      {
        id: "de_s4_35",
        topic: "rules",
        question:
          "Delaware requires you to switch from high beams to low beams within what distance of a vehicle you are following?",
        choices: ["100 feet", "200 feet", "300 feet", "500 feet"],
        correctIndex: 1,
        explanation:
          "Two hundred feet behind a vehicle you are following. Meeting an oncoming vehicle triggers the switch earlier, at 500 feet.",
        context:
          "The manual gives the same 500-foot figure in plain language as about one block. High beams let you see roughly twice as far as low beams, so use them whenever there is no oncoming vehicle - especially on unfamiliar roads, in construction areas and where people may be walking at the roadside.",
        trap:
          "The two distances are not interchangeable. Five hundred feet is for oncoming traffic; two hundred is for the car in front.",
        excerptKey: "lights-when-required",
        sourceLabel: "Delaware Driver Manual - Section Three, Using Headlights",
        sourceUrl: p(62),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Built from what Delaware candidates say tripped them up, plus the rules the manual itself flags. The four-way stop tie-breaker, the four-lane school bus exception, the 300-foot signal, the arrows, and the numbers that only appear once in the book.",
    questions: [
      {
        id: "de_s5_01",
        topic: "rightOfWay",
        question:
          "Two Delaware drivers arrive at a four-way stop at exactly the same instant, at right angles. Who goes first?",
        choices: [
          "Whoever signals first",
          "The driver going straight",
          "The driver on the right",
          "The driver on the left, because they are further from the crossing traffic",
        ],
        correctIndex: 2,
        explanation:
          "In a genuine tie the driver on the right goes first. That is the second half of Delaware's four-way stop rule, and it only ever applies when arrival is simultaneous.",
        context:
          "The first half decides most real four-way stops: the driver who reaches the intersection first goes first, after coming to a complete stop. Candidates who learn only the right-hand rule get the tie right and the ordinary case wrong, and candidates who learn only arrival order do the reverse. The exam asks both.",
        trap:
          "Going straight does not outrank turning at a four-way stop. Order of arrival decides it, and the right-hand rule only breaks a tie.",
        excerptKey: "row-four-way-stop",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(88),
        commonlyMissed: true,
      },
      {
        id: "de_s5_02",
        topic: "rules",
        question:
          "It is a bright afternoon and light rain has just started. You switch your wipers on. What does Delaware law now require?",
        choices: [
          "Nothing further, since it is daylight",
          "Your headlights must be on",
          "Your parking lights must be on",
          "Your hazard lights must be on",
        ],
        correctIndex: 1,
        explanation:
          "Wipers on means headlights on in Delaware, whatever the time of day. The manual states the rule twice and calls it the law both times.",
        context:
          "Headlights are also required after sunset and before sunrise, and any time you cannot see beyond 1000 feet. Parking lights satisfy none of these, and the manual specifically prohibits driving on parking lights alone. Delaware's required equipment section reinforces it from the other side: headlights must be on when the wipers are in use because of inclement weather.",
        trap:
          "Daytime running lights are not headlights. On most cars they leave the rear lights dark, which is exactly what the driver behind you in the rain needs to see.",
        excerptKey: "equip-wipers-headlights",
        sourceLabel: "Delaware Driver Manual - Section Three, Required Equipment",
        sourceUrl: p(60),
        commonlyMissed: true,
      },
      {
        id: "de_s5_03",
        topic: "sharing",
        question:
          "You are traveling toward a school bus that has stopped with red lights flashing on the far side of a road with two lanes in each direction plus a center turn lane. Must you stop?",
        choices: [
          "No - the center turn lane makes it four or more lanes",
          "Yes, unless children are visible",
          "No, if you slow to 20 mph",
          "Yes - the exception needs four or more roadway lanes, and a center turn lane is not a travel lane",
        ],
        correctIndex: 3,
        explanation:
          "The exception is written around roadway lanes carrying traffic, and a center turn lane is not one of them. Faced with a road you are not sure about, you stop.",
        context:
          "The manual's diagram is blunt: fewer than four roadway lanes means both directions stop; four or more means only traffic following the bus stops. Title 21 Section 4166 states the exception as four or more lanes without requiring a divider, while page 95 of the manual describes it as a divided highway with four or more lanes - so a road that satisfies neither reading leaves no doubt.",
        trap:
          "Counting the turn lane to reach four is the reasoning that produces a $115 to $230 fine and a one-month suspension with no driving authority at all.",
        excerptKey: "bus-statute-stop",
        sourceLabel: "Delaware Code Title 21 Section 4166 - Overtaking and passing school bus",
        sourceUrl: del("c041/sc03"),
        commonlyMissed: true,
      },
      {
        id: "de_s5_04",
        topic: "rules",
        question:
          "You are traveling at 25 mph in a Delaware residential district and intend to turn right. When must the signal come on?",
        choices: [
          "When you begin to slow for the turn",
          "300 feet before the turn",
          "100 feet before the turn",
          "As you enter the intersection",
        ],
        correctIndex: 1,
        explanation:
          "Three hundred feet, regardless of speed. Delaware's figure is fixed in feet, so at 25 mph it means signaling roughly eight seconds ahead.",
        context:
          "The manual asks for at least three seconds as a rule of thumb and then states the legal distance as 300 feet. At higher speeds it wants more than the minimum, particularly for lane changes on the interstate. It also warns against signaling too early - if there is another street or driveway between you and your turn, wait until you have passed it.",
        trap:
          "One hundred feet is the standard in most neighboring states and it is wrong here by a factor of three. Delaware writes 300.",
        excerptKey: "signal-hand-or-device",
        sourceLabel: "Delaware Driver Manual - Section Five, Let Others Know What You Are Doing",
        sourceUrl: p(122),
        commonlyMissed: true,
      },
      {
        id: "de_s5_05",
        topic: "signals",
        question:
          "You are in a left-turn lane and the display changes from a green arrow to a steady red arrow. May you complete a turn on it?",
        choices: [
          "Yes, after coming to a full stop",
          "Yes, if you have already entered the intersection and are yielding",
          "No - a steady red arrow means a full stop and no movement in that direction",
          "Yes, if oncoming traffic has stopped",
        ],
        correctIndex: 2,
        explanation:
          "A steady red arrow requires a full stop and forbids proceeding in that direction. Unlike a round red, it does not permit a turn after stopping.",
        context:
          "The distinction is exactly why the manual's right-on-red rule reads except when prohibited by a posted sign or a steady red arrow is displayed. A flashing red arrow is the one that permits the turn after a full stop, and it may be followed by a steady red arrow, a steady yellow arrow or a solid red ball.",
        trap:
          "A driver already stopped in the turn lane with a clear road feels entitled to go. On a steady red arrow that is a red-light violation worth three points.",
        excerptKey: "arrow-red-steady",
        sourceLabel: "Delaware Driver Manual - Section Four, Arrows",
        sourceUrl: p(71),
        commonlyMissed: true,
      },
      {
        id: "de_s5_06",
        topic: "safety",
        question:
          "You are following a delivery van whose driver cannot see you in their mirrors. What following distance does the manual ask for?",
        choices: [
          "Four seconds",
          "Three seconds, as usual",
          "Two seconds, so you stay out of the space behind them",
          "Whatever gap the traffic allows",
        ],
        correctIndex: 0,
        explanation:
          "Four seconds. The manual lists drivers who cannot see you - trucks, buses, vans, and anything towing a camper or trailer - among the situations calling for the longer gap.",
        context:
          "The other entries on that list are slippery roads, following a motorcycle, carrying a heavy load or towing, poor visibility, being tailgated yourself, following an emergency vehicle, approaching a railroad crossing, and being stopped on a hill where the vehicle ahead may roll back.",
        trap:
          "Sitting close so they notice you is backwards. Falling back is what puts you back in their mirrors.",
        excerptKey: "space-four-cannot-see-you",
        sourceLabel: "Delaware Driver Manual - Section Five, Space Ahead",
        sourceUrl: p(128),
      },
      {
        id: "de_s5_07",
        topic: "parking",
        question:
          "You are parking uphill on a Delaware street with a curb. What do you do with the front wheels?",
        choices: [
          "Turn them toward the curb",
          "Turn them away from the curb, bringing the near-side front wheel into contact with it",
          "Leave them straight and set the parking brake",
          "Turn them toward the center of the road",
        ],
        correctIndex: 1,
        explanation:
          "Uphill with a curb, the wheels turn away from the curb and the near-side front wheel rests against it. If the brakes let go, the car rolls back an inch and the tire catches on the curb.",
        context:
          "The downhill case is the opposite: wheels toward the curb, so a rolling car turns into it rather than into traffic. Uphill with no curb, the wheels turn toward the edge of the highway. The manual also asks you to leave a manual transmission in low gear uphill and in reverse downhill.",
        trap:
          "Uphill and downhill are the same answer for a downhill park and the opposite for an uphill one, which is precisely why this question keeps appearing on the exam.",
        excerptKey: "park-hill",
        sourceLabel: "Delaware Driver Manual - Section Four, Parking on Hill",
        sourceUrl: p(92),
        commonlyMissed: true,
      },
      {
        id: "de_s5_08",
        topic: "speed",
        question:
          "You are on a 55 mph Delaware highway and cannot change lanes to pass a stopped tow truck with amber lights flashing. What speed does Title 21 require?",
        choices: [
          "45 mph, being 10 mph below the posted limit",
          "25 mph",
          "35 mph or less, being 20 mph below the posted limit",
          "Whatever speed feels safe",
        ],
        correctIndex: 2,
        explanation:
          "Where the limit is 50 mph or above and changing lanes is impossible or unsafe, the statute sets the reduced speed at least 20 mph below the posted limit. On a 55 mph road that is 35 mph or less.",
        context:
          "The manual gives only the words reduce to a safe speed, which is why this number has to come from Title 21 Section 4134. The law covers far more than police vehicles: DelDOT vehicles with amber lights, tow trucks, utility vehicles, and any vehicle displaying hazard lights, flares, cones or caution signs. A first offense costs up to $250.",
        trap:
          "\"A safe speed\" reads as a judgment call. Above 50 mph the statute makes it a number, and a driver ticketed at 50 in a 55 has no defense in how safe it felt.",
        excerptKey: "moveover-20-under",
        sourceLabel: "Delaware Code Title 21 Section 4134 - Move Over",
        sourceUrl: del("c041/sc01"),
        commonlyMissed: true,
      },
      {
        id: "de_s5_09",
        topic: "sharing",
        question:
          "A cyclist ahead of you rolls through a stop sign at a two-lane intersection without stopping. What is the legal position in Delaware?",
        choices: [
          "The cyclist has committed a violation",
          "The cyclist must dismount instead of stopping",
          "Stop signs never apply to cyclists in Delaware",
          "The cyclist may lawfully yield rather than stop on a road with two or fewer lanes",
        ],
        correctIndex: 3,
        explanation:
          "On a road with two or fewer lanes for moving traffic, a Delaware cyclist may reduce speed, yield, and proceed without stopping. That is the law, not a tolerated habit.",
        context:
          "The permission has two limits. A full stop is required where the intersecting roadway has three or more lanes for moving traffic, and where a vehicle is already stopped at the same stop sign. Delaware's manual summarizes this in one line under Bicycle Friendly Delaware Act; Section 4196A carries the detail.",
        trap:
          "Expecting the cyclist to stop is what creates the conflict. A driver who pulls out because the bicycle must be stopping is the one at fault.",
        excerptKey: "bike-statute-2lanes",
        sourceLabel: "Delaware Code Title 21 Section 4196A - Bicycle approaching an intersection",
        sourceUrl: del("c041/sc12"),
        commonlyMissed: true,
      },
      {
        id: "de_s5_10",
        topic: "rules",
        question:
          "A Delaware driver holding a GDL Level One Learner's Permit wants to talk on a hands-free phone. Is that allowed?",
        choices: [
          "Yes, hands-free is always permitted",
          "Yes, but only when a supervisor is in the vehicle",
          "No - all cell phone and electronic device use, including hands-free, is prohibited for GDL drivers",
          "Yes, but only for calls under one minute",
        ],
        correctIndex: 2,
        explanation:
          "The GDL restriction is total. Hands-free devices are lawful for a fully licensed driver, and prohibited outright for a permit holder in the GDL program.",
        context:
          "The permit restrictions run together as a set: the permit must be carried when driving, everyone must be belted or in a child seat, no electronic devices at all, and passenger limits for the first twelve months. Breaking any of them is treated as driving without a license, which brings a two-month suspension for a first offense.",
        trap:
          "Hands-free is legal for adults, which is why permit holders assume it applies to them. The manual carves them out by name.",
        excerptKey: "cell-gdl-total-ban",
        sourceLabel: "Delaware Driver Manual - Section Four, Cell Phone Use While Driving",
        sourceUrl: p(81),
        commonlyMissed: true,
      },
      {
        id: "de_s5_11",
        topic: "safety",
        question:
          "You are the passing vehicle and have just cleared the car you overtook. When may you move back into the right lane?",
        choices: [
          "As soon as you can no longer see them beside you",
          "After counting three seconds from completing the pass",
          "As soon as your turn signal has been on for 300 feet",
          "When you can see both of their headlights in your rearview mirror",
        ],
        correctIndex: 3,
        explanation:
          "Both headlights in your rearview mirror is the manual's test. That is the point at which you have left the passed driver enough room ahead of them.",
        context:
          "Cutting back in early is one of the No-Zone hazards the manual describes for trucks, where the driver is left with almost no room and no time. It applies to cars too, just with less mass behind it. The rule pairs with the advice to pass only one vehicle at a time.",
        trap:
          "The moment you can no longer see them beside you is the moment you are directly in front of their bumper.",
        excerptKey: "space-pass-return",
        sourceLabel: "Delaware Driver Manual - Section Five, Space To Pass",
        sourceUrl: p(132),
      },
      {
        id: "de_s5_12",
        topic: "signs",
        question:
          "You approach a work zone in Delaware where the posted work-zone limit is 45 mph. You are traveling at 60 and no workers are present. What is the position?",
        choices: [
          "The work-zone limit only applies when workers are present",
          "The fine is doubled, and the zone runs from the first traffic-control device to the last",
          "The fine is the same as an ordinary speeding ticket",
          "No offense is committed if the lanes are not physically narrowed",
        ],
        correctIndex: 1,
        explanation:
          "Delaware doubles the fine for exceeding the speed limit in a work zone, and the zone is defined by the traffic-control devices rather than by whether anyone is working. The first sign starts it and the last one ends it.",
        context:
          "The definition in Title 21 runs from the first device informing road users of their approach to a work zone until the last device indicating that restrictions are removed, and it includes signed detour routes. Delaware also permits automated speed monitoring in work zones.",
        trap:
          "An empty work zone at night feels like a normal road. The signs, not the workers, decide where the doubled fine applies.",
        excerptKey: "wz-double-fine",
        sourceLabel: "Delaware Driver Manual - Section Four, When Driving Through A Work Zone",
        sourceUrl: p(79),
      },
      {
        id: "de_s5_13",
        topic: "rightOfWay",
        question:
          "You are already inside a Delaware roundabout when a car waits to enter beside you. What should you do?",
        choices: [
          "Stop to let them in as a courtesy",
          "Sound your horn to warn them",
          "Move to the outside lane so they can enter",
          "Keep moving - you have the right of way and should not stop except to avoid a collision",
        ],
        correctIndex: 3,
        explanation:
          "Inside the circle you have priority over entering traffic, and the manual says not to stop except to avoid a collision. Stopping to be polite backs the roundabout up behind you.",
        context:
          "Approaching, the roles reverse: you yield to traffic already in the roundabout, stay right of the splitter island, slow down, and watch for cyclists merging into the entry lane and pedestrians in the crosswalk. Inside, keep right of the central island, travel counterclockwise, keep your speed down and do not pass.",
        trap:
          "Courtesy is the wrong instinct in a roundabout. Its whole efficiency depends on the circulating traffic never stopping.",
        excerptKey: "roundabout-what",
        sourceLabel: "Delaware Driver Manual - Section Four, Roundabouts",
        sourceUrl: p(85),
      },
      {
        id: "de_s5_14",
        topic: "impairment",
        question:
          "A 20-year-old Delaware driver is convicted of DUI in the Family Court. What happens to their driving privilege?",
        choices: [
          "It is revoked until they turn 21",
          "It is suspended for six months",
          "It is revoked for two years from conviction",
          "They are placed on probation with no license action",
        ],
        correctIndex: 0,
        explanation:
          "For a juvenile DUI, the Family Court must order the Division to revoke the license until the person is legally permitted to drink - that is, until they turn 21.",
        context:
          "That sits alongside the zero tolerance law, which revokes an under-21 driver's license for two months on a first offense at .02 BAC, and underage possession or consumption of alcohol, which can cost a license even with no driving involved. The manual lists underage possession among Delaware's mandatory revocations.",
        trap:
          "A fixed-length suspension is what people expect. For a juvenile the revocation is tied to an age, not a period.",
        excerptKey: "dui-juvenile-until-21",
        sourceLabel: "Delaware Driver Manual - Section Two, Juveniles Driving Under The Influence",
        sourceUrl: p(54),
      },
      {
        id: "de_s5_15",
        topic: "safety",
        question:
          "You need to slow suddenly at a point where the driver behind you would not expect it. What does the manual suggest?",
        choices: [
          "Brake as gently as possible so they are not surprised",
          "Switch on your hazard lights before braking",
          "Sound your horn to warn them",
          "Tap the brake pedal three or four times quickly first",
        ],
        correctIndex: 3,
        explanation:
          "Three or four quick taps on the brake pedal flash your brake lights and warn the driver behind. The manual gives this specifically for slowing at a place another driver would not expect it.",
        context:
          "The examples it lists are turning off a road that has no separate turn lane, parking or turning just before an intersection, and avoiding something in the road that the driver behind cannot yet see. The wider principle is that other drivers expect you to keep doing what you are doing, so you have to warn them before you change it.",
        trap:
          "Braking gently to be considerate leaves your brake lights on at their normal brightness and tells the driver behind nothing new.",
        excerptKey: "signal-slowing-taps",
        sourceLabel: "Delaware Driver Manual - Section Five, Signal when you slow down",
        sourceUrl: p(122),
      },
      {
        id: "de_s5_16",
        topic: "licensing",
        question:
          "A Delaware GDL permit holder in month eight wants to drive to a friend's house at 11pm without a supervisor. Is that allowed?",
        choices: [
          "Yes - after six months, unsupervised driving is unrestricted",
          "Yes, if a parent gives permission by phone",
          "No - between 10pm and 6am they need supervision, and the exceptions are church, work and school activities only",
          "Yes, as long as they carry the permit",
        ],
        correctIndex: 2,
        explanation:
          "After the first six months the permit holder may drive unsupervised between 6am and 10pm. Between 10pm and 6am they need a supervisor, with a narrow exception for going directly to and from church activities, work activities and school activities on school property.",
        context:
          "A friend's house is not on that list. The passenger limit runs in parallel: during unsupervised driving in the second six months, only one passenger besides the driver, other than immediate family with the adult supervisor in the car. Breaking any Level One restriction is treated as driving without a license.",
        trap:
          "\"Six months and I am free\" is the version teenagers pass to each other. The night restriction lasts the whole twelve months.",
        excerptKey: "gdl-night-exception",
        sourceLabel: "Delaware Driver Manual - Section Two, GDL Level One Learner's Permit Restrictions",
        sourceUrl: p(30),
        commonlyMissed: true,
      },
      {
        id: "de_s5_17",
        topic: "rules",
        question:
          "You are behind a vehicle waiting to turn left across traffic, and there is a paved shoulder to your right. What does Delaware law permit?",
        choices: [
          "Nothing - you must wait behind them",
          "Passing on the left across the center line",
          "Sounding your horn to move them along",
          "Passing on the right, including using the shoulder, with extreme care",
        ],
        correctIndex: 3,
        explanation:
          "Delaware allows you to pass a left-turning vehicle on the right and even to use the shoulder to do it. The manual pairs the permission with a warning that other drivers will not expect you there.",
        context:
          "This is one of very few situations in which a moving vehicle may lawfully be on the shoulder in Delaware. Everywhere else the manual pushes you left to pass, and warns that passing on the right risks the other driver changing lanes into you because they never saw you coming.",
        trap:
          "Most states forbid this outright, so drivers moving to Delaware answer from the rule they grew up with.",
        excerptKey: "passing-right-left-turners",
        sourceLabel: "Delaware Driver Manual - Section Four, General Rules - Passing",
        sourceUrl: p(87),
        commonlyMissed: true,
      },
      {
        id: "de_s5_18",
        topic: "parking",
        question:
          "Which of these is legal in Delaware without any further condition?",
        choices: [
          "Parking 25 feet from a railroad crossing",
          "Parking 18 feet before a crosswalk at an intersection",
          "Parking on the roadway side of a car already parked at the curb",
          "Parking 20 feet from a fire hydrant",
        ],
        correctIndex: 3,
        explanation:
          "Twenty feet clears the 15-foot hydrant rule. The other three all break a stated prohibition: 50 feet is the railroad figure, 20 feet the crosswalk figure, and double parking is prohibited outright.",
        context:
          "The manual introduces the whole list with a phrase people skip - you must not stop or park in these places even if someone is left in the car. It is not a rule about unattended vehicles; it is a rule about the space itself.",
        trap:
          "Leaving a passenger in the car while you run an errand is exactly the case the introduction rules out.",
        excerptKey: "park-violations-intro",
        sourceLabel: "Delaware Driver Manual - Section Four, Stopping And Parking Violations",
        sourceUrl: p(92),
      },
      {
        id: "de_s5_19",
        topic: "sharing",
        question:
          "You are approaching a school bus from behind and its amber overhead lights start flashing. What does that mean?",
        choices: [
          "The bus is about to pull back into traffic",
          "The bus will stop to load or unload in about ten seconds - approach with caution and expect to stop",
          "The bus has a mechanical fault",
          "You may pass, because only red lights require a stop",
        ],
        correctIndex: 1,
        explanation:
          "The amber lights come on roughly ten seconds before the red ones, as advance notice that the bus is preparing to stop. You approach with caution and anticipate a stop.",
        context:
          "The manual warns that children may already be waiting for the bus or running to board it. The red lights and stop arm come next, and once they are active you must not proceed until the lights stop flashing and the arm retracts. Statute puts the ten-second figure in the law itself.",
        trap:
          "Accelerating to get past before the reds come on is precisely the movement the ten-second warning exists to prevent.",
        excerptKey: "bus-yellow-lights",
        sourceLabel: "Delaware Driver Manual - Section Four, Stopping For School Buses",
        sourceUrl: p(89),
      },
      {
        id: "de_s5_20",
        topic: "safety",
        question:
          "A vehicle is about to hit you from behind and there is clear road ahead. What does the manual say you may do?",
        choices: [
          "Speed up to get out of danger, then slow down once it has passed",
          "Brake hard so the impact happens at a lower speed",
          "Swerve onto the shoulder immediately",
          "Nothing - you have no options in a rear-end situation",
        ],
        correctIndex: 0,
        explanation:
          "Speeding up is one of the three options the manual gives for avoiding a collision, alongside stopping and turning. It names being about to be hit from behind or the side, with room in front, as exactly when it applies.",
        context:
          "The manual adds the instruction people forget: slow down again once the danger has passed. Elsewhere it tells you that pressing yourself back into the seat with your head against the restraint and being ready to brake are what protect you if the impact happens anyway.",
        trap:
          "Braking to reduce the impact speed brings the collision forward and hands the driver behind less time, not more.",
        excerptKey: "avoid-speed-up",
        sourceLabel: "Delaware Driver Manual - Section Five, Avoiding Collisions",
        sourceUrl: p(139),
      },
      {
        id: "de_s5_21",
        topic: "rightOfWay",
        question:
          "A funeral-length queue of stopped traffic sits ahead of you on a green light. The intersection itself is clear. May you enter it?",
        choices: [
          "Yes - the light is green",
          "Yes, if you can clear at least half the intersection",
          "No - not unless you can get all the way through without stopping",
          "Yes, if you signal your intention",
        ],
        correctIndex: 2,
        explanation:
          "You may not enter an intersection unless you can get through without stopping. Waiting behind the stop line is the correct move even on a green light.",
        context:
          "The manual makes the consequence explicit in its space-management chapter: if you are caught in the intersection when the light turns red you will block other traffic, and you can get a ticket for it. The same reasoning governs railroad crossings, where you never start across without room on the far side.",
        trap:
          "\"The light is green so I am entitled\" is the whole error. Green governs the signal, not the road beyond it.",
        excerptKey: "space-blocking-ticket",
        sourceLabel: "Delaware Driver Manual - Section Five, Space To Cross Or Enter",
        sourceUrl: p(131),
      },
      {
        id: "de_s5_22",
        topic: "signs",
        question:
          "A yellow sign shows a black arrow bending sharply to the right, with no number below it. What does it warn of?",
        choices: [
          "A gentle curve to the right",
          "A sharp turn to the right - reduce speed",
          "Right lane ends ahead",
          "A right turn is prohibited",
        ],
        correctIndex: 1,
        explanation:
          "A sharp turn to the right, which is a tighter change of direction than the curve sign and asks you to reduce speed. Delaware uses different symbols for a sharp turn and for a curve.",
        context:
          "The set runs sharp turn, curve, sharp turn right then left, and winding road ahead, in increasing complexity. Where a speed appears on a yellow plate below any of them, it is the advisory speed for that stretch - not the legal limit, but exceeding it can be used as evidence that you violated the general speed restriction.",
        trap:
          "A prohibition would be a red circle with a slash on a white regulatory sign. Yellow means the road is doing something, not that you are forbidden to.",
        excerptKey: "sign-warning-shape",
        sourceLabel: "Delaware Driver Manual - Section Four, Warning Signs",
        sourceUrl: p(75),
      },
      {
        id: "de_s5_23",
        topic: "speed",
        question:
          "In very heavy rain you can see only about 200 feet ahead. What is the fastest the manual says you can safely drive?",
        choices: ["50 mph", "45 mph", "40 mph", "30 mph"],
        correctIndex: 3,
        explanation:
          "At 200 feet of visibility the manual's ceiling is 30 mph, because 200 feet is about what it takes to see something and stop from that speed.",
        context:
          "The pairing runs the other way too: 400 feet is the stopping distance from 50 mph, so if you cannot see 400 feet you should not be doing 50. In a very heavy downpour the manual accepts that you may not be able to see well enough to drive at all, and says to pull off in a safe place and wait.",
        trap:
          "The posted limit is irrelevant here. Delaware's general speed restriction makes 55 unlawful when you can only see 200 feet.",
        excerptKey: "see-rain-fog-200",
        sourceLabel: "Delaware Driver Manual - Section Five, Rain, Fog, Or Snow",
        sourceUrl: p(126),
      },
      {
        id: "de_s5_24",
        topic: "rules",
        question:
          "You are involved in a crash and your vehicle is blocking traffic, but nobody appears injured. What does Delaware require?",
        choices: [
          "After checking there are no injuries or deaths, make every reasonable effort to move the vehicle out of the traffic flow",
          "Leave the vehicles exactly where they are until police arrive",
          "Move the vehicle only if the damage is under $500",
          "Move the vehicle only with police permission",
        ],
        correctIndex: 0,
        explanation:
          "Once you have reasonably established that nobody is injured or dead, Delaware asks you to move a vehicle that is obstructing traffic, or have it moved, so it does not block the road more than necessary.",
        context:
          "The other duties do not change: stop at the scene, exchange names, addresses, registration numbers, license numbers and insurance details, collect the names of everyone involved and any witnesses, and report the crash to police where there is injury, death or $500 or more of apparent property damage.",
        trap:
          "\"Never move the vehicles\" is what people carry from television. Delaware asks the opposite once injuries are ruled out.",
        excerptKey: "crash-move-vehicle",
        sourceLabel: "Delaware Driver Manual - Section Five, At The Crash Scene",
        sourceUrl: p(140),
      },
      {
        id: "de_s5_25",
        topic: "impairment",
        question:
          "Where does Delaware's DUI law apply?",
        choices: [
          "On public highways only",
          "On highways and elsewhere throughout the state, and to off-highway vehicles and mopeds as well as cars",
          "On public highways and parking lots open to the public",
          "Only where a road is maintained at public expense",
        ],
        correctIndex: 1,
        explanation:
          "Delaware's DUI law reaches highways and elsewhere throughout the state, and it covers anyone driving, operating or in actual physical control of a vehicle, an off-highway vehicle or a moped.",
        context:
          "Actual physical control is broader than driving, so a person sitting in a stationary vehicle can fall under it. The manual also removes the obvious defense: being legally entitled to use alcohol or a drug is not a defense to the charge, and a DUI conviction in another state results in revocation in Delaware.",
        trap:
          "Private land is not a safe harbor. The statute reaches elsewhere throughout the State by name.",
        excerptKey: "dui-applies-everywhere",
        sourceLabel: "Delaware Driver Manual - Section Two, Driving Under The Influence",
        sourceUrl: p(54),
      },
      {
        id: "de_s5_26",
        topic: "safety",
        question:
          "You are stopped at a cross street and parked cars block your view of traffic. What does the manual tell you to do?",
        choices: [
          "Wait until a gap opens in the sound of traffic",
          "Pull out quickly so you spend less time exposed",
          "Edge forward slowly until you can see",
          "Reverse and choose a different route",
        ],
        correctIndex: 2,
        explanation:
          "Edge forward slowly until you can see. Moving forward slowly also lets crossing drivers see the front of your car before you can see them, which gives them a chance to slow down.",
        context:
          "The instruction sits inside the manual's wider treatment of intersections - look both ways before you enter, look again just before you move if you were stopped, and look across the intersection to make sure the path is clear all the way through. Parked vehicles get their own warning as one of the things that limit how well you can see.",
        trap:
          "Accelerating out of a blind junction to minimize exposure gives you the least possible time to react to what you could not see.",
        excerptKey: "scan-edge-forward",
        sourceLabel: "Delaware Driver Manual - Section Five, Scanning - Intersections",
        sourceUrl: p(117),
      },
      {
        id: "de_s5_27",
        topic: "sharing",
        question:
          "A truck ahead of you swings wide to the left before making a right turn. What should you do?",
        choices: [
          "Move up the right side into the gap it has left",
          "Pass on the left while it is turning",
          "Stay behind - cutting in between the truck and the curb is how those collisions happen",
          "Sound your horn to tell the driver you are there",
        ],
        correctIndex: 2,
        explanation:
          "The gap between the truck and the curb is not a lane. Truck drivers swing wide because they have to, and they cannot see a car directly behind them.",
        context:
          "The manual describes four No-Zones: directly behind, along both sides, immediately in front after a pass, and the area a truck sweeps through when backing. Two-thirds of all commercial vehicle crashes happen while backing, which is why it also says never to cross behind a truck preparing to reverse.",
        trap:
          "The gap looks like an invitation. It is the space the trailer is about to occupy.",
        excerptKey: "truck-wide-turns",
        sourceLabel: "Delaware Driver Manual - Section Four, Near A Truck - No-Zone",
        sourceUrl: p(104),
      },
      {
        id: "de_s5_28",
        topic: "rightOfWay",
        question:
          "A vehicle ahead of you has stopped in the middle of the block to let a pedestrian cross. What does Delaware require?",
        choices: [
          "Pass it slowly, since you have not seen the pedestrian",
          "Pass it on the right only",
          "Sound your horn and pass",
          "Do not pass it at all",
        ],
        correctIndex: 3,
        explanation:
          "You must not pass a vehicle stopped to allow a pedestrian to cross. The stopped vehicle is hiding somebody you cannot see, which is the whole reason for the rule.",
        context:
          "It sits in the same list as the duty to yield to any pedestrian within a crosswalk, stopping if necessary, and the prohibition on driving through a pedestrian safety zone or blocking a crosswalk. Delaware recorded 89 pedestrian fatalities between 2021 and 2023.",
        trap:
          "Passing slowly is not a lesser version of complying. The pedestrian steps out from behind the stopped car at walking pace, and slowly is still faster than that.",
        excerptKey: "ped-no-passing-stopped",
        sourceLabel: "Delaware Driver Manual - Section Four, Your Responsibility As A Driver",
        sourceUrl: p(95),
        commonlyMissed: true,
      },
      {
        id: "de_s5_29",
        topic: "licensing",
        question:
          "A Delaware driver completes an approved defensive driving course. What effect does it have?",
        choices: [
          "It gives a three-point credit used to calculate future penalties, valid for three years, without reducing the record",
          "It removes three points from the record",
          "It clears the record entirely for insurance purposes",
          "It halves the points on any future violation",
        ],
        correctIndex: 0,
        explanation:
          "The credit is three points, and it applies only to the internal calculation the DMV uses for future penalties. The overall point value on your record, which employers and insurers see, is untouched.",
        context:
          "The credit lasts three years from completion and applies only to violations that come afterwards, so it cannot be used to clear points you already have. It is a different thing from the behavior modification or attitudinal driving course, which is a minimum of eight hours, costs $100, and is the course the Division orders once you reach 12 calculated points.",
        trap:
          "Taking the course does not remove points. It changes how the next ones are counted, and only for the Division's own purposes.",
        excerptKey: "defensive-course-credit",
        sourceLabel: "Delaware Driver Manual - Section Two, Defensive Driving Courses",
        sourceUrl: p(49),
      },
      {
        id: "de_s5_30",
        topic: "safety",
        question:
          "How far ahead should you look on a Delaware highway, and what does that distance look like?",
        choices: [
          "Ten seconds, which is about four city blocks or a quarter of a mile",
          "Five seconds, which is about two city blocks",
          "Twenty seconds, which is about half a mile",
          "As far as your headlights reach, at any speed",
        ],
        correctIndex: 0,
        explanation:
          "Ten seconds is the manual's figure, and on the highway that works out at about four city blocks or a quarter of a mile. In town the same ten seconds is roughly one block.",
        context:
          "The manual gives a way to check it: pick a stationary object about as far ahead as you are looking, count one-one-thousand, two-one-thousand and so on until you reach it, and the count is how many seconds ahead you were looking. Looking that far ahead cuts last-minute braking, saves fuel, and keeps traffic behind you moving smoothly.",
        trap:
          "Ten seconds ahead is not the same measurement as the three-second following distance or the four-second sight distance rule. Delaware uses all three for different jobs.",
        excerptKey: "scan-city-block",
        sourceLabel: "Delaware Driver Manual - Section Five, Scanning",
        sourceUrl: p(116),
      },
      {
        id: "de_s5_31",
        topic: "rules",
        question:
          "You are turning right from a Delaware street and need extra room for the turn. What does the manual say about swinging wide to the left first?",
        choices: [
          "It is fine if you signal",
          "It is required on any road with a bike lane",
          "Avoid it - the driver behind may read it as a lane change or a left turn",
          "It is permitted below 20 mph",
        ],
        correctIndex: 2,
        explanation:
          "Avoid swinging wide to the left before a right turn. To the driver behind it looks like you are changing lanes or turning left, and they may try to pass on your right.",
        context:
          "The manual gives the same warning about swinging wide as you complete the turn, because drivers in the far lane will not expect to find you there. Its general instruction for turning is to move from one lane to the other as directly as possible without crossing lane lines.",
        trap:
          "Signaling does not fix the ambiguity. The signal says right; the vehicle's movement says left.",
        excerptKey: "turning-right-no-wide",
        sourceLabel: "Delaware Driver Manual - Section Four, General Rules - Turning",
        sourceUrl: p(87),
      },
      {
        id: "de_s5_32",
        topic: "signals",
        question:
          "You are the only car at an intersection controlled by a flashing yellow light on your road and a flashing red on the cross street. What is your duty?",
        choices: [
          "Slow down, be more aware and proceed with caution",
          "Stop, then proceed when safe",
          "Proceed at the posted limit",
          "Treat it as a four-way stop",
        ],
        correctIndex: 0,
        explanation:
          "A flashing yellow means slow down, be more alert and proceed with caution. The manual adds the specific hazard - be careful of the cross traffic being held by the flashing red.",
        context:
          "The pairing is deliberate. The flashing yellow goes to the road with priority and the flashing red to the road that must stop. Neither signal changes, so waiting for green on either of them is waiting for something that will not happen.",
        trap:
          "Treating a flashing yellow as a stop invites a rear-end collision from a driver who knows the rule.",
        excerptKey: "flashing-yellow",
        sourceLabel: "Delaware Driver Manual - Section Four, Understanding Traffic Signals",
        sourceUrl: p(70),
      },
      {
        id: "de_s5_33",
        topic: "parking",
        question:
          "Which of these does Delaware require whenever you park and leave your vehicle on a street?",
        choices: [
          "Leave the engine running if you will be less than five minutes",
          "Stop the engine, lock the ignition, remove the key and set the brakes",
          "Leave the vehicle in neutral so it can be pushed if necessary",
          "Turn the wheels toward the curb in every case",
        ],
        correctIndex: 1,
        explanation:
          "Engine off, ignition locked, key out, brakes set. The manual adds a separate legal point - it is against the law to leave the keys in a running unattended vehicle.",
        context:
          "Raising the windows and locking the doors are advised rather than required. The wheel direction depends on the slope: toward the curb downhill, away from it uphill with a curb, toward the edge uphill without one.",
        trap:
          "Turning the wheels to the curb is only the downhill answer. It is not a universal parking rule.",
        excerptKey: "park-leaving-vehicle",
        sourceLabel: "Delaware Driver Manual - Section Four, General Parking Rules",
        sourceUrl: p(91),
      },
      {
        id: "de_s5_34",
        topic: "emergencies",
        question:
          "You have just driven through deep water. What does the manual tell you to do about your brakes?",
        choices: [
          "Drive slowly in low gear, tapping the brakes lightly, and test every 200 feet until they feel normal",
          "Nothing - modern brakes are sealed",
          "Brake hard once to clear the water",
          "Pull over and let them dry for ten minutes",
        ],
        correctIndex: 0,
        explanation:
          "Low gear, drive slowly, apply the brakes lightly, and test every 200 feet until braking returns to normal. Wet brakes may pull to one side or fail to hold at all.",
        context:
          "That sits in the same section as the brake-failure sequence: pump the pedal first, then the parking brake pulled slowly, then downshifting and looking for a safe place off the road. The manual is emphatic that you should not drive a vehicle that has no brakes.",
        trap:
          "One hard stop to dry the brakes is a gamble on brakes you have not yet tested.",
        excerptKey: "emerg-wet-brakes",
        sourceLabel: "Delaware Driver Manual - Section Five, Brake Failure",
        sourceUrl: p(136),
      },
      {
        id: "de_s5_35",
        topic: "sharing",
        question:
          "A driver ahead pulls out to pass, then finds they do not have room and needs to come back in. What does the manual say you should do?",
        choices: [
          "Slow down and let them return to the lane safely",
          "Hold your speed so they learn from it",
          "Move onto the shoulder",
          "Flash your headlights and hold position",
        ],
        correctIndex: 0,
        explanation:
          "Slow down and let them back in. The manual's phrasing is that if another driver makes a mistake, do not make it worse.",
        context:
          "It gives the same instruction for a driver who needs to change lanes suddenly. The point is not politeness - these gestures keep traffic moving and help you avoid a crash you would otherwise be part of. The manual pairs it with advice to stay away from erratic and aggressive drivers rather than challenging them.",
        trap:
          "Refusing to yield to a driver who misjudged a pass makes you a participant in a head-on collision.",
        excerptKey: "space-drivers-in-trouble",
        sourceLabel: "Delaware Driver Manual - Section Five, Space For Special Situations",
        sourceUrl: p(132),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix and the plain style of the real Rules Of The Road Test. No hints beyond what the DMV would give you. The real exam is 32 questions and you need 26; treat 26 of 30 as your target here.",
    questions: [
      {
        id: "de_s6_01",
        topic: "signs",
        question: "A sign showing a black X and the letters RR on a round yellow background means:",
        choices: [
          "A railroad crossing is ahead",
          "You are at the railroad crossing",
          "The crossing has two or more tracks",
          "Railroad crossing closed",
        ],
        correctIndex: 0,
        explanation:
          "The round yellow sign is placed on the approach and warns that a railroad crossing is ahead. Slow down and look for the crossing.",
        context:
          "The crossbuck at the crossing itself carries a yield meaning, and flashing lights there mean stop. Pavement markings before many Delaware crossings repeat the X and RR with a stop bar.",
        trap:
          "The advance warning sign and the crossbuck do different jobs at different points on the road.",
        excerptKey: "sign-rr-advance",
        sourceLabel: "Delaware Driver Manual - Section Four, Warning Signs",
        sourceUrl: p(75),
      },
      {
        id: "de_s6_02",
        topic: "rules",
        question: "When you change lanes, you should:",
        choices: [
          "Look over your shoulder in the direction you plan to move",
          "Rely on the rearview mirror alone",
          "Sound the horn first",
          "Use the left side mirror only",
        ],
        correctIndex: 0,
        explanation:
          "The shoulder check covers what the mirrors cannot - the rear corners of your own vehicle, which the manual calls the blind spots.",
        context:
          "The full sequence is signal, check the mirrors, look over your shoulder, check the far lane, and keep the check quick so your eyes leave the road ahead only briefly. Merging from a ramp and pulling out from the curb count as lane changes too.",
        trap:
          "Mirrors are the answer that feels complete and leaves out the one area the mirror cannot reach.",
        excerptKey: "lanechange-blind-spot",
        sourceLabel: "Delaware Driver Manual - Section Five, Scanning",
        sourceUrl: p(118),
      },
      {
        id: "de_s6_03",
        topic: "rightOfWay",
        question: "Drivers turning left must yield to:",
        choices: [
          "Overtaking cars",
          "Nobody, once the light is green",
          "Pedestrians only",
          "Oncoming cars going straight ahead",
        ],
        correctIndex: 3,
        explanation:
          "A left-turning driver yields to oncoming traffic going straight. Green gives permission to turn, never priority over the traffic coming the other way.",
        context:
          "You also yield to pedestrians in the crosswalk you are turning across. The manual asks you to look for a safe gap, check that the road you are turning into is clear, then look once more at oncoming traffic before you commit.",
        trap:
          "An oncoming turn signal is not a promise. Wait until the vehicle actually turns.",
        excerptKey: "row-left-turn-yield",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(88),
      },
      {
        id: "de_s6_04",
        topic: "safety",
        question: "Which road surface freezes first?",
        choices: ["A tunnel", "An intersection", "A hill", "A bridge"],
        correctIndex: 3,
        explanation:
          "Bridges and overpasses ice before other pavement, because cold air passes underneath as well as over the top. The pavement on a bridge can be icy when the road either side of it is not.",
        context:
          "The manual's other clues to slippery road surfaces are shady spots on cold wet days, which freeze first and dry last, and ice near the freezing point, which becomes wet and more slippery than ice well below freezing. Rain on a hot day brings oil to the surface for the first few minutes.",
        trap:
          "A tunnel is sheltered from the weather. A bridge is exposed on every side.",
        excerptKey: "bridges-freeze",
        sourceLabel: "Delaware Driver Manual - Section Five, Slippery roads",
        sourceUrl: p(123),
      },
      {
        id: "de_s6_05",
        topic: "impairment",
        question: "In Delaware, a BAC of .08 or greater is:",
        choices: [
          "Grounds for a warning on a first offense",
          "The level at which a driver may be charged if driving is also poor",
          "Conclusive evidence that the driver is under the influence",
          "Legal for a driver over 21",
        ],
        correctIndex: 2,
        explanation:
          "At .08 or above the number itself settles the question - it is conclusive evidence of driving under the influence, as is the presence of any illicit or recreational drug.",
        context:
          "Below .08 a driver can still be charged if the evidence shows impairment. Under 21 the figure is .02 under the zero tolerance law, and commercial drivers are disqualified at .04 or on refusing a test.",
        trap:
          "Being under .08 is not a defense on its own. The offense can be proved without the number.",
        excerptKey: "bac-08",
        sourceLabel: "Delaware Driver Manual - Section Two, Blood Alcohol Concentration",
        sourceUrl: p(50),
      },
      {
        id: "de_s6_06",
        topic: "parking",
        question: "When you park facing downhill, you should turn your front wheels:",
        choices: [
          "Away from the curb",
          "Straight ahead",
          "Toward the center line",
          "Toward the curb or edge of the road",
        ],
        correctIndex: 3,
        explanation:
          "Downhill means wheels toward the curb, so a rolling car goes into the curb rather than into the traffic lane.",
        context:
          "Uphill with a curb, the wheels go away from it with the near-side front wheel touching. Uphill with no curb, they go toward the edge of the highway. A manual transmission goes into low gear uphill and reverse downhill.",
        trap:
          "The uphill and downhill answers are opposites, which is why the direction of travel has to be read carefully.",
        excerptKey: "park-hill",
        sourceLabel: "Delaware Driver Manual - Section Four, Parking on Hill",
        sourceUrl: p(92),
      },
      {
        id: "de_s6_07",
        topic: "speed",
        question:
          "Unless posted otherwise, the speed limit on a Delaware two-lane road is:",
        choices: ["35 mph", "45 mph", "50 mph", "55 mph"],
        correctIndex: 2,
        explanation:
          "Fifty on a two-lane road. Fifty-five is the figure for divided roads and roads with four or more lanes.",
        context:
          "The rest of the table runs 20 mph in a posted school zone, 25 in business and residential districts, 55 on controlled-access highways, and 65 on Route 1 and Interstate 495.",
        trap:
          "The two-lane and four-lane figures differ by five, and the exam asks for one at a time.",
        excerptKey: "speed-table",
        sourceLabel: "Delaware Driver Manual - Section Four, Speed Limits",
        sourceUrl: p(93),
      },
      {
        id: "de_s6_08",
        topic: "sharing",
        question:
          "You must stop for a school bus with red lights flashing coming toward you unless:",
        choices: [
          "You are traveling under 25 mph",
          "You are on a road with four or more lanes",
          "No children are visible",
          "You have already passed the stop arm",
        ],
        correctIndex: 1,
        explanation:
          "Four or more lanes is the only exception. On any narrower road, traffic in both directions stops.",
        context:
          "Even on a four-lane road the manual asks oncoming drivers to proceed slowly. Traffic behind the bus stops on every road. The red lights and the stop arm coming down mark the start; the lights going off and the arm retracting mark the end.",
        trap:
          "\"No children visible\" is never the test. Children can be crossing in front of the bus where you cannot see them.",
        excerptKey: "bus-stop-either-direction",
        sourceLabel: "Delaware Driver Manual - Section Four, Overtaking (Passing) Other Vehicles",
        sourceUrl: p(81),
      },
      {
        id: "de_s6_09",
        topic: "signals",
        question: "A steady yellow traffic light means:",
        choices: [
          "Speed up to clear the intersection",
          "The signal is changing to red - prepare to stop",
          "Proceed with caution as on a green light",
          "Stop, and wait for a green",
        ],
        correctIndex: 1,
        explanation:
          "Yellow means the signal is changing from green to red and you should prepare to stop. If you are already too close to stop safely, continue through with care.",
        context:
          "The four-rule summary the manual gives is red for stop, yellow for prepare to stop, green for proceed with caution, and arrows for the direction they point. The steady yellow arrow is the same message for a turning movement.",
        trap:
          "Accelerating on yellow reverses the instruction. The exception is for a driver too close to stop, not for one who chooses not to.",
        excerptKey: "yellow-steady",
        sourceLabel: "Delaware Driver Manual - Section Four, Understanding Traffic Signals",
        sourceUrl: p(70),
      },
      {
        id: "de_s6_10",
        topic: "rules",
        question: "It is necessary to use your low beams any time you are:",
        choices: [
          "On a lighted street",
          "On a freeway",
          "Driving under 25 mph",
          "In fog, snow or heavy rain",
        ],
        correctIndex: 3,
        explanation:
          "Low beams in fog, snow or heavy rain. High beams reflect off the water or the fog and come straight back at you as glare.",
        context:
          "Low beams are also required when following another vehicle within 200 feet, and when meeting an oncoming vehicle within 500 feet. High beams are for open road with nothing in front of you, where they show you about twice as far.",
        trap:
          "Brighter feels better in fog and is exactly backwards. The extra light bounces back off the droplets.",
        excerptKey: "lights-low-in-fog",
        sourceLabel: "Delaware Driver Manual - Section Five, Using Your Lights",
        sourceUrl: p(119),
      },
      {
        id: "de_s6_11",
        topic: "signs",
        question:
          "A sign with white letters on a rectangular blue background tells you about:",
        choices: [
          "Recreation areas such as state parks",
          "The route you are traveling on",
          "Regulations you must obey",
          "Motorist services such as fuel, food and lodging",
        ],
        correctIndex: 3,
        explanation:
          "Blue with white letters is Delaware's motorist services color, used for fuel, food and lodging. Brown with white letters marks recreation.",
        context:
          "Guide signs to places are green rectangles with white letters. Route markers use shapes: the US shield, a white circle for state routes, and the red, white and blue shield for interstates.",
        trap:
          "Blue and brown both carry white letters. Blue is what you need on the road; brown is where you are going for the weekend.",
        excerptKey: "sign-motorist-service",
        sourceLabel: "Delaware Driver Manual - Section Four, Information signs",
        sourceUrl: p(78),
      },
      {
        id: "de_s6_12",
        topic: "safety",
        question: "Make room for cars entering a freeway by:",
        choices: [
          "Slowing down sharply",
          "Maintaining your speed and position",
          "Moving over a lane if there is nobody beside you",
          "Sounding your horn",
        ],
        correctIndex: 2,
        explanation:
          "Move over a lane if there is no one next to you. It gives merging traffic the whole lane instead of half of it, without forcing anyone behind you to brake.",
        context:
          "The manual's advice to the merging driver is the mirror image: use the ramp to reach the speed of the traffic before you pull on, and never drive to the end of the ramp and stop. Merging wants a four-second gap.",
        trap:
          "Braking hard to make room shifts the problem to the driver behind you, who may not have seen the merge at all.",
        excerptKey: "space-side-make-room",
        sourceLabel: "Delaware Driver Manual - Section Five, Space To The Side",
        sourceUrl: p(129),
      },
      {
        id: "de_s6_13",
        topic: "rightOfWay",
        question:
          "At an intersection with stop signs at all four corners, you must yield to the driver who:",
        choices: [
          "Is on your left",
          "Is turning left",
          "Is driving the larger vehicle",
          "Arrived before you",
        ],
        correctIndex: 3,
        explanation:
          "The driver who reached the intersection first goes first. The right-hand rule is only a tie-breaker for drivers who arrive at the same moment.",
        context:
          "The manual states both parts in one sentence, and Delaware candidates who remember only the right-hand half get the ordinary case wrong. Whoever goes first must still have come to a complete stop before starting.",
        trap:
          "\"Yield to the driver on your right\" is the half of the rule everyone remembers, and it applies only to a genuine tie.",
        excerptKey: "row-four-way-stop",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(88),
      },
      {
        id: "de_s6_14",
        topic: "impairment",
        question: "There is no way to sober up quickly except:",
        choices: ["Strong coffee", "Time", "Cold air", "A large meal"],
        correctIndex: 1,
        explanation:
          "Time is the only thing that lowers a blood alcohol concentration. Coffee, fresh air, exercise and cold showers all leave the alcohol exactly where it is.",
        context:
          "Eating before and during drinking slows how fast alcohol reaches the blood, which is not the same as preventing intoxication. The manual's practical advice is a designated driver, public transport or a cab.",
        trap:
          "Feeling more awake and being less impaired are different states, and only one of them is affected by coffee.",
        excerptKey: "drink-time-only",
        sourceLabel: "Delaware Driver Manual - Section Two, If You Drink, When Can You Drive",
        sourceUrl: p(52),
      },
      {
        id: "de_s6_15",
        topic: "rules",
        question: "In Delaware, you must signal for at least:",
        choices: [
          "50 feet before turning",
          "100 feet before turning",
          "300 feet before turning",
          "200 feet before turning",
        ],
        correctIndex: 2,
        explanation:
          "Three hundred feet. Delaware's signaling distance is unusually long, and the manual states it in both its laws section and its section on communicating.",
        context:
          "The signal may be given by hand and arm or by the turn signal lamps, and it applies to stopping and changing lanes as well as turning. At higher speeds the manual asks for considerably more than the minimum.",
        trap:
          "One hundred feet is the figure in most neighboring states and it is not Delaware's.",
        excerptKey: "signal-hand-or-device",
        sourceLabel: "Delaware Driver Manual - Section Five, Let Others Know What You Are Doing",
        sourceUrl: p(122),
      },
      {
        id: "de_s6_16",
        topic: "emergencies",
        question:
          "You must make a report to police after a crash on a public highway when the property damage reaches:",
        choices: ["$500", "$250", "$1,000", "$2,000"],
        correctIndex: 0,
        explanation:
          "Five hundred dollars of apparent property damage on a public highway. Any injury or death requires a report regardless of the damage.",
        context:
          "Where a driver's ability appears to have been impaired by alcohol or drugs the threshold is $1,000. If the only damage is to your own property, you need not stay at the scene but must report the crash immediately.",
        trap:
          "The $1,000 figure applies only to the impaired-driver case, and it is the one people quote for the ordinary one.",
        excerptKey: "crash-report-thresholds",
        sourceLabel: "Delaware Driver Manual - Section Five, Reporting Crashes",
        sourceUrl: p(141),
      },
      {
        id: "de_s6_17",
        topic: "signs",
        question: "The only eight-sided sign on a Delaware highway is:",
        choices: [
          "The yield sign",
          "The do not enter sign",
          "The school crossing sign",
          "The stop sign",
        ],
        correctIndex: 3,
        explanation:
          "The octagon belongs to the stop sign and nothing else, so its shape alone identifies it even in poor light or from behind.",
        context:
          "The yield sign has the same exclusivity in its own shape - a downward triangle used for nothing else. The school and school crossing signs are five-sided, and the do not enter sign is a red circle with a white bar.",
        trap:
          "The Highway Sign and Signal Test shows shapes without labels, so the shape has to be enough on its own.",
        excerptKey: "sign-stop-octagon",
        sourceLabel: "Delaware Driver Manual - Section Four, Regulatory Signs",
        sourceUrl: p(74),
      },
      {
        id: "de_s6_18",
        topic: "safety",
        question: "If bad weather makes it hard for you to see, you should:",
        choices: [
          "Increase your following distance",
          "Speed up to get off the road quickly",
          "Drive in the lane closest to oncoming traffic",
          "Turn on your high beams",
        ],
        correctIndex: 0,
        explanation:
          "Poor visibility is one of the situations the manual lists as needing a four-second following distance rather than three. You cannot react to what you cannot yet see.",
        context:
          "The rest of the response is to use low beams rather than high, keep to the center of your lane, and slow to a speed you can stop within the distance you can see. In a very heavy downpour the manual accepts that pulling off the road is the right answer.",
        trap:
          "Getting off the road quickly by driving faster is the reasoning that turns poor visibility into a collision.",
        excerptKey: "space-four-second-situations",
        sourceLabel: "Delaware Driver Manual - Section Five, Space Ahead",
        sourceUrl: p(128),
      },
      {
        id: "de_s6_19",
        topic: "licensing",
        question:
          "A Delaware GDL Level One Learner's Permit converts automatically to a Class D license after:",
        choices: [
          "Six months of valid driving authority",
          "A full twelve months of valid driving authority",
          "Eighteen months",
          "A second road test",
        ],
        correctIndex: 1,
        explanation:
          "Twelve full months of valid driving authority, provided the sponsor has not withdrawn their endorsement and the driving privilege is not suspended, revoked, canceled, denied or surrendered.",
        context:
          "Any period of suspension does not count toward the twelve months, and an equivalent period is added to the end - after which the permit holder must undergo complete testing again. A GDL applicant aged 18 or over may instead choose to take the eye, written and road exams at the DMV.",
        trap:
          "Six months is when unsupervised daytime driving starts, not when the license arrives.",
        excerptKey: "gdl-auto-convert",
        sourceLabel: "Delaware Driver Manual - Section Two, Eligibility for a Class D Operator's License",
        sourceUrl: p(30),
      },
      {
        id: "de_s6_20",
        topic: "sharing",
        question: "Motorists must give a bicyclist at least:",
        choices: [
          "Two feet of room when passing",
          "Four feet of room when passing",
          "Three feet of room when passing",
          "One full lane at all times",
        ],
        correctIndex: 2,
        explanation:
          "Three feet is Delaware's minimum, and it applies at all times. On multi-lane roads the law also expects you to move to the adjacent lane whenever possible.",
        context:
          "Where the lane is too narrow for a car and a bicycle side by side, the requirement hardens into a full lane change, and Delaware specifically permits crossing a double yellow line to make it. Honking at a cyclist is illegal except to warn of an imminent collision.",
        trap:
          "Three feet is the floor, not the target. It applies even when you are passing at 50 mph.",
        excerptKey: "overtake-cyclist-3ft",
        sourceLabel: "Delaware Driver Manual - Section Four, Overtaking (Passing) Other Vehicles",
        sourceUrl: p(81),
      },
      {
        id: "de_s6_21",
        topic: "rightOfWay",
        question: "You must yield the right of way to an emergency vehicle by:",
        choices: [
          "Speeding up to clear traffic",
          "Pulling off the road, or as near to the right as possible",
          "Moving into the right lane and driving slowly until it has passed",
          "Stopping wherever you are",
        ],
        correctIndex: 1,
        explanation:
          "Pull to the right-hand edge or curb, clear of intersections, and stay there until it has passed. The direction is right, whichever way the emergency vehicle approaches from.",
        context:
          "If you are in an intersection, drive through it before pulling over, so the crossing is not blocked. The same duty covers police vehicles, fire engines, ambulances and DelDOT vehicles supporting an incident.",
        trap:
          "Continuing slowly in the right lane leaves the emergency vehicle without the space it needs. The instruction is to pull over and stop.",
        excerptKey: "row-emergency-vehicle",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(89),
      },
      {
        id: "de_s6_22",
        topic: "impairment",
        question:
          "Delaware's zero tolerance law applies to drivers under 21 at a BAC of:",
        choices: [".08", ".05", ".02", ".00"],
        correctIndex: 2,
        explanation:
          "Point zero two. At that level an under-21 driver faces revocation, regardless of how they were driving.",
        context:
          "A first offense costs two months of license, and each later one costs between six and twelve. Underage possession or consumption of alcohol carries a $100 fine on a first offense and can itself cost a license, and is on Delaware's list of mandatory revocations.",
        trap:
          "Zero tolerance does not mean a reading of zero. Delaware's threshold is .02.",
        excerptKey: "bac-zero-tolerance-02",
        sourceLabel: "Delaware Driver Manual - Section Two, Blood Alcohol Concentration",
        sourceUrl: p(50),
      },
      {
        id: "de_s6_23",
        topic: "parking",
        question: "You may not park within 15 feet of:",
        choices: ["A crosswalk", "A fire hydrant", "A stop sign", "A railroad crossing"],
        correctIndex: 1,
        explanation:
          "Fifteen feet is the fire hydrant distance. The crosswalk figure is 20 feet, the stop sign 30, and the railroad crossing 50.",
        context:
          "The manual names this one as an example of what the Rules Of The Road Test asks. All of the distances come from the same bullet list, which opens with the reminder that the prohibitions apply even if someone is left in the car.",
        trap:
          "Four distances sit in one list and the exam picks one. Learn them as a ladder: 15, 20, 30, 50.",
        excerptKey: "park-hydrant-15",
        sourceLabel: "Delaware Driver Manual - Section Four, Stopping And Parking Violations",
        sourceUrl: p(92),
      },
      {
        id: "de_s6_24",
        topic: "rules",
        question: "Delaware's law on hand-held phones allows a driver to:",
        choices: [
          "Text at a red light",
          "Hold the phone while talking, if the call is brief",
          "Dial a number and then put the device down",
          "Use any device while stationary in traffic",
        ],
        correctIndex: 2,
        explanation:
          "Dialling a number or switching the equipment on and off is permitted, and then the device goes down. Conversation has to be through a hands-free device.",
        context:
          "The ban extends to pagers, PDAs, laptops, games, portable computers and two-way communication devices held in the hand. A driver in the GDL program may not use any device at all, hands-free included.",
        trap:
          "Being stopped in traffic does not put you outside the law. The rule reaches a driver operating a vehicle on the highway.",
        excerptKey: "cell-handheld-ban",
        sourceLabel: "Delaware Driver Manual - Section Four, Cell Phone Use While Driving",
        sourceUrl: p(81),
      },
      {
        id: "de_s6_25",
        topic: "safety",
        question: "The Delaware manual's rule for following distance in good conditions is:",
        choices: ["Three seconds", "One second", "Two seconds", "Four seconds"],
        correctIndex: 0,
        explanation:
          "Three seconds, measured by watching the vehicle ahead pass a fixed point and counting until you reach it. It works at any speed.",
        context:
          "Four seconds is the figure for slippery roads, following a motorcycle, following a driver who cannot see you, carrying a heavy load, poor visibility, being tailgated, following an emergency vehicle and approaching a railroad crossing.",
        trap:
          "Three and four seconds are both correct answers to different questions. Read which conditions the question is describing.",
        excerptKey: "space-three-second-rule",
        sourceLabel: "Delaware Driver Manual - Section Five, Space Ahead",
        sourceUrl: p(127),
      },
      {
        id: "de_s6_26",
        topic: "signals",
        question: "A flashing red light at an intersection means:",
        choices: [
          "Slow down and proceed with caution",
          "Stop and wait for green",
          "The signal is malfunctioning",
          "The same as a stop sign",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is a stop sign in signal form. Come to a complete stop, then proceed when it is safe.",
        context:
          "The flashing yellow on the crossing road means slow down, be more aware and proceed with caution. Neither signal changes, so waiting for a green on either is waiting for nothing.",
        trap:
          "Treating a flashing red as a yield leaves the wheels turning, which is the whole thing the signal forbids.",
        excerptKey: "flashing-red",
        sourceLabel: "Delaware Driver Manual - Section Four, Understanding Traffic Signals",
        sourceUrl: p(70),
      },
      {
        id: "de_s6_27",
        topic: "signs",
        question: "Delaware's work zone warning signs are:",
        choices: [
          "Orange, mostly diamond shaped",
          "Yellow diamonds",
          "Red octagons",
          "Green rectangles",
        ],
        correctIndex: 0,
        explanation:
          "Orange, and most of them are diamond shaped, though a few are rectangular. Orange is reserved for work zones in Delaware.",
        context:
          "The zone runs from the first traffic-control device warning of it to the last device saying restrictions are removed. Speeding fines inside it are doubled, and flaggers in yellow-green with stop and slow paddles may be directing traffic.",
        trap:
          "Yellow diamonds warn about the road itself. Orange means people are working on it.",
        excerptKey: "wz-warning-orange-diamond",
        sourceLabel: "Delaware Driver Manual - Section Four, Work Zones",
        sourceUrl: p(80),
      },
      {
        id: "de_s6_28",
        topic: "sharing",
        question: "When following a motorcycle at speeds above 40 mph, you should allow:",
        choices: [
          "A two second count",
          "A four second count",
          "A three second count",
          "The same gap as for a car",
        ],
        correctIndex: 1,
        explanation:
          "Four seconds above 40 mph, and two seconds below it. The gap is there so you can avoid a rider who goes down, not because a motorcycle stops slowly.",
        context:
          "Motorcycles can stop faster than cars, and the manual says so. The risk is a fall, which is likeliest on wet or icy roads, gravel, and metal surfaces such as bridges, gratings and tracks - so increase the gap further in those conditions.",
        trap:
          "The threshold is 40 mph, and both halves are asked. Below it the manual's figure is two seconds, not three.",
        excerptKey: "moto-following-2-4",
        sourceLabel: "Delaware Driver Manual - Section Four, Sharing The Road With Motorcycles",
        sourceUrl: p(100),
      },
      {
        id: "de_s6_29",
        topic: "speed",
        question:
          "Delaware's highest posted speed limit, on Route 1 and Interstate 495, is:",
        choices: ["65 mph", "55 mph", "60 mph", "70 mph"],
        correctIndex: 0,
        explanation:
          "Sixty-five, on exactly those two roads. Everything else in the manual's table tops out at 55.",
        context:
          "Controlled-access highways, divided roads and roads with four or more lanes are all 55. Two-lane roads are 50, business and residential districts 25, and posted school zones 20.",
        trap:
          "Assuming interstates carry 65 or 70 across the board. In Delaware, 65 is limited to two named roads.",
        excerptKey: "speed-table",
        sourceLabel: "Delaware Driver Manual - Section Four, Speed Limits",
        sourceUrl: p(93),
      },
      {
        id: "de_s6_30",
        topic: "licensing",
        question:
          "How many correct answers does Delaware's Class D knowledge test require?",
        choices: ["24 of 30", "26 of 32", "20 of 25", "16 of 20"],
        correctIndex: 1,
        explanation:
          "Twenty-six correct out of 32 questions, which is a little over 81 percent. That gives you six wrong answers before you fail.",
        context:
          "The Division says all of the answers are found in the Delaware Driver Manual, and its own Sample Written Test is only ten questions - a fraction of the real exam and not a substitute for the book. The manual describes the examination as four parts: vision, signs and signals, rules of the road and the road test.",
        trap:
          "The DMV's FAQ page still says 30 questions with 24 to pass. The Sample Written Test page it links to carries the current figure of 32 and 26.",
        excerptKey: "exam-32-questions",
        sourceLabel: "Delaware DMV - Sample Written Test",
        sourceUrl: WRITTEN,
      },
    ],
  },
];
