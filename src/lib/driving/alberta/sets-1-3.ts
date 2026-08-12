// Alberta practice sets 1-3.
//
// Every fact here was checked against the Government of Alberta's own material:
// the Spring 2026 "Driver's Guide - cars and light trucks" (the book the Class 7
// knowledge test is written from) plus the alberta.ca pages for school and
// playground zones, roadside worker safety, and the Class 7 / Class 5 licence
// stages.
//
// Questions are written from scratch. No handbook sentence is reproduced and no
// item is lifted from a practice-test site - each one targets a rule the real
// test targets, in the style the real test uses, and the explanation, context
// and trap notes are all written in our own words. Where a number appears
// (30 km/h, 5 metres, 8 demerits), it is the number the province publishes, and
// sourceUrl points at the official page so the learner reads the authoritative
// wording on the government's own site.

import type { DrivingTestSet } from "../types";

// Official pages, each one actually opened and read while writing these items.
const GUIDE = "https://www.alberta.ca/driver-guides-overview-and-pdf-versions";
const ZONES = "https://www.alberta.ca/school-and-playground-zones";
const ROADSIDE = "https://www.alberta.ca/roadside-worker-safety";
const CLASS7 = "https://www.alberta.ca/class-7-learners-licence";
const CLASS5 = "https://www.alberta.ca/class-5-drivers-licence";
const DEMERITS = "https://www.alberta.ca/demerit-points";

export const albertaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Set 1 · First Drive",
    difficulty: "starter",
    description:
      "Thirty warm-up questions on the rules you meet in your first hour behind the wheel: sign shapes, stop lines, who goes first, and the numbers Alberta expects you to know cold.",
    questions: [
      {
        id: "ab_s1_01",
        topic: "signs",
        question:
          "Alberta uses one sign shape for one message only. What does a red eight-sided sign tell you to do?",
        choices: [
          "Slow down and continue if the way looks clear",
          "Come to a full stop, then go when it is safe",
          "Give way to traffic already on the cross street",
          "Stop only if another road user is approaching",
        ],
        correctIndex: 1,
        explanation:
          "The octagon is reserved for STOP, and the stop it asks for is a real one - the wheels have to stop turning. Rolling through is still a failure to stop even if the road happens to be empty, because the whole point of the shape is that drivers recognise it before they can read it.",
        context:
          "Alberta assigns one meaning to each regulatory shape so you can identify a sign from behind, in the dark, or under snow. The octagon is stop and nothing else; the downward triangle is yield; the diamond warns; the pentagon marks schools. After stopping you have a second job, which is deciding when it is safe to go - the stop itself never gives you the right-of-way.",
        trap:
          "\"Slow down and continue if the way looks clear\" describes a yield sign, not a stop sign - an empty road does not turn a stop into a yield.",
        excerptKey: "stop-sign-complete-stop",
        sourceLabel: "Alberta Driver's Guide - Traffic regulatory signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_02",
        topic: "speed",
        question:
          "You turn onto a residential street inside a town and there is no speed limit sign anywhere. What limit applies?",
        choices: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
        correctIndex: 2,
        explanation:
          "Alberta sets a built-in limit of 50 km/h for roadways inside an urban area, so an unsigned city or town street is a 50 zone by default. Signs are only needed when a municipality wants something other than 50 - which is why some cities post 40 or 30 on residential streets.",
        context:
          "Alberta has four defaults worth carrying in your head: 50 inside an urban area, 80 on a rural road that is not a provincial highway, 80 on a provincial highway inside city limits, and 100 on a provincial highway outside an urban area. Any posted sign beats all of them, and municipalities can set their own numbers by bylaw. The absence of a sign is information, not a licence to guess.",
        trap:
          "40 km/h feels right because several Alberta cities have adopted it on residential streets - but that only applies where it is actually posted, not as a province-wide default.",
        excerptKey: "speed-urban-50",
        sourceLabel: "Alberta Driver's Guide - Speed limit signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_03",
        topic: "rightOfWay",
        question:
          "You and a car on your right reach a four-way stop at exactly the same moment. Who should move off first?",
        choices: [
          "Whoever is going straight through the intersection",
          "You, because the other driver must yield to you",
          "The driver on your right",
          "Whoever signals their intention first",
        ],
        correctIndex: 2,
        explanation:
          "At an all-way stop the first vehicle to arrive goes first. When the arrival is a genuine tie, the tiebreaker is the vehicle on the right. Going straight does not buy you priority here, and neither does signalling early - the only thing that settles it is arrival order, then position.",
        context:
          "An all-way stop is decided in two steps: arrival order first, and only if that ties does position break it, with the vehicle on the right going ahead. Every driver still has to stop completely first, so this is about who releases the brake, not who stops. And the rule is a convention rather than a shield - if the other driver moves out of turn, you let them, because avoiding the collision outranks being right.",
        trap:
          "\"Whoever is going straight\" borrows a rule from uncontrolled left turns - direction of travel has no bearing on priority at an all-way stop.",
        excerptKey: "four-way-stop-courtesy",
        sourceLabel: "Alberta Driver's Guide - Intersections controlled by signs",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s1_04",
        topic: "rules",
        question:
          "A solid red light is showing and there is a painted stop line on the pavement ahead of you. Where must your vehicle stop?",
        choices: [
          "Anywhere before the far side of the intersection",
          "Level with the traffic light so you can see it",
          "Before the stop line",
          "Beside the crosswalk, leaving it clear",
        ],
        correctIndex: 2,
        explanation:
          "The stop line marks the legal edge of the intersection for you. Stopping past it puts your bumper in the crosswalk and blocks people on foot. When no line is painted, you stop before the crosswalk instead, and if there is neither, you stop before the intersection.",
        context:
          "Alberta gives you a fallback chain for where to stop: the painted stop line if there is one, otherwise the marked crosswalk, otherwise the edge of the intersection itself. At an unmarked rural stop sign the rule switches to a distance - within three metres of the road you are joining. Once stopped, you may still edge forward carefully if a snowbank or parked car is blocking your view.",
        trap:
          "\"Level with the traffic light\" is how a lot of people actually drive, because they want to keep the signal in sight - but it puts the car well inside the crosswalk and is a stop-line violation.",
        excerptKey: "red-light-stop",
        sourceLabel: "Alberta Driver's Guide - Traffic control signals",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_05",
        topic: "signs",
        question:
          "You see a diamond-shaped sign with a black symbol on a yellow background. What kind of message is it carrying?",
        choices: [
          "A warning about a hazard or road feature ahead",
          "A law you can be ticketed for breaking",
          "Directions and distance to the next town",
          "Information about a construction crew working",
        ],
        correctIndex: 0,
        explanation:
          "Yellow diamonds warn - they tell you something about the road ahead is about to change, such as a curve, a crossing or a narrowing. They are not the signs that carry enforceable limits; those are the white rectangles. Orange diamonds are the construction version of the same shape.",
        context:
          "Colour tells you the category before you read a word: yellow warns, orange means roadwork, white rectangles carry regulations, green gives destinations and distances, blue points to services. A warning sign never sets a limit on its own, but any speed number attached beneath one is advisory - the recommended speed for that curve or crossing in good conditions.",
        trap:
          "Calling it \"a law you can be ticketed for breaking\" confuses the warning family with the regulatory family - a curve warning tells you what is coming, it does not set the limit.",
        excerptKey: "sign-warning-yellow-diamond",
        sourceLabel: "Alberta Driver's Guide - Sign shapes and colours",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_06",
        topic: "safety",
        question:
          "Dry road, clear day, normal traffic. What is the smallest gap you should keep behind the vehicle in front?",
        choices: [
          "One second",
          "Four seconds",
          "Two seconds",
          "One car length for every 10 km/h",
        ],
        correctIndex: 2,
        explanation:
          "Two seconds is the Alberta minimum in good conditions, and it is measured in time rather than car lengths because time already accounts for speed. Pick a fixed marker, start counting when the car ahead passes it, and if you reach it before you finish counting you are too close.",
        context:
          "Two seconds is a floor for ideal conditions, not a target. Rain, snow, gravel, night, fatigue or a heavy load all mean you add to it. Large vehicles such as motor homes are asked for a minimum of four seconds because they need much longer to shed speed. Following too closely is also a ticketable offence in Alberta and carries four demerit points.",
        trap:
          "The car-length rule sounds precise but fails in practice - nobody can judge lengths at speed, and it is why Alberta expresses the gap in seconds instead.",
        excerptKey: "following-distance-two-seconds",
        sourceLabel: "Alberta Driver's Guide - Maintain your following time and distance",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_07",
        topic: "impairment",
        question:
          "You hold a Class 7 learner's licence. How much alcohol may be in your body while you drive?",
        choices: [
          "None at all",
          "Up to the level a fully licensed driver may have",
          "Enough for one standard drink with food",
          "Any amount below 50 mg per 100 mL of blood",
        ],
        correctIndex: 0,
        explanation:
          "Alberta's graduated program sets the bar at zero for both alcohol and drugs, for the whole learner and probationary period. There is no small allowance to work with, so the only safe plan is nothing before driving - the province treats a novice driver with any reading at all as an offence.",
        context:
          "Zero tolerance covers the entire graduated program: Class 7 learner and Class 5-GDL probationary alike, and it applies to drugs as well as alcohol. The penalty lands at the roadside rather than in court - an immediate 30-day licence suspension, a week-long vehicle seizure and a fine. The condition only lifts when you exit the program to a full Class 5, at which point the ordinary adult limits apply.",
        trap:
          "\"Below 50 mg\" quotes a real Alberta number, but 50 is the warn threshold for fully licensed drivers - novices have no allowance at all.",
        excerptKey: "gdl-zero-alcohol",
        sourceLabel: "Alberta Driver's Guide - Graduated driver licensing",
        sourceUrl: CLASS7,
      },
      {
        id: "ab_s1_08",
        topic: "signs",
        question:
          "A square white sign shows a symbol inside a red circle with a red bar cutting across it. What is it telling you?",
        choices: [
          "The action shown is allowed here",
          "The action shown requires you to yield first",
          "The action shown is not allowed here",
          "The action shown is allowed at certain hours",
        ],
        correctIndex: 2,
        explanation:
          "Red circle plus diagonal bar is Alberta's standard way of banning whatever is drawn inside it - a left turn, a U-turn, parking, and so on. Its opposite is the green circle, which permits the action in the ring. Read the symbol first, then the ring colour tells you yes or no.",
        context:
          "Alberta uses a matched pair of square white plates: a green circle means the action inside is permitted, a red circle with a bar means it is prohibited. Some carry an arrow underneath showing which direction the restriction applies in, and parking and stopping signs often add days and hours. Get into the habit of reading symbol, then ring, then any small print about time or direction.",
        trap:
          "\"Allowed at certain hours\" is true of some parking signs, but only when times are actually printed on the plate - a bare red-and-bar sign is an unconditional ban.",
        excerptKey: "sign-prohibitive-red-circle",
        sourceLabel: "Alberta Driver's Guide - Prohibitive signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_09",
        topic: "rules",
        question:
          "You are driving three friends home. Two are 14, one is 17. Who is legally on the hook if the 14-year-olds are not buckled up?",
        choices: [
          "Each passenger, since they chose not to buckle up",
          "You, the driver",
          "Nobody, as long as the vehicle has working air bags",
          "The registered owner of the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "In Alberta the driver carries responsibility for every passenger under 16 being properly secured, and can be fined for each one who is not. Passengers 16 and older answer for themselves. Air bags change nothing here - they are designed to work with a belt, not instead of one.",
        context:
          "Age 16 is the line: below it the driver is accountable, at or above it the passenger is. Younger children have their own tier of rules - a child under six who weighs 18 kilograms or less must be in a proper child safety seat, and heavier children move to a booster before using the belt alone. On top of all that, a GDL driver may carry no more people than the vehicle has seat belts.",
        trap:
          "Blaming the passengers feels fair, but the law only shifts responsibility onto them once they turn 16 - below that, the ticket is yours.",
        excerptKey: "seat-belt-driver-responsible",
        sourceLabel: "Alberta Driver's Guide - Securing passengers",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_10",
        topic: "sharing",
        question:
          "On a two-lane road with no median, a school bus ahead of you switches on flashing red lights and swings out its stop arm. Which vehicles must stop?",
        choices: [
          "Vehicles approaching from both directions",
          "Only vehicles in the lane the bus is stopped in",
          "Only vehicles travelling behind the bus",
          "Only vehicles within 20 metres of the bus",
        ],
        correctIndex: 0,
        explanation:
          "Without a median between the lanes, children may cross in front of traffic coming either way, so both directions stop. Pull up roughly 20 metres back so the drivers behind you can see the flashing lights too, and stay stopped until the lights go off and the arm folds in.",
        context:
          "The single thing that decides this is whether a physical median separates the directions. On any undivided road - two lanes or four - everyone stops for flashing reds. Where a median exists, only traffic behind the bus stops and oncoming traffic may proceed carefully. Amber lights are the warning phase before the reds, and failing to stop for a school bus is a six-demerit offence with a heavy fine.",
        trap:
          "\"Only vehicles behind the bus\" is the correct answer for a divided highway - people memorise that version and apply it on an undivided road, where oncoming traffic must stop too.",
        excerptKey: "school-bus-red-lights-20-metres",
        sourceLabel: "Alberta Driver's Guide - School buses",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_11",
        topic: "signs",
        question:
          "Which sign shape is used in Alberta for a yield instruction?",
        choices: [
          "A five-sided sign",
          "A square standing on one corner",
          "A triangle standing on one point",
          "A circle with a bar through it",
        ],
        correctIndex: 2,
        explanation:
          "Yield is the downward-pointing triangle. The diamond (a square on its corner) is a warning shape, the pentagon marks schools, and the barred circle bans something. Yield means give way to road users who are not facing the sign - and stop if that is what giving way takes.",
        context:
          "Yield and stop are different obligations. Stop always requires the wheels to stop turning; yield requires you to give way, which may or may not involve stopping. Approach a yield slowly enough that you could stop, and if there is genuinely no traffic and nobody crossing, you may roll through. A yield sign at a merge or a roundabout entry works the same way.",
        trap:
          "The diamond is the shape most often mistaken for yield, because both are pointed - but a diamond warns you about something ahead and never assigns right-of-way.",
        excerptKey: "yield-sign-meaning",
        sourceLabel: "Alberta Driver's Guide - Traffic regulatory signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_12",
        topic: "speed",
        question:
          "A school zone sign is posted with no separate number attached to it. Unless something else is signed, what speed applies while the zone is active?",
        choices: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
        correctIndex: 1,
        explanation:
          "Alberta's default for a school zone, in a city or out in the country, is 30 km/h during the hours the zone is in effect. A municipality can post a different number, but if you see no number, 30 is what you drive. Passing another vehicle in an active zone is also off the table.",
        context:
          "School zones and playground zones share the same 30 km/h default but not the same hours. School zones apply on school days in three blocks - morning arrival, the middle of the day, and afternoon dismissal - while playground zones run every day from mid-morning until after sunset. Municipalities may set different times, in which case they are printed beneath the sign. A zone ends where a sign shows a higher limit or the end of the zone.",
        trap:
          "40 km/h is the guess of drivers who assume a school zone is simply ten under the usual city 50 - the reduction is much steeper than that.",
        excerptKey: "school-zone-speed-30",
        sourceLabel: "Alberta Driver's Guide - School zones and areas",
        sourceUrl: ZONES,
      },
      {
        id: "ab_s1_13",
        topic: "rightOfWay",
        question:
          "Two quiet streets cross with no signs, no lights and no markings. A car is approaching the intersection on your right at about the same time as you. What should you do?",
        choices: [
          "Continue, because you are already closer to the crossing",
          "Sound your horn and keep your speed steady",
          "Let the other driver go through first",
          "Go first if you are travelling straight through",
        ],
        correctIndex: 2,
        explanation:
          "An intersection with nothing controlling it is governed by one rule: yield to the vehicle on your right. Drivers who assume that going straight, or being slightly closer, gives them priority are the ones who get hit here. Slow enough on the approach that you can stop if the other driver does not yield.",
        context:
          "Where there is no sign, no signal and no marking, the yield-to-the-right rule fills the gap. It applies at four-way crossings, at uncontrolled T-intersections, and inside parking lots, which are full of uncontrolled intersections. Because sightlines at these junctions are often blocked by hedges or parked cars, Alberta also expects you to reduce speed enough to stop easily - and to allow more room when the road is slippery.",
        trap:
          "\"I was going straight\" is the most common wrong instinct here - direction of travel decides nothing at an uncontrolled intersection, only position does.",
        excerptKey: "uncontrolled-intersection-yield-right",
        sourceLabel: "Alberta Driver's Guide - Uncontrolled intersections",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s1_14",
        topic: "rules",
        question:
          "You want to turn right, the light is red, and no sign at the corner mentions turning. What are you allowed to do?",
        choices: [
          "Turn without stopping if the cross street is clear",
          "Stop completely, then turn when it is safe",
          "Wait for a green light before turning",
          "Turn only if a green arrow appears first",
        ],
        correctIndex: 1,
        explanation:
          "A right turn on red is permitted in Alberta, but only after a complete stop at the stop line or crosswalk, and only once you have yielded to pedestrians and cross traffic. If a sign at that corner bans the turn, the sign wins and you wait for green.",
        context:
          "Alberta allows two turns on a red light. Right on red is the everyday one, and left on red is permitted from a one-way street onto another one-way street. Both need the same three things: a complete stop at the proper point, no sign prohibiting the turn, and yielding to everyone already in the intersection or crosswalk. Turning right on red also works at a dual right-turn intersection.",
        trap:
          "\"Turn without stopping if the cross street is clear\" is how most rolling right-on-red tickets are earned - the stop is required whether or not anything is coming.",
        excerptKey: "right-turn-on-red",
        sourceLabel: "Alberta Driver's Guide - Traffic control signals",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_15",
        topic: "safety",
        question:
          "Alberta ties one headlight rule to how far you can see. At what point must your headlights be on?",
        choices: [
          "When you cannot clearly see 50 metres ahead",
          "When you cannot clearly see 150 metres ahead",
          "Only between sunset and sunrise",
          "Only when your wipers are running",
        ],
        correctIndex: 1,
        explanation:
          "Once visibility drops below roughly 150 metres - dusk, fog, heavy snow, smoke - the headlights go on. The rule is written around what you can see rather than the clock, and daytime running lights do not satisfy it, because they leave your tail lights and dash lights switched off.",
        context:
          "Alberta pairs the 150-metre rule with a couple of related distances: use low beams when you are following within about 150 metres of another vehicle, and when you are within about 300 metres of oncoming traffic. Low beams are also the right choice in fog, smoke and heavy rain, since high beams bounce the light straight back at you. And never outdrive your headlights - travel at a speed that lets you stop inside the lit distance.",
        trap:
          "\"Only between sunset and sunrise\" leaves you unlit in daytime fog or a snow squall, which is exactly when being seen from behind matters most.",
        excerptKey: "headlights-150-metres",
        sourceLabel: "Alberta Driver's Guide - Challenging conditions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_16",
        topic: "signs",
        question:
          "A five-sided sign with a bright yellow-green background appears at the roadside. What is it marking?",
        choices: [
          "A school zone or school area",
          "A pedestrian-only street",
          "A hospital entrance ahead",
          "A shared bicycle and bus lane",
        ],
        correctIndex: 0,
        explanation:
          "The pentagon in fluorescent yellow-green is Alberta's school sign. That colour was chosen because it stands out from ordinary yellow warning signs in poor light. Whether it creates a speed restriction depends on whether a speed sign is attached underneath it.",
        context:
          "The pentagon shape and the fluorescent colour are reserved for schools. What varies is the attachment: with a speed sign beneath it you are entering a school zone and the reduced limit binds during posted hours, while without one you are entering a school area, which is a caution alert with no speed restriction. Playground signs follow the identical pattern - it is always the attached speed plate that creates the limit.",
        trap:
          "A hospital is signed with a blue services plate, not a pentagon - the shape is exclusive to schools in Alberta.",
        excerptKey: "sign-school-pentagon",
        sourceLabel: "Alberta Driver's Guide - Sign shapes and colours",
        sourceUrl: ZONES,
      },
      {
        id: "ab_s1_17",
        topic: "licensing",
        question:
          "You hold a Class 7 learner's licence. Who is allowed to sit beside you as your supervising driver?",
        choices: [
          "Any licensed driver who is at least 16",
          "Any adult passenger, licensed or not",
          "A driver holding a Class 5-GDL licence",
          "A fully licensed driver aged 18 or older",
        ],
        correctIndex: 3,
        explanation:
          "Your supervisor has to hold a full, non-probationary licence and be at least 18, and has to be in the front passenger seat where they can see the road and reach the controls. A probationary Class 5-GDL driver cannot supervise anyone - they are still building experience themselves.",
        context:
          "The learner stage comes with a bundle of conditions that all apply at once: a qualified supervisor in the front passenger seat, no driving between midnight and 5 am, no more passengers than seat belts, zero alcohol and drugs, and suspension at eight demerit points. You must hold the learner's licence for at least a year before the Class 5 road test, and having an unqualified supervisor is itself a two-demerit offence.",
        trap:
          "A Class 5-GDL holder is a licensed adult driver, which makes them feel like a valid supervisor - but probationary drivers are specifically barred from the role.",
        excerptKey: "gdl-supervising-driver",
        sourceLabel: "Alberta Driver's Guide - Graduated driver licensing",
        sourceUrl: CLASS7,
      },
      {
        id: "ab_s1_18",
        topic: "rules",
        question:
          "Which of these manoeuvres does NOT require you to use a signal light?",
        choices: [
          "Pulling out from a parking spot at the curb",
          "Moving from one lane to the next",
          "Slowing down for a red light ahead",
          "Turning left at an intersection",
        ],
        correctIndex: 2,
        explanation:
          "Signals are for changes of direction - leaving the curb, changing lanes, and turning. Slowing for a light is announced by your brake lights, which come on by themselves. Signal early enough to be useful, and remember to cancel it if the car does not do that for you.",
        context:
          "Alberta requires a signal in three situations: moving away from a curb or parking lane, turning left or right, and changing lanes. Timing matters as much as the signal itself - too early and drivers think you mean the entrance before yours, too late and it announces something you are already doing. Leaving a stale signal flashing is its own hazard, because other drivers plan around it.",
        trap:
          "Slowing feels like something you should announce, and it is - but your brake lights already do that job automatically, which is why no hand or indicator signal is required.",
        excerptKey: "signal-required",
        sourceLabel: "Alberta Driver's Guide - Signalling",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_19",
        topic: "signals",
        question:
          "The light ahead turns solid yellow while you are still well back from the intersection. What does the law expect?",
        choices: [
          "Stop, unless you are too close to stop safely",
          "Speed up so you clear the intersection in time",
          "Continue at your current speed and keep going",
          "Stop only if a vehicle is waiting on the cross street",
        ],
        correctIndex: 0,
        explanation:
          "A solid yellow is not a licence to hurry - it is a stop instruction with one exception, which is when you are already so close that braking would be dangerous. If you are still approaching, you stop. Drivers who read yellow as \"go faster\" are the ones who end up in the intersection on red.",
        context:
          "Alberta treats a solid yellow as a requirement to stop at the usual point, released only when you have passed the point where stopping could be done safely. If you are already inside the intersection when it changes, your job is to clear it. Watching for a stale green - one that has been green a while - gives you warning, and the pedestrian countdown across the road is a useful tell.",
        trap:
          "\"Speed up to clear it\" is the near-universal habit and the exact opposite of the rule - it is also how drivers end up entering on red.",
        excerptKey: "yellow-light",
        sourceLabel: "Alberta Driver's Guide - Traffic control signals",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s1_20",
        topic: "rightOfWay",
        question:
          "You are approaching a yield sign and there is no traffic and nobody on foot anywhere near the intersection. What may you do?",
        choices: [
          "Stop and wait five seconds before proceeding",
          "Stop completely, as you would at a stop sign",
          "Carry on through without coming to a full stop",
          "Sound your horn, then proceed through",
        ],
        correctIndex: 2,
        explanation:
          "Yield asks you to give way, not to stop for its own sake. Slow on the approach so you could stop if you had to, look properly, and if there is genuinely nothing to give way to, keep rolling. When there is traffic, though, yielding may well mean stopping and waiting for a gap.",
        context:
          "A yield sign hands priority to everyone who is not facing it - traffic on the other road plus anyone waiting to cross or already in the crosswalk. It obliges you to arrive slowly enough to stop, and to stop if the situation calls for it, but it never demands a stop as a formality. The same logic governs a roundabout entry, where you give way to circulating traffic and only stop if there is no gap.",
        trap:
          "Treating yield as a stop sign is a safe habit but a wrong answer - and stopping unnecessarily at a busy yield can cause a rear-end collision.",
        excerptKey: "yield-sign-no-stop-required",
        sourceLabel: "Alberta Driver's Guide - Yield signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_21",
        topic: "parking",
        question:
          "How much clear space must you leave between your parked vehicle and a fire hydrant?",
        choices: [
          "Two metres",
          "Three metres",
          "Ten metres",
          "Five metres",
        ],
        correctIndex: 3,
        explanation:
          "Five metres, and the same five metres applies to a stop sign, a yield sign and a marked crosswalk. Crews need room to swing a hose onto the hydrant without working around your bumper. If the hydrant sits back from the curb, measure from the point on the curb nearest to it.",
        context:
          "Five metres is Alberta's workhorse parking clearance: hydrants, stop and yield signs, marked crosswalks, and the edge of an intersecting roadway. A shorter one and a half metres applies to a driveway or garage access. On top of the distances, parking is banned outright on sidewalks, in crosswalks, inside intersections, and on bridges or their approaches.",
        trap:
          "Three metres is the number for stopping at an unmarked stop sign, not for parking clearances - the two distances get swapped constantly.",
        excerptKey: "parking-fire-hydrant",
        sourceLabel: "Alberta Driver's Guide - Do not park here",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s1_22",
        topic: "safety",
        question:
          "The back of your car begins to slide out on a slippery corner. What is the first thing to do?",
        choices: [
          "Brake firmly to scrub off speed quickly",
          "Accelerate gently to pull the vehicle straight",
          "Take both feet off the pedals and steer where you want to go",
          "Turn the wheel hard in the opposite direction",
        ],
        correctIndex: 2,
        explanation:
          "In a skid the tyres have run out of grip, and braking or accelerating asks them for grip they do not have. Come off both pedals, look at the space you want to reach, and steer the front of the car toward it with small inputs. Big corrections just start a second skid the other way.",
        context:
          "Alberta groups skids by cause - braking too hard, accelerating too hard, or cornering too fast - but the recovery is the same for all of them: get off the pedals, look where you want to go, and steer the front of the car there with small movements. Most skids come from driver input rather than the road itself, so smooth steering and early braking prevent far more than any recovery technique cures.",
        trap:
          "Braking is the reflex almost everyone has, and it is precisely what turns a small slide into a full loss of control on ice.",
        excerptKey: "skid-recovery",
        sourceLabel: "Alberta Driver's Guide - Loss of control and skid recovery",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_23",
        topic: "speed",
        question:
          "A playground zone sign has a speed sign attached and the restriction hours are in effect. Unless a different number is posted, how fast may you drive?",
        choices: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
        correctIndex: 1,
        explanation:
          "Playground zones and school zones share the same default of 30 km/h in Alberta. What differs is when they apply: school zones run on school days at set times, while playground zone hours start in the morning and run until after sunset, every day of the week.",
        context:
          "The playground default runs daily from 8:30 am until one hour after sunset, so the end time shifts with the season and is much later in June than in October. Municipalities can post their own hours beneath the sign. Passing another vehicle going the same way is prohibited while the restriction is active, and the zone ends only where a sign shows a higher limit or marks the end of the zone.",
        trap:
          "50 km/h is what you were doing before the sign and what you will do after it - drivers who assume the playground sign is only an advisory keep that speed and get ticketed.",
        excerptKey: "playground-zone-speed-30",
        sourceLabel: "Alberta Driver's Guide - Playground zones and areas",
        sourceUrl: ZONES,
        commonlyMissed: true,
      },
      {
        id: "ab_s1_24",
        topic: "signs",
        question:
          "A rectangular sign with black lettering on a white background shows a number. What sort of sign is it?",
        choices: [
          "A regulatory sign carrying a legal limit",
          "A warning sign about the road ahead",
          "A guide sign giving distance to a town",
          "A temporary construction advisory",
        ],
        correctIndex: 0,
        explanation:
          "White rectangles carry regulations - the speed limit sign is the one you meet most often. Green rectangles give you destinations and distances, yellow diamonds warn, and orange means construction. Colour tells you the category before you have read a single word.",
        context:
          "A posted speed limit is the maximum for ideal conditions, not a target you are entitled to reach. Driving at the posted number on ice, in fog or in heavy traffic can still be an offence, because any speed unsafe for the conditions is illegal in Alberta. Advisory numbers on yellow warning signs work the other way - they are recommendations for that curve or crossing, not enforceable limits.",
        trap:
          "Confusing it with a guide sign is easy because both are rectangles - the difference is the background colour, white for law and green for information.",
        excerptKey: "sign-regulatory-white",
        sourceLabel: "Alberta Driver's Guide - Speed limit signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_25",
        topic: "rules",
        question:
          "What does a yellow line painted down the middle of the road tell you about the traffic on the other side of it?",
        choices: [
          "It is travelling in the opposite direction to you",
          "It is travelling in the same direction as you",
          "It is a lane reserved for buses and taxis",
          "It is a lane that is about to end",
        ],
        correctIndex: 0,
        explanation:
          "Yellow separates opposing streams of traffic, which is why a yellow line should always be on your left. White separates lanes going the same way. Get that pair straight and you can tell at a glance whether the lane beside you carries traffic toward you or alongside you.",
        context:
          "Alberta's markings work on two axes at once. Colour tells you direction: yellow means opposing traffic, white means same direction. Pattern tells you permission: broken means you may cross to pass or change lanes, solid means you may not. Put them together and a broken white line is a routine lane change. Single solid yellow carries one Alberta-specific twist: outside an urban area it is a no-passing line, but within an urban area you may cross it to overtake when it is safe. Double solid yellow forbids passing anywhere.",
        trap:
          "Reserved lanes are marked with white lines and diamond symbols, not yellow - the colour never signals a bus or taxi lane.",
        excerptKey: "yellow-line-markings",
        sourceLabel: "Alberta Driver's Guide - Pavement markings",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_26",
        topic: "impairment",
        question:
          "Two hours into a long highway drive you notice you have stopped registering road signs. What is the right response?",
        choices: [
          "Turn the radio up and open a window",
          "Have a large meal at the next town",
          "Speed up slightly to shorten the remaining trip",
          "Pull over somewhere safe and rest before continuing",
        ],
        correctIndex: 3,
        explanation:
          "Fatigue slows reactions and dulls judgement in much the same way alcohol does, and none of the usual tricks fix it - cold air and loud music mask the symptom for a few minutes at most. A heavy meal makes it worse. The only real remedy is stopping, getting out and resting.",
        context:
          "Alberta treats fatigue as a fitness-to-drive issue alongside alcohol, drugs and medication. It builds from lack of sleep, long monotonous stretches, illness, stress and eye strain, and it is intensified by overeating or a warm cabin. The warning signs are drifting within the lane and losing track of the last few kilometres. Prevention beats recovery: start rested, keep the cabin cool and ventilated, keep your eyes moving, and stop early when it creeps in.",
        trap:
          "Cold air and loud music feel like they work, which is the problem - they buy a few alert minutes and hide how impaired you already are.",
        excerptKey: "fatigue-effects",
        sourceLabel: "Alberta Driver's Guide - Driver fitness and fatigue",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_27",
        topic: "sharing",
        question:
          "A cyclist is riding ahead of you near the curb and you want to get past. What is the correct way to do it?",
        choices: [
          "Squeeze by within your lane, staying to the left of it",
          "Follow closely until the cyclist reaches an intersection",
          "Sound your horn so the cyclist moves further right",
          "Change lanes to pass, as you would for a car",
        ],
        correctIndex: 3,
        explanation:
          "A bicycle in motion is a vehicle, so you overtake it the way you would overtake a car - move into the next lane. Sharing a lane leaves the cyclist nowhere to go when they have to swerve around a grate or a pothole, and they are entitled to move out for exactly that reason.",
        context:
          "A cyclist riding on the road has the rights and duties of any other driver, including the use of a proper turning lane. They are expected to keep as near the right curb as is practical, but drainage grates, gravel, ruts and debris all justify moving out. Bicycles have no brake lights, so leave extra following distance, shoulder check for them before turning right, and check for riders before opening your door at the curb.",
        trap:
          "Squeezing past inside the lane feels courteous because you are not delaying anyone - it is the manoeuvre that puts riders into the curb when they have to swerve.",
        excerptKey: "cyclist-change-lanes-to-pass",
        sourceLabel: "Alberta Driver's Guide - Sharing the road with cyclists",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_28",
        topic: "rightOfWay",
        question:
          "An ambulance with its siren on is coming up behind you on a two-way street. What should you do?",
        choices: [
          "Brake hard and stop where you are in the lane",
          "Move as close to the right edge as you can and stop",
          "Speed up until you find a side street to turn onto",
          "Move to the centre of the road to leave both sides free",
        ],
        correctIndex: 1,
        explanation:
          "Emergency crews need one predictable thing from you: get right, then stop. Stopping dead in a travel lane leaves them nothing to pass through, and racing ahead to find a turn just keeps you in their way. Once it has gone by, check for a second unit before pulling out.",
        context:
          "You must yield to any emergency vehicle sounding a siren, no matter which direction it is coming from. On a two-way road you pull to the right curb and stop; on a one-way you move to whichever curb is nearest. Flashing green lights count too - volunteer firefighters use them in some municipalities. This is separate from the slow-down rule, which applies to emergency vehicles already stopped with lights flashing.",
        trap:
          "Stopping where you are seems obedient, but a car halted in the middle of a travel lane is a roadblock, not a yield.",
        excerptKey: "emergency-vehicle-two-way",
        sourceLabel: "Alberta Driver's Guide - Emergency vehicles",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_29",
        topic: "safety",
        question:
          "Before you reverse out of a residential driveway, what should you do first?",
        choices: [
          "Rely on the mirrors and reverse slowly",
          "Walk around the vehicle to check what is behind it",
          "Sound the horn once before moving",
          "Reverse quickly to spend less time in the road",
        ],
        correctIndex: 1,
        explanation:
          "There is a blind area right behind the bumper that mirrors and cameras do not fully cover, and it is exactly the height of a small child or a bike lying on the ground. Thirty seconds walking round the car is the only way to know it is empty. Then reverse at a walking pace.",
        context:
          "Alberta expects all reversing to be done at a crawl, with your path checked before you start moving. Coming out of a driveway, steer into the nearest traffic lane and then drive forward - do not back across into a second lane. Reversing into an intersection or a crosswalk is illegal outright, and if you miss a turn or an exit, you carry on to the next one rather than backing up.",
        trap:
          "Trusting mirrors and a reversing camera is the modern version of this mistake - both leave a low blind area right behind the bumper that only a walk-around covers.",
        excerptKey: "reversing-out-of-driveway",
        sourceLabel: "Alberta Driver's Guide - Reversing",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s1_30",
        topic: "rules",
        question:
          "The line between your lane and the lane beside you is white and broken. What does that allow?",
        choices: [
          "Changing lanes when it is safe to do so",
          "Staying in your lane until the line becomes solid",
          "Using the next lane only to overtake slower traffic",
          "Nothing - broken white lines mark the road edge",
        ],
        correctIndex: 0,
        explanation:
          "Broken means crossing is allowed; solid means it is not. White tells you the neighbouring lane runs the same way you do. So a broken white line is simply an ordinary lane change - check mirrors, shoulder check, signal, and move when the gap is there.",
        context:
          "Permission from the paint is only half of a lane change; the other half is the procedure. Check your mirrors, shoulder check the blind spot for cars and cyclists, signal, then move across while holding your speed, and cancel the signal afterwards. Broken white lines commonly turn solid near intersections and ramps, which is the road telling you that a change there would be risky.",
        trap:
          "\"Only to overtake\" imports a rule that does not exist here - a broken white line permits any safe lane change, not just passing.",
        excerptKey: "broken-white-line",
        sourceLabel: "Alberta Driver's Guide - Pavement markings",
        sourceUrl: GUIDE,
      },
    ],
  },

  {
    id: "set-2",
    setNumber: 2,
    title: "Set 2 · Everyday Roads",
    difficulty: "easy",
    description:
      "Thirty questions on the core rules Alberta drivers use every day - roundabouts, lane markings, stopped emergency vehicles, crosswalks and the parking distances people guess at.",
    questions: [
      {
        id: "ab_s2_01",
        topic: "rules",
        question:
          "You reach an intersection where the light is flashing red. How should you treat it?",
        choices: [
          "As a green light for the busier road",
          "As a yield sign",
          "As a stop sign",
          "As a signal that is out of service and can be ignored",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red carries the same weight as a stop sign: full stop, then go when the way is clear. If every direction is flashing red, the whole intersection behaves as an all-way stop, so first-to-arrive goes first and ties go to the driver on the right.",
        context:
          "Alberta has three flashing signals and they mean different things. Flashing red is a stop sign. Flashing yellow lets you proceed with caution after yielding to anyone already in the intersection. Flashing green is an advance green, where opposing traffic is held on red and you may go straight or turn without waiting for a gap. Mixing up the yellow and green versions is the classic error.",
        trap:
          "Treating it as a yield lets you roll through, which is exactly the behaviour a flashing red is designed to prevent at a poorly sighted intersection.",
        excerptKey: "flashing-red-light",
        sourceLabel: "Alberta Driver's Guide - Traffic control signals",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_02",
        topic: "signs",
        question:
          "A square white sign carries a symbol inside a green circle. What is it telling you?",
        choices: [
          "The action shown is permitted at this location",
          "The action shown is banned at this location",
          "The action shown is permitted only for buses",
          "The action shown applies to the next intersection",
        ],
        correctIndex: 0,
        explanation:
          "Green ring means go ahead and do it - a left-turn-only sign, for instance, uses this format. It is the mirror image of the red ring with the bar through it, which bans whatever is inside. Same square white plate, opposite meaning, decided by the ring colour.",
        context:
          "Permissive and prohibitive signs are a matched pair on identical white squares, and only the ring colour separates them. Alberta uses the same convention for a long list of symbols - turns, U-turns, trucks, bicycles, snow vehicles, dangerous goods, parking. Read the symbol to learn what the sign is about, then read the ring to learn whether the answer is yes or no.",
        trap:
          "\"Permitted only for buses\" reads a restriction into a permission - reserved-lane signs use their own symbols and diamond markings, not a green ring.",
        excerptKey: "sign-permissive-green-circle",
        sourceLabel: "Alberta Driver's Guide - Permissive signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_03",
        topic: "speed",
        question:
          "You are on a numbered provincial highway well outside any city, town or village, and no speed limit signs are posted. What is the maximum?",
        choices: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
        correctIndex: 2,
        explanation:
          "An unsigned provincial highway outside an urban area runs at 100 km/h. Two related defaults catch people out: a roadway outside an urban area that is not a provincial highway is 80, and a provincial highway running inside a city's limits is also 80. Posted signs always override these.",
        context:
          "A provincial highway is identified by a numbered route marker; a road without one is generally a local road and carries the lower 80 default. Some divided Alberta highways are posted at 110, but that is a posted limit on specific stretches, not a default you may assume. And no default entitles you to that speed in bad weather - any speed unsafe for the conditions is illegal regardless of the sign.",
        trap:
          "110 is real on parts of Highway 2, so drivers generalise it - but 110 only applies where it is actually signed, never as an unposted default.",
        excerptKey: "speed-highway-100",
        sourceLabel: "Alberta Driver's Guide - Speed limit signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_04",
        topic: "rightOfWay",
        question:
          "You are approaching the entry of a single-lane roundabout with vehicles already going around it. What must you do?",
        choices: [
          "Stop completely, then enter in arrival order",
          "Give way to whichever vehicle is on your right",
          "Enter first, since vehicles in the circle can slow",
          "Give way to vehicles already circulating",
        ],
        correctIndex: 3,
        explanation:
          "Traffic already inside the circle has priority, full stop - the whole design depends on the circle never being blocked. The \"yield to the right\" habit misfires here, because the traffic you have to give way to is coming from your left. No full stop is required if there is a safe gap.",
        context:
          "Alberta roundabouts and traffic circles run counterclockwise, and the rule at every entry is the same: yield to whoever is already circulating. Once inside, signal right after you pass the exit before the one you want, and never change lanes within the circle. If you miss your exit, go round again rather than cutting across. Pedestrian crossings sit back from the circle itself, so scan them on the way in and on the way out.",
        trap:
          "\"Yield to the right\" is a genuine Alberta rule for uncontrolled intersections, and applying it here points you at the wrong traffic entirely.",
        excerptKey: "roundabout-yield-on-entry",
        sourceLabel: "Alberta Driver's Guide - Traffic circles and roundabouts",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s2_05",
        topic: "safety",
        question:
          "Total stopping distance is made up of three parts. Which set is correct?",
        choices: [
          "Signalling, braking and steering distance",
          "Approach, perception and coasting distance",
          "Following, reaction and skidding distance",
          "Perception, reaction and braking distance",
        ],
        correctIndex: 3,
        explanation:
          "First you notice the hazard, then you move your foot, then the brakes do their work - and the car is covering ground through all three. The first two stages are roughly three-quarters of a second each, which is why speed hurts you twice: you travel further while thinking and further while braking.",
        context:
          "Perception and reaction time are fairly fixed for an alert driver, but braking distance climbs steeply with speed, so doubling your speed far more than doubles the total. Fatigue, alcohol, drugs and inexperience stretch the first two stages, while worn tyres, poor brakes and a slippery surface stretch the third. Understanding where the metres go is what makes the two-second following rule feel reasonable rather than arbitrary.",
        trap:
          "Options built around \"signalling\" or \"coasting\" sound plausible but describe things you choose to do - the three real components are all things that happen whether you like it or not.",
        excerptKey: "stopping-distance-three-factors",
        sourceLabel: "Alberta Driver's Guide - Stopping time and distance",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_06",
        topic: "signs",
        question:
          "A diamond-shaped sign has black symbols on an orange background. What does the orange tell you?",
        choices: [
          "A school zone begins here",
          "There is construction or roadwork ahead",
          "The road ahead is closed to trucks",
          "The lane is reserved for slow-moving vehicles",
        ],
        correctIndex: 1,
        explanation:
          "Orange is Alberta's work-zone colour. It appears on diamonds and rectangles wherever a crew, a detour or fresh surfacing is involved. Treat it as a signal to look for a posted work-zone limit, because fines in these areas are doubled when workers are present.",
        context:
          "Orange signs cover people working, flag persons, survey crews, uneven pavement, detours and where the zone ends. A posted construction limit applies whenever it is signed, workers present or not, because loose gravel, bumps and shifted lanes remain after the crew has gone home. When workers are present, speeding fines are doubled - and a flag person's directions override the signs.",
        trap:
          "School zones use a fluorescent yellow-green pentagon, not an orange diamond - the two bright non-standard colours get mixed up often.",
        excerptKey: "sign-construction-orange",
        sourceLabel: "Alberta Driver's Guide - Construction zones",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_07",
        topic: "rules",
        question:
          "You want to make a U-turn at an intersection controlled by traffic lights. What does Alberta allow?",
        choices: [
          "No U-turn, unless a traffic control device permits it",
          "A U-turn on any light phase if the road is clear",
          "A U-turn on a green light, after yielding to oncoming traffic",
          "A U-turn only when turning from a dedicated left-turn lane",
        ],
        correctIndex: 0,
        explanation:
          "Signal-controlled intersections are off limits for U-turns unless something at that location specifically says otherwise. Other drivers there are reading light phases, not expecting a car to double back across them. In towns and cities, U-turns are also banned mid-block and at alley entrances.",
        context:
          "Alberta bans U-turns wherever a sign prohibits them and at any signal-controlled intersection unless a device permits it. In urban areas the ban extends to mid-block, alley intersections, and intersections where one leg is a parking lot entrance. Outside urban areas the restrictions are about sightlines - no U-turns on a curve or near a hilltop where an approaching driver within about 150 metres could not see you.",
        trap:
          "\"On a green after yielding\" mirrors how a left turn works, which makes it feel legal - but the green light does not create a U-turn permission it never had.",
        excerptKey: "u-turn-traffic-signal",
        sourceLabel: "Alberta Driver's Guide - U-turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_08",
        topic: "impairment",
        question:
          "A Class 5-GDL driver is stopped and found to have alcohol in their system. What happens immediately at the roadside?",
        choices: [
          "A written warning and a note on the driving record",
          "A 30-day licence suspension and the vehicle seized",
          "A three-day suspension with no vehicle seizure",
          "Nothing until the matter reaches court",
        ],
        correctIndex: 1,
        explanation:
          "The novice zero-tolerance stream hands out its penalties on the spot, not months later: the licence is suspended for 30 days, the vehicle is seized for a week, and a fine plus surcharge follows. That is the price of a single reading above zero while you are still in the graduated program.",
        context:
          "Alberta's Immediate Roadside Sanctions program has several streams. The novice stream applies zero tolerance to any learner or probationary driver and delivers its penalties at the roadside. Fully licensed drivers fall into the warn tier at 50 milligrams of alcohol per 100 millilitres of blood and the fail tier at 80, with suspensions, seizures, fines and mandatory courses escalating on repeat occurrences.",
        trap:
          "The three-day suspension is a genuine Alberta penalty - but it belongs to a fully licensed driver's first warn-range reading, not to a novice, whose first offence is thirty days.",
        excerptKey: "irs-zero-novice",
        sourceLabel: "Alberta Driver's Guide - IRS ZERO: Novice",
        sourceUrl: CLASS5,
      },
      {
        id: "ab_s2_09",
        topic: "parking",
        question:
          "How close to a stop sign or a yield sign may you legally park?",
        choices: [
          "No closer than five metres",
          "No closer than two metres",
          "No closer than eight metres",
          "Any distance, as long as the sign stays visible",
        ],
        correctIndex: 0,
        explanation:
          "Five metres. Park nearer than that and your vehicle hides the sign from approaching drivers and blocks the sightline of anyone waiting at it. The same five-metre buffer applies to fire hydrants and marked crosswalks, which makes it a handy number to memorise once.",
        context:
          "Alberta's parking clearances cluster around five metres: stop and yield signs, fire hydrants, marked crosswalks, and the edge of an intersecting roadway unless a meter shows parking is allowed. Driveway and garage accesses need a metre and a half. Beyond distances, you may not park on a sidewalk, in a crosswalk, within an intersection, on a bridge or its approaches, or in a disabled stall without a placard.",
        trap:
          "\"As long as the sign stays visible\" sounds sensible but is unenforceable - the rule is a fixed distance precisely so it does not depend on judgement.",
        excerptKey: "parking-stop-yield-sign",
        sourceLabel: "Alberta Driver's Guide - Do not park here",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_10",
        topic: "signs",
        question:
          "A square sign shows a white symbol on a blue background. What kind of information is it giving?",
        choices: [
          "A hazard on the road surface ahead",
          "Services such as fuel, food or lodging",
          "A restriction on the lane you are in",
          "The distance remaining to the next city",
        ],
        correctIndex: 1,
        explanation:
          "Blue is the services colour - fuel, food, a place to sleep, roadside help. Green plates handle destinations and distances, and yellow handles hazards. Knowing the colour families means you can ignore three-quarters of the signs on a highway and still catch the one you need.",
        context:
          "Alberta's information family splits by colour: blue squares point to services such as fuel, food, lodging, hospitals and police, while green plates carry route markers, directions and distances, and some off-road facility signs. None of them are enforceable - they exist to let you plan ahead so you are in the right lane well before an exit rather than making a last-second decision.",
        trap:
          "Distance-to-the-next-city plates are green, not blue - both are calm background colours and get swapped easily under speed.",
        excerptKey: "sign-service-blue",
        sourceLabel: "Alberta Driver's Guide - Information and guide signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_11",
        topic: "rightOfWay",
        question:
          "You are driving out of a shopping centre parking lot onto a main street, crossing a sidewalk on the way. What is required?",
        choices: [
          "Yield to traffic only, since the sidewalk is not a crossing",
          "Yield to vehicles from your left only",
          "Sound the horn once and edge out slowly",
          "Stop before the sidewalk, then again before the street, yielding to people on foot",
        ],
        correctIndex: 3,
        explanation:
          "You are the one joining, so nobody yields to you. The sidewalk gets its own stop because people walking along it have no reason to expect a car crossing their path, and then the roadway gets a second look before you commit. Two separate hazards, two separate stops.",
        context:
          "The same requirement covers exits from service roads, alleys, parking lots and private driveways: stop before the sidewalk, stop before entering the main street, and yield to people on foot throughout. Parking lots themselves are full of uncontrolled intersections where the yield-to-the-right rule applies. Nothing about leaving a lot gives you priority over traffic already on the road.",
        trap:
          "\"Yield to vehicles from your left only\" ignores half the danger - traffic can come from either direction and the sidewalk crossing is its own separate obligation.",
        excerptKey: "exiting-driveway-parking-lot",
        sourceLabel: "Alberta Driver's Guide - Right-of-way",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_12",
        topic: "rules",
        question:
          "A solid white line separates your lane from the one next to it. What does it mean?",
        choices: [
          "The lane beside you is about to end",
          "The lane beside you carries oncoming traffic",
          "Changing lanes across it is not permitted",
          "Only buses may use the lane beside you",
        ],
        correctIndex: 2,
        explanation:
          "Solid means do not cross, and white means the neighbouring lane runs the same direction you do. Solid white lines usually turn up where a lane change would be risky - approaching an intersection, or beside a highway on-ramp where merging traffic is accelerating.",
        context:
          "Read every line twice: once for colour and once for pattern. White means same direction, yellow means opposing traffic; broken means crossing is allowed, solid means it is not. So solid white forbids a lane change and broken white permits one. Single solid yellow is the Alberta exception worth memorising: it bars passing outside an urban area, but inside an urban area you may cross it to overtake safely. Painted islands are a separate marking - not for travel at all, though you may cross one to reach a driveway.",
        trap:
          "\"Oncoming traffic\" mixes up the colour rule - that would be a yellow line; white always means the traffic beside you is going your way.",
        excerptKey: "solid-white-line",
        sourceLabel: "Alberta Driver's Guide - Pavement markings",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_13",
        topic: "speed",
        question:
          "You are in the lane beside a tow truck that is stopped on the shoulder with its lights flashing. The posted limit is 100 km/h. What speed must you drop to?",
        choices: [
          "80 km/h",
          "70 km/h",
          "The posted limit is fine if you change lanes",
          "60 km/h",
        ],
        correctIndex: 3,
        explanation:
          "The rule is 60 km/h, or the posted limit if that is already lower - so on a 100 road you slow to 60. It covers police, fire, ambulance, tow trucks and highway maintenance crews alike. Move over as well if there is a lane to move into, and expect the speeding fine to be doubled here.",
        context:
          "Alberta's slow-down-and-move-over rule protects anyone working at the roadside with lights flashing: police, ambulance, fire, tow operators, snowplows and maintenance vehicles. Slow to 60 or the posted limit, whichever is lower, and move over a lane when it is safe. This is a different rule from yielding to a moving emergency vehicle, which requires you to pull right and stop. Breaching it costs a fine plus three demerits.",
        trap:
          "\"The posted limit is fine if you change lanes\" is wrong on both counts - moving over does not replace slowing down, and the rule is a speed requirement first.",
        excerptKey: "move-over-60",
        sourceLabel: "Alberta.ca - Roadside worker safety",
        sourceUrl: ROADSIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s2_14",
        topic: "safety",
        question:
          "Heavy rain starts falling on the highway. What should happen to your two-second following gap?",
        choices: [
          "It should stay the same, since the rule works at any speed",
          "It should be reduced so you stay closer to the car ahead",
          "It no longer applies once you switch on your headlights",
          "It should be increased to allow for longer stopping",
        ],
        correctIndex: 3,
        explanation:
          "Two seconds is the floor for good conditions, not a fixed answer. Wet pavement stretches braking distance and rain shortens how far ahead you can see, so both halves of the equation get worse at once. Stretch the gap out and you buy back the time the weather took.",
        context:
          "Poor conditions call for three adjustments together: more following distance, less speed, and a bigger space cushion on all sides. Rain also brings the risk of hydroplaning, and cruise control should be switched off in bad weather because it will keep feeding power when the tyres lose grip. Low beams are the right choice in rain, fog and smoke - high beams reflect back and make things worse.",
        trap:
          "\"The rule works at any speed\" is a true statement about how two seconds is measured, which makes it tempting - but it says nothing about conditions, and conditions are what changed.",
        excerptKey: "following-distance-two-seconds",
        sourceLabel: "Alberta Driver's Guide - Challenging conditions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_15",
        topic: "signs",
        question:
          "A sign showing a row of large arrowheads pointing sideways is mounted at the roadside. What is it marking?",
        choices: [
          "A lane reserved for turning traffic",
          "The beginning of a passing lane",
          "A sharp bend in the road at that point",
          "A merge from a side road ahead",
        ],
        correctIndex: 2,
        explanation:
          "Chevron markers are placed on the outside of a tight curve to show you where the road actually goes, especially at night when your headlights cannot reach round the bend. Seeing several in a row is a strong hint to be off the accelerator before you arrive.",
        context:
          "Chevrons belong to the warning family, which also covers curves, winding road stretches, hills, bumps, narrowing lanes and slippery surfaces. Where a curve carries an advisory speed on a small plate, that number is the recommended speed in ideal conditions - not a legal limit, but a good indication of how tight the bend really is. Braking should be finished before you turn in, not during the curve.",
        trap:
          "Turning-lane signs also use arrows, which is why this one gets misread - the difference is that chevrons are mounted at the roadside pointing across your path, not overhead above a lane.",
        excerptKey: "sign-chevron",
        sourceLabel: "Alberta Driver's Guide - Warning signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_16",
        topic: "signals",
        question:
          "The signal head shows a red light with a green arrow pointing left. What may you do?",
        choices: [
          "Proceed in any direction, since a green arrow is showing",
          "Stop first, then turn left when clear",
          "Turn left without stopping, but nothing else",
          "Wait, because the red light cancels the arrow",
        ],
        correctIndex: 2,
        explanation:
          "A green arrow beside a red gives you a protected movement in one direction only - here, left. Opposing traffic is being held, so you do not have to stop, but every other movement is still governed by that red. Straight ahead and right both have to wait.",
        context:
          "Green arrows come in two combinations. With a red light, the arrow is the only movement permitted and you may take it without stopping. With a solid green, the arrow gives you a protected turn in the direction shown while the green still allows other movements when it is safe and legal. In both cases the arrow means the conflicting traffic is being held for you.",
        trap:
          "\"Proceed in any direction\" reads the arrow as though it were a full green - the arrow protects one movement, and the red still governs everything else.",
        excerptKey: "green-arrow-red-light",
        sourceLabel: "Alberta Driver's Guide - Traffic control signals",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_17",
        topic: "rules",
        question:
          "You reach a stop sign on a rural road with no stop line and no crosswalk painted anywhere. Where do you stop?",
        choices: [
          "Within three metres of the road you are joining",
          "Level with the stop sign itself",
          "Within ten metres of the road you are joining",
          "Wherever you can see clearly in both directions",
        ],
        correctIndex: 0,
        explanation:
          "With no markings to work from, the rule gives you a distance instead: stop within three metres of the intersecting roadway. Close enough to see, far enough back not to be in it. If your view is still blocked at that point, edge forward carefully after the stop.",
        context:
          "Alberta gives you a fallback chain: stop before the painted stop line, or before the marked crosswalk if there is no line, or within three metres of the intersecting roadway if there is neither. Wherever you stop, you must not obstruct people crossing or about to cross. Approach slowly enough to stop easily, and remember the stop is only the first half - deciding when it is safe to go is the second.",
        trap:
          "\"Wherever you can see clearly\" is good practice but not the rule, and it lets a driver stop halfway into the cross road and call it compliance.",
        excerptKey: "stop-no-line-three-metres",
        sourceLabel: "Alberta Driver's Guide - Rules for stopping at intersections",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s2_18",
        topic: "rightOfWay",
        question:
          "On a city street, a pedestrian at the curb raises an arm and points across to the opposite side. What does that mean for you?",
        choices: [
          "They are signalling to someone else and can be ignored",
          "You may continue if you are already close to the crossing",
          "You must stop safely before the crosswalk and let them cross",
          "You should slow down but need not stop",
        ],
        correctIndex: 2,
        explanation:
          "That raised arm is the recognised way of declaring an intention to cross in an urban area, and it obliges you to stop before the crosswalk. Stop far enough back that drivers in the other lanes can see the person too - a lot of crosswalk collisions are second-lane vehicles that never saw them.",
        context:
          "Every intersection has crosswalks whether or not they are painted, and the duty to yield applies at unmarked ones too. Once someone has entered a crosswalk you must give way, and you may not pass another vehicle that has stopped for a pedestrian. Failing to yield to a person in a crosswalk is a four-demerit offence in Alberta, and the fine is substantial.",
        trap:
          "\"You may continue if you are already close\" borrows the yellow-light exception, which has no equivalent here - proximity does not cancel the duty to yield.",
        excerptKey: "pedestrian-indicates-crossing",
        sourceLabel: "Alberta Driver's Guide - Pedestrian safety",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_19",
        topic: "emergencies",
        question:
          "Nobody is hurt in a two-car collision, but the damage is clearly worse than a scratch. At what combined damage figure must the collision be reported to police?",
        choices: ["$1,000", "$2,000", "$5,000", "$10,000"],
        correctIndex: 2,
        explanation:
          "$5,000 of combined damage is the reporting trigger in Alberta. Any injury or death means you report regardless of the damage figure, and damage to public property such as a signal pole or parking meter also has to be reported.",
        context:
          "At any collision your first duties are practical: stop, help where you can, protect the scene with hazard lights and reflective triangles, and call for help if anyone is hurt. Then exchange names, contact details and insurance information, note witnesses, and record time, place and weather. Do not argue about fault at the roadside - that is for the insurers. If police attend, every driver must remain.",
        trap:
          "$2,000 is the tempting answer because that was Alberta's threshold for years - it rose to $5,000 at the start of 2024, so older study material and word of mouth both point at the wrong number.",
        excerptKey: "collision-reporting",
        sourceLabel: "Alberta Driver's Guide - Collisions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_20",
        topic: "signs",
        question:
          "A white X-shaped sign stands at the roadside where the road meets a rail line. What does it require?",
        choices: [
          "A full stop every time, whether or not a train is near",
          "Reducing speed to 30 km/h across the tracks",
          "Nothing, unless red lights are flashing",
          "Yielding to trains, and stopping when one is approaching",
        ],
        correctIndex: 3,
        explanation:
          "The crossbuck is a yield sign for trains. You do not have to stop at an empty crossing, but you must stop if a train is visible or sounding a signal within about 500 metres. Where a stop sign is fitted with the crossbuck, that sign means a full stop every time.",
        context:
          "Crossings come in layers. A crossbuck alone requires you to yield to trains and shows the number of tracks. Add a stop sign and you must stop every time, between five and fifteen metres from the nearest rail. Flashing red lights and bells mean stop at least five metres back and stay there until they cease and the train has cleared. Gates mean stay put until they rise fully - never drive around them.",
        trap:
          "\"Nothing unless red lights are flashing\" assumes every crossing has active warning devices, and plenty of rural Alberta crossings have only the crossbuck.",
        excerptKey: "railway-crossbuck-yield",
        sourceLabel: "Alberta Driver's Guide - Railway crossings",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_21",
        topic: "speed",
        question:
          "You drive through a signed construction zone on a Sunday evening. The equipment is parked and there is nobody working. What speed applies?",
        choices: [
          "The normal limit for that road, since no work is happening",
          "The construction limit applies only on weekdays",
          "Twenty over the construction limit is tolerated",
          "The posted construction zone limit",
        ],
        correctIndex: 3,
        explanation:
          "The posted work-zone limit applies whenever it is signed, workers present or not, because the hazards it was set for are still there: bumps, loose gravel, fresh oil, changed lane positions. What changes when crews are present is the penalty - fines in these zones are doubled.",
        context:
          "A construction limit is a posted regulatory speed, not an advisory tied to whether anyone is on site. It stays in force until you pass a sign marking the end of the zone. When workers are present the fines double, and that doubling can apply even where no sign warns you of it. A flag person's directions override the signs and the signals alike.",
        trap:
          "\"No work is happening, so the normal limit applies\" is the single most common construction-zone assumption, and it is what most work-zone tickets are written for.",
        excerptKey: "construction-zone-speed",
        sourceLabel: "Alberta Driver's Guide - Construction zones",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s2_22",
        topic: "impairment",
        question:
          "Which of these counts as a distracted driving offence under Alberta's Traffic Safety Act?",
        choices: [
          "Typing a destination into a GPS unit while driving",
          "Glancing at the speedometer while driving",
          "Talking to a passenger beside you",
          "Adjusting the interior mirror before you set off",
        ],
        correctIndex: 0,
        explanation:
          "Programming a GPS while moving sits on the ticketable list along with hand-held phones, texting, reading, grooming and playing with other electronics - a fine plus three demerits. Checking gauges and mirrors is part of driving; entering data on a screen takes your eyes and mind off the road.",
        context:
          "Alberta's distracted driving offence covers hand-held phones, texting and emailing, operating laptops, games, cameras and video screens, programming audio players or GPS units, reading, writing or sketching, and personal grooming. Hands-free calls are legal but are still discouraged, because the distraction is cognitive as much as manual. If you need to deal with a device, stop somewhere safe and legal first.",
        trap:
          "Talking to a passenger genuinely is a distraction, which makes it a tempting pick - but it is not one of the behaviours Alberta made ticketable.",
        excerptKey: "distracted-driving-demerits",
        sourceLabel: "Alberta Driver's Guide - Cellular phones and other distractions",
        sourceUrl: DEMERITS,
      },
      {
        id: "ab_s2_23",
        topic: "safety",
        question:
          "On a cold morning the pavement ahead looks glossy and dark rather than the usual dull grey. What is the safest response?",
        choices: [
          "Ease off the accelerator and slow without braking",
          "Brake firmly now while you still have grip",
          "Keep your speed steady and steer around the patch",
          "Accelerate briefly to cross it quickly",
        ],
        correctIndex: 0,
        explanation:
          "That shine is the classic look of black ice. Braking or steering sharply on it is what starts the skid, so bleed off speed by lifting your foot instead and keep your inputs tiny. Bridges, overpasses and shaded stretches ice up first, so read those surfaces before you reach them.",
        context:
          "Black ice forms where moisture freezes on the surface and is often invisible, so you learn to read the places it appears first: bridge decks, overpasses, shaded stretches and intersections, where exhaust heat and spinning wheels polish the surface. A thaw can be worse than a hard freeze, since melting snow leaves a slick film. Cruise control should always be off in these conditions.",
        trap:
          "\"Brake firmly now while you still have grip\" sounds like sensible early action, but you cannot tell where the ice starts - and hard braking on the leading edge of it is what triggers the slide.",
        excerptKey: "black-ice",
        sourceLabel: "Alberta Driver's Guide - Road surface conditions that affect traction",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_24",
        topic: "rules",
        question:
          "The car in the lane beside you has stopped at a crosswalk and you cannot see why. What must you do?",
        choices: [
          "Pass carefully, since your lane is clear",
          "Pass only if you slow to 30 km/h first",
          "Not pass, because someone may be crossing",
          "Sound your horn and continue past",
        ],
        correctIndex: 2,
        explanation:
          "A stopped vehicle at a crosswalk is a screen you cannot see behind, and the most likely thing behind it is a person walking. Alberta bans passing in exactly this situation. Wait until you can see the crossing is clear - the few seconds it costs you is the whole safety margin.",
        context:
          "Alberta lists several situations where passing is prohibited outright: when oncoming traffic is too close, when a solid yellow line is on your side outside an urban area, in a signed no-passing zone, inside an active school or playground zone, when another vehicle has stopped for a pedestrian, and when a school bus has its red lights flashing and stop arm out. That urban qualifier is real - within an urban area a single solid yellow may be crossed to overtake safely. Approaching any crosswalk is a poor place to overtake even where it is technically legal.",
        trap:
          "\"Pass carefully, since your lane is clear\" is exactly the reasoning behind second-lane crosswalk collisions - your lane looks clear because the stopped car is hiding the person.",
        excerptKey: "no-passing-stopped-for-pedestrian",
        sourceLabel: "Alberta Driver's Guide - When is it illegal to pass another vehicle?",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_25",
        topic: "rightOfWay",
        question:
          "A funeral procession with headlights on is moving through an intersection ahead of you. What is expected?",
        choices: [
          "Follow the last vehicle closely until you can turn off",
          "Merge into a gap in the procession to keep traffic moving",
          "Proceed as normal, since the procession has no special status",
          "Yield and wait until the procession has passed",
        ],
        correctIndex: 3,
        explanation:
          "A procession is treated as one unit, so you do not cut through it - you give way until it has cleared. Vehicles inside the procession are permitted to follow the car ahead through a stop sign or red light, which is precisely why breaking into the line is dangerous.",
        context:
          "Alberta gives a funeral procession a narrow set of privileges: with headlights on and following closely behind the vehicle ahead, participants may continue through a stop sign or red light when it is safe. Other drivers must not pass through the procession and must yield until it has gone by. Treat the whole line as a single long vehicle and you will get it right.",
        trap:
          "\"No special status\" is a reasonable guess, since most jurisdictions vary - but Alberta does grant the procession specific privileges, which is why cutting into it is unsafe.",
        excerptKey: "funeral-procession-yield",
        sourceLabel: "Alberta Driver's Guide - Funeral processions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_26",
        topic: "signs",
        question:
          "The vehicle ahead of you carries an orange triangle with a red border on its rear. What does that tell you?",
        choices: [
          "It travels at less than 40 km/h",
          "It is an oversized load with escort vehicles",
          "It is carrying dangerous goods",
          "It is a farm vehicle exempt from speed limits",
        ],
        correctIndex: 0,
        explanation:
          "The slow-moving vehicle triangle is fitted to anything that tops out under 40 km/h - tractors, farm machinery, some construction equipment. It is a warning to you, because closing on a 25 km/h machine at highway speed happens far faster than most drivers expect.",
        context:
          "Alberta has a small family of signs mounted on vehicles rather than at the roadside: the slow-moving vehicle triangle, oversized load signs on wide loads, and dangerous goods placards. All of them are advance notice to change what you are doing - slow early for the triangle, allow extra room and time when passing an oversized load, and expect vehicles carrying dangerous goods to stop at railway crossings.",
        trap:
          "\"Exempt from speed limits\" inverts the meaning entirely - the sign says the vehicle cannot reach normal speeds, not that it is allowed to exceed them.",
        excerptKey: "sign-slow-moving-vehicle",
        sourceLabel: "Alberta Driver's Guide - Other signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_27",
        topic: "sharing",
        question:
          "A motorcycle ahead of you is riding in the left-hand part of its lane. What does that usually mean?",
        choices: [
          "The rider is positioning for visibility",
          "The rider is inviting you to pass on the right",
          "The rider is about to turn left",
          "The rider has drifted out of position",
        ],
        correctIndex: 0,
        explanation:
          "Riders sit toward the left of the lane because it puts them in the mirrors and the eyeline of the drivers ahead. Read it as a visibility choice, not a turn signal. Riders also shift within their lane to dodge potholes and keep space around them, so expect small movements.",
        context:
          "A motorcycle is entitled to the whole lane and you never share one with a rider. Their signals can be hard to see and do not always self-cancel, so watch the rider's body for clues - a shoulder check usually means a lane change or turn is coming. They can also stop far quicker than a car, so leave extra following distance, and take particular care judging their speed when you are turning left across their path.",
        trap:
          "Reading lane position as a turn signal is the dangerous version of this mistake - it leads drivers to pull out in front of a rider who was only positioning themselves to be seen.",
        excerptKey: "motorcycle-lane-position",
        sourceLabel: "Alberta Driver's Guide - Motorcycles",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_28",
        topic: "rules",
        question:
          "A centre lane is marked on both sides with a solid yellow line outside a broken yellow line. What is the lane for?",
        choices: [
          "Passing slower traffic in either direction",
          "Left turns by traffic travelling in either direction",
          "Emergency vehicles only",
          "Overtaking, but only during off-peak hours",
        ],
        correctIndex: 1,
        explanation:
          "That is a two-way left turn lane, shared by drivers from both directions who are waiting to turn left. You may cross the solid yellow to get into it, but only close to where you will actually turn - it is a staging area, not a travel lane, and never a passing lane.",
        context:
          "The two-way left turn lane exists so left-turning vehicles can wait out of the through lanes without blocking traffic. Enter it only near your turn, watch for oncoming vehicles doing the same thing from the other direction, and never use it to travel any distance or to overtake. It is one of the few places Alberta lets you cross a solid yellow line legally.",
        trap:
          "\"Passing slower traffic\" is what the lane looks like it offers - an empty middle lane - and using it that way puts you head-on with someone entering from the opposite direction.",
        excerptKey: "two-way-left-turn-lane",
        sourceLabel: "Alberta Driver's Guide - Two-way left turn lanes",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_29",
        topic: "safety",
        question:
          "At highway speed on a soaked road, your steering suddenly feels light and vague. What should you do?",
        choices: [
          "Lift off the accelerator and steer where you want to go",
          "Brake hard to get the tyres biting again",
          "Turn the wheel sharply to break through the water",
          "Accelerate to push the water out from under the tyres",
        ],
        correctIndex: 0,
        explanation:
          "That vague feeling is hydroplaning - the tyres are riding on a film of water instead of touching pavement. Braking or steering hard does nothing while there is no contact, and grabs violently the instant it returns. Ease off, hold your line, and let speed drop until the tyres bite again.",
        context:
          "Hydroplaning is more likely with worn tyres, under-inflation, standing water and higher speed, so the real defence is prevention: keep the tyres in good shape and slow down when water is pooling. Use low beams in rain, keep the windscreen clear, and switch cruise control off - it will keep applying power exactly when you need the car to slow. Recovery is always the same: off the pedals, steer gently, wait for grip.",
        trap:
          "Braking hard is the instinct, and it is the one input guaranteed to make things worse - the wheels lock on the water film and grab hard when contact returns.",
        excerptKey: "hydroplaning-recovery",
        sourceLabel: "Alberta Driver's Guide - Rain and hydroplaning",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s2_30",
        topic: "rightOfWay",
        question:
          "You are driving along a road that ends at a T-intersection with no signs or signals of any kind. A vehicle is approaching on the through road from your right. Who goes first?",
        choices: [
          "You, because the other driver is not ending their road",
          "The vehicle travelling on the through road, from either side",
          "Whichever vehicle arrives at the junction first",
          "The vehicle on your right",
        ],
        correctIndex: 3,
        explanation:
          "An uncontrolled T-intersection is still an uncontrolled intersection, so the yield-to-the-right rule applies as usual. The trap is that drivers on the through road often assume they have priority simply because their road continues. Watch for that assumption even when the rule is on your side.",
        context:
          "The yield-to-the-right rule covers every intersection with no sign, signal or marking, including T-shapes and parking lot aisles. Because the through-road assumption is so widespread, treat this as a place where you may have the right-of-way on paper and still need to give it up in practice. Approach slowly enough to stop, and never proceed until you can see the other driver is actually yielding.",
        trap:
          "\"The through road has priority\" feels obvious and is what the other driver probably believes - which makes it both the wrong answer and the reason to be careful here.",
        excerptKey: "uncontrolled-t-intersection",
        sourceLabel: "Alberta Driver's Guide - Uncontrolled intersections",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
    ],
  },

  {
    id: "set-3",
    setNumber: 3,
    title: "Set 3 · Real Exam Pressure",
    difficulty: "medium",
    description:
      "Thirty-five questions at genuine test difficulty: zone hours you have to work out, two-lane roundabouts, divided-highway school bus rules, demerit thresholds and the exact distances Alberta puts in the book.",
    questions: [
      {
        id: "ab_s3_01",
        topic: "speed",
        question:
          "It is 12:15 pm on a Tuesday during the school year and you are driving through a marked school zone. Unless different times are posted, what applies?",
        choices: [
          "The zone is not in effect - lunch hour falls between the periods",
          "The zone is in effect and the reduced limit applies",
          "The zone applies only in the morning and after class",
          "The zone applies only when children are visible",
        ],
        correctIndex: 1,
        explanation:
          "Alberta's default school zone hours run in three blocks on school days: morning arrival, the middle-of-day block from 11:30 to 1:30, and afternoon dismissal. Quarter past twelve sits squarely inside the second block. Whether you can see any children makes no difference to the limit.",
        context:
          "The three default blocks are 8:00 to 9:30, 11:30 to 1:30 and 3:00 to 4:30, on school days only. Municipalities may set different hours by bylaw, in which case they appear on a plate under the school sign - so read the sign rather than trusting the default. Playground zones use a completely different schedule: every day, from mid-morning until an hour after sunset.",
        trap:
          "\"Lunch hour falls between the periods\" is the intuitive answer, because most people picture only drop-off and pick-up - but the midday block exists precisely because children move around at lunch.",
        excerptKey: "school-zone-hours",
        sourceLabel: "Alberta.ca - School and playground zones",
        sourceUrl: ZONES,
        commonlyMissed: true,
      },
      {
        id: "ab_s3_02",
        topic: "signs",
        question:
          "You approach a pedestrian crossing sign whose yellow lights have started flashing. What does the law require?",
        choices: [
          "Slow to a maximum of 30 km/h and yield to people crossing",
          "Slow to a maximum of 50 km/h and continue if nobody is waiting",
          "Stop completely before the crossing every time",
          "Maintain your speed unless someone steps onto the road",
        ],
        correctIndex: 0,
        explanation:
          "Flashing amber on one of these crossings drops you to 30 km/h and requires you to yield, stopping if that is what it takes. Someone has activated it, so treat the crossing as occupied even if you cannot see them yet - parked cars and snowbanks hide people easily.",
        context:
          "Alberta uses flashing yellow lights on signs at school zones, playground zones, school crossings and pedestrian crossings, and the requirement is the same in each case: drop to a maximum of 30 km/h and yield or stop for people crossing. A different flashing-amber sign appears in advance of some signalised intersections - there the flashing lights warn that the traffic signal ahead is about to change or is already red.",
        trap:
          "\"Stop completely every time\" over-applies the rule - the requirement is to slow to 30 and yield, and stopping is only needed when someone is actually crossing.",
        excerptKey: "flashing-yellow-pedestrian-lights",
        sourceLabel: "Alberta Driver's Guide - Pedestrian signals and signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_03",
        topic: "rules",
        question:
          "The centre of the road is marked with a solid yellow line on your side and a broken yellow line on the oncoming side. Who may overtake?",
        choices: [
          "Neither driver, because one line is solid",
          "Only the driver with the broken line on their side",
          "Both drivers, as long as the road ahead is clear",
          "Only the driver with the solid line on their side",
        ],
        correctIndex: 1,
        explanation:
          "Each driver reads the line nearest to them. Broken on your side means passing is allowed if it is safe; solid on your side means it is not. So in this pair, oncoming traffic may pass and you may not - which is worth remembering, because a car may pull into your lane to do it.",
        context:
          "Yellow lines separate opposing traffic and their pattern tells each driver what they personally may do. Broken on your side permits a pass. Double solid on your side never does. Single solid on your side depends on where you are: prohibited outside an urban area, permitted within one when the pass can be made safely. The paired solid-and-broken marking usually appears where sightlines are good in one direction and poor in the other, such as approaching a crest - which is exactly why an oncoming car may appear in your lane.",
        trap:
          "\"Neither driver, because one line is solid\" treats the pair as a single instruction, but each driver only reads the line on their own side.",
        excerptKey: "solid-and-broken-yellow",
        sourceLabel: "Alberta Driver's Guide - Pavement markings",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s3_04",
        topic: "rightOfWay",
        question:
          "The traffic light facing you is a flashing green. What does it mean?",
        choices: [
          "Proceed with caution, as with a flashing yellow",
          "The signal is faulty and should be treated as a four-way stop",
          "You may go straight, left or right; opposing traffic is stopped",
          "You may go straight only; turns must wait for a solid green",
        ],
        correctIndex: 2,
        explanation:
          "A flashing green is an advance green - traffic coming the other way is being held on a red while you get an unopposed phase, so a left turn needs no gap. It is easily confused with a flashing yellow, which grants no such protection. You still yield to anyone lawfully in the intersection.",
        context:
          "Alberta's three flashing signals do three different jobs. Flashing red is a stop sign, and if every approach is flashing red the intersection becomes an all-way stop. Flashing yellow lets you proceed with caution after yielding to anyone already in the intersection. Flashing green is the protected advance phase. The only one that gives you priority over opposing traffic is the green.",
        trap:
          "Treating it like a flashing yellow is the standard mistake, and it costs you a protected left turn you were entitled to take without waiting.",
        excerptKey: "flashing-green-light",
        sourceLabel: "Alberta Driver's Guide - Traffic control signals",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s3_05",
        topic: "safety",
        question:
          "A railway crossing is fitted with a stop sign. Where must you bring the vehicle to a stop?",
        choices: [
          "Anywhere before the crossing, as long as you stop",
          "Between 2 and 5 metres from the nearest rail",
          "At least 20 metres from the nearest rail",
          "Between 5 and 15 metres from the nearest rail",
        ],
        correctIndex: 3,
        explanation:
          "The window is 5 to 15 metres from the closest rail. Nearer than five and you are inside the swept path of a train, which overhangs the track by a good margin; further than fifteen and you cannot see down the line properly. Where lights flash instead, stop at least five metres back.",
        context:
          "Railway crossing rules stack by equipment: a crossbuck alone means yield to trains and stop if one is within about 500 metres, a stop sign means a full stop every time in that 5 to 15 metre window, and flashing lights or gates mean stay put until they cease or lift fully. Never start across unless you can clear the far side completely, and after one train has gone check that a second is not coming on another track.",
        trap:
          "\"Anywhere before the crossing\" satisfies the word \"stop\" but not the rule - stopping too close puts you inside the train's overhang, which is wider than the rails.",
        excerptKey: "railway-stop-sign-distance",
        sourceLabel: "Alberta Driver's Guide - Railway crossings",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_06",
        topic: "licensing",
        question:
          "How many demerit points within a two-year window trigger an automatic suspension for a GDL driver, and how many for a fully licensed driver?",
        choices: [
          "6 for a GDL driver, 12 for a fully licensed driver",
          "8 for a GDL driver, 12 for a fully licensed driver",
          "10 for a GDL driver, 15 for a fully licensed driver",
          "8 for a GDL driver, 15 for a fully licensed driver",
        ],
        correctIndex: 3,
        explanation:
          "Eight points suspends a learner or probationary driver; a full licence holder has until fifteen. The gap is deliberate - novices get a much shorter leash. A first suspension is one month, and a couple of speeding convictions plus one careless driving charge is enough to reach eight.",
        context:
          "Points are counted over a rolling two-year window and drop off two years after the conviction date. Warning letters go out earlier - at four points for a GDL driver and eight for a fully licensed one. Suspensions escalate: one month for a first, three months for a second within a year, six months for a third within two years. After a suspension you come back with points still on the record rather than a clean sheet.",
        trap:
          "The \"8 and 12\" pairing gets the novice number right and the adult number wrong, which makes it the easiest option to half-remember your way into.",
        excerptKey: "demerit-suspension-gdl",
        sourceLabel: "Alberta.ca - Demerit points",
        sourceUrl: DEMERITS,
        commonlyMissed: true,
      },
      {
        id: "ab_s3_07",
        topic: "signs",
        question:
          "A lane-designation sign at a two-lane roundabout shows both lanes serving your intended exit, which is the third one. Which lane should you enter?",
        choices: [
          "The right lane, then move left inside the circle",
          "The left lane, staying in it until you exit",
          "Either lane, changing lanes as needed inside the circle",
          "The right lane, since it is closest to every exit",
        ],
        correctIndex: 1,
        explanation:
          "Drivers going past the first exit should enter on the left and exit on the left, and the golden rule is that you never change lanes inside a circle. Enter in the lane you intend to leave in, signal right after you pass the exit before yours, and watch the outside lane as you cross it.",
        context:
          "A two-lane roundabout works on one principle: enter in the lane you intend to leave in, and hold it the whole way round. The right lane is for the first exit or a right turn; the left lane is for anything further round. Signal right only after passing the exit before the one you want. If you end up in the wrong lane, go round again rather than cutting across.",
        trap:
          "\"Either lane, changing as needed\" is how many drivers actually behave, and lane changes inside a circle are the cause of most two-lane roundabout collisions.",
        excerptKey: "roundabout-lane-choice",
        sourceLabel: "Alberta Driver's Guide - Two-lane traffic circle / roundabout",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_08",
        topic: "rules",
        question:
          "You are heading toward a school bus that has stopped on the far side of a highway divided by a grass median, its red lights flashing. What must you do?",
        choices: [
          "Stop until the red lights are switched off",
          "Stop 20 metres back and wait for the stop arm to fold in",
          "Stop only if children are visible near the bus",
          "Proceed with caution, watching for people on foot",
        ],
        correctIndex: 3,
        explanation:
          "A physical median separates you from the bus, so children have no reason to cross into your lanes and traffic facing the bus may continue - carefully. Take the median away and the answer flips: on an undivided road both directions stop, no matter how many lanes there are.",
        context:
          "The presence of a median is what decides everything. On an undivided road, whether it has two lanes or four, traffic in both directions must stop for flashing reds and stay stopped until the lights go off and the arm folds in. Where a median divides the directions, only traffic behind the bus stops; oncoming traffic may proceed with care. Failing to stop for a school bus costs six demerits and a heavy fine.",
        trap:
          "\"Stop until the lights are off\" is the right answer on an undivided road, and drivers who learned only that version apply it here without noticing the median.",
        excerptKey: "school-bus-divided-highway",
        sourceLabel: "Alberta Driver's Guide - School buses",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s3_09",
        topic: "speed",
        question:
          "A playground zone has no hours posted beneath the sign. When is the reduced limit in effect?",
        choices: [
          "On school days only, during the same hours as school zones",
          "Every day from 8:30 am until one hour after sunset",
          "Every day from 7:00 am until 11:00 pm",
          "Only during daylight hours in summer months",
        ],
        correctIndex: 1,
        explanation:
          "Playground zones run seven days a week, starting mid-morning and ending an hour after sunset - so the end time drifts with the season and is late in June, early in November. That is the big difference from school zones, which only apply on school days in three fixed blocks.",
        context:
          "Playground and school zones share the same 30 km/h default but differ on timing, and the sunset-based end time is what catches people out, since the zone can still be live well into the evening in midsummer. Municipalities may post their own hours beneath the sign. Passing another vehicle is prohibited while either zone is in effect, and both end only where a sign shows a higher limit or the end of the zone.",
        trap:
          "Matching playground hours to school hours is the natural assumption, since the signs look related - but playground zones run every day of the week, weekends included.",
        excerptKey: "playground-zone-hours",
        sourceLabel: "Alberta.ca - School and playground zones",
        sourceUrl: ZONES,
      },
      {
        id: "ab_s3_10",
        topic: "safety",
        question:
          "A fire engine with lights and siren going has passed you and is now ahead in your lane. What following distance should you keep?",
        choices: [
          "The usual two seconds",
          "About 50 metres",
          "Whatever distance lets you keep it in sight",
          "At least 150 metres",
        ],
        correctIndex: 3,
        explanation:
          "Alberta asks for roughly 150 metres behind a responding emergency vehicle. It may brake or swerve without warning, other traffic scattering out of its way can move unpredictably, and following close makes you look like part of the convoy to drivers at the next intersection.",
        context:
          "There are three separate emergency-vehicle rules and they are easy to blur. Yield to one that is approaching with siren or lights - pull right and stop. Keep about 150 metres back if you end up behind one that is responding. And slow to 60 km/h or the posted limit, whichever is lower, when passing one that is stopped at the roadside with its lights flashing. Flashing green lights on a private vehicle mean a volunteer firefighter responding.",
        trap:
          "\"Whatever lets you keep it in sight\" is how drivers rationalise tucking in behind an emergency vehicle to get through traffic, and it is both dangerous and prohibited.",
        excerptKey: "emergency-vehicle-following-distance",
        sourceLabel: "Alberta Driver's Guide - Emergency vehicles",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_11",
        topic: "signs",
        question:
          "A large rectangular sign has white lettering on a green background. What is it giving you?",
        choices: [
          "A regulation you must obey",
          "Directions and distances to destinations",
          "A warning about the road ahead",
          "Notice of a work zone ahead",
        ],
        correctIndex: 1,
        explanation:
          "Green rectangles are the guide-sign family: place names, directions, how many kilometres to go. Nothing on them is enforceable. Regulations live on white rectangles, warnings on yellow diamonds, and roadwork on orange - four colours that between them cover most of what you will see.",
        context:
          "Guide signs matter for planning rather than compliance. Reading them early is what lets you be in the correct lane well before an exit instead of making a last-second move across two lanes. Alberta's route markers work alongside them - a numbered marker means you are on a provincial highway, which also tells you which default speed limit applies if none is posted.",
        trap:
          "White and green rectangles look alike at highway speed, so the regulatory answer is tempting - the background colour is the only reliable tell.",
        excerptKey: "sign-guide-green",
        sourceLabel: "Alberta Driver's Guide - Information and guide signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_12",
        topic: "rightOfWay",
        question:
          "You are circulating in the outside lane of a two-lane roundabout when a vehicle in the inside lane starts moving toward your lane to reach its exit. What does the rule say?",
        choices: [
          "The inside vehicle must wait until the outside lane is clear",
          "The outside vehicle must give way to the inside vehicle",
          "Whichever vehicle entered the circle first has priority",
          "Both must stop and sort it out by arrival order",
        ],
        correctIndex: 1,
        explanation:
          "Inside a circle, the driver on the right yields to the driver on the left - so the outside lane gives way to the inside lane crossing out to an exit. It is the reverse of the instinct most drivers bring in, which is why exit conflicts are the classic two-lane roundabout collision.",
        context:
          "Two-lane circles have two priority rules layered on each other. At the entry, everyone gives way to traffic already circulating. Once inside, the driver on the right yields to the driver on the left, which is what lets an inside-lane vehicle reach its exit. Neither rule is the ordinary yield-to-the-right you use at uncontrolled intersections - inside a roundabout, that instinct is exactly backwards.",
        trap:
          "\"The inside vehicle must wait\" applies everyday yield-to-the-right thinking, and it is the single most common misconception at Alberta's two-lane roundabouts.",
        excerptKey: "roundabout-inside-lane-priority",
        sourceLabel: "Alberta Driver's Guide - Traffic circles and roundabouts",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_13",
        topic: "rules",
        question:
          "You are on a one-way street at a red light, wanting to turn left onto another one-way street. No sign at the corner mentions turning. What is allowed?",
        choices: [
          "Nothing - left turns on red are never permitted in Alberta",
          "Turn after a complete stop, once you have yielded",
          "Turn without stopping if the road you are joining is clear",
          "Turn only if a green arrow is displayed",
        ],
        correctIndex: 1,
        explanation:
          "One-way to one-way is the single situation where a left on red is legal here, and it works for the same reason a right on red does: you never cross a stream of traffic. Stop fully at the line first, yield to people in the crosswalk and to anything already moving, then go.",
        context:
          "Both of Alberta's turns on red require the same three conditions: a complete stop at the stop line or crosswalk, no sign at that corner prohibiting the turn, and yielding to everyone already in the intersection or crossing. Right on red is the common case and also works at dual right-turn intersections. Left on red is narrower - it needs a one-way street both before and after the turn.",
        trap:
          "\"Never permitted\" is a safe-sounding absolute, and plenty of drivers believe it - but Alberta does allow the one-way-to-one-way left on red.",
        excerptKey: "left-turn-on-red-one-way",
        sourceLabel: "Alberta Driver's Guide - Traffic control signals",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_14",
        topic: "parking",
        question:
          "You are parking on the right-hand side of a steep street, facing uphill, and there is a curb. Which way should the front wheels point?",
        choices: [
          "Toward the curb, so the tyre rests against it",
          "Away from the curb, then roll back until the tyre touches it",
          "Straight ahead, with the park brake set firmly",
          "Away from the curb, with the wheels clear of it",
        ],
        correctIndex: 1,
        explanation:
          "Facing uphill with a curb, turn the wheels left - away from the curb - then let the car roll back until the right front tyre rests against it. The curb becomes a physical block. Facing downhill, or uphill with no curb at all, you turn the wheels right so a runaway heads off the road.",
        context:
          "On the right-hand side of the road there are three cases: uphill with a curb means wheels left and roll back onto it, uphill without a curb means wheels right, and downhill means wheels right whether or not there is a curb. The logic is always the same - point the front wheels so a runaway ends up against the curb or off the road rather than out into traffic. Parking on the left-hand side reverses all of it, and in every case you set the park brake and leave an automatic in park or a manual in a low gear.",
        trap:
          "\"Toward the curb\" is the correct answer for facing downhill, and it is the version most people remember - uphill with a curb is the case that reverses it.",
        excerptKey: "hill-parking-uphill-curb",
        sourceLabel: "Alberta Driver's Guide - Hill parking",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_15",
        topic: "signs",
        question:
          "You pass a fluorescent yellow-green pentagon with no speed sign attached beneath it. What does that mean?",
        choices: [
          "It is an alert only - no reduced speed limit applies",
          "A 30 km/h limit applies at all times",
          "A 30 km/h limit applies during school hours",
          "The limit drops by 20 km/h from the posted speed",
        ],
        correctIndex: 0,
        explanation:
          "With a speed sign attached it is a school zone and the limit binds; without one it is a school area, which warns you that children may be around but sets no restriction. Playground signs work the same way. The attached speed plate is the thing that turns an area into a zone.",
        context:
          "Alberta draws a hard line between zones and areas. A zone has a speed sign attached and enforces a reduced limit during its hours, plus a ban on passing while it is active. An area has no speed sign and is a caution alert only. Both school and playground signs follow this pattern, so the question to ask at every one is simply whether there is a number underneath.",
        trap:
          "\"30 km/h during school hours\" is the correct reading of a school ZONE sign - the missing speed plate is the detail that changes the answer.",
        excerptKey: "school-area-no-speed-sign",
        sourceLabel: "Alberta.ca - School and playground zones",
        sourceUrl: ZONES,
        commonlyMissed: true,
      },
      {
        id: "ab_s3_16",
        topic: "safety",
        question:
          "Roughly how much time passes between a hazard appearing and your brakes actually starting to slow the car, for an average alert driver?",
        choices: [
          "About one and a half seconds",
          "About a quarter of a second",
          "About three seconds",
          "About five seconds",
        ],
        correctIndex: 0,
        explanation:
          "Perception takes around three-quarters of a second and moving your foot to the pedal takes about the same again, so roughly a second and a half goes by before the brakes do anything. At 100 km/h that is about forty metres of road covered before you have begun to slow.",
        context:
          "Total stopping distance is perception distance plus reaction distance plus braking distance. The first two are roughly fixed in time, so the ground they cover scales directly with speed, while braking distance grows faster still. Inexperience, fatigue, alcohol and drugs all stretch the first two stages, which is a large part of why a novice driver needs a bigger following gap than an experienced one.",
        trap:
          "A quarter of a second is roughly how fast people think they react, and that optimism is exactly what closes following distances to unsafe levels.",
        excerptKey: "perception-time",
        sourceLabel: "Alberta Driver's Guide - Stopping time and distance",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_17",
        topic: "rules",
        question:
          "You are overtaking on a two-lane highway posted at 90 km/h and the vehicle ahead is doing 85. What does the law allow while you complete the pass?",
        choices: [
          "Exceeding the limit briefly, to shorten your time alongside",
          "Exceeding the limit by up to 10 km/h",
          "Exceeding the limit only if oncoming traffic appears",
          "Nothing above 90 km/h - the limit still applies",
        ],
        correctIndex: 3,
        explanation:
          "There is no passing exemption in Alberta. The limit is the limit, even mid-overtake, which means a pass that only works by speeding was never a legal pass to begin with. If the gap in oncoming traffic is not big enough to do it at the posted speed, wait for a better one.",
        context:
          "A two-lane pass is one of the higher-risk things you do on a highway, so Alberta layers requirements onto it: pass only where it is permitted, keep a safe gap before pulling out, shoulder check for a vehicle already overtaking you, confirm there is no oncoming traffic for a safe distance, and return only when the passed vehicle is visible in your interior mirror. Doing all that within the speed limit is the point.",
        trap:
          "\"Exceeding briefly to shorten your time alongside\" sounds like a safety argument, and it is how most passing speeding tickets get rationalised - but no such exemption exists.",
        excerptKey: "passing-no-speeding",
        sourceLabel: "Alberta Driver's Guide - Passing on a two-lane highway",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_18",
        topic: "impairment",
        question:
          "You have been prescribed a new medication and are unsure how it will affect your driving. What is the right step?",
        choices: [
          "Try a short drive first to see how you feel",
          "Take a lower dose than prescribed on days you drive",
          "Assume it is safe, since it was legally prescribed",
          "Ask your doctor or pharmacist about its effects before driving",
        ],
        correctIndex: 3,
        explanation:
          "Prescription and over-the-counter drugs alike can bring drowsiness and slowed judgement, and mixing them with even a small amount of alcohol can amplify both. The pharmacist knows the interaction profile - and impairment by a legal drug is still impairment in the eyes of the law.",
        context:
          "Alberta groups medication with alcohol, drugs and fatigue under fitness to drive, and the roadside programs make no distinction based on where the substance came from. A 24-hour disqualification can be issued to anyone whose ability to drive is impaired by drugs, alcohol, or even a physical or medical condition. Novice drivers face the added complication that their zero-tolerance condition covers drugs as well as alcohol.",
        trap:
          "\"It was legally prescribed, so it must be safe\" is the reasoning behind a lot of medication-impaired driving - legality of the drug says nothing about its effect on you.",
        excerptKey: "medications",
        sourceLabel: "Alberta Driver's Guide - Medications",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_19",
        topic: "sharing",
        question:
          "A loaded log hauling truck ahead of you is beginning to turn off the highway. What should you do?",
        choices: [
          "Pass on the opposite side to the turn",
          "Pass quickly while the truck slows for the turn",
          "Hold well back and do not attempt to pass",
          "Move alongside so the driver can see you",
        ],
        correctIndex: 2,
        explanation:
          "Logs can hang several metres past the back of the trailer, and as the cab swings around, that overhang sweeps across the lanes behind it - sometimes all of them. There is no safe side to be on. Stay back until the whole unit is off the highway and the lanes are clear again.",
        context:
          "Large vehicles need room you would not predict. A turning truck may cross the centre line or use part of your lane, so stop back from the intersection and let it complete the manoeuvre. Their blind spots are large - if you cannot see both of the truck's mirrors, the driver cannot see you. They also need far more distance to stop, so never cut in front of one and leave extra room after passing.",
        trap:
          "\"Pass quickly while it slows\" treats the turn as an opportunity, when it is the moment the load sweeps across the widest area of road.",
        excerptKey: "log-hauling-truck",
        sourceLabel: "Alberta Driver's Guide - Log hauling vehicles",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_20",
        topic: "rightOfWay",
        question:
          "You are waiting in the intersection on a solid green light to turn left. Oncoming traffic is steady and the light turns yellow. What should you do?",
        choices: [
          "Complete the turn once oncoming traffic has stopped and the way is clear",
          "Reverse back behind the stop line before the light turns red",
          "Turn immediately, since a yellow gives waiting vehicles priority",
          "Stay put until the next green and hold the intersection",
        ],
        correctIndex: 0,
        explanation:
          "A solid green permits the turn but never protects it - you yield to oncoming traffic and to people crossing throughout. Once you are legally in the intersection, you clear it when the way opens, which usually means completing the turn as the phase ends. Reversing in an intersection is illegal.",
        context:
          "A solid green is a permission, not a protection. Only a green arrow or a flashing green holds the opposing traffic for you. When you enter to wait for a gap, keep your front wheels pointed straight ahead so a rear-end impact does not push you into oncoming traffic, and stay to the right of the yellow line. If there is only room for one vehicle to wait, hold behind the crosswalk instead.",
        trap:
          "\"A yellow gives waiting vehicles priority\" is folklore - the yellow tells oncoming drivers to stop, but it grants you nothing, and turning before they actually stop is how left-turn collisions happen.",
        excerptKey: "green-light-yield",
        sourceLabel: "Alberta Driver's Guide - Left turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_21",
        topic: "signs",
        question:
          "A sign shows a bicycle and a car sharing a single marked lane. What is it telling drivers?",
        choices: [
          "The lane is too narrow to share, so cyclists may use all of it",
          "Cyclists must ride single file in this lane",
          "Cyclists are prohibited from the lane ahead",
          "A separated bicycle lane begins ahead",
        ],
        correctIndex: 0,
        explanation:
          "This sign warns that the lane ahead is not wide enough for a car and a bicycle side by side, so a cyclist taking the middle of it is doing the right thing. Passing means changing lanes properly. Squeezing past inside the lane is what puts riders into the curb or into your door.",
        context:
          "Alberta has a small set of shared-use markings and signs: reserved bicycle lanes marked with solid white lines and a bicycle-and-diamond stencil, signs asking drivers to give cyclists space, and signs telling drivers to yield to bicycles where a turn crosses a bike lane. You may only enter a bicycle lane to turn or to reach a parking spot, and the paint usually breaks into a dashed line where that is permitted.",
        trap:
          "\"A separated bike lane begins ahead\" is the opposite message - this sign appears precisely where there is no separate space for a rider.",
        excerptKey: "sign-shared-lane-sharrow",
        sourceLabel: "Alberta Driver's Guide - Shared-use signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_22",
        topic: "rules",
        question:
          "How far before an intersection should you already be in the correct lane for your turn?",
        choices: [
          "At least 5 metres",
          "At least 15 metres",
          "At least 30 metres",
          "At least 50 metres",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen metres, about fifty feet, is the minimum. Getting into position early gives the drivers behind you time to read your signal and adjust, and it removes the temptation to dive across a lane at the last second - one of the more common causes of side-impact collisions at intersections.",
        context:
          "Fifteen metres is a floor, not a plan - Alberta expects you to be reading signs and markings far earlier than that so the lane change is unhurried. On a right turn from a two-way road, stay centred in the turn and keep within about a metre of the curb through the whole manoeuvre. On a left turn from a two-way road, approach from the lane just right of the yellow line and finish right of the yellow line on the new road.",
        trap:
          "50 metres sounds like the safer answer and is good practice, but the number the guide actually gives is 15 - and questions like this are testing the published figure.",
        excerptKey: "turning-lane-15-metres",
        sourceLabel: "Alberta Driver's Guide - Turning",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_23",
        topic: "emergencies",
        question:
          "The brake pedal sinks to the floor with no effect while you are driving. Assuming your wheels are pointing straight, what should you try?",
        choices: [
          "Switch off the ignition to stop the engine",
          "Pump the pedal rapidly and keep your speed steady",
          "Steer onto the shoulder and coast until you stop",
          "Apply the park brake gradually and shift to a lower gear",
        ],
        correctIndex: 3,
        explanation:
          "The park brake is a separate system, so it usually still works - just apply it progressively rather than yanking it, or you will lock the rear wheels. A lower gear adds engine braking. Killing the ignition is the wrong move, because you lose power steering and may lock the steering column.",
        context:
          "Vehicle failures each have their own response. Power brakes that fade when the engine stops need harder, steadier pedal pressure rather than pumping. Power steering failure still leaves you able to steer, just with much more effort. A flat tyre means easing off the accelerator and holding the wheel firmly rather than braking immediately. In every case, get to the shoulder, switch on the hazard lights, and set out reflective triangles behind the vehicle.",
        trap:
          "Switching off the ignition feels decisive but costs you power steering and may lock the steering column - it turns one failure into three.",
        excerptKey: "brake-failure",
        sourceLabel: "Alberta Driver's Guide - Vehicle mechanical problems",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_24",
        topic: "safety",
        question:
          "Your car slides off a rural highway in a blizzard and comes to rest in a safe spot. What is generally the best thing to do?",
        choices: [
          "Set off on foot toward the nearest visible building",
          "Wait outside the vehicle so passing drivers can see you",
          "Run the engine and heater continuously with the windows sealed",
          "Stay with the vehicle, running the engine sparingly with a window cracked",
        ],
        correctIndex: 3,
        explanation:
          "The car is shelter and it is far easier to spot than a person on foot in blowing snow. Run the engine only in short bursts for heat and leave a window open a crack, because a snow-blocked exhaust can push carbon monoxide into the cabin - and you cannot smell or taste it.",
        context:
          "Alberta expects winter drivers to carry supplies for exactly this: blankets and extra clothing, a shovel, sand or salt, a candle and matches in a deep can, an ice scraper and a flashlight. Alongside those, keep a first aid kit, reflective triangles and booster cables year-round. Have the battery, tyres, exhaust and heating checked before winter, since a leaking exhaust is what makes idling dangerous in the first place.",
        trap:
          "Running the engine continuously with the windows sealed is the comfortable choice and the genuinely lethal one - carbon monoxide is colourless, odourless and gives no warning.",
        excerptKey: "stranded-stay-with-vehicle",
        sourceLabel: "Alberta Driver's Guide - Ice and snow",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_25",
        topic: "signs",
        question:
          "A sign shows two black arrows on a white background, one pointing up and the other pointing down. What does it mean?",
        choices: [
          "A divided highway begins ahead",
          "A passing lane is available ahead",
          "The road ahead carries traffic in both directions",
          "The lane you are in reverses direction at certain hours",
        ],
        correctIndex: 2,
        explanation:
          "Opposing arrows warn that two-way traffic is starting, and it matters most where a one-way street or a divided section ends. Drivers who miss it can drift into a lane that now has cars coming straight at them. Passing rules change here too - the other side is no longer yours to use.",
        context:
          "Traffic direction signs are the family that tells you how the roadway itself is organised: one-way arrows, two-way traffic, divided highway begins and ends, and keep-right dividers. They matter most at transitions, where the assumptions you have been driving on for the last few kilometres stop being true. Reversible lanes are handled separately, by overhead red X and green arrow signals.",
        trap:
          "\"A divided highway begins\" is the opposite transition, and it uses its own distinct sign - mixing them up leaves you expecting a median that is not there.",
        sourceLabel: "Alberta Driver's Guide - Traffic direction signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_26",
        topic: "rightOfWay",
        question:
          "You are accelerating down an on-ramp to join a busy highway. Who has the right-of-way?",
        choices: [
          "Traffic already on the highway, so you must yield",
          "You, because merging traffic has priority",
          "Whichever vehicle is travelling faster at the merge point",
          "Neither - merging is a shared responsibility",
        ],
        correctIndex: 3,
        explanation:
          "Alberta treats merging as a joint job. You match the speed of the highway and pick your gap; drivers already there move over or adjust to open one. Neither side owns the moment, which is why slowing or stopping on the ramp is so dangerous - it breaks the one thing the other driver is expecting.",
        context:
          "The acceleration lane exists so you can reach highway speed before you join, so use its full length rather than trying to merge early. Signal, keep shoulder checking, and move into your chosen gap after you have passed the solid white line. Drivers already on the highway are expected to help by moving left when it is safe. Exiting is the mirror image - be in position early and do most of your slowing in the deceleration lane.",
        trap:
          "\"Traffic already on the highway has priority\" is a rule in some jurisdictions and feels like common sense - Alberta frames it as shared, which is why stopping at the end of a ramp is both wrong and dangerous.",
        excerptKey: "merging-shared-responsibility",
        sourceLabel: "Alberta Driver's Guide - Merging",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s3_27",
        topic: "rules",
        question:
          "Traffic on a primary highway has slowed to a crawl and the paved shoulder is completely empty. May you use it to get past?",
        choices: [
          "Yes, if you keep your speed below the posted limit",
          "No - the shoulder is not a travel or passing lane",
          "Yes, provided you signal before entering it",
          "Yes, but only where the shoulder is paved and marked",
        ],
        correctIndex: 1,
        explanation:
          "That strip is the emergency stopping lane, and it is kept clear for people with a breakdown or an urgent problem. Driving down it removes their only refuge and puts you where a stopped vehicle may be sitting just past the next rise. You may not use it to pass, or to let someone pass you.",
        context:
          "The emergency stopping lane sits between the edge of the roadway and the first travel lane on a primary highway, and it exists for urgent stops only. Parking on a highway shoulder outside an urban area is restricted to breakdowns, emergencies and situations the law specifically permits - and even then you need a clear passage for other traffic and to be visible for about 60 metres in both directions.",
        trap:
          "\"Yes, if you keep below the limit\" treats the shoulder as a slow lane, which is exactly how disabled vehicles parked on it get struck.",
        excerptKey: "emergency-stopping-lane",
        sourceLabel: "Alberta Driver's Guide - Emergency stopping lane",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_28",
        topic: "impairment",
        question:
          "Alberta's roadside sanctions programs use two blood alcohol figures. Which pair is correct?",
        choices: [
          "30 mg triggers the warn range and 50 mg the fail range",
          "50 mg triggers the warn range and 80 mg the fail range",
          "50 mg triggers the warn range and 100 mg the fail range",
          "80 mg triggers the warn range and 100 mg the fail range",
        ],
        correctIndex: 1,
        explanation:
          "Fifty milligrams per 100 millilitres of blood puts you in the warn tier, with an immediate suspension and vehicle seizure that escalate on repeat. Eighty is the fail tier, which brings a 90-day no-drive period followed by a year of suspension. Novice drivers are held to zero regardless.",
        context:
          "The warn tier starts at a first occurrence of a three-day suspension, a three-day vehicle seizure and a fine, escalating to fifteen and then thirty days with mandatory courses on repeat. The fail tier is far heavier: a 90-day period where you cannot drive at all, a further twelve-month suspension during which an ignition interlock is the only way back on the road, a 30-day vehicle seizure, a substantial fine and a required education course.",
        trap:
          "80 as the warn threshold is a common mix-up because 80 is the well-known criminal limit - in Alberta's roadside program it is where the fail tier starts, not the warn tier.",
        excerptKey: "irs-warn-threshold",
        sourceLabel: "Alberta Driver's Guide - Immediate Roadside Sanctions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_29",
        topic: "speed",
        question:
          "You turn off a numbered highway onto an unmarked rural road with no route marker and no speed signs, well outside any town. What is the maximum?",
        choices: ["50 km/h", "60 km/h", "80 km/h", "100 km/h"],
        correctIndex: 2,
        explanation:
          "The 100 km/h default belongs to provincial highways outside urban areas. An ordinary rural road - a township or range road, say - defaults to 80 instead. The clue is the absence of a highway route marker: no marker generally means it is a local road, not a provincial highway.",
        context:
          "The route marker is the practical test. A provincial highway carries a numbered marker and defaults to 100 outside urban areas, but only 80 once it runs inside a city's limits. A road identified by a name, a township number or a range number is a local road and defaults to 80 outside urban areas. Inside an urban area, anything unposted is 50. Gravel, dust and blind approaches often make 80 far too fast in practice.",
        trap:
          "100 is the number people attach to \"rural road with no signs\", but that default belongs to provincial highways - a township or range road is 80.",
        excerptKey: "speed-rural-road-80",
        sourceLabel: "Alberta Driver's Guide - Speed limit signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_30",
        topic: "safety",
        question:
          "On a two-lane highway, a car pulls out to overtake you. What is the most helpful thing you can do?",
        choices: [
          "Hold your lane and ease over to the right side of it",
          "Slow down sharply to shorten the pass",
          "Move onto the shoulder so they have more room",
          "Speed up slightly so the pass finishes sooner",
        ],
        correctIndex: 0,
        explanation:
          "Predictability is what helps. Keep your speed steady, stay in your lane, and shift a little to the right within it so the other driver gets a better view up the road. Braking hard or accelerating both wreck the calculation they made before they pulled out, and the shoulder is not a lane.",
        context:
          "The overtaking driver committed to the pass based on your speed, so the most dangerous thing you can do is change it. Alberta also treats impeding a passing vehicle as an offence carrying three demerits. On multi-lane highways the related habit is to keep left lanes free - slower traffic belongs in the right lane so the left stays available for passing.",
        trap:
          "Moving onto the shoulder feels generous, but it invites the other driver to squeeze back in early and puts you where debris and stopped vehicles are.",
        excerptKey: "being-passed-two-lane",
        sourceLabel: "Alberta Driver's Guide - Passing on a two-lane highway",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_31",
        topic: "signs",
        question:
          "A round yellow railway advance warning sign has a smaller sign with a number below it. What is that number?",
        choices: [
          "The legal limit for the crossing, lower than the road limit",
          "The distance in metres to the tracks",
          "The recommended speed for the crossing",
          "The number of tracks at the crossing",
        ],
        correctIndex: 2,
        explanation:
          "It is an advisory speed for taking the crossing, and it will always be lower than the road's posted limit, because rough rails and a raised approach can unsettle a car at speed. The count of tracks appears on the crossbuck at the crossing itself, not on the advance warning sign.",
        context:
          "Speed numbers attached to yellow warning signs are advisory throughout Alberta - the recommended speed for a curve or a crossing in ideal conditions - while numbers on white rectangles are enforceable limits. The advance warning sign is a cue to start looking and listening, and rural crossings often have an X painted on the pavement as an additional prompt.",
        trap:
          "Calling it a legal limit confuses the advisory family with the regulatory one - the giveaway is the yellow background, which never carries an enforceable speed.",
        excerptKey: "railway-advance-warning-speed",
        sourceLabel: "Alberta Driver's Guide - Railway crossings",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_32",
        topic: "licensing",
        question:
          "Which set of conditions must a Class 5-GDL driver meet to move up to a full Class 5 licence?",
        choices: [
          "Be 16 or older and hold the probationary licence for one year",
          "Hold it three years with no conditions on the final year",
          "Be 18 or older and pass a second knowledge test",
          "Be 18 or older, hold it at least two years, and have a clean final 12 months",
        ],
        correctIndex: 3,
        explanation:
          "The exit test is age 18, a minimum of two years probationary, and no suspensions or traffic convictions in the last twelve months of it - including keeping to zero alcohol and drugs. Finishing an approved driver training course can shave up to six months off the two years.",
        context:
          "The graduated program runs in three stages: Class 7 learner from age 14, held at least a year; Class 5-GDL probationary from age 16 after passing the road test, held at least two years; and full Class 5 from 18. Leaving the program lifts the zero alcohol condition, raises your demerit threshold from 8 to 15, and lets you supervise a learner or upgrade to a commercial class - none of which a probationary driver may do.",
        trap:
          "Expecting a second test is a leftover from the old advanced road test, which Alberta removed as a requirement for exiting the GDL program.",
        excerptKey: "gdl-probationary-two-years",
        sourceLabel: "Alberta.ca - Get a Class 5 driver's licence",
        sourceUrl: CLASS5,
      },
      {
        id: "ab_s3_33",
        topic: "rules",
        question:
          "Two friends want to ride in the open box of your pickup truck for a short trip across town. What does Alberta law say?",
        choices: [
          "It is allowed for short trips at low speed",
          "It is not allowed, and both you and they can be charged",
          "It is allowed if they stay seated on the floor of the box",
          "It is allowed if the tailgate is closed and latched",
        ],
        correctIndex: 1,
        explanation:
          "Riding on the outside of a vehicle, and the open box counts, is prohibited outright - there is no belt, no structure and nothing to stop a passenger being thrown out in a hard stop. Both the driver and the passenger can be charged, so \"it was their idea\" is not a defence.",
        context:
          "Alberta backs this up with a set of related prohibitions: you may not tow a person on skis, a toboggan, a bicycle or a motorcycle behind your vehicle, and nobody may ride inside a trailer while it is being towed. Everyone in the vehicle must be properly secured with a belt or an approved child seat, and the driver is accountable for every passenger under 16.",
        trap:
          "\"Short trips at low speed\" is how the rule gets rationalised in practice - the prohibition has no distance or speed exception attached to it.",
        excerptKey: "riding-in-truck-box",
        sourceLabel: "Alberta Driver's Guide - Traffic laws",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_34",
        topic: "sharing",
        question:
          "You are stopping for a pedestrian at a crosswalk on a multi-lane city street. How far back should you stop?",
        choices: [
          "Right at the crosswalk line, to make your stop obvious",
          "About ten car lengths back",
          "About two to three car lengths back",
          "Wherever you happen to be when you spot them",
        ],
        correctIndex: 2,
        explanation:
          "Stopping a couple of car lengths short means your vehicle no longer blocks the pedestrian from view for drivers in the next lane, and it gives those drivers time to react. Pulling right up to the line creates the screen that causes second-lane crosswalk collisions.",
        context:
          "Multi-lane crosswalks fail in a predictable way: one driver stops, a second driver in the adjacent lane cannot see why, and the pedestrian steps out from behind the stopped car. Alberta addresses both halves of it - stop well back so the person stays visible, and never pass a vehicle that has stopped at a crosswalk. Crosswalks exist at every intersection whether or not they are painted.",
        trap:
          "Stopping right at the line feels like the clearest signal of your intent, and it is the exact position that hides the pedestrian from the next lane over.",
        excerptKey: "pedestrian-stop-back",
        sourceLabel: "Alberta Driver's Guide - Pedestrian safety",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s3_35",
        topic: "rightOfWay",
        question:
          "On an undivided road, a school bus ahead of you switches on flashing amber lights. What do they signify?",
        choices: [
          "The bus is about to stop, so be ready to stop as well",
          "The bus is pulling back into traffic after a stop",
          "The bus is running behind schedule and may travel slowly",
          "The bus is empty and no stop is required",
        ],
        correctIndex: 0,
        explanation:
          "Amber is the warning phase - the driver is slowing to pick up or drop off, and the red lights and stop arm are seconds away. Passing at that moment is legal but is a poor bet, because the bus is about to become a full stop for everyone. Ease off and be ready instead.",
        context:
          "A school bus stop runs through two phases. Amber lights mean it is about to stop and everyone approaching from either direction on an undivided road should be preparing to stop. Red lights with the stop arm out mean stop, roughly 20 metres back, and stay stopped until the lights go off and the arm folds in. Where a median divides the road, only traffic behind the bus is bound by the red phase.",
        trap:
          "Reading amber as \"the bus is finishing up and pulling away\" gets it exactly backwards - amber comes before the stop, not after it.",
        excerptKey: "school-bus-amber-lights",
        sourceLabel: "Alberta Driver's Guide - School buses",
        sourceUrl: GUIDE,
      },
    ],
  },
];
