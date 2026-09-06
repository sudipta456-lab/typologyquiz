import type { DrivingTestSet } from "../types";

// Sets 1-3 of the Quebec bank. Every question is written from scratch against
// the SAAQ's free reference guides, its own road-safety pages and the Highway
// Safety Code. Nothing here reproduces an official sentence as a question, and
// nothing is taken from a practice site or from anyone's memory of the real
// exam. Where the 2018 Driver's Handbook and a current SAAQ page disagree, the
// question follows the current page and the research note records the lag.

const HB = "https://saaq.gouv.qc.ca/blob/saaq/documents/publications/drivers-handbook.pdf";
const DPV = "https://saaq.gouv.qc.ca/blob/saaq/documents/publications/driving-passenger-vehicle.pdf";
const HSC = "https://www.legisquebec.gouv.qc.ca/en/document/cs/C-24.2";
const CLASS5 =
  "https://saaq.gouv.qc.ca/en/drivers-licences/obtaining-licence/passenger-vehicle-class-5";
const RTOR =
  "https://saaq.gouv.qc.ca/en/road-safety/behaviours/turning-right-red-light/what-law-says";
const WINTER =
  "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/winter-driving";
const PHONE =
  "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/portable-electronic-device";
const ALCOHOL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/alcohol";
const FATIGUE = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/fatigue";
const MOVEOVER =
  "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/move-over-law";
const NIGHT =
  "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/driving-night";
const BLIND =
  "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/blind-spots";
const WORK =
  "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/road-work-zones";
const PED = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/pedestrian";
const DEMERIT = "https://saaq.gouv.qc.ca/en/drivers-licences/demerit-points";
const SPEEDLAW = "https://saaq.gouv.qc.ca/en/road-safety/behaviours/speed/what-law-says";
const CHILD =
  "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/child-safety-cars";
const DRUGS =
  "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/drugs-medication";

const HB_SIGNS = "Driver's Handbook - Chapter 3: Road Signs and Traffic Signals";
const HB_RULES = "Driver's Handbook - Chapter 4: Traffic Rules";
const HB_DRIVER = "Driver's Handbook - Chapter 1: The Driver";
const HB_ACCID = "Driver's Handbook - Chapter 5: Accidents";
const HB_OFF = "Driver's Handbook - Chapter 6: Offences and Consequences";

export const quebecSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Quebec Basics",
    difficulty: "starter",
    description:
      "The rules a Quebec learner meets first: what the lights mean, how fast you may go, who goes first, and the two or three numbers the SAAQ test keeps coming back to.",
    questions: [
      {
        id: "qc_s1_01",
        topic: "signals",
        question: "A traffic light turns red as you approach an intersection with no stop line and no crosswalk painted on the road. Where do you stop?",
        choices: [
          "Before the edge of the roadway you are about to cross",
          "In the middle of the intersection, so you can see both ways",
          "Wherever there is room, as long as you are stopped",
          "Level with the traffic light itself",
        ],
        correctIndex: 0,
        explanation:
          "A red light means a full stop. When there is no line and no crosswalk to stop at, the stopping point is the edge of the roadway you are about to enter, so you stay clear of the crossing traffic.",
        context:
          "In Quebec the stopping point at a red light is the stop line first, the pedestrian crosswalk if there is no line, and the edge of the roadway if there is neither. You may then move only when a signal authorises it, and the same order applies at a stop sign.",
        trap: "Rolling forward to see better puts your car in the path of the crossing traffic. Stop first, then edge forward only if your view is blocked.",
        excerptKey: "red-light-no-line",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_02",
        topic: "speed",
        question: "Unless a sign says otherwise, what is the maximum speed on a Quebec autoroute?",
        choices: [
          "90 km/h",
          "100 km/h",
          "110 km/h",
          "120 km/h",
        ],
        correctIndex: 1,
        explanation:
          "The Highway Safety Code sets the autoroute range at not less than 60 km/h and not more than 100 km/h. Signs can change it, but 100 is the default a test question means when it says nothing else.",
        context:
          "Quebec's statutory defaults are 100 km/h on autoroutes, 90 km/h on paved public highways, 70 km/h on gravel highways and 50 km/h in a built-up area. There is also a 60 km/h minimum on the autoroute, which is unusual and does get asked.",
        trap: "Some provinces post 110 km/h on their freeways. Quebec does not, and the number the SAAQ tests is 100.",
        excerptKey: "hsc-autoroute-speed",
        sourceLabel: "Highway Safety Code, section 328",
        sourceUrl: HSC,
      },
      {
        id: "qc_s1_03",
        topic: "rules",
        question: "You are behind a school bus in your lane. Its red lights start flashing and the stop arm swings out. What must you do?",
        choices: [
          "Stop level with the rear bumper of the bus",
          "Keep going if no children are visible",
          "Slow to 30 km/h and pass with care",
          "Stop at least five metres behind the bus and wait",
        ],
        correctIndex: 3,
        explanation:
          "Flashing red lights or an extended stop arm means a full stop at least five metres from the bus. You move again only once the lights are off, the arm is folded back and the way is clear.",
        context:
          "Amber lights on a school bus are the warning to get ready to stop; red lights and the stop arm are the order to stop. The duty applies to traffic in both directions on the same roadway, and the demerit points for ignoring it are among the heaviest in the Code.",
        trap: "Five metres is a real gap, not a bumper-to-bumper stop. Children cross in front of the bus where a close-following driver cannot see them.",
        excerptKey: "school-bus-5-metres",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_04",
        topic: "signs",
        question: "In Quebec, what colour combination is used for regulatory signs?",
        choices: [
          "Green with white lettering",
          "Yellow with black symbols",
          "Orange with black symbols",
          "Black and white",
        ],
        correctIndex: 3,
        explanation:
          "Quebec follows the North American convention: black and white for regulatory signs, yellow for danger warnings, orange for road work, and green, brown or blue for information.",
        context:
          "Colour tells you the category before you can read the sign. Shape narrows it further: octagons are reserved for stop signs, pentagons for school zones, and diamonds for danger and work-site warnings.",
        trap: "Yellow is a warning, not an order. A yellow sign tells you something is coming; a black-and-white one tells you what you must do.",
        excerptKey: "sign-colours",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_05",
        topic: "safety",
        question: "Who has to wear a seat belt in a moving car in Quebec?",
        choices: [
          "Everyone except passengers over 16",
          "Every occupant, front and back",
          "Everyone except passengers in the centre rear seat",
          "The driver and front-seat passengers only",
        ],
        correctIndex: 1,
        explanation:
          "The belt rule covers every occupant of a moving vehicle, front seat and back seat alike. Children small enough to need a child seat are secured in that instead.",
        context:
          "The driver also carries the responsibility for passengers under 16 being properly buckled, so a teenager riding unbelted in the back is the driver's offence as well as their own. Demerit points can be entered against a passenger's own record too.",
        trap: "Back-seat passengers are not exempt anywhere in Quebec, and neither are adults who think the rule stops at the front row.",
        excerptKey: "seat-belt-mandatory",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_06",
        topic: "rightOfWay",
        question: "Two cars reach an all-way stop, one clearly before the other. Who goes first?",
        choices: [
          "The vehicle going straight ahead",
          "The larger of the two vehicles",
          "The vehicle that arrived at the intersection first",
          "The vehicle on the right, always",
        ],
        correctIndex: 2,
        explanation:
          "At an all-way stop the order is order of arrival: you yield to any vehicle that got there before you. Only when arrivals are genuinely simultaneous does anything else decide it.",
        context:
          "Both drivers must still yield to pedestrians and cyclists crossing or travelling alongside the roadway they are about to enter, whatever the order of arrival between the cars.",
        trap: "The yield-to-the-right habit is a tie-breaker, not the rule. If the other driver stopped first, they go first even if they are on your left.",
        excerptKey: "all-way-stop-pedestrians",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_07",
        topic: "impairment",
        question: "You hold a Quebec learner's licence. How much alcohol may you have in your body when you drive?",
        choices: [
          "One drink, if you wait an hour",
          "Up to 0.05, the same as a heavy-vehicle driver",
          "None at all",
          "Up to 0.08, the criminal limit",
        ],
        correctIndex: 2,
        explanation:
          "Learner and probationary licence holders, and every driver under 22, are under the zero-alcohol rule. Any trace at all is an offence, well below the criminal 0.08.",
        context:
          "Breaking the zero-alcohol rule brings an immediate 90-day licence suspension, four demerit points and a fine of $300 to $600. Four points alone revokes a learner's or probationary licence, so one offence ends the licence.",
        trap: "0.08 is the Criminal Code line for everyone. It is not your limit while you are a new driver, and neither is 0.05.",
        excerptKey: "zero-alcohol-who",
        sourceLabel: "SAAQ - Drinking and Driving: Impairment and Consequences",
        sourceUrl: ALCOHOL,
      },
      {
        id: "qc_s1_08",
        topic: "signals",
        question: "What does a flashing green light mean to a driver in Quebec?",
        choices: [
          "The light is faulty; treat it as a stop sign",
          "You may go, but oncoming traffic has priority",
          "Your left turn is protected because oncoming traffic is stopped",
          "The light is about to turn yellow",
        ],
        correctIndex: 2,
        explanation:
          "A flashing green is a protected left turn: the drivers coming the other way are held on a red. You still yield to anyone already inside the intersection.",
        context:
          "Quebec uses the flashing green where other places use a green arrow. A green arrow means the same thing for the direction it points, and both leave your duty toward pedestrians untouched.",
        trap: "It is easy to read a flashing signal as a fault or a warning. A flashing green is the opposite: it is the safest moment you will get to turn left.",
        excerptKey: "flashing-green",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_09",
        topic: "rules",
        question: "When are winter tires required on a passenger vehicle registered in Quebec?",
        choices: [
          "Only when snow is actually on the ground",
          "From December 15 to March 31",
          "From November 15 to April 15",
          "From December 1 to March 15 inclusive",
        ],
        correctIndex: 3,
        explanation:
          "The winter tire season runs from December 1 to March 15 inclusive. It is a calendar rule, not a weather rule, so bare pavement on December 2 is no defence.",
        context:
          "Only studded tires and tires carrying the winter pictogram count. The SAAQ issues exemption certificates in narrow cases, applied for through SAAQclic or at a service outlet.",
        trap: "All-season tires are not winter tires. The pictogram, a peaked mountain with a snowflake, is what the law looks for.",
        excerptKey: "winter-tires-dates",
        sourceLabel: "SAAQ - Winter Driving",
        sourceUrl: WINTER,
        commonlyMissed: true,
      },
      {
        id: "qc_s1_10",
        topic: "signs",
        question: "An octagonal sign in Quebec always means what?",
        choices: [
          "Stop",
          "No parking",
          "Yield",
          "Do not enter",
        ],
        correctIndex: 0,
        explanation:
          "The octagon is reserved for the stop sign and nothing else, so the shape alone tells you what to do even when snow or dirt hides the word.",
        context:
          "Shape carries meaning in Quebec's system: octagon for stop, pentagon for a school zone, diamond for danger and work-site warnings. The word on the sign may read ARRET or STOP; both are the same sign.",
        trap: "Yield is the downward triangle. Confusing the two costs you a full stop you were required to make.",
        excerptKey: "sign-shapes",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_11",
        topic: "rules",
        question: "Where may you legally hold your phone while driving in Quebec?",
        choices: [
          "Nowhere, including while stopped at a red light",
          "At a red light, since the car is not moving",
          "In slow traffic, if you keep it below the window line",
          "Anywhere, as long as you are only reading and not typing",
        ],
        correctIndex: 0,
        explanation:
          "Holding a portable device with a screen is the offence, and you count as driving whenever you are at the wheel in a traffic lane. A red light and a traffic jam are both still driving.",
        context:
          "Merely holding the device is enough; the law does not ask whether it was switched on. To use one legally you have to bring the car to a safe and legal stop off the traffic lane, at which point you are no longer driving even with the engine running.",
        trap: "The red-light exception people believe in does not exist in Quebec. It is spelled out on the SAAQ's own page that you are driving at a red light.",
        excerptKey: "what-driving-means",
        sourceLabel: "SAAQ - Portable electronic devices",
        sourceUrl: PHONE,
        commonlyMissed: true,
      },
      {
        id: "qc_s1_12",
        topic: "sharing",
        question: "A pedestrian is standing at a marked crosswalk and makes eye contact with you. What must you do?",
        choices: [
          "Slow down but continue through the crosswalk",
          "Sound the horn so they know you have seen them",
          "Keep going if they have not stepped onto the road yet",
          "Stop and let them cross",
        ],
        correctIndex: 3,
        explanation:
          "At a crosswalk a pedestrian has priority once they are crossing or have clearly shown they intend to cross, and eye contact counts as showing it. The duty is to stop, not merely to slow.",
        context:
          "Waiting at the crosswalk, walking toward it, gesturing with a hand or catching your eye are all signals the Highway Safety Code treats the same way. Failing to yield to pedestrians and cyclists at an intersection carries demerit points.",
        trap: "Waiting for someone to commit a foot to the roadway before you stop is the wrong order. Their signal comes first, your stop second.",
        excerptKey: "ped-crosswalk-priority",
        sourceLabel: "SAAQ - Pedestrians: What the Law Says",
        sourceUrl: PED,
      },
      {
        id: "qc_s1_13",
        topic: "parking",
        question: "How close to the edge of the roadway must you leave a parked car in Quebec?",
        choices: [
          "No more than 50 cm",
          "No more than one metre",
          "There is no set distance",
          "No more than 30 cm",
        ],
        correctIndex: 3,
        explanation:
          "A parked vehicle must sit no more than 30 cm from the edge of the roadway, and it must face the same way as the traffic on its side.",
        context:
          "On a slope you also set the parking brake and turn the wheels so that if the car rolls, it rolls toward the nearest curb. Leaving the vehicle means taking the key and locking the doors.",
        trap: "Parking against the flow of traffic is an offence even when the space is empty and the street is quiet.",
        excerptKey: "park-30-cm",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_14",
        topic: "signals",
        question: "The traffic lights at a busy intersection are completely dead. How do you treat the intersection?",
        choices: [
          "Wait for a police officer before proceeding",
          "As though it were controlled by stop signs in every direction",
          "As a free-flowing intersection, with the busier road having priority",
          "As though the light were green for the main road",
        ],
        correctIndex: 1,
        explanation:
          "When traffic lights are out or defective, every approach behaves as if it had a stop sign, unless a sign or a person is there directing traffic instead.",
        context:
          "That makes it an all-way stop, so the order of arrival decides who goes, and everyone still yields to pedestrians and cyclists crossing the roadway they are entering.",
        trap: "Nothing gives the bigger road priority when the lights fail. Treating your road as the main one is exactly how these intersections produce collisions.",
        excerptKey: "lights-out-act-as-stop",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_15",
        topic: "rules",
        question: "On a two-way road with two or more lanes in each direction, which lane should you normally use?",
        choices: [
          "Whichever lane is moving fastest",
          "The right-hand lane",
          "The centre of the roadway",
          "The left lane, keeping the right free for entering traffic",
        ],
        correctIndex: 1,
        explanation:
          "The right-hand lane is the travelling lane. You use the left to pass another vehicle or to get around an obstacle, after checking it is clear.",
        context:
          "On an autoroute the far left lane is for passing, turning left, avoiding obstacles or moving toward an exit. Below 80 km/h, on an urban boulevard for instance, you may use either lane and simply travelling faster than the next lane is not passing.",
        trap: "Sitting in the left lane because it is emptier is not permitted at highway speeds, however comfortable it feels.",
        excerptKey: "keep-right",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_16",
        topic: "safety",
        question: "Roughly how much of the information a driver needs is gathered by sight?",
        choices: [
          "About 30%",
          "About 50%",
          "About 70%",
          "About 90%",
        ],
        correctIndex: 3,
        explanation:
          "The handbook puts it at about 90%, which is why any real loss of vision, or anything that narrows your field of view, matters so much behind the wheel.",
        context:
          "Your visual field also shrinks as the car speeds up, and alcohol, drugs and fatigue narrow it the same way. That is part of why speed and impairment compound each other.",
        trap: "Underestimating the figure makes it easy to shrug off a vision condition or a dirty windshield as a small thing.",
        excerptKey: "vision-90-percent",
        sourceLabel: HB_DRIVER,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_17",
        topic: "signs",
        question: "What does an orange sign at the roadside mean in Quebec?",
        choices: [
          "A tourist route or point of interest",
          "A school zone",
          "A recommended speed for a curve",
          "Road work",
        ],
        correctIndex: 3,
        explanation:
          "Orange is reserved for work sites. An orange speed limit sign is a real limit with the same legal force as a white one, and the fine for exceeding it is doubled.",
        context:
          "Yellow signs by contrast carry danger warnings, and a yellow tab under a curve sign gives a recommended speed rather than a legal one. Only the orange and white signs set a limit you can be fined for breaking.",
        trap: "Treating an orange limit as advice is expensive: work-zone speeding fines are doubled, and so are school-zone fines during the school year.",
        excerptKey: "orange-speed-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_18",
        topic: "rightOfWay",
        question: "You are turning left at a green light with no arrow. An oncoming car is coming straight through. Who goes first?",
        choices: [
          "The oncoming car",
          "Whoever entered the intersection first",
          "You, if you have already started to turn",
          "You, because a turning vehicle clears the intersection sooner",
        ],
        correctIndex: 0,
        explanation:
          "A driver turning left yields to any oncoming vehicle. The green light gives you permission to enter the intersection, not priority over traffic coming the other way.",
        context:
          "You also yield to pedestrians and cyclists crossing the road you are turning into. When the left turn is protected, by a flashing green or a green arrow, the oncoming traffic is held instead.",
        trap: "Being partway into the turn does not transfer the right of way. If you have to wait in the intersection, wait.",
        excerptKey: "left-turn-yield-oncoming",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_19",
        topic: "impairment",
        question: "You are tired on a long drive. Which of these actually restores your alertness?",
        choices: [
          "Stopping somewhere safe for a 20 to 30 minute nap",
          "Talking continuously to a passenger",
          "Opening the window and turning up the radio",
          "Chewing gum and shifting position",
        ],
        correctIndex: 0,
        explanation:
          "Only sleep works. The SAAQ lists the window, the radio, gum, singing and conversation together as misconceptions that do not last.",
        context:
          "Plan a break about every two hours, and take the nap before you are fighting to keep your eyes open. Coffee helps most taken just before the nap, since it needs about twenty minutes to act.",
        trap: "The tricks feel like they work because they wake you for a minute or two. Fatigue then returns without warning, which is how microsleeps happen.",
        excerptKey: "fatigue-myths",
        sourceLabel: "SAAQ - Driver Fatigue",
        sourceUrl: FATIGUE,
      },
      {
        id: "qc_s1_20",
        topic: "rules",
        question: "You are on a two-lane road and want to pass. What do the lines tell you?",
        choices: [
          "A solid line on your side means you may pass if the road is clear",
          "Double solid yellow lines may be crossed to pass a slow vehicle",
          "The colour of the line makes no difference to passing",
          "A broken line on your side means you may pass when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "Passing is allowed where the broken line is on your side at the start of the manoeuvre, and the pass must be finished before that broken line ends.",
        context:
          "Two solid yellow lines may not be crossed at all. A single solid line may be crossed only in narrow cases, such as an obstructed lane, a left turn into a driveway, or passing farm machinery, a bicycle or a slow-moving vehicle displaying the orange triangle.",
        trap: "Starting a pass late and finishing it over a solid line is still an offence, even if nothing was coming.",
        excerptKey: "broken-beside-solid",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_21",
        topic: "sharing",
        question: "A police car behind you switches on its flashing lights and siren. What is the correct sequence?",
        choices: [
          "Signal, pull over to the side as soon as it is safe, stop, and put your hands where they can be seen",
          "Speed up to the next exit so you do not block traffic",
          "Slow down and continue until the officer passes you",
          "Stop immediately, wherever you are",
        ],
        correctIndex: 0,
        explanation:
          "Signal, move to the side of the road as soon as you can do it safely, come to a stop, and rest your hands on the wheel so they are visible.",
        context:
          "Stopping dead in a traffic lane creates a second hazard. The officer will explain the reason for the interception, and at night a flashlight pointed into the car is routine rather than a sign of trouble.",
        trap: "Slamming on the brakes in the lane feels obedient and is not. Safe and prompt beats instant.",
        excerptKey: "police-hands-visible",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_22",
        topic: "signals",
        question: "A red X is lit over the lane you are driving in. What does it mean?",
        choices: [
          "You may drive in the lane but not stop in it",
          "You may neither drive nor stop in that lane",
          "The lane ahead is closed in 500 metres",
          "The lane is reserved for buses during rush hour",
        ],
        correctIndex: 1,
        explanation:
          "The red X closes the lane beneath it to you completely: no driving and no stopping. A green downward arrow means the lane is open.",
        context:
          "A flashing yellow horizontal arrow usually appears beside the red X, telling you which side to move to because of a closure ahead. Lane use lights are common on bridges and reversible-lane roads around Montreal.",
        trap: "The red X is not advance warning. It applies to the lane directly under the signal, right now.",
        excerptKey: "lane-red-x",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_23",
        topic: "speed",
        question: "Unless a sign says otherwise, what is the maximum speed in a built-up area in Quebec?",
        choices: [
          "40 km/h",
          "50 km/h",
          "60 km/h",
          "70 km/h",
        ],
        correctIndex: 1,
        explanation:
          "The default in a built-up area is 50 km/h. Municipalities post lower limits on many streets, and where they do the posted number wins.",
        context:
          "The statutory defaults sit behind every unposted road: 50 in a built-up area, 70 on gravel, 90 on paved highways, 100 on autoroutes. On an access road into a built-up area, the 50 applies from the sign onward.",
        trap: "A residential street with no sign is still 50, not 40. The 30 and 40 zones you see in Montreal exist because a municipality posted them.",
        excerptKey: "hsc-other-speeds",
        sourceLabel: "Highway Safety Code, section 328",
        sourceUrl: HSC,
      },
      {
        id: "qc_s1_24",
        topic: "safety",
        question: "Until what point must a child be secured in a car seat suited to their weight and height in Quebec?",
        choices: [
          "Until they are 145 cm tall or 9 years old",
          "Until they are 7 years old",
          "Until they can sit with their back against the seat",
          "Until they weigh 18 kg",
        ],
        correctIndex: 0,
        explanation:
          "Since April 2019 the rule has been height or age: a child seat suited to the child until they reach 145 cm or turn 9, whichever comes first.",
        context:
          "The point of a booster is to put the adult belt across the middle of the shoulder and across the hips. A belt that lands on the neck or the stomach injures a child in the crash it was meant to prevent.",
        trap: "The old 63 cm sitting-height test is in the 2018 printed handbook and has been superseded. The current rule is 145 cm or 9 years.",
        excerptKey: "child-seat-145",
        sourceLabel: "SAAQ - Child safety in cars",
        sourceUrl: CHILD,
      },
      {
        id: "qc_s1_25",
        topic: "rules",
        question: "What must you do before changing lanes, turning, passing or making a U-turn?",
        choices: [
          "Nothing, if the road looks empty",
          "Sound the horn",
          "Flash your headlights at following traffic",
          "Signal with your turn-signal lights over a sufficient distance",
        ],
        correctIndex: 3,
        explanation:
          "The turn-signal lights have to be on continuously over a distance long enough to keep you and everyone else safe, before the manoeuvre and not during it.",
        context:
          "The same duty covers entering a roadway from the shoulder or from a parking area. Signalling only tells people your intention; it never gives you the right of way to carry it out.",
        trap: "A signal flicked on as you begin to move is not a signal over a sufficient distance, and it is the manoeuvre most often blamed after a lane-change collision.",
        excerptKey: "signal-intentions",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_26",
        topic: "signs",
        question: "You see a yellow diamond sign with a symbol on it. What kind of message is it?",
        choices: [
          "Directions to a service or destination",
          "A parking restriction",
          "An order you can be fined for disobeying",
          "A danger warning",
        ],
        correctIndex: 3,
        explanation:
          "Yellow diamonds carry danger warnings. They tell you to be alert, slow down, change lanes or stop, depending on what is ahead.",
        context:
          "Orange diamonds carry the same shapes for work sites. Regulatory signs, the ones that create an obligation, are black and white, and information signs are green, brown or blue with written text.",
        trap: "A warning sign is not an advisory to ignore. Failing to slow for a hazard it announces can still be an unsafe-speed offence.",
        excerptKey: "warning-signs",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_27",
        topic: "sharing",
        question: "An ambulance approaches from behind with its lights flashing and siren on. What should you do?",
        choices: [
          "Slow down, keep as far right as you can, and stop if you need to",
          "Turn at the next corner to get out of the way",
          "Speed up to stay ahead of it",
          "Brake hard and stop in your lane",
        ],
        correctIndex: 0,
        explanation:
          "Reduce speed, move as far right as possible, and stop if that is what it takes to let the vehicle through. The duty applies wherever the emergency vehicle is coming from.",
        context:
          "Stay clear of intersections while you do it, never turn across the front of an emergency vehicle, and do not tuck in behind one to use the gap it has made.",
        trap: "Turning off the road to escape is the manoeuvre that gets people hit. Move right and stop, do not change direction.",
        excerptKey: "emergency-vehicle-yield",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_28",
        topic: "rightOfWay",
        question: "You are entering a traffic circle in Quebec. Who has the right of way?",
        choices: [
          "Whoever signals first",
          "Vehicles already travelling in the circle",
          "Vehicles entering, because the circle must keep filling",
          "The vehicle on the right of the entry",
        ],
        correctIndex: 1,
        explanation:
          "You yield to the traffic already going round. You enter from the right, into a gap, without forcing anyone inside the circle to brake.",
        context:
          "Traffic runs counterclockwise. Slow on the approach, be ready to stop for a pedestrian at a crosswalk or a vehicle to your left, and signal as you leave. Passing and stopping inside the circle are not allowed except in an emergency.",
        trap: "Stopping dead at every traffic circle is as disruptive as not slowing at all. The aim is to merge without stopping, and to stop only when there is no gap.",
        excerptKey: "circle-yield-inside",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_29",
        topic: "impairment",
        question: "What is the only thing that lowers your blood alcohol concentration?",
        choices: [
          "Black coffee and a cold shower",
          "Time",
          "A brisk walk in cold air",
          "Eating a large meal",
        ],
        correctIndex: 1,
        explanation:
          "Only time. Food slows how quickly alcohol reaches the blood but does not stop you reaching a high level, and coffee, showers and walks do nothing at all.",
        context:
          "The liver clears about 90% of the alcohol you drink, at a rate that does not speed up on demand. That is why the SAAQ's advice is to arrange the ride home before the evening starts.",
        trap: "Feeling sober is not the same as being sober. Regular drinkers in particular get an illusion of control while their driving is still impaired.",
        excerptKey: "alcohol-only-time",
        sourceLabel: HB_DRIVER,
        sourceUrl: HB,
      },
      {
        id: "qc_s1_30",
        topic: "licensing",
        question: "How long must you hold a Quebec Class 5 learner's licence before you can take the SAAQ road test?",
        choices: [
          "6 months",
          "10 months",
          "12 months",
          "24 months",
        ],
        correctIndex: 2,
        explanation:
          "Twelve months with the learner's licence is the prerequisite for the road test. The knowledge test comes earlier, at ten months.",
        context:
          "The full path is learner's licence held 12 months, the driving course, the SAAQ knowledge test, the road test, then a probationary licence for 24 months before the full Class 5.",
        trap: "Ten and twelve months are two different gates. Ten months lets you sit the knowledge test; the road test still waits for twelve.",
        excerptKey: "class5-path",
        sourceLabel: "SAAQ - Obtaining a Class 5 Driver's Licence",
        sourceUrl: CLASS5,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Signs, markings and right of way at the level the SAAQ test asks them: not the definitions, the decisions.",
    questions: [
      {
        id: "qc_s2_01",
        topic: "signals",
        question: "What must a driver do at a flashing red light?",
        choices: [
          "Stop only if another vehicle is present",
          "Treat it as a green light between midnight and 5 a.m.",
          "Slow down and proceed with care",
          "Stop, then yield to traffic on the intersecting road before going",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is a stop. After stopping you yield to any vehicle in the intersection or close enough that going would risk a collision.",
        context:
          "Flashing red and flashing yellow lights mark intersections that are unusually dangerous. A flashing yellow means slow down and yield to anyone already in the intersection, without a compulsory stop.",
        trap: "The flashing part does not soften the red. It behaves exactly like a stop sign, and flashing reds are often used alongside one.",
        excerptKey: "flashing-red",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_02",
        topic: "signs",
        question: "What does a downward-pointing triangle with a red border tell you?",
        choices: [
          "Come to a full stop",
          "Yield to traffic on the road you are entering",
          "The road ahead narrows",
          "Two-way traffic begins",
        ],
        correctIndex: 1,
        explanation:
          "It is the yield sign: give way to vehicles already travelling on the road you are about to enter, stopping only if that is what it takes.",
        context:
          "A variant of the same sign is used at traffic circles, where you yield to vehicles already in the circle, and another version tells you to yield to oncoming traffic on a one-lane bridge or at a work site with no flagperson.",
        trap: "Yield is not a stop. Coming to a full stop every time disrupts traffic just as much as sailing through does.",
        excerptKey: "yield-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_03",
        topic: "rules",
        question: "In which direction must the wheels point when you park facing downhill on a Quebec street?",
        choices: [
          "Turned so that any movement of the front of the car goes toward the nearest curb",
          "Turned away from the curb so the car rolls into the lane",
          "It does not matter as long as the brake is set",
          "Straight ahead, with the parking brake on",
        ],
        correctIndex: 0,
        explanation:
          "The rule is written by outcome, not by compass: set the parking brake and turn the wheels so that if the car moves, its front goes toward the nearest curb.",
        context:
          "That single sentence covers both directions of slope, which is why the handbook does not give separate uphill and downhill instructions. Removing the key and locking the doors are separate duties.",
        trap: "Memorising uphill and downhill as two different rules invites you to get one of them backwards. Ask instead where the car would end up if the brake let go.",
        excerptKey: "park-on-slope",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_04",
        topic: "rightOfWay",
        question: "You are pulling out of a private driveway onto a street. Who has the right of way?",
        choices: [
          "You, if the street has no traffic sign",
          "You, once you have signalled",
          "The vehicles and pedestrians already on the public roadway",
          "Whoever is closest to the driveway entrance",
        ],
        correctIndex: 2,
        explanation:
          "Entering or leaving private property, you signal first and then yield to everything already using the public roadway, vehicles, cyclists and pedestrians alike.",
        context:
          "The same order applies crossing a sidewalk on the way out: pedestrians and cyclists on the footway are on the road network too and go first.",
        trap: "Signalling is not the same as acquiring priority. It announces what you want to do, nothing more.",
        excerptKey: "private-property-yield",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_05",
        topic: "signals",
        question: "What does a steady orange hand on a pedestrian signal tell a pedestrian?",
        choices: [
          "Do not start crossing",
          "Cross only at the marked lines",
          "Wait for a vehicle to stop first",
          "Cross quickly",
        ],
        correctIndex: 0,
        explanation:
          "A steady orange hand means do not enter the intersection. A flashing hand means anyone already crossing should hurry to the far sidewalk or the median.",
        context:
          "The white silhouette authorises the crossing, and a countdown shows how much time is left. Drivers turning right on a red still have to yield to pedestrians whose signal allows them to cross.",
        trap: "A countdown showing several seconds is not an invitation to start. Once the hand is up, the crossing is closed to new pedestrians.",
        excerptKey: "orange-hand",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_06",
        topic: "rules",
        question: "You are driving on an autoroute and miss your exit. What may you do?",
        choices: [
          "Continue to the next exit",
          "Reverse down the exit ramp if it is clear",
          "Reverse carefully along the shoulder to the ramp",
          "Stop on the shoulder and wait for a gap to back up",
        ],
        correctIndex: 0,
        explanation:
          "Reversing is prohibited on autoroutes and on their access and exit ramps. Carrying on to the next exit is the only lawful answer.",
        context:
          "Driving on the shoulder is likewise barred except in genuine necessity, such as a closed lane or an emergency, or where a sign allows it. Stopping on the shoulder to think is not one of the exceptions.",
        trap: "An empty shoulder looks harmless and is the place where stopped vehicles get struck. The rule exists because of the speed differential, not the traffic volume.",
        excerptKey: "no-reverse-on-highway",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_07",
        topic: "safety",
        question: "How much space should there be between your headrest and the back of your head?",
        choices: [
          "About 20 centimetres",
          "The headrest should touch the head at all times",
          "As much as possible",
          "No more than seven centimetres",
        ],
        correctIndex: 3,
        explanation:
          "Seven centimetres is the maximum gap, with the middle of the headrest level with your eyes or the top of your ears. That is the setting that limits whiplash in a rear-end collision.",
        context:
          "The handbook notes that only about one driver in ten has the headrest set properly. A headrest sitting low behind the neck lets the head snap backwards, which is the injury it is supposed to prevent.",
        trap: "A headrest is not a head cushion. Set too low it does nothing, and thousands of Quebecers are hurt that way every year.",
        excerptKey: "headrest-7-cm",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_08",
        topic: "signs",
        question: "A white sign with a black arrow and a green circle around a symbol appears over your lane. What does the green circle mean?",
        choices: [
          "The manoeuvre is recommended but optional",
          "The lane is reserved for buses",
          "The manoeuvre shown is permitted, among others",
          "The manoeuvre shown is the only one allowed",
        ],
        correctIndex: 3,
        explanation:
          "In this family of signs a green circle is an obligation, not a permission. Only the movement drawn on the sign may be made from that lane.",
        context:
          "The matching red-circle signs say what you cannot do: no straight ahead, no left turn, no right turn, no U-turn. Green circles and red circles are a matched pair rather than opposites in strength.",
        trap: "Green normally reads as allowed, which is exactly the reading the handbook warns against here.",
        excerptKey: "green-circle-mandatory",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_09",
        topic: "impairment",
        question: "At what blood alcohol concentration can any driver in Quebec face a Criminal Code charge?",
        choices: [
          "0.02",
          "0.05",
          "0.08",
          "0.10",
        ],
        correctIndex: 2,
        explanation:
          "0.08, meaning 80 mg of alcohol per 100 ml of blood, is the Criminal Code threshold. Under the Highway Safety Code it also brings an immediate 90-day licence suspension.",
        context:
          "You can be arrested below 0.08 as well, if your ability to drive is impaired by alcohol, drugs or medication. Refusing a breath sample or a coordination test carries the stiffest penalties of all.",
        trap: "0.05 is not a criminal limit in Canada; it is the working limit for heavy-vehicle drivers and the level at which impairment is already measurable.",
        excerptKey: "criminal-bac-over-08",
        sourceLabel: HB_DRIVER,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_10",
        topic: "sharing",
        question: "Where must a cyclist normally ride on a Quebec roadway?",
        choices: [
          "As close as possible to the right edge, with the flow of traffic",
          "Facing oncoming traffic, like a pedestrian",
          "On the sidewalk wherever one exists",
          "In the centre of the lane, to be visible",
        ],
        correctIndex: 0,
        explanation:
          "Cyclists ride as close as they can to the right edge of the road, in the same direction as traffic, in single file when riding as a group.",
        context:
          "There are exceptions for a blocked way and for preparing a left turn. Using a bike path is not compulsory, and a cyclist may also ride on the shoulder in the direction of traffic.",
        trap: "Cyclists ride with traffic; pedestrians walk against it. Mixing the two up is a common exam slip and a real-world danger.",
        excerptKey: "cyclist-bikeway-optional",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_11",
        topic: "signals",
        question: "A green arrow is lit at an intersection. What does it authorise?",
        choices: [
          "Proceeding in any direction",
          "Proceeding only after stopping first",
          "Turning without yielding to pedestrians",
          "Proceeding in the direction it points, under the same right-of-way rules as a green light",
        ],
        correctIndex: 3,
        explanation:
          "The arrow lets you go the way it points, flashing or not, under the ordinary green-light right-of-way rules. Anyone already in the intersection still goes first.",
        context:
          "A red arrow bars the direction it points. A yellow arrow does what a yellow light does, but only for the movement shown.",
        trap: "A green arrow is not a licence to sweep through a crosswalk. Pedestrians already crossing keep their priority.",
        excerptKey: "green-arrow",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_12",
        topic: "rules",
        question: "You need to stop at a level crossing because the gate is down and the lights are flashing. How far back must you stop?",
        choices: [
          "At least 3 metres from the rail",
          "At least 5 metres from the rail",
          "At least 10 metres from the rail",
          "Anywhere behind the gate",
        ],
        correctIndex: 1,
        explanation:
          "Five metres from the railway is the minimum, whether it is flashing lights, a lowered gate or a railway employee that signals the train.",
        context:
          "You must also never enter a crossing unless there is room to clear it completely on the far side. Buses, minibuses and vehicles carrying hazardous material stop at every crossing regardless of signals.",
        trap: "Five metres is the same figure as the school bus rule, which makes it easy to remember and easy to swap for three.",
        excerptKey: "level-crossing-5-metres",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_13",
        topic: "parking",
        question: "How close to a fire hydrant may you stop your vehicle in Quebec?",
        choices: [
          "No closer than 8 metres",
          "There is no minimum if you stay with the car",
          "No closer than 3 metres",
          "No closer than 5 metres",
        ],
        correctIndex: 2,
        explanation:
          "Three metres from a fire hydrant. Five metres applies to an intersection, a crosswalk, a bicycle crossing, a level crossing and a police or fire station, and eight metres facing one across the street.",
        context:
          "These are stopping distances, not just parking distances, so waiting in the car with the engine running does not make it lawful. Necessity is the only general exception.",
        trap: "Three, five and eight are easy to shuffle. The hydrant is the small one.",
        excerptKey: "hsc-parking-distances",
        sourceLabel: "Highway Safety Code, section 386",
        sourceUrl: HSC,
        commonlyMissed: true,
      },
      {
        id: "qc_s2_14",
        topic: "signs",
        question: "What is a pentagon-shaped sign reserved for in Quebec?",
        choices: [
          "A hospital ahead",
          "A school zone",
          "A pedestrian crossing",
          "A tourist route",
        ],
        correctIndex: 1,
        explanation:
          "The five-sided sign marks a school zone. Between September and June the limit there is 50 km/h unless a lower one is posted, Monday to Friday from 7 a.m. to 5 p.m.",
        context:
          "School-zone signs use a fluorescent yellow-green background, and a tab may set a lower limit with its own hours, days and months. Speeding fines in a school zone are doubled during the school year.",
        trap: "The school-zone limit is not in force at all hours. Outside the posted times the ordinary limit for the street applies.",
        excerptKey: "school-zone-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_15",
        topic: "rightOfWay",
        question: "You are merging onto an autoroute from an acceleration lane. What is your duty?",
        choices: [
          "Cross straight to the left lane to keep the ramp clear",
          "Traffic on the autoroute must make room for you",
          "Merge while yielding to the traffic already on the autoroute",
          "Stop at the end of the ramp and wait for a gap",
        ],
        correctIndex: 2,
        explanation:
          "The merging driver yields. You match the speed of the traffic and fit in behind a vehicle rather than forcing your way alongside it.",
        context:
          "The handbook also asks the driver already on the autoroute to show courtesy and change lanes if that can be done safely. That is a request of them and a duty on you, not the other way round.",
        trap: "Stopping at the end of an acceleration lane is dangerous: you arrive at the traffic stream at zero speed with no room left.",
        excerptKey: "merge-courtesy",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_16",
        topic: "safety",
        question: "How far should the centre of the air bag cover be from the middle of your chest?",
        choices: [
          "At least 25 cm",
          "At least 50 cm",
          "As close as possible for the best protection",
          "At least 10 cm",
        ],
        correctIndex: 0,
        explanation:
          "At least 25 cm. An air bag inflates violently, and sitting closer than that turns a protective device into an injury.",
        context:
          "Infants go in a rear-facing seat secured in the back, and children of twelve and under belong in the back seat. The SAAQ can authorise deactivating an air bag where a driver or passenger would be at risk.",
        trap: "Pulling the seat forward for a better view of the road is the exact move this rule warns against.",
        excerptKey: "airbag-25-cm",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_17",
        topic: "rules",
        question: "On a two-way street with three lanes, what is the centre lane reserved for?",
        choices: [
          "Overtaking cyclists",
          "Passing in either direction",
          "Left turns from either direction",
          "Buses and taxis",
        ],
        correctIndex: 2,
        explanation:
          "The middle lane on a three-lane or five-lane two-way road is a two-way left-turn lane. You travel in the outer lanes and use the centre only to turn left.",
        context:
          "On the road it is marked by a solid yellow line beside a broken yellow line on each side, with yellow left-turn arrows painted in the lane so there is no doubt what it is for.",
        trap: "Driving along the centre lane to get ahead of traffic is a misuse of it, and the arrows on the pavement say so.",
        excerptKey: "centre-left-turn-lane",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_18",
        topic: "impairment",
        question: "Which of these can result in an impaired driving charge even though the car never moved?",
        choices: [
          "Sleeping in the back seat with the keys in your pocket",
          "Sitting in the driver's seat of a parked car while impaired",
          "Standing on the sidewalk beside your car",
          "Being a passenger in someone else's car",
        ],
        correctIndex: 1,
        explanation:
          "Care or control of a vehicle counts, not just driving it. Sitting in the driver's seat while impaired is one of the situations the SAAQ lists, even if the car is stopped or broken down.",
        context:
          "Being in the vehicle with the ability to start it, or being near it clearing snow or loading the trunk, can also qualify. The officer weighs whether driving was possible and whether it was intended.",
        trap: "Sleeping it off in the car feels responsible and can still be an offence. Somewhere that is not the vehicle is the safe answer.",
        excerptKey: "care-control-situations",
        sourceLabel: "SAAQ - Drinking and Driving: Impairment and Consequences",
        sourceUrl: ALCOHOL,
      },
      {
        id: "qc_s2_19",
        topic: "signs",
        question: "What does an elongated white diamond painted on the pavement indicate?",
        choices: [
          "A pedestrian crossing ahead",
          "A lane reserved for certain types of vehicle",
          "A no-passing zone",
          "A school crosswalk",
        ],
        correctIndex: 1,
        explanation:
          "The diamond marks a reserved lane. On signs the same diamond appears in the upper left corner, on a black or a red background.",
        context:
          "Double solid lines mark a lane reserved at all times; double broken lines mark one reserved only during certain hours. Diagonal broken white lines inside the lane let a driver alongside share it, provided they turn at the next intersection.",
        trap: "Sharing a reserved lane is allowed only where those diagonal markings appear, and only to make the next turn.",
        excerptKey: "reserved-lane-diamond",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_20",
        topic: "signals",
        question: "Cyclist signals in Quebec are made up of what?",
        choices: [
          "Three vertical lights shaped like bicycles, in red, yellow and green",
          "A single flashing amber bicycle symbol",
          "A white bicycle silhouette and an orange hand",
          "A green arrow with a bicycle pictogram",
        ],
        correctIndex: 0,
        explanation:
          "Cyclist lights are three vertical lamps in the shape of red, yellow and green bicycles, and the colours mean exactly what they mean on an ordinary traffic light.",
        context:
          "Pedestrian lights are different again: a white walking silhouette, an orange hand and, on countdown units, a timer. Quebec signals a lot of things separately, and the exam expects you to tell the families apart.",
        trap: "The white silhouette and the orange hand belong to pedestrians. Cyclists get their own colours.",
        excerptKey: "cyclist-lights",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_21",
        topic: "speed",
        question: "What is the maximum speed on a Quebec gravel highway when no sign says otherwise?",
        choices: [
          "50 km/h",
          "60 km/h",
          "70 km/h",
          "90 km/h",
        ],
        correctIndex: 2,
        explanation:
          "Seventy kilometres an hour on gravel, against ninety on a concrete or asphalt highway. The surface itself changes the legal maximum.",
        context:
          "The same 70 figure is the default on logging roads unless signs say otherwise. In both cases you are also expected to slow further for the state of the surface.",
        trap: "The limit does not stay at 90 when the pavement runs out. Gravel drops it by 20 km/h with no sign needed.",
        excerptKey: "hsc-other-speeds",
        sourceLabel: "Highway Safety Code, section 328",
        sourceUrl: HSC,
      },
      {
        id: "qc_s2_22",
        topic: "rules",
        question: "You are behind a city bus that has stopped on a street where the limit is 50 km/h. It signals to pull back out. What must you do?",
        choices: [
          "Stop five metres behind it as you would for a school bus",
          "Continue, since a stopped bus loses its place in traffic",
          "Yield and let the bus back into the lane",
          "Sound the horn and pass on the left",
        ],
        correctIndex: 2,
        explanation:
          "On a road with a limit below 70 km/h you yield to a bus signalling its way back into the lane it left. The bus driver has to check it is safe and signal first.",
        context:
          "This is not the school-bus rule. A school bus with red flashing lights or an extended stop arm requires a full stop at least five metres away, and that is a different and much heavier offence.",
        trap: "The duty applies below 70 km/h. On a faster road the bus yields to you instead.",
        excerptKey: "bus-reentering-lane",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_23",
        topic: "sharing",
        question: "You are following a truck and cannot see either of its side mirrors. What does that tell you?",
        choices: [
          "You are at the correct following distance",
          "The truck is about to turn",
          "The truck's mirrors are badly adjusted",
          "You are too close and the driver cannot see you",
        ],
        correctIndex: 3,
        explanation:
          "If the truck's mirrors are not visible to you, you are not visible to the truck driver. Dropping back until you can see them puts you back in view.",
        context:
          "A heavy vehicle has blind spots at the front, the rear and both sides. Sitting alongside one for a long time or cutting in front of one after passing puts you where the driver has no way of seeing you.",
        trap: "Truck mirrors look enormous, which encourages drivers to assume they are always seen. The test is whether you can see the mirror, not whether the mirror is big.",
        excerptKey: "truck-mirrors-too-close",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_24",
        topic: "parking",
        question: "You want to use a parking space reserved for people with a disability. What must be visible from outside the vehicle?",
        choices: [
          "The SAAQ parking permit, hung from the rearview mirror",
          "The vehicle registration certificate",
          "Nothing, if the permit holder is in the car",
          "A doctor's note on the dashboard",
        ],
        correctIndex: 0,
        explanation:
          "The permit issued by the SAAQ hangs from the rearview mirror and has to be visible from outside. The attestation certificate must be in your possession as well.",
        context:
          "The permit belongs to the person, not the car, and may not be lent to anyone. A peace officer can ask the driver or the passenger to produce the certificate on the spot.",
        trap: "Driving a permit holder somewhere does not let you use their permit for other trips. It travels with them.",
        excerptKey: "disabled-parking-permit",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_25",
        topic: "safety",
        question: "Before changing lanes, what does the SAAQ tell you to do beyond checking the mirrors?",
        choices: [
          "Turn your head quickly in the direction you are moving",
          "Flash the headlights of the car behind",
          "Accelerate so the gap opens up",
          "Sound the horn once",
        ],
        correctIndex: 0,
        explanation:
          "Mirrors do not cover the blind spot. A quick turn of the head in the direction you are going is what confirms the lane is actually free.",
        context:
          "Blind spots sit at the front, the rear, the sides and behind the windshield pillars. Before a turn, or before pulling away after a stop, leaning forward to look past the pillar catches the pedestrian or cyclist it was hiding.",
        trap: "Adjusting mirrors well shrinks blind spots but never removes them. The shoulder check is the part people skip and the part that matters.",
        excerptKey: "shoulder-check-lane-change",
        sourceLabel: "SAAQ - Blind Spots in a Car",
        sourceUrl: BLIND,
      },
      {
        id: "qc_s2_26",
        topic: "rightOfWay",
        question: "You are turning right at an intersection and a pedestrian is crossing the street you are turning into. What must you do?",
        choices: [
          "Complete the turn quickly, ahead of them",
          "Yield to the pedestrian",
          "Proceed if you can pass behind them",
          "Sound the horn to warn them",
        ],
        correctIndex: 1,
        explanation:
          "Before turning you yield to pedestrians and cyclists crossing the road you are about to enter. It applies to right turns and left turns alike.",
        context:
          "You also yield to vehicles on the intersecting road, to oncoming vehicles when turning left, and to anyone already in the intersection. The turn happens once all of that is clear, not before.",
        trap: "Passing behind a pedestrian still crossing the roadway is not yielding. Wait for the crossing to finish.",
        excerptKey: "right-turn-method",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_27",
        topic: "signals",
        question: "A yellow light comes on as you approach an intersection and you can stop safely. What must you do?",
        choices: [
          "Stop before the crosswalk or stop line",
          "Accelerate to clear the intersection",
          "Continue at the same speed",
          "Stop only if a vehicle is waiting to cross",
        ],
        correctIndex: 0,
        explanation:
          "A yellow light is an instruction to stop before the crosswalk or the stop line. The exception is narrow: you are already in the intersection, or so close that stopping is not safe.",
        context:
          "The purpose of the yellow phase is to clear the intersection before the conflicting green, so treating it as extra green time defeats it. Pedestrians follow the same lights where there are no pedestrian signals.",
        trap: "Speeding up on the amber is the collision that red-light cameras catch. The exception is about not being able to stop safely, not about not wanting to.",
        excerptKey: "yellow-light",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s2_28",
        topic: "impairment",
        question: "Which is true of cannabis and driving in Quebec?",
        choices: [
          "Its effects wear off within thirty minutes",
          "It affects driving less than alcohol because it is a soft drug",
          "It slows reflexes, harms coordination and lengthens reaction time",
          "It is only a problem if combined with alcohol",
        ],
        correctIndex: 2,
        explanation:
          "The SAAQ is blunt about this: cannabis reduces vigilance and concentration, slows reflexes, damages coordination, lengthens reaction time and impairs judgment.",
        context:
          "Federal law sets blood THC thresholds, and for most other controlled drugs any detectable trace is enough for a charge. Driving impaired by drugs brings the same immediate suspension and vehicle seizure as alcohol.",
        trap: "The soft-drug label is about legal classification, not about what it does to driving. THC acts directly on the brain.",
        excerptKey: "cannabis-effects",
        sourceLabel: "SAAQ - Drugs and Medication",
        sourceUrl: DRUGS,
      },
      {
        id: "qc_s2_29",
        topic: "emergencies",
        question: "A tow truck is stopped on the shoulder with its amber lights flashing. What does the Move-Over Law require?",
        choices: [
          "Slow down and leave as much space as you safely can",
          "Stop completely until it moves off",
          "Sound your horn as you pass",
          "Nothing, since it is on the shoulder and not in your lane",
        ],
        correctIndex: 0,
        explanation:
          "Slow down and put as much room as you safely can between you and the stopped vehicle, changing lanes where there is one to change into.",
        context:
          "The law covers emergency vehicles, tow trucks and surveillance vehicles with a yellow arrow signal, and it applies everywhere, on autoroutes, country roads and city streets alike.",
        trap: "The shoulder is exactly where the workers this law protects are standing. Being in a different lane is not the same as leaving room.",
        excerptKey: "moveover-in-brief",
        sourceLabel: "SAAQ - Move-Over Law",
        sourceUrl: MOVEOVER,
      },
      {
        id: "qc_s2_30",
        topic: "licensing",
        question: "How many demerit points revoke a Quebec learner's or probationary licence?",
        choices: [
          "4",
          "8",
          "12",
          "15",
        ],
        correctIndex: 0,
        explanation:
          "Four. New drivers sit in the four-point bracket, so a single serious offence, or two small ones, can end the licence.",
        context:
          "The brackets go 8 points under 23, 12 at 23 or 24, and 15 at 25 or older, all for full licence holders. People with no licence at all are also in the four-point bracket.",
        trap: "The eight-point figure belongs to young drivers who already hold a full licence. On a learner's or probationary licence the number is four.",
        excerptKey: "demerit-4-point-bracket",
        sourceLabel: "SAAQ - Demerit Points",
        sourceUrl: DEMERIT,
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the SAAQ knowledge test actually sits, including the situations it draws as pictures and asks you to find the offence in.",
    questions: [
      {
        id: "qc_s3_01",
        topic: "rules",
        question: "May you exceed the posted speed limit in order to complete a pass safely on an autoroute?",
        choices: [
          "Yes, if the vehicle being passed is travelling below the limit",
          "Yes, briefly, if it shortens the time spent alongside the other vehicle",
          "Yes, by up to 10 km/h",
          "No, the limit applies throughout the manoeuvre",
        ],
        correctIndex: 3,
        explanation:
          "The speed limit does not lift while you pass. If the pass cannot be completed within the limit, it is a pass you should not begin.",
        context:
          "Before passing you have to be sure it is allowed, that the left lane is free, that no one behind is already moving into it, and that the gap is long enough. Passing should be avoided altogether in fog or poor visibility.",
        trap: "The safety-of-the-manoeuvre argument sounds sensible and is not the law. Learners report this exact question turning up on the real test.",
        excerptKey: "pass-in-fog",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s3_02",
        topic: "signals",
        question: "In the illustration on the test, an ambulance is behind you but its emergency lights are not lit and its siren is silent. What must you do?",
        choices: [
          "Treat it as an ordinary vehicle",
          "Slow to half the speed limit",
          "Move into the left lane to let it through",
          "Pull over and stop as you would for any ambulance",
        ],
        correctIndex: 0,
        explanation:
          "The duty to yield attaches to an emergency vehicle whose flashing or rotating lights, or siren, are activated. With nothing on, it is a vehicle like any other.",
        context:
          "Emergency drivers are told to use the lights and siren only in the exercise of their duties and when the circumstances justify it. Those signals are what suspend the ordinary rules, not the paintwork.",
        trap: "This is a well-known trap on the illustrated questions: people see the ambulance and answer from the shape of the vehicle instead of looking at whether the lights are drawn as lit.",
        excerptKey: "emergency-vehicle-yield",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s3_03",
        topic: "rules",
        question: "Where in Quebec is turning right on a red light prohibited even with no sign saying so?",
        choices: [
          "On any street with a bus lane",
          "In every city centre",
          "On the island of Montreal",
          "In school zones",
        ],
        correctIndex: 2,
        explanation:
          "Right turns on red are permitted across Quebec except on the island of Montreal, and except where a sign forbids it.",
        context:
          "Signs at the bridges, tunnels, ferries and the airport mark the entry points to the island. Where the turn is allowed it is never compulsory, and honking at a driver who chooses not to make it is itself an offence.",
        trap: "The rule is the island of Montreal, not the city of Montreal and not every large city. Laval and Longueuil are not on the island.",
        excerptKey: "rtor-allowed-except-montreal",
        sourceLabel: "SAAQ - Turning Right at a Red Light",
        sourceUrl: RTOR,
        commonlyMissed: true,
      },
      {
        id: "qc_s3_04",
        topic: "speed",
        question: "In a 50 km/h zone, at what speed does an offence become excessive speeding?",
        choices: [
          "70 km/h",
          "80 km/h",
          "90 km/h",
          "100 km/h",
        ],
        correctIndex: 2,
        explanation:
          "Where the limit is 60 km/h or less, excessive speeding starts at 40 km/h over. In a 50 zone that is 90 km/h.",
        context:
          "The thresholds are 40 over in a zone of 60 or less, 50 over between 60 and 90, and 60 over at 100 or more. Excessive speeding means an immediate licence suspension, doubled demerit points, a doubled fine and a mark on the record for ten years.",
        trap: "The threshold is not a percentage and not a single number. It rises with the limit, which is why the low-speed zones catch people first.",
        excerptKey: "excessive-speeding-thresholds",
        sourceLabel: "SAAQ - Speed: What the Law Says",
        sourceUrl: SPEEDLAW,
        commonlyMissed: true,
      },
      {
        id: "qc_s3_05",
        topic: "sharing",
        question: "You are on a road with one lane in each direction and come up behind a group of cyclists. What may you do?",
        choices: [
          "Not pass, unless a peace officer authorises it",
          "Pass on the shoulder",
          "Pass them using the oncoming lane if it is clear",
          "Pass at 1.5 metres if the group is in single file",
        ],
        correctIndex: 0,
        explanation:
          "On a road with one lane each way you may not pass a group of cyclists at all, unless a peace officer allows it. If the group is coming toward you, slow down and keep a buffer lane.",
        context:
          "On a road with two or more lanes in each direction you may pass the group, after slowing and moving into another lane going your way, and only if that can be done safely.",
        trap: "The passing clearances of one metre and 1.5 metres apply to passing a single cyclist. A group on a two-lane road is a different rule entirely.",
        excerptKey: "cyclist-group-no-pass",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_06",
        topic: "signs",
        question: "What is a diamond-shaped sign with diagonal black and yellow bands at the roadside telling you?",
        choices: [
          "That the road is closed ahead",
          "Which side of an obstacle you must pass",
          "That a work zone begins",
          "That the shoulder is soft",
        ],
        correctIndex: 1,
        explanation:
          "It is a hazard marker, and the direction the bands slope always points to the side of the roadway you have to use to get past the obstacle.",
        context:
          "The obstacles are usually fixed: a boulder, a bridge railing, a narrowing. Some hazard markers allow either side; the pattern on the sign is what tells you which.",
        trap: "Reading the bands backwards steers you into the thing the sign is warning you about. The bands lean toward the safe side.",
        excerptKey: "hazard-marker",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_07",
        topic: "safety",
        question: "On a dry autoroute in normal conditions, what following interval does Driving a Passenger Vehicle recommend?",
        choices: [
          "Three or more seconds",
          "Six or more seconds",
          "One car length for every 10 km/h",
          "Two or more seconds",
        ],
        correctIndex: 1,
        explanation:
          "The SAAQ's driving guide sets six or more seconds on the highway, against four or more in the city. Both are longer than the two-second rule people quote.",
        context:
          "On an icy or snowy road the same guide asks for eight to ten seconds, because the braking distance grows so much. Poor visibility, a damaged surface and worn tires all mean adding more.",
        trap: "The two-second rule is mentioned in the Driver's Handbook and is not the figure the driving guide teaches. Quebec's numbers are larger, and the exam is written from the guide.",
        excerptKey: "highway-six-seconds",
        sourceLabel: "Driving a Passenger Vehicle - Chapter 4: Sharing the Road",
        sourceUrl: DPV,
      },
      {
        id: "qc_s3_08",
        topic: "rightOfWay",
        question: "You face a stop sign; the cross street has no sign. When may you proceed?",
        choices: [
          "As soon as the nearest vehicle has slowed",
          "As soon as you have stopped",
          "After yielding to any vehicle on the other road already in the intersection or close enough that entering would be dangerous",
          "After counting three seconds at the line",
        ],
        correctIndex: 2,
        explanation:
          "The stop is only the first half. After it you yield to traffic on the through road that is in the intersection or near enough that pulling out would create a hazard.",
        context:
          "You also yield to pedestrians and cyclists crossing or travelling alongside the road you are about to cross or enter. A flashing red light imposes exactly the same duty.",
        trap: "Stopping does not buy priority. Test items on this rule are written so that the stop has clearly been made and the question is what happens next.",
        excerptKey: "stop-sign-yield",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_09",
        topic: "rules",
        question: "A snowstorm has left your car covered. What does Quebec law require before you drive?",
        choices: [
          "Clear the windshield only",
          "Clear the windshield and the front side windows",
          "Clear the windows and windshield, and remove snow and ice that could detach",
          "Nothing, provided you drive slowly",
        ],
        correctIndex: 2,
        explanation:
          "Two separate duties: the windshield and windows must be clear of anything that reduces the driver's view, and the vehicle must not be carrying snow or ice that could fly off and endanger others.",
        context:
          "An officer can fine the driver $100 to $200 for the obscured glass and require it to be cleared on the spot. The flying-snow offence carries $60 to $100.",
        trap: "A porthole scraped in the windscreen is the classic version of this offence, and the roof is the part people forget entirely.",
        excerptKey: "mobile-igloo",
        sourceLabel: "SAAQ - Winter Driving",
        sourceUrl: WINTER,
      },
      {
        id: "qc_s3_10",
        topic: "signals",
        question: "What does a flashing yellow light at an intersection require?",
        choices: [
          "Nothing; it is a courtesy signal",
          "Stopping only if pedestrians are present",
          "A full stop before proceeding",
          "Slowing down and yielding to road users already in the intersection",
        ],
        correctIndex: 3,
        explanation:
          "Slow down, then go once you have yielded to anyone already in the intersection. No stop is required unless the situation calls for one.",
        context:
          "Flashing yellow lights are also fitted above regulatory and warning signs to draw the eye to a danger or an obligation, such as a school-zone limit that is in force or fog on the road ahead.",
        trap: "Treating a flashing yellow as a stop is safe but wrong on the test; treating it as nothing at all is wrong and dangerous.",
        excerptKey: "flashing-yellow",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_11",
        topic: "impairment",
        question: "After how many hours awake are your abilities comparable to a blood alcohol concentration of 0.05?",
        choices: [
          "10 to 12 hours",
          "13 to 15 hours",
          "17 to 19 hours",
          "24 hours",
        ],
        correctIndex: 2,
        explanation:
          "Between seventeen and nineteen hours awake, physical and mental capacity matches roughly 0.05. At twenty-four hours it matches about 0.10.",
        context:
          "Fatigue was a factor in about a quarter of Quebec's fatal collisions from 2020 to 2024. It is grouped with alcohol, speed and distraction as one of the leading causes.",
        trap: "0.10 belongs to the twenty-four-hour figure. Swapping the two understates how early a long day starts to bite.",
        excerptKey: "wakefulness-17-19",
        sourceLabel: "SAAQ - Driver Fatigue",
        sourceUrl: FATIGUE,
      },
      {
        id: "qc_s3_12",
        topic: "parking",
        question: "You must stop on the roadway at night out of necessity. What does the Highway Safety Code require?",
        choices: [
          "Headlights on high beam",
          "A warning triangle placed 30 metres behind",
          "Nothing, if you stay inside the vehicle",
          "Parking lights and taillights on, or flares visible from at least 150 metres",
        ],
        correctIndex: 3,
        explanation:
          "Leave the parking lights and taillights on, or the hazard lights, or mark the car with lamps, reflectors or flares visible from at least 150 metres.",
        context:
          "The 150-metre figure recurs in Quebec: it is also the distance at which you must switch from high beams to low, and the range a high beam actually lights.",
        trap: "Sitting in an unlit car on the roadway at night is the situation this rule exists to prevent, not an alternative to it.",
        excerptKey: "hsc-stopped-at-night",
        sourceLabel: "Highway Safety Code, section 385",
        sourceUrl: HSC,
      },
      {
        id: "qc_s3_13",
        topic: "signs",
        question: "What is the difference between a roadway narrows sign and a lane ending sign?",
        choices: [
          "There is none; they are alternatives",
          "Roadway narrows requires a lane change; lane ending only asks for alertness",
          "Lane ending requires a lane change; roadway narrows only asks for alertness",
          "Both require you to stop and yield",
        ],
        correctIndex: 2,
        explanation:
          "A lane ending sign means your lane runs out and you have to move over, yielding to the traffic in the lane that continues. Roadway narrows means the road gets tighter without losing a lane, so no manoeuvre is required.",
        context:
          "The handbook explicitly warns against confusing the two, and pavement markings often accompany the lane-ending sign. A tab may say how far ahead the lane ends.",
        trap: "They look similar at a glance and mean opposite things about whether you have to do anything.",
        excerptKey: "lane-ending-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_14",
        topic: "rules",
        question: "When must you switch from high beams to low beams at night?",
        choices: [
          "Within 150 metres of an oncoming vehicle or of one you are following",
          "Only when an oncoming driver flashes at you",
          "Within 300 metres of any vehicle",
          "Within 60 metres of another vehicle",
        ],
        correctIndex: 0,
        explanation:
          "At least 150 metres from a vehicle coming toward you, and at least 150 metres from one you are following. You also drop to low beams where the road is lit well enough.",
        context:
          "A low beam lights 45 to 75 metres of road; a high beam reaches up to about 150. That is why you have to be able to stop within the distance your headlights actually show you.",
        trap: "The rule covers the car in front as much as the car coming toward you. Blinding someone through their mirrors is the same offence, and it costs $60 to $100.",
        excerptKey: "low-beams-150",
        sourceLabel: "SAAQ - Driving at Night",
        sourceUrl: NIGHT,
      },
      {
        id: "qc_s3_15",
        topic: "safety",
        question: "Your car begins to hydroplane in heavy rain. What has happened?",
        choices: [
          "The brakes have overheated",
          "The tires have momentarily lost contact with the road surface",
          "The steering has locked",
          "The engine has stalled",
        ],
        correctIndex: 1,
        explanation:
          "Hydroplaning is a form of skid: a sheet of water lifts the tires so that they briefly stop gripping the road at all.",
        context:
          "Wide, worn or under-inflated tires make it more likely, and so does speed. The driving guide's answer to poor weather is to slow below the posted limit, lengthen the following distance and avoid sudden changes of direction or speed.",
        trap: "Braking hard in the middle of it makes matters worse. The tires cannot slow a car they are not touching the road through.",
        excerptKey: "hydroplaning",
        sourceLabel: "Driving a Passenger Vehicle - Chapter 5: Driving Strategies",
        sourceUrl: DPV,
      },
      {
        id: "qc_s3_16",
        topic: "rightOfWay",
        question: "A pedestrian steps into a crosswalk against a steady orange hand. What is your position as a driver?",
        choices: [
          "You may proceed once you have sounded the horn",
          "You must report them to the police",
          "You may proceed, since they crossed unlawfully",
          "You must still avoid them and let them finish crossing",
        ],
        correctIndex: 3,
        explanation:
          "A pedestrian breaking their own rule does not lose the protection of yours. You still have to yield and let them get across.",
        context:
          "The Highway Safety Code fines pedestrians $15 to $30 for disobeying signals, which is the mechanism for dealing with it. Nothing in the Code transfers that offence into a permission for the driver.",
        trap: "The idea that a jaywalking pedestrian forfeits the right of way is common and wrong, and it is the reasoning behind a lot of collisions with children and older people.",
        excerptKey: "ped-fine",
        sourceLabel: "SAAQ - Pedestrians: What the Law Says",
        sourceUrl: PED,
      },
      {
        id: "qc_s3_17",
        topic: "signals",
        question: "What does a white bar slanted to the left on a bus priority signal authorise?",
        choices: [
          "No priority movement at all",
          "All movements",
          "The left turn only",
          "Straight ahead only",
        ],
        correctIndex: 2,
        explanation:
          "The slant of the bar is the direction. Left-slanted means the left turn only, right-slanted the right turn only, vertical means straight ahead only and horizontal means no priority movement is permitted.",
        context:
          "Bus priority signals are added to ordinary traffic lights so buses can rejoin traffic more easily. A white triangle gives bus drivers a clearance interval, working like the yellow phase does for everyone else.",
        trap: "The word BUS displayed in the signal is the one that permits everything. A bar always restricts.",
        excerptKey: "bus-priority-lights",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_18",
        topic: "rules",
        question: "You are approaching a work zone and the sign says one lane is closed ahead. When should you move over?",
        choices: [
          "After the cones begin",
          "At the last moment, to keep both lanes flowing",
          "As soon as you see the sign",
          "Only when a worker signals you across",
        ],
        correctIndex: 2,
        explanation:
          "Move into the lane that stays open as soon as you see the sign. Leaving it late means arriving at a bottleneck with nowhere to go.",
        context:
          "Work zones also ask for a lower speed, a bigger gap to the car in front, frequent mirror checks and obedience to the flagperson. Ignoring a flagperson's orders costs $300 to $600 and four demerit points.",
        trap: "The zip-merge argument does not appear in Quebec's guidance. The handbook says explicitly not to wait until the last minute.",
        excerptKey: "worksite-merge-early",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_19",
        topic: "sharing",
        question: "Why does the SAAQ warn against passing a heavy vehicle on the right at an intersection?",
        choices: [
          "The truck may swing left first to make room for a right turn",
          "Right-hand passing is never allowed anywhere",
          "The truck's brakes work only on the left side",
          "The pavement is weaker on the right",
        ],
        correctIndex: 0,
        explanation:
          "A long vehicle often needs to swing wide to the left before turning right. Sliding up its right side puts you in the space it is about to occupy, and in a blind spot.",
        context:
          "Passing on the right is in any case restricted: it is allowed only when the vehicle ahead is turning left or heading for an exit ramp, or is working in the left lane.",
        trap: "The truck's left turn signal is not always the giveaway. The wide swing comes first and the right signal comes on with it.",
        excerptKey: "never-pass-truck-right",
        sourceLabel: "SAAQ - Blind Spots in a Car",
        sourceUrl: BLIND,
      },
      {
        id: "qc_s3_20",
        topic: "speed",
        question: "You are caught at 90 km/h in a road work zone posted at 70. What happens to the fine?",
        choices: [
          "It is the standard amount",
          "It is doubled",
          "It is tripled",
          "It is halved because 20 over is a minor offence",
        ],
        correctIndex: 1,
        explanation:
          "Speeding fines are doubled in a road work zone, and in a school zone during the school year. The SAAQ's own worked example is 90 in a 70 zone at $140, which is $70 doubled.",
        context:
          "The demerit points follow the ordinary table, so the doubling applies to the money. In an excessive speeding case the points double as well and the fine doubles or triples with repeat convictions.",
        trap: "The doubling is not limited to zones where workers are actually visible. The signs and signals define the zone.",
        excerptKey: "workzone-doubled-example",
        sourceLabel: "SAAQ - Road Work Zones",
        sourceUrl: WORK,
      },
      {
        id: "qc_s3_21",
        topic: "signs",
        question: "What does a sign showing a percentage on a downhill grade tell you?",
        choices: [
          "The recommended speed for the slope",
          "The steepness of the slope, where it is at least 6%",
          "The distance to the bottom of the hill",
          "The weight limit for the bridge below",
        ],
        correctIndex: 1,
        explanation:
          "It gives the grade of the slope as a percentage, used where the slope reaches at least 6%, which is a drop of six metres over a hundred. A higher number means a steeper hill.",
        context:
          "These signs matter most to heavy vehicles, which need the warning to control their descent, but they also flag a slope that will be treacherous in a curve or on a slippery surface.",
        trap: "The percentage is not a speed. The recommended speed, when there is one, appears on a separate yellow tab.",
        excerptKey: "steep-grade-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_22",
        topic: "safety",
        question: "What is a driver with anti-lock brakes supposed to do in an emergency stop?",
        choices: [
          "Pump the pedal rapidly",
          "Press the pedal to the floor and hold it firmly",
          "Apply light pressure and steer around the hazard",
          "Use the parking brake instead",
        ],
        correctIndex: 1,
        explanation:
          "With ABS you push the pedal all the way down and keep it there. The noise and vibration you feel are the system doing its work, not a fault.",
        context:
          "Pumping is the technique for a car without ABS, where the aim is to lock and unlock the wheels yourself. Repeatedly lifting off with ABS lengthens the stopping distance instead.",
        trap: "The vibration through the pedal makes drivers ease off at the worst moment. Firm and constant is the instruction.",
        excerptKey: "abs-emergency-braking",
        sourceLabel: "Driving a Passenger Vehicle - Chapter 5: Driving Strategies",
        sourceUrl: DPV,
      },
      {
        id: "qc_s3_23",
        topic: "impairment",
        question: "Which statement about over-the-counter medication and driving is correct?",
        choices: [
          "Medication is only a problem when mixed with alcohol",
          "Only prescription drugs can impair driving",
          "Almost any medication can produce side effects that affect driving",
          "Antihistamines are safe because they are sold without a prescription",
        ],
        correctIndex: 2,
        explanation:
          "Almost all types of medication can produce side effects that affect driving, and the ones that cause drowsiness are the most dangerous of all.",
        context:
          "Tranquillisers, antidepressants, sleeping pills, antihistamines, decongestants, muscle relaxants and opioid painkillers are all named. The advice is to read the contraindications and ask a pharmacist.",
        trap: "Over the counter does not mean without effect. An allergy tablet before a drive is a real risk, not a technicality.",
        excerptKey: "medication-side-effects",
        sourceLabel: "SAAQ - Drugs and Medication",
        sourceUrl: DRUGS,
      },
      {
        id: "qc_s3_24",
        topic: "rules",
        question: "On a shared street in Quebec, what is the speed limit and who has priority?",
        choices: [
          "20 km/h, and cyclists have the right of way",
          "50 km/h, with pedestrians confined to the sidewalk",
          "30 km/h, and vehicles have priority",
          "20 km/h, and pedestrians have the right of way",
        ],
        correctIndex: 3,
        explanation:
          "A shared street runs at 20 km/h and pedestrians have the right of way there. They may walk in any direction and cross wherever they like.",
        context:
          "A bicycle boulevard is the other member of the family: 30 km/h, cyclists have the right of way and may use the full width of the lane, and signs mark where it starts and ends.",
        trap: "Twenty and thirty go with different street types. Shared street is the slower one, and it is pedestrians rather than cyclists who hold priority there.",
        excerptKey: "shared-street",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_25",
        topic: "signals",
        question: "A truck ahead of you carries an illuminated arrow pointing left. What must you do?",
        choices: [
          "Take the lane the arrow points to, because one lane is obstructed",
          "Follow the truck, since it is showing you its route",
          "Stop and wait for the truck to move off",
          "Pass on the side the arrow points away from",
        ],
        correctIndex: 0,
        explanation:
          "An arrow on a vehicle or trailer means a lane is blocked, and it points at the lane that is still open. You move into the lane it indicates.",
        context:
          "A double arrow means traffic can pass on either side of the obstruction. Where the work is on a road with one lane each way, or on the shoulder, only the centre bar of the signal arrow is lit.",
        trap: "The arrow is not showing you where the truck is going. It is showing you where you must go.",
        excerptKey: "signal-arrow-vehicle",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_26",
        topic: "rightOfWay",
        question: "Traffic is stopped ahead and the intersection you are in is about to block. What must you do?",
        choices: [
          "Enter the intersection anyway to hold your place",
          "Stay back and keep the intersection clear",
          "Enter and reverse out if the traffic does not move",
          "Sound your horn and proceed",
        ],
        correctIndex: 1,
        explanation:
          "Stopping in an intersection, blocking a lane or changing lanes inside one are all prohibited. If there is no room on the far side, you wait before you enter.",
        context:
          "The same logic governs level crossings, where you must not enter unless there is enough clear space beyond to get right across. Both rules are about not committing yourself to a space you cannot leave.",
        trap: "Holding your place in a queue by blocking the cross traffic is a defensible-feeling habit and an offence.",
        excerptKey: "no-stopping-in-intersection",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_27",
        topic: "safety",
        question: "What did the SAAQ measure about the weight of loose objects in a 50 km/h collision?",
        choices: [
          "It doubles",
          "It is multiplied by 20",
          "It is multiplied by 100",
          "It is unchanged",
        ],
        correctIndex: 1,
        explanation:
          "In a collision or a sudden stop at 50 km/h, the effective weight of a loose object is multiplied by twenty, which is what turns it into a projectile.",
        context:
          "The advice is to stow things in the trunk or in a closed compartment. The same page also asks parents to sort out whatever the children need before setting off, so it does not become a distraction.",
        trap: "Fifty kilometres an hour sounds slow, which is exactly why people leave heavy objects loose on the parcel shelf.",
        excerptKey: "objects-projectiles",
        sourceLabel: "SAAQ - Child safety in cars",
        sourceUrl: CHILD,
      },
      {
        id: "qc_s3_28",
        topic: "signs",
        question: "You see a diamond-shaped sign warning of a level crossing. How close might the crossing be to an intersection?",
        choices: [
          "Always more than 200 metres",
          "Exactly 100 metres in all cases",
          "The sign gives no information about distance",
          "Less than 50 metres in an urban area, less than 125 metres in a rural one",
        ],
        correctIndex: 3,
        explanation:
          "The advance level crossing sign is used where the crossing sits within 50 metres of an intersection in an urban area, or within 125 metres in a rural one.",
        context:
          "The point of the warning is that a queue at the intersection can leave a vehicle standing on the tracks. Never enter a crossing without room to clear it completely.",
        trap: "The numbers look like trivia and are the whole reason for the sign: they mark the crossings where an intersection can trap you on the rails.",
        excerptKey: "advance-level-crossing-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_29",
        topic: "rules",
        question: "You are in the far right slow lane on a hill and a solid line is painted beside you. May you move back into the main lane?",
        choices: [
          "Yes, if you have reached the top of the hill",
          "No, not while the solid line is there",
          "Yes, provided you accelerate to the speed limit first",
          "Yes, after signalling",
        ],
        correctIndex: 1,
        explanation:
          "Where a solid line is painted, a vehicle in the slow lane may not re-enter the main lane. You stay in the slow lane until the line breaks.",
        context:
          "Slow lanes are built in hilly areas to keep traffic moving, and any slow vehicle may use them, not just trucks. Where the lane is long, a broken line may be provided so that downhill traffic can pass.",
        trap: "A signal does not make a solid line crossable. Signalling shows intention; the line decides permission.",
        excerptKey: "slow-lane-solid-line",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_30",
        topic: "parking",
        question: "Where may you never stop or park, whatever the signs say?",
        choices: [
          "Inside a traffic circle",
          "Within 20 metres of a school",
          "On any street after 6 p.m.",
          "On a street with a bus route",
        ],
        correctIndex: 0,
        explanation:
          "A traffic circle is on the prohibited list outright, along with sidewalks, medians, intersections, crosswalks, bicycle crossings, level crossings, bridges, overpasses, tunnels and elevated lanes.",
        context:
          "Autoroutes and their ramps are barred too, as is the travelled part of any road where the limit is 70 km/h or more. Stopping to pick up or set down a person with a disability is the narrow exception, where it can be done safely.",
        trap: "Necessity excuses a lot in the Code, but the traffic circle is one of the places where the prohibition is flat.",
        excerptKey: "parking-blocking",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_31",
        topic: "licensing",
        question: "How long does a demerit point stay on your Quebec driving record for penalty purposes?",
        choices: [
          "1 year",
          "2 years",
          "3 years",
          "5 years",
        ],
        correctIndex: 1,
        explanation:
          "Two years from the date of conviction, and paying the fine counts as the conviction. That is the window in which points add up against your bracket.",
        context:
          "An excessive speeding offence is different: that one sits on the record for ten years, and repeat offences inside that window multiply the fine.",
        trap: "Points are not wiped by renewing a licence, by getting a first licence, or by obtaining a new one after a revocation.",
        excerptKey: "demerit-two-years-web",
        sourceLabel: "SAAQ - Demerit Points",
        sourceUrl: DEMERIT,
      },
      {
        id: "qc_s3_32",
        topic: "sharing",
        question: "What must a driver leaving a parking space at the kerb watch for before opening the door?",
        choices: [
          "Only vehicles indicating a turn",
          "Only pedestrians on the sidewalk",
          "Nothing, the door is outside the traffic lane",
          "Cyclists and other road users in the blind spot behind",
        ],
        correctIndex: 3,
        explanation:
          "Opening the door is one of the moments the SAAQ names for a blind-spot check, because a cyclist coming up the right-hand side is exactly what the mirror misses.",
        context:
          "The same list covers changing lanes, merging, turning at an intersection, reversing and leaving a parking space. Choosing a space you can back into gives you a clear view when you leave.",
        trap: "Glancing in the mirror is not enough for a door. A cyclist can be in the gap the mirror does not cover for the whole approach.",
        excerptKey: "blind-spot-def",
        sourceLabel: "SAAQ - Blind Spots in a Car",
        sourceUrl: BLIND,
      },
      {
        id: "qc_s3_33",
        topic: "speed",
        question: "How is the fine for ordinary speeding in Quebec worked out?",
        choices: [
          "A flat rate by zone",
          "$15 plus an amount for each additional 5 km/h over the limit",
          "A percentage of the vehicle's value",
          "A fixed $100 for every offence",
        ],
        correctIndex: 1,
        explanation:
          "It starts at $15 and adds a step for every extra 5 km/h, and the step itself grows with how far over you were: $10, then $15, then $20, then $25, then $30.",
        context:
          "The handbook's worked example is 75 km/h in a 50 zone, which is 25 over: $15 plus five steps of $15, so $90. Demerit points come from a separate table.",
        trap: "The fine does not rise smoothly. The per-5-km/h step jumps as you cross each band, so being ten over twice is far cheaper than being twenty over once.",
        excerptKey: "fine-speeding-example",
        sourceLabel: HB_OFF,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_34",
        topic: "emergencies",
        question: "Who compensates a Quebec resident for bodily injury after a road collision?",
        choices: [
          "Nobody, unless the driver was insured",
          "The at-fault driver's private insurer",
          "The SAAQ, regardless of who was at fault",
          "The court, after a civil action",
        ],
        correctIndex: 2,
        explanation:
          "The public plan compensates Quebecers for bodily injury without deciding who was responsible, which is why civil actions for those injuries were abolished.",
        context:
          "Property damage is separate: every vehicle owner must hold third-party liability cover for that. People can still be prosecuted for dangerous driving under the Criminal Code or the Highway Safety Code.",
        trap: "No-fault applies to injuries, not to the dented car. The private policy is what deals with the metal.",
        excerptKey: "public-insurance-plan",
        sourceLabel: HB_ACCID,
        sourceUrl: HB,
      },
      {
        id: "qc_s3_35",
        topic: "safety",
        question: "Why does the SAAQ warn you to look beyond the range of your headlights at night?",
        choices: [
          "Because high beams distort colours",
          "Because headlights point slightly downward",
          "Because the eye adapts to darkness in about three seconds",
          "Because reflective objects appear at their real distance while unlit ones do not",
        ],
        correctIndex: 3,
        explanation:
          "Road signs are built to bounce your headlights back, so they show up early. Anything that does not reflect stays invisible until it is close, which makes the reflective objects a misleading guide to how far you can really see.",
        context:
          "The practical answer is to slow down enough to stop inside the distance the headlights genuinely light, and to leave a bigger gap because distances are harder to judge in the dark.",
        trap: "Seeing a sign far ahead feels like proof of good visibility. It is proof only that the sign was designed to be seen.",
        excerptKey: "reflective-signs-at-night",
        sourceLabel: HB_DRIVER,
        sourceUrl: HB,
      },
    ],
  },
];
