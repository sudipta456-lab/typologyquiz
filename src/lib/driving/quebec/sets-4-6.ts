import type { DrivingTestSet } from "../types";

// Sets 4-6 of the Quebec bank. Set 5 is built from what Quebec learners say on
// r/montreal, r/Quebec and r/quebeccity that they actually got wrong, checked
// back against the SAAQ's own material before any of it became a question.
// The threads are listed in docs/driving/research/quebec.md.

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
const EMERG = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/flashing-rotating-lights";

const HB_SIGNS = "Driver's Handbook - Chapter 3: Road Signs and Traffic Signals";
const HB_RULES = "Driver's Handbook - Chapter 4: Traffic Rules";
const HB_DRIVER = "Driver's Handbook - Chapter 1: The Driver";
const HB_ACCID = "Driver's Handbook - Chapter 5: Accidents";
const HB_OFF = "Driver's Handbook - Chapter 6: Offences and Consequences";

export const quebecSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions ranging over the whole of the SAAQ's material, from the sign catalogue to the licensing rules people meet only once.",
    questions: [
      {
        id: "qc_s4_01",
        topic: "signs",
        question: "A tab under a controlled parking sign shows a tow truck. What does it mean?",
        choices: [
          "A garage is nearby",
          "Towing a trailer is prohibited",
          "Tow trucks may park here",
          "Vehicles in violation may be towed",
        ],
        correctIndex: 3,
        explanation:
          "The tow-truck tab warns that a vehicle parked in breach of the sign above it can be removed, not that tow trucks have any privilege there.",
        context:
          "Controlled parking signs use arrows and symbols to mark out the zone, the hours, the days and the categories of vehicle they apply to. A separate winter sign is used in some municipalities.",
        trap: "Pictograms of vehicles usually mean the vehicle is affected. On this tab the vehicle is the consequence.",
        excerptKey: "tow-away-tab",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_02",
        topic: "rules",
        question: "How many earphones may a driver wear in Quebec?",
        choices: [
          "Two, if the volume is low",
          "Two, if they are bone-conduction",
          "None",
          "One",
        ],
        correctIndex: 3,
        explanation:
          "One is the limit. The rule leaves one ear free for the sounds of the road, including a siren behind you.",
        context:
          "A display screen is allowed only where it shows information useful for driving, is built in or properly mounted, does not block your view or interfere with the controls, and can be operated easily.",
        trap: "The answer is not zero. Quebec permits one earphone, which surprises people who assume a blanket ban.",
        excerptKey: "one-earphone",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_03",
        topic: "licensing",
        question: "You move house. How long do you have to tell the SAAQ your new address?",
        choices: [
          "7 days",
          "14 days",
          "30 days",
          "90 days",
        ],
        correctIndex: 2,
        explanation:
          "Thirty days. The address on your licence has to be your principal residence, and failing to update it is an offence under the Code.",
        context:
          "The same thirty-day window covers a change in your state of health, and the loss or destruction of a disabled parking permit. Keep the confirmation the SAAQ sends with your licence.",
        trap: "The licence looks valid with the old address on it, which is why people let it slide until a renewal notice goes missing.",
        excerptKey: "address-30-days",
        sourceLabel: HB_DRIVER,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_04",
        topic: "signals",
        question: "Regulated parking lights are orange lamps beside a parking sign. When does the sign apply?",
        choices: [
          "Only in winter",
          "Only between 7 a.m. and 5 p.m.",
          "At all times",
          "Only when the lights are on",
        ],
        correctIndex: 3,
        explanation:
          "The regulation on the sign is in force only while the orange lights are lit. They are switched on to clear the street for maintenance.",
        context:
          "That is a different device from the winter parking sign, which some municipalities use to ban parking for a whole season, and from the temporary orange signs put out around a work site.",
        trap: "Assuming the sign always applies loses you a legal parking space; assuming it never does gets the car towed on snow-clearing night.",
        excerptKey: "regulated-parking-lights",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_05",
        topic: "safety",
        question: "What does the SAAQ say about hands-free phone use while driving?",
        choices: [
          "It is permitted only for calls under two minutes",
          "It is recommended as the safe alternative",
          "It is permitted but merely tolerated, and not recommended",
          "It is prohibited outright",
        ],
        correctIndex: 2,
        explanation:
          "Hands-free is legal but the SAAQ will not endorse it. Its own wording is that these devices are merely tolerated, because the conversation itself is the distraction.",
        context:
          "If you do use one, the phone should be solidly mounted somewhere that does not interfere with the controls or with an air bag, and where it will not become a projectile in a collision.",
        trap: "Legal and safe are not the same claim, and the exam questions on distraction are written from the safety side.",
        excerptKey: "handsfree-tolerated",
        sourceLabel: "SAAQ - Portable electronic devices",
        sourceUrl: PHONE,
      },
      {
        id: "qc_s4_06",
        topic: "rightOfWay",
        question: "You are at an intersection with a green light but the traffic ahead has not cleared. Someone is already crossing in front of you. What is your duty?",
        choices: [
          "Reverse to clear the crosswalk",
          "Proceed, since your light is green",
          "Yield to anyone already in the intersection",
          "Sound the horn and edge forward",
        ],
        correctIndex: 2,
        explanation:
          "A green light, a flashing green, a green arrow, a flashing red and a flashing yellow all carry the same duty: yield to anyone already in the intersection before you enter it.",
        context:
          "Pedestrians facing a green traffic light may cross where there are no pedestrian signals, and once they have started they keep the right of way until they are across.",
        trap: "Green means you may go if the way is clear. It never means the way is clear.",
        excerptKey: "green-light",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_07",
        topic: "speed",
        question: "What is the minimum speed on a Quebec autoroute?",
        choices: [
          "40 km/h",
          "60 km/h",
          "80 km/h",
          "There is none",
        ],
        correctIndex: 1,
        explanation:
          "Sixty kilometres an hour, set by the same section that caps the autoroute at 100. Variable message signs can change both ends of that range.",
        context:
          "Separately, it is an offence anywhere to drive so slowly that you hinder the flow of traffic. A vehicle that must travel below 40 km/h has to display the orange slow-moving vehicle triangle.",
        trap: "Most drivers know the maximum and not the minimum, and the minimum is the half the SAAQ likes to ask about.",
        excerptKey: "hsc-autoroute-speed",
        sourceLabel: "Highway Safety Code, section 328",
        sourceUrl: HSC,
        commonlyMissed: true,
      },
      {
        id: "qc_s4_08",
        topic: "signs",
        question: "A yellow tab under a curve sign shows a speed. Is that speed enforceable?",
        choices: [
          "No, it is a recommended speed",
          "Yes, but only in wet weather",
          "Only for heavy vehicles",
          "Yes, exactly like a white speed limit sign",
        ],
        correctIndex: 0,
        explanation:
          "Yellow tabs give a recommended speed for getting round the hazard. The enforceable limits are the white signs and, in a work zone, the orange ones.",
        context:
          "On highway exits the recommended figure is set to leave a margin for emergency braking on a curve with wet pavement. Ignoring it can still land you an unsafe-speed offence if it goes wrong.",
        trap: "Recommended is not the same as optional. It is the speed at which the curve was designed to be survivable.",
        excerptKey: "recommended-speed-tab",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_09",
        topic: "impairment",
        question: "Which fact about driver fatigue in Quebec is correct?",
        choices: [
          "It mostly affects drivers over 65",
          "It only matters on trips longer than four hours",
          "It accounts for roughly one fatal collision in twenty",
          "It was a factor in about a quarter of fatal collisions between 2020 and 2024",
        ],
        correctIndex: 3,
        explanation:
          "About 24% of fatal collisions and 25% of injury collisions in that period involved fatigue. On average it kills 92 people a year in Quebec.",
        context:
          "The drivers most at risk are heavy vehicle drivers, drivers under 30 and over 55, shift workers, people with irregular hours and anyone with an untreated sleep disorder.",
        trap: "Under-30 drivers are on the high-risk list, which cuts against the assumption that fatigue is an older driver's problem.",
        excerptKey: "fatigue-deaths",
        sourceLabel: "SAAQ - Driver Fatigue",
        sourceUrl: FATIGUE,
      },
      {
        id: "qc_s4_10",
        topic: "rules",
        question: "May a passenger drink alcohol in a car parked in a public place?",
        choices: [
          "Yes, if the car is legally parked",
          "Yes, as long as the engine is off",
          "Yes, if the driver is not drinking",
          "No, it is prohibited for every occupant",
        ],
        correctIndex: 3,
        explanation:
          "No occupant may consume alcohol or drugs in a moving vehicle, and the prohibition also covers a vehicle parked in a public place.",
        context:
          "Demerit points can be entered against a passenger's record for their own offences, and drinking in the vehicle carries a fine of $200 to $300 for a passenger and $300 to $600 for the driver.",
        trap: "Parked and stationary does not lift it. Public place is the operative phrase, not moving.",
        excerptKey: "no-alcohol-in-vehicle",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_11",
        topic: "signals",
        question: "What does a white triangle showing on a bus priority signal mean?",
        choices: [
          "Buses may turn in any direction",
          "The bus lane ends ahead",
          "All bus manoeuvres are prohibited",
          "Buses are given a clearance interval, working like a yellow signal",
        ],
        correctIndex: 3,
        explanation:
          "The white triangle gives bus drivers a clearance interval on the same principle as the yellow phase for everybody else.",
        context:
          "In the same family, a vertical bar allows straight ahead only, slanted bars allow the turn they lean toward, a horizontal bar prohibits every priority movement and the word BUS allows all of them.",
        trap: "The horizontal bar is the prohibition. The triangle is the transition.",
        excerptKey: "bus-priority-lights",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_12",
        topic: "parking",
        question: "May you leave a five-year-old alone in the car while you run into a shop?",
        choices: [
          "Yes, if the doors are locked",
          "Yes, for less than five minutes",
          "No, the Code forbids leaving a child under 7 unattended in a vehicle",
          "Yes, if the child is asleep",
        ],
        correctIndex: 2,
        explanation:
          "Section 380 of the Highway Safety Code prohibits leaving a child under seven unattended in a road vehicle in your custody. There is no short-errand exception.",
        context:
          "The Code separately requires you to remove the ignition key and lock the doors when you leave a vehicle, so the two rules pull in opposite directions unless the child comes with you.",
        trap: "Locking the doors is the reason people think it is safe. The provision is about the child being unattended, not about the doors.",
        excerptKey: "child-alone-s380",
        sourceLabel: "SAAQ - Child safety in cars",
        sourceUrl: CHILD,
      },
      {
        id: "qc_s4_13",
        topic: "safety",
        question: "In a rear-wheel or front-wheel skid on ice, what does the driving guide say about how the skid began?",
        choices: [
          "It happens only above 80 km/h",
          "It is unavoidable on any icy surface",
          "It is usually caused by a sudden movement such as hard braking, rapid acceleration or a sharp turn",
          "It is caused mainly by cold tires",
        ],
        correctIndex: 2,
        explanation:
          "Traction is lost when you ask too much of it at once: accelerating hard, braking abruptly, turning too sharply, or some combination of those.",
        context:
          "Rain, black ice, dead leaves, sand and worn or badly inflated tires all cut the grip available before you touch anything. In a curve, the centrifugal force then pushes the car outward.",
        trap: "Blaming the surface alone hides the part you control. The surface sets the budget; the input spends it.",
        excerptKey: "traction-reducers",
        sourceLabel: "Driving a Passenger Vehicle - Chapter 3: Controlling the Vehicle",
        sourceUrl: DPV,
      },
      {
        id: "qc_s4_14",
        topic: "signs",
        question: "What must a driver do at a sign showing a flagperson ahead?",
        choices: [
          "Maintain speed and watch for workers",
          "Slow with extreme caution and obey the flagperson's orders",
          "Stop and wait for a signal in every case",
          "Sound the horn to acknowledge the worker",
        ],
        correctIndex: 1,
        explanation:
          "Extreme caution, because traffic may be slowed, detoured or stopped, and a flagperson's orders have to be obeyed.",
        context:
          "Disobeying a flagperson costs $300 to $600 and four demerit points. The flagperson's sign is a paddle whose two faces show stop and proceed, with an arm signal for slow down.",
        trap: "Not every flagperson sign means a stop. The instruction is caution and obedience, and the paddle then tells you which.",
        excerptKey: "flagperson-fine",
        sourceLabel: "SAAQ - Road Work Zones",
        sourceUrl: WORK,
      },
      {
        id: "qc_s4_15",
        topic: "rightOfWay",
        question: "A vehicle behind you has signalled its intention to pass and begun to move out. May you start a pass of your own?",
        choices: [
          "Yes, if you signal first",
          "No, passing is prohibited in that situation",
          "Yes, if the road ahead is clear for 500 metres",
          "Yes, if you are quicker",
        ],
        correctIndex: 1,
        explanation:
          "Passing is prohibited where there are already vehicles in the left lane, or where a vehicle behind you has signalled a pass or started one. The driver who committed first keeps the lane.",
        context:
          "Passing is also barred at or near the crest of a hill, in a curve, at or across a marked crosswalk, a level crossing or a tunnel, and anywhere signs or markings say so.",
        trap: "Accelerating when someone is passing you is a separate offence in its own right, worth two demerit points.",
        excerptKey: "passing-prohibited-signalled",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_16",
        topic: "licensing",
        question: "Your Quebec licence has been invalid for more than three years. What must you do to drive again?",
        choices: [
          "Simply pay the outstanding fees",
          "Pass both a knowledge test and a road test",
          "Take a fresh driving course",
          "Nothing; the licence reactivates on payment",
        ],
        correctIndex: 1,
        explanation:
          "Three years of invalidity puts you back through both examinations, knowledge and road, before a licence can be issued again.",
        context:
          "The driving privilege is annual even though the plastic card lasts four years, so missing the yearly payment stops you driving. A minimum fine of $300 attaches to driving without having paid.",
        trap: "It is the driving privilege that expires each year, not the card. People assume the expiry date printed on the licence is the only deadline.",
        excerptKey: "invalid-three-years",
        sourceLabel: HB_DRIVER,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_17",
        topic: "signals",
        question: "What does a rotating green light on a vehicle indicate in Quebec?",
        choices: [
          "A tow truck responding to an emergency call",
          "An emergency vehicle serving as a command and coordination post",
          "A funeral procession",
          "A public transit vehicle running late",
        ],
        correctIndex: 1,
        explanation:
          "A rotating green light marks an emergency vehicle acting as a command and coordination post at an incident.",
        context:
          "A flashing green light is different again: it is used by tow trucks called out by an emergency service, and by firefighters authorised by their municipality. White or purple flashing lights belong to funeral establishments.",
        trap: "Rotating and flashing green are two different signals with two different meanings, and the tow truck has the flashing one.",
        excerptKey: "emerg-green-tow-truck",
        sourceLabel: "SAAQ - Vehicles With Flashing or Rotating Lights",
        sourceUrl: EMERG,
      },
      {
        id: "qc_s4_18",
        topic: "rules",
        question: "What does the Highway Safety Code require of you when you leave your vehicle?",
        choices: [
          "Remove the ignition key and lock the doors",
          "Leave the key in for emergency services",
          "Set the alarm",
          "Fold in the mirrors",
        ],
        correctIndex: 0,
        explanation:
          "Take the key out of the ignition and lock the doors. It is an obligation in the Code, not just good practice.",
        context:
          "On a slope you also engage the parking brake and turn the wheels toward the curb, and the vehicle must be no more than 30 cm from the edge of the roadway, facing the flow of traffic.",
        trap: "Running into a shop with the engine idling breaks this rule and, if a child under seven is aboard, breaks another one at the same time.",
        excerptKey: "hsc-ignition-key",
        sourceLabel: "Highway Safety Code, section 381",
        sourceUrl: HSC,
      },
      {
        id: "qc_s4_19",
        topic: "sharing",
        question: "A power-assisted bicycle rider in Quebec must be at least what age?",
        choices: [
          "12",
          "14",
          "16",
          "18",
        ],
        correctIndex: 1,
        explanation:
          "Fourteen, and the rider must wear a bicycle helmet. Between 14 and 17 they also need a licence authorising a moped or scooter.",
        context:
          "The machine itself has limits: two or three tires, pedals, and an electric motor of no more than 500 watts that stops assisting at 32 km/h. Anyone 18 or over needs no licence for one.",
        trap: "Sixteen is the age for an off-road vehicle, not for a power-assisted bicycle.",
        excerptKey: "power-assisted-bicycle",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_20",
        topic: "safety",
        question: "Which of these is the SAAQ's advice for a driver dazzled by oncoming headlights?",
        choices: [
          "Look toward the right side of the road and slow down",
          "Close one eye until the vehicle passes",
          "Speed up to shorten the exposure",
          "Flash your own high beams back",
        ],
        correctIndex: 0,
        explanation:
          "Look toward the right-hand edge of the road rather than into the lights, and slow further if the glare is bad.",
        context:
          "Recovery from glare takes longer as you get older. Keeping the windshield clean inside and out, and dimming the dashboard on unlit roads, both cut the effect.",
        trap: "Retaliating with your own high beams blinds the other driver too, and now there are two dazzled drivers closing on each other.",
        excerptKey: "night-glare-look-right",
        sourceLabel: "SAAQ - Driving at Night",
        sourceUrl: NIGHT,
      },
      {
        id: "qc_s4_21",
        topic: "signs",
        question: "A black-and-white sign shows one car alongside another with a red diagonal bar across them. What does it mark?",
        choices: [
          "The beginning of a no-passing zone",
          "A one-way street",
          "A lane reserved for carpools",
          "A prohibition on towing",
        ],
        correctIndex: 0,
        explanation:
          "It is the no-passing sign, and it marks the beginning of a no-passing zone. A tab beneath it is used to show where the zone ends.",
        context:
          "Passing is separately prohibited by the rules of the road at or near the crest of a hill, in a curve, at a marked crosswalk, a level crossing or a tunnel, and wherever pavement markings say so.",
        trap: "The sign marks the start of a zone, not a single spot. It stays in force until the end tab or a change in the markings.",
        excerptKey: "no-passing-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_22",
        topic: "impairment",
        question: "A driver refuses to give a breath sample when a peace officer demands one. What follows?",
        choices: [
          "The stiffest penalties under both the Criminal Code and the Highway Safety Code",
          "A fine only, with no suspension",
          "Nothing, since refusal is a right",
          "A warning on a first occasion",
        ],
        correctIndex: 0,
        explanation:
          "Refusing an alcohol screening device or a physical coordination test automatically brings the heaviest penalties available under both statutes.",
        context:
          "Under the Highway Safety Code that means an immediate 90-day licence suspension, the vehicle seized for 30 days, and a place in the programme to assess and reduce the risk of impaired driving.",
        trap: "Refusing does not deprive the prosecution of evidence; it becomes the offence, and a heavier one than the reading would probably have been.",
        excerptKey: "arrest-grounds",
        sourceLabel: "SAAQ - Drinking and Driving: Impairment and Consequences",
        sourceUrl: ALCOHOL,
      },
      {
        id: "qc_s4_23",
        topic: "rules",
        question: "May you pass another vehicle by driving onto the shoulder?",
        choices: [
          "Yes, at speeds under 50 km/h",
          "Yes, if the shoulder is paved",
          "Yes, if the vehicle ahead is turning left",
          "No, your vehicle may not leave the roadway to pass at any time",
        ],
        correctIndex: 3,
        explanation:
          "At no time may your vehicle leave the roadway to pass. Passing on the right within the roadway is allowed only in narrow circumstances.",
        context:
          "Those circumstances are passing a vehicle that is turning left or heading for an exit ramp, or one performing maintenance in the left lane. Weaving between lanes is separately prohibited.",
        trap: "The left-turning vehicle exception lets you pass on the right within the marked lanes. It does not put the shoulder in play.",
        excerptKey: "no-passing-on-shoulder",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_24",
        topic: "licensing",
        question: "You have just moved to Quebec from another province. How long may you keep driving on your old licence?",
        choices: [
          "3 months",
          "6 months",
          "12 months",
          "30 days",
        ],
        correctIndex: 1,
        explanation:
          "Six months from settling in Quebec. After that you need a Quebec licence, though a Class 5 equivalent from another Canadian jurisdiction, the United States or an exchange-agreement country can be swapped without an examination.",
        context:
          "If you come from somewhere with no agreement and have held your licence at least a year, you sit both tests. Under a year, and the licence is not recognised at all, so you start as a first-time applicant.",
        trap: "The six months is not a grace period that renews. It runs from taking up residence.",
        excerptKey: "new-resident-six-months",
        sourceLabel: HB_DRIVER,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_25",
        topic: "signals",
        question: "What does the white pedestrian silhouette authorise a pedestrian to do?",
        choices: [
          "Cross diagonally across the intersection",
          "Cross anywhere on that block",
          "Enter the roadway only after all traffic has stopped",
          "Cross in the area reserved for them",
        ],
        correctIndex: 3,
        explanation:
          "It authorises crossing within the area set aside for pedestrians. At some intersections an audio signal sounds continuously while the silhouette is lit.",
        context:
          "When the silhouette starts flashing, the audio signal begins to beep and anyone already crossing has to hurry to the sidewalk or the median. Crossing diagonally is prohibited unless a sign or signal allows it.",
        trap: "The white signal does not suspend the need to watch for turning vehicles, and the SAAQ says so explicitly where right turns on red are allowed.",
        excerptKey: "ped-white-silhouette",
        sourceLabel: "SAAQ - Pedestrians: What the Law Says",
        sourceUrl: PED,
      },
      {
        id: "qc_s4_26",
        topic: "parking",
        question: "On the travelled part of a road where the speed limit is 70 km/h or more, may you park?",
        choices: [
          "Yes, during daylight hours",
          "No, parking and stopping there are prohibited",
          "Yes, if hazard lights are on",
          "Yes, if you are fully off the traffic lane",
        ],
        correctIndex: 1,
        explanation:
          "Stopping or parking on the travelled part of a roadway where the limit is 70 km/h or higher is prohibited, alongside the other listed places.",
        context:
          "Autoroutes and their access and exit ramps are barred outright, and so are bridges, overpasses, tunnels and elevated lanes. Necessity is what the exceptions turn on.",
        trap: "Hazard lights signal a problem; they do not create a permission. They matter for the necessity case, not for an ordinary stop.",
        excerptKey: "parking-blocking",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_27",
        topic: "safety",
        question: "How does the SAAQ describe the effect of alcohol on a driver's observation?",
        choices: [
          "It sharpens focus on the road ahead",
          "It causes the driver to fix on one point instead of scanning",
          "It has no effect below 0.08",
          "It improves distance estimation at night",
        ],
        correctIndex: 1,
        explanation:
          "Alcohol replaces scanning with staring: the driver locks onto a single point ahead and stops noticing what is happening at the sides and behind.",
        context:
          "Distance estimation gets worse, adapting to darkness takes longer, and recovering from oncoming glare takes longer still. The sense of danger drops at the same time, so more risk feels like less.",
        trap: "Feeling focused is one of the symptoms. Narrowed attention is experienced from the inside as concentration.",
        excerptKey: "visual-field-shrinks",
        sourceLabel: HB_DRIVER,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_28",
        topic: "rightOfWay",
        question: "You are stopped at a red light intending to turn right, outside Montreal, and no sign forbids the turn. A cyclist is about to enter the intersection. What must you do?",
        choices: [
          "Sound the horn to establish priority",
          "Complete the turn before the cyclist reaches you",
          "Yield to the cyclist",
          "Wait for the green and then turn",
        ],
        correctIndex: 2,
        explanation:
          "The turn is conditional on yielding to pedestrians and cyclists in the intersection or about to enter it, on top of the full stop it requires.",
        context:
          "The procedure is stop, look left, ahead and right including the mirror and blind spot, look left again, and only then decide. The turn is never compulsory.",
        trap: "Rolling the stop is what the penalty targets: not stopping fully before a right turn on red is treated like running the red light, at $100 to $200 and three demerit points.",
        excerptKey: "rtor-full-stop-required",
        sourceLabel: "SAAQ - Turning Right at a Red Light",
        sourceUrl: RTOR,
      },
      {
        id: "qc_s4_29",
        topic: "sharing",
        question: "May a cyclist in Quebec wear headphones while riding?",
        choices: [
          "Yes, at low volume",
          "No, headphones of any kind are prohibited while riding",
          "Yes, if riding on a bike path",
          "Yes, in one ear",
        ],
        correctIndex: 1,
        explanation:
          "Cyclists may not wear any type of headphones while riding, and they may not hold onto a moving vehicle either.",
        context:
          "The one-earphone allowance belongs to drivers of road vehicles. A cyclist handling an electronic device is also an offence, at $80 to $100 like most cycling infractions.",
        trap: "The driver's rule and the cyclist's rule differ, which is exactly the sort of pairing the knowledge test likes.",
        excerptKey: "cyclist-no-headphones",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_30",
        topic: "signs",
        question: "What does a sign showing a truck on a slope with a percentage warn about?",
        choices: [
          "A brake check area",
          "A weight limit for the bridge ahead",
          "A steep grade, given as the maximum percentage of the slope",
          "A truck route",
        ],
        correctIndex: 2,
        explanation:
          "It gives the steepest grade of the hill as a percentage, used where the slope is at least 6%.",
        context:
          "A brake check sign is a different one: it requires drivers of vehicles or combinations weighing 3,000 kg or more to stop in a marked area and check the brakes.",
        trap: "The pictogram is a truck, but a steep grade sign warns everybody. It is not addressed only to heavy vehicles.",
        excerptKey: "brake-check-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_31",
        topic: "rules",
        question: "What is the speed limit on a Quebec logging road unless signs say otherwise?",
        choices: [
          "50 km/h",
          "70 km/h",
          "80 km/h",
          "90 km/h",
        ],
        correctIndex: 1,
        explanation:
          "Seventy kilometres an hour, the same as a gravel highway, and you are expected to slow further for the state of the road.",
        context:
          "Parts of the Highway Safety Code have applied on logging roads since April 1999, so the impaired driving powers, the seat belt duty and the document requirements all apply there.",
        trap: "A private-looking road is not outside the Code. The breathalyser demand reaches a logging road just as it reaches a city street.",
        excerptKey: "logging-road-speed",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s4_32",
        topic: "licensing",
        question: "What happens if you drive while your licence is revoked or suspended in Quebec?",
        choices: [
          "A fine of $600 to $2,000 and the vehicle seized and impounded for 30 days",
          "Three demerit points",
          "The suspension is extended by 30 days only",
          "A warning for a first occasion",
        ],
        correctIndex: 0,
        explanation:
          "The vehicle is towed and impounded for thirty days at the owner's expense, and the fine runs from $600 to $2,000 plus legal and administrative costs.",
        context:
          "At the end of the penalty period you also have to pass a reinstatement test before a new licence is issued. A restricted licence is only available where driving is essential to your main employment and a judge orders it.",
        trap: "The vehicle is seized even if it belongs to someone else, which is how a suspended driver's mistake becomes a family's problem.",
        excerptKey: "demerit-driving-revoked",
        sourceLabel: "SAAQ - Demerit Points",
        sourceUrl: DEMERIT,
      },
      {
        id: "qc_s4_33",
        topic: "impairment",
        question: "Which drivers are subject to the zero-alcohol rule in Quebec beyond learners and probationary holders?",
        choices: [
          "Everyone under 22, and anyone who has never held a licence",
          "Only drivers with a previous conviction",
          "Only heavy-vehicle drivers",
          "Everyone under 25",
        ],
        correctIndex: 0,
        explanation:
          "Every driver under 22 is covered, along with learners, probationary holders, people who have never held a licence, and holders of a motorcycle licence for 24 months or less.",
        context:
          "Taxi, limousine, bus and minibus drivers face an immediate 24-hour suspension of the relevant class if they have been drinking, and heavy vehicle drivers work to a 0.05 limit.",
        trap: "Twenty-two is the age, not twenty-one and not twenty-five, and it applies whatever kind of licence the driver holds.",
        excerptKey: "zero-alcohol-who",
        sourceLabel: "SAAQ - Drinking and Driving: Impairment and Consequences",
        sourceUrl: ALCOHOL,
      },
      {
        id: "qc_s4_34",
        topic: "safety",
        question: "Why does the SAAQ advise reversing into a parking space rather than out of one?",
        choices: [
          "It gives better visibility when you leave",
          "It is required by the Highway Safety Code",
          "It reduces wear on the tires",
          "It saves fuel",
        ],
        correctIndex: 0,
        explanation:
          "Backing in means driving out forwards, with a clear view of the traffic and pedestrians you are joining.",
        context:
          "Leaving a parking space is on the SAAQ's list of moments requiring a blind spot check, together with changing lanes, merging, turning, reversing and opening the door.",
        trap: "It is advice, not law. The exam asks why it is recommended, not whether it is compulsory.",
        excerptKey: "parking-forward-exit",
        sourceLabel: "Driving a Passenger Vehicle - Chapter 5: Parking",
        sourceUrl: DPV,
      },
      {
        id: "qc_s4_35",
        topic: "emergencies",
        question: "A Controle routier Quebec vehicle has stopped a long truck combination on the shoulder. What does the SAAQ ask you to do beyond moving over?",
        choices: [
          "Stop and wait until the inspection is over",
          "Sound your horn once as a warning",
          "Pass the entire length of the intercepted vehicle before returning to your lane",
          "Return to your lane as soon as you pass the enforcement vehicle",
        ],
        correctIndex: 2,
        explanation:
          "The combination being inspected can be 25 metres or longer, so you clear the whole of it before merging back rather than cutting in beside the trailer.",
        context:
          "The Move-Over Law itself requires slowing, leaving as much space as you safely can, and stopping if necessary. It applies to police vehicles, ambulances, fire vehicles, tow trucks, surveillance vehicles and wildlife protection vehicles.",
        trap: "Passing the flashing lights is not passing the vehicle. The rest of the combination is where the workers are standing.",
        excerptKey: "moveover-vehicles",
        sourceLabel: "SAAQ - Move-Over Law",
        sourceUrl: MOVEOVER,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The traps Quebec learners describe after failing: the illustrated situations, the questions where two answers look right, and the numbers that differ from every neighbouring province.",
    questions: [
      {
        id: "qc_s5_01",
        topic: "signs",
        question: "A reserved lane is marked with diagonal broken white lines beside your lane. What does that allow?",
        choices: [
          "Sharing the lane at any time outside rush hour",
          "Sharing the lane if you carry two or more passengers",
          "Nothing; a reserved lane is never shared",
          "Sharing the lane if you turn at the next intersection",
        ],
        correctIndex: 3,
        explanation:
          "The diagonal broken white lines tell drivers in the neighbouring lane that they may use the reserved lane on the condition that they turn at the next intersection.",
        context:
          "Double solid lines mark a lane reserved at all times; double broken lines mark one reserved during set hours. The diagonal markings are a third, narrower permission that many drivers never notice.",
        trap: "This is one of the details learners report missing in the illustrated questions: a car in the reserved lane is not automatically committing an offence.",
        excerptKey: "reserved-lane-shared-use",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_02",
        topic: "rules",
        question: "In an illustrated question, a car is drawn changing lanes with no turn signal showing. Is that an offence?",
        choices: [
          "Only on a road with a limit above 50 km/h",
          "No, signalling is only a courtesy",
          "Yes, the signal must be used over a sufficient distance before the manoeuvre",
          "Only if another vehicle is close behind",
        ],
        correctIndex: 2,
        explanation:
          "Failing to signal a lane change is an offence in itself, whether or not anyone is behind. The signal has to run continuously over a distance long enough to be useful.",
        context:
          "Learners consistently report that the illustrated questions turn on details of exactly this kind: an unlit indicator, a school bus with its lights on, an ambulance whose lights are off. The picture is the evidence.",
        trap: "Answering from the general shape of the scene instead of checking each vehicle's lights is the single most common way people lose these questions.",
        excerptKey: "signal-intentions",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_03",
        topic: "safety",
        question: "How large a following interval does the SAAQ's driving guide recommend on an icy or snowy road?",
        choices: [
          "Two to three seconds",
          "Four seconds",
          "Six seconds",
          "Eight to ten seconds",
        ],
        correctIndex: 3,
        explanation:
          "Eight to ten seconds. Braking distances on ice are so much longer that the guide multiplies the normal interval rather than adding to it.",
        context:
          "The same guide gives four or more seconds in the city and six or more on the highway in normal, dry conditions. Reduced visibility, a damaged surface and worn tires each call for more again.",
        trap: "Every neighbouring jurisdiction teaches two or three seconds as the baseline. Quebec's own guide does not, and the exam is written from it.",
        excerptKey: "icy-eight-to-ten-seconds",
        sourceLabel: "Driving a Passenger Vehicle - Chapter 4: Sharing the Road",
        sourceUrl: DPV,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_04",
        topic: "rightOfWay",
        question: "You are on a road with two lanes each way and a school bus on the opposite side stops with red lights flashing. There is no median. What must you do?",
        choices: [
          "Stop only if children are visible",
          "Continue, since you are in the opposite direction",
          "Slow to 30 km/h and pass",
          "Stop at least five metres away and wait",
        ],
        correctIndex: 3,
        explanation:
          "The duty applies to everyone on the same roadway, whichever direction they are travelling and wherever the bus is. Only a median or another physical divider lifts it.",
        context:
          "Failing to stop for a school bus, or passing one unlawfully in either direction, carries nine demerit points. That is more than the four-point bracket a learner or probationary driver is allowed.",
        trap: "The exemption is a physical divider, not a painted line and not the number of lanes. Learners routinely get this the wrong way round.",
        excerptKey: "school-bus-median",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_05",
        topic: "signals",
        question: "A driver waiting at a red light in Montreal wants to turn right and no sign is posted. What may they do?",
        choices: [
          "Not turn; the prohibition covers the whole island regardless of signs",
          "Turn only between 7 p.m. and 7 a.m.",
          "Turn after stopping, since no sign forbids it",
          "Turn without stopping if the way is clear",
        ],
        correctIndex: 0,
        explanation:
          "The ban on the island of Montreal does not depend on a sign at each intersection. Signs are posted at the entry points to the island, and the prohibition then applies throughout.",
        context:
          "Everywhere else in Quebec the turn is permitted, subject to a complete stop and to yielding, unless a sign at that intersection forbids it or restricts it to certain hours.",
        trap: "Looking for a sign at the intersection is the wrong test on the island. Drivers from off-island are the ones this catches.",
        excerptKey: "rtor-montreal-signs",
        sourceLabel: "SAAQ - Turning Right at a Red Light",
        sourceUrl: RTOR,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_06",
        topic: "rules",
        question: "You are about to turn right and there is a bicycle lane between you and the kerb. Where do you position the car?",
        choices: [
          "In the centre of the roadway",
          "In the bicycle lane, as far right as possible",
          "Astride the bicycle lane to block cyclists",
          "In the right-hand lane, without encroaching on the bicycle lane or a reserved lane",
        ],
        correctIndex: 3,
        explanation:
          "The turn is made from the right-hand side of the roadway or the designated turning lane, and you enter the far right lane of the other road without encroaching on a bicycle lane or a reserved lane.",
        context:
          "You still yield to pedestrians and cyclists crossing the roadway you are entering, and to traffic on the intersecting road. The turn is made sharply rather than swung wide.",
        trap: "Merging into the bike lane before the turn is taught in some places and is not the Quebec instruction.",
        excerptKey: "right-turn-method",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_07",
        topic: "speed",
        question: "In a 100 km/h zone, what speed makes the offence excessive speeding?",
        choices: [
          "140 km/h",
          "150 km/h",
          "160 km/h",
          "170 km/h",
        ],
        correctIndex: 2,
        explanation:
          "Sixty over is the threshold where the limit is 100 km/h or more, so 160 km/h. The thresholds fall to 50 over between 60 and 90, and 40 over at 60 or less.",
        context:
          "A first excessive speeding offence suspends the licence for seven days on the spot. The points double on conviction, the fine doubles, and the offence stays on the record for ten years.",
        trap: "The lowest threshold sits in the slowest zones, which is the opposite of most people's intuition.",
        excerptKey: "excessive-speeding-thresholds",
        sourceLabel: "SAAQ - Speed: What the Law Says",
        sourceUrl: SPEEDLAW,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_08",
        topic: "impairment",
        question: "How many demerit points does a single excessive speeding conviction leave you facing at the extreme end?",
        choices: [
          "Never more than 15",
          "More than 30 points from one conviction is possible",
          "Exactly 12",
          "Points are not given for excessive speeding",
        ],
        correctIndex: 1,
        explanation:
          "A single excessive speeding conviction can bring more than thirty demerit points, which is more than any bracket allows.",
        context:
          "The points table climbs steeply: 14 at 61 to 80 km/h over, 18 at 81 to 100 over, 24 at 101 to 120 over, and 30 or more beyond that. On an excessive speeding conviction those figures then double.",
        trap: "Thinking of demerit points as a slow accumulation misses this. One conviction can pass the ceiling on its own.",
        excerptKey: "demerit-brackets",
        sourceLabel: "SAAQ - Demerit Points",
        sourceUrl: DEMERIT,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_09",
        topic: "signs",
        question: "What is the difference between a yellow speed sign and an orange one in a work zone?",
        choices: [
          "The yellow applies at night and the orange by day",
          "There is none; both are enforceable",
          "The yellow gives a recommended speed, the orange sets an enforceable limit",
          "The orange gives a recommended speed, the yellow sets an enforceable limit",
        ],
        correctIndex: 2,
        explanation:
          "Orange speed signs have the same force of law as white ones. Yellow tabs are recommendations for a hazard or a curve.",
        context:
          "Fines double for speeding past an orange limit in a work zone. The SAAQ's own example is a 70 zone where 90 km/h costs $140 and 115 km/h costs $420.",
        trap: "Both are unusual colours for a speed number, which is exactly why the distinction is asked.",
        excerptKey: "orange-speed-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_10",
        topic: "rules",
        question: "Which of these is NOT one of the situations in which you may cross a single solid line?",
        choices: [
          "To pass a bicycle",
          "To make a left turn into a private driveway",
          "To pass a car travelling below the speed limit",
          "To pass farm machinery",
        ],
        correctIndex: 2,
        explanation:
          "The exceptions are narrow: an obstructed or closed lane, a left turn onto another roadway or into a driveway, and passing farm machinery, farm tractors, animal-drawn vehicles, bicycles or a vehicle displaying the slow-moving vehicle triangle.",
        context:
          "A slow car is not on the list. Double solid lines may not be crossed at all, and none of these exceptions applies to them.",
        trap: "The list looks like it is about slow vehicles generally. It is a closed list of specific ones.",
        excerptKey: "solid-line-exceptions",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_11",
        topic: "safety",
        question: "In the SAAQ's illustrated questions, several vehicles are numbered and you must say which are committing an offence. What is the recommended approach?",
        choices: [
          "Answer from the overall impression of the scene",
          "Pick the vehicle that looks most out of place",
          "Read each numbered vehicle against the rules one at a time",
          "Choose the option with the most numbers in it",
        ],
        correctIndex: 2,
        explanation:
          "Each numbered vehicle is a separate judgement. The answer options combine those judgements, so a single misread vehicle changes which combination is right.",
        context:
          "The SAAQ publishes a Guide to Knowledge Test Illustrations showing how signals, lights and manoeuvres are drawn, so a learner can recognise a lit indicator or a flashing light in the drawing style used.",
        trap: "The combination format punishes over-inclusion as hard as under-inclusion. One extra vehicle in your answer loses the whole item.",
        excerptKey: "illustrated-question-tips",
        sourceLabel: "SAAQ - Obtaining a Class 5 Driver's Licence",
        sourceUrl: CLASS5,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_12",
        topic: "parking",
        question: "How far from an intersection must you stay when stopping your vehicle?",
        choices: [
          "3 metres",
          "5 metres",
          "8 metres",
          "10 metres",
        ],
        correctIndex: 1,
        explanation:
          "Five metres from an intersection, a crosswalk, a bicycle crossing or a level crossing. Three metres is the hydrant, and eight metres is the distance across the street from a police or fire station.",
        context:
          "These are stopping distances, so waiting in the car does not help. Stopping to pick up or drop off a person with a disability is allowed where it can be done safely.",
        trap: "Three, five and eight all appear in the same provision, and the exam asks about whichever one you are least sure of.",
        excerptKey: "hsc-parking-distances",
        sourceLabel: "Highway Safety Code, section 386",
        sourceUrl: HSC,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_13",
        topic: "signals",
        question: "A flashing green light and a green arrow both allow a protected left turn. What is different about them?",
        choices: [
          "The flashing green requires a stop first",
          "The arrow only applies to buses",
          "The flashing green means yield to oncoming traffic",
          "The arrow shows the direction; the flashing green protects the whole approach",
        ],
        correctIndex: 3,
        explanation:
          "A green arrow directs you in the direction it points; a flashing green tells the whole approach that oncoming traffic is being held. Both leave your duty to yield inside the intersection untouched.",
        context:
          "Once the arrow goes out and only the round green remains, the protection has ended and you go back to yielding to oncoming traffic before turning left.",
        trap: "Reading the flashing green as a caution, the way a flashing yellow is a caution, reverses its meaning completely.",
        excerptKey: "green-arrow",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_14",
        topic: "rules",
        question: "You are on a boulevard where the speed limit is 60 km/h and you drive in the left lane faster than the traffic on your right. Is that passing?",
        choices: [
          "No, below 80 km/h either lane may be used and going faster than another lane is not passing",
          "Yes, but it is allowed at that speed",
          "No, but you must return to the right lane immediately",
          "Yes, and it is prohibited",
        ],
        correctIndex: 0,
        explanation:
          "Where the limit is below 80 km/h you may use either lane, and simply travelling faster than a vehicle in another lane does not count as passing.",
        context:
          "Above that, on the autoroute, the far left lane is for passing, turning left, avoiding obstacles or moving toward an exit. Below it, urban lane discipline is looser than most drivers assume.",
        trap: "This is the reverse of the usual keep-right instinct, and it is stated in the handbook rather than in the statute.",
        excerptKey: "left-lane-under-80",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_15",
        topic: "rightOfWay",
        question: "You are on a two-way road and a vehicle is being passed by another. You are the driver being passed. What must you not do?",
        choices: [
          "Check your mirrors",
          "Move toward the right",
          "Accelerate",
          "Slow down",
        ],
        correctIndex: 2,
        explanation:
          "Accelerating while you are being passed is an offence worth two demerit points. Easing off is a courtesy that shortens the manoeuvre.",
        context:
          "The passing driver has their own obligations: passing on the left, returning to the right lane once complete, and not beginning at all in fog or reduced visibility.",
        trap: "Speeding up feels like a reaction rather than a decision, which is why it needs its own rule.",
        excerptKey: "being-passed",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_16",
        topic: "safety",
        question: "You feel the first signs of fatigue on the autoroute. Where may you stop for a nap?",
        choices: [
          "On the shoulder, with hazard lights on",
          "In a rest area, service area or other parking area where switching off is safe",
          "In the right-hand traffic lane during light traffic",
          "On an exit ramp",
        ],
        correctIndex: 1,
        explanation:
          "A rest area, a roadside service area, a business parking area or a village-relais. Stopping on the shoulder is prohibited on the autoroute and unsafe everywhere else.",
        context:
          "The nap should be 20 to 30 minutes, taken at the first signs rather than after them, and coffee works best drunk just before it. A break alone restores alertness only briefly.",
        trap: "Hazard lights do not make a shoulder safe. The risk is being struck, and the lights do not change that.",
        excerptKey: "fatigue-shoulder",
        sourceLabel: "SAAQ - Driver Fatigue",
        sourceUrl: FATIGUE,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_17",
        topic: "signs",
        question: "A sign shows a red circle with a car inside it. What does it mean?",
        choices: [
          "Cars must use the right lane",
          "Parking for cars only",
          "Access prohibited to cars",
          "A car park ahead",
        ],
        correctIndex: 2,
        explanation:
          "The access-prohibited family uses a red circle around the vehicle or user that may not use the road or lane, and cars are one of the pictograms in it.",
        context:
          "The same family covers bicycles, motorcycles, pedestrians, snowmobiles, buses, quads, in-line skaters, equestrians, recreational vehicles and vehicles pulling a trailer, in various combinations.",
        trap: "A red circle in Quebec's system means prohibition; a green circle in the intersection-movement family means obligation. Neither ever means permission.",
        excerptKey: "access-prohibited",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s5_18",
        topic: "impairment",
        question: "Which is the correct order for a driver who feels drowsy on a long trip?",
        choices: [
          "Push on to the destination and sleep there",
          "Drink coffee, then drive for another hour before resting",
          "Stop somewhere safe, drink coffee, then nap 20 to 30 minutes",
          "Open the windows and continue",
        ],
        correctIndex: 2,
        explanation:
          "Stop first, then coffee, then the nap. The coffee needs about twenty minutes to work, so drinking it before the nap means it takes effect as you wake.",
        context:
          "If more than two hours of driving remain when the fatigue comes back, the guidance is to stop for the equivalent of a full night's sleep rather than to nap again.",
        trap: "Coffee then driving is the sequence most people use, and it puts the twenty-minute delay in exactly the wrong place.",
        excerptKey: "fatigue-nap",
        sourceLabel: "SAAQ - Driver Fatigue",
        sourceUrl: FATIGUE,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_19",
        topic: "rules",
        question: "A driver holds a smart watch to check the time while stopped in traffic. Is that an offence in Quebec?",
        choices: [
          "Yes, smart watches are covered and stopped in traffic still counts as driving",
          "Only if the watch is connected to a phone",
          "No, a watch is not a phone",
          "No, because the vehicle is not moving",
        ],
        correctIndex: 0,
        explanation:
          "The SAAQ names smart watches specifically, and says it is prohibited even to use one to check the time while driving. Stopped in traffic is still driving.",
        context:
          "The prohibited list also covers cell phones, tablets, multimedia players, some vape devices with screens, and any unauthorised display screen. A first offence is five demerit points and a $300 to $600 fine.",
        trap: "The device is judged by having a screen, not by being a telephone.",
        excerptKey: "device-strictly-prohibited",
        sourceLabel: "SAAQ - Portable electronic devices",
        sourceUrl: PHONE,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_20",
        topic: "signals",
        question: "The pedestrian countdown shows four seconds and the hand has begun to flash. May a pedestrian start crossing?",
        choices: [
          "Yes, the countdown is the permission",
          "Only if they have enough time to reach the far side or a safety zone",
          "Yes, until the counter reaches zero",
          "Only at intersections without traffic lights",
        ],
        correctIndex: 1,
        explanation:
          "The flashing hand means cross only if there is time to reach the other side or the safety zone before it stops flashing. Anyone already crossing should hurry.",
        context:
          "A steady orange hand is a flat prohibition on entering. The white silhouette is the signal that authorises the crossing, and it still calls for watching turning vehicles.",
        trap: "The countdown looks like a permission because it shows time remaining. What it counts down to is the prohibition.",
        excerptKey: "ped-flashing-hand",
        sourceLabel: "SAAQ - Pedestrians: What the Law Says",
        sourceUrl: PED,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_21",
        topic: "sharing",
        question: "May a cyclist in Quebec ride on the shoulder of a road?",
        choices: [
          "Yes, in either direction",
          "Only where a sign permits it",
          "No, cyclists must stay in the traffic lane",
          "Yes, in the same direction as traffic",
        ],
        correctIndex: 3,
        explanation:
          "Where a shoulder exists, cyclists may travel on it in the same direction as traffic. Using a bikeway is not compulsory either.",
        context:
          "Riding is prohibited on autoroutes and their ramps, and between two rows of vehicles except where the cyclist's lane is next to a right-turn lane. Cycling is barred above 50 km/h unless there is a separated bikeway, the cyclist is at least 12, or the ride is a supervised excursion.",
        trap: "Cyclists ride with the traffic on the shoulder. Facing traffic is the pedestrian rule, and mixing them up is a genuinely dangerous error.",
        excerptKey: "cyclist-bikeway-optional",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_22",
        topic: "rightOfWay",
        question: "You are stopped at an all-way stop. A pedestrian is walking along the sidewalk of the road you are about to enter. What is your duty?",
        choices: [
          "Proceed if you can clear the crossing before they reach it",
          "None, they are on the sidewalk",
          "Yield to them, since they are crossing or travelling alongside the roadway you are entering",
          "Sound the horn to establish your intention",
        ],
        correctIndex: 2,
        explanation:
          "The duty covers pedestrians and cyclists crossing or travelling alongside the roadway you are about to cross or enter, not only those already on the pavement of the road.",
        context:
          "It applies at a stop sign, at a flashing red and at an all-way stop alike, and it sits on top of the ordinary order-of-arrival rule between vehicles.",
        trap: "Being on the sidewalk does not put a pedestrian outside the rule. Alongside is in the text.",
        excerptKey: "all-way-stop-pedestrians",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_23",
        topic: "speed",
        question: "Your car is uninsured and you are involved in a collision causing $700 of property damage. What follows?",
        choices: [
          "Nothing, the public plan covers it",
          "A fine only",
          "Your licence is suspended until the SAAQ has a payment guarantee or proof of settlement",
          "Three demerit points",
        ],
        correctIndex: 2,
        explanation:
          "Driving or owning a vehicle without third-party liability cover, and then causing more than $500 of property damage, suspends your licence. Any vehicle registered in your name is also barred from the road until the damage is settled or guaranteed.",
        context:
          "The public plan compensates bodily injury regardless of fault, but property damage is the private insurer's job, and Quebec requires a minimum of $50,000 of that cover.",
        trap: "The no-fault plan makes people think insurance is optional in Quebec. It covers injuries only, and the property side is compulsory.",
        excerptKey: "no-liability-insurance",
        sourceLabel: HB_DRIVER,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_24",
        topic: "safety",
        question: "You are the driver and your 15-year-old passenger is not wearing a seat belt. Whose offence is it?",
        choices: [
          "The vehicle owner's",
          "The passenger's alone",
          "The driver's as well, since passengers under 16 are the driver's responsibility",
          "Neither, if the passenger refuses",
        ],
        correctIndex: 2,
        explanation:
          "The driver is responsible for making sure passengers under 16 are properly belted, so the offence lands on the driver as well.",
        context:
          "Demerit points can be entered against a passenger's own record for not wearing a belt, whether or not they hold a licence. The two liabilities exist side by side.",
        trap: "Sixteen is the line. Below it, an argument in the back seat is the driver's legal problem.",
        excerptKey: "seat-belt-under-16",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_25",
        topic: "rules",
        question: "How many passengers may you carry in a car with five seat belts?",
        choices: [
          "Six, if one is a child",
          "Five plus the driver",
          "As many as will fit",
          "No more than the number of seat belts available",
        ],
        correctIndex: 3,
        explanation:
          "You may not carry more passengers than there are seat belts. Five belts means five people including the driver.",
        context:
          "Riding in a trailer, a semi-trailer or the load space of a moving vehicle is separately prohibited unless the space is specially designed and the road is closed to traffic.",
        trap: "Counting seats rather than belts is the error, and it usually shows up on a bench rear seat with only two belts.",
        excerptKey: "passengers-vs-belts",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s5_26",
        topic: "signs",
        question: "A sign before an intersection reads Prepare to stop and carries two flashing yellow lights. What are the lights telling you?",
        choices: [
          "The signal ahead is about to turn red",
          "The intersection is controlled by a stop sign",
          "A work site begins at the intersection",
          "The signal ahead has failed",
        ],
        correctIndex: 0,
        explanation:
          "The flashing lights mean the light at the intersection, or at the level crossing, is about to turn red. The sign is used where you would not expect to find a signal.",
        context:
          "It is a warning sign rather than a regulatory one, and it exists because a driver arriving at speed on an unfamiliar road has no other cue that a red is coming.",
        trap: "Flashing yellow lights on a warning sign are not the same as a flashing yellow traffic light. Here they mean the opposite: get ready to stop.",
        excerptKey: "prepare-to-stop-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_27",
        topic: "licensing",
        question: "You hold a probationary licence, are 18, and have had it seven months. How many passengers aged 19 or under may you carry between midnight and 5 a.m.?",
        choices: [
          "No limit",
          "None",
          "One",
          "Up to three",
        ],
        correctIndex: 3,
        explanation:
          "Six months or less allows one such passenger; more than six months allows up to three. At seven months you are in the second band.",
        context:
          "Immediate family are not counted at all: a spouse, your children or your spouse's children, your brothers and sisters, and any other child of your parent or their spouse. The restriction lifts entirely after twelve months, or when someone with two years of full licence sits beside you.",
        trap: "The count is of passengers aged 19 or under, not of passengers generally, and the family exclusion catches people out both ways.",
        excerptKey: "prob-family-excluded",
        sourceLabel: "SAAQ - Obtaining a Class 5 Driver's Licence",
        sourceUrl: CLASS5,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_28",
        topic: "impairment",
        question: "What happens to a learner or probationary licence holder found with any alcohol in their body?",
        choices: [
          "A warning and a roadside suspension of 24 hours",
          "A 90-day licence suspension, four demerit points and a $300 to $600 fine",
          "A fine only",
          "Two demerit points",
        ],
        correctIndex: 1,
        explanation:
          "Immediate 90-day suspension, four demerit points and a fine of $300 to $600. Four points is the whole bracket for those licences, so the licence is revoked as well.",
        context:
          "A 24-hour prohibition is what taxi, limousine, bus and minibus drivers face for the equivalent breach of their own zero-alcohol duty, and heavy-vehicle drivers for exceeding 0.05.",
        trap: "The 24-hour figure exists in Quebec but belongs to professional drivers, not to new drivers.",
        excerptKey: "zero-alcohol-penalty",
        sourceLabel: "SAAQ - Drinking and Driving: Impairment and Consequences",
        sourceUrl: ALCOHOL,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_29",
        topic: "rightOfWay",
        question: "In an illustrated question a car is drawn turning left across a solid double yellow line into a driveway. Is that vehicle at fault?",
        choices: [
          "Yes, double solid lines may never be crossed",
          "No, a left turn into a driveway is one of the permitted crossings",
          "Only if there is oncoming traffic",
          "Only outside a built-up area",
        ],
        correctIndex: 0,
        explanation:
          "Double solid yellow lines may not be crossed. The driveway exception belongs to the single solid line, not to the double one.",
        context:
          "A single solid line may be crossed for an obstructed or closed lane, for a left turn onto another roadway or into a driveway, and to pass specific slow vehicles. The double line has no such list.",
        trap: "Learners describe getting exactly this pairing wrong: the exception is real, and it belongs to a different marking.",
        excerptKey: "solid-double-lines",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_30",
        topic: "parking",
        question: "May you stop in a bus zone to let a passenger out?",
        choices: [
          "Yes, outside rush hour",
          "Yes, if the hazard lights are on",
          "Yes, briefly",
          "No, zones reserved for buses and identified as such are on the prohibited list",
        ],
        correctIndex: 3,
        explanation:
          "Zones reserved for buses and marked as such are among the places where stopping and parking are prohibited, alongside loading zones and lanes reserved for certain vehicles.",
        context:
          "The one general relaxation is picking up or setting down a person with a disability where that can be done safely. Nothing similar applies to an ordinary passenger.",
        trap: "Brief and with the engine running is still stopping, which is what the provision prohibits.",
        excerptKey: "parking-blocking",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s5_31",
        topic: "safety",
        question: "You are following a vehicle on a wet road and the driver behind is tailgating you. What does the SAAQ's guide advise?",
        choices: [
          "Speed up to open a gap behind",
          "Move onto the shoulder and let them by",
          "Brake gently to warn them",
          "Leave even more space in front of you",
        ],
        correctIndex: 3,
        explanation:
          "Increase the space ahead of you. That gives you the room the tailgater has taken away, and it often prompts them to pass.",
        context:
          "If they keep sitting on your bumper, the guide says to pull off the road as soon as you can safely. Checking the mirrors regularly is how you notice the problem at all.",
        trap: "Brake-checking a tailgater removes the only margin you still control, and the collision that follows is behind you at your speed.",
        excerptKey: "tailgater-strategy",
        sourceLabel: "Driving a Passenger Vehicle - Chapter 4: Sharing the Road",
        sourceUrl: DPV,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_32",
        topic: "signals",
        question: "You approach an intersection where a vehicle is stopped in the lane ahead with its lane signal showing a horizontal yellow arrow beside a red X. What should you do?",
        choices: [
          "Change lanes with caution in the direction the arrow points",
          "Sound the horn and pass on the right",
          "Reverse and take another route",
          "Stop behind the vehicle and wait for the signal to change",
        ],
        correctIndex: 0,
        explanation:
          "The flashing yellow horizontal arrow tells you to change lanes with caution, to the left or right as it points, because of a lane closure ahead. The red X closes the lane you are in.",
        context:
          "Lane use signals are common on bridges and on reversible-lane roads. The green downward arrow is the only one of the three that says the lane under it is open to you.",
        trap: "Waiting under a red X is not obedience. The signal is telling you to leave that lane, not to hold in it.",
        excerptKey: "lane-yellow-arrow",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s5_33",
        topic: "rules",
        question: "You are approaching a work site where the roadway narrows and a worker is directing traffic with a paddle. Whose instruction governs?",
        choices: [
          "The direction of the majority of vehicles",
          "The posted orange speed limit",
          "The flagperson's",
          "The pavement markings",
        ],
        correctIndex: 2,
        explanation:
          "A flagperson's orders must be obeyed, and disobeying them carries $300 to $600 and four demerit points on top of anything else.",
        context:
          "The paddle shows stop on one face and proceed on the other, with an arm signal for slow down. The orange signs still apply, but a person directing traffic overrides what the markings would otherwise say.",
        trap: "Following the car in front is the reflex in a work zone, and the car in front may be the one that missed the signal.",
        excerptKey: "flagperson-ahead-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s5_34",
        topic: "sharing",
        question: "How much room must you leave when passing a cyclist on a road posted at 70 km/h?",
        choices: [
          "0.5 metres",
          "1 metre",
          "1.5 metres",
          "2 metres",
        ],
        correctIndex: 2,
        explanation:
          "One and a half metres where the limit is over 50 km/h, and one metre where it is 50 or less. If the room is not there, you stay behind until it is.",
        context:
          "The same distances apply to passing a pedestrian walking on the roadway or the shoulder. Passing a cyclist too closely in a travel lane carries two demerit points.",
        trap: "The clearance changes with the limit, not with the width of the road. On a wide 70 km/h road the requirement is still 1.5 metres.",
        excerptKey: "pass-cyclist-distance",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "qc_s5_35",
        topic: "signs",
        question: "What does a fluorescent yellow-green background on a sign indicate in Quebec?",
        choices: [
          "A work site",
          "A school zone or a school crossing",
          "An environmental protection area",
          "A cycling route",
        ],
        correctIndex: 1,
        explanation:
          "The fluorescent yellow-green background is reserved for signs marking the beginning of a school zone and for advance school zone and school crossing signs.",
        context:
          "Ordinary yellow carries general danger warnings and orange carries work sites. The three colours look similar at speed, which is why the school colour was made fluorescent.",
        trap: "Orange is work, plain yellow is danger, fluorescent yellow-green is school. Mixing them costs you a doubled fine during the school year.",
        excerptKey: "sign-colours",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the shape of the real thing: the Highway Safety Code, signs and signals, and driving behaviour, with no hints beyond what the test itself gives you.",
    questions: [
      {
        id: "qc_s6_01",
        topic: "rules",
        question: "What must a driver do when approaching a work site where an orange sign lowers the limit to 50 km/h?",
        choices: [
          "Obey it only when workers are present",
          "Obey it only during the working day",
          "Treat the number as advisory",
          "Obey it as a legal limit, with fines doubled for exceeding it",
        ],
        correctIndex: 3,
        explanation:
          "Orange work-site limits have the same legal force as white ones, and the fine for exceeding one is doubled.",
        context:
          "The zone is defined by the signs and signals, not by whether anyone is visibly working. Eleven people were killed and 744 injured in or near Quebec work zones in 2024.",
        trap: "An empty-looking work site at night is still a work zone if the signs are up.",
        excerptKey: "orange-speed-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_02",
        topic: "signals",
        question: "You face a red arrow pointing left. What does it prohibit?",
        choices: [
          "Nothing; it is advance warning",
          "Going in the direction it points",
          "All movement at the intersection",
          "Turning left without stopping first",
        ],
        correctIndex: 1,
        explanation:
          "A red arrow bars the movement it points to. Other movements at the intersection are governed by whatever other signals are showing.",
        context:
          "A yellow arrow does for its direction what a yellow light does for the whole approach, and a green arrow authorises its direction under normal green-light right-of-way rules.",
        trap: "Arrows control one movement each. Reading a red arrow as a red light stops you where you were free to go.",
        excerptKey: "red-arrow",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_03",
        topic: "safety",
        question: "What does the SAAQ recommend for a child aged 10 who is 150 cm tall?",
        choices: [
          "The adult seat belt, with the back seat recommended",
          "A rear-facing seat",
          "No restraint is needed",
          "A booster seat until age 12",
        ],
        correctIndex: 0,
        explanation:
          "The child seat requirement ends at 145 cm or 9 years, whichever comes first, so at 150 cm and 10 the adult belt is right. The SAAQ still recommends the back seat for anyone 12 or under.",
        context:
          "The belt has to cross the middle of the shoulder and the hips. If it lands on the neck or the abdomen, the child is still short enough to need a booster whatever the calendar says.",
        trap: "The law sets a floor; the fit of the belt is the real test, and a small nine-year-old can meet the age and still need the booster.",
        excerptKey: "child-back-seat-12",
        sourceLabel: "SAAQ - Child safety in cars",
        sourceUrl: CHILD,
      },
      {
        id: "qc_s6_04",
        topic: "rightOfWay",
        question: "A pedestrian has begun crossing on a green light and the light turns yellow while they are halfway. What is the driver's position?",
        choices: [
          "The pedestrian keeps the right of way until they are across",
          "The driver may proceed around them",
          "The driver may proceed if the pedestrian is beyond the centre line",
          "The pedestrian must return to the kerb",
        ],
        correctIndex: 0,
        explanation:
          "A pedestrian who has begun crossing keeps the right of way for the whole crossing. The signal change does not transfer it back to the traffic.",
        context:
          "Where pedestrian signals exist, a flashing hand asks anyone already crossing to hurry to the sidewalk or the median. Hurrying is not the same as surrendering priority.",
        trap: "Edging around a pedestrian mid-crossing is the manoeuvre that produces the collision this rule exists to prevent.",
        excerptKey: "ped-green-light-priority",
        sourceLabel: "SAAQ - Pedestrians: What the Law Says",
        sourceUrl: PED,
      },
      {
        id: "qc_s6_05",
        topic: "signs",
        question: "A round red sign with a white horizontal bar faces you at the entrance to a roadway. What does it mean?",
        choices: [
          "Access is prohibited for all types of vehicle",
          "No parking beyond this point",
          "The road ahead is one-way in your favour",
          "Yield to traffic entering from the right",
        ],
        correctIndex: 0,
        explanation:
          "It is the do not enter sign. Access to that roadway or lane is prohibited for every type of vehicle, because entering could put you head-on into oncoming traffic.",
        context:
          "A tab beneath it spells out the meaning. It is a regulatory sign, so it carries an obligation rather than a warning, and the round red shape is what marks the family out.",
        trap: "It is easy to read as a parking sign at a glance. The consequence of getting it wrong is a head-on collision, which is why the handbook says so in as many words.",
        excerptKey: "do-not-enter-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_06",
        topic: "impairment",
        question: "Which of these is enough for a police officer in Quebec to demand a breath sample?",
        choices: [
          "Nothing more than the fact that you are driving a vehicle",
          "A prior conviction",
          "A passenger's complaint",
          "A collision must have occurred",
        ],
        correctIndex: 0,
        explanation:
          "At any time you are driving, an officer can order you to blow into an approved screening device. No prior suspicion of drinking is needed for that demand.",
        context:
          "If they suspect drugs or medication, they can require physical coordination tests or a saliva test, and those results are enough to support an arrest and a blood demand.",
        trap: "The threshold people imagine, that the officer must first see bad driving, is not the law for the screening demand.",
        excerptKey: "arrest-grounds",
        sourceLabel: "SAAQ - Drinking and Driving: Impairment and Consequences",
        sourceUrl: ALCOHOL,
      },
      {
        id: "qc_s6_07",
        topic: "rules",
        question: "How should a driver treat a broken line beside a solid line when the solid line is on their side?",
        choices: [
          "Passing is not allowed from that side",
          "Passing is allowed for slow vehicles only",
          "The lines have no meaning for passing",
          "Passing is allowed if the road is clear",
        ],
        correctIndex: 0,
        explanation:
          "The broken line has to be on your side at the start of the manoeuvre. Solid on your side means no pass.",
        context:
          "White combined lines separating one-way lanes work the same way. Where the pass is allowed, it must be finished before the broken line ends.",
        trap: "Both lines are visible from both sides, and the rule turns on which one is nearer you.",
        excerptKey: "combined-lines",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_08",
        topic: "parking",
        question: "You park facing uphill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Straight ahead",
          "Toward the curb, so the car rolls into it",
          "It does not matter with the parking brake on",
          "Away from the curb, so the car rolls back to it",
        ],
        correctIndex: 3,
        explanation:
          "Turn them so that if the car moves, its front travels toward the nearest curb. Facing uphill the car would roll backwards, so the wheels point away from the curb for the front to swing into it.",
        context:
          "The rule is stated once, by outcome, and covers both slopes. The parking brake goes on either way, and the vehicle sits within 30 cm of the edge facing the flow of traffic.",
        trap: "Learning it as two separate directions is how people get one of the two backwards. Work it out from where the car would end up.",
        excerptKey: "park-on-slope",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_09",
        topic: "signals",
        question: "A pedestrian signal shows a walking silhouette and an audio tone is sounding continuously. What does the tone mean?",
        choices: [
          "The crossing is authorised",
          "A vehicle is turning across the crosswalk",
          "The signal is out of order",
          "The crossing time is nearly over",
        ],
        correctIndex: 0,
        explanation:
          "The continuous tone runs while the silhouette is lit, which is the phase that authorises the crossing. When the silhouette flashes the tone starts beeping instead.",
        context:
          "The audio signal exists for visually impaired pedestrians. Drivers turning right across the crosswalk still have to yield to anyone the signal has authorised.",
        trap: "Continuous and beeping mean different things, and it is the beeping that means time is running out.",
        excerptKey: "pedestrian-silhouette",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_10",
        topic: "sharing",
        question: "You are driving alongside a heavy vehicle on a three-lane autoroute and cannot complete the pass quickly. What should you do?",
        choices: [
          "Move closer to its cab",
          "Flash your headlights and wait",
          "Hold your position beside it so the driver can see you",
          "Avoid staying alongside it, since the driver cannot see you there",
        ],
        correctIndex: 3,
        explanation:
          "The sides of a heavy vehicle are blind spots. Taking a long time to get past leaves you in an area the driver's mirrors do not reach.",
        context:
          "The other four situations are cutting in front, following too closely behind, sitting in the blind spot at the rear, and being beside the vehicle as it moves left or right. Making sure the driver has seen you once you finish the pass is part of it.",
        trap: "Being visible in a mirror for a moment does not mean being seen. The blind spot is where the mirror simply does not look.",
        excerptKey: "heavy-blind-spots",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_11",
        topic: "speed",
        question: "It is raining hard and the posted limit is 90 km/h. What does the Highway Safety Code require?",
        choices: [
          "You must slow down, because visibility is reduced",
          "You must slow to 70 km/h",
          "You must switch on hazard lights and continue",
          "You may drive at 90 as long as you are in control",
        ],
        correctIndex: 0,
        explanation:
          "Reduced visibility from darkness, fog, rain or other precipitation, or a slippery or uncleared surface, all require you to slow down. The posted number is a ceiling for good conditions.",
        context:
          "Failing to adapt your driving is an offence in its own right, at $60 plus costs and two demerit points. The driving guide adds that maximum limits are only valid under normal conditions.",
        trap: "Staying at the limit in heavy rain feels lawful because you are under the number. The Code asks for the number you can actually manage.",
        excerptKey: "winter-adapt-driving",
        sourceLabel: "SAAQ - Winter Driving",
        sourceUrl: WINTER,
      },
      {
        id: "qc_s6_12",
        topic: "safety",
        question: "What is the correct headrest position?",
        choices: [
          "As high as it will go",
          "As low as it will go",
          "Middle of the headrest level with your eyes or the top of your ears",
          "Top of the headrest level with your shoulders",
        ],
        correctIndex: 2,
        explanation:
          "The middle of the headrest sits level with your eyes or the top of your ears, and no more than seven centimetres behind your head.",
        context:
          "A headrest sitting behind the neck lets the head snap backwards in a rear-end collision, which is the whiplash mechanism it is meant to stop.",
        trap: "Comfort pulls the headrest down, and low is precisely the setting that does nothing.",
        excerptKey: "headrest-7-cm",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_13",
        topic: "rules",
        question: "You want to enter a traffic circle but a vehicle is approaching from your left inside the circle. What must you do?",
        choices: [
          "Sound the horn and enter",
          "Enter and stay in the outer lane",
          "Enter quickly ahead of it",
          "Be prepared to come to a complete stop",
        ],
        correctIndex: 3,
        explanation:
          "Slow on the approach and be ready to stop completely, either for a pedestrian or for a vehicle already in the circle to your left. The vehicle inside has the right of way.",
        context:
          "The aim is still to merge without stopping wherever a gap allows, since stopping every time disrupts the flow as much as not slowing at all. Passing and stopping inside the circle are prohibited except in an emergency.",
        trap: "Entering ahead of a vehicle already circulating is the error the yield sign at the entry exists to prevent.",
        excerptKey: "traffic-circle-def",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_14",
        topic: "signs",
        question: "What does a sign warning of a divided roadway ahead tell you to do?",
        choices: [
          "Enter the divided section from the right only",
          "Prepare to stop",
          "Expect oncoming traffic in your lane",
          "Keep left of the median",
        ],
        correctIndex: 0,
        explanation:
          "A divided roadway must be entered by the right. The matching sign at the far end warns that the division ends and two-way traffic resumes.",
        context:
          "A separate sign shows an obstacle that may be passed on either side. Getting the two confused sends you up the wrong carriageway.",
        trap: "The pictogram of a road splitting looks like a choice. It is an instruction about which half is yours.",
        excerptKey: "divided-roadway-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_15",
        topic: "licensing",
        question: "How long must you have held a Quebec learner's licence before you may sit the SAAQ knowledge test?",
        choices: [
          "6 months",
          "10 months",
          "12 months",
          "18 months",
        ],
        correctIndex: 1,
        explanation:
          "Ten months with the learner's licence, and an appointment. The road test then waits until twelve months.",
        context:
          "The learner's licence itself is valid for 18 months and can be renewed for another 12. Failing either test means waiting at least 28 days before another attempt.",
        trap: "Ten and twelve are two different gates, and swapping them costs a learner two months of waiting or a refused appointment.",
        excerptKey: "knowledge-test-10-months",
        sourceLabel: HB_DRIVER,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_16",
        topic: "rightOfWay",
        question: "You are turning left from a two-way road onto a one-way road. Which lane do you enter?",
        choices: [
          "The far left lane of the one-way road",
          "The far right lane",
          "Whichever lane is clear",
          "The centre lane",
        ],
        correctIndex: 0,
        explanation:
          "Move over to the left lane or the designated turning lane, go straight to where the roadways meet, and then enter the far left lane of the one-way road.",
        context:
          "Turning from a one-way onto a one-way follows the same shape: far left lane out, far left lane in. Where two turning lanes are provided, each one feeds the corresponding lane on the other road.",
        trap: "Swinging into the nearest lane on a one-way street cuts across whoever is turning beside you.",
        excerptKey: "turn-as-soon-as-clear",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_17",
        topic: "impairment",
        question: "How does the SAAQ describe the effect of mixing medication with alcohol or drugs?",
        choices: [
          "There is no measurable interaction",
          "The effects cancel each other out",
          "The effects add up and amplify each other",
          "Only the strongest substance matters",
        ],
        correctIndex: 2,
        explanation:
          "The effects add together and amplify one another, which considerably increases the risk of a fatal collision.",
        context:
          "Fatigue belongs in the same list. Alcohol, drugs, medication and tiredness compound rather than compete, which is why the SAAQ names the combination separately.",
        trap: "Small doses of two different things feel safer than a large dose of one, and the pharmacology runs the other way.",
        excerptKey: "mixing-substances",
        sourceLabel: "SAAQ - Drugs and Medication",
        sourceUrl: DRUGS,
      },
      {
        id: "qc_s6_18",
        topic: "signals",
        question: "What does a green downward arrow over a lane mean?",
        choices: [
          "You may use the lane beneath the signal",
          "The lane is closed 500 metres ahead",
          "Traffic in the lane must turn",
          "The lane is reserved for buses",
        ],
        correctIndex: 0,
        explanation:
          "It opens the lane under it to you. The red X closes it entirely, and the flashing yellow horizontal arrow tells you which way to move because of a closure ahead.",
        context:
          "Lane use signals are hung over one or more lanes, and they are what makes a reversible lane workable: the direction that gets the green arrow changes with the traffic.",
        trap: "The three symbols are one system. Knowing the X without the arrow leaves you guessing at half of it.",
        excerptKey: "lane-red-x",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_19",
        topic: "rules",
        question: "May you drive on the shoulder to get around a vehicle waiting to turn left?",
        choices: [
          "Yes, if the shoulder is clear",
          "Yes, at low speed",
          "No, except in a case of necessity or where a sign authorises it",
          "Yes, if the vehicle has been waiting more than ten seconds",
        ],
        correctIndex: 2,
        explanation:
          "The shoulder is barred except in necessity, such as a closed or obstructed lane or an emergency, or where a sign or signal allows it.",
        context:
          "Passing on the right within the roadway is permitted when the vehicle ahead is turning left or heading for an exit ramp, or is working in the left lane. That does not extend to leaving the roadway.",
        trap: "The left-turning vehicle is the situation people cite to justify this, and it is precisely the situation the roadway rule already covers without the shoulder.",
        excerptKey: "shoulder-driving-prohibited",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_20",
        topic: "safety",
        question: "What does the driving guide say about following distance in the city under normal, dry conditions?",
        choices: [
          "One second per 10 km/h",
          "Two or more seconds",
          "Three or more seconds",
          "Four or more seconds",
        ],
        correctIndex: 3,
        explanation:
          "Four or more seconds in the city, and six or more on the highway. Both are longer than the two-second rule commonly taught elsewhere.",
        context:
          "The interval is measured to a fixed point: when the car ahead passes it, you count until you reach it. Poor weather, poor visibility and worn tires all mean adding to the count.",
        trap: "Quebec's figures are its own. Using another jurisdiction's two-second rule leaves you short on both counts.",
        excerptKey: "city-four-seconds",
        sourceLabel: "Driving a Passenger Vehicle - Chapter 4: Sharing the Road",
        sourceUrl: DPV,
        commonlyMissed: true,
      },
      {
        id: "qc_s6_21",
        topic: "signs",
        question: "What is a sign showing three chevrons in a curve telling you?",
        choices: [
          "The curve is extremely sharp",
          "A passing lane begins",
          "The shoulder is unpaved",
          "The road is closed",
        ],
        correctIndex: 0,
        explanation:
          "Chevron alignment markers placed in a curve warn that it is extremely sharp. Delineators along the edge guide you through it at night and in poor visibility.",
        context:
          "A directional arrow marks a particularly hazardous point in a very sharp curve or at a T-intersection. The curve warning signs proper are the yellow diamonds that come earlier.",
        trap: "Chevrons look decorative at speed. They are placed only where the curve is bad enough to need them.",
        excerptKey: "delineators",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_22",
        topic: "parking",
        question: "How close to a police or fire station may you stop on the same side of the street?",
        choices: [
          "3 metres",
          "5 metres",
          "8 metres",
          "10 metres",
        ],
        correctIndex: 1,
        explanation:
          "Five metres on the same side, and eight metres if you are across the street facing the building.",
        context:
          "The rest of the list runs to three metres from a hydrant and five from an intersection, crosswalk, bicycle crossing or level crossing. Sidewalks, medians and traffic circles are prohibited outright.",
        trap: "The eight-metre figure only applies from the opposite side, which is the half people forget.",
        excerptKey: "hsc-parking-distances",
        sourceLabel: "Highway Safety Code, section 386",
        sourceUrl: HSC,
      },
      {
        id: "qc_s6_23",
        topic: "sharing",
        question: "A group of cyclists is coming toward you on a road with one lane each way. What does the Code require?",
        choices: [
          "Stop until they have passed",
          "Slow down and maintain a buffer lane",
          "Move onto the shoulder",
          "Nothing beyond normal care",
        ],
        correctIndex: 1,
        explanation:
          "Where the group is travelling against the flow you are in, you slow down and keep a buffer lane between you and them.",
        context:
          "You may not pass a group of cyclists at all on a road with one lane in each direction unless a peace officer authorises it. On a multi-lane road you may, after slowing and moving into another lane going your way.",
        trap: "The buffer-lane duty applies to oncoming groups, which is easy to miss because most cyclist rules are written about passing.",
        excerptKey: "cyclist-group-no-pass",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_24",
        topic: "rules",
        question: "What must you check before entering a level crossing, even with no train in sight?",
        choices: [
          "That the crossing surface is dry",
          "That there is enough space beyond the crossing to clear it completely",
          "That your headlights are on",
          "That the gates are painted red and white",
        ],
        correctIndex: 1,
        explanation:
          "Never enter unless you can get all the way across. Stopping on the tracks because the traffic ahead has not moved is what the rule prevents.",
        context:
          "When lights flash, a gate comes down or a railway employee signals, you stop at least five metres from the rail. Buses, minibuses and vehicles carrying hazardous material stop at every crossing regardless.",
        trap: "An empty track is not the question. The question is whether the far side has room for your car.",
        excerptKey: "level-crossing-clear-space",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_25",
        topic: "rightOfWay",
        question: "You are turning left and a cyclist is crossing the road you are turning into. What is the order of priority?",
        choices: [
          "Oncoming traffic, then you, then the cyclist",
          "Whoever entered the intersection first",
          "The cyclist, then oncoming traffic, then you",
          "You, then the cyclist",
        ],
        correctIndex: 2,
        explanation:
          "Turning left, you yield to pedestrians and cyclists crossing the road you are entering and to any oncoming vehicle. You go last.",
        context:
          "The handbook illustrates it with three parties: the turning driver yields to the oncoming vehicle, to the pedestrian and to the vehicle already through. A green light does not change any of it.",
        trap: "Clearing the oncoming traffic feels like the hard part, and the cyclist crossing the far side is the one people forget once the gap appears.",
        excerptKey: "left-turn-yield-oncoming",
        sourceLabel: HB_RULES,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_26",
        topic: "licensing",
        question: "What must a driver carry, beyond a valid licence, when driving in Quebec?",
        choices: [
          "A spare set of keys",
          "A first aid kit",
          "The vehicle registration certificate and proof of insurance",
          "A copy of the Highway Safety Code",
        ],
        correctIndex: 2,
        explanation:
          "A valid and signed registration certificate and valid proof of insurance coverage, plus a lease contract or written proof of loan where the vehicle is not yours.",
        context:
          "The same documents are required on private roads open to public traffic, on logging roads and in shopping centre parking lots. They must be produced to a peace officer on demand.",
        trap: "Insurance details stored on a phone are a problem where the phone cannot lawfully be handled. Paper is what the SAAQ's own road test instructions ask for.",
        excerptKey: "documents-to-carry",
        sourceLabel: HB_DRIVER,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_27",
        topic: "signals",
        question: "You come to an intersection where the traffic lights are flashing red in all directions. How do you proceed?",
        choices: [
          "Slow down without stopping",
          "Wait for the lights to return to normal",
          "Proceed as if you had a green light",
          "Stop, then yield to any vehicle in or close to the intersection",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is a stop followed by a yield to any vehicle in the intersection or close enough that going would risk a collision.",
        context:
          "That is the same duty as a stop sign, which is why flashing reds are commonly installed with them. Lights that are dead rather than flashing are treated as an all-way stop too.",
        trap: "Flashing red and flashing yellow are opposite instructions on the same pole. Only one of them requires a stop.",
        excerptKey: "flashing-red",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_28",
        topic: "safety",
        question: "What should a driver do when a warning sign announces fog and its flashing lights are lit?",
        choices: [
          "Slow down; the flashing lights mean fog is actually present",
          "Continue at the posted speed",
          "Stop on the shoulder until it clears",
          "Use high beams for maximum reach",
        ],
        correctIndex: 0,
        explanation:
          "The sign warns that fog is possible and the flashing lights confirm it is there now. Reduced visibility requires you to slow down under the Code.",
        context:
          "Passing should be avoided in fog altogether, and the following interval lengthened. Stopping on the shoulder is prohibited on the autoroute and dangerous elsewhere.",
        trap: "High beams reflect off fog and make it worse. Low beams are what work.",
        excerptKey: "fog-warning-sign",
        sourceLabel: HB_SIGNS,
        sourceUrl: HB,
      },
      {
        id: "qc_s6_29",
        topic: "emergencies",
        question: "A police vehicle is stopped on the right lane of a two-lane highway with its lights flashing. What does the Move-Over Law require?",
        choices: [
          "Move into the other lane if safe, and otherwise stop and wait",
          "Reverse and take another route",
          "Stop level with it and offer help",
          "Pass slowly in the same lane",
        ],
        correctIndex: 0,
        explanation:
          "Slow down, change lanes once you are sure it is safe, and if changing lanes is not safe, stop and wait until it is.",
        context:
          "On a two-way road you also yield to any vehicle coming the other way before you move across. Failing to comply costs $200 to $300 and four demerit points.",
        trap: "Squeezing past in the same lane is what the law was written to stop. The workers are standing in the space you would use.",
        excerptKey: "moveover-change-lane",
        sourceLabel: "SAAQ - Move-Over Law",
        sourceUrl: MOVEOVER,
      },
      {
        id: "qc_s6_30",
        topic: "impairment",
        question: "You will be driving home late after a party. What does the SAAQ suggest?",
        choices: [
          "Have your last drink an hour before leaving",
          "Eat a heavy meal before driving",
          "Arrange the ride before the evening starts",
          "Wait until you no longer feel the effects",
        ],
        correctIndex: 2,
        explanation:
          "Only time removes alcohol, so the answer is to plan the trip home in advance: a designated driver, a taxi or rideshare, public transit, staying over, or a drive-home service.",
        context:
          "Stopping serving an hour before the end of an evening is advice for a host, not a way for a guest to become fit to drive. Food slows absorption without preventing a high reading.",
        trap: "Waiting until you feel fine is the least reliable test there is, and regular drinkers are the worst judges of it.",
        excerptKey: "only-time-alcohol",
        sourceLabel: "SAAQ - Drinking and Driving: Impairment and Consequences",
        sourceUrl: ALCOHOL,
      },
    ],
  },
];
