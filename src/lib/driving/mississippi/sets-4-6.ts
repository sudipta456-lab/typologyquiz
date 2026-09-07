import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing rules as sets-1-3.ts: the Mississippi Driver's
// License Manual revised December 2024 for the rules of the road, the Driver
// Service Bureau's own pages for licensing and testing, and Section 63-1-21 of
// the Mississippi Code as amended by House Bill 550 of 2021 for the under-18
// curfew the manual never mentions.
//
// Set 5 was written after reading what Mississippi learners say they failed on.
// Four themes came back repeatedly and each has its own cluster here: railroad
// crossings, school bus procedure, child restraints, and the fact that the real
// exam words a rule differently from the sentence people memorised. Nothing was
// taken from anyone's recollection of an exam item - the forum threads were
// used only to find out WHICH rules trip people up, and every question was then
// written from the manual. See docs/driving/research/mississippi.md.
const HB =
  "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf";
/** The manual's printed page numbers match the PDF's own, so no offset. */
const hb = (page: number) => `${HB}#page=${page}`;
const PERMIT = "https://www.driverservicebureau.dps.ms.gov/Drivers/Learners_Permit";
const FAQ = "https://www.driverservicebureau.dps.ms.gov/frequently-asked-questions";
const LAW = "https://billstatus.ls.state.ms.us/documents/2021/html/HB/0500-0599/HB0550SG.htm";

export const mississippiSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "The chapters people skim - vehicle equipment, documents, work zones, penalties and the Class D pages at the back. The Computerized Exam is drawn from the whole book, not just the rules of the road.",
    questions: [
      {
        id: "ms_s4_01",
        topic: "licensing",
        question:
          "Mississippi's squatted vehicle law bans driving a car whose front fender has been raised by how much relative to the rear?",
        choices: ["Two or more inches", "Four or more inches", "Six or more inches", "Any measurable amount"],
        correctIndex: 1,
        explanation:
          "Four inches. If altering the suspension, frame or chassis leaves the front fender four or more inches higher than the rear, the vehicle is unlawful on Mississippi streets and highways.",
        context:
          "The manual defines its terms carefully: fender height is measured vertically from the ground, through the centerline of the wheel, to the bottom of the fender, and a fender is the pressed part mounted over the wheels to cut down splashing. The nickname comes from how the car looks, sitting back on its rear tires.",
        trap: "The rule is about the difference between front and rear, not about ride height on its own. A lifted truck that is level is a different question.",
        excerptKey: "squatted-vehicle",
        sourceLabel: "Mississippi Driver's License Manual - Squatted Vehicle Law",
        sourceUrl: hb(20),
      },
      {
        id: "ms_s4_02",
        topic: "safety",
        question: "How far away must a Mississippi vehicle's horn be audible?",
        choices: ["One hundred feet", "One hundred and fifty feet", "Two hundred feet", "Five hundred feet"],
        correctIndex: 2,
        explanation:
          "Two hundred feet. The manual sets that as the equipment standard for a horn, in the same section that bans sirens, exhaust whistles and other noise-making devices.",
        context:
          "The vehicle equipment chapter is full of testable numbers: brakes that stop the car within thirty feet from 20 mph, a parking brake that does it within fifty-five, a red taillight visible from five hundred feet behind, and no more than one spotlight and three auxiliary lights, none of them red or blue.",
        trap: "Five hundred feet is the taillight and headlight figure. The horn's number is two hundred.",
        excerptKey: "equip-horn",
        sourceLabel: "Mississippi Driver's License Manual - Vehicle Equipment",
        sourceUrl: hb(19),
      },
      {
        id: "ms_s4_03",
        topic: "rules",
        question: "What does Mississippi's distracted driving rule say about text messages?",
        choices: [
          "Writing, sending or reading a text message while driving is not allowed",
          "Texting is allowed at a red light",
          "Texting is allowed if the phone is mounted",
          "Only sending is banned, not reading",
        ],
        correctIndex: 0,
        explanation:
          "All three actions are covered - writing, sending and reading. The manual states the ban twice, and extends it to reading or posting on a social networking site from a hand-held phone.",
        context:
          "The definitions matter as much as the ban. A hand-held mobile telephone is one you use with at least one hand; a voice-operated or hands-free device lets you write, send or read without a hand except to start or stop a function. Emergency, traffic and weather alerts and navigation messages are excluded from the definition of a text message.",
        trap: "Reading is on the list. Plenty of drivers assume a glance at an incoming message is different from replying to it.",
        excerptKey: "texting-not-allowed",
        sourceLabel: "Mississippi Driver's License Manual - Avoiding Distractions",
        sourceUrl: hb(23),
      },
      {
        id: "ms_s4_04",
        topic: "signs",
        question:
          "A flagger in a Mississippi work zone signals you to stop, but the traffic signal ahead is green. What do you do?",
        choices: [
          "Follow the signal, since it outranks a person",
          "Stop only if the flagger is a police officer",
          "Proceed slowly past the flagger",
          "Follow the flagger's instructions",
        ],
        correctIndex: 3,
        explanation:
          "In a work zone the manual says traffic may be controlled by a person with a sign or flag, and you must follow their instructions.",
        context:
          "It is the same principle the manual applies to police officers: you always follow signs and signals unless someone is directing traffic, and then the directions win. Work zones may also carry temporary signals, and where a white stop line is painted you stop at it.",
        trap: "A green light is a general permission, and the person in front of you knows about the closure it cannot see.",
        excerptKey: "workzone-flagger",
        sourceLabel: "Mississippi Driver's License Manual - Work Zone Signs",
        sourceUrl: hb(33),
      },
      {
        id: "ms_s4_05",
        topic: "emergencies",
        question:
          "A truck or bus operating at night in Mississippi must carry warning devices. How many, at minimum?",
        choices: ["Two", "Three", "Four", "Six"],
        correctIndex: 1,
        explanation:
          "At least three flares, fuses, electric flares or reflectors. If the vehicle becomes disabled they go roughly a hundred feet ahead, a hundred feet behind, and one at the roadway side of the vehicle.",
        context:
          "In daylight the manual asks for red flags in those same three positions. The rule sits in the Class D chapter, which the exam draws on for anyone testing for a Class D license and which is part of the manual every applicant is told to study.",
        trap: "Three is the count and the positions are what make it work - one is useless without the other two.",
        excerptKey: "truck-warning-devices",
        sourceLabel: "Mississippi Driver's License Manual - Class D, Safety & Warning Devices",
        sourceUrl: hb(84),
      },
      {
        id: "ms_s4_06",
        topic: "licensing",
        question:
          "A Mississippi vehicle with aftermarket window tint must carry a label certifying what light transmittance?",
        choices: ["15% or more", "20% or more", "28% or more", "35% or more"],
        correctIndex: 2,
        explanation:
          "Twenty-eight percent or more. The label goes on the windshield and certifies that all the vehicle's windows meet the standard.",
        context:
          "Tinted vehicles must be inspected at an official Mississippi Window Tint Inspection Station. The compliance certificate costs $5, the decal goes on the lower left corner of the windshield, and the certificate itself lives on the dashboard or inside the dash compartment.",
        trap: "The figure is a floor on how much light gets through, so a lower percentage is a darker and less lawful film.",
        excerptKey: "tint-twenty-eight-percent",
        sourceLabel: "Mississippi Driver's License Manual - Window Tint Certificate & Decal",
        sourceUrl: hb(75),
      },
      {
        id: "ms_s4_07",
        topic: "parking",
        question:
          "You have to leave your car beside a rural Mississippi highway. From how far away must it be visible?",
        choices: [
          "At least two hundred feet in both directions",
          "At least one hundred feet in both directions",
          "At least three hundred feet ahead only",
          "Fifty feet is sufficient if the flashers are on",
        ],
        correctIndex: 0,
        explanation:
          "Two hundred feet, in both directions. The manual asks you to park so that approaching drivers can see the vehicle from that distance.",
        context:
          "Three other instructions go with it: pull all the way off the roadway, leave at least twenty feet for other vehicles to get by if you can, and at night leave the parking lights or emergency flashers on. Outside business and residential districts you are expected to park off the roadway altogether.",
        trap: "Flashers help but they do not substitute for sight lines. A car parked just over a crest is invisible whatever is blinking.",
        excerptKey: "parking-highway-steps",
        sourceLabel: "Mississippi Driver's License Manual - Parking On A Highway",
        sourceUrl: hb(60),
      },
      {
        id: "ms_s4_08",
        topic: "sharing",
        question:
          "A tractor-trailer ahead of you swings left as it approaches a side street. What should you assume?",
        choices: [
          "It is changing lanes and you may pass on the right",
          "It has drifted and you should sound your horn",
          "It is pulling over to let you by",
          "It may be setting up for a right turn, so do not pass on the right",
        ],
        correctIndex: 3,
        explanation:
          "Large vehicles need to swing left before turning right. The manual's instruction is not to pass a truck on the right if there is any possibility it is about to turn that way.",
        context:
          "The turn is one of several truck limitations the manual asks drivers to allow for: blind spots on every side, a stopping distance built for 80,000 pounds, and wind turbulence that pushes vehicles apart rather than pulling them together. When a truck passes you, you help by keeping to the far side of your lane.",
        trap: "The leftward swing looks like a lane change and is the setup for a right turn. Passing into that gap puts you between the cab and the curb.",
        excerptKey: "truck-right-turn",
        sourceLabel: "Mississippi Driver's License Manual - Road Safety With Large Vehicles",
        sourceUrl: hb(72),
        commonlyMissed: true,
      },
      {
        id: "ms_s4_09",
        topic: "impairment",
        question: "A third DUI conviction within five years in Mississippi is classified as what?",
        choices: ["A misdemeanour", "A felony", "A civil infraction", "A misdemeanour with a mandatory fine"],
        correctIndex: 1,
        explanation:
          "A felony, carrying a $2,000 to $5,000 fine and one to five years in the custody of the Department of Corrections.",
        context:
          "The first two offenses are misdemeanours: $250 to $1,000 and up to forty-eight hours in jail for the first, $600 to $1,500 and five days to six months for a second within five years. The suspension ladder runs 120 days, one year, then the whole sentence plus three years of interlock-restricted driving on release.",
        trap: "The five-year window is what makes the third offense a felony. Spacing convictions further apart changes the count.",
        excerptKey: "dui-third-felony",
        sourceLabel: "Mississippi Driver's License Manual - DUI Penalties",
        sourceUrl: hb(79),
      },
      {
        id: "ms_s4_10",
        topic: "safety",
        question: "Where does Mississippi's manual say your hands should sit on the steering wheel?",
        choices: [
          "At 10 and 2 o'clock",
          "One hand at 12 o'clock",
          "At 3 and 9 o'clock",
          "Wherever is comfortable on a straight road",
        ],
        correctIndex: 2,
        explanation:
          "Three and nine, on opposite sides of the outside of the wheel. The manual specifically says 2 and 10 is no longer recommended because of airbags.",
        context:
          "It adds the grip: firm but gentle, using the fingers rather than the palms, with thumbs up along the face of the wheel, and never turning the wheel while gripping it from the inside. All of it is airbag advice - an airbag deploys hard enough to drive a badly placed hand or thumb into your face.",
        trap: "Ten and two is what a lot of parents were taught and it is now the wrong answer on this exam.",
        excerptKey: "hands-three-nine",
        sourceLabel: "Mississippi Driver's License Manual - Before You Drive",
        sourceUrl: hb(22),
        commonlyMissed: true,
      },
      {
        id: "ms_s4_11",
        topic: "signs",
        question: "What does a blue highway sign in Mississippi indicate?",
        choices: [
          "Motorist services such as fuel, food or lodging",
          "Directional guidance and permitted movement",
          "A regulation you must obey",
          "A recreation or scenic area",
        ],
        correctIndex: 0,
        explanation:
          "Blue is Mississippi's motorist services color. Green is the color for directional guidance and permitted movement, and brown covers public recreation and scenic guidance.",
        context:
          "Eight colors run through the sign system: red for stop, green for direction, yellow for general warning, blue for services, black and white for regulation, orange for construction and brown for parks. Learning the color and the shape together is faster than memorizing each sign.",
        trap: "Green and blue both appear on interstate signs and do different jobs - green points you at places, blue at services.",
        excerptKey: "color-blue",
        sourceLabel: "Mississippi Driver's License Manual - Standard Shapes And Colors",
        sourceUrl: hb(27),
      },
      {
        id: "ms_s4_12",
        topic: "rules",
        question:
          "You are on a one-way Mississippi street and want to turn left. Which lane does the manual say to use?",
        choices: [
          "The lane next to the center of the road",
          "Any lane, since all traffic goes one way",
          "The rightmost lane",
          "The lane nearest the curb, unless markings say otherwise",
        ],
        correctIndex: 3,
        explanation:
          "On a one-way street you turn from the lane nearest the curb - the left curb for a left turn - unless pavement markings or signs permit turning from other lanes.",
        context:
          "The manual illustrates a junction of two one-way streets where turning right is permitted from one street but not the other, and turning left from one but not the other, precisely so that nobody ends up traveling the wrong way. The general instruction is to get into the correct lane early and follow the directional arrows.",
        trap: "The center-lane habit comes from two-way streets, where you turn left from the lane next to the center line. A one-way street has no center line to work from.",
        excerptKey: "one-way-turn-from-curb",
        sourceLabel: "Mississippi Driver's License Manual - One-Way Streets",
        sourceUrl: hb(54),
      },
      {
        id: "ms_s4_13",
        topic: "speed",
        question: "How fast may a Mississippi school bus travel on the interstate?",
        choices: ["45 mph", "55 mph", "65 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Sixty-five miles an hour on the interstate, against 45 mph while carrying children on a regular route.",
        context:
          "Both bus limits appear on the same page as the 15 mph school-zone maximum. It is worth knowing them as a driver, because a bus traveling at its own legal maximum on an interstate is still 5 mph below the cars around it.",
        trap: "Forty-five is the regular-route figure. The interstate is the exception, not the rule.",
        excerptKey: "speed-school-bus-interstate",
        sourceLabel: "Mississippi Driver's License Manual - Legal Speeds",
        sourceUrl: hb(41),
      },
      {
        id: "ms_s4_14",
        topic: "licensing",
        question:
          "What is the reinstatement fee in Mississippi after a suspension under the Implied Consent Law or for DUI?",
        choices: ["$25", "$100", "$175", "$250"],
        correctIndex: 2,
        explanation:
          "One hundred and seventy-five dollars. Failure to pay child support costs $25 to reinstate, and every other suspension costs $100.",
        context:
          "The Driver Service Bureau takes reinstatement payments by cashier's check only - not cash, not a money order and not a personal check - made payable to the Department of Public Safety. If your license went in lieu of bond or you failed to appear, you also need a corrected court abstract from the judge.",
        trap: "One hundred dollars is the catch-all figure for other suspensions. The DUI and Implied Consent route is the expensive one.",
        excerptKey: "reinstatement-fees",
        sourceLabel: "Mississippi Driver's License Manual - Reinstatement Of Driving Privileges",
        sourceUrl: hb(81),
      },
      {
        id: "ms_s4_15",
        topic: "emergencies",
        question: "What information does Mississippi require you to give the other driver after a collision?",
        choices: [
          "Your name, address, license plate number and insurance information",
          "Your name and phone number only",
          "Your driver's license number and nothing else",
          "Nothing until an officer arrives",
        ],
        correctIndex: 0,
        explanation:
          "Name, address, license plate number and insurance information - and the manual adds that for your own protection you should collect the same details from them.",
        context:
          "Before that comes the first duty: stop at once and help anyone injured, calling 911 if needed. When the officer arrives you show proof of insurance and the policy number. Crash reports made to law enforcement are confidential, and if you are too badly hurt to make one, a passenger may.",
        trap: "Waiting for police to handle the exchange can leave you with nothing if the other driver leaves. The duty to exchange is yours.",
        excerptKey: "accident-exchange-information",
        sourceLabel: "Mississippi Driver's License Manual - In Case Of An Accident",
        sourceUrl: hb(66),
      },
      {
        id: "ms_s4_16",
        topic: "signals",
        question:
          "A pedestrian signal starts flashing while a person is halfway across. What does Mississippi say should happen?",
        choices: [
          "They should turn back to the curb they started from",
          "They should stop where they are and wait on the median",
          "Traffic may begin to move around them",
          "They should continue crossing, since they started before it began flashing",
        ],
        correctIndex: 3,
        explanation:
          "A flashing signal means nobody new leaves the curb, but anyone who has already started continues across.",
        context:
          "The rest of the signal chapter backs it up from the driver's side: any time you travel through an intersection you yield to pedestrians, and a person in a crosswalk has the right of way whether or not it is marked. Turning back mid-crossing is more dangerous than finishing.",
        trap: "Flashing looks like a countdown to a violation. It is an instruction to people still on the curb, not to people already in the road.",
        excerptKey: "ped-signal-flashing",
        sourceLabel: "Mississippi Driver's License Manual - Pedestrian Crossing",
        sourceUrl: hb(40),
      },
      {
        id: "ms_s4_17",
        topic: "rightOfWay",
        question:
          "Your light turns green but a car is still crossing in front of you inside the intersection. Who has the right of way?",
        choices: [
          "You do, because you have the green",
          "The vehicle already inside the intersection",
          "Whichever vehicle is larger",
          "Neither, so both should stop",
        ],
        correctIndex: 1,
        explanation:
          "A vehicle already inside the intersection keeps the right of way. A green light lets you go if it is safe, and this is one of the cases where it is not.",
        context:
          "The manual repeats the point in three places - under the solid green, under the reminder at the foot of the signal pages, and in the right-of-way section, where vehicles already inside an intersection are listed alongside pedestrians in crosswalks as holding priority.",
        trap: "Green means proceed when safe, not proceed regardless. Entering on a fresh green into an occupied intersection is a common way to be at fault.",
        excerptKey: "row-bicycles",
        sourceLabel: "Mississippi Driver's License Manual - Right Of Way",
        sourceUrl: hb(55),
      },
      {
        id: "ms_s4_18",
        topic: "safety",
        question: "From how far behind must a Mississippi vehicle's taillight be visible?",
        choices: ["Two hundred feet", "Three hundred feet", "Five hundred feet", "One thousand feet"],
        correctIndex: 2,
        explanation:
          "Five hundred feet, and the taillight must be red. The manual sets the same distance as the recommendation for how far ahead your headlights should let you see a person at night.",
        context:
          "Every vehicle needs two headlights - one for a motorcycle - and at least one taillight. Beyond that you may add one spotlight and up to three auxiliary lights, none of them red or blue, and you may never have more than four lights other than headlights burning at once.",
        trap: "Five hundred feet is also the headlight dimming distance, so the number is worth learning once and applying three ways.",
        excerptKey: "equip-taillight",
        sourceLabel: "Mississippi Driver's License Manual - Vehicle Equipment",
        sourceUrl: hb(19),
      },
      {
        id: "ms_s4_19",
        topic: "sharing",
        question: "May two cyclists ride side by side on a Mississippi road?",
        choices: [
          "Yes, but they should not impede the normal and reasonable movement of traffic",
          "No, single file is required at all times",
          "Only on roads with a posted limit of 25 mph or less",
          "Only where a bike lane is marked",
        ],
        correctIndex: 0,
        explanation:
          "State law permits riding two abreast, with the qualification that riders should not impede the normal and reasonable movement of traffic.",
        context:
          "The manual asks cyclists to use common courtesy alongside their legal rights - pulling off periodically to let motorists past if traffic is having trouble getting by, and never letting a long line of cars build up behind. On a multi-lane road, cyclists ride within a single lane.",
        trap: "The permission and the qualification come as a pair. Neither one alone is the answer the manual gives.",
        excerptKey: "cyclist-two-abreast",
        sourceLabel: "Mississippi Driver's License Manual - Tips For Safer Cycling",
        sourceUrl: hb(74),
      },
      {
        id: "ms_s4_20",
        topic: "parking",
        question:
          "A car is parked at the curb on a narrow Mississippi street. May you stop and leave your car beside it?",
        choices: [
          "Yes, if you leave room for traffic to pass",
          "Yes, for up to five minutes",
          "Yes, if your flashers are on",
          "No - parking on the roadway side of a parked vehicle is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "Double parking is on Mississippi's prohibited list: you may not leave a vehicle parked and unattended on the roadway side of another vehicle stopped or parked at the edge of the road or the curb.",
        context:
          "The same list bans parking alongside any obstruction where it would add to congestion, on a sidewalk, on a crosswalk, inside an intersection, on a bridge or elevated structure, in a highway underpass, and anywhere a sign prohibits stopping.",
        trap: "Flashers do not create a parking space. They signal a problem; they do not license one.",
        excerptKey: "parking-roadway-side",
        sourceLabel: "Mississippi Driver's License Manual - Prohibited Parking",
        sourceUrl: hb(60),
      },
      {
        id: "ms_s4_21",
        topic: "licensing",
        question: "At what age may a Mississippian register as an organ donor when applying for a permit?",
        choices: ["15", "16", "17", "18"],
        correctIndex: 0,
        explanation:
          "Fifteen and above, which lines up with the minimum age for a Regular Learner's Permit, so the choice is offered the first time you apply.",
        context:
          "Under eighteen, consent from the legal next of kin is still required at the time of donation. The manual adds that anyone can donate regardless of registration, age, race or gender, and that donation never affects the quality of the treatment you receive.",
        trap: "Registering at fifteen does not remove the next-of-kin consent requirement while you are a minor.",
        excerptKey: "organ-donor-fifteen",
        sourceLabel: "Mississippi Driver's License Manual - Appendix A: Organ Donation",
        sourceUrl: hb(88),
      },
      {
        id: "ms_s4_22",
        topic: "rules",
        question: "How fast should you be going at the end of an interstate on-ramp in Mississippi?",
        choices: [
          "Well below the flow, so you can judge the gap",
          "Exactly the posted ramp speed",
          "At the speed of the interstate traffic",
          "Whatever speed lets you merge in front of the nearest car",
        ],
        correctIndex: 2,
        explanation:
          "Use the acceleration lane to reach the speed of traffic on the interstate. The manual says merging slower or faster than the flow is dangerous.",
        context:
          "The ramp itself has its own posted speed and you obey that on the way round. Then you accelerate, yield to approaching vehicles, signal, merge gradually and switch the signal off. From the other side, a driver already in the right lane is asked to merge left when it is safe so joining traffic has room.",
        trap: "Crawling to the end of the ramp is the instinct of a nervous driver and it is the more dangerous half of the manual's warning.",
        excerptKey: "interstate-merge-speed",
        sourceLabel: "Mississippi Driver's License Manual - Entering & Exiting The Interstate",
        sourceUrl: hb(69),
      },
      {
        id: "ms_s4_23",
        topic: "impairment",
        question: "What does Mississippi's manual say about smoking medical cannabis in a motor vehicle?",
        choices: [
          "It is a violation of state law and can result in arrest",
          "It is permitted if you hold a medical card",
          "It is permitted as long as the vehicle is parked",
          "It is treated as a traffic infraction rather than a criminal matter",
        ],
        correctIndex: 0,
        explanation:
          "Smoking medical cannabis in a vehicle, or being in actual physical control of one while under the influence, violates Mississippi law and can lead to arrest.",
        context:
          "The point is extended to prescription medication: driving under the influence of any drug, medical cannabis and prescription drugs included, impairs your ability and can bring an arrest. The manual also asks you to check medication labels for drowsiness before you drive.",
        trap: "A prescription or a medical card is authority to possess and use, not authority to drive impaired.",
        excerptKey: "cannabis-driving",
        sourceLabel: "Mississippi Driver's License Manual - Marijuana & The Driver",
        sourceUrl: hb(77),
      },
      {
        id: "ms_s4_24",
        topic: "signs",
        question: "A brown sign appears at a Mississippi interchange. What is it pointing you to?",
        choices: [
          "A construction zone",
          "A weigh station",
          "A hospital",
          "Public recreation or a scenic area",
        ],
        correctIndex: 3,
        explanation:
          "Brown is reserved for public recreation and scenic guidance - parks, historic sites and the like.",
        context:
          "Mississippi has more brown-sign territory than most states, with the Natchez Trace Parkway running some 350 miles through it. Colors and shapes are the manual's whole system for signs, since the country is still converting from word messages to symbols.",
        trap: "Orange is construction and brown is recreation. On a dirty windshield at dusk they are easy to confuse, which is why the manual teaches shape as well.",
        excerptKey: "color-brown",
        sourceLabel: "Mississippi Driver's License Manual - Standard Shapes And Colors",
        sourceUrl: hb(27),
      },
      {
        id: "ms_s4_25",
        topic: "emergencies",
        question:
          "Which of these costs a Mississippi driver their license for a full year on conviction?",
        choices: [
          "Two speeding tickets in a year",
          "Failure to stop and render aid after a crash",
          "Driving without proof of insurance",
          "Parking on a blind curve",
        ],
        correctIndex: 1,
        explanation:
          "Failing to stop and render aid is on the revocation list, which costs a year. So do manslaughter or negligent homicide from a crash, any felony involving a motor vehicle, perjury to the Department, and three reckless driving convictions in twelve months.",
        context:
          "Revocation is separate from suspension. The Commissioner of Public Safety may suspend without a hearing for things like habitual reckless driving, frequent serious violations, a DUI conviction in another state or unpaid child support. Revocation is the mandatory one-year category.",
        trap: "Three reckless driving convictions in twelve months is on the same list, so the count matters as much as the offense.",
        excerptKey: "revocation-one-year",
        sourceLabel: "Mississippi Driver's License Manual - Revocation Of License",
        sourceUrl: hb(80),
      },
      {
        id: "ms_s4_26",
        topic: "safety",
        question: "How often does Mississippi's manual tell you to stop on a long drive?",
        choices: [
          "Every fifty miles",
          "Every three hours",
          "About every hundred miles or two hours",
          "Only when you feel tired",
        ],
        correctIndex: 2,
        explanation:
          "About every hundred miles or two hours. The manual repeats the figure in two places, once under fatigue and once under long-distance driving.",
        context:
          "It sits with the rest of the fatigue advice: most people need seven to nine hours of sleep to stay properly alert, a travel companion helps, and you should check medication labels for drowsiness. Fatigue affects your vision and lengthens the time you take to decide.",
        trap: "Waiting until you feel tired is too late. Fatigue impairs the judgement you would use to notice it.",
        excerptKey: "fatigue-hundred-miles",
        sourceLabel: "Mississippi Driver's License Manual - Safe Driving Basics",
        sourceUrl: hb(21),
      },
      {
        id: "ms_s4_27",
        topic: "speed",
        question:
          "A truck driver outside a business or residential district must not follow another truck within what distance?",
        choices: ["Three hundred feet", "One hundred feet", "Five hundred feet", "Two hundred feet"],
        correctIndex: 0,
        explanation:
          "Three hundred feet, except while overtaking. The rule is in the Class D chapter and applies outside business and residential districts.",
        context:
          "The gap exists so that other traffic can get in and out between trucks rather than facing a solid convoy. It runs alongside the ordinary car-length ladder that every Mississippi driver follows - one car length per 10 mph, and seven at 70 on the interstate.",
        trap: "The three-hundred-foot rule is about one truck following another. It does not replace the car-length ladder for ordinary vehicles.",
        excerptKey: "truck-following-three-hundred",
        sourceLabel: "Mississippi Driver's License Manual - Class D, Following Distance",
        sourceUrl: hb(87),
      },
      {
        id: "ms_s4_28",
        topic: "signals",
        question:
          "A police officer waves you through an intersection where the light is red. What does Mississippi require?",
        choices: [
          "Wait for the green, since signals are the law",
          "Proceed only if the officer is in uniform",
          "Sound the horn to acknowledge, then wait",
          "Follow the officer's directions",
        ],
        correctIndex: 3,
        explanation:
          "Signs and signals control traffic unless an officer is directing it, and then the officer's directions must be followed.",
        context:
          "The manual describes the standard gestures so you can read them: a raised palm and a long whistle blast to stop, a beckoning hand and a series of short blasts to go, and a flashlight at night. It is the same override that lets a flagger in a work zone stop you at a green light.",
        trap: "Following the light instead of the officer is how you end up in the middle of a junction the officer is trying to clear for something you cannot see.",
        excerptKey: "traffic-officer",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Officers",
        sourceUrl: hb(40),
      },
      {
        id: "ms_s4_29",
        topic: "rightOfWay",
        question: "What does Mississippi's manual say about yielding to a funeral procession?",
        choices: [
          "It is required by statute",
          "It applies only where a police escort is present",
          "It is not required by law, but common courtesy",
          "It applies only on state highways",
        ],
        correctIndex: 2,
        explanation:
          "The manual is careful here: yielding to a funeral procession is not required by law in Mississippi, it is common courtesy.",
        context:
          "There is a related rule that is binding, though, and it points the other way - if you are part of a motorcade or funeral procession you leave enough space between cars for other vehicles to pull into, and you keep the speed even so the line moves smoothly.",
        trap: "Courtesy and requirement are not the same thing, and the manual chooses its words deliberately. This is one of the places where it says a practice is not required by law.",
        excerptKey: "funeral-procession",
        sourceLabel: "Mississippi Driver's License Manual - Yielding Right-Of-Way To Pedestrians",
        sourceUrl: hb(59),
        commonlyMissed: true,
      },
      {
        id: "ms_s4_30",
        topic: "licensing",
        question: "Which of these requires a Commercial Driver's License in Mississippi?",
        choices: [
          "Any pick-up truck used for work",
          "A vehicle designed to carry more than fifteen people including the driver",
          "Any vehicle over 10,000 pounds",
          "Any vehicle towing a trailer",
        ],
        correctIndex: 1,
        explanation:
          "More than fifteen persons including the driver is one of the four CDL triggers, alongside a single vehicle over 26,000 pounds GVWR, certain trailer combinations, and any vehicle needing hazardous materials placards.",
        context:
          "Below that sits the Class D license, for driving commercially in a vehicle under 26,000 pounds. The manual is explicit that a pick-up truck never needs a commercial license regardless of what it is used for, unless it is carrying placardable quantities of hazardous material.",
        trap: "The pick-up truck answer is the one the manual singles out to correct, because so many people assume work use is what triggers the requirement.",
        excerptKey: "cdl-required",
        sourceLabel: "Mississippi Driver's License Manual - Commercial Driver's License (CDL)",
        sourceUrl: hb(87),
      },
      {
        id: "ms_s4_31",
        topic: "parking",
        question:
          "Traffic is stopped ahead and you would come to rest across a crosswalk. What does Mississippi expect?",
        choices: [
          "Stop before you reach the crosswalk and wait for traffic to move",
          "Stop on the crosswalk but leave a gap for pedestrians",
          "Continue into the intersection to clear the crosswalk",
          "Reverse to the previous junction",
        ],
        correctIndex: 0,
        explanation:
          "The manual gives the same instruction twice: when traffic is blocked ahead, stop before you reach the crosswalk and wait, rather than stopping across it.",
        context:
          "Never stopping on any part of a crosswalk is a standing rule in Mississippi, and parking on one is separately prohibited. Crosswalks exist at intersections whether painted or not, and the manual counts them as part of the intersection by definition.",
        trap: "Rolling forward to keep up with the car in front is what puts you on the crosswalk. The instruction is to stop short and wait.",
        excerptKey: "turn-blocked-intersection",
        sourceLabel: "Mississippi Driver's License Manual - Turning At Intersections",
        sourceUrl: hb(50),
      },
      {
        id: "ms_s4_32",
        topic: "rules",
        question: "Someone throws a drinks can out of your car window. Who is in violation in Mississippi?",
        choices: [
          "Only the passenger who threw it",
          "Nobody, unless it lands on private property",
          "Only the vehicle's registered owner",
          "The operator or the owner of the vehicle, or both",
        ],
        correctIndex: 3,
        explanation:
          "When solid waste is thrown or discarded from a motor vehicle, the operator or the owner of the vehicle, or both, are deemed in violation.",
        context:
          "The prohibition covers public highways, roads, streets, alleys and their rights of way, the waters of the state, and private property without the owner's written consent. The manual's opening pages make the same point in plainer language and ask you to keep a trash bag in the car.",
        trap: "The rule reaches past whoever's hand it left. Driving the vehicle is enough to be deemed in violation.",
        excerptKey: "littering-from-vehicle",
        sourceLabel: "Mississippi Driver's License Manual - Littering",
        sourceUrl: hb(82),
      },
      {
        id: "ms_s4_33",
        topic: "sharing",
        question:
          "You come up behind a horse-drawn buggy on a rural Mississippi road. What rights does it have?",
        choices: [
          "It must pull over to let motor traffic past",
          "The same rights to use the road as a motor vehicle, under the same rules",
          "It may use the road only in daylight",
          "It must stay on the shoulder",
        ],
        correctIndex: 1,
        explanation:
          "Animal-drawn vehicles and horseback riders have the same rights to the road as a motor vehicle and must follow the same rules of the road.",
        context:
          "Two pieces of advice go with it. Do not sound the horn or rev the engine, because that can startle the horse into a crash. And anticipate left turns into fields and driveways, since that is where these vehicles are usually going. Warning signs are posted where you are likely to meet them.",
        trap: "The slow-moving vehicle emblem marks a speed, not a lesser status. The buggy has as much right to the lane as you do.",
        excerptKey: "animal-drawn-vehicles",
        sourceLabel: "Mississippi Driver's License Manual - Slow-Moving Vehicles",
        sourceUrl: hb(34),
      },
      {
        id: "ms_s4_34",
        topic: "safety",
        question: "How does Mississippi's manual tell you to check tire tread?",
        choices: [
          "Measure the depth with a ruler at three points",
          "Look for the wear bars between the tread blocks",
          "Put a penny head-down in the shallowest groove and see if the tread covers Lincoln's head",
          "Press a coin into the sidewall and check for cracking",
        ],
        correctIndex: 2,
        explanation:
          "The penny test. Put Lincoln's head into the shallowest groove you can find - if any part of his head is covered, there is enough tread left.",
        context:
          "The manual pairs it with a pressure check against the figure in the owner's manual or on the driver's door jamb, done once a month or before a long trip. Tires must be properly inflated, have good tread and be free of breaks, cuts and decay.",
        trap: "The test only means something at the shallowest point. Checking where the tread is deepest tells you nothing about the tire.",
        excerptKey: "tire-penny-test",
        sourceLabel: "Mississippi Driver's License Manual - Safety Tip, Tire Tread",
        sourceUrl: hb(21),
      },
      {
        id: "ms_s4_35",
        topic: "signs",
        question:
          "A yellow diamond shows two arrows pointing in opposite directions above the words DIVIDED HIGHWAY ENDS. What should you expect?",
        choices: [
          "Two-way traffic ahead, on the same roadway",
          "A lane closure with a merge to the left",
          "A roundabout ahead",
          "The road becomes one-way",
        ],
        correctIndex: 0,
        explanation:
          "The divider is about to disappear and you will be sharing the roadway with oncoming traffic again.",
        context:
          "Its opposite number warns that a divided highway begins ahead. Both belong to the family of warning diamonds that tell you what the road is about to do: lanes ending and merging, side roads entering, T-intersections, traffic circles and new lanes joining without a merge.",
        trap: "It is easy to read the two arrows as a lane-splitting instruction. They mean traffic will be coming toward you.",
        excerptKey: "sign-divided-highway-ends",
        sourceLabel: "Mississippi Driver's License Manual - Warning Signs",
        sourceUrl: hb(30),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Written from what Mississippi learners say went wrong: railroad crossings, school bus procedure, child restraints, and the rules where the exam's wording is not the wording people memorised.",
    questions: [
      {
        id: "ms_s5_01",
        topic: "sharing",
        question:
          "A school bus stops with red lights flashing in a loading zone beside the highway where pedestrians are not allowed to cross. What must you do?",
        choices: [
          "Stop ten feet back as usual",
          "Stop only if you are behind the bus",
          "You do not have to stop",
          "Slow to 15 mph and pass",
        ],
        correctIndex: 2,
        explanation:
          "The manual carves this out: where the bus stops in a loading zone that is part of or beside the highway, and pedestrians are not allowed to cross the roadway there, you do not have to stop.",
        context:
          "It is one of exactly two exceptions to the school bus rule. The other is the divided highway of four or more lanes, and it only helps a driver going the opposite way. Everywhere else the rule binds from both directions and lasts until the children have crossed, the bus is moving, the lights are off and the stop arm is retracted.",
        trap: "The exception depends on pedestrians not being allowed to cross there. A loading zone where children do cross is an ordinary stop.",
        excerptKey: "schoolbus-loading-zone",
        sourceLabel: "Mississippi Driver's License Manual - Yielding Right-Of-Way To School Buses",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "ms_s5_02",
        topic: "emergencies",
        question:
          "A gate is coming down at a Mississippi railroad crossing. Where does the manual say to stop?",
        choices: [
          "Within fifty to ten feet of the outer rail",
          "At least fifteen feet from the nearest rail",
          "Wherever the pavement markings begin",
          "At least one hundred feet back",
        ],
        correctIndex: 0,
        explanation:
          "Mississippi's phrase is exactly that: all drivers must always stop within fifty to ten feet of the outer rail. It is a band, not a single distance.",
        context:
          "The same band applies to the vehicles that stop every time - school buses, vehicles for hire and loads of explosives or flammable liquids. The triggers for everyone are a lowered gate, a flashing electric signal, a posted stop sign, a flag person's signal, or a rapidly approaching train, and you stop even if you see no train.",
        trap: "Fifteen feet is the parking distance from the nearest rail, which is a different rule. The stopping band is fifty to ten feet from the outer rail.",
        excerptKey: "rr-all-drivers-stop",
        sourceLabel: "Mississippi Driver's License Manual - Railroad Crossings",
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "ms_s5_03",
        topic: "safety",
        question:
          "A five-year-old in Mississippi weighs 70 pounds but is only 4 feet 4 inches tall. What does the law require?",
        choices: [
          "The adult seat belt, since the child is over 65 pounds",
          "A rear-facing car seat",
          "Nothing, because the child is over four",
          "A belt-positioning booster seat",
        ],
        correctIndex: 3,
        explanation:
          "The height and weight tests are alternatives. A child from four up to seven who is under 4 feet 9 inches OR under 65 pounds needs a booster, and this child fails the height test.",
        context:
          "Below four the requirement is a car seat meeting applicable safety standards. Above seven, or once the child clears both the height and weight marks, the ordinary belt law takes over - and in Mississippi that covers every occupant in every seat. Violating either law can bring a fine.",
        trap: "Clearing the weight limit does not release a short child from the booster. The child has to clear both marks.",
        excerptKey: "booster-four-to-seven",
        sourceLabel: "Mississippi Driver's License Manual - Seat Belts, Car Seats, And Child Restraints",
        sourceUrl: hb(64),
        commonlyMissed: true,
      },
      {
        id: "ms_s5_04",
        topic: "signs",
        question: "A black U-shaped arrow crossed by a red circle and slash faces you. Where does it apply?",
        choices: [
          "Only at the intersection where it is posted",
          "At the intersection, in the middle of a street, and in a highway median",
          "Only on divided highways",
          "Only where a median opening exists",
        ],
        correctIndex: 1,
        explanation:
          "Mississippi's no-U-turn sign is broader than most people expect. It means you may not turn around in the intersection, in the center of a street, or in a highway median.",
        context:
          "It sits alongside the no-left-turn and no-right-turn signs in the regulatory section, and near the manual's turning-around procedure, which describes the sequence for reversing direction in a confined space using forward and backward movements against the curb.",
        trap: "The sign is not confined to the junction it hangs over. It rules out the median crossing further down the road as well.",
        excerptKey: "sign-no-u-turn",
        sourceLabel: "Mississippi Driver's License Manual - Regulatory Signs",
        sourceUrl: hb(28),
      },
      {
        id: "ms_s5_05",
        topic: "rules",
        question:
          "You are doing 70 mph on a Mississippi interstate. What following distance does the manual give?",
        choices: ["Four seconds", "Five car lengths", "Seven car lengths", "Seventy feet"],
        correctIndex: 2,
        explanation:
          "Seven car lengths at 70 mph, which is the same one-per-10-mph ladder applied at interstate speed. At 50 mph the manual gives five car lengths.",
        context:
          "The interstate chapter names tailgating as a main reason for collisions there, and the manual as a whole never switches to seconds. Behind a large vehicle you leave more than the ladder gives, because you also need to see past it and because 80,000 pounds takes longer to stop.",
        trap: "Every neighboring state teaches this in seconds. Mississippi's exam is written from car lengths, so the conversion is not worth doing in your head.",
        excerptKey: "interstate-car-lengths",
        sourceLabel: "Mississippi Driver's License Manual - Speed Limits & Following Distance",
        sourceUrl: hb(70),
        commonlyMissed: true,
      },
      {
        id: "ms_s5_06",
        topic: "licensing",
        question: "What has replaced the road test for most Mississippi license applicants?",
        choices: [
          "An affidavit that a parent, teacher or guardian watched you drive at least fifty hours",
          "A certified driving school course",
          "A second computerized exam",
          "A supervised drive with a Highway Patrol officer",
        ],
        correctIndex: 0,
        explanation:
          "The affidavit. A parent, teacher or guardian certifies they watched you drive at least fifty hours and attests to your proficiency, and the Driver Service Bureau confirms that no road test is being given.",
        context:
          "The manual lists three requirements for an original license: the vision exam, the Computerized Exam and that affidavit. Applicants under seventeen also need the Waiver of Road Testing Affidavit specifically. A certified Driver's Education course is due to become a further requirement, which is why the practical test's absence is the current state of things rather than the permanent one.",
        trap: "Fifty hours is the number and it is the parent's certification, not a logbook the state checks. The affidavit is what the Bureau wants to see.",
        excerptKey: "web-no-road-test",
        sourceLabel: "Driver Service Bureau - Frequently Asked Questions",
        sourceUrl: FAQ,
        commonlyMissed: true,
      },
      {
        id: "ms_s5_07",
        topic: "rightOfWay",
        question:
          "You are approaching a four-way stop alongside another car and could brake hard to arrive first. What does the manual say?",
        choices: [
          "Arriving first is what decides it, so brake",
          "Sound your horn to establish priority",
          "Make eye contact and go together",
          "Do not slam on your brakes to stop first - yield to the driver on the right",
        ],
        correctIndex: 3,
        explanation:
          "The manual anticipates the maneuver and rules it out by name, telling you not to slam on the brakes to stop first and to yield to the driver on your right instead.",
        context:
          "Order of arrival does decide a four-way stop, and the driver on the right breaks a genuine tie. What the manual objects to is manufacturing the arrival, because a hard stop invites a rear-end collision and leaves the other driver guessing.",
        trap: "The first rule at a four-way stop is order of arrival, which makes racing for it look rational. The manual treats it as the wrong instinct.",
        excerptKey: "four-way-no-slamming",
        sourceLabel: "Mississippi Driver's License Manual - Four-Way Stop",
        sourceUrl: hb(56),
      },
      {
        id: "ms_s5_08",
        topic: "emergencies",
        question:
          "You see a car stalled on the tracks at a crossing but no warning lights are active. What does Mississippi's manual tell you to do?",
        choices: [
          "Call 911 only",
          "Call 911 and the toll-free number on the blue Emergency Notification System sign",
          "Wait for the next train's crew to notice",
          "Try to push the vehicle clear",
        ],
        correctIndex: 1,
        explanation:
          "The blue ENS sign at every highway-rail grade crossing carries a toll-free number answered by railroad dispatchers who can attempt to stop all train traffic there.",
        context:
          "The sign is on the crossbuck or on a metal box near the crossing, and it carries an identification number for the exact location. The same number is the way to report a malfunctioning signal or gate, a blocked crossing, trespassers on the track, or any other unsafe condition.",
        trap: "911 alone does not reach the people who can hold the trains. The ENS number goes straight to railroad dispatchers.",
        excerptKey: "rr-ens-number",
        sourceLabel: "Mississippi Driver's License Manual - Railroad Crossings",
        sourceUrl: hb(36),
      },
      {
        id: "ms_s5_09",
        topic: "impairment",
        question:
          "A twenty-year-old Mississippi driver registers 0.09% blood alcohol content. What is the charge?",
        choices: [
          "Zero Tolerance DUI, because the driver is under 21",
          "No offense, since 0.09% is close to the adult limit",
          "A regular DUI, with the full adult penalties",
          "Zero Tolerance DUI with an enhanced fine",
        ],
        correctIndex: 2,
        explanation:
          "The manual says so in as many words: an under-21 driver at 0.08% or higher is charged with a regular DUI, not a Zero Tolerance DUI.",
        context:
          "Zero Tolerance covers the band from 0.02% up to but not including 0.08%, with a $250 fine and a 120-day suspension for a first offense. Above 0.08% the adult ladder applies: $250 to $1,000, up to forty-eight hours in jail and a 120-day suspension, with a second offense within five years far heavier.",
        trap: "Being under 21 does not cap the charge at the lighter offense. It only adds a lower threshold below the adult one.",
        excerptKey: "zt-under-21-eight",
        sourceLabel: "Mississippi Driver's License Manual - Zero Tolerance DUI Penalties",
        sourceUrl: hb(79),
      },
      {
        id: "ms_s5_10",
        topic: "sharing",
        question:
          "The children have crossed the road in front of the school bus and the driver folds the stop arm away, but the red lights are still flashing. May you go?",
        choices: [
          "No - all four conditions must be met before you move",
          "Yes, once the children are clear",
          "Yes, once the stop arm is retracted",
          "Yes, if you move off at walking pace",
        ],
        correctIndex: 0,
        explanation:
          "Mississippi's release has four parts joined by AND: the children have crossed, the bus has resumed motion, the red lights are no longer flashing, and the stop sign is retracted.",
        context:
          "That is what makes the ten-foot distance workable - it is a short gap held for a long time. Set against it are the two exceptions, the divided highway of four or more lanes for a driver going the other way, and a loading zone where pedestrians are not allowed to cross.",
        trap: "Any one of the four looks like the end of the stop. The manual requires all of them, and the bus moving off is one of them.",
        excerptKey: "schoolbus-remain-stopped",
        sourceLabel: "Mississippi Driver's License Manual - Yielding Right-Of-Way To School Buses",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "ms_s5_11",
        topic: "parking",
        question:
          "May you leave your car parked and unattended across the entrance to a private driveway in Mississippi?",
        choices: [
          "Yes, if the driveway is not in use",
          "Yes, for under fifteen minutes",
          "Yes, if you leave a note with your phone number",
          "No - it is on the prohibited parking list",
        ],
        correctIndex: 3,
        explanation:
          "The first line of Mississippi's prohibited parking list is in front of a public or private driveway. No time allowance and no exceptions appear with it.",
        context:
          "The list continues with the measured distances - twenty feet from a fire station driveway or seventy-five if posted, ten feet from a hydrant, twenty feet from a crosswalk at an intersection, thirty feet from the approach to a traffic control device, fifteen feet from the nearest rail.",
        trap: "Blocking a driveway that looks unused is still blocking a driveway. Nothing in the rule turns on whether anyone needs it right now.",
        excerptKey: "parking-prohibited-stem",
        sourceLabel: "Mississippi Driver's License Manual - Prohibited Parking",
        sourceUrl: hb(60),
      },
      {
        id: "ms_s5_12",
        topic: "safety",
        question:
          "What does Mississippi's manual say about children under 13 riding in the back seat?",
        choices: [
          "It is required by law up to age 13",
          "It is stated as what children under 13 should always do",
          "It applies only in vehicles with passenger airbags",
          "It is required only on highways",
        ],
        correctIndex: 1,
        explanation:
          "The manual states it as what children under 13 should always do, in the same section where it sets out what the law requires. The word choice is the whole answer.",
        context:
          "The requirements in that section are the belt law covering every occupant, the car seat below four, and the booster from four up to seven for a child under 4 feet 9 inches or 65 pounds. Around them sit recommendations - rear-facing until the child outgrows a convertible seat, and a booster for children of 40 to 65 pounds.",
        trap: "The back-seat guidance sits directly under a list of legal requirements, which makes it easy to read as one of them.",
        excerptKey: "children-backseat-thirteen",
        sourceLabel: "Mississippi Driver's License Manual - Seat Belts, Car Seats, And Child Restraints",
        sourceUrl: hb(64),
        commonlyMissed: true,
      },
      {
        id: "ms_s5_13",
        topic: "signs",
        question: "What does a single solid white line between two Mississippi lanes mean?",
        choices: [
          "Traffic on either side moves in opposite directions",
          "Crossing it is prohibited",
          "Crossing it is discouraged",
          "The right-hand lane must exit",
        ],
        correctIndex: 2,
        explanation:
          "Discouraged, not prohibited. Both sides carry traffic in the same direction, and the manual chooses the softer word deliberately - the double solid white line is the one it calls prohibited.",
        context:
          "The full white set is worth learning as a group: broken white, cross to change lanes when safe; single solid white, crossing discouraged; double solid white, crossing prohibited. Yellow lines always mean the traffic on the other side is coming toward you.",
        trap: "Three white markings, three different strengths. Treating single solid white as an absolute barrier is a common overcorrection.",
        excerptKey: "marking-single-white",
        sourceLabel: "Mississippi Driver's License Manual - Pavement Markings",
        sourceUrl: hb(25),
      },
      {
        id: "ms_s5_14",
        topic: "speed",
        question:
          "What is the minimum speed for a car on a four-lane Mississippi state highway?",
        choices: ["40 mph", "35 mph", "30 mph", "There is no minimum"],
        correctIndex: 0,
        explanation:
          "Forty miles an hour. The manual's table gives four-lane state and US highways the same 40 mph minimum as interstates.",
        context:
          "Only two rows in the table carry a minimum. Two-lane state and US highways and the Natchez Trace Parkway have maximums only. Minimums matter because a vehicle far below the flow is treated as a hazard rather than as a cautious driver.",
        trap: "Most drivers only ever read the maximum column. The minimum is printed right beside it and the exam asks about it.",
        excerptKey: "speed-table",
        sourceLabel: "Mississippi Driver's License Manual - Legal Speeds",
        sourceUrl: hb(41),
      },
      {
        id: "ms_s5_15",
        topic: "rules",
        question:
          "A driver behind you wants to pass on a two-lane road. May you flick on your left signal to tell them it is clear?",
        choices: [
          "Yes, it is a recognized courtesy",
          "Yes, if you can see far enough ahead",
          "Only at night, using the headlights instead",
          "No - the driver behind decides whether it is safe to pass",
        ],
        correctIndex: 3,
        explanation:
          "The manual rules it out and gives the reason: the driver behind you is responsible for deciding whether it is safe to pass.",
        context:
          "The same section makes a related point about signals - if the car ahead of you signals a turn, you use your own signal only if you also intend to turn, never to relay their intention to the traffic behind. Signals say what you are about to do and nothing else.",
        trap: "It is a widespread trucking courtesy and Mississippi's manual specifically tells drivers not to do it. A signal that means two things means neither reliably.",
        excerptKey: "signal-not-pass-invitation",
        sourceLabel: "Mississippi Driver's License Manual - Signal Lights",
        sourceUrl: hb(42),
        commonlyMissed: true,
      },
      {
        id: "ms_s5_16",
        topic: "licensing",
        question:
          "A sixteen-year-old holds a full Mississippi Class R license. Until what time may they drive alone on a Tuesday?",
        choices: ["Midnight", "10:00 p.m.", "11:30 p.m.", "There is no restriction on a full license"],
        correctIndex: 1,
        explanation:
          "Ten p.m. Section 63-1-21 allows a regular license holder under eighteen to drive unsupervised from 6:00 a.m. to 10:00 p.m. Sunday through Thursday, and to 11:30 p.m. on Friday and Saturday.",
        context:
          "Travel directly to or from work, or to an educational or extracurricular activity, is excepted at any hour. Outside those windows a parent, guardian or other licensed person aged 21 or older must be in the seat beside the driver. The restriction moved from the old intermediate license onto the regular license in 2021.",
        trap: "The manual does not mention this rule anywhere, so a learner who studies only the book will never see it. It is in the Code, and it applies to a full license.",
        excerptKey: "law-under-eighteen-curfew",
        sourceLabel: "Mississippi Code Section 63-1-21, as amended by House Bill 550 (2021)",
        sourceUrl: LAW,
        commonlyMissed: true,
      },
      {
        id: "ms_s5_17",
        topic: "emergencies",
        question:
          "A train has just cleared a Mississippi crossing and the gates are still down. What does the manual tell you to watch for?",
        choices: [
          "A signal fault, since the gates should already be rising",
          "Pedestrians crossing behind the train",
          "A second train following close behind the first",
          "Loose ballast on the crossing surface",
        ],
        correctIndex: 2,
        explanation:
          "Always check carefully for a second train following close behind the first. The gates staying down is the warning that the crossing is not yet clear.",
        context:
          "The instruction sits with the rest of the crossing rules: remain stopped until all tracks are clear, the gates are raised and the lights have stopped flashing, and never drive around a lowered gate. The manual also tells you not to shift gears while crossing the tracks.",
        trap: "One train passing feels like the end of the event. Multi-track crossings are exactly where the second train catches people.",
        excerptKey: "rr-second-train",
        sourceLabel: "Mississippi Driver's License Manual - Railroad Crossings",
        sourceUrl: hb(36),
      },
      {
        id: "ms_s5_18",
        topic: "signals",
        question: "What does a solid yellow arrow mean in Mississippi?",
        choices: [
          "The same as a solid yellow light - the signal is about to change",
          "You may turn after yielding to oncoming traffic",
          "The turn is protected but ending",
          "You must stop and wait for a green arrow",
        ],
        correctIndex: 0,
        explanation:
          "A solid yellow arrow works exactly like a solid yellow light: the signal is about to turn red, so slow down and prepare to stop.",
        context:
          "Three arrows, three meanings. Green is a protected turn because oncoming traffic has a red. Flashing yellow permits the turn but gives no protection. Solid yellow is the transition - either from a protected turn to an unprotected one, or on the way to a red.",
        trap: "Flashing and solid yellow arrows look almost identical at a glance and mean entirely different things. One is permission to turn, one is a warning to stop.",
        excerptKey: "signal-yellow-arrow",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signal Lights",
        sourceUrl: hb(37),
      },
      {
        id: "ms_s5_19",
        topic: "safety",
        question: "Does Mississippi law require a rearview mirror in a passenger car?",
        choices: [
          "Yes, on every vehicle",
          "Yes, on vehicles built after 1970",
          "Yes, but only for vehicles carrying passengers for hire",
          "No, though the manual recommends one",
        ],
        correctIndex: 3,
        explanation:
          "The manual states that Mississippi law does not require a rearview mirror, but recommends having one. A truck whose body blocks the view behind does need a side mirror by law.",
        context:
          "It is one of several places where the equipment chapter separates requirement from recommendation. Two headlights and at least one taillight are required; being able to see a person 500 feet ahead is a recommendation. Working windshield wipers and a serviceable muffler are required outright.",
        trap: "Almost every other item in the chapter is a requirement, which makes the mirror easy to assume. Mississippi's wording is the exception.",
        excerptKey: "equip-mirror",
        sourceLabel: "Mississippi Driver's License Manual - Vehicle Equipment",
        sourceUrl: hb(19),
        commonlyMissed: true,
      },
      {
        id: "ms_s5_20",
        topic: "rightOfWay",
        question:
          "You want to turn right on a green light and a pedestrian is crossing the road you are turning into. Who goes?",
        choices: [
          "You do, because the green covers your turn",
          "The pedestrian, because you yield to pedestrians any time you cross an intersection",
          "Whoever is already moving",
          "You do, if the pedestrian has not reached your lane yet",
        ],
        correctIndex: 1,
        explanation:
          "The manual states it as an absolute: any time you travel through an intersection you must yield to pedestrians, and to any traffic already inside it.",
        context:
          "That duty survives every kind of green, the protected green arrow included. Pedestrians in a crosswalk always have the right of way, marked or not, and the manual asks you to watch for people stepping into crosswalks as you set up to turn.",
        trap: "A protected turn protects you from vehicles, not from people. The manual prints the reminder twice on the signal pages for exactly this reason.",
        excerptKey: "signal-yield-pedestrians",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signal Lights",
        sourceUrl: hb(37),
      },
      {
        id: "ms_s5_21",
        topic: "sharing",
        question:
          "A cyclist ahead of you moves out of the right-hand lane toward the middle of the road. When does Mississippi's manual say that is proper?",
        choices: [
          "Only when overtaking another vehicle",
          "Only where there is no shoulder",
          "When passing, when the right side is unsafe, or when going straight where the right lane turns right",
          "Never - cyclists must stay as far right as possible at all times",
        ],
        correctIndex: 2,
        explanation:
          "Cyclists ride as far right as is safely possible, usually two to four feet from the edge, but the manual lists three situations where moving left is correct: overtaking, unsafe conditions on the right, and going straight or turning left where the right lane is for right turns only.",
        context:
          "Unsafe conditions are spelled out - broken or missing pavement, pedestrians, animals, parked cars, gravel, tree limbs, broken glass. A cyclist taking the lane in those situations is following the rule, not breaking it, and drivers are told to change lanes to pass rather than squeezing by.",
        trap: "\"As far right as possible\" is not the manual's phrase. It says as far right as is safely possible, and the qualifier is what makes the three exceptions work.",
        excerptKey: "cyclist-far-right",
        sourceLabel: "Mississippi Driver's License Manual - Sharing The Road With Bicycles",
        sourceUrl: hb(73),
      },
      {
        id: "ms_s5_22",
        topic: "rules",
        question:
          "You have overtaken a car on a two-lane Mississippi road. When may you move back into the right lane?",
        choices: [
          "When you can see the vehicle you passed in your rearview mirror",
          "As soon as your rear bumper clears its front bumper",
          "After counting three seconds",
          "As soon as the oncoming lane has traffic in it",
        ],
        correctIndex: 0,
        explanation:
          "The manual's test is visual: do not pull back in until you can see the vehicle you passed in your rearview mirror, which means you are well past it.",
        context:
          "The full sequence is drop back far enough to see around the vehicle, signal, check ahead and behind, move quickly but carefully into the left lane, and stay there until you are clear. Passing a large vehicle uses a stricter version of the same test - you look for its front wheels meeting the pavement in your mirror.",
        trap: "Clearing the other car's bumper is not enough room. Cutting back in that early is what forces the passed driver to brake.",
        excerptKey: "passing-return-mirror",
        sourceLabel: "Mississippi Driver's License Manual - Passing On The Left",
        sourceUrl: hb(47),
      },
      {
        id: "ms_s5_23",
        topic: "impairment",
        question:
          "You refuse a breath test in Mississippi and are later convicted of a first-offense DUI. What happens to the suspensions?",
        choices: [
          "Only the longer of the two applies",
          "The refusal suspension is cancelled by the conviction",
          "The court decides which one to impose",
          "A 90-day suspension for the refusal is added to the DUI penalty",
        ],
        correctIndex: 3,
        explanation:
          "They stack. The manual gives this exact example: a first-offense DUI conviction plus a refusal adds a 90-day suspension on top of the original penalty.",
        context:
          "A first-offense DUI already costs 120 days. Refusing brings its own administrative 90-day suspension and hands your license to the officer on the spot in exchange for a 45-day temporary permit. Penalties also grow if you get a DUI while suspended for a previous one, or if the crash caused injuries.",
        trap: "Refusing is often described as a way of denying the state its evidence. Mississippi treats it as a separate penalty that survives the conviction.",
        excerptKey: "dui-refusal-extra-ninety",
        sourceLabel: "Mississippi Driver's License Manual - DUI Penalties",
        sourceUrl: hb(79),
        commonlyMissed: true,
      },
      {
        id: "ms_s5_24",
        topic: "licensing",
        question:
          "You are caught with a smart watch in a Mississippi testing area. What is the consequence?",
        choices: [
          "A warning and a fresh test the same day",
          "The test is cancelled and you cannot test again for six months",
          "A thirty-day wait before retesting",
          "The device is held until the test is over",
        ],
        correctIndex: 1,
        explanation:
          "The test is cancelled immediately and you may not test again for six months. Cell phones, ear buds and smart watches are all named in the ban.",
        context:
          "Knowledge exams are taken in person, with an examiner monitoring, and no electronic assistance is allowed at all. A note goes in your record. An applicant who thinks the expulsion was unfair may appeal in writing to the Driver Service Bureau within thirty days.",
        trap: "The bar is six months, not a shorter cooling-off. It is far longer than the thirty-day wait that follows three ordinary failures.",
        excerptKey: "web-cheating-six-months",
        sourceLabel: "Driver Service Bureau - Regular Learner's Permit",
        sourceUrl: PERMIT,
        commonlyMissed: true,
      },
      {
        id: "ms_s5_25",
        topic: "parking",
        question:
          "You must leave your vehicle beside a Mississippi highway. How much room should you leave for other vehicles to get by?",
        choices: ["Ten feet", "Fifteen feet", "At least twenty feet if possible", "Thirty feet"],
        correctIndex: 2,
        explanation:
          "At least twenty feet where you can manage it, on top of pulling all the way off the roadway.",
        context:
          "The rest of the highway parking instructions are about being seen: park where you are visible from at least two hundred feet in both directions, and leave the parking lights or emergency flashers on at night. Outside business or residential districts you are expected to be off the roadway altogether.",
        trap: "Twenty feet of clearance and two hundred feet of visibility are two different numbers in the same paragraph and are easy to swap.",
        excerptKey: "parking-highway-steps",
        sourceLabel: "Mississippi Driver's License Manual - Parking On A Highway",
        sourceUrl: hb(60),
      },
      {
        id: "ms_s5_26",
        topic: "signs",
        question:
          "How far before the tracks is the round railroad warning sign normally posted in rural Mississippi?",
        choices: ["500 to 900 feet", "100 to 300 feet", "One quarter mile", "1,000 to 1,500 feet"],
        correctIndex: 0,
        explanation:
          "Five hundred to nine hundred feet in rural areas. The distance is there so you have time to look, listen and slow down before you reach the crossing.",
        context:
          "At the crossing itself you meet the white crossbuck, posted at most crossings, sometimes with a plate below giving the number of tracks. Flashing lights are used with the crossbuck at many crossings and gates at some. The pavement carries a large X and two R's with a solid yellow line to stop passing on the approach.",
        trap: "The advance warning sign is not the crossing sign. The round yellow one warns; the white crossbuck marks the tracks themselves.",
        excerptKey: "rr-advance-sign",
        sourceLabel: "Mississippi Driver's License Manual - Railroad Crossings",
        sourceUrl: hb(35),
      },
      {
        id: "ms_s5_27",
        topic: "emergencies",
        question:
          "A tanker carrying flammable liquid approaches a Mississippi crossing with no signals of any kind. What must the driver do?",
        choices: [
          "Cross without stopping, since there are no signals",
          "Slow to 15 mph and cross",
          "Stop only if a train is visible",
          "Stop at the crossing even though no signal warns of a train",
        ],
        correctIndex: 3,
        explanation:
          "Vehicles carrying explosives or flammable liquids stop at all railroad crossings, whether or not any signal warns of a train. Passenger buses and school buses do the same.",
        context:
          "The rule appears twice in the manual, once in the railroad chapter and once in the Class D chapter, and it uses the same fifty-to-ten-foot band as everyone else. After the stop the driver checks both directions before moving off, and other drivers are told to expect these stops.",
        trap: "The absence of signals is exactly the situation the rule is written for. Signals change nothing for these three categories of vehicle.",
        excerptKey: "flammable-loads-railroad",
        sourceLabel: "Mississippi Driver's License Manual - Class D, Flammable Loads",
        sourceUrl: hb(87),
      },
      {
        id: "ms_s5_28",
        topic: "safety",
        question: "What does Mississippi's manual say about the clutch when you are trying to stop a skid?",
        choices: [
          "Press it to disconnect the drive wheels",
          "Never use it",
          "Use it only in a front-wheel-drive car",
          "Press it and change down a gear",
        ],
        correctIndex: 1,
        explanation:
          "Never use the clutch when you are trying to stop a skid. The instruction is stated flatly, alongside the warning that braking suddenly will make the skid worse.",
        context:
          "What you do instead is steer in the direction of the skid, provided that does not run you off the road or into something. The same aversion to sharp inputs shows up in the blowout advice - come off the accelerator and brake slowly - and in the run-off-pavement advice to brake lightly before returning to the road.",
        trap: "Declutching is standard advice for a stall and is exactly wrong for a skid, where it removes the engine's stabilising drag.",
        excerptKey: "skid-never-clutch",
        sourceLabel: "Mississippi Driver's License Manual - Hazardous Conditions & Emergencies",
        sourceUrl: hb(65),
      },
      {
        id: "ms_s5_29",
        topic: "speed",
        question: "Where is a traffic offense committed on the Natchez Trace Parkway tried?",
        choices: [
          "In the justice court of the county",
          "In a Mississippi circuit court",
          "In a federal court",
          "It depends on whether state or federal law was broken",
        ],
        correctIndex: 2,
        explanation:
          "The Parkway is administered by the National Park Service, and the manual warns that violating any law while on the roadway or using Parkway facilities means being tried in a federal court.",
        context:
          "Both bodies of law apply on the Trace: federal regulations govern traffic and public use, and state traffic laws apply as well. The maximum speed is 50 mph unless a lower limit is posted, radar is used, commercial vehicles are excluded and access is limited.",
        trap: "The Parkway runs through Mississippi for about 350 miles, which makes it feel like an ordinary state road. The forum for a citation is not ordinary.",
        excerptKey: "natchez-federal-court",
        sourceLabel: "Mississippi Driver's License Manual - Appendix B: The Natchez Trace",
        sourceUrl: hb(90),
      },
      {
        id: "ms_s5_30",
        topic: "signals",
        question:
          "A sign at a red light reads NO TURN ON RED. You stop completely and the way is clear. May you turn right?",
        choices: [
          "No - you must wait for the green light",
          "Yes, because you stopped completely",
          "Yes, if no pedestrians are present",
          "Yes, between 6 a.m. and 10 p.m.",
        ],
        correctIndex: 0,
        explanation:
          "The sign removes the permission entirely. Mississippi's manual says signs like these mean right turns are never allowed while the signal is red, and you wait for green.",
        context:
          "Right on red is the default in Mississippi, subject to a complete stop and yielding to traffic and pedestrians. The sign is the override, and the manual's regulatory-signs page prints it precisely because drivers who know the default sometimes stop reading.",
        trap: "Stopping is what makes an ordinary right on red lawful, so it feels like the thing that satisfies the rule. Where the sign is posted, no amount of stopping helps.",
        excerptKey: "sign-no-turn-on-red",
        sourceLabel: "Mississippi Driver's License Manual - Regulatory Signs",
        sourceUrl: hb(28),
      },
      {
        id: "ms_s5_31",
        topic: "rules",
        question:
          "Traffic is crawling in both travel lanes and the center two-way turn lane is empty. May you use it to get past?",
        choices: [
          "Yes, if you signal first",
          "Yes, for up to a block",
          "Yes, if no one is waiting to turn",
          "No - the turn lane is never used for passing",
        ],
        correctIndex: 3,
        explanation:
          "The manual's wording leaves no room: the turn lane is never used for passing. It may be used only in preparation to turn left or right across the opposite lanes.",
        context:
          "The regulatory sign for the lane says the same thing from the other direction, that the center lane is not available for normal travel or passing. Drivers coming the other way are using the same lane for their own turns, which is exactly why running along it is dangerous.",
        trap: "An empty lane in stopped traffic is an obvious temptation, and it is the one the manual answers with the word never.",
        excerptKey: "turn-lane-only",
        sourceLabel: "Mississippi Driver's License Manual - Directional Arrows",
        sourceUrl: hb(26),
        commonlyMissed: true,
      },
      {
        id: "ms_s5_32",
        topic: "licensing",
        question:
          "Your Mississippi license has been expired for six years. What do you have to do to drive again?",
        choices: [
          "Pay a late fee and renew",
          "Take the written test again and apply for a new license",
          "Take a vision screening only",
          "Renew online with proof of residency",
        ],
        correctIndex: 1,
        explanation:
          "Once a license has been expired or suspended for more than sixty months, the Driver Service Bureau requires you to take the written test over and apply for a new license.",
        context:
          "Sixty months is five years. Inside that window renewal is the ordinary process, and a license can be renewed up to six months before it expires. Someone arriving from another state with a license expired more than thirty days must also sit the Computerized Exam.",
        trap: "Thirty days and sixty months both appear in the rules about expired licenses. One is about an out-of-state license, the other about a Mississippi one.",
        excerptKey: "web-sixty-months",
        sourceLabel: "Driver Service Bureau - Frequently Asked Questions",
        sourceUrl: FAQ,
      },
      {
        id: "ms_s5_33",
        topic: "rightOfWay",
        question:
          "You are stopped at a stop sign and about to pull out. What does Mississippi require before you move?",
        choices: [
          "A five-second pause at the line",
          "A sounded horn if your view is blocked",
          "Yielding to any vehicle or pedestrian in the intersection, then proceeding only if the way is completely clear",
          "Waiting until no vehicle is within 100 feet",
        ],
        correctIndex: 2,
        explanation:
          "The manual's sentence is a complete stop at the crosswalk, then yielding the right of way to any vehicle or pedestrian in the intersection, and carefully proceeding only if the way is completely clear.",
        context:
          "It runs in parallel with the stop sign's own description, which requires a complete stop before entering the intersection and then yielding to any traffic close enough to be a hazard. The definition of a stop is a complete cessation of movement, which is what settles rolling-stop questions.",
        trap: "Stopping and yielding are two separate duties in one sentence. Satisfying the first does not discharge the second.",
        excerptKey: "stop-sign-complete",
        sourceLabel: "Mississippi Driver's License Manual - Intersections And Right-Of-Way",
        sourceUrl: hb(56),
      },
      {
        id: "ms_s5_34",
        topic: "safety",
        question: "Which headlight beam does Mississippi's manual say to use in fog?",
        choices: [
          "The lower beam, day or night",
          "The high beam, to reach further",
          "Parking lights only",
          "Hazard flashers instead of headlights",
        ],
        correctIndex: 0,
        explanation:
          "Low beam, whether the fog is at night or during the day. The manual explains that high beams in fog reduce visibility rather than improving it.",
        context:
          "The same sentence names two other low-beam situations: where there are streetlights, and when you are following another car. Driving on parking lights alone is ruled out - if you need lights, the manual says use your headlights.",
        trap: "Fog looks like a case for more light, and the reflection off the water in the air makes high beams actively worse.",
        excerptKey: "headlight-fog",
        sourceLabel: "Mississippi Driver's License Manual - Using Your Headlights",
        sourceUrl: hb(63),
      },
      {
        id: "ms_s5_35",
        topic: "sharing",
        question:
          "You are passing a large vehicle on a Mississippi downgrade. What should you expect?",
        choices: [
          "It will slow down as the driver brakes for the hill",
          "It will hold a constant speed",
          "It will drift toward the center line",
          "Its momentum will carry it faster, so you may need more speed to get past",
        ],
        correctIndex: 3,
        explanation:
          "On a downgrade the vehicle's own momentum carries it faster, so a pass that worked on the level may need more speed of yours.",
        context:
          "The gradient works the other way uphill, where a large vehicle usually loses speed and passing gets easier. On level ground the pass takes three to five seconds longer than passing a car. The manual's advice when the sums are marginal is that waiting for a safer moment is always available.",
        trap: "The heavy vehicle behaves opposite to what a driver expects on each gradient, which is why the manual spells out all three cases.",
        excerptKey: "truck-pass-time",
        sourceLabel: "Mississippi Driver's License Manual - Road Safety With Large Vehicles",
        sourceUrl: hb(72),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix and at the level of the real Computerized Exam. No hints beyond what you would have on the day.",
    questions: [
      {
        id: "ms_s6_01",
        topic: "signals",
        question: "What does a solid red traffic light require in Mississippi?",
        choices: [
          "Slow down and pass through if the way is clear",
          "Stop, then proceed when no traffic is coming",
          "Stop only where a stop line is painted",
          "A complete stop, staying stopped until the light turns green",
        ],
        correctIndex: 3,
        explanation:
          "A solid red means a complete stop and staying stopped until green. The one exception is the right turn, which needs a full stop of its own first.",
        context:
          "The manual's signal chapter lays out the family: red stop, yellow about to turn red, green go if safe, and for a left turn on green, yield to oncoming traffic. Beneath all of it sits the reminder that crossing any intersection means yielding to pedestrians and to vehicles already inside it.",
        trap: "Waiting for a gap is not the same as waiting for the light. Only the right turn on red lets you go before green.",
        excerptKey: "signal-solid-red",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signal Lights",
        sourceUrl: hb(37),
      },
      {
        id: "ms_s6_02",
        topic: "rules",
        question: "Which lane is intended for through travel on a Mississippi interstate?",
        choices: ["The right lane", "The left lane", "Either, at your discretion", "The center lane on a six-lane road"],
        correctIndex: 0,
        explanation:
          "The right lane is for through travel and the left for passing. A driver moving more slowly than the surrounding traffic is expected to stay right.",
        context:
          "Interstates differ from ordinary four-lane highways in one way: passing is permitted from either the right or the left lane where they are divided by a broken white line. Crossing the center line of a four-lane highway to pass is never legal.",
        trap: "Being permitted to pass on the right does not make the left lane a cruising lane. The default is still the right.",
        excerptKey: "interstate-lane-use",
        sourceLabel: "Mississippi Driver's License Manual - Lane Use, Passing, And Changing Lanes",
        sourceUrl: hb(70),
      },
      {
        id: "ms_s6_03",
        topic: "rightOfWay",
        question:
          "Three cars reach a four-way stop at clearly different times. What decides the order?",
        choices: [
          "The vehicle on the right goes first regardless",
          "Order of arrival - the first to arrive goes first",
          "Vehicles going straight go before turning vehicles",
          "The vehicle on the widest road goes first",
        ],
        correctIndex: 1,
        explanation:
          "Order of arrival is the first test at a four-way stop. The right-hand rule only breaks a tie between vehicles arriving at the same moment.",
        context:
          "The manual also warns you not to brake hard just to arrive first, and to yield to the driver on your right rather than fighting for it. At a two-way stop the logic is different: the road without stop signs goes first, and the straight-ahead vehicle beats the turning one when two stopped drivers arrive together.",
        trap: "The vehicle-on-the-right rule is the tie-breaker, not the main rule. Applying it first produces the wrong answer whenever arrivals are staggered.",
        excerptKey: "four-way-stop",
        sourceLabel: "Mississippi Driver's License Manual - Four-Way Stop",
        sourceUrl: hb(56),
      },
      {
        id: "ms_s6_04",
        topic: "speed",
        question: "At night on a Mississippi interstate, what is the maximum speed for a car?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 3,
        explanation:
          "Seventy, the same as by day. The manual states the interstate limit as seventy miles per hour for both day and night.",
        context:
          "The speed table gives 70 on interstates, 65 on four-lane state and US highways, 55 on two-lane state and US highways and 50 on the Natchez Trace. Interstates and four-lane highways also carry a 40 mph minimum. All limits assume ideal conditions.",
        trap: "Many states drop the limit after dark and Mississippi does not. Darkness changes the safe speed, not the legal one.",
        excerptKey: "interstate-seventy",
        sourceLabel: "Mississippi Driver's License Manual - Speed Limits & Following Distance",
        sourceUrl: hb(70),
      },
      {
        id: "ms_s6_05",
        topic: "signs",
        question: "You see a WRONG WAY sign ahead of you. What does Mississippi say to do?",
        choices: [
          "Leave the roadway and turn around as soon as possible",
          "Stop where you are and reverse",
          "Continue to the next junction and turn there",
          "Pull onto the shoulder and wait for a gap",
        ],
        correctIndex: 0,
        explanation:
          "The sign means you are traveling against the flow and in danger of a head-on collision. The instruction is to leave the roadway and turn around as soon as possible.",
        context:
          "Its companion is DO NOT ENTER, a white bar on a red circle, which bars you from entering that lane of travel in the first place. The manual notes it may appear with or without the words, and either version carries the same meaning.",
        trap: "Reversing on a road you are already facing the wrong way down puts you in a worse position, not a better one.",
        excerptKey: "sign-wrong-way-action",
        sourceLabel: "Mississippi Driver's License Manual - Regulatory Signs",
        sourceUrl: hb(28),
      },
      {
        id: "ms_s6_06",
        topic: "parking",
        question: "What does Mississippi's manual say about parking on a blind curve?",
        choices: [
          "It is permitted if the flashers are on",
          "It is illegal, and the vehicle may be towed",
          "It is permitted outside city limits",
          "It is permitted for up to thirty minutes",
        ],
        correctIndex: 1,
        explanation:
          "Illegal outright. The manual says you may be arrested and the vehicle towed for parking on a blind curve or in any other potentially dangerous place.",
        context:
          "A breakdown is treated differently - you will not be arrested for that, but you are expected to move the vehicle out of the way as quickly as possible. Whenever you do park, the manual asks you to put the transmission in park or low, set the parking brake firmly and turn off the ignition.",
        trap: "\"Potentially dangerous place\" is a general standard, so the list of measured distances is not the whole of the parking law.",
        excerptKey: "parking-blind-curve",
        sourceLabel: "Mississippi Driver's License Manual - Parking",
        sourceUrl: hb(60),
      },
      {
        id: "ms_s6_07",
        topic: "safety",
        question:
          "A passenger is riding in the back seat of your car on a Mississippi highway. What does the law require?",
        choices: [
          "Nothing, if the vehicle has rear airbags",
          "A belt only for passengers under 18",
          "A belt only above 55 mph",
          "A properly fastened seat belt",
        ],
        correctIndex: 3,
        explanation:
          "Mississippi's belt law reaches every operator and every passenger, front seat or back, whenever the vehicle is moving forward on a public road.",
        context:
          "Children have their own layer on top: a car seat below four, and a booster from four up to seven for a child under 4 feet 9 inches or 65 pounds. Violating the belt law or the child restraint law can bring a fine.",
        trap: "Age-limited belt rules exist in other states. Mississippi's covers everyone in every seat.",
        excerptKey: "seatbelt-all-passengers",
        sourceLabel: "Mississippi Driver's License Manual - Seat Belts, Car Seats, And Child Restraints",
        sourceUrl: hb(64),
      },
      {
        id: "ms_s6_08",
        topic: "sharing",
        question:
          "You are behind a school bus that stops with red lights flashing on an ordinary two-lane road. What must you do?",
        choices: [
          "Pass slowly on the left",
          "Stop only if children are in the road",
          "Come to a complete stop at least ten feet from the bus",
          "Slow to 15 mph until the bus moves",
        ],
        correctIndex: 2,
        explanation:
          "A complete stop at least ten feet back, held until the children have crossed, the bus has moved off, the red lights are out and the stop arm is retracted.",
        context:
          "The duty applies from either direction. The one exception is a divided highway of four or more lanes carrying traffic both ways, and it helps only a driver going the opposite way. A loading zone where pedestrians may not cross is treated separately.",
        trap: "Whether you can see any children makes no difference. The flashing lights and stop arm are the trigger.",
        excerptKey: "schoolbus-ten-feet",
        sourceLabel: "Mississippi Driver's License Manual - Yielding Right-Of-Way To School Buses",
        sourceUrl: hb(58),
      },
      {
        id: "ms_s6_09",
        topic: "impairment",
        question: "What blood alcohol content puts a Mississippi driver under 21 over the limit?",
        choices: ["0.02%", "0.04%", "0.05%", "0.08%"],
        correctIndex: 0,
        explanation:
          "0.02% under 21, against 0.08% from 21 onwards. Mississippi calls the lower threshold its Zero Tolerance rule.",
        context:
          "A first Zero Tolerance offense costs $250 and a 120-day suspension. The band runs up to but not including 0.08%; at or above that figure an under-21 driver faces a regular DUI instead, with the adult fines, jail terms and suspensions.",
        trap: "Zero Tolerance suggests any detectable amount. The number the exam wants is 0.02%.",
        excerptKey: "bac-limits",
        sourceLabel: "Mississippi Driver's License Manual - Driving Under The Influence",
        sourceUrl: hb(78),
      },
      {
        id: "ms_s6_10",
        topic: "licensing",
        question: "Who may supervise a Mississippi Learner's Permit holder?",
        choices: [
          "Any licensed driver over 18",
          "A licensed driver aged 21 or older, occupying the seat beside the driver",
          "A parent or guardian only",
          "Any licensed adult anywhere in the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "A licensed driver aged twenty-one or older, physically occupying the seat next to you. The age and the seat are both part of the rule.",
        context:
          "The permit may be issued from age fifteen, lasts two years and costs $7, and it is not limited to family members - any licensed driver of 21 or over qualifies. Driving with no valid permit or license is illegal even with a parent beside you.",
        trap: "Eighteen is the age in several nearby states. Mississippi's supervisor must be 21, and must be in the front passenger seat.",
        excerptKey: "permit-valid-two-years",
        sourceLabel: "Mississippi Driver's License Manual - Regular Learner's Permit",
        sourceUrl: hb(13),
      },
      {
        id: "ms_s6_11",
        topic: "emergencies",
        question: "What is your first duty after a collision in Mississippi?",
        choices: [
          "Photograph the scene",
          "Move both vehicles off the roadway",
          "Stop at once and help anyone who has been injured",
          "Call your insurance company",
        ],
        correctIndex: 2,
        explanation:
          "Stop at once and help anyone injured, calling 911 if needed. Everything else - reporting, exchanging details, insurance - comes after that.",
        context:
          "Report to law enforcement if the crash involved injury, death or apparent property damage above $500. Exchange name, address, license plate number and insurance information, and collect the same. Failure to stop and render aid is on the list of offenses that costs your license for a year.",
        trap: "Documenting the scene feels urgent and is not the first duty. The manual's order puts injured people first.",
        excerptKey: "accident-stop-and-help",
        sourceLabel: "Mississippi Driver's License Manual - In Case Of An Accident",
        sourceUrl: hb(66),
      },
      {
        id: "ms_s6_12",
        topic: "signs",
        question: "A yellow diamond sign shows a curving arrow. What is it doing?",
        choices: [
          "Regulating the speed through the bend",
          "Marking a scenic route",
          "Guiding you toward an exit",
          "Warning of a hazard on or beside the road ahead",
        ],
        correctIndex: 3,
        explanation:
          "The diamond is used exclusively to warn of an existing or possible hazard on or next to the roadway. A curving arrow warns of a curve or a sharp turn ahead.",
        context:
          "Warning diamonds cover curves, winding roads, slippery surfaces, intersections, lane drops, side roads, divided highways starting and ending, and roundabouts. Regulations, including speed limits, come on vertical rectangles in black and white.",
        trap: "An advisory speed plate under a curve sign is guidance, not the regulatory limit. The diamond itself never regulates.",
        excerptKey: "shape-diamond",
        sourceLabel: "Mississippi Driver's License Manual - Standard Shapes And Colors",
        sourceUrl: hb(27),
      },
      {
        id: "ms_s6_13",
        topic: "rules",
        question: "At 50 mph, how much room does Mississippi's manual say to leave in front of you?",
        choices: ["Five car lengths", "Three seconds", "Two car lengths", "Fifty feet"],
        correctIndex: 0,
        explanation:
          "Five car lengths, following the ladder of one car length for every 10 mph of speed.",
        context:
          "The interstate chapter repeats the ladder at higher speed - seven car lengths at 70 mph - and names tailgating as a main cause of collisions there. Behind a large truck or bus you leave more than the ladder gives, so you can see past it.",
        trap: "Mississippi never converts this to seconds. Answers in seconds belong to other states' handbooks.",
        excerptKey: "following-car-length",
        sourceLabel: "Mississippi Driver's License Manual - Following",
        sourceUrl: hb(43),
      },
      {
        id: "ms_s6_14",
        topic: "signals",
        question: "What does a flashing yellow traffic light mean?",
        choices: [
          "Stop, then proceed with caution",
          "The signal has failed and you must treat it as a stop sign",
          "Slow down and exercise caution",
          "Yield to traffic on the crossing road",
        ],
        correctIndex: 2,
        explanation:
          "Slow down and take care. A flashing yellow does not require a stop, unlike a flashing red, which works exactly like a stop sign.",
        context:
          "The same distinction covers a malfunctioning signal. Flashing yellow lights mean slow down and cross carefully; a signal showing no lights at all means stop completely, then proceed with caution while yielding as required.",
        trap: "Flashing red and flashing yellow are one word apart in the manual and one whole action apart on the road.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signal Lights",
        sourceUrl: hb(39),
      },
      {
        id: "ms_s6_15",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing a Mississippi street at an unmarked intersection crossing. What must you do?",
        choices: [
          "Sound the horn and continue",
          "Yield - the pedestrian has the right of way",
          "Proceed, since the crossing is unmarked",
          "Stop only if the pedestrian is in your lane",
        ],
        correctIndex: 1,
        explanation:
          "A person crossing within a crosswalk always has the right of way in Mississippi, and the manual says explicitly that it makes no difference whether the crosswalk is marked.",
        context:
          "Crosswalks count as part of an intersection by the manual's own definition, so one exists at a junction whether or not it is painted. Any time you cross an intersection you yield to pedestrians and to traffic already inside it.",
        trap: "Being outside a painted box does not remove a pedestrian's priority at an intersection.",
        excerptKey: "row-pedestrians-always",
        sourceLabel: "Mississippi Driver's License Manual - Right Of Way",
        sourceUrl: hb(55),
      },
      {
        id: "ms_s6_16",
        topic: "speed",
        question:
          "Children are arriving at a Mississippi school as you drive past. What is the maximum speed?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 0,
        explanation:
          "Fifteen miles an hour. The limit applies while children are arriving at or leaving school during opening and closing hours, and during recess.",
        context:
          "It is the maximum for any vehicle, not just for cars. The pentagon-shaped school crossing sign is a different warning, sometimes posted several blocks away, telling you children cross on their way to and from school.",
        trap: "Fifteen is far lower than most states' school-zone limits, and 20 or 25 is what people reach for by habit.",
        excerptKey: "speed-school-zone-fifteen",
        sourceLabel: "Mississippi Driver's License Manual - Legal Speeds",
        sourceUrl: hb(41),
      },
      {
        id: "ms_s6_17",
        topic: "parking",
        question: "How far from a fire hydrant must a parked Mississippi car be?",
        choices: ["At least ten feet", "At least fifteen feet", "At least twenty feet", "At least five feet"],
        correctIndex: 0,
        explanation:
          "Ten feet, on the manual's list of places you may not stop and leave a vehicle parked and unattended.",
        context:
          "The other measured distances on that list are twenty feet from a fire station driveway or seventy-five if posted, twenty feet from a crosswalk at an intersection, thirty feet from the approach to a traffic control device, and fifteen feet from the nearest rail of a railroad crossing.",
        trap: "Fifteen is the railroad figure and twenty is the crosswalk figure. Ten belongs to the hydrant.",
        excerptKey: "parking-hydrant-crosswalk",
        sourceLabel: "Mississippi Driver's License Manual - Prohibited Parking",
        sourceUrl: hb(60),
      },
      {
        id: "ms_s6_18",
        topic: "safety",
        question:
          "An oncoming car appears on a dark Mississippi road. At what distance must you dim your headlights?",
        choices: ["100 feet", "300 feet", "500 feet", "1,000 feet"],
        correctIndex: 2,
        explanation:
          "Five hundred feet, which is also the distance at which you must dim for a vehicle you are following.",
        context:
          "The same figure sets when lights are needed at all - between sunset and sunrise and whenever you cannot see clearly five hundred feet ahead. High beams belong in open country away from other cars, and never in fog.",
        trap: "The rule applies just as strictly to a car you are following, where your beams reach the driver through their mirrors.",
        excerptKey: "headlight-five-hundred-feet",
        sourceLabel: "Mississippi Driver's License Manual - Using Your Headlights",
        sourceUrl: hb(63),
      },
      {
        id: "ms_s6_19",
        topic: "sharing",
        question:
          "You are about to pass a cyclist on a Mississippi road with oncoming traffic present. What should you do?",
        choices: [
          "Pass in your own lane, keeping as far left as you can",
          "Slow down behind the cyclist and pass once the oncoming traffic has cleared",
          "Sound your horn and pass carefully",
          "Pass on the right using the shoulder",
        ],
        correctIndex: 1,
        explanation:
          "The manual is explicit: do not share the lane with a cyclist when passing. If there is oncoming traffic, slow down behind the cyclist and wait for it to clear.",
        context:
          "You leave at least three feet when you do pass, move fully into the next lane, and pass as you would a motor vehicle. A bicycle on a public road is a vehicle in Mississippi law, with the same rights and duties as a car.",
        trap: "Squeezing past inside the lane is what the manual is trying to prevent, and the wind off a passing car can put a rider down on its own.",
        excerptKey: "bicycle-do-not-share-lane",
        sourceLabel: "Mississippi Driver's License Manual - Sharing The Road With Bicycles",
        sourceUrl: hb(73),
      },
      {
        id: "ms_s6_20",
        topic: "emergencies",
        question:
          "The lights start flashing at a Mississippi railroad crossing while you are approaching. What must you do?",
        choices: [
          "Cross before the gates come down",
          "Slow and look both ways, then cross",
          "Stop only if you can see or hear a train",
          "Stop, and remain stopped until the lights stop flashing",
        ],
        correctIndex: 3,
        explanation:
          "Flashing lights mean a train is coming. You always stop when they begin to flash and stay stopped until they stop.",
        context:
          "The stop goes within fifty to ten feet of the outer rail, and the same duty applies for a lowered gate, a posted stop sign, a flagger or a rapidly approaching train. You must stop even if you cannot see a train, and driving around a lowered gate is separately illegal.",
        trap: "The temptation is to treat the flashing lights as the start of a countdown. They are the signal that the crossing is already closed.",
        excerptKey: "rr-flashing-lights",
        sourceLabel: "Mississippi Driver's License Manual - Railroad Crossings",
        sourceUrl: hb(35),
      },
      {
        id: "ms_s6_21",
        topic: "licensing",
        question: "How may you show proof of insurance to a Mississippi officer?",
        choices: [
          "On paper or as an electronic image on a phone or other device",
          "On paper only",
          "By giving the officer your policy number",
          "By having the insurer email the officer",
        ],
        correctIndex: 0,
        explanation:
          "Mississippi accepts an electronic image on a cellular phone or any other electronic device, as well as the paper card.",
        context:
          "Whichever form you use, a current valid card must be kept inside each vehicle - that is the insured party's responsibility. Every motor vehicle operated in the state must carry liability insurance, and the minimums are $25,000, $50,000 and $25,000.",
        trap: "Being insured is not the same as being able to prove it. Without proof you can be cited even when you were not at fault in a crash.",
        excerptKey: "insurance-electronic",
        sourceLabel: "Mississippi Driver's License Manual - Proof Of Insurance",
        sourceUrl: hb(76),
      },
      {
        id: "ms_s6_22",
        topic: "rules",
        question:
          "You are behind a tractor doing 20 mph on a road with a double solid yellow center line. May you pass?",
        choices: [
          "Yes, if the oncoming lane is clear",
          "No - you may never cross a double yellow line to pass",
          "Yes, if the tractor is under 25 mph",
          "Yes, if you use the shoulder",
        ],
        correctIndex: 1,
        explanation:
          "Never. The manual states it twice and names this exact case - not even to pass a slow-moving car.",
        context:
          "Passing on the shoulder is barred too: under no circumstances may you drive off the pavement or onto the shoulder to pass. On a two-lane road the center line decides everything, and where a broken line runs beside a solid one, only the side with the broken line may pass.",
        trap: "A slow vehicle and an empty road make this feel like a technicality. The manual singles out that situation and still says no.",
        excerptKey: "lane-never-cross-double",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Lanes",
        sourceUrl: hb(45),
      },
      {
        id: "ms_s6_23",
        topic: "signals",
        question: "Why is a green arrow described as a protected turn?",
        choices: [
          "Because pedestrians are held at the curb",
          "Because it appears only at low-traffic junctions",
          "Because oncoming traffic has a red light",
          "Because it lasts longer than a green light",
        ],
        correctIndex: 2,
        explanation:
          "The protection comes from the red facing the other direction. While your turn arrow is green, oncoming traffic is stopped.",
        context:
          "A flashing yellow arrow permits the same turn without that protection, since oncoming traffic then has a green. The manual pairs the flashing yellow arrow with the solid green light and says both mean the same thing for a left turn: yield to oncoming traffic.",
        trap: "Protection from vehicles is not protection from people. The duty to yield to pedestrians survives any green.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signal Lights",
        sourceUrl: hb(37),
      },
      {
        id: "ms_s6_24",
        topic: "impairment",
        question: "What does Mississippi's Implied Consent Law mean for a driver?",
        choices: [
          "Any driver may be tested at a checkpoint without cause",
          "A refusal cannot be used as evidence",
          "Consent must be signed at the roadside",
          "Operating a vehicle in Mississippi is itself consent to testing for intoxicating substances",
        ],
        correctIndex: 3,
        explanation:
          "Driving in the state is giving your implied consent to testing. An officer with good reason to suspect impairment may request a breath or chemical test.",
        context:
          "You may still refuse, but the license goes to the officer immediately in exchange for a receipt that serves as a temporary permit for forty-five days, and an administrative ninety-day suspension follows. A refusal alongside a first-offense DUI conviction adds another ninety days.",
        trap: "Implied consent is not consent to a test on no grounds. The officer needs good reason to suspect impairment first.",
        excerptKey: "implied-consent",
        sourceLabel: "Mississippi Driver's License Manual - Implied Consent",
        sourceUrl: hb(78),
      },
      {
        id: "ms_s6_25",
        topic: "signs",
        question: "What does a pennant-shaped sign warn you about?",
        choices: [
          "A no-passing zone ahead",
          "A school crossing",
          "A railroad crossing",
          "A sharp curve",
        ],
        correctIndex: 0,
        explanation:
          "The pennant is used only for warning of a no-passing zone ahead, and it is posted on the left side of the road.",
        context:
          "Each of Mississippi's eight standard shapes has one job: octagon for stop, equilateral triangle for yield, pennant for no-passing, diamond for hazards, pentagon for schools, round for railroad crossings, vertical rectangle usually for regulations and horizontal rectangle usually for guide signs.",
        trap: "It is a triangle on its side, which makes it look like a relative of the yield sign. It is not.",
        excerptKey: "shape-pennant",
        sourceLabel: "Mississippi Driver's License Manual - Standard Shapes And Colors",
        sourceUrl: hb(27),
      },
      {
        id: "ms_s6_26",
        topic: "safety",
        question: "The rear of your car begins to slide on a wet Mississippi road. What do you do?",
        choices: [
          "Brake firmly and hold the wheel straight",
          "Steer in the direction of the skid, if it is safe to do so",
          "Press the clutch and coast",
          "Accelerate to pull the car straight",
        ],
        correctIndex: 1,
        explanation:
          "Steer the way the car is sliding, provided that does not run you off the road or into something. Braking suddenly makes it worse and the clutch is ruled out entirely.",
        context:
          "Most skids come from driving too fast for the weather and the road, so the real remedy is speed. On wet roads the manual asks for extra care in the first minutes of rain, when the surface is at its slickest, and for lower speeds anywhere water is pooling.",
        trap: "Braking is the reflex and is the one action the manual says will increase the skid.",
        excerptKey: "skid-recovery",
        sourceLabel: "Mississippi Driver's License Manual - Hazardous Conditions & Emergencies",
        sourceUrl: hb(65),
      },
      {
        id: "ms_s6_27",
        topic: "rightOfWay",
        question:
          "You have signalled and are ready to pull out of a parking space. A car is coming down the street. Who goes?",
        choices: [
          "You do, since you signalled first",
          "Whoever is traveling more slowly",
          "The car already on the street",
          "You do, if you are more than halfway out",
        ],
        correctIndex: 2,
        explanation:
          "The driver leaving a parking space does not have the right of way in Mississippi. You yield to the traffic already moving.",
        context:
          "Look back over your shoulder before you move rather than relying on a mirror, and signal before you enter the travel lane. Coming out of a driveway is treated the same way: you stop and yield, even where no stop sign exists.",
        trap: "A signal states an intention. It creates no priority, and being partly out of the space creates none either.",
        excerptKey: "parking-exit-no-row",
        sourceLabel: "Mississippi Driver's License Manual - Exiting A Parallel Parking Space",
        sourceUrl: hb(61),
      },
      {
        id: "ms_s6_28",
        topic: "speed",
        question: "What is the maximum speed for a car on a four-lane Mississippi state highway?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Sixty-five. Two-lane state and US highways are 55, and interstates are 70.",
        context:
          "Four-lane highways share the interstate's 40 mph minimum. The Natchez Trace Parkway sits on its own at 50 mph unless a lower limit is posted, and the manual reminds you that every figure in the table assumes ideal conditions.",
        trap: "The lane count decides the row, not whether the road carries a state or a US route number.",
        excerptKey: "speed-table",
        sourceLabel: "Mississippi Driver's License Manual - Legal Speeds",
        sourceUrl: hb(41),
      },
      {
        id: "ms_s6_29",
        topic: "emergencies",
        question:
          "A police car is stopped on the shoulder of a four-lane Mississippi highway with its lights flashing. What must you do?",
        choices: [
          "Maintain speed and lane, since it is not moving",
          "Merge into the lane away from it if it is safe, otherwise slow and prepare to stop",
          "Stop completely until an officer waves you past",
          "Sound your horn as you pass",
        ],
        correctIndex: 1,
        explanation:
          "Move over into the far lane where it is safe to do so. Where merging is not safe, slow down and prepare to stop if you have to, and yield the right of way either way.",
        context:
          "It is the stationary half of a rule whose moving half you already know: an emergency vehicle running lights or a siren has the right of way in any traffic situation, and you pull to the extreme right shoulder for one coming up behind you.",
        trap: "A parked emergency vehicle looks like it needs nothing from you. The people working around it are the reason for the rule.",
        excerptKey: "move-over-law",
        sourceLabel: "Mississippi Driver's License Manual - Yielding Right Of Way To Emergency Vehicles",
        sourceUrl: hb(67),
      },
      {
        id: "ms_s6_30",
        topic: "rules",
        question: "When should your turn signal go on before a Mississippi intersection?",
        choices: [
          "As you begin the turn",
          "Fifty feet before",
          "At least one hundred feet before",
          "Two hundred feet before",
        ],
        correctIndex: 2,
        explanation:
          "At least one hundred feet. The manual gives the same distance for left and right turns and for arm signals, and pairs it with slowing down.",
        context:
          "The rest of the turn sequence: know where you are going, get into the correct lane early, look in all directions before you move, keep the wheels straight while you wait, and finish the turn in the proper lane without cutting the corner or swinging wide.",
        trap: "One hundred feet is also the no-passing distance from bridges, crossings and intersections. Same number, different rule.",
        excerptKey: "arm-signal-hundred-feet",
        sourceLabel: "Mississippi Driver's License Manual - Arm Signals",
        sourceUrl: hb(42),
      },
    ],
  },
];
