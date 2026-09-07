import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Nebraska Driver's Manual published
// by the Nebraska Department of Motor Vehicles - the file the DMV serves as
// "Class O Drivers Manual-English 1-2025.pdf", whose only edition label is the
// "January 2025" printed on the inside back cover. The book runs 92 PDF pages
// carrying 80 printed pages, and they do NOT line up: printed page N is PDF
// page N + 8. Every page reference in this file is the PRINTED page; the
// "#page=" anchor in each sourceUrl is the PDF page that lands on it.
//
// The manual is silent on the one thing every candidate wants to know - what
// the written test looks like. It says only that "There is a separate written
// test for each class of license." The format is published instead in the
// DMV's own Driver Licensing Examiner Policies and Procedures Manual: the
// Class O written test is 25 questions, you may miss 5, the pass mark is 80
// percent, and a pass is good for 6 months. That document is quoted directly
// rather than paraphrased, because two widely repeated numbers for Nebraska
// (20 questions, 70 percent) are simply wrong.
//
// Where the manual summarises, Chapter 60 of the Nebraska Revised Statutes
// supplies the number, and the manual's back cover invites exactly that: it
// "is not intended to be an official legal reference to Nebraska traffic
// laws. If you have a court case or other reason to know the actual language
// of law, it will be necessary for you to refer to the actual statutes rather
// than this manual." Four gaps matter enough to name here:
//
// 1. The manual gives no distance for parking near a fire hydrant, a stop
//    sign or a crosswalk in readable text - the list on printed page 57 is set
//    in a font whose fi ligature does not extract. Neb. Rev. Stat. 60-6,166
//    carries all of them, and adds two the manual never prints at all: 20 feet
//    from a fire station driveway, and 75 feet opposite one.
// 2. The manual gives no penalty for passing a stopped school bus.
//    Neb. Rev. Stat. 60-6,175 makes it a Class IV misdemeanor with a $500
//    fine and points. The same section also carries a SECOND exception the
//    manual omits: traffic directed to proceed by a posted sign.
// 3. The manual's Move Over paragraph covers only multi-lane controlled-access
//    highways. There are two statutes, not one: 60-6,378 for controlled-access
//    highways and 60-6,378.01 for every other road.
// 4. The manual prints "75 MPH on rural interstate highways" flat.
//    Neb. Rev. Stat. 60-6,186(1)(i) carves out 65 mph for the Interstate
//    inside Douglas County, for I-180 in Lancaster County and for I-129 in
//    Dakota County - which is most of the Interstate an Omaha or Lincoln
//    learner will ever drive.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// Department of Motor Vehicles' own authoritative wording.
const HB = "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf";
/** The manual's PRINTED page N sits on PDF page N + 8. */
const hb = (printedPage: number) => `${HB}#page=${printedPage + 8}`;
const NEB = "https://nebraskalegislature.gov/laws/statutes.php?statute=";
const DLE = "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf";

export const nebraskaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Nebraska Basics",
    difficulty: "starter",
    description:
      "The rules you meet in your first hour behind the wheel in Nebraska: what the shapes and colors mean, who goes first, and the handful of numbers the DMV expects you to know cold before it hands you a Learner's Permit.",
    questions: [
      {
        id: "ne_s1_01",
        topic: "signs",
        question: "What shape is used for a stop sign, and what does the manual say that shape always means?",
        choices: [
          "An octagon, which always means stop",
          "A triangle, which always means yield",
          "A diamond, which always means a hazard ahead",
          "A pentagon, which always means a school zone",
        ],
        correctIndex: 0,
        explanation:
          "Nebraska teaches signs by shape first, because the shape reads in snow, glare or a language you cannot. The eight-sided octagon is reserved for STOP and is used for nothing else.",
        context:
          "The manual's shape list is short and worth memorizing whole: octagon means stop, triangle means yield, diamond warns of a hazard, a rectangle is regulatory when it stands vertical and a guide sign when it lies horizontal, a pentagon marks school zones and school crossings, and a pennant marks a no-passing zone.",
        trap: "The triangle is also red and white in Nebraska, so color alone will not separate a stop sign from a yield sign. Shape does.",
        excerptKey: "shape-octagon",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-2 Sign Shapes",
        sourceUrl: hb(35),
      },
      {
        id: "ne_s1_02",
        topic: "signals",
        question: "A steady red light faces you at an intersection. What does the manual tell you to do?",
        choices: [
          "Come to a complete stop before the intersection, stop line or crosswalk and stay stopped while the light is red",
          "Slow down and proceed if the way is clear",
          "Stop, then go once you have yielded to cross traffic",
          "Stop only if a pedestrian is waiting to cross",
        ],
        correctIndex: 0,
        explanation:
          "A steady red holds you until the signal changes. Nebraska is specific about where you stop: before the intersection, the stop line or the crosswalk, whichever you reach first.",
        context:
          "Steady red and flashing red are different signals and the manual separates them deliberately. Steady red keeps you there until it turns green. Flashing red is a stop sign in light form: full stop, yield, then proceed when the way is clear.",
        trap: "\"Stop, then go once you have yielded\" is the flashing-red rule. Applying it to a steady red is running the light.",
        excerptKey: "red-light",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3A-1 Color and Types",
        sourceUrl: hb(31),
      },
      {
        id: "ne_s1_03",
        topic: "speed",
        question:
          "You are on a residential street inside a Nebraska city and there is no speed limit sign anywhere. What is the maximum lawful speed?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 1,
        explanation:
          "Nebraska's unposted maximum in a residential district is 25 mph. It is a ceiling, not a target - the basic speed law can still make 25 too fast for the conditions.",
        context:
          "The unposted maximums come as a list: 20 mph in business districts, 25 mph in residential districts, 50 mph on gravel or any roadway that is not dustless, 55 mph on a paved road that is not part of the state highway system, 65 mph on a four-lane divided highway off the state system, 65 mph on the state highway system generally, 70 mph on expressways, super-two highways and freeways in the state system, and 75 mph on rural Interstate.",
        trap: "20 mph is real in Nebraska but it belongs to business districts, not residential ones. Several neighboring states use 30 in residential areas; Nebraska does not.",
        excerptKey: "max-speeds-low",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4C-1 Maximum Speed Limits",
        sourceUrl: hb(52),
      },
      {
        id: "ne_s1_04",
        topic: "licensing",
        question: "How old must you be before Nebraska will issue you a Learner's Permit (LPD)?",
        choices: ["14", "15", "16", "17"],
        correctIndex: 1,
        explanation:
          "The LPD is Nebraska's ordinary learner stage and it starts at 15. You may apply and sit the written test up to 60 days early, but the permit itself cannot be issued before your fifteenth birthday.",
        context:
          "Nebraska runs several permits at once, and the ages are all different. A School Learner's Permit (LPE) starts at 14, a School Permit (SCP) at 14 years and two months, the Learner's Permit (LPD) at 15, the Provisional Operator's Permit (POP) at 16, and the full Class O license at 17.",
        trap: "14 is the age for the School Learner's Permit, which only exists for teens who live or go to school outside a city of 5,000. It is not the general learner stage.",
        excerptKey: "lpd-age",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1C-4 Learner's Permit - Type LPD",
        sourceUrl: hb(3),
        commonlyMissed: true,
      },
      {
        id: "ne_s1_05",
        topic: "rightOfWay",
        question:
          "Two cars reach an uncontrolled intersection at about the same time - no signs, no signals. Who yields?",
        choices: [
          "The driver on the left yields to the driver on the right",
          "The driver on the right yields to the driver on the left",
          "The driver going straight yields to the driver turning",
          "Whoever is on the wider street goes first",
        ],
        correctIndex: 0,
        explanation:
          "With nothing controlling the intersection, Nebraska decides by position: watch for vehicles coming from your right and yield to them.",
        context:
          "This is the fallback rule, and it is also the tiebreaker at a four-way stop. At a four-way stop the first driver to stop goes first, and only when that is unclear do you yield to the driver on your right. At a genuinely uncontrolled intersection there is no arrival rule at all - right beats left.",
        trap: "Reversing it is the classic error. The car on the LEFT is the one that gives way.",
        excerptKey: "row-uncontrolled",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4B-1 Right-of-Way",
        sourceUrl: hb(48),
      },
      {
        id: "ne_s1_06",
        topic: "safety",
        question: "Under Nebraska's occupant protection law, who is required to wear a seat belt?",
        choices: [
          "The driver and every front seat passenger",
          "Only the driver",
          "Everyone in the vehicle, in every seat",
          "Only occupants under 18",
        ],
        correctIndex: 0,
        explanation:
          "The general belt law reaches the driver and front seat passengers. Adults in the back seat are not covered by it, though the separate child restraint law reaches every child under 18 wherever they sit.",
        context:
          "Nebraska stacks two laws. The occupant protection law covers the driver and front seat occupants and is a secondary offense. The child passenger restraint law covers children up to 18 in any seat, and parts of it are primary. If the driver holds a POP or a School Permit, every passenger must be buckled regardless of seat.",
        trap: "\"Everyone, in every seat\" is what the law should say and what many states do say. Nebraska's adult belt rule stops at the front seat.",
        excerptKey: "occupant-protection-law",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2B Occupant Protection Law",
        sourceUrl: hb(26),
        commonlyMissed: true,
      },
      {
        id: "ne_s1_07",
        topic: "signs",
        question: "An orange sign with black letters appears beside the road. What is it telling you?",
        choices: [
          "You are entering or approaching a work zone",
          "A recreation area is ahead",
          "A hospital or rest area is ahead",
          "The road is closed",
        ],
        correctIndex: 0,
        explanation:
          "Nebraska reserves black-on-orange strictly for work zones. Seeing that combination is the cue to slow down, look for workers and expect the lane pattern to change.",
        context:
          "Sign color carries a message on its own: red for stop, yield, do not enter and wrong way; yellow for general warnings; yellow-green for pedestrians, bicycles, playgrounds and schools; pink for incident management; green for guide information; blue for motorist services; white for regulatory signs; orange for work zones; brown for recreation and cultural sites.",
        trap: "Brown is the recreation color. Orange never means a park.",
        excerptKey: "work-zone-orange",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-6 Work Zone Devices",
        sourceUrl: hb(43),
      },
      {
        id: "ne_s1_08",
        topic: "rules",
        question: "How far ahead of a turn does the manual say you must signal?",
        choices: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctIndex: 1,
        explanation:
          "One hundred feet is the figure, and it applies to any move right or left, not just to turns at intersections. The statute says the signal must be given continuously through that last hundred feet.",
        context:
          "The manual also lists when to signal at all: changing lanes, pulling in or out of a parking space, and pulling into traffic from a parking area or an alley. The defensive driving section repeats the hundred-foot figure for any change of direction.",
        trap: "There is no separate, longer signaling distance for highway speeds in Nebraska. The number is 100 feet everywhere.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4E-1 Signaling",
        sourceUrl: hb(54),
      },
      {
        id: "ne_s1_09",
        topic: "impairment",
        question: "What blood alcohol concentration makes it unlawful to drive in Nebraska at any age?",
        choices: [".02%", ".04%", ".08%", ".10%"],
        correctIndex: 2,
        explanation:
          "Point-oh-eight is the line that applies to every driver regardless of age or vehicle. Below it you can still be convicted of driving under the influence on the officer's evidence.",
        context:
          "Nebraska publishes three thresholds and the test asks about all three: .02% or higher if you are under 21, .04% or higher in a commercial vehicle, and .08% or higher for anyone in anything.",
        trap: ".02% is the under-21 number and .04% is the commercial number. Both are real, and both are lower than the general limit.",
        excerptKey: "bac-thresholds",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2A Alcohol, Drugs, and Driving",
        sourceUrl: hb(24),
      },
      {
        id: "ne_s1_10",
        topic: "parking",
        question:
          "You are parking on a street with a curb and your car is facing uphill. Which way do the front wheels go?",
        choices: [
          "Toward the curb, with the parking brake set",
          "Away from the curb, with the parking brake set",
          "Straight ahead, since the curb will hold the car",
          "It makes no difference as long as the car is in gear",
        ],
        correctIndex: 1,
        explanation:
          "Uphill with a curb is the one case where the wheels point away from the curb: if the car rolls back, the front tire catches the curb and stops it.",
        context:
          "The manual states it as a pair. Facing uphill where there is a curb, set the parking brake and turn the wheels away from the curb. In any other situation - downhill, or uphill with no curb at all - turn the wheels toward the curb or the edge of the road so a runaway car heads off the roadway rather than into it.",
        trap: "\"Toward the curb\" is right for every case except this one, which is exactly why this item is on the DMV's own practice exam.",
        excerptKey: "parking-on-hills",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4F-3 Parking on Hills",
        sourceUrl: hb(57),
        commonlyMissed: true,
      },
      {
        id: "ne_s1_11",
        topic: "sharing",
        question:
          "A school bus ahead of you switches on its overhead amber warning lights. What does Nebraska require?",
        choices: [
          "Nothing yet - amber lights are only for the bus driver",
          "Stop immediately behind the bus",
          "Pass quickly before the red lights come on",
          "Slow to 25 mph and be ready to stop",
        ],
        correctIndex: 3,
        explanation:
          "The amber lights are the warning stage. Whether you are meeting the bus or overtaking it, you slow to 25 mph and prepare to stop, because the red lights and the stop arm come next.",
        context:
          "The sequence is fixed. Amber warning lights go on before the bus stops; they stay on until the bus door opens. When the door opens, the red stop lights and the STOP arm activate and you must stop and stay stopped until the arm retracts and the red lights go off.",
        trap: "Treating amber as \"nothing yet\" is how drivers end up committed to a pass just as the stop arm swings out.",
        excerptKey: "bus-amber-25-mph",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6E-1 Overhead Amber Warning Lights",
        sourceUrl: hb(70),
        commonlyMissed: true,
      },
      {
        id: "ne_s1_12",
        topic: "safety",
        question: "How does the manual describe a safe following distance in normal conditions?",
        choices: [
          "One car length for every 10 mph of speed",
          "Two seconds behind the vehicle ahead",
          "Whatever distance lets you read the plate ahead",
          "Three seconds behind the vehicle ahead",
        ],
        correctIndex: 3,
        explanation:
          "Nebraska teaches the three-second rule: pick a fixed point, watch the car ahead pass it, and count. If you reach the same point before three seconds are up you are following too closely.",
        context:
          "Three seconds is the floor, not the goal. The manual says to add one second for each adversity factor - rain, heavy traffic, a load, night. Behind a motorcycle it asks for three or four seconds, and behind a snowplow or other maintenance vehicle working the road the law fixes a flat 100 feet.",
        trap: "Two seconds is the old rule of thumb and it is not what Nebraska prints.",
        excerptKey: "three-second-rule",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5G-1 Defensive Driving",
        sourceUrl: hb(66),
      },
      {
        id: "ne_s1_13",
        topic: "signs",
        question: "What does a yellow diamond-shaped sign tell you?",
        choices: [
          "A law you must obey",
          "Directions and distances",
          "A special condition or hazard is ahead",
          "A service such as fuel or lodging is ahead",
        ],
        correctIndex: 2,
        explanation:
          "Diamonds warn. They call attention to something unexpected ahead - a curve, a crossing, a merge - and the manual's instruction is to slow and proceed with caution.",
        context:
          "Warning signs are advisory about the hazard but not about your speed: an advisory speed plaque under a diamond gives the safe speed for that condition. Regulatory signs, which carry the law itself, are white rectangles.",
        trap: "A diamond never carries a law. If the sign tells you what you must do, it is a white rectangle instead.",
        excerptKey: "shape-diamond",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-2 Sign Shapes",
        sourceUrl: hb(35),
      },
      {
        id: "ne_s1_14",
        topic: "rules",
        question: "When must headlights be on in Nebraska?",
        choices: [
          "Only when it is fully dark",
          "Only on highways outside city limits",
          "From sunset to sunrise",
          "Whenever the vehicle is moving",
        ],
        correctIndex: 2,
        explanation:
          "Sunset to sunrise is the manual's rule and the statute's starting point. Dusk counts, which surprises people who wait for full dark.",
        context:
          "The statute adds a second trigger the manual leaves out of that sentence: lights are also required any other time there is not enough light to make people and vehicles clearly discernible 500 feet ahead. The defensive driving section adds a third habit - use headlights whenever the windshield wipers are running.",
        trap: "Parking lights do not satisfy this. The manual says driving on parking lights alone is unlawful.",
        excerptKey: "headlights-sunset-sunrise",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5B Driving at Night",
        sourceUrl: hb(61),
      },
      {
        id: "ne_s1_15",
        topic: "signals",
        question: "You are at a red light and want to turn right. What does Nebraska allow?",
        choices: [
          "Turn after a complete stop, unless a sign at the intersection prohibits it",
          "Turn without stopping if nothing is coming",
          "Turn only if a green arrow appears",
          "Right turns on red are not permitted in Nebraska",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is legal after a full stop unless a sign at that intersection forbids it, and you still yield to pedestrians in the crosswalk and to traffic already using the intersection.",
        context:
          "Left on red is also legal in Nebraska, but only from a one-way street onto another one-way street, and it can be signed away at particular locations. Turning on a RED ARROW is never allowed.",
        trap: "Rolling through is the violation people are actually cited for. The manual says failure to come to a complete stop before turning is itself an offense.",
        excerptKey: "right-turn-on-red",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3A-2 Turning on Red",
        sourceUrl: hb(32),
      },
      {
        id: "ne_s1_16",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with its siren and lights going. What does the manual tell you to do?",
        choices: [
          "Speed up to clear the intersection ahead",
          "Stop where you are, in your lane",
          "Move as far right as you safely can, stop clear of any intersection, and stay stopped until it passes",
          "Pull to whichever side has more room",
        ],
        correctIndex: 2,
        explanation:
          "You yield, pull parallel to the right edge or curb, stop clear of any intersection, and remain stopped until the emergency vehicle has passed - then check for a second one before moving.",
        context:
          "Stopping inside an intersection blocks the very path the emergency vehicle needs. If you are already in one, clear it first, then pull right and stop. Funeral procession escort vehicles count as emergency vehicles for this rule.",
        trap: "Stopping dead in the travel lane is worse than useless: it leaves the ambulance nowhere to go.",
        excerptKey: "st-emergency-vehicle",
        sourceLabel: "Nebraska Revised Statute 60-6,151 - Operation of vehicles upon the approach of emergency vehicles",
        sourceUrl: `${NEB}60-6,151`,
      },
      {
        id: "ne_s1_17",
        topic: "licensing",
        question: "How many questions are on the Nebraska Class O written test, and how many may you miss?",
        choices: [
          "20 questions, may miss 4",
          "25 questions, may miss 5",
          "30 questions, may miss 6",
          "40 questions, may miss 8",
        ],
        correctIndex: 1,
        explanation:
          "The Class O written test is 25 questions and you may miss five, which is the 80 percent pass mark. Miss a sixth and you have failed.",
        context:
          "A pass is good for six months. The test is delivered on a tablet, with audio available and both the written and audio versions offered in English and Spanish. There is also a 24-question non-verbal picture test, on which you may miss four, for applicants who read neither language comfortably.",
        trap: "A failed test cannot be retaken the same day. Tests one through three need one day between them; the fourth is scheduled a week out.",
        excerptKey: "dle-class-o-25",
        sourceLabel: "Nebraska DMV - Driver Licensing Examiner Policies and Procedures Manual, Class O Written Test",
        sourceUrl: `${DLE}#page=32`,
        commonlyMissed: true,
      },
      {
        id: "ne_s1_18",
        topic: "sharing",
        question: "How much room must a driver leave when overtaking a bicycle in Nebraska?",
        choices: [
          "At least three feet of clearance",
          "Enough to avoid contact",
          "At least five feet of clearance",
          "A full lane, always",
        ],
        correctIndex: 0,
        explanation:
          "Three feet is the legal minimum, and you have to hold that clearance until you are safely past. If three feet is not available, the manual says to slow down and wait.",
        context:
          "The same three-foot figure appears twice more: the shared-lane marking section applies it to bicyclists, and the pedestrian section applies it to people walking on the roadway. A bicyclist has the same duties and rights as a driver under Neb. Rev. Stat. 60-6,314.",
        trap: "\"Enough to avoid contact\" is not a standard. Nebraska prints a number and it is three feet.",
        excerptKey: "bicycle-three-feet-law",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6B Bicyclists",
        sourceUrl: hb(69),
      },
      {
        id: "ne_s1_19",
        topic: "rules",
        question: "A double solid yellow line runs down the middle of the road. What may you do?",
        choices: [
          "Pass, if the way ahead is clear",
          "Cross it to turn left into a driveway or alley, or to avoid an obstruction",
          "Pass only on the right",
          "Cross it freely, since yellow lines are advisory",
        ],
        correctIndex: 1,
        explanation:
          "Double solid yellow forbids passing in both directions. The manual names the only lawful crossings: making a left turn, and avoiding an obstruction - turning into or out of an alley, private road or driveway unless signs say otherwise.",
        context:
          "Yellow lines separate opposing traffic. A broken yellow line on your side means you may pass when the way is clear; a solid yellow line on your side means you may not, even if the other side is broken.",
        trap: "The DMV's own practice exam asks whether you may pass with a solid yellow line on your side. The answer is no.",
        excerptKey: "double-yellow-crossings",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3C-1 Yellow Center Line Markings",
        sourceUrl: hb(44),
      },
      {
        id: "ne_s1_20",
        topic: "speed",
        question: "What is the minimum speed on a Nebraska interstate?",
        choices: [
          "30 mph",
          "40 mph",
          "45 mph",
          "There is no minimum",
        ],
        correctIndex: 1,
        explanation:
          "Forty miles per hour is the floor on a freeway, and the manual states it flatly for the interstate. Below that you are impeding traffic, which is its own offense.",
        context:
          "The statute allows the 40 mph floor to be lowered when weather, visibility or traffic makes slower driving necessary for safety, and emergency vehicles are exempt. Vehicles entering or leaving on an acceleration or deceleration lane must meet the minimum while they are on the freeway roadway.",
        trap: "This is one of the few multiple-choice items on the DMV's own published practice exam, and the published answer key gives 40 mph.",
        excerptKey: "interstate-min-speed",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5A-2 Driving on the Interstate",
        sourceUrl: hb(60),
      },
      {
        id: "ne_s1_21",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Nebraska?",
        choices: [
          "No closer than 5 feet",
          "No closer than 15 feet",
          "No closer than 10 feet",
          "No closer than 25 feet",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet. The statute puts the hydrant in the same list as the crosswalk and the stop sign, and the DMV's own practice exam asks this one directly.",
        context:
          "The clustered distances are worth learning together: 15 feet from a fire hydrant, 20 feet from a crosswalk at an intersection, 30 feet from a flashing signal, stop sign, yield sign or other traffic control device, and 50 feet from the nearest rail of a railroad crossing.",
        trap: "Ten feet is the common guess and it is wrong in Nebraska.",
        excerptKey: "st-park-hydrant",
        sourceLabel: "Nebraska Revised Statute 60-6,166 - Stopping, standing, or parking prohibited",
        sourceUrl: `${NEB}60-6,166`,
        commonlyMissed: true,
      },
      {
        id: "ne_s1_22",
        topic: "safety",
        question: "Where should children age 12 and younger ride for maximum safety?",
        choices: [
          "In the front passenger seat, where you can watch them",
          "Anywhere, as long as they are belted",
          "In the rear seat",
          "In the front seat with the airbag switched off",
        ],
        correctIndex: 2,
        explanation:
          "The manual's air bag section is blunt: for maximum safety, children age 12 and younger should ride in the rear seat. An air bag that deploys can injure a small body even in a low-speed crash.",
        context:
          "Related rules run alongside it. Never put a rear-facing infant seat in the front passenger seat of an air-bag-equipped vehicle. If a forward-facing child seat has to go in an air bag position, slide the vehicle seat as far back as it goes. And children up to eight must be in a child restraint in a seat other than the front, if a rear seat with a restraint system is available.",
        trap: "Belting a small child into the front seat does not solve the air bag problem. The rule is about where the bag deploys, not about the belt.",
        excerptKey: "airbag-rear-seat-12",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2B Air Bags",
        sourceUrl: hb(25),
      },
      {
        id: "ne_s1_23",
        topic: "emergencies",
        question:
          "A deer steps into the road in front of you and a collision looks likely. What does Nebraska tell you to do?",
        choices: [
          "Swerve into the oncoming lane if it is clear",
          "Brake firmly, steer to keep control, and stop as safely as you can",
          "Swerve onto the shoulder",
          "Accelerate to clear the animal's path",
        ],
        correctIndex: 1,
        explanation:
          "Nebraska's own campaign name says it: don't veer for deer. In a passenger vehicle you are more likely to be killed or injured by the swerve than by the deer, so brake, steer for control, and stop.",
        context:
          "The manual asks you to lower the odds before it comes to that: watch from dusk to dawn, spring and fall, near waterways and wooded ground; slow down in marked deer caution zones; drive within the range of your headlights; and remember deer travel in groups, so a second one is usually behind the first.",
        trap: "Swerving is the instinct and it is what kills people - it puts you into oncoming traffic or off the road out of control.",
        excerptKey: "dont-veer-for-deer",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2D Don't Veer for Deer",
        sourceUrl: hb(26),
      },
      {
        id: "ne_s1_24",
        topic: "signs",
        question: "A yellow pennant-shaped sign stands on the LEFT side of the road. What does it mark?",
        choices: [
          "The start of a no-passing zone",
          "A school crossing",
          "A railroad crossing",
          "A divided highway ahead",
        ],
        correctIndex: 0,
        explanation:
          "The pennant is used for one thing in Nebraska - the beginning of a no-passing zone - and it is posted on the left so you see it from the lane you would be passing into.",
        context:
          "It usually accompanies a solid yellow line on your side of the center. Passing is also unlawful within 100 feet of an intersection or a railroad crossing, and on any hill, curve or bridge where vision is obstructed.",
        trap: "The pentagon marks schools and the crossbuck marks railroads. The pennant is the odd shape out, and its position on the left is the giveaway.",
        excerptKey: "shape-pennant",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-2 Sign Shapes",
        sourceUrl: hb(35),
      },
      {
        id: "ne_s1_25",
        topic: "impairment",
        question: "Nebraska's \"zero tolerance\" law applies to drivers of what age?",
        choices: [
          "Under 21",
          "Under 16",
          "Under 18",
          "Under 25",
        ],
        correctIndex: 0,
        explanation:
          "Under 21. For those drivers it is a violation to operate a motor vehicle with alcohol in the system at all, and the measurable threshold is .02 percent.",
        context:
          "A first zero-tolerance conviction means the court impounds the permit or license for 30 days, and the conviction sits on the driving record for 90 days before it is deleted. A refusal at that age is worse: 90 days impounded and 120 days on the record.",
        trap: "Turning 19 or moving out of the house changes nothing. The line is 21, and an under-21 driver at .08 or above is prosecuted as a full DUI on top of it.",
        excerptKey: "zero-tolerance-under-21",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2A Alcohol, Drugs, and Driving",
        sourceUrl: hb(24),
      },
      {
        id: "ne_s1_26",
        topic: "rules",
        question: "You reach a railroad crossing where a stop is required and there is no stop line. Where do you stop?",
        choices: [
          "At least 5 feet from the nearest rail",
          "Anywhere the crossbuck is still visible",
          "Not less than 50 feet and not more than 100 feet from the nearest rail",
          "Not less than 15 feet and not more than 50 feet from the nearest rail",
        ],
        correctIndex: 3,
        explanation:
          "Between 15 and 50 feet from the nearest rail. Closer and a passing train's overhang or load can reach you; further and you cannot see down the track.",
        context:
          "You must stop for any of these: a signal showing a train coming, a lowered gate, a flagman, a train or on-track equipment visible or audible and close enough to be hazardous, or a stop sign at the crossing. If there is a painted stop line, stop at the line instead.",
        trap: "Never go around a lowered gate. The manual puts that in capitals - it is dangerous and it is against the law.",
        excerptKey: "rr-stop-15-50",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4G-2 When Approaching a Railroad Crossing",
        sourceUrl: hb(58),
      },
      {
        id: "ne_s1_27",
        topic: "sharing",
        question: "How much of the lane does the manual say to leave a motorcyclist?",
        choices: [
          "A full lane width - do not share the lane",
          "Half the lane, so you can share it",
          "Three feet, the same as a bicycle",
          "Whatever is left after your own vehicle",
        ],
        correctIndex: 0,
        explanation:
          "A motorcycle is a vehicle with the same rights as any other, and it needs the whole lane to maneuver. Nebraska tells drivers plainly not to share a lane with one.",
        context:
          "The manual asks for three or four seconds of following distance behind a motorcycle, and warns that motorcycle turn signals usually are not self-cancelling - a flashing signal may just be one somebody forgot to switch off.",
        trap: "There looks to be room for a car and a bike side by side. The room is what the rider needs to swerve around a pothole.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6A-1 Seeing and Understanding Motorcycles",
        sourceUrl: hb(68),
      },
      {
        id: "ne_s1_28",
        topic: "signals",
        question: "A steady yellow light comes on as you approach an intersection. What does the manual say?",
        choices: [
          "Speed up to clear the intersection before the red",
          "Stop where you are, even if you are already in the intersection",
          "Treat it exactly like a flashing yellow and proceed with caution",
          "If you have not entered the intersection, bring the vehicle to a safe stop",
        ],
        correctIndex: 3,
        explanation:
          "Yellow warns that the light is about to change. If you have not entered the intersection, stop safely. If you are already in it, keep moving and clear it.",
        context:
          "The statute puts it the same way: on a steady yellow you stop before the nearest crosswalk, unless that stop cannot be made in safety, in which case you may drive cautiously through.",
        trap: "The manual says outright that speeding up to \"beat the light\" is unlawful. It is not a grey area in Nebraska.",
        excerptKey: "yellow-light",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3A-1 Color and Types",
        sourceUrl: hb(31),
      },
      {
        id: "ne_s1_29",
        topic: "licensing",
        question:
          "You move to Nebraska holding a valid license from another state. How long do you have to get a Nebraska license?",
        choices: ["10 days", "30 days", "60 days", "90 days"],
        correctIndex: 1,
        explanation:
          "Thirty days. Any new resident with a valid out-of-state license must obtain a Nebraska license within that window.",
        context:
          "A new resident 18 or older who surrenders a valid out-of-state license takes a vision test, and the drive test is given at the licensing staff's discretion. If the out-of-state license cannot be surrendered or has expired, the written test is required as well.",
        trap: "Sixty days is the deadline for reporting a name or address change, not the deadline for a new resident's license.",
        excerptKey: "new-resident-30-days",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1A Who Must Have a Nebraska License",
        sourceUrl: hb(1),
      },
      {
        id: "ne_s1_30",
        topic: "parking",
        question:
          "You have to stop at the roadside in an emergency on a two-way street. How should the vehicle end up?",
        choices: [
          "Within 12 inches of and parallel to the curb, on the right side of the road",
          "Facing traffic so oncoming drivers can see you",
          "At an angle, to make the car more visible",
          "Half on the sidewalk, out of the travel lane",
        ],
        correctIndex: 0,
        explanation:
          "Signal, get as far off the road as you can, and park within 12 inches of the curb or road edge, parallel to it, on the right side unless the street is one-way.",
        context:
          "The manual's roadside stop checklist continues from there: make sure the vehicle cannot move, put it in the proper parking gear, set the parking brake, switch on the four-way flashers, turn off the engine and take the keys, and check traffic before you open the door.",
        trap: "Parking on the sidewalk is on the manual's list of places you may never stop, along with intersections and crosswalks.",
        excerptKey: "roadside-stop-12-inches",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4F-1 Emergency Roadside Stop",
        sourceUrl: hb(56),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Sections 3 and 4 of the manual, where most of the exam actually lives: signals, markings, right of way, passing, turning and the speed limits Nebraska applies when nothing is posted.",
    questions: [
      {
        id: "ne_s2_01",
        topic: "signals",
        question: "The traffic signal at an intersection is completely dark because of a power failure. How do you treat it?",
        choices: [
          "As a green light for the busier street",
          "As a yield sign",
          "As a stop sign",
          "Proceed without stopping if no one is coming",
        ],
        correctIndex: 2,
        explanation:
          "A dark signal is a stop sign. The manual adds that with no officer, flagger or other control in place the intersection is treated as an all-way stop.",
        context:
          "There is one deliberate exception, and it is a recent addition: a pedestrian hybrid beacon at a midblock crosswalk goes dark between activations, and the statute requiring a stop at a dark signal does not apply to those.",
        trap: "Assuming the bigger road keeps priority is exactly how two drivers arrive at the middle at once.",
        excerptKey: "dark-signal-stop-sign",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3A-1 Color and Types",
        sourceUrl: hb(31),
        commonlyMissed: true,
      },
      {
        id: "ne_s2_02",
        topic: "rules",
        question: "White lines painted on the pavement separate what?",
        choices: [
          "Lanes of traffic going in the same direction",
          "Traffic moving in opposite directions",
          "The roadway from the shoulder only",
          "Parking spaces from travel lanes only",
        ],
        correctIndex: 0,
        explanation:
          "White separates traffic going the same way; yellow separates traffic going opposite ways. That single distinction answers a large share of pavement-marking questions.",
        context:
          "Broken white lines may be crossed with care. Solid white lines mark turn lanes and discourage lane changes near intersections, and the solid white line beside a freeway entrance ramp is there to keep you from merging too early.",
        trap: "This exact statement is item 23 on the DMV's own practice exam, marked true.",
        excerptKey: "practice-white-lines",
        sourceLabel: "Nebraska Driver's Manual - Nebraska Driver's Practice Exam, question 23",
        sourceUrl: hb(76),
      },
      {
        id: "ne_s2_03",
        topic: "rightOfWay",
        question: "Four cars reach a four-way stop at different times. Who goes first?",
        choices: [
          "The driver on the far right of the group",
          "The driver who stopped first",
          "The driver going straight rather than turning",
          "The driver of the largest vehicle",
        ],
        correctIndex: 1,
        explanation:
          "All four have a duty to stop and then a duty to use ordinary care. Common courtesy, as the manual puts it, is that the driver who stops first goes first.",
        context:
          "Only when that is genuinely unclear does the tiebreaker apply: if in doubt, yield to the driver on your right. The manual closes with the sentence worth remembering on test day and after it - never insist on the right of way and risk a collision.",
        trap: "The vehicle-on-the-right rule is real, but at a four-way stop it settles ties. It is not the main rule.",
        excerptKey: "practice-four-way-stop",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4B-4 At intersections with four-way stops",
        sourceUrl: hb(49),
      },
      {
        id: "ne_s2_04",
        topic: "speed",
        question: "Nothing is posted on a gravel road in rural Nebraska. What is the maximum lawful speed?",
        choices: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 1,
        explanation:
          "Fifty. Nebraska sets a separate ceiling for any roadway that is gravel or not dustless, ten miles per hour below the paved county-road figure.",
        context:
          "The paved comparison is 55 mph on a dustless roadway that is not part of the state highway system. Gravel is the only surface Nebraska singles out this way, and the manual's own introduction flags it: paved roads give way to gravel here.",
        trap: "Applying the 55 mph paved figure to gravel is the mistake, and it is one of the few genuinely Nebraska-specific numbers on the test.",
        excerptKey: "max-speeds-low",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4C-1 Maximum Speed Limits",
        sourceUrl: hb(52),
        commonlyMissed: true,
      },
      {
        id: "ne_s2_05",
        topic: "rules",
        question: "You are turning left from a two-way street where no center turn lane is marked. Which lane do you use?",
        choices: [
          "Any lane, as long as you signal",
          "From the leftmost lane lawfully available, into the leftmost lane lawfully available",
          "The right lane, then cut across",
          "From the center of the roadway, into whichever lane is clear",
        ],
        correctIndex: 1,
        explanation:
          "Left from left, into left. Nebraska states both halves: you start from the left lane that is lawfully available to you and you finish in the left lane that is lawfully available on the new street.",
        context:
          "The right-turn rule is the mirror image and simpler: a right turn is made as close as practical to the right side of the road. Where double turning lanes exist, the lane nearest the curb turns into the lane nearest the curb.",
        trap: "Finishing in the far lane is a common drive-test deduction and it is also a rules question. The lane you arrive in is part of the rule, not a preference.",
        excerptKey: "left-turn-lane",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4E-4 Turning",
        sourceUrl: hb(55),
      },
      {
        id: "ne_s2_06",
        topic: "signs",
        question: "What does a blue and white sign along a Nebraska highway indicate?",
        choices: [
          "A recreation area",
          "A regulatory instruction",
          "Motorist services such as hospitals, gas, food or lodging",
          "Distance and direction to the next town",
        ],
        correctIndex: 2,
        explanation:
          "Blue is the services color. Nebraska uses blue and white signs to point drivers toward hospitals, fuel, food and lodging.",
        context:
          "Green and white signs are the guide signs - directions, distances, and the diagrams that show exit and entrance movements at interchanges. Brown belongs to recreation and cultural sites.",
        trap: "Green and blue both look like \"information\" signs. Green tells you where; blue tells you what is available.",
        excerptKey: "service-signs",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-5 Special Signs",
        sourceUrl: hb(42),
      },
      {
        id: "ne_s2_07",
        topic: "rules",
        question: "Where is passing specifically unlawful in relation to an intersection?",
        choices: [
          "Within 50 feet",
          "Within 75 feet",
          "Within 200 feet",
          "Within 100 feet",
        ],
        correctIndex: 3,
        explanation:
          "One hundred feet. The manual lists intersections and railroad crossings together at that distance, and the statute repeats the figure.",
        context:
          "The rest of the manual's list of unlawful passing: any marked no-passing zone, exceeding the posted limit while passing, passing a school bus with its red lights on and stop arm out, and passing on any hill, curve or bridge where vision is obstructed.",
        trap: "It is the same 100 feet as the signaling distance, which makes it easy to mix the two rules up rather than the two numbers.",
        excerptKey: "passing-100-feet",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4D-1 Passing",
        sourceUrl: hb(53),
      },
      {
        id: "ne_s2_08",
        topic: "rightOfWay",
        question: "You are entering a single-lane roundabout. Who do you yield to?",
        choices: [
          "Traffic approaching on your right",
          "Nobody, if you are traveling straight through",
          "Only large trucks",
          "Traffic approaching on your left that is already in the roundabout",
        ],
        correctIndex: 3,
        explanation:
          "Traffic in a Nebraska roundabout runs counter-clockwise, so vehicles already circulating come at you from the left. You yield to them and enter on a safe gap.",
        context:
          "The full sequence: slow to the posted advisory speed, yield to pedestrians and bicyclists in the crosswalk on the way in, yield to circulating traffic on your left, enter on a gap, signal right as you approach your exit, and yield to pedestrians and bicyclists again on the way out.",
        trap: "The yield-to-the-right habit from ordinary intersections is exactly backwards in a roundabout.",
        excerptKey: "roundabout-counterclockwise",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4B-5 Rules for Driving Roundabouts",
        sourceUrl: hb(49),
      },
      {
        id: "ne_s2_09",
        topic: "signals",
        question: "A red \"X\" is lit over the lane you are in. What does it mean?",
        choices: [
          "The lane is about to reverse direction",
          "The lane is reserved for buses",
          "Stop and wait for the signal to change",
          "The lane is closed to you - never drive under it",
        ],
        correctIndex: 3,
        explanation:
          "A red X means that lane is not yours. The manual's instruction is absolute: never drive in a lane under a red X signal.",
        context:
          "Lane use signals control reversible lanes, which change direction with the rush hour. A steady yellow X means move out of the lane as soon as it is safe, because a red X is coming. A downward green arrow means the lane is open to you.",
        trap: "Waiting under a red X for it to change is the wrong response - the lane may be carrying oncoming traffic.",
        excerptKey: "lane-use-red-x",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3A-3 Lane Use Signals",
        sourceUrl: hb(32),
      },
      {
        id: "ne_s2_10",
        topic: "sharing",
        question:
          "A pedestrian is crossing in a marked crosswalk and the car in the next lane has stopped for them. What may you do?",
        choices: [
          "Stop as well - you may not overtake and pass a vehicle stopped for a pedestrian",
          "Pass the stopped car if your own lane is clear",
          "Sound your horn to warn the pedestrian",
          "Proceed at walking pace",
        ],
        correctIndex: 0,
        explanation:
          "You stop too. The stopped vehicle is hiding the pedestrian from you, and both the manual and the statute forbid overtaking and passing it.",
        context:
          "The underlying duty is broader. When signals are not in place or not operating, a driver yields to a pedestrian in a crosswalk who is in the driver's lane or the lane immediately next to it, and yields by coming to a complete stop.",
        trap: "This is one of the highest-consequence rules on the test: the multiple-threat crash it prevents is the one that kills pedestrians in marked crosswalks.",
        excerptKey: "st-ped-no-pass",
        sourceLabel: "Nebraska Revised Statute 60-6,153 - Pedestrians' right-of-way in crosswalk",
        sourceUrl: `${NEB}60-6,153`,
        commonlyMissed: true,
      },
      {
        id: "ne_s2_11",
        topic: "speed",
        question: "Nothing is posted in a Nebraska business district. What is the maximum lawful speed?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 1,
        explanation:
          "Twenty. The business district is the lowest of Nebraska's unposted maximums, five below the residential figure.",
        context:
          "The manual gives the maximums as a single ordered list and the statute uses the same numbers word for word, spelled out: twenty in any business district, twenty-five in any residential district, and upward from there by road type.",
        trap: "Business and residential are easy to swap. Business is the lower number, which is the opposite of what most people guess.",
        excerptKey: "st-speed-low",
        sourceLabel: "Nebraska Revised Statute 60-6,186 - Speed; maximum limits; signs",
        sourceUrl: `${NEB}60-6,186`,
      },
      {
        id: "ne_s2_12",
        topic: "safety",
        question: "How far ahead does the manual say a driver should be scanning?",
        choices: [
          "2 to 3 seconds",
          "5 seconds",
          "10 to 15 seconds",
          "As far as the headlights reach",
        ],
        correctIndex: 2,
        explanation:
          "Ten to fifteen seconds. That is far enough that a developing problem is still a decision rather than a reaction.",
        context:
          "The scan is only part of it. The manual asks you to look to the sides where cars, people or animals may cross your path, to check behind at least every ten seconds, and to glance over your shoulder into the blind spot before every lane change.",
        trap: "Ten to fifteen seconds is a distance in time, not a car count. At highway speed it is a quarter of a mile.",
        excerptKey: "scan-10-15-seconds",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5G-1 Defensive Driving",
        sourceUrl: hb(66),
      },
      {
        id: "ne_s2_13",
        topic: "signs",
        question:
          "A sign shows a circle with a slash through a symbol. What is the sign telling you?",
        choices: [
          "The symbol is a warning of something ahead",
          "The symbol shows a service available nearby",
          "The symbol shows what is prohibited",
          "The symbol applies only to trucks",
        ],
        correctIndex: 2,
        explanation:
          "A red circle with a slash means NO, and the symbol inside names the thing you may not do - a left turn, a U-turn, an entry.",
        context:
          "These are regulatory signs, which carry the law itself rather than a warning. The manual's regulatory list also covers the stop sign, the yield sign, the speed limit sign, Wrong Way and Do Not Enter, One Way, No Parking, Keep Right and Slower Traffic Keep Right.",
        trap: "A slash sign never merely advises. Ignoring one is a violation, not a judgement call.",
        excerptKey: "reg-red-circle-slash",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-3 Regulatory Signs",
        sourceUrl: hb(36),
      },
      {
        id: "ne_s2_14",
        topic: "rules",
        question: "The center lane between opposing traffic is marked with a solid yellow line beside a broken yellow line on each side. What is it for?",
        choices: [
          "Passing slower traffic in either direction",
          "Left turns only, shared with traffic from the opposite direction",
          "Emergency vehicles only",
          "A reversible lane that changes direction",
        ],
        correctIndex: 1,
        explanation:
          "That is the two-way left turn lane. Either direction may enter it to turn left, which is why you use it with caution - a car may be sitting in it facing you.",
        context:
          "The one thing it is never for is passing. The manual says so twice, once under yellow lane line markings and once under other pavement markings.",
        trap: "It is a tempting merge or passing lane because it is usually empty. Using it to pass is prohibited.",
        excerptKey: "shared-left-turn-caution",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3C-2 Yellow Lane Line Markings",
        sourceUrl: hb(45),
      },
      {
        id: "ne_s2_15",
        topic: "emergencies",
        question:
          "You are on a multi-lane interstate and a police car is stopped on the shoulder ahead with its lights flashing. What does Nebraska's Move Over law require?",
        choices: [
          "Move into a lane at least one moving lane away from the stopped vehicle if you can, and if you cannot, slow down and pass at a safe speed",
          "Sound your horn as you pass",
          "Stop until the officer waves you through",
          "Nothing, as long as you stay in your own lane",
        ],
        correctIndex: 0,
        explanation:
          "Move over a lane if a lane is there. If moving over is not reasonably possible, you reduce speed, hold a safe speed for the conditions, and go past with due care.",
        context:
          "Nebraska actually has two Move Over sections, not one. Neb. Rev. Stat. 60-6,378 covers controlled-access highways and 60-6,378.01 covers every other road, where the duty is to slow below the posted limit, move over if possible, and be prepared to stop. Both reach far past police cars: tow trucks, utility and highway maintenance vehicles, and solid waste or recycling collection vehicles are all covered.",
        trap: "The manual describes only the controlled-access half. A learner who reads the book alone will not know the rule applies on an ordinary city street too.",
        excerptKey: "st-move-over-other-roads",
        sourceLabel: "Nebraska Revised Statute 60-6,378.01 - Duties of drivers approaching stopped vehicles",
        sourceUrl: `${NEB}60-6,378.01`,
        commonlyMissed: true,
      },
      {
        id: "ne_s2_16",
        topic: "licensing",
        question: "How long is a Nebraska Learner's Permit (LPD) valid?",
        choices: [
          "Six months",
          "Two years",
          "One year",
          "Until your seventeenth birthday",
        ],
        correctIndex: 2,
        explanation:
          "One year from the date of issuance. The School Learner's Permit is the six-month one; the LPD runs a full year.",
        context:
          "The other expirations are worth knowing as a set: the School Permit expires at 16 years and three months, the Provisional Operator's Permit expires on the eighteenth birthday, and licenses issued to anyone under 21 expire on the twenty-first birthday.",
        trap: "Six months is the LPE, not the LPD. It is also the shelf life of a passed written test.",
        excerptKey: "lpd-expiration",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1C-4 Learner's Permit - Type LPD",
        sourceUrl: hb(4),
      },
      {
        id: "ne_s2_17",
        topic: "parking",
        question: "How close to a crosswalk at an intersection may you stand or park a vehicle?",
        choices: [
          "No closer than 20 feet",
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet. Parking closer hides a pedestrian stepping off the curb from every driver approaching the intersection.",
        context:
          "The neighboring figures in the same statute are 15 feet from a fire hydrant and 30 feet from a flashing signal, stop sign, yield sign or other traffic control device at the side of the road. The manual repeats the 20 and 30 foot figures but its printed page 57 gives no readable number for the hydrant.",
        trap: "Fifteen and twenty are adjacent items in the same list. The hydrant is the smaller number; the crosswalk is the larger.",
        excerptKey: "no-park-20-crosswalk",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4F-2 Where Not to Park or Stop a Vehicle",
        sourceUrl: hb(57),
      },
      {
        id: "ne_s2_18",
        topic: "safety",
        question: "You are following another car at night on an open highway. When must you dim your high beams?",
        choices: [
          "Only when a vehicle is coming toward you",
          "When you are within 500 feet of any vehicle",
          "Only inside city limits",
          "When you are within 200 feet of the vehicle ahead, and when meeting oncoming vehicles",
        ],
        correctIndex: 3,
        explanation:
          "Two hundred feet behind another vehicle, and any time you meet one coming the other way. High beams are for open road with nobody in front of you.",
        context:
          "The statute makes the following case an offense in its own right: within two hundred feet to the rear of another vehicle you must dim or tilt the beams down. If oncoming lights blind you, the manual says to look toward the right edge of the road rather than at the lights.",
        trap: "People remember the oncoming half and forget the following half. Your high beams in a driver's mirrors are just as blinding.",
        excerptKey: "high-beams-200-feet",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5B Driving at Night",
        sourceUrl: hb(61),
      },
      {
        id: "ne_s2_19",
        topic: "sharing",
        question:
          "A snowplow is working ahead of you on a rural highway with its amber lights flashing. How far back must you stay?",
        choices: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctIndex: 1,
        explanation:
          "A hundred feet, except when you are actually passing. Flying sand, ice and snow chunks damage vehicles, and the plow can skid under the weight it is pushing.",
        context:
          "The statute extends the same hundred-foot rule outside business and residential districts to any vehicle displaying flashing amber or white lights. The manual also warns that snow removal equipment throws up snow that hides the road, so you pass only when you can clearly see ahead.",
        trap: "The three-second rule does not cover this. The plow gets a fixed distance, not a time gap.",
        excerptKey: "snow-removal-100-feet",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6D Snow and Ice Removal Operations",
        sourceUrl: hb(70),
      },
      {
        id: "ne_s2_20",
        topic: "signals",
        question: "You are facing a steady RED ARROW. May you turn in the direction of the arrow after stopping?",
        choices: [
          "Yes, after a complete stop, like any red light",
          "No - turning on a red arrow is prohibited",
          "Yes, but only from a one-way street",
          "Only if a sign says turns on red are permitted",
        ],
        correctIndex: 1,
        explanation:
          "No. Nebraska treats the red arrow as a hard stop for that movement: you stay put until an indication to proceed appears.",
        context:
          "This is the exception that makes the turn-on-red rules worth reading as a group. A circular red allows a right turn after a stop, and a left turn from one one-way street onto another. A red arrow allows neither.",
        trap: "The arrow looks like a lesser signal because it controls only one movement. It is actually the stricter one.",
        excerptKey: "no-turn-on-red-arrow",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3A-2 Turning on Red",
        sourceUrl: hb(32),
        commonlyMissed: true,
      },
      {
        id: "ne_s2_21",
        topic: "rightOfWay",
        question: "You are pulling out of a parking lot across a sidewalk onto a street. What does the manual require?",
        choices: [
          "Yield only to vehicles, since the sidewalk is not a roadway",
          "Stop before driving onto the sidewalk area, then proceed slowly, yielding to pedestrians and approaching vehicles",
          "Sound the horn and proceed",
          "Nothing, if there is no stop sign at the exit",
        ],
        correctIndex: 1,
        explanation:
          "You stop before the sidewalk, not at the street. The pedestrian on that sidewalk has no signal and no crosswalk, and your nose is about to cross their path.",
        context:
          "The rule covers alleys, driveways and parking lots alike, and the statute adds the general one: a driver entering a roadway from a private road or driveway yields to all approaching traffic.",
        trap: "Creeping to the curb line before stopping puts the front of the car in the walkway, which is where the rule is aimed.",
        excerptKey: "leaving-driveway",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4B-8 Right-of-Way",
        sourceUrl: hb(51),
      },
      {
        id: "ne_s2_22",
        topic: "impairment",
        question: "Who may have an open container of alcohol inside a vehicle on a Nebraska public roadway?",
        choices: [
          "Passengers, but not the driver",
          "Nobody - the rule covers drivers and passengers alike",
          "The driver, if it is unopened",
          "Anyone, if the vehicle is parked",
        ],
        correctIndex: 1,
        explanation:
          "Nobody. Nebraska's open container rule reaches consumption and possession, by drivers and by passengers, on any public roadway or public parking area.",
        context:
          "The statute defines a highway as the road or street including the entire area within the right-of-way, so pulling onto the shoulder does not put you outside it. An open container means any receptacle holding alcohol whose seal is broken or whose contents are partly gone.",
        trap: "\"The passenger was drinking, not me\" is not a defense in Nebraska. The manual says this includes both drivers and passengers.",
        excerptKey: "open-container",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2A Alcohol, Drugs, and Driving",
        sourceUrl: hb(24),
      },
      {
        id: "ne_s2_23",
        topic: "signs",
        question: "A five-sided sign appears beside the road. What is it about?",
        choices: [
          "A school zone or school crossing",
          "A railroad crossing",
          "A no-passing zone",
          "A hospital",
        ],
        correctIndex: 0,
        explanation:
          "The pentagon is Nebraska's school shape. It marks school zones and warns of crossings where school children cross the roadway.",
        context:
          "School signs also use the yellow-green background the manual reserves for pedestrians, bicycles, playgrounds, schools and school buses. The School Advance Crossing sign warns that a crossing is ahead; the School Crossing sign stands at the crossing itself, where crossing guards direct traffic.",
        trap: "The crossbuck, not the pentagon, marks a railroad. The pentagon has no other job in Nebraska.",
        excerptKey: "warn-school-crossing",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-4 Warning Signs",
        sourceUrl: hb(40),
      },
      {
        id: "ne_s2_24",
        topic: "rules",
        question: "What does the manual say about changing lanes inside an intersection?",
        choices: [
          "Do not do it",
          "It is allowed if you signal first",
          "It is allowed only at low speed",
          "It is allowed on multi-lane roads",
        ],
        correctIndex: 0,
        explanation:
          "The instruction is flat: do not change lanes in an intersection. Other drivers read your position as your intent, and there is no room to recover if they read it wrong.",
        context:
          "The manual's lane change sequence is signal, mirrors, shoulder check for the blind spot, check for another driver moving into the same gap, then move. Nebraska's drive test scores lane changes in an intersection as its own item.",
        trap: "A wide intersection with turn lanes on the far side is exactly where drivers do this, and exactly where the manual says not to.",
        excerptKey: "lane-change-steps",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4E-3 Lane Changing",
        sourceUrl: hb(55),
      },
      {
        id: "ne_s2_25",
        topic: "speed",
        question: "Fines are doubled in a Nebraska work zone under what condition?",
        choices: [
          "When workers are present",
          "Whenever orange signs are posted",
          "Only between 7 a.m. and 7 p.m.",
          "Only on the interstate",
        ],
        correctIndex: 0,
        explanation:
          "The manual pairs the two doubling rules in one sentence: fines are doubled in school zones, and in work zones when workers are present.",
        context:
          "The speeding fine schedule shows what doubling costs. One to five over is $10 normally and $20 in a work or school zone; twenty-one to thirty-five over is $200 and $400; more than thirty-five over is $300 and $600, plus court costs in every case.",
        trap: "A school zone doubles the fine whenever it is in force. A work zone doubles it only when workers are actually there.",
        excerptKey: "fines-doubled",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4C-3 Adjusting Speed for Work and School Zones",
        sourceUrl: hb(53),
        commonlyMissed: true,
      },
      {
        id: "ne_s2_26",
        topic: "safety",
        question: "What does the manual identify as the three main types of distraction?",
        choices: [
          "Auditory, chemical and emotional",
          "Visual, manual and cognitive",
          "Passengers, phones and food",
          "Interior, exterior and mechanical",
        ],
        correctIndex: 1,
        explanation:
          "Visual takes your eyes off the road, manual takes your hands off the wheel, and cognitive takes your mind off driving. A text message manages all three at once, which is why it is singled out.",
        context:
          "The numbers the manual attaches: text messaging raises crash risk twenty-three times, dialing raises it about six times, and sending or receiving a text takes the eyes off the road for an average of 4.6 seconds - at 55 mph, the length of a football field driven blindfolded.",
        trap: "Hands-free is not the fix. The manual says outright that it is the conversation, not the device, that creates the danger.",
        excerptKey: "distraction-three-types",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5E-1 Distracted Driving",
        sourceUrl: hb(63),
      },
      {
        id: "ne_s2_27",
        topic: "parking",
        question: "Which of these is on the manual's list of places you may not stop or park?",
        choices: [
          "On the roadway beside a vehicle already stopped or parked at the curb",
          "In a marked stall in a private lot",
          "On the shoulder of a rural highway",
          "Facing downhill with the wheels turned",
        ],
        correctIndex: 0,
        explanation:
          "Double parking - stopping on the roadway alongside a car already at the curb - is the first item on Nebraska's list.",
        context:
          "The rest of the list: on a sidewalk, within an intersection, on a crosswalk, within 30 feet of a flashing signal or stop or yield sign, within 20 feet of a crosswalk at an intersection, on bridges or in tunnels or within 50 feet of railroad tracks, in front of a public or private driveway, and anywhere official signs prohibit it.",
        trap: "Hazard lights do not make double parking legal. Nothing on that list has a flashers exception.",
        excerptKey: "no-park-beside",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4F-2 Where Not to Park or Stop a Vehicle",
        sourceUrl: hb(57),
      },
      {
        id: "ne_s2_28",
        topic: "emergencies",
        question:
          "You have a minor crash on an interstate. Nobody is hurt and both cars still drive. What does Nebraska ask you to do?",
        choices: [
          "Leave the vehicles exactly where they stopped until police arrive",
          "Drive to the nearest exit and wait there",
          "Move only if a police officer tells you to",
          "Drive the vehicles to the nearest shoulder, out of the travel lanes",
        ],
        correctIndex: 3,
        explanation:
          "Quick clearance. With no injuries and drivable vehicles, you move them to the nearest shoulder so the next driver over the hill does not add to the wreck.",
        context:
          "Vehicles that cannot be moved may be pushed to the shoulder by law enforcement or removed by others. The rest of the crash checklist still applies: stop at or near the scene, help the injured, notify emergency authorities, exchange details and stay until released.",
        trap: "Leaving a drivable car in a live interstate lane to \"preserve the scene\" is what causes the second, worse crash.",
        excerptKey: "move-crashes-shoulder",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4B-7 Move Crashes to Shoulder and Quick Clearance",
        sourceUrl: hb(51),
      },
      {
        id: "ne_s2_29",
        topic: "licensing",
        question:
          "A Provisional Operator's Permit holder wants to drive at 1 a.m. When is that allowed?",
        choices: [
          "Never, under any circumstances",
          "Any time, since the POP is an unsupervised permit",
          "Only when driving to or from home to work or a school activity, or when accompanied by a parent, guardian or licensed driver at least 21",
          "Only on weekends",
        ],
        correctIndex: 2,
        explanation:
          "A POP allows unsupervised driving from 6 a.m. to midnight. Between midnight and 6 a.m. the only unsupervised trips are to or from work or a school activity - or you can drive at any hour with a qualifying adult beside you.",
        context:
          "The POP carries a passenger rule as well: for its first six months the holder may carry no more than one passenger under 19 who is not an immediate family member. Every passenger must be in an occupant protection system.",
        trap: "Coming home from a friend's house at 1 a.m. is not a school activity and not work. The exception is narrower than it sounds.",
        excerptKey: "pop-night-exception",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1C-5 Provisional Operator's Permit (POP)",
        sourceUrl: hb(4),
        commonlyMissed: true,
      },
      {
        id: "ne_s2_30",
        topic: "sharing",
        question: "Where does the manual say a bicyclist should ride on a Nebraska roadway?",
        choices: [
          "Facing traffic, at the edge",
          "On the sidewalk wherever one exists",
          "In the center of the right lane at all times",
          "As far right in the lane as is practical, or on a paved shoulder",
        ],
        correctIndex: 3,
        explanation:
          "As far right as is practical, or on the paved shoulder. Practical is the operative word - it is not the same as as far right as physically possible.",
        context:
          "The manual and the statute both list when a bicyclist may leave the right edge: to pass, to prepare for a left turn, to avoid a hazard, and when the lane is too narrow for a bicycle and a vehicle side by side. On a one-way urban street with two or more lanes the rider may use the far left lane instead.",
        trap: "A rider who moves into the middle of a narrow lane is not being difficult - the manual says they may, and expects you to pass only when three feet is available.",
        excerptKey: "bicycle-far-right",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6B Bicyclists",
        sourceUrl: hb(68),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real Class O written test sits: exact numbers, the difference between two rules that sound alike, and the parts of the manual most people skim.",
    questions: [
      {
        id: "ne_s3_01",
        topic: "speed",
        question:
          "You are on the interstate inside Douglas County. Nothing is posted. What does the statute set as the maximum?",
        choices: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctIndex: 1,
        explanation:
          "Sixty-five. Nebraska's 75 mph Interstate limit carves out Douglas County entirely, along with I-180 in Lancaster County and I-129 in Dakota County.",
        context:
          "The manual prints the limit flat as \"75 MPH on rural interstate highways\", which is why the word rural matters. Neb. Rev. Stat. 60-6,186(1)(i) is where the carve-out lives, and it covers most of the Interstate an Omaha driver ever uses.",
        trap: "The manual alone will tell you 75. Posted signs govern, and inside Omaha they say 65.",
        excerptKey: "st-speed-interstate",
        sourceLabel: "Nebraska Revised Statute 60-6,186 - Speed; maximum limits; signs",
        sourceUrl: `${NEB}60-6,186`,
        commonlyMissed: true,
      },
      {
        id: "ne_s3_02",
        topic: "sharing",
        question:
          "A school bus is stopped with its red lights flashing and stop arm out. In which situation are you NOT required to stop?",
        choices: [
          "You are meeting the bus in the opposite direction on a roadway divided by a median",
          "You are behind the bus on a two-lane street",
          "You are meeting the bus on a four-lane street with a painted center line",
          "You are turning right at the next corner",
        ],
        correctIndex: 0,
        explanation:
          "A physical median is the only exception the manual gives: traffic coming the other way on a divided highway may keep going. Everything else stops.",
        context:
          "The statute carries a second exception the manual never prints: approaching traffic directed to proceed by a posted sign under Neb. Rev. Stat. 60-6,175(8). Nothing in either source excuses a driver behind the bus, on either side of a painted line, or turning off.",
        trap: "A painted center line, a two-way turn lane or four lanes of pavement is not a median. Only a physical divider counts.",
        excerptKey: "bus-must-stop",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6E-3 When You Must Stop",
        sourceUrl: hb(70),
        commonlyMissed: true,
      },
      {
        id: "ne_s3_03",
        topic: "impairment",
        question: "What is the administrative penalty for refusing a chemical test in Nebraska?",
        choices: [
          "A 90-day revocation",
          "A 180-day revocation",
          "No penalty until you are convicted",
          "A one-year revocation",
        ],
        correctIndex: 3,
        explanation:
          "One year. Refusal is treated more harshly than failing the test: a first failure carries a 180-day administrative revocation, a refusal carries a full year.",
        context:
          "Refusal is also a separate crime. Every driver on a Nebraska road has already agreed to a chemical test of blood, breath or urine when an officer requests one, and the criminal penalties for refusing are the same as for a DUI at .15 or over.",
        trap: "Refusing does not buy you time. Under the Administrative License Revocation law the officer confiscates the license and issues a 15-day temporary on the spot.",
        excerptKey: "refusal-one-year",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2A Implied Consent Law",
        sourceUrl: hb(24),
      },
      {
        id: "ne_s3_04",
        topic: "rules",
        question: "Where may you NOT make a U-turn under Nebraska law?",
        choices: [
          "On any two-lane road",
          "At any intersection with a traffic signal",
          "On a curve or near a hillcrest where you cannot be seen from 500 feet in either direction",
          "In a residential district",
        ],
        correctIndex: 2,
        explanation:
          "The statutory test is sight distance. If a driver approaching from either direction could not see you within five hundred feet, the turn is unlawful there.",
        context:
          "Two more absolutes go with it: no U-turn anywhere a sign prohibits one, and no U-turn at any place on a freeway - the freeway ban has no exception except for authorized emergency vehicles.",
        trap: "The manual barely covers U-turns, so a learner who reads only the book has no rule at all. It is in Neb. Rev. Stat. 60-6,160.",
        excerptKey: "st-u-turn",
        sourceLabel: "Nebraska Revised Statute 60-6,160 - Turning to proceed in opposite direction",
        sourceUrl: `${NEB}60-6,160`,
      },
      {
        id: "ne_s3_05",
        topic: "licensing",
        question: "What must a School Permit (SCP) applicant have before applying?",
        choices: [
          "Nothing beyond turning 14 years and two months old",
          "An LPD held for at least six months",
          "A full year of supervised driving",
          "An LPE or LPD held for at least two months",
        ],
        correctIndex: 3,
        explanation:
          "Two months of permit time. The School Permit cannot be applied for until the individual has held a School Learner's Permit or a Learner's Permit for at least two months.",
        context:
          "On top of the permit time, the applicant must either complete a DMV-approved Nebraska driver safety course or file a 50-hour certification form signed by a parent, guardian or licensed driver at least 21, showing ten of those hours between sunset and sunrise.",
        trap: "Six months of permit time is the Provisional Operator's Permit requirement, not the School Permit's.",
        excerptKey: "scp-age",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1C-3 School Permit - Type SCP",
        sourceUrl: hb(2),
      },
      {
        id: "ne_s3_06",
        topic: "signals",
        question:
          "You are in the proper lane facing a flashing yellow arrow for a left turn. What may you do?",
        choices: [
          "Enter the intersection cautiously to make that turn, yielding to pedestrians in the adjacent crosswalk and to other traffic",
          "Turn without yielding - the arrow protects the movement",
          "Stop and wait for a green arrow",
          "Turn only when the opposing signal is red",
        ],
        correctIndex: 0,
        explanation:
          "A flashing yellow arrow permits the turn but protects nothing. You enter cautiously and yield to pedestrians in the adjacent crosswalk and to everyone else using the intersection.",
        context:
          "The green arrow is the protected one: with a green arrow you proceed in the direction of the arrow when the roadway is clear. Steady yellow arrow warns the movement is ending; steady red arrow forbids it outright.",
        trap: "Any arrow can look protective. Only the green one is.",
        excerptKey: "st-green-yield",
        sourceLabel: "Nebraska Revised Statute 60-6,123 - Traffic control signals; meaning",
        sourceUrl: `${NEB}60-6,123`,
      },
      {
        id: "ne_s3_07",
        topic: "safety",
        question: "In fog, what does the manual say about driving on a road posted at 40 mph or more?",
        choices: [
          "Use high beams and keep to the posted speed",
          "Use hazard lights and continue at the posted speed",
          "It is prohibited",
          "It is not recommended when visibility is under a quarter of a mile",
        ],
        correctIndex: 3,
        explanation:
          "Nebraska advises against traveling roads posted at 40 mph or more when you can see less than a quarter of a mile. Low beams, reduced speed and extreme caution are the instructions if you do.",
        context:
          "Low beams matter because high beams reflect off the fog straight back at you. The same low-beam instruction appears under rain, where the manual also says to disengage cruise control and increase following distance.",
        trap: "It is advice, not a ban - which means the basic speed law is what actually governs, and it can make any speed too fast.",
        excerptKey: "fog-quarter-mile",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5C-3 Fog",
        sourceUrl: hb(62),
      },
      {
        id: "ne_s3_08",
        topic: "parking",
        question: "How close to the nearest rail of a railroad crossing may you park?",
        choices: ["15 feet", "20 feet", "30 feet", "50 feet"],
        correctIndex: 3,
        explanation:
          "Fifty feet from the nearest rail. It is the largest of Nebraska's parking distances and it is in the manual as well as the statute.",
        context:
          "Bridges and highway tunnels appear in the same manual bullet, and for the same reason: there is no room for a stopped vehicle and no way for following traffic to see it in time.",
        trap: "The 15-foot figure belongs to fire hydrants and the 30-foot figure to stop signs and flashing signals. Railroad tracks get the biggest number.",
        excerptKey: "no-park-bridge-rail",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4F-2 Where Not to Park or Stop a Vehicle",
        sourceUrl: hb(57),
      },
      {
        id: "ne_s3_09",
        topic: "emergencies",
        question:
          "A fire engine is running to an alarm ahead of you. How close may you follow it?",
        choices: [
          "No closer than 100 feet",
          "No closer than 300 feet",
          "There is no set distance",
          "No closer than 500 feet",
        ],
        correctIndex: 3,
        explanation:
          "Five hundred feet, and you may not drive into or park within the block where the apparatus has stopped to answer the alarm.",
        context:
          "The manual states the same figure in its emergency-vehicle section. It is a fixed distance rather than a time gap because the hazard is what happens at the far end - hoses, crews and equipment coming off the truck the moment it stops.",
        trap: "The three-second rule has nothing to do with this. Five hundred feet at 30 mph is more than eleven seconds of following distance.",
        excerptKey: "st-fire-apparatus",
        sourceLabel: "Nebraska Revised Statute 60-6,183 - Following fire apparatus in response to an alarm",
        sourceUrl: `${NEB}60-6,183`,
      },
      {
        id: "ne_s3_10",
        topic: "signs",
        question: "What does a slow moving vehicle emblem tell you about the vehicle displaying it?",
        choices: [
          "It is over-width",
          "It is a school vehicle",
          "It is carrying hazardous materials",
          "It travels at 25 mph or less",
        ],
        correctIndex: 3,
        explanation:
          "Twenty-five miles per hour or less. Vehicles that slow - farm equipment above all - must display the emblem when they use a public roadway.",
        context:
          "The closing speed is the danger. At 55 mph you cover the gap to a 15 mph tractor in a few seconds, which is why the emblem is a warning rather than a label.",
        trap: "Hazardous loads are marked with placards reading Explosives, Poison or Flammable - a different system entirely.",
        excerptKey: "slow-moving-emblem",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-5 Special Signs",
        sourceUrl: hb(42),
      },
      {
        id: "ne_s3_11",
        topic: "rules",
        question: "When are studded tires lawful in Nebraska?",
        choices: [
          "All year",
          "Only from November 1 to April 1",
          "Only from October 1 to May 1",
          "Only when a winter weather advisory is in force",
        ],
        correctIndex: 1,
        explanation:
          "November 1 to April 1. Outside that window studs are unlawful on ordinary vehicles - school buses, mail carrier vehicles and emergency vehicles may use them any time of year.",
        context:
          "Tire chains are treated differently: chains of reasonable proportions are permitted whenever they are needed for safety because of snow, ice or another condition causing a vehicle to slide or skid.",
        trap: "The window is five months, not the whole winter half of the year. April 1 is the cutoff, and Nebraska gets April snow.",
        excerptKey: "studded-tires",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5C-5 Snow and Ice",
        sourceUrl: hb(63),
      },
      {
        id: "ne_s3_12",
        topic: "licensing",
        question:
          "You fail the Class O written test. When is the earliest you can take it again?",
        choices: [
          "The next day",
          "Later the same day",
          "After seven days",
          "After 30 days",
        ],
        correctIndex: 0,
        explanation:
          "Not the same day. The DMV's examiner manual allows one day between tests for attempts one through three; the fourth attempt is scheduled for the current date plus seven days.",
        context:
          "The ladder keeps stretching. After a fifth failure the examiner has to contact a supervisor for instructions on the sixth. After a sixth failure the applicant must complete an approved driver training course or wait 90 days from the last failure.",
        trap: "Being caught cheating counts as a failure and puts you on the same retest ladder.",
        excerptKey: "dle-retest-schedule",
        sourceLabel: "Nebraska DMV - Driver Licensing Examiner Policies and Procedures Manual, Written Test Procedures",
        sourceUrl: `${DLE}#page=33`,
      },
      {
        id: "ne_s3_13",
        topic: "safety",
        question: "Your vehicle has anti-lock brakes and you need to stop hard on ice. What do you do with the pedal?",
        choices: [
          "Pump it rapidly",
          "Press it firmly and hold it - do not pump",
          "Press it lightly and steer with the parking brake",
          "Shift to neutral first, then brake",
        ],
        correctIndex: 1,
        explanation:
          "With ABS you press firmly and keep pressing. The system does the pumping, thousands of times faster than a foot can, and it needs continuous pressure to work.",
        context:
          "The old technique still applies to vehicles without ABS: pump the pedal to keep the brakes from locking, because there is no steering control unless the tires are rolling. Everything else about ice is the same either way - reduce speed, increase following distance, make changes gradually, and switch cruise control off.",
        trap: "Pumping an ABS pedal defeats the system. It is one of the few places where the right technique depends on the vehicle.",
        excerptKey: "no-abs-pump",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5C-5 Snow and Ice",
        sourceUrl: hb(63),
      },
      {
        id: "ne_s3_14",
        topic: "impairment",
        question: "At what BAC does the manual say simple reaction time is already impaired?",
        choices: [".02%", ".04%", ".06%", ".08%"],
        correctIndex: 1,
        explanation:
          "Point-oh-four. The manual's point is that measurable impairment starts well below the legal limit, not at it.",
        context:
          "The rest of the ladder: choice reaction is impaired at .03%, tracking and vision and coordination at .05%, and the ability to respond to emergencies at .04%. Crash risk starts rising noticeably between .04% and .05%, and at .05% a driver is twice as likely to be in a fatal crash.",
        trap: "Nothing switches on at .08%. That is the prosecution threshold, not the impairment threshold.",
        excerptKey: "reaction-time-04",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2A Alcohol, Drugs, and Driving",
        sourceUrl: hb(24),
      },
      {
        id: "ne_s3_15",
        topic: "rightOfWay",
        question:
          "You are on an entrance ramp merging onto a Nebraska highway, and a car is arriving in the merge area at the same moment. Who yields?",
        choices: [
          "The car on the main roadway, because you have no shoulder",
          "Whoever is on the right",
          "Whoever is traveling faster",
          "You do - a vehicle entering from a ramp yields to traffic on the main roadway",
        ],
        correctIndex: 3,
        explanation:
          "The ramp yields. It does not matter whether the approach road joins from the left or the right, unless posted signs say otherwise.",
        context:
          "That is a deliberate override of the ordinary yield-to-the-right rule, written into the same statute. The manual's own advice to the driver already on the interstate is to signal and move left if it is safe, giving the merging car a smooth entry - but that is courtesy, not the right of way.",
        trap: "A left-hand entrance ramp does not flip the rule. The statute names that case specifically.",
        excerptKey: "st-row-merging",
        sourceLabel: "Nebraska Revised Statute 60-6,146 - Vehicles approaching or entering intersection at same time",
        sourceUrl: `${NEB}60-6,146`,
        commonlyMissed: true,
      },
      {
        id: "ne_s3_16",
        topic: "signs",
        question: "A sign warns \"Divided Highway Ends\". What are you about to meet?",
        choices: [
          "Oncoming traffic no longer separated by a median or divider",
          "A road that narrows to one lane",
          "The end of a work zone",
          "A road that becomes gravel",
        ],
        correctIndex: 0,
        explanation:
          "The median stops. From that point the lane beside you carries traffic coming toward you, and the instruction is to keep to the right.",
        context:
          "The paired sign, Divided Highway Begins, warns the opposite: the lanes ahead are split by a median and each side is one-way. Both are yellow diamonds and both end with the same instruction - keep right.",
        trap: "It sounds like the road is ending. What ends is the separation, which is the more dangerous change.",
        excerptKey: "warn-purpose",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-4 Warning Signs",
        sourceUrl: hb(38),
      },
      {
        id: "ne_s3_17",
        topic: "sharing",
        question:
          "A loaded truck with good tires and brakes is doing 55 mph on dry pavement. What is the minimum distance it needs to stop?",
        choices: ["150 feet", "240 feet", "340 feet", "500 feet"],
        correctIndex: 2,
        explanation:
          "Three hundred and forty feet - well over a football field. That is the figure the manual gives, and it is the reason cutting in front of a truck is so dangerous.",
        context:
          "Trucks and buses use air brakes, which do not act instantly the way a car's hydraulic brakes do. The manual's rule for passing one is that you do not pull back in until the entire front of the truck is visible in your rear view mirror.",
        trap: "Judging the gap by what your own car needs to stop is the error. The truck needs roughly three times as much room.",
        excerptKey: "truck-340-feet",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6F-1 Large Trucks and Buses",
        sourceUrl: hb(71),
      },
      {
        id: "ne_s3_18",
        topic: "rules",
        question: "What does Nebraska law say about backing on a freeway?",
        choices: [
          "It is prohibited on any roadway or shoulder of a freeway",
          "It is allowed on the shoulder only",
          "It is allowed if you have missed your exit",
          "It is allowed below 10 mph",
        ],
        correctIndex: 0,
        explanation:
          "Never, on the roadway or the shoulder. If you miss your exit the manual's answer is to carry on to the next one.",
        context:
          "The same manual sentence forbids the other tempting shortcut: using the emergency crossover points on the interstate. Those are for emergency vehicles and wreckers, and crossing the median is separately prohibited.",
        trap: "The shoulder feels like a safe place to reverse a few car lengths. The statute names the shoulder specifically.",
        excerptKey: "st-backing-freeway",
        sourceLabel: "Nebraska Revised Statute 60-6,169 - Limitations on backing vehicles",
        sourceUrl: `${NEB}60-6,169`,
      },
      {
        id: "ne_s3_19",
        topic: "safety",
        question: "How deep may water be before it reaches the bottom of most passenger cars?",
        choices: [
          "Two inches",
          "One foot",
          "Six inches",
          "Two feet",
        ],
        correctIndex: 2,
        explanation:
          "Six inches, and at that depth you can lose control or stall. Two feet of moving water carries away most vehicles, including SUVs and pickups.",
        context:
          "The manual's instruction is not to judge it at all: do not drive through flooded areas, turn around and find another route. Water hides dips, and floodwater can wash out the road surface underneath so that what looks shallow is not.",
        trap: "A pickup or SUV is not exempt. Two feet of moving water takes them too.",
        excerptKey: "flooding-six-inches",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5C-2 Flooding",
        sourceUrl: hb(62),
      },
      {
        id: "ne_s3_20",
        topic: "licensing",
        question: "How many points in what period cause an automatic revocation in Nebraska?",
        choices: [
          "6 points in one year",
          "8 points in two years",
          "12 points in two years",
          "12 points in five years",
        ],
        correctIndex: 2,
        explanation:
          "Twelve points in a two-year period, and the revocation runs six months. The order comes by letter from the DMV and directs you to surrender the license.",
        context:
          "Points come off the counter faster than convictions come off the record: a conviction stays five years, but the points stop counting two years after the date of violation. Two revocations under the point system within five years costs three years of driving privileges.",
        trap: "A driver under 21 has a lower trigger to worry about first - six points in one year requires a driver improvement course within three months.",
        excerptKey: "twelve-points",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1Q-2 Point Revocation Procedures",
        sourceUrl: hb(18),
      },
      {
        id: "ne_s3_21",
        topic: "signals",
        question:
          "A pedestrian hybrid beacon at a midblock crosswalk is showing two alternately flashing red lights. What must you do?",
        choices: [
          "Slow down and proceed with caution",
          "Treat it as a green light for vehicles",
          "Stop, then proceed only after verifying no pedestrian is in your lane or any adjacent lane",
          "Stop and wait until the beacon goes dark",
        ],
        correctIndex: 2,
        explanation:
          "Flashing red on a hybrid beacon works like a stop sign with an extra duty: stop, then check your lane and every adjacent lane for a pedestrian still crossing before you move.",
        context:
          "The beacon's cycle runs flashing yellow, steady yellow, steady red while pedestrians have WALK, then alternately flashing red while they finish, then dark. When it is dark, the ordinary rule about stopping for a dark traffic signal does not apply to these midblock beacons.",
        trap: "The adjacent-lane check is the point. A pedestrian who has cleared your lane may still be in the next one, hidden by the car beside you.",
        excerptKey: "hybrid-beacon-flashing-red",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3A-4 Pedestrian Hybrid Beacon",
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "ne_s3_22",
        topic: "parking",
        question:
          "The statute lists a distance from a fire station that the manual never prints. What is it?",
        choices: [
          "10 feet from the driveway entrance",
          "20 feet from the driveway entrance, and 75 feet opposite the entrance when signposted",
          "30 feet from the driveway entrance",
          "50 feet from the building",
        ],
        correctIndex: 1,
        explanation:
          "Twenty feet from the driveway entrance, and 75 feet on the opposite side of the street when it is properly signposted. Neither figure appears in the Driver's Manual.",
        context:
          "The statute's standing-and-parking list is longer than the manual's. Besides the fire station it adds the safety zone rule: no stopping between a safety zone and the adjacent curb, or within 30 feet of the points opposite its ends.",
        trap: "A learner who studies only the manual has never seen these numbers. The manual's back cover says outright that it is not an official legal reference.",
        excerptKey: "st-park-fire-station",
        sourceLabel: "Nebraska Revised Statute 60-6,166 - Stopping, standing, or parking prohibited",
        sourceUrl: `${NEB}60-6,166`,
      },
      {
        id: "ne_s3_23",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and a train is coming. Which way do you and your passengers run?",
        choices: [
          "Toward the train, off to the side of the tracks",
          "Away from the tracks in any direction",
          "Behind the car, so the wreckage misses you",
          "Stay in the vehicle and brace",
        ],
        correctIndex: 0,
        explanation:
          "Get everyone out immediately and move in the direction the train is coming from, off to the side. The impact throws the car and its debris forward, along the train's direction of travel.",
        context:
          "If there is no train in sight, the manual says to call the 1-800 number on the crossing sign to try to stop train traffic, then call 911. That number is on the blue Emergency Notification System sign, which sits at every highway-rail grade crossing.",
        trap: "Running away from the train puts you exactly where the wreckage goes.",
        excerptKey: "rr-stalled-vehicle",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4G-4 Get Out of Stalled Vehicle",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "ne_s3_24",
        topic: "rightOfWay",
        question:
          "You are on an unpaved county road about to cross a paved highway, and nothing controls the intersection. What does the statute require?",
        choices: [
          "Nothing special - the ordinary right-hand rule applies",
          "Yield to all vehicles approaching on the paved roadway",
          "The paved road yields, because it has better sightlines",
          "Both drivers stop and the one on the right goes first",
        ],
        correctIndex: 1,
        explanation:
          "Unpaved yields to paved. It does not matter who arrives first or who is on the right - a driver entering or crossing a paved roadway from an unpaved one yields to everything on the pavement.",
        context:
          "This matters more in Nebraska than in most states, because gravel roads meeting paved county roads is the normal rural pattern and there is often no sign at all. The manual's own introduction warns that paved roads give way to gravel here.",
        trap: "The default right-hand rule feels like it should apply. The statute overrides it for this exact case.",
        excerptKey: "st-row-unpaved",
        sourceLabel: "Nebraska Revised Statute 60-6,146 - Vehicles approaching or entering intersection at same time",
        sourceUrl: `${NEB}60-6,146`,
        commonlyMissed: true,
      },
      {
        id: "ne_s3_25",
        topic: "signs",
        question: "The number posted under a railroad crossbuck tells you what?",
        choices: [
          "That there is more than one set of tracks",
          "The crossing's speed limit",
          "The number of trains a day",
          "The distance to the next crossing",
        ],
        correctIndex: 0,
        explanation:
          "It counts the tracks. More than one set means a second train can be hidden behind the first, coming from either direction.",
        context:
          "The crossbuck itself means look both ways, listen for and yield to trains, and be prepared to stop if one is approaching. Flashing light signals may be used with it, and where gates are fitted you stop as the lights start to flash and stay stopped until the gates rise and the lights stop.",
        trap: "Waiting for one train to clear and then moving is how the second-train crash happens. The manual says to watch for trains from the same or opposite direction.",
        excerptKey: "crossbuck",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-2 Sign Shapes",
        sourceUrl: hb(35),
      },
      {
        id: "ne_s3_26",
        topic: "safety",
        question: "What does the manual say actually helps a drowsy driver?",
        choices: [
          "Rolling down a window",
          "Pulling over somewhere safe for a nap of ten to twenty minutes",
          "Chewing gum or turning up the radio",
          "Caffeine or an energy drink",
        ],
        correctIndex: 1,
        explanation:
          "A short nap. The manual names the alternatives specifically as things that do not work: opening a window, chewing gum, turning up the radio, and caffeine or other stimulants.",
        context:
          "The warning signs it lists are worth knowing because they arrive before you feel sleepy: falling asleep at stop signs, yawning, heavy eyelids, not remembering the last few miles, missing road signs, unplanned lane changes, head nodding, or hitting the rumble strips.",
        trap: "Talking on a phone to stay awake is called out by name as something that should never be used for it.",
        excerptKey: "drowsy-doesnt-work",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5F Drowsy or Fatigue Driving",
        sourceUrl: hb(65),
      },
      {
        id: "ne_s3_27",
        topic: "rules",
        question: "Under what circumstances may you legally pass another vehicle on the right in Nebraska?",
        choices: [
          "Any time the right lane is clear",
          "Only when the vehicle ahead is making or about to make a left turn, or on a road with two or more lanes in your direction",
          "Only on a one-way street",
          "Never - passing on the right is always unlawful",
        ],
        correctIndex: 1,
        explanation:
          "The statute lists the conditions: when the vehicle ahead is turning left, on a two-way road wide enough for two or more lanes in your direction and free of parked cars, or on a one-way road with the same width. And it may never be done unless it can be done safely on the roadway.",
        context:
          "The last clause is the one that catches people. Passing on the right may not be made by leaving the pavement, and Nebraska separately prohibits driving on the shoulder except for mail carriers, to remove a vehicle from the roadway, for implements of husbandry, and for bicycles on state highway shoulders.",
        trap: "Using the shoulder to get around a left-turning car is unlawful even though the pass itself would have been.",
        excerptKey: "st-passing-on-right",
        sourceLabel: "Nebraska Revised Statute 60-6,134 - Overtaking and passing upon the right",
        sourceUrl: `${NEB}60-6,134`,
      },
      {
        id: "ne_s3_28",
        topic: "licensing",
        question: "When must a crash be reported to the Nebraska Department of Transportation?",
        choices: [
          "Any crash, no matter how small",
          "Within ten days, if anyone is injured or killed or property damage to any one person reaches $1,500, unless an officer investigated it",
          "Only when someone is taken to hospital",
          "Within thirty days, for any crash over $500",
        ],
        correctIndex: 1,
        explanation:
          "Ten days, and the threshold is $1,500 of damage to any one person's property. If a law enforcement officer investigated the crash, the officer files the report instead.",
        context:
          "Failing to report is unlawful and is a Class II or III misdemeanor that can cost you your license. The manual's crash checklist runs alongside: stop, help the injured, notify emergency authorities, use flares or reflectors to warn traffic, exchange details, collect witness names and stay until released.",
        trap: "The officer exception is what most people miss. If nobody investigated, the report is yours to file.",
        excerptKey: "crash-report-1500",
        sourceLabel: "Nebraska Driver's Manual - Section 7, 7A General Information",
        sourceUrl: hb(73),
      },
      {
        id: "ne_s3_29",
        topic: "sharing",
        question: "Which describes the No-Zone around a large truck?",
        choices: [
          "The lane a truck must stay in on a grade",
          "The space in front of a truck reserved for merging",
          "The area where cars disappear into blind spots or sit too close for the driver to stop or maneuver",
          "The area a truck needs to complete a right turn",
        ],
        correctIndex: 2,
        explanation:
          "Two things make a No-Zone: you cannot be seen, or you are close enough to take away the truck driver's room to stop or steer. Both raise the odds of a crash sharply.",
        context:
          "The manual maps four of them. Backing - never pass close behind a truck that is backing. Passing - do not pull in until the whole front of the truck shows in your mirror. Rear blind spots - do not tailgate. Side blind spots, which are far larger than a car's, so do not sit alongside.",
        trap: "Wide turns are a related hazard but a separate one: a truck swinging wide cannot see cars beside or behind it, and squeezing past is how people get crushed.",
        excerptKey: "no-zone-definition",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6F-2 No Zone",
        sourceUrl: hb(71),
      },
      {
        id: "ne_s3_30",
        topic: "impairment",
        question: "How much can Nebraska's list of body factors change how alcohol affects a driver?",
        choices: [
          "Not at all - a drink is a drink",
          "Weight, sex, food in the digestive tract and time spent drinking all affect absorption",
          "Only body weight matters",
          "Only how recently you ate matters",
        ],
        correctIndex: 1,
        explanation:
          "The manual gives four: weight, sex, the amount of food in the digestive tract, and time spent drinking. They change how fast alcohol is absorbed, not whether it impairs.",
        context:
          "None of them speed up elimination. Only time reduces the alcohol level and its effects, which is why the manual's advice is to arrange a designated driver or another way home before the first drink rather than after the last.",
        trap: "Coffee, a shower and a big meal do not sober anyone up. The variable they change is absorption, not elimination.",
        excerptKey: "absorption-factors",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2A Alcohol, Drugs, and Driving",
        sourceUrl: hb(24),
      },
      {
        id: "ne_s3_31",
        topic: "signals",
        question: "What is a flashing red light at a railroad crossing telling you?",
        choices: [
          "Slow down and look",
          "Proceed if no train is visible",
          "A complete stop is required, even if you cannot see a train",
          "The crossing is out of service",
        ],
        correctIndex: 2,
        explanation:
          "A full stop, train visible or not. Sightlines at crossings are often poor and a train can be much closer than it looks.",
        context:
          "The general flashing red rule is the same shape: stop at the stop line, or before the crosswalk, or at the point nearest the intersecting roadway where you can see, and then proceed under the rules that apply after a stop sign.",
        trap: "\"I looked and nothing was coming\" is not a defense. The lights are the instruction.",
        excerptKey: "st-flashing-red",
        sourceLabel: "Nebraska Revised Statute 60-6,125 - Flashing signals; exception",
        sourceUrl: `${NEB}60-6,125`,
      },
      {
        id: "ne_s3_32",
        topic: "speed",
        question: "What is the maximum unposted speed on a four-lane divided highway that is NOT part of the state highway system?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Sixty-five. Nebraska gives the same figure to a four-lane divided highway off the state system and to the state highway system generally.",
        context:
          "Seventy is reserved for expressways, super-two highways and freeways that are part of the state highway system, and 75 for rural Interstate. Anything paved but off the state system and not four-lane divided is 55.",
        trap: "Divided and four-lane does not automatically mean 70. Seventy needs the road to be an expressway, super-two or freeway in the state system.",
        excerptKey: "max-speeds-high",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4C-1 Maximum Speed Limits",
        sourceUrl: hb(52),
      },
      {
        id: "ne_s3_33",
        topic: "parking",
        question:
          "You are leaving your car unattended at the roadside. What does the statute require before you walk away?",
        choices: [
          "Only that the parking brake is set",
          "Stop the motor, lock the ignition and remove the key, set the brakes, and turn the front wheels to the curb or side of the roadway",
          "Only that the vehicle is in gear",
          "Only that the doors are locked",
        ],
        correctIndex: 1,
        explanation:
          "All four steps. Neb. Rev. Stat. 60-6,168 spells them out for any vehicle left standing unattended on a highway.",
        context:
          "The statute's wheels rule and the manual's hill rule are not the same sentence and the difference is worth knowing. The statute says turn the front wheels to the curb whenever you leave the car standing on a roadway. The manual's parking-on-hills paragraph says to turn them AWAY from the curb when you are facing uphill and there is a curb. If the exam asks about parking on a hill, answer from the manual.",
        trap: "\"I set the parking brake\" covers one of four steps. Leaving the engine running with the key in it is its own violation.",
        excerptKey: "st-unattended-vehicle",
        sourceLabel: "Nebraska Revised Statute 60-6,168 - Unattended motor vehicles",
        sourceUrl: `${NEB}60-6,168`,
      },
      {
        id: "ne_s3_34",
        topic: "emergencies",
        question: "Your right wheels drop off the pavement edge onto the shoulder. What does the manual tell you to do first?",
        choices: [
          "Steer back onto the pavement immediately",
          "Brake hard to stop as quickly as possible",
          "Accelerate to climb back onto the pavement",
          "Hold the wheel firmly, straddle the edge, and do not try to come back on right away",
        ],
        correctIndex: 3,
        explanation:
          "Hold the wheel, let the wheels straddle the edge, and resist the instinct to jerk back. Reduce speed, check traffic, and come back onto the roadway gradually when it is safe.",
        context:
          "The instinctive correction is what causes the crash: yanking the wheel while the tire is against a pavement lip either does nothing or throws the car across both lanes when the tire finally grips. Rumble strips are there to give you the warning before the drop.",
        trap: "Braking hard while two wheels are on loose shoulder material is its own way to lose the car.",
        excerptKey: "wheels-off-pavement",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5D-1 Wheels Drop Off Roadway",
        sourceUrl: hb(63),
      },
      {
        id: "ne_s3_35",
        topic: "safety",
        question: "How much space does the manual say a driver should keep between themselves and an airbag-equipped steering wheel?",
        choices: [
          "At least 10 inches",
          "At least 6 inches",
          "At least 8 inches",
          "At least 15 inches",
        ],
        correctIndex: 0,
        explanation:
          "Ten inches. That is the distance the manual gives, and it is measured from the driver to the wheel, not from the seat back.",
        context:
          "It sits with the rest of the airbag guidance: hands at 9 and 3 o'clock on a wheel with a bag in it, children 12 and under in the rear, never a rear-facing infant seat in front of a live bag, and a forward-facing child seat only with the vehicle seat slid all the way back.",
        trap: "The DMV's practice exam offers 6-7, 8-9 and 10-12 inches. Ten is the floor, so the 10-12 band is the one that contains the rule.",
        excerptKey: "airbag-10-inches",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2B Air Bags",
        sourceUrl: hb(26),
      },
    ],
  },
];
