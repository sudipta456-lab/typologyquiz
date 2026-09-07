import type { DrivingTestSet } from "../types";

// New Brunswick practice sets 4 to 6. Same sources and same rules as sets 1-3:
// the nine part PDFs of the New Brunswick Driver's Handbook on gnb.ca, the Motor
// Vehicle Act RSNB 1973 c M-17 on laws.gnb.ca, and the Province's Graduated
// drivers' licences and Written and road tests pages.
//
// Set 4 goes deliberately into the parts of the handbook a learner skips -
// registration, equipment, pedestrians, farm vehicles, the commercial page at
// the back - because the Rules of the Road exam draws on the whole book.
//
// Set 5 is built from the rules that actually catch people. Its sources are the
// two places where the 2022 handbook has fallen behind the Act (the school-zone
// speed in section 140.1, and the roadside suspension ladder in section
// 310.01(4) that arrived on 1 January 2025), the three compulsory signs on the
// Road Sign Recognition Exam, the downward-counting point system for newly
// licensed drivers, and the rules New Brunswick drivers on public forums report
// getting wrong: the ten-day change-of-address duty, finishing a turn in the
// nearest lane, whether a keep-right rule exists at all, and the horn duty when
// passing.
//
// Set 6 mirrors the real pair of exams with no scaffolding beyond the standard
// fields, and keeps the signs half loaded the way the Road Sign Recognition Exam
// does.

const DOCS = "https://www.gnb.ca/content/dam/GNB3/t/dt-ct/handbook-manuel/docs";
/** Printed handbook page number to the page inside that part's own PDF. */
const p1 = (p: number) => `${DOCS}/part-1-licensing-of-drivers.pdf#page=${p - 8}`;
const p2 = (p: number) => `${DOCS}/part-2-registration-of-vehicles.pdf#page=${p - 23}`;
const p3 = (p: number) => `${DOCS}/part-3-equipment.pdf#page=${p - 27}`;
const p4 = (p: number) =>
  `${DOCS}/part-4-traffic-on-the-highway-rules-of-the-road.pdf#page=${p - 32}`;
const p5 = (p: number) => `${DOCS}/part-5-safe-driving.pdf#page=${p - 53}`;
const p6 = (p: number) =>
  `${DOCS}/part-6-traffic-on-the-highway-sharing-the-road.pdf#page=${p - 76}`;
const p7 = (p: number) => `${DOCS}/part-7-traffic-signs.pdf#page=${p - 85}`;
const p9 = `${DOCS}/part-9%20information-for-commercial-vehicle-drivers.pdf#page=1`;
const mva = (s: string) => `https://laws.gnb.ca/en/showfulldoc/cs/M-17#se:${s}`;
const TESTS =
  "https://www.gnb.ca/en/topic/driving-transportation/driving-licensing/written-road-tests.html";

const HB = "New Brunswick Driver's Handbook";
const ACT = "Motor Vehicle Act";

export const newbrunswickSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "The Rules of the Road exam is written from the whole handbook, not just the chapter on driving. Registration, equipment, pedestrians, farm vehicles and the commercial page at the back all appear here.",
    questions: [
      {
        id: "nb_s4_01",
        topic: "signs",
        question: "What job do New Brunswick's guide signs do?",
        choices: [
          "Warn of hazards on the road ahead",
          "State the law about speed and parking",
          "Mark facilities such as fuel and food",
          "Route you along established roads and name the intersecting ones",
        ],
        correctIndex: 3,
        explanation:
          "Guide signs exist to keep you on your route and tell you what the roads you are crossing are, in the simplest and most direct way the sign designers can manage.",
        context:
          "The guide family includes the Trans-Canada highway marker and the arterial, collector and local highway markers, plus hospital and airport signs. Information signs are a separate square family that show where facilities are: museum, accommodation, gasoline, food, picnic, tourist information, campground.",
        trap:
          "Guide signs are not regulatory. Following one does not excuse ignoring a limit or a prohibition on the road it sends you down.",
        excerptKey: "guide-signs",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.6 Guide Signs`,
        sourceUrl: p7(95),
      },
      {
        id: "nb_s4_02",
        topic: "licensing",
        question:
          "What vision standard must a Class 7 applicant meet to be issued a graduated licence?",
        choices: ["20/20 best eye", "20/30 best eye", "20/40 best eye", "20/50 best eye"],
        correctIndex: 2,
        explanation:
          "20/40 in the best eye. That is the standard for Class 7, and also for Classes 5, 6, 8 and 9.",
        context:
          "The commercial classes are stricter: Classes 1 to 4 need 20/30 in the best eye and 20/50 in the weakest, and applicants must meet medical standards before the written test. If you need correction to reach the standard, no further testing happens until you have it, and the licence is then endorsed to say it is valid only while you are wearing it.",
        trap:
          "20/30 is the commercial figure, not the learner's. A Class 7 applicant is measured against 20/40.",
        excerptKey: "gdl-entry-requirements",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, 1.1 Types of Licences`,
        sourceUrl: p1(9),
      },
      {
        id: "nb_s4_03",
        topic: "rules",
        question: "What does New Brunswick say about coasting downhill in neutral?",
        choices: [
          "It is prohibited",
          "It is permitted in vehicles with automatic transmissions",
          "It is permitted below 50 km/h",
          "It is discouraged but not an offence",
        ],
        correctIndex: 0,
        explanation:
          "Coasting a vehicle with the transmission in neutral is prohibited outright. Out of gear you have no engine braking and less control just when a hill is giving you more speed.",
        context:
          "It sits among the miscellaneous traffic provisions with several other flat prohibitions: never carry more passengers than can safely be carried, never let passengers sit where they obstruct the driver's view, and never deposit glass, nails, wire, cans, scrap metal, rubbish or waste on a highway.",
        trap:
          "The transmission type makes no difference. The rule is about the transmission being in neutral, not about what kind it is.",
        excerptKey: "coasting",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.22 Miscellaneous traffic provisions`,
        sourceUrl: p4(50),
      },
      {
        id: "nb_s4_04",
        topic: "safety",
        question:
          "How far must a New Brunswick vehicle's horn be audible?",
        choices: ["30 metres", "60 metres", "100 metres", "150 metres"],
        correctIndex: 1,
        explanation:
          "Not less than 60 metres, and it must not be unreasonably loud or harsh. A horn that cannot be heard at that range is not a legal horn.",
        context:
          "Sixty metres recurs through the equipment section: the rear-view mirror must give a view of at least 60 metres behind, and low beams are required when you are following within 60 metres of another vehicle. Brake lights and turn signals need to be plainly visible from 30 metres, and the licence plate light must make the plate legible from 15 metres.",
        trap:
          "Only authorised emergency vehicles may fit a siren, whistle or bell. Anything of that kind on a private vehicle is unlawful, however good the horn is.",
        excerptKey: "horn-60-metres",
        sourceLabel: `${HB} - Part 3: Equipment, 3.3 Horn`,
        sourceUrl: p3(30),
      },
      {
        id: "nb_s4_05",
        topic: "sharing",
        question:
          "You meet a horse and rider on a rural New Brunswick road. What does the handbook tell you to do?",
        choices: [
          "Sound your horn to alert the rider",
          "Pass quickly to reduce the time alongside",
          "Be alert, slow down and give plenty of room until you have safely passed",
          "Wait behind until the rider leaves the roadway",
        ],
        correctIndex: 2,
        explanation:
          "Slow down, leave room, and stay patient until you are past. The handbook's reason is simple: a horse is sometimes unpredictable.",
        context:
          "Riders and drivers of horse-drawn vehicles may use streets and roadways unless signs restrict them. They are expected to travel with traffic, as far right as possible, obey the signs and signals that apply and use hand signals when crossing. Riding on the sidewalk, racing the animal and leaving a horse unattended are all out.",
        trap:
          "The horn is the wrong instinct here for the same reason it is wrong near a white cane: it startles rather than informs.",
        excerptKey: "horseback",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.25 Horseback riding`,
        sourceUrl: p4(53),
      },
      {
        id: "nb_s4_06",
        topic: "signs",
        question:
          "A yellow diamond shows a bridge over the road with a figure such as 4.1 m on it. What is the figure?",
        choices: [
          "The overhead clearance",
          "The width of the road under the bridge",
          "The weight limit of the structure",
          "The distance to the underpass",
        ],
        correctIndex: 0,
        explanation:
          "It is the underpass ahead sign, and the number is the overhead clearance. Anything taller than the figure will not fit.",
        context:
          "Height limits matter more in New Brunswick than most learners expect, because the province's own dimension rules allow a vehicle up to 415 centimetres tall without a special permit. Weight limits are a separate regulatory sign, given in tonnes on white, for the highway or bridge it governs.",
        trap:
          "Clearance is a height, weight is in tonnes on a white sign, and the two are not interchangeable. A vehicle can be light and still too tall.",
        excerptKey: "underpass-sign",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(91),
      },
      {
        id: "nb_s4_07",
        topic: "parking",
        question:
          "Where must a disabled parking placard be displayed while the vehicle is parked in a designated space?",
        choices: [
          "On the dashboard, face up",
          "Hung on the rear-view mirror",
          "In the rear window",
          "Anywhere visible from outside the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Hung on the rear-view mirror. The handbook adds the other half of the instruction that people forget: remove it before you drive off.",
        context:
          "The person the placard was issued to has to be getting into or out of the vehicle at that stop, or the space may not be used at all. Placards are issued only to the designated person and may never be loaned to anyone for any reason, and a permit is issued with the placard which the holder must carry. Parking in a designated space without displaying a valid placard is a charge under the Act with a fine and a loss of points.",
        trap:
          "Borrowing a relative's placard to park while they wait in the car at home is exactly what the rule forbids. The holder has to be getting in or out at that stop.",
        excerptKey: "disability-placard",
        sourceLabel: `${HB} - Part 2: Registration of vehicles, 2.11 Persons with disabilities`,
        sourceUrl: p2(26),
      },
      {
        id: "nb_s4_08",
        topic: "emergencies",
        question:
          "Your vehicle is disabled on a highway at night. Where does a portable reflector unit go?",
        choices: [
          "Roughly 30 metres to the rear, at or near the edge of the roadway",
          "On the roof of the vehicle",
          "Roughly 100 metres to the rear",
          "Immediately behind the rear bumper",
        ],
        correctIndex: 0,
        explanation:
          "About 30 metres behind, at or near the roadway edge. That gives an approaching driver time to see and react before they reach the vehicle.",
        context:
          "Bigger vehicles carry a bigger obligation. The driver of a truck two metres or more wide, a passenger bus, a vehicle towing a house trailer or a truck tractor must set out three reflector units: one beside the vehicle, one 30 metres behind and one 30 metres ahead. A safety red triangle counts as a portable reflector unit.",
        trap:
          "Parking on the pavement of a rural highway is an offence in the first place unless the vehicle is too disabled to move. The reflector is for when you genuinely cannot move it.",
        excerptKey: "disabled-reflector-30m",
        sourceLabel: `${HB} - Part 9: Commercial vehicle drivers, Portable reflector units`,
        sourceUrl: p9,
      },
      {
        id: "nb_s4_09",
        topic: "rules",
        question:
          "You are following another vehicle at night, 40 metres behind it. Which headlights should you be using?",
        choices: [
          "High beams, so the driver ahead can see you clearly",
          "Fog lamps only",
          "Either, since you are not meeting the vehicle head on",
          "Low beams",
        ],
        correctIndex: 3,
        explanation:
          "Low beams. Once you are within 60 metres of the vehicle ahead, low beams are required except during the act of passing.",
        context:
          "The other dimming rule is by distance too: high beams must be dimmed within 150 metres of an approaching vehicle. High beams have to reach 100 metres ahead and low beams 30 metres. Fog lamps may only be used when your headlights are on low beam, and no vehicle may carry more than two of them.",
        trap:
          "Sixty metres is closer than most drivers picture - about four car lengths. If you can read the plate ahead comfortably, you are already inside it.",
        excerptKey: "high-beam-dim",
        sourceLabel: `${HB} - Part 3: Equipment, High beams`,
        sourceUrl: p3(29),
      },
      {
        id: "nb_s4_10",
        topic: "signs",
        question: "What shape does New Brunswick use for information signs?",
        choices: ["Diamond", "Pentagon", "Square", "Circle"],
        correctIndex: 2,
        explanation:
          "Square. Information signs indicate the location of facilities, and the square shape marks them out from the diamond warnings and the rectangular regulatory signs.",
        context:
          "The set is small and worth recognising quickly at highway speed: museum, accommodation, gasoline, food, picnic facilities, tourist information and campground. They are blue where they cover motorist services and tourism, which is the same blue used for attraction information.",
        trap:
          "A square is not a diamond. A diamond standing on its point is the warning family, and the two shapes are the same outline in different orientations.",
        excerptKey: "information-signs",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.7 Information Signs`,
        sourceUrl: p7(95),
      },
      {
        id: "nb_s4_11",
        topic: "rightOfWay",
        question:
          "You are about to drive across a sidewalk into a building's parking entrance. Who has the right of way?",
        choices: [
          "You, once you have signalled",
          "Whoever reaches the entrance first",
          "Pedestrians crossing the entrance or on the sidewalk you are crossing",
          "Neither - it is a courtesy question, not a legal one",
        ],
        correctIndex: 2,
        explanation:
          "Pedestrians. Before entering an alley, driveway or building, or crossing a sidewalk, you yield to anyone crossing the entrance or walking on the sidewalk at the point you are crossing it.",
        context:
          "The reverse manoeuvre carries the complementary rule. Coming out of an alley, driveway or building in a business or residential district you must stop before driving onto the sidewalk, then yield to everything already approaching on the highway before you join it.",
        trap:
          "Being turned across a sidewalk with your nose already over it does not transfer the right of way. The duty is to yield, and it does not expire because you committed early.",
        excerptKey: "row-sidewalk-pedestrians",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.11 Right of Way`,
        sourceUrl: p4(40),
      },
      {
        id: "nb_s4_12",
        topic: "impairment",
        question:
          "A driver blows in the warning range of 0.05 to 0.08 for the first time in five years. What may happen to the vehicle?",
        choices: [
          "Nothing - impoundment starts at 0.08",
          "It is impounded for seven days",
          "It is impounded for thirty days",
          "It may be impounded for three days",
        ],
        correctIndex: 3,
        explanation:
          "Three days, and it is discretionary on a first offence within five years. A second within five years is seven days, also discretionary, and a third or later is seven days mandatory.",
        context:
          "The Criminal Code threshold is 0.08, but New Brunswick's Motor Vehicle Act reaches below it. A driver at 0.08 or over, or who fails or refuses to give a breath sample, faces 30 days mandatory impoundment for a first suspension within ten years and 60 days for a subsequent one. A novice driver breaching zero tolerance gets a mandatory seven days.",
        trap:
          "Being under the Criminal Code limit is not being in the clear. The provincial penalties start at 0.05 and they bite.",
        excerptKey: "impound-warning-range",
        sourceLabel: `${HB} - Part 5: Safe driving, Vehicle Impoundment Program`,
        sourceUrl: p5(65),
      },
      {
        id: "nb_s4_13",
        topic: "signs",
        question:
          "A yellow diamond shows a single road splitting into two separated carriageways. What is it telling you?",
        choices: [
          "A divided highway is beginning, so keep to the right",
          "A divided highway is ending",
          "Two lanes merge ahead",
          "A passing lane begins",
        ],
        correctIndex: 0,
        explanation:
          "Divided highway begins, and the instruction attached to it is keep to the right - the carriageway you take is the right-hand one.",
        context:
          "Its opposite number, divided highway ends, is more dangerous, because it puts you back into two-way traffic where you have been used to one-way for some distance. Both are ordinary yellow warning diamonds, and both appear in the exam's sign set.",
        trap:
          "The two signs are near mirror images and are easy to answer backwards under time pressure. Read which end of the shape is single and which is split.",
        excerptKey: "divided-highway-begins",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(90),
      },
      {
        id: "nb_s4_14",
        topic: "licensing",
        question:
          "A visitor brings a private car into New Brunswick. How long may it be used for personal, non-business purposes before it has to be registered here?",
        choices: ["Thirty days", "Three months", "Six months", "One year"],
        correctIndex: 2,
        explanation:
          "Six months, counted from the date the vehicle was first operated in New Brunswick in that registration year.",
        context:
          "Becoming a resident changes the answer entirely: a new resident must register their vehicle with Service New Brunswick immediately. Out-of-province vehicles being registered here get 14 days to obtain a safety inspection, and inspections from Nova Scotia or Prince Edward Island are honoured until the date on the certificate.",
        trap:
          "The six months is for a visitor, not for someone who has moved. Moving here ends the concession the day you become a resident.",
        excerptKey: "non-resident-six-months",
        sourceLabel: `${HB} - Part 2: Registration of vehicles, 2.7 Non-Residents`,
        sourceUrl: p2(25),
      },
      {
        id: "nb_s4_15",
        topic: "safety",
        question: "What does New Brunswick require of a vehicle's rear-view mirror?",
        choices: [
          "It must show at least 30 metres of road behind",
          "It must show at least 60 metres of road behind",
          "It must show at least 100 metres of road behind",
          "There is no distance requirement, only that one is fitted",
        ],
        correctIndex: 1,
        explanation:
          "At least 60 metres to the rear. It is an equipment standard, so a cracked or badly aimed mirror that does not reach that far is a defect.",
        context:
          "Portable door or fender mirrors are actually illegal when you are not towing a trailer or another vehicle. Windshields and windows must be kept clear of signs, posters and other non-transparent material, and no ornament or decoration may be placed where it obstructs vision or distracts the driver.",
        trap:
          "The road test will not go ahead in a vehicle that is not in satisfactory mechanical condition, and mirrors are on the examiner's list.",
        excerptKey: "mirror-60-metres",
        sourceLabel: `${HB} - Part 3: Equipment, 3.4 Mirror`,
        sourceUrl: p3(30),
      },
      {
        id: "nb_s4_16",
        topic: "speed",
        question:
          "You are driving well below the limit and a queue has built up behind you. What does the Act say?",
        choices: [
          "Nothing - you may drive at any speed up to the limit",
          "Driving so slowly as to block the normal movement of traffic is an offence",
          "You must pull over only if there are more than five vehicles behind",
          "You must accelerate to the posted limit",
        ],
        correctIndex: 1,
        explanation:
          "Driving at such a slow speed as to block the normal and reasonable movement of traffic is an offence, unless the reduced speed is necessary for safe operation.",
        context:
          "The handbook adds what you are supposed to do about it. A driver who has to travel slowly on the open highway keeps to the right, and if traffic is being held up, pulls off the road occasionally to let it past. Delaying traffic is described as illegal and as something that greatly increases the chance of a collision.",
        trap:
          "Being under the limit is not automatically lawful. The offence is about the effect on the traffic behind you, not about the number on your speedometer.",
        excerptKey: "slow-drivers",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.3 Slow drivers`,
        sourceUrl: p4(35),
      },
      {
        id: "nb_s4_17",
        topic: "signals",
        question:
          "A pedestrian is facing a walk signal at a crossing you are turning through. What must you do?",
        choices: [
          "Yield the right of way to them",
          "Complete your turn first, then let them cross",
          "Sound your horn and proceed",
          "Wait only if they have already stepped off the kerb",
        ],
        correctIndex: 0,
        explanation:
          "A walk signal gives the pedestrian the crosswalk and obliges all other traffic to yield the right of way to them.",
        context:
          "Don't walk is the mirror image: pedestrians facing it must not start across. Pedestrians are subject to traffic signals in the same way drivers are, and disobeying a signal is an offence for them too, unless a peace officer directs otherwise.",
        trap:
          "A green light or green arrow for you does not cancel a walk signal for them. The pedestrian phase is the one governing the crosswalk.",
        excerptKey: "walk-light",
        sourceLabel: `${HB} - Part 4: Rules of the road, Walk light`,
        sourceUrl: p4(52),
      },
      {
        id: "nb_s4_18",
        topic: "sharing",
        question:
          "You are about to overtake a tractor-trailer. What rule of thumb does the handbook give you?",
        choices: [
          "Stay two car lengths back until the road ahead is clear",
          "If you cannot see the truck driver in their side mirror, they cannot see you",
          "Flash your lights before you begin the pass",
          "Pass on the right, which is the truck's better side",
        ],
        correctIndex: 1,
        explanation:
          "If the driver's face is not in the side mirror, you are invisible to them. It is the shortest test there is for whether you are in a truck's blind spot.",
        context:
          "Those blind spots are larger than most drivers imagine: immediately in front, on either side of the cab, and up to 60 metres behind. A tractor with a long hood may hide the first six metres of road ahead of its bumper, and even a cab-over can hide three. The truck driver's height helps them see over cars, not through them.",
        trap:
          "Sitting alongside a trailer to time your move is the worst place to be. The pass should be decided before you get there and completed without lingering.",
        excerptKey: "truck-mirror-rule",
        sourceLabel: `${HB} - Part 6: Sharing the road, A trucker's blind spots`,
        sourceUrl: p6(85),
      },
      {
        id: "nb_s4_19",
        topic: "signs",
        question:
          "A yellow diamond shows a car with wavy lines under it and the words SURFACE SUBJECT TO ICING. At what temperature does it warn you the surface may be slippery?",
        choices: [
          "Minus five degrees Celsius",
          "Minus ten degrees Celsius",
          "Any temperature below freezing point at night",
          "Zero degrees Celsius",
        ],
        correctIndex: 3,
        explanation:
          "Zero degrees Celsius. The sign is usually on a bridge or an elevated section, where the surface has cold air underneath as well as above it.",
        context:
          "The handbook makes the same point in the winter section: condensation on the pavement of bridges and overpasses freezes before the rest of the roadway, and ice patches are most likely in shaded areas, on bridges and on overpasses. Winter conditions demand constant attention at or near the freezing point, because that is when roads are most slippery.",
        trap:
          "Zero is the number, not minus something. A road that looks merely wet at zero on a bridge may already be ice.",
        excerptKey: "surface-icing",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(92),
      },
      {
        id: "nb_s4_20",
        topic: "rules",
        question:
          "You are following a school bus that stops at a railway crossing where no train is coming and no lights are flashing. What should you have expected?",
        choices: [
          "That the bus driver has broken down",
          "That the bus is letting a passenger off",
          "Nothing - buses stop only when lights are flashing",
          "That the bus must stop before proceeding through the crossing",
        ],
        correctIndex: 3,
        explanation:
          "School bus drivers must stop before going through a railway crossing unless something indicates otherwise. So must all buses, vehicles carrying passengers for hire, and anything carrying explosives or flammable liquids.",
        context:
          "The handbook tells other drivers to be prepared to stop if they are following one of those vehicle types. Those drivers are required to stop, listen and look in both directions before proceeding, which takes noticeably longer than a following driver expects.",
        trap:
          "This is one of the more common rear-end collisions at a level crossing. The bus stopping is normal; the car behind assuming it will not is the error.",
        excerptKey: "railway-buses-stop",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.12 Railway crossings`,
        sourceUrl: p4(42),
      },
      {
        id: "nb_s4_21",
        topic: "safety",
        question:
          "While driving in winter you start to yawn, feel dizzy and get a headache. What does the handbook tell you to do?",
        choices: [
          "Open a window and press on to your destination",
          "Turn off the motor, get out of the car and walk around",
          "Turn the heater up to stay alert",
          "Pull over and sleep it off",
        ],
        correctIndex: 1,
        explanation:
          "Stop the engine, get out and walk around, and open a window to let fresh air in. Those symptoms are the classic signs of carbon monoxide from a leaking exhaust.",
        context:
          "The handbook raises it in the section on preparing a car for winter, because a leaking muffler or exhaust system is most dangerous when you are stalled in traffic or a blizzard with the engine idling. It also says flatly: never start your car in a closed garage.",
        trap:
          "Turning the heater up moves more of the same air. Carbon monoxide has no smell, so feeling better after a window opens is not proof it has gone.",
        excerptKey: "crash-causes",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.5 Preparing your vehicle for winter driving`,
        sourceUrl: p5(57),
      },
      {
        id: "nb_s4_22",
        topic: "parking",
        question:
          "How far from the driveway entrance to a fire station must you keep a parked vehicle?",
        choices: [
          "5 metres",
          "10 metres",
          "15 metres",
          "25 metres",
        ],
        correctIndex: 1,
        explanation:
          "Ten metres from the driveway entrance. If you are parked on the opposite side of the street from a fire station, the distance is 25 metres from the entrance.",
        context:
          "Ten metres is the same figure as the approach to a flashing beacon, a stop sign or a traffic control signal at the side of a roadway, and the distance from a safety zone. Five metres covers a hydrant and a crosswalk at an intersection; fifteen covers the nearest rail of a railway crossing.",
        trap:
          "The 25-metre figure applies only when you are opposite the station, and it catches drivers who measure the near-side distance and think they are compliant.",
        excerptKey: "parking-fire-station",
        sourceLabel: `${HB} - Part 4: Rules of the road, Parking regulations`,
        sourceUrl: p4(48),
      },
      {
        id: "nb_s4_23",
        topic: "signs",
        question:
          "A yellow diamond shows a truck on a steep downgrade. What does the handbook suggest?",
        choices: [
          "Shift to a lower gear or slow down if the hill is very steep",
          "Use the parking brake to control speed",
          "Coast down in neutral to save fuel",
          "Move to the left lane for the descent",
        ],
        correctIndex: 0,
        explanation:
          "Lower gear or lower speed. Engine braking keeps the service brakes cool, which is what stops them fading on a long descent.",
        context:
          "Coasting in neutral is prohibited in New Brunswick, so it is not available even as a bad idea. The handbook's winter advice makes the same point in a different setting: downshift the gears to slow down for a stop rather than braking hard on a slippery surface.",
        trap:
          "Riding the brakes down a long hill is what boils the fluid and fades the pads. The sign is telling you to use the gearbox instead.",
        excerptKey: "steep-hill",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(91),
      },
      {
        id: "nb_s4_24",
        topic: "licensing",
        question:
          "Your vehicle fails its safety inspection. How long do you have to correct the defects and have it re-inspected?",
        choices: ["Seven days", "Fourteen days", "Thirty days", "Until the sticker expires"],
        correctIndex: 1,
        explanation:
          "Fourteen days from the date of rejection. The clock does not permit you to keep driving an unsafe vehicle in the meantime.",
        context:
          "The same 14 days applies to an out-of-province vehicle being registered here. Any police officer or government inspector may inspect a vehicle at any time and order a dangerous one off the road until it is fixed, and the handbook is clear that passing an inspection does not mean the vehicle will keep working safely.",
        trap:
          "The 14 days is time to repair, not a permit to drive. Operating the rejected vehicle during it is a separate matter.",
        excerptKey: "inspection-rejected-14-days",
        sourceLabel: `${HB} - Part 2: Registration of vehicles, 2.13 Motor Vehicle Safety Inspection`,
        sourceUrl: p2(27),
      },
      {
        id: "nb_s4_25",
        topic: "rightOfWay",
        question:
          "A climbing lane is ending ahead of you and you are in the right-hand lane. Who yields?",
        choices: [
          "The driver in the left lane",
          "Whoever is behind at the merge point",
          "The driver in the right-hand lane",
          "Neither - both merge alternately",
        ],
        correctIndex: 2,
        explanation:
          "At the end of a climbing lane or slow traffic lane, the driver in the right-hand lane yields to the driver in the left.",
        context:
          "That is the opposite of the zipper merge, which the handbook describes for a lane closed by construction or maintenance: there you use the ending lane right up to the barrier and then merge alternately with the traffic beside you. Which rule applies depends on which situation you are in.",
        trap:
          "Assuming the through lane always yields to the merging lane is the error. On a climbing lane the merging lane is the one that gives way.",
        excerptKey: "climbing-lane-yield",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.18 Limited access highway`,
        sourceUrl: p5(75),
        commonlyMissed: true,
      },
      {
        id: "nb_s4_26",
        topic: "emergencies",
        question:
          "At what level of property damage must a collision be reported to the police in New Brunswick?",
        choices: ["$1,000 or more", "$500 or more", "$2,000 or more", "Any amount"],
        correctIndex: 0,
        explanation:
          "A total apparent property damage of $1,000 or more, and any collision causing death or injury, must be reported immediately to the nearest RCMP office or a member of the local police.",
        context:
          "The same $1,000 threshold triggers the duty to prove financial responsibility, for which the accepted proof is a New Brunswick Liability Insurance Card. If the Registrar receives a collision report showing no financial responsibility, they must suspend the privileges of both the owner and the driver and cancel their registrations and licences. Failure to report a collision is itself five demerit points.",
        trap:
          "The threshold is what the damage appears to be, not what a repair quote later says. Guessing low at the scene is how the reporting duty gets missed.",
        excerptKey: "collision-report-1000",
        sourceLabel: `${HB} - Part 4: Rules of the road, Reporting collisions`,
        sourceUrl: p4(33),
      },
      {
        id: "nb_s4_27",
        topic: "impairment",
        question:
          "Who has to enrol in New Brunswick's ignition interlock programme?",
        choices: [
          "Only drivers with a second impaired driving conviction",
          "Only drivers who blow over 0.16",
          "All drivers convicted of impaired driving by alcohol, or of failing or refusing to comply with a demand",
          "Nobody - the programme is voluntary",
        ],
        correctIndex: 2,
        explanation:
          "Enrolment is mandatory for every driver convicted of driving while impaired by alcohol, and for anyone convicted of failing or refusing to comply with a Criminal Code demand.",
        context:
          "The device stops the vehicle starting or being driven when the driver has been drinking, and participants bear the cost themselves. A restricted licence is issued allowing them to drive only interlock-equipped vehicles. A separate voluntary version exists for drivers serving a 30-day short-term suspension or a three-month administrative licence suspension.",
        trap:
          "Refusing the breath test is not a way around it. A conviction for refusal carries the same penalties as a conviction for impaired driving.",
        excerptKey: "interlock-mandatory",
        sourceLabel: `${HB} - Part 5: Safe driving, Ignition Interlock Program`,
        sourceUrl: p5(66),
      },
      {
        id: "nb_s4_28",
        topic: "signs",
        question:
          "A sign shows a vertical bar with arrows either side of it. What is it telling you?",
        choices: [
          "The road divides ahead",
          "Two lanes merge ahead",
          "Keep to the right of the island",
          "There is an obstruction and you may pass on either side",
        ],
        correctIndex: 3,
        explanation:
          "It is the obstruction sign: something is in the roadway and you may pass to either side of it.",
        context:
          "It contrasts with the regulatory keep to the right of traffic islands or obstruction sign, which allows only one side. Hazard markers do the same job in yet another way, using downward-sloping lines to show the side on which you may safely pass.",
        trap:
          "Passing to either side is a permission specific to this sign. Where the keep-right sign is used instead, the left side is not available at all.",
        excerptKey: "obstruction-sign",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(90),
      },
      {
        id: "nb_s4_29",
        topic: "rules",
        question:
          "Between which dates may studded snow tires be used in New Brunswick?",
        choices: [
          "1 November to 31 March",
          "15 October to 30 April",
          "1 October to 15 May",
          "There is no restriction",
        ],
        correctIndex: 1,
        explanation:
          "From 15 October to 30 April each year, and the studs have to be of a type approved by the Registrar.",
        context:
          "The handbook is careful not to oversell them. Studs shorten stopping distance on ice but can lengthen it in extreme cold, and they may cause more of a skid in an emergency stop than plain rubber, depending on the surface. Tire chains carry the same warning. Snow tires are best fitted on all four wheels.",
        trap:
          "The window closes at the end of April, not the end of the snow. Running studs into May is an equipment offence whatever the weather has done.",
        excerptKey: "studded-tires",
        sourceLabel: `${HB} - Part 3: Equipment, 3.11 Studded tires`,
        sourceUrl: p3(32),
      },
      {
        id: "nb_s4_30",
        topic: "safety",
        question: "What does it mean to overdrive your headlights?",
        choices: [
          "To use high beams where low beams are required",
          "To fit headlights brighter than the law allows",
          "To leave the headlights on in daylight",
          "To drive too fast to stop within the distance your headlights reveal",
        ],
        correctIndex: 3,
        explanation:
          "Driving so fast that you could not stop inside the distance your headlights actually light up. If something appears at the edge of the beam, you reach it before the car can stop.",
        context:
          "It gets worse the moment you dip. The handbook warns that unless you cut your speed as you deflect the beams for an oncoming vehicle, you are driving into a blind area. Low beams show 30 metres and high beams 100 metres, so dipping for an oncoming car shortens your sight distance by about seventy metres in an instant.",
        trap:
          "Being within the posted limit is no answer. The speed that matters at night is the one your lights can support.",
        excerptKey: "overdrive-headlights",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.16 Driving at night`,
        sourceUrl: p5(74),
        commonlyMissed: true,
      },
      {
        id: "nb_s4_31",
        topic: "sharing",
        question:
          "A school bus ahead of you switches on alternating flashing amber lights. What is happening?",
        choices: [
          "It is about to stop to pick up children, roughly 150 metres ahead",
          "It has broken down",
          "Children are getting off right now",
          "It is turning off the road",
        ],
        correctIndex: 0,
        explanation:
          "Amber lights come on about 150 metres before the bus stops to pick children up. They are your warning that a red-light stop is coming.",
        context:
          "Red lights mean the bus is stopped and students are getting on or off, and then you stop at least 5 metres away and stay stopped until the red lights go out. The exception is a road divided by a median, where traffic meeting the bus from the other side does not stop. Failing to stop for school bus flashing lights costs six demerit points.",
        trap:
          "Amber is not permission to hurry past. It is notice that you will be stopping in about 150 metres, and accelerating into it is how drivers end up passing on red.",
        excerptKey: "bus-amber-150",
        sourceLabel: `${HB} - Part 6: Sharing the road, 6.6 Drivers and school buses`,
        sourceUrl: p6(81),
      },
      {
        id: "nb_s4_32",
        topic: "speed",
        question:
          "A limited-access highway is signed with both a minimum and a maximum speed. What does the handbook tell you?",
        choices: [
          "Drive within both, unless traffic or weather makes those limits unsafe",
          "Only the maximum is enforceable",
          "The minimum applies only to commercial vehicles",
          "Drive at the maximum whenever the road is clear",
        ],
        correctIndex: 0,
        explanation:
          "Drive within the minimum and the maximum, unless traffic or weather conditions make those limits unsafe. Both ends of the range are real.",
        context:
          "The rest of the limited-access rules run alongside it: plan your route before you use these roads, use the acceleration lane to get up to speed when merging, use deceleration lanes to slow before exiting, keep a safe following distance, never stop on the travelled portion of the roadway, and if you pass your exit, drive to the next one rather than backing up.",
        trap:
          "The exception cuts both ways. Weather can make the minimum unsafe just as it can make the maximum unsafe, and the handbook allows for both.",
        excerptKey: "never-stop-on-roadway",
        sourceLabel: `${HB} - Part 5: Safe driving, Entrance and exit ramps`,
        sourceUrl: p5(75),
      },
      {
        id: "nb_s4_33",
        topic: "licensing",
        question:
          "A parent signed the consent form for their 16-year-old's licence. Can they change their mind?",
        choices: [
          "No - consent is irrevocable once the licence is issued",
          "Yes, but only within thirty days",
          "Yes, at any time before the driver turns 18, by written application to the Registrar",
          "Yes, but only if the driver has been convicted of an offence",
        ],
        correctIndex: 2,
        explanation:
          "Written consent may be withdrawn at any time before the driver turns 18, by written application to the Registrar of Motor Vehicles, who may then cancel the licence.",
        context:
          "The consent has to be given in the first place for anyone under 18, on a form provided at the back of the handbook and properly witnessed - by a non-relative, in the case of a graduated licence. The form is one of the documents you bring to the SNB office when the licence is issued.",
        trap:
          "Turning 18 is what ends the parent's power, not passing the road test. A 17-year-old with a Level 2 licence is still within reach of it.",
        excerptKey: "consent-withdrawal",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, 1.4 Examination for learner's licence`,
        sourceUrl: p1(15),
      },
      {
        id: "nb_s4_34",
        topic: "signals",
        question: "What does a flashing amber traffic light mean?",
        choices: [
          "Stop, then proceed when clear",
          "The signal is out of service",
          "Pedestrians have priority here",
          "Slow down and be extra careful of intersecting traffic",
        ],
        correctIndex: 3,
        explanation:
          "Slow down and take extra care of the traffic crossing your path, whether or not you have the right of way. It is a caution, not a stop.",
        context:
          "Its partner, the flashing red, is a stop sign in every respect: a complete stop, then proceed only when the way is clear. Getting the pair the wrong way round is a common error, and the consequences are asymmetric - treating a flashing red as an amber puts you into cross traffic without stopping.",
        trap:
          "Having the right of way does not remove the duty to slow. The handbook says extra care applies whether you have it or not.",
        excerptKey: "amber-flasher",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.15 Traffic control signals`,
        sourceUrl: p4(43),
      },
      {
        id: "nb_s4_35",
        topic: "rules",
        question:
          "Roadworks have closed one of two lanes ahead. How does the handbook say to execute a zipper merge?",
        choices: [
          "Merge as soon as you see the sign, to keep the closed lane clear",
          "Use the ending lane all the way to the barrier, then merge with the traffic beside you",
          "Stay in the through lane and refuse to let others in",
          "Merge only if the closed lane is already stopped",
        ],
        correctIndex: 1,
        explanation:
          "You go as far as you can in the ending lane, right to the barrier, and merge there. Using both lanes to the point of closure keeps the queue moving.",
        context:
          "The handbook recommends it specifically for multi-lane highways and for lane closures caused by construction or highway maintenance. It is the opposite of the rule at the end of a climbing lane, where the right-hand lane yields to the left-hand lane at the merge point.",
        trap:
          "Merging early feels courteous and lengthens the queue. It is not what New Brunswick asks you to do at a construction closure.",
        excerptKey: "zipper-merge",
        sourceLabel: `${HB} - Part 5: Safe driving, Zipper Merge`,
        sourceUrl: p5(76),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Thirty-five questions on the New Brunswick rules that actually catch people: the places the 2022 handbook has fallen behind the Motor Vehicle Act, the three signs the sign exam will not let you miss, and the point system that counts downwards.",
    questions: [
      {
        id: "nb_s5_01",
        topic: "speed",
        question:
          "The Motor Vehicle Act was amended in 2023. What is the maximum speed in a school zone in a New Brunswick municipality during school hours?",
        choices: ["50 km/h", "40 km/h", "30 km/h", "20 km/h"],
        correctIndex: 2,
        explanation:
          "Thirty kilometres an hour in a municipality, between 7:30 a.m. and 4:00 p.m. on days a school in the area is in session. In a rural community, regional municipality or rural district the figure is 50 km/h.",
        context:
          "Section 140.1 of the Act was replaced by 2023, c.7. A municipality may set a higher figure than 30 by by-law, but not more than 20 km/h below the limit on the road before the zone, and the Minister may prescribe a figure for a provincial highway on the same basis. The floor is 30 km/h and nothing may go below it.",
        trap:
          "The handbook still prints 50 km/h in an urban district, on page 36 and again on page 87. That is the pre-2023 rule. Where the two disagree, the Act is the law and the cities have posted 30.",
        excerptKey: "mva-school-zone-30",
        sourceLabel: `${ACT} - Section 140.1(1)`,
        sourceUrl: mva("140.1"),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_02",
        topic: "licensing",
        question:
          "On the Road Sign Recognition Exam, which signs must you identify correctly no matter how well you do on the rest?",
        choices: [
          "Stop, yield and school zone",
          "Stop, yield and railway crossing",
          "Stop, school zone and no entry",
          "There are no compulsory signs - it is scored out of 20",
        ],
        correctIndex: 0,
        explanation:
          "Three signs are compulsory: stop, yield and school zone. On the other seventeen you are allowed no more than four errors.",
        context:
          "That is why those three are taught first in Part 7. The stop sign is the red octagon; the yield sign is the red-bordered triangle on white; the school zone sign is the fluorescent yellow pentagon. The exam is twenty signs and may be given in writing or orally, in English or French.",
        trap:
          "Scoring sixteen out of twenty is not enough if one of the sixteen misses is stop, yield or school zone. The three are pass or fail on their own.",
        excerptKey: "sign-test",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Road Sign Recognition Test`,
        sourceUrl: p1(16),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_03",
        topic: "impairment",
        question:
          "A New Brunswick driver's screening device reads Warn for the first time. How long is the roadside licence suspension?",
        choices: ["24 hours", "Seven days", "Fifteen days", "Thirty days"],
        correctIndex: 1,
        explanation:
          "Seven days for a first roadside revocation and suspension. A second within five years is fifteen days, and a third or later within five years is thirty.",
        context:
          "The ladder is in section 310.01(4) of the Act and it does not appear in the handbook at all. It is separate from the vehicle impoundment programme the handbook does describe. A driver who registers Warn has the right to request a second analysis on a different device as soon as circumstances permit, and where two are given, the lower result governs.",
        trap:
          "The 30-day figure on page 66 of the handbook is the vehicle IMPOUNDMENT for a driver at 0.08 or over, not the licence suspension for a Warn. Confusing the two is easy and the numbers happen to overlap.",
        excerptKey: "mva-roadside-ladder",
        sourceLabel: `${ACT} - Section 310.01(4)`,
        sourceUrl: mva("310.01"),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_04",
        topic: "licensing",
        question:
          "A driver licensed for eight months in New Brunswick is convicted of distracted driving, which is five demerit points. What happens?",
        choices: [
          "Nothing - five points is well short of the ten-point threshold",
          "They lose five of their ten points and are warned",
          "They are suspended, because a newly licensed driver starts with only four points",
          "They are given a written caution instead of points",
        ],
        correctIndex: 2,
        explanation:
          "A newly licensed driver is credited with four points, so a five-point conviction takes them past zero and the Registrar suspends them. A driver with a full ten-point balance would not be suspended by the same ticket.",
        context:
          "A newly licensed driver means anyone licensed for less than four years, of any age. The credit rises by two points a year to a maximum of ten. Everyone else is on the ordinary system, where a loss of all ten within two years brings an automatic suspension and points are returned two years after the conviction date. A demerit suspension runs three months.",
        trap:
          "New Brunswick's first four years count DOWNWARDS from a credit. Reading the system as points accumulating towards ten gets the answer exactly backwards.",
        excerptKey: "newly-licensed-suspension",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Newly licensed driver point suspension`,
        sourceUrl: p1(20),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_05",
        topic: "rules",
        question:
          "Does New Brunswick require you to keep right on a multi-lane road when you are not passing?",
        choices: [
          "No - any lane may be used at the posted limit",
          "Only where a keep right sign is posted",
          "Yes - the lane nearest the right-hand edge, except to pass or to prepare a left turn",
          "Only on divided highways",
        ],
        correctIndex: 2,
        explanation:
          "Yes. The handbook states it as a general rule: a vehicle must be driven in the lane nearest the right-hand edge of the highway, except when preparing to make a left turn or when passing another vehicle.",
        context:
          "It is not one rule but three that point the same way. Vehicles are operated on the right half of the highway; slow-moving traffic keeps close to the right-hand edge or curb; and on multi-lane streets you keep well to the right except to overtake or turn left. Driving so slowly as to block the normal movement of traffic is a separate offence.",
        trap:
          "New Brunswick drivers commonly believe there is no keep-right rule here and that the signs on Route 11 are the only source of one. The handbook's rule applies whether or not a sign repeats it.",
        excerptKey: "keep-right-lane",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.7 Laned traffic and pavement markings`,
        sourceUrl: p4(37),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_06",
        topic: "signs",
        question:
          "A sign shows a right-turn arrow crossed out with a red circle and slash, above a plate reading ON RED. What may you do?",
        choices: [
          "Wait for a green light before turning right",
          "Turn right on red after stopping, since the plate is advisory",
          "Turn right on red only between the hours shown on the tab",
          "Turn right on red only if no pedestrians are present",
        ],
        correctIndex: 0,
        explanation:
          "The no right turn on red sign removes the default permission entirely. You wait for the green light before making the turn.",
        context:
          "Section 119(3) of the Act is what makes that possible: the Minister and local authorities may erect devices prohibiting a right turn on red, and where they have, no driver may make one. Turn control signs may carry a tab showing that the restriction only applies during certain hours - but that tab is part of the prohibition, not a way round it.",
        trap:
          "Stopping first does not cure it. Right on red is a default, and a sign is exactly what the handbook says will take the default away.",
        excerptKey: "no-right-on-red-sign",
        sourceLabel: `${HB} - Part 7: Traffic Signs, Turn control signs`,
        sourceUrl: p7(90),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_07",
        topic: "safety",
        question:
          "Your phone is mounted on the dash and connected by Bluetooth. Under the Motor Vehicle Act, what may you do while driving?",
        choices: [
          "Type a short reply if the vehicle is stopped in traffic",
          "Scroll a playlist, since that is not a call",
          "Touch the device once to accept the call and once to end it, doing everything else by voice",
          "Nothing at all - any interaction is prohibited",
        ],
        correctIndex: 2,
        explanation:
          "The hands-free exception is narrow and counted. The device must be configured and used hands-free, everything must be done by voice command, and you may touch it exactly once to start or accept a call and once to end it.",
        context:
          "Section 265.02 prohibits operating a motor vehicle while using a hand-operated electronic device at all. The exceptions in 265.03 are the emergency call to police, fire or ambulance, an authorized emergency vehicle operator on duty, the hands-free use above, and use while the vehicle is safely parked at the curb or the outer edge of the shoulder.",
        trap:
          "Stopped in traffic is not parked. The exception is for a vehicle safely parked near the curb or shoulder, not for one waiting at a red light.",
        excerptKey: "mva-handheld-hands-free",
        sourceLabel: `${ACT} - Section 265.03(c)`,
        sourceUrl: mva("265.03"),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_08",
        topic: "licensing",
        question:
          "You have passed both written exams online. How soon can you go to an SNB office and be issued a Level 1 licence?",
        choices: [
          "Immediately",
          "The next business day",
          "After seven days",
          "After a minimum of four business days",
        ],
        correctIndex: 3,
        explanation:
          "A minimum of four business days after passing all the tests, then you attend any SNB office except Campobello for the vision test.",
        context:
          "Bring proof of identification, proof of residency, a completed Parental Consent Form if you are under 18, and proof of a motorcycle course if that is what you are licensing for. The written exams themselves have no waiting period for a retake - if you fail one, you buy a retest for that exam only and sit it whenever you are ready.",
        trap:
          "Passing the exams is not being licensed. Booking the vision test for the day after you pass online is the mistake, and the office will turn you away.",
        excerptKey: "web-four-business-days",
        sourceLabel: "Written and road tests for driver's licences (gnb.ca)",
        sourceUrl: TESTS,
        commonlyMissed: true,
      },
      {
        id: "nb_s5_09",
        topic: "rules",
        question:
          "Under New Brunswick's safe-driving rules, what should you do with the horn when passing another vehicle?",
        choices: [
          "Nothing - sounding the horn to pass is prohibited",
          "Sound it only if the other driver has not seen you",
          "Sound your horn for the driver you are passing",
          "Flash your headlights instead",
        ],
        correctIndex: 2,
        explanation:
          "The handbook's own list says it plainly: when passing, check for traffic ahead and behind, signal before changing lanes, and sound your horn for the driver you are passing.",
        context:
          "The duty on the other side of it is stated as law rather than advice. On hearing an audible signal, the driver being overtaken must move to the right in favour of the overtaking vehicle and must not increase speed until the pass is complete. The same duty is put on a cyclist being overtaken: on hearing the signal, give way to the right.",
        trap:
          "Nearly nobody performs this on a real New Brunswick road, which is exactly why it appears on the exam. The book and the road disagree, and the exam follows the book.",
        excerptKey: "sound-horn-passing",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.10 Some rules for safe driving`,
        sourceUrl: p5(68),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_10",
        topic: "licensing",
        question:
          "A Class 7 Level 2 driver is caught with alcohol in their blood. What does the handbook say follows?",
        choices: [
          "A fine and three demerit points",
          "A warning for a first offence",
          "Immediate promotion to Class 5 is delayed by six months",
          "A one-year suspension, then a return to the start of the graduated period with no credit for tests already passed",
        ],
        correctIndex: 3,
        explanation:
          "A breach of the zero-tolerance condition costs a one-year suspension and then sends the driver back to the beginning of the graduated period, with no credit for previously passed tests or driver training.",
        context:
          "Losing all your points has a similar shape: at least a three-month suspension followed by the same return to the beginning of the graduated period, again with no credit. The zero applies to alcohol and to any drug that could impair the ability to drive, and it holds for the whole graduated period whatever the driver's age.",
        trap:
          "Going back to the beginning means redoing both written exams and the road test. The suspension is the smaller half of the penalty.",
        excerptKey: "gdl-breach-restart",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, 1.1 Types of Licences`,
        sourceUrl: p1(9),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_11",
        topic: "sharing",
        question:
          "You are walking home on a rural road with no sidewalk. Which side should you be on?",
        choices: [
          "The right side, walking with traffic",
          "Either side, provided you wear something light",
          "The shoulder on whichever side is wider",
          "The left side, facing oncoming traffic",
        ],
        correctIndex: 3,
        explanation:
          "Pedestrians walk on the left, facing the traffic that may come towards them. Where a sidewalk is provided, a pedestrian must use it and not walk on the adjacent highway.",
        context:
          "Cyclists do the opposite, and the two rules are constantly confused. A cyclist rides with traffic, in the same lane, as close to the right as possible, because a bicycle is a vehicle and subject to the same rules of the road. After dark a pedestrian should carry a light or wear light-coloured clothing, and in snow some dark clothing is advisable so they do not disappear against it.",
        trap:
          "The advice about dark clothing in snow reverses the usual instinct. Against a white background it is dark clothing that shows.",
        excerptKey: "pedestrian-walk-left",
        sourceLabel: `${HB} - Part 4: Rules of the road, Walking on the highway`,
        sourceUrl: p4(52),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_12",
        topic: "signs",
        question:
          "A white sign shows a two-headed arrow curving into a centre lane, above a small car symbol. What is it marking?",
        choices: [
          "A passing lane",
          "A reversible lane that changes direction by time of day",
          "A bus lane",
          "A two-way left turn lane",
        ],
        correctIndex: 3,
        explanation:
          "It marks a two-way left turn lane, the shared centre lane that traffic from both directions uses to wait for a gap before turning left.",
        context:
          "The sign belongs to the lane designation family, which is regulatory: white, black symbols, and mounted over the lane it governs where it is above the road. The handbook is emphatic that this lane is not a passing lane, and that vehicles may be coming towards you in it from the other direction.",
        trap:
          "Two arrows do not mean two-way traffic through the lane. They mean both directions may use it to turn left, which is not the same as driving along it.",
        excerptKey: "lane-designation",
        sourceLabel: `${HB} - Part 7: Traffic Signs, Lane designation signs`,
        sourceUrl: p7(89),
      },
      {
        id: "nb_s5_13",
        topic: "rightOfWay",
        question:
          "You have a green light and the intersection ahead is blocked by traffic that cannot clear. What must you do?",
        choices: [
          "Enter anyway - the green gives you the right to be there",
          "Enter as far as the crosswalk and wait",
          "Wait behind the line until there is room on the far side for your whole vehicle",
          "Sound the horn and follow the vehicle ahead through",
        ],
        correctIndex: 2,
        explanation:
          "You may not enter an intersection or a marked crosswalk unless there is enough room on the far side for your vehicle to clear it completely. The one exception is when you are preparing to turn.",
        context:
          "The same instinct sits behind the railway rule: in heavy, slow city traffic you never start across the tracks unless there is room for the whole vehicle on the far side. A green light is a permission to proceed, not a promise that there is somewhere to proceed to.",
        trap:
          "Blocking the box is an offence in its own right, independent of the signal. Having a green does not answer the charge.",
        excerptKey: "dont-block-intersection",
        sourceLabel: `${HB} - Part 4: Rules of the road, Intersections and crosswalks`,
        sourceUrl: p4(51),
      },
      {
        id: "nb_s5_14",
        topic: "signs",
        question:
          "A white regulatory sign shows a number above the word TONNES. What is being restricted?",
        choices: [
          "The load a driver may carry without a permit",
          "The weight of vehicle permitted on the highway or bridge",
          "The gross weight of trailers only",
          "The axle weight of commercial vehicles",
        ],
        correctIndex: 1,
        explanation:
          "It is the weight limit for the vehicle permitted on that highway or bridge, expressed in tonnes. It is regulatory, so ignoring it is an offence under the Act.",
        context:
          "Height and length are governed separately. Without a special permit a vehicle may not exceed 260 centimetres in total outside width including load, 415 centimetres in height, 12.5 metres in length for a two or three axle vehicle, or 23 metres for a coupled combination limited to two trailers behind a truck-tractor.",
        trap:
          "Tonnes on a white sign is a legal limit; a clearance in metres on a yellow diamond is a warning about height. They are different families of sign entirely.",
        excerptKey: "weight-limit-sign",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.3 Regulatory Signs`,
        sourceUrl: p7(88),
      },
      {
        id: "nb_s5_15",
        topic: "safety",
        question:
          "Your vehicle has a screen in the dashboard showing a film for the back-seat passengers. What does the Act say?",
        choices: [
          "It is permitted if the driver is not watching it",
          "No person shall operate a vehicle if a display screen in it is visible to the driver",
          "It is permitted below 50 km/h",
          "It is permitted if it can be switched off by a passenger",
        ],
        correctIndex: 1,
        explanation:
          "The prohibition is about visibility, not attention. If a display screen in the vehicle is visible to the driver, the vehicle may not be operated.",
        context:
          "The handbook says the same in prose: television-style display screens, monitors, DVD players and computer screens are not permitted within the visual range of the driver, unless they are part of a GPS unit or give information about the vehicle's own systems. The Act also doubles the minimum fine for this offence and for using a hand-operated device.",
        trap:
          "Whether you were actually looking is beside the point. The test is whether the screen is visible to you.",
        excerptKey: "mva-display-screen",
        sourceLabel: `${ACT} - Section 265.04(1)`,
        sourceUrl: mva("265.04"),
      },
      {
        id: "nb_s5_16",
        topic: "licensing",
        question:
          "How long must a New Brunswick driver spend in the graduated programme, and how much of it in Level 2?",
        choices: [
          "24 months in total, at least 12 of them in Level 2",
          "12 months in total, at least six of them in Level 2",
          "24 months in total, with no minimum for Level 2",
          "18 months in total, at least 12 of them in Level 2",
        ],
        correctIndex: 0,
        explanation:
          "Twenty-four months without interruption, at least twelve of which must be spent in stage two. Entering Level 2 early through driver training does not shorten the total; it just lengthens the time you spend in Level 2.",
        context:
          "The exit is administrative rather than a test. No road test is required to obtain the Class 5 licence, but it is your own responsibility to apply for it once the graduated period is complete, and failing to apply can bring GDL-related sanctions that affect your driving privileges.",
        trap:
          "Driver training buys you four months of earlier solo driving, not four months off the programme. The 24 months does not move.",
        excerptKey: "mva-gdl-24-months",
        sourceLabel: `${ACT} - Section 84(8)(b)`,
        sourceUrl: mva("84"),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_17",
        topic: "rules",
        question:
          "You are pulling out of a parking space at the kerb. What does the law require?",
        choices: [
          "Nothing, provided you move slowly",
          "A signal only if another vehicle is in sight",
          "A signal, plus checking oncoming traffic, your mirrors and your blind spot",
          "A signal held for 30 metres before you move",
        ],
        correctIndex: 2,
        explanation:
          "Setting a vehicle in motion from a parked position is one of the manoeuvres the law requires you to signal, and the handbook adds the checks: oncoming traffic, mirrors and blind spot, and pull out only when the way is clear behind and in front.",
        context:
          "The full list of signalled manoeuvres is longer than most drivers think: stopping or decreasing speed, turning left or right, changing lanes, leaving the roadway, and moving off from a parked position. The Act separately forbids starting a stopped, standing or parked vehicle until the movement can be made with reasonable safety.",
        trap:
          "The 30-metre rule is for turns. Moving off from a kerb still needs a signal, but the distance requirement is not what makes it lawful - the safety check is.",
        excerptKey: "leaving-parked-position",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.10 Some rules for safe driving`,
        sourceUrl: p5(67),
      },
      {
        id: "nb_s5_18",
        topic: "signs",
        question:
          "A yellow diamond shows a crossroads with the side roads offset from each other. What is it warning about?",
        choices: [
          "A staggered junction where you must stop",
          "A concealed or unusual intersection ahead, with roads from the right and/or left",
          "A road that ends ahead",
          "A private road entrance",
        ],
        correctIndex: 1,
        explanation:
          "Concealed or unusual intersection ahead. The symbol tells you the geometry is not the standard crossroads and that side roads are joining from one or both sides.",
        context:
          "It sits with the other intersection warnings. The T-intersection sign warns that the road ends and turns sharply right and left. The checkerboard tells you the road ends but you may proceed left or right. Traffic entering from right warns of vehicles joining, and added lane tells you a new lane is provided so no merging is required.",
        trap:
          "A warning sign never gives you the right of way at the junction it describes. The rules about who yields still apply when you arrive.",
        excerptKey: "concealed-intersection",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(91),
      },
      {
        id: "nb_s5_19",
        topic: "emergencies",
        question:
          "A tow truck is stopped on the shoulder with amber lights flashing. Does the move-over rule apply?",
        choices: [
          "Yes - a tow truck is a service vehicle and the rule covers it",
          "No - it applies only to police, fire and ambulance",
          "Only if a person is standing outside the vehicle",
          "Only on a divided highway",
        ],
        correctIndex: 0,
        explanation:
          "Yes. Section 168.1 covers service vehicles as well as emergency vehicles, and a service vehicle expressly includes a tow truck.",
        context:
          "The definition also takes in a private or public utility corporation vehicle, and a road safety or maintenance vehicle under contract with the Province. The obligation is the same for all of them: halve the posted maximum, proceed with caution, and where there are two or more lanes on your side, move into another lane if it can be done safely.",
        trap:
          "The flashing light colour is different - amber rather than red - and that leads drivers to treat a stopped tow truck as ordinary roadside traffic. The duty is identical.",
        excerptKey: "service-vehicle-definition",
        sourceLabel: `${HB} - Part 4: Rules of the road, Emergency vehicles`,
        sourceUrl: p4(34),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_20",
        topic: "safety",
        question:
          "How many demerit points does a distracted driving conviction carry in New Brunswick?",
        choices: ["Two", "Three", "Five", "Six"],
        correctIndex: 2,
        explanation:
          "Five points, which puts it level with driving without due care and with speeding more than 25 km/h over the limit.",
        context:
          "The handbook's list of examples is worth learning as a ladder: ten points for any Criminal Code offence involving a motor vehicle, six for failing to stop for school bus flashing lights, five for failing to report a collision, driving without due care, speeding more than 25 over and distracted driving, three for speeding 25 or less over, and two for illegal parking, an equipment offence, or a driver not wearing a seat belt.",
        trap:
          "Five points is more than a newly licensed driver's entire opening credit of four. In the first year, one phone ticket is a suspension.",
        excerptKey: "distracted-devices",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Some examples of point loss offences`,
        sourceUrl: p1(22),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_21",
        topic: "sharing",
        question:
          "A car sounds its horn behind a cyclist to indicate it is overtaking. What does the Act require of the cyclist?",
        choices: [
          "Nothing - the duty is entirely on the driver",
          "To stop and let the vehicle past",
          "To give way to the right in favour of the vehicle",
          "To move to the centre of the lane to make the pass safer",
        ],
        correctIndex: 2,
        explanation:
          "On hearing the audible signal, the rider gives way to the right in favour of the overtaking vehicle. It is the same duty the Act puts on any overtaken driver.",
        context:
          "The driver's duties do not go away. Section 149 requires the driver to sound an audible signal when reasonably necessary for safe operation, to signal a left turn before starting the pass, to pass to the left at not less than one metre, not to return to the right until safely clear, and not to pass on the left when the cyclist is turning or signalling left.",
        trap:
          "The one-metre rule is famous and this half of section 149 is not. Both sit in the same section and the exam can ask about either.",
        excerptKey: "mva-bicycle-give-way",
        sourceLabel: `${ACT} - Section 149(4)`,
        sourceUrl: mva("149"),
      },
      {
        id: "nb_s5_22",
        topic: "signs",
        question:
          "A white sign shows an arrow curving around a black bar, with a smaller sign beneath reading 60 km/h AHEAD. What is it doing?",
        choices: [
          "Setting a 60 km/h limit from this point",
          "Giving advance warning of a lower maximum speed zone ahead",
          "Advising 60 km/h for the curve ahead",
          "Setting a minimum speed of 60 km/h",
        ],
        correctIndex: 1,
        explanation:
          "It is advance warning that a lower maximum speed zone is coming, so you can shed speed before the new limit starts rather than at it.",
        context:
          "The limit itself is a separate regulatory sign giving the maximum speed allowed under ideal conditions. Advisory speeds are a third thing again: they sit on yellow warning signs under a sharp curve or a railway advance warning, and describe the maximum advised speed for that particular hazard.",
        trap:
          "Advance warning is not the limit. Braking hard at the sign that actually sets the new limit is what the advance sign exists to prevent, but the enforcement starts at the second sign.",
        excerptKey: "advance-speed-sign",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.3 Regulatory Signs`,
        sourceUrl: p7(88),
      },
      {
        id: "nb_s5_23",
        topic: "rightOfWay",
        question:
          "You have the right of way at an intersection and another driver takes it anyway. What does the handbook say about your position?",
        choices: [
          "You are not responsible for any collision that follows",
          "You may proceed regardless, since the other driver is at fault",
          "You must report the incident within ten days",
          "Believing you should have the right of way does not necessarily relieve you of responsibility for a collision",
        ],
        correctIndex: 3,
        explanation:
          "The handbook says it twice. Believing you should be granted the right of way does not necessarily relieve you of responsibility for a collision, and you must not assume you will be given it, because the other person may not think they should grant it.",
        context:
          "That principle is the reason the right-of-way rules are written as duties to yield rather than as entitlements to proceed. The safe-driving list opens with it, ahead of every specific rule about lanes, passing and pedestrians.",
        trap:
          "Being right is not the same as being safe, and in New Brunswick it is not even a complete defence. Insisting on a right of way you were entitled to can still leave you carrying part of the blame.",
        excerptKey: "assume-no-row",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.10 Some rules for safe driving`,
        sourceUrl: p5(67),
      },
      {
        id: "nb_s5_24",
        topic: "speed",
        question:
          "A driver is caught more than 80 km/h over the limit. What does the Act do to the vehicle?",
        choices: [
          "Nothing beyond the fine and points",
          "It is impounded for seven days",
          "It is impounded for 30 days",
          "It is forfeited",
        ],
        correctIndex: 2,
        explanation:
          "Thirty days from the time it was detained. More than 50 but not more than 80 over is a seven-day impoundment, and more than 80 over is thirty days.",
        context:
          "The offence bands under section 140(1.1) are 25 km/h or less over, more than 25 but not more than 50, more than 50 but not more than 80, and more than 80. The top band also carries a minimum fine of double the amount specified in the Provincial Offences Procedure Act for that category of offence.",
        trap:
          "The impoundment is separate from the licence suspension and from the fine. All three can follow the same stop.",
        excerptKey: "mva-extreme-speed-impound",
        sourceLabel: `${ACT} - Section 140(1.4)`,
        sourceUrl: mva("140"),
      },
      {
        id: "nb_s5_25",
        topic: "signs",
        question:
          "A yellow diamond shows a school bus with a red light above it. What does the sign tell you?",
        choices: [
          "A school zone begins here",
          "School buses turn here",
          "A school crosswalk is ahead",
          "A school bus stop is ahead - stop for the bus when its lights are flashing",
        ],
        correctIndex: 3,
        explanation:
          "School bus stop ahead. It warns you that buses stop on this stretch and reminds you to stop when the flashing lights are on.",
        context:
          "Three school-related signs get confused. This yellow diamond warns of a bus stop. The fluorescent yellow pentagon marks the school zone itself and carries the speed limit. The fluorescent yellow diamond with figures warns of a school crosswalk ahead. Only the pentagon is on the sign exam's compulsory list.",
        trap:
          "This sign does not set a speed limit. It warns of a stopping bus, and the 5-metre stop applies when the red lights come on, not when you pass the sign.",
        excerptKey: "school-bus-stop-ahead-sign",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(92),
      },
      {
        id: "nb_s5_26",
        topic: "licensing",
        question:
          "You change your surname after marrying. How long do you have to tell the Motor Vehicle Branch?",
        choices: ["Ten days", "Thirty days", "Ninety days", "Until your licence renewal"],
        correctIndex: 0,
        explanation:
          "Ten days, exactly as for a change of address. Both are legal duties under the handbook's licensing section.",
        context:
          "New Brunswick learners report this as one of the questions they had skimmed past. The neighbouring facts are the same sort of thing: a licence expires on the holder's birthday in the year of expiry, tracking that date is your responsibility, and at renewal you must declare any change in physical or mental condition that might affect your driving.",
        trap:
          "Thirty days is the figure most people guess, and it is the figure in several other provinces. New Brunswick's is ten for both name and address.",
        excerptKey: "change-of-name",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Change of Name`,
        sourceUrl: p1(19),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_27",
        topic: "rules",
        question:
          "You want to pass on a two-lane road but the crest of a hill is ahead. How much clear view must you have?",
        choices: [
          "At least 100 metres",
          "At least 150 metres",
          "At least 200 metres",
          "Enough to complete the pass, judged by the driver",
        ],
        correctIndex: 1,
        explanation:
          "It is illegal to pass or drive left of centre on a curve or approaching a crest where your view along the highway is obstructed within 150 metres.",
        context:
          "The prohibition works alongside the pavement markings, not instead of them: passing is also illegal where the markings forbid it. A separate rule bans driving to the left of the roadway within 30 metres of an intersection or railway grade crossing, and within 30 metres of a bridge, viaduct or tunnel where the view is obstructed.",
        trap:
          "A broken yellow line does not answer this. Markings say where passing is normally allowed; the 150-metre sight rule applies on top of them.",
        excerptKey: "pass-150-view",
        sourceLabel: `${HB} - Part 4: Rules of the road, Caution`,
        sourceUrl: p4(39),
      },
      {
        id: "nb_s5_28",
        topic: "safety",
        question:
          "The handbook says the two-second interval applies to favourable driving conditions. What does it say about unfavourable ones?",
        choices: [
          "Keep the same count and reduce speed",
          "Lower your speed and lengthen the count",
          "Double the count and keep your speed",
          "The rule no longer applies below 50 km/h",
        ],
        correctIndex: 1,
        explanation:
          "Both: a lower speed and a longer count. Unfavourable conditions change the distance you need and the speed at which you can safely cover it.",
        context:
          "The count holds at any speed because it measures time, but time is not the only thing that changes in bad weather. On snow and ice without chains, stopping can take up to twelve times the distance it takes on dry concrete, which is why the winter section talks about the gap rather than the technique.",
        trap:
          "Keeping the same count at a lower speed is only half the answer, and the handbook asks for both halves.",
        excerptKey: "two-second-unfavourable",
        sourceLabel: `${HB} - Part 5: Safe driving, Following`,
        sourceUrl: p5(61),
      },
      {
        id: "nb_s5_29",
        topic: "signals",
        question:
          "You have a green light and are turning right. A pedestrian is already lawfully in the crosswalk you are turning across. Who has the right of way?",
        choices: [
          "You, because the green permits the turn",
          "The pedestrian",
          "Whoever entered the intersection first",
          "You, if the pedestrian started after the light changed",
        ],
        correctIndex: 1,
        explanation:
          "The pedestrian. On a green you may proceed straight through or turn either way unless a sign forbids it, but you yield to vehicles and pedestrians lawfully within the intersection or on an adjacent crosswalk at the time the signal is shown.",
        context:
          "The same yielding duty attaches to a green arrow and to a right turn on red. A green signal has never been a clearance of the space in front of you; it is permission to move into a space you have satisfied yourself is empty.",
        trap:
          "It does not matter who entered first. The Act protects a pedestrian lawfully in the crosswalk when the signal is displayed, regardless of sequence.",
        excerptKey: "mva-green-signal",
        sourceLabel: `${ACT} - Section 119(1)(a)(i)`,
        sourceUrl: mva("119"),
      },
      {
        id: "nb_s5_30",
        topic: "parking",
        question:
          "How far back from a stop sign at the side of a roadway must you keep a parked vehicle?",
        choices: ["5 metres", "10 metres", "15 metres", "20 metres"],
        correctIndex: 1,
        explanation:
          "Ten metres on the approach to a stop sign, and the same distance applies to a flashing beacon or a traffic control signal located at the side of a roadway.",
        context:
          "Note the direction: the rule protects the approach, so a car parked just past the sign is not caught by it. The neighbouring distances are 5 metres for a hydrant or a crosswalk at an intersection, 15 metres from the nearest rail of a railway crossing, 10 metres from a fire station driveway, and 25 metres if you are opposite one.",
        trap:
          "Ten metres of approach is roughly two car lengths back from the sign. Parking right at a stop sign hides it from drivers behind you.",
        excerptKey: "parking-stop-sign",
        sourceLabel: `${HB} - Part 4: Rules of the road, Parking regulations`,
        sourceUrl: p4(48),
      },
      {
        id: "nb_s5_31",
        topic: "sharing",
        question:
          "How many demerit points does failing to stop for a school bus's flashing red lights carry?",
        choices: ["Three", "Five", "Six", "Ten"],
        correctIndex: 2,
        explanation:
          "Six points. It is the second-heaviest penalty on the handbook's list, behind only a Criminal Code offence involving a motor vehicle.",
        context:
          "It sits above distracted driving, driving without due care and failing to report a collision, all of which are five. Speeding 25 km/h or less over is three, and illegal parking, an equipment offence or a driver not wearing a seat belt are two each.",
        trap:
          "Six points is more than a newly licensed driver's opening credit of four, and more than the six they hold in year two after the first annual increase would still leave nothing.",
        excerptKey: "bus-illegal-pass",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Some examples of point loss offences`,
        sourceUrl: p1(22),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_32",
        topic: "speed",
        question:
          "What does a posted speed limit actually represent, according to the handbook?",
        choices: [
          "The maximum speed at which it is safe to drive under ideal conditions",
          "The speed at which traffic flows most efficiently",
          "The speed above which enforcement begins",
          "A target speed for the road",
        ],
        correctIndex: 0,
        explanation:
          "The maximum for ideal conditions. Anything less than ideal means the safe speed is below the number on the sign.",
        context:
          "The handbook lists what counts as less than ideal: poor visibility, a wet or slippery highway, pedestrians or animals on or near the road, heavy traffic, and fatigue, illness or nervous tension - which it says may be reasons not to drive at all. The Act backs it with an independent prohibition on driving faster than is reasonable and prudent for the conditions.",
        trap:
          "Driving at the posted limit in freezing rain can still be an offence. The sign sets a ceiling, not a permission.",
        excerptKey: "speed-ideal-conditions",
        sourceLabel: `${HB} - Part 5: Safe driving, Speed`,
        sourceUrl: p5(59),
      },
      {
        id: "nb_s5_33",
        topic: "signs",
        question:
          "A white regulatory sign shows an arrow bending around a vertical black bar with a red circle and slash over it. What does it forbid?",
        choices: [
          "Turning left",
          "Passing",
          "Turning your vehicle around to travel the opposite way",
          "Entering the road",
        ],
        correctIndex: 2,
        explanation:
          "It is the no U-turn sign: you may not turn your vehicle around in the roadway to travel in the opposite direction.",
        context:
          "The Act adds three places where a U-turn is unlawful even without a sign - on a curve, on the approach to or near the crest of a grade where you cannot be seen from 150 metres in either direction, and anywhere a traffic control device forbids it - plus a general rule that you may not do it at all unless you can without interfering with other traffic. The handbook adds its own: never stop, park or make a U-turn in a curve.",
        trap:
          "The absence of a sign is not permission. The curve and crest prohibitions apply wherever those conditions exist.",
        excerptKey: "no-uturn-sign",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.3 Regulatory Signs`,
        sourceUrl: p7(88),
        commonlyMissed: true,
      },
      {
        id: "nb_s5_34",
        topic: "safety",
        question:
          "When are studded tires legal in New Brunswick, and what does the handbook warn about them?",
        choices: [
          "15 October to 30 April; they may cause more of a skid in an emergency stop than plain rubber",
          "All year; they shorten stopping distance in every condition",
          "1 December to 31 March; they are unsafe on bare pavement",
          "15 October to 30 April; they are required on all four wheels",
        ],
        correctIndex: 0,
        explanation:
          "The window is 15 October to 30 April, and the handbook's warning is that studs can cause more of a skid in an emergency stop than rubber tires, depending on the road surface.",
        context:
          "Studs decrease stopping distance on ice but can increase it in extreme cold. Tire chains carry the same caution. For traction and steering control the handbook recommends snow tires on all four wheels, or all-season radials with enough tread depth to self-clean in snow and slush, and warns against mixing radials with non-radial snow tires.",
        trap:
          "Studs are permitted, not mandated, and they are not a substitute for slowing down. Even with chains or studs, slower than normal speeds are described as a must on snow and ice.",
        excerptKey: "studded-tires-dates",
        sourceLabel: `${HB} - Part 5: Safe driving, DID YOU KNOW?`,
        sourceUrl: p5(57),
      },
      {
        id: "nb_s5_35",
        topic: "licensing",
        question:
          "A Class 7 Level 2 driver aged 19 wants to drive home from a friend's house at 1 a.m. What does the law allow?",
        choices: [
          "Nothing - Level 2 drivers may not drive between midnight and 5 a.m.",
          "They may drive alone, since the curfew ended with Level 1",
          "They may drive if accompanied by a Class 5 driver of at least three years' experience, with nobody else aboard",
          "They may drive if they carry no more than three passengers",
        ],
        correctIndex: 2,
        explanation:
          "Under 21 at Level 2, the midnight to 5 a.m. window is open only for education or work, in an emergency, with the Registrar's permission, or with a Class 5 or better driver of at least three years' experience beside you and nobody else in the vehicle.",
        context:
          "The escort condition is strict about the passenger count: no other person may be in or on the vehicle. Driving to or from work or school is an automatic exemption, and any other purposeful activity needs a written application to the Registrar. At 21 the curfew stops applying, whether or not the driver has reached Class 5.",
        trap:
          "Going home from a friend's house is not education, employment or an emergency. Bringing a passenger along with the supervising driver breaks the exception it was meant to satisfy.",
        excerptKey: "level2-curfew",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Level 2`,
        sourceUrl: p1(10),
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
      "Thirty questions with no hints beyond the standard notes, weighted the way New Brunswick's two written exams are: signs on one side, rules of the road on the other.",
    questions: [
      {
        id: "nb_s6_01",
        topic: "signs",
        question: "Into what three functions does New Brunswick classify traffic signs?",
        choices: [
          "Regulatory, warning and information",
          "Mandatory, advisory and directional",
          "Legal, safety and tourist",
          "Permanent, temporary and emergency",
        ],
        correctIndex: 0,
        explanation:
          "Regulatory, warning and information. Every sign on the exam belongs to one of those three, and the shape and colour tell you which.",
        context:
          "Regulatory signs state the law and are white rectangles or squares with black or coloured lettering. Warning signs are yellow or orange diamonds with symbols. Information signs are squares marking facilities. Guide signs, the green routing family, sit alongside them.",
        trap:
          "Knowing the family tells you what a sign you have never seen is doing. A shape you cannot name is still readable if you know which family it belongs to.",
        excerptKey: "sign-classes",
        sourceLabel: `${HB} - Part 7: Traffic Signs`,
        sourceUrl: p7(86),
      },
      {
        id: "nb_s6_02",
        topic: "rules",
        question: "Where a road is marked into lanes, what does the law require?",
        choices: [
          "That you straddle the line only when passing",
          "That you change lanes at least every kilometre",
          "That lanes be used only where signs require it",
          "That a vehicle be driven within a single lane",
        ],
        correctIndex: 3,
        explanation:
          "A vehicle must be driven within a single lane. Straddling a line is not a permitted position, and the handbook adds that you should not hug the centre line or ride the line.",
        context:
          "The default lane is the one nearest the right-hand edge, left only to pass or to prepare a left turn. Keeping well over on your own side is stated separately as a safe-driving rule, because a vehicle sitting near the centre line has nowhere to go when something comes the other way.",
        trap:
          "Sitting on a line while you decide is the manoeuvre most likely to be misread by the drivers around you. Choose the lane, then move.",
        excerptKey: "single-lane",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.7 Laned traffic and pavement markings`,
        sourceUrl: p4(37),
      },
      {
        id: "nb_s6_03",
        topic: "signs",
        question: "What does a crossbuck at a railway crossing require of you?",
        choices: [
          "Stop at all times",
          "Sound your horn before crossing",
          "Cross only at walking pace",
          "Yield to all trains",
        ],
        correctIndex: 3,
        explanation:
          "A crossbuck means drivers must yield to all trains. A sign below it tells you how many tracks the crossing has.",
        context:
          "Where a stop sign is erected at a crossing you stop no closer than five metres from the nearest rail. Where flashing lights and a bell are fitted, you stop when they are activated, at the stop line if there is one and otherwise no closer than five metres from the rail. Driving around a gate or barrier is prohibited outright.",
        trap:
          "Multiple tracks are the danger a crossbuck's number plate is warning you about. Drivers have pulled out behind one train and been struck by a second coming the other way.",
        excerptKey: "railway-crossing-sign",
        sourceLabel: `${HB} - Part 7: Traffic Signs, Railway Crossing signs`,
        sourceUrl: p7(94),
      },
      {
        id: "nb_s6_04",
        topic: "safety",
        question:
          "You are becoming drowsy on a long drive. What does the handbook tell you to do?",
        choices: [
          "Open the window and continue",
          "Stop driving and pull off the highway as soon as it is safe",
          "Increase speed to shorten the trip",
          "Switch to high beams for better alertness",
        ],
        correctIndex: 1,
        explanation:
          "Stop driving. The handbook calls drowsiness one of the greatest dangers in highway driving and tells you to pull off the highway as soon as it is safe to do so.",
        context:
          "It appears in the same list as avoiding distraction, keeping your eyes on the road rather than your passengers, and not driving with animals loose in the car. The related warning about adjustment says that after a long highway drive you must make a complete change in speed and vision when you return to two-lane roads and city streets.",
        trap:
          "Fatigue is listed among the conditions that mean the safe speed is lower than the posted limit, and the handbook says it may be a reason not to drive at all.",
        excerptKey: "drowsy",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.10 Some rules for safe driving`,
        sourceUrl: p5(68),
      },
      {
        id: "nb_s6_05",
        topic: "rightOfWay",
        question: "Which way do you travel around a New Brunswick roundabout?",
        choices: ["Clockwise", "Counter-clockwise", "Whichever way the lane arrows show", "Either way, if the roundabout is small"],
        correctIndex: 1,
        explanation:
          "Counter-clockwise, always. It follows from driving on the right: traffic enters to the right of the central island and circulates to the left of it.",
        context:
          "The rest of the roundabout sequence: choose your lane in advance from the arrows on the signs and pavement, yield to pedestrians and cyclists, yield to traffic already circulating and to both lanes if it is a multi-lane roundabout, enter on a safe gap, do not change lanes or stop inside, and signal right as you approach your exit.",
        trap:
          "Passing or driving beside a large truck inside a roundabout is specifically ruled out. Trucks need more of the circle than their lane suggests.",
        excerptKey: "roundabout-direction",
        sourceLabel: `${HB} - Part 4: Rules of the road, Roundabouts`,
        sourceUrl: p4(41),
      },
      {
        id: "nb_s6_06",
        topic: "signs",
        question: "What does a yellow diamond showing a moose or deer mean?",
        choices: [
          "A wildlife reserve boundary",
          "A section of roadway regularly crossed by the animal shown",
          "Hunting is permitted beyond this point",
          "An animal has been struck here recently",
        ],
        correctIndex: 1,
        explanation:
          "It marks a stretch that the animal depicted regularly crosses. In New Brunswick that usually means moose or deer, and it is not a one-off warning.",
        context:
          "The handbook's advice is to use caution especially at dawn and dusk, reduce speed because animals are unpredictable, and scan both sides of the road rather than only the pavement ahead. Cattle crossing has its own version of the sign, as does snowmobile crossing.",
        trap:
          "The sign marks a habitual crossing, not a temporary hazard. Treating it as background scenery is what makes a moose collision a New Brunswick fatality statistic.",
        excerptKey: "animals-dawn-dusk",
        sourceLabel: `${HB} - Part 5: Safe driving, Animals on the highway`,
        sourceUrl: p5(61),
      },
      {
        id: "nb_s6_07",
        topic: "impairment",
        question:
          "A police officer believes a driver is unfit to drive safely for a medical or other reason. What may they do?",
        choices: [
          "Suspend the driver's licence for 24 hours",
          "Nothing until a doctor has examined the driver",
          "Suspend the driver's licence for seven days",
          "Impound the vehicle for three days",
        ],
        correctIndex: 0,
        explanation:
          "Officers have a discretion under the Motor Vehicle Act to suspend a driver's licence for 24 hours where they have concerns about the safety of that driver and others.",
        context:
          "The power starts earlier than the suspension: an officer with reasonable grounds to believe a driver is unfit for a medical or other reason may require them to stop so that the belief can be tested. Separately, doctors, optometrists and nurse practitioners are required by law to report anything affecting a patient's ability to drive.",
        trap:
          "It is not an impaired-driving power. Unfitness covers medical and other reasons, and no breath test is involved.",
        excerptKey: "24-hour-suspension",
        sourceLabel: `${HB} - Part 5: Safe driving, 24-hour suspension for driver unfitness`,
        sourceUrl: p5(66),
      },
      {
        id: "nb_s6_08",
        topic: "sharing",
        question: "How much of a traffic lane is a motorcycle entitled to?",
        choices: [
          "Half a lane, so a car may share it",
          "As much as the rider signals for",
          "A full lane only on a divided highway",
          "A full highway lane",
        ],
        correctIndex: 3,
        explanation:
          "A full highway lane, and the handbook is emphatic that you never crowd into the same lane as a motorcycle.",
        context:
          "Motorcycles are also entitled to a full parking space. Riders are told to make eye contact with other drivers, to ride in the left wheel position as a rule so they can see and be seen, and not to zig-zag between cars. Riding two abreast in one lane is ruled out; riders stagger instead.",
        trap:
          "A motorcycle taking the centre or left of its lane is not wasting space. It is positioning to be seen, which the handbook explicitly tells riders to do.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: `${HB} - Part 6: Sharing the road, 6.3 Drivers and motorcycles`,
        sourceUrl: p6(79),
      },
      {
        id: "nb_s6_09",
        topic: "signals",
        question:
          "A traffic control signal is placed somewhere other than an intersection - at a fire hall, say. Where do you stop when it shows red?",
        choices: [
          "Level with the signal itself, always",
          "Five metres before the signal",
          "Wherever the vehicle ahead of you stops",
          "At a clearly marked stop line, or if there is none, at or opposite the signal",
        ],
        correctIndex: 3,
        explanation:
          "At the marked stop line, and if there is none, at or opposite the signal. The Act deals with this case separately from intersections.",
        context:
          "At an intersection the list is longer: the stop line first, then the near-side crosswalk if there is no line, then the intersection itself if there is neither. The rest of the signal rules apply the same way wherever the signal is placed.",
        trap:
          "Rolling past a stop line to see round something puts you in the wrong place under a rule that names the line specifically.",
        excerptKey: "red-light-rule",
        sourceLabel: `${ACT} - Section 119(2)`,
        sourceUrl: mva("119"),
      },
      {
        id: "nb_s6_10",
        topic: "safety",
        question:
          "The road has just started to spit rain after a dry spell. What does the handbook say about the surface?",
        choices: [
          "It is at its safest, because the dust has been laid",
          "It is unchanged until the road is fully wet",
          "It is slippery only where the surface is new",
          "It is likely to be especially slick, because the first drops mix with grease and dirt",
        ],
        correctIndex: 3,
        explanation:
          "The first few drops loosen accumulated grease and dirt, and the mixture covers the road in a slippery film. The handbook calls those first drops danger signals.",
        context:
          "Friction is the whole story: the only contact your car has with the road is through four patches of rubber about the size of the palm of your hand, and a wet or slippery surface cuts that grip sharply. Cruise control should be avoided in wet or slippery conditions.",
        trap:
          "Waiting for heavy rain before slowing down gets it backwards. The most dangerous minutes are at the very start of the shower.",
        excerptKey: "first-rain",
        sourceLabel: `${HB} - Part 5: Safe driving, Rain`,
        sourceUrl: p5(70),
      },
      {
        id: "nb_s6_11",
        topic: "signs",
        question: "What does a PAVEMENT ENDS sign tell you about the road ahead?",
        choices: [
          "The road is closed beyond this point",
          "There is a drop at the edge of the lane",
          "The continuation has a gravel surface",
          "The pavement is being resurfaced",
        ],
        correctIndex: 2,
        explanation:
          "The road carries on but the surface changes to gravel, which means less grip, more stopping distance and thrown stones.",
        context:
          "It is not the same as the pavement drop-off sign, which is an orange construction warning that the neighbouring lane or shoulder sits at a different level to yours. Nor is it bump or rough road ahead, which is a yellow warning about the surface you stay on.",
        trap:
          "Gravel changes braking and steering more than most drivers expect, and studded tires or chains do not help on it the way they do on ice.",
        excerptKey: "pavement-ends",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(92),
      },
      {
        id: "nb_s6_12",
        topic: "rightOfWay",
        question:
          "A pedestrian crosses mid-block, away from any crosswalk. Who yields?",
        choices: [
          "The driver, always",
          "The pedestrian yields to vehicles on the highway",
          "Neither - both proceed with caution",
          "The driver, unless the pedestrian is running",
        ],
        correctIndex: 1,
        explanation:
          "Crossing anywhere other than a marked or unmarked crosswalk at the end of a block, a pedestrian must yield the right of way to vehicles on the highway. The rule expressly includes a person in a wheelchair.",
        context:
          "It reverses at a crosswalk, where the driver yields, and the driver's duty covers unmarked crossings at the end of a block as well as painted ones. Where traffic signals control the intersection, pedestrians must obey them as drivers do, unless a peace officer directs otherwise.",
        trap:
          "Having the legal right of way is not the same as being safe. The handbook tells drivers to expect the unexpected from pedestrians and to allow for people who may not act as you expect.",
        excerptKey: "jaywalking",
        sourceLabel: `${HB} - Part 4: Rules of the road, The pedestrian's responsibility`,
        sourceUrl: p4(51),
      },
      {
        id: "nb_s6_13",
        topic: "speed",
        question:
          "You are convicted of driving 20 km/h over the posted limit. How many demerit points is that?",
        choices: ["Two", "Three", "Five", "Six"],
        correctIndex: 1,
        explanation:
          "Three points for speeding 25 km/h or less over the limit. More than 25 over is five.",
        context:
          "The Act splits the offence into bands: 25 or less over, more than 25 but not more than 50, more than 50 but not more than 80, and more than 80. The top two bands bring vehicle impoundment - seven days and 30 days - and the highest band also doubles the minimum fine.",
        trap:
          "The point value is a step function, not a sliding scale. Twenty-five over and twenty-six over are three points and five points respectively.",
        excerptKey: "newly-licensed-points",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Some examples of point loss offences`,
        sourceUrl: p1(22),
      },
      {
        id: "nb_s6_14",
        topic: "signs",
        question:
          "You approach a set of black-and-yellow arrow signs placed around the outside of a bend. What are they?",
        choices: [
          "Chevron alignment signs, guiding you around the curve",
          "Lane designation signs",
          "Detour markers",
          "Hazard markers for a drop at the road edge",
        ],
        correctIndex: 0,
        explanation:
          "Chevrons are alignment signs. Placed in series around the outside of a bend, they show the line of the curve where the road itself is hard to read.",
        context:
          "They sit with the other hazard markers. A marker with downward-sloping lines shows the side on which you may safely pass a hazard near the road edge. The orange triangle with a red border is the slow-moving vehicle sign for anything travelling under 40 km/h.",
        trap:
          "Chevrons do not set a speed. If the bend has an advisory speed, that comes on the sharp curve sign at the approach, not on the chevrons themselves.",
        excerptKey: "chevron",
        sourceLabel: `${HB} - Part 7: Traffic Signs, Hazard Markers`,
        sourceUrl: p7(92),
      },
      {
        id: "nb_s6_15",
        topic: "rules",
        question:
          "You are on a divided highway and realise you have just passed your exit. What does the handbook tell you to do?",
        choices: [
          "Reverse carefully along the shoulder",
          "Stop and wait for a gap to cross to the ramp",
          "Drive on to the next exit",
          "Use the emergency crossover in the median",
        ],
        correctIndex: 2,
        explanation:
          "Drive to the next one. The handbook's instruction is flat: never back up on a highway.",
        context:
          "It goes with the rule that you never stop on the travelled portion of the roadway even if you miss an exit. The rest of the limited-access advice covers planning your route, reading the guide signs early, using the acceleration lane to merge and the deceleration lane to exit, and keeping a safe following distance.",
        trap:
          "The shoulder is not a legal alternative either. Driving off the roadway onto the shoulder to pass is prohibited, and reversing along it is worse.",
        excerptKey: "miss-exit",
        sourceLabel: `${HB} - Part 5: Safe driving, Entrance and exit ramps`,
        sourceUrl: p5(76),
      },
      {
        id: "nb_s6_16",
        topic: "safety",
        question:
          "A driver is convicted of not wearing their own seat belt. What does it cost them on their record?",
        choices: ["No points, just a fine", "Two points", "Three points", "Five points"],
        correctIndex: 1,
        explanation:
          "A fine plus a loss of two points on the driving record. It is the same value as an illegal parking conviction or an equipment offence.",
        context:
          "Points do not follow the passenger. Passengers aged 16 and over are charged personally if they are not belted, with no points against them or against the driver. The driver is, however, charged for any passenger under 16 who is not wearing a belt.",
        trap:
          "Two points is a quarter of a newly licensed driver's opening credit of four, which makes it a much heavier penalty in the first year than it looks.",
        excerptKey: "seatbelt-points",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.4 Penalties for seat belt infractions`,
        sourceUrl: p5(56),
      },
      {
        id: "nb_s6_17",
        topic: "signs",
        question:
          "A yellow diamond shows a traffic light symbol. What is it telling you?",
        choices: [
          "Traffic signals are ahead - be prepared to stop",
          "The signals ahead are out of service",
          "The signal ahead is pedestrian-controlled",
          "A flashing signal is ahead",
        ],
        correctIndex: 0,
        explanation:
          "Traffic signals ahead, be prepared to stop. It is placed where the signal itself is hard to see far enough in advance.",
        context:
          "It belongs with the other advance warnings: stop sign ahead does the same job for an octagon, and the railway advance warning tells you to look, listen and slow down. All three exist because the thing they announce comes into view later than a driver at speed needs it to.",
        trap:
          "The sign does not tell you what the signal is showing. It tells you there is one and that stopping is a live possibility.",
        excerptKey: "traffic-signals-ahead",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(91),
      },
      {
        id: "nb_s6_18",
        topic: "sharing",
        question:
          "You are following a loaded truck down a long hill and want to pass. What does the handbook advise?",
        choices: [
          "Pass on the descent, while the truck is slowed by its load",
          "Pass on the right, where the truck's blind spot is smallest",
          "Sound your horn and pass immediately",
          "Avoid passing while going downhill - wait for level ground and stable speed",
        ],
        correctIndex: 3,
        explanation:
          "Wait. Heavy vehicles need longer stopping distances and accelerate slowly, and the handbook tells drivers to avoid passing while going downhill and to wait for level ground where the speed has stabilised.",
        context:
          "A loaded tractor-trailer can weigh up to 49,500 kilograms, and a double-trailer B-train up to 62,500. Getting one of those up to speed can take nine to eighteen gear changes, and getting one stopped at 90 km/h takes about 102 metres under ideal conditions.",
        trap:
          "A truck picks up speed downhill rather than losing it, so the gap you judged at the top of the grade is not the gap you will have at the bottom.",
        excerptKey: "truck-downhill-pass",
        sourceLabel: `${HB} - Part 6: Sharing the road, 6.2 Drivers and large commercial vehicles`,
        sourceUrl: p6(78),
      },
      {
        id: "nb_s6_19",
        topic: "emergencies",
        question:
          "You come upon a collision and someone is trapped but not in immediate danger. What does the handbook tell you?",
        choices: [
          "Move them clear of the vehicle at once",
          "Move them only if you have first-aid training",
          "Move them if the vehicle is on the roadway",
          "Leave them in the car until trained help arrives",
        ],
        correctIndex: 3,
        explanation:
          "Leave them where they are unless the vehicle is burning or there is other immediate danger. Untrained rescuers routinely make injuries worse by moving people.",
        context:
          "There is still plenty you can usefully do. Pull well clear and put your flashers on to prevent a second crash, call 9-1-1 and stay on the line, turn off the ignition of the damaged vehicles and keep smokers away, cover the injured for warmth, loosen collars, ties and belts, and talk to them. Attend first to anyone not breathing or bleeding severely.",
        trap:
          "First-aid training is not what makes moving them safe. The handbook's exception is immediate danger, not the rescuer's qualifications.",
        excerptKey: "crash-dont-move",
        sourceLabel: `${HB} - Part 5: Safe driving, If you arrive first at a collision`,
        sourceUrl: p5(62),
      },
      {
        id: "nb_s6_20",
        topic: "rightOfWay",
        question:
          "You are approaching a yield sign. What exactly do you have to give way to?",
        choices: [
          "Traffic in the intersection or approaching so closely as to be an immediate hazard",
          "All traffic on the intersecting road, however far away",
          "Traffic on your right only",
          "Nothing, if you can enter without stopping",
        ],
        correctIndex: 0,
        explanation:
          "Traffic already in the intersection, and traffic approaching so closely that it constitutes an immediate hazard. You reduce speed on approach and stop if that is what yielding takes.",
        context:
          "A yield sign is placed where an intersection needs control but not a full stop. That is the whole difference from a stop sign, which requires the wheels to stop turning every time regardless of what is coming.",
        trap:
          "Immediate hazard is the test, not distance. A vehicle two hundred metres away at 100 km/h can be an immediate hazard; one fifty metres away and stopped is not.",
        excerptKey: "yield-sign-rule",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.13 Yield sign`,
        sourceUrl: p4(42),
      },
      {
        id: "nb_s6_21",
        topic: "signs",
        question:
          "A yellow diamond shows a road narrowing symmetrically from both sides. What is ahead?",
        choices: [
          "A narrow bridge",
          "A lane ending on the right",
          "A construction lane closure",
          "A road that is not as wide as the one you are on",
        ],
        correctIndex: 3,
        explanation:
          "Road narrows: the road ahead is not as wide as the road you are driving on. It is a change in the whole roadway, not the loss of one lane.",
        context:
          "The lane ends sign is the one that means a lane is running out, usually the right one. Narrow bridge is a third thing again, where the pavement on the bridge is narrower than the approach. Each has its own symbol and its own consequence for where the oncoming traffic will be.",
        trap:
          "Symmetrical narrowing means both edges come in. A merge is not required, but the space between you and oncoming traffic shrinks.",
        excerptKey: "road-narrows",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(91),
      },
      {
        id: "nb_s6_22",
        topic: "parking",
        question:
          "You need to stop on a rural road with no curb. On which side do you park?",
        choices: [
          "The left, so you can see oncoming traffic",
          "Whichever side has the wider shoulder",
          "The right, facing the direction of travel",
          "Either, provided the hazard lights are on",
        ],
        correctIndex: 2,
        explanation:
          "The right, in the direction of travel. The handbook is explicit: never park on the left side of the roadway facing traffic.",
        context:
          "The rest of the rural parking rules go with it. Move off the paved or main travelled part of the roadway unless the vehicle is too disabled to move, leave five metres of unobstructed roadway and 60 metres of visibility in each direction, turn the front wheels to the side and set the parking brake, and at night show a white or amber light to the front and a red one to the rear on the roadway side.",
        trap:
          "A wide shoulder on the wrong side is still the wrong side. The prohibition on parking against traffic is absolute.",
        excerptKey: "never-park-facing-traffic",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.10 Some rules for safe driving`,
        sourceUrl: p5(67),
      },
      {
        id: "nb_s6_23",
        topic: "safety",
        question:
          "How much distance does a car travelling at 50 km/h cover during the average driver's reaction, before the brakes are even applied?",
        choices: ["About 5 metres", "About 10 metres", "About 20 metres", "About 30 metres"],
        correctIndex: 1,
        explanation:
          "About 10 metres, or roughly two car lengths, in the three quarters of a second an average driver takes to move their foot from the accelerator to the brake.",
        context:
          "Stopping is described as two stages: seeing the reason to stop, and reacting to it. That reaction distance is added to the braking distance, and it grows with speed - at 90 km/h a truck driver covers 18 metres before touching the brakes. It is why following distance is measured in time rather than car lengths.",
        trap:
          "Reaction distance is before braking begins. The total stopping distance is that plus everything the brakes then have to do.",
        excerptKey: "reaction-distance-50",
        sourceLabel: `${HB} - Part 5: Safe driving, Stopping`,
        sourceUrl: p5(59),
      },
      {
        id: "nb_s6_24",
        topic: "licensing",
        question: "When does a New Brunswick driver's licence expire?",
        choices: [
          "Five years from the date of issue",
          "On the holder's birthday in the year of expiration",
          "On 31 December of the year of expiration",
          "On the anniversary of the road test",
        ],
        correctIndex: 1,
        explanation:
          "On the holder's own birthday in the year of expiry, and tracking that date is expressly the driver's own responsibility.",
        context:
          "Renewal comes with declarations. You must tell the Motor Vehicle Branch about any change in physical or mental condition that might limit or alter your ability to drive - the handbook lists heart conditions, mental conditions, eye disease, diabetes and anything causing loss of consciousness - and about any revocation or suspension. Failing to provide that information may block the renewal.",
        trap:
          "Nobody is obliged to remind you. The handbook says outright that keeping track of the expiry date is yours to do.",
        excerptKey: "licence-expiry",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Expiry Date`,
        sourceUrl: p1(19),
      },
      {
        id: "nb_s6_25",
        topic: "signals",
        question: "What does a flashing amber signal require of you?",
        choices: [
          "A complete stop before proceeding",
          "To slow down and take extra care of intersecting traffic",
          "To treat the intersection as uncontrolled and yield right",
          "To wait for a green before entering",
        ],
        correctIndex: 1,
        explanation:
          "Slow down and be extra careful of the traffic crossing your path, whether or not you have the right of way. It never becomes a stop.",
        context:
          "Its partner does. A flashing red is governed by exactly the same rule as a stop sign: a complete stop, then proceed only when the way is clear. Getting the two the wrong way round is one of the classic errors in the signals section.",
        trap:
          "Having the right of way does not remove the duty. The handbook adds the words whether you have right of way or not.",
        excerptKey: "amber-flasher",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.15 Traffic control signals`,
        sourceUrl: p4(43),
      },
      {
        id: "nb_s6_26",
        topic: "rules",
        question:
          "May you pass another vehicle on a hill or a curve in New Brunswick?",
        choices: [
          "Yes, if the markings permit it",
          "Yes, if you can see the road is clear",
          "No - the handbook says do not pass on a hill or curve at any time",
          "Yes, but only below 60 km/h",
        ],
        correctIndex: 2,
        explanation:
          "The handbook's safe-driving list puts it without qualification: do not pass on a hill or curve at any time.",
        context:
          "The legal rule underneath it is expressed as a sight distance: passing or driving left of centre on a curve or approaching a crest is illegal where the view is obstructed within 150 metres, or where the markings prohibit it. Passing on the approach to an intersection, a bridge or a railway crossing is also out, except where two or more marked lanes run the same way.",
        trap:
          "Curves and hills obstruct the view of the road, which is why the handbook also rules out backing up in them, and why it names them as places never to stop, park or make a U-turn.",
        excerptKey: "no-pass-hill-curve",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.10 Some rules for safe driving`,
        sourceUrl: p5(67),
      },
      {
        id: "nb_s6_27",
        topic: "sharing",
        question:
          "Before starting your vehicle in a car park, what does the handbook tell you to do?",
        choices: [
          "Check the mirrors and reversing camera",
          "Do a circle check around the vehicle",
          "Sound the horn once",
          "Check the rear-view mirror only",
        ],
        correctIndex: 1,
        explanation:
          "A circle check on foot around the vehicle. Pedestrians can be hidden behind the rear-view mirror, beside the door pillars, at the sides, and in front of and behind the vehicle.",
        context:
          "The blind spots that hide a car are not the same as the ones that hide a person. A small child can stand entirely within the area a mirror and a reversing camera between them do not cover, which is why the handbook asks for a walk round rather than a look round.",
        trap:
          "Reversing cameras cover the area behind, not the areas beside and in front. The handbook's list includes both.",
        excerptKey: "circle-check",
        sourceLabel: `${HB} - Part 6: Sharing the road, 6.5 Drivers and pedestrians`,
        sourceUrl: p6(80),
      },
      {
        id: "nb_s6_28",
        topic: "emergencies",
        question:
          "A fire hose is lying across the road at an incident. What may you do?",
        choices: [
          "Drive over it slowly",
          "Drive over it only if it is flat",
          "Not drive over it unless the fire department official in charge tells you to",
          "Drive over it if no fire fighters are visible",
        ],
        correctIndex: 2,
        explanation:
          "Driving over a fire hose is prohibited unless the fire department official in charge instructs you to do so.",
        context:
          "The same section carries the other fire-scene distances. Following fire apparatus responding to an emergency within 150 metres is an offence, and so is driving or parking within 150 metres of apparatus stopped in answer to an alarm.",
        trap:
          "A charged hose under a wheel can burst or whip. The prohibition is not about damaging equipment, it is about the people using it.",
        excerptKey: "fire-hose",
        sourceLabel: `${HB} - Part 4: Rules of the road, DID YOU KNOW?`,
        sourceUrl: p4(34),
      },
      {
        id: "nb_s6_29",
        topic: "signs",
        question:
          "A white sign shows a black arrow pointing right, angled through a set of railway tracks. What is it telling you?",
        choices: [
          "A railway crossing where the tracks cross the road at the angle shown",
          "A level crossing that is closed to traffic",
          "A tram route",
          "A railway station entrance",
        ],
        correctIndex: 0,
        explanation:
          "It is the railway ahead warning, and the angle in the symbol shows the angle at which the tracks cross the road. A shallow angle matters, because it changes where you have to look.",
        context:
          "Motorcyclists get specific advice about this: where tracks cross at an angle it is not always wise to take them head on, and crossing at a slight angle can be safer. At the crossing itself the crossbuck means yield to all trains, and a plate below it gives the number of tracks.",
        trap:
          "The angle in the symbol is information, not decoration. A crossing at a shallow angle hides an approaching train further behind your door pillar than a square one does.",
        excerptKey: "railway-angle-sign",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(92),
      },
      {
        id: "nb_s6_30",
        topic: "licensing",
        question:
          "In what circumstances may the Registrar require an existing driver to be re-examined?",
        choices: [
          "Only after a criminal conviction",
          "Only at licence renewal",
          "At any time, where there is a question about the driver's physical or mental condition or driving ability",
          "Only where a doctor has filed a report",
        ],
        correctIndex: 2,
        explanation:
          "At any time. The trigger is a question about the driver's physical or mental condition or their driving ability, and a poor record of collisions or convictions is enough.",
        context:
          "The re-examination is similar to the qualifying examination and is conducted by a Driver Examiner. Where a medical condition seems to be involved, a medical report may be required and is reviewed by the Medical Advisory Board, whose recommendation goes to the Registrar. Section 309 of the Act allows retesting to see whether a medical reason is affecting the driver.",
        trap:
          "It is not a penalty and does not need a conviction. A pattern of collisions can be enough on its own.",
        excerptKey: "re-examination",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, 1.7 When a re-examination is required`,
        sourceUrl: p1(23),
      },
    ],
  },
];
