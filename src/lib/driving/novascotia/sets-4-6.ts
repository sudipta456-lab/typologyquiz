// Nova Scotia practice sets 4 to 6.
//
// Set 4 walks the whole handbook, including the three chapters learners skip:
// Safety, Adverse Driving Conditions, and Vehicle Registration and Insurance.
// Set 5 is built from what Nova Scotians say goes wrong. The threads read
// before writing it are listed in docs/driving/research/novascotia.md; nothing
// here reproduces a recalled exam question, and every rule a forum poster
// raised was checked against the handbook, the Registry's own pages or the
// Motor Vehicle Act before it became an item. Where the handbook and the
// Registry disagree, the Registry wins and the disagreement becomes the trap.
// Set 6 is a straight run at the real thing.

import type { DrivingTestSet } from "../types";

const H = "https://novascotia.ca/sns/rmv/handbook/";
/** Printed page number to the anchor inside that chapter's own PDF. */
const ch1 = (p: number) => `${H}DH-Chapter1.pdf#page=${p}`;
const ch2 = (p: number) => `${H}DH-Chapter2.pdf#page=${p - 36}`;
const ch3 = (p: number) => `${H}DH-Chapter3.pdf#page=${p - 76}`;
const ch4 = (p: number) => `${H}DH-Chapter4.pdf#page=${p - 104}`;
const ch5 = (p: number) => `${H}DH-Chapter5.pdf#page=${p - 132}`;
const ch6 = (p: number) => `${H}DH-Chapter6.pdf#page=${p - 150}`;
const ch7 = (p: number) => `${H}DH-Chapter7.pdf#page=${p - 164}`;
/** The Important Graduated Driver Licence Changes supplement, pages V to VIII. */
const supp = (p: number) => `${H}DH-1_intro.pdf#page=${p}`;
const MVA =
  "https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf";
const act = (p: number) => `${MVA}#page=${p}`;
const GDL = "https://novascotia.ca/sns/rmv/licence/gradlic.asp";
const AMEND = "https://novascotia.ca/sns/rmv/safe/handbook.asp";
const TEST =
  "https://www.novascotia.ca/take-driver-knowledge-test-learners-licence-class-7";
const PAAL379 = "https://novascotia.ca/sns/paal/rmv/paal379.asp";

export const novascotiaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions spread over all eight chapters, including the three most people skip: Safety, Adverse Driving Conditions, and Vehicle Registration and Insurance. The Rules of the Road Test draws from all of it.",
    questions: [
      {
        id: "ns_s4_01",
        topic: "signs",
        question:
          "A regulatory sign shows a curved arrow doubling back on itself inside a red circle with a slash. What does it prohibit?",
        choices: [
          "Turning left",
          "Turning around to go in the opposite direction",
          "Entering the road ahead",
          "Reversing on the roadway",
        ],
        correctIndex: 1,
        explanation:
          "That is the no U-turn sign. It forbids turning to go in the opposite direction at that location.",
        context:
          "The Motor Vehicle Act adds prohibitions the sign does not need to state: you may not turn around on a curve, near the crest of a grade, or anywhere your view is obstructed within 150 metres in either direction, and in a business or residential district a U-turn must be completed without backing or interfering with other traffic.",
        trap:
          "No left turn and no U-turn use the same red ring and different arrows. The doubling-back arrow is the U-turn.",
        excerptKey: "sign-circles",
        sourceLabel: "Nova Scotia Driver's Handbook - Examples of Signs and Their Meanings",
        sourceUrl: ch3(89),
      },
      {
        id: "ns_s4_02",
        topic: "safety",
        question:
          "How often must a vehicle registered in Nova Scotia pass a motor vehicle safety inspection?",
        choices: [
          "Every six months",
          "Every two years",
          "Every year",
          "Only when it changes owner",
        ],
        correctIndex: 2,
        explanation:
          "All motor vehicles registered in Nova Scotia, and all trailers towed on provincial roads, must be inspected every year at an official inspection station by an authorized inspection mechanic.",
        context:
          "The handbook lists what gets inspected: windshield and window glass, horn, brakes, wipers, steering, suspension, exhaust, fuel system, lights, tires and wheels, mirrors, body components, and coupling and towing connections where fitted.",
        trap:
          "Passing the annual inspection is not a warranty. The handbook says plainly that it is no guarantee the vehicle will operate satisfactorily for another year, and operating an unfit vehicle is illegal regardless of the sticker.",
        excerptKey: "inspection-annual",
        sourceLabel: "Nova Scotia Driver's Handbook - Maintaining your vehicle",
        sourceUrl: ch4(107),
      },
      {
        id: "ns_s4_03",
        topic: "rules",
        question:
          "You are joining a 100-series highway from an on-ramp. What does the handbook tell you to do?",
        choices: [
          "Stop at the end of the ramp and wait for a large gap",
          "Merge at whatever speed you reach the end of the ramp",
          "Signal and move across two lanes at once to clear the merge area",
          "Use the acceleration lane until your speed matches the traffic, then merge",
        ],
        correctIndex: 3,
        explanation:
          "Use the acceleration lane until your vehicle's speed matches that of the other traffic, then merge safely.",
        context:
          "Interchanges are demanding because one group of drivers is slowing to leave while another is speeding up to join. Signs will tell you to merge, yield or stop, and in all of those cases you yield to through traffic until a safe gap appears.",
        trap:
          "Stopping at the end of an acceleration lane leaves you with no speed and no room. The lane exists so you arrive already travelling at the speed of the traffic.",
        excerptKey: "highway-acceleration-lane",
        sourceLabel: "Nova Scotia Driver's Handbook - Using controlled-access highways",
        sourceUrl: ch2(67),
      },
      {
        id: "ns_s4_04",
        topic: "signs",
        question:
          "A yellow diamond shows a truck on a slope. What is it warning you about, and what may you need to do?",
        choices: [
          "A steep decline ahead, for which you may need a lower gear",
          "A truck route begins ahead",
          "Trucks are entering from a side road",
          "A weigh station is ahead",
        ],
        correctIndex: 0,
        explanation:
          "That is the steep decline sign. The handbook's note on it is that you may need to use a lower gear.",
        context:
          "A separate sign warns that construction traffic could be entering or leaving the road on the right and may be moving more slowly than through traffic, which is a different message about a different hazard.",
        trap:
          "The truck symbol makes drivers think about other vehicles. This sign is about your own vehicle and the grade under it.",
        excerptKey: "sign-checkerboard",
        sourceLabel: "Nova Scotia Driver's Handbook - Warning signs",
        sourceUrl: ch3(91),
      },
      {
        id: "ns_s4_05",
        topic: "signals",
        question:
          "You are facing a green signal light with a green arrow beside it. What governs your movement?",
        choices: [
          "The green signal overrides the arrow for all movements",
          "The arrow governs turning traffic; the green signal governs through traffic",
          "The arrow is advisory and the signal is binding",
          "You must take the direction of the arrow",
        ],
        correctIndex: 1,
        explanation:
          "Where a green signal and a green arrow are shown together, turning traffic is controlled by the arrow signals and through traffic is controlled by the green signal lights.",
        context:
          "A yellow arrow behaves like a yellow signal: stop unless you are too close to stop safely, and then drive cautiously through the intersection.",
        trap:
          "The green arrow is not permission to go anywhere. It protects the movement it points to, and drivers going straight are on the round green.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Nova Scotia Driver's Handbook - Arrow signals",
        sourceUrl: ch2(40),
      },
      {
        id: "ns_s4_06",
        topic: "safety",
        question:
          "How far away must a Nova Scotia vehicle's horn be audible?",
        choices: ["15 metres", "30 metres", "60 metres", "100 metres"],
        correctIndex: 2,
        explanation:
          "Every motor vehicle must have a horn in good working order that can be heard at a distance of 60 metres.",
        context:
          "The handbook pairs the requirement with a limit: sound the horn whenever it is necessary, such as to tell another driver you intend to pass, and do not use it unnecessarily.",
        trap:
          "Necessary is doing real work in that sentence. In Nova Scotia the pass itself is one of the necessary cases, which surprises drivers from elsewhere.",
        excerptKey: "horn-60m",
        sourceLabel: "Nova Scotia Driver's Handbook - Other vehicle equipment",
        sourceUrl: ch4(114),
      },
      {
        id: "ns_s4_07",
        topic: "rightOfWay",
        question:
          "Two vehicles are facing each other at an intersection and arrive at the same time. One wants to go straight, the other wants to turn left across its path. Who yields?",
        choices: [
          "The vehicle going straight, because turning traffic commits first",
          "Neither, since they arrived together",
          "The vehicle turning left",
          "Whichever driver is on the narrower road",
        ],
        correctIndex: 2,
        explanation:
          "When two facing vehicles reach an intersection at the same time, both may go straight or turn right. If one is going straight while the other wants to turn left, the left-turning driver yields and waits until the turn can be made safely.",
        context:
          "While you wait, keep your wheels pointing straight ahead. If you are struck from behind with the wheels turned left, your vehicle is pushed into oncoming traffic and a second collision follows.",
        trap:
          "Arriving at the same moment feels like it should split the difference. Turning across a path never has priority over travelling along it.",
        excerptKey: "row-left-turn-yields",
        sourceLabel: "Nova Scotia Driver's Handbook - Right of way",
        sourceUrl: ch2(44),
      },
      {
        id: "ns_s4_08",
        topic: "speed",
        question:
          "You are driving past a church as the congregation is leaving. What is the maximum speed?",
        choices: [
          "30 km/h",
          "60 km/h",
          "The posted limit",
          "50 km/h",
        ],
        correctIndex: 3,
        explanation:
          "Passing a church while the congregation is entering or leaving is on the list of situations where the maximum is set at 50 km/h.",
        context:
          "It sits alongside the other 50 km/h cases in Section 102(2) of the Motor Vehicle Act: business districts, residential districts, danger zones, public parks in cities and towns, within 30 metres of a railway crossing, and within 15 metres of an intersection where the view along the cross street is under 60 metres.",
        trap:
          "The trigger is people moving, not the building. An empty church on a Wednesday afternoon does not lower the limit.",
        excerptKey: "speed-50-list",
        sourceLabel: "Nova Scotia Driver's Handbook - Choosing a safe speed",
        sourceUrl: ch2(51),
      },
      {
        id: "ns_s4_09",
        topic: "signs",
        question:
          "In a work zone you see a sign reading END and a symbol suggesting normal conditions resume. What is it telling you?",
        choices: [
          "The road has returned to normal and no more impact from road work is expected",
          "The workers have gone home for the day",
          "The speed limit reverts to 80 km/h",
          "The lane closure is about to begin",
        ],
        correctIndex: 0,
        explanation:
          "That sign says the road has returned to normal and you should expect no more impact from road work. The handbook adds that where the end point of a project is obvious, the sign is often not used at all.",
        context:
          "General work zone signs warn of unusual conditions and remain in place until the road is returned to normal. Specific signs warn of a named hazard and stay in place as long as that condition exists.",
        trap:
          "The absence of an end sign does not mean the work zone continues. Nova Scotia only posts it where the end is not obvious.",
        excerptKey: "work-orange",
        sourceLabel: "Nova Scotia Driver's Handbook - General Signs",
        sourceUrl: ch3(97),
      },
      {
        id: "ns_s4_10",
        topic: "parking",
        question:
          "Where must an accessible parking identification permit be displayed?",
        choices: [
          "On the dashboard, face up",
          "Hung from the rearview mirror while the vehicle is parked in a designated zone",
          "In the rear window",
          "Attached to the licence plate",
        ],
        correctIndex: 1,
        explanation:
          "The permit hangs from the rearview mirror whenever the vehicle is parked in a designated zone, and it should be removed while the vehicle is being driven.",
        context:
          "The permit travels with the person, not the car, so it may be used in any vehicle as long as the permit holder is in it. Parking in a designated zone without the plate or permit can get you fined or towed.",
        trap:
          "A special plate is assigned to a specific vehicle; the permit is not. Confusing the two is how a family ends up parking a second car in a designated space with nothing displayed.",
        excerptKey: "accessible-permit-mirror",
        sourceLabel: "Nova Scotia Driver's Handbook - Accessible parking plates and permits",
        sourceUrl: ch7(172),
      },
      {
        id: "ns_s4_11",
        topic: "safety",
        question:
          "Nova Scotia requires you to increase your following distance in the rain. To what?",
        choices: [
          "Three or more seconds",
          "Six or more seconds",
          "Four or more seconds",
          "Ten or more seconds",
        ],
        correctIndex: 2,
        explanation:
          "When it rains, drive more slowly than usual, use lowbeam headlights and wipers, and increase normal following distance to four or more seconds.",
        context:
          "The reason is in the same paragraph: stopping distances on slippery pavement run from two to ten times farther than on dry pavement. Roads are at their worst in the first 10 to 15 minutes of rain, especially after a dry spell, because oil and residue lift off the asphalt.",
        trap:
          "Two seconds is the dry-road baseline. Carrying it into rain leaves you with a fraction of the distance you now need.",
        excerptKey: "rain-four-seconds",
        sourceLabel: "Nova Scotia Driver's Handbook - Rain",
        sourceUrl: ch5(139),
        commonlyMissed: true,
      },
      {
        id: "ns_s4_12",
        topic: "signs",
        question:
          "A crosswalk sign shows children at play rather than walking, on a yellow background. What is it?",
        choices: [
          "A school crosswalk",
          "A pedestrian crosswalk",
          "A residential district begins here",
          "A playground ahead - reduce speed and watch for children",
        ],
        correctIndex: 3,
        explanation:
          "The playground sign tells you that you are approaching a playground, and the handbook's instruction is to reduce speed and watch for children.",
        context:
          "It is a different sign from the school crosswalk sign, which marks the location of a school crossing, and from the five-sided school zone sign, which carries the 30 or 50 km/h formula.",
        trap:
          "A playground is not a school zone, and it does not carry the school zone speed formula. It carries a duty to slow down for what you can see.",
        excerptKey: "sign-playground",
        sourceLabel: "Nova Scotia Driver's Handbook - Crosswalk signs",
        sourceUrl: ch3(88),
      },
      {
        id: "ns_s4_13",
        topic: "impairment",
        question:
          "Which of these is a drug class the handbook names as potentially affecting your driving?",
        choices: [
          "Antihistamines for sinus and allergy",
          "Vitamin supplements",
          "Topical antiseptics",
          "Oral rehydration salts",
        ],
        correctIndex: 0,
        explanation:
          "Antihistamines - sinus and allergy medications - are on the handbook's list of prescription and non-prescription drugs that may affect driving skills.",
        context:
          "The rest of the list is long and includes pain killers such as codeine, tricyclic antidepressants, antiemetics such as Gravol, antipsychotics, eye ointments and drops, sedatives and anxiolytics, and muscle relaxants. Blood pressure medication is flagged for the first week while the body adjusts.",
        trap:
          "Over the counter does not mean safe to drive on. Several of the named drugs need no prescription at all.",
        excerptKey: "drug-impairment",
        sourceLabel: "Nova Scotia Driver's Handbook - Drug impairment",
        sourceUrl: ch6(155),
      },
      {
        id: "ns_s4_14",
        topic: "rules",
        question:
          "You are turning left from a two-way road onto another two-way road. Which lane do you turn from, and which do you enter?",
        choices: [
          "From the left curb lane, into the left curb lane",
          "From the lane closest to the centre line, into the lane right of the centre line",
          "From the lane closest to the centre line, directly into the right curb lane",
          "From whichever lane is clear, into whichever lane is clear",
        ],
        correctIndex: 1,
        explanation:
          "Turn from the lane closest to the centre line into the lane just right of the centre line, then move into the right curb lane when you can.",
        context:
          "The general principle is that you finish the turn in the corresponding lane. If two turning lanes exist, you stay in the one you started in from beginning to end of the turn, so the right turning lane feeds the right receiving lane.",
        trap:
          "Cutting straight to the curb lane crosses the path of anyone turning from the lane beside you, and that is the collision two turning lanes exist to prevent.",
        excerptKey: "turn-lane-discipline",
        sourceLabel: "Nova Scotia Driver's Handbook - Turning",
        sourceUrl: ch2(55),
      },
      {
        id: "ns_s4_15",
        topic: "emergencies",
        question:
          "Your vehicle plunges into water. Where does the handbook say the best escape route is?",
        choices: [
          "The doors",
          "The rear hatch",
          "The windows",
          "The sunroof",
        ],
        correctIndex: 2,
        explanation:
          "The best escape route is through the windows. If they are electric, roll them down immediately, because water will short the electrical system.",
        context:
          "A vehicle with the windows closed will float for three to ten minutes. Doors are difficult to open at first because of the water pressure, and become easier once the pressure inside and outside equalises. Most vehicles sink nose first, so trapped air collects at the rear near the roof.",
        trap:
          "Fighting a door at the start wastes the only minutes when the windows still work. The seat belt is also an asset here - it keeps you conscious through the impact.",
        excerptKey: "water-escape",
        sourceLabel: "Nova Scotia Driver's Handbook - Vehicle plunging into water",
        sourceUrl: ch5(147),
      },
      {
        id: "ns_s4_16",
        topic: "signs",
        question:
          "A regulatory sign at the roadside shows a large P inside a red circle with a slash and two arrows pointing both ways. What does it prohibit?",
        choices: [
          "Stopping in either direction from that sign",
          "Parking on the far side of the road only",
          "Standing, but not parking",
          "Parking in either direction from that sign",
        ],
        correctIndex: 3,
        explanation:
          "That is the no parking sign with arrows in both directions: no parking in either direction of this sign.",
        context:
          "The No Stopping sign is a different and stricter instruction. Parking bans allow a driver to pause briefly to load; stopping bans do not, and the handbook counts a vehicle as stopped or parked whether or not it is occupied.",
        trap:
          "Sitting in the vehicle with the engine running does not turn parking into something else. The rule looks at where the vehicle is, not whether it is occupied.",
        excerptKey: "sign-other-regulatory",
        sourceLabel: "Nova Scotia Driver's Handbook - Examples of Signs and Their Meanings",
        sourceUrl: ch3(88),
      },
      {
        id: "ns_s4_17",
        topic: "sharing",
        question:
          "You are following a large truck on the highway. How can you tell whether its driver can see you?",
        choices: [
          "If you can see the truck driver in the truck's side mirror",
          "If you can see the truck's rear wheels",
          "If you are within two seconds of the trailer",
          "If your headlights reflect off the trailer",
        ],
        correctIndex: 0,
        explanation:
          "If you cannot see the truck driver in the truck's side mirror, the trucker cannot see you.",
        context:
          "Truckers have serious blind spots immediately in front of the cab, on both sides, and up to 200 feet behind. Some cannot see the first 20 feet of road in front of the bumper, and even a sloped-hood tractor can hide up to ten feet.",
        trap:
          "Sitting higher does not mean seeing more. The handbook opens the section by naming that belief as the mistake.",
        excerptKey: "truck-mirror-rule",
        sourceLabel: "Nova Scotia Driver's Handbook - A trucker's blind spots",
        sourceUrl: ch5(138),
      },
      {
        id: "ns_s4_18",
        topic: "safety",
        question:
          "How high should a head restraint be adjusted?",
        choices: [
          "Level with the top of the shoulders",
          "So the top edge is about seven centimetres above eye level",
          "So the top edge is level with the ears",
          "As low as it will go, to avoid obstructing the mirror",
        ],
        correctIndex: 1,
        explanation:
          "Adjust the head restraint so its top edge extends about seven centimetres - two to three inches - above your eye level.",
        context:
          "Head restraints are there to support the back of the head and reduce whiplash. The handbook notes that many are set too low to do that job at all.",
        trap:
          "A restraint set at neck height acts as a pivot rather than a support, which is worse than no restraint in a rear-end impact.",
        excerptKey: "head-restraint",
        sourceLabel: "Nova Scotia Driver's Handbook - Driving position",
        sourceUrl: ch4(122),
      },
      {
        id: "ns_s4_19",
        topic: "signals",
        question:
          "What must you do before starting, stopping or turning from a direct line, when a pedestrian may be affected?",
        choices: [
          "Signal with the turn indicators only",
          "Flash the headlights",
          "Sound the horn, so the signal is clearly audible",
          "Nothing beyond checking the mirrors",
        ],
        correctIndex: 2,
        explanation:
          "Where a pedestrian may be affected, the Motor Vehicle Act requires a clearly audible signal by sounding the horn. Where another vehicle may be affected, a plainly visible signal is required instead.",
        context:
          "The handbook says the same thing in its own words: when a pedestrian or another vehicle may be affected, you must sound your horn, and the sound must be clearly audible to pedestrians and other drivers.",
        trap:
          "Nova Scotia's horn duty is broader than most drivers realise. It attaches to starting and stopping as well as to turning and passing.",
        excerptKey: "horn-required",
        sourceLabel: "Nova Scotia Driver's Handbook - Using your signal lights and horn",
        sourceUrl: ch2(53),
        commonlyMissed: true,
      },
      {
        id: "ns_s4_20",
        topic: "rightOfWay",
        question:
          "A crossing guard steps into the road holding up a stop paddle facing you. What is your obligation?",
        choices: [
          "Stop only if children are actually in the crosswalk",
          "Slow to 30 km/h and pass with care",
          "Treat the paddle as advisory, since a guard is not a peace officer",
          "Obey the guard - failure to do so can mean demerit points",
        ],
        correctIndex: 3,
        explanation:
          "Drivers must obey crossing guards appointed and employed for that purpose. Failure to do so could mean demerit points on your driving record.",
        context:
          "The demerit table puts a number on it: failing to obey a crossing guard is a six-point offence under Section 125A, the same weight as careless driving or passing a school bus.",
        trap:
          "Six points suspends a learner or a newly licensed driver outright. This is not a minor infraction with a small fine attached.",
        excerptKey: "crossing-guard",
        sourceLabel: "Nova Scotia Driver's Handbook - Crosswalk guards",
        sourceUrl: ch2(42),
      },
      {
        id: "ns_s4_21",
        topic: "parking",
        question:
          "You are leaving an angled parking space in a shopping centre. What does the handbook tell you to do?",
        choices: [
          "Back out straight until your front end is clear of the vehicles beside you",
          "Turn the wheel as soon as you begin moving, to shorten the manoeuvre",
          "Reverse in a single continuous movement without stopping",
          "Back out at an angle towards the nearest exit",
        ],
        correctIndex: 0,
        explanation:
          "Back out straight all the way until the front end of your vehicle is clear of the adjacent parked vehicles, doing a safety scan and repeated shoulder checks as you go.",
        context:
          "Entering the space is the mirror image: stay parallel to the curb at least 1.5 metres out from the other parked cars, and start turning when your front end is even with the rear of the space.",
        trap:
          "Turning early on the way out swings your front end into the car beside you, which is the collision people have in car parks and only notice afterwards.",
        excerptKey: "park-angle-out",
        sourceLabel: "Nova Scotia Driver's Handbook - Angle parking",
        sourceUrl: ch2(63),
      },
      {
        id: "ns_s4_22",
        topic: "signs",
        question:
          "What does a warning sign showing a bridge with its span raised indicate?",
        choices: [
          "A narrow bridge ahead",
          "A bridge that can be opened to let boats pass",
          "A bridge with a low weight limit",
          "A bridge deck that ices before the road",
        ],
        correctIndex: 1,
        explanation:
          "The bridge opening sign tells drivers they are approaching a bridge that can be opened to permit the passage of boats.",
        context:
          "Nova Scotia's warning family covers several structure hazards that look alike from a distance: narrow structure, road narrows ahead, low clearance, and this one. Each names a different reason to slow down.",
        trap:
          "Bridges freeze before the rest of the road, but that is a condition the handbook covers under winter driving, not a sign. This sign is about the span moving.",
        excerptKey: "sign-narrow-structure",
        sourceLabel: "Nova Scotia Driver's Handbook - Warning signs",
        sourceUrl: ch3(92),
      },
      {
        id: "ns_s4_23",
        topic: "speed",
        question:
          "The handbook warns that driving well below the posted limit in ideal conditions is dangerous. Where is it most dangerous?",
        choices: [
          "In heavy urban traffic",
          "On a divided highway",
          "Just beyond the crest of a hill or around a curve",
          "In a work zone",
        ],
        correctIndex: 2,
        explanation:
          "Driving slowly is especially dangerous just beyond the crest of a hill or around a curve, where the slow vehicle is hidden until faster traffic is already on it.",
        context:
          "You must not drive at such a slow speed as to block the normal and reasonable flow of traffic. A slow driver must stop where it is safe to do so and let blocked traffic past, then resume until traffic builds up again.",
        trap:
          "Being under the limit is not automatically lawful. The Act's careful and prudent standard cuts in both directions.",
        excerptKey: "driving-too-slowly",
        sourceLabel: "Nova Scotia Driver's Handbook - Driving too slowly",
        sourceUrl: ch2(48),
      },
      {
        id: "ns_s4_24",
        topic: "rules",
        question:
          "You are approaching a curve you have not driven before. What does the handbook tell you to do about your speed?",
        choices: [
          "Brake steadily through the whole curve",
          "Maintain the posted limit and steer wide",
          "Accelerate into the curve to load the front tires",
          "Reduce speed before the curve so you can avoid additional braking inside it",
        ],
        correctIndex: 3,
        explanation:
          "Reduce your speed so that you enter the curve at a speed that lets you avoid braking inside it, then gradually accelerate from the midpoint to pull smoothly through.",
        context:
          "Positioning matters too: stay on your side and drive as far right as you can for curves to the right, and in the middle of your lane for curves to the left. Collisions happen when a driver enters too fast and is forced to brake in the curve.",
        trap:
          "Most curves without warning signs are safe at the posted limit, but the handbook says some are not. An unfamiliar curve gets assessed, not assumed.",
        excerptKey: "curve-approach",
        sourceLabel: "Nova Scotia Driver's Handbook - Curves or sharp turns",
        sourceUrl: ch2(52),
      },
      {
        id: "ns_s4_25",
        topic: "safety",
        question:
          "How much liability coverage does Nova Scotia law require as a minimum?",
        choices: [
          "$500,000",
          "$200,000",
          "$1,000,000",
          "$2,000,000",
        ],
        correctIndex: 0,
        explanation:
          "The minimum coverage required by law is $500,000 in third-party liability, also known as public liability and property damage.",
        context:
          "Two other routes to financial responsibility exist: a $500,000 bond from an approved guarantee or surety company, or a certificate showing you have deposited $500,000 with the Minister of Finance for each vehicle registered.",
        trap:
          "Third-party liability protects other people from you. Protecting your own property takes additional coverage, and most insurers advise carrying more than the minimum.",
        excerptKey: "insurance-minimum",
        sourceLabel: "Nova Scotia Driver's Handbook - Vehicle Insurance and Financial Responsibility",
        sourceUrl: ch7(174),
      },
      {
        id: "ns_s4_26",
        topic: "signs",
        question:
          "A white rectangular regulatory sign shows an arrow inside a circle pointing one way only. What is it telling you?",
        choices: [
          "You must turn in the direction of the arrow at the next intersection",
          "Traffic may travel only in the direction of the arrow",
          "The lane ahead ends in that direction",
          "Parking is permitted in the direction of the arrow",
        ],
        correctIndex: 1,
        explanation:
          "The one-way sign tells drivers that traffic is allowed to travel only in the direction of the arrow.",
        context:
          "Nova Scotia connects the one-way street to one of the few left-turn-on-red permissions in the province: a left turn on a red light is legal only from a one-way street onto another one-way street.",
        trap:
          "A one-way sign at an intersection is describing the road it points along, not the road you are on.",
        excerptKey: "sign-other-regulatory",
        sourceLabel: "Nova Scotia Driver's Handbook - Examples of Signs and Their Meanings",
        sourceUrl: ch3(89),
      },
      {
        id: "ns_s4_27",
        topic: "sharing",
        question:
          "Snow plows are working in a staggered formation across a highway, passing a ridge of snow from one to the next. What should you do?",
        choices: [
          "Pass between them one at a time when a gap opens",
          "Pass all of them together on the left",
          "Stay back - do not try to pass between them",
          "Pass on the right shoulder",
        ],
        correctIndex: 2,
        explanation:
          "Do not try to pass between staggered plows. The handbook calls it extremely dangerous: there is not enough room, and the ridge of wet snow can throw your vehicle out of control.",
        context:
          "Some plows carry a wing extending up to three metres to the right of the vehicle, which is not obvious in blowing snow. The flashing lights are warning you about a wide, slow-moving vehicle.",
        trap:
          "The gap between plows looks like a lane and is a working space filled with moving snow.",
        excerptKey: "snow-plows",
        sourceLabel: "Nova Scotia Driver's Handbook - Encountering snow plows",
        sourceUrl: ch5(148),
      },
      {
        id: "ns_s4_28",
        topic: "impairment",
        question:
          "What vision standard applies to an applicant for a Class 5, 6, 7 or 8 licence in Nova Scotia?",
        choices: [
          "20/30 in the better eye and 20/50 in the poorer eye",
          "20/20 in at least one eye, with no field of vision requirement",
          "Any acuity, provided corrective lenses are worn",
          "Visual acuity of at least 20/40 in at least one eye and a field of vision of at least 120 degrees with both eyes open",
        ],
        correctIndex: 3,
        explanation:
          "Class 3, 5, 6, 7 and 8 applicants need visual acuity of at least 20/40 in at least one eye, and a field of vision of at least 120 degrees with both eyes open and examined together.",
        context:
          "The commercial classes are stricter. Class 1, 2 and 4 applicants must have vision in both eyes, at least 20/50 in the poorer eye and 20/30 in the better one, 120 degrees in each eye examined separately, and no detectable double vision.",
        trap:
          "Passing only with correction is not a failure - it results in a licence carrying condition 01, valid only while proper visual correction is worn.",
        excerptKey: "vision-class5",
        sourceLabel: "Nova Scotia Driver's Handbook - Vision",
        sourceUrl: ch6(162),
      },
      {
        id: "ns_s4_29",
        topic: "rules",
        question:
          "You are driving at night on an open road and a vehicle appears ahead coming towards you. At what distance must you dim your headlights?",
        choices: ["Within 60 metres", "Within 100 metres", "Within 150 metres", "Within 300 metres"],
        correctIndex: 2,
        explanation:
          "By law, headlights must be dimmed within 150 metres of an approaching vehicle, and within 60 metres when following a vehicle.",
        context:
          "In town you use lowbeams throughout. On the open road highbeams are the default, dropped when you approach or follow another vehicle. If the oncoming driver does not dim theirs, you still keep yours on lowbeam and look slightly to the right of their lights.",
        trap:
          "The following figure is 60 metres, not 150. The two distances are different because glare in a mirror travels a shorter path than glare through a windshield.",
        excerptKey: "night-dim-distance",
        sourceLabel: "Nova Scotia Driver's Handbook - Tips for nighttime driving",
        sourceUrl: ch5(136),
        commonlyMissed: true,
      },
      {
        id: "ns_s4_30",
        topic: "signs",
        question:
          "You approach an intersection in a lane whose sign shows a single arrow curving right. What must you do?",
        choices: [
          "Turn right, because the lane is a right turn only lane",
          "Turn right or continue straight, at your choice",
          "Yield to traffic on the right before proceeding",
          "Merge right at the intersection",
        ],
        correctIndex: 0,
        explanation:
          "A right turn only lane sign tells drivers approaching the intersection in that lane that they must only turn right from it.",
        context:
          "Reversed, the same sign does the job for left turns. A different sign shows a straight arrow beside a left-curving one, meaning drivers in that lane may only proceed straight through or turn left.",
        trap:
          "The lane sign binds you even if the lane ahead is clear and the one beside you is full. Going straight out of a turn-only lane is a movement nobody around you expects.",
        excerptKey: "sign-chevron",
        sourceLabel: "Nova Scotia Driver's Handbook - Lane arrows",
        sourceUrl: ch3(93),
      },
      {
        id: "ns_s4_31",
        topic: "emergencies",
        question:
          "Your vehicle breaks down and you cannot move it far off a controlled-access highway. What does the handbook suggest?",
        choices: [
          "Raise the hood and stand beside the vehicle",
          "Tie a white cloth on the radio aerial or left door handle, and use flashers or parking lights at night",
          "Walk to the nearest exit for help",
          "Set up warning triangles 150 metres behind the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Move as far off the road as you can, then tie a white cloth on the radio aerial or the left door handle. At night, engage the emergency flashers or parking lights.",
        context:
          "The chapter on emergencies goes further: if you have a phone, call for help; otherwise put a Call Police sign in a side or back window. Do not raise the hood, and stay in the vehicle with the doors locked.",
        trap:
          "Raising the hood is the traditional signal and the handbook advises against it. If someone stops, you ask them to call police or an automobile club rather than getting out.",
        excerptKey: "trouble-pull-over",
        sourceLabel: "Nova Scotia Driver's Handbook - General highway trouble",
        sourceUrl: ch5(143),
      },
      {
        id: "ns_s4_32",
        topic: "parking",
        question:
          "At what angle does the handbook say your vehicle should be when you back into a parallel parking space?",
        choices: [
          "About 20 degrees",
          "About 40 degrees",
          "About 60 degrees",
          "As close to 90 degrees as the space allows",
        ],
        correctIndex: 1,
        explanation:
          "Back slowly with the wheel turned sharply right until the vehicle is at about a 40 degree angle, or until the centre of the rear window lines up with the point between the curb and the car behind.",
        context:
          "The step before it is to come alongside the parked car about one metre out, until the rear bumpers are even. After the 40 degrees you straighten the wheels, back until your front bumper clears, then turn sharply the other way and edge in parallel.",
        trap:
          "Too shallow an angle leaves the front of the car out in the lane; too steep puts the rear wheel on the curb. Forty degrees is the figure the handbook gives.",
        excerptKey: "park-manual-gear",
        sourceLabel: "Nova Scotia Driver's Handbook - Parallel parking",
        sourceUrl: ch2(62),
      },
      {
        id: "ns_s4_33",
        topic: "licensing",
        question:
          "What is a Nova Scotia vehicle permit's renewal cycle for a passenger vehicle or light truck?",
        choices: [
          "Every year",
          "Every five years",
          "Every two years",
          "Once, when the vehicle is bought",
        ],
        correctIndex: 2,
        explanation:
          "You must renew the vehicle permit and licence plate every two years for passenger vehicles and light trucks, and you get a validation sticker to show the renewal.",
        context:
          "Three different clocks run at once. The Certificate of Registration is valid for as long as you own the vehicle; the permit and plate renew every two years; the safety inspection is annual. Insurance information is required any time a registration is issued or renewed.",
        trap:
          "The Certificate of Registration never expires, which makes drivers assume nothing else does either. The sticker on the plate is the thing with the date on it.",
        excerptKey: "reg-four-conditions",
        sourceLabel: "Nova Scotia Driver's Handbook - Vehicle Registration and Insurance",
        sourceUrl: ch7(167),
      },
      {
        id: "ns_s4_34",
        topic: "signals",
        question:
          "What does the handbook say signalling gives you?",
        choices: [
          "The right of way, once the signal has been on for three seconds",
          "Priority over traffic behind you",
          "Permission to change lanes without a shoulder check",
          "Nothing - you must still make sure the way is clear and safe",
        ],
        correctIndex: 3,
        explanation:
          "Signalling does not give you the right of way. You must still make sure the way is clear and safe before you move.",
        context:
          "The lane change sequence puts the signal in the middle rather than at the start: check your mirrors for a gap, check your blind spot over your shoulder and signal, check again that nothing is coming up fast from behind, then steer gradually across without slowing down.",
        trap:
          "Signalling and then moving treats the indicator as a claim on the space. It is an announcement of intent, and nothing more.",
        excerptKey: "signal-no-right-of-way",
        sourceLabel: "Nova Scotia Driver's Handbook - Using your signal lights and horn",
        sourceUrl: ch2(53),
      },
      {
        id: "ns_s4_35",
        topic: "safety",
        question:
          "Which items belong in the vehicle's glove compartment according to the handbook?",
        choices: [
          "Vehicle permit, liability insurance card and safety inspection report",
          "Driver's licence, insurance card and inspection report",
          "Vehicle permit and driver's licence only",
          "Registration certificate and bill of sale",
        ],
        correctIndex: 0,
        explanation:
          "The handbook lists three documents for the glove compartment: the valid motor vehicle permit, the valid motor vehicle liability insurance card, and the motor vehicle safety inspection report.",
        context:
          "The driver's licence is deliberately not on that list. The same page tells you to carry it with you when you operate a motor vehicle, because it belongs to the driver rather than to the car.",
        trap:
          "Leaving the licence in the glovebox is exactly the mistake the handbook is heading off. Driving without it in your possession is a violation of the Motor Vehicle Act.",
        excerptKey: "glovebox-documents",
        sourceLabel: "Nova Scotia Driver's Handbook - Documents to keep in your vehicle's glove compartment",
        sourceUrl: ch7(176),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Thirty-five questions on the rules Nova Scotians actually get wrong: the numbers the printed handbook no longer states correctly, the rules that only exist in the front supplement or the Motor Vehicle Act, and the school zone formula that has cost people road tests in both directions.",
    questions: [
      {
        id: "ns_s5_01",
        topic: "licensing",
        question:
          "Chapter 1 of the printed handbook says a learner waits six months for the road test, or three with a driver training course. What is the current rule?",
        choices: [
          "Six months, or three with the long course - the handbook is correct",
          "Twelve months, or nine with a recognized driver education or training programme",
          "Nine months, with no reduction available",
          "Eighteen months, or twelve with a course",
        ],
        correctIndex: 1,
        explanation:
          "The minimum practice period is 12 months, reduced to a minimum of 9 months with a recognized driver education or training programme. The printed handbook has been wrong on this since 2016.",
        context:
          "The Registry publishes the current figures in two places: the Graduated Drivers Licence System page, and the Permits Directory entry for the Newly Licensed Driver's Licence, which spells out that the approved course must include at least 25 hours of classroom teaching and 10 hours of driving with an instructor.",
        trap:
          "This is the single most dangerous stale number in the book, because it is stated confidently and repeated in the commonly asked questions section a few pages later. Learn the 12 and the 9.",
        excerptKey: "paal-12-months",
        sourceLabel: "Nova Scotia Permits Directory - Newly Licensed Driver's Licence",
        sourceUrl: PAAL379,
        commonlyMissed: true,
      },
      {
        id: "ns_s5_02",
        topic: "speed",
        question:
          "You enter a school zone on a road posted at 80 km/h. Children are present. What is the maximum speed?",
        choices: ["30 km/h", "50 km/h", "60 km/h", "80 km/h"],
        correctIndex: 1,
        explanation:
          "Where the speed limit immediately before the school area is greater than 50 km/h, the school zone limit is 50 km/h. The 30 km/h figure applies only where the approaching limit was 50.",
        context:
          "Section 103(2) of the Motor Vehicle Act sets it out as a two-branch rule, and the Registry's amendments page repeats it word for word. It applies whatever the time of day, so after-school hours and weekends are covered.",
        trap:
          "Drivers memorise a single number, usually 30, and apply it everywhere. Nova Scotians have failed road tests for going too slowly in a school zone as well as too fast.",
        excerptKey: "statute-school-area",
        sourceLabel: "Motor Vehicle Act - Section 103(2), School area and school bus",
        sourceUrl: act(77),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_03",
        topic: "licensing",
        question:
          "How many stages does Nova Scotia's Graduated Driver Licensing programme have, and what are they?",
        choices: [
          "Two: learner's licence and newly licensed driver",
          "Three: learner's licence, newly licensed, and probationary",
          "Three: learner's licence, newly licensed, and restricted individual",
          "Four: learner's, newly licensed, restricted individual, and conditional",
        ],
        correctIndex: 2,
        explanation:
          "There are three stages: the learner's licence, the newly licensed stage, and the restricted individual stage. The third was added on April 1, 2015.",
        context:
          "The restricted individual holds a Class 5R or 6R with condition 47, stays there for two full years, must have zero alcohol or drugs in their body while driving, and cannot be a supervising driver for anyone else.",
        trap:
          "The main body of chapter 1 still describes three levels ending in an ordinary driver's licence, which reads like the old two-stage programme. Only the front supplement and the Registry's pages carry the restricted individual stage.",
        excerptKey: "gdl-stages-named",
        sourceLabel: "Nova Scotia Driver's Handbook - Important Graduated Driver Licence Changes",
        sourceUrl: supp(6),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_04",
        topic: "rules",
        question:
          "Using a hand-held cellphone while driving in Nova Scotia carries how many demerit points?",
        choices: [
          "Two",
          "Three",
          "Six",
          "Four",
        ],
        correctIndex: 3,
        explanation:
          "Section 100D of the Motor Vehicle Act makes using a hand-held cellular telephone or text messaging on any communications device an offence while operating a vehicle, and the demerit table assigns it four points.",
        context:
          "The Act's only exception is using a hand-held device to report an immediate emergency situation. The prohibition covers not just cars but electric kick-scooters on a highway and personal transporters on a roadway or sidewalk.",
        trap:
          "The printed handbook says nothing at all about phones, because it was written in 2000. Four points is enough to suspend a learner, who is suspended at four, and to trigger an interview for a newly licensed driver.",
        excerptKey: "statute-cellphone",
        sourceLabel: "Motor Vehicle Act - Section 100D, Cellular telephones",
        sourceUrl: act(75),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_05",
        topic: "emergencies",
        question:
          "At what level of property damage must a Nova Scotia collision be reported to the Registry?",
        choices: [
          "$2,000 or more",
          "$500 or more",
          "$1,000 or more",
          "Any amount",
        ],
        correctIndex: 0,
        explanation:
          "The current threshold is $2,000 or more in property damage, or any bodily injury or death.",
        context:
          "Chapter 5 of the handbook still prints $1000, and the Registry's amendments page publishes the $2,000 figure in its place. Chapter 7 of the same book already says $2,000, so the book contradicts itself and the newer figure is the one the Registry stands behind.",
        trap:
          "The report is due within 24 hours to the local police, the RCMP or the Registry. A driver who reads the $1000 in chapter 5 and does nothing at $1,500 has still met the duty; a driver who reads it and assumes nothing under $2,000 matters has missed the injury branch entirely.",
        excerptKey: "amend-collision-2000",
        sourceLabel: "Registry of Motor Vehicles - Amendments to the Driver's Handbook",
        sourceUrl: AMEND,
        commonlyMissed: true,
      },
      {
        id: "ns_s5_06",
        topic: "sharing",
        question:
          "You are passing a slower vehicle on a two-lane Nova Scotia highway. What does the handbook require as you reach the rear of that vehicle?",
        choices: [
          "Flash your headlights once",
          "Sound your horn, as required by law",
          "Move fully into the oncoming lane before signalling",
          "Nothing beyond checking your blind spot",
        ],
        correctIndex: 1,
        explanation:
          "The passing checklist says: as required by law, sound your horn when you reach the rear of the vehicle you are overtaking. The horn signal puts the other driver under a legal obligation to help you past.",
        context:
          "The rest of the sequence is worth learning as a sequence: check it is safe, signal, check the blind spot chin to shoulder, move left gradually, accelerate without exceeding the posted limit, sound the horn, signal right after passing, check over the right shoulder, and move back when the passed vehicle's headlights are visible in your mirror.",
        trap:
          "Nova Scotians openly joke about this rule because nobody honks in practice. It is still written in the handbook twice, and it is exactly the kind of provincial oddity a knowledge test likes.",
        excerptKey: "pass-do-not-speed",
        sourceLabel: "Nova Scotia Driver's Handbook - Passing",
        sourceUrl: ch2(58),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_07",
        topic: "signs",
        question:
          "The school zone sign is fluorescent yellow-green. Since when has that been the standard design in Nova Scotia?",
        choices: [
          "Since April 1, 2015",
          "Since 1994",
          "Since June 1, 2001",
          "Since 2017",
        ],
        correctIndex: 2,
        explanation:
          "The five-sided fluorescent yellow-green school zone sign with two school children in black has been the standard design across Nova Scotia since June 1, 2001.",
        context:
          "The colour is doing safety work, not decoration. Fluorescent yellow-green reads at a distance and in poor light better than ordinary yellow, which is why school and pedestrian warnings moved to it.",
        trap:
          "April 1, 2015 is the date the third GDL stage arrived, and it gets attached to almost every Nova Scotia date question by association.",
        excerptKey: "school-zone-sign",
        sourceLabel: "Nova Scotia Driver's Handbook - School zone",
        sourceUrl: ch3(80),
      },
      {
        id: "ns_s5_08",
        topic: "licensing",
        question:
          "You fail the Road Sign Recognition Test but pass the Rules of the Road Test. What must you retake?",
        choices: [
          "Both parts, because the Knowledge Test is scored as a whole",
          "Only the Road Sign Recognition Test, but not for 30 days",
          "Nothing, provided your combined score reaches 32 of 40",
          "Only the Road Sign Recognition Test",
        ],
        correctIndex: 3,
        explanation:
          "You only need to retake the part you did not pass. If you fail both parts, you retake both.",
        context:
          "The waiting period depends on how you sat it. Online there is no waiting period at all - you can take it again as soon as you are ready. In person you wait until the next day. Either way you pay for another test.",
        trap:
          "The older Permits Directory page says that failing one part means taking the entire test over. The current knowledge test page describes the test as it is run now, and it is the one to follow.",
        excerptKey: "test-retake",
        sourceLabel: "Government of Nova Scotia - Take a driver knowledge test: Learner's Licence (class 7)",
        sourceUrl: TEST,
        commonlyMissed: true,
      },
      {
        id: "ns_s5_09",
        topic: "rightOfWay",
        question:
          "A stopped emergency vehicle with flashing lights is on the far side of a divided highway, across the median from you. What must you do?",
        choices: [
          "Nothing - the slow down and move over rule does not apply across a median",
          "Slow to 60 km/h anyway",
          "Slow to 60 km/h and move over if you can",
          "Stop completely until it moves off",
        ],
        correctIndex: 0,
        explanation:
          "You do not need to slow down or move over if the vehicle is on the other side of the median on a divided highway. Section 106E(3) of the Motor Vehicle Act says the same thing: where a median divides the roadways, the section applies only to a vehicle on the same roadway.",
        context:
          "Take the median away and the exemption goes with it. On an undivided road, an emergency vehicle stopped on the opposite shoulder still requires you to slow to 60 km/h, or to the posted limit if it is lower.",
        trap:
          "The exemption is about a median, not about which side of the road the vehicle is on. Drivers apply it to any oncoming shoulder and get it wrong on undivided highways.",
        excerptKey: "emerg-median-exception",
        sourceLabel: "Nova Scotia Driver's Handbook - Important GDL Changes, Emergency vehicles",
        sourceUrl: supp(8),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_10",
        topic: "signs",
        question:
          "In a Nova Scotia work zone, a Flashing Light Unit shows its lamps in a straight line or bar. What does that mean?",
        choices: [
          "It is safe to pass on either side",
          "It is caution mode, and it does not indicate that passing is safe at all",
          "The lane ahead is closed",
          "Traffic must stop",
        ],
        correctIndex: 1,
        explanation:
          "Lamps in a straight line or bar is caution mode. It alerts drivers to a hazard such as a vehicle occupying a lane or workers laying out signs, and it does not indicate that it is safe to pass.",
        context:
          "The arrow displays are the ones that tell you where to go. Two arrow heads means it is safe to pass on either side; a single arrow head means the lane is closed and you may pass only on the side the arrow shows.",
        trap:
          "Caution mode looks like a gentler version of the arrows and carries the least information of the three. In caution mode you make the decision yourself from the conditions present.",
        excerptKey: "work-caution-mode",
        sourceLabel: "Nova Scotia Driver's Handbook - Flashing Light Unit",
        sourceUrl: ch3(103),
      },
      {
        id: "ns_s5_11",
        topic: "speed",
        question:
          "Which of these is NOT one of Nova Scotia's statutory 50 km/h situations?",
        choices: [
          "Within 30 metres of a railway crossing",
          "In a public park within a city or town",
          "On any street with houses on both sides",
          "In a danger zone",
        ],
        correctIndex: 2,
        explanation:
          "The Act lists specific categories, and a residence district as it defines one is among them - but the presence of houses does not by itself create a residence district or lower the limit.",
        context:
          "The full list in Section 102(2) is: passing a church while the congregation is entering or leaving; within 30 metres of a grade crossing; in a danger zone; in a business district; within 15 metres of an intersection where the view along the cross street is under 60 metres; in a residence district; and in public parks within cities or towns unless posted otherwise.",
        trap:
          "Every other option on this list is a genuine entry from the Act. Only the informal description of a street with houses is not, and it is the one that feels most obviously right.",
        excerptKey: "speed-50-railway",
        sourceLabel: "Nova Scotia Driver's Handbook - Choosing a safe speed",
        sourceUrl: ch2(51),
      },
      {
        id: "ns_s5_12",
        topic: "rules",
        question:
          "A vehicle is parked at the curb on a two-way street and you need to get past it. What is the correct manoeuvre?",
        choices: [
          "Straddle the centre line and continue at your current speed",
          "Sound your horn and squeeze past within your own lane",
          "Stop behind it until a break in oncoming traffic lets you pass without signalling",
          "Check oncoming traffic, signal, move completely into the oncoming lane, pass, signal, check the blind spot and return",
        ],
        correctIndex: 3,
        explanation:
          "Going round a parked vehicle is a pass, and it takes the whole passing sequence: check for oncoming traffic, signal, move fully into the other lane, pass, signal again, check your blind spot and move back.",
        context:
          "The handbook builds the same sequence for overtaking a moving vehicle, and the geometry does not change because the obstruction is stationary. Drive entirely or as nearly as is practical within a single lane, and do not leave it until it is safe.",
        trap:
          "Straddling the centre line feels considerate and it is a half-manoeuvre that occupies two lanes at once. Nova Scotia road test examiners name it as one of the leading reasons people fail.",
        excerptKey: "pass-left-return",
        sourceLabel: "Nova Scotia Driver's Handbook - Overtaking and passing",
        sourceUrl: ch2(57),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_13",
        topic: "licensing",
        question:
          "How long is a Nova Scotia learner's licence valid?",
        choices: [
          "Two years",
          "Six months",
          "One year, as chapter 1 states",
          "Until the holder turns 18",
        ],
        correctIndex: 0,
        explanation:
          "A learner's licence is valid for a maximum of 2 years. The front supplement says so explicitly, adding that this replaced the previous one year.",
        context:
          "You must pass the road test and enter the next GDL stage before it expires. If you do not, you have to rewrite the learner's test before you can renew the learner's licence.",
        trap:
          "Chapter 1 says one year twice, once in the body and again in the commonly asked questions. The supplement bound into the front of the same book overrides both.",
        excerptKey: "learner-expiry-two-years",
        sourceLabel: "Nova Scotia Driver's Handbook - Important GDL Changes, Learner's Licence Expiry",
        sourceUrl: supp(7),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_14",
        topic: "safety",
        question:
          "At what speed does partial hydroplaning begin in a standard passenger car on wet pavement?",
        choices: ["About 35 km/h", "About 55 km/h", "About 85 km/h", "About 100 km/h"],
        correctIndex: 1,
        explanation:
          "Partial hydroplaning starts at about 55 km/h in a standard passenger car and increases with speed. At about 85 km/h the tires may be riding entirely on top of the water.",
        context:
          "When the tires are on the water there is no friction available to brake, accelerate or corner, and a gust of wind or a slight steering input can start an uncontrollable skid. Reducing speed is the only defence the handbook offers.",
        trap:
          "Eighty-five is the total hydroplaning figure and 55 is where it begins. Learners who remember only the higher number assume city speeds are safe in standing water.",
        excerptKey: "hydroplaning",
        sourceLabel: "Nova Scotia Driver's Handbook - Rain",
        sourceUrl: ch5(139),
      },
      {
        id: "ns_s5_15",
        topic: "signs",
        question:
          "Two cars appear inside a green circle on a regulatory sign. What is it saying?",
        choices: [
          "Do not pass",
          "Passing is permitted",
          "Two-way traffic ahead",
          "The passing lane ends",
        ],
        correctIndex: 1,
        explanation:
          "A green circle grants permission for the thing shown inside it, so two cars in a green circle means passing is permitted.",
        context:
          "The same artwork inside a red circle with a slash means the opposite: do not pass. The circle is the grammar of these signs, and the symbol inside it is only the verb.",
        trap:
          "This is the same pair of cars used on the do-not-pass sign. Reading the symbol and skipping the ring reverses the instruction exactly.",
        excerptKey: "sign-green-red-circle",
        sourceLabel: "Nova Scotia Driver's Handbook - Other regulatory signs",
        sourceUrl: ch3(83),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_16",
        topic: "rightOfWay",
        question:
          "At a four-way stop, a cyclist arrives ahead of you. What is the correct behaviour?",
        choices: [
          "Wave them across, since they are more vulnerable",
          "Take your turn first, because a bicycle is slower away from the line",
          "Let them take their turn in the flow of traffic, as any other vehicle would",
          "Pass them on the left as they pull away",
        ],
        correctIndex: 2,
        explanation:
          "Cyclists have the same rights and responsibilities as motorists, and the handbook's own cycling advice is that at a four-way stop a cyclist stays in line with the flow of traffic and waits their turn. So do you.",
        context:
          "The handbook also asks cyclists to keep out of a right-turn lane if they are going straight, and asks drivers to remember that experienced cyclists travel at 25 to 35 km/h on the flat and up to 50 km/h downhill - faster than most drivers estimate.",
        trap:
          "Waving someone through out of turn is well meant and it breaks the pattern every other driver at the intersection is reading. Predictability is the whole point of a four-way stop.",
        excerptKey: "bike-same-rules",
        sourceLabel: "Nova Scotia Driver's Handbook - Be Careful at Intersections",
        sourceUrl: ch2(73),
      },
      {
        id: "ns_s5_17",
        topic: "impairment",
        question:
          "When does the Administrative Licence Suspension take effect after an impaired driving charge?",
        choices: [
          "On conviction",
          "After a 30-day appeal period",
          "Only if you refuse the breathalyzer",
          "Immediately when you are charged - a three-month suspension, with a seven-day temporary licence",
        ],
        correctIndex: 3,
        explanation:
          "The Administrative Licence Suspension Program provides an immediate three-month suspension for failing the breathalyzer or refusing to give a breath sample. When you are charged, police order the suspension and issue a seven-day temporary licence if you held a valid one.",
        context:
          "It runs alongside the criminal process rather than replacing it. A first conviction later brings revocation for a year from the date of conviction, fines, reinstatement fees, an Alcohol Assessment Program and possible re-examination.",
        trap:
          "Drivers assume nothing happens until a court decides. The three months starts on the roadside, and the seven-day temporary licence is the only bridge.",
        excerptKey: "als-three-months",
        sourceLabel: "Nova Scotia Driver's Handbook - Administrative Licence Suspension Program",
        sourceUrl: ch6(156),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_18",
        topic: "sharing",
        question:
          "Which of these vehicles is NOT on the list you must slow down and move over for?",
        choices: [
          "A snow plow clearing a highway",
          "A tow truck assisting a vehicle",
          "A conservation officer's vehicle",
          "A motor vehicle inspector's vehicle",
        ],
        correctIndex: 0,
        explanation:
          "The slow down and move over list covers ambulances, police, fire department and Lands and Forestry fire vehicles, fire chiefs' and deputy chiefs' vehicles, conservation officers, motor vehicle and carrier inspectors, public safety vehicles such as sheriffs and bridge patrol, and tow trucks stopped at a fire or collision or assisting a vehicle. Snow plows are covered by different advice.",
        context:
          "The snow plow rules are about passing, not about slowing to 60. Do not try to pass between staggered plows, and be aware that some carry a wing extending up to three metres to the right.",
        trap:
          "Flashing lights on a plow look like every other flashing light on the list. The plow is a working vehicle in motion, not a stopped emergency vehicle.",
        excerptKey: "emerg-tow-trucks",
        sourceLabel: "Nova Scotia Driver's Handbook - Important GDL Changes, Types of vehicles",
        sourceUrl: supp(8),
      },
      {
        id: "ns_s5_19",
        topic: "licensing",
        question:
          "A newly licensed Class 5N driver has held the licence for two years and never handed in a driver training certificate. What is their status?",
        choices: [
          "They are automatically a restricted individual",
          "They remain a Class 5N driver indefinitely, with all the restrictions",
          "They are automatically a full Class 5 driver",
          "Their licence expires",
        ],
        correctIndex: 1,
        explanation:
          "Without the certificate the stage does not end. The Registry says the driver will remain in the newly licensed phase indefinitely, and the handbook says all the restrictions related to that class apply indefinitely.",
        context:
          "The exit takes a six-hour defensive driving course or a recognized driver training course of 25 hours theory and 10 hours driving, plus providing the certificate to the Registry in person or by mail so it can be recorded.",
        trap:
          "The restrictions that keep running are not trivial: zero blood alcohol, one front-seat passenger, rear passengers limited to seat belts, and no driving between midnight and 5 am.",
        excerptKey: "gdl-exit-course",
        sourceLabel: "Registry of Motor Vehicles - Graduated Drivers Licence System",
        sourceUrl: GDL,
        commonlyMissed: true,
      },
      {
        id: "ns_s5_20",
        topic: "parking",
        question:
          "You are parking uphill on a street with no curb. Which way do the front wheels go?",
        choices: [
          "To the left",
          "Straight ahead",
          "To the right",
          "Whichever way the road slopes",
        ],
        correctIndex: 2,
        explanation:
          "Uphill without a curb, the wheels turn to the right, so a rolling vehicle runs off the highway rather than into traffic. Uphill with a curb, they turn left so the wheels back into the curb.",
        context:
          "Downhill is the simple case: right, with a curb or without. The general principle is the one to hold on to - point the wheels so that if the vehicle rolls away it goes into the curb or off the road, not into the traffic lane.",
        trap:
          "Two of the four hill cases turn right and one turns left, so people who memorise a pattern rather than the principle get the uphill pair backwards.",
        excerptKey: "park-no-curb",
        sourceLabel: "Nova Scotia Driver's Handbook - Parking on a hill",
        sourceUrl: ch2(64),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_21",
        topic: "signs",
        question:
          "You reach a railway crossing with a crossbuck and a stop sign. What is required?",
        choices: [
          "Slow and look both ways",
          "Stop only if flashing lights are active",
          "Proceed, since the crossbuck governs",
          "Come to a full stop before crossing",
        ],
        correctIndex: 3,
        explanation:
          "If there is a stop sign at a railway crossing, you must come to a full stop before crossing.",
        context:
          "Where flashing red lights are used with the crossbuck, you stop just as you would for any flashing red signal and proceed only when it is safe. Where gates are fitted, you stop before they lower and never move through while they are down.",
        trap:
          "A crossbuck alone is not a stop sign; it marks the crossing. Once a stop sign is added, the ordinary stop rules apply in full.",
        excerptKey: "railway-flashing-red",
        sourceLabel: "Nova Scotia Driver's Handbook - Railway crossings",
        sourceUrl: ch3(81),
      },
      {
        id: "ns_s5_22",
        topic: "rules",
        question:
          "A Class 5N driver needs to drive to work at 4 am. What is required?",
        choices: [
          "An exemption from the Registry, applied for on a form and with a fee, or an experienced driver in the front seat",
          "Nothing, since travel to work is exempt from the curfew",
          "A note from the employer carried in the vehicle",
          "Nothing, provided the journey is under 20 kilometres",
        ],
        correctIndex: 0,
        explanation:
          "A newly licensed driver who must drive to and from work between midnight and 5 am has to apply for an exemption from the nighttime driving restriction, and there is a fee. The alternative is an experienced driver in the front seat.",
        context:
          "The exemption is narrow. The Registry requires the driver to take the most direct route to and from work, and no passengers are permitted in the vehicle.",
        trap:
          "Working a night shift does not create the exemption; applying for it does. Driving at 4 am on the strength of a job is still a curfew violation.",
        excerptKey: "gdl-curfew-direct-route",
        sourceLabel: "Registry of Motor Vehicles - Graduated Drivers Licence System",
        sourceUrl: GDL,
        commonlyMissed: true,
      },
      {
        id: "ns_s5_23",
        topic: "speed",
        question:
          "What stopping distances does the handbook give for a vehicle travelling at 30 km/h on dry pavement, packed snow and black ice?",
        choices: [
          "6 metres, 12 metres, 22 metres",
          "6 metres, 22 metres, 52 metres",
          "12 metres, 30 metres, 60 metres",
          "10 metres, 25 metres, 40 metres",
        ],
        correctIndex: 1,
        explanation:
          "At 30 km/h, stopping takes approximately 6 metres on dry pavement, 22 metres on packed snow and 52 metres on black ice.",
        context:
          "The point of the comparison is the ratio, not the numbers. Black ice takes nearly nine times the distance of dry pavement at the same speed, which is why the handbook's winter advice is to cut your speed by more than half on packed snow and slow to a crawl on ice.",
        trap:
          "Four-wheel drive does nothing for this. The handbook says explicitly that four-wheel traction does not let you stop any quicker on a slippery surface.",
        excerptKey: "black-ice-distances",
        sourceLabel: "Nova Scotia Driver's Handbook - Snow, frost, and ice",
        sourceUrl: ch5(140),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_24",
        topic: "safety",
        question:
          "When is a demerit point deduction for a defensive driving course NOT available in Nova Scotia?",
        choices: [
          "When the course was taken more than three months ago",
          "When you drive fewer than 10,000 kilometres a year",
          "When you hold a Class 5N, 7 or 8 licence",
          "When your record shows fewer than four points",
        ],
        correctIndex: 2,
        explanation:
          "Newly licensed drivers on a Class 5N and holders of a Class 7 or 8 licence are not eligible for point deduction. The deduction is for experienced drivers in Classes 1 to 5.",
        context:
          "For those who are eligible, the Registrar may deduct up to four points in a five-year period, on a course completed within the last year. Points are not deducted if your licence has been suspended, you hold a probationary licence, or you owe fines.",
        trap:
          "The drivers with the lowest suspension thresholds are exactly the ones who cannot buy points back. Four points suspends a learner and there is no course that undoes them.",
        excerptKey: "demerit-no-deduction-novice",
        sourceLabel: "Nova Scotia Driver's Handbook - Removing demerit points from your driving record",
        sourceUrl: ch1(31),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_25",
        topic: "signs",
        question:
          "A yellow diamond in a work zone shows two lanes converging with a black bar. What does the sign that usually accompanies it require?",
        choices: [
          "A reduction to 30 km/h",
          "A complete stop at the merge point",
          "Use of four-way flashers through the taper",
          "Do Not Pass, which is regulatory and warrants a ticket if disobeyed",
        ],
        correctIndex: 3,
        explanation:
          "The right lane ends sign is often used with the Do Not Pass sign, which is a regulatory sign creating an orderly flow before the merge point. Disobeying it warrants a ticket.",
        context:
          "The handbook is unusually blunt about the behaviour it is trying to stop: approaching the merge point at too high a speed in the lane that is closing, then pushing into the other lane at the last moment. It says this causes collisions.",
        trap:
          "The advance notice exists so you can merge early. Treating the closing lane as a queue-jumping opportunity is the mistake the pair of signs was designed against.",
        excerptKey: "work-merge-early",
        sourceLabel: "Nova Scotia Driver's Handbook - Lane closures",
        sourceUrl: ch3(96),
      },
      {
        id: "ns_s5_26",
        topic: "rightOfWay",
        question:
          "Under Section 122 of the Motor Vehicle Act, which vehicle has the right of way at an intersection?",
        choices: [
          "The one that has already entered the intersection",
          "The one travelling on the wider road",
          "The one travelling straight through",
          "The one that signalled first",
        ],
        correctIndex: 0,
        explanation:
          "A driver approaching an intersection must yield to a vehicle that has already entered it. The tie-break for two vehicles entering at approximately the same time is a separate rule.",
        context:
          "The handbook states both halves in the same list: a vehicle already in the intersection has right of way over any car that has not entered, and when two or more reach it at the same time, the car to the left must yield.",
        trap:
          "Being on the right only helps on a genuine tie. Once the other vehicle is in the intersection, it does not matter which side it came from.",
        excerptKey: "row-already-in",
        sourceLabel: "Nova Scotia Driver's Handbook - Right of way",
        sourceUrl: ch2(44),
      },
      {
        id: "ns_s5_27",
        topic: "impairment",
        question:
          "Nova Scotia says its liver breaks down alcohol at a fixed rate. Roughly how long does one standard drink take to leave the system?",
        choices: [
          "About twenty minutes",
          "More than an hour",
          "About half an hour",
          "It depends entirely on body weight",
        ],
        correctIndex: 1,
        explanation:
          "It takes more than one hour to eliminate each standard drink from your system, and time is the only thing that removes alcohol.",
        context:
          "A standard drink is a 340 ml bottle of beer, 43 ml of spirits, or a 142 ml glass of unfortified wine - the handbook says all three contain the same amount of alcohol. How alcohol affects you does depend on age, sex, size, fitness, mood, food and other substances, but the elimination rate does not.",
        trap:
          "The handbook's own figure for the metabolic rate is printed as .015 mg/hr, which is not a coherent unit. Do not try to compute from it; the rule to carry away is more than an hour per drink.",
        excerptKey: "alcohol-standard-drink",
        sourceLabel: "Nova Scotia Driver's Handbook - Drinking and driving",
        sourceUrl: ch6(154),
      },
      {
        id: "ns_s5_28",
        topic: "sharing",
        question:
          "The handbook names a common car-bike collision as the right hook. What is it?",
        choices: [
          "A cyclist turning right across a driver's path",
          "A driver opening a door into a passing cyclist",
          "A driver passing a cyclist and then turning right in front of them",
          "A cyclist overtaking a queue on the right",
        ],
        correctIndex: 2,
        explanation:
          "The right hook happens when a motorist misjudges a cyclist's speed, passes them, and then turns right directly across their path. The handbook's instruction is not to pass and cut.",
        context:
          "If it is not safe to pass before turning, slow down and move behind the cyclist before making the turn. The left cross is the mirror image: a driver turning across oncoming traffic misjudges an approaching cyclist and turns in front of them.",
        trap:
          "The misjudgment is about speed, not about position. Experienced cyclists travel at 25 to 35 km/h on the flat, which closes a gap far faster than drivers assume.",
        excerptKey: "bike-right-hook",
        sourceLabel: "Nova Scotia Driver's Handbook - Common car-bike collisions",
        sourceUrl: ch2(71),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_29",
        topic: "rules",
        question:
          "What happens to a Nova Scotia learner who lets the learner's licence expire without passing the road test?",
        choices: [
          "The practice period restarts from zero",
          "They must wait six months before reapplying",
          "They lose the right to apply for a Class 7 licence",
          "They must rewrite the learner's test before renewing the learner's licence",
        ],
        correctIndex: 3,
        explanation:
          "If you do not pass the road test and enter the next GDL stage before your learner's licence expires, you must rewrite the learner's test before you may renew the licence.",
        context:
          "The waiting period does not restart. The handbook's older wording makes the same point about the previous one-year licence: after rewriting you are not required to wait an additional three or six months before taking a road test.",
        trap:
          "Rewriting the test is not the same as starting over. Losing the licence costs you the test fee and the trip, not the practice time you have already served.",
        excerptKey: "learner-expiry-rewrite",
        sourceLabel: "Nova Scotia Driver's Handbook - Important GDL Changes, Learner's Licence Expiry",
        sourceUrl: supp(7),
      },
      {
        id: "ns_s5_30",
        topic: "signs",
        question:
          "A regulatory sign shows a right-turn arrow with a red signal light symbol, crossed out. What is it saying?",
        choices: [
          "No right turn on a red signal - wait for the green",
          "Right turns are prohibited at this intersection at all times",
          "Right turns are permitted only on a green arrow",
          "The right lane is closed",
        ],
        correctIndex: 0,
        explanation:
          "The sign means no right turn on red signal: wait for the green light before making a right turn. It switches off the general permission to turn right on red after stopping.",
        context:
          "Without that sign, a right turn on red is legal in Nova Scotia after a complete stop and a check that the turn can be made safely. A left turn on red is illegal except from a one-way street onto another one-way street.",
        trap:
          "This is different from the no right turn sign, which forbids the turn entirely. This one only removes the red-light permission.",
        excerptKey: "sign-no-right-on-red",
        sourceLabel: "Nova Scotia Driver's Handbook - Examples of Signs and Their Meanings",
        sourceUrl: ch3(89),
      },
      {
        id: "ns_s5_31",
        topic: "safety",
        question:
          "What does the handbook say about using parking lights while driving in fog or heavy rain?",
        choices: [
          "They are preferable to headlights, because they cut glare",
          "Do not use them - use lowbeams",
          "They are acceptable if the wipers are running",
          "They are required in addition to headlights",
        ],
        correctIndex: 1,
        explanation:
          "Do not use parking lights when driving on the highway, especially when adverse conditions reduce visibility. Use lowbeams only, because highbeams reflect off the precipitation.",
        context:
          "The lighting chapter is stricter still: during the times when lights are required it is illegal to use parking lights or daytime running lights instead of headlights.",
        trap:
          "Daytime running lights feel like enough in poor visibility because you can see the road ahead. They usually leave the tail lights dark, which is the half that matters in fog.",
        excerptKey: "fog-lowbeam",
        sourceLabel: "Nova Scotia Driver's Handbook - Rain, snow, and fog",
        sourceUrl: ch5(137),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_32",
        topic: "parking",
        question:
          "How far must you keep clear of a crosswalk when stopping or parking?",
        choices: ["3 metres", "5 metres", "7.5 metres", "10 metres"],
        correctIndex: 1,
        explanation:
          "You may not stop or park within 5 metres of a crosswalk. The same 5 metres applies to a fire hydrant or a driveway entrance to a fire station.",
        context:
          "The reason is the same sight-line problem that makes passing a stopped vehicle at a crosswalk illegal: a parked car close to the crossing hides the pedestrian stepping out from behind it.",
        trap:
          "Five, 7.5, 10 and 15 metres all appear in the same short list and attach to different things. Five is crosswalks and hydrants; 7.5 is intersections.",
        excerptKey: "park-crosswalk-5m",
        sourceLabel: "Nova Scotia Driver's Handbook - Parking and stopping",
        sourceUrl: ch2(61),
      },
      {
        id: "ns_s5_33",
        topic: "emergencies",
        question:
          "Nova Scotia requires a collision report within what period?",
        choices: [
          "Within 12 hours",
          "Within 48 hours",
          "Within 24 hours",
          "Within seven days",
        ],
        correctIndex: 2,
        explanation:
          "You must file a report within 24 hours with the local police, the RCMP or the Registry of Motor Vehicles where the collision involves personal injury, death, or property damage at the reporting threshold.",
        context:
          "The same 24 hours applies where you damage an unattended vehicle or property and cannot locate the owner after taking reasonable steps, and it applies to a garage that receives a vehicle showing evidence of a serious collision.",
        trap:
          "If you are physically incapable of making the report and another occupant is in the vehicle, the duty passes to that occupant rather than lapsing.",
        excerptKey: "collision-report-24h",
        sourceLabel: "Nova Scotia Driver's Handbook - Collisions",
        sourceUrl: ch5(149),
      },
      {
        id: "ns_s5_34",
        topic: "licensing",
        question:
          "Who counts as an experienced driver for the purpose of supervising a Nova Scotia learner?",
        choices: [
          "Anyone over 25 with a valid licence",
          "Any holder of a full Class 5 licence, including a restricted individual",
          "A parent or guardian, regardless of licence history",
          "Anyone who has held a valid licence for two years and is no longer in the GDL programme",
        ],
        correctIndex: 3,
        explanation:
          "An experienced driver is someone who has held a valid driver's licence for two years and is no longer in the GDL programme, holding a valid Class 1, 2, 3, 4 or 5 licence for the type of vehicle being driven.",
        context:
          "The restricted individual stage sharpens this. A Class 5R holder with condition 47 has left the newly licensed stage but is still in the GDL programme, and is expressly forbidden from being a supervising driver.",
        trap:
          "A driver who has handed in the 5N feels finished and is still two years short. Using one as your supervisor is a restriction violation for both of you.",
        excerptKey: "gdl-no-supervising",
        sourceLabel: "Nova Scotia Driver's Handbook - Important GDL Changes, Restrictions",
        sourceUrl: supp(6),
        commonlyMissed: true,
      },
      {
        id: "ns_s5_35",
        topic: "signs",
        question:
          "A solid yellow line runs along the left edge of the roadway and a solid white line along the right. What does that tell you?",
        choices: [
          "You are on a divided highway travelling in the correct direction",
          "You are travelling in the wrong direction",
          "The lanes ahead merge",
          "Passing is permitted on the left",
        ],
        correctIndex: 0,
        explanation:
          "Single solid yellow lines are the left-edge lines on divided highways and single solid white lines are the right-edge lines. If you see them reversed, you are travelling in the wrong direction.",
        context:
          "The colour convention underneath is simple: yellow separates or bounds traffic moving in opposite directions, white separates or bounds traffic moving in the same direction. That is why yellow lives on the left and white on the right.",
        trap:
          "The reversed case is the alarm the handbook is teaching, and it is the one people never look for because they are watching signs rather than paint.",
        excerptKey: "marking-edge-lines",
        sourceLabel: "Nova Scotia Driver's Handbook - Pavement Markings",
        sourceUrl: ch3(85),
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
      "Thirty questions in the mix of the real Knowledge Test, with signs carrying their proper share and no hints beyond what the examiner would give you. Treat 24 correct as a pass and read the two halves separately.",
    questions: [
      {
        id: "ns_s6_01",
        topic: "signs",
        question: "Which sign shape is used only for stop signs in Nova Scotia?",
        choices: ["The triangle", "The octagon", "The pentagon", "The diamond"],
        correctIndex: 1,
        explanation:
          "The octagonal shape is used only for stop signs. The triangle belongs to the yield, the five-sided pentagon to the school zone, and the diamond to warnings.",
        context:
          "The shapes are learned so a driver can identify a sign at a distance or in poor light, before the lettering is readable.",
        trap:
          "The pentagon and the octagon both have more sides than a driver counts at speed. The pentagon is the fluorescent yellow-green school zone sign.",
        excerptKey: "sign-stop",
        sourceLabel: "Nova Scotia Driver's Handbook - Stop sign",
        sourceUrl: ch3(80),
      },
      {
        id: "ns_s6_02",
        topic: "speed",
        question: "What is the maximum speed on any Nova Scotia highway where nothing is posted?",
        choices: ["50 km/h", "60 km/h", "80 km/h", "90 km/h"],
        correctIndex: 2,
        explanation:
          "Section 106(1) of the Motor Vehicle Act forbids driving faster than 80 km/h on any highway at any time unless a higher rate has been posted.",
        context:
          "Business and residential districts drop to 50 km/h, and the Minister may post up to 110 km/h on particular highways.",
        trap:
          "The 50 attaches to specific categories of place, not to the presence of buildings.",
        excerptKey: "statute-speed-80",
        sourceLabel: "Motor Vehicle Act - Section 106, Maximum speed limit",
        sourceUrl: act(78),
      },
      {
        id: "ns_s6_03",
        topic: "rightOfWay",
        question:
          "You are entering a roundabout. Who has the right of way?",
        choices: [
          "You, once you have signalled",
          "Whichever vehicle is travelling faster",
          "Traffic already in the circle",
          "Traffic entering from your right",
        ],
        correctIndex: 2,
        explanation:
          "Drivers already in the circle have the right of way over entering traffic, and Section 135 of the Motor Vehicle Act says the same.",
        context:
          "Slow on the approach, enter on a gap, travel counter-clockwise, and signal before exiting to the right.",
        trap:
          "Never exit a roundabout from an inside lane. Move to the correct lane before you reach your exit.",
        excerptKey: "statute-roundabout",
        sourceLabel: "Motor Vehicle Act - Section 135(1), Rotary or roundabout",
        sourceUrl: act(94),
      },
      {
        id: "ns_s6_04",
        topic: "signs",
        question: "What does a fluorescent yellow-green five-sided sign indicate?",
        choices: [
          "A playground",
          "A pedestrian crossing",
          "A hospital zone",
          "A school zone",
        ],
        correctIndex: 3,
        explanation:
          "The five-sided fluorescent yellow-green sign showing two school children is the school zone sign, standard across Nova Scotia since June 1, 2001.",
        context:
          "With children present, the maximum is 30 km/h where the approaching limit was 50, and 50 km/h where the approaching limit was higher.",
        trap:
          "The formula, not a fixed number, is what the school zone carries.",
        excerptKey: "school-zone-sign",
        sourceLabel: "Nova Scotia Driver's Handbook - School zone",
        sourceUrl: ch3(80),
      },
      {
        id: "ns_s6_05",
        topic: "rules",
        question: "What must you do before overtaking another vehicle in Nova Scotia?",
        choices: [
          "Signal your intention and sound your horn",
          "Signal your intention only",
          "Flash your headlights twice",
          "Move left and then signal",
        ],
        correctIndex: 0,
        explanation:
          "You must signal your intention to pass and sound your horn. The horn places the driver being overtaken under a legal obligation to help you past.",
        context:
          "The driver being passed must give way and must not increase speed until the pass is complete.",
        trap:
          "The horn requirement is real Nova Scotia law even though almost nobody follows it in practice.",
        excerptKey: "pass-signal-horn",
        sourceLabel: "Nova Scotia Driver's Handbook - Overtaking and passing",
        sourceUrl: ch2(57),
      },
      {
        id: "ns_s6_06",
        topic: "signals",
        question: "A flashing yellow signal means what?",
        choices: [
          "Stop and wait for a green",
          "Slow down and proceed with caution",
          "The signal is out of order",
          "Turning traffic may proceed",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow or amber signal has the same meaning as a warning sign: slow down and proceed with caution.",
        context:
          "A flashing red means the same thing as a stop sign, and a flashing green means facing traffic may turn left, go straight or turn right.",
        trap:
          "A dead signal is different again - it turns the intersection into a multi-stop.",
        excerptKey: "signal-flashing-amber",
        sourceLabel: "Nova Scotia Driver's Handbook - Flashing signals",
        sourceUrl: ch2(40),
      },
      {
        id: "ns_s6_07",
        topic: "licensing",
        question:
          "What is the minimum practice period before a Nova Scotia learner may take the road test?",
        choices: [
          "3 months",
          "6 months",
          "12 months, or 9 with a recognized driver education programme",
          "24 months",
        ],
        correctIndex: 2,
        explanation:
          "The Registry sets the minimum practice period at 12 months, reduced to a minimum of 9 months with a recognized driver education or training programme.",
        context:
          "Suspensions delay graduation to the newly licensed stage by a period equal to the minimum practice period.",
        trap:
          "The printed handbook still says six months, or three with the long course. It has been wrong since 2016.",
        excerptKey: "gdl-practice-12-months",
        sourceLabel: "Registry of Motor Vehicles - Graduated Drivers Licence System",
        sourceUrl: GDL,
        commonlyMissed: true,
      },
      {
        id: "ns_s6_08",
        topic: "signs",
        question: "What does a diamond-shaped orange sign indicate?",
        choices: [
          "A permanent hazard on the road",
          "A detour ahead",
          "A slow-moving vehicle ahead",
          "A work zone",
        ],
        correctIndex: 3,
        explanation:
          "Orange signs with black messages identify work zones and direct drivers through them.",
        context:
          "Barricades, cones and drums guide traffic through, and traffic control persons may be managing it with stop and slow paddles.",
        trap:
          "Some work zone signs are regulatory rather than advisory. Do Not Pass warrants a ticket.",
        excerptKey: "work-orange",
        sourceLabel: "Nova Scotia Driver's Handbook - Construction or Work Zones",
        sourceUrl: ch3(94),
      },
      {
        id: "ns_s6_09",
        topic: "parking",
        question: "How far from an intersection may you not stop or park?",
        choices: ["Within 5 metres", "Within 7.5 metres", "Within 10 metres", "Within 15 metres"],
        correctIndex: 1,
        explanation:
          "You may not stop or park within 7.5 metres of an intersection.",
        context:
          "Five metres applies to a crosswalk or fire hydrant, 10 metres to the approach to a stop sign, yield sign, beacon or signal at the roadside, and 15 metres to the nearest rail of a railway crossing.",
        trap:
          "Four different distances live on the same list and attach to different features.",
        excerptKey: "park-intersection-75",
        sourceLabel: "Nova Scotia Driver's Handbook - Parking and stopping",
        sourceUrl: ch2(61),
      },
      {
        id: "ns_s6_10",
        topic: "safety",
        question: "When must a Nova Scotia driver use headlights?",
        choices: [
          "From half an hour after sunset to half an hour before sunrise",
          "From sunset to sunrise",
          "Only in rain, fog or snow",
          "Whenever the vehicle has no daytime running lights",
        ],
        correctIndex: 0,
        explanation:
          "Headlights are required from half an hour after sunset to half an hour before sunrise, and any time visibility is limited or you cannot see a person 300 metres ahead.",
        context:
          "During the hours when lights are required, using parking lights or daytime running lights instead of headlights is illegal.",
        trap:
          "Daytime running lights usually leave the tail lights dark.",
        excerptKey: "headlights-when",
        sourceLabel: "Nova Scotia Driver's Handbook - Lighting equipment",
        sourceUrl: ch4(112),
      },
      {
        id: "ns_s6_11",
        topic: "signs",
        question:
          "You see a triangular red and white sign facing you at an intersection. What must you do?",
        choices: [
          "Stop, then proceed",
          "Reduce speed, give right of way, and stop if necessary",
          "Continue at the posted limit",
          "Signal and merge",
        ],
        correctIndex: 1,
        explanation:
          "A yield sign requires you to reduce speed as you approach and give the right of way, stopping if necessary, to traffic in or closely approaching the intersection.",
        context:
          "Section 134 of the Motor Vehicle Act puts the same duty in statutory form: enter the intersection with caution and yield to traffic constituting an immediate hazard.",
        trap:
          "A yield does not always mean a stop, and it always means being slow enough that stopping is still possible.",
        excerptKey: "sign-yield",
        sourceLabel: "Nova Scotia Driver's Handbook - Yield sign",
        sourceUrl: ch3(80),
      },
      {
        id: "ns_s6_12",
        topic: "rules",
        question: "What following distance does the handbook teach for ordinary conditions?",
        choices: [
          "One second",
          "Three seconds",
          "Four seconds",
          "Two seconds",
        ],
        correctIndex: 3,
        explanation:
          "Nova Scotia teaches the two-second rule, measured by counting from a landmark as the vehicle ahead passes it.",
        context:
          "Increase it on slippery roads, in reduced visibility, behind a large commercial vehicle, when carrying a heavy load, or behind a motorcycle. In rain the figure becomes four or more seconds.",
        trap:
          "Two seconds is a dry-road baseline, not a universal answer.",
        excerptKey: "two-second-rule",
        sourceLabel: "Nova Scotia Driver's Handbook - Two-second rule",
        sourceUrl: ch2(49),
      },
      {
        id: "ns_s6_13",
        topic: "impairment",
        question: "What blood alcohol level must a Class 5N newly licensed driver maintain?",
        choices: [
          "Zero",
          "Under .05",
          "Under .08",
          "Under .04",
        ],
        correctIndex: 0,
        explanation:
          "A newly licensed driver's blood alcohol level must remain at zero, the same as a learner's and the same as a restricted individual's.",
        context:
          "Being convicted of having care and control of a motor vehicle with a blood alcohol content exceeding zero brings six demerit points and a six-month loss of driving privileges.",
        trap:
          "Zero follows a driver through all three GDL stages, which is up to four years past the road test.",
        excerptKey: "gdl-newly-conditions",
        sourceLabel: "Registry of Motor Vehicles - Graduated Drivers Licence System",
        sourceUrl: GDL,
      },
      {
        id: "ns_s6_14",
        topic: "signs",
        question:
          "A white X-shaped sign with a red border stands beside the tracks. What is it?",
        choices: [
          "An advance warning of a crossing",
          "A do not enter sign",
          "A level crossing closed sign",
          "A railway crossing crossbuck",
        ],
        correctIndex: 3,
        explanation:
          "The crossbuck marks the railway crossing itself. A yellow and black warning sign is usually posted in advance of it.",
        context:
          "A smaller sign below the crossbuck indicates whether there is more than one set of tracks.",
        trap:
          "Some vehicles must stop at every crossing - school buses, vehicles carrying passengers for hire, and vehicles transporting explosives or hazardous materials. Be ready to stop behind them.",
        excerptKey: "sign-crossbuck",
        sourceLabel: "Nova Scotia Driver's Handbook - Railway crossings",
        sourceUrl: ch3(81),
      },
      {
        id: "ns_s6_15",
        topic: "sharing",
        question:
          "A school bus ahead has its red lights flashing and its stop arm out. You are approaching from the opposite direction on a divided boulevard. What must you do?",
        choices: [
          "Stop",
          "Continue, since the boulevard divides you",
          "Slow to 30 km/h and pass with care",
          "Stop only if children are visible",
        ],
        correctIndex: 0,
        explanation:
          "You must not pass a school bus with alternating flashing red lights at any time or place or from either direction, including a divided boulevard.",
        context:
          "Amber flashing lights are the warning that the bus is about to stop; passing is still permitted on the amber, with extra caution.",
        trap:
          "The divided boulevard is named in the handbook precisely because drivers assume it releases them.",
        excerptKey: "bus-no-pass",
        sourceLabel: "Nova Scotia Driver's Handbook - Drivers and school buses",
        sourceUrl: ch2(68),
      },
      {
        id: "ns_s6_16",
        topic: "speed",
        question:
          "Children are present in a school zone on a road posted at 60 km/h. What is the maximum?",
        choices: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
        correctIndex: 2,
        explanation:
          "Where the approaching speed limit is higher than 50 km/h, the school zone maximum is 50 km/h. The 30 applies where the approaching limit was 50.",
        context:
          "The rule applies whatever the time of day, since children may be on a playground after school hours or at the weekend.",
        trap:
          "Memorising a single school zone number gets one of the two branches wrong every time.",
        excerptKey: "amend-school-zone",
        sourceLabel: "Registry of Motor Vehicles - Amendments to the Driver's Handbook",
        sourceUrl: AMEND,
        commonlyMissed: true,
      },
      {
        id: "ns_s6_17",
        topic: "signals",
        question:
          "A red X is displayed above the lane you are travelling in. What must you do?",
        choices: [
          "Slow down and continue",
          "Continue if the lane ahead is clear",
          "Stop in the lane and wait for it to change",
          "Leave that lane - never drive under a red X",
        ],
        correctIndex: 3,
        explanation:
          "Never drive in a lane under a red X signal, regardless of any other signs or signals.",
        context:
          "Lane control signals are used where the direction of heaviest traffic changes through the day. A green signal over a lane permits driving in it, subject to every other sign and signal.",
        trap:
          "Stopping under the X is worse than leaving the lane. The lane may be carrying oncoming traffic.",
        excerptKey: "signal-lane-control",
        sourceLabel: "Nova Scotia Driver's Handbook - Lane control signals",
        sourceUrl: ch2(41),
      },
      {
        id: "ns_s6_18",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing at an unmarked crosswalk at an intersection with no signals. Who has the right of way?",
        choices: ["The pedestrian", "You do", "Whoever entered the intersection first", "Neither, in law"],
        correctIndex: 0,
        explanation:
          "At intersections without traffic signals, pedestrians have the right of way in marked crosswalks and in unmarked crosswalks formed by imaginary lines extending across the streets.",
        context:
          "Every intersection has a crosswalk, and drivers must yield to pedestrians at all intersections whether the crossing is painted or not.",
        trap:
          "Failing to yield to a pedestrian is a four-point offence under the demerit table.",
        excerptKey: "ped-no-signals",
        sourceLabel: "Nova Scotia Driver's Handbook - Right of way",
        sourceUrl: ch2(43),
      },
      {
        id: "ns_s6_19",
        topic: "signs",
        question:
          "A green rectangular sign with white lettering is what kind of sign?",
        choices: [
          "Regulatory",
          "Warning",
          "Work zone",
          "Guidance",
        ],
        correctIndex: 3,
        explanation:
          "Guidance signs are rectangular, usually green with white letters, and they provide information and directions including route numbers and distances.",
        context:
          "Other colours guide you to facilities, services and attractions, but the green rectangle is the standard route and distance sign.",
        trap:
          "A green circle on a regulatory sign is a different thing entirely - it grants permission for the symbol inside it.",
        excerptKey: "sign-guidance",
        sourceLabel: "Nova Scotia Driver's Handbook - Guidance Signs",
        sourceUrl: ch3(83),
      },
      {
        id: "ns_s6_20",
        topic: "safety",
        question: "When is a child required to use a booster seat in Nova Scotia?",
        choices: [
          "Over 18 kg but under 145 cm tall, while under nine years of age unless they have reached 145 cm",
          "Over 10 kg and under 18 kg",
          "From birth to 10 kg",
          "Until the child turns 12",
        ],
        correctIndex: 0,
        explanation:
          "A child weighing more than 18 kg but under 145 cm tall must use a booster seat meeting Standard 213.2 while under nine years of age, unless they have already reached 145 cm.",
        context:
          "Below that, 10 kg to 18 kg is a forward-facing child seat with a tether strap, and birth to 10 kg is a rear-facing infant seat.",
        trap:
          "Height and age both appear in the rule, so a tall eight-year-old and a short ten-year-old land differently.",
        excerptKey: "child-booster",
        sourceLabel: "Nova Scotia Driver's Handbook - Seat belts, child restraints, and the law",
        sourceUrl: ch4(117),
      },
      {
        id: "ns_s6_21",
        topic: "rules",
        question:
          "You approach a stop sign with no painted stop line and no crosswalk marking. Where do you stop?",
        choices: [
          "Level with the sign",
          "With your front wheels on the edge of the cross street",
          "Wherever you can see both ways",
          "Far enough back to leave room for a pedestrian to cross safely",
        ],
        correctIndex: 3,
        explanation:
          "Where there is no painted crosswalk or stop line you must stop far enough back to allow sufficient room for a pedestrian to cross safely. That space is the unmarked crosswalk.",
        context:
          "Where markings exist, the stop is completed at the clearly marked stop line, or at the nearest crosswalk line.",
        trap:
          "Creeping forward to see is a second movement, not part of the stop. Complete the stop first.",
        excerptKey: "sign-stop-no-line",
        sourceLabel: "Nova Scotia Driver's Handbook - Stop sign",
        sourceUrl: ch3(80),
      },
      {
        id: "ns_s6_22",
        topic: "signs",
        question:
          "A yellow diamond shows a black arrow bending sharply with chevrons repeated along the roadside beyond it. What are the chevrons doing?",
        choices: [
          "Guiding drivers around a sharp curve",
          "Marking the edge of the pavement",
          "Indicating a passing lane",
          "Warning of a work zone",
        ],
        correctIndex: 0,
        explanation:
          "Chevron signs are posted in groups to guide drivers around sharp curves in the road.",
        context:
          "They work alongside the checkerboard sign, whose design warns you to slow down while the arrow shows the direction the roadway takes.",
        trap:
          "Chevrons appear one after another rather than once, so a driver who reads only the first has not yet been told how far the curve runs.",
        excerptKey: "sign-chevron",
        sourceLabel: "Nova Scotia Driver's Handbook - Lane arrows",
        sourceUrl: ch3(93),
      },
      {
        id: "ns_s6_23",
        topic: "parking",
        question: "Parking downhill without a curb - which way do the wheels go?",
        choices: [
          "Left",
          "Straight",
          "Either, with the parking brake set",
          "Right",
        ],
        correctIndex: 3,
        explanation:
          "Facing downhill, with a curb or without, the wheels turn to the right.",
        context:
          "Facing uphill with a curb they turn left; facing uphill without a curb they turn right. The principle is that a rolling vehicle should go into the curb or off the road, not into traffic.",
        trap:
          "The parking brake is required in every case and does not substitute for the wheel position.",
        excerptKey: "park-hill-wheels",
        sourceLabel: "Nova Scotia Driver's Handbook - Parking on a hill",
        sourceUrl: ch2(64),
      },
      {
        id: "ns_s6_24",
        topic: "impairment",
        question: "How long can a licence be suspended on a roadside device reading warn?",
        choices: [
          "7, 15 or 30 days depending on prior incidents in the past ten years",
          "24 hours",
          "Three months",
          "One year",
        ],
        correctIndex: 0,
        explanation:
          "A warn reading - between 50 mg per 100 ml and 80 mg per 100 ml of blood - may bring a 7, 15 or 30-day suspension, based on whether there were similar incidents in the past ten years.",
        context:
          "A fail reading means arrest and a breathalyzer at the station, and refusing either device is itself an offence.",
        trap:
          "The three-month Administrative Licence Suspension is a different thing, imposed on failing the breathalyzer or refusing a sample.",
        excerptKey: "als-7day",
        sourceLabel: "Nova Scotia Driver's Handbook - Administrative Licence Suspension Program",
        sourceUrl: ch6(156),
      },
      {
        id: "ns_s6_25",
        topic: "sharing",
        question:
          "When must you yield to a transit bus pulling away from a stop?",
        choices: [
          "Always",
          "Only in Halifax",
          "Only where a sign requires it",
          "Where the posted limit is 60 km/h or less, and it is safe to do so",
        ],
        correctIndex: 3,
        explanation:
          "You must yield the right of way to a transit bus signalling its intent to re-enter traffic where the posted speed limit is 60 km/h or less and it is safe to do so.",
        context:
          "The duty falls on drivers approaching from the rear, letting the bus into the closest lane. It does not apply to school buses, which have their own stronger rules.",
        trap:
          "This rule is not in chapter 2. It arrived in the front supplement and in Section 124A of the Motor Vehicle Act.",
        excerptKey: "amend-transit-bus",
        sourceLabel: "Registry of Motor Vehicles - Amendments to the Driver's Handbook",
        sourceUrl: AMEND,
      },
      {
        id: "ns_s6_26",
        topic: "signs",
        question:
          "A sign shows a black symbol on a yellow background of two lanes joining into one. What is it?",
        choices: [
          "A merge sign - prepare to merge with other vehicles",
          "A lane ends sign",
          "A divided highway begins",
          "A two-way left turn lane sign",
        ],
        correctIndex: 0,
        explanation:
          "The merge sign indicates an upcoming point where two separate lanes join into one, and it tells you to prepare to merge.",
        context:
          "Drivers approaching from both lanes are equally responsible for seeing that traffic merges smoothly and safely, and you should be ready to yield the right of way when necessary.",
        trap:
          "Neither driver has priority at a merge. Assuming the other lane must give way is how two vehicles arrive in the same space.",
        excerptKey: "sign-warning-merge",
        sourceLabel: "Nova Scotia Driver's Handbook - Warning Signs",
        sourceUrl: ch3(83),
      },
      {
        id: "ns_s6_27",
        topic: "rightOfWay",
        question:
          "You are stopped waiting to turn left across oncoming traffic. What should your front wheels be doing?",
        choices: [
          "Turned left, ready for the turn",
          "Turned slightly right",
          "It does not matter while you are stopped",
          "Pointing straight ahead",
        ],
        correctIndex: 3,
        explanation:
          "Keep the wheels straight. If you are struck from behind with the wheels turned left, your vehicle is pushed into oncoming traffic and causes a second collision.",
        context:
          "The handbook makes the same point twice, once under right of way tips and again under turning: do not turn the steering wheel to the left until you are sure you can complete the turn.",
        trap:
          "Pre-turning the wheels feels efficient and it converts a rear-end impact into a head-on one.",
        excerptKey: "left-turn-wheels-straight",
        sourceLabel: "Nova Scotia Driver's Handbook - Tips",
        sourceUrl: ch2(44),
      },
      {
        id: "ns_s6_28",
        topic: "safety",
        question:
          "When may studded tires be used on a Nova Scotia road?",
        choices: [
          "Between October 15 and April 30 only",
          "All year",
          "Between November 1 and March 31 only",
          "Only when snow is on the ground",
        ],
        correctIndex: 0,
        explanation:
          "Studded tires are legal in Nova Scotia between October 15 and April 30 only.",
        context:
          "For general winter traction, install snow or all-season tires on all four wheels. Winter tires wear excessively if left on through the summer.",
        trap:
          "The window is fixed by date rather than by weather, so a late spring snowfall does not extend it.",
        excerptKey: "studded-tires",
        sourceLabel: "Nova Scotia Driver's Handbook - Tires",
        sourceUrl: ch4(109),
      },
      {
        id: "ns_s6_29",
        topic: "emergencies",
        question:
          "A fire truck with lights and siren has just passed you. How close may you follow it?",
        choices: [
          "No closer than 60 metres",
          "No closer than 100 metres",
          "There is no minimum distance",
          "No closer than 150 metres",
        ],
        correctIndex: 3,
        explanation:
          "Never follow an emergency fire vehicle within 150 metres. The same 150 metres applies to driving or parking near an emergency vehicle stopped to investigate a collision or give assistance.",
        context:
          "The other rule in that section is absolute: never drive over a fire hose unless a police officer or firefighter instructs you to.",
        trap:
          "Sixty metres is the commercial vehicle following distance, and 150 is the emergency vehicle figure.",
        excerptKey: "emerg-150-follow",
        sourceLabel: "Nova Scotia Driver's Handbook - Emergency vehicles",
        sourceUrl: ch2(45),
      },
      {
        id: "ns_s6_30",
        topic: "signs",
        question:
          "A broken yellow line runs beside a solid yellow line down the centre of the road. When may you pass?",
        choices: [
          "Never - any solid yellow line prohibits passing",
          "When the solid line is on your side",
          "Only where a Passing Permitted sign is posted",
          "When the broken line is on your side of the centreline markings",
        ],
        correctIndex: 3,
        explanation:
          "On a two-lane road, passing with care is permitted if the broken yellow line is on your side of the centreline markings.",
        context:
          "A continuous double solid yellow forbids crossing to pass in either direction. A single solid yellow marking the centre permits passing in either direction when traffic, sight distance and conditions are ideal.",
        trap:
          "The line on your side is the one that governs you. The solid line facing the oncoming lane is their instruction, not yours.",
        excerptKey: "marking-broken-your-side",
        sourceLabel: "Nova Scotia Driver's Handbook - Rules about solid and broken lines",
        sourceUrl: ch3(84),
      },
    ],
  },
];
