import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets 1 to 3: the Iowa Driver's License Manual
// (form MM1170, 07/23/2026), Iowa Code chapters 321 and 321J, 761 Iowa
// Administrative Code chapter 604, and the iowadot.gov licensing pages.
//
// Set 5 is built on what learners and drivers in Iowa actually get wrong. The
// forum research behind it is written up in docs/driving/research/iowa.md; the
// rules themselves come from the manual and the Code, and where a thread
// contradicted the official source the official source won and the confusion
// became the trap.
const HB = "https://iowadot.gov/media/7308/download?inline=";
/** The manual's printed page number is also its PDF page number throughout. */
const hb = (page: number) => `${HB}#page=${page}`;
const code = (section: string) => `https://www.legis.iowa.gov/docs/code/${section}.pdf`;
const PERMIT =
  "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18";
const INTERMEDIATE =
  "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/intermediate-license";
const FULL =
  "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/full-license";
const SMRL =
  "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/special-minors-restricted-license";
const ONLINETEST =
  "https://iowadot.gov/drivers-licenses-ids/driver-education/online-permit-test-skip-trip";

export const iowaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions drawn from every chapter, including the corners people skip: the driver-assistance section, the equipment numbers, the crash procedure and the weather chapter that runs from hydroplaning to tornadoes.",
    questions: [
      {
        id: "ia_s4_01",
        topic: "safety",
        question: "Which vehicle technology does Iowa NOT allow during the drive test?",
        choices: [
          "A backup camera",
          "A blind spot monitor",
          "Automatic emergency braking",
          "Adaptive cruise control",
        ],
        correctIndex: 3,
        explanation:
          "Iowa splits vehicle technology into safety features, which you may use on the test, and convenience features, which you may not. Adaptive cruise control and automatic parallel parking are the two convenience features the manual names.",
        context:
          "Everything else on the manual's table is permitted: back-up warnings, blind spot monitors, cameras, curve speed warnings, detection systems, forward collision warnings, high speed alerts, lane departure warnings, parking sensors, rear cross-traffic alerts, automatic emergency braking, automatic reverse braking, lane keeping assist and left turn crash avoidance. You must still be able to drive without any of them.",
        trap: "The line is not how advanced the system is. It is whether it does part of the driving for you as a convenience rather than warning you of a hazard.",
        excerptKey: "adas-test-tech",
        sourceLabel: "Iowa Driver's License Manual - 3.3 Advanced Driver-Assistance Systems",
        sourceUrl: hb(26),
      },
      {
        id: "ia_s4_02",
        topic: "signs",
        question: "What does a white rectangular sign mean in Iowa?",
        choices: [
          "It gives a general warning",
          "It points to a service",
          "It marks a route number",
          "It is regulatory, giving information about enforceable laws and ordinances",
        ],
        correctIndex: 3,
        explanation:
          "White is Iowa's regulatory colour. A white sign is telling you what the law requires or forbids at that spot, not warning you about something ahead.",
        context:
          "Regulatory signs cover traffic direction, lane use, turning, speed and parking. Some carry a red circle with a slash over a symbol, which always means you may not do the thing shown - no left turn, no right turn, no U-turn. The rectangle shape is shared with guide and warning signs, so with a rectangle it is the colour that identifies it.",
        trap: "The rectangle is used for regulatory, guide and warning signs alike, so shape alone will not answer this one.",
        excerptKey: "colour-white",
        sourceLabel: "Iowa Driver's License Manual - 2.1 Traffic Signs",
        sourceUrl: hb(6),
      },
      {
        id: "ia_s4_03",
        topic: "emergencies",
        question: "At what level of property damage must an Iowa crash be reported to police?",
        choices: ["More than $500", "More than $1,000", "More than $1,500", "More than $2,500"],
        correctIndex: 2,
        explanation:
          "More than $1,500 in property damage, or any injury or death, makes reporting a legal requirement. You have 72 hours, and missing it costs you your driving privileges.",
        context:
          "The manual sets out a four-step procedure. Steer it and clear it if the vehicle is operable and nobody is hurt, call 911 with as much detail as you can including possible injuries and the location, hand the officer your insurance information, registration and licence, and then report to your own insurer.",
        trap: "A modern bumper repair passes $1,500 easily, so \"it was only a fender bender\" is not the test the law applies.",
        excerptKey: "crash-report-1500",
        sourceLabel: "Iowa Driver's License Manual - 5.15 Involvement in a Crash",
        sourceUrl: hb(63),
      },
      {
        id: "ia_s4_04",
        topic: "rules",
        question: "What does the Iowa manual say about driving on the shoulder?",
        choices: [
          "Never drive or pass on it, paved or not, unless a traffic control device or an official directs you",
          "It is permitted to let faster traffic by",
          "It is permitted where the shoulder is paved",
          "It is permitted below 25 mph",
        ],
        correctIndex: 0,
        explanation:
          "The prohibition is absolute except when a traffic control device or an official tells you otherwise, and it covers paved shoulders as well as gravel ones.",
        context:
          "The manual gives the reason: other drivers will not expect you to be there and may pull off the road without looking. It is the same reasoning behind the snowplow rule later in the book - never pass on the shoulder side of a plow, because that is where the plow is putting the snow.",
        trap: "A wide paved shoulder invites use as a courtesy lane. Iowa treats it as part of the roadside, not part of the road.",
        excerptKey: "lane-use-shoulder",
        sourceLabel: "Iowa Driver's License Manual - 2.18 General Lane Use",
        sourceUrl: hb(16),
      },
      {
        id: "ia_s4_05",
        topic: "signals",
        question: "What does a steady yellow arrow mean at an Iowa intersection?",
        choices: [
          "Yield to oncoming traffic, then turn",
          "The turn is protected for a few more seconds",
          "Turn only if a vehicle is behind you",
          "The turn signal is about to turn red; do not enter the intersection if you can stop safely",
        ],
        correctIndex: 3,
        explanation:
          "The steady yellow arrow ends the turn phase. You do not enter the intersection if you can stop safely, and if you are already inside it you complete the turn.",
        context:
          "It is easy to confuse with the flashing yellow arrow, which does the opposite job - that one is an invitation to turn after yielding, and it runs while oncoming traffic has a green. The steady yellow arrow is a countdown to a red arrow, which stops left and right turns outright.",
        trap: "Both yellow arrows appear in a left-turn signal head. One is asking you to find a gap; the other is telling you the phase is over.",
        excerptKey: "signal-steady-yellow-arrow",
        sourceLabel: "Iowa Driver's License Manual - 2.9 Traffic Signals",
        sourceUrl: hb(11),
      },
      {
        id: "ia_s4_06",
        topic: "parking",
        question: "How close to a fire station entrance may you park in Iowa?",
        choices: ["No closer than 10 feet", "No closer than 15 feet", "No closer than 20 feet", "No closer than 30 feet"],
        correctIndex: 2,
        explanation:
          "Twenty feet from the driveway entrance to a fire station. Iowa Code Section 321.358(9) adds a second restriction on the opposite side of the street.",
        context:
          "That second half is the one the manual leaves out: on the side of a street opposite a fire station entrance, you may not park within 75 feet of the entrance when the spot is properly signposted. The manual's shorter version gives you 20 feet and leaves the rest to the sign.",
        trap: "The 20 feet is measured from the driveway entrance, not from the building.",
        excerptKey: "code-parking-fire-station",
        sourceLabel: "Iowa Code Section 321.358(9) - Stopping, standing, or parking",
        sourceUrl: code("321.358"),
      },
      {
        id: "ia_s4_07",
        topic: "safety",
        question: "How much force can a 20-pound object exert in a sudden stop at 60 mph, according to the Iowa manual?",
        choices: ["About 100 pounds", "About 500 pounds", "Well over 1,000 pounds", "About the same 20 pounds"],
        correctIndex: 2,
        explanation:
          "Well over 1,000 pounds. That is why the manual asks you to secure loose objects rather than treating them as clutter.",
        context:
          "The same section flags a second and quieter risk: an object on the floor can roll under the brake pedal and make it difficult or impossible to brake at all. Both belong to the manual's wider point that most of what keeps you safe happens before the engine starts.",
        trap: "A backpack on the rear parcel shelf feels harmless because it is light. Its weight is not what turns it into a projectile.",
        excerptKey: "loose-objects",
        sourceLabel: "Iowa Driver's License Manual - 3.6 Securing Loose Objects",
        sourceUrl: hb(35),
      },
      {
        id: "ia_s4_08",
        topic: "sharing",
        question: "What does the Iowa manual say happens to occupants of cars in crashes involving large trucks?",
        choices: [
          "They sustain about half of the fatalities",
          "They are usually less badly hurt than the truck occupants",
          "The manual does not give a figure",
          "They sustain 78 percent of the fatalities, usually the driver",
        ],
        correctIndex: 3,
        explanation:
          "Seventy-eight percent, and usually the driver. The number is there to explain why the rest of the truck advice is worth following.",
        context:
          "The practical rules that follow are to stay out of the no-zones around the front, back and sides of the truck, to avoid pulling in front of a truck and creating an emergency braking situation, and to leave room for the wide swing to the left that a truck often needs before turning right.",
        trap: "Size makes the truck safer for the people in it, which is precisely why the fatality share sits so heavily on the car.",
        excerptKey: "truck-fatalities-78",
        sourceLabel: "Iowa Driver's License Manual - 5.9 Sharing the Road with Large Trucks",
        sourceUrl: hb(57),
      },
      {
        id: "ia_s4_09",
        topic: "rightOfWay",
        question: "A vehicle is turning left from a driveway into your lane while you are already on the road. Who yields?",
        choices: [
          "The driver leaving the driveway",
          "You, because they signalled first",
          "Whoever is moving more slowly",
          "Neither, because a driveway is not an intersection",
        ],
        correctIndex: 0,
        explanation:
          "Anyone entering a road from a driveway, alley or roadside yields to vehicles already on the main road. Signalling changes nothing about who has the duty.",
        context:
          "Iowa lists this among its controlled-intersection right-of-way rules and pairs it with a required stop before crossing the sidewalk on the way out. Iowa Code Section 321.320 covers the mirror image, a driver turning left off the main road into a driveway, who yields to oncoming traffic.",
        trap: "A driveway is not an intersection in ordinary speech, but the right-of-way rule treats it as one for this purpose.",
        excerptKey: "driveway-yield",
        sourceLabel: "Iowa Driver's License Manual - 2.22 Intersections",
        sourceUrl: hb(19),
      },
      {
        id: "ia_s4_10",
        topic: "speed",
        question: "You are towing a trailer on an Iowa road with no posted speed limit. What is your limit?",
        choices: ["35 mph", "45 mph", "55 mph", "The same as any other vehicle"],
        correctIndex: 1,
        explanation:
          "Forty-five mph for any vehicle pulling another vehicle. The figure is on the manual's unposted list and does not depend on the road.",
        context:
          "It sits beside the other three district figures - 20 in a business district, 25 in a residence or school district, 45 in a suburban district - and above them the manual's list continues into figures that Iowa Code Section 321.285 states differently, which is why a posted sign governs on any bigger road.",
        trap: "The towing limit is not a district figure, so a rural road does not release you from it.",
        excerptKey: "speed-unposted-list",
        sourceLabel: "Iowa Driver's License Manual - 4.5 Appropriate Speed",
        sourceUrl: hb(42),
      },
      {
        id: "ia_s4_11",
        topic: "signs",
        question: "A yellow sign shows a car with wavy lines behind its rear wheels and the words SLIPPERY WHEN WET. What should you do?",
        choices: [
          "Slow down under wet conditions",
          "Slow down at all times, wet or dry",
          "Turn on your hazard lights",
          "Change lanes to the left",
        ],
        correctIndex: 0,
        explanation:
          "The warning is conditional. The road ahead becomes slippery in wet weather, so the sign is telling you what to do when it rains rather than what to do today.",
        context:
          "Iowa's warning signs mostly work like this - they describe a hazard and leave the response to your judgement. The chevron is the exception worth knowing: it is used alongside a curve sign when the change of direction needs extra attention, and it does not carry a condition.",
        trap: "A permanent sign describing a temporary condition invites people to ignore it in the dry or to slow needlessly in the dry. Read the words on it.",
        excerptKey: "warning-slippery",
        sourceLabel: "Iowa Driver's License Manual - 2.3 Warning Signs",
        sourceUrl: hb(9),
      },
      {
        id: "ia_s4_12",
        topic: "impairment",
        question: "What is the maximum fine per person for an open container violation in an Iowa vehicle?",
        choices: ["$100", "$200", "$500", "$1,000"],
        correctIndex: 1,
        explanation:
          "Up to $200, and it applies to each driver and each passenger in the vehicle rather than once per car.",
        context:
          "The offence is a simple misdemeanor. Iowa Code Section 321.284A extends the same rule to a beverage containing any amount of tetrahydrocannabinol, and defines the passenger area to include the glove compartment and anything else readily accessible from a seat. The trunk, or the space behind the last upright seat in a vehicle with no trunk, is the lawful place.",
        trap: "Everyone in the car is exposed, not only the driver, which is what makes it an expensive mistake in a full car.",
        excerptKey: "open-container-fine",
        sourceLabel: "Iowa Driver's License Manual - 3.8 Alcohol and Drugs",
        sourceUrl: hb(37),
      },
      {
        id: "ia_s4_13",
        topic: "safety",
        question: "What does the Iowa manual say about tapping your brake pedal three or four times quickly?",
        choices: [
          "It is a way to test the brakes before a hill",
          "It resets an ABS fault",
          "It is prohibited, because it confuses following traffic",
          "It warns following drivers when you are about to slow somewhere unexpected",
        ],
        correctIndex: 3,
        explanation:
          "It is a signal, made with the brake lights. Use it when you are going to slow somewhere another driver would not expect it, or when the vehicle behind is following too closely.",
        context:
          "The manual's whole communicating section works this way: your headlights, horn, brake lights, turn signals and hazard lights are the vocabulary you have for telling other drivers what you are about to do. Crashes often happen because one driver did not see another, or did something the other did not expect.",
        trap: "Brake-checking a tailgater is not what this is. The manual's advice for a tailgater is to move right, signal early and encourage them to pass.",
        excerptKey: "brake-lights-warn",
        sourceLabel: "Iowa Driver's License Manual - 4.4 Braking and Stopping",
        sourceUrl: hb(41),
      },
      {
        id: "ia_s4_14",
        topic: "rules",
        question: "How does the Iowa manual describe changing lanes?",
        choices: [
          "Change as many lanes as you need in one movement while the gap is there",
          "Change lanes only at intersections",
          "Signal and move; other traffic must make room",
          "Change one lane at a time, after checking mirrors and blind spots and yielding to traffic already in that lane",
        ],
        correctIndex: 3,
        explanation:
          "One lane at a time, and the duty to yield falls on you rather than on the traffic already in the lane you want.",
        context:
          "The manual's sequence is signal, maintain speed, check mirrors, check blind spots over your shoulder, and check for other road users including anyone in the far lane who may be planning the same move. It warns that people naturally turn the wheel in the direction they turn their head, so keep the wheel straight during the shoulder check.",
        trap: "Crossing two lanes in one movement is exactly how you meet the driver coming the other way across the middle lane.",
        excerptKey: "lane-change-one-at-a-time",
        sourceLabel: "Iowa Driver's License Manual - 4.9 Changing Lanes",
        sourceUrl: hb(44),
      },
      {
        id: "ia_s4_15",
        topic: "emergencies",
        question: "Your accelerator sticks open on an Iowa road. What does the manual tell you to do?",
        choices: [
          "Turn off the engine immediately",
          "Pump the accelerator to free it",
          "Shift quickly to neutral, keep your eyes on the road, and pull off when it is safe",
          "Apply the parking brake",
        ],
        correctIndex: 2,
        explanation:
          "Neutral first. That disconnects the engine from the wheels while leaving you your steering and your brakes, and you turn the engine off only after you have stopped.",
        context:
          "Turning the key off while moving is the dangerous version of the same instinct, because Iowa's manual warns separately that removing the key locks the steering wheel and can cause a loss of control. The manual asks you never to remove the key or let a passenger touch it while driving.",
        trap: "Killing the engine sounds decisive and takes away your power steering and, if the key comes out, your steering altogether.",
        excerptKey: "stuck-gas-pedal",
        sourceLabel: "Iowa Driver's License Manual - 5.14 Equipment Failure Emergencies",
        sourceUrl: hb(62),
      },
      {
        id: "ia_s4_16",
        topic: "signals",
        question: "What are the solid green rectangles with a bicycle symbol at some Iowa signalised intersections?",
        choices: [
          "Bicycle boxes, giving bicyclists a safe way to turn",
          "Reserved bus lanes",
          "Areas where cars may not stop at any time",
          "Markings warning of a bike path crossing",
        ],
        correctIndex: 0,
        explanation:
          "A bicycle box gives people on bikes a place to position themselves for a turn at a signal. It sits next to the crosswalk and covers the full width of the travel lane.",
        context:
          "Iowa uses green paint elsewhere in bike infrastructure too. A green-filled bike lane is a place motorists should watch carefully before crossing and should never stop on. A separate pavement symbol marks the spot where a bicyclist should stand to trigger the traffic signal detector.",
        trap: "Green paint on Iowa roads is about bicycles, not about permission for motor traffic.",
        excerptKey: "bike-lane-green-paint",
        sourceLabel: "Iowa Driver's License Manual - 2.19 Bicycle Lanes and Pavement Markings",
        sourceUrl: hb(17),
      },
      {
        id: "ia_s4_17",
        topic: "parking",
        question: "Which of these does Iowa's parking prohibition cover?",
        choices: [
          "Parking alongside another vehicle already stopped at the curb",
          "Parking more than 100 feet from a street light",
          "Parking on a street with a posted limit above 30 mph",
          "Parking facing downhill without turning the wheels",
        ],
        correctIndex: 0,
        explanation:
          "Double parking is on both the manual's list and Iowa Code Section 321.358(11), which forbids stopping on the roadway side of any vehicle already stopped or parked at the curb.",
        context:
          "Read the list once as a whole and it stops being a memory exercise: sidewalk, driveway, intersection, crosswalk, five feet from a hydrant, 10 feet on the approach to a stop sign or signal, the ends of a safety zone, 50 feet from the nearest rail, 20 feet from a fire station entrance, alongside an excavation, double parking, a bridge outside city limits or a tunnel, a signed no parking zone, and a blocked curb cut or ramp.",
        trap: "A short stop with the hazard lights on is still stopping, and Iowa's rule says stop, stand or park.",
        excerptKey: "no-park-list",
        sourceLabel: "Iowa Driver's License Manual - 2.26 Parking Not Allowed",
        sourceUrl: hb(21),
      },
      {
        id: "ia_s4_18",
        topic: "safety",
        question: "How does the Iowa manual say you should set the left-side mirror?",
        choices: [
          "So you can just see the side of your own car while sitting normally",
          "So it shows the lane two over",
          "So it duplicates what the inside mirror shows",
          "Lean toward the left window and set it so you can barely see the side of the car",
        ],
        correctIndex: 3,
        explanation:
          "You lean toward the window to set it, so that sitting up straight your own car is no longer visible. That aims the mirror at the blind spot instead of at your own bodywork.",
        context:
          "The right mirror is set the same way, leaning over the centre console. The inside mirror is the one that should frame the entire rear window, and it stays the main mirror for what is behind you. The manual says this arrangement gives the best view of adjacent lanes.",
        trap: "Seeing your own car in the mirror feels like a reference point. It is the part of the view that is showing you nothing useful.",
        excerptKey: "mirror-left-side",
        sourceLabel: "Iowa Driver's License Manual - 3.2 Adjusting Seats and Mirrors",
        sourceUrl: hb(25),
      },
      {
        id: "ia_s4_19",
        topic: "sharing",
        question: "Why does the Iowa manual warn that a motorcycle's turn signal may not mean what it says?",
        choices: [
          "Motorcycle signals are not required by law",
          "Motorcycle signals are hard to see in daylight",
          "Motorcyclists often signal the opposite direction to warn following traffic",
          "Motorcycle signals do not shut off automatically, so a rider may have left one running",
        ],
        correctIndex: 3,
        explanation:
          "Motorcycle indicators do not cancel themselves after a turn, so a blinking signal may be left over from the last one. Wait until the rider actually starts to turn.",
        context:
          "The manual makes the same point twice, once in the motorcycle section and once as the \"false\" turn signal warning in its intersections chapter, where it applies to any vehicle. A driver may plan to turn beyond you, or may simply have forgotten the signal is on.",
        trap: "Acting on a signal rather than on movement is the classic way a left-turning driver pulls into the path of a motorcycle.",
        excerptKey: "motorcycle-signals",
        sourceLabel: "Iowa Driver's License Manual - 5.10 Sharing the Road with Motorcycles",
        sourceUrl: hb(58),
      },
      {
        id: "ia_s4_20",
        topic: "signs",
        question: "What warning does a circular yellow sign give in Iowa?",
        choices: [
          "A roundabout is ahead",
          "The road ends ahead",
          "A traffic signal is ahead",
          "A railroad crossing is ahead",
        ],
        correctIndex: 3,
        explanation:
          "The circle is reserved for the railroad crossing advance warning. Iowa gives it its own shape precisely so you can recognise it before you can read it.",
        context:
          "The crossing itself is marked with a crossbuck, and a number sign beneath the crossbuck counts the sets of tracks. Advance pavement markings appear on the road as well. At a passively protected crossing, with no lights or gates, all of that is the only warning you will get.",
        trap: "A SIGNAL AHEAD sign is a diamond with a picture of a traffic light on it, not a circle.",
        excerptKey: "shape-circle",
        sourceLabel: "Iowa Driver's License Manual - 2.1 Traffic Signs",
        sourceUrl: hb(7),
      },
      {
        id: "ia_s4_21",
        topic: "rightOfWay",
        question: "How does the Iowa manual describe what right-of-way rules actually do?",
        choices: [
          "They give one driver the right to proceed",
          "They only apply where signs are posted",
          "They apply only between motor vehicles",
          "They say who must yield; they do not give anyone the right of way",
        ],
        correctIndex: 3,
        explanation:
          "Iowa states it as a duty rather than an entitlement: the law says who must yield, and it does not give anyone the right of way.",
        context:
          "The manual draws the practical conclusion in the next sentence - regardless of who has the right of way, you should do everything you can to avoid striking a pedestrian or another vehicle. It then adds that failure to yield is the number one cause of traffic-related fatalities in Iowa.",
        trap: "\"I had the right of way\" is a statement about the other driver's duty, and it is no defence if you could have avoided the crash.",
        excerptKey: "row-law-says-who-yields",
        sourceLabel: "Iowa Driver's License Manual - 2.22 Intersections",
        sourceUrl: hb(18),
      },
      {
        id: "ia_s4_22",
        topic: "rules",
        question: "You are on a multi-lane Iowa roundabout. Which of these does the manual tell you not to do?",
        choices: [
          "Change lanes inside the roundabout",
          "Signal before your exit",
          "Choose your lane before the yield line",
          "Yield to traffic already circulating",
        ],
        correctIndex: 0,
        explanation:
          "Lane changes inside a roundabout are out. You pick your lane before the yield line, using the lane control signs and pavement markings, and you keep it all the way round.",
        context:
          "The manual's other multilane don'ts are passing or driving beside trucks and buses, which may straddle lanes or may not see you, and driving in the outside lane further round than the markings allow, which blocks vehicles legally exiting from the inside lane. The truck apron in the middle is there for long vehicles, not for cars.",
        trap: "Realising you are in the wrong lane inside a roundabout feels like an emergency. The manual's answer is to go round again, not to change lanes.",
        excerptKey: "roundabout-multilane-dont",
        sourceLabel: "Iowa Driver's License Manual - 5.5 Roundabouts",
        sourceUrl: hb(54),
      },
      {
        id: "ia_s4_23",
        topic: "speed",
        question: "What speed limit does Iowa Code set on rural interstate highways?",
        choices: ["60 mph", "65 mph", "70 mph", "75 mph"],
        correctIndex: 2,
        explanation:
          "Seventy mph. Iowa Code Section 321.285(5)(a) sets it for the interstate road system, and the manual gives the same figure for rural interstates.",
        context:
          "The same subsection sets 65 mph on fully controlled-access, divided, multilane highways that are not part of the interstate system, and lets the department set 65 on certain other divided multilane roads. A minimum applies too: a vehicle that cannot attain and hold 40 mph is barred from the interstate.",
        trap: "Sixty-five is the figure for a divided four-lane highway that is not an interstate. The interstate number is 70.",
        excerptKey: "code-speed-interstate-70",
        sourceLabel: "Iowa Code Section 321.285(5)(a) - Speed restrictions",
        sourceUrl: code("321.285"),
      },
      {
        id: "ia_s4_24",
        topic: "safety",
        question: "How much can dirt on your light lenses reduce their effectiveness, according to the Iowa manual?",
        choices: ["By about 10 percent", "By about 25 percent", "By about 50 percent", "It makes no measurable difference"],
        correctIndex: 2,
        explanation:
          "By 50 percent. Half your lighting can disappear behind a winter's worth of road salt without a bulb ever failing.",
        context:
          "The manual's lighting checklist is a walk around the car: two headlights, at least one red rear light visible from 500 feet, a white light over the rear plate, and working turn signals on any vehicle that has them. It also warns that a misaligned headlight shines where it does not help you and may dazzle other drivers, and that being flashed at repeatedly is a symptom of that.",
        trap: "Lights that come on are not the same as lights that work. The check the manual describes is done from outside the car.",
        excerptKey: "dirty-lenses",
        sourceLabel: "Iowa Driver's License Manual - 3.1 Maintaining Your Vehicle",
        sourceUrl: hb(24),
      },
      {
        id: "ia_s4_25",
        topic: "impairment",
        question: "An Iowa driver under 18 has their licence revoked for OWI. Can they get a temporary restricted licence to drive to school?",
        choices: [
          "Yes, with a school official's letter",
          "Yes, after 30 days",
          "No; offenders under 18 are not eligible for one during an OWI revocation",
          "Yes, but only for work, not school",
        ],
        correctIndex: 2,
        explanation:
          "Iowa closes that door entirely for drivers under 18. There is no temporary restricted licence during an OWI revocation.",
        context:
          "For an underage driver the revocation starts at a minimum of 60 days at .02 or above, and rises to a minimum of 180 days at .08 or above. The adult minimum is 180 days, and it applies even without a criminal conviction because the administrative and criminal tracks run separately.",
        trap: "A temporary restricted licence exists in Iowa and is available to some drivers. Being under 18 is what takes it away.",
        excerptKey: "under-18-no-trl",
        sourceLabel: "Iowa Driver's License Manual - 3.8 Alcohol and Drugs",
        sourceUrl: hb(37),
      },
      {
        id: "ia_s4_26",
        topic: "signals",
        question: "What does the Iowa manual say a flashing yellow light means?",
        choices: [
          "Stop, then proceed when clear",
          "The signal is malfunctioning",
          "Prepare to stop for a red light",
          "Proceed with caution, yielding to vehicles and pedestrians, and go when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow lets you continue without stopping, but only after yielding to whatever is already there. It is the lighter of the two flashing signals.",
        context:
          "The flashing pair is designed to be memorised together. Flashing red is a stop sign - stop, then go when clear. Flashing yellow is a caution - yield, then go when safe. Both usually appear late at night or on a minor approach, where a full signal cycle would be wasted.",
        trap: "Flashing anything reads as a fault to a nervous driver. Both flashing colours are deliberate instructions with different meanings.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "Iowa Driver's License Manual - 2.9 Traffic Signals",
        sourceUrl: hb(11),
      },
      {
        id: "ia_s4_27",
        topic: "signs",
        question: "You see an Iowa sign showing a black arrow bending to the right on a yellow diamond, with more of the same further on. What are they?",
        choices: [
          "Chevron signs, drawing extra attention to a change in the road's direction",
          "Detour markers",
          "Lane shift markers in a work zone",
          "One-way signs",
        ],
        correctIndex: 0,
        explanation:
          "Chevrons are used in addition to a curve sign where the change of direction needs more attention than the curve sign alone gives it.",
        context:
          "They belong to Iowa's family of curve warnings. A gradual curve sign tells you the road ahead bends gently and to prepare for the change of direction; a ramp speed sign gives the recommended speed on an exit ramp, which is advisory rather than a posted limit.",
        trap: "A repeated sign around a bend can read as decoration. The repetition is the message - the curve is sharper than it looks.",
        excerptKey: "warning-chevron",
        sourceLabel: "Iowa Driver's License Manual - 2.3 Warning Signs",
        sourceUrl: hb(9),
      },
      {
        id: "ia_s4_28",
        topic: "emergencies",
        question: "You are stranded in snow on an Iowa highway. What does the manual say is the safest thing to do?",
        choices: [
          "Walk to the nearest exit for help",
          "Stand well clear of the vehicle on the shoulder",
          "Run the engine continuously to stay warm",
          "Stay inside the vehicle with your seat belt on and call 911",
        ],
        correctIndex: 3,
        explanation:
          "The vehicle is the shelter, and it is also what rescue crews will find. Stay in it with the belt on and call 911.",
        context:
          "The manual asks you to pull onto the shoulder if you can, then to help emergency crews locate you by looking for exit numbers, mileposts, crossroads or landmarks and giving them over the phone. That is a different instruction from the one for a vehicle stalled in a live traffic lane, where the manual asks everyone to get out quickly and stand in a safe area away from moving vehicles.",
        trap: "The two breakdown instructions look contradictory until you notice which one is about a live traffic lane and which is about a snowbank.",
        excerptKey: "stranded-stay-inside",
        sourceLabel: "Iowa Driver's License Manual - 5.13 Stranded in the snow",
        sourceUrl: hb(61),
      },
      {
        id: "ia_s4_29",
        topic: "rules",
        question: "What does the Iowa manual say about three-point turns?",
        choices: [
          "They are illegal on any public road",
          "They are the preferred way to reverse direction on a narrow street",
          "They may only be performed where a sign permits them",
          "They are generally not a safe manoeuvre; going on to the nearest intersection is better",
        ],
        correctIndex: 3,
        explanation:
          "The manual discourages them rather than banning them. A three-point turn increases your risk and your exposure, and the nearest intersection is the better option.",
        context:
          "It treats U-turns the same way but more permissively - perform them only where they are not prohibited and where it is safe to do so. Neither manoeuvre appears on the Iowa drive test as a required skill, and the DOT's own drive-test page says parallel parking is not currently required either.",
        trap: "Being taught a manoeuvre in driver education is not the same as it being the right choice on the road.",
        excerptKey: "three-point-turn",
        sourceLabel: "Iowa Driver's License Manual - 4.8 Proper Turning Techniques",
        sourceUrl: hb(43),
      },
      {
        id: "ia_s4_30",
        topic: "safety",
        question: "What does the Iowa manual say about high beams at night?",
        choices: [
          "Use them whenever it is dark",
          "Use them in fog to see further",
          "Use them only outside city limits",
          "Use them only where other drivers will not see them, such as isolated roads with little traffic",
        ],
        correctIndex: 3,
        explanation:
          "High beams are for empty roads. The test is whether another driver will see them, not whether it is dark or whether you are in town.",
        context:
          "Fog is the case where high beams actively hurt you: the manual says to use low beams or fog lights and not high beams, because the light reflects off the fog and causes glare. If oncoming headlights blind you, slow down and watch the white stripe at the right edge of the pavement until your eyes recover.",
        trap: "Fog feels like the moment for more light. It is the moment for lower light, aimed under the fog rather than into it.",
        excerptKey: "night-high-beams",
        sourceLabel: "Iowa Driver's License Manual - 5.7 Night Driving",
        sourceUrl: hb(56),
      },
      {
        id: "ia_s4_31",
        topic: "sharing",
        question: "What does the Iowa manual say about deer?",
        choices: [
          "Swerve to avoid them if you have room",
          "Sound the horn and maintain speed",
          "Deer collisions only happen in autumn",
          "Do not swerve or veer if there is no time to stop, because that usually makes the crash worse",
        ],
        correctIndex: 3,
        explanation:
          "Do not swerve. Leaving the road or crossing into oncoming traffic is worse than hitting the animal, and the manual says so directly.",
        context:
          "October, November and May are the peak months for deer collisions in Iowa, though they happen year round, and dawn and dusk are the times to watch. Deer travel in groups, so seeing one means looking for more. If you do hit an animal, the manual sends you to its ordinary crash procedure.",
        trap: "Swerving is the reflex and it turns a survivable animal strike into a head-on or a rollover.",
        excerptKey: "deer-do-not-swerve",
        sourceLabel: "Iowa Driver's License Manual - 5.8 Deer and Other Animals",
        sourceUrl: hb(57),
      },
      {
        id: "ia_s4_32",
        topic: "parking",
        question: "Who may park in an Iowa space reserved for persons with disabilities?",
        choices: [
          "Anyone dropping off a passenger with a disability",
          "Only a vehicle displaying a Persons with Disabilities Parking Permit",
          "Anyone, when all other spaces are full",
          "Anyone parking for less than 15 minutes",
        ],
        correctIndex: 1,
        explanation:
          "Only with the permit. The manual states it as a flat condition on using the space, with no allowance for how full the lot is or how short the stop is.",
        context:
          "Eligibility for the permit is handled by the Iowa DOT's vehicle registration side rather than by the driver licensing rules, and the manual points you to its page for the criteria. The space itself is treated like any other marked no parking restriction: it is enforceable by the sign and the marking.",
        trap: "\"Only for a minute\" is exactly the use the space is designed to survive, because a driver who needs it cannot come back later.",
        excerptKey: "disability-parking",
        sourceLabel: "Iowa Driver's License Manual - 2.25 Parking",
        sourceUrl: hb(21),
      },
      {
        id: "ia_s4_33",
        topic: "signs",
        question: "Iowa route signs come in different shapes. What does the shape tell you?",
        choices: [
          "The type of roadway - interstate, U.S. highway, Iowa route or county road",
          "The speed limit on that route",
          "Whether the route is divided",
          "How far the route runs",
        ],
        correctIndex: 0,
        explanation:
          "The shape encodes the class of road: interstate, U.S. highway, Iowa state route or county road each have their own outline.",
        context:
          "Route signs sit in the guide family with the green direction signs and the mile markers. Mile markers count from the point where an interstate route entered the state, which makes them useful for working out how far your exit is and for giving your exact location in an emergency.",
        trap: "Route numbers repeat across classes, so the number alone will not tell you what kind of road you are on.",
        excerptKey: "route-sign-shape",
        sourceLabel: "Iowa Driver's License Manual - 2.8 Route Signs",
        sourceUrl: hb(11),
      },
      {
        id: "ia_s4_34",
        topic: "licensing",
        question: "How does Iowa's at-home knowledge test work?",
        choices: [
          "You take it on a phone at any time",
          "A parent with a valid Iowa licence proctors it on a computer, after an application that takes 7 to 14 days",
          "You take it unsupervised and print a certificate",
          "It is only available to students whose school is in the Skip the Trip program",
        ],
        correctIndex: 1,
        explanation:
          "A parent or guardian applies to proctor it, waits 7 to 14 days for approval, and administers it on a computer. A phone or tablet will not do.",
        context:
          "The emailed link expires after 72 hours, and if it lapses the application has to be made again. The student has to be within 30 days of their 14th birthday and under 18. Passing at home does not issue the permit - you still make an appointment at a DMV or a county treasurer's office to have it issued.",
        trap: "Your school taking part in Skip the Trip is a separate route. The at-home option does not depend on it.",
        excerptKey: "dot-online-test-age",
        sourceLabel: "Iowa DOT - Online Permit Test (Skip the Trip)",
        sourceUrl: ONLINETEST,
      },
      {
        id: "ia_s4_35",
        topic: "rightOfWay",
        question: "You are crossing a rural Iowa four-lane road from a side road with a stop sign. What does the manual tell you to do?",
        choices: [
          "Wait for a gap in both directions and cross in one movement",
          "Stop, look left, move into the median, stop again, look right, then complete the crossing",
          "Cross the near lanes and accelerate hard through the far ones",
          "Turn right and make a U-turn instead",
        ],
        correctIndex: 1,
        explanation:
          "Iowa breaks the crossing into two halves with a stop in the median between them. Trying to take both directions at once is the specific thing the manual tells you not to do.",
        context:
          "Two cautions ride with it. Traffic on a rural four-lane moves very fast, so concentration matters more than usual. And a longer vehicle such as a semi may not fit in a narrow median at all, which is why the same manoeuvre is not open to every driver on every median.",
        trap: "A reduced-conflict intersection asks the opposite of you - turn right and use a median opening. This question is about an ordinary crossing, not that design.",
        excerptKey: "rural-four-lane-median",
        sourceLabel: "Iowa Driver's License Manual - 5.2 Crossing or Turning Left onto a Rural Four-Lane Road",
        sourceUrl: hb(51),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Thirty-five questions on the rules Iowa drivers actually get wrong: the school bus exception that only runs one way, the speed limit nobody posted, the phone law that changed in 2025, and the pedestrian rules Iowa City and Des Moines argue about every year.",
    questions: [
      {
        id: "ia_s5_01",
        topic: "sharing",
        question:
          "A school bus stops with red lights flashing and the stop arm out on a two-lane Iowa road with a centre turn lane. You are meeting it. What must you do?",
        choices: [
          "Keep going, because the centre lane makes it three lanes",
          "Stop, because the exception needs four or more lanes",
          "Slow to 20 mph and continue",
          "Stop only if you can see children",
        ],
        correctIndex: 1,
        explanation:
          "A two-lane road with a centre turn lane is three lanes, and Iowa's exception starts at four. You stop.",
        context:
          "The manual's own diagram makes the counting explicit: a two-lane highway, a two-lane highway with a centre turn lane, and a three-lane highway are all in the three lanes or fewer group where all vehicles must stop. A four-lane highway and a four-lane highway with a centre turn lane are in the group where only vehicles approaching from the rear must stop.",
        trap: "Counting the turn lane gets you to three, and three still means stop. The number that matters is four, and it means four through lanes.",
        excerptKey: "bus-four-lane-exception",
        sourceLabel: "Iowa Driver's License Manual - 2.24 School Buses",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_02",
        topic: "rules",
        question:
          "You pass a stopped Iowa school bus and no officer sees it, but the bus driver notes your plate. What can happen?",
        choices: [
          "Nothing; a violation needs an officer to witness it",
          "The bus driver can report it, and a peace officer may investigate and issue a citation",
          "The school may bill you for the disruption",
          "You receive a warning letter only",
        ],
        correctIndex: 1,
        explanation:
          "Iowa Code Section 321.372A lets a school bus driver file a written report of a stop-arm violation within 72 hours, and requires a peace officer to investigate it within seven days and contact the vehicle's owner.",
        context:
          "The penalty is not a parking ticket. A first offence under Section 321.372(3) is a simple misdemeanor punishable by a fine of at least $345 and up to $930, or up to 30 days in jail, or both, and the department may substitute a driver improvement program for a licence suspension. A second offence is a serious misdemeanor. The manual adds that violating the law can suspend your licence for up to 180 days.",
        trap: "\"Nobody official saw it\" is the assumption that produces the citation in the post a fortnight later. The bus driver counts.",
        excerptKey: "code-bus-reported",
        sourceLabel: "Iowa Code Section 321.372A - Prompt investigation of reported violation",
        sourceUrl: code("321.372A"),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_03",
        topic: "speed",
        question:
          "You are on an Iowa street with houses on both sides and no speed limit sign anywhere. What may you legally drive?",
        choices: [
          "Whatever is reasonable, since nothing is posted",
          "The speed of surrounding traffic",
          "No more than 25 mph",
          "No more than 35 mph",
        ],
        correctIndex: 2,
        explanation:
          "A residence district with no sign is 25 mph in Iowa, and the absence of a sign is not a defence. The rule is in the manual and in Iowa Code Section 321.285(2)(a)(2).",
        context:
          "The other statutory district figures fill in the rest of the low end: 20 mph in a business district and 45 in a suburban district. Iowa Code Section 321.285(1) sits above all of them with a separate requirement - a careful and prudent speed, never greater than will let you stop within the assured clear distance ahead.",
        trap: "\"Everyone drives 30 here\" is the reasoning that generates the tickets. Flow of traffic is not a legal speed limit in Iowa.",
        excerptKey: "code-speed-unposted",
        sourceLabel: "Iowa Code Section 321.285(2)(a) - Speed restrictions",
        sourceUrl: code("321.285"),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_04",
        topic: "rightOfWay",
        question:
          "A pedestrian steps into a marked Iowa crosswalk while you are approaching at 30 mph with a green light. What do you do?",
        choices: [
          "Continue, because your green light gives you the right of way",
          "Yield or stop for them, because the green does not remove the crosswalk duty",
          "Sound your horn and continue",
          "Continue only if they are in the far lane",
        ],
        correctIndex: 1,
        explanation:
          "A green light permits your movement; it does not clear the crosswalk. Iowa requires you to yield or stop for pedestrians in marked and unmarked crosswalks, and a circular green expressly yields to anyone lawfully in the intersection.",
        context:
          "The manual states that failure to yield the right of way is the number one cause of traffic-related fatalities in Iowa, and it prints that in capitals. Since 2024 the duty covers pedestrian conveyances as well as people on foot - wheelchairs, strollers, skateboards, scooters and electric personal assistive mobility devices.",
        trap: "The signal and the crosswalk are two separate rules operating in the same place. The one that protects a person on foot is the crosswalk.",
        excerptKey: "crosswalk-yield-unmarked",
        sourceLabel: "Iowa Driver's License Manual - 2.14 Crosswalks, Stop Lines, and Directional Arrow Markings",
        sourceUrl: hb(15),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_05",
        topic: "rules",
        question:
          "Under Iowa's current law, may you pick up your phone to change the song while driving?",
        choices: [
          "Yes, because music is not an electronic message",
          "Yes, if the vehicle is moving under 25 mph",
          "No; holding the device at all is the offence",
          "Yes, if you are stopped at a red light",
        ],
        correctIndex: 2,
        explanation:
          "The current wording bans using an electronic device while driving unless the vehicle is stopped off the traveled portion of the roadway, and using includes holding, viewing or manipulating it.",
        context:
          "That is the change the 2025 law made. The old provision only reached writing, sending or viewing an electronic message, so scrolling a music app really was outside it. The exception now is voice-activated or hands-free mode, and Iowa Code Section 321.276(1)(c) says that exception does not stretch to video content, video calls, streaming, gaming data, or reading a message or notification.",
        trap: "Stopped at a red light is not stopped off the traveled portion of the roadway. The car is in a traffic lane.",
        excerptKey: "code-hands-free-not",
        sourceLabel: "Iowa Code Section 321.276 - Use of electronic device while driving",
        sourceUrl: code("321.276"),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_06",
        topic: "rightOfWay",
        question:
          "You are turning right on red in Iowa and a cyclist is coming up the bike lane on your right. What do you owe them?",
        choices: [
          "Nothing, since you stopped first",
          "You must yield, and the manual asks you to check your blind spot for a bicyclist before turning right",
          "You may turn if you signal",
          "They must stop, because a bike lane ends at an intersection",
        ],
        correctIndex: 1,
        explanation:
          "Right on red requires you to yield to all other traffic after stopping, and a bicyclist in the lane beside you is other traffic. The manual asks you specifically to check for bicyclists coming from behind before turning right.",
        context:
          "The wider instruction in the same section is to be ready to yield to a bicyclist even at times when the bicyclist should be yielding to you, because they have no defence against a vehicle. The manual calls that the driver's responsibility rather than a courtesy.",
        trap: "Having stopped feels like the whole obligation discharged. Stopping is the first half; yielding to everything lawfully there is the second.",
        excerptKey: "row-bicyclists-defensive",
        sourceLabel: "Iowa Driver's License Manual - 2.22 Intersections",
        sourceUrl: hb(18),
      },
      {
        id: "ia_s5_07",
        topic: "sharing",
        question:
          "An ordinary car is stopped on the shoulder of an Iowa highway with its hazard lights flashing. What does the law require of you?",
        choices: [
          "Nothing; the move over law covers emergency and service vehicles only",
          "Change lanes if you safely can, and otherwise slow below the limit and prepare to stop",
          "Slow to 20 mph",
          "Stop and offer assistance",
        ],
        correctIndex: 1,
        explanation:
          "Iowa's Move Over or Slow Down law reaches any stopped motor vehicle, including a passenger vehicle, that is continually displaying hazard lights.",
        context:
          "The response is the same as for a police car: change into a lane not adjacent to the stopped vehicle. Only if that is impossible, prohibited by law or unsafe do you fall back to slowing - and Iowa Code Section 321.323A requires a speed below the posted limit and reasonable for the conditions, with a readiness to stop. A violation can suspend your licence for a year.",
        trap: "Most states' move over laws stop at emergency and service vehicles. Iowa's runs all the way down to a family car with its flashers on.",
        excerptKey: "move-over-list",
        sourceLabel: "Iowa Driver's License Manual - 2.27 Approaching Stopped Vehicles",
        sourceUrl: hb(22),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_08",
        topic: "rules",
        question:
          "You are making a right turn on red in Iowa and there is a painted stop line before the crosswalk. Where must you stop?",
        choices: [
          "Before the stop line",
          "At the corner, where you can see",
          "Anywhere before entering the intersection",
          "In the crosswalk, if that is where the view is best",
        ],
        correctIndex: 0,
        explanation:
          "The stop line is the stop. Iowa requires you to stop before your vehicle reaches the stop line, or the crosswalk if there is one, and only then to edge forward if you need a view.",
        context:
          "Iowa Code Section 321.257(1) defines stopping at a signal in exactly those terms - the first opportunity at either the clearly marked stop line, or before entering the crosswalk, or before entering the intersection. The manual's stop sign entry says the same thing and adds that you may then pull forward to the sign or the edge of the intersection before proceeding.",
        trap: "Rolling to the corner for the view is the habit that puts a car across the crosswalk, and it is the specific complaint cyclists in Des Moines make about that intersection.",
        excerptKey: "stop-before-line",
        sourceLabel: "Iowa Driver's License Manual - 2.14 Crosswalks, Stop Lines, and Directional Arrow Markings",
        sourceUrl: hb(15),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_09",
        topic: "licensing",
        question:
          "You are 16, have held an Iowa instruction permit for 13 months, and completed driver education. What else does the law require before an intermediate licence?",
        choices: [
          "Nothing else",
          "20 hours of supervised driving with 2 after dark, and six months accident and violation free",
          "A road test in every case",
          "50 hours of supervised driving",
        ],
        correctIndex: 1,
        explanation:
          "Twenty hours of supervised driving, two of them after sunset and before sunrise, plus six consecutive clean months immediately before applying. A parent signs an affidavit for the hours.",
        context:
          "A drive test is required only if your driver education instructor asks for it, if you completed the Parent-Taught Driver's Education Program, or in the other circumstances the DOT's drive test page lists. The clean-record requirement is where a single moving conviction bites: Iowa Code Section 321.180B(3) restarts the six months and delays the upgrade by six.",
        trap: "The 12 months on a permit is the requirement everyone knows. The 20 hours is in the statute and on no DOT web page, and it is easy to reach the appointment without them.",
        excerptKey: "code-intermediate-20-hours",
        sourceLabel: "Iowa Code Section 321.180B(2)(a) - Graduated driver's licenses",
        sourceUrl: code("321.180B"),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_10",
        topic: "parking",
        question: "Which Iowa parking distance is measured from the nearest rail rather than from a sign or a crossing gate?",
        choices: ["10 feet", "20 feet", "25 feet", "50 feet"],
        correctIndex: 3,
        explanation:
          "Fifty feet, measured from the nearest rail of the crossing. Iowa Code Section 321.358(8) uses that wording precisely because a train overhangs its track.",
        context:
          "There is a separate 15-foot rule for a vehicle stopped at a crossing rather than parked at one: when you stop, leave at least 15 feet between the front and rear of your vehicle and the nearest rail. The manual makes the same point about clearance in a different way - before crossing, be sure you can completely clear the tracks.",
        trap: "The 15 feet and the 50 feet are both railroad numbers doing different jobs. One is about waiting at a crossing, the other about leaving a car there.",
        excerptKey: "code-parking-railroad-50",
        sourceLabel: "Iowa Driver's License Manual - 2.10 Railroad Crossings",
        sourceUrl: hb(12),
      },
      {
        id: "ia_s5_11",
        topic: "speed",
        question:
          "You are behind a snowplow on an Iowa highway posted at 65 mph. What is the most likely reason you are closing on it faster than you expect?",
        choices: [
          "The plow is braking for a hazard",
          "Plows typically work at 25 to 35 mph",
          "Your speedometer reads low in cold weather",
          "The plow has stopped to turn",
        ],
        correctIndex: 1,
        explanation:
          "Plows work at 25 to 35 mph, so on a 65 mph road you are gaining on them at highway speed. The manual says many drivers fail to realise this and hit them from behind.",
        context:
          "Two things make it worse. A plow throws up a cloud of snow that hides you from the operator and hides the plow from you, and its blade can extend further than the width of the vehicle. Never pass on the shoulder side, and give plenty of room when you do pass.",
        trap: "A large vehicle moving in a highway lane reads as highway-speed traffic. This one is doing about half your speed.",
        excerptKey: "snowplow-speed",
        sourceLabel: "Iowa Driver's License Manual - 5.13 Sharing the road with snowplows",
        sourceUrl: hb(61),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_12",
        topic: "signals",
        question:
          "A flashing yellow arrow shows for your left turn while the through traffic beside you has a green. Who must yield?",
        choices: [
          "The oncoming traffic, because your arrow is illuminated",
          "You do, to oncoming traffic and to pedestrians, before turning",
          "Neither; the arrow separates the movements",
          "Whoever entered the intersection first",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow arrow is unprotected. The oncoming traffic is looking at a green light and is not being stopped for you.",
        context:
          "Iowa's manual states the point in terms rather than leaving it to be inferred: yield to oncoming traffic and pedestrians, then turn left proceeding with caution, because oncoming traffic has a green light. The protected version of the same turn is the steady green arrow, which stops the oncoming traffic.",
        trap: "Any illuminated arrow feels like a permission granted only to you. The flashing yellow one hands you the judgement instead.",
        excerptKey: "signal-flashing-yellow-arrow",
        sourceLabel: "Iowa Driver's License Manual - 2.9 Traffic Signals",
        sourceUrl: hb(11),
      },
      {
        id: "ia_s5_13",
        topic: "rightOfWay",
        question:
          "Two cars arrive at an Iowa four-way stop, one on the cross street to your right and one directly opposite you. You are all stopped. You want to turn left. Who goes first?",
        choices: [
          "You, since you stopped first",
          "The car on your right, then you yield to the car opposite you if it is going straight",
          "The car opposite you, then you, then the car on your right",
          "Everyone at once, since all three approaches stopped",
        ],
        correctIndex: 1,
        explanation:
          "Two rules stack here. The right-hand tie-breaker settles the cross-street car, and then the left-turn rule makes you yield to the oncoming car going straight.",
        context:
          "That is the point of Iowa framing right of way as a duty rather than an entitlement: at an intersection with three or four cars you may owe a duty to more than one of them, and clearing one does not clear the rest. The manual's underlying advice applies here too - never assume another driver will give you space.",
        trap: "Sorting out the driver on the right is only half the problem. The oncoming car going straight still outranks your left turn.",
        excerptKey: "all-way-stop-order",
        sourceLabel: "Iowa Driver's License Manual - 2.22 Intersections",
        sourceUrl: hb(19),
      },
      {
        id: "ia_s5_14",
        topic: "sharing",
        question:
          "You have passed a bicyclist on an Iowa road by changing lanes. When may you move back to the right?",
        choices: [
          "As soon as your rear bumper clears the bicycle",
          "Not until you can see the bicyclist in your rearview mirror",
          "After counting three seconds",
          "As soon as you have signalled",
        ],
        correctIndex: 1,
        explanation:
          "The manual gives you a visual test rather than a distance: not until you can see the bicyclist or bicyclists in your rearview mirror.",
        context:
          "It is the same test the manual applies to passing a truck, and for the same reason - your mirror is the only instrument that tells you where the rear of your own vehicle actually is relative to what you have just gone round. The pass itself requires a complete lane change, giving the bicyclist the entire lane.",
        trap: "Judging by the bumper you can see is judging by the wrong end of the car, and a bicycle is narrow enough to disappear from view long before it is clear.",
        excerptKey: "bicycle-return",
        sourceLabel: "Iowa Driver's License Manual - 5.11 Sharing the Road with Bicyclists and Pedestrians",
        sourceUrl: hb(58),
      },
      {
        id: "ia_s5_15",
        topic: "safety",
        question:
          "Your car has automatic headlights and you are driving through a daytime Iowa snowstorm. What does the manual tell you?",
        choices: [
          "Leave the automatic system to decide",
          "The ambient light may be bright enough that you must switch the headlights on by hand",
          "Use hazard lights instead of headlights",
          "Use high beams to cut through the snow",
        ],
        correctIndex: 1,
        explanation:
          "Automatic headlights read brightness, and a daytime snowstorm is bright. The manual warns that in those conditions you have to turn them on manually.",
        context:
          "The legal trigger is not brightness at all. Iowa Code Section 321.384 requires lighted headlamps from sunset to sunrise and whenever fog, snow, sleet or rain leaves you unable to clearly see persons and vehicles at 500 feet - a visibility test the light sensor cannot measure. The manual's rule of thumb is to turn the headlights on whenever the wipers go on.",
        trap: "A system that works perfectly at dusk fails in exactly the condition where being seen matters most.",
        excerptKey: "headlights-automatic",
        sourceLabel: "Iowa Driver's License Manual - 4.13 Communicating",
        sourceUrl: hb(49),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_16",
        topic: "rules",
        question:
          "Iowa's manual says traffic already on an interstate should let ramp traffic in. What does that mean for you on the ramp?",
        choices: [
          "You have the right of way onto the interstate",
          "You still have to find your own gap; it is an expectation of courtesy, not a right of way you can rely on",
          "You may stop at the end of the ramp and wait to be let in",
          "You may cross two lanes at once once you are on",
        ],
        correctIndex: 1,
        explanation:
          "The manual asks main-road traffic to move over, slow down or speed up to let you in. That is what a well-behaved driver does, not a duty you can drive into.",
        context:
          "Your side of the bargain is the acceleration and merge area: bring the vehicle up to the speed of traffic and merge when it is safe, without stopping on the ramp unless it is absolutely necessary. Iowa has no zipper merge rule and no rule that the vehicle further ahead goes first.",
        trap: "Reading it as a right of way is how a ramp driver ends up merging into a lane that never opened.",
        excerptKey: "on-ramp-main-road",
        sourceLabel: "Iowa Driver's License Manual - 5.2 Interstate and Highway Driving",
        sourceUrl: hb(51),
      },
      {
        id: "ia_s5_17",
        topic: "licensing",
        question:
          "You are 15 and hold an Iowa instruction permit. May you drive yourself to your after-school job?",
        choices: [
          "Yes, within your school district",
          "Yes, if your parent signs a note",
          "No; that requires a special minor's restricted licence",
          "Yes, during daylight hours",
        ],
        correctIndex: 2,
        explanation:
          "An instruction permit is supervision-only. Driving unsupervised to school or work is what the special minor's restricted licence exists for.",
        context:
          "That licence becomes available at 14 and a half, after an Iowa-approved driver education course and six clean consecutive months on a valid instruction permit. It allows unsupervised driving in the hour before and after school and school activities, and for work, with a 25-mile driving-distance limit, plus a fuel stop on route or at the nearest station off it.",
        trap: "The permit lets you drive at any time, which reads like freedom until you notice the words \"with adult supervision\" attached to it.",
        excerptKey: "dot-permit-cannot",
        sourceLabel: "Iowa DOT - Instruction Permit for Under Age 18",
        sourceUrl: PERMIT,
      },
      {
        id: "ia_s5_18",
        topic: "speed",
        question:
          "The Iowa manual's page 42 list and Iowa Code Section 321.285 give different figures for one class of road. Which of these numbers do they agree on?",
        choices: [
          "60 mph on primary roads",
          "45 mph in a suburban district",
          "60 mph on urban interstate highways",
          "70 mph on all interstates, urban and rural alike",
        ],
        correctIndex: 1,
        explanation:
          "The four district figures - 20 business, 25 residence or school, 45 suburban, 45 towing - are identical in the manual and in Iowa Code Section 321.285(2). The larger-road numbers are where they part company.",
        context:
          "The manual prints 60 mph for primary roads, urban interstates and secondary roads by day, and 70 for rural interstates. The statute sets a 55 mph fall-back in Section 321.285(3), 65 on fully controlled-access divided multilane highways and 70 on the interstate system in Section 321.285(5)(a), with no urban and rural split, and caps unsurfaced secondary roads at 55 by day and 50 by night in Section 321.285(4). Where they differ, a posted sign is what you drive to.",
        trap: "Memorising the manual's whole page 42 list treats every line as equally settled. Four of its lines are, and the rest depend on the sign in front of you.",
        excerptKey: "code-speed-default-55",
        sourceLabel: "Iowa Code Section 321.285(3) - Speed restrictions",
        sourceUrl: code("321.285"),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_19",
        topic: "parking",
        question:
          "You leave your car outside a friend's house in an Iowa town, 8 feet from a stop sign, with the hazard lights on for two minutes. Is that lawful?",
        choices: [
          "Yes, because hazard lights make it standing rather than parking",
          "Yes, if you stay with the vehicle",
          "No; the ten-foot rule covers stopping and standing as well as parking",
          "Yes, for stops under five minutes",
        ],
        correctIndex: 2,
        explanation:
          "Iowa Code Section 321.358 opens with \"No person shall stop, stand, or park\", so a two-minute stop with the flashers on is caught exactly as a parked car would be.",
        context:
          "The statute's only escape clauses are at the top: stopping to avoid conflict with other traffic, or in compliance with the directions of a police officer or a traffic-control device. Neither covers convenience. The manual's shorter list frames the same rule as places you may not park, which is where the confusion starts.",
        trap: "Hazard lights are a warning to other drivers, not a permission. They do not convert a prohibited stop into a lawful one.",
        excerptKey: "code-parking-list",
        sourceLabel: "Iowa Code Section 321.358 - Stopping, standing, or parking",
        sourceUrl: code("321.358"),
      },
      {
        id: "ia_s5_20",
        topic: "signs",
        question:
          "You are on an Iowa gravel road and reach a railroad crossing with no lights, no gates and no bells. What does the manual expect?",
        choices: [
          "Cross at normal speed, since an unprotected crossing means the line is disused",
          "Slow down, look both ways, and be prepared to stop for a train",
          "Stop within 15 to 50 feet, as a bus would",
          "Sound your horn before crossing",
        ],
        correctIndex: 1,
        explanation:
          "Rural crossings usually have none of the equipment a town crossing has, so the looking is your job. Slow, look both ways, and be ready to stop.",
        context:
          "Iowa calls these passively protected crossings and says the same thing in its railroad section: they carry only a crossbuck and a stop or yield sign, and there you must not rely on lights or gates and should always expect a train. The mandatory 15-to-50-foot stop is only for school buses, charter buses, drivers carrying passengers for hire and placarded hazmat vehicles.",
        trap: "Missing equipment reads as a quiet line. It means there is nothing between you and the train except your own eyes.",
        excerptKey: "gravel-rr-crossings",
        sourceLabel: "Iowa Driver's License Manual - 5.6 Rural/Gravel Road Driving",
        sourceUrl: hb(56),
      },
      {
        id: "ia_s5_21",
        topic: "safety",
        question:
          "You are on a snow-covered Iowa road in a four-wheel-drive vehicle. How does that change your stopping distance?",
        choices: [
          "It roughly halves it",
          "It does not change it; stopping distances can be 10 times greater in ice and snow whatever you drive",
          "It removes the need to slow down",
          "It only helps on ice, not on snow",
        ],
        correctIndex: 1,
        explanation:
          "Four-wheel drive helps you accelerate. Stopping is a matter of grip between four tires and the road, and the manual's figure - up to 10 times the normal distance - applies to any vehicle.",
        context:
          "The manual's winter list is about giving yourself room rather than about equipment: decrease your speed for the loss of traction, start slowing long before an intersection or turn, brake only while travelling in a straight line, and stay far enough back that you never need a sudden stop. Black ice is common on bridges and overpasses because air circulates above and below them.",
        trap: "Confidence is the real hazard here. The drivetrain that gets you moving in snow does nothing at all to get you stopped.",
        excerptKey: "ice-stopping-10x",
        sourceLabel: "Iowa Driver's License Manual - 5.13 Inclement Weather Driving",
        sourceUrl: hb(61),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_22",
        topic: "rightOfWay",
        question:
          "An Iowa driver ahead of you brakes for someone stepping off the curb, and you are in the lane beside them with a clear view forward. What may you do?",
        choices: [
          "Pass, since your lane is clear",
          "Pass slowly with your horn sounded",
          "Not pass; the rule against passing a vehicle stopped for a pedestrian is absolute",
          "Pass if the pedestrian has not reached your lane yet",
        ],
        correctIndex: 2,
        explanation:
          "Never pass another vehicle that has stopped or is slowing down for a pedestrian. The manual gives the reason - you might not be able to see the pedestrian at all.",
        context:
          "This is the collision that kills pedestrians at multi-lane crossings: the first driver stops, the pedestrian steps out from behind that vehicle, and the second driver has had no view of them at any point. Iowa pairs it with the rectangular rapid flashing beacon rule, where a flashing beacon means someone has already pressed the button.",
        trap: "Your lane being clear is not evidence that the crossing is clear, because the stopped car is what is hiding the answer.",
        excerptKey: "never-pass-stopped-for-ped",
        sourceLabel: "Iowa Driver's License Manual - 5.11 Sharing the Road with Bicyclists and Pedestrians",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_23",
        topic: "impairment",
        question:
          "You are 20 and had one drink two hours ago. A breath test reads .03. What is the position in Iowa?",
        choices: [
          "No offence, because .03 is well under .08",
          "It is operating while intoxicated, because the underage threshold is .02",
          "A warning only for a first reading under .05",
          "It depends on whether you show signs of impairment",
        ],
        correctIndex: 1,
        explanation:
          "Under 21 the threshold is .02, so .03 is over it. The minimum revocation is 60 days.",
        context:
          "Iowa's adult figure of .08 gets all the attention, but it does not apply to anyone under 21. If an underage reading reaches .08 or more, the minimum revocation goes to 180 days, and an offender under 18 cannot get a temporary restricted licence during it. Implied consent means refusing the test brings a full year and a minimum $1,250 fine.",
        trap: "Knowing the .08 figure and being under 21 is the exact combination that produces this mistake.",
        excerptKey: "under-21-02",
        sourceLabel: "Iowa Driver's License Manual - 3.8 Alcohol and Drugs",
        sourceUrl: hb(37),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_24",
        topic: "sharing",
        question:
          "You are following a school bus on an Iowa road and its amber lights come on 300 feet before a stop. What does that tell you?",
        choices: [
          "The bus is signalling a turn",
          "The bus is about to stop for pupils, and you may not pass it",
          "The bus is warning oncoming traffic only",
          "The bus has a mechanical fault",
        ],
        correctIndex: 1,
        explanation:
          "Amber warning lights are the pre-stop warning. As soon as red or amber lights are flashing you may not pass the bus, and you should be preparing to stop.",
        context:
          "Iowa Code Section 321.372(1) tells the bus driver when to switch them on: not less than 300 and not more than 500 feet ahead of the stop where the speed limit is 45 mph or more, and not less than 150 feet where it is lower. So the amber phase is deliberately sized to give you room to shed speed.",
        trap: "Amber means the passing window has already closed, not that it is still open until the red lights come on.",
        excerptKey: "bus-no-passing-lights",
        sourceLabel: "Iowa Driver's License Manual - 2.24 School Buses",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_25",
        topic: "rules",
        question:
          "You are 100 feet from an Iowa intersection, in a legal passing zone, and the car ahead is slow. May you pass?",
        choices: [
          "Yes, because the markings permit it",
          "No; Iowa prohibits passing within 100 feet of an intersection",
          "Yes, if you complete the pass before the intersection",
          "Yes, if the intersection has no traffic signal",
        ],
        correctIndex: 1,
        explanation:
          "One hundred feet of an intersection is one of Iowa's flat prohibitions on passing, and the markings do not override it.",
        context:
          "The same 100 feet applies at a railroad crossing and at a signed narrow bridge, viaduct or tunnel. The manual's other prohibitions have no distance attached at all: approaching the top of a hill, around a curve where your view is obstructed, on the right, and when oncoming traffic is close enough to make it dangerous.",
        trap: "Dashed markings are a permission granted by the road geometry. They do not clear the separate list of places where passing is illegal.",
        excerptKey: "passing-illegal-list",
        sourceLabel: "Iowa Driver's License Manual - 4.10 Passing",
        sourceUrl: hb(46),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_26",
        topic: "signals",
        question:
          "A pedestrian hybrid beacon over an Iowa crosswalk switches from steady red to flashing red. What may you do?",
        choices: [
          "Go, because flashing red releases you",
          "Stop if you have not already, then proceed with caution if the crosswalk is clear",
          "Wait until the beacon goes dark",
          "Treat it as a yield",
        ],
        correctIndex: 1,
        explanation:
          "Flashing red at the end of the sequence works like a stop sign. You stop if you have not already, and then you may continue once the crosswalk is clear.",
        context:
          "The full sequence runs dark, flashing yellow, steady yellow, steady red, flashing red. Dark means proceed with caution, flashing yellow means slow down, steady yellow means prepare to stop, steady red means stop for pedestrians, and flashing red is the release, conditional on the crosswalk actually being clear.",
        trap: "The flashing phase looks like the signal handing the road back. It hands it back only if nobody is still crossing.",
        excerptKey: "phb-flashing-red",
        sourceLabel: "Iowa Driver's License Manual - 2.20 Bicycle and Pedestrian Signals",
        sourceUrl: hb(18),
      },
      {
        id: "ia_s5_27",
        topic: "licensing",
        question:
          "You get one moving traffic conviction while holding an Iowa intermediate licence. What is the effect on your full licence?",
        choices: [
          "None, as long as you pay the fine",
          "It delays the upgrade by 12 months",
          "It delays the upgrade by 30 days",
          "It cancels the intermediate licence",
        ],
        correctIndex: 1,
        explanation:
          "On an intermediate licence, every conviction, crash or restriction violation pushes the upgrade to a full licence back by 12 months.",
        context:
          "Iowa Code Section 321.180B(3)(a) states the same effect as a requirement rather than a penalty: you cannot be issued a full licence until you have completed remedial driver improvement action and been accident and violation free continuously for the twelve months immediately before applying. On a permit the equivalent period is six months.",
        trap: "On a permit the delay is six months, and on an intermediate licence it doubles. Carrying the permit figure across is the mistake.",
        excerptKey: "dot-intermediate-delay-12-months",
        sourceLabel: "Iowa DOT - Intermediate License",
        sourceUrl: INTERMEDIATE,
        commonlyMissed: true,
      },
      {
        id: "ia_s5_28",
        topic: "safety",
        question:
          "You are driving in heavy rain on an Iowa highway and the car ahead leaves no tracks on the wet surface. What does that tell you?",
        choices: [
          "The road drains well",
          "Conditions are right for hydroplaning, so slow down",
          "The car ahead has new tires",
          "The rain has stopped",
        ],
        correctIndex: 1,
        explanation:
          "No tracks means the tires ahead are riding on water rather than cutting through it. The manual lists it as one of three hydroplaning warning signs.",
        context:
          "The other two are visible deep water and reflections on the pavement. Hydroplaning happens when the water is deeper than the tire tread, which is why the penny test matters, and the response in every case is the same - slow down. The manual also asks you to stretch your following distance to five or six seconds in wet conditions.",
        trap: "The absence of spray reads as an improvement in conditions. It is the specific symptom the manual asks you to watch for.",
        excerptKey: "hydroplane-signs",
        sourceLabel: "Iowa Driver's License Manual - 5.13 Inclement Weather Driving",
        sourceUrl: hb(60),
      },
      {
        id: "ia_s5_29",
        topic: "sharing",
        question:
          "You are on a divided Iowa highway and a fire truck comes up on the other side of the median with lights and siren. What must you do?",
        choices: [
          "Pull over to the right and stop",
          "Stop where you are",
          "Nothing; a median relieves you of the duty to stop",
          "Move to the left lane so it can pass",
        ],
        correctIndex: 2,
        explanation:
          "Iowa's manual carves out the divided-highway case. If a median separates you from an emergency vehicle on the other side, you do not have to stop.",
        context:
          "Everywhere else, the duty stands: pull to the right edge of the road and stop for an emergency vehicle approaching from any direction, and if you are already inside an intersection or a roundabout, clear it before pulling over. Once it has gone past, stay at least 500 feet behind it.",
        trap: "It is easy to confuse with the school bus exception, which is decided by lane count rather than a median. For emergency vehicles it really is the median that matters.",
        excerptKey: "emergency-median",
        sourceLabel: "Iowa Driver's License Manual - 2.23 Emergency Vehicles",
        sourceUrl: hb(19),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_30",
        topic: "rules",
        question:
          "You are 20 feet from an Iowa intersection when you decide to turn right, and there is a driveway between you and the corner. When should you signal?",
        choices: [
          "Immediately, so following traffic has maximum warning",
          "After you have passed the driveway",
          "Only when you begin the turn",
          "Signalling is optional if nobody is behind you",
        ],
        correctIndex: 1,
        explanation:
          "Wait until you have passed the driveway. Signal too early and the driver waiting there reads it as a turn into their entrance and pulls into your path.",
        context:
          "The manual balances that against the general requirement to signal 100 feet before a turn on a road posted at 45 mph or less, and 300 feet above that. It also asks you to signal every time you change direction, even when you cannot see anyone, and to make sure the signal is off after the turn.",
        trap: "Earlier is not always better with a signal. The manual's specific warning is about the driver waiting at the entrance in between.",
        excerptKey: "signal-not-too-early",
        sourceLabel: "Iowa Driver's License Manual - 4.8 Proper Turning Techniques",
        sourceUrl: hb(43),
      },
      {
        id: "ia_s5_31",
        topic: "parking",
        question:
          "Iowa's manual says not to park in front of a driveway. How much of the driveway does that cover?",
        choices: [
          "Only the paved apron",
          "The whole driveway, public or private",
          "Half of it, if the other half stays usable",
          "It only applies to commercial driveways",
        ],
        correctIndex: 1,
        explanation:
          "The rule is not measured. Iowa Code Section 321.358(2) says in front of a public or private driveway, and blocking part of one is still blocking it.",
        context:
          "Two related entries sit alongside it and are just as unmeasured: on a sidewalk, and in front of a curb cut or ramp on public or private property in a way that blocks access to it. Both exist for the same reason as the driveway rule, which is that a blocked access has no partial version.",
        trap: "The measured distances on Iowa's list make it tempting to look for a number here. There is not one, because any obstruction is the offence.",
        excerptKey: "no-park-list",
        sourceLabel: "Iowa Driver's License Manual - 2.26 Parking Not Allowed",
        sourceUrl: hb(21),
      },
      {
        id: "ia_s5_32",
        topic: "signs",
        question:
          "You are approaching an Iowa work zone where a flagger is holding a SLOW paddle, but the posted work zone limit is 45 mph. What governs?",
        choices: [
          "The posted limit, because a sign outranks a person",
          "The flagger's instruction",
          "Whichever is faster, since the flagger is only advisory",
          "Neither, until you reach the first cone",
        ],
        correctIndex: 1,
        explanation:
          "The flagger governs. Iowa's manual lists obeying a construction work zone flagger among the situations where you must always stop, and puts directions from people above the hardware.",
        context:
          "The signals section makes the same point at the top: traffic control can be provided by law enforcement, highway personnel or school crossing guards, and you must follow directions from these persons. Flaggers wear fluorescent yellow-green or orange and normally use stop and slow paddles, though red flags may be used occasionally.",
        trap: "A posted limit feels more official than a person with a paddle. The person is the more current instruction, and in Iowa the binding one.",
        excerptKey: "workzone-flaggers",
        sourceLabel: "Iowa Driver's License Manual - 2.11 Work Zones",
        sourceUrl: hb(14),
      },
      {
        id: "ia_s5_33",
        topic: "emergencies",
        question:
          "Your vehicle stalls in a live Iowa traffic lane and cannot be moved. What does the manual say you and your passengers should do?",
        choices: [
          "Stay in the vehicle with seat belts on",
          "Exit quickly and stand in a safe area away from the shoulder and from moving vehicles",
          "Stand behind the vehicle to warn traffic",
          "Push the vehicle backwards out of the lane",
        ],
        correctIndex: 1,
        explanation:
          "In a traffic lane the vehicle is not shelter, it is a target. Get out quickly and stand somewhere safe, away from the shoulder where possible and well clear of moving traffic.",
        context:
          "That is the opposite of the manual's advice for being stranded in snow on the shoulder, where the vehicle is the shelter and you stay in it with your belt on. The distinguishing factor is whether the car is somewhere traffic is going to arrive. If you have hazard lights and can get the vehicle off the road, that is always the first move, and you do not stop just over a hill or around a curve.",
        trap: "The two breakdown rules point in opposite directions, and the one that gets people killed is staying put in a live lane.",
        excerptKey: "breakdown-exit-vehicle",
        sourceLabel: "Iowa Driver's License Manual - 4.13 Communicating",
        sourceUrl: hb(49),
      },
      {
        id: "ia_s5_34",
        topic: "speed",
        question:
          "The Iowa DOT's drive-test page mentions a two-second rule while the manual teaches three to four seconds. Which should you use on the knowledge test?",
        choices: [
          "Two seconds, because the DOT page is more current",
          "The manual's three- to four-second rule",
          "Either, because they are the same rule",
          "Five seconds, splitting the difference",
        ],
        correctIndex: 1,
        explanation:
          "The knowledge test is written from the manual, and the manual's figure is three to four seconds. Two seconds is what it says may be sufficient for an experienced driver in normal conditions.",
        context:
          "The two figures do not actually contradict each other once you read the manual's full paragraph: a beginner should keep at least three seconds, two may be enough for an experienced driver in good conditions, at 40 mph the figure rises to four or five, and on a slippery road or behind something blocking your view it goes to six or more.",
        trap: "Both numbers are on official Iowa pages, which makes this look like a conflict. It is a floor for experienced drivers against a target for new ones.",
        excerptKey: "following-beginner-three",
        sourceLabel: "Iowa Driver's License Manual - 4.4 Braking and Stopping",
        sourceUrl: hb(41),
        commonlyMissed: true,
      },
      {
        id: "ia_s5_35",
        topic: "licensing",
        question:
          "You hold an Iowa special minor's restricted licence and want to drive a friend home from school. What does the licence allow?",
        choices: [
          "Any number of passengers, since they are going to the same place",
          "No more than one unrelated minor passenger when driving without adult supervision",
          "No passengers at all",
          "Passengers only during daylight",
        ],
        correctIndex: 1,
        explanation:
          "One unrelated minor passenger is the limit when you are driving without adult supervision. A relative here means a brother, sister, step-brother, step-sister or any other minor living in your household.",
        context:
          "The rest of the licence is a set of destinations rather than a set of hours: your school of enrollment and its activities, work, farm work, and a fuel stop, all within a 25-mile driving distance except for the direct route to your own public school district. You may not drop passengers anywhere other than your school, and you may not carry more passengers than the vehicle has seat belts.",
        trap: "The equivalent restriction on an intermediate licence lasts only six months and can be waived. On this licence it is a standing condition.",
        excerptKey: "dot-smrl-what",
        sourceLabel: "Iowa DOT - Special Minor's Restricted License",
        sourceUrl: SMRL,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the proportions the real Iowa knowledge test uses, drawn from across the manual with no hints and no themed run. Aim for 80 percent, which is the mark the Iowa DOT publishes.",
    questions: [
      {
        id: "ia_s6_01",
        topic: "signs",
        question: "What shape is reserved in Iowa for the stop sign alone?",
        choices: ["Pentagon", "Octagon", "Diamond", "Pennant"],
        correctIndex: 1,
        explanation:
          "The eight-sided octagon is used for the stop sign and for nothing else, so it can be recognised from behind, in fog, or covered in snow.",
        context:
          "Iowa's other reserved shapes are the equilateral triangle for yield, the pentagon for a school crossing, the pennant for a no passing zone, the circle for a railroad crossing ahead and the crossbuck at the crossing itself. The rectangle and the diamond do more than one job each.",
        trap: "A pentagon has five sides and marks school areas, not stops.",
        excerptKey: "shape-octagon",
        sourceLabel: "Iowa Driver's License Manual - 2.1 Traffic Signs",
        sourceUrl: hb(7),
      },
      {
        id: "ia_s6_02",
        topic: "rightOfWay",
        question: "Who must yield when two Iowa vehicles reach an uncontrolled intersection at about the same time?",
        choices: [
          "The driver on the left",
          "The driver on the right",
          "The driver on the narrower road",
          "The driver travelling faster",
        ],
        correctIndex: 0,
        explanation:
          "The driver on the left yields to the driver on the right. Iowa Code Section 321.319 states it that way round, and the manual repeats it for gravel-road intersections.",
        context:
          "The rule is modified at through highways and wherever the chapter says otherwise, so a stop or yield sign overrides it. At an all-way stop the same principle appears as a tie-breaker, applying only when two drivers really did arrive together.",
        trap: "Road width has nothing to do with it in Iowa unless one road is signed as a through highway.",
        excerptKey: "code-row-right",
        sourceLabel: "Iowa Code Section 321.319 - Entering intersections from different highways",
        sourceUrl: code("321.319"),
      },
      {
        id: "ia_s6_03",
        topic: "sharing",
        question: "How far must you stop behind an Iowa school bus with its stop arm extended?",
        choices: ["10 feet", "15 feet", "20 feet", "30 feet"],
        correctIndex: 1,
        explanation:
          "No closer than 15 feet, from either the manual's wording or Iowa Code Section 321.372(3)(b). You stay there until the arm retracts and the bus moves.",
        context:
          "That distance applies on every Iowa road when you are approaching from the rear, regardless of the lane count. Meeting a bus from the front, you slow to 20 mph on amber and stop when the arm goes out, unless the road has four or more lanes and you are on the other side.",
        trap: "Twenty feet is the figure in several neighbouring states, and 20 is also Iowa's number for something else - the speed you slow to when meeting a bus.",
        excerptKey: "code-bus-overtaking-15",
        sourceLabel: "Iowa Code Section 321.372(3)(b) - Discharging pupils",
        sourceUrl: code("321.372"),
      },
      {
        id: "ia_s6_04",
        topic: "speed",
        question: "What is the unposted speed limit in an Iowa school district?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 2,
        explanation:
          "Twenty-five mph, the same figure Iowa applies to a residence district. School districts are marked with distinctive signs under Iowa Code Section 321.285(2)(b).",
        context:
          "The rest of the unposted set is 20 mph in a business district, 45 in a suburban district and 45 for a vehicle towing another. Those four figures are the ones the manual and the statute state identically.",
        trap: "Fifteen mph is a school zone figure in several other states. Iowa's school district number matches its residential number.",
        excerptKey: "code-speed-unposted",
        sourceLabel: "Iowa Code Section 321.285(2)(a) - Speed restrictions",
        sourceUrl: code("321.285"),
      },
      {
        id: "ia_s6_05",
        topic: "signals",
        question: "What must you do at a steady red light in Iowa before making a permitted right turn?",
        choices: [
          "Slow to walking pace",
          "Come to a complete stop and yield to all other traffic",
          "Wait for the light to change",
          "Signal for 100 feet first",
        ],
        correctIndex: 1,
        explanation:
          "A complete stop, then a yield to everything else lawfully using the intersection. The turn is permitted unless a sign prohibits it.",
        context:
          "Iowa Code Section 321.257(2)(a) adds the second permitted movement: a left turn from the left lane of a one-way street onto another one-way street, on the same terms. Both turns must be made in a way that does not interfere with other vehicular or pedestrian traffic.",
        trap: "Slowing to walking pace is what most drivers actually do and is not what the rule says.",
        excerptKey: "code-signal-red-turn",
        sourceLabel: "Iowa Code Section 321.257(2)(a) - Official traffic-control signal",
        sourceUrl: code("321.257"),
      },
      {
        id: "ia_s6_06",
        topic: "parking",
        question: "How close to an Iowa crosswalk may you park?",
        choices: [
          "Five feet",
          "Ten feet",
          "You may not park on a crosswalk at all",
          "Fifteen feet",
        ],
        correctIndex: 2,
        explanation:
          "Iowa's rule for a crosswalk is not a distance at all. Parking on a crosswalk is prohibited outright, both in the manual's list and in Iowa Code Section 321.358(5).",
        context:
          "The distances on Iowa's list attach to other things: five feet from a hydrant, 10 on the approach to a stop sign or signal, 20 from a fire station entrance, 50 from the nearest rail. The unmeasured prohibitions are sidewalks, driveways, intersections, crosswalks, double parking, and blocking a curb cut or ramp.",
        trap: "Neighbouring states set a measured distance back from a crosswalk. Iowa's rule is about the crosswalk itself.",
        excerptKey: "code-parking-list",
        sourceLabel: "Iowa Code Section 321.358 - Stopping, standing, or parking",
        sourceUrl: code("321.358"),
      },
      {
        id: "ia_s6_07",
        topic: "safety",
        question: "How many seconds of following distance does the Iowa manual recommend on a slippery road?",
        choices: ["Two", "Three", "Four", "Six or more"],
        correctIndex: 3,
        explanation:
          "Six or more seconds when the road is slippery or when the vehicle in front blocks your view.",
        context:
          "The manual's ladder runs from two seconds, which may be sufficient for an experienced driver in normal conditions, through three for a beginner, four to five at 40 mph, and six or more in poor conditions. In rain specifically it asks for five or six.",
        trap: "The three- to four-second rule is the headline figure and it is explicitly stated to work only in normal traffic and good weather.",
        excerptKey: "following-40mph",
        sourceLabel: "Iowa Driver's License Manual - 4.4 Braking and Stopping",
        sourceUrl: hb(41),
      },
      {
        id: "ia_s6_08",
        topic: "impairment",
        question: "What is the adult blood alcohol threshold for operating while intoxicated in Iowa?",
        choices: [".02", ".05", ".08", ".10"],
        correctIndex: 2,
        explanation:
          "Point zero eight for a driver 21 or over, or any amount of a controlled substance in the system.",
        context:
          "The under-21 threshold is .02. An OWI revokes driving privileges for a minimum of 180 days even without a criminal conviction, and refusing the breath test brings an automatic one-year revocation plus a minimum $1,250 fine.",
        trap: "Point one zero was the national standard decades ago and is still what some people quote.",
        excerptKey: "owi-definition",
        sourceLabel: "Iowa Driver's License Manual - 3.8 Alcohol and Drugs",
        sourceUrl: hb(37),
      },
      {
        id: "ia_s6_09",
        topic: "signs",
        question: "What does a fluorescent pink sign indicate in Iowa?",
        choices: [
          "A school zone",
          "A permanent hazard",
          "Incident management, such as a crash being cleared",
          "A detour",
        ],
        correctIndex: 2,
        explanation:
          "Fluorescent pink is Iowa's incident management colour, used for warning and guide signs at crash clean-ups, debris removal and similar temporary events.",
        context:
          "It is easy to confuse with orange, which marks road work, temporary traffic control and maintenance. The difference is planned work against an unplanned incident, and both mean the road ahead is not in its usual state.",
        trap: "Orange and pink both appear at temporary hazards. Only orange means a work zone, where fines may double.",
        excerptKey: "colour-pink",
        sourceLabel: "Iowa Driver's License Manual - 2.1 Traffic Signs",
        sourceUrl: hb(6),
      },
      {
        id: "ia_s6_10",
        topic: "rules",
        question: "In Iowa, when may you drive on a bicycle lane marked by a solid white line?",
        choices: [
          "When making a turning movement",
          "When the lane beside it is congested",
          "When no bicycle is in sight",
          "Never",
        ],
        correctIndex: 0,
        explanation:
          "Turning movements only, and after looking beside and behind for bicyclists before you cross.",
        context:
          "Some Iowa bike lanes are further separated by double white lines, curbs, posts or planters, and some are filled with green paint, where motorists should look carefully before crossing and should not stop. A sharrow, by contrast, reserves no part of the road for bicycles.",
        trap: "Congestion is not an exception. The turning-movement rule is the only one there is.",
        excerptKey: "bike-lane-driving",
        sourceLabel: "Iowa Driver's License Manual - 2.19 Bicycle Lanes and Pavement Markings",
        sourceUrl: hb(17),
      },
      {
        id: "ia_s6_11",
        topic: "emergencies",
        question: "How soon must an Iowa crash involving injury be reported?",
        choices: [
          "Within 24 hours",
          "Within 48 hours",
          "Within 72 hours",
          "Within seven days",
        ],
        correctIndex: 2,
        explanation:
          "Within 72 hours. Failing to report a crash involving injury, death or more than $1,500 in property damage within that window costs you your driving privileges.",
        context:
          "The manual's four steps are steer it and clear it if the vehicle is operable and nobody is hurt, call 911 with the location and possible injuries, give the officer your insurance information, registration and licence, and then report to your insurer.",
        trap: "Reporting to your own insurer is not reporting to the police, and the 72 hours runs on the police side.",
        excerptKey: "crash-report-1500",
        sourceLabel: "Iowa Driver's License Manual - 5.15 Involvement in a Crash",
        sourceUrl: hb(63),
      },
      {
        id: "ia_s6_12",
        topic: "signals",
        question: "What does a green arrow above an Iowa reversible lane mean?",
        choices: [
          "The lane is for turning only",
          "You may use the lane beneath it",
          "The lane is about to reverse direction",
          "The lane is reserved for buses",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow opens the lane below it to you. A red X closes it, a flashing yellow X makes it a turn lane, and a steady yellow X means it is changing over.",
        context:
          "Reversible lanes carry traffic one way at some times and the other way at others, and are usually marked by double-dashed yellow lines. Before you drive in one, check the signs beside or over the road or the overhead lights to see which lanes you may use at that moment.",
        trap: "The flashing and steady yellow X mean different things, and only one of them requires you to leave the lane.",
        excerptKey: "reversible-lanes",
        sourceLabel: "Iowa Driver's License Manual - 2.15 Reversible Lanes",
        sourceUrl: hb(15),
      },
      {
        id: "ia_s6_13",
        topic: "safety",
        question: "Under Iowa law, who must be secured in a child restraint system rather than a seat belt?",
        choices: [
          "Every child under four",
          "Every child under six",
          "Every child under eight",
          "Every child under 10",
        ],
        correctIndex: 1,
        explanation:
          "A child under six must be in a safety seat or booster seat, not a seat belt. From six up to 18 a restraint or a belt is acceptable, in every seating position.",
        context:
          "Below that, a child under one year old and weighing less than 20 pounds must be in a rear-facing child restraint. Iowa also prohibits anyone under 18 from riding in the rear of a moving pickup truck.",
        trap: "The under-one rule has two conditions, age and weight, and both have to be met for the rear-facing requirement.",
        excerptKey: "child-under-six",
        sourceLabel: "Iowa Driver's License Manual - 3.5 Seat Belts and Iowa Law",
        sourceUrl: hb(35),
      },
      {
        id: "ia_s6_14",
        topic: "rightOfWay",
        question: "You are exiting an Iowa roundabout. What must you do?",
        choices: [
          "Signal, then exit to the right, yielding to anyone in the crosswalk",
          "Exit without signalling, since your lane choice already showed your intention",
          "Yield to traffic entering behind you",
          "Stop at the exit and check both ways",
        ],
        correctIndex: 0,
        explanation:
          "Signal for the right turn, exit to the right, and yield again to anyone in the exit crosswalk.",
        context:
          "The full sequence is approach at the advisory speed yielding to the crosswalk, enter at the yield line giving way to circulating traffic, proceed without stopping inside, and exit. In a multilane roundabout you also pick your lane before the yield line and never change it inside.",
        trap: "Stopping at the exit backs traffic up around the circle, which is the thing a roundabout is designed to avoid.",
        excerptKey: "roundabout-exit",
        sourceLabel: "Iowa Driver's License Manual - 5.5 Roundabouts",
        sourceUrl: hb(54),
      },
      {
        id: "ia_s6_15",
        topic: "sharing",
        question: "How far behind an emergency vehicle using lights and sirens must you stay in Iowa?",
        choices: ["100 feet", "300 feet", "At least 500 feet", "There is no set distance"],
        correctIndex: 2,
        explanation:
          "At least 500 feet. It applies once the vehicle has passed and you are back on the move behind it.",
        context:
          "Before that, the duty is to pull to the right edge of the road and stop, whichever direction the emergency vehicle is coming from. If you are in an intersection or roundabout you clear it first, and if a median separates you from an emergency vehicle on the other side you do not have to stop at all.",
        trap: "Following an ambulance through the gap it has opened is illegal in Iowa as well as dangerous.",
        excerptKey: "emergency-500-feet",
        sourceLabel: "Iowa Driver's License Manual - 2.23 Emergency Vehicles",
        sourceUrl: hb(19),
      },
      {
        id: "ia_s6_16",
        topic: "rules",
        question: "What is the Iowa signalling requirement on a road posted at 55 mph?",
        choices: ["100 feet", "200 feet", "300 feet", "500 feet"],
        correctIndex: 2,
        explanation:
          "Three hundred feet, because the limit is above 45 mph. At 45 mph or less the requirement is 100 feet.",
        context:
          "Iowa Code Section 321.315 requires the signal to be given continuously over that whole distance rather than flashed once before the turn. The manual asks you to signal every time you change direction, and to check that the signal has cancelled afterwards.",
        trap: "The threshold is 45 mph, not 50 or 55, so a 50 mph road already needs 300 feet.",
        excerptKey: "code-signal-100-300",
        sourceLabel: "Iowa Code Section 321.315 - Signal continuous",
        sourceUrl: code("321.315"),
      },
      {
        id: "ia_s6_17",
        topic: "signs",
        question: "What does the sign LANE ENDS warn of in Iowa?",
        choices: [
          "The centre strip is about to disappear",
          "Two lanes going the same way become one, and traffic must yield when merging",
          "The road becomes one-way",
          "A parking lane is beginning",
        ],
        correctIndex: 1,
        explanation:
          "Two lanes of traffic become one, and the manual adds the operative half: traffic must yield when merging.",
        context:
          "DIVIDED HIGHWAY ENDS is the one it gets confused with, and that means two-way traffic will no longer be separated by a centre strip. MERGING TRAFFIC is different again, warning a driver on the main road that other vehicles will be blending into their lane.",
        trap: "Iowa has no zipper merge rule, so \"must yield when merging\" is doing real work in that sentence.",
        excerptKey: "warning-lane-ends",
        sourceLabel: "Iowa Driver's License Manual - 2.3 Warning Signs",
        sourceUrl: hb(9),
      },
      {
        id: "ia_s6_18",
        topic: "speed",
        question: "What speed must you slow to when meeting an Iowa school bus whose amber warning lights are flashing?",
        choices: ["No more than 20 mph", "No more than 25 mph", "No more than 30 mph", "No specific speed"],
        correctIndex: 0,
        explanation:
          "No more than 20 mph, and you prepare to stop. When the bus stops and the arm goes out, you stop too.",
        context:
          "Iowa Code Section 321.372(3)(a) applies the same duty to a driver on a private road or driveway. The bus turns the amber lights on 300 to 500 feet before the stop where the limit is 45 mph or more, and at least 150 feet before it where it is lower.",
        trap: "Twenty is the speed for meeting a bus and 15 is the distance for stopping behind one. Neither number does the other's job.",
        excerptKey: "code-bus-meeting-20",
        sourceLabel: "Iowa Code Section 321.372(3)(a) - Discharging pupils",
        sourceUrl: code("321.372"),
      },
      {
        id: "ia_s6_19",
        topic: "safety",
        question: "How does the Iowa manual describe the risk of leaving someone in a closed vehicle on a warm day?",
        choices: [
          "The inside can reach 100 degrees in minutes even on a mild 78 degree day",
          "It is only a risk above 90 degrees",
          "It is only a risk with the windows fully closed",
          "It is a risk after about an hour",
        ],
        correctIndex: 0,
        explanation:
          "Even at 78 degrees outside, the inside of a parked vehicle can reach 100 degrees within minutes, and it can pass 160 degrees in under ten.",
        context:
          "The manual tells you never to leave children, elderly people, dependent people or pets alone in an enclosed vehicle, and to call 911 if you see symptoms of heat stroke. In Iowa it is legal to break a vehicle's window to provide medical attention to a person or animal trapped inside.",
        trap: "A mild day is exactly the scenario the manual chose, because it is the one people assume is safe.",
        excerptKey: "hot-car",
        sourceLabel: "Iowa Driver's License Manual - 5.12 Closed Vehicles on a Hot Day",
        sourceUrl: hb(59),
      },
      {
        id: "ia_s6_20",
        topic: "impairment",
        question: "How long is an Iowa licence revoked for refusing a chemical test?",
        choices: ["90 days", "180 days", "One year", "Two years"],
        correctIndex: 2,
        explanation:
          "One year, automatically, plus a minimum fine of $1,250. Refusing does not prevent an OWI conviction.",
        context:
          "Holding an Iowa licence carries implied consent under Iowa Code Section 321J.6, and the manual notes that the law reaches non-resident drivers travelling in the state. A court may also order a substance use disorder class and evaluation, or an ignition interlock at your own expense.",
        trap: "A first OWI revokes privileges for a minimum of 180 days, so refusing the test more than doubles that.",
        excerptKey: "test-refusal",
        sourceLabel: "Iowa Driver's License Manual - 3.8 Alcohol and Drugs",
        sourceUrl: hb(37),
      },
      {
        id: "ia_s6_21",
        topic: "signs",
        question: "What does a sign with a red circle and a red slash over a symbol mean in Iowa?",
        choices: [
          "The action shown is prohibited",
          "The action shown is permitted only at certain hours",
          "A hazard of the kind shown is ahead",
          "The action shown requires a permit",
        ],
        correctIndex: 0,
        explanation:
          "The circle and slash is a prohibition, and Iowa gives the standard examples - no left turn, no right turn, no U-turn.",
        context:
          "It belongs to the regulatory family, which is white and covers rules on traffic direction, lane use, turning, speed and parking. Regulatory signs tell you the law at that place, as distinct from the yellow warning signs that describe what is coming.",
        trap: "Nothing about the symbol tells you when it applies. If it applies only at certain hours, there will be a separate plaque saying so.",
        excerptKey: "regulatory-red-slash",
        sourceLabel: "Iowa Driver's License Manual - 2.2 Regulatory Signs",
        sourceUrl: hb(8),
      },
      {
        id: "ia_s6_22",
        topic: "sharing",
        question: "What does the Iowa manual say a truck driver often needs to do before turning right?",
        choices: [
          "Stop completely first",
          "Swing widely to the left",
          "Signal 500 feet ahead",
          "Move onto the shoulder",
        ],
        correctIndex: 1,
        explanation:
          "Trucks often swing wide to the left to get round a right-hand corner, and the driver cannot see a car that slips in between the truck and the curb.",
        context:
          "The manual's other truck advice is to stay out of the no-zones around the front, back and sides, to avoid pulling in front of a truck and forcing an emergency stop, and to wait until you can see the front of the truck in your rearview mirror before moving back in after a pass.",
        trap: "A truck drifting left looks like it is about to turn left, which is exactly the gap people try to fill on the right.",
        excerptKey: "truck-wide-right",
        sourceLabel: "Iowa Driver's License Manual - 5.9 Sharing the Road with Large Trucks",
        sourceUrl: hb(57),
      },
      {
        id: "ia_s6_23",
        topic: "parking",
        question: "How far from an Iowa stop sign may you park?",
        choices: ["Five feet", "Ten feet", "Twenty feet", "Thirty feet"],
        correctIndex: 1,
        explanation:
          "Ten feet on the approach to it, and the same 10 feet applies to a flashing beacon or a traffic-control signal at the side of the roadway.",
        context:
          "Iowa's measured parking distances are five feet from a hydrant, 10 feet on the approach to a stop sign or signal, 20 feet from a fire station driveway entrance, and 50 feet from the nearest rail of a railroad crossing.",
        trap: "Five feet is the hydrant number. Reversing the two is the most common way to get this wrong.",
        excerptKey: "code-parking-stop-sign-10",
        sourceLabel: "Iowa Code Section 321.358 - Stopping, standing, or parking",
        sourceUrl: code("321.358"),
      },
      {
        id: "ia_s6_24",
        topic: "rules",
        question: "Which lane should you use on an Iowa two-lane road running in your direction, other than to pass?",
        choices: ["The left lane", "The right lane", "Either", "Whichever has the better surface"],
        correctIndex: 1,
        explanation:
          "The left lane is generally for passing, so the right lane is where you travel. On a road with three or more lanes the rule becomes right or centre except to pass.",
        context:
          "The manual pairs this with a total prohibition on the shoulder: never drive on it and never pass on it unless a traffic control device or an official directs you, paved or not.",
        trap: "The rule is about passing rather than about speed, so sitting in the left lane at the limit still breaches it.",
        excerptKey: "lane-use-left-passing",
        sourceLabel: "Iowa Driver's License Manual - 2.18 General Lane Use",
        sourceUrl: hb(16),
      },
      {
        id: "ia_s6_25",
        topic: "rightOfWay",
        question: "A pedestrian is crossing an Iowa street on a skateboard. What do you owe them?",
        choices: [
          "Nothing; a skateboard is a vehicle",
          "The same duty you owe a pedestrian on foot",
          "The duty you owe a bicycle",
          "A warning on the horn",
        ],
        correctIndex: 1,
        explanation:
          "Iowa's 2024 crosswalk change treats a skateboard as a pedestrian conveyance, so the person on it is a pedestrian for right-of-way purposes.",
        context:
          "The definition covers any human-powered device by which a pedestrian may move other than by walking, or move another person, and the manual names wheelchairs, strollers, skateboards, scooters and electric personal assistive mobility devices. Everywhere the manual says pedestrian, it means both.",
        trap: "Speed of travel is not the test. The device being human-powered is.",
        excerptKey: "ped-conveyance-defined",
        sourceLabel: "Iowa Driver's License Manual - 2.4 Pedestrian Conveyance",
        sourceUrl: hb(10),
      },
      {
        id: "ia_s6_26",
        topic: "safety",
        question: "What does the Iowa manual advise if you are being tailgated?",
        choices: [
          "Brake sharply to warn the driver behind",
          "Speed up to open a gap",
          "Move slightly right, signal early, slow down and encourage them to pass",
          "Turn on your hazard lights",
        ],
        correctIndex: 2,
        explanation:
          "Give the tailgater a better view ahead, signal early for anything you are about to do, slow down to invite the pass, and pull out of the traffic flow if none of that works.",
        context:
          "The manual's defensive driving section makes the same point in principle - if another driver is showing signs of aggressive driving, slow down or pull over to avoid them, and get off the roadway by turning or taking an exit if you feel unsafe.",
        trap: "Speeding up hands control of your speed to the driver behind you, and does not open a gap for long.",
        excerptKey: "tailgated-response",
        sourceLabel: "Iowa Driver's License Manual - 4.12 Driving Safely in Traffic",
        sourceUrl: hb(48),
      },
      {
        id: "ia_s6_27",
        topic: "emergencies",
        question: "Your headlights fail suddenly on a dark Iowa road. What does the manual tell you to try?",
        choices: [
          "Pull over immediately without touching anything",
          "Try the switch a few times, try the high beams, then use flashers, signals or fog lights and pull off",
          "Follow the vehicle ahead using its tail lights",
          "Turn the ignition off and on",
        ],
        correctIndex: 1,
        explanation:
          "Work the switch, try the high beams, and if nothing comes back use whatever lights still work - flashers, turn signals or fog lights - while you get off the road.",
        context:
          "The manual's emergency responses share a pattern: keep control first, restore what you can, then leave the road safely. For a stall you keep a strong grip because the steering gets heavy and the brakes need far more pressure. For a flat tire you hold the wheel straight and come off the gas rather than braking hard.",
        trap: "Stopping in an unlit lane with no lights is more dangerous than driving slowly to the shoulder on hazards.",
        excerptKey: "headlights-fail",
        sourceLabel: "Iowa Driver's License Manual - 5.14 Equipment Failure Emergencies",
        sourceUrl: hb(62),
      },
      {
        id: "ia_s6_28",
        topic: "signals",
        question: "What must you do at a solid red light in Iowa if you are going straight?",
        choices: [
          "Come to a complete stop and wait",
          "Slow and proceed if the intersection is clear",
          "Stop, then proceed as at a stop sign",
          "Yield to traffic on the cross street and continue",
        ],
        correctIndex: 0,
        explanation:
          "A steady red means stop and remain stopped until a signal to proceed is shown. The only movements permitted on red in Iowa are a right turn and a left from one one-way street to another.",
        context:
          "A flashing red is the signal that works like a stop sign - stop, then go when it is clear. Confusing the two is why the manual lists them in the same table with different wording.",
        trap: "The flashing red rule is the one that lets you proceed after stopping, and a steady red is not a slower version of it.",
        excerptKey: "signal-solid-red",
        sourceLabel: "Iowa Driver's License Manual - 2.9 Traffic Signals",
        sourceUrl: hb(11),
      },
      {
        id: "ia_s6_29",
        topic: "impairment",
        question: "Which of these is on the Iowa manual's list of drowsy driving warning signs?",
        choices: [
          "Trouble remembering the last few miles driven",
          "A raised heart rate",
          "Feeling too warm",
          "Gripping the wheel harder than usual",
        ],
        correctIndex: 0,
        explanation:
          "Not remembering the last few miles is one of the manual's named symptoms, alongside daydreaming, repeated yawning, trouble keeping your head up, drifting or hitting a rumble strip, and feeling restless and irritable.",
        context:
          "The manual treats drowsy driving as being as dangerous as drunk driving and gives a comparison to prove the point: being awake for 18 hours straight is as impairing as a BAC of 0.08. The response to any of the symptoms is to take a break, pull over somewhere safe, or switch drivers.",
        trap: "The symptoms are all cognitive or behavioural rather than physical, which is why they are so easy to drive through.",
        excerptKey: "drowsy-signs",
        sourceLabel: "Iowa Driver's License Manual - 3.9 Drowsy Driving",
        sourceUrl: hb(37),
      },
      {
        id: "ia_s6_30",
        topic: "licensing",
        question: "At what age can an Iowa driver get a full, unrestricted licence?",
        choices: ["16", "16 and a half", "17", "18"],
        correctIndex: 2,
        explanation:
          "Seventeen, after holding an intermediate licence for 12 consecutive months and completing 10 hours of supervised driving with two of them after dark.",
        context:
          "Iowa's three stages run permit at 14, intermediate at 16 and full at 17, with a special minor's restricted licence available at 14 and a half as an optional extra step. A parent or guardian still has to give written consent for a full licence issued to anyone under 18, and the licence carries the words \"under eighteen\" or \"under twenty-one\".",
        trap: "Eighteen is when the parental consent requirement falls away, which is not the same as when the full licence becomes available.",
        excerptKey: "dot-full-licence",
        sourceLabel: "Iowa DOT - Full License",
        sourceUrl: FULL,
      },
    ],
  },
];
