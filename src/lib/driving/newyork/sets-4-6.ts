import type { DrivingTestSet } from "../types";

// Every fact below was checked against the New York State Driver's Manual
// (MV-21) on dmv.ny.gov, and against the DMV's Graduated License Law, learner
// permit and insurance pages where the manual only summarises a rule.
// Questions are original; explanations, context and trap notes are written
// from scratch, with a deep link to the DMV's own wording.
const M = "https://dmv.ny.gov/new-york-state-drivers-manual-practice-tests";
const CH1 = `${M}/chapter-1-driver-licenses`;
const CH2 = `${M}/chapter-2-how-keep-your-license`;
const CH3 = `${M}/chapter-3-owning-vehicle`;
const CH4 = `${M}/chapter-4-traffic-control`;
const CH5 = `${M}/chapter-5-intersections-and-turns`;
const CH6 = `${M}/chapter-6-passing`;
const CH7 = `${M}/chapter-7-parallel-parking`;
const CH8 = `${M}/chapter-8-defensive-driving`;
const CH9 = `${M}/chapter-9-alcohol-and-other-drugs`;
const CH10 = `${M}/chapter-10-special-driving-conditions`;
const CH11 = `${M}/chapter-11-sharing-road`;
const CH12 = `${M}/chapter-12-if-you-are-traffic-crash`;
const GDL_URL = "https://dmv.ny.gov/driver-license/younger-driver/the-graduated-license-law";
const PERMITS_URL = "https://dmv.ny.gov/driver-license/learner-permit-restrictions";

export const newyorkSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Wider Ground",
    difficulty: "medium",
    description:
      "Thirty-five questions across the parts of the manual people skim - the junior licence rules that change county by county, move over, night driving, and the equipment and paperwork rules.",
    questions: [
      {
        id: "ny_s4_01",
        topic: "licensing",
        question:
          "You hold a New York Class DJ junior licence and you are 17. When may you drive inside the five boroughs of New York City?",
        choices: [
          "Between 5 AM and 9 PM only",
          "Any time, provided a licensed adult is with you",
          "Not at all - a junior licence does not permit driving in New York City",
          "Only on weekends and public holidays",
        ],
        correctIndex: 2,
        explanation:
          "A Class DJ or MJ junior licence does not allow driving within the five boroughs under any circumstances - not at any hour, and not with a supervising driver.",
        context:
          "New York splits its graduated licensing rules across three regions: New York City, Long Island (Nassau and Suffolk), and upstate, meaning everything north of the city line. The city rule is the strictest of the three, and there is one way out of it: a 17-year-old who completes a State Education Department approved driver education course and upgrades to a full Class D licence may then drive anywhere in the state.",
        trap: "'Any time, provided a licensed adult is with you' is what people assume by analogy with the permit rules, and supervision does not rescue a junior licence in the city.",
        excerptKey: "gdl-nyc-junior-licence-banned",
        commonlyMissed: true,
        sourceLabel: "NYS DMV - The Graduated License Law",
        sourceUrl: GDL_URL,
      },
      {
        id: "ny_s4_02",
        topic: "rules",
        question: "How should you position your vehicle for a right turn in New York?",
        choices: [
          "Get as far to the right as possible and turn into the right lane of the road you enter",
          "Stay in the centre of your lane and swing wide to clear the corner",
          "Move slightly left first to give the rear wheels room",
          "Use whichever lane is emptiest on the road you are entering",
        ],
        correctIndex: 0,
        explanation:
          "Get as far right as you can before the turn, do not make a wide sweeping turn, and unless signs say otherwise, enter the right lane of the new road.",
        context:
          "These positions come from the law, not from advice - the manual says so explicitly. Remember that your rear wheels track inside the path of the front wheels, closer to the kerb on a right turn, so watch for pedestrians, cyclists and moped riders on your right. Keep your wheels straight until the turn actually begins, and signal at least 100 feet ahead.",
        trap: "'Move slightly left first to give the rear wheels room' is what a tractor-trailer has to do, and in a car it invites someone to slip up your inside.",
        excerptKey: "turn-right-position",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s4_03",
        topic: "sharing",
        question:
          "How large can the blind spot be in front of a tractor with a long hood?",
        choices: ["About 5 feet", "About 10 feet", "There is none in front", "Up to 20 feet"],
        correctIndex: 3,
        explanation:
          "A long-hooded tractor can have a blind spot extending up to 20 feet ahead of it. Pulling in that close after passing puts you where the driver cannot see you at all.",
        context:
          "Large vehicles have deep blind spots directly behind them and much wider ones down both sides than a car does - the areas the manual calls no zones. They also take far longer to stop, partly because air brakes take time to transmit pressure from the tractor to the trailer. Make sure you can see the truck's whole front in your mirror before you move back in front of it.",
        trap: "'There is none in front' is the intuitive answer because the driver sits high up, and height is exactly what creates the near blind spot.",
        excerptKey: "truck-front-blind-spot",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s4_04",
        topic: "emergencies",
        question:
          "You are on a multi-lane interstate and a tow truck is stopped on the shoulder with amber lights flashing. What does New York's Move Over law require?",
        choices: [
          "Move over one lane only; there is no speed requirement",
          "Reduce speed, and move out of the lane next to it unless traffic or hazards make that unsafe",
          "Nothing, because a tow truck is not an emergency vehicle",
          "Stop until the tow truck has finished working",
        ],
        correctIndex: 1,
        explanation:
          "The law requires drivers to reduce speed on all roads when they encounter such a vehicle, and on multi-lane controlled-access roads to also move out of the adjacent lane unless that cannot be done safely.",
        context:
          "Both halves matter, and the slowing-down half is the one drivers most often miss. The protection covers authorised emergency vehicles and hazard vehicles displaying emergency lights, one or more amber hazard lights, or amber combined with blue - so tow trucks, snow ploughs and maintenance vehicles are included. It extends to vehicles showing volunteer blue or green lights, and to ordinary vehicles stopped on the shoulder of a parkway or controlled-access highway. A violation is a moving violation.",
        trap: "'Move over one lane only; there is no speed requirement' is the half-remembered version of the law, and reducing speed is required on every road, including ones where moving over is impossible.",
        excerptKey: "move-over-law",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s4_05",
        topic: "signs",
        question: "What does the shape of a New York route marker tell you?",
        choices: [
          "How many lanes the route carries",
          "Whether the route is a toll road",
          "The type of route - state, US or interstate",
          "The direction of travel",
        ],
        correctIndex: 2,
        explanation:
          "Route markers come in varied colours, and the shape identifies whether you are on a state, US, interstate or county route.",
        context:
          "Route signs sit in the family of information signage alongside green destination signs and blue service signs, none of which impose obligations. The obligations come from white regulation signs, and warnings come from yellow diamonds and orange work-area signs. Reading destination signs early is what keeps you from a last-minute lane change at an exit.",
        trap: "'Whether the route is a toll road' is a natural guess in a state with the Thruway, but toll status is signed separately, not encoded in the marker shape.",
        excerptKey: "sign-route-shape",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s4_06",
        topic: "safety",
        question: "You feel yourself getting drowsy on a long drive. What does the manual tell you to do?",
        choices: [
          "Pull off somewhere safe and take a nap of 15 to 45 minutes",
          "Open the windows and turn the radio up",
          "Push on to the next town and keep talking to your passenger",
          "Drink coffee and continue immediately, since caffeine works within a minute or two",
        ],
        correctIndex: 0,
        explanation:
          "Find a safe place away from traffic and take a brief nap of 15 to 45 minutes. It is the only measure that addresses the actual problem.",
        context:
          "The manual is explicit that you should not rely on the radio, an open window or other tricks to stay awake. Caffeine can help for a short while, but it takes around 30 minutes to reach the bloodstream, so it is not a substitute for stopping now. Prevention works better: sleep before a long trip, schedule a stop every 100 miles or two hours, and do not drive for at least 15 minutes after waking.",
        trap: "'Drink coffee and continue immediately' fails on the timing - the half hour the caffeine needs is the half hour in which you fall asleep.",
        excerptKey: "drowsy-nap",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s4_07",
        topic: "parking",
        question:
          "You want to park opposite a fire station driveway, on the other side of the road. How far away must you be?",
        choices: ["20 feet", "30 feet", "50 feet", "75 feet"],
        correctIndex: 3,
        explanation:
          "Seventy-five feet on the opposite side of the road. Directly beside the driveway the clearance is 20 feet - the wider figure exists because an appliance turning out needs room to swing.",
        context:
          "It sits among New York's other statewide clearances that apply with or without signs: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 30 feet from a traffic light, STOP sign or YIELD sign, 30 feet from a pedestrian safety area, and 50 feet from a railroad crossing. You also may not park in front of any driveway, on a sidewalk or crosswalk, on a bridge or in a tunnel, or on the roadside of another parked vehicle.",
        trap: "'20 feet' is the correct figure for the same side of the road, which is why the two get swapped - opposite the driveway you need almost four times as much.",
        excerptKey: "park-fire-station-20-75",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s4_08",
        topic: "impairment",
        question:
          "A passenger in your car is holding an open bottle of beer while you drive down a public road. What does New York law say?",
        choices: [
          "It is legal as long as the passenger is over 21",
          "It is a traffic infraction, for the passenger as well as the driver",
          "It is legal provided the driver has not been drinking",
          "It is legal in the back seat only",
        ],
        correctIndex: 1,
        explanation:
          "New York's open container law makes it a traffic infraction for a driver or a passenger in a vehicle on a public road to drink alcohol or to possess an open container of it.",
        context:
          "A first conviction carries a fine of up to $150, a mandatory surcharge, a crime victim assistance fee and possible imprisonment of 15 days, with heavier penalties for further offences within 18 months. The same infraction covers consuming marijuana or cannabis in a vehicle on a public road. Passengers in stretch limousines and other vehicles operating under a federal or state transportation permit are exempted.",
        trap: "'It is legal as long as the passenger is over 21' confuses the drinking age with the open container rule, which applies regardless of age.",
        excerptKey: "open-container",
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s4_09",
        topic: "rightOfWay",
        question:
          "You are halfway through an intersection when an ambulance appears behind you with its siren on. What should you do?",
        choices: [
          "Stop immediately where you are",
          "Reverse out of the intersection to clear it",
          "Drive out of the intersection first, then pull over to the right and stop",
          "Continue at normal speed until the ambulance passes",
        ],
        correctIndex: 2,
        explanation:
          "Clear the intersection before pulling over. Stopping inside it blocks the ambulance's most likely route and everyone else's as well.",
        context:
          "Otherwise the rule is to pull over to the right edge of the road and stop as soon as you safely can, from whichever direction the emergency vehicle is coming, including when it is heading toward you in the opposite lane. If you can hear a siren but cannot locate it, pull to the right and stop until you are sure it is not coming your way. Emergency drivers are permitted to break the ordinary rules, so their path is genuinely unpredictable.",
        trap: "'Stop immediately where you are' follows the letter of 'pull over and stop' while ignoring the specific carve-out for being inside an intersection.",
        excerptKey: "emergency-clear-intersection",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s4_10",
        topic: "speed",
        question: "May you exceed the speed limit briefly in order to complete a pass?",
        choices: [
          "No - you must not exceed the speed limit to pass another vehicle",
          "Yes, by up to 10 mph while alongside",
          "Yes, if the vehicle you are passing is travelling below the limit",
          "Yes, on roads with a limit of 55 mph or more",
        ],
        correctIndex: 0,
        explanation:
          "New York states it plainly: you may not exceed the speed limit to pass. If the pass cannot be completed within the limit, it is not a pass you should be making.",
        context:
          "The rest of the passing rules narrow it further. You may not pass on the left where your side has a solid yellow line, where you cannot return before reaching a solid line or before an oncoming vehicle comes within 200 feet, on the approach to a curve or hill crest you cannot see over, within 100 feet of a railroad crossing, or within 100 feet of a bridge, tunnel or viaduct where your view is obstructed.",
        trap: "'Yes, by up to 10 mph while alongside' is folk wisdom that exists in no state's rulebook, and it is the reasoning behind a great many head-on collisions.",
        excerptKey: "no-speeding-to-pass",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s4_11",
        topic: "licensing",
        question:
          "A 17-year-old with a New York junior licence lives in a county upstate. Where may they drive alone between 9 PM and 5 AM?",
        choices: [
          "Anywhere, since upstate has no night restriction",
          "Nowhere - all night driving must be supervised",
          "Anywhere within their home county",
          "Directly between home and employment, or home and a school course",
        ],
        correctIndex: 3,
        explanation:
          "Upstate at night, a junior licence holder may drive alone only directly between home and employment or home and a school course. Anything else must be supervised.",
        context:
          "Between 5 AM and 9 PM, an upstate junior licence holder may drive unaccompanied without those restrictions - which is what makes upstate the most permissive of the three regions. Long Island is tighter: unaccompanied driving there is limited to a defined list of trips at any hour. New York City is tightest of all, prohibiting junior licence driving outright. Proof of employment or enrolment has to be carried on the trips that rely on it.",
        trap: "'Anywhere, since upstate has no night restriction' is what people take away from the daytime rule; upstate is looser by day, not by night.",
        excerptKey: "gdl-upstate-night",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 1: Driver Licenses",
        sourceUrl: CH1,
      },
      {
        id: "ny_s4_12",
        topic: "signals",
        question: "A steady red X is showing above the lane you are in. What does it mean?",
        choices: [
          "Slow down, the lane is congested ahead",
          "Do not drive in this lane",
          "The lane is closed to trucks only",
          "The lane ahead is reserved for buses",
        ],
        correctIndex: 1,
        explanation:
          "A steady red X means the lane is not available to you at all. It is the most restrictive of the overhead lane control signals.",
        context:
          "The set runs steady red X (do not use this lane), steady yellow X (move out of it), flashing yellow X (left turns only), and green arrow (the lane is open). They are used where the direction or purpose of a lane changes during the day, and while lit they override the painted markings beneath them.",
        trap: "'Slow down, the lane is congested ahead' turns a prohibition into advice; these lights are frequently used to close a lane where a vehicle has broken down or work is under way.",
        excerptKey: "lane-control-red-x",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s4_13",
        topic: "rules",
        question:
          "You have passed a car on a two-lane road. What should you see before returning to the right lane?",
        choices: [
          "The passed car's headlights in your side mirror",
          "At least three car lengths of clear road ahead",
          "The front bumper of the car you passed, in your interior rear-view mirror",
          "The centre line disappearing behind you",
        ],
        correctIndex: 2,
        explanation:
          "Signal, then check the interior mirror until you can see the front bumper of the car you passed. That is the cue that you have enough room to come back in.",
        context:
          "Back it up with a quick look over your right shoulder to confirm you can see several feet of pavement between your car and the one you passed. The same shoulder-check discipline applies going out: mirrors leave blind spots on both sides, so you look over your left shoulder before pulling into the passing lane, never relying on mirrors alone.",
        trap: "'At least three car lengths of clear road ahead' measures the wrong thing - the risk is behind you, in how much room the car you just passed still has.",
        excerptKey: "return-after-passing",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s4_14",
        topic: "sharing",
        question: "What lighting must a bicycle carry when used at night in New York?",
        choices: [
          "A headlight visible from 500 feet ahead and a red tail light visible from 300 feet behind",
          "A headlight visible from 200 feet and a red tail light visible from 100 feet",
          "Reflectors only",
          "A white light at the front, with no rear light requirement",
        ],
        correctIndex: 0,
        explanation:
          "Five hundred feet to the front, three hundred feet to the rear. One of those lights must also be visible from at least 200 feet away on each side.",
        context:
          "A bicycle used on public roads at any time also needs adequate brakes and a bell or horn audible from at least 100 feet. Bicycles sold by dealers must carry wide-angle spoke-mounted reflectors or reflective tyres, a wide-angle rear reflector and pedal reflectors. As a driver, the practical consequence is that a legally equipped bicycle is visible a long way off - and an unlit one is effectively invisible.",
        trap: "'Reflectors only' describes the minimum a bike is sold with, not what the law requires once it is being ridden after dark.",
        excerptKey: "bicycle-lights",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s4_15",
        topic: "safety",
        question: "When must you dip your headlights from high beam to low beam in New York?",
        choices: [
          "Within 200 feet of an oncoming vehicle, or 500 feet of one ahead",
          "Only in built-up areas",
          "Within 300 feet of any other vehicle",
          "Within 500 feet of an oncoming vehicle, or within 200 feet of a vehicle ahead of you",
        ],
        correctIndex: 3,
        explanation:
          "Low beam within 500 feet of an oncoming vehicle and within 200 feet of one you are following - and the vehicle ahead counts even if it is in a different lane.",
        context:
          "The larger distance goes to the oncoming driver because your beams point straight into their eyes, while a driver ahead gets it via their mirrors. Dip for pedestrians too. If an oncoming driver does not dip, flash to high beam for a second and go back to low, and look toward the right edge of the road, using it as a guide until they pass, rather than staring into the glare.",
        trap: "The first option has the two distances swapped, which is the actual error - people remember both numbers and attach them to the wrong direction.",
        excerptKey: "low-beam-500-200",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s4_16",
        topic: "parking",
        question: "What does New York's rule against parking on the roadside of a parked vehicle prohibit?",
        choices: [
          "Parking within 15 feet of another car",
          "Double parking",
          "Parking facing against the flow of traffic",
          "Parking with two wheels on the kerb",
        ],
        correctIndex: 1,
        explanation:
          "Stopping beside an already parked car - double parking - is prohibited statewide, whether or not any sign says so.",
        context:
          "It is on the list of things you may not do anywhere: no parking, stopping or standing within 15 feet of a hydrant, on a sidewalk or in a crosswalk, in an intersection, on railroad tracks, on a bridge or in a tunnel, within 30 feet of a pedestrian safety area, or beside road works if you block traffic. None of these depend on signage, which is what catches out drivers who assume no sign means no rule.",
        trap: "'Parking facing against the flow of traffic' is a real offence in many places but is not what this particular prohibition covers.",
        excerptKey: "park-double-parking",
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s4_17",
        topic: "emergencies",
        question: "Your car stalls on a railroad crossing and a train is approaching. What should you do?",
        choices: [
          "Stay in the car and brace for the impact",
          "Try to restart the engine until the last possible moment",
          "Get everyone out and run toward the train, away from the tracks, at about 45 degrees",
          "Get out and run down the track in the direction the train is travelling",
        ],
        correctIndex: 2,
        explanation:
          "Everyone gets out, and you run toward the oncoming train but angled away from the track. Running that way keeps you clear of the debris the impact throws forward.",
        context:
          "Running down the track in the same direction as the train puts you directly in the path of your own car's wreckage. Once clear, find the Emergency Notification System sign at the crossing and call the number on it to report the stalled vehicle. If no train is coming, open a window to listen, try the engine, and if that fails shift to neutral and push the car off the tracks.",
        trap: "'Get out and run down the track in the direction the train is travelling' feels like running away from danger, and it is the exact direction the debris will travel.",
        excerptKey: "railroad-stall-run-toward-train",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s4_18",
        topic: "signs",
        question: "What does the solid line painted along the outer side of the road mark, and may you cross it?",
        choices: [
          "The edge of the roadway - and it is illegal to drive across it except where an official sign or an officer allows",
          "The edge of the roadway, which you may cross to let faster traffic pass",
          "A parking lane, which you may use when it is empty",
          "The boundary of a bicycle lane, which cars may cross when turning",
        ],
        correctIndex: 0,
        explanation:
          "The edge line marks where the travel lane ends and the shoulder begins. Driving across it is illegal unless a police officer or other authorised official directs you, or an official sign permits it.",
        context:
          "That rule is what makes passing on the shoulder illegal, however wide the shoulder looks. An edge line that angles in toward the centre of the road is telling you the road narrows ahead. Colour carries separate information: white lines divide traffic going the same way, yellow lines divide traffic going opposite ways.",
        trap: "'Which you may cross to let faster traffic pass' is a courtesy some drivers extend on rural roads, and it is an offence on its own.",
        excerptKey: "edge-line-illegal-to-cross",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s4_19",
        topic: "impairment",
        question:
          "Which contains the most alcohol: a 12-ounce beer, a 5-ounce glass of wine, a 12-ounce wine cooler, or 1 1/2 ounces of liquor?",
        choices: [
          "The liquor, by a wide margin",
          "The beer",
          "The wine",
          "They all contain roughly the same amount",
        ],
        correctIndex: 3,
        explanation:
          "Those four measures contain about the same amount of alcohol. What raises your BAC is the quantity of alcohol, not the drink it came in.",
        context:
          "For a 150-pound man each of those adds roughly .02 to his BAC, and his body clears about that much per hour. Women generally process alcohol more slowly and can hold a higher BAC for longer. Your BAC depends on how much you drink, over how long, and your weight - it does not depend on the type of drink, your fitness, or how well you believe you hold your liquor.",
        trap: "'The liquor, by a wide margin' is the reason people switch to beer and believe they are safer; the serving sizes are calibrated to be equivalent.",
        excerptKey: "standard-drink-equivalence",
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s4_20",
        topic: "rightOfWay",
        question:
          "A private car with a flashing blue light is approaching. What is your obligation?",
        choices: [
          "You must pull over and stop as for an ambulance",
          "You are not required to yield, though it is courteous to do so if you safely can",
          "You must stop and remain stopped until it has passed",
          "You must yield only at intersections",
        ],
        correctIndex: 1,
        explanation:
          "Blue lights mark a volunteer firefighter's own vehicle, and green lights a volunteer ambulance or rescue member's. Neither vehicle is an authorised emergency vehicle, so there is no duty to yield - only good manners.",
        context:
          "Drivers of those vehicles must obey every traffic law themselves. Amber lights on snow ploughs, tow trucks, rural mail vehicles and school buses are warnings of a hazard, not a claim of priority. Note the separate obligation, though: New York's Move Over law does require you to slow down and, where possible, move over for vehicles displaying blue, green or amber lights when they are stopped at the roadside.",
        trap: "'You must pull over and stop as for an ambulance' is the safest-sounding answer and is wrong on the law - the volunteer's car has no right-of-way while moving.",
        excerptKey: "blue-green-not-authorized",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s4_21",
        topic: "licensing",
        question: "What is the minimum liability insurance New York requires for most vehicles?",
        choices: [
          "$15,000 per person for injury and $5,000 for property damage",
          "$50,000 per person for injury and $25,000 for property damage",
          "$25,000 for injury to one person, $50,000 for injury to two or more, and $10,000 for property damage",
          "$100,000 for injury to one person and $50,000 for property damage",
        ],
        correctIndex: 2,
        explanation:
          "The floor is $25,000 for injury to one person, $50,000 for injury to two or more, and $10,000 for property damage, with $50,000 and $100,000 figures applying where death results.",
        context:
          "Coverage has to stay in force for as long as the vehicle is registered, even if you never drive it, and the DMV does not accept out-of-state policies for a New York registration. Let it lapse without surrendering the plates and you face civil penalties per day and possible registration suspension; leave it uninsured for 90 days and your driver licence is suspended as well. Driving or letting someone else drive an uninsured vehicle means a licence revocation of at least a year.",
        trap: "'$15,000 per person for injury and $5,000 for property damage' is roughly the minimum in several other states, and the figures are considerably lower than New York's.",
        excerptKey: "insurance-minimums",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 3: Owning a Vehicle",
        sourceUrl: CH3,
      },
      {
        id: "ny_s4_22",
        topic: "rules",
        question: "When is a three-point turn the manoeuvre New York expects you to use?",
        choices: [
          "To turn around on a narrow two-way street where it is not prohibited",
          "To turn around on a limited access expressway",
          "To reverse direction at a signalised intersection",
          "To leave a parallel parking space on a hill",
        ],
        correctIndex: 0,
        explanation:
          "A three-point turn is for reversing direction on a narrow two-way street, unless it is prohibited there. You may be asked to perform one on your road test.",
        context:
          "The sequence is: signal right, pull over and stop, signal left, check all directions, turn across the road until you face the far kerb, then look behind, reverse with the wheel turned right until you are near the other kerb, and finally pull forward with the wheel turned left. A U-turn, by contrast, is banned on any limited access expressway, in New York City business districts, in school zones, and anywhere drivers cannot see you from 500 feet either way.",
        trap: "'To turn around on a limited access expressway' is exactly where reversing direction is never permitted, by any method.",
        excerptKey: "three-point-turn",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s4_23",
        topic: "safety",
        question: "What is hydroplaning?",
        choices: [
          "Losing brake effectiveness because the discs are wet",
          "Steering pull caused by water in one wheel well",
          "The rear of the car sliding out on a wet bend",
          "Tyres riding up on water lying on top of the road, so traction and steering control are lost",
        ],
        correctIndex: 3,
        explanation:
          "In heavy rain the tyres can start riding on the film of water on the road surface instead of gripping it, which means a complete loss of traction and of steering control.",
        context:
          "It happens most readily at higher speeds, but worn tread or under-inflated tyres bring it on sooner - which is one reason the 2/32nds of an inch tread minimum matters. The answer is to slow down in heavy rain, and to slow down further the moment the car feels like it is losing grip. Deep tread on good tyres is the main defence.",
        trap: "'Losing brake effectiveness because the discs are wet' is a real phenomenon, but wet brakes can be dried by riding the pedal lightly - hydroplaning cannot be fixed by anything except speed.",
        excerptKey: "hydroplaning",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s4_24",
        topic: "sharing",
        question: "You are approaching a horse being ridden along the edge of a road. What does the law say?",
        choices: [
          "Sound your horn to let the rider know you are there",
          "It is illegal to sound your horn when approaching or passing a horse",
          "Horses may not be ridden on public roads at all",
          "Riders must dismount and lead the horse when a vehicle approaches",
        ],
        correctIndex: 1,
        explanation:
          "Sounding your horn near a horse is illegal in New York. A startled horse is a danger to its rider, to you and to everyone else on the road.",
        context:
          "Horse riders are subject to and protected by the rules of the road. They must ride single file near the right kerb, road edge or shoulder. You are required to pass at a reasonable speed and at a reasonable distance. The same instinct applies to the other vulnerable road users: give cyclists, moped riders and pedestrians space rather than noise.",
        trap: "'Sound your horn to let the rider know you are there' is a courtesy that works for a cyclist and is specifically banned around a horse.",
        excerptKey: "horse-no-horn",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s4_25",
        topic: "signals",
        question:
          "Outside New York City, when may you turn left at a steady red light?",
        choices: [
          "Never - only right turns are permitted on red",
          "Whenever the intersection is clear",
          "When you are turning from a one-way road into another one-way road, after a full stop and yielding",
          "Only when a sign specifically permits it",
        ],
        correctIndex: 2,
        explanation:
          "New York allows a left on red only from a one-way road onto another one-way road, and only after a complete stop and yielding to oncoming traffic and pedestrians.",
        context:
          "The permission disappears if a NO TURN ON RED sign is posted, if you are facing a red arrow, or if any other sign, signal or marking prevents the turn. Inside New York City the position reverses entirely: no turn on red at all unless a sign permits it. And a school bus carrying pupils may not turn right on any red light, anywhere in the state.",
        trap: "'Never - only right turns are permitted on red' is the rule in a number of other states, and New York is one of the places where the one-way-to-one-way left is allowed.",
        excerptKey: "left-turn-on-red",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s4_26",
        topic: "parking",
        question: "When may you use a parking space reserved for people with disabilities?",
        choices: [
          "Only with the permit or plates, and only when the person they were issued to is in the vehicle",
          "With the permit or plates, whoever is driving",
          "Briefly, if you are dropping someone off",
          "When no other space is available within a reasonable distance",
        ],
        correctIndex: 0,
        explanation:
          "You need the permit or the special plates, and the person they were issued to must actually be in the vehicle at the time.",
        context:
          "The law covers spaces provided by local ordinance on streets and highways, and spaces held for special use under state law in shopping centres with five or more stores and 20 or more off-street public spaces. Permits and plates issued by other states are recognised. Do not park in the diagonally striped areas beside reserved bays either - they are the access room for wheelchairs and adapted vehicles. Making a false statement to obtain a permit brings civil penalties of $250 to $1,000.",
        trap: "'With the permit or plates, whoever is driving' is how borrowed permits get used, and the person the permit belongs to has to be present.",
        excerptKey: "disabled-parking-permit",
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s4_27",
        topic: "emergencies",
        question: "Your vehicle goes off a bridge into deep water. How should you get out?",
        choices: [
          "Open a door immediately, before the pressure builds",
          "Wait for the car to fill completely, then open a door",
          "Break the windshield with the head restraint",
          "Release your seat belt and get out through a window",
        ],
        correctIndex: 3,
        explanation:
          "Release the belt and leave through a window. Opening a door lets water rush in and can turn the car over on top of you.",
        context:
          "A car will normally float for a short time, so there is usually a window of opportunity to get out. If it sinks first, move to the back seat, where an air pocket tends to form as the engine's weight pulls the front down, then take a breath and go out through a window. As you rise, let air escape in small breaths through your nose or lips rather than holding it in.",
        trap: "'Open a door immediately, before the pressure builds' sounds like a race against physics, and the inrush of water is precisely what makes the door the wrong exit.",
        excerptKey: "going-into-water",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s4_28",
        topic: "signs",
        question: "A diamond symbol is painted in the lane beside you. What does it indicate?",
        choices: [
          "A lane that becomes a turning lane at the next intersection",
          "A lane reserved for buses, high-occupancy vehicles, bicycles or other special vehicles",
          "A lane that ends shortly ahead",
          "A lane where overtaking is prohibited",
        ],
        correctIndex: 1,
        explanation:
          "The diamond marks a reserved lane - buses, car pools and van pools, bicycles or other designated vehicles. You may not use it unless your vehicle meets the posted requirements while they are in effect.",
        context:
          "The restriction is time-limited on many roads, so read the signs to see when it applies. On city streets, sections of the solid white line beside a diamond lane are sometimes replaced by broken white lines, and there a non-qualifying vehicle may enter the lane if it is turning right at the next intersection. Reserved lanes exist to move the highest-occupancy vehicles fastest on limited road space.",
        trap: "'A lane that becomes a turning lane at the next intersection' is marked with arrows, not diamonds - the diamond is about who may be in the lane, not where it goes.",
        excerptKey: "diamond-lane",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s4_29",
        topic: "licensing",
        question: "What standard must you meet on the New York DMV vision test?",
        choices: [
          "20/20 vision in both eyes without correction",
          "20/60 vision in both eyes combined",
          "20/40 vision in at least one eye, with or without corrective lenses",
          "20/40 vision in both eyes without corrective lenses",
        ],
        correctIndex: 2,
        explanation:
          "You need 20/40 vision in at least one eye, and corrective lenses count. If you cannot meet it, or you wear special lenses, the DMV will advise you separately.",
        context:
          "The vision test comes alongside the written test when you apply for a permit. The written test itself is 20 questions, requiring at least 14 correct and at least two of the four road sign questions right. Renewing by mail or online also requires proof that you passed a vision test recently, documented by a licensed health care professional.",
        trap: "'20/20 vision in both eyes without correction' is the standard for some aviation and law-enforcement roles, and it is far above what a driver licence requires.",
        excerptKey: "vision-test-2040",
        sourceLabel: "New York State Driver's Manual - Chapter 1: Driver Licenses",
        sourceUrl: CH1,
      },
      {
        id: "ny_s4_30",
        topic: "impairment",
        question:
          "What are the consequences of a first conviction for using a hand-held mobile phone while driving in New York?",
        choices: [
          "A fine of up to $200 and five points on your licence",
          "A warning for a first offence",
          "A fine only, with no points",
          "Two points and a $50 fine",
        ],
        correctIndex: 0,
        explanation:
          "Speaking into or listening to a hand-held phone while driving is a traffic infraction: a first offence brings a fine of up to $200 and five licence points.",
        context:
          "Texting or emailing on a portable device is dealt with separately, with fines rising from $200 to $250 to $450 across three offences within 18 months. The phone may be held only to start or end a call. Junior and probationary licence holders face a 120-day suspension for a first conviction and revocation of at least a year for a further one soon after restoration. Five points is a substantial share of the eleven that trigger suspension.",
        trap: "'Two points and a $50 fine' undersells it badly, and the five-point figure is what makes a single phone conviction so damaging to a young driver's record.",
        excerptKey: "handheld-phone-penalty",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s4_31",
        topic: "rightOfWay",
        question:
          "You are turning right at a green light and a pedestrian steps into the crosswalk on the road you are entering. What must you do?",
        choices: [
          "Complete the turn quickly before they reach your path",
          "Proceed, since the green light gives you the turn",
          "Sound your horn and continue",
          "Yield and let them cross",
        ],
        correctIndex: 3,
        explanation:
          "You must yield to pedestrians in crosswalks on both your left and your right before turning, marked or unmarked. A green light does not change that.",
        context:
          "The manual singles out left turns as especially dangerous, noting that more than 35% of New York City pedestrian injury crashes happen while a driver is turning left. Before any turn, look in every direction for people crossing, and then look again. Turning right on red carries a further check: look right and behind for a cyclist coming up on your right rear before you move.",
        trap: "'Complete the turn quickly before they reach your path' is a bet on somebody else's walking speed, made from a vehicle whose A-pillar is probably hiding them.",
        excerptKey: "row-pedestrians-crosswalk",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s4_32",
        topic: "sharing",
        question: "Where are mopeds permitted to operate in New York?",
        choices: [
          "On expressways, but only in the right lane",
          "Not on expressways or other controlled-access highways unless posted signs permit it",
          "On any road open to motorcycles",
          "On expressways only when the moped is Class A",
        ],
        correctIndex: 1,
        explanation:
          "Mopeds are barred from expressways and other controlled-access highways unless a posted sign allows them, whatever their class.",
        context:
          "Within ordinary roads the class matters: Class A mopeds may use any lane and any part of a lane, while Class B and C are restricted to the right lane as far right as practical, except when turning left. All three classes must be registered and must have the headlight on when in use. Approach a moped with the same caution you would a bicycle.",
        trap: "'On expressways only when the moped is Class A' correctly identifies that Class A has the widest privileges on ordinary roads, and none of those privileges reach an expressway.",
        excerptKey: "moped-not-on-expressway",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s4_33",
        topic: "signs",
        question: "What is a warning sign telling you?",
        choices: [
          "That a rule is in force which you must obey",
          "That a service or facility is available ahead",
          "That you are approaching a hazardous location or one with a special rule",
          "That the road ahead is closed",
        ],
        correctIndex: 2,
        explanation:
          "A warning sign tells you a hazardous location, or one where a special rule applies, is coming up - so you can adjust before you arrive rather than after.",
        context:
          "Warning signs are yellow diamonds with black symbols. Some are paired with a yellow and black advisory speed panel, which recommends a reduced speed for that feature. Do not confuse advice with law: the recommended speed is a warning, while the posted limit is the enforceable number - though driving faster than the advisory in bad conditions can still be an unreasonable speed.",
        trap: "'That a rule is in force which you must obey' belongs to the white regulation signs; the two categories are distinguished by shape and colour precisely so you can tell at a glance.",
        excerptKey: "sign-warning-meaning",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s4_34",
        topic: "safety",
        question: "During what period may studded tyres be used in New York?",
        choices: [
          "October 16 through April 30",
          "November 1 through March 31",
          "At any time of year",
          "December 1 through April 15",
        ],
        correctIndex: 0,
        explanation:
          "Metal-studded tyres are legal in New York only between October 16 and April 30. Outside that window they may not be used.",
        context:
          "Winter preparation also means proper snow tyres fitted before the first storm and never mixing radial and non-radial tyres on the same vehicle. Before driving in ice or snow, clear the whole car - headlights, tail lights, wipers, windows, hood and roof - and fill the washer reservoir with a fluid that will not freeze. Bridges, ramps and overpasses freeze before the rest of the road.",
        trap: "'At any time of year' is what many drivers assume, and studs chew up bare pavement, which is why the window is fixed by law.",
        excerptKey: "studded-tires-dates",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s4_35",
        topic: "rules",
        question:
          "You are on a two-way road approaching a bridge, and your view beyond it is obstructed. When may you pass?",
        choices: [
          "Once you are past the near end of the bridge",
          "If the vehicle you want to pass is travelling slowly",
          "As long as you can complete the pass before the bridge",
          "Not within 100 feet of the bridge",
        ],
        correctIndex: 3,
        explanation:
          "Passing on the left is prohibited within 100 feet of a bridge, tunnel or viaduct on a two-way road where your view is obstructed.",
        context:
          "The same 100-foot restriction applies within 100 feet of a railroad crossing on a two-way roadway. The rest of the no-passing list covers a solid yellow line on your side, being unable to return before reaching a solid line or before an oncoming vehicle comes within 200 feet, an approach to a curve or hill crest you cannot see over, and any pass that would interfere with oncoming traffic.",
        trap: "'As long as you can complete the pass before the bridge' assumes you can judge the closing speed of a car you cannot yet see, which is exactly what the obstruction prevents.",
        excerptKey: "no-pass-bridge-tunnel",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail",
    difficulty: "hard",
    description:
      "Exact figures, look-alike rules, and the regional junior licence differences that catch out even people who grew up here. Work through this one slowly.",
    questions: [
      {
        id: "ny_s5_01",
        topic: "licensing",
        question:
          "A 17-year-old with a junior licence lives in Suffolk County. At 2 PM on a Tuesday, when may they drive without a supervising driver?",
        choices: [
          "Anywhere, since it is between 5 AM and 9 PM",
          "Anywhere within Nassau and Suffolk counties",
          "Nowhere - all driving on Long Island must be supervised",
          "Only directly between home and work, a work-study programme, an evening high school or college course, a driver education course, or farm employment",
        ],
        correctIndex: 3,
        explanation:
          "On Long Island a junior licence holder may drive alone during the day only on that defined list of trips. Everything else must be supervised.",
        context:
          "This is the middle rung of New York's three-region ladder and the one most people get wrong. Upstate, a junior licence holder may drive unaccompanied without restriction between 5 AM and 9 PM. On Long Island the daytime freedom is limited to the listed destinations. In New York City a junior licence does not permit driving at all. At night on Long Island the list narrows further, dropping ordinary employment. Proof of employment or enrolment must be carried.",
        trap: "'Anywhere, since it is between 5 AM and 9 PM' applies the upstate daytime rule to Long Island, which is precisely the mistake the three-region structure invites.",
        excerptKey: "gdl-long-island-day",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 1: Driver Licenses",
        sourceUrl: CH1,
      },
      {
        id: "ny_s5_02",
        topic: "rules",
        question:
          "You are about to pass on a two-lane road. How much room must you leave between your return to the right lane and any oncoming vehicle?",
        choices: [
          "You must be able to return before an oncoming vehicle comes within 100 feet",
          "You must be able to return before an oncoming vehicle comes within 200 feet",
          "You must be able to return before an oncoming vehicle comes within 300 feet",
          "Whatever gap lets you finish without braking",
        ],
        correctIndex: 1,
        explanation:
          "Two hundred feet. If you cannot get safely back into the right lane before an oncoming vehicle closes to within that distance, you may not start the pass.",
        context:
          "The 200-foot figure is one of several passing thresholds worth separating. Passing on the left is also banned within 100 feet of a railroad crossing on a two-way road, and within 100 feet of a bridge, tunnel or viaduct where your view is blocked. You may not pass with a solid yellow line on your side, nor where you cannot see around or over a curve or hill crest, nor at all if the pass would interfere with oncoming traffic.",
        trap: "'Whatever gap lets you finish without braking' is how the decision actually gets made in the moment, and the law sets a fixed distance precisely because that judgement is unreliable at closing speeds above 100 mph.",
        excerptKey: "no-pass-oncoming-200-feet",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s5_03",
        topic: "signals",
        question:
          "A school bus with pupils on board is stopped at a red light and wants to turn right. What may it do?",
        choices: [
          "It may not turn right on any red light",
          "It may turn right on red like any other vehicle, after stopping",
          "It may turn right on red only outside New York City",
          "It may turn right on red only if the pupils are seated",
        ],
        correctIndex: 0,
        explanation:
          "A school bus carrying pupils may not turn right on any red light anywhere in New York, even where the ordinary right-on-red permission applies.",
        context:
          "It sits alongside the other limits on turning at a red: nothing may turn where a NO TURN ON RED sign or any other sign, signal or marking forbids it, or where you are facing a red arrow. In New York City no vehicle may turn on red at all unless a sign permits it. Elsewhere in the state a right on red is allowed after a full stop and yielding, and a left on red only from one one-way road onto another.",
        trap: "'It may turn right on red only outside New York City' correctly recalls the city rule for ordinary vehicles and misses that the school bus prohibition is statewide.",
        excerptKey: "school-bus-no-right-on-red",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s5_04",
        topic: "parking",
        question: "How far from a pedestrian safety area may you park, stop or stand?",
        choices: ["15 feet", "20 feet", "30 feet, unless another distance is marked", "50 feet"],
        correctIndex: 2,
        explanation:
          "Thirty feet, unless the area is marked with a different distance. It keeps the approach to the refuge clear so people using it can be seen.",
        context:
          "New York's parking clearances sit close enough together that they have to be learned as a set: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway and 75 feet from one opposite, 30 feet from a traffic light, STOP or YIELD sign, 30 feet from a pedestrian safety area, and 50 feet from a railroad crossing. None of them require a sign to be enforceable.",
        trap: "'20 feet' is the crosswalk figure and the fire-station figure, so it is the number that gets reached for by default when the memory is fuzzy.",
        excerptKey: "park-safety-area-30-feet",
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s5_05",
        topic: "sharing",
        question: "What audible warning device must a bicycle used on New York public highways have?",
        choices: [
          "None is required",
          "A whistle audible from 50 feet",
          "An electronic horn only",
          "A horn or bell that can be heard from at least 100 feet away",
        ],
        correctIndex: 3,
        explanation:
          "A bicycle on public highways needs adequate brakes and a horn or bell audible from at least 100 feet.",
        context:
          "The night lighting requirements are separate: a headlight visible from 500 feet ahead and a red tail light visible from 300 feet behind, with one of them also visible from 200 feet to each side. Cyclists must ride in a bicycle lane where one exists and otherwise stay near the right kerb or shoulder, may move left to turn or avoid a hazard, and may not ride more than two abreast in a lane.",
        trap: "'None is required' is the assumption behind most drivers' surprise when a cyclist rings a bell at them - New York has required the device for a long time.",
        excerptKey: "bicycle-brakes-and-bell",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s5_06",
        topic: "impairment",
        question:
          "A driver is convicted of aggravated driving while intoxicated at a BAC of .19. What is the minimum licence action?",
        choices: [
          "A 90-day suspension",
          "A revocation of at least one year",
          "A six-month revocation",
          "An 18-month suspension",
        ],
        correctIndex: 1,
        explanation:
          "Aggravated DWI applies at .18 or above and carries a minimum one-year revocation, alongside a fine of $1,000 to $2,500 and up to a year in jail on a first offence.",
        context:
          "The ladder of licence actions runs alongside the BAC ladder. DWAI, over .05 up to .07, brings a 90-day suspension. DWI at .08 or more, and driving while ability impaired by drugs, bring a minimum six-month revocation. Aggravated DWI at .18 or more brings a minimum one-year revocation. A second offence within ten years is a class E felony in each case, with the revocation periods extended.",
        trap: "'A six-month revocation' is the DWI figure, and mixing the two is easy because both are revocations rather than suspensions.",
        excerptKey: "agg-dwi-revocation",
        sourceLabel: "New York State Driver's Manual - Chapter 2: How to Keep Your License",
        sourceUrl: CH2,
      },
      {
        id: "ny_s5_07",
        topic: "rightOfWay",
        question:
          "A car with a flat tyre is stopped on the shoulder of a parkway, with no lights showing. Does the Move Over law apply?",
        choices: [
          "No, it applies only to emergency and hazard vehicles",
          "No, because no warning lights are displayed",
          "Yes - drivers must move over for any vehicle stopped on the shoulder of a parkway or controlled-access highway",
          "Only if a person is standing outside the vehicle",
        ],
        correctIndex: 2,
        explanation:
          "New York's Move Over law extends beyond emergency and hazard vehicles: it covers ordinary vehicles parked, stopped or standing on the shoulder or any part of a parkway or controlled-access highway.",
        context:
          "The law's core requirement is to reduce speed on all roads when you come upon a protected vehicle, and on parkways, interstates and other multi-lane controlled-access roads also to move out of the lane next to it unless traffic or hazards make that unsafe. It covers vehicles with emergency lights, one or more amber hazard lights, amber combined with blue, and vehicles showing volunteer blue or green lights. A violation is a moving violation.",
        trap: "'No, because no warning lights are displayed' is the reasoning most drivers apply, and the extension to all stopped vehicles on controlled-access roads is the part that is least well known.",
        excerptKey: "move-over-all-stopped",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s5_08",
        topic: "safety",
        question:
          "A 12-year-old passenger in your car is not wearing a seat belt. Who is penalised, and how?",
        choices: [
          "The driver, who faces a fine of $25 to $100 and three points for each violation",
          "The child's parent, whether or not they are present",
          "The passenger, who is fined up to $50",
          "Nobody - the requirement is advisory for children over 8",
        ],
        correctIndex: 0,
        explanation:
          "The driver is responsible for every passenger under 16 being properly restrained, and faces a fine of $25 to $100 plus three licence points for each violation.",
        context:
          "Passengers aged 16 and over are personally liable instead, with a fine of up to $50, and the driver is separately fined up to $50 for not wearing their own belt. New York is a primary enforcement state, so an officer may stop and ticket you for a belt violation alone, with no other offence needed. The requirement covers visiting drivers from outside the state.",
        trap: "'Nobody - the requirement is advisory for children over 8' misreads the age 8 threshold, which changes the type of restraint required, not whether one is required.",
        excerptKey: "belt-driver-responsible-under-16",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s5_09",
        topic: "signs",
        question: "The edge line ahead of you angles in toward the centre of the road. What is it telling you?",
        choices: [
          "A passing lane is beginning",
          "The shoulder is unsafe here",
          "A junction is approaching from the right",
          "The road is narrower ahead",
        ],
        correctIndex: 3,
        explanation:
          "An edge line that angles toward the centre of the road is marking a narrowing. The travel lane is about to get tighter.",
        context:
          "The edge line ordinarily shows where the travel lane ends and the shoulder begins, and it is illegal to drive across it except where an officer directs you or an official sign allows it. Lane colours carry separate meaning: white between lanes going the same way, yellow between opposing streams. Learning what the paint says is worth as much on the test as learning the signs.",
        trap: "'A passing lane is beginning' is the opposite situation and would be shown by the edge line moving outward, not inward.",
        excerptKey: "edge-line-angles-in",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s5_10",
        topic: "speed",
        question:
          "How many speeding or misdemeanour traffic convictions, over what period, bring a revocation of at least six months in New York?",
        choices: [
          "Two within 12 months",
          "Three within 18 months, counted from the dates of violation",
          "Four within 24 months",
          "Three within 12 months, counted from the dates of conviction",
        ],
        correctIndex: 1,
        explanation:
          "Three speeding or misdemeanour traffic convictions within 18 months bring a revocation of at least six months, and the 18 months is measured from the violation dates rather than the conviction dates.",
        context:
          "That sits alongside the point system rather than inside it: 11 or more points in 24 months triggers a suspension separately, and six or more points in 18 months triggers a Driver Responsibility Assessment. Other mandatory revocations of at least six months follow three convictions for passing a stopped school bus within three years, one conviction for leaving the scene of an injury or fatal crash, and one speed contest conviction.",
        trap: "'Three within 12 months, counted from the dates of conviction' gets both halves wrong in the way people usually do - the window is longer, and it runs from when you offended, not when the court got round to you.",
        excerptKey: "three-speeding-18-months",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 2: How to Keep Your License",
        sourceUrl: CH2,
      },
      {
        id: "ny_s5_11",
        topic: "emergencies",
        question:
          "How does New York treat leaving the scene of a crash that involved only property damage, compared with one that involved injury?",
        choices: [
          "Both are traffic violations",
          "Both are criminal violations",
          "Property damage is a traffic violation; injury or a fatality is a criminal violation",
          "Property damage is not an offence if you leave your details",
        ],
        correctIndex: 2,
        explanation:
          "Leaving the scene of a property-damage crash is a traffic violation. Leaving the scene of one involving personal injury or a fatality is a criminal violation.",
        context:
          "Either way you must stop - the level of damage is irrelevant to that. You exchange your name, address, licence number, registration and insurance details, and you show your insurance card if asked. If injury or death is involved, the police must be notified immediately. A conviction for leaving the scene of a personal injury or fatal crash carries a mandatory licence revocation of at least six months and five points.",
        trap: "'Property damage is not an offence if you leave your details' describes the parked-car rule, where you must try to find the owner or notify the police - not a licence to drive off.",
        excerptKey: "crash-leaving-scene",
        sourceLabel: "New York State Driver's Manual - Chapter 12: If You Are in a Traffic Crash",
        sourceUrl: CH12,
      },
      {
        id: "ny_s5_12",
        topic: "rules",
        question: "A single broken line separates your lane from the next. What does it allow?",
        choices: [
          "Passing or changing lanes if you can do so safely without interfering with traffic",
          "Passing only, not lane changing",
          "Changing lanes only when an obstruction makes it necessary",
          "Neither passing nor lane changing",
        ],
        correctIndex: 0,
        explanation:
          "A single broken line is the most permissive marking: pass or change lanes whenever you can do it safely and without interfering with other traffic.",
        context:
          "The four patterns run in order of permissiveness. Broken: free to pass or change lanes when safe. Solid paired with broken: the solid side may not pass, though it may cross to turn left into a driveway. Single solid: cross only when an obstruction or traffic conditions make it necessary. Double solid: no passing and no lane changing, though a left turn to enter or leave the highway is still allowed.",
        trap: "'Changing lanes only when an obstruction makes it necessary' is the single solid line rule - one line, two very different permissions depending on whether it is broken.",
        excerptKey: "line-one-broken",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s5_13",
        topic: "licensing",
        question:
          "A junior permit or licence holder is convicted of a texting or cell phone violation. What happens?",
        choices: [
          "Five points and a fine, as for any other driver",
          "A 60-day suspension",
          "A warning for a first conviction",
          "A 120-day suspension",
        ],
        correctIndex: 3,
        explanation:
          "A junior permit or licence is suspended for 120 days on a first conviction for a texting or phone violation - four times the length of the ordinary junior suspension for a serious traffic violation.",
        context:
          "A further conviction within six months of the licence being restored brings revocation of at least a year. Junior holders also face a 60-day suspension for one serious traffic violation - meaning one carrying three or more points - or for two other violations. Probationary licence holders aged 18 and over are treated the same way on phone offences.",
        trap: "'Five points and a fine, as for any other driver' is what the points table alone would suggest, and junior drivers get the licence action on top rather than instead.",
        excerptKey: "junior-texting-120-days",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 2: How to Keep Your License",
        sourceUrl: CH2,
      },
      {
        id: "ny_s5_14",
        topic: "sharing",
        question:
          "In fatal crashes involving a car and a large truck, who most often contributes to the cause?",
        choices: [
          "The truck driver, in about six cases out of ten",
          "The car driver, in more than 60 percent of cases",
          "Neither - most are caused by road or weather conditions",
          "Responsibility is split about evenly",
        ],
        correctIndex: 1,
        explanation:
          "In more than 60 percent of fatal car-and-truck crashes, it is the car driver rather than the truck driver who contributes to the cause. Four times out of five, it is the car driver who dies.",
        context:
          "The statistic exists to change how you drive around trucks rather than to allocate blame. Stay out of the deep blind spots behind and beside them, and the up-to-20-foot one in front of a long-hooded tractor. Allow for the extra distance air brakes take to stop a loaded trailer. Do not cut in front after passing until you can see the truck's whole front in your mirror, and never try to squeeze past one that is reversing into a loading bay.",
        trap: "'The truck driver, in about six cases out of ten' is the intuitive answer and inverts the finding exactly.",
        excerptKey: "truck-crash-responsibility",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s5_15",
        topic: "signals",
        question: "What exactly does a steady green light authorise?",
        choices: [
          "Priority over every other movement at the intersection",
          "Entry without checking, provided you are within the speed limit",
          "Going ahead, while still yielding to other traffic at the intersection as the law requires",
          "Going ahead, unless a pedestrian is waiting on the far kerb",
        ],
        correctIndex: 2,
        explanation:
          "A steady green means go, but you still have to yield to other traffic at the intersection where the law requires it - a vehicle already inside, for example, or oncoming traffic if you are turning left.",
        context:
          "Signals cannot resolve every conflict, which is why right-of-way rules exist alongside them. A green does not permit you to enter an intersection you cannot clear, does not give a left turn priority over oncoming traffic, and does not relieve you of yielding to pedestrians in the crosswalk on either side of your turn. A traffic officer's direction overrides the green entirely.",
        trap: "'Priority over every other movement at the intersection' is what a green light feels like, and it is the belief behind the majority of intersection collisions.",
        excerptKey: "signal-steady-green",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s5_16",
        topic: "parking",
        question: "How does New York define parking, as distinct from standing and stopping?",
        choices: [
          "A vehicle at a halt, occupied or not, other than temporarily to load or unload merchandise or passengers",
          "A vehicle left unoccupied at the kerb",
          "A vehicle at a halt for more than five minutes",
          "A vehicle at a halt with the engine switched off",
        ],
        correctIndex: 0,
        explanation:
          "Parking is a vehicle stopped, whether or not anyone is in it, other than temporarily for loading or unloading goods or people. Whether the driver is present is irrelevant.",
        context:
          "Standing is the same thing narrowed to receiving or discharging passengers. Stopping is simply bringing the vehicle to a halt, even briefly. The three signs match the three definitions, running from most to least permissive: NO PARKING, NO STANDING, NO STOPPING. Getting the definitions straight is what makes the signs memorable.",
        trap: "'A vehicle left unoccupied at the kerb' is the everyday meaning of parking, and the legal definition explicitly covers occupied vehicles too.",
        excerptKey: "parking-definition",
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s5_17",
        topic: "impairment",
        question: "What licence action follows a first conviction for driving while ability impaired by alcohol?",
        choices: [
          "A six-month revocation",
          "A one-year revocation",
          "A 30-day suspension",
          "A 90-day suspension",
        ],
        correctIndex: 3,
        explanation:
          "DWAI - more than .05 up to .07 - is a traffic infraction, and a first offence carries a 90-day suspension along with a fine of $300 to $500 and up to 15 days in jail.",
        context:
          "The distinction between suspension and revocation matters. A suspension ends and the licence comes back, usually after a termination fee. A revocation cancels the licence, and you must reapply to the DMV once the period is over, with no guarantee of success. DWI and DWAI by drugs bring a minimum six-month revocation; aggravated DWI at .18 or above brings at least a year.",
        trap: "'A six-month revocation' is the DWI figure. The pairing of two different words with two different numbers is exactly where this gets muddled.",
        excerptKey: "dwai-suspension",
        sourceLabel: "New York State Driver's Manual - Chapter 2: How to Keep Your License",
        sourceUrl: CH2,
      },
      {
        id: "ny_s5_18",
        topic: "safety",
        question:
          "You are following a tractor-trailer on a wet road. How large should your following gap be?",
        choices: [
          "The usual two seconds, since the truck will stop more slowly than you",
          "At least three or four seconds",
          "One second per 10 mph of speed",
          "Two car lengths for every 10 mph",
        ],
        correctIndex: 1,
        explanation:
          "New York tells you to increase the two-second count to at least three or four seconds in bad weather and when following large trucks - and here you have both.",
        context:
          "The two-second rule works by picking a fixed object ahead and counting from the moment the vehicle in front passes it. Reaching the object before you finish the count means you are too close. Behind a truck the extra time also buys you sight lines: sitting close behind a trailer means you cannot see the road ahead at all, and the truck driver cannot see you.",
        trap: "'The usual two seconds, since the truck will stop more slowly than you' relies on the truck being the slower stopper, and a loaded trailer on a wet road can behave very differently from that assumption.",
        excerptKey: "two-second-rule-bad-weather",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s5_19",
        topic: "rightOfWay",
        question:
          "Which manoeuvre accounts for more than 35 percent of pedestrian injury crashes in New York City?",
        choices: [
          "A driver making a left turn",
          "A driver making a right turn on red",
          "A driver reversing out of a parking space",
          "A driver changing lanes at an intersection",
        ],
        correctIndex: 0,
        explanation:
          "More than 35 percent of New York City pedestrian injury crashes happen while a driver is attempting a left turn.",
        context:
          "The left turn is the hard one because you are crossing oncoming traffic while also scanning a crosswalk on the far side, and the A-pillar sits right where a pedestrian appears. The manual's instruction is to look in all directions for pedestrians before turning, then look again, and to yield at every crossing, marked or unmarked, on both your left and your right.",
        trap: "'A driver making a right turn on red' is the manoeuvre with the worse reputation, and the statistic points at the left turn instead.",
        excerptKey: "nyc-left-turn-pedestrian",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s5_20",
        topic: "signs",
        question: "What does the colour of a lane line tell you in New York?",
        choices: [
          "Yellow lines are newer than white lines",
          "White lines mark the edge of the road, yellow lines mark lanes",
          "Yellow separates traffic moving in opposite directions; white separates traffic moving the same way",
          "White lines may be crossed and yellow lines may not",
        ],
        correctIndex: 2,
        explanation:
          "Yellow lines sit between opposing streams of traffic. White lines sit between lanes going the same way. The colour tells you what is on the other side.",
        context:
          "The pattern then tells you what you may do: broken means pass or change lanes when safe, a solid line on your side of a solid-and-broken pair means no passing, a single solid means cross only when necessary, and double solid means neither passing nor lane changing. Solid lines along the outer edge of the road mark the shoulder and may not be crossed at all without authority.",
        trap: "'White lines may be crossed and yellow lines may not' collapses colour and pattern into one rule; a broken yellow line is crossable and a solid white one often is not.",
        excerptKey: "lane-lines-yellow",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s5_21",
        topic: "rules",
        question:
          "A paved connection joins the two carriageways of a limited access expressway. May you use it to turn around?",
        choices: [
          "Yes, if no sign prohibits it",
          "Yes, in an emergency only",
          "Yes, if you can do it without crossing a solid line",
          "No - a U-turn on a limited access expressway is never permitted",
        ],
        correctIndex: 3,
        explanation:
          "Never. New York bans U-turns on a limited access expressway outright, even where a paved path links your side to the other.",
        context:
          "Those connections exist for maintenance and emergency vehicles. The other U-turn bans are the business districts of New York City, school zones, anywhere a NO U-TURN sign is posted, and anywhere drivers cannot see your vehicle from 500 feet in both directions. When a U-turn is legal, it must be started from the left portion of the lane nearest the centre line. If you miss an expressway exit, carry on to the next one.",
        trap: "'Yes, in an emergency only' invents an exception the rule does not contain, and backing up or crossing a median on an expressway is separately described as dangerous.",
        excerptKey: "uturn-expressway",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s5_22",
        topic: "emergencies",
        question: "A vehicle is coming straight at you in your lane. What should you do?",
        choices: [
          "Steer into the left lane, since the other driver will correct to their right",
          "Reduce speed, pull to the right, and sound your horn",
          "Brake hard and hold your lane position",
          "Flash your headlights and maintain speed",
        ],
        correctIndex: 1,
        explanation:
          "Slow down, move right and use the horn. Turning left is the one thing not to do, because the other driver may suddenly recover and pull back into that lane.",
        context:
          "This is the same shape as the other emergency rules: buy time and space rather than gambling on what someone else will do. The manual's general instruction for every emergency is not to panic, on the grounds that you usually have a second or two to think, and in most of them the right first move is to come off the gas rather than to grab the brakes or the wheel.",
        trap: "'Steer into the left lane, since the other driver will correct to their right' is a coin flip on a stranger's reflexes, and it is the reason wrong-way collisions so often happen head-on rather than as a glancing blow.",
        excerptKey: "head-on-approach",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s5_23",
        topic: "licensing",
        question:
          "You pass your road test at 24 and get your first New York driver licence. What applies for the next six months?",
        choices: [
          "A probationary period, during which certain convictions bring a 60-day suspension",
          "Nothing - probation applies only to drivers under 18",
          "A night driving restriction",
          "A limit of one passenger under 21",
        ],
        correctIndex: 0,
        explanation:
          "Anyone aged 18 or over who passes the road test, or is relicensed after a revocation, is on probation for six months. Certain convictions during it bring a 60-day suspension.",
        context:
          "The triggering convictions are DWAI by alcohol, speeding, reckless driving, following too closely, taking part in a speed contest, or any two traffic violations. After the 60 days a fresh six-month probation begins, and offending again during that second period means revocation for at least six months. A texting or phone conviction on a probationary licence brings a 120-day suspension.",
        trap: "'Nothing - probation applies only to drivers under 18' conflates probation with the graduated licensing rules; they are separate schemes and probation catches adults.",
        excerptKey: "probation-six-months",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 2: How to Keep Your License",
        sourceUrl: CH2,
      },
      {
        id: "ny_s5_24",
        topic: "sharing",
        question: "How must an ATV or snowmobile legally cross a New York highway?",
        choices: [
          "At any angle, provided the road is clear",
          "By following the flow of traffic to the nearest intersection",
          "By stopping first, yielding to traffic, and crossing at a 90-degree angle to the road surface",
          "Only where a marked crossing has been provided",
        ],
        correctIndex: 2,
        explanation:
          "State law lets ATVs and snowmobiles cross many highways and local roads, but they must stop, yield to traffic and go straight across at right angles.",
        context:
          "The 90-degree requirement keeps them exposed for the shortest possible time and stops them travelling along the carriageway. As with slow-moving farm vehicles, horse riders and mopeds, the practical lesson for a driver is that closing speeds on rural roads are deceptive, and that a vehicle crossing at right angles will be in your lane for longer than its size suggests.",
        trap: "'Only where a marked crossing has been provided' would make the rule easy to spot, and in reality these crossings happen wherever a trail meets a road.",
        excerptKey: "atv-snowmobile-crossing",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s5_25",
        topic: "signals",
        question: "Which of these people is authorised to direct traffic in New York?",
        choices: [
          "A tow truck operator at a breakdown",
          "A parking attendant at a stadium exit",
          "A property owner directing vehicles out of a private driveway",
          "A school bus driver",
        ],
        correctIndex: 3,
        explanation:
          "School bus drivers are on New York's list of people authorised to direct traffic, along with police officers, fire police, highway work area flag persons and school crossing guards.",
        context:
          "Directions from any of them outrank signs, signals and pavement markings - an officer can stop you at a green light or wave you through a red. The school bus driver's authority is what lets them signal you past once loading is finished, which is one of the three ways the stop requirement ends: the bus moves off, the red lights go out, or the driver or a traffic officer waves you on.",
        trap: "'A tow truck operator at a breakdown' is the most plausible distractor because tow operators do wave traffic past, and they carry no legal authority to do it.",
        excerptKey: "traffic-officer-who",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s5_26",
        topic: "parking",
        question:
          "Next to a reserved disabled parking bay is an area painted with diagonal stripes. What is it for?",
        choices: [
          "Short-term parking for anyone",
          "Access room for wheelchairs and adapted vehicles, which must be kept clear",
          "Motorcycle parking",
          "A loading zone during business hours",
        ],
        correctIndex: 1,
        explanation:
          "The striped area is the access space a wheelchair user or an adapted vehicle needs to load and unload. Parking in it defeats the purpose of the bay beside it.",
        context:
          "The reserved bay itself may be used only by someone with disabled plates or a permit, and only when the person the permit was issued to is in the vehicle. The rules apply on public streets where a local ordinance provides the spaces, and in shopping centres with at least five stores and 20 or more off-street public parking spaces. False statements on a permit application bring civil penalties of $250 to $1,000, for the applicant and for any doctor who certified it.",
        trap: "'Short-term parking for anyone' is what the empty striped space looks like to a driver in a hurry, and blocking it can leave someone unable to get back into their own vehicle.",
        excerptKey: "disabled-parking-striped-area",
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s5_27",
        topic: "impairment",
        question: "Can a driver be convicted of an alcohol-related offence in New York without a chemical test?",
        choices: [
          "Yes - an officer's testimony about your driving and behaviour can be enough",
          "No, a chemical test result is always required",
          "Only if the driver admits to drinking",
          "Only for a repeat offence",
        ],
        correctIndex: 0,
        explanation:
          "A police officer's testimony about the way you were driving and about your appearance and behaviour can support a conviction on its own, with no chemical test at all.",
        context:
          "That matters because refusing the test does not close off a prosecution - it simply adds a separate revocation on top. Intoxication and impairment can also be proved without a number: New York's offences cover being impaired by alcohol, by a drug, or by a combination, and any of those can be established from observed behaviour. Many people believe the opposite, which is why the manual addresses it head on.",
        trap: "'No, a chemical test result is always required' is the belief that leads drivers to refuse the test, and it makes their position worse rather than better.",
        excerptKey: "conviction-without-test",
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s5_28",
        topic: "safety",
        question: "How should you brake on a slippery road in a car fitted with anti-lock brakes?",
        choices: [
          "Pump the pedal rapidly",
          "Apply the brakes and then release them as the wheels begin to lock",
          "Keep even pressure on the brake pedal",
          "Use the parking brake to help slow the car",
        ],
        correctIndex: 2,
        explanation:
          "With ABS you hold even pressure on the pedal and let the system do the pulsing. Pumping is what you do in a car without ABS.",
        context:
          "In a car without anti-lock brakes, pump the pedal carefully, pumping more rapidly as the car slows. To avoid a skid in the first place, brake early and gently in slow steady strokes, easing off if the wheels start to lock, and shift down as the car slows. If the rear wheels do slide, steer in the direction the car is trying to go - left if the rear slides left, right if it slides right.",
        trap: "'Pump the pedal rapidly' is the correct technique for the wrong car, and it stops ABS from working as designed.",
        excerptKey: "abs-braking",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s5_29",
        topic: "rightOfWay",
        question:
          "You are on a divided highway. A school bus stops on the opposite carriageway with red lights flashing. What must you do?",
        choices: [
          "Continue, since the median separates you",
          "Slow to 20 mph and continue",
          "Continue if there are three or more lanes between you",
          "Stop - the requirement applies even when the bus is on the opposite side of a divided highway",
        ],
        correctIndex: 3,
        explanation:
          "New York requires you to stop even when the bus is on the other side of a divided highway. The rule applies on all roadways in the state, with no exception for a median.",
        context:
          "That is stricter than most states, and it is why visiting drivers get caught. The stop applies to traffic from both directions, in front of the school and in school parking lots as well. Stop at least 20 feet from the bus and do not move off until the bus moves, the red lights go out, or the driver or a traffic officer waves you on. Fines start at $250 and reach $1,000, and three convictions in three years mean at least a six-month revocation.",
        trap: "'Continue, since the median separates you' is correct in a number of other states and is exactly wrong in New York - this is the single most-cited difference in the state's bus law.",
        excerptKey: "school-bus-divided-highway",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s5_30",
        topic: "rules",
        question: "When may you drive on or across the shoulder of a New York road?",
        choices: [
          "When traffic in your lane has stopped",
          "When you are exiting within the next quarter mile",
          "When a sign allows it, or a traffic officer directs you",
          "When passing a vehicle waiting to turn left",
        ],
        correctIndex: 2,
        explanation:
          "Only when an official sign permits it or a traffic officer tells you to. The solid edge line marks where the roadway stops, and crossing it otherwise is illegal.",
        context:
          "That closes off the shoulder as a passing route even where passing on the right would otherwise be allowed - alongside a vehicle turning left, for example, or on a road wide enough for two lanes each way. Aggressive driving is defined in the manual to include passing on the shoulder or on unpaved parts of the roadway, so it is treated as more than a technical breach.",
        trap: "'When passing a vehicle waiting to turn left' pairs a genuine exception, passing on the right, with an illegal means of doing it.",
        excerptKey: "no-driving-on-shoulder",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s5_31",
        topic: "signs",
        question:
          "Arrows are painted in the lanes ahead of an intersection. When must you be in the lane you need?",
        choices: [
          "Before you reach the solid line that separates the lanes",
          "Any time before the stop line",
          "Before you enter the intersection",
          "As soon as you can see the arrows",
        ],
        correctIndex: 0,
        explanation:
          "You must be in the correct lane before you reach the solid line separating the lanes. After that point, changing lanes means crossing a solid line.",
        context:
          "Lane arrows are mandatory, not advisory: an arrow showing right only in the right lane means you cannot go straight from it. This is why reading destination and exit signs early matters, and why the manual warns against the last-minute lane change at an expressway exit. Overhead lane control lights can override the painted arrows while they are lit.",
        trap: "'Any time before the stop line' ignores the solid line, which usually starts well back from the stop line and is where the choice is actually locked in.",
        excerptKey: "lane-arrows",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s5_32",
        topic: "emergencies",
        question:
          "At what level of property damage must a crash be reported to the New York DMV?",
        choices: [
          "$500 or more in total",
          "$750 or more to any one person",
          "Any amount, if the police did not attend",
          "$1,000 or more in damage to the property of any one person",
        ],
        correctIndex: 3,
        explanation:
          "The threshold is $1,000 or more of damage to the property of any one person, and the report is due within 10 days.",
        context:
          "Read the threshold carefully: it is per person, not per crash, so a collision doing $600 of damage to two different cars can fall below it while one doing $1,100 to a single car does not. Crashes involving injury or death must be reported to the DMV regardless of damage. Failing to file is a misdemeanour and can bring an indefinite suspension until the report is made.",
        trap: "'$500 or more in total' both lowers the figure and changes it from a per-person test to a per-crash one - two separate errors that often travel together.",
        excerptKey: "crash-report-1000-dollars",
        sourceLabel: "New York State Driver's Manual - Chapter 12: If You Are in a Traffic Crash",
        sourceUrl: CH12,
      },
      {
        id: "ny_s5_33",
        topic: "licensing",
        question:
          "Which roads in Westchester County are closed to learner permit holders?",
        choices: [
          "All parkways in the county",
          "The Cross County, Hutchinson River, Saw Mill River and Taconic State parkways",
          "Only the Taconic State Parkway",
          "All roads with a limit above 45 mph",
        ],
        correctIndex: 1,
        explanation:
          "Four named parkways in Westchester County are off limits to permit holders: the Cross County, Hutchinson River, Saw Mill River and Taconic State.",
        context:
          "The wider list of places a permit holder may not drive covers any street inside a New York City park, any bridge or tunnel run by the Triborough Bridge and Tunnel Authority, and any DMV road test area. Those restrictions apply to every permit holder regardless of age, on top of the regional junior permit rules for anyone under 18.",
        trap: "'All parkways in the county' over-generalises a specific list of four, and over-generalising is the natural response to a list that has no obvious logic to it.",
        excerptKey: "permit-westchester-parkways",
        commonlyMissed: true,
        sourceLabel: "NYS DMV - Learner Permit Restrictions",
        sourceUrl: PERMITS_URL,
      },
      {
        id: "ny_s5_34",
        topic: "safety",
        question: "What does the manual say about using the radio or an open window to stay awake?",
        choices: [
          "They work for short periods and are a reasonable stopgap",
          "They are effective if combined with caffeine",
          "They are recommended on long night drives",
          "Do not depend on them - they are tricks, not countermeasures",
        ],
        correctIndex: 3,
        explanation:
          "The manual tells drivers not to depend on the radio, an open window or other tricks. The only real answers are stopping for a nap or not being tired in the first place.",
        context:
          "The reason is that you cannot reliably tell how close to sleep you are - the manual's first instruction for a drowsy driver is to recognise that sleep may arrive without warning. Warning signs include drifting between lanes, repeated yawning, disconnected thoughts, and not remembering the last few miles. Young drivers, shift workers, long-distance commuters and people driving alone are at the highest risk.",
        trap: "'They work for short periods and are a reasonable stopgap' is what almost every driver believes, and it is directly contradicted by the manual.",
        excerptKey: "drowsy-no-tricks",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s5_35",
        topic: "sharing",
        question: "Why is a motorcycle's turn signal weaker evidence of intention than a car's?",
        choices: [
          "On most motorcycles the signal does not cancel itself after a turn",
          "Motorcycle signals are not required to be fitted",
          "Motorcycle signals only work above 15 mph",
          "Riders are permitted to signal with hand movements instead",
        ],
        correctIndex: 0,
        explanation:
          "Most motorcycles do not cancel the indicator automatically after a turn, so a blinking signal may simply have been left on from a manoeuvre a mile back.",
        context:
          "Motorcycle lighting is harder to read in general: the signals sit close to the head and tail lights, the tail light is always on so the brake light stands out less, and there is no high-mounted stop lamp at eye level. Riders also move around within their lane to see better or avoid surface hazards, which can look like an intention to change lanes when it is not.",
        trap: "'Riders are permitted to signal with hand movements instead' is true of bicycles, and does not explain why a lit motorcycle signal is unreliable.",
        excerptKey: "motorcycle-signal-not-self-cancelling",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "The real New York written test is 20 questions: you need at least 14 correct, and at least two of the four road sign questions right. This set runs longer at 30 questions and holds you to the same 70 percent standard, so clearing it leaves margin on the day.",
    questions: [
      {
        id: "ny_s6_01",
        topic: "signs",
        question:
          "You are stopping for a STOP sign at an intersection that has a painted stop line and a crosswalk. Where do you stop?",
        choices: [
          "In the crosswalk, so you can see the cross street",
          "Before the stop line",
          "Between the stop line and the crosswalk",
          "Level with the corner of the building",
        ],
        correctIndex: 1,
        explanation:
          "The stop line comes first. If there is one, you stop before it; if there is no stop line, you stop before the crosswalk.",
        context:
          "Where there is neither line nor crosswalk, you stop before entering the intersection, at the point closest to it that gives you a view of traffic on the crossing road. A single stop line is sometimes set well back to give tractor-trailers and buses room to turn, which is why creeping past it matters. Once stopped, you yield to anything in or heading toward the intersection before moving off.",
        trap: "'In the crosswalk, so you can see the cross street' is what drivers do at blind corners, and the correct answer is to stop first and then edge forward once the crossing is clear.",
        excerptKey: "stop-sign-where",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s6_02",
        topic: "rules",
        question:
          "You are on a two-lane road and want to pass, but the road ahead curves out of sight. What does the law say?",
        choices: [
          "Pass if you can complete it before the curve begins",
          "Pass, but stay under the speed limit",
          "Pass if there is a broken line on your side",
          "You may not pass when you cannot see around or over a curve or hill crest",
        ],
        correctIndex: 3,
        explanation:
          "Approaching a curve or the top of a hill on a two-way road where you cannot see around or over it, passing on the left is prohibited.",
        context:
          "The line markings do not override that: a broken line tells you passing is permitted on that stretch, not that this particular pass is safe or legal. The other bans on passing left cover a solid yellow line on your side, being unable to return before reaching a solid line or before an oncoming car comes within 200 feet, within 100 feet of a railroad crossing, and within 100 feet of an obstructed bridge, tunnel or viaduct.",
        trap: "'Pass if there is a broken line on your side' treats the paint as complete authority, and the sight-distance rule applies on top of the markings.",
        excerptKey: "no-pass-hill-curve",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s6_03",
        topic: "rightOfWay",
        question:
          "You can hear a siren close by but cannot tell where the emergency vehicle is. What should you do?",
        choices: [
          "Pull over to the right edge of the road and stop until you are sure it is not heading toward you",
          "Continue at your normal speed until you can see it",
          "Stop in your lane and wait",
          "Speed up to clear the area",
        ],
        correctIndex: 0,
        explanation:
          "Pull safely to the right edge of the road and stop until you are certain the emergency vehicle is not coming your way.",
        context:
          "The same response applies whichever direction it is coming from, including toward you in the opposite lane of a two-way road. If you are inside an intersection, drive out of it before pulling over. Bear in mind that an emergency vehicle may legally exceed the limit, run red lights and STOP signs, drive the wrong way on a one-way street and turn where turns are banned - so guessing its route is not a strategy.",
        trap: "'Continue at your normal speed until you can see it' postpones the decision to the moment you have the least time to act on it.",
        excerptKey: "emergency-siren-unseen",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s6_04",
        topic: "signals",
        question:
          "You are at a steady red light in Buffalo and want to turn right. No sign prohibits it. What is required?",
        choices: [
          "Slow to a crawl and turn if the way is clear",
          "Turn only when the light changes to green",
          "Come to a full stop, then yield to oncoming traffic and pedestrians before turning",
          "Yield to pedestrians, but a stop is not required if nothing is coming",
        ],
        correctIndex: 2,
        explanation:
          "Outside New York City, a right turn on a steady red is allowed, but only after a complete stop and after yielding to oncoming traffic and to pedestrians.",
        context:
          "The permission is cancelled by a NO TURN ON RED sign, by any other sign, signal or marking that prevents the turn, and by a red arrow. A school bus carrying pupils may never turn right on red. Before turning, look right and behind for a cyclist coming up on your right rear - the manual specifically asks for a complete stop and a left-right-left-and-behind check.",
        trap: "'Yield to pedestrians, but a stop is not required if nothing is coming' is the rolling right on red, which is both the most common version of the manoeuvre and an offence.",
        excerptKey: "right-turn-on-red",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s6_05",
        topic: "speed",
        question: "You have just left an expressway onto a local road. What should you do about your speed?",
        choices: [
          "Maintain expressway speed until a lower limit is posted",
          "Assume the limit is 55 mph until you see a sign",
          "Slow only if traffic ahead requires it",
          "Look for speed limit signs and check your speedometer - you are almost certainly no longer on a 55 mph road",
        ],
        correctIndex: 3,
        explanation:
          "After leaving an expressway, check the posted limits and your speedometer. Coming off a 55 mph road, your sense of speed will be badly calibrated for the road you are now on.",
        context:
          "Expressways are normally 55 mph with some rural sections at 65, and exit ramps often carry a lower limit of their own, so slow on the ramp rather than in the through lanes. Signal at least 100 feet before the ramp and get into the correct lane early by reading the exit signs, rather than making a late lane change across traffic.",
        trap: "'Assume the limit is 55 mph until you see a sign' misapplies the statewide default: cities can set lower limits that are not posted at all, New York City's 25 mph being the obvious example.",
        excerptKey: "expressway-speed",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s6_06",
        topic: "safety",
        question: "Who is legally responsible for making sure a 9-year-old passenger is properly restrained?",
        choices: [
          "The child",
          "The driver",
          "The child's parent, present or not",
          "The registered owner of the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "The driver must make sure every passenger under 16 is properly restrained, and is the person fined and given points if one is not.",
        context:
          "At 9 the requirement is an ordinary seat belt, one person per belt, though a child under 4 feet 9 inches or under 100 pounds is still recommended to use a child restraint. Passengers aged 16 and over carry their own liability, with a fine of up to $50. Belt enforcement in New York is primary, so an officer can stop you for that alone.",
        trap: "'The child' shifts responsibility to a passenger who is legally too young to hold it; that switch happens at 16.",
        excerptKey: "belt-driver-responsible-under-16",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s6_07",
        topic: "parking",
        question: "Where does New York prohibit parking, stopping and standing outright?",
        choices: [
          "On a bridge or in a tunnel",
          "On any road with a limit above 45 mph",
          "Within 100 feet of a school",
          "On any street with parking meters",
        ],
        correctIndex: 0,
        explanation:
          "Bridges and tunnels are on the statewide list of places you may not park, stop or stand, and no sign is needed to make that apply.",
        context:
          "The rest of that list covers within 15 feet of a hydrant, on a sidewalk or in a crosswalk, in an intersection unless signs or meters permit it, on railroad tracks, beside road works if you would block traffic, within 30 feet of a pedestrian safety area, and on the roadside of a parked vehicle. Parking and standing are separately banned in front of a driveway, within 20 feet of a crosswalk at an intersection, and within 30 feet of a signal, STOP or YIELD sign.",
        trap: "'On any street with parking meters' inverts the point of a meter, which exists to permit parking on payment.",
        excerptKey: "park-bridge-tunnel-tracks",
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s6_08",
        topic: "impairment",
        question:
          "A 20-year-old has a second zero tolerance violation. What is the minimum licence action?",
        choices: [
          "A further six-month suspension",
          "A 90-day suspension",
          "Revocation for at least one year, or until they turn 21, whichever is longer",
          "Revocation for six months",
        ],
        correctIndex: 2,
        explanation:
          "A second zero tolerance violation brings revocation for at least a year or until the driver reaches 21, whichever period is longer.",
        context:
          "A first violation - any measurable BAC from .02 to .07 for a driver under 21 - brings a six-month suspension after a DMV hearing, plus a $100 suspension termination fee and a $125 civil penalty to be relicensed. Under-21 drivers also face a minimum one-year revocation for conviction of any of the ordinary alcohol or drug driving offences, and refusing a chemical test brings its own revocation.",
        trap: "'A further six-month suspension' simply repeats the first-offence penalty, and the escalation to a revocation tied to the driver's age is the whole design of the scheme.",
        excerptKey: "zero-tolerance-second",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s6_09",
        topic: "sharing",
        question:
          "You have stopped for a school bus with its red lights flashing. When may you move off?",
        choices: [
          "After 10 seconds if nobody has crossed",
          "Once the last child has stepped onto the sidewalk",
          "As soon as you can see the road ahead is clear",
          "When the bus starts moving, or the bus driver or a traffic officer signals you on",
        ],
        correctIndex: 3,
        explanation:
          "You wait until the bus begins moving again, or until the bus driver or a traffic officer signals that you may proceed.",
        context:
          "Once you do move, drive slowly and look for children along the side of the road until you have passed them. The stop itself applies to traffic in both directions on every roadway in the state, including in front of the school, in school parking lots and across the median of a divided highway. Stop at least 20 feet back. Fines start at $250 and reach $1,000, and three convictions in three years mean at least a six-month revocation.",
        trap: "'As soon as you can see the road ahead is clear' relies on your own view, and a child in front of the bus is invisible from behind it.",
        excerptKey: "school-bus-when-to-proceed",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s6_10",
        topic: "signs",
        question: "Is a driver ever required to come to a complete stop at a YIELD sign?",
        choices: [
          "Yes - you must come to a full stop if traffic conditions require it",
          "No, a yield never requires a stop",
          "Only when a pedestrian is present",
          "Only when the sign is combined with a stop line",
        ],
        correctIndex: 0,
        explanation:
          "A YIELD sign asks you to slow and give way, and it requires a full stop whenever traffic conditions make one necessary to do that safely.",
        context:
          "That is the difference between the two signs in a sentence: a STOP sign requires the halt every time, a YIELD sign requires it only when yielding demands it. Approaching a yield you should already be slowing, checking carefully for traffic and pedestrians, and prepared to stop. Yield control is also how New York's modern roundabouts work.",
        trap: "'No, a yield never requires a stop' is the reading that produces drivers who roll into a busy road because the sign did not say stop.",
        excerptKey: "yield-sign-full-stop",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s6_11",
        topic: "emergencies",
        question: "Someone is injured in a crash you have stopped at. When should you move them?",
        choices: [
          "As soon as possible, to get them away from the vehicle",
          "Only if fire or another life-threatening danger makes it necessary",
          "Whenever they ask to be moved",
          "Once you have checked they can move their fingers and toes",
        ],
        correctIndex: 1,
        explanation:
          "Leave an injured person where they are unless fire or some other immediate danger forces the move. Moving someone with a spinal injury can do lasting harm.",
        context:
          "If you must move them, keep the back and neck as straight as you can: put your arms under the back, support the neck with your upper arms, hold their clothing and pull them head first away from the danger. Stay away from any downed wires, and tell the occupants of a vehicle in contact with wires to remain inside. Do not stop at a crash scene at all unless you are involved or help has not yet arrived.",
        trap: "'As soon as possible, to get them away from the vehicle' is the instinct of everyone who arrives first, and it is the single most likely way for a bystander to cause a permanent injury.",
        excerptKey: "crash-do-not-move-injured",
        sourceLabel: "New York State Driver's Manual - Chapter 12: If You Are in a Traffic Crash",
        sourceUrl: CH12,
      },
      {
        id: "ny_s6_12",
        topic: "rules",
        question:
          "The right lane ahead is marked with a right-turn-only arrow, but you want to go straight. What must you have done?",
        choices: [
          "Signalled your intention to stay straight",
          "Sounded your horn before merging",
          "Moved into the correct lane before reaching the solid line that separates the lanes",
          "Moved across at the stop line, where the lanes are widest",
        ],
        correctIndex: 2,
        explanation:
          "Lane arrows are mandatory. You must be in the lane you need before you reach the solid line separating the lanes - after that, changing lanes means crossing it.",
        context:
          "Arrows are one of the pavement markings that carry legal force alongside the lines themselves. Read them early, as you would exit signs, so that you are not making a late lane change across traffic. Overhead lane control lights override the painted arrows while they are lit, which is how a road can change its lane assignments through the day.",
        trap: "'Moved across at the stop line, where the lanes are widest' is where drivers actually attempt it, and the solid line usually begins well before that point.",
        excerptKey: "lane-arrows",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s6_13",
        topic: "licensing",
        question:
          "How much supervised practice does New York expect before a junior applicant takes the road test?",
        choices: [
          "20 hours, with 5 after sunset",
          "30 hours, with 10 after sunset",
          "40 hours, with 10 after sunset",
          "At least 50 hours, including at least 15 after sunset",
        ],
        correctIndex: 3,
        explanation:
          "At least 50 hours of practice, with a minimum of 15 of them after sunset. A parent or guardian certifies this on the Certification of Supervised Driving.",
        context:
          "The DMV also recommends that at least 10 of those hours be in moderate to heavy traffic. Road tests are given on city streets, but you are advised to practise on expressways and other road types as well. Alongside the certification you need a pre-licensing course certificate or a driver education completion certificate on file, and the permit itself must have been held for at least six months.",
        trap: "'40 hours, with 10 after sunset' is close enough to the real figures to feel right, and both halves are short of what New York requires.",
        excerptKey: "practice-50-hours",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 1: Driver Licenses",
        sourceUrl: CH1,
      },
      {
        id: "ny_s6_14",
        topic: "rightOfWay",
        question:
          "Two drivers stop at STOP signs at the same moment, at right angles to each other. Who goes first?",
        choices: [
          "Whoever stopped more completely",
          "The driver on the right",
          "The driver going straight, over the one turning",
          "Whoever signals first",
        ],
        correctIndex: 1,
        explanation:
          "The driver on the left yields to the driver on the right, so the driver on the right goes first.",
        context:
          "The same rule handles an intersection with no signs or signals at all. It is the last rung of the ladder, used when nothing else settles the question: traffic already in the intersection goes first, a left-turning driver yields to oncoming traffic going straight or turning right, a vehicle coming out of a driveway or private road stops and yields to everything, and where two drivers arrive together at right angles, right beats left.",
        trap: "'The driver going straight, over the one turning' is a real rule for opposing traffic, and it does not apply to two drivers at right angles.",
        excerptKey: "row-driver-on-left-yields",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s6_15",
        topic: "signals",
        question: "The green arrow you were relying on changes to a yellow arrow. What does that mean?",
        choices: [
          "The protection of the green arrow is ending, so be prepared to stop",
          "You may complete your turn at any speed",
          "The turn is now prohibited entirely",
          "Oncoming traffic has been given a red light",
        ],
        correctIndex: 0,
        explanation:
          "A yellow arrow says the green arrow's protection is finishing. If you intended to turn that way, be ready to stop.",
        context:
          "It parallels the steady yellow round light, which warns the green is about to become red. What follows a yellow arrow may be a red arrow, which prohibits movement that way entirely and permits no turn on red at all. Compare that with a plain steady green, which lets you proceed but still requires you to yield to other traffic at the intersection as the law requires.",
        trap: "'The turn is now prohibited entirely' is the red arrow, one stage further on; the yellow arrow is the warning, not the prohibition.",
        excerptKey: "signal-yellow-arrow",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s6_16",
        topic: "safety",
        question: "A driver behind you is tailgating. What does the manual advise?",
        choices: [
          "Tap your brakes to warn them off",
          "Hold your speed and position so they learn to back off",
          "Move to another lane, or reduce speed and pull off the road to let them past",
          "Accelerate until the gap opens up",
        ],
        correctIndex: 2,
        explanation:
          "Let them go: change lanes if you can, or slow and pull off the road, signalling as you leave the road and as you rejoin it.",
        context:
          "The manual specifically warns against braking suddenly or unnecessarily, because it can startle the driver behind and escalate into road rage. The same de-escalation runs through the aggressive-driving guidance: do not make eye contact, do not return gestures, do not hold your position out of principle, and if someone follows you, drive to a police station rather than stopping.",
        trap: "'Tap your brakes to warn them off' is the most satisfying option and the one most likely to produce the collision you were trying to avoid.",
        excerptKey: "tailgated-response",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s6_17",
        topic: "speed",
        question:
          "A driver from New Jersey is driving through Queens on an unsigned residential street. What speed limit applies to them?",
        choices: [
          "The New Jersey limit, since that is where their licence is from",
          "25 mph, unless another limit is posted",
          "30 mph, the usual urban default",
          "55 mph, the New York State default",
        ],
        correctIndex: 1,
        explanation:
          "New York City's default is 25 mph, and it applies to every driver on a city street with no other limit posted, whatever state they are licensed in.",
        context:
          "The statewide default where nothing is posted is 55 mph, but cities may set lower limits and are not required to sign them everywhere. Since parts of New York City are now posted below 25, read the signs and treat 25 as your fallback rather than an entitlement. And the posted number is only ever a maximum: an officer can ticket a speed that is not reasonable for the conditions.",
        trap: "'55 mph, the New York State default' applies the statewide fallback inside a city that has replaced it - the default only fills the gap where no local limit exists.",
        excerptKey: "speed-nyc-25",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s6_18",
        topic: "parking",
        question: "You are parking on a hill. Which way should the wheels be turned?",
        choices: [
          "Straight ahead, with the parking brake set",
          "Away from the kerb, so the car rolls into the space behind",
          "Whichever way the front of the car is pointing",
          "Toward the kerb or side of the road, so the car cannot roll into traffic",
        ],
        correctIndex: 3,
        explanation:
          "Turn the wheels toward the kerb or the side of the road, so that if the car does move it goes into the kerb rather than into the traffic lane.",
        context:
          "Set the parking brake as well, and leave an automatic in Park or a manual in first gear. On a road with no kerb the principle is the same: aim the wheels at the verge. When you leave a parallel space, straighten the wheels first, back up toward the car behind, then turn away from the kerb and check over both shoulders before pulling out.",
        trap: "'Straight ahead, with the parking brake set' relies entirely on the brake holding, and the wheel position is the backup for when it does not.",
        excerptKey: "park-on-hill-wheels",
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s6_19",
        topic: "impairment",
        question: "Why is drinking and driving after dark particularly dangerous?",
        choices: [
          "Vision is already restricted at night, and alcohol also reduces recovery from headlight glare",
          "Alcohol is absorbed faster in the evening",
          "Police patrols are heavier after dark",
          "Reaction times are naturally slower at night regardless of alcohol",
        ],
        correctIndex: 0,
        explanation:
          "Night already narrows what you can see, and alcohol compounds it by slowing your recovery from the glare of oncoming headlights, so you can be blinded for far longer.",
        context:
          "Alcohol also delays reaction time, degrades your judgement of speed and distance, removes inhibition and makes you more willing to take chances - and it does all of that while making you less able to notice that it is happening. The effects begin with the first drink, long before any legal threshold is reached.",
        trap: "'Alcohol is absorbed faster in the evening' invents a physiological effect; the real problem is the interaction with the visual demands of night driving.",
        excerptKey: "alcohol-night-vision",
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s6_20",
        topic: "sharing",
        question: "Where are pedestrians supposed to walk on a road with no sidewalk?",
        choices: [
          "On whichever side has the wider verge",
          "In the middle of the road where they are most visible",
          "On the side of the road facing the traffic in the lane nearest them",
          "With their back to traffic, so vehicles can pass safely",
        ],
        correctIndex: 2,
        explanation:
          "Pedestrians walk facing the traffic in the nearest lane, so they can see what is coming and step clear if they need to.",
        context:
          "Pedestrians are required to use the sidewalk where one exists, to obey pedestrian signals and traffic officers, and never to stand in the road to hitchhike or do business with drivers. As a driver you are still required to take care to avoid them wherever they are, and the manual warns you not to assume a pedestrian will follow the rules - expect someone to enter the roadway at any time and anywhere.",
        trap: "'With their back to traffic, so vehicles can pass safely' has it exactly backwards and describes how most people instinctively walk.",
        excerptKey: "pedestrian-face-traffic",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s6_21",
        topic: "signs",
        question:
          "You reach a STOP sign at an intersection that has no stop line and no crosswalk. Where do you stop?",
        choices: [
          "Wherever you can see the whole intersection, even if that is inside it",
          "At least one car length back from the corner",
          "Level with the STOP sign itself",
          "Before entering the intersection, at the point nearest it that lets you see traffic on the crossing road",
        ],
        correctIndex: 3,
        explanation:
          "With no line and no crosswalk, you stop before entering the intersection, as close to it as you can while still having a view of traffic on the road you are crossing.",
        context:
          "The hierarchy runs stop line first, then crosswalk, then this. It exists because a stop that gives you no view is useless, and a stop inside the intersection is not a stop. Once halted, yield to vehicles and pedestrians in or approaching the intersection, and move off only when it is genuinely safe.",
        trap: "'Level with the STOP sign itself' is a fixed rule people invent for themselves, and at many corners the sign is set well back from where you can actually see.",
        excerptKey: "stop-sign-no-line",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s6_22",
        topic: "rules",
        question: "Another vehicle is passing you on the left. What should you do?",
        choices: [
          "Move toward the right edge of your lane to give them room",
          "Decrease your speed slightly and stay centred in your lane",
          "Maintain speed and position exactly",
          "Speed up to shorten the time they spend alongside",
        ],
        correctIndex: 1,
        explanation:
          "Ease off slightly and hold the centre of your lane. Slowing a little shortens the pass; staying centred means the passing driver knows exactly where you are.",
        context:
          "Once they are safely past and ahead of you, return to your normal speed. If you find several vehicles passing you on the right, the manual tells you to move into the right lane and let them pass on the left instead. Both instructions come from the same idea: make yourself predictable and stop being an obstacle.",
        trap: "'Speed up to shorten the time they spend alongside' is the instinctive response to being overtaken and it strands the passing driver alongside you for longer, often in the oncoming lane.",
        excerptKey: "being-passed-on-left",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s6_23",
        topic: "emergencies",
        question: "A front tyre blows out at speed. What should you do first?",
        choices: [
          "Hold the wheel tightly and slowly take your foot off the gas",
          "Brake firmly to reduce speed as quickly as possible",
          "Steer immediately for the shoulder",
          "Downshift to slow the vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Grip the wheel and come off the gas slowly. Do not touch the brake until the vehicle is under control, then leave the road when it is safe to do so.",
        context:
          "If it starts to skid, handle it the way you would on ice: steer in the direction the car is trying to go. A thumping noise beforehand can be the warning that a blowout is coming, so if you hear one, get safely off the road and check the tyres. The loss of a wheel is handled identically.",
        trap: "'Brake firmly to reduce speed as quickly as possible' applies uneven braking force across an already unbalanced car and is a reliable way to turn a blowout into a spin.",
        excerptKey: "tire-blowout",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s6_24",
        topic: "licensing",
        question:
          "You move to New York permanently, holding a valid licence from another state. How long do you have to change over?",
        choices: ["90 days", "60 days", "30 days of becoming a permanent resident", "6 months"],
        correctIndex: 2,
        explanation:
          "Thirty days. You surrender the out-of-state licence and obtain a New York one, since holding both at once is generally illegal.",
        context:
          "You must pass the vision test, and if the out-of-state licence has been valid for less than six months or expired more than a year ago, you also take the written and road tests and complete the safe driving course. A new resident must register a vehicle within 30 days as well. Someone licensed outside the United States or Canada takes the vision, written and road tests and completes the course regardless.",
        trap: "'6 months' is the grace period some states allow, and New York's window is much shorter.",
        excerptKey: "new-resident-30-days",
        sourceLabel: "New York State Driver's Manual - Chapter 1: Driver Licenses",
        sourceUrl: CH1,
      },
      {
        id: "ny_s6_25",
        topic: "signals",
        question:
          "Overhead lane signals on a bridge show a red X above lane 2. What are you being told about that lane?",
        choices: [
          "Use it only to turn left",
          "Move out of it as soon as you can",
          "Use it at reduced speed",
          "Do not drive in it",
        ],
        correctIndex: 3,
        explanation:
          "A steady red X closes the lane to you completely. It is not a warning to vacate - it is a prohibition on being there.",
        context:
          "The four signals are red X (do not drive in this lane), yellow X (move out of it), flashing yellow X (left turns only), and a green arrow (the lane is open). They are used above the pavement on roads whose lanes reverse direction or change function during the day, and while lit they take precedence over the painted markings.",
        trap: "'Move out of it as soon as you can' is the steady yellow X, which is the stage before this one.",
        excerptKey: "lane-control-red-x",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s6_26",
        topic: "safety",
        question:
          "You are about to back out of a driveway in a street where children are playing. What does the manual tell you to do?",
        choices: [
          "Get out of the vehicle and check behind it before you back up",
          "Rely on the reversing camera, which covers the blind area",
          "Sound the horn twice before reversing",
          "Reverse slowly while watching the mirrors",
        ],
        correctIndex: 0,
        explanation:
          "Before backing into or out of a driveway, get out of the vehicle and look behind it. A small child in the area directly behind a car is invisible from the driver's seat.",
        context:
          "When you do reverse, look through the rear window rather than relying on mirrors - and the manual makes the same point about reversing cameras and parking sensors, which are useful but do not transfer responsibility away from the driver. Look out for children near schools, bus stops, playgrounds, parks and ice cream trucks.",
        trap: "'Rely on the reversing camera, which covers the blind area' is exactly the assumption the manual warns against; the driver remains responsible for the safe operation of the vehicle.",
        excerptKey: "back-up-get-out-and-check",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s6_27",
        topic: "rightOfWay",
        question:
          "You are turning left on a green light and a car is already in the intersection completing its own turn. Who has priority?",
        choices: [
          "You, because you have the green",
          "Whichever driver entered the intersection at higher speed",
          "The vehicle already in the intersection",
          "Neither - both must reverse out",
        ],
        correctIndex: 2,
        explanation:
          "A driver approaching an intersection yields to traffic already in it. Being there first settles the question, whatever the signals show.",
        context:
          "This is the first rule in New York's right-of-way list, and it is why a green light is described as permission rather than priority. You may pull into the intersection to prepare for a left turn if the light is green and no vehicle ahead of you is also waiting to turn - but keep right of the centre line and your wheels straight, so that being hit from behind does not push you into oncoming traffic.",
        trap: "'You, because you have the green' assumes the signal resolves everything, and the right-of-way rules exist precisely because it does not.",
        excerptKey: "row-traffic-in-intersection",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s6_28",
        topic: "impairment",
        question: "What happens when alcohol is combined with another drug?",
        choices: [
          "The effects roughly cancel out if the drug is a stimulant",
          "The effects of each can be enhanced, sometimes dangerously",
          "The combination has no effect at prescription doses",
          "Only illegal drugs interact with alcohol",
        ],
        correctIndex: 1,
        explanation:
          "Mixing alcohol with another drug can enhance the effects of both. One drink taken alongside a cold remedy can affect you as much as several drinks would.",
        context:
          "The drugs that matter are not only illegal ones: prescription and over-the-counter medicines, including cold and allergy remedies, can impair driving on their own. Check the label for warnings and ask a doctor or pharmacist if you are unsure. New York's offences cover driving while impaired by a drug and by a combination of alcohol and drugs, and both are chargeable.",
        trap: "'Only illegal drugs interact with alcohol' is a common assumption, and the manual's own example of a dangerous combination is an ordinary cold remedy.",
        excerptKey: "drug-combination-danger",
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s6_29",
        topic: "rules",
        question: "Where in New York City are U-turns illegal even when no sign says so?",
        choices: [
          "In business districts",
          "Within 500 feet of a school",
          "On any street with a bus route",
          "On any avenue running north to south",
        ],
        correctIndex: 0,
        explanation:
          "U-turns are illegal in the business districts of New York City, with or without a NO U-TURN sign.",
        context:
          "The other statewide U-turn bans are school zones, any location where drivers cannot see your vehicle from 500 feet in both directions - near a hill crest or a curve, for instance - and any limited access expressway, even where a paved connection links the carriageways. Where a U-turn is legal, start it from the left portion of the lane nearest the centre line, never from the right lane.",
        trap: "'Within 500 feet of a school' mixes two real rules: 500 feet is the sight-distance test, and school zones are covered by a separate ban with no distance attached.",
        excerptKey: "uturn-nyc-business-district",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s6_30",
        topic: "sharing",
        question: "How many cyclists may ride side by side in a single lane in New York?",
        choices: ["One only", "No more than two", "Three, if the lane is wide", "Any number, if they keep right"],
        correctIndex: 1,
        explanation:
          "Cyclists may never travel more than two side by side in a single lane.",
        context:
          "Where a bicycle lane exists they must use it; where none exists they must stay near the right kerb, road edge or right shoulder, though they may move left to turn or to avoid a hazard. As a driver, overtake a cyclist on the left at a safe distance and only when it is safe to move into an adjacent lane, and reduce speed as you pass - the air pressure from a vehicle going by quickly can unbalance a rider.",
        trap: "'Any number, if they keep right' would let a group fill the lane, and the two-abreast limit exists so a following driver always has a predictable width to pass.",
        excerptKey: "bicycle-two-abreast",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
    ],
  },
];
