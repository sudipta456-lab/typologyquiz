import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Tennessee Comprehensive Driver
// License Manual, published by the Tennessee Department of Safety and Homeland
// Security (the edition currently posted at tn.gov, whose own currency note
// reads "as of July 1, 2022"), plus the tn.gov pages that carry rules the
// manual states incompletely or not at all.
//
// Four gaps and conflicts are worth naming up front, because they shape what
// these questions do and do not assert.
//
// 1. TENNESSEE PUBLISHES NO FORMAT FOR THE IN-OFFICE CLASS D KNOWLEDGE TEST.
//    The manual gives a topic split - signs and signals, safe driving, rules of
//    the road, and drugs and alcohol, roughly a quarter each - and says a
//    failure costs you a one-day wait. It never states a question count or a
//    passing score, and neither does any tn.gov page about the in-person test.
//    The widely-repeated "30 questions, 80%" belongs to the at-home proctored
//    ONLINE test, which tn.gov restricts to applicants aged 15 through 17. We
//    do not generalise it, and no question here asserts a count for the
//    in-office exam.
//
// 2. THE TEEN GDL PAGE IS INCOMPLETE. tn.gov's teengdl.html carries the permit
//    curfew but not the Intermediate Restricted curfew or the passenger cap.
//    Those live on dlinfo.html and in the manual. Anyone studying the teen page
//    alone gets the Level 2 restrictions wrong, so the GDL questions here cite
//    the page that actually states the rule.
//
// 3. THE MANUAL'S SCHOOL-ZONE PHONE BOX DESCRIBES A REPEALED STATUTE. Page 30
//    still explains the 2018 school-zone handheld offence, which Public Chapter
//    412 of 2019 deleted outright when it replaced Tennessee's phone law with
//    the hands-free rule. Nothing here tests that box. The phone questions test
//    the hands-free law the same page also summarises.
//
// 4. THE MANUAL NEVER STATES THE LIABILITY INSURANCE MINIMUMS. It explains what
//    financial responsibility is and when you must show it, but the figures are
//    only on the Department of Revenue's Financial Responsibility Law page,
//    which those questions link to instead.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// department's own authoritative wording on the state's own site.
const HB = "https://www.tn.gov/content/dam/tn/safety/documents/DL_Manual.pdf";
const GDL = "https://www.tn.gov/safety/driver-services/helpful-information/dlinfo.html";

export const tennesseeSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Tennessee Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Tennessee: what the shapes and colours mean, who yields to whom, and the handful of numbers the Department of Safety expects you to know cold.",
    questions: [
      {
        id: "tn_s1_01",
        topic: "signs",
        question:
          "Tennessee's manual says one sign shape is used for nothing else on the road. Which shape is it, and what does it require?",
        choices: [
          "A triangle - slow down and merge with traffic",
          "An octagon - bring the vehicle to a complete stop",
          "A diamond - a hazard lies ahead",
          "A pentagon - a school zone begins here",
        ],
        correctIndex: 1,
        explanation:
          "Eight sides means stop, and nothing else on a Tennessee road is eight-sided. The manual makes the point that you should still recognise it if snow, mud or a broken branch hides the lettering.",
        context:
          "Tennessee teaches signs by shape and colour first, because both survive bad weather and distance better than words do. The octagon is reserved for STOP, the downward triangle for YIELD, the yellow diamond warns of a hazard, the round sign warns of a railroad crossing, and rectangles carry laws and information. Learn the system rather than individual signs, because the exam can show you one you have never met.",
        trap:
          "The stop is not just at the sign. Tennessee tells you to stop before the crosswalk, not beyond it, so a bumper resting in the crossing is still a failure.",
        excerptKey: "sign-octagon-stop",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Traffic Signs and Signals",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_02",
        topic: "signals",
        question:
          "How long does Tennessee law require a yellow light to be displayed before the red appears?",
        choices: ["Two seconds", "Three seconds", "Four seconds", "Five seconds"],
        correctIndex: 1,
        explanation:
          "Three seconds is the statutory minimum. That is the whole margin you get, which is why the manual treats trying to beat the yellow as a genuine collision risk rather than a bad habit.",
        context:
          "Yellow in Tennessee means the red is coming immediately and you should stop if you can do so safely. The one exception is the car already inside the intersection when the yellow appears: it continues through rather than stopping. The manual pairs this with a warning about drivers who 'jump the green' from the cross street the moment they see your yellow.",
        trap:
          "Three seconds is a floor, not a promise. Some signals hold yellow longer, so timing your approach off the number is exactly the habit the manual is warning against.",
        excerptKey: "signal-yellow-three-seconds",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_03",
        topic: "speed",
        question:
          "You are on a Tennessee state highway and there is no speed limit sign anywhere in sight. What limit applies?",
        choices: ["55 mph", "45 mph", "65 mph", "70 mph"],
        correctIndex: 0,
        explanation:
          "Unless a sign says otherwise, primary and secondary state and federal highways in Tennessee carry a 55 mph limit. The absence of a sign is not the absence of a limit.",
        context:
          "Tennessee's limits stack in layers. Interstates top out at 70 mph, urban stretches of interstate are often posted at 55, unsigned state and federal highways default to 55, and cities and counties set their own limits on the roads they control, sometimes as low as 25. A posted sign always beats the default.",
        trap:
          "65 is the number people import from neighbouring states. Tennessee's unsigned default on a state highway is 55, and 65 appears only where it is posted.",
        excerptKey: "speed-default-55",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Tennessee Speed Laws",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_04",
        topic: "rightOfWay",
        question:
          "Two vehicles reach an all-way stop at exactly the same moment. Who goes first?",
        choices: [
          "Whoever switches on a turn signal first",
          "The driver going straight rather than turning",
          "The driver on the right",
          "The driver of the heavier vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Tennessee breaks a genuine tie by position: the vehicle on the right goes first, which means the driver on the left yields.",
        context:
          "At an all-way stop the first rule is arrival order - whoever got there first goes first, and every vehicle stops regardless. Right-yields-to-left only settles a simultaneous arrival. The same tie-break covers an uncontrolled intersection with no signs at all, and an intersection where the signals have gone dark.",
        trap:
          "A turn signal announces an intention. It does not create a priority, and the manual says so in as many words.",
        excerptKey: "row-all-way-stop",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Right-of-Way Procedures",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_05",
        topic: "rules",
        question:
          "Rain is heavy enough that your windshield wipers are running constantly. What does Tennessee law require?",
        choices: [
          "Parking lights only",
          "Hazard flashers, so you are easier to see",
          "Fog lights instead of headlights",
          "Headlights switched on",
        ],
        correctIndex: 3,
        explanation:
          "Wipers on means headlights on. The manual states plainly that this is Tennessee law, not merely good practice.",
        context:
          "Tennessee requires headlights from thirty minutes after sunset until thirty minutes before sunrise, any time you cannot see people or vehicles clearly at 200 feet, and whenever rain, mist or snow keeps the wipers running. Parking lights alone will not do at night or in bad weather - the manual calls that both unsafe and illegal, because their small size makes your car look further away than it is.",
        trap:
          "Daytime running lights are not headlights. They light the front only, leaving your tail lights dark in exactly the spray where a following driver needs to see them.",
        excerptKey: "headlights-wipers-law",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Use of Headlights Required",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_06",
        topic: "safety",
        question:
          "What minimum following distance does Tennessee's manual teach for ordinary conditions?",
        choices: [
          "One car length for every 10 mph of speed",
          "Half a second",
          "Six car lengths at any speed",
          "Two seconds",
        ],
        correctIndex: 3,
        explanation:
          "Count 'one-thousand-one, one-thousand-two' as the car ahead passes a fixed object. If you reach that object before you finish, you are too close.",
        context:
          "Tennessee teaches the two-second rule because it scales automatically with speed, unlike a fixed number of car lengths. Two seconds is the floor for moderate speeds in good conditions. The manual raises it to at least four in rain, at night, at interstate speeds and when following a motorcycle, and Section C stretches that to three or four behind a large truck or bus.",
        trap:
          "Car lengths are the answer people carry over from older teaching. The manual does not use them, because a length that is generous at 25 mph is nowhere near enough at 70.",
        excerptKey: "two-second-rule",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, The Two-Second Rule",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_07",
        topic: "impairment",
        question:
          "At what blood alcohol concentration is a Tennessee driver aged 21 or over automatically guilty of driving under the influence?",
        choices: [".02 percent", ".05 percent", ".08 percent", ".10 percent"],
        correctIndex: 2,
        explanation:
          ".08 is the figure written into the offence itself. At or above it, the state does not have to prove you were driving badly - the number is the violation.",
        context:
          "Tennessee's DUI law has two independent limbs. One is the .08 number. The other is driving under the influence of any intoxicant, marijuana, narcotic or central-nervous-system stimulant, which carries no number at all. That is why the manual says a driver can blow .00 and still be convicted, and why being below .08 clears nobody.",
        trap:
          ".08 is a ceiling for prosecution without proof, not a licence to drink up to it. The manual notes that judgment and vision are already measurably impaired at .03 and .04.",
        excerptKey: "bac-08",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Alcohol, Other Drugs and Driving",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_08",
        topic: "signs",
        question: "An orange background on a road sign tells you what?",
        choices: [
          "Construction or maintenance work is under way",
          "A public recreation area lies ahead",
          "You are entering a school zone",
          "Motorist services are available at the next exit",
        ],
        correctIndex: 0,
        explanation:
          "Orange is reserved for construction and maintenance, and the manual says it may not be used for anything else. Seeing orange should mean 'road work - slow down' before you have read a word.",
        context:
          "Tennessee's manual asks you to memorise nine sign background colours. Red is stop, yield, do not enter and wrong way. Yellow is general warning. Orange is construction. Brown marks recreation and cultural sites. Green is guidance. Blue is motorist services. White is regulatory and route markers. Fluorescent yellow-green is school zones, and fluorescent pink marks incident management at a crash or spill.",
        trap:
          "Orange and fluorescent pink both appear at scenes with cones and flashing lights. Pink means an incident such as a crash, fire or spill; orange means planned road work.",
        excerptKey: "color-orange",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Color Codes on Highway Traffic Signs",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_09",
        topic: "licensing",
        question: "What is the minimum age for a Tennessee learner permit?",
        choices: ["14", "15", "16", "17"],
        correctIndex: 1,
        explanation:
          "Fifteen, with a vision screening and the written knowledge test. Sixteen is the age for the next step, the Intermediate Restricted licence.",
        context:
          "Tennessee's graduated system runs in four steps: learner permit at 15, Intermediate Restricted at 16, Intermediate Unrestricted at 17, and a regular Class D licence at 18 - or earlier if you graduate high school or earn a GED. Licences issued under the first three steps carry 'GDL' printed in the bottom left corner.",
        trap:
          "Fourteen is the hardship licence age, not the permit age. A Class H hardship licence is issued only on family-hardship grounds, is limited to daylight and named destinations, and fewer than one percent of minors hold one.",
        excerptKey: "license-class-pd",
        sourceLabel: "Tennessee Driver License Manual - Section A-1, Class PD Learner Permit",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_10",
        topic: "signals",
        question: "A traffic signal ahead of you is flashing red. What must you do?",
        choices: [
          "Stop completely, then go when the way is clear",
          "Slow down and proceed through with caution",
          "Treat it as though it were green",
          "Stop only if a pedestrian is waiting to cross",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red is a stop sign in light form. Come to a complete stop, look both ways, yield, and go only when it is safe.",
        context:
          "Tennessee's two flashing signals do different jobs. Flashing red means a full stop, the same as a stop sign. Flashing yellow means slow down and proceed with caution. A third case is a signal that has gone dark or is malfunctioning, which state law says you treat as an all-way stop - so every approach stops, and a simultaneous arrival yields to the right.",
        trap:
          "Flashing red and flashing yellow are easy to blur under pressure. Only the yellow lets you keep rolling.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_11",
        topic: "rules",
        question:
          "You are descending a long grade. May you shift into neutral to save fuel?",
        choices: [
          "Yes, on any Tennessee road",
          "Yes, as long as your speed stays under the limit",
          "Yes in an automatic, but not in a manual",
          "No - coasting in neutral is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "Coasting on a downgrade is prohibited outright, in neutral or with the clutch held down, because both take away the engine braking and control you may need.",
        context:
          "Tennessee treats coasting as a control problem rather than a fuel one. On a long descent the manual tells you to select a lower gear instead, so the engine helps hold your speed and your brakes stay cool. The points schedule lists 'coasting, operating gears disengaged' as a three-point moving violation.",
        trap:
          "The rule is not limited to manual transmissions. Slipping an automatic into neutral on a hill is the same offence.",
        excerptKey: "coasting-prohibited",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Coasting Prohibited",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_12",
        topic: "sharing",
        question:
          "Tennessee sets a minimum clearance for passing a bicycle travelling in the same direction. What is it?",
        choices: ["1 foot", "2 feet", "3 feet", "6 feet"],
        correctIndex: 2,
        explanation:
          "Three feet, and the manual calls it the law rather than a courtesy. You have to hold that clearance until you are safely past, not just at the moment you draw level.",
        context:
          "Tennessee treats a bicycle as a vehicle with the same rights and duties as any other on most roads. Riders keep as far right as is practical, but they are entitled to the whole lane when it is too narrow to share, when they are passing, and when parked cars, debris or potholes make the edge unsafe. If you cannot give three feet, the manual's instruction is to wait rather than squeeze.",
        trap:
          "The three feet is not measured only at the closest moment. Cutting back in early, while your rear bumper is still alongside the rider, breaches the same rule.",
        excerptKey: "pass-bicycle-3-feet",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Passing Bicycles",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s1_13",
        topic: "impairment",
        question: "What actually lowers a drinker's blood alcohol concentration?",
        choices: [
          "Strong black coffee",
          "The passage of time",
          "A cold shower",
          "Vigorous exercise",
        ],
        correctIndex: 1,
        explanation:
          "The liver oxidises roughly one drink an hour and nothing speeds it up. Coffee, showers and exercise may make someone feel more alert, which is worse, because a wide-awake drunk still drives drunk.",
        context:
          "Alcohol reaches the bloodstream within a minute or two of a drink and accumulates faster than the liver can clear it. How high your BAC climbs depends on how much you drink, how fast, your body weight and body fat, and how much food is in your stomach. What it does not depend on is any remedy. The manual is blunt: only time sobers a person, and it is a slow process.",
        trap:
          "Feeling sober and being sober are different measurements. The manual notes that people at .10 often insist they are unaffected while being affected more, not less.",
        excerptKey: "alcohol-only-time",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, How Does Alcohol Affect the Body?",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_14",
        topic: "parking",
        question: "How far from a fire hydrant must you park in Tennessee?",
        choices: ["5 feet", "8 feet", "10 feet", "15 feet"],
        correctIndex: 3,
        explanation:
          "Fifteen feet. The manual lists it among a set of distances that come up constantly on the exam and rarely have a sign to remind you.",
        context:
          "Tennessee's no-parking distances are worth learning as a group, because they are all different: 15 feet from a fire hydrant, 20 feet from a crosswalk, 30 feet from a traffic signal or stop sign, and 50 feet from a railroad crossing. A fire station driveway takes 20 feet on the same side of the street and 75 feet on the opposite side.",
        trap:
          "Every one of these figures is a different number, and swapping the hydrant's 15 for the crosswalk's 20 is the commonest way to lose the point.",
        excerptKey: "park-hydrant-15",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, No Parking Zones",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_15",
        topic: "signs",
        question: "Fluorescent yellow-green signs in Tennessee mark what?",
        choices: [
          "Highway work zones",
          "School zones and pedestrian crossings",
          "State recreation areas",
          "The scene of a crash or spill",
        ],
        correctIndex: 1,
        explanation:
          "Fluorescent yellow-green is Tennessee's school-zone colour, and it is used for other pedestrian areas such as crosswalks as well. The manual chose it because it stays visible in low light and rain.",
        context:
          "Tennessee added two fluorescent colours to the older nine. Yellow-green marks school zones and pedestrian crossings. Fluorescent pink marks incident management - the temporary signing put out for a crash, a wildland fire, a flood or a hazardous spill. Work-zone signs stay orange, and workers and officers directing traffic may wear yellow-green vests in either setting.",
        trap:
          "Yellow-green vests turn up in work zones too, worn by flaggers and officers. The vest colour tells you nothing; the sign background does.",
        excerptKey: "color-yellow-green",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Color Codes on Highway Traffic Signs",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_16",
        topic: "rightOfWay",
        question:
          "A pedestrian has stepped into a marked crosswalk on your half of the road. What must you do?",
        choices: [
          "Yield the right-of-way and let them finish crossing",
          "Sound your horn so they hurry",
          "Continue if you can pass safely behind them",
          "Continue - vehicles have priority away from signals",
        ],
        correctIndex: 0,
        explanation:
          "You yield. The duty applies once the pedestrian is on your half of the road, or approaching closely enough from the other half to be in danger.",
        context:
          "Tennessee says there is a crosswalk at every intersection, marked or not, and treats anyone on foot or in a wheelchair as a pedestrian. Beyond the crosswalk rule, the manual adds a general duty: whatever the right-of-way says, the driver must exercise great care and extreme caution to avoid striking a pedestrian. In a marked school zone with the flashers going, yielding becomes a full stop that lasts until they have cleared your roadway.",
        trap:
          "An unmarked crosswalk is still a crosswalk. Tennessee does not require paint for the duty to exist.",
        excerptKey: "marking-crosswalk",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Crosswalks",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_17",
        topic: "speed",
        question: "What maximum speed does Tennessee law set for interstate highways?",
        choices: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctIndex: 2,
        explanation:
          "70 mph is the statutory ceiling for Tennessee interstates. It is a maximum, not a limit that applies everywhere - plenty of interstate miles are posted lower.",
        context:
          "Tennessee sets 70 as the top of the range and lets the posted sign do the rest. Most rural interstate is signed at 70; congested urban stretches are often 55. Two minimums operate alongside it: you may not drive below 55 in the leftmost interstate lane unless congestion forces it, and 45 is the minimum in the right lanes.",
        trap:
          "The manual is careful to say this does not apply to all sections. Treating 70 as a licence to hold that speed through a posted 55 urban stretch is a speeding ticket.",
        excerptKey: "speed-interstate-70",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Interstate Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_18",
        topic: "safety",
        question:
          "Who must wear a safety belt in the front seat of a moving vehicle in Tennessee?",
        choices: [
          "The driver only",
          "Only occupants under 18",
          "The driver and every front-seat passenger",
          "Only occupants in a vehicle without air bags",
        ],
        correctIndex: 2,
        explanation:
          "Everyone in the front, driver and passengers alike, any time the vehicle is in motion. Age makes no difference in the front seat.",
        context:
          "Tennessee's belt rules split front from back. In the front, all occupants are covered. In the back, belts are required for passengers under 17, for passengers aged four to 17 when the driver holds a learner permit or intermediate licence, and for four- to eight-year-olds under four feet nine inches, who must be in a booster. Officers may stop and ticket for belt and child restraint violations alone.",
        trap:
          "Belt enforcement in Tennessee is primary. The officer does not need another reason to pull you over.",
        excerptKey: "belt-front-seat",
        sourceLabel: "Tennessee Driver License Manual - Section B-2, Tennessee Safety Belt Laws",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_19",
        topic: "impairment",
        question:
          "You are arrested for DUI and refuse the chemical test the officer requests. What is the likely consequence?",
        choices: [
          "A written warning on your record",
          "A $250 fine and nothing further",
          "A 30-day licence suspension",
          "Suspension of your driving privileges for twelve months",
        ],
        correctIndex: 3,
        explanation:
          "Refusal triggers implied consent, and the court will likely suspend your driving privileges for twelve months - separately from whatever happens on the DUI charge itself.",
        context:
          "By driving in Tennessee you have already consented to a test of your blood or breath, which an officer may request on reasonable grounds to believe you were driving impaired. Refusing does not make the case go away: since 2012 the No Refusal law lets officers seek a search warrant for a blood sample anyway. So a refusal can leave you with the suspension and the blood evidence.",
        trap:
          "The implied consent suspension is not the DUI penalty. It stacks on top of the revocation that a DUI conviction carries in its own right.",
        excerptKey: "implied-consent-refusal",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Implied Consent Law",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_20",
        topic: "emergencies",
        question:
          "A siren and flashing lights are closing on you from behind. What does Tennessee law require?",
        choices: [
          "Pull as close as possible to the right edge of the road and stop",
          "Speed up so you clear the area quickly",
          "Stop immediately, wherever you happen to be",
          "Move one lane left and keep driving at the same speed",
        ],
        correctIndex: 0,
        explanation:
          "Pull parallel to the right-hand edge or curb, stop, and stay there until the emergency vehicle has passed or an officer directs you otherwise.",
        context:
          "The duty applies whether the emergency vehicle is meeting you or overtaking you. The manual adds several refinements: if you are already inside an intersection, drive clear of it before pulling over; do not stop where you block a side road the vehicle may need; and if you are stopped at a red light, stay put even if it turns green. There may also be a second emergency vehicle behind the first.",
        trap:
          "A green light does not release you. Rolling forward on green in front of an emergency vehicle is exactly the move the manual tells you not to make.",
        excerptKey: "row-emergency-pull-right",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Yield to Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_21",
        topic: "rules",
        question: "How far ahead of a turn must you switch on your turn signal?",
        choices: ["10 feet", "25 feet", "50 feet", "100 feet"],
        correctIndex: 2,
        explanation:
          "At least 50 feet before the turn or the lane change. The manual applies the same distance to right turns, left turns and lane changes alike.",
        context:
          "Tennessee wants the signal early enough to be useful and late enough to be unambiguous. Signal at least 50 feet out, and if you intend to turn beyond an intersection rather than at it, wait until you are in the intersection so nobody pulls out expecting you to turn sooner. Cancel it afterwards - a forgotten signal still reads as 'turning' to everyone else.",
        trap:
          "Signalling does not create a right-of-way. The manual says so explicitly: it announces what you plan to do, it does not entitle you to do it.",
        excerptKey: "turn-signal-50-feet",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Signaling a Turn",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_22",
        topic: "signals",
        question:
          "Unless a sign says otherwise, when may you turn right on a red light in Tennessee?",
        choices: [
          "Never - Tennessee prohibits right turns on red",
          "After a complete stop, when no pedestrians or cross traffic are present",
          "Without stopping, provided the way looks clear",
          "Only between 6 a.m. and 10 p.m.",
        ],
        correctIndex: 1,
        explanation:
          "Right on red is allowed after a complete stop, unless a sign or a red arrow forbids it. The stop has to happen before the crosswalk or stop line, marked or not.",
        context:
          "Tennessee also allows a left turn on red, but only from a one-way street onto another one-way street running the direction you are turning, and only after the same complete stop. A red arrow forbids all turns in that lane, even if other lanes have green and your path looks clear.",
        trap:
          "A left on red is legal only one-way to one-way. Turning left on red from a one-way onto a two-way street is not permitted, and the manual states that flatly.",
        excerptKey: "signal-red-right-turn",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Traffic Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s1_23",
        topic: "sharing",
        question:
          "A school bus ahead of you stops with its red lights flashing and the stop arm swung out. What must you do?",
        choices: [
          "Pass slowly on the left, watching for children",
          "Stop, and stay stopped until the arm folds back and the bus moves",
          "Pass on the right, away from the door",
          "Slow to 15 mph and continue past",
        ],
        correctIndex: 1,
        explanation:
          "Stop and stay stopped. You may go only when the bus starts moving, the driver waves you on, or the red lights and stop arm are switched off.",
        context:
          "Tennessee's school bus rule covers church buses too, and applies whether you are meeting the bus or coming up behind it. Passing a stopped school bus is a Class A misdemeanour carrying a fine between $250 and $1,000, and the points schedule adds eight points. Passing on the right is the worst version, because that is the side children step out onto.",
        trap:
          "Yellow flashing lights are a warning, not the stop. They mean the bus is about to stop, so slow down and be ready; the red lights and the arm are what make stopping mandatory.",
        excerptKey: "bus-overtaking",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, The School Bus Stop Law",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_24",
        topic: "signs",
        question:
          "What does the white X-shaped sign at a railroad crossing tell you?",
        choices: [
          "Exactly where the tracks are located",
          "That the crossing has been permanently closed",
          "That the crossing is used only by freight trains",
          "That trains must stop before entering the crossing",
        ],
        correctIndex: 0,
        explanation:
          "The crossbuck marks the location of the tracks themselves. Smaller signs below it tell you how many tracks there are, which matters because one train can hide another.",
        context:
          "Tennessee posts two different railroad signs. The round yellow sign is advance warning: a crossing is coming, slow down and be ready to stop. The crossbuck sits at the crossing. Some crossbucks add flashing lights, and some add a gate as well - lights mean a train is coming and you stop; a gate means you stop and stay stopped until it lifts and the lights go dark.",
        trap:
          "The number plate under a crossbuck is a track count, not a route number. Two or more tracks is the situation where a passing train can mask a second one coming the other way.",
        excerptKey: "sign-crossbuck",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Broad X Shape - Railroad Here",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s1_25",
        topic: "impairment",
        question:
          "A 19-year-old Tennessee driver is stopped and registers a BAC of .03. What follows?",
        choices: [
          "Nothing - the limit is .08 for every licensed driver",
          "A verbal warning, because the reading is under .08",
          "A fine, but no action against the licence",
          "Conviction for underage driving while impaired",
        ],
        correctIndex: 3,
        explanation:
          "For a driver at least 16 but not yet 21, .02 is the threshold. At .03 the offence is underage driving while impaired: a year off the road and a $250 fine.",
        context:
          "Tennessee stacks three separate rules on drivers under 21. The .02 BAC offence is one. An alcohol purchase or possession conviction at 18, 19 or 20 costs a year of driving privileges whether or not a vehicle was involved. And a 13- to 17-year-old caught with alcohol or drugs loses driving privileges for a year or until 17, whichever runs longer - even if never licensed.",
        trap:
          ".02 is not a second, gentler version of .08. It is a different offence with its own penalty, and the reading that clears an adult convicts a teenager.",
        excerptKey: "under21-bac-02",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Under 21 Laws",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_26",
        topic: "licensing",
        question:
          "An officer stops you in Tennessee and your driver licence is sitting at home. What can happen?",
        choices: [
          "Nothing, as long as you are in fact licensed",
          "Your licence is suspended for 30 days",
          "You may be fined between $2 and $50",
          "Your vehicle is impounded until you produce it",
        ],
        correctIndex: 2,
        explanation:
          "Tennessee requires the licence to be in your possession and shown on request. Failing to have it is an offence in its own right, with a fine ranging from $2 to $50.",
        context:
          "Not carrying your licence is a small matter with a small fine and two points. Driving while your licence is revoked, cancelled or suspended is an entirely different thing: a Class B misdemeanour carrying up to $1,000 and up to six months in jail. The manual also expects you to notify the department of an address change within ten days.",
        trap:
          "Leaving the licence at home and driving on a suspended licence sit at opposite ends of the scale. Do not let the small penalty for one soften your reading of the other.",
        excerptKey: "license-no-possession-fine",
        sourceLabel: "Tennessee Driver License Manual - Section A-1, Penalties for Driving Without a License",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_27",
        topic: "speed",
        question:
          "Exceeding the posted school zone speed limit in Tennessee is treated by law as what?",
        choices: [
          "Reckless driving",
          "A parking-type violation with no points",
          "A non-moving violation",
          "A warning offence on a first occasion",
        ],
        correctIndex: 0,
        explanation:
          "The manual states that exceeding a school zone limit is by law considered reckless driving, and that it brings an automatic six points and an advisory letter.",
        context:
          "School zone limits apply when children are going to or from school or during a recess hour, and the signs are usually clock-controlled with flashing yellow lights. Six points is a serious figure in Tennessee: an adult reaches proposed suspension at 12 points in a year, and a driver under 18 reaches it at six. So a single school zone conviction can put a teenager straight into a suspension notice.",
        trap:
          "This is not an ordinary speeding ticket with a fatter fine. Reckless driving is the classification, which is why the points jump straight to six.",
        excerptKey: "school-zone-reckless",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Speeding in School Zones",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s1_28",
        topic: "rightOfWay",
        question:
          "You are approaching a roundabout, traffic circle or town square. Who has the right-of-way?",
        choices: [
          "Whoever reaches the circle first",
          "Vehicles entering from your right",
          "Traffic already circulating inside",
          "The larger of the two vehicles",
        ],
        correctIndex: 2,
        explanation:
          "Yield to traffic already inside the circle, then enter on a gap. Once you are in, keep moving unless a sign, signal or officer says otherwise.",
        context:
          "Tennessee treats the roundabout like a yield-controlled intersection. Travel counter-clockwise, keeping right of the splitter island, at the posted speed - usually 15 to 25 mph. Never overtake inside a multi-lane roundabout, signal right on the way out, and watch for pedestrians at the exit crosswalk. If you miss your exit, go round again rather than cutting across.",
        trap:
          "Many Tennessee towns call theirs a 'town square', and the manual says the same rules apply. The name change does not change who yields.",
        excerptKey: "row-roundabout-yield",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Roundabouts",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_29",
        topic: "safety",
        question:
          "How must a nine-month-old baby be secured in a Tennessee vehicle?",
        choices: [
          "In a booster seat in the back",
          "In a lap belt in the back seat",
          "In a forward-facing child seat",
          "In a rear-facing child passenger restraint system",
        ],
        correctIndex: 3,
        explanation:
          "A child under one year old, or any child under 20 pounds, rides rear-facing. Forward-facing starts at one through three years old and over 20 pounds.",
        context:
          "Tennessee's child restraint ladder has three rungs. Rear-facing for under one or under 20 pounds. Forward-facing for one through three and over 20 pounds. A belt-positioning booster for four through eight, if the child is under four feet nine inches - and boosters go in the back seat when the vehicle has one. The driver stays responsible for restraining any child up to age 16.",
        trap:
          "The age and the weight are alternatives, not a pair you must satisfy together. An eleven-month-old who is over 20 pounds still rides rear-facing.",
        excerptKey: "crd-rear-facing",
        sourceLabel: "Tennessee Driver License Manual - Section B-2, Child Safety Restraint Rules",
        sourceUrl: HB,
      },
      {
        id: "tn_s1_30",
        topic: "rules",
        question:
          "You realise there is a yellow line to your right and a white line to your left. What does that tell you?",
        choices: [
          "You are travelling the wrong way",
          "You are correctly positioned on a one-way street",
          "You are inside a passing zone",
          "You are in a high-occupancy vehicle lane",
        ],
        correctIndex: 0,
        explanation:
          "Yellow marks the left edge of your side of the road and white marks the right edge. Finding them swapped means you are facing oncoming traffic.",
        context:
          "Tennessee compresses this into a phrase worth memorising: white on your right, yellow on your left. On a divided highway the side nearest the median always carries yellow and the outside edge always carries white. Red reflectors facing you mean the same thing in the dark - you are on the wrong side or the wrong ramp, and the instruction is to pull over immediately.",
        trap:
          "This is not just a road-marking trivia question. It is the check the manual gives you for spotting a wrong-way entry onto a divided highway or an interstate ramp before you meet anything.",
        excerptKey: "marking-wrong-way",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Edge and Lane Lines",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Signs, Signals and Everyday Rules",
    difficulty: "easy",
    description:
      "The core of the Tennessee exam: the signals and markings you read without thinking, the yielding rules that decide who moves, and the first layer of the state's penalty numbers.",
    questions: [
      {
        id: "tn_s2_01",
        topic: "signals",
        question:
          "You have a green light and want to turn left. Oncoming traffic is coming straight through. What does the green permit?",
        choices: [
          "Turning first, because a green light gives you the right-of-way",
          "Turning only after yielding to the oncoming traffic",
          "Turning if you signal and move quickly",
          "Turning only when a police officer waves you through",
        ],
        correctIndex: 1,
        explanation:
          "Green is permission to proceed, not permission to take priority. Turning left, you still yield to anything coming straight through or turning right.",
        context:
          "The Tennessee manual is careful about what a green signal buys you. It lets you go if the intersection is clear, and you still owe the right-of-way to pedestrians and to vehicles already inside from the previous phase. The only left turn that carries priority is one on a protected green arrow, and even then you yield to anyone already in the intersection.",
        trap:
          "Turning left across a gap that looks big enough is where the manual says drivers 'jump the gun'. A green circle never converts into a protected turn.",
        excerptKey: "signal-green-yield",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_02",
        topic: "rules",
        question:
          "There is no stop line painted at a stop sign, but there is a marked crosswalk. Where must you stop?",
        choices: [
          "Before the front of your vehicle reaches the near line of the crosswalk",
          "With your front bumper level with the sign post",
          "Anywhere within one car length of the intersection",
          "Inside the crosswalk, so you can see the cross street",
        ],
        correctIndex: 0,
        explanation:
          "Stop before the near edge of the crosswalk. If there is no crosswalk either, you stop where you can see the cross street, and before entering the intersection.",
        context:
          "Tennessee sets a fixed order for the stopping point: the painted stop line first, then the near line of the crosswalk, then the point nearest the intersecting roadway that gives you a view. Once you have made that stop and the crosswalk is clear, the manual lets you edge forward slowly to see past a blind corner.",
        trap:
          "Edging forward is allowed only after the required stop and only once the crosswalk is empty. Rolling through the crosswalk to get a view is what the law is trying to prevent.",
        excerptKey: "stop-sign-law",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Stops Required by Law",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_03",
        topic: "signs",
        question: "What does a downward-pointing triangular sign require of you?",
        choices: [
          "A complete stop in every case",
          "Nothing, unless a vehicle is already in the intersection",
          "Slowing, and stopping if traffic is approaching on the other roadway",
          "Merging at the speed of the traffic you are joining",
        ],
        correctIndex: 2,
        explanation:
          "A yield sign means slow down and be prepared to stop for traffic on the other roadway. Tennessee tells you that if you are certain nothing is coming, you need not stop completely, but you must slow and enter with caution.",
        context:
          "Tennessee's yield wording is stricter than the casual reading of the sign. The manual says you must stop and wait when vehicles are approaching from the right or left on the other roadway, and it adds a blunt instruction: always stop when traffic is heavy. Yielding also carries a four-point penalty when you get it wrong and cause a conflict.",
        trap:
          "'Yield' is not 'merge'. Nothing about the sign entitles you to keep your speed and expect the other road to make room.",
        excerptKey: "sign-yield-triangle",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Triangular Shape - Yield",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_04",
        topic: "impairment",
        question: "Roughly how fast can the liver process alcohol?",
        choices: [
          "About three drinks per hour",
          "About one drink per hour",
          "About one drink every fifteen minutes",
          "It varies with how much water you drink",
        ],
        correctIndex: 1,
        explanation:
          "About one drink per hour, and the rate is fixed. Drink faster than that and the surplus stays in your blood, which is what intoxication is.",
        context:
          "Tennessee describes intoxication mechanically: alcohol enters the bloodstream in a minute or two, reaches the liver, and is oxidised at a rate you cannot influence. Drinking three in one hour therefore hits you harder than three across three hours. The manual also counts a 12-ounce beer as roughly equivalent to a one-ounce shot of whiskey, so switching drinks changes nothing.",
        trap:
          "Body weight and food change how fast your BAC rises, not how fast it falls. Nothing on the way down but time.",
        excerptKey: "alcohol-liver-rate",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, How Does Alcohol Affect the Body?",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_05",
        topic: "speed",
        question:
          "What does Tennessee law set as the minimum fine for exceeding the posted speed limit in an active work zone?",
        choices: ["$250", "$50", "$100", "$500"],
        correctIndex: 0,
        explanation:
          "$250 is the floor and $500 the ceiling for a work zone speeding violation in Tennessee. The manual puts the figures in capitals, which tells you how often it comes up.",
        context:
          "Work zones stack penalties. Beyond the fine, the points schedule treats construction-zone speeding more harshly than ordinary speeding: even one to five over draws two points in a work zone against one elsewhere, and 16 to 25 over draws five points against four. The Tennessee Highway Patrol runs Project CAR specifically to police work zones with workers present.",
        trap:
          "Where no reduced limit is posted, the normal posted limit applies - the work zone does not create a lower limit by itself. What it does create is a much larger penalty for breaking whatever limit is posted.",
        excerptKey: "work-zone-fine",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Speeding in Highway Work Zones",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s2_06",
        topic: "rightOfWay",
        question:
          "You are turning left at an intersection with no turn arrow. An oncoming vehicle is signalling a right turn into the same street. Who goes first?",
        choices: [
          "You, because a left turn takes longer to complete",
          "Whichever driver signalled first",
          "The oncoming vehicle - you yield to traffic going straight or turning right",
          "Neither - both should stop and let the other pass",
        ],
        correctIndex: 2,
        explanation:
          "Turning left, you yield to oncoming vehicles going straight ahead and to oncoming vehicles turning right. The only exception is a protected green arrow.",
        context:
          "The left turn is the manoeuvre Tennessee spends most of its right-of-way section on, because it crosses the path of everything coming the other way. The manual also tells you not to enter the intersection at all if a yellow appears while you are waiting, and to keep your wheels pointed straight while you wait so a rear-end hit does not push you into oncoming traffic.",
        trap:
          "Two drivers meeting head-on who both want to turn left pass to the left of each other. That is a different situation, and it is not the one this rule covers.",
        excerptKey: "turn-left-yellow-light",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Yielding at Intersections",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_07",
        topic: "safety",
        question:
          "When does Tennessee's manual tell you to stretch the two-second following rule to at least four?",
        choices: [
          "Only when towing a trailer",
          "Only on gravel or unpaved roads",
          "In bad weather, at night, at interstate speeds, and behind a motorcycle",
          "Only when your vehicle has no anti-lock brakes",
        ],
        correctIndex: 2,
        explanation:
          "Rain, darkness, higher interstate speeds and following a motorcycle all call for a minimum of four seconds, because your reaction margin shrinks in every one of those cases.",
        context:
          "Two seconds is the baseline for moderate speeds in good conditions on state and US highways. Tennessee's interstate chapter repeats the four-second figure for bad weather, night driving and higher-speed rural sections, and the defensive driving chapter asks for three to four behind large commercial trucks and buses, where you also lose your view of the road ahead.",
        trap:
          "A motorcycle can stop shorter than your car, not longer. That is precisely why the manual wants the extra distance behind one.",
        excerptKey: "four-second-rule",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Following Distances",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_08",
        topic: "sharing",
        question:
          "A motorcycle is travelling in the lane ahead of you and drifting between the left and right of that lane. What are you entitled to do?",
        choices: [
          "Share the lane, since the motorcycle uses only part of it",
          "Pass in the same lane without changing lanes",
          "Sound your horn to make the rider hold a line",
          "Nothing - the motorcycle is entitled to the full lane",
        ],
        correctIndex: 3,
        explanation:
          "A motorcycle has the right to the whole lane. Riders shift position within it to deal with potholes, wind and sightlines, and the manual says you must never try to share it.",
        context:
          "Tennessee opens its motorcycle section with a hard statistic: two-thirds of car-motorcycle collisions are caused by the car driver, usually turning across the rider's path. The narrow profile makes speed and distance hard to judge, so the manual asks for a two-second minimum following distance, a shoulder check for blind spots on every lane change, and patience at intersections until the rider's intention is unmistakable.",
        trap:
          "Lane position drift is a rider managing hazards, not a rider making room for you.",
        excerptKey: "moto-full-lane",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Sharing the Road with Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_09",
        topic: "parking",
        question:
          "You are parking facing downhill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Turned toward the curb",
          "Turned away from the curb",
          "Left straight ahead",
          "Turned toward the centre of the road",
        ],
        correctIndex: 0,
        explanation:
          "Downhill with a curb, the wheels turn toward the curb, so a rolling car catches on the kerb instead of running into traffic.",
        context:
          "Tennessee gives four combinations and only one of them points the wheels away from the edge. Downhill with a curb: toward the curb. Uphill with a curb: away from it, so the car rolls back onto the kerb. Downhill without a curb: toward the edge of the roadway. Uphill without a curb: also toward the edge. Set the parking brake in every case.",
        trap:
          "Uphill with a curb is the odd one out. Away from the curb is right there and nowhere else, because the car rolls backwards and needs the kerb behind the tyre.",
        excerptKey: "park-downhill-curb",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, When Parking on a Hill",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_10",
        topic: "signals",
        question:
          "You reach a busy intersection and the traffic signal is completely dead. What does Tennessee law require?",
        choices: [
          "Treat the intersection as uncontrolled and proceed with care",
          "Wait for a police officer before entering",
          "Treat it as an all-way stop",
          "Give priority to whichever road is wider",
        ],
        correctIndex: 2,
        explanation:
          "State law says a signal that is not working turns the intersection into an all-way stop. Every approach stops, then arrival order decides, with a tie going to the driver on the right.",
        context:
          "This is one of the rules Tennessee states as law rather than advice, because a dark signal is exactly the moment drivers invent their own priority. Stop as though stop signs stood on all four approaches, then apply the ordinary all-way stop rules. The manual adds that being first to the line still does not excuse you from checking it is safe.",
        trap:
          "'Uncontrolled' is a different situation with different rules. A dead signal is not an intersection without control - it is an all-way stop.",
        excerptKey: "signal-malfunction",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Malfunctioning Traffic Light",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s2_11",
        topic: "emergencies",
        question:
          "You are involved in a collision on a Tennessee street. What does the law require first?",
        choices: [
          "Drive to the nearest police station to report it",
          "Exchange insurance details and continue on your way",
          "Photograph the scene before moving anything",
          "Stop immediately at or as near to the scene as possible",
        ],
        correctIndex: 3,
        explanation:
          "Stop at once, at the scene or as close to it as you can get without obstructing traffic. Leaving is a separate and much more serious offence.",
        context:
          "After stopping, Tennessee expects you to notify police, exchange names, addresses, licence numbers, plate numbers and insurance details, and collect witness details. On an interstate the state adds a specific permission: if the vehicle still drives and nobody is seriously hurt, you may move it to the emergency lane rather than leave it blocking lanes. You must never disturb a scene involving a fatality.",
        trap:
          "'Move it for safety' applies only where there are no serious injuries or deaths. It is a narrow exception to a rule that otherwise says stay put.",
        excerptKey: "crash-stop-immediately",
        sourceLabel: "Tennessee Driver License Manual - Section B-8, Traffic Crashes",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_12",
        topic: "impairment",
        question:
          "A driver is impaired by a drug their own doctor prescribed. How does Tennessee treat it?",
        choices: [
          "It is a complete defence if the prescription is current",
          "It reduces the charge to careless driving",
          "The penalties are the same as for alcohol",
          "It is handled as a medical matter, not a criminal one",
        ],
        correctIndex: 2,
        explanation:
          "Prescription is no defence in Tennessee, and the penalties for a drug DUI are identical to an alcohol DUI. The manual says both things in plain terms.",
        context:
          "Tennessee's offence covers any intoxicant, marijuana, narcotic or drug producing stimulating effects on the central nervous system - prescription and over-the-counter drugs included. Combining alcohol with a depressant such as a tranquilliser, sedative or antihistamine does not add the effects together, it multiplies them. That is why the manual tells you to read labels and ask your pharmacist.",
        trap:
          "A legal drug is not a safe drug behind the wheel. Cold tablets, cough syrups and allergy remedies all appear on the manual's list of things that impair.",
        excerptKey: "dui-same-penalties",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Consequences of a DUI Arrest",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_13",
        topic: "signs",
        question:
          "A round yellow sign with a large black X and two R's appears beside the road. What is it telling you?",
        choices: [
          "You are at the tracks and must stop",
          "A railroad grade crossing is ahead - slow down and be ready to stop",
          "A rest area is ahead on the right",
          "Trains are prohibited from using this crossing",
        ],
        correctIndex: 1,
        explanation:
          "The round yellow sign is the advance warning: a crossing is coming. It is up to you to slow, look and stop if a train is approaching.",
        context:
          "Tennessee posts warning and location signs separately at railroad crossings. The round yellow sign warns that a crossing lies ahead. The crossbuck at the tracks marks the crossing itself. Where a train is coming, you stop between 15 and 50 feet from the nearest rail - and at a crossing with electric or mechanical signals, that is the required stopping band by law.",
        trap:
          "The round sign does not mark the tracks. Braking for it as though the rails were at your bumper leaves you stopped in the wrong place and still short of the crossing.",
        excerptKey: "sign-round-railroad",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Round Shape - Railroad Ahead",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s2_14",
        topic: "licensing",
        question:
          "A Tennessee learner permit holder under 18 may not drive between which hours?",
        choices: [
          "9 p.m. and 5 a.m.",
          "Midnight and 5 a.m.",
          "11 p.m. and 6 a.m.",
          "10 p.m. and 6 a.m.",
        ],
        correctIndex: 3,
        explanation:
          "10 p.m. to 6 a.m. is the learner permit curfew. The next step up, the Intermediate Restricted licence, runs 11 p.m. to 6 a.m. instead.",
        context:
          "Tennessee's two teen curfews are an hour apart, which is exactly why they get confused. Permit holders are off the road from 10 p.m., must have a licensed driver 21 or older in the front seat at all times, and everyone in the vehicle wears a belt. Intermediate Restricted holders drive alone but are off the road from 11 p.m., with a short list of exceptions.",
        trap:
          "Both curfews end at 6 a.m., so only the start time distinguishes them. 10 for the permit, 11 for the intermediate licence.",
        excerptKey: "gdl-level1-web",
        sourceLabel: "Tennessee Department of Safety - Driver License Information",
        sourceUrl: GDL,
      },
      {
        id: "tn_s2_15",
        topic: "rules",
        question:
          "On an ordinary two-lane road, which side must you pass another vehicle on?",
        choices: [
          "The left",
          "The right, so oncoming traffic is never a factor",
          "Either side, as long as you signal",
          "The right, unless the vehicle ahead is turning right",
        ],
        correctIndex: 0,
        explanation:
          "On a two-lane road you pass on the left, into the oncoming lane, and only when the way is clear and the markings allow it.",
        context:
          "Tennessee allows passing on the right in three narrow cases: when the vehicle ahead has signalled a left turn, on an unobstructed multi-lane road with two or more lanes each way, or on a one-way street wide enough for two lanes. Even then you may not leave the pavement to do it, and you may never use a bike lane, a parking lane or the emergency lane within sight of a light or stop sign.",
        trap:
          "Passing on the right is not simply illegal in Tennessee, which is what makes it dangerous. It is legal in specific circumstances and unlawful everywhere else.",
        excerptKey: "pass-left-rule",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Passing Other Vehicles",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_16",
        topic: "speed",
        question:
          "How slowly may you legally drive in the leftmost lane of a Tennessee interstate under normal conditions?",
        choices: [
          "No slower than 55 mph",
          "No slower than 45 mph",
          "No slower than 40 mph",
          "There is no minimum for the left lane",
        ],
        correctIndex: 0,
        explanation:
          "Below 55 in the leftmost lane is unlawful unless congestion makes that speed unsafe. The right lanes carry a lower floor of 45.",
        context:
          "Tennessee sets two different interstate minimums, which is unusual. The leftmost lane has a 55 mph floor, and the right lanes have a 45 mph floor that every vehicle must meet under normal conditions. The manual's advice if you cannot or will not hold those speeds is direct: use another road.",
        trap:
          "The left lane floor is 55, not 45. Someone cruising the left lane at 50 in clear conditions is committing an offence, not merely being inconsiderate.",
        excerptKey: "speed-left-lane-55",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Interstate Speed Limits",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s2_17",
        topic: "rightOfWay",
        question:
          "Your road dead-ends into a through road at a T intersection with no signs or signals. Who yields?",
        choices: [
          "Traffic on the through road yields to you",
          "You yield to traffic from both directions on the through road",
          "Whoever arrives first goes first",
          "You yield only to traffic approaching from your right",
        ],
        correctIndex: 1,
        explanation:
          "The road that ends yields. You give way to traffic coming from both directions on the main road, not just from one side.",
        context:
          "Tennessee's yielding list covers several situations where position rather than arrival order decides. You yield entering a main road from a driveway, alley, parking lot or roadside. You yield leaving a parked position. You yield entering a roundabout. And you yield when your road terminates at another - the through road has priority both ways.",
        trap:
          "The tie-break rule about yielding to the driver on the right is for crossroads. At a T intersection the road that ends yields to both directions, right and left alike.",
        excerptKey: "row-t-intersection",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Yielding at Intersections",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_18",
        topic: "safety",
        question:
          "A six-year-old passenger is four feet three inches tall. How must they ride in Tennessee?",
        choices: [
          "In a rear-facing child seat",
          "In an adult lap belt in the front seat",
          "Unrestrained, since they are over four years old",
          "In a belt-positioning booster seat, in the back seat if the vehicle has one",
        ],
        correctIndex: 3,
        explanation:
          "Four through eight years old and under four feet nine inches means a booster seat, and Tennessee puts boosters in the back when the vehicle has a back seat.",
        context:
          "Tennessee was the first state in the country to require child safety seats, and the current ladder is age-and-height based. Under one or under 20 pounds is rear-facing. One through three and over 20 pounds is forward-facing. Four through eight and under four feet nine inches is a booster. A booster violation carries more than the ordinary $50 fine - it can be charged as a Class C misdemeanour with a required class on transporting children safely.",
        trap:
          "The cut-off is a height as well as an age. A tall six-year-old over four feet nine inches has outgrown the booster requirement; a short nine-year-old has aged out of it.",
        excerptKey: "crd-booster",
        sourceLabel: "Tennessee Driver License Manual - Section B-2, Child Safety Restraint Rules",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_19",
        topic: "impairment",
        question: "Pharmacologically, what is alcohol?",
        choices: [
          "A stimulant, which is why small amounts feel energising",
          "Neither - it acts only on the stomach",
          "A depressant, which slows nerve impulses and body functions",
          "A stimulant at low doses and a depressant at high doses",
        ],
        correctIndex: 2,
        explanation:
          "Alcohol is a depressant in any concentration. The lively feeling after a first drink is inhibition being switched off, not the nervous system speeding up.",
        context:
          "Tennessee spells this out because the misconception drives real decisions. Alcohol slows every nerve impulse and body function. It degrades judgment first, then vision - halving your ability to see clearly at night and cutting side vision by about 30 percent at .05 BAC - and it impairs reaction and coordination from .02 upward. Since the eyes supply roughly 90 percent of the information you drive on, that vision loss matters enormously.",
        trap:
          "The false stimulation of the first drink is the dangerous part, because it arrives with the loss of judgment that would tell you to stop.",
        excerptKey: "alcohol-depressant",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Alertness and Concentration",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_20",
        topic: "sharing",
        question:
          "You are following a tractor-trailer and cannot see either of its side mirrors. What does that mean?",
        choices: [
          "The truck's mirrors are wrongly adjusted",
          "The truck driver cannot see you",
          "You are at a safe following distance",
          "You are clear to move up and pass on the right",
        ],
        correctIndex: 1,
        explanation:
          "If you cannot see the truck's mirrors, the driver cannot see you. Tennessee offers it as the simplest test of whether you are sitting in a blind spot.",
        context:
          "A loaded tractor-trailer can weigh 80,000 pounds and needs roughly 450 feet to stop from 55 mph, against about 240 for a car. Its blind spots - the No-Zones - run about 20 feet off the front, deep behind, and wide down both sides. Sitting in any of them also blocks your own view of the road ahead, which is why the manual treats the mirror test as protecting you twice over.",
        trap:
          "Wide right turns are the other half of this. A truck swinging left before turning right leaves a gap on its right that is a trap, not an invitation.",
        excerptKey: "truck-mirror-rule",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Passing Trucks and Buses",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_21",
        topic: "signs",
        question: "A blue background on a Tennessee road sign indicates what?",
        choices: [
          "A state or national recreation area",
          "Motorist services such as food, fuel, lodging and rest areas",
          "A regulation you must obey",
          "A route marker for a state highway",
        ],
        correctIndex: 1,
        explanation:
          "Blue means motorist services. Tennessee also uses it for police services, rest areas and the Emergency Route Marker.",
        context:
          "Colour tells you the sign's job before you can read it. Blue is services. Brown is recreation and cultural interest. Green is guidance and direction, and green interstate signs carry exit and mileage information. White is regulatory and route marking. Learning the palette lets you filter which signs matter at speed.",
        trap:
          "Blue and brown both point you off the highway to something. Brown is a park or a historic site; blue is a service you need.",
        excerptKey: "color-blue",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Color Codes on Highway Traffic Signs",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_22",
        topic: "parking",
        question:
          "How close to a traffic signal or stop sign may you legally park in Tennessee?",
        choices: [
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 3,
        explanation:
          "Thirty feet from a traffic signal, stop sign or any other traffic control device, so you do not hide it from approaching drivers.",
        context:
          "Tennessee's parking prohibitions are a list of distances plus a list of places. Fifteen feet from a hydrant, 20 from a crosswalk, 30 from a signal or sign, 50 from a railroad crossing. Then the flat bans: in an intersection, on a sidewalk, on a bridge or in a tunnel, in a fire lane, on an interstate shoulder except in an emergency, and on the traffic side of another parked car.",
        trap:
          "Thirty feet is the largest of the intersection-area figures and the easiest to under-estimate. It is roughly two car lengths back from the sign, not one.",
        excerptKey: "park-signal-30",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, No Parking Zones",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_23",
        topic: "rules",
        question:
          "How far may you travel in a shared centre two-way left turn lane in Tennessee?",
        choices: [
          "As far as you like, provided you are signalling",
          "To the next intersection",
          "No farther than 300 feet",
          "Only the length of one vehicle",
        ],
        correctIndex: 2,
        explanation:
          "The centre turn lane is for turning, not travelling, and Tennessee caps any distance you cover in it at 300 feet.",
        context:
          "The shared centre lane is marked by a solid yellow line outside a broken yellow line on each side, with left-turn arrows alternating for each direction. Enter it just before your turn, wait there for a gap, and never use it to pass or to run up to a turn lane at an intersection. Where two vehicles enter from opposite directions, the first one in has the right-of-way.",
        trap:
          "You may also turn into the centre lane from a side street, stop, and then merge right. That is allowed; using the lane as a running start is not.",
        excerptKey: "lane-center-300-feet",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Shared Center Turn Lane",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s2_24",
        topic: "signals",
        question:
          "Your lane shows a steady red arrow, while the lanes beside you have a green light and the intersection looks clear. What may you do?",
        choices: [
          "Turn, since the intersection is clear",
          "Turn after stopping completely",
          "Turn if no pedestrian is in the crosswalk",
          "Nothing - all turns from your lane are prohibited",
        ],
        correctIndex: 3,
        explanation:
          "A red arrow prohibits the turn outright. Tennessee says so even where other lanes have green and your path through appears clear.",
        context:
          "Tennessee runs three kinds of turn arrow. A green arrow is protected: you have the right-of-way in the arrow's direction, after yielding to anything already in the intersection. A yellow arrow warns that protection is ending, so prepare to yield. A flashing yellow arrow permits the turn but only after yielding to all oncoming traffic, bicyclists and pedestrians.",
        trap:
          "Right on red does not survive a red arrow. The arrow overrides the general permission that a plain red circle carries.",
        excerptKey: "signal-red-arrow",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Protected Arrows",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_25",
        topic: "emergencies",
        question:
          "You are on a four-lane highway and a police car sits on the right shoulder with its lights flashing. Traffic conditions allow a safe lane change. What does Tennessee's Move Over Law require?",
        choices: [
          "Slowing to 20 mph while staying in the right lane",
          "Changing into a lane that is not next to the stopped vehicle",
          "Stopping until the officer waves you past",
          "Sounding your horn as you pass",
        ],
        correctIndex: 1,
        explanation:
          "Where you can do it safely, you move into a lane that is not adjacent to the stopped vehicle. Slowing down is the fallback for when a lane change is not safe or possible.",
        context:
          "Tennessee's Move Over Law covers far more than police cars: ambulances and fire apparatus, highway maintenance vehicles, tow trucks and recovery vehicles, utility and sanitation vehicles, and - since a later amendment - any stationary vehicle at all with its hazard flashers on. It applies whether the vehicle is on the right or the left shoulder, and it is a multi-lane rule.",
        trap:
          "Move over first, slow down second. Slowing while staying in the adjacent lane is the alternative you fall back on, not the primary duty.",
        excerptKey: "move-over-basic",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Slowing and Yielding to Stationary Vehicles",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_26",
        topic: "impairment",
        question:
          "Which of these is grounds by itself for an officer to stop a vehicle and investigate impairment?",
        choices: [
          "Maintaining an inappropriate speed, whether too fast or too slow",
          "Driving after dark on a weekend",
          "Having an open container visible in the back seat",
          "Being under 21 years old after 10 p.m.",
        ],
        correctIndex: 0,
        explanation:
          "The manual names erratic driving behaviour and inappropriate speed - too fast or too slow - as sufficient cause to stop and investigate further.",
        context:
          "Tennessee's DUI section makes the point that a stop does not need a breath reading behind it. Observed driving is the trigger; sobriety checks come afterwards. That is also why a driver can be convicted with a BAC of .00: the offence covers being under the influence of a drug, and the evidence is the driving plus the officer's observations.",
        trap:
          "Driving unusually slowly is not a way of looking careful. The manual lists it alongside speeding as a reason for the stop.",
        excerptKey: "dui-zero-bac",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Driving Under the Influence",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_27",
        topic: "speed",
        question:
          "At what point does Tennessee's manual consider you to be driving a slow-moving vehicle?",
        choices: [
          "At any speed under 30 mph",
          "At any speed under 45 mph",
          "When five vehicles are behind you",
          "At 10 mph or more below the lawful maximum speed",
        ],
        correctIndex: 3,
        explanation:
          "Ten miles per hour or more below the lawful maximum makes you a slow-moving vehicle, whatever the actual number on the speedometer.",
        context:
          "Tennessee attaches a duty to that status. Once five or more vehicles are lined up behind you, you turn off or pull off the roadway as soon as you can do so safely. Driving below a posted minimum is itself unlawful in normal conditions, and even where no minimum is posted it is against the law to drive so slowly that you block traffic. The points schedule assigns three points to 'speed less than posted minimum'.",
        trap:
          "It is a relative measure, not an absolute one. Forty-five mph is slow-moving in a 70 zone and perfectly normal in a 55.",
        excerptKey: "slow-definition",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Slow-Moving Vehicles",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s2_28",
        topic: "licensing",
        question:
          "You move to Tennessee holding a valid licence from another state. When must you get a Tennessee licence?",
        choices: [
          "Once you have lived here longer than 30 days",
          "Within 10 days of arriving",
          "Within six months of arriving",
          "Only when your out-of-state licence expires",
        ],
        correctIndex: 0,
        explanation:
          "More than 30 days of residence triggers the requirement - and so does working in Tennessee, or otherwise qualifying to register as a Tennessee voter.",
        context:
          "Tennessee gives three independent triggers, so meeting any one of them is enough. A new resident with a current, unexpired out-of-state licence normally needs only the vision screening; if the out-of-state licence has expired, the knowledge and road skills tests come back. Applicants from another country with no prior licence take all three.",
        trap:
          "Working here is a trigger on its own. You can be caught by the rule while still living somewhere else.",
        excerptKey: "license-new-resident",
        sourceLabel: "Tennessee Driver License Manual - Section A-1, Who Needs a Tennessee Driver License?",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_29",
        topic: "safety",
        question:
          "How many separate methods of applying brakes does Tennessee law require every automobile to have?",
        choices: ["One, provided it works on all four wheels", "One, plus anti-lock", "Two", "Three"],
        correctIndex: 2,
        explanation:
          "Two separate braking systems: the regular foot brake and a parking or emergency brake. Both are checked before a road test.",
        context:
          "The pre-trip inspection at a Tennessee road test covers eight items you must demonstrate: safety belts, both brakes, high and low headlight beams, tail and brake lights, windshield wipers, the defroster and fan, rearview mirrors, and the horn. The vehicle must also carry valid tags and meet the state's equipment law, including the ban on tinting the windshield.",
        trap:
          "An emergency brake that merely holds the car on a slope may still fail the check. It is one of the two required systems, not an accessory.",
        excerptKey: "two-brakes",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Braking, Following and Stopping Distances",
        sourceUrl: HB,
      },
      {
        id: "tn_s2_30",
        topic: "rules",
        question:
          "You miss your exit on a Tennessee interstate. There is an emergency crossover in the median a few hundred feet ahead. What may you do?",
        choices: [
          "Nothing - carry on to the next exit",
          "Use the crossover if no traffic is in sight",
          "Reverse along the shoulder to the exit",
          "Use the crossover with your hazard lights on",
        ],
        correctIndex: 0,
        explanation:
          "Drive to the next exit. Emergency crossovers are for emergency vehicles and highway maintenance crews only, and U-turns and reversing on an interstate are both illegal.",
        context:
          "Tennessee closes off every shortcut here. You may not make a U-turn on an interstate, may not back up on one, may not cross or drive over the median, and may not park on the shoulder except in an emergency or on any part of an entrance or exit ramp unless the vehicle is disabled. Missing an exit costs you the distance to the next one and nothing more.",
        trap:
          "Reversing on the shoulder feels safer than a U-turn and is prohibited just the same. The manual bans both by name.",
        excerptKey: "uturn-interstate",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, U-Turns",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Tennessee at Exam Difficulty",
    difficulty: "medium",
    description:
      "Real exam standard. The distances, the penalty numbers and the situations where Tennessee's wording differs from what drivers assume - railroad crossings, passing rules and the state's two interstate minimums.",
    questions: [
      {
        id: "tn_s3_01",
        topic: "signs",
        question:
          "A yellow curve sign carries a smaller sign below it reading 35. What is that number?",
        choices: [
          "The legal speed limit through the curve",
          "The minimum speed for the curve",
          "The recommended maximum safe speed",
          "The distance in hundreds of feet to the curve",
        ],
        correctIndex: 2,
        explanation:
          "The advisory plate gives a recommended maximum safe speed for the hazard, not a posted limit. The regulatory limit is whatever the black-on-white signs say.",
        context:
          "Tennessee builds a small vocabulary into its warning signs. A turn sign marks a bend recommended at 30 mph or less; a curve sign covers the 30 to 55 range; a reverse turn sign marks two opposite turns less than 600 feet apart. The advisory plate under any of them tells you what speed the engineers judged safe for that geometry.",
        trap:
          "Ignoring an advisory plate is not automatically a speeding offence, but taking the curve at the posted limit when the plate says less can still be careless driving - and the physics does not care which sign it was.",
        excerptKey: "sign-advisory-plate",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Advisory Speed Plate",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_02",
        topic: "rules",
        question:
          "The centre of the road shows one solid yellow line and one broken yellow line, with the solid line on your side. What does that permit?",
        choices: [
          "Passing, provided no oncoming traffic is visible",
          "Passing only if you can complete it within 100 feet",
          "Passing in either direction, since one line is broken",
          "No passing from your side of the road",
        ],
        correctIndex: 3,
        explanation:
          "The solid line governs your side. With it next to you, you may not cross to pass - even though the traffic coming the other way, with the broken line on its side, may.",
        context:
          "Tennessee's yellow markings say three different things. Broken yellow: passing permitted when clear. Double solid yellow: no passing from either direction, whatever the traffic looks like. Solid-plus-broken: whoever has the broken line may pass, whoever has the solid line may not. You may still cross a solid yellow line to turn into a driveway or side road.",
        trap:
          "'One line is broken so passing must be allowed' is exactly the misreading these markings are designed to catch. The line on your side is the one that binds you.",
        excerptKey: "marking-passing-zone",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Yellow Lane Markings",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s3_03",
        topic: "impairment",
        question:
          "What is the mandatory minimum jail time for a first DUI conviction in Tennessee where the driver's BAC is 0.20 percent or more?",
        choices: ["24 hours", "48 hours", "72 hours", "Seven days"],
        correctIndex: 3,
        explanation:
          "A first DUI carries a minimum of 48 hours, but at a BAC of 0.20 or above that minimum becomes seven days.",
        context:
          "Tennessee's DUI penalties climb hard. A first conviction brings 48 hours minimum, a $350 to $1,500 fine and a year of licence revocation. A second brings 45 days minimum, $600 to $3,500 and two years, with the vehicle subject to seizure. A fourth is a Class E felony. Every conviction also brings litter pick-up in a vest reading 'I am a DRUNK DRIVER'.",
        trap:
          "The 48-hour figure is the one people remember. The 0.20 threshold more than triples it, and it applies on a first offence.",
        excerptKey: "dui-first-jail",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, DUI Penalties",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_04",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a white cane is crossing mid-block, away from any intersection. What does Tennessee require?",
        choices: [
          "Sound your horn so they know a vehicle is present",
          "Proceed, since they are not in a crosswalk",
          "Stop at least 10 feet away until they are off the roadway",
          "Slow to 10 mph and pass behind them",
        ],
        correctIndex: 2,
        explanation:
          "Stop at least ten feet away and stay stopped until they are off the road. The rule applies even when the crossing is not at an intersection or crosswalk.",
        context:
          "Tennessee extends the same protection to a pedestrian using a guide dog, and to a hearing-impaired person whose dog is on a blaze orange leash. The manual adds a specific instruction not to sound the horn, because the noise can startle rather than help. The general duty stands behind all of it: whatever the right-of-way says, you must take extreme caution to avoid striking a pedestrian.",
        trap:
          "The horn feels like a warning and reads as a threat. Tennessee tells you not to use it here at all.",
        excerptKey: "row-blind-pedestrian",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Yield to Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_05",
        topic: "speed",
        question:
          "What speed limit does Tennessee typically post on interstates through its more congested urban areas?",
        choices: ["45 mph", "55 mph", "65 mph", "70 mph"],
        correctIndex: 1,
        explanation:
          "55 mph is the usual urban interstate posting. Seventy is the statutory maximum and appears mostly on rural sections.",
        context:
          "Tennessee interstates carry variable limits, and the manual says so directly: the 70 mph maximum does not apply to all sections and can drop as low as 55 where traffic is heavy. TDOT sets those changes, so a single trip can pass through several. The state, counties and municipalities each set limits for the roads they control.",
        trap:
          "The change is often signed, not announced. Assuming the rural 70 continues into Nashville, Memphis, Knoxville or Chattanooga is exactly the error the variable posting exists to catch.",
        excerptKey: "speed-urban-55",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Urban Interstate Limits",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_06",
        topic: "signals",
        question: "You face a flashing yellow arrow for a left turn. What does it allow?",
        choices: [
          "A protected turn with the right-of-way",
          "A turn only after coming to a complete stop",
          "No turn - it is a warning that the arrow is ending",
          "A turn after yielding to oncoming traffic, bicyclists and pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow arrow is permissive. You may turn, but only on a safe gap and after yielding to everything coming the other way and anyone in the crosswalk.",
        context:
          "Tennessee's arrows form a sequence worth knowing as a set. Green arrow: protected, oncoming traffic is stopped. Steady yellow arrow: the protection is ending, prepare to yield. Flashing yellow arrow: turn permitted on a gap, yield to all. Red arrow: no turn at all. The manual pairs the flashing yellow with a reminder not to pull into the intersection until your path is clear.",
        trap:
          "The flashing yellow arrow looks like a countdown from the green arrow and is not. It grants permission with no priority attached.",
        excerptKey: "signal-protected-arrow",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Permissive Arrows",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_07",
        topic: "safety",
        question:
          "You need to stop hard in a vehicle with anti-lock brakes. What does Tennessee's manual tell you to do with the pedal?",
        choices: [
          "Pump it rapidly to keep the wheels turning",
          "Press until you feel it pulse, then ease off",
          "Apply firm steady pressure and hold it down",
          "Press the brake and pull the parking brake together",
        ],
        correctIndex: 2,
        explanation:
          "Firm, steady, and never pumped. The pulsing and noise are the system working; lifting off cancels it.",
        context:
          "ABS is designed so you can brake and steer at the same time, which is the whole point of it: push the pedal down hard, keep it down, and steer around the hazard. The manual's shorthand is stomp, stay and steer. Without ABS the technique is the opposite - brake to just short of lock-up, release the moment the wheels lock, and reapply.",
        trap:
          "Pumping is the correct technique for the wrong car. On an ABS vehicle it disengages the very system you are relying on.",
        excerptKey: "abs-no-pump",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Braking",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_08",
        topic: "sharing",
        question:
          "Which vehicles must stop at every railroad grade crossing in Tennessee, whether or not any signal is activated?",
        choices: [
          "Any vehicle towing a trailer",
          "School and church buses, common carriers such as taxis, and vehicles carrying flammables or explosives",
          "Only school buses carrying passengers",
          "Any vehicle over 10,000 pounds",
        ],
        correctIndex: 1,
        explanation:
          "School and church buses stop whether or not they have passengers aboard, as do vehicles carrying passengers for hire and vehicles hauling flammables, explosives or other dangerous cargo.",
        context:
          "The manual tells drivers this so they are ready for it. A bus approaching a crossing will pull to the right and its brake lights and side movement give you the warning. Tanker trucks usually put on their hazard flashers before stopping. Never pass such a stopped vehicle on a two-way road, and on a multi-lane road only when the crossing is clearly signalled and those signals are not activated.",
        trap:
          "'Regardless of whether such buses are carrying any passengers' is the part people miss. An empty school bus stops too.",
        excerptKey: "rr-required-stops",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Stopping for Railroad Crossings",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s3_09",
        topic: "parking",
        question:
          "You have to park beside a rural Tennessee road. Beyond getting the wheels off the pavement, what two conditions must you meet?",
        choices: [
          "Leave 10 feet of road width and be visible for 100 feet",
          "Leave 12 feet of road width and switch on your hazard lights",
          "Leave at least 18 feet of road width, and be visible for at least 200 feet in either direction",
          "Leave 20 feet of road width and park facing traffic",
        ],
        correctIndex: 2,
        explanation:
          "Eighteen feet of usable road width for passing traffic, and 200 feet of visibility in both directions. Outside city limits all four wheels should be off the pavement if that is possible.",
        context:
          "Tennessee also requires you to leave a parked vehicle secured: parking brake set, in gear or in park, engine off, keys removed. Leaving the engine running in an unattended vehicle is against the law. If the vehicle is disabled and cannot be moved clear, raise the hood or tie a cloth to the door handle or antenna, and switch on the flashers.",
        trap:
          "Two hundred feet is a little more than the width of a football field. Parking just over the crest of a rise fails the visibility test even if the road width is fine.",
        excerptKey: "park-18-feet",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Routine Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_10",
        topic: "emergencies",
        question:
          "What property damage figure makes a Tennessee crash 'reportable' to the Department of Safety?",
        choices: [
          "Damage in excess of $400 to the property of any one person",
          "Damage in excess of $50",
          "Damage in excess of $1,000",
          "Any damage at all",
        ],
        correctIndex: 0,
        explanation:
          "Over $400 to any one person's property, or any injury or death, makes it reportable - and the owner or driver must file an Owner/Driver Report within 20 days.",
        context:
          "Two different thresholds operate here and they are easy to run together. Immediate notification to police, the sheriff or the Highway Patrol is required for any crash involving death, injury, or property damage over $50. The separate written report to the Department of Safety is triggered at over $400, and is due within 20 days regardless of who was at fault.",
        trap:
          "The $50 figure is for calling the police at the scene; the $400 figure is for the written report afterwards. Both apply to the same crash at different moments.",
        excerptKey: "crash-reportable-400",
        sourceLabel: "Tennessee Driver License Manual - Section B-8, Reporting Crashes",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_11",
        topic: "licensing",
        question:
          "How many passengers may a Tennessee Intermediate Restricted licence holder normally carry?",
        choices: ["None", "Two", "Three", "One"],
        correctIndex: 3,
        explanation:
          "One other passenger. Exceptions exist for a passenger aged 21 or over with a valid unrestricted licence, and for siblings living in the same house when the driver carries a parent's written authorisation for the school run.",
        context:
          "The Intermediate Restricted licence is Tennessee's Level 2. Its holder must be 16, must have held the permit 180 days, must certify 50 hours of driving including 10 at night, and must have kept under six points in the preceding 180 days. The passenger cap and an 11 p.m. curfew are the two restrictions on the licence itself, and neither appears on the department's teen GDL page - only on its driver licence information page and in the manual.",
        trap:
          "The sibling exception is not automatic. It needs the letter from a parent and it covers travel to and from school only.",
        excerptKey: "gdl-level2-web",
        sourceLabel: "Tennessee Department of Safety - Driver License Information",
        sourceUrl: GDL,
      },
      {
        id: "tn_s3_12",
        topic: "signs",
        question:
          "A yellow sign shows an arrow bending right and then left. Two turns are how far apart?",
        choices: [
          "Less than 200 feet apart",
          "Less than 600 feet apart",
          "Less than 1,000 feet apart",
          "Exactly a quarter of a mile apart",
        ],
        correctIndex: 1,
        explanation:
          "A reverse turn sign marks two turns in opposite directions less than 600 feet apart, so you have no straight section to recover in between.",
        context:
          "Tennessee's warning signs carry more precise information than most drivers read out of them. The turn sign covers bends recommended at 30 mph or less; the curve sign covers 30 to 55; the chevron marks a sharp change of direction; and the reverse turn tells you a second bend follows the first almost immediately.",
        trap:
          "A reverse turn is a warning about spacing, not just direction. The point is that you will still be unwinding the first bend when the second arrives.",
        excerptKey: "sign-reverse-turn",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_13",
        topic: "rules",
        question:
          "Tennessee bars a U-turn where you cannot see approaching traffic for how far in each direction?",
        choices: ["200 feet", "300 feet", "400 feet", "500 feet"],
        correctIndex: 3,
        explanation:
          "Five hundred feet in each direction. The same figure applies at or near a curve or the crest of a hill.",
        context:
          "Tennessee lists four situations where a U-turn is barred outright: at any intersection controlled by a traffic light or an officer, anywhere the 500-foot sight line is unavailable, anywhere signs or markings prohibit it, and between intersections in a city. Local governments may ban U-turns on their own streets as well, and the manual suggests driving around the block instead.",
        trap:
          "Five hundred feet also happens to be the headlight-dimming distance. Two different rules, same number, and mixing them up is easy under exam pressure.",
        excerptKey: "uturn-500-feet",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, U-Turns",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s3_14",
        topic: "impairment",
        question:
          "Every DUI conviction in Tennessee carries a litter pick-up condition. How much?",
        choices: [
          "One eight-hour shift",
          "Two eight-hour shifts",
          "Forty hours of community service",
          "Three eight-hour shifts",
        ],
        correctIndex: 3,
        explanation:
          "Three eight-hour shifts of litter pick-up, as a condition of probation, wearing clothing that reads 'I am a DRUNK DRIVER'.",
        context:
          "Tennessee attaches several consequences to any DUI conviction regardless of how many are on the record. A photo ID issued during the revocation period is marked 'DUI Offender'. A vehicle can be seized where a driver is charged with driving on a licence already revoked for DUI. Two DUIs in five years requires an ignition interlock for six months after reinstatement.",
        trap:
          "This is not discretionary community service that a judge may waive. It attaches to every conviction, first offence included.",
        excerptKey: "dui-litter-pickup",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Penalties Applying to Any DUI Conviction",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_15",
        topic: "rightOfWay",
        question:
          "A city bus at a marked stop signals and begins pulling back into the traffic lane ahead of you. What must you do?",
        choices: [
          "Maintain your speed - the bus must wait for a gap",
          "Yield the right-of-way to the bus",
          "Sound your horn and pass on the left",
          "Stop completely until the bus has fully merged",
        ],
        correctIndex: 1,
        explanation:
          "Tennessee requires you to yield to a transit vehicle that has signalled and is pulling back onto the roadway from a bus stop.",
        context:
          "The rule is separate from the school bus law and much less well known. It covers metro buses on urban roads and also cross-country coaches re-entering traffic in smaller communities. Note what it does not do: you are neither required to stop for, nor forbidden to pass, a transit bus that is stopped to pick up or set down passengers.",
        trap:
          "A transit bus and a school bus get very different treatment. Stopping dead behind a city bus at a stop is not what the law asks for; yielding as it pulls out is.",
        excerptKey: "row-transit-bus",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Yield to Emergency Vehicles and Transit Buses",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_16",
        topic: "speed",
        question:
          "What is the minimum speed in the right-hand lanes of a Tennessee interstate under normal conditions?",
        choices: ["30 mph", "45 mph", "50 mph", "55 mph"],
        correctIndex: 1,
        explanation:
          "Forty-five mph in the right lanes. The leftmost lane has a higher floor of 55.",
        context:
          "Tennessee sets these minimums because a vehicle far below the traffic speed is a hazard in its own right. The manual is direct about the consequence: if the minimum is too fast for you, use another road. Driving below a posted minimum is unlawful, and driving so slowly that you block traffic is unlawful even where no minimum is posted.",
        trap:
          "Two different floors on the same road catch people out. Forty-five is the right-lane figure; the left lane demands 55.",
        excerptKey: "speed-minimum-45",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Interstate Speed Limits",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s3_17",
        topic: "safety",
        question:
          "Your car begins to hydroplane in heavy rain. What is the first thing to do?",
        choices: [
          "Ease off the accelerator and slow gradually",
          "Brake firmly to regain grip",
          "Accelerate to push the water aside",
          "Steer sharply toward the shoulder",
        ],
        correctIndex: 0,
        explanation:
          "Let up on the gas gradually. Braking hard is the one thing the manual tells you not to do, because you have no traction to brake with.",
        context:
          "Hydroplaning is a complete loss of contact between tyre and road. Tennessee warns that stopping distances can triple and steering control can vanish entirely, and that although it is more common at higher speeds, tyres can hydroplane at any speed given the right conditions. That is one reason the manual asks for slower speeds at the first sign of rain, when oil and dirt make the surface most slippery.",
        trap:
          "A slight steering input or a gust of wind is enough to start a skid while you are hydroplaning. Doing less is the recovery, not doing more.",
        excerptKey: "hydroplane-response",
        sourceLabel: "Tennessee Driver License Manual - Section B-6, Hydroplaning",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_18",
        topic: "signals",
        question:
          "A lane control signal above your lane shows a steady red X. What does it mean?",
        choices: [
          "The lane is reserved for turning only",
          "You may not drive in the lane beneath it",
          "The lane is about to change direction",
          "You may use the lane once you have stopped",
        ],
        correctIndex: 1,
        explanation:
          "A red X closes the lane to you. A green arrow opens it; a flashing yellow X makes it a turning lane; a steady yellow X means the lane's direction is changing and you should move out.",
        context:
          "Lane control signals hang over reversible lanes, which Tennessee usually marks with double-broken yellow lines and uses on urban commuter routes that flow inbound in the morning and outbound in the afternoon. The same signals also show which toll plaza lanes are open. Check the overhead before you commit to a lane, because the assignment changes through the day.",
        trap:
          "A steady yellow X and a flashing yellow X mean different things. Flashing makes it a turn lane; steady tells you to get out of it.",
        excerptKey: "lane-control-signals",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Lane Control Signals",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_19",
        topic: "sharing",
        question:
          "A tractor ahead of you on a rural road pulls out toward the centre line. What is most likely happening?",
        choices: [
          "The driver is signalling you to pass",
          "The tractor is about to stop",
          "The driver is avoiding a pothole",
          "The tractor is preparing to make a right turn",
        ],
        correctIndex: 3,
        explanation:
          "Farm machinery often swings wide left to make a right turn into a field entrance, and typically has no turn signals to tell you so.",
        context:
          "Tennessee warns that farm equipment can be wider than a single lane, usually travels below 25 mph, and turns into unmarked entrances at any point. It carries the fluorescent orange slow-moving vehicle triangle on the back, and where lights are required, a red lamp visible for 500 feet to the rear. The closing speed problem is severe: cresting a hill at 55 into a tractor doing 15 leaves very little time.",
        trap:
          "Moving left looks like an invitation to pass on the right. It is the same trap large trucks set, and the outcome is a vehicle turning across you.",
        excerptKey: "farm-wide-right",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Sharing the Road with Slow Moving Vehicles",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_20",
        topic: "signs",
        question:
          "You come across temporary traffic signs with a fluorescent pink background. What do they indicate?",
        choices: [
          "An incident such as a crash, fire, flood or hazardous spill",
          "A school crossing",
          "A long-term construction project",
          "A detour for oversized vehicles",
        ],
        correctIndex: 0,
        explanation:
          "Fluorescent pink is Tennessee's incident management colour, used for unplanned events that interrupt normal traffic flow.",
        context:
          "Pink signs go out for something that has just happened; orange signs go out for work that was planned. Both create temporary traffic control zones, and in both you obey the person with the sign or flag ahead of anything else. Fluorescent yellow-green, the third of Tennessee's high-visibility colours, belongs to school zones and pedestrian areas.",
        trap:
          "All three fluorescent colours show up around cones and flashing lights. Pink is the one that means something has gone wrong here in the last few minutes.",
        excerptKey: "color-pink",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Temporary Traffic Control Zones",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_21",
        topic: "rules",
        question:
          "Two vehicles enter a shared centre turn lane from opposite directions at the same time. Who has the right-of-way?",
        choices: [
          "The vehicle turning left across the fewest lanes",
          "The vehicle on the wider road",
          "Neither - both must reverse out",
          "Whichever vehicle entered the lane first",
        ],
        correctIndex: 3,
        explanation:
          "First into the lane has the right-of-way. If a vehicle is already there coming the other way, you may not enter if that would interfere with its turn.",
        context:
          "The centre lane is shared, so Tennessee needs a rule for the moment two drivers want the same piece of it. Enter just before your turn rather than early, wait there for a gap, and never travel more than 300 feet in it or use it to pass. You may turn into it from a side street, stop, and then merge right when the lane beside you clears.",
        trap:
          "Entering early is the habit that causes the conflict. The manual asks you to enter just before the turn precisely so the lane stays available to oncoming drivers.",
        excerptKey: "lane-center-first-vehicle",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Shared Center Turn Lane",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_22",
        topic: "impairment",
        question:
          "At a BAC of .05 percent, roughly how much of a driver's side vision is lost?",
        choices: ["About 10 percent", "About 30 percent", "About 50 percent", "None - only night vision is affected"],
        correctIndex: 1,
        explanation:
          "About 30 percent of side vision at .05, which is well below the .08 limit. Night vision is cut by more than half.",
        context:
          "Tennessee singles out judgment and vision as the two abilities most important to driving and most vulnerable to alcohol. Alcohol relaxes the eye muscles so they cannot focus, worsens glare and slows glare recovery, and makes each eye deliver a slightly different picture, which wrecks depth perception. The manual notes the eyes supply almost 90 percent of the information used in driving.",
        trap:
          "These losses happen below the legal limit. A driver who is lawfully able to drive can already have lost a third of their peripheral view.",
        excerptKey: "alcohol-side-vision",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Alcohol's Effects on Driving Ability",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_23",
        topic: "parking",
        question:
          "You park in a space marked with the international symbol of access without a placard or plate. What is the penalty in Tennessee?",
        choices: [
          "A warning on a first occasion",
          "A misdemeanour punishable by a $100 fine, and the vehicle may be towed",
          "A $25 parking ticket",
          "A civil penalty payable to the property owner",
        ],
        correctIndex: 1,
        explanation:
          "It is a misdemeanour carrying a $100 fine, and your vehicle can be towed. The space is reserved for a vehicle displaying a valid placard or plate and only when the person it was issued to is being transported.",
        context:
          "Tennessee's reserved spaces are marked by the blue sign, the pavement symbol, or both. Beyond disabled parking, painted curb colours restrict where you may stop at all: white for picking up or dropping passengers, yellow for loading while you stay with the vehicle, and red for no stopping, standing or parking in any circumstances.",
        trap:
          "A valid placard is not enough on its own. It has to be that person's trip - borrowing a relative's placard to park is the same offence.",
        excerptKey: "park-handicap-fine",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Handicap Parking Spaces",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_24",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and a train is coming. Which way should the occupants run?",
        choices: [
          "Away from the tracks in the direction the train is travelling",
          "Straight out sideways from the crossing",
          "Toward the train, at about a 45 degree angle away from the tracks",
          "Stay in the vehicle and brace",
        ],
        correctIndex: 2,
        explanation:
          "Get everyone out at once and run toward the train at roughly 45 degrees. That puts you behind the point of impact instead of in the path of the debris the collision throws forward.",
        context:
          "Tennessee's stalled-vehicle drill is: everyone out immediately, even if no train is in sight, then find the Emergency Notification System sign - usually blue, on the crossbuck or signal post - and call the number on it with the DOT crossing number. If you cannot find the sign, call 911. A loaded train weighs around 12 million pounds and needs a full mile to stop from 55 mph.",
        trap:
          "Running the same way the train is travelling puts you exactly where the wreckage goes. The instruction to run toward the train feels wrong and is the safe one.",
        excerptKey: "rr-stalled-45",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Sharing the Road with Trains",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s3_25",
        topic: "licensing",
        question:
          "How many points in a 12-month period bring an adult Tennessee driver a notice of proposed suspension?",
        choices: ["Six", "Nine", "Twelve", "Fifteen"],
        correctIndex: 2,
        explanation:
          "Twelve or more points in 12 months for a driver 18 or over. An advisory letter goes out earlier, at six to 11 points.",
        context:
          "Tennessee runs two thresholds side by side, and the one for young drivers is half the adult figure. A driver under 18 gets a proposed suspension at six points and an advisory letter at one to five. Since reckless driving alone carries six points, a single serious conviction can trigger suspension for a teenager. A defensive driving course can avoid or shorten a suspension, but only once in any five-year period.",
        trap:
          "Six points is a warning for an adult and a suspension notice for a minor. The same conviction lands very differently depending on age.",
        excerptKey: "points-adult-12",
        sourceLabel: "Tennessee Driver License Manual - Section B-8, Driver Improvement Program",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_26",
        topic: "speed",
        question: "When does a Tennessee school zone speed limit apply?",
        choices: [
          "When children are going to or from school, or during a school recess hour",
          "Twenty-four hours a day during the school year",
          "Only on days when the flashers are switched on by police",
          "Between 7 a.m. and 4 p.m. on any weekday",
        ],
        correctIndex: 0,
        explanation:
          "The limit is regulated when children are travelling to or from school or during a recess hour, which is why the signs are usually clock-controlled and flash during those windows.",
        context:
          "School zone signs in Tennessee are the black-on-white speed limit type with flashing yellow lights above, and they are placed wherever children are within walking distance of a school. The zone brings other duties with it: with the flashers operating, a driver must stop to yield to a pedestrian in a marked or unmarked crosswalk and stay stopped until they have crossed the driver's roadway.",
        trap:
          "Exceeding the school zone limit is classed as reckless driving with six automatic points, so the consequence is far heavier than the modest speed difference suggests.",
        excerptKey: "school-zone-when",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Speeding in School Zones",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_27",
        topic: "rules",
        question:
          "Which of these makes passing on the right lawful in Tennessee?",
        choices: [
          "The vehicle ahead is travelling below the speed limit",
          "You can complete the pass using the paved shoulder",
          "The vehicle ahead has signalled a left turn",
          "You are within sight of a traffic light and traffic is stopped",
        ],
        correctIndex: 2,
        explanation:
          "A signalled left turn by the vehicle ahead is one of the three cases Tennessee allows. The others are a multi-lane road with two or more lanes each way, and a wide enough one-way street.",
        context:
          "The manual attaches two absolute prohibitions to all of them. You may never pass on the right by driving off the pavement, and you may never use a bike lane, a parking lane, or the emergency lane within sight of a traffic light or stop sign to do it. The example it gives is the classic one: you slip up the right at a red light and the car ahead turns right into you - and you are at fault, because it was in its proper lane.",
        trap:
          "Slow traffic in front of you is not a licence to undertake. Speed of the vehicle ahead is not on the list at all.",
        excerptKey: "pass-right-conditions",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Passing on the Right",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s3_28",
        topic: "safety",
        question:
          "What does Tennessee mean by the basic rule for safe night driving, 'never outrun your headlights'?",
        choices: [
          "Keep your stopping distance shorter than the distance you can see",
          "Never use high beams on an unlit road",
          "Never drive faster than 55 mph after dark",
          "Keep your headlights on high beam at all times outside towns",
        ],
        correctIndex: 0,
        explanation:
          "Your speed has to let you stop within the distance your lights actually show you. Beyond that you are driving into a space you cannot see.",
        context:
          "Tennessee requires headlights capable of showing a person on the highway at least 200 feet ahead, and asks you to build your night speed around that. The manual's supporting habits: glance well beyond the beams for dark shapes, use the white edge line as a steering guide to avoid oncoming glare, never look straight into approaching headlights, and do not flash your high beams at another driver.",
        trap:
          "Night is not simply darker driving. Depth perception, colour recognition and peripheral vision are all measurably worse after dark, and more fatal crashes happen on Friday and Saturday nights than any other.",
        excerptKey: "night-outrun-headlights",
        sourceLabel: "Tennessee Driver License Manual - Section B-6, Drive Slower at Night",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_29",
        topic: "signals",
        question:
          "You have a green left-turn arrow. What are you still required to do before turning?",
        choices: [
          "Yield to vehicles and pedestrians already in the intersection",
          "Come to a complete stop first",
          "Wait for a gap in oncoming traffic",
          "Sound your horn to warn cross traffic",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow is protected, but the protection does not clear the intersection for you. Anything already inside from the previous phase still goes first.",
        context:
          "Tennessee describes the green arrow as giving you the right-of-way to move in the arrow's direction only, after yielding to vehicles and pedestrians already in the intersection. When the arrow turns yellow, prepare to yield to oncoming traffic; when it turns red, all turns from that lane are prohibited even if the neighbouring lanes have green.",
        trap:
          "'Protected' means oncoming traffic is being held, not that the box is empty. A pedestrian finishing a crossing still has priority over your arrow.",
        excerptKey: "signal-protected-arrow",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Protected Arrows",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_30",
        topic: "sharing",
        question:
          "At 55 mph, roughly how much distance does a loaded tractor-trailer need to stop compared with a car?",
        choices: [
          "About the same, because of its larger brakes",
          "Around 100 feet more",
          "Around 450 feet against about 240 for a car",
          "Around double, at about 480 feet",
        ],
        correctIndex: 2,
        explanation:
          "About 450 feet or more for the truck, against roughly 240 feet for a car at the same speed - close to twice the distance.",
        context:
          "A typical loaded tractor-trailer weighs up to 80,000 pounds and can run more than 70 feet long. Tennessee builds several rules on that stopping figure: never pull out in front of a large vehicle, never cut in and slow down, and after passing do not move back over until you can see the whole front of the truck in your mirror. In crashes involving large trucks, the occupants of the car take 78 percent of the fatalities.",
        trap:
          "Cutting in front and then easing off removes the truck driver's entire safety cushion at the moment you have taken away their room to use it.",
        excerptKey: "truck-stopping-450",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Sharing the Road with Large Trucks and Buses",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_31",
        topic: "impairment",
        question:
          "A 19-year-old is convicted of possessing alcohol at a party. No vehicle was involved. What happens to their driving privileges?",
        choices: [
          "They lose the privilege to drive for one year",
          "Nothing - the offence is unrelated to driving",
          "A 30-day suspension",
          "Six points are added to the record",
        ],
        correctIndex: 0,
        explanation:
          "For an 18-, 19- or 20-year-old, an alcohol purchase, attempted purchase or possession conviction costs a year of driving privileges. A second costs two years.",
        context:
          "Tennessee applies driving consequences to alcohol offences that have nothing to do with a car. The manual states plainly that the law applies whether or not you were driving or even in a vehicle. Younger offenders are covered too: a 13- to 17-year-old who possesses, consumes or sells alcohol or drugs loses driving privileges for a year or until age 17, whichever is longer, even if never licensed.",
        trap:
          "Never having held a licence is no protection. The suspension attaches to the privilege, so it simply delays when you can first be licensed.",
        excerptKey: "alcohol-18-20",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Under 21 Laws",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_32",
        topic: "rightOfWay",
        question:
          "Your light turns green but a car from the previous phase is still crossing in front of you. What must you do?",
        choices: [
          "Proceed - the green gives you priority",
          "Sound your horn and edge forward",
          "Proceed if you can pass behind the vehicle",
          "Yield to the vehicle already in the intersection",
        ],
        correctIndex: 3,
        explanation:
          "You yield to any vehicle already in the intersection, even with a green light. Tennessee lists this among the situations where you must give way.",
        context:
          "Clearing the intersection is Tennessee's priority at signal changes, which is also why it is illegal to move into an intersection and block it after the lights have changed. The manual asks you not to enter at all unless you can get through without stopping, marked 'Do Not Block Intersection' or otherwise. Intersections account for about a third of all motor vehicle crashes.",
        trap:
          "Green means the light has changed, not that the intersection has emptied. The two lag each other by several seconds.",
        excerptKey: "row-in-intersection",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Yielding at Intersections",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_33",
        topic: "rules",
        question:
          "Within what distance must you dim your high beams for a vehicle you are following in Tennessee?",
        choices: ["200 feet", "500 feet", "300 feet", "1,000 feet"],
        correctIndex: 1,
        explanation:
          "Five hundred feet, and the same distance applies to an oncoming vehicle. Tennessee uses one figure for both, which many states do not.",
        context:
          "Five hundred feet is roughly a city block. The manual explains the following case specifically: your high beams reflect off the mirrors of the car ahead and blind that driver, motorcyclists included. It also bans running auxiliary lights or fog lights on their own, or at any time when you are required to dim, and bans driving on parking lights alone at night or in bad weather.",
        trap:
          "Many drivers dim only for oncoming traffic. Tennessee applies the identical 500-foot rule to the car in front of you.",
        excerptKey: "headlights-dim-500",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Dimming of Headlights Required",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s3_34",
        topic: "licensing",
        question:
          "How does Tennessee's manual describe the make-up of the Class D knowledge test?",
        choices: [
          "Roughly a quarter each on signs and signals, safe driving, rules of the road, and drugs and alcohol",
          "Half signs and half rules of the road",
          "Sixty percent rules of the road and forty percent signs",
          "An equal split between signs, rules and licensing procedure",
        ],
        correctIndex: 0,
        explanation:
          "The manual gives four areas at approximately 25 percent each: traffic signs and signals, safe driving principles, rules of the road, and drugs and alcohol.",
        context:
          "That drugs and alcohol quarter is not a drafting choice. The manual states that by law at least 25 percent of the questions must deal with the topic, which is why it recurs so heavily. Note what the manual does not give: it states no question count and no passing score for the in-office test. The 30-question, 80 percent figures on tn.gov belong to the at-home online test for applicants aged 15 to 17.",
        trap:
          "The exam is drawn from Sections B and C of the manual, not Section A. The licensing procedure chapters are background; the driving chapters are the test.",
        excerptKey: "exam-four-areas",
        sourceLabel: "Tennessee Driver License Manual - Section A-4, The Examinations",
        sourceUrl: HB,
      },
      {
        id: "tn_s3_35",
        topic: "signs",
        question:
          "A fluorescent orange triangle with red reflective borders is fixed to the back of a vehicle ahead. What does it tell you?",
        choices: [
          "The vehicle is slow-moving",
          "The vehicle is carrying hazardous material",
          "The vehicle is oversized and needs an escort",
          "The vehicle is a farm vehicle exempt from traffic law",
        ],
        correctIndex: 0,
        explanation:
          "The slow-moving vehicle emblem. It marks farm tractors, machinery, construction equipment and animal-drawn vehicles, all of which travel far below normal road speed.",
        context:
          "Tennessee makes a point of how the emblem behaves in different light: the fluorescent orange centre is highly visible in daylight, and the red reflective border glows in headlights at night. Vehicles carrying it usually move at under 25 mph, which turns a 55 mph approach into a closing speed of 30 mph or more.",
        trap:
          "Animal-drawn vehicles carry the same emblem and have the same right to the road as a car, with the same duty to follow the rules of the road.",
        excerptKey: "smv-emblem",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Slow-Moving Vehicle Emblem",
        sourceUrl: HB,
      },
    ],
  },
];

