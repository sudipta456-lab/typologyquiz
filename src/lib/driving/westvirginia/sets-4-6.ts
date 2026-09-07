import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sources and the same rules as sets 1 to 3: the West
// Virginia Driver's Licensing Handbook (WV Division of Motor Vehicles, Revised
// 07/2026), Chapters 17C and 17B of the West Virginia Code, and the DMV's own
// twenty-question Sample Driver's Test.
//
// Set 5 is built from what learners actually get wrong. Three sources fed it:
// the traps the DMV itself builds into its sample test (the headlight-dimming
// pair, the three parking distances, the biennial inspection); the rules where
// this handbook differs from the state next door, which is where a driver
// coached by a relative goes wrong; and West Virginia threads on r/driving,
// r/DMV and r/WestVirginia, read for what confused people rather than for what
// the law says. Every rule below was then verified against the handbook or the
// Code, and where a forum claim and an official source disagreed the official
// source won and the disagreement became the trap.
const HB = "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf";
/** PDF page number, which is the printed page number plus ten. */
const hb = (page: number) => `${HB}#page=${page}`;
const code = (section: string) => `https://code.wvlegislature.gov/${section}/`;

export const westvirginiaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions spread over all nine chapters, including the corners people skip: the definitions page, the documents you have to produce, the point scale, the interstate chapter and the emergency chapter at the back.",
    questions: [
      {
        id: "wv_s4_01",
        topic: "licensing",
        question:
          "What are the minimum liability insurance amounts a West Virginia motorist must carry?",
        choices: [
          "$25,000 for one death or injury, $50,000 for two, and $25,000 for property damage",
          "$15,000 for one death or injury, $30,000 for two, and $10,000 for property damage",
          "$50,000 for one death or injury, $100,000 for two, and $50,000 for property damage",
          "$20,000 for one death or injury, $40,000 for two, and $15,000 for property damage",
        ],
        correctIndex: 0,
        explanation:
          "Twenty-five, fifty and twenty-five thousand dollars. The handbook prints the three figures on one line, and coverage has to be maintained for the whole registration year.",
        context:
          "The DMV verifies coverage electronically with insurers and can check at any time during the registration year. Losing coverage costs you the license and the registration plate, plus reinstatement fees.",
        trap: "Filing false insurance information is treated far more seriously than being uninsured: a 90-day suspension on top, revocation of the registration, and possible prosecution.",
        excerptKey: "insurance-minimums",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter II, Compulsory Insurance",
        sourceUrl: hb(26),
      },
      {
        id: "wv_s4_02",
        topic: "emergencies",
        question:
          "In what order does the handbook say to give first aid at a crash scene?",
        choices: [
          "Treat for shock, restore breathing, control bleeding, protect broken bones",
          "Protect broken bones, control bleeding, restore breathing, treat for shock",
          "Restore breathing, protect broken bones, control bleeding, treat for shock",
          "Control bleeding, restore breathing, treat for shock, protect broken bones",
        ],
        correctIndex: 3,
        explanation:
          "Bleeding, breathing, shock, bones - in that order. The handbook prints it as a numbered list because the order is the point.",
        context:
          "The rule wrapped around it is not to move the victim unless there is a danger of further injury, and to keep them lying down and comfortable. West Virginia's Good Samaritan Law protects anyone who gives emergency care in good faith and without pay from civil damages.",
        trap: "Broken bones look the most alarming and come last. Bleeding kills fastest.",
        excerptKey: "first-aid-order",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, First Aid",
        sourceUrl: hb(83),
      },
      {
        id: "wv_s4_03",
        topic: "rules",
        question:
          "At what level of property damage must a crash be reported to law enforcement in West Virginia?",
        choices: [
          "Any damage at all",
          "More than $500",
          "In excess of $1,000",
          "More than $2,500",
        ],
        correctIndex: 2,
        explanation:
          "Property damage in excess of $1,000, or any injury or death. It is reported by the quickest means possible within five days.",
        context:
          "Inside a municipality you report to the local police department; otherwise to the county sheriff or the nearest West Virginia State Police office. If the vehicle was uninsured on the date of the crash, the registration and the driving privilege are both suspended.",
        trap: "Five days is the outer limit, not the plan. The handbook's own crash instructions tell you to notify the nearest law enforcement agency from the scene.",
        excerptKey: "crash-reporting",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter II, Crashes",
        sourceUrl: hb(26),
      },
      {
        id: "wv_s4_04",
        topic: "signs",
        question:
          "On a work zone barricade the diagonal stripes slope downward to the left. What are they telling you?",
        choices: [
          "Bear to the left",
          "Bear to the right",
          "The road is closed in both directions",
          "Stop and wait for a flagger",
        ],
        correctIndex: 0,
        explanation:
          "The stripes point you the way you should go. Sloping down to the left means bear left; sloping down to the right means bear right.",
        context:
          "Barricades, vertical panels, drums, cones and tubes are the channeling devices used in work zones, often with flashing or steady-burn lights at night. A large flashing or sequencing arrow panel does the same job on a bigger scale.",
        trap: "The stripes are not decoration and they are not symmetrical. Reading them backwards steers you into the closed lane.",
        excerptKey: "barricade-stripes",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Construction and Maintenance Signs",
        sourceUrl: hb(47),
      },
      {
        id: "wv_s4_05",
        topic: "safety",
        question: "Where should a child under 13 ride, according to the handbook?",
        choices: [
          "In the front seat, where the driver can watch them",
          "Anywhere, provided they are buckled",
          "In the rear seat, buckled",
          "In the front seat if the air bag is switched off",
        ],
        correctIndex: 2,
        explanation:
          "The handbook recommends that all children 12 and under be buckled and placed in the rear seat, with younger children correctly seated in a child safety seat.",
        context:
          "The absolute rule is narrower and stricter: an infant in a rear-facing safety seat must never be placed in front of a passenger-side air bag under any circumstances. If there is genuinely no alternative, the seat has to be forward-facing and the passenger seat pushed all the way back.",
        trap: "Switching off the air bag is not the answer the handbook gives. The rear seat is.",
        excerptKey: "children-12-rear",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Risk Reduction for Infants and Toddlers",
        sourceUrl: hb(78),
      },
      {
        id: "wv_s4_06",
        topic: "impairment",
        question:
          "You are under 18 and convicted of DUI. What happens to your license?",
        choices: [
          "A 30-day suspension",
          "A 90-day suspension",
          "Nothing until you turn 18",
          "Revocation until you reach 18, or the statutory period, whichever is longer",
        ],
        correctIndex: 3,
        explanation:
          "Revocation until the age of 18 or for the applicable statutory period of revocation or suspension, whichever is longer, and until every other requirement has been met.",
        context:
          "Any DUI-related revocation or suspension also requires a prescribed Safety and Treatment program before you can be reinstated. Where the offense involved alcohol the driver may be eligible for the Interlock Program, and after two or more DUIs in ten years participation is mandatory.",
        trap: "The revocation does not simply expire on your 18th birthday. Whichever period is longer governs.",
        excerptKey: "dui-under-18",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter III, Penalties for Driving Under the Influence",
        sourceUrl: hb(32),
      },
      {
        id: "wv_s4_07",
        topic: "rules",
        question:
          "What does West Virginia law say about using a hand-held phone while driving?",
        choices: [
          "It is legal as long as you are stopped in traffic",
          "It is legal for drivers over 18",
          "It is prohibited only in school and work zones",
          "It is prohibited unless the use is accomplished by hands-free equipment",
        ],
        correctIndex: 3,
        explanation:
          "Hands-free or nothing. The handbook prohibits using any electronic communications device while driving on a public street or highway unless the use is accomplished by hands-free equipment.",
        context:
          "The definition is broad: a cell phone, a personal digital assistant, a device with mobile data access, a laptop, a pager, a two-way messaging device, an electronic game or a portable computer. A hands-free device is one you can engage without either hand.",
        trap: "Sitting stationary in traffic or at a signal is still operating a motor vehicle. The statute says so explicitly for school bus drivers and applies the same logic generally.",
        excerptKey: "hands-free-required",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter II, The Use of Communication Devices",
        sourceUrl: hb(27),
      },
      {
        id: "wv_s4_08",
        topic: "licensing",
        question:
          "Under a Level 1 permit or a Level 2 intermediate license, when may you use a wireless communication device at all?",
        choices: [
          "Hands-free at any time, as for adult drivers",
          "For navigation only",
          "Only to contact a 9-1-1 system",
          "Never, under any circumstances",
        ],
        correctIndex: 2,
        explanation:
          "One exception only: contacting a 9-1-1 system. Hands-free operation does not buy a graduated driver the same latitude an adult gets.",
        context:
          "A citation for device use at Level 1 or Level 2 restarts the conviction-free clock - six months at Level 1, twelve months at Level 2. That is a far heavier penalty than the fine itself.",
        trap: "Assuming the adult hands-free allowance applies is the error. Under 18 the rule is stricter, and the DMV lists it as a primary offense.",
        excerptKey: "under-18-wireless",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Levels 1 and 2 GDL Violations",
        sourceUrl: hb(21),
      },
      {
        id: "wv_s4_09",
        topic: "signs",
        question: "An interstate route number is odd, such as I-77. Which way does it run?",
        choices: [
          "North to south",
          "East to west",
          "In a loop around a city",
          "As a spur into a city",
        ],
        correctIndex: 0,
        explanation:
          "Odd interstates run north to south, even ones run east to west. It is a numbering convention rather than a rule of the road, and the handbook teaches it as part of navigation.",
        context:
          "Three-digit numbers say something too. An even first digit marks a beltway or bypass around a city; an odd first digit marks a spur route into one.",
        trap: "The odd and even pattern is easy to invert. I-64 crosses West Virginia east to west; I-77 runs north to south.",
        excerptKey: "interstate-numbering",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VII, Route Numbering and Navigation",
        sourceUrl: hb(67),
      },
      {
        id: "wv_s4_10",
        topic: "parking",
        question:
          "You are angle parking on your right. How far out from the parked vehicles should you stay as you line up?",
        choices: ["About two feet", "About three feet", "At least five feet", "At least ten feet"],
        correctIndex: 2,
        explanation:
          "At least five feet out, parallel to the curb, until your front end is even with the rear of the space. Then you steer sharply right and pull in.",
        context:
          "Backing out is the hazardous half. The handbook tells you not to rely on the rear view mirror, to move back cautiously when your vision is blocked, and never to back across the center line.",
        trap: "Starting the turn too close forces you to swing wide and clip the car beside the space. Five feet is what makes the geometry work.",
        excerptKey: "angle-parking",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Angle Parking",
        sourceUrl: hb(56),
      },
      {
        id: "wv_s4_11",
        topic: "safety",
        question:
          "Where should your hands sit on the steering wheel, according to the West Virginia handbook?",
        choices: [
          "Ten o'clock and two o'clock",
          "Nine o'clock and three o'clock",
          "Eight o'clock and four o'clock",
          "One hand at twelve o'clock",
        ],
        correctIndex: 2,
        explanation:
          "Left hand at about eight o'clock, right hand at about four. The handbook gives the reason: a deploying air bag is less likely to knock your hands off the wheel from there.",
        context:
          "The air bag section repeats it, adding that you should hold the wheel from the side so your hands and arms are not between the bag and your body, and that both front seats should be tilted slightly back to leave the bag room to deploy.",
        trap: "Ten and two was the standard advice for decades and is the answer most adults will give. Air bags changed it.",
        excerptKey: "hand-position",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Driving Signals",
        sourceUrl: hb(53),
        commonlyMissed: true,
      },
      {
        id: "wv_s4_12",
        topic: "sharing",
        question:
          "You are behind a city bus that has stopped to let passengers off. What does the handbook require?",
        choices: [
          "Traffic does not have to stop, but you should watch for passengers crossing the street",
          "Stop as you would for a school bus",
          "Stop only if the bus has flashing lights",
          "Pass on the left at no more than 15 mph",
        ],
        correctIndex: 0,
        explanation:
          "A public bus is not a school bus. Traffic does not have to stop, but people stepping off it will cross the street, often from in front of the bus where you cannot see them.",
        context:
          "The handbook singles out children here, because a child who has learned the school-bus rule may assume every bus stops the traffic. Use caution when passing a bus that is loading or unloading.",
        trap: "The school bus rule is so heavily drilled that people extend it to any bus. The two rules are genuinely different.",
        excerptKey: "public-bus",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Sharing the Road with Public Buses",
        sourceUrl: hb(64),
      },
      {
        id: "wv_s4_13",
        topic: "rightOfWay",
        question:
          "Which of these convictions requires the DMV to revoke a driver's license outright?",
        choices: [
          "A single speeding ticket 15 mph over the limit",
          "Following too closely",
          "Parking in a mobility impaired space",
          "Two moving violation convictions as a graduated driver",
        ],
        correctIndex: 3,
        explanation:
          "Two or more moving violation convictions as a graduated driver is on the mandatory revocation list, alongside racing, leaving the scene of an injury crash, and driving while revoked.",
        context:
          "The rest of the list runs to eleven items: manslaughter or negligent homicide with a vehicle, providing false information to the DMV, three reckless driving convictions in 24 months, failure to satisfy a civil judgment from a crash, a DUI conviction in any state, a second conviction for failing to pay for gasoline, and any felony committed using a motor vehicle.",
        trap: "Ordinary moving violations add points. Being a graduated driver is what turns two of them into a revocation.",
        excerptKey: "mandatory-revocation",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter II, Mandatory Driver's License Revocation",
        sourceUrl: hb(29),
      },
      {
        id: "wv_s4_14",
        topic: "rules",
        question:
          "What is the one situation in which the handbook says it is acceptable to back up while in a traffic lane?",
        choices: [
          "Backing into a parallel parking space",
          "Backing away from a closed road",
          "Backing to let an emergency vehicle through",
          "Backing out of a driveway",
        ],
        correctIndex: 0,
        explanation:
          "Backing into a parallel parking space. Everywhere else the handbook says backing up in a traffic lane is not advisable, and never across other lanes or through an intersection.",
        context:
          "The statute puts a general duty on top: a driver may not back a vehicle unless the movement can be made with reasonable safety and without interfering with other traffic.",
        trap: "Backing out of a driveway is common and is not what this exception covers - that maneuver crosses a sidewalk and enters a lane, and the handbook's warnings about children behind the vehicle apply squarely to it.",
        excerptKey: "backing-not-in-lane",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Backing Up",
        sourceUrl: hb(55),
      },
      {
        id: "wv_s4_15",
        topic: "emergencies",
        question:
          "There is a fire under the hood of your car. Why does the handbook tell you not to use water on it?",
        choices: [
          "Because water damages the engine",
          "Because water conducts the battery current",
          "Because the steam can scald you",
          "Because burning gasoline floats on water and the fire spreads",
        ],
        correctIndex: 3,
        explanation:
          "Burning gasoline floats on water, so throwing water at it spreads the fire rather than smothering it. Dirt or sand works if you have no chemical extinguisher.",
        context:
          "Before any of that, get off the roadway and switch the ignition off. If the fire gets out of control, move at least 100 feet away, because the fuel tank may explode.",
        trap: "Water is the reflex for any fire. Here it is the wrong tool and makes things worse.",
        excerptKey: "fire-in-vehicle",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, Fire in Vehicle",
        sourceUrl: hb(82),
      },
      {
        id: "wv_s4_16",
        topic: "licensing",
        question:
          "How long does a West Virginia Level 1 GDL instruction permit last?",
        choices: [
          "One year from the date of issue",
          "Six months from the date of issue",
          "Until your 18th birthday, with a 30-day grace period",
          "Until you pass the road skills test, with no expiry",
        ],
        correctIndex: 2,
        explanation:
          "It is issued up to your 18th birthday and expires on it, however old you were when it was issued. The 30-day grace period after that birthday exists for one purpose: to let you finish the road skills examination.",
        context:
          "The permit is nonrenewable. If you surrender it for any reason you start again - the whole examination process, another 180 consecutive conviction-free days, and fresh proof of identity, Social Security number and WV residency.",
        trap: "Getting the permit at 15 does not buy you three years. West Virginians ask about this on forums after finding out that a permit issued at 15 and one issued at 17 expire on the same day.",
        excerptKey: "level1-expiry",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Level 1 GDL Instruction Permit",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "wv_s4_17",
        topic: "speed",
        question:
          "When may an authorized emergency vehicle exceed the posted speed limit?",
        choices: [
          "On emergency duty with the emergency signal equipment operating, provided other road users are not endangered",
          "At any time, since emergency vehicles are exempt from all traffic law",
          "Only on an interstate",
          "Only with a police escort",
        ],
        correctIndex: 0,
        explanation:
          "Two conditions have to hold at once: the vehicle is on emergency duty with the signal equipment running, and other road users are not endangered by the speed.",
        context:
          "The exemption is not a blanket one anywhere in West Virginia law. The statute governing your duty to yield to an emergency vehicle says in as many words that it does not relieve the emergency driver of the duty to drive with due regard for everyone else's safety.",
        trap: "Lights and siren give an emergency driver latitude, not immunity. \"Exempt from all traffic law\" is the answer the movies teach.",
        excerptKey: "emergency-exceed-speed",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Speed Limits",
        sourceUrl: hb(52),
      },
      {
        id: "wv_s4_18",
        topic: "signs",
        question:
          "What color are pedestrian and school warning signs in West Virginia?",
        choices: [
          "Yellow-green with black letters",
          "Standard yellow, like other warning signs",
          "Orange with black letters",
          "White with red letters",
        ],
        correctIndex: 0,
        explanation:
          "Yellow-green with black letters. It is a distinct color used to make pedestrian and school warnings stand out from the ordinary yellow diamonds around them.",
        context:
          "The pentagon is the other school marker: it warns of a school zone ahead or marks a school crossing, and the maximum speed inside that zone is 15 mph when children are present.",
        trap: "Ordinary yellow is close enough to be the tempting answer. The state chose yellow-green precisely so it would not blend in.",
        excerptKey: "pedestrian-school-yellow-green",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Diamond & Warning Signs",
        sourceUrl: hb(46),
      },
      {
        id: "wv_s4_19",
        topic: "safety",
        question:
          "What does the handbook mean by \"over driving your headlights\"?",
        choices: [
          "Using high beams when low beams would do",
          "Leaving the headlights on during the day",
          "Failing to dim for oncoming traffic",
          "Driving too fast to stop safely within the distance your headlights light up",
        ],
        correctIndex: 3,
        explanation:
          "Driving faster than the lit distance allows you to stop in. If something appears at the edge of the beam and you cannot stop before you reach it, you were over driving your headlights.",
        context:
          "The handbook's related instruction is to make sure you can stop within the area lighted by your headlights, and it is why the night rule is not simply \"turn the lights on\" but \"slow down as well\".",
        trap: "The phrase sounds like a lighting fault. It is a speed fault.",
        excerptKey: "over-driving-headlights",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Light Conditions",
        sourceUrl: hb(72),
      },
      {
        id: "wv_s4_20",
        topic: "impairment",
        question:
          "How does West Virginia treat a BAC between 0.05 and 0.08 percent for a driver over 21?",
        choices: [
          "It is relevant evidence to presume the driver's ability to drive is impaired",
          "It is legally irrelevant",
          "It is treated identically to 0.08 or above",
          "It applies only to commercial drivers",
        ],
        correctIndex: 0,
        explanation:
          "It is relevant evidence of impairment. The handbook adds a sentence people find surprising: a driver's license can be revoked with a BAC of less than 0.08 percent.",
        context:
          "Above 0.08 the driver is presumed to be under the influence, which is a different and stronger legal position. Below 0.05 the number on its own proves nothing, though the driving still can.",
        trap: "\"Under 0.08 means I am fine\" is the reading the handbook goes out of its way to contradict.",
        excerptKey: "bac-thresholds",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter III, Knowing Your Limits",
        sourceUrl: hb(31),
      },
      {
        id: "wv_s4_21",
        topic: "rules",
        question:
          "You have moved house within West Virginia. How long do you have to tell the DMV?",
        choices: ["10 days", "20 days", "30 days", "60 days"],
        correctIndex: 1,
        explanation:
          "Twenty days, in writing. Failing to do it exposes you to a possible fine or imprisonment, and telling the post office does nothing to your DMV record.",
        context:
          "The practical cost is worse than the legal one. An out-of-date address means you miss the renewal notice, or a suspension notice, and lose the license for something you never knew about.",
        trap: "Thirty days is the window a new resident has to apply for a WV license. Twenty is the window a resident has to report a move.",
        excerptKey: "address-change-20-days",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, In-State Change of Address",
        sourceUrl: hb(16),
      },
      {
        id: "wv_s4_22",
        topic: "parking",
        question:
          "Who may legally park in a space marked for mobility impaired drivers?",
        choices: [
          "Anyone, for up to 15 minutes",
          "Anyone displaying a mobility impaired parking placard or license plate",
          "Anyone with a doctor's note in the vehicle",
          "Anyone dropping off a passenger",
        ],
        correctIndex: 1,
        explanation:
          "Only a vehicle displaying the placard or the license plate. It is illegal to park a vehicle in a designated area without one.",
        context:
          "A doctor certifies the condition on a DMV form, and the DMV then issues the placard or plate. People who routinely transport a mobility impaired person may use a designated space as well.",
        trap: "A note from a doctor is a step in the application, not a permit in itself. What matters at the curb is the placard or plate on display.",
        excerptKey: "mobility-parking",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Parking for the Mobility Impaired",
        sourceUrl: hb(65),
      },
      {
        id: "wv_s4_23",
        topic: "sharing",
        question:
          "Under West Virginia law, what rights and duties does a person riding a bicycle on a roadway have?",
        choices: [
          "The same rights and the same duties as the driver of a vehicle",
          "The rights of a pedestrian and none of a driver's duties",
          "Fewer rights than a driver, but the same duties",
          "None - bicycles are not covered by the traffic code",
        ],
        correctIndex: 0,
        explanation:
          "The same rights and the same duties, except for the special bicycle regulations and anything that by its nature cannot apply. West Virginia Code 17C-11-2 states it directly.",
        context:
          "The duties are real ones. A bicyclist signals turns and stops unless both hands are needed for balance, rides in the same direction as other vehicles, yields to pedestrians, and keeps within a single lane when riding two abreast.",
        trap: "Treating a rider as a pedestrian on wheels gets both halves wrong: they have the same right to the lane, and the same obligation to stop at the stop sign.",
        excerptKey: "code-bicycle-rights",
        sourceLabel: "W. Va. Code 17C-11-2 - Traffic laws apply to persons riding bicycles",
        sourceUrl: code("17C-11-2"),
      },
      {
        id: "wv_s4_24",
        topic: "signals",
        question:
          "You are facing a steady red arrow for a left turn. May you turn after stopping?",
        choices: [
          "Yes, once you have stopped and yielded",
          "Yes, if you are turning from a one-way street onto a one-way street",
          "No - you stay stopped as long as the arrow is red",
          "Yes, if no sign prohibits it",
        ],
        correctIndex: 2,
        explanation:
          "A steady red arrow means come to a complete stop before the intersection, stop line or crosswalk for the direction the arrow shows, and remain stopped as long as it is red.",
        context:
          "The turn-on-red permission the handbook gives is written against a circular red signal: a right turn at the intersection of two-way streets, or a left turn from a one-way street to another one-way street. An arrow controls its own movement and is not the same signal.",
        trap: "Applying the turn-on-red rule to a red arrow is the mistake. The arrow exists to take that option away.",
        excerptKey: "red-arrow",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Traffic Lights",
        sourceUrl: hb(49),
        commonlyMissed: true,
      },
      {
        id: "wv_s4_25",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and you can see a train coming. What do you do?",
        choices: [
          "Stay in the vehicle and brace for the impact",
          "Try to restart the engine until the last moment",
          "Get out of the vehicle and move to a safe location",
          "Put the car in neutral and try to push it clear",
        ],
        correctIndex: 2,
        explanation:
          "Get out and get away. The handbook's instruction is to look both ways, and if a train is coming and the vehicle is stalled on the tracks, leave it and proceed to a safe location.",
        context:
          "Moving away from the tracks matters as much as leaving the car, and moving toward the train at an angle rather than along the track line keeps you clear of the debris. The car is replaceable.",
        trap: "Trying one more start is the instinct that gets people killed. A train needs more than a mile to stop.",
        excerptKey: "stalled-on-tracks",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, Stalling on Railroad Tracks",
        sourceUrl: hb(82),
      },
      {
        id: "wv_s4_26",
        topic: "speed",
        question:
          "You are entering a curve marked with a yellow advisory speed sign. What is that number?",
        choices: [
          "The legal speed limit for the curve",
          "The maximum recommended safe speed for the curve",
          "The minimum speed for the curve",
          "The speed at which the curve was surveyed",
        ],
        correctIndex: 1,
        explanation:
          "It is advisory: the maximum recommended safe speed. Advisory signs are black on yellow, and you will see them on interstate entrance and exit ramps as well as at curves.",
        context:
          "The handbook's own curve instruction is to reduce speed before you enter, so that no further braking is needed inside the curve, and to keep checking traffic all the way through it.",
        trap: "Advisory is not the same as unenforceable. If you crash at 45 in a curve advised at 25, the basic speed law was broken whatever the white sign says.",
        excerptKey: "advisory-speed-signs",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Square & Rectangular Signs",
        sourceUrl: hb(45),
      },
      {
        id: "wv_s4_27",
        topic: "licensing",
        question:
          "What is the fee for a West Virginia knowledge test?",
        choices: ["$5.00", "$7.50", "$10.00", "$13.50"],
        correctIndex: 1,
        explanation:
          "$7.50 for each attempt. The Level 1 GDL permit itself carries a $5.00 permit fee, and the DMV's GDL page prints the same $7.50 per attempt for the road skills examination.",
        context:
          "A REAL ID compliant card - the one with the gold star, for boarding aircraft and entering federal facilities - costs an extra $10.00 on top of whatever the license itself costs.",
        trap: "The test fee and the permit fee are different numbers for different things, and they sit on the same page.",
        excerptKey: "knowledge-test-fee",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Level 1 GDL Instruction Permit",
        sourceUrl: hb(20),
      },
      {
        id: "wv_s4_28",
        topic: "rightOfWay",
        question:
          "How far behind a working emergency vehicle must you stay under West Virginia law?",
        choices: [
          "There is no set distance",
          "Not closer than 200 feet",
          "Not closer than 300 feet",
          "Not closer than 500 feet",
        ],
        correctIndex: 3,
        explanation:
          "Five hundred feet. West Virginia Code 17C-14-9 makes it an offense to follow an authorized emergency vehicle responding to a fire alarm or other emergency any closer than that.",
        context:
          "The same section forbids parking within the block where an emergency vehicle has stopped in answer to an alarm. The handbook never gives the number, so this is a statute question.",
        trap: "\"No set distance\" is what the handbook alone would tell you, and it is wrong. Following an ambulance to get through traffic is a specific offense.",
        excerptKey: "code-follow-emergency-500",
        sourceLabel: "W. Va. Code 17C-14-9 - Following authorized emergency vehicles",
        sourceUrl: code("17C-14-9"),
        commonlyMissed: true,
      },
      {
        id: "wv_s4_29",
        topic: "safety",
        question:
          "You are driving in dense fog. Which lights should you use?",
        choices: [
          "Low beam headlights",
          "High beam headlights",
          "Parking lights only",
          "Hazard lights while moving",
        ],
        correctIndex: 0,
        explanation:
          "Low beams. High beams reflect off the fog and throw the light straight back into your own eyes, which makes seeing worse rather than better.",
        context:
          "The rest of the fog routine is to reduce speed, stay alert for an emergency stop, and use the wipers to clear the moisture. If the fog defeats you, pull off the road, leave the lights on and switch the hazard lights on too.",
        trap: "High beams feel like more light. In fog they are less.",
        excerptKey: "fog-low-beam",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Headlights and Their Use",
        sourceUrl: hb(61),
      },
      {
        id: "wv_s4_30",
        topic: "rules",
        question:
          "Which of these is on West Virginia's list of illegal equipment for a passenger vehicle?",
        choices: [
          "A roof rack",
          "Windows tinted to less than 35 percent light transmission",
          "Fog lights",
          "A trailer hitch",
        ],
        correctIndex: 1,
        explanation:
          "Tint below 35 percent light transmission is on the illegal equipment list, and a vehicle carrying it cannot be used for a road skills test.",
        context:
          "The rest of the list includes red or blue flashing lights, sirens, a cutout or loud muffler, stickers on the windshield or windows unless the law permits them, more than one spotlight, a broken or cracked windshield, broken lenses, and any door or window that will not work.",
        trap: "Vehicle defects can fail the examination before you have driven a foot. The examiner may allow a minor defect to be fixed, but you may not switch to another vehicle on the same test date.",
        excerptKey: "window-tint",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IV, Illegal Equipment",
        sourceUrl: hb(35),
      },
      {
        id: "wv_s4_31",
        topic: "signs",
        question:
          "A white rectangular sign with black lettering is posted beside the road. What kind of sign is it?",
        choices: [
          "A warning of a hazard ahead",
          "A guide sign pointing to a service",
          "A regulatory sign carrying a traffic law you must obey",
          "A construction sign",
        ],
        correctIndex: 2,
        explanation:
          "Square and rectangular signs show traffic regulations and guide your speed and direction. Most are white with black letters, and the message on them is a law.",
        context:
          "When the message matters most the same family turns red with white letters, and a red outline with a diagonal bar always means no. Speed limit signs, one-way signs, lane direction signs and do-not-enter signs all live here.",
        trap: "Warnings are yellow diamonds. A white rectangle is not advice.",
        excerptKey: "square-rect-signs",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Square & Rectangular Signs",
        sourceUrl: hb(45),
      },
      {
        id: "wv_s4_32",
        topic: "impairment",
        question:
          "Who must complete West Virginia's short DUI awareness course?",
        choices: [
          "Only drivers convicted of DUI",
          "All first-time applicants for a driver's license, including out-of-state drivers moving in",
          "Only drivers under 21",
          "Only commercial drivers",
        ],
        correctIndex: 1,
        explanation:
          "Every first-time applicant for a driver's license or a motorcycle-only license, given on passing the road skills test. Out-of-state drivers coming into West Virginia have to do it too, even if they were licensed here before.",
        context:
          "Completing it earns a card or a stamp on the application. It is an awareness course, not a penalty, and it sits alongside the vision screening and the knowledge exam as part of the ordinary licensing process.",
        trap: "This is not the Safety and Treatment program. That one is a condition of reinstatement after a DUI revocation, and it is a different thing entirely.",
        excerptKey: "dui-awareness-card",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IV, DUI Awareness Cards",
        sourceUrl: hb(35),
      },
      {
        id: "wv_s4_33",
        topic: "sharing",
        question:
          "You are driving on a residential street and children are playing near the curb. What does the handbook ask of you?",
        choices: [
          "Sound the horn continuously until past",
          "Be extra careful in residential areas, school zones, and wherever children are likely to be, and be especially watchful when backing out of a driveway",
          "Drive at no more than 10 mph",
          "Nothing extra, provided you are within the speed limit",
        ],
        correctIndex: 1,
        explanation:
          "Extra care in the places children are, and particular care backing in or out of a driveway, where a child may have run in behind the vehicle.",
        context:
          "The handbook makes the same point about joggers, who turn up in unexpected places - on a curve, over the crest of a hill, around a corner - and about parks and jogging paths where the traffic on foot is heavy.",
        trap: "Being inside the speed limit is not the standard. The basic speed law asks for a speed that is reasonable and prudent, and a street full of children changes what that is.",
        excerptKey: "code-basic-speed",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Children at Play",
        sourceUrl: hb(64),
      },
      {
        id: "wv_s4_34",
        topic: "emergencies",
        question:
          "You come across a crash you were not involved in. What does the handbook tell you to do?",
        choices: [
          "Stop and take photographs for the police",
          "Stop and direct traffic around it",
          "Do not stop unless you are involved or can render assistance",
          "Stop and move the vehicles off the road",
        ],
        correctIndex: 2,
        explanation:
          "Keep going unless you can actually help. The handbook says unnecessary stopping creates additional hazards at the scene.",
        context:
          "Where you are involved, the duties are specific: stop, turn off the ignition, protect the scene, render aid without moving the injured unless it is necessary, and exchange name, address, license plate number and insurance information.",
        trap: "Slowing down to look is the version of this that causes the second crash. The handbook's instruction is to keep the scene clear.",
        excerptKey: "crash-do-not-stop",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, If You are Involved In A Crash",
        sourceUrl: hb(84),
      },
      {
        id: "wv_s4_35",
        topic: "signals",
        question:
          "What is the hand signal for slowing or stopping in West Virginia?",
        choices: [
          "The arm held straight out",
          "The arm pointing up",
          "The arm pointing down",
          "The arm waved back and forth",
        ],
        correctIndex: 2,
        explanation:
          "Arm pointing down for slow or stop. Straight out is a left turn, and arm pointing up is a right turn.",
        context:
          "The handbook prints all three because the road test asks for them. Statute requires the signal to be given by hand and arm or by a lamp or mechanical device, and by lamp only where the vehicle is built or loaded so a hand signal would not be visible front and rear.",
        trap: "Arm up and arm down are the pair that get swapped. Up is the right turn, and down is the one that says you are slowing.",
        excerptKey: "code-obey-devices",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Driving Signals",
        sourceUrl: hb(53),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Thirty-five questions built from the traps the DMV puts in its own sample test, the rules that differ from the states next door, and what West Virginia learners say went wrong. Every one has a tempting wrong answer, and most of them have it first.",
    questions: [
      {
        id: "wv_s5_01",
        topic: "safety",
        question:
          "Which of these statements about headlights is NOT true in West Virginia?",
        choices: [
          "Dim your headlights within 200 feet of an oncoming vehicle",
          "Use your parking lights only while you are parked",
          "Dim your headlights within 200 feet of a vehicle you are following",
          "To avoid being blinded by oncoming lights, look toward the right edge of the roadway",
        ],
        correctIndex: 0,
        explanation:
          "The oncoming figure is 500 feet, not 200. Two hundred is the distance for a vehicle you are following, and putting the smaller number on the oncoming case is the single most reliable way to get this wrong.",
        context:
          "All three of the other statements are the handbook's own words. The DMV builds its sample test question on precisely this substitution, which tells you the state knows people trip on it.",
        trap: "Both figures are real and both are in the same short list. The question is which one goes with which situation.",
        excerptKey: "dim-500-200",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Headlights and Their Use",
        sourceUrl: hb(61),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_02",
        topic: "licensing",
        question:
          "You are 15 and pass your knowledge test today. Your friend passes at 17. When do the two permits expire?",
        choices: [
          "One year after issue for each of you",
          "Both on the holder's own 18th birthday, with a 30-day grace period",
          "At 16 for the younger holder and 18 for the older one",
          "Two years after issue for each of you",
        ],
        correctIndex: 1,
        explanation:
          "Both expire on the holder's 18th birthday. The permit is issued up to that date whatever age you were when you got it, so passing early buys practice time, not permit time.",
        context:
          "The 30-day grace period past the 18th birthday exists for one thing: giving you enough time to complete the road skills examination. The permit is nonrenewable, and surrendering it means starting the whole process again.",
        trap: "This is a real West Virginia confusion. Parents post about it because a permit issued at 15 and one issued at 17 look like they should last different lengths of time, and they do not.",
        excerptKey: "level1-expiry",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Level 1 GDL Instruction Permit",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_03",
        topic: "emergencies",
        question:
          "The back of your car starts sliding to the left. Which way do you steer?",
        choices: [
          "Right, away from the direction of the slide",
          "Left, in the direction of the slide",
          "Straight ahead and brake firmly",
          "Whichever direction the front wheels are already pointing",
        ],
        correctIndex: 1,
        explanation:
          "Left, into the skid. The handbook says it in as many words: if the rear of your vehicle is skidding to the right, turn to the right, and turn left for a skid to the left.",
        context:
          "The steering is only half of it. Take your foot off the gas, do not touch the brakes unless you are in danger of hitting something, and be ready for the car to swing the other way as it grips - at which point you steer again in the direction you want to go.",
        trap: "Steering away is the instinct, and a West Virginia learner who failed four times named this as the item that beat them. The right answer feels wrong the first several times.",
        excerptKey: "skid-steer-into",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, Skids",
        sourceUrl: hb(81),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_04",
        topic: "parking",
        question:
          "Which of these parking distances is correct in West Virginia?",
        choices: [
          "Within 50 feet of a crosswalk at an intersection is prohibited",
          "Within 30 feet of the nearest rail of a railroad crossing is prohibited",
          "Within 15 feet of a fire hydrant is prohibited",
          "Within 10 feet of a stop sign is prohibited",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen feet from a hydrant. The others are the real numbers attached to the wrong things: 20 feet from a crosswalk, 50 feet from the nearest rail, 30 feet from a stop sign or signal.",
        context:
          "The handbook prints them as a list on page 45 and West Virginia Code 17C-13-3 repeats them with more items - a fire lane, 20 feet from a fire station driveway, 75 feet opposite one when signposted, and 20 feet from a daily-delivery mailbox.",
        trap: "This is the DMV's own sample test question almost exactly, and the state's own distractors are these shuffled numbers.",
        excerptKey: "code-parking-hydrant",
        sourceLabel: "W. Va. Code 17C-13-3 - Stopping, standing or parking prohibited",
        sourceUrl: code("17C-13-3"),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_05",
        topic: "licensing",
        question:
          "West Virginia requires a state safety inspection how often?",
        choices: [
          "Every year",
          "Only on vehicles over 10 years old",
          "Only when the vehicle is sold",
          "Every two years",
        ],
        correctIndex: 3,
        explanation:
          "Every two years. The sticker on the windshield shows the month and year of the next inspection, and it is against the law to remove it.",
        context:
          "The DMV asks this on its own sample test and puts \"every year\" directly beside the right answer, which tells you where people land. A valid sticker is also required before the examiner will start your road skills test.",
        trap: "Annual inspection is the rule people remember from elsewhere or from before the change, and it is the answer most given.",
        excerptKey: "inspection-two-years",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Vehicle Conditions",
        sourceUrl: hb(74),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_06",
        topic: "sharing",
        question:
          "You are on a four-lane road with a center turn lane. A school bus stops on the opposite side with its red lights flashing. What must you do?",
        choices: [
          "Keep going - a multi-lane road excuses oncoming traffic",
          "Stop",
          "Slow to 15 mph",
          "Keep going if the turn lane separates you",
        ],
        correctIndex: 1,
        explanation:
          "Stop. Traffic in both directions stops on all highways and streets. A center turn lane is paint, not a barrier, and West Virginia's only exception is an interstate.",
        context:
          "The statute frames it as a controlled-access highway where the bus is on a different roadway or adjacent to the highway and where pedestrians are not permitted to cross. The handbook says it more bluntly: only on interstate highways.",
        trap: "Several states around West Virginia excuse oncoming traffic on any divided highway or any road of four lanes or more. Bringing that rule across the state line is how people get a 60-day suspension.",
        excerptKey: "school-bus-both-directions",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, School Bus Rules",
        sourceUrl: hb(60),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_07",
        topic: "impairment",
        question:
          "What is the penalty for passing a stopped school bus in West Virginia, on a first offense?",
        choices: [
          "A $100 fine and no effect on the license",
          "A minimum 60-day license suspension and a minimum $500 fine, or jail for up to six months",
          "Three points and a $250 fine",
          "A written warning for a first offense",
        ],
        correctIndex: 1,
        explanation:
          "Sixty days off the license as a minimum, and a fine of at least $500, or confinement in jail for not more than six months. Later offenses carry more.",
        context:
          "The statute escalates hard: a second offense is $1,000 to $1,500 and a 180-day suspension, and a third is a $2,000 fine, at least 48 hours in jail, and a year off the road. If the driver cannot be identified, the owner or lessee of the vehicle is liable for the fine.",
        trap: "The idea that a first offense is a warning or a small fine is common and completely wrong. This is one of the heaviest penalties in the handbook.",
        excerptKey: "school-bus-penalty",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, School Bus Rules",
        sourceUrl: hb(60),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_08",
        topic: "safety",
        question:
          "Which of these does West Virginia law require to run headlights at all times on the highway?",
        choices: [
          "Any vehicle towing a trailer",
          "A school bus, motorcycle, motor-driven cycle or moped",
          "Any vehicle registered for a gross weight over 8,000 pounds",
          "None - all vehicles follow the same sunset-to-sunrise rule",
        ],
        correctIndex: 1,
        explanation:
          "School buses, motorcycles, motor-driven cycles and mopeds. West Virginia Code 17C-15-2 carves them out of the ordinary rule and requires lighted head lamps at all times when they are on the highway.",
        context:
          "For everything else the rule is sunset to sunrise, during fog, smoke, rain or other unfavorable conditions, or whenever people and vehicles are not clearly discernible at 500 feet.",
        trap: "The handbook never mentions this exception at all, so a learner who reads only the handbook concludes that every vehicle follows the same sunset-to-sunrise rule.",
        excerptKey: "code-bus-lights-always",
        sourceLabel: "W. Va. Code 17C-15-2 - When lighted lamps are required",
        sourceUrl: code("17C-15-2"),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_09",
        topic: "rules",
        question:
          "You are turning right at a red light onto a two-way street. What must you yield to before completing the turn?",
        choices: [
          "Nothing, once you have stopped",
          "Pedestrians only",
          "All other traffic and all pedestrians",
          "Only traffic coming from your left",
        ],
        correctIndex: 2,
        explanation:
          "Everything. The turn may be made only after yielding to all other traffic and pedestrians, and only where no sign prohibits it.",
        context:
          "The statute is more specific about the pedestrian half: the vehicle must yield to pedestrians lawfully within a crosswalk as well as to vehicular traffic proceeding as the signal directs. Local authorities may prohibit the turn at any intersection by ordinance and a sign.",
        trap: "Watching only for traffic from the left is the habit, and the pedestrian crossing the street you are turning into is on your right.",
        excerptKey: "turn-on-red",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Traffic Lights",
        sourceUrl: hb(49),
      },
      {
        id: "wv_s5_10",
        topic: "licensing",
        question:
          "How many wrong answers can you have on the West Virginia knowledge test and still pass?",
        choices: ["Four", "Five", "Six", "Seven"],
        correctIndex: 2,
        explanation:
          "Six. The handbook requires 19 of 25 correct, which is 76 percent, so six wrong still passes and the seventh is what fails you.",
        context:
          "The test is timed, and any question you have not answered when the time runs out is scored as incorrect. That makes leaving one blank strictly worse than guessing.",
        trap: "\"Five wrong and you are out\" is the version that circulates, and it is off by one. Do not talk yourself into giving up on question 24 because you think you have already failed.",
        excerptKey: "knowledge-exam-pass",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IV, Knowledge Examination",
        sourceUrl: hb(34),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_11",
        topic: "rightOfWay",
        question:
          "You are approaching an uncontrolled intersection and a car reaches it from your right at the same moment. Who goes?",
        choices: [
          "You do, because you are traveling straight",
          "The car on the right",
          "Whoever accelerates first",
          "You do, if you are on the wider road",
        ],
        correctIndex: 1,
        explanation:
          "The vehicle on the right. West Virginia Code 17C-9-1 puts it as a duty on the driver on the left to yield when two vehicles enter from different highways at approximately the same time.",
        context:
          "The prior rule matters too: a driver approaching an intersection yields to a vehicle that has already entered it from a different highway. Position breaks the tie only when the arrivals really are simultaneous.",
        trap: "Road width and traveling straight have no standing at an uncontrolled intersection. The answer is geometric.",
        excerptKey: "code-yield-right",
        sourceLabel: "W. Va. Code 17C-9-1 - Vehicle approaching or entering intersection",
        sourceUrl: code("17C-9-1"),
      },
      {
        id: "wv_s5_12",
        topic: "signals",
        question:
          "You are facing a yellow X over your lane. What does the handbook tell you to do?",
        choices: [
          "Slow down but stay in the lane",
          "Stop before the intersection",
          "Move out of the lane as soon as you can",
          "Use the lane only for turning",
        ],
        correctIndex: 2,
        explanation:
          "Get out of it. A yellow X means the lane is about to be closed or its direction is about to reverse, and the handbook's instruction is to move out of it as soon as you can.",
        context:
          "The set has three signals. A green downward arrow means the lane is open to you. A yellow X means it is about to stop being open. A red X means it is closed or in use by opposing traffic, and you do not use it.",
        trap: "A yellow X is easy to read as an amber warning to be careful. It is an instruction to leave.",
        excerptKey: "lane-yellow-x",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Lane Use Control Signals",
        sourceUrl: hb(50),
      },
      {
        id: "wv_s5_13",
        topic: "safety",
        question:
          "Who is exempt from West Virginia's safety belt requirement?",
        choices: [
          "Passengers 18 years or older riding in the back seat",
          "Any passenger in the back seat",
          "The driver, on a private road",
          "Anyone on a trip under one mile",
        ],
        correctIndex: 0,
        explanation:
          "That is the only legal exception the handbook names: persons 18 years or older who are riding in the back seat of a vehicle. Everyone in the front, and everyone under 18 anywhere, must be belted.",
        context:
          "West Virginia Code 17C-15-49 words it from the other side, requiring the driver, any front-seat passenger, and any back-seat passenger under 18 to be restrained. The fine is $25, no court costs may be added, and no points go on the record.",
        trap: "\"Back seat passengers do not have to buckle up\" is the half-remembered version, and it drops the age. A 16-year-old in the back is covered.",
        excerptKey: "seat-belt-exception",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Safety Equipment",
        sourceUrl: hb(77),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_14",
        topic: "sharing",
        question:
          "A child is 7 years old and 4 feet 10 inches tall. What does West Virginia require?",
        choices: [
          "A child safety seat, because the child is under 8",
          "A booster seat until the 8th birthday",
          "A safety belt is sufficient",
          "Nothing - children under 8 are exempt",
        ],
        correctIndex: 2,
        explanation:
          "The belt is enough. The rule is a child under 8 in a child passenger safety device, with a proviso: if the child is under 8 and at least 4 feet 9 inches tall, a safety belt satisfies the requirement.",
        context:
          "The proviso exists because a child that tall no longer fits a restraint system designed for a smaller body, and the belt geometry works. Below 4 feet 9 inches, the seat is required until the 8th birthday.",
        trap: "Age alone does not settle it. Height is the second half of the test, and it is easy to miss in a long sentence.",
        excerptKey: "code-child-seat",
        sourceLabel: "W. Va. Code 17C-15-46 - Child passenger safety devices required",
        sourceUrl: code("17C-15-46"),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_15",
        topic: "speed",
        question:
          "The West Virginia Code sets the school zone speed limit at 15 mph during which period?",
        choices: [
          "Twenty-four hours a day",
          "During school recess, or while children are going to or leaving school during opening or closing hours",
          "From 7:00 am to 4:00 pm on school days",
          "Whenever a flashing beacon is operating",
        ],
        correctIndex: 1,
        explanation:
          "During school recess, or while children are going to or leaving school during opening or closing hours. That is the statutory wording, and it is narrower than a clock and broader than a beacon.",
        context:
          "The handbook words the same limit as applying while children are present along the roadway. Neither source ties it to a flashing beacon or a fixed set of hours, and the safe reading is to slow down whenever children could be there.",
        trap: "Waiting for a flashing light before slowing is how people get a six-point conviction. Nothing in either source makes the beacon the trigger.",
        excerptKey: "code-school-zone",
        sourceLabel: "W. Va. Code 17C-6-1 - Speed limitations generally",
        sourceUrl: code("17C-6-1"),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_16",
        topic: "rules",
        question:
          "When is passing on the right permitted in West Virginia?",
        choices: [
          "Whenever the vehicle ahead is turning left",
          "Whenever there is room on the shoulder",
          "Only where there is a lane designated for passing",
          "Never, under any circumstances",
        ],
        correctIndex: 2,
        explanation:
          "The handbook allows it only where a lane is designated for passing. \"Passing on the right is not permissible unless there is a lane designated for passing\" is its exact position.",
        context:
          "That is stricter than the everyday habit on a multi-lane road, and it is the wording a knowledge test question would be built from. The shoulder is never a passing lane - interstate shoulders are for disabled vehicles only.",
        trap: "Going around a left-turning car on the right feels obviously fine. The handbook does not list it as an exception.",
        excerptKey: "passing-on-right",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Passing",
        sourceUrl: hb(58),
      },
      {
        id: "wv_s5_17",
        topic: "emergencies",
        question:
          "Your accelerator sticks open. After trying to free it with your foot, what does the handbook tell you to do?",
        choices: [
          "Switch off the ignition immediately",
          "Push in the clutch or shift into neutral",
          "Pull the parking brake",
          "Steer into the shoulder at speed",
        ],
        correctIndex: 1,
        explanation:
          "Clutch in or shift to neutral. That disconnects the engine from the wheels while you still have steering and brakes, and then you brake, stop somewhere safe and switch the ignition off.",
        context:
          "The order matters. The handbook puts concentrating on steering first, freeing the pedal second, neutral third, and the ignition last - because turning the key off first can lock the steering and kill the power assistance.",
        trap: "Killing the ignition sounds like the direct fix and takes away the two systems you most need.",
        excerptKey: "stuck-gas-pedal",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, Stuck Gas Pedal",
        sourceUrl: hb(81),
      },
      {
        id: "wv_s5_18",
        topic: "parking",
        question:
          "You are parking uphill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Toward the curb",
          "Away from the curb",
          "Straight ahead",
          "It depends on whether the vehicle is automatic or manual",
        ],
        correctIndex: 1,
        explanation:
          "Away from the curb when you are facing uphill with a curb there, so that if the car rolls back the wheel catches the curb.",
        context:
          "Three cases, three answers: downhill, turn toward the curb; uphill with a curb, turn away from it; uphill with no curb, turn the wheels right so a rolling car leaves the road rather than crossing it.",
        trap: "The transmission changes what you do with the shifter - reverse on a downgrade, first gear on an upgrade - but never which way the wheels point.",
        excerptKey: "parking-hills-gear",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Parking on Hills",
        sourceUrl: hb(56),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_19",
        topic: "signs",
        question:
          "Which of these is NOT one of West Virginia's designated speed limits when nothing is posted?",
        choices: [
          "70 mph on an interstate",
          "55 mph on an open county highway",
          "35 mph in a business or residential area",
          "15 mph in a school zone while children are present",
        ],
        correctIndex: 2,
        explanation:
          "Business and residential areas are 25 mph, not 35. The other three are the handbook's own figures.",
        context:
          "The West Virginia Code words the same set as fifteen in a school zone, twenty-five in any business or residence district, and fifty-five on open country highways, with the interstate maximum set separately.",
        trap: "Thirty-five is a common posted limit on suburban arterials, which makes it feel like a default. It is not one.",
        excerptKey: "designated-speed-limits",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Speed Limits",
        sourceUrl: hb(52),
      },
      {
        id: "wv_s5_20",
        topic: "licensing",
        question:
          "A Level 2 intermediate driver is in her first six months. Who may ride with her?",
        choices: [
          "One non-family passenger under 20",
          "Two non-family passengers under 20",
          "No non-family passengers under the age of 20 at all",
          "Any number, provided all are belted",
        ],
        correctIndex: 2,
        explanation:
          "None. For the first six months of Level 2 there may be no non-family passenger under the age of 20 in the vehicle. In the second six months the limit rises to one.",
        context:
          "Family members are not counted, and an adult passenger of 20 or over is not counted. The restriction targets exactly the situation that dominates teenage crash statistics: a new driver with a car full of friends.",
        trap: "The Level 1 permit allows two additional non-family passengers alongside the supervising adult. Carrying that number into Level 2 is the error.",
        excerptKey: "level2-passengers",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Level 2 GDL Intermediate Driver's License",
        sourceUrl: hb(21),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_21",
        topic: "impairment",
        question:
          "How many points does a third wireless communication device violation put on a West Virginia driving record?",
        choices: ["None", "One", "Two", "Three"],
        correctIndex: 3,
        explanation:
          "Three points, and only on the third or subsequent offense. The first two carry a fine and no points at all.",
        context:
          "The current Electronically Distracted Driving Act also allows a court to suspend the license for 90 days on that third conviction within a 24-month window, and raises the maximum fine above the figure printed in the handbook's own table.",
        trap: "Assuming points from the first offense overstates it; assuming there are never points understates it. The penalty is deliberately graduated.",
        excerptKey: "code-distracted-points",
        sourceLabel: "W. Va. Code 17C-14-15 - Electronically Distracted Driving Act",
        sourceUrl: code("17C-14-15"),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_22",
        topic: "rightOfWay",
        question:
          "A blind pedestrian with a white cane steps into the road 50 feet from the nearest crosswalk. What is your duty?",
        choices: [
          "None, because they are not in a crosswalk",
          "Sound your horn to warn them",
          "Yield - they have the right-of-way whether or not they are in a crosswalk",
          "Yield only if they are also using a guide dog",
        ],
        correctIndex: 2,
        explanation:
          "You yield. The handbook says a blind person on foot using a guide dog or other service animal, or carrying a white cane or walking stick, has the right-of-way regardless of whether they are in a crosswalk.",
        context:
          "The cane and the dog are alternatives, not a pair. Either one triggers the rule, and so does a walking stick.",
        trap: "The crosswalk is where the general pedestrian rule lives, and this rule deliberately steps outside it.",
        excerptKey: "blind-pedestrian",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Crosswalk Signals",
        sourceUrl: hb(50),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_23",
        topic: "rules",
        question:
          "There is no stop line and no crosswalk at a stop sign. Where do you stop?",
        choices: [
          "Level with the sign",
          "Before your vehicle enters the intersection, at a place where you can see traffic from all directions",
          "With your front bumper in the intersection so you can see",
          "Ten feet back from the corner",
        ],
        correctIndex: 1,
        explanation:
          "Before the vehicle enters the intersection, and far enough forward to see traffic coming from every direction. The handbook says both halves.",
        context:
          "Where markings do exist, you stop behind them: behind any marked or unmarked crosswalk joining the sidewalks, or behind the wide white stop line. Stopping over the line is scored on the road test.",
        trap: "Creeping the nose into the intersection to get a view is the maneuver this rule exists to replace. Stop first, then edge forward if you genuinely cannot see.",
        excerptKey: "stop-sign-where",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Single Message Shaped Signs",
        sourceUrl: hb(44),
      },
      {
        id: "wv_s5_24",
        topic: "safety",
        question:
          "How much does anti-lock braking improve stopping performance in a sudden stop, according to the handbook?",
        choices: [
          "By about 10 percent at best",
          "By about a third",
          "By about half",
          "It roughly doubles braking performance",
        ],
        correctIndex: 0,
        explanation:
          "About 10 percent at best. The handbook is deliberately deflationary here: ABS is about keeping steering control, not about stopping in half the distance.",
        context:
          "It says so in as many words - the system does not provide super brakes allowing a vehicle to stop on a dime, and motorists should not take risks they otherwise would not.",
        trap: "The widespread belief that ABS transforms stopping distance is exactly what the handbook is arguing against, which is why it is worth asking about.",
        excerptKey: "abs-ten-percent",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Safety Equipment",
        sourceUrl: hb(78),
      },
      {
        id: "wv_s5_25",
        topic: "signals",
        question:
          "You have a green light but traffic is backed up on the far side of the intersection. What should you do?",
        choices: [
          "Enter anyway, because a green light gives you the right to proceed",
          "Wait until there is room on the far side before entering",
          "Enter and stop in the intersection until the queue moves",
          "Change lanes inside the intersection to find a gap",
        ],
        correctIndex: 1,
        explanation:
          "Wait. The road test scores stopping the vehicle in the intersection as an error, and blocking a crosswalk is on the prohibited list, so entering a space you cannot clear puts you in both.",
        context:
          "The handbook's crosswalk rule is short and absolute: do not block a crosswalk with your car. The intersection is the same problem one step further on, because cross traffic gets a green while you are still sitting in it.",
        trap: "\"Green means go\" is doing a lot of work here. A green light gives permission to proceed, not permission to occupy space you cannot leave.",
        excerptKey: "crosswalk-lines",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Pavement Markings",
        sourceUrl: hb(51),
      },
      {
        id: "wv_s5_26",
        topic: "sharing",
        question:
          "You want to pass a slow farm tractor on a two-lane road. What does the handbook ask you to establish first?",
        choices: [
          "That the tractor has a slow-moving vehicle emblem",
          "That you can complete the pass safely, given how slowly the tractor is moving",
          "That the tractor driver has signalled you past",
          "That you are within 100 feet of an intersection",
        ],
        correctIndex: 1,
        explanation:
          "That the pass can be made safely. The handbook's instruction is to be aware of how slow these vehicles are as you approach, and to make sure you can pass safely before you attempt it.",
        context:
          "The closing speed is the thing people misjudge. A tractor doing 15 mph on a road where you are doing 55 comes up four times faster than a car doing 45, and the emblem exists to warn you before you have committed.",
        trap: "Being within 100 feet of an intersection is a reason you may not pass at all, not a condition for passing.",
        excerptKey: "slow-moving-emblem",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Sharing the Road with Slow Vehicles",
        sourceUrl: hb(62),
      },
      {
        id: "wv_s5_27",
        topic: "emergencies",
        question:
          "Your right-hand wheels drop off the pavement onto a soft shoulder at speed. What should you do?",
        choices: [
          "Steer back onto the pavement immediately",
          "Brake hard to stop on the shoulder",
          "Grip the wheel, stay on the shoulder, ease off the accelerator and slow gradually before easing back on",
          "Accelerate to lift the wheels clear",
        ],
        correctIndex: 2,
        explanation:
          "Stay on the shoulder and slow down first. Only once the speed is down do you check behind and ahead, then turn the wheels sharply onto the pavement and immediately straighten to stop the car crossing the road.",
        context:
          "The two-stage steering at the end is what the handbook is careful about: as soon as the wheels hit the edge of the pavement you turn them the other way, because otherwise the drop-off's grip flings you into the oncoming lane.",
        trap: "Yanking back onto the road at speed is the reflex, and it is the classic cause of a head-on crash after a shoulder drop.",
        excerptKey: "wheels-off-road",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, Wheels Off the Road",
        sourceUrl: hb(81),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_28",
        topic: "licensing",
        question:
          "You are 17, hold a Level 2 license, and get your first moving violation conviction. What happens?",
        choices: [
          "Nothing, until a second conviction",
          "You must enrol in a driver improvement program, or stay at Level 2 until you are 18",
          "Your license is revoked for 90 days",
          "You return to a Level 1 permit",
        ],
        correctIndex: 1,
        explanation:
          "A Level 2 holder is required to enrol in a driver improvement program on the first conviction. Failing to enrol means staying at Level 2 until the age of 18.",
        context:
          "The second conviction for a moving violation is far heavier: the driving privilege is revoked until you are 18 and you retest as a first-time applicant. And every conviction restarts the twelve-month conviction-free period needed for Level 3.",
        trap: "At Level 1 the equivalent is different - two convictions revoke the permit for 90 days. The two levels have different ladders.",
        excerptKey: "level2-second-conviction",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Levels 1 and 2 GDL Violations",
        sourceUrl: hb(21),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_29",
        topic: "speed",
        question:
          "A large truck is following you closely on an open highway. What does West Virginia law say about how closely a heavy truck may follow another large vehicle outside a business or residence district?",
        choices: [
          "There is no specific distance",
          "Not within 100 feet",
          "Not within 200 feet",
          "Not within 500 feet",
        ],
        correctIndex: 2,
        explanation:
          "Two hundred feet. West Virginia Code 17C-7-10 applies it to a motor truck registered for a gross weight of more than 8,000 pounds, a bus, special mobile equipment, or any vehicle towing another, following any of the same.",
        context:
          "The general rule around it is the ordinary one: no driver may follow another vehicle more closely than is reasonable and prudent, given the speeds, the traffic and the condition of the highway. The 200-foot figure is an additional floor for heavy vehicles.",
        trap: "The exceptions matter - it does not apply while overtaking, in a designated truck lane, in a marked no-passing zone, to military convoys, or to funeral processions.",
        excerptKey: "code-truck-200-feet",
        sourceLabel: "W. Va. Code 17C-7-10 - Following too closely",
        sourceUrl: code("17C-7-10"),
      },
      {
        id: "wv_s5_30",
        topic: "rules",
        question:
          "You are on a three-lane road with a marked center left-turn lane. When may you drive in that center lane?",
        choices: [
          "When preparing for a left turn",
          "When passing a slower vehicle",
          "Whenever the outer lanes are congested",
          "At any time, as long as you signal",
        ],
        correctIndex: 0,
        explanation:
          "Only in preparation for a left turn, unless the lane has been allocated to traffic moving in your direction and signposted to say so.",
        context:
          "The handbook makes the same point in its markings chapter: a center left-turn lane is reserved for left turns from either direction and is not to be used as a through lane or a passing lane. Never use a turning lane to overtake and pass.",
        trap: "Treating the center lane as an overflow lane in traffic is common and it puts you head-on with someone doing the same thing from the other direction.",
        excerptKey: "code-center-turn-lane",
        sourceLabel: "W. Va. Code 17C-7-9 - Driving on roadways laned for traffic",
        sourceUrl: code("17C-7-9"),
      },
      {
        id: "wv_s5_31",
        topic: "signs",
        question:
          "You are on an interstate and see a green sign with a black-and-yellow panel underneath it. What is the panel telling you?",
        choices: [
          "The exit is closed",
          "A lane is being removed at that fork or exit",
          "There is a rest area ahead",
          "The speed limit changes at the exit",
        ],
        correctIndex: 1,
        explanation:
          "A lane change ahead. The handbook says that where a through lane is removed the change usually happens at a fork or an exit, and that this is normally indicated by a black and yellow panel below the green and white overhead guide sign.",
        context:
          "Guide signs on an interstate are placed well in advance of the point where you have to leave, precisely so you can change lanes calmly instead of at the last moment.",
        trap: "A yellow panel on a green sign reads as decoration until you know it is a warning that your lane is about to end.",
        excerptKey: "guide-signs-colors",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VII, Planning Ahead",
        sourceUrl: hb(67),
      },
      {
        id: "wv_s5_32",
        topic: "parking",
        question:
          "Where does West Virginia forbid stopping on an interstate?",
        choices: [
          "Nowhere - the shoulder is available to any driver",
          "On the shoulder for anything except a disabled vehicle, and in an exit gore",
          "Only in a tunnel",
          "Only within 500 feet of an exit",
        ],
        correctIndex: 1,
        explanation:
          "Shoulders are for disabled vehicles, and the exit gore - the triangular area between the through lane and the exit ramp - is specifically named because a driver who has missed the exit may cut across it.",
        context:
          "The handbook lists the things people stop for and rules them out: changing drivers, reading a map, other non-emergency purposes. Those belong in a rest area or off the interstate. No parking is permitted on interstate shoulders, and parked vehicles may be towed.",
        trap: "The shoulder looks like a legitimate place to pull over for a minute. On an interstate it is not.",
        excerptKey: "interstate-shoulders",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VII, Stopping on an Interstate",
        sourceUrl: hb(69),
      },
      {
        id: "wv_s5_33",
        topic: "impairment",
        question:
          "Which of these is true about a one-ounce shot of 100-proof whiskey, a six-ounce glass of wine and a 12-ounce can of beer?",
        choices: [
          "The whiskey contains the most alcohol",
          "The beer contains the least alcohol",
          "They contain the same amount of alcohol",
          "The wine contains the most alcohol",
        ],
        correctIndex: 2,
        explanation:
          "The same. The handbook prints the three measures together precisely to head off the belief that switching to beer makes a difference.",
        context:
          "It also warns that alcohol affects the same person differently at different times - physical and emotional condition, other drugs, even how much food is in the stomach all change the effect.",
        trap: "\"I only had beer\" is the sentence this fact exists to answer.",
        excerptKey: "drink-equivalence",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter III, Driving Impaired or Under the Influence",
        sourceUrl: hb(31),
      },
      {
        id: "wv_s5_34",
        topic: "safety",
        question:
          "You are entering an interstate and there is no gap in the traffic by the end of the acceleration lane. What does the handbook say?",
        choices: [
          "Stop at the end of the acceleration lane and wait",
          "Force your way in, since merging traffic has the right-of-way",
          "Drive onto the shoulder beyond the acceleration lane and stop - as a last resort",
          "Reverse back up the ramp",
        ],
        correctIndex: 2,
        explanation:
          "Onto the shoulder beyond the end of the acceleration lane, and stop there. The handbook calls it a last resort, because entering the traffic stream from a standstill is hazardous.",
        context:
          "What it rules out first is stopping on the ramp or in the acceleration lane itself, where the driver behind you is accelerating to merging speed and does not expect a stationary car.",
        trap: "Stopping in the acceleration lane feels like the cautious choice and is the one the handbook forbids by name.",
        excerptKey: "interstate-no-stop-ramp",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VII, Entering an Interstate",
        sourceUrl: hb(68),
        commonlyMissed: true,
      },
      {
        id: "wv_s5_35",
        topic: "rightOfWay",
        question:
          "A vehicle in front of you has stopped at an intersection to let a pedestrian cross. May you pass it?",
        choices: [
          "Yes, if you can do it without entering the crosswalk",
          "Yes, if the pedestrian is on the other side of the road",
          "No - passing is prohibited when a vehicle ahead has stopped to allow a pedestrian to cross",
          "Yes, if you sound your horn first",
        ],
        correctIndex: 2,
        explanation:
          "No. It is one of the situations on the handbook's list of places where passing is prohibited, and the reason is that the stopped car is hiding the pedestrian from you.",
        context:
          "The same list rules out passing within 100 feet of an intersection, so at most intersections both prohibitions apply at once.",
        trap: "\"The pedestrian is on the other side\" is exactly the judgment you cannot make from behind a stopped vehicle.",
        excerptKey: "passing-prohibited-pedestrian",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Passing",
        sourceUrl: hb(59),
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
      "Thirty questions in the mix and at the difficulty of the real West Virginia knowledge test: signs, markings, traffic law and driving practice, drawn from the handbook the DMV writes the exam from. Nineteen right is a pass.",
    questions: [
      {
        id: "wv_s6_01",
        topic: "signs",
        question: "What does a pentagon-shaped sign warn of?",
        choices: [
          "A hospital ahead",
          "A school zone ahead, or a school crossing",
          "A five-way intersection",
          "A pedestrian crossing anywhere",
        ],
        correctIndex: 1,
        explanation:
          "The pentagon is the school sign. It warns of a school zone ahead or marks a school crossing, and the zone runs 125 feet along the abutting street from the school grounds.",
        context:
          "Inside that zone the maximum speed is 15 mph when children are present, and a speeding conviction there is six points - the same as reckless driving.",
        trap: "Pedestrian crossing warnings are their own sign, and in West Virginia they may be yellow-green rather than yellow.",
        excerptKey: "pentagon-school-speed",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Single Message Shaped Signs",
        sourceUrl: hb(44),
      },
      {
        id: "wv_s6_02",
        topic: "rules",
        question:
          "A broken white line separates you from the lane to your right. What does it mean?",
        choices: [
          "The lane to your right is closed",
          "You may change into that lane when it is safe",
          "The lane carries traffic in the opposite direction",
          "You may not cross the line",
        ],
        correctIndex: 1,
        explanation:
          "Broken white separates lanes running the same way and permits a lane change. Solid white between lanes of same-direction traffic means do not change lanes.",
        context:
          "White separates same-direction traffic and yellow separates opposing traffic. A solid white line also marks the edge of the pavement, which is what keeps you on the road at night and in bad weather.",
        trap: "The handbook adds a detail people forget: drive within the lines and never straddle them, except when changing lanes.",
        excerptKey: "broken-white",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Pavement Markings",
        sourceUrl: hb(51),
      },
      {
        id: "wv_s6_03",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light and an oncoming car is about to reach the intersection at roughly the same time as you. What should you do?",
        choices: [
          "Complete the turn quickly ahead of it",
          "Stop until it is safe for you to turn",
          "Edge into the intersection and force the gap",
          "Sound the horn and turn",
        ],
        correctIndex: 1,
        explanation:
          "Stop and wait. The handbook's turning rule says that if traffic is about to reach the intersection at approximately the same time, you stop until it is safe to turn.",
        context:
          "The left-turn yield is not softened by the green light, which permits you to enter the intersection but does not give you priority over oncoming traffic. Keep the front wheels straight while you wait.",
        trap: "Beating an oncoming car by a margin you have judged from a standing start is the commonest way a left turn goes wrong.",
        excerptKey: "row-left-turn",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Right-of-Way",
        sourceUrl: hb(59),
      },
      {
        id: "wv_s6_04",
        topic: "safety",
        question:
          "You are following another vehicle on a dry road in daylight. What is the minimum following distance?",
        choices: ["One second", "Two seconds", "Three to four seconds", "Six seconds"],
        correctIndex: 2,
        explanation:
          "Three to four seconds, counted from the moment the vehicle ahead passes a fixed object until you reach it.",
        context:
          "The handbook gives the counting words - one thousand one, one thousand two, one thousand three - and moves you to at least four seconds in the dark or in rain and at least six on ice or snow.",
        trap: "Two seconds is the figure most other manuals start from, and it is not the one West Virginia teaches.",
        excerptKey: "following-count",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Following Distance",
        sourceUrl: hb(57),
      },
      {
        id: "wv_s6_05",
        topic: "licensing",
        question:
          "What documents must a first-time applicant bring to the DMV?",
        choices: [
          "A birth certificate only",
          "Proof of identity, a Social Security number, and two proofs of West Virginia residency",
          "Proof of identity and one proof of residency",
          "A school report card and a parent's license",
        ],
        correctIndex: 1,
        explanation:
          "One proof of identity, your Social Security number, and two proofs of West Virginia residency, plus the DMV-DS-23P application. A proof of legal name change is needed if your name has ever changed.",
        context:
          "Documents with a PO Box are not acceptable, and a recurring document such as a utility bill cannot be more than 90 days old. The DMV scans everything and hands it back.",
        trap: "Two residency documents, not one, is the detail that sends people home. A learner who brings a single utility bill has to come back.",
        excerptKey: "must-be-licensed",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, First-Time Applicant",
        sourceUrl: hb(16),
      },
      {
        id: "wv_s6_06",
        topic: "signals",
        question:
          "What does a green arrow shown in a left-turn signal usually mean?",
        choices: [
          "You may turn left only after yielding to oncoming traffic",
          "Opposing traffic is stopped, and you may make the movement the arrow shows",
          "The turn is about to be prohibited",
          "You must turn left; going straight is not permitted",
        ],
        correctIndex: 1,
        explanation:
          "The handbook says a green arrow in a left-turn signal usually means opposing traffic is stopped. It is the protected turn, in contrast with a circular green.",
        context:
          "A green arrow may be shown alone or alongside other indications, and drivers facing it may enter the intersection to make the movement the arrow shows. The yellow arrow that follows means the green arrow is ending.",
        trap: "Confusing the arrow with the circular green loses you the protection when you need it and wastes it when you have it.",
        excerptKey: "green-arrow",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Traffic Lights",
        sourceUrl: hb(49),
      },
      {
        id: "wv_s6_07",
        topic: "impairment",
        question:
          "West Virginia's Implied Consent Law means that as a licensed driver you have already agreed to what?",
        choices: [
          "A vehicle search at any traffic stop",
          "Taking the designated breath test if you are arrested for DUI",
          "Paying any fine imposed without a hearing",
          "An annual medical examination",
        ],
        correctIndex: 1,
        explanation:
          "To take the designated Breathalyzer for determining the alcohol content in your body if you are arrested for DUI. Refusing revokes the driving privilege for a year and up to life.",
        context:
          "The handbook argues the law protects the sober driver: a chemical test provides a medically accepted measure rather than an officer's impression, and without it some drivers would escape any consequence at all.",
        trap: "Many people assume implied consent is itself a penalty for having alcohol on your breath. It is a condition attached to holding a license.",
        excerptKey: "def-implied-consent",
        sourceLabel: "WV Driver's Licensing Handbook - Definitions",
        sourceUrl: hb(10),
      },
      {
        id: "wv_s6_08",
        topic: "speed",
        question: "What speed applies on an interstate when weather has made the road hazardous?",
        choices: [
          "The posted maximum still applies",
          "A speed that is reasonable and prudent for the existing conditions, which may be well below the posted maximum",
          "Exactly 45 mph",
          "The interstate minimum of 55 mph",
        ],
        correctIndex: 1,
        explanation:
          "A reasonable and prudent speed for the conditions. The handbook explicitly relieves you of the 55 mph interstate minimum when the weather or road conditions are bad.",
        context:
          "The basic speed law sits above every posted number in West Virginia. A limit is the highest speed permitted in good conditions, not a speed you are entitled to drive whatever the surface is doing.",
        trap: "Sticking to the minimum in a storm because you think it is required is a misreading. The handbook makes bad conditions an exception to it.",
        excerptKey: "interstate-min-55",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VII, Speeds on Interstates",
        sourceUrl: hb(69),
      },
      {
        id: "wv_s6_09",
        topic: "parking",
        question: "Which of these places may you legally park?",
        choices: [
          "On a crosswalk",
          "In front of a private driveway",
          "On a marked street 20 feet from a fire hydrant",
          "Within an intersection",
        ],
        correctIndex: 2,
        explanation:
          "Twenty feet clears the 15-foot hydrant rule. The other three are all on the prohibited list.",
        context:
          "The full list also covers sidewalks, wheelchair ramps and curb cuts, the traffic side of a parked vehicle, bridges, tunnels, controlled-access highways, and anywhere official signs prohibit it. A yellow-painted curb marks a no-parking zone.",
        trap: "Fifteen feet from a hydrant and 20 feet from a crosswalk are two different distances for two different things, and 20 feet from a hydrant is legal.",
        excerptKey: "prohibited-parking-list",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Prohibited Parking",
        sourceUrl: hb(55),
      },
      {
        id: "wv_s6_10",
        topic: "sharing",
        question:
          "You cannot see a truck driver's face in the truck's side mirror. What does that tell you?",
        choices: [
          "The mirror is misaligned",
          "You are in the truck's blind spot and the driver cannot see you",
          "You are far enough back to be safe",
          "The truck is about to turn",
        ],
        correctIndex: 1,
        explanation:
          "You are in the No-Zone. The handbook gives the mirror test as the easiest way to know: no reflection of the driver means no view of you.",
        context:
          "It is impossible to avoid a truck's blind spots completely, so the instruction is not to linger in them any longer than it takes to pass. Trucks are longer, heavier and need three times a car's stopping distance at 55 mph.",
        trap: "Sitting alongside a truck cab feels visible and is one of the worst places to be.",
        excerptKey: "no-zone-mirror",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, The \"No-Zone\"",
        sourceUrl: hb(62),
      },
      {
        id: "wv_s6_11",
        topic: "rules",
        question: "Before you change lanes, what does the handbook require?",
        choices: [
          "A mirror check only",
          "A signal only",
          "Mirrors, a head check over the shoulder for the blind spot, a look for others moving into the same lane, then signal and move",
          "A signal and a horn",
        ],
        correctIndex: 2,
        explanation:
          "All of it, and in that order. The mirror does not cover the blind spot, which is why the head check is a separate step.",
        context:
          "Two prohibitions go with it: do not change lanes in an intersection or at a railroad crossing, and stay within the speed limit while you are doing it.",
        trap: "The step people drop is the check for someone else heading for the same gap from the far lane.",
        excerptKey: "lane-change-steps",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Changing Lanes",
        sourceUrl: hb(58),
      },
      {
        id: "wv_s6_12",
        topic: "emergencies",
        question: "Your headlights fail on a dark, unlit highway. What does the handbook tell you to do?",
        choices: [
          "Try the parking lights, direction signals or emergency flashers and get off the roadway",
          "Continue at reduced speed to the next exit",
          "Stop immediately in the traffic lane",
          "Follow the vehicle ahead using its lights",
        ],
        correctIndex: 0,
        explanation:
          "Use whatever lights still work - parking lights, direction signals, hazard flashers - and get off the roadway.",
        context:
          "Where the highway is lit, the instruction is to get onto the shoulder or other available space as soon as you safely can. If every light has failed, stay on the roadway and slow down enough to pull off safely.",
        trap: "Stopping dead in a lane on an unlit road makes you invisible to the driver behind at exactly the moment your own lights have gone.",
        excerptKey: "headlights-fail",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, Headlights Fail",
        sourceUrl: hb(82),
      },
      {
        id: "wv_s6_13",
        topic: "signs",
        question: "What does a crossbuck sign mark?",
        choices: [
          "A crossroads ahead",
          "A railroad crossing",
          "A pedestrian crossing",
          "The end of a divided highway",
        ],
        correctIndex: 1,
        explanation:
          "The crossbuck is the X-shaped railroad crossing sign, black letters on white bars. A sign beneath it gives the number of tracks when there is more than one.",
        context:
          "Some crossings add electrical devices - bells, flashers and automatic gates. You must yield to all trains, and failing to stop when the lights are flashing or the barrier is down will get you a citation.",
        trap: "The circular yellow sign with the black X and RR is the advance warning further back up the road. The crossbuck is at the crossing itself.",
        excerptKey: "crossbuck",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Railroad Crossing Signs and Signals",
        sourceUrl: hb(49),
      },
      {
        id: "wv_s6_14",
        topic: "licensing",
        question:
          "What happens if your West Virginia driver's license has been expired for three years or more?",
        choices: [
          "You renew it online with a late fee",
          "You go through the full examination process as a first-time applicant",
          "You take a vision test only",
          "It renews automatically at your next birthday",
        ],
        correctIndex: 1,
        explanation:
          "Full retest. Anyone renewing a WV license, including a CDL, that has been expired for three years or more is required to retest and to provide all the documents a first-time applicant provides.",
        context:
          "The same three-year rule applies to an expired out-of-state license when you transfer it. A new resident with a valid, unexpired out-of-state license only needs the vision screening and the alcohol awareness course.",
        trap: "Three years is the cliff. Under it you renew; over it you start again.",
        excerptKey: "expired-three-years",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Expired Driver's License",
        sourceUrl: hb(17),
      },
      {
        id: "wv_s6_15",
        topic: "safety",
        question:
          "You are about to overtake and you would have to exceed the speed limit to complete the pass. What does the handbook say?",
        choices: [
          "Exceeding the limit briefly while passing is permitted",
          "If you have to speed to pass, you probably do not need to pass",
          "You may exceed the limit by up to 10 mph",
          "You may exceed the limit if the vehicle ahead is below the limit",
        ],
        correctIndex: 1,
        explanation:
          "The handbook's line is exactly that: decide whether passing is necessary, and if you have to speed to pass, you probably do not need to.",
        context:
          "It says the same thing again in the defensive driving chapter, and adds flatly that exceeding the speed limit when passing is illegal. There is no passing exemption in West Virginia.",
        trap: "Most drivers believe a brief overspeed while overtaking is tolerated. The handbook says twice that it is not.",
        excerptKey: "passing-if-you-speed",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Passing",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "wv_s6_16",
        topic: "rightOfWay",
        question:
          "Traffic on a through highway is approaching so closely that it would be an immediate hazard. You are at a stop sign entering that highway. What must you do?",
        choices: [
          "Enter, because you stopped first",
          "Stop, yield to the approaching traffic, then proceed when it is safe",
          "Enter and accelerate to match the traffic speed",
          "Wait for a driver to wave you out",
        ],
        correctIndex: 1,
        explanation:
          "Stop, yield, then go. The stop is required whether or not anything is coming; the yield is required for anything already in the intersection or approaching closely enough to be an immediate hazard.",
        context:
          "West Virginia Code 17C-9-3 puts it in exactly those terms, and adds that having yielded, the driver may then proceed. Stopping does not by itself purchase the right-of-way.",
        trap: "\"I stopped first\" is not a rule anywhere in West Virginia when you are the one facing the stop sign.",
        excerptKey: "row-entering-traffic",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Right-of-Way",
        sourceUrl: hb(59),
      },
      {
        id: "wv_s6_17",
        topic: "impairment",
        question:
          "What must be completed before a DUI-related revocation or suspension can be lifted?",
        choices: [
          "Payment of all outstanding fines only",
          "A prescribed Safety and Treatment program",
          "A defensive driving class",
          "A new road skills test",
        ],
        correctIndex: 1,
        explanation:
          "A prescribed Safety and Treatment program. The handbook says this applies any time a license is revoked or suspended for a DUI, before you are eligible to reinstate.",
        context:
          "The Interlock Program is separate: it lets a driver keep driving on a vehicle fitted with an ignition interlock, and it is mandatory where the driver has been revoked for two or more DUI-related offenses in a ten-year period.",
        trap: "A defensive driving class removes three points. It has nothing to do with a DUI reinstatement.",
        excerptKey: "dui-safety-treatment",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter III, Penalties for Driving Under the Influence",
        sourceUrl: hb(32),
      },
      {
        id: "wv_s6_18",
        topic: "signals",
        question: "When may you legally drive through a yellow light?",
        choices: [
          "Whenever you would have to brake hard to stop",
          "Only if your vehicle is already within the intersection",
          "For up to two seconds after it turns yellow",
          "Whenever no cross traffic is visible",
        ],
        correctIndex: 1,
        explanation:
          "The handbook's wording is narrow: you should only drive through a yellow light if the vehicle clearance is within the intersection. Yellow is the warning that red is coming.",
        context:
          "The statutory version says vehicular traffic facing a yellow signal is warned that red will follow immediately, and shall not enter or be crossing the intersection when the red is exhibited.",
        trap: "\"I could not have stopped safely\" is a defense people reach for after the fact, not the rule the handbook states.",
        excerptKey: "steady-yellow",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Traffic Lights",
        sourceUrl: hb(49),
      },
      {
        id: "wv_s6_19",
        topic: "rules",
        question:
          "You have finished a turn and your turn signal has not cancelled itself. What should you do?",
        choices: [
          "Leave it - other drivers will work it out",
          "Switch it off, because a signal left on tells other drivers something untrue",
          "Switch on the hazard lights instead",
          "Leave it on until the next intersection",
        ],
        correctIndex: 1,
        explanation:
          "Switch it off. The handbook says driving with turn signals on without intending to turn can create confusion, and the examiner marks an uncancelled signal on the road test.",
        context:
          "The road test scores turn signal use in both directions: failing to signal, and signaling when you should not. If the signal cancels automatically, you are expected to reactivate it when it is needed again.",
        trap: "A signal blinking for a mile is one of the reasons another driver pulls out in front of you.",
        excerptKey: "cancel-signal",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Driving Signals",
        sourceUrl: hb(53),
      },
      {
        id: "wv_s6_20",
        topic: "speed",
        question:
          "Where does the handbook tell you to slow down regardless of the posted limit?",
        choices: [
          "Only in a school zone",
          "Approaching an intersection or a curve, coming to the top of a hill, on a narrow road, and whenever conditions limit visibility or stopping distance",
          "Only when it is raining",
          "Only when a warning sign says so",
        ],
        correctIndex: 1,
        explanation:
          "The handbook gives a short list, and none of it depends on a sign: intersections, curves, hill crests, narrow roads, and anything that limits visibility or stopping distance.",
        context:
          "The statutory version adds railway grade crossings and a duty to drive at an appropriate reduced speed when approaching them. Both come from the same rule: speed must be reasonable and prudent for what is actually there.",
        trap: "Waiting for a sign to tell you is the habit this list exists to break.",
        excerptKey: "slow-down-situations",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Basic Speed Law",
        sourceUrl: hb(52),
      },
      {
        id: "wv_s6_21",
        topic: "sharing",
        question:
          "Where must a pedestrian walk on a road that has no sidewalk?",
        choices: [
          "On the right, with traffic",
          "On the left, facing oncoming traffic",
          "In the middle of the lane so drivers see them",
          "Either side, provided they wear light clothing",
        ],
        correctIndex: 1,
        explanation:
          "On the left, facing the oncoming traffic, and on the shoulder wherever there is one.",
        context:
          "The handbook's other pedestrian duties are to use crosswalks at intersections, look both ways before crossing, obey walk and don't-walk signals, and wear white or light-colored clothing or carry a light at night.",
        trap: "Walking with traffic is what feels natural and leaves you unable to see the vehicle that is about to reach you.",
        excerptKey: "pedestrian-walk-facing",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Sharing the Road with Pedestrians",
        sourceUrl: hb(60),
      },
      {
        id: "wv_s6_22",
        topic: "parking",
        question:
          "You have parked on a hill and set the parking brake. What else does the handbook suggest for an automatic transmission?",
        choices: [
          "Leave it in drive",
          "Put the selector in park",
          "Leave it in neutral",
          "Turn the wheels straight",
        ],
        correctIndex: 1,
        explanation:
          "Put the selector in park, to reinforce the parking brake. In a manual, use reverse on a downgrade and first gear on an upgrade.",
        context:
          "None of that replaces turning the front wheels. The wheels are what stop the car reaching the traffic if the brake and the transmission both let go.",
        trap: "Relying on the transmission alone is how parked cars end up in the road. The handbook treats it as a backup to the brake, not a substitute.",
        excerptKey: "parking-hills-gear",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Parking on Hills",
        sourceUrl: hb(56),
      },
      {
        id: "wv_s6_23",
        topic: "emergencies",
        question:
          "A vehicle is coming toward you in your lane. What does the handbook tell you to do?",
        choices: [
          "Move to the right, slow down, sound your horn and flash your headlights",
          "Move into the lane that vehicle has left",
          "Brake hard and stay in your lane",
          "Accelerate past it on the left",
        ],
        correctIndex: 0,
        explanation:
          "Right, slow, horn, lights. And specifically not into the lane the other vehicle has left, because the driver may realize the mistake and swerve back into it.",
        context:
          "The handbook treats an oncoming vehicle in your lane as a situation with several causes - a sleeping driver, a drunk one, one recovering from a drop off the pavement, one overtaking - and the response is the same for all of them.",
        trap: "Steering into the gap the other car has vacated is the obvious move and the one the handbook rules out by name.",
        excerptKey: "oncoming-in-your-lane",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, Vehicle Approaching in Your Lane",
        sourceUrl: hb(82),
      },
      {
        id: "wv_s6_24",
        topic: "licensing",
        question:
          "What does the handbook say the DMV can do if it has good cause to believe a licensed driver is no longer competent to drive?",
        choices: [
          "Nothing until the license expires",
          "Require a medical, written or driving examination, after which the license may be suspended, revoked or restricted",
          "Suspend the license without any examination",
          "Refer the matter to the courts",
        ],
        correctIndex: 1,
        explanation:
          "Re-examination. The Commissioner may require a medical, written or driving examination, and afterwards the license may be suspended, revoked or made restricted. Refusing the test is itself grounds for suspension or revocation.",
        context:
          "Anyone can start the process for an immediate family member by writing to the DMV Medical Section with the person's name, address, date of birth and license number. A physician or a law enforcement officer may submit the information directly.",
        trap: "The process is not punitive and is not a court matter. It is an administrative re-examination.",
        excerptKey: "must-be-licensed",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter II, Re-examination of Drivers",
        sourceUrl: hb(26),
      },
      {
        id: "wv_s6_25",
        topic: "signs",
        question:
          "A diamond-shaped sign shows two lanes merging into one, with the right lane ending. What should you expect?",
        choices: [
          "Traffic may be moving into your lane, so be ready to change speed or lane",
          "The road ahead is closed",
          "A passing lane is beginning",
          "The speed limit is about to drop",
        ],
        correctIndex: 0,
        explanation:
          "It warns that a lane is ending, so the traffic in it has to come into yours. The symbol is reversed when the left lane is the one ending.",
        context:
          "The handbook pairs this with the added-lane sign, which tells you that a lane is joining and that traffic may be moving into your lane - the same instruction from the other direction. Both ask you to be ready to change your speed or your lane to avoid a crash.",
        trap: "A merge warning is not the same as a lane-closure sign in a work zone, which is orange and tells you to move over well in advance.",
        excerptKey: "diamond-warning",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Diamond & Warning Signs",
        sourceUrl: hb(46),
      },
      {
        id: "wv_s6_26",
        topic: "safety",
        question:
          "Wind, rain and poor visibility aside, what does West Virginia Code 17C-15-2 require during adverse conditions?",
        choices: [
          "Hazard lights on",
          "Headlights on",
          "Speed reduced by a fixed amount",
          "Use of the shoulder",
        ],
        correctIndex: 1,
        explanation:
          "Headlights on. The handbook cites the section by name in its interstate chapter, saying headlights must be turned on during adverse conditions.",
        context:
          "The statute itself lists the triggers: sunset to sunrise, fog, smoke, rain or other unfavorable atmospheric conditions, or any time there is not enough light to make people and vehicles clearly discernible at 500 feet.",
        trap: "Hazard lights while moving are for a disabled or exceptionally slow vehicle, not a substitute for headlights in rain.",
        excerptKey: "adverse-headlights-law",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VII, Adverse Conditions",
        sourceUrl: hb(69),
      },
      {
        id: "wv_s6_27",
        topic: "rightOfWay",
        question:
          "You are being passed by another vehicle on a two-lane road. What does the handbook ask of you?",
        choices: [
          "Speed up so the pass is shorter",
          "Move toward the center line to make your position clear",
          "Check your mirror, slow down, and keep as close to the right side of the road as possible",
          "Sound your horn to acknowledge the pass",
        ],
        correctIndex: 2,
        explanation:
          "Make the pass easy: check the mirror, know what is happening around you, slow down, and hold well to the right.",
        context:
          "The statute puts a duty on you as well - the driver of an overtaken vehicle gives way to the right on an audible signal and may not increase speed until the other vehicle has completely passed.",
        trap: "Speeding up when someone starts to pass is the reaction that turns a legal overtake into a head-on, and it is specifically forbidden.",
        excerptKey: "row-given-not-taken",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Traffic Situations",
        sourceUrl: hb(76),
      },
      {
        id: "wv_s6_28",
        topic: "rules",
        question:
          "The road test scores you on where you stop behind another vehicle. What is the standard?",
        choices: [
          "One car length back",
          "Close enough to see the rear tires of the vehicle ahead touching the road",
          "Two car lengths back",
          "Whatever leaves room for a pedestrian to walk between",
        ],
        correctIndex: 1,
        explanation:
          "Seeing the rear tires of the vehicle ahead is the handbook's gap. It leaves enough room to pull around if that vehicle breaks down, and enough to absorb a shunt from behind.",
        context:
          "The examiner checks it at intersections and at turns, alongside stopping behind the stop line, crosswalk or stop sign and keeping the front wheels straight.",
        trap: "Car lengths are not the measure anywhere in this handbook. The tire line is the test, and it works whatever you are driving.",
        excerptKey: "road-test-stop-gap",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IV, Road Test",
        sourceUrl: hb(39),
      },
      {
        id: "wv_s6_29",
        topic: "sharing",
        question:
          "You are passing a motorcycle on a two-lane road. How much of the other lane should you use?",
        choices: [
          "Half of it, since a motorcycle is narrow",
          "All of it - go all the way into the other lane",
          "Only as much as your mirrors need",
          "None - stay in your own lane and pass wide of the rider",
        ],
        correctIndex: 1,
        explanation:
          "All the way into the other lane. The rider is entitled to the whole lane and may need to swerve within it to avoid something you cannot see.",
        context:
          "The handbook adds the part people cut short: once you have passed, wait until you are well down the road before moving back. And follow a motorcycle further back than you would a car, because it can stop far more quickly than you can.",
        trap: "Sharing the lane with a motorcycle to save a second is the maneuver the handbook is arguing against, and the rider has nowhere to go when it goes wrong.",
        excerptKey: "motorcycle-passing",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Following and Passing Motorcycles",
        sourceUrl: hb(62),
      },
      {
        id: "wv_s6_30",
        topic: "emergencies",
        question:
          "Your engine temperature warning light comes on in slow traffic. What does the handbook tell you to do?",
        choices: [
          "Pull off the road, turn the engine off, and do not remove the radiator cap until it has cooled",
          "Remove the radiator cap and top up the coolant at once",
          "Keep driving to the nearest garage with the heater on",
          "Switch the engine off and coast to a stop in the lane",
        ],
        correctIndex: 0,
        explanation:
          "Off the road, engine off, and leave the radiator cap alone until everything has cooled. A hot cooling system is under pressure and taking the cap off sprays scalding coolant.",
        context:
          "The handbook also gives a way of avoiding it: in slow-moving traffic you can shift into neutral and briefly race the engine during stops, which speeds up the fan and the water pump.",
        trap: "Topping up straight away is the instinct that causes burns. Cooling has to come first.",
        excerptKey: "overheating",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, Overheating Engine",
        sourceUrl: hb(81),
      },
    ],
  },
];
