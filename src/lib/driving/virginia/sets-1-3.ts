import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Virginia Driver's Manual (DMV 39),
// published by the Virginia Department of Motor Vehicles, plus dmv.virginia.gov
// pages for the two-part knowledge exam, the juvenile licensing restrictions,
// the demerit point system and the insurance minimums - and the Code of
// Virginia (Title 46.2) for the handful of rules the manual states only as a
// table, states out of date, or does not state at all.
//
// Three of those gaps matter enough to name. The manual's speed section gives
// 55 mph as the ceiling for "all other roads" and never mentions the 70 mph
// interstate limit that Sec. 46.2-870 authorises. Its insurance table still
// shows the 2022 minimums and still offers the $500 uninsured motor vehicle
// fee, which no longer exists; DMV's own insurance page now shows 50/100/25
// for policies effective on or after 1 January 2025 and no fee option at all.
// And the nine-month learner's permit holding period for under-18 applicants
// appears on DMV's driver education page but nowhere in the manual. Where the
// two disagree, these questions follow the live DMV page and the statute, and
// say so.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads DMV's own
// authoritative wording on the government's site.
const HB = "https://www.dmv.virginia.gov/sites/default/files/forms/dmv39.pdf";
const KNOW = "https://www.dmv.virginia.gov/licenses-ids/exams/know-exam";
const TEEN = "https://www.dmv.virginia.gov/licenses-ids/learners/restrictions";
const ED = "https://www.dmv.virginia.gov/licenses-ids/learners/ed-reqs";
const PTS = "https://www.dmv.virginia.gov/licenses-ids/improvement/points/system";
const SPEED_FAQ = "https://www.dmv.virginia.gov/safety/programs/speeding/faqs";
const CODE_870 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-870/";
const CODE_873 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-873/";
const CODE_839 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-839/";
const CODE_888 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-888/";
const CODE_924 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-924/";

export const virginiaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Virginia Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Virginia: what the shapes and colours mean, who goes first, and the handful of numbers DMV's two-part knowledge exam expects you to know cold.",
    questions: [
      {
        id: "va_s1_01",
        topic: "signs",
        question:
          "You reach an eight-sided red sign at an intersection. What does Virginia require of you?",
        choices: [
          "Come to a complete stop, then go once the way is clear",
          "Slow to a crawl and continue if nothing is coming",
          "Yield only to traffic already inside the intersection",
          "Stop only when a pedestrian is waiting to cross",
        ],
        correctIndex: 0,
        explanation:
          "The octagon has one meaning and only one: a full stop. Virginia tells you where that stop happens too - at the sign, the stop line, the crosswalk or the curb, whichever you meet first.",
        context:
          "Virginia's signs carry meaning in shape and colour before you can read a word of them, which matters in fog or heavy rain. The octagon is reserved for STOP, the downward triangle for YIELD, the yellow diamond warns of something ahead, and the pentagon marks a school zone. Learning the shape system pays off more than memorising individual signs, because part one of the knowledge exam can show you a sign you have never met.",
        trap:
          "A rolling stop is still a failure to stop. The wheels have to stop turning, however empty the cross street looks.",
        excerptKey: "shape-octagon",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Shapes",
        sourceUrl: HB,
      },
      {
        id: "va_s1_02",
        topic: "signals",
        question: "A traffic light ahead of you turns steady red. Where must you stop?",
        choices: [
          "At the stop line, or before the crosswalk or intersection if there is no line",
          "Level with the signal head so you can watch it change",
          "Anywhere within one car length of the signal",
          "Only if a vehicle is approaching from the cross street",
        ],
        correctIndex: 0,
        explanation:
          "The stop line is your limit. Where the pavement carries no line, you stop before the crosswalk, and if there is no crosswalk either, before you enter the intersection at all.",
        context:
          "Virginia's steady signals run red (stop and stay stopped), yellow (the change is coming) and green (go if the way is clear). Turns are the exception to red: right on red is allowed after a complete stop unless a sign or a red arrow forbids it, and left on red is allowed one-way street to one-way street. A police officer directing traffic outranks the signal in every case.",
        trap:
          "Creeping forward to see the signal head puts your bumper inside the crosswalk, which is exactly where pedestrians are entitled to be.",
        excerptKey: "red-light-stop",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s1_03",
        topic: "speed",
        question:
          "A residential street in Virginia carries no speed limit signs at all. What is the limit?",
        choices: ["15 mph", "20 mph", "25 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "With nothing posted, school, business and residential areas default to 25 mph. The absence of a sign is not the absence of a limit.",
        context:
          "Virginia sets three statutory defaults that apply wherever a sign does not say otherwise: 25 mph in school, business and residential areas, 35 mph on unpaved roads, and 55 mph on everything else. Those figures cover passenger cars and motorcycles. The posted limit, when there is one, always wins over the default.",
        trap:
          "Plenty of neighbourhoods post 25 mph anyway, so drivers assume an unsigned street has no limit. It has the same one.",
        excerptKey: "default-speed-limits",
        sourceLabel: "Virginia Driver's Manual - Section 3, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "va_s1_04",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection with no signs or signals at exactly the same moment. Who goes first?",
        choices: [
          "Whoever signals their intention first",
          "The driver on the right",
          "The car travelling straight rather than turning",
          "The larger vehicle, because it needs more room",
        ],
        correctIndex: 1,
        explanation:
          "Virginia settles a genuine tie by position: the driver on the left yields, so the driver on the right moves off first.",
        context:
          "Right of way at an uncontrolled intersection is decided by arrival order first - whoever got there first goes first. The left-yields-to-right rule is only the tie-break for a genuinely simultaneous arrival. The same tie-break applies at an all-way stop and at an intersection where the signals have gone dark.",
        trap:
          "A turn signal announces what you intend to do. It does not create a right to do it before anyone else.",
        excerptKey: "yield-left-yields-right",
        sourceLabel: "Virginia Driver's Manual - Section 3, Yielding the Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "va_s1_05",
        topic: "safety",
        question:
          "You are driving three adult friends, two of them in the back seat. Under Virginia's seat belt law, who must be belted?",
        choices: [
          "Only you, because you are the driver",
          "Only the people sitting in the front",
          "You and every passenger, front seat and back seat alike",
          "Everyone except passengers over 18",
        ],
        correctIndex: 2,
        explanation:
          "Virginia now requires the driver and every passenger to be belted no matter which seat they are in. The old front-seat-only rule is gone.",
        context:
          "The belt requirement was widened so that rear seat occupants are covered too, and DMV dates that change to 1 July 2025. Separately, a driver carrying anyone under 18 is responsible for making sure that person is properly secured in a belt, booster or child seat wherever they are sitting. A physician can grant a written medical waiver, which has to be carried in the vehicle.",
        trap:
          "Many states still exempt adults in the back seat, so drivers who learned elsewhere assume Virginia does too. It does not.",
        excerptKey: "seat-belt-all-occupants",
        sourceLabel: "Virginia Driver's Manual - Section 4, Seat Belts",
        sourceUrl: HB,
      },
      {
        id: "va_s1_06",
        topic: "signs",
        question: "A sign uses yellow with black lettering or symbols. What is it telling you?",
        choices: [
          "A regulation you are legally required to obey",
          "A warning about a condition or hazard ahead",
          "A service such as fuel or lodging",
          "Road work in progress",
        ],
        correctIndex: 1,
        explanation:
          "Yellow with black is Virginia's warning colour. It flags something ahead - a curve, a crossing, a change in the road - rather than imposing a rule.",
        context:
          "The colour code is worth learning as a system. Red with white means stop, yield, do not or no. Black on white is regulatory: the operation is controlled by law. Green, blue and brown are informational - destinations, motorist services and historical or cultural sites respectively. Orange marks construction and pink marks an incident area.",
        trap:
          "Orange also looks yellowish at a distance, but orange means a work zone, not a general hazard warning.",
        excerptKey: "sign-yellow-black",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "va_s1_07",
        topic: "rules",
        question: "How far ahead of a turn should you begin signalling in Virginia?",
        choices: [
          "Three or four seconds, about 100 feet, before the turn",
          "Just as you begin to turn the wheel",
          "About one second before you turn",
          "At least 300 feet before the turn",
        ],
        correctIndex: 0,
        explanation:
          "Virginia gives the figure two ways so you can use whichever is easier to judge: three to four seconds, or roughly 100 feet.",
        context:
          "Signalling is required by law for turns, lane changes and entering or leaving a highway, and the manual asks you to use it even when the road looks empty. The habit matters most where a driver waiting to pull out is reading your intentions. After the manoeuvre, check that the signal has actually cancelled - a stale signal misleads everyone behind you.",
        trap:
          "Signalling as you start the turn is too late to be useful. The point of a signal is warning, not narration.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Virginia Driver's Manual - Section 3, Turn Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s1_08",
        topic: "licensing",
        question: "Who has to be with you when you drive on a Virginia learner's permit?",
        choices: [
          "Any licensed driver aged 18 or over, sitting anywhere in the car",
          "A licensed driver at least 21 years old, in the front passenger seat",
          "A parent, and nobody else",
          "Nobody, on roads posted 35 mph or below",
        ],
        correctIndex: 1,
        explanation:
          "The supervising driver must hold a valid licence, be at least 21, and be sitting in the front passenger seat where they can actually help.",
        context:
          "There is one narrow exception to the age 21 rule: an 18, 19 or 20 year old may supervise if they are your legal guardian or your brother, sister, half-sibling or step-sibling. Whoever it is has to be alert, able to assist, and legally permitted to drive at that moment - someone whose own licence is suspended cannot supervise you.",
        trap:
          "An 18-year-old friend with a clean licence still does not qualify. The exception is about relationship, not driving record.",
        excerptKey: "learners-permit-21",
        sourceLabel: "Virginia Driver's Manual - Section 6, Learner's Permit",
        sourceUrl: HB,
      },
      {
        id: "va_s1_09",
        topic: "signals",
        question: "A traffic light ahead is flashing yellow. What does it mean?",
        choices: [
          "Stop and yield before proceeding",
          "Come to a complete stop as at a stop sign",
          "Slow down and proceed with caution",
          "The signal is out of service and should be ignored",
        ],
        correctIndex: 2,
        explanation:
          "Flashing yellow means caution, not stop. Virginia puts these where the hazard is higher than normal, so slow down and look before you commit.",
        context:
          "Flashing signals reverse the usual pairing. Flashing red behaves exactly like a stop sign - stop completely, yield, then go when clear. Flashing yellow simply asks for extra care. A flashing yellow arrow means you may turn if the way is clear, but you are yielding to oncoming traffic and to pedestrians, not turning under protection.",
        trap:
          "A dark signal is a different animal entirely. If no lights show at all, every vehicle must stop and treat the intersection as an all-way stop.",
        excerptKey: "flashing-yellow",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s1_10",
        topic: "sharing",
        question: "How much room must you leave when you pass a bicyclist in Virginia?",
        choices: [
          "At least two feet",
          "At least three feet",
          "At least four feet",
          "Whatever the lane happens to allow",
        ],
        correctIndex: 1,
        explanation:
          "Three feet to the left is the legal minimum, and you must reduce speed as you go by. The same clearance covers mopeds, power-assisted bicycles, animals and animal-drawn vehicles.",
        context:
          "The three-foot rule has a second half that catches people out: if the lane is not wide enough to give three feet while staying in it, you are required to change lanes to pass. Virginia also bans motor vehicles from using a marked bicycle lane, including as a way of getting around a cyclist.",
        trap:
          "Three feet is a floor, not a target. Squeezing past inside the lane because the cyclist is riding to the right is exactly what the lane-change rule forbids.",
        excerptKey: "pass-bike-three-feet",
        sourceLabel: "Virginia Driver's Manual - Section 3, Passing",
        sourceUrl: HB,
      },
      {
        id: "va_s1_11",
        topic: "speed",
        question: "What does a posted speed limit sign actually tell you in Virginia?",
        choices: [
          "A target speed you should try to hold",
          "A minimum you must not fall below",
          "The maximum legal speed under ideal conditions",
          "An advisory figure that only applies in good weather",
        ],
        correctIndex: 2,
        explanation:
          "The number is a ceiling, and it assumes ideal conditions. In rain, snow or ice you can be ticketed for driving too fast even at or below the posted figure.",
        context:
          "Virginia lets you drive slower than the limit as long as you do not impede the normal movement of traffic, but never faster. School zone and work zone limits override the ordinary posted number when they are in effect. Some roads now carry electronic signs whose limit changes with weather or traffic, and that displayed figure is the legal one.",
        trap:
          "There is no unofficial tolerance. DMV states plainly that Virginia has no buffer zone for speeding.",
        excerptKey: "speed-limit-def",
        sourceLabel: "Virginia Driver's Manual - Section 3, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "va_s1_12",
        topic: "impairment",
        question:
          "At what blood alcohol content is a driver aged 21 or over legally considered to be driving under the influence in Virginia?",
        choices: [".02 percent", ".04 percent", ".05 percent", ".08 percent"],
        correctIndex: 3,
        explanation:
          "For drivers 21 and over the figure is .08 percent. That is the point at which the law presumes impairment without needing to argue about it.",
        context:
          "The .08 threshold is a floor, not a shield. If your driving is impaired you can be convicted with a BAC below .08, and the same penalties apply to impairment by drugs, prescription or otherwise. Under 21 the number drops to .02, and Virginia treats that as illegal consumption with its own separate penalty.",
        trap:
          "People read .08 as a safe allowance and work backwards to a drink count. Alcohol affects vision, judgement and coordination well before .08.",
        excerptKey: "dui-08",
        sourceLabel: "Virginia Driver's Manual - Section 3, Drunk and Drugged Driving",
        sourceUrl: HB,
      },
      {
        id: "va_s1_13",
        topic: "signs",
        question: "A five-sided sign appears at the roadside. What is it marking?",
        choices: [
          "A railroad crossing",
          "A school zone or school crossing",
          "A yield ahead",
          "The start of a no-passing zone",
        ],
        correctIndex: 1,
        explanation:
          "The pentagon is Virginia's school shape. A second sign carrying an arrow may follow it to pin down exactly where the crosswalk is.",
        context:
          "School signs are often printed in the strong yellow-green that Virginia reserves for school, pedestrian and bicyclist activity, so the shape and the colour reinforce each other. Where a school crossing zone is actually in force the limit is 25 mph, and the signs are supposed to be lit or in position for thirty minutes before and after school hours.",
        trap:
          "The pentagon does not by itself impose a speed limit. It warns; the posted school zone sign and its flashers set the number.",
        excerptKey: "shape-pentagon",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Shapes",
        sourceUrl: HB,
      },
      {
        id: "va_s1_14",
        topic: "rightOfWay",
        question: "You are coming down an entrance ramp onto an interstate. Who yields?",
        choices: [
          "Traffic on the highway must make room for you",
          "Whichever vehicle is travelling faster",
          "You have priority because you are accelerating",
          "You must yield to traffic already on the highway",
        ],
        correctIndex: 3,
        explanation:
          "The merging driver yields. Use the ramp to match the speed of the traffic already there, then fit into a gap - do not expect one to open for you.",
        context:
          "Yielding in Virginia also means stopping if you cannot merge safely, which is why an unusable ramp is not a licence to force your way in. The same principle governs entering a roundabout and pulling out of a private road or driveway, except that a driveway requires a stop first and a yield to pedestrians as well as traffic.",
        trap:
          "The courtesy lane change many highway drivers make is exactly that - a courtesy. It does not shift the legal duty off the merging driver.",
        excerptKey: "yield-entrance-ramp",
        sourceLabel: "Virginia Driver's Manual - Section 3, Yielding the Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "va_s1_15",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Virginia?",
        choices: ["No closer than 5 feet", "No closer than 8 feet", "No closer than 10 feet", "No closer than 15 feet"],
        correctIndex: 3,
        explanation:
          "Fifteen feet. It is the same figure Virginia uses for the entrance to a fire, ambulance or rescue squad station.",
        context:
          "Virginia's parking prohibitions come as a set of distances worth learning together: 15 feet from a hydrant, 20 feet from an intersection, 50 feet from a railroad crossing, and 500 feet from fire trucks stopped answering an alarm. On top of that you may not double park, park on a crosswalk or sidewalk, block a driveway, or park in a bike lane.",
        trap:
          "Ten feet is the hydrant figure in several other states, which is why it is the wrong answer people reach for first.",
        excerptKey: "no-park-distances",
        sourceLabel: "Virginia Driver's Manual - Section 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "va_s1_16",
        topic: "safety",
        question: "When does Virginia law require your headlights to be on during the day?",
        choices: [
          "Whenever you are using your windshield wipers because of bad weather",
          "Only once it is fully dark",
          "Only in fog",
          "Only when visibility drops below 100 feet",
        ],
        correctIndex: 0,
        explanation:
          "Wipers on because of the weather means headlights on. It is a bright-line rule that saves you from judging visibility yourself.",
        context:
          "Two other headlight rules run alongside it. Headlights are required from sunset to sunrise, and they are required in rain, fog, snow or sleet whenever visibility falls to 500 feet. At night, switch to low beams within 200 feet of a vehicle you are following, and when an oncoming vehicle comes within 500 feet.",
        trap:
          "Daytime running lights are not headlights for this purpose - they usually leave your tail lights dark, which is exactly what other drivers need to see in rain.",
        excerptKey: "headlights-wipers",
        sourceLabel: "Virginia Driver's Manual - Section 3, Lights",
        sourceUrl: HB,
      },
      {
        id: "va_s1_17",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with its siren and lights going. What should you do?",
        choices: [
          "Speed up to clear the lane ahead of it",
          "Stop immediately in the lane you are in",
          "Pull over to the right edge of the road and stop until it has passed",
          "Move into the left lane and keep going",
        ],
        correctIndex: 2,
        explanation:
          "Yield right of way at once, pull to the right edge, and stop. Staying stopped until it is past means the driver does not have to guess what you will do next.",
        context:
          "Virginia extends this in two directions. If an emergency vehicle is coming at you in the opposite lane on an undivided highway, you must also pull over and stop. And once it has gone by, you may not follow closer than 500 feet while its lights are still flashing.",
        trap:
          "Trying to outrun it to the next turn-off is the classic error. The driver behind you is planning around a predictable stop, not a moving target.",
        excerptKey: "emergency-behind",
        sourceLabel: "Virginia Driver's Manual - Section 3, Yielding to Vehicles with Flashing Lights",
        sourceUrl: HB,
      },
      {
        id: "va_s1_18",
        topic: "rules",
        question: "What do broken white lines on the pavement mean?",
        choices: [
          "Passing is prohibited in both directions",
          "Lanes travelling the same way; you may change lanes with caution",
          "Traffic on the far side is coming toward you",
          "The lane is reserved for buses",
        ],
        correctIndex: 1,
        explanation:
          "White separates traffic going the same way, and a broken line means the lane change is permitted. Caution is still required - the line does not check your blind spot for you.",
        context:
          "The colour tells you direction and the pattern tells you permission. Yellow separates opposing directions; white separates same-direction lanes. Solid discourages or prohibits crossing, broken permits it. Double solid white lines, common alongside HOV lanes, may not be crossed at all.",
        trap:
          "Dotted white lines are a different marking again - short closely spaced rectangles that guide you through an intersection or onto a ramp, not an invitation to change lanes.",
        excerptKey: "broken-white",
        sourceLabel: "Virginia Driver's Manual - Section 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "va_s1_19",
        topic: "signals",
        question:
          "You have a steady green light and want to turn left. There is no green arrow. What are your obligations?",
        choices: [
          "Yield to oncoming traffic and to pedestrians in the intersection",
          "You have right of way because you have a green",
          "Oncoming traffic must stop for a turning vehicle",
          "Wait until the light turns yellow, then turn",
        ],
        correctIndex: 0,
        explanation:
          "A green ball permits the turn but protects nothing. You yield to everything coming the other way and to anyone on foot in the intersection.",
        context:
          "A green arrow is the protected turn; a green circle is permission to proceed when the way is clear. Virginia asks you specifically to check for motorcycles, bicycles and mopeds before turning, because their small profile makes them easy to miss and easy to misjudge for speed. If the light goes green while a pedestrian is still in the street, let them finish crossing.",
        trap:
          "Some intersections post a Left Turn Yield on Green sign to spell this out. Its absence does not mean you are protected.",
        excerptKey: "green-turn-yield",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s1_20",
        topic: "signs",
        question: "What does red used with white on a Virginia road sign convey?",
        choices: [
          "Stop, yield, do not, and no",
          "A warning about the road ahead",
          "Construction work in progress",
          "Motorist services such as fuel and food",
        ],
        correctIndex: 0,
        explanation:
          "Red with white is the prohibition family: stop signs, yield signs, do not enter, wrong way, and the circle-and-slash that bans a manoeuvre.",
        context:
          "The red circle with a diagonal slash is worth reading as a sentence: the circle means no, and the symbol inside tells you what is being forbidden. That is how one design covers no right turn, no U-turn, no trucks and everything else without new words. Parking restrictions use the same red-on-white convention.",
        trap:
          "Do Not Enter and Wrong Way are not merely advisory. Meeting one means you are already travelling against traffic and should slow, pull over and turn around.",
        excerptKey: "sign-red-white",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "va_s1_21",
        topic: "speed",
        question: "At what point does speeding become the criminal offence of reckless driving in Virginia?",
        choices: [
          "10 mph over the limit",
          "15 mph over the limit",
          "25 mph over the limit and no less",
          "20 mph or more over the limit, or over 85 mph whatever the limit",
        ],
        correctIndex: 3,
        explanation:
          "Either trigger will do it: 20 mph or more above the posted limit, or any speed above 85 mph regardless of what the limit is.",
        context:
          "Reckless driving is a misdemeanour criminal offence in Virginia, not a traffic ticket. A conviction can bring a fine, a suspended licence and a jail sentence, and it carries six demerit points. The 85 mph trigger is the one that surprises people, because 86 mph in a posted 70 mph zone is only 16 over - and still reckless driving.",
        trap:
          "Drivers assume the two triggers work together, so that you need to be both over 85 and 20 over. They are independent; either one is enough.",
        commonlyMissed: true,
        excerptKey: "reckless-20-over",
        sourceLabel: "Virginia Driver's Manual - Section 3, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "va_s1_22",
        topic: "sharing",
        question:
          "A school bus ahead of you stops with its red lights flashing and its stop arm out. What must you do?",
        choices: [
          "Slow to 20 mph and pass carefully",
          "Stop, and stay stopped until everyone is clear and the bus moves again",
          "Stop only if you can see children near the bus",
          "Stop only if you are travelling behind the bus",
        ],
        correctIndex: 1,
        explanation:
          "You stop, from any direction, on a highway, private road or school driveway - and you stay stopped until the people are clear and the bus is moving again.",
        context:
          "Virginia goes further than the flashing lights. You must also stop if the bus is loading or unloading and its signals are not switched on at all. The one exception is a bus on the far side of a median or physical barrier while you travel the other way. Passing a stopped school bus is charged as reckless driving, not as a simple infraction.",
        trap:
          "Waiting for the lights to go out is not the test. The bus has to actually start moving before you do.",
        excerptKey: "school-bus-stop",
        sourceLabel: "Virginia Driver's Manual - Section 3, Stopping for School Buses",
        sourceUrl: HB,
      },
      {
        id: "va_s1_23",
        topic: "licensing",
        question: "What does Virginia require you to have on you every time you drive?",
        choices: [
          "A valid driver's license or learner's permit",
          "Nothing, as long as your licence is valid on DMV's records",
          "A photograph of your licence on your phone",
          "Documents only when you are driving out of state",
        ],
        correctIndex: 0,
        explanation:
          "The physical credential has to be with you whenever you drive. Misusing it - lending it, altering it, letting someone else use it - is a separate offence.",
        context:
          "Two other documents belong in the car rather than your pocket. Virginia requires the vehicle registration card to be with you when you operate the vehicle, and DMV advises keeping proof of insurance in the car at all times. During a traffic stop, tell the officer where those documents are before you reach for them.",
        trap:
          "A licence that exists in DMV's database but not in the car is still a violation. The obligation is to carry it, not merely to hold it.",
        excerptKey: "carry-license",
        sourceLabel: "Virginia Driver's Manual - Section 6, License Types",
        sourceUrl: HB,
      },
      {
        id: "va_s1_24",
        topic: "safety",
        question: "Below 35 mph, how large a following gap does Virginia recommend?",
        choices: ["One second", "Two seconds", "Three seconds", "Four seconds"],
        correctIndex: 1,
        explanation:
          "Two seconds under 35 mph. The gap grows with speed: three seconds from 35 to 45, and four seconds from 46 to 70.",
        context:
          "You measure it by watching the vehicle ahead pass a fixed object - a sign, an overpass, a fence post - and counting until you reach the same spot. Add seconds for bad weather, heavy traffic, a worn vehicle, or when you are behind something that blocks your view. The manual warns that the whole scale stops working above 70 mph.",
        trap:
          "The familiar three-second rule is not Virginia's answer below 35 mph, and four seconds is not the answer at every highway speed either. The figure is banded.",
        excerptKey: "following-distance-table",
        sourceLabel: "Virginia Driver's Manual - Section 3, Following Distance",
        sourceUrl: HB,
      },
      {
        id: "va_s1_25",
        topic: "rightOfWay",
        question: "A pedestrian is lawfully crossing the road ahead of you. What does Virginia require?",
        choices: [
          "Sound your horn to warn them",
          "Pass slowly to their left",
          "Continue if you can clear the crossing before they reach you",
          "Come to a full stop",
        ],
        correctIndex: 3,
        explanation:
          "A full stop, not a slowing. Failing to stop and causing serious injury or death can be charged as a Class 1 misdemeanour.",
        context:
          "The statutory duty is to stop when a pedestrian is in your lane or in the next lane and approaching yours, and to stay stopped until they have cleared your lane. It applies at marked crosswalks, at the projection of a sidewalk at a block end, and at any intersection where the limit is 35 mph or less. A driver in an adjacent lane may not overtake a vehicle that has stopped for a pedestrian.",
        trap:
          "Beating the pedestrian across is not compliance. The rule is about their lane, not about who arrives first.",
        excerptKey: "pedestrian-lawfully-crossing",
        sourceLabel: "Virginia Driver's Manual - Section 3, Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "va_s1_26",
        topic: "parking",
        question: "You are parking next to a curb in Virginia. How close must you be?",
        choices: [
          "Within one foot of the curb",
          "Within two feet",
          "Within three feet",
          "There is no set distance",
        ],
        correctIndex: 0,
        explanation:
          "One foot is the limit. Parking further out narrows the travel lane and puts your car where moving traffic expects clear road.",
        context:
          "The general instruction is to get as far away from moving traffic as you can. On a shoulder, that means pulling over as far as the shoulder allows. On a two-way street you park on the right; on a one-way road either side is fine. Before you open the door, look for cars, bicyclists and pedestrians.",
        trap:
          "A wide gap feels safer to the parked car and is precisely the thing that puts cyclists into the traffic stream to get around you.",
        excerptKey: "park-one-foot-curb",
        sourceLabel: "Virginia Driver's Manual - Section 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "va_s1_27",
        topic: "rules",
        question: "What do double solid yellow lines down the centre of the road mean?",
        choices: [
          "Passing is allowed from both sides",
          "Passing is allowed from the right-hand side only",
          "The lanes on either side travel the same way",
          "Passing is not allowed in either direction",
        ],
        correctIndex: 3,
        explanation:
          "Two solid yellow lines separate opposing traffic and forbid passing from either side.",
        context:
          "Virginia allows two exceptions to crossing them. You may cross to make a left turn, and you may cross to pass a pedestrian, bicyclist, or someone on a scooter or skateboard, provided the opposite lane is clear and you can do it safely. Neither exception opens the line up for passing an ordinary slow car.",
        trap:
          "The bicycle exception gets over-read. It permits passing a cyclist, not passing the tractor in front of the cyclist.",
        excerptKey: "double-solid-yellow",
        sourceLabel: "Virginia Driver's Manual - Section 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "va_s1_28",
        topic: "impairment",
        question: "What will actually reduce your level of intoxication?",
        choices: [
          "Strong black coffee",
          "A cold shower",
          "Time, and nothing else",
          "Exercise and fresh air",
        ],
        correctIndex: 2,
        explanation:
          "Only time lowers your blood alcohol. Coffee, cold water and exercise may make you feel more awake while leaving you exactly as impaired.",
        context:
          "The manual is blunt about why this matters: alcohol attacks judgement first, so the decision not to drive becomes harder to make after one or two drinks than it was before any. The practical advice is to settle transport before you start drinking rather than after. Combining alcohol with almost any other drug, including aspirin or cold medicine, multiplies the effect.",
        trap:
          "Feeling alert is the trap itself. A stimulant produces an awake drunk driver, not a sober one.",
        excerptKey: "only-time-sobers",
        sourceLabel: "Virginia Driver's Manual - Section 3, Drunk and Drugged Driving",
        sourceUrl: HB,
      },
      {
        id: "va_s1_29",
        topic: "emergencies",
        question: "You are involved in a collision. What does Virginia require of you?",
        choices: [
          "Drive any injured person to the nearest hospital yourself",
          "Continue home and file a crash report afterwards",
          "Stop, help anyone injured, report it to police, exchange information and tell your insurer",
          "Check your own car for damage and carry on",
        ],
        correctIndex: 2,
        explanation:
          "All of those steps belong together: stop at or near the scene, render what help you can, report to police promptly, swap details, and notify your insurance company.",
        context:
          "The details you need are specific - names, addresses and licence numbers of other drivers, plate numbers, the name and address of anyone injured and of each witness, and the insurance policy number of the other owners. If the vehicles can be moved, nobody is hurt and it is safe to do so, Virginia expects you to clear them off the roadway rather than leave them blocking traffic.",
        trap:
          "Moving an injured person out of a wrecked car is well-meant and usually wrong. Leave them unless you have medical training or there is an immediate danger such as fire.",
        excerptKey: "crash-must-stop",
        sourceLabel: "Virginia Driver's Manual - Section 3, Traffic Crashes",
        sourceUrl: HB,
      },
      {
        id: "va_s1_30",
        topic: "signs",
        question: "A yellow diamond-shaped sign appears ahead. What is it doing?",
        choices: [
          "Giving you a regulatory instruction",
          "Telling you a stop is required",
          "Guiding you toward a destination",
          "Warning of a special condition or hazard ahead",
        ],
        correctIndex: 3,
        explanation:
          "The diamond is the warning shape. It asks you to slow down, drive with caution and be ready to stop for whatever it is flagging.",
        context:
          "Diamonds cover a large family: curves, hills, merges, lane reductions, deer crossings, slippery-when-wet, signal ahead and stop ahead. A few are paired with a second plate carrying an arrow or a safe speed, which pins down either the location or the number. Rectangles, by contrast, are regulatory when they stand vertically and informational when they lie horizontally.",
        trap:
          "A diamond with a speed on it is an advisory safe speed, not an enforceable limit - unlike the black-on-white regulatory speed sign.",
        excerptKey: "shape-diamond",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Shapes",
        sourceUrl: HB,
      },
    ],
  },

  {
    id: "set-2",
    setNumber: 2,
    title: "Everyday Virginia Roads",
    difficulty: "easy",
    description:
      "The rules that come up on an ordinary Virginia commute - turns on red, lane markings, school zones and the numbers behind them - plus a first look at the provisions that are peculiar to the Commonwealth.",
    questions: [
      {
        id: "va_s2_01",
        topic: "signals",
        question: "Where does Virginia stand on turning right at a red light?",
        choices: [
          "Permitted without stopping if the way is clear",
          "Never permitted anywhere in Virginia",
          "Permitted only between 9 a.m. and 4 p.m.",
          "Permitted after a complete stop, unless a sign or a red arrow forbids it",
        ],
        correctIndex: 3,
        explanation:
          "Right on red is allowed, but only after a full stop and only where nothing bars it. A No Turn on Red sign or a red arrow pointing right takes the option away.",
        context:
          "Virginia also allows a left on red in one narrow case: from a one-way street onto another one-way street, again after a complete stop. Both turns require you to look both ways and yield to pedestrians and to traffic, with particular attention to motorcycles, bicycles and mopeds. Turning on red is the manoeuvre the manual singles out as especially hazardous to people on foot.",
        trap:
          "The stop is not optional because the road looks empty. Rolling into a right on red is the most-ticketed version of this manoeuvre.",
        excerptKey: "right-turn-on-red",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s2_02",
        topic: "signs",
        question: "A No Left Turn sign is posted at an intersection. What does that mean for U-turns?",
        choices: [
          "U-turns are still permitted there",
          "U-turns are permitted if you signal first",
          "The sign only bans left turns on a green light",
          "U-turns are illegal too, because Virginia counts them as two left turns",
        ],
        correctIndex: 3,
        explanation:
          "Virginia treats a U-turn as two left turns. A posted No Left Turn therefore takes the U-turn with it, even though the sign never mentions one.",
        context:
          "U-turns have their own limits on top of that. In business districts, cities and towns they are allowed only at intersections, and they are never allowed on a highway. When you do make one, signal left, stop, yield to approaching traffic, and complete the turn into the outside or right-hand lane going the other way.",
        trap:
          "Drivers look for a No U-Turn sign specifically and conclude that its absence means permission. The left-turn ban already covers it.",
        commonlyMissed: true,
        excerptKey: "uturn-two-left-turns",
        sourceLabel: "Virginia Driver's Manual - Section 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s2_03",
        topic: "rules",
        question:
          "The centre of the road is marked with a broken yellow line alongside a solid yellow line. Who may pass?",
        choices: [
          "Only traffic on the broken-line side",
          "Traffic on either side, when clear",
          "Only traffic on the solid-line side",
          "Neither direction may pass",
        ],
        correctIndex: 0,
        explanation:
          "The broken line is the permission and it applies to the side it sits on. If the solid line is next to your lane, you may not pass.",
        context:
          "That pairing is how Virginia opens a passing zone in one direction while closing it in the other - typically where a hill or curve blocks the view for one side only. Drivers on the solid side may still cross the line to make a left turn, or to pass a pedestrian, bicyclist or scooter rider when the opposite lane is clear.",
        trap:
          "The line nearest you is the one that governs. Reading the broken line on the far side as your permission is the standard mistake.",
        excerptKey: "broken-solid-yellow",
        sourceLabel: "Virginia Driver's Manual - Section 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "va_s2_04",
        topic: "speed",
        question:
          "You turn onto an unpaved rural road in Virginia with no speed limit signs. What is the limit?",
        choices: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctIndex: 2,
        explanation:
          "Unpaved roads carry their own statutory default of 35 mph - lower than the 55 mph that applies to other unsigned roads.",
        context:
          "Virginia's three unsigned defaults are 25 mph for school, business and residential areas, 35 mph for unpaved roads, and 55 mph for everything else. The unpaved figure exists because loose surfaces lengthen braking distance and reduce steering grip, which is also why a gravel or loose-surface warning sign asks for a further reduction.",
        trap:
          "Most states have no separate unpaved default at all, so drivers apply the general rural figure of 55 mph and are 20 mph over.",
        commonlyMissed: true,
        excerptKey: "default-speed-limits",
        sourceLabel: "Virginia Driver's Manual - Section 3, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "va_s2_05",
        topic: "sharing",
        question: "A motorcycle is travelling in the same lane as you, a little ahead. What is the rule?",
        choices: [
          "You may share the lane side by side",
          "You may pass within the lane when there is room",
          "Never drive beside a motorcycle in the same lane",
          "Motorcycles are required to keep to the right of the lane",
        ],
        correctIndex: 2,
        explanation:
          "The whole lane belongs to the rider. Pulling alongside inside it leaves them nowhere to move when they need to.",
        context:
          "Riders use the full width of the lane deliberately, shifting position for road surface, debris, wind and sightlines. Expect sudden lateral movement that would look erratic in a car and is ordinary on a motorcycle. Add an extra second to your following distance behind one, and double that in bad weather.",
        trap:
          "The space looks unused, which is exactly why drivers drift into it. The rider is holding it as escape room.",
        excerptKey: "motorcycle-never-beside",
        sourceLabel: "Virginia Driver's Manual - Section 3, Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "va_s2_06",
        topic: "rightOfWay",
        question:
          "Two vehicles arrive at an intersection from different directions at clearly different times. Who has right of way?",
        choices: [
          "The driver on the right, always",
          "The larger vehicle",
          "The driver turning right",
          "The vehicle that arrived first",
        ],
        correctIndex: 3,
        explanation:
          "Arrival order settles it. First to the intersection goes first; the position rules only matter when the arrival is genuinely simultaneous.",
        context:
          "That ordering is the backbone of an all-way stop. Everyone stops, and everyone goes in the order they arrived. Two drivers facing one another can often proceed together, because their paths only conflict if one of them turns left across the other.",
        trap:
          "The driver-on-the-right rule gets applied as though it were the primary rule. It is only the tie-break.",
        excerptKey: "yield-first-arrive",
        sourceLabel: "Virginia Driver's Manual - Section 3, Yielding the Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "va_s2_07",
        topic: "safety",
        question: "How often does Virginia suggest you check your rearview mirror?",
        choices: [
          "About every 30 seconds",
          "Only immediately before a lane change",
          "About every 10 seconds",
          "About once a minute",
        ],
        correctIndex: 2,
        explanation:
          "Roughly every ten seconds. That cadence is what tells you early that someone is closing fast or has settled into your blind spot.",
        context:
          "Mirror checks are one half of searching; the other is looking far enough ahead. Virginia suggests focusing 20 to 30 seconds down the road, which is about one city block in town, and scanning side to side rather than staring at the middle of the lane. Look behind you specifically before changing lanes, backing, slowing quickly, or starting down a long steep hill.",
        trap:
          "Checking only when you intend to move means you learn about the car beside you at the worst possible moment.",
        excerptKey: "mirror-10-seconds",
        sourceLabel: "Virginia Driver's Manual - Section 3, Searching",
        sourceUrl: HB,
      },
      {
        id: "va_s2_08",
        topic: "signs",
        question: "You see orange and black signs ahead. What are they marking?",
        choices: [
          "A historical or cultural site",
          "Motorist services at the next exit",
          "A construction work zone",
          "A school crossing",
        ],
        correctIndex: 2,
        explanation:
          "Orange means road work. The manual's shorthand is worth keeping: the colour orange marks a work zone and means slow down and be alert.",
        context:
          "Virginia pairs orange with a second incident colour, pink and black, used at crash and incident scenes. Both appear alongside ordinary black-and-white regulatory signs that impose rules existing only because of the work or the incident - a temporary limit, for instance. Speeding in a work zone where workers are present carries a fine of up to $500.",
        trap:
          "Orange signs disappearing does not end the work zone. Stay in your lane and hold your speed until you are completely clear of it.",
        excerptKey: "sign-orange-pink",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "va_s2_09",
        topic: "impairment",
        question:
          "A driver under 21 can be convicted of illegal consumption at what blood alcohol content?",
        choices: [".08 and above", ".06 and above", ".04 and above", ".02 and above"],
        correctIndex: 3,
        explanation:
          "At .02, well below the adult threshold. Virginia calls this driving after illegally consuming alcohol, and it is a separate offence from DUI.",
        context:
          "The penalty is heavier than the small number suggests: a one-year suspension from the date of conviction, plus either a mandatory minimum $500 fine or at least 50 hours of community service. If the same under-21 driver blows .08 or higher, they face the full adult DUI consequences instead.",
        trap:
          "Under-21 drivers assume they get the same .08 allowance as everyone else. A single drink can put a young driver over .02.",
        commonlyMissed: true,
        excerptKey: "under-21-02",
        sourceLabel: "Virginia Driver's Manual - Section 3, Drunk and Drugged Driving",
        sourceUrl: HB,
      },
      {
        id: "va_s2_10",
        topic: "rules",
        question:
          "A three-lane road has a centre lane bounded on both sides by a solid yellow line paired with a broken yellow line. How may you use it?",
        choices: [
          "For passing in either direction",
          "As an ordinary travel lane",
          "For left turns only, and no more than 150 feet of travel in it",
          "It is reserved for buses",
        ],
        correctIndex: 2,
        explanation:
          "That marking makes it a shared left-turn lane. Virginia puts a distance on how long you may stay in it: 150 feet, not the length of the block.",
        context:
          "The alternative marking is a single broken yellow line on both sides, and that one means the centre lane may be used for passing in either direction. Reading which pattern you have before you commit is the whole skill. The Code adds the general rule that on a three-lane road you may not drive in the centre lane except to overtake, to prepare a left turn, or where the lane is signed as allocated to your direction.",
        trap:
          "Using the turn lane as a running start - merging in early and travelling half a block - is the violation the 150-foot limit exists to stop.",
        commonlyMissed: true,
        excerptKey: "center-lane-150-feet",
        sourceLabel: "Virginia Driver's Manual - Section 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "va_s2_11",
        topic: "licensing",
        question:
          "You have just moved to Virginia and you drive. How long do you have to get a Virginia driver's license?",
        choices: ["60 days", "30 days", "90 days", "Six months"],
        correctIndex: 0,
        explanation:
          "Sixty days from the move. That is the licence deadline specifically - the vehicle paperwork runs on a different clock.",
        context:
          "The vehicle side is tighter: title and register the car and get Virginia plates within 30 days of moving. Once you live here, a change of address has to be reported to DMV within 30 days as well, because the postal service will not forward a licence and DMV will get it back if the address is wrong.",
        trap:
          "The two deadlines get merged into one. Sixty days for the licence, thirty for the vehicle - and thirty for any later address change.",
        excerptKey: "new-resident-60-days",
        sourceLabel: "Virginia Driver's Manual - Section 7, New to Virginia",
        sourceUrl: HB,
      },
      {
        id: "va_s2_12",
        topic: "parking",
        question: "A curb has been painted red. What does that generally mean?",
        choices: [
          "Loading and unloading only",
          "No stopping, standing or parking",
          "Passenger pick-up and drop-off only",
          "Reserved for disabled parking",
        ],
        correctIndex: 1,
        explanation:
          "Red is the strictest of the painted-curb colours: you may not stop, stand or park there at all.",
        context:
          "White and yellow are the other two. White means stop only long enough to pick up or drop off passengers; yellow means stop only long enough to load or unload, and stay with your car. The manual notes that the exact meanings are set locally, so check with the locality where the specifics matter.",
        trap:
          "Yellow is not a free loading bay. Leaving the vehicle unattended defeats the condition attached to it.",
        excerptKey: "painted-curbs",
        sourceLabel: "Virginia Driver's Manual - Section 2, Painted Curbs",
        sourceUrl: HB,
      },
      {
        id: "va_s2_13",
        topic: "signals",
        question:
          "You reach an intersection where a power cut has left the traffic signals completely dark. What is required?",
        choices: [
          "Stop, then proceed as though it were an all-way stop",
          "Treat it as a green light for the main road",
          "Yield to the right and continue without stopping",
          "Proceed at low speed without stopping if the way is clear",
        ],
        correctIndex: 0,
        explanation:
          "A dead signal converts the intersection into an all-way stop. Every approach stops, and the usual arrival-order and left-yields-to-right rules take over.",
        context:
          "Two situations override that. If a law enforcement officer or another authorised person is directing traffic, follow them instead. If portable stop signs have been put out, obey those. Note that a dark signal is not the same as a flashing red, which behaves like a stop sign for that approach only.",
        trap:
          "Drivers on the bigger road assume they keep priority when the lights fail. Nothing about the road's size carries over.",
        commonlyMissed: true,
        excerptKey: "dark-signal",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s2_14",
        topic: "emergencies",
        question:
          "A deer steps into the road and a collision looks unavoidable. What does Virginia advise?",
        choices: [
          "Swerve into the next lane to go around it",
          "Brake firmly, stay in your lane and come to a controlled stop",
          "Accelerate to get past before it crosses",
          "Swerve toward the shoulder",
        ],
        correctIndex: 1,
        explanation:
          "Do not swerve. Braking hard in your own lane is survivable in a way that leaving the lane at speed usually is not.",
        context:
          "Virginia counts tens of thousands of crashes a year with deer, elk and bears. Dusk and dawn in autumn are the high-risk hours, and the animals travel in groups, so one crossing the road means others are nearby. Slowing early and using the horn to move an animal off the road is the better outcome; if you do hit a large animal, report it to law enforcement.",
        trap:
          "Swerving feels like the way to avoid the crash and is how single-vehicle deer incidents become head-on ones or rollovers.",
        excerptKey: "deer-do-not-swerve",
        sourceLabel: "Virginia Driver's Manual - Section 3, Deer/Large Animal Hazards",
        sourceUrl: HB,
      },
      {
        id: "va_s2_15",
        topic: "speed",
        question:
          "It is raining hard and you are driving at the posted 55 mph limit. What is your legal exposure?",
        choices: [
          "You can be ticketed for driving too fast for conditions",
          "None, because the posted limit always protects you",
          "None, unless you are driving a truck",
          "None, the limit is the limit whatever the weather",
        ],
        correctIndex: 0,
        explanation:
          "The posted number assumes good weather. In rain, snow or ice, Virginia can ticket you for driving too fast for conditions at or below it.",
        context:
          "This is the practical meaning of a speed limit being defined against ideal conditions. Reducing speed is the first response to rain, fog, snow or reduced visibility, followed by doubling your normal following distance and turning on the headlights. Some Virginia roads carry electronic speed limit signs whose displayed figure drops with the weather, and that figure is enforceable.",
        trap:
          "Keeping up with the traffic around you is no defence either. The standard is what is safe, not what everyone else is doing.",
        excerptKey: "too-fast-conditions",
        sourceLabel: "Virginia Driver's Manual - Section 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s2_16",
        topic: "signs",
        question: "A white X-shaped sign on a post beside the road means what?",
        choices: [
          "A yield is coming up",
          "A railroad crossing",
          "A divided highway begins",
          "A hospital ahead",
        ],
        correctIndex: 1,
        explanation:
          "The crossbuck marks a railroad crossing. Look, listen, slow down and be ready to stop for anything using the rails.",
        context:
          "Trains can come from either direction, and where there is more than one track they can come from either direction on either track. Flashing lights added to a crossbuck mean stop as soon as they begin, and stay stopped until every train has passed, the tracks are clear and the lights have stopped. Where a gate is fitted, stop before it lowers and never drive around a lowered gate.",
        trap:
          "The second train is the one that kills people. At a multi-track crossing, one train clearing does not mean the crossing is clear.",
        excerptKey: "crossbuck",
        sourceLabel: "Virginia Driver's Manual - Section 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s2_17",
        topic: "safety",
        question:
          "Your car has a driver's air bag. How far back should you set your seat?",
        choices: [
          "About six inches from the steering wheel",
          "About eight inches",
          "About twelve inches, no closer and no further",
          "At least ten inches from the steering wheel",
        ],
        correctIndex: 3,
        explanation:
          "Ten inches is the minimum. An air bag deploys with enough force that sitting inside that distance turns the protection into an injury.",
        context:
          "If the steering wheel adjusts, tilt it downward so the bag is aimed at your chest rather than your head and neck. Air bags are supplemental, designed to work with a belt rather than replace one, so buckle up regardless. Children aged 12 and under belong in the back seat, and a rear-facing child seat must never go in front of an active passenger air bag.",
        trap:
          "Short drivers pull the seat forward for pedal reach and end up well inside ten inches. Pedal extenders exist for exactly that reason.",
        excerptKey: "airbag-ten-inches",
        sourceLabel: "Virginia Driver's Manual - Section 4, Air Bags",
        sourceUrl: HB,
      },
      {
        id: "va_s2_18",
        topic: "sharing",
        question: "Where are bicyclists legally allowed to ride in Virginia?",
        choices: [
          "On shoulders only",
          "On all public roads except interstates and most freeways",
          "Only in marked bicycle lanes",
          "Only on roads posted 25 mph or below",
        ],
        correctIndex: 1,
        explanation:
          "Virtually the whole public road network is open to bicycles. The exclusions are interstates and most limited-access highways.",
        context:
          "A cyclist on the road generally has the same right of way as a driver, and may ride in the centre of the lane where it is too narrow to share or where they are about to turn left. Watch for riders travelling in either direction on sidewalks, shared-use paths and two-way separated bike lanes - a rider can legitimately be coming at you from the direction you are not checking.",
        trap:
          "Assuming a cyclist must hug the edge is what produces the close pass. Lane position is a choice the law gives them.",
        excerptKey: "bike-where-allowed",
        sourceLabel: "Virginia Driver's Manual - Section 3, Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "va_s2_19",
        topic: "rules",
        question: "What is the left lane on a Virginia multi-lane highway for?",
        choices: [
          "Passing, not cruising",
          "The normal travel lane at the speed limit",
          "High-occupancy vehicles only",
          "Slower traffic, so faster vehicles can use the right",
        ],
        correctIndex: 0,
        explanation:
          "It is a passing lane. Sitting in it at cruising speed is exactly the use the manual tells you to avoid.",
        context:
          "The Code puts the same point the other way round: a vehicle moving slower than the surrounding traffic belongs in the lane nearest the right edge, except when overtaking or preparing to turn left. Whichever way you frame it, occupying the left lane at a steady speed with traffic backing up behind you is the behaviour both the manual and the statute are aimed at.",
        trap:
          "Driving the posted limit does not entitle you to hold the left lane. The rule is about your speed relative to traffic, not relative to the sign.",
        excerptKey: "left-lane-passing-only",
        sourceLabel: "Virginia Driver's Manual - Section 3, Changing Lanes",
        sourceUrl: HB,
      },
      {
        id: "va_s2_20",
        topic: "rightOfWay",
        question: "You are pulling out of a private driveway onto a public road. What must you do?",
        choices: [
          "Traffic on the road must slow for you",
          "Stop, then yield to all traffic and to pedestrians",
          "Yield to vehicles, but pedestrians must wait",
          "Proceed once you have signalled",
        ],
        correctIndex: 1,
        explanation:
          "A stop first, then a yield to everything - vehicles and people on foot alike. The same applies crossing a sidewalk out of an alley, building or parking lot.",
        context:
          "Virginia lists this among the situations where you must always stop, alongside stop signs, red lights, flashing red signals, railroad crossings with flashing signals, flaggers, pedestrians at a crosswalk, an officer's direction, and the scene of a crash you were in. Yielding also means stopping if you cannot merge into traffic safely.",
        trap:
          "The sidewalk is the part people forget. Pedestrians on it have priority before you reach the road at all.",
        excerptKey: "yield-private-road",
        sourceLabel: "Virginia Driver's Manual - Section 3, Yielding the Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "va_s2_21",
        topic: "impairment",
        question: "How do standard drinks compare, according to the Virginia manual?",
        choices: [
          "A beer contains far less alcohol than a shot",
          "Wine is the weakest of the three",
          "Only spirits count toward your blood alcohol",
          "Twelve ounces of beer, a shot of liquor and a five-ounce glass of wine are equivalent",
        ],
        correctIndex: 3,
        explanation:
          "They carry the same alcohol. The container changes; the dose does not.",
        context:
          "That equivalence is why counting drinks by type is a bad way to judge yourself. The manual points out that even one drink affects the brain functions driving depends on - vision, judgement and coordination - and that your crash risk is about seven times higher after drinking than sober. Combining any drink with another drug, including an ordinary cold medicine, can multiply the effect.",
        trap:
          "Beer gets treated as the safe option because the glass is bigger and the percentage is lower. Twelve ounces of it is one drink either way.",
        excerptKey: "drink-equivalence",
        sourceLabel: "Virginia Driver's Manual - Section 3, Drunk and Drugged Driving",
        sourceUrl: HB,
      },
      {
        id: "va_s2_22",
        topic: "signals",
        question: "A signal ahead of you is showing a flashing red light. What do you do?",
        choices: [
          "Stop completely, yield, then go when the way is clear",
          "Slow down and proceed without stopping",
          "Treat it as a broken signal and ignore it",
          "Stop only if traffic is actually approaching",
        ],
        correctIndex: 0,
        explanation:
          "Flashing red works exactly like a stop sign: a complete stop, then yield to oncoming vehicles and pedestrians before you move.",
        context:
          "A flashing red arrow adds a direction to the same idea - stop, yield to traffic coming the other way and to pedestrians in the intersection, then proceed in the arrow's direction when clear. At a railroad crossing, a flashing red means stop even if you cannot see a train.",
        trap:
          "Flashing red and flashing yellow look similar at a distance in rain. One requires a stop and the other does not, so identify the colour before you commit.",
        excerptKey: "flashing-red",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s2_23",
        topic: "parking",
        question: "How close to an intersection may you park in Virginia?",
        choices: ["No closer than 20 feet", "No closer than 10 feet", "No closer than 15 feet", "No closer than 30 feet"],
        correctIndex: 0,
        explanation:
          "Twenty feet. The gap exists so drivers turning into the street can see past your car and so pedestrians are not hidden at the corner.",
        context:
          "Keep the numbers apart in your head: 15 feet from a fire hydrant and from the entrance to a fire, ambulance or rescue squad station; 20 feet from an intersection; 50 feet from a railroad crossing; and 500 feet from fire apparatus stopped answering an alarm. Parking in a bike lane, on a crosswalk or sidewalk, or in front of a driveway is prohibited outright.",
        trap:
          "Fifteen and twenty feet get swapped. Fifteen is the hydrant and the station entrance; twenty is the intersection.",
        excerptKey: "no-park-distances",
        sourceLabel: "Virginia Driver's Manual - Section 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "va_s2_24",
        topic: "safety",
        question: "A passenger tucks the shoulder belt under their arm because it is uncomfortable. Is that acceptable?",
        choices: [
          "Yes, if the belt genuinely does not fit",
          "No - the shoulder belt goes over the shoulder and across the chest",
          "Yes, on short trips",
          "Yes, for pregnant passengers",
        ],
        correctIndex: 1,
        explanation:
          "Never under the arm and never behind the back. Routed that way the belt loads the ribs and abdomen instead of the chest and shoulder.",
        context:
          "The lap belt sits low across the lap and against the thighs, not across the stomach, and both belts should be snug. Pregnant occupants are much safer belted, with the lap portion as low on the pelvis as it will go. The only lawful exemption is a physician's written waiver, which the exempted person has to carry.",
        trap:
          "Discomfort feels like a reason to reroute the belt. It is a reason to adjust the seat or the belt height instead.",
        excerptKey: "shoulder-belt-position",
        sourceLabel: "Virginia Driver's Manual - Section 4, Seat Belts",
        sourceUrl: HB,
      },
      {
        id: "va_s2_25",
        topic: "licensing",
        question: "You move to a new address within Virginia. How long do you have to tell DMV?",
        choices: ["10 days", "20 days", "30 days", "Until your next renewal"],
        correctIndex: 2,
        explanation:
          "Thirty days. Licences arrive by post and the postal service will not forward them, so a stale address means the card comes back to DMV.",
        context:
          "DMV does not issue licences over the counter at all - every one is mailed for security reasons, which is why the address on file is more than an administrative detail. If you have moved to Virginia rather than within it, the clock is different: 60 days to get a Virginia licence, 30 days to title and register the vehicle.",
        trap:
          "Waiting for renewal is the natural assumption and the wrong one. The duty is triggered by the move, not by the expiry date.",
        excerptKey: "address-change-30-days",
        sourceLabel: "Virginia Driver's Manual - Section 7, Address Changes",
        sourceUrl: HB,
      },
      {
        id: "va_s2_26",
        topic: "signs",
        question: "You pass a Do Not Pass sign and the road ahead looks completely clear. May you pass?",
        choices: [
          "Yes, if you can see far enough ahead",
          "No - the sign forbids passing even when the way looks clear",
          "Yes, but only on the right",
          "Only cars may pass; trucks may not",
        ],
        correctIndex: 1,
        explanation:
          "The sign marks the start of a no-passing zone, and Virginia states expressly that it applies even if the way is clear.",
        context:
          "The zone is drawn from sightlines you cannot see from the driver's seat - a crest, a curve, a hidden entrance. That is also why a pass has to be finished before the zone begins: still being in the left lane when you reach it is itself the offence. Passing is separately unlawful on hills, curves, at intersections and at railroad crossings, unless the road has two or more lanes in your direction.",
        trap:
          "Judging it by what you can see substitutes your eyeline for the engineering study that set the zone.",
        excerptKey: "do-not-pass-sign",
        sourceLabel: "Virginia Driver's Manual - Section 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s2_27",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and a train is coming. What should you do?",
        choices: [
          "Stay in the car and call for help",
          "Keep trying to restart the engine",
          "Get out and run away from the tracks in the same direction the train is travelling",
          "Get out at once and run diagonally away from the tracks, toward the oncoming train",
        ],
        correctIndex: 3,
        explanation:
          "Toward the train, at an angle. A struck car is thrown forward along the track, so running the way the train is going puts you in the debris path.",
        context:
          "The manual's first instruction is not to hesitate at all - get out immediately rather than trying to restart. If a dangerous condition exists at a crossing, there is an emergency number posted at it, and giving the crossing number lets the railroad stop or reroute trains. School buses, incidentally, must stop at every railroad crossing whether the lights are flashing or not.",
        trap:
          "Every instinct says run away from the train. That is the direction the wreckage travels.",
        commonlyMissed: true,
        excerptKey: "stalled-on-tracks",
        sourceLabel: "Virginia Driver's Manual - Section 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s2_28",
        topic: "rules",
        question: "Your lane is marked with a curved arrow and the word ONLY. What are you required to do?",
        choices: [
          "You may go straight or turn as you choose",
          "The marking is advisory",
          "You must turn in the direction of the arrow",
          "The lane is reserved for buses",
        ],
        correctIndex: 2,
        explanation:
          "A curved arrow, with or without ONLY, obliges you to turn that way. A lane marked with both a curved and a straight arrow lets you do either.",
        context:
          "Lane arrows work with the overhead lane use control signs that show the same information before you commit. Getting into the wrong lane late is how people end up crossing solid white lines near intersections, which is precisely where those lines exist to discourage lane changes.",
        trap:
          "Discovering the arrow too late tempts a last-second lane change. Taking the wrong turn and coming back is the cheaper mistake.",
        excerptKey: "curved-arrow-only",
        sourceLabel: "Virginia Driver's Manual - Section 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "va_s2_29",
        topic: "speed",
        question:
          "You are driving between the school crossing signs while they are in position. What is the maximum speed?",
        choices: ["15 mph", "20 mph", "30 mph", "25 mph"],
        correctIndex: 3,
        explanation:
          "Twenty-five miles per hour between the signs. Virginia's school figure is the same as its default limit for school, business and residential areas.",
        context:
          "The signs are supposed to be in position, or lit, for thirty minutes before regular school hours and thirty minutes after, plus any other time children are going to or from school. They are placed no more than 750 feet from the school property or the crossing. Some Virginia school zones now also carry automated photo speed enforcement.",
        trap:
          "Fifteen and twenty are the school figures in several neighbouring states, so drivers from out of state guess low - and drivers who assume the ordinary limit still applies guess high.",
        commonlyMissed: true,
        excerptKey: "code-school-crossing-25",
        sourceLabel: "Code of Virginia § 46.2-873",
        sourceUrl: CODE_873,
      },
      {
        id: "va_s2_30",
        topic: "sharing",
        question: "How can you tell whether a truck driver can see you?",
        choices: [
          "Trucks have smaller blind spots than cars because the cab sits high",
          "If you can see the trailer, the driver can see you",
          "If you cannot see the driver's face in his side mirror, he cannot see you",
          "Truck mirrors are designed to cover every angle",
        ],
        correctIndex: 2,
        explanation:
          "The mirror test works in both directions. No face in the mirror means no view of you.",
        context:
          "Trucks, tractor-trailers, buses and RVs carry blind spots on all four sides that Virginia calls No-Zones, and they are much larger than a car's. The forward one can run up to 20 feet ahead of the cab and the rear one roughly 200 feet behind. These vehicles also swing wide to turn, so squeezing between one and the curb is how people get crushed.",
        trap:
          "Sitting just behind and to the right of a cab feels visible because the truck is so large. It is the deepest blind spot there is.",
        excerptKey: "truck-mirror-rule",
        sourceLabel: "Virginia Driver's Manual - Section 3, Sharing the Road",
        sourceUrl: HB,
      },
    ],
  },

  {
    id: "set-3",
    setNumber: 3,
    title: "Real Exam Pressure",
    difficulty: "medium",
    description:
      "Thirty-five questions at the difficulty of DMV's part two, including the places where the manual and the Code of Virginia do not say quite the same thing.",
    questions: [
      {
        id: "va_s3_01",
        topic: "speed",
        question:
          "The manual gives 55 mph as the ceiling for roads that are not school, business, residential or unpaved. What is the highest limit Virginia law allows to be posted on an interstate?",
        choices: [
          "70 mph, where signs have been posted after a traffic engineering study",
          "55 mph - a sign cannot lawfully say more",
          "65 mph",
          "75 mph",
        ],
        correctIndex: 0,
        explanation:
          "Seventy. The statute allows 70 mph where signs are lawfully placed on interstates, on multilane divided limited-access highways, and on physically separated HOV lanes.",
        context:
          "The manual's speed section never mentions 70 mph, which is why drivers who study only the manual come away thinking 55 is a ceiling rather than a default. The default is what applies where nothing higher has been posted after the required engineering study. Certain named US routes may also be posted at 60 mph where they are nonlimited-access multilane divided highways.",
        trap:
          "A posted 70 does not raise the reckless driving threshold in a useful way. At 86 mph you are reckless whatever the sign says.",
        commonlyMissed: true,
        excerptKey: "code-70-mph",
        sourceLabel: "Code of Virginia § 46.2-870",
        sourceUrl: CODE_870,
      },
      {
        id: "va_s3_02",
        topic: "signals",
        question: "You face a steady red arrow pointing right. What may you do?",
        choices: [
          "Treat it as an ordinary red and turn right after stopping",
          "Turn as soon as the way is clear",
          "Not turn that way at all, unless a sign specifically permits it after a stop",
          "Treat it as identical to a flashing yellow arrow",
        ],
        correctIndex: 2,
        explanation:
          "A red arrow means no. The manual states flatly that Virginia law prohibits right and left turns at red arrow lights, with the only opening being a posted sign reading Right on Red Arrow After Stop or the left-turn equivalent.",
        context:
          "This is the sharpest difference between a red ball and a red arrow in Virginia. The red ball permits a right turn after a complete stop unless something forbids it; the red arrow forbids the turn unless something permits it. The manual adds a warning that other states handle red arrows differently, so do not carry a habit across the state line.",
        trap:
          "The same paragraph that bans the turn also mentions the exception signs, so people read the exception as the rule. Absent that specific sign, the arrow governs.",
        commonlyMissed: true,
        excerptKey: "red-arrow-prohibits",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s3_03",
        topic: "rules",
        question:
          "You are behind a cyclist on a road with double solid yellow lines and the oncoming lane is empty. May you cross to pass?",
        choices: [
          "No - double solid yellow may never be crossed to pass",
          "Yes, to pass any slow-moving vehicle",
          "Yes - Virginia permits crossing to pass pedestrians, bicyclists and riders of scooters or skateboards when the opposite lane is clear",
          "Yes, but only in daylight",
        ],
        correctIndex: 2,
        explanation:
          "Virginia carves out a specific exception for vulnerable road users. You may cross to pass a pedestrian, bicyclist, or scooter or skateboard rider when the opposite lane is clear and you can do it safely.",
        context:
          "The exception exists because the three-foot passing rule and the ban on driving in a bike lane would otherwise leave you stuck behind a cyclist indefinitely on a narrow road. It does not extend to ordinary slow vehicles - a tractor or a delivery van gets no such treatment. The other lawful reason to cross a double yellow is a left turn.",
        trap:
          "The exception is about who you are passing, not how slowly they are going. A farm tractor is not on the list.",
        commonlyMissed: true,
        excerptKey: "cross-yellow-for-bikes",
        sourceLabel: "Virginia Driver's Manual - Section 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "va_s3_04",
        topic: "rightOfWay",
        question: "A funeral procession is passing. What are your obligations?",
        choices: [
          "The procession must stop at every signal, escort or no escort",
          "Yield to it, and never cut through or join it",
          "You may join the procession to get through traffic",
          "Processions have no special standing in Virginia",
        ],
        correctIndex: 1,
        explanation:
          "You yield, and you leave the procession intact. Cutting through it or slotting into it are both prohibited.",
        context:
          "Within the procession the rules are unusual. Unless it is led by a police escort, the lead vehicle must obey all traffic signs and signals; the vehicles behind may then follow without stopping, and may run their hazard flashers to show they are part of it. Virginia treats military convoys the same way - yield, and never cut through or join.",
        trap:
          "The hazard lights make the following vehicles look like they are the ones with the exemption. It is the lead vehicle that carries the obligation.",
        excerptKey: "funeral-procession",
        sourceLabel: "Virginia Driver's Manual - Section 3, Yielding the Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "va_s3_05",
        topic: "signs",
        question: "A warning sign is printed in a strong yellow-green rather than ordinary yellow. What does that signal?",
        choices: [
          "Construction ahead",
          "School zone, pedestrian or bicyclist activity",
          "A detour",
          "An emergency incident scene",
        ],
        correctIndex: 1,
        explanation:
          "Yellow-green is Virginia's dedicated colour for school, pedestrian and bicyclist activity - a specialised class within the warning family.",
        context:
          "It exists because ordinary yellow warning signs are so numerous that a vulnerable-user warning can disappear among them. The colour appears on school crossing, pedestrian crossing and bicycle crossing signs, often with a second plate carrying an arrow to show the exact crossing point. Orange marks construction and pink marks an incident scene; neither has anything to do with schools.",
        trap:
          "The pentagon and the yellow-green colour usually travel together, but the colour alone is enough - a rectangular or diamond sign in yellow-green carries the same meaning.",
        excerptKey: "sign-yellow-green",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "va_s3_06",
        topic: "safety",
        question: "You are on high beams at night and a car appears coming the other way. When must you dim?",
        choices: [
          "Keep the high beams on until the other driver dims theirs",
          "Flash the high beams to warn them, then dim",
          "High beams are permitted on any highway regardless of oncoming traffic",
          "Dim to low beams once the oncoming vehicle is within 500 feet",
        ],
        correctIndex: 3,
        explanation:
          "Five hundred feet for oncoming traffic. Following another vehicle, the figure is 200 feet.",
        context:
          "The manual adds that you should not retaliate: even if the other driver leaves their high beams on, you keep yours down. To cope with the glare, look toward the right edge of the road and glance ahead to check the other vehicle's position rather than staring into the lights. In town use low beams except on unlit streets, and in heavy fog use low beams because high beams reflect back at you.",
        trap:
          "Two hundred and five hundred feet get transposed. Two hundred is following, five hundred is oncoming.",
        excerptKey: "high-beam-500",
        sourceLabel: "Virginia Driver's Manual - Section 3, Night Driving",
        sourceUrl: HB,
      },
      {
        id: "va_s3_07",
        topic: "licensing",
        question: "How long do demerit points stay valid on a Virginia driving record?",
        choices: [
          "Five years",
          "One year",
          "Until you renew your licence",
          "Two years from the date you committed the offence",
        ],
        correctIndex: 3,
        explanation:
          "Two years, counted from the date of the offence rather than the date of conviction.",
        context:
          "Demerit points and convictions come off on different clocks - the conviction itself can sit on the record much longer than the points do, and serious ones stay permanently. Against the demerits you can build safe driving points: one for each full calendar year with a valid Virginia licence and no violations or suspensions, capped at five, and five at once for voluntarily completing a driver improvement clinic.",
        trap:
          "Points expiring is not the same as the conviction disappearing. Insurers look at the conviction record, which is separate from DMV's demerit total.",
        excerptKey: "demerit-two-years",
        sourceLabel: "Virginia DMV - The Points System",
        sourceUrl: PTS,
      },
      {
        id: "va_s3_08",
        topic: "sharing",
        question:
          "You are behind a cyclist in a lane too narrow to leave three feet of clearance. What does Virginia law require?",
        choices: [
          "Squeeze past at reduced speed",
          "Change lanes to pass",
          "Use the bike lane to get around them",
          "Sound the horn and pass",
        ],
        correctIndex: 1,
        explanation:
          "The statute says it directly: if the lane is not wide enough to give three feet while staying in it, you must change lanes to pass.",
        context:
          "That obligation is the half of the three-foot rule people miss. On a two-lane road with no second lane in your direction, it means waiting until you can legally use the oncoming lane - which is why Virginia separately permits crossing a double yellow to pass a cyclist when the opposite lane is clear. Motor vehicles may not use a marked bicycle lane, including while passing.",
        trap:
          "Reducing speed is required as well, but it is not a substitute for the clearance. Slow and close is still a violation.",
        commonlyMissed: true,
        excerptKey: "code-bike-change-lanes",
        sourceLabel: "Code of Virginia § 46.2-839",
        sourceUrl: CODE_839,
      },
      {
        id: "va_s3_09",
        topic: "impairment",
        question: "What makes a Virginia open-container charge stick?",
        choices: [
          "An unopened bottle anywhere in the passenger area",
          "Any alcohol within reach of the driver's seat",
          "Alcohol in a locked trunk",
          "An opened, partly consumed container in the passenger area, plus signs that you have been drinking",
        ],
        correctIndex: 3,
        explanation:
          "Two elements together: the container is open and partly emptied in the passenger area, and you show signs of having been drinking.",
        context:
          "Virginia defines the passenger area broadly - the seats for the driver and passengers, plus anything within the driver's reach, and it names an unlocked glove compartment specifically. The charge is drinking while operating a motor vehicle rather than DUI, so it can attach even where a BAC case would not.",
        trap:
          "The glove compartment feels like storage rather than the passenger area. Unlocked, it counts.",
        excerptKey: "open-container",
        sourceLabel: "Virginia Driver's Manual - Section 5, Open Alcohol Containers",
        sourceUrl: HB,
      },
      {
        id: "va_s3_10",
        topic: "parking",
        question: "You are parking facing downhill on a road with no curb. Which way do the front wheels go?",
        choices: [
          "Right, so that if the car rolls its rear moves away from traffic",
          "Left, toward the centre of the road",
          "Straight ahead, with the parking brake set",
          "Left downhill and right uphill",
        ],
        correctIndex: 0,
        explanation:
          "Right. Without a curb the principle is that a rolling car should take its rear away from traffic, and on a shoulder that means turning the wheels toward the edge.",
        context:
          "The curbed cases are the ones that differ from each other: facing downhill with a curb, turn the wheels right so they chock against it; facing uphill with a curb, turn them left so the car rolls back into the curb. Without a curb the answer is right in both directions, which is what makes the set easy to garble.",
        trap:
          "People memorise 'uphill left, downhill right' and then apply it to the no-curb case, where uphill is also right.",
        commonlyMissed: true,
        excerptKey: "park-hill-no-curb",
        sourceLabel: "Virginia Driver's Manual - Section 3, Parking on a hill",
        sourceUrl: HB,
      },
      {
        id: "va_s3_11",
        topic: "emergencies",
        question: "When must a Virginia officer forward a written crash report to DMV?",
        choices: [
          "Any crash causing $1,000 or more of damage",
          "Any injury or death, or total property damage over $3,000",
          "Any crash at all, however minor",
          "Any crash causing $1,500 or more of damage",
        ],
        correctIndex: 1,
        explanation:
          "Injury or death, or total property damage in excess of $3,000. Whatever gets reported is recorded on the driving record of every driver involved.",
        context:
          "Your own duties do not depend on that figure. You must stop, help anyone injured, report to police as quickly as possible, exchange details and tell your insurer, and crashes involving property damage, injury or death must be reported to police. Damaging unattended property triggers a separate duty: find the owner, or leave a note and report to police within 24 hours.",
        trap:
          "The $3,000 figure is the officer's reporting threshold, not permission to skip reporting a smaller crash yourself.",
        excerptKey: "crash-report-3000",
        sourceLabel: "Virginia Driver's Manual - Section 3, Traffic Crashes",
        sourceUrl: HB,
      },
      {
        id: "va_s3_12",
        topic: "rules",
        question: "When may you legally pass on the right in Virginia?",
        choices: [
          "Never - passing on the right is always prohibited",
          "When the vehicle ahead has signalled and is making a left turn",
          "On the shoulder when the road ahead is clear",
          "Whenever traffic in the left lane is moving slowly",
        ],
        correctIndex: 1,
        explanation:
          "The manual's case is a vehicle ahead that has signalled and is turning left. Even then you may not leave the pavement or main roadway to get around it.",
        context:
          "The caution attached is worth as much as the permission: the vehicle you are passing may be blocking your view, or blocking other drivers' view of you. On a multi-lane road, passing in a lane to the right is ordinary lane use rather than passing on the right - what the rule targets is going round someone within or beside their lane.",
        trap:
          "The shoulder feels like available road. Using it to get around a turning car is the version of this manoeuvre that gets charged as aggressive driving.",
        excerptKey: "pass-on-right",
        sourceLabel: "Virginia Driver's Manual - Section 3, Passing",
        sourceUrl: HB,
      },
      {
        id: "va_s3_13",
        topic: "signals",
        question: "A flashing yellow arrow appears in your left-turn signal head. What does it mean?",
        choices: [
          "You have a protected turn",
          "You must stop before turning",
          "The signal is malfunctioning",
          "You may turn if the way is clear, yielding to oncoming traffic and pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "Permission without protection. Turn when clear, but you are yielding to everything coming the other way and to anyone in the crossing.",
        context:
          "The four arrow states run in a sensible order once you see them together: steady red means no turn, flashing red means stop then turn when clear, flashing yellow means turn when clear without stopping, and steady green means protected. Virginia also asks that if the signal changes from red to flashing yellow arrow while a pedestrian is in the intersection, you let them cross first.",
        trap:
          "Flashing yellow reads as a green light with extra steps. It is closer to a yield sign with a lamp on it.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s3_14",
        topic: "speed",
        question: "Virginia adds a specific extra $100 fine for what?",
        choices: [
          "Driving between 81 and 85 mph in a 65 mph zone",
          "Any speed over 70 mph",
          "Speeding in a school zone",
          "Speeding on an unpaved road",
        ],
        correctIndex: 0,
        explanation:
          "An extra $100 on top of everything else, for 81 to 85 mph in a posted 65 mph zone.",
        context:
          "The band is chosen to sit just under the reckless driving line. In a 65 zone, 85 mph is 20 over, so 81 to 85 is the last stretch before the offence turns criminal. Above 85 mph you are into reckless driving regardless of the posted limit, and that is a misdemeanour with a fine, a possible suspension and possible jail.",
        trap:
          "Because the surcharge attaches to a 65 mph zone, drivers assume it applies at any high speed. It is specific to that band in that zone.",
        commonlyMissed: true,
        excerptKey: "fine-81-85",
        sourceLabel: "Virginia Driver's Manual - Section 3, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "va_s3_15",
        topic: "signs",
        question: "A brown sign with white lettering points off the highway. What is it for?",
        choices: [
          "A historical or cultural site",
          "Motorist services such as fuel or food",
          "Destination guidance to a town",
          "A warning about the road ahead",
        ],
        correctIndex: 0,
        explanation:
          "Brown is Virginia's colour for places of historical or cultural interest.",
        context:
          "Three informational colours divide up between them: green for destinations, blue for motorist services, brown for historical and cultural sites. None of the three imposes a rule. That distinction matters on the exam, where a question about what a sign requires of you has a different answer from a question about what it tells you.",
        trap:
          "Brown and green both often carry place names, so they get treated as the same category. The colour is doing the work.",
        excerptKey: "sign-green-blue-brown",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "va_s3_16",
        topic: "rightOfWay",
        question:
          "The car in the lane beside you has stopped for a pedestrian at a crosswalk. What may you do?",
        choices: [
          "Pass slowly on the left",
          "Pass on the right",
          "Sound your horn and then pass",
          "Not overtake and pass the stopped vehicle at all",
        ],
        correctIndex: 3,
        explanation:
          "The statute forbids it outright: when a vehicle has stopped for a pedestrian, a driver in an adjacent lane or behind may not overtake and pass it.",
        context:
          "This is the rule that exists to prevent the multiple-threat collision, where the stopped car hides a pedestrian from the driver in the next lane. The manual makes the same point in plainer terms - passing at a crosswalk is illegal, and passing is unlawful when the vehicle ahead of you or in the lane next to you is stopped as you approach a crosswalk.",
        trap:
          "The stopped car reads as an obstruction to get around. It is a warning that someone you cannot see is in the road.",
        commonlyMissed: true,
        excerptKey: "code-ped-no-overtake",
        sourceLabel: "Code of Virginia § 46.2-924",
        sourceUrl: CODE_924,
      },
      {
        id: "va_s3_17",
        topic: "safety",
        question: "At 60 mph on a dry road, what following gap does Virginia's rule call for?",
        choices: ["Two seconds", "Three seconds", "Four seconds", "Six seconds"],
        correctIndex: 2,
        explanation:
          "Four seconds. The bands run two seconds under 35 mph, three from 35 to 45, and four from 46 to 70.",
        context:
          "The count is measured against a fixed object: watch the vehicle ahead pass a sign or an overpass and count until you reach the same point. Add seconds for rain, heavy traffic, poor pavement or a vehicle in poor condition, and add one more behind a motorcycle. Above 70 mph the manual says the scale stops working altogether.",
        trap:
          "Three seconds is the number most drivers carry from elsewhere and it is a full second short at highway speed in Virginia's scheme.",
        excerptKey: "following-distance-table",
        sourceLabel: "Virginia Driver's Manual - Section 3, Following Distance",
        sourceUrl: HB,
      },
      {
        id: "va_s3_18",
        topic: "licensing",
        question: "What hours does Virginia's curfew for drivers under 18 cover?",
        choices: ["11 p.m. to 5 a.m.", "Midnight to 4 a.m.", "1 a.m. to 5 a.m.", "There is no curfew"],
        correctIndex: 1,
        explanation:
          "Midnight to 4 a.m. The exceptions are narrow: driving to or from work, to or from an adult-supervised activity sponsored by a school or a civic, religious or public organisation, accompanied by a parent or someone acting in their place, or a genuine emergency.",
        context:
          "The restriction sits on the provisional licence, which is what every driver under 18 holds, and it expires on the holder's eighteenth birthday rather than after any fixed period. A first breach is a traffic infraction; a second or subsequent one lets the court suspend the juvenile's driving privilege for up to six months.",
        trap:
          "The accompanying adult has to be a parent, someone in loco parentis, or a spouse aged 18 or over, actually sitting beside the driver. An older friend does not unlock the curfew.",
        excerptKey: "curfew-web",
        sourceLabel: "Virginia DMV - Teen Driving Restrictions",
        sourceUrl: TEEN,
      },
      {
        id: "va_s3_19",
        topic: "sharing",
        question: "Where may a low speed vehicle be driven in Virginia?",
        choices: [
          "On any road posted up to 55 mph",
          "On interstates, in the right lane only",
          "Anywhere a golf cart may go, since they are the same class",
          "On public roads posted 35 mph or less",
        ],
        correctIndex: 3,
        explanation:
          "Thirty-five mph or less. Low speed vehicles are four-wheeled electric or gas vehicles topping out somewhere between 21 and 25 mph.",
        context:
          "They must meet federal safety standards and Virginia's registration and insurance requirements, and be driven by a licensed driver or by a permit holder with a licensed driver alongside. The manual is explicit that golf carts are not low speed vehicles, which matters because the two look similar and the legal treatment is not.",
        trap:
          "The vehicle's own top speed is not the test. A 25 mph vehicle may not be taken onto a 45 mph road just because it could keep up in traffic.",
        excerptKey: "low-speed-vehicles",
        sourceLabel: "Virginia Driver's Manual - Section 3, Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "va_s3_20",
        topic: "rules",
        question:
          "A three-lane road has a centre lane bounded by a single broken yellow line on each side. What is that lane for?",
        choices: [
          "Traffic in either direction may use it for passing",
          "Left turns only",
          "Buses only",
          "Only one direction of travel may use it",
        ],
        correctIndex: 0,
        explanation:
          "Broken lines on both sides make it a passing lane usable from either direction, when the way ahead is clear.",
        context:
          "Compare it with the other centre-lane marking: a solid yellow paired with a broken yellow on each side makes it a shared left-turn lane, and you may not travel more than 150 feet in it. The Code's general rule for three-lane roads is that the centre lane is off limits except to overtake, to prepare a left turn, or where signs allocate it to your direction.",
        trap:
          "Both markings are yellow on both sides, so they blur together at speed. Count the lines, not the colour.",
        excerptKey: "center-lane-passing",
        sourceLabel: "Virginia Driver's Manual - Section 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "va_s3_21",
        topic: "impairment",
        question:
          "What does a DUI conviction carry in Virginia when a passenger aged 17 or younger was in the vehicle?",
        choices: [
          "An extra mandatory five-day jail term on top of every other penalty",
          "A written warning to the parent",
          "Double demerit points and nothing more",
          "No additional penalty beyond the ordinary DUI",
        ],
        correctIndex: 0,
        explanation:
          "Five days of mandatory jail added to everything else, plus an additional fine of at least $500 and up to $1,000.",
        context:
          "A second DUI offence with a juvenile aboard adds 80 hours of community service on top of that. These sit alongside the ordinary consequences: an administrative suspension of seven days for a first offence, a court suspension or revocation on conviction, and immediate 30-day impoundment of the vehicle if you are caught driving while suspended for an alcohol offence.",
        trap:
          "The enhancement keys off the passenger being 17 or younger, not off whether the passenger is your own child or was harmed.",
        excerptKey: "dui-juvenile-passenger",
        sourceLabel: "Virginia Driver's Manual - Section 5, Transporting Children While Under the Influence",
        sourceUrl: HB,
      },
      {
        id: "va_s3_22",
        topic: "signs",
        question: "A yellow diamond shows a stem meeting a crossbar, like the letter T. What is ahead?",
        choices: [
          "A side road joining from the right",
          "Two lanes merging into one",
          "Your road ends ahead and you must turn right or left",
          "A divided highway beginning",
        ],
        correctIndex: 2,
        explanation:
          "The road you are on terminates at a stop sign, and you turn right or left after yielding to oncoming traffic and pedestrians.",
        context:
          "The T sits in a family of intersection warnings worth telling apart. The Y intersection means you must bear right or left. The plain intersection sign warns of a crossing where vehicles may enter your road. Right Curve with Side Road means the road curves right and a side road joins from the left inside the curve.",
        trap:
          "A T intersection warning is often mistaken for a side-road sign, which does not require you to stop or turn at all.",
        excerptKey: "t-intersection",
        sourceLabel: "Virginia Driver's Manual - Section 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s3_23",
        topic: "emergencies",
        question:
          "You clip a parked car in a lot and the owner is nowhere to be found. What does Virginia require?",
        choices: [
          "Nothing is required when the other vehicle is unattended",
          "Leave your insurance card under the wiper and drive away",
          "Make a reasonable effort to find the owner; failing that, leave a note and report it to police within 24 hours",
          "Report it to DMV within 30 days",
        ],
        correctIndex: 2,
        explanation:
          "Both steps, not one or the other. The note has to be easy to find and carry your name, phone number, the date and time, and a description of the damage - and you still report to police within 24 hours.",
        context:
          "The duty applies to any unattended vehicle or property you damage, not just to cars. Where the property or vehicle is attended and someone is hurt, the obligation is heavier still and failing it becomes a felony rather than an infraction. Leaving a note without reporting to police only satisfies half the requirement.",
        trap:
          "The note feels like the whole obligation because it is the visible part. The 24-hour police report is the half that gets missed.",
        commonlyMissed: true,
        excerptKey: "unattended-property",
        sourceLabel: "Virginia Driver's Manual - Section 3, Traffic Crashes",
        sourceUrl: HB,
      },
      {
        id: "va_s3_24",
        topic: "speed",
        question:
          "What is the maximum fine for exceeding a work zone speed limit in Virginia when workers are present?",
        choices: ["Up to $500", "Up to $100", "Up to $250", "Up to $1,000"],
        correctIndex: 0,
        explanation:
          "Up to $500. The statutory version adds two conditions the manual leaves out - that workers are present and that the zone is signed with both the limit and the penalty.",
        context:
          "Using a handheld communications device in a work zone is a separate offence carrying a mandatory $250 fine, against $125 for a first offence elsewhere. Work zones also change the flashing-light rules: the manual states that the move-over requirements do not apply in highway work zones. Some work zones carry automated photo speed enforcement.",
        trap:
          "A signed work zone limit binds even when no work seems to be going on. The statutory fine, though, is tied to workers being present.",
        excerptKey: "workzone-fines",
        sourceLabel: "Virginia Driver's Manual - Section 2, Work Zones",
        sourceUrl: HB,
      },
      {
        id: "va_s3_25",
        topic: "parking",
        question: "How close to a railroad crossing may you park?",
        choices: ["No closer than 20 feet", "No closer than 50 feet", "No closer than 15 feet", "No closer than 100 feet"],
        correctIndex: 1,
        explanation:
          "Fifty feet - the largest of the everyday parking setbacks apart from the 500-foot rule around fire apparatus at an alarm.",
        context:
          "The four to keep straight are 15 feet from a hydrant or an emergency station entrance, 20 feet from an intersection, 50 feet from a railroad crossing, and 500 feet from fire trucks answering an alarm. On top of the distances, Virginia bans double parking, parking on the hard surface of a road with no curb, and parking in a way that blocks or endangers traffic in a designated lane.",
        trap:
          "Fifty feet is easy to under-guess because a crossing looks like an intersection, where the figure is 20.",
        excerptKey: "no-park-distances",
        sourceLabel: "Virginia Driver's Manual - Section 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "va_s3_26",
        topic: "signals",
        question: "An overhead lane signal shows a red X above your lane. What must you do?",
        choices: [
          "Move out of the lane as soon as it is safe",
          "The lane is reserved for buses at this hour",
          "Never drive in that lane",
          "The lane is reversible and will change shortly",
        ],
        correctIndex: 2,
        explanation:
          "A red X closes the lane outright. The instruction to move out when safe belongs to the yellow X or the yellow downward diagonal arrow.",
        context:
          "Lane use signals mark which lanes are open at which times of day. Green arrow means the lane is available, yellow X or downward diagonal arrow means leave it as soon as safely possible, red X means never. A one-way or two-way arrow signal means you may enter that lane only to turn in the direction shown.",
        trap:
          "Red X and yellow X get read as urgent and less urgent versions of the same instruction. One is a closure, the other a warning.",
        excerptKey: "lane-red-x",
        sourceLabel: "Virginia Driver's Manual - Section 2, Lane Use Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s3_27",
        topic: "safety",
        question: "Why is the first half hour of a rain shower particularly dangerous?",
        choices: [
          "Roads are actually safest then, before the water pools",
          "Oil on the road surface mixes with the water and makes it slippery",
          "Only bridges are affected in the early stages",
          "Rain has no measurable effect until water stands on the road",
        ],
        correctIndex: 1,
        explanation:
          "Oil that has accumulated on the surface lifts and mixes with the water, which is why grip is worst before the rain has washed the road.",
        context:
          "Rain compounds several problems at once: wet pavement can double your braking distance, other vehicles behind and in your blind spots are harder to see, and standing water can cause hydroplaning. The response is the same as for any reduced-visibility condition - slow down first, double your following distance, and turn on low beams so you can see and be seen.",
        trap:
          "Heavy rain feels more dangerous than light rain, so drivers relax in a drizzle. The drizzle is when the oil film is worst.",
        excerptKey: "first-half-hour-rain",
        sourceLabel: "Virginia Driver's Manual - Section 3, Rain",
        sourceUrl: HB,
      },
      {
        id: "va_s3_28",
        topic: "rules",
        question: "What does Virginia say about making a U-turn on a highway?",
        choices: [
          "Permitted if you signal and yield",
          "Permitted at any median opening",
          "Permitted outside business districts",
          "Never make a U-turn on a highway",
        ],
        correctIndex: 3,
        explanation:
          "Never on a highway. In business districts, cities and towns U-turns are confined to intersections.",
        context:
          "Before you attempt one anywhere, check for No U-Turn and No Left Turn signs, since a posted No Left Turn also bans the U-turn - Virginia counts it as two left turns. The manoeuvre itself is signal left, stop, yield to approaching traffic, then proceed into the outside or right-hand lane going the other way.",
        trap:
          "A median crossover on a divided highway looks like an invitation. Those are generally for authorised vehicles, not for turning round.",
        excerptKey: "uturn-business-district",
        sourceLabel: "Virginia Driver's Manual - Section 3, U-Turns",
        sourceUrl: HB,
      },
      {
        id: "va_s3_29",
        topic: "rightOfWay",
        question: "You are approaching a roundabout. Who has right of way?",
        choices: [
          "Pedestrians, and traffic already in the circle",
          "You, since traffic in the circle can see you coming",
          "The larger vehicle",
          "Whoever enters clockwise first",
        ],
        correctIndex: 0,
        explanation:
          "Entering traffic yields to pedestrians and to vehicles already circulating, then travels counter-clockwise.",
        context:
          "Each approach carries a yield sign and often a yield line - a row of triangles across the pavement marking where you must give way. Choose your lane before you enter: right lane to turn right, left lane to turn left, either lane to go straight on a two-lane roundabout. Once inside, stay in your lane, signal right before your exit, and check your blind spot before leaving.",
        trap:
          "Signalling on entry is the habit to break. The useful signal is the right-turn one just before your exit.",
        excerptKey: "roundabout-sign-yield",
        sourceLabel: "Virginia Driver's Manual - Section 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s3_30",
        topic: "sharing",
        question: "When may a motor vehicle enter a marked bicycle lane in Virginia?",
        choices: [
          "When passing a cyclist ahead",
          "When traffic in the general lane is heavy",
          "Only when it is necessary in order to turn left or right",
          "Any time, since bike lanes are advisory",
        ],
        correctIndex: 2,
        explanation:
          "Turning is the only reason. Before you cross into it, check your mirrors for riders behind you and yield to anyone already in the lane.",
        context:
          "The manual states separately that using marked bicycle lanes is prohibited for motor vehicles, including while passing - which closes off the obvious workaround when you are stuck behind a cyclist. Bicycle lanes are shown by a solid or dashed white line, sometimes green pavement, and a bicycle symbol.",
        trap:
          "A dashed bike lane line looks like an ordinary lane divider inviting a lane change. It is marking the approach to a turn, not opening the lane to traffic.",
        excerptKey: "bike-lane-use",
        sourceLabel: "Virginia Driver's Manual - Section 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "va_s3_31",
        topic: "licensing",
        question: "How many passengers may a Virginia learner's permit holder carry?",
        choices: [
          "None at all",
          "Up to three under 18",
          "Up to two under 21",
          "No more than one passenger under 18",
        ],
        correctIndex: 3,
        explanation:
          "One passenger under 18, and that is separate from the supervising driver who has to be in the front seat.",
        context:
          "Once the permit becomes a provisional licence the limit changes shape: no more than one passenger under 21 until the holder turns 18, rising to three under 21 after the licence has been held a year and only for a school-sponsored activity, with a licensed driver 21 or older in the front seat, or in an emergency. Family and household members do not count against either cap.",
        trap:
          "The permit rule counts passengers under 18; the provisional licence rule counts passengers under 21. The two ages are not interchangeable.",
        excerptKey: "permit-one-passenger",
        sourceLabel: "Virginia DMV - Teen Driving Restrictions",
        sourceUrl: TEEN,
      },
      {
        id: "va_s3_32",
        topic: "signs",
        question: "A yellow sign on a highway exit ramp shows a speed. What is that number?",
        choices: [
          "The maximum safe speed for the exit",
          "A legal limit enforced by radar",
          "A minimum speed for the ramp",
          "The limit for trucks only",
        ],
        correctIndex: 0,
        explanation:
          "An advisory speed - the maximum safe speed for that curve, printed in the warning colour rather than the regulatory one.",
        context:
          "Colour is what separates the two. A black-on-white speed limit sign is regulatory and enforceable as a limit; a yellow advisory speed tells you what the geometry will take. Ignoring an advisory figure is still exposure, because driving too fast for conditions is an offence in its own right, and losing control on a ramp is how over-correction crashes start.",
        trap:
          "Advisory speeds are usually set conservatively, so drivers learn to ignore them. On a wet or loaded ramp the margin disappears.",
        excerptKey: "advisory-speed",
        sourceLabel: "Virginia Driver's Manual - Section 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s3_33",
        topic: "impairment",
        question: "How does Virginia treat driving after using marijuana?",
        choices: [
          "Legal possession makes it legal to drive",
          "Only smoking is a concern; edibles are not",
          "Possession may be legal over 21, but driving under its influence is not",
          "It is handled as a parking-type offence",
        ],
        correctIndex: 2,
        explanation:
          "Legality of possession and legality of driving are different questions. Driving under the influence of marijuana remains illegal, and the manual notes that smoking or consuming cannabis will affect how you drive.",
        context:
          "Virginia treats drug impairment on the same footing as alcohol: if your driving is impaired by any drug you face the same penalties as an alcohol DUI. That extends well beyond illegal drugs - over-the-counter and prescription medicines for headaches, hay fever, colds and allergies commonly cause drowsiness and slow reaction time.",
        trap:
          "There is no equivalent of the .08 threshold to work back from here. Impairment is the test, and it can be established without a number.",
        excerptKey: "marijuana-dui",
        sourceLabel: "Virginia Driver's Manual - Section 3, Drunk and Drugged Driving",
        sourceUrl: HB,
      },
      {
        id: "va_s3_34",
        topic: "emergencies",
        question:
          "Your car breaks down in a travel lane. It still rolls, nobody is hurt, and you can move safely. What does Virginia law require?",
        choices: [
          "Leave it where it stopped and wait for police",
          "Push it into the left lane, away from entering traffic",
          "Turn on the hazard lights and move it off the roadway",
          "Stay in the vehicle with the engine running",
        ],
        correctIndex: 2,
        explanation:
          "Hazard lights on, and move it clear. The statute makes that an obligation rather than a courtesy when the vehicle is movable, nobody is injured and you can do it safely.",
        context:
          "Once off the roadway, get it onto the shoulder as soon as possible and off the shoulder without unnecessary delay, and report the location to the nearest law enforcement officer as soon as practicable. If you leave it, an officer can have it removed at your expense. Stopping in a way that impedes or endangers the use of the highway is prohibited except for an emergency, a crash or a breakdown.",
        trap:
          "Leaving everything untouched for the police is right after an injury crash and wrong for an ordinary breakdown.",
        excerptKey: "code-move-vehicle",
        sourceLabel: "Code of Virginia § 46.2-888",
        sourceUrl: CODE_888,
      },
      {
        id: "va_s3_35",
        topic: "safety",
        question: "You are becoming drowsy on a long drive. What does Virginia's manual say works?",
        choices: [
          "Strong coffee restores alertness for an hour or two",
          "Caffeine and fresh air do not fix it - stop somewhere safe and nap for 10 to 20 minutes",
          "Turning the radio up will keep you awake",
          "Chewing gum is a reliable substitute for sleep",
        ],
        correctIndex: 1,
        explanation:
          "The manual names the folk remedies and says they do not work. A short nap does: as little as 10 to 20 minutes makes a real difference.",
        context:
          "The warning signs are worth recognising before you get that far - constant yawning, heavy eyelids, not remembering the last few miles, missing signs or exits, drifting between lanes or onto the rumble strips. Plan around it by sleeping properly before a trip, stopping at least every two hours, and avoiding driving between 10 p.m. and 6 a.m. Virginia calls drowsy driving a form of impaired driving.",
        trap:
          "Energy drinks are treated as the modern exception. The manual lists them alongside coffee, gum, the open window and the loud radio.",
        excerptKey: "drowsy-remedies-fail",
        sourceLabel: "Virginia Driver's Manual - Section 3, Drowsy Driving",
        sourceUrl: HB,
      },
    ],
  },
];
