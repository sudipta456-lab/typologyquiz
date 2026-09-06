import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets 1 to 3: the Alabama Driver Manual,
// November 2024 edition, published by the Alabama Law Enforcement Agency
// (ALEA) Driver License Division, with Title 32 of the Code of Alabama 1975
// and ALEA administrative rule 760-X-1 supplying what the manual leaves out.
//
// Set 4 walks the parts of the manual people skim on the way to the signs
// chapter: renewal and residency, the freeway chapter, the vehicle equipment
// chapter, insurance minimums and window tint. Every one of those is in the
// booklet the manual says the test is drawn from.
//
// Set 5 is Alabama's own trap collection. The pattern in what learners report
// is that the state's numbers are a ladder rather than a single figure - six
// statutory speed limits, four parking distances, four DUI convictions with
// four different penalties, a point schedule with five suspension bands, and
// two separate school bus rules depending on whether the highway is divided.
// People memorise one rung and get asked about another.
//
// Set 6 runs 30 questions with no scaffolding beyond the standard fields,
// mirroring the mix the manual describes: Alabama traffic laws, road signs and
// rules of safe driving.
//
// Questions are original throughout. Nothing here is copied from a practice
// site, and nothing is anyone's recollection of a live exam item.
const MANUAL_URL = "https://www.alea.gov/sites/default/files/ALEA%20DL%20Manual.pdf";
/** Page-anchored deep link. `p` is the PDF page index (printed page + 2). */
const hb = (p: number) => `${MANUAL_URL}#page=${p}`;
const code = (s: string) => `https://alison.legislature.state.al.us/code-of-alabama?section=${s}`;

export const alabamaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "A second exam-level set that ranges over the chapters people skip: licensing and renewal, freeway driving, vehicle equipment, insurance and the rules that only appear in the Code of Alabama.",
    questions: [
      {
        id: "al_s4_01",
        topic: "licensing",
        question:
          "You move to Alabama holding a valid license from the state you left. How long may you keep driving on it before you need an Alabama license?",
        choices: ["10 days", "30 days", "60 days", "90 days"],
        correctIndex: 1,
        explanation:
          "A new resident with a valid license from their previous state has 30 days to get an Alabama license. The clock starts the day you become a resident, not the day you arrive to look at houses.",
        context:
          "There is a separate and much kinder rule for the examination itself: if your out-of-state license has not been expired for more than a year, you do not have to take the driver examination at all. The 30 days is the deadline for making the swap, not for passing a test.",
        trap:
          "Sixty and ninety days are the figures other states use. Alabama's window is the short one.",
        excerptKey: "new-resident-30-days",
        sourceLabel: "Alabama Driver Manual - Chapter 1: License Requirements",
        sourceUrl: hb(7),
      },
      {
        id: "al_s4_02",
        topic: "signs",
        question:
          "You are entering a ramp and a square sign with white letters on a red background faces you. What has happened?",
        choices: [
          "You are entering a toll road",
          "You are about to leave the state highway system",
          "You are approaching a one-way road or ramp from the wrong direction",
          "You are entering a zone where passing is prohibited",
        ],
        correctIndex: 2,
        explanation:
          "White on red means stop or do not, and this particular sign tells you that you are facing a one-way highway or ramp from the wrong end. Stop, do not enter it, and back out or turn around where it is safe to do so.",
        context:
          "Alabama's manual teaches sign colors as a language you read before you read the words. Red is stop or prohibition, yellow is general warning, fluorescent yellow-green is pedestrians and school zones, orange is construction, green is guidance and direction, blue is motorist services, brown is recreation and white is regulatory.",
        trap:
          "A prohibition sign is not information. Red never means \"be careful\", it means do not.",
        excerptKey: "wrong-way",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Regulatory Signs",
        sourceUrl: hb(44),
      },
      {
        id: "al_s4_03",
        topic: "rules",
        question:
          "Traffic is heavy and you drift along with your left wheels riding the lane line for a mile or so. What does Alabama law say about that?",
        choices: [
          "It is allowed as long as you are not passing",
          "It is allowed below 45 mph",
          "It is allowed if your signal is on",
          "It is not allowed; you must stay within a single lane",
        ],
        correctIndex: 3,
        explanation:
          "You are required to drive within a single traffic lane, and straddling the lane marking is named as a violation in its own right. Weaving between lanes is the same offense.",
        context:
          "The rule matters most on multilane roads where broken white lines separate traffic going the same way. Those lines may be crossed when passing or changing lanes, but crossing them is a deliberate move you signal and complete, not a place you sit.",
        trap:
          "A turn signal announces a lane change. It does not authorize living on the line while you decide.",
        excerptKey: "single-lane",
        sourceLabel: "Alabama Driver Manual - Chapter 3: On the Road",
        sourceUrl: hb(22),
      },
      {
        id: "al_s4_04",
        topic: "sharing",
        question:
          "Two cyclists ahead of you are riding side by side on a two-lane road. What does the manual say about this?",
        choices: [
          "It is legal at all times",
          "It is legal only where the shoulder is unpaved",
          "It is legal only in daylight",
          "It is illegal and you may sound your horn to break them up",
        ],
        correctIndex: 0,
        explanation:
          "The manual states flatly that people on bicycles may ride two abreast at all times. Your job is to pass with the space the law requires, or to wait.",
        context:
          "Alabama gives cyclists the same rights and responsibilities on the road as drivers, and requires you to leave at least three feet when passing one. Where the road is too narrow to pass safely, the manual tells you not to follow closely and not to blast the horn at the rider.",
        trap:
          "Two abreast looks like an obstruction, which is exactly why the manual says at all times. Impatience here is what causes the collision.",
        excerptKey: "bicycle-two-abreast",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Sharing the Road with Bicycles",
        sourceUrl: hb(25),
      },
      {
        id: "al_s4_05",
        topic: "safety",
        question:
          "On a long highway drive, how often does the Alabama manual advise you to take a break?",
        choices: [
          "Every 50 miles or every hour",
          "Every 200 miles or every three hours",
          "Only when you notice you are drowsy",
          "Every 100 miles or every two hours",
        ],
        correctIndex: 3,
        explanation:
          "The manual advises a regular break every 100 miles or every two hours, whichever comes first. The point is to break the monotony before highway hypnosis sets in, not after.",
        context:
          "Alabama's fatigue chapter is blunt about the alternatives. If you feel drowsy, stop driving and do not try to fight it; pull off at the first rest stop or service area. It also warns against relying on stay-awake drugs, which are likely to make your driving more hazardous rather than less.",
        trap:
          "Waiting until you notice drowsiness is the failure mode the rule exists to prevent - by then your reaction time has already gone.",
        excerptKey: "breaks-100-miles",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Highway Hypnosis and Fatigue",
        sourceUrl: hb(34),
      },
      {
        id: "al_s4_06",
        topic: "signals",
        question:
          "Broken white lines separate the lanes on a four-lane road. What do they tell you?",
        choices: [
          "Traffic moves the same way in both lanes and the line may be crossed to pass",
          "The lanes carry traffic in opposite directions",
          "The lane on your right ends ahead",
          "You are on the shoulder",
        ],
        correctIndex: 0,
        explanation:
          "Broken white lines divide lanes carrying traffic in the same direction, and the manual says plainly that they may be crossed when passing. White separates same-direction traffic; yellow separates opposing traffic.",
        context:
          "Under the uniform code Alabama follows, center lines are yellow on two-lane highways and white on multilane highways and one-way streets. A solid white line at the outer edge marks the edge of the traffic lane and may only be crossed by traffic moving to or from the shoulder.",
        trap:
          "Broken means the crossing is permitted, not that it is safe. You still check the blind spot over your shoulder before you move.",
        excerptKey: "lane-dividers",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Pavement Markings",
        sourceUrl: hb(54),
      },
      {
        id: "al_s4_07",
        topic: "parking",
        question:
          "Your friend is already parked at the curb and you stop alongside them to run in for a minute. What is wrong with that?",
        choices: [
          "Nothing, if your flashers are on",
          "Nothing, if you stay under five minutes",
          "Nothing, if the street has two lanes each way",
          "Parking on the roadway side of a vehicle already parked at the curb is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "The manual lists the roadway side of any vehicle already parked at the curb or edge of the highway among the places parking is not allowed. Double parking is prohibited outright, with no time or flasher exception.",
        context:
          "The same list bans parking on a bridge or in a tunnel, beside a yellow-painted curb, in front of a driveway, on a sidewalk or crosswalk, and anywhere official signs prohibit it. The measured distances sit alongside it: 15 feet from a hydrant, 20 from a crosswalk, 30 from a stop sign or signal and 50 from the nearest rail of a railroad crossing.",
        trap:
          "Hazard lights are permitted to warn of a hazard. They do not convert an illegal stop into a legal one.",
        excerptKey: "parking-double",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Parking",
        sourceUrl: hb(31),
      },
      {
        id: "al_s4_08",
        topic: "licensing",
        question: "How long is an Alabama driver license valid once it is issued?",
        choices: ["Two years", "Four years", "Five years", "Eight years"],
        correctIndex: 1,
        explanation:
          "An Alabama driver license expires four years after it is issued, and the expiration date is printed on the card itself.",
        context:
          "Alabama law then adds a 60-day grace period after the expiration date for the purpose of renewal. Beyond that, the license may still be renewed without a fresh examination for up to three years after expiration, but that is a renewal privilege only.",
        trap:
          "The learner license is the four-year document people are thinking of when they hesitate here. Both are four years, so this one is not the trick it looks like.",
        excerptKey: "license-expires-4",
        sourceLabel: "Alabama Driver Manual - Chapter 1: Renewing Your License",
        sourceUrl: hb(15),
      },
      {
        id: "al_s4_09",
        topic: "rules",
        question:
          "You realize on an interstate that you have passed your exit by about fifty yards. What does the manual tell you to do?",
        choices: [
          "Back up along the shoulder to the ramp",
          "Stop and wait for a gap, then reverse",
          "Cross the gore area and rejoin the ramp",
          "Carry on to the next exit and come back",
        ],
        correctIndex: 3,
        explanation:
          "The manual's instruction for a missed exit is to proceed to the next exit and come back to the one you missed. Backing is prohibited on controlled access highways entirely, except for emergency vehicles doing their job.",
        context:
          "Freeway discipline in Alabama is built around never surprising the traffic behind you. The same chapter tells you not to cut from lane to lane, to keep right if you are travelling slower than the flow, and never to reduce speed suddenly on the freeway itself when you mean to exit - you slow down in the deceleration lane.",
        trap:
          "A few car lengths in reverse feels harmless on an empty shoulder. It is the manoeuvre the law names specifically, because closing speeds on a freeway make it lethal.",
        excerptKey: "backing-freeway",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Other Traffic Laws",
        sourceUrl: hb(68),
        commonlyMissed: true,
      },
      {
        id: "al_s4_10",
        topic: "emergencies",
        question:
          "Steam starts pouring from under your hood. You pull over and switch the engine off. What must you not do next?",
        choices: [
          "Open the radiator cap",
          "Raise the hood",
          "Call for assistance",
          "Wait for the engine to cool",
        ],
        correctIndex: 0,
        explanation:
          "Do not open the radiator cap. A boiling cooling system is under pressure, and releasing it sends scalding coolant and steam straight up at whoever is standing over the engine.",
        context:
          "Alabama's emergency chapter is a list of instinctive reactions that make things worse: braking in a skid, swerving back onto the pavement from a soft shoulder, using water on a gasoline fire. The manual's own framing is that an instinctive reaction may well be the wrong reaction, which is why it wants you to have read them beforehand.",
        trap:
          "Topping up the coolant feels like the helpful thing to do, and it is the one action that causes serious burns.",
        excerptKey: "overheating",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Driving Emergencies",
        sourceUrl: hb(77),
      },
      {
        id: "al_s4_11",
        topic: "signs",
        question:
          "A curve warning sign has a smaller yellow plate below it reading 35. What is that number?",
        choices: [
          "The legal speed limit through the curve",
          "The minimum speed for the curve",
          "The distance in yards to the curve",
          "The top safe speed for the curve",
        ],
        correctIndex: 3,
        explanation:
          "An advisory plate gives the top safe speed at which the turn can be made. It is a warning, not a regulatory limit, so the posted speed limit for the road still applies on either side of it.",
        context:
          "Advisory speeds sit on warning signs, which are yellow and usually diamond shaped. Regulatory speed limits are on white rectangular signs. Ignoring an advisory speed is still actionable, because Alabama's basic speed law requires a speed that is reasonable and prudent for the conditions regardless of what is posted.",
        trap:
          "Treating the yellow plate as unenforceable is how people end up off the outside of a curve. The basic speed law reaches it even though the plate itself is advisory.",
        excerptKey: "advisory-speed",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Warning Signs",
        sourceUrl: hb(49),
      },
      {
        id: "al_s4_12",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shop's parking lot onto a city street. Where does the manual require you to stop?",
        choices: [
          "At the edge of the traffic lane",
          "Only if a vehicle is approaching",
          "Before crossing the sidewalk or crosswalk area",
          "Halfway across the sidewalk, to improve your view",
        ],
        correctIndex: 2,
        explanation:
          "Coming from an alley, private driveway or building in a business or residence district, you always stop before crossing the sidewalk or crosswalk area. The stop is for the people on foot, before you go looking for cars.",
        context:
          "This is one of the manual's listed situations where a stop is required regardless of signs or signals, alongside stopping for a school patrol member holding a flag in the STOP position and for school children being escorted across. Failure to yield the right of way is a 5-point offense in Alabama.",
        trap:
          "Nosing forward until you can see the street is the natural move and it puts your bumper across the footpath. Stop first, then creep.",
        excerptKey: "alley-stop",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Stopping",
        sourceUrl: hb(62),
        commonlyMissed: true,
      },
      {
        id: "al_s4_13",
        topic: "rules",
        question:
          "How far may you stay in the leftmost lane of an Alabama interstate without completely passing another vehicle?",
        choices: ["Half a mile", "One mile", "1.5 miles", "There is no limit"],
        correctIndex: 2,
        explanation:
          "Section 32-5A-80 caps it at 1.5 miles. Beyond that, without completing a pass, you are required to move out of the leftmost lane.",
        context:
          "This one is in the Code rather than the manual, which teaches the same idea more loosely as slower moving vehicles must keep to the right. The statutory version gives it a number an officer can measure, and it applies on the interstate whether or not anyone is behind you.",
        trap:
          "Driving at the speed limit does not buy you the left lane. The rule is about passing, not about speed.",
        excerptKey: "st-left-lane-1-5",
        sourceLabel: "Code of Alabama - Section 32-5A-80",
        sourceUrl: code("32-5A-80"),
        commonlyMissed: true,
      },
      {
        id: "al_s4_14",
        topic: "sharing",
        question:
          "At 55 mph a passenger car needs about 193 feet to stop safely. What does a loaded truck need?",
        choices: ["About 220 feet", "About 300 feet", "About 430 feet", "About 600 feet"],
        correctIndex: 2,
        explanation:
          "A loaded truck needs about 430 feet at 55 mph, more than twice the car's distance. That gap is why cutting in front of a truck and then braking is so dangerous.",
        context:
          "The manual pairs this figure with its No-Zone teaching: the blind spots beside, behind and directly in front of a large vehicle where your car disappears from the driver's view. If you cannot see the driver's face in their side mirror, they cannot see you at all.",
        trap:
          "Doubling the car's figure and calling it 386 is close, but the number the manual prints is 430.",
        excerptKey: "truck-stopping",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Sharing the Road with Large Vehicles",
        sourceUrl: hb(30),
      },
      {
        id: "al_s4_15",
        topic: "licensing",
        question:
          "Your license expired eight months ago and you have not renewed it. May you drive to the office to renew it?",
        choices: [
          "Yes, the three-year renewal period covers driving",
          "Yes, within the 60-day grace period only",
          "Yes, if you carry the renewal notice",
          "No, an expired license cannot be used to drive",
        ],
        correctIndex: 3,
        explanation:
          "The manual says it directly: even though renewal is possible up to three years after expiration, a person cannot legally operate a motor vehicle with an expired license. The renewal window and the driving privilege are separate things.",
        context:
          "Alabama gives a 60-day grace period after the expiration date for the purpose of renewal, and allows renewal without a fresh examination for three years after expiration. Past three years you take the complete examination again.",
        trap:
          "Being allowed to renew is not being allowed to drive. That distinction is the whole point of this rule.",
        excerptKey: "expired-cannot-drive",
        sourceLabel: "Alabama Driver Manual - Chapter 1: Renewing Your License",
        sourceUrl: hb(15),
        commonlyMissed: true,
      },
      {
        id: "al_s4_16",
        topic: "signals",
        question:
          "A center lane on a busy multilane street is marked with solid yellow lines outside and broken yellow lines inside, with left-turn arrows painted in it. What is it for?",
        choices: [
          "Passing slower traffic in either direction",
          "Left turns by traffic travelling in either direction",
          "Emergency vehicles only",
          "Through traffic during rush hour",
        ],
        correctIndex: 1,
        explanation:
          "That is a two-way left turn lane, reserved exclusively for vehicles turning left from either direction. You enter it to make your turn and you leave it as soon as the turn is done.",
        context:
          "The word in the manual is exclusively. It is not a passing lane, not a merging lane and not somewhere to sit and wait for a gap over a long distance. Using it as a travel lane defeats the reason it exists, which is to get turning vehicles out of the through lanes.",
        trap:
          "Because traffic from both directions uses it, people treat it as a shared free-for-all. Only left turns belong in it.",
        excerptKey: "two-way-left-turn-lane",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Pavement Markings",
        sourceUrl: hb(56),
      },
      {
        id: "al_s4_17",
        topic: "safety",
        question:
          "You feel suddenly weary and slightly dizzy, and you keep yawning, on a short drive in a car with a rattling exhaust. What should you suspect?",
        choices: [
          "Carbon monoxide poisoning",
          "Highway hypnosis",
          "Low tire pressure",
          "Glare fatigue",
        ],
        correctIndex: 0,
        explanation:
          "Sudden weariness, yawning, dizziness and nausea are the manual's listed symptoms of carbon monoxide poisoning. The fumes are odorless, so the symptoms are the only warning you get.",
        context:
          "A leaking exhaust or a car idling in a closed garage are the classic sources. The response is fresh air immediately: get out of the vehicle, or at minimum open the windows fully and stop the engine, and have the exhaust checked before driving again.",
        trap:
          "Highway hypnosis produces drowsiness too, but it builds slowly on a long monotonous road. Sudden onset on a short trip points at the exhaust.",
        excerptKey: "co-symptoms",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Carbon Monoxide",
        sourceUrl: hb(75),
      },
      {
        id: "al_s4_18",
        topic: "signs",
        question: "A yellow diamond sign reads SOFT SHOULDER. What is it warning you about?",
        choices: [
          "The shoulder will not support a vehicle, so stay on the pavement",
          "The shoulder is being resurfaced",
          "The shoulder sits well below the road surface",
          "The shoulder is reserved for buses",
        ],
        correctIndex: 0,
        explanation:
          "The side of the road is soft and the manual's instruction is not to drive off the pavement. A soft shoulder will grab a wheel and pull the car off line.",
        context:
          "Alabama posts a separate LOW SHOULDER sign for the different hazard of a shoulder that sits well below the road surface. If your wheels do drift onto a shoulder of either kind, the manual is emphatic that you do not swerve back: stay on the shoulder, reduce speed, and ease back on when you are slow and the way is clear.",
        trap:
          "Low shoulder and soft shoulder are two signs describing two different problems. Soft is about what the surface will hold, low is about the drop.",
        excerptKey: "soft-shoulder",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Warning Signs",
        sourceUrl: hb(47),
      },
      {
        id: "al_s4_19",
        topic: "rules",
        question:
          "You are descending a long hill and you slip the transmission into neutral to save fuel. What is the legal position in Alabama?",
        choices: [
          "It is legal in a vehicle with an automatic transmission",
          "It is legal below 45 mph",
          "It is legal outside municipalities",
          "It is illegal; the law forbids coasting downhill in neutral",
        ],
        correctIndex: 3,
        explanation:
          "Alabama law forbids coasting downhill with the transmission in neutral, with no exception for transmission type or speed. In neutral you have given up engine braking and any quick response the throttle would give you.",
        context:
          "The hill country chapter also wants you to select a lower gear before a long descent rather than riding the brakes, which fade as they heat, and it suggests using the horn on blind curves on narrow mountain roads to tell oncoming drivers you are there.",
        trap:
          "The fuel saving is real and small; the control you gave up is neither.",
        excerptKey: "coasting",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Driving in Hilly Country",
        sourceUrl: hb(75),
      },
      {
        id: "al_s4_20",
        topic: "sharing",
        question:
          "You are following a tractor-trailer and cannot see the driver's face in either of the truck's side mirrors. What does that mean?",
        choices: [
          "The truck's mirrors are misadjusted",
          "You are far enough back to be safe",
          "You are clear to begin a pass",
          "The driver cannot see you",
        ],
        correctIndex: 3,
        explanation:
          "The manual's rule of thumb is exactly this: if you cannot see the driver's face in the side-view mirror, the driver cannot see you. You are sitting in the rear No-Zone.",
        context:
          "No-Zones are the danger areas around trucks and buses where your car disappears from the driver's view. There is one directly behind, one along each side and one in front, and the manual adds a fourth rule about never crossing behind a truck or bus that is backing up.",
        trap:
          "Distance alone does not get you seen. The rear blind spot on a loaded trailer reaches back much further than the gap most drivers leave.",
        excerptKey: "side-no-zone",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Sharing the Road with Large Vehicles",
        sourceUrl: hb(29),
      },
      {
        id: "al_s4_21",
        topic: "speed",
        question:
          "The Code of Alabama sets a maximum for driving in an urban district where nothing is posted. What is it?",
        choices: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctIndex: 1,
        explanation:
          "Section 32-5A-171 caps an urban district at 30 mph. That is the statutory ceiling in a built-up area when no other limit is posted.",
        context:
          "The statute lays out a full ladder: 30 in an urban district, 35 on an unpaved road outside one, 45 on a paved county road, 55 on other roads outside urban districts, 65 on a four-lane divided highway and 70 on an interstate. The manual adds that all speed limits in municipalities are maximum speeds, never targets.",
        trap:
          "Twenty-five is the residential default in many other states. Alabama's urban district figure is 30.",
        excerptKey: "st-speed-urban",
        sourceLabel: "Code of Alabama - Section 32-5A-171",
        sourceUrl: code("32-5A-171"),
      },
      {
        id: "al_s4_22",
        topic: "emergencies",
        question:
          "Your right wheels drop off the pavement onto the shoulder at highway speed. What does the manual tell you to do?",
        choices: [
          "Brake hard and steer back onto the pavement",
          "Steer back onto the pavement immediately, before the shoulder ends",
          "Stay on the shoulder and reduce speed",
          "Accelerate to regain stability, then steer back",
        ],
        correctIndex: 2,
        explanation:
          "Stay on the shoulder and reduce speed. Swerving back onto the pavement at speed can throw the car off balance, and with a lip between shoulder and pavement it can pitch you across the road.",
        context:
          "Once you are slow, you ease back on gently at a shallow angle when the way is clear. This sits in the manual's set of emergency responses that all run against instinct - do not brake in a skid, do not put water on a gasoline fire, do not open a boiling radiator.",
        trap:
          "The instinct is to get back on the road right now. That is the manoeuvre that turns a scare into a rollover.",
        excerptKey: "run-off-pavement",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Running off the pavement",
        sourceUrl: hb(76),
        commonlyMissed: true,
      },
      {
        id: "al_s4_23",
        topic: "licensing",
        question:
          "An officer pulls you over. Which three documents does the manual say you will be asked for?",
        choices: [
          "Driver license, proof of insurance and vehicle registration",
          "Driver license, birth certificate and vehicle registration",
          "Driver license, Social Security card and proof of insurance",
          "Driver license and proof of insurance only",
        ],
        correctIndex: 0,
        explanation:
          "The manual lists exactly three: driver license, proof of insurance and vehicle registration. Knowing where all three live in your car is the point of the section.",
        context:
          "The same section tells you how to behave during the stop: keep both hands on the wheel where they can be seen, turn on the interior lights if it is dark, and tell the officer straight away if there are weapons in the vehicle. Signing the citation is not an admission of guilt, but refusing it can get you arrested.",
        trap:
          "A Social Security card and a birth certificate belong to the licensing application, not the traffic stop.",
        excerptKey: "documents-stop",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Documents Required at Traffic Stops",
        sourceUrl: hb(70),
      },
      {
        id: "al_s4_24",
        topic: "signals",
        question:
          "Overhead lane control signals switch from a green arrow to a steady yellow X above your lane. What does that tell you?",
        choices: [
          "Potentially hazardous conditions exist in the lane",
          "The lane is closed and you must already be out of it",
          "The lane is reversing direction immediately",
          "The lane is now a turn-only lane",
        ],
        correctIndex: 0,
        explanation:
          "A steady yellow X means potentially hazardous conditions exist in that lane. It is the warning that the lane is about to close, and your move is to change lanes safely while you still can.",
        context:
          "The lane control set runs green arrow for a lane open to travel in your direction, steady yellow X as the warning, and steady red X for a lane you may not use at all. They are common on reversible urban routes and around bridges and tunnels.",
        trap:
          "The red X is the prohibition. The yellow X is your window to get out before the red one arrives.",
        excerptKey: "yellow-x",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Lane Use Control Signals",
        sourceUrl: hb(58),
      },
      {
        id: "al_s4_25",
        topic: "rules",
        question:
          "You are on a three-lane road that carries two-way traffic. When may you use the center lane?",
        choices: [
          "Whenever the lane is empty",
          "Only to pass a vehicle going your way when the center lane is clear",
          "Only in daylight",
          "Only when turning right",
        ],
        correctIndex: 1,
        explanation:
          "Section 32-5A-88 allows the center lane of a three-lane two-way road only for overtaking and passing a vehicle travelling the same direction, when the center lane is clear of traffic for a safe distance, or where it is signed for one-way use or is a two-way left turn lane.",
        context:
          "The center lane on this kind of road is shared with oncoming drivers who may be passing at the same moment, which is why the permission is written so narrowly. It is not a cruising lane and it is not a place to wait.",
        trap:
          "An empty center lane invites you in. The statute only lets you in for the length of an actual pass.",
        excerptKey: "st-three-lane-center",
        sourceLabel: "Code of Alabama - Section 32-5A-88",
        sourceUrl: code("32-5A-88"),
      },
      {
        id: "al_s4_26",
        topic: "safety",
        question:
          "What is the minimum liability cover Alabama requires for death or bodily injury to one person?",
        choices: ["$15,000", "$25,000", "$50,000", "$100,000"],
        correctIndex: 1,
        explanation:
          "The minimum is $25,000 for death or bodily injury to one person. The full set is 25/50/25: $25,000 per person, $50,000 for two or more people, and $25,000 for property damage.",
        context:
          "Cover must come from an insurer licensed to do business in Alabama, and proof of insurance is one of the three documents an officer asks for at a stop. A first conviction for driving without it can bring a fine of up to $500, and up to $1,000 for a second.",
        trap:
          "Fifty thousand is the two-or-more-people figure in the same sentence. The per-person number is 25.",
        excerptKey: "mli-minimums",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Mandatory Liability Insurance Law",
        sourceUrl: hb(70),
      },
      {
        id: "al_s4_27",
        topic: "signs",
        question:
          "A round yellow sign with a black X and the letters RR stands beside the road. How far ahead is the crossing?",
        choices: ["100 feet", "250 feet", "500 feet", "750 feet"],
        correctIndex: 3,
        explanation:
          "The round railroad advance warning sign is placed 750 feet before the track. It is round rather than diamond, which makes it one of the few warning signs that is not a diamond.",
        context:
          "The other advance warnings work together with it: a large X and two RR letters painted on the pavement, plus a yellow line in advance of the crossing that tells you not to cross the center line there. At the crossing itself the crossbuck acts like a yield sign, and flashing red lights or a lowering gate mean stop.",
        trap:
          "Five hundred feet is Alabama's number for a great many other things - the emergency vehicle following distance, the dimming distance, the passing sightline. This one is 750.",
        excerptKey: "rr-sign-750",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Railroad Crossings",
        sourceUrl: hb(40),
        commonlyMissed: true,
      },
      {
        id: "al_s4_28",
        topic: "rightOfWay",
        question: "You are approaching a single-lane roundabout. What do you do?",
        choices: [
          "Turn left into the roundabout against the flow to reach a near exit",
          "Enter without slowing, since circulating traffic must yield to you",
          "Yield to traffic already in the roundabout and turn right to enter",
          "Stop completely at the entry, whether or not anything is coming",
        ],
        correctIndex: 2,
        explanation:
          "Vehicles already in the roundabout have the right of way, and you always enter by turning right into a safe gap. The manual is explicit that you never make a left turn to enter a roundabout.",
        context:
          "Alabama's roundabouts flow counter-clockwise around a central island. If you miss your exit you go around again rather than backing up, and if an emergency vehicle arrives while you are inside you continue to your exit and pull over past it rather than stopping in the circle.",
        trap:
          "A roundabout entry is a yield, not a stop. Stopping when the circle is empty is its own hazard for the driver behind you.",
        excerptKey: "roundabout-row",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Roundabouts",
        sourceUrl: hb(60),
      },
      {
        id: "al_s4_29",
        topic: "parking",
        question:
          "When may you park in a space marked for physically handicapped drivers on a private shop's lot?",
        choices: [
          "Never, on private property the marking is advisory",
          "When no other space is free",
          "When you are dropping someone off and staying with the car",
          "When the vehicle carries a handicapped person and displays the sticker",
        ],
        correctIndex: 3,
        explanation:
          "Both conditions must be met: the vehicle is being operated by or for a physically handicapped person, and it visibly displays the handicapped sticker. The rule applies on private property exactly as it does on public.",
        context:
          "The manual states the private property point specifically because people assume a shop's own lot is outside the traffic code. It is not, and neither is the fire lane beside it.",
        trap:
          "The sticker alone is not enough if the person it belongs to is not being served by the trip, and being served by the trip is not enough without the sticker.",
        excerptKey: "handicap-parking",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Regulatory Signs",
        sourceUrl: hb(45),
      },
      {
        id: "al_s4_30",
        topic: "impairment",
        question: "How does the Alabama manual classify alcohol?",
        choices: [
          "A depressant, not a stimulant",
          "A stimulant at low doses and a depressant at high doses",
          "A stimulant",
          "Neither; its effect depends entirely on body weight",
        ],
        correctIndex: 0,
        explanation:
          "Alcohol is a depressant, not a stimulant. The lively feeling people describe after a drink is the depressant switching off judgment and inhibition before it reaches anything else.",
        context:
          "Because the first thing it depresses is judgment, impairment can occur before legal intoxication is attained - the manual says so directly. The manual also notes that a bottle of beer, a shot of whiskey and a glass of wine are about equal in alcohol content, and that the same amount hits harder on an empty stomach.",
        trap:
          "The feeling of being livelier after a drink is exactly what makes people call it a stimulant. That feeling is the impairment.",
        excerptKey: "alcohol-depressant",
        sourceLabel: "Alabama Driver Manual - Chapter 4: The Effects of Alcohol",
        sourceUrl: hb(35),
      },
      {
        id: "al_s4_31",
        topic: "sharing",
        question:
          "A motorcyclist ahead of you has been signaling a left turn for several blocks and has not turned. What is the most likely explanation?",
        choices: [
          "The rider is waiting for you to pass on the right",
          "The signal did not cancel itself after an earlier turn",
          "The rider is warning you of a hazard ahead",
          "The bike's battery is failing",
        ],
        correctIndex: 1,
        explanation:
          "Turn signals are not automatically self-canceling on most motorcycles. A signal that has been on for a while is very often one the rider forgot to switch off after the last turn.",
        context:
          "That is why the manual tells you never to base your move on a motorcycle's signal alone; wait for the bike to actually start turning. The same chapter reminds you that a motorcycle is about two feet wide against a car's five to six, so it is easy to miss and hard to judge for speed and distance.",
        trap:
          "Assuming the rider is about to turn left and pulling out in front of them is the classic car-versus-motorcycle collision.",
        excerptKey: "motorcycle-signals",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Sharing the Road with Motorcycles",
        sourceUrl: hb(27),
        commonlyMissed: true,
      },
      {
        id: "al_s4_32",
        topic: "safety",
        question: "How much of a front windshield may be tinted in Alabama?",
        choices: [
          "None of it",
          "The upper 6 inches",
          "The upper 12 inches",
          "The whole windshield, at 32 percent light transmission",
        ],
        correctIndex: 1,
        explanation:
          "Only the upper 6 inches of the front windshield may be tinted with a transparent material, and that applies to every vehicle regardless of classification.",
        context:
          "The side and rear windows of a passenger car are treated differently: they may carry tinting that allows at least 32 percent light transmission. The windshield rule is the strict one because it covers the glass you actually see the road through.",
        trap:
          "The 32 percent figure is real, but it belongs to the side and rear windows. Applying it to the windshield is the mistake.",
        excerptKey: "tint-windshield",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Window Tinting",
        sourceUrl: hb(70),
      },
      {
        id: "al_s4_33",
        topic: "rules",
        question:
          "You pull up outside a friend's house and tap the horn twice to let them know you are there. What does the manual say?",
        choices: [
          "It is fine outside a residence district",
          "It is fine if you use short taps",
          "It is unlawful; the horn is for warning only, and needless use can lead to arrest",
          "It is fine before 9 pm",
        ],
        correctIndex: 2,
        explanation:
          "It is unlawful to use the horn for any purpose except to give warning when reasonably necessary for safe operation, and the manual says needless use may result in an arrest. Announcing your arrival is the example it gives.",
        context:
          "The horn is treated as a piece of required safety equipment in the vehicle chapter, alongside two separate braking systems, two headlights, a rear license plate light, a brake light and a red taillight, and mirrors that let you see 200 feet behind you.",
        trap:
          "Calling your passengers out with the horn is the exact example the manual names as prohibited.",
        excerptKey: "horn-needless",
        sourceLabel: "Alabama Driver Manual - Chapter 9: Horns",
        sourceUrl: hb(82),
      },
      {
        id: "al_s4_34",
        topic: "speed",
        question:
          "A trooper has someone stopped on the shoulder of a 65 mph highway and traffic is too heavy for you to change lanes. What must you do?",
        choices: [
          "Maintain speed and stay as far left in your lane as possible",
          "Slow to at least 15 mph below the posted limit",
          "Slow to 45 mph regardless of the posted limit",
          "Stop until the lane beside the officer is clear",
        ],
        correctIndex: 1,
        explanation:
          "When moving over is unsafe or impossible, the Move-Over law requires you to slow to at least 15 mph below the posted speed limit. On a 65 mph road that is 50 mph or less.",
        context:
          "Alabama's Move-Over law covers stopped emergency vehicles, tow trucks and utility vehicles with lights displayed, and since a later amendment it covers garbage, trash, refuse and recycling collection vehicles actively working on the roadside. A first violation is a $100 fine.",
        trap:
          "The requirement is relative to the posted limit, not a fixed number. On a 45 mph road the same rule means 30, not 50.",
        excerptKey: "move-over-slow",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Move-Over Law",
        sourceUrl: hb(70),
        commonlyMissed: true,
      },
      {
        id: "al_s4_35",
        topic: "signs",
        question:
          "A sign on an overpass reads CLEARANCE 12 FT 6 IN. What does the number mean?",
        choices: [
          "The width of the lanes beneath the structure",
          "The distance to the structure",
          "The maximum height that can pass under the structure",
          "The maximum weight the structure will carry",
        ],
        correctIndex: 2,
        explanation:
          "It is a height limit. Vehicles or loads taller than the clearance shown cannot go under the structure ahead, and a driver who tries anyway takes the bridge and the load with them.",
        context:
          "Clearance signs matter most to anyone driving a rental truck, towing a camper or carrying something on a roof rack. Alabama also requires a red flag on any load that projects more than four feet beyond the rear of the vehicle, and forbids loads that obstruct the driver's view or the vehicle's controls.",
        trap:
          "Reading it as a distance rather than a height is the mistake, and it is the one that puts a box truck into a railroad bridge.",
        excerptKey: "clearance-sign",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Warning Signs",
        sourceUrl: hb(50),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Alabama's numbers are ladders, not single figures - six statutory speed limits, four parking distances, four DUI convictions and two different school bus rules. This set asks about the rung people did not memorize.",
    questions: [
      {
        id: "al_s5_01",
        topic: "signs",
        question:
          "A diamond sign ahead is a bright yellow-green rather than ordinary yellow. What does that color mean in Alabama?",
        choices: [
          "Road construction ahead",
          "A temporary detour",
          "An emergency evacuation route",
          "Pedestrian crossings and school zones",
        ],
        correctIndex: 3,
        explanation:
          "Fluorescent yellow-green is reserved for pedestrian crossings and school zones. It exists because the ordinary yellow of a general warning sign does not stand out enough for the places where people are walking.",
        context:
          "Alabama teaches signs by shape and color first, because both carry meaning before you are close enough to read the words. Orange is the construction and work zone color, not fluorescent yellow-green, and the manual notes that warning signs are usually diamond shaped but that there are exceptions - the round railroad advance sign and the pentagon school sign among them.",
        trap:
          "Orange is the color people reach for when a sign looks unusually bright. Orange is road work; the yellow-green is people on foot.",
        excerptKey: "warning-fluorescent",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Warning Signs",
        sourceUrl: hb(46),
        commonlyMissed: true,
      },
      {
        id: "al_s5_02",
        topic: "rules",
        question:
          "A school bus is stopped with red lights flashing on a five-lane road with no median. You are travelling the other way. What must you do?",
        choices: [
          "Keep going, because the road has more than four lanes",
          "Keep going at no more than 15 mph",
          "Stop, because the highway is undivided",
          "Slow down and pass with care once children are clear",
        ],
        correctIndex: 2,
        explanation:
          "Alabama requires you to stop when meeting or following a school or church bus stopped on a four to six lane undivided highway. Lane count does not release you; only a divided highway does.",
        context:
          "The two halves of this rule are easy to blur. On a divided highway, traffic on the opposite roadway keeps moving. On an undivided road of any width, everyone stops until the bus withdraws its stop arm and turns off the red lights. Passing a stopped school bus is a 5-point offense and carries a fine of at least $150 on a first conviction.",
        trap:
          "Other states release oncoming traffic once the road has four lanes. Alabama's release depends on a division in the road, not the number of lanes.",
        excerptKey: "school-bus-undivided",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Stopping",
        sourceUrl: hb(63),
        commonlyMissed: true,
      },
      {
        id: "al_s5_03",
        topic: "speed",
        question:
          "You are on a four-lane divided US highway in Alabama, not an interstate, with no limit posted. What is the statutory maximum?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Section 32-5A-171 sets 70 mph on an interstate and 65 mph on any other highway with four or more traffic lanes. A four-lane divided US route is the second of those.",
        context:
          "Alabama's ladder has six rungs: 30 in an urban district, 35 on an unpaved road outside one, 45 on a paved county road, 55 on other roads outside urban districts, 65 on a four-lane highway and 70 on an interstate. Most learners memorize the two ends and guess the middle.",
        trap:
          "Fifty-five is the general out-of-town figure and it feels safe. The moment the road has four or more lanes the statutory ceiling is 65.",
        excerptKey: "st-speed-interstate",
        sourceLabel: "Code of Alabama - Section 32-5A-171",
        sourceUrl: code("32-5A-171"),
        commonlyMissed: true,
      },
      {
        id: "al_s5_04",
        topic: "parking",
        question:
          "How close to the driveway entrance of a fire station may you park on the same side of the street?",
        choices: ["No closer than 15 feet", "No closer than 20 feet", "No closer than 30 feet", "No closer than 75 feet"],
        correctIndex: 1,
        explanation:
          "The statute prohibits parking within 20 feet of a fire station driveway entrance. On the opposite side of the street the restriction stretches to 75 feet of the entrance, where it is properly signposted.",
        context:
          "The manual's parking list stops at the everyday distances - 15 feet from a hydrant, 20 from a crosswalk, 30 from a stop sign or signal, 50 from a rail. Section 32-5A-137 carries the full statutory list, and the fire station pair is the one the manual does not print.",
        trap:
          "Seventy-five feet is in the same sentence, but it belongs to the far side of the street. On your own side it is 20.",
        excerptKey: "st-parking-fire-station",
        sourceLabel: "Code of Alabama - Section 32-5A-137",
        sourceUrl: code("32-5A-137"),
        commonlyMissed: true,
      },
      {
        id: "al_s5_05",
        topic: "licensing",
        question:
          "How many points on the record of a graduated driver license holder will suspend that license?",
        choices: ["4 or more", "8 or more", "12 or more", "Points do not apply to a GDL"],
        correctIndex: 0,
        explanation:
          "A GDL holder is suspended at 4 or more points, or on 2 or more moving traffic violations. The full-license ladder does not even begin until 12 points in a two-year period.",
        context:
          "Four points is a single serious offense. Failure to yield is 5 points on its own; so is passing a stopped school bus, or speeding 26 mph or more over the limit. Reckless driving is 6. One conviction can end a young driver's license without any accumulation at all.",
        trap:
          "Twelve points is the number people remember, because it is the one printed in the point schedule table. That table is for full licenses.",
        excerptKey: "suspend-gdl-points",
        sourceLabel: "Alabama Driver Manual - Chapter 2: Suspension",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "al_s5_06",
        topic: "rightOfWay",
        question:
          "You roll through a yield sign without stopping and collide with a vehicle already in the intersection. How does Alabama law treat that collision?",
        choices: [
          "Fault is apportioned between both drivers",
          "The other driver must prove you were at fault",
          "As prima facie evidence that you failed to yield",
          "As a no-fault event, because a yield sign does not require a stop",
        ],
        correctIndex: 2,
        explanation:
          "Section 32-5A-112 makes the collision itself prima facie evidence that you failed to yield the right of way. The burden shifts onto you, not onto the driver you hit.",
        context:
          "A yield sign does not require a stop by itself, but it does require you to slow to a reasonable speed and stop if a stop is needed to yield. The manual lists a yield sign among the places you must stop if there are pedestrians or vehicles crossing the intersecting road.",
        trap:
          "\"I did not have to stop at a yield sign\" is true right up to the moment there is something to yield to. The statute then reads the crash as the proof.",
        excerptKey: "st-yield-collision",
        sourceLabel: "Code of Alabama - Section 32-5A-112",
        sourceUrl: code("32-5A-112"),
      },
      {
        id: "al_s5_07",
        topic: "impairment",
        question:
          "A 19-year-old is stopped and blows 0.05. It is a first offense. What happens to the license?",
        choices: [
          "Nothing; 0.05 is below the legal limit",
          "A written warning only",
          "A 90-day suspension",
          "A 30-day suspension",
        ],
        correctIndex: 3,
        explanation:
          "Under 21, the threshold is 0.02, not 0.08. A first violation with a blood alcohol level between 0.02 and 0.08 suspends the driving privilege for 30 days.",
        context:
          "Alabama runs three separate thresholds. It is 0.08 for an adult driver, 0.02 for anyone under 21 and for school bus and daycare drivers, and 0.04 for a commercial driver. The under-21 rule is a genuine zero-tolerance rule: 0.02 is roughly one drink.",
        trap:
          "Reading 0.05 as \"under the limit\" is exactly the mistake. It is under the adult limit and well over the one that applies to this driver.",
        excerptKey: "st-under-21-30-day",
        sourceLabel: "Code of Alabama - Section 32-5A-191",
        sourceUrl: code("32-5A-191"),
        commonlyMissed: true,
      },
      {
        id: "al_s5_08",
        topic: "emergencies",
        question: "Your rear wheels break loose and the car starts to skid. What do you do with the brake?",
        choices: [
          "Press it firmly and hold",
          "Leave it alone until you regain your forward direction",
          "Press and release it rapidly throughout the skid",
          "Press it lightly and steer straight",
        ],
        correctIndex: 1,
        explanation:
          "Do not put pressure on the brake until you have regained control of your forward direction. Braking speeds the skid up and locks the front wheels, and once those lock you cannot steer at all.",
        context:
          "The manual's sequence for a skid is: off the brake, steer in the direction you want the front of the car to go, and in a front-wheel-drive car a light touch of the gas to let the front wheels pull the car straight. If that is not working, disengage the transmission by pushing in the clutch or shifting to neutral.",
        trap:
          "Pumping the brakes is right for stopping on a slippery surface. It is wrong while the car is actually sliding.",
        excerptKey: "skid-no-brake",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Skidding",
        sourceUrl: hb(73),
        commonlyMissed: true,
      },
      {
        id: "al_s5_09",
        topic: "signs",
        question:
          "A black-and-white sign at a signalized intersection reads NO TURN ON RED. Which turns does it forbid?",
        choices: [
          "Both right and left turns on red",
          "Right turns only",
          "Left turns only",
          "Only turns made without stopping first",
        ],
        correctIndex: 0,
        explanation:
          "Where that sign is posted you may not make a right or a left turn on red. It removes both permissions, not just the right turn people associate with red lights.",
        context:
          "Without the sign, Alabama allows a right turn on red after a complete stop, and in certain instances a left turn on red - from a one-way street onto another one-way street. Either way you yield to all traffic and pedestrians lawfully proceeding through the intersection before you go.",
        trap:
          "Because the left turn on red is rare, people assume the sign only bites on right turns. It says turn, and it means both.",
        excerptKey: "no-turn-on-red",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Regulatory Signs",
        sourceUrl: hb(46),
      },
      {
        id: "al_s5_10",
        topic: "sharing",
        question:
          "Which of these must stop at every railroad crossing, whether or not anything is signalling?",
        choices: [
          "Every vehicle towing a trailer",
          "Every vehicle carrying more than three people",
          "Every vehicle, at every crossing",
          "A truck carrying flammable or hazardous material",
        ],
        correctIndex: 3,
        explanation:
          "School buses, church buses, any passenger bus and trucks transporting flammables, explosives or other hazardous material must stop before crossing any railroad crossing. Ordinary vehicles stop only when a signal, a gate, a flagman or an approaching train requires it.",
        context:
          "For everyone else, the requirement is to stop within 50 feet but not less than 15 feet of the nearest rail when the crossing signals, when gates are being lowered, or when a train is close enough to be a hazard. The manual also warns you to watch for a second train on another track after the first has passed.",
        trap:
          "Stopping at every crossing sounds like the careful answer and is the wrong one. A car stopping unnecessarily on a rural crossing is a hazard to whoever is behind it.",
        excerptKey: "rr-must-stop-vehicles",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Stopping for Railroad Crossings",
        sourceUrl: hb(41),
        commonlyMissed: true,
      },
      {
        id: "al_s5_11",
        topic: "rules",
        question: "When does Alabama law let you pass a vehicle on its right?",
        choices: [
          "When the vehicle ahead is making or about to make a left turn",
          "Whenever the left lane is occupied",
          "Whenever the vehicle ahead is under the speed limit",
          "Never, on any road",
        ],
        correctIndex: 0,
        explanation:
          "Section 32-5A-83 permits passing on the right when the vehicle being overtaken is making or about to make a left turn, and on a road wide enough for two or more lanes in your direction. The manoeuvre must still be made safely and without leaving the pavement.",
        context:
          "The hard limit sits in the same section: you may never drive off the pavement or onto the shoulder to complete a pass on the right. The manual states that separately too - driving on the shoulder to pass is unlawful except in an emergency or when traffic authorities direct it.",
        trap:
          "A slow driver in the left lane does not create a right to undertake them. The permission attaches to a left-turning vehicle or to a multilane road, not to your frustration.",
        excerptKey: "st-passing-right-left-turn",
        sourceLabel: "Code of Alabama - Section 32-5A-83",
        sourceUrl: code("32-5A-83"),
      },
      {
        id: "al_s5_12",
        topic: "safety",
        question:
          "You need to stop suddenly on a wet, slippery road in a car without anti-lock brakes. What does the manual tell you to do?",
        choices: [
          "Press the brake to the floor and hold it",
          "Pump the brakes",
          "Use the parking brake",
          "Shift to a lower gear and stay off the brake",
        ],
        correctIndex: 1,
        explanation:
          "For a sudden stop on a slippery surface, pump the brakes. Pumping keeps the wheels turning between applications, and turning wheels can still be steered.",
        context:
          "The context is a road where stopping distance has already stretched. On snow or ice the manual puts it at three to twelve times the dry-pavement distance, and it warns that snow treads, good as they are in ordinary winter conditions, give no proper traction on ice at all.",
        trap:
          "Pumping is for stopping on a slippery surface. Once the car is actually sliding, the instruction reverses: stay off the brake until you have the front of the car pointed where you want it.",
        excerptKey: "pump-brakes",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Slippery Roads Are Hazardous",
        sourceUrl: hb(73),
      },
      {
        id: "al_s5_13",
        topic: "signals",
        question:
          "You are on a one-way street facing a steady red light and you want to turn left onto another one-way street. What does Alabama allow?",
        choices: [
          "Nothing; left on red is never allowed",
          "The turn, without stopping, if nothing is coming",
          "The turn after a complete stop, yielding to traffic and pedestrians",
          "The turn only where a sign expressly permits it",
        ],
        correctIndex: 2,
        explanation:
          "Alabama permits a right turn on red and, in certain instances, a left turn on red after stopping - the classic case being one-way onto one-way. You stop first and yield to everything lawfully proceeding through the intersection.",
        context:
          "The permission disappears wherever a NO TURN ON RED sign is posted, and that sign kills both the right and the left turn. In both directions the requirement is a complete stop, not a slow roll, and then a yield.",
        trap:
          "Treating the left on red as automatic is one error; treating it as impossible is the other. It exists, and it is conditional.",
        excerptKey: "signal-red",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Traffic Signals",
        sourceUrl: hb(56),
        commonlyMissed: true,
      },
      {
        id: "al_s5_14",
        topic: "licensing",
        question:
          "A full license holder accumulates 13 points in a two-year period. How long is the suspension?",
        choices: ["30 days", "60 days", "90 days", "120 days"],
        correctIndex: 1,
        explanation:
          "The first band is 12 to 14 points in a two-year period, which brings a 60-day suspension. The bands climb from there.",
        context:
          "The full schedule is 12 to 14 points for 60 days, 15 to 17 for 90 days, 18 to 20 for 120 days, 21 to 23 for 180 days and 24 or more for 365 days. On receiving notice of a suspension a driver may request a pre-suspension hearing in the county where they live.",
        trap:
          "Ninety days is the next band up and the number people remember from the DUI ladder. At 13 points it is 60.",
        excerptKey: "points-schedule",
        sourceLabel: "Alabama Driver Manual - Chapter 2: The Alabama Point System",
        sourceUrl: hb(21),
      },
      {
        id: "al_s5_15",
        topic: "parking",
        question:
          "The lights start flashing at a railroad crossing. Within what range of the nearest rail must you stop?",
        choices: [
          "Between 5 and 20 feet",
          "Between 15 and 50 feet",
          "Between 20 and 75 feet",
          "Between 50 and 100 feet",
        ],
        correctIndex: 1,
        explanation:
          "You stop within 50 feet but not less than 15 feet from the nearest rail, and you do not proceed until you can do so safely. The near limit keeps you clear of the train; the far limit keeps you close enough to see down the track.",
        context:
          "This is a different number from the parking rule at the same place, where the prohibition is a flat 50 feet from the nearest rail. One is where you must stop when a train is coming, the other is where you may never leave a car standing.",
        trap:
          "Fifty feet is in both rules and means two different things. Stopping is a range of 15 to 50; parking is banned within 50.",
        excerptKey: "st-rr-stop",
        sourceLabel: "Code of Alabama - Section 32-5A-150",
        sourceUrl: code("32-5A-150"),
        commonlyMissed: true,
      },
      {
        id: "al_s5_16",
        topic: "sharing",
        question: "What does the Alabama manual call the area immediately around a stopped school bus?",
        choices: [
          "The Death Zone",
          "The No-Zone",
          "The buffer zone",
          "The loading envelope",
        ],
        correctIndex: 0,
        explanation:
          "The manual names it the Death Zone. Most children killed around school buses are struck by motorists who fail to stop for the flashing red lights and the extended stop arm.",
        context:
          "The No-Zone is a different thing entirely - the blind spots around trucks and buses in motion. The Death Zone is about the moments a bus is stopped and children are crossing in front of it, which is why Alabama sets the stopping distance behind a stopped school bus at 20 feet.",
        trap:
          "No-Zone and Death Zone sound interchangeable and are not. One is about being seen; the other is about children on foot.",
        excerptKey: "death-zone",
        sourceLabel: "Alabama Driver Manual - Chapter 9: The Death Zone",
        sourceUrl: hb(83),
      },
      {
        id: "al_s5_17",
        topic: "rules",
        question:
          "How close to an intersection or railroad crossing may you cross the center line to pass?",
        choices: [
          "You may not do so within 100 feet of it",
          "You may not do so within 200 feet of it",
          "You may not do so within 500 feet of it",
          "You may, as long as the line is broken",
        ],
        correctIndex: 0,
        explanation:
          "Section 32-5A-85 forbids driving left of center when approaching within 100 feet of, or traversing, any intersection or railroad grade crossing. The paint does not matter; the proximity does.",
        context:
          "The other no-passing limits sit alongside it. You may not cross the center line on a curve or hill without at least 500 feet of clear view, on a bridge or in a tunnel, or wherever signs or a solid yellow line prohibit it. And when you do pass into an oncoming lane, you must be back before coming within 200 feet of any approaching vehicle.",
        trap:
          "A broken yellow line means passing is generally allowed on that stretch. It does not survive the 100-foot rule at an intersection.",
        excerptKey: "st-no-pass-100-intersection",
        sourceLabel: "Code of Alabama - Section 32-5A-85",
        sourceUrl: code("32-5A-85"),
        commonlyMissed: true,
      },
      {
        id: "al_s5_18",
        topic: "impairment",
        question:
          "What blood alcohol content puts a school bus or daycare driver over the limit in Alabama?",
        choices: [".02 percent", ".04 percent", ".05 percent", ".08 percent"],
        correctIndex: 0,
        explanation:
          "School bus and daycare drivers are held to .02 percent, the same zero-tolerance figure that applies to drivers under 21. It is stricter than the .04 that applies to commercial drivers generally.",
        context:
          "Alabama's four thresholds are worth learning as a set: .08 for an adult driver, .04 for a commercial driver, .02 for anyone under 21, and .02 for school bus and daycare drivers. The manual also reminds you that impairment can occur before legal intoxication is attained.",
        trap:
          ".04 is the commercial driver's figure, and a school bus driver holds a commercial license, so it looks right. The manual singles them out at .02.",
        excerptKey: "bac-school-bus",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Driving While Under the Influence",
        sourceUrl: hb(35),
        commonlyMissed: true,
      },
      {
        id: "al_s5_19",
        topic: "emergencies",
        question: "Your car goes into deep water and is floating rather than sinking. How do you get out?",
        choices: [
          "Open a door immediately",
          "Wait for the car to fill so pressure equalizes, then open a door",
          "Escape through a window immediately",
          "Climb into the back and use the trunk release",
        ],
        correctIndex: 2,
        explanation:
          "If the car does not sink, escape through a window straight away. Opening a door, even if you can, lets water in far faster and takes away the time you have.",
        context:
          "This is another of the manual's counter-instinctive emergency instructions. The car floats for a short period and the window is the exit for that period. Waiting for the interior to fill is a strategy for a car already submerged and is a far worse position to be in.",
        trap:
          "The advice to wait for pressure to equalize is widely repeated and applies to a car that has already gone under. While it is still floating, the window is the way out.",
        excerptKey: "immersion",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Immersion",
        sourceUrl: hb(77),
      },
      {
        id: "al_s5_20",
        topic: "speed",
        question:
          "You are passing on a two-lane road, using the oncoming lane. By what point must you be back on your own side?",
        choices: [
          "Before coming within 100 feet of an approaching vehicle",
          "Before coming within 200 feet of an approaching vehicle",
          "Before coming within 500 feet of an approaching vehicle",
          "Before the oncoming driver flashes their lights",
        ],
        correctIndex: 1,
        explanation:
          "Section 32-5A-84 requires you to be back in your own lane before coming within 200 feet of any approaching vehicle. That is the legal floor, and at highway speeds it closes in about a second and a half.",
        context:
          "Alabama's passing rules stack several distances. You need 500 feet of clear view on a hill or curve before you start, you must not cross within 100 feet of an intersection or railroad crossing, and you must be back before you are within 200 feet of oncoming traffic.",
        trap:
          "Five hundred feet is the sightline you need before starting the pass. Two hundred is the margin you must leave when finishing it.",
        excerptKey: "st-passing-200",
        sourceLabel: "Code of Alabama - Section 32-5A-84",
        sourceUrl: code("32-5A-84"),
        commonlyMissed: true,
      },
      {
        id: "al_s5_21",
        topic: "signs",
        question:
          "Two cars beside each other both turn right at the same intersection. When is that permitted in Alabama?",
        choices: [
          "Whenever the cross street has two or more lanes",
          "Whenever both drivers signal",
          "Only at intersections that are properly signed for double right turns",
          "Never",
        ],
        correctIndex: 2,
        explanation:
          "Double right turns are permitted only at intersections properly signed for them. Anywhere else you follow the ordinary rules for a right turn, which means one vehicle turning from the right-hand lane.",
        context:
          "The ordinary right turn in Alabama is a tight one from the rightmost lane into the rightmost lane. On a four-lane or divided highway the manual wants you in the right lane well before the turn, and it wants you to finish the turn in the proper lane rather than swinging wide.",
        trap:
          "A wide cross street looks like an invitation. Without the signs and lane arrows, the second driver is turning from a lane that is not a turn lane.",
        excerptKey: "double-right-turns",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Regulatory Signs",
        sourceUrl: hb(46),
      },
      {
        id: "al_s5_22",
        topic: "safety",
        question: "You have snow tires fitted and the road has iced over. What does the manual say?",
        choices: [
          "Snow treads give no proper traction on ice",
          "Snow treads roughly double your grip on ice",
          "Snow treads are only useful on ice",
          "Snow treads let you keep your normal following distance",
        ],
        correctIndex: 0,
        explanation:
          "Snow treads are a real help in ordinary winter conditions but they do not give proper traction on ice. Ice is a different surface, and a tread pattern designed to bite into snow has nothing to bite into.",
        context:
          "The number that goes with this is the stopping distance: on snow or ice it takes three to twelve times as much distance to stop as on dry pavement. Alabama sees ice rarely enough that drivers have little practice with it, which is exactly why the manual spells it out.",
        trap:
          "Buying the tires feels like solving the problem. On ice the only thing that helps is a much lower speed and a much longer gap.",
        excerptKey: "snow-tires-ice",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Winter Driving",
        sourceUrl: hb(73),
      },
      {
        id: "al_s5_23",
        topic: "rightOfWay",
        question:
          "You are partway through an intersection when an ambulance comes up behind you with lights and siren. What do you do?",
        choices: [
          "Stop where you are so it can go around",
          "Clear the intersection, then pull to the side and stop",
          "Turn right at once to get out of the way",
          "Speed up and stay ahead of it until the next junction",
        ],
        correctIndex: 1,
        explanation:
          "In an intersection you clear it first, then pull to the side of the roadway and stop. Stopping inside the intersection blocks the emergency vehicle and everyone else at the same time.",
        context:
          "The rule is the same whether the emergency vehicle is overtaking you or meeting you: pull to the side and stop, and do not proceed until it has passed. Once it has, you may not follow closer than 500 feet, and driving over an unprotected fire hose needs a police officer's or fire official's authorization.",
        trap:
          "Stopping immediately is the trained reflex and it is wrong in the one place where it blocks every approach at once.",
        excerptKey: "emergency-vehicle-intersection",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Right of Way and Yielding",
        sourceUrl: hb(65),
        commonlyMissed: true,
      },
      {
        id: "al_s5_24",
        topic: "licensing",
        question:
          "Your license was revoked and the revocation period has now expired. What is required to drive again?",
        choices: [
          "A new application and passing the complete examinations again",
          "Nothing; the license becomes valid again automatically",
          "Payment of a reinstatement fee only",
          "A vision test only",
        ],
        correctIndex: 0,
        explanation:
          "After a revocation expires you apply for a new license and must take and pass the complete examinations. Revocation ends the license itself; it does not pause it.",
        context:
          "That is the difference between revocation and suspension. A suspension withdraws the privilege for a fixed period and the licence comes back at the end of it. Revocation cancels it, and Alabama applies revocation to things like a second DUI conviction, three reckless driving convictions in 12 months, and failing to stop and render aid after an injury crash.",
        trap:
          "People use suspended and revoked interchangeably. Only one of them requires you to sit the whole examination again.",
        excerptKey: "revocation-retest",
        sourceLabel: "Alabama Driver Manual - Chapter 2: Revocation",
        sourceUrl: hb(19),
        commonlyMissed: true,
      },
      {
        id: "al_s5_25",
        topic: "rules",
        question:
          "You reach the end of a freeway on-ramp and the through lane is busy. What does the manual tell you to do?",
        choices: [
          "Come to a full stop and wait for a clear gap",
          "Stop at the end of the acceleration lane and yield",
          "Match the speed of the through traffic and merge into a gap",
          "Drive along the shoulder until a gap appears",
        ],
        correctIndex: 2,
        explanation:
          "You use the acceleration lane to build up to the speed of the through traffic and merge into an opening. The manual says outright not to come to a full stop in the acceleration lane unless it is absolutely necessary.",
        context:
          "The obligation runs both ways. Drivers already on the freeway should allow room for those entering, but if they do not, the entering driver must yield. What makes the stop dangerous is the speed difference it creates for the car behind you on the ramp, which is expecting to accelerate.",
        trap:
          "Stopping to yield feels like the courteous, law-abiding thing to do. On a ramp it is the manoeuvre that causes the collision.",
        excerptKey: "merge-yield",
        sourceLabel: "Alabama Driver Manual - Chapter 8: Entering the Freeway",
        sourceUrl: hb(78),
        commonlyMissed: true,
      },
      {
        id: "al_s5_26",
        topic: "signals",
        question:
          "You break down at night on a rural highway and you have flares. Where do you put them?",
        choices: [
          "Right at the rear bumper, so drivers see the car",
          "Only in front of the car, to light your way",
          "In the traffic lane, 50 feet back",
          "From 100 to 500 feet behind the car, on the right hand edge",
        ],
        correctIndex: 3,
        explanation:
          "Flares or reflectors go from 100 to 500 feet to the rear of the vehicle, on the right hand edge of the highway. That distance gives approaching drivers time to see, understand and slow down.",
        context:
          "The rest of the manual's breakdown drill: get well off the highway or onto the shoulder, switch on the four-way flashers and raise the hood, and stay with the car if you can until help arrives. On a freeway you add a white cloth on a door handle or antenna as a distress signal.",
        trap:
          "A flare at the bumper only tells a driver about the hazard when they have already arrived at it.",
        excerptKey: "flares",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Night Driving",
        sourceUrl: hb(72),
      },
      {
        id: "al_s5_27",
        topic: "impairment",
        question:
          "You take a prescribed medication and also have one beer. What does the manual say about that combination?",
        choices: [
          "The effects roughly add together",
          "The alcohol cancels most sedative effects",
          "It is many times worse than either one alone",
          "It is safe below the legal limit",
        ],
        correctIndex: 2,
        explanation:
          "The manual's phrasing is that using alcohol and drugs together is many times worse than either used alone. The effects multiply rather than add.",
        context:
          "It is not just prescriptions. The manual points at allergy remedies and cold pills bought without a prescription, which may contain codeine, alcohol, antihistamines or bromides. Any of those can impair a driver on their own, and Alabama's DUI law reaches drugs and controlled substances just as it reaches alcohol.",
        trap:
          "\"One beer\" is doing the work in this question. With a sedating drug on board, the arithmetic that made one beer feel safe no longer holds.",
        excerptKey: "drug-alcohol-mix",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Drugs",
        sourceUrl: hb(37),
      },
      {
        id: "al_s5_28",
        topic: "signs",
        question:
          "A black-and-white sign with a large arrow curving to the right stands at the near end of a traffic island. What does it require?",
        choices: [
          "That you turn right at the island",
          "That you do not drive to the left of the sign",
          "That you yield to traffic on the other side of the island",
          "That the lane you are in ends at the island",
        ],
        correctIndex: 1,
        explanation:
          "A KEEP RIGHT sign means you must not drive to the left of it. It is a regulatory sign marking an obstruction or a divider you have to pass on the right.",
        context:
          "Regulatory signs are the black-and-white ones and they carry an obligation rather than a warning. This one appears at traffic islands, medians and the near end of a divider. It does not tell you to turn - your route continues, just on the correct side of the object.",
        trap:
          "The arrow looks like a direction of travel. It is telling you which side of the sign to be on.",
        excerptKey: "keep-right-sign",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Regulatory Signs",
        sourceUrl: hb(46),
      },
      {
        id: "al_s5_29",
        topic: "licensing",
        question:
          "How much behind-the-wheel practice must a driver under 18 certify before an unrestricted Alabama license?",
        choices: ["20 hours", "30 hours", "40 hours", "50 hours"],
        correctIndex: 3,
        explanation:
          "A minimum of 50 hours of behind-the-wheel driving practice must be certified, or you submit a certificate of completion from an approved State Department of Education driver education course instead.",
        context:
          "This sits in Section 32-6-7.2 with the rest of Alabama's graduated licensing conditions, alongside holding a learner license for at least six months, the passenger limit and the midnight to 6 am driving restriction. The manual's GDL summary does not print the 50-hour figure.",
        trap:
          "Forty hours is the common figure in other states and the number people guess. Alabama's is 50, and a driver education certificate substitutes for it entirely.",
        excerptKey: "st-gdl-50-hours",
        sourceLabel: "Code of Alabama - Section 32-6-7.2",
        sourceUrl: code("32-6-7.2"),
        commonlyMissed: true,
      },
      {
        id: "al_s5_30",
        topic: "parking",
        question: "What does a curb painted yellow mean in Alabama?",
        choices: [
          "Loading and unloading only",
          "Parking is limited to 15 minutes",
          "Parking is reserved for permit holders",
          "Parking is not allowed there",
        ],
        correctIndex: 3,
        explanation:
          "A yellow curb is on the manual's list of places parking is not allowed, in the same line as anywhere official signs prohibit parking. No time limit, no loading exception.",
        context:
          "The same list covers a bridge or tunnel, the roadway side of a vehicle already parked at the curb, a sidewalk or crosswalk, and the front of a driveway - plus the measured distances of 15 feet from a hydrant, 20 from a crosswalk, 30 from a stop sign or signal and 50 from a rail.",
        trap:
          "Yellow means loading zone in a good many cities. In the Alabama manual it means do not park.",
        excerptKey: "parking-yellow-curb",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Parking",
        sourceUrl: hb(31),
      },
      {
        id: "al_s5_31",
        topic: "safety",
        question:
          "Compared with dry pavement, how much more distance does the manual say you need to stop on snow or ice?",
        choices: [
          "About twice as much",
          "Three to twelve times as much",
          "About five times as much, consistently",
          "Twenty times as much",
        ],
        correctIndex: 1,
        explanation:
          "Three to twelve times the dry-pavement distance. The range is wide because packed snow and glare ice are very different surfaces, and the top of the range is the one worth planning for.",
        context:
          "Alabama's other following-distance figures make a useful comparison. The manual teaches two seconds in normal conditions, four to five in rain or when following a large vehicle, and the statute adds an absolute floor of 20 feet for every 10 mph of speed.",
        trap:
          "Doubling the gap is the instinct and is nowhere near enough at the icy end of that range.",
        excerptKey: "ice-stopping",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Slippery Roads Are Hazardous",
        sourceUrl: hb(73),
      },
      {
        id: "al_s5_32",
        topic: "rules",
        question: "Another driver pulls out to pass you on a two-lane road. What should you do?",
        choices: [
          "Speed up so they spend less time in the oncoming lane",
          "Move onto the shoulder to give them room",
          "Stay in your lane and do not increase speed",
          "Brake hard to open a gap in front of you",
        ],
        correctIndex: 2,
        explanation:
          "Stay in your own lane and do not increase your speed. The passing driver has judged the gap against your current speed, and changing it while they are alongside is what turns a pass into a head-on.",
        context:
          "The passing driver's own obligations are strict enough: 500 feet of clear view before starting on a hill or curve, no crossing within 100 feet of an intersection, and back in lane before coming within 200 feet of oncoming traffic. Your job is to keep the picture they planned against unchanged.",
        trap:
          "Easing onto the shoulder feels generous. It invites the passing driver to squeeze back in early and puts you on a surface you did not choose.",
        excerptKey: "being-passed",
        sourceLabel: "Alabama Driver Manual - Chapter 6: No Passing Zones",
        sourceUrl: hb(66),
      },
      {
        id: "al_s5_33",
        topic: "emergencies",
        question:
          "You clip a parked car in a lot and cannot find the owner. What does Alabama require?",
        choices: [
          "Nothing, if the damage is only cosmetic",
          "Report it to your insurer within 24 hours",
          "Wait at the scene for at least 30 minutes",
          "Notify police, try to find the owner, or leave a written notice with your name and address",
        ],
        correctIndex: 3,
        explanation:
          "Any one of those three satisfies the rule: notify the police, make an attempt to locate the owner, or leave a written notice in a conspicuous place on the vehicle giving your name and address. Doing none of them is leaving the scene.",
        context:
          "For a crash involving another driver, you give your name, address and registration number and show your driver license, and the manual says that applies to any type of accident. An injury or fatal crash must be reported by the quickest means available to local police, or to the State Troopers outside a municipality.",
        trap:
          "\"No visible damage\" is the driver's own judgment call and it is not the test. The obligation attaches to the contact, not to what you decide it cost.",
        excerptKey: "unattended-vehicle",
        sourceLabel: "Alabama Driver Manual - Chapter 4: When Involved in a Crash",
        sourceUrl: hb(40),
      },
      {
        id: "al_s5_34",
        topic: "sharing",
        question:
          "Someone steps into the road mid-block, well away from any crosswalk, and you are approaching. Who must yield?",
        choices: [
          "The pedestrian must yield to all vehicles",
          "You must yield, since pedestrians always have right of way",
          "Neither; both must stop",
          "The pedestrian, unless it is dark",
        ],
        correctIndex: 0,
        explanation:
          "Crossing at a point other than a crosswalk, a pedestrian must yield to all vehicles. Right of way at a crosswalk is not a right of way everywhere.",
        context:
          "None of that lets you drive into someone. The manual's list of driver duties still stands: stop for school children and school safety patrols directing movement, yield to blind pedestrians with canes or guide dogs, and never block a crosswalk. A driver who can avoid a collision must.",
        trap:
          "\"Pedestrians always have the right of way\" is the phrase everyone grew up with and it is not what the law says. Where they cross decides it.",
        excerptKey: "pedestrians-yield",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Pedestrians",
        sourceUrl: hb(67),
        commonlyMissed: true,
      },
      {
        id: "al_s5_35",
        topic: "signals",
        question:
          "A utility truck ahead is displaying a flashing amber light. What does that light entitle it to?",
        choices: [
          "The right of way over all other traffic",
          "The right of way at intersections only",
          "Nothing; it is a warning or caution light only",
          "The right to exceed the speed limit",
        ],
        correctIndex: 2,
        explanation:
          "An amber or yellow light serves as a warning or caution light only and does not cause other vehicles to yield the right of way. It tells you something is happening; it does not command you.",
        context:
          "The colors are assigned by statute. Police vehicles may show red or blue, and no vehicle other than a police vehicle may use blue. Fire department vehicles, ambulances and other authorized emergency vehicles show red. Alabama's Move-Over law still applies to a stopped utility or tow vehicle with its lights on, so you change lanes or slow to 15 mph below the posted limit.",
        trap:
          "Move over for it and yield to it are two different duties. The amber light triggers the first and not the second.",
        excerptKey: "st-amber-light",
        sourceLabel: "Code of Alabama - Section 32-5A-115",
        sourceUrl: code("32-5A-115"),
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
      "Thirty questions with no hints and no theme, mixing Alabama traffic laws, road signs and rules of safe driving the way the manual says the real test does. Sit it in one go.",
    questions: [
      {
        id: "al_s6_01",
        topic: "signs",
        question:
          "Why does the manual want you to learn sign shapes and colors as well as the signs themselves?",
        choices: [
          "Because shape and color are coded to the type of message",
          "Because the test only shows signs in outline",
          "Because colors change between counties",
          "Because shapes are the same nationwide but colors are not",
        ],
        correctIndex: 0,
        explanation:
          "Both shape and color are coded to the sign's type of message, so you can read what kind of sign it is from a distance and in poor light, before the words are legible.",
        context:
          "Alabama groups signs into three functions: regulatory, warning, and information or guide. Regulatory signs are mostly black on white with red for prohibitions, warning signs are yellow diamonds, orange marks construction, fluorescent yellow-green marks pedestrians and school zones, green gives directions, blue gives motorist services and brown marks recreation.",
        trap:
          "Learning individual signs by picture works until one is dirty, faded or partly hidden. The shape and color survive that.",
        excerptKey: "sign-shapes-colors",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Signs, Signals and Road Markings",
        sourceUrl: hb(43),
      },
      {
        id: "al_s6_02",
        topic: "rules",
        question: "How do you make a right turn from a four-lane highway?",
        choices: [
          "Turn from whichever lane is moving fastest",
          "Enter the right lane well before the turn and turn tightly into the right lane of the cross street",
          "Turn from the second lane to leave room for cyclists",
          "Swing wide from the left lane to straighten the turn",
        ],
        correctIndex: 1,
        explanation:
          "You get into the right lane well in advance and make a tight turn into the right lane of the cross street. Deciding to turn from where you happen to be is how side-swipes happen.",
        context:
          "The mirror rule for a left turn is to move to the lane nearest the center line or divider, turn from that inside lane without a wide swing, and enter the cross street just to the right of its centerline. Either way, the manual's instruction is to always finish your turn in the proper lane.",
        trap:
          "Swinging wide feels smoother and puts your car across a lane someone else is already using.",
        excerptKey: "right-turn-four-lane",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Turning From Four-Lane Highways",
        sourceUrl: hb(23),
      },
      {
        id: "al_s6_03",
        topic: "rightOfWay",
        question:
          "A pedestrian with a white cane is waiting to cross at the corner ahead of you. What must you do?",
        choices: [
          "Yield to them",
          "Sound your horn to signal that it is clear",
          "Proceed, since a cane is not a traffic control",
          "Yield only if they are already in the roadway",
        ],
        correctIndex: 0,
        explanation:
          "Drivers must yield to blind pedestrians with canes or guide dogs. It is one of the manual's short list of absolute driver duties toward people on foot.",
        context:
          "The same list requires you to stop for school children and for school safety patrols directing movement, to stop for a school bus displaying its extended stop arm, and not to block a crosswalk while waiting at a stop sign or a red light.",
        trap:
          "The horn is the wrong tool here. A blind pedestrian is navigating by sound, and a horn blast removes the information they are using.",
        excerptKey: "drivers-must-pedestrians",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Pedestrians",
        sourceUrl: hb(67),
      },
      {
        id: "al_s6_04",
        topic: "signals",
        question: "What does a steady circular green signal allow?",
        choices: [
          "Going straight only, unless an arrow is showing",
          "Going straight or turning right, but never left",
          "Proceeding without yielding, since the green protects you",
          "Going straight or turning either way, yielding to anyone lawfully in the intersection",
        ],
        correctIndex: 3,
        explanation:
          "On a steady circular green you may go straight or turn right or left, yielding to other vehicles and pedestrians lawfully within the intersection. A posted sign can still prohibit a particular turn.",
        context:
          "The yielding condition is the part people drop. A circular green is permission to enter, not a guarantee that the intersection is yours, and a green arrow adds protection from opposing vehicles without releasing you from yielding to pedestrians already crossing.",
        trap:
          "Reading green as \"go, others must wait\" is what puts a left-turning car into oncoming traffic on a permissive green.",
        excerptKey: "signal-green",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Traffic Signals",
        sourceUrl: hb(56),
      },
      {
        id: "al_s6_05",
        topic: "safety",
        question: "At what point does the manual want seat belts fastened?",
        choices: [
          "Before switching on the ignition",
          "Before the car reaches 15 mph",
          "Before leaving the parking space",
          "Before reaching a public road",
        ],
        correctIndex: 0,
        explanation:
          "Buckle your own belt and see that all passengers do the same before you switch on the ignition. Making it part of starting the car is the point, because a belt fastened later is often not fastened at all.",
        context:
          "Alabama's child restraint law reaches children through age 15, with a rear-facing seat until at least 1 year or 20 pounds, a forward-facing seat until at least 5 years or 40 pounds, and a booster after that. A violation of the safety belt requirement in any seat other than a front seat is a secondary violation only.",
        trap:
          "The short trip is where people skip it, and short trips at low speed are where most collisions happen.",
        excerptKey: "buckle-before-ignition",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Entering the Car",
        sourceUrl: hb(22),
      },
      {
        id: "al_s6_06",
        topic: "licensing",
        question: "What is the youngest age at which an Alabama driver license may be issued?",
        choices: ["14", "15", "16", "17"],
        correctIndex: 2,
        explanation:
          "A driver license shall not be issued to a person under 16 years of age, and the manual states the minimum driving age in Alabama as 16.",
        context:
          "A 15-year-old may hold a learner license, which is a different document: it carries a Y restriction requiring a licensed parent, guardian or someone 21 or over in the seat beside the driver. A separate restricted license lets a 14- or 15-year-old operate a motor driven cycle of not more than 200 pounds and no more than 150cc.",
        trap:
          "Fifteen is the learner license age, not the license age. The two get blurred because both documents are valid for four years.",
        excerptKey: "under-16-not-licensed",
        sourceLabel: "Alabama Driver Manual - Chapter 1: Who Cannot Be Licensed",
        sourceUrl: hb(8),
      },
      {
        id: "al_s6_07",
        topic: "sharing",
        question: "You are following a tractor-trailer at night. What should you do with your headlights?",
        choices: [
          "Use high beams so the driver can see you",
          "Dim them",
          "Flash them to signal your position",
          "Switch to parking lights",
        ],
        correctIndex: 1,
        explanation:
          "Always dim your headlights when following a large vehicle at night. High beams reflect off the truck's big side mirrors straight into the driver's eyes.",
        context:
          "Alabama's general rule is to dim within 500 feet of an oncoming vehicle and within 200 feet of a vehicle you are following. Behind a truck the reason is specific: the mirrors are angled to catch exactly the light your high beams are throwing.",
        trap:
          "Wanting to be seen is the right instinct. High beams behind a truck achieve the opposite by blinding the only person who can see you.",
        excerptKey: "dim-following-truck",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Sharing the Road with Large Vehicles",
        sourceUrl: hb(29),
      },
      {
        id: "al_s6_08",
        topic: "emergencies",
        question: "Your steering suddenly stops responding at speed. What is the first thing to do?",
        choices: [
          "Brake hard and steer toward the shoulder",
          "Pull the parking brake",
          "Ease off the accelerator without braking",
          "Shift into neutral and coast",
        ],
        correctIndex: 2,
        explanation:
          "Ease up on the accelerator but do not brake. Braking with no steering control can throw the car into a spin, and a car slowing gently in a straight line is a much better place to be.",
        context:
          "The manual's emergency responses share a shape: the instinctive reaction is usually the wrong one. Do not brake in a skid, do not swerve back off a soft shoulder, do not open a boiling radiator, do not put water on a gasoline fire.",
        trap:
          "Braking is the reflex for every emergency, and it is specifically the thing this one rules out.",
        excerptKey: "steering-failure",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Steering failure",
        sourceUrl: hb(76),
      },
      {
        id: "al_s6_09",
        topic: "parking",
        question: "You park facing downhill on a steep street. What does the manual require in every case?",
        choices: [
          "Set the hand brake",
          "Leave the transmission in neutral",
          "Turn the wheels away from the curb",
          "Leave the hazard lights on",
        ],
        correctIndex: 0,
        explanation:
          "Always set the hand brake. The manual's whole reason for the hill parking section is making sure the car cannot roll into traffic if the service brakes do not hold.",
        context:
          "The wheel direction goes with it: facing downhill, turn the front wheels toward the curb so the car rolls into it rather than into the road. Facing uphill with a curb, turn them away so the car rolls back into the curb. With no curb at all, turn them toward the edge of the road in either direction.",
        trap:
          "Neutral is exactly wrong - it removes the last thing holding the car. Alabama also forbids coasting downhill in neutral for the same reason.",
        excerptKey: "parking-hand-brake",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Parking on a Hill",
        sourceUrl: hb(30),
      },
      {
        id: "al_s6_10",
        topic: "speed",
        question:
          "You come over a rise and see flares laid out on the road ahead. What does Alabama law expect of your speed?",
        choices: [
          "Maintain the posted limit until you see the hazard itself",
          "Slow down; flares, flags and fuses are situations requiring a lower speed",
          "Stop completely before passing them",
          "Nothing, unless a flagman is present",
        ],
        correctIndex: 1,
        explanation:
          "Approaching flags, flares or fuses on the road is one of the situations where slower speeds are required, alongside approaching or crossing a street, highway or railroad crossing, and approaching the crest of a hill or a curve.",
        context:
          "The posted limit is a ceiling for good conditions, never a target. The manual makes the same point about municipalities, where all speed limits are maximum speeds, and Alabama's basic speed law requires a speed that is reasonable and prudent for the actual conditions.",
        trap:
          "\"I was under the limit\" is not a defense when the conditions called for less. That is the whole design of the basic speed law.",
        excerptKey: "slow-speeds",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Slow Speeds Often Required",
        sourceUrl: hb(62),
      },
      {
        id: "al_s6_11",
        topic: "impairment",
        question:
          "You take a cold remedy bought off the shelf, with no prescription. What does the manual say about driving?",
        choices: [
          "They may contain ingredients that affect your driving",
          "Non-prescription medicines do not affect driving",
          "They are safe if you stay under the dose on the box",
          "They only matter if combined with alcohol",
        ],
        correctIndex: 0,
        explanation:
          "Allergy remedies and cold pills you can buy without a prescription may contain codeine, alcohol, antihistamines or bromides, and the manual says each of those ingredients can affect your driving.",
        context:
          "Alabama's DUI law is not limited to alcohol. It reaches controlled substances and any substance that impairs a driver's ability to operate the vehicle safely. And combining alcohol with any drug is, in the manual's words, many times worse than either alone.",
        trap:
          "Available without a prescription is a statement about how you buy it, not about what it does to your reaction time.",
        excerptKey: "otc-drugs",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Drugs",
        sourceUrl: hb(37),
      },
      {
        id: "al_s6_12",
        topic: "signs",
        question:
          "You pass the same lane-reduction warning sign three times over a short stretch of highway. Why is it repeated?",
        choices: [
          "Each sign marks a different lane closing",
          "It marks the start, middle and end of a work zone",
          "The extra signs mark an advisory speed change",
          "The repetition is a reminder to merge into the adjacent lane",
        ],
        correctIndex: 3,
        explanation:
          "The three signs appear in a series as a repeating reminder that the number of lanes changes ahead and you need to merge into the adjacent lane. One warning at highway speed is easy to miss.",
        context:
          "Merging early is the point. The manual wants the lane change made before the lane physically ends, using a signal and a shoulder check, rather than at the last moment where you are negotiating for space with someone travelling at speed.",
        trap:
          "Treating the repetition as several separate hazards is the misreading. It is one hazard, signed three times.",
        excerptKey: "lane-ends",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Warning Signs",
        sourceUrl: hb(49),
      },
      {
        id: "al_s6_13",
        topic: "rules",
        question: "When may you use the shoulder to get past a slow vehicle in Alabama?",
        choices: [
          "When the shoulder is paved and clear",
          "When the vehicle ahead is signalling a left turn",
          "On any road outside a municipality",
          "During an emergency or when traffic authorities direct it",
        ],
        correctIndex: 3,
        explanation:
          "Driving on the shoulder to pass is unlawful except during an emergency or when traffic authorities direct it. The same restriction covers driving on the shoulder generally.",
        context:
          "Passing on the right is separately allowed where the vehicle ahead is making or about to make a left turn, or on a road wide enough for two or more lanes in your direction - but the statute is explicit that it must be done without leaving the pavement.",
        trap:
          "A left-turning vehicle does permit a pass on the right, which makes that answer feel correct. It permits it on the pavement, not on the shoulder.",
        excerptKey: "shoulder-passing",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Passing",
        sourceUrl: hb(67),
      },
      {
        id: "al_s6_14",
        topic: "signals",
        question: "The red lights at a railroad crossing begin to flash as you approach. What must you do?",
        choices: [
          "Slow to 15 mph and cross if the track is clear",
          "Cross quickly, before the gates come down",
          "Stop, and stay stopped until you can proceed safely",
          "Stop only if you can see a train",
        ],
        correctIndex: 2,
        explanation:
          "Always stop when the lights begin to flash, because a train is near, and do not proceed until you can do so safely. You stop within 50 feet but not less than 15 feet from the nearest rail.",
        context:
          "The lights and gates are the crossing's active warning. When gates are being lowered you remain stopped until they are raised and the lights have stopped flashing, and after a train passes you check for a second train on another track before moving.",
        trap:
          "Beating the gates is the classic fatal error. A freight train at 55 mph needs a mile or more to stop, so the arithmetic is never in your favor.",
        excerptKey: "rr-flashing-red",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Traffic Signals",
        sourceUrl: hb(57),
      },
      {
        id: "al_s6_15",
        topic: "safety",
        question:
          "Roughly what share of Alabama's fatal motor vehicle crashes happen during the hours of darkness?",
        choices: ["About a quarter", "About a third", "About half", "About three quarters"],
        correctIndex: 2,
        explanation:
          "Approximately half of Alabama's fatal motor vehicle crashes occur during the hours of darkness, even though far less driving is done then. Reduced visibility and the higher share of impaired and tired drivers do the rest.",
        context:
          "The manual's night driving answers are practical: never overdrive your headlights, dim within 500 feet of an oncoming vehicle and 200 feet behind one, keep yours dimmed even if the other driver does not, and cut glare by looking to the right-hand edge of the pavement and following the white line.",
        trap:
          "The figure sounds too high because so much less driving happens after dark. That gap is exactly the warning.",
        excerptKey: "night-half-fatal",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Night Driving",
        sourceUrl: hb(71),
      },
      {
        id: "al_s6_16",
        topic: "licensing",
        question: "When did Alabama's Hands-Free Law take effect?",
        choices: ["June 2019", "June 2022", "June 2024", "January 2026"],
        correctIndex: 2,
        explanation:
          "Alabama's Hands-Free Law took effect in June 2024. Physically holding a wireless telecommunications device is a violation when the driver is seen drifting in and out of a lane without signalling, swerving, or otherwise driving improperly.",
        context:
          "The separate texting law prohibits using a wireless device to write, send or read a text message, instant message or e-mail while driving, and an officer may treat that as the primary or sole reason for a stop. A driver under 18 on a graduated license may not use any handheld communication device at all.",
        trap:
          "Alabama's texting ban is much older than the hands-free law. Two different rules, arriving years apart.",
        excerptKey: "hands-free",
        sourceLabel: "Alabama Driver Manual - Chapter 1: Alabama's Hands-Free Law",
        sourceUrl: hb(18),
      },
      {
        id: "al_s6_17",
        topic: "sharing",
        question:
          "You have to walk along a rural road with no sidewalk. Which side and in what formation?",
        choices: [
          "Left side, single file",
          "Right side, single file",
          "Either side, as far from the pavement as possible",
          "Right side, two abreast for visibility",
        ],
        correctIndex: 0,
        explanation:
          "Stay as far left as possible, in single file. Walking on the left means facing oncoming traffic, so you can see a car coming and step clear.",
        context:
          "At night the manual adds a light: if you must become a pedestrian, carry one and walk on the left edge of the road or shoulder facing the traffic. It is the same reasoning as the daytime rule, with the visibility problem made much worse.",
        trap:
          "Walking with traffic on the right feels natural because that is the side you drive on. It puts every approaching car behind you.",
        excerptKey: "walk-left",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Safety Rules for Pedestrians",
        sourceUrl: hb(67),
      },
      {
        id: "al_s6_18",
        topic: "emergencies",
        question:
          "Someone is injured in a crash you have stopped at. When should you move them?",
        choices: [
          "As soon as possible, to get them off the road",
          "Whenever they ask you to",
          "Never, under any circumstances",
          "Only if it is absolutely necessary to get them away from fire or another danger",
        ],
        correctIndex: 3,
        explanation:
          "Moving injured people is dangerous, so you avoid it unless it is absolutely necessary to remove them from fire or another danger common to a crash scene. Spinal injuries are made permanent by well-meaning handling.",
        context:
          "The rest of the crash duties: give your name, address and registration number and show your license to the others involved, which applies to any type of accident. An injury or fatal crash must be reported by the quickest means available to local police, or to the State Troopers if it happened outside a municipality.",
        trap:
          "\"Never\" is as wrong as \"immediately\". Fire changes the calculation, and the rule is written to cover exactly that.",
        excerptKey: "crash-dont-move",
        sourceLabel: "Alabama Driver Manual - Chapter 4: What To Do If You Have A Crash",
        sourceUrl: hb(39),
      },
      {
        id: "al_s6_19",
        topic: "rules",
        question:
          "You are turning left from a divided highway onto a two-way cross street. Where do you enter the cross street?",
        choices: [
          "In whichever lane is clear",
          "Just to the right of its centerline",
          "In the far right lane, then move over",
          "Just to the left of its centerline",
        ],
        correctIndex: 1,
        explanation:
          "You enter the cross street just to the right of its centerline. That is the first lawful lane of travel on your new road, and it keeps your car out of the oncoming half of the street.",
        context:
          "The turn starts from the lane nearest the center line or traffic divider, and the manual wants it made without a wide swing. It repeats the general rule for every turn: always finish your turn in the proper lane.",
        trap:
          "Aiming for the outside lane produces the wide swing the manual warns about, and cuts across anyone turning beside you.",
        excerptKey: "left-turn-four-lane",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Turning From Four-Lane Highways",
        sourceUrl: hb(23),
      },
      {
        id: "al_s6_20",
        topic: "signs",
        question:
          "A yellow diamond shows a walking figure. There is no intersection in sight. What does it mean?",
        choices: [
          "A school is ahead",
          "A sidewalk ends ahead",
          "People often cross here, and the crosswalk need not be at an intersection",
          "Pedestrians are prohibited beyond this point",
        ],
        correctIndex: 2,
        explanation:
          "It marks a place where people on foot often cross, and the manual notes that the crosswalk may not necessarily be at an intersection. Mid-block crossings are exactly what it is warning about.",
        context:
          "A school zone gets its own pentagon-shaped sign, and both a school sign and a pedestrian crossing sign may be printed in fluorescent yellow-green rather than ordinary yellow. Alabama also requires drivers to yield to blind pedestrians and never to block a crosswalk.",
        trap:
          "Assuming the crossing must be at the corner is the mistake, and it is why the sign exists in the middle of a block.",
        excerptKey: "ped-crossing-sign",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Warning Signs",
        sourceUrl: hb(51),
      },
      {
        id: "al_s6_21",
        topic: "rightOfWay",
        question:
          "You have stopped at a red light and are turning right. A pedestrian starts across the street you are turning into. What now?",
        choices: [
          "The pedestrian must wait; you stopped first",
          "You may turn if you can clear the crosswalk first",
          "You may turn once you sound your horn",
          "You must yield to them",
        ],
        correctIndex: 3,
        explanation:
          "After stopping for a red light, both right and left turns require you to yield to other traffic and pedestrians lawfully proceeding through the intersection. Your stop bought you the chance to turn, not a priority.",
        context:
          "That permission disappears entirely where a NO TURN ON RED sign is posted, and the sign covers both directions of turn. The manual also forbids blocking a crosswalk while you wait at a stop sign or a red light.",
        trap:
          "Having stopped first feels like it earns you the turn. Order of arrival does not enter into it when the light is red.",
        excerptKey: "red-turns-yield",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Stopping",
        sourceUrl: hb(63),
      },
      {
        id: "al_s6_22",
        topic: "speed",
        question: "How should you read a posted speed limit inside an Alabama municipality?",
        choices: [
          "As a maximum speed",
          "As the speed traffic is expected to travel",
          "As a minimum in the left lane",
          "As advisory, unless a police officer is present",
        ],
        correctIndex: 0,
        explanation:
          "All speed limits in municipalities are maximum speeds. The number is a ceiling for ideal conditions, not a speed you are expected to reach.",
        context:
          "Alabama's basic speed law sits underneath every posted number and requires a speed that is reasonable and prudent for the conditions. Rain, fog, traffic, darkness and a crowded shopping street all mean the lawful speed is below the sign.",
        trap:
          "Keeping up with the flow of traffic is not a defense if the flow is above the posted maximum.",
        excerptKey: "municipal-max",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Speed Limits",
        sourceUrl: hb(61),
      },
      {
        id: "al_s6_23",
        topic: "impairment",
        question: "What does Alabama's implied consent law mean for a driver on a public highway?",
        choices: [
          "You have consented to a vehicle search at any stop",
          "You have consented to a chemical test of blood, breath or urine for alcohol content",
          "You have agreed to carry proof of insurance at all times",
          "You have agreed to appear in court for any citation",
        ],
        correctIndex: 1,
        explanation:
          "Anyone who operates a motor vehicle on Alabama's public highways is deemed to have consented to a chemical test of blood, breath or urine to determine blood alcohol content. Driving is the act that gives the consent.",
        context:
          "Refusing the test carries its own penalty, separate from any DUI conviction: the license is suspended for 90 days on a first refusal. That suspension runs whether or not the underlying DUI charge succeeds.",
        trap:
          "Refusing feels like withholding evidence and costs you the license regardless. The consent was given the moment you drove.",
        excerptKey: "implied-consent",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Implied Consent Law",
        sourceUrl: hb(36),
      },
      {
        id: "al_s6_24",
        topic: "safety",
        question:
          "An oncoming car's headlights are dazzling you on a dark two-lane road. Where should you look?",
        choices: [
          "Straight at the oncoming lights, to keep track of the car",
          "At the center line",
          "At the right-hand edge of the pavement and the white line",
          "At your own hood, until the car passes",
        ],
        correctIndex: 2,
        explanation:
          "Direct your vision away from the lights by looking to the right-hand edge of the pavement and concentrating on the white striped line. It keeps you in your lane without taking the glare full on.",
        context:
          "Alabama tells you to keep your own lights dimmed even if the oncoming driver refuses to dim theirs, on the grounds that you prove nothing by blinding them back. The dimming distances are 500 feet from an oncoming vehicle and 200 feet behind one you are following.",
        trap:
          "Looking at the center line keeps you steering but points you straight into the glare, which is exactly the light you are trying to get away from.",
        excerptKey: "glare",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Night Driving",
        sourceUrl: hb(72),
      },
      {
        id: "al_s6_25",
        topic: "signals",
        question:
          "Why does the manual suggest hand and arm signals in bright daytime sun even when your lights work?",
        choices: [
          "Turn signal lights are not legal in daylight",
          "Hand signals are required outside municipalities",
          "Signal lights draw too much current at low engine speeds",
          "Sunlight reflecting on the lens can make the flashing signal hard to see",
        ],
        correctIndex: 3,
        explanation:
          "Reflection of bright sunlight can make it difficult for other motorists to see a flashing signal light, so hand and arm signals may be used in addition. They are an addition, not a replacement.",
        context:
          "The Alabama arm signals, given from the driver's window: arm straight out for left, arm up at the elbow for right, arm down at the elbow for stopping or slowing. Whichever you use, the signal must run continuously for at least the last 100 feet before the turn.",
        trap:
          "Hand signals in place of working lights is the wrong reading. The manual says in addition to.",
        excerptKey: "hand-signals-daytime",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Rules for Turns",
        sourceUrl: hb(23),
      },
      {
        id: "al_s6_26",
        topic: "licensing",
        question: "Who is exempt from Alabama's graduated driver license restrictions?",
        choices: [
          "Anyone 18 years of age or older",
          "Anyone who has completed driver education",
          "Anyone who has held a license for a year",
          "Anyone driving to or from work",
        ],
        correctIndex: 0,
        explanation:
          "The GDL rules do not apply to individuals 18 years of age or older. Turning 18 ends them regardless of how long the license has been held.",
        context:
          "Until then, a Stage III driver under 18 may not drive between midnight and 6 am, may not carry more than one passenger who is not family, and may not use any handheld communication device. A violation extends the restricted period by six months or until the driver turns 18.",
        trap:
          "Driver education and a year of experience both shorten parts of the process. Neither one lifts the restrictions - only the eighteenth birthday does.",
        excerptKey: "gdl-not-apply-18",
        sourceLabel: "Alabama Driver Manual - GDL Summary",
        sourceUrl: hb(86),
      },
      {
        id: "al_s6_27",
        topic: "sharing",
        question:
          "A bicycle symbol with two chevrons above it is painted in the middle of the travel lane. What is it telling you?",
        choices: [
          "The lane is reserved for bicycles",
          "Cyclists may occupy the travel lane",
          "Cyclists must ride to the right of the marking",
          "A bike lane begins ahead",
        ],
        correctIndex: 1,
        explanation:
          "That is a shared lane marking, or sharrow, and it tells road users that people on bicycles might occupy the travel lane. The lane is shared, not reserved.",
        context:
          "It is a different marking from a bike lane, which is set aside by a solid white line and which drivers may only enter to turn or park where that is allowed. Wherever you pass a cyclist in Alabama you leave at least three feet, and cyclists may ride two abreast at all times.",
        trap:
          "Reading a sharrow as a bike lane and expecting the rider to keep to it is the misunderstanding it exists to prevent.",
        excerptKey: "sharrow",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Warning Signs",
        sourceUrl: hb(52),
      },
      {
        id: "al_s6_28",
        topic: "emergencies",
        question:
          "A small gasoline fire starts under the hood and you have no extinguisher. What do you use?",
        choices: [
          "Water from a bottle",
          "Dirt or sand",
          "A blanket held over the engine",
          "Nothing; close the hood and walk away",
        ],
        correctIndex: 1,
        explanation:
          "Use dirt or sand to smother it. Water is the wrong choice because burning gasoline floats on water and the water spreads the fire rather than putting it out.",
        context:
          "This belongs to the same family of counter-instinctive emergency responses as staying off the brake in a skid and leaving the radiator cap alone on an overheating engine. In each case the obvious move makes the situation worse.",
        trap:
          "Water is the reflex for any fire, and on a gasoline fire it carries the flames outward on the surface.",
        excerptKey: "fire",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Fire",
        sourceUrl: hb(77),
      },
      {
        id: "al_s6_29",
        topic: "parking",
        question: "Where does the manual specifically forbid parking, on top of the measured distances?",
        choices: [
          "On any bridge or in a tunnel",
          "On any street with a posted limit above 45 mph",
          "On any unpaved shoulder",
          "Within a mile of a school",
        ],
        correctIndex: 0,
        explanation:
          "Parking on any bridge or in a tunnel is prohibited outright. There is no room for traffic to get past and nowhere for a driver to see you from until they are on top of you.",
        context:
          "The list around it: the roadway side of a vehicle already parked at the curb, a yellow-painted curb, a sidewalk or crosswalk, in front of a driveway, and anywhere official signs prohibit it - together with 15 feet from a hydrant, 20 from a crosswalk, 30 from a stop sign or signal and 50 from the nearest rail.",
        trap:
          "The measured distances get memorized and the flat prohibitions get forgotten. Both are on the same page of the manual.",
        excerptKey: "parking-bridge",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Parking",
        sourceUrl: hb(31),
      },
      {
        id: "al_s6_30",
        topic: "rules",
        question: "Before changing lanes, what does the manual require in addition to checking your mirror?",
        choices: [
          "Sounding the horn",
          "Flashing your headlights",
          "Waiting three seconds after signalling",
          "Glancing over your shoulder at the blind spot",
        ],
        correctIndex: 3,
        explanation:
          "Do not rely solely on the mirror. Glance over your shoulder to check the blind spot the mirror does not cover, because a whole car fits in it.",
        context:
          "The signal is a separate obligation and it does not do the same job: the manual is clear that a signal shows your intention but does not grant you the right to change lanes. You still have to find the space and confirm it is empty.",
        trap:
          "Signalling and then moving is the most common lane-change collision in the book. The signal announces; the shoulder check confirms.",
        excerptKey: "lane-change-blind-spot",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Changing Lanes",
        sourceUrl: hb(68),
      },
    ],
  },
];
