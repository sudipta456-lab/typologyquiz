import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Arizona Driver License Manual and
// Customer Service Guide (form 99-0117, revised March 2026), published by the
// Arizona Department of Transportation Motor Vehicle Division, plus two
// azdot.gov MVD pages - the permit test page and the Teen Driver Guide to the
// Class G permit and licence - and Arizona Revised Statutes Title 28 for the
// handful of rules the manual states only as a table, or does not state at all.
//
// azdot.gov sits behind a Cloudflare challenge that refuses automated clients,
// so the manual PDF and both MVD pages were read from Internet Archive captures
// of those same official URLs (the manual from 19 July 2026, the permit test
// page from 8 March 2026, the teen guide from 20 June 2026). Every link below
// points at the live official page, not the archive.
//
// Four gaps between the manual and the statute matter enough to name here.
// The manual's speed table gives 55 mph for "open highways or city freeways",
// while A.R.S. 28-701(B)(3) sets the prima facie limit for unposted roads
// outside a business or residential district at 65 mph - these questions ask
// only about the two figures both sources agree on, 15 mph at a school crossing
// and 25 mph in a business or residential district. The manual never mentions
// criminal speeding at all, though A.R.S. 28-701.02 makes 35 mph at a school
// crossing a class 3 misdemeanour. The manual is silent on seat belts being
// secondary enforcement with a $10 cap, which A.R.S. 28-909 states plainly.
// And the manual's under-21 section says a licence "will be suspended for 2
// years" for any trace of alcohol, while A.R.S. 28-3320 attaches that two-year
// suspension to drivers under eighteen - so these questions test only the rule
// both agree on, that any alcohol concentration at all is disqualifying.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads MVD's own
// authoritative wording on the state's site.
const HB = "https://apps.azdot.gov/files/mvd/mvd-forms-lib/99-0117.pdf";
const PT = "https://azdot.gov/mvd/services/driver-license-ID/permit-test";
const TD =
  "https://azdot.gov/mvd/services/driver-services/teen-drivers/permit-and-license-requirements";
const ARS_701_02 = "https://www.azleg.gov/ars/28/00701-02.htm";

export const arizonaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Arizona Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Arizona: what the shapes and colours mean, who yields to whom, and the handful of numbers MVD's 30-question permit test expects you to know cold.",
    questions: [
      {
        id: "az_s1_01",
        topic: "signs",
        question:
          "You come to an eight-sided red sign at an intersection. What does Arizona require you to do?",
        choices: [
          "Come to a complete stop, then go when the way is clear",
          "Slow to walking pace and continue if nothing is coming",
          "Yield only to vehicles already inside the intersection",
          "Stop only when a pedestrian is waiting at the kerb",
        ],
        correctIndex: 0,
        explanation:
          "The octagon is reserved for one message and one only: a full stop. Arizona's manual states it in exactly those words - this shape means come to a complete stop.",
        context:
          "Arizona teaches signs by shape first and wording second, because in a dust storm or heavy rain the outline may be all you can make out. The octagon is STOP, the downward triangle is YIELD, the yellow diamond warns of a hazard ahead, the pentagon marks a school crossing, and the circle warns of a railway. Learning the shape system beats memorising individual signs, since the test can show you one you have never met.",
        trap:
          "A rolling stop is not a stop. The wheels have to stop turning, however empty the cross street looks.",
        excerptKey: "sign-octagon",
        sourceLabel: "Arizona Driver License Manual - Section 3, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "az_s1_02",
        topic: "signals",
        question: "A traffic light ahead of you turns steady red. Where must you stop?",
        choices: [
          "Level with the signal head so you can watch it change",
          "Anywhere within one car length of the signal",
          "Before you reach the intersection, stop line or crosswalk",
          "Only if a vehicle is approaching on the cross street",
        ],
        correctIndex: 2,
        explanation:
          "Arizona puts your stopping point at whichever of those three you meet first, and you stay there for as long as the light stays red.",
        context:
          "Arizona's steady signals run red, yellow and green, and they bind bicycles and mopeds as much as cars. A steady red means stop and stay stopped; the two exceptions are a right turn after a complete stop where no sign forbids it, and a left turn from a one-way street onto another one-way street. An officer directing traffic outranks the signal in every case.",
        trap:
          "Creeping forward to see the signal head puts your bumper inside the crosswalk, which is exactly where pedestrians are entitled to be.",
        excerptKey: "red-complete-stop",
        sourceLabel: "Arizona Driver License Manual - Section 3, Signal Lights",
        sourceUrl: HB,
      },
      {
        id: "az_s1_03",
        topic: "speed",
        question:
          "A residential street in Arizona carries no speed limit signs at all. What speed applies?",
        choices: ["15 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 1,
        explanation:
          "With nothing posted, business and residential districts default to 25 mph. No sign does not mean no limit.",
        context:
          "Arizona lists the speeds you must observe when no limit is posted: 15 mph approaching a school crosswalk, 25 mph in any business or residential district, and higher figures out on open highways and freeways. A posted white sign always overrides the default, and a posted limit is a maximum rather than a target - conditions can make a legal speed unsafe.",
        trap:
          "Plenty of Arizona neighbourhoods post 25 mph anyway, which leads drivers to assume an unsigned street has no limit. It has the same one.",
        commonlyMissed: true,
        excerptKey: "speed-defaults",
        sourceLabel: "Arizona Driver License Manual - Section 3, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "az_s1_04",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection with no signs and no signals at the same moment. Who goes first?",
        choices: [
          "The driver on the right, after both have stopped",
          "Whoever signals their intention first",
          "The car going straight rather than the one turning",
          "The larger vehicle, because it needs more room",
        ],
        correctIndex: 0,
        explanation:
          "Arizona treats an uncontrolled intersection as a four-way stop. Both drivers stop, and then the one on the left yields to the one on the right.",
        context:
          "Where an intersection has no lights, no stop signs and no yield signs - or where the signal has gone dark - Arizona tells you to handle it exactly as you would a four-way stop. That means a complete stop before entering, then proceeding when the roadway is clear. The left-yields-to-right rule only decides a genuine tie between two drivers who arrived at about the same moment.",
        trap:
          "The stop is not optional just because the intersection is quiet. Arizona wants a complete stop first, then the right-of-way question.",
        excerptKey: "uncontrolled-left-yields",
        sourceLabel: "Arizona Driver License Manual - Section 3, Uncontrolled Intersections",
        sourceUrl: HB,
      },
      {
        id: "az_s1_05",
        topic: "safety",
        question:
          "You are driving four friends, two of them aged fourteen and sitting in the back. What does Arizona's belt law require of you as the driver?",
        choices: [
          "Nothing beyond your own belt - passengers answer for themselves",
          "Only the front seat passenger has to be belted",
          "Every occupant of the car has to be belted, whatever their age",
          "You must require every passenger under sixteen to buckle up",
        ],
        correctIndex: 3,
        explanation:
          "Arizona puts the duty on the driver for anyone under sixteen, wherever they are sitting. Front seat occupants of any age must also be belted.",
        context:
          "Arizona's belt law has two halves that people merge into one. Each front seat occupant must have the lap and shoulder belt fastened while the vehicle is moving, and separately the driver must require every passenger under sixteen to buckle up - that half reaches into the back seat. Adults riding in the back are not covered by the belt statute at all.",
        trap:
          "Because adults in the back are outside the law, drivers assume teenagers are too. Under sixteen is the driver's responsibility in every seat.",
        excerptKey: "seatbelt-under-16",
        sourceLabel: "Arizona Driver License Manual - Section 1, Arizona's Safety Belt Law",
        sourceUrl: HB,
      },
      {
        id: "az_s1_06",
        topic: "signs",
        question: "What does a downward-pointing triangular sign require of you?",
        choices: [
          "Stop and wait for a gap, every time",
          "Nothing - it is a warning of a hazard ahead",
          "Reduce speed to 15 mph until past the sign",
          "Yield the right-of-way to cross traffic or merging traffic",
        ],
        correctIndex: 3,
        explanation:
          "The downward triangle is Arizona's yield shape. You give way to traffic crossing your path or merging into it, stopping only if that is what yielding takes.",
        context:
          "A yield sign asks you to slow to a speed reasonable for what is happening ahead and give way to anyone already in the intersection or approaching so closely as to be an immediate hazard. It is different from a stop sign in that a stop is not automatically required - but if you roll past a yield sign and collide with someone in the intersection, that collision is itself evidence you failed to yield.",
        trap:
          "Treating yield as stop is safe but slow; treating it as a free pass is what causes the crash. Yield means give way, and sometimes giving way means stopping.",
        excerptKey: "sign-triangle",
        sourceLabel: "Arizona Driver License Manual - Section 3, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "az_s1_07",
        topic: "signals",
        question: "You approach an intersection where a red light is flashing. What does it mean?",
        choices: [
          "Slow down and proceed if the way is clear",
          "It means the same as a stop sign - full stop, then go when clear",
          "The signal is faulty, so treat it as a green light",
          "Stop and wait for the light to turn steady green",
        ],
        correctIndex: 1,
        explanation:
          "Arizona equates a flashing red with a stop sign exactly. Come to a full stop, then continue with caution once the roadway is clear.",
        context:
          "Arizona pairs the two flashing colours as opposites. Flashing red is a stop sign - full stop required. Flashing yellow is a caution - slow down and proceed if the way is clear, no stop required. Running a flashing red is treated as running a red light, which in Arizona brings a mandatory Traffic Survival School order on conviction.",
        trap:
          "Flashing red and flashing yellow look similar at a distance at night. Getting them backwards means either an unnecessary stop or an illegal one.",
        excerptKey: "flashing-red-light",
        sourceLabel: "Arizona Driver License Manual - Section 3, Flashing Red Light",
        sourceUrl: HB,
      },
      {
        id: "az_s1_08",
        topic: "rules",
        question:
          "You want to overtake a car travelling in the same direction on a two-lane road. Which side do you pass on?",
        choices: [
          "The left",
          "The right, so oncoming traffic is never a factor",
          "Whichever side has more room at the time",
          "The left only if the other driver waves you through",
        ],
        correctIndex: 0,
        explanation:
          "Arizona's default is to pass on the left. Passing on the right is allowed only in a short list of specific situations.",
        context:
          "To pass, you signal, move into the left lane, and make sure you have room to get completely in front without endangering oncoming traffic. You return to the right lane once you can see the whole front of the car you passed in your mirror, and only after a shoulder check and a signal. The same procedure covers passing motorcycles, bicycles and mopeds.",
        trap:
          "Pulling back in as soon as the other car disappears from your mirror cuts them off. Wait until you can see the entire front of the vehicle.",
        excerptKey: "passing-on-the-left",
        sourceLabel: "Arizona Driver License Manual - Section 2, Passing",
        sourceUrl: HB,
      },
      {
        id: "az_s1_09",
        topic: "sharing",
        question:
          "You are overtaking a cyclist riding in the same direction on an Arizona road. How much room must you leave?",
        choices: [
          "Whatever the lane allows",
          "A minimum safe distance of three feet",
          "One full lane, always",
          "Six feet, measured from your mirror",
        ],
        correctIndex: 1,
        explanation:
          "Arizona sets a three-foot minimum when you pass a cyclist going your way, and it is a legal minimum rather than a courtesy.",
        context:
          "Cyclists in Arizona obey the same traffic laws as drivers and hold the right-of-way under the same conditions. They are required to ride near the right side of the road but may legally move left to turn, to avoid a hazard, to pass, or when the lane is too narrow to share safely. Three feet is the floor, not the target - more room is better, and if you cannot give three feet you wait.",
        trap:
          "Sounding your horn as you pass feels like a warning but Arizona says it is unsafe - it can startle a rider into a crash.",
        excerptKey: "bicycle-3-feet-passing",
        sourceLabel: "Arizona Driver License Manual - Section 4, Sharing the Road with a Bicyclist",
        sourceUrl: HB,
      },
      {
        id: "az_s1_10",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Arizona?",
        choices: [
          "You may park alongside it if you stay with the vehicle",
          "Five feet",
          "No closer than fifteen feet",
          "Thirty feet",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen feet is the Arizona figure. It applies whether or not anyone is in the car.",
        context:
          "Arizona's prohibited-parking list is a set of distances worth memorising as a group: fifteen feet from a fire hydrant, twenty feet from a crosswalk at an intersection, and fifty feet from a railway crossing. Also off limits are sidewalks, crosswalks, the inside of an intersection, driveways, bridges, tunnels and freeways except in an emergency.",
        trap:
          "Neighbouring states use ten feet for hydrants, so a driver who learned elsewhere parks four feet too close and gets ticketed.",
        excerptKey: "park-hydrant-15",
        sourceLabel: "Arizona Driver License Manual - Section 2, Prohibited Parking",
        sourceUrl: HB,
      },
      {
        id: "az_s1_11",
        topic: "signals",
        question:
          "Your light turns green but a car is still finishing its turn inside the intersection. What do you do?",
        choices: [
          "Sound your horn to move it along",
          "Yield to it - a green light does not clear traffic already in the intersection",
          "Proceed, because your green gives you the right-of-way over everything",
          "Reverse to give it room",
        ],
        correctIndex: 1,
        explanation:
          "Arizona's green means go only if the roadway is clear, and it tells you specifically to yield to any vehicle already in the intersection when the light changed.",
        context:
          "Green is permission to proceed, not a guarantee that the way is safe. Arizona asks you to check left and right before entering on a green, precisely because red-light runners exist. Pedestrians already crossing keep their right-of-way when your light turns green too.",
        trap:
          "Drivers treat green as an instruction rather than a permission. The manual's own phrasing is Green Means Go, if Clear.",
        excerptKey: "green-yield-in-intersection",
        sourceLabel: "Arizona Driver License Manual - Section 3, Signal Lights",
        sourceUrl: HB,
      },
      {
        id: "az_s1_12",
        topic: "speed",
        question:
          "Portable signs are out on the road for a school crossing. What is the maximum speed from the first sign until you are past the school crossing sign?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 0,
        explanation:
          "Fifteen miles per hour, and it applies across the whole stretch between the portable signs rather than at the crosswalk alone.",
        context:
          "Arizona marks school crossings with portable signs that school staff put out when school is in session and remove within an hour of the session ending. Between those signs the limit is 15 mph, passing another vehicle is prohibited, and you must come to a complete stop whenever any person is in the crosswalk. When the portable signs are not in place, the normal limit for the area applies again.",
        trap:
          "Slowing only as you reach the crosswalk is too late - the 15 mph zone starts at the first portable sign, which can be hundreds of feet earlier.",
        commonlyMissed: true,
        excerptKey: "school-crossing-15",
        sourceLabel: "Arizona Driver License Manual - Section 3, School Crossing Sign",
        sourceUrl: HB,
      },
      {
        id: "az_s1_13",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing at a corner where no crosswalk is painted on the road. What is your duty?",
        choices: [
          "None - without paint there is no crosswalk",
          "Sound the horn and continue",
          "Yield the right-of-way, because unmarked crosswalks count",
          "Yield only if the pedestrian is already past the centreline",
        ],
        correctIndex: 2,
        explanation:
          "Arizona requires you to yield in any crosswalk, marked or unmarked. The paint changes the visibility, not the right.",
        context:
          "An unmarked crosswalk exists at an intersection wherever the sidewalks would connect, even with no lines on the road. Arizona also tells you to keep yielding to pedestrians already in the intersection when your light turns green, and forbids passing a vehicle that has stopped for a pedestrian even when your own lane looks clear.",
        trap:
          "The absence of white lines is the whole trap here. Most crosswalks in a residential area are never painted at all.",
        excerptKey: "pedestrian-crosswalk",
        sourceLabel: "Arizona Driver License Manual - Section 3, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "az_s1_14",
        topic: "safety",
        question:
          "You have pulled completely off the highway to wait out a severe dust storm. What should you do with your lights?",
        choices: [
          "Leave the headlights on so others can see you",
          "Turn your lights off and take your foot off the brake",
          "Switch on your hazard flashers and keep the brake pressed",
          "Turn on high beams to cut through the dust",
        ],
        correctIndex: 1,
        explanation:
          "Arizona wants your lights off and your foot off the brake pedal once you are stopped clear of the road, so no light of yours is visible to a driver still moving in the dust.",
        context:
          "Pull Aside, Stay Alive is Arizona's dust storm rule and it runs against instinct. Check traffic, slow down, and get completely off the highway as early as you can - not once visibility is already gone. Stop as far right as possible, never in a travel lane or the emergency lane, turn everything off, stay belted in the vehicle, and wait for the storm to pass.",
        trap:
          "Leaving lights or brake lights on is the classic fatal error: drivers in near-zero visibility steer towards any light, assuming it is a car still moving on the road.",
        commonlyMissed: true,
        excerptKey: "dust-storm-lights-off",
        sourceLabel: "Arizona Driver License Manual - Section 5, Dust Storms",
        sourceUrl: HB,
      },
      {
        id: "az_s1_15",
        topic: "signs",
        question: "A yellow diamond-shaped sign is coming up. What is it telling you?",
        choices: [
          "A speed limit change is in force",
          "A school zone begins here",
          "Parking is prohibited beyond this point",
          "There is a possible danger ahead",
        ],
        correctIndex: 3,
        explanation:
          "Yellow diamonds are Arizona's warning family - they flag a hazard ahead so you can adjust before you reach it.",
        context:
          "Colour and shape carry the message before the wording does. Yellow diamonds warn, white rectangles with black letters regulate and state a legal maximum, orange signs mark construction and give recommended safe speeds rather than legal limits, and the pentagon is reserved for school crossings. Small yellow squares mounted under a warning sign give the safe speed for the hazard.",
        trap:
          "An advisory speed on a yellow plate below a curve sign is not the legal limit - but ignoring it is exactly how a curve gets taken too fast.",
        excerptKey: "sign-diamond",
        sourceLabel: "Arizona Driver License Manual - Section 3, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "az_s1_16",
        topic: "licensing",
        question: "What is the minimum age to apply for an Arizona instruction permit?",
        choices: [
          "15 years and 6 months",
          "15 years exactly",
          "16 years",
          "16 years and 6 months",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen and a half. MVD states it on the permit test page and in the manual's own list of licence classes.",
        context:
          "Arizona's ladder runs permit at 15 years 6 months, graduated Class G licence at 16, and a full operator licence at 18. The permit itself is valid for twelve months, and you have to hold it for six months - or until you turn 18 - before you can move up to a licence. The six-month clock starts when the permit is issued in an office, not when you passed the written test.",
        trap:
          "Passing the test at home does not start the holding period. Only the in-office issue date does.",
        excerptKey: "permit-age-15-6",
        sourceLabel: "Arizona MVD - Permit Test, Important Requirements",
        sourceUrl: PT,
      },
      {
        id: "az_s1_17",
        topic: "rules",
        question: "How far before a turn does Arizona require you to signal?",
        choices: [
          "One car length",
          "Whenever another vehicle is in sight",
          "50 feet",
          "At least 100 feet, roughly four seconds",
        ],
        correctIndex: 3,
        explanation:
          "One hundred feet is the legal minimum, which the manual translates into about four seconds of warning at ordinary speeds.",
        context:
          "Arizona wants the signal on before you change lanes, turn at an intersection or into a driveway or alley, enter or leave a freeway, pull away from a kerb or pull over. If your turn is beyond the intersection ahead, hold the signal until you are actually in the intersection, or drivers waiting there will pull into your path. Cancel it once the move is complete.",
        trap:
          "Signalling does not create a right to go. It announces an intention - other drivers still have to give way before you can take it.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Arizona Driver License Manual - Section 2, Communicating",
        sourceUrl: HB,
      },
      {
        id: "az_s1_18",
        topic: "impairment",
        question:
          "For a driver aged 21 or over in an ordinary car, what alcohol concentration puts you over Arizona's legal limit?",
        choices: ["0.05", "0.08", "0.10", "0.15"],
        correctIndex: 1,
        explanation:
          "Arizona's per se limit is 0.08. A test at or above that figure costs you your driving privilege on the spot.",
        context:
          "The 0.08 figure is a ceiling, not a safe zone. Arizona says plainly that being under it does not make driving legal or safe, that studies show impairment well below it, and that you can be convicted of DUI on a BAC under 0.08 if you were impaired. Commercial drivers are held to 0.04, and anyone under 21 is at zero.",
        trap:
          "People treat 0.08 as a threshold they are allowed to drive up to. Arizona explicitly says you can still be arrested below it.",
        excerptKey: "bac-008",
        sourceLabel: "Arizona Driver License Manual - Section 5, Under 21 = ZERO Tolerance",
        sourceUrl: HB,
      },
      {
        id: "az_s1_19",
        topic: "signals",
        question:
          "You are stopped at a red light and want to turn right. No sign forbids it. What does Arizona allow?",
        choices: [
          "Turn without stopping if the way looks clear",
          "Wait for a green light in every case",
          "Turn only when a green arrow appears",
          "Turn after a complete stop, once vehicle and pedestrian traffic are clear",
        ],
        correctIndex: 3,
        explanation:
          "Right on red is permitted in Arizona where signs do not prohibit it, but only after a complete stop and only when both traffic and pedestrians are clear.",
        context:
          "The stop has to happen before you reach the crosswalk, marked or unmarked. After stopping you yield to pedestrians, cyclists and oncoming traffic, and unless a sign directs otherwise you turn into the right lane of the road you enter. A red arrow removes the permission entirely - you may not turn in the direction of a red arrow at all.",
        trap:
          "A red arrow is not a red light for this purpose. Where the signal shows a red arrow you wait, no matter how clear the road is.",
        excerptKey: "right-on-red",
        sourceLabel: "Arizona Driver License Manual - Section 3, Signal Lights",
        sourceUrl: HB,
      },
      {
        id: "az_s1_20",
        topic: "emergencies",
        question: "You are in a collision with another car. What does Arizona require of you at the scene?",
        choices: [
          "Exchange details only if there is visible damage",
          "Leave once you have photographed the damage",
          "Wait for police before speaking to the other driver",
          "Stay at the scene, help anyone injured, and exchange information",
        ],
        correctIndex: 3,
        explanation:
          "Arizona requires you to remain, assist anyone injured and swap details with the other drivers. Leaving is a separate and far more serious offence.",
        context:
          "The information you owe is your licence number, name and address, insurance company and policy number, licence plate numbers and details of any witnesses. If anyone is injured you must call the police immediately. Failing to stop costs you your licence for a year where only a vehicle was damaged, and revocation for years where someone was hurt or killed.",
        trap:
          "Minor damage does not make it a non-event. The duty to stop and exchange applies to any crash involving damage, injury or death.",
        excerptKey: "crash-exchange-info",
        sourceLabel: "Arizona Driver License Manual - Section 6, Reporting Crashes",
        sourceUrl: HB,
      },
      {
        id: "az_s1_21",
        topic: "signs",
        question: "What does a permanent five-sided sign at the roadside tell you?",
        choices: [
          "Children may be crossing at any time of day",
          "A no-passing zone begins here",
          "A railway crossing is ahead",
          "You are entering a construction area",
        ],
        correctIndex: 0,
        explanation:
          "The pentagon is Arizona's school crossing sign, and it warns of children crossing at any hour rather than only at school times.",
        context:
          "School crossing signs may be plain yellow, though many Arizona districts now post the yellow-green version. They mark the permanent hazard; the portable signs placed in the roadway when school is in session are what trigger the 15 mph limit, the no-passing rule and the duty to stop for anyone in the crosswalk.",
        trap:
          "A permanent pentagon does not by itself set 15 mph. It warns; the portable signs in the road are what set the reduced limit.",
        excerptKey: "school-crossing-sign-shape",
        sourceLabel: "Arizona Driver License Manual - Section 3, School Crossing Sign",
        sourceUrl: HB,
      },
      {
        id: "az_s1_22",
        topic: "rules",
        question: "Two solid yellow lines run down the centre of the road. What do they permit?",
        choices: [
          "Passing in your direction only",
          "Passing when no oncoming traffic is visible",
          "No passing in either direction, though you may cross to turn left",
          "No crossing for any reason at all",
        ],
        correctIndex: 2,
        explanation:
          "Double solid yellow forbids passing both ways. The one crossing Arizona allows is a left turn.",
        context:
          "Yellow lines separate opposing traffic and white lines separate traffic going the same way. A broken yellow line means passing on the left is permitted when the road ahead is clear. Where a broken line sits alongside a solid one, the side with the broken line may pass and the side with the solid line may not.",
        trap:
          "An empty road ahead does not unlock a double yellow. The line, not the traffic, decides.",
        excerptKey: "double-yellow",
        sourceLabel: "Arizona Driver License Manual - Section 3, Double Yellow Lines",
        sourceUrl: HB,
      },
      {
        id: "az_s1_23",
        topic: "parking",
        question: "You are parking facing downhill on a street with a kerb. Which way do the front wheels go?",
        choices: [
          "Straight ahead",
          "Turned toward the kerb",
          "Turned away from the kerb",
          "It makes no difference with the parking brake set",
        ],
        correctIndex: 1,
        explanation:
          "Downhill with a kerb, the wheels point toward the kerb, so a rolling car is caught by the kerb rather than released into traffic.",
        context:
          "Arizona gives three hill cases. Downhill with a kerb, turn the wheels toward it. Uphill with a kerb, turn them to the left and let the car roll back until the right front wheel rests against the kerb. With no kerb at all, turn the wheels to the right so a runaway car heads away from the centre of the road. The parking brake goes on in every case.",
        trap:
          "The uphill and no-kerb cases both point away from the centre of the road, which is why people misremember downhill as pointing away too.",
        excerptKey: "park-downhill",
        sourceLabel: "Arizona Driver License Manual - Section 2, Parking on a Hill",
        sourceUrl: HB,
      },
      {
        id: "az_s1_24",
        topic: "rightOfWay",
        question:
          "An ambulance comes up behind you with lights and siren on a two-lane street. What should you do?",
        choices: [
          "Speed up to clear the intersection ahead",
          "Stop where you are and let it go around",
          "Pull to the right side of the road and stop until it has passed",
          "Move to the left so it can use the right lane",
        ],
        correctIndex: 2,
        explanation:
          "Arizona wants you over to the right and stopped, and you stay stopped until the emergency vehicle has gone past.",
        context:
          "That is the two-lane rule. On a four-lane road with at least two lanes going your way, the response is different - you proceed with caution and change into a lane that is not next to the emergency vehicle, or if that is unsafe you slow down instead. Either way you clear the intersection first rather than stopping inside it.",
        trap:
          "Stopping in the middle of an intersection blocks the very route the ambulance needs. Clear the junction, then pull right.",
        excerptKey: "emergency-vehicle-yield",
        sourceLabel: "Arizona Driver License Manual - Section 3, Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "az_s1_25",
        topic: "speed",
        question:
          "You pass a white rectangular sign with black lettering reading SPEED LIMIT 45. What is that number?",
        choices: [
          "A recommendation for good conditions",
          "The average speed expected of traffic",
          "A minimum you should not fall below",
          "The maximum you may legally drive there",
        ],
        correctIndex: 3,
        explanation:
          "White signs with black letters are regulatory in Arizona - the number is the legal maximum, not advice.",
        context:
          "Arizona splits sign colours by legal force. White with black lettering regulates and states the maximum you may legally go. Orange with black lettering recommends a safe speed for a curve, a grade or some other local condition. Regulatory limits are set for the best conditions, so weather, traffic or a hazard can require you to drive slower than the number.",
        trap:
          "Because orange advisory signs look similar in shape, drivers treat them as legal limits and treat white regulatory signs as suggestions. It is the other way around.",
        excerptKey: "speed-white-signs",
        sourceLabel: "Arizona Driver License Manual - Section 3, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "az_s1_26",
        topic: "safety",
        question:
          "Arizona's manual gives a counting rule for the gap to the vehicle ahead. What is it?",
        choices: [
          "One second for every 10 mph of speed",
          "A two-second cushion in all conditions",
          "A three to six second cushion, depending on conditions",
          "Two car lengths for every 10 mph",
        ],
        correctIndex: 2,
        explanation:
          "Arizona teaches a three-to-six second cushion. Three seconds is the floor for ordinary driving and poor conditions push you toward six.",
        context:
          "You pick a fixed point such as a sign or overpass, and count from the moment the car ahead passes it. If you reach the point before you finish counting, you are too close. Faster speeds need a longer gap, slippery roads need the count doubled to six seconds or more, and heavy rain calls for at least six.",
        trap:
          "The two-second rule taught in other states is not Arizona's. Three seconds is where Arizona starts.",
        commonlyMissed: true,
        excerptKey: "following-3-6-rule",
        sourceLabel: "Arizona Driver License Manual - Section 2, Cushion of Space Around Your Vehicle",
        sourceUrl: HB,
      },
      {
        id: "az_s1_27",
        topic: "sharing",
        question:
          "A school bus ahead of you on an undivided road has its red lights flashing and its stop arm out. What must you do?",
        choices: [
          "Slow to 15 mph and pass carefully",
          "Stop only if you are behind the bus",
          "Stop before reaching the bus, whichever direction you are travelling",
          "Pass on the left if no children are visible",
        ],
        correctIndex: 2,
        explanation:
          "On an undivided road you stop regardless of direction, and you stay stopped until the bus moves off or the arm and lights go out.",
        context:
          "The exception is a genuinely divided roadway, where traffic going the opposite way need not stop. Divided in Arizona means a physical barrier - a fence, kerbing or a separation of the pavement. Painted striping alone does not divide a road, and neither does a centre two-way left turn lane.",
        trap:
          "A wide painted median looks like a divider and is not one. If the only thing between you and the bus is paint, you stop.",
        commonlyMissed: true,
        excerptKey: "school-bus-stop",
        sourceLabel: "Arizona Driver License Manual - Section 3, School Buses and School Zones",
        sourceUrl: HB,
      },
      {
        id: "az_s1_28",
        topic: "signals",
        question: "A yellow light is flashing over the intersection ahead. What does it require?",
        choices: [
          "Slow down and proceed with caution if the way is clear",
          "Stop, then proceed as at a stop sign",
          "Stop and wait for a green",
          "Nothing - it applies only to cross traffic",
        ],
        correctIndex: 0,
        explanation:
          "Flashing yellow is a caution signal. Slow down, look, and continue if the roadway is clear - no stop is required.",
        context:
          "Arizona uses flashing amber to mean proceed carefully in several places: over an intersection, on a flashing yellow arrow at a turn, and on pedestrian-activated crossings where a flashing yellow means someone has just pressed the button. In each case the message is the same - the hazard may be there, so slow and look.",
        trap:
          "A flashing yellow arrow lets you turn, but only after yielding to oncoming traffic and pedestrians. It is not a protected turn.",
        excerptKey: "flashing-yellow-light",
        sourceLabel: "Arizona Driver License Manual - Section 3, Flashing Yellow Light",
        sourceUrl: HB,
      },
      {
        id: "az_s1_29",
        topic: "impairment",
        question:
          "You are 19 and are stopped after one drink. Your alcohol concentration reads 0.03. What is the Arizona position?",
        choices: [
          "No offence - you are under 0.08",
          "A warning only for a first occasion",
          "It counts only if you appear impaired",
          "Any alcohol concentration at all can cost you your licence",
        ],
        correctIndex: 3,
        explanation:
          "Under 21, Arizona works on zero. The manual states that your licence may be suspended if there is any alcohol concentration.",
        context:
          "Arizona runs a zero-tolerance regime for drivers under 21, so the 0.08 figure that applies to adults is simply irrelevant. Any trace of alcohol, marijuana, medication or illegal drug that impairs your ability to drive brings penalties. Supplying alcohol to a minor can cost the supplier their own driving privilege as well.",
        trap:
          "Being well under the adult limit is not a defence for an under-21 driver. There is no allowance to be under.",
        excerptKey: "dui-under-21-any",
        sourceLabel: "Arizona Driver License Manual - Section 5, DUI Penalties",
        sourceUrl: HB,
      },
      {
        id: "az_s1_30",
        topic: "licensing",
        question:
          "You hold an Arizona graduated instruction permit. Who has to be in the car with you?",
        choices: [
          "Any licensed driver over 18",
          "A licensed driver aged 21 or older, in the seat beside you",
          "A parent or guardian, in any seat",
          "Nobody, provided you drive in daylight",
        ],
        correctIndex: 1,
        explanation:
          "MVD requires a licensed driver of at least 21 occupying the seat next to you the whole time you are driving on a permit.",
        context:
          "The supervising driver has to hold a Class A, B, C or D licence and sit in the front passenger seat - not the back, and not another car. That requirement applies for the full twelve months the permit is valid. It is separate from the six-month holding period you must complete before applying for a graduated licence.",
        trap:
          "An eighteen-year-old sibling with a full licence does not qualify. Twenty-one is the floor, and the seat beside you is the place.",
        excerptKey: "gdl-permit-supervisor",
        sourceLabel: "Arizona MVD - Teen Driver Guide to Class G Permit and License",
        sourceUrl: TD,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Everyday Arizona Driving",
    difficulty: "easy",
    description:
      "Signals, markings, kerb colours and the rules that come up on an ordinary drive across Phoenix or Tucson - the core material MVD writes most of its 30 questions from.",
    questions: [
      {
        id: "az_s2_01",
        topic: "signals",
        question:
          "The light ahead turns steady yellow while you are still some distance from the intersection. What does Arizona expect?",
        choices: [
          "Accelerate to clear the intersection before it turns red",
          "Maintain speed - yellow is still a permission to proceed",
          "Stop only if a police officer is present",
          "Come to a safe stop, because you have not entered the intersection",
        ],
        correctIndex: 3,
        explanation:
          "Steady yellow warns that red is coming. If you have not yet entered the intersection, Arizona wants you stopped safely.",
        context:
          "The rule splits on where you already are. Not in the intersection yet means come to a safe stop. Already inside it means keep moving and clear it safely rather than stopping in the middle. What Arizona rules out entirely is treating yellow as a reason to go faster.",
        trap:
          "Speeding up to beat the light is not a grey area in Arizona - the manual calls it illegal outright.",
        excerptKey: "yellow-means-caution",
        sourceLabel: "Arizona Driver License Manual - Section 3, Signal Lights",
        sourceUrl: HB,
      },
      {
        id: "az_s2_02",
        topic: "rules",
        question:
          "On an ordinary Arizona roadway with two or more lanes, which half of the road do you drive on?",
        choices: [
          "Whichever half is less congested",
          "The right half, except when passing or where signs say otherwise",
          "The left half, so you can see oncoming traffic",
          "The centre, staying clear of both edges",
        ],
        correctIndex: 1,
        explanation:
          "Arizona's default is the right half of the roadway. Passing, and signs directing otherwise, are the exceptions.",
        context:
          "The same logic runs onto the highway, where you stay right and use the left lane only for passing. Where a highway has three lanes going your way, the far right is treated as a slower through lane and the far left as the passing lane. Driving too slowly can be as dangerous as driving too fast, so a slow vehicle belongs on the right.",
        trap:
          "Sitting in the left lane at the limit is still misuse of that lane. It is for passing, not for cruising at the maximum.",
        excerptKey: "lane-use-right-half",
        sourceLabel: "Arizona Driver License Manual - Section 2, Lane Use",
        sourceUrl: HB,
      },
      {
        id: "az_s2_03",
        topic: "parking",
        question: "You pull up beside a kerb painted red. What does the colour allow?",
        choices: [
          "Loading and unloading only",
          "Dropping off passengers only",
          "Parking for up to fifteen minutes",
          "Nothing - you may not stop, stand or park",
        ],
        correctIndex: 3,
        explanation:
          "Red is Arizona's absolute kerb colour: no stopping, no standing, no parking.",
        context:
          "Arizona uses three kerb colours. White lets you stop only long enough to pick up or drop off passengers. Yellow lets you stop only long enough to load or unload, and you stay with the car. Red bars stopping, standing and parking outright. A painted kerb always means a special rule applies.",
        trap:
          "Staying in the car with the engine running does not turn stopping into something else. Red bars standing as well as parking.",
        excerptKey: "curb-red",
        sourceLabel: "Arizona Driver License Manual - Section 3, Painted Curbs",
        sourceUrl: HB,
      },
      {
        id: "az_s2_04",
        topic: "rightOfWay",
        question:
          "You are on a street that dead-ends into a cross street, forming a T. Who yields?",
        choices: [
          "You do - the driver on the street that ends yields to the cross street",
          "The cross street traffic yields to you",
          "Whoever arrives second",
          "The driver turning left yields; the one turning right does not",
        ],
        correctIndex: 0,
        explanation:
          "At a T intersection Arizona puts the duty on the driver whose road ends. The through street keeps the right-of-way.",
        context:
          "The T rule is one of several place-based right-of-way rules in Arizona. Coming out of an alley or driveway you stop before reaching the sidewalk and yield to pedestrians and approaching vehicles. Turning left you yield to any oncoming vehicle, bicycle or pedestrian. In each case the driver joining or crossing the established flow gives way.",
        trap:
          "A stop sign is not always painted or posted at the top of the T. The duty to yield exists whether or not a sign reminds you.",
        excerptKey: "t-intersection",
        sourceLabel: "Arizona Driver License Manual - Section 3, Rules of the Road",
        sourceUrl: HB,
      },
      {
        id: "az_s2_05",
        topic: "safety",
        question:
          "What is the minimum following distance Arizona recommends for most ordinary driving?",
        choices: [
          "At least three seconds",
          "At least one second",
          "Two car lengths",
          "Half the posted speed in feet",
        ],
        correctIndex: 0,
        explanation:
          "Three seconds is Arizona's baseline. Anything less leaves no room to react when the car ahead does something you did not expect.",
        context:
          "Space is what buys reaction time, and Arizona notes that it takes an average of 1.5 seconds just to perceive a threat and react to it - before the brakes have done anything at all. Slippery roads double the requirement to six seconds or more, and heavy rain calls for at least six. Following too closely is the cause the manual names for most rear-end crashes.",
        trap:
          "Car lengths are useless as a measure because they do not scale with speed. Arizona counts in seconds for that reason.",
        excerptKey: "following-3-seconds",
        sourceLabel: "Arizona Driver License Manual - Section 5, Braking and Stopping",
        sourceUrl: HB,
      },
      {
        id: "az_s2_06",
        topic: "signs",
        question: "A yellow pennant-shaped sign stands on the left side of the road. What does it mark?",
        choices: [
          "A merge point ahead",
          "The start of a no passing zone",
          "A narrow bridge",
          "A recommended speed for the curve",
        ],
        correctIndex: 1,
        explanation:
          "The pennant is Arizona's no-passing marker, and it is placed on the left because that is the side you would be passing on.",
        context:
          "Arizona backs the pennant with a list of places you must not pass at all: where a double solid line or a solid line runs on your side, approaching a curve or hillcrest where you cannot see far enough ahead, and within 100 feet of a street crossing, a railway crossing, or a bridge, tunnel or underpass where your view is blocked.",
        trap:
          "The pennant marks where the zone starts, not where it ends. The restriction runs until the markings say otherwise.",
        excerptKey: "sign-pennant",
        sourceLabel: "Arizona Driver License Manual - Section 3, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "az_s2_07",
        topic: "speed",
        question:
          "Arizona's manual lists the speeds that apply where nothing is posted. What figure does it give for rural freeways?",
        choices: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctIndex: 3,
        explanation:
          "Seventy-five is the rural freeway figure in the manual's list, above the 65 mph it gives for designated open highways.",
        context:
          "The manual's unposted table runs 15 mph approaching a school crosswalk, 25 mph in a business or residential district, 55 mph on open highways or city freeways, 65 mph on designated open highways and 75 mph on rural freeways. Posted signs override the table wherever they exist, and conditions can require less than any of these numbers.",
        trap:
          "Seventy-five is a ceiling on a rural freeway, not a licence to drive it in dust, rain or heavy traffic - a legal speed can still be an unreasonable one.",
        commonlyMissed: true,
        excerptKey: "speed-defaults",
        sourceLabel: "Arizona Driver License Manual - Section 3, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "az_s2_08",
        topic: "sharing",
        question:
          "What does Arizona's manual mean when it warns you about the No-Zone around a large truck?",
        choices: [
          "The area where trucks are banned from changing lanes",
          "A lane trucks may not enter in a work zone",
          "The truck's blind spots, front and back and along the sides",
          "The gap a truck leaves for merging traffic",
        ],
        correctIndex: 2,
        explanation:
          "The No-Zone is the set of large blind spots around a truck or bus. Sitting in one means the driver cannot see you at all.",
        context:
          "Arizona gives five rules for sharing the road with trucks: do not cut in front of them because they need twice the distance to stop, stay out of the No-Zone, follow at a safe distance since a truck blocks your view of everything ahead, watch their turn signals because they swing wide to the left before a right turn, and pull well off the road if you break down.",
        trap:
          "Passing a truck on the right just as it prepares to turn right is the classic collision. Trucks leave a gap on the right precisely because they need it.",
        excerptKey: "truck-no-zone",
        sourceLabel: "Arizona Driver License Manual - Section 4, Sharing the Road with a Truck",
        sourceUrl: HB,
      },
      {
        id: "az_s2_09",
        topic: "signals",
        question: "A green arrow lights up pointing left. What does it tell you?",
        choices: [
          "You may turn left, but must yield to oncoming traffic",
          "You may proceed in the direction of the arrow if you are in the proper lane and the way is clear",
          "Left turns are prohibited for the next cycle",
          "Oncoming traffic has a green arrow at the same time",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow lets you go the way it points, provided you are in the right lane for it and the roadway ahead is clear.",
        context:
          "Arizona's arrow signals form a matched set. A green arrow permits the movement it points to. A yellow arrow warns the arrow phase is ending, so stop and wait for a green arrow if you have not entered the intersection. A red arrow bars the turn entirely. A flashing yellow arrow permits the turn only after yielding to oncoming traffic and pedestrians.",
        trap:
          "A green arrow is not identical to a flashing yellow one. The flashing version still requires you to yield; the solid green arrow does not.",
        excerptKey: "green-arrow",
        sourceLabel: "Arizona Driver License Manual - Section 3, Green Arrow",
        sourceUrl: HB,
      },
      {
        id: "az_s2_10",
        topic: "impairment",
        question:
          "Your passenger opens a beer while you drive them home. What is the Arizona position?",
        choices: [
          "Legal, as long as the driver does not drink",
          "Legal if the passenger sits in the back",
          "Illegal - an open container is barred from the passenger compartment",
          "Legal on private roads only",
        ],
        correctIndex: 2,
        explanation:
          "Arizona bars a driver or a passenger from consuming or possessing an open container of liquor in the passenger compartment on any public roadway.",
        context:
          "The passenger compartment includes any unlocked compartment or portable container within reach of the driver or a passenger. What it excludes is the boot, or the area behind the last upright seat in a vehicle with no boot. Riders in a bus, limousine, taxi or the living area of a motor home are exempt from the rule.",
        trap:
          "The glovebox is not a safe place for an open bottle. Unlocked compartments within reach count as the passenger compartment.",
        excerptKey: "open-container",
        sourceLabel: "Arizona Driver License Manual - Section 5, Open Container",
        sourceUrl: HB,
      },
      {
        id: "az_s2_11",
        topic: "rules",
        question:
          "A broken yellow line runs down the centre of the two-lane road you are on. What does it allow?",
        choices: [
          "Passing on the left when the road ahead is clear",
          "Passing only when a sign confirms it",
          "No passing - yellow always prohibits it",
          "Passing on the right only",
        ],
        correctIndex: 0,
        explanation:
          "A broken yellow line permits passing on the left once the roadway ahead is clear, since it separates traffic moving in opposite directions.",
        context:
          "The colour tells you what kind of traffic is on the other side of the line: yellow means oncoming, white means going your way. Broken means crossing is allowed, solid means it is not. Because a broken yellow puts you into the path of oncoming traffic, Arizona asks for extreme caution rather than a routine lane change.",
        trap:
          "Broken and solid can swap sides mid-stretch. The line on your side is the one that governs you, not the one on theirs.",
        excerptKey: "broken-yellow",
        sourceLabel: "Arizona Driver License Manual - Section 3, Broken Yellow Lines",
        sourceUrl: HB,
      },
      {
        id: "az_s2_12",
        topic: "emergencies",
        question: "A front tyre blows out at highway speed. What is the first thing to do?",
        choices: [
          "Brake hard and steer for the shoulder",
          "Grip the wheel firmly, keep going straight and ease off the gas",
          "Pull the handbrake to slow the car evenly",
          "Steer sharply toward the side the tyre blew on",
        ],
        correctIndex: 1,
        explanation:
          "Hold the wheel tight, keep the car pointing straight and come off the accelerator. Arizona is explicit that you do not brake.",
        context:
          "Let the vehicle slow itself until it is almost stopped. Just before it stops, signal so other drivers know you are moving to the side, then pull off the roadway and apply the brakes. Braking while the car is still travelling fast on a blown tyre is what turns a blowout into a spin.",
        trap:
          "Braking is the instinct and it is the wrong one here. It shifts weight onto the failed corner and takes the car away from you.",
        excerptKey: "blowout-response",
        sourceLabel: "Arizona Driver License Manual - Section 6, Tire Failure",
        sourceUrl: HB,
      },
      {
        id: "az_s2_13",
        topic: "safety",
        question: "When does Arizona require your headlights to be on?",
        choices: [
          "Only when you cannot see 500 feet ahead",
          "From one hour after sunset to one hour before sunrise",
          "Whenever the wipers are running",
          "From sunset to sunrise",
        ],
        correctIndex: 3,
        explanation:
          "Sunset to sunrise is the legal window. Arizona also tells you to switch on as soon as the light starts to fade in the late afternoon.",
        context:
          "Beyond the legal window, Arizona wants low beams on whenever your vehicle might not be clearly visible - sun glare, rain, dust or any similar condition. Use high beams on the highway when no oncoming vehicle is within 500 feet, and drop to low beams when following another car within 200 feet. Parking lights are not a substitute for headlights.",
        trap:
          "Other drivers not having their lights on is not a reason to leave yours off. The manual warns about exactly that assumption.",
        excerptKey: "headlights-sunset-sunrise",
        sourceLabel: "Arizona Driver License Manual - Section 5, Night Driving",
        sourceUrl: HB,
      },
      {
        id: "az_s2_14",
        topic: "rightOfWay",
        question:
          "You are waiting at a green light to turn left. A cyclist is coming the other way. What do you do?",
        choices: [
          "Yield - a left turn gives way to any oncoming vehicle, bicycle or pedestrian",
          "Turn first, since a bicycle is slower",
          "Proceed, because your green light is a protected turn",
          "Yield only to cars, not to bicycles",
        ],
        correctIndex: 0,
        explanation:
          "A left turn in Arizona yields to oncoming traffic of every kind, and the manual names bicycles and pedestrians alongside vehicles.",
        context:
          "A plain green ball permits a left turn but does not protect it - only a green arrow does that. Cyclists in Arizona hold the right-of-way under the same conditions as motorists, and they are hard to see and easy to misjudge for speed. The same caution applies to motorcycles, which are the vehicles most often struck by a car turning across their path.",
        trap:
          "Judging that you can beat an oncoming bicycle is the same misjudgement that causes car-motorcycle crashes. Small vehicles look further away and slower than they are.",
        excerptKey: "left-turn-yield",
        sourceLabel: "Arizona Driver License Manual - Section 3, Left Turns",
        sourceUrl: HB,
      },
      {
        id: "az_s2_15",
        topic: "parking",
        question:
          "How close to a crosswalk at an intersection may you park in Arizona?",
        choices: [
          "Right up to the crosswalk line",
          "No closer than twenty feet",
          "No closer than ten feet",
          "No closer than thirty feet",
        ],
        correctIndex: 1,
        explanation:
          "Twenty feet is the figure, and parking on the crosswalk itself is prohibited outright.",
        context:
          "Arizona's parking distances are worth learning as a block: twenty feet from a crosswalk at an intersection, fifteen feet from a fire hydrant, fifty feet from a railway crossing. The statute adds thirty feet on the approach to a stop sign, yield sign, traffic signal or flashing beacon, which the manual's own list leaves out.",
        commonlyMissed: true,
        trap:
          "The manual's parking list does not mention the thirty-foot rule for stop signs and signals, so a driver who studied only the manual can still be ticketed under the statute.",
        excerptKey: "park-crosswalk-20",
        sourceLabel: "Arizona Driver License Manual - Section 2, Prohibited Parking",
        sourceUrl: HB,
      },
      {
        id: "az_s2_16",
        topic: "signs",
        question: "A round yellow sign appears at the roadside. What is it warning you about?",
        choices: [
          "A railway crossing ahead",
          "A roundabout ahead",
          "A sharp curve ahead",
          "A weight-restricted bridge",
        ],
        correctIndex: 0,
        explanation:
          "The circle is reserved in Arizona for the advance warning of a railway crossing.",
        context:
          "The round advance sign warns; the crossbuck at the tracks marks the crossing itself. At the crossing you must stop no closer than fifteen feet from the nearest rail if you see flashing red lights, a lowered barricade, ringing bells, or a flagger signalling a train. You do not cross until every signal has stopped and the barricade is fully up.",
        trap:
          "Driving around or under a lowered barricade is explicitly forbidden, however clear the track looks in both directions.",
        excerptKey: "railroad-sign-circle",
        sourceLabel: "Arizona Driver License Manual - Section 3, Railroad Warning Sign",
        sourceUrl: HB,
      },
      {
        id: "az_s2_17",
        topic: "licensing",
        question: "You move house within Arizona. How long do you have to tell MVD?",
        choices: ["10 days", "30 days", "60 days", "There is no deadline"],
        correctIndex: 0,
        explanation:
          "Ten days, and the same deadline applies to a change of name.",
        context:
          "MVD links your licence record to every vehicle record where you are the first registered owner, so one address change updates all of them. Failing to report leaves you missing renewal notices and correspondence, and Arizona notes you may be cited by law enforcement for it. If you want the new address printed on the card itself, that is a separate replacement licence.",
        trap:
          "Reporting the change online updates the record but does not reprint the card. The card only changes if you buy a replacement.",
        excerptKey: "address-change-10-days",
        sourceLabel: "Arizona Driver License Manual - Name and Address Change",
        sourceUrl: HB,
      },
      {
        id: "az_s2_18",
        topic: "signals",
        question: "The signal ahead shows a steady red arrow pointing left. What may you do?",
        choices: [
          "Turn left after stopping, as with a red light",
          "Turn left if no oncoming traffic is visible",
          "Treat it as a flashing yellow and turn with caution",
          "Nothing - you may not turn in the direction of the arrow",
        ],
        correctIndex: 3,
        explanation:
          "A red arrow prohibits the turn outright. You stop and wait for a green signal before turning.",
        context:
          "This is where a red arrow differs from a red ball. A red ball still allows a right turn after a complete stop where signs permit, and allows a left from one one-way street onto another. A red arrow removes the permission entirely for the direction it points. At Valley light rail intersections the manual reinforces the same message - a red arrow means do not turn.",
        trap:
          "Drivers apply the right-on-red habit to a red right arrow. The arrow overrides the habit.",
        excerptKey: "red-arrow",
        sourceLabel: "Arizona Driver License Manual - Section 3, Red Arrow",
        sourceUrl: HB,
      },
      {
        id: "az_s2_19",
        topic: "rules",
        question:
          "You are behind a slow car as the road climbs toward a hillcrest. May you pass?",
        choices: [
          "Yes, if you can complete the pass before the crest",
          "Yes, if you sound the horn first",
          "No - you may not pass approaching a curve or hilltop where you cannot see ahead",
          "Yes, provided the centre line is broken",
        ],
        correctIndex: 2,
        explanation:
          "Arizona forbids passing on the approach to a curve or the top of a hill where you cannot see far enough to be sure the pass is safe.",
        context:
          "The full do-not-pass list also covers a double solid line or a solid line on your side, and anywhere within 100 feet of a street crossing, a railway crossing, or a bridge, tunnel or underpass where your view is blocked. The common thread is sight distance - if you cannot see the road you would need to complete the pass, the pass is not allowed.",
        commonlyMissed: true,
        trap:
          "A broken centre line does not override the sight-distance rule. Markings and visibility both have to permit the pass.",
        excerptKey: "no-pass-hill-curve",
        sourceLabel: "Arizona Driver License Manual - Section 2, Do Not Pass",
        sourceUrl: HB,
      },
      {
        id: "az_s2_20",
        topic: "sharing",
        question:
          "You come up behind a vehicle displaying an orange triangle with a red border. What does it tell you?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle is a learner under instruction",
          "The vehicle cannot travel faster than 25 mph",
          "The vehicle is oversize and needs the full lane",
        ],
        correctIndex: 2,
        explanation:
          "The slow-moving vehicle emblem means the vehicle is incapable of exceeding 25 mph. It is a warning to slow down well before you reach it.",
        context:
          "Farm machinery and similar vehicles typically travel at 25 mph or less, may occupy more than one lane, and may have no signals at all. An operator making a wide right turn may first pull left, which looks like a left turn about to happen. Arizona notes bluntly that these vehicles have a legal right to be on the road.",
        trap:
          "Reading the leftward drift as a left turn and passing on the right is how drivers end up under a turning trailer.",
        excerptKey: "slow-moving-vehicle",
        sourceLabel: "Arizona Driver License Manual - Section 4, Slow Moving Vehicles",
        sourceUrl: HB,
      },
      {
        id: "az_s2_21",
        topic: "safety",
        question: "You run into thick fog on a highway at night. Which lights do you use?",
        choices: [
          "High beams, for maximum reach",
          "Parking lights only",
          "Hazard flashers while still moving",
          "Low beams only",
        ],
        correctIndex: 3,
        explanation:
          "Low beams only. Fog reflects light, so high beams bounce back into your own eyes and make things worse.",
        context:
          "Arizona pairs the low-beam rule with using the road edge markings to guide you, and with slowing down because even light fog wrecks your ability to judge distance. Fog can thicken from moment to moment, so keep adjusting speed and be ready for an emergency manoeuvre. If it becomes too much, pull off the road and switch your headlights off until it lifts.",
        trap:
          "Leaving headlights on while stopped off the road invites a following driver to steer toward you - the same reasoning behind Arizona's dust storm rule.",
        excerptKey: "fog-low-beams",
        sourceLabel: "Arizona Driver License Manual - Section 5, Fog",
        sourceUrl: HB,
      },
      {
        id: "az_s2_22",
        topic: "speed",
        question:
          "An orange sign with black lettering shows 35 on the approach to a curve. What is that number?",
        choices: [
          "The legal maximum through the curve",
          "A minimum speed for the curve",
          "A recommended safe speed for that location",
          "The speed limit for trucks only",
        ],
        correctIndex: 2,
        explanation:
          "Orange signs give recommended safe speeds for the curvature, grade or other local conditions - guidance rather than a posted legal limit.",
        context:
          "Arizona contrasts orange advisory signs with white regulatory ones, where the white sign's number is the legal maximum. The manual's own advice is to slow until you are sure of getting through the location safely. Advisory or not, taking a curve above the recommended figure can still leave you driving unreasonably fast for the conditions.",
        trap:
          "Treating an advisory speed as optional is how single-vehicle run-off crashes happen on Arizona's mountain roads.",
        excerptKey: "speed-orange-signs",
        sourceLabel: "Arizona Driver License Manual - Section 3, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "az_s2_23",
        topic: "rightOfWay",
        question:
          "You are pulling out of a supermarket car park onto a street with a sidewalk. Where do you stop?",
        choices: [
          "Before reaching the sidewalk",
          "At the edge of the roadway, past the sidewalk",
          "Only if someone is walking past",
          "Wherever you can see traffic best, even if that is across the sidewalk",
        ],
        correctIndex: 0,
        explanation:
          "Arizona requires the stop before the sidewalk, then yielding to pedestrians and to vehicles already on the road.",
        context:
          "The same rule covers alleys and driveways. Nosing across the sidewalk to get a view puts your bumper into the space pedestrians are using, so Arizona asks you to stop short first. Where a parked car or wall blocks your view of the road, the manual's advice is to inch forward slowly until you can see, then go when the way is clear.",
        trap:
          "Stopping at the kerb line instead of the sidewalk line means you have already crossed the pedestrian path before you looked.",
        excerptKey: "alley-driveway-stop",
        sourceLabel: "Arizona Driver License Manual - Section 3, Alleys and Driveways",
        sourceUrl: HB,
      },
      {
        id: "az_s2_24",
        topic: "impairment",
        question:
          "You are getting drowsy on a long drive across Arizona. What does the manual say actually works?",
        choices: [
          "Coffee and an energy drink",
          "Turning the radio up loud",
          "Rest - it is the only safe remedy",
          "Opening the windows for cold air",
        ],
        correctIndex: 2,
        explanation:
          "Arizona is blunt about this: rest is the only safe remedy. Everything else buys minutes, not alertness.",
        context:
          "The manual puts drowsy driving on a level with driving under the influence, and notes it is harder to detect. Its practical advice is to get plenty of rest before a long trip, avoid driving late at night, take frequent stops to get out and move, keep your eyes moving rather than staring ahead, and swap drivers where you can. Fresh air and the radio are stopgaps, not fixes.",
        trap:
          "By the time you notice you feel sleepy, Arizona says it is already past the time to get off the road.",
        excerptKey: "drowsy-rest-only-remedy",
        sourceLabel: "Arizona Driver License Manual - Section 5, Drowsy Driving/Fatigue",
        sourceUrl: HB,
      },
      {
        id: "az_s2_25",
        topic: "rules",
        question: "When are U-turns permitted in Arizona?",
        choices: [
          "Only at intersections with a signal",
          "Only outside business districts",
          "When they can be made safely, do not interfere with traffic, and no sign prohibits them",
          "Never on a road with a centre line",
        ],
        correctIndex: 2,
        explanation:
          "Arizona permits U-turns by default. The conditions are that the movement is safe, does not interfere with other traffic, and is not banned by a sign.",
        context:
          "Making the turn, you yield to approaching traffic and go only when it is safe. Freeways are the flat exception - U-turns are on the list of things you must not do there. At Valley light rail intersections U-turns are permitted at almost all crossings so vehicles can get across the tracks, and they are controlled by signals.",
        trap:
          "Legal is not the same as safe. A U-turn that forces an approaching driver to brake fails the interference test even where no sign forbids it.",
        excerptKey: "u-turn-rule",
        sourceLabel: "Arizona Driver License Manual - Section 3, U-Turn",
        sourceUrl: HB,
      },
      {
        id: "az_s2_26",
        topic: "parking",
        question: "A kerb is painted white. What are you allowed to do there?",
        choices: [
          "Park for up to two hours",
          "Load or unload goods while staying with the vehicle",
          "Nothing at all",
          "Stop only long enough to pick up or drop off passengers",
        ],
        correctIndex: 3,
        explanation:
          "White is the passenger colour in Arizona - stop just long enough to let someone in or out.",
        context:
          "White is for passengers, yellow is for loading and unloading with the driver staying with the car, and red bars stopping, standing and parking entirely. Arizona lists only these three kerb colours, so a blue or green kerb you have seen in another state has no place in the answer.",
        trap:
          "White and yellow are easy to swap. White moves people, yellow moves goods.",
        excerptKey: "curb-white",
        sourceLabel: "Arizona Driver License Manual - Section 3, Painted Curbs",
        sourceUrl: HB,
      },
      {
        id: "az_s2_27",
        topic: "signals",
        question:
          "A power cut has left the traffic signals at a busy intersection completely dark. How do you treat it?",
        choices: [
          "Proceed at reduced speed without stopping",
          "As a four-way stop",
          "As if you have the right-of-way if you are on the larger road",
          "Wait for a police officer before entering",
        ],
        correctIndex: 1,
        explanation:
          "A dead signal becomes a four-way stop in Arizona. Every driver stops, then proceeds when the roadway is clear.",
        context:
          "The four-way-stop treatment also covers intersections that simply have no controls at all. Once everyone has stopped, order of arrival decides who goes; where two vehicles arrived at about the same time, the driver on the left yields to the driver on the right. Nothing about the size of the road changes that.",
        commonlyMissed: true,
        trap:
          "Many drivers think a dark signal only means yield to the right. Arizona requires the complete stop first, from every direction.",
        excerptKey: "inoperative-signal-4-way",
        sourceLabel: "Arizona Driver License Manual - Section 3, Inoperative Signal Lights",
        sourceUrl: HB,
      },
      {
        id: "az_s2_28",
        topic: "emergencies",
        question:
          "Steam starts pouring from under your bonnet on a hot Arizona afternoon. What should you not do?",
        choices: [
          "Pull to the side and switch the engine off",
          "Raise the bonnet to let the heat out",
          "Wait for the engine to cool before adding water",
          "Open the radiator cap to check the coolant level",
        ],
        correctIndex: 3,
        explanation:
          "Opening the radiator cap on a hot engine releases steam under pressure and causes severe burns. Everything else in the list is what Arizona tells you to do.",
        context:
          "Pull over and switch the engine off immediately, raise the bonnet but leave the cap alone. Arizona also advises carrying extra water in the car specifically so you can top up the radiator - once the engine has cooled. Adding water to a hot engine is on the manual's never list.",
        trap:
          "The instinct is to check the coolant right away. The cap is the one part of the system you leave alone until it has cooled.",
        excerptKey: "overheating-radiator-cap",
        sourceLabel: "Arizona Driver License Manual - Section 6, Overheating",
        sourceUrl: HB,
      },
      {
        id: "az_s2_29",
        topic: "safety",
        question:
          "Rain has just started falling on a Phoenix street after weeks of dry weather. When is the road most slippery?",
        choices: [
          "Once puddles have formed and standing water covers the lane",
          "During the first 30 minutes after the rain begins",
          "Only when the temperature drops below freezing",
          "After the rain stops and the surface starts drying",
        ],
        correctIndex: 1,
        explanation:
          "The first half hour is the dangerous window. Grime and oil that have built up on the surface mix with the water and turn the road slick.",
        context:
          "Arizona pairs that warning with slowing down to leave at least six seconds to the vehicle ahead in heavy rain, and with waiting a moment before switching on the wipers so they do not smear a dirty windscreen. In a heavy downpour tyres can ride up on a film of water and lose all contact with the road at 50 mph - worn or under-inflated tyres go much sooner.",
        commonlyMissed: true,
        trap:
          "Drivers wait for standing water before easing off. The most treacherous minutes come long before the puddles do.",
        excerptKey: "rain-first-30-minutes",
        sourceLabel: "Arizona Driver License Manual - Section 5, Rain",
        sourceUrl: HB,
      },
      {
        id: "az_s2_30",
        topic: "sharing",
        question: "What legal status do cyclists have on Arizona roads?",
        choices: [
          "They are pedestrians and always have priority",
          "They must obey the same traffic laws and hold the right-of-way under the same conditions as motorists",
          "They must yield to all motor vehicles at all times",
          "They may use the road only where a bike lane is marked",
        ],
        correctIndex: 1,
        explanation:
          "Arizona treats cyclists as drivers of vehicles: same laws, same right-of-way conditions.",
        context:
          "That symmetry means a cyclist stops at the stop sign and signals turns, and equally that a cyclist arriving first at an intersection goes first. Riders must go with the flow of traffic, keep as near the right as practicable, avoid riding more than two abreast, and at night carry a white headlamp visible from 500 feet plus a rear reflector.",
        trap:
          "Treating a bicycle as something that must always give way is exactly backwards where the rider had the right-of-way first.",
        excerptKey: "bicyclists-same-laws",
        sourceLabel: "Arizona Driver License Manual - Section 4, Sharing the Road with a Bicyclist",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Arizona-specific rules at the level MVD actually asks them: roundabouts, HAWK crossings, lane filtering, following distances behind emergency vehicles, and the desert conditions no other state's handbook covers.",
    questions: [
      {
        id: "az_s3_01",
        topic: "signals",
        question:
          "A police officer at an intersection waves you through while the light is red. What do you do?",
        choices: [
          "Wait for green - the signal always controls",
          "Follow the officer's direction",
          "Proceed only after stopping completely first",
          "Sound the horn and wait for a second signal from the officer",
        ],
        correctIndex: 1,
        explanation:
          "An officer directing traffic overrides the signal. Arizona says you obey the lights unless an officer is directing traffic to do otherwise.",
        context:
          "The same hierarchy runs through the manual: officers outrank signals, signals outrank markings, and markings outrank your own judgement. Arizona also notes that signal lights bind pedestrians, cyclists and moped riders in the same way they bind motorists, so an officer's direction reaches all of them too.",
        trap:
          "Sitting at a red on an officer's wave is not the cautious choice - it blocks whatever the officer is trying to clear.",
        excerptKey: "officer-overrides-signal",
        sourceLabel: "Arizona Driver License Manual - Section 3, Signal Lights",
        sourceUrl: HB,
      },
      {
        id: "az_s3_02",
        topic: "rules",
        question:
          "A solid yellow line runs on your side of the centre, with a broken yellow line on the far side. What may you do?",
        choices: [
          "Pass, since one of the lines is broken",
          "Pass only to complete an overtake already begun",
          "Cross the lines to make a U-turn but not to pass",
          "Not pass - the solid line on your side prohibits it",
        ],
        correctIndex: 3,
        explanation:
          "The line on your side governs you. Solid on your side means no passing, whatever the far side shows.",
        context:
          "Arizona spells this pairing out because the two halves of the road get different permissions on the same stretch. Where the broken line is on your side, you may pass when the way ahead is clear. Where the solid line is on your side, you may not. Double solid yellow forbids passing both ways, though you may still cross it to turn left.",
        trap:
          "Drivers read the pair of lines as a single marking. It is two markings, and only one of them is yours.",
        excerptKey: "solid-broken-yellow",
        sourceLabel: "Arizona Driver License Manual - Section 3, Solid and Broken Yellow Lines",
        sourceUrl: HB,
      },
      {
        id: "az_s3_03",
        topic: "rightOfWay",
        question:
          "You are about to enter a roundabout at the same moment a large truck is entering from another approach. What does Arizona require?",
        choices: [
          "Enter first, since you were already slowing",
          "Enter alongside it in the adjacent lane",
          "Sound the horn and take your gap",
          "Yield to the truck as well as to traffic already circulating",
        ],
        correctIndex: 3,
        explanation:
          "Arizona has two yield duties at a roundabout, not one: yield to everything already inside, and yield to large vehicles entering at the same time as you.",
        context:
          "Arizona roundabouts are designed for 15 to 20 mph. Slow on approach, enter to the right of the central island, take a gap and then keep moving - once inside you do not stop. Pedestrians and cyclists crossing the approaches get the right-of-way, and you never try to pass a large truck inside the circle.",
        commonlyMissed: true,
        trap:
          "The rule most people know is yield to traffic in the circle. Arizona adds a second duty for large vehicles entering at the same time, which is easy to miss and easy to test.",
        excerptKey: "roundabout-yield-large-vehicles",
        sourceLabel: "Arizona Driver License Manual - Section 2, Roundabouts",
        sourceUrl: HB,
      },
      {
        id: "az_s3_04",
        topic: "safety",
        question:
          "You are driving in heavy rain. How much space does Arizona want between you and the vehicle ahead?",
        choices: [
          "The normal three seconds",
          "Four seconds",
          "At least six seconds",
          "Ten car lengths",
        ],
        correctIndex: 2,
        explanation:
          "Heavy rain doubles the ordinary cushion - Arizona asks for at least six seconds.",
        context:
          "Six seconds is the wet-weather number and it recurs: snow or ice also increases the distance you need by at least six seconds. Rain brings a second problem, since vehicles behind you and in your blind spots become very hard to see. Gusty wind on top of rain, as in a thunderstorm, makes both worse.",
        trap:
          "Keeping three seconds because that is the rule you memorised leaves you with half the stopping distance you need on a wet road.",
        excerptKey: "rain-6-seconds",
        sourceLabel: "Arizona Driver License Manual - Section 5, Rain",
        sourceUrl: HB,
      },
      {
        id: "az_s3_05",
        topic: "parking",
        question:
          "You park facing uphill on a street with a kerb. What does Arizona want you to do with the wheels?",
        choices: [
          "Turn them left and let the car roll back until the right front wheel rests against the kerb",
          "Turn them right so the car rolls into the kerb",
          "Leave them straight and rely on the parking brake",
          "Turn them left and pull forward against the kerb",
        ],
        correctIndex: 0,
        explanation:
          "Uphill with a kerb: wheels left, then let it roll back until the right front wheel is against the kerb. Then set the parking brake.",
        context:
          "The three hill cases differ in where the runaway car ends up. Downhill with a kerb, wheels toward the kerb. Uphill with a kerb, wheels left with the tyre resting on the kerb as a chock. No kerb at all, wheels right so the car would roll away from the centre of the road. Arizona ends every version of the rule the same way: always set your parking brake.",
        trap:
          "Turning the wheels left and then leaving the car a foot from the kerb removes the chock entirely - the tyre has to be touching.",
        excerptKey: "park-uphill-curb",
        sourceLabel: "Arizona Driver License Manual - Section 2, Parking on a Hill",
        sourceUrl: HB,
      },
      {
        id: "az_s3_06",
        topic: "signs",
        question: "What colour marks the warning devices used in Arizona road work areas?",
        choices: ["Orange", "Yellow", "White", "Red"],
        correctIndex: 0,
        explanation:
          "Orange is the basic colour for alerting and controlling devices in construction and maintenance areas.",
        context:
          "Work zones use orange signs, cones, drums and barricades, often lit at night, and diamond-shaped construction signs. Flaggers wear orange vests or jackets and use red flags or stop-slow panels. Flashing arrow panels tell you to move to the right or left. The manual notes that most work zone crashes are rear-end collisions caused by drivers going too fast.",
        trap:
          "Orange means construction; yellow means a permanent hazard. The two colours look similar at speed but signal different things.",
        excerptKey: "work-zone-orange",
        sourceLabel: "Arizona Driver License Manual - Section 3, Warning Devices and Signs",
        sourceUrl: HB,
      },
      {
        id: "az_s3_07",
        topic: "speed",
        question:
          "You are on a road posted at 65 mph when a monsoon downpour cuts visibility hard. What speed is lawful?",
        choices: [
          "65 mph, since that is the posted maximum",
          "65 mph, provided your lights are on",
          "Anything under 65, because posted limits are maximums",
          "Whatever speed is reasonable for the conditions, which will be well below 65",
        ],
        correctIndex: 3,
        explanation:
          "Posted limits are set for the best conditions. Arizona requires you to reduce to a speed that is reasonable, which in a downpour is far under the sign.",
        context:
          "Arizona's statute frames this as a duty rather than advice: you may not drive faster than is reasonable and prudent for the conditions and hazards existing at the time, and that maximum drops further approaching intersections, railway crossings, curves and hillcrests. The manual's own guidance is to reduce speed on wet roads, on snow or ice, and to double your following distance in bad weather.",
        trap:
          "Driving at the posted number in bad weather is a defence people expect to work and it does not. The sign sets a ceiling, not a floor.",
        excerptKey: "speed-bad-weather",
        sourceLabel: "Arizona Driver License Manual - Section 3, Adjusting Speed to Conditions",
        sourceUrl: HB,
      },
      {
        id: "az_s3_08",
        topic: "sharing",
        question:
          "Arizona allows motorcycle lane filtering past stopped vehicles in limited circumstances. What is the posted speed limit ceiling for the street?",
        choices: [
          "35 mph",
          "45 mph",
          "55 mph",
          "There is no limit as long as traffic is stopped",
        ],
        correctIndex: 1,
        explanation:
          "The street's posted limit must not exceed 45 mph. Above that, filtering is not permitted at all.",
        context:
          "Arizona's filtering rule stacks three conditions. The street must be divided into at least two lanes going the same way, the posted limit must be 45 mph or less, and the motorcycle itself must not exceed 15 mph while filtering. It applies only to passing vehicles that are stopped in the same direction and lane - it is not permission to ride between moving traffic.",
        commonlyMissed: true,
        trap:
          "People remember one number and apply it to the wrong thing. Forty-five is the street's limit; fifteen is the motorcycle's speed.",
        excerptKey: "lane-filtering-45",
        sourceLabel: "Arizona Driver License Manual - Section 4, Sharing the Road with a Motorcycle",
        sourceUrl: HB,
      },
      {
        id: "az_s3_09",
        topic: "impairment",
        question:
          "You are arrested for DUI and refuse the breath test. What happens to your driving privilege?",
        choices: [
          "Nothing until a court convicts you",
          "A 90-day suspension",
          "An automatic 12-month loss of privilege",
          "A fine only, with no licence consequence",
        ],
        correctIndex: 2,
        explanation:
          "Refusing costs you twelve months automatically, and twenty-four months for a second refusal within eighty-four months.",
        context:
          "By driving in Arizona you have already consented to testing if you are arrested for DUI - that is the implied consent law. The officer chooses the test, of blood, breath, urine or another bodily substance. Failing to expressly agree, or not completing the test properly, counts as a refusal, and the suspension is administrative rather than something a court has to impose.",
        trap:
          "Refusing does not avoid the consequence, it guarantees one. A refusal costs longer than the 90-day suspension a failed test brings.",
        excerptKey: "refusal-12-months",
        sourceLabel: "Arizona Driver License Manual - Section 5, DUI Penalties",
        sourceUrl: HB,
      },
      {
        id: "az_s3_10",
        topic: "signals",
        question: "Your left-turn signal shows a flashing yellow arrow. What does it permit?",
        choices: [
          "A protected left turn with oncoming traffic held",
          "Nothing - stop and wait for a green arrow",
          "A left turn after yielding to oncoming vehicles and pedestrians",
          "A left turn only if no pedestrian button has been pressed",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow arrow lets you turn, but you yield first to any oncoming vehicle or pedestrian.",
        context:
          "The four turn signals form a ladder. Green arrow means turn, protected. Flashing yellow arrow means turn, but yield. Steady yellow arrow means the phase is ending - stop if you have not entered the intersection. Red arrow means no turn at all.",
        trap:
          "The flashing yellow arrow was introduced to replace the plain green ball, and drivers who learned on the green ball treat it as protected. It is not.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Arizona Driver License Manual - Section 3, Flashing Yellow Arrow",
        sourceUrl: HB,
      },
      {
        id: "az_s3_11",
        topic: "rules",
        question: "Where do Arizona's rules for turning apply?",
        choices: [
          "At all locations, including driveways and alleys",
          "Only at signalised intersections",
          "Only where turn arrows are painted on the road",
          "Only on public roads with a centre line",
        ],
        correctIndex: 0,
        explanation:
          "Everywhere. Arizona says the turning rules apply at all locations, driveways and alleys included, not just at intersections.",
        context:
          "That means the same routine every time: signal, reduce speed, check for pedestrians, mopeds and bicycles, and turn smoothly when it is safe. For a right turn, stay close to the right kerb and do not swing wide before or during the turn. Where a special left-turn lane is signed or marked, you must use it and may not turn left from any other lane.",
        trap:
          "Swinging wide to the left before a right turn is a habit drivers pick up from trucks. In a car it invites someone to slip up your inside.",
        excerptKey: "turning-rules-everywhere",
        sourceLabel: "Arizona Driver License Manual - Section 3, Turning",
        sourceUrl: HB,
      },
      {
        id: "az_s3_12",
        topic: "emergencies",
        question: "The back of your car starts to slide out on a slick surface. What do you do?",
        choices: [
          "Brake firmly to scrub off speed",
          "Steer opposite to the slide to counteract it",
          "Take your hands off the wheel and let it self-correct",
          "Turn the wheel quickly in the direction you want the car to go",
        ],
        correctIndex: 3,
        explanation:
          "Steer where you want to end up - which is the direction of the skid - and do it quickly rather than gradually.",
        context:
          "Arizona pairs the steering input with taking your foot off the brake, because more braking only deepens the skid. As the car straightens, turn the wheel quickly back the other way so it does not swing into a skid the other direction, and keep working the wheel back and forth until the car is tracking normally.",
        trap:
          "The correction is not a single input. Drivers get the first turn right and then hold it, which throws the car into a second skid.",
        excerptKey: "skid-recovery",
        sourceLabel: "Arizona Driver License Manual - Section 6, Recovering from Skids",
        sourceUrl: HB,
      },
      {
        id: "az_s3_13",
        topic: "licensing",
        question:
          "You passed the permit test at 15 years 9 months. When can you apply for a graduated licence?",
        choices: [
          "Six months after the permit was issued in an office, and once you are 16",
          "Immediately, since you passed the written test",
          "Three months after the permit is issued",
          "On your seventeenth birthday",
        ],
        correctIndex: 0,
        explanation:
          "You must hold the permit for six months - or until you turn 18 - and be at least 16, and the six months runs from the in-office issue date.",
        context:
          "MVD is explicit that the six-month clock starts when the instruction permit is issued in an office, not when the test was passed. The permit is valid for twelve months, so the window to convert is real but not unlimited. Applicants arriving with an out-of-state instruction permit get Arizona credit for the months already held.",
        trap:
          "Taking the Permit Test @ Home does not start the clock. You still have to attend an office for the vision test, photo and issue.",
        excerptKey: "permit-hold-6-months",
        sourceLabel: "Arizona MVD - Permit Test, Important Requirements",
        sourceUrl: PT,
      },
      {
        id: "az_s3_14",
        topic: "rightOfWay",
        question:
          "A fire engine is running to a call ahead of you with lights and siren. How far back must you stay?",
        choices: [
          "At least 500 feet",
          "At least 300 feet",
          "At least 200 feet",
          "Two seconds of following distance",
        ],
        correctIndex: 0,
        explanation:
          "Five hundred feet behind a fire department vehicle. The figure for a police vehicle responding to an emergency is 300 feet.",
        context:
          "Arizona sets two different following distances and pairs them in one sentence, which is exactly why they get confused. Five hundred feet behind fire apparatus, 300 feet behind police. You also may not drive into or park within the block where an emergency vehicle has stopped to deal with the emergency.",
        commonlyMissed: true,
        trap:
          "The two numbers are usually remembered as one. Fire is the bigger figure because fire apparatus stops abruptly and deploys into the road.",
        excerptKey: "follow-fire-500",
        sourceLabel: "Arizona Driver License Manual - Section 3, Following Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "az_s3_15",
        topic: "safety",
        question:
          "At roughly what speed can tyres lose all contact with the road in heavy rain, according to Arizona's manual?",
        choices: ["25 mph", "35 mph", "45 mph", "50 mph"],
        correctIndex: 3,
        explanation:
          "Fifty miles per hour is the figure the manual gives for complete loss of contact in a heavy downpour.",
        context:
          "Hydroplaning happens when the tyre rides up on a film of water instead of cutting through it. Under-inflated, worn or bald tyres lose contact at much lower speeds than 50 mph. The only real prevention is slowing down; if it happens, come off the accelerator, do not brake, avoid steering changes and hold the wheel firmly until the tyres grip again.",
        trap:
          "Braking during a hydroplane is the instinct and it does nothing, because the tyres are not touching the road to brake against.",
        excerptKey: "hydroplaning-50-mph",
        sourceLabel: "Arizona Driver License Manual - Section 5, Rain",
        sourceUrl: HB,
      },
      {
        id: "az_s3_16",
        topic: "parking",
        question:
          "You have missed your exit and pull onto the painted triangle between the freeway and the off-ramp to check your phone. What is wrong with that?",
        choices: [
          "Nothing, provided you use your hazard flashers",
          "It is only allowed for under five minutes",
          "It is against the law to drive over or park in any part of a gore area",
          "It is allowed on the right shoulder but not on the left",
        ],
        correctIndex: 2,
        explanation:
          "That triangle is a gore area, and Arizona bars both driving over it and parking in it.",
        context:
          "A gore area is the space between a through roadway and an entrance or exit ramp, marked out by two wide solid white lines. Arizona treats it seriously enough to assign three points to driving over or parking in one - the same as speeding. If you have missed the exit, the manual's instruction is to carry on to the next exit rather than stop or reverse.",
        trap:
          "The gore looks like spare tarmac provided for exactly this purpose. It is the one bit of pavement you may not use.",
        excerptKey: "gore-area-illegal",
        sourceLabel: "Arizona Driver License Manual - Section 2, Gore Area",
        sourceUrl: HB,
      },
      {
        id: "az_s3_17",
        topic: "rules",
        question:
          "Traffic in your lane has slowed to a crawl and the shoulder ahead is clear and wide. May you use it to pass?",
        choices: [
          "Yes, if you keep below 15 mph",
          "No - you may never pass on the right by driving off the paved or main portion of the roadway",
          "Yes, if you signal first",
          "Yes, on a rural highway but not in a city",
        ],
        correctIndex: 1,
        explanation:
          "Arizona rules this out flatly. Passing on the right never permits leaving the paved or main travelled part of the road.",
        context:
          "Passing on the right is allowed only in a narrow set of cases: when the driver ahead is turning left, on an open highway clearly marked for two or more lanes in your direction, or in a business or residential district where the pavement is marked for two or more lanes your way. Even then it must be safe, and even then it stays on the roadway.",
        trap:
          "Using the shoulder is also one of the two violations that can help make out aggressive driving in Arizona, which is a criminal misdemeanour.",
        excerptKey: "passing-right-not-off-pavement",
        sourceLabel: "Arizona Driver License Manual - Section 2, Passing",
        sourceUrl: HB,
      },
      {
        id: "az_s3_18",
        topic: "signals",
        question:
          "A pedestrian crossing beacon over the road is showing flashing red lights. What do you do?",
        choices: [
          "Continue at reduced speed",
          "Stop and wait for the beacon to go dark",
          "Treat it as a caution and proceed",
          "Stop, then proceed with caution once the pedestrian has cleared your half of the road",
        ],
        correctIndex: 3,
        explanation:
          "Flashing red at a pedestrian-activated crossing means stop, then go once the pedestrian has finished crossing the driver's half of the roadway.",
        context:
          "Arizona's pedestrian beacons run a sequence: flashing yellow means someone has pressed the button, solid yellow means prepare to stop, solid red means stop because a pedestrian is in the crossing, flashing red means stop then proceed once they clear your half, and all lights blank means proceed with caution if the crossing is clear.",
        commonlyMissed: true,
        trap:
          "The flashing red phase is not permission to go the moment the light starts flashing. The pedestrian must be clear of your half first.",
        excerptKey: "hawk-flashing-red",
        sourceLabel: "Arizona Driver License Manual - Section 3, Pedestrian Activated Signals",
        sourceUrl: HB,
      },
      {
        id: "az_s3_19",
        topic: "speed",
        question:
          "Arizona law makes some speeding a criminal offence rather than a civil one. At what speed does that begin approaching a school crossing?",
        choices: [
          "20 mph",
          "25 mph",
          "More than 35 mph",
          "More than 45 mph",
        ],
        correctIndex: 2,
        explanation:
          "Exceeding 35 mph approaching a school crossing is criminal speeding under Arizona statute - a class 3 misdemeanour, not a ticket.",
        context:
          "The excessive-speed statute has three limbs: over 35 mph approaching a school crossing, more than 20 mph over the posted limit in a business or residential district (or over 45 where nothing is posted), and more than 20 mph over the posted limit anywhere else. The driver manual does not mention criminal speeding at all, which is why it catches people out.",
        commonlyMissed: true,
        trap:
          "The school crossing limit is 15 mph, so drivers assume anything over that is simply a bigger fine. At 36 mph it stops being a fine and becomes a misdemeanour.",
        excerptKey: "criminal-speed-school",
        sourceLabel: "Arizona Revised Statutes 28-701.02 - Excessive speeds",
        sourceUrl: ARS_701_02,
      },
      {
        id: "az_s3_20",
        topic: "sharing",
        question:
          "You are sharing a wide lane with a motorcycle ahead of you and to the right. What does Arizona expect?",
        choices: [
          "Move up alongside so the rider can see you",
          "Stay out of the lane - motorcycles are entitled to its full width",
          "Pass within the lane if there is room",
          "Sound the horn before moving up",
        ],
        correctIndex: 1,
        explanation:
          "Arizona gives motorcycles the full width of a lane to manoeuvre in, and forbids crowding into the same lane as one.",
        context:
          "Riders move around within their lane for reasons that have nothing to do with turning - to dodge oil, potholes or debris, or to improve their view. That is also why Arizona warns against reading a rider's position as an intention. Returning to your lane too soon after passing a motorcycle can force the rider to swerve into traffic or off the road.",
        trap:
          "A rider drifting to one side of the lane looks like they are about to turn. Their turn signal is no guide either - motorcycle signals do not self-cancel.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Arizona Driver License Manual - Section 4, Sharing the Road with a Motorcycle",
        sourceUrl: HB,
      },
      {
        id: "az_s3_21",
        topic: "safety",
        question:
          "You are on a dark rural highway with no other traffic. When may you use high beams?",
        choices: [
          "Only when a vehicle is within 500 feet",
          "Only if there is no moonlight",
          "When no vehicle is coming toward you within 500 feet",
          "At any time outside a city",
        ],
        correctIndex: 2,
        explanation:
          "Five hundred feet is Arizona's threshold for oncoming traffic. Inside that distance you drop to low beams.",
        context:
          "The night-driving rules stack three distances. High beams on highways when no oncoming vehicle is within 500 feet, low beams when following another car within 200 feet, and low beams for city and town streets generally. Underneath all of them sits the overriding rule that you never drive faster than you can stop within the distance your lights show you.",
        trap:
          "The 200-foot figure applies to following, not to oncoming traffic. Two different distances for two different situations.",
        excerptKey: "high-beams-500-feet",
        sourceLabel: "Arizona Driver License Manual - Section 5, Night Driving",
        sourceUrl: HB,
      },
      {
        id: "az_s3_22",
        topic: "rules",
        question:
          "Two solid white lines separate your lane from the one beside it, both running the same direction. What do they mean?",
        choices: [
          "Passing is permitted with caution",
          "The lane beside you is an HOV lane you may enter at any time",
          "Crossing the double solid white line is prohibited",
          "The lines mark the edge of the roadway",
        ],
        correctIndex: 2,
        explanation:
          "A double solid white line separates two same-direction lanes and crossing it is prohibited.",
        context:
          "White lines separate traffic going the same way, and the pattern tells you what you may do. Broken white may be crossed with caution once you have signalled. A single solid white marks the edge of the roadway or discourages lane changes near intersections - cross that only in an emergency or to avoid a hazard, and when merging in and out of an HOV lane. Double solid white is closed.",
        trap:
          "Double solid white sections usually appear right where drivers most want to change lanes, at freeway entrances and exits. That is why they are there.",
        excerptKey: "double-white",
        sourceLabel: "Arizona Driver License Manual - Section 3, Double Solid White Line",
        sourceUrl: HB,
      },
      {
        id: "az_s3_23",
        topic: "rightOfWay",
        question: "You are on an on-ramp joining a busy Phoenix freeway. Who has to give way?",
        choices: [
          "Freeway traffic must open a gap for you",
          "You must yield to traffic already on the freeway",
          "Neither - merging is a shared duty at equal speed",
          "Whoever is travelling slower",
        ],
        correctIndex: 1,
        explanation:
          "Traffic entering a freeway yields to traffic already on it, and Arizona puts the responsibility for merging safely on the entering driver.",
        context:
          "Practically, that means matching the speed of traffic in the right lane before you merge rather than arriving slow and forcing everyone else to adjust. Signal, check the traffic around you, and merge when clear. You may not cross a solid line or drive through a gore area to do it.",
        trap:
          "Stopping at the end of an on-ramp to wait for a gap is more dangerous than merging, because you have given up the speed you need to fit in.",
        excerptKey: "freeway-entering-yield",
        sourceLabel: "Arizona Driver License Manual - Section 2, Entering a Freeway",
        sourceUrl: HB,
      },
      {
        id: "az_s3_24",
        topic: "signs",
        question:
          "Why does Arizona's manual emphasise learning sign shapes as well as their wording?",
        choices: [
          "Because the shape may be all you can make out in heavy rain, dust or fog",
          "Because signs are not always lit at night",
          "Because the wording changes between counties",
          "Because colour-blind drivers cannot read the colours",
        ],
        correctIndex: 0,
        explanation:
          "Poor visibility is the reason Arizona gives. In heavy rain, a dust storm or fog, the outline may be the only part of the sign you can resolve.",
        context:
          "That is why the shape system is so rigid: octagon for stop, downward triangle for yield, pentagon for school crossing, circle for a railway warning, diamond for a hazard, pennant for the start of a no-passing zone, rectangle for regulation. In a state where visibility can drop to nothing within a minute, that redundancy is doing real work.",
        trap:
          "Learning individual signs by their words leaves you blank when the words are unreadable - which is precisely when you most need to know.",
        excerptKey: "sign-shapes-visibility",
        sourceLabel: "Arizona Driver License Manual - Section 3, Traffic Signs",
        sourceUrl: HB,
      },
      {
        id: "az_s3_25",
        topic: "impairment",
        question:
          "How many points in a twelve-month period trigger a Traffic Survival School requirement in Arizona?",
        choices: ["6", "8", "10", "12"],
        correctIndex: 1,
        explanation:
          "Eight or more points inside any twelve-month period means Traffic Survival School, or your driving privilege may be suspended.",
        context:
          "Points attach on conviction or bail forfeiture for a moving violation. The serious offences carry eight on their own - DUI, extreme DUI, aggravated DUI, reckless driving, racing and aggressive driving each hit the threshold in one go. Leaving the scene of a crash is six, speeding is three, and most other moving violations are two.",
        trap:
          "One DUI conviction alone puts you at the threshold. The eight-point figure is not a budget you accumulate over several minor tickets.",
        excerptKey: "points-8-in-12",
        sourceLabel: "Arizona Driver License Manual - Section 5, Suspension and Traffic School",
        sourceUrl: HB,
      },
      {
        id: "az_s3_26",
        topic: "emergencies",
        question:
          "You have a minor no-injury bump on a freeway and both cars still drive. What does Arizona law require?",
        choices: [
          "Leave both vehicles exactly where they stopped until police arrive",
          "Move only if a police officer tells you to",
          "Exchange details in the travel lane, then move",
          "Move the vehicles out of the travel lanes if they are operable and can be moved safely",
        ],
        correctIndex: 3,
        explanation:
          "Arizona's quick clearance law requires you to clear the roadway in a minor no-injury crash where the vehicle still runs and can be moved safely.",
        context:
          "The point is to prevent the secondary crash that so often follows the first. Move to the emergency shoulder, the median, or off the highway altogether, then check on your passengers and call 911. Arizona protects you for doing it - moving the vehicle before police arrive cannot by itself be used to put you at fault.",
        trap:
          "The instinct to preserve the scene is exactly wrong here, and staying put is not the cautious option. Leaving the scene entirely is still forbidden.",
        excerptKey: "quick-clearance",
        sourceLabel: "Arizona Driver License Manual - Section 6, Quick Clearance",
        sourceUrl: HB,
      },
      {
        id: "az_s3_27",
        topic: "parking",
        question: "How close to a railway crossing may you park in Arizona?",
        choices: [
          "Twenty feet",
          "No closer than fifty feet",
          "Thirty feet",
          "Fifteen feet",
        ],
        correctIndex: 1,
        explanation:
          "Fifty feet, which is the largest of the parking distances the manual lists.",
        context:
          "The three headline figures sit at fifteen feet from a fire hydrant, twenty feet from a crosswalk at an intersection, and fifty feet from a railway crossing. The list also bars bridges and tunnels, freeways and interstates except in an emergency, sidewalks, crosswalks, driveways, and anywhere you would create a hazard for other traffic.",
        trap:
          "The three numbers are similar enough to swap, and the biggest hazard gets the biggest distance - railway first, then crosswalk, then hydrant.",
        excerptKey: "park-railroad-50",
        sourceLabel: "Arizona Driver License Manual - Section 2, Prohibited Parking",
        sourceUrl: HB,
      },
      {
        id: "az_s3_28",
        topic: "safety",
        question:
          "Lights are flashing red at a railway crossing ahead. How close to the nearest rail may you stop?",
        choices: [
          "As close as you like, provided the barrier is up",
          "Five feet",
          "Ten feet",
          "No closer than fifteen feet",
        ],
        correctIndex: 3,
        explanation:
          "Fifteen feet from the nearest rail, and the same requirement applies to a lowered barricade, ringing bells or a flagger warning of a train.",
        context:
          "Once stopped, you wait until every signal has stopped and the barricade is fully raised before crossing - and you never drive around or under a lowered barricade. Arizona adds practical rules: expect a train on any track at any time, never get trapped on a crossing, look for a second train from the other direction, and if your vehicle stalls on the tracks, get out of it.",
        trap:
          "Watching one train clear and moving off immediately is how people meet the second one. Wait for the signals themselves to stop.",
        excerptKey: "railroad-15-feet",
        sourceLabel: "Arizona Driver License Manual - Section 3, Railroad Crossing Sign",
        sourceUrl: HB,
      },
      {
        id: "az_s3_29",
        topic: "rules",
        question:
          "You are alone in your car on a Phoenix freeway on a Tuesday morning during the posted HOV hours. May you use the diamond lane?",
        choices: [
          "No - the lane needs at least two people including the driver at posted times",
          "Yes, if you are travelling under the speed limit",
          "Yes, HOV rules apply only to trucks",
          "Yes, provided you merge across the solid white line carefully",
        ],
        correctIndex: 0,
        explanation:
          "Arizona restricts the HOV lane to vehicles carrying at least two people, including the driver, during the posted hours Monday to Friday.",
        context:
          "The diamond markings on the pavement identify the lane. Outside the posted hours the restriction lifts. Motorcycles and buses are permitted alongside carpools, and the manual warns that violating the restriction brings substantial fines. Merging in and out is one of the few situations where you may legally cross a solid white line.",
        trap:
          "The restriction runs at posted times on weekdays, so a driver who has only ever used the lane at the weekend assumes it is always open.",
        excerptKey: "hov-two-persons",
        sourceLabel: "Arizona Driver License Manual - Section 2, Freeway Restrictions",
        sourceUrl: HB,
      },
      {
        id: "az_s3_30",
        topic: "sharing",
        question:
          "A large truck ahead of you swings out to the left and its right indicator is on. What is happening?",
        choices: [
          "The driver has left the signal on by mistake",
          "It is changing lanes to the left",
          "It is setting up for a wide right turn",
          "It is pulling over to let you pass",
        ],
        correctIndex: 2,
        explanation:
          "Trucks make wide right turns and often have to leave an open space to the right first. The signal tells you where it is going, not where it currently is.",
        context:
          "That open space on the right is not an invitation. Arizona's guidance is to avoid passing a truck on the right wherever there is any chance it is about to turn that way. Trucks also need roughly twice the distance to stop, so cutting in front of one halves the room it has to avoid you.",
        trap:
          "The gap on the right looks like a lane the truck has vacated. It is the space the trailer is about to sweep through.",
        excerptKey: "truck-right-turns",
        sourceLabel: "Arizona Driver License Manual - Section 4, Sharing the Road with a Truck",
        sourceUrl: HB,
      },
      {
        id: "az_s3_31",
        topic: "signals",
        question:
          "You are stopped at a red light on a one-way street, wanting to turn left onto another one-way street. What does Arizona allow?",
        choices: [
          "Nothing - only right turns are permitted on red",
          "You may make the turn on red after stopping and yielding, unless signs prohibit it",
          "You may turn only if a green arrow appears",
          "You may turn only between 6am and 6pm",
        ],
        correctIndex: 1,
        explanation:
          "One-way to one-way is the single left-turn situation Arizona permits against a red light, after stopping and yielding to traffic and pedestrians.",
        context:
          "The manual calls it out as the only left turn where that is allowed. You approach in the lane nearest the left kerb, turn without swinging wide, and finish in the extreme left lane of the road you are entering. A left turn from a one-way onto a two-way road cannot be made against a red light at all.",
        commonlyMissed: true,
        trap:
          "Some states forbid left on red entirely and some allow it only from a one-way onto a one-way. Arizona is in the second group, and a red arrow still overrides it.",
        excerptKey: "left-on-red-one-way",
        sourceLabel: "Arizona Driver License Manual - Section 3, Left Turns",
        sourceUrl: HB,
      },
      {
        id: "az_s3_32",
        topic: "speed",
        question:
          "You are driving noticeably slower than the traffic around you on a two-lane highway. What does Arizona ask of you?",
        choices: [
          "Keep right and let faster traffic pass",
          "Maintain your speed - you are within the limit",
          "Move to the left lane so others can pass on the right",
          "Use your hazard flashers to warn following drivers",
        ],
        correctIndex: 0,
        explanation:
          "Arizona says driving too slowly can be as dangerous as driving too fast, and asks slower drivers to keep right and let faster traffic through.",
        context:
          "The statute goes further, prohibiting driving at a speed less than is reasonable and prudent under existing conditions. Practically, that is the same rule as staying right and using the left lane only to pass. If a driver behind wants past, reducing speed a little lets them clear you faster and get back in.",
        trap:
          "Being under the limit is not automatically safe or lawful. A slow vehicle in the wrong lane creates the overtaking that causes crashes.",
        excerptKey: "impeding-traffic",
        sourceLabel: "Arizona Driver License Manual - Section 3, Impeding Traffic",
        sourceUrl: HB,
      },
      {
        id: "az_s3_33",
        topic: "licensing",
        question:
          "What are Arizona's minimum liability insurance limits for a private passenger vehicle?",
        choices: [
          "$15,000 / $30,000 / $10,000",
          "$25,000 / $50,000 / $15,000",
          "$30,000 / $60,000 / $25,000",
          "$50,000 / $100,000 / $25,000",
        ],
        correctIndex: 1,
        explanation:
          "Twenty-five thousand for bodily injury to one person, fifty thousand for two or more, and fifteen thousand for property damage.",
        context:
          "Every vehicle operated on Arizona roads has to carry liability cover from a company licensed in the state, and you must have proof of it in the vehicle. Insurers report cancellations, non-renewals and new policies to MVD directly. Failing to keep proper cover with the right VIN on file can suspend both your registration and your licence.",
        trap:
          "The older 15/30/10 figures still circulate widely. Policies issued or renewed from 1 July 2020 carry the higher limits.",
        excerptKey: "insurance-minimums",
        sourceLabel: "Arizona Driver License Manual - Vehicle Insurance",
        sourceUrl: HB,
      },
      {
        id: "az_s3_34",
        topic: "safety",
        question: "What exactly is a blind spot, as Arizona's manual defines it?",
        choices: [
          "Areas on the left and right of your vehicle that your mirrors do not show",
          "The stretch of road hidden by the bonnet at close range",
          "The area directly behind the vehicle hidden by the boot",
          "Any area obscured by a passenger's head",
        ],
        correctIndex: 0,
        explanation:
          "Arizona defines blind spots as the areas to the left and right that are not visible in your mirror - which is why a shoulder check is not optional.",
        context:
          "The manual extends the idea beyond the vehicle: parked cars near an intersection, or bushes, trees and buildings, create blind spots too, and the answer there is to inch forward slowly until you can see. It also asks you to avoid sitting in someone else's blind spot - speed up or drop back rather than linger there.",
        trap:
          "Mirrors alone are never enough. Arizona is explicit that you look over your shoulder before changing lanes.",
        excerptKey: "blind-spots-definition",
        sourceLabel: "Arizona Driver License Manual - Section 2, Positioning Vehicle",
        sourceUrl: HB,
      },
      {
        id: "az_s3_35",
        topic: "rightOfWay",
        question:
          "The car in the lane beside you has stopped for a pedestrian at a crossing. Your lane is clear and your light is green. What may you do?",
        choices: [
          "Proceed, because your lane is clear",
          "Proceed slowly while watching for the pedestrian",
          "You may not pass the stopped vehicle",
          "Proceed if the pedestrian has not yet reached your lane",
        ],
        correctIndex: 2,
        explanation:
          "Arizona forbids passing a vehicle stopped for a pedestrian, even where your own lane is clear and you have a green light.",
        context:
          "The rule exists because the stopped car is hiding the pedestrian from you and hiding you from the pedestrian. The statute puts it the same way, barring a driver approaching from behind from overtaking a vehicle stopped at a marked or unmarked crosswalk to let someone cross.",
        commonlyMissed: true,
        trap:
          "A green light feels like it settles the question. It does not - the stopped car in the next lane overrides it.",
        excerptKey: "no-pass-stopped-for-pedestrian",
        sourceLabel: "Arizona Driver License Manual - Section 3, Pedestrians",
        sourceUrl: HB,
      },
    ],
  },
];
