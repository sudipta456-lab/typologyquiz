import type { DrivingTestSet } from "../types";

// Sets 4 to 6 of the Arkansas bank. Same sources and same rules as sets 1 to 3;
// read the header of sets-1-3.ts for what the study guide does and does not
// supply, and docs/driving/research/arkansas.md for the forum research behind
// set 5.
const HB = "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf";
/** Printed page number to a PDF page anchor - the book's page 1 is PDF page 13. */
const hb = (page: number) => `${HB}#page=${page + 12}`;

export const arkansasSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions drawn from every chapter of the study guide, including the ones people skip: work zones, tractor-trailers, driving fitness, littering, and the vehicle inspection an examiner runs before you are allowed to drive.",
    questions: [
      {
        id: "ar_s4_01",
        topic: "speed",
        question:
          "You are entering an Arkansas work zone. When does the guide say you should start slowing down?",
        choices: [
          "When you see the work zone signs",
          "When you reach the first cone",
          "When you see a worker",
          "Only if a reduced limit is posted",
        ],
        correctIndex: 0,
        explanation:
          "As soon as the work zone signs appear. You then hold that reduced speed until a posted speed limit sign tells you what applies inside the zone.",
        context:
          "The guide's checklist for entering a work zone is short: reduce speed to the posted limit, merge early - ideally a mile or more before a closure - and be ready for sudden stops, because rear-end collisions are the common crash type in work zones.",
        trap: "Waiting until you can see a worker leaves no room. Mobile work zones move, and the crew may be around the next bend.",
        excerptKey: "work-zone-speed",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Work Zone Safety",
        sourceUrl: hb(17),
      },
      {
        id: "ar_s4_02",
        topic: "sharing",
        question:
          "Arkansas recently authorized a new light color on roadway construction and maintenance vehicles. Which?",
        choices: ["Purple", "Blue", "Flashing green", "Flashing white only"],
        correctIndex: 2,
        explanation:
          "Flashing green. They can be used alongside yellow or white lights, and they mean an active work zone - standard or mobile.",
        context:
          "The guide says the green lights improve visibility in poor weather and are there to protect workers. Seeing them is your cue to slow down and be careful, and mobile work vehicles also carry a Work Zone - Fines Double sign on the back.",
        trap: "Blue is reserved for law enforcement in Arkansas. Green on a work truck is the newer signal and is easy to misread as decorative.",
        excerptKey: "work-zone-green-lights",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Green Lights in Work Zones",
        sourceUrl: hb(18),
      },
      {
        id: "ar_s4_03",
        topic: "safety",
        question:
          "According to the Arkansas guide, how long does reading or sending a text take your eyes off the road?",
        choices: ["1 second", "3 seconds", "5 seconds", "10 seconds"],
        correctIndex: 2,
        explanation:
          "Five seconds. At 55 mph the guide compares that to driving the length of a football field with your eyes closed.",
        context:
          "It names the three kinds of distraction a hand-held phone creates at once: visual, taking your eyes off the road; manual, taking your hands off the wheel; and cognitive, taking your mind off driving. Texting is called the most alarming distraction for that reason.",
        trap: "A glance feels like a fraction of a second. The measured figure is five, and it is the distance covered that matters.",
        excerptKey: "texting-five-seconds",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 4, Distracted Driving",
        sourceUrl: hb(45),
      },
      {
        id: "ar_s4_04",
        topic: "licensing",
        question:
          "What happens to a first-offense littering conviction in Arkansas?",
        choices: [
          "A written warning",
          "A fixed $50 penalty",
          "A 30-day license suspension",
          "A fine of up to $1,000 and not more than eight hours of community service",
        ],
        correctIndex: 3,
        explanation:
          "Up to $1,000 and up to eight hours of community service. Subsequent convictions can reach $2,000 and twenty-four hours.",
        context:
          "Arkansas puts the litter statute on the inside cover of the study guide, before the introduction, which tells you how seriously the state takes it. The guide's framing is that as a driver you are accountable for what leaves your vehicle onto a city street or state highway.",
        trap: "Litter looks like a minor offense until you see the number. The maximum is four figures for a first conviction.",
        excerptKey: "litter-penalty",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 1, Arkansas Law on Littering",
        sourceUrl: hb(10),
      },
      {
        id: "ar_s4_05",
        topic: "emergencies",
        question:
          "Your accelerator sticks open while you are driving. What is the Arkansas guide's sequence?",
        choices: [
          "Keep your eyes on the road, shift to neutral, pull off the road, then switch off the engine",
          "Switch off the engine, then steer to the shoulder",
          "Stamp on the brake and hold it",
          "Pump the accelerator to free it",
        ],
        correctIndex: 0,
        explanation:
          "Eyes on the road, neutral, off the road, engine off - in that order. Neutral disconnects the engine from the wheels without taking away your steering.",
        context:
          "Turning the engine off first is the mistake the ordering guards against, because it can cost you power steering and power brakes while you are still moving. The same principle shapes the guide's advice on engine failure: keep a strong grip, expect heavy steering, and know the brakes still work but need a hard push.",
        trap: "Killing the engine feels decisive. Doing it before you are off the road takes away the controls you still need.",
        excerptKey: "faulty-accelerator",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Faulty Accelerator",
        sourceUrl: hb(77),
      },
      {
        id: "ar_s4_06",
        topic: "rules",
        question:
          "Where should you not attempt to pass, according to the Arkansas guide?",
        choices: [
          "At intersections, railroad crossings and shopping center entrances",
          "Anywhere at night",
          "On any road with more than two lanes",
          "Within a mile of a town",
        ],
        correctIndex: 0,
        explanation:
          "Anywhere a vehicle may enter or cross your road - intersections, railroad crossings, shopping center entrances. Passing there blocks your view of the very traffic that might pull out.",
        context:
          "The guide adds that a driver turning right into an approaching lane will not expect you in it, and may not look before turning. Its other passing restriction is distance-based: never pass within a third of a mile of a hill or a curve.",
        trap: "A clear road ahead is not the same as a safe place to pass. It is the traffic you cannot see yet that decides.",
        excerptKey: "pass-not-at-intersections",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Intersections",
        sourceUrl: hb(62),
      },
      {
        id: "ar_s4_07",
        topic: "signs",
        question:
          "What is the purpose of the ENS sign at a highway-rail grade crossing?",
        choices: [
          "It gives emergency contact information for the railroad responsible and identifies the crossing",
          "It marks a crossing that is exempt from stopping rules",
          "It shows how many tracks are at the crossing",
          "It gives the maximum speed for crossing the tracks",
        ],
        correctIndex: 0,
        explanation:
          "The Emergency Notification System sign carries the phone number for the railroad that owns the crossing, plus the crossing's own identifier, so a caller can say exactly where the problem is.",
        context:
          "It matters most in the situation nobody plans for - a stalled vehicle on the tracks. The guide's other crossing rules cover the crossbuck, the round advance warning sign, the gates and lights, the EXEMPT signs, and the number sign that tells you how many tracks are present.",
        trap: "The number-of-tracks sign is a different sign, mounted below the crossbuck.",
        excerptKey: "rr-ens",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Emergency Notification Systems",
        sourceUrl: hb(29),
      },
      {
        id: "ar_s4_08",
        topic: "impairment",
        question:
          "The Arkansas guide compares drugs to alcohol. What does it say?",
        choices: [
          "Only illegal drugs affect driving",
          "Prescription drugs are safe if taken as directed",
          "Drugs affect driving less than alcohol does",
          "The effects of drugs are worse than those caused by alcohol",
        ],
        correctIndex: 3,
        explanation:
          "Worse. The guide states it plainly, and it includes prescription and over-the-counter medicines in the warning, not just illegal drugs.",
        context:
          "Cold, allergy and headache remedies and nerve medicines can all make you drowsy. Pep pills and diet pills feel like alertness and then leave you nervous, dizzy and unable to focus. Never mix any of them with alcohol - the guide warns the effects can multiply.",
        trap: "\"It was only something from the pharmacy\" is exactly the case the guide is written against.",
        excerptKey: "drugs-worse",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Other Types of Drugs and Driving",
        sourceUrl: hb(75),
      },
      {
        id: "ar_s4_09",
        topic: "parking",
        question:
          "How close to a fire station driveway may you park on the same side of the street?",
        choices: [
          "No closer than 10 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 1,
        explanation:
          "Twenty feet, on the same side of the street, or on a street where signs are posted for it.",
        context:
          "That is the same figure Arkansas uses for a crosswalk at an intersection. The list also bans parking in an intersection, on a bridge, overpass, tunnel or underpass, along a lane of opposing traffic, and alongside another parked vehicle.",
        trap: "The fire hydrant figure is fifteen feet and the fire station figure is twenty. Two fire-related distances, two different numbers.",
        excerptKey: "no-parking-fire-station",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Do Not Park",
        sourceUrl: hb(42),
      },
      {
        id: "ar_s4_10",
        topic: "safety",
        question:
          "What does the Arkansas guide call the split difference rule?",
        choices: [
          "Splitting your following distance between two vehicles ahead",
          "Dividing a long trip into two equal halves",
          "Sharing a lane between a car and a bicycle",
          "Steering a middle course between two hazards, leaving more room to the more dangerous one",
        ],
        correctIndex: 3,
        explanation:
          "It is about space to your sides. Between oncoming traffic and parked cars, you steer the middle course - and where one hazard is worse than the other, you give that side more room.",
        context:
          "The guide's example is a tractor-trailer: leave more room on the side the truck will pass. It also asks you to take hazards one at a time where you can, slowing to let an oncoming vehicle clear before you pass a bicycle rather than dealing with both at once.",
        trap: "Exactly halfway is not always right. The rule builds in a bias toward whichever hazard would hurt more.",
        excerptKey: "split-difference",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Traffic to the Side",
        sourceUrl: hb(60),
      },
      {
        id: "ar_s4_11",
        topic: "rightOfWay",
        question:
          "You are stopped at a stop sign and a parked truck blocks your view of the cross street. What does the guide tell you to do?",
        choices: [
          "Edge out and rely on other drivers to slow",
          "Sound your horn, then proceed",
          "Reverse and take another route",
          "Make the complete stop, then pull forward until you can see, and proceed when safe",
        ],
        correctIndex: 3,
        explanation:
          "Two stages. The full stop happens first, at the sign or the stop line; then you creep forward until you have a view, and go when it is genuinely clear.",
        context:
          "The guide repeats this in the Stay Alert chapter with the same wording - if your view of a cross street is blocked, ease forward until you can see. Its blunter version is that you must be able to see crossing traffic clearly before you enter an intersection.",
        trap: "Skipping the first stop because you cannot see anything from there is the mistake. The stop is required whether or not it helps you see.",
        excerptKey: "stop-sign-blocked-view",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Stop Signs",
        sourceUrl: hb(25),
      },
      {
        id: "ar_s4_12",
        topic: "sharing",
        question:
          "When may a bicyclist in Arkansas take the full lane rather than riding to the right?",
        choices: [
          "Never - bicycles must always keep right",
          "Only in a designated bicycle lane",
          "Only between sunrise and sunset",
          "When passing, turning left, avoiding hazards, or where the lane is too narrow to share",
        ],
        correctIndex: 3,
        explanation:
          "The guide lists the situations: overtaking another vehicle, moving into position for a left turn, unsafe conditions in the roadway, and a lane too narrow for a car and a bicycle to share safely.",
        context:
          "Unsafe conditions is a wide phrase and the guide spells it out - parked cars, moving vehicles or machinery, fixed obstacles, pedestrians, animals, potholes, debris. Where a lane is marked and signed for bicycles only, drivers must never use it as a turning lane, a passing lane or a parking space.",
        trap: "A cyclist in the middle of a narrow lane is following the rule, not breaking it.",
        excerptKey: "bicycle-full-lane-narrow",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 7, Lane Positions for Bicycles",
        sourceUrl: hb(68),
      },
      {
        id: "ar_s4_13",
        topic: "licensing",
        question:
          "Can someone with epilepsy hold an Arkansas driver's license?",
        choices: [
          "Never",
          "Yes, with no conditions",
          "Only with a restricted daytime license",
          "Yes, if under a doctor's care and seizure free for one year",
        ],
        correctIndex: 3,
        explanation:
          "Yes, on two conditions the guide states together: you are under the care of a doctor, and you have been seizure free for one year.",
        context:
          "The driving fitness chapter treats several conditions the same way. Diabetics on insulin should not drive when there is a risk of going into shock. People being treated for a heart condition should ask their doctor before driving. Emotional state counts too - the guide says you may not be able to drive if you are overly worried, excited, afraid or angry.",
        trap: "A blanket ban is the assumption and it is wrong. The condition is medical supervision plus a clear year.",
        excerptKey: "fitness-epilepsy",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Health, Epilepsy",
        sourceUrl: hb(72),
      },
      {
        id: "ar_s4_14",
        topic: "signals",
        question:
          "What does a steady yellow arrow mean in an Arkansas turn lane?",
        choices: [
          "Turn now, before the signal changes",
          "Turn after yielding to oncoming traffic",
          "The signal is about to turn red, so stop if it is safe to do so",
          "The turn arrow is out of service",
        ],
        correctIndex: 2,
        explanation:
          "It is the warning that red is coming for your turn. Drivers turning left should stop if stopping is safe.",
        context:
          "It is the easiest of the four arrows to confuse with the flashing yellow, which means the opposite - permission to turn, with the duty to yield. Steady means the phase is ending; flashing means the phase is permissive.",
        trap: "Steady and flashing yellow arrows carry opposite instructions. Treating one as the other either strands you or sends you into oncoming traffic.",
        excerptKey: "arrow-yellow",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Lighted Arrows",
        sourceUrl: hb(24),
        commonlyMissed: true,
      },
      {
        id: "ar_s4_15",
        topic: "speed",
        question:
          "How fast do farm tractors and roadway maintenance vehicles usually travel, according to the guide?",
        choices: ["25 mph or less", "35 mph or less", "45 mph or less", "The posted limit"],
        correctIndex: 0,
        explanation:
          "Twenty-five miles an hour or less. That is why they display the slow-moving vehicle emblem on the back.",
        context:
          "The guide's wider point is about closing speed. Some vehicles simply are not built for highway pace, and others slow because of mechanical trouble or a steep grade. Give yourself room to change lanes or slow gradually, because a sudden slowdown is itself a crash risk.",
        trap: "On a rural highway the difference between your speed and theirs can be forty miles an hour. That closes faster than it looks.",
        excerptKey: "slow-moving-25-mph",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Slow-Moving Traffic",
        sourceUrl: hb(57),
      },
      {
        id: "ar_s4_16",
        topic: "emergencies",
        question:
          "Your vehicle has anti-lock brakes and you need to stop quickly. What should you do with the pedal?",
        choices: [
          "Press it as hard as you can and keep pressing",
          "Pump it rapidly",
          "Press it lightly and steer around the hazard",
          "Press, release and press again as the wheels lock",
        ],
        correctIndex: 0,
        explanation:
          "Press hard and hold. The pedal may push back as the system works, and the guide is clear that you do not let up - ABS only works while the pedal is down.",
        context:
          "Without ABS the technique is the opposite: brake as hard as you can without locking, and if the wheels do lock and the car starts to skid, release quickly and reapply. ABS also lets you steer while braking, which the older technique does not.",
        trap: "Pumping is the pre-ABS habit, and it defeats the system on a modern car.",
        excerptKey: "abs-braking",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Stopping",
        sourceUrl: hb(78),
        commonlyMissed: true,
      },
      {
        id: "ar_s4_17",
        topic: "rules",
        question:
          "You are being tailgated on a two-lane road with nowhere to move over. What does the guide advise?",
        choices: [
          "Brake sharply to make the point",
          "Speed up to open a gap",
          "Turn on your hazard lights",
          "Wait until the road ahead is clear, then reduce speed so the tailgater can pass",
        ],
        correctIndex: 3,
        explanation:
          "Let them past. Wait for a clear stretch, ease off, and give them the chance to go around you.",
        context:
          "On a multi-lane road the first answer is simply to move into the right lane. The guide adds a warning that people ignore: never slow down quickly to discourage a tailgater, because it raises the chance of being hit from behind.",
        trap: "Brake-checking is the instinct and the guide rules it out by name.",
        excerptKey: "tailgated-response",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Traffic to the Rear",
        sourceUrl: hb(60),
      },
      {
        id: "ar_s4_18",
        topic: "safety",
        question:
          "When should you use your horn, according to the Arkansas guide?",
        choices: [
          "To let a driver know they made a mistake",
          "To encourage slow traffic to move",
          "To greet someone you recognize",
          "To alert another road user to a dangerous situation",
        ],
        correctIndex: 3,
        explanation:
          "Danger, and nothing else. The guide lists a person or cyclist moving into your lane, a driver drifting into you while you pass, and an inattentive driver who has not seen you.",
        context:
          "It also lists what the horn is not for: speeding other vehicles up, pointing out a mistake, greeting a friend, or warning a blind pedestrian. And it asks for a sharp blast where there is real danger - a child about to step out, or a car in danger of hitting you.",
        trap: "The horn as commentary is the common misuse. In Arkansas, using it at a blind pedestrian is specifically listed under do not.",
        excerptKey: "horn-purpose",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Warning Horn",
        sourceUrl: hb(52),
      },
      {
        id: "ar_s4_19",
        topic: "impairment",
        question:
          "What proportion of fatal traffic crashes involve alcohol, according to the Arkansas guide?",
        choices: [
          "About 10 percent",
          "About 25 percent",
          "About 38 percent",
          "About 60 percent",
        ],
        correctIndex: 2,
        explanation:
          "Approximately thirty-eight percent of crashes in which someone is killed.",
        context:
          "The guide pairs the statistic with a claim about experience: experienced drivers are affected by alcohol even after many years behind the wheel, and new drivers are affected more because they are still learning. Its conclusion is that every driver is affected, so nobody should drink and drive.",
        trap: "Being a good driver is not protection. The guide goes out of its way to say experience does not offset alcohol.",
        excerptKey: "alcohol-38-percent",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Drinking and Driving",
        sourceUrl: hb(73),
      },
      {
        id: "ar_s4_20",
        topic: "signs",
        question:
          "What is the correct response to a flashing yellow light at an intersection?",
        choices: [
          "Slow down and proceed with caution",
          "Stop, then proceed when safe",
          "Stop and wait for a green",
          "Proceed without changing speed",
        ],
        correctIndex: 0,
        explanation:
          "Slow down and go through carefully. Unlike a flashing red, it does not require you to stop.",
        context:
          "The two flashing signals are taught as a pair in Arkansas because that is how they are confused. Flashing red is a stop sign; flashing yellow is a caution. Both are permanent states rather than a phase in a cycle.",
        trap: "Treating a flashing yellow like a flashing red means stopping in a lane where nobody behind you expects it.",
        excerptKey: "flashing-yellow",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Flashing Lights",
        sourceUrl: hb(24),
      },
      {
        id: "ar_s4_21",
        topic: "parking",
        question:
          "Arkansas bans parking alongside another parked vehicle. What is that called?",
        choices: [
          "Stacked parking",
          "Blocked parking",
          "Shoulder parking",
          "Double parking",
        ],
        correctIndex: 3,
        explanation:
          "Double parking. Along the street or highway next to another parked vehicle is on the Do Not Park list.",
        context:
          "The list runs through the obvious - intersections, crosswalks, sidewalks in construction areas where you block traffic - and the less obvious: blocking a driveway, alley or private road, and blocking a section of curb that has been lowered for sidewalk access.",
        trap: "Hazard lights do not make double parking lawful. It is on the prohibition list without qualification.",
        excerptKey: "no-double-parking",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Do Not Park",
        sourceUrl: hb(42),
      },
      {
        id: "ar_s4_22",
        topic: "rightOfWay",
        question:
          "Where do most car-truck collisions happen, according to the Arkansas guide?",
        choices: [
          "On interstate on-ramps",
          "In work zones",
          "On rural two-lane roads",
          "At intersections",
        ],
        correctIndex: 3,
        explanation:
          "At intersections, and the guide gives the reason: the driver of the car does not realize how close the truck is or how quickly it is approaching.",
        context:
          "Size distorts judgment. A large vehicle appears to be moving more slowly than it really is, which is why the guide tells you never to underestimate the size and speed of an approaching tractor-trailer.",
        trap: "The truck looks far away and slow. Both impressions come from the same visual error.",
        excerptKey: "truck-crash-cause",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 6, Maneuverability",
        sourceUrl: hb(66),
      },
      {
        id: "ar_s4_23",
        topic: "rules",
        question:
          "The Arkansas guide gives one rule for how many vehicles to pass at a time. What is it?",
        choices: [
          "Pass as many as the gap allows",
          "Pass no more than three",
          "Pass only single vehicles on undivided roads",
          "Pass one vehicle at a time",
        ],
        correctIndex: 3,
        explanation:
          "One at a time, as a rule. The guide tells you not to count on having enough time to pass several cars at once.",
        context:
          "It also lists what can take away the space you were relying on partway through a pass: people or cyclists near the road, a narrow bridge, a patch of ice, a pothole, or an object in the lane. Never start a pass unless you have room to get back in.",
        trap: "A long clear stretch tempts a two-car pass. The guide's answer is that you cannot judge it reliably.",
        excerptKey: "pass-one-at-a-time",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Passing Distance",
        sourceUrl: hb(61),
      },
      {
        id: "ar_s4_24",
        topic: "safety",
        question:
          "The Arkansas guide names the leading cause of car crashes. What is it?",
        choices: [
          "Speeding",
          "Alcohol",
          "Mechanical failure",
          "Inattention",
        ],
        correctIndex: 3,
        explanation:
          "Inattention. It appears in the Stay Alert chapter as a single flat statement, and the whole chapter is built around it.",
        context:
          "The remedies the guide offers are all about where you look: fifteen seconds down the road, a second look toward oncoming traffic before you cross an intersection, mirrors checked regularly in heavy traffic, and a shoulder check before every lane change.",
        trap: "Speeding and alcohol are the headline dangers. The guide's own answer for the most common cause is duller and more ordinary.",
        excerptKey: "inattention-leading-cause",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 4, Stay Alert",
        sourceUrl: hb(48),
      },
      {
        id: "ar_s4_25",
        topic: "emergencies",
        question:
          "You are the first to reach a crash and someone is bleeding heavily. What does the guide tell you to do?",
        choices: [
          "Move them to a safer place first",
          "Apply a tourniquet above the wound",
          "Wait for paramedics before touching them",
          "Apply direct pressure to the wound",
        ],
        correctIndex: 3,
        explanation:
          "Direct pressure. The guide says even severe bleeding can almost always be stopped or slowed that way.",
        context:
          "The sequence it gives is check breathing, then check bleeding, then call for help with a precise location and any warnings - gas spills, fire, downed electric lines. Cover the person to prevent shock, and leave them where they are unless the vehicle is burning or there is another immediate danger.",
        trap: "Moving an injured person is the instinct that does the most harm. The guide allows it only for immediate danger.",
        excerptKey: "crash-direct-pressure",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Assisting the Injured",
        sourceUrl: hb(81),
      },
      {
        id: "ar_s4_26",
        topic: "licensing",
        question:
          "Which document must a minor who is a U.S. citizen present when testing in Arkansas?",
        choices: [
          "A U.S. passport",
          "An original or certified copy of a U.S. birth certificate",
          "A school identification card",
          "A hospital birth certificate",
        ],
        correctIndex: 1,
        explanation:
          "The original or a certified copy of the U.S. birth certificate. The guide specifically rules out hospital certificates and birth registration cards, and says minors who are citizens cannot use a passport as their primary document.",
        context:
          "There are three items on the under-18 checklist: the birth certificate, a parent or legal guardian's signature under 27-16-702, and accepted secondary identification. A parent who cannot attend can complete the ASP-33 Financial Responsibility Acceptance Form with a notary and submit it within 30 days.",
        trap: "The rule about passports is backwards from what people expect. For minors who are citizens, the passport does not count as primary.",
        excerptKey: "id-under-18-birth-certificate",
        sourceLabel: "Arkansas Driver License Study Guide - Accepted Identification List",
        sourceUrl: hb(7),
      },
      {
        id: "ar_s4_27",
        topic: "sharing",
        question:
          "What is the safest way to pass a tractor-trailer?",
        choices: [
          "On the right, where the driver has a better view",
          "Slowly, staying beside the cab so the driver sees you",
          "Only on a downhill grade",
          "Completely, and on the left side",
        ],
        correctIndex: 3,
        explanation:
          "Pass all the way through, and pass on the left. Lingering beside a truck sits you in a blind spot and takes away the driver's room to react.",
        context:
          "The other common mistake the guide names is cutting into the space in front of a truck - taking away the driver's cushion of safety just as the truck needs 335 feet at 55 mph to stop. Trying to beat a truck to a single-lane construction zone is singled out as particularly dangerous.",
        trap: "Passing on the right feels safer because the truck's mirror is there. It is the side with the larger blind spot, alongside the cab.",
        excerptKey: "truck-pass-on-left",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 6, Maneuverability",
        sourceUrl: hb(66),
      },
      {
        id: "ar_s4_28",
        topic: "signals",
        question:
          "Who else, besides signals, signs and pavement markings, counts as a traffic control you must obey in Arkansas?",
        choices: [
          "Law enforcement, highway personnel and school crossing guards",
          "Any driver already in the intersection",
          "Tow truck operators",
          "Private security at a shopping center",
        ],
        correctIndex: 0,
        explanation:
          "The guide names law enforcement, highway personnel and school crossing guards, and says any traffic control must be obeyed when driving.",
        context:
          "This is why a flagger's stop paddle beats a green light. Traffic control in Arkansas is a category of authority, not a category of hardware, and a person directing traffic sits inside it.",
        trap: "The signal on the pole feels more official than the person in the vest. In law they are the same thing, and the person is closer to the hazard.",
        excerptKey: "traffic-controls",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Traffic Control Signals and Signs",
        sourceUrl: hb(23),
      },
      {
        id: "ar_s4_29",
        topic: "speed",
        question:
          "The Arkansas guide says the safest speed in traffic is what?",
        choices: [
          "Five miles an hour under the limit",
          "The same speed as the other vehicles",
          "The posted limit exactly",
          "Whatever leaves the largest gap ahead",
        ],
        correctIndex: 1,
        explanation:
          "Matching the traffic around you. Crashes involving two or more vehicles often happen when someone is going faster or slower than everyone else.",
        context:
          "Going much slower is treated as being as bad as speeding, because traffic backs up behind you. If vehicles are accumulating, the guide tells you to pull over and let them pass, using a turnout where one exists.",
        trap: "Driving well under the limit feels cautious and creates the overtaking that causes the collisions.",
        excerptKey: "safest-speed-is-traffic",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Adjusting to the Flow of Traffic",
        sourceUrl: hb(56),
      },
      {
        id: "ar_s4_30",
        topic: "safety",
        question:
          "How does the Arkansas guide tell you to back out of a parking space?",
        choices: [
          "Use the rearview and side mirrors and back slowly",
          "Use the reversing camera and back at walking pace",
          "Turn your body and look directly through the rear and side windows",
          "Ask a passenger to watch the mirrors for you",
        ],
        correctIndex: 2,
        explanation:
          "Turn and look. The guide puts your right arm over the back of the seat and your body round, and tells you not to depend on the mirrors, because they do not show what is directly behind you.",
        context:
          "It also asks you to check behind the vehicle before you even get in, since children and small objects are invisible from the driver's seat. Back slowly, because the car is much harder to steer in reverse, and use someone outside the vehicle to help whenever you can.",
        trap: "Mirrors are exactly what this rule tells you not to rely on.",
        excerptKey: "backing-look-behind",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 4, Backing",
        sourceUrl: hb(50),
      },
      {
        id: "ar_s4_31",
        topic: "rightOfWay",
        question:
          "A pedestrian is about to step into an unmarked crosswalk at an intersection. What must you do?",
        choices: [
          "Continue, because only marked crosswalks give a right of way",
          "Yield, because not all crosswalks are marked",
          "Sound the horn to warn them",
          "Yield only if they have already stepped off the curb",
        ],
        correctIndex: 1,
        explanation:
          "Yield. Arkansas requires drivers to yield to pedestrians in or about to enter a crosswalk, and reminds you that not every crosswalk is painted.",
        context:
          "The guide's blanket instruction sits behind it: drivers must yield where necessary to avoid striking pedestrians who are legally crossing the road. Since no vehicle has an absolute right of way, being in the right is not a defense against hitting someone.",
        trap: "\"There were no lines\" is not a reason. The unmarked crossing at an intersection is still a crossing.",
        excerptKey: "crosswalk-yield",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Crosswalks and Stop Lines",
        sourceUrl: hb(34),
      },
      {
        id: "ar_s4_32",
        topic: "rules",
        question:
          "How does the guide say you should leave a high-speed roadway by an exit ramp?",
        choices: [
          "Slow to the ramp speed before you reach the exit",
          "Signal and brake firmly in the travel lane",
          "Stay at the speed of traffic until you have moved onto the ramp",
          "Move to the right lane a mile in advance and coast",
        ],
        correctIndex: 2,
        explanation:
          "Hold your speed until you are on the ramp, then slow. Braking in the travel lane puts you in the way of everyone still traveling at speed.",
        context:
          "The entry side works the same way in reverse. Use the ramp to build up to the speed of the traffic before you join, and do not drive to the end of an on-ramp and stop, because drivers watching the main road may not have time to avoid you.",
        trap: "Slowing early feels careful and turns you into a moving obstacle in a fast lane.",
        excerptKey: "merging-ramp-speed",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Merging With Traffic",
        sourceUrl: hb(56),
      },
      {
        id: "ar_s4_33",
        topic: "impairment",
        question:
          "How does the Arkansas guide define one alcoholic drink?",
        choices: [
          "1.5 ounces of 80-proof liquor, a 6-ounce glass of wine, or a 12-ounce beer",
          "1 ounce of liquor, a 4-ounce glass of wine, or an 8-ounce beer",
          "2 ounces of liquor, a 10-ounce glass of wine, or a 16-ounce beer",
          "Any drink containing alcohol, regardless of size",
        ],
        correctIndex: 0,
        explanation:
          "A shot glass of 80-proof liquor at 1.5 ounces, a 6-ounce glass of table wine, or a 12-ounce beer - the guide treats those three as equivalent.",
        context:
          "It adds the warning that makes the definition useful: specialty drinks can contain far more, so one glass may equal several normal drinks. Combine that with the one-drink-per-hour elimination rate and a single cocktail can outlast an evening.",
        trap: "Counting glasses is not counting drinks. The measure is the alcohol, not the container.",
        excerptKey: "alcohol-single-drink",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Body Metabolism",
        sourceUrl: hb(74),
      },
      {
        id: "ar_s4_34",
        topic: "signs",
        question:
          "What does a speed limit sign show, according to the Arkansas guide?",
        choices: [
          "The safe speed in all conditions",
          "The minimum and maximum speed allowed on that stretch of road",
          "An advisory speed you may exceed with care",
          "The average speed of traffic",
        ],
        correctIndex: 1,
        explanation:
          "Both the minimum and the maximum for that section of highway or street. The guide adds that the maximum is for ideal conditions and must be reduced when conditions are not.",
        context:
          "Speed limits are set from the design of the road, the vehicles that use it, and where it runs. None of that accounts for ice, rain or heavy traffic on the day, which is why you can be ticketed for driving too fast for the conditions while sitting on the posted number.",
        trap: "The posted figure is a ceiling in perfect weather, not an entitlement in any weather.",
        excerptKey: "speed-limit-sign",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Speed Limit Sign",
        sourceUrl: hb(25),
      },
      {
        id: "ar_s4_35",
        topic: "parking",
        question:
          "What should you do before opening your door after parking on the street?",
        choices: [
          "Check traffic, and get out on the curb side if you can",
          "Signal with your hazard lights",
          "Open the door slowly a few inches first",
          "Wait for a gap of at least ten seconds",
        ],
        correctIndex: 0,
        explanation:
          "Check the traffic, then use the curb side wherever possible. If the street side is your only option, check before you get out.",
        context:
          "It is the same hazard the bicycle chapter describes from the other direction, where riders move toward the middle of the lane to stay clear of doors. The guide also asks you to look through the mirrors and turn to look when backing out of a space.",
        trap: "Getting out on the traffic side out of habit is what puts a door in a cyclist's path.",
        excerptKey: "parking-exit-curbside",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Parking Tips",
        sourceUrl: hb(41),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Built from what Arkansas learners say goes wrong: the vehicle inspection that ends a test before it starts, the numbers buried in the middle of the guide, the two agencies people confuse, and the rules that read one way and work another.",
    questions: [
      {
        id: "ar_s5_01",
        topic: "licensing",
        question:
          "At an Arkansas skills test, the examiner asks you to locate vehicle controls. How many can you miss before you fail?",
        choices: ["None", "One", "Two", "Three missed controls fails the test"],
        correctIndex: 3,
        explanation:
          "You are allowed three missed controls; the fourth fails you. The examiner marks each one you cannot find as an infraction.",
        context:
          "The list is published in the guide: rear turn signals, brake lights, horn, side and rearview mirror adjustment, emergency flashers, headlights on and off, front turn signals, and windshield wipers. Examiners also check the tire tread and will not test a car with bald tires or exposed wires.",
        trap: "This catches people who can drive perfectly well. Not knowing where the hazard light button is in the car you borrowed ends the test in the parking space.",
        excerptKey: "skills-three-controls",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 10, Performance Guidelines",
        sourceUrl: hb(85),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_02",
        topic: "licensing",
        question:
          "Which of these will stop an Arkansas skills test from being given at all?",
        choices: [
          "A windshield crack that obstructs the view",
          "A dent in the rear bumper",
          "A vehicle registered in another person's name",
          "An automatic transmission",
        ],
        correctIndex: 0,
        explanation:
          "The guide lists the conditions that mean no test, and a windshield that is not clean and free of a view-obstructing crack is one of them.",
        context:
          "The rest of the list is long: excessively dirty interior, any light not working, a faulty muffler or exhaust, a horn that does not work, a broken speedometer, unsafe tires, excessively tinted windows, serious mechanical defects such as defective brakes, a vehicle not properly licensed with the plate displayed, and an applicant who is unfamiliar with the controls.",
        trap: "The car is being examined as carefully as the driver, and the inspection happens before you turn a wheel.",
        excerptKey: "skills-no-test-if",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 10, Vehicle Inspection",
        sourceUrl: hb(85),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_03",
        topic: "licensing",
        question:
          "You make a rolling stop on the Arkansas skills test and the examiner warns you. What happens if you do it again?",
        choices: [
          "A warning, and the test continues",
          "The test ends and you wait two weeks",
          "You lose points but can still pass",
          "The test ends and you wait 30 days",
        ],
        correctIndex: 1,
        explanation:
          "Two missed attempts in the same category fail the exam, and the guide uses the rolling stop as its worked example: a warning first, then a two-week penalty on the second.",
        context:
          "That is different from an automatic failure, which carries a thirty-day penalty. So the same test can end in two different waiting periods depending on what went wrong.",
        trap: "The warning feels like a free pass. It is the first half of a two-strike count in that category.",
        excerptKey: "skills-two-in-category",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 10, Road Test",
        sourceUrl: hb(85),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_04",
        topic: "rules",
        question:
          "You are turning left out of a driveway onto a busy Arkansas road with a center turn lane. What may you do?",
        choices: [
          "Sit in the center lane and build speed before merging",
          "Use the center lane only if you signal for 100 feet first",
          "Stay out of the center lane entirely until you are past the next intersection",
          "Use the center lane as part of the turn, then merge - but never as an acceleration lane",
        ],
        correctIndex: 3,
        explanation:
          "Arkansas permits the center turn lane as part of the maneuver to gain access to the traffic lanes, and forbids using it to accelerate.",
        context:
          "The reason is that both directions use that lane. Someone turning left toward you can be in it at the same time, so a driver running along it is closing on another car head-on in a lane neither of them can leave quickly.",
        trap: "The lane is empty and inviting, and using it as a run-up is the specific thing the sentence rules out. It is also a recurring source of near-misses that Arkansas drivers describe.",
        excerptKey: "shared-center-lane",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Shared Center Lane",
        sourceUrl: hb(32),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_05",
        topic: "impairment",
        question:
          "How does the Arkansas guide describe the effect of food on alcohol?",
        choices: [
          "Food prevents intoxication if eaten before drinking",
          "Food slows how fast alcohol enters the blood but will not prevent intoxication",
          "Food has no effect at all",
          "Food speeds up the body's elimination of alcohol",
        ],
        correctIndex: 1,
        explanation:
          "It slows absorption and nothing more. You still get drunk; you just get there more slowly.",
        context:
          "Nothing on the list of folk remedies works. Coffee, fresh air, exercise and a cold shower are all named and all ruled out. The body clears about one drink an hour and the only thing that sobers you up is time.",
        trap: "Eating before drinking is treated as a safety measure by nearly everyone. The guide says it changes the timing, not the outcome.",
        excerptKey: "alcohol-food",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Body Metabolism",
        sourceUrl: hb(74),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_06",
        topic: "speed",
        question:
          "You are speeding on an Arkansas county road, 18 mph over the limit set by the county judge. What does the statute in the guide make that?",
        choices: [
          "An ordinary fine",
          "A doubled fine",
          "A Class C misdemeanor",
          "A mandatory license suspension",
        ],
        correctIndex: 2,
        explanation:
          "Exceeding a county road speed limit by more than 15 mph is a Class C misdemeanor under 27-51-216, which the guide reprints.",
        context:
          "The same section sets the default 40 mph limit where a county judge has not established one, and defines a county road as a public road that is not a state highway, an interstate or a city street. Traffic control devices on county roads have to conform to the state manual.",
        trap: "It stops being a ticket and becomes a criminal charge at 15 over. The threshold is easy to cross on a rural road that feels empty.",
        excerptKey: "county-road-15-over",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, 27-51-216 County Roads",
        sourceUrl: hb(26),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_07",
        topic: "sharing",
        question:
          "A school bus with red lights flashing is stopped on the far side of a road divided by a median 15 feet wide. What must you do?",
        choices: [
          "Continue at reduced speed",
          "Stop only if children are visible",
          "Continue, because the road is divided",
          "Stop, because the median is under 20 feet",
        ],
        correctIndex: 3,
        explanation:
          "Twenty feet is the threshold. Below it, all lanes of traffic must stop, and a 15-foot median does not release you.",
        context:
          "The guide illustrates it with a diagram captioned twice - the median must be 20 feet or more, and if it is less than 20 feet all lanes of traffic must stop. Above the threshold, only traffic approaching along the opposite lane is excused.",
        trap: "\"Divided highway\" is not the test in Arkansas. The width of the median is, and most urban medians are nowhere near twenty feet.",
        excerptKey: "bus-median-narrow",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 1, School Bus Law and Rules",
        sourceUrl: hb(13),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_08",
        topic: "safety",
        question:
          "How far ahead should you look on an Arkansas interstate, in distance rather than seconds?",
        choices: [
          "About one city block",
          "About 400 feet",
          "About a quarter of a mile",
          "About a mile",
        ],
        correctIndex: 2,
        explanation:
          "A quarter of a mile on highways and interstates. The city figure is about one block, and both work out at roughly the fifteen seconds the guide asks for.",
        context:
          "The fifteen-second rule is the one to carry, because it scales with speed automatically. The distances are just what it looks like at typical town and highway speeds.",
        trap: "One block is the town figure. On an interstate it is a few seconds of road.",
        excerptKey: "look-ahead-15-seconds",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 4, Looking ahead",
        sourceUrl: hb(48),
      },
      {
        id: "ar_s5_09",
        topic: "rightOfWay",
        question:
          "Does Arkansas give any vehicle an absolute right of way?",
        choices: [
          "No - the rules only decide who must yield",
          "Yes, to the vehicle on a through road",
          "Yes, to any vehicle already in an intersection",
          "Yes, to emergency vehicles only",
        ],
        correctIndex: 0,
        explanation:
          "No. The guide says traffic laws determine which vehicle must yield and do not give any vehicle an absolute right of way, and that you must do everything possible to avoid a collision regardless.",
        context:
          "The one exception it does grant is not for a vehicle at all. Pedestrians using a guide dog or carrying a white cane are given absolute right of way, in those exact words.",
        trap: "\"I had right of way\" is not a defense in Arkansas, and the guide is unusually explicit about it.",
        excerptKey: "no-absolute-row",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Right of Way",
        sourceUrl: hb(35),
      },
      {
        id: "ar_s5_10",
        topic: "parking",
        question:
          "You hold a Special Certificate for accessible parking and stay in the car while a friend runs an errand. Is that allowed?",
        choices: [
          "Yes, as long as the certificate is displayed",
          "Yes, for up to fifteen minutes",
          "Only in a private car park",
          "No - the certificate holder must exit the vehicle when using a designated space",
        ],
        correctIndex: 3,
        explanation:
          "The guide requires the holder of the certificate or the plate to get out of the vehicle when using a designated space, as well as being present in it.",
        context:
          "The certificate is registered to the person, not the car, so it moves between vehicles as long as its owner is in them. It hangs from the rearview mirror or sits on the dashboard, and the endorsed photo identification card has to be on the person at all times when the space is in use.",
        trap: "Displaying the tag is not enough on its own. Two separate conditions apply - presence, and actually using the space.",
        excerptKey: "accessible-parking-present",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 1, Accessible Parking",
        sourceUrl: hb(14),
      },
      {
        id: "ar_s5_11",
        topic: "signals",
        question:
          "You are already stopped at a stop line when the light turns yellow. May you go?",
        choices: [
          "Yes, a yellow permits you to clear the intersection",
          "Yes, if no cross traffic is coming",
          "No - if you are already stopped at the intersection or stop line, you may not proceed",
          "Yes, but only to complete a right turn",
        ],
        correctIndex: 2,
        explanation:
          "No. The guide adds this line to its definition of a yellow light precisely because drivers treat a yellow as a last chance.",
        context:
          "A steady yellow is the signal changing from green to red. If you are moving, you stop when stopping is safe. If you are already stopped, the phase has passed you by and you wait for the next green.",
        trap: "The yellow looks like an opportunity from a standing start. It is the tail of a phase you already missed.",
        excerptKey: "signal-yellow",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Lighted Traffic Signals",
        sourceUrl: hb(23),
      },
      {
        id: "ar_s5_12",
        topic: "emergencies",
        question:
          "A collision looks unavoidable and you must choose between leaving the road and a head-on impact. What does the Arkansas guide say?",
        choices: [
          "It is generally better to run off the road",
          "A head-on impact is safer because of the airbags",
          "Brake and take the impact squarely",
          "Steer for the ditch only if it is shallow",
        ],
        correctIndex: 0,
        explanation:
          "The guide states it directly: generally it is better to run off the road than to crash head-on into another vehicle.",
        context:
          "It sits inside the wider advice on turning to avoid a crash. Without ABS you brake, release, then steer, because braking loads the front tires for a quicker turn; with ABS you can brake and steer together. Either way, be ready to keep control afterwards.",
        trap: "Staying on the road feels like keeping control. A head-on collision combines both vehicles' speeds.",
        excerptKey: "run-off-road",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Turning",
        sourceUrl: hb(78),
      },
      {
        id: "ar_s5_13",
        topic: "licensing",
        question:
          "Which Arkansas agency administers the driver knowledge exam, and which issues the license?",
        choices: [
          "The Arkansas State Police administer the exam; DFA revenue offices issue the license",
          "Both are handled by the Department of Finance and Administration",
          "Both are handled by the Arkansas State Police",
          "County clerks administer the exam; the State Police issue the license",
        ],
        correctIndex: 0,
        explanation:
          "The Arkansas State Police write and administer the exams. Once you pass, you return to an Arkansas Revenue Office - part of the Department of Finance and Administration - to receive the license itself.",
        context:
          "The study guide says so for every class of license: after the knowledge, vision and skills tests, the applicant returns to any Arkansas Revenue Office for the Learner's, Intermediate, Class D, Class M or Class MD license. The $5 examination fee is likewise added to the cost of your license and collected by DFA.",
        trap: "Two agencies means two buildings, and people routinely turn up at the wrong one. The State Police test you; DFA licenses you.",
        excerptKey: "learner-ages",
        sourceLabel: "Arkansas Driver License Study Guide - Types of Graduated Driver's Licenses",
        sourceUrl: hb(3),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_14",
        topic: "rules",
        question:
          "Under the Arkansas left-lane law, may you sit in the left lane of a four-lane highway because you plan to turn left in two miles?",
        choices: [
          "Yes, preparing for a turn is one of the exceptions",
          "Yes, if you signal continuously",
          "No - the exception is for preparing to exit the multilane highway on the left",
          "Yes, if you are traveling at the speed limit",
        ],
        correctIndex: 2,
        explanation:
          "The statute's fourth exception is preparing to exit the highway on the left, not any left turn at any distance. Sitting there for two miles is not preparing to exit.",
        context:
          "The full list under 27-51-301 is overtaking and passing, all other same-direction lanes closed for construction or repair, all other lanes in disrepair or otherwise unsafe, and preparing to exit on the left. Nothing else.",
        trap: "The exception is real but narrow, and \"I'm turning left eventually\" stretches it past what the words say.",
        excerptKey: "left-lane-exceptions",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Left Lane for Passing Only",
        sourceUrl: hb(63),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_15",
        topic: "signs",
        question:
          "What do pavement markings showing an X and the letters RR mean on a two-lane Arkansas road?",
        choices: [
          "The same as the round advance warning sign, with a no-passing marking",
          "A railroad crossing that has been closed",
          "A place where trains may cross at low speed only",
          "A marked stopping point for school buses",
        ],
        correctIndex: 0,
        explanation:
          "They carry the same message as the advance warning sign - slow, look and listen, be ready to stop - and on a two-lane road they come with a no-passing marking.",
        context:
          "There may also be a NO PASSING ZONE sign, and a white stop line painted before the tracks. The guide's standing instruction is never to try to beat a train, and never to cross without enough room on the far side.",
        trap: "Markings on the road are easy to dismiss as decoration. These carry the same weight as the sign on the post.",
        excerptKey: "rr-pavement-markings",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Pavement Markings",
        sourceUrl: hb(28),
      },
      {
        id: "ar_s5_16",
        topic: "impairment",
        question:
          "An Arkansas officer asks a driver for a saliva sample. May the driver insist on a breath test instead?",
        choices: [
          "Yes, the driver chooses the test",
          "Yes, if a breath device is available",
          "Only if the driver is under 21",
          "No - the law enforcement officer chooses which test to request",
        ],
        correctIndex: 3,
        explanation:
          "The officer chooses. The guide names breath, urine and saliva as the options and puts the choice with law enforcement.",
        context:
          "Refusing whichever test is asked for is the risk. You are compelled by law to take it, and refusal can cost you your license under the implied consent rule.",
        trap: "The idea that you get to pick the test comes from television. Arkansas puts the choice on the other side.",
        excerptKey: "officer-chooses-test",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Alcohol and the Law",
        sourceUrl: hb(74),
      },
      {
        id: "ar_s5_17",
        topic: "safety",
        question:
          "You are following a vehicle at night, 150 feet behind. Which headlights should you be using?",
        choices: [
          "High beams, so the driver can see you",
          "Parking lights",
          "High beams, dipping only when the driver signals",
          "Low beams, because you are closer than 200 feet",
        ],
        correctIndex: 3,
        explanation:
          "Low beams. Arkansas puts the following threshold at 200 feet, so at 150 you are inside it.",
        context:
          "Two distances, two situations. Dim within 500 feet of a vehicle coming toward you; drop to low beams when you are following one closer than 200 feet. High beams belong to an empty road, where they show about twice as far.",
        trap: "Most drivers know the oncoming rule and forget the following one. The mirror glare you create is just as blinding.",
        excerptKey: "low-beam-following-200",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, High and Low Beam Headlights",
        sourceUrl: hb(51),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_18",
        topic: "sharing",
        question:
          "You are overtaking a bicycle and an oncoming car appears. What does the Arkansas guide tell you to do?",
        choices: [
          "Squeeze between the two carefully",
          "Sound your horn and complete the pass",
          "Move onto the shoulder to widen the gap",
          "Slow down and let the car pass before you pass the bicycle",
        ],
        correctIndex: 3,
        explanation:
          "Take the hazards one at a time. Let the oncoming car go, then pass the cyclist with room.",
        context:
          "The guide says a driver should never attempt to pass between a bicyclist and oncoming vehicles on a two-lane road, and never pass where the street is too narrow or where it would force the rider close to parked cars. Wait until there is enough room.",
        trap: "It usually fits, and that is the problem. The rider has nowhere to go if it does not.",
        excerptKey: "bicycle-never-pass-between",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 7, Safety Tips for Motor Vehicle Drivers",
        sourceUrl: hb(67),
      },
      {
        id: "ar_s5_19",
        topic: "speed",
        question:
          "What does the Arkansas guide say about ice near the freezing point?",
        choices: [
          "It can be more slippery than ice at much colder temperatures",
          "It is less slippery because it is softer",
          "It grips as well as wet asphalt",
          "It only forms on bridges",
        ],
        correctIndex: 0,
        explanation:
          "Wet ice near freezing can be more slippery than ice well below freezing. The guide flags it because drivers assume the coldest days are the worst.",
        context:
          "It gives three other places to look for trouble: shady spots, which freeze first and thaw last; overpasses and bridges, which ice while the road either side stays clear; and hot asphalt in the first minutes of rain, when oil comes to the surface.",
        trap: "A thermometer near zero reads as safer than one well below. The physics runs the other way.",
        excerptKey: "bridges-ice-first",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Adjust to Slippery Roads",
        sourceUrl: hb(55),
      },
      {
        id: "ar_s5_20",
        topic: "rightOfWay",
        question:
          "Two cars arrive at a four-way stop together, at right angles, and both stop. Neither arrived first. What does the Arkansas guide tell you?",
        choices: [
          "The driver on the right goes, under the uncontrolled-intersection rule",
          "The larger vehicle goes first",
          "Both should creep forward together",
          "The guide only states the arrival rule for all-way stops, so give way rather than force it",
        ],
        correctIndex: 3,
        explanation:
          "Arkansas states one rule for all-way stops: the driver who reaches the intersection first goes first, after a complete stop. It does not publish a tie-breaker, and its wider position is that no vehicle has an absolute right of way and you must do everything possible to avoid a collision.",
        context:
          "The yield-to-the-right rule in the guide belongs to intersections with no stop sign and no signal at all. Carrying it into an all-way stop is a common misreading, and it can put two drivers into the box at once when each believes it applies to them.",
        trap: "Many states publish a right-hand tie-breaker for all-way stops. Arkansas's guide does not, so insisting on one is asserting a rule it never gave you.",
        excerptKey: "all-way-first",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Right of Way at Stop Signs",
        sourceUrl: hb(39),
      },
      {
        id: "ar_s5_21",
        topic: "parking",
        question:
          "How close to a pedestrian safety zone may you park in Arkansas?",
        choices: [
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 2,
        explanation:
          "Thirty feet - the same distance Arkansas uses for a traffic signal, stop sign or yield sign.",
        context:
          "The Do Not Park list groups naturally into three: fifteen feet from a hydrant; twenty feet from a crosswalk at an intersection and from a fire station driveway; thirty feet from a signal, a stop or yield sign and a pedestrian safety zone; fifty feet from a railroad crossing.",
        trap: "The pedestrian safety zone sits with the signs at thirty, not with the crosswalk at twenty, which is where most people file it.",
        excerptKey: "no-parking-distances",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Do Not Park",
        sourceUrl: hb(42),
      },
      {
        id: "ar_s5_22",
        topic: "emergencies",
        question:
          "You are in a minor crash on an Arkansas road and nobody is hurt. What does Arkansas law require you to do with the vehicle?",
        choices: [
          "Leave it exactly where it stopped until police arrive",
          "Move it from the roadway so it does not block traffic",
          "Move it only if it is drivable and the other driver agrees",
          "Push it onto the sidewalk",
        ],
        correctIndex: 1,
        explanation:
          "Move it off the roadway. The guide says Arkansas law requires you to move the vehicle from the roadway so it does not block traffic.",
        context:
          "Stopping is not optional either way - you must stop at or near the accident site. If the crash involves injury or death, you may not leave until the police have spoken to you and collected what they need.",
        trap: "Leaving the cars where they landed to preserve the scene is what many drivers believe. Arkansas asks for the opposite in a damage-only crash.",
        excerptKey: "crash-must-stop",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Traffic Crashes",
        sourceUrl: hb(80),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_23",
        topic: "licensing",
        question:
          "An Arkansas driver aged 19 wants to take a call while driving. What is allowed?",
        choices: [
          "A hands-free device; a hand-held phone only in an emergency",
          "Any phone use, since they are over 18",
          "No phone use of any kind",
          "Hand-held calls under two minutes",
        ],
        correctIndex: 0,
        explanation:
          "From 18 to 20 a hands-free wireless device is permitted for interactive communication. A hand-held phone may only be used for emergencies, and texting is banned at every age.",
        context:
          "The ladder is worth memorizing because each rung is different. Under 18, no phone and no hands-free. Eighteen to 20, hands-free only. Twenty-one and over, a cell phone may be used, though the guide adds that it is never safe to talk and drive.",
        trap: "Turning 18 does not unlock a hand-held phone in Arkansas. That waits until 21, and texting never arrives.",
        excerptKey: "class-d-hands-free",
        sourceLabel: "Arkansas Driver License Study Guide - Class D License",
        sourceUrl: hb(4),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_24",
        topic: "safety",
        question:
          "Your windshield has two cracks in the wiper area on the driver's side, within an eight-inch horizontal band across the center. What does the guide say?",
        choices: [
          "It is acceptable if the wipers still clear the glass",
          "It is a reason to reject the windshield",
          "It is acceptable below the level of the mirror",
          "It matters only for commercial vehicles",
        ],
        correctIndex: 1,
        explanation:
          "More than one crack or visual impairment in that eight-inch band is on the reject list. The guide publishes the rule with a diagram.",
        context:
          "The same section requires safety glass in all doors, windows and windshields after July 1, 1951, and rejects glass damaged enough to obscure the driver's view to the front, left, right or rear. Wiper blades should be replaced every six months to a year.",
        trap: "A crack you have stopped noticing is still a crack, and it is the reason a skills test can end before it starts.",
        excerptKey: "windshield-crack",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 10, Windshield and Wipers",
        sourceUrl: hb(83),
      },
      {
        id: "ar_s5_25",
        topic: "signals",
        question:
          "A red arrow is showing for your lane. Does Arkansas's right-on-red rule let you turn right on it?",
        choices: [
          "Yes, after a complete stop",
          "Yes, if there is no prohibiting sign",
          "Only between 6 am and 10 pm",
          "No - a red arrow means you may not turn in the direction of the arrow",
        ],
        correctIndex: 3,
        explanation:
          "No. The guide describes the red arrow separately from the red light, and its wording is that you may not turn in the direction of the arrow.",
        context:
          "Arkansas's right-on-red rule is written around a red light: complete stop, check for opposing traffic, look for pedestrians, and no prohibiting sign. An arrow signal replaces that permission with a direct instruction.",
        trap: "The stop-and-check habit carries over automatically. The arrow is the one place it does not apply.",
        excerptKey: "arrow-red",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Lighted Arrows",
        sourceUrl: hb(24),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_26",
        topic: "rules",
        question:
          "Your car breaks down in a travel lane on an Arkansas street. What does the guide say?",
        choices: [
          "Stop where you are and use hazard lights",
          "Keep moving until you can safely pull off the road",
          "Reverse to the nearest side street",
          "Stop and stand behind the vehicle to warn traffic",
        ],
        correctIndex: 1,
        explanation:
          "Keep moving. The guide's rule is never to stop in a travel lane for any reason - confusion, a breakdown, dropping off a passenger - until you can pull off safely.",
        context:
          "Hazard lights are for warning others once you are stopped, not for making a stop lawful. The guide suggests using a cell phone to notify authorities of a broken-down vehicle, and notes that many roadways sign the number to call.",
        trap: "Hazard lights feel like permission to stop anywhere. They are a warning device, not an exemption.",
        excerptKey: "never-stop-in-lane",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Unmarked Lanes",
        sourceUrl: hb(32),
      },
      {
        id: "ar_s5_27",
        topic: "signs",
        question:
          "Two railroad tracks cross the road, and a train has just passed on the near one. What does the guide tell you?",
        choices: [
          "Cross as soon as the near track is clear",
          "Cross only when the train is well down the tracks, watching for a second train",
          "Wait exactly thirty seconds",
          "Cross if the crossing gates have lifted",
        ],
        correctIndex: 1,
        explanation:
          "Wait until the train is well down the tracks, and watch for another. A sign beneath the crossbuck gives the number of tracks precisely so you know to expect more than one.",
        context:
          "A second train coming from either direction behind the first is the classic multiple-track hazard - the departing train hides it and takes your attention with it. Even when the lights keep flashing and no train appears, the guide says do not cross.",
        trap: "The near track being clear is not the same as the crossing being clear, and the departing train is what hides the second one.",
        excerptKey: "rr-cross-when-clear",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Multiple Tracks",
        sourceUrl: hb(30),
      },
      {
        id: "ar_s5_28",
        topic: "impairment",
        question:
          "A driver under 21 is convicted of Underage Driving Under the Influence in Arkansas. What can happen to the license?",
        choices: [
          "A 120-day suspension",
          "A 30-day suspension",
          "Revocation until the driver turns 21, with a fine of up to $2000",
          "Points only, with no suspension",
        ],
        correctIndex: 2,
        explanation:
          "Revoked until age 21, and a fine of up to $2000. For a 17-year-old that is years without a license.",
        context:
          "Buying or possessing alcohol under 21 carries its own consequence - driving privileges suspended, revoked or disqualified - even with no driving involved. The 120-day suspension belongs to a first adult alcohol conviction, which is a different offense.",
        trap: "The adult first-offense numbers are far milder, and they are the ones people remember.",
        excerptKey: "underage-penalty",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Alcohol and the Law",
        sourceUrl: hb(75),
      },
      {
        id: "ar_s5_29",
        topic: "sharing",
        question:
          "The Arkansas guide gives a rule of thumb for whether a truck driver can see you. What is it?",
        choices: [
          "If you can see the trailer, the driver can see you",
          "If you can see the truck's headlights, the driver can see you",
          "If you cannot see the driver in the tractor's side mirror, the driver cannot see you",
          "If you are within one car length, the driver can see you",
        ],
        correctIndex: 2,
        explanation:
          "Look for the driver's face in the truck's side mirror. If it is not there, you are invisible from the cab.",
        context:
          "The guide calls it an excellent rule for motorists sharing the road with a tractor-trailer. Behind a truck, the same test uses the rear-view mirrors: if you cannot see them, the driver has no way to see you.",
        trap: "Being able to see the truck tells you nothing. The mirror is the only two-way test.",
        excerptKey: "truck-mirror-rule",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 6, Maneuverability",
        sourceUrl: hb(66),
      },
      {
        id: "ar_s5_30",
        topic: "speed",
        question:
          "How does the Four Second Sight Distance Rule work?",
        choices: [
          "Count four seconds behind the vehicle ahead of you",
          "Allow four seconds to complete any lane change",
          "Pick a fixed object as far ahead as you can clearly see and check you cannot reach it inside four seconds",
          "Allow four seconds between checking your mirrors",
        ],
        correctIndex: 2,
        explanation:
          "It measures speed against visibility, not against the car in front. Choose the furthest object you can clearly see, count, and if you get there before four-one-thousand you are outdriving your sight.",
        context:
          "The guide offers it as the test for whether you are going too fast for conditions, and says it works at night with headlights too. It is a different tool from the two-second following rule, which measures the gap to the vehicle ahead.",
        trap: "Four seconds also appears as the merging gap and as the stretched following distance. This one is about how far you can see.",
        excerptKey: "four-second-sight",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Sight-Distance Rule",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "ar_s5_31",
        topic: "safety",
        question:
          "The Arkansas guide describes a danger from a leaky exhaust system. What is it?",
        choices: [
          "Fumes that can cause death in a very short time",
          "A fire risk from hot gases",
          "A failed emissions test",
          "Damage to the catalytic converter",
        ],
        correctIndex: 0,
        explanation:
          "Fumes from a leaking exhaust can kill in a very short time. The exhaust system's job is to carry toxic gases away from the engine.",
        context:
          "The guide's advice follows from that: never let the engine idle in a garage or enclosed area without an open window, and in winter open a window occasionally to let fresh air into the cabin.",
        trap: "A noisy exhaust reads as an annoyance. The guide treats it as a life-safety fault, and a faulty muffler or exhaust also stops a skills test.",
        excerptKey: "exhaust-fumes",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 10, Exhaust System",
        sourceUrl: hb(84),
      },
      {
        id: "ar_s5_32",
        topic: "licensing",
        question:
          "Who may complete the ASP-90 vision referral form for an Arkansas applicant?",
        choices: [
          "Any licensed optometrist in the United States",
          "An online or virtual optometrist",
          "An Arkansas optometrist - out-of-state and virtual optometrists are not accepted",
          "A physician of any kind",
        ],
        correctIndex: 2,
        explanation:
          "An Arkansas optometrist. The guide says forms completed by out-of-state or virtual and online optometrists will not be accepted.",
        context:
          "The vision test and the ASP-90 are both valid for one year from the date the test was administered. And if you wear contacts or glasses, the guide tells you to bring them with you to test.",
        trap: "An online eye exam is the modern convenience the rule was written to exclude.",
        excerptKey: "vision-form-year",
        sourceLabel: "Arkansas Driver License Study Guide - Vision Requirements",
        sourceUrl: hb(5),
      },
      {
        id: "ar_s5_33",
        topic: "rightOfWay",
        question:
          "You want to cross a busy two-lane road but only have room to wait in the middle. When is stopping halfway acceptable?",
        choices: [
          "Whenever traffic is heavy enough to require it",
          "Only where there is a median divider large enough for your vehicle",
          "Only when turning left",
          "Never, under any circumstances",
        ],
        correctIndex: 1,
        explanation:
          "Only when the median is big enough to hold your car. The guide warns against stopping in a divider too small, where you are left sticking out into a line of traffic.",
        context:
          "The wider principle is that crossing traffic needs a large gap and entering traffic needs enough room to get up to speed. If you are turning left, make sure nothing is blocking your exit before you commit, so you are not left across a lane waiting.",
        trap: "Committing to half a crossing and hoping is how side impacts happen. The size of the refuge decides it.",
        excerptKey: "one-lane-at-a-time",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Intersecting Traffic",
        sourceUrl: hb(61),
      },
      {
        id: "ar_s5_34",
        topic: "emergencies",
        question:
          "Your headlights fail on a dark Arkansas road. What does the guide tell you to try?",
        choices: [
          "Drive on by the light of oncoming traffic",
          "Stop in the lane and switch on the interior light",
          "Try the switch a few times, then use flashers, turn signals or fog lights and pull off the road",
          "Continue at reduced speed to the next town",
        ],
        correctIndex: 2,
        explanation:
          "Work the switch first, and if that fails put on whatever light you have left - emergency flashers, turn signals, fog lights - and get off the road as soon as you can.",
        context:
          "The whole emergencies chapter follows that shape: try the simple fix, fall back to a partial one, then remove yourself from traffic. Brake failure, engine failure and a blowout all end the same way, with the vehicle off the roadway.",
        trap: "Pressing on toward the next town is the tempting option and leaves you invisible at highway speed.",
        excerptKey: "headlight-failure",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Headlight Failure",
        sourceUrl: hb(77),
      },
      {
        id: "ar_s5_35",
        topic: "signals",
        question:
          "You approach a green light and a car is stalled in the middle of the intersection. What does the guide require?",
        choices: [
          "Proceed around it, since your light is green",
          "Let the vehicle already in the intersection clear before you proceed",
          "Enter and wait behind it",
          "Reverse and take another route",
        ],
        correctIndex: 1,
        explanation:
          "Green permits you to go when there is no opposing traffic in the way. A vehicle already in the intersection has to clear before you move.",
        context:
          "The guide states this as part of what a green light means, not as an exception. It joins up with the rule against entering an intersection you cannot get through, and with the ticket for blocking one.",
        trap: "Green reads as a command to move. It is a permission that is conditional on the intersection being available.",
        excerptKey: "signal-green",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Lighted Traffic Signals",
        sourceUrl: hb(23),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix and at the level the Arkansas State Police test at, with no hints beyond what you get on the day. Treat it as the real thing.",
    questions: [
      {
        id: "ar_s6_01",
        topic: "signs",
        question:
          "What color and shape identifies a warning sign in Arkansas?",
        choices: [
          "Orange rectangle with black letters",
          "White rectangle with red letters",
          "Yellow diamond with black lettering or symbols",
          "Red triangle with white letters",
        ],
        correctIndex: 2,
        explanation:
          "Warning signs are yellow with black lettering or symbols, and most of them are diamond-shaped.",
        context:
          "They tell you to slow down and be ready to stop, or give information about a special situation or hazard ahead. Regulation signs, by contrast, are white squares or rectangles carrying rules.",
        trap: "Orange belongs to work zones, and red and white to stop and yield.",
        excerptKey: "warning-signs",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Warning Signs",
        sourceUrl: hb(27),
      },
      {
        id: "ar_s6_02",
        topic: "impairment",
        question:
          "How long after drinking does alcohol reach the brain, according to the Arkansas guide?",
        choices: [
          "Within 5 minutes",
          "In 15 to 40 minutes",
          "In about an hour",
          "In two to three hours",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen to forty minutes. Alcohol passes from the stomach into the small intestine, into the blood, and from there to the brain.",
        context:
          "Once it arrives it goes to work on judgment and skill first. The guide's point is that by the time you feel anything, your judgment is already badly affected, so the decision about whether to drive was made by an impaired driver.",
        trap: "The delay means the last drink has not landed yet when you get in the car.",
        excerptKey: "alcohol-15-40-minutes",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Alcohol Impairment",
        sourceUrl: hb(73),
      },
      {
        id: "ar_s6_03",
        topic: "rules",
        question:
          "When may you legally drive on the shoulder of an Arkansas road?",
        choices: [
          "When directed to by a police officer",
          "When passing a slow vehicle",
          "When traffic is stopped ahead",
          "When your exit is within a quarter mile",
        ],
        correctIndex: 0,
        explanation:
          "Only when a police officer directs you onto it. The guide says never drive on the shoulder of any street or road otherwise.",
        context:
          "Passing on the shoulder gets its own prohibition, paved or not, and the reason given is that other drivers do not expect a vehicle there and may pull off without looking.",
        trap: "A wide paved shoulder looks like a lane. Nobody merging onto it is checking for traffic.",
        excerptKey: "no-shoulder-driving",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Unmarked Lanes",
        sourceUrl: hb(32),
      },
      {
        id: "ar_s6_04",
        topic: "parking",
        question:
          "What does a yellow-painted curb mean in Arkansas?",
        choices: [
          "A fire zone",
          "Accessible parking",
          "No stopping at any time",
          "A loading zone or other restriction",
        ],
        correctIndex: 3,
        explanation:
          "A loading zone, or some other restriction. Red is the fire zone color.",
        context:
          "Those are the only two curb colors the study guide defines. Everything else about restricted parking comes from signs, and the guide simply tells you to check for them.",
        trap: "Curb colors vary between states, and guessing at a third one is how people collect tickets.",
        excerptKey: "curb-colors",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Restricted Parking Zones",
        sourceUrl: hb(42),
      },
      {
        id: "ar_s6_05",
        topic: "rightOfWay",
        question:
          "You are leaving an alley and crossing the sidewalk to reach the street. Who goes first?",
        choices: [
          "Pedestrians on the sidewalk",
          "You, if the sidewalk is clear at the moment you start",
          "Whoever is moving faster",
          "Vehicles on the street only",
        ],
        correctIndex: 0,
        explanation:
          "Pedestrians. Arkansas requires you to yield to people on foot when you cross a sidewalk to enter or leave a driveway, alley or parking lot.",
        context:
          "Once you reach the road, the next rule applies: a vehicle entering from a driveway, alley or roadside yields to traffic already on the main road. Two yields, one after the other.",
        trap: "The sidewalk is easy to treat as part of the exit. It belongs to whoever is walking on it.",
        excerptKey: "sidewalk-yield",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Right of Way, Pedestrians",
        sourceUrl: hb(35),
      },
      {
        id: "ar_s6_06",
        topic: "speed",
        question:
          "A fully loaded tractor-trailer at 55 mph may need how far to stop?",
        choices: [
          "About 225 feet",
          "About 275 feet",
          "More than 335 feet",
          "About 500 feet",
        ],
        correctIndex: 2,
        explanation:
          "More than 335 feet, which the guide compares to the length of a football field. A car at the same speed needs about 225.",
        context:
          "That gap is why cutting in front of a truck is singled out as dangerous - you remove the cushion the driver needs and cannot give back. It is also why trying to beat a truck to a lane closure is called out specifically.",
        trap: "The two 55 mph figures sit close together in the guide and get swapped. 225 is the car; 335-plus is the truck.",
        excerptKey: "truck-stopping-335",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 6, Braking",
        sourceUrl: hb(64),
      },
      {
        id: "ar_s6_07",
        topic: "safety",
        question:
          "When must you turn your headlights on in the evening in Arkansas?",
        choices: [
          "At sunset",
          "Half an hour after sunset",
          "When street lights come on",
          "When you can no longer read a road sign",
        ],
        correctIndex: 1,
        explanation:
          "Half an hour after sunset, and they stay on until half an hour before sunrise.",
        context:
          "There are two other triggers. Any time you cannot see a person or object clearly at 500 feet, and any time your windshield wipers are needed. Driving on parking lights alone is illegal in Arkansas.",
        trap: "Sunset itself is the intuitive answer and it is thirty minutes early.",
        excerptKey: "headlights-times",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, External Vehicle Lights",
        sourceUrl: hb(51),
      },
      {
        id: "ar_s6_08",
        topic: "licensing",
        question:
          "An Arkansas Learner's License is issued to drivers of what ages?",
        choices: [
          "Between 14 and 16",
          "Between 15 and 17",
          "Between 16 and 18",
          "18 and over",
        ],
        correctIndex: 0,
        explanation:
          "Fourteen to sixteen. It is the stage after the instruction permit and before the Intermediate License, which covers 16 to 18.",
        context:
          "To get it you need a valid instruction permit showing you have completed the knowledge, vision and skills tests, and then you return to an Arkansas Revenue Office. The license stays restricted until your sixteenth birthday and until six months of restricted driving are complete.",
        trap: "Arkansas uses instruction permit and Learner's License for two different things. Most states use the words interchangeably.",
        excerptKey: "learner-restriction-ends",
        sourceLabel: "Arkansas Driver License Study Guide - Learner's License",
        sourceUrl: hb(3),
      },
      {
        id: "ar_s6_09",
        topic: "emergencies",
        question:
          "What causes the vast majority of skids, according to the Arkansas guide?",
        choices: [
          "Worn tires",
          "Sudden steering inputs",
          "Driving too fast for the conditions",
          "Faulty brakes",
        ],
        correctIndex: 2,
        explanation:
          "Speed for the conditions. The guide says the vast majority of skids come from drivers traveling too fast for what the road is doing.",
        context:
          "It defines a skid as the point where the tires can no longer grip, and says you cannot control a vehicle that is skidding. Which is why the response is to stop making inputs that need grip - off the brake, steer where you want to go, and keep correcting.",
        trap: "Tires and brakes are contributing factors. The guide names speed as the cause.",
        excerptKey: "skid-cause",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Skids",
        sourceUrl: hb(79),
      },
      {
        id: "ar_s6_10",
        topic: "signals",
        question:
          "How many types of lighted arrow does the Arkansas guide describe?",
        choices: ["Two", "Three", "Four", "Five"],
        correctIndex: 2,
        explanation:
          "Four: steady red, steady yellow, flashing yellow and green.",
        context:
          "Each one is a different instruction. Red forbids the turn. Steady yellow warns that red is coming. Flashing yellow permits the turn subject to yielding. Green protects it, and opposing traffic must stop.",
        trap: "Missing the flashing yellow arrow is the usual gap, and it is the one that decides whether you have priority.",
        excerptKey: "arrow-count",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Lighted Arrows",
        sourceUrl: hb(24),
      },
      {
        id: "ar_s6_11",
        topic: "sharing",
        question:
          "Which is the most common car-motorcycle crash?",
        choices: [
          "A car changing lanes into a motorcycle",
          "A car turning left in front of a motorcycle at an intersection",
          "A car rear-ending a motorcycle",
          "A motorcycle passing between lanes",
        ],
        correctIndex: 1,
        explanation:
          "A car turning left across a rider's path at an intersection - a failure to yield the right of way. Over 40 percent of motorcycle crashes happen at intersections, and nearly 60 percent of those come from that left turn.",
        context:
          "The guide's explanation is about perception rather than recklessness: drivers look for cars, a motorcycle's profile is smaller, and its distance and speed are harder to judge. Its remedy is to look twice before turning.",
        trap: "The crash is usually caused by the driver who never registered the motorcycle, not by the rider.",
        excerptKey: "motorcycle-left-turns",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 7, Sharing the Road with Motorcyclists",
        sourceUrl: hb(69),
      },
      {
        id: "ar_s6_12",
        topic: "rules",
        question:
          "When may you cross a solid yellow line in Arkansas?",
        choices: [
          "To pass a slow vehicle when nothing is coming",
          "Never, under any circumstances",
          "To turn into a driveway when no opposing traffic is approaching",
          "To reach a left-turn lane at any point",
        ],
        correctIndex: 2,
        explanation:
          "The guide allows one crossing: turning into a driveway, when no oncoming traffic is approaching the turn site.",
        context:
          "A double solid yellow line means passing is prohibited in both directions. A broken yellow line is what allows a pass when nothing is coming, and a solid line paired with a broken one allows a pass from the broken side.",
        trap: "The driveway exception is narrow and specific. It is not a general permission to cross when the road looks empty.",
        excerptKey: "yellow-cross-to-driveway",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Yellow Lane Markings",
        sourceUrl: hb(31),
      },
      {
        id: "ar_s6_13",
        topic: "safety",
        question:
          "How often should wiper blades be replaced, according to the Arkansas guide?",
        choices: [
          "Every three months",
          "Every six months to a year",
          "Every two years",
          "Only when they stop moving",
        ],
        correctIndex: 1,
        explanation:
          "Every six months to a year, or as soon as you notice visibility getting worse when driving.",
        context:
          "It matters more in Arkansas than it looks, because state law ties headlights to wiper use. The vehicle inspection chapter also asks you to keep the windshield clean and to repair or replace damaged glass promptly.",
        trap: "Blades degrade gradually, so waiting for them to fail means driving for months on smeared glass.",
        excerptKey: "wiper-blades",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 10, Windshield and Wipers",
        sourceUrl: hb(83),
      },
      {
        id: "ar_s6_14",
        topic: "parking",
        question:
          "How close to a crosswalk at an intersection may you park?",
        choices: [
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 1,
        explanation:
          "Twenty feet, so a driver can see people about to cross and they can see the traffic.",
        context:
          "Arkansas also bans parking in an intersection outright, and on a crosswalk or sidewalk in a construction area where your vehicle blocks traffic.",
        trap: "The 30-foot figure belongs to signals and to stop and yield signs. Crosswalks are twenty.",
        excerptKey: "no-parking-distances",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Do Not Park",
        sourceUrl: hb(42),
      },
      {
        id: "ar_s6_15",
        topic: "impairment",
        question:
          "The Arkansas guide asks how many drinks it takes to affect your driving. What is its answer?",
        choices: [
          "Two or more may cause impairment and could lead to arrest",
          "Three or more",
          "It depends entirely on body weight",
          "Only enough to reach 0.08%",
        ],
        correctIndex: 0,
        explanation:
          "Two or more drinks may cause impairment and you could be arrested. The guide puts the question and answers it in the same paragraph.",
        context:
          "It frames the whole section around judgment: the first driving ability alcohol affects is judgment, which is also the faculty that would tell you to stop. Its practical advice is a designated driver, public transport or a cab.",
        trap: "The legal threshold and the impairment threshold are different things. You can be impaired well before you are over the number.",
        excerptKey: "alcohol-never-drink-drive",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Body Metabolism",
        sourceUrl: hb(73),
      },
      {
        id: "ar_s6_16",
        topic: "signs",
        question:
          "What must you do at a stop sign where a painted stop line is present?",
        choices: [
          "Stop level with the sign",
          "Stop after the line if it improves your view",
          "Stop before your vehicle reaches the line",
          "Slow to walking pace over the line",
        ],
        correctIndex: 2,
        explanation:
          "Come to a complete stop before the vehicle reaches the line. The line marks where the stop happens.",
        context:
          "If you cannot see cross traffic from there, you make the stop first and then ease forward until you can. The guide gives the same two-stage answer wherever an obstacle blocks the view.",
        trap: "Rolling to where you can see and stopping there skips the required stop, and it is one of the things examiners watch for.",
        excerptKey: "stop-line",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Crosswalks and Stop Lines",
        sourceUrl: hb(34),
      },
      {
        id: "ar_s6_17",
        topic: "rightOfWay",
        question:
          "You are pulling out of a driveway onto a main road. Who has the right of way?",
        choices: [
          "You, once you have signaled",
          "Vehicles already on the main road",
          "Whichever vehicle is closer to the center line",
          "Traffic from the left only",
        ],
        correctIndex: 1,
        explanation:
          "The traffic already on the road. Arkansas requires a driver entering from a driveway, alley or roadside to yield.",
        context:
          "The same set of rules covers pedestrians on the sidewalk you cross to get there, blocking intersections, and looking both left and right before entering an intersection.",
        trap: "A gap that would let you out is not the same as the right to take it.",
        excerptKey: "driveway-yield",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, General Right of Way Rules",
        sourceUrl: hb(40),
      },
      {
        id: "ar_s6_18",
        topic: "speed",
        question:
          "A passenger car at 40 mph needs roughly what total stopping distance?",
        choices: ["About 124 feet", "About 180 feet", "About 225 feet", "About 300 feet"],
        correctIndex: 0,
        explanation:
          "About 124 feet at 40 mph. At 55 mph the same car needs about 225 - nearly double the distance for a 15 mph increase.",
        context:
          "The guide's point is that stopping distance climbs faster than speed does. That is the arithmetic behind every one of its conditions rules, from the wet-road reduction to the sight-distance test.",
        trap: "The distances are not proportional to speed. Adding a third to the speed nearly doubles the stopping distance.",
        excerptKey: "stopping-40-mph",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Visibility and Reaction",
        sourceUrl: hb(58),
      },
      {
        id: "ar_s6_19",
        topic: "licensing",
        question:
          "How long may a nonresident drive in Arkansas on an out-of-state license before they must obtain an Arkansas one?",
        choices: [
          "30 days",
          "90 days",
          "6 months of physical presence in the state",
          "One year",
        ],
        correctIndex: 2,
        explanation:
          "Six months of physical presence. That is the nonresident rule; someone who has actually become a resident has thirty calendar days.",
        context:
          "Two groups are named as exceptions: members of the armed forces on active duty and foreign military on temporary duty, and students attending classes who count as nonresidents for tuition purposes.",
        trap: "The thirty-day figure applies to new residents. A nonresident who simply stays gets six months.",
        excerptKey: "lic-nonresident-six-months",
        sourceLabel: "Arkansas Driver License Study Guide - The Driver's License",
        sourceUrl: hb(2),
      },
      {
        id: "ar_s6_20",
        topic: "sharing",
        question:
          "How much of a lane is a motorcycle entitled to in Arkansas?",
        choices: [
          "Half a lane, so a car may share it",
          "A full lane width",
          "As much as the rider is using at the time",
          "A full lane only on interstates",
        ],
        correctIndex: 1,
        explanation:
          "The full lane. The guide says a motorcycle is entitled to it and may need the room to maneuver safely, and tells you not to attempt to share.",
        context:
          "Riders move within a lane in response to potholes, gravel, railroad crossings and wet surfaces - conditions that are a minor annoyance in a car and a serious hazard on two wheels. A gust of wind can move a bike across an entire lane.",
        trap: "There often looks like room for both. The rider needs the space you can see as their safety margin.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 7, Respect a Motorcycle",
        sourceUrl: hb(70),
      },
      {
        id: "ar_s6_21",
        topic: "rules",
        question:
          "You are on a multilane road with traffic close behind you. What does the guide suggest?",
        choices: [
          "Speed up to open a gap",
          "Signal and brake gently as a warning",
          "Move into the lane to your right when it is clear",
          "Move into the left lane so they can pass on the right",
        ],
        correctIndex: 2,
        explanation:
          "Move right when the lane is clear. The guide gives that answer twice, once under multiple lanes and once in the safety cushion chapter.",
        context:
          "The general principle is that you can help the driver behind you by keeping a steady speed and signaling early when you have to slow or stop. Speeding up to escape a tailgater just makes both of you faster.",
        trap: "Passing on the right is not the solution to being followed too closely. Yielding the lane is.",
        excerptKey: "followed-too-close",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Multiple Lanes",
        sourceUrl: hb(34),
      },
      {
        id: "ar_s6_22",
        topic: "safety",
        question:
          "When is a tire cold, for the purposes of checking pressure?",
        choices: [
          "When the outside temperature is below freezing",
          "When it has not been driven on for at least three hours",
          "Any time before noon",
          "When the tread is below 1/16 of an inch",
        ],
        correctIndex: 1,
        explanation:
          "Cold means undriven for at least three hours, not cold weather. Driving warms the air inside and raises the pressure reading.",
        context:
          "The manufacturer's recommended pressure is a cold figure, so a warm reading has to be allowed for. Tread matters too: 1/16 of an inch is the point at which the guide says tires should be replaced, and the penny test is how you check.",
        trap: "The word cold sounds like weather and means time since the last drive.",
        excerptKey: "cold-tire",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 10, Tires",
        sourceUrl: hb(84),
      },
      {
        id: "ar_s6_23",
        topic: "emergencies",
        question:
          "What does the Arkansas guide tell you to do about the steering wheel while backing out of a space or driving in general?",
        choices: [
          "Keep both hands at the bottom of the wheel",
          "Grip the wheel with hands on opposite sides",
          "Keep one hand free for the gear selector",
          "Rest your wrist on the top of the wheel",
        ],
        correctIndex: 1,
        explanation:
          "Hands on opposite sides of the wheel. The guide says it is more comfortable and lets you turn without taking a hand off.",
        context:
          "For emergency maneuvers it gets specific: the best grip is 10 o'clock and 2 o'clock, and for a sharp turn at an intersection you use hand over hand rather than turning the wheel in your palm.",
        trap: "A relaxed one-handed grip is the habit that costs you the turn when you need it suddenly.",
        excerptKey: "ten-and-two",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Turning",
        sourceUrl: hb(78),
      },
      {
        id: "ar_s6_24",
        topic: "signals",
        question:
          "What does a red light require in Arkansas?",
        choices: [
          "Stop, and do not proceed until the light turns green and it is safe",
          "Stop, then proceed when the way is clear",
          "Slow down and proceed with caution",
          "Stop only if traffic is crossing",
        ],
        correctIndex: 0,
        explanation:
          "You stop and you wait for green. The one movement carved out of that is a right turn, after a complete stop and where no sign forbids it.",
        context:
          "A flashing red is different - it works as a stop sign, so you stop and then go when it is safe. A steady red does not have a proceed-when-clear provision except for the right turn.",
        trap: "The flashing red rule is the one that says proceed when safe. Applying it to a steady red is running a red light.",
        excerptKey: "signal-red",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Lighted Traffic Signals",
        sourceUrl: hb(23),
      },
      {
        id: "ar_s6_25",
        topic: "sharing",
        question:
          "Arkansas requires you to move over on a multilane highway for stopped vehicles with their lights on. Which vehicles are covered?",
        choices: [
          "Police vehicles only",
          "Police, fire and ambulance only",
          "Any vehicle with hazard lights on",
          "Law enforcement, ARDOT, utility vehicles and tow trucks",
        ],
        correctIndex: 3,
        explanation:
          "Arkansas has widened the law beyond emergency services. The guide names law enforcement vehicles, Arkansas Department of Transportation vehicles, utility vehicles and towing vehicles.",
        context:
          "The instruction is to move to the farthest lane away from the stopped vehicle whenever possible. Where moving over is unsafe or impossible, reduce your speed to a safe level for the conditions or to any legally mandated speed.",
        trap: "Thinking of it as a police-car rule leaves you at speed beside a tow truck driver working at the roadside.",
        excerptKey: "move-over-covered",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Move Over Law",
        sourceUrl: hb(21),
      },
      {
        id: "ar_s6_26",
        topic: "signs",
        question:
          "You approach a railroad crossing with a crossbuck but no lights and no gates. What does the guide say?",
        choices: [
          "Stop and wait thirty seconds before crossing",
          "Cross after checking both directions",
          "Sound your horn and cross",
          "Cross only if you can see a mile of track",
        ],
        correctIndex: 1,
        explanation:
          "Check both ways and then cross. The guide addresses this exact case - a crossing with no safety barrier - and asks for the check.",
        context:
          "The crossbuck requires you to yield the right of way to the train, and the safety tips add the habits: look up and down the track, always expect a train, never underestimate its speed or distance, and never park or stop on the tracks.",
        trap: "No gates does not mean no train. The absence of equipment says nothing about the schedule.",
        excerptKey: "rr-no-barrier",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Gates and Lights",
        sourceUrl: hb(29),
      },
      {
        id: "ar_s6_27",
        topic: "impairment",
        question:
          "How is a driver's blood alcohol concentration determined in Arkansas, aside from breath?",
        choices: [
          "By a field sobriety test",
          "By a blood or urine test",
          "By a hair sample",
          "By the officer's estimate",
        ],
        correctIndex: 1,
        explanation:
          "Blood alcohol concentration can be determined by a blood or urine test. Breath alcohol concentration is measured separately, from the breath.",
        context:
          "The officer decides which test to request - breath, urine or saliva - and you are compelled by law to take it. Refusing can cost you the license.",
        trap: "The field sobriety test is an observation, not a measurement of concentration.",
        excerptKey: "implied-consent",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Alcohol and the Law",
        sourceUrl: hb(74),
      },
      {
        id: "ar_s6_28",
        topic: "licensing",
        question:
          "How is organ donor status recorded on an Arkansas driver's license?",
        choices: [
          "By a symbol on the reverse of the card",
          "It is not recorded on the license at all",
          "The words Organ Donor are printed on the front of the license",
          "By a sticker issued separately",
        ],
        correctIndex: 2,
        explanation:
          "The words Organ Donor are printed on the front of the license, and the holder is listed in a state registry.",
        context:
          "Applicants are asked after they pass testing. The guide's advice is to tell your family about the decision so your wishes can be carried out, and it notes that the choice does not affect the emergency care you receive.",
        trap: "The registry and the printed words work together; neither replaces telling your family.",
        excerptKey: "organ-donor",
        sourceLabel: "Arkansas Driver License Study Guide - Arkansas Organ & Tissue Donor Information",
        sourceUrl: hb(76),
      },
      {
        id: "ar_s6_29",
        topic: "safety",
        question:
          "What does the Arkansas guide say about driving when you are sleepy?",
        choices: [
          "Open a window and continue",
          "Never drive if you are sleepy - stop and sleep instead",
          "Drink coffee and continue for up to an hour",
          "Continue at a reduced speed",
        ],
        correctIndex: 1,
        explanation:
          "Never drive sleepy. The guide says it is better to stop and sleep for a few hours than take a chance you can stay awake.",
        context:
          "Its trip planning advice is preventative: sleep well beforehand, do not set off tired, avoid medicines that cause drowsiness, eat light meals, take regular breaks, and avoid driving during the hours your body expects to be resting.",
        trap: "Coffee and fresh air appear in the alcohol chapter as things that do not work, and they do not work here either.",
        excerptKey: "fitness-fatigue",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Fatigue",
        sourceUrl: hb(72),
      },
      {
        id: "ar_s6_30",
        topic: "rightOfWay",
        question:
          "Before entering an intersection in Arkansas, what does the guide tell you to do?",
        choices: [
          "Look left and right, then look a second time toward oncoming traffic",
          "Look only in the direction you are turning",
          "Rely on the signal and proceed",
          "Sound the horn if your view is limited",
        ],
        correctIndex: 0,
        explanation:
          "Look left and right, and then take a second look in the direction oncoming traffic will come from before you cross.",
        context:
          "Before turning right, the guide adds a check for traffic from the left and for oncoming vehicles turning left across your path, plus a look for pedestrians in the crossing you are turning into.",
        trap: "One sweep is not enough at a busy junction. The second look is where the motorcycle you missed shows up.",
        excerptKey: "intersection-look-twice",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 4, Stay Alert, Intersections",
        sourceUrl: hb(48),
      },
    ],
  },
];
