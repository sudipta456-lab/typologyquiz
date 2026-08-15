import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Washington State Driver Guide
// (Washington State Department of Licensing, (c) 2025), read from DOL's own
// text-only edition of the guide, plus two dol.wa.gov pages and the sections of
// RCW Title 46 that carry rules the guide states incompletely or not at all.
//
// Four gaps are worth naming, because a learner studying only the guide will
// walk into them.
//
// 1. The guide never states the knowledge test's length or pass mark. Section
//    1.12 describes the exam and stops there. The 40-question, 32-to-pass
//    figure appears only on DOL's "Do I need to take a test?" page, which is
//    what these questions cite.
// 2. The guide never states Washington's default speed limits. It says only
//    that posted limits are maxima for ideal conditions. The 25/50/60 mph
//    statutory defaults come from RCW 46.61.400.
// 3. The guide mentions studded tyres but gives no dates; the legal window
//    comes from RCW 46.37.420.
// 4. The guide gives no numeric following distance and no seconds rule at all -
//    it asks for twice your vehicle's length. Questions here follow the guide
//    rather than importing the three-second rule other states teach.
//
// One genuine conflict is flagged where it arises. On a multilane road the
// guide tells oncoming drivers they may pass a stopped school bus only where
// there are three or more lanes AND a median or barrier separating them.
// RCW 46.61.370 states those as two SEPARATE exceptions - subsection (2) for a
// divided highway, subsection (3) for three or more marked lanes, either one
// sufficient on its own. The statute is the broader rule. Because the exam is
// written from the guide, the single question that touches this is built on a
// road that satisfies both readings, so the answer is the same either way.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads DOL's own
// authoritative wording on the government's site.
const HB =
  "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only";
const TEST =
  "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/do-i-need-take-test";
const rcw = (cite: string) => `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`;

export const washingtonSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Washington Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Washington: what the shapes and colours mean, who goes first, and the handful of numbers DOL's 40-question knowledge test expects you to know cold.",
    questions: [
      {
        id: "wa_s1_01",
        topic: "signs",
        question:
          "You reach an eight-sided red sign at an intersection. What does Washington require of you?",
        choices: [
          "Slow to walking pace and continue if nothing is coming",
          "Yield to traffic on the larger road only",
          "Stop at the line, crosswalk or corner, then look all ways and yield",
          "Stop only if a pedestrian is waiting to cross",
        ],
        correctIndex: 2,
        explanation:
          "The octagon means a full stop, and the guide is specific about where: at the line, the crosswalk or the corner, whichever you meet first. Stopping is only half of it - you then have to look in every direction and give way before moving.",
        context:
          "Washington's signs carry meaning in shape and colour before you can read a word on them, which is what makes them work in fog or heavy rain. The octagon is reserved for STOP and nothing else, the downward triangle for YIELD, and a yellow diamond warns of something ahead. Learning the system pays better than memorising individual signs, because DOL says outright that you are responsible for knowing all signs, including city and county ones the guide never pictures.",
        trap:
          "A rolling stop is still a failure to stop. The wheels have to stop turning, however empty the cross street looks.",
        excerptKey: "stop-sign-meaning",
        sourceLabel: "Washington State Driver Guide - 4.12 Common signs",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light and want to turn right. What does Washington allow?",
        choices: [
          "Turn right without stopping, as long as the way looks clear",
          "Turn right only once a green arrow appears",
          "Turn right only if there is a sign expressly permitting it",
          "Turn right after a complete stop, unless a sign forbids it and provided you have room to enter traffic",
        ],
        correctIndex: 3,
        explanation:
          "Right on red is permitted in Washington by default. Two conditions attach: you must actually come to a complete stop first, and there must be no sign prohibiting the turn. You also need enough room to join traffic rather than forcing anyone to brake.",
        context:
          "Washington treats red as stop-and-stay-stopped, with turns as the exception. Right on red is allowed after a full stop unless posted otherwise, and left on red is allowed onto a one-way street on the same terms. The permission is a default that signs can withdraw, never a right that overrides them, and a red arrow removes it entirely for that direction.",
        trap:
          "\"Clear enough to go\" is not the test. If you never stopped, the turn is unlawful even on an empty road.",
        excerptKey: "red-right-turn",
        sourceLabel: "Washington State Driver Guide - 4.11 Traffic light signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_03",
        topic: "speed",
        question: "What is the speed limit in a Washington school zone?",
        choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
        correctIndex: 3,
        explanation:
          "School zones are 20 mph. The guide gives the reason rather than just the number - higher speeds sharply raise the chance a crash kills the child involved.",
        context:
          "A school zone covers the roads around a school building or playground, and it can be marked with signs, pavement markings or flashing lights. Some signs narrow the hours the 20 mph limit applies. Washington backs this one with cameras: school-zone speeding is among the offences automated cameras are allowed to record, and the ticket goes to the registered owner.",
        trap:
          "The limit does not clock off at the final bell. Children use playgrounds and stay for sport long after classes end, and the guide tells you to expect them.",
        excerptKey: "school-zone-20",
        sourceLabel: "Washington State Driver Guide - 4.17 Zones",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_04",
        topic: "rightOfWay",
        question:
          "Four cars reach a four-way stop one after another. In what order do they go?",
        choices: [
          "Whoever signals first",
          "The cars going straight, then the cars turning",
          "In the order they arrived, first to arrive first to go",
          "Clockwise, starting from the northbound car",
        ],
        correctIndex: 2,
        explanation:
          "Arrival order settles it. The first vehicle to reach the intersection is the first to leave it, the second is the second, and so on down the queue.",
        context:
          "Washington's four-way stop runs on two rules stacked in order. Arrival order comes first and resolves most cases on its own. Only when two vehicles arrive at about the same moment does the tie-break apply, and then you yield to the driver on your right. A third rule sits on top of both: any vehicle turning left yields to vehicles going straight or turning right.",
        trap:
          "A turn signal announces what you mean to do. It does not buy you a place further up the queue.",
        excerptKey: "four-way-first-to-arrive",
        sourceLabel: "Washington State Driver Guide - 4.13 4-way stop",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_05",
        topic: "rules",
        question:
          "You are on a Washington highway with three lanes running your way and you are not passing anyone. Which lane should you be in?",
        choices: [
          "The right lane",
          "The centre lane, to leave both outside lanes free",
          "Whichever lane is emptiest",
          "The left lane, so faster traffic can undertake you",
        ],
        correctIndex: 0,
        explanation:
          "Keep right except to pass. With several lanes going your way, the right lane is the default and the left is a tool you borrow to overtake and then give back.",
        context:
          "Washington states the rule twice over. The guide tells you to drive in the right lane and use the left to pass slower traffic, and RCW 46.61.100 makes it a traffic infraction to sit continuously in the left lane of a multilane road when doing so impedes other traffic. Note what the statute actually punishes - it is the impeding, not the mere occupancy. The guide adds two riders worth remembering: the speed limit still binds you while passing, and carpool lanes are not passing lanes.",
        trap:
          "Travelling at the limit does not entitle you to hold the left lane. The infraction turns on whether you are impeding people behind you, not on whether you are speeding.",
        excerptKey: "keep-right-except-pass",
        sourceLabel: "Washington State Driver Guide - 4.10 General driving guidance",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_06",
        topic: "safety",
        question: "Who has to wear a seat belt in a moving vehicle in Washington?",
        choices: [
          "The driver and front-seat passengers only",
          "Everyone under 18, and the driver",
          "Every person in the vehicle, belted or properly secured in an approved child restraint",
          "Everyone except passengers in the rear seats",
        ],
        correctIndex: 2,
        explanation:
          "Washington's rule reaches every occupant. Each person is either wearing a seat belt or is fastened into an approved child restraint, and there is no back-seat exemption.",
        context:
          "The guide calls buckling up correctly the single most effective thing you can do to protect yourself, and states plainly that driving or riding unbelted is illegal. Fit matters as much as fastening: the shoulder belt lies across the shoulder and chest without crossing the neck or face, and the lap belt sits low across the hips rather than across the stomach. Routing a belt behind your back or under your arm defeats it.",
        trap:
          "Rear-seat passengers are covered too. The belt law is written around every person in a moving vehicle, not around the front row.",
        excerptKey: "seatbelt-everyone",
        sourceLabel: "Washington State Driver Guide - 2.6 Occupant protection",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_07",
        topic: "sharing",
        question:
          "A school bus ahead of you, travelling the same way you are, switches on its red flashing lights and swings out its stop sign. What must you do?",
        choices: [
          "Slow to 20 mph and pass with care",
          "Pass on the left if the road has room",
          "Stop, and stay stopped until the lights go off and the arm folds back in",
          "Stop only if you can see children on the road",
        ],
        correctIndex: 2,
        explanation:
          "Every driver going the same way as the bus stops when the red lights flash and the stop arm extends. You may go once the lights stop flashing, the sign retracts and the arm returns to the bus's front bumper.",
        context:
          "Washington's guide compares school bus lights to traffic signals - red means stop, yellow means slow down and get ready. Traffic behind the bus stops in every configuration of road, with no exception anywhere for lane count. Two details catch people out: you may not slip past using a centre turn lane, because drivers in all turn lanes must stop as well, and the fines for passing a stopped school bus are doubled.",
        trap:
          "Waiting for the lights to stop is not enough on its own. The guide tells you to keep watching for children even after the red lights go dark, because a child who is late crossing does not know the rule has expired.",
        commonlyMissed: true,
        excerptKey: "bus-same-direction",
        sourceLabel: "Washington State Driver Guide - 4.2 Sharing with school buses",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_08",
        topic: "signals",
        question: "A traffic light ahead of you is flashing red. How do you treat it?",
        choices: [
          "As a yield sign - slow down and continue if the way is clear",
          "As a stop sign - come to a full stop, then go when it is your turn",
          "As a broken signal you may ignore",
          "As a warning that the light is about to turn green",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red functions exactly as a stop sign does. You stop completely, then move off when it is your turn in the order of arrival.",
        context:
          "Washington maps each flashing signal onto a sign you already know. Flashing red is a stop sign. Flashing yellow is a yield sign, and the guide tells you to treat that intersection as uncontrolled and proceed only when you have right of way. A signal that has gone dark altogether is different again - that one becomes a four-way stop, whatever the intersection normally looks like.",
        trap:
          "Flashing red and flashing yellow are not two shades of the same instruction. One requires a complete stop, the other requires you to yield.",
        excerptKey: "flashing-red",
        sourceLabel: "Washington State Driver Guide - 4.11 Traffic light signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_09",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Washington?",
        choices: [
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 25 feet",
          "Any distance, as long as you stay with the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet is the margin. It exists so a crew can get a hose onto the hydrant without having to work around your bumper.",
        context:
          "Washington's parking prohibitions are a list of specific distances, and the numbers differ from one another in ways that reward learning them as a set: 15 feet from a fire hydrant, 20 feet from a pedestrian safety zone, 30 feet from a traffic signal, stop sign or yield sign, 50 feet from a railway crossing, and 75 feet from a fire station driveway on the opposite side of the street. Five feet is the margin for a driveway, alley or private road.",
        trap:
          "Staying in the car changes nothing. The distances apply to stopping there at all, not only to leaving the vehicle unattended.",
        excerptKey: "park-hydrant-15",
        sourceLabel: "Washington State Driver Guide - 4.18 Parking",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_10",
        topic: "impairment",
        question:
          "At what blood alcohol concentration is a driver aged 21 or over considered to be driving under the influence in Washington?",
        choices: ["0.08 percent", "0.05 percent", "0.10 percent", "0.02 percent"],
        correctIndex: 0,
        explanation:
          "For drivers 21 and over the figure is 0.08 percent. Reaching it is enough on its own - no further evidence of bad driving is needed for the offence.",
        context:
          "Washington runs two alcohol thresholds and two cannabis thresholds side by side. Drivers 21 and over face the same consequences at 0.08 percent BAC that under-21 drivers face at just 0.02 percent. For cannabis the adult figure is 5.00 nanograms of active THC per millilitre of blood, while for under-21 drivers anything above zero counts. The lower tier is the one people forget exists.",
        trap:
          "Being under 0.08 is not a defence by itself. A driver visibly impaired at a lower reading can still be charged, and for anyone under 21 the line sits at 0.02 anyway.",
        excerptKey: "bac-thresholds",
        sourceLabel: "Washington State Driver Guide - 1.15 Blood Alcohol Concentration",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_11",
        topic: "signs",
        question: "What does a downward-pointing triangle sign require?",
        choices: [
          "A complete stop before entering",
          "Slow down and let traffic with right of way go first",
          "A turn in the direction the point indicates",
          "An immediate lane change",
        ],
        correctIndex: 1,
        explanation:
          "A yield sign asks you to slow down and allow traffic that holds right of way to cross ahead of you. Stopping is sometimes necessary to do that, but it is the yielding that the sign commands.",
        context:
          "Yield and stop are different instructions and Washington keeps them apart deliberately. A stop sign requires the wheels to stop every time regardless of conditions. A yield sign requires you to give way, which on a clear approach may mean rolling through at low speed. The same logic drives the flashing yellow signal, which the guide tells you carries the same meaning as a yield sign.",
        trap:
          "Yield does not mean stop-if-you-feel-like-it. If traffic with right of way is coming, giving way will require you to stop, sign or no sign.",
        excerptKey: "yield-sign-meaning",
        sourceLabel: "Washington State Driver Guide - 4.12 Common signs",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_12",
        topic: "licensing",
        question: "How long is a Washington instruction permit valid?",
        choices: ["6 months", "2 years", "Until you turn 18", "1 year, renewable for a fee"],
        correctIndex: 3,
        explanation:
          "The permit runs for one year and can be renewed on payment of a fee. That clock is separate from the one running on your knowledge exam score.",
        context:
          "Two different periods run at once and they do not match, which is where people come unstuck. The permit itself lasts a year and is renewable. Your knowledge exam score is good for two years, and if you let that lapse before taking the skills exam you sit the knowledge test again. Someone who takes the permit route without enrolling in driver training can test at 15 and a half but still cannot take the skills exam until turning 18.",
        trap:
          "Renewing the permit does not renew the exam score. They are separate clocks, and it is the two-year score that forces a retest.",
        excerptKey: "permit-validity",
        sourceLabel: "Washington State Driver Guide - 1.8 Getting a personal driver license",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_13",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing at an intersection with no painted crosswalk lines. What is your obligation?",
        choices: [
          "None - right of way applies only where a crosswalk is painted",
          "Sound your horn to warn them off",
          "Yield only if they reached the road before you did",
          "Yield to them, because every intersection is legally a crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "Paint is not what creates a crosswalk. Washington treats every intersection as a crosswalk whether or not anyone has marked it, so the pedestrian's right of way is identical either way.",
        context:
          "This is one of the guide's most repeated points, and it repeats it because drivers assume the opposite. Pedestrians and bicyclists hold right of way at crosswalks and intersections whether the road is marked or not. RCW 46.61.235 goes further than the word yield suggests - it requires an approaching driver to stop and remain stopped. Washington also asks you to wait until the person has cleared your lane and one more lane before you move.",
        trap:
          "An unmarked intersection is not an unprotected one. The absence of paint changes the look of the crossing and nothing about the right of way.",
        excerptKey: "every-intersection-crosswalk",
        sourceLabel: "Washington State Driver Guide - 4.13 Common intersections",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_14",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with lights and siren going. What should you do?",
        choices: [
          "Pull to the right side of the road and stop until it has passed",
          "Speed up to clear the road ahead of it",
          "Stop where you are, in your lane",
          "Move to the left lane and keep going",
        ],
        correctIndex: 0,
        explanation:
          "Pull right and stop. Doing it promptly and predictably is what lets the crew plan a path around you.",
        context:
          "Fire trucks, ambulances and police cars running lights or sirens hold right of way over everyone. The guide asks you to move as soon as you see or hear them, and to wait until the vehicle has gone by before signalling and rejoining. It also asks you to rejoin in the order you were travelling before, which keeps the restart orderly instead of turning it into a race.",
        trap:
          "Stopping dead in a live lane is not the same as pulling over. The instruction has two halves - get to the right, then stop.",
        excerptKey: "emergency-vehicle-pull-right",
        sourceLabel: "Washington State Driver Guide - 4.9 Sharing with emergency vehicles",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_15",
        topic: "rules",
        question: "What is Washington's general position on U-turns?",
        choices: [
          "They are banned everywhere except at signalled intersections",
          "They are allowed only in residential areas",
          "They are generally allowed unless a sign says otherwise",
          "They are allowed only where a sign expressly permits them",
        ],
        correctIndex: 2,
        explanation:
          "Washington permits U-turns by default and relies on signs to withdraw the permission. Look for a sign telling you not to, rather than for one telling you that you may.",
        context:
          "This is the reverse of what drivers arriving from stricter states expect, so it is worth fixing in mind. The permission is not unconditional: you need clear visibility in every direction before turning, which rules out doing it on a curve or as you approach the crest of a hill. The guide's reasoning is about sight lines, so the rule bites hardest exactly where you can see least.",
        trap:
          "The absence of a No U-turn sign is not the end of the check. If you cannot see clearly in all directions, the manoeuvre is unsafe whatever the signs say.",
        excerptKey: "uturn-allowed",
        sourceLabel: "Washington State Driver Guide - 4.14 U-turns",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_16",
        topic: "signals",
        question:
          "The light turns yellow just as you enter the intersection. What does Washington tell you to do?",
        choices: [
          "Brake hard and stop inside the intersection",
          "Reverse back behind the stop line",
          "Carry on through at the posted speed",
          "Accelerate to clear it before the red",
        ],
        correctIndex: 2,
        explanation:
          "Once you are already in the intersection, continuing through is the safe move - but at the posted speed. The guide is explicit that clearing the junction does not license you to exceed the limit.",
        context:
          "Yellow means the light is about to turn red, so the default response on approach is to slow and prepare to stop. The rule changes only once you are already inside the intersection, where stopping would leave you blocking crossing traffic. Washington closes the obvious loophole in the same breath: you may not accelerate past the posted limit either to enter or to clear an intersection on a yellow.",
        trap:
          "A yellow light is not a licence to speed up. Doing so is a violation in its own right, quite apart from any collision it causes.",
        excerptKey: "yellow-no-accelerate",
        sourceLabel: "Washington State Driver Guide - 4.11 Traffic light signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_17",
        topic: "sharing",
        question:
          "You are passing a bicyclist on a road with one lane in each direction. How much room must you leave?",
        choices: [
          "At least 3 feet between the bicyclist and the widest part of your vehicle",
          "At least 1 foot",
          "Enough to stay inside your own lane",
          "Whatever gap the bicyclist signals for",
        ],
        correctIndex: 0,
        explanation:
          "Three feet is the minimum, measured from the bicyclist to the widest part of your vehicle - mirrors and trailers included, not just the door.",
        context:
          "Washington builds the rule as a change of lane first and a clearance second. Where there are two lanes going your way, move over a full lane rather than easing past within your own. Three feet is the minimum wherever you cannot give a whole lane. Underpinning both is the flat rule that you cannot share a lane with a bicyclist at all: riders may legally use the full lane and position themselves where drivers can see them, so the space beside them is not yours to take.",
        trap:
          "Three feet is the floor, not the target. The guide reminds you the rider may have to swerve for a hazard you cannot see from behind.",
        commonlyMissed: true,
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Washington State Driver Guide - 4.6 Sharing with bicyclists",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_18",
        topic: "speed",
        question: "What does a posted speed limit sign actually tell you?",
        choices: [
          "The speed you are expected to maintain",
          "The maximum that is legal in ideal conditions",
          "The speed below which you may be ticketed",
          "A recommendation that carries no penalty",
        ],
        correctIndex: 1,
        explanation:
          "The number is a ceiling, and it assumes ideal conditions. Rain, fog, ice or heavy traffic all mean the lawful speed for that moment is lower than the sign.",
        context:
          "Washington asks two questions of every driver, and passing the first does not excuse failing the second. Are you within the posted maximum, and are you going at a speed that is safe for the conditions right now? The guide states outright that you can be ticketed for driving too fast for conditions while still under the posted limit. Driving below the limit is always lawful; exceeding it never is.",
        trap:
          "Matching the posted number is not automatically safe or automatically legal. On ice the safe speed may be half the sign, and the sign is no defence.",
        excerptKey: "speed-ideal-conditions",
        sourceLabel: "Washington State Driver Guide - 4.12 Speed Limit",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_19",
        topic: "signs",
        question: "In Washington's sign system, what does a red sign indicate?",
        choices: [
          "Construction and maintenance warnings",
          "Guide and directional information",
          "A prohibited or restricted action",
          "Public recreation and historical areas",
        ],
        correctIndex: 2,
        explanation:
          "Red marks something you must not do, or may do only under restriction. Stop, Do Not Enter, Wrong Way and the red-slash prohibitions all share the colour for that reason.",
        context:
          "Colour tells you the category of a sign before you are near enough to read it. Red is prohibition, orange is construction and maintenance, yellow warns of general road conditions and fluorescent yellow-green is reserved for school, pedestrian and bicycle activity. White is regulatory, green gives guidance and directions, blue points to motorist services and brown to recreation and historical sites.",
        trap:
          "Yellow and fluorescent yellow-green are separate categories in Washington. The bright green-tinted one specifically flags people - schoolchildren, pedestrians, cyclists.",
        excerptKey: "colour-red",
        sourceLabel: "Washington State Driver Guide - 4.12 Signs",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_20",
        topic: "safety",
        question: "When does Washington law require your headlights to be on?",
        choices: [
          "From half an hour after sunset to half an hour before sunrise",
          "Only between midnight and 5 a.m.",
          "From sunset to sunrise exactly",
          "Only when street lights are lit",
        ],
        correctIndex: 0,
        explanation:
          "The legal window opens half an hour after sunset and closes half an hour before sunrise. The half-hour margins are part of the rule, not a courtesy.",
        context:
          "RCW 46.37.020 adds a second trigger the guide leaves out: lights are required at any other time when poor light or weather means people and vehicles are not clearly discernible at a thousand feet. That makes the rule about visibility rather than the clock. The guide's own advice is simpler - run them all the time, and certainly whenever it is rainy, snowy, foggy or smoky.",
        trap:
          "Daytime running lights are not headlights. They are dimmer and, importantly, they do not switch on your tail lights, which is what traffic behind you needs to see.",
        excerptKey: "headlight-times",
        sourceLabel: "Washington State Driver Guide - 2.5 Vehicle maintenance",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_21",
        topic: "parking",
        question: "How far from the curb may a parked vehicle sit in Washington?",
        choices: [
          "No more than 6 inches",
          "No more than 12 inches",
          "No more than 18 inches",
          "Any distance, provided a lane stays open",
        ],
        correctIndex: 1,
        explanation:
          "Twelve inches is the limit. Parking further out than that puts your vehicle into the space traffic and cyclists are using.",
        context:
          "The guide frames all parking around one idea: a parked vehicle must not become a hazard. The twelve-inch rule appears twice, once in the list of prohibitions and again as the finishing step of parallel parking. Other rules in the same list forbid parking facing oncoming traffic, double parking alongside a parked vehicle, and stopping on a bridge, in a tunnel or on a freeway shoulder except in an emergency.",
        trap:
          "Being parked legally close to the curb is separate from being parked in a permitted place. Both have to be right.",
        excerptKey: "park-curb-12-inches",
        sourceLabel: "Washington State Driver Guide - 4.18 Parking",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_22",
        topic: "rules",
        question: "How far before a turn should you signal in Washington?",
        choices: [
          "As you begin the turn",
          "At least 50 feet",
          "Only when another vehicle is behind you",
          "At least 100 feet",
        ],
        correctIndex: 3,
        explanation:
          "A hundred feet gives the people around you time to read your intention and adjust. The guide repeats the figure for turns and for lane changes alike.",
        context:
          "Washington treats signalling as communication rather than as paperwork, which is why the guide asks you to signal even when you cannot see anyone else about - the driver you have not spotted is exactly the one who needs the warning. It adds two habits: check that the signal actually cancels after the turn, and if a bulb has failed, fall back on hand signals out of the driver's window.",
        trap:
          "Signalling as you start to turn is too late to be useful. The point is to warn people before you act, not to narrate what you are already doing.",
        excerptKey: "signal-100-turn",
        sourceLabel: "Washington State Driver Guide - 4.14 Turning",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_23",
        topic: "impairment",
        question:
          "Cannabis is legal for adults aged 21 and over in Washington. What does that mean for driving?",
        choices: [
          "Driving after consuming any cannabis is illegal at every age",
          "Adults over 21 may drive after using cannabis",
          "It is permitted as long as you stay under the posted speed limit",
          "It is permitted if the cannabis was an edible rather than smoked",
        ],
        correctIndex: 0,
        explanation:
          "Legal to possess and legal to drive on are two different things. The guide states that driving after consuming any cannabis is illegal for all ages, and that there is no safe amount for driving.",
        context:
          "Washington's per se limit is 5.00 nanograms of active THC per millilitre of blood for drivers 21 and over, and anything above zero for drivers under 21. The guide extends the same logic to prescription and over-the-counter medicines - a drug being lawfully obtained says nothing about whether it is safe to drive on. It singles out polydrug use, mixing substances, as the impairment most often present in fatal crashes.",
        trap:
          "The form the cannabis takes is irrelevant. Edibles, vapes, tinctures, patches and topicals are all named in the guide.",
        excerptKey: "cannabis-all-ages",
        sourceLabel: "Washington State Driver Guide - 3.1 Cannabis and driving",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_24",
        topic: "rightOfWay",
        question:
          "You are turning left at an intersection as an oncoming car comes straight through. Who yields?",
        choices: [
          "The oncoming car, because you signalled first",
          "You do - a left-turning vehicle yields to traffic going straight",
          "Whichever driver arrived second",
          "Neither, provided both move slowly",
        ],
        correctIndex: 1,
        explanation:
          "The left turn yields. Crossing the path of oncoming traffic is your manoeuvre to fit in safely, so the burden of waiting sits with you.",
        context:
          "This rule runs right through Washington's right-of-way system. At a four-way stop, a left-turning vehicle yields to anything going straight or turning right, even if it arrived first. RCW 46.61.185 puts the same duty on any driver turning left within an intersection or into an alley, private road or driveway. The guide's practical advice is to count the seconds an approaching vehicle takes to reach a fixed marker, and to err towards giving yourself too much time.",
        trap:
          "Arriving first does not override this one. Order of arrival settles ties between vehicles doing the same thing, but a left turn yields regardless.",
        excerptKey: "left-turn-yields",
        sourceLabel: "Washington State Driver Guide - 4.13 4-way stop",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_25",
        topic: "signals",
        question: "What does a green arrow signal mean?",
        choices: [
          "Proceed with caution after yielding to oncoming traffic",
          "The light is about to turn red",
          "You may turn only if no pedestrians are present",
          "You may go in the arrow's direction with right of way",
        ],
        correctIndex: 3,
        explanation:
          "A green arrow is a protected movement. It gives you right of way in the direction it points, which is what distinguishes it from a plain green ball.",
        context:
          "The arrow signals are a matched set. Green arrow means go, with right of way, and there should be no oncoming vehicles, crossing traffic or pedestrians while it lasts. Yellow arrow means the light will turn red shortly, so prepare to stop and give way to oncoming traffic. Red arrow means you cannot go in that direction at all, which also removes the ordinary right-on-red permission.",
        trap:
          "A green ball and a green arrow are not the same permission. On a plain green you still yield to oncoming traffic and to pedestrians before turning across them.",
        excerptKey: "green-arrow",
        sourceLabel: "Washington State Driver Guide - 4.11 Traffic light signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_26",
        topic: "emergencies",
        question: "You are involved in a collision. What does Washington require first?",
        choices: [
          "Leave and report it at a police station within 24 hours",
          "Move both vehicles away from the area before anyone arrives",
          "Do not drive away, and call 911 if anyone is injured or killed",
          "Wait in your vehicle until another driver calls for help",
        ],
        correctIndex: 2,
        explanation:
          "Staying is the first duty. If anyone is hurt or killed you call 911, and law enforcement has to be notified.",
        context:
          "The guide's sequence is stay, make safe, then report. Move the vehicle to the side of the road but keep it near the collision site, turn off wrecked vehicles, and stay out of live traffic lanes. If a law enforcement officer does not file a report for you, you file a collision report form yourself within four days, which is a requirement of state law rather than an option.",
        trap:
          "Moving your vehicle out of the traffic lane is not the same as leaving. Keep it near the site - driving off is a separate and much more serious offence.",
        excerptKey: "collision-do-not-leave",
        sourceLabel: "Washington State Driver Guide - 5.9 Crashing a vehicle",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_27",
        topic: "licensing",
        question: "In what order must you take Washington's two driver licence exams?",
        choices: [
          "Knowledge exam first, then the skills exam",
          "Skills exam first, then the knowledge exam",
          "Either order, as long as both are passed within a year",
          "Both on the same day, at the same location",
        ],
        correctIndex: 0,
        explanation:
          "The knowledge exam comes first and gates the other. You cannot book the skills exam until you have passed it.",
        context:
          "Washington runs a knowledge exam on the rules of the road and a skills exam on applying them behind the wheel. Passing the knowledge exam starts a two-year window in which to complete the skills exam. You can take either at an approved driver training school or by appointment at a driver licensing office. For the skills exam only you and the examiner may be in the car, aside from service animals and sign language interpreters.",
        trap:
          "Passing the knowledge exam does not put a licence in your hand. It gets you a permit and opens the two-year window for the skills test.",
        excerptKey: "knowledge-before-skills",
        sourceLabel: "Washington State Driver Guide - 1.12 Personal driver license exams",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_28",
        topic: "sharing",
        question: "At a railway crossing, who has right of way?",
        choices: [
          "Whichever arrives at the crossing first",
          "The train, always",
          "Road traffic, when the gates are up",
          "The train only when its horn is sounding",
        ],
        correctIndex: 1,
        explanation:
          "Trains hold right of way without exception. The guide's reason is physics rather than courtesy - a train can need up to a mile to stop, even at low speed.",
        context:
          "When lights flash and bells ring you stop, whether or not the gate has come down, and driving around a lowered gate is never permitted. Washington sets the stopping band at between 15 and 50 feet from the nearest rail. The guide warns that trains can come from either direction on any track, and that they are usually closer, quieter and faster than they look.",
        trap:
          "An absence of visible train is not clearance. The guide tells you to trust the signals over your own eyes, because a train's speed and distance are notoriously hard to judge.",
        excerptKey: "train-right-of-way",
        sourceLabel: "Washington State Driver Guide - 4.7 Sharing the road with trains",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_29",
        topic: "safety",
        question: "How fast should you drive at night on an unlit road?",
        choices: [
          "Slowly enough to stop within the distance your headlights light up",
          "At the posted limit, whatever the lighting",
          "At least 10 mph below the limit at all times",
          "Fast enough to keep up with the car ahead",
        ],
        correctIndex: 0,
        explanation:
          "Your headlights set your safe speed at night. If you cannot stop inside the lit area - roughly 400 feet - you are outdriving your own lights.",
        context:
          "Night driving strips away the distance vision you rely on in daylight, so Washington asks you to slow down and lengthen your following distance. Use high beams when nothing is coming, and switch back both for oncoming traffic and when following another vehicle. If someone approaches with their high beams up, look towards the right edge of the road and use it as a steering guide rather than staring into the glare.",
        trap:
          "Tinted or coloured lenses do not cut glare usefully at night - they cut your vision. The guide tells you not to wear sunglasses after dark or on overcast days.",
        excerptKey: "night-headlight-glow",
        sourceLabel: "Washington State Driver Guide - 5.6 Night driving",
        sourceUrl: HB,
      },
      {
        id: "wa_s1_30",
        topic: "signs",
        question: "What does a fluorescent yellow-green sign warn you about?",
        choices: [
          "Roadworks and maintenance ahead",
          "A change in the surface of the road",
          "Motorist services such as fuel and lodging",
          "School, pedestrian or bicycling activity",
        ],
        correctIndex: 3,
        explanation:
          "That deliberately unusual shade is reserved for people - school zones, pedestrian crossings and bicycle activity. It is chosen to stand apart from ordinary yellow warnings.",
        context:
          "Washington splits warning signs across two colours on purpose. Ordinary yellow flags general and unexpected road conditions - curves, hills, merges, slippery surfaces. Fluorescent yellow-green is narrower and always about vulnerable people. Orange is different again and means construction or maintenance, where the guide notes fines double for offences committed with workers present.",
        trap:
          "The colour is not decorative or regional. Seeing it should make you look for children and pedestrians specifically, not just slow down generically.",
        excerptKey: "colour-yellow-green",
        sourceLabel: "Washington State Driver Guide - 4.12 Signs",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Signs, Signals and Markings",
    difficulty: "easy",
    description:
      "What the paint and the posts are telling you. Washington's lane markings, signal states and sign colours, plus the parking distances and lane rules that go with them.",
    questions: [
      {
        id: "wa_s2_01",
        topic: "signals",
        question:
          "You arrive at an intersection where the traffic signal is completely dark. How should you treat it?",
        choices: [
          "As a four-way stop - stop, then yield to traffic on your right",
          "As a green light for the larger road",
          "As a yield sign for every approach",
          "Continue at normal speed while sounding your horn",
        ],
        correctIndex: 0,
        explanation:
          "A dead signal becomes a four-way stop. Every approach stops, then yields to the driver on the right before proceeding with care.",
        context:
          "This rule matters most where it is least intuitive - at a big junction where one road obviously carries more traffic than the other. Washington gives the larger road no priority when the lights fail. The guide's three steps are to come to a complete stop, yield to traffic on your right, and proceed cautiously when it is safe. A flashing red is treated the same way; a flashing yellow is not.",
        trap:
          "Being on the main road confers nothing here. Drivers who assume the through route keeps priority are the ones who collide at dark signals.",
        excerptKey: "dark-signal-4way",
        sourceLabel: "Washington State Driver Guide - 4.10 Broken lights or signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_02",
        topic: "signs",
        question: "What kind of information does a blue roadside sign carry?",
        choices: [
          "Recreation and historical areas",
          "Regulatory instructions you must obey",
          "Motorist services such as hospitals, fuel and rest areas",
          "Directions and distances to cities",
        ],
        correctIndex: 2,
        explanation:
          "Blue points to services for drivers - hospitals, rest areas, electric vehicle charging and similar. It carries guidance, never a rule.",
        context:
          "Washington's non-warning colours divide the world up neatly once you see the pattern. White is regulatory and states rules you must follow. Green gives guide and directional information, including distances to cities and airports. Blue is motorist services. Brown covers public recreation and cultural or historical areas. None of the last three ever imposes a legal obligation on its own.",
        trap:
          "Blue and brown both look like tourist information at a glance. Blue is practical services; brown is parks, trails and historical sites.",
        excerptKey: "colour-blue",
        sourceLabel: "Washington State Driver Guide - 4.12 Signs",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_03",
        topic: "signals",
        question: "A traffic light is flashing yellow. What does Washington say it means?",
        choices: [
          "Stop completely before proceeding",
          "It carries the same meaning as a yield sign",
          "The signal has failed and should be reported",
          "Traffic from the left has right of way",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow is a yield sign in light form. You treat the intersection as uncontrolled and go only when you actually hold right of way.",
        context:
          "Washington states this more precisely than most handbooks do. Rather than the vague instruction to proceed with caution, the guide equates flashing yellow with a yield sign and tells you to treat the junction as uncontrolled. That matters, because uncontrolled intersections have their own yield rules - you give way to a vehicle already in the intersection, to traffic on a state highway if you are joining from a secondary road, and when turning left across oncoming traffic.",
        trap:
          "Proceeding with caution is not the same as yielding. A flashing yellow can still require you to stop dead if someone else holds right of way.",
        excerptKey: "flashing-yellow-yield",
        sourceLabel: "Washington State Driver Guide - 4.11 Traffic light signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_04",
        topic: "signals",
        question: "What separates traffic travelling in opposite directions?",
        choices: [
          "Yellow lines",
          "White lines",
          "Double white lines only",
          "Dashed lines of any colour",
        ],
        correctIndex: 0,
        explanation:
          "Yellow means opposing directions; white means traffic going the same way you are. That single distinction unlocks most of Washington's markings.",
        context:
          "Once the colour tells you the direction, the pattern tells you the permission. A dashed yellow centre line means you may use the oncoming lane to pass when it is safe. A solid yellow on your side means no passing. Double solid yellow means no passing in either direction. Where one line is solid and one dashed, the side the dashed line sits on is the side allowed to pass.",
        trap:
          "Colour and pattern answer different questions. Yellow versus white tells you the direction of travel; solid versus dashed tells you whether you may cross.",
        excerptKey: "yellow-white-lines",
        sourceLabel: "Washington State Driver Guide - 4.16 Road markings",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_05",
        topic: "parking",
        question: "How close to a stop sign, yield sign or traffic signal may you park?",
        choices: ["10 feet", "15 feet", "20 feet", "30 feet"],
        correctIndex: 3,
        explanation:
          "Thirty feet. The margin keeps the sign or signal visible to drivers approaching behind you, which is the whole reason it exists.",
        context:
          "Washington groups all three traffic-control devices under the same distance, which makes it easier to remember than it first looks. Around it sit the other figures: 15 feet from a fire hydrant, 20 feet from a pedestrian safety zone, 50 feet from a railway crossing, 5 feet from a driveway or alley, and 75 feet from a fire station driveway when you are on the opposite side of the street.",
        trap:
          "Traffic signals are in this group too, not just stop signs. Parking under the light is exactly what the rule forbids.",
        excerptKey: "park-signal-30",
        sourceLabel: "Washington State Driver Guide - 4.18 Parking",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_06",
        topic: "signals",
        question: "What are you allowed to do at double solid white lines?",
        choices: [
          "Cross them to pass a slower vehicle",
          "Cross them only to reach an exit",
          "Nothing - crossing them is illegal",
          "Cross them when no other traffic is present",
        ],
        correctIndex: 2,
        explanation:
          "Double solid white lines are a barrier. Washington makes crossing them illegal outright, with no exception for a clear road or a nearby exit.",
        context:
          "White lines separate lanes moving the same way, and the pattern grades how freely you may move between them. A single dashed white line may be crossed to change lanes when it is safe. A single solid white line asks you to stay put unless something specific requires the change. Double solid white removes the choice. Shorter dashed white lines carry a different message again - they warn the lane itself is ending.",
        trap:
          "Freeway exits are where people talk themselves into crossing these. Missing your exit is not a defence; the lines are a barrier regardless.",
        commonlyMissed: true,
        excerptKey: "double-white-illegal",
        sourceLabel: "Washington State Driver Guide - 4.16 Road markings",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_07",
        topic: "rules",
        question:
          "You are in a centre left-turn lane marked with left turn arrows. What may you use it for?",
        choices: [
          "Passing slower traffic on the left",
          "Left turns from or into the roadway, and permitted U-turns",
          "Travelling any distance, as long as you signal",
          "Waiting to merge into the through lanes",
        ],
        correctIndex: 1,
        explanation:
          "The shared centre lane exists for left turns made from either direction, and for U-turns where those are allowed. It is not a travel lane.",
        context:
          "This lane is unusual in being shared by traffic coming both ways, so drivers face each other in it. Washington says outright it must not be used for passing, and sets a limit on how far you may travel in it - you should not go more than 300 feet. You may cross a solid yellow line on your side to enter it. Because oncoming drivers have equal right to the same lane, the guide tells you to keep watching traffic from the other direction.",
        trap:
          "It looks like an empty lane and drivers treat it as one. Using it to overtake, or running along it towards a distant turn, are both misuses.",
        excerptKey: "centre-lane-both-ways",
        sourceLabel: "Washington State Driver Guide - 4.16 Turn lane",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_08",
        topic: "signs",
        question: "What does an orange sign or cone tell you?",
        choices: [
          "A school crossing is ahead",
          "Recreation facilities are nearby",
          "A regulatory limit is changing",
          "You are entering a construction or maintenance area",
        ],
        correctIndex: 3,
        explanation:
          "Orange is the construction and maintenance colour. Seeing it means roadworkers, equipment or lane changes are ahead.",
        context:
          "Washington attaches real consequences to the orange zone. Fines double for offences committed in construction areas when workers are present, and drivers, pedestrians and cyclists alike must yield to highway construction personnel, to vehicles showing flashing yellow lights, and to equipment inside the zone. The guide asks you to reduce speed even when no workers are visible, because narrowed lanes and rough surfaces are hazards on their own.",
        trap:
          "The zone does not end at the last cone. Washington asks you to observe the posted work zone signs until you actually pass the End Road Work sign.",
        excerptKey: "work-zone-fines-double",
        sourceLabel: "Washington State Driver Guide - 4.12 Work zone signs",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_09",
        topic: "rules",
        question: "What does a dashed yellow line down the middle of a two-lane road allow?",
        choices: [
          "Using the oncoming lane to pass, when it is safe",
          "Parking along the centre of the road",
          "Travelling in either lane freely",
          "Passing only on the right",
        ],
        correctIndex: 0,
        explanation:
          "A dashed yellow centre line permits passing, which means briefly using the lane oncoming traffic is in. The judgement about whether it is safe is still yours.",
        context:
          "Yellow tells you the traffic beyond the line is coming towards you; the pattern tells you whether you may cross. Dashed permits passing when safe, solid forbids it, and double solid forbids it in both directions. Where a solid and a dashed line run together, the dashed side may pass and the solid side may not. Washington adds a blanket instruction that overrides all of this: never cross into oncoming traffic to pass a pedestrian or a bicyclist.",
        trap:
          "Permission to pass is not confirmation it is safe. Hills, curves and no-passing signs can all forbid what the paint appears to allow.",
        excerptKey: "dashed-yellow-pass",
        sourceLabel: "Washington State Driver Guide - 4.16 Road markings",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_10",
        topic: "sharing",
        question: "Which vehicles may use a Washington HOV lane?",
        choices: [
          "Any vehicle, during off-peak hours",
          "Carpools, vanpools, buses and motorcycles",
          "Only buses and emergency vehicles",
          "Any vehicle displaying a toll transponder",
        ],
        correctIndex: 1,
        explanation:
          "HOV lanes carry carpools, vanpools and buses, and motorcycles are expressly allowed too. The occupancy requirement is on the signs.",
        context:
          "HOV lanes are marked with a diamond on signs and on the pavement, and are separated from general traffic by a solid white line. The occupancy number is posted rather than fixed statewide, so you read the sign for that stretch. Express toll and high occupancy toll lanes work differently again: buses, vanpools, carpools and motorcycles travel free, while a solo driver may pay a toll to use them.",
        trap:
          "An HOV lane is not a passing lane. Washington says so directly, and being in a hurry does not qualify you to use one.",
        excerptKey: "hov-motorcycles",
        sourceLabel: "Washington State Driver Guide - 4.16 HOV / Carpool lane",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_11",
        topic: "signals",
        question: "What does a red arrow at a signal mean?",
        choices: [
          "You cannot travel in the arrow's direction",
          "You may turn after stopping, as with a red ball",
          "The arrow is about to turn green",
          "You may go if no pedestrians are waiting",
        ],
        correctIndex: 0,
        explanation:
          "A red arrow closes that movement completely. Unlike a plain red ball, it does not carry the usual permission to turn after stopping.",
        context:
          "The distinction between a red ball and a red arrow decides whether turning on red is available at all. At a red ball you may turn right after a complete stop, or left onto a one-way street, unless a sign forbids it. A red arrow removes that. The guide notes a separate case where right on red disappears too - you may not turn right on red near a bicycle box, and you stay behind the white line until the box clears.",
        trap:
          "Treating a red arrow like a red ball is the classic error. The arrow is a prohibition on the movement, not a pause before it.",
        commonlyMissed: true,
        excerptKey: "red-arrow",
        sourceLabel: "Washington State Driver Guide - 4.11 Traffic light signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_12",
        topic: "parking",
        question: "What do the white stripes painted beside a disabled parking space mean?",
        choices: [
          "Motorcycles may park there",
          "It is an access aisle and must be kept clear",
          "It is overflow parking for the adjacent space",
          "Loading and unloading is permitted for up to ten minutes",
        ],
        correctIndex: 1,
        explanation:
          "That striped area is an access aisle. It is the space someone needs to get a wheelchair or a ramp out beside the vehicle, so blocking it is a finable offence.",
        context:
          "Washington fines you both for parking in a reserved stall without displaying the required plate or placard, and separately for blocking the access aisle. The guide adds a rule people rarely think about: do not hang a disabled parking placard from your rearview mirror while driving, because it obstructs your view. Applications require both you and your physician to complete the form.",
        trap:
          "The striped area is not spare tarmac or a motorcycle bay. It is functional space, and parking there defeats the point of the accessible stall next to it.",
        excerptKey: "access-aisle",
        sourceLabel: "Washington State Driver Guide - 4.18 Reserved disabled parking",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_13",
        topic: "signs",
        question:
          "You see a sign showing a symbol inside a red circle with a red slash through it. What is it telling you?",
        choices: [
          "A hazard of that type lies ahead",
          "That activity is permitted here only",
          "A service of that type is nearby",
          "That action is not allowed",
        ],
        correctIndex: 3,
        explanation:
          "The red circle and slash is a prohibition. Whatever the symbol shows - a left turn, a right turn, a U-turn - is the thing you may not do.",
        context:
          "Red is Washington's colour for prohibited or restricted action, and the circle-and-slash is its most transferable form because it works on any symbol without words. The same red logic covers Do Not Enter, a square sign with a white horizontal bar inside a circle meaning you cannot enter from that direction, and Wrong Way, which the guide tells you to respond to by stopping and turning around immediately.",
        trap:
          "A yellow diamond showing the same symbol means something entirely different. Yellow warns you a feature is ahead; red forbids you from doing it.",
        excerptKey: "colour-red",
        sourceLabel: "Washington State Driver Guide - 4.12 Not allowed",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_14",
        topic: "rules",
        question:
          "There are no lane markings at all on the road you are driving. Where should you position your vehicle?",
        choices: [
          "In the middle of the roadway",
          "Wherever the surface is best",
          "As close to the right side as is safely possible",
          "Straddling the centre until traffic appears",
        ],
        correctIndex: 2,
        explanation:
          "With no paint to guide you, keep as far right as you safely can. The absence of markings does not suspend the rule about driving on the right.",
        context:
          "Washington's general guidance is that you drive on the right side of the road, and the only time you should be on the left is when you are safely and legally passing on a two-lane road. Unmarked roads are common on rural and residential streets where an oncoming vehicle may appear over a crest with very little warning, so holding a right-hand position gives both drivers somewhere to go.",
        trap:
          "An empty road is not an invitation to drive down the middle. The vehicle you have not yet seen is the reason the rule exists.",
        excerptKey: "no-markings-right",
        sourceLabel: "Washington State Driver Guide - 4.16 Road markings",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_15",
        topic: "signals",
        question: "What does a steady yellow X above a reversible lane mean?",
        choices: [
          "The lane is changing direction - move out of it when safe",
          "The lane is open to high-occupancy vehicles only",
          "Slow down but stay in the lane",
          "The lane is closed to all traffic permanently",
        ],
        correctIndex: 0,
        explanation:
          "A steady yellow X warns that the lane is about to reverse. You leave it as soon as you can do so safely.",
        context:
          "Reversible and express lanes switch direction on fixed schedules to match commuter flows, and can also be turned around for major events or incidents. They are usually marked with double-dashed white lines, and overhead signs govern them. A green arrow means the lane is yours to use, a red X means it is not, and the steady yellow X is the transition between the two.",
        trap:
          "Yellow here is not the same as a yellow traffic light. It is not asking you to slow down in the lane - it is asking you to get out of it.",
        excerptKey: "reversible-lane-signs",
        sourceLabel: "Washington State Driver Guide - 4.16 Reversible lane",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_16",
        topic: "sharing",
        question: "What is a sharrow marking on the road telling you?",
        choices: [
          "The lane is reserved for bicycles only",
          "Bicycles must ride single file here",
          "A bike lane starts at this point",
          "The lane is shared with bicycle traffic",
        ],
        correctIndex: 3,
        explanation:
          "A sharrow marks a lane that cars and bicycles share. It is not a bike lane, and it does not reserve the space for either one.",
        context:
          "Washington asks you to respond to a sharrow by slowing down and leaving at least three feet when passing. Riders are meant to position themselves in line with the markings and travel in the direction the arrow points. A proper bike lane is different: it is bounded by solid white lines and marked with a bicycle symbol, and you may drive in it only to turn or to cross it when parking near the curb.",
        trap:
          "A sharrow does not oblige a cyclist to hug the edge. It tells you the lane is shared, and Washington allows riders to use the full lane.",
        excerptKey: "sharrows",
        sourceLabel: "Washington State Driver Guide - 4.16 Sharrows",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_17",
        topic: "parking",
        question: "Where must you stop when a stop line is painted at a signal or stop sign?",
        choices: [
          "With your front wheels on the line",
          "Level with the signal head",
          "Before your vehicle reaches the line, or the crosswalk if there is one",
          "Anywhere within one car length of the line",
        ],
        correctIndex: 2,
        explanation:
          "You stop before reaching the line. Where there is a crosswalk as well, that becomes the limit - the space beyond belongs to people crossing.",
        context:
          "Washington gives you a useful reference point for judging this from the driver's seat: when the stop line sits under your side mirror, your front bumper is about three to six inches back from it. The guide also handles the case where stopping correctly leaves you unable to see the cross street - edge forward slowly until you can, which lets crossing drivers see your bumper before you can see them.",
        trap:
          "Creeping forward to see the signal head puts your bumper into the crosswalk, which is precisely where pedestrians are entitled to be.",
        excerptKey: "stop-line",
        sourceLabel: "Washington State Driver Guide - 4.16 Stop line",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_18",
        topic: "signs",
        question:
          "A sign shows a recommended speed below a curve warning symbol. What is it telling you?",
        choices: [
          "The legal maximum for that curve",
          "The minimum speed required through the curve",
          "The speed traffic ahead is currently travelling",
          "A speed recommended for the hazard, which conditions may lower further",
        ],
        correctIndex: 3,
        explanation:
          "Speed warning signs recommend a speed for a specific hazard, usually a curve. Road, weather and traffic can all mean the safe speed is lower still.",
        context:
          "Washington separates regulatory limits from advisory ones. A white regulatory speed limit sign states the legal maximum in ideal conditions. A yellow advisory speed under a warning symbol suggests a speed suited to the hazard ahead. Variable speed limit signs are different again - those are digital, change with traffic, and can close entire lanes ahead of slower traffic. Some roads also post minimum speeds, which you are required to meet so you do not become a hazard.",
        trap:
          "An advisory speed is not a floor you are safe at. Ice or fog on the same curve can make even the advisory number too fast.",
        excerptKey: "speed-ideal-conditions",
        sourceLabel: "Washington State Driver Guide - 4.12 Speed warning",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_19",
        topic: "rules",
        question: "What is the rule about driving across a median in Washington?",
        choices: [
          "It is illegal to drive within, over or across a median",
          "It is allowed if the median is painted rather than raised",
          "It is allowed when making a U-turn",
          "It is allowed when traffic is stopped ahead",
        ],
        correctIndex: 0,
        explanation:
          "Medians are off limits entirely. Washington bans driving within them, over them or across them, whatever they are made of.",
        context:
          "The guide is careful to say that a median need not be a physical structure. It can be open space, a concrete divider, or 18-inch solid yellow pavement markings with stripes inside. All three are medians and all three carry the same prohibition. The painted kind catches people out precisely because it looks crossable, which is why the guide describes its appearance so specifically.",
        trap:
          "Yellow striped paint is not a decorated shoulder or a spare lane. Yellow stripes mark where you are not allowed to drive.",
        excerptKey: "median-illegal",
        sourceLabel: "Washington State Driver Guide - 4.16 Median",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_20",
        topic: "signals",
        question: "What do you do at a freeway on-ramp meter showing red?",
        choices: [
          "Merge immediately, since ramp meters are advisory",
          "Slow to 15 mph and continue up the ramp",
          "Wait for a gap in freeway traffic, ignoring the signal",
          "Stop at the white stop line and wait for green",
        ],
        correctIndex: 3,
        explanation:
          "Ramp meters work like ordinary traffic signals. Red means stop at the white line; green means continue along the on-ramp.",
        context:
          "Ramp meters exist to break up platoons of merging vehicles so traffic already on the freeway is not forced to brake in a block. That fits Washington's broader merging rule: drivers already on the interstate hold right of way, so creating a gap is your job and may require you to speed up or slow down. The guide tells you to use the entire on-ramp, your mirrors and your signal to find a safe space.",
        trap:
          "A ramp meter is a real signal, not a suggestion. Running it is running a red light.",
        excerptKey: "ramp-meter",
        sourceLabel: "Washington State Driver Guide - 4.11 Freeway ramp meters",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_21",
        topic: "sharing",
        question: "What must you do when a transit bus signals to pull back into the roadway?",
        choices: [
          "Maintain speed, since the bus must wait for a gap",
          "Sound your horn to warn the driver",
          "Yield to it, if it is travelling in your direction",
          "Change lanes and pass on the left immediately",
        ],
        correctIndex: 2,
        explanation:
          "Washington requires you to yield to a transit vehicle that has signalled and is pulling back onto the roadway, provided it is going your way.",
        context:
          "This reverses the ordinary expectation that a vehicle joining traffic gives way to the vehicles already in the lane. Buses stop and start constantly, and each re-entry would otherwise depend on a driver choosing to let them in. The rule is narrow, though: it applies to transit vehicles travelling in the same direction as you, and it applies once they have signalled.",
        trap:
          "This is not general courtesy - it is a yield requirement. The bus does not have to wait for a gap the way an ordinary merging car would.",
        excerptKey: "transit-yield",
        sourceLabel: "Washington State Driver Guide - 4.3 Sharing with transit buses",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_22",
        topic: "parking",
        question: "What does a white painted curb indicate?",
        choices: [
          "Only short stops are permitted",
          "Parking is prohibited at all times",
          "Parking is reserved for residents",
          "Free parking with no time limit",
        ],
        correctIndex: 0,
        explanation:
          "White marks a curb where only brief stops are allowed - long enough to drop someone off or pick them up, not to leave the vehicle.",
        context:
          "Washington keeps its curb colours simple compared with some states. White means short stops only. Yellow or red indicates a loading zone or some other restriction. Red striping or a red curb also marks fire lanes, where you may neither park nor stop; in some communities the road in front of a fire station is marked that way to keep it clear for aid vehicles.",
        trap:
          "White does not mean unrestricted parking because it is not yellow or red. It carries its own restriction - short stops only.",
        excerptKey: "park-curb-colours",
        sourceLabel: "Washington State Driver Guide - 4.18 Signs or painted curbs",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_23",
        topic: "signs",
        question: "What does a Keep Right sign remind you to do?",
        choices: [
          "Move onto the shoulder to let traffic pass",
          "Stay in the right lane unless you are passing",
          "Take the next right turn",
          "Yield to traffic entering from the right",
        ],
        correctIndex: 1,
        explanation:
          "It restates the standing rule that the right lane is the default and the left is for passing. The sign is a reminder rather than a new instruction.",
        context:
          "Washington reinforces this in several places because it is widely ignored. The guide's general driving guidance sets the rule; the Keep Right sign repeats it where it is most often broken; and RCW 46.61.100 makes it a traffic infraction to drive continuously in the left lane of a multilane road when doing so impedes other traffic. The statute also lists the legitimate reasons to be left, which include overtaking, moving over to let traffic merge, and preparing for a left turn.",
        trap:
          "The rule is about lane discipline, not about the shoulder. Washington tells you not to drive on the shoulder unless directed by officials or signs.",
        excerptKey: "rcw-left-lane-impede",
        sourceLabel: "RCW 46.61.100 - Keep right except when passing",
        sourceUrl: rcw("46.61.100"),
      },
      {
        id: "wa_s2_24",
        topic: "rules",
        question: "What does a shorter-than-usual dashed white line warn you about?",
        choices: [
          "A bicycle lane begins ahead",
          "Passing is permitted for a limited distance",
          "The speed limit is about to change",
          "Your lane is ending and you will have to merge or exit",
        ],
        correctIndex: 3,
        explanation:
          "Shortened dashes mean the lane is running out. You will need to merge or take the exit rather than continue straight.",
        context:
          "The length of the dash is doing the work here, which is why this one is missed so often - the colour and the broken pattern both look ordinary. A standard dashed white line simply separates lanes moving the same way and may be crossed when safe. The shortened version is a warning about the road ahead, and reading it early is what gives you time to merge without forcing anyone to brake.",
        trap:
          "It is easy to read these as ordinary lane markings and keep going. By the time the lane visibly narrows, your merging options have shrunk with it.",
        excerptKey: "dashed-white-ending",
        sourceLabel: "Washington State Driver Guide - 4.16 Road markings",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_25",
        topic: "signals",
        question:
          "You have stopped at a red light on a two-way street and want to turn left onto a one-way street. What does Washington allow?",
        choices: [
          "The turn is never permitted on red",
          "The turn is allowed after a complete stop, unless a sign forbids it",
          "The turn is allowed only between 6 a.m. and 9 p.m.",
          "The turn is allowed only if a green arrow appears first",
        ],
        correctIndex: 1,
        explanation:
          "Washington permits a left on red onto a one-way street on the same terms as a right on red: stop completely first, obey any sign forbidding it, and have room to enter traffic.",
        context:
          "Not every state allows this, and among those that do, several require you to be turning from a one-way street as well. Washington's guide states the permission in terms of the street you are turning onto. As with right on red, a No Turn On Red sign withdraws it and a red arrow removes it entirely. The complete stop is not optional in either case.",
        trap:
          "Drivers who learned elsewhere often assume left on red is banned outright. In Washington it is available - but only onto a one-way street.",
        commonlyMissed: true,
        excerptKey: "red-left-one-way",
        sourceLabel: "Washington State Driver Guide - 4.11 Traffic light signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_26",
        topic: "sharing",
        question: "What is a bicycle box at an intersection for?",
        choices: [
          "Storing bicycles while riders wait for a bus",
          "Letting bicyclists move ahead of vehicles and cross first on green",
          "Marking where bicycles must dismount",
          "Providing a turning area for delivery vehicles",
        ],
        correctIndex: 1,
        explanation:
          "A bicycle box puts riders in front of stopped traffic so they cross first when the light goes green, which keeps them out of drivers' blind zones.",
        context:
          "The design only works if drivers stay out of the box, so Washington tells you to remain behind the white line until it clears. It also removes a permission you would otherwise have: you cannot turn right on red where there is a bicycle box. When the light turns green the riders go first and move into the bike lane on the far side of the intersection.",
        trap:
          "This is one of the specific places right on red disappears in Washington, and there may be no sign saying so - the box itself is the instruction.",
        excerptKey: "bicycle-box",
        sourceLabel: "Washington State Driver Guide - 4.16 Bicycle boxes",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_27",
        topic: "rules",
        question:
          "You have moved into a marked turn lane and then change your mind. What does Washington require?",
        choices: [
          "Signal and merge back into the through lane",
          "Stop and wait for a gap in traffic",
          "Follow through with the turn",
          "Reverse out of the lane if it is safe",
        ],
        correctIndex: 2,
        explanation:
          "Once you are in a turn lane you must complete the turn. Drivers behind you have already committed on the assumption that you will.",
        context:
          "Turn lanes appear at major intersections and are indicated by signs and road markings, sometimes with an arrow signal controlling them. Washington's related turning rules follow the same logic of predictability: state law requires you to turn into the lane closest to the one you came from, and where there is more than one turn lane you stay in your original lane through the turn, changing lanes afterwards if you need to.",
        trap:
          "Cutting back across into the through lane is the instinctive fix and the wrong one. Complete the turn and correct your route afterwards.",
        excerptKey: "turn-lane-commit",
        sourceLabel: "Washington State Driver Guide - 4.16 Turn lane",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_28",
        topic: "signs",
        question: "What is an automated traffic safety camera allowed to record in Washington?",
        choices: [
          "Any moving violation on a state highway",
          "Following too closely and unsafe lane changes",
          "Driving without a seat belt",
          "Running a red light, a railway crossing signal, or speeding in a school zone",
        ],
        correctIndex: 3,
        explanation:
          "Washington limits automated cameras to three things: failing to stop at a steady red, failing to stop at a railway crossing signal, and speeding in a school zone.",
        context:
          "Two features of the scheme are worth knowing. Every location with cameras is clearly marked, so they are not meant to be hidden. And the resulting ticket goes to the registered owner of the vehicle rather than to whoever happened to be driving, which is a different mechanism from an officer stopping you at the roadside.",
        trap:
          "The list is short and closed. Cameras are not a general enforcement tool covering any violation they happen to capture.",
        excerptKey: "camera-tickets-owner",
        sourceLabel: "Washington State Driver Guide - 4.12 Automated traffic safety cameras",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_29",
        topic: "parking",
        question:
          "You are parking downhill on a street with a curb. Which way should the front wheels point?",
        choices: [
          "Straight ahead, with the parking brake set",
          "Away from the curb",
          "Toward the curb",
          "It makes no difference if the brake is set",
        ],
        correctIndex: 2,
        explanation:
          "Facing downhill, turn the wheels toward the curb until the front of the front tyre touches it. If the brake fails the car rolls forward into the curb instead of into the road.",
        context:
          "Washington frames all hill parking as a backup for a parking brake that fails, which is why the answer differs by direction. Facing downhill, wheels toward the curb. Facing uphill against a tall curb, wheels away from it so the vehicle rolls back into the curb. Where there is no curb at all, point the wheels toward the edge of the road in either direction, so a rolling vehicle leaves the carriageway rather than entering it.",
        trap:
          "Setting the parking brake does not make the wheel position optional. The guide's whole rationale is what happens if the brake lets go.",
        excerptKey: "park-downhill",
        sourceLabel: "Washington State Driver Guide - 4.18 Facing down the hill",
        sourceUrl: HB,
      },
      {
        id: "wa_s2_30",
        topic: "signals",
        question:
          "Why does Washington's guide mention flashing green lights, given they are not used in the state?",
        choices: [
          "They are being trialled in Seattle",
          "You may meet them in British Columbia, where they warn of waiting pedestrians",
          "They appear only at ferry terminals",
          "They mark emergency vehicle access points",
        ],
        correctIndex: 1,
        explanation:
          "Washington does not use flashing green at all, but drivers crossing into British Columbia will meet it, where it warns that pedestrians are waiting to cross.",
        context:
          "The guide includes this because Washington shares a busy land border with Canada, and an unfamiliar signal is exactly the kind of thing that produces a wrong reaction. It is a reminder that signal meanings are jurisdictional rather than universal. Washington's own green states are the steady green ball, which means go once the intersection is clear, and the green arrow, which grants right of way in the direction it points.",
        trap:
          "If you meet one across the border, it is not a green about to change. It is a warning that pedestrians are waiting.",
        excerptKey: "flashing-green-bc",
        sourceLabel: "Washington State Driver Guide - 4.11 Traffic light signals",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Right of Way and Intersections",
    difficulty: "medium",
    description:
      "Where Washington drivers actually collide. Roundabouts, calming circles, uncontrolled junctions, school buses and the yielding rules that decide who moves first.",
    questions: [
      {
        id: "wa_s3_01",
        topic: "rightOfWay",
        question: "What must you do when entering a roundabout in Washington?",
        choices: [
          "Stop before entering, in every case",
          "Merge at the speed of circulating traffic",
          "Yield to all traffic already in the roundabout",
          "Give way to vehicles entering from your right",
        ],
        correctIndex: 2,
        explanation:
          "Everyone approaching a roundabout yields on entry. You look left, wait for a gap in the circulating traffic, and go when one appears.",
        context:
          "Washington roundabouts run counterclockwise around a raised central island, and are designed for speeds between 15 and 25 mph. Pick your lane on approach using the lane choice sign, then stay in it until you exit. You stop for pedestrians and bicyclists in the crosswalks both entering and leaving. Large vehicles need two lanes' worth of space and are allowed to cross the truck apron, so give them room rather than trying to share.",
        trap:
          "Yielding is not the same as stopping. If the roundabout is clear you keep moving, and stopping unnecessarily is what causes rear-end collisions there.",
        commonlyMissed: true,
        excerptKey: "roundabout-yield-left",
        sourceLabel: "Washington State Driver Guide - 4.15 How to drive a roundabout",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_02",
        topic: "rules",
        question:
          "You are turning right from a two-lane road onto a road with two lanes in your direction. Which lane should you end up in?",
        choices: [
          "Either lane, provided you signal",
          "The lane closest to the one you came from",
          "The far lane, to leave room for following traffic",
          "Whichever lane continues toward your destination",
        ],
        correctIndex: 1,
        explanation:
          "State law requires you to turn into the lane closest to the direction you came from. You change lanes afterwards if you need a different one.",
        context:
          "The rule applies to left turns and right turns alike, and its point is predictability - the drivers around you can anticipate where your vehicle will emerge. Where there is more than one turn lane, you stay in your original lane through the turn rather than drifting across. RCW 46.61.290 puts it in terms of position: a right turn is made as close as practicable to the right-hand curb, and a left turn approaches in the extreme left-hand lane available.",
        trap:
          "Swinging wide into the far lane to set up your route is the common error. Complete the turn into the nearest lane first, then change lanes.",
        excerptKey: "turn-closest-lane",
        sourceLabel: "Washington State Driver Guide - 4.14 Turning",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_03",
        topic: "rightOfWay",
        question:
          "You are joining a paved road from an unpaved one at an intersection with no signs. Who yields?",
        choices: [
          "You do",
          "The traffic on the paved road",
          "Whichever vehicle arrives second",
          "Neither, since there are no signs",
        ],
        correctIndex: 0,
        explanation:
          "At an uncontrolled intersection, a driver coming off an unpaved road onto a paved one gives way. The surface change itself carries the rule.",
        context:
          "Washington lists four situations where you yield at an uncontrolled intersection: a vehicle is already in the intersection, you are entering or crossing a state highway from a secondary road, you are entering a paved road from an unpaved one, or you intend to turn left with a vehicle approaching from the opposite direction. None of these needs a sign to operate, which is exactly why they are missed.",
        trap:
          "No signs does not mean no rules. Uncontrolled means the ordinary right-of-way rules apply without a sign to remind you of them.",
        commonlyMissed: true,
        excerptKey: "uncontrolled-unpaved",
        sourceLabel: "Washington State Driver Guide - 4.15 Uncontrolled intersections",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_04",
        topic: "sharing",
        question:
          "You are travelling the opposite way to a school bus on a four-lane road with a raised median, and the bus stops with red lights flashing. What must you do?",
        choices: [
          "Stop until the lights stop flashing",
          "Stop only if children are visible",
          "You may continue, without stopping",
          "Slow to 20 mph and continue",
        ],
        correctIndex: 2,
        explanation:
          "On this road you may keep going. Washington exempts oncoming traffic where the road has three or more lanes and the directions are separated by a median or barrier - and a four-lane road with a raised median satisfies both parts.",
        context:
          "The exception only ever applies to traffic meeting the bus from the opposite direction. Traffic travelling the same way as the bus stops in every configuration, on every road, without exception. It is worth knowing that RCW 46.61.370 is broader than the guide: the statute makes a divided highway and a road of three or more marked lanes two separate exceptions, either sufficient alone. The road in this question qualifies under either reading.",
        trap:
          "A painted centre line is not a median. The guide's exception requires an actual median or barrier separating the directions.",
        commonlyMissed: true,
        excerptKey: "bus-multilane-exception",
        sourceLabel: "Washington State Driver Guide - 4.2 On a multilane road",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_05",
        topic: "rightOfWay",
        question:
          "Two vehicles reach a four-way stop at the same moment, one directly to the right of the other. Who goes first?",
        choices: [
          "The vehicle that signals first",
          "The vehicle travelling faster",
          "The vehicle on the right",
          "The vehicle on the left",
        ],
        correctIndex: 2,
        explanation:
          "A genuine tie is broken by position: the driver on the right goes first, which means the driver on the left gives way.",
        context:
          "This is a tie-break, not the main rule, and drivers reach for it far too early. Order of arrival settles almost every four-way stop, and only a genuinely simultaneous arrival triggers the right-hand rule. A third rule sits above both: a vehicle turning left yields to traffic going straight or turning right, regardless of who got there first. The same right-hand tie-break applies when a signal has gone dark.",
        trap:
          "Eye contact and a wave are not the rule. If you are on the left in a true tie, you are the one who yields.",
        excerptKey: "four-way-tie-right",
        sourceLabel: "Washington State Driver Guide - 4.13 4-way stop",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_06",
        topic: "sharing",
        question:
          "A pedestrian using a white cane is crossing the road ahead of you. When may you proceed?",
        choices: [
          "Once they have completely crossed the street",
          "Once they have cleared your lane",
          "Once they have cleared your lane and one more",
          "As soon as they step past the centre line",
        ],
        correctIndex: 0,
        explanation:
          "For a pedestrian using a wheelchair, cane, guide dog or other service animal, Washington asks you to wait until they have completely crossed the street.",
        context:
          "There are two standards here and the stricter one applies to people who may not be able to see or move away from your vehicle. For pedestrians generally, you wait until they have cleared your lane and one additional lane before proceeding - itself more demanding than the bare requirement to leave their lane. For someone using a mobility aid or a service animal, the wait runs until the crossing is complete. The guide also makes clear it is unlawful to interfere with a service animal, and warns against sounding your horn, which can frighten or confuse the animal.",
        trap:
          "The one-extra-lane rule is not the one that applies here. A person using a cane or a guide dog gets the full crossing.",
        commonlyMissed: true,
        excerptKey: "ped-clear-extra-lane",
        sourceLabel: "Washington State Driver Guide - 4.1 Sharing with people",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_07",
        topic: "rightOfWay",
        question: "At a two-way stop, who has right of way?",
        choices: [
          "The vehicle that arrived first, whichever road it is on",
          "The vehicle on the right",
          "The vehicle going straight - turning vehicles yield to it",
          "The vehicle on the road with the stop signs",
        ],
        correctIndex: 2,
        explanation:
          "At a two-way stop the turning vehicle yields and the vehicle going straight goes. Only two of the four approaches carry stop signs, so arrival order does not govern.",
        context:
          "The difference between a two-way and a four-way stop is which rules apply. At a four-way, arrival order decides, with the right-hand rule as a tie-break. At a two-way, the traffic on the unsigned road is not stopping at all, so the question is simply who yields to whom - and the answer is that turning vehicles give way to through traffic.",
        trap:
          "Arriving first at your stop sign gains you nothing at a two-way stop. Cross traffic has no sign and no reason to slow for you.",
        excerptKey: "two-way-stop",
        sourceLabel: "Washington State Driver Guide - 4.13 2-way stop",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_08",
        topic: "signals",
        question:
          "You stop at a stop line but a parked truck blocks your view of the cross street. What does Washington tell you to do?",
        choices: [
          "Sound your horn and proceed",
          "Reverse and choose another route",
          "Wait until the truck moves",
          "Edge forward slowly until you can see",
        ],
        correctIndex: 3,
        explanation:
          "Edge forward slowly until your view opens up. The guide points out the useful side effect - crossing drivers see the nose of your car before you can see them, which gives them a chance to slow.",
        context:
          "This sits inside a broader set of checks Washington asks for before entering any intersection: stop and yield to pedestrians and traffic already in it, look in each direction more than once, check mirrors and over your shoulder for cyclists and motorcyclists, and make sure there is enough room on the far side so you do not end up blocking the junction.",
        trap:
          "Edging forward is not the same as nosing out into the traffic lane. It is a slow, controlled creep to buy sight lines, not a partial entry.",
        excerptKey: "blocked-view-edge-forward",
        sourceLabel: "Washington State Driver Guide - 4.13 Common intersections",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_09",
        topic: "sharing",
        question:
          "What is the difference between a traffic calming circle and a roundabout in Washington?",
        choices: [
          "A calming circle may have stop or yield signs on some, all or none of its approaches",
          "A calming circle is always one-way clockwise",
          "A calming circle is only found on state highways",
          "There is no difference - the terms are interchangeable",
        ],
        correctIndex: 0,
        explanation:
          "A calming circle is a small painted or raised island in an ordinary intersection, and its approaches may carry stop signs, yield signs or nothing at all. You apply whatever right-of-way rules that intersection has.",
        context:
          "The guide keeps these apart deliberately. A roundabout is purpose-built, everyone yields on entry, and it is designed to take buses and freight. A calming circle is retrofitted into an existing junction to slow traffic and is intended for passenger vehicles. Because a fire truck or delivery lorry may not physically fit around one, the guide warns they might have to go clockwise to get through - the opposite direction to everyone else.",
        trap:
          "Assuming every circular intersection works like a roundabout is the error. At a calming circle you must read the signs on each approach.",
        excerptKey: "calming-circle-large",
        sourceLabel: "Washington State Driver Guide - 4.15 Traffic calming circles",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_10",
        topic: "rules",
        question: "How far may you travel in a two-way centre left-turn lane?",
        choices: [
          "As far as needed, if you are signalling",
          "Up to half a mile",
          "Up to 1,000 feet",
          "No more than 300 feet",
        ],
        correctIndex: 3,
        explanation:
          "Three hundred feet is the guide's limit. The lane is for completing a turn, not for travelling toward one further down the road.",
        context:
          "Because traffic from both directions uses this lane, the longer you sit in it the greater the chance of meeting someone head-on inside it. Washington bans using it to pass, allows you to cross a solid yellow line on your side to enter it, and tells you to keep watching oncoming traffic while you are in it. Where U-turns are permitted, they may be made from this lane.",
        trap:
          "Signalling does not extend the distance. The 300-foot limit is about how long you occupy a lane shared with oncoming drivers.",
        commonlyMissed: true,
        excerptKey: "centre-lane-300-feet",
        sourceLabel: "Washington State Driver Guide - 4.16 Turn lane",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_11",
        topic: "sharing",
        question:
          "You are turning right and a bicyclist is riding along on your right, going straight. What should you do?",
        choices: [
          "Turn first, since you are the larger vehicle",
          "Sound your horn and turn",
          "Speed up to pass the bicyclist and then turn",
          "Let the bicyclist clear the intersection before you turn",
        ],
        correctIndex: 3,
        explanation:
          "Let them go through first. Washington also tells you specifically not to pass a bicyclist just before turning right, which is what creates this conflict.",
        context:
          "The right hook is one of the most common ways drivers injure cyclists, and it happens because the driver passes and then turns across the rider they have just overtaken. Washington asks you to check behind for bicyclists and yield before turning, and notes they may be approaching faster than you expect. The same checks apply when turning into a driveway, where you should also watch for riders on the sidewalk or in the crosswalk.",
        trap:
          "Passing the rider and turning immediately feels efficient and is precisely the manoeuvre the guide warns against.",
        commonlyMissed: true,
        excerptKey: "bicycle-turn-right",
        sourceLabel: "Washington State Driver Guide - 4.6 Passing a bicyclist",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_12",
        topic: "rightOfWay",
        question:
          "You are joining a state highway from a secondary road at an uncontrolled intersection. Who yields?",
        choices: [
          "You do",
          "Traffic on the state highway",
          "Whichever vehicle is travelling slower",
          "Neither, unless a sign says so",
        ],
        correctIndex: 0,
        explanation:
          "You give way. Entering or crossing a state highway from a secondary road is one of Washington's listed uncontrolled-intersection yield situations.",
        context:
          "Uncontrolled intersections have no signs, but the guide is explicit that the normal right-of-way rules still apply. The four triggers are: a vehicle already in the intersection, entering or crossing a state highway from a secondary road, entering a paved road from an unpaved one, and turning left with oncoming traffic approaching. These junctions are most common on local roads and rural streets.",
        trap:
          "The absence of a stop or yield sign is not permission to go. The hierarchy of roads still decides who waits.",
        excerptKey: "uncontrolled-state-highway",
        sourceLabel: "Washington State Driver Guide - 4.15 Uncontrolled intersections",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_13",
        topic: "sharing",
        question:
          "You want to pass a school bus that has stopped with red lights flashing, and there is a centre turn lane available. What does Washington allow?",
        choices: [
          "Use the centre turn lane to pass at low speed",
          "You must stop - drivers in all turn lanes must stop too",
          "Pass on the right, using the shoulder",
          "Pass if you first sound your horn",
        ],
        correctIndex: 1,
        explanation:
          "The centre turn lane offers no way around this. Washington states that drivers in all turn lanes must stop, and tells you not to use a centre turn lane to pass a stopped school bus.",
        context:
          "The guide closes this loophole specifically because the turn lane looks like a legitimate free path. It is not passing that is being regulated but the geometry of children crossing the road, and a vehicle moving through the centre lane crosses exactly where they walk. Fines for passing a stopped school bus are doubled, and it is unlawful to pass at all while the red lights are flashing.",
        trap:
          "An empty turn lane looks like a lawful route past the bus. It is named in the guide as one you may not use.",
        excerptKey: "bus-center-turn-lane",
        sourceLabel: "Washington State Driver Guide - 4.2 Sharing with school buses",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_14",
        topic: "rules",
        question: "Which lane should you be in as you approach a roundabout with two lanes?",
        choices: [
          "The left lane, for any exit",
          "The lane shown on the lane choice sign for your intended exit",
          "The right lane, always",
          "Either lane, changing inside the roundabout as needed",
        ],
        correctIndex: 1,
        explanation:
          "The lane choice sign on approach tells you which lane serves right turns, straight ahead and left turns. Pick that lane before you enter and stay in it until you exit.",
        context:
          "Changing lanes inside a roundabout is what makes them feel dangerous, and Washington's design assumes nobody does it. Slow down on approach, read the lane choice sign, commit, then hold your lane all the way round to your exit. Stop for pedestrians and cyclists in the crosswalks at both entry and exit, and remember that a bicyclist may lawfully ride in the middle of the lane to stay visible.",
        trap:
          "Correcting a lane choice inside the roundabout is the manoeuvre to avoid. If you took the wrong lane, follow it out and come back round.",
        excerptKey: "roundabout-pick-lane",
        sourceLabel: "Washington State Driver Guide - 4.15 How to drive a roundabout",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_15",
        topic: "emergencies",
        question:
          "An emergency vehicle approaches with lights on while you are inside a roundabout. What should you do?",
        choices: [
          "Stop immediately where you are",
          "Reverse out of the roundabout",
          "Speed up and take the first exit at speed",
          "Drive through the roundabout, then pull over",
        ],
        correctIndex: 3,
        explanation:
          "Continue out of the roundabout first, then pull over. Stopping inside it blocks the circulating carriageway and leaves the emergency vehicle nowhere to go.",
        context:
          "The instruction is the same one you would follow anywhere else - pull to the right and stop - applied sensibly to a place where stopping on the spot would obstruct everyone. The guide's general rule is to move as soon as you see or hear lights or a siren, wait for the vehicle to pass, then signal and rejoin traffic in the order you were travelling.",
        trap:
          "Stopping the instant you hear a siren is usually right but wrong here. Inside a roundabout it creates the blockage you are trying to avoid.",
        excerptKey: "roundabout-emergency",
        sourceLabel: "Washington State Driver Guide - 4.15 How to drive a roundabout",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_16",
        topic: "rightOfWay",
        question: "Who has right of way at a mid-block crosswalk?",
        choices: [
          "Vehicles, since it is not an intersection",
          "Whoever arrives first",
          "Pedestrians always",
          "Pedestrians only when a signal is flashing",
        ],
        correctIndex: 2,
        explanation:
          "Pedestrians always hold right of way in a marked crosswalk, and a mid-block crossing is one. Washington asks drivers to stop for people crossing whether or not the crosswalk has a stop sign.",
        context:
          "RCW 46.61.235 is stronger than the word yield implies: an approaching driver must stop and remain stopped while a pedestrian, bicycle or personal delivery device crosses within one lane of the half of the roadway the vehicle is on or turning onto. Some Washington crosswalks have in-pavement lights activated by the person crossing, and you must yield when those are flashing.",
        trap:
          "Slowing and steering round someone is not yielding. The statutory duty is to stop and stay stopped.",
        excerptKey: "rcw-crosswalk-stop",
        sourceLabel: "RCW 46.61.235 - Crosswalks",
        sourceUrl: rcw("46.61.235"),
      },
      {
        id: "wa_s3_17",
        topic: "sharing",
        question:
          "A large truck ahead of you is making a right turn and appears to swing left first. What should you do?",
        choices: [
          "Pass on the right while the gap is open",
          "Sound your horn to signal your presence",
          "Move alongside to the left",
          "Wait behind until the turn is complete",
        ],
        correctIndex: 3,
        explanation:
          "Stay behind. Large vehicles often need more than one lane to complete a turn, and the gap that opens on their right is the space the trailer is about to sweep through.",
        context:
          "Washington names passing a turning large vehicle as a frequent cause of collisions involving them. The same theme runs through the rest of the guidance: stay out of the blind zones along their sides, and if you cannot see the driver's mirrors, the driver cannot see you. When merging in front of one, wait until you can see both headlights in your rearview mirror, because a loaded truck at 55 mph needs about 450 feet to stop.",
        trap:
          "The space opening up on the truck's right is not a gap. It is the path the rear of the vehicle is about to occupy.",
        excerptKey: "truck-two-lanes-roundabout",
        sourceLabel: "Washington State Driver Guide - 4.4 Sharing with large vehicles",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_18",
        topic: "rules",
        question: "When may you drive in a marked bicycle lane in Washington?",
        choices: [
          "When traffic in the through lanes is stopped",
          "When you are travelling below 20 mph",
          "Only when turning, or crossing it to park near the curb",
          "At any time, provided no bicycle is present",
        ],
        correctIndex: 2,
        explanation:
          "Bike lanes are for turning across or crossing to park at the curb. They are not a lane you may travel along because it happens to be empty.",
        context:
          "Washington marks bike lanes with solid white lines and a bicycle symbol, and often paints them green. Some have a buffer of two solid white lines with diagonal hatching between them; that buffer counts as part of the bike lane and should not be entered except to make a legal turn after checking it is safe. The guide adds that although markings vary in length, you should drive as though they continue.",
        trap:
          "An empty bike lane is not an empty lane. A rider can appear at speed from behind you far more quickly than you would expect.",
        excerptKey: "bike-lane-driving",
        sourceLabel: "Washington State Driver Guide - 4.6 Bike lanes",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_19",
        topic: "rightOfWay",
        question:
          "You are waiting to turn left across oncoming traffic. How does Washington suggest you judge whether you have time?",
        choices: [
          "Turn as soon as the nearest vehicle brakes",
          "Time how long approaching vehicles take to pass a fixed roadside marker",
          "Assume any vehicle more than two car lengths away is far enough",
          "Wait for an oncoming driver to flash their headlights",
        ],
        correctIndex: 1,
        explanation:
          "Pick a fixed marker such as a tree, count how many seconds oncoming vehicles take to reach it, and use that to judge the next gap. The guide's own advice is to err toward giving yourself too much time.",
        context:
          "Judging closing speed is one of the hardest skills for a new driver, and Washington teaches it as a countable exercise rather than a feeling. Approaching traffic holds right of way throughout. Turning into the flow of traffic needs the same treatment plus a margin: you need time to complete the turn and reach the speed of the traffic you are joining, not merely to clear the lane.",
        trap:
          "A flash of headlights is not a legal signal and confers nothing. If you turn on it and there is a collision, the right-of-way rules are unchanged.",
        excerptKey: "turning-oncoming-row",
        sourceLabel: "Washington State Driver Guide - 5.4 Turning in front of approaching vehicles",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_20",
        topic: "sharing",
        question:
          "You are behind a motorcycle in a wide lane and the rider is well over to one side. May you move up alongside in the same lane?",
        choices: [
          "Yes, if you leave three feet of space",
          "Yes, if the rider does not object",
          "No - never move into the same lane alongside a motorcyclist",
          "Yes, if you are travelling below 25 mph",
        ],
        correctIndex: 2,
        explanation:
          "Never share a lane with a motorcycle. Riders are entitled to the same lane width as any other vehicle, however wide the lane or however far over they are riding.",
        context:
          "Motorcyclists move around within their lane deliberately - to see and be seen, and to avoid gravel, seams, potholes and debris that would not trouble a car. That means the space you think is spare is the space they may need next. Washington also warns that riders slowing on the throttle show no brake light, and that some machines have turn signals that do not cancel themselves.",
        trap:
          "The rider hugging one side is not an invitation to share. Their position is a choice they may reverse at any moment.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Washington State Driver Guide - 4.5 Sharing with motorcycles",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_21",
        topic: "rules",
        question: "What must you do before making a U-turn in Washington?",
        choices: [
          "Sound your horn to warn oncoming traffic",
          "Have clear visibility in all directions",
          "Come to a complete stop for at least three seconds",
          "Signal for at least 200 feet beforehand",
        ],
        correctIndex: 1,
        explanation:
          "Clear visibility in every direction is the requirement. That rules out U-turns on a curve or as you approach the crest of a hill, where you cannot see what is coming.",
        context:
          "Washington permits U-turns by default and relies on signs to prohibit them, which makes the visibility condition the main practical limit. The reasoning is entirely about sight lines - a U-turn takes longer than any other manoeuvre and leaves you across the carriageway while you complete it. Where a two-way centre left-turn lane exists and U-turns are permitted, they may be made from it.",
        trap:
          "The absence of a No U-turn sign is not a green light. On a blind curve the turn is unsafe and unlawful regardless of signage.",
        excerptKey: "uturn-no-crest",
        sourceLabel: "Washington State Driver Guide - 4.14 U-turns",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_22",
        topic: "rightOfWay",
        question: "What must you do before entering an intersection you intend to cross?",
        choices: [
          "Sound your horn if your view is restricted",
          "Signal, even when going straight ahead",
          "Make sure there is room to clear it without blocking the junction",
          "Come to a complete stop, whatever the signals show",
        ],
        correctIndex: 2,
        explanation:
          "Check there is space on the far side for your vehicle. Entering on a green and then stopping inside the junction blocks every other approach.",
        context:
          "Washington's pre-intersection checks are a sequence: stop and yield to pedestrians and traffic already in the junction, look in each direction more than once, check mirrors and over your shoulder for cyclists and motorcyclists, look for the road markings that will guide you into the right lane, and confirm you have room to get all the way across. The guide asks for particular care near shopping centres, car parks, busy sidewalks, playgrounds and schoolyards.",
        trap:
          "A green light grants permission to proceed, not a guarantee of somewhere to go. If the far side is full, waiting is the correct move.",
        excerptKey: "dont-block-intersection",
        sourceLabel: "Washington State Driver Guide - 4.13 Common intersections",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_23",
        topic: "sharing",
        question:
          "What does a triangular orange emblem on the back of a vehicle ahead of you mean?",
        choices: [
          "The vehicle is designed to travel at 25 mph or less",
          "The vehicle is carrying hazardous materials",
          "The vehicle is a learner driver",
          "The vehicle is wider than a standard lane",
        ],
        correctIndex: 0,
        explanation:
          "The slow moving vehicle emblem marks agricultural and farm vehicles designed to travel at 25 mph or less. Your closing speed on one is far higher than it looks.",
        context:
          "Washington asks you to be patient, slow down and give plenty of space around these vehicles. If you need to pass and there are two lanes going your way, move over a full lane. Where there is one lane each way, check for oncoming traffic and proceed carefully, leaving at least three feet between the widest part of your vehicle and the agricultural vehicle - the same clearance the guide sets for passing a bicyclist.",
        trap:
          "Judging a closing gap by eye fails badly here. Approaching at 55 mph a vehicle doing 15 mph, the gap shuts far faster than instinct suggests.",
        excerptKey: "slow-moving-emblem",
        sourceLabel: "Washington State Driver Guide - 4.8 Sharing with agricultural vehicles",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_24",
        topic: "signals",
        question: "How should you treat a T-intersection where your road ends?",
        choices: [
          "You have right of way because you were there first",
          "Traffic on the through road must yield to you",
          "Both roads yield equally",
          "Traffic on the through road has right of way",
        ],
        correctIndex: 3,
        explanation:
          "At a T-intersection the road that ends gives way to the through road. Some are signed with a yield or stop, but the ending road yields either way.",
        context:
          "Washington describes several junction shapes with the same underlying logic - the lesser road yields to the greater. A T-intersection is a three-way junction where a road ends at a through road. A Y-intersection is where a minor road joins a more major route, and again the major road has right of way. Cross intersections are four-way junctions where you apply the ordinary right-of-way rules.",
        trap:
          "Arriving first counts for nothing when your road simply ends. Priority follows the road layout, not the order of arrival.",
        excerptKey: "uncontrolled-yield-rules",
        sourceLabel: "Washington State Driver Guide - 4.14 T-intersection",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_25",
        topic: "rules",
        question:
          "You are merging onto an interstate from an on-ramp. Who has right of way?",
        choices: [
          "Drivers already on the interstate",
          "You do, because merging traffic is joining a flow",
          "Whichever vehicle is travelling faster",
          "Neither - both must slow to merge",
        ],
        correctIndex: 0,
        explanation:
          "Traffic already on the interstate holds right of way. Creating a workable gap is your job, and that may mean speeding up or slowing down to find one.",
        context:
          "Washington asks you to use the entire on-ramp, your mirrors and your signal to find a safe space, and to enter with enough room that nobody behind you has to swerve, slow or stop. Trying to squeeze into too small a gap is specifically flagged as dangerous, particularly if the driver ahead of you then needs to brake. Ramp meters exist to break up merging platoons for the same reason.",
        trap:
          "Arriving at the end of the ramp does not oblige anyone to let you in. Running out of ramp is a planning failure, not a right of way.",
        excerptKey: "merge-interstate-row",
        sourceLabel: "Washington State Driver Guide - 5.3 Merging",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_26",
        topic: "sharing",
        question:
          "A bicyclist is riding across the road in a crosswalk. What is your obligation?",
        choices: [
          "None - crosswalks are for pedestrians only",
          "Yield only if the crosswalk is marked",
          "Sound your horn and proceed slowly",
          "Yield, because bicyclists in crosswalks count as pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "A bicyclist in a crosswalk is treated as a pedestrian in Washington, so you must yield - in marked and unmarked crosswalks alike.",
        context:
          "Bicyclists have the same rights, duties and responsibilities as drivers when riding on the roadway, but in a crosswalk they take on pedestrian status instead. Since every intersection is legally a crosswalk whether painted or not, that duty applies far more widely than the paint suggests. The guide also asks you to watch for riders in the crosswalk or on the sidewalk when you turn a corner or pull into a driveway.",
        trap:
          "Riders do not lose protection by staying on the bike. In a crosswalk they are pedestrians as far as your duty to yield goes.",
        excerptKey: "bicycle-crosswalk-ped",
        sourceLabel: "Washington State Driver Guide - 4.6 Sharing with bicyclists",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_27",
        topic: "rightOfWay",
        question: "Who must you yield to inside a work zone?",
        choices: [
          "Only vehicles displaying flashing red lights",
          "Only workers physically standing in your lane",
          "Nobody - normal right-of-way rules apply",
          "Construction personnel, vehicles with flashing yellow lights, and equipment in the zone",
        ],
        correctIndex: 3,
        explanation:
          "Inside a highway construction or maintenance work zone you yield to the personnel, to vehicles showing flashing yellow lights, and to the equipment. The duty falls on drivers, pedestrians and bicyclists alike.",
        context:
          "Washington backs this with doubled fines for offences committed in construction areas when workers are present, and the guide notes that putting a construction or emergency worker in danger is among the grounds for losing your driving privileges altogether. It asks you to reduce speed even where no workers are visible, since narrowed lanes and rough surfaces are hazards in themselves, and to keep obeying the posted signs until the End Road Work sign.",
        trap:
          "Flashing yellow lights on a works vehicle are not merely advisory here. Inside the zone they mark a vehicle you are required to yield to.",
        excerptKey: "work-zone-yield",
        sourceLabel: "Washington State Driver Guide - 4.12 Work zone signs",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_28",
        topic: "signals",
        question: "What is a diverging diamond interchange designed to do?",
        choices: [
          "Replace traffic signals with roundabouts at freeway ramps",
          "Let traffic cross to the other side of the roadway so left turns need no gap in oncoming traffic",
          "Separate freight traffic from passenger vehicles",
          "Allow U-turns without entering the intersection",
        ],
        correctIndex: 1,
        explanation:
          "A diverging diamond briefly moves traffic to the other side of the road so vehicles can turn left onto freeway ramps without crossing oncoming traffic at all.",
        context:
          "The design feels wrong the first time because you cross to the left-hand side of the carriageway, but that is exactly what removes the conflict points where vehicles would otherwise cross paths. Washington's advice is to follow the signs and pavement markings through the lane shift, not to worry about oncoming traffic when turning left onto the freeway, and to stay alert and at a safe speed even though the flow is smoother.",
        trap:
          "Being on the left does not mean you are going the wrong way. Signals and markings are guiding you, and you return to the right after the crossing.",
        excerptKey: "diverging-diamond",
        sourceLabel: "Washington State Driver Guide - 4.15 Diverging diamonds",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_29",
        topic: "rules",
        question:
          "There is more than one left-turn lane and you are in the outer one. Where should you be when the turn is finished?",
        choices: [
          "In the lane corresponding to the one you turned from",
          "In the innermost lane, closest to the centre line",
          "In whichever lane has the most space",
          "In the outside lane, ready to merge right",
        ],
        correctIndex: 0,
        explanation:
          "Stay in your own lane through the turn and come out in the corresponding one. Change lanes afterwards if you need to.",
        context:
          "Washington's turning rule is about being predictable to the driver turning alongside you. State law requires you to turn into the lane closest to the one you came from, and the guide adds that where there are multiple turn lanes you keep to your original lane and plan the turn so you do not veer across. Once the turn is complete, you may change lanes normally.",
        trap:
          "Drifting into the neighbouring lane mid-turn is the classic multi-lane turn collision, because the driver beside you is doing the same thing.",
        excerptKey: "turn-stay-in-lane",
        sourceLabel: "Washington State Driver Guide - 4.14 Turning",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_30",
        topic: "sharing",
        question:
          "You are behind a large vehicle in a two-lane roundabout and it is straddling both lanes. What is happening?",
        choices: [
          "The driver has taken the wrong lane and should be passed",
          "The vehicle is permitted the space - large vehicles need two lanes in a roundabout",
          "The vehicle is broken down and should be reported",
          "The driver is signalling for you to overtake",
        ],
        correctIndex: 1,
        explanation:
          "Large vehicles legitimately need two lanes' worth of space in a roundabout, and may cross the truck apron around the central island. Hold back and give them room.",
        context:
          "Roundabouts are built for a wide mix of users, freight included, which is why the central island often has a low truck apron around it. Washington tells you to keep a safe distance behind trucks in a roundabout precisely because they need that space and are permitted to use both lanes on approach and through the junction. Trying to hold your lane alongside one is how vehicles get caught against the trailer.",
        trap:
          "This is not a driver error to be squeezed past. The space they are using is space the design gives them.",
        excerptKey: "roundabout-truck-apron",
        sourceLabel: "Washington State Driver Guide - 4.15 Roundabout",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_31",
        topic: "emergencies",
        question:
          "You approach a tow truck on the shoulder with its lights flashing, on a road posted at 60 mph. What does Washington require?",
        choices: [
          "Maintain speed but change lanes if convenient",
          "Move over into a farther lane, or slow to at least 10 mph below the limit",
          "Stop until the tow truck has finished",
          "Sound your horn as you pass",
        ],
        correctIndex: 1,
        explanation:
          "You either move over into a lane farther away, or slow to at least 10 mph below the posted limit. The guide also caps you at 50 mph in an emergency zone whatever the posted speed.",
        context:
          "Washington's emergency zone covers far more than police cars. Tow trucks, solid waste trucks, incident response, highway maintenance and utility vehicles all count, alongside fire trucks and ambulances - if it is a roadside response vehicle with flashing lights, the duty applies. RCW 46.61.212 defines the zone as the adjacent lanes 200 feet before and after the scene, so the obligation starts well before you draw level.",
        trap:
          "Moving over is the preferred response, not the only one. Where changing lanes would be unsafe, the slow-down requirement takes over - it is not optional.",
        commonlyMissed: true,
        excerptKey: "emergency-zone-slow",
        sourceLabel: "Washington State Driver Guide - 4.17 Emergency zone",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_32",
        topic: "rightOfWay",
        question:
          "A pedestrian has crossed out of your lane into the next one over. May you go?",
        choices: [
          "Yes, as soon as they leave your lane",
          "Yes, if you pass behind them",
          "Only after sounding your horn",
          "No - wait until they have cleared your lane and one more",
        ],
        correctIndex: 3,
        explanation:
          "Washington asks for a full lane of margin. You wait until the pedestrian has cleared your lane and one additional lane before moving off.",
        context:
          "The extra lane exists because a pedestrian may stop, turn back or stumble, and because a vehicle accelerating past close behind them is unnerving even when it misses. The standard is stricter still for anyone using a wheelchair, cane, guide dog or other service animal - there you wait until they have completely crossed the street. RCW 46.61.235 frames the duty as stopping and remaining stopped rather than merely yielding.",
        trap:
          "Clearing your lane is not the threshold. Washington deliberately sets it one lane further than the space your vehicle occupies.",
        excerptKey: "ped-clear-extra-lane",
        sourceLabel: "Washington State Driver Guide - 4.1 Sharing with people",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_33",
        topic: "signals",
        question:
          "A police officer is directing traffic through an intersection and waves you on against a red light. What should you do?",
        choices: [
          "Follow the officer's direction",
          "Obey the red light and wait",
          "Stop and ask the officer to confirm",
          "Proceed only once the light turns green",
        ],
        correctIndex: 0,
        explanation:
          "A person directing traffic overrules the signal. Washington gives that authority to law enforcement and to several others besides.",
        context:
          "The guide names law enforcement, construction workers, maintenance personnel and school crossing guards as people who can direct traffic in special circumstances, and says their orders must be followed and can overrule traffic signals. It is the one situation where obeying the light would be the wrong call, and it exists because a person on the ground can see a closure or a hazard the signal timing knows nothing about.",
        trap:
          "The instinct to obey the light is usually right and is wrong here. A signal is an automated device; the person directing traffic outranks it.",
        excerptKey: "officers-override",
        sourceLabel: "Washington State Driver Guide - 4.10 Traffic control devices",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_34",
        topic: "rules",
        question:
          "Traffic is backed up because a lane is closing ahead. What does Washington recommend?",
        choices: [
          "Merge as early as possible and queue in the continuing lane",
          "Zipper merge - use both lanes to the merge point, then alternate",
          "Use the shoulder to reach the merge point",
          "Stop at the lane closure and wait to be waved in",
        ],
        correctIndex: 1,
        explanation:
          "Washington recommends the zipper merge: keep using both lanes right up to the designated merge area, then take turns like the teeth of a zip.",
        context:
          "The guide says zipper merging improves traffic flow by 60 percent, and that it creates a predictable pattern which cuts the sudden lane changes that cause collisions. In practice it asks two things of you. If you are in the ending lane, stay in it to the merge point rather than cutting in early. If you are in the continuing lane, let one vehicle in ahead of you, then move on.",
        trap:
          "Drivers who merge early often feel that late mergers are queue-jumping. Washington's guidance is that using both lanes to the merge point is the correct behaviour.",
        excerptKey: "zipper-merge",
        sourceLabel: "Washington State Driver Guide - 5.3 Zipper merging",
        sourceUrl: HB,
      },
      {
        id: "wa_s3_35",
        topic: "sharing",
        question:
          "How much space should you leave between your vehicle and a light rail train?",
        choices: [
          "At least one car length",
          "At least three car lengths",
          "Half a car length is sufficient",
          "Whatever the road markings indicate, with no minimum",
        ],
        correctIndex: 0,
        explanation:
          "Leave at least one car length, and more if you can. Light rail vehicles run on fixed tracks and cannot steer around an obstruction.",
        context:
          "Washington's light rail guidance turns on the fact that a train has no option to move sideways. Watch for approaching trains near stations and lines, pay attention to the signs and road markings, and never stop, park or leave your vehicle on the tracks. When parking nearby, leave enough room for trains to get past. The same logic drives the heavier railway rules, where you stop between 15 and 50 feet from the nearest rail.",
        trap:
          "A light rail line running down a street looks like part of the roadway. It is not shared space you can encroach on when traffic is tight.",
        excerptKey: "light-rail-car-length",
        sourceLabel: "Washington State Driver Guide - 4.7 Light rail",
        sourceUrl: HB,
      },
    ],
  },
];
