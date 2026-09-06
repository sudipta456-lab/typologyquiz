import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Wisconsin Motorists' Handbook, 2026,
// form BDS126, published by the WisDOT Division of Motor Vehicles, plus the
// sections of Wisconsin Statutes chapters 343 and 346 that carry rules the
// handbook states incompletely or not at all, plus three wisconsindot.gov pages
// for the test format and the graduated licence stages.
//
// Wisconsin's handbook is 60 pages and pitched at a 15-year-old, and the gaps
// matter, because WisDOT writes a 50-question knowledge test from it and expects
// numbers the book never prints.
//
// 1. The handbook gives three speed limits - 25 residential, 15 school zone,
//    35 outlying - and no others. The 55 mph rural default, the 65 mph
//    expressway and the 70 mph freeway maximum are in s. 346.57(4).
// 2. The handbook gives no parking distance at all. It says only that you may
//    not park in front of a hydrant. The 10-foot hydrant, 15-foot crosswalk,
//    4-foot driveway, 25-foot railroad and 15-foot fire-station figures are in
//    ss. 346.52 and 346.53.
// 3. The handbook says signal "about three seconds (about 100 feet)" before a
//    turn. The statutory rule, s. 346.34(1)(b), is a flat 100 feet.
// 4. The 45-second dead-red rule for motorcycles and bicycles, s. 346.37(1)(c)4,
//    is nowhere in the handbook.
// 5. The move-over law is summarised in one sentence in the handbook. Its actual
//    terms, including the 12-foot trigger and the 2025 extension to ordinary
//    disabled vehicles, are in s. 346.072.
//
// One genuine conflict is flagged where it arises. The handbook lists headlights
// with the windshield wipers as RECOMMENDED, not required; several other states
// make that link mandatory and Wisconsin's own lighting statute sits in chapter
// 347, which was not among the chapters read for this bank. Every question here
// is built on the two triggers the handbook does state as compulsory, so both
// readings give the same answer. See the research note.
//
// Questions are original. Explanations, context notes and trap notes are written
// from scratch; the deep link is there so the learner reads WisDOT's own
// authoritative wording on the government's site.
const HB = "https://wisconsindot.gov/Documents/dmv/shared/bds126-motorists-handbook.pdf";
/** Printed page number to a PDF page anchor - the book's page 1 is PDF page 5. */
const hb = (page: number) => `${HB}#page=${page + 4}`;
const stat = (s: string) => `https://docs.legis.wisconsin.gov/document/statutes/${s}`;
const KNOWLEDGE =
  "https://wisconsindot.gov/Pages/dmv/teen-driver/teen-hw-aply/knowledge.aspx";

export const wisconsinSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Wisconsin Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Wisconsin: what the shapes and colours mean, who goes first, and the handful of numbers WisDOT's 50-question knowledge test expects you to know cold.",
    questions: [
      {
        id: "wi_s1_01",
        topic: "signs",
        question:
          "A red eight-sided sign faces you at an intersection. What does Wisconsin require?",
        choices: [
          "Slow to a crawl and roll through if nothing is coming",
          "Stop only when another vehicle is approaching",
          "Come to a complete stop and wait until your path is clear",
          "Yield to the wider road, then continue",
        ],
        correctIndex: 2,
        explanation:
          "The octagon is reserved for STOP and nothing else. Wisconsin's handbook is blunt about it: the wheels stop turning, and you stay stopped until the way ahead is genuinely clear.",
        context:
          "Wisconsin teaches signs by shape and colour first, because the shape is readable in fog, glare or a language you do not read. Eight sides means stop, a downward triangle means yield, a yellow diamond warns of something ahead, and orange means people are working on the road. Learning the system beats memorising pictures, since the separate 15-question signs test draws on signs the handbook never illustrates.",
        trap: "A rolling stop is not a stop. An empty cross street changes nothing about the requirement.",
        excerptKey: "signs-stop",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.B Regulatory",
        sourceUrl: hb(25),
      },
      {
        id: "wi_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Wisconsin and want to turn right. What does the handbook allow?",
        choices: [
          "Stop first, then turn if it is safe and no sign prohibits it",
          "Turn without stopping if the way is clear",
          "Turn only when a green arrow appears",
          "Turn only where a sign expressly permits it",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is Wisconsin's default, not a special permission. Two conditions ride with it: you must actually stop, and any sign forbidding the turn overrides the default.",
        context:
          "Wisconsin treats red as stop and stay stopped, with two movements carved out. Right on red is allowed after a full stop unless a sign says otherwise, and a left on red is allowed from a one-way street onto another one-way street on the same terms. Having stopped, you still yield to everyone lawfully using the intersection, pedestrians included.",
        trap: "\"Clear enough to go\" is not the test. If you never stopped, the turn is unlawful even on an empty street at 3 a.m.",
        excerptKey: "signal-steady-red",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(32),
      },
      {
        id: "wi_s1_03",
        topic: "rightOfWay",
        question:
          "Two drivers reach a four-way stop at exactly the same moment, at right angles. Who goes first?",
        choices: [
          "Whoever signals first",
          "The driver going straight, ahead of any turning driver",
          "The driver on the left, who is further from the crossing traffic",
          "The driver on the right",
        ],
        correctIndex: 3,
        explanation:
          "Wisconsin's tie-breaker is the driver on the right. It only comes into play when arrival really is simultaneous, because whoever clearly got there first goes first.",
        context:
          "The handbook sets right of way out as a list of people you give way to, and the intersection entries head it: the driver already in the intersection, then the driver who arrived first at the four-way stop, then the driver on your right when you arrive together. Underneath it sits a warning the handbook repeats - do not assume the vehicle on the right always goes, because every situation is different.",
        trap: "Going straight does not outrank turning at a four-way stop. Order of arrival decides it and the right-hand rule only breaks a tie.",
        excerptKey: "row-tie-right",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.A Right-Of-Way",
        sourceUrl: hb(9),
        commonlyMissed: true,
      },
      {
        id: "wi_s1_04",
        topic: "rules",
        question: "What following distance does the Wisconsin handbook teach?",
        choices: [
          "Four seconds",
          "Two seconds",
          "Three seconds",
          "One car length for every 10 mph",
        ],
        correctIndex: 0,
        explanation:
          "Wisconsin teaches a four-second rule, not the three seconds several neighbouring states use. You pick a fixed object ahead, start counting when the car in front passes it, and you should still be counting when you reach it.",
        context:
          "The handbook names it the Four Second Following Distance Rule and gives you the words to count with - one thousand one, one thousand two, up to one thousand four. Then it tells you to add a second for every adverse condition: heavier traffic, rain, snow, ice. Behind a snowplough or a large truck the gap you need is larger again.",
        trap: "Three seconds is the answer in a lot of other states' books. Wisconsin's own figure is four.",
        excerptKey: "following-four-second",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.B Understanding Vehicle Speed",
        sourceUrl: hb(10),
      },
      {
        id: "wi_s1_05",
        topic: "speed",
        question:
          "A Wisconsin residential street carries no speed limit sign at all. What is the limit?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 1,
        explanation:
          "Unless a sign says otherwise, a residential area in Wisconsin is 25 mph. The absence of a sign is not the absence of a limit.",
        context:
          "Wisconsin's handbook prints only three speed figures: 25 in residential areas, 15 in a school zone when children are present, and 35 in the outlying parts of a city or village where nothing is posted. The rest of the ladder lives in the statute, which sets 55 mph as the fall-back where no other limit applies and no sign is posted.",
        trap: "A missing sign does not make the road a guess. Wisconsin fills the silence with a statutory number, and you are held to it.",
        excerptKey: "speed-residential-25",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.B Understanding Vehicle Speed",
        sourceUrl: hb(10),
      },
      {
        id: "wi_s1_06",
        topic: "signs",
        question: "A downward-pointing red and white triangle faces you. What must you do?",
        choices: [
          "Come to a full stop, then proceed",
          "Keep your speed, since the sign is only advisory",
          "Give way to other vehicles, slowing or stopping if that is what it takes",
          "Sound your horn before entering",
        ],
        correctIndex: 2,
        explanation:
          "A yield sign means other traffic goes first. You do not have to stop automatically, but if there is no safe gap then stopping is exactly what yielding requires.",
        context:
          "The triangle is Wisconsin's only three-sided sign, so its shape alone identifies it. Yield is the lighter cousin of stop: no automatic halt, but no right to push in either. The statute puts it plainly - you give way to vehicles already in the intersection or approaching closely enough to be a hazard, and you reduce speed or stop if that is what it takes.",
        trap: "Yield is not \"stop\", but it is also not \"carry on regardless\". No gap means you wait for one.",
        excerptKey: "signs-yield",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.B Regulatory",
        sourceUrl: hb(25),
      },
      {
        id: "wi_s1_07",
        topic: "sharing",
        question:
          "A school bus ahead of you stops on a two-lane road with its red lights flashing. How far back must you stop?",
        choices: [
          "10 feet",
          "50 feet",
          "At least 30 feet",
          "At least 20 feet",
        ],
        correctIndex: 3,
        explanation:
          "Wisconsin's figure is 20 feet, and it applies from either direction - 20 feet behind if you are following the bus, 20 feet in front if you are meeting it.",
        context:
          "The stop lasts until the bus moves off or the red lights go out, and nothing shorter counts. There is one escape and only one: a divided highway with a barrier between the opposing lanes, where a driver on the far side keeps going. Lane count on its own does not release you, so on an undivided four-lane road every direction stops.",
        trap: "Twenty feet is the minimum distance, not the whole rule. Stopping correctly and then creeping forward before the lights go out is still a violation.",
        excerptKey: "schoolbus-20-feet",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 10.C School Buses",
        sourceUrl: hb(51),
        commonlyMissed: true,
      },
      {
        id: "wi_s1_08",
        topic: "impairment",
        question:
          "You are 17 and hold a Wisconsin instruction permit. How much alcohol may you have in your system while driving?",
        choices: [
          "None at all",
          "Up to 0.02",
          "Up to 0.05",
          "Up to 0.08, the same as an adult",
        ],
        correctIndex: 0,
        explanation:
          "Wisconsin calls it absolute sobriety. Under 21, the permitted concentration is zero, and any detectable amount is a violation whether or not your driving was affected.",
        context:
          "The handbook states the under-21 figure as 0.00 percent. The statute frames it as more than 0.0 but not more than 0.08, which is the offence range for an underage driver - above 0.08 you are prosecuted as any other driver would be. A permit also carries its own absolute sobriety condition, so there are two independent reasons the answer is zero.",
        trap: "The 0.08 number everyone has heard is the adult threshold. It has nothing to do with a 17-year-old.",
        excerptKey: "under-21-zero",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 9.A Alcohol, Drugs and Driving",
        sourceUrl: hb(49),
        commonlyMissed: true,
      },
      {
        id: "wi_s1_09",
        topic: "signals",
        question: "A traffic light at a busy intersection has gone completely dark. What do you do?",
        choices: [
          "Treat the intersection as if it were controlled by stop signs",
          "Treat it as a green light for the wider road",
          "Proceed without stopping, since no signal is showing",
          "Wait at the line until the signal comes back on",
        ],
        correctIndex: 0,
        explanation:
          "Wisconsin's rule for a dead or malfunctioning signal is to proceed as though the signal were a stop sign. Every approach stops and then takes turns.",
        context:
          "A dark signal is not a licence to guess. The handbook tells you to treat it as a stop sign, which converts the intersection into an all-way stop where order of arrival settles it and the driver on the right breaks the tie. If a police officer is directing traffic there, the officer's directions outrank everything, including the signal and the signs.",
        trap: "There is no \"bigger road wins\" rule in Wisconsin. Nothing about a dark signal gives one approach priority over another.",
        excerptKey: "signal-power-out",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(32),
      },
      {
        id: "wi_s1_10",
        topic: "safety",
        question:
          "Wisconsin requires your low beams to be on from a set point in the evening. When is that?",
        choices: [
          "At sunset",
          "One hour after sunset",
          "A half hour after sunset until a half hour before sunrise",
          "Only once it is fully dark",
        ],
        correctIndex: 2,
        explanation:
          "The window runs from a half hour past sunset to a half hour before sunrise. Wisconsin also requires headlights any time you cannot see a vehicle or person 500 feet away, whatever the clock says.",
        context:
          "The handbook gives you two compulsory triggers and one recommendation. The compulsory ones are the half-hour clock rule and the 500-foot visibility rule. Separately it recommends headlights whenever the wipers are running or it is rainy, snowy or foggy - and since the lights cost you nothing, the sensible habit is wipers on, lights on.",
        trap: "Sunset is not the trigger. The legal window opens a half hour later, and dusk is exactly when a car without lights disappears.",
        excerptKey: "headlights-required",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.K Communication",
        sourceUrl: hb(21),
      },
      {
        id: "wi_s1_11",
        topic: "parking",
        question:
          "How close to a fire hydrant may you park in Wisconsin, where no sign says otherwise?",
        choices: [
          "No closer than 5 feet",
          "No closer than 25 feet",
          "No closer than 15 feet",
          "No closer than 10 feet",
        ],
        correctIndex: 3,
        explanation:
          "Wisconsin's hydrant distance is 10 feet. A posted sign can demand more, but 10 feet is the statutory floor.",
        context:
          "The handbook never prints a single parking distance - it tells you only that you may not park where the curb is painted yellow or in front of a hydrant. The numbers all sit in the statute, and Wisconsin's are its own: 10 feet from a hydrant, 15 feet from the near edge of a crosswalk, 4 feet from a driveway or alley entrance, and 25 feet from the nearest rail at a railroad crossing.",
        trap: "Fifteen feet is the hydrant figure in a lot of states, and it is Wisconsin's crosswalk figure. Do not swap the two.",
        excerptKey: "st-park-hydrant-10",
        sourceLabel: "Wisconsin Statutes Section 346.53(3)",
        sourceUrl: stat("346.53"),
        commonlyMissed: true,
      },
      {
        id: "wi_s1_12",
        topic: "licensing",
        question:
          "How many questions are on Wisconsin's Class D knowledge test, and how many must you get right?",
        choices: [
          "25 questions, 20 correct",
          "40 questions, 32 correct",
          "50 questions, 40 correct",
          "50 questions, 45 correct",
        ],
        correctIndex: 2,
        explanation:
          "Fifty questions, forty correct - 80 percent. That is the rules test. The highway signs test is separate, and is 15 questions with 12 correct to pass.",
        context:
          "Wisconsin runs two written tests and you must clear both. Neither needs an appointment; they are walk-in on a touch screen at DMV customer service centers and the knowledge test takes about 45 minutes. Applicants aged 15 to 17 may take the knowledge test at home online through KnowTo Drive instead, for a $10 fee per attempt.",
        trap: "The 15-question signs test is a separate paper, not a section of the 50. Failing one does not cancel the other.",
        excerptKey: "test-knowledge-50",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 1.C Knowledge Test",
        sourceUrl: hb(1),
      },
      {
        id: "wi_s1_13",
        topic: "signs",
        question: "An orange diamond sign appears beside the road. What is it telling you?",
        choices: [
          "A school zone is ahead",
          "A rest area is coming up",
          "The road ahead is closed",
          "There is a work zone with people on or near the road",
        ],
        correctIndex: 3,
        explanation:
          "Orange is Wisconsin's work-zone colour. It means construction, maintenance or emergency workers may be on or beside the road, and it is your signal to slow down.",
        context:
          "Two things make work zones expensive as well as dangerous in Wisconsin. Traffic fines double in them, and the cellphone rule tightens - you may only use a phone in a construction zone to report an emergency. Follow a flagger's directions even where they contradict the signs or the signal.",
        trap: "School zones are yellow or fluorescent green, not orange. Orange always means work zone.",
        excerptKey: "workzone-fines-double",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.C Construction",
        sourceUrl: hb(26),
      },
      {
        id: "wi_s1_14",
        topic: "rules",
        question: "What do two solid yellow lines down the middle of the road mean?",
        choices: [
          "Passing is allowed from either side when it is clear",
          "Passing is allowed only from the right-hand lane",
          "Neither direction of travel may pass",
          "The road ahead is one-way",
        ],
        correctIndex: 2,
        explanation:
          "A double solid yellow line means no lane of travel may pass. Yellow separates opposing directions; solid on your side means the pass is closed to you.",
        context:
          "Wisconsin does allow two crossings over that line: turning into a driveway when it is safe, and passing a vehicle travelling at less than half the speed limit - though not farm equipment. A dashed yellow line means you may pass when it is safe, and where one side is dashed and the other solid, only the dashed side may pass.",
        trap: "The two narrow exceptions are about crossing the line, not about a general right to pass. On a double solid, passing an ordinary slow driver is still prohibited.",
        excerptKey: "lines-double-yellow",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.B Types of Line Markings",
        sourceUrl: hb(35),
      },
      {
        id: "wi_s1_15",
        topic: "sharing",
        question: "How much room must you leave when passing a bicycle in Wisconsin?",
        choices: [
          "At least 2 feet",
          "A full lane",
          "At least 4 feet",
          "At least 3 feet",
        ],
        correctIndex: 3,
        explanation:
          "Three feet is Wisconsin's legal minimum, and you have to hold that clearance until you are safely past - not just at the moment you draw level.",
        context:
          "The handbook goes further than the number. It tells you not to share a lane with a bicycle at all, because a rider can move sideways quickly and without warning, and to wait for oncoming traffic to clear before you pass. Bicyclists in Wisconsin are entitled to use the whole traffic lane.",
        trap: "Three feet is a floor, not a target. If the lane is too narrow to give it, the answer is to wait, not to squeeze.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 10.E Bicycles",
        sourceUrl: hb(52),
      },
      {
        id: "wi_s1_16",
        topic: "emergencies",
        question:
          "An ambulance is coming up behind you with lights and siren on. What does Wisconsin require?",
        choices: [
          "Speed up to stay ahead of it until the next junction",
          "Stop where you are, in your lane",
          "Pull as far right as you can, clear of any intersection, and stop",
          "Move left so it can pass on the right",
        ],
        correctIndex: 2,
        explanation:
          "You yield, move to the right edge of the road, and stop - and you do it clear of an intersection, so the emergency vehicle has a clean path through.",
        context:
          "The statute is specific about position: as near as possible and parallel to the right curb or the right-hand edge of the shoulder, then stopped until the emergency vehicle has passed. Stopping in the middle of an intersection blocks exactly the space the ambulance needs. A separate rule covers an emergency vehicle already stopped at the roadside, where you move over or slow down instead.",
        trap: "Stopping dead in your lane feels obedient and is not what the law asks. The point is to clear the road, not to freeze on it.",
        excerptKey: "emergency-pull-over",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 10.B Emergency Vehicles",
        sourceUrl: hb(51),
      },
      {
        id: "wi_s1_17",
        topic: "safety",
        question: "Who has to wear a seat belt in a car in Wisconsin?",
        choices: [
          "Only the driver and front-seat passengers",
          "Anyone not covered by an air bag",
          "Only occupants under 18",
          "Everyone in the vehicle, at any age",
        ],
        correctIndex: 3,
        explanation:
          "Wisconsin law puts the belt on you and your passengers at any age, in any seat. Air bags do not replace it.",
        context:
          "The handbook adds the detail examiners like: the lap belt sits snugly across your hip bones just under your stomach, the shoulder belt across your chest, never under the arm and never slack. Children ride in a child safety seat until age four and a booster until age eight, subject to the seat's own height and weight limits.",
        trap: "An air bag is designed to work with a belt, not instead of one. \"The car has air bags\" is not an exemption.",
        excerptKey: "seatbelt-all-ages",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 12.D Seat Belts",
        sourceUrl: hb(54),
      },
      {
        id: "wi_s1_18",
        topic: "rightOfWay",
        question:
          "You are approaching a roundabout in Wisconsin. Who do you give way to before entering?",
        choices: [
          "Traffic on your left that is already in the roundabout",
          "Traffic on your right waiting to enter",
          "Nobody, provided you signal",
          "Whichever vehicle is largest",
        ],
        correctIndex: 0,
        explanation:
          "Wisconsin roundabouts turn counterclockwise, so circulating traffic arrives from your left. You yield to it, and to pedestrians and bicycles at the crossing, before you enter.",
        context:
          "The handbook's sequence is slow down, yield to pedestrians and bicycles, yield to traffic on your left already in the roundabout, yield to semitrucks, then enter on a safe gap. Once inside, keep your speed low, stay in your lane, and signal right as you reach your exit. If the roundabout is empty you do not have to wait at all.",
        trap: "The \"driver on the right\" tie-breaker belongs to four-way stops. Inside a roundabout, circulating traffic is on your left and it has priority.",
        excerptKey: "roundabout-steps",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 6.A Roundabouts",
        sourceUrl: hb(39),
        commonlyMissed: true,
      },
      {
        id: "wi_s1_19",
        topic: "rules",
        question: "Where does Wisconsin tell you to drive if you are moving slower than most traffic?",
        choices: [
          "In the centre lane",
          "On the paved shoulder",
          "In the left lane, out of the way of merging traffic",
          "In the far-right lane",
        ],
        correctIndex: 3,
        explanation:
          "Slower traffic keeps right. The far-left lane of a multi-lane road is there for overtaking, and sitting in it while slower than the flow backs everyone up behind you.",
        context:
          "Wisconsin treats driving too slowly as a genuine hazard, not merely an annoyance, and says so: going too slow can cause vehicles to stack up behind you and cause a crash, and either extreme can earn you a ticket. If you need to stop to drop someone off, find a safe place out of traffic and pull over so others can pass on the left.",
        trap: "The shoulder is not a slow lane. Wisconsin lets you use a paved shoulder to go around a stopped or left-turning vehicle, and that is all.",
        excerptKey: "speed-slow-lane",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.B Understanding Vehicle Speed",
        sourceUrl: hb(10),
      },
      {
        id: "wi_s1_20",
        topic: "licensing",
        question:
          "How long must a Wisconsin driver under 18 hold an instruction permit before a probationary licence?",
        choices: ["30 days", "Three months", "At least six months", "A full year"],
        correctIndex: 2,
        explanation:
          "Six months minimum, and you must also have turned 16 and completed driver education. Turning 16 early does not shorten the six months.",
        context:
          "Alongside the six months sits the supervised driving requirement: 50 hours in total, of which at least 10 must be after dark, verified by your sponsor. You also need six months clear of traffic tickets before you apply. A driver aged 18 or over holds the permit only seven days.",
        trap: "The six months and the 50 hours are separate requirements. Finishing the hours early does not release you from the waiting period.",
        excerptKey: "prob-six-months",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 2.C Probationary License",
        sourceUrl: hb(6),
      },
      {
        id: "wi_s1_21",
        topic: "signals",
        question: "A steady yellow light comes on as you approach the intersection. What does it mean?",
        choices: [
          "The light is about to turn red, so stop before entering if you safely can",
          "Speed up to clear the intersection before the red",
          "Yield to cross traffic and continue",
          "The signal is faulty and you should treat it as a stop sign",
        ],
        correctIndex: 0,
        explanation:
          "Yellow is a warning that red is next. You slow and stop before entering the intersection - unless you are already in it, in which case you keep going and clear it.",
        context:
          "The statute puts the limit on that duty in plain terms: you stop unless you are so close that stopping cannot be done safely. That is a judgement about distance and speed, not about whether you feel like waiting. A flashing yellow is a different signal entirely - it means slow down, check for cross traffic and proceed with caution.",
        trap: "Treating yellow as an invitation to accelerate is how people arrive in the intersection on red. The handbook's instruction is to slow, not to hurry.",
        excerptKey: "signal-steady-yellow",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(33),
      },
      {
        id: "wi_s1_22",
        topic: "safety",
        question: "How far ahead does Wisconsin tell you to be looking as you drive?",
        choices: [
          "About two car lengths",
          "To the end of your headlight beam",
          "10 to 15 seconds ahead",
          "About 100 feet",
        ],
        correctIndex: 2,
        explanation:
          "Wisconsin measures the look-ahead in time, not distance: 10 to 15 seconds. If you cannot see that far, the handbook tells you to slow down until you can.",
        context:
          "Measuring in seconds is what makes the rule work at every speed, since 15 seconds is a much longer stretch of road at 65 mph than at 25. It pairs with the four-second following rule and with the habit of checking your rearview mirror every 6 to 8 seconds. Together they keep space in front of you and tell you who is crowding you from behind.",
        trap: "A fixed distance answer sounds precise and is wrong at every speed but one. Wisconsin deliberately uses time.",
        excerptKey: "sight-10-15",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.E Sight Distance Rule",
        sourceUrl: hb(12),
      },
      {
        id: "wi_s1_23",
        topic: "parking",
        question:
          "You are parking on a level street. What does the Wisconsin handbook tell you to do once you have stopped?",
        choices: [
          "Leave it in neutral so it can be pushed if necessary",
          "Set the parking brake only if the street has any slope at all",
          "Turn the wheels toward the curb and leave the brake off",
          "Put it in park, or in gear if it is a manual, and set the parking brake",
        ],
        correctIndex: 3,
        explanation:
          "On the level the routine is park - or in gear on a manual - plus the parking brake. Both, every time, not one or the other.",
        context:
          "On a hill the wheels get involved too. Facing uphill against a curb you turn them away from the curb, to the left; facing uphill with no curb you turn them right, so a rolling car heads for the verge rather than the road; facing downhill you turn them right in either case. The emergency brake goes on in all of them.",
        trap: "Neutral is the one gear position that leaves nothing holding the car. The handbook also warns against coasting in neutral while driving.",
        excerptKey: "parking-level",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.J Parking",
        sourceUrl: hb(18),
      },
      {
        id: "wi_s1_24",
        topic: "sharing",
        question:
          "You are following a snowplough on a highway posted at 55 mph, its lights flashing. How far back must you stay?",
        choices: ["75 feet", "100 feet", "200 feet", "500 feet"],
        correctIndex: 2,
        explanation:
          "Two hundred feet on any road posted above 35 mph. Below that the figure drops to 75 feet, and if the plough is stopped at an intersection you stop 20 feet back.",
        context:
          "The handbook states the 200-foot figure directly, in the winter section, for ploughs showing flashing red, amber or green lights. The reason is visibility and spray - behind a working plough you are driving into a cloud of snow and salt with a heavy blade you cannot see past. The rule does not apply while you are actually overtaking.",
        trap: "The 200 feet is not the same as the four-second rule. It is a fixed statutory distance for a specific vehicle, and it is much longer than the gap most drivers leave.",
        excerptKey: "winter-snowplow-200",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 7.C Winter",
        sourceUrl: hb(45),
        commonlyMissed: true,
      },
      {
        id: "wi_s1_25",
        topic: "impairment",
        question:
          "A police officer asks you to take a prohibited alcohol concentration test in Wisconsin. What happens if you refuse?",
        choices: [
          "Nothing, as long as you agree to a roadside test instead",
          "The officer must obtain a warrant first, and the refusal is not itself an offence",
          "You are fined but keep your licence",
          "You are arrested for violating the Implied Consent Law and lose your licence for at least a year",
        ],
        correctIndex: 3,
        explanation:
          "Refusal is its own violation in Wisconsin. The officer must arrest you for breaching the Implied Consent Law, and the licence loss runs at least a year on top of anything else.",
        context:
          "Implied consent is the bargain attached to a Wisconsin driving privilege: by driving, you have already agreed to the test. A PAC test measures alcohol by breathalyser or blood sample. Refusing does not make the case go away - it adds a separate penalty to whatever the underlying evidence supports.",
        trap: "Refusing is not a way to avoid evidence. It is treated as a violation in its own right, with a licence revocation attached.",
        excerptKey: "implied-consent-refusal",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 9.A Alcohol, Drugs and Driving",
        sourceUrl: hb(49),
      },
      {
        id: "wi_s1_26",
        topic: "signs",
        question:
          "A yellow diamond sign shows a black symbol you do not recognise. What do you know about it anyway?",
        choices: [
          "It is a warning about something on the road ahead",
          "It is a regulation you must obey exactly",
          "It gives directions to a service",
          "It marks a work zone",
        ],
        correctIndex: 0,
        explanation:
          "Yellow with black on a diamond is Wisconsin's warning family. You may not know the specific hazard, but you know to slow down and look for it.",
        context:
          "Wisconsin groups its signs by colour and shape so an unfamiliar one still tells you something. Yellow diamonds warn, white rectangles and special shapes regulate, orange means work zone, green shows destinations and distance, blue points to services, and brown marks parks and points of interest. The separate signs test rewards knowing the families rather than memorising every picture.",
        trap: "Warning signs are not optional advice. Failing to slow for a warned hazard is still driving too fast for conditions.",
        excerptKey: "signs-warning-yellow",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.A Warning",
        sourceUrl: hb(22),
      },
      {
        id: "wi_s1_27",
        topic: "rules",
        question: "Where does Wisconsin tell you to stop for a crosswalk marked across the road?",
        choices: [
          "With your front wheels just before the solid white line",
          "With your front bumper over the line so you can see",
          "Anywhere within the crosswalk markings",
          "Level with the far edge of the crosswalk",
        ],
        correctIndex: 0,
        explanation:
          "Your front wheels stop just short of the line. Stopping on the crosswalk pushes pedestrians out around your car into the traffic lane.",
        context:
          "Crosswalks are usually at intersections but Wisconsin also puts them mid-block, so the marking rather than the corner is what you watch for. Where a crossing is not controlled by a signal or an officer, the statute requires you to yield to a pedestrian in a marked or unmarked crosswalk - the paint helps you see them, but its absence does not remove the duty.",
        trap: "Creeping forward for a better view is exactly what the rule forbids, and it is the manoeuvre that puts a car across the space a pedestrian is walking through.",
        excerptKey: "crosswalk-stop-line",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.B Types of Line Markings",
        sourceUrl: hb(34),
      },
      {
        id: "wi_s1_28",
        topic: "emergencies",
        question:
          "You have been in a crash on a Wisconsin road and someone is injured. What must you do?",
        choices: [
          "Move the vehicles off the road first, then call for help",
          "Exchange details and leave if the other driver agrees",
          "Call 911 and stay at the scene",
          "Report it to the DMV within ten days and continue on your way",
        ],
        correctIndex: 2,
        explanation:
          "With an injury, you call 911 and you stay. Leaving the scene of a crash where someone is hurt or killed is a crime in Wisconsin.",
        context:
          "The handbook separates three cases. Injury or death: call 911, leave the vehicles where they are, stay put. No injury but the vehicle cannot move: call 911 and keep clear of traffic. No injury and the vehicle can move: get it off the road, then exchange licence, vehicle and insurance details and write down what happened. Police must be told of any crash with an injury, $1,000 or more of property damage, or $200 of government property damage.",
        trap: "Clearing the road is the right instinct in a fender-bender and the wrong one when someone is hurt. With an injury the scene stays as it is.",
        excerptKey: "crash-injured",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 8.B Crashes",
        sourceUrl: hb(47),
      },
      {
        id: "wi_s1_29",
        topic: "speed",
        question:
          "You are passing a school in Wisconsin during the morning drop-off, with children about. What is the speed limit?",
        choices: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctIndex: 1,
        explanation:
          "Fifteen miles per hour is Wisconsin's school-zone figure when children are present. That is well below the 20 or 25 several neighbouring states use.",
        context:
          "The statute attaches the 15 mph limit to passing a schoolhouse when children are going to or from school or playing in the sidewalk area, and to a marked school crossing when a child or a crossing guard is there. A posted school speed limit sign carries the same instruction in a different form: when children are visible you may not exceed the number on the sign.",
        trap: "Twenty-five is the residential figure and it is easy to reach for. In a school zone with children about, Wisconsin's number is 15.",
        excerptKey: "speed-school-15",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.B Understanding Vehicle Speed",
        sourceUrl: hb(10),
      },
      {
        id: "wi_s1_30",
        topic: "licensing",
        question:
          "You hold a Wisconsin instruction permit. When may you use your phone while driving?",
        choices: [
          "Hands-free, for any purpose",
          "For navigation only",
          "Only to report an emergency",
          "Any time you are stopped at a light",
        ],
        correctIndex: 2,
        explanation:
          "Permit and probationary licence holders in Wisconsin may use a phone for one thing: reporting an emergency. Hands-free does not open it up.",
        context:
          "The restriction is written into the statute and repeated twice in the handbook, in the probationary licence section and again under distracted driving. It is stricter than the rule for full licence holders, who are told to avoid phone use and to prefer hands-free. Everyone, whatever their licence, is limited to emergency calls inside a construction zone.",
        trap: "Hands-free is the exemption in a lot of states. In Wisconsin it does nothing for a permit holder - the ban is on using the phone at all.",
        excerptKey: "phone-permit",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 9.B Distracted Driving",
        sourceUrl: hb(49),
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Turning, passing, lane markings, right of way and the everyday rules the Wisconsin handbook spends most of its pages on. Nothing exotic - just the material the 50-question test keeps coming back to.",
    questions: [
      {
        id: "wi_s2_01",
        topic: "rules",
        question:
          "You are turning left from a four-lane road into the left-hand lane of a two-lane street. Where should you finish?",
        choices: [
          "In whichever lane is clear",
          "Across both lanes, straightening as you go",
          "In the right lane, then change left afterwards",
          "In the lane you started the turn from - left lane in, left lane out",
        ],
        correctIndex: 3,
        explanation:
          "Wisconsin's rule for multiple turn lanes is that you stay in your own lane through the turn. Start in the left-most lane and you finish in the left-most lane.",
        context:
          "The handbook adds the mirror rule for the right side: to turn right off a four-lane road you turn from the lane nearest the right curb. Either way, you do not change lanes while turning and you do not cross the centre line. Look ahead before you commit so you know which lane you need on the far side.",
        trap: "Swinging wide into the next lane during the turn is the most common way two turning cars meet each other.",
        excerptKey: "turn-multiple-lanes",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.G Turning",
        sourceUrl: hb(16),
      },
      {
        id: "wi_s2_02",
        topic: "rules",
        question:
          "How far before a turn does Wisconsin statute require your signal to be running?",
        choices: [
          "50 feet",
          "As long as it takes another driver to notice",
          "200 feet",
          "Not less than the last 100 feet before turning",
        ],
        correctIndex: 3,
        explanation:
          "The statute sets a continuous signal for at least the last 100 feet. The handbook gives the same rule in the form a learner can use behind the wheel: about three seconds before the turn.",
        context:
          "The duty to signal is triggered by other traffic that might be affected by the movement, and a U-turn uses the left-turn signal. If you are turning immediately after an intersection rather than at it, the handbook tells you to wait and start signalling once you have crossed, so nobody reads it as a signal for the intersection itself.",
        trap: "Flicking the stalk as you begin to turn is not signalling. The 100 feet is there so drivers behind you can react before you slow.",
        excerptKey: "st-signal-100-feet",
        sourceLabel: "Wisconsin Statutes Section 346.34(1)(b)",
        sourceUrl: stat("346.34"),
      },
      {
        id: "wi_s2_03",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light and an oncoming car is coming straight through. Who goes first?",
        choices: [
          "The oncoming car",
          "You, because a green light permits the turn",
          "Whoever entered the intersection first",
          "You, if you have already moved into the intersection",
        ],
        correctIndex: 0,
        explanation:
          "A steady green permits the turn but grants nothing. Oncoming traffic keeps the right of way, and you wait for a genuine gap.",
        context:
          "Wisconsin's statute states it as a duty on the turning driver: within an intersection, a driver intending to turn left or make a U-turn yields to any vehicle approaching from the opposite direction. A green arrow is the version that does protect you, because it is only shown when the conflicting movements are held. A flashing yellow arrow, by contrast, is permission to turn after yielding.",
        trap: "Being partway into the intersection does not transfer the right of way. Waiting there is normal; turning across a car that is already coming is not.",
        excerptKey: "signal-green-left",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(33),
      },
      {
        id: "wi_s2_04",
        topic: "rules",
        question:
          "You are waiting in the intersection to turn left. What does Wisconsin tell you to do with the steering wheel?",
        choices: [
          "Turn it left, ready to go",
          "It makes no difference while you are stopped",
          "Turn it slightly right to hold your position",
          "Keep it straight until you actually turn",
        ],
        correctIndex: 3,
        explanation:
          "Wheels straight. If someone hits you from behind with the wheel already turned, your car is pushed into the oncoming lane instead of straight ahead.",
        context:
          "The handbook walks the whole left turn: check mirrors, keep close to the centre line, watch for pedestrians crossing on your left, ease into the intersection and wait about halfway in, leaving room for an oncoming driver to turn in front of you. Then turn when it is safe.",
        trap: "Pre-turning the wheel feels efficient and converts a rear-end shunt into a head-on collision.",
        excerptKey: "turn-no-lane-change",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.G Turning",
        sourceUrl: hb(14),
      },
      {
        id: "wi_s2_05",
        topic: "rules",
        question: "When may you use a paved shoulder to get around another vehicle in Wisconsin?",
        choices: [
          "Whenever traffic ahead is moving slowly",
          "Never, under any circumstances",
          "Any time the shoulder is wide enough",
          "Only if the vehicle is stopped or making a left turn",
        ],
        correctIndex: 3,
        explanation:
          "Wisconsin allows the shoulder for exactly two situations: the vehicle ahead is stopped, or it is making a left turn. Slow traffic is not one of them.",
        context:
          "Passing generally happens on the left, one vehicle at a time, and you return to your lane rather than living in the passing lane. Passing on the right is discouraged because the driver you are passing may not be able to see you. Some Wisconsin highways do open the shoulder as a flex lane at busy times, but only where signage and lane-control signals say so.",
        trap: "A wide, empty shoulder is not an invitation. Outside the two named cases it is not a travel lane.",
        excerptKey: "pass-shoulder",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.H Passing",
        sourceUrl: hb(17),
      },
      {
        id: "wi_s2_06",
        topic: "rules",
        question:
          "You have overtaken a car on a two-lane road. When is it safe to move back in front of it?",
        choices: [
          "As soon as you have passed its front bumper",
          "After counting three seconds",
          "Once you can see both of its headlights in your rearview mirror",
          "Once the driver flashes their lights at you",
        ],
        correctIndex: 2,
        explanation:
          "The handbook gives you a test you can actually see: both headlights of the car you passed, visible in your rearview mirror. That means you have cleared it with room to spare.",
        context:
          "The rest of the passing rules are about the space you need before you start. Do not begin unless there is room in front of the vehicle you are passing, pass one vehicle at a time, and never exceed the speed limit to complete a pass. Other drivers are under no obligation to make room for you.",
        trap: "Clearing the bumper is not clearing the car. Cutting in at that point is what forces the other driver to brake.",
        excerptKey: "pass-return",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.H Passing",
        sourceUrl: hb(18),
      },
      {
        id: "wi_s2_07",
        topic: "signals",
        question: "A flashing red light faces you at an intersection. What must you do?",
        choices: [
          "Come to a full stop, then go when it is safe",
          "Slow down and proceed with caution",
          "Stop and wait for the light to change to green",
          "Treat it as a yield sign",
        ],
        correctIndex: 0,
        explanation:
          "Flashing red is a stop sign in light form: a full stop, then go when the way is clear. It will not turn green.",
        context:
          "Its counterpart is the flashing yellow, which means slow down, check for cross traffic and proceed with caution - no stop required. Many rural Wisconsin intersections carry a single flashing light for exactly this purpose, red on the minor road and yellow on the through road. A steady red arrow is different again: full stop, and wait for the green.",
        trap: "Waiting for a flashing red to turn green means waiting all night. It is a stop instruction, not a phase of a signal cycle.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(32),
      },
      {
        id: "wi_s2_08",
        topic: "signals",
        question: "What does a flashing yellow arrow for a left turn mean in Wisconsin?",
        choices: [
          "You have a protected turn and oncoming traffic is stopped",
          "The light is about to turn red, so do not enter",
          "You may turn after yielding to oncoming traffic and pedestrians",
          "Left turns are prohibited during this phase",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow arrow is permission to turn once you have yielded. It is the unprotected phase, and oncoming traffic is looking at a green.",
        context:
          "Wisconsin's signal set gives you four arrow states worth knowing. Steady green arrow: protected, conflicting movements are held. Flashing yellow arrow: turn after yielding. Steady yellow arrow: the protected phase is ending. Steady red arrow: stop and wait. The flashing yellow is newer than the others and is the one drivers most often misread.",
        trap: "Any arrow can look like a licence to go. The flashing yellow is the one that hands you the decision and the responsibility for it.",
        excerptKey: "signal-flashing-yellow-arrow",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "wi_s2_09",
        topic: "parking",
        question:
          "How close to the near edge of a crosswalk may you park in Wisconsin, absent a sign?",
        choices: ["No closer than 4 feet", "No closer than 10 feet", "No closer than 15 feet", "No closer than 20 feet"],
        correctIndex: 2,
        explanation:
          "Fifteen feet from the near limits of a crosswalk. Parking closer hides a crossing pedestrian from drivers approaching the corner.",
        context:
          "Wisconsin separates two ideas the statute treats differently. Stopping is prohibited outright within an intersection, on a crosswalk, within 25 feet of the nearest rail at a railroad crossing and within 15 feet of a fire-station driveway. Parking - as opposed to a momentary stop to load or unload - is additionally prohibited within 10 feet of a hydrant, 4 feet of a driveway or alley, and 15 feet of a crosswalk.",
        trap: "The 15 feet is measured to the near edge of the crossing, not from the corner of the building or the kerb radius.",
        excerptKey: "st-park-crosswalk-15",
        sourceLabel: "Wisconsin Statutes Section 346.53(5)",
        sourceUrl: stat("346.53"),
      },
      {
        id: "wi_s2_10",
        topic: "signs",
        question:
          "A yellow pennant-shaped sign reading NO PASSING ZONE stands on the left side of the road. What does it tell you?",
        choices: [
          "You may not pass any vehicle in the zone",
          "You may pass only slow-moving vehicles",
          "Passing is allowed but not recommended",
          "Only trucks are prohibited from passing",
        ],
        correctIndex: 0,
        explanation:
          "It closes the passing zone completely. The pennant is the only sign of that shape Wisconsin uses, and it sits on the left where you cannot miss it.",
        context:
          "Wisconsin marks no-passing areas twice over: the pennant sign and a solid yellow line on your side of the centre. Signs and lines usually agree, but where a sign is present it is telling you where the zone starts and ends. On the road markings side, a dashed yellow line on your side means passing is permitted when safe.",
        trap: "The sign does not exempt slow vehicles. Wisconsin's less-than-half-the-speed-limit exception is about crossing a double solid line, not about a posted no-passing zone.",
        excerptKey: "signs-no-passing",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.B Regulatory",
        sourceUrl: hb(25),
      },
      {
        id: "wi_s2_11",
        topic: "sharing",
        question:
          "A large truck is directly ahead of you on the interstate. Where are its No-Zones?",
        choices: [
          "About 50 feet behind and 10 feet in front",
          "Directly in front only",
          "Only alongside the trailer",
          "About 200 feet behind and 20 feet in front",
        ],
        correctIndex: 3,
        explanation:
          "Wisconsin gives the figures as roughly 200 feet behind and 20 feet in front. Sit in either and the truck driver cannot see you at all.",
        context:
          "The fix is to be decisive rather than patient - speed up or drop back so the driver can see you, and if you are passing, get through the blind spot quickly rather than riding alongside. The same logic explains why you leave extra following distance behind any large vehicle: you cannot see round it, and it cannot see you.",
        trap: "The dangerous blind spot behind a truck is far longer than most drivers assume. Two hundred feet is roughly thirteen car lengths.",
        excerptKey: "no-zones",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 10.F No-Zones",
        sourceUrl: hb(52),
      },
      {
        id: "wi_s2_12",
        topic: "safety",
        question: "How often does Wisconsin tell you to check your rearview mirror?",
        choices: ["Every 6 to 8 seconds", "Every 30 seconds", "Only before changing lanes", "Every time you brake"],
        correctIndex: 0,
        explanation:
          "Every 6 to 8 seconds. It is how you notice a tailgater early enough to do something about it rather than discovering them under braking.",
        context:
          "Wisconsin's advice if someone is following too closely is counterintuitive and correct: slow down gradually. That encourages them to go around you, whereas braking sharply to make a point removes the space you both need. You can also help a driver behind you by holding a steady speed and signalling early when you plan to slow or turn.",
        trap: "Speeding up to shake off a tailgater just moves the problem along at a higher speed and puts you closer to whatever is ahead.",
        excerptKey: "space-mirror-6-8",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.F Space Between Vehicles",
        sourceUrl: hb(13),
      },
      {
        id: "wi_s2_13",
        topic: "rules",
        question: "What does a solid white line between two lanes of traffic mean in Wisconsin?",
        choices: [
          "You may cross it freely when it is safe",
          "It marks the edge of the roadway",
          "You should not cross it, except to avoid a hazard or to turn within the next block",
          "It separates traffic going in opposite directions",
        ],
        correctIndex: 2,
        explanation:
          "A solid white line between lanes discourages lane changing. Wisconsin allows two reasons to cross it: avoiding a hazard, or making a turn within the next block.",
        context:
          "Line colour tells you the direction of the traffic beside you. White separates lanes going the same way, yellow separates opposing directions. A solid white line at the far right of the road marks the right edge of the traffic lane, and a white dashed line between lanes may be crossed when it is safe.",
        trap: "White and yellow answer different questions. A solid white line is about lane discipline, not about oncoming traffic.",
        excerptKey: "lines-white-solid",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.B Types of Line Markings",
        sourceUrl: hb(34),
      },
      {
        id: "wi_s2_14",
        topic: "rightOfWay",
        question:
          "You are pulling out of a driveway onto a Wisconsin street. Who has the right of way?",
        choices: [
          "You, because you are moving into a gap",
          "Nobody, provided you signal",
          "Whichever driver arrives at the entrance first",
          "Every vehicle already on the street, and anyone on the sidewalk you cross",
        ],
        correctIndex: 3,
        explanation:
          "Entering a highway from a driveway or alley puts the whole yielding burden on you, and crossing the sidewalk adds pedestrians and bicycles to the list.",
        context:
          "Wisconsin's right-of-way list is essentially a list of people you wait for. It includes traffic already in the intersection, the first arrival at a four-way stop, vehicles coming from the right at an uncontrolled intersection, cross traffic at an uncontrolled T-intersection, traffic already in a roundabout, and anyone passing you on either side.",
        trap: "\"They saw me\" is not right of way. The duty stays with the driver joining the road until they have completed the manoeuvre.",
        excerptKey: "row-uncontrolled",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.A Right-Of-Way",
        sourceUrl: hb(9),
      },
      {
        id: "wi_s2_15",
        topic: "sharing",
        question:
          "A pedestrian carrying a white cane is crossing ahead of you. What does Wisconsin require?",
        choices: [
          "Sound your horn so they know you are there",
          "Pass slowly behind them",
          "Stop at least ten feet away until they are off the roadway",
          "Yield only if they are within a marked crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "Ten feet, and you stay stopped until the person is off the road entirely. The duty applies whether or not they are in an intersection.",
        context:
          "This sits at the top of the handbook's yielding list alongside guide-dog users, and it is deliberately stricter than the ordinary crosswalk duty. Elsewhere the statute requires you to yield to a pedestrian crossing within a marked or unmarked crosswalk at an uncontrolled crossing, and forbids overtaking another vehicle that has stopped to let someone cross.",
        trap: "Sounding the horn is worse than useless here - it gives a person who cannot see you no information about where you are or what you intend.",
        excerptKey: "row-white-cane",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.A Right-Of-Way",
        sourceUrl: hb(9),
      },
      {
        id: "wi_s2_16",
        topic: "safety",
        question:
          "You need to reverse out of a parking space. What does the Wisconsin handbook tell you to rely on?",
        choices: [
          "Your mirrors and backup camera",
          "A quick glance in the left mirror",
          "The parking sensors, if fitted",
          "Turning your body to look behind you through the rear window",
        ],
        correctIndex: 3,
        explanation:
          "You turn and look. Wisconsin is explicit that mirrors and a backup camera are not enough on their own, and it caps reversing speed at no faster than a slow walk.",
        context:
          "The handbook's advice is to reverse as little as possible, and to look over your right shoulder through the rear window when you must. Get someone outside the car to help if you can. When you have finished, scan left and right again before moving back into traffic - the picture will have changed while you were looking backwards.",
        trap: "A camera shows a rectangle behind the bumper. It does not show a child approaching from the side, which is why the handbook wants your eyes as well.",
        excerptKey: "backing-slow-walk",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.I Backing",
        sourceUrl: hb(18),
      },
      {
        id: "wi_s2_17",
        topic: "speed",
        question:
          "You are on a rural Wisconsin highway with no speed limit signs and no other fixed limit applies. What is the maximum?",
        choices: ["45 mph", "55 mph", "65 mph", "70 mph"],
        correctIndex: 1,
        explanation:
          "Fifty-five is Wisconsin's statutory fall-back where nothing else is posted or specified. The handbook never prints it, which is why it catches people.",
        context:
          "The full statutory ladder runs 15 in an alley or school zone, 25 inside a city or village, 35 in an outlying or semiurban district, 55 as the general fall-back, 65 on an expressway and 70 on a freeway. Above all of it sits the basic rule: no faster than is reasonable and prudent for the conditions, whatever the sign says.",
        trap: "Sixty-five and 70 are the divided-highway figures. An ordinary two-lane rural road is not an expressway.",
        excerptKey: "st-speed-55-default",
        sourceLabel: "Wisconsin Statutes Section 346.57(4)(h)",
        sourceUrl: stat("346.57"),
        commonlyMissed: true,
      },
      {
        id: "wi_s2_18",
        topic: "emergencies",
        question:
          "Your car starts to hydroplane on a wet Wisconsin road. What should you do first?",
        choices: [
          "Brake firmly to slow down",
          "Steer sharply toward the shoulder",
          "Ease off the gas and keep the wheel straight",
          "Pull the parking brake",
        ],
        correctIndex: 2,
        explanation:
          "Ease off the accelerator and hold the wheel straight. You wait for the tyres to find the road again before you try to stop or turn.",
        context:
          "Hydroplaning is the tyres riding on top of a film of water, and worn tyres bring it on at surprisingly low speeds. Wisconsin's related advice covers where water and ice hide: shaded spots, overpasses and bridges on cold wet days, pavement as the rain begins, and standing water near the shoulder. Bridges and overpasses freeze before the rest of the road.",
        trap: "Braking or steering while the tyres are floating gives you nothing to act against, and both take effect violently the moment grip returns.",
        excerptKey: "hydroplaning-steps",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 7.B Severe Weather",
        sourceUrl: hb(44),
      },
      {
        id: "wi_s2_19",
        topic: "impairment",
        question:
          "Your prescription label warns against operating heavy machinery. What does that mean for driving in Wisconsin?",
        choices: [
          "It applies to industrial equipment, not cars",
          "It only matters for commercial drivers",
          "You may drive if you feel fine",
          "It includes motor vehicles, so do not drive",
        ],
        correctIndex: 3,
        explanation:
          "The handbook closes that loophole directly: heavy machinery includes motor vehicles. Driving under the influence of any drug is illegal in Wisconsin, prescription included.",
        context:
          "Wisconsin's impairment rules do not stop at alcohol. Driving with a detectable amount of a restricted controlled substance is an offence in itself, regardless of how you feel, and any amount of a controlled substance is treated as operating impaired. Non-prescription medicines count too, which is why the handbook tells you to read the label before you drive.",
        trap: "\"I feel fine\" is not a defence, and it is not a reliable self-assessment - impairment reliably damages the judgement being used to make it.",
        excerptKey: "label-warning",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 9.A Alcohol, Drugs and Driving",
        sourceUrl: hb(49),
      },
      {
        id: "wi_s2_20",
        topic: "licensing",
        question:
          "Who may sit beside a Wisconsin Class D instruction permit holder as the supervising driver?",
        choices: [
          "Any licensed driver aged 18 or over",
          "Anyone who has held a licence for a year",
          "A driver with at least two years of experience holding a valid regular licence",
          "Any adult family member",
        ],
        correctIndex: 2,
        explanation:
          "Two years of licensed experience and a valid regular licence - not a probationary or occupational one. They sit in the passenger seat beside you.",
        context:
          "On top of the experience requirement there is an age ladder. A qualified instructor or a parent, guardian or spouse must be 19 or older; anyone else must be 21 or older, and if you are under 18 that person needs written authorisation from your parent or guardian. After dark the bar rises again: your supervisor must be a qualified instructor or be at least 25.",
        trap: "A brand-new probationary licence does not qualify someone to supervise, however old they are.",
        excerptKey: "permit-supervisor",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 2.B Instruction Permit",
        sourceUrl: hb(5),
        commonlyMissed: true,
      },
      {
        id: "wi_s2_21",
        topic: "signs",
        question:
          "You see a triangular orange reflective emblem on the back of a vehicle ahead. What does it tell you?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle is a school bus",
          "The vehicle is disabled",
          "The vehicle may be travelling at 25 mph or less",
        ],
        correctIndex: 3,
        explanation:
          "It is the slow-moving vehicle emblem, and it warns that the vehicle ahead may be doing 25 mph or less. On a rural highway that is a closing speed of 30 or 40 mph.",
        context:
          "Wisconsin's rural sections take this seriously because farm machinery is everywhere outside the cities. Farm equipment may have no brake lights or turn signals, the operator may not hear or see you, and you are told to be patient. You also yield to livestock on or along the highway, and you do not sound the horn at animals.",
        trap: "Closing on a tractor at highway speed leaves far less reaction time than it feels like. The emblem is a warning to slow down now, not when you get there.",
        excerptKey: "signs-slow-moving",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.B Regulatory",
        sourceUrl: hb(25),
      },
      {
        id: "wi_s2_22",
        topic: "rules",
        question:
          "You are on a Wisconsin road with a centre lane marked by a solid yellow line and a dashed yellow line on each side, with white left-turn arrows painted in it. What is that lane for?",
        choices: [
          "Passing slower traffic in either direction",
          "Through traffic at busy times",
          "Emergency vehicles only",
          "Left turns and U-turns, from either direction",
        ],
        correctIndex: 3,
        explanation:
          "It is a shared centre turn lane. Drivers from either direction use it to turn left or make a U-turn, and for nothing else.",
        context:
          "You may cross the solid line to enter the lane when you intend to turn, provided it is safe. What you may not do is travel along it. Wisconsin's other special lanes work on the same principle of restricted use: reserved lanes marked with a white diamond are illegal to drive in unless you are the kind of vehicle named, though you may cross one to turn within the next half block.",
        trap: "The lane looks invitingly empty and using it to overtake or to build up speed is exactly what makes it dangerous, since a car is entering it head-on for the same turn.",
        excerptKey: "lane-shared-center",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.C Special Lanes",
        sourceUrl: hb(36),
      },
      {
        id: "wi_s2_23",
        topic: "safety",
        question: "When may you use your high beams in Wisconsin?",
        choices: [
          "When no vehicles are coming toward you",
          "Any time visibility is poor, including fog",
          "Only outside city limits",
          "Whenever the road is unlit",
        ],
        correctIndex: 0,
        explanation:
          "High beams are for an empty road ahead. As soon as a vehicle comes toward you, you drop back to low beams.",
        context:
          "The handbook also recommends high beams in unfamiliar places and construction areas, where the extra reach matters and there is usually nobody to dazzle. If an oncoming driver forgets to dip theirs, look toward the right side of the road rather than into the glare. In snow or fog high beams make things worse, because the light bounces straight back at you.",
        trap: "Reaching for the brights in fog is the instinct and the mistake. Wisconsin's winter advice is headlights on, high beams off.",
        excerptKey: "highbeams-when",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.K Communication",
        sourceUrl: hb(21),
      },
      {
        id: "wi_s2_24",
        topic: "rightOfWay",
        question:
          "You reach an uncontrolled T-intersection on the road that ends there. Who has the right of way?",
        choices: [
          "You, since you are going straight into the junction",
          "Whoever arrived first",
          "Whoever is on the right",
          "Cross traffic on the road that continues through",
        ],
        correctIndex: 3,
        explanation:
          "The road that ends yields to the road that continues. Wisconsin lists cross traffic at an uncontrolled T-intersection among the traffic you give way to.",
        context:
          "The statute frames it as a duty on the driver whose highway terminates at the intersection: yield to any vehicle on the highway that continues through. It sits alongside the general uncontrolled-intersection rule, where two vehicles arriving at about the same time are sorted by the driver on the right, and the rule for entering from an alley or driveway, where you yield to everything.",
        trap: "Being the one going straight does not help here. The shape of the junction, not your intended path, decides it.",
        excerptKey: "row-tintersection",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.A Right-Of-Way",
        sourceUrl: hb(9),
      },
      {
        id: "wi_s2_25",
        topic: "sharing",
        question:
          "A funeral procession is passing through an intersection ahead of you. What does Wisconsin expect?",
        choices: [
          "Do not cut into the line or interfere with it",
          "Treat each vehicle as an ordinary driver and take your turn",
          "Follow the procession until it leaves the road",
          "Stop until every vehicle has passed, even on a green light",
        ],
        correctIndex: 0,
        explanation:
          "You keep out of the line. The lead vehicle obeys the signs and signals, the rest run with headlights on, and nobody cuts in among them.",
        context:
          "The handbook covers processions in a short, practical passage: a funeral procession travels from a funeral home or place of worship to a cemetery or crematorium, the first vehicle follows the traffic signs and signals, and the vehicles in the line must have their headlights on. The obligation on you is to not interfere.",
        trap: "The rule is about not breaking the line, not about stopping dead. You are not required to sit through the whole procession on a green light.",
        excerptKey: "funeral-procession",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 6.F Funeral Processions",
        sourceUrl: hb(43),
      },
      {
        id: "wi_s2_26",
        topic: "speed",
        question:
          "You are merging onto a Wisconsin freeway from an acceleration lane. What should you do?",
        choices: [
          "Stop at the end of the ramp and wait for a gap",
          "Enter at whatever speed the ramp allows and adjust after merging",
          "Build up to the speed of traffic and merge into a safe gap",
          "Cross to the left lane immediately to leave room for others",
        ],
        correctIndex: 2,
        explanation:
          "The acceleration lane exists so you can match the speed of the traffic you are joining. Finding a safe gap is the merging driver's responsibility.",
        context:
          "Wisconsin's handbook adds the courtesy that makes it work: merge at the speed traffic is already moving and avoid forcing another driver to change speed or direction because of you. On the way out, the deceleration lane is where you slow down, not the through lane. Some Wisconsin ramps are metered, with a signal spacing vehicles onto the freeway - disobeying one can earn a ticket.",
        trap: "Stopping at the end of a ramp turns a merge into a standing start into 65 mph traffic, and is a common cause of freeway collisions.",
        excerptKey: "merge-gap",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.B Understanding Vehicle Speed",
        sourceUrl: hb(10),
      },
      {
        id: "wi_s2_27",
        topic: "emergencies",
        question:
          "Your brakes stop working while you are driving. What does the Wisconsin handbook tell you to try?",
        choices: [
          "Switch off the engine immediately",
          "Shift into reverse",
          "Steer into the kerb to scrub off speed",
          "Pump the brake pedal several times, then use the parking brake",
        ],
        correctIndex: 3,
        explanation:
          "Pump the pedal first - that can rebuild pressure - then apply the parking brake, releasing it if the car starts to skid, and look for a safe place to stop.",
        context:
          "The handbook gives short drills for the emergencies that actually happen. A blowout: hold the wheel straight, come off the gas gradually, pull over when safe. Engine failure: hold the wheel, leave the key on, expect heavy steering. A stuck accelerator: eyes on the road, shift to neutral, pull over, then switch off.",
        trap: "Killing the engine first takes the power steering with it and can lock the wheel. It comes after you are stopped, not before.",
        excerptKey: "brakes-fail",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 8.C Roadside Emergencies",
        sourceUrl: hb(48),
      },
      {
        id: "wi_s2_28",
        topic: "licensing",
        question:
          "How many demerit points within a 12-month period cost you your Wisconsin driving privilege?",
        choices: ["6 points", "8 points", "12 points", "15 points"],
        correctIndex: 2,
        explanation:
          "Twelve or more points in any 12-month window suspends or revokes the privilege. Your record starts at zero and points arrive on conviction.",
        context:
          "New drivers reach that total faster than anyone else, because points are doubled for a probationary licence holder, an ID card holder or someone with no licence at all - from the second conviction onward. Separately, four or more major violations or 12 or more minor ones in five years makes you a habitual traffic offender, which costs five years of driving.",
        trap: "The doubling is what makes 12 points arrive quickly. Two moderate convictions can do it for a probationary driver.",
        excerptKey: "points-12",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 11.A Point System",
        sourceUrl: hb(53),
      },
      {
        id: "wi_s2_29",
        topic: "signs",
        question:
          "A crossbuck with a yield sign beneath it stands at a railroad crossing. What must you do?",
        choices: [
          "Stop every time before crossing",
          "Sound your horn and cross",
          "Continue at normal speed unless lights are flashing",
          "Yield to trains, checking both ways before you cross",
        ],
        correctIndex: 3,
        explanation:
          "A crossbuck over a yield sign means you give way to trains. You look and listen before crossing, whether or not any lights are flashing.",
        context:
          "Wisconsin's crossing rules are unforgiving. Never try to beat a train, never stop on the tracks, never cross unless there is room for your car on the far side, and do not change gear while crossing. If a gate is lowering, closed, or rising, you do not drive around or under it. Statute forbids stopping within 25 feet of the nearest rail.",
        trap: "\"No lights flashing\" is not \"no train\". The handbook tells you to check even when the signals are dark, because signals fail.",
        excerptKey: "rr-never-beat",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.H Railroad Crossing",
        sourceUrl: hb(30),
      },
      {
        id: "wi_s2_30",
        topic: "safety",
        question:
          "Wisconsin tells you to give extra following distance in a list of situations. Which of these is on it?",
        choices: [
          "When the road is dry and traffic is light",
          "When you have just had the brakes serviced",
          "When you are the only car on the road",
          "When you are following a motorcycle or a bicycle",
        ],
        correctIndex: 3,
        explanation:
          "Motorcycles and bicycles are on Wisconsin's list of vehicles you leave more room behind, along with trucks, buses, vans and any large vehicle.",
        context:
          "The full list is worth knowing because the test can reach anywhere in it: slippery, icy or snow-covered roads, a driver behind wanting to pass, following a large vehicle or a two-wheeler, carrying a heavy load or trailer, being tailgated, emergency vehicles ahead, a railroad crossing, and stopping on a hill.",
        trap: "A motorcycle is small and looks far away, and it can stop faster than the car following it. That combination is why the extra gap is on the list.",
        excerptKey: "space-mirror-6-8",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.F Space Between Vehicles",
        sourceUrl: hb(13),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real WisDOT knowledge test sits: exact numbers, the wording of the exceptions, and the situations where two rules meet.",
    questions: [
      {
        id: "wi_s3_01",
        topic: "sharing",
        question:
          "You are travelling the opposite way from a school bus stopped with its red lights flashing. When may you keep going?",
        choices: [
          "Whenever the road has four or more lanes",
          "Whenever a painted median separates you",
          "When a barrier divides the road and the bus is on the other side of it",
          "Whenever you are more than 20 feet away",
        ],
        correctIndex: 2,
        explanation:
          "The exception is a divided highway, and Wisconsin defines that as a barrier between the opposing lanes. You must also be on the far side of it.",
        context:
          "The handbook and the statute agree here, which is useful because the exception is narrow and often misread. The statute excuses operators of vehicles proceeding in the opposite direction on a divided highway; the handbook explains that a divided highway has a barrier between lanes going opposite directions. Everything else - lane count, turn lanes, paint - leaves the duty to stop intact.",
        trap: "A painted median or a centre turn lane is not a barrier. On an undivided multi-lane road, every direction stops.",
        excerptKey: "schoolbus-divided",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 10.C School Buses",
        sourceUrl: hb(51),
        commonlyMissed: true,
      },
      {
        id: "wi_s3_02",
        topic: "rightOfWay",
        question:
          "You are entering a Wisconsin roundabout at the same moment as a semitrailer already alongside you. What does the statute require?",
        choices: [
          "You go first if you reached the entry line first",
          "You both proceed, staying in your own lanes",
          "Whichever vehicle is on the right goes first",
          "You yield to it, because of its length and width",
        ],
        correctIndex: 3,
        explanation:
          "Wisconsin requires you to yield to any vehicle or combination at least 40 feet long or 10 feet wide at a roundabout, reducing speed or stopping if that is what it takes. Arriving first does not settle it.",
        context:
          "This is a Wisconsin peculiarity with a practical reason: a long vehicle cannot stay inside a single roundabout lane, and the law lets it deviate from its lane to get through. The handbook carries the same instruction in plainer words, listing semitrucks among the traffic you yield to before entering. If two such large vehicles meet, the one on the right yields to the one on the left.",
        trap: "Every other roundabout instinct you have says circulating traffic and order of arrival decide it. For vehicles this size, Wisconsin overrides that.",
        excerptKey: "st-roundabout-big-vehicle",
        sourceLabel: "Wisconsin Statutes Section 346.18(8)(a)",
        sourceUrl: stat("346.18"),
        commonlyMissed: true,
      },
      {
        id: "wi_s3_03",
        topic: "speed",
        question:
          "You are on a Wisconsin freeway - four or more lanes, a barrier down the middle, access only at interchanges. What is the maximum speed limit?",
        choices: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctIndex: 2,
        explanation:
          "Seventy on a freeway. Sixty-five is the expressway figure, and the distinction is how access is controlled - interchanges only makes it a freeway.",
        context:
          "Both numbers only take effect where WisDOT has posted them, so the sign remains the thing you obey. Below the freeway sits 65 on an expressway, 55 as the general fall-back, and 35 in an outlying or semiurban district. Wisconsin defines an outlying district by building spacing: buildings averaging more than 200 feet apart along a 1,000-foot stretch.",
        trap: "Expressway and freeway are not synonyms in Wisconsin law. An expressway may keep some at-grade access; a freeway has interchanges only.",
        excerptKey: "st-speed-freeway-70",
        sourceLabel: "Wisconsin Statutes Section 346.57(4)(gm)",
        sourceUrl: stat("346.57"),
      },
      {
        id: "wi_s3_04",
        topic: "parking",
        question:
          "Which of these does Wisconsin statute prohibit outright, even for a momentary stop to let a passenger out?",
        choices: [
          "Stopping within 10 feet of a fire hydrant",
          "Stopping within 4 feet of a driveway entrance",
          "Stopping on a crosswalk",
          "Stopping within 15 feet of a crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "Stopping on a crosswalk is prohibited outright. The hydrant, driveway and crosswalk-approach distances sit in the parking section, which permits a brief stop to load or unload with the driver present.",
        context:
          "The two statutes do different jobs. Section 346.52 forbids stopping at all in certain places - within an intersection, on a crosswalk, within 25 feet of the nearest rail, within 15 feet of a fire-station driveway. Section 346.53 forbids parking in others, and its exception is a temporary stop while actually loading or unloading, with a licensed driver attending the vehicle.",
        trap: "The 15-foot crosswalk figure and \"on a crosswalk\" look like the same rule and are not. One is a parking distance, the other an absolute prohibition on stopping.",
        excerptKey: "st-stop-intersection-crosswalk",
        sourceLabel: "Wisconsin Statutes Section 346.52(1)",
        sourceUrl: stat("346.52"),
        commonlyMissed: true,
      },
      {
        id: "wi_s3_05",
        topic: "signals",
        question:
          "You are on a motorcycle at a red light in Wisconsin. The signal is clearly vehicle-actuated and has not detected you, and no other vehicle is present. What may you do?",
        choices: [
          "Nothing - you must wait for a green however long it takes",
          "Reverse and re-approach the sensor",
          "Treat the red as a stop sign immediately",
          "Proceed after stopping for at least 45 seconds, yielding to everything else",
        ],
        correctIndex: 3,
        explanation:
          "Wisconsin's dead-red rule lets a motorcycle, moped, motor bicycle or bicycle go through after stopping at least 45 seconds, if nothing else is there to trigger the signal and you reasonably believe it is vehicle-actuated.",
        context:
          "The permission is narrow and every element matters: the 45 seconds is a minimum, the intersection must be empty of vehicles that could actuate the signal, and you still yield to anyone crossing on a green or lawfully in the crosswalk. It exists because a light motorcycle can sit invisibly on an induction loop indefinitely. It appears nowhere in the handbook.",
        trap: "This is not a general \"the light is broken\" rule. A car may not use it, and it does not apply merely because the wait feels long.",
        excerptKey: "st-dead-red-45",
        sourceLabel: "Wisconsin Statutes Section 346.37(1)(c)4.",
        sourceUrl: stat("346.37"),
        commonlyMissed: true,
      },
      {
        id: "wi_s3_06",
        topic: "sharing",
        question:
          "A tow truck with red lamps flashing is stopped on the shoulder of a two-lane road, and you cannot change lanes safely. What does Wisconsin require?",
        choices: [
          "Maintain speed and stay in your lane",
          "Stop until the tow truck has finished",
          "Slow down and stay at a reduced speed until you are past it",
          "Sound your horn as you pass",
        ],
        correctIndex: 2,
        explanation:
          "Where there is no second lane, or changing lanes is not safe, Wisconsin's move-over law requires you to slow to a safe speed and stay slow until you are completely past.",
        context:
          "The law is triggered by an emergency or roadside service vehicle, or an ordinary disabled vehicle, parked or standing on or within 12 feet of the roadway. Where the road has two or more lanes in your direction and you can change safely, you move over instead. A 2025 amendment brought plain disabled vehicles - hazards on, flares out, or someone attending them - inside the same protection.",
        trap: "Moving over is the answer on a multi-lane road. On a two-lane road there is nowhere to move to, and the duty becomes slowing down, not carrying on.",
        excerptKey: "st-move-over-slow",
        sourceLabel: "Wisconsin Statutes Section 346.072(1m)(b)",
        sourceUrl: stat("346.072"),
        commonlyMissed: true,
      },
      {
        id: "wi_s3_07",
        topic: "rules",
        question:
          "A double solid yellow line runs down the centre. The vehicle ahead is a tractor doing 15 mph in a 40 mph zone. May you cross the line to pass?",
        choices: [
          "No - the exception does not cover farm equipment",
          "Yes, because it is under half the speed limit",
          "Yes, if you can complete the pass within 100 feet",
          "Yes, provided you do not exceed the speed limit",
        ],
        correctIndex: 0,
        explanation:
          "Wisconsin's under-half-the-speed-limit exception explicitly excludes farm equipment. A tractor is exactly the case the exception is written not to cover.",
        context:
          "The handbook lists two ways across a double solid yellow: turning into a driveway when safe, and passing a vehicle going less than half the speed limit when safe - except farm equipment. The rural sections explain the reasoning: farm machinery may be wider than it looks, may have no signals, and may turn into a field entrance with no warning.",
        trap: "The 15-in-a-40 arithmetic invites you to apply the exception, and the exception's own last four words take it away.",
        excerptKey: "lines-double-yellow-exception",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.B Types of Line Markings",
        sourceUrl: hb(35),
        commonlyMissed: true,
      },
      {
        id: "wi_s3_08",
        topic: "licensing",
        question:
          "You are 17 and hold a Wisconsin probationary licence issued four months ago. It is 1 a.m. and you want to drive to a friend's house. May you?",
        choices: [
          "Yes, alone, at any hour",
          "Yes, if you are home before 5 a.m.",
          "No - between midnight and 5 a.m. you may drive alone only between home, school and work",
          "No - you may not drive at all between midnight and 5 a.m.",
        ],
        correctIndex: 2,
        explanation:
          "The midnight-to-5 a.m. window restricts where you may go alone: home, school and work. A qualified supervising driver in the passenger seat lifts it.",
        context:
          "The restrictions run for the first nine months of a probationary licence, or until you turn 18. Between 5 a.m. and midnight you may drive alone and go anywhere, with immediate family plus at most one other person. A moving violation, a breach of the restrictions, or any suspension extends the nine months by six.",
        trap: "The night rule is about destination, not company. Driving alone at 1 a.m. is fine on the way home from work and not fine on the way to a friend's.",
        excerptKey: "prob-night-window",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 2.C Probationary License",
        sourceUrl: hb(7),
        commonlyMissed: true,
      },
      {
        id: "wi_s3_09",
        topic: "parking",
        question:
          "How close to a railroad crossing does Wisconsin statute forbid you to stop or leave a vehicle standing?",
        choices: ["10 feet from the nearest rail", "15 feet from the nearest rail", "25 feet from the nearest rail", "50 feet from the nearest rail"],
        correctIndex: 2,
        explanation:
          "Twenty-five feet from the nearest rail, and it is in the stopping section, so even a brief halt to let someone out is prohibited.",
        context:
          "The distance is set by the overhang of a train, which is wider than the rails by a considerable margin, and by the space a driver needs to see down the line. It sits beside the other absolute prohibitions on stopping: within an intersection, on a crosswalk, on a sidewalk, within 15 feet of a fire-station driveway, and on the roadway side of a parked vehicle.",
        trap: "The handbook never prints this figure, and 15 feet - Wisconsin's crosswalk number - is the easy wrong answer.",
        excerptKey: "st-stop-railroad-25",
        sourceLabel: "Wisconsin Statutes Section 346.52(1)(i)",
        sourceUrl: stat("346.52"),
      },
      {
        id: "wi_s3_10",
        topic: "safety",
        question:
          "You are driving in fog on a Wisconsin highway. What does the handbook tell you about how other vehicles will appear?",
        choices: [
          "They will appear closer than they are",
          "Their speed will be easier to judge than in daylight",
          "Their colours will be easier to judge",
          "They may appear to be moving more slowly than they are",
        ],
        correctIndex: 3,
        explanation:
          "In reduced visibility vehicles look slower than they really are. That misjudgement is what turns a fog bank into a chain collision.",
        context:
          "The handbook's answer to reduced visibility is a lower speed, headlights on, and readiness to stop. At night the related problem is distance: judging how far away an oncoming vehicle is, and how fast it is closing, gets much harder. Both point at the same fix, which is more space and less speed.",
        trap: "The instinct is to worry about not seeing the car. The stated hazard is misreading the speed of the car you can see.",
        excerptKey: "sight-10-15",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 7.A Reduced Visibility",
        sourceUrl: hb(44),
      },
      {
        id: "wi_s3_11",
        topic: "rules",
        question:
          "Where does Wisconsin allow a U-turn on a rural highway with one lane in each direction?",
        choices: [
          "Only at an intersection",
          "Nowhere - U-turns are limited to divided highways",
          "Only where a sign expressly permits it",
          "Anywhere on such a highway, if done safely and without interfering with traffic",
        ],
        correctIndex: 3,
        explanation:
          "The handbook allows a U-turn anywhere on a rural two-lane highway, provided you do it safely and do not interfere with traffic. Check for a sign prohibiting it first.",
        context:
          "The manoeuvre carries a signalling rule most drivers miss: a U-turn uses the left-turn signal, and the statutory 100 feet applies to it just as to any turn. Where the street is too narrow for a U-turn, Wisconsin teaches the Y-turn instead, and requires it on the skills test.",
        trap: "\"Only at intersections\" is the rule in several other states. Wisconsin's own wording is broader for rural two-lane roads, and narrower where a no-U-turn sign is posted.",
        excerptKey: "uturn-rural",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.G Turning",
        sourceUrl: hb(15),
      },
      {
        id: "wi_s3_12",
        topic: "impairment",
        question:
          "You are 22 and driving in Wisconsin with an opened bottle of wine in the glove compartment. Is that lawful?",
        choices: [
          "Yes, provided nobody has been drinking from it",
          "Yes, because the glove compartment is a closed container",
          "No - the glove compartment counts as the area occupied by the driver and passengers",
          "No, but only if the vehicle is moving",
        ],
        correctIndex: 2,
        explanation:
          "Wisconsin names the glove compartment specifically. An opened bottle must ride in the trunk, or in some other area not normally occupied by the driver or passengers.",
        context:
          "The statute reaches an opened container, a broken seal, or contents partly removed. It applies to possession on your person and to keeping one in the vehicle, and both the owner and the driver are on the hook. The associated rule forbids drinking alcohol in a motor vehicle on a highway at all.",
        trap: "The glove compartment feels like storage and the law treats it as reach. The utility compartment is named the same way.",
        excerptKey: "st-open-trunk",
        sourceLabel: "Wisconsin Statutes Section 346.935(3)",
        sourceUrl: stat("346.935"),
        commonlyMissed: true,
      },
      {
        id: "wi_s3_13",
        topic: "signals",
        question:
          "The light turns green while you are waiting at the front of the queue. What does Wisconsin tell you to do?",
        choices: [
          "Go immediately, since you have the right of way",
          "Sound your horn if the car opposite does not move",
          "Wait three seconds by default",
          "Let cross traffic clear the intersection before you move",
        ],
        correctIndex: 3,
        explanation:
          "Green means you may go, and Wisconsin adds the condition that matters: let cross traffic clear the intersection first. A green light does not empty it for you.",
        context:
          "The same section reminds you that even on green you yield to emergency vehicles and to anyone else the law puts ahead of you, and that a left turn on a steady green is unprotected. The handbook's wider advice for intersections is to search left, right and left again before entering, on the assumption that somebody will run the light.",
        trap: "Treating green as a starting gun is the single most common way a driver with the right of way is hit by someone who ran the red.",
        excerptKey: "signal-steady-green",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(33),
      },
      {
        id: "wi_s3_14",
        topic: "emergencies",
        question:
          "Your car begins to skid on an icy Wisconsin road. What does the handbook tell you to do?",
        choices: [
          "Brake firmly and hold the wheel still",
          "Apply the parking brake",
          "Accelerate gently to pull the car straight",
          "Stay off the brake and steer where you want the car to go",
        ],
        correctIndex: 3,
        explanation:
          "Off the brake, and steer in the direction you want the vehicle to go. As it begins to straighten you turn the wheel back the other way to catch the secondary skid.",
        context:
          "Wisconsin's winter package is consistent about this. Avoid rapid braking and sudden sharp turns. Do not use cruise control on slippery roads, because it will keep feeding power to a wheel that has lost grip. If your car has no anti-lock brakes, pump them gently rather than standing on the pedal.",
        trap: "The correction is not one movement. Missing the second, opposite steering input is what turns a recovered skid into a spin.",
        excerptKey: "skid-steps",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 7.B Severe Weather",
        sourceUrl: hb(45),
      },
      {
        id: "wi_s3_15",
        topic: "signs",
        question:
          "A green rectangular sign with white lettering appears over a Wisconsin freeway. What sort of information is it giving you?",
        choices: [
          "A regulation you must obey",
          "A warning about the road ahead",
          "A destination and how to reach it",
          "A nearby service",
        ],
        correctIndex: 2,
        explanation:
          "Green is Wisconsin's destination colour. It shows you places and directions - cities, states, airports - rather than telling you to do anything.",
        context:
          "The colour families are the fastest route through the signs test. Green or brown with white lettering means destination, brown specifically for parks, historical areas and points of interest. Blue with white means services such as hospitals and camping. Blue or green mile markers on tall thin posts give the direction, route number and mile, and appear every one to two tenths of a mile.",
        trap: "Green and blue both look official and calm. Blue points at services; green points at places.",
        excerptKey: "signs-destination-green",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.D Destination",
        sourceUrl: hb(27),
      },
      {
        id: "wi_s3_16",
        topic: "rightOfWay",
        question:
          "Two cars reach an uncontrolled intersection at about the same time, but one is doing 45 mph in a 25 mph zone. What does the statute say about right of way?",
        choices: [
          "The speeding driver keeps the right of way if they are on the right",
          "Neither driver has right of way and both must stop",
          "Right of way is decided purely by position, regardless of speed",
          "The speeding driver forfeits any right of way they would otherwise have had",
        ],
        correctIndex: 3,
        explanation:
          "Wisconsin's statute strips the right of way from a driver travelling at an unlawful speed. Being on the right does not preserve it.",
        context:
          "The base rule is that when two vehicles reach an intersection at about the same time, the driver on the left yields to the driver on the right. The forfeiture clause sits in the same subsection and exists precisely because a speeding driver arrives \"at the same time\" only by breaking the law. It does not, of course, make a collision safe - it allocates fault.",
        trap: "Knowing the right-hand rule is not enough. This subsection has a second sentence, and it is the one the question turns on.",
        excerptKey: "st-row-unlawful-speed",
        sourceLabel: "Wisconsin Statutes Section 346.18(1)",
        sourceUrl: stat("346.18"),
      },
      {
        id: "wi_s3_17",
        topic: "safety",
        question:
          "Which of these does the Wisconsin handbook identify as a sign that you are too tired to keep driving?",
        choices: [
          "Feeling warm in the car",
          "Wanting to change the radio station",
          "Checking your mirrors frequently",
          "Hitting the rumble strip at the side of the road",
        ],
        correctIndex: 3,
        explanation:
          "Drifting into the rumble strip is on Wisconsin's short list of drowsy-driving signs, along with yawning, blinking a lot and drifting out of your lane.",
        context:
          "The handbook treats drowsy driving as its own category of dangerous behaviour, alongside impairment and distraction, and notes that teen and young adult drivers are at greater risk of it. The instruction when you notice the signs is to pull over and rest, not to open a window or turn the music up.",
        trap: "A rumble strip feels like a near miss you got away with. It is the point at which you had already stopped steering.",
        excerptKey: "drowsy-signs",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 9.C Drowsy Driving",
        sourceUrl: hb(50),
      },
      {
        id: "wi_s3_18",
        topic: "sharing",
        question:
          "You are approaching a stopped fire engine that is reversing into its station, with a firefighter directing traffic to stop. What does Wisconsin require?",
        choices: [
          "Stop not less than 30 feet away and stay stopped until directed on",
          "Slow down and pass with care",
          "Stop 20 feet away, as for a school bus",
          "Change lanes and continue",
        ],
        correctIndex: 0,
        explanation:
          "Thirty feet, and you stay there until a member of the fire department directs you on or the signal ends and everyone has cleared the road.",
        context:
          "Wisconsin has three separate stopping distances that are easy to confuse and are all tested. Twenty feet from a school bus flashing red. Thirty feet from an emergency vehicle backing into a fire station. Ten feet from a pedestrian with a white cane or a guide dog. None of them is the same number, and none of them is a rounding of the others.",
        trap: "The school bus figure is the one everybody knows, and it is the wrong answer here by ten feet.",
        excerptKey: "st-firestation-30",
        sourceLabel: "Wisconsin Statutes Section 346.455(1)",
        sourceUrl: stat("346.455"),
      },
      {
        id: "wi_s3_19",
        topic: "licensing",
        question:
          "You failed the Wisconsin knowledge test this morning. When is the earliest you can try again?",
        choices: [
          "Immediately, at another DMV service center",
          "The same day, after a two-hour wait",
          "No sooner than the next day",
          "After 30 days",
        ],
        correctIndex: 2,
        explanation:
          "The next day at the earliest. WisDOT also caps you at five attempts at the same test within a one-year period before you need staff permission.",
        context:
          "The tests are walk-in at DMV customer service centers and there is no appointment to book. They run on a touch screen with instant feedback, audio assist is available on request, and paper versions exist. A test taken at a DMV service center is free; the at-home online option for 15 to 17 year olds costs $10 per attempt and is limited to two attempts.",
        trap: "Driving to a different service center does not reset the clock. The wait is on you, not the branch.",
        excerptKey: "test-knowledge-time",
        sourceLabel: "WisDOT - Wisconsin knowledge tests",
        sourceUrl: KNOWLEDGE,
      },
      {
        id: "wi_s3_20",
        topic: "speed",
        question:
          "You are inside the corporate limits of a Wisconsin village, on a street with no posted limit, in an area where buildings average more than 200 feet apart. What is the limit?",
        choices: ["25 mph", "35 mph", "45 mph", "55 mph"],
        correctIndex: 1,
        explanation:
          "That description is an outlying district, and the statutory figure is 35. Inside city or village limits but outside an outlying district, it drops to 25.",
        context:
          "The building-spacing test is how Wisconsin distinguishes the two. An outlying district is territory along a highway inside a city or village where, over any 1,000-foot stretch, the buildings in use average more than 200 feet apart. A semiurban district uses the same 200-foot yardstick outside city limits and also carries 35 mph.",
        trap: "Being inside a village boundary suggests 25. The spacing of the buildings, not the sign at the village edge, is what the statute keys on.",
        excerptKey: "st-speed-35-outlying",
        sourceLabel: "Wisconsin Statutes Section 346.57(4)(f)",
        sourceUrl: stat("346.57"),
      },
      {
        id: "wi_s3_21",
        topic: "rules",
        question:
          "You are in a Wisconsin roundabout and realise you should have taken the previous exit. What should you do?",
        choices: [
          "Stop and reverse to the exit",
          "Change lanes and cut across to the exit",
          "Continue round and take the exit on the next pass",
          "Stop in the roundabout and signal",
        ],
        correctIndex: 2,
        explanation:
          "Keep going. Wisconsin forbids changing lanes inside a roundabout and tells you to avoid stopping in one, so the safe recovery is another lap.",
        context:
          "Lane choice is made before you enter, which is why the handbook tells you to read the signs on approach: generally the left lane for left turns and U-turns, the right lane for the next right, the middle for straight ahead. Signal right as you reach your exit. If an emergency vehicle enters while you are inside, exit at the next right and then pull over.",
        trap: "The instinct to fix the mistake immediately is what causes roundabout collisions, because the driver beside you has no reason to expect it.",
        excerptKey: "roundabout-no-lane-change",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 6.A Roundabouts",
        sourceUrl: hb(39),
      },
      {
        id: "wi_s3_22",
        topic: "emergencies",
        question:
          "How does Wisconsin tell you to use anti-lock brakes in an emergency stop?",
        choices: [
          "Pump the pedal rapidly",
          "Use the parking brake instead",
          "Press until the pedal vibrates, then ease off",
          "Apply firm, continuous pressure and hold it",
        ],
        correctIndex: 3,
        explanation:
          "Firm, continuous pressure, held until the vehicle stops or the danger passes. The system does the pumping, and it keeps the wheels from locking so you can still steer.",
        context:
          "Pumping is the technique for a car without anti-lock brakes, and Wisconsin says so separately in the winter section: gently pump the brakes to stop the car skidding. Applying the wrong technique to the wrong car is worse than useless - pumping an anti-lock system throws away most of its braking, and standing on a non-anti-lock system locks the wheels and removes your steering.",
        trap: "The pedal vibrating and grinding underfoot feels like a fault and is the system working. Easing off at that moment lengthens the stop.",
        excerptKey: "abs-firm-pressure",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 8.A Avoiding Crashes",
        sourceUrl: hb(46),
      },
      {
        id: "wi_s3_23",
        topic: "parking",
        question:
          "You are parking facing uphill on a Wisconsin street with a curb. Which way do the front wheels go?",
        choices: [
          "Toward the curb, to the right",
          "It depends on the gradient",
          "Straight ahead",
          "Away from the curb, to the left",
        ],
        correctIndex: 3,
        explanation:
          "Uphill with a curb, the wheels go left - away from the curb. If the car rolls back, the front tyre catches the curb instead of rolling into the street.",
        context:
          "The three cases are worth memorising as a set because they are easily muddled. Uphill with a curb: wheels left. Uphill with no curb: wheels right, so a rolling car heads for the verge. Downhill: wheels right in either case. In all three, set the emergency brake.",
        trap: "\"Always turn into the curb\" is a half-remembered version that is right downhill and wrong uphill.",
        excerptKey: "parking-hill",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.J Parking",
        sourceUrl: hb(19),
      },
      {
        id: "wi_s3_24",
        topic: "signals",
        question:
          "You want to turn left on red in Wisconsin. When is that permitted?",
        choices: [
          "Never - only right turns are allowed on red",
          "Whenever there is no oncoming traffic",
          "From any street onto a one-way street, after stopping",
          "From a one-way street onto another one-way street, after stopping",
        ],
        correctIndex: 3,
        explanation:
          "One-way to one-way, after a complete stop, and only where no sign forbids it. Both streets have to be one-way.",
        context:
          "The statute puts the same rule in its own terms: from a one-way highway into the nearest lawfully available lane of a one-way highway on which traffic travels to the left. As with a right on red, you stop first and then yield to pedestrians in the crosswalk, to drivers making a lawful U-turn, and to everyone else lawfully using the intersection.",
        trap: "Turning left onto a one-way street from a two-way street is the near-miss version, and it is not permitted.",
        excerptKey: "signal-turn-on-red",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 5.A Traffic Signals",
        sourceUrl: hb(32),
      },
      {
        id: "wi_s3_25",
        topic: "sharing",
        question:
          "A bicyclist is riding in the middle of a narrow Wisconsin traffic lane. What does the handbook say about that?",
        choices: [
          "They must ride as far right as possible",
          "They may use the lane only where there is no shoulder",
          "They must dismount and use the sidewalk",
          "They are entitled to use the whole lane",
        ],
        correctIndex: 3,
        explanation:
          "Bicyclists can use the whole traffic lane in Wisconsin, and you are told not to share a lane with one. If you cannot give three feet, you wait.",
        context:
          "The handbook explains why: a rider can move into your path quickly and without warning, and not all bikes carry reflectors or lights. Wait for oncoming traffic to clear before passing, then leave at least three feet and hold it until you are safely past. Motorcycles are entitled to the full lane on the same basis.",
        trap: "A rider taking the lane looks obstructive and is often the safest place for them, because it puts them where you are already looking.",
        excerptKey: "bicycle-full-lane",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 10.E Bicycles",
        sourceUrl: hb(52),
      },
      {
        id: "wi_s3_26",
        topic: "safety",
        question:
          "You are following a car that keeps stopping without warning, and a driver behind you wants to pass. What does Wisconsin recommend?",
        choices: [
          "Speed up to close the gap ahead",
          "Move to the left lane and match the speed ahead",
          "Brake sharply to warn the driver behind",
          "Give yourself extra following distance",
        ],
        correctIndex: 3,
        explanation:
          "Both conditions - an unpredictable vehicle ahead and a driver wanting past - are on Wisconsin's list of reasons to lengthen your following distance.",
        context:
          "Extra space in front is the one resource that solves several problems at once. It gives you time to react to the car ahead, it gives a driver behind somewhere to move into, and it shortens the gap they need to complete a pass. The related habit is signalling early and holding a steady speed so nobody behind you is guessing.",
        trap: "Brake-checking a tailgater removes the space you are relying on and hands the outcome to their reaction time.",
        excerptKey: "following-adverse",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 3.F Space Between Vehicles",
        sourceUrl: hb(13),
      },
      {
        id: "wi_s3_27",
        topic: "impairment",
        question:
          "What does Wisconsin say will sober up a driver who has been drinking?",
        choices: ["Coffee", "A cold shower", "Fresh air and a walk", "Time, and nothing else"],
        correctIndex: 3,
        explanation:
          "Time is the only thing that works. Everything else changes how awake someone feels without changing the alcohol in their blood.",
        context:
          "The handbook's practical advice follows from that: ask a sober friend or family member for a lift, or have a bartender call a cab. Alcohol damages exactly the faculties driving depends on - judging distance, speed and the movement of other vehicles - and the driver is the worst-placed person to assess the damage.",
        trap: "Coffee produces an alert drunk. The feeling of having sobered up is itself one of the effects.",
        excerptKey: "time-sobers",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 9.A Alcohol, Drugs and Driving",
        sourceUrl: hb(49),
      },
      {
        id: "wi_s3_28",
        topic: "signs",
        question:
          "A white rectangular sign shows a left-turn arrow with the word ONLY beneath it, above the left-hand lane. What does it mean?",
        choices: [
          "Left turns are permitted from this lane",
          "The lane is reserved for buses turning left",
          "Left turns are prohibited from this lane",
          "This lane may only be used to turn left or make a U-turn",
        ],
        correctIndex: 3,
        explanation:
          "ONLY converts permission into restriction. That lane is for the movement shown and nothing else, so going straight from it is a violation.",
        context:
          "Wisconsin's lane-use signs come in sets, one per lane, and reading them together tells you the whole intersection. The handbook's own example has three signs: a far-left lane for left or straight, a middle lane for straight, and a right lane for right turns. Where a roundabout is involved, the dot with the left arrow marks the centre island.",
        trap: "Without ONLY the sign describes what is allowed. With ONLY it also describes what is forbidden, which is everything else.",
        excerptKey: "signs-regulatory-shape",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.B Regulatory",
        sourceUrl: hb(24),
      },
      {
        id: "wi_s3_29",
        topic: "rightOfWay",
        question:
          "You have been parked at the kerb and want to rejoin the traffic stream. Who has the right of way?",
        choices: [
          "All vehicles approaching on the highway",
          "You, once your signal is on",
          "Whoever is furthest away",
          "Nobody, since a parked car is not in traffic",
        ],
        correctIndex: 0,
        explanation:
          "Moving off from a parked position puts the yielding duty entirely on you. Every vehicle approaching on the highway goes first.",
        context:
          "The statute groups this with the other join-the-flow situations: entering a highway from an alley or a driveway, and crossing a sidewalk. In each case the driver arriving from outside the traffic stream yields to everything already in it. Signalling announces your intention; it does not create a right.",
        trap: "A signal is a statement, not a claim. Switching it on does not oblige anyone to let you out.",
        excerptKey: "st-row-parked",
        sourceLabel: "Wisconsin Statutes Section 346.18(5)",
        sourceUrl: stat("346.18"),
      },
      {
        id: "wi_s3_30",
        topic: "rules",
        question:
          "A police officer at an intersection is waving you through while the signal shows red. What do you do?",
        choices: [
          "Follow the officer's direction",
          "Obey the signal and stay stopped",
          "Wait for the signal to turn green, then go",
          "Sound your horn to alert the officer",
        ],
        correctIndex: 0,
        explanation:
          "A police officer directing traffic outranks the signal and the signs. Wisconsin says to follow their directions even where they differ from what the light shows.",
        context:
          "The same rule covers school crossing guards and other workers directing traffic, including a construction flagger holding a sign or flag. The reason is that a person on the ground knows something the fixed installation does not - a crash ahead, a failed signal, a road closure - and the fixed installation cannot adapt.",
        trap: "\"But the light was red\" is not a defence, and stopping in an intersection an officer is clearing creates the obstruction they were preventing.",
        excerptKey: "signs-obey-officer",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4 Signs",
        sourceUrl: hb(22),
      },
      {
        id: "wi_s3_31",
        topic: "licensing",
        question:
          "How many hours of supervised practice does a Wisconsin driver under 18 need before a probationary licence?",
        choices: [
          "30 hours, 5 of them at night",
          "40 hours, 10 of them at night",
          "50 hours, 10 of them at night",
          "60 hours, 15 of them at night",
        ],
        correctIndex: 2,
        explanation:
          "Fifty in total: 40 in daylight and 10 in darkness. Your sponsor has to verify them, and the handbook is clear that 50 is a floor rather than a target.",
        context:
          "The hours run alongside the other requirements - at least six months on the permit, turning 16, completing driver education, and six months without a traffic ticket. WisDOT publishes a printable driving log and a RoadReady mobile app for tracking the hours.",
        trap: "Forty and 10 are the two components. Answering 40 mistakes the daylight half for the whole requirement.",
        excerptKey: "prob-50-hours",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 2.C Probationary License",
        sourceUrl: hb(6),
      },
      {
        id: "wi_s3_32",
        topic: "speed",
        question:
          "Traffic on a Wisconsin freeway is moving at 45 mph in heavy rain, well below the posted 70. How fast should you drive?",
        choices: [
          "70, since that is the posted limit",
          "As slowly as you like, since the limit is only a maximum",
          "Exactly 55, the statutory fall-back",
          "At a speed that is reasonable and prudent for the conditions",
        ],
        correctIndex: 3,
        explanation:
          "The posted number is a ceiling for good conditions. Wisconsin's basic rule requires a speed that is reasonable and prudent for the conditions actually in front of you.",
        context:
          "Wisconsin puts a limit on the other end too. Driving so slowly that you impede the normal and reasonable movement of traffic is its own offence, and the handbook warns that going too slowly can stack vehicles up behind you and cause a crash. The right answer in rain is the speed of the traffic around you, adjusted for what you can see and stop within.",
        trap: "The sign is not a defence. A driver doing the posted limit into a wall of spray is still driving too fast for conditions.",
        excerptKey: "signs-speed-limit",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 4.B Regulatory",
        sourceUrl: hb(24),
      },
      {
        id: "wi_s3_33",
        topic: "emergencies",
        question:
          "You are in a Wisconsin crash with no injuries, and the damage to the other car is about $1,500. What must happen?",
        choices: [
          "Nothing, as long as details are exchanged",
          "It must be reported only if a driver was drinking",
          "It only needs reporting if a government sign was hit",
          "The crash must be reported to police",
        ],
        correctIndex: 3,
        explanation:
          "Property damage of $1,000 or more triggers the reporting duty in Wisconsin, injury or no injury.",
        context:
          "The handbook lists five triggers: an injury or death, property damage of $1,000 or more, government property damage of $200 or more, a vehicle that cannot be moved, or a driver who appears to be under the influence. Where the cars can move, get them off the road, exchange licence, vehicle and insurance details, note the damage and write down what happened.",
        trap: "The $200 figure is for government property such as signs and guard rails. It is not the threshold for an ordinary car.",
        excerptKey: "crash-report-thresholds",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 8.B Crashes",
        sourceUrl: hb(47),
      },
      {
        id: "wi_s3_34",
        topic: "sharing",
        question:
          "It is dusk on a rural Wisconsin road in November and you see one deer cross ahead. What should you expect?",
        choices: [
          "The road is now clear",
          "Deer only appear in wooded areas",
          "The deer will return the way it came",
          "More deer, since they rarely travel alone",
        ],
        correctIndex: 3,
        explanation:
          "Wisconsin tells you to watch for more than one. Deer move in groups, and the second one arrives while you are still watching the first.",
        context:
          "Deer are most active from sunset to sunrise, which is also when your headlights pick up the reflection in their eyes. Slow down when you see that, use the horn and be ready to stop. If you do hit one, check the car is still safe to drive, record the details for insurance, and call the police so they can issue a tag - you may keep the deer, and if you do not want it, the next motorist may.",
        trap: "\"Deer are a rural problem\" is the assumption the handbook contradicts directly - they wander into towns and cities, and may cross anywhere at any time.",
        excerptKey: "deer-active",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 6.E Watch for Deer",
        sourceUrl: hb(43),
      },
      {
        id: "wi_s3_35",
        topic: "safety",
        question:
          "Wisconsin bans one particular kind of listening device while driving. Which?",
        choices: [
          "A car radio played above a set volume",
          "Bluetooth speakers of any kind",
          "Any earpiece, including a single one",
          "Headsets or headphones covering or inside both ears",
        ],
        correctIndex: 3,
        explanation:
          "Headsets or headphones that cover or go in both ears are out. The point is that you have to be able to hear an emergency vehicle.",
        context:
          "The same passage tells you to keep the radio low enough to hear a siren, which is the underlying principle rather than a separate rule. The rest of the distracted-driving section is practical: pull over to read directions or answer a phone, eat while parked, put pets in a carrier, and keep the mirror and windows free of hanging objects and decals.",
        trap: "The ban is aimed at both ears being blocked, not at all audio. A stereo playing quietly is not what the rule targets.",
        excerptKey: "headphones",
        sourceLabel: "Wisconsin Motorists' Handbook - Section 9.B Distracted Driving",
        sourceUrl: hb(49),
      },
    ],
  },
];
