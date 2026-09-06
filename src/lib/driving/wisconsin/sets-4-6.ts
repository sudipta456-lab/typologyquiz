import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets 1 to 3: the Wisconsin Motorists' Handbook,
// 2026, form BDS126, with Wisconsin Statutes chapters 343 and 346 and three
// wisconsindot.gov pages filling the gaps the handbook leaves - the parking
// distances, the speed ladder above 35 mph, the 45-second dead-red rule, the
// move-over law's own terms, and the retest rules.
//
// Set 5 is where Wisconsin's own traps live: the 40-foot roundabout yield that
// exists almost nowhere else, the three different stopping distances for three
// different stopped vehicles, the parking numbers the handbook never prints, the
// farm-equipment carve-out from the double-yellow exception, and absolute
// sobriety versus the 0.08 figure every learner has already memorised.
//
// Set 6 runs 30 questions with no scaffolding beyond the standard fields,
// weighted the way the real 50-question WisDOT test is: rules of the road and
// right of way carrying the most, signs and signals next, then the licensing,
// impairment and sharing material.
const HB = "https://wisconsindot.gov/Documents/dmv/shared/bds126-motorists-handbook.pdf";
/** Printed page number to a PDF page anchor - the book's page 1 is PDF page 5. */
const hb = (page: number) => `${HB}#page=${page + 4}`;
const stat = (s: string) => `https://docs.legis.wisconsin.gov/document/statutes/${s}`;
const KNOWLEDGE =
  "https://wisconsindot.gov/Pages/dmv/teen-driver/teen-hw-aply/knowledge.aspx";
const GDL = "https://wisconsindot.gov/Pages/dmv/teen-driver/yr-frst-lcns/gdlfaqs.aspx";
const DDLAW = "https://wisconsindot.gov/Pages/safety/education/drunk-drv/ddlaw.aspx";

export const wisconsinSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "A second exam-level set, weighted toward the parts of the Wisconsin handbook people skim: licensing penalties, work zones, special lanes, winter driving and the rules about stopped vehicles.",
    questions: [
      {
        id: "wi_s4_01",
        topic: "licensing",
        question:
          "Your Wisconsin probationary licence has GDL restrictions on it and you are convicted of a moving violation in month three. What happens?",
        choices: [
          "Nothing, provided you pay the fine",
          "Your licence is revoked for a year",
          "The restrictions end early and you go straight to a regular licence",
          "The nine months of restrictions are extended by six months",
        ],
        correctIndex: 3,
        explanation:
          "A moving-violation conviction extends the restricted period by six months. So does breaching the restrictions themselves, and so does any suspension or revocation.",
        context:
          "The graduated restrictions run for the first nine months unless you turn 18 first, and cover both hours and passengers. They do not require a new licence when they end. Alongside the extension sits the doubling of demerit points on a second and later conviction, which is how a probationary driver reaches the 12-point threshold quickly.",
        trap: "Paying the fine settles the ticket, not the licence consequence. The extension follows the conviction automatically.",
        excerptKey: "prob-gdl-nine",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 2.C Probationary License",
        sourceUrl: hb(7),
      },
      {
        id: "wi_s4_02",
        topic: "rules",
        question:
          "A lane on a Wisconsin highway is marked with a white diamond on the sign and on the pavement. What does that tell you?",
        choices: [
          "It is a reserved lane, illegal to use unless you are the vehicle type named",
          "It is a passing lane open to all traffic",
          "It is a shared centre turn lane",
          "It is a flex lane open at busy times",
        ],
        correctIndex: 0,
        explanation:
          "The white diamond marks a reserved lane - buses, bikes, car pools - and it is illegal to travel in one unless you are operating that kind of vehicle.",
        context:
          "There is one narrow allowance: you may enter a reserved lane if you need to cross it to turn within the next half block, and if a bicyclist is in it you move behind them and turn once it is safe. Some reserved lanes carry hours, so a sign reading buses and four-rider car pools only, Monday to Friday, 6 a.m. to 9 a.m., is unrestricted outside that window.",
        trap: "Bus and bike lanes are sometimes painted red, green or grey, which makes the colour rather than the diamond the memorable feature. The diamond is the reliable marker.",
        excerptKey: "lane-reserved",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.C Special Lanes",
        sourceUrl: hb(37),
      },
      {
        id: "wi_s4_03",
        topic: "signs",
        question:
          "A yellow diamond shows two arrows curving away from a central line, with a rectangular sign beneath reading DIVIDED HIGHWAY. What is ahead?",
        choices: [
          "A road that narrows to one lane",
          "A junction with a major road",
          "A one-way street",
          "Opposing traffic separated by a physical barrier",
        ],
        correctIndex: 3,
        explanation:
          "It warns that the road ahead splits, with opposing traffic separated by a physical barrier such as a guardrail.",
        context:
          "The distinction matters beyond navigation. A divided highway is the one place Wisconsin excuses you from stopping for a school bus on the far side, and the handbook's definition of a divided highway - a barrier between lanes going opposite directions - is what makes that exception narrow. A separate warning sign, 2-Way Traffic, marks the reverse case where a one-way road becomes two-way.",
        trap: "The end-of-divided-highway situation is the dangerous one, because a driver used to a barrier is suddenly facing oncoming traffic.",
        excerptKey: "signs-divided-highway",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.A Warning",
        sourceUrl: hb(22),
      },
      {
        id: "wi_s4_04",
        topic: "safety",
        question:
          "You are driving on a Wisconsin freeway in falling snow. What does the handbook say about cruise control?",
        choices: [
          "Use it to keep a steady speed",
          "Use it only in the right-hand lane",
          "Do not use it on slippery roads",
          "It makes no difference either way",
        ],
        correctIndex: 2,
        explanation:
          "Cruise control comes off on slippery roads. It keeps feeding power to a wheel that has lost traction, which is exactly the wrong response to a skid.",
        context:
          "The winter list around it is short and specific: clear snow and ice off every part of the car including lamps, mirrors and plates; drive slowly with extra room in front; turn the headlights on and the high beams off; and give a working snowplough at least 200 feet. Bridges and overpasses freeze before the rest of the road.",
        trap: "A steady speed is exactly what cruise control cannot deliver on ice, because it responds to a spinning wheel by spinning it faster.",
        excerptKey: "winter-no-cruise",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 7.C Winter",
        sourceUrl: hb(45),
      },
      {
        id: "wi_s4_05",
        topic: "impairment",
        question:
          "What is the alcohol concentration at which a Wisconsin driver aged over 21 with no prior convictions commits an offence?",
        choices: ["0.02", "0.05", "0.08", "0.10"],
        correctIndex: 2,
        explanation:
          "0.08 is the adult threshold in Wisconsin. Below it you can still be prosecuted for driving under the influence if your ability to drive is impaired.",
        context:
          "Three different numbers apply to three different drivers. Under 21: absolute sobriety, any detectable alcohol. Adults generally: 0.08. Drivers with three or more prior OWI convictions: 0.02. On top of all of them sits the impairment offence, which turns on whether you were less able to control the vehicle safely, not on a reading.",
        trap: "Being under 0.08 is not a safe harbour. WisDOT points at research showing that some driving skills are affected by the smallest amounts of alcohol.",
        excerptKey: "st-absolute-sobriety",
        sourceLabel: "WisDOT - Drunk driving law",
        sourceUrl: DDLAW,
      },
      {
        id: "wi_s4_06",
        topic: "rightOfWay",
        question:
          "A car ahead of you has stopped at a mid-block crosswalk to let a pedestrian across. What may you not do?",
        choices: [
          "Overtake and pass it",
          "Wait behind it",
          "Sound your horn",
          "Signal and wait",
        ],
        correctIndex: 0,
        explanation:
          "Wisconsin forbids overtaking a vehicle that has stopped to let someone cross. The stopped car is hiding the pedestrian from you and from everyone behind.",
        context:
          "The underlying duty is in the same statute: at an uncontrolled intersection or crosswalk you yield to a pedestrian crossing within a marked or unmarked crosswalk. Wisconsin's crosswalks are not only at corners - the handbook notes they can sit mid-block - so the marking, not the junction, is what you look for.",
        trap: "The stopped car looks like an obstruction to get around. It is a screen with a person walking out from behind it.",
        excerptKey: "st-ped-crosswalk",
        sourceLabel: "Wisconsin Statutes Section 346.24",
        sourceUrl: stat("346.24"),
        commonlyMissed: true,
      },
      {
        id: "wi_s4_07",
        topic: "signals",
        question:
          "A steady red arrow points left at a Wisconsin intersection and the through lanes have a green. What may you do?",
        choices: [
          "Turn left after stopping, as on a red light",
          "Turn left, since the through movement has a green",
          "Come to a full stop and wait for the arrow to turn green",
          "Treat it as a flashing yellow arrow",
        ],
        correctIndex: 2,
        explanation:
          "A steady red arrow means stop and wait for the green. It removes the permission a plain red light would have given you.",
        context:
          "The arrows form a ladder. Steady green arrow: protected, conflicting movements held. Flashing yellow arrow: turn after yielding. Steady yellow arrow: the protected phase is ending, stop if you safely can. Steady red arrow: stop and wait. A flashing red arrow, by contrast, works like a flashing red light - full stop, then go when safe.",
        trap: "A green in the through lanes says nothing about your turn. The arrow governs your movement and only yours.",
        excerptKey: "signal-red-arrow",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(32),
      },
      {
        id: "wi_s4_08",
        topic: "sharing",
        question:
          "You come up behind a herd of cattle being moved along a rural Wisconsin road. What should you do?",
        choices: [
          "Sound your horn to move them along",
          "Pass on the shoulder",
          "Slow down, keep a safe distance and yield to them",
          "Flash your headlights and continue",
        ],
        correctIndex: 2,
        explanation:
          "Wisconsin tells you to yield the right of way to livestock on or along the highway, slow down and keep your distance. The horn stays untouched.",
        context:
          "The reasoning is in the same passage: a sudden noise scares animals, and a scared animal ends up somewhere unpredictable, often against your car. The rural section covers the same ground for machinery - farm equipment may be slow, wide, and without brake lights or turn signals, and the operator may not hear or see you coming.",
        trap: "Every other slow obstruction on the road responds to a horn. Livestock respond by scattering, which is worse than waiting.",
        excerptKey: "farm-livestock",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 7.D Farm Safety/Rural Driving",
        sourceUrl: hb(45),
      },
      {
        id: "wi_s4_09",
        topic: "parking",
        question:
          "How close to a private driveway entrance may you park in Wisconsin, where no sign says otherwise?",
        choices: ["No closer than 4 feet", "No closer than 10 feet", "No closer than 15 feet", "There is no set distance"],
        correctIndex: 0,
        explanation:
          "Four feet from the entrance to an alley, private road or driveway. It is the smallest of Wisconsin's parking distances and the one people guess highest on.",
        context:
          "The set runs 4 feet from a driveway or alley, 10 feet from a fire hydrant, and 15 feet from the near limits of a crosswalk. Each of them yields to a posted sign demanding more. None of them appears anywhere in the handbook, which mentions only yellow kerb markings and hydrants.",
        trap: "Guessing 10 or 15 feet is the natural instinct because those are the numbers attached to hydrants and crosswalks. The driveway figure is deliberately small.",
        excerptKey: "st-park-driveway-4",
        sourceLabel: "Wisconsin Statutes Section 346.53(4)",
        sourceUrl: stat("346.53"),
      },
      {
        id: "wi_s4_10",
        topic: "rules",
        question:
          "Traffic in a Wisconsin flex lane shows a yellow X above it. What does that mean?",
        choices: [
          "The lane is open",
          "The lane is closed and may not be entered",
          "The lane is reserved for trucks",
          "The lane is closing and you should merge into a general purpose lane",
        ],
        correctIndex: 3,
        explanation:
          "A yellow X is the warning phase. The lane is closing, and you move into the ordinary lanes before the signal turns red.",
        context:
          "Flex lanes let a paved shoulder be used as a travel lane at busy times, separated by a solid yellow line, with lane-control signals overhead. Green arrow means open, yellow X means merge, red X means closed. Large trucks may never use the flex lane. Wisconsin uses the same three signals on reversible lanes, where each lane has its own operating hours.",
        trap: "Yellow is the one that requires action. Waiting for the red X leaves you merging into a lane whose drivers are already past you.",
        excerptKey: "lane-flex",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.C Special Lanes",
        sourceUrl: hb(38),
      },
      {
        id: "wi_s4_11",
        topic: "emergencies",
        question:
          "You have hit a deer on a Wisconsin road and the animal is dead at the roadside. What does the handbook tell you to do?",
        choices: [
          "Remove the deer yourself",
          "Leave it and drive on, with no further steps",
          "Call the police so they can issue a tag, and record the details",
          "Report it to the DMV within ten days",
        ],
        correctIndex: 2,
        explanation:
          "Call the police so a tag can be issued, and record the time, place and circumstances for insurance and crash reporting. Check the car is still safe to drive.",
        context:
          "Wisconsin adds an unusual detail: if you hit a deer, you may keep it, and if you do not want it, the next motorist may. Either way the police need to know where it is. Deer are most active from sunset to sunrise, and the handbook tells you to watch for the reflection of your headlights in their eyes and to expect more than one.",
        trap: "Nothing about a deer strike is automatic. The tag is a police function, and \"drive on\" leaves a carcass in the road for the next driver.",
        excerptKey: "deer-active",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 6.E Watch for Deer",
        sourceUrl: hb(43),
      },
      {
        id: "wi_s4_12",
        topic: "speed",
        question:
          "You are on a Wisconsin expressway - four lanes, a median, but some at-grade access remains. What is the maximum posted limit?",
        choices: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctIndex: 1,
        explanation:
          "Sixty-five on an expressway. Seventy applies to a freeway, and to the portion of an expressway that gives preference to through traffic by using interchanges only.",
        context:
          "Wisconsin's definitions turn on access control, not on lane count. A freeway limits access to interchanges; an expressway uses interchanges but may also limit at-grade access to selected public roads and driveways. Neither figure takes effect unless the department has posted signs giving notice of it.",
        trap: "Both roads look identical from the driver's seat at speed. The posted sign is what you obey, and it is the only reliable guide.",
        excerptKey: "st-speed-expressway-65",
        sourceLabel: "Wisconsin Statutes Section 346.57(4)(gm)1.",
        sourceUrl: stat("346.57"),
      },
      {
        id: "wi_s4_13",
        topic: "licensing",
        question:
          "You are 16, hold a Wisconsin instruction permit, and want to practise driving after dark. Who must be in the passenger seat?",
        choices: [
          "Any licensed driver aged 19 or over",
          "A parent or guardian, whatever their age",
          "A qualified instructor, or a licensed driver aged at least 25 with two years' experience",
          "Nobody - the night restriction applies only to probationary licences",
        ],
        correctIndex: 2,
        explanation:
          "After dark the supervisor bar rises to a qualified instructor or a licensed driver of at least 25 with two years of licensed experience.",
        context:
          "In daylight the requirement is two years of licensed experience plus a valid regular licence, with the person being 19 or older if they are an instructor, parent, guardian or spouse, and 21 or older otherwise. If you are 16 or over, one additional licensed person aged 25 or more with two years' experience may ride in a seat other than the front.",
        trap: "Three different ages attach to this one rule - 19, 21 and 25 - and only the 25 applies after dark.",
        excerptKey: "permit-darkness",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 2.B Instruction Permit",
        sourceUrl: hb(5),
        commonlyMissed: true,
      },
      {
        id: "wi_s4_14",
        topic: "signs",
        question:
          "You are on a Wisconsin freeway and see a tall thin green sign reading WEST 12 MILE 216.2. What is it for?",
        choices: [
          "It shows the distance to the next exit",
          "It marks the county boundary",
          "It is a speed limit reminder",
          "It gives your position on the road, which helps emergency response",
        ],
        correctIndex: 3,
        explanation:
          "It is a mile marker, also called a reference marker. It tells you the direction of travel, the route number and the mile, which is exactly what an emergency dispatcher needs.",
        context:
          "Wisconsin places these every one to two tenths of a mile, on the right side of the road or in the median. The handbook says plainly that they improve emergency response times to highway incidents. Knowing how to read one - direction, route, mile - is more useful than any other sign on a rural freeway when something goes wrong.",
        trap: "It looks like a distance sign because it carries a number. The number is where you are, not how far you have to go.",
        excerptKey: "signs-mile-marker",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.F Mile Marker",
        sourceUrl: hb(28),
      },
      {
        id: "wi_s4_15",
        topic: "safety",
        question:
          "The Wisconsin handbook names one thing that doubles a teen driver's chance of a crash. What is it?",
        choices: [
          "Driving at night",
          "Driving an unfamiliar car",
          "Having another teenager in the vehicle",
          "Driving in rain",
        ],
        correctIndex: 2,
        explanation:
          "Another teen passenger doubles the crash risk. That figure is why Wisconsin's graduated licence restricts who can ride with you in the first nine months.",
        context:
          "Between 5 a.m. and midnight a restricted driver may carry immediate family members plus one qualifying supervising adult plus at most one other person. The restrictions are framed in the handbook as a way to reduce distractions for new drivers and limit the number of people in the car.",
        trap: "The passenger restriction reads like an arbitrary rule until you see the number behind it. Doubling is not a small effect.",
        excerptKey: "crash-teen-passenger",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 8.A Avoiding Crashes",
        sourceUrl: hb(46),
      },
      {
        id: "wi_s4_16",
        topic: "rules",
        question:
          "You are in the left-hand lane of a Wisconsin roundabout with two lanes. Which movements is that lane generally for?",
        choices: [
          "Right turns only",
          "Left turns, U-turns and, where marked, through traffic",
          "Any movement you choose",
          "Through traffic only",
        ],
        correctIndex: 1,
        explanation:
          "The left lane serves left turns and U-turns, and at some approaches through traffic as well. The pavement markings and signs at that particular roundabout decide it.",
        context:
          "Wisconsin's rule is that lane choice is made before you enter, using the signs above the approach: generally left lane for left, right lane for the next right, middle lane for straight ahead. Once inside you may not change lanes. Bicyclists may either take the travel lane through the roundabout or leave the roadway and use the crosswalk.",
        trap: "Roundabout lane assignments are not identical everywhere, so a habit learned at one is not a rule at the next. Read the approach signs.",
        excerptKey: "roundabout-lane-choice",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 6.A Roundabouts",
        sourceUrl: hb(39),
      },
      {
        id: "wi_s4_17",
        topic: "impairment",
        question:
          "Wisconsin treats one thing as equivalent to operating while impaired, regardless of how you feel. What?",
        choices: [
          "Any amount of a controlled substance",
          "Taking any prescription medicine",
          "Driving after fewer than six hours of sleep",
          "Carrying an unopened bottle of alcohol",
        ],
        correctIndex: 0,
        explanation:
          "Any amount of a controlled substance is the same as operating impaired in Wisconsin. There is no threshold and no self-assessment involved.",
        context:
          "The statute backs it with a separate offence for driving with a detectable amount of a restricted controlled substance in your blood. Prescription and non-prescription drugs are treated on their effects rather than their legality - if the label warns against operating heavy machinery, that includes your car.",
        trap: "The alcohol model, with its thresholds and gradations, does not transfer. For controlled substances the number that matters is any.",
        excerptKey: "controlled-substance",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 9.A Alcohol, Drugs and Driving",
        sourceUrl: hb(49),
      },
      {
        id: "wi_s4_18",
        topic: "rightOfWay",
        question:
          "Two vehicles arrive at an uncontrolled Wisconsin intersection at about the same time, both at lawful speeds. Who yields?",
        choices: [
          "The driver on the right yields to the driver on the left",
          "The driver on the left yields to the driver on the right",
          "The driver on the narrower road yields",
          "Whichever driver is turning yields",
        ],
        correctIndex: 1,
        explanation:
          "The driver on the left yields to the driver on the right. It is the same right-hand principle as the four-way stop tie-breaker, written from the other side.",
        context:
          "Wisconsin's handbook warns against reading this as a general law of the road: do not assume the vehicle on the right always goes first, because each situation is different. The statutory rule applies to two vehicles approaching at approximately the same time, and it is displaced wherever a sign, a signal, an officer, an emergency vehicle or a through highway says otherwise.",
        trap: "Restating the rule backwards is the classic error, and both versions sound equally plausible until you place yourself in one of the cars.",
        excerptKey: "st-row-right",
        sourceLabel: "Wisconsin Statutes Section 346.18(1)",
        sourceUrl: stat("346.18"),
      },
      {
        id: "wi_s4_19",
        topic: "licensing",
        question:
          "Who may sign as the adult sponsor for a Wisconsin driver licence application by someone under 18?",
        choices: [
          "Any adult over 21",
          "A parent, step-parent or legal guardian",
          "Any licensed driver who knows the applicant",
          "The driver education instructor",
        ],
        correctIndex: 1,
        explanation:
          "A parent, step-parent or legal guardian signs, and by signing accepts legal and financial responsibility for what the young driver does.",
        context:
          "Where the applicant does not live with a parent or guardian, the handbook widens the list to a grandparent, an aunt or uncle, a sibling or spouse aged 18 or over, or a foster parent. A sponsor may withdraw sponsorship at any time, and you keep needing one through the probationary phase until you turn 18. The sponsor also verifies your 50 hours of practice.",
        trap: "The instructor signs the driver education certification on the same form. That is a different signature with a different meaning.",
        excerptKey: "permit-who",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 2.A Sponsorship",
        sourceUrl: hb(3),
      },
      {
        id: "wi_s4_20",
        topic: "sharing",
        question:
          "You are on a three-lane Wisconsin freeway and a police car is stopped on the right shoulder with its lights flashing. What does the law require?",
        choices: [
          "Sound your horn as a warning to the officer",
          "Stop until the officer waves you past",
          "Move out of the lane nearest the police car and stay there until you are past",
          "Slow to half the posted speed limit",
        ],
        correctIndex: 2,
        explanation:
          "Where the road has more than one lane in your direction and you can change safely, you move over and stay out of the adjacent lane until you are clear.",
        context:
          "The handbook states the same duty and adds that it is the law, not a courtesy. The statute is triggered by an emergency or roadside service vehicle, or a disabled vehicle, on or within 12 feet of the roadway. Slowing down is the alternative, and it applies where there is only one lane in your direction or a lane change cannot be made safely.",
        trap: "Slowing while staying in the adjacent lane is the half-measure. Where a safe lane change is available, moving over is what the statute asks for.",
        excerptKey: "st-move-over-lane",
        sourceLabel: "Wisconsin Statutes Section 346.072(1m)(a)",
        sourceUrl: stat("346.072"),
        commonlyMissed: true,
      },
      {
        id: "wi_s4_21",
        topic: "emergencies",
        question:
          "A front tyre blows out at speed on a Wisconsin highway. What is your first move?",
        choices: [
          "Brake hard to stop as quickly as possible",
          "Hold the wheel to keep the car straight and ease off the gas",
          "Steer immediately for the shoulder",
          "Switch off the ignition",
        ],
        correctIndex: 1,
        explanation:
          "Grip the wheel, hold your line, and let the speed fall away gradually. Only when it is safe do you move to the side of the road.",
        context:
          "Every roadside-emergency drill in the Wisconsin handbook has the same shape: stabilise the car first, lose speed gradually, then leave the road. Braking hard or steering sharply on a blown tyre asks the remaining three for grip they cannot supply, and the car goes where the failed corner points it.",
        trap: "Both instincts - brake and steer - are the two things that turn a blowout into a loss of control.",
        excerptKey: "blowout",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 8.C Roadside Emergencies",
        sourceUrl: hb(48),
      },
      {
        id: "wi_s4_22",
        topic: "signals",
        question:
          "You are at a green arrow pointing right in Wisconsin. What still requires your attention?",
        choices: [
          "Pedestrians in the crosswalk",
          "Oncoming traffic, which may have a green as well",
          "Traffic behind you",
          "Nothing - a green arrow is fully protected",
        ],
        correctIndex: 0,
        explanation:
          "The arrow holds conflicting vehicles, not people. Wisconsin's own wording on the green arrow finishes with a reminder to watch for pedestrians.",
        context:
          "The statutory version says the same thing at more length: a driver facing a green arrow may make the movement shown but yields to pedestrians, bicyclists and riders lawfully within a crosswalk and to other traffic lawfully using the intersection. A protected turn protects you from vehicles coming the other way, and from nothing else.",
        trap: "\"Protected\" gets read as \"clear\". The crosswalk you are turning across is very often showing a walk signal at the same moment.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(33),
      },
      {
        id: "wi_s4_23",
        topic: "speed",
        question:
          "You are in the left lane of a Wisconsin freeway travelling noticeably slower than the traffic behind you. What does the law say?",
        choices: [
          "You are within your rights as long as you are at the speed limit",
          "You must not drive so slowly as to impede the normal and reasonable movement of traffic",
          "The left lane has no minimum speed",
          "Slower drivers have priority in any lane",
        ],
        correctIndex: 1,
        explanation:
          "Wisconsin has a minimum-speed rule. Driving slowly enough to impede the normal and reasonable movement of traffic is an offence in its own right.",
        context:
          "The handbook puts it in practical terms: going too slow can cause vehicles to back up behind you and cause a crash, and either extreme can earn a ticket. The remedy is to keep right - the far-right lane of a multi-lane road is where slower traffic belongs, and the far-left lane is for overtaking.",
        trap: "Being at or under the limit is not a complete answer. The offence is about the relationship between your speed and the traffic, not about the sign.",
        excerptKey: "st-minimum-speed",
        sourceLabel: "Wisconsin Statutes Section 346.59(1)",
        sourceUrl: stat("346.59"),
      },
      {
        id: "wi_s4_24",
        topic: "parking",
        question:
          "On a two-way Wisconsin street with no angle-parking markings, how must you park?",
        choices: [
          "Facing either direction, as long as you are at the kerb",
          "Facing traffic, so oncoming drivers can see you",
          "Parallel to the kerb, headed in the direction of traffic, on the right side",
          "At an angle to the kerb",
        ],
        correctIndex: 2,
        explanation:
          "Parallel, pointing the way traffic moves, on the right-hand side. Parking facing traffic on the wrong side is prohibited.",
        context:
          "The statute also fixes the geometry: in parallel parking the wheels sit within 12 inches of the kerb, and there is at least two feet clear front and rear. On a one-way or divided street, parking on the left is permitted only where signs or markings clearly authorise it, and stopping on the left side of a highway is otherwise forbidden.",
        trap: "\"Facing traffic so they can see me\" sounds safety-minded and is exactly the arrangement the statute rules out.",
        excerptKey: "st-park-left-side",
        sourceLabel: "Wisconsin Statutes Section 346.55(1)",
        sourceUrl: stat("346.55"),
      },
      {
        id: "wi_s4_25",
        topic: "rules",
        question:
          "You are approaching a Wisconsin work zone and want to check a message on your phone. May you?",
        choices: [
          "Yes, if you are stopped in queuing traffic",
          "Yes, hands-free",
          "No - in a construction zone a phone may only be used to report an emergency",
          "Yes, if you hold a full regular licence",
        ],
        correctIndex: 2,
        explanation:
          "Inside a construction zone the phone is limited to emergency reporting for every driver, not just permit and probationary holders.",
        context:
          "Work zones tighten two things at once. The phone rule narrows for everybody, and traffic fines double. Add the flagger rule - you follow the directions of a worker with a sign or flag even where they contradict the signs - and the orange work-zone signs are the only ones that change the rules rather than describing them.",
        trap: "A full licence does not help here. The construction-zone rule reaches drivers who are otherwise allowed hands-free use.",
        excerptKey: "workzone-fines-double",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.C Construction",
        sourceUrl: hb(26),
      },
      {
        id: "wi_s4_26",
        topic: "safety",
        question:
          "Which of these does the Wisconsin handbook tell you to remove from around your windows and mirror?",
        choices: [
          "Insurance and registration documents",
          "Objects hanging from the rearview mirror and decals on the windows",
          "The rearview mirror itself in winter",
          "Sun visors",
        ],
        correctIndex: 1,
        explanation:
          "Hanging objects and window decals are named directly. They sit in the part of the view you use most and move as you do.",
        context:
          "It comes from the distracted-driving section, which is broader than phones. The list also covers pulling over to read directions, eating only when parked, keeping pets in a carrier or held by a passenger, and not wearing headphones over or in both ears. Wisconsin's pre-drive checklist adds adjusting your seat and mirrors so you can see out of every window.",
        trap: "It reads like a tidiness rule. It is a visibility rule, and a swinging object in peripheral vision reliably pulls the eye.",
        excerptKey: "headphones",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 9.B Distracted Driving",
        sourceUrl: hb(50),
      },
      {
        id: "wi_s4_27",
        topic: "signs",
        question:
          "A blue rectangular sign with a white H and an arrow appears at a Wisconsin junction. What is it?",
        choices: [
          "A hospital service sign showing the direction to take",
          "A helicopter landing area",
          "A historical marker",
          "A highway route marker",
        ],
        correctIndex: 0,
        explanation:
          "Blue is Wisconsin's service colour, and the H with an arrow points you to the hospital.",
        context:
          "Service signs are square or rectangular, blue with white letters or symbols, and cover things like hospitals and camping. Disabled-access signs are a variation - white with green letters on a blue background. Brown signs, by contrast, mark parks, historical areas and other points of interest, and sometimes give the distance.",
        trap: "Brown and blue both appear on the same stretch of road. Brown is where you might want to go; blue is what you might need.",
        excerptKey: "signs-service-blue",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.E Service",
        sourceUrl: hb(28),
      },
      {
        id: "wi_s4_28",
        topic: "licensing",
        question:
          "How does a Wisconsin driver become a habitual traffic offender?",
        choices: [
          "Four or more major violations, or 12 or more minor ones, within five years",
          "Any two convictions in a year",
          "Accumulating 12 points at any time",
          "Three moving violations within two years",
        ],
        correctIndex: 0,
        explanation:
          "Four or more major violations or 12 or more minor ones inside five years. The consequence is a five-year revocation of the driving privilege.",
        context:
          "It sits above the ordinary point system, which suspends or revokes at 12 or more demerit points in any 12-month window. A habitual traffic offender may become eligible for an occupational licence after a two-year wait, which allows driving up to 12 hours a day and 60 hours a week for work, school and household necessities.",
        trap: "The 12 in the habitual-offender rule counts minor violations over five years. The 12 in the point system counts demerit points over one year. Same number, different things entirely.",
        excerptKey: "habitual-offender",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 11.B Habitual Traffic Offender",
        sourceUrl: hb(53),
      },
      {
        id: "wi_s4_29",
        topic: "rightOfWay",
        question:
          "You are turning left into a driveway across the path of an oncoming car. Who goes first?",
        choices: [
          "You, since a driveway is not an intersection",
          "The oncoming vehicle",
          "Whoever is closer to the driveway",
          "Whoever signals first",
        ],
        correctIndex: 1,
        explanation:
          "Turning left across oncoming traffic gives way, and Wisconsin's statute says so specifically for a turn into an alley or private driveway.",
        context:
          "It is the same principle as the left turn at an intersection, extended to the case where there is no junction at all. The companion rule catches the other half of the manoeuvre: crossing a sidewalk or entering a driveway from the highway, you yield to any pedestrian, vehicle or conveyance already there.",
        trap: "The absence of an intersection feels like the absence of a rule. Wisconsin wrote this one precisely to close that gap.",
        excerptKey: "st-row-left-turn",
        sourceLabel: "Wisconsin Statutes Section 346.18",
        sourceUrl: stat("346.18"),
      },
      {
        id: "wi_s4_30",
        topic: "impairment",
        question:
          "Wisconsin's handbook names one reliable way to get home safely after drinking. Which of these is it?",
        choices: [
          "Wait an hour per drink, then drive",
          "Drive slowly on quiet streets",
          "Ask a sober friend or family member for a lift, or have a bartender call a cab",
          "Drink water and eat before driving",
        ],
        correctIndex: 2,
        explanation:
          "Arrange a different driver. Every option that involves you driving depends on an estimate of your own impairment, which is the faculty alcohol damages first.",
        context:
          "Wisconsin's framing of impairment is about capability rather than legality: alcohol makes it harder to judge distance, speed and the movement of other vehicles, and a police officer who determines that you are impaired can arrest you regardless of your reading. Time is the only thing that lowers a blood alcohol concentration.",
        trap: "The hour-per-drink folk rule is not a metabolic fact, and quiet streets do not compensate for slower reactions.",
        excerptKey: "time-sobers",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 9.A Alcohol, Drugs and Driving",
        sourceUrl: hb(49),
      },
      {
        id: "wi_s4_31",
        topic: "emergencies",
        question:
          "You are in a minor Wisconsin crash, nobody is hurt, and both cars can still be driven. What does the handbook tell you to do first?",
        choices: [
          "Leave the cars where they are until police arrive",
          "Move the vehicles off the road when it is safe",
          "Photograph the scene before touching anything",
          "Drive to the nearest police station",
        ],
        correctIndex: 1,
        explanation:
          "With no injuries and drivable cars, you clear the road first. A blocked lane on a busy road is the next crash waiting to happen.",
        context:
          "Then the paperwork: exchange licence, vehicle and insurance details, record the damage, write down the facts of how it happened, and take witnesses' details. That is the opposite of the injury case, where you call 911, leave the vehicles where they are and stay at the scene.",
        trap: "\"Never move the cars\" is right when someone is hurt and wrong here. Wisconsin gives three different answers for three different situations.",
        excerptKey: "crash-report-thresholds",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 8.B Crashes",
        sourceUrl: hb(47),
      },
      {
        id: "wi_s4_32",
        topic: "rules",
        question:
          "You are driving on a Wisconsin street and want to cut across a bus lane to reach a driveway on the far side. When may you enter it?",
        choices: [
          "Only in an emergency",
          "When you need to turn across it within the next half block",
          "Never - reserved lanes may not be entered by other vehicles",
          "Any time the lane is empty",
        ],
        correctIndex: 1,
        explanation:
          "Wisconsin lets you cross a reserved lane to make a turn within the next half block. That is a crossing allowance, not a right to travel in it.",
        context:
          "If a bicyclist is in the lane you are crossing, the handbook tells you to move in behind them and make your turn once it is safe rather than cutting in front. Reserved lanes carry a white diamond on the sign and on the pavement, and travelling in one when you are not the vehicle type named is illegal.",
        trap: "An empty lane is still a reserved lane. The allowance is about the turn you are making, not about whether anyone is using it.",
        excerptKey: "lane-reserved",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.C Special Lanes",
        sourceUrl: hb(37),
      },
      {
        id: "wi_s4_33",
        topic: "sharing",
        question:
          "What does the Wisconsin handbook say about a motorcycle's braking compared with a car's?",
        choices: [
          "A motorcycle takes much longer to stop",
          "A motorcycle can stop faster than most vehicles",
          "Braking distances are about the same",
          "A motorcycle cannot brake safely in rain",
        ],
        correctIndex: 1,
        explanation:
          "Wisconsin says a motorcycle can stop faster than most vehicles. Following one too closely leaves you nowhere to go when it does.",
        context:
          "That is why the handbook asks for extra room behind a motorcycle specifically, on top of the general instruction to check your blind spots before moving and to wait until it is safe to pass. A motorcycle is also entitled to the full use of a traffic lane, so treating one as half a vehicle to share a lane with is both unlawful and dangerous.",
        trap: "Motorcycles look fragile, which suggests they must be slower to stop. The handbook says the opposite, and the consequence falls on the driver behind.",
        excerptKey: "motorcycle-space",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 10.D Motorcycles",
        sourceUrl: hb(51),
      },
      {
        id: "wi_s4_34",
        topic: "signals",
        question:
          "The Wisconsin handbook describes a common rural signal arrangement. What is it?",
        choices: [
          "A single yellow or red light at many country intersections",
          "A three-colour signal at every intersection",
          "Flashing green lights on minor roads",
          "No signals at all outside cities",
        ],
        correctIndex: 0,
        explanation:
          "Many rural intersections carry a single flashing light: red on the road that must stop, yellow on the road that may proceed with caution.",
        context:
          "Wisconsin's meanings for the two are precise. Flashing red is a full stop, then go when safe - it never turns green. Flashing yellow is slow down, check for cross traffic and proceed with caution, with no stop required. A dead or malfunctioning signal, by contrast, is treated as a stop sign for every approach.",
        trap: "Approaching the yellow side does not mean the crossing traffic has a red. Rural crossroads with poor sightlines are exactly where that assumption fails.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(32),
      },
      {
        id: "wi_s4_35",
        topic: "safety",
        question:
          "How does the Wisconsin handbook describe the correct fit of a lap belt?",
        choices: [
          "Loose enough to slide a hand under",
          "Snug across the hip bones, just under the stomach",
          "Across the soft part of the abdomen",
          "Under the arm if the shoulder belt is uncomfortable",
        ],
        correctIndex: 1,
        explanation:
          "The lap belt sits snugly across the hip bones just under the stomach, where the pelvis can take the load. The shoulder belt crosses the chest.",
        context:
          "The handbook is explicit about the two things not to do: never put the shoulder belt under your arm, and never leave it loose enough to hang off the shoulder. The adjustment test it offers is that you should be able to put a fist between the belt and your chest, and no more. Belts are required for every occupant at any age.",
        trap: "A belt worn high across the stomach transfers crash forces into soft tissue instead of bone, which is where the serious internal injuries come from.",
        excerptKey: "seatbelt-airbag",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 12.D Seat Belts",
        sourceUrl: hb(55),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Wisconsin's own traps: the roundabout rule that exists almost nowhere else, three different stopping distances for three different vehicles, the parking numbers the handbook never prints, and the exceptions with a sting in the last four words.",
    questions: [
      {
        id: "wi_s5_01",
        topic: "rightOfWay",
        question:
          "You reach a Wisconsin roundabout first. A 45-foot bus arrives beside you a moment later, in the other approach lane. What must you do?",
        choices: [
          "Proceed, since you arrived first",
          "Yield to the bus and, if necessary, stop",
          "Enter alongside it, staying in your own lane",
          "Yield only if the bus signals",
        ],
        correctIndex: 1,
        explanation:
          "Wisconsin requires you to yield to any vehicle at least 40 feet long or 10 feet wide at a roundabout, reducing speed or stopping if that is what it takes. Arriving first does not override it.",
        context:
          "The rule follows from geometry rather than courtesy. A vehicle that size cannot hold a single roundabout lane, and the law lets it deviate from its lane to get through - which means the space you would occupy is space it needs. If two such vehicles meet, the one on the right yields to the one on the left, reversing the usual tie-breaker.",
        trap: "Every instinct from four-way stops and ordinary roundabouts says first-there-goes-first. This is the Wisconsin rule that overrides it.",
        excerptKey: "st-roundabout-big-vehicle",
        sourceLabel: "Wisconsin Statutes Section 346.18(8)(a)",
        sourceUrl: stat("346.18"),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_02",
        topic: "sharing",
        question:
          "Match the vehicle to Wisconsin's stopping distance: a school bus flashing red, an emergency vehicle reversing into a fire station, and a pedestrian with a white cane.",
        choices: [
          "20 feet, 30 feet, 10 feet",
          "10 feet, 20 feet, 30 feet",
          "30 feet, 20 feet, 10 feet",
          "20 feet, 20 feet, 20 feet",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet from the school bus, 30 feet from the fire-station manoeuvre, and 10 feet from the pedestrian with a white cane. Three rules, three different numbers.",
        context:
          "Each has its own staying condition too. You hold back from the bus until it moves or the red lights go out; from the fire station until a firefighter directs you on or the signal ends and the roadway is clear; from the pedestrian until they are entirely off the roadway. None of the three is a rounding of the others.",
        trap: "The 20 feet from the school bus is the number everyone remembers, and it is the wrong answer for the other two.",
        excerptKey: "st-firestation-30",
        sourceLabel: "Wisconsin Statutes Section 346.455 and Motorists' Handbook Sections 3.A and 10.C",
        sourceUrl: stat("346.455"),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_03",
        topic: "parking",
        question:
          "You park on a Wisconsin street 12 feet from a fire hydrant, 5 feet from a driveway and 20 feet from a crosswalk. Which of these breaks the law?",
        choices: [
          "The hydrant distance",
          "The driveway distance",
          "The crosswalk distance",
          "None of them",
        ],
        correctIndex: 3,
        explanation:
          "All three clear Wisconsin's minimums: 10 feet from a hydrant, 4 feet from a driveway, 15 feet from a crosswalk. You are inside the law on every one.",
        context:
          "The value of knowing the actual figures is exactly this - most learners guess high and would condemn a lawful parking spot, or guess low and park illegally. A posted sign can demand a greater distance in any of the three cases. Separately, stopping at all is prohibited within an intersection, on a crosswalk, within 25 feet of the nearest rail and within 15 feet of a fire-station driveway.",
        trap: "Five feet from a driveway feels far too close and is comfortably legal in Wisconsin. The driveway figure is only 4 feet.",
        excerptKey: "st-park-hydrant-10",
        sourceLabel: "Wisconsin Statutes Section 346.53",
        sourceUrl: stat("346.53"),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_04",
        topic: "rules",
        question:
          "A combine is doing 12 mph in a posted 40 mph zone on a Wisconsin road with a double solid yellow line. May you cross to pass?",
        choices: [
          "Yes - it is under half the speed limit",
          "Yes, if you can see far enough ahead",
          "No - farm equipment is excluded from that exception",
          "Yes, provided you do not exceed 40 mph",
        ],
        correctIndex: 2,
        explanation:
          "Wisconsin's under-half-the-limit exception ends with four words that decide this question: except if it is farm equipment.",
        context:
          "The other exception to a double solid yellow is turning into a driveway when it is safe. Neither is a general permission to overtake. On a rural road the practical reason is that farm machinery is often wider than the cab suggests, may carry no brake lights or signals, and can turn into an unmarked field entrance with no warning.",
        trap: "The arithmetic works perfectly and the answer is still no. This is a question about reading the exception all the way to the end.",
        excerptKey: "lines-double-yellow-exception",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.B Types of Line Markings",
        sourceUrl: hb(35),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_05",
        topic: "impairment",
        question:
          "A 20-year-old Wisconsin driver blows 0.03. What is the position?",
        choices: [
          "No offence, since it is under 0.08",
          "An offence, because under 21 the limit is absolute sobriety",
          "An offence only if driving was actually impaired",
          "A warning, with no licence consequence",
        ],
        correctIndex: 1,
        explanation:
          "Under 21 the permitted concentration is zero. A reading of 0.03 is a violation whether or not the driving showed any sign of it.",
        context:
          "The statute defines the underage offence as more than 0.0 but not more than 0.08 - above 0.08 the ordinary adult offence applies instead, so the higher reading is worse, not safer. WisDOT's own penalty material puts a first underage offence at a three-month suspension, a forfeiture and four demerit points. A permit or probationary licence carries its own absolute sobriety condition on top.",
        trap: "The 0.08 figure is so well known that it gets applied to everyone. It is the threshold for an adult driver and nobody else.",
        excerptKey: "st-absolute-sobriety",
        sourceLabel: "Wisconsin Statutes Section 346.63(2m)",
        sourceUrl: stat("346.63"),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_06",
        topic: "speed",
        question:
          "A Wisconsin town road has no speed limit signs at all and no other fixed limit applies. You are doing 60 mph. Are you speeding?",
        choices: [
          "No, because no limit is posted",
          "Yes - the statutory fall-back is 55 mph",
          "No, because the freeway limit of 70 applies statewide",
          "Only if conditions are poor",
        ],
        correctIndex: 1,
        explanation:
          "Wisconsin fills the gap at 55 mph. In the absence of any other fixed limit and any posting, 55 is the maximum.",
        context:
          "This is one of the numbers the handbook never prints. It gives 25 residential, 15 school zone and 35 outlying, then stops. The remainder of the ladder - 15 in an alley, 55 as the fall-back, 65 on an expressway and 70 on a freeway - lives in the statute, above which the basic reasonable-and-prudent rule applies at all times.",
        trap: "No sign reads as no rule. It is the single most expensive assumption a new driver can make on a rural Wisconsin road.",
        excerptKey: "st-speed-55-default",
        sourceLabel: "Wisconsin Statutes Section 346.57(4)(h)",
        sourceUrl: stat("346.57"),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_07",
        topic: "signals",
        question:
          "You have a flashing yellow arrow to turn left. The oncoming lanes have a steady green. What is your position?",
        choices: [
          "You have priority, because your signal is a turn arrow",
          "Oncoming traffic must stop for a turning vehicle",
          "You may turn only after yielding to oncoming traffic and pedestrians",
          "You must wait for a green arrow before turning at all",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow arrow hands you the decision and the responsibility. You may turn, after yielding to everything with the right of way.",
        context:
          "The Wisconsin State Patrol has run public-education campaigns on precisely this signal, which suggests how often it is misread. The statute lists what you yield to: pedestrians, personal delivery devices, bicyclists and riders lawfully within a crosswalk, and other traffic lawfully using the intersection. The steady green arrow is the protected version; this one is not.",
        trap: "Any arrow feels like a dedicated permission. The flashing yellow is the arrow that means the opposite of protected.",
        excerptKey: "st-flashing-yellow-arrow",
        sourceLabel: "Wisconsin Statutes Section 346.37(1)(e)1.",
        sourceUrl: stat("346.37"),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_08",
        topic: "licensing",
        question:
          "You are 17 with a Wisconsin probationary licence two months old. At 8 p.m. you want to drive your younger brother, your sister and one school friend to a game. May you?",
        choices: [
          "Yes - immediate family plus one other person is permitted",
          "No - only one passenger of any kind is allowed",
          "No - no passengers at all during the first nine months",
          "Yes, but only if a licensed adult is also aboard",
        ],
        correctIndex: 0,
        explanation:
          "Between 5 a.m. and midnight the restriction allows any number of immediate family members plus one other person. Two siblings and one friend fits.",
        context:
          "The restrictions last nine months, or until you turn 18. The midnight-to-5 a.m. window is tighter: alone only between home, school and work, or with the same qualifying supervising adult plus one other person. A qualifying adult is an instructor or spouse aged 19 or more, or any person aged 21 or more, with a valid regular licence and two years of experience.",
        trap: "The passenger cap is on people who are not immediate family. Counting your siblings against it produces the wrong answer.",
        excerptKey: "prob-night-window",
        sourceLabel: "WisDOT - Graduated Driver License FAQs",
        sourceUrl: GDL,
        commonlyMissed: true,
      },
      {
        id: "wi_s5_09",
        topic: "parking",
        question:
          "You stop briefly on a crosswalk in Wisconsin to let a passenger out, staying with the car. Is that lawful?",
        choices: [
          "Yes - a brief stop to discharge a passenger is permitted",
          "Yes, provided the vehicle is attended",
          "No - stopping on a crosswalk is prohibited outright",
          "Yes, if no pedestrian is waiting",
        ],
        correctIndex: 2,
        explanation:
          "Stopping on a crosswalk sits in Wisconsin's absolute-prohibition list, which covers stopping whether attended or unattended and whether temporary or not.",
        context:
          "Wisconsin splits the rules across two sections. Section 346.52 prohibits stopping at all in certain places: within an intersection, on a crosswalk, on a sidewalk, within 25 feet of the nearest rail, within 15 feet of a fire-station driveway, and on the roadway side of a parked vehicle. Section 346.53 prohibits parking elsewhere, and there the loading and unloading exception does apply.",
        trap: "The loading exception is real, and it belongs to the parking section. It does nothing for the places where stopping itself is banned.",
        excerptKey: "st-stop-intersection-crosswalk",
        sourceLabel: "Wisconsin Statutes Section 346.52(1)",
        sourceUrl: stat("346.52"),
      },
      {
        id: "wi_s5_10",
        topic: "sharing",
        question:
          "A school bus is stopped with red lights flashing on the other side of a four-lane road with a painted centre median. Must you stop?",
        choices: [
          "No - four lanes make it a divided highway",
          "No - a median of any kind is enough",
          "Yes - paint is not a barrier, so the road is not divided",
          "Only if children are visible",
        ],
        correctIndex: 2,
        explanation:
          "Wisconsin's exception needs a physical barrier between the opposing lanes. A painted median leaves the road undivided, so you stop.",
        context:
          "The handbook's definition is the operative one: a divided highway has a barrier between lanes going opposite directions. The statute reaches the same result by excusing only drivers proceeding in the opposite direction on a divided highway. Lane count does nothing on its own, and neither does a centre turn lane.",
        trap: "Four lanes and a marked median look like a divided highway from the driver's seat. Wisconsin's test is whether something solid is in the way.",
        excerptKey: "schoolbus-divided",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 10.C School Buses",
        sourceUrl: hb(51),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_11",
        topic: "safety",
        question:
          "You are behind a snowplough on a Wisconsin road posted at 30 mph, its amber lights flashing. What is the minimum following distance?",
        choices: ["20 feet", "75 feet", "200 feet", "500 feet"],
        correctIndex: 1,
        explanation:
          "Seventy-five feet where the posted limit is 35 mph or less. Above 35 mph the figure jumps to 200 feet.",
        context:
          "A third number covers the stationary case: if the plough is stopped at an intersection, you stop no less than 20 feet from it and stay there until it moves. None of the three applies while you are actually overtaking, and none applies to a plough simply stopped or standing in the highway.",
        trap: "The 200-foot figure is the one the handbook prints, so it gets applied everywhere. It is the over-35 mph number, not the universal one.",
        excerptKey: "st-snowplow-200",
        sourceLabel: "Wisconsin Statutes Section 346.915(2)(a)",
        sourceUrl: stat("346.915"),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_12",
        topic: "rules",
        question:
          "How far before a turn does Wisconsin's statute require a continuous signal from a car, and how far from a bicycle?",
        choices: [
          "100 feet from both",
          "100 feet from a car, 50 feet from a bicycle",
          "50 feet from a car, 100 feet from a bicycle",
          "100 feet from a car, with no requirement on a bicycle",
        ],
        correctIndex: 1,
        explanation:
          "A hundred feet from a car, fifty from a bicycle, electric scooter or personal mobility device - and a cyclist may break the signal if the hand is needed to control the bike.",
        context:
          "The duty is triggered when other traffic may be affected by the movement, and a U-turn uses the left-turn signal. The handbook gives the car figure in the form a learner can act on - about three seconds, roughly 100 feet - and adds that a turn immediately after an intersection is signalled once you have crossed it, not before.",
        trap: "Bicycles are covered by the same statute with a different number. Answering 100 feet for both misses the shorter distance a rider needs.",
        excerptKey: "st-signal-100-feet",
        sourceLabel: "Wisconsin Statutes Section 346.34(1)(b)",
        sourceUrl: stat("346.34"),
      },
      {
        id: "wi_s5_13",
        topic: "rightOfWay",
        question:
          "You are on the right at an uncontrolled Wisconsin intersection and another car approaches from the left at 20 mph over the limit. You collide. What does the statute say about right of way?",
        choices: [
          "The other driver forfeited any right of way by speeding",
          "You forfeited the right of way by failing to avoid the collision",
          "Right of way is unaffected by speed",
          "Neither driver held the right of way",
        ],
        correctIndex: 0,
        explanation:
          "Wisconsin strips the right of way from a driver travelling at an unlawful speed. The clause exists because a speeding driver only arrives \"at the same time\" by breaking the law.",
        context:
          "The base rule gives the driver on the right priority when two vehicles reach the intersection at approximately the same time. The forfeiture sentence follows immediately after it. None of this makes a collision survivable, and the handbook's standing advice is to search left, right and left again before entering an intersection even when you have the right of way.",
        trap: "The subsection has two sentences and most people learn only the first. The second is what this question turns on.",
        excerptKey: "st-row-unlawful-speed",
        sourceLabel: "Wisconsin Statutes Section 346.18(1)",
        sourceUrl: stat("346.18"),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_14",
        topic: "signals",
        question:
          "Which Wisconsin rule lets a bicycle proceed through a red light, and on what conditions?",
        choices: [
          "There is no such rule",
          "After stopping at least 45 seconds at a signal that has not detected it, with the intersection otherwise empty",
          "After stopping for 30 seconds, in any circumstances",
          "Only where a sign permits it",
        ],
        correctIndex: 1,
        explanation:
          "Wisconsin's dead-red provision covers motorcycles, mopeds, motor bicycles and bicycles: stop at least 45 seconds, believe the signal is vehicle-actuated, have no other vehicle present to trigger it, then proceed cautiously and yield to everything.",
        context:
          "Each element is load-bearing. Forty-five seconds is a minimum, not a rule of thumb. The intersection must be empty of vehicles that could actuate the signal, which is why the rule cannot be used at a busy junction. And you still give way to anything moving on a green or lawfully in a crosswalk. The handbook never mentions it.",
        trap: "It is not a general permission to treat a slow signal as broken, and it is not available to a car however long the wait.",
        excerptKey: "st-dead-red-45",
        sourceLabel: "Wisconsin Statutes Section 346.37(1)(c)4.",
        sourceUrl: stat("346.37"),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_15",
        topic: "emergencies",
        question:
          "A car with hazard lights on is stopped on the shoulder of a Wisconsin freeway, 8 feet from the traffic lane, with the driver standing beside it. Does the move-over law apply?",
        choices: [
          "No - it covers only emergency and roadside service vehicles",
          "Yes - a disabled vehicle within 12 feet of the roadway is covered",
          "Only if the vehicle has flares out",
          "Only on a road with a posted limit above 55 mph",
        ],
        correctIndex: 1,
        explanation:
          "Wisconsin extended the move-over duty to ordinary disabled vehicles. Hazard lights, emergency warning devices, or a person attending the vehicle each bring it inside the definition.",
        context:
          "The trigger distance is 12 feet from the roadway. Where the road has two or more lanes in your direction and you can change safely, you move out of the adjacent lane and stay out until you are past. Otherwise you slow to a safe speed and hold it until completely clear. A violation carries a suspension of the operating privilege on top of any forfeiture.",
        trap: "The law is widely remembered as being about police and tow trucks. Since 2025 an ordinary broken-down car with its hazards on gets the same protection.",
        excerptKey: "st-move-over-12-feet",
        sourceLabel: "Wisconsin Statutes Section 346.072(1m)",
        sourceUrl: stat("346.072"),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_16",
        topic: "licensing",
        question:
          "How many attempts at the same Wisconsin knowledge test are allowed within a one-year period before you need DMV permission?",
        choices: ["Two", "Three", "Five", "There is no limit"],
        correctIndex: 2,
        explanation:
          "Five attempts at the same test in a one-year period. Beyond that you need special permission from DMV staff before testing again.",
        context:
          "The related timings are worth knowing together. You may retake no sooner than the next day. The at-home online option for 15 to 17 year olds is limited to two attempts at $10 each, and failing both sends you to a DMV service center for the third. In-person testing at a service center is free.",
        trap: "Several commercial study sites state that Wisconsin caps neither attempts nor time. WisDOT's own page says otherwise, and it is the one that counts.",
        excerptKey: "test-online-fee",
        sourceLabel: "WisDOT - Wisconsin knowledge tests",
        sourceUrl: KNOWLEDGE,
      },
      {
        id: "wi_s5_17",
        topic: "impairment",
        question:
          "You are the passenger in a Wisconsin car and an opened bottle of beer is in the door pocket beside you. Who is liable?",
        choices: [
          "Nobody, provided the driver has not been drinking",
          "The passenger only",
          "The driver only",
          "The passenger for possession, and the owner or driver for keeping it in the vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Wisconsin reaches both. Possessing an opened container in the vehicle is one offence, and the owner - or the driver if the owner is absent - is separately prohibited from allowing one to be kept there.",
        context:
          "The exception is location: the trunk, or in a car with no trunk, some area not normally occupied by the driver or passengers. A glove compartment or utility compartment is explicitly inside the occupied area, so it does not qualify. Drinking alcohol in a motor vehicle on a highway is prohibited outright.",
        trap: "\"It is not mine\" and \"I was not driving\" are both answers to the wrong question. The statute creates duties for the passenger, the owner and the driver.",
        excerptKey: "st-open-container",
        sourceLabel: "Wisconsin Statutes Section 346.935",
        sourceUrl: stat("346.935"),
        commonlyMissed: true,
      },
      {
        id: "wi_s5_18",
        topic: "speed",
        question:
          "You are inside a Wisconsin city, on a street with no posted limit, in an area where buildings front the road every 100 feet or so. What is the limit?",
        choices: ["20 mph", "25 mph", "35 mph", "55 mph"],
        correctIndex: 1,
        explanation:
          "Buildings that close make this an ordinary city street rather than an outlying district, so the 25 mph limit applies.",
        context:
          "The dividing line is 200 feet of average building spacing over any 1,000-foot stretch. More than that, inside a city or village, is an outlying district at 35 mph. Not more than that, outside city limits, is a semiurban district, also at 35 mph. On state trunk and county trunk highways the 25 and 35 figures only take effect where signs give notice of them.",
        trap: "Both 25 and 35 are city-limit numbers in Wisconsin, and only the spacing of the buildings tells them apart.",
        excerptKey: "st-speed-25-city",
        sourceLabel: "Wisconsin Statutes Section 346.57(4)(e)",
        sourceUrl: stat("346.57"),
      },
      {
        id: "wi_s5_19",
        topic: "signs",
        question:
          "A crossbuck at a Wisconsin crossing carries a plate reading EXEMPT. What does that mean for you in an ordinary car?",
        choices: [
          "Certain vehicles are not required to stop before crossing, and you still check for trains",
          "The tracks are out of service and no train can come",
          "You are exempt from stopping only if no gate is present",
          "The crossing is closed",
        ],
        correctIndex: 0,
        explanation:
          "An exempt sign relieves certain vehicles - the ones otherwise obliged to stop at every crossing, such as buses - from stopping. It is not a statement that no train will come.",
        context:
          "A different plate, tracks out-of-service, does mean the line is no longer in use. Neither changes the standing advice: never try to beat a train, never stop on the tracks, never cross unless there is room on the far side, do not change gear while crossing, and look both ways even when the signals are dark.",
        trap: "\"Exempt\" reads like a licence to cross without looking. It is a rule about which vehicles must stop, not about whether trains use the line.",
        excerptKey: "rr-exempt",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.H Railroad Crossing",
        sourceUrl: hb(30),
      },
      {
        id: "wi_s5_20",
        topic: "safety",
        question:
          "The Wisconsin handbook lists two compulsory headlight triggers and one recommendation. Which of these is the recommendation?",
        choices: [
          "Being unable to see a vehicle or person 500 feet away",
          "The half hour after sunset to the half hour before sunrise",
          "Using your windshield wipers",
          "Driving on any unlit road",
        ],
        correctIndex: 2,
        explanation:
          "The handbook lists wipers under \"recommended\", not \"must\". The two compulsory triggers are the 500-foot visibility rule and the half-hour clock window.",
        context:
          "That is unusual - several nearby states make the wipers-headlights link mandatory, and Wisconsin's own lighting statute sits in a chapter outside the two this bank was built from. The practical answer is unaffected: if the wipers are on it is almost certainly a day you cannot see 500 feet clearly, which puts you back under the compulsory rule anyway.",
        trap: "Reading \"recommended\" as \"optional in practice\" is the mistake. Bad enough weather to need wipers is usually bad enough to trigger the compulsory rule.",
        excerptKey: "headlights-recommended",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.K Communication",
        sourceUrl: hb(21),
      },
      {
        id: "wi_s5_21",
        topic: "rules",
        question:
          "You are in the left-most of two right-turn lanes at a Wisconsin intersection, facing a red light. May you turn on red?",
        choices: [
          "No - only the rightmost lane may turn on red",
          "Yes, into the lane second from the right, after stopping",
          "Yes, into any lane you choose",
          "Only if a sign permits it",
        ],
        correctIndex: 1,
        explanation:
          "Wisconsin allows it specifically where two right-turn lanes exist: from the leftmost of them, you turn on red into the second-from-right lane, after stopping.",
        context:
          "The general rule is that no turn on red may be made if lanes of moving traffic are crossed, and this two-lane case is the carve-out from it. All the usual conditions still bind: a complete stop first, no sign prohibiting the turn, and yielding to pedestrians in the crosswalk, to drivers making a lawful U-turn, and to other traffic lawfully using the intersection.",
        trap: "The instinct that only the kerbside lane may turn on red is right almost everywhere and wrong at a Wisconsin dual right-turn.",
        excerptKey: "st-red-turn",
        sourceLabel: "Wisconsin Statutes Section 346.37(1)(c)3.",
        sourceUrl: stat("346.37"),
      },
      {
        id: "wi_s5_22",
        topic: "rightOfWay",
        question:
          "Two semitrailers approach a Wisconsin roundabout at the same moment from adjacent approaches. Which yields?",
        choices: [
          "The one on the right yields to the one on the left",
          "The one on the left yields to the one on the right",
          "The longer vehicle yields",
          "Neither - both proceed in their own lanes",
        ],
        correctIndex: 0,
        explanation:
          "When two vehicles that both qualify as oversized meet at a roundabout, Wisconsin reverses the ordinary tie-breaker: the one on the right yields to the one on the left.",
        context:
          "The rule works alongside the main provision, which requires ordinary vehicles to yield to anything at least 40 feet long or 10 feet wide. The reversal exists because a roundabout turns counterclockwise, so the vehicle on the left is the one already committed to the circulating path.",
        trap: "The driver-on-the-right principle is so ingrained that this looks like a misprint. For two oversized vehicles at a roundabout, Wisconsin genuinely flips it.",
        excerptKey: "st-roundabout-big-vehicle",
        sourceLabel: "Wisconsin Statutes Section 346.18(8)(b)",
        sourceUrl: stat("346.18"),
      },
      {
        id: "wi_s5_23",
        topic: "licensing",
        question:
          "A Wisconsin driver with an instruction permit is convicted of two moving violations. What happens to the demerit points?",
        choices: [
          "They are halved for a first licence",
          "The points on the second conviction and any after it are doubled",
          "Points do not apply to permit holders",
          "Only the first conviction carries points",
        ],
        correctIndex: 1,
        explanation:
          "Points double from the second conviction onward for a permit or probationary holder, an ID card holder, or someone with no licence at all.",
        context:
          "Twelve or more points inside any 12-month window suspends or revokes the driving privilege, and a permit is suspended for six months on reaching that total. Because of the doubling, two moderate convictions can carry a new driver most of the way there. The point total is separate from the habitual-offender rule, which counts violations over five years.",
        trap: "The doubling starts at the second conviction, not the first. Assuming every ticket is doubled overstates the first one and understates how quickly the rest add up.",
        excerptKey: "points-doubled",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 11.A Point System",
        sourceUrl: hb(53),
      },
      {
        id: "wi_s5_24",
        topic: "parking",
        question:
          "Wisconsin prohibits stopping within a set distance of a fire station driveway. What is it?",
        choices: ["10 feet", "15 feet", "20 feet", "30 feet"],
        correctIndex: 1,
        explanation:
          "Fifteen feet from the driveway entrance to a fire station, and the same 15 feet directly across the highway from that entrance.",
        context:
          "It is a stopping prohibition, so a brief halt to drop someone off does not save it. The separate 30-foot figure applies to a moving situation - an emergency vehicle backing into a fire station with a firefighter directing traffic - where you stop 30 feet away and wait to be waved on.",
        trap: "Fifteen and 30 both attach to fire stations in Wisconsin and mean different things. One is about where you may leave a car; the other is about a manoeuvre in progress.",
        excerptKey: "st-stop-firestation-15",
        sourceLabel: "Wisconsin Statutes Section 346.52(1)(g)",
        sourceUrl: stat("346.52"),
      },
      {
        id: "wi_s5_25",
        topic: "sharing",
        question:
          "You want to pass a bicycle on a narrow Wisconsin road, but a car is coming the other way. What should you do?",
        choices: [
          "Speed up and pass before the car arrives",
          "Pass the bicycle with a smaller gap, since the car has priority",
          "Slow down, let the oncoming car pass, then pass the bicycle",
          "Pull onto the shoulder and stop",
        ],
        correctIndex: 2,
        explanation:
          "Wait. The handbook tells you to let oncoming traffic clear before passing a bicyclist, and then to leave at least three feet.",
        context:
          "The three feet is a statutory minimum held until you are safely past, not a target measured at the moment you draw level. Underneath it is Wisconsin's rule that a bicyclist may use the whole lane and that you may not share a lane with one. If the geometry does not allow three feet with oncoming traffic present, the geometry is telling you to wait.",
        trap: "Squeezing through is the option that satisfies neither rule - it neither clears the oncoming car properly nor gives the rider the legal minimum.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 10.E Bicycles",
        sourceUrl: hb(52),
      },
      {
        id: "wi_s5_26",
        topic: "signals",
        question:
          "Wisconsin's handbook describes what to do when a traffic light is dark, and it is not what people expect. What is it?",
        choices: [
          "Treat it as a green for the main road",
          "Proceed as if the signal were a stop sign",
          "Wait for a police officer",
          "Treat it as a yield sign",
        ],
        correctIndex: 1,
        explanation:
          "Every approach treats a dead signal as a stop sign. That converts the junction to an all-way stop, where arrival order decides it and the driver on the right breaks a tie.",
        context:
          "The handbook covers the malfunctioning case in the same sentence, so a signal behaving erratically gets the same treatment as one showing nothing at all. If a police officer is directing traffic at the same intersection, their directions come first - ahead of the signal, the signs, and this rule.",
        trap: "Nothing about a dark signal gives the busier road priority, and treating it as a yield rather than a stop is the near-miss version of the right answer.",
        excerptKey: "signal-power-out",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(32),
      },
      {
        id: "wi_s5_27",
        topic: "emergencies",
        question:
          "You crash into a Wisconsin road sign and cause about $300 of damage. Nobody is hurt and your car is drivable. Must you report it?",
        choices: [
          "No - the $1,000 threshold has not been reached",
          "Yes - government property damage of $200 or more must be reported",
          "No, provided you tell your insurer",
          "Only if the sign is a stop sign",
        ],
        correctIndex: 1,
        explanation:
          "Government property has its own, much lower threshold: $200. Signs and guard rails are the handbook's own examples.",
        context:
          "The five triggers are an injury or death, property damage of $1,000 or more, government property damage of $200 or more, a vehicle that cannot be moved, or a driver who appears to be under the influence. Where the crash is reportable and no law enforcement report is made, the statute requires a written report to the department within 10 days.",
        trap: "The $1,000 figure is the one people remember. Applying it to a damaged sign gets the answer wrong by a factor of five.",
        excerptKey: "crash-report-thresholds",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 8.B Crashes",
        sourceUrl: hb(47),
      },
      {
        id: "wi_s5_28",
        topic: "rules",
        question:
          "You are parking parallel on a Wisconsin street. How far from the kerb should the wheels finish?",
        choices: [
          "Within 6 inches",
          "Within 12 inches",
          "Within 18 inches",
          "Within 2 feet",
        ],
        correctIndex: 1,
        explanation:
          "The statute sets 12 inches from the kerb or edge of the street. The handbook's practical version says about a foot, which is the same thing.",
        context:
          "The same subsection sets the gap front and rear at a minimum of two feet, and requires the vehicle to face the direction of traffic. The handbook adds the working method: signal, stop about two feet out level with the car ahead, reverse with full lock, straighten as your front door passes their rear bumper, then swing the other way once your bumper is clear.",
        trap: "Twelve inches is tighter than most learners park, and a car sitting 18 inches out is both a hazard and a fail on the skills test.",
        excerptKey: "st-park-left-side",
        sourceLabel: "Wisconsin Statutes Section 346.54(1)(d)",
        sourceUrl: stat("346.54"),
      },
      {
        id: "wi_s5_29",
        topic: "speed",
        question:
          "A Wisconsin school crossing is marked with a school crossing sign, and a crossing guard is standing in the roadway placing a sign. No children are visible. What is the limit?",
        choices: [
          "15 mph, because a crossing guard is present",
          "The ordinary posted limit, since no children are present",
          "25 mph",
          "It depends on the time of day",
        ],
        correctIndex: 0,
        explanation:
          "Wisconsin's 15 mph school-crossing rule is triggered by any of three things: a child present, a crossing guard within the crosswalk, or a guard placing or removing a traffic sign or device.",
        context:
          "That is broader than the version most people carry, which is children present or nothing. A separate 15 mph rule covers passing a schoolhouse when children are going to or from school or playing in the sidewalk area. The handbook's own summary of a school speed limit sign is that when children are visible you may not exceed the number posted.",
        trap: "\"No children, no restriction\" is the natural reading and it is not what the statute says. A guard placing a sign is enough on its own.",
        excerptKey: "st-speed-schoolhouse-15",
        sourceLabel: "Wisconsin Statutes Section 346.57(4)(b)",
        sourceUrl: stat("346.57"),
      },
      {
        id: "wi_s5_30",
        topic: "safety",
        question:
          "You are the first vehicle in a queue and a driver behind you is following far too closely. What does Wisconsin recommend?",
        choices: [
          "Brake sharply to make the point",
          "Speed up to open the gap behind",
          "Slowly reduce your speed so they go around you",
          "Turn on your hazard lights",
        ],
        correctIndex: 2,
        explanation:
          "Reduce speed gradually. It invites the tailgater to overtake, and it buys you more room in front, which is the space you will need if they do not.",
        context:
          "The habit that makes this work is checking your rearview mirror every 6 to 8 seconds, so you know a tailgater is there before anything else happens. Wisconsin also lists being followed too closely among the reasons to lengthen your own following distance - the gap in front is what absorbs the mistake the driver behind is setting up.",
        trap: "Brake-checking hands your outcome to a driver who has already shown they leave no reaction time.",
        excerptKey: "space-mirror-6-8",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.F Space Between Vehicles",
        sourceUrl: hb(13),
      },
      {
        id: "wi_s5_31",
        topic: "signs",
        question:
          "Wisconsin school zone signs come in a colour some drivers do not recognise. Which?",
        choices: [
          "Orange",
          "Fluorescent green",
          "Blue",
          "Brown",
        ],
        correctIndex: 1,
        explanation:
          "School crossing and school zone signs may be fluorescent green as well as yellow. Both are warning colours, and both mean the same thing.",
        context:
          "The sign shows pedestrians in the main diamond with an arrow on a plate below indicating where the crossing is, and it means yield to crossing pedestrians. Confusing it with orange matters, because orange is the work-zone family, where fines double and phone use narrows to emergencies.",
        trap: "The bright green looks new and unfamiliar enough that drivers read it as something other than a school warning.",
        excerptKey: "signs-school-crossing",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.A Warning",
        sourceUrl: hb(23),
      },
      {
        id: "wi_s5_32",
        topic: "impairment",
        question:
          "A Wisconsin driver has three prior OWI convictions. What alcohol concentration puts them in breach?",
        choices: ["0.08", "0.05", "0.02", "Any detectable amount"],
        correctIndex: 2,
        explanation:
          "For a driver with three or more prior OWI convictions the threshold drops to 0.02, far below the general 0.08.",
        context:
          "Wisconsin therefore runs three separate numbers: absolute sobriety under 21, 0.08 for most adults, and 0.02 after three or more priors. Alongside all of them sits the impairment offence, which does not depend on a reading at all - being less able to control the vehicle safely because of alcohol or a controlled substance is enough.",
        trap: "Assuming one national number covers everyone gets this wrong twice over, once for young drivers and once for repeat offenders.",
        excerptKey: "st-absolute-sobriety",
        sourceLabel: "WisDOT - Drunk driving law",
        sourceUrl: DDLAW,
      },
      {
        id: "wi_s5_33",
        topic: "rightOfWay",
        question:
          "You have stopped at a yield sign because cross traffic was approaching. The gap has now opened. What does the statute require?",
        choices: [
          "Proceed, having yielded as required",
          "Wait for a further signal from the cross traffic",
          "Wait until no vehicle is visible at all",
          "Treat the yield as a stop sign for the rest of the queue",
        ],
        correctIndex: 0,
        explanation:
          "Yielding means giving way to vehicles that have entered the intersection or are approaching closely enough to be a hazard. Once that is done and a safe gap exists, you go.",
        context:
          "Wisconsin's yield-sign rule expressly contemplates stopping: you reduce speed or stop if that is what it takes to yield. The stop is a means, not the requirement. That distinguishes it from a stop sign, where the halt is compulsory regardless of what is coming.",
        trap: "Waiting for an empty road turns a yield into an indefinite stop and creates a hazard of its own for the traffic behind you.",
        excerptKey: "signs-yield",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.B Regulatory",
        sourceUrl: hb(25),
      },
      {
        id: "wi_s5_34",
        topic: "licensing",
        question:
          "You are 15, enrolled in driver education, and have passed the knowledge, signs and vision tests. What else does Wisconsin require before an instruction permit is issued?",
        choices: [
          "Nothing further - the tests are the requirement",
          "Enrolment in the behind-the-wheel portion of driver education, and a sponsor's signature",
          "Fifty hours of supervised practice",
          "A skills test",
        ],
        correctIndex: 1,
        explanation:
          "Under 18 you must be enrolled in driver education including the behind-the-wheel portion, and an adult sponsor must sign the application accepting liability.",
        context:
          "The 50 hours of practice and the six-month wait belong to the next stage, the probationary licence. So does the skills test. At 18 or over, the permit needs only the knowledge test, the signs test and the vision screening, and it may be exchanged for a probationary licence after seven days.",
        trap: "The 50 hours and the skills test are the requirements everybody has heard of, and both come later. This question is about the first step.",
        excerptKey: "permit-supervisor",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 2.B Instruction Permit",
        sourceUrl: hb(5),
      },
      {
        id: "wi_s5_35",
        topic: "sharing",
        question:
          "Which of these is Wisconsin's rule about driving on a sidewalk?",
        choices: [
          "It is permitted at walking speed",
          "It is illegal unless you are crossing it",
          "It is permitted where no pedestrians are present",
          "It is permitted only for delivery vehicles",
        ],
        correctIndex: 1,
        explanation:
          "Illegal, with a single exception for crossing it - which is what you do every time you enter or leave a driveway.",
        context:
          "The crossing itself carries a duty: entering an alley or driveway from the highway, you yield to any pedestrian, vehicle or conveyance on the sidewalk. The handbook's wider point about pedestrians is that children and others may step into the road without looking, so you leave extra room for anyone who may not see you.",
        trap: "\"No pedestrians about\" is the reasoning that puts a car on a sidewalk. The prohibition does not depend on who is there.",
        excerptKey: "sidewalk-illegal",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 10.A Pedestrians",
        sourceUrl: hb(51),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions, no scaffolding, mixed the way the real WisDOT knowledge test is mixed. If you can clear 24 of these you are in range of the 40 out of 50 the DMV asks for.",
    questions: [
      {
        id: "wi_s6_01",
        topic: "rules",
        question:
          "You want to turn right from a four-lane Wisconsin roadway. Which lane must the turn be made from?",
        choices: [
          "Any lane, provided you signal",
          "The lane nearest the right curb or edge of the roadway",
          "The second lane from the right, to allow for the swing",
          "Whichever lane is moving fastest",
        ],
        correctIndex: 1,
        explanation:
          "The kerbside lane. Turning right from further out cuts across the path of anyone lawfully in the lane beside you.",
        context:
          "It pairs with the multiple-turn-lane rule: whatever lane you start a turn in, you finish in the corresponding lane on the new road. You do not change lanes during a turn and you do not cross the centre line.",
        trap: "Swinging out to make the corner easier is the manoeuvre large trucks need and ordinary cars do not.",
        excerptKey: "turn-right-fourlane",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.G Turning",
        sourceUrl: hb(16),
      },
      {
        id: "wi_s6_02",
        topic: "signs",
        question: "What does a white rectangular regulatory sign do?",
        choices: [
          "Warns you of a hazard ahead",
          "Tells you the rules of the road at that place",
          "Gives directions to a destination",
          "Marks a service",
        ],
        correctIndex: 1,
        explanation:
          "Regulatory signs state the law where you are: speed limits, turn restrictions, lane assignments, no entry. Obeying them is not optional.",
        context:
          "Wisconsin's regulatory family is square, rectangular or a special shape, in white or red with black, red, white or green lettering. The two special shapes are the octagon for stop and the downward triangle for yield.",
        trap: "The plain design makes them look like information. They are the signs with legal force.",
        excerptKey: "signs-regulatory-shape",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.B Regulatory",
        sourceUrl: hb(24),
      },
      {
        id: "wi_s6_03",
        topic: "speed",
        question:
          "A Wisconsin school zone sign shows a 15 mph limit when children are present. Children are on the pavement outside the school. What speed may you drive?",
        choices: ["15 mph", "20 mph", "25 mph", "The posted street limit"],
        correctIndex: 0,
        explanation:
          "Fifteen. The condition on the sign is satisfied, so the reduced limit applies.",
        context:
          "The statutory version reaches further: 15 mph passing a schoolhouse when children are going to or from school or playing in the sidewalk area, and 15 mph at a marked school crossing when a child is present or a crossing guard is in the crosswalk or placing a sign.",
        trap: "\"On the pavement, not the road\" does not lift the restriction. Being in the sidewalk area is exactly the condition the rule names.",
        excerptKey: "signs-school-speed",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.B Regulatory",
        sourceUrl: hb(24),
      },
      {
        id: "wi_s6_04",
        topic: "rightOfWay",
        question:
          "You are already in a Wisconsin roundabout and an ambulance enters with its siren on. What should you do?",
        choices: [
          "Stop immediately where you are",
          "Exit at the next right, then pull over",
          "Speed up to get out of the way",
          "Reverse out of the roundabout",
        ],
        correctIndex: 1,
        explanation:
          "Take the next exit, then pull over. Stopping inside a roundabout blocks the circulating lane the ambulance needs to use.",
        context:
          "If you have not yet entered, the answer is different: pull over and let it pass before entering at all. The handbook's general instruction for roundabouts is to avoid stopping in one under any circumstances.",
        trap: "Stopping is the right answer almost everywhere else and the wrong one here, because it converts you into the obstruction.",
        excerptKey: "roundabout-emergency",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 6.A Roundabouts",
        sourceUrl: hb(39),
      },
      {
        id: "wi_s6_05",
        topic: "parking",
        question:
          "Where does Wisconsin statute say you may not park, absent a sign saying otherwise?",
        choices: [
          "Within 10 feet of a fire hydrant",
          "Within 20 feet of a fire hydrant",
          "Within 25 feet of a fire hydrant",
          "Within 30 feet of a fire hydrant",
        ],
        correctIndex: 0,
        explanation:
          "Ten feet from a hydrant, unless an official traffic sign requires more.",
        context:
          "The companion figures are 4 feet from a driveway or alley entrance and 15 feet from the near limits of a crosswalk. The handbook never prints any of them - it mentions only yellow kerb markings and the area in front of hydrants.",
        trap: "Fifteen feet is the hydrant number in many states and the crosswalk number in Wisconsin.",
        excerptKey: "st-park-hydrant-10",
        sourceLabel: "Wisconsin Statutes Section 346.53(3)",
        sourceUrl: stat("346.53"),
      },
      {
        id: "wi_s6_06",
        topic: "signals",
        question: "What must you do at a flashing yellow light?",
        choices: [
          "Stop completely, then proceed",
          "Slow down, check for cross traffic and proceed with caution",
          "Stop and wait for a green",
          "Treat it as a stop sign",
        ],
        correctIndex: 1,
        explanation:
          "Slow, look, proceed. No stop is required, but the light is telling you that something warrants attention.",
        context:
          "Its counterpart, a flashing red, does require a full stop before proceeding when safe. Many rural Wisconsin crossroads pair the two: yellow on the through road, red on the minor road.",
        trap: "Facing the yellow does not mean the crossing road has stopped. It means you have the caution phase, not a guarantee.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(33),
      },
      {
        id: "wi_s6_07",
        topic: "sharing",
        question:
          "You are meeting a school bus stopped with red lights flashing on an undivided two-lane road. What must you do?",
        choices: [
          "Stop at least 20 feet from the bus",
          "Continue slowly, watching for children",
          "Stop only if children are crossing",
          "Pass on the left with care",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet, from either direction, and you stay stopped until the bus moves or the red lights go out.",
        context:
          "The only exception is a divided highway with a barrier where you are on the far side. Lane count, painted medians and turn lanes do not create that exception.",
        trap: "\"No children in sight\" is not a condition of the rule. The red lights are.",
        excerptKey: "schoolbus-20-feet",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 10.C School Buses",
        sourceUrl: hb(51),
      },
      {
        id: "wi_s6_08",
        topic: "safety",
        question: "What following distance does Wisconsin teach in good conditions?",
        choices: ["Two seconds", "Three seconds", "Four seconds", "Five seconds"],
        correctIndex: 2,
        explanation:
          "Four seconds, counted against a fixed object, with a second added for every adverse condition.",
        context:
          "Wisconsin also lists the situations calling for more: slippery roads, following a large vehicle or a two-wheeler, carrying a heavy load, being tailgated, approaching a railroad crossing, and stopping on a hill.",
        trap: "Three seconds is the standard figure in several neighbouring states' manuals, and it is not Wisconsin's.",
        excerptKey: "following-count",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.B Understanding Vehicle Speed",
        sourceUrl: hb(10),
      },
      {
        id: "wi_s6_09",
        topic: "impairment",
        question:
          "Refusing a prohibited alcohol concentration test in Wisconsin leads to what minimum licence consequence?",
        choices: [
          "A 30-day suspension",
          "A 90-day suspension",
          "Six months",
          "At least one year",
        ],
        correctIndex: 3,
        explanation:
          "At least a year, along with an arrest for violating the Implied Consent Law and other consequences.",
        context:
          "The refusal is a separate violation from any underlying impaired-driving offence, so it is added to whatever the evidence supports rather than substituted for it.",
        trap: "Declining the test is often imagined as a way to leave no evidence. In Wisconsin it creates a fresh offence.",
        excerptKey: "implied-consent",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 9.A Alcohol, Drugs and Driving",
        sourceUrl: hb(49),
      },
      {
        id: "wi_s6_10",
        topic: "rules",
        question: "What does a dashed white line between two lanes mean?",
        choices: [
          "You may cross it when it is safe",
          "You may never cross it",
          "It separates opposing traffic",
          "It marks the edge of the roadway",
        ],
        correctIndex: 0,
        explanation:
          "A dashed white line divides lanes going the same way and may be crossed when it is safe to do so.",
        context:
          "A solid white line between lanes means you should not cross, except to avoid a hazard or to turn within the next block. A solid white line at the far right marks the edge of the traffic lane.",
        trap: "White separates same-direction lanes. Any answer about oncoming traffic is describing a yellow line.",
        excerptKey: "lines-white-dashed",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.B Types of Line Markings",
        sourceUrl: hb(34),
      },
      {
        id: "wi_s6_11",
        topic: "licensing",
        question:
          "How long may a Wisconsin instruction permit holder aged 18 or over hold the permit before applying for a probationary licence?",
        choices: [
          "Seven days",
          "One month",
          "Three months",
          "Six months, the same as a driver under 18",
        ],
        correctIndex: 0,
        explanation:
          "Seven days for an adult. The six-month wait, the driver education requirement and the 50 practice hours apply only under 18.",
        context:
          "An adult applicant still needs the knowledge test, the signs test and the vision screening before the permit is issued, and the skills test before the licence. A Class D instruction permit is valid for 18 months.",
        trap: "The six-month figure is so strongly associated with Wisconsin permits that it gets applied to adults, who wait a week.",
        excerptKey: "prob-six-months",
        sourceLabel: "WisDOT - Instruction permit (temps)",
        sourceUrl: "https://wisconsindot.gov/Pages/dmv/teen-driver/yr-frst-lcns/permit.aspx",
      },
      {
        id: "wi_s6_12",
        topic: "emergencies",
        question:
          "Your engine cuts out at speed on a Wisconsin highway. What should you expect and do?",
        choices: [
          "The steering will be hard to turn, so hold the wheel and pull over when safe",
          "Turn the key fully off to reset the engine",
          "Apply the parking brake immediately",
          "Shift into reverse to slow the car",
        ],
        correctIndex: 0,
        explanation:
          "Expect heavy steering, keep hold of the wheel, leave the key in the on position and pull to the side when it is safe.",
        context:
          "Turning the key fully off can lock the steering, which is why the handbook says to leave it on. Every roadside-emergency drill in the book follows the same order: stabilise, slow gradually, then leave the road.",
        trap: "Reaching for the key or the parking brake is the instinct, and both take away control you still need.",
        excerptKey: "brakes-fail",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 8.C Roadside Emergencies",
        sourceUrl: hb(48),
      },
      {
        id: "wi_s6_13",
        topic: "signs",
        question:
          "A yellow diamond shows a car with wavy lines behind it. What is it warning you about?",
        choices: [
          "A sharp turn ahead",
          "A slippery road ahead",
          "A lane ending",
          "A pedestrian crossing",
        ],
        correctIndex: 1,
        explanation:
          "It is the slippery-when-wet warning, and Wisconsin's instruction is to slow down when you see it.",
        context:
          "The warning family also includes the intersection sign, divided highway, signal ahead, deer crossing, sharp turn, lane ends, merge, hill, two-way traffic, curved road, stop ahead and roundabout ahead. All are yellow diamonds unless a school zone makes them fluorescent green.",
        trap: "Wisconsin's most slippery conditions are the ones the sign cannot predict: shaded spots, bridges, and the first rain on dry pavement.",
        excerptKey: "signs-warning-yellow",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.A Warning",
        sourceUrl: hb(22),
      },
      {
        id: "wi_s6_14",
        topic: "rightOfWay",
        question:
          "Two drivers arrive at a Wisconsin four-way stop, one clearly before the other. Who goes first?",
        choices: [
          "The driver on the right",
          "The driver who arrived first",
          "The driver going straight",
          "The driver on the wider road",
        ],
        correctIndex: 1,
        explanation:
          "Order of arrival decides it. The right-hand rule only breaks a genuine tie.",
        context:
          "Wisconsin's list also puts pedestrians, bicyclists and drivers still in the intersection ahead of everyone waiting, and it explicitly warns against assuming that the vehicle on the right always goes.",
        trap: "The right-hand rule is remembered as the whole answer. It is the tie-breaker, not the first test.",
        excerptKey: "row-fourway",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.A Right-Of-Way",
        sourceUrl: hb(9),
      },
      {
        id: "wi_s6_15",
        topic: "speed",
        question: "When may you exceed the posted speed limit in Wisconsin?",
        choices: [
          "When passing another vehicle",
          "When traffic around you is moving faster",
          "Never",
          "On a freeway in good conditions",
        ],
        correctIndex: 2,
        explanation:
          "Never. Wisconsin states directly that it is illegal to go over the posted limit and that you may not exceed it to pass another vehicle.",
        context:
          "The posted number is a maximum for good conditions, not a target. Below it, the basic rule still binds - a speed that is reasonable and prudent for the conditions actually present.",
        trap: "Completing a pass is the situation that most tempts drivers over the limit, and it is the exception Wisconsin names and refuses.",
        excerptKey: "speed-no-pass",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.B Understanding Vehicle Speed",
        sourceUrl: hb(10),
      },
      {
        id: "wi_s6_16",
        topic: "safety",
        question:
          "What should you do if an oncoming driver leaves their high beams on?",
        choices: [
          "Flash your own high beams at them",
          "Look toward the right side of the road",
          "Close one eye until they pass",
          "Slow to a stop",
        ],
        correctIndex: 1,
        explanation:
          "Look toward the right edge of the road. That keeps you steering by the road's own reference line while the glare passes.",
        context:
          "You dip your own beams as soon as a vehicle comes toward you. High beams belong on an empty road, and Wisconsin also suggests them in unfamiliar places and construction areas.",
        trap: "Retaliating with your own high beams blinds two drivers instead of one.",
        excerptKey: "highbeams-dim",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.K Communication",
        sourceUrl: hb(21),
      },
      {
        id: "wi_s6_17",
        topic: "licensing",
        question:
          "How many questions are on Wisconsin's highway signs test, and how many must you answer correctly?",
        choices: [
          "10 questions, 8 correct",
          "15 questions, 12 correct",
          "20 questions, 16 correct",
          "25 questions, 20 correct",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen questions, twelve correct - 80 percent, the same pass mark as the 50-question knowledge test.",
        context:
          "It tests your ability to read and understand highway signs regulating, warning and directing traffic. It needs no appointment, and the handbook advises studying every sign in it because the test may reach any of them.",
        trap: "The two tests share a pass percentage and nothing else. Twelve of 15 is not a section of the 40 of 50.",
        excerptKey: "test-signs-15",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 1.B Highway Signs Test",
        sourceUrl: hb(1),
      },
      {
        id: "wi_s6_18",
        topic: "rules",
        question:
          "You are approaching a Wisconsin intersection and want to turn into a driveway just past it. When should you signal?",
        choices: [
          "100 feet before the intersection",
          "As you enter the intersection",
          "Once you have crossed the intersection",
          "Only after you begin to slow",
        ],
        correctIndex: 2,
        explanation:
          "Signal after you cross. Signalling on the approach tells everyone you are turning at the intersection, which is not what you are doing.",
        context:
          "For a turn at the intersection itself, the signal runs for about three seconds, roughly 100 feet, before you turn - the statute puts it as not less than the last 100 feet travelled.",
        trap: "An early signal is usually a virtue and is misinformation here, because a driver waiting to pull out reads it as a turn into their road.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.K Communication",
        sourceUrl: hb(21),
      },
      {
        id: "wi_s6_19",
        topic: "sharing",
        question:
          "Where are a large truck's blind spots, according to the Wisconsin handbook?",
        choices: [
          "Only behind the trailer",
          "About 200 feet behind and 20 feet in front",
          "About 20 feet behind and 200 feet in front",
          "Only on the driver's left side",
        ],
        correctIndex: 1,
        explanation:
          "Roughly 200 feet behind and 20 feet in front. The long one is behind, which is where most cars sit.",
        context:
          "The remedy is to be decisive: speed up or drop back so the driver can see you, and if you are overtaking, clear the blind spot quickly rather than travelling alongside.",
        trap: "Reversing the two figures is the easy error. Two hundred feet behind is about thirteen car lengths.",
        excerptKey: "no-zones",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 10.F No-Zones",
        sourceUrl: hb(52),
      },
      {
        id: "wi_s6_20",
        topic: "parking",
        question:
          "You are parking facing downhill on a Wisconsin street. Which way do the front wheels go?",
        choices: ["Left", "Right", "Straight", "It depends on whether there is a curb"],
        correctIndex: 1,
        explanation:
          "Right, whether or not there is a curb. With a curb the tyre catches it; without one the car rolls toward the verge instead of the road.",
        context:
          "Uphill is where the curb matters: with a curb the wheels go left, without one they go right. The emergency brake goes on in every case.",
        trap: "\"Turn into the curb\" gives the right answer downhill and the wrong one facing uphill.",
        excerptKey: "parking-hill-down",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.J Parking",
        sourceUrl: hb(19),
      },
      {
        id: "wi_s6_21",
        topic: "signals",
        question: "What does a steady green light require of you before you move off?",
        choices: [
          "Nothing - green means go",
          "Allowing cross traffic to clear the intersection",
          "Waiting three seconds",
          "Signalling your intention",
        ],
        correctIndex: 1,
        explanation:
          "You may go, once the intersection is clear of cross traffic. A green light does not empty the junction for you.",
        context:
          "You also yield to emergency vehicles and to anyone else the law puts ahead of you, and a left turn on a steady green remains unprotected against oncoming traffic.",
        trap: "Moving the instant the light changes is how a driver with the right of way meets someone running the red.",
        excerptKey: "signal-steady-green",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(33),
      },
      {
        id: "wi_s6_22",
        topic: "impairment",
        question:
          "What does Wisconsin say about driving after taking an over-the-counter medicine?",
        choices: [
          "They can affect driving, so read the warning label first",
          "Non-prescription medicines are not a concern",
          "They only matter if combined with alcohol",
          "They are covered only for commercial drivers",
        ],
        correctIndex: 0,
        explanation:
          "Non-prescription drugs are named alongside prescription ones. The instruction is to check the label for side effects before you drive.",
        context:
          "It is illegal to drive under the influence of any drug in Wisconsin, and a label warning against operating heavy machinery includes a motor vehicle.",
        trap: "Being able to buy something without a prescription says nothing about whether it makes you unsafe behind the wheel.",
        excerptKey: "drugs-illegal",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 9 Dangerous Driving Behaviors",
        sourceUrl: hb(49),
      },
      {
        id: "wi_s6_23",
        topic: "emergencies",
        question:
          "You are in a Wisconsin crash where someone is injured. Where should you be while waiting for help?",
        choices: [
          "Directing traffic around the scene",
          "In your vehicle, if it is safe to be there",
          "Walking to the nearest house for help",
          "Standing in the roadway to warn oncoming drivers",
        ],
        correctIndex: 1,
        explanation:
          "Stay in the vehicle if it is safe. Turn on the emergency flashers to warn other drivers rather than doing it in person.",
        context:
          "The rest of the sequence is to call 911, stay at the scene, and leave the vehicles where they are. Leaving the scene of a crash with an injury or death is a crime.",
        trap: "Getting out to help or to warn traffic puts a person on foot into the lane where the crash just happened.",
        excerptKey: "crash-injured",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 8.B Crashes",
        sourceUrl: hb(47),
      },
      {
        id: "wi_s6_24",
        topic: "rules",
        question:
          "A Wisconsin road has a solid yellow line on your side and a dashed yellow line on the other. May you pass?",
        choices: [
          "Yes, if the road ahead is clear",
          "No - the solid line is on your side",
          "Yes, but only a vehicle going under half the speed limit",
          "Only if you can complete the pass within 100 feet",
        ],
        correctIndex: 1,
        explanation:
          "The solid side may not pass. The dashed side may, when it is safe. The line on your side is the one that governs you.",
        context:
          "Wisconsin also marks no-passing areas with a yellow pennant sign reading NO PASSING ZONE on the left side of the road, and signs and lines usually agree.",
        trap: "Looking at the dashed half and concluding the road is open reads someone else's permission as your own.",
        excerptKey: "lines-mixed-yellow",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.B Types of Line Markings",
        sourceUrl: hb(35),
      },
      {
        id: "wi_s6_25",
        topic: "safety",
        question:
          "How does Wisconsin describe the correct way to handle an emergency stop in a car without anti-lock brakes on a slippery road?",
        choices: [
          "Press the pedal down hard and hold it",
          "Gently pump the brakes",
          "Use the parking brake",
          "Shift to a lower gear and coast",
        ],
        correctIndex: 1,
        explanation:
          "Pump gently. That is what keeps the wheels from locking on a car with no anti-lock system, which is what keeps you able to steer.",
        context:
          "The opposite technique applies where the car does have anti-lock brakes: firm, continuous pressure held until the vehicle stops or the danger passes. Using the wrong method for the car you are in makes the stop worse in both directions.",
        trap: "Pumping an anti-lock system throws away most of its braking, and standing on a non-anti-lock system locks the wheels.",
        excerptKey: "no-abs-pump",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 7.B Severe Weather",
        sourceUrl: hb(44),
      },
      {
        id: "wi_s6_26",
        topic: "signs",
        question:
          "You see an orange sign reading ROAD WORK AHEAD 1000 FT. What should you do?",
        choices: [
          "Maintain speed until you reach the work",
          "Slow down or move over",
          "Stop and wait for a flagger",
          "Turn around and find another route",
        ],
        correctIndex: 1,
        explanation:
          "Slow down or move over. The distance on the sign is there so you can act before you arrive rather than at the cones.",
        context:
          "Work zones carry two additional consequences: traffic fines double, and phone use is limited to reporting an emergency. A flagger's directions must be followed even where they contradict the signs.",
        trap: "Treating the distance as permission to keep your speed for another thousand feet is exactly what the advance sign is designed to prevent.",
        excerptKey: "signs-construction",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.C Construction",
        sourceUrl: hb(26),
      },
      {
        id: "wi_s6_27",
        topic: "rightOfWay",
        question:
          "You are turning left at a Wisconsin intersection and a pedestrian is crossing the road you are turning into. Who goes first?",
        choices: [
          "You, because you started the turn first",
          "The pedestrian",
          "Whoever is closer to the crosswalk",
          "You, if the pedestrian has not stepped off the kerb",
        ],
        correctIndex: 1,
        explanation:
          "The pedestrian. Wisconsin puts people ahead of turning vehicles at every stage of the turn, arrow or no arrow.",
        context:
          "The handbook specifically tells you to check for pedestrians crossing on your left as part of the left-turn routine, and the green arrow entry finishes with a reminder to watch for pedestrians even when the turn is protected.",
        trap: "Having committed to the turn feels like having priority. It does not displace anyone lawfully in the crosswalk.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.G Turning",
        sourceUrl: hb(14),
      },
      {
        id: "wi_s6_28",
        topic: "licensing",
        question:
          "What happens to a Wisconsin instruction permit if the holder reaches 12 or more demerit points within 12 months?",
        choices: [
          "It is suspended for six months",
          "It is cancelled permanently",
          "Nothing, since points apply only to licensed drivers",
          "It is suspended for 30 days",
        ],
        correctIndex: 0,
        explanation:
          "Six months' suspension. Points apply to permit holders, and they are doubled from the second conviction onward.",
        context:
          "The 12-point threshold is the same one that suspends or revokes a full driving privilege. A permit holder reaches it faster because of the doubling and because a permit also carries absolute sobriety and a total ban on phone use.",
        trap: "Assuming a permit is too provisional to carry penalties gets it backwards - the rules for a permit are stricter, not looser.",
        excerptKey: "points-doubled",
        sourceLabel: "WisDOT - Instruction permit (temps)",
        sourceUrl: "https://wisconsindot.gov/Pages/dmv/teen-driver/yr-frst-lcns/permit.aspx",
      },
      {
        id: "wi_s6_29",
        topic: "sharing",
        question:
          "A vehicle displaying a slow-moving vehicle emblem is ahead of you on a rural Wisconsin highway. What should you assume about its speed?",
        choices: [
          "It may be travelling at 25 mph or less",
          "It is travelling at about 40 mph",
          "It is stationary",
          "It is travelling at the posted limit",
        ],
        correctIndex: 0,
        explanation:
          "Twenty-five miles per hour or less. On a road posted at 55 that is a closing speed of 30 mph or more.",
        context:
          "The emblem is a triangle with reflective orange markings. Farm machinery carrying one may have no brake lights or turn signals, may be wider than it appears, and the operator may not see or hear you.",
        trap: "Judging the gap by how the vehicle looks rather than by the emblem is how drivers arrive on a tractor's tailgate.",
        excerptKey: "signs-slow-moving",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.B Regulatory",
        sourceUrl: hb(25),
      },
      {
        id: "wi_s6_30",
        topic: "speed",
        question:
          "You are entering a Wisconsin freeway on a metered ramp with a signal at the end. What should you do?",
        choices: [
          "Ignore the signal if the freeway is clear",
          "Pull up to the white stop line so your tyres trigger the sensors, and wait for green",
          "Stop well short of the line to leave room",
          "Merge from the ramp without stopping",
        ],
        correctIndex: 1,
        explanation:
          "Pull right up to the stop line - the sensors are in the pavement there - and go when your lane's signal turns green.",
        context:
          "Ramp meters space vehicles onto the freeway to reduce congestion, and each lane on the ramp has its own signal. Disobeying one can earn a ticket. The meter is active when the sign reading ramp metered when flashing is lit.",
        trap: "Stopping short of the line leaves the sensor untriggered, so the signal never changes and the queue behind you stops moving.",
        excerptKey: "merge-gap",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 6.B Metered Ramps",
        sourceUrl: hb(41),
      },
    ],
  },
];
