import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Sources, conflicts and the confirmed exam format are documented
// in the header of sets-1-3.ts; the short version is that the Missouri written
// test is 25 questions with 20 correct to pass, it is NOT scored in sections,
// and Chapter 15 of the Driver Guide is excluded from the Class F test.
const HB = "https://dor.mo.gov/forms/Driver%20Guide.pdf";
const FAQ = "https://apps.mshp.dps.mo.gov/MSHPWeb/PatrolDivisions/DVSD/DE/faqs.html";
const rsmo = (section: string) =>
  `https://revisor.mo.gov/main/OneSection.aspx?section=${section}`;

export const missouriSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Missouri in Practice",
    difficulty: "medium",
    description:
      "Situations rather than definitions: what the rule turns into when you are actually at the wheel, from lane discipline to what Missouri wants from you after a collision.",
    questions: [
      {
        id: "mo_s4_01",
        topic: "signals",
        question:
          "You have a green arrow for your left turn. What is the state of the oncoming traffic?",
        choices: [
          "It has a flashing yellow arrow and must yield to you",
          "It is being held by a red light",
          "It has a green light and you must still find a gap",
          "It is unaffected; the arrow only tells you the lane is a turn lane",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow is a protected phase, which means opposing vehicles are stopped by a red light while you turn. That is exactly what makes it different from a circular green.",
        context:
          "Missouri runs three left-turn arrangements. Protected gives you the arrow with opposing traffic held. Permissive gives you a circular green or flashing yellow arrow and leaves the gap to you. Protected-permissive gives you both in the same cycle, arrow first, so the phase you get depends on when you arrive.",
        trap:
          "Protected still does not clear the crosswalk for you. Pedestrians in your path have to be past before you move.",
        excerptKey: "protected-left",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Left Turn Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_02",
        topic: "rules",
        question:
          "You are in a shared centre lane waiting to turn left, and your path clears. What does the Guide expect?",
        choices: [
          "Wait for a gap in the lane you are entering as well as the one you are crossing",
          "Continue in the lane until the next junction",
          "Turn out of the lane as soon as your path is clear",
          "Signal and pull back into the through lane",
        ],
        correctIndex: 2,
        explanation:
          "A shared centre lane is a staging area, not somewhere to sit. Missouri's instruction is to turn from it as soon as your path is clear.",
        context:
          "Vehicles from both directions use the same lane, which is why the pavement shows left-turn arrows for one direction alternating with arrows for the other. You may not travel more than 500 feet in it, you may not enter it from a side street, and where local rules permit, U-turns may be made from it.",
        trap:
          "Lingering in the lane while you wait for a nicer gap puts you nose to nose with a driver doing the same thing from the other end.",
        commonlyMissed: true,
        excerptKey: "shared-center-lane",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Shared Center Lanes",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_03",
        topic: "signs",
        question:
          "A sign shows two lanes becoming one, and you are in the right-hand lane. What does Missouri require?",
        choices: [
          "Traffic in the left lane must give way to you",
          "Merge left, yielding to traffic already in the left lane",
          "Maintain speed and merge at the taper point",
          "Stop at the end of the lane and wait for a gap",
        ],
        correctIndex: 1,
        explanation:
          "A Lane Ends sign puts the duty on the driver whose lane is disappearing. You merge left and you yield to the traffic already in the left lane.",
        context:
          "It is the mirror image of the Added Lane sign, where traffic joins from another road but a lane has been added so nobody has to merge. A Merge sign is different again: it warns that traffic from another road will be moving into your lane, so you should be ready to make room.",
        trap:
          "Racing to the taper and forcing your way in inverts the rule. The lane that ends yields; it does not get priority.",
        excerptKey: "lane-ends-merge-left",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Flow Signs",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_04",
        topic: "speed",
        question:
          "You are on a rural stretch of I-70 in Missouri with no speed limit sign in sight. What limit should you assume?",
        choices: ["55 mph", "70 mph", "65 mph", "75 mph"],
        correctIndex: 1,
        explanation:
          "Missouri's interstates carry a maximum of 70 mph. Lower limits are posted where urban interchanges and merging traffic make 70 unsafe.",
        context:
          "The Guide's table runs 70 on rural interstates and freeways, 65 on rural expressways, 60 on interstates, freeways and expressways within urbanised areas, 60 on other roads outside urbanised areas, and 55 on lettered routes. Inside a city, town or village it drops to 25 unless posted otherwise.",
        trap:
          "The statute book allows the Commission to set up to 75 on rural interstates. It has not, and the Guide the test is written from says 70.",
        excerptKey: "interstate-max-70",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Speed Limit",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_05",
        topic: "rightOfWay",
        question:
          "Your light goes green and you are turning right. Someone is walking across the road you are turning into. Who has priority?",
        choices: [
          "You do, because your signal is green",
          "You do, if the pedestrian started after your light changed",
          "Neither; it is first come, first served",
          "The pedestrian; a green light does not release you from yielding",
        ],
        correctIndex: 3,
        explanation:
          "A green light lets you proceed once the way is clear. Missouri requires you to yield the right of way to all pedestrians in the intersection even when you are facing green.",
        context:
          "The Guide singles out right turns on a red signal as the moment to be careful of pedestrians or cyclists approaching on your right, because a driver looking left for a gap in traffic is looking away from them. It also tells drivers not to assume pedestrians have seen them or will stop.",
        trap:
          "Green is permission to enter the intersection, not a transfer of priority away from people already crossing it.",
        excerptKey: "green-yield-pedestrians",
        sourceLabel: "Missouri Driver Guide - Chapter 4: As a Driver, You Should Know",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_06",
        topic: "safety",
        question:
          "The steering has gone light and vague in heavy rain and the car is not responding. What should you do?",
        choices: [
          "Brake firmly to regain contact with the road",
          "Ease off the accelerator and let the car slow",
          "Steer sharply to break the film of water",
          "Change down a gear to load the driven wheels",
        ],
        correctIndex: 1,
        explanation:
          "That is hydroplaning. Take your foot off the accelerator and let the vehicle slow. Braking is what turns a loss of traction into a skid.",
        context:
          "Hydroplaning can start at any speed over 35 mph, and in a severe rainstorm tyres can lose all contact with the road at 55. The prevention list is deep tread, correct inflation, slowing down in the wet and keeping cruise control switched off, because cruise keeps feeding power to wheels that have already lost grip.",
        trap:
          "The brake pedal is the reflex and the wrong control. There is no grip to brake against until the tyres reach the road again.",
        excerptKey: "hydroplane-response",
        sourceLabel: "Missouri Driver Guide - Chapter 9: Hydroplaning",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_07",
        topic: "parking",
        question:
          "You are leaving your car parked on a slope. Which of these does the Missouri Driver Guide's hill-parking checklist include?",
        choices: [
          "Remove the keys from the ignition",
          "Leave a window slightly open so the car can vent",
          "Leave an automatic transmission in neutral",
          "Leave the parking brake off so the car can settle against the kerb",
        ],
        correctIndex: 0,
        explanation:
          "The checklist is: wheels turned the right way, engine off with the vehicle in the proper gear, parking brake set, keys removed, mirror checked for traffic before you open the door, and the car locked.",
        context:
          "Missouri asks for the parking brake every time you park, not only on a hill, and asks you to leave a manual in gear and an automatic in park. Wheels go sharply toward the side of the road so a car that gets loose rolls away from traffic rather than into it.",
        trap:
          "Neutral is the one gear position that guarantees nothing is holding the car if the brake slips.",
        excerptKey: "park-hill-checklist",
        sourceLabel: "Missouri Driver Guide - Chapter 5: Parking on Hills",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_08",
        topic: "licensing",
        question:
          "You move to Missouri holding a valid licence from another state. What testing does the Guide require?",
        choices: [
          "The full four-part examination",
          "The written and driving tests",
          "The vision and road sign tests",
          "No testing at all",
        ],
        correctIndex: 2,
        explanation:
          "Transferring a valid out-of-state licence, or one expired less than 184 days, means surrendering it and taking the vision and road sign tests only.",
        context:
          "The four-part examination - written, vision, road sign and driving - comes back if you are applying for a new Missouri licence with no valid licence to transfer, if your Missouri or out-of-state licence has been expired more than 184 days, if your licence was revoked for points or an administrative alcohol action, or if the Director of Revenue asks you to re-sit it.",
        trap:
          "The road sign test is the part transferring drivers do not expect, and it is the reason experienced drivers fail at the counter.",
        commonlyMissed: true,
        excerptKey: "transfer-two-tests",
        sourceLabel: "Missouri Driver Guide - Chapter 1: Requirements to Obtain a License",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_09",
        topic: "impairment",
        question:
          "After a DWI, how long must SR-22 proof of insurance stay on file with the Driver License Bureau?",
        choices: ["Six months", "One year", "Two years", "Five years"],
        correctIndex: 2,
        explanation:
          "Proof of insurance must be kept on file for two years. Letting it lapse suspends the licence for whatever remains of the two-year period.",
        context:
          "SR-22 is the usual mechanism, arranged through your insurer. Getting a suspended licence back after the lapse costs a $20 fee on top of refiling the proof. There is one narrow exception in the Guide: a minor with a BAC of 0.02% or more does not have to file proof of insurance on a first offence.",
        trap:
          "The two years runs on the filing, not on the suspension. Cancelling the policy the day you get the licence back restarts the problem.",
        excerptKey: "sr22-two-years",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Proof of Insurance",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_10",
        topic: "sharing",
        question:
          "You have parked at the kerb and are about to open the driver's door into the traffic lane. What does the Guide ask?",
        choices: [
          "Open it quickly so you are exposed for less time",
          "Check for passing bicyclists first",
          "Open it only from the passenger side",
          "Signal with your hazard lights before opening",
        ],
        correctIndex: 1,
        explanation:
          "Missouri asks you to check for passing bicyclists before opening a door into a traffic lane or a bicycle lane. Cyclists ride close to parked cars and have no time to react to a door.",
        context:
          "The Guide's wider parking advice is to check traffic before opening any door, to get out on the kerb side where you can, and to have passengers, especially children, do the same. It also asks you to shut the door as soon as you are out.",
        trap:
          "Mirrors do not cover the space a cyclist occupies as they arrive alongside. The check has to include a look over your shoulder.",
        excerptKey: "bicycle-door-check",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Sharing the Road with Mopeds and Bicycles",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_11",
        topic: "emergencies",
        question:
          "Your brake pedal sinks to the floor and pumping it hard has not worked. What is the next step?",
        choices: [
          "Apply the emergency or parking brake gradually",
          "Switch off the ignition to stop the engine",
          "Steer into the kerb to scrub off speed",
          "Shift to neutral and coast until the car stops",
        ],
        correctIndex: 0,
        explanation:
          "Pump the pedal fast and hard first. If that fails, use the emergency or parking brake, applied gradually, then shift to a low gear and look for a place to stop.",
        context:
          "The gradual application matters because a parking brake acts on the rear wheels only, and grabbing it can lock them and spin the car. Once stopped, get the vehicle off the road and call for help rather than attempting to drive to a garage. Turning off the ignition can lock the steering, which the Guide warns about separately.",
        trap:
          "Yanking the handbrake is the panic move and it usually ends in a spin at exactly the speed you were trying to lose.",
        excerptKey: "brake-failure-parking-brake",
        sourceLabel: "Missouri Driver Guide - Chapter 9: Brake Failure",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_12",
        topic: "signs",
        question: "A blue rectangular sign with white symbols marks what?",
        choices: [
          "A construction detour",
          "A school zone",
          "A state park or historic site",
          "Motorist services such as a rest area or hospital",
        ],
        correctIndex: 3,
        explanation:
          "Blue signs point to motorist services - rest areas, hospitals, fuel and the like. Brown is the colour for parks, historic areas and other public recreation.",
        context:
          "Colour in Missouri is a whole vocabulary: white for regulatory, red for stop, yield or prohibited, yellow for warning, yellow-green for school, orange for construction, green for direction and distance, blue for services and brown for recreation. Reading the colour first tells you the type of message before you can make out the wording.",
        trap:
          "Green and blue both appear on rectangular signs along a highway. Green tells you how far; blue tells you what is there.",
        excerptKey: "service-signs",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Service Signs",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_13",
        topic: "rules",
        question:
          "You are on a road with three lanes running your way, and traffic is pouring in from entrance ramps on the right. Which lane does the Guide suggest?",
        choices: [
          "The right lane, so you are out of the way of faster traffic",
          "The left lane, since the right two are for entering traffic",
          "The centre lane",
          "Whichever lane is emptiest at the time",
        ],
        correctIndex: 2,
        explanation:
          "The default on three or more lanes is stay right except to pass, but Missouri adds an exception: where a considerable amount of traffic is entering the right travel lane, use the centre lane.",
        context:
          "The centre lane keeps you clear of the merge without parking you in the passing lane. On a four-lane highway the plain rule is to keep right unless passing, letting a driver enter safely, or setting up a legal left turn. If many vehicles are passing you on the right, you are in the wrong lane.",
        trap:
          "Keep right is the general rule, not an absolute one. Sitting in the right lane through a run of busy ramps creates the conflict the exception exists to avoid.",
        excerptKey: "three-lanes-stay-right",
        sourceLabel: "Missouri Driver Guide - Chapter 7: No Lane Markings",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_14",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping centre car park onto a main road. Who has the right of way?",
        choices: [
          "You do, once you have edged past the give-way line",
          "The traffic already on the main road",
          "Whoever arrives at the exit first",
          "You do, if a driver flashes you out",
        ],
        correctIndex: 1,
        explanation:
          "Missouri requires drivers entering a road from a driveway, alley or roadside to yield to vehicles already on the main road.",
        context:
          "The same section adds a pedestrian duty at the same spot: a driver crossing a sidewalk, entering or leaving a driveway, alley or parking lot must yield to pedestrians, and driving on a sidewalk is illegal except to cross it. So an exit like this carries two separate yields, one to people on foot and one to traffic.",
        trap:
          "A flash from another driver is a courtesy, not a legal transfer. If the gap turns out not to exist, the duty to yield was still yours.",
        excerptKey: "driveway-yield",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Intersections",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_15",
        topic: "speed",
        question:
          "What is the uniform maximum speed limit on Missouri's rural expressways?",
        choices: ["55 mph", "65 mph", "70 mph", "60 mph"],
        correctIndex: 1,
        explanation:
          "Rural expressways carry 65 mph, one step below the 70 on rural interstates and freeways and one above the 60 that applies inside urbanised areas.",
        context:
          "An expressway in Missouri law is a divided highway at least ten miles long with four or more lanes, not part of the interstate system, that has crossovers or accesses at the same grade. A freeway is the same but with no at-grade crossings. The distinction is what puts them on different lines of the speed table.",
        trap:
          "Expressway and freeway look interchangeable and are not. The at-grade crossovers are what drop an expressway to 65.",
        commonlyMissed: true,
        excerptKey: "rsmo-rural-expressway-65",
        sourceLabel: "Missouri Revised Statutes - Section 304.010.2(2)",
        sourceUrl: rsmo("304.010"),
      },
      {
        id: "mo_s4_16",
        topic: "signals",
        question:
          "You are stopped at a red light beside a sign reading NO RIGHT TURN ON RED. What may you do?",
        choices: [
          "Turn after a complete stop, as usual",
          "Turn if a police officer is not present",
          "Wait for a green light or a green arrow before turning",
          "Turn once oncoming traffic has cleared",
        ],
        correctIndex: 2,
        explanation:
          "The sign withdraws Missouri's default permission. With it posted you must wait for the signal to let you go rather than turning on the red.",
        context:
          "Right on red is a default in Missouri, not a right. It requires a complete stop first and a way clear of pedestrians and traffic, and a posted sign removes it entirely at that intersection. A red arrow removes it too, because the permission attaches to a steady circular red rather than to an arrow.",
        trap:
          "The sign is often mounted high beside the signal head rather than at the stop line, so drivers scanning for a gap never see it.",
        excerptKey: "no-right-on-red-sign",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_17",
        topic: "safety",
        question:
          "A six-year-old weighs 55 pounds and is 4 feet 2 inches tall. What does Missouri require?",
        choices: [
          "An adult lap and shoulder belt",
          "Nothing beyond riding in the rear seat",
          "A child restraint system or booster seat appropriate for that child",
          "A rear-facing child restraint",
        ],
        correctIndex: 2,
        explanation:
          "Children at least four but under eight, weighing at least 40 but under 80 pounds, and under 4 feet 9 inches tall need a child restraint system or a booster seat.",
        context:
          "The classifications stack rather than compete. Under four years old, or under 40 pounds, means a child restraint system whatever the other figures say. At eight or older, or 80 pounds or more, or over 4 feet 9 inches, a safety belt or booster is enough. The Guide also says children 12 and under should ride restrained in a rear seat.",
        trap:
          "This child clears the age and weight thresholds but not the height one, and all three have to be cleared before a plain belt is enough.",
        commonlyMissed: true,
        excerptKey: "child-booster",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Child Passenger Restraint Law",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_18",
        topic: "licensing",
        question:
          "How many points in how long will suspend a Missouri driving privilege?",
        choices: [
          "4 points in 12 months",
          "12 points in 12 months",
          "6 points in 24 months",
          "8 or more points in 18 months",
        ],
        correctIndex: 3,
        explanation:
          "Eight or more points in 18 months brings a suspension: 30 days for a first, 60 for a second, 90 for a third or later one.",
        context:
          "Four points in 12 months triggers only an advisory letter. Revocation for a year comes at 12 or more points in 12 months, 18 or more in 24, or 24 or more in 36. Speeding is worth two or three points depending on the court, careless and imprudent driving four, and leaving the scene of a crash twelve on its own.",
        trap:
          "The advisory at four points is a warning, not a penalty. The suspension threshold is eight, and it is measured over 18 months rather than 12.",
        commonlyMissed: true,
        excerptKey: "points-8-suspension",
        sourceLabel: "Missouri Driver Guide - Chapter 11: Racking Up Points",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_19",
        topic: "impairment",
        question:
          "What does a first DWI conviction expose a Missouri driver to in court?",
        choices: [
          "A fine only, with no possibility of jail",
          "Up to six months in jail and a fine of up to $500",
          "A mandatory year in jail",
          "Up to four years in jail and a $5,000 fine",
        ],
        correctIndex: 1,
        explanation:
          "A first offence carries up to six months in jail and a fine of up to $500, alongside a 90-day licence suspension.",
        context:
          "The court penalties climb steeply: up to a year and $1,000 for a second offence, up to four years and $5,000 for a third, up to seven years for a fourth, and five to fifteen years for a fifth. A second offence within five years brings a five-year licence denial, and a third or subsequent offence a ten-year denial.",
        trap:
          "The court penalty and the licence action are separate tracks. The administrative suspension can start 15 days after arrest, before any court has heard the case.",
        excerptKey: "dwi-first-offense",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Court-Convicted Actions",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_20",
        topic: "signs",
        question: "A yellow diamond showing a T shape is warning you of what?",
        choices: [
          "The road you are on ends and you must turn right or left",
          "A side road joins from the right",
          "A truck route begins",
          "Two lanes merge into one",
        ],
        correctIndex: 0,
        explanation:
          "The T intersection sign means the road you are travelling does not continue. You will have to turn either right or left.",
        context:
          "Missouri's intersection warning signs distinguish several shapes: a crossroads symbol where another road crosses yours, a side road symbol where one enters from the direction shown, a T where your road ends, and a roundabout symbol where a circular intersection is ahead. There is also a warning for a railroad crossing very close to an intersection.",
        trap:
          "The side road sign and the T look alike at a glance. One means something joins you; the other means you run out of road.",
        excerptKey: "t-intersection",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Road Intersections Signs",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_21",
        topic: "rules",
        question:
          "Traffic on a two-lane road is stopped behind a crash and there is a wide paved shoulder. May you use it to reach the next turning?",
        choices: [
          "Yes, at a walking pace with hazards on",
          "No; other drivers do not expect a vehicle there and may pull off without looking",
          "Yes, once emergency vehicles have arrived",
          "Yes, if you are within 200 feet of your turning",
        ],
        correctIndex: 1,
        explanation:
          "The Guide's instruction is flat: never pass on the shoulder. Its reasoning is that other drivers will not expect you to be there and may pull off the road without looking.",
        context:
          "Missouri also forbids using the shoulder or unpaved part of a highway to pass, and the passing-on-the-right rules say in terms that the movement may never be made by driving off the paved or main travelled portion of the roadway. The shoulder exists for breakdowns and emergency vehicles.",
        trap:
          "A queue for a crash is exactly when the shoulder is most likely to be needed by the people responding to it.",
        excerptKey: "never-pass-on-shoulder",
        sourceLabel: "Missouri Driver Guide - Chapter 7: No Lane Markings",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_22",
        topic: "parking",
        question:
          "You find a gap on the far side of a two-way street and park nose-in against the flow of traffic. What is the position?",
        choices: [
          "Legal, as long as you are within 18 inches of the kerb",
          "Legal outside business hours",
          "Legal if the street has no centre line",
          "Illegal; Missouri forbids parking with your vehicle facing against traffic",
        ],
        correctIndex: 3,
        explanation:
          "Parking facing against traffic is on Missouri's no-parking list, and so is parking on the left side of a two-way street, which is how a car ends up facing the wrong way.",
        context:
          "The list also covers intersections, crosswalks and sidewalks, driveway entrances, bridges, hydrants and yellow kerbs, and closes with a general rule against blocking the normal flow of traffic or creating a hazard. One-way streets are the exception: there you may normally park on either side.",
        trap:
          "A quiet street feels like a technicality. The reason for the rule is that pulling out of a wrong-way space means crossing the full width of the road blind.",
        excerptKey: "no-parking-facing-traffic",
        sourceLabel: "Missouri Driver Guide - Chapter 5: No-Parking Zones",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_23",
        topic: "sharing",
        question:
          "A funeral procession is passing and there is a gap between two of its vehicles. What does Missouri say?",
        choices: [
          "Do not drive between vehicles that are part of a moving procession",
          "You may cross if you signal first",
          "You may cross if the gap is more than three car lengths",
          "You may cross once more than half the procession has passed",
        ],
        correctIndex: 0,
        explanation:
          "The Guide forbids driving between vehicles that are part of a procession while it is in motion, whatever the size of the gap.",
        context:
          "The other rules for drivers outside the procession are: do not join one to gain right of way, do not pass any vehicle in it except where a passing lane has been specifically provided, and do not enter an intersection the procession is crossing against a red unless you can do it without crossing its path. The procession itself has right of way at all intersections regardless of the traffic control device.",
        trap:
          "A gap in the line is usually just a driver who has lost touch, and cutting into it strands the vehicles behind at the next signal.",
        excerptKey: "funeral-no-cut-in",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Funeral Processions",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_24",
        topic: "speed",
        question:
          "From when must a slow moving vehicle emblem be displayed in Missouri, and on what?",
        choices: [
          "At all times, on any farm vehicle",
          "During daylight only, on vehicles under 20 mph",
          "In fog or rain, on any vehicle under 30 mph",
          "From sunset to half an hour before sunrise, on any vehicle moving 25 mph or slower",
        ],
        correctIndex: 3,
        explanation:
          "Missouri requires the emblem from sunset until half an hour before sunrise on any vehicle moving at 25 mph or slower.",
        context:
          "The sign must sit on the rear of the vehicle, near the middle, four feet or more above the road, and be kept clean and reflective. The same reflective orange triangle appears in the sign chapter as the warning that the vehicle ahead is travelling at less than 25 mph - which on a 55 mph lettered route is a closing speed of 30 mph.",
        trap:
          "The window is not symmetrical. It begins at sunset but does not end until half an hour before sunrise, unlike the headlight rule, which starts half an hour after sunset.",
        excerptKey: "smv-sign-required",
        sourceLabel: "Missouri Driver Guide - Chapter 14: Other Equipment Required by Law",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_25",
        topic: "emergencies",
        question:
          "A reportable crash has happened. How long does Missouri give you to file the accident report with the Department?",
        choices: ["30 days", "10 days", "72 hours", "One year"],
        correctIndex: 0,
        explanation:
          "State law requires the accident report to be filed within 30 days. The obligation applies even where the crash happened in a parking lot, or where a settlement has been reached.",
        context:
          "The report is required only when a set of conditions all hold: the crash happened in Missouri, less than a year ago, someone involved had no liability insurance, and there was more than $500 of damage to someone's property or an injury or death. Where those are not all met you may still file voluntarily if an uninsured motorist was involved.",
        trap:
          "Exchanging details and calling the police at the scene is a different duty. The written report to the Driver License Bureau is a separate step with its own clock.",
        excerptKey: "accident-report-30-days",
        sourceLabel: "Missouri Driver Guide - Chapter 13: Filing an Accident Report",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_26",
        topic: "signals",
        question:
          "An officer is directing traffic at an intersection and signals you to stop, but your light is green. What must you do?",
        choices: [
          "Proceed, because a signal is the legal traffic control device",
          "Proceed slowly, watching the officer",
          "Sound your horn and wait for clarification",
          "Stop; the officer's direction overrides the signal",
        ],
        correctIndex: 3,
        explanation:
          "The Guide uses this exact example. If an officer signals you to stop at a green light, you stop. Directions from traffic officers govern over signs and signals.",
        context:
          "Missouri lists law enforcement, highway personnel and school crossing guards alongside signals, signs and pavement markings as sources of traffic control, and requires you to obey the people. That is the same principle that puts a work zone flagger's instruction above the posted signs in that zone.",
        trap:
          "A green light behind an officer's raised hand usually means they are clearing a route for something you cannot see yet.",
        commonlyMissed: true,
        excerptKey: "traffic-officer-green",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Officers",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_27",
        topic: "safety",
        question:
          "A deer steps into your lane and a collision now looks unavoidable. What does the Missouri Driver Guide advise?",
        choices: [
          "Do not swerve",
          "Swerve towards the shoulder",
          "Brake as hard as the car will allow",
          "Accelerate to clear the animal's path",
        ],
        correctIndex: 0,
        explanation:
          "Missouri's advice is not to swerve. Going off the road or into oncoming traffic to miss an animal usually produces a worse crash than hitting it.",
        context:
          "The Guide also warns against very heavy braking at the last moment, because dropping the nose of the car can strike the deer low and bring the body through the windscreen. Deer seldom travel alone, most crashes happen in January, May and October through December, and the riskiest hours run from sunset to midnight and around sunrise.",
        trap:
          "Swerving is the instinct, and it is how a survivable animal strike becomes a head-on collision or a rollover.",
        commonlyMissed: true,
        excerptKey: "deer-dont-swerve",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Tips For Avoiding a Deer-Vehicle Crash",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_28",
        topic: "rules",
        question:
          "There are no lane markings or signs to control turning at a junction. Which lane should you turn from?",
        choices: [
          "Whichever lane has the shortest queue",
          "Always the outside lane, in either direction",
          "The lane closest to the direction you want to go, into the lane closest to the one you came from",
          "The centre lane, so you can adjust as you turn",
        ],
        correctIndex: 2,
        explanation:
          "Missouri's default is to turn from the lane closest to the direction you want to go and into the lane closest to the one you came from. That crosses the fewest lanes of traffic.",
        context:
          "The Guide then works through the cases: turning from a two-way onto a two-way, you start with your left wheels close to the yellow dividing line and enter to the right of the centre line. Turning onto a one-way with two lanes, you may take either lane, whichever is free. Once the turn is complete you may change lanes if you need to.",
        trap:
          "Swinging wide to set up an easier turn is what makes the driver behind think you are changing lanes and try to come past.",
        excerptKey: "turn-from-nearest-lane",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Turns",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_29",
        topic: "licensing",
        question: "When does a Missouri nondriver identification card expire?",
        choices: [
          "On your date of birth in the sixth year after you apply",
          "Three years after issue",
          "On the last day of the fourth calendar year",
          "It never expires",
        ],
        correctIndex: 0,
        explanation:
          "The nondriver ID runs to your date of birth in the sixth year after you apply. Applicants aged 70 or older are issued a non-expiring card.",
        context:
          "There is an exception in the other direction: a 70-or-older applicant seeking a REAL ID-compliant card may be given a six-year expiry, or a shorter one where immigration document status requires it. A driver licence may run up to six years too, and you can renew either up to six months before expiry.",
        trap:
          "A nondriver ID is not a licence and never becomes one. Holding a valid one does not exempt you from any part of the driver examination.",
        excerptKey: "nondriver-id-expiry",
        sourceLabel: "Missouri Driver Guide - Chapter 1: Nondriver Identification Card",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_30",
        topic: "signs",
        question: "What does Missouri use yellow-green signs for?",
        choices: [
          "Construction zones",
          "Motorist services",
          "School areas",
          "Public recreation and cultural sites",
        ],
        correctIndex: 2,
        explanation:
          "Yellow-green is Missouri's school colour. Orange marks construction, blue marks motorist services and brown marks public recreation and cultural interests.",
        context:
          "The Guide notes that the school crossing sign is being transitioned to yellow-green over a period of about ten years, so you will meet both the older yellow version and the newer one on the same journey. The pentagon shape is the other school marker and it does not change.",
        trap:
          "Plain yellow warning signs and yellow-green school signs sit side by side during the transition, so the shade alone will not always tell you which you are looking at.",
        excerptKey: "sign-colors",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_31",
        topic: "impairment",
        question:
          "You are required to run an ignition interlock device. Who pays for installing and servicing it?",
        choices: [
          "The court, out of the fine collected",
          "The Department of Revenue",
          "Your insurer, under the SR-22 filing",
          "You do",
        ],
        correctIndex: 3,
        explanation:
          "The driver pays for having the device installed and for having it serviced every month.",
        context:
          "The device connects to the ignition, horn and headlights and measures breath alcohol, requiring a sample before the engine starts and periodically while you drive. It must be maintained at least six months from reinstatement with no violations in the last three. Fail to maintain it and the privilege is re-suspended, with a $20 fee to fix.",
        trap:
          "A court can order an interlock for a first DWI conviction, or for longer than six months, on top of the licensing requirement.",
        excerptKey: "iid-you-pay",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Ignition Interlock",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_32",
        topic: "rightOfWay",
        question:
          "The car in the next lane slows and stops for no obvious reason as you approach a crossing. What does Missouri require of you?",
        choices: [
          "Sound your horn to check whether they have broken down",
          "Change lanes and continue past",
          "Do not pass it; it may have stopped for a pedestrian",
          "Pass slowly, keeping to your side of the lane",
        ],
        correctIndex: 2,
        explanation:
          "Missouri says not to pass a vehicle that has stopped or slowed down for a pedestrian. That vehicle is often the only thing standing between you and someone you cannot yet see.",
        context:
          "It sits alongside the duty to yield to pedestrians in marked and unmarked crosswalks on or approaching your side of the road, and the rule that drivers should not block a crosswalk while stopped at a red. The multi-lane version of this collision is one of the most consistently fatal for people on foot.",
        trap:
          "Assuming the stopped driver is turning or has stalled is the reasoning that produces the impact, because you accelerate exactly where a person is stepping out.",
        excerptKey: "no-pass-stopped-for-ped",
        sourceLabel: "Missouri Driver Guide - Chapter 4: As a Driver, You Should Know",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_33",
        topic: "speed",
        question:
          "Fog has cut visibility on a 60 mph road. What does Missouri law say about your speed?",
        choices: [
          "The posted limit stands until it is lowered by sign",
          "You may keep to the limit if your lights are on",
          "You may exceed it to clear the fog bank quickly",
          "By law you must slow down when conditions demand it",
        ],
        correctIndex: 3,
        explanation:
          "The posted figure is the maximum for ideal conditions. Missouri puts the duty in legal terms: when conditions demand it, you must slow down.",
        context:
          "The Guide lists hills, curves, slippery roadways, limited sight distance, pedestrians, cyclists and slow-moving vehicles as conditions that can make a posted limit unsafe. Its fog advice is specific: reduce speed, be ready to stop, keep headlights on low beam, and if it becomes too thick to see, pull off the road and leave the lights and flashers on.",
        trap:
          "High beams in fog make it worse rather than better, because the light reflects back off the water droplets.",
        excerptKey: "speed-slow-when-needed",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Speed Limit",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_34",
        topic: "safety",
        question:
          "You put a penny head-first into a tyre groove and the top of Lincoln's head is covered. What does that tell you?",
        choices: [
          "The tread depth is still in the safe range",
          "The tyre is below the legal minimum",
          "The tyre is over-inflated",
          "The tread is worn unevenly",
        ],
        correctIndex: 0,
        explanation:
          "If any part of Lincoln's head is covered by the tread, you have a safe amount of tread. Once the tread drops below that, roughly 2/32 of an inch, grip in bad conditions falls away sharply.",
        context:
          "The Guide asks for a check once a month or before a long trip, choosing the shallowest-looking point on the tyre. Pressure is checked separately against the figure in the owner's manual or on the driver's door jamb, before you get in and while the tyres are cold.",
        trap:
          "Checking one groove on one tyre misses the uneven wear that alignment problems cause, which is why the Guide says to pick the lowest-looking point.",
        excerptKey: "penny-test",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Tire Pressure",
        sourceUrl: HB,
      },
      {
        id: "mo_s4_35",
        topic: "parking",
        question:
          "You are leaving your car for two minutes outside a shop. What does the Guide say about the keys?",
        choices: [
          "Never leave the keys in a parked vehicle",
          "It is acceptable if you can see the vehicle",
          "It is acceptable if the doors are locked",
          "It is acceptable for stops under five minutes",
        ],
        correctIndex: 0,
        explanation:
          "Missouri's parking advice is unqualified: never leave the keys in a parked vehicle, and lock the doors whenever the car will be out of your sight at all.",
        context:
          "The wider point of the parking chapter is that a parked vehicle is still your responsibility. The Guide asks you to park far enough from any travel lane not to interfere with traffic, where drivers approaching from either direction can see you, with the parking brake set and the vehicle in gear or park.",
        trap:
          "Leaving the engine running to keep the heater on is the version of this people talk themselves into, and it is also how carbon monoxide builds up in an enclosed space.",
        excerptKey: "park-never-leave-keys",
        sourceLabel: "Missouri Driver Guide - Chapter 5: Parking",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Stacked thresholds, exceptions to exceptions, and the Missouri rules that differ from the neighbouring states. This is the set to work through twice.",
    questions: [
      {
        id: "mo_s5_01",
        topic: "rightOfWay",
        question:
          "A school bus stops with its red lights flashing on a two-lane road that is a one-way street. You are behind it. What must you do?",
        choices: [
          "Stop before you reach the bus",
          "Pass on the left at 10 mph or less",
          "Pass on the right, since it is a one-way street",
          "Slow down and continue if no children are visible",
        ],
        correctIndex: 0,
        explanation:
          "Missouri requires the stop on a two-lane road that is a one-way street. Being on a one-way is not one of the listed exceptions, and following traffic must stop in every case anyway.",
        context:
          "The exceptions release only oncoming traffic, and only in three situations: a highway divided by a median where the two directions are on totally separate roads, a highway containing four or more lanes, and a bus stopped in a loading zone at a school where students are not permitted to cross. None of them helps a driver following the bus.",
        trap:
          "One-way streets feel like they should be exempt because nothing is coming the other way. Missouri lists them among the roads where you must stop.",
        commonlyMissed: true,
        excerptKey: "school-bus-must-stop",
        sourceLabel: "Missouri Driver Guide - Chapter 3: School Buses",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_02",
        topic: "licensing",
        question:
          "A 15-year-old Missouri permit holder wants to drive with a family friend supervising. What does the law require of that supervisor?",
        choices: [
          "Any licensed driver aged 21 or over",
          "At least 25 years old, licensed for at least three years, with written permission from the parent or guardian",
          "At least 18 years old and licensed for one year",
          "A certified driving instructor only",
        ],
        correctIndex: 1,
        explanation:
          "Under 16, the supervisor must be a parent, stepparent, grandparent, legal guardian or qualified driving instructor - or someone at least 25 who has been licensed for a minimum of three years and has written permission from the parent or guardian.",
        context:
          "The rule loosens on the sixteenth birthday: at 16 or older, a permit holder may drive accompanied in the front seat by any person at least 21 years old with a valid driver licence. Where a parent, grandparent or guardian is physically disabled, they may designate up to two people to give behind-the-wheel instruction.",
        trap:
          "The 21-year-old supervisor rule is real but it only starts at 16. Below that age the bar is 25 with three years of licence and written permission.",
        commonlyMissed: true,
        excerptKey: "permit-under-16-supervisor",
        sourceLabel: "Missouri Driver Guide - Chapter 1: Step One: Instruction Permit",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_03",
        topic: "speed",
        question:
          "You are on an unposted numbered state highway well outside any urbanised area, and it is not an interstate, freeway or expressway. What is the uniform maximum?",
        choices: ["60 mph", "55 mph", "65 mph", "70 mph"],
        correctIndex: 0,
        explanation:
          "All other roads and highways outside an urbanised area sit at 60 mph under the statute, and that matches the Guide's table.",
        context:
          "An urbanised area is defined in the statute as an area of fifty thousand population at a density of at least a thousand persons per square mile. Inside one, interstates, freeways and expressways drop to 60. The lettered two-lane routes are carved out of the 60 figure and capped at 55 unless the Department of Transportation raises them, and even then no higher than 60.",
        trap:
          "The 55 that applies to lettered routes does not spread to numbered rural highways, which is why the road's designation matters as much as its width.",
        excerptKey: "rsmo-other-roads-60",
        sourceLabel: "Missouri Revised Statutes - Section 304.010.2(4)",
        sourceUrl: rsmo("304.010"),
      },
      {
        id: "mo_s5_04",
        topic: "rules",
        question:
          "You are pulling out of a side street and want to reach the two-way left-turn lane in the middle of the main road. What does Missouri say?",
        choices: [
          "Enter it directly, then merge right when clear",
          "Enter it only if you signal for 100 feet first",
          "Enter it only where the nearest yellow line is dashed",
          "Do not use it when entering the roadway from a side street",
        ],
        correctIndex: 3,
        explanation:
          "The Guide states plainly that you should not use the two-way left-turn lane when entering the roadway from a side street. It is for traffic already on the main road preparing to turn left off it.",
        context:
          "The lane is entered only when you are preparing to slow down or stop before making a left turn from the main roadway, you may not travel in it more than 500 feet, and you turn out of it as soon as your path is clear. Traffic from both directions shares it, which is why treating it as a merging lane is dangerous.",
        trap:
          "Using it as a refuge to cross one direction at a time is the natural instinct at a busy road, and it is the specific use Missouri rules out.",
        excerptKey: "two-way-left-turn-entry",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Two-Way Left-Turn Lanes",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_05",
        topic: "signs",
        question:
          "You approach an unguarded railroad crossing and a train is visible some distance away. What does the Missouri Driver Guide say?",
        choices: [
          "You may cross if you can clear the tracks before it arrives",
          "You may cross if your speed is above 20 mph",
          "You may cross if the train has not yet sounded its horn",
          "Never try to beat a train across the tracks",
        ],
        correctIndex: 3,
        explanation:
          "The instruction is absolute: never try to beat a train across the tracks, and never start across until there is room for your vehicle on the far side.",
        context:
          "The crossbuck carries the meaning of a yield sign, so you must give way to trains. Where lights flash or a gate is down you must stop, between 15 and 50 feet from the tracks, and never drive around a lowered gate. Missouri also warns against shifting gears while crossing, in case the engine stalls on the rails.",
        trap:
          "A train's size makes it look slower and further away than it is, which is precisely why the rule is stated as a prohibition rather than a judgment call.",
        commonlyMissed: true,
        excerptKey: "railroad-never-beat",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Railroad Crossing",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_06",
        topic: "impairment",
        question:
          "A 20-year-old is caught with a BAC of 0.03% for the first time. What does Missouri's insurance-filing rule say?",
        choices: [
          "SR-22 proof must be filed for two years, as for any offence",
          "No proof of insurance filing is required on a first offence",
          "SR-22 proof must be filed for three years",
          "SR-22 proof is required only if a crash occurred",
        ],
        correctIndex: 1,
        explanation:
          "Missouri writes in a single exception here: minors with a BAC of 0.02% or more do not have to file proof of insurance on a first offence.",
        context:
          "That is the one relief in an otherwise strict scheme. Anyone facing the consequences of a DWI or a 0.08% reading must keep SR-22 proof on file with the Driver License Bureau for two years, and a lapse suspends the licence for the remainder of the period unless the filing is restored and a $20 fee paid.",
        trap:
          "The exception covers only the insurance filing and only the first offence. The suspension, the fee and the SATOP requirement are unaffected.",
        commonlyMissed: true,
        excerptKey: "minor-first-offense-exception",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Proof of Insurance",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_07",
        topic: "safety",
        question:
          "The road surface is clear but the temperature is near freezing. Which part of the route does the Guide single out?",
        choices: [
          "Bridges and overpasses, which freeze before the rest of the road",
          "Long straight sections, where speed builds unnoticed",
          "Sections in direct sunlight, where meltwater refreezes fastest",
          "Junctions, where salt is thinned by turning traffic",
        ],
        correctIndex: 0,
        explanation:
          "Bridges and overpasses freeze and become slippery before other parts of the road, because cold air circulates underneath them as well as above.",
        context:
          "The Guide's winter list surrounds that with the practicalities: clear all snow and ice from the windows before setting off, keep cruise control off, brake gently early on to see how slippery the surface is, and leave about eight to ten seconds to the vehicle ahead. Even on a cleared road, it warns, a few ice patches may remain.",
        trap:
          "A clear approach road tells you nothing about the bridge deck, which is why the transition onto the structure is where cars are lost.",
        commonlyMissed: true,
        excerptKey: "bridges-freeze-first",
        sourceLabel: "Missouri Driver Guide - Chapter 9: Winter Driving",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_08",
        topic: "parking",
        question:
          "You have parked at the kerb on a busy street. Which side should you and your passengers get out on?",
        choices: [
          "Whichever side is nearer your destination",
          "The driver's side, so you can watch traffic",
          "The kerb side, if you can",
          "Either; the Guide leaves it to the driver",
        ],
        correctIndex: 2,
        explanation:
          "Missouri asks you to get out on the kerb side where you can, and to have passengers, especially children, do the same.",
        context:
          "Where you must use the street side, check traffic first, including for bicyclists, who ride close to parked cars. Shut the door as soon as you are out. The Guide pairs this with the door-check rule from the cycling chapter: look for passing bicyclists before opening a door into a traffic lane or bicycle lane.",
        trap:
          "Sending children out on the traffic side because it is quicker is the specific habit the Guide names, and children are the hardest road users for a passing driver to see.",
        excerptKey: "park-exit-curb-side",
        sourceLabel: "Missouri Driver Guide - Chapter 5: Parking",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_09",
        topic: "signals",
        question:
          "You are waiting on a green arrow when it changes to a steady yellow arrow. What is happening?",
        choices: [
          "The signal has failed and will go dark",
          "You must stop immediately whatever your position",
          "The green arrow is ending; be ready to yield to oncoming traffic or to stop",
          "You now have a protected turn for the rest of the cycle",
        ],
        correctIndex: 2,
        explanation:
          "A steady yellow arrow appears after a green arrow. It tells you the protected phase is finishing and that you must be ready to yield the right of way to oncoming traffic, or to stop.",
        context:
          "What follows the yellow arrow varies: it may become a circular green, a flashing yellow arrow, or a red arrow. On a protected-permissive signal the same head runs through all of those in one cycle, so the indication in front of you now is the only one that tells you anything about your rights.",
        trap:
          "A yellow arrow is not simply a shorter yellow light. It is the handover from a protected turn to one where you have to find your own gap.",
        excerptKey: "yellow-arrow",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Left Turn Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_10",
        topic: "sharing",
        question:
          "Missouri requires a rear red reflector or light on a bicycle ridden at night. From what distance must it be visible?",
        choices: [
          "600 feet in a vehicle's low beam headlights",
          "200 feet in a vehicle's low beam headlights",
          "300 feet in a vehicle's low beam headlights",
          "500 feet in a vehicle's low beam headlights",
        ],
        correctIndex: 0,
        explanation:
          "The rear red reflector must be at least two square inches, or a rear red light, visible at 600 feet in a vehicle's low beam headlights.",
        context:
          "The set of figures runs: a white light at the front visible from 500 feet, the rear red reflector or light at 600 feet, reflective material or lights on the pedals, crank arms, shoes or lower legs at 200 feet, and reflective material or lights on each side at 300 feet. They are required from half an hour after sunset until half an hour before sunrise.",
        trap:
          "The rear figure is the largest of the four and it is easy to swap with the 500 feet that belongs to the front white light.",
        commonlyMissed: true,
        excerptKey: "bicycle-rear-red-600",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Equipment Required on Mopeds and Bicycles",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_11",
        topic: "emergencies",
        question:
          "Which combination makes a crash reportable to the Missouri Driver License Bureau?",
        choices: [
          "Any crash on a public road, however minor",
          "Any crash where an insurer is involved",
          "Any crash where the police attended",
          "It happened in Missouri, less than a year ago, someone had no liability insurance, and there was over $500 of damage or an injury or death",
        ],
        correctIndex: 3,
        explanation:
          "All of those conditions have to hold together. The Guide joins them with AND, and the uninsured-motorist element is what most people leave out.",
        context:
          "The report goes in within 30 days, even if the crash happened in a parking lot or a settlement has been reached. If the conditions are not all met you may still file voluntarily where an uninsured motorist was involved, which lets the Department act against them for not maintaining insurance.",
        trap:
          "The $500 damage figure on its own does not make a crash reportable. Without an uninsured party in the mix, the duty does not arise.",
        commonlyMissed: true,
        excerptKey: "accident-report-conditions",
        sourceLabel: "Missouri Driver Guide - Chapter 13: Filing an Accident Report",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_12",
        topic: "rules",
        question:
          "You are 80 feet from a bridge on a two-lane road and your view of the far side is blocked. May you cross the centre line to pass?",
        choices: [
          "Yes, if the centre line is broken",
          "Yes, if you can complete the pass before the bridge",
          "Yes, provided you sound your horn",
          "No; Missouri forbids it within 100 feet of a bridge where the view is obstructed",
        ],
        correctIndex: 3,
        explanation:
          "No vehicle may be driven to the left side of the roadway when the view is obstructed on approaching within 100 feet of any bridge, viaduct or tunnel.",
        context:
          "The list of prohibitions runs alongside two others of the same kind: within 100 feet of, or at, any intersection or railroad grade crossing, and when approaching the crest of a grade or a curve where your view is obstructed enough to create a hazard. A solid yellow line on your side is a fourth, independent bar.",
        trap:
          "Broken markings tell you where passing is usually permitted. They do not survive the specific distance rules around structures and junctions.",
        excerptKey: "passing-left-bridge",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Passing on the Left",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_13",
        topic: "licensing",
        question:
          "A Missouri driver has held an intermediate licence for eight months. How many non-family passengers under 19 may ride with them?",
        choices: ["One", "Three", "Two", "Unlimited"],
        correctIndex: 1,
        explanation:
          "After the first six months the limit rises from one to three passengers under 19 who are not members of the driver's immediate family.",
        context:
          "Immediate family here means parents, grandparents, brothers, sisters, stepbrothers, stepsisters and adopted or foster children living in the household, so siblings never count against the limit. The passenger restrictions may not apply where the driver is engaged in agricultural work-related activities.",
        trap:
          "The number changes at six months of holding the licence, not at any age. Two intermediate drivers of the same age can be under different limits.",
        commonlyMissed: true,
        excerptKey: "intermediate-after-six-months",
        sourceLabel: "Missouri Driver Guide - Chapter 1: Step Two: Intermediate License",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_14",
        topic: "speed",
        question:
          "What is the uniform maximum on an interstate, freeway or expressway inside a Missouri urbanised area?",
        choices: ["70 mph", "65 mph", "55 mph", "60 mph"],
        correctIndex: 3,
        explanation:
          "Inside an urbanised area, interstates, freeways and expressways all drop to 60 mph.",
        context:
          "The Guide explains the reason rather than just the number: lower limits are posted on urban interstates because interchanges and entering and exiting traffic are more frequent there. The statute defines an urbanised area as fifty thousand people at a density of a thousand or more per square mile.",
        trap:
          "The road does not change name at the city boundary. An interstate that carried 70 in open country carries 60 once it is inside the urbanised area.",
        excerptKey: "rsmo-urbanized-60",
        sourceLabel: "Missouri Revised Statutes - Section 304.010.2(3)",
        sourceUrl: rsmo("304.010"),
      },
      {
        id: "mo_s5_15",
        topic: "signs",
        question:
          "You see a WRONG WAY sign facing you as you come off a ramp. What does the Guide tell you to do?",
        choices: [
          "Continue to the next junction and turn around there",
          "Reverse back up the ramp you came down",
          "Stop where you are and put your hazard lights on",
          "Pull off the road as quickly and safely as you can, turn around and go back",
        ],
        correctIndex: 3,
        explanation:
          "The sign means you have made a wrong turn and are facing oncoming traffic. Get off the road as quickly and safely as you can, turn around and go back.",
        context:
          "It works alongside DO NOT ENTER, which marks a roadway opening you must not use at all, and ONE WAY, which tells you traffic on that road or ramp is permitted in a single direction. All three are regulatory signs, which in Missouri means white with black or red lettering, or red where the message is a prohibition.",
        trap:
          "Stopping in place feels safest and leaves you parked in the path of traffic that is not expecting anything to be there.",
        excerptKey: "wrong-way-sign",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_16",
        topic: "rightOfWay",
        question:
          "A police car is stopped on the shoulder of a six-lane divided highway with its lights flashing. What does the Move Over law require?",
        choices: [
          "Stop until an officer waves you past",
          "Reduce to half the posted speed limit",
          "Change into a lane not adjacent to the stopped vehicle if it is safe to do so",
          "Move into the far left lane in every case",
        ],
        correctIndex: 2,
        explanation:
          "On a roadway with at least four lanes and at least two running your way, you proceed with caution and, if it is safe, change into a lane that is not adjacent to the stationary vehicle.",
        context:
          "Where changing lanes would be unsafe or impossible, the alternative is to proceed with due caution and reduce speed, maintaining a safe speed for the road conditions. The law covers vehicles showing amber or amber-and-white lights as well as red or red-and-blue, so tow trucks and highway crews are protected too. Violation is a Class A misdemeanor.",
        trap:
          "Slowing down is the fallback, not the first choice. Where a lane change is safe, Missouri expects the lane change.",
        commonlyMissed: true,
        excerptKey: "move-over-lane-change",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_17",
        topic: "safety",
        question:
          "In the Missouri stopping-distance chart, how long is the reaction time allowed before the brakes are applied?",
        choices: [
          "One and a half seconds",
          "Half a second",
          "One second",
          "Two and a half seconds",
        ],
        correctIndex: 0,
        explanation:
          "The chart uses a reaction distance based on 1.5 seconds, and the Guide adds that you have to be alert to react within one and one-half seconds at all.",
        context:
          "Total stopping distance is reaction distance plus braking distance. The braking half of the chart assumes good brakes and tyres, good weather and a good road, so every figure in it is a best case. Speed, fatigue and worn brakes all stretch it, which is the argument behind the three second following rule.",
        trap:
          "The chart is not the distance you need in the real world. It is a dry-road, alert-driver, good-brakes figure and everything about a real journey makes it longer.",
        excerptKey: "reaction-distance-15",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Stopping Distance",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_18",
        topic: "impairment",
        question:
          "A 30-year-old Missouri driver is caught possessing drugs while driving. What can happen to the licence under Abuse and Lose?",
        choices: [
          "A 90-day suspension, as for a driver under 21",
          "A 30-day suspension for a first offence",
          "It may be taken away for one year",
          "Nothing; Abuse and Lose applies only to drivers under 21",
        ],
        correctIndex: 2,
        explanation:
          "At 21 or older, possessing or using drugs while driving can cost the licence for one year. The 90-day version of the penalty is the one that applies under 21.",
        context:
          "Reinstatement in either case means a $45 fee, a completed Substance Awareness Traffic Offender Program or comparable programme, SR-22 proof of insurance for two years, and retaking the complete driver examination. The adult penalty is longer than the young-driver one precisely because it is the drug element that triggers it.",
        trap:
          "Abuse and Lose is usually described as a teenage law. The drug limb of it reaches adults and carries a longer loss.",
        excerptKey: "abuse-and-lose-21",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Missouri's Abuse and Lose Law",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_19",
        topic: "parking",
        question:
          "You are parking a car with a manual gearbox on a level street. What does the Guide expect?",
        choices: [
          "Set the parking brake and leave the vehicle in gear",
          "Set the parking brake only; the gearbox does not matter on the level",
          "Leave it in neutral with the parking brake set",
          "Leave it in gear with the parking brake off",
        ],
        correctIndex: 0,
        explanation:
          "Missouri asks for the parking brake every time you park, and for the vehicle to be left in gear if it is a manual or in park if it is an automatic.",
        context:
          "On a hill the routine grows: wheels turned sharply toward the side of the road so a car that gets loose rolls away from traffic, engine off in the proper gear, brake set, keys out, mirror checked before you open the door, and the car locked. The Guide's opening line for the chapter is that a parked vehicle must not become a hazard.",
        trap:
          "Level looks level and rarely is. The gear and the brake together are what stop a car following a barely visible slope into the road.",
        excerptKey: "park-brake-and-gear",
        sourceLabel: "Missouri Driver Guide - Chapter 5: Parking",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_20",
        topic: "signals",
        question: "A signal is flashing yellow in your direction. What does it require?",
        choices: [
          "Stop, then proceed when clear",
          "Slow down and proceed with caution",
          "Stop and wait for a green light",
          "Treat the intersection as a four-way stop",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow light tells you to slow down and proceed with caution. It does not require a stop, unlike a flashing red.",
        context:
          "Missouri uses flashing signals overnight, in emergencies, at quiet times and for special events - typically flashing yellow for the main road and flashing red for the side road. A completely dark signal is different from either: the Guide tells you to treat that intersection as a four-way stop.",
        trap:
          "Flashing yellow gives the main road priority, but it is not a green. The cross traffic is stopping, and one of them will eventually misjudge the gap.",
        excerptKey: "flashing-yellow",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_21",
        topic: "rules",
        question:
          "A city ordinance sets a turn restriction that state law does not. What is your obligation?",
        choices: [
          "State law prevails and the sign may be ignored",
          "The restriction applies only to residents of that city",
          "You must obey any traffic sign or regulation, whether set by a municipality, county or the state",
          "You must obey it only if it is signed on every approach",
        ],
        correctIndex: 2,
        explanation:
          "Missouri requires you to obey any traffic sign or regulation whether it was set by a municipality, a county or the state. Local rules sit on top of state law rather than under it.",
        context:
          "The Guide lists what cities and towns may regulate: speed limits, one-way streets, stop signs at intersections, commercial vehicle routes, parking meters and other parking controls, turns, the required use of turn signals, brake lights and horns, and the use of sound-producing warning devices. It is also why some towns ban U-turns outright.",
        trap:
          "Reading the state rulebook is not enough for a strange town. The posted sign in front of you is the rule that governs there.",
        excerptKey: "local-ordinances",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Local Ordinances",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_22",
        topic: "signs",
        question:
          "How often do emergency reference markers appear along a Missouri interstate shoulder?",
        choices: [
          "Every two-tenths of a mile",
          "Every half mile",
          "Every mile",
          "Every five miles",
        ],
        correctIndex: 0,
        explanation:
          "Reference markers sit every two-tenths of a mile, close enough that a motorist is always within sight of one.",
        context:
          "They mark the edge of the roadway and carry the route number and direction of travel, so someone calling for help can say exactly where they are. Missouri publishes *55 as the cellular number for highway emergency assistance, alongside a statewide toll-free line.",
        trap:
          "Ordinary mile markers are what most drivers picture. The reference markers are five times as frequent, which is the whole point of them.",
        excerptKey: "reference-markers",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Emergency Reference Markers",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_23",
        topic: "sharing",
        question:
          "At what speed does a Class 3 electric bicycle stop providing pedal assistance in Missouri?",
        choices: [
          "20 miles per hour",
          "25 miles per hour",
          "30 miles per hour",
          "28 miles per hour",
        ],
        correctIndex: 3,
        explanation:
          "A Class 3 e-bike assists only while the rider is pedalling and stops assisting at 28 miles per hour. Classes 1 and 2 both cut out at 20.",
        context:
          "The three classes differ in how the motor behaves rather than in how fast the bike can be ridden. Class 1 assists only while pedalling and stops at 20. Class 2 can propel the bicycle without pedalling and stops at 20. Class 3 is pedal-assist only and runs to 28. All three need working pedals, a seat and a motor under 750 watts, and none requires a driver licence.",
        trap:
          "The Class 3 cut-out is fast enough that a bicycle can be moving with the traffic in a 25 mph town, which is not what most drivers expect from a bike.",
        commonlyMissed: true,
        excerptKey: "ebike-class-3",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Sharing the Road with Electric Bicycles",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_24",
        topic: "speed",
        question:
          "A minimum speed is posted and normal conditions apply. What is the position if you drive below it?",
        choices: [
          "It is a matter of courtesy rather than law",
          "It is against the law",
          "It is lawful provided you use hazard lights",
          "It is lawful in the right-hand lane",
        ],
        correctIndex: 1,
        explanation:
          "Driving slower than a posted minimum speed under normal driving conditions is against the law in Missouri.",
        context:
          "You may go below the minimum in bad weather, heavy traffic or on a bad road. Where no minimum is posted it is still unlawful to drive so slowly that you block traffic, and the Guide asks you to pull over and let a queue past when it is safe. Interstates carry a 40 mph minimum, and if that is too fast for you the Guide says to take another route.",
        trap:
          "Hazard lights do not make an obstruction lawful. They tell other drivers there is a problem; they do not create an exemption.",
        excerptKey: "slow-poke-minimum",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Slow Poke Driving",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_25",
        topic: "emergencies",
        question:
          "A car is coming straight at you in your lane on a two-lane road. What does the Guide tell you to do?",
        choices: [
          "Slow down, pull to the right and sound your horn",
          "Move into the left lane, since the other driver is in yours",
          "Brake hard and hold your line",
          "Flash your headlights and maintain speed",
        ],
        correctIndex: 0,
        explanation:
          "Slow down, pull over to the right and sound the horn. Missouri specifically warns against swinging into the left lane, because the other driver may pull back into it at the same moment.",
        context:
          "The horn matters here because the most likely explanations - a distracted driver, someone who has drifted across the centre line, a driver falling asleep - are all ones where noise brings them back. The Guide notes elsewhere that many head-on collisions are caused by distracted drivers crossing the centre line.",
        trap:
          "Steering into the lane the other car has left feels like the obvious escape, and it is the one move that turns a near miss into an impact.",
        excerptKey: "head-on-approach",
        sourceLabel: "Missouri Driver Guide - Chapter 9: Vehicle Approaching Head-On",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_26",
        topic: "licensing",
        question:
          "Which of these point totals brings a one-year revocation in Missouri?",
        choices: [
          "18 or more points in 24 months",
          "8 or more points in 18 months",
          "4 points in 12 months",
          "6 or more points in 12 months",
        ],
        correctIndex: 0,
        explanation:
          "Revocation for one year follows 12 or more points in 12 months, 18 or more in 24 months, or 24 or more in 36 months.",
        context:
          "Four points in 12 months brings only an advisory letter, and eight or more in 18 months brings a suspension of 30, 60 or 90 days depending on how many you have had. When the privilege is reinstated the Department reduces the total to four, and thereafter a clean year cuts the remainder by a third, two years by a half, and three years to zero.",
        trap:
          "The three revocation thresholds are different totals over different windows, and reading only the first of them makes 18-in-24 look safe.",
        excerptKey: "points-revocation",
        sourceLabel: "Missouri Driver Guide - Chapter 11: Racking Up Points",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_27",
        topic: "safety",
        question:
          "How far back from the steering wheel does the Guide say a driver should sit?",
        choices: [
          "Close enough that the wrists rest on the rim",
          "At least ten inches between the breastbone and the centre of the wheel",
          "At least six inches from the wheel",
          "Far enough that the arms are fully extended",
        ],
        correctIndex: 1,
        explanation:
          "Missouri passes on the National Highway Traffic Safety Administration's recommendation of at least ten inches between the centre of the driver's breastbone and the centre of the steering wheel.",
        context:
          "The reason is the airbag: an unrestrained or badly restrained occupant can be seriously injured or killed by one deploying. Belts still matter with airbags fitted, because a bag does nothing for a side or rear impact or a rollover. A rear-facing infant restraint must never go in a front seat with a passenger airbag.",
        trap:
          "Sitting close for a better view of the bonnet puts your chest inside the airbag's deployment zone, which is the specific hazard the ten inches exists to avoid.",
        excerptKey: "airbag-ten-inches",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Use Seat Belts and Child Restraints",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_28",
        topic: "impairment",
        question:
          "You are convicted of driving without the ignition interlock the law requires. What happens to your driving privilege?",
        choices: [
          "A 30-day suspension",
          "It is revoked for one year",
          "A fine only, with no licensing action",
          "It is revoked for five years on a first offence",
        ],
        correctIndex: 1,
        explanation:
          "A conviction for failing to have a required interlock installed revokes the driving privilege for one year. A second offence takes it for five.",
        context:
          "The device itself must be maintained at least six months from the reinstatement date, with no violations in the final three, and the driver pays for installation and monthly servicing. Failing to maintain it re-suspends the privilege, and getting back from that means reinstalling, sending proof to the Driver License Bureau and paying a $20 fee.",
        trap:
          "Five years is the second-offence figure, not the first. The first conviction is a one-year revocation and it runs on top of whatever the original order was.",
        excerptKey: "iid-revocation",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Ignition Interlock",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_29",
        topic: "parking",
        question:
          "A car parks across the diagonal white stripes beside a reserved disabled bay, leaving the bay itself free. Is that lawful in Missouri?",
        choices: [
          "Yes, since the reserved space is unoccupied",
          "Yes, if the driver stays with the vehicle",
          "No; it is illegal to park in handicapped parking access aisles",
          "Yes, for up to fifteen minutes",
        ],
        correctIndex: 2,
        explanation:
          "The striped area is an access aisle and parking in it is expressly illegal. It is the room a wheelchair or a lift needs to deploy, so blocking it defeats the bay just as completely as parking in it.",
        context:
          "The other prohibition in the same section is using a disabled person's placard or plates to park in a reserved space when that person is not being transported at the time. A reserved space may only be used when the vehicle shows the placard or plates and the person is in the vehicle or is being dropped off or picked up. Conviction carries a fine of $50 to $300.",
        trap:
          "Staying with the car does not help. The aisle has to stay clear so that a door or a lift can open into it.",
        excerptKey: "handicap-access-aisle",
        sourceLabel: "Missouri Driver Guide - Chapter 5: International Symbol of Access",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_30",
        topic: "signals",
        question:
          "A sign or signal requires you to stop, and there is both a stop line and a crosswalk ahead of you. Where do you stop?",
        choices: [
          "Level with the crosswalk",
          "Level with the signal head",
          "Halfway between the two",
          "Before your vehicle reaches the stop line",
        ],
        correctIndex: 3,
        explanation:
          "Missouri's rule is that you stop before your vehicle reaches the stop line, or before the crosswalk if there is no stop line. The line comes first when both exist.",
        context:
          "At a stop sign the Guide adds a wrinkle: you must stop at the stop line if one is present even where it has been placed past the sign itself. Where there is neither line nor crosswalk, you pull up and stop near the edge of the intersection, look both ways, and proceed when it is safe.",
        trap:
          "A stop line set well back from the corner usually marks the swept path of turning trucks or a rail crossing, so creeping past it defeats the reason it is there.",
        excerptKey: "stop-before-stop-line",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Crosswalks and Stop Lines",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_31",
        topic: "rules",
        question:
          "The car ahead of you has stopped in the lane and is signalling a left turn. What does Missouri allow?",
        choices: [
          "Nothing; you must wait until it completes the turn",
          "You may sound your horn to move it along",
          "You may overtake and pass it on the right, staying on the paved roadway",
          "You may cross the centre line to pass on the left",
        ],
        correctIndex: 2,
        explanation:
          "Passing on the right is permitted when the vehicle you are overtaking is making or about to make a left turn. The movement has to stay on the paved or main travelled portion of the roadway.",
        context:
          "The other three cases are a city street with unobstructed pavement wide enough for two or more lines of vehicles in each direction, a one-way street, and a highway outside a city with pavement clearly marked for four or more lanes. The shoulder is excluded from all of them, and the Guide adds that on a highway you may use the right lane to pass a vehicle making a left turn.",
        trap:
          "Dropping a wheel onto the shoulder to squeeze past turns a lawful pass into an unlawful one, whatever the reason for it.",
        excerptKey: "passing-right-left-turn",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Passing on the Right",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_32",
        topic: "signs",
        question:
          "You reach a flagging operation on a two-lane road. Where will the flaggers be?",
        choices: [
          "Only at the point where work is being done",
          "Only at the end of the work zone",
          "At the beginning and end points of the work zone",
          "Following the work vehicles as they move",
        ],
        correctIndex: 2,
        explanation:
          "A flagging operation puts flaggers at both the beginning and the end points of the zone, because one lane is closed and the two directions have to take turns.",
        context:
          "Missouri distinguishes several work zone types: shoulder work beyond the travelled way, lane closures where you merge into a lane that is not being worked on, flagging operations on a two-lane two-way road with one lane closed, and mobile work zones where a protective vehicle carries a flashing arrow panel. Be prepared to stop as you approach a flagging operation, and follow the flagger's instructions.",
        trap:
          "The flagger at your end is holding you for traffic you cannot see coming from the other end. Setting off on the assumption the road is empty is how head-on collisions happen inside work zones.",
        excerptKey: "flagging-operation",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Types of Work Zones",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_33",
        topic: "licensing",
        question:
          "You miss a court date for a traffic ticket. How long do you have to pay before your licence is affected?",
        choices: [
          "10 days from the missed hearing",
          "30 days, after which the court notifies the Driver License Bureau",
          "60 days from the date of the ticket",
          "There is no grace period; the suspension is immediate",
        ],
        correctIndex: 1,
        explanation:
          "The court gives you 30 days to pay the fines before it notifies the Driver License Bureau. Once it does, the driving privilege is suspended immediately.",
        context:
          "Getting it back means proof that the ticket has been paid plus a $20 reinstatement fee, sent or taken to the Driver License Bureau. Failing to appear in court or to pay tickets, in Missouri or in another state, is on the Guide's list of ways to lose a licence, alongside failing to pay child support and failing to keep insurance.",
        trap:
          "The suspension is not for the original offence. It is for the failure to appear, and paying the fine late still leaves the $20 to clear.",
        excerptKey: "fact-30-days",
        sourceLabel: "Missouri Driver Guide - Chapter 11: Failure to Appear in Court (FACT)",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_34",
        topic: "safety",
        question: "When may studded snow tyres be used in Missouri?",
        choices: [
          "Whenever snow or ice is forecast",
          "Only from November 1 to April 1",
          "Only from December 1 to March 1",
          "At any time of year",
        ],
        correctIndex: 1,
        explanation:
          "Missouri allows studded snow tyres only from November 1 to April 1. Outside that window they are not permitted whatever the weather is doing.",
        context:
          "It sits in the same equipment chapter as several other date and distance rules: a white light on the rear plate visible from 50 feet, tail lights and reflectors visible from 500 feet, a towline keeping vehicles within 15 feet of each other, and a red flag at least 16 inches square on any load overhanging the rear by more than five feet.",
        trap:
          "A late spring snowfall does not extend the season. The dates are fixed and the studs come off on April 1 regardless.",
        commonlyMissed: true,
        excerptKey: "studded-tires",
        sourceLabel: "Missouri Driver Guide - Chapter 14: Other Equipment Required by Law",
        sourceUrl: HB,
      },
      {
        id: "mo_s5_35",
        topic: "impairment",
        question:
          "You are arrested with a BAC of 0.09% and the officer takes your licence. When does the suspension start?",
        choices: [
          "Immediately at the roadside",
          "Only after a court hearing",
          "Thirty days after the arrest",
          "After 15 days, unless you request a hearing",
        ],
        correctIndex: 3,
        explanation:
          "The notice the officer gives you says the licence will be suspended or revoked after 15 days. It may include a 15-day driving permit, and it allows you to request a hearing or, if eligible, an immediate 90-day Restricted Driving Privilege.",
        context:
          "This is the administrative track, separate from anything a court does later. If you are granted a hearing you may keep driving until 15 days after the decision is mailed to you. A first administrative action brings a 90-day suspension, with a second offence a one-year revocation and a second within five years a five-year denial.",
        trap:
          "The administrative suspension does not wait for the criminal case. Being found not guilty in court later does not undo it automatically.",
        excerptKey: "admin-action-15-days",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Administrative Actions",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions across every chapter the Class F written test draws on. Missouri's real test is 25 questions with 20 correct to pass - clear 24 of these and you are comfortably ahead of it.",
    questions: [
      {
        id: "mo_s6_01",
        topic: "signs",
        question:
          "At a stop sign the painted stop line sits several feet beyond the sign itself. Where do you stop?",
        choices: [
          "Level with the sign",
          "At the stop line, even though it is past the sign",
          "Wherever you can see the cross traffic",
          "Level with the near kerb of the cross street",
        ],
        correctIndex: 1,
        explanation:
          "Missouri says you must stop at the stop line if one is present even where it is located past the stop sign. The line, not the sign, marks the stopping point.",
        context:
          "The order of preference is stop line, then crosswalk, then the edge of the intersection if there is neither. A stop line set unusually far forward or back is normally placed for sight lines or for the swept path of turning trucks, so it is doing a job the sign's position does not.",
        trap:
          "Stopping at the sign and creeping to the line is two stops, and the one that counts to an examiner is the first one - in the wrong place.",
        commonlyMissed: true,
        excerptKey: "stop-line-past-sign",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_02",
        topic: "signals",
        question:
          "Which pair of conditions must both be met before you may turn right on a red light in Missouri?",
        choices: [
          "A complete stop first, and a way clear of pedestrians and traffic",
          "A green arrow, and no oncoming traffic",
          "A posted sign allowing it, and a complete stop",
          "A gap of at least ten seconds, and headlights on",
        ],
        correctIndex: 0,
        explanation:
          "Missouri permits the turn after a complete stop when the way is clear of pedestrians and traffic. It is a default permission that a No Right Turn On Red sign can remove.",
        context:
          "The permission attaches to a steady circular red. A red arrow governing that movement removes it, and you wait for a green or a flashing yellow arrow instead. The Guide also warns drivers turning right on red to watch for pedestrians and cyclists coming up on their right.",
        trap:
          "Needing a sign to allow it is the wrong way round. In Missouri the sign is what takes the permission away.",
        excerptKey: "right-on-red",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_03",
        topic: "rules",
        question: "How early does the Missouri Driver Guide want your signal on before a lane change?",
        choices: [
          "As you begin to move across",
          "Two seconds before",
          "At least 100 feet before you make your move",
          "At least 300 feet before you make your move",
        ],
        correctIndex: 2,
        explanation:
          "The Guide asks you to signal as early as you can and at least 100 feet before the move, the same figure it gives for turns.",
        context:
          "There are two refinements. If a street, driveway or entrance sits between you and where you plan to turn, wait until you have passed it before signalling, so nobody pulls out expecting you to turn in there. And check the signal has cancelled afterwards, because a self-cancelling indicator often fails to reset after a small turn.",
        trap:
          "Signalling every time even when the road looks empty is the habit the Guide asks for, because it is easy to miss someone who needs to know.",
        excerptKey: "signal-early-100-feet",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Signal When You Change Direction",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_04",
        topic: "rightOfWay",
        question:
          "You reach a four-way stop just after another car. Both of you have stopped. Who goes first?",
        choices: [
          "You, if you are going straight and they are turning",
          "Whichever driver is on the other's right",
          "The car that arrived first",
          "Whoever moves off first",
        ],
        correctIndex: 2,
        explanation:
          "Missouri's four-way stop rule is order of arrival: the driver who reached the intersection first may proceed before the others, after coming to a complete stop.",
        context:
          "The yield-to-the-right rule belongs to intersections with no stop sign or signal at all, and it expressly excludes roundabouts. At a roundabout you yield to traffic already in the circle, which will usually be on your left. Keeping the three rules apart is most of the intersection chapter.",
        trap:
          "Importing the right-hand rule into a four-way stop produces two drivers who both think the other one should go.",
        excerptKey: "four-way-stop-first",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Intersections",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_05",
        topic: "speed",
        question:
          "What speed limit applies by default on streets inside a Missouri city, town or village?",
        choices: ["20 mph", "30 mph", "35 mph", "25 mph"],
        correctIndex: 3,
        explanation:
          "The default inside any city, town or village is 25 mph unless a sign says otherwise.",
        context:
          "Local governments may set their own limits by ordinance with the Highways and Transportation Commission's approval, so a posted sign always governs. The Commission may also raise or lower the uniform maximums on state roads for safety reasons or to expedite traffic flow.",
        trap:
          "An unposted residential street is not an invitation to use the limit from the road you turned off. The town default takes over at the boundary.",
        excerptKey: "city-speed-25",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Speed Limit",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_06",
        topic: "safety",
        question:
          "A 16-year-old with a Missouri intermediate licence is driving three friends. Who must be belted?",
        choices: [
          "All of them, driver and every passenger",
          "The driver and the front seat passenger only",
          "The driver only",
          "Any passenger under 16",
        ],
        correctIndex: 0,
        explanation:
          "The general Missouri rule covers the operator and front seat occupants, but it tightens for young drivers: all passengers accompanying an intermediate licence holder must be properly restrained.",
        context:
          "Two other intermediate restrictions run alongside it. During the first six months, no more than one passenger under 19 who is not immediate family; after six months, no more than three. And no driving alone between 1:00 a.m. and 5:00 a.m. except to and from a school activity, a job or an emergency.",
        trap:
          "The same three passengers in the same back seat would be legal with an adult at the wheel and are not legal here.",
        commonlyMissed: true,
        excerptKey: "seat-belt-law",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Seat Belts - It's The Law",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_07",
        topic: "licensing",
        question:
          "How many questions may you miss on the Missouri Class F written test and still pass?",
        choices: ["Five", "Three", "Eight", "Ten"],
        correctIndex: 0,
        explanation:
          "The test is 25 questions and the pass mark is 80%, so you can miss up to five and still pass. Twenty correct answers is the threshold.",
        context:
          "The Highway Patrol administers the test and lets you sit any written test up to twice in one day until you pass. There is no fee for non-commercial written or skills testing. The test may be taken on a touch screen, on paper, or read to you, and every question comes from the Driver Guide.",
        trap:
          "Five misses sounds generous until you remember the Guide's own figure that almost half of all candidates fail on their first attempt.",
        excerptKey: "faq-written-80",
        sourceLabel: "Missouri State Highway Patrol - Driver Examination FAQs",
        sourceUrl: FAQ,
      },
      {
        id: "mo_s6_08",
        topic: "impairment",
        question:
          "Which set of Missouri blood alcohol limits is correct?",
        choices: [
          "0.10% adult, 0.08% commercial, 0.04% under 21",
          "0.08% adult, 0.04% commercial, 0.02% under 21",
          "0.08% adult, 0.02% commercial, 0.00% under 21",
          "0.05% adult, 0.04% commercial, 0.02% under 21",
        ],
        correctIndex: 1,
        explanation:
          "0.08% for an adult driver, 0.04% for a commercial vehicle driver and 0.02% for anyone under 21.",
        context:
          "The numbers are ceilings on one route to a charge, not a description of when alcohol starts to matter. The Guide notes that even one drink is likely to affect your driving and that two could put you over the adult limit, and a DWI can be based on drugs, prescription medicine or over-the-counter medicine just as easily as alcohol.",
        trap:
          "The commercial figure is half the adult one and the under-21 figure is a quarter of it. Mixing up which is which is the usual error.",
        excerptKey: "bac-limits",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Alcohol",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_09",
        topic: "parking",
        question:
          "You are parking facing downhill beside a kerb on a two-way street. Which way do the front wheels go?",
        choices: [
          "Straight ahead",
          "Left, away from the kerb",
          "It makes no difference with the parking brake set",
          "Right, towards the kerb",
        ],
        correctIndex: 3,
        explanation:
          "Turn the wheels sharply towards the side of the road. Facing downhill on the right-hand kerb, that means turning them to the right, so a car that gets loose rolls into the kerb rather than into the lane.",
        context:
          "The principle the Guide gives is the one to memorise rather than the individual case: wheels sharply towards the side of the road so the vehicle rolls away from traffic. Around it sit the rest of the checklist - engine off in the proper gear, parking brake set, keys removed, mirror checked for traffic, doors locked.",
        trap:
          "The parking brake is not a substitute. The turned wheels are the backup for the day the brake cable is the thing that fails.",
        excerptKey: "park-hill-wheels",
        sourceLabel: "Missouri Driver Guide - Chapter 5: Parking",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_10",
        topic: "sharing",
        question:
          "A motorcycle is riding on the left-hand side of a wide lane. May you move up alongside it in the same lane?",
        choices: [
          "Yes, if you leave three feet of clearance",
          "Yes, if the lane is wide enough for both",
          "No; give a motorcycle a full lane width and do not squeeze past",
          "Yes, provided you are overtaking rather than travelling alongside",
        ],
        correctIndex: 2,
        explanation:
          "Missouri asks you to give motorcycles a full lane width when passing and not to squeeze past. The rider needs the entire lane.",
        context:
          "The reason is that riders move around within their lane to deal with manhole covers, diagonal railroad tracks, debris and crosswinds, so the space beside them is space they may need without warning. The Guide gives cyclists and mopeds the same protection and asks you to wait for a clear stretch of road rather than pass in a lane too narrow to share.",
        trap:
          "A wide lane looks like an invitation. The Guide's rule is about the space the rider needs, not the space the paint allows.",
        excerptKey: "motorcycle-passing-width",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Sharing The Road With Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_11",
        topic: "emergencies",
        question:
          "What number does Missouri publish for reporting an emergency or a dangerous driver from a mobile phone?",
        choices: ["*22", "*55", "*77", "*11"],
        correctIndex: 1,
        explanation:
          "*55 is the cellular number for emergency assistance in Missouri, alongside a statewide toll-free Highway Patrol line. In a metropolitan area, 911 works too.",
        context:
          "The Guide gives *55 in two places: for a breakdown, once you have got the vehicle off the road, and for reporting road rage, where it asks you to exit the roadway to a safe area first. When you report an aggressive or drunk driver, useful details are the location, the direction of travel, a description of the driver and the vehicle's plate number.",
        trap:
          "Making the call while still driving is exactly what Missouri's hands-free law prohibits. Get off the road first.",
        excerptKey: "emergency-star-55",
        sourceLabel: "Missouri Driver Guide - Chapter 6: Emergencies",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_12",
        topic: "signs",
        question: "Which colour does Missouri use for signs giving direction and distance?",
        choices: ["Blue", "Green", "Brown", "White"],
        correctIndex: 1,
        explanation:
          "Green is the direction and distance colour. Blue marks motorist services, brown marks public recreation and cultural interests, and white is the regulatory colour.",
        context:
          "The full code is worth learning as a block: white regulatory, red for stop, yield or prohibited, black regulatory, yellow warning, yellow-green school, orange construction, green direction and distance, blue motorist services, brown public recreation. Missouri's road sign test is a separate part of the exam, so this is not incidental knowledge.",
        trap:
          "Brown and green both appear on large rectangular guide signs. Brown means a park or a historic site rather than a town.",
        excerptKey: "sign-colors",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_13",
        topic: "signals",
        question:
          "You are approaching a signal at 40 mph when it turns steady yellow and you are close to the line. What does Missouri expect?",
        choices: [
          "Accelerate through before it turns red",
          "Stop, in every case",
          "Continue if you are too close to stop safely, otherwise stop",
          "Slow to walking pace and continue",
        ],
        correctIndex: 2,
        explanation:
          "The instruction is to stop for a steady yellow unless you are already within the intersection or so close that you cannot safely stop before entering it.",
        context:
          "The exception protects the driver who is already committed. Any decision made after the light changes is not that. A steady yellow arrow works the same way for a turn, warning that the green arrow is finishing and that you must be ready to yield to oncoming traffic or to stop.",
        trap:
          "Deciding on yellow that you are too close is not the same as actually being too close, and it is the reasoning behind most red-light entries.",
        excerptKey: "steady-yellow",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_14",
        topic: "rules",
        question:
          "There is a solid yellow line on your side of the centre line and a broken one on the other. What does that mean for you?",
        choices: [
          "You may pass when nothing is coming",
          "You may pass only if the vehicle ahead is turning left",
          "Both directions may pass",
          "Do not pass",
        ],
        correctIndex: 3,
        explanation:
          "A solid yellow line on your side means do not try to pass. The broken line on the other side means oncoming traffic may pass, which is exactly why your side has to stay put.",
        context:
          "Broken lines may be crossed in a passing manoeuvre, solid lines should not be. No passing zones sit on hills and curves where you cannot see far enough ahead, and you must complete a pass before you enter one. On a two-lane road, the Guide adds, never pass if you cannot see the road is clear for the distance you need, even where there is no marking at all.",
        trap:
          "The broken line opposite is not permission for you. It is what makes your solid line urgent, because someone may be coming into your lane.",
        excerptKey: "solid-yellow-your-side",
        sourceLabel: "Missouri Driver Guide - Chapter 7: No Passing Zones",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_15",
        topic: "rightOfWay",
        question:
          "A fire engine has just passed you and traffic is moving again. What does the Guide say?",
        choices: [
          "You may pull out as soon as it has cleared your position",
          "Proceed only when the way is clear, because emergency vehicles may follow each other",
          "Follow it closely to use the gap it has made",
          "Wait for a police officer to release the traffic",
        ],
        correctIndex: 1,
        explanation:
          "Emergency vehicles may follow each other, so the Guide's instruction is to proceed only when the way is clear rather than the moment the first one passes.",
        context:
          "The rest of the rule: pull to the right edge of the road and stop when you see or hear an emergency vehicle from any direction; if you are in an intersection, drive through it first and pull over on the far side; and follow any instructions given over the loudspeaker. A stationary emergency vehicle triggers the separate Move Over duty.",
        trap:
          "The second and third vehicles in a response are the ones that hit drivers who assumed the road was theirs again.",
        commonlyMissed: true,
        excerptKey: "emergency-convoy",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_16",
        topic: "speed",
        question: "What are the minimum and maximum speeds on a Missouri interstate highway?",
        choices: ["30 and 70", "40 and 65", "55 and 75", "40 and 70"],
        correctIndex: 3,
        explanation:
          "40 mph is the minimum under normal roadway conditions and 70 mph is the maximum. Lower maximums are posted through urban areas.",
        context:
          "The minimum exists because a slow vehicle in a fast stream forces overtaking, and overtaking is where the collisions happen. If 40 mph is too fast for you or your vehicle, the Guide says to use another route. Mopeds are barred from the interstate system altogether.",
        trap:
          "The statute allows the Commission to post up to 75 on rural interstates. It has not done so, and the Guide the test is written from gives 70.",
        commonlyMissed: true,
        excerptKey: "interstate-minimum-40",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Speed Limit",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_17",
        topic: "safety",
        question:
          "Which object should you pick when you use the three second rule?",
        choices: [
          "The vehicle two ahead of you",
          "A point on your own bonnet",
          "A fixed object beside the road, such as a sign or a pole",
          "The next set of lane markings",
        ],
        correctIndex: 2,
        explanation:
          "Choose a fixed object near the road ahead, like a sign or a telephone pole, and start counting when the vehicle in front passes it.",
        context:
          "It has to be a fixed object because the rule measures time, not distance. Anything that is itself moving gives you a number that means nothing. Three seconds is the fair-weather figure; snow and ice raise it to about eight to ten, and fatigue or poor brakes lengthen it further.",
        trap:
          "Using the car in front as the marker measures nothing at all, since it is travelling at roughly your own speed.",
        excerptKey: "three-second-rule",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Three Second Rule",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_18",
        topic: "licensing",
        question:
          "Your Missouri licence expired eight months ago. What must you do to get licensed again?",
        choices: [
          "Take the written and driving tests as well as the vision and road sign tests",
          "Take only the vision and road sign tests",
          "Pay a late fee and renew as normal",
          "Take the written test only",
        ],
        correctIndex: 0,
        explanation:
          "Once a licence has been expired more than six months, stated as 184 days, the written and driving tests come back on top of the vision and road sign tests.",
        context:
          "Below that threshold a renewal needs only the vision and road sign tests, and you may renew up to six months before expiry. An expired licence is not valid for driving in the meantime, and the Guide notes that it is your responsibility to renew even if the reminder never arrives.",
        trap:
          "184 days is the number to watch, not a loose six months. Missing it turns a counter transaction into the full four-part examination.",
        commonlyMissed: true,
        excerptKey: "expired-184-days",
        sourceLabel: "Missouri Driver Guide - Chapter 1: Renewing a License or Permit",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_19",
        topic: "impairment",
        question:
          "What does the Missouri Driver Guide say about the effect of two drinks on an average person?",
        choices: [
          "They have no measurable effect on driving",
          "Two drinks could place you over the legal blood alcohol limit",
          "Two drinks are safe if spread over an hour",
          "Two drinks affect only night vision",
        ],
        correctIndex: 1,
        explanation:
          "The Guide states that even one drink is likely to affect your ability to drive safely, and that in many cases two could put you over the legal limit.",
        context:
          "The effects it lists are slower reflexes and reaction time, impaired vision including night vision, drowsiness, reduced concentration and attention, poorer coordination and worse judgment. Missouri also charges DWI on impairment from drugs, prescription medicine or over-the-counter medicine, with penalties identical to the alcohol version.",
        trap:
          "Feeling fine is not evidence of being under the limit, because the first thing alcohol impairs is the judgment doing the assessing.",
        excerptKey: "two-drinks",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Alcohol",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_20",
        topic: "parking",
        question: "Which of these places does Missouri forbid you to park?",
        choices: [
          "Across a driveway entrance",
          "Twenty feet from a bus shelter",
          "On a residential street after 10 p.m.",
          "Within 100 feet of a school",
        ],
        correctIndex: 0,
        explanation:
          "Driveway entrances are on the no-parking list, along with intersections, crosswalks and sidewalks, the left side of a two-way street, yellow kerbs and bridges.",
        context:
          "The list closes with a general test: do not block the normal flow of traffic or create a hazard for other drivers, and do not park facing against traffic. Fire hydrants are separately named. On a one-way street you may normally park on either side.",
        trap:
          "Blocking a driveway for a couple of minutes is the version people justify, and it is the one that traps a resident behind their own gate.",
        excerptKey: "no-parking-zones",
        sourceLabel: "Missouri Driver Guide - Chapter 5: No-Parking Zones",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_21",
        topic: "sharing",
        question: "Does Missouri law require a bicycle rider to wear a helmet?",
        choices: [
          "Yes, for all riders",
          "Yes, for riders under 18",
          "Yes, on state highways only",
          "No; state law does not require it, though the Guide recommends one",
        ],
        correctIndex: 3,
        explanation:
          "State law does not require a bicycle helmet. The Guide still recommends a safety-certified one, on the ground that it can prevent serious head injury or death.",
        context:
          "Equipment that Missouri law does require on a bicycle is specific: brakes that stop you within 25 feet from ten mph, a white front light visible at 500 feet, a rear red reflector of at least two square inches or a rear red light visible at 600 feet, pedal reflectors visible at 200 feet and side reflectors at 300 feet, from half an hour after sunset until half an hour before sunrise.",
        trap:
          "The Guide's separate statement that the law requires a motorcycle helmet is contradicted by the statute, which since 2020 has required headgear only of riders under 26. Do not carry either rule across to the other vehicle.",
        commonlyMissed: true,
        excerptKey: "bicycle-helmet-not-required",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Safety Tips for Moped and Bicycle Riders",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_22",
        topic: "signs",
        question:
          "Red lights are flashing at a railroad crossing. Within what distance of the tracks must you stop?",
        choices: [
          "Within 10 to 25 feet",
          "Within 15 to 50 feet",
          "Within 25 to 75 feet",
          "Within 50 to 100 feet",
        ],
        correctIndex: 1,
        explanation:
          "Missouri requires the stop within 15 to 50 feet before the railroad tracks whenever the lights are flashing or the gate is down.",
        context:
          "Never go around a lowered gate. The lights may keep flashing after a train has passed, and where there are two or more tracks you must look for a second train before crossing. The crossbuck itself carries the meaning of a yield sign, so even an unsignalled crossing requires you to give way to trains.",
        trap:
          "Stopping much further back to be safe puts you outside the rule and tempts the driver behind you to pull out and around.",
        excerptKey: "railroad-stop-15-50",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Railroad Crossing",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_23",
        topic: "signals",
        question: "How should you treat a signal flashing red on your approach?",
        choices: [
          "Slow down and proceed with caution",
          "Wait at the line until it turns green",
          "Exactly as you would a stop sign",
          "Treat it as a yield",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red means the same thing as a stop sign: stop completely, give way, then go when the way is clear.",
        context:
          "Missouri runs flashing signals overnight, during emergencies, at low-volume periods and for special events. The usual arrangement is flashing red on the side road and flashing yellow on the main one, which means the cross traffic is not stopping. A completely dark signal is different again and works as a four-way stop.",
        trap:
          "Waiting for green at a flashing red leaves you sitting indefinitely, and the driver behind you is not expecting a stationary car.",
        excerptKey: "flashing-red",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_24",
        topic: "rules",
        question:
          "You are on a road with three lanes running your way and no lane control signs. Where should you be?",
        choices: [
          "The left lane, keeping the others free",
          "The right lane, except to pass",
          "The centre lane at all times",
          "Any lane, provided you keep to the limit",
        ],
        correctIndex: 1,
        explanation:
          "On a road with three or more lanes in the same direction, stay in the right lane except to pass. The exception is where a lot of traffic is entering the right lane, in which case use the centre lane.",
        context:
          "It is the same principle as the four-lane rule: keep right unless you are passing slower traffic, letting a driver enter safely, or getting ready for a legal left turn. The left-most lane on a multi-lane road is meant for passing, and the Guide warns that passing on the right leaves you in a place the other driver may not be looking.",
        trap:
          "Holding the left lane at the speed limit still breaks the lane rule, which is about position rather than speed.",
        excerptKey: "three-lanes-stay-right",
        sourceLabel: "Missouri Driver Guide - Chapter 7: No Lane Markings",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_25",
        topic: "rightOfWay",
        question:
          "Traffic in the lane beside you has stopped at an unsignalled crossing. What is the safest and lawful action?",
        choices: [
          "Continue at the same speed, watching the stopped car",
          "Change lanes and continue",
          "Sound your horn and pass slowly",
          "Do not pass; the vehicle may have stopped for a pedestrian",
        ],
        correctIndex: 3,
        explanation:
          "Missouri forbids passing a vehicle that has stopped or slowed down for a pedestrian, because the stopped vehicle is hiding whoever it stopped for.",
        context:
          "The duty runs alongside the general one to yield to pedestrians in marked and unmarked crosswalks on or approaching your side of the road. The Guide also asks you not to block a crosswalk while stopped at a red, and to be careful of pedestrians and cyclists coming up on your right as you prepare a right turn.",
        trap:
          "The lane change is the reflex, and it takes you past the only warning you were going to get.",
        commonlyMissed: true,
        excerptKey: "no-pass-stopped-for-ped",
        sourceLabel: "Missouri Driver Guide - Chapter 4: As a Driver, You Should Know",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_26",
        topic: "speed",
        question: "In what conditions does a posted Missouri speed limit represent a safe speed?",
        choices: [
          "Ideal conditions only",
          "Any conditions, since it is set by law",
          "Daylight and dry weather, but not at night",
          "Any conditions on a divided highway",
        ],
        correctIndex: 0,
        explanation:
          "The posted number is the maximum allowable speed in ideal conditions. The Guide is explicit that it does not mean every part of the road can be driven safely at that speed in all conditions.",
        context:
          "Hills, curves, slippery surfaces, limited sight distance, pedestrians, cyclists and slow-moving vehicles are all listed as conditions that can make a posted limit unsafe, and by law you must slow down when conditions demand it. Advisory speed plates on curves are set for fair weather and should be reduced in rain, snow or ice.",
        trap:
          "The limit is not a target and it is not a defence. Losing control at the posted speed on a wet curve is still an offence.",
        excerptKey: "speed-ideal-conditions",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Speed Limit",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_27",
        topic: "safety",
        question: "When must headlights be switched on at night in Missouri?",
        choices: [
          "From sunset until sunrise",
          "From full dark until first light",
          "From half an hour after sunset until half an hour before sunrise",
          "From half an hour before sunset until half an hour after sunrise",
        ],
        correctIndex: 2,
        explanation:
          "The window runs from half an hour after sunset until half an hour before sunrise. Separately, headlights are required any time conditions call for the windshield wipers.",
        context:
          "The rest of the night-driving list: high beams when there is no oncoming traffic, low beams within 500 feet of an oncoming vehicle and 300 feet when following, clean windows and headlights, and the edgeline as your steering guide. The Guide warns not to overdrive your headlights, which show only about 350 feet.",
        trap:
          "The slow-moving vehicle emblem uses a different window - sunset to half an hour before sunrise - so the two rules do not start at the same moment.",
        excerptKey: "headlights-half-hour",
        sourceLabel: "Missouri Driver Guide - Chapter 9: Night Driving",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_28",
        topic: "licensing",
        question:
          "When may a Missouri intermediate licence holder drive unaccompanied at 2:00 a.m.?",
        choices: [
          "To or from a school activity, a job, or an emergency",
          "Never, under any circumstances",
          "On any night that is not a school night",
          "Provided no passengers are carried",
        ],
        correctIndex: 0,
        explanation:
          "The curfew runs from 1:00 a.m. to 5:00 a.m. and the exceptions are travel to and from a school activity, a job, or an emergency. Otherwise a licensed driver aged 21 or over must be with them.",
        context:
          "The other intermediate restrictions are the passenger limits - one non-family passenger under 19 during the first six months and three thereafter - and the rule that every passenger must be belted. The intermediate licence itself lasts up to two years and is the second of Missouri's three graduated steps.",
        trap:
          "The exceptions are activities, not times. Being on the way home from a friend's house at 2:00 a.m. is not covered by any of them.",
        commonlyMissed: true,
        excerptKey: "intermediate-curfew",
        sourceLabel: "Missouri Driver Guide - Chapter 1: Step Two: Intermediate License",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_29",
        topic: "impairment",
        question:
          "What is the licence consequence of refusing a chemical test in Missouri?",
        choices: [
          "It is taken away for one year",
          "A 90-day suspension",
          "A warning on a first refusal",
          "No consequence until conviction",
        ],
        correctIndex: 0,
        explanation:
          "Refusing to take a chemical test to determine your BAC costs the licence for one year, whatever a court later decides about the underlying charge.",
        context:
          "That is longer than the 90-day suspension a first administrative action for a 0.08% reading brings. Reinstatement means a $45 fee, a completed Substance Awareness Traffic Offender Program, SR-22 proof of insurance for two years, and an interlock for at least six months where the record shows more than one intoxication-related contact.",
        trap:
          "Refusal is not the cautious option. It carries a longer loss than blowing over on a first offence would have done.",
        excerptKey: "refusal-one-year",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Refusal to Submit to a Chemical Test",
        sourceUrl: HB,
      },
      {
        id: "mo_s6_30",
        topic: "emergencies",
        question:
          "You have exchanged details after a collision and the police are still taking statements. When may you leave?",
        choices: [
          "Once you have the other driver's insurance details",
          "Once your own vehicle is driveable",
          "After 30 minutes at the scene",
          "When a law enforcement officer says you may leave",
        ],
        correctIndex: 3,
        explanation:
          "The Guide's instruction is to stay until a law enforcement officer says you may leave the crash scene.",
        context:
          "The sequence before that is stop, move the vehicle off the road if it may cause further crashes, help anyone hurt without moving them, call an ambulance and the police, warn other traffic with flares or lights at night or in bad weather, and exchange names, addresses, licence, VIN and plate numbers and insurance details. Contact your insurer afterwards even if the crash was not your fault.",
        trap:
          "Missouri's Move It law does tell you to clear a minor non-injury crash off the roadway, but moving off the carriageway is not the same as leaving the scene.",
        excerptKey: "crash-stay-until-released",
        sourceLabel: "Missouri Driver Guide - Chapter 13: Traffic Crashes",
        sourceUrl: HB,
      },
    ],
  },
];
