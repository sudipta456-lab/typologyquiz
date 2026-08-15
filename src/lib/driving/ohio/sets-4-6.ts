import type { DrivingTestSet } from "../types";

// Sets 4 to 6 of the Ohio bank. Same sourcing rules as sets 1 to 3: every fact
// checked against the Ohio Driver Manual (Digest of Ohio Motor Vehicle Laws,
// HSY 7607, rev. 10/25) and the Ohio BMV's own Driver License & ID Cards page,
// with the Ohio Revised Code used only where the manual does not state the
// operative rule. Questions, explanations, context and trap notes are original.
//
// Ohio's offence is OVI - operating a vehicle impaired - not DUI or DWI.
const MAN = "https://dam.assets.ohio.gov/image/upload/publicsafety.ohio.gov/hsy7607.pdf";
const BMV = "https://www.bmv.ohio.gov/dl-gdl.aspx";
const ORC_POINTS = "https://codes.ohio.gov/ohio-revised-code/section-4510.037";
const ORC_CLASSES = "https://codes.ohio.gov/ohio-revised-code/section-4510.02";
const ORC_MOVE_OVER = "https://codes.ohio.gov/ohio-revised-code/section-4511.213";

export const ohioSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Wider Ground",
    difficulty: "medium",
    description:
      "Thirty-five questions across the parts of the manual people skim: vehicle equipment, work zones, crash duties, penalties, and the licensing details that only apply in Ohio.",
    questions: [
      {
        id: "oh_s4_01",
        topic: "signs",
        question:
          "A sign shows a circular arrow made of three curved segments inside a yellow diamond. What is ahead?",
        choices: [
          "A roundabout",
          "A U-turn is permitted",
          "A rest area loop",
          "A sharp series of bends",
        ],
        correctIndex: 0,
        explanation:
          "The circular arrangement of arrows is Ohio's roundabout warning. It gives you time to slow down and pick the correct approach lane before you reach the circle.",
        context:
          "Lane choice matters because you cannot change lanes once you are inside the roundabout. Ohio numbers the exits to make planning easier - first for a right turn, second to go straight, third to turn left, fourth for a U-turn - and expects you to check the direction signs on approach.",
        trap:
          "A curving arrow on a diamond means the road bends. The roundabout sign is a closed loop, and the difference is easy to miss at speed.",
        excerptKey: "roundabout-no-lane-change",
        sourceLabel: "Ohio Driver Manual - Roundabouts or Traffic Circles",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_02",
        topic: "rules",
        question:
          "You have finished passing a vehicle on a two-lane road. When may you move back into your lane?",
        choices: [
          "As soon as the front of your car is past the other vehicle",
          "After counting three seconds",
          "Once both of its headlights are visible in your rear-view mirror",
          "Once you can no longer see it in your door mirror",
        ],
        correctIndex: 2,
        explanation:
          "Continue until both headlights of the vehicle you passed appear in your rear-view mirror. That guarantees enough clearance to move back without cutting them off.",
        context:
          "The full sequence is check for oncoming traffic, check mirrors and over your shoulder for anyone already passing you, signal, steer smoothly into the passing lane, complete the pass, signal again, and move back. The same headlight test is used when pulling back in front of a large truck.",
        trap:
          "Judging it on the door mirror alone leaves you far closer than it looks, which is how passes end with a swerve.",
        excerptKey: "passing-return-to-lane",
        sourceLabel: "Ohio Driver Manual - Passing",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_03",
        topic: "licensing",
        question:
          "How many points does Ohio assess for willful or wanton disregard for the safety of persons or property?",
        choices: ["2 points", "4 points", "6 points", "8 points"],
        correctIndex: 1,
        explanation:
          "Willful or wanton disregard for safety carries four points. Ordinary moving violations, some speed offences and restriction violations are two.",
        context:
          "The most serious band is six points, which covers offences such as failing to stop and disclose your identity after a crash. Points are assessed by the court on conviction, they accumulate over a rolling two-year window, and twelve of them in that window brings a suspension.",
        trap:
          "Six points is the number people associate with serious driving, because six is also the threshold for the BMV's warning letter.",
        excerptKey: "points-values",
        sourceLabel: "Ohio Driver Manual - Point Violations",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_04",
        topic: "safety",
        question:
          "Ohio's vehicle equipment rules require the horn to be audible from what distance?",
        choices: ["50 feet", "100 feet", "150 feet", "200 feet"],
        correctIndex: 3,
        explanation:
          "The horn must be in good working order and audible from 200 feet, and it must be identifiable as a motor vehicle horn.",
        context:
          "The equipment list is a checklist of distances: two red rear reflectors visible from 300 feet, a taillight visible from 500 feet, brake lights visible from 500 feet, a white light on the rear plate visible from 50 feet, and turn signals visible from 300 feet front and rear. A vehicle in unsafe condition may not be driven at all.",
        trap:
          "50 feet is the licence plate light figure, which is the shortest distance on the list and the easiest one to attach to the wrong item.",
        excerptKey: "horn-audible-200",
        sourceLabel: "Ohio Driver Manual - Vehicle Equipment Regulations",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_05",
        topic: "sharing",
        question:
          "A snowplough is stopped on the shoulder of a two-lane road with its warning lights on, and you cannot safely change lanes. What does Ohio require?",
        choices: [
          "Slow down and pass with caution at a safe speed for conditions",
          "Stop until the plough moves off",
          "Maintain speed and pass in your own lane",
          "Sound your horn and pass without slowing",
        ],
        correctIndex: 0,
        explanation:
          "Where a lane change is unsafe or the road has no adjacent lane, the Move Over law requires you to slow down and proceed with caution at a speed that is safe for the conditions.",
        context:
          "The statute sets out two duties, not one. If you are on a road with at least two lanes running your way, you change into a lane that is not next to the stopped vehicle. If you are not, or if the change would be unsafe, you reduce speed and pass carefully. Snowploughs, tow trucks, waste collection vehicles and utility vehicles all count.",
        trap:
          "Stopping dead is not what the law asks for and creates a rear-end hazard on a road where traffic is still moving.",
        excerptKey: "move-over-cannot-change",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Move Over Laws",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_06",
        topic: "signals",
        question:
          "What does Ohio say about a signal that shows only a single green, yellow or red light?",
        choices: [
          "It is a pedestrian-only signal",
          "It applies only to turning traffic",
          "It is a malfunctioning signal head",
          "It is a normal arrangement and carries the usual meaning",
        ],
        correctIndex: 3,
        explanation:
          "Some locations use single-colour signal heads, and some run horizontally rather than vertically. The colour still carries its ordinary meaning.",
        context:
          "The standard layout is red, yellow and green from top to bottom, and knowing that order is what lets you read a signal when the lenses are washed out by low sun. On a horizontal head the same order runs left to right, so position tells you the colour when the light itself is hard to judge.",
        trap:
          "Treating an unfamiliar signal arrangement as a fault leads drivers to stop at a plain green or roll through a plain red.",
        excerptKey: "signal-single-lights",
        sourceLabel: "Ohio Driver Manual - Traffic Signals",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_07",
        topic: "emergencies",
        question:
          "After a crash in Ohio, when may you file a Crash Report, form BMV 3303, with the Bureau of Motor Vehicles?",
        choices: [
          "Within six months, where damage exceeded $400 and the other party was uninsured",
          "Within 30 days of any crash",
          "Only where someone was taken to hospital",
          "Only if the police did not attend",
        ],
        correctIndex: 0,
        explanation:
          "The report may be filed within six months of the crash where there was damage in excess of $400 or personal injury, and the other driver or owner had no insurance or other financial responsibility coverage.",
        context:
          "It is the mechanism Ohio provides for being hit by an uninsured driver, and it is separate from telling your own insurer, which you do as soon as possible. If you hit an unattended vehicle you must either report it to the police or leave the necessary information at the scene.",
        trap:
          "Assuming the police report covers everything leaves an uninsured-driver claim unfiled, and the window is six months rather than open-ended.",
        excerptKey: "crash-report-six-months",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Report the Crash",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_08",
        topic: "speed",
        question:
          "You are travelling on a state route inside a municipal corporation, outside a business district, with no sign posted. What limit applies?",
        choices: ["25 mph", "35 mph", "45 mph", "55 mph"],
        correctIndex: 1,
        explanation:
          "State routes and through highways inside a municipal corporation, outside a business district, carry 35 mph unless posted otherwise. Controlled-access highways are treated separately.",
        context:
          "Ohio's table steps up by road character: 15 in alleys, 20 in school zones during restricted hours, 25 on ordinary municipal streets, 35 on state routes through a municipality outside a business district, 50 on state routes inside a municipality but outside an urban district, 55 on freeways with paved shoulders inside a municipality, and 70 on rural freeways.",
        trap:
          "25 is the municipal street figure, and the fact that you are inside town limits makes it the intuitive answer for a road that is really a highway passing through.",
        excerptKey: "speed-by-road-type",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Speed Limits",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_09",
        topic: "signs",
        question:
          "A blue rectangular sign carries a white symbol of a fuel pump. What is it telling you?",
        choices: [
          "Fuel is required beyond this point",
          "A motorist service is available nearby",
          "A commercial vehicle route begins",
          "The fuel station is closed",
        ],
        correctIndex: 1,
        explanation:
          "Blue signs point to motorist services. The pump symbol means fuel is available at the next exit or turning.",
        context:
          "Blue, green and brown all belong to the guide family. Green handles destinations and distances, brown marks recreation, cultural and historic sites, and blue covers services such as fuel, food, lodging and hospitals. None of them impose a rule, which is the practical difference from white regulatory signs.",
        trap:
          "Blue also marks parking bays for people with disabilities, which is a rule rather than a service, and that overlap is what confuses the colour.",
        excerptKey: "guide-signs-services",
        sourceLabel: "Ohio Driver Manual - Guide Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_10",
        topic: "rules",
        question:
          "You are exiting a freeway and realise you have passed your exit. What does Ohio tell you to do?",
        choices: [
          "Reverse along the shoulder to the exit",
          "Use the median opening to turn back",
          "Take the next exit",
          "Stop and wait for a gap to cross to the exit ramp",
        ],
        correctIndex: 2,
        explanation:
          "Take the next exit. The gap through the median is reserved for emergency and public safety vehicles and is not there for drivers who missed a turning.",
        context:
          "Exiting properly starts well before the ramp: move into the lane nearest your exit early, hold your speed while you are still on the main carriageway, signal, then slow in the deceleration lane and check the posted speed for the ramp. Braking on the through lanes is what causes rear-end collisions at exits.",
        trap:
          "The median opening looks like an official turning place, which is exactly why Ohio names it and rules it out.",
        excerptKey: "exiting-missed-exit",
        sourceLabel: "Ohio Driver Manual - Exiting a Roadway",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_11",
        topic: "impairment",
        question:
          "How long does a first administrative licence suspension last when a driver tests over the limit in Ohio?",
        choices: [
          "Three months",
          "Six months",
          "One year",
          "Two years",
        ],
        correctIndex: 0,
        explanation:
          "A first test over the limit brings a three-month, or 90-day, administrative licence suspension, which begins immediately.",
        context:
          "The scale climbs with history: one prior OVI or drug conviction makes it a year, two priors make it two years, three or more make it three. Refusing the test is treated more harshly at every step, starting at one year for a first refusal.",
        trap:
          "Refusal and failure are often remembered as the same penalty, and the first refusal is four times as long as the first failed test.",
        excerptKey: "als-first-over-limit",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Alcohol and Drug Penalties",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_12",
        topic: "parking",
        question:
          "May you park a motor scooter of 150 cc or less on an Ohio sidewalk?",
        choices: [
          "Only outside business hours",
          "Yes, provided it does not impede pedestrian traffic",
          "No, sidewalk parking is prohibited for all vehicles",
          "Only where a sign permits it",
        ],
        correctIndex: 1,
        explanation:
          "Ohio allows a bicycle, electric bicycle, moped, motor scooter of 150 cc or less, or a micro-mobility device to be parked on a sidewalk provided it does not impede the normal flow of pedestrian traffic.",
        context:
          "It is a carve-out from the general ban on stopping, parking or standing on a sidewalk, which still applies in full to cars. The condition is about obstruction rather than about the machine, so a scooter left across a footway is still parked unlawfully.",
        trap:
          "The blanket 'no vehicles on sidewalks' rule is the one people remember, and Ohio writes a specific exception for small two-wheelers.",
        excerptKey: "parking-bicycle-sidewalk",
        sourceLabel: "Ohio Driver Manual - Stopping, Parking, or Standing Prohibited",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_13",
        topic: "rightOfWay",
        question:
          "Where does Ohio tell you to stop in relation to the stop line at an intersection with large vehicles turning?",
        choices: [
          "Stop wherever you can see the signal head",
          "Stop with your bumper over the line for visibility",
          "Stop behind the stop line so larger vehicles have turning space",
          "Stop level with the crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "Always stop behind the intersection stop line. The line is positioned to keep you far enough back that a truck or bus has the room it needs to complete a turn.",
        context:
          "A large vehicle turning into a street needs to swing across space that a car sitting over the line has already taken. Ohio pairs this with the advice not to squeeze between a turning large vehicle and the kerb, and to give trucks and buses room to manoeuvre generally.",
        trap:
          "Creeping over the line to see round a corner is a habit built at junctions with poor sightlines, and it is precisely the space a turning truck needs.",
        excerptKey: "truck-wide-right-turn",
        sourceLabel: "Ohio Driver Manual - Commercial Vehicles",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_14",
        topic: "safety",
        question:
          "How much space does Ohio want between your chest and the steering wheel?",
        choices: ["At least 4 inches", "At least 6 inches", "At least 10 inches", "At least 18 inches"],
        correctIndex: 2,
        explanation:
          "At least 10 inches, so the air bag has room to deploy without striking you at close range.",
        context:
          "The rest of the seating position follows the same reasoning: sit upright with your back against the seat, keep the top of the wheel no higher than your shoulders and below chin level, keep your heel on the floor so your foot pivots between the pedals, and set the head restraint so it touches the back of your head rather than sitting below your ears.",
        trap:
          "Drivers who like to sit close to the wheel for control are the ones this measurement is aimed at, and the figure is larger than it feels.",
        excerptKey: "seat-adjustment-10-inches",
        sourceLabel: "Ohio Driver Manual - Driver Position",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_15",
        topic: "signs",
        question:
          "What does a diamond sign showing a Y-shaped fork tell you?",
        choices: [
          "A merge lane joins from the right",
          "A one-lane bridge is ahead",
          "A rest area is ahead on both sides",
          "The road branches ahead",
        ],
        correctIndex: 3,
        explanation:
          "The Y warns that the road branches ahead, so you will need to choose a direction before you get there.",
        context:
          "Ohio's warning diamonds are pictures of what the road does: a T for an intersection where you must turn, a Y where it splits, a curved arrow for a bend, a sharp right-angle arrow for a sharp turn. The value of learning the family rather than the individual signs is that the test shows shapes you may not have seen before.",
        trap:
          "The T sign is the one where the road ends and you must turn. Both diagrams describe a junction, which is why they are the classic pair to confuse.",
        excerptKey: "sign-shape-color",
        sourceLabel: "Ohio Driver Manual - Warning Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_16",
        topic: "licensing",
        question:
          "What happens if you pass the Ohio knowledge test but do not buy a TIPIC within 60 days?",
        choices: [
          "The permit is issued automatically by post",
          "You pay a late fee at the deputy registrar",
          "You must start over with the vision screening and knowledge test",
          "You have a further 60 days on request",
        ],
        correctIndex: 2,
        explanation:
          "Miss the 60-day window and the pass lapses. You start again with the vision screening and the knowledge test.",
        context:
          "The permit itself is bought at a deputy registrar licence agency, where an applicant under 18 needs a parent or guardian present to co-sign. If you already hold an Ohio ID card it is cancelled when the TIPIC is issued, because a resident may hold only one driver licence or ID card at a time.",
        trap:
          "Assuming a pass is banked indefinitely is the trap here, and there is no extension mechanism - only a retest.",
        excerptKey: "tipic-60-days",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Temporary Instruction Permit",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_17",
        topic: "sharing",
        question:
          "You are following a motorcycle in wet conditions. What following distance does Ohio ask for?",
        choices: [
          "A minimum of four seconds, and more in the wet",
          "The same distance as for a car",
          "Two seconds",
          "Three seconds",
        ],
        correctIndex: 0,
        explanation:
          "A minimum of four seconds behind a motorcycle, and more when conditions are wet, because you need the room to react if the rider changes speed or position suddenly.",
        context:
          "Motorcycles need a greater stopping distance than a car and their riders move within the lane to avoid potholes, gravel, wet patches, pavement seams, railroad crossings and grooved surfaces - hazards that would barely register in a car and can be deadly on two wheels.",
        trap:
          "Motorcycles look like they can stop faster because they are small and light, and the manual says the opposite.",
        excerptKey: "motorcycle-following",
        sourceLabel: "Ohio Driver Manual - Motorcyclists",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_18",
        topic: "rules",
        question:
          "When may you drive to the left of the centre line on an ordinary two-way Ohio road?",
        choices: [
          "Whenever traffic on your side is slow",
          "When an obstruction makes it necessary, yielding to oncoming traffic",
          "Only when directed by another driver",
          "Whenever the road is empty",
        ],
        correctIndex: 1,
        explanation:
          "An obstruction that makes it necessary is one of the listed exceptions, and it comes with an obligation to yield to oncoming traffic while you are over there.",
        context:
          "Ohio's exceptions to keeping right are specific: overtaking and passing a vehicle going the same way, driving on a road with three or more marked lanes, driving on a posted one-way road, following the direction of an officer or a traffic control device, and getting round an obstruction. Nothing on that list turns on how empty the road looks.",
        trap:
          "Slow traffic on your side is a reason to consider passing, which has its own rules, not a licence to sit left of centre.",
        excerptKey: "lane-travel-right-half",
        sourceLabel: "Ohio Driver Manual - Lane Travel",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_19",
        topic: "emergencies",
        question:
          "A front tyre blows out at speed. What does Ohio tell you to do?",
        choices: [
          "Steer toward the shoulder at once",
          "Accelerate briefly to stabilise the car",
          "Brake firmly and pull over immediately",
          "Grip the wheel, hold a straight line, and slow gradually without braking",
        ],
        correctIndex: 3,
        explanation:
          "Hold the wheel firmly, keep the vehicle going straight, and slow down gradually without braking. Then pull off the road somewhere safe, put the hazard lights on and shift to park.",
        context:
          "Which tyre failed changes what you feel. A front blowout pulls the car sharply toward the failed side; a rear blowout makes the car wobble and shake and pull less severely. Either way, braking transfers weight onto a tyre that is no longer there and makes the pull far worse.",
        trap:
          "Braking is the reflex, and on a blowout it is the input most likely to put the car sideways.",
        excerptKey: "tire-blowout-response",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Tire Blowout",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_20",
        topic: "signals",
        question:
          "You are approaching an intersection where the signal has been dark for several minutes and no officer is present. Who goes first?",
        choices: [
          "Vehicles arrive and proceed in turn, as at a four-way stop",
          "The road with more lanes has priority",
          "Vehicles turning right go before those going straight",
          "The first vehicle to sound its horn",
        ],
        correctIndex: 0,
        explanation:
          "A non-working signal is treated as a four-way stop, so drivers stop and proceed in the order they arrived, yielding to the driver on the right where two arrive together.",
        context:
          "Ohio also describes an inoperable traffic light as being treated the same as a stop sign, which is the same instruction stated another way. The manual adds a warning worth remembering: proceed carefully, because other drivers may not stop at all.",
        trap:
          "Right-turning traffic has no special priority here. Inventing an order is what turns a dark junction into a standoff.",
        excerptKey: "signal-inoperable",
        sourceLabel: "Ohio Driver Manual - Traffic Signals",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_21",
        topic: "safety",
        question:
          "In which months are studded tyres legal in Ohio?",
        choices: [
          "October 1 through March 31",
          "November 1 through April 15",
          "December 1 through March 1",
          "Studded tyres are legal all year",
        ],
        correctIndex: 1,
        explanation:
          "Studded tyres are legal in Ohio from 1 November through 15 April. Outside those dates they are not.",
        context:
          "It sits alongside the other equipment rules you are expected to keep on top of yourself: at least 1/16 inch of tread, correct inflation as shown on the door jamb, no major bumps, bulges, breaks or tread damage, and a vehicle that is never in such unsafe condition as to endanger anyone.",
        trap:
          "Winter here does not mean December to February - the window opens earlier and closes later than the cold weather does.",
        excerptKey: "studded-tires",
        sourceLabel: "Ohio Driver Manual - Tire Safety",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_22",
        topic: "signs",
        question:
          "A yellow diamond shows a figure walking. What does it mean?",
        choices: [
          "Pedestrians are prohibited",
          "A sidewalk ends here",
          "A pedestrian crossing is ahead",
          "A school building is ahead",
        ],
        correctIndex: 2,
        explanation:
          "A walking figure on a yellow diamond warns of a pedestrian crossing ahead, so you slow down and watch for people entering the road.",
        context:
          "The same picture inside a red circle with a slash would be a prohibition, and on a five-sided pentagon it would be a school crossing. Ohio's system is built so the shape and colour narrow the meaning before you interpret the symbol, which is what makes unfamiliar signs readable.",
        trap:
          "The school pentagon and the pedestrian diamond both show a figure, and only the outline tells you whether children are the reason.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Ohio Driver Manual - Warning Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_23",
        topic: "impairment",
        question:
          "What is the penalty for a first distracted driving offence in Ohio within a two-year period?",
        choices: [
          "Four points and a 30-day suspension",
          "A fine of up to $500",
          "A written warning only",
          "Two points and a fine of up to $150",
        ],
        correctIndex: 3,
        explanation:
          "A first offence within two years brings two points on the licence and a fine of up to $150. Completing a distracted driving course can avoid both.",
        context:
          "It escalates from there: three points and up to $250 for a second offence in two years, four points, up to $500 and a possible 90-day suspension for a third or subsequent. Fines double if the violation happens in a work zone, and the offence is a primary one, so it alone justifies the stop.",
        trap:
          "The $500 figure belongs to a third offence, and it is the number that sticks because it is the one quoted in campaigns.",
        excerptKey: "distracted-work-zone-fine",
        sourceLabel: "Ohio Driver Manual - Distracted Driving",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_24",
        topic: "rightOfWay",
        question:
          "A blind pedestrian carrying a white cane is waiting at the kerb. What does Ohio require?",
        choices: [
          "Proceed if they have not started to cross",
          "Sound your horn to signal that it is safe",
          "Yield the right of way",
          "Yield only at marked crossings",
        ],
        correctIndex: 2,
        explanation:
          "Pedestrians who are blind or visually impaired, carrying a white cane or working with a guide dog, have the right of way.",
        context:
          "It sits within a broader instruction to yield to pedestrians when turning, to be cautious around people near parked or stopped vehicles, to look for pedestrians before backing, and to expect them near playgrounds and in residential streets. Ohio assumes pedestrians will not always use crossings or obey signals.",
        trap:
          "Sounding the horn feels helpful and is exactly the wrong signal to someone navigating by sound.",
        excerptKey: "pedestrian-white-cane",
        sourceLabel: "Ohio Driver Manual - Pedestrians",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_25",
        topic: "rules",
        question:
          "What does Ohio expect you to do with your turn signal after completing a lane change?",
        choices: [
          "Leave it on until you reach your exit",
          "Cancel it",
          "Switch to hazard lights briefly",
          "Leave it on if traffic behind is heavy",
        ],
        correctIndex: 1,
        explanation:
          "Cancel the signal. A signal left running tells everyone behind you that another move is coming, and they plan around a manoeuvre you are not going to make.",
        context:
          "Ohio makes the same point from the other side of the windscreen: do not assume a vehicle with its indicator on is turning, because the driver may have forgotten to cancel it - advice the manual repeats specifically for motorcycles, whose signals often do not self-cancel.",
        trap:
          "Leaving it on in heavy traffic feels like extra communication and is the reason drivers pull out in front of someone who was never turning.",
        excerptKey: "cancel-signal",
        sourceLabel: "Ohio Driver Manual - Changing Lanes",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_26",
        topic: "licensing",
        question:
          "At what age can a person apply for an Ohio moped licence?",
        choices: ["14", "15", "15 years and six months", "16"],
        correctIndex: 0,
        explanation:
          "Ohio allows a moped licence from age 14, and it is not needed at all by someone who already holds a driver licence.",
        context:
          "Probationary moped licence holders aged 14 and 15 may only ride in daylight. A moped is defined by its equipment: two tandem wheels or one front and two rear, pedals, and a helper motor of no more than 50 cc producing no more than one brake horsepower and no more than 20 mph on the level.",
        trap:
          "15 years and six months is the knowledge-test age for a car permit, so it is the number that surfaces whenever a minimum age is asked for.",
        excerptKey: "moped-license-age",
        sourceLabel: "Ohio Driver Manual - Mopeds",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_27",
        topic: "sharing",
        question:
          "Where should you position your vehicle when a tractor-trailer is passing you?",
        choices: [
          "In the centre of your lane",
          "Toward the centre line to give the truck room",
          "As close to the truck as safely possible",
          "Toward the outside of your lane, away from the truck",
        ],
        correctIndex: 3,
        explanation:
          "Move to the outside portion of your lane, away from the tractor-trailer, so you have more space if it drifts or the air disturbance pushes you around.",
        context:
          "That is part of Ohio's broader space-to-the-side advice: avoid driving alongside other vehicles for long, avoid crowding the centre line, make room for traffic joining a multi-lane road, and give extra space to pedestrians and cyclists. Space is what turns someone else's mistake into a near miss rather than a crash.",
        trap:
          "Moving toward the centre line to be helpful trades one hazard for a worse one, because it puts you near oncoming traffic.",
        excerptKey: "space-to-side",
        sourceLabel: "Ohio Driver Manual - Space to the Side",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_28",
        topic: "speed",
        question:
          "What does Ohio say about speed in a work zone when no workers are present?",
        choices: [
          "The normal limit applies again",
          "You may pass at the posted limit plus 5 mph",
          "Reduce your speed anyway",
          "Only vehicles over 26,000 pounds must slow",
        ],
        correctIndex: 2,
        explanation:
          "Always reduce your speed in a work zone, even when there are no workers. Narrow lanes and rough pavement create a hazard whether or not anybody is on site.",
        context:
          "Work zone enforcement is deliberately heavy: speeding there can bring doubled fines and jail time, and distracted driving fines double as well. Traffic may be controlled by a flagger, whose instructions you must follow, and drums and cones mark areas it is dangerous to enter.",
        trap:
          "An empty work zone at night looks like an ordinary road with cones, and the surface is exactly where the risk lies.",
        excerptKey: "work-zone-reduce-speed",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Work Zones",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_29",
        topic: "safety",
        question:
          "What does hydroplaning feel like, and what should you do about it?",
        choices: [
          "The car pulls to one side; brake firmly",
          "The steering goes light as the tyres ride on water; ease off the accelerator",
          "The engine loses power; change down a gear",
          "The car vibrates through the pedals; accelerate through it",
        ],
        correctIndex: 1,
        explanation:
          "Hydroplaning is the steering tyres riding on top of pooled water like water skis. You slowly ease your foot off the accelerator rather than braking or steering sharply.",
        context:
          "Prevention is mostly speed. Ohio's advice is to slow down when it is raining and when the road is wet with standing water or puddles, and it draws a firm line at flooded roadways: do not drive through large bodies of standing water, find another route.",
        trap:
          "Braking is the reflex when the car goes light, and with no tyre contact the brakes have nothing to work with.",
        excerptKey: "hydroplaning",
        sourceLabel: "Ohio Driver Manual - Hydroplaning",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_30",
        topic: "signals",
        question:
          "Which of these does Ohio list as a situation where you should signal before slowing down?",
        choices: [
          "When turning off a road with no separate turning lane",
          "Whenever you use the brakes",
          "When another vehicle is following closely",
          "When entering a work zone",
        ],
        correctIndex: 0,
        explanation:
          "Ohio names two situations for signalling before you reduce speed: turning off a roadway that has no separate turning or exiting lane, and parking or turning before an intersection.",
        context:
          "Brake lights alone say that you are slowing but not why. A turn signal given in advance tells the driver behind what is about to happen and gives them time to plan. The general rule is 100 feet before a turn, which is also the distance the manual gives for a lane change.",
        trap:
          "Signalling with every brake application drains the signal of meaning, which is why the manual names specific circumstances instead.",
        excerptKey: "turn-signal-100-feet-alt",
        sourceLabel: "Ohio Driver Manual - Communicating",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_31",
        topic: "signs",
        question:
          "What does a square orange sign showing a person holding a flag mean?",
        choices: [
          "Volunteers are collecting litter",
          "A parade route crosses ahead",
          "A survey crew is at work",
          "A flagger is directing traffic ahead",
        ],
        correctIndex: 3,
        explanation:
          "The orange background makes it a work zone sign, and the figure with a flag warns that a flagger is controlling traffic ahead. Their instructions must be followed.",
        context:
          "A flagger's directions override the signs and markings around them, in the same way a police officer's directions override a signal. Work zones also use barriers, drums and cones to keep traffic out of areas that are dangerous to drive in, and Ohio asks you to be ready to stop suddenly throughout.",
        trap:
          "The orange colour is the whole message here. The same silhouette on a yellow diamond would be an ordinary pedestrian warning.",
        excerptKey: "work-zone-flagger",
        sourceLabel: "Ohio Driver Manual - Work Zone Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_32",
        topic: "emergencies",
        question:
          "Your vehicle's engine cuts out while you are driving. What happens to the steering?",
        choices: [
          "It locks immediately",
          "It becomes difficult to turn, but you can still turn it",
          "It is unaffected",
          "It becomes over-sensitive",
        ],
        correctIndex: 1,
        explanation:
          "The wheel becomes much heavier without power assistance, but it still turns. Keep a strong grip, brake with steady pressure, slow down and pull off the road.",
        context:
          "Once you are stopped, shift to park and try to restart. If it will not start, raise the hood and put the emergency flashers on so other drivers can see the vehicle is disabled. The same reasoning applies to brake failure: the systems degrade rather than vanish, so keeping control comes before diagnosing anything.",
        trap:
          "Believing the steering locks the instant the engine stops causes drivers to give up on steering exactly when they need it most.",
        excerptKey: "power-failure-steering",
        sourceLabel: "Ohio Driver Manual - Power Failure",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_33",
        topic: "parking",
        question:
          "You want to park in a bay marked with a wheelchair symbol. What does Ohio require?",
        choices: [
          "A disability placard or disability licence plate",
          "Permission from the property owner",
          "Hazard lights while you are parked",
          "Nothing, if you will only be a few minutes",
        ],
        correctIndex: 0,
        explanation:
          "You may not park in a space marked by the wheelchair symbol unless you have been issued a disability placard or a disability licence plate.",
        context:
          "It belongs to the wider set of parking restrictions you have to read off the kerbside rather than remember: signs and painted kerbs that prohibit or limit parking, coloured kerb markings, and the statutory list of places where stopping, parking or standing is banned outright.",
        trap:
          "'Only for a minute' is not an exception anywhere in the rule, and the bay's purpose is defeated by exactly that kind of brief use.",
        excerptKey: "parking-disability",
        sourceLabel: "Ohio Driver Manual - No-Parking Zones",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_34",
        topic: "sharing",
        question:
          "You are behind a horse-drawn buggy on a rural Ohio road. What is its legal status?",
        choices: [
          "It must yield to motor traffic",
          "It may only use the shoulder",
          "It has the same rights as a motor vehicle and follows the same rules",
          "It is prohibited on state routes",
        ],
        correctIndex: 2,
        explanation:
          "Animal-drawn vehicles and horseback riders have the same rights as a motor vehicle and must follow the same rules of the road.",
        context:
          "Warning signs are posted in areas where you are likely to meet them. A buggy displaying the orange and red triangle is travelling at under 25 mph, which means you close on it far faster than instinct suggests, and passing needs the same care and clear space you would give a tractor.",
        trap:
          "Assuming a slow vehicle must get out of your way inverts the rule - it has the same right to the road that you do.",
        excerptKey: "animal-drawn-signs",
        sourceLabel: "Ohio Driver Manual - Animal-Drawn Vehicles and Horseback Riders",
        sourceUrl: MAN,
      },
      {
        id: "oh_s4_35",
        topic: "licensing",
        question:
          "You are pulled over by an Ohio officer. What does the manual tell you to do with the engine?",
        choices: [
          "Switch to neutral and hold the brake",
          "Turn it off only if the officer asks",
          "Leave it running in case you are waved on",
          "Shift to park and turn the ignition off",
        ],
        correctIndex: 3,
        explanation:
          "Signal, pull over on the right or the nearest safe place, shift from drive to park, and turn the ignition off. Then lower the window and stay in the vehicle unless told otherwise.",
        context:
          "The rest of the sequence is about being predictable: keep your safety belt fastened, keep your hands on the wheel where the officer can see them, tell the officer straight away if there is a weapon in the vehicle, and present your licence, registration and insurance information when asked. Disagreements belong in court, not at the roadside.",
        trap:
          "Getting out to meet the officer feels polite and is the single action the instructions rule out.",
        excerptKey: "traffic-stop-procedure",
        sourceLabel: "Ohio Driver Manual - Police and Traffic Stops",
        sourceUrl: MAN,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail",
    difficulty: "hard",
    description:
      "Thirty-five questions built around the Ohio rules that catch people out: the probationary curfew that changes on an anniversary rather than a birthday, the lane-count school bus rule, the slow-vehicle passing exception, and the numbers that look like other states' numbers.",
    questions: [
      {
        id: "oh_s5_01",
        topic: "licensing",
        question:
          "An Ohio driver aged 16 has held a probationary licence for 14 months. What are their night driving hours?",
        choices: [
          "They may not drive between 1 a.m. and 5 a.m.",
          "There is no night restriction after the first year",
          "They may not drive between 11 p.m. and 5 a.m.",
          "They may not drive between midnight and 6 a.m.",
        ],
        correctIndex: 0,
        explanation:
          "The restriction narrows to 1 a.m. until 5 a.m. after the first 12 months of holding the licence. It is the length of time licensed that moves it, not the driver's age.",
        context:
          "During the first 12 months the window is midnight to 6 a.m. Both versions allow the same exceptions: accompanied by a parent, guardian or custodian, driving to or from work with employer documentation on form BMV 2825, or to or from an official school-sponsored or religious event with documentation on form BMV 2826. The restriction ends at 18.",
        trap:
          "The common belief is that the hours change when the driver turns 17. They change at the 12-month anniversary of the licence, so a 16-year-old can already be on the later hours and a 17-year-old can still be on the earlier ones.",
        excerptKey: "probationary-after-12-months",
        commonlyMissed: true,
        sourceLabel: "Ohio BMV - Probationary License Restrictions",
        sourceUrl: BMV,
      },
      {
        id: "oh_s5_02",
        topic: "rightOfWay",
        question:
          "A school bus with red lights flashing is stopped on a four-lane road. You are travelling toward it from the opposite direction. What must you do?",
        choices: [
          "Stop at least 10 feet from the front of the bus",
          "Stop level with the bus and wait",
          "Continue with caution; only same-direction traffic must stop",
          "Stop only if the stop arm is extended",
        ],
        correctIndex: 2,
        explanation:
          "On a road with four or more lanes, only traffic travelling in the same direction as the bus must stop, and it stops at the rear of the bus.",
        context:
          "The lane count is the whole test. Fewer than four lanes and everyone stops, from both directions, at least 10 feet from the front or rear. Four or more lanes and oncoming traffic may proceed. In both cases those who must stop stay stopped until the bus begins to move or the driver signals them on.",
        trap:
          "The stop arm is not the deciding factor. Ohio states plainly that where there is no stop arm you are still required to stop, so the red lights and the lane count do the work.",
        excerptKey: "school-bus-four-or-more",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Stopping for a School Bus",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_03",
        topic: "signs",
        question:
          "You are on a road where the posted limit is 55 mph and you come up behind a combine harvester displaying the slow-moving emblem and travelling at about 30 mph, with a solid yellow line on your side. May you cross to pass?",
        choices: [
          "No, because the combine is travelling at more than half the posted limit",
          "No, because farm machinery may never be passed on a solid line",
          "Yes, because the emblem means the vehicle is under 25 mph",
          "Yes, provided you do not exceed 55 mph",
        ],
        correctIndex: 0,
        explanation:
          "The exception applies only where the slow-moving vehicle is travelling at less than half the posted limit. Half of 55 is 27.5, and 30 mph is above it, so the pass is not permitted.",
        context:
          "All three conditions must hold: the vehicle under half the posted limit, you not exceeding the limit while passing, and enough clear space in the oncoming lane. The emblem itself indicates a vehicle designed to travel at less than 25 mph, but it is the actual speed against the actual limit that decides whether you may cross.",
        trap:
          "The emblem is treated as a permission slip. It tells you what kind of vehicle you are behind; the arithmetic against the posted limit is what makes the pass legal or not.",
        excerptKey: "slow-vehicle-pass-half-limit",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Slow Moving Vehicles",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_04",
        topic: "impairment",
        question:
          "How long does the 12-point suspension itself last under the Ohio Revised Code?",
        choices: ["Three months", "Six months", "One year", "Two years"],
        correctIndex: 1,
        explanation:
          "The registrar imposes a class D suspension for a twelve-point accumulation, and the Revised Code sets a class D suspension at six months.",
        context:
          "The manual describes the reinstatement conditions - a remedial driving course, an SR-22 filing and reinstatement fees - without giving the length, which is set in the statute instead. Driving during a twelve-point suspension is a first-degree misdemeanour carrying a minimum three days in jail that the court may not suspend.",
        trap:
          "Three months is the figure for a first administrative licence suspension after failing a chemical test, which is a different penalty for a different thing.",
        excerptKey: "class-d-six-months",
        commonlyMissed: true,
        sourceLabel: "Ohio Revised Code 4510.02 - Suspension classes",
        sourceUrl: ORC_CLASSES,
      },
      {
        id: "oh_s5_05",
        topic: "rules",
        question:
          "A two-way left turn lane runs down the middle of a busy commercial street. You want to join the traffic from a car park. What may you do?",
        choices: [
          "Use the centre lane to accelerate before merging",
          "Wait in the centre lane for a gap in the far-side traffic",
          "Use the centre lane only as a right-turn lane",
          "Turn into your direction of travel without using the centre lane to wait",
        ],
        correctIndex: 3,
        explanation:
          "The centre lane is for vehicles about to make a left turn, from either direction. Ohio states that it is not used for passing, merging into traffic, or travelling.",
        context:
          "The danger is that drivers coming the other way are entitled to enter the same lane at the same moment. Using it as a staging area for a merge turns a turn lane into a head-on risk, and it is one of the three uses the manual rules out by name.",
        trap:
          "Every driver leaving a busy shopping centre wants to use it as a refuge, and merging is on the prohibited list explicitly.",
        excerptKey: "two-way-left-turn-not-passing",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Center Two-Way Left Turn Lane",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_06",
        topic: "speed",
        question:
          "What is the standard limit on a freeway with paved shoulders inside an Ohio municipal corporation?",
        choices: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "55 mph. The 70 mph figure belongs to rural freeways, and the drop reflects the denser traffic and closer junctions inside a municipality.",
        context:
          "The step between the two is a good check on whether you know the table rather than the headline number: 50 mph on state routes within a municipal corporation outside an urban district, 55 on urban freeways with paved shoulders, and 70 on rural freeways. Each is the default where nothing is posted.",
        trap:
          "65 is the intuitive middle figure between 55 and 70, and it appears nowhere in Ohio's standard table.",
        excerptKey: "speed-by-road-type",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Speed Limits",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_07",
        topic: "sharing",
        question:
          "Which of these vehicles does Ohio's Move Over law NOT cover when stopped with warning lights activated?",
        choices: [
          "A waste collection vehicle",
          "A tow truck",
          "A vehicle used by the public utilities commission for inspections",
          "A private car with its hazard lights flashing",
        ],
        correctIndex: 3,
        explanation:
          "The law names public safety vehicles, emergency vehicles, road service vehicles, waste collection vehicles, highway maintenance vehicles and public utilities commission inspection vehicles. An ordinary broken-down car is not on the list.",
        context:
          "The distinction is the warning lights prescribed for those categories, not hazard flashers generally. That said, giving room to any stopped vehicle is exactly what the manual asks for elsewhere, and the offence carries strict liability, so a driver who simply did not notice the lights is still liable.",
        trap:
          "Several states have extended their move over laws to any stopped vehicle showing hazard lights, and drivers assume Ohio has done the same.",
        excerptKey: "move-over-statute",
        commonlyMissed: true,
        sourceLabel: "Ohio Revised Code 4511.213 - Move Over",
        sourceUrl: ORC_MOVE_OVER,
      },
      {
        id: "oh_s5_08",
        topic: "safety",
        question:
          "How far does Ohio say a loaded truck travelling at 55 mph needs to stop under ideal conditions?",
        choices: [
          "A minimum of 335 feet",
          "About 158 feet",
          "About 200 feet",
          "About 500 feet",
        ],
        correctIndex: 0,
        explanation:
          "A minimum of 335 feet with good tyres and properly adjusted brakes - well over the distance a passenger car needs from the same speed.",
        context:
          "That number is the reason cutting in front of a truck is so dangerous: you remove the space the driver needs. It sits alongside the other No Zone figures - a rear blind spot extending up to 200 feet, and side blind spots big enough that if you cannot see the driver's face in the mirror, they cannot see you.",
        trap:
          "158 feet is the manual's figure for a car braking from 50 mph, and the two numbers sit close enough together to be mixed up.",
        excerptKey: "truck-stopping-335",
        sourceLabel: "Ohio Driver Manual - Front No Zones",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_09",
        topic: "signals",
        question:
          "You are stopped at a red light intending to turn right. A NO TURN ON RED sign is posted. Traffic is clear in every direction. What may you do?",
        choices: [
          "Turn after a complete stop",
          "Turn if you yield to pedestrians",
          "Wait for a green signal",
          "Turn only if there is no pedestrian signal showing",
        ],
        correctIndex: 2,
        explanation:
          "The permission to turn right on red exists only where no sign prohibits it. Where the sign is posted, you wait for green regardless of how clear the road is.",
        context:
          "Signs like this are usually posted because of something you cannot see from the stop line - a skewed approach, a blind pedestrian crossing, or a lane that carries traffic you would not expect. The same logic applies to the left-on-red permission between one-way streets, which also disappears wherever a sign forbids the turn.",
        trap:
          "A clear road makes the sign feel like a formality, and it is the one condition that removes the permission entirely.",
        excerptKey: "right-turn-on-red",
        sourceLabel: "Ohio Driver Manual - Turning on a Red Traffic Signal",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_10",
        topic: "licensing",
        question:
          "A 16-year-old on a probationary licence has held it for three months. Who may ride with them?",
        choices: [
          "Any number of passengers, provided all wear belts",
          "No more than one non-family member, unless a parent or guardian is present",
          "Only family members",
          "No passengers at all for the first six months",
        ],
        correctIndex: 1,
        explanation:
          "During the first 12 months a probationary driver may not carry more than one non-family member as a passenger, unless a parent or guardian is with them.",
        context:
          "Family members do not count toward the limit, which is why the rule is stated as one non-family member rather than one passenger. Alongside it: everyone must be belted, the number of occupants may not exceed the belts originally fitted, and the driver may not use any device, including a phone.",
        trap:
          "Reading it as one passenger full stop makes a car full of siblings illegal, which it is not. Reading it as no restriction at all is the more dangerous mistake.",
        excerptKey: "probationary-passengers",
        commonlyMissed: true,
        sourceLabel: "Ohio BMV - Probationary License Restrictions",
        sourceUrl: BMV,
      },
      {
        id: "oh_s5_11",
        topic: "parking",
        question:
          "You are parking on a one-way street in Ohio. Which kerb may you park against?",
        choices: [
          "The right kerb only",
          "Either kerb, parallel and within 12 inches",
          "The left kerb only",
          "Either kerb, with no distance requirement",
        ],
        correctIndex: 1,
        explanation:
          "On a one-way street you may park against either kerb, still parallel to it and still within 12 inches.",
        context:
          "On a two-way street the rule is stricter: you park facing the direction traffic runs on that side, parallel and within 12 inches of the right kerb. The one-way relaxation exists because there is no wrong-way facing problem when all the traffic runs the same direction.",
        trap:
          "The 12-inch requirement survives the relaxation. It is the direction rule that changes, not the distance one.",
        excerptKey: "parking-one-way",
        sourceLabel: "Ohio Driver Manual - Parking",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_12",
        topic: "emergencies",
        question:
          "You are the first to arrive at a crash where someone is trapped and injured. What does the Ohio manual tell you?",
        choices: [
          "Do not move the injured; keep them warm and call 911",
          "Give water while waiting for help",
          "Wait for the other driver's insurer to be called first",
          "Move the injured person to the roadside",
        ],
        correctIndex: 0,
        explanation:
          "Call emergency services, do not move the injured, and keep them warm. Moving someone with an unseen spinal injury can turn a survivable crash into a permanent one.",
        context:
          "The manual's order of operations is: warn approaching traffic and put your hazard lights on, check for injuries, call 911 if anyone is hurt, notify the Highway Patrol, Sheriff or local police, then exchange details - without discussing fault or insurance coverage with the other driver.",
        trap:
          "Dragging someone clear feels like the heroic response and is the specific action the manual rules out.",
        excerptKey: "crash-injuries",
        sourceLabel: "Ohio Driver Manual - Check for Injuries",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_13",
        topic: "rules",
        question:
          "A driver in front of you is stopped at a green light waiting to turn left, with oncoming traffic streaming past. What does Ohio permit them to do?",
        choices: [
          "Complete the turn on the amber phase only",
          "Move fully into the intersection and stop",
          "Position the front of the vehicle slightly past the stop bar and wait",
          "Reverse and take a different route",
        ],
        correctIndex: 2,
        explanation:
          "Where heavy traffic offers no opportunity to turn, Ohio allows the front of the vehicle to be positioned slightly past the stop bar while yielding, and the turn made as soon as it is safe.",
        context:
          "That is deliberately different from moving fully into the intersection and stopping, which the manual rules out under its blocking rule. Sitting slightly forward keeps you visible and ready without stranding cross traffic when the phase changes.",
        trap:
          "Rolling right out into the middle of the junction is the standard habit, and Ohio addresses it twice - once here and once under not blocking the intersection.",
        excerptKey: "left-turn-waiting",
        sourceLabel: "Ohio Driver Manual - Left Turns",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_14",
        topic: "signs",
        question:
          "What message does the red circle with a diagonal slash carry, whatever symbol it surrounds?",
        choices: [
          "The pictured action requires a permit",
          "Caution",
          "Yield to the pictured road user",
          "The pictured action is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "The circle and slash stand for the word NO. Whatever the sign pictures, that is the thing you may not do.",
        context:
          "Learning the symbol rather than the individual signs is what lets you read prohibitory signs on sight: no left turn, no U turn, no right turn, no bicycles, and any others the test produces. It is a distinct family from the yellow diamonds, which describe a hazard rather than forbidding anything.",
        trap:
          "A sign showing a road user inside the circle looks like a yield instruction, which is the opposite of a ban and the reason bicycle and pedestrian prohibitions get misread.",
        excerptKey: "prohibitory-signs",
        sourceLabel: "Ohio Driver Manual - Prohibitory Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_15",
        topic: "impairment",
        question:
          "A driver aged 17 is convicted of a probationary OVI offence. What licence suspension follows?",
        choices: [
          "Three months",
          "Six months",
          "One year",
          "Two years",
        ],
        correctIndex: 1,
        explanation:
          "A conviction or guilty plea to probationary operating a vehicle under the influence brings an automatic six-month suspension for a driver under 18.",
        context:
          "It sits alongside the other automatic under-18 suspensions: three months for two moving violations, one year for three. Reinstatement is not simply serving the time - the driver must obtain a TIPIC, complete an approved juvenile driver improvement program, and pass the driving examination again.",
        trap:
          "Three months is the figure for two moving violations, which is the neighbouring line in the same list.",
        excerptKey: "probationary-alcohol",
        sourceLabel: "Ohio Driver Manual - Suspension of Probationary License",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_16",
        topic: "safety",
        question:
          "When must you check the far side of an intersection before entering it on a green light?",
        choices: [
          "Only when turning",
          "Only at intersections with no turn lanes",
          "Every time, to be sure there is room for your vehicle on the other side",
          "Only during rush hour",
        ],
        correctIndex: 2,
        explanation:
          "Every time. Ohio requires a driver to stop before entering an intersection where there is not enough space on the other side for the vehicle, whether or not a signal gives them the right to proceed.",
        context:
          "It is one of the manual's listed situations where a driver must stop, alongside stop signs, red signals, flashing reds, and emerging from an alley or driveway onto a sidewalk. Blocking the box strands cross traffic and pedestrians for a full phase and can leave you sitting on a crossing.",
        trap:
          "A green light reads as permission to enter, and this rule is written specifically to say that permission does not survive a full junction.",
        excerptKey: "stop-blocking-intersection",
        sourceLabel: "Ohio Driver Manual - A driver must stop",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_17",
        topic: "rightOfWay",
        question:
          "An emergency vehicle with lights and siren is approaching on the far carriageway of a divided highway. What must you do?",
        choices: [
          "You need not stop; the requirement excludes opposite traffic on a divided highway",
          "Move to the left lane and slow down",
          "Pull right and stop, as on any road",
          "Stop where you are",
        ],
        correctIndex: 0,
        explanation:
          "Ohio's requirement to stop for an approaching public safety vehicle carves out the case where the vehicle is travelling in the opposite direction on a divided highway. The median already separates you.",
        context:
          "On any other road you pull as far right as possible and stay there until the emergency vehicle has passed. The exception is narrow and depends on the road being divided - on an undivided road, oncoming traffic is expected to pull over and stop just as following traffic is.",
        trap:
          "Slamming on the brakes on a fast divided highway because you can see lights across the median is its own hazard, and it is not what the rule asks for.",
        excerptKey: "emergency-vehicle-divided",
        sourceLabel: "Ohio Driver Manual - A driver must stop",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_18",
        topic: "licensing",
        question:
          "What credit can completing an approved remedial driving course earn an Ohio driver with points on their record?",
        choices: [
          "A four-point credit, once per lifetime",
          "No credit; the course is only required after suspension",
          "Removal of all points",
          "A two-point credit, once in any three-year period",
        ],
        correctIndex: 3,
        explanation:
          "A driver charged with at least two but fewer than twelve points may complete an approved remedial course and apply for a two-point credit. The registrar approves only one such credit in any three-year period, and no more than five in a lifetime.",
        context:
          "The course plays two different roles in Ohio. Voluntarily, it buys back two points before you reach the threshold. Compulsorily, it is one of the reinstatement conditions after a twelve-point suspension, along with an SR-22 filing and reinstatement fees - and points earned by a court order do not qualify for the voluntary credit.",
        trap:
          "The course does not wipe the record clean, and the once-in-three-years limit means it cannot be used as a rolling remedy.",
        excerptKey: "remedial-credit-limits",
        sourceLabel: "Ohio Revised Code 4510.037 - Remedial driving instruction",
        sourceUrl: ORC_POINTS,
      },
      {
        id: "oh_s5_19",
        topic: "sharing",
        question:
          "A cyclist ahead of you signals by extending their left arm bent upward at the elbow. What are they indicating?",
        choices: [
          "A left turn",
          "Slowing or stopping",
          "A right turn",
          "A hazard in the road",
        ],
        correctIndex: 2,
        explanation:
          "The left arm bent upward at the elbow is the right turn signal. A cyclist may also signal a right turn by simply extending the right arm.",
        context:
          "The full set is worth knowing because a cyclist's signal is your only warning: left arm straight out for a left turn, left arm bent upward for a right turn, left arm bent downward for slowing or stopping. Ohio also tells you to look for other clues, such as a rider turning their head or glancing over their shoulder, when they cannot free a hand to signal.",
        trap:
          "The bent-arm signals are the ones people muddle, because both use the left arm and only the direction of the bend separates them.",
        excerptKey: "bicycle-rules",
        sourceLabel: "Ohio Driver Manual - Bicyclists",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_20",
        topic: "speed",
        question:
          "What is the standard limit in an alley inside an Ohio municipal corporation?",
        choices: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctIndex: 1,
        explanation:
          "15 mph. It is the lowest figure in Ohio's table, lower even than a school zone.",
        context:
          "Alleys are narrow, they have blind exits onto footways, and pedestrians use them as walkways. That is why the standard limit sits below the 20 mph school zone figure and well below the 25 mph on ordinary municipal streets, and why exits from them carry a separate obligation to stop at the sidewalk.",
        trap:
          "20 is the school zone figure and the lowest number most drivers can name, which makes it the natural guess for the lowest limit on the list.",
        excerptKey: "speed-by-road-type",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Speed Limits",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_21",
        topic: "rules",
        question:
          "You are approaching a railroad crossing marked only with a crossbuck and no lights or gates. What does Ohio require?",
        choices: [
          "Stop before every crossing of this type",
          "Slow down and be prepared to stop if you see or hear a train",
          "Maintain speed; unprotected crossings are inactive",
          "Sound your horn and proceed",
        ],
        correctIndex: 1,
        explanation:
          "Where a crossing is marked only with pavement markings or crossbucks, you slow down and be prepared to stop if a train is visible or audible. A full stop is required only if there is a stop sign, a train is coming, or you are driving one of the vehicle types that must always stop.",
        context:
          "The order of protection runs from crossbuck alone, through flashing lights, to lights with gates. Where a train is approaching, the stop is a defined window: no closer than 15 feet and no farther than 50 feet. You wait for the train to clear and the warning signals to stop before crossing.",
        trap:
          "Believing unprotected crossings are disused is exactly the assumption that gets drivers hit, since many active rural crossings carry nothing but a crossbuck.",
        excerptKey: "railroad-crossbuck-only",
        sourceLabel: "Ohio Driver Manual - Railroad Crossings",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_22",
        topic: "signals",
        question:
          "You are waiting to turn left on a green arrow when the arrow disappears and a round green remains. What has changed?",
        choices: [
          "The turn is now permitted but unprotected, so you must yield",
          "The signal has malfunctioned",
          "Nothing; the arrow and the round green mean the same thing",
          "The turn is now prohibited",
        ],
        correctIndex: 0,
        explanation:
          "The green arrow protects the turn by holding oncoming traffic. Once it drops to a round green, oncoming traffic is released and you must yield before turning.",
        context:
          "The distinction is stated in the manual through what the arrow permits: a turn in the direction of the arrow without stopping. A round green carries no such assurance - it is travel with caution through the intersection if it is clear. Anyone already legally in the intersection may complete the turn.",
        trap:
          "Continuing to turn on the assumption that oncoming traffic is still stopped is one of the most common causes of intersection collisions.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Ohio Driver Manual - Traffic Signals",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_23",
        topic: "signs",
        question:
          "A diamond sign shows an arrow bending sharply to the right at close to a right angle. How does it differ from a curve sign?",
        choices: [
          "It marks a mandatory right turn",
          "It indicates a right-hand exit ramp",
          "It marks the end of a passing zone",
          "It warns of a sharp right turn rather than a gentle curve",
        ],
        correctIndex: 3,
        explanation:
          "The sharp-angled arrow warns of a sharp turn, which needs considerably more speed reduction than the gentle S-shaped arrow used for a curve.",
        context:
          "Ohio's warning signs use the severity of the drawn bend to tell you how much to slow down, and an advisory speed plate is often mounted underneath. Approaching either, you reduce speed before you enter, then apply slight and constant acceleration through it - and reduce further when traction is poor or you cannot see the exit.",
        trap:
          "Treating a sharp turn sign as an ordinary curve is what puts cars on the outside verge, because the required speed drop is much larger.",
        excerptKey: "curves-reduce-speed",
        sourceLabel: "Ohio Driver Manual - Warning Signs and Speed Management",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_24",
        topic: "parking",
        question:
          "Which of these is permitted under Ohio's stopping, parking and standing rules?",
        choices: [
          "Standing alongside a vehicle already parked at the kerb",
          "Parking 18 inches from the kerb on a wide street",
          "Stopping momentarily to avoid a conflict with other traffic",
          "Parking in front of a private driveway if it is your own",
        ],
        correctIndex: 2,
        explanation:
          "The prohibition on stopping, parking or standing carries two exceptions: when it is necessary to avoid a conflict with other traffic, and when you are complying with the directions of a law enforcement officer or a traffic control device.",
        context:
          "Everything else in the list stands: no parking on a sidewalk, in front of a public or private driveway, within 20 feet of an intersection or crosswalk, within 10 feet of a hydrant, within one foot of another parked vehicle, alongside a vehicle already at the kerb, or anywhere a sign prohibits stopping.",
        trap:
          "Double parking beside a parked car for a moment feels harmless and is named in the prohibited list rather than the exceptions.",
        excerptKey: "parking-prohibited-stem",
        sourceLabel: "Ohio Driver Manual - Stopping, Parking, or Standing Prohibited",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_25",
        topic: "safety",
        question:
          "Under Ohio law, who is responsible when a passenger aged 10 is unrestrained in the back seat?",
        choices: [
          "The vehicle operator, who must have the child restrained with a safety belt",
          "The registered owner of the vehicle",
          "The passenger's parent, whether present or not",
          "Nobody; belts are only required in front",
        ],
        correctIndex: 0,
        explanation:
          "For a child at least 8 but not older than 15, the vehicle operator must have the child properly restrained with a safety belt.",
        context:
          "The duty is written onto the operator throughout the child restraint ladder: a child seat for those under 4 or under 40 pounds, a booster from 4 up to 8 unless the child is 4 feet 9 inches, and a belt from 8 up to 15. Ohio adds that children aged 12 and under should sit in the rear seat.",
        trap:
          "Ohio's general belt law covers the driver and front-seat occupants, which leads people to conclude that rear passengers are unregulated. Children are regulated separately.",
        excerptKey: "child-8-to-15",
        sourceLabel: "Ohio Driver Manual - Child Passenger Restraints",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_26",
        topic: "emergencies",
        question:
          "What does Ohio say about the practical effect of an SR-22 filing?",
        choices: [
          "It is a type of high-risk insurance policy",
          "It is a form filed with the state proving your policy meets the minimum coverage",
          "It is a bond posted with the court",
          "It replaces the requirement to carry liability insurance",
        ],
        correctIndex: 1,
        explanation:
          "An SR-22 is a certificate of financial responsibility - not a type of insurance, but a form filed with the state proving your policy meets Ohio's minimum liability coverage.",
        context:
          "It is one of the reinstatement conditions after a twelve-point suspension, along with the remedial driving course and reinstatement fees. Drivers who commit serious offences, reach twelve points in two years, or crash while uninsured can also be required to keep high-risk insurance and prove it to the Bureau.",
        trap:
          "Buying 'SR-22 insurance' is how it is marketed, and the distinction matters because the filing is a state form, not a product.",
        excerptKey: "sr22-definition",
        sourceLabel: "Ohio Driver Manual - Penalties",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_27",
        topic: "impairment",
        question:
          "What happens to a driver convicted of OVI five or more times in the preceding 20 years in Ohio?",
        choices: [
          "A permanent driving ban with no other consequences",
          "A licence suspension only",
          "A fine and mandatory treatment only",
          "Jail time, possible vehicle immobilisation or forfeiture, and placement on the Habitual OVI Offender Registry",
        ],
        correctIndex: 3,
        explanation:
          "Five or more OVI convictions in the preceding 20 years brings jail time, possible immobilisation or forfeiture of the vehicle, and placement on Ohio's Habitual OVI/OMVI Offender Registry.",
        context:
          "The registry is public, which is a separate consequence from the suspension itself. Underneath it, the administrative suspension scale escalates on its own track - a first refusal is one year, and three or more prior refusals or OVI convictions make it five.",
        trap:
          "Assuming repeat offences only lengthen the suspension misses the vehicle and registry consequences, which are the parts that follow the driver longest.",
        excerptKey: "ovi-habitual-registry",
        sourceLabel: "Ohio Driver Manual - Alcohol and Drug Penalties",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_28",
        topic: "rightOfWay",
        question:
          "Two drivers arrive at an uncontrolled intersection, one clearly a moment before the other. Who proceeds?",
        choices: [
          "The driver who arrived first",
          "The driver on the right, in every case",
          "The driver on the wider road",
          "Whichever driver signals first",
        ],
        correctIndex: 0,
        explanation:
          "Ohio's first rule is arrival order: you yield to the driver who is at, or arrives before you at, an intersection. The driver-on-the-right rule is the tie-break for simultaneous arrival.",
        context:
          "Reading the list in order matters, because applying the tie-break first gets the answer wrong whenever one driver plainly got there first. After arrival order come the other categories: oncoming traffic when you are turning left, traffic on the road you are joining, traffic already on a limited access highway, and road users still in the intersection.",
        trap:
          "'Yield to the right' is the rule everybody remembers, and it only decides the case where neither driver arrived first.",
        excerptKey: "row-arrives-first",
        sourceLabel: "Ohio Driver Manual - Right-of-Way",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_29",
        topic: "licensing",
        question:
          "An applicant aged 22 fails the maneuverability portion of the Ohio driving test on the first attempt. What must they do before retesting?",
        choices: [
          "Wait two days and rebook",
          "Take an Abbreviated Adult Driver Training Course, unless they completed approved driver education within the last year",
          "Retake the knowledge test",
          "Hold the TIPIC for a further six months",
        ],
        correctIndex: 1,
        explanation:
          "An applicant aged 21 or older who fails the maneuverability or road portion must complete an Abbreviated Adult Driver Training Course before a second attempt, unless they took an approved driver education course within the previous year.",
        context:
          "The course comes in four shapes: four hours in person or online, followed by either four hours of behind-the-wheel instruction or 24 hours of driving with a licensed driver aged 21 or older, with no more than four of those hours in a single day. The 24-hour route requires a notarised Twenty-Four Hour Affidavit, form BMV 5789.",
        trap:
          "The two-day wait applies to applicants under 21, which is the group most people picture when they think about failing a driving test.",
        excerptKey: "abbreviated-adult-course",
        sourceLabel: "Ohio Driver Manual - Test Failure",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_30",
        topic: "sharing",
        question:
          "You are driving up a long hill behind a loaded truck. Which lane does Ohio suggest avoiding?",
        choices: [
          "It makes no difference which lane you use",
          "The left lane, because the truck may pull out",
          "The right lane, where slow heavy vehicles and re-entering traffic concentrate",
          "The centre lane, because of crosswinds",
        ],
        correctIndex: 2,
        explanation:
          "Ohio advises avoiding the right lanes when travelling up or down steep hills behind a large vehicle, and near truck weigh stations where heavy vehicles are rejoining faster traffic.",
        context:
          "The reason is speed differential. On a climb, a loaded truck loses speed dramatically and you can close on it far faster than you expect; near a weigh station, trucks are accelerating from a standstill into moving traffic. Moving out of the right lane takes you out of both conflicts.",
        trap:
          "Staying right feels like the courteous default on a motorway, and it is the one place the manual specifically suggests moving out of it.",
        excerptKey: "truck-avoid-right-lane-hills",
        sourceLabel: "Ohio Driver Manual - Rear No Zones",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_31",
        topic: "rules",
        question:
          "Which of these does Ohio list as a situation where passing is prohibited regardless of the pavement markings?",
        choices: [
          "On any road with a posted limit above 45 mph",
          "Within a municipal corporation",
          "Between sunset and sunrise",
          "At an intersection",
        ],
        correctIndex: 3,
        explanation:
          "Passing at an intersection is on Ohio's do-not-pass list, alongside passing when an oncoming vehicle is approaching, when a curve or hill blocks your view, and before a railroad crossing or bridge.",
        context:
          "Those four situations are about sight lines and conflict points rather than paint. A broken yellow line on your side gives you permission that the circumstances can still take away, which is why the list is stated separately from the marking rules.",
        trap:
          "Drivers treat the centre line as the whole answer, and the markings cannot see the car about to emerge from a side road.",
        excerptKey: "passing-do-not-when",
        sourceLabel: "Ohio Driver Manual - Passing",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_32",
        topic: "signs",
        question:
          "A yellow diamond shows the outline 12'-6\" between two arrows. What is it telling you?",
        choices: [
          "The road narrows to 12 feet 6 inches",
          "A bridge weight limit applies",
          "There is limited overhead clearance ahead",
          "The lane width is being reduced for roadworks",
        ],
        correctIndex: 2,
        explanation:
          "The vertical arrows and the measurement mark limited overhead clearance - the height available under a bridge or structure ahead.",
        context:
          "It matters most to anyone driving something taller than a car: a van with a roof rack, a rented removal truck, or a caravan. The sign is a warning diamond rather than a prohibition, and the figure is the height of the structure rather than a speed or a weight.",
        trap:
          "Reading the figure as a width or a weight limit is the mistake, and vertical arrows are the clue that the measurement is a height.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Ohio Driver Manual - Warning Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_33",
        topic: "safety",
        question:
          "How should the outside mirrors be adjusted according to the Ohio manual?",
        choices: [
          "So the side of your own vehicle is clearly visible in each",
          "So your vehicle's edge is only barely visible, widening the view",
          "So they point at the road surface behind the rear wheels",
          "So they duplicate the rear-view mirror",
        ],
        correctIndex: 1,
        explanation:
          "Set each outside mirror so the edge of your own vehicle is only barely visible. Ohio says the adjustment adds 12 to 16 degrees of viewing area on each side.",
        context:
          "You set the left mirror with your head resting against the driver's window and the right mirror with your head above the centre console. The result is that a car passing you leaves the rear-view mirror, appears in the door mirror, and then enters your peripheral vision without disappearing in between.",
        trap:
          "Framing your own bodywork in both mirrors feels reassuring and simply duplicates what the interior mirror already shows.",
        excerptKey: "mirror-adjustment",
        sourceLabel: "Ohio Driver Manual - Adjusting the Mirrors",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_34",
        topic: "speed",
        question:
          "You are cited for driving too fast for conditions on a clear road while under the posted limit. On what basis?",
        choices: [
          "There is no such offence in Ohio",
          "Only if you were within a work zone",
          "Only if a crash resulted",
          "Assured clear distance ahead: you could not stop within the distance you could see",
        ],
        correctIndex: 3,
        explanation:
          "Ohio requires a speed that lets you bring the vehicle to a stop within an assured clear distance ahead. Being under the posted number does not answer that requirement.",
        context:
          "It applies whatever the weather. A blind crest, a queue round a bend or a slow vehicle over a rise all shorten the distance you can see to be clear, and the required speed drops with it. The posted limit is a maximum set for a well-designed road in dry, clear conditions.",
        trap:
          "People associate the rule with fog and snow only, and it is stated as a general requirement that applies regardless of the posted speed limit.",
        excerptKey: "assured-clear-distance",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Speed Limits",
        sourceUrl: MAN,
      },
      {
        id: "oh_s5_35",
        topic: "signals",
        question:
          "You are stopped behind a school bus whose red lights have stopped flashing, but the bus has not moved. What may you do?",
        choices: [
          "Wait until the bus begins to move or the driver signals you to proceed",
          "Pass on the left at under 10 mph",
          "Sound your horn and pass",
          "Pass immediately, since the lights are off",
        ],
        correctIndex: 0,
        explanation:
          "Ohio requires drivers who had to stop to remain stopped until the bus begins to move or the bus driver signals them to proceed. The lights going out is not the trigger.",
        context:
          "The reason is the child still crossing in front of the bus, out of the driver's sight and yours. Where a driver passes unlawfully, the bus driver is expected to report the plate number and location to law enforcement, who will try to identify the driver afterwards.",
        trap:
          "Several states release traffic when the lights stop. Ohio's wording is the bus beginning to move or the driver waving you on, which can be several seconds later.",
        excerptKey: "school-bus-fewer-than-four",
        sourceLabel: "Ohio Driver Manual - Stopping for a School Bus",
        sourceUrl: MAN,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "The real Ohio knowledge test is 40 multiple-choice questions on motor vehicle regulations and traffic signs, and you must answer 75 percent of them correctly - 30 of 40 - to pass. The BMV publishes a single overall pass mark: there are no separate signs and rules sections to clear. This set is thirty mixed questions at that standard, with no hints.",
    questions: [
      {
        id: "oh_s6_01",
        topic: "signs",
        question:
          "Which sign shape is used in Ohio for one message and one message only?",
        choices: [
          "The octagon",
          "The square",
          "The rectangle",
          "The diamond",
        ],
        correctIndex: 0,
        explanation:
          "The eight-sided octagon is reserved for the stop message, so it can be recognised from behind, in poor light, or when the lettering is obscured.",
        context:
          "Ohio uses a small number of unique shapes so identification does not depend on reading. The octagon means stop, the downward triangle means yield, the round yellow sign with the X and RR marks a railroad crossing ahead, the pentagon marks schools, and the pennant marks a no-passing zone. Everything else works through the diamond, rectangle and square families.",
        trap:
          "Rectangles carry both regulatory and guide messages, so shape alone never settles what a rectangular sign is telling you.",
        excerptKey: "sign-shape-color",
        sourceLabel: "Ohio Driver Manual - Traffic Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_02",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light and a pedestrian steps into the crosswalk you are turning across. What must you do?",
        choices: [
          "Yield to the pedestrian",
          "Complete the turn before they reach your lane",
          "Sound your horn and continue",
          "Reverse to clear the intersection",
        ],
        correctIndex: 0,
        explanation:
          "You yield to pedestrians entering or in the crosswalk. A green light governs your conflict with cross traffic, not your duty to people on foot.",
        context:
          "Ohio asks you to yield to pedestrians when turning as a general instruction, and treats crosswalks as areas where pedestrians may cross whether or not they are painted. Where a stop line precedes the crosswalk, that line is the stopping point.",
        trap:
          "Beating them across is the reflex when traffic behind you is waiting, and it puts you into the one conflict the turn was supposed to avoid.",
        excerptKey: "crosswalk-yield",
        sourceLabel: "Ohio Driver Manual - Crosswalks",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_03",
        topic: "impairment",
        question:
          "What blood-alcohol concentration is the limit for a commercial driver in Ohio?",
        choices: [".02%", ".04%", ".06%", ".08%"],
        correctIndex: 1,
        explanation:
          ".04 percent for commercial drivers - half the general limit of .08 and twice the .02 that applies to anyone under 21.",
        context:
          "Ohio calls the offence OVI, operating a vehicle impaired. The three thresholds sit in a single list, and a driver can fall under more than one: an under-21 commercial driver is held to the stricter of them. A chemical test refusal carries its own automatic suspension whatever the driver's category.",
        trap:
          "The three numbers are given together in one place, which is exactly why they get shuffled under time pressure.",
        excerptKey: "bac-limits",
        sourceLabel: "Ohio Driver Manual - Alcohol and the Law",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_04",
        topic: "rules",
        question:
          "What must you do before entering an intersection where traffic on the far side is not moving?",
        choices: [
          "Enter and edge forward as space appears",
          "Enter only if your light is green",
          "Turn right instead to avoid waiting",
          "Stop before the intersection until there is room for your vehicle",
        ],
        correctIndex: 3,
        explanation:
          "You stop before the intersection when there is not enough space on the other side to accommodate your vehicle. The rule applies whether or not a signal gives you the right to proceed.",
        context:
          "It is one of the situations on Ohio's list of when a driver must stop, alongside stop signs, red signals, flashing reds and emerging onto a sidewalk from a driveway. The point is to avoid stranding cross traffic and pedestrians when their phase arrives.",
        trap:
          "Entering because the light is green is the exact reasoning the rule is written against.",
        excerptKey: "do-not-block-intersection",
        sourceLabel: "Ohio Driver Manual - Tips",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_05",
        topic: "safety",
        question:
          "Which of these does Ohio give as a reason to increase your following distance?",
        choices: [
          "Driving on a one-way street",
          "Driving at night",
          "Driving with passengers",
          "Driving a newer vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Night driving reduces how far ahead you can see, so the gap goes up. The same applies in fog, rain and snow, on slippery roads, and behind large vehicles.",
        context:
          "The baseline is a minimum of one vehicle length for every 10 mph, or four seconds, measured by counting from a fixed object. Ohio also lists vehicles that must stop at railroad crossings, such as buses and hazardous-material carriers, as a reason to hang back further.",
        trap:
          "Newer vehicles stop faster, which tempts drivers to close up. The gap exists for perception and reaction time, which no braking system improves.",
        excerptKey: "following-distance-increase",
        sourceLabel: "Ohio Driver Manual - Space to the Front",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_06",
        topic: "signs",
        question:
          "What is the message of a white rectangular sign reading ONE WAY with an arrow?",
        choices: [
          "Traffic may travel in either direction",
          "The road ahead is one-way in the direction of the arrow",
          "One lane is closed ahead",
          "Turns are permitted in one direction only",
        ],
        correctIndex: 1,
        explanation:
          "It indicates a one-way road, and the arrow shows the permitted direction of travel.",
        context:
          "One-way streets are also where Ohio's left-on-red permission lives: from the extreme left lane of a one-way street onto another one-way street, after a complete stop and unless a sign forbids it. The DO NOT ENTER sign works alongside them, marking the wrong end of a one-way road or a freeway exit ramp.",
        trap:
          "Assuming a one-way sign restricts turning rather than direction of travel is the misread that puts drivers head-on into a one-way street.",
        excerptKey: "regulatory-signs",
        sourceLabel: "Ohio Driver Manual - Regulatory Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_07",
        topic: "sharing",
        question:
          "A tow truck is stopped on the shoulder of a two-lane road with its warning lights on. What does Ohio require?",
        choices: [
          "Nothing; the Move Over law covers police vehicles only",
          "Stop until it moves",
          "Slow down and pass with caution",
          "Change lanes into oncoming traffic to give room",
        ],
        correctIndex: 2,
        explanation:
          "Road service vehicles such as tow trucks are covered by the Move Over law. On a road with no adjacent lane to move into, you slow down and pass carefully at a safe speed for conditions.",
        context:
          "The lane change is the first duty where the road has two or more lanes running your way. Where it does not, or where changing would be unsafe, the duty converts into slowing down. Emergency vehicles, waste collection vehicles, highway maintenance vehicles and utility inspection vehicles are all covered.",
        trap:
          "Crossing into oncoming traffic is never what 'move over' means, and on a two-lane road the answer is speed rather than position.",
        excerptKey: "move-over-law",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Move Over Laws",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_08",
        topic: "licensing",
        question:
          "How many questions are on Ohio's knowledge test, and how many must you answer correctly?",
        choices: [
          "40 questions, 30 correct",
          "40 questions, 32 correct",
          "30 questions, 25 correct",
          "50 questions, 40 correct",
        ],
        correctIndex: 0,
        explanation:
          "The knowledge test is 40 multiple-choice questions on motor vehicle regulations and traffic signs, and you must answer 75 percent correctly - 30 of the 40.",
        context:
          "The BMV publishes one overall pass mark rather than separate signs and rules thresholds. You can take it online through BMV Online Services, at a driver exam station, or at selected deputy registrar agencies. Fail and you wait at least 24 hours; in-person attempts are unlimited, while online testing is capped at two attempts in any six-month period.",
        trap:
          "32 of 40 is 80 percent, which is the pass mark in several other states and the figure people assume applies here.",
        excerptKey: "knowledge-test-format",
        commonlyMissed: true,
        sourceLabel: "Ohio BMV - Knowledge Test",
        sourceUrl: BMV,
      },
      {
        id: "oh_s6_09",
        topic: "signals",
        question:
          "What does a steady green light actually permit?",
        choices: [
          "Travel through regardless of what is in the intersection",
          "Travel only straight ahead",
          "Travel after a brief stop",
          "Travel through the intersection if it is clear to do so",
        ],
        correctIndex: 3,
        explanation:
          "Green means you may travel with caution through the intersection if it is clear. It is a conditional permission rather than an unconditional right.",
        context:
          "Ohio adds the practical instruction that goes with it: pause before moving off, because you cannot rely on other road users obeying their signals. And you do not enter at all if there is no room on the far side for your vehicle.",
        trap:
          "Reading green as an absolute right of way is how drivers end up in collisions with red-light runners they never looked for.",
        excerptKey: "signal-green",
        sourceLabel: "Ohio Driver Manual - Traffic Signals",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_10",
        topic: "speed",
        question:
          "What limit applies on a state route within an Ohio municipal corporation but outside an urban district?",
        choices: ["35 mph", "45 mph", "50 mph", "55 mph"],
        correctIndex: 2,
        explanation:
          "50 mph. State routes and through highways inside a municipality but outside a business district are 35, and the figure rises to 50 outside an urban district.",
        context:
          "The distinction Ohio draws is between a business district, an urban district and open road, and the same state route can pass through all three. Where nothing is posted, the standard for that stretch applies, and where a sign is posted, the sign governs.",
        trap:
          "45 is a common posted number on exactly these roads and does not appear in Ohio's standard table at all.",
        excerptKey: "speed-by-road-type",
        sourceLabel: "Ohio Driver Manual - Speed Limits",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_11",
        topic: "parking",
        question:
          "You are parking on a hill in Ohio. What is the complete sequence the manual gives?",
        choices: [
          "Turn the wheels downhill, leave in neutral, apply the parking brake",
          "Turn the wheels toward the kerb side, shift to park, set the parking brake, switch off",
          "Leave the wheels straight, shift to park, switch off",
          "Turn the wheels away from the kerb, set the parking brake, leave the engine running",
        ],
        correctIndex: 1,
        explanation:
          "Turn the front wheels toward the kerb side of the road, shift from drive to park, set the parking brake, and turn the engine off.",
        context:
          "Ohio gives one instruction for hills rather than the four-way table used elsewhere, so the direction of the slope does not change the answer. The parking brake is part of the same instruction, not an optional extra, and it is what holds the vehicle if the transmission fails.",
        trap:
          "Importing the uphill-versus-downhill rule from another state's handbook produces the wrong answer half the time here.",
        excerptKey: "parking-hill",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Parking on a Hill or Grade",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_12",
        topic: "rules",
        question:
          "A solid white line separates your lane from the lane beside you. What does the colour tell you?",
        choices: [
          "The lane beside you runs in the opposite direction",
          "The lane beside you is for buses",
          "The lane beside you carries traffic in the same direction",
          "The lane beside you is closed",
        ],
        correctIndex: 2,
        explanation:
          "White lines separate traffic moving in the same direction. Yellow lines are what separate opposing flows.",
        context:
          "The colour tells you direction and the pattern tells you permission. A broken white line means changing lanes is allowed; a solid one discourages it. On the yellow side, a solid double means stay right of it except to turn left or pass a slow-moving vehicle, and a solid line on your side of a broken pair means you may not pass.",
        trap:
          "Getting the colours the wrong way round is the mistake that puts a driver on the wrong side of a road at night.",
        excerptKey: "markings-yellow-solid",
        sourceLabel: "Ohio Driver Manual - Lane Pavement Markings",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_13",
        topic: "emergencies",
        question:
          "Your accelerator sticks open while you are driving. What is the first action Ohio gives?",
        choices: [
          "Turn on the emergency flashers and shift to neutral",
          "Apply the parking brake",
          "Steer onto the shoulder at speed",
          "Switch off the ignition",
        ],
        correctIndex: 0,
        explanation:
          "Flashers on, shift to neutral, and look for an escape route. Then steer smoothly, brake gradually and pull off the road before shifting to park and switching off.",
        context:
          "Neutral comes before the ignition because switching off while moving can lock the steering and remove the power assistance you need to reach the shoulder. It is the same principle as the brake-failure sequence: keep control first, shed speed second, stop third.",
        trap:
          "Killing the ignition is the intuitive emergency action and takes away the steering at the moment you most need it.",
        excerptKey: "stuck-accelerator",
        sourceLabel: "Ohio Driver Manual - Stuck Accelerator",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_14",
        topic: "signs",
        question:
          "You see a diamond sign showing a bicycle. What does it mean?",
        choices: [
          "Bicycles must dismount ahead",
          "Bicycles are banned from this road",
          "A bicycle lane starts here",
          "A bicycle crossing is ahead",
        ],
        correctIndex: 3,
        explanation:
          "A bicycle on a yellow diamond warns of a bicycle crossing ahead. A ban would be the same symbol inside a red circle with a slash.",
        context:
          "This is the family test in miniature. Diamond plus yellow means warning; red circle with slash means prohibition; rectangle with white background means regulation. The symbol identifies who or what is involved, and the shape and colour say what you are being told about them.",
        trap:
          "Any bicycle symbol reads as a bicycle rule, and half of them are warnings to drivers rather than instructions to cyclists.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Ohio Driver Manual - Warning Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_15",
        topic: "safety",
        question:
          "Which lights must be on when natural light does not let you see clearly 1,000 feet ahead?",
        choices: [
          "Parking lights",
          "Hazard lights",
          "Fog lights alone",
          "Headlights",
        ],
        correctIndex: 3,
        explanation:
          "Headlights. The 1,000-foot visibility test is one of Ohio's four triggers, alongside sunset to sunrise, any period of rain, snow or fog, and any time the wipers are running because of precipitation.",
        context:
          "The purpose is as much being seen as seeing. Parking lights are not a substitute, and hazard lights are for a vehicle stopped on or near a roadway rather than for a moving one. High beams may be used whenever headlights are, except when a vehicle is approaching.",
        trap:
          "Using hazards while moving in bad weather is common practice in some places and is not what Ohio asks for.",
        excerptKey: "headlights-1000-feet",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - When to Use Headlights",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_16",
        topic: "rightOfWay",
        question:
          "You are on a road that ends at a T-junction with a through road. Who has priority?",
        choices: [
          "Traffic on the through road",
          "You, if you arrive first",
          "Traffic turning right",
          "Whoever is travelling faster",
        ],
        correctIndex: 0,
        explanation:
          "Traffic on the road you are joining has priority. Your road ends, which puts you in the position of entering someone else's traffic stream.",
        context:
          "Ohio expresses the same principle in several places: you yield to traffic on a public highway when entering from a driveway or private road, and to traffic already on a limited access highway when you are on an entrance ramp. A T-junction warning diamond gives you notice of it in advance.",
        trap:
          "Arrival order settles ties between roads of equal standing. It does not promote a terminating road above a through one.",
        excerptKey: "row-definition",
        sourceLabel: "Ohio Driver Manual - Right-of-Way",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_17",
        topic: "sharing",
        question:
          "Why does Ohio tell you not to assume a motorcycle is turning when its indicator is flashing?",
        choices: [
          "Motorcycle signals are not required by law",
          "Motorcycle signals may not self-cancel",
          "Motorcycle signals flash faster than a car's",
          "Motorcyclists rarely signal at all",
        ],
        correctIndex: 1,
        explanation:
          "Many motorcycle indicators do not cancel themselves after a turn, so a flashing signal may simply be one the rider forgot to switch off.",
        context:
          "Ohio gives the same warning about cars in a more general form: if an approaching vehicle has its signal on, do not pull out in front of it without assured proper distance, because the driver may turn later or may have forgotten to cancel. Waiting for the vehicle to actually begin turning is what makes the judgement safe.",
        trap:
          "A visible signal feels like hard information, and it is the single most common reason drivers pull out into a motorcycle's path.",
        excerptKey: "motorcycle-signal",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Motorcyclists",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_18",
        topic: "impairment",
        question:
          "May a driver aged 17 use a hands-free phone while stopped at a red light in Ohio?",
        choices: [
          "Yes, hands-free use is always permitted",
          "Yes, provided the vehicle is stationary",
          "No, drivers under 18 may not use any device, even hands-free",
          "Yes, if the call is under one minute",
        ],
        correctIndex: 2,
        explanation:
          "Drivers under 18 may not use any electronic device while driving, even hands-free, and the ban explicitly covers sitting at a traffic light or in a traffic jam. Navigation and emergency calls are the exceptions.",
        context:
          "A first violation brings a 60-day licence suspension and a $150 fine; a second brings a one-year suspension and a $300 fine. It is a primary offence, so the phone alone justifies the stop. Adults are held to a different standard: hands-free use is allowed provided the device is not held or supported and nothing is typed.",
        trap:
          "The hands-free allowance is real but belongs to adults. Applying it to a 17-year-old at a red light gets both parts of the rule wrong.",
        excerptKey: "distracted-under-18",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Distracted Driving",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_19",
        topic: "rules",
        question:
          "Which of these is a legitimate use of a two-way left turn lane?",
        choices: [
          "Waiting to make a left turn, having entered it just before the turn",
          "Travelling for a short distance to reach a junction",
          "Passing a queue of slow traffic",
          "Waiting to merge into the far-side traffic",
        ],
        correctIndex: 0,
        explanation:
          "Vehicles from either direction may use the centre lane immediately before making a left turn. Travelling, passing and merging are all outside what it is for.",
        context:
          "The lane is marked with a broken yellow line and a solid yellow line on each side, plus white two-way left-turn arrows. Because drivers from both directions may enter it at the same moment, using it as a travel lane creates a head-on conflict in the middle of the road.",
        trap:
          "Entering it early and running along it to the junction feels efficient and is exactly the use the manual rules out.",
        excerptKey: "two-way-left-turn-lane",
        sourceLabel: "Ohio Driver Manual - Two-Way Left Turn Only Lane",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_20",
        topic: "licensing",
        question:
          "When must an Ohio driver be able to show proof of financial responsibility?",
        choices: [
          "Only after a crash",
          "Whenever a traffic ticket is issued, at inspection stops, in traffic court, and after a crash causing over $400 damage",
          "Only when renewing a licence",
          "Only when a police officer specifically requests it in writing",
        ],
        correctIndex: 1,
        explanation:
          "Ohio lists four situations: whenever law enforcement issues a traffic ticket, at all vehicle inspection stops, at all traffic court appearances, and when a driver or owner is in a crash causing more than $400 in property damage.",
        context:
          "Driving uninsured is illegal, and so is letting someone else drive your uninsured vehicle. Failing to show proof can bring a licence suspension, fines and reinstatement fees. When you register a vehicle or apply for a licence you sign a sworn statement that you will not drive without coverage.",
        trap:
          "Treating it as a post-crash formality is how drivers end up suspended over a routine ticket they could otherwise have paid.",
        excerptKey: "insurance-proof-when",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Insurance and Financial Responsibility",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_21",
        topic: "signs",
        question:
          "What does a brown sign indicate in Ohio?",
        choices: [
          "A hospital or medical facility",
          "A construction detour",
          "A recreation, cultural or historic site",
          "A truck route",
        ],
        correctIndex: 2,
        explanation:
          "Brown belongs to the guide sign family and marks recreation areas, cultural sites and points of historic interest.",
        context:
          "Guide signs share three colours between them. Green handles destinations and distances, blue covers motorist services such as fuel, food and lodging, and brown marks parks, recreation and heritage. All three are square or rectangular, which separates them from warnings and prohibitions.",
        trap:
          "Hospitals are signed in blue as a motorist service, which is the guide colour most often confused with brown.",
        excerptKey: "guide-signs-shape",
        sourceLabel: "Ohio Driver Manual - Guide Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_22",
        topic: "safety",
        question:
          "What does Ohio say about using your horn?",
        choices: [
          "Use it whenever another driver makes an error",
          "Use it before every overtake",
          "Use it only where signs permit",
          "Use it to alert other road users when needed, but not otherwise",
        ],
        correctIndex: 3,
        explanation:
          "The horn is a communication tool: tap it to warn a pedestrian or cyclist moving into your lane, a driver turning into you, or a driver who may not have seen you. Using it otherwise can startle or anger someone.",
        context:
          "It sits within Ohio's broader advice on making yourself visible and predictable: headlights when required, signals given 100 feet ahead and cancelled afterwards, brake lights used through early and gentle slowing. Around cyclists the manual asks you specifically to avoid sounding the horn close by.",
        trap:
          "Using the horn as commentary on another driver's mistake is the common habit, and the manual explicitly narrows its purpose to communication.",
        excerptKey: "horn-use",
        sourceLabel: "Ohio Driver Manual - Communicating",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_23",
        topic: "signals",
        question:
          "A signal shows flashing yellow on your approach and flashing red on the side road. What does that arrangement mean?",
        choices: [
          "Both roads must stop",
          "You proceed with caution; the side road must stop",
          "You must stop; the side road proceeds",
          "The signal has failed and both roads treat it as a four-way stop",
        ],
        correctIndex: 1,
        explanation:
          "Flashing yellow on your approach means slow down and proceed with caution. Flashing red on the side road requires those drivers to stop and yield.",
        context:
          "It is a deliberate arrangement rather than a fault, used overnight on a main road crossing a quiet one. A genuinely dark signal is different again and is treated as a four-way stop. Even on the flashing yellow you should be ready to stop for anything entering the intersection.",
        trap:
          "Assuming a flashing signal means the whole junction has failed leads drivers to stop on a flashing yellow, which is not what it asks for.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "Ohio Driver Manual - Traffic Signals",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_24",
        topic: "sharing",
        question:
          "What does Ohio require of a driver approaching or passing a bicyclist?",
        choices: [
          "Slow down and pass only when it can be done safely",
          "Sound the horn before passing",
          "Pass at the posted speed to minimise the time alongside",
          "Wait for the cyclist to leave the roadway",
        ],
        correctIndex: 0,
        explanation:
          "Slow down when approaching or passing, pass only when it can be done safely, and leave a safety zone of at least three feet.",
        context:
          "Ohio adds that you should avoid sounding your horn close to a cyclist, avoid turning sharply in front of one, never force a cyclist off the road, take extra care where the surface is wet or covered in sand or gravel, and check for cyclists before backing up.",
        trap:
          "Passing quickly to reduce exposure sounds logical and produces exactly the air disturbance and surprise the rules are written to avoid.",
        excerptKey: "bicycle-horn",
        sourceLabel: "Ohio Driver Manual - Bicyclists",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_25",
        topic: "speed",
        question:
          "Which statement best describes Ohio's rule on speed in poor conditions?",
        choices: [
          "The posted limit applies in all conditions",
          "You may exceed the limit to keep pace with traffic",
          "A reasonable speed may be well below the posted limit",
          "Limits are reduced automatically when it rains",
        ],
        correctIndex: 2,
        explanation:
          "Posted limits assume a well-designed road and dry, clear weather. In inclement weather, poor road conditions or heavy traffic, the reasonable speed drops below the sign.",
        context:
          "The controlling requirement is that you must be able to stop within an assured clear distance ahead, whatever the posted number says. Ohio does not lower the signs automatically in rain - it expects the driver to make that judgement, and enforces it after the fact.",
        trap:
          "Keeping pace with traffic is not a defence to a speeding charge, and it is the reasoning most drivers give.",
        excerptKey: "speed-less-than-ideal",
        sourceLabel: "Ohio Driver Manual - Speed Limits",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_26",
        topic: "emergencies",
        question:
          "You have crashed into a parked car and its owner is nowhere to be found. What must you do?",
        choices: [
          "Wait 30 minutes and then leave",
          "Report it to the BMV within 24 hours",
          "Nothing, if the damage is minor",
          "Report it to the police or leave the necessary information at the scene",
        ],
        correctIndex: 3,
        explanation:
          "A crash with an unattended vehicle must be reported to the police, or you must leave the necessary information at the scene - which in practice means a note with your details.",
        context:
          "It is part of the general duty not to leave until contact and insurance information has been exchanged with everyone involved. Where the other vehicle is unoccupied, the note substitutes for the exchange. Failing to stop and disclose your identity after a crash is a six-point offence.",
        trap:
          "Minor damage feels like it does not count, and the duty turns on the crash having happened rather than on how bad it was.",
        excerptKey: "crash-unattended-vehicle",
        sourceLabel: "Ohio Driver Manual - Report the Crash",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_27",
        topic: "parking",
        question:
          "Which of these is prohibited under Ohio's parking rules?",
        choices: [
          "Parking within one foot of another parked vehicle",
          "Parking 15 feet from a fire hydrant",
          "Parking 25 feet from a crosswalk",
          "Parking on a one-way street against the left kerb",
        ],
        correctIndex: 0,
        explanation:
          "Parking within one foot of another parked vehicle is prohibited. Fifteen feet from a hydrant, 25 feet from a crosswalk, and parking against the left kerb on a one-way street are all legal.",
        context:
          "The distances that matter are 10 feet from a fire hydrant and 20 feet from an intersection or crosswalk, so anything beyond those clears the rule. Ohio also bans parking on a sidewalk, in front of a driveway, alongside a vehicle already parked at the kerb, and wherever signs prohibit stopping.",
        trap:
          "The one-foot figure is the one that gets forgotten, because it is about the gap between cars rather than a distance from a fixed object.",
        excerptKey: "parking-prohibited-places",
        sourceLabel: "Ohio Driver Manual - Stopping, Parking, or Standing Prohibited",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_28",
        topic: "rules",
        question:
          "What does Ohio require of a driver whose vehicle is in unsafe condition?",
        choices: [
          "It may be driven to a repair shop only",
          "It may be driven at reduced speed",
          "It may not be driven or moved on any highway",
          "It may be driven if hazard lights are used",
        ],
        correctIndex: 2,
        explanation:
          "Ohio law prohibits driving or moving a vehicle on any highway when it is in such unsafe condition as to endanger any person, and prohibits knowingly permitting someone else to do so.",
        context:
          "The equipment standards behind that are specific: working steering with no excessive play, at least 1/16 inch of tyre tread, service and parking brakes that work, two headlights, functioning taillights, brake lights, plate light and turn signals, wipers that clear the screen, a rear-view mirror, a working horn, and a sound exhaust system.",
        trap:
          "The idea that a drive to the garage is exempt appears in some states' rules and not in the Ohio wording.",
        excerptKey: "unsafe-vehicle",
        sourceLabel: "Ohio Driver Manual - Vehicle Equipment Regulations",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_29",
        topic: "licensing",
        question:
          "Under Ohio law, what is the liability of a parent who co-signs a minor's licence application?",
        choices: [
          "None; the minor is solely liable once licensed",
          "Liability for insurance premiums only",
          "Liability limited to the first 12 months",
          "Joint and several liability for damage caused by the minor's negligence until their 18th birthday",
        ],
        correctIndex: 3,
        explanation:
          "The co-signing parent or guardian is jointly and severally liable with the minor for damage caused by negligence or willful misconduct while driving, until the minor turns 18.",
        context:
          "There are two ways out. Filing proof of financial responsibility on the minor's behalf with the Bureau removes the co-signer's liability, and a co-signer may cancel their authorisation altogether by returning the licence or TIPIC, or a notarised letter, to the BMV's licence control office.",
        trap:
          "Assuming the licence itself transfers responsibility to the teenager is the misunderstanding the co-signature is designed to prevent.",
        excerptKey: "cosigner-liability",
        sourceLabel: "Ohio Driver Manual - Co-signer Responsibility",
        sourceUrl: MAN,
      },
      {
        id: "oh_s6_30",
        topic: "signs",
        question:
          "You approach an intersection where a police officer is directing traffic in a way that contradicts the signs. What governs?",
        choices: [
          "The signs, unless the officer is in uniform",
          "The officer's directions",
          "The posted signs",
          "Whichever gives priority to the busier road",
        ],
        correctIndex: 1,
        explanation:
          "An officer directing traffic overrides the signs and signals at that junction. Ohio's rule for a non-working signal makes the point directly, carving out the case where an officer is present to direct traffic.",
        context:
          "The same applies to a flagger in a work zone, whose instructions you must follow. The reasoning is identical in both cases: signs and signals are fixed and cannot respond to a crash, an evacuation or a lane closure, and a person on the ground can.",
        trap:
          "Following the sign because it is the law is the instinct, and it puts you in conflict with everyone obeying the officer.",
        excerptKey: "signal-outage-four-way",
        sourceLabel: "Ohio Driver Manual - Work Zone Signs and Inoperable Signals",
        sourceUrl: MAN,
      },
    ],
  },
];
