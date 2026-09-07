import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets-1-3.ts: the New Hampshire Driver's Manual
// DSMV 360 (Rev. 11/25), Title XXI of the Revised Statutes Annotated, and the
// dmv.nh.gov pages that carry the test format, the practice-driving conditions
// and the Youth Operator rules.
//
// Set 5 is built from what New Hampshire learners actually report getting
// wrong, cross-checked against the official source before any of it was
// written into a question. The recurring ones are the Youth Operator
// suspension ladder (which people discover only after paying the fine), the
// absence of any learner's permit and the DMV's refusal to honor another
// state's, the 80 percent pass mark that gets remembered as 30 out of 40, the
// four-second following distance where most books say three, and the seat belt
// law that exists for under-18s in a state with no adult belt law at all.
//
// Set 6 mirrors the real exam: 30 questions with no scaffolding beyond the
// standard fields, mixed the way the DMV's own 40-question paper is described
// on its testing page - rules of the road and general driving conditions,
// with distracted driving, driving under the influence and poor weather
// guaranteed a place by RSA 263:6.
const HB = "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf";
const hb = (printedPage: number) => `${HB}#page=${printedPage + 6}`;
const rsa = (section: string) => {
  const [chapter, num] = section.split(":");
  return `https://www.gencourt.state.nh.us/rsa/html/XXI/${chapter}/${chapter}-${num}.htm`;
};
const TESTING =
  "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements";
const LEARNING =
  "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id/driver-education/learning-to-drive";
const MINORS =
  "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-requirements-minors";
const DRIVER_ED =
  "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id/driver-education";

export const newhampshireSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions spread over all twelve sections of the New Hampshire Driver's Manual, including the corners of it that a shorter study session skips.",
    questions: [
      {
        id: "nh_s4_01",
        topic: "signs",
        question: "What does a blue road sign carry?",
        choices: [
          "Driver services such as hospitals, fuel, food and lodging",
          "A prohibition",
          "Direction and guidance to towns",
          "A recreation area",
        ],
        correctIndex: 0,
        explanation:
          "Blue is the driver services color. Hospitals, fuel, food and lodging are what the manual lists under it.",
        context:
          "Green handles general direction and guidance, and brown handles tourist and recreation guidance. Guide signs of all three colors are square or rectangular, and between them they cover intersecting roads, towns, points of interest and services along the route.",
        trap:
          "Green and blue both point you somewhere. Green is where the road goes; blue is what you can find when you get off it.",
        excerptKey: "sign-colors",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Guide Signs",
        sourceUrl: hb(22),
      },
      {
        id: "nh_s4_02",
        topic: "rules",
        question:
          "How far before changing lanes or leaving the roadway on a highway does the manual want you to signal?",
        choices: ["100 feet", "200 feet", "300 feet", "At least 500 feet"],
        correctIndex: 3,
        explanation:
          "Five hundred feet on a highway, against 100 feet before an ordinary turn. The extra distance exists because closing speeds on a highway are much higher.",
        context:
          "The manual also asks you to signal sooner in rain, snow or fog, to give other drivers room for the longer stopping distances those conditions produce. RSA 265:45 makes the 100-foot turn signal a legal requirement and adds another obligation drivers forget: you may not stop or suddenly decrease speed without first signaling to the driver behind, when there is an opportunity to do so.",
        trap:
          "One hundred feet is the number most people remember, and it is the wrong one on a highway.",
        excerptKey: "signal-100-500",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Communicating and Signaling",
        sourceUrl: hb(15),
      },
      {
        id: "nh_s4_03",
        topic: "safety",
        question: "Where does the manual want your hands on the steering wheel?",
        choices: [
          "10 and 2, with thumbs hooked inside the rim",
          "One hand at 12, the other free",
          "9 and 3, or 8 and 4, with knuckles and thumbs on the outside",
          "Wherever is comfortable on a straight road",
        ],
        correctIndex: 2,
        explanation:
          "Nine and three, or eight and four. The manual adds that knuckles and thumbs stay on the outside of the wheel, which keeps them clear if an airbag fires or the wheel spins back.",
        context:
          "It also names the two steering techniques: hand-to-hand for slight inputs and hand-over-hand for larger ones. The lower hand positions came in with airbags; the older ten-and-two grip puts your forearms directly over the module.",
        trap:
          "Hooking a thumb inside the rim feels secure. It is how a wrist gets broken when a front wheel hits something.",
        excerptKey: "steering-hands",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Steering",
        sourceUrl: hb(14),
      },
      {
        id: "nh_s4_04",
        topic: "licensing",
        question:
          "How long is a New Hampshire driver's license valid, and when does it expire?",
        choices: [
          "Four years, expiring on the anniversary of issue",
          "Five years, expiring on the holder's birthday",
          "Six years, expiring at the end of the calendar year",
          "Eight years, expiring on the anniversary of issue",
        ],
        correctIndex: 1,
        explanation:
          "Five years, and the expiry falls on your birthday rather than on the anniversary of issue. A Youth Operator License is the exception: it expires on the holder's 21st birthday, whenever it was issued.",
        context:
          "The DMV mails a renewal reminder to your last known address about two months before expiry, but the manual is clear that renewing is the license holder's responsibility whether or not the reminder arrives. No reminder is sent if you have moved without telling the DMV or if your privileges are suspended or revoked.",
        trap:
          "The reminder is a courtesy, not a condition. A change of address you never reported is the usual reason it never comes.",
        excerptKey: "license-expiry-5",
        sourceLabel: "New Hampshire Driver's Manual - Section 2 Driver's License Renewal",
        sourceUrl: hb(5),
      },
      {
        id: "nh_s4_05",
        topic: "sharing",
        question:
          "You are behind a transit bus approaching a railroad crossing. What should you expect?",
        choices: [
          "It will cross without stopping if the lights are dark",
          "It will slow but keep rolling",
          "It will signal before crossing",
          "It must stop before the crossing, even with no train in sight",
        ],
        correctIndex: 3,
        explanation:
          "Buses carrying passengers and trucks carrying flammable or hazardous material must stop before every railroad crossing, whether or not a train is anywhere near. The manual tells you to be ready to stop when you are behind one.",
        context:
          "RSA 265:50 sets the same 15-to-50-foot window for those vehicles and adds that the driver must listen and look both ways, then cross in a gear that will not need changing on the tracks. The manual also lists vehicles required to stop at railroad crossings among the situations calling for extra following distance.",
        trap:
          "The bus stopping at an empty crossing looks like a mistake. Following at a normal gap is what turns it into a rear-end collision.",
        excerptKey: "railroad-buses-trucks",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Railroad Crossing Warning Signs",
        sourceUrl: hb(22),
      },
      {
        id: "nh_s4_06",
        topic: "parking",
        question:
          "You are parking on a hill in New Hampshire. What does the law require in addition to setting the brake?",
        choices: [
          "Turn the front wheels to the curb or the side of the way",
          "Leave the vehicle in neutral",
          "Chock a wheel",
          "Park facing downhill only",
        ],
        correctIndex: 0,
        explanation:
          "RSA 265:72 requires the front wheels turned to the curb or the side of the way whenever a vehicle stands unattended on a grade. The manual repeats it as part of making sure the vehicle cannot move.",
        context:
          "The rest of the same duty is to stop the engine, lock the ignition, remove the key and set the brake. The manual adds putting an automatic in park or leaving a manual in gear, and locking the vehicle whenever it is parked.",
        trap:
          "Neutral is the opposite of what is wanted. The point of the rule is that the car cannot roll if the brake lets go.",
        excerptKey: "rsa-unattended-vehicle",
        sourceLabel: "New Hampshire RSA 265:72 - Unattended Vehicle",
        sourceUrl: rsa("265:72"),
      },
      {
        id: "nh_s4_07",
        topic: "impairment",
        question:
          "What does the manual say about over-the-counter medicines and driving?",
        choices: [
          "They are safe because no prescription is needed",
          "Only sleep aids matter",
          "They are safe if taken with food",
          "Remedies for colds, allergies and nerves can make a driver drowsy and affect their ability to drive",
        ],
        correctIndex: 3,
        explanation:
          "The manual names the categories: drugs taken for headaches, colds, hay fever or other allergies, and those taken to calm nerves, can make a driver drowsy. It tells you to read the label before you take one.",
        context:
          "It gives the other direction too - pep pills, uppers and diet pills can make a person feel nervous, dizzy, unable to concentrate, and can affect vision. Prescription drugs such as antidepressants, pain relievers, sleep aids and sedatives affect reflexes, judgment, vision and alertness in ways similar to alcohol. If in doubt, ask a doctor or pharmacist.",
        trap:
          "\"It is not a prescription so it cannot be impairing\" is the assumption the manual is written against. Being over the counter says nothing about what it does to reaction time.",
        excerptKey: "otc-drugs",
        sourceLabel: "New Hampshire Driver's Manual - Section 3 Over-the-Counter Drugs",
        sourceUrl: hb(9),
      },
      {
        id: "nh_s4_08",
        topic: "rightOfWay",
        question:
          "An emergency vehicle is approaching a roundabout you are already inside. What does the manual tell you to do?",
        choices: [
          "Stop where you are so it can pass",
          "Move through, exit, then pull over to the right",
          "Reverse out of the roundabout",
          "Pull to the center island",
        ],
        correctIndex: 1,
        explanation:
          "Never stop inside a roundabout. The manual tells you to keep moving, take your exit, and then pull over to the right to let the emergency vehicle through.",
        context:
          "The instruction for drivers not yet in is the mirror image: do not enter a roundabout when emergency vehicles are approaching, pull over to the right, and let the vehicles already inside clear the circle. A stopped car in a roundabout blocks the one route the emergency vehicle has.",
        trap:
          "Stopping is the reflex everywhere else and is exactly wrong here. The circle only works if it keeps emptying.",
        excerptKey: "roundabout-emergency",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 Multi-lane Roundabouts (Traffic Circles)",
        sourceUrl: hb(27),
      },
      {
        id: "nh_s4_09",
        topic: "emergencies",
        question:
          "Your brakes fail while driving. What does the manual tell you to try first?",
        choices: [
          "Turn off the engine immediately",
          "Steer into a snowbank or guardrail",
          "Engage the parking brake slowly, ready to release it if the car starts to skid",
          "Shift into reverse",
        ],
        correctIndex: 2,
        explanation:
          "The parking brake, applied slowly. Pulling or pushing it hard locks the rear wheels and starts a skid, so the manual tells you to be ready to release it if that happens.",
        context:
          "Only if the parking brake does not work does the manual move to the engine: turn it off and look for a safe place off the roadway to slow to a stop. Killing the engine first costs you the power assistance to the steering, which is why it is the second step and not the first.",
        trap:
          "Yanking the handle feels like the emergency response. Locked rear wheels take away the steering you were relying on.",
        excerptKey: "brake-failure",
        sourceLabel: "New Hampshire Driver's Manual - Section 10 Driving Emergencies, Brake Failure",
        sourceUrl: hb(35),
      },
      {
        id: "nh_s4_10",
        topic: "speed",
        question:
          "Which New Hampshire road carries a 70 mph limit?",
        choices: [
          "All four-lane divided interstates",
          "The Everett Turnpike south of Nashua",
          "Route 101 between Manchester and the coast",
          "I-93 from mile marker 45 to the Vermont border",
        ],
        correctIndex: 3,
        explanation:
          "One stretch only: I-93 from mile marker 45 north to the Vermont border. Every other interstate and turnpike section that is divided with four or more lanes is 65.",
        context:
          "The rest of the table runs 30 in a business or urban residence district, 35 in a rural residence district or on a Class V highway outside a town's compact part, and 45 or 55 in other locations. RSA 265:60 separates that last pair: 45 on an unimproved rural highway, 55 everywhere else.",
        trap:
          "A single named stretch is exactly the kind of fact an exam likes. Assuming 70 applies to all interstates gets the general case wrong too.",
        excerptKey: "speed-i93-70",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Speed Management",
        sourceUrl: hb(15),
      },
      {
        id: "nh_s4_11",
        topic: "signals",
        question:
          "A flashing yellow traffic light means what?",
        choices: [
          "Stop and yield before proceeding",
          "Slow down and proceed with caution",
          "The signal is out of service",
          "Prepare to stop for a train",
        ],
        correctIndex: 1,
        explanation:
          "Slow down and proceed with caution. The manual adds that you should be prepared to stop for any traffic entering the intersection, which is the whole reason for the caution.",
        context:
          "Its counterpart, the flashing red, requires a complete stop behind the stop line, crosswalk or intersection and then a yield before proceeding. A dark signal is a third case entirely: RSA 265:9, V puts you back on the uncontrolled-intersection and four-way-stop rules.",
        trap:
          "Flashing yellow feels like permission to keep your speed. It is a warning that cross traffic is only lightly controlled.",
        excerptKey: "flashing-yellow",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signals",
        sourceUrl: hb(20),
      },
      {
        id: "nh_s4_12",
        topic: "signs",
        question:
          "You are approaching a sign shaped like a downward-pointing triangle, red and white with red letters. What does it require?",
        choices: [
          "A complete stop in every case",
          "Nothing until you reach the intersection",
          "A signal before you proceed",
          "Slow down and let traffic with the right of way cross first",
        ],
        correctIndex: 3,
        explanation:
          "It is a yield sign. You slow down and allow traffic that has the right of way to cross before you enter, and you stop if stopping is what safety requires.",
        context:
          "RSA 265:31, III sets out where to stop when a stop is required: before the crosswalk on the near side, or at a clearly marked stop line, or at the point nearest the intersecting roadway where you can see approaching traffic. The consequence of getting it wrong is written into RSA 265:30, II - a collision after passing a yield sign without yielding is prima facie evidence of failure to yield.",
        trap:
          "Treating a yield as an always-stop is safe but wrong on the exam; treating it as a roll-through is the mistake that produces the collision.",
        excerptKey: "yield-sign",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Examples of Prohibition Signs",
        sourceUrl: hb(21),
      },
      {
        id: "nh_s4_13",
        topic: "safety",
        question:
          "What does the manual say about relying on a back-up camera?",
        choices: [
          "It replaces mirror and shoulder checks when reversing",
          "It should never be the primary tool for backing safely",
          "It is only useful in parking lots",
          "It is required equipment on vehicles after 2018",
        ],
        correctIndex: 1,
        explanation:
          "The camera is a supplement. The manual says back-up cameras should never be used as the primary tool for backing safely, and that they work when used together with the mirrors and proper head checks.",
        context:
          "The rest of the backing procedure is older than any camera: check behind the vehicle before you get in, because children and small objects cannot be seen from the driver's seat. Accelerate gently, keep the speed low, steer slightly the way you want the rear to go, and keep looking to the rear until you have stopped completely.",
        trap:
          "The camera shows the area directly behind and misses the child walking in from the side. That is the case the walk-around is for.",
        excerptKey: "backing-camera",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Backing",
        sourceUrl: hb(17),
      },
      {
        id: "nh_s4_14",
        topic: "rules",
        question:
          "What does the manual tell you about the left-most lane on a multi-lane road?",
        choices: [
          "It is for through traffic",
          "It is reserved for vehicles turning left at the next junction",
          "It is intended for passing slower vehicles",
          "It carries a higher speed limit",
        ],
        correctIndex: 2,
        explanation:
          "The left-most lane is intended to be used for passing slower vehicles. It is not a faster through lane, and the speed limit is the same across all of them.",
        context:
          "RSA 265:16 puts two duties around the same idea. A vehicle proceeding slower than the normal speed of traffic belongs in the right-hand lane or as close to the right edge as practicable, except when passing or preparing for a left turn. And no vehicle should be operated continuously in the left lane of a multilane roadway when doing so impedes traffic at or below the posted limit.",
        trap:
          "Sitting in the left lane at exactly the limit is still impeding traffic under the statute. The lane is defined by its purpose, not by your speed.",
        excerptKey: "passing-left-lane",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Passing",
        sourceUrl: hb(17),
      },
      {
        id: "nh_s4_15",
        topic: "licensing",
        question:
          "What is required of a driver education student before applying for a New Hampshire license, on top of the course itself?",
        choices: [
          "40 hours of supervised driving including at least 10 at night",
          "20 hours of supervised driving",
          "A written parental log of 60 hours",
          "Nothing further once the course is complete",
        ],
        correctIndex: 0,
        explanation:
          "Forty additional hours of supervised driving with a parent, guardian or other responsible adult, and at least ten of those must be at night.",
        context:
          "The course itself is 30 hours of classroom instruction, 10 hours of practice driving with a certified instructor and 6 hours of observation. Logged hours may begin at 15 and a half, and the DMV takes the log sheet certified by the student and the parent or guardian, or the equivalent from the Parent's Supervised Driving Program.",
        trap:
          "The 10 hours behind the wheel with an instructor do not count toward the 40. They are separate lines on the same requirement.",
        excerptKey: "web-40-hours-night",
        sourceLabel: "NH DMV - Driver Education",
        sourceUrl: DRIVER_ED,
      },
      {
        id: "nh_s4_16",
        topic: "sharing",
        question:
          "Where does a large truck's blind spot on the right side begin and end?",
        choices: [
          "It is the same size as a car's",
          "It covers only the trailer",
          "It starts behind the cab and can extend the whole length of the truck",
          "It is eliminated by the truck's convex mirrors",
        ],
        correctIndex: 2,
        explanation:
          "It begins behind the cab and can run the full length of the truck. The manual gives a test you can apply from your own seat: if you cannot see the truck driver's face in their side mirror, they cannot see you.",
        context:
          "The manual calls the whole family of blind spots the No-Zone, and it covers the sides, rear and front. Its practical instruction is to avoid driving alongside a large vehicle any longer than you have to, because if the driver needs to swerve or change lanes the chances of a collision go up sharply.",
        trap:
          "Convex mirrors widen the view and do not close the gap. The face test is the one the manual actually gives.",
        excerptKey: "side-no-zone",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, The No-Zone",
        sourceUrl: hb(39),
      },
      {
        id: "nh_s4_17",
        topic: "parking",
        question:
          "How close to the driveway entrance of a fire station may you park in New Hampshire?",
        choices: [
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 30 feet",
          "No closer than 20 feet, or 75 feet on the opposite side of the street",
        ],
        correctIndex: 3,
        explanation:
          "Twenty feet from the driveway entrance itself. On the opposite side of the street the distance is 75 feet, where the ban is properly signposted, because an engine turning out needs the whole width to swing.",
        context:
          "It sits in the same unmarked list as the 15-foot hydrant distance, the 20-foot crosswalk distance, the 30-foot stop sign or signal distance, and the 50-foot railroad crossing distance. RSA 265:69 also bars stopping, standing or parking on a sidewalk, in an intersection, on a crosswalk, on a bridge or elevated structure, in a tunnel and on railroad tracks.",
        trap:
          "The opposite side of the street feels like someone else's problem. It is the longer distance of the two, not the shorter.",
        excerptKey: "rsa-park-fire-station",
        sourceLabel: "New Hampshire RSA 265:69 - Stopping, Standing or Parking Prohibited in Specified Places",
        sourceUrl: rsa("265:69"),
      },
      {
        id: "nh_s4_18",
        topic: "impairment",
        question:
          "What does the manual say about combining alcohol with other drugs?",
        choices: [
          "The effects cancel out",
          "Only illegal drugs are a problem",
          "They may multiply the effects of alcohol or add effects of their own",
          "It is safe with a doctor's approval",
        ],
        correctIndex: 2,
        explanation:
          "The manual says a driver should never drink alcohol while taking other drugs, because the combination could multiply the effects of the alcohol or add effects of its own.",
        context:
          "It treats prescription, over-the-counter and illegal drugs the same way for driving purposes: all three can affect reflexes, judgment, vision and alertness in ways similar to alcohol, or worse. Drugged driving is illegal in New Hampshire and the manual puts it alongside drunk and distracted driving in the same sentence.",
        trap:
          "A drug prescribed for you is still a drug. The label warning is there because the interaction does not care whose name is on the bottle.",
        excerptKey: "combining-drugs",
        sourceLabel: "New Hampshire Driver's Manual - Section 3 Combining Alcohol and Other Impairing Drugs",
        sourceUrl: hb(9),
      },
      {
        id: "nh_s4_19",
        topic: "signs",
        question:
          "What kind of sign is a circle in New Hampshire's shape system?",
        choices: [
          "Advance warning of a railroad crossing",
          "A roundabout ahead",
          "A speed advisory",
          "A no-parking zone",
        ],
        correctIndex: 0,
        explanation:
          "The circle warns that a railroad crossing is ahead. It is the only round sign in the manual's shape list.",
        context:
          "The crossbuck is the separate X-shaped sign that marks the crossing itself. Between them the pair tells you the same thing in two stages: slow down and look and listen, then here is the track. Where the crossing is active, lights and gates take over the warning.",
        trap:
          "Roundabouts are common in New Hampshire and there is no round sign for them. The circle is reserved for the railroad warning.",
        excerptKey: "sign-rectangle",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signs",
        sourceUrl: hb(21),
      },
      {
        id: "nh_s4_20",
        topic: "emergencies",
        question:
          "Where does the manual want emergency flares or reflectors placed around a broken-down vehicle?",
        choices: [
          "Immediately beside the vehicle on both sides",
          "50 feet behind only",
          "200 feet in front of and behind the vehicle",
          "At the nearest intersection",
        ],
        correctIndex: 2,
        explanation:
          "Two hundred feet in front and 200 feet behind. The distance is about giving approaching drivers time to change lanes, not just marking where you are.",
        context:
          "The sequence before that is the flashers, and getting the vehicle off the road and away from traffic as safely and quickly as you can. Then notify someone by phone if you have one. If not, raise the hood and tie a white cloth - red in a snowstorm - to the door handle or antenna, and stay with the vehicle unless the location is hazardous.",
        trap:
          "Flares beside the car warn people who have already arrived. Two hundred feet is the warning distance, not the marking distance.",
        excerptKey: "breakdown-flares",
        sourceLabel: "New Hampshire Driver's Manual - Section 10 Driving Emergencies, Vehicle Breakdown",
        sourceUrl: hb(35),
      },
      {
        id: "nh_s4_21",
        topic: "rightOfWay",
        question:
          "Two cars meet at a narrow single-lane bridge on a rural New Hampshire road. Who crosses first?",
        choices: [
          "The heavier vehicle",
          "The vehicle traveling uphill",
          "Generally the driver who reached the bridge first",
          "Neither - both must reverse and let a third vehicle through",
        ],
        correctIndex: 2,
        explanation:
          "The manual's rule is order of arrival: take turns crossing, and generally the first driver to the bridge has the right of way.",
        context:
          "It also asks you to look for the warning signs identifying narrow or single-lane bridges in the first place, because on a rural road there may be no other clue. The same section covers open bridge gratings and steel bridges, which reduce traction: reduce speed, increase following distance and keep a firm grip on the wheel.",
        trap:
          "Uphill priority is a mountain-road convention and not New Hampshire's bridge rule. First to arrive is what the manual says.",
        excerptKey: "single-lane-bridge",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Rural Road Driving",
        sourceUrl: hb(18),
      },
      {
        id: "nh_s4_22",
        topic: "rules",
        question:
          "What does the manual say about the shoulder when passing?",
        choices: [
          "It may be used if the shoulder is paved",
          "It may be used to pass a left-turning vehicle",
          "It may be used below 25 mph",
          "Never pass on the shoulder, paved or not",
        ],
        correctIndex: 3,
        explanation:
          "Never, and the manual says so without qualification: never pass on the shoulder, whether it is paved or not.",
        context:
          "RSA 265:19 says the same thing about overtaking on the right - the movement may not be made by driving off the roadway - even in the two situations where passing on the right is otherwise allowed. The manual's other passing prohibitions cover an approaching vehicle, a view blocked by a curve or a hill, intersections, and the approach to a highway-railroad crossing or bridge.",
        trap:
          "A wide paved shoulder in New Hampshire is often a bicycle route and always someone's breakdown space. Its being paved is not permission.",
        excerptKey: "passing-left-lane",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Passing",
        sourceUrl: hb(17),
      },
      {
        id: "nh_s4_23",
        topic: "safety",
        question:
          "What does the manual say about how a shoulder harness should be worn?",
        choices: [
          "Across the shoulder and chest with minimal slack",
          "Under the arm if it crosses the neck",
          "Behind the back if it is uncomfortable",
          "Loose enough to lean forward freely",
        ],
        correctIndex: 0,
        explanation:
          "Across the shoulder and chest with minimal slack. The manual says specifically that it should not be worn under the arm or behind the back, because either could cause serious internal injuries in a crash.",
        context:
          "The lap belt has its own rule: snug and low across the hips after fastening, because a belt riding high lets an occupant slide out of it in a collision. Air bags are supplemental restraints designed to work with belts rather than instead of them, and the manual says belts should always be worn even in an air bag-equipped vehicle.",
        trap:
          "Tucking the harness behind you to stop it rubbing removes the restraint that keeps your upper body from hitting the interior.",
        excerptKey: "shoulder-harness",
        sourceLabel: "New Hampshire Driver's Manual - Section 4 Before Driving, Using Safety Belts",
        sourceUrl: hb(11),
      },
      {
        id: "nh_s4_24",
        topic: "speed",
        question:
          "Which of these is a statutory 45 mph limit in New Hampshire?",
        choices: [
          "Any road inside a rural residence district",
          "Any road with no posted limit",
          "The minimum speed on an interstate, and the limit on an unimproved rural highway",
          "The limit through any work zone",
        ],
        correctIndex: 2,
        explanation:
          "Forty-five turns up twice in New Hampshire law: as the minimum speed on an interstate highway, and under RSA 265:60, II(d) as the limit on an unimproved rural highway.",
        context:
          "The manual's speed table folds that second use into the phrase \"45 or 55 miles per hour in other locations\" without saying which is which. The statute separates them: 45 on an unimproved rural highway as defined in RSA 259:116-a, and 55 in other locations. In a rural residence district the figure is 35, not 45.",
        trap:
          "Reading the manual alone leaves 45 and 55 looking interchangeable. Only the statute says where each one applies.",
        excerptKey: "rsa-speed-45-unimproved",
        sourceLabel: "New Hampshire RSA 265:60 - Basic Rule and Maximum Limits",
        sourceUrl: rsa("265:60"),
      },
      {
        id: "nh_s4_25",
        topic: "signals",
        question:
          "You are first in line at a green light. What does the manual advise before you move?",
        choices: [
          "Move immediately so the queue behind you can clear",
          "Sound the horn to warn cross traffic",
          "Wait for the driver behind to signal",
          "Take a moment to check the path is clear and no crossing traffic is coming",
        ],
        correctIndex: 3,
        explanation:
          "Do not move off the instant the light changes. The manual asks you to take the time to make sure the path of travel is clear and there is no crossing traffic before entering the intersection.",
        context:
          "It also recommends looking left, then right, then left again before entering any intersection, and warns against relying on other road users to obey signals or signs. The gap you need is not just enough to enter: it is enough to get across, turn into the right lane and get up to speed.",
        trap:
          "The car that runs the red arrives in the first second of your green. That is exactly the second this advice is about.",
        excerptKey: "green-light-pause",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 General Driving and Parking, Intersections",
        sourceUrl: hb(26),
      },
      {
        id: "nh_s4_26",
        topic: "licensing",
        question:
          "What license restriction does the code B represent in New Hampshire?",
        choices: [
          "Daylight driving only",
          "Corrective lenses",
          "Automatic transmission",
          "Outside mirror required",
        ],
        correctIndex: 1,
        explanation:
          "B is corrective lenses. It goes on the license of anyone who needed glasses or contacts to pass the vision test, and it means they must be worn while driving.",
        context:
          "The manual's list runs B for corrective lenses, C for mechanical aid, D for prosthetic aid, E for automatic transmission, F for outside mirror, G for daylight only, IID for ignition interlock device, and RTW for restricted to a three-wheel motorcycle. Commercial licenses carry a separate set in the CDL manual.",
        trap:
          "G, not B, is the daylight-only restriction, and E is the automatic transmission one. The letters are worth learning as a block.",
        excerptKey: "restriction-codes",
        sourceLabel: "New Hampshire Driver's Manual - Section 2 License Restrictions",
        sourceUrl: hb(4),
      },
      {
        id: "nh_s4_27",
        topic: "sharing",
        question:
          "A cyclist ahead of you is not signaling a turn. What does the manual tell you to look for?",
        choices: [
          "Nothing - assume they are going straight",
          "A hand held out flat, which is the only legal signal",
          "Other clues such as turning their head or looking over their shoulder",
          "A bell, which cyclists must use before turning",
        ],
        correctIndex: 2,
        explanation:
          "Cyclists are required to signal turns and stops with their hands, but the manual acknowledges that road or traffic conditions may force them to keep both hands on the bars. It tells you to read other clues instead - a head turn or a look over the shoulder.",
        context:
          "The rest of the manual's cyclist advice is about giving room: at least three feet at 30 mph or less with an extra foot per 10 mph above that, as much space as possible when passing, no sudden braking, and no horn unless a crash is likely. It also asks you to check the sides and rear for bicycles before opening a door on the street.",
        trap:
          "Waiting for a signal that never comes puts you alongside the cyclist at the moment they move. The head turn is the earlier warning.",
        excerptKey: "bicycle-hand-signals",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, Bicyclists",
        sourceUrl: hb(37),
      },
      {
        id: "nh_s4_28",
        topic: "rules",
        question:
          "You are on a one-way street. What color is the line marking the left edge of the road?",
        choices: ["White", "Yellow", "Red", "There is no edge line on a one-way street"],
        correctIndex: 1,
        explanation:
          "Yellow on the left edge of a one-way road. White marks the edge on a two-way road and the right edge of a one-way.",
        context:
          "The logic is the same one that runs through the whole marking system: yellow means the other side of the line is not yours. On a two-way road that is oncoming traffic; on a one-way street it is the edge of the roadway on your left. White lines separate traffic moving the same way, and broken lines allow a crossing when it is safe.",
        trap:
          "Yellow on the left of a one-way street looks like a center line and is not. Seeing yellow on your right is the real warning that you are going the wrong way.",
        excerptKey: "edge-markings",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Pavement Markings",
        sourceUrl: hb(23),
      },
      {
        id: "nh_s4_29",
        topic: "safety",
        question:
          "The manual gives one phrase for the habit it most wants drivers to build in a visual search. What is it?",
        choices: [
          "Turn your head before you turn the wheel",
          "Aim high in steering",
          "Look where you want to go",
          "Two eyes, two mirrors, two seconds",
        ],
        correctIndex: 0,
        explanation:
          "Turn your head before you turn the wheel. The manual sets it out as the thing to remember about visual search.",
        context:
          "The rest of the searching pattern is: look ahead down the road and past the vehicles in front, check mirrors continually, search the sides so other road users do not cross your path, and check behind before slowing, stopping, turning or changing lanes. The manual also warns against sitting close behind a large vehicle, which limits how far ahead you can see.",
        trap:
          "Mirrors feel like a complete check. The head turn is what covers the space no mirror reaches.",
        excerptKey: "turn-head",
        sourceLabel: "New Hampshire Driver's Manual - Section 8 Driving Safely, Visual Search",
        sourceUrl: hb(30),
      },
      {
        id: "nh_s4_30",
        topic: "impairment",
        question:
          "Roughly what share of traffic crashes in which someone is killed involve alcohol or other impairing drugs, according to the manual?",
        choices: ["About 10 percent", "About 25 percent", "About 40 percent", "About 70 percent"],
        correctIndex: 2,
        explanation:
          "About 40 percent. The manual gives the figure at the head of its section on alcohol and drugs, before it gets to any of the legal limits.",
        context:
          "It follows immediately with the observation that a BAC as low as 0.02 can affect a driver's ability to drive. New Hampshire's legal thresholds are 0.08 for a driver 21 or over and 0.02 for anyone under 21, but the manual's point is that impairment starts with the first drink rather than at a number.",
        trap:
          "Percentages are easy to inflate under exam pressure. The manual's figure is 40, not a majority.",
        excerptKey: "alcohol-40-percent",
        sourceLabel: "New Hampshire Driver's Manual - Section 3 Alcohol, Other Drugs and Driving",
        sourceUrl: hb(8),
      },
      {
        id: "nh_s4_31",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing at an intersection that has no painted crosswalk. What does the manual say?",
        choices: [
          "You have the right of way, since there is no crosswalk",
          "Yield only if they are already past the center line",
          "Sound the horn and proceed",
          "Yield to them anyway - the duty applies at intersections whether or not lines are painted",
        ],
        correctIndex: 3,
        explanation:
          "The manual says drivers are required to yield to pedestrians crossing in marked crosswalks or at intersections even where no crosswalk lines exist. The paint records where a crossing is; it does not create the right to cross there.",
        context:
          "RSA 265:35 sets the underlying duty where signals are not in place or not working: yield, slowing or stopping if you must, to a pedestrian on your half of the roadway or approaching closely enough from the other half to be in danger. Pedestrians carry duties too - they may not step suddenly off a curb into the path of a vehicle that is too close to stop.",
        trap:
          "The absence of paint is the trap. At an intersection there is an unmarked crosswalk whether or not anyone painted it.",
        excerptKey: "crosswalk-yield",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Pavement Markings",
        sourceUrl: hb(23),
      },
      {
        id: "nh_s4_32",
        topic: "signs",
        question:
          "What information do speed limit signs give, in the manual's own terms?",
        choices: [
          "The maximum legal speed in ideal conditions",
          "The speed most drivers travel on that road",
          "A recommended speed you may exceed by 5 mph",
          "The speed at which the road was designed to be safe in any weather",
        ],
        correctIndex: 0,
        explanation:
          "The maximum legal speed allowed in ideal conditions. The manual uses the words ideal conditions, which is the qualification that makes the basic rule of RSA 265:60, I bite in bad weather.",
        context:
          "Speed limit signs are black and white regulatory signs, which is the color combination the manual reserves for a law or rule of the road. An advisory speed on a yellow warning sign beneath a curve symbol is a different thing: it is guidance about that curve rather than a posted limit.",
        trap:
          "\"Maximum in ideal conditions\" means it is not automatically lawful in rain, fog or ice. That is not a technicality - it is how the statute is worded.",
        excerptKey: "speed-limit-signs",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Examples of Regulatory Signs",
        sourceUrl: hb(22),
      },
      {
        id: "nh_s4_33",
        topic: "emergencies",
        question:
          "A vehicle suddenly comes at you head-on. Which way does the manual tell you to steer?",
        choices: [
          "To the left, into the lane they have left empty",
          "Whichever direction has more room, but never to the left",
          "Straight ahead and brake",
          "To the left if the shoulder on the right is soft",
        ],
        correctIndex: 1,
        explanation:
          "Steer where you want to go while avoiding other traffic, and the manual adds an absolute: never swerve to the left to avoid a crash. Going left puts you into the lane the other driver will use when they correct.",
        context:
          "Its swerving procedure is short. Get a good grip with both hands, steer around the problem, and once it has cleared, steer back the other way to straighten out and regain control. Swerving is one of three collision-avoidance options in the manual alongside braking and accelerating.",
        trap:
          "The empty oncoming lane looks like the escape route. It is where the other driver is heading the moment they realize their mistake.",
        excerptKey: "swerving",
        sourceLabel: "New Hampshire Driver's Manual - Section 10 Driving Emergencies, Swerving",
        sourceUrl: hb(34),
      },
      {
        id: "nh_s4_34",
        topic: "parking",
        question:
          "Which of these is illegal in New Hampshire even where nothing is marked?",
        choices: [
          "Parking facing the wrong way on a quiet street",
          "Parking alongside another parked vehicle",
          "Parking on grass beside a rural road",
          "Parking in a hotel forecourt overnight",
        ],
        correctIndex: 1,
        explanation:
          "Double parking is on the manual's list of places you may not park even where nothing is marked. RSA 265:69, I(a) words it as stopping, standing or parking on the roadway side of a vehicle already stopped or parked at the curb.",
        context:
          "The same list covers a sidewalk, an intersection, a crosswalk, a bridge, a highway tunnel, in front of a driveway, anywhere that blocks traffic or creates a hazard, and any street where there is no clearance for other vehicles to pass between you and the far curb. None of these depend on a sign.",
        trap:
          "Hazard lights do not convert double parking into a legal stop. The prohibition is about the space you take, not about how visible you are.",
        excerptKey: "no-parking-list",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 General Driving and Parking, Parking",
        sourceUrl: hb(28),
      },
      {
        id: "nh_s4_35",
        topic: "licensing",
        question:
          "Which subjects does New Hampshire law require the license knowledge test to cover?",
        choices: [
          "Only signs and signals",
          "Distracted driving, driving under the influence, and driving in poor weather conditions",
          "Vehicle maintenance and insurance",
          "The subjects are left entirely to the Director's discretion",
        ],
        correctIndex: 1,
        explanation:
          "RSA 263:6 names three subjects that every license examination must include: distracted driving, driving under the influence, and driving during poor weather conditions.",
        context:
          "The manual's own description is broader - 40 multiple-choice questions on the rules of the road and general driving conditions - but the statutory list tells you which three topics are guaranteed a place. Sections 3, 5 and 10 of the manual are where those three live.",
        trap:
          "Signs are heavily tested and are not one of the three the statute guarantees. Skipping the impairment and weather sections is the gamble that loses.",
        excerptKey: "rsa-exam-subjects",
        sourceLabel: "New Hampshire RSA 263:6 - Examination",
        sourceUrl: rsa("263:6"),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The rules New Hampshire learners report getting wrong, the numbers the manual leaves to the statutes, and the places where a rule from another state's book is quietly wrong here.",
    questions: [
      {
        id: "nh_s5_01",
        topic: "licensing",
        question:
          "You hold a valid learner's permit from Massachusetts and move to New Hampshire at 16. What can you do with it?",
        choices: [
          "Nothing - New Hampshire does not honor or transfer permits from other states",
          "Exchange it for a New Hampshire permit",
          "Practice drive under the permit's Massachusetts conditions",
          "Use it for six months, then apply for a New Hampshire license",
        ],
        correctIndex: 0,
        explanation:
          "The DMV states it plainly: New Hampshire does not honor or transfer driving permits from other states. There is no New Hampshire permit to exchange it for either, because the state issues none.",
        context:
          "What replaces it is the practice-driving exception. A person of at least 15 and a half who holds no license may drive while being taught, accompanied by a parent, legal guardian or other licensed responsible adult aged 25 or older sitting in the front seat, carrying proof of age, in a non-commercial vehicle. Anyone under 18 must complete an approved driver education course before applying for the license itself.",
        trap:
          "A permit from a neighboring state feels like it should at least count for something. It is worth nothing here, in either direction.",
        excerptKey: "web-no-permit-transfer",
        sourceLabel: "NH DMV - Driver Licensing Requirements for Minors",
        sourceUrl: MINORS,
        commonlyMissed: true,
      },
      {
        id: "nh_s5_02",
        topic: "licensing",
        question:
          "A 19-year-old New Hampshire Youth Operator pays a speeding fine and assumes that is the end of it. What actually happens?",
        choices: [
          "Nothing further, once the fine is paid",
          "Three demerit points and no other consequence",
          "The license is suspended automatically for 90 days",
          "The DMV may still suspend the license after a hearing, for 20 to 40 days on a first offense",
        ],
        correctIndex: 3,
        explanation:
          "Paying the court is not the end. Under RSA 263:14 the Director of Motor Vehicles may revoke or suspend an original license held by anyone under 20 after a hearing, and the first-offense range is a minimum of 20 days and not more than 40.",
        context:
          "The ladder continues at 45 to 90 days for a second conviction and 90 to 180 for a third or subsequent, with an approved in-person driver attitude program required for reinstatement after the third. Two or more speeding tickets in the first two years of the license also bring a three-year SR-22 insurance requirement.",
        trap:
          "New Hampshire learners describe this as the surprise of the whole process: the ticket goes to the court, the suspension comes separately from the DMV, and it reaches to 20, not 18.",
        excerptKey: "youth-suspension-ladder",
        sourceLabel: "New Hampshire Driver's Manual - Section 2 Youth Operator \"Under 20\" Law",
        sourceUrl: hb(6),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_03",
        topic: "safety",
        question:
          "Your adult passenger is not wearing a seat belt on a New Hampshire road. What is the legal position?",
        choices: [
          "You are liable for a fine as the driver",
          "The passenger is liable for a fine",
          "Both of you are liable",
          "Neither - New Hampshire's belt requirement stops at 18",
        ],
        correctIndex: 3,
        explanation:
          "New Hampshire requires safety restraints only for those under 18. There is no adult seat belt offense here, which makes New Hampshire unique among the states.",
        context:
          "The manual immediately recommends belts for passengers of all ages anyway, and cites the National Highway Traffic Safety Administration's finding that half the passenger vehicle occupants killed in 2021 were unrestrained. The under-18 rule is real and enforceable in both directions: a driver may not carry an unbelted passenger under 18, and a driver under 18 must be belted.",
        trap:
          "The absence of an adult law leads people to answer that there is no belt law at all. There is, and it covers every occupant under 18.",
        excerptKey: "belts-under-18",
        sourceLabel: "New Hampshire Driver's Manual - Section 4 Before Driving, Using Safety Belts",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_04",
        topic: "rules",
        question:
          "What is the fine for following another vehicle more closely than is reasonable and prudent in New Hampshire?",
        choices: ["$50", "$100", "$250", "There is no fixed fine"],
        correctIndex: 1,
        explanation:
          "One hundred dollars, set by RSA 265:25, IV. The manual says the conduct is a violation punishable by a fine without giving the figure.",
        context:
          "The offense is defined by conditions rather than by a number of seconds: too closely for the speeds involved and for the traffic and condition of the road. The manual's four-second guideline is how you stay clear of it in good conditions, and it explicitly expects more space on slippery roads, at night, in fog and behind large vehicles.",
        trap:
          "Four seconds is guidance, not the legal test. On black ice a four-second gap can still be unreasonable and prudent is still the standard.",
        excerptKey: "rsa-following-fine-100",
        sourceLabel: "New Hampshire RSA 265:25 - Following Too Closely",
        sourceUrl: rsa("265:25"),
      },
      {
        id: "nh_s5_05",
        topic: "impairment",
        question:
          "What is the fine for a first hands-free violation in New Hampshire, and what happens on a second within 24 months?",
        choices: [
          "$50 first, $100 second",
          "$100 first, $250 second",
          "$250 first, $500 second",
          "A warning first, then $100",
        ],
        correctIndex: 1,
        explanation:
          "One hundred dollars plus penalty assessment for a first offense, $250 for a second, and $500 for any further offense within a 24-month period. RSA 265:79-c sets the whole ladder.",
        context:
          "The prohibited conduct is broad: reading, composing, viewing or posting a message, holding a conversation, asking a device for the internet, entering a destination into a GPS, or typing into any portable device, while driving or while temporarily halted in traffic. Holding a phone near your ear while the vehicle is moving is presumed to be a call. A driver who has pulled fully off the road where it is legal to stop is not driving for this purpose.",
        trap:
          "Being stopped at a light is explicitly covered. Only pulling out of traffic and stopping takes you outside the section.",
        excerptKey: "rsa-phone-fine",
        sourceLabel: "New Hampshire RSA 265:79-c - Use of Mobile Electronic Devices While Driving",
        sourceUrl: rsa("265:79-c"),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_06",
        topic: "speed",
        question:
          "You are on an ordinary paved two-lane road in northern New Hampshire, outside any district, with nothing posted. What may you drive?",
        choices: [
          "Up to 55 mph, subject to the basic rule",
          "Up to 65 mph, because it is outside a district",
          "Up to 45 mph in every case",
          "Up to 35 mph, because unposted roads default to the rural residence figure",
        ],
        correctIndex: 0,
        explanation:
          "Fifty-five is the statutory default for locations that are not districts and not interstates or turnpikes. RSA 265:60, II(e) sets it, and it applies whether or not anything is posted.",
        context:
          "The basic rule sits above it: no speed greater than is reasonable and prudent for the conditions and the actual and potential hazards. The manual's own phrasing, \"45 or 55 miles per hour in other locations\", collapses two statutory figures - 45 belongs to an unimproved rural highway as defined in RSA 259:116-a, and 55 to everything else.",
        trap:
          "Reading only the manual leaves you guessing between 45 and 55. On an ordinary paved road, 55 is the answer, and only the statute says so.",
        excerptKey: "rsa-speed-55-default",
        sourceLabel: "New Hampshire RSA 265:60 - Basic Rule and Maximum Limits",
        sourceUrl: rsa("265:60"),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_07",
        topic: "sharing",
        question:
          "What does New Hampshire's Move Over law, Sherrill's Law, cost on a first offense?",
        choices: [
          "$75 plus penalty assessment",
          "$250 plus penalty assessment",
          "$500 plus penalty assessment",
          "A license suspension of 30 days",
        ],
        correctIndex: 0,
        explanation:
          "Seventy-five dollars plus penalty assessment for a first offense, and $250 plus penalty assessment for a subsequent offense within a 12-month period. RSA 265:37-a gives the figures; the manual mentions the fines without naming them.",
        context:
          "The duty is triggered by a wide list of situations: a fire, collision, disaster, utility work or other emergency partly or wholly blocking a highway, a police traffic stop, or any stopped vehicle displaying hazard lights, flares, cones or caution signs. What you owe is a reduced speed, a wide berth where practical without endangering oncoming traffic, obedience to anyone directing traffic, and vacating any blocked lane as soon as possible.",
        trap:
          "The law is not limited to blue lights. A stopped car with its hazard lights on is enough to trigger it.",
        excerptKey: "rsa-move-over-fine",
        sourceLabel: "New Hampshire RSA 265:37-a - Motorist Duties When Approaching Highway Emergencies",
        sourceUrl: rsa("265:37-a"),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_08",
        topic: "safety",
        question:
          "A 20-month-old child rides in your car. What does New Hampshire law require?",
        choices: [
          "A forward-facing child restraint",
          "A booster seat",
          "An adult seat belt is enough at that age",
          "A rear-facing child restraint",
        ],
        correctIndex: 3,
        explanation:
          "RSA 265:107-a, I-c requires a rear-facing child restraint for any passenger under 2 years of age. The manual does not print this rule at all - only the statute has it.",
        context:
          "The manual gives the next stage: a child under 7 who is also under 57 inches tall must be in a federally approved child passenger restraint. Above that, the belt requirement for anyone under 18 takes over. Each restraint must be used according to its manufacturer's instructions, including height and weight limits and expiry dates.",
        trap:
          "Turning a toddler forward-facing on their first birthday is common practice and is a year early under New Hampshire law.",
        excerptKey: "rsa-child-rear-facing",
        sourceLabel: "New Hampshire RSA 265:107-a - Child Passenger Restraints Required",
        sourceUrl: rsa("265:107-a"),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_09",
        topic: "rightOfWay",
        question:
          "The traffic signal at a four-way junction has failed and shows nothing at all. What is the rule?",
        choices: [
          "Treat it as an uncontrolled intersection or a four-way stop, and yield to the vehicle on your right",
          "The busier road has priority",
          "Proceed as though on a green",
          "Alternate one car at a time from each direction, starting with the left",
        ],
        correctIndex: 0,
        explanation:
          "RSA 265:9, V says a driver facing a non-operational traffic control device obeys the rules for intersections without controls or with four-way stop signs, including yielding to the vehicle on the right.",
        context:
          "The statute lists the other rules that come back into force at the same time: yield when turning left, yield to a vehicle already in the intersection, yield when entering from a private road or driveway, yield to emergency vehicles, and yield to pedestrians in crosswalks. The manual says nothing about dead signals, which is why this one has to come from the law.",
        trap:
          "Alternating one at a time is a courtesy convention that works in practice and is not the legal rule. The right-hand rule is.",
        excerptKey: "rsa-dead-signal",
        sourceLabel: "New Hampshire RSA 265:9 - Obedience to Any Required Traffic Control Devices",
        sourceUrl: rsa("265:9"),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_10",
        topic: "licensing",
        question:
          "What score do you need to pass a New Hampshire knowledge exam?",
        choices: [
          "70 percent",
          "75 percent",
          "80 percent",
          "85 percent",
        ],
        correctIndex: 2,
        explanation:
          "Eighty percent. The DMV's testing page says all knowledge exams require a passing grade of 80 percent, which on the 40-question license exam means 32 correct.",
        context:
          "The manual gives the same result from the other direction: the test ends automatically once more than 8 questions have been answered incorrectly, and 8 wrong out of 40 is exactly 80 percent. Exceeding the 40-minute limit also terminates the test, and a failed exam cannot be retaken for ten calendar days.",
        trap:
          "New Hampshire learners repeat 30 out of 40 to each other. That is 75 percent and it fails.",
        excerptKey: "web-pass-80",
        sourceLabel: "NH DMV - Driver Licensing Testing Requirements",
        sourceUrl: TESTING,
        commonlyMissed: true,
      },
      {
        id: "nh_s5_11",
        topic: "parking",
        question:
          "What is the minimum fine for parking in a space reserved for a person with a walking disability in New Hampshire?",
        choices: [
          "$50 for a first offense",
          "$100",
          "$250",
          "$500",
        ],
        correctIndex: 3,
        explanation:
          "A minimum of $500 plus penalty assessment, half of which goes to the town or city where the violation happened. RSA 265:69, I(j) sets it.",
        context:
          "Parking in or overlapping into the striped access aisle beside such a space is a separate offense with a minimum of $100 for a first offense and $200 for each subsequent one. The manual explains why the aisle matters: a van with a lift or ramp can need the whole eight feet to get a wheelchair in or out. New Hampshire law also lets a person with a walking disability, or their driver, submit a photo of an offending vehicle with a sworn statement to the local police.",
        trap:
          "The aisle looks like unused pavement and carries its own fine. Overlapping into it by a foot is enough.",
        excerptKey: "rsa-park-accessible-fine",
        sourceLabel: "New Hampshire RSA 265:69 - Stopping, Standing or Parking Prohibited in Specified Places",
        sourceUrl: rsa("265:69"),
      },
      {
        id: "nh_s5_12",
        topic: "sharing",
        question:
          "You pass a stopped school bus on the right while its red lights are flashing. What is the penalty?",
        choices: [
          "The same $150 as passing it on the left",
          "A warning for a first offense",
          "$500 plus penalty assessment, and a license suspension of up to 30 days",
          "Three demerit points only",
        ],
        correctIndex: 2,
        explanation:
          "Passing on the right is treated far more seriously than the ordinary failure to stop. RSA 265:54, IV sets $500 plus penalty assessment and a suspension of up to 30 days for a first offense, and a court appearance with a $500 to $1,200 fine for a second.",
        context:
          "The ordinary offense - failing to stop at least 25 feet away and stay stopped - is $150 plus penalty assessment for a first offense and $250 to $1,000 after that, with a 30-day suspension available for a second. Testimony from the bus driver or another witness is enough to prove the owner was driving unless it is rebutted.",
        trap:
          "The right side is where the children are. That is why the penalty is more than three times the one for passing on the left.",
        excerptKey: "rsa-school-bus-right",
        sourceLabel: "New Hampshire RSA 265:54 - Overtaking and Passing School Bus",
        sourceUrl: rsa("265:54"),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_13",
        topic: "rules",
        question:
          "Five cars are stacked up behind a school bus on a New Hampshire road. What does the law require of the bus driver?",
        choices: [
          "Nothing - following traffic must wait",
          "To pull over where conditions and space permit and let them pass",
          "To turn on the flashing amber lights",
          "To increase speed to the posted limit",
        ],
        correctIndex: 1,
        explanation:
          "RSA 265:54, II requires the bus driver to pull over and let following vehicles pass whenever road conditions and space permit and five or more vehicles have queued up behind.",
        context:
          "The statute puts an immediate limit on how you may take the invitation: a driver passing the bus must do it without driving any part of the vehicle to the left of, or across, an unbroken painted line. So the bus pulling over does not create a passing zone where the markings do not already allow one.",
        trap:
          "Being waved past is not permission to cross a solid line. The bus can only offer you the road; it cannot change the markings.",
        excerptKey: "rsa-school-bus-five",
        sourceLabel: "New Hampshire RSA 265:54 - Overtaking and Passing School Bus",
        sourceUrl: rsa("265:54"),
      },
      {
        id: "nh_s5_14",
        topic: "emergencies",
        question:
          "You are involved in a crash in New Hampshire with no injuries and roughly $1,500 of combined damage. Police did not attend. What must you do?",
        choices: [
          "Nothing, because nobody was hurt",
          "Notify your insurer only",
          "File a report with the DMV within 30 days",
          "File an Operator Accident Report with the DMV within 15 days",
        ],
        correctIndex: 3,
        explanation:
          "Combined property damage over $1,000 triggers the reporting duty even with no injuries, and the deadline is 15 days. The form is the Operator Accident Report, DSMV 400.",
        context:
          "If a police officer had investigated the crash, that report would satisfy the requirement and you would not have to file separately. The manual recommends filing whenever you are uncertain whether the combined damage passes $1,000. If injury stops you completing it, a passenger or the vehicle's owner may file for you.",
        trap:
          "It is combined damage across every vehicle involved, not your own repair bill. Two moderately dented cars pass the threshold easily.",
        excerptKey: "crash-report-15-days",
        sourceLabel: "New Hampshire Driver's Manual - Section 9 Reporting an accident",
        sourceUrl: hb(32),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_15",
        topic: "impairment",
        question:
          "New Hampshire has no compulsory motor vehicle insurance law. What follows if you cause a crash while uninsured?",
        choices: [
          "Nothing beyond the ordinary claim",
          "A fine, and the state pays the damages",
          "Your license is revoked for one year",
          "You may be personally liable for all property damage and medical bills, and your privileges are suspended until a settlement is reached",
        ],
        correctIndex: 3,
        explanation:
          "The absence of a mandatory insurance law does not remove liability. If you cannot pay the damage and medical bills arising from an uninsured crash, the law requires the DMV to suspend your driving privileges until a settlement is reached.",
        context:
          "New Hampshire may also require an SR-22 certificate filed by an insurer for several years afterwards. The same requirement follows several convictions: driving under the influence, failing to stop and report after a crash, homicide arising out of the operation of a motor vehicle, a second reckless driving offense, and a just cause hearing on a driving record.",
        trap:
          "\"No insurance required\" gets remembered as \"no consequences\". The consequence is personal liability plus a suspension that lasts until you have paid.",
        excerptKey: "no-mandatory-insurance",
        sourceLabel: "New Hampshire Driver's Manual - Section 9 Financial Responsibility",
        sourceUrl: hb(32),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_16",
        topic: "signs",
        question:
          "A road sign is white with black lettering and rectangular. What kind of message is it?",
        choices: [
          "A warning about conditions ahead",
          "A law or rule of the road",
          "Guidance towards a service",
          "Advisory information about a curve",
        ],
        correctIndex: 1,
        explanation:
          "White is the color the manual assigns to a law or rule of the road. A speed limit sign is the everyday example, and the rectangle is the shape for traffic regulations or directions.",
        context:
          "The regulatory family also includes lane-use signs, turning restrictions and one-way signs, and some carry a red circle with a red slash to prohibit an action. Do Not Enter, Wrong Way and No U-Turn are all in this group, along with the sign that specifically prohibits a right turn on red.",
        trap:
          "Yellow means warning and white means rule. The advisory speed under a curve sign is on yellow, so it is guidance rather than a limit.",
        excerptKey: "regulatory-signs",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Regulatory Signs",
        sourceUrl: hb(22),
      },
      {
        id: "nh_s5_17",
        topic: "speed",
        question:
          "School is out at 2:30 pm. Until when does the reduced school-zone limit apply?",
        choices: ["2:30 pm", "2:45 pm", "3:15 pm", "3:30 pm"],
        correctIndex: 2,
        explanation:
          "Forty-five minutes after closing, so 3:15 pm. The morning half works the same way, running from 45 minutes before opening until the opening itself.",
        context:
          "The limit during those windows is 10 mph below the usual posted limit, not a fixed number. The manual separately tells you to obey the school zone limit whenever the lights are flashing or children are present, and to stop and yield when a crossing guard signals you.",
        trap:
          "The zone does not switch off when the bell rings. Forty-five minutes is a long tail, and it is when the children are actually on the sidewalk.",
        excerptKey: "school-zone-speed",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Speed Management",
        sourceUrl: hb(15),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_18",
        topic: "rightOfWay",
        question:
          "You are turning left out of a shopping center driveway. A pedestrian is walking along the sidewalk you must cross. Who goes first?",
        choices: [
          "You do, if you have already started to move",
          "The pedestrian, and you must stop before crossing the sidewalk",
          "Whoever is closer to the roadway edge",
          "You do, because the sidewalk is not a crosswalk",
        ],
        correctIndex: 1,
        explanation:
          "RSA 265:53 requires a driver emerging from an alley, driveway or building in a business or residence district to stop immediately before driving onto the sidewalk, and to yield to any pedestrian as necessary to avoid a collision.",
        context:
          "Only then do you deal with the roadway, where you yield to all approaching vehicles before entering. The manual gives the shorter version - yield to drivers on a public highway when entering from a driveway or private road - and lists pedestrians and cyclists still in an intersection among those you yield to generally.",
        trap:
          "The sidewalk is a separate stop before the road. Rolling to the roadway edge to see past a parked car has already crossed it.",
        excerptKey: "rsa-emerging-driveway",
        sourceLabel: "New Hampshire RSA 265:53 - Emerging From Alley, Driveway or Building",
        sourceUrl: rsa("265:53"),
      },
      {
        id: "nh_s5_19",
        topic: "safety",
        question:
          "How long does the manual say an alert driver's perception time is?",
        choices: [
          "About a tenth of a second",
          "About half a second",
          "Three quarters of a second to a second",
          "About two seconds",
        ],
        correctIndex: 2,
        explanation:
          "Three quarters of a second to one second, and reaction time is the same again. That is up to two seconds before the brakes even start working.",
        context:
          "The manual splits total stopping distance into speed, perception time, reaction time and braking distance. Braking alone from 50 mph on dry pavement is about 158 feet; the perception and reaction pair adds roughly another 110 at that speed. And doubling your speed multiplies the stopping distance by about four.",
        trap:
          "People assume perception is instantaneous and everything happens in the brakes. Half of a highway-speed stop is over before the pedal moves.",
        excerptKey: "perception-time",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Stopping Distance",
        sourceUrl: hb(16),
      },
      {
        id: "nh_s5_20",
        topic: "rules",
        question:
          "You are on a two-lane road with a solid yellow line on your side and a cyclist is riding slowly ahead. May you cross the line to pass?",
        choices: [
          "No, under no circumstances",
          "Only if the cyclist waves you past",
          "Only above 30 mph",
          "Yes, if the movement can be made safely - the statute lists it as an exception",
        ],
        correctIndex: 3,
        explanation:
          "RSA 265:22 lists passing a pedestrian, motorized wheelchair, mobility scooter, bicycle, skateboard or foot-scooter among the exceptions to the unbroken-line rule, provided the movement can be made safely.",
        context:
          "The other exceptions are an emergency, getting into or out of a side road or property, having an unobstructed view to the end of the unbroken line, and complying with the Move Over duty in RSA 265:37-a. Outside those, crossing an unbroken line in your own lane is a $100 violation. The three-foot passing clearance still applies once you are alongside.",
        trap:
          "This is a New Hampshire-specific exception added in 2021 and it is not in most drivers' mental model. It also does not create a general license to pass - the movement still has to be safe.",
        excerptKey: "rsa-solid-line-bicycle",
        sourceLabel: "New Hampshire RSA 265:22 - Highway Markings",
        sourceUrl: rsa("265:22"),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_21",
        topic: "licensing",
        question:
          "A Youth Operator under 18 has held the license for four months. Who may ride with them?",
        choices: [
          "Any number of passengers, if all are belted",
          "One non-family passenger under 25, unless a licensed adult of at least 25 is along",
          "Only family members, for the first year",
          "Nobody under 21",
        ],
        correctIndex: 1,
        explanation:
          "During the first six months of holding the license, a driver under 18 may not carry more than one passenger under 25 who is not a family member, unless a licensed responsible adult of at least 25 is in the vehicle.",
        context:
          "Two other restrictions run alongside it while the holder is under 18: no driving between 1:00 am and 4:00 am, and never more passengers than there are seat belts or safety restraints. Those two have no six-month limit. The passenger restriction is the one that expires.",
        trap:
          "The limit counts passengers under 25 who are not family, not passengers under 18. An older cousin of 22 counts against it and a younger sibling does not.",
        excerptKey: "youth-passengers",
        sourceLabel: "New Hampshire Driver's Manual - Section 2 Specific Restrictions for Youth Operators",
        sourceUrl: hb(4),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_22",
        topic: "signals",
        question:
          "Which movement does New Hampshire allow on a steady red light after stopping?",
        choices: [
          "A right turn, unless a sign prohibits it",
          "A right turn, and a left from a one-way onto a one-way",
          "Any turn, if the way is clear",
          "No turn at all without a green arrow",
        ],
        correctIndex: 0,
        explanation:
          "Right on red only. The manual gives one exception to the red signal and it is a right turn where no sign prohibits it.",
        context:
          "That is narrower than several neighboring states, which also permit a left turn from a one-way street onto another one-way street on the same terms. New Hampshire's manual does not carve that out. A red arrow removes the permission entirely for the movement it points to.",
        trap:
          "Left on red from one-way to one-way is lawful in most of the country and is not in the New Hampshire manual. Do not import it.",
        excerptKey: "right-on-red",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signals",
        sourceUrl: hb(20),
      },
      {
        id: "nh_s5_23",
        topic: "sharing",
        question:
          "How much clearance does New Hampshire law presume is reasonable when passing a cyclist at 50 mph?",
        choices: [
          "3 feet",
          "4 feet",
          "5 feet",
          "6 feet",
        ],
        correctIndex: 2,
        explanation:
          "Five feet. The base figure is three feet at 30 mph or less, with one additional foot for every 10 mph above 30 - so four feet at 40 and five at 50.",
        context:
          "RSA 265:143-a frames the duty as ensuring the safety and protection of the cyclist by leaving a reasonable and prudent distance; the footage is what the law presumes is reasonable rather than a hard floor. Bicycles are vehicles on New Hampshire roads under RSA 265:143, with the same rights and duties as any driver.",
        trap:
          "Three feet is the number everyone remembers and it is only the figure for 30 mph or less. The step-up is the part that gets missed.",
        excerptKey: "rsa-bicycle-3-feet",
        sourceLabel: "New Hampshire RSA 265:143-a - Drivers to Exercise Due Care When Approaching Bicycle",
        sourceUrl: rsa("265:143-a"),
      },
      {
        id: "nh_s5_24",
        topic: "parking",
        question:
          "How close to the nearest rail of a railroad crossing may you park?",
        choices: ["15 feet", "25 feet", "50 feet", "100 feet"],
        correctIndex: 2,
        explanation:
          "Fifty feet from the nearest rail. It sits in the manual's list of places you may not park even where nothing is marked, and in RSA 265:69, III(a).",
        context:
          "Do not confuse it with the stopping window when a train is coming, which is 15 to 50 feet from the nearest rail. The parking distance is a single figure with no lower bound; the stopping window is a range, and its purpose is different - to keep you clear of the train's overhang while still letting you see down the track.",
        trap:
          "Fifteen and 50 both attach to railroad crossings for different reasons. Fifteen is how close you may stop for a train; 50 is how close you may park.",
        excerptKey: "rsa-park-railroad-50",
        sourceLabel: "New Hampshire RSA 265:69 - Stopping, Standing or Parking Prohibited in Specified Places",
        sourceUrl: rsa("265:69"),
      },
      {
        id: "nh_s5_25",
        topic: "emergencies",
        question:
          "What has to be true before a New Hampshire driver can be declared a habitual offender, and what follows?",
        choices: [
          "One serious conviction, and a 90-day suspension",
          "A record with the number of valid convictions the law requires, a hearing, and revocation of 1 to 4 years",
          "Three speeding tickets, and mandatory retesting",
          "A single crash with injuries, and a 6-month suspension",
        ],
        correctIndex: 1,
        explanation:
          "The Director of Motor Vehicles looks at whether the record contains the number of valid convictions the law requires; if it does, the person must appear for a hearing, and if declared a habitual offender the Director revokes their privileges for one to four years.",
        context:
          "Driving after that declaration carries a prison term of not less than one year and up to five. The manual frames the whole doctrine as being about drivers who by conduct and record have shown indifference to the safety of others and to the orders of courts and agencies.",
        trap:
          "It is not a single offense and it is not automatic. The hearing is the step people miss, and skipping it does not stop the revocation.",
        excerptKey: "habitual-offender",
        sourceLabel: "New Hampshire Driver's Manual - Section 2 Habitual Offenders",
        sourceUrl: hb(6),
      },
      {
        id: "nh_s5_26",
        topic: "impairment",
        question:
          "The manual gives one sentence about how long alcohol takes to leave the body. What is it?",
        choices: [
          "Each ounce takes about 15 minutes",
          "Each ounce takes about half an hour",
          "It varies too much to state",
          "Each ounce takes about an hour",
        ],
        correctIndex: 3,
        explanation:
          "About an hour per ounce consumed. It is a rough figure and the manual offers it in the same paragraph as its point that nothing but time reduces the effects.",
        context:
          "Coffee, food, fresh air, exercise and cold showers can make a person feel more alert without countering the alcohol at all. Impairment starts with the first drink, and with one or more drinks in the bloodstream a person can be impaired enough to be arrested for driving under the influence.",
        trap:
          "An hour per ounce is not an hour per drink. A large pour can be well over an ounce of alcohol.",
        excerptKey: "alcohol-one-hour",
        sourceLabel: "New Hampshire Driver's Manual - Section 3 Effects of Alcohol and Other Impairing Drugs",
        sourceUrl: hb(9),
      },
      {
        id: "nh_s5_27",
        topic: "signs",
        question:
          "New Hampshire's manual lists nine sign colors. What does purple mean?",
        choices: [
          "E-ZPass",
          "A school zone",
          "A hospital or emergency service",
          "A seasonal road closure",
        ],
        correctIndex: 0,
        explanation:
          "Purple is E-ZPass. New Hampshire runs tolls on the interstates and both turnpikes, so a purple marker is telling you that lane is for transponders and not for cash.",
        context:
          "It is the last entry in a nine-color key most states print with seven: red for prohibition, green for direction or guidance, blue for driver services, yellow for general warning, white for a law or rule of the road, orange for road repair work, brown for tourist and recreation guidance, pink for incident management, and purple for E-ZPass. In a cash-only lane you come to a complete stop at a staffed booth; in an E-ZPass lane you obey the posted speed and do not stop. Never back up or reverse direction at a toll plaza, and do not get out of the vehicle.",
        trap:
          "Purple and pink are the two additions most drivers have never had to learn. Pink is an incident, purple is a toll transponder, and neither is a warning about the road itself.",
        excerptKey: "sign-colors",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signs",
        sourceUrl: hb(21),
      },
      {
        id: "nh_s5_28",
        topic: "rules",
        question:
          "How long does the manual say a loaded truck at 55 mph needs to stop, under ideal conditions?",
        choices: [
          "About 200 feet",
          "About 250 feet",
          "A minimum of 335 feet",
          "About 500 feet",
        ],
        correctIndex: 2,
        explanation:
          "A minimum of 335 feet - more than one and a half times what a car needs. That is with good tires, properly adjusted brakes and ideal conditions.",
        context:
          "The manual uses the figure to explain why you must not pull out in front of a large vehicle or cut into the lane ahead of one. Its rule for getting back in after passing is a visual one: look for the whole front of the truck in your rear-view mirror before you move over, and then keep your speed up.",
        trap:
          "335 feet is more than the length of a football field. Merging in front of a truck at a gap that feels adequate for a car is well inside that.",
        excerptKey: "truck-335-feet",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, The No-Zone",
        sourceUrl: hb(39),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_29",
        topic: "safety",
        question:
          "Which is the manual's stated purpose for a head restraint?",
        choices: [
          "Comfort on long journeys",
          "To keep the driver's head clear of the roof",
          "To prevent whiplash in a crash",
          "To support the shoulder harness",
        ],
        correctIndex: 2,
        explanation:
          "Head restraints are designed to prevent whiplash in the event of an accident. Adjust it so it touches the back of your head rather than sitting below your ears.",
        context:
          "It belongs with the rest of the pre-drive setup: seat upright with feet on the floor, foot able to pivot from brake to accelerator with the heel down, top of the wheel no higher than your shoulders and below chin level, and about 10 inches between your chest and the wheel. Slouching reduces how well the whole restraint system works.",
        trap:
          "Set low, the restraint becomes a pivot for the head rather than a support for it. That is worse than useless in a rear-end impact.",
        excerptKey: "head-restraints",
        sourceLabel: "New Hampshire Driver's Manual - Section 4 Before Driving, Adjusting Seat",
        sourceUrl: hb(11),
      },
      {
        id: "nh_s5_30",
        topic: "signals",
        question:
          "A flagger in a work zone directs you to stop, but the temporary signal ahead is showing green. What do you do?",
        choices: [
          "Follow the green signal",
          "Follow the flagger",
          "Stop and wait for a police officer",
          "Proceed slowly past both",
        ],
        correctIndex: 1,
        explanation:
          "The person directing traffic wins. The manual includes highway personnel among those whose directions are traffic control devices, and says drivers must follow the instructions of a person controlling traffic in a work zone.",
        context:
          "The same principle covers a police officer, who overrules any traffic light or sign, and a school crossing guard. RSA 265:9, I frames it as a duty to obey any traffic control device unless otherwise directed by a traffic or police officer. Work zones also carry doubled fines, marked before you enter.",
        trap:
          "A green light feels more authoritative than a person with a paddle. The flagger can see the closed lane and the equipment; the signal cannot.",
        excerptKey: "work-zone-flagger",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Work Zone Signs",
        sourceUrl: hb(23),
      },
      {
        id: "nh_s5_31",
        topic: "licensing",
        question:
          "Your out-of-state license expired 14 months ago and you have just moved to New Hampshire. What testing is required?",
        choices: [
          "Vision test only",
          "Vision and knowledge tests",
          "None, if the license was valid when you moved",
          "Vision, knowledge and road tests",
        ],
        correctIndex: 3,
        explanation:
          "All three. A current out-of-state license needs only a vision test, but once it has been expired for more than one year the applicant must pass the vision, knowledge and road tests.",
        context:
          "The 60-day new-resident deadline runs regardless, and New Hampshire's one-license rule requires you to surrender every valid license from any other jurisdiction when you apply. An application will not be accepted at all while your privileges are under suspension or revocation anywhere else.",
        trap:
          "The one-year mark is what turns a ten-minute eye test into three tests, an appointment and a road test vehicle.",
        excerptKey: "out-of-state-expired",
        sourceLabel: "New Hampshire Driver's Manual - Section 2 Out of State Driver's License",
        sourceUrl: hb(5),
        commonlyMissed: true,
      },
      {
        id: "nh_s5_32",
        topic: "rightOfWay",
        question:
          "Under RSA 265:16, a vehicle traveling slower than the flow of traffic belongs where?",
        choices: [
          "In the middle lane of a three-lane road",
          "Anywhere, provided the speed limit is not exceeded",
          "In the right-hand lane, or as close as practicable to the right edge",
          "In the left lane, so faster traffic can pass on the right",
        ],
        correctIndex: 2,
        explanation:
          "The right-hand lane available for traffic, or as close as practicable to the right-hand curb or edge of the roadway. The exceptions are while overtaking and passing, or while preparing to turn left.",
        context:
          "The same section adds that a vehicle should not be operated continuously in the left lane of a multilane roadway when doing so impedes other traffic at or below the posted speed limit. The manual's version is that on multi-lane roads the left-most lane is intended for passing slower vehicles.",
        trap:
          "Doing the posted limit does not entitle you to the left lane. The statute makes impeding the flow the test, not your speedometer.",
        excerptKey: "rsa-left-lane-camping",
        sourceLabel: "New Hampshire RSA 265:16 - Drive on Right Side of Roadway; Exceptions",
        sourceUrl: rsa("265:16"),
      },
      {
        id: "nh_s5_33",
        topic: "speed",
        question:
          "Snow slides off your roof onto the car behind you on a New Hampshire highway. Under what offense can you be charged?",
        choices: [
          "Negligent driving, with a fine of $250 to $500 for a first offense",
          "Littering",
          "An unsecured load, with a $100 fine",
          "No offense unless a crash results",
        ],
        correctIndex: 0,
        explanation:
          "The manual points to RSA 265:79-b, negligent driving, for a vehicle traveling New Hampshire roads in a manner that endangers or is likely to endanger any person or property. The penalty is $250 to $500 for a first offense and more after that.",
        context:
          "The duty behind it is Jessica's Law, in force since 2002, requiring drivers to clear snow and ice off the vehicle before driving. It is named for Jessica Smith, killed when ice from a tractor-trailer struck her car. The manual's reasoning is that snow and ice both block the driver's view and become airborne hazards for everyone behind.",
        trap:
          "It is likely to endanger, not did endanger. The offense does not wait for a crash.",
        excerptKey: "negligent-driving-fine",
        sourceLabel: "New Hampshire Driver's Manual - Section 4 Before Driving, Snow and Ice Removal",
        sourceUrl: hb(13),
      },
      {
        id: "nh_s5_34",
        topic: "sharing",
        question:
          "You are approaching a horse and rider on a rural New Hampshire road. What does the law require?",
        choices: [
          "Every reasonable precaution to prevent frightening the horse, and no horn or revving",
          "Stop until the horse has passed",
          "Sound the horn well in advance so the rider knows you are there",
          "Pass at speed to shorten the time alongside",
        ],
        correctIndex: 0,
        explanation:
          "RSA 265:104 requires every driver approaching a horse to drive, manage and control the vehicle so as to exercise every reasonable precaution to prevent frightening it and to keep the rider or driver safe.",
        context:
          "The manual is more specific about how: reduce speed, assess the situation, pass with caution, and never use the horn or rev the engine. Animal-drawn vehicles and horseback riders have the same rights to the road as a motor vehicle and must follow the same rules. The manual's horn section separately warns against sounding it near a horse.",
        trap:
          "Warning a rider with the horn is precisely the thing the manual names as dangerous. A startled horse is a half-ton animal in your lane.",
        excerptKey: "horses",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, Slow Moving Vehicles",
        sourceUrl: hb(38),
      },
      {
        id: "nh_s5_35",
        topic: "rules",
        question:
          "Under New Hampshire law, how far ahead must an overtaking vehicle be visible and free of oncoming traffic before you start a pass?",
        choices: [
          "Far enough to complete the pass without interfering with any approaching vehicle or the one overtaken",
          "Exactly 500 feet",
          "Exactly 1,000 feet",
          "The length of the vehicle being passed, times three",
        ],
        correctIndex: 0,
        explanation:
          "RSA 265:20 uses a functional test rather than a distance: the left side must be clearly visible and free of oncoming traffic for a sufficient distance to complete the pass without interfering with any approaching vehicle or the vehicle being overtaken.",
        context:
          "The statute attaches one hard number at the other end - the overtaking vehicle must be back in an authorized lane before coming within 200 feet of any approaching vehicle. The manual asks you to estimate the time and space you need before you commit, and lists the places where you may not attempt a pass at all.",
        trap:
          "Looking for a fixed number here is the mistake. The law asks whether you can finish, which depends on your speed, theirs, and the road.",
        excerptKey: "rsa-pass-return-200",
        sourceLabel: "New Hampshire RSA 265:20 - Limitations on Overtaking on the Left",
        sourceUrl: rsa("265:20"),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions mixed the way the DMV's own 40-question knowledge test is: rules of the road and general driving conditions, with distracted driving, impairment and poor weather guaranteed a place by statute.",
    questions: [
      {
        id: "nh_s6_01",
        topic: "signals",
        question: "A solid red traffic light requires what?",
        choices: [
          "Stop before entering the intersection and wait until the light turns green",
          "Slow to a walking pace and continue if clear",
          "Stop only if pedestrians are present",
          "Yield to traffic on the cross street, then proceed",
        ],
        correctIndex: 0,
        explanation:
          "Stop before entering the intersection, behind the stop line, crosswalk or intersection, and stay there until the light turns green. The one exception is a right turn after a full stop where no sign prohibits it.",
        context:
          "A red arrow is stricter: it bars the movement it points to unless another indication shown at the same time permits it. A flashing red is a stop-and-yield. A dead signal reverts to the rules for an uncontrolled intersection or a four-way stop.",
        trap:
          "Creeping into the intersection to see past the car ahead has already entered it. The stop line is where the stop belongs.",
        excerptKey: "red-light",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signals",
        sourceUrl: hb(20),
      },
      {
        id: "nh_s6_02",
        topic: "speed",
        question:
          "The default speed limit in a New Hampshire business district is what?",
        choices: [
          "25 mph",
          "30 mph",
          "35 mph",
          "40 mph",
        ],
        correctIndex: 1,
        explanation:
          "Thirty mph in any business or urban residence district. The figure applies whether or not a limit is posted.",
        context:
          "An urban residence district is defined by the buildings rather than the town line: territory beside a highway, outside a business district, where the frontage for 300 feet or more is mainly occupied by dwellings, or dwellings and buildings in use for business. A local authority may lower a district limit, but not below 25.",
        trap:
          "Twenty-five is the floor a town may lower to, not the state default. Thirty is the answer where nothing is posted.",
        excerptKey: "speed-ideal",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Speed Management",
        sourceUrl: hb(15),
      },
      {
        id: "nh_s6_03",
        topic: "rules",
        question:
          "You are following a vehicle in good weather on a dry road. What gap does the manual want?",
        choices: ["Two seconds", "Three seconds", "Four seconds", "Five seconds"],
        correctIndex: 2,
        explanation:
          "Four seconds, counted from when the rear of the vehicle ahead passes a fixed point until you reach the same point.",
        context:
          "The manual wants more than four in a list of situations: slippery roads, behind trucks, buses, recreational vehicles and trailers, at night, in fog or bad weather, and behind vehicles required to stop at railroad crossings. Night alone adds at least a second, and an unfamiliar road at night at least two.",
        trap:
          "Three seconds is the figure most driver education books outside New Hampshire use. Here it is four.",
        excerptKey: "following-four-seconds",
        sourceLabel: "New Hampshire Driver's Manual - Section 8 Driving Safely, Space Management",
        sourceUrl: hb(30),
      },
      {
        id: "nh_s6_04",
        topic: "signs",
        question: "An orange sign in a construction area is telling you what?",
        choices: [
          "A permanent change to the road layout",
          "A road repair work warning",
          "A detour is compulsory",
          "The speed limit has been raised",
        ],
        correctIndex: 1,
        explanation:
          "Orange is the road repair work warning color. Work zone signs are generally diamond or rectangular with black letters or symbols on an orange background.",
        context:
          "The messages they carry include workers ahead, reduced speed, detours, slow-moving construction equipment and poor or suddenly changing road surfaces. Traffic may also be controlled by a flagger whose instructions must be followed, and fines may be doubled in a work zone where that is marked before you enter.",
        trap:
          "Orange and yellow both mean caution and are not interchangeable. Yellow warns about the road itself; orange warns that people are working on it.",
        excerptKey: "work-zone-signs",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Work Zone Signs",
        sourceUrl: hb(23),
      },
      {
        id: "nh_s6_05",
        topic: "impairment",
        question:
          "What is the legal alcohol concentration limit for a New Hampshire driver aged 21 or over?",
        choices: [
          "0.02",
          "0.05",
          "0.08",
          "0.10",
        ],
        correctIndex: 2,
        explanation:
          "0.08 for a driver 21 or over. For anyone under 21 the limit is 0.02.",
        context:
          "RSA 265-A:2 makes it an offense to drive with an alcohol concentration of 0.08 or more, or 0.02 or more for a driver under 21, and separately to drive while impaired by liquor or any drug at any concentration. A first conviction is a Class B misdemeanor with a fine of not less than $500 and a possible loss of privileges of 9 months to 2 years.",
        trap:
          "You can be convicted below 0.08 on the impairment limb of the offense. The number is a threshold that removes the need to prove impairment, not a safe harbor.",
        excerptKey: "rsa-dwi",
        sourceLabel: "New Hampshire RSA 265-A:2 - Driving or Operating Under Influence of Drugs or Liquor",
        sourceUrl: rsa("265-A:2"),
      },
      {
        id: "nh_s6_06",
        topic: "safety",
        question:
          "In fog, snow or heavy rain, which headlights does the manual tell you to use?",
        choices: [
          "High beams, for maximum reach",
          "Low beams",
          "Hazard lights alone",
          "Parking lights",
        ],
        correctIndex: 1,
        explanation:
          "Low beams. Light from high beams bounces off fog, snow and rain and reflects back at you as glare, which makes it harder to see rather than easier.",
        context:
          "The rest of the manual's night rules follow the same logic. Use high beams where there is no oncoming traffic and dim them for anyone approaching. Use low beams when following another vehicle. When someone leaves high beams on toward you, look at the fog line or the right edge of the road instead of into the light.",
        trap:
          "More light feels like better vision. In fog it is the one adjustment that reliably makes things worse.",
        excerptKey: "low-beams-following",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Night Driving",
        sourceUrl: hb(18),
      },
      {
        id: "nh_s6_07",
        topic: "rightOfWay",
        question:
          "Two vehicles arrive at a four-way stop at the same moment. Who proceeds first?",
        choices: [
          "The vehicle going straight",
          "The larger vehicle",
          "The vehicle on the left",
          "The vehicle on the right",
        ],
        correctIndex: 3,
        explanation:
          "The driver on the right. The manual states it specifically for a four-way intersection controlled by stop signs when both drivers arrive at the same time.",
        context:
          "Order of arrival comes first: the driver who is at or arrives at the intersection first goes, and the right-hand rule only breaks a tie. RSA 265:28 puts the same duty on the driver approaching or entering on the left, and the manual reminds you that nobody should assume they automatically have the right of way.",
        trap:
          "Going straight is not a priority at a four-way stop, and neither is being the bigger vehicle. Arrival, then right.",
        excerptKey: "row-four-way",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Yielding Right-of-Way",
        sourceUrl: hb(14),
      },
      {
        id: "nh_s6_08",
        topic: "licensing",
        question:
          "What must a driver under 18 do about mobile phones in New Hampshire?",
        choices: [
          "Not use one at all, hands-free or otherwise, except to report an emergency",
          "Use hands-free only",
          "Use one only when stopped in traffic",
          "Use one only for navigation",
        ],
        correctIndex: 0,
        explanation:
          "No use at all. The prohibition on drivers under 18 covers hands-free devices as well as handheld ones, while driving and while temporarily stopped in traffic, with only the enhanced 911 or public safety emergency exception.",
        context:
          "Drivers over 18 may use a genuine hands-free device, a non-cellular two-way radio with one hand, or perform an action required by an ignition interlock. The fines are the same for both groups - $100, $250 and $500 within 24 months - but an under-18 driver also faces suspension or revocation under RSA 263:14.",
        trap:
          "Hands-free is the exemption for adults and not for anyone under 18. That is the specific line people cross.",
        excerptKey: "under-18-phone",
        sourceLabel: "New Hampshire Driver's Manual - Section 2 Specific Restrictions for Youth Operators",
        sourceUrl: hb(4),
      },
      {
        id: "nh_s6_09",
        topic: "sharing",
        question:
          "A school bus with flashing red lights is stopped on the opposite side of a divided highway with separate roadways. What must you do?",
        choices: [
          "Stop 25 feet away as usual",
          "Slow to 20 mph and pass",
          "You need not stop",
          "Stop only if children are visible",
        ],
        correctIndex: 2,
        explanation:
          "On a divided highway with separate roadways, a driver meeting or passing a bus traveling on the other half need not stop. The manual words the same exception as a roadway separated by a physical barrier.",
        context:
          "Everywhere else the duty is to stop at least 25 feet away in any direction and stay stopped until the bus resumes motion or the flashing red lights stop. The exception is narrow: a painted median or a center turn lane is not a divided highway with separate roadways.",
        trap:
          "A wide painted median looks like a divider and is not one. Getting this backwards on an ordinary road is a $150 offense.",
        excerptKey: "rsa-school-bus-divided",
        sourceLabel: "New Hampshire RSA 265:54 - Overtaking and Passing School Bus",
        sourceUrl: rsa("265:54"),
      },
      {
        id: "nh_s6_10",
        topic: "parking",
        question: "Which of these may you legally do in New Hampshire?",
        choices: [
          "Park on a crosswalk if you are only stopping briefly",
          "Park on a bridge outside a town",
          "Park on a sidewalk when the vehicle is fully clear of the road",
          "Park 20 feet from a fire hydrant",
        ],
        correctIndex: 3,
        explanation:
          "Twenty feet from a hydrant is outside the 15-foot prohibition, so it is lawful. The other three are barred outright: RSA 265:69, I forbids stopping, standing or parking on a crosswalk, on any bridge, or on a sidewalk, with no exception for a brief stop.",
        context:
          "RSA 265:69 splits the prohibitions into three grades. Some places you may not stop, stand or park at all - the roadway side of a parked vehicle, a sidewalk, an intersection, a crosswalk, a bridge or tunnel, railroad tracks, a controlled access highway. Some you may not stand or park except momentarily for passengers, which is where the driveway, hydrant, crosswalk and stop sign distances sit. And some you may not park except while actively loading, which covers the 50-foot railroad crossing distance.",
        trap:
          "Some prohibitions do have a momentary-passenger exception - in front of a driveway is one. A crosswalk, a bridge and a sidewalk have none.",
        excerptKey: "rsa-park-hydrant",
        sourceLabel: "New Hampshire RSA 265:69 - Stopping, Standing or Parking Prohibited in Specified Places",
        sourceUrl: rsa("265:69"),
      },
      {
        id: "nh_s6_11",
        topic: "emergencies",
        question:
          "What does the manual tell you to do first if a crash occurs?",
        choices: [
          "Photograph the scene",
          "Exchange insurance details",
          "Move both vehicles to the shoulder",
          "Stop",
        ],
        correctIndex: 3,
        explanation:
          "Stop. It is the first item on the manual's list, and leaving the scene of a crash is a separate offense under RSA 264:25.",
        context:
          "Then move the vehicle off the road if you can so traffic is not blocked, call 911 if anyone is hurt, give aid without moving the injured unless necessary, and collect names, addresses, license numbers and states, plate numbers, vehicle make, model and year and insurance details, plus the names and addresses of any witnesses.",
        trap:
          "Driving on because the damage looked minor is the version of this that becomes a criminal matter rather than an insurance one.",
        excerptKey: "crash-steps",
        sourceLabel: "New Hampshire Driver's Manual - Section 9 Accident procedures",
        sourceUrl: hb(32),
      },
      {
        id: "nh_s6_12",
        topic: "rules",
        question:
          "A broken white line separates two lanes going your way. What does it allow?",
        choices: [
          "Passing and lane changes when it is safe to do so",
          "Passing only in the right lane",
          "Nothing - white lines never permit crossing",
          "Parking beside it during off-peak hours",
        ],
        correctIndex: 0,
        explanation:
          "A broken line permits a driver to change lanes or pass over it when it is safe. White tells you the traffic on both sides is moving in the same direction.",
        context:
          "The solid version of the same line prohibits changing lanes or passing across it. Yellow lines mark traffic moving in opposite directions, and where lines are doubled, the one on your side of the road carries the rule for you.",
        trap:
          "\"When it is safe to do so\" is part of the rule, not a caveat. The line grants permission and does not remove the duty to check.",
        excerptKey: "broken-lines",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Pavement Markings",
        sourceUrl: hb(23),
      },
      {
        id: "nh_s6_13",
        topic: "safety",
        question:
          "How does the manual say to reduce the risk of hydroplaning?",
        choices: [
          "Accelerate through standing water to push it aside",
          "Slow down in the rain, and keep good tread depth and correct tire pressure",
          "Use the highest gear available",
          "Brake firmly as the tires begin to lift",
        ],
        correctIndex: 1,
        explanation:
          "Slow down when the road is wet or has pooled water on it, and make sure the tires have good tread and are inflated to the proper pressure. Hydroplaning happens when the steering tires start to ride up on pooled water like water skis.",
        context:
          "The same section covers the rest of adjusting to conditions: reduce speed at the first sign of rain, snow, sleet or ice, because tires grip less and stopping and turning both take longer. On a flooded roadway the manual tells you not to drive into large standing water at all - find another route.",
        trap:
          "Once the tires are up on the water, steering and braking are already gone. Everything the manual offers is prevention.",
        excerptKey: "hydroplaning-avoid",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Adjusting To Roadway Conditions",
        sourceUrl: hb(17),
      },
      {
        id: "nh_s6_14",
        topic: "signs",
        question: "What does a green road sign carry?",
        choices: [
          "A warning",
          "A prohibition",
          "Direction or guidance",
          "Incident information",
        ],
        correctIndex: 2,
        explanation:
          "Green is direction or guidance. Guide signs in green, brown or blue give information on intersecting roads, direct drivers to towns, and show points of interest.",
        context:
          "The rest of the key: red for prohibition, blue for driver services, yellow for general warning, white for a law or rule of the road, orange for road repair work, brown for tourist and recreation guidance, pink for incident management, and purple for E-ZPass.",
        trap:
          "Green is the most common highway sign color and carries no rule at all. It is telling you where you are going, not what you must do.",
        excerptKey: "guide-signs",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Guide Signs",
        sourceUrl: hb(22),
      },
      {
        id: "nh_s6_15",
        topic: "licensing",
        question:
          "A person practicing driving in New Hampshire must be accompanied by whom?",
        choices: [
          "Any licensed driver over 18",
          "A certified driving instructor only",
          "A parent or legal guardian only",
          "A parent, legal guardian or other licensed responsible adult at least 25 years old, in the front seat",
        ],
        correctIndex: 3,
        explanation:
          "A parent, legal guardian, or other responsible licensed adult aged 25 or older, sitting in the front seat. The learner must be at least 15 and a half and must carry proof of age.",
        context:
          "The vehicle must be non-commercial, and the accompanying adult is liable for any motor vehicle violation the unlicensed driver commits. Nobody whose driving privileges are suspended or revoked in New Hampshire or any other state may practice drive. New Hampshire issues no learner's permit and does not honor another state's.",
        trap:
          "An older sibling of 22 with a full license does not qualify. Twenty-five is the number, and the seat matters too.",
        excerptKey: "web-practice-conditions",
        sourceLabel: "NH DMV - Learning to Drive",
        sourceUrl: LEARNING,
      },
      {
        id: "nh_s6_16",
        topic: "rightOfWay",
        question:
          "You are turning left into a driveway across oncoming traffic. What does RSA 265:29 require?",
        choices: [
          "Yield to any oncoming vehicle in the intersection or close enough to be an immediate hazard",
          "Signal and proceed, since a driveway is not an intersection",
          "Yield only to vehicles that are signaling",
          "Nothing, if you began the turn first",
        ],
        correctIndex: 0,
        explanation:
          "The duty covers turning left within an intersection or into an alley, private road or driveway. In each case you yield to any vehicle approaching from the opposite direction that is within the intersection or so close as to constitute an immediate hazard.",
        context:
          "The manual quotes the statute and lists drivers in the opposing lane among those you yield to when turning left. It also warns you not to rely on an approaching vehicle's turn signal, since the driver may intend to turn past you or may have left it on.",
        trap:
          "A driveway feels less formal than an intersection and the rule is the same. Being partly across the road first confers nothing.",
        excerptKey: "row-left-turn",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Yielding Right-of-Way",
        sourceUrl: hb(14),
      },
      {
        id: "nh_s6_17",
        topic: "impairment",
        question:
          "The manual names three things alcohol and other impairing drugs reduce. Which are they?",
        choices: [
          "Hearing, balance and memory",
          "Judgment, vision and reaction time",
          "Strength, coordination and appetite",
          "Attention, hearing and grip",
        ],
        correctIndex: 1,
        explanation:
          "Judgment, vision and reaction time - the three faculties driving needs most. The manual sets them out as a group and then describes each.",
        context:
          "Judgment goes first, which is why the driver is often the last to know. Vision blurs, focus slows, double vision appears, and the ability to judge distance, speed and the movement of other vehicles degrades - the manual notes vision is affected at 0.02 for every driver. Reaction time slows the processing of information as well as the physical response.",
        trap:
          "Because judgment is one of the three, self-assessment is the one test that cannot be trusted.",
        excerptKey: "alcohol-three-effects",
        sourceLabel: "New Hampshire Driver's Manual - Section 3 Effects of Alcohol and Other Impairing Drugs",
        sourceUrl: hb(8),
      },
      {
        id: "nh_s6_18",
        topic: "speed",
        question:
          "You are approaching a curve on a wet road. What does the manual tell you to do?",
        choices: [
          "Brake through the curve to keep the speed down",
          "Maintain speed and steer smoothly",
          "Accelerate on entry for stability",
          "Reduce speed before entering, and reduce more when traction is poor",
        ],
        correctIndex: 3,
        explanation:
          "Slow down before you enter, to a speed that lets you apply slight and constant acceleration through the curve. Reduce more when traction is poor, when you are following another vehicle, or when you cannot see the end of the curve.",
        context:
          "The manual explains why the braking has to happen first: hard braking after entering a curve can make the tires lose traction. That is the same physics as its warning about slippery roads, where tires grip less and both stopping and turning without skidding become harder.",
        trap:
          "Braking mid-corner is the instinct when the curve turns out to be tighter than it looked. It is the specific input the manual warns against.",
        excerptKey: "curves",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Adjusting To Roadway Conditions",
        sourceUrl: hb(17),
      },
      {
        id: "nh_s6_19",
        topic: "signals",
        question:
          "A green light is showing and pedestrians are still in the crosswalk ahead. What must you do?",
        choices: [
          "Yield to them before proceeding",
          "Proceed, since the green gives you the right of way",
          "Sound your horn to move them along",
          "Reverse to give them room",
        ],
        correctIndex: 0,
        explanation:
          "A solid green means you may go through the intersection if it is clear, and the manual attaches an explicit duty to yield to pedestrians and vehicles already in it.",
        context:
          "The manual also asks you not to move off the instant a light turns green, but to take the time to confirm the path is clear and no crossing traffic is coming. Its recommended pattern before entering any intersection is to look left, then right, then left again.",
        trap:
          "Green is permission to enter, not priority over what is already inside. The person mid-crossing got there first.",
        excerptKey: "green-light",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signals",
        sourceUrl: hb(20),
      },
      {
        id: "nh_s6_20",
        topic: "sharing",
        question:
          "What following distance does the manual want behind a motorcycle?",
        choices: ["Two seconds", "Three seconds", "At least four seconds", "Six seconds"],
        correctIndex: 2,
        explanation:
          "At least four seconds, the same figure as for any other vehicle. The manual states it separately in the motorcycle section because the temptation is to follow a small vehicle more closely.",
        context:
          "The rest of the section is about what makes motorcycles hard to read. Most are about two feet wide, easy to lose in a blind spot and hard to judge speed on. Most do not have self-cancelling turn signals, so a signal is not a promise. And they are entitled to a full lane, so never try to share one.",
        trap:
          "A motorcycle takes up little space and can stop very quickly. Both facts push a following driver closer than they should be.",
        excerptKey: "motorcycle-four-seconds",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, Motorcycles",
        sourceUrl: hb(37),
      },
      {
        id: "nh_s6_21",
        topic: "rules",
        question:
          "Where does the manual tell you to stop when there is a crosswalk but no painted stop line?",
        choices: [
          "Level with the near edge of the intersection",
          "Before the crosswalk",
          "On the crosswalk, so you can see across",
          "Wherever gives the best view",
        ],
        correctIndex: 1,
        explanation:
          "Before the crosswalk. The order of preference is the stop line first, the crosswalk if there is no line, and the edge of the intersection if there is neither.",
        context:
          "RSA 265:31, II gives the same sequence in law and adds the fallback: where there is neither crosswalk nor line, stop at the point nearest the intersecting roadway where you can see approaching traffic. The manual adds that after stopping you should look both ways and only then move forward into the intersection.",
        trap:
          "Stopping on the crosswalk to get a view is the common compromise, and it puts the car exactly where pedestrians walk.",
        excerptKey: "stop-lines-no-line",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Pavement Markings",
        sourceUrl: hb(23),
      },
      {
        id: "nh_s6_22",
        topic: "safety",
        question:
          "What does the manual recommend about tire pressure?",
        choices: [
          "Have it checked once a month",
          "Have it checked once a year",
          "Check only before long trips",
          "Rely on the tire pressure warning light",
        ],
        correctIndex: 0,
        explanation:
          "Once a month. The manual notes that crashes caused by tire maintenance are preventable and that under-inflated, over-inflated or worn tires all create safety problems.",
        context:
          "A vehicle safety check is the first thing in its Before Driving section, on the reasoning that a driver cannot control other drivers or the road but can control the condition of the vehicle. Proper tread depth and pressure also appear in its advice for avoiding hydroplaning.",
        trap:
          "The warning light usually triggers well below the correct pressure. It is a low-pressure alarm rather than a maintenance schedule.",
        excerptKey: "tire-pressure",
        sourceLabel: "New Hampshire Driver's Manual - Section 4 Before Driving, Vehicle Safety Check",
        sourceUrl: hb(11),
      },
      {
        id: "nh_s6_23",
        topic: "signs",
        question:
          "What is the New Hampshire rule for a sign showing a red circle with a red slash over a symbol?",
        choices: [
          "It warns of a hazard shown in the symbol",
          "It marks a service that is temporarily closed",
          "It prohibits the action shown",
          "It indicates a seasonal restriction",
        ],
        correctIndex: 2,
        explanation:
          "The circle and slash prohibit whatever the symbol shows. The manual lists it as a feature of regulatory signs, which are square or rectangular and tell drivers about specific laws.",
        context:
          "The prohibition family includes Do Not Enter, Wrong Way, No Trucks, No Left Turn, No Right Turn, No U-Turn and the sign forbidding a right turn on a red light. Red is the manual's color for prohibition wherever it appears.",
        trap:
          "The symbol under the slash is the action, not the hazard. A pictogram of a truck means no trucks, not trucks ahead.",
        excerptKey: "regulatory-red-slash",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Regulatory Signs",
        sourceUrl: hb(22),
      },
      {
        id: "nh_s6_24",
        topic: "emergencies",
        question:
          "A police vehicle pulls in behind you with its lights on. What does the manual tell you to do once stopped?",
        choices: [
          "Get out and walk back to the officer",
          "Have your documents in hand before the officer arrives",
          "Keep the engine running in case you need to move",
          "Stay in the vehicle, turn off the engine, put on the hazards, and keep your hands on the wheel",
        ],
        correctIndex: 3,
        explanation:
          "Stop completely, put the vehicle in park, stay inside unless asked to get out, turn off the engine, put on the hazard flashers and at night the interior lights, and keep your hands on the steering wheel with movement limited.",
        context:
          "When documents are requested, tell the officer where they are and reach for them slowly with one hand still on the wheel. Keep your safety belt fastened and ask passengers to do the same. If the vehicle is unmarked, check that its blue lights are activated, and if the officer is in plain clothes you may ask for a badge or department identification card.",
        trap:
          "Reaching for the glove box before being asked is the movement the manual is trying to prevent. Wait, then narrate, then reach.",
        excerptKey: "traffic-stop-steps",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Police/Traffic Stops",
        sourceUrl: hb(40),
      },
      {
        id: "nh_s6_25",
        topic: "parking",
        question:
          "How far from a traffic control signal may you park in New Hampshire?",
        choices: ["10 feet", "15 feet", "20 feet", "No closer than 30 feet"],
        correctIndex: 3,
        explanation:
          "Thirty feet. The same figure covers a stop sign and, in the statute, a flashing signal on the approach.",
        context:
          "The other unmarked distances are 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway with 75 feet on the opposite side, and 50 feet from the nearest rail of a railroad crossing. None of them need a painted curb or a sign to be enforceable.",
        trap:
          "Thirty feet on the approach means before the signal, not after it. Parking just past a light is a different question from parking just before one.",
        excerptKey: "no-parking-distances",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 General Driving and Parking, Parking",
        sourceUrl: hb(28),
      },
      {
        id: "nh_s6_26",
        topic: "licensing",
        question:
          "How long is the temporary paper license issued when you pass all three tests?",
        choices: ["30 days", "45 days", "60 days", "90 days"],
        correctIndex: 2,
        explanation:
          "Sixty days. You leave with a 60-day paper temporary license and the permanent card arrives by mail.",
        context:
          "The manual says the permanent license is mailed within 45 days; the DMV's minors page says within 60. Either way it is meant to arrive before the paper expires. New residents get the same paper document, and applicants under 18 must also present the green driver education completion certificate and a parent or guardian authorization certificate.",
        trap:
          "The paper is a driving document, not general identification. Several states will not accept it as ID, which is worth knowing before you travel on it.",
        excerptKey: "temporary-license",
        sourceLabel: "New Hampshire Driver's Manual - Section 1 Pass/Fail of Tests",
        sourceUrl: hb(3),
      },
      {
        id: "nh_s6_27",
        topic: "rightOfWay",
        question:
          "You are on a rural road and reach an intersection controlled only by a stop sign on your side. After stopping, what must you do?",
        choices: [
          "Yield to any vehicle already in the intersection or approaching closely enough to be an immediate hazard",
          "Proceed, since you have already given way by stopping",
          "Yield only to traffic on your right",
          "Wait for a gap of at least ten seconds",
        ],
        correctIndex: 0,
        explanation:
          "The stop and the yield are two separate duties. RSA 265:30, I requires you, after stopping, to yield to any vehicle that has entered the intersection or is approaching closely enough to be an immediate hazard while you are crossing.",
        context:
          "The manual's version is to look for crossing vehicles and pedestrians in all directions and yield before proceeding. Where the stop line, crosswalk and both are missing, the stop belongs at the point nearest the intersecting roadway from which you can see approaching traffic.",
        trap:
          "Having stopped feels like having earned the crossing. The stop only buys you the chance to look.",
        excerptKey: "rsa-yield-sign",
        sourceLabel: "New Hampshire RSA 265:30 - Vehicle Entering Stop or Yield Intersection or Highway",
        sourceUrl: rsa("265:30"),
      },
      {
        id: "nh_s6_28",
        topic: "sharing",
        question:
          "A pedestrian is walking along a road with no sidewalk. Which side should they be on?",
        choices: [
          "The right side, with traffic",
          "Either side, as long as they wear light colors",
          "The center of the road where it is smoother",
          "The left side, facing oncoming traffic",
        ],
        correctIndex: 3,
        explanation:
          "The left, facing oncoming traffic, so they can see what is coming and step clear. The manual lists it among the duties pedestrians carry.",
        context:
          "Their other duties are to use crosswalks at intersections, obey pedestrian signs and signals, look both ways before crossing, wear white or light colored clothing or carry a light at night, and never walk on an interstate or limited access highway. Drivers owe them due care regardless: RSA 265:37 requires an audible signal when necessary and extra caution around children and anyone obviously confused, incapacitated or intoxicated.",
        trap:
          "Walking with traffic feels natural because that is how you drive. It is the one situation where you want to face what is coming.",
        excerptKey: "pedestrian-walk-left",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, Pedestrians",
        sourceUrl: hb(36),
      },
      {
        id: "nh_s6_29",
        topic: "safety",
        question:
          "What does the manual say about using a mobile device while stopped in traffic at a red light?",
        choices: [
          "It is allowed for any driver, because the vehicle is not moving",
          "It is prohibited - being temporarily halted in traffic is still covered",
          "It is allowed for drivers over 18 only",
          "It is allowed if the vehicle is in park",
        ],
        correctIndex: 1,
        explanation:
          "RSA 265:79-c covers a driver temporarily halted in traffic for a traffic control device or other momentary delay. The red light does not take you outside the section.",
        context:
          "What does take you outside it is pulling to the side of or off the road at a place where stopping is legal, and remaining stationary. Drivers over 18 may otherwise use a genuine hands-free device or receive spoken routing information; drivers under 18 may not use any device at all except to report an emergency.",
        trap:
          "The queue at a light is where most people check their phone, and it is written into the statute as prohibited.",
        excerptKey: "phone-ban",
        sourceLabel: "New Hampshire Driver's Manual - Section 3 Use of electronic devises while driving",
        sourceUrl: hb(7),
      },
      {
        id: "nh_s6_30",
        topic: "signals",
        question:
          "You are approaching an intersection where the light has been green for a long time. What does defensive driving suggest?",
        choices: [
          "Speed up to clear it before it changes",
          "Cover the brake and be ready for it to change",
          "Change lanes to the right",
          "Sound the horn on approach",
        ],
        correctIndex: 1,
        explanation:
          "A stale green is a light about to turn yellow. Be ready to stop rather than committed to going, which is what a yellow light is warning you about when it arrives.",
        context:
          "The manual's broader instruction covers the same ground: do not rely on other road users to obey signals or signs, and always be prepared to avoid a collision. Its yellow-light definition is a warning that the signal is about to change to red, which only helps a driver who has left themselves room to react to it.",
        trap:
          "Accelerating to beat the change is what turns a routine yellow into a red-light entry, and it is a common cause of intersection crashes.",
        excerptKey: "intersections-prepared",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 General Driving and Parking, Intersections",
        sourceUrl: hb(26),
      },
    ],
  },
];
