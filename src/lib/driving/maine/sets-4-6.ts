import type { DrivingTestSet } from "../types";

// Sets 4, 5 and 6. Same sources and the same rules as sets 1-3: the Maine
// Driver's License Manual (Rev 4/24), Title 29-A of the Maine Revised
// Statutes, and the Bureau of Motor Vehicles' own pages.
//
// Set 5 is built from what Maine learners say the exam actually did to them.
// Fifty-three Reddit threads were read for this bank (docs/driving/research/
// maine.md lists them). Three claims came up independently and shaped this
// set: that the test is "a law test" which can draw on anything in the book,
// including licence classes, address-change deadlines and suspension day
// counts; that it leans hard on Maine's OUI law, which the manual itself says
// is where the special emphasis is; and that it asks for exact distances,
// with the ten-foot white-cane rule named by more than one person as the item
// that beat them. No question here reproduces anything anyone posted from
// memory of a real exam - the RULE was taken from the forum, and the question
// was then written from the manual and the statute.
const HB =
  "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf";
const SECTION_FIRST_PDF_PAGE: Record<number, number> = {
  1: 6,
  2: 17,
  3: 23,
  4: 39,
  5: 44,
  6: 48,
  7: 61,
  8: 75,
  9: 94,
  10: 101,
  11: 112,
  12: 121,
};
/** `hb("6-3")` -> the manual's PDF page that carries printed page 6-3. */
const hb = (printed: string) => {
  const [section, page] = printed.split("-").map(Number);
  return `${HB}#page=${SECTION_FIRST_PDF_PAGE[section] + page - 1}`;
};
const law = (section: string) =>
  `https://legislature.maine.gov/statutes/29-A/title29-Asec${section}.html`;
const BMV_EXAM =
  "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/drivers-license-exam";
const BMV_GDL =
  "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/graduated-drivers-license";
const BMV_AGES =
  "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/license-age-restrictions";
const BMV_OBTAIN =
  "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/how-to-obtain-a-license";
const BMV_FEES =
  "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/drivers-license-and-examination-fees";
const BMV_SUSP =
  "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/license-suspended/intermediate-provisional-license-suspensions";

export const maineSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions drawn from every section of the book, including the chapters people skip: owning and inspecting a vehicle, sharing the road with moose and farm machinery, and what to do when something on your car stops working.",
    questions: [
      {
        id: "me_s4_01",
        topic: "safety",
        question:
          "Maine's manual gives peak months for collisions with moose. Which two?",
        choices: ["May and June", "October and November", "July and August", "December and January"],
        correctIndex: 0,
        explanation:
          "Moose collisions rise sharply in May and June. Autumn incidents are common too, but May and June are the two the manual names as the peak.",
        context:
          "Deer follow a different calendar: collisions climb through the autumn and peak in November, during the breeding season. Both animals move most between dusk and dawn, and both travel in small groups, so one crossing the road means you should expect another.",
        trap: "October and November is the deer answer. The manual prints two different peaks for two different animals on the same page.",
        excerptKey: "moose-may-and-june",
        sourceLabel: "Maine Driver's License Manual - Section 11, Wildlife Safety",
        sourceUrl: hb("11-7"),
      },
      {
        id: "me_s4_02",
        topic: "sharing",
        question:
          "Why does the Maine manual say a moose is harder to see at night than a deer?",
        choices: [
          "Moose are more common on unlit roads",
          "Moose move faster across the road",
          "Moose are so tall that your headlights do not reach their eyes, so you get no eye-shine",
          "Moose are darker in color than deer",
        ],
        correctIndex: 2,
        explanation:
          "Deer eyes reflect headlights well. A moose stands high enough that the beam passes under its eyes, so there is no reflection to warn you.",
        context:
          "The manual's advice follows from that: watch for the reflective eyes of deer and for the silhouette of a moose. If a moose is standing in or near the road, slow down, do not try to drive around it, and stay in your vehicle.",
        trap: "Color is part of the problem but not the reason the manual gives. The eye-shine is what your night vision is actually relying on.",
        excerptKey: "moose-eyes-not-reflective",
        sourceLabel: "Maine Driver's License Manual - Section 11, Wildlife Safety",
        sourceUrl: hb("11-7"),
      },
      {
        id: "me_s4_03",
        topic: "licensing",
        question: "How many classes of driver's licence does Maine issue?",
        choices: ["Two", "Three", "Four", "Five"],
        correctIndex: 1,
        explanation:
          "Three - A, B and C. A and B are commercial classes defined by vehicle weight, and C is the standard licence most drivers hold.",
        context:
          "School buses, passenger buses and motorcycles are not separate classes. They are endorsements added to a licence after passing the tests for that vehicle. A Class C licence becomes a commercial one only if it carries a hazardous material, tanker or passenger endorsement.",
        trap: "Motorcycles feel like a fourth class because they need their own manual and their own test. The manual counts them as an endorsement.",
        excerptKey: "three-license-classes",
        sourceLabel: "Maine Driver's License Manual - Section 1, License Classification",
        sourceUrl: hb("1-3"),
      },
      {
        id: "me_s4_04",
        topic: "emergencies",
        question:
          "A front tire blows out at speed. What does the Maine manual tell you to do?",
        choices: [
          "Brake firmly and pull straight off the road",
          "Steer into the pull to keep the car balanced",
          "Accelerate briefly to regain control",
          "Grip the wheel firmly, steer straight and let the car slow itself",
        ],
        correctIndex: 3,
        explanation:
          "Hold the wheel, keep going straight, take your foot off the gas and let the car slow down on its own. Brake only gently and only if you must.",
        context:
          "The manual describes what each failure feels like: a front blowout pulls hard toward the failed tire, and a rear one makes the vehicle wobble and shake. Either way, do not stop in the travel lane - pull off to a safe place and turn on the flashers.",
        trap: "Braking is the reflex and it makes an already unbalanced car worse. Sudden braking with one tire gone is what turns a blowout into a spin.",
        excerptKey: "tire-blowout",
        sourceLabel: "Maine Driver's License Manual - Section 9, Tire Blowout",
        sourceUrl: hb("9-5"),
      },
      {
        id: "me_s4_05",
        topic: "rules",
        question:
          "Maine's manual gives an inspection standard for tires. What tread depth must a passenger vehicle have?",
        choices: ["1/32 of an inch", "2/32 of an inch", "4/32 of an inch", "6/32 of an inch"],
        correctIndex: 1,
        explanation:
          "Two thirty-seconds of an inch, and the tires must be free of cuts, tears and other dangerous conditions.",
        context:
          "Commercial vehicles of 10,000 pounds gross vehicle weight need twice that - 4/32 of an inch. The same inspection list carries two other numbers worth remembering: the horn must be audible from 200 feet, and the foot brake must stop the vehicle within 30 feet from 20 mph.",
        trap: "4/32 is the commercial figure. It gets quoted for cars because it sounds safer, and it is not what the standard says.",
        excerptKey: "inspection-tire-tread",
        sourceLabel: "Maine Driver's License Manual - Section 2, Inspecting Your Motor Vehicle",
        sourceUrl: hb("2-4"),
      },
      {
        id: "me_s4_06",
        topic: "impairment",
        question:
          "At what alcohol level does the Maine manual say vision is affected, for every driver?",
        choices: ["0.02", "0.05", "0.08", "0.10"],
        correctIndex: 0,
        explanation:
          "0.02. The manual says vision is impacted at that level for all drivers, well below the 0.08 that makes it an offense for an adult.",
        context:
          "Vision is what most of your driving decisions rest on. Alcohol blurs it, slows focusing, causes double vision, reduces the ability to judge distance, speed and movement, and damages color distinction. It also relaxes the eye muscles so recovery from headlight glare takes longer.",
        trap: "0.08 is the legal threshold, not the point where impairment starts. The manual is explicit that impairment begins with the first drink.",
        excerptKey: "alcohol-vision-02",
        sourceLabel: "Maine Driver's License Manual - Section 3, Effect of Alcohol and other Impairing Drugs",
        sourceUrl: hb("3-6"),
      },
      {
        id: "me_s4_07",
        topic: "signs",
        question:
          "What color are guide signs in Maine, and what do they do?",
        choices: [
          "Yellow, and they warn of hazards",
          "Orange, and they mark work zones",
          "White with red lettering, and they carry prohibitions",
          "Green, brown or blue, and they direct you to roads, towns and services",
        ],
        correctIndex: 3,
        explanation:
          "Guide signs are square or rectangular and green, brown or blue. They point you at intersecting roads, towns, points of interest, hospitals, service stations, restaurants and hotels.",
        context:
          "Route number signs are a related family, and their shape tells you the class of road: interstate, U.S. route, state route, and city, county or local road. The manual's advice is to plan with a map or GPS and then follow the route signs on the way.",
        trap: "Brown is easy to forget in that list, and it is the one on every state park and historic site sign in Maine.",
        excerptKey: "guide-signs",
        sourceLabel: "Maine Driver's License Manual - Section 6, Guide Signs",
        sourceUrl: hb("6-7"),
      },
      {
        id: "me_s4_08",
        topic: "parking",
        question:
          "Maine's manual gives a spacing rule for parking on a public road. How much space must you leave to the cars in front and behind?",
        choices: [
          "At least one foot",
          "At least two feet",
          "At least three feet",
          "Enough for the other driver to open a door",
        ],
        correctIndex: 1,
        explanation:
          "At least two feet at each end. The same figure appears in the parallel parking routine as the gap you hold beside the car you are about to reverse behind.",
        context:
          "The rest of the instruction: park parallel to the road unless angle parking lines are painted, get as far from the driving lanes as you can, pull onto the shoulder if there is one, and end up within 18 inches of the curb if there is a curb.",
        trap: "Judging it by whether the other driver can get out misses the point - the two feet are what let them steer out without a shunt.",
        excerptKey: "parking-parallel-two-feet",
        sourceLabel: "Maine Driver's License Manual - Section 7, Parking",
        sourceUrl: hb("7-9"),
      },
      {
        id: "me_s4_09",
        topic: "rightOfWay",
        question:
          "A vehicle has already entered the intersection when you arrive. What does Maine require?",
        choices: [
          "Yield the right-of-way to it",
          "Proceed if you have a green light",
          "Sound your horn and continue",
          "Proceed if you are on the through road",
        ],
        correctIndex: 0,
        explanation:
          "You yield to any vehicle that has already entered the intersection, whatever your own signal or sign says.",
        context:
          "The statute makes the same point about green lights specifically: notwithstanding the light, the operator must yield the right-of-way to a vehicle or pedestrian lawfully within the intersection or crosswalk. Maine's manual adds the reason - do not rely on others to obey their signal, because someone may run it.",
        trap: "A green light is permission to enter, not a licence to drive into a space someone else is already occupying.",
        excerptKey: "already-in-intersection",
        sourceLabel: "Maine Driver's License Manual - Section 6, Yielding Right-Of-Way",
        sourceUrl: hb("6-2"),
      },
      {
        id: "me_s4_10",
        topic: "safety",
        question:
          "The Maine manual sets a limit on how loud a vehicle sound system may be on a public way. What is it?",
        choices: [
          "Audible at more than 50 feet",
          "Anything that can be heard outside the vehicle",
          "Audible at more than 25 feet and exceeding 85 decibels",
          "Anything above 100 decibels",
        ],
        correctIndex: 2,
        explanation:
          "Both conditions have to be met: audible at more than 25 feet away and over 85 decibels, or louder than is reasonable given where the vehicle is and who is nearby.",
        context:
          "It is a traffic infraction with a rising fine - $50 for a first offense, $100 for a second and $150 for a third or later one. The reason it is in a driving manual at all is that a sound system loud enough to break the rule is loud enough to hide a siren or a horn.",
        trap: "Being audible outside the car is not the test on its own. The distance and the decibel figure work together.",
        excerptKey: "sound-system-25-feet",
        sourceLabel: "Maine Driver's License Manual - Section 2, Excessive Sound System Noise",
        sourceUrl: hb("2-6"),
      },
      {
        id: "me_s4_11",
        topic: "signals",
        question:
          "You are slowing or stopping somewhere another driver would not expect it. What does Maine's manual suggest?",
        choices: [
          "Turn on your hazard flashers",
          "Tap the brake pedal three or four times quickly",
          "Wave your arm out of the window",
          "Sound your horn twice",
        ],
        correctIndex: 1,
        explanation:
          "Tap the brake pedal three or four times in quick succession. The flashing brake lights say more than a single steady application does.",
        context:
          "The manual lists the moments this matters: slowing for something the driver behind cannot see, turning into a side road just before a big intersection, pulling into a parking space, and stopping for a pedestrian. In each of them the driver behind is reading the road ahead rather than your bumper.",
        trap: "Hazard flashers are for a vehicle that has stopped or broken down. Using them while moving tells other drivers nothing about which way you are going.",
        excerptKey: "brake-tap-warning",
        sourceLabel: "Maine Driver's License Manual - Section 5, Signaling When You Slow Down or Stop Unexpectedly",
        sourceUrl: hb("5-3"),
      },
      {
        id: "me_s4_12",
        topic: "sharing",
        question:
          "You are behind a large truck at night. What does the Maine manual tell you to do with your headlights?",
        choices: [
          "Keep the high beams on so the driver can see you",
          "Switch to parking lights",
          "Flash them so the driver knows you are there",
          "Dim them, because bright lights reflect off the truck's mirrors",
        ],
        correctIndex: 3,
        explanation:
          "Dim them. A truck's mirrors throw your high beams straight back into the driver's eyes and make it harder for them to see the road ahead.",
        context:
          "Maine's law puts numbers on the same duty: dim within 500 feet of an oncoming vehicle and within 300 feet of one you are following. The manual's separate warning is not to sit in a truck's rear blind spot at all, which can run 200 feet behind it.",
        trap: "The idea that brighter lights make you more visible is right for daytime running lights and wrong here - the reflection blinds the person you want to be seen by.",
        excerptKey: "dim-behind-large-vehicle",
        sourceLabel: "Maine Driver's License Manual - Section 10, Maintaining Space",
        sourceUrl: hb("10-9"),
      },
      {
        id: "me_s4_13",
        topic: "licensing",
        question:
          "How long is a standard Maine Class C licence valid for a driver under 65?",
        choices: ["Four years", "Five years", "Six years", "Eight years"],
        correctIndex: 2,
        explanation:
          "Six years - valid until your sixth birthday after the date of issue. From age 65 it drops to four.",
        context:
          "The BMV mails a renewal notice about 45 days before expiry, to the most recent address on file, which is one reason Maine gives you 30 days to report an address change. Driving on an expired licence is unlawful.",
        trap: "Four years is the figure for drivers 65 and over, and it turns up as the general answer constantly.",
        excerptKey: "license-six-year-term",
        sourceLabel: "Maine Driver's License Manual - Section 1, Information about Your Driver's License",
        sourceUrl: hb("1-6"),
      },
      {
        id: "me_s4_14",
        topic: "speed",
        question:
          "Maine doubles the fine for speeding in two particular places. Which?",
        choices: [
          "Work zones and school zones",
          "Work zones and the Maine Turnpike",
          "School zones and residential districts",
          "The interstate system and bridges",
        ],
        correctIndex: 0,
        explanation:
          "Work zones and school zones. The manual states both, and Title 29-A carries the doubling for each.",
        context:
          "Two other speed penalties are worth separating from these. Speeding on the Maine Turnpike or the Interstate by less than 30 mph over carries a minimum $50 fine. Exceeding any limit by 30 mph or more stops being an infraction and becomes a Class E crime.",
        trap: "The Turnpike has its own minimum fine, which is a different mechanism from a doubling.",
        excerptKey: "work-zone-fines-doubled",
        sourceLabel: "Maine Driver's License Manual - Section 6, Work Zone Signs",
        sourceUrl: hb("6-6"),
      },
      {
        id: "me_s4_15",
        topic: "emergencies",
        question:
          "Your vehicle breaks down and you have emergency flares. Where does the Maine manual say to place them?",
        choices: [
          "Beside the vehicle on both sides",
          "At the nearest intersection in each direction",
          "Directly in front of and behind the car",
          "At least 100 feet behind the car",
        ],
        correctIndex: 3,
        explanation:
          "At least 100 feet behind, so approaching drivers have room to change lanes or slow down before they reach you.",
        context:
          "The manual's breakdown section gives a longer distance for a vehicle that has broken down rather than merely stopped - 200 to 300 feet behind. Large vehicles must place three emergency devices in specified positions. If you have no flares, stand off the roadway and wave traffic around with a cloth or flag.",
        trap: "Placing flares right at the car warns nobody in time. The whole point of the distance is the gap it buys a driver at speed.",
        excerptKey: "flares-100-feet",
        sourceLabel: "Maine Driver's License Manual - Section 8, Using Emergency Signals",
        sourceUrl: hb("8-18"),
      },
      {
        id: "me_s4_16",
        topic: "rules",
        question:
          "Maine restricts who may ride in the open portion of a pickup truck. What is the rule?",
        choices: [
          "Nobody may ride in the bed of a pickup truck",
          "A passenger under 16 must ride in the passenger compartment",
          "Passengers may ride in the bed if the tailgate is closed",
          "A passenger under 19 must ride in the passenger compartment",
        ],
        correctIndex: 3,
        explanation:
          "Anyone under 19 must ride inside the passenger compartment. Adults 19 and over are not covered by this section.",
        context:
          "There are four exceptions: workers or trainees including agricultural ones travelling in the course of their duties, licensed hunters going to or from a hunting location, parade participants, and a passenger belted into a manufacturer-installed seat outside the passenger compartment. The statute adds campers and hikers being carried in Baxter State Park.",
        trap: "A blanket ban sounds like the safe answer and it is not the law. The rule turns on the passenger's age.",
        excerptKey: "pickup-passenger-under-19",
        sourceLabel: "Maine Driver's License Manual - Section 11, Carrying Passengers and Freight",
        sourceUrl: hb("11-8"),
      },
      {
        id: "me_s4_17",
        topic: "safety",
        question:
          "How far apart does the Maine manual say your hands should be on the steering wheel, and why?",
        choices: [
          "Both hands at the top, for the strongest grip",
          "One hand at 12 o'clock, for the widest turn",
          "At 9 and 3 or 8 and 4, to avoid injury from an airbag and for best control",
          "At 10 and 2, the traditional position",
        ],
        correctIndex: 2,
        explanation:
          "Nine and three, or eight and four. Hands higher on the wheel sit in the path of a deploying airbag.",
        context:
          "The manual adds the details around it: grip firmly but gently with the fingers rather than the palms, keep the thumbs up along the face of the wheel, and never hold the inside of the rim. The crash-avoidance chapter repeats the same positions because you cannot steer quickly out of a hazard from anywhere else.",
        trap: "Ten and two was taught for decades and is the wrong answer now for one specific reason - the airbag was not in those cars.",
        excerptKey: "hand-position-9-and-3",
        sourceLabel: "Maine Driver's License Manual - Section 5, Hand Position",
        sourceUrl: hb("5-3"),
      },
      {
        id: "me_s4_18",
        topic: "impairment",
        question:
          "The Maine manual names three distinct types of driver distraction. What are they?",
        choices: [
          "Internal, external and mechanical",
          "Visual, manual and cognitive",
          "Passenger, device and roadside",
          "Sudden, sustained and habitual",
        ],
        correctIndex: 1,
        explanation:
          "Visual takes your eyes off the road, manual takes a hand off the controls, and cognitive takes your mind elsewhere. Most crashes involve two or all three at once.",
        context:
          "The manual is unusually direct that distraction may now be the single largest contributing factor in traffic crashes, and it cites a truck-driver study finding texting drivers had 23 times the risk of a crash or near-crash. It allows short glances at instruments or mirrors, provided they last under a second and relate to driving.",
        trap: "Hands-free calling removes the manual and visual parts and leaves the cognitive one entirely intact, which is why the manual lists three rather than two.",
        excerptKey: "cognitive-distractions",
        sourceLabel: "Maine Driver's License Manual - Section 3, Driver Distractions",
        sourceUrl: hb("3-4"),
      },
      {
        id: "me_s4_19",
        topic: "signs",
        question:
          "A white X-shaped sign reading Railroad Crossing stands at the tracks. What does it require of you?",
        choices: [
          "Stop every time before crossing",
          "Sound your horn before crossing",
          "Cross only when a gate is raised",
          "Stop behind the stop line or before the tracks if a train or railroad vehicle is coming",
        ],
        correctIndex: 3,
        explanation:
          "The crossbuck is a yield-style marker. You stop for an approaching train or railroad vehicle, and otherwise you look, listen and cross.",
        context:
          "Where more than one track crosses, the number of tracks may be posted - but the manual warns that not every multi-track crossing carries that sign, so always look for a second track and a second train. If you have stopped and one train passes, wait until you can see clearly down the track both ways before moving.",
        trap: "Stopping at every crossing is a road-test fault in Maine and a hazard to the driver behind you. The stop is conditional.",
        excerptKey: "railroad-crossbuck",
        sourceLabel: "Maine Driver's License Manual - Section 6, Railroad Crossings",
        sourceUrl: hb("6-5"),
      },
      {
        id: "me_s4_20",
        topic: "rightOfWay",
        question:
          "You are crossing a sidewalk as you pull out of an alley. What must you do?",
        choices: [
          "Stop before the sidewalk and wait for pedestrians and traffic",
          "Slow to walking pace and continue",
          "Sound your horn as a warning",
          "Yield only if a pedestrian is within ten feet",
        ],
        correctIndex: 0,
        explanation:
          "You stop before the sidewalk. Maine puts the duty on the driver leaving a driveway or alley, and it is a stop rather than a slow.",
        context:
          "The statute states the general form: an operator must yield the right-of-way to a pedestrian on a sidewalk. Anyone crossing a sidewalk in a vehicle is entering space that belongs to people on foot, and the manual lists it in the same group as yielding to a pedestrian crossing with the light.",
        trap: "It is easy to treat the sidewalk as part of your driveway. From the pedestrian's side it is the footpath, and they are not expecting to give way on it.",
        excerptKey: "crossing-sidewalk-stop",
        sourceLabel: "Maine Driver's License Manual - Section 6, When to yield the right-of-way for waiting pedestrians",
        sourceUrl: hb("6-2"),
      },
      {
        id: "me_s4_21",
        topic: "parking",
        question:
          "Which of these does the Maine manual tell you to do after you have parked and switched off?",
        choices: [
          "Leave the transmission in neutral so the car can be pushed",
          "Set the parking brake and shift to park, or into first or reverse in a manual",
          "Leave the wheels straight in every situation",
          "Leave a window open so the car does not overheat",
        ],
        correctIndex: 1,
        explanation:
          "Set the parking brake and put the transmission in park - first or reverse gear in a car with a manual gearbox. The point is to make sure the car cannot move.",
        context:
          "Maine's parking statute reaches the same result from the legal side: an operator may not leave a vehicle standing unattended on a public way without effectively setting its brakes. The manual adds turning off the engine, taking the key, and locking the car if it will be out of sight.",
        trap: "Neutral with the parking brake on is a habit some drivers keep from older cars. It leaves nothing but the brake between the car and the hill.",
        excerptKey: "parking-brake-and-gear",
        sourceLabel: "Maine Driver's License Manual - Section 7, Parking",
        sourceUrl: hb("7-10"),
      },
      {
        id: "me_s4_22",
        topic: "signals",
        question:
          "There is more than one traffic light showing above the intersection you are entering. Which one applies to you?",
        choices: [
          "The nearest one",
          "The one showing the most restrictive indication",
          "The one directly over your lane",
          "The one on the far right of the mast",
        ],
        correctIndex: 2,
        explanation:
          "Obey the signal directly over your lane. Where lanes have different movements, they often have different signals.",
        context:
          "That is also how lane use control lights work - a separate indication hangs over each lane and each one governs only that lane. Getting into the correct lane early is what makes the rule easy to follow.",
        trap: "Reading the nearest or the brightest signal is how drivers turn on a green arrow that belongs to the lane beside them.",
        excerptKey: "obey-light-over-your-lane",
        sourceLabel: "Maine Driver's License Manual - Section 6, Lighted Arrows",
        sourceUrl: hb("6-3"),
      },
      {
        id: "me_s4_23",
        topic: "sharing",
        question:
          "You are meeting a horse and rider on a Maine road. What does the manual say?",
        choices: [
          "Sound the horn early so the rider knows you are coming",
          "Rev the engine to get the horse's attention",
          "Pass at normal speed to spend less time alongside",
          "Slow down and pass carefully, and do not use the horn or rev the engine",
        ],
        correctIndex: 3,
        explanation:
          "Slow down and pass with care. The manual warns against the horn and against revving the engine, because a startled animal is unpredictable and may swerve into your path.",
        context:
          "Horse-drawn vehicles and riders have the same right to the road as you do and must follow the same rules. Maine makes it an offense to purposefully frighten any animal being ridden, driven or led on or near a public way, and warning signs are posted where you are likely to meet them.",
        trap: "A horn feels like the courteous warning and is exactly the thing the manual tells you not to do.",
        excerptKey: "no-horn-near-animals",
        sourceLabel: "Maine Driver's License Manual - Section 10, Animal drawn vehicles and horseback riders",
        sourceUrl: hb("10-11"),
      },
      {
        id: "me_s4_24",
        topic: "licensing",
        question:
          "Under 21 and applying for a Maine licence, how much supervised practice must you log?",
        choices: [
          "40 hours, including 5 at night",
          "50 hours, including 10 at night",
          "60 hours, including 10 at night",
          "70 hours, including 10 at night",
        ],
        correctIndex: 3,
        explanation:
          "Seventy hours, of which at least 10 must be after dark. The hours only start counting once the permit has been issued.",
        context:
          "A parent, stepparent, guardian or spouse certifies the time on a form the Secretary of State prescribes, and an employer may certify it for someone with no parent. Drivers 21 and over are not required to log hours at all, and are not required to take driver education.",
        trap: "Fifty and 10 is the New England figure people quote from a neighboring state. Maine's is 70.",
        excerptKey: "permit-70-hours-dark",
        sourceLabel: "Maine BMV - Graduated Drivers License",
        sourceUrl: BMV_GDL,
      },
      {
        id: "me_s4_25",
        topic: "safety",
        question:
          "How often does the Maine manual say you should check your mirrors for traffic behind you?",
        choices: [
          "Every 6 to 8 seconds",
          "Every 15 to 20 seconds",
          "Only before changing lanes",
          "Once a minute",
        ],
        correctIndex: 0,
        explanation:
          "Every six to eight seconds. Doing it that often means you always know whether someone is following too closely or coming up fast.",
        context:
          "The manual pairs it with looking 20 to 30 seconds ahead. Together those two habits are what let you change speed or lane position early instead of reacting. It also names the moments when a mirror check is not optional: before slowing suddenly, before backing, and before a long or steep descent.",
        trap: "Checking only before a lane change means you find out about the car behind you at the moment you most need to have known already.",
        excerptKey: "check-mirrors-6-to-8",
        sourceLabel: "Maine Driver's License Manual - Section 8, Look behind",
        sourceUrl: hb("8-3"),
      },
      {
        id: "me_s4_26",
        topic: "rules",
        question:
          "Maine allows a load to overhang the fenders on one side of a passenger vehicle. Which side, and by how much?",
        choices: [
          "The left side, by up to six inches",
          "Either side, by up to a foot",
          "Neither side, by any amount",
          "The right side, by up to six inches",
        ],
        correctIndex: 3,
        explanation:
          "The right side, by no more than six inches. Nothing may extend beyond the line of the fenders on the left side at all.",
        context:
          "The same passage bars you from driving with a load, or with more than three people in the front seat, if that blocks your view to the front or the sides or interferes with the controls. Nobody may ride in a camp trailer, mobile home, semi-trailer, utility trailer or trunk while it is being moved.",
        trap: "The left side is the one that reaches into oncoming traffic, which is why the allowance is only on the right.",
        excerptKey: "load-six-inches",
        sourceLabel: "Maine Driver's License Manual - Section 11, Carrying Passengers and Freight",
        sourceUrl: hb("11-8"),
      },
      {
        id: "me_s4_27",
        topic: "impairment",
        question:
          "What does Maine's manual say a conditional licence means after an OUI conviction?",
        choices: [
          "You may only drive to and from work",
          "You may not drive between midnight and 5 a.m.",
          "You must carry an interlock device for life",
          "You may not operate a vehicle with any amount of alcohol in your system",
        ],
        correctIndex: 3,
        explanation:
          "The condition is zero alcohol. Drive with any amount and the licence is suspended for a year without a preliminary hearing.",
        context:
          "The condition lasts one year after a first OUI conviction and ten years after a second or later one. A conditional licensee who refuses a test faces a further two-year suspension on top of anything already imposed, and one who drives at 0.08 or more faces the suspension periods that apply to a second or third OUI.",
        trap: "There is no work licence in Maine during the minimum OUI suspension, so the conditional licence cannot be that. It is a licence with a sobriety condition attached.",
        excerptKey: "conditional-license",
        sourceLabel: "Maine Driver's License Manual - Section 3, Conditional Licenses",
        sourceUrl: hb("3-10"),
      },
      {
        id: "me_s4_28",
        topic: "emergencies",
        question:
          "An oncoming car is drifting into your lane. What does Maine's manual tell you to do?",
        choices: [
          "Steer left into the lane they have left",
          "Blow your horn, flash your lights, brake and pull right onto the shoulder or ditch",
          "Hold your line and brake hard",
          "Accelerate past before they reach you",
        ],
        correctIndex: 1,
        explanation:
          "Warn them with horn and lights, brake without locking the wheels, and get off to the right - into the shoulder or the ditch if that is what it takes.",
        context:
          "The manual is explicit about the direction: do not drive into the left lane. A driver who is drifting is likely to correct at the last moment, straight back into the lane you would have moved into.",
        trap: "Swerving left looks like it takes you into open road. It takes you into the space the other driver is about to wake up and reclaim.",
        excerptKey: "oncoming-car-in-lane",
        sourceLabel: "Maine Driver's License Manual - Section 9, If there is an oncoming car in your lane",
        sourceUrl: hb("9-7"),
      },
      {
        id: "me_s4_29",
        topic: "speed",
        question:
          "You are on a narrow, hilly rural road in Maine where the posted limit is 45. What does the basic speed rule require?",
        choices: [
          "You must drive at a careful and prudent speed no greater than is reasonable for the conditions",
          "You may drive 45 because the limit is posted",
          "You must drive at least 10 mph below the posted limit on a rural road",
          "You must drive at whatever speed the traffic around you has chosen",
        ],
        correctIndex: 0,
        explanation:
          "Maine's speed statute opens with the duty rather than a number: careful and prudent, no greater than reasonable and proper for the traffic, the surface and the width of the way.",
        context:
          "The posted limit is a ceiling under that duty, not a permission that overrides it. The manual makes the same point for weather - if conditions make the posted speed unsafe, you must slow down. There is a floor as well: driving so slowly that you impede normal and reasonable traffic movement is itself an offense.",
        trap: "The posted number is admissible evidence that you were not speeding and no evidence at all that you were driving prudently.",
        excerptKey: "stat-careful-prudent-speed",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2074, Rates of speed",
        sourceUrl: law("2074"),
      },
      {
        id: "me_s4_30",
        topic: "signs",
        question:
          "A construction warning sign in a Maine work zone is what color, and usually what shape?",
        choices: [
          "Yellow, and usually diamond shaped",
          "White, and usually rectangular",
          "Red, and usually octagonal",
          "Orange, and often diamond shaped",
        ],
        correctIndex: 3,
        explanation:
          "Black symbols or lettering on an orange background, and often a diamond. They alert you to construction or maintenance ahead and guide you through or around it.",
        context:
          "The other work zone hardware follows the same logic. A flashing or sequencing arrow panel tells you a lane ahead is closed and which lane to move into. Barricades, vertical panels, concrete barriers, drums and cones are channeling devices - keep to the middle of the lane and hold a responsible speed past them.",
        trap: "Yellow diamonds warn of things that are always there. Orange means the hazard was put there this morning and may have people standing in it.",
        excerptKey: "construction-warning-signs",
        sourceLabel: "Maine Driver's License Manual - Section 11, Construction Warning Signs",
        sourceUrl: hb("11-2"),
      },
      {
        id: "me_s4_31",
        topic: "rightOfWay",
        question:
          "You are on a single-lane bridge on a rural Maine road and another car reaches the far end at the same time as you reach yours. Who goes first?",
        choices: [
          "The first driver to the bridge",
          "The vehicle travelling downhill",
          "The lighter vehicle",
          "The driver on the right-hand approach",
        ],
        correctIndex: 0,
        explanation:
          "First to the bridge goes first, and then the two directions take turns. The manual puts it in exactly those terms.",
        context:
          "Rural Maine roads bring several hazards the rest of the manual does not cover: less traction on gravel and dirt, ditches and drop-offs where you expect a shoulder, open bridge gratings and steel decks that need a firm grip on the wheel, and uncontrolled intersections with no signs at all.",
        trap: "There is no vehicle-size or gradient rule here. It is order of arrival, the same principle as a four-way stop.",
        excerptKey: "single-lane-bridge",
        sourceLabel: "Maine Driver's License Manual - Section 11, Rural Roads",
        sourceUrl: hb("11-3"),
      },
      {
        id: "me_s4_32",
        topic: "parking",
        question:
          "Where does the Maine manual say to get out of your car after parking on a street?",
        choices: [
          "On the curb side if you can",
          "On the street side, so you can see traffic",
          "Whichever door is closer to your destination",
          "Through the rear door",
        ],
        correctIndex: 0,
        explanation:
          "The curb side. If you must use the street side, check behind you for traffic - especially bicycles - before you open the door.",
        context:
          "Maine's parking statute backs it up: you may not open a door on the side of moving traffic unless doing so is reasonably safe and does not interfere with traffic, and you may not leave it open longer than loading or unloading takes. The manual's Dutch Reach recommendation is aimed at the same risk.",
        trap: "Getting out street-side to walk around the car feels natural on a quiet road, and quiet roads are where cyclists travel fastest.",
        excerptKey: "exit-on-curb-side",
        sourceLabel: "Maine Driver's License Manual - Section 7, Parking",
        sourceUrl: hb("7-10"),
      },
      {
        id: "me_s4_33",
        topic: "signals",
        question:
          "A red light shows with a green arrow pointing left. What may you do?",
        choices: [
          "Nothing - the red overrides the arrow",
          "Turn left after coming to a complete stop",
          "Go cautiously in the direction of the arrow, yielding to all other vehicle and pedestrian traffic",
          "Go in any direction, since a green arrow releases the red",
        ],
        correctIndex: 2,
        explanation:
          "The arrow lets you go that way, cautiously, while yielding to everything else at the intersection. The red still holds every other movement.",
        context:
          "Arrows carry the same colors as round signals and mean the same things. A steady green arrow means proceed in the direction it points. A steady yellow arrow clears turning traffic before red. A steady red arrow holds that turn until it goes green.",
        trap: "\"Stop first\" is the right-turn-on-red habit. A green arrow is a protected movement, not a permission that starts with a stop.",
        excerptKey: "red-with-green-arrow",
        sourceLabel: "Maine Driver's License Manual - Section 6, Lighted Arrows",
        sourceUrl: hb("6-3"),
      },
      {
        id: "me_s4_34",
        topic: "sharing",
        question:
          "Maine's manual describes what to do when a large vehicle is passing you. What is it?",
        choices: [
          "Speed up to shorten the pass",
          "Move to the left side of your lane so they have room",
          "Brake sharply to let them by",
          "Stay as far to the right of your lane as possible until it is clear",
        ],
        correctIndex: 3,
        explanation:
          "Move to the right side of your lane and hold there until the vehicle is past. A truck at highway speed pushes a cushion of air to its side and rear.",
        context:
          "The same applies when a large vehicle is coming the other way - move as far right in your lane as you can to avoid the wind blast. And do not speed up while it passes; maintain your speed or ease off slightly.",
        trap: "Speeding up feels helpful and stretches out the time the two of you spend side by side, which is the part of the manoeuvre with no escape room.",
        excerptKey: "large-vehicle-passing-you",
        sourceLabel: "Maine Driver's License Manual - Section 10, Passing",
        sourceUrl: hb("10-9"),
      },
      {
        id: "me_s4_35",
        topic: "licensing",
        question:
          "Which vehicles does the Maine manual say do not need a title?",
        choices: [
          "Vehicles more than 25 years old, motorcycles under 300 cc, and trailers with an unloaded weight of 3,000 pounds or less",
          "Any vehicle bought out of state",
          "Any vehicle worth less than $1,000",
          "Vehicles more than 10 years old",
        ],
        correctIndex: 0,
        explanation:
          "Three categories: more than 25 years old, motorcycles with an engine under 300 cc, and trailers whose unloaded weight is 3,000 pounds or less.",
        context:
          "Everything else needs a title before it can be registered, and the title application goes in at first registration for a vehicle 25 years old or newer. The manual's other advice on the subject is short: keep the title in a safe place, and never in the vehicle.",
        trap: "The 25-year figure sounds like an antique-vehicle rule and is really an age threshold that a lot of ordinary Maine cars have quietly crossed.",
        excerptKey: "title-exempt-vehicles",
        sourceLabel: "Maine Driver's License Manual - Section 2, Titling Your Motor Vehicle",
        sourceUrl: hb("2-1"),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The rules Maine learners say caught them: exact distances the manual states once, numbers that live only in Title 29-A, and the places where two similar rules give different answers. Built from fifty-three forum threads and from the sections the Bureau itself flags.",
    questions: [
      {
        id: "me_s5_01",
        topic: "rightOfWay",
        question:
          "A pedestrian with a white cane is in the roadway ahead of you. How far away must you stop?",
        choices: [
          "At least 5 feet away",
          "At least 10 feet away",
          "At least 15 feet away",
          "Close enough to be seen, then wait",
        ],
        correctIndex: 1,
        explanation:
          "At least 10 feet, and you wait there until the person is out of danger. The same applies to anyone being led by a guide dog.",
        context:
          "Failing to yield to a visually impaired pedestrian carrying a white or metallic cane, or using a guide or personal care dog, is a traffic infraction, and Maine sets its own fine range for it - not less than $50 and not more than $1,000, well above the usual scale.",
        trap: "This is the single item Maine learners name most often as the one that beat them, because it is a specific number in a paragraph that otherwise reads like general advice.",
        commonlyMissed: true,
        excerptKey: "white-cane-10-feet",
        sourceLabel: "Maine Driver's License Manual - Section 6, Stop Lines",
        sourceUrl: hb("6-12"),
      },
      {
        id: "me_s5_02",
        topic: "licensing",
        question:
          "How many days does Maine law give you to tell the BMV about a change of name or address?",
        choices: ["10 days", "14 days", "30 days", "60 days"],
        correctIndex: 2,
        explanation:
          "Thirty days. The manual states it as a legal requirement, not a courtesy.",
        context:
          "It matters more than it looks. The renewal notice goes to the most recent address on file about 45 days before your licence expires, and if the BMV does not have the current one you may simply not receive it - and driving on an expired licence is unlawful.",
        trap: "Maine learners report being asked about administrative deadlines like this one and being surprised that a driving test wanted them. The manual contains it, so the exam may ask it.",
        commonlyMissed: true,
        excerptKey: "name-address-30-days",
        sourceLabel: "Maine Driver's License Manual - Section 1, Information about Your Driver's License",
        sourceUrl: hb("1-6"),
      },
      {
        id: "me_s5_03",
        topic: "impairment",
        question:
          "You are convicted of OUI and there was a passenger under 21 in your vehicle. What happens on top of the ordinary penalties?",
        choices: [
          "Nothing extra unless the passenger was under 16",
          "A further period of licence suspension is added",
          "The offense is upgraded to a Class C crime",
          "The vehicle is forfeited",
        ],
        correctIndex: 1,
        explanation:
          "An extra suspension is added to whatever the OUI or refusal already carried, and the presence of an under-21 passenger also triggers the mandatory 48 hours in jail on a first offense.",
        context:
          "Maine's manual gives two different lengths for that extra suspension in two different places - 180 days on page 3-6 and 275 days on page 3-11 - and Title 29-A section 2411 states 275 days. This question is written so that the answer is the same on either reading. If the exam asks for the number, 275 is the one the statute and the OUI-penalty section both give.",
        trap: "The internal disagreement in the manual is real and worth knowing about. Answer the principle when you can, and the statutory 275 days when a number is demanded.",
        commonlyMissed: true,
        excerptKey: "oui-275-day-addition",
        sourceLabel: "Maine Driver's License Manual - Section 3, Additional Suspension",
        sourceUrl: hb("3-11"),
      },
      {
        id: "me_s5_04",
        topic: "rules",
        question:
          "You hold a Maine learner's permit and you are stopped at a red light. May you pick up your phone?",
        choices: [
          "Yes, because the vehicle is not moving",
          "Yes, if the call is hands-free",
          "No - the prohibition applies even while the vehicle is temporarily stationary at a light or a stop sign",
          "Only to change music or navigation",
        ],
        correctIndex: 2,
        explanation:
          "No. Maine's permit rule names the situation explicitly: the ban covers a vehicle that is temporarily stationary because of traffic, a traffic light or a stop sign.",
        context:
          "Hands-free mode is available only to a driver who has turned 18 and is not on an intermediate licence or a learner's permit. A permit holder or intermediate licensee may only use a device after pulling the vehicle over to the side of, or off, a public way and stopping somewhere it can safely stay.",
        trap: "The stopped-at-a-light exception is what most drivers assume exists, and Maine wrote the statute specifically to close it.",
        commonlyMissed: true,
        excerptKey: "stat-permit-no-device",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 1304, Learner's permits",
        sourceUrl: law("1304"),
      },
      {
        id: "me_s5_05",
        topic: "speed",
        question:
          "You are driving on an unposted country road in Maine. A friend from Massachusetts tells you the limit is 55. Are they right?",
        choices: [
          "Yes - 55 is the unposted rural maximum in Maine too",
          "No - Maine's unposted maximum on other public ways is 45",
          "Yes, but only on state highways",
          "No - the unposted maximum is 50",
        ],
        correctIndex: 1,
        explanation:
          "Forty-five. Maine's default on all other public ways is 10 mph below the figure most neighbouring states use, and it applies wherever nothing is posted.",
        context:
          "Maine publishes three unposted maximums and no others: 15 mph in a school zone during the hours it applies, 25 mph in a business or residential district or built-up portion, and 45 mph everywhere else. A posted sign always governs where there is one.",
        trap: "This is the number out-of-state drivers get wrong most often, and it is the one that turns a routine drive into a 10-over ticket.",
        commonlyMissed: true,
        excerptKey: "stat-speed-45-other",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2074, Rates of speed",
        sourceUrl: law("2074"),
      },
      {
        id: "me_s5_06",
        topic: "sharing",
        question:
          "Passing a stopped school bus with its red lights flashing is what kind of offense in Maine?",
        choices: [
          "A traffic infraction with a fine",
          "A Class E crime with a minimum $250 fine",
          "A Class D crime",
          "A civil violation with no licence consequence",
        ],
        correctIndex: 1,
        explanation:
          "A Class E crime, with a $250 minimum fine for a first offense and a mandatory 30-day licence suspension for a second within three years.",
        context:
          "The manual's suspension list also names passing a stopped school bus among the offenses that can bring a 30-day suspension. A separate provision makes the registered owner liable for a traffic infraction when their vehicle is involved, which is how a report from the bus driver becomes a summons.",
        trap: "Most rules of the road in Maine are traffic infractions. This one, failing to yield to an emergency vehicle, and speeding by 30 or more are the everyday exceptions that are crimes.",
        commonlyMissed: true,
        excerptKey: "stat-school-bus-penalty",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2308, Overtaking and passing school buses",
        sourceUrl: law("2308"),
      },
      {
        id: "me_s5_07",
        topic: "parking",
        question:
          "Under the parking distances the Maine manual lists, how far must you stay from a crosswalk?",
        choices: ["10 feet", "15 feet", "20 feet", "25 feet"],
        correctIndex: 1,
        explanation:
          "Fifteen feet from a crosswalk. The manual's list also keeps you 10 feet from a fire hydrant and 15 feet from a fire station driveway entrance.",
        context:
          "Maine is careful about where these come from - the manual introduces the list with the words that some municipal ordinances do not allow you to park in these places. The state's own parking statute contains no distance list at all, only the 10-foot clear width and the 300-foot sight rule.",
        trap: "Ten and fifteen get swapped almost every time. The hydrant is the shorter distance, and the crosswalk the longer one.",
        commonlyMissed: true,
        excerptKey: "no-parking-municipal-list",
        sourceLabel: "Maine Driver's License Manual - Section 7, Parking",
        sourceUrl: hb("7-10"),
      },
      {
        id: "me_s5_08",
        topic: "emergencies",
        question:
          "Maine's manual sets a minimum fine for failing to move over or slow for a stopped emergency vehicle. What does the statute say it is?",
        choices: [
          "Not less than $75",
          "Not less than $150",
          "Not less than $275",
          "Not less than $500",
        ],
        correctIndex: 2,
        explanation:
          "Not less than $275. The same minimum applies under a separate section when the stationary vehicle is one a reasonable person would take to be disabled or is using its flashers.",
        context:
          "The manual describes the duty without the number: slow and yield, move to the next lane if possible, and if a lane change is unsafe, slow down and use caution as you drive by. Public service vehicles are covered as well as emergency ones - wreckers, utility trucks and refuse trucks using their authorized lights.",
        trap: "The disabled-vehicle version of this rule catches people who assume Move Over means police cars. In Maine, a car on the shoulder with its hazards on is covered too.",
        commonlyMissed: true,
        excerptKey: "stat-move-over-fine",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2054, Stationary vehicles",
        sourceUrl: law("2054"),
      },
      {
        id: "me_s5_09",
        topic: "safety",
        question:
          "The Maine manual gives a stopping-distance multiplier for snow and ice. What is it?",
        choices: [
          "One and a half to two times as far",
          "Two to four times as far",
          "Three to twelve times as far",
          "Ten times as far",
        ],
        correctIndex: 2,
        explanation:
          "Three to twelve times the distance you would need on dry pavement. The range is enormous because ice near freezing behaves quite differently from cold, dry ice.",
        context:
          "The winter section pairs the multiplier with technique: keep well behind the vehicle ahead, pump the brakes gently on and off, release the moment the wheels start to slip, and with anti-lock brakes press firmly and hold. Never slam the brakes, which locks the wheels and starts the skid.",
        trap: "Doubling your following distance sounds cautious and can still be a third of what the top of that range demands.",
        commonlyMissed: true,
        excerptKey: "ice-three-to-twelve",
        sourceLabel: "Maine Driver's License Manual - Section 11, Winter Driving",
        sourceUrl: hb("11-5"),
      },
      {
        id: "me_s5_10",
        topic: "signals",
        question:
          "Maine's turn signal rule states a distance. What is the requirement, exactly?",
        choices: [
          "The signal must be given continuously through at least the last 100 feet before turning",
          "The signal must be on for at least three seconds",
          "The signal must be given as soon as you decide to turn",
          "The signal must be on for at least the last 50 feet",
        ],
        correctIndex: 0,
        explanation:
          "One hundred feet, and continuously - a flick of the stalk at the last moment does not satisfy it.",
        context:
          "The manual repeats the 100 feet for lane changes. Two other duties travel with it: you may not stop or suddenly slow without first signalling to the driver behind, and if you are turning past a side street you hold the signal until you are beyond that street.",
        trap: "Three seconds is a driving-school habit and a reasonable one, but the exam is asking for the statutory distance.",
        commonlyMissed: true,
        excerptKey: "stat-signal-100-feet",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2071, Turning and signals",
        sourceUrl: law("2071"),
      },
      {
        id: "me_s5_11",
        topic: "rules",
        question:
          "A required stop at a railroad crossing - for a bus or a placarded truck - must be made within what range of the nearest rail?",
        choices: [
          "Between 100 feet and 50 feet",
          "Between 50 feet and 15 feet",
          "Between 25 feet and 10 feet",
          "Anywhere clear of the tracks",
        ],
        correctIndex: 1,
        explanation:
          "Not less than 15 feet and not more than 50 feet from the nearest rail. Inside that band the driver listens, looks both ways and confirms no train is coming.",
        context:
          "The manual gives an ordinary car a different figure: where red lights are flashing, stop at least 15 feet from the crossing. Title 29-A adds a speed rule for every vehicle - at 100 feet from the nearest rail, reduce to a reasonable and proper rate, look in each direction and cross cautiously.",
        trap: "Maine learners report being failed on their road test for stopping at a crossing in a car. The required stops belong to buses and placarded vehicles, not to you.",
        commonlyMissed: true,
        excerptKey: "stat-railroad-15-to-50",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2076, Railroad or grade crossings",
        sourceUrl: law("2076"),
      },
      {
        id: "me_s5_12",
        topic: "licensing",
        question:
          "The illegal transportation of liquor by a minor in a motor vehicle carries what minimum licence suspension in Maine?",
        choices: ["15 days", "30 days", "60 days", "90 days"],
        correctIndex: 1,
        explanation:
          "At least 30 days, and it is one of Maine's mandatory suspensions - no discretion and no work licence option.",
        context:
          "The manual's mandatory list also covers failing to answer a summons or pay a fine, driving to endanger, illegal transportation of drugs by a minor, and OUI or refusal. Using false credentials to obtain liquor is separate again: a court may suspend for 30 days on a first offense and must suspend for 90 on a second, and it carries six demerit points.",
        trap: "Maine learners specifically report being asked how many days a substance-related violation costs. The manual prints the numbers; the exam can use them.",
        commonlyMissed: true,
        excerptKey: "driving-to-endanger-30",
        sourceLabel: "Maine Driver's License Manual - Section 1, Mandatory Suspensions",
        sourceUrl: hb("1-10"),
      },
      {
        id: "me_s5_13",
        topic: "signs",
        question:
          "There is a stop line painted well back from the intersection, and buildings block your view of the cross street. What should you do?",
        choices: [
          "Stop at the line only, then go",
          "Ignore the line and stop where you can see",
          "Stop at the line, then edge forward slowly and stop again where you can see approaching traffic",
          "Stop level with the stop sign",
        ],
        correctIndex: 2,
        explanation:
          "Stop at the line first, because that is the legal stopping point. Then creep forward until you can actually see, and stop again before you commit.",
        context:
          "Maine tells you why the line is set back: stop lines at intersections are placed to give larger vehicles the room they need to turn. The manual separately says that where your view is blocked by buildings, trees, a fence or parked cars, you edge forward slowly until you can see.",
        trap: "Maine driving instructors and examiners are reported to look for exactly this two-stage stop, and drivers who stop once - at either the line or the sight line - lose the point.",
        commonlyMissed: true,
        excerptKey: "blocked-view-edge-forward",
        sourceLabel: "Maine Driver's License Manual - Section 7, Intersections",
        sourceUrl: hb("7-2"),
      },
      {
        id: "me_s5_14",
        topic: "impairment",
        question:
          "The Maine manual totals up what a single OUI can cost. What figure does it print?",
        choices: ["$2,500", "$4,000", "$7,240", "$10,000"],
        correctIndex: 2,
        explanation:
          "$7,240. The manual itemizes it: towing, bail bond, lawyer, fine, alcohol education course, a three-year insurance surcharge, lost work time and the reinstatement fee.",
        context:
          "The largest single line in that table is the insurance surcharge over three years, at $4,000 - four times the fine. The manual makes the point that these costs fall hardest on the youngest drivers, who are least able to absorb them.",
        trap: "Maine learners consistently report that the exam leans on the OUI chapter, and this is one of the few hard numbers in it that is not a suspension length.",
        commonlyMissed: true,
        excerptKey: "oui-cost-7240",
        sourceLabel: "Maine Driver's License Manual - Section 3, Alcohol and the Law",
        sourceUrl: hb("3-13"),
      },
      {
        id: "me_s5_15",
        topic: "rightOfWay",
        question:
          "Maine's statute says a driver at intersecting public ways has the right-of-way over whom, and must yield to whom?",
        choices: [
          "Right-of-way over a vehicle on the right; yield to one on the left",
          "Right-of-way over any vehicle that arrives later, in every case",
          "Right-of-way over any vehicle on a smaller road",
          "Right-of-way over a vehicle on the left; yield to one on the right",
        ],
        correctIndex: 3,
        explanation:
          "You have priority over a vehicle to your left and must yield to one on your right. Roundabouts and an officer directing traffic are the two exceptions.",
        context:
          "Read that way round it is easier to apply at speed: look right and give way, look left and expect them to give way to you. The manual states the same rule as \"yield to the car on your right\" at an uncontrolled intersection.",
        trap: "Learners who memorize the manual's one-line version often reverse it under pressure. The statute's two-sided wording is the version that survives a stressful intersection.",
        commonlyMissed: true,
        excerptKey: "stat-right-of-way-intersections",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2053, Right-of-way",
        sourceUrl: law("2053"),
      },
      {
        id: "me_s5_16",
        topic: "safety",
        question:
          "How much space does Maine's manual say you should leave between your chest and the steering wheel, and why?",
        choices: [
          "Six inches, so you can reach the pedals",
          "Ten inches, because of the airbag",
          "Twelve inches, for visibility over the hood",
          "As little as possible, for steering leverage",
        ],
        correctIndex: 1,
        explanation:
          "Ten inches, and the reason is the airbag. It deploys at speed and needs that distance to do its job instead of doing damage.",
        context:
          "The rest of the seat setup goes with it: sit upright with your back against the seat, high enough to see the road, able to move your foot from brake to gas with your heel on the floor, with the top of the wheel no higher than your shoulders and below your chin, and the head restraint touching the back of your head above ear level.",
        trap: "Sitting close feels like better control and puts your chest inside the airbag's deployment zone.",
        commonlyMissed: true,
        excerptKey: "seat-10-inches",
        sourceLabel: "Maine Driver's License Manual - Section 4, Adjusting Your Seat",
        sourceUrl: hb("4-1"),
      },
      {
        id: "me_s5_17",
        topic: "sharing",
        question:
          "A bicyclist ahead of you is riding in the middle of a narrow lane. What does Maine's manual say about that?",
        choices: [
          "The rider is breaking the law and should be as far right as possible",
          "The rider should move onto the sidewalk",
          "Where the road is too narrow to share safely, taking the travel lane is what riders are supposed to do",
          "The rider may do it only on roads posted under 25 mph",
        ],
        correctIndex: 2,
        explanation:
          "On a road too narrow for a car and a bike side by side, the manual says bicycles should take the travel lane - riding in or near its center.",
        context:
          "Maine's statute allows a rider to leave the right portion of the way for a list of reasons: overtaking, preparing to turn left, going straight where right turns are permitted, and avoiding hazards including a lane of substandard width. A substandard lane is defined as one too narrow for a bicycle and a vehicle to travel safely side by side.",
        trap: "A rider in the middle of the lane looks obstructive and is doing what the manual and the statute both contemplate. Squeezing past inside the lane is how the three-foot rule gets broken.",
        commonlyMissed: true,
        excerptKey: "take-the-travel-lane",
        sourceLabel: "Maine Driver's License Manual - Section 10, Bicycles",
        sourceUrl: hb("10-2"),
      },
      {
        id: "me_s5_18",
        topic: "speed",
        question:
          "Maine sets a fine for a driver who fails to slow appropriately in an emergency zone. What is the minimum?",
        choices: [
          "Not less than $100",
          "Not less than $250",
          "Not less than $500",
          "There is no separate fine",
        ],
        correctIndex: 1,
        explanation:
          "Not less than $250. The emergency zone rule is separate from the Move Over rule and carries its own penalty.",
        context:
          "An emergency zone is any part of a way where at least one stationary ambulance, emergency medical, fire, hazardous material response or police vehicle is working with its emergency lights on. It can be marked by anything reasonably visible - lights, signs, cones, flaggers or mobile lighting - and the duty is a careful and prudent speed for the conditions.",
        trap: "Maine has two separate rules about a stopped emergency vehicle: how you pass it, at $275 minimum, and how fast you go past it, at $250 minimum. They are different sections and can both apply.",
        commonlyMissed: true,
        excerptKey: "stat-emergency-zone-fine",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2074, Emergency zone",
        sourceUrl: law("2074"),
      },
      {
        id: "me_s5_19",
        topic: "parking",
        question:
          "Maine law will not let you park where an approaching driver cannot see far enough. What are the two distances?",
        choices: [
          "A clear view for 300 feet beyond the car, before coming within 200 feet of it",
          "A clear view for 200 feet beyond the car, before coming within 100 feet of it",
          "A clear view for 500 feet beyond the car, before coming within 300 feet of it",
          "A clear view for 150 feet in each direction",
        ],
        correctIndex: 0,
        explanation:
          "An approaching driver must have a clear view of the way for 300 feet beyond your parked car, before getting within 200 feet of it.",
        context:
          "The same section requires 10 feet of clear, unobstructed width for other vehicles to pass. Together the two rules rule out parking just over a crest or around a bend even where there is plenty of room to squeeze past.",
        trap: "The sight-distance half of the rule is invisible from the driver's seat, which is why the statute states it as a number rather than leaving it to judgment.",
        commonlyMissed: true,
        excerptKey: "stat-parking-clear-width",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2068, Parking",
        sourceUrl: law("2068"),
      },
      {
        id: "me_s5_20",
        topic: "emergencies",
        question:
          "How many minutes does the Maine manual say a car with its windows and doors closed may float?",
        choices: ["Under a minute", "1 to 2 minutes", "3 to 10 minutes", "15 to 20 minutes"],
        correctIndex: 2,
        explanation:
          "Three to ten minutes. The manual's practical advice is to go out through a window, because water pressure makes a door very hard to open.",
        context:
          "If the car has power windows, open them at once - water will short the electrical system and take the option away. The flooding section is blunt about avoiding the situation in the first place: six inches of water can float a small car and two feet will carry away most vehicles.",
        trap: "Waiting for the car to fill so the pressure equalizes is advice from an era of hand-cranked windows, and it burns the minutes you had.",
        commonlyMissed: true,
        excerptKey: "car-in-water",
        sourceLabel: "Maine Driver's License Manual - Section 9, If your vehicle plunges into water",
        sourceUrl: hb("9-7"),
      },
      {
        id: "me_s5_21",
        topic: "rules",
        question:
          "Maine law makes it an offense to read something while driving. What exactly is exempt?",
        choices: [
          "Nothing - all reading is prohibited",
          "Anything displayed on a mounted screen",
          "Anything a passenger holds up for you",
          "A map or written directions to a specific location",
        ],
        correctIndex: 3,
        explanation:
          "A map or written directions to a specific location is the only exemption the manual gives. Everything else counted as printed material is out.",
        context:
          "It sits alongside Maine's distraction rules rather than replacing them. Failure to maintain control of a motor vehicle is a separate infraction: commit any other traffic infraction, or be in a reportable crash causing property damage, while engaged in an activity that impairs your ability to drive safely, and you can be charged with that too.",
        trap: "The exemption is narrow and specific. A magazine, a work document or a printed email are all printed material.",
        excerptKey: "printed-material-illegal",
        sourceLabel: "Maine Driver's License Manual - Section 9, Speeding Up",
        sourceUrl: hb("9-2"),
      },
      {
        id: "me_s5_22",
        topic: "signals",
        question:
          "Maine's manual says a yellow light does one particular job. What is it?",
        choices: [
          "It gives you time to accelerate through",
          "It warns of a hazard rather than a phase change",
          "It permits a turn if no one is coming",
          "It clears the intersection before the light turns red",
        ],
        correctIndex: 3,
        explanation:
          "A yellow light exists to empty the intersection before the red arrives. The manual's instruction is caution and begin to slow down.",
        context:
          "Maine's statute puts the same thing as a warning to the driver: a steady yellow means take warning that the green is being terminated or a red will show immediately. Treating it as a phase you may enter is what leaves cars sitting in the intersection when the cross traffic gets green.",
        trap: "Reading yellow as \"hurry\" is exactly backwards. Its purpose is to get vehicles out, not to let more in.",
        excerptKey: "yellow-light",
        sourceLabel: "Maine Driver's License Manual - Section 6, Traffic Signals",
        sourceUrl: hb("6-3"),
      },
      {
        id: "me_s5_23",
        topic: "licensing",
        question:
          "How long must a Maine driver hold an intermediate licence before the restrictions come off?",
        choices: ["90 days", "180 days", "270 days", "One year"],
        correctIndex: 2,
        explanation:
          "Two hundred and seventy days from the date the licence was issued, and the period can run past the driver's 18th birthday.",
        context:
          "A violation restarts the clock: the restrictions are extended by another 270 days, and a further violation during that extension extends them again. Alongside the extension comes a suspension - 60 days for a first violation, 180 days for a second, and a year for a third or later one.",
        trap: "Turning 18 does not end the restrictions. The 270 days run from issue, and violations push the end date further out.",
        commonlyMissed: true,
        excerptKey: "intermediate-270-days-web",
        sourceLabel: "Maine BMV - License Age Restrictions",
        sourceUrl: BMV_AGES,
      },
      {
        id: "me_s5_24",
        topic: "impairment",
        question:
          "Under Maine's implied consent law, what is the driver told a refusal will do, before the refusal can be used against them?",
        choices: [
          "That it will suspend the licence for a period of up to 6 years",
          "That it will result in an immediate arrest",
          "That the vehicle will be impounded",
          "That the officer will apply for a warrant",
        ],
        correctIndex: 0,
        explanation:
          "The warning names a suspension of up to six years, that the refusal is admissible at an OUI trial, and that it counts as an aggravating factor bringing a mandatory minimum period of incarceration.",
        context:
          "The warning matters legally. If the officer did not give it, the increase in minimum penalties for refusing is not mandatory, and a suspension must be removed if a hearing finds the driver would not have refused but for the missing warning.",
        trap: "Six years is the outer limit for a fourth refusal, not what a first one costs. A first refusal is 275 days.",
        commonlyMissed: true,
        excerptKey: "stat-refusal-warning",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2521, Implied consent to chemical tests",
        sourceUrl: law("2521"),
      },
      {
        id: "me_s5_25",
        topic: "safety",
        question:
          "Maine's manual says one thing about the first few minutes of rainfall. What?",
        choices: [
          "The pavement can be very slippery, because heat brings oil to the surface",
          "Visibility is at its worst in the first few minutes",
          "Tires grip better while the road is only damp",
          "Hydroplaning is impossible until the water pools",
        ],
        correctIndex: 0,
        explanation:
          "Heat draws oil out of the asphalt and other vehicles have dropped oil on the surface. Until the rain washes it away, the road is at its most slippery.",
        context:
          "The manual repeats it in the rain section with a different image: road oil and water mixing into a greasy film. Two related warnings sit near it - bridges and overpasses freeze first and dry out last, and road ice near freezing point is slushy and more slippery than colder ice.",
        trap: "The instinct is that a light shower is harmless and a downpour is dangerous. The first few minutes of the shower are the part the manual singles out.",
        commonlyMissed: true,
        excerptKey: "first-rain-slippery",
        sourceLabel: "Maine Driver's License Manual - Section 8, Slippery roads",
        sourceUrl: hb("8-6"),
      },
      {
        id: "me_s5_26",
        topic: "rightOfWay",
        question:
          "Maine's roundabout statute contains a lane restriction the manual does not mention. What is it?",
        choices: [
          "You may not change lanes inside the circle",
          "You may not enter with a trailer",
          "You must signal on entry as well as exit",
          "You may not travel beyond two exit points in the outside lane",
        ],
        correctIndex: 3,
        explanation:
          "The outside lane will not carry you past two exit points. Going further round means using an inner lane or leaving and re-entering.",
        context:
          "The statute also says you yield to a vehicle on your left as you circulate, that you may drive only to the right of the center island, and that a trailer's wheels may cross the traversable center of a mini-roundabout while the towing vehicle's may not. The manual's version is shorter: yield to traffic in the circle, enter to the right, follow the lane lines, signal your exit.",
        trap: "The manual suggests using the rightmost lane when leaving within two exits, and a driver who reads that as permission to stay there for a full circuit is breaking the statute.",
        excerptKey: "stat-roundabout-two-exits",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2053, Right-of-way",
        sourceUrl: law("2053"),
      },
      {
        id: "me_s5_27",
        topic: "signs",
        question:
          "Maine's manual gives a rule about how far a pass may take you before a no-passing zone. What is it?",
        choices: [
          "You must complete the pass before you reach the beginning of the zone",
          "You may finish a pass inside the zone if you started before it",
          "You may enter the zone if the oncoming lane is empty",
          "The zone begins at the first sign, not the first painted line",
        ],
        correctIndex: 0,
        explanation:
          "The pass has to be finished before the no-passing zone begins. Starting one you cannot complete in time is the violation.",
        context:
          "Two sign types mark the zone: a yellow pennant NO PASSING ZONE sign on the left of the road, and a rectangular white DO NOT PASS regulatory sign on the right. Title 29-A separately forbids crossing an unbroken center line at all, except in an emergency.",
        trap: "The intuition that you can finish what you started is exactly what Maine's rule closes off - the requirement is about where the pass ends, not where it began.",
        commonlyMissed: true,
        excerptKey: "complete-pass-before-zone",
        sourceLabel: "Maine Driver's License Manual - Section 7, Signs and Markings",
        sourceUrl: hb("7-8"),
      },
      {
        id: "me_s5_28",
        topic: "sharing",
        question:
          "Maine's manual says something specific about a motorcycle's turn signal. What?",
        choices: [
          "It is always brighter than a car's",
          "It cancels automatically after 100 feet",
          "It may not self-cancel, so a flashing signal does not prove the rider is turning",
          "It flashes at twice the rate of a car's",
        ],
        correctIndex: 2,
        explanation:
          "Many motorcycle signals do not cancel themselves, so a rider may simply have forgotten one is on. Do not commit to a move on the strength of it.",
        context:
          "The manual gives the same warning about cars in its intersection chapter - do not turn into a lane just because an oncoming vehicle is signalling, because the driver may intend to turn after passing you. With motorcycles it is more often a signal nobody switched off.",
        trap: "This is the mechanism behind a large share of car-motorcycle crashes: a driver turns left across a rider whose signal suggested they were turning off.",
        commonlyMissed: true,
        excerptKey: "motorcycle-signal-not-cancel",
        sourceLabel: "Maine Driver's License Manual - Section 10, Motorcycles or Mopeds",
        sourceUrl: hb("10-5"),
      },
      {
        id: "me_s5_29",
        topic: "speed",
        question:
          "Which of these is an offense under Maine's speed law, as well as going too fast?",
        choices: [
          "Driving below the posted limit on any highway",
          "Driving at exactly the posted limit in the left lane",
          "Slowing for a hazard other drivers cannot see",
          "Driving so slowly that you impede normal and reasonable traffic movement",
        ],
        correctIndex: 3,
        explanation:
          "Maine makes it an offense to operate at such a slow speed as to impede normal and reasonable movement of traffic, unless the reduced speed is necessary for safe operation or required by law.",
        context:
          "The manual makes the practical point beside it: if many cars are pulling out to pass you even though you are at the posted limit, ease off or move right so they can pass safely. Some highways also carry posted minimum speed limits.",
        trap: "Being under the limit is not automatically lawful, and the exceptions - safety and compliance with law - are what protect a driver who slows for a genuine hazard.",
        excerptKey: "stat-impede-traffic",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2075, Other speed regulations",
        sourceUrl: law("2075"),
      },
      {
        id: "me_s5_30",
        topic: "emergencies",
        question:
          "Maine's manual gives first-aid guidance at a crash. Which of these does it say NOT to do?",
        choices: [
          "Give an injured person something to drink",
          "Cover the victim with a blanket or coat",
          "Put direct pressure on a bleeding wound",
          "Begin CPR if you are trained and the victim is not breathing",
        ],
        correctIndex: 0,
        explanation:
          "Do not give an injured person anything to drink - not even water. Everything else in that list is what the manual tells you to do.",
        context:
          "The other cautions are as firm: do not move a victim unless fire or another life-threatening danger forces it, stay away from downed wires and warn the occupants to stay inside the vehicle, and do not put ointment or grease on a burn - cool water and a clean cloth instead.",
        trap: "Offering water is the most natural thing to do for someone in shock, and it is on the manual's short list of things not to do.",
        commonlyMissed: true,
        excerptKey: "first-aid-no-drink",
        sourceLabel: "Maine Driver's License Manual - Section 9, Emergency First Aid",
        sourceUrl: hb("9-4"),
      },
      {
        id: "me_s5_31",
        topic: "parking",
        question:
          "You are parking facing downhill on a Maine street with a curb. Which way do the wheels go?",
        choices: [
          "To the left, away from the curb",
          "Straight, with the parking brake on",
          "To the right, into the curb",
          "It does not matter if the parking brake is set",
        ],
        correctIndex: 2,
        explanation:
          "Downhill, the wheels go to the right so the curb stops the car if it rolls. That is true whether there is a curb or not.",
        context:
          "The manual gives the whole set in one sentence: turn the wheels right when parking downhill or uphill without a curb, and left only when parking uphill with a curb. Then set the parking brake and shift into park, or first or reverse in a manual.",
        trap: "Three of the four cases are wheels to the right, which makes the fourth - uphill with a curb - the one that gets answered wrongly.",
        commonlyMissed: true,
        excerptKey: "hill-parking-wheels",
        sourceLabel: "Maine Driver's License Manual - Section 7, Parking",
        sourceUrl: hb("7-10"),
      },
      {
        id: "me_s5_32",
        topic: "rules",
        question:
          "Maine forbids one particular use of a parking lot. What is it?",
        choices: [
          "Driving through it to avoid obeying a traffic control device",
          "Cutting through it after dark",
          "Using it to turn around",
          "Driving through it faster than 10 mph",
        ],
        correctIndex: 0,
        explanation:
          "You may not drive through a parking area to avoid obeying or conforming to a traffic control device - cutting the corner of a signal through a gas station forecourt is the everyday version.",
        context:
          "It sits in the manual's traffic controls section, which also covers directions from law enforcement, highway workers and school crossing guards. When police are not present, signals and signs carry the authority of law, and removing or defacing one is unlawful.",
        trap: "It feels like a shortcut rather than an offense, and Maine names it specifically because so many drivers treat a corner lot as a legal bypass.",
        excerptKey: "no-cut-through-parking-lot",
        sourceLabel: "Maine Driver's License Manual - Section 6, Traffic Controls",
        sourceUrl: hb("6-3"),
      },
      {
        id: "me_s5_33",
        topic: "signals",
        question:
          "Maine's manual describes what to do if an oncoming driver leaves their high beams on. What is it?",
        choices: [
          "Look toward the right side of the road and slow down",
          "Flash your own high beams until they dim",
          "Close one eye to preserve night vision",
          "Look straight at their headlights so your eyes adjust",
        ],
        correctIndex: 0,
        explanation:
          "Slow down and shift your gaze to the right edge of the road. You keep enough of the lane edge in view to stay on the road until they pass.",
        context:
          "The manual is explicit about the alternative: do not try to get back at the other driver by leaving your own brights on, because then both of you are blinded. Maine's law requires dimming within 500 feet of an oncoming vehicle and within 300 feet of one you are following.",
        trap: "Retaliating with your own high beams is common and doubles the number of drivers who cannot see.",
        excerptKey: "blinded-look-right",
        sourceLabel: "Maine Driver's License Manual - Section 8, Seeing Well at Night",
        sourceUrl: hb("8-16"),
      },
      {
        id: "me_s5_34",
        topic: "licensing",
        question:
          "You are 19, hold a Maine permit, and want to book the road test. What must be true first?",
        choices: [
          "You have held the permit for six months and logged 70 hours including 10 at night",
          "You have completed driver education",
          "You have held the permit for a year",
          "Nothing beyond passing the written exam",
        ],
        correctIndex: 0,
        explanation:
          "Under 21 means both conditions apply: six months on the permit and 70 hours of practice with 10 of them after dark.",
        context:
          "Driver education is required only for applicants under 18. At 18 to 20 you skip the course but keep the six-month wait and the logged hours. From 21 there is no wait and no log at all - just the tests.",
        trap: "The three age brackets look similar and differ in exactly which requirements survive. Eighteen drops driver education; twenty-one drops the wait and the hours.",
        commonlyMissed: true,
        excerptKey: "permit-under-21-six-months",
        sourceLabel: "Maine BMV - Graduated Drivers License",
        sourceUrl: BMV_GDL,
      },
      {
        id: "me_s5_35",
        topic: "impairment",
        question:
          "The Maine manual gives a figure for how long it takes your eyes to recover from headlight glare. What is it?",
        choices: [
          "About two seconds",
          "About four seconds",
          "About seven seconds",
          "About twelve seconds",
        ],
        correctIndex: 2,
        explanation:
          "About seven seconds for a sober driver, and the manual points out that at 55 mph that is nearly the length of two football fields travelled effectively blind. A drinking driver takes significantly longer.",
        context:
          "The passage is part of the manual's account of how alcohol dismantles perception - it relaxes the eye muscles, reduces the ability to spot merging, passing or parked vehicles to the side, and damages the judgment of how far away another vehicle is.",
        trap: "It reads as a fact about night driving and it is filed under drinking, which is exactly where the exam's OUI emphasis will look for it.",
        commonlyMissed: true,
        excerptKey: "glare-recovery-seven-seconds",
        sourceLabel: "Maine Driver's License Manual - Section 3, How Drinking Impairs Driving",
        sourceUrl: hb("3-7"),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix the Bureau publishes for the real thing: rules of the road, the meaning of signs, pedestrian and bicycle safety, Maine's operating under the influence laws, and distracted driving. Twenty-four right is a pass.",
    questions: [
      {
        id: "me_s6_01",
        topic: "signs",
        question: "What does a sign with a red circle and a red slash across a symbol mean?",
        choices: [
          "The symbol shows something you may not do",
          "The symbol shows a hazard ahead",
          "The symbol shows a service that is closed",
          "The symbol shows a road that is under construction",
        ],
        correctIndex: 0,
        explanation:
          "The circle-and-slash is a prohibition. Whatever the symbol shows - a left turn, a U-turn, a truck - is the thing you may not do here.",
        context:
          "It appears on regulatory signs, which are square, rectangular or a special shape and white with black, red or green lettering. Regulatory signs carry the force of law, unlike the yellow diamonds that only warn.",
        excerptKey: "red-circle-and-slash",
        sourceLabel: "Maine Driver's License Manual - Section 6, Regulatory Signs",
        sourceUrl: hb("6-6"),
      },
      {
        id: "me_s6_02",
        topic: "rightOfWay",
        question:
          "You are turning left at an intersection and a cyclist is approaching from the opposite direction. What must you do?",
        choices: [
          "Turn quickly, before the cyclist arrives",
          "Yield to the cyclist and turn only when it can be done safely",
          "Sound your horn and turn",
          "Turn if the cyclist is more than one car length away",
        ],
        correctIndex: 1,
        explanation:
          "You yield. Maine says a driver turning left must give way to a bicycle or roller skier coming the other way, and may not turn unless it can be done safely and without interfering with them.",
        context:
          "The same duty applies to right turns near a cyclist proceeding in the same direction. Riders travel faster than most drivers estimate - the manual notes that experienced cyclists easily exceed 30 mph - which is why judging the gap by eye goes wrong.",
        trap: "A bicycle looks slower than it is, and the left turn across its path is the manoeuvre the manual singles out for both bicycles and motorcycles.",
        excerptKey: "left-turn-yield-bicycle-hb",
        sourceLabel: "Maine Driver's License Manual - Section 6, Yielding Right-Of-Way",
        sourceUrl: hb("6-2"),
      },
      {
        id: "me_s6_03",
        topic: "impairment",
        question:
          "Which of these does the Maine manual say alcohol affects?",
        choices: [
          "Only reaction time",
          "Only judgment and coordination",
          "Judgment, vision, color distinction and reaction time",
          "Only your ability to stay awake",
        ],
        correctIndex: 2,
        explanation:
          "The manual names all four: judgment, vision, the ability to distinguish colors, and reaction time. Vision is the one it calls your most important driving sense.",
        context:
          "It adds that the effects arrive before you notice them - as sight, reflexes, coordination and judgment fall away, you become less aware of it and develop a false sense of confidence.",
        trap: "Color distinction is the one nobody guesses, and it is the one that matters at a signalized intersection at night.",
        excerptKey: "alcohol-affects-color-reaction",
        sourceLabel: "Maine Driver's License Manual - Section 3, Effect of Alcohol and other Impairing Drugs",
        sourceUrl: hb("3-6"),
      },
      {
        id: "me_s6_04",
        topic: "rules",
        question:
          "When may you drive to the left of the center line on a two-way road in Maine?",
        choices: [
          "Whenever there is no oncoming traffic in sight",
          "Whenever the vehicle ahead is travelling below the speed limit",
          "Only on roads posted above 45 mph",
          "Only where the marking on your side is broken and the way ahead is clearly visible and free of oncoming traffic",
        ],
        correctIndex: 3,
        explanation:
          "You may cross only where the line on your side is broken, and only when the left side is clearly visible and free of oncoming traffic far enough ahead to finish the pass.",
        context:
          "Maine's statute also bars going left of center when approaching the crest of a grade or a curve with an obstructed view, within 100 feet of an intersection or railroad grade crossing, and within 100 feet of a bridge, viaduct or tunnel where the view is blocked.",
        trap: "\"No traffic in sight\" is not the standard on a hill or a bend, where the whole problem is what you cannot see.",
        excerptKey: "stat-no-left-of-center",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2070, Passing another vehicle",
        sourceUrl: law("2070"),
      },
      {
        id: "me_s6_05",
        topic: "sharing",
        question:
          "Where is a large truck's biggest side blind spot?",
        choices: [
          "On the left, alongside the cab",
          "On the right, from behind the cab down the length of the trailer",
          "Directly in front of the bumper",
          "Above and behind the trailer roof",
        ],
        correctIndex: 1,
        explanation:
          "The right side. It starts behind the cab and runs the length of the truck, which makes it the easiest place for a car to disappear.",
        context:
          "The manual calls the four blind areas the No-Zones - sides, rear and front - and gives one test that covers all of them: if you cannot see the driver's face in the side mirror, they cannot see you. Do not drive alongside a large vehicle any longer than you must.",
        trap: "The left side has a blind spot too, and it is smaller, which is why passing on the left is preferred.",
        excerptKey: "side-no-zone-right",
        sourceLabel: "Maine Driver's License Manual - Section 10, Side No-Zones",
        sourceUrl: hb("10-7"),
      },
      {
        id: "me_s6_06",
        topic: "speed",
        question:
          "What is the unposted maximum speed in a Maine business district?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 1,
        explanation:
          "Twenty-five miles per hour, the same figure Maine uses for a residential district and for a built-up portion of the state.",
        context:
          "A built-up portion is defined by the statute rather than by a town boundary: structures less than 150 feet apart, continuing for at least a quarter of a mile. That is why the 25 mph default can apply on a road that does not obviously look like a town center.",
        excerptKey: "stat-speed-25-business",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2074, Rates of speed",
        sourceUrl: law("2074"),
      },
      {
        id: "me_s6_07",
        topic: "safety",
        question:
          "You are following a motorcycle. What following distance does the Maine manual give?",
        choices: [
          "Two seconds",
          "Three seconds",
          "At least four seconds, and more when it is wet",
          "One car length for every 10 mph",
        ],
        correctIndex: 2,
        explanation:
          "At least four seconds, increased in the wet. A rider can change speed or lane position suddenly to avoid a pothole, gravel or a slick patch.",
        context:
          "Four seconds is Maine's baseline behind any vehicle, and the manual lists the situations where you add more: slick roads, following a cyclist or a large vehicle, at night, in fog, behind a vehicle that must stop at railroad crossings, and when your own load is heavy.",
        trap: "Motorcycles stop shorter than cars, which makes a short following distance feel safe and is exactly why it is not.",
        excerptKey: "motorcycle-four-seconds",
        sourceLabel: "Maine Driver's License Manual - Section 10, Motorcycles or Mopeds",
        sourceUrl: hb("10-5"),
      },
      {
        id: "me_s6_08",
        topic: "parking",
        question:
          "You have to leave your car on the shoulder of a Maine road. What does the manual tell you to do?",
        choices: [
          "Leave it in the traffic lane with the flashers on",
          "Park facing oncoming traffic so drivers can see you",
          "Leave the front wheels turned toward the road",
          "Get as far from the driving lanes as possible, onto the shoulder if there is one",
        ],
        correctIndex: 3,
        explanation:
          "Move as far away from the driving lanes as you can. If there is a roadside shoulder, pull as far onto it as it allows.",
        context:
          "Maine's parking statute adds a rule for the road outside a business or residence district: you may not park on the traveled portion of a public way when it is practicable to park off it. Lights matter too - a vehicle may not stand on the left side of a way with its lights facing oncoming traffic while lighted lamps are required.",
        excerptKey: "parking-18-inches-curb",
        sourceLabel: "Maine Driver's License Manual - Section 7, Parking",
        sourceUrl: hb("7-9"),
      },
      {
        id: "me_s6_09",
        topic: "signals",
        question:
          "A police officer is directing traffic at an intersection where the signal is showing green for you. What do you do?",
        choices: [
          "Follow the signal, because it is the legal control",
          "Do what the officer directs",
          "Stop until the signal and the officer agree",
          "Follow whichever appeared first",
        ],
        correctIndex: 1,
        explanation:
          "The officer overrides the signal. Maine's traffic control statute says you obey a traffic-control device unless otherwise directed by a law enforcement officer.",
        context:
          "The manual puts it the same way and adds that it is illegal to refuse or fail to obey a police direction, and that you can lose your licence for trying to flee an officer. Flaggers in work zones and school crossing guards direct traffic under the same principle.",
        trap: "The green light is the legal control only when nobody with more authority is standing in the intersection.",
        excerptKey: "police-direct-traffic",
        sourceLabel: "Maine Driver's License Manual - Section 6, Regulatory Signs",
        sourceUrl: hb("6-7"),
      },
      {
        id: "me_s6_10",
        topic: "licensing",
        question:
          "How many forms of identification does the Maine manual say you need to bring to the written exam?",
        choices: ["One", "Two", "Three", "Four"],
        correctIndex: 1,
        explanation:
          "Two forms of identification. The manual's example pairing is a birth certificate and a social security card.",
        context:
          "Applicants up to and including age 22 must produce a birth certificate or passport so the BMV can establish date of birth, and a photocopy of a birth certificate is only acceptable with an embossed seal or stamp from the issuing agency - notarized copies are not.",
        excerptKey: "exam-two-ids",
        sourceLabel: "Maine Driver's License Manual - Section 1, How Do You Obtain A Permit in Maine?",
        sourceUrl: hb("1-2"),
      },
      {
        id: "me_s6_11",
        topic: "emergencies",
        question:
          "Your accelerator sticks open. What does the Maine manual tell you to do?",
        choices: [
          "Switch the engine off immediately",
          "Pull the parking brake",
          "Steer into a soft verge to slow the car",
          "Keep your eyes on the road, shift to neutral, brake gently and find somewhere to pull off",
        ],
        correctIndex: 3,
        explanation:
          "Neutral first, because it disconnects the engine from the wheels while you still have steering and brakes. Then brake smoothly and get off the road.",
        context:
          "The manual says to switch the engine off only as you are bringing the car to a stop, not while it is moving at speed - shutting it down early can cost you the power steering and power brakes. If the pedal cannot be freed afterwards, call for help rather than drive on.",
        trap: "Turning the key first is the instinct that removes the two systems you are relying on to stop safely.",
        excerptKey: "stuck-gas-pedal",
        sourceLabel: "Maine Driver's License Manual - Section 9, Stuck Gas Pedal",
        sourceUrl: hb("9-6"),
      },
      {
        id: "me_s6_12",
        topic: "signs",
        question:
          "A yellow diamond shows a car with wavy lines under it. What is it warning of?",
        choices: [
          "A rough road surface",
          "A slippery road when wet",
          "A river crossing ahead",
          "A road that floods in spring",
        ],
        correctIndex: 1,
        explanation:
          "It is the slippery-when-wet warning. Maine posts it where the surface loses grip in rain more than the surrounding road does.",
        context:
          "The manual's guidance for a slippery surface is a set of three: slow 5 to 10 mph on a wet road, halve your speed on packed snow, and crawl on ice. Falling or drifting snow, wet leaves and gravel can make a road slippery too, and some surfaces are worse than others when wet.",
        excerptKey: "warning-signs-diamond",
        sourceLabel: "Maine Driver's License Manual - Section 6, Traffic Signs",
        sourceUrl: hb("6-4"),
      },
      {
        id: "me_s6_13",
        topic: "rules",
        question:
          "You are approaching a work zone where a flagger is holding a STOP paddle. What must you do?",
        choices: [
          "Slow and pass if the lane looks clear",
          "Do as the flagger directs",
          "Follow the posted signs rather than the flagger",
          "Stop only if a vehicle is coming the other way",
        ],
        correctIndex: 1,
        explanation:
          "Do what the flagger directs. Maine makes obeying a public safety traffic flagger a legal requirement, not a courtesy.",
        context:
          "Flaggers wear high visibility vests, shirts or jackets and use a stop/slow paddle and hand signals. Usually one is stationed at each end of the work zone so the two directions can take turns. Failing to obey a flagger's signal is a traffic infraction, and the registered owner can be cited on the flagger's report.",
        trap: "A flagger's paddle beats the painted lines and the posted signs. The signs describe the normal layout; the flagger is managing the one in front of you.",
        excerptKey: "flagger-authority",
        sourceLabel: "Maine Driver's License Manual - Section 6, Work Zone Signs",
        sourceUrl: hb("6-5"),
      },
      {
        id: "me_s6_14",
        topic: "sharing",
        question:
          "Maine requires you to yield to pedestrians in which of these situations?",
        choices: [
          "Only when they are in a marked crosswalk with a signal",
          "Only when they are crossing with a green light",
          "Only when a school crossing guard is present",
          "Whenever you are crossing a sidewalk or turning across their path, marked crosswalk or not",
        ],
        correctIndex: 3,
        explanation:
          "Maine's list is broad: crossing a sidewalk out of a driveway or alley, turning while people cross with the light, and pedestrians in a crosswalk marked or unmarked.",
        context:
          "The manual goes past the legal minimum and tells you to yield to pedestrians even when they are not in a crosswalk at all, and to yield to all pedestrians even if your traffic light is green. Failing to yield to a visually impaired pedestrian carries its own $50 to $1,000 fine.",
        trap: "The unmarked crosswalk is the one drivers do not see. Every intersection has one whether or not anyone painted it.",
        excerptKey: "yield-peds-marked-or-unmarked",
        sourceLabel: "Maine Driver's License Manual - Section 6, Stop Lines",
        sourceUrl: hb("6-12"),
      },
      {
        id: "me_s6_15",
        topic: "impairment",
        question:
          "Maine's manual says something specific about the risk of a crash as breath alcohol rises. At 0.15, what does it print?",
        choices: [
          "Twice the risk",
          "Six times the risk",
          "Twenty-five times the risk",
          "One hundred times the risk",
        ],
        correctIndex: 2,
        explanation:
          "Twenty-five times. The manual's short table runs 0.05 at one times, 0.10 at six times and 0.15 at twenty-five.",
        context:
          "It adds that over half of all fatally injured drivers have an alcohol level of .06 grams or more. And 0.15 is not just a statistic in Maine - it is one of the four aggravating circumstances that put mandatory jail time on a first OUI conviction.",
        trap: "The curve is not a straight line. Doubling the alcohol from 0.05 to 0.10 multiplies the risk by six, and reaching 0.15 multiplies it again.",
        excerptKey: "bac-crash-risk",
        sourceLabel: "Maine Driver's License Manual - Section 3, GOOD DRIVERS DON'T DRINK",
        sourceUrl: hb("3-8"),
      },
      {
        id: "me_s6_16",
        topic: "rightOfWay",
        question:
          "You want to pull out of a parking space into moving traffic. What does Maine's right-of-way list say?",
        choices: [
          "Wait for all moving traffic to pass",
          "Signal and pull out at the first gap",
          "Traffic must yield to a vehicle leaving a legal parking space",
          "You may pull out if you sound your horn first",
        ],
        correctIndex: 0,
        explanation:
          "You wait for moving traffic to pass. A driver starting from a parked position has no priority at all.",
        context:
          "The manual's parking chapter adds the technique: look over your left shoulder rather than relying on the mirror, then signal and pull out slowly into the correct lane, and do the mirror image of that when you are leaving a left-hand curb.",
        trap: "A signal creates no right to pull out. It only tells traffic what you intend once they have gone by.",
        excerptKey: "starting-from-parked",
        sourceLabel: "Maine Driver's License Manual - Section 6, Yielding Right-Of-Way",
        sourceUrl: hb("6-2"),
      },
      {
        id: "me_s6_17",
        topic: "safety",
        question:
          "What does the Maine manual say about anti-lock brakes in an emergency stop?",
        choices: [
          "Pump the pedal rapidly, as with conventional brakes",
          "Press firmly and keep the pressure on, and expect vibration and a clicking noise",
          "Press once and release, then steer",
          "Use the parking brake instead",
        ],
        correctIndex: 1,
        explanation:
          "With ABS you press hard and hold. The pedal vibrating and clicking is the system working, not a fault, and you can still steer while it does.",
        context:
          "Without ABS the manual teaches pumping or controlled braking - pressing until just before the wheels lock, releasing, and repeating. Either way, braking is only one of three ways out of a crash; the others are steering around the hazard and, sometimes, accelerating out of its path.",
        trap: "Lifting off when the pedal starts buzzing is the commonest ABS error and it turns the system off at the moment you needed it.",
        excerptKey: "abs-rules",
        sourceLabel: "Maine Driver's License Manual - Section 9, Braking",
        sourceUrl: hb("9-1"),
      },
      {
        id: "me_s6_18",
        topic: "licensing",
        question:
          "How much does Maine charge for the Class C written examination?",
        choices: ["$20", "$30", "$35", "$50"],
        correctIndex: 2,
        explanation:
          "Thirty-five dollars for the Class C and motorcycle permit examination. The licence itself is a separate fee.",
        context:
          "A non-REAL ID Class C licence for a driver under 65 costs $30 for six years, and the REAL ID version costs $55. The BMV schedules the written test after your application is processed and mails the appointment notice within about three weeks; there is no penalty for rescheduling more than 48 hours ahead.",
        excerptKey: "permit-exam-fee-35",
        sourceLabel: "Maine BMV - Drivers License and Examination Fees",
        sourceUrl: BMV_FEES,
      },
      {
        id: "me_s6_19",
        topic: "signals",
        question:
          "What do brake lights tell the driver behind you, and when should you use them deliberately?",
        choices: [
          "Only that you are stopping; there is no deliberate use",
          "That you are about to change lanes",
          "That you intend to let them pass",
          "That you are slowing - tap them when turning off a road with no separate turn lane, or parking before an intersection",
        ],
        correctIndex: 3,
        explanation:
          "They say you are slowing down. The manual tells you to tap the pedal deliberately when you turn off a road that has no separate turn or exit lane, and when parking or turning before an intersection.",
        context:
          "The same section adds the emphatic version for a stop the driver behind cannot anticipate: tap the pedal three or four times quickly. And if the turn signals have failed, hand signals substitute - left arm out horizontally for a left turn, up for a right, down for slowing or stopping.",
        excerptKey: "signal-when-reducing-speed",
        sourceLabel: "Maine Driver's License Manual - Section 8, Signal",
        sourceUrl: hb("8-17"),
      },
      {
        id: "me_s6_20",
        topic: "rules",
        question:
          "You are 25, hold a full Maine licence and want to take a call while driving. What is lawful?",
        choices: [
          "Holding the phone to your ear at a red light",
          "Holding the phone as long as you keep one hand on the wheel",
          "Using the phone in hands-free mode",
          "Nothing - all phone use while driving is prohibited",
        ],
        correctIndex: 2,
        explanation:
          "Hands-free only. Maine allows a driver 18 or over, not on an intermediate licence or a learner's permit, to use a mobile telephone or handheld device in hands-free mode.",
        context:
          "Hands-free means operating the device without using either hand, through a built-in feature or an attachment. You may use one hand to activate or deactivate a function if the device is mounted where it does not block your view and the action takes a single swipe, tap or push.",
        trap: "The red light does not create an exception. The statute names a vehicle temporarily stationary because of traffic, a light or a stop sign as still covered.",
        excerptKey: "stat-hands-free-18",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2121, Use of mobile telephones and handheld electronic devices",
        sourceUrl: law("2121"),
      },
      {
        id: "me_s6_21",
        topic: "parking",
        question:
          "Maine's manual tells you where to leave your car when parking on a public road. Which of these is required?",
        choices: [
          "Park parallel to the road unless angle parking lines are painted",
          "Park at an angle wherever there is room",
          "Park facing the direction you will leave in",
          "Park at least a car length from any driveway",
        ],
        correctIndex: 0,
        explanation:
          "Parallel to the road is the default. Angle parking is only permitted where the lines for it are painted on the roadway.",
        context:
          "The rest of the requirement: make sure your car is not a hazard, do not get in the way of traffic, always park in a marked parking area, leave two feet to the vehicles front and behind, and finish within 18 inches of the curb.",
        excerptKey: "parking-parallel-two-feet",
        sourceLabel: "Maine Driver's License Manual - Section 7, Parking",
        sourceUrl: hb("7-9"),
      },
      {
        id: "me_s6_22",
        topic: "emergencies",
        question:
          "You are stuck in snow in Maine and have to wait for help. What does the manual say?",
        choices: [
          "Walk to the nearest house",
          "Run the engine and heater continuously to stay warm",
          "Sleep to conserve energy until help arrives",
          "Stay with your car, run the engine intermittently, crack a window and keep the exhaust pipe clear",
        ],
        correctIndex: 3,
        explanation:
          "Stay with the car. Run the engine and heater until it is warm and then shut it off, crack a window for fresh air, and keep snow away from the exhaust pipe so carbon monoxide cannot back up into the cabin.",
        context:
          "The manual is blunt about why: most deaths happen when people leave the car, get lost and freeze. It also says to put a red flag on the antenna or door handle, wrap everyone in blankets, keep the occupants active and let nobody fall asleep.",
        trap: "Running the engine continuously is the comfortable choice and is what makes a blocked exhaust lethal.",
        excerptKey: "stay-with-your-car",
        sourceLabel: "Maine Driver's License Manual - Section 11, If you must wait for help",
        sourceUrl: hb("11-5"),
      },
      {
        id: "me_s6_23",
        topic: "sharing",
        question:
          "A cyclist and an oncoming car are both approaching, one on each side of you. What does Maine's manual suggest?",
        choices: [
          "Take them one at a time - slow, let the car pass, then move left and pass the cyclist with room",
          "Split the difference and pass both together",
          "Sound your horn and hold your line",
          "Pull over and wait for both",
        ],
        correctIndex: 0,
        explanation:
          "Deal with them one at a time. Slow down, let the car go by, then move out and give the cyclist three feet.",
        context:
          "The manual contrasts this with splitting the difference, which is what it recommends for two static hazards - parked cars on the right and oncoming traffic on the left. Two moving hazards on opposite sides are different: you take one, then the other.",
        trap: "Splitting the difference is the manual's advice for a different situation, and applying it here means passing the cyclist with barely a foot of room.",
        excerptKey: "one-danger-at-a-time",
        sourceLabel: "Maine Driver's License Manual - Section 8, Taking Dangers One at a Time",
        sourceUrl: hb("8-14"),
      },
      {
        id: "me_s6_24",
        topic: "speed",
        question:
          "You are driving up a long hill and cannot see over the crest. What does the Maine manual say about speed?",
        choices: [
          "Maintain speed so you do not lose momentum",
          "Move to the left lane before the crest",
          "Sound your horn as you reach the top",
          "Slow down enough that you could stop for something on the far side",
        ],
        correctIndex: 3,
        explanation:
          "Slow enough to stop. The manual's rule for a steep hill or a sharp curve is that you never know what is on the other side, so assume it might be a stalled car.",
        context:
          "It lists the other things that shorten how far you can see, and each has the same answer: darkness, heavy rain or snow, an intersection where buildings or trees block the view, and parked cars along the side. In every case you slow to a speed that fits the distance you can see.",
        excerptKey: "hills-and-curves",
        sourceLabel: "Maine Driver's License Manual - Section 8, Some Things Keep You from Seeing",
        sourceUrl: hb("8-9"),
      },
      {
        id: "me_s6_25",
        topic: "signs",
        question:
          "What does a white rectangular sign reading DO NOT PASS on the right of the road mean?",
        choices: [
          "It is a regulatory sign and passing is prohibited here",
          "Passing is discouraged but permitted with care",
          "It applies only to trucks",
          "It applies only where the pavement is marked as well",
        ],
        correctIndex: 0,
        explanation:
          "It is a regulatory sign, so it carries the force of law. You may not pass where it is posted.",
        context:
          "It usually comes paired with the yellow pennant NO PASSING ZONE sign on the left side of the road, and with a solid yellow line on your side of the pavement. Maine also requires you to complete a pass before you reach the beginning of a no-passing zone.",
        excerptKey: "no-passing-zone-signs",
        sourceLabel: "Maine Driver's License Manual - Section 7, Signs and Markings",
        sourceUrl: hb("7-8"),
      },
      {
        id: "me_s6_26",
        topic: "safety",
        question:
          "Which of these does the Maine manual say increases the following distance you need?",
        choices: [
          "Driving in a heavier vehicle only",
          "Driving at night on a familiar road only",
          "Following a vehicle that must stop at railroad crossings, such as a school bus or a tank truck",
          "Following a vehicle with its hazard lights on",
        ],
        correctIndex: 2,
        explanation:
          "Vehicles that are required to stop at every railroad crossing will stop where nobody else does. School buses and tank trucks carrying flammable liquids are the examples the manual gives.",
        context:
          "The rest of its list: slick roads, following a motorcycle or bicycle, following a large vehicle or one towing a trailer, at night, in fog or bad weather, when you are heavily loaded or towing, and when speeds are high. Each adds to the four-second baseline.",
        trap: "The stop is legally required and looks completely unmotivated from behind, which is what makes those two vehicle types worth naming separately.",
        excerptKey: "following-railroad-stoppers",
        sourceLabel: "Maine Driver's License Manual - Section 8, Space in Front",
        sourceUrl: hb("8-12"),
      },
      {
        id: "me_s6_27",
        topic: "licensing",
        question:
          "Maine's manual lists offenses that can bring a 30-day licence suspension. Which of these is on it?",
        choices: [
          "Parking in a disability space without a permit",
          "Failing to signal a turn",
          "Driving without an inspection sticker",
          "Operating alone on a permit",
        ],
        correctIndex: 3,
        explanation:
          "Operating alone on a permit is on the 30-day list, along with failing to stop for a police officer, leaving the scene of a bodily injury accident, passing a stopped school bus with its red lights flashing, and speeding by 30 mph or more.",
        context:
          "The same list also covers altering a licence or registration, loaning a licence, unlawful use of a licence, displaying a suspended licence, falsifying an application, and giving false information to a police officer. Eluding an officer, passing a roadblock or street racing can each bring up to 90 days.",
        trap: "Driving on a permit without your supervising driver looks like a paperwork slip. Maine treats it as a suspendable offense.",
        excerptKey: "suspension-30-day-offenses",
        sourceLabel: "Maine Driver's License Manual - Section 1, Suspension Periods for Designated Convictions",
        sourceUrl: hb("1-8"),
      },
      {
        id: "me_s6_28",
        topic: "signals",
        question:
          "You are stopped behind a car at a red light and the light turns green. What does the Maine manual say to do first?",
        choices: [
          "Move off as soon as the car ahead does",
          "Check that your path of travel is clear and there is no cross traffic",
          "Sound the horn if the car ahead delays",
          "Check the mirror for traffic behind",
        ],
        correctIndex: 1,
        explanation:
          "Make sure the path ahead is actually clear and nothing is still coming across. A green light does not mean the intersection is empty.",
        context:
          "The manual pairs it with the habit for a stop: look left, then right, then left again before entering, and check for bicyclists as well as cars. It also says not to rely on other drivers obeying their red light, because someone may run it.",
        trap: "Following the car ahead through on faith is how a driver meets the vehicle that entered on the tail of the previous phase.",
        excerptKey: "left-right-left-again",
        sourceLabel: "Maine Driver's License Manual - Section 7, Intersections",
        sourceUrl: hb("7-2"),
      },
      {
        id: "me_s6_29",
        topic: "impairment",
        question:
          "A driver refuses a chemical test and is convicted of OUI anyway on the officer's testimony. What does the refusal add?",
        choices: [
          "A separate administrative suspension, and an aggravating factor that raises the mandatory jail minimum",
          "Nothing, because the conviction was on other evidence",
          "An automatic upgrade to a Class C crime",
          "A requirement to install an interlock for life",
        ],
        correctIndex: 0,
        explanation:
          "The administrative suspension for refusing stands on its own, and the refusal counts as an aggravating factor at sentencing - the jail minimum rises from 48 hours to 96, and the minimum fine from $500 to $600.",
        context:
          "The manual makes the point that the two penalties stack rather than substitute, so refusing produces a much longer overall penalty than submitting would have. It also notes the test can protect you: if you are not legally intoxicated, the result shows it.",
        trap: "The idea that refusing leaves the state with no evidence is wrong twice over - the officer's testimony can convict, and the refusal itself becomes evidence.",
        excerptKey: "refusal-suspension-stands",
        sourceLabel: "Maine Driver's License Manual - Section 3, Implied Consent",
        sourceUrl: hb("3-10"),
      },
      {
        id: "me_s6_30",
        topic: "rightOfWay",
        question:
          "Maine's manual describes what to do at a four-way stop when two drivers arrive at exactly the same moment, side by side. What is it?",
        choices: [
          "The driver on the right has the right-of-way",
          "The driver going straight has the right-of-way",
          "Both wait for a third vehicle to clear",
          "The driver on the left has the right-of-way",
        ],
        correctIndex: 0,
        explanation:
          "The driver on the right goes. That rule is the tiebreaker at a four-way stop, applying only when order of arrival cannot separate you.",
        context:
          "The main rule is order of arrival - the first driver to the intersection goes first, and everyone stops. The vehicle-on-the-right rule is also the whole rule at an uncontrolled intersection, where there is no arrival order to fall back on.",
        trap: "Using the tiebreaker as the main rule is the error. If you got there first, you go, whichever side the other car is on.",
        excerptKey: "four-way-tie-goes-right",
        sourceLabel: "Maine Driver's License Manual - Section 6, Yielding Right-Of-Way",
        sourceUrl: hb("6-1"),
      },
    ],
  },
];
