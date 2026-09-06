import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets 1 to 3: the Manitoba Driver's Handbook
// (Manitoba Public Insurance, DVL0019, 02/02/2026) with The Highway Traffic
// Act, C.C.S.M. c. H60, filling the gaps the handbook leaves - the parking
// setbacks stated only as a list, the move-over speeds, the general
// right-of-way rule, the stopping position at a required stop, and the
// pedestrian right-of-way in a crosswalk.
//
// Set 4 works through the parts of the book people skim: licensing paperwork,
// occupant restraints, reserved lanes, the backing skill test, expressway
// technique and the collision-reporting rules.
//
// Set 5 is built from what Manitobans actually report going wrong. Threads in
// r/Winnipeg and r/Manitoba going back more than a decade name the same
// failure again and again: the questions with a NUMBER in them. Distances from
// a hydrant and from a rail, how far a horn must carry, how many months a
// stage runs, how long you wait to rewrite. Two independent posts, twelve
// years apart, also describe the Class 5 test as 30 questions needing 24
// right. Nothing on this list is taken as a statement of law - every rule in
// set 5 was checked back to the handbook or the Act, and where a thread was
// wrong, the wrong belief became the trap.
//
// Set 6 runs 30 questions with no scaffolding beyond the standard fields,
// weighted the way the real MPI test is: rules of the road, right-of-way and
// signs carrying the most, then safety, licensing, impairment and sharing.

const HB = "https://www.mpi.mb.ca/en/PDFs/CompleteHandbook.pdf";
/** Printed page number to a PDF page anchor. The book's page 1 is PDF page 3. */
const hb = (page: number) => `${HB}#page=${page + 2}`;
const HTA = "https://web2.gov.mb.ca/laws/statutes/ccsm/h060.php";

export const manitobaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions weighted towards the chapters people skip: licensing paperwork, child restraints, reserved lanes, the backing skill test, expressway technique and what the law wants after a collision.",
    questions: [
      {
        id: "mb_s4_01",
        topic: "licensing",
        question:
          "You have just been issued your first Manitoba driver's licence. What are you given to drive on until the card arrives?",
        choices: [
          "Nothing - you may not drive until the card comes",
          "A paper receipt valid for 14 days",
          "A digital licence in the MPI app",
          "A temporary driver's licence certificate valid for up to 45 days",
        ],
        correctIndex: 3,
        explanation:
          "You are given a temporary driver's licence certificate valid for up to 45 days, and you must carry it whenever you drive until the permanent one-piece licence arrives in the mail.",
        context:
          "The permanent card carries your photograph, taken at an Autopac agent or MPI Service Centre, and a new photo is needed every five years. Drivers under 18 are issued a card showing the exact date of their 18th birthday.",
        trap:
          "The temporary certificate has to be with you, not at home in a drawer. Carrying nothing is the same offence as driving without your licence.",
        excerptKey: "temporary-licence-45-days",
        sourceLabel: "Manitoba Driver's Handbook - Manitoba's one-piece driver's licence",
        sourceUrl: hb(14),
      },
      {
        id: "mb_s4_02",
        topic: "licensing",
        question:
          "You hold a valid licence from another Canadian province and you now qualify for a Manitoba one. What does the law say about keeping both?",
        choices: [
          "Both may be held, since they are issued by different governments",
          "Both may be held for up to a year",
          "Holding more than one valid Canadian or United States licence at a time is illegal",
          "Both may be held if you spend part of the year in each place",
        ],
        correctIndex: 2,
        explanation:
          "Holding more than one valid driver's licence from Canada or the United States at any time is listed among the illegal uses of a driver's licence. The old one goes when the new one is issued.",
        context:
          "The rule exists because suspensions and driving records follow the licence. A second licence in a second jurisdiction would let a suspended driver simply switch cards.",
        trap:
          "Spending part of the year elsewhere feels like it justifies a second licence, and it does not. Residence decides which single licence you hold.",
        excerptKey: "only-one-licence",
        sourceLabel: "Manitoba Driver's Handbook - Illegal use of driver's licence",
        sourceUrl: hb(15),
      },
      {
        id: "mb_s4_03",
        topic: "licensing",
        question: "How long is a Manitoba driver's licence valid for?",
        choices: ["Two years", "Three years", "Up to five years", "Ten years"],
        correctIndex: 2,
        explanation:
          "The Manitoba driver's licence is valid for up to five years, which is also the interval at which you need a new photograph.",
        context:
          "You still pay every year. In the years between renewals you get an annual statement of account, and the payment date is your anniversary date, which falls four months less a day after your birthday. Missing it can suspend the licence.",
        trap:
          "Valid for five years does not mean paid for five years. The annual charge is a separate obligation, and a lapse also stops the clock on Learner and Intermediate Stage time.",
        excerptKey: "licence-valid-five-years",
        sourceLabel: "Manitoba Driver's Handbook - Keep your licence valid",
        sourceUrl: hb(12),
      },
      {
        id: "mb_s4_04",
        topic: "licensing",
        question:
          "You want to operate heavy or agricultural equipment on a provincial highway. What is the minimum licence?",
        choices: [
          "A Class 5L Learner Stage licence",
          "A Class 5I Intermediate Stage licence or higher",
          "A Class 5F Full Stage licence",
          "A Class 3 licence",
        ],
        correctIndex: 1,
        explanation:
          "A valid Class 5I licence or higher is required to operate heavy and agricultural equipment on provincial highways and on roads in urban areas.",
        context:
          "The Intermediate Stage is where several permissions arrive at once. It is also the point at which you may tow a vehicle, drive a Class 3 vehicle registered as a farm truck, and operate off-road vehicles along or across a highway.",
        trap:
          "Farm work makes people assume a learner can drive equipment on the road. The threshold is the Intermediate Stage, which means the road test has been passed.",
        excerptKey: "heavy-equipment-licence",
        sourceLabel: "Manitoba Driver's Handbook - Operating heavy and agricultural equipment",
        sourceUrl: hb(16),
      },
      {
        id: "mb_s4_05",
        topic: "licensing",
        question: "How long do you get to complete the MPI knowledge test?",
        choices: [
          "Thirty minutes",
          "Fifteen minutes",
          "Forty-five minutes",
          "There is no time limit",
        ],
        correctIndex: 0,
        explanation:
          "There is a 30-minute time limit on the knowledge test. It is also not an open book test, and phones and electronic devices are not allowed in the test area.",
        context:
          "The test covers traffic laws, safe driving practices and recognition of road signs. Tests are by appointment only, on weekdays, and you check in 15 minutes before your scheduled time.",
        trap:
          "Thirty minutes is enough time to think but not enough to work things out from scratch, which is why people who have not read the handbook run out of it.",
        excerptKey: "knowledge-test-time-limit",
        sourceLabel: "Manitoba Driver's Handbook - General testing information",
        sourceUrl: hb(10),
      },
      {
        id: "mb_s4_06",
        topic: "licensing",
        question:
          "You are in the GDL programme and you fail the knowledge test. How soon can you try again?",
        choices: ["The same day", "After three days", "After seven days", "After fourteen days"],
        correctIndex: 2,
        explanation:
          "A GDL driver who is unsuccessful on the knowledge test waits a minimum of seven days before taking it again.",
        context:
          "The road test has a different wait: 14 days after an unsuccessful attempt. Only one knowledge or road test of the same class may be completed in a single day, so a failed test cannot be retried that afternoon.",
        trap:
          "Seven and 14 get swapped. The written test carries the shorter wait and the road test the longer one.",
        excerptKey: "knowledge-test-retest-wait",
        sourceLabel: "Manitoba Driver's Handbook - General testing information",
        sourceUrl: hb(10),
      },
      {
        id: "mb_s4_07",
        topic: "licensing",
        question: "How long must you wait to retake a Manitoba road test after failing one?",
        choices: [
          "Seven days",
          "Thirty days",
          "There is no waiting period",
          "Fourteen days",
        ],
        correctIndex: 3,
        explanation:
          "The wait after an unsuccessful road test is 14 days. It applies to every attempt, not only the first.",
        context:
          "The handbook adds that after four unsuccessful Class 5 road test attempts you must take at least two hours of professional instruction from a driving school holding an MPI permit before booking a fifth, and a signed Driving Instruction Verification form has to be produced to book it.",
        trap:
          "Seven days is the knowledge-test wait, and applying it to the road test means turning up to book an appointment you are not yet eligible for.",
        excerptKey: "road-test-retest-wait",
        sourceLabel: "Manitoba Driver's Handbook - General testing information",
        sourceUrl: hb(10),
      },
      {
        id: "mb_s4_08",
        topic: "safety",
        question:
          "Until what point does Manitoba law require a child to stay in a booster seat?",
        choices: [
          "Until they turn seven",
          "Until they are 120 cm tall",
          "Until they are at least 145 cm, 36 kg or nine years old",
          "Until they can reach the floor with their feet",
        ],
        correctIndex: 2,
        explanation:
          "A child must remain in a booster seat until they reach at least 145 cm in height, 36 kg in weight, or nine years of age. Any one of those three ends the requirement.",
        context:
          "The safest position for any car seat is the vehicle's rear middle seat. When you install one, use either the seatbelt or the Universal Anchorage System, and never both together.",
        trap:
          "Height, weight and age are alternatives, not a checklist, and a tall seven-year-old is out of the seat lawfully while a small nine-year-old is out by age.",
        excerptKey: "booster-seat-law",
        sourceLabel: "Manitoba Driver's Handbook - Booster seats",
        sourceUrl: hb(19),
      },
      {
        id: "mb_s4_09",
        topic: "safety",
        question: "How should a child car seat be secured in the vehicle?",
        choices: [
          "With the seatbelt and the Universal Anchorage System together for extra security",
          "With the Universal Anchorage System only, in every vehicle",
          "With the seatbelt only, in every vehicle",
          "With either the seatbelt or the Universal Anchorage System, but not both",
        ],
        correctIndex: 3,
        explanation:
          "You use the seatbelt or the Universal Anchorage System to install the seat, and you do not use both. Combining them can stop either system doing its job properly.",
        context:
          "Automatic seatbelt assemblies should not be used to restrain children in infant, child or booster seats placed in the front, and the rear middle seat remains the safest position in the vehicle.",
        trap:
          "More restraint sounds safer, which is exactly the reasoning the instruction is there to head off.",
        excerptKey: "car-seat-not-both-anchors",
        sourceLabel: "Manitoba Driver's Handbook - Rear-facing infant car seats",
        sourceUrl: hb(17),
      },
      {
        id: "mb_s4_10",
        topic: "safety",
        question: "By how much does wearing a seatbelt reduce the chance of being fatally injured in a collision?",
        choices: ["By about 20 per cent", "By about 40 per cent", "By as much as 70 per cent", "By about 90 per cent"],
        correctIndex: 2,
        explanation:
          "The chance of being fatally injured in a collision can be reduced by as much as 70 per cent by wearing a seatbelt.",
        context:
          "The belt only delivers that if it is worn properly: snug over the shoulder and across the hips, with the fabric flat and not twisted, and never routed under the arm.",
        trap:
          "Tucking the shoulder belt behind the arm to stop it rubbing is common and is specifically named as a cause of serious injury in a collision.",
        excerptKey: "seatbelt-fatality-reduction",
        sourceLabel: "Manitoba Driver's Handbook - Seatbelts",
        sourceUrl: hb(20),
      },
      {
        id: "mb_s4_11",
        topic: "parking",
        question:
          "You are driving a friend who holds a disability parking permit, but they are not with you today. May you use their permit to park in a designated space?",
        choices: [
          "Yes, provided the permit is displayed",
          "Yes, if you are running an errand for them",
          "No - the permit only covers parking when you are transporting the permit holder",
          "Yes, for up to 30 minutes",
        ],
        correctIndex: 2,
        explanation:
          "It is illegal to park in a space designated for people with disabilities unless you are disabled yourself, or you are transporting a person with a disability and a valid permit is prominently displayed.",
        context:
          "The permit is also only displayed while the vehicle is parked in specially designated parking. It is not meant to hang from the mirror while the vehicle is being driven.",
        trap:
          "Having the permit in the car feels like it is the permit that grants the right. The entitlement follows the person, not the piece of plastic.",
        excerptKey: "disabled-parking-illegal",
        sourceLabel: "Manitoba Driver's Handbook - Parking entitlement for people with physical disabilities",
        sourceUrl: hb(124),
      },
      {
        id: "mb_s4_12",
        topic: "parking",
        question: "You have finished parallel parking. How far from the curb should the vehicle be?",
        choices: [
          "Not more than 45 centimetres",
          "Not more than 30 centimetres",
          "Not more than one metre",
          "Touching the curb with both tires",
        ],
        correctIndex: 0,
        explanation:
          "A correct parallel park leaves the vehicle parallel to the curb and not more than 45 centimetres from it.",
        context:
          "The manoeuvre starts by pulling alongside the vehicle in front, about a metre out, with your rear bumper level with theirs. As you reverse you steer sharply right until the vehicle sits at about 45 degrees to the curb, then straighten as you come in.",
        trap:
          "Forty-five centimetres and 45 degrees appear in the same passage and get mixed up. One is the finished distance from the curb, the other is the angle partway through.",
        excerptKey: "parallel-park-45-cm",
        sourceLabel: "Manitoba Driver's Handbook - Parallel parking",
        sourceUrl: hb(84),
      },
      {
        id: "mb_s4_13",
        topic: "parking",
        question: "What size is the space used for the backing skill test on the Manitoba road test?",
        choices: [
          "About 1.85 metres by 7.5 metres",
          "About 1.5 metres by 6 metres",
          "About 2.5 metres by 9 metres",
          "It varies by test centre",
        ],
        correctIndex: 0,
        explanation:
          "The backing skill test asks you to reverse into a space measuring approximately 1.85 metres by 7.5 metres, marked out by testing poles.",
        context:
          "You get three attempts or four minutes, whichever comes first. Practising in a tighter space than that makes the real one feel generous, which is the advice Manitoba parents pass around.",
        trap:
          "Assuming the space varies by centre means never measuring one to practise in. It is a published, fixed size.",
        excerptKey: "backing-skill-test-space",
        sourceLabel: "Manitoba Driver's Handbook - Backing skill test",
        sourceUrl: hb(85),
      },
      {
        id: "mb_s4_14",
        topic: "parking",
        question: "How many attempts do you get at the backing skill test?",
        choices: [
          "One",
          "Two, within three minutes",
          "Three attempts or four minutes, whichever comes first",
          "Unlimited attempts within the test time",
        ],
        correctIndex: 2,
        explanation:
          "You have three attempts or four minutes, whichever comes first, to complete the backing portion of the test.",
        context:
          "The clock is as real as the attempt count, so a slow, careful first try that eats three of the four minutes leaves nothing for the other two. Practising to time is as important as practising the manoeuvre.",
        trap:
          "People revise the number of attempts and forget the four minutes, which is usually the constraint that actually bites.",
        excerptKey: "backing-skill-test-attempts",
        sourceLabel: "Manitoba Driver's Handbook - Backing skill test",
        sourceUrl: hb(85),
      },
      {
        id: "mb_s4_15",
        topic: "parking",
        question:
          "You are parking on a hill on a rural road with no curb. Which way do the front wheels go?",
        choices: [
          "Slightly to the right, whichever way you are facing",
          "Towards the ditch if facing downhill, away from it if facing uphill",
          "Straight ahead, with the parking brake on",
          "Slightly to the left, whichever way you are facing",
        ],
        correctIndex: 0,
        explanation:
          "With no curb, the wheels go slightly to the right whether you are parked facing up or down the hill. If the vehicle rolls, it moves off the roadway rather than onto it.",
        context:
          "Where there is a curb the direction depends on the slope: facing downhill the wheels turn towards the curb, facing uphill they turn away from it. In all three cases the transmission goes into Park or into reverse or low gear, and the parking brake goes on firmly.",
        trap:
          "The uphill and downhill rules are the ones people memorise, and then they get applied on a road that has no curb to work against.",
        excerptKey: "hill-park-no-curb",
        sourceLabel: "Manitoba Driver's Handbook - Parking on a hill or incline",
        sourceUrl: hb(88),
      },
      {
        id: "mb_s4_16",
        topic: "signals",
        question: "How is a reserved lane marked on a Manitoba road?",
        choices: [
          "By a solid white line and the word BUS",
          "By a solid yellow line on both sides",
          "By orange bollards",
          "By double broken lines and white diamond patterns",
        ],
        correctIndex: 3,
        explanation:
          "Reserved lanes are marked with double broken lines and white diamond patterns painted on the surface.",
        context:
          "One variety runs against the flow: a contra-flow lane is a curb lane on a one-way street set aside for designated vehicles travelling in the opposite direction to everyone else. Painted left-turn islands, common in rural areas, are a different marking again, and no traffic at all may drive within them.",
        trap:
          "The diamond is the giveaway, not the colour of the line. Reserved lanes are marked the same way whether they are for buses, taxis or high-occupancy vehicles.",
        excerptKey: "reserved-lane-markings",
        sourceLabel: "Manitoba Driver's Handbook - Reserved lanes",
        sourceUrl: hb(35),
      },
      {
        id: "mb_s4_17",
        topic: "rules",
        question:
          "You are turning right onto a street whose curb lane is a diamond lane. Which lane do you turn into?",
        choices: [
          "The second lane from the curb, to stay out of the reserved lane",
          "Whichever lane is clear",
          "The centre lane",
          "The first lane, turning as close as practicable to the curb",
        ],
        correctIndex: 3,
        explanation:
          "You turn as close as practicable to the curb and into the first lane, even though it is a diamond lane. Reserved-lane restrictions do not change how a right turn is made.",
        context:
          "Turning across a reserved lane from the second lane is the same error as turning right in front of a stopped transit bus. The handbook gives the opposite instruction when the reserved lane is in a cross street you are turning from, where you enter the second lane from the curb.",
        trap:
          "Avoiding the diamond lane looks like the law-abiding choice and it puts you turning across a lane that a bus may be using.",
        excerptKey: "reserved-lane-right-turn",
        sourceLabel: "Manitoba Driver's Handbook - Reserved lanes",
        sourceUrl: hb(35),
      },
      {
        id: "mb_s4_18",
        topic: "signs",
        question: "What are sharrows painted on a Manitoba roadway for?",
        choices: [
          "To encourage cyclists and motorists to share the road",
          "To mark a lane cyclists must use",
          "To mark where cyclists must dismount",
          "To show the edge of a bike lane",
        ],
        correctIndex: 0,
        explanation:
          "Sharrows are pavement markings that encourage cyclists and motorists to share the road. They mark a shared lane rather than reserving anything.",
        context:
          "That fits the wider rule that cyclists are not limited to a bike lane even where one is provided. A cyclist riding in the general traffic lane beside a bike lane is where they are entitled to be.",
        trap:
          "A sharrow is read as a bike lane, and drivers then treat a cyclist outside it as being in the wrong place. It reserves nothing for either party.",
        excerptKey: "sharrows",
        sourceLabel: "Manitoba Driver's Handbook - Cycling pavement markings",
        sourceUrl: hb(38),
      },
      {
        id: "mb_s4_19",
        topic: "sharing",
        question:
          "There is a marked bike lane on the street, and a cyclist is riding in the general traffic lane instead. What is the position?",
        choices: [
          "The cyclist is committing an offence",
          "The cyclist may only leave the bike lane to turn left",
          "The cyclist may only leave the bike lane if it is obstructed",
          "The cyclist is entitled to be there, because cyclists are not limited to a bike lane",
        ],
        correctIndex: 3,
        explanation:
          "Cyclists are not limited to the use of a bike lane when one is provided. The lane is available to them, not compulsory.",
        context:
          "Cyclists carry the same rights and duties as drivers and must obey signs and signals. They are expected to ride as closely as practicable to the right-hand boundary of the road, to ride single file in a group, and to use a white front light and a red rear light in low light.",
        trap:
          "Sounding the horn at a cyclist outside the bike lane is a response to a rule that does not exist.",
        excerptKey: "bike-lane-not-limited",
        sourceLabel: "Manitoba Driver's Handbook - Cycling pavement markings",
        sourceUrl: hb(37),
      },
      {
        id: "mb_s4_20",
        topic: "rules",
        question: "You have just missed your exit on an expressway. What should you do?",
        choices: [
          "Reverse carefully along the shoulder",
          "Stop and wait for a gap to back up",
          "Continue on to the next exit",
          "Cross the gore area to rejoin the ramp",
        ],
        correctIndex: 2,
        explanation:
          "You carry on to the next exit. Stopping or backing up on an expressway is never the answer, however far past the ramp you are.",
        context:
          "Leaving an expressway properly means holding your speed until you are completely in the exit ramp and then slowing smoothly to the posted or prevailing ramp speed, whichever is lower. Braking in the through lane is what causes the collision behind you.",
        trap:
          "The exit looks close enough to reach in reverse. At expressway closing speeds a stationary or reversing vehicle is the single most dangerous object on the road.",
        excerptKey: "expressway-missed-exit",
        sourceLabel: "Manitoba Driver's Handbook - Entering and leaving an expressway",
        sourceUrl: hb(61),
      },
      {
        id: "mb_s4_21",
        topic: "signs",
        question: "There is a small square sign with a number on it under a railway crossbuck. What does the number tell you?",
        choices: [
          "The speed limit over the crossing",
          "The distance in metres to the nearest rail",
          "The crossing's identification number",
          "The number of train tracks",
        ],
        correctIndex: 3,
        explanation:
          "The number on the square sign beneath the crossbuck is the number of tracks at that crossing.",
        context:
          "It matters because of the second-train hazard. With more than one track you do not start across the moment a train has cleared, since another may be coming on the other one.",
        trap:
          "Reading it as a distance or a speed misses the one piece of information that changes what you do after a train passes.",
        excerptKey: "sign-railway-track-count",
        sourceLabel: "Manitoba Driver's Handbook - Warning signs",
        sourceUrl: hb(25),
      },
      {
        id: "mb_s4_22",
        topic: "emergencies",
        question: "Smoke starts coming from under the dashboard while you are driving. What is the first step?",
        choices: [
          "Open the hood to let the smoke out",
          "Accelerate to the next service station",
          "Pour water over the dashboard",
          "Turn off the ignition immediately",
        ],
        correctIndex: 3,
        explanation:
          "A vehicle fire usually starts with an electrical short circuit, so the ignition goes off immediately. Cutting the power is what stops the source.",
        context:
          "The handbook's emergency chapter is a set of first moves like this one: hold the wheel and lift off in a blowout, come off the pedals and steer where you want to go in a skid, and stay inside the vehicle if a power line is down across it.",
        trap:
          "Opening the hood feeds air to the fire, and it puts you next to it. Driving on keeps the electrical system energised.",
        excerptKey: "vehicle-fire-ignition",
        sourceLabel: "Manitoba Driver's Handbook - Vehicle on fire",
        sourceUrl: hb(106),
      },
      {
        id: "mb_s4_23",
        topic: "emergencies",
        question:
          "You reverse into a parked car in a lot and there is nobody around. What does the law require?",
        choices: [
          "Nothing, if the damage is minor",
          "Report it to police within 24 hours",
          "Take reasonable steps to find and notify the owner",
          "Leave a note only if the damage exceeds $1,000",
        ],
        correctIndex: 2,
        explanation:
          "If you collide with and damage an unattended vehicle or other property, you must take reasonable steps to find and notify the owner. Leaving is not an option because the owner is absent.",
        context:
          "A collision that produces only property damage does not have to be reported to police, whatever the value. That is a separate question from the duty to identify yourself to the person whose property you damaged.",
        trap:
          "No police report needed gets read as nothing needs doing. The duty to the owner stands independently of any duty to report.",
        excerptKey: "collision-unattended-vehicle",
        sourceLabel: "Manitoba Driver's Handbook - If you're involved in a collision",
        sourceUrl: hb(110),
      },
      {
        id: "mb_s4_24",
        topic: "emergencies",
        question:
          "Two vehicles have collided and one occupant is hurt but not trapped, and the vehicle is not on fire. What should you do?",
        choices: [
          "Move them to the roadside for safety",
          "Sit them upright to help their breathing",
          "Walk them away from the vehicle slowly",
          "Leave them where they are and call for help",
        ],
        correctIndex: 3,
        explanation:
          "Where someone is hurt you do not attempt to move them unless the vehicle is on fire. Moving an injured person risks doing more damage than the collision did.",
        context:
          "The step before that is to park your own vehicle off the roadway so a second collision does not happen, and then to call 911 or the nearest police station and ambulance where the injury is serious. Turning off the ignition of the vehicles involved reduces the fire risk.",
        trap:
          "Getting people clear of the wreck feels like the caring response. Fire is the only condition that makes moving an injured person the lesser risk.",
        excerptKey: "collision-do-not-move-injured",
        sourceLabel: "Manitoba Driver's Handbook - Upon arriving at the scene of a collision",
        sourceUrl: hb(108),
      },
      {
        id: "mb_s4_25",
        topic: "speed",
        question:
          "You are driving well under the limit on a busy Manitoba road with a queue behind you. What does the handbook say?",
        choices: [
          "Driving slowly is always the safer choice",
          "You must pull over every kilometre",
          "There is no rule about driving too slowly",
          "You should not drive so slowly that you hold back or block the normal flow of traffic",
        ],
        correctIndex: 3,
        explanation:
          "You should not drive at a speed so slow that you hold back or block the normal and reasonable flow of traffic. Too slow is its own problem, not a safe default.",
        context:
          "The Act adds a working threshold for one situation: a driver is presumed to be one who must keep right if the vehicle is being driven at less than 30 kilometres per hour. It also makes an unreasonable speed an offence even when it is under the posted limit.",
        trap:
          "Slower always equals safer is a comfortable belief that produces overtaking manoeuvres by frustrated drivers behind you.",
        excerptKey: "speed-too-slow",
        sourceLabel: "Manitoba Driver's Handbook - Speed",
        sourceUrl: hb(57),
      },
      {
        id: "mb_s4_26",
        topic: "rules",
        question:
          "You are backing straight out of a driveway. Which way should you be looking?",
        choices: [
          "Over your right shoulder, using the mirrors as well",
          "Over your left shoulder only",
          "At the rear-view camera screen alone",
          "Straight ahead, steering by the mirrors",
        ],
        correctIndex: 0,
        explanation:
          "Reversing straight back or to the right means checking the mirrors and looking over your right shoulder. Reversing to the left means the mirrors and the left shoulder.",
        context:
          "Before any of that, check what is behind the vehicle by looking in the mirrors and over your shoulder, specifically including children who may be too small to appear in your direct line of vision at all.",
        trap:
          "A camera shows a rectangle behind the bumper and nothing approaching from the side. It supplements the shoulder check, it does not replace it.",
        excerptKey: "backing-shoulder-choice",
        sourceLabel: "Manitoba Driver's Handbook - Backing up",
        sourceUrl: hb(80),
      },
      {
        id: "mb_s4_27",
        topic: "safety",
        question:
          "You are driving in dense fog during the day. What should your headlights be on?",
        choices: [
          "High beam, for maximum reach",
          "Hazard lights instead of headlights",
          "Daytime running lights only",
          "Low beam",
        ],
        correctIndex: 3,
        explanation:
          "Low beam is the setting for fog, because high beam reflects off the water droplets and throws the glare straight back at you. Fog lamps are better again if the vehicle has them.",
        context:
          "Fog is also one of the triggers for the headlight rule in general: lights must be on whenever visibility is reduced to 60 metres, whatever the time of day. Low beam is likewise correct under street lighting and when following another vehicle closely.",
        trap:
          "High beam feels like it should help because it is brighter. In fog it reduces what you can see rather than increasing it.",
        excerptKey: "fog-low-beam",
        sourceLabel: "Manitoba Driver's Handbook - Reduced visibility",
        sourceUrl: hb(94),
      },
      {
        id: "mb_s4_28",
        topic: "safety",
        question: "You have driven through deep water. What should you do next?",
        choices: [
          "Accelerate hard to dry the brakes out",
          "Nothing, as modern brakes are sealed",
          "Apply the parking brake to check it",
          "Test the brakes lightly, since they may pull to one side or not work at all",
        ],
        correctIndex: 3,
        explanation:
          "Always test the brakes lightly after driving through deep water. They may pull to one side or fail altogether until they dry out.",
        context:
          "The test is a light application at low speed, done as soon as you are clear of the water and before you need the brakes for real. Gentle repeated braking is what dries them.",
        trap:
          "Assuming brakes are unaffected by water means finding out at the first junction, which is the wrong place for the discovery.",
        excerptKey: "wet-brakes",
        sourceLabel: "Manitoba Driver's Handbook - Wet brakes",
        sourceUrl: hb(104),
      },
      {
        id: "mb_s4_29",
        topic: "safety",
        question: "You are starting to feel sleepy at the wheel on a long drive. What does MPI advise?",
        choices: [
          "Open the window and turn up the radio",
          "Stop your vehicle and rest",
          "Drink coffee and continue",
          "Slow down by 20 km/h and carry on",
        ],
        correctIndex: 1,
        explanation:
          "Stop the vehicle and rest. If the only place to stop is the side of the road, pull well over and put the four-way flashers on so you are not struck.",
        context:
          "Fatigue sits in the same chapter as distraction because they do the same thing to your attention. Distracted driving is any activity that diverts attention from the road, and being distracted for a few seconds is enough to cause a fatal crash.",
        trap:
          "Air, noise and caffeine change how awake you feel for a few minutes and change nothing about how long your reactions are taking.",
        excerptKey: "drowsiness",
        sourceLabel: "Manitoba Driver's Handbook - Drowsiness or fatigue",
        sourceUrl: hb(96),
      },
      {
        id: "mb_s4_30",
        topic: "sharing",
        question:
          "You come up behind a horse and rider on a rural Manitoba road. What is the right approach?",
        choices: [
          "Sound the horn so the rider knows you are there",
          "Pass quickly to spend as little time alongside as possible",
          "Slow down, leave plenty of room, and be ready to stop if the rider signals",
          "Follow closely until the rider moves onto the shoulder",
        ],
        correctIndex: 2,
        explanation:
          "Do not sound your horn, be ready to stop if the rider indicates you should, and when you do pass, slow down and leave plenty of distance between your vehicle and the horse.",
        context:
          "The reasoning is the same as for a cyclist, with an animal that can move sideways without warning. A frightened horse is a hazard to the rider, to you and to oncoming traffic at once.",
        trap:
          "The horn is meant as a courtesy warning and it is the single most likely thing to startle the animal.",
        excerptKey: "horses-pass-slow-wide",
        sourceLabel: "Manitoba Driver's Handbook - Animals on the road",
        sourceUrl: hb(101),
      },
      {
        id: "mb_s4_31",
        topic: "sharing",
        question:
          "A pilot vehicle is escorting an oversize load. How far ahead of or behind the load does it travel?",
        choices: [
          "Between 30 and 100 metres",
          "Between 100 and 500 metres",
          "Between 500 metres and one kilometre",
          "Directly alongside",
        ],
        correctIndex: 1,
        explanation:
          "A pilot vehicle precedes and follows the oversize vehicle or load at a distance of not less than 100 metres and not more than 500 metres.",
        context:
          "The gap gives you warning while keeping the escort close enough to be obviously connected to the load. An oversize load may threaten normal traffic patterns, particularly when it is being passed on a two-way highway.",
        trap:
          "Seeing the pilot vehicle go by and assuming the road is clear is the error. The load is somewhere between 100 and 500 metres behind it.",
        excerptKey: "pilot-vehicle-distance",
        sourceLabel: "Manitoba Driver's Handbook - Pilot vehicles",
        sourceUrl: hb(101),
      },
      {
        id: "mb_s4_32",
        topic: "safety",
        question: "What is the recommended speed on a Manitoba ice road for a vehicle of seven tonnes or more?",
        choices: ["15 km/h", "30 km/h", "40 km/h", "50 km/h"],
        correctIndex: 0,
        explanation:
          "There are no posted speed limit signs on ice roads, and the recommended speed for vehicles with a maximum gross vehicle weight of seven tonnes or greater is 15 km/h on all of them.",
        context:
          "The number is that low because a heavy vehicle moving quickly generates a pressure wave under the ice. Speed, not weight alone, is what breaks an ice road.",
        trap:
          "The absence of signs reads as the absence of a rule. Ice roads are unsigned by design, and the figure still applies.",
        excerptKey: "winter-road-speed",
        sourceLabel: "Manitoba Driver's Handbook - Winter road driving",
        sourceUrl: hb(98),
      },
      {
        id: "mb_s4_33",
        topic: "impairment",
        question:
          "Your doctor has prescribed a sleeping pill and you take the prescribed dose. What is the position for driving?",
        choices: [
          "A prescribed dose cannot impair you",
          "Tranquilizers, antidepressants and sleeping pills can affect your driving even at the prescribed dose",
          "Only over-the-counter medicines cause impairment",
          "Prescription drugs are only a problem when mixed with alcohol",
        ],
        correctIndex: 1,
        explanation:
          "Tranquilizers, antidepressants, sleeping pills and similar drugs can affect your driving ability even when taken in the prescribed dosage. A prescription is not a defence to impaired driving.",
        context:
          "The wider rule is that a charge of impaired driving can be laid at any level of any substance if your ability to drive is actually impaired. The Criminal Code numbers are additional thresholds, not the only way to be caught.",
        trap:
          "A prescription feels like official permission. It says the drug is appropriate for you, not that you are fit to drive on it.",
        excerptKey: "prescription-drugs",
        sourceLabel: "Manitoba Driver's Handbook - Prescription drugs",
        sourceUrl: hb(112),
      },
      {
        id: "mb_s4_34",
        topic: "impairment",
        question: "How must cannabis be carried in a vehicle in Manitoba?",
        choices: [
          "In a secure compartment such as the trunk",
          "Anywhere in the vehicle, as long as it is not open",
          "In the glovebox only",
          "It may not be carried in a vehicle at all",
        ],
        correctIndex: 0,
        explanation:
          "Transporting cannabis in or on a vehicle is illegal unless it is stored in a secure compartment such as the trunk. Consuming it in or on a vehicle on a public roadway is illegal whether the vehicle is moving or not.",
        context:
          "A conviction for either offence moves the driver down the Driver Safety Rating scale, which raises what they pay for a licence and for vehicle premiums. That is on top of anything a court does.",
        trap:
          "Legal to buy is heard as unrestricted to carry. The transport rule is closer to the one for open alcohol than to no rule at all.",
        excerptKey: "cannabis-in-vehicle",
        sourceLabel: "Manitoba Driver's Handbook - Cannabis",
        sourceUrl: hb(112),
      },
      {
        id: "mb_s4_35",
        topic: "rightOfWay",
        question:
          "You have stopped at a stop sign and a vehicle is approaching on the cross street, close enough to be an immediate hazard. What is your duty?",
        choices: [
          "Go, since you stopped first",
          "Yield to it, along with anything that has already entered the intersection",
          "Go if it is more than three seconds away",
          "Wait until the road is completely empty in both directions",
        ],
        correctIndex: 1,
        explanation:
          "After a required stop you yield to traffic that has already entered the intersection on the other highway, and to traffic approaching on it that is so close it constitutes an immediate hazard.",
        context:
          "Stopping is only the first half of the duty at a stop sign. Section 136(1) of the Act says where you stop: at a clearly marked stop line, or if there is no crosswalk, before entering the crosswalk marked out on the near side of the intersection.",
        trap:
          "Having stopped first settles a four-way stop and settles nothing at an ordinary stop sign, where the cross traffic never had to stop at all.",
        excerptKey: "hta-yield-after-stop",
        sourceLabel: "The Highway Traffic Act - s. 130",
        sourceUrl: HTA,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Thirty-five hard questions built from what Manitobans say tripped them up: the exact distances, the exact durations, and the graduated licensing rules that work differently here than they do everywhere else.",
    questions: [
      {
        id: "mb_s5_01",
        topic: "licensing",
        question:
          "You hold a Class 5L licence. Besides your supervising driver, who else may be in the vehicle?",
        choices: [
          "Nobody at all",
          "One additional passenger only",
          "Passengers in the back seats, up to the number of working seatbelts",
          "Passengers in any seat, up to the number of working seatbelts",
        ],
        correctIndex: 2,
        explanation:
          "The supervising driver must be the only front seat passenger, and other passengers are restricted to the back seats up to the number of functioning seatbelts back there. So a full back seat is lawful and a second person in front is not.",
        context:
          "Manitoba is more permissive here than most provinces, where a learner may carry nobody but the supervisor. The passenger cap arrives one stage later: in the Intermediate Stage, between midnight and 5 a.m., you may carry only one passenger unless a qualified supervising driver is in the front seat.",
        trap:
          "Families arriving from other provinces enforce a no-passengers rule on a Manitoba learner, then relax once the road test is passed, which is exactly backwards.",
        excerptKey: "gdl-learner-back-seat",
        sourceLabel: "Manitoba Driver's Handbook - Class 5L Licence (Learner Stage)",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_02",
        topic: "licensing",
        question:
          "You hold a Class 5I Intermediate licence and it is 1 a.m. How many passengers may you carry?",
        choices: [
          "As many as there are seatbelts",
          "One, unless a qualified supervising driver is in the front seat",
          "None at all",
          "Two, if they are family members",
        ],
        correctIndex: 1,
        explanation:
          "Between midnight and 5 a.m. an Intermediate Stage driver may carry one passenger. The alternative is a qualified supervising driver in the front seat, and then the back seats may be filled up to the number of working seatbelts.",
        context:
          "Outside those hours the Intermediate Stage allows one passenger in the front seat and as many in the back as there are seatbelts. Passing the road test moves you into this stage, not out of restrictions.",
        trap:
          "Passing the road test feels like the end of the rules, and the passenger limit is the rule that starts at that moment rather than ending.",
        excerptKey: "gdl-intermediate-night-passengers",
        sourceLabel: "Manitoba Driver's Handbook - Class 5I Licence (Intermediate Stage)",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_03",
        topic: "impairment",
        question:
          "You have just reached the Full Stage after your Intermediate time. How long does the drug and alcohol restriction continue?",
        choices: [
          "It ends when you reach the Full Stage",
          "Another 12 months",
          "Another 36 months",
          "Until you are 21",
        ],
        correctIndex: 2,
        explanation:
          "The restriction continues for the first 36 months of the Full Stage. Counting the nine-month Learner Stage and the 15-month Intermediate Stage, a new Manitoba driver is under a zero-tolerance rule for roughly five years.",
        context:
          "The same 36 months govern when you can supervise someone else. A Full Stage driver may supervise a novice only after three years in the Full Stage.",
        trap:
          "The Full Stage licence looks like the finish line. Three of its first years still carry the novice alcohol rule.",
        excerptKey: "gdl-full-stage",
        sourceLabel: "Manitoba Driver's Handbook - Class 5F Licence (Full Stage)",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_04",
        topic: "parking",
        question:
          "Rank these correctly: the Manitoba no-parking distance from a fire hydrant, from a stop sign at an intersection, and from a pedestrian corridor.",
        choices: [
          "3 m, 9 m, 15 m",
          "5 m, 9 m, 30 m",
          "3 m, 6 m, 9 m",
          "5 m, 15 m, 30 m",
        ],
        correctIndex: 0,
        explanation:
          "Three metres from a hydrant, nine metres from a stop sign or signal posted at an intersection, and 15 metres from a pedestrian corridor. Those three, plus six metres from a fire station driveway and 30 metres from the nearest rail, are the whole ladder.",
        context:
          "The Act sets the same figures and adds a few the handbook does not spell out, including the ban on stopping on a bridge, in a highway tunnel, or within three metres of the approach side of a crosswalk.",
        trap:
          "Five metres is the figure most drivers carry for hydrants because it is common elsewhere. In Manitoba five metres belongs to school buses and to railway crossings in a restricted speed area.",
        excerptKey: "parking-hydrant-three-metres",
        sourceLabel: "Manitoba Driver's Handbook - Illegal parking",
        sourceUrl: hb(89),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_05",
        topic: "rules",
        question:
          "You are outside any city, town or village on a provincial highway. How far before a turn must your signal be on?",
        choices: ["30 metres", "60 metres", "100 metres", "150 metres"],
        correctIndex: 3,
        explanation:
          "Outside cities, towns and villages the signal goes on at least 150 metres before the turn. Inside them, it is at least 30 metres.",
        context:
          "The reason for the longer distance is closing speed. A driver coming up behind you at 90 km/h covers 150 metres in about six seconds, which is barely enough warning to slow safely.",
        trap:
          "One hundred and fifty metres feels absurdly early, so drivers use the urban figure everywhere and signal five car lengths before turning off a highway.",
        excerptKey: "signal-distance",
        sourceLabel: "Manitoba Driver's Handbook - General rules of turning",
        sourceUrl: hb(43),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_06",
        topic: "safety",
        question: "How far must a Manitoba vehicle's horn be audible, and what else must be in working order alongside it?",
        choices: [
          "30 metres, with working hazard lights",
          "60 metres, with a muffler capable of preventing excessive noise",
          "100 metres, with a working speedometer",
          "60 metres, with a bumper at the front only",
        ],
        correctIndex: 1,
        explanation:
          "The horn must be audible from at least 60 metres, and every motor vehicle must also have a muffler capable of preventing excessive noise. Both sit in the required equipment list.",
        context:
          "The rest of that list carries its own numbers: brakes that stop a passenger vehicle from 30 km/h within 7.6 metres, tires replaced before the tread drops below 1.6 millimetres, a speedometer and odometer in working order, and a bumper at both the front and the rear.",
        trap:
          "Manitobans who have sat the knowledge test name the horn distance specifically as the kind of question that appeared and caught them out.",
        excerptKey: "horn-60-metres",
        sourceLabel: "Manitoba Driver's Handbook - Horn",
        sourceUrl: hb(92),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_07",
        topic: "rules",
        question:
          "You are stopping at a railway crossing on a rural highway outside any restricted speed area. How far back from the nearest rail?",
        choices: ["Five metres", "Ten metres", "Fifteen metres", "Thirty metres"],
        correctIndex: 2,
        explanation:
          "Outside a restricted speed area you stop at least 15 metres from the nearest rail. Inside one, in Winnipeg or another urban municipality, the distance is at least five metres.",
        context:
          "The 30-metre figure belongs to a different rule again: it is how far from the nearest rail you may not park. Three numbers, three situations, and mixing them up is the usual failure.",
        trap:
          "Rural feels like it should get the shorter distance because there is more room. It gets the longer one, because trains there run faster.",
        excerptKey: "railway-stop-distances",
        sourceLabel: "Manitoba Driver's Handbook - Railway crossings",
        sourceUrl: hb(69),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_08",
        topic: "sharing",
        question:
          "A school bus is stopped with its reds flashing on a four-lane road divided only by a double solid yellow line. You are travelling the other way. What must you do?",
        choices: [
          "Carry on, since four lanes count as a divided highway",
          "Slow to 40 km/h and pass carefully",
          "Stop at least five metres from the bus",
          "Stop only if the stop arm is on your side",
        ],
        correctIndex: 2,
        explanation:
          "A double solid line is not a physical separation, so this is an undivided road and you must stop at least five metres from the bus. The exemption only applies where a physical median or a ditch divides the roadway.",
        context:
          "Section 137(3) of the Act frames the exception the same way, as a school bus on a different roadway of the same divided highway. The handbook uses exactly the same physical-separation test for the crosswalk duty.",
        trap:
          "The number of lanes has nothing to do with it. Wide and busy is not the same as divided, and paint never divides a road for this purpose.",
        excerptKey: "school-bus-divided-road",
        sourceLabel: "Manitoba Driver's Handbook - School buses",
        sourceUrl: hb(63),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_09",
        topic: "signals",
        question:
          "You are facing a red light on a one-way street and want to turn left onto another one-way street. What does Manitoba allow?",
        choices: [
          "Nothing - a left on red is never permitted",
          "The turn, after stopping and yielding, unless a sign says otherwise",
          "The turn only where a sign expressly permits it",
          "The turn only if the cross street has no pedestrians at all",
        ],
        correctIndex: 1,
        explanation:
          "Unless a sign indicates otherwise, you may turn left from a one-way street onto another one-way street on a red, after stopping and yielding the right-of-way to pedestrians and other traffic.",
        context:
          "It works on exactly the same terms as the right on red. A complete stop, no sign taking the permission away, and the yield done before you move. What it does not permit is a left on red onto a two-way street.",
        trap:
          "Drivers who know right on red assume left on red must be forbidden, and sit through a full cycle for a movement that was lawful.",
        excerptKey: "left-on-red-one-way",
        sourceLabel: "Manitoba Driver's Handbook - Making left turns from one-way onto another one-way street",
        sourceUrl: hb(52),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_10",
        topic: "rules",
        question:
          "Two lanes are turning left at once onto a multi-lane street. Where must the vehicle closest to the median end up?",
        choices: [
          "In whichever lane is clear after the turn",
          "In the lane closest to the median on the street being turned onto",
          "In the second lane from the median",
          "In the curb lane, to leave the inside free",
        ],
        correctIndex: 1,
        explanation:
          "The vehicle closest to the median completes the turn and stays in the lane closest to the median on the new street. The vehicle second from the median turns into the second lane from the median.",
        context:
          "The lanes stay parallel through the whole turn, which is what stops two vehicles converging on the same lane halfway round. Turning left from a one-way onto a two-way street works to the same logic: you enter the lane immediately to the right of the centre line.",
        trap:
          "Drifting across into the far lane once the turn is under way is the standard error, and it is a collision with the car that was beside you.",
        excerptKey: "left-turn-two-lanes",
        sourceLabel: "Manitoba Driver's Handbook - Making left turns when two lanes can turn",
        sourceUrl: hb(50),
      },
      {
        id: "mb_s5_11",
        topic: "rules",
        question:
          "Under The Highway Traffic Act, when may you overtake and pass another vehicle on its right?",
        choices: [
          "Whenever the right lane is moving faster",
          "Never, in any circumstance",
          "When the vehicle ahead is turning left, or on a laned roadway with two or more unobstructed lanes in your direction",
          "Only on a one-way street",
        ],
        correctIndex: 2,
        explanation:
          "Section 115(1) allows a pass on the right in defined cases: where the vehicle ahead is making or has signalled a left turn, where a laned roadway has two or more unobstructed lanes going your way, and on a one-way roadway wide enough for two or more lines of moving vehicles.",
        context:
          "What none of those permit is leaving the road to do it. The handbook separately bans passing by driving off the road, including on the shoulder, and bans passing a vehicle that is slowing or stopped to yield to a pedestrian.",
        trap:
          "Reading the rule as never is as wrong as reading it as whenever. Ordinary multi-lane driving falls squarely inside the second exception.",
        excerptKey: "passing-on-right",
        sourceLabel: "The Highway Traffic Act - s. 115(1)",
        sourceUrl: HTA,
      },
      {
        id: "mb_s5_12",
        topic: "rules",
        question:
          "When may you legally pass by driving onto the shoulder in Manitoba?",
        choices: [
          "When the vehicle ahead is turning left",
          "Never - passing by driving off the road is prohibited",
          "On a rural highway with a paved shoulder",
          "When the vehicle ahead is travelling below 40 km/h",
        ],
        correctIndex: 1,
        explanation:
          "Passing by driving off the road, including on the shoulder, is prohibited outright. The shoulder is there as a safe place for stopped and disabled vehicles.",
        context:
          "The same passage bans passing where a vehicle is slowing or stopped to yield to a pedestrian or another vehicle, in a school area within 15 minutes of classes opening or closing, on the left where the road is not sufficiently clear ahead, and where highway construction is taking place.",
        trap:
          "A paved shoulder looks like a usable lane. Using it puts you where a broken-down vehicle or a cyclist could be sitting.",
        excerptKey: "passing-never",
        sourceLabel: "Manitoba Driver's Handbook - Passing",
        sourceUrl: hb(58),
      },
      {
        id: "mb_s5_13",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing the far side of a highway divided by a raised concrete median. Must you stop?",
        choices: [
          "Yes, on any road, whenever a pedestrian is crossing",
          "No, because the median is a physical separation",
          "Yes, unless they are more than two lanes away",
          "Only if they have stepped past the median",
        ],
        correctIndex: 1,
        explanation:
          "The duty to stop and yield does not extend across a divided highway separated by a physical median. A raised concrete median is a physical separation, so the pedestrian on the far side is not in your path.",
        context:
          "The handbook is explicit that a double solid line is not a physical separation, so on a painted-divide road the duty is unchanged. It is the same distinction that decides whether you stop for a school bus.",
        trap:
          "Applying the median exception to a painted centre line is the mistake, and it is far more dangerous than the reverse error of stopping unnecessarily.",
        excerptKey: "crosswalk-driver-duty",
        sourceLabel: "Manitoba Driver's Handbook - Crosswalks",
        sourceUrl: hb(71),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_14",
        topic: "speed",
        question:
          "Under the Act, you may be guilty of a speeding offence even when you are under the posted limit. When?",
        choices: [
          "Only in a construction zone",
          "Only where a police officer has directed otherwise",
          "When the speed or manner of driving is not reasonable and prudent in the circumstances",
          "Only when a vehicle behind you has to brake",
        ],
        correctIndex: 2,
        explanation:
          "The Act makes it an offence to drive at a speed or in a manner that is not reasonable and prudent having regard to all the circumstances, even at or below the speed limit.",
        context:
          "The handbook puts the same point plainly: poor conditions require you to drive more slowly, and at no time may you exceed the posted maximum. The posted number is a ceiling for good conditions, not a safe speed for all of them.",
        trap:
          "I was under the limit is the most common defence offered after a winter collision and it is not a defence at all in Manitoba.",
        excerptKey: "hta-reasonable-and-prudent",
        sourceLabel: "The Highway Traffic Act - s. 95(2)",
        sourceUrl: HTA,
      },
      {
        id: "mb_s5_15",
        topic: "speed",
        question:
          "A tow truck is working at the roadside on a street posted at 60 km/h. What speed must you slow to?",
        choices: ["30 km/h", "40 km/h", "50 km/h", "60 km/h is fine"],
        correctIndex: 1,
        explanation:
          "Where the limit at the location is more than 40 and not more than 79 km/h, you slow to no more than 40 km/h. The 60 km/h figure only applies where the limit is 80 km/h or higher.",
        context:
          "Tow trucks count as designated vehicles alongside emergency vehicles, so the rule is not limited to police and ambulances. Where two or more lanes run your way, you also move to the lane furthest from the stopped vehicle when it is safe to do so.",
        trap:
          "The 60 km/h number sticks because it is the more memorable one, and applying it on a 60 zone means passing at exactly the speed the rule was written to reduce.",
        excerptKey: "hta-move-over-speeds",
        sourceLabel: "The Highway Traffic Act - s. 109.1(2.1)",
        sourceUrl: HTA,
        commonlyMissed: true,
      },
      {
        id: "mb_s5_16",
        topic: "signals",
        question:
          "A green left-arrow is lit and the red light beside it is off. May you turn right?",
        choices: [
          "Yes, if it is safe and no sign forbids it",
          "No, a right turn is never allowed on an arrow signal",
          "Only after coming to a complete stop",
          "Only if there is a separate green light for your lane",
        ],
        correctIndex: 0,
        explanation:
          "When the green left-arrow is illuminated on its own, with the red light not on, you may turn right if it is safe to do so and no sign prohibits it.",
        context:
          "The opposite case is the one that catches people. Where the green left-arrow is shown together with a red light, a right turn is illegal, and no sign is needed to make it so. Whether the red is lit beside the arrow is the whole test.",
        trap:
          "Learning only the illegal half of the rule leaves you sitting through a green you were entitled to use.",
        excerptKey: "signal-green-arrow-alone",
        sourceLabel: "Manitoba Driver's Handbook - Traffic control signals",
        sourceUrl: hb(32),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_17",
        topic: "safety",
        question:
          "At what point does reduced visibility oblige you to switch your headlights on, whatever the time of day?",
        choices: [
          "When visibility drops below 100 metres",
          "When visibility is reduced to 60 metres",
          "When visibility drops below 30 metres",
          "Only when the wipers are on",
        ],
        correctIndex: 1,
        explanation:
          "Headlights must be on whenever visibility is reduced to 60 metres, on top of the fixed window from half an hour before sunset to half an hour after sunrise.",
        context:
          "Sixty metres also happens to be the distance for dimming your high beams behind another vehicle, and the distance to place flares in front of and behind a disabled one. It is a recurring Manitoba number.",
        trap:
          "Daytime running lights come on automatically and leave the tail lights dark, so a driver in blowing snow at midday is invisible from behind while believing their lights are on.",
        excerptKey: "headlight-hours",
        sourceLabel: "Manitoba Driver's Handbook - Lights",
        sourceUrl: hb(91),
      },
      {
        id: "mb_s5_18",
        topic: "rules",
        question:
          "Under the Act, when is passing prohibited on the basis of how far you can see?",
        choices: [
          "Where you cannot see 100 metres of clear highway",
          "Where you cannot see 150 metres of clear highway, or your view within a greater distance is obstructed so as to create a hazard",
          "Where you cannot see 200 metres of clear highway",
          "There is no distance test; the painted lines decide",
        ],
        correctIndex: 1,
        explanation:
          "Section 116(3) bars passing where the driver does not have a clear view of the highway for at least 150 metres, or where the view within a greater distance is obstructed so as to create a hazard.",
        context:
          "The same 150 metres turns up in the U-turn rule, where a turn near a hill crest is prohibited without at least that much clear view of oncoming traffic. It is the Act's working figure for adequate sight distance.",
        trap:
          "Relying on the paint alone misses the point: the statutory sight-distance test applies whether or not anyone has painted a solid line there.",
        excerptKey: "hta-passing-sight-distance",
        sourceLabel: "The Highway Traffic Act - s. 116(3)",
        sourceUrl: HTA,
      },
      {
        id: "mb_s5_19",
        topic: "impairment",
        question:
          "How long is the licence suspension for a first Tiered Administrative Licence Suspension where a person under 16 was in the vehicle?",
        choices: ["72 hours", "Seven days", "Fifteen days", "Thirty days"],
        correctIndex: 1,
        explanation:
          "A first occurrence is normally 72 hours, but a first occurrence with a person under the age of 16 in the vehicle is seven days. The ladder then runs 15 days for a second occurrence, 30 for a third and 60 for a fourth and later ones.",
        context:
          "The trigger for any of these is a blood alcohol concentration between .05 and .079, a warn on an approved screening device, or a failed drug screening, physical coordination or drug recognition test. A tiered suspension also drops the driver five levels on the Driver Safety Rating scale.",
        trap:
          "Everyone remembers 72 hours for a first offence. The child-in-the-vehicle case is a first offence too and it more than doubles the suspension.",
        excerptKey: "tiered-suspension-ladder",
        sourceLabel: "Manitoba Driver's Handbook - Tiered Administrative Licence Suspensions",
        sourceUrl: hb(115),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_20",
        topic: "impairment",
        question:
          "A driver registers .09 at the roadside. What administrative consequence follows immediately?",
        choices: [
          "A 72-hour suspension",
          "A seven-day suspension",
          "A three-month Administrative Licence Suspension",
          "Nothing until a court convicts",
        ],
        correctIndex: 2,
        explanation:
          "A blood alcohol concentration equal to or over .08 brings an immediate three-month Administrative Licence Suspension. So does a fail on an approved screening device, a blood drug concentration over 5 nanograms of THC, or refusing to provide a sample.",
        context:
          "That suspension is administrative and roadside. It sits alongside potential Criminal Code charges, vehicle impoundment, a mandatory Impaired Driver Assessment and participation in the Ignition Interlock Program, not instead of them.",
        trap:
          "Waiting for a court is the wrong mental model. The licence is gone at the roadside, months before any hearing.",
        excerptKey: "three-month-suspension",
        sourceLabel: "Manitoba Driver's Handbook - Three-month Administrative Licence Suspension",
        sourceUrl: hb(116),
      },
      {
        id: "mb_s5_21",
        topic: "impairment",
        question: "Who counts as a novice driver for the Driver Improvement and Control Program?",
        choices: [
          "Anyone under 18",
          "Anyone in the Learner Stage",
          "A driver who has not held a Full Stage licence for more than one year",
          "Anyone who has held a licence for less than five years",
        ],
        correctIndex: 2,
        explanation:
          "A novice driver is one who has not held a Full Stage driver's licence for more than one year. It is defined by time at the Full Stage, not by age or by total years licensed.",
        context:
          "The category matters because novice drivers face interventions sooner. A novice who receives a 24-hour roadside suspension pays a reinstatement charge and has their record reviewed to decide whether a further suspension applies.",
        trap:
          "Age is the intuitive definition and is not the test. A 45-year-old who got their first licence 18 months ago is a novice driver.",
        excerptKey: "novice-driver-definition",
        sourceLabel: "Manitoba Driver's Handbook - Driver Improvement and Control Program",
        sourceUrl: hb(120),
      },
      {
        id: "mb_s5_22",
        topic: "licensing",
        question:
          "You are caught driving while your licence is suspended in Manitoba. What happens to the vehicle?",
        choices: [
          "Nothing, if it belongs to someone else",
          "It is impounded for a minimum of 30 days",
          "It is impounded for seven days",
          "It is impounded only on a second offence",
        ],
        correctIndex: 1,
        explanation:
          "Vehicles and off-road vehicles are immediately impounded for a minimum of 30 days when the driver is suspended, prohibited from driving, or disqualified from operating an off-road vehicle.",
        context:
          "The penalty for the driver runs to imprisonment for up to one year, a fine of up to $5,000, or both. Anyone convicted of a Criminal Code driving offence separately faces a licence suspension ranging from one year to life.",
        trap:
          "Whose vehicle it is does not save it. The impoundment attaches to the vehicle being driven, not to the driver's ownership of it.",
        excerptKey: "driving-suspended-impound",
        sourceLabel: "Manitoba Driver's Handbook - Driving while suspended",
        sourceUrl: hb(118),
      },
      {
        id: "mb_s5_23",
        topic: "safety",
        question:
          "You are following a large truck and cannot see either of its mirrors. What does that tell you?",
        choices: [
          "That you are at a safe following distance",
          "That the truck driver cannot see you",
          "That the truck is about to turn",
          "That you should move further right",
        ],
        correctIndex: 1,
        explanation:
          "If you cannot see the truck's mirrors, the driver cannot see you. You are in the deep rear blind spot, which is the worst place to be when the truck brakes.",
        context:
          "Overtaking has its own version of the test: before pulling back in front of a truck, you must be able to see the entire truck cab in your own rearview mirror. Truck drivers also swing wide left before a right turn, so the gap that opens on their right is not an invitation.",
        trap:
          "Following a truck feels safe because a large object is absorbing your attention. Manitoba's four-second interval is a minimum here, not a maximum.",
        excerptKey: "no-zone-rear",
        sourceLabel: "Manitoba Driver's Handbook - No-zone around large vehicles",
        sourceUrl: hb(59),
      },
      {
        id: "mb_s5_24",
        topic: "rightOfWay",
        question:
          "Two vehicles enter an intersection from different highways at about the same time and nothing directs either of them to yield. Which one gives way?",
        choices: [
          "The one on the left gives way to the one on the right",
          "The one on the right gives way to the one on the left",
          "The one travelling more slowly gives way",
          "The one on the narrower road gives way",
        ],
        correctIndex: 0,
        explanation:
          "Section 128 puts the duty on the driver of the vehicle on the left, who yields to the vehicle on the right. The handbook says the same thing for an intersection with no signals and no signs.",
        context:
          "The rule only decides a genuine tie. If one vehicle clearly arrived first, that vehicle has established itself, and the same tie-break settles a four-way stop where two vehicles stop at the same moment.",
        trap:
          "Road width, vehicle size and who is going straight all feel like they should count and none of them does.",
        excerptKey: "hta-right-of-way-general",
        sourceLabel: "The Highway Traffic Act - s. 128",
        sourceUrl: HTA,
      },
      {
        id: "mb_s5_25",
        topic: "safety",
        question:
          "You are on gravel at 80 km/h, four seconds behind the vehicle ahead. What is wrong with that?",
        choices: [
          "Nothing - four seconds is the Manitoba standard",
          "Gravel calls for a minimum of six seconds",
          "Gravel calls for a minimum of eight seconds",
          "Following distance does not apply below 90 km/h",
        ],
        correctIndex: 1,
        explanation:
          "Four seconds is the ideal-conditions figure. On gravel the minimum rises to six seconds, because stopping distances are longer and the dust hides what is in front.",
        context:
          "The four-second baseline is itself unusual. Most Canadian handbooks teach two or three seconds, so a driver arriving from another province is likely to be running at half the Manitoba interval before the surface even changes.",
        trap:
          "Feeling that four seconds is already generous is exactly the reasoning that leaves you two seconds short on a gravel road.",
        excerptKey: "gravel-six-seconds",
        sourceLabel: "Manitoba Driver's Handbook - Gravel road driving",
        sourceUrl: hb(97),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_26",
        topic: "rules",
        question:
          "You are on a four-lane road and want to move across two lanes at once. When is that acceptable?",
        choices: [
          "Never - lane changes are one at a time",
          "When you can shoulder check and the whole movement can be made safely",
          "Only on a divided highway",
          "Only when using mirrors alone",
        ],
        correctIndex: 1,
        explanation:
          "Where you can shoulder check, one shoulder check and one signal to cross several lanes is acceptable, provided the movement can be completed safely. If you can only use mirrors, you are limited to one lane at a time.",
        context:
          "Both versions share the same sequence: mirror, signal, shoulder check, then move. And neither applies at an intersection, where the handbook says never to change lanes at all.",
        trap:
          "The mirrors-only rule is the one that gets forgotten, and it is the one that binds a driver whose neck movement is restricted.",
        excerptKey: "lane-change-multiple",
        sourceLabel: "Manitoba Driver's Handbook - Lane changing",
        sourceUrl: hb(42),
      },
      {
        id: "mb_s5_27",
        topic: "signals",
        question:
          "You are approaching a green light that has been green since you first saw it, several blocks back. What should you be doing?",
        choices: [
          "Maintaining speed, since a stale green usually stays green",
          "Covering the brake and preparing to stop, since it is due to change",
          "Accelerating to clear before it changes",
          "Sounding the horn to warn cross traffic",
        ],
        correctIndex: 1,
        explanation:
          "A green that has been showing for a long time is about to change, so you prepare to stop rather than assume you will clear it. Amber means slow and stop, and the handbook singles out accelerating to make the light as the behaviour to avoid.",
        context:
          "The one case for going on is when you are already inside the intersection when the light changes. Then you continue through rather than stopping in the middle of it, because clearing the intersection is what keeps the crossing traffic safe.",
        trap:
          "The choice gets made in the last two seconds, which is when the brake is no longer a comfortable option. Deciding early is the whole technique.",
        excerptKey: "signal-amber",
        sourceLabel: "Manitoba Driver's Handbook - Traffic control signals",
        sourceUrl: hb(31),
      },
      {
        id: "mb_s5_28",
        topic: "sharing",
        question:
          "You are about to turn right at the next intersection and there is a cyclist just ahead of you on your right. What should you do?",
        choices: [
          "Pass the cyclist, then make the turn",
          "Stay behind the cyclist rather than passing, and yield to them",
          "Sound the horn and turn ahead of them",
          "Move into the bike lane before turning",
        ],
        correctIndex: 1,
        explanation:
          "When turning right you yield to any cyclist travelling on your right, and you do not try to pass a cyclist if you are planning to turn right at the next intersection or driveway. Passing and then turning across them is the classic right-hook collision.",
        context:
          "The mirror-image duty applies on a left turn, where you watch for and yield to oncoming cyclists exactly as you would to oncoming drivers. Cyclists carry the same rights and duties on the road as any other driver.",
        trap:
          "Passing feels efficient because the cyclist is slower, and the pass buys you a few seconds before you cut straight across their line.",
        excerptKey: "cyclist-right-turn-yield",
        sourceLabel: "Manitoba Driver's Handbook - Sharing the road",
        sourceUrl: hb(76),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_29",
        topic: "parking",
        question:
          "Which of these is prohibited by The Highway Traffic Act but is not in the handbook's illegal-parking list?",
        choices: [
          "Parking within three metres of a hydrant",
          "Parking on a sidewalk",
          "Stopping on a bridge or inside a highway tunnel",
          "Parking beside another parked vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Section 122(1) prohibits stopping, standing or parking on a bridge or other elevated structure on a highway, and inside a highway tunnel. The handbook's own list does not carry it, so the statute is where you find it.",
        context:
          "The handbook's list covers the sidewalk, driveway and intersection entrances, the three-metre hydrant and crosswalk setbacks, nine metres from a stop sign, 15 metres from a pedestrian corridor, 30 metres from a rail, and parking beside an already-parked vehicle.",
        trap:
          "Assuming the handbook is complete is the error. It is a summary, and it says so, pointing readers to the Act for the specifics.",
        excerptKey: "hta-parking-bridge",
        sourceLabel: "The Highway Traffic Act - s. 122(1)(l)",
        sourceUrl: HTA,
      },
      {
        id: "mb_s5_30",
        topic: "emergencies",
        question:
          "You are stopped at a red light and an emergency vehicle with lights and siren is behind you, blocked. What should you do?",
        choices: [
          "Stay stopped, since the light is red",
          "Reverse to open a gap",
          "Proceed through the red light with caution to clear the way",
          "Sound your horn to warn cross traffic and hold your position",
        ],
        correctIndex: 2,
        explanation:
          "If you are blocking the path of an emergency vehicle, you must proceed through the red light or stop sign with caution to clear the way. Yielding here means moving, not staying put.",
        context:
          "Once clear you pull as close as you can to the right curb and stay stopped until the emergency vehicles have passed. On a one-way street you pull to whichever curb, right or left, gets you out of the way fastest.",
        trap:
          "Sitting still on the red feels like the lawful choice and it is the one thing the rule tells you not to do in this situation.",
        excerptKey: "emergency-vehicle-yield",
        sourceLabel: "Manitoba Driver's Handbook - Emergency vehicles",
        sourceUrl: hb(62),
        commonlyMissed: true,
      },
      {
        id: "mb_s5_31",
        topic: "safety",
        question:
          "How far ahead does the handbook say you can see on high beam, and what rule follows from it?",
        choices: [
          "About 60 metres, so never drive faster than 60 km/h at night",
          "About 110 metres, and never drive so fast that you cannot stop within the distance your lights show",
          "About 150 metres, so highway speeds are always safe at night",
          "About 200 metres, so high beam removes the night speed problem",
        ],
        correctIndex: 1,
        explanation:
          "High beam shows about 110 metres and low beam about 30. The rule that follows is never to drive so fast that you cannot stop within the distance your lights let you see.",
        context:
          "That is why night speed is lower than daytime speed even on a road with a high posted limit. Overdriving your headlights means committing to a stretch of road you have not yet been able to look at.",
        trap:
          "The posted limit is read as a safe night speed. On low beam at 90 km/h your stopping distance is longer than the road you can see.",
        excerptKey: "night-overdriving-headlights",
        sourceLabel: "Manitoba Driver's Handbook - Night driving",
        sourceUrl: hb(95),
      },
      {
        id: "mb_s5_32",
        topic: "licensing",
        question:
          "A Class 5L learner's licence is suspended for two months for non-payment, then reinstated. What happens to the nine-month clock?",
        choices: [
          "It keeps running throughout",
          "It stops, because time in a stage is only earned while the licence is valid",
          "It restarts from zero",
          "It runs at half rate during the suspension",
        ],
        correctIndex: 1,
        explanation:
          "Time within the Learner and Intermediate Stages is only earned while the driver holds a valid licence. A period when the licence is invalid, cancelled, prohibited or suspended earns no credit, and the clock resumes when it is valid again.",
        context:
          "The annual charge is what usually causes this. Your payment date is your anniversary date, four months less a day after your birthday, and missing it can suspend the licence without anything dramatic happening.",
        trap:
          "Nothing restarts from zero, which is the fear, and nothing keeps running, which is the assumption. The months are simply not counted.",
        excerptKey: "gdl-learner-nine-months",
        sourceLabel: "Manitoba Driver's Handbook - Class 5L Licence (Learner Stage)",
        sourceUrl: hb(11),
      },
      {
        id: "mb_s5_33",
        topic: "signs",
        question:
          "A sign shows a triangle with each of its three tips cut off, orange with a red border. What is it on?",
        choices: [
          "A construction vehicle",
          "A slow-moving vehicle",
          "An oversize load",
          "A vehicle carrying hazardous materials",
        ],
        correctIndex: 1,
        explanation:
          "A triangle with each tip cut off is the slow-moving vehicle sign. It marks equipment that cannot keep up with traffic, such as farm tractors and combines, whose maximum is 40 km/h.",
        context:
          "It is one of the shapes Manitoba reserves for a single meaning, alongside the octagon for stop, the downward triangle for yield and the crossbuck for a railway crossing. The shape tells you what it is before you can read anything on it.",
        trap:
          "Read as a general caution sign, it loses the one piece of information that matters, which is that the object ahead is doing under 40 km/h.",
        excerptKey: "sign-slow-moving-vehicle",
        sourceLabel: "Manitoba Driver's Handbook - Sign shapes and colours",
        sourceUrl: hb(22),
      },
      {
        id: "mb_s5_34",
        topic: "rules",
        question:
          "You are pulling out from a parked position at the curb on a Manitoba street. What is the required sequence?",
        choices: [
          "Shoulder check, then signal, then move",
          "Signal with the indicator furthest from the curb or the correct hand signal, then shoulder check, then move",
          "Mirror check only, then move when clear",
          "Move out slowly, signalling once you are in the lane",
        ],
        correctIndex: 1,
        explanation:
          "You turn on the signal furthest from the curb, or give the equivalent hand signal, and then shoulder check before moving. The signal goes on first so that traffic behind has warning while you are still stationary.",
        context:
          "Manitoba still expects you to know the hand signals: left arm straight out for a left turn, left arm out and bent upwards for a right turn, and left arm out and bent downwards for a stop.",
        trap:
          "Shoulder checking first and signalling as you move gives following traffic no warning at the point they are deciding whether to pass you.",
        excerptKey: "starting-from-parked",
        sourceLabel: "Manitoba Driver's Handbook - Starting",
        sourceUrl: hb(42),
      },
      {
        id: "mb_s5_35",
        topic: "emergencies",
        question:
          "Your car has come to rest at the roadside after a collision and one person has a suspected back injury but the vehicle is not on fire. What is the correct action?",
        choices: [
          "Move them clear in case a fire starts",
          "Leave them where they are, call 911, and keep them still",
          "Have them walk to the shoulder with support",
          "Sit them up so they can breathe more easily",
        ],
        correctIndex: 1,
        explanation:
          "Where a person is hurt you do not attempt to move them unless the vehicle is on fire. You call 911 or the nearest police station and ambulance, and you leave them where they are.",
        context:
          "If a person has to be moved because of fire, the handbook asks that the head and spine be held firmly in line. Before any of that, park your own vehicle off the roadway so that a second collision does not join the first.",
        trap:
          "In case a fire starts is not the standard. The instruction turns on whether the vehicle is actually on fire, because moving a spinal injury causes harm that the risk of fire rarely justifies.",
        excerptKey: "collision-do-not-move-injured",
        sourceLabel: "Manitoba Driver's Handbook - Upon arriving at the scene of a collision",
        sourceUrl: hb(108),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions, no hints, weighted the way MPI's Class 5 knowledge test is. Manitobans who have sat it report 30 questions with 24 needed to pass, so treat 24 as the line.",
    questions: [
      {
        id: "mb_s6_01",
        topic: "signs",
        question: "What does a square or rectangular sign do in Manitoba?",
        choices: [
          "Warns of a hazard ahead",
          "Regulates traffic and directs the driver",
          "Marks a school area",
          "Identifies a railway crossing",
        ],
        correctIndex: 1,
        explanation:
          "Square and rectangular signs are the regulatory shape. They set speed limits, permitted turns, and stopping and parking rules, and they carry the force of law.",
        context:
          "Warning signs are yellow diamonds and describe a condition rather than imposing a rule. Guide and information signs tell you where you are, what road you are on, or how to reach somewhere.",
        trap:
          "The distinction matters because a regulatory sign is an instruction and a warning sign is information. Ignoring the first is an offence.",
        excerptKey: "sign-rectangle-regulates",
        sourceLabel: "Manitoba Driver's Handbook - Sign shapes and colours",
        sourceUrl: hb(22),
      },
      {
        id: "mb_s6_02",
        topic: "rules",
        question: "Where must you stop at a stop sign where there is no stop line and no sidewalk?",
        choices: [
          "In the middle of the intersection",
          "Just before the intersecting highway",
          "Five metres before the corner",
          "Wherever you can see both ways",
        ],
        correctIndex: 1,
        explanation:
          "With no stop line and no sidewalk, you stop just before the intersecting highway. Where a stop line exists you stop before it, and where there is a sidewalk but no line, you stop just before the sidewalk.",
        context:
          "Section 136(1) of the Act frames the same order: at a clearly marked stop line, or where there is no crosswalk, before entering the crosswalk marked out on the near side of the intersection. After stopping you yield to pedestrians wanting to cross.",
        trap:
          "Creeping forward to see better puts the vehicle across the pedestrian's path. The correct move is to stop where required, then edge forward once you have looked.",
        excerptKey: "stop-sign-where-to-stop",
        sourceLabel: "Manitoba Driver's Handbook - Stop signs",
        sourceUrl: hb(30),
      },
      {
        id: "mb_s6_03",
        topic: "speed",
        question: "What is the maximum speed on an unposted Manitoba road inside an urban area?",
        choices: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
        correctIndex: 1,
        explanation:
          "Unless otherwise posted, the maximum in urban areas is 50 km/h. Outside them the figure is 90 km/h.",
        context:
          "The Act uses the phrase restricted speed area for the urban side of that line, and the same concept sets whether you stop five or 15 metres from a railway rail.",
        trap:
          "Municipalities may post lower limits on residential streets, and those bind only where they are actually posted.",
        excerptKey: "default-speed-limits",
        sourceLabel: "Manitoba Driver's Handbook - Speed",
        sourceUrl: hb(57),
      },
      {
        id: "mb_s6_04",
        topic: "rightOfWay",
        question:
          "Two vehicles stop at a four-way stop at exactly the same moment. Who goes first?",
        choices: [
          "The vehicle on the right",
          "The vehicle on the left",
          "The vehicle going straight",
          "The vehicle that signals first",
        ],
        correctIndex: 0,
        explanation:
          "When two or more vehicles stop at the same time, the vehicle on the left yields to the vehicle on the right, so the vehicle on the right goes.",
        context:
          "That tie-break only comes out when arrival is genuinely simultaneous. Otherwise the order is the order of stopping, and the first vehicle to stop is the first to go.",
        trap:
          "Waving people through creates uncertainty at an intersection where the rule already decides it, and two drivers waving each other on is how the collision happens.",
        excerptKey: "four-way-stop-tie",
        sourceLabel: "Manitoba Driver's Handbook - Four-way stop signs",
        sourceUrl: hb(30),
      },
      {
        id: "mb_s6_05",
        topic: "signals",
        question: "What does a flashing amber light mean?",
        choices: [
          "Stop completely, then proceed when safe",
          "Slow down, be prepared to stop, and yield to pedestrians",
          "The signal has failed",
          "Only buses may proceed",
        ],
        correctIndex: 1,
        explanation:
          "A flashing amber means slow down and be prepared to stop, and you must yield the right-of-way to pedestrians. It is not a stop, which is what a flashing red is.",
        context:
          "The two flashing indications usually appear at the same intersection, with the amber facing the busier road and the red facing the side street. Reading yours correctly also tells you what the other driver is facing.",
        trap:
          "Treating a flashing amber as a free run is common, and the pedestrian duty attached to it is the part that gets forgotten.",
        excerptKey: "signal-flashing-amber",
        sourceLabel: "Manitoba Driver's Handbook - Traffic control signals",
        sourceUrl: hb(32),
      },
      {
        id: "mb_s6_06",
        topic: "parking",
        question: "How far from a fire hydrant may you park in Manitoba?",
        choices: ["No closer than 1.5 metres", "No closer than three metres", "No closer than five metres", "No closer than nine metres"],
        correctIndex: 1,
        explanation:
          "Three metres, measured from the point on the curb or the edge of the roadway directly opposite the hydrant.",
        context:
          "Three metres is also the crosswalk setback. Six metres covers a fire station driveway, nine metres a stop sign or signal at an intersection, 15 metres a pedestrian corridor and 30 metres the nearest rail at a railway crossing.",
        trap:
          "Five metres is the number carried over from other jurisdictions, and in Manitoba five belongs to school buses and to urban railway crossings.",
        excerptKey: "parking-hydrant-three-metres",
        sourceLabel: "Manitoba Driver's Handbook - Illegal parking",
        sourceUrl: hb(89),
      },
      {
        id: "mb_s6_07",
        topic: "sharing",
        question:
          "A school bus on an undivided road has its red lights flashing and its stop arm out. How far back must you stop?",
        choices: ["Three metres", "Five metres", "Ten metres", "Fifteen metres"],
        correctIndex: 1,
        explanation:
          "At least five metres from the bus, from either direction, and you stay stopped until the reds go out and the stop arm folds in.",
        context:
          "The one exemption is for traffic travelling the opposite way on a roadway divided by a physical median or a ditch. A double solid line is not a physical separation.",
        trap:
          "Stopping close behind the bus leaves no room for a child crossing in front of it, which is the reason the distance exists.",
        excerptKey: "school-bus-five-metres",
        sourceLabel: "Manitoba Driver's Handbook - School buses",
        sourceUrl: hb(63),
      },
      {
        id: "mb_s6_08",
        topic: "safety",
        question: "What following distance does MPI teach for ideal conditions?",
        choices: ["Two seconds", "Three seconds", "Four seconds", "Six seconds"],
        correctIndex: 2,
        explanation:
          "Four seconds under ideal conditions, and more when conditions are worse. If your front bumper reaches the marker in less than four seconds, you are too close.",
        context:
          "Six seconds is the gravel figure. If the driver behind you is following too closely, the response is to slow down gradually rather than to brake, so they have time to react.",
        trap:
          "Two seconds is the number most drivers arrive with from elsewhere. Manitoba's baseline is double it.",
        excerptKey: "following-count-method",
        sourceLabel: "Manitoba Driver's Handbook - Following safely",
        sourceUrl: hb(57),
      },
      {
        id: "mb_s6_09",
        topic: "licensing",
        question: "How long is the minimum Learner Stage in Manitoba?",
        choices: ["Six months", "Nine months", "Twelve months", "Fifteen months"],
        correctIndex: 1,
        explanation:
          "The Learner Stage runs a minimum of nine months. The Intermediate Stage that follows runs a minimum of 15.",
        context:
          "Time counts only while you hold a valid licence, so a suspension or an unpaid annual charge stops the clock. Passing the road test is what moves you from the Learner Stage to the Intermediate Stage.",
        trap:
          "Fifteen months is the Intermediate figure and the two get swapped. Nine is the shorter and comes first.",
        excerptKey: "gdl-learner-nine-months",
        sourceLabel: "Manitoba Driver's Handbook - Class 5L Licence (Learner Stage)",
        sourceUrl: hb(11),
      },
      {
        id: "mb_s6_10",
        topic: "impairment",
        question: "What blood alcohol concentration is a Manitoba novice driver allowed?",
        choices: ["Up to .05", "Up to .08", "None", "Up to .02"],
        correctIndex: 2,
        explanation:
          "None. Novice drivers cannot have drugs or alcohol in their system, and a breach brings an immediate 24-hour roadside suspension, a record review and a reinstatement charge.",
        context:
          "The restriction covers the Learner Stage, the Intermediate Stage and the first 36 months of the Full Stage. For experienced drivers, .05 triggers a Tiered Administrative Licence Suspension and .08 a three-month one.",
        trap:
          "The .05 and .08 figures are widely known and neither of them applies to a novice driver.",
        excerptKey: "novice-zero-tolerance",
        sourceLabel: "Manitoba Driver's Handbook - Drug and alcohol restriction",
        sourceUrl: hb(115),
      },
      {
        id: "mb_s6_11",
        topic: "rules",
        question: "What does a broken line beside your lane permit?",
        choices: [
          "Passing or changing lanes when it is safe front and rear",
          "Passing only",
          "Changing lanes only",
          "Parking on that side of the road",
        ],
        correctIndex: 0,
        explanation:
          "A broken line permits both passing and a lane change, provided it is safe both in front and behind. A solid line on your side permits neither.",
        context:
          "Even over a single or double solid line you may still turn left into a private road or driveway. Where a solid and a broken line run together, the side with the solid line is the side that may not pass.",
        trap:
          "Safe front and rear is the condition, and the rear half is the one drivers skip when they only look at the oncoming lane.",
        excerptKey: "markings-broken-line",
        sourceLabel: "Manitoba Driver's Handbook - Pavement markings",
        sourceUrl: hb(34),
      },
      {
        id: "mb_s6_12",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light and oncoming traffic is close enough to be an immediate hazard. What do you do?",
        choices: [
          "Complete the turn, since you entered on a green",
          "Yield to it and wait in the intersection until it is clear",
          "Reverse out of the intersection",
          "Sound your horn and turn",
        ],
        correctIndex: 1,
        explanation:
          "A driver within an intersection intending to turn left must yield to traffic approaching from the opposite direction that is within the intersection or so close that it constitutes an immediate hazard.",
        context:
          "The green permits you to enter the intersection to turn, not to complete the turn regardless. You may end up finishing on an amber or a red once oncoming traffic slows to stop.",
        trap:
          "A green light is read as a right to turn. It is a right to enter and wait.",
        excerptKey: "hta-left-turn-yield",
        sourceLabel: "The Highway Traffic Act - s. 129",
        sourceUrl: HTA,
      },
      {
        id: "mb_s6_13",
        topic: "signs",
        question:
          "You see a rectangular sign reading Snow Route. What does it prohibit?",
        choices: [
          "Parking at any time between November and March",
          "Stopping during a declared snow emergency",
          "Driving without winter tires",
          "Turning left after a snowfall",
        ],
        correctIndex: 1,
        explanation:
          "A snow route sign prohibits stopping during a declared snow emergency. Outside a declared emergency the ordinary parking rules apply.",
        context:
          "It is a regulatory sign, so it is square or rectangular and it carries the force of law. Its effect switches on and off with the declaration rather than by date.",
        trap:
          "Reading it as a blanket winter parking ban is one error and ignoring it entirely is the other. The trigger is the declaration.",
        excerptKey: "sign-snow-route",
        sourceLabel: "Manitoba Driver's Handbook - Regulatory signs",
        sourceUrl: hb(28),
      },
      {
        id: "mb_s6_14",
        topic: "safety",
        question: "How should the steering wheel be held according to MPI?",
        choices: [
          "At 10 and 2 o'clock",
          "At 9 and 3 o'clock",
          "One hand at 12 o'clock",
          "At 8 and 4 o'clock",
        ],
        correctIndex: 1,
        explanation:
          "The recommended hand position is 9 o'clock and 3 o'clock. It gives the most steering range without crossing the arms over the airbag.",
        context:
          "It sits with the rest of the starting-out routine: seat and mirrors set before you move, signal before you pull out of a parked position, and shoulder check before every lane change.",
        trap:
          "Ten and two is the position an older generation was taught and it puts the forearms directly over a deploying airbag.",
        excerptKey: "steering-hand-position",
        sourceLabel: "Manitoba Driver's Handbook - Starting out",
        sourceUrl: hb(39),
      },
      {
        id: "mb_s6_15",
        topic: "rules",
        question: "How should you take a left-hand curve?",
        choices: [
          "Steer towards, but not over, the centre of the road",
          "Steer towards the right side of the road",
          "Brake through the curve to keep control",
          "Accelerate into the curve to settle the vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Entering a left-hand curve, you steer towards but not over the centre of the road. A right-hand curve is the mirror image, steering towards the right side.",
        context:
          "The speed work happens before the curve. You slow down before entering and avoid braking within it, and if you have entered too fast, you apply the brakes carefully rather than jamming them on.",
        trap:
          "Braking in the curve is the instinctive correction and it is what unsettles the vehicle at the moment it has least grip to spare.",
        excerptKey: "curves-steering",
        sourceLabel: "Manitoba Driver's Handbook - Curves",
        sourceUrl: hb(43),
      },
      {
        id: "mb_s6_16",
        topic: "sharing",
        question: "What must a driver do when overtaking a cyclist going the same way?",
        choices: [
          "Sound the horn before passing",
          "Keep at least one metre between the vehicle and the cyclist",
          "Keep at least half a metre",
          "Pass only in a marked passing zone",
        ],
        correctIndex: 1,
        explanation:
          "A driver overtaking a cyclist or a power-assisted bicycle travelling the same way must keep at least one metre of space. In a narrow lane that means changing lanes to pass.",
        context:
          "Some situations make passing unsafe regardless of the space available, including construction zones reduced to one narrow lane and lanes too narrow to allow a safe distance.",
        trap:
          "The one metre is a minimum, so passing at exactly that distance at 80 km/h meets the letter of a rule that was written for far lower speeds.",
        excerptKey: "passing-cyclist-one-metre",
        sourceLabel: "Manitoba Driver's Handbook - Passing a cyclist",
        sourceUrl: hb(78),
      },
      {
        id: "mb_s6_17",
        topic: "emergencies",
        question: "What is the first duty after a collision in Manitoba?",
        choices: [
          "Exchange insurance details",
          "Stop your vehicle immediately",
          "Photograph the scene",
          "Move the vehicles to the shoulder",
        ],
        correctIndex: 1,
        explanation:
          "Stop your vehicle immediately. Everything else, including exchanging names and addresses and any reporting, comes after that.",
        context:
          "A collision involving serious injury or a death must be reported to police within seven days if you did not report to an officer at the scene. A property-damage-only collision does not have to be reported at all.",
        trap:
          "Driving on to a safer spot before stopping is how a minor collision becomes a failure to remain at the scene.",
        excerptKey: "collision-stop-immediately",
        sourceLabel: "Manitoba Driver's Handbook - If you're involved in a collision",
        sourceUrl: hb(109),
      },
      {
        id: "mb_s6_18",
        topic: "speed",
        question:
          "What happens to speeding fines inside a designated Manitoba construction zone?",
        choices: [
          "They are the same as anywhere else",
          "They are increased by 50 per cent when workers are present",
          "They are doubled, whether or not workers are present",
          "They are doubled only when the limit has been reduced",
        ],
        correctIndex: 2,
        explanation:
          "In a designated construction zone, marked by a special sign at each end, set fines for speeding over the posted limit are doubled. That applies whether or not workers or equipment are present and whether or not the limit has been reduced.",
        context:
          "A flagperson may also be directing traffic in the zone, and you must obey their directions, including slowing or stopping. Construction and maintenance signs are the orange ones.",
        trap:
          "An empty zone at night looks like the doubling has lapsed. Neither the presence of workers nor a reduced limit is a condition of it.",
        excerptKey: "construction-double-fines",
        sourceLabel: "Manitoba Driver's Handbook - Construction zones",
        sourceUrl: hb(67),
      },
      {
        id: "mb_s6_19",
        topic: "parking",
        question: "Which of these is illegal parking under the Manitoba handbook's own list?",
        choices: [
          "Parking on a roadway beside another vehicle that is already parked",
          "Parking facing the flow of traffic",
          "Parking within 20 metres of a bus stop",
          "Parking on a residential street overnight",
        ],
        correctIndex: 0,
        explanation:
          "Double parking, meaning parking on a roadway beside another vehicle that is already parked, is on the handbook's illegal-parking list.",
        context:
          "So are parking on a sidewalk, across a driveway, back lane or intersection entrance, within three metres of a hydrant or crosswalk, within nine metres of a stop sign at an intersection, and within 15 metres of a pedestrian corridor.",
        trap:
          "Double parking feels like a brief courtesy stop rather than parking. The list does not distinguish by how long you intend to be there.",
        excerptKey: "parking-double-park",
        sourceLabel: "Manitoba Driver's Handbook - Illegal parking",
        sourceUrl: hb(89),
      },
      {
        id: "mb_s6_20",
        topic: "safety",
        question: "How often should tire pressures be checked?",
        choices: [
          "Once a year",
          "Every time you refuel",
          "At least once a month and after long trips",
          "Only before winter",
        ],
        correctIndex: 2,
        explanation:
          "Check the air pressure with an accurate gauge at least once a month and after long trips. Pressure changes with temperature, so a monthly check catches the seasonal drift.",
        context:
          "Tires also have to be replaced before the tread falls below 1.6 millimetres, and studded tires are illegal between April 30 and October 1.",
        trap:
          "Judging pressure by looking at the tire misses the slow loss that matters, and a radial tire looks normal well below its correct pressure.",
        excerptKey: "tire-pressure-monthly",
        sourceLabel: "Manitoba Driver's Handbook - Tires",
        sourceUrl: hb(91),
      },
      {
        id: "mb_s6_21",
        topic: "rules",
        question: "You are already in a roundabout and a vehicle is waiting to enter. Who has priority?",
        choices: [
          "The entering vehicle, if it arrived first",
          "You, because vehicles in the roundabout have the right-of-way over those entering",
          "Whichever vehicle is larger",
          "The entering vehicle, if it is signalling",
        ],
        correctIndex: 1,
        explanation:
          "Once you are on the roundabout you have the right-of-way over vehicles entering it. Entering traffic yields to traffic already circulating.",
        context:
          "On approach you slow to the posted limit or below and prepare to yield to pedestrians, cyclists and vehicles in the roundabout, entering when nothing is coming from your left. Signal your exit in advance and watch for pedestrians in the crossing as you leave.",
        trap:
          "Braking inside the roundabout to let someone in reverses the priority and surprises the driver behind you.",
        excerptKey: "roundabout-priority",
        sourceLabel: "Manitoba Driver's Handbook - Roundabouts",
        sourceUrl: hb(56),
      },
      {
        id: "mb_s6_22",
        topic: "signals",
        question: "What does a green U-turn arrow permit?",
        choices: [
          "A U-turn without any yielding",
          "A U-turn after yielding to pedestrians and to vehicles already in the intersection",
          "A left turn only",
          "A U-turn only between midnight and 5 a.m.",
        ],
        correctIndex: 1,
        explanation:
          "A green U-turn arrow permits the turn after you have yielded to pedestrians and to other vehicles already in the intersection.",
        context:
          "MPI advises against U-turns in general and names a U-turn signal as the one place it is comfortable with them. Elsewhere they are prohibited on curves, near a hill crest without 150 metres of clear view, and wherever a sign forbids them.",
        trap:
          "A dedicated arrow reads as full protection. Pedestrians and vehicles already in the intersection still come first.",
        excerptKey: "signal-green-u-turn-arrow",
        sourceLabel: "Manitoba Driver's Handbook - Traffic control signals",
        sourceUrl: hb(32),
      },
      {
        id: "mb_s6_23",
        topic: "rightOfWay",
        question: "What does the Orange Hand indication tell a pedestrian?",
        choices: [
          "To finish crossing at normal speed",
          "Not to begin crossing",
          "That vehicles are turning",
          "To wait for a police officer",
        ],
        correctIndex: 1,
        explanation:
          "A pedestrian facing the Orange Hand must not begin to cross, because there may not be enough time to get across safely.",
        context:
          "The Walking Figure is the opposite indication and permits a pedestrian to leave the curb and enter the roadway. Even then, pedestrians are told to check for turning vehicles, because cross-street traffic being stopped does not mean nothing is moving.",
        trap:
          "Drivers read a steady Orange Hand as the crossing being clear. Anyone who started legally is still entitled to finish.",
        excerptKey: "pedestrian-orange-hand",
        sourceLabel: "Manitoba Driver's Handbook - The Orange Hand",
        sourceUrl: hb(72),
      },
      {
        id: "mb_s6_24",
        topic: "impairment",
        question:
          "What is the fine on conviction for using a hand-operated electronic device while driving in Manitoba?",
        choices: ["$203", "$672", "$1,000", "$2,500"],
        correctIndex: 1,
        explanation:
          "A conviction brings a $672 fine and a drop of five levels on the Driver Safety Rating scale, on top of the roadside suspension of three days for a first offence and seven for each later one.",
        context:
          "Your position on the Driver Safety Rating scale is what you pay for your licence and your vehicle premiums, so a five-level drop costs money every year until you climb back.",
        trap:
          "The fine is the visible number and the Driver Safety Rating movement is usually the more expensive half of the penalty.",
        excerptKey: "handheld-device-fine",
        sourceLabel: "Manitoba Driver's Handbook - Distractions",
        sourceUrl: hb(97),
      },
      {
        id: "mb_s6_25",
        topic: "sharing",
        question: "Where should a Manitoba cyclist ride on the road?",
        choices: [
          "In the centre of the lane at all times",
          "As closely as practicable to the right-hand boundary of the road",
          "On the sidewalk wherever one exists",
          "Facing oncoming traffic",
        ],
        correctIndex: 1,
        explanation:
          "Cyclists are expected to ride as closely as practicable to the right-hand boundary of the road, and to dismount on sidewalks.",
        context:
          "The Act does not specify how close as close as practicable actually is, nor the clearance a driver must give when travelling alongside. That is why the handbook falls back on common sense and on the one-metre passing rule.",
        trap:
          "Practicable is not the same as possible, so a cyclist moving out to avoid a door zone, a drain or debris is riding correctly.",
        excerptKey: "cyclists-expected-behaviour",
        sourceLabel: "Manitoba Driver's Handbook - Cyclists are expected to",
        sourceUrl: hb(77),
      },
      {
        id: "mb_s6_26",
        topic: "safety",
        question: "How is glare from oncoming headlights best handled?",
        choices: [
          "Look directly at the lights so your eyes adjust",
          "Look towards the right edge of the roadway",
          "Switch to high beam briefly",
          "Close one eye until they pass",
        ],
        correctIndex: 1,
        explanation:
          "Do not look directly at oncoming headlights. Look to the right edge of the roadway instead and use it to hold your position in the lane.",
        context:
          "Dim your own high beams at least 450 metres from an oncoming vehicle and at least 60 metres when you come up behind one. Low beam is also correct under street lighting, in fog and when following closely.",
        trap:
          "Flashing your high beams back at a driver who has not dimmed leaves two dazzled drivers closing on each other.",
        excerptKey: "glare-look-right",
        sourceLabel: "Manitoba Driver's Handbook - Night driving",
        sourceUrl: hb(95),
      },
      {
        id: "mb_s6_27",
        topic: "licensing",
        question: "How many knowledge or road tests of the same class may you take in one day?",
        choices: ["One", "Two", "Three", "As many as you can book"],
        correctIndex: 0,
        explanation:
          "Only one knowledge or road test of the same class may be completed per day. A failed test cannot be retried the same afternoon.",
        context:
          "Beyond that, a GDL driver waits seven days to retake a failed knowledge test and 14 days to retake a failed road test. You also check in 15 minutes before your appointment.",
        trap:
          "Booking two slots on the same day as a backup does not work, and it is the appointment that gets refused rather than the test.",
        excerptKey: "one-test-per-day",
        sourceLabel: "Manitoba Driver's Handbook - General testing information",
        sourceUrl: hb(10),
      },
      {
        id: "mb_s6_28",
        topic: "emergencies",
        question:
          "Your right wheels have dropped onto the shoulder at speed. What is the correct sequence?",
        choices: [
          "Brake hard and steer back onto the pavement at once",
          "Stay on the shoulder, steer straight, ease off the accelerator, brake gently, then rejoin",
          "Accelerate to lift the vehicle back onto the pavement",
          "Steer sharply left immediately",
        ],
        correctIndex: 1,
        explanation:
          "Stay on the shoulder and steer in a straight line, take your foot off the accelerator, apply the brakes very gently, and only then, once slowed and if traffic permits, ease back onto the pavement without overshooting the centre line.",
        context:
          "The same principle governs a blowout that puts you onto the shoulder: do not fight back onto the pavement, let the vehicle coast to a stop and deal with it from there.",
        trap:
          "Yanking the wheel back is the reflex, and it is what puts the vehicle across the centre line into oncoming traffic.",
        excerptKey: "running-off-pavement",
        sourceLabel: "Manitoba Driver's Handbook - Running off the pavement",
        sourceUrl: hb(102),
      },
      {
        id: "mb_s6_29",
        topic: "rules",
        question:
          "You are turning left from a one-way street onto a two-way street. Which lane do you enter?",
        choices: [
          "The lane immediately to the right of the centre line",
          "The curb lane",
          "Whichever lane is empty",
          "The lane immediately to the left of the centre line",
        ],
        correctIndex: 0,
        explanation:
          "You enter the lane immediately to the right of the centre line of the two-way street. That is the leftmost lane going your new direction.",
        context:
          "It is the same idea as two lanes turning left together, where each vehicle keeps its relative position through the turn. Cutting into the far lane is what produces a conflict with a vehicle turning alongside you.",
        trap:
          "The lane to the left of the centre line carries oncoming traffic, and entering it is the error the rule is written to prevent.",
        excerptKey: "left-turn-one-way-to-two-way",
        sourceLabel: "Manitoba Driver's Handbook - Making left turns from one-way onto two-way street",
        sourceUrl: hb(53),
      },
      {
        id: "mb_s6_30",
        topic: "signs",
        question:
          "A railway crossing sign has warning lights and bells fitted. What are they telling you when the lights flash and the bells ring?",
        choices: [
          "That the crossing is being maintained",
          "That a train is approaching, so be prepared to stop",
          "That the gates have failed",
          "That the crossing is closed to traffic",
        ],
        correctIndex: 1,
        explanation:
          "Flashing lights and ringing bells warn of an approaching train, so you prepare to stop. Trains have the right-of-way at every crossing.",
        context:
          "There is one narrow exception. A driver may cross while the lights flash only if the vehicle is stopped completely first, the crossing has no gates or barriers, it is in a restricted speed area, the train is stopped or a safe distance away, and the crossing can be done safely.",
        trap:
          "Signals that have been active for a while suggest a fault. Every condition of the exception has to hold before the driver may act on that judgement.",
        excerptKey: "sign-railway-lights-bells",
        sourceLabel: "Manitoba Driver's Handbook - Warning signs",
        sourceUrl: hb(25),
      },
    ],
  },
];
