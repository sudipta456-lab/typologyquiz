import type { DrivingTestSet } from "../types";

// Sources as for sets 1-3: the New Jersey Driver Manual (2025) published by the
// New Jersey Motor Vehicle Commission, njmvc.gov pages for the graduated driver
// licence programme, the point schedule and surcharges, and the Department of
// Banking and Insurance's Auto Insurance Buyer's Guide for the liability
// minimums the manual does not state.
//
// Answer positions were assigned from a balanced target sequence BEFORE the
// questions were written, so no rotation pass was needed afterwards.
const HB = "https://www.nj.gov/mvc/pdf/license/drivermanual.pdf";
const POINTS = "https://www.nj.gov/mvc/license/points-schedule.htm";
const SURCHARGE = "https://www.nj.gov/mvc/license/surcharge.htm";
const INSURANCE = "https://www.nj.gov/dobi/division_consumers/pdf/autoguide2026.pdf";

export const newjerseySets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Documents, Vehicles and Penalties",
    difficulty: "medium",
    description:
      "The half of the New Jersey test that is not about steering: licensing deadlines, inspection cycles, point values, the penalties attached to them, and the vehicle rules the MVC enforces at the roadside.",
    questions: [
      {
        id: "nj_s4_01",
        topic: "licensing",
        question:
          "You move to New Jersey holding a valid licence from another state. How long do you have to apply for a New Jersey licence?",
        choices: [
          "60 days, or before the current licence expires if that comes sooner",
          "30 days, with no exceptions",
          "6 months",
          "Until the out-of-state licence expires, however long that takes",
        ],
        correctIndex: 0,
        explanation:
          "Sixty days from becoming a permanent resident, or the expiry of your existing licence, whichever arrives first. A commercial licence must be converted within 30 days.",
        context:
          "The same 60-day clock applies to your vehicle, which must be titled and registered in New Jersey within 60 days of your moving in, sooner if the out-of-state registration lapses first. The out-of-state licence has to be surrendered when the New Jersey one is issued. A licence from another country is different: you may drive on it for up to a year.",
        trap:
          "The deadline is not simply 60 days. An out-of-state licence expiring in three weeks shortens your window to three weeks.",
        excerptKey: "new-resident-60-days",
        sourceLabel: "NJ Driver Manual - Chapter 1, Laws Governing Driver Licenses",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_02",
        topic: "rules",
        question:
          "You have started to overtake and can see the broken centre line becoming solid ahead. What does the manual require?",
        choices: [
          "Complete the pass, since you began it legally",
          "Move back in as soon as the line becomes solid",
          "Complete the pass before the centre lines are solid again",
          "Straddle the line until the manoeuvre is finished",
        ],
        correctIndex: 2,
        explanation:
          "The whole manoeuvre must be finished before the lines become solid again. That moves the decision point well back from the markings themselves.",
        context:
          "New Jersey's passing markings work in three states: both lines solid means nobody passes, one broken means only the side with the broken line may pass, both broken means either side may. The rule about completing the pass is what makes a legal start insufficient by itself, since you have to have judged the length of the gap in advance.",
        trap:
          "Starting the manoeuvre inside the broken section does not licence you to finish it inside the solid one. The offence attaches to where you are, not where you started.",
        excerptKey: "passing-complete-before-solid",
        sourceLabel: "NJ Driver Manual - Chapter 4, Passing",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_03",
        topic: "sharing",
        question:
          "You are on a three-lane highway behind a tractor-trailer that is drifting. Which manoeuvre does the manual rule out?",
        choices: [
          "Dropping back to increase your following distance",
          "Moving to the left lane to pass",
          "Passing the truck on the right",
          "Bearing right as an oncoming truck approaches",
        ],
        correctIndex: 2,
        explanation:
          "Never pass a truck on the right. The right-hand blind spot is the longest and deepest of a large vehicle's no-zones.",
        context:
          "Large vehicles carry blind spots on all four sides, and the manual sets out what each demands. Behind, stay well back and never pass close behind one that is reversing. In front, do not pull in until the whole cab shows in your mirror. Alongside, do not linger. Head-on, bear right as a large vehicle approaches to cut the wind turbulence and reduce the risk of a sideswipe.",
        trap:
          "A drifting truck feels like a reason to get past on whichever side is free. The right is precisely the side the driver cannot check.",
        excerptKey: "truck-front-no-zone",
        sourceLabel: "NJ Driver Manual - Chapter 8, Front No-Zone",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_04",
        topic: "signs",
        question:
          "There is no sign at the junction but the pavement carries a solid white stop line. What is its legal weight?",
        choices: [
          "Advisory only, since markings are guidance",
          "Binding only where a sign repeats it",
          "Binding on commercial vehicles only",
          "The same force of law as a sign or traffic signal",
        ],
        correctIndex: 3,
        explanation:
          "Road markings have the same force of law as signs and signals in New Jersey. A single solid white line across the road at an intersection means you stop behind it.",
        context:
          "The marking vocabulary is worth learning as a set. Yellow separates opposing directions and white separates traffic going the same way or marks the edge of the road. Dashed means passing is permitted when safe, solid on your side means it is not. White stop lines show where to stop, white crosswalks show where people cross, and white diamonds mark a lane reserved for high-occupancy vehicles.",
        trap:
          "Treating paint as advice is how drivers end up stopped inside a crosswalk. The line has the same authority as the sign it stands in for.",
        excerptKey: "road-markings-force-of-law",
        sourceLabel: "NJ Driver Manual - Chapter 11, Road Markings",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_05",
        topic: "speed",
        question:
          "Traffic and road surfaces are normal, and you are driving well below the limit with a queue building behind you. Is that an offence in New Jersey?",
        choices: [
          "Yes, state law prohibits blocking traffic through slow driving",
          "No, driving under the limit is always lawful",
          "Only on a highway with a posted minimum speed",
          "Only if you refuse to let others pass",
        ],
        correctIndex: 0,
        explanation:
          "When road surfaces and traffic are normal, New Jersey prohibits blocking traffic by driving slowly. Slow speed blocking traffic is a two-point violation.",
        context:
          "The manual makes the point twice, once under speed control and again as an element of aggressive driving, where unexpectedly altering your speed is listed alongside erratic lane changes and tailgating. If a mechanical problem stops you keeping up with the flow, the instruction is to pull off the road and switch on the hazard lights rather than continue as an obstruction.",
        trap:
          "The belief that you cannot be ticketed for driving slowly is widespread and wrong. The qualifier is normal road and traffic conditions, which is exactly when it applies.",
        excerptKey: "slow-driving-illegal",
        sourceLabel: "NJ Driver Manual - Chapter 4, Driving Too Slowly",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_06",
        topic: "signals",
        question:
          "A vertical signal head has four lenses. Which position holds the green arrow?",
        choices: [
          "Top, above the red",
          "Bottom, below the green",
          "Second from the top",
          "It varies by intersection",
        ],
        correctIndex: 1,
        explanation:
          "On a vertically hung signal, red is on top, yellow in the middle, green third and any green arrow at the bottom. On a horizontal head, red is always on the left.",
        context:
          "Consistent positioning exists so that a driver who cannot distinguish the colours, or who is looking into low sun, can still read the signal by position alone. It is also why New Jersey's commercial vision standard requires the ability to distinguish red, green and amber, while the basic licence standard is 20/50 acuity with or without lenses.",
        trap:
          "Reading a signal by colour alone fails in glare and in fog. Position is the backup, which is why the exam asks about the layout rather than the meanings.",
        excerptKey: "signal-order",
        sourceLabel: "NJ Driver Manual - Chapter 11, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_07",
        topic: "safety",
        question: "How fast should you be moving when reversing?",
        choices: [
          "About 10 mph, so the manoeuvre is over quickly",
          "Whatever feels controlled",
          "Walking speed, around 2 to 4 mph",
          "As slowly as the engine will idle in gear",
        ],
        correctIndex: 2,
        explanation:
          "Walking speed, which the manual puts at 2 to 4 mph. Head and body turned right, looking through the back window rather than at the mirrors.",
        context:
          "New Jersey tests reversing directly: you will be asked to back about 100 feet in a straight line, slowly and smoothly. Palming the wheel one-handed while turning in reverse can fail you outright. Backup cameras and parking sensors have been allowed on the road test since 2016, but the manual insists the underlying technique comes first.",
        trap:
          "Steering in reverse turns the car the way you turn the wheel, but the front of the vehicle swings the opposite way. That swing is what catches the car parked beside you.",
        excerptKey: "reverse-walking-speed",
        sourceLabel: "NJ Driver Manual - Chapter 3, Driving in Reverse",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_08",
        topic: "parking",
        question:
          "A fire engine is parked in service at the kerb. How close may you park to it?",
        choices: [
          "50 feet",
          "No closer than 200 feet",
          "100 feet",
          "Any distance, since the restriction covers hydrants only",
        ],
        correctIndex: 1,
        explanation:
          "Two hundred feet is the clearance around a fire department vehicle in service. You also may not drive over a fire hose unless a fire, rescue or police official directs you to.",
        context:
          "This is the largest parking distance in the manual and it is easy to miss because it sits in the emergency vehicle section rather than the parking list. The parking list carries the smaller fixed distances: 10 feet from a hydrant, 20 feet from a fire station driveway, 75 feet opposite one, 25 feet from a crosswalk at an intersection, and 50 feet from a stop sign or railroad crossing.",
        trap:
          "The 10-foot hydrant figure is the one everybody knows, and it makes 200 feet look implausible. They are different rules about different things.",
        excerptKey: "fire-vehicle-200-feet",
        sourceLabel: "NJ Driver Manual - Chapter 4, Pull Over and Stop for Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_09",
        topic: "emergencies",
        question:
          "Your car has gone into deep water and is still floating. What is the manual's advice?",
        choices: [
          "Wait for the pressure to equalise, then open a door",
          "Break the windshield, which is the weakest glass",
          "Stay belted and wait for the vehicle to settle on the bottom",
          "Get out through an open window while it is still floating",
        ],
        correctIndex: 3,
        explanation:
          "Escape through a window while the car is still on the surface. A door is almost impossible to open against water pressure, but a window can be wound down, and power windows may short out, so try them at once.",
        context:
          "A vehicle with the windows and doors closed floats for about three to ten minutes, which the manual describes as plenty of time in an emergency. Wearing a seat belt is the best insurance against being knocked unconscious on impact. A front-engined car sinks nose first with some air trapped near the roof at the rear, and once outside, follow the air bubbles to the surface.",
        trap:
          "Waiting for the pressure to equalise is a genuine physical effect and a terrible plan, because it means letting the car fill. The window is the exit while you still have one.",
        excerptKey: "escape-through-window",
        sourceLabel: "NJ Driver Manual - Chapter 5, Plunging Into Water",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_10",
        topic: "impairment",
        question:
          "A parent is convicted of DUI with their 10-year-old in the car. What does New Jersey add?",
        choices: [
          "Nothing extra, since the DUI penalties already apply",
          "A disorderly persons offence, suspension of up to six months and up to five days of community service",
          "An automatic one-year suspension only",
          "A mandatory custodial sentence",
        ],
        correctIndex: 1,
        explanation:
          "Having a minor under 18 in the vehicle makes it a disorderly persons offence on top of the DUI, with driving privileges suspended for up to six months and up to five days of community service.",
        context:
          "New Jersey stacks DUI consequences from several directions at once. A first offence brings fines, an IDRC detention of 12 to 48 hours, possible imprisonment, a $1,000 annual surcharge for three years and an ignition interlock whose length depends on the reading. The minor-passenger provision sits on top of all of it, and unlike the rest it is a criminal offence rather than a motor vehicle one.",
        trap:
          "The extra penalty attaches to the presence of the child, not to whether the child was harmed or whether the driving was worse than usual.",
        excerptKey: "dui-with-minor",
        sourceLabel: "NJ Driver Manual - Chapter 7, Driving Under the Influence with a Minor",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_11",
        topic: "rightOfWay",
        question:
          "You arrive at a four-way stop and another driver is already stopped there, waiting. You are on their right. Who goes first?",
        choices: [
          "You do, because the right-hand rule decides it",
          "The driver already stopped at the intersection",
          "Whoever is turning rather than going straight",
          "Whichever driver signals first",
        ],
        correctIndex: 1,
        explanation:
          "The right-hand rule only breaks a tie between drivers who arrive together. Someone already stopped got there first, so you yield to them.",
        context:
          "New Jersey states both halves of the rule side by side in the same paragraph: yield to the driver on your right when you both get there at the same time, and yield to a driver already stopped at the intersection. Arrival order is the primary rule; position is only the tie-break. Failure to yield at an intersection carries two points.",
        trap:
          "Knowing the right-hand rule too well is what causes this one. It is a tie-break, and there is no tie when the other driver is already sitting at the line.",
        excerptKey: "yield-already-stopped",
        sourceLabel: "NJ Driver Manual - Chapter 4, Intersections",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_12",
        topic: "licensing",
        question:
          "You are in your two-year probationary driver period and pick up two moving violations totalling four points. What follows?",
        choices: [
          "You must enrol in the Probationary Driver Program",
          "Nothing until you reach six points",
          "An automatic 30-day suspension",
          "A written warning from the MVC",
        ],
        correctIndex: 0,
        explanation:
          "Two or more moving violations totalling four or more points during the probationary period trigger compulsory enrolment in the Probationary Driver Program.",
        context:
          "The two-year probationary driver period starts when you receive a special learner or examination permit, and it is a different thing from the one-year probationary licence stage of the GDL. Completing the programme takes up to three points off your record, but failing to complete it, or picking up another point violation during the test period, suspends your driving privileges.",
        trap:
          "This threshold sits far below the six-point surcharge and the twelve-point suspension. New drivers hit it long before either of those.",
        commonlyMissed: true,
        excerptKey: "probationary-driver-program",
        sourceLabel: "NJ Driver Manual - Chapter 7, Probationary Driver Program",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_13",
        topic: "rules",
        question:
          "You are waiting outside a shop with the engine running. How long may you idle in New Jersey?",
        choices: [
          "As long as you like, provided you stay with the vehicle",
          "No more than three consecutive minutes",
          "No more than ten minutes",
          "No more than one minute in a residential area",
        ],
        correctIndex: 1,
        explanation:
          "Three consecutive minutes is the limit, and the fine runs from $250 to $1,000 for each violation. Exceptions cover traffic queues, repairs, inspections, emergency vehicles and buses loading passengers.",
        context:
          "The idling rule sits in the state's air pollution regulations rather than the traffic code, which is why it surprises people, but it is enforced against drivers and vehicle owners alike. The manual repeats it in the winter driving section too, because warming a car up on a cold morning is the commonest way to breach it.",
        trap:
          "Sitting in traffic is exempt. Sitting outside a shop is not, and three minutes is a shorter warm-up than most people give a cold engine.",
        excerptKey: "idling-three-minutes",
        sourceLabel: "NJ Driver Manual - Chapter 3, Idling Your Vehicle",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_14",
        topic: "signs",
        question: "What do white diamonds painted along a highway lane indicate?",
        choices: [
          "A lane reserved for high-occupancy vehicles",
          "A lane that is about to end",
          "A lane where passing is prohibited",
          "A lane reserved for emergency vehicles",
        ],
        correctIndex: 0,
        explanation:
          "White diamonds mark high-occupancy vehicle lanes, reserved for a particular vehicle type or for vehicles carrying multiple riders. The regulatory signs alongside tell you the hours of operation.",
        context:
          "New Jersey's other special markings follow the same logic of paint carrying a message the sign repeats. White special markings spell out STOP AHEAD, SCHOOL and R X R on the surface. Yellow edge lines separate the shoulder from the travel lane. And the markings themselves carry the same force of law as the signs they support.",
        trap:
          "The diamond is not a general carpool courtesy. It is a restriction with posted hours, and using the lane outside them is a violation.",
        excerptKey: "hov-diamonds",
        sourceLabel: "NJ Driver Manual - Chapter 11, Road Markings",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_15",
        topic: "speed",
        question:
          "You are convicted of exceeding a New Jersey speed limit by 20 mph. How many points go on your record?",
        choices: ["4", "2", "5", "3"],
        correctIndex: 0,
        explanation:
          "The speeding bands are 2 points for 1 to 14 mph over, 4 points for 15 to 29 mph over, and 5 points for 30 mph or more over. Twenty falls in the middle band.",
        context:
          "Speeding sits mid-table in New Jersey's point schedule, which is worth knowing because several offences people think of as minor sit far higher. Tailgating, reckless driving, racing, improper passing of a school bus and failing to pass to the right of an oncoming vehicle all carry five points. Leaving the scene of a crash with personal injury carries eight, the heaviest single entry.",
        trap:
          "Points are banded, not proportional. Being 14 mph over costs two points and 15 mph over costs four, so a single mile per hour doubles the tally.",
        commonlyMissed: true,
        excerptKey: "points-speeding",
        sourceLabel: "NJ MVC - NJ Points Schedule",
        sourceUrl: POINTS,
      },
      {
        id: "nj_s4_16",
        topic: "sharing",
        question:
          "You are signalling a right turn and a cyclist is coming up on your right, going straight through the intersection. What must you do?",
        choices: [
          "Turn first, since you signalled",
          "Sound the horn and turn",
          "Move right to block the cyclist's line before turning",
          "Yield to the cyclist and let them clear the intersection",
        ],
        correctIndex: 3,
        explanation:
          "A motorist signalling a right turn must yield to bicyclists, skateboarders and inline skaters moving through the intersection. The manual also asks you to wait until the intersection clears before starting the turn.",
        context:
          "The right hook is one of the commonest ways cyclists are injured, and New Jersey addresses it directly by making the turning driver yield. The same section asks you to check blind spots before turning, parallel parking, opening a door or pulling away from a kerb, and to turn your head rather than trust the mirrors alone.",
        trap:
          "Signalling establishes what you intend to do, not a right to do it. The cyclist proceeding straight has priority over your turn across their path.",
        excerptKey: "bicycle-right-turn-yield",
        sourceLabel: "NJ Driver Manual - Chapter 8, Bicycles, Skateboards, and Inline Skates",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_17",
        topic: "safety",
        question: "How would you notice carbon monoxide building up in a vehicle?",
        choices: [
          "By its sharp exhaust smell",
          "By a bluish haze in the cabin",
          "You may not notice at all, because it is odourless and colourless",
          "By the engine running roughly",
        ],
        correctIndex: 2,
        explanation:
          "Carbon monoxide is odourless and colourless, and the manual warns it can kill before any symptom appears. That is why the answer is prevention rather than detection.",
        context:
          "The conditions that let it build up are specific: an exhaust leak or badly tuned engine, driving with the trunk or tailgate open, holes in the bodywork, idling in a garage or confined space even with the door open, and a tailpipe blocked by snow, leaves or water. Headache, dizziness, nausea, chest pain, confusion and loss of consciousness are the symptoms. If you suspect it, switch off, get out and call 911.",
        trap:
          "The exhaust smell people associate with fumes comes from other compounds. Carbon monoxide itself gives you no warning whatever.",
        excerptKey: "carbon-monoxide",
        sourceLabel: "NJ Driver Manual - Chapter 3, Carbon Monoxide Poisoning",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_18",
        topic: "signals",
        question:
          "You are stopped at a railroad crossing. The gates lift and the bells stop, but the red lights are still flashing. May you cross?",
        choices: [
          "Yes, because the gates are the controlling device",
          "Yes, if you can see the track is clear both ways",
          "No, you wait until every active device has switched off",
          "Yes, but only at walking pace",
        ],
        correctIndex: 2,
        explanation:
          "You go only when the red lights have stopped flashing and all the other active warning devices have deactivated. A second train on another track is the reason the rule is written that way.",
        context:
          "New Jersey separates warning devices into passive and active. Pavement markings, signs and crossbucks are passive and always present. Flashing red lights, ringing bells and lowered gates are active and mean a train is coming now. The crossbuck alone carries the weight of a yield sign; the active devices carry the weight of a stop.",
        trap:
          "Gates rising feels like the all-clear because it is the most visible device. The lights are the last thing to stop, and they stop for a reason.",
        excerptKey: "railroad-wait-for-gates",
        sourceLabel: "NJ Driver Manual - Chapter 4, Stop at Railroad Crossings",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_19",
        topic: "parking",
        question:
          "You park overnight on a rural road that is neither a business nor a residential zone. What does New Jersey require?",
        choices: [
          "Hazard lights left on",
          "Headlights left on low beam",
          "Nothing, provided you are off the travelled way",
          "Parking lights left on",
        ],
        correctIndex: 3,
        explanation:
          "Parking lights are required on vehicles parked in areas other than business or residential zones. They exist to show other drivers where a stationary vehicle is.",
        context:
          "Parking lights have a narrow role in New Jersey and the manual is careful about it. They mark a parked car for a short period, and they can never substitute for headlights when headlights are required. Hazard lights and spotlights are grouped together as emergency equipment, not to be used for ordinary driving, which is why leaving hazards on is not the answer here.",
        trap:
          "Hazard lights look like the safe choice for a car at the roadside. New Jersey reserves them for emergencies and asks for parking lights instead.",
        excerptKey: "parking-lights-zones",
        sourceLabel: "NJ Driver Manual - Chapter 4, Other Types of Lights",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_20",
        topic: "emergencies",
        question: "A front tyre blows out at speed. What does the manual tell you to do?",
        choices: [
          "Brake hard and steer for the shoulder",
          "Hold the wheel firmly, come off the gas and let the car coast to a stop",
          "Accelerate briefly to regain stability",
          "Pull the parking brake to slow the car evenly",
        ],
        correctIndex: 1,
        explanation:
          "Grip the wheel, keep the car straight, lift off the accelerator and do not brake. Let the car coast down as you steer to a safe area off the road.",
        context:
          "New Jersey's failure sequences share a principle, which is that the first instinct usually makes things worse. Brake failure calls for a lower gear and hard fast pumping before the parking brake. A stuck accelerator calls for neutral, eyes on the road. A dead engine takes the power steering with it, so the wheel needs far more effort. And you never turn the ignition to lock while moving, because the steering will lock too.",
        trap:
          "Braking during a blowout unbalances a car that has already lost grip on one corner. Coasting keeps what stability is left.",
        excerptKey: "tire-blowout",
        sourceLabel: "NJ Driver Manual - Chapter 5, Tire Blowout",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_21",
        topic: "impairment",
        question:
          "What does New Jersey's open container law cover in the passenger area of a vehicle?",
        choices: [
          "Open alcohol containers only",
          "Open alcohol containers, but only for the driver",
          "Alcohol containers only when the vehicle is moving",
          "Open or unsealed alcohol containers and unsealed cannabis items",
        ],
        correctIndex: 3,
        explanation:
          "The offence covers open or unsealed alcoholic beverage containers and unsealed cannabis items in the passenger area. It is $200 for a first offence and $250 or 10 days of community service afterwards.",
        context:
          "New Jersey extended the container rule to cannabis when it legalised possession, so the two now sit in the same provision. Drinking while driving or riding is a separate offence again, at $200 for a first offence and $250 for a second, with community service attached to the second. None of these depends on the driver being impaired.",
        commonlyMissed: true,
        trap:
          "Legal possession of cannabis says nothing about carrying it unsealed in the cabin. The container rule is about the seal, not about legality.",
        excerptKey: "open-container",
        sourceLabel: "NJ Driver Manual - Chapter 7, Motor Vehicle Violations",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_22",
        topic: "rightOfWay",
        question:
          "A pedestrian using a white cane is about to cross the road ahead of you, away from any intersection. What must you do?",
        choices: [
          "Slow down and pass behind them",
          "Sound the horn to make your presence known",
          "Yield only if they are already in the roadway",
          "Stop",
        ],
        correctIndex: 3,
        explanation:
          "New Jersey requires a full stop for a person using a predominantly white or metallic cane, for a blind person with a guide dog, and for a guide dog instructor at work. The manual calls the law extremely specific on this.",
        context:
          "This is one of a small group of situations where the manual lists stopping as an absolute duty rather than a yield. The others are a stop sign, a red light, an officer's order, a school bus showing red flashers, a bridge about to open for boat traffic, a pedestrian in a crosswalk, and a motorised wheelchair or mobility device in a crosswalk. What they have in common is that no judgment call is left to you about whether the other party is close enough to matter.",
        trap:
          "Sounding the horn is actively counterproductive here, because a blind pedestrian is navigating by the sound of your engine. Stopping is what tells them the road is safe.",
        excerptKey: "white-cane-stop",
        sourceLabel: "NJ Driver Manual - Chapter 8, Visually Challenged Persons",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_23",
        topic: "licensing",
        question:
          "You have five points on your New Jersey record and drive for a year with no violations and no suspensions. What happens?",
        choices: [
          "Up to three points come off, so you drop to two",
          "All five come off after twelve clean months",
          "Nothing, because points are permanent",
          "Two come off, so you drop to three",
        ],
        correctIndex: 0,
        explanation:
          "Up to three points are subtracted for each year without a violation or suspension while your privileges remain in good standing, and the total is never taken below zero.",
        context:
          "New Jersey draws a distinction that trips people up: the violations themselves stay on your driving record permanently, since every point violation after 1 March 1974 remains there, but the active point total can be reduced. A defensive driving course takes off two points and is recognised only once every five years. A Driver Improvement Program takes off three. Neither reduction applies to surcharges.",
        trap:
          "Point reduction and record clearance are different things. A clean year lowers your working total; it does not erase the entry.",
        excerptKey: "points-annual-reduction",
        sourceLabel: "NJ Driver Manual - Chapter 7, Point System",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_24",
        topic: "rules",
        question:
          "You are making a right turn from a two-lane street. Where should the car be as you begin?",
        choices: [
          "Toward the centre of the road, so the turn is not too tight",
          "In the middle of your lane",
          "As far to the right as possible, close to the kerb or parked cars",
          "Straddling the lane line to give yourself room",
        ],
        correctIndex: 2,
        explanation:
          "Approach as far to the right as you can and do not swing outward or into another lane while turning. Correct positioning is what keeps a cyclist or another vehicle out of the gap on your right.",
        context:
          "The manual explains the reasoning rather than just the technique: if you leave a gap on your right, something will fill it, and you will turn across it. The left-turn rules are equally positional, with the approach as close as possible to the centre line and no crossing of lane markings while turning. Improper right or left turning costs three points.",
        trap:
          "Swinging wide first to make the turn easier is a lorry technique on a road built for it. In a car it opens exactly the gap the rule is written to close.",
        excerptKey: "right-turn-position",
        sourceLabel: "NJ Driver Manual - Chapter 4, Right Turns",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_25",
        topic: "signs",
        question:
          "A sign with white symbols on a brown background appears on the highway. What does it point to?",
        choices: [
          "Fuel, food and lodging",
          "The route number ahead",
          "A construction detour",
          "Public recreation or a scenic area",
        ],
        correctIndex: 3,
        explanation:
          "Brown is New Jersey's colour for public recreation and scenic guidance. Blue does motorist services, green does direction guidance.",
        context:
          "Guidance signs are the family that never tells you to do anything, and their colours split the job three ways: brown for parks and scenic routes, blue for services such as fuel and lodging, green for routes and destinations. Two more colours are reserved for truck routing, with green marking where trucks are permitted and red marking where they are prohibited.",
        trap:
          "Brown and blue both appear at highway exits and both feel like tourist information. Brown is the destination itself; blue is the petrol station on the way.",
        excerptKey: "sign-colors-orange-brown",
        sourceLabel: "NJ Driver Manual - Chapter 11, Sign Colors and Shapes",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_26",
        topic: "speed",
        question:
          "Using the manual's older car-length rule, roughly how much space should you leave at 40 mph?",
        choices: [
          "Two car lengths",
          "Three car lengths",
          "Six car lengths",
          "Four car lengths, about 80 feet",
        ],
        correctIndex: 3,
        explanation:
          "One car length, roughly 20 feet, for every 10 mph. At 40 mph that is four car lengths, about 80 feet, in ideal conditions.",
        context:
          "The car-length rule is the fair-weather baseline and the manual's table shows how far it moves in bad conditions: at 20 mph you need two car lengths in ideal conditions, four on wet pavement or gravel, six on packed snow and twelve on ice. The three-seconds-plus rule does the same job without asking you to estimate distances, which is why the manual prefers it.",
        trap:
          "The manual gives following distance two ways and people blend them, producing three car lengths from the three-second rule. Three seconds is time; the car-length version scales with speed.",
        excerptKey: "one-car-length-rule",
        sourceLabel: "NJ Driver Manual - Chapter 5, One Car Length",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_27",
        topic: "sharing",
        question:
          "According to the manual, what is the most common cause of motorcycle crashes?",
        choices: [
          "Riders travelling too fast for the conditions",
          "Poor road surfaces and gratings",
          "Other motorists failing to detect and recognise motorcycles in traffic",
          "Motorcycles braking in shorter distances than cars expect",
        ],
        correctIndex: 2,
        explanation:
          "The manual puts it on the car driver: failure to detect and recognise motorcycles in traffic is the most common cause of motorcycle crashes.",
        context:
          "The practical instructions follow from that. Check blind spots twice before changing lanes or turning, watch for motorcycles at intersections and especially when turning left across one, anticipate a rider swerving around a drain grating that a car would ignore, and remember that a motorcycle can stop in a shorter distance than you can. When one passes you, hold your speed and position.",
        trap:
          "Blaming rider behaviour is the intuitive answer and the manual specifically rejects it. The failure it names is a perceptual one on the part of drivers.",
        excerptKey: "motorcycle-detection",
        sourceLabel: "NJ Driver Manual - Chapter 8, Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_28",
        topic: "safety",
        question: "How does the manual say you should set the outside mirrors?",
        choices: [
          "So you can just see the tip of the driver-side front door handle in the lower corner",
          "So the side of your own car fills a third of the glass",
          "Angled outward until your car disappears entirely",
          "Angled down so you can see the kerb when parking",
        ],
        correctIndex: 0,
        explanation:
          "The tip of the driver-side front door handle should sit in the lower right of the mirror. That gives you a view of the lanes to the left and rear without wasting glass on your own bodywork.",
        context:
          "Mirrors reduce blind spots but never remove them, so the manual pairs the adjustment with a check: after starting the engine, turn and look back rather than trusting the mirrors. You can test the setup on the road by letting a car pass on the left, since its front bumper should appear in the outside mirror as it leaves the inside one.",
        trap:
          "Turning the mirrors so far out that your own car vanishes is a popular technique and not what New Jersey teaches. The manual wants a fixed reference point in the glass.",
        excerptKey: "mirror-adjustment",
        sourceLabel: "NJ Driver Manual - Chapter 3, Starting a Parked Car",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_29",
        topic: "emergencies",
        question: "The back of your car starts to slide out on a wet bend. What do you do?",
        choices: [
          "Brake firmly to slow the car",
          "Steer away from the direction of the slide",
          "Come off the gas and steer in the direction the rear is sliding, looking where you want to go",
          "Pull the parking brake and steer straight",
        ],
        correctIndex: 2,
        explanation:
          "Lift off the accelerator and steer in the direction the rear of the car is sliding, without over-steering, keeping your eyes on where you want the car to end up.",
        context:
          "The manual treats front-wheel and rear-wheel drive the same way in a skid, and it warns that turning the wheel quickly away from the slide is how a slide becomes a spin. During a side skid you avoid the brakes altogether. When the car comes back under control you feel it, and that is the moment to straighten the wheels.",
        trap:
          "Steering away from the slide is the instinct and it is the exact opposite of the instruction. Looking at what you are about to hit is the other half of the error, because you steer where you look.",
        excerptKey: "skid-steer-into",
        sourceLabel: "NJ Driver Manual - Chapter 5, Skids",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_30",
        topic: "parking",
        question:
          "You are backing out of an angle parking space in a shopping centre. What does the manual add to the usual checks?",
        choices: [
          "Tap the horn to warn nearby pedestrians",
          "Switch on the hazard lights until you are clear",
          "Reverse at a steady 10 mph so you clear the aisle quickly",
          "Rely on the reversing camera rather than turning your head",
        ],
        correctIndex: 0,
        explanation:
          "Tap the horn to warn pedestrians. The sequence is to walk around the car first, reverse slowly, stop and look again once you can see past the vehicles beside you, and only then continue.",
        context:
          "The horn is a warning device in New Jersey rather than an expression of irritation, and the manual lists its proper uses: passing another vehicle outside a business or residential zone, emerging from a blind alley, curve or driveway, and alerting another driver to danger. Under normal conditions it should be audible at 200 feet.",
        trap:
          "Remember that the front of the car swings the opposite way to the turn. That swing is what catches the vehicle in the next bay.",
        excerptKey: "angle-parking-horn",
        sourceLabel: "NJ Driver Manual - Chapter 3, Angle Parking",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_31",
        topic: "impairment",
        question:
          "After alcohol, which drug does the manual say is most often found in drivers involved in crashes?",
        choices: ["Cocaine", "Marijuana", "Prescription opioids", "Antihistamines"],
        correctIndex: 1,
        explanation:
          "Marijuana. The manual lists the specific driving skills it degrades: tracking, distance judgment, vigilance and divided attention.",
        context:
          "New Jersey bans driving under the influence of any drug, and bans driving while in possession of a prescription drug without a valid prescription. If asked, you must produce proof of a prescription, and without it the drug is treated as illegal. Anything labelled as causing drowsiness or dizziness should not be taken before driving, and alcohol should never be mixed with medication.",
        trap:
          "Legal availability changes nothing about the driving offence. Impairment by cannabis is a DUI in New Jersey exactly as alcohol is.",
        excerptKey: "marijuana-second-most",
        sourceLabel: "NJ Driver Manual - Chapter 6, Drugs and Driving",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_32",
        topic: "rightOfWay",
        question:
          "You are in the acceleration lane joining the New Jersey Turnpike. Who has priority?",
        choices: [
          "You do, because merging traffic is entitled to a gap",
          "Traffic already travelling on the main road",
          "Whoever reaches the merge point first",
          "Neither, since the acceleration lane removes the question",
        ],
        correctIndex: 1,
        explanation:
          "Traffic already on the main road has priority, and you yield to it before moving over. The acceleration lane exists so you can match its speed, not so you can insist on a gap.",
        context:
          "The manual's entry checklist is short: obey any advisory speed on the ramp, build up to the flow's speed as you leave the acceleration lane, avoid coming to a complete stop in it, and move into the right-hand lane when it is safe. Failing to use the proper entrance to a limited-access highway is a two-point violation.",
        trap:
          "Stopping at the end of an acceleration lane is the manoeuvre the manual warns against, because rejoining from a standstill is far more dangerous than merging at speed.",
        excerptKey: "acceleration-lane-yield",
        sourceLabel: "NJ Driver Manual - Chapter 4, Entering Highways, Parkways, and Turnpikes",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_33",
        topic: "licensing",
        question:
          "How often must a New Jersey-registered petrol passenger car, more than five model years old, be inspected?",
        choices: ["Every year", "Every three years", "Every two years", "Only when it changes hands"],
        correctIndex: 2,
        explanation:
          "Every two years for passenger-registered petrol vehicles of model year 1996 or newer that are more than five model years old. Commercially registered vehicles are inspected annually.",
        context:
          "A new passenger car gets a dealer sticker that expires five years after it is first registered, so its first inspection falls due then. If you move to New Jersey with a car five model years old or older, it must be inspected within 14 days of registering it. Diesel passenger vehicles of model year 1997 or newer with a GVWR of 8,500 pounds or less follow the same two-year emissions cycle.",
        commonlyMissed: true,
        trap:
          "The annual cycle belongs to commercially registered vehicles. Private passenger cars are on two years, and new ones are exempt for five.",
        excerptKey: "inspection-two-years",
        sourceLabel: "NJ Driver Manual - Chapter 9, Vehicle Inspection",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_34",
        topic: "rules",
        question:
          "Your reversing lights stay on while you drive forward because of a faulty switch. What is the position in New Jersey?",
        choices: [
          "It is against the law to have any backup lights on while moving forward",
          "It is permitted, since extra light improves visibility",
          "It is permitted in daylight only",
          "It is a matter for the inspection station, not the road",
        ],
        correctIndex: 0,
        explanation:
          "New Jersey law prohibits any backup lights being on while a vehicle is moving forward. Reversing lights should work, and should work only in reverse.",
        context:
          "Lighting rules in New Jersey are mostly about not confusing other drivers. Spotlights are for emergencies and cannot be used for driving. Hazard lights are emergency equipment. Parking lights cannot stand in for headlights. Add-on tinting is banned on windshields and front side windows, which is also one of the faults that will get a car rejected for the road test.",
        trap:
          "It reads as a harmless fault. It is a specific statutory prohibition, and the reason is that a white light showing forward tells following drivers you are reversing.",
        excerptKey: "backup-lights",
        sourceLabel: "NJ Driver Manual - Chapter 3, Car Condition",
        sourceUrl: HB,
      },
      {
        id: "nj_s4_35",
        topic: "signals",
        question:
          "A steady orange raised palm is showing at a pedestrian crossing. What does it mean for someone already halfway across?",
        choices: [
          "They must turn back to the kerb they came from",
          "They must stop where they are and wait",
          "They lose the right of way immediately",
          "They should move promptly to a safe spot, and drivers still give way",
        ],
        correctIndex: 3,
        explanation:
          "The raised palm tells people not to step off the kerb. Anyone already in the road should get to a safe spot quickly, and pedestrians in the crosswalk keep the right of way while they do.",
        context:
          "New Jersey pairs this with a rule that catches drivers out at changing signals: you stop for all pedestrians in a crosswalk even if they entered on a proper signal and are still there when it changes. The white walking figure or countdown means pedestrians may cross and turning motorists must yield to them.",
        trap:
          "Treating a changed signal as a transfer of priority is exactly the failure the rule addresses. Somebody mid-crossing keeps their right of way until they are clear.",
        excerptKey: "pedestrian-signal-raised-palm",
        sourceLabel: "NJ Driver Manual - Chapter 11, Pedestrian Signals",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Thirty-five questions built around the items New Jersey learners measurably get wrong: point values, suspension penalties, the stacked thresholds, and the rules the manual states once and never repeats.",
    questions: [
      {
        id: "nj_s5_01",
        topic: "licensing",
        question:
          "How many points does a conviction for improper passing in a no-passing zone carry in New Jersey?",
        choices: ["2", "4", "5", "3"],
        correctIndex: 1,
        explanation:
          "Four points. Improper passing on the right or off the roadway also carries four, and improper passing on the Turnpike, Parkway or Atlantic City Expressway carries four as well.",
        context:
          "Passing offences cluster at the top of New Jersey's schedule because of what they risk. Four points for improper passing in a no-passing zone or on the right; five for failing to pass to the right of an oncoming vehicle and for improperly passing a school bus; four for improperly passing a frozen dessert truck. Six points within three years triggers a surcharge and twelve triggers suspension, so a single passing conviction takes you a third of the way to the money penalty.",
        commonlyMissed: true,
        trap:
          "Measured practice-test data puts this among the most-missed New Jersey items, at about a 53 percent error rate, with most people guessing five or three. It is four.",
        excerptKey: "points-improper-passing",
        sourceLabel: "NJ MVC - NJ Points Schedule",
        sourceUrl: POINTS,
      },
      {
        id: "nj_s5_02",
        topic: "rules",
        question:
          "You are caught driving in New Jersey while your licence is suspended, for the first time. What is the penalty?",
        choices: [
          "A warning and immediate restoration on payment of a fee",
          "A $500 fine and up to six months of additional suspension",
          "A $250 fine only",
          "A mandatory 10-day jail sentence",
        ],
        correctIndex: 1,
        explanation:
          "A first offence is a $500 fine and up to six months of additional licence or registration suspension. A second is $750 and up to five days in jail; a third is $1,000 and a ten-day sentence.",
        context:
          "Driving while suspended escalates fast when the original suspension was serious. If the suspension was for failing to insure the vehicle, add a one to two year suspension and possible imprisonment for up to 90 days. If it was for drink, refusal or habitual offender status, add one to two years and 10 to 90 days. Doing it near a school while under a DUI suspension brings 60 to 90 days for a first offence. There is also a $250 annual surcharge for three years.",
        commonlyMissed: true,
        trap:
          "Measured practice-test data puts the error rate on this item near 48 percent, because people expect a warning or a small fine. The additional suspension is the part that hurts most.",
        excerptKey: "driving-while-suspended",
        sourceLabel: "NJ Driver Manual - Chapter 7, Driving While Suspended",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_03",
        topic: "licensing",
        question:
          "Someone alters the date of birth on their New Jersey driver licence. What can that cost them?",
        choices: [
          "A $100 fine",
          "A $250 fine and points",
          "Loss of driving privileges, a fine up to $1,000, and possible imprisonment",
          "Nothing until they try to use it",
        ],
        correctIndex: 2,
        explanation:
          "Altering a licence or presenting an altered one can cost the driving privilege, a fine of up to $1,000 and imprisonment. Obtaining a licence illegally carries a fine of up to $500 and possible imprisonment.",
        context:
          "New Jersey treats licence documents as security items rather than as convenience cards, which is why the digital driver licence carries more than twenty covert and overt features and is produced centrally rather than at the counter. Related offences follow the same logic: lying on an application costs $200 to $500 and six months to two years of privileges, and having somebody else sit your test costs $200 to $500 and 30 to 90 days in jail.",
        commonlyMissed: true,
        trap:
          "Measured practice-test data records roughly a 46 percent error rate here, and the most-chosen wrong answers are small fines. The maximum is $1,000 plus loss of licence plus imprisonment.",
        excerptKey: "license-alteration",
        sourceLabel: "NJ Driver Manual - Chapter 1, Digital Driver License",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_04",
        topic: "sharing",
        question:
          "A commercial bus that finished loading a minute ago is now in the traffic stream and signals to change lanes in front of you. Must you yield?",
        choices: [
          "No, the yield duty ends once the bus is back in the normal flow of traffic",
          "Yes, buses always have priority over other vehicles",
          "Yes, but only on roads with a posted limit of 35 mph or less",
          "Only if it is a school bus",
        ],
        correctIndex: 0,
        explanation:
          "The duty covers a bus re-entering traffic after dropping off or picking up passengers. Once it is back in the normal flow, an ordinary lane change gets no special treatment.",
        context:
          "New Jersey wrote the yield law to solve one problem, a bus stranded at the kerb in heavy traffic, and it stops there. Bus operators are separately required to drive safely and responsibly. Breaching the re-entry duty carries a fine of $50 to $200 and up to 15 days in jail. Postal vehicles rejoining traffic get the same courtesy.",
        trap:
          "Reading the rule as a general bus priority is the mistake. It is a re-entry rule with a clear endpoint, and lane changes fall outside it.",
        excerptKey: "bus-lane-change-exception",
        sourceLabel: "NJ Driver Manual - Chapter 8, Yielding to School and Commercial Buses",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_05",
        topic: "impairment",
        question: "What makes someone a habitual offender in New Jersey?",
        choices: [
          "Three convictions for the same offence",
          "Twelve or more points at any one time",
          "Two DUI convictions within ten years",
          "Having their licence suspended three times in three years",
        ],
        correctIndex: 3,
        explanation:
          "Three suspensions in three years makes a driver a habitual offender. It is defined by suspensions, not by convictions or points.",
        context:
          "The label matters because it raises the stakes on everything afterwards. Driving while suspended as a habitual offender brings a $500 fine, one to two years of additional suspension and possible imprisonment for 10 to 90 days. Suspension itself has many causes beyond moving violations: unpaid parking tickets, failing to provide proof of insurance, failing to respond to an MVC notice, physical or mental disqualification, and being at fault in a fatal crash.",
        trap:
          "Points and suspensions are different currencies. You can be suspended for reasons that carry no points at all, such as unpaid parking tickets.",
        excerptKey: "habitual-offender",
        sourceLabel: "NJ Driver Manual - Chapter 7, The Driving Privilege",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_06",
        topic: "speed",
        question:
          "You are convicted of doing 95 mph in a posted 65 mph zone. What is the point cost?",
        choices: ["2", "3", "4", "5"],
        correctIndex: 3,
        explanation:
          "Thirty mph or more over the limit is the top speeding band at five points. On top of that, the fine doubles because you were 10 mph or more over in a 65 mph zone.",
        context:
          "Five points is the same figure New Jersey attaches to reckless driving, racing on a highway, tailgating and improperly passing a school bus, which tells you how it grades extreme speed. The bands below it are two points for 1 to 14 mph over and four points for 15 to 29 mph over. Doubling of fines applies separately in 65 mph zones, in construction zones and on Safe Corridors.",
        commonlyMissed: true,
        trap:
          "Points and fines are separate mechanisms and both apply here. The five points come from the speed; the doubled fine comes from the type of zone.",
        excerptKey: "points-speeding",
        sourceLabel: "NJ MVC - NJ Points Schedule",
        sourceUrl: POINTS,
      },
      {
        id: "nj_s5_07",
        topic: "rightOfWay",
        question:
          "You are on a dual highway with a raised median. An ice cream truck on the far side stops with its red lights on and its stop arm out. What must you do?",
        choices: [
          "Stop and wait, as you would for a school bus",
          "Nothing, because you are on the other side of the median",
          "Slow to 15 mph and continue",
          "Slow to 10 mph and continue",
        ],
        correctIndex: 1,
        explanation:
          "The frozen dessert truck rule does not apply to you when a safety island or raised median separates you from the truck on a dual highway. There is no reduced speed either.",
        context:
          "This is one of the few places where New Jersey grants a complete exemption rather than a reduced obligation, and it is worth holding next to the school bus rule for contrast. A school bus on the far side of a median means 10 mph rather than nothing at all. Where the ice cream truck rule does apply, you yield to anyone crossing to or from it, stop, and then pass at no more than 15 mph.",
        commonlyMissed: true,
        trap:
          "The two truck rules look alike and behave differently. The median cancels the ice cream truck duty entirely; it only reduces the school bus duty to 10 mph.",
        excerptKey: "frozen-dessert-exception",
        sourceLabel: "NJ Driver Manual - Chapter 4, Stop for Frozen Dessert Trucks",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_08",
        topic: "signs",
        question:
          "Which of these counts as a passive warning device at a railroad crossing?",
        choices: [
          "Flashing red lights",
          "The crossbuck sign",
          "Ringing bells",
          "Lowered gates",
        ],
        correctIndex: 1,
        explanation:
          "Crossbucks, pavement markings and signs are passive: they are always there and warn of the crossing. Flashing lights, bells and gates are active and mean a train is coming now.",
        context:
          "The distinction shapes your obligation. Passive devices carry the weight of a yield, so you approach ready to give way to a train. Active devices carry the weight of a stop at least 15 feet back, and you do not move until every one of them has switched off. Some crossings have only passive devices, which is why the advance warning sign, a yellow round sign, matters so much.",
        trap:
          "Passive does not mean optional. A crossbuck alone still requires you to yield to a train, and trains always have the right of way.",
        excerptKey: "active-passive-warning-devices",
        sourceLabel: "NJ Driver Manual - Chapter 11, Road Markings",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_09",
        topic: "safety",
        question:
          "A 25-year-old passenger is riding unbelted in your back seat. Can they be ticketed?",
        choices: [
          "No, the belt law covers only front seats",
          "No, adults are exempt in the rear",
          "Yes, and the police can stop you for that reason alone",
          "Yes, but only if the vehicle is stopped for something else",
        ],
        correctIndex: 3,
        explanation:
          "Unbelted rear-seat occupants aged 18 and over fall under a secondary law, so a summons can be issued once the vehicle has been stopped for another reason, but not as the reason for the stop.",
        context:
          "New Jersey splits the belt law along two lines at once. Primary enforcement covers the driver, front-seat passengers and anyone under 18 anywhere in the vehicle, and the driver answers for the under-18s. Secondary enforcement covers rear-seat occupants of 18 and over. GDL permit and probationary licence holders lose the distinction entirely, because they must require every passenger to be belted wherever they sit.",
        commonlyMissed: true,
        trap:
          "The exemption people imagine for adults in the back does not exist. It is a difference in how the offence is enforced, not in whether it is one.",
        excerptKey: "seat-belt-secondary-rear",
        sourceLabel: "NJ Driver Manual - Chapter 3, Seat Belt Law",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_10",
        topic: "parking",
        question:
          "How much clearance must you leave from the end of a pedestrian safety zone when parking?",
        choices: ["10 feet", "15 feet", "20 feet", "25 feet"],
        correctIndex: 2,
        explanation:
          "Twenty feet from the end of a safety zone, and you may not park between the safety zone and the adjacent kerb at all.",
        context:
          "A safety zone is a marked refuge for pedestrians in the roadway, and New Jersey protects it from three directions: no parking between it and the kerb, no parking within 20 feet of its end, and driving through one is a two-point violation in its own right. The 20-foot figure is shared with the fire station driveway rule, which makes it worth learning as a pair.",
        trap:
          "Twenty-five feet belongs to crosswalks at intersections and is the obvious decoy here, because both rules are about pedestrian space.",
        excerptKey: "no-park-safety-zone",
        sourceLabel: "NJ Driver Manual - Chapter 4, Do Not Park",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_11",
        topic: "emergencies",
        question:
          "Roughly how long will a car with its windows and doors shut float after entering deep water?",
        choices: [
          "Under 30 seconds",
          "About three to ten minutes",
          "About twenty minutes",
          "It sinks immediately",
        ],
        correctIndex: 1,
        explanation:
          "Three to ten minutes, which the manual describes as plenty of time in an emergency. That window is what makes escaping through a window realistic.",
        context:
          "The escape sequence follows the physics. While the car floats, a window opens easily and a door does not. Power windows may short out, so you try them at once. Side and rear glass can be broken with a heavy, hard object, but not the windshield. A front-engined car goes down nose first with some air trapped near the roof at the rear, and once you are outside, follow the bubbles up.",
        trap:
          "Panic comes from believing the car sinks instantly. Knowing there are minutes rather than seconds is what makes the correct action possible.",
        excerptKey: "plunging-into-water",
        sourceLabel: "NJ Driver Manual - Chapter 5, Plunging Into Water",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_12",
        topic: "rules",
        question:
          "You are turning left from a one-way street onto another one-way street. Which lane do you leave from and enter?",
        choices: [
          "The right lane into the right lane",
          "The centre lane into whichever lane is free",
          "The left lane into the left lane of the new road",
          "Any lane, since one-way streets have no centre line",
        ],
        correctIndex: 2,
        explanation:
          "Approach in the left lane and turn into the left lane of the road you are entering. One-way to one-way is the case where the left-hand lane is correct at both ends.",
        context:
          "New Jersey sets out four left-turn geometries. One-way to one-way is left lane to left lane. Two-way to two-way means approaching as close as possible to the centre line and keeping right of the centre line of the road you enter, without crossing lane markings. Two-way onto a four-lane highway means turning into the lane nearest the centre line and then moving right out of the passing lane. And two cars turning left toward each other each pass to the left of the intersection's centre.",
        trap:
          "The two-way rule about keeping right of the centre line does not transfer to a one-way street, because there is no centre line to keep right of.",
        excerptKey: "left-turn-one-way",
        sourceLabel: "NJ Driver Manual - Chapter 4, Left Turns",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_13",
        topic: "licensing",
        question:
          "You reach eight points within three years on your New Jersey record. What surcharge applies?",
        choices: [
          "None, since surcharges begin at twelve points",
          "$150 flat",
          "$250 flat",
          "$150 for the first six points plus $25 for each additional point, so $200",
        ],
        correctIndex: 3,
        explanation:
          "Six or more points within three years brings $150, plus $25 for each point above six. At eight points that is $150 plus $50, and it is payable annually for three years.",
        context:
          "Surcharges sit outside the court system and outside the point-reduction system, so a clean year that lowers your working point total does not undo a surcharge already assessed. Other surcharges are flat: $100 a year for an unlicensed driver, $250 a year for driving while suspended or operating an uninsured vehicle, $1,000 a year for DWI or refusal. Non-payment suspends the licence until it is cleared.",
        commonlyMissed: true,
        trap:
          "Six points is where the money starts and twelve is where the suspension starts. Confusing the two thresholds is the standard error here.",
        excerptKey: "surcharge-from-last-violation",
        sourceLabel: "NJ MVC - Surcharges",
        sourceUrl: SURCHARGE,
      },
      {
        id: "nj_s5_14",
        topic: "sharing",
        question: "What is a low-speed vehicle under New Jersey law?",
        choices: [
          "Any vehicle limited to 20 mph or less",
          "A three-wheeled electric vehicle of any speed",
          "A moped with pedals",
          "A four-wheeled vehicle capable of more than 20 mph but no more than 25 mph, not powered by petrol or diesel",
        ],
        correctIndex: 3,
        explanation:
          "Four wheels, an attainable speed above 20 mph but not above 25 mph on a paved surface, no petrol or diesel power, and compliance with federal safety standards.",
        context:
          "New Jersey defines several small vehicle classes with different road rights and the boundaries matter. A moped is a two-wheeler with pedals, capped at 25 mph, and may be ridden on the road. A low-speed vehicle is the four-wheeled electric equivalent. A motorised scooter, which includes pocket bikes, mini motorcycles and motorised skateboards, is barred from public roads and sidewalks except on designated municipal or county property.",
        trap:
          "The lower bound is part of the definition. Something that cannot exceed 20 mph is not a low-speed vehicle, it is outside the class altogether.",
        excerptKey: "low-speed-vehicle",
        sourceLabel: "NJ Driver Manual - Chapter 8, Low-Speed Vehicles",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_15",
        topic: "signals",
        question:
          "A single solid white line runs across your lane at an intersection. What is it for?",
        choices: [
          "It shows where you must stop for a signal or sign",
          "It marks the edge of the roadway",
          "It separates you from oncoming traffic",
          "It marks the start of a no-passing zone",
        ],
        correctIndex: 0,
        explanation:
          "A single solid white line across the road at an intersection is a stop line, and you stop behind it for the signal or sign. Where none exists, you stop before the crosswalk.",
        context:
          "White lines running along the road do a different job entirely, separating traffic moving the same way or marking the edge of the carriageway. Yellow lines separate opposing directions. Getting the orientation right is the trick: white across the road is a stop line, white along the road is a lane divider or edge line.",
        trap:
          "White is the same colour as the edge line and the lane divider, so people read the stop line as just more lane marking. Its orientation is what makes it an instruction.",
        excerptKey: "single-white-stop-line",
        sourceLabel: "NJ Driver Manual - Chapter 4, Intersections",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_16",
        topic: "speed",
        question: "How far does a vehicle travel in one second at 60 mph?",
        choices: ["88 feet", "60 feet", "44 feet", "120 feet"],
        correctIndex: 0,
        explanation:
          "Eighty-eight feet per second at 60 mph. With a typical daytime reaction time of about three-quarters of a second, you cover 66 feet before the brakes even begin to work.",
        context:
          "The manual publishes two stopping tables. In daylight at 60 mph, reaction accounts for 66 feet and braking for 277, giving 343 feet in total. At night on low beams the reaction time is taken as 1.5 seconds instead, so the same 60 mph needs 409 feet. That is the arithmetic behind the instruction to drive within the range of your headlights.",
        commonlyMissed: true,
        trap:
          "Sixty feet per second at 60 mph is a tidy-sounding guess and it is a third short. The real figure is 88, which is why small increases in speed produce large increases in stopping distance.",
        excerptKey: "reaction-time",
        sourceLabel: "NJ Driver Manual - Chapter 3, Stopping Distances",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_17",
        topic: "safety",
        question:
          "How often does the manual say a driver over 40 should have their eyes checked?",
        choices: ["Every two years", "Every year", "Every five years", "Only when renewing a licence"],
        correctIndex: 1,
        explanation:
          "Every year once you are over 40, against every year or two for younger drivers. The manual notes that visual clarity and peripheral vision both decline with age.",
        context:
          "Vision is the sense driving depends on, and the manual puts the figure at more than 95 percent of the information a driver needs. The MVC may require a vision recheck at any time, and the basic licence standard is 20/50 with or without corrective lenses. A driver with sight in one eye only must meet 20/50 in that eye and produce a physician's documentation.",
        trap:
          "The vision standard for a New Jersey basic licence is 20/50, not the 20/40 many states use. The 20/40 figure is the commercial standard here.",
        excerptKey: "eye-check-over-40",
        sourceLabel: "NJ Driver Manual - Chapter 6, Healthy Driving",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_18",
        topic: "impairment",
        question:
          "You are taking a prescription medication and are stopped by police. What can be asked of you?",
        choices: [
          "Proof of the prescription, and without it the drug is treated as illegal",
          "Nothing, since prescriptions are private medical information",
          "A blood test, but only at a hospital",
          "The name of the prescribing doctor, but nothing more",
        ],
        correctIndex: 0,
        explanation:
          "If asked, you must show proof of the prescription. Where a prescription is required to obtain the drug and you cannot produce one, the drug is considered illegal.",
        context:
          "Driving while in possession of a drug without a valid prescription is an offence in its own right in New Jersey, punished by a two-year suspension and a minimum $50 fine. Impairment is a separate question again: it is illegal to drive under the influence of any drug, prescribed or not, and anything labelled as causing drowsiness or dizziness should not be taken before driving.",
        trap:
          "Having a lawful prescription somewhere is not the same as being able to prove it at the roadside. The manual frames it as a document you produce.",
        excerptKey: "drugs-prescription-proof",
        sourceLabel: "NJ Driver Manual - Chapter 6, Drugs and Driving",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_19",
        topic: "parking",
        question:
          "You need to stop to check a map on an interstate highway. Where may you legally do so?",
        choices: [
          "On the shoulder, for as long as you need",
          "In the right-hand lane with hazards on",
          "On any bridge with a wide enough shoulder",
          "Nowhere on the highway itself; parking on an interstate is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "Parking on an interstate highway is on the prohibited list, along with bridges, elevated roadways and tunnels. The shoulder is for mechanical trouble and emergencies only.",
        context:
          "The manual allows stopping on the right shoulder in the case of mechanical trouble or another emergency, with the flashers switched on, and that is the extent of it. Reading maps is separately listed as inattentive driving. If you genuinely need to stop, the rest areas and service areas signposted along the route are the answer.",
        trap:
          "Hazard lights do not convert a convenience stop into an emergency. New Jersey treats them as emergency equipment, not as a parking permit.",
        excerptKey: "no-park-interstate",
        sourceLabel: "NJ Driver Manual - Chapter 4, Do Not Park",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_20",
        topic: "emergencies",
        question:
          "A driver leaves the scene of a crash in which someone is injured. What does New Jersey impose for a first offence?",
        choices: [
          "A fine of $500 and three points",
          "A fine of $2,500 to $5,000, up to 180 days in jail and a one-year licence loss",
          "A fine only, since criminal charges cover the rest",
          "A 90-day suspension",
        ],
        correctIndex: 1,
        explanation:
          "Hit-and-run involving bodily injury or death brings a fine of $2,500 to $5,000 and up to 180 days in jail, with a one-year licence loss for a first offence and permanent loss for a subsequent one.",
        context:
          "The point schedule reinforces the same message. Leaving the scene of a crash carries two points where there is no personal injury and eight where there is, and eight is the heaviest single entry in the whole schedule, higher than reckless driving or racing. The underlying duty is simple: notify the police of any crash involving injury, death, or vehicle or property damage.",
        commonlyMissed: true,
        trap:
          "The permanent loss on a second offence is what people miss. New Jersey does not restore driving privileges after a second hit-and-run involving injury.",
        excerptKey: "hit-and-run",
        sourceLabel: "NJ Driver Manual - Chapter 7, Motor Vehicle Violations",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_21",
        topic: "rightOfWay",
        question:
          "The car in the lane beside you has stopped for someone crossing at a crosswalk. What may you do?",
        choices: [
          "Pass slowly, since the pedestrian is not in your lane yet",
          "Pass if you sound your horn first",
          "Pass only if the pedestrian is more than one lane away",
          "Stop as well, because passing a vehicle stopped for a pedestrian is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "You may never pass another vehicle that has stopped for a pedestrian. The stopped car hides the person from you and hides you from them.",
        context:
          "This is the multiple-threat collision, and New Jersey addresses it twice. It appears in the list of situations where you must not pass, and it is written into the crosswalk offence itself, where passing a vehicle yielding to a pedestrian is treated alongside failing to stop. On a multi-lane road the manual asks you to stop about 30 feet before a crosswalk so the driver in the next lane can see who is crossing.",
        commonlyMissed: true,
        trap:
          "The pedestrian not being in your lane yet is exactly the geometry that makes this fatal. They are walking toward your lane at the moment you cannot see them.",
        excerptKey: "never-pass-stopped-vehicle",
        sourceLabel: "NJ Driver Manual - Chapter 4, Pedestrians in a Crosswalk",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_22",
        topic: "rules",
        question:
          "A tow truck is working on the hard shoulder with amber lights flashing, and heavy traffic makes a lane change unsafe. What does the Move Over law require?",
        choices: [
          "Reduce speed below the posted limit and be prepared to stop",
          "Maintain your speed and hold your lane",
          "Stop until the lane beside the truck is clear",
          "Nothing, because the law covers police vehicles only",
        ],
        correctIndex: 0,
        explanation:
          "Where a lane change is impossible, prohibited or unsafe, you must reduce your speed below the posted limit and be prepared to stop if necessary.",
        context:
          "New Jersey's Move Over law is unusually broad in what it protects: authorised emergency vehicles, tow trucks, highway maintenance and other emergency service vehicles showing red, blue, amber or yellow lights, and disabled vehicles displaying hazard lights, flares or reflective triangles. The fine runs from $100 to $500, and motor vehicle penalty points may be assessed on a third or subsequent conviction.",
        commonlyMissed: true,
        trap:
          "The law is not limited to police cars, and a broken-down car with its hazards on is covered. Points do not attach immediately, which is why people underestimate it.",
        excerptKey: "move-over-slow-down",
        sourceLabel: "NJ Driver Manual - Chapter 4, Move Over Law",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_23",
        topic: "signs",
        question:
          "What do New Jersey's warning signs look like, apart from those in a work zone?",
        choices: [
          "White vertical rectangles with black wording",
          "Green rectangles with white symbols",
          "Yellow diamonds with a black symbol or word message",
          "Blue squares with white pictograms",
        ],
        correctIndex: 2,
        explanation:
          "Yellow diamonds with black symbols or wording. Orange diamonds do the same job in construction and maintenance areas.",
        context:
          "Warning signs cover deer crossings, railroad crossings, school crossings, curves and changing road conditions, and the manual describes their purpose as flagging hazards that are difficult to see. Two special cases break the diamond pattern: the yellow round sign for a railroad advance warning and the yellow pentagon for school signs. Pedestrian and bicycle warnings may use a fluorescent yellow-green instead of standard yellow.",
        trap:
          "The white vertical rectangle regulates rather than warns, and the distinction matters because a regulatory sign creates an offence by itself while a warning sign does not.",
        excerptKey: "warning-signs-yellow",
        sourceLabel: "NJ Driver Manual - Chapter 11, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_24",
        topic: "licensing",
        question:
          "You took an approved defensive driving course three years ago and had two points removed. You take another one now. What happens?",
        choices: [
          "No reduction, because the MVC recognises a course only once every five years",
          "Another two points come off",
          "Three points come off the second time",
          "The points come off but the surcharge is unaffected",
        ],
        correctIndex: 0,
        explanation:
          "The MVC recognises a defensive driving course for point reduction only once every five years, so a second course inside that window gives you nothing.",
        context:
          "Three separate routes reduce points and they interact. A clean year takes off up to three. A defensive driving course takes off two, once every five years. A Driver Improvement Program takes off three, and finishing one puts you into a further one-year probationary period during which any moving violation schedules a suspension. None of these touches a surcharge already assessed.",
        commonlyMissed: true,
        trap:
          "The five-year clock runs from the last recognised course, not from the last conviction, and repeating one early is simply wasted.",
        excerptKey: "defensive-driving-five-years",
        sourceLabel: "NJ Driver Manual - Chapter 7, Defensive Driving Courses",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_25",
        topic: "sharing",
        question:
          "How much more distance can a heavy truck or bus need to stop in bad weather?",
        choices: ["About 10 percent more", "As much as 25 percent more", "About 50 percent more", "Roughly double"],
        correctIndex: 1,
        explanation:
          "Up to 25 percent more distance in bad weather. That is on top of the longer stopping distance a loaded vehicle already needs in the dry.",
        context:
          "The practical consequences run through all of the manual's advice on large vehicles. Leave more room in front of a truck than you would in front of a car, never sit sandwiched between two of them, and leave space when stopping behind one on an uphill grade, because it may roll back as it pulls away. Pulling in too soon after passing puts you in the front no-zone of a vehicle that cannot stop for you.",
        trap:
          "The figure matters because drivers judge a truck's stopping ability from their own. Twenty-five percent more distance is roughly a car length and a half at 30 mph.",
        excerptKey: "truck-stopping-bad-weather",
        sourceLabel: "NJ Driver Manual - Chapter 8, Trucks, Tractor-Trailers, and Buses",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_26",
        topic: "speed",
        question:
          "You are ticketed for doing 45 mph in a 25 mph zone. What is the point cost?",
        choices: ["2", "3", "4", "5"],
        correctIndex: 2,
        explanation:
          "Twenty mph over the limit falls in the 15 to 29 band, which is four points. It would be two points at 14 over and five points at 30 or more over.",
        context:
          "New Jersey grades speeding by how far over you were rather than by the limit you broke, so the same four points attach whether the road was 25 mph or 65 mph. The bands are 2 points for 1 to 14 mph over, 4 for 15 to 29, and 5 for 30 or more. Doubled fines are a separate mechanism again, triggered by the type of zone rather than by the margin, except in a 65 mph zone where 10 mph over is the threshold.",
        commonlyMissed: true,
        trap:
          "Being in a 25 mph zone feels like it should raise the penalty, and it does not touch the points at all. The band is measured from the limit, not against it.",
        excerptKey: "points-speeding",
        sourceLabel: "NJ MVC - NJ Points Schedule",
        sourceUrl: POINTS,
      },
      {
        id: "nj_s5_27",
        topic: "safety",
        question:
          "How large a following gap does the manual want on a snow-covered road?",
        choices: [
          "Three seconds, as usual",
          "Six seconds or more",
          "Four seconds",
          "Two car lengths per 10 mph",
        ],
        correctIndex: 1,
        explanation:
          "Six seconds or more on snow-covered roads. Four or more seconds is the figure for bad weather generally, and three seconds is the fair-weather floor.",
        context:
          "The car-length table pushes the same way and goes further, calling for six car lengths at 20 mph on packed snow and twelve on ice. The manual pairs these with a technique: gently apply the brakes while driving slowly to find out how slippery the surface actually is, and let that tell you how fast you can safely go.",
        trap:
          "Four seconds is the bad-weather number and gets applied to snow because snow is bad weather. Snow has its own figure, and it is six.",
        excerptKey: "snow-six-seconds",
        sourceLabel: "NJ Driver Manual - Chapter 5, Reduced Visibility",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_28",
        topic: "impairment",
        question:
          "A passenger drinks a beer while you drive, and neither of you is over the limit. What is the position in New Jersey?",
        choices: [
          "No offence, since the driver is sober",
          "An offence for the passenger only",
          "An offence: drinking while driving or riding carries a $200 fine for a first offence",
          "An offence only if the container is visible from outside",
        ],
        correctIndex: 2,
        explanation:
          "Drinking alcoholic beverages while driving or riding is its own offence, at $200 for a first offence and $250 for a second, with 10 days of community service attached to the second.",
        context:
          "Two separate provisions cover alcohol in a moving car. Drinking while driving or riding is one. Carrying an open or unsealed alcohol container, or an unsealed cannabis item, in the passenger area is the other, at $200 for a first offence and $250 or 10 days of community service afterwards. Neither depends on anyone being impaired.",
        commonlyMissed: true,
        trap:
          "Sober driver, drinking passenger feels like a loophole and is not one. The offence attaches to the act of drinking in the vehicle.",
        excerptKey: "drinking-while-driving-fine",
        sourceLabel: "NJ Driver Manual - Chapter 7, Mandatory Penalties",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_29",
        topic: "emergencies",
        question:
          "A collision is unavoidable. What does the manual say to choose?",
        choices: [
          "Something stationary rather than something moving toward you",
          "A head-on impact, because modern cars absorb it best",
          "Something moving the same way as you, in preference to something stationary",
          "The nearest solid object, to stop as quickly as possible",
        ],
        correctIndex: 2,
        explanation:
          "The order of preference is something moving in your direction first, then something stationary, and last of all something coming straight at you. A glancing blow is better than a square one.",
        context:
          "The reasoning is closing speed. Hitting something travelling your way subtracts its speed from yours; hitting something oncoming adds it. The manual also tells you to prefer something that will give way, such as bushes, over something solid, to turn away from oncoming traffic even if that means leaving the road, and to try to make any unavoidable impact a sideswipe.",
        trap:
          "Aiming for something solid to stop quickly is the instinct that produces the worst outcome. Deceleration over distance is what survivability depends on.",
        excerptKey: "choose-what-to-hit",
        sourceLabel: "NJ Driver Manual - Chapter 5, Last-Minute Choices",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_30",
        topic: "rightOfWay",
        question:
          "You are entering an unsigned New Jersey traffic circle carrying a major state highway through it. Who usually has priority?",
        choices: [
          "The traffic on the major highway, because the established flow pattern dominates",
          "Traffic entering the circle, always",
          "The vehicle travelling fastest",
          "Nobody, so every entering driver must stop",
        ],
        correctIndex: 0,
        explanation:
          "Where a major highway flows into and through a circle, it usually dominates the traffic flow pattern and commands the right of way. Any stop or yield signs at the entrances override that.",
        context:
          "New Jersey has no statutory rule for its older traffic circles, which is why the manual falls back on the historically established flow pattern and on signage. Where you genuinely cannot tell, the instruction is extreme caution plus the uncontrolled-intersection rule, meaning the vehicle on the left yields to the vehicle on the right. Modern roundabouts are different and carry proper signage.",
        commonlyMissed: true,
        trap:
          "The assumption that circulating traffic always has priority is a roundabout convention. New Jersey's circles predate it, and the manual explicitly declines to state a general rule.",
        excerptKey: "traffic-circle-flow",
        sourceLabel: "NJ Driver Manual - Chapter 4, Traffic Circle",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_31",
        topic: "rules",
        question:
          "Somebody throws a bottle out of a moving car on a New Jersey road. What is the maximum consequence?",
        choices: [
          "A fine of up to $1,000, and the driver may lose their licence",
          "A $100 fine",
          "A warning for a first offence",
          "A fine of up to $250 with no licence consequence",
        ],
        correctIndex: 0,
        explanation:
          "Fines of up to $1,000 apply to throwing dangerous objects from a vehicle onto a roadway, and where the vehicle was moving the driver may lose their licence.",
        context:
          "The rule is written around hazard rather than tidiness, which is why any trash, debris or rubbish carried in a vehicle must be covered to stop it blowing onto the road. It sits alongside New Jersey's snow and ice provisions, where failing to clear your car is $25 to $75 regardless of outcome, and dislodged snow or ice causing injury or damage is $200 to $1,000 for a private vehicle.",
        trap:
          "Litter reads as a municipal matter. New Jersey attaches a possible licence loss to it when the vehicle was moving, which puts it in a different category.",
        excerptKey: "littering-fine",
        sourceLabel: "NJ Driver Manual - Chapter 4, Littering",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_32",
        topic: "signals",
        question:
          "You have been watching a green light for some distance as you approach. What does the manual call it and what should you do?",
        choices: [
          "A protected green, and you may proceed at speed",
          "An extended green, and you should accelerate to clear it",
          "A delayed green, and you should expect an arrow next",
          "A stale green, and you should slow down and be ready to stop",
        ],
        correctIndex: 3,
        explanation:
          "A stale green is one that has been green for some time. Expect it to turn yellow and then red, and slow down accordingly.",
        context:
          "The stale green sits next to two other signal warnings in the manual. Most crashes at traffic signals happen in the first few seconds after a change, so you should move off from a red with care and watch for vehicles still clearing. And a yellow following a green is an instruction to stop, not a caution, unless you are too close to stop safely.",
        trap:
          "Accelerating to beat a stale green is the manoeuvre that puts you in the intersection exactly when the cross traffic starts moving.",
        excerptKey: "stale-green",
        sourceLabel: "NJ Driver Manual - Chapter 4, Stopping Regulations",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_33",
        topic: "parking",
        question:
          "You open your driver's door into the traffic lane and a passing car hits it. Where does New Jersey put the responsibility?",
        choices: [
          "With the passing driver, who should have left more room",
          "Shared equally in every case",
          "With neither, since it is treated as an unavoidable accident",
          "With the person who opened the door, who may be liable for the crash",
        ],
        correctIndex: 3,
        explanation:
          "A motorist who opens a door into traffic may be liable for any resulting crash with a moving vehicle. The manual recommends passengers get out on the kerb side instead.",
        context:
          "Dooring is one of the commonest ways cyclists are injured, which is why New Jersey pairs the liability rule with a checking routine. Look for bicycles and mopeds before you open the driver's door, and check your blind spots before turning, parallel parking, opening a door or pulling away from a kerb. The manual asks you to do that by turning your head rather than relying on the mirrors.",
        commonlyMissed: true,
        trap:
          "Being stationary feels like it removes your responsibility. Opening the door is the act that creates the hazard, and that is where the liability lands.",
        excerptKey: "opening-door",
        sourceLabel: "NJ Driver Manual - Chapter 4, Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_34",
        topic: "signs",
        question:
          "Green and red signs are used on some New Jersey routes to mark what?",
        choices: [
          "Toll and toll-free lanes",
          "Weight limits by axle",
          "Routes and ramps where trucks are permitted and prohibited",
          "Emergency detour routes",
        ],
        correctIndex: 2,
        explanation:
          "Two national truck-routing signs are in use in New Jersey: green marks routes and ramps where trucks are permitted, and red marks those where they are prohibited.",
        context:
          "The colours follow the state's general scheme, where green guides and red prohibits. Green truck signs also mark the route to services and terminals; red ones mark the end of a designated route. The rest of the guidance family runs blue for motorist services and brown for public recreation and scenic guidance.",
        trap:
          "It is easy to read these as ordinary route markers. They are permissions and prohibitions for a class of vehicle, which is why the colours are borrowed from the regulatory family.",
        excerptKey: "truck-route-signs",
        sourceLabel: "NJ Driver Manual - Chapter 11, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nj_s5_35",
        topic: "licensing",
        question:
          "You are convicted of a moving violation while driving in Pennsylvania. What happens to your New Jersey record?",
        choices: [
          "Nothing, since New Jersey only records offences committed here",
          "The same points as the equivalent New Jersey offence",
          "Two points are added, whatever the offence",
          "Four points are added as an out-of-state penalty",
        ],
        correctIndex: 2,
        explanation:
          "Traffic violations committed in other states add two points to a New Jersey record, regardless of what the other state would have assessed.",
        context:
          "New Jersey belongs to two interstate compacts that make this work. The Driver License Compact exchanges violation information, so out-of-state offences become part of your New Jersey record, with Georgia, Massachusetts, Michigan, Tennessee and Wisconsin outside it. The Nonresident Violator Compact means an unresolved out-of-state ticket can suspend your licence at home until you deal with it.",
        commonlyMissed: true,
        trap:
          "New Jersey does not translate the other state's point value. It applies a flat two points, which can be lighter or heavier than the offence deserved.",
        excerptKey: "out-of-state-two-points",
        sourceLabel: "NJ Driver Manual - Chapter 7, Point System",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions at the length and mix of the real MVC knowledge test. Forty of fifty is the pass mark on the day, so treat 24 of 30 here as the line and no hints along the way.",
    questions: [
      {
        id: "nj_s6_01",
        topic: "signals",
        question:
          "A traffic signal is hung horizontally across the road. Which lens is on the left?",
        choices: ["Green", "Red", "Yellow", "The green arrow"],
        correctIndex: 1,
        explanation:
          "Red is always on the left of a horizontal signal head, just as it is always on top of a vertical one.",
        context:
          "Fixed positioning means you can read a signal even when the colours are hard to judge, whether from glare, fog or colour blindness. Vertically, the order runs red, yellow, green and then any green arrow at the bottom. A green arrow permits only the movement it shows; a yellow arrow warns that the protected phase is ending.",
        trap:
          "There is no variation by intersection. If a New Jersey head looks reversed, you are misreading it, not seeing a local exception.",
        excerptKey: "signal-order",
        sourceLabel: "NJ Driver Manual - Chapter 11, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_02",
        topic: "rightOfWay",
        question:
          "You reach a stop sign at the same moment as a car on your left, while a third car has been waiting at the same intersection since before you arrived. Who goes first?",
        choices: [
          "You, because you are to the right of the car on your left",
          "The car on your left, because it reached the line marginally first",
          "The car that was already stopped and waiting",
          "Whichever driver is going straight ahead",
        ],
        correctIndex: 2,
        explanation:
          "Arrival order is the primary rule, so the driver already stopped goes first. The right-hand rule only breaks the tie between you and the car on your left, after that.",
        context:
          "New Jersey states both duties in the same breath: yield to the motorist on your right when you both arrive at the same time, and yield to a motorist already stopped at the intersection. Failure to yield at an intersection is a two-point violation, and failure to observe a stop or yield sign is another two.",
        trap:
          "Learning the right-hand rule as the whole answer produces this mistake. It is a tie-break and it never displaces someone who arrived earlier.",
        excerptKey: "yield-already-stopped",
        sourceLabel: "NJ Driver Manual - Chapter 4, Intersections",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_03",
        topic: "rules",
        question: "In which of these situations does the manual tell you not to pass?",
        choices: [
          "Approaching a railroad crossing",
          "On a straight road with a broken centre line on your side",
          "On a four-lane divided highway",
          "When the vehicle ahead is signalling a left turn and there is room on the right",
        ],
        correctIndex: 0,
        explanation:
          "Railroad crossings are on the no-passing list, along with hills, curves, street crossings and intersections, narrow bridges, underpasses and tunnels, and anywhere a sign or the markings prohibit it.",
        context:
          "Two of the other options describe passing that New Jersey permits: a broken line on your side allows a pass when it is safe, and a driver ahead turning left is one of the narrow cases where passing on the right is lawful. There is a separate railroad rule as well, which is that you may not pass another vehicle within 100 feet of a crossing.",
        trap:
          "The list is about sight lines and escape room rather than about markings, so a stretch of road can be unmarked and still be somewhere you must not pass.",
        excerptKey: "no-pass-situations",
        sourceLabel: "NJ Driver Manual - Chapter 4, Passing",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_04",
        topic: "speed",
        question:
          "You are driving through a business district in New Jersey with no speed limit signs. What applies?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 1,
        explanation:
          "Twenty-five mph covers school zones and business or residential districts where nothing is posted. Suburban business and residential districts are the 35 mph case.",
        context:
          "The full unposted ladder runs 25, 35 and 50 mph, with 55 and 65 mph reserved for certain state highways and interstates where they are actually posted. Whatever the number, the conditions rule sits above it: you may never drive faster than weather, road or other conditions safely allow.",
        trap:
          "Business districts sound faster than residential ones. In New Jersey they share the same 25 mph figure, and the word that changes it is suburban.",
        excerptKey: "speed-limits-table",
        sourceLabel: "NJ Driver Manual - Chapter 4, Speed Control",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_05",
        topic: "licensing",
        question:
          "What visual acuity does New Jersey require for a basic driver licence?",
        choices: [
          "20/20 without correction",
          "20/30 with or without correction",
          "20/40 with or without correction",
          "20/50 with or without correction",
        ],
        correctIndex: 3,
        explanation:
          "Twenty-fifty with or without corrective lenses for a basic licence. Commercial applicants need 20/40 in both eyes and must distinguish red, green and amber lights.",
        context:
          "A driver with sight in one eye only must meet 20/50 in that eye and produce documentation signed by a licensed physician. The MVC can require a vision recheck at any time and can order a re-examination of anyone it considers a problem driver. The vision screening sits alongside the knowledge test and the six-point ID check as the three requirements for a basic licence.",
        commonlyMissed: true,
        trap:
          "Most states use 20/40 for an ordinary licence, and that is the New Jersey commercial standard. The basic standard here is the looser 20/50.",
        excerptKey: "vision-20-50",
        sourceLabel: "NJ Driver Manual - Chapter 2, Test Requirements",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_06",
        topic: "sharing",
        question:
          "You pass a cyclist too close and they are injured as a result. What does New Jersey's Safe Passing Law impose?",
        choices: [
          "A $100 fine and no points",
          "A $250 fine and one point",
          "A $500 fine and two motor vehicle penalty points",
          "A $1,000 fine and four points",
        ],
        correctIndex: 2,
        explanation:
          "Causing bodily injury by failing to pass a vulnerable road user with due caution is a $500 fine and two points. Where no bodily injury results it is a $100 fine and no points.",
        context:
          "Due caution has a defined content in New Jersey. Move over a lane if one exists and obey all existing no-passing and speed rules. On a single-lane road leave a safety zone of at least four feet. If four feet is not available, slow to 25 mph and be prepared to stop until you can pass safely. Cyclists, skateboarders, inline skaters and pedestrians are all covered.",
        commonlyMissed: true,
        trap:
          "The penalty is graded by outcome, which is unusual. The same manoeuvre costs $100 and no points, or $500 and two points, depending on whether somebody was hurt.",
        excerptKey: "safe-passing-penalty",
        sourceLabel: "NJ Driver Manual - Chapter 8, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_07",
        topic: "signs",
        question:
          "You see a solid yellow line on your side of the road and a broken yellow line on the other. What does that permit?",
        choices: [
          "Passing from either side, since one line is broken",
          "Passing from your side only",
          "No passing at all in either direction",
          "Passing from the other side only, not from yours",
        ],
        correctIndex: 3,
        explanation:
          "The line on your own side governs you. Solid on your side means no passing; the broken line lets traffic on the other side pass.",
        context:
          "Yellow lines separate opposing directions and white lines separate traffic going the same way. A dashed line on your side permits passing when it is safe; a solid line does not. Double solid yellow prohibits passing from both directions, and any pass must be completed before the dashed lines become solid again.",
        trap:
          "Seeing a broken line anywhere in the pair is enough to make people think passing is allowed. Only your own side's marking matters to you.",
        excerptKey: "yellow-solid-and-dashed",
        sourceLabel: "NJ Driver Manual - Chapter 11, Road Markings",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_08",
        topic: "safety",
        question:
          "A seven-year-old measuring 4 feet 6 inches is travelling with you. What does New Jersey require?",
        choices: [
          "An adult seat belt in the rear seat",
          "An adult seat belt in any seat",
          "A booster seat in the front, so you can monitor them",
          "A harnessed child seat or a booster seat, in a rear seat",
        ],
        correctIndex: 3,
        explanation:
          "Under eight and under 57 inches means a federally approved forward-facing seat with a five-point harness, or a booster seat, in a rear seat. Fifty-seven inches is 4 feet 9 inches, so this child is under it.",
        context:
          "New Jersey's bands stack age against size at every step: under two and under 30 pounds means rear-facing; under four and under 40 pounds means a five-point harness; under eight and under 57 inches means a harness or booster. All children under eight ride in a rear seat unless the vehicle has none. Getting it wrong is $50 to $75 plus fees and costs.",
        commonlyMissed: true,
        trap:
          "Seven years old feels well past a booster to most parents. The height threshold is what settles it, and 4 feet 9 inches is taller than many eight-year-olds.",
        excerptKey: "child-under-eight-rear",
        sourceLabel: "NJ Driver Manual - Chapter 3, Child Passenger Safety Law",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_09",
        topic: "parking",
        question:
          "You have finished parallel parking. How far from the kerb should the tyres be?",
        choices: [
          "Touching the kerb",
          "No more than six inches",
          "About a foot",
          "Between one and two feet",
        ],
        correctIndex: 1,
        explanation:
          "No more than six inches, which is both the road test standard and the legal maximum for a parked vehicle anywhere in New Jersey.",
        context:
          "Parallel parking is a required element of the MVC road test, and the manual suggests practising between markers set 25 feet apart before trying it between real cars. The sequence is to pull up two to four feet alongside the car in front, check behind, reverse slowly with the wheel hard right, straighten as the front clears the other car's rear bumper, then wheel hard left as you continue back.",
        trap:
          "A foot from the kerb looks tidy and is double the legal limit. The same six inches applies whether or not an examiner is watching.",
        excerptKey: "parallel-six-inches",
        sourceLabel: "NJ Driver Manual - Chapter 3, Parallel Parking",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_10",
        topic: "impairment",
        question:
          "According to the manual, at roughly what BAC has the risk of causing a crash already doubled?",
        choices: [
          "Slightly above 0.05 percent",
          "At 0.08 percent",
          "At 0.10 percent",
          "At 0.15 percent",
        ],
        correctIndex: 0,
        explanation:
          "Just above 0.05 percent, which is below the legal threshold. At 0.10 percent the risk is six times as great, and at 0.15 percent it is twenty-five times as great.",
        context:
          "Those figures are why the manual insists the legal limit is not a safety limit. The ignition interlock is calibrated to the same logic, blocking the engine above 0.05 percent rather than at the 0.08 offence threshold. Under 21 the legal figure drops to 0.01 percent, which is effectively any measurable alcohol at all.",
        commonlyMissed: true,
        trap:
          "The doubling happens below the number that makes you a criminal. Treating 0.08 as the point at which risk begins misreads the whole section.",
        excerptKey: "bac-risk-multiples",
        sourceLabel: "NJ Driver Manual - Chapter 6, How Much is Too Much",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_11",
        topic: "emergencies",
        question:
          "You reverse into a parked car in an empty street and cannot find the owner. What must you do?",
        choices: [
          "Notify the police, and keep trying to find the owner",
          "Leave a note, which discharges your obligation",
          "Nothing, if the damage is under $500",
          "Report it to your insurer only",
        ],
        correctIndex: 0,
        explanation:
          "Hitting a parked vehicle means the police must be notified, and you should also try to find the owner. A note on its own is not what the manual asks for.",
        context:
          "The general rule behind this is that police must be told of any crash involving injury, death, or vehicle or property damage, with no dollar threshold. The written MVC report is a separate step, required within 10 days where damage exceeds $500 or there is injury and no police report has been filed. Leaving the scene of a crash costs two points without injury and eight with.",
        trap:
          "Leaving a note is the socially expected answer and it is not sufficient here. New Jersey requires police notification either way.",
        excerptKey: "crash-parked-vehicle",
        sourceLabel: "NJ Driver Manual - Chapter 5, Parked Vehicle Crash",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_12",
        topic: "rules",
        question:
          "On which New Jersey road may you lawfully drive on the left half of the roadway as a matter of course?",
        choices: [
          "Any road, when overtaking is impossible",
          "A rural road with no centre markings",
          "A one-way street",
          "Any road between midnight and 5 am",
        ],
        correctIndex: 2,
        explanation:
          "New Jersey requires you to drive on the right half of the roadway unless you are on a one-way street. Overtaking is the only other exception, and it is temporary.",
        context:
          "The rule then repeats itself lane by lane: on a multi-lane road you use the lane nearest the right-hand edge or kerb whenever it is available, except when overtaking or preparing a left turn. Failure to keep right is a two-point violation, as is failure to observe traffic lanes and failure to keep right at an intersection.",
        trap:
          "An unmarked rural road is still a two-way road. The absence of a centre line does not create a licence to use the whole width.",
        excerptKey: "keep-right",
        sourceLabel: "NJ Driver Manual - Chapter 4, Keeping to the Right",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_13",
        topic: "signals",
        question:
          "You are two car lengths from an intersection at 40 mph when the light turns yellow. What does the manual say?",
        choices: [
          "Brake hard and stop before the line whatever the cost",
          "Continue through, because you are too close to stop safely",
          "Stop, since a yellow always requires stopping",
          "Sound the horn and continue",
        ],
        correctIndex: 1,
        explanation:
          "The rule is to stop before entering the intersection unless the yellow appears when you are too close to stop safely. Two car lengths at 40 mph is that exception.",
        context:
          "New Jersey states the yellow rule as a stopping requirement with a safety exception, not as a general caution. If the light changes while you are already in the intersection you carry on through with care. The stale green warning is the other half of the picture, because watching how long a light has been green is what stops you being caught in this position.",
        commonlyMissed: true,
        trap:
          "Learning that a yellow means stop can make people brake hard at any distance, which invites a rear-end collision. The exception is genuinely part of the rule.",
        excerptKey: "yellow-after-green",
        sourceLabel: "NJ Driver Manual - Chapter 4, Stopping Regulations",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_14",
        topic: "speed",
        question:
          "How far ahead of the actual work does a New Jersey work zone begin, for warning purposes?",
        choices: [
          "About 100 feet",
          "About a quarter of a mile",
          "It begins at the first cone",
          "Up to half a mile, at the advance warning sign or flashing lights",
        ],
        correctIndex: 3,
        explanation:
          "Work zones are identified by an advance warning sign or by flashing lights on a vehicle up to half a mile before the work area. That is where the zone starts.",
        context:
          "It matters because fines are doubled for motor vehicle violations committed in a construction zone, with no speed threshold at all. The zone runs to the End Road Work sign or the last temporary traffic control device. Flaggers within it have the same authority as a regulatory sign, so disobeying one is a citable offence.",
        trap:
          "Treating the coned section as the zone underestimates it by up to half a mile, and the doubled fine applies across the whole of it.",
        excerptKey: "work-zone-warning",
        sourceLabel: "NJ Driver Manual - Chapter 5, Construction Zones/Work Zones",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_15",
        topic: "licensing",
        question:
          "What supervised practice must a New Jersey GDL permit holder under 21 complete before the road test?",
        choices: [
          "Three months and 30 hours",
          "Six months and 30 hours, including 5 at night",
          "Twelve months and 50 hours",
          "Six months and at least 50 hours, including 10 during darkness",
        ],
        correctIndex: 3,
        explanation:
          "Six months of supervised practice with a minimum of 50 driving hours, of which at least 10 must be during darkness. A parent, guardian or supervising driver certifies it on the BA-CSD form.",
        context:
          "Permit holders of 21 and over have a lighter requirement of three months of supervised practice and no stated hours. Whichever route you take, the permit must be validated at an MVC Driver Testing Centre before any practice driving, the supervising driver must be at least 21 with three years of experience, and the six months must pass without suspensions or postponements.",
        commonlyMissed: true,
        trap:
          "The night-driving component is the part people forget, and the certification form is checked at the road test appointment.",
        excerptKey: "practice-hours-under-21",
        sourceLabel: "NJ Driver Manual - Chapter 2, Road Test",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_16",
        topic: "sharing",
        question:
          "A school bus has stopped directly in front of a school to let children off. What may traffic do?",
        choices: [
          "Pass from either direction at no more than 10 mph",
          "Pass from behind only, at no more than 10 mph",
          "Stop 25 feet back as usual",
          "Pass at the posted speed limit, since the bus is at a school",
        ],
        correctIndex: 0,
        explanation:
          "Where the bus has stopped directly in front of a school, traffic from either direction may pass at no more than 10 mph. Everywhere else the flashing red lights require a stop 25 feet back.",
        context:
          "The school bus rule has three settings. Two-lane road, multi-lane road divided only by lines, or private road: stop at least 25 feet away. Dual-lane highway with a physical median, and you on the far side: slow to 10 mph. Directly in front of a school: pass either way at no more than 10 mph. Improper passing of a school bus is a five-point violation.",
        commonlyMissed: true,
        trap:
          "This is the one case where you may pass a stopped school bus at all, and it is easy to over-apply. Away from the school frontage, the stop still applies.",
        excerptKey: "school-bus-in-front-of-school",
        sourceLabel: "NJ Driver Manual - Chapter 4, Stop for School Buses",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_17",
        topic: "signs",
        question:
          "What do rumble strips cut into a highway surface or shoulder tell you?",
        choices: [
          "The road surface is being resurfaced",
          "You have crossed into a bus lane",
          "The shoulder is unsafe for stopping",
          "There is a decision point ahead, and you should slow down",
        ],
        correctIndex: 3,
        explanation:
          "Rumble strips warn of a decision point ahead, such as an intersection after a long uninterrupted stretch. The noise and vibration are there to slow you down and to wake a drowsy driver.",
        context:
          "They are almost always paired with a cautionary sign, and they will not damage a vehicle. New Jersey uses two other physical speed control devices with different profiles: a speed bump is a low ridge across the street, and a speed hump is a longer, flatter and more raised version of the same idea.",
        trap:
          "Feeling rumble strips as a sign that you have wandered onto the shoulder covers only the longitudinal ones. Transverse strips are a deliberate warning across your lane.",
        excerptKey: "rumble-strips",
        sourceLabel: "NJ Driver Manual - Chapter 11, Rumble Strips",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_18",
        topic: "rightOfWay",
        question:
          "A pedestrian starts to cross at an intersection with no painted crosswalk. What do you owe them?",
        choices: [
          "Nothing, since there is no crosswalk",
          "A warning on the horn",
          "You yield the right of way, because an unmarked crosswalk exists at every intersection",
          "You stop and remain stopped, exactly as for a marked crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "There is a crosswalk at every intersection whether or not it is painted, and at an unmarked one the duty is to yield the right of way. Stopping and remaining stopped is the duty at a marked crosswalk.",
        context:
          "The distinction is the core of New Jersey pedestrian law and the exam tests it in both directions. Marked crosswalk means stop and remain stopped; unmarked crosswalk at an intersection means yield. Both are backed by heavy penalties, up to $500, up to 25 days in jail, community service, a suspension of up to six months and two points, and passing a vehicle that has stopped for a pedestrian is a separate offence.",
        commonlyMissed: true,
        trap:
          "Both wrong answers are tempting from opposite directions: that no paint means no duty, or that the marked-crosswalk stop applies everywhere. The unmarked case sits between them.",
        excerptKey: "unmarked-crosswalk",
        sourceLabel: "NJ Driver Manual - Chapter 8, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_19",
        topic: "safety",
        question:
          "Where does the manual say children of 12 and under are safest?",
        choices: [
          "In the front, where the driver can see them",
          "In the back seat of the vehicle",
          "In whichever seat has the newest belt",
          "In the front, provided the airbag is switched off",
        ],
        correctIndex: 1,
        explanation:
          "In the back seat, and the manual says so of children of any age, especially in a vehicle fitted with a passenger-side airbag.",
        context:
          "Airbags inflate at speeds of up to 200 mph and are designed to supplement belts for adults in a frontal crash. That force is what makes them dangerous to a child in the front seat, and it is why a rear-facing child seat may never go in front of a live passenger airbag. Cutoff switches exist for vehicles with no rear seat or specific medical needs, and require an application to NHTSA.",
        trap:
          "Wanting to watch a child is the reason parents put them in front, and it is precisely the arrangement the manual advises against.",
        excerptKey: "children-12-back-seat",
        sourceLabel: "NJ Driver Manual - Chapter 3, Air Bags",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_20",
        topic: "parking",
        question: "How close to a railroad crossing may you park in New Jersey?",
        choices: [
          "No closer than 50 feet",
          "No closer than 15 feet",
          "No closer than 25 feet",
          "There is no parking distance for a railroad crossing",
        ],
        correctIndex: 0,
        explanation:
          "Fifty feet, the same as for a stop sign. The 15-foot figure is a different rule, about stopping when the warning devices are active.",
        context:
          "The two railroad numbers do different jobs. Fifty feet is a standing prohibition on parking near a crossing. Fifteen feet is how far back you stop when the lights flash, the bells ring, the gates lower or a flag signal is given. A third figure covers passing: no overtaking within 100 feet of a crossing.",
        trap:
          "Fifteen feet is the number everyone learns first because it comes with the dramatic scenario. The parking distance is more than three times that.",
        excerptKey: "no-park-railroad-50",
        sourceLabel: "NJ Driver Manual - Chapter 4, Do Not Park",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_21",
        topic: "impairment",
        question:
          "What happens to a driver charged with an alcohol-related traffic offence in New Jersey?",
        choices: [
          "They are released pending trial with no further requirement",
          "They must be detained at an Intoxicated Driver Resource Centre",
          "They must attend a hearing at the MVC within 10 days",
          "They are referred to an IDRC only after a second conviction",
        ],
        correctIndex: 1,
        explanation:
          "State law requires anyone charged with an alcohol-related traffic offence to be detained at an Intoxicated Driver Resource Centre, where they are assessed and given an alcohol and highway safety education programme.",
        context:
          "Each of New Jersey's 21 counties has an IDRC for first and third-time offenders, and second-time offenders go to one of three regional centres. Detention runs 12 to 48 hours for a DUI conviction, with fees of $264 or $321 depending on the length. Anyone assessed as needing treatment is referred to a programme of at least 16 weeks, and satisfactory participation is a condition of getting a licence back.",
        trap:
          "The IDRC requirement attaches at the charge stage, not at conviction, and completing it is a condition of re-licensing rather than an optional extra.",
        excerptKey: "idrc-detention",
        sourceLabel: "NJ Driver Manual - Chapter 7, Intoxicated Driver Resource Center",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_22",
        topic: "emergencies",
        question:
          "What is the fine range for breaching New Jersey's Move Over law?",
        choices: [
          "$50 to $200",
          "$75 to $250",
          "$100 to $500",
          "$250 to $1,000",
        ],
        correctIndex: 2,
        explanation:
          "Not less than $100 and not more than $500. Motor vehicle penalty points may be assessed on a third or subsequent conviction.",
        context:
          "The duty covers a wide range of stationary vehicles: authorised emergency vehicles, tow trucks, highway maintenance and other emergency service vehicles showing red, blue, amber or yellow lights, and disabled vehicles displaying hazard lights, flares or reflective triangles. You change lanes into a lane not adjacent to them if conditions permit; if you cannot, you slow below the posted limit and prepare to stop.",
        trap:
          "The delayed points make this look like a minor money offence. It is not points-free, it is points-deferred until a third conviction.",
        excerptKey: "move-over-penalty",
        sourceLabel: "NJ Driver Manual - Chapter 4, Move Over Law",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_23",
        topic: "rules",
        question:
          "You hold a full New Jersey licence. What may you legally do with a phone while driving?",
        choices: [
          "Hold it to your ear for calls under a minute",
          "Text at a red light, since the vehicle is stationary",
          "Use it hands-free, though the manual discourages it",
          "Use it hand-held for navigation only",
        ],
        correctIndex: 2,
        explanation:
          "Hands-free use is lawful for a fully licensed driver, provided it does not interfere with required safety equipment or with safe operation, and the manual strongly discourages it anyway.",
        context:
          "Hand-held use is a primary offence and police may stop you for it alone. Fines run $200 to $400 for a first offence, $400 to $600 for a second within ten years, and $600 to $800 thereafter, with three points and a possible 90-day suspension on a third or subsequent conviction. The only hand-held exceptions are fire, a traffic crash, a serious road hazard, a medical emergency or a hazardous material emergency, and even then one hand stays on the wheel.",
        trap:
          "Being stopped at a light does not put you outside the law, and GDL holders lose the hands-free permission entirely.",
        excerptKey: "cell-phone-primary",
        sourceLabel: "NJ Driver Manual - Chapter 4, Cellular Telephones",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_24",
        topic: "speed",
        question:
          "You have entered the deceleration lane to leave a highway. What speed should you be doing?",
        choices: [
          "The posted advisory speed for the exit lane, slowing after you enter it",
          "The highway speed until you reach the end of the ramp",
          "Half the highway speed, from the moment you signal",
          "Whatever the vehicle behind you is doing",
        ],
        correctIndex: 0,
        explanation:
          "Start slowing once you are in the deceleration lane and obey the advisory speed posted for it. Slowing before you leave the through lane is what causes rear-end collisions.",
        context:
          "The mirror image applies on entry: build up to the flow's speed in the acceleration lane, avoid stopping in it, and yield to traffic already on the main road. Never back up on an exit ramp or deceleration lane, and if you miss an exit, take the next one. Where an exit is on the left, watch for the signs directing you to the correct lane early.",
        trap:
          "Braking in the through lane is the commonest highway exit error, and the manual's sequence deliberately puts the deceleration after the lane change.",
        excerptKey: "missed-exit",
        sourceLabel: "NJ Driver Manual - Chapter 4, Leaving Highways, Parkways, and Turnpikes",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_25",
        topic: "licensing",
        question:
          "What is the lowest bodily injury liability cover a New Jersey Standard auto policy may carry?",
        choices: [
          "$15,000 per person and $30,000 per accident",
          "$35,000 per person and $70,000 per accident",
          "$25,000 per person and $50,000 per accident",
          "$100,000 per person and $300,000 per accident",
        ],
        correctIndex: 1,
        explanation:
          "The Standard policy's bodily injury liability starts at $35,000 per person and $70,000 per accident, and can be bought as high as $250,000 and $500,000. Property damage liability starts at $25,000 per accident.",
        context:
          "New Jersey offers two ordinary policy types and they are not equivalent. The Standard policy is what most drivers buy and carries the figures above. The Basic policy costs far less and includes no bodily injury liability at all as standard, though $10,000 for all persons per accident can be added as an option, with $5,000 of property damage liability and $15,000 of personal injury protection. Both meet the state's legal minimum.",
        commonlyMissed: true,
        trap:
          "The old 15/30 figures are still widely quoted and are no longer New Jersey's Standard policy floor. The genuinely surprising part is that a Basic policy can satisfy the law with no bodily injury liability at all.",
        excerptKey: "insurance-standard-minimums",
        sourceLabel: "NJ Dept. of Banking and Insurance - Auto Insurance Buyer's Guide",
        sourceUrl: INSURANCE,
      },
      {
        id: "nj_s6_26",
        topic: "signs",
        question:
          "A round yellow sign appears at the roadside. What is it warning of?",
        choices: [
          "A railroad crossing ahead",
          "A traffic circle ahead",
          "A school crossing",
          "A sharp bend",
        ],
        correctIndex: 0,
        explanation:
          "The round yellow sign is the railroad crossing advance warning. The X-shaped crossbuck marks the crossing itself and carries the weight of a yield sign.",
        context:
          "It is the only round sign in New Jersey's shape table and the only railroad sign that appears before the crossing. Alongside it you may see white RR pavement markings. Together they are passive warning devices, always present. Flashing red lights, ringing bells and lowered gates are the active devices and mean a train is coming now.",
        trap:
          "Round is unusual enough that people assign it to whatever hazard they most associate with a circle. In New Jersey it means one thing only, and that is a railroad crossing ahead.",
        excerptKey: "sign-railroad-round",
        sourceLabel: "NJ Driver Manual - Chapter 11, Sign Colors and Shapes",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_27",
        topic: "sharing",
        question:
          "Where may a motorised scooter, such as a pocket bike or a motorised skateboard, legally be ridden in New Jersey?",
        choices: [
          "On any road with a limit of 25 mph or less",
          "On sidewalks, but not on the carriageway",
          "Only on designated municipal or county property",
          "Anywhere, provided the rider wears a helmet",
        ],
        correctIndex: 2,
        explanation:
          "Motorised scooters may not be driven on any public road or sidewalk except on designated municipal or county property. They must also be registered and insured where the owner lives.",
        context:
          "The class covers pocket bikes, super pocket bikes, mini choppers, mini motorcycles, sport and mini scooters and motorised skateboards, essentially anything with a motor that was not built to federal motor vehicle safety standards. Nobody under 12 may operate one. Motorised wheelchairs, mobility devices, low-speed vehicles and motorised bicycles are expressly outside the class.",
        trap:
          "Small and slow suggests a sidewalk is the safe compromise. New Jersey bans them from both the road and the sidewalk.",
        excerptKey: "motorized-scooter-illegal",
        sourceLabel: "NJ Driver Manual - Chapter 8, Motorized Scooters",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_28",
        topic: "rightOfWay",
        question: "Who has the right of way where a road crosses a railway?",
        choices: [
          "The train, always",
          "Whichever arrives first",
          "Road traffic, once the gates have started to lift",
          "Road traffic on a designated through route",
        ],
        correctIndex: 0,
        explanation:
          "Trains always have the right of way and motorists must yield to them. A train cannot swerve and needs a mile or more to stop from 55 mph.",
        context:
          "Everything else at a crossing follows from that. Never race a train, never enter unless there is room to clear the far side, never stop on the tracks, and never shift gears in a manual while crossing. Trains can run on any track in either direction at any time, and they are wider than the rails by three feet or more on each side.",
        trap:
          "Optical illusion is the specific danger the manual names: a train looks further away and slower than it is, which is what makes people try to beat it.",
        excerptKey: "trains-right-of-way",
        sourceLabel: "NJ Driver Manual - Chapter 8, Trains",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_29",
        topic: "safety",
        question:
          "How long can it take to recover from the glare of oncoming high beams?",
        choices: [
          "Under a second",
          "About one second",
          "Two seconds",
          "Three to five seconds",
        ],
        correctIndex: 3,
        explanation:
          "Three to five seconds. At 50 mph that is the length of a football field travelled while you effectively cannot see.",
        context:
          "The defences are to look to the right-hand side of the road until the vehicle has passed, and never to flash your own high beams back at an approaching driver. High beams are for open country with no traffic in sight; low beams are for town driving, following another vehicle and any time somebody is coming the other way.",
        trap:
          "A second or two feels like the right order of magnitude for dazzle. The manual puts it at three to five, which is long enough to cross an entire intersection blind.",
        excerptKey: "high-beam-recovery",
        sourceLabel: "NJ Driver Manual - Chapter 4, Bright and Dim",
        sourceUrl: HB,
      },
      {
        id: "nj_s6_30",
        topic: "emergencies",
        question: "Smoke starts coming from under your bonnet. What does the manual tell you to do?",
        choices: [
          "Open the bonnet to see the source",
          "Drive on to the next exit before stopping",
          "Use an extinguisher if one is to hand",
          "Get everyone out and away from the vehicle at once, and call for help",
        ],
        correctIndex: 3,
        explanation:
          "Do not waste time. Get the passengers out and away from the car, then call for help. The manual says plainly that a motorist should never attempt to put out a fire.",
        context:
          "Most car fires start as short circuits in the electrical system, which is why the advice is unconditional rather than graded by how bad the fire looks. It sits with the manual's other emergency instructions that override instinct: never turn the ignition to lock while moving, never brake during a blowout, and get out and away from a vehicle stalled on railroad tracks even when no train is coming.",
        trap:
          "Lifting the bonnet feeds the fire with air and puts your face at it. It is the most natural thing to do and the manual rules it out.",
        excerptKey: "car-fire",
        sourceLabel: "NJ Driver Manual - Chapter 5, Car Fires",
        sourceUrl: HB,
      },
    ],
  },
];
