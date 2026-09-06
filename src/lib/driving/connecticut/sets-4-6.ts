import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets-1-3.ts: the Connecticut Driver's Manual
// (Revised March 2023), Connecticut General Statutes Title 14 chapters 246,
// 248 and 249, and the CT DMV's own pages for the test format and the teen
// licensing rules.
//
// Set 5 is built on what learners report. The forum research is written up in
// docs/driving/research/connecticut.md; nothing here is copied from anyone's
// recollection of a real exam item. Where a forum thread contradicted the
// manual or the statute, the official source won and the misconception became
// the trap.
const HB =
  "https://portal.ct.gov/dmv/-/media/dmv/dmv-pdfs/drivers-manual-english.pdf";
/** PDF page anchor. The book's printed page 1 is PDF page 3. */
const hb = (page: number) => `${HB}#page=${page}`;
const stat = (chapter: string, sec: string) =>
  `https://www.cga.ct.gov/current/pub/chap_${chapter}.htm#sec_${sec}`;
const KNOWLEDGE =
  "https://portal.ct.gov/dmv/licenses-permits-ids/take-knowledge-vision-test";

export const connecticutSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions spread across all five chapters, including the parts people skip: the vehicle checks in chapter 2, the work zone and distraction sections, and the back half of the sign chapter.",
    questions: [
      {
        id: "ct_s4_01",
        topic: "safety",
        question:
          "The Connecticut manual describes a penny test. What is it for?",
        choices: [
          "Checking whether your tire tread is still deep enough",
          "Checking tire pressure without a gauge",
          "Checking brake pad thickness",
          "Checking headlight alignment",
        ],
        correctIndex: 0,
        explanation:
          "You put Lincoln's head into the shallowest groove. If any part of his head is covered by the tread, you still have a safe amount; if it is not, your grip in bad conditions is badly reduced.",
        context:
          "The manual wants tires checked once a month and before any long trip. Worn tires lengthen your stopping distance, make turning harder on a wet road, raise the chance of a flat and make hydroplaning worse. Pressure comes from the owner's manual or the driver's door jamb, checked with a gauge.",
        trap: "Tread that looks fine across the middle can be gone at one edge. The manual has you pick the lowest point on the tire, not a representative one.",
        excerptKey: "penny-test",
        sourceLabel: "Connecticut Driver's Manual - Chapter 2, Exterior Equipment",
        sourceUrl: hb(13),
      },
      {
        id: "ct_s4_02",
        topic: "rules",
        question:
          "A work zone sign says the speed limit is reduced, but you cannot find a posted number anywhere. What speed applies?",
        choices: [
          "Half the normal posted limit",
          "25 mph, the standard work zone speed",
          "Whatever the flagger indicates",
          "The normal posted speed limit for that road",
        ],
        correctIndex: 3,
        explanation:
          "Reduced work zone limits are posted. Where no reduced limit sign appears, the manual tells you to obey the normal posted speed limit for the road.",
        context:
          "That does not make a work zone an ordinary stretch of road. Fines inside a signed work zone run up to $1,000, points can be assessed, driver retraining may follow, and distracted driving fines are doubled. Mobile work zones such as line painting and mowing move, so the manual tells you to keep obeying the signs until you see END ROAD WORK.",
        trap: "Guessing at a lower number is not obedience either. The rule is that the posted figure governs, whichever one is posted.",
        excerptKey: "workzone-no-posted-reduction",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Work Zones",
        sourceUrl: hb(17),
      },
      {
        id: "ct_s4_03",
        topic: "signs",
        question:
          "Overhead lane signals on a Connecticut reversible lane show a steady yellow X. What must you do?",
        choices: [
          "Use the lane only for turning",
          "Move out of that lane as soon as it is safe",
          "Stop in the lane and wait",
          "Continue, since only a red X closes a lane",
        ],
        correctIndex: 1,
        explanation:
          "A steady yellow X means the lane is changing direction. You get out of it as soon as it is safe to do so.",
        context:
          "The four signals read as a set: a green arrow means the lane is yours, a red X means it is not, a flashing yellow X means the lane is for turning only, and a steady yellow X means clear it. Reversible lanes are usually marked with double-dashed yellow lines, so check the overhead before you commit.",
        trap: "Yellow reads as caution rather than as an instruction, so drivers sit in the lane waiting to see what happens. That is the one thing the signal is telling you not to do.",
        excerptKey: "reversible-lane-signals",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Reversible Lanes",
        sourceUrl: hb(46),
      },
      {
        id: "ct_s4_04",
        topic: "licensing",
        question:
          "Connecticut suspends the license of a driver under 18 who is convicted of using a cell phone at the wheel. What else does that conviction count as?",
        choices: [
          "A non-moving violation with no further consequence",
          "A civil matter handled entirely by the town",
          "A moving violation, counted toward the operator retraining requirement",
          "A criminal offense requiring a court appearance in every case",
        ],
        correctIndex: 2,
        explanation:
          "It is charged as a moving violation, and moving violations are what trigger the operator retraining program. So the phone conviction both suspends the license and moves you toward mandatory retraining.",
        context:
          "Anyone 24 or younger who collects two or more moving or suspension violations must complete the DMV-certified retraining program. For a driver 25 or over the threshold is three. After you finish it, one more moving violation within three years brings a suspension of at least 30 days.",
        trap: "People treat a phone ticket as a fine you pay and forget. Under 18 it is a suspension and a step toward a mandatory course.",
        excerptKey: "teen-cell-suspension",
        sourceLabel: "Connecticut Driver's Manual - Chapter 2, Connecticut Cell Phone Laws",
        sourceUrl: hb(15),
      },
      {
        id: "ct_s4_05",
        topic: "sharing",
        question:
          "A truck signals right at an intersection and starts to swing left. What is happening?",
        choices: [
          "The driver is making a wide right turn and you must not pass on the right",
          "The driver has signaled by mistake",
          "The driver is inviting you to pass on the right",
          "The trailer has jackknifed",
        ],
        correctIndex: 0,
        explanation:
          "The rear wheels of a long vehicle follow a tighter path than the front ones, so a truck often has to swing left first to keep the trailer off the curb. Slipping up its right side puts you between the truck and the curb.",
        context:
          "The manual calls this off-tracking, and it happens on left turns too, just less dangerously. It comes with the same warning as the No-Zones: if a truck driver slows, stops, signals or changes lanes there is a reason for it, and you hold your position until you are certain passing is safe.",
        trap: "The gap on the right looks like an opening and closes as the trailer comes round. It is one of the most common car-versus-truck crashes.",
        excerptKey: "truck-off-track-right-turn",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Trucks Make Wide Right Turns",
        sourceUrl: hb(22),
      },
      {
        id: "ct_s4_06",
        topic: "safety",
        question:
          "According to the manual, what is the single biggest contributor to crashes?",
        choices: [
          "Excessive speed",
          "Mechanical failure",
          "Alcohol",
          "Failing to see what is happening",
        ],
        correctIndex: 3,
        explanation:
          "The manual names it directly: the single biggest contributor to crashes is failing to see what is happening. Everything in its visibility section follows from that.",
        context:
          "The remedies are all about where you look. Scan well down the road, to the sides and behind. Twelve seconds ahead in normal driving. Do not take your eyes off the road for more than a few seconds, do not read a map while moving, and do not slow down to look at somebody else's crash.",
        trap: "Drivers who looked but did not see are a category the manual names twice, once for motorcycles and once for pedestrians and cyclists.",
        excerptKey: "look-behind",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Visibility",
        sourceUrl: hb(26),
      },
      {
        id: "ct_s4_07",
        topic: "parking",
        question:
          "What is the very first thing the manual tells you to do every time you park?",
        choices: [
          "Lock the doors",
          "Set the parking brake",
          "Fold the mirrors in",
          "Switch off the headlights",
        ],
        correctIndex: 1,
        explanation:
          "Set the parking brake, every time, and leave an automatic in park or a manual in gear. The manual states it as an always.",
        context:
          "The rest of the routine: park in a designated area where you can, check traffic before you open the door and get out on the curb side if possible, shut the door promptly, never leave the keys in the car, and lock it. On a hill the wheels turn sharply toward the curb.",
        trap: "In an automatic the park pawl feels like enough. It is a small piece of metal, and the manual asks for the brake as well.",
        excerptKey: "parking-brake-always",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Parking",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s4_08",
        topic: "signals",
        question:
          "What does a white diamond painted on the road surface or posted beside a lane mean in Connecticut?",
        choices: [
          "The lane is closed ahead",
          "The lane is for left turns only",
          "The lane is reserved for a special use, such as high-occupancy vehicles, buses or bicycles",
          "The lane surface has changed",
        ],
        correctIndex: 2,
        explanation:
          "The diamond marks a reserved lane. Signs beside it say which use - transit or bus, bicycle, or HOV with the number of occupants required.",
        context:
          "HOV stands for high occupancy vehicles, and the posted sign tells you how many people must be in the car. Reserved lanes are enforced, so drifting into one because it is empty is the mistake it is designed to catch.",
        trap: "An empty HOV lane in a jam is the most tempting piece of road in Connecticut and the easiest ticket to collect.",
        excerptKey: "hov-lane",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Reserved Lanes",
        sourceUrl: hb(46),
      },
      {
        id: "ct_s4_09",
        topic: "impairment",
        question:
          "You are taking an over-the-counter allergy medicine. What does the manual tell you to do before driving?",
        choices: [
          "Check the label for warnings about its effects, and ask a doctor or pharmacist if you are unsure",
          "Nothing, since over-the-counter drugs are not covered",
          "Take a smaller dose than the label recommends",
          "Wait one hour after taking it",
        ],
        correctIndex: 0,
        explanation:
          "Read the label and ask a doctor or pharmacist if you are not sure. The manual is clear that many over-the-counter drugs, not just prescription ones, affect reflexes, judgment, vision and alertness the way alcohol does.",
        context:
          "Drugs for headaches, colds, hay fever, allergies or nerves can all make you drowsy. Mixing any of them with alcohol is specifically warned against, because the combination can multiply the effects or add new ones of its own. Connecticut's impaired driving offense covers drugs as squarely as it covers liquor.",
        trap: "\"It was only cold medicine\" is not a defense. Section 14-227a says under the influence of intoxicating liquor or any drug or both.",
        excerptKey: "drugs-prescription-otc",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Drugs and Driving",
        sourceUrl: hb(35),
      },
      {
        id: "ct_s4_10",
        topic: "rightOfWay",
        question:
          "You are overtaking a car that begins to slow and pull toward the curb. Who has the right of way?",
        choices: [
          "You do, because you are already alongside",
          "Neither - the rule only covers intersections",
          "Whichever driver signals first",
          "The vehicle being overtaken, even though it is slowing or stopping",
        ],
        correctIndex: 3,
        explanation:
          "The overtaking driver yields. Connecticut's right-of-way list says so explicitly, and it says the duty holds even when the vehicle ahead is slowing or coming to a stop.",
        context:
          "Section 14-232 fills in the mechanics: you pass on the left at a safe distance and do not pull back in until you are safely clear, and the driver being overtaken must give way to the right and must not speed up while you are alongside. The manual's own test for being clear is seeing both of the other car's headlights in your mirror.",
        trap: "It is easy to feel that a car braking in front of you has forfeited its claim. The rule says the opposite.",
        excerptKey: "overtaking-driver-yields",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Right-of-Way",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s4_11",
        topic: "signs",
        question:
          "You are stopped by a flagger holding a STOP paddle in a Connecticut work zone, but the light ahead is green. What do you do?",
        choices: [
          "Follow the traffic signal, which outranks a person",
          "Obey the flagger",
          "Proceed slowly past the flagger",
          "Wait for a police officer to arrive",
        ],
        correctIndex: 1,
        explanation:
          "You obey the flagger. Connecticut says plainly that where a person with a sign or flag is controlling traffic in a work area, you must obey them.",
        context:
          "The same principle runs through the manual's right-of-way list, where a law enforcement officer's signals override the traffic signal even when they contradict it. Flaggers wear orange or yellow vests or yellow-green shirts and use STOP and SLOW paddles and red flags.",
        trap: "A green light feels like authority. In a work zone it is the person in the vest who has it.",
        excerptKey: "flag-person-sign",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Work Area Signs",
        sourceUrl: hb(53),
      },
      {
        id: "ct_s4_12",
        topic: "emergencies",
        question:
          "You are about to be hit from behind. What does the manual tell you to do with your body?",
        choices: [
          "Lean forward over the wheel",
          "Turn to face the impact",
          "Press back against the seat with your head on the head restraint",
          "Brace your arms against the dashboard",
        ],
        correctIndex: 2,
        explanation:
          "Press yourself back into the seat and get your head against the restraint, because a rear impact throws your body backwards. Then be ready to brake so you are not pushed into whatever is in front of you.",
        context:
          "The manual gives one instruction for each direction. Hit from the side, your body goes toward the impact and front airbags do nothing, so the belts are what keep you behind the wheel. Hit from the front, you try to turn the car so it becomes a glancing blow rather than a head-on, and you get ready for a second impact once the airbag deflates.",
        trap: "Bracing against the dashboard is the movie version and a good way to break your arms.",
        excerptKey: "hit-from-rear",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Traffic Crashes",
        sourceUrl: hb(43),
      },
      {
        id: "ct_s4_13",
        topic: "rules",
        question:
          "You are on a three-lane Connecticut highway with heavy traffic entering and leaving. Which lane does the manual suggest?",
        choices: [
          "The center lane",
          "The right lane, always",
          "The left lane, always",
          "Whichever lane is moving fastest",
        ],
        correctIndex: 0,
        explanation:
          "With three or more lanes in your direction and a lot of merging traffic, the manual points you to the center lane. On a two-lane road the rule is different - you stay right except to pass.",
        context:
          "The lane rules stack. Section 14-230 keeps slower traffic right, section 14-236 keeps you within a single lane until you have checked the move is safe, and the manual adds the etiquette: never drive on the shoulder unless officials tell you to, and move out of the right-hand lane when you can to let people on from the ramps.",
        trap: "The right lane is the default answer, and on a three-lane road with busy ramps it is the one that keeps putting you into merging traffic.",
        excerptKey: "stay-in-right-lane-except-to-pass",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Sharing the Road with Trucks",
        sourceUrl: hb(22),
      },
      {
        id: "ct_s4_14",
        topic: "safety",
        question:
          "Which of these does the Connecticut manual list as a distraction inside the vehicle?",
        choices: [
          "A police officer pulling somebody over",
          "A construction zone alongside the road",
          "Roadside billboards",
          "Attending to children or pets",
        ],
        correctIndex: 3,
        explanation:
          "Children and pets are on the inside list, along with phones, radio and climate controls, GPS, grooming, eating, smoking, reading and picking up something that fell.",
        context:
          "The manual splits distractions into inside and outside. Outside ones are the traffic, a police stop, sunlight, people in the road, a crash scene, road construction and billboards. It also asks you to recognize distracted drivers around you - the ones drifting, holding an inconsistent speed, or busy with objects - and to give them three to four seconds of space.",
        trap: "Mental distraction counts as much as taking your hands off the wheel. The manual's phrase is that your eyes can gaze at an object and fail to see it.",
        excerptKey: "distraction-definition",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Driver Distractions",
        sourceUrl: hb(29),
      },
      {
        id: "ct_s4_15",
        topic: "licensing",
        question:
          "What is the minimum vision standard for a Connecticut Class D license?",
        choices: [
          "20/20 with or without correction",
          "20/40 with or without glasses or contact lenses",
          "20/60 with correction",
          "There is no acuity standard, only a peripheral one",
        ],
        correctIndex: 1,
        explanation:
          "Twenty forty, corrected or uncorrected. If you are blind in one eye the other must reach 20/40 with a visual field of at least 100 degrees.",
        context:
          "The screening tests acuity and peripheral vision, and you take it at the same appointment as the knowledge test. If your license says you must wear corrective lenses and you are stopped without them, you can be cited. The DMV's current page adds a binocular peripheral standard of 140 degrees.",
        trap: "\"With or without\" is the operative phrase. Needing glasses is not a bar; driving without them once the restriction is on your license is.",
        excerptKey: "vision-20-40",
        sourceLabel: "Connecticut Driver's Manual - Chapter 1, The Vision Test",
        sourceUrl: hb(7),
      },
      {
        id: "ct_s4_16",
        topic: "signals",
        question:
          "Where must you stop when a sign or signal requires it and there is a stop line painted on the road?",
        choices: [
          "Anywhere within the crosswalk",
          "With your front wheels on the line",
          "Before your vehicle reaches the line",
          "Level with the sign",
        ],
        correctIndex: 2,
        explanation:
          "Before the line. The whole car stops short of it, because the space beyond it belongs to the crosswalk and to crossing traffic.",
        context:
          "The manual's stop sign entry says the same in a different form: you stop at the sign, the stop line, the pedestrian crosswalk or the curb, whichever you meet first, and you wait until crossing vehicles and pedestrians have cleared. Where your view is blocked after stopping, you may edge forward slowly until you can see.",
        trap: "Stopping on the line and then creeping is not the same as stopping before it, and at a crosswalk it puts your car where people are walking.",
        excerptKey: "stop-before-the-stop-line",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Crosswalks and Stop Lines",
        sourceUrl: hb(46),
      },
      {
        id: "ct_s4_17",
        topic: "sharing",
        question:
          "A slow-moving vehicle displays an orange triangle on the back. What does that tell you?",
        choices: [
          "It is likely traveling at 25 mph or less",
          "It is carrying hazardous material",
          "It is a farm vehicle exempt from traffic laws",
          "It is about to turn off the road",
        ],
        correctIndex: 0,
        explanation:
          "The orange triangle marks a vehicle that normally travels at 25 mph or less - farm tractors, animal-drawn vehicles, roadway maintenance equipment.",
        context:
          "Spotting them early is the point: if you see one in time you can change lanes or slow down smoothly, whereas braking suddenly behind one can cause a crash. Connecticut also lets you cross a double yellow line to get past slow-moving traffic where you can see far enough ahead to complete the pass safely.",
        trap: "Closing speed on a 25 mph vehicle from 55 mph is enormous, and the triangle is small. It is the sign you should be scanning for, not the one you notice at the last moment.",
        excerptKey: "slow-moving-decal",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Slow Moving Vehicles",
        sourceUrl: hb(20),
      },
      {
        id: "ct_s4_18",
        topic: "parking",
        question:
          "Connecticut's no-parking list includes a distance from a pedestrian safety zone. What is it?",
        choices: [
          "5 feet",
          "10 feet",
          "20 feet",
          "25 feet",
        ],
        correctIndex: 3,
        explanation:
          "Twenty-five feet, the same figure the manual gives for a stop sign. Both exist to keep sight lines open where people are crossing or where drivers have to stop.",
        context:
          "Learn the manual's list as three numbers and a rule: 25 feet from a stop sign or a pedestrian safety zone, 10 feet from a fire hydrant, no more than one foot from the curb. Then add the statute's 25 feet from an intersection or the approach to a marked crosswalk, and the 150 feet of clear view on a curve or crest.",
        trap: "Two 25-foot rules and one 10-foot rule are easy to scramble. The hydrant is the short one.",
        excerptKey: "no-parking-distances",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, No-Parking Zones",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s4_19",
        topic: "signs",
        question:
          "A sign shows a black arrow curving right on a yellow diamond, and another shows a black arrow bending twice. What is the difference?",
        choices: [
          "The first is regulatory and the second is a warning",
          "The shape of the arrow tells you whether it is one curve or a winding stretch",
          "The first applies to trucks only",
          "The second means the road is closed ahead",
        ],
        correctIndex: 1,
        explanation:
          "Both are warnings, and the shape of the arrow tells you what is coming: a single curve, a turn, a pair of curves, or a winding stretch of road.",
        context:
          "A small plaque under the arrow gives the maximum safe speed for the shape shown. The related sign to know is the change in direction marker - the black-and-yellow chevrons you find on the outside of a sharp bend or on the approach to a narrow bridge.",
        trap: "Reading the plaque as a legal limit is the common slip. Under a yellow warning sign it is advisory.",
        excerptKey: "turns-and-curves-signs",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Warning Signs",
        sourceUrl: hb(52),
      },
      {
        id: "ct_s4_20",
        topic: "impairment",
        question:
          "How much alcohol does the Connecticut manual count as one standard drink?",
        choices: [
          "1 oz of spirits, 8 oz of beer or a 3 oz glass of wine",
          "1.5 oz of 80-proof spirits, 8 oz of beer or a 4 oz glass of wine",
          "1.5 oz of 80-proof spirits, 12 oz of beer or a 5 oz glass of wine",
          "2 oz of 80-proof spirits, 16 oz of beer or an 8 oz glass of wine",
        ],
        correctIndex: 2,
        explanation:
          "One and a half ounces of 80-proof spirits, a 12 ounce beer, or a 5 ounce glass of wine. The manual adds that specialty drinks often contain several of those.",
        context:
          "The figures matter because the under-21 limit of .02 is roughly one drink, and Connecticut says a person under 21 could be considered impaired after only one. Alcohol reaches judgment first, which is why the manual compares noticing your own impairment to noticing sunburn.",
        trap: "A pint of strong beer or a generous pour of wine is not one drink. Counting glasses rather than volume is how people misjudge it.",
        excerptKey: "standard-drink",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Alcohol and You",
        sourceUrl: hb(35),
      },
      {
        id: "ct_s4_21",
        topic: "rules",
        question:
          "You are pulled over by a Connecticut police officer at night. What does the manual recommend?",
        choices: [
          "Turn on the interior light after stopping and before the officer reaches you",
          "Step out of the car so the officer can see you",
          "Have your license and registration out before you stop",
          "Turn the engine off and open the driver's door",
        ],
        correctIndex: 0,
        explanation:
          "At night, put the interior light on once you have stopped and before the officer arrives. It removes the guesswork from an approach in the dark.",
        context:
          "The rest of the guidance: pull as close as is safely practical to the right edge, clear of any intersection, and park. Limit your movements while stopping. Hands on the wheel, passengers' hands in view. Get your license and registration only when asked. Keep the doors closed and stay in the car unless you are asked to get out.",
        trap: "Reaching for documents before you are asked is the instinct the manual specifically redirects, because from outside the car it looks like reaching for something else.",
        excerptKey: "police-stop-interior-light",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Stopping for Police Vehicles",
        sourceUrl: hb(37),
      },
      {
        id: "ct_s4_22",
        topic: "safety",
        question:
          "What does the manual say about driving with headphones or earbuds in both ears?",
        choices: [
          "It is fine at low volume",
          "It is fine if only one earbud is playing audio",
          "It is fine outside city limits",
          "Do not do it - it makes it too hard to hear horns or sirens",
        ],
        correctIndex: 3,
        explanation:
          "The manual puts it on the list of things not to do while driving: head or earphones that cover or go into both ears make it too hard to hear an emergency horn or a siren.",
        context:
          "It sits with the other four: do not take your eyes off the road for more than a few seconds, do not read a map while moving, do not slow down to rubberneck at a crash, and pull safely off the road if you need to look at something. Hearing matters because a horn, a siren or screeching tires may be your first warning.",
        trap: "\"I can still hear over the music\" is the usual defense. The manual's objection is to the ears being covered at all.",
        excerptKey: "no-headphones",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Visibility",
        sourceUrl: hb(26),
      },
      {
        id: "ct_s4_23",
        topic: "emergencies",
        question:
          "A crash has just happened ahead of you and emergency services are already on the scene. What does the manual say?",
        choices: [
          "Stop and offer help in every case",
          "Keep moving, watching for people in or near the road",
          "Slow to a crawl so you can see whether help is needed",
          "Park on the shoulder and wait for an officer",
        ],
        correctIndex: 1,
        explanation:
          "Unless you were involved or help has not yet arrived, you keep going. The manual's reason is practical: stopped sightseers block the way for police, firefighters, ambulances and tow trucks.",
        context:
          "The same section names rubbernecking as its own hazard: slowing to look takes your eyes off the road, and the car ahead of you may already have stopped. It also warns against driving to the scene of a crash, fire or disaster just to look.",
        trap: "Stopping feels like the responsible choice. Where help is already there, it is the choice that makes the scene worse.",
        excerptKey: "crash-do-not-stop-to-look",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Traffic Crashes",
        sourceUrl: hb(43),
      },
      {
        id: "ct_s4_24",
        topic: "licensing",
        question:
          "Connecticut law requires continuous insurance on a registered vehicle. What happens if the coverage lapses?",
        choices: [
          "Nothing until the vehicle is next inspected",
          "A fine only, with no effect on the registration",
          "The insurer reports the cancellation to the DMV, and ignoring the notice suspends the registration",
          "The license plates are collected by police at the roadside",
        ],
        correctIndex: 2,
        explanation:
          "The insurance company reports the cancellation to the DMV, the DMV notifies you, and failing to respond to that warning notice suspends the registration.",
        context:
          "The notice offers an insurance compliance agreement: show proof of cover, pay the compliance fine, and no further action follows as long as the vehicle stays insured while it is registered to you. A vehicle cannot legally be driven on any public highway without registration.",
        trap: "The lapse is discovered automatically because the insurer reports it. Nobody has to catch you driving.",
        excerptKey: "insurance-registration-suspended",
        sourceLabel: "Connecticut Driver's Manual - Chapter 2, Connecticut Insurance Laws",
        sourceUrl: hb(15),
      },
      {
        id: "ct_s4_25",
        topic: "rightOfWay",
        question:
          "You have a green light and want to turn left, and pedestrians are crossing the street you are turning into. What must you do?",
        choices: [
          "Yield to the pedestrians and complete the turn only when they are clear",
          "Turn behind them once you are past the center of the intersection",
          "Proceed, because a green light gives you the right of way over the crosswalk",
          "Sound your horn to hurry them along",
        ],
        correctIndex: 0,
        explanation:
          "Pedestrians in a crosswalk keep the right of way against turning vehicles. Section 14-300 says so explicitly - a pedestrian who has started across has right of way over all vehicles, including those making turns, until they reach the far curb.",
        context:
          "A steady green permits the turn without protecting it, so you are yielding twice: to oncoming traffic going straight, and to anyone in the crosswalk on the road you are entering. The manual's turning advice is to look at the street you are turning into before you commit, so you do not end up stranded across the oncoming lane.",
        trap: "A green light feels like permission to move rather than permission to yield. Turning drivers are the single largest hazard to Connecticut pedestrians.",
        excerptKey: "statute-pedestrian-until-opposite-curb",
        sourceLabel: "Connecticut General Statutes - Section 14-300, Crosswalks",
        sourceUrl: stat("249", "14-300"),
      },
      {
        id: "ct_s4_26",
        topic: "signs",
        question:
          "You are driving along and pass a green sign reading EXIT 44. What kind of sign is it?",
        choices: [
          "A regulatory sign",
          "A warning sign",
          "A service sign",
          "A guide sign",
        ],
        correctIndex: 3,
        explanation:
          "Green means guidance: where you are, which way to go, and how far. Exit numbers, destinations and distances all sit on green.",
        context:
          "Connecticut also uses green for information signs - state lines, city limits, stream names, elevations and landmarks. Mileposts run every mile from one end of the state to the other, starting from the south and west borders, so an exit number and a milepost together tell you how far you have to go.",
        trap: "\"Guide\" and \"information\" are both green in this manual. Only red, and some black and white signs, are regulatory.",
        excerptKey: "guide-signs",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Guide Signs",
        sourceUrl: hb(52),
      },
      {
        id: "ct_s4_27",
        topic: "speed",
        question:
          "Which statement about stopping distance does the Connecticut manual make?",
        choices: [
          "Stopping from 60 mph takes about twice the distance it takes from 30 mph",
          "Stopping from 60 mph takes over three times the distance it takes from 30 mph",
          "Stopping distance is the same at any speed with modern brakes",
          "Stopping distance depends only on reaction time",
        ],
        correctIndex: 1,
        explanation:
          "Over three times, not twice. Doubling your speed roughly quadruples the braking energy, and the manual singles this out because most people expect the relationship to be linear.",
        context:
          "It backs the point with figures: about 400 feet to react and stop from 50 mph, about 200 feet from 30 mph, on dry pavement with good tires and brakes. Turn those around and you get a sight-distance rule - if you cannot see 400 feet you should not be doing 50.",
        trap: "The intuition that twice the speed means twice the distance is exactly what the manual is correcting.",
        excerptKey: "stopping-60-vs-30",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Speed Limits",
        sourceUrl: hb(38),
      },
      {
        id: "ct_s4_28",
        topic: "sharing",
        question:
          "A large truck is overtaking you on a Connecticut highway. What should you do?",
        choices: [
          "Speed up so the pass takes less road",
          "Move onto the shoulder to give room",
          "Slow down slightly to shorten the time it takes",
          "Hold your exact speed and position",
        ],
        correctIndex: 2,
        explanation:
          "Ease off a little. Trucks accelerate slowly, so shaving a few miles an hour off your speed gets the truck past sooner and reduces the time either of you is exposed.",
        context:
          "Speeding up while somebody is passing you is both dangerous and illegal - section 14-232 requires the overtaken driver to give way to the right and not to increase speed. The manual applies the same courtesy to a truck meeting you the other way: keep as far right as you safely can to cut the wind turbulence.",
        trap: "This is the opposite of the advice for a motorcycle passing you, where the manual asks you to hold your lane position and speed. The difference is how long each maneuver takes.",
        excerptKey: "truck-return-to-lane",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Pass Trucks Safely",
        sourceUrl: hb(21),
      },
      {
        id: "ct_s4_29",
        topic: "safety",
        question:
          "A child is 6 years old and weighs 45 pounds. What does Connecticut law require?",
        choices: [
          "A five-point harness or a booster seat",
          "A rear-facing car seat",
          "A lap belt only",
          "No restraint beyond the adult seat belt",
        ],
        correctIndex: 0,
        explanation:
          "Between the ages of 5 and 8, or between 40 and 60 pounds, the requirement is a five-point harness or a booster seat.",
        context:
          "The whole table runs: under 2 or under 30 pounds, rear-facing with a five-point harness; ages 2 to 5 or under 40 pounds, rear or forward-facing with a five-point harness; ages 5 to 8 or 40 to 60 pounds, harness or booster; age 8 and over and 60 pounds or more, booster or seat belt. Where age and weight point to different rows, the more restrictive one applies.",
        trap: "A child who is tall for their age still needs the seat their weight and age call for. The rule is the stricter of the two, not the more convenient.",
        excerptKey: "child-more-restrictive-applies",
        sourceLabel: "Connecticut Driver's Manual - Chapter 2, Child Safety Requirements",
        sourceUrl: hb(14),
        commonlyMissed: true,
      },
      {
        id: "ct_s4_30",
        topic: "rules",
        question:
          "You are approaching a railroad crossing with two sets of tracks and a train has just gone by. What should you do?",
        choices: [
          "Cross immediately while the way is clear",
          "Cross if the gates have started to rise",
          "Sound your horn and proceed",
          "Wait until the train is well down the track before starting across",
        ],
        correctIndex: 3,
        explanation:
          "Wait until the departing train is well clear. On a multiple-track crossing the train that just passed can hide a second one coming the other way.",
        context:
          "The other crossing rules: slow down and look both ways at every crossing, never assume no train is coming, and make sure there is room for your car on the far side before you start. Where gates are fitted, you stop when the lights begin to flash and before the gate lowers, and you never drive around a lowered gate.",
        trap: "The passing train is exactly what blocks your view of the second one, which is why this specific scenario has its own paragraph in the manual.",
        excerptKey: "railroad-second-train",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Railroad Crossings",
        sourceUrl: hb(17),
      },
      {
        id: "ct_s4_31",
        topic: "signals",
        question:
          "What is a bicycle sharrow - two chevrons above a bicycle symbol painted in a lane?",
        choices: [
          "A bike lane reserved for bicycles only",
          "A marking that the lane is shared by bicycles and motor vehicles",
          "A sign that bicycles must dismount",
          "A marking that bicycles must use the sidewalk",
        ],
        correctIndex: 1,
        explanation:
          "A sharrow means the lane is shared. Vehicles or bicycles may be in it, and it is an extra warning to watch for riders.",
        context:
          "It is different from a marked bicycle lane, which is reserved. You must yield to cyclists in a bike lane, may not drive along one when approaching a turn, and may not stop or park in one except to enter or leave an alley or driveway, on official duty, under police direction, or in an emergency.",
        trap: "The chevrons look like a lane-position instruction for drivers. They are a warning that the lane is not yours alone.",
        excerptKey: "bicycle-sharrow",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Other Markings",
        sourceUrl: hb(46),
      },
      {
        id: "ct_s4_32",
        topic: "emergencies",
        question:
          "Your headlights fail on an unlit Connecticut road at night. After slowing and pulling off, what does the manual tell you to do?",
        choices: [
          "Drive on slowly using the hazard flashers as lighting",
          "Follow another car closely and use its lights",
          "Continue with the interior light on",
          "Put on the emergency flashers and stop driving the vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Flashers on, and stop driving it. The manual lets you try the headlight switch a few times and use signals or fog lights to be seen while you get clear, but the instruction after that is not to operate the vehicle.",
        context:
          "It fits the pattern of the whole equipment-failure section: brake failure means pump, then parking brake, then lower gears, then off the road and do not drive on. A blowout means grip the wheel, keep straight and slow gradually. A stuck throttle means neutral first, road second, engine last.",
        trap: "Limping home on hazard flashers is the tempting option and the manual closes it off explicitly.",
        excerptKey: "headlight-failure",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Equipment Failure",
        sourceUrl: hb(42),
      },
      {
        id: "ct_s4_33",
        topic: "impairment",
        question:
          "Which of these warning signs of fatigue does the manual list?",
        choices: [
          "Drifting from your lane, tailgating, or missing signs and exits",
          "Gripping the wheel harder than usual",
          "Feeling colder than the passengers",
          "Finding the radio too loud",
        ],
        correctIndex: 0,
        explanation:
          "Drifting, tailgating and missing signs or exits are on the manual's list, along with turning up the radio or opening a window to stay awake, trouble focusing, repeated yawning, daydreaming and irritability.",
        context:
          "The prevention list is just as specific: seven to nine hours of sleep, a break about every 100 miles or two hours on a long trip, someone to share the driving, and no alcohol or sedating medication. If you hit a shoulder rumble strip, that is the road telling you to pull off at the next safe place and check your alertness.",
        trap: "Reaching for the radio or the window is on the list as a symptom, not as a remedy. It is the point at which you should be looking for somewhere to stop.",
        excerptKey: "rumble-strips",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Fatigue",
        sourceUrl: hb(30),
      },
      {
        id: "ct_s4_34",
        topic: "parking",
        question:
          "May you drive across a public sidewalk in Connecticut?",
        choices: [
          "Yes, at walking pace",
          "Yes, if no pedestrian is within 50 feet",
          "No, under any circumstances",
          "Only to enter or leave an adjacent property, or to do construction, maintenance or snow removal",
        ],
        correctIndex: 3,
        explanation:
          "Section 14-250a bans driving, parking, standing or stopping on a public sidewalk, with narrow exceptions for crossing it to reach an adjacent area and for necessary sidewalk work.",
        context:
          "Crossing to a driveway carries its own duty. Section 14-247a makes you stop before you drive onto the sidewalk, yield to any pedestrian, and then yield again to traffic when you reach the roadway. The courts have been clear that the exception covers entering and leaving a driveway, not using it to turn around.",
        trap: "Parking with two wheels up on the sidewalk to leave room for traffic is still an offense.",
        excerptKey: "statute-no-driving-on-sidewalk",
        sourceLabel: "Connecticut General Statutes - Section 14-250a, Vehicles prohibited on sidewalks",
        sourceUrl: stat("248", "14-250a"),
      },
      {
        id: "ct_s4_35",
        topic: "signs",
        question:
          "A portable electronic message board on a Connecticut highway displays an instruction. What is your obligation?",
        choices: [
          "It is advisory only",
          "It applies only to commercial vehicles",
          "You must obey any directions posted on it",
          "It applies only when workers are present",
        ],
        correctIndex: 2,
        explanation:
          "The manual is direct: always obey any directions posted on these message boards. Portable or permanent, they carry real instructions about traffic, road, weather and hazard conditions.",
        context:
          "They are part of the same family as the orange work-zone signs and the flagger: temporary traffic control that carries the same weight as permanent signs. The Connecticut Department of Transportation publishes road and construction conditions on its own site as well.",
        trap: "An electronic sign looks informational because the text changes. The instruction on it is not optional.",
        excerptKey: "message-boards",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Message Boards",
        sourceUrl: hb(54),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Thirty-five questions on the rules Connecticut learners report getting wrong: the exact teen driving penalties, the school bus scenario that catches good drivers, and the numbers the manual never prints.",
    questions: [
      {
        id: "ct_s5_01",
        topic: "licensing",
        question:
          "A 16 year old with a Connecticut learner's permit is driving with a licensed 22 year old cousin in the front seat and a 15 year old sibling in the back. Is that legal?",
        choices: [
          "Yes, because one qualified adult is present",
          "Yes, as long as everybody is belted",
          "Yes, because siblings are immediate family",
          "No - the permit allows the instructor and nobody else",
        ],
        correctIndex: 3,
        explanation:
          "Two things are wrong. The permit allows only the qualified instructor, so the sibling may not be there at all, and a 22 year old has not held a license for four consecutive years, so the cousin probably does not qualify as the instructor either.",
        context:
          "For the whole life of the permit, a 16 or 17 year old may carry a licensed driving instructor and the people accompanying that instructor, or one person aged at least 20 who has held a license for four or more consecutive years without suspension, with a parent or legal guardian permitted to accompany them. That is the entire list, and breaking it can suspend the permit.",
        trap: "The immediate-family relaxation belongs to months seven through twelve of a license, not to the permit stage. Getting the two stages confused is the single most common Connecticut mistake.",
        excerptKey: "permit-instructor-20-four-years",
        sourceLabel: "Connecticut Driver's Manual - Chapter 1, Learner's Permit Passenger Restrictions",
        sourceUrl: hb(8),
        commonlyMissed: true,
      },
      {
        id: "ct_s5_02",
        topic: "sharing",
        question:
          "What is the fine for a first offense of failing to stop for a Connecticut school bus displaying flashing red lights?",
        choices: [
          "$450",
          "$150",
          "$250",
          "$1,000",
        ],
        correctIndex: 0,
        explanation:
          "Four hundred and fifty dollars for a first offense. Subsequent offenses run from $500 to $1,000, and can carry up to thirty days in jail.",
        context:
          "The stop is measured: not less than ten feet from the front when approaching, not less than ten feet from the rear when following. It applies on any highway, private road, parking area or school property. A bus driver can report your plate and a police officer may then issue a warning or a summons on the strength of that report alone.",
        trap: "The number is high because the offense is treated seriously. A camera or a bus driver's written report is enough to start the process without any officer seeing it.",
        excerptKey: "statute-school-bus-fine",
        sourceLabel: "Connecticut General Statutes - Section 14-279, Penalties",
        sourceUrl: stat("248", "14-279"),
        commonlyMissed: true,
      },
      {
        id: "ct_s5_03",
        topic: "rightOfWay",
        question:
          "A school bus is stopped with its red lights on at the mouth of the intersection you are about to turn into. May you make the turn?",
        choices: [
          "Yes, if you turn slowly",
          "Yes, since the turn takes you away from the bus",
          "No - turns toward a school bus taking on or letting off passengers are prohibited at an intersection",
          "Yes, if the bus is on the far side of the intersection",
        ],
        correctIndex: 2,
        explanation:
          "Section 14-279 bans vehicular turns toward a school bus that is receiving or discharging passengers at the intersection of two or more highways. The turn is off the table entirely.",
        context:
          "The manual reaches the same place from the right-of-way side: you must stop for a bus with red lights flashing whether it is on your side, on the opposite side, or at an intersection you are approaching. Only a roadway divided by a safety island or a physical barrier lets you go on, and only from the far side of it.",
        trap: "Drivers reason that the turn moves them away from the children. The statute bans the turn regardless of direction, because children cross toward the bus.",
        excerptKey: "statute-school-bus-no-turns",
        sourceLabel: "Connecticut General Statutes - Section 14-279, Vehicles to stop for school bus",
        sourceUrl: stat("248", "14-279"),
        commonlyMissed: true,
      },
      {
        id: "ct_s5_04",
        topic: "speed",
        question:
          "Connecticut's statutory speed limits are 55 and 65 mph. What decides which one applies to a given road?",
        choices: [
          "Whether the road is divided",
          "Whether a 65 mph limit has been established and posted for that highway",
          "The number of lanes in your direction",
          "Whether the road is inside a town boundary",
        ],
        correctIndex: 1,
        explanation:
          "Sixty-five applies only where a 65 mph limit has actually been established under section 14-218a for that highway. Everywhere else the ceiling is 55.",
        context:
          "Below both sits section 14-218a's reasonableness rule, which makes any speed unreasonable for the width, traffic, intersections or weather an offense whatever the posted number says. A locally set limit is prima facie evidence of what is reasonable on that road, not a guarantee.",
        trap: "Being on an interstate does not by itself make the limit 65. The posting does.",
        excerptKey: "statute-speed-65",
        sourceLabel: "Connecticut General Statutes - Section 14-219, Speeding",
        sourceUrl: stat("248", "14-219"),
        commonlyMissed: true,
      },
      {
        id: "ct_s5_05",
        topic: "licensing",
        question:
          "A 17 year old is convicted of a first cell phone offense while driving in Connecticut. What is the suspension?",
        choices: [
          "No suspension for a first offense",
          "60 days",
          "90 days",
          "30 days, plus a $175 restoration fee",
        ],
        correctIndex: 3,
        explanation:
          "Thirty days for a first offense, with a $175 license restoration fee on top of the court fine. A second or subsequent offense is six months, or until the driver turns 18, whichever is longer.",
        context:
          "Connecticut's suspension table for 16 and 17 year olds is worth learning as a block. Cell phone or texting: 30 days, then six months. Graduated-license violations such as the passenger and curfew rules: 30 days, then 90 days, then six months. Speeding 20 mph over: 60 days, then 90 days, then six months. Reckless driving and street racing: six months, then a year.",
        trap: "Learners often assume the first offense is a warning. In Connecticut the first offense is already time off the road.",
        excerptKey: "gdl-no-phone-at-all",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Other Suspensions for 16- and 17-Year-Old Drivers",
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "ct_s5_06",
        topic: "rules",
        question:
          "Your Connecticut turn signal has been on since well before the driveway you actually want, because you signaled early to be clear. What does the manual say about that?",
        choices: [
          "Do not signal that early - wait until you have passed any street or driveway between you and your turn",
          "It is good practice and the manual encourages it",
          "It makes no difference either way",
          "Signal early only at night",
        ],
        correctIndex: 0,
        explanation:
          "Signalling too early is a named error. A driver waiting at the intersection or driveway between you and your turn will read your signal as meaning you are turning in there, and may pull out into your path.",
        context:
          "The two halves have to hold together: at least three seconds of warning, and 100 continuous feet before the turn under section 14-242(b), but not so early that the signal points at the wrong opening. And once you are round, check the signal has canceled - after small turns it often has not.",
        trap: "\"More warning is always better\" is the intuition, and it is the one the manual specifically corrects.",
        excerptKey: "signal-not-too-early",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Turn Signals",
        sourceUrl: hb(41),
      },
      {
        id: "ct_s5_07",
        topic: "impairment",
        question:
          "You are 19 and blow .03 percent after being arrested for DUI in Connecticut. What happens?",
        choices: [
          "Nothing, because you are under 0.08",
          "A warning is recorded but no suspension follows",
          "The police report it to the Commissioner and your license is suspended for at least 45 days",
          "The suspension is 24 hours",
        ],
        correctIndex: 2,
        explanation:
          "Under 21 the threshold is .02, so .03 is over the limit. The police report it to the Commissioner and the suspension is at least 45 days, with an ignition interlock device required for at least a year as a condition of reinstatement.",
        context:
          "Zero tolerance applies on public roads and on private property alike. Section 14-227g states the rule and borrows the procedure from section 14-227a, so the process from arrest through testing to suspension is the same one an adult goes through.",
        trap: "\"Under 0.08\" is a meaningless comfort for anyone under 21, and .03 is well within reach of a single drink.",
        excerptKey: "under-21-iid-one-year",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Alcohol and the Law",
        sourceUrl: hb(35),
        commonlyMissed: true,
      },
      {
        id: "ct_s5_08",
        topic: "parking",
        question:
          "Section 14-251 sets a distance from an intersection or the approach to a marked crosswalk. What is it, in the ordinary case?",
        choices: [
          "10 feet",
          "25 feet",
          "30 feet",
          "50 feet",
        ],
        correctIndex: 1,
        explanation:
          "Twenty-five feet. There is a narrow exception at 10 feet where a curb extension at least as wide as the parking lane has been built, and a grandfather clause for spaces that already existed on or before 1 October 2022.",
        context:
          "The manual's own no-parking list gives 25 feet from a stop sign and from a pedestrian safety zone but never mentions the crosswalk approach, so this is a statute-only number. Its purpose is sight lines: a car parked into the approach hides a crossing pedestrian from the driver turning in.",
        trap: "The manual is not a complete list of parking rules. It never claims to be, and its own disclaimer says its contents are not a precise statement of the statutes.",
        excerptKey: "statute-parking-25-feet",
        sourceLabel: "Connecticut General Statutes - Section 14-251, Parking vehicles",
        sourceUrl: stat("248", "14-251"),
      },
      {
        id: "ct_s5_09",
        topic: "signals",
        question:
          "You are first in a right-turn lane at a red light and the sign beside the signal reads NO TURN ON RED. Traffic behind you starts honking. What do you do?",
        choices: [
          "Turn, since the following traffic makes staying put unsafe",
          "Turn if the way is clear, because the sign is advisory",
          "Edge into the crosswalk to signal your intention",
          "Stay stopped until the light turns green",
        ],
        correctIndex: 3,
        explanation:
          "You wait. Right on red is Connecticut's default, but a sign prohibiting it overrides the default, and pressure from behind changes nothing.",
        context:
          "Signs that forbid a movement are regulatory and must be obeyed. NO TURN ON RED usually appears where the sight line is bad, where pedestrians cross heavily, or where a conflicting movement gets a green arrow you cannot see. The manual's aggressive-driving section is explicit that leaving punishment to the police, rather than reacting to it, is the driver's job.",
        trap: "Being honked at is the most common reason drivers give for running one of these signs, and it is exactly the situation the sign exists for.",
        excerptKey: "right-on-red-unless-sign",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Intersections",
        sourceUrl: hb(17),
        commonlyMissed: true,
      },
      {
        id: "ct_s5_10",
        topic: "safety",
        question:
          "Connecticut's Vulnerable User's Law protects a list of road users. Which of these is on it?",
        choices: [
          "A garbage truck crew working at the roadside",
          "A learner driver displaying a student driver sign",
          "A motorcyclist",
          "A car with a child on board sticker",
        ],
        correctIndex: 0,
        explanation:
          "Garbage trucks are named in the list, along with pedestrians, bicyclists, wheelchair users, a person riding or driving an animal, highway workers, tank vehicles, mail vehicles and express delivery carriers.",
        context:
          "The law raises the penalties for a driver who fails to exercise reasonable care and causes serious injury or death to one of these users. The practical duty attached to it is the three-foot rule when passing any of them - the same three feet you owe a cyclist.",
        trap: "It reads like a list of people on foot or two wheels, so the vehicles on it get missed. A stopped garbage truck or delivery van is a protected user in Connecticut.",
        excerptKey: "vulnerable-user-list",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Vulnerable Users",
        sourceUrl: hb(18),
        commonlyMissed: true,
      },
      {
        id: "ct_s5_11",
        topic: "licensing",
        question:
          "A 17 year old with a Connecticut license is driving home from an evening shift at work at 11:30 p.m. Is that legal?",
        choices: [
          "No - the curfew is absolute between 11 p.m. and 5 a.m.",
          "Only if a parent is in the car",
          "Yes - travel for employment is one of the listed exceptions to the curfew",
          "Only with written permission from the DMV",
        ],
        correctIndex: 2,
        explanation:
          "Employment is one of the named exceptions. So are school and religious activities and a medical necessity, and so is being an assigned driver in a Safe Ride program.",
        context:
          "Section 14-36g runs the curfew from 11 p.m. to 5 a.m. of the following day. Active members of a volunteer fire company, volunteer ambulance service or emergency medical service organization are exempt from both the curfew and the passenger rules while responding to, returning from, or carrying out duties on an emergency call. The passenger restrictions never lift for the exceptions, though: getting home from work does not entitle you to carry friends.",
        trap: "The exception covers the journey, not the car full of people. The DMV's own guidance says all passenger restrictions remain in effect.",
        excerptKey: "statute-gdl-curfew",
        sourceLabel: "Connecticut General Statutes - Section 14-36g, Hours of operation",
        sourceUrl: stat("246", "14-36g"),
        commonlyMissed: true,
      },
      {
        id: "ct_s5_12",
        topic: "rightOfWay",
        question:
          "Connecticut's manual says the law does not give anyone the right of way. What does it give instead?",
        choices: [
          "A priority order that can be waived by agreement",
          "A rule about who must yield, plus a duty to avoid a collision regardless",
          "A defense to a civil claim",
          "A guarantee that the other driver will stop",
        ],
        correctIndex: 1,
        explanation:
          "The law says who must yield. It never confers a right to proceed, and it leaves you with the duty to do everything you can to avoid striking a pedestrian or another vehicle whatever the circumstances.",
        context:
          "That framing changes how the rest of the list reads. Every entry - yield to pedestrians in crosswalks, to the vehicle on your right, to a bus signaling to rejoin, to trains, to emergency vehicles - is a duty on you rather than an entitlement for someone else.",
        trap: "\"I had the right of way\" is the phrase the manual is dismantling. It is not a defense to hitting somebody you could have avoided.",
        excerptKey: "law-does-not-give-row",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Right-of-Way",
        sourceUrl: hb(38),
      },
      {
        id: "ct_s5_13",
        topic: "signs",
        question:
          "You reach a crossbuck at a railroad crossing with no lights and no gates, and no train is in sight. What does the crossbuck require?",
        choices: [
          "A complete stop before the tracks in every case",
          "Nothing, since it is only a location marker",
          "A stop if the crossing carries more than one track",
          "You yield to any train, as if it were a yield sign",
        ],
        correctIndex: 3,
        explanation:
          "The manual gives the crossbuck the same meaning as a yield sign. You give way to any train, which means slowing enough to see and hear, and stopping if a train is coming.",
        context:
          "Certain vehicles do have to stop at every crossing regardless: section 14-250 makes buses carrying passengers, school buses and vehicles with cargo tanks or hazardous materials stop between fifteen and fifty feet from the nearest rail. Leave those vehicles room to do it, and never try to beat a train.",
        trap: "The crossbuck looks like signage rather than a rule, so drivers cross without looking. It carries a legal duty.",
        excerptKey: "crossbuck-means-yield",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Railroad Crossbuck",
        sourceUrl: hb(54),
        commonlyMissed: true,
      },
      {
        id: "ct_s5_14",
        topic: "rules",
        question:
          "You need to pass a slow-moving farm tractor and the center line is a double yellow. What does Connecticut law allow?",
        choices: [
          "You may cross the double yellow, provided you can see far enough ahead to complete the pass safely",
          "You may never cross a double yellow line for any reason",
          "You may cross only if the tractor's driver waves you past",
          "You may cross only where a passing zone begins within 500 feet",
        ],
        correctIndex: 0,
        explanation:
          "State law permits passing slow-moving traffic, pedestrians, parked or standing vehicles, animals, bicycles, mopeds and scooters in a no-passing zone, and you may cross a double yellow to do it, but only if you can see far enough ahead to finish the maneuver safely.",
        context:
          "The sight-distance condition does the work. No-passing zones exist precisely because you cannot see far enough, so the permission depends on the view being adequate at that spot despite the markings. The manual's one-third of a mile rule for hills and curves is the practical check.",
        trap: "The permission gets remembered and the condition gets dropped. Crossing a double yellow into a blind curve to get past a tractor is still an unsafe pass.",
        excerptKey: "cross-double-yellow-for-slow",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Slow Moving Vehicles",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "ct_s5_15",
        topic: "emergencies",
        question:
          "There is minor damage to both cars in a Connecticut fender bender and nobody is hurt. What must you do?",
        choices: [
          "Nothing beyond exchanging insurance details",
          "Report it only if the damage exceeds $1,000",
          "Report the accident to police, because there is property damage",
          "File a report with the DMV within 30 days",
        ],
        correctIndex: 2,
        explanation:
          "The manual's rule is that you must report the accident to police if there is an injury, a death or property damage. Property damage on its own is enough.",
        context:
          "You also exchange names, addresses, license numbers, vehicle details and insurance information with everyone involved, collect witnesses' details, and record the damage. Leaving the scene of a crash involving injury or death, before police have taken what they need, is a crime.",
        trap: "\"No one was hurt so we sorted it out ourselves\" leaves the reporting duty unmet, and it is the version of events most people believe.",
        excerptKey: "crash-report-to-police",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Traffic Crashes",
        sourceUrl: hb(43),
      },
      {
        id: "ct_s5_16",
        topic: "speed",
        question:
          "Is a posted Connecticut speed limit conclusive proof that driving at that speed is lawful?",
        choices: [
          "Yes, the posted limit is a complete defense",
          "No - exceeding a posted limit is prima facie evidence of an unreasonable speed, and the reasonableness rule applies regardless",
          "Yes, unless the road is a limited-access highway",
          "Yes, except in a school zone",
        ],
        correctIndex: 1,
        explanation:
          "The statute works the other way round from what people expect. Exceeding a locally established limit is prima facie evidence that the speed was unreasonable, and the separate offense of driving faster than is reasonable for the conditions applies whatever the sign says.",
        context:
          "Section 14-218a asks about the width of the road, the traffic, the use of the highway, the intersections and the weather. All of those change hour by hour while the sign does not. That is why the manual says limits are posted for ideal conditions.",
        trap: "\"I was doing the limit\" is one of the two most common speeding defenses in Connecticut, and the statute answers it directly.",
        excerptKey: "speed-limits-ideal-conditions",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Speed Limits",
        sourceUrl: hb(38),
      },
      {
        id: "ct_s5_17",
        topic: "sharing",
        question:
          "You have just passed a cyclist and want to slow for your turn a hundred yards ahead. What does the manual warn against?",
        choices: [
          "Signalling while the cyclist is alongside",
          "Checking your mirror before slowing",
          "Leaving more than three feet of space",
          "Slowing or stopping quickly, or turning right immediately after the pass",
        ],
        correctIndex: 3,
        explanation:
          "Do not slow down, stop quickly, or turn right straight after passing a bicycle. A car's brakes are far more powerful than a bicycle's, so the rider cannot match your deceleration.",
        context:
          "It is the same maneuver the right-turn rule bans from the other end: you must not pass a cyclist immediately before a right turn, and you should let them clear the intersection before you turn. The manual also asks you to check for cyclists before opening a door and before backing.",
        trap: "The pass and the turn feel like two separate decisions. From the saddle they are one movement that closes the gap you just opened.",
        excerptKey: "bicycle-no-right-turn-after-passing",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Bicyclists",
        sourceUrl: hb(19),
      },
      {
        id: "ct_s5_18",
        topic: "signals",
        question:
          "A green arrow appears for your turn. What does the manual say you should still expect?",
        choices: [
          "There should be no oncoming or crossing traffic while the arrow is green",
          "Oncoming traffic has a green ball and may come through",
          "Pedestrians have a walk signal across your path",
          "The arrow may change to red without a yellow",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow is a protected turn: the manual says there should be no oncoming or crossing traffic while it is showing.",
        context:
          "That does not switch off the habit of looking. The manual's intersection advice is not to rely on signals or signs to tell you nobody will cross in front of you, and to look left and right even when the other traffic has a red. Some drivers do not obey signals, and the moment just after your light turns green is when people on the cross street are most likely to hurry through.",
        trap: "The distinction from a steady green ball matters. A green ball permits the turn; only the arrow protects it.",
        excerptKey: "green-arrow",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Arrows",
        sourceUrl: hb(47),
      },
      {
        id: "ct_s5_19",
        topic: "parking",
        question:
          "You leave your car on a Connecticut street facing oncoming traffic on the opposite side of the road. What is wrong with that?",
        choices: [
          "Nothing, provided the street is one-way",
          "It is legal but the car is harder to see",
          "It is a parking violation - you park on the right-hand side, headed the way traffic moves",
          "It is only a violation between dusk and dawn",
        ],
        correctIndex: 2,
        explanation:
          "Both the manual and section 14-251 require parking on the right-hand side of the highway, headed in the direction the vehicle is traveling. Parking on the wrong side of the street is on the manual's no-parking list.",
        context:
          "The statute pairs it with the twelve-inch rule: right-hand wheels within a foot of the curb where there is one, or of the edge of a bike lane or its buffer where one runs between the parking lane and the curb. Pulling out from the wrong side means crossing the centerline from a standstill into traffic that is not expecting it.",
        trap: "On a quiet street it looks harmless. It is a citable violation on its own, without any other misconduct.",
        excerptKey: "no-parking-places",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, No-Parking Zones",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s5_20",
        topic: "safety",
        question:
          "A driver is tailgating you closely on a Connecticut road. What does the manual tell you to do?",
        choices: [
          "Brake sharply to make the point",
          "Move right if there is a right lane, or otherwise wait for a clear road and slow down gradually",
          "Speed up to open the gap",
          "Turn on your hazard lights",
        ],
        correctIndex: 1,
        explanation:
          "Move over if you can. If you cannot, wait until the road ahead is clear and then reduce speed slowly, which encourages the tailgater to go around.",
        context:
          "The manual is explicit that you never slow down quickly to discourage a tailgater, because that raises your chance of being hit from behind. Being tailgated is also on the list of situations where you stretch your own following distance to four seconds, so you have room in front to slow gently rather than braking.",
        trap: "Brake-checking is the response people describe wanting to make, and it converts somebody else's bad driving into your collision.",
        excerptKey: "never-brake-at-tailgater",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Being Tailgated",
        sourceUrl: hb(24),
      },
      {
        id: "ct_s5_21",
        topic: "licensing",
        question:
          "How long is a Connecticut learner's permit valid?",
        choices: [
          "Six months",
          "One year",
          "Three years",
          "Until you get a license or two years from issue, whichever comes first",
        ],
        correctIndex: 3,
        explanation:
          "The permit runs until you are licensed or for two years from the date of issue, whichever comes first.",
        context:
          "The clock matters because of the waiting periods stacked underneath it. A 16 or 17 year old who completes driver education waits 120 days from issue before the road test, and 180 days otherwise. An applicant of 18 or over holds the permit at least 90 days, with narrow exemptions for people who have held a license before or who are on active military duty out of state.",
        trap: "Letting a permit expire means starting again with the documents, the fee and the knowledge test, which is the situation several Connecticut learners describe finding themselves in.",
        excerptKey: "permit-validity-2-years",
        sourceLabel: "Connecticut Driver's Manual - Chapter 1, Obtaining a Learner's Permit",
        sourceUrl: hb(7),
      },
      {
        id: "ct_s5_22",
        topic: "impairment",
        question:
          "In Connecticut, driving is treated as giving consent to a chemical test. What is that principle called, and what does it cover?",
        choices: [
          "Implied consent - a blood, breath or urine test and the non-testimonial part of a drug influence evaluation",
          "Presumed liability - only a breath test",
          "Statutory admission - a blood test only",
          "Mandatory testing - any test at the roadside without arrest",
        ],
        correctIndex: 0,
        explanation:
          "Implied consent. Operating a motor vehicle in Connecticut counts as consenting to a chemical test of blood, breath or urine and to the non-testimonial portion of a drug influence evaluation conducted by a drug recognition expert.",
        context:
          "The request comes after an arrest, once you have been told your rights, given a reasonable chance to phone a lawyer, and informed that refusal is admissible in evidence and can suspend your license. If the driver is a minor, the parents or guardian are treated as consenting too.",
        trap: "Implied consent does not mean testing without arrest. It means the choice to refuse has already been given its own penalty.",
        excerptKey: "statute-implied-consent",
        sourceLabel: "Connecticut General Statutes - Section 14-227b, Implied consent",
        sourceUrl: stat("248", "14-227b"),
      },
      {
        id: "ct_s5_23",
        topic: "signs",
        question:
          "Both a white rectangular SPEED LIMIT 40 sign and a yellow sign with a 30 plaque appear on the same stretch of road. Which governs?",
        choices: [
          "The yellow plaque, because it is lower",
          "Whichever you passed most recently",
          "The white sign is the legal limit; the yellow plaque is the advisory speed for the hazard it accompanies",
          "Neither, since two conflicting signs cancel each other",
        ],
        correctIndex: 2,
        explanation:
          "The white rectangle is regulatory and sets the legal maximum. The yellow plaque is advisory and applies to the specific hazard the warning sign above it describes, such as a curve.",
        context:
          "That does not make the yellow number ignorable. Taking a curve above its advisory speed and losing grip is traveling unreasonably fast under section 14-218a, whatever the regulatory limit for the road happens to be. Reading the color and shape first tells you which kind of instruction you are looking at.",
        trap: "People assume the lower number always wins, or that the advisory number is unenforceable. Neither is quite right.",
        excerptKey: "speed-limit-sign",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Regulatory Signs",
        sourceUrl: hb(50),
      },
      {
        id: "ct_s5_24",
        topic: "rules",
        question:
          "You are moving from the left lane to the right-hand exit lane on a Connecticut highway, three lanes across. What does the manual tell you to do?",
        choices: [
          "Cross all three at once while the gap is there",
          "Take the lanes one at a time",
          "Use the shoulder to reach the exit",
          "Signal once and move continuously across",
        ],
        correctIndex: 1,
        explanation:
          "One lane at a time, the way you take stairs. Confirming that three lanes are simultaneously clear is close to impossible, and waiting for that can tie up traffic or cause a crash.",
        context:
          "Each individual change gets the full routine: mirrors, a look over the shoulder into the blind spot, a check of the far lane in case somebody else is aiming for the same gap, and a signal. Section 14-236 requires you to stay within a single lane until you have established the move can be made safely.",
        trap: "The gap that looks continuous across three lanes is the one where somebody two lanes over is doing the same thing in the opposite direction.",
        excerptKey: "one-lane-at-a-time",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Changing Lanes",
        sourceUrl: hb(25),
      },
      {
        id: "ct_s5_25",
        topic: "emergencies",
        question:
          "What does Connecticut require of a driver who leaves the scene of a crash involving an injury before police have spoken to them?",
        choices: [
          "It is a reportable matter for insurance purposes",
          "It is a civil infraction with a fixed fine",
          "It is only an offense if the injury is serious",
          "It is a crime",
        ],
        correctIndex: 3,
        explanation:
          "The manual calls it what it is: a crime to leave a crash site where your vehicle was involved and there is an injury or death, before police have talked to you and gathered what they need.",
        context:
          "Evading responsibility after a crash causing death or serious injury is also one of the three offenses that bar a person under 18 from being treated as a youthful offender, alongside negligent homicide with a motor vehicle and driving under the influence.",
        trap: "Panic and a small-looking injury make people drive off intending to sort it out later. The offense is complete the moment they leave.",
        excerptKey: "crash-leaving-is-a-crime",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Traffic Crashes",
        sourceUrl: hb(43),
      },
      {
        id: "ct_s5_26",
        topic: "rightOfWay",
        question:
          "A pedestrian pushes a stroller so its front wheels enter an unmarked crosswalk in front of you. Must you yield?",
        choices: [
          "Yes - moving any body part or extension of one, including a stroller, into the crosswalk entrance indicates intent to cross",
          "No, because they have not stepped into the road themselves",
          "Only if the crosswalk is painted",
          "Only at a signalized intersection",
        ],
        correctIndex: 0,
        explanation:
          "A stroller is one of the extensions the law names. Moving it into the crosswalk entrance indicates the intent to cross, and you must slow or stop and grant the right of way.",
        context:
          "The full list is a wheelchair, cane, walking stick, crutch, bicycle, electric bicycle, stroller, carriage, cart, or leashed or harnessed dog. Raising a hand and arm toward oncoming traffic works too. Connecticut has a crosswalk at every intersection, marked or not, so the absence of paint changes nothing.",
        trap: "Waiting for the person to commit their whole body is the older habit and it is no longer what the law asks.",
        excerptKey: "pedestrian-intent-body-part",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Pedestrians",
        sourceUrl: hb(18),
        commonlyMissed: true,
      },
      {
        id: "ct_s5_27",
        topic: "sharing",
        question:
          "Following a motorcycle in the wet on a Connecticut road, how much space does the manual ask for?",
        choices: [
          "Two seconds",
          "Three seconds",
          "Three to four seconds, or more in wet conditions",
          "One car length for every 10 mph",
        ],
        correctIndex: 2,
        explanation:
          "Three to four seconds behind a motorcycle, and more when it is wet. A motorcycle can stop very quickly, and if the rider goes down you need room to avoid them rather than the machine.",
        context:
          "The manual lists the surfaces where a fall is most likely: wet and icy roads, gravel, and metal such as bridges, gratings and rail crossings. It also asks you to allow for sudden changes of lane or speed as a rider avoids a pothole or a seam that would mean nothing to a car.",
        trap: "Motorcycles look like they need less space because they are small. The braking distance is short; the consequence of closing the gap is not.",
        excerptKey: "motorcycle-following-3-to-4",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Motorcycles",
        sourceUrl: hb(20),
      },
      {
        id: "ct_s5_28",
        topic: "signals",
        question:
          "Which of these does a single solid white line between two same-direction lanes NOT mean?",
        choices: [
          "Stay in your lane unless a special situation requires the change",
          "Lane changing is prohibited entirely",
          "The lanes carry traffic in the same direction",
          "It is a lane line rather than a center line",
        ],
        correctIndex: 1,
        explanation:
          "The outright prohibition belongs to a double solid white line. A single solid white discourages the change without banning it.",
        context:
          "The color-then-pattern reading solves most marking questions. White means same direction, yellow means opposing directions. Dashed means crossing is allowed when safe, solid means stay put unless something requires the move, and double solid white prohibits the change.",
        trap: "Highway exits often use a single solid white where drivers assume a ban, and a double solid white where they assume a suggestion.",
        excerptKey: "double-white-line",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Other Markings",
        sourceUrl: hb(46),
      },
      {
        id: "ct_s5_29",
        topic: "speed",
        question:
          "Under Connecticut law, when may studded tires be used?",
        choices: [
          "All year on any road",
          "October 1 to April 15",
          "Whenever snow is on the ground",
          "November 15 through April 30",
        ],
        correctIndex: 3,
        explanation:
          "November 15 through April 30, inclusive. The manual and section 14-98 agree on both dates, and outside that window a metal nonskid device on the tires is an infraction.",
        context:
          "The restriction exists because studs chew up pavement. Emergency vehicles, road-making machinery, agricultural tractors crossing to reach farmland and vehicles under a special transportation permit are exempted. Studded tires are the last resort in the manual's slippery-road advice, after slowing down and after chains.",
        trap: "A late snowfall in May does not reopen the window. The dates are fixed.",
        excerptKey: "statute-studded-tires",
        sourceLabel: "Connecticut General Statutes - Section 14-98, Tires",
        sourceUrl: stat("246", "14-98"),
      },
      {
        id: "ct_s5_30",
        topic: "safety",
        question:
          "You are stopped behind a truck on an uphill grade in Connecticut. What does the manual suggest?",
        choices: [
          "Leave extra space, and stop slightly to one side so the driver can see you in the mirrors",
          "Stop close so the truck does not roll into you",
          "Stop directly behind the trailer for maximum visibility",
          "Sound your horn to let the driver know you are there",
        ],
        correctIndex: 0,
        explanation:
          "Leave extra room, because a heavy vehicle can roll back a foot or two as it pulls away, and offset slightly so you appear in the truck's mirrors.",
        context:
          "Being stopped on a hill or incline is on the manual's list of times to lengthen your following distance to four seconds. Directly behind a trailer is the rear No-Zone, where the driver cannot see you at all and you cannot see the traffic ahead of them.",
        trap: "Closing right up feels like it protects you from a rollback. It puts you exactly where the rollback and the blind spot meet.",
        excerptKey: "truck-three-second-minimum",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Following Distance Behind Trucks",
        sourceUrl: hb(22),
      },
      {
        id: "ct_s5_31",
        topic: "licensing",
        question:
          "Which of these is NOT one of the things a Connecticut road test evaluates?",
        choices: [
          "Response to traffic control signs and signals",
          "Backing and parking the vehicle",
          "Your ability to change a tire",
          "Recognizing warning lights on the instrument panel",
        ],
        correctIndex: 2,
        explanation:
          "Changing a tire is not part of it. The examiner looks at seat, mirror, wheel and belt adjustment, operating the wipers, washers, heater, defroster, parking brake, headlights, high beams and horn, responding to signs, signals and other road users, backing and parking, basic maneuvers such as turns, and recognizing dashboard warning lights.",
        context:
          "The manual's pre-test list is worth reading as a checklist of what the examiner is watching for: proper speed, the right lane to turn from and into, when and to whom to yield, when a yellow means stop, safe reversing, and parking in every style including on a hill. A vehicle found unsafe means no test at all and a free reschedule.",
        trap: "The test is about control and judgment on the road. Roadside maintenance is not in scope.",
        excerptKey: "adult-90-days",
        sourceLabel: "Connecticut Driver's Manual - Chapter 1, The Road Test",
        sourceUrl: hb(10),
      },
      {
        id: "ct_s5_32",
        topic: "parking",
        question:
          "A car is parked over a lowered section of curb built for wheelchair access. Is that a violation in Connecticut?",
        choices: [
          "Only if a disabled placard holder complains",
          "Only if it is also within 25 feet of a stop sign",
          "No, provided the car is fully off the roadway",
          "Yes - blocking an area of curb removed or lowered for sidewalk access is on the no-parking list",
        ],
        correctIndex: 3,
        explanation:
          "The manual's list bans blocking a driveway, alley, private road, or an area of curb removed or lowered for access to the sidewalk. A curb cut is exactly that.",
        context:
          "It sits alongside the other access rules: no parking on a crosswalk or sidewalk, none in a disabled space without a plate or placard, none in a bike lane. Connecticut's Vulnerable User's Law explicitly names wheelchair users among the people the road rules are meant to protect.",
        trap: "A curb cut with no driveway behind it looks like ordinary curb. It is there so somebody can get off the sidewalk.",
        excerptKey: "no-parking-distances",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, No-Parking Zones",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s5_33",
        topic: "signs",
        question:
          "You are on a divided highway and see a WRONG WAY sign facing you. What does the manual tell you to do?",
        choices: [
          "Stop and turn around - do not drive past the sign",
          "Continue to the next exit and leave the highway there",
          "Pull onto the shoulder and wait for police",
          "Reverse until you reach the last junction",
        ],
        correctIndex: 0,
        explanation:
          "Do not drive past it. Turn around. The sign exists at the exact point where continuing means facing oncoming traffic.",
        context:
          "WRONG WAY marks a one-way street, an expressway ramp, or the wrong side of a divided highway. Its companion, DO NOT ENTER, sits at the openings you should never take: exit ramps entered backwards, crossovers on divided roadways and the wrong end of one-way streets.",
        trap: "\"Carry on to the next exit\" is a reasonable instinct on a normal road and a head-on collision on this one.",
        excerptKey: "wrong-way",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Regulatory Signs",
        sourceUrl: hb(49),
      },
      {
        id: "ct_s5_34",
        topic: "impairment",
        question:
          "Which offense bars a person under 18 in Connecticut from being treated as a youthful offender?",
        choices: [
          "Speeding 20 mph over the limit",
          "Driving under the influence of alcohol or drugs",
          "Driving in breach of the passenger restrictions",
          "Using a cell phone while driving",
        ],
        correctIndex: 1,
        explanation:
          "Driving under the influence is one of the three. The others are negligent homicide with a motor vehicle and evading responsibility after a crash causing death or serious injury.",
        context:
          "A separate list covers offenses where a youth adjudicated as a youthful offender still has the record disclosed to the DMV so a suspension can be imposed: reckless driving, operating under suspension, evading responsibility after property damage or a non-serious injury, street racing, and disregarding a police signal to stop or speeding up to elude an officer.",
        trap: "Youthful offender status is not a general shield. The most serious driving offenses are carved out of it entirely.",
        excerptKey: "youthful-offender-excluded",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Youthful Offender Status",
        sourceUrl: hb(37),
      },
      {
        id: "ct_s5_35",
        topic: "rules",
        question:
          "You are 16 and driving with your permit on a quiet road. Do you have to be carrying the permit itself?",
        choices: [
          "No, as long as your instructor has their license",
          "Only when driving after dark",
          "Only on state highways",
          "Yes - a permit holder must carry it whenever they are operating a vehicle",
        ],
        correctIndex: 3,
        explanation:
          "The permit has to be on you every time you drive. The manual says so in the same paragraph that establishes that a permit is required before you begin practicing at all.",
        context:
          "Two other permit-stage requirements travel with it: the qualified trainer must sit in the front passenger seat, alert and ready to take over, and the safe operation of the vehicle is the responsibility of both of you. Failing to follow the permit rules can result in the permit being suspended.",
        trap: "It is an easy thing to leave at home and it turns a routine stop into a violation.",
        excerptKey: "permit-must-carry",
        sourceLabel: "Connecticut Driver's Manual - Chapter 1, First Time Drivers (All Ages)",
        sourceUrl: hb(6),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix the real thing uses: signs, signals, rules of the road, right of way, sharing the road and the Connecticut licensing rules, with no hints beyond what the DMV gives you.",
    questions: [
      {
        id: "ct_s6_01",
        topic: "signs",
        question: "What must you do at a stop sign with a stop line painted on the road?",
        choices: [
          "Stop before the line and wait until crossing vehicles and pedestrians have cleared",
          "Stop with the front wheels on the line",
          "Slow to under 5 mph and proceed if clear",
          "Stop only if traffic is approaching",
        ],
        correctIndex: 0,
        explanation:
          "A full stop before the line, then a wait until the crossing traffic and any pedestrians are clear. Only then do you pull forward.",
        context:
          "Where the stop line is missing, you stop at the sign, the crosswalk or the curb, whichever comes first. If your view is blocked once stopped, you may edge forward slowly until you can see, which lets crossing drivers see the nose of your car before you can see them.",
        trap: "Creeping through after a partial stop is the most commonly cited moving violation on Connecticut road tests.",
        excerptKey: "stop-sign-wait-until-clear",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Regulatory Signs",
        sourceUrl: hb(49),
      },
      {
        id: "ct_s6_02",
        topic: "rightOfWay",
        question:
          "You are entering a highway from a driveway and a car is approaching on the highway. Who yields?",
        choices: [
          "The approaching driver, because you are entering first",
          "Whoever is traveling more slowly",
          "You do",
          "Neither, since a driveway is not a public road",
        ],
        correctIndex: 2,
        explanation:
          "You yield to everything already on the highway. The duty belongs entirely to the vehicle coming out of the driveway.",
        context:
          "In a business or residence area there is a second duty first: stop before you cross the sidewalk and yield to any pedestrian on it. Only then do you deal with the roadway traffic.",
        trap: "Being closer to the intersection does not help. A private road never earns priority.",
        excerptKey: "driveway-yield-manual",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Right-of-Way",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s6_03",
        topic: "sharing",
        question:
          "A school bus with red lights flashing is stopped on the opposite side of a road divided by a concrete median. What must you do?",
        choices: [
          "Stop, because red lights always require a stop",
          "Stop, because the road has more than two lanes",
          "Slow to 15 mph and pass with caution",
          "You may proceed without stopping",
        ],
        correctIndex: 3,
        explanation:
          "A safety island or physical barrier between the roadways is the one exemption, and a concrete median is one. On the far side of it you may keep going.",
        context:
          "Nothing else releases you. Extra lanes do not, a painted median does not, and distance does not. On an undivided road every direction stops at least ten feet from the bus and stays stopped until the red lights go out and the children have completely left the road.",
        trap: "The exemption is narrow and specific, and applying it to any wide road is how most Connecticut school bus tickets happen.",
        excerptKey: "statute-school-bus-barrier",
        sourceLabel: "Connecticut General Statutes - Section 14-279, Vehicles to stop for school bus",
        sourceUrl: stat("248", "14-279"),
      },
      {
        id: "ct_s6_04",
        topic: "signals",
        question: "What does a steady red arrow mean?",
        choices: [
          "Yield to oncoming traffic and turn when clear",
          "You must stop and may not go in the direction of the arrow",
          "Turn only from the far lane",
          "Stop, then turn if the way is clear",
        ],
        correctIndex: 1,
        explanation:
          "A red arrow bars the movement completely. You wait until it goes out and a green arrow or a green light appears.",
        context:
          "Its whole point is to be different from a red ball, which in Connecticut allows a right turn after a full stop unless a sign forbids it. A red arrow allows no such turn.",
        trap: "Treating a red arrow like a red ball and turning right after stopping is a violation, and the arrow is usually there because of a conflicting movement you cannot see.",
        excerptKey: "red-arrow",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Arrows",
        sourceUrl: hb(47),
      },
      {
        id: "ct_s6_05",
        topic: "licensing",
        question:
          "A 16 year old has held a Connecticut license for eight months. Who may now ride with them that could not before?",
        choices: [
          "Members of their immediate family",
          "One friend of any age",
          "Any two licensed drivers",
          "Anybody, since the restrictions end at six months",
        ],
        correctIndex: 0,
        explanation:
          "Months seven through twelve add immediate family members to the list. Friends are still not allowed until the license is a year old.",
        context:
          "The first six months allow only a licensed driving instructor, the driver's parents or legal guardian with at least one licensed, or one person aged 20 or over who has held a license for four consecutive years without suspension. Alongside all of that runs the 11 p.m. to 5 a.m. curfew, the ban on any phone use, and the rule that passengers may never outnumber seat belts.",
        trap: "The relaxation at six months is about family, not friends. That distinction produces more confusion than any other Connecticut teen rule.",
        excerptKey: "gdl-second-six-months",
        sourceLabel: "Connecticut Driver's Manual - Chapter 1, Restrictions for 16- and 17-Year-Old Drivers",
        sourceUrl: hb(10),
      },
      {
        id: "ct_s6_06",
        topic: "rules",
        question:
          "You are turning right from a two-lane road. What does the manual warn against?",
        choices: [
          "Signalling before you slow down",
          "Checking the mirror before the turn",
          "Swinging wide to the left before you turn",
          "Turning into the nearest lane",
        ],
        correctIndex: 2,
        explanation:
          "Do not swing left before a right turn. The driver behind reads it as a lane change or a left turn and may try to pass you on the right, straight into your path.",
        context:
          "Swinging wide as you finish the turn is the other half of the same mistake, because drivers in the far lane are not expecting you there. Turn from the lane closest to the direction you are going, into the lane closest to the one you came from.",
        trap: "Setting up wide feels like it makes the turn easier. It is the maneuver a truck has to make and a car does not.",
        excerptKey: "right-turn-no-swing-wide",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Turning",
        sourceUrl: hb(26),
      },
      {
        id: "ct_s6_07",
        topic: "safety",
        question:
          "You have to slow down at a place where the driver behind you will not expect it. What does the manual suggest?",
        choices: [
          "Turn on your hazard flashers",
          "Sound your horn",
          "Signal a right turn",
          "Tap your brake pedal quickly three or four times",
        ],
        correctIndex: 3,
        explanation:
          "Three or four quick taps on the brake pedal flash the lights and give the driver behind an early warning that goes beyond an ordinary brake application.",
        context:
          "The manual names the situations: turning off a road with no separate turn lane, parking or turning just before an intersection, approaching an intersection where you expect to turn, and slowing for something in the road that the driver behind cannot see. Always slow as early as it is safe to.",
        trap: "Hazard flashers do not tell anyone you are slowing, and on many cars using them disables your turn signals.",
        excerptKey: "tap-brakes-three-or-four",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Signal When You Slow Down",
        sourceUrl: hb(41),
      },
      {
        id: "ct_s6_08",
        topic: "speed",
        question:
          "How much should you reduce speed on a wet Connecticut road, according to the manual?",
        choices: [
          "By about 5 mph",
          "By about 10 mph",
          "By about 20 mph",
          "By half",
        ],
        correctIndex: 1,
        explanation:
          "About 10 mph on a wet road. Packed snow means halving your speed, and ice means slowing to a crawl.",
        context:
          "The manual pairs the reductions with the reasons: tires grip well on a wet surface only up to about 35 mph before hydroplaning begins, shady spots and bridges freeze first, and ice near the freezing point is more slippery than colder ice because it goes wet.",
        trap: "Three separate reductions sit in one paragraph, and swapping the wet figure for the snow figure is the usual slip.",
        excerptKey: "wet-snow-ice-speeds",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Slippery Roads",
        sourceUrl: hb(27),
      },
      {
        id: "ct_s6_09",
        topic: "signs",
        question: "What does a diamond-shaped yellow sign tell you?",
        choices: [
          "A special condition or hazard is ahead - be ready to slow down or stop",
          "A rule you are legally required to obey",
          "Where you are and how far to the next town",
          "A service is available at the next exit",
        ],
        correctIndex: 0,
        explanation:
          "Yellow diamonds are warnings. They tell you about a condition or hazard ahead so you can adjust before you reach it.",
        context:
          "Orange diamonds carry the same warning function for temporary construction and maintenance conditions. Fluorescent yellow-green is used for pedestrian, bicycle and school warnings. Regulatory signs, which carry rules, are red, or black and white, and are square, rectangular or a special shape.",
        trap: "Shape and color together identify the family before you have read a word, which is what makes the system readable at speed.",
        excerptKey: "shape-diamond-warning",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Traffic Signs, Shapes",
        sourceUrl: hb(48),
      },
      {
        id: "ct_s6_10",
        topic: "impairment",
        question:
          "What does the Connecticut manual say about drinking and then driving?",
        choices: [
          "One drink is safe for an experienced driver",
          "Alcohol affects coordination before it affects judgment",
          "Any amount of alcohol can affect your driving, and the best advice is not to drive at all",
          "Food eaten with alcohol prevents impairment",
        ],
        correctIndex: 2,
        explanation:
          "Any amount can affect your driving, and the manual's stated best advice is that if you drink alcohol, you do not drive.",
        context:
          "Judgment goes first, which is why you cannot feel the impairment while it is happening. Alcohol also slows reflexes and reaction time, reduces how clearly you see, and makes judging distance, speed and the movement of other vehicles harder. New drivers are affected more than experienced ones because they are still learning the task.",
        trap: "Waiting until you feel impaired is the failure mode the manual describes as like a sunburn - by the time you notice, it is already too late.",
        excerptKey: "new-drivers-more-affected",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Drinking and Driving",
        sourceUrl: hb(35),
      },
      {
        id: "ct_s6_11",
        topic: "parking",
        question: "Which of these is on Connecticut's no-parking list?",
        choices: [
          "In a metered space after 6 p.m.",
          "Within 50 feet of a school entrance",
          "On any street with a posted speed above 35 mph",
          "On a bridge or overpass, or in a tunnel or underpass",
        ],
        correctIndex: 3,
        explanation:
          "Bridges, overpasses, tunnels and underpasses are all on the list. So are intersections, crosswalks and sidewalks, bike lanes, railroad tracks and the roadside of a parked car.",
        context:
          "The distances go with the places: 25 feet from a stop sign, 25 feet from a pedestrian safety zone, 10 feet from a hydrant, no more than one foot from the curb, and never on the wrong side of the street. Colored curb markings and local signs can add restrictions of their own.",
        trap: "Structures with no curb feel like ordinary road. There is nowhere for a stopped car to be safe on them.",
        excerptKey: "no-parking-places",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, No-Parking Zones",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s6_12",
        topic: "emergencies",
        question:
          "You need to avoid a sudden obstacle. What are the three options the manual gives you?",
        choices: [
          "Brake, sound the horn, or flash your lights",
          "Stop, turn or speed up",
          "Steer left, steer right or brake",
          "Brake, downshift or use the parking brake",
        ],
        correctIndex: 1,
        explanation:
          "Stop, turn or speed up. The manual lists all three because drivers under pressure often freeze on the brakes when turning or accelerating would have worked better.",
        context:
          "In most cases you can turn faster than you can stop, so turning is worth considering. With ABS you can brake and steer at once. Speeding up is sometimes right, for instance when something is about to hit you from the side or behind and there is room in front. Running off the road beats a head-on collision.",
        trap: "Braking is the reflex answer and is only one third of the toolkit.",
        excerptKey: "three-collision-options",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Avoiding Collisions",
        sourceUrl: hb(42),
      },
      {
        id: "ct_s6_13",
        topic: "rules",
        question:
          "How does Connecticut law describe the following distance you must keep?",
        choices: [
          "No closer than is reasonable and prudent for the speed, traffic, road and weather",
          "A fixed two seconds at any speed",
          "One car length for every 10 mph",
          "A fixed 100 feet on any highway",
        ],
        correctIndex: 0,
        explanation:
          "Section 14-240 sets a standard rather than a number: no closer than is reasonable and prudent given the speed of the vehicles, the traffic, the condition of the road and the weather.",
        context:
          "The manual turns that standard into something you can count. Three seconds on a dry road, four when it is slippery, when you are following a motorcycle or a vehicle whose driver cannot see you, in poor visibility, when towing, when being tailgated, or behind an emergency vehicle. Three seconds is a hard floor behind a truck.",
        trap: "The statute has no number, so drivers assume there is no rule. It is a reasonableness test, and a rear-end collision is strong evidence you failed it.",
        excerptKey: "statute-following-distance",
        sourceLabel: "Connecticut General Statutes - Section 14-240, Vehicles to be driven reasonable distance apart",
        sourceUrl: stat("248", "14-240"),
      },
      {
        id: "ct_s6_14",
        topic: "signals",
        question:
          "What must you do when the light turns green and you are first in the queue?",
        choices: [
          "Proceed immediately, since the crossing traffic now has a red",
          "Wait three seconds before moving",
          "Allow crossing traffic to clear the intersection before you go",
          "Sound the horn to alert the crossing traffic",
        ],
        correctIndex: 2,
        explanation:
          "Let the intersection empty first. The manual is explicit that if you were stopped and the light turns green, you allow crossing traffic to clear before going ahead.",
        context:
          "The moment just after a light turns green is when drivers on the cross street are most likely to have hurried through on their own change. The manual tells you to look left and right at every intersection even when the other traffic has a red or a stop sign.",
        trap: "The green is permission, not proof that everyone else has stopped.",
        excerptKey: "green-light-clear-intersection",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Traffic Lights and Signals",
        sourceUrl: hb(47),
      },
      {
        id: "ct_s6_15",
        topic: "sharing",
        question:
          "You are turning left and a motorcycle is approaching with its turn signal flashing. What should you do?",
        choices: [
          "Turn, because the signal shows the rider is leaving your path",
          "Turn, but more slowly than usual",
          "Sound your horn and turn",
          "Wait until you can see the motorcycle actually beginning to turn",
        ],
        correctIndex: 3,
        explanation:
          "Wait for the machine to start turning. Motorcycle signals often do not cancel themselves, so a flashing indicator may be left over from a turn several streets back.",
        context:
          "The manual raises this twice, once under motorcycles and once under space to cross, where it makes the general point that you should never assume you can turn just because an approaching vehicle has a signal on. Nearly 40 percent of the crashes between a motorcycle and another vehicle are caused by that vehicle turning left across the rider's path.",
        trap: "The signal looks like information. Until the bike changes direction it is only a light.",
        excerptKey: "motorcycle-wait-until-turning",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Motorcycles",
        sourceUrl: hb(20),
      },
      {
        id: "ct_s6_16",
        topic: "licensing",
        question:
          "Connecticut requires 40 hours of behind-the-wheel training for a 16 or 17 year old. How may those hours be obtained?",
        choices: [
          "Only from a licensed commercial driving school",
          "By any combination of professional instruction and home training",
          "Only from a parent or legal guardian",
          "Only through a secondary school program",
        ],
        correctIndex: 1,
        explanation:
          "Any combination of driving school instruction and home training counts, as long as the total reaches 40 hours.",
        context:
          "Home training has its own rules about who may teach: a parent, foster parent, legal guardian, grandparent or the spouse of a married minor, and failing all of those, an uncle, aunt, brother, sister or stepparent, provided the person is at least 20 and has held an unsuspended license for four years. The DMV recommends 100 hours of supervised practice before driving solo, well above the legal minimum.",
        trap: "The 40 hours is a floor, not a target. The state's own advice is that it is not enough.",
        excerptKey: "forty-hours-behind-the-wheel",
        sourceLabel: "Connecticut Driver's Manual - Chapter 1, Driver Education Requirements",
        sourceUrl: hb(9),
      },
      {
        id: "ct_s6_17",
        topic: "safety",
        question:
          "When may you use your horn in Connecticut, according to the manual?",
        choices: [
          "To warn someone when it will help prevent an accident",
          "To let a friend know you have seen them",
          "To tell another driver they have made a mistake",
          "To encourage a slow driver to move over",
        ],
        correctIndex: 0,
        explanation:
          "The horn is a warning device. A light tap where there is no immediate danger, a sharp blast where there is, and nothing else.",
        context:
          "The manual lists what not to use it for: encouraging someone to drive faster or get out of the way, pointing out somebody's error, greeting a friend, around blind pedestrians, and when approaching horses. The last two are legal duties as well as courtesies.",
        trap: "Sounding the horn at a blind pedestrian or a horse is not just discouraged. Around a horse it is illegal.",
        excerptKey: "horn-when-not-to-use",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Horn",
        sourceUrl: hb(40),
      },
      {
        id: "ct_s6_18",
        topic: "signs",
        question:
          "A sign shows two lanes merging into one. Who is responsible for the merge?",
        choices: [
          "The driver in the lane that ends",
          "The driver already in the continuing lane",
          "Drivers in both lanes",
          "The driver traveling more slowly",
        ],
        correctIndex: 2,
        explanation:
          "Both. The manual's merge sign entry says drivers in both lanes are responsible for merging smoothly.",
        context:
          "That shared duty sits alongside the manual's other merging advice: a four-second opening to move into, use the ramp to reach the speed of traffic, move over out of the right-hand lane when you can to let people on, and never cross several lanes at once from an on-ramp.",
        trap: "Deciding the other lane must yield is how merges seize up. The sign assigns the duty to both.",
        excerptKey: "merge-sign",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Warning Signs",
        sourceUrl: hb(51),
      },
      {
        id: "ct_s6_19",
        topic: "rightOfWay",
        question:
          "A fire engine is approaching with its siren and lights on while you are halfway through an intersection. What should you do?",
        choices: [
          "Stop where you are",
          "Reverse out of the intersection",
          "Turn left to clear the path",
          "Drive through the intersection first, then pull right and stop",
        ],
        correctIndex: 3,
        explanation:
          "Clear the intersection, then pull over to the right and stop. Stopping inside it blocks the route you are trying to leave open.",
        context:
          "Once you are stopped you stay stopped until the emergency vehicle has passed, unless a state or local police officer or a firefighter tells you otherwise. Separately, if a vehicle is already pulled over on the highway ahead, the Move Over law asks you to slow below the posted limit and shift over a lane where it is safe.",
        trap: "The instinct to stop the instant you hear a siren is right almost everywhere except inside a junction.",
        excerptKey: "emergency-vehicle-clear-intersection",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Right-of-Way",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s6_20",
        topic: "rules",
        question:
          "The Connecticut manual says you should be able to see a certain distance ahead before starting a pass on a two-lane road. What is it?",
        choices: [
          "About 500 feet",
          "About one-third of a mile",
          "About half a mile",
          "About one mile",
        ],
        correctIndex: 1,
        explanation:
          "One-third of a mile, or about ten seconds of view. Where a hill or a curve blocks your view within that distance, you do not begin the pass.",
        context:
          "The figure connects to the passing arithmetic: at 55 mph you need ten seconds, in which you and an oncoming car each travel over 800 feet, so you need over 1,600 feet of clear road. That is about a third of a mile, and it is why no-passing zones are drawn by sight distance.",
        trap: "Judging by whether the oncoming car looks close is unreliable at these distances - a car far away appears to be standing still.",
        excerptKey: "no-pass-within-third-of-mile",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Visibility",
        sourceUrl: hb(26),
      },
      {
        id: "ct_s6_21",
        topic: "signals",
        question:
          "What does a solid yellow line on your side of the center, with a dashed yellow line on the other, tell you?",
        choices: [
          "You may not pass, but drivers on the other side may",
          "Neither direction may pass",
          "Both directions may pass",
          "The road becomes one-way ahead",
        ],
        correctIndex: 0,
        explanation:
          "Passing is permitted on the side with the broken line and prohibited on the side with the solid line. The line on your side is the one that governs you.",
        context:
          "The other center-line patterns: dashed yellow on both sides means passing is allowed either way, and double solid yellow means neither may pass, though you may still cross to turn left into or out of an alley, private road, driveway or street.",
        trap: "Reading the far line rather than your own is the classic mistake, and it puts you into oncoming traffic in exactly the place the marking says not to.",
        excerptKey: "dashed-alongside-solid-yellow",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Center Lines",
        sourceUrl: hb(46),
      },
      {
        id: "ct_s6_22",
        topic: "speed",
        question:
          "Which of these can get you a speeding conviction in Connecticut even though you never exceeded a posted number?",
        choices: [
          "Driving slower than the flow of traffic",
          "Driving with a passenger under 16",
          "Driving at a speed greater than is reasonable for the width, traffic, intersections and weather",
          "Driving on a road with no posted limit at all",
        ],
        correctIndex: 2,
        explanation:
          "Section 14-218a makes an unreasonable speed an offense in its own right, judged against the width of the road, the traffic, the use of the highway, the intersections and the weather.",
        context:
          "It is the rule behind the manual's warning that limits are posted for ideal conditions and that you can be ticketed for traveling too fast for road conditions. In a signed school zone the court adds a fee equal to the whole fine for a violation of either section 14-218a or the speeding section.",
        trap: "Driving slower than the flow is a separate concern the manual raises for safety, but it is not this offense.",
        excerptKey: "statute-reasonable-speed",
        sourceLabel: "Connecticut General Statutes - Section 14-218a, Traveling unreasonably fast",
        sourceUrl: stat("248", "14-218a"),
      },
      {
        id: "ct_s6_23",
        topic: "sharing",
        question:
          "Which vehicles must stop at every railroad grade crossing in Connecticut?",
        choices: [
          "All vehicles",
          "Only vehicles towing a trailer",
          "Only vehicles over 26,000 pounds",
          "Buses carrying passengers, school buses, and vehicles with cargo tanks or hazardous materials",
        ],
        correctIndex: 3,
        explanation:
          "Section 14-250 names them: commercial vehicles carrying passengers, service buses, school buses and vehicles with a cargo tank or hazardous materials. They stop between fifteen and fifty feet from the nearest rail, look and listen both ways, and only then cross.",
        context:
          "For everyone else the duty is to slow down, look and listen, and to yield to any train - a crossbuck has the same meaning as a yield sign. The manual asks you to leave extra room behind any vehicle that has to stop at crossings so it can stop and start again safely.",
        trap: "Following a school bus closely toward a crossing is the practical failure. That bus is going to stop and you have to be ready for it.",
        excerptKey: "statute-commercial-railroad-stop",
        sourceLabel: "Connecticut General Statutes - Section 14-250, Certain motor vehicles to stop at railroad crossing",
        sourceUrl: stat("248", "14-250"),
      },
      {
        id: "ct_s6_24",
        topic: "safety",
        question:
          "What does the manual tell you to do before you get into a car you are about to reverse?",
        choices: [
          "Check behind the vehicle, because children and small objects cannot be seen from the driver's seat",
          "Adjust the mirrors to their widest setting",
          "Sound the horn once",
          "Switch on the hazard lights",
        ],
        correctIndex: 0,
        explanation:
          "Walk round and look. Small children and low objects sit entirely below the sight line from the driver's seat, and no mirror or camera makes that certain.",
        context:
          "Once you are moving, turn and look over your right shoulder through the rear window rather than relying on mirrors, back no faster than a slow walk, stop occasionally to check, and use somebody outside the car to guide you where you can. Do as little reversing as possible - in a parking lot, find a space you can drive out of forwards.",
        trap: "A reversing camera shows a cone behind the bumper. It does not show a child about to run into it.",
        excerptKey: "backing-look-over-right-shoulder",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Backing",
        sourceUrl: hb(26),
      },
      {
        id: "ct_s6_25",
        topic: "impairment",
        question:
          "What suspension follows a first failed breath test for a Connecticut driver aged 21 or over?",
        choices: [
          "No suspension until conviction",
          "Seven days",
          "Thirty days",
          "At least 45 days, plus an ignition interlock device for at least six months",
        ],
        correctIndex: 3,
        explanation:
          "At least 45 days of suspension, with an ignition interlock device required for at least six months as a condition of getting the license back. More prior offenses mean longer.",
        context:
          "For a driver under 21 the same 45-day suspension follows a result of .02 or higher, but the interlock runs at least a year. Refusing the test also brings at least 45 days and at least a year of interlock, whatever your age. The penalties come from both the courts and the Commissioner of Motor Vehicles.",
        trap: "The suspension is administrative and does not wait for a conviction.",
        excerptKey: "dui-45-day-suspension",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Alcohol and the Law",
        sourceUrl: hb(35),
      },
      {
        id: "ct_s6_26",
        topic: "parking",
        question:
          "You are parking parallel with traffic behind you. What does the manual suggest?",
        choices: [
          "Signal, pull alongside the space and let the following vehicles pass before you park",
          "Stop in the lane and reverse straight in",
          "Park nose-in and reposition later",
          "Turn on the hazard lights and take your time",
        ],
        correctIndex: 0,
        explanation:
          "Signal, pull up next to the space, and let the traffic behind go by before you start the maneuver. It removes the pressure that makes the parking worse.",
        context:
          "It sits in the manual's space behind section, alongside finding somewhere out of traffic to pick up or drop passengers, pulling over to let a queue past when you are the slow vehicle, and always checking behind before you slow or stop.",
        trap: "Starting the maneuver with a queue on your bumper is how people end up too far from the curb, which is both a violation and a road-test failure.",
        excerptKey: "being-tailgated",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Space Behind",
        sourceUrl: hb(24),
      },
      {
        id: "ct_s6_27",
        topic: "emergencies",
        question:
          "What is the correct response when your car begins to skid on ice?",
        choices: [
          "Brake steadily to slow the vehicle",
          "Turn the wheel away from the direction you want to go",
          "Stay off the brake and steer toward where you want the car to go",
          "Shift into neutral and coast",
        ],
        correctIndex: 2,
        explanation:
          "Off the brake, steer where you want to end up. Braking during a skid does nothing useful until the car has slowed and can easily make things worse.",
        context:
          "Straightening out is where the second half of the technique matters: as the car comes back into line you turn the wheel the other way, or you overshoot and start a fresh skid in the opposite direction. Keep correcting left and right until the car tracks again.",
        trap: "Everyone remembers steering into the skid and forgets the counter-steer, which is what turns a recovery into a spin.",
        excerptKey: "skid-steer-where-you-want-to-go",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Dealing with Skids",
        sourceUrl: hb(42),
      },
      {
        id: "ct_s6_28",
        topic: "signs",
        question:
          "You see a white rectangular sign with a black arrow pointing right and the words ONE WAY. What does it require?",
        choices: [
          "Turn right at the next junction",
          "Traffic merges from the right",
          "The right lane is closed",
          "Travel only in the direction of the arrow",
        ],
        correctIndex: 3,
        explanation:
          "Only in the direction the arrow points. It marks one-way streets and driveways, and it is a rule rather than guidance.",
        context:
          "Its enforcement partners are DO NOT ENTER at the wrong end of a one-way street and WRONG WAY if you have already turned in. Black and white regulatory signs carry rules just as red ones do; other black and white signs are route markers and appear among the guide signs.",
        trap: "The arrow describes the direction of the street, not a movement you have to make at the next corner.",
        excerptKey: "one-way-sign",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Regulatory Signs",
        sourceUrl: hb(50),
      },
      {
        id: "ct_s6_29",
        topic: "licensing",
        question:
          "You fail the Connecticut knowledge test. When can you try again, and what does it cost?",
        choices: [
          "After seven days, paying the $40 exam fee again",
          "The same day, with no further fee",
          "After 30 days, with no further fee",
          "After 14 days, paying a $19 fee",
        ],
        correctIndex: 0,
        explanation:
          "Seven days, and you pay the $40 fee again when you reschedule the appointment. A failed vision test can be rescheduled immediately.",
        context:
          "The road test has its own rule: fail that and you wait at least fourteen days and pay another $40. Both tests are by appointment only, booked and paid for online, and there is no walk-in knowledge testing anywhere in the state.",
        trap: "Turning up expecting to retake it the same afternoon is a wasted trip, and the fee is per attempt.",
        excerptKey: "knowledge-test-25-20",
        sourceLabel: "CT DMV - Take the knowledge and vision tests",
        sourceUrl: KNOWLEDGE,
      },
      {
        id: "ct_s6_30",
        topic: "rightOfWay",
        question:
          "A pedestrian is already halfway across a marked crosswalk when your light turns green. What does the law require?",
        choices: [
          "You may proceed once they have passed the center line",
          "They keep the right of way over all vehicles until they reach the far curb or a safety zone",
          "You may proceed slowly behind them",
          "They must return to the curb they started from",
        ],
        correctIndex: 1,
        explanation:
          "Section 14-300 gives a pedestrian who has started across the right of way over every vehicle, turning ones included, until they reach the opposite curb or a safety zone.",
        context:
          "The manual reaches the same place from the driver's side: yield at all times to pedestrians in a marked or unmarked crosswalk, and yield to cyclists and pedestrians where a bicycle path crosses the road. Someone with a white cane or a guide dog has absolute right of way, and at a signalized intersection you stay stopped until they are out of the road even on a green.",
        trap: "Edging round behind a walker is treated as passing them, and it takes away the space they were relying on.",
        excerptKey: "statute-pedestrian-until-opposite-curb",
        sourceLabel: "Connecticut General Statutes - Section 14-300, Crosswalks",
        sourceUrl: stat("249", "14-300"),
      },
    ],
  },
];
