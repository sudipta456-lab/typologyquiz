import type { DrivingTestSet } from "../types";

// Sets 4 to 6 of the North Dakota bank. Same sourcing as sets 1 to 3: the
// 2025-2027 Noncommercial Driver License Manual (Revised 2025), North Dakota
// Century Code Title 39, four dot.nd.gov pages, and KnowTo Drive's North
// Dakota FAQ for the online exam's own rules.
//
// Set 4 goes deliberately into the corners of the manual - recreational
// vehicles, the point system, towing, heatstroke, guide signs, crash duties -
// because NDDOT tells applicants to study the whole book and the test is drawn
// from all of it.
//
// Set 5 is built from two things. First, the places where the manual is silent
// and the statute is not: the school-bus exception on a divided highway, the
// ninth speed limit the manual omits, the point at which a minor's licence is
// cancelled, and the 2023 repeal that made the seat belt law primary
// enforcement. Second, what North Dakota learners on r/northdakota and r/fargo
// say cost them marks - school-zone speed, the signal when pulling out of a
// parallel park, complete stops, and headlights in blowing snow.
const HB =
  "https://www.dot.nd.gov/sites/www/files/documents/Drivers%20-%20documents/noncommercial-manual.pdf";
const PERMIT = "https://www.dot.nd.gov/driver/how-apply-learners-permit";
const POINTS =
  "https://www.dot.nd.gov/driver/driver-education/driver-license-points-reduction-and-points-schedule";
const K2D = "https://knowtodrive.com/northdakota-faq/";
const cc = (chapter: string) => `https://ndlegis.gov/cencode/t39c${chapter}.pdf`;

export const northdakotaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "NDDOT tells applicants to study the entire manual, and the knowledge test draws on all of it. This set goes where most study skips: the point system, towing, recreational vehicles, guide signs, crash duties and the parts of the book written for parents.",
    questions: [
      {
        id: "nd_s4_01",
        topic: "licensing",
        question:
          "At what point total does North Dakota begin suspending an adult driver's licence?",
        choices: ["6 points", "8 points", "10 points", "12 points"],
        correctIndex: 3,
        explanation:
          "Twelve points. At 12 or more the driver is notified that the authorities intend to suspend, and that an administrative hearing is available. The suspension is seven days at 12, and seven days for each point over 11 above that.",
        context:
          "Points are added roughly within 10 days of conviction and come off two ways: one point for every three-month period with no new points recorded, and three points for completing an approved driver improvement course. You may also elect the course in lieu of points for a violation worth five points or fewer, once every 12 months, but not in combination with the three-point reduction.",
        trap:
          "Twelve is the adult figure and it is the one the manual prints. For a driver under 18 the number is half that - see set 5.",
        excerptKey: "points-12",
        sourceLabel: "Noncommercial Driver License Manual - Point System",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_02",
        topic: "rules",
        question:
          "You are towing a utility trailer at 45 mph. What does the manual require?",
        choices: [
          "Safety chains or brakes capable of holding the trailer if the coupling breaks",
          "A spotter in the passenger seat",
          "A slow-moving vehicle emblem on the trailer",
          "Nothing beyond a working taillight",
        ],
        correctIndex: 0,
        explanation:
          "Above 25 mph you need safety chains, or brakes capable of holding the trailer if the coupling breaks. That is the threshold the manual gives, so it applies to almost any towing on a public road.",
        context:
          "The rest of the trailer list: turn signals, stop lights, two red reflectors and two red taillights on the rear, visible for 1,000 feet. Two amber clearance lamps at the front and two red at the back if the trailer is 80 inches or more wide. A mirror letting you see at least 200 feet behind. The manual also advises slowing down when towing in a strong North Dakota wind.",
        trap:
          "Twenty-five miles per hour sounds like a threshold you would rarely reach with a trailer. In practice it means chains on essentially every trip.",
        excerptKey: "tow-chains-25",
        sourceLabel: "Noncommercial Driver License Manual - Towing",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_03",
        topic: "signs",
        question:
          "A rectangular sign with white symbols on a blue background appears beside a North Dakota highway. What kind of information does it give?",
        choices: [
          "Recreational areas",
          "Directions and distances",
          "Services such as hospitals, telephones and gas",
          "Construction ahead",
        ],
        correctIndex: 2,
        explanation:
          "Blue is the service colour. Service signs are rectangular with white symbols on blue, and cover things like hospitals, telephones and fuel.",
        context:
          "Guide signs are all rectangular but their colours split by purpose: green for direction and distance signs and for mileposts, blue for services, brown for recreational areas. Milepost numbers tell you how far you are from the state's south or west border, or from the origin of the route within the state.",
        trap:
          "Brown and blue are both rectangular guide signs, so shape gives you nothing here. The colour is the whole message.",
        excerptKey: "sign-service-blue",
        sourceLabel: "Noncommercial Driver License Manual - Guide Signs",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_04",
        topic: "safety",
        question:
          "How quickly can the inside of a parked vehicle heat up, according to the manual?",
        choices: [
          "About 5 degrees Fahrenheit in the first 10 minutes",
          "About 10 degrees Fahrenheit in the first 30 minutes",
          "It only becomes dangerous above 90 degrees outside",
          "About 20 degrees Fahrenheit within the first 10 minutes",
        ],
        correctIndex: 3,
        explanation:
          "Almost 20 degrees Fahrenheit within the first 10 minutes. The manual pairs that with an outside temperature in the mid-60s being enough to push a car's interior above 110 degrees.",
        context:
          "Heatstroke begins at a core body temperature around 104 degrees and about 107 is lethal, and children are more vulnerable than adults. The manual's prevention advice is to look in the back seat before you lock, to keep the vehicle locked and the keys out of reach because nearly three in ten deaths happen when an unattended child gets into a car, and to act if you see a child alone in one.",
        trap:
          "A mild North Dakota spring day is not safe. The mid-60s figure is in the manual precisely because people assume the danger needs summer heat.",
        excerptKey: "heatstroke-ten-minutes",
        sourceLabel: "Noncommercial Driver License Manual - Heatstroke",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_05",
        topic: "sharing",
        question:
          "Who may operate an off-highway vehicle on a North Dakota highway right of way?",
        choices: [
          "Anyone over 12 with adult supervision",
          "Anyone, since off-highway vehicles are unregulated on public land",
          "Only the registered owner of the vehicle",
          "Someone holding a valid driver's licence, permit, or an off-highway vehicle safety certificate from the Parks and Recreation Department",
        ],
        correctIndex: 3,
        explanation:
          "You need a valid driver's licence or permit, or an off-highway vehicle safety certificate issued by the North Dakota Parks and Recreation Department. A safety certificate is the route for riders too young to be licensed.",
        context:
          "The riding rules are strict about where. Off-highway vehicles stay off the roadway, shoulder and inside bank or slope of any road except as chapter 39-29 allows, and never in the right of way of a controlled-access highway other than in an emergency. Crossings are made at about 90 degrees, from a complete stop, yielding to all roadway traffic, and on a divided highway only at an intersection.",
        trap:
          "A licensed driver may ride a registered off-highway vehicle on a paved highway posted at 55 mph or less, but a class III machine on a 65 mph highway needs a licensed driver over 16.",
        excerptKey: "ohv-licence-or-cert",
        sourceLabel:
          "Noncommercial Driver License Manual - Off-Highway Vehicles",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_06",
        topic: "sharing",
        question:
          "Between which dates may a snowmobile not be operated on a North Dakota highway right of way?",
        choices: [
          "April 1 to November 1",
          "May 1 to October 1",
          "March 15 to December 15",
          "April 15 to October 15",
        ],
        correctIndex: 0,
        explanation:
          "April 1 to November 1. The right of way includes the driving portion of the road, the median, the shoulders and the ditches on either side, so the closure is broader than it sounds.",
        context:
          "The other snowmobile rules: never on the roadway, shoulder or inside bank of any road, never in the right of way of an Interstate at all, and if you ride in a ditch you travel in the same direction as roadway traffic. Crossing a road means stopping completely before the shoulder and proceeding at right angles when clear; on a divided highway you cross only at intersections.",
        trap:
          "The dates are not about snow cover. The prohibition runs from April 1 whether or not there is still snow in the ditch.",
        excerptKey: "snowmobile-right-of-way-dates",
        sourceLabel: "Noncommercial Driver License Manual - Snowmobiles",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_07",
        topic: "licensing",
        question:
          "What is the minimum age to operate a motorized bicycle in North Dakota?",
        choices: ["12", "13", "14", "16"],
        correctIndex: 2,
        explanation:
          "Fourteen, and you must have in your immediate possession a valid operator's licence, motorized bicycle permit, temporary permit, instruction permit or motorcycle permit. Under 18 an approved safety helmet is required.",
        context:
          "The manual defines a motorized bicycle precisely: two or three wheels, no more than 32 inches wide, with foot pedals or footrests, a maximum piston or rotor displacement of 49.98 cc enabling a speed no greater than 30 mph on a level surface, and an automatic drive system that needs no clutch. Anything outside that is a motorcycle.",
        trap:
          "The helmet requirement on a motorized bicycle is only mandatory under 18. The manual recommends one at any age and on ordinary bicycles too.",
        excerptKey: "moped-age-14",
        sourceLabel:
          "Noncommercial Driver License Manual - Bicycles and Motorized Bicycles",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_08",
        topic: "rules",
        question:
          "You are driving down a long grade in the North Dakota badlands. What does the manual prohibit?",
        choices: [
          "Coasting with the gears or transmission in neutral",
          "Using the brakes more than twice",
          "Shifting gears at all",
          "Following another vehicle within 200 feet",
        ],
        correctIndex: 0,
        explanation:
          "Coasting in neutral on a downgrade is prohibited for any motor vehicle. For a truck or bus there is a second prohibition: coasting with the clutch disengaged.",
        context:
          "Coasting takes engine braking out of the equation and leaves the brakes doing all the work, which is how they overheat on a long descent. It is the same reasoning behind the manual's advice to use one foot for both pedals rather than riding the brake.",
        trap:
          "Coasting feels economical and is the one thing the manual names as forbidden on a downgrade.",
        excerptKey: "coasting-neutral",
        sourceLabel: "Noncommercial Driver License Manual - Coasting Prohibited",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_09",
        topic: "emergencies",
        question:
          "You back into a parked car in a Fargo lot and cannot find the owner. What does the manual require?",
        choices: [
          "Leave a note in a conspicuous place with your name, address and motor vehicle insurance company",
          "Report it to police within five days and nothing else",
          "Nothing, if the damage is under $4,000",
          "Leave your phone number on the windscreen",
        ],
        correctIndex: 0,
        explanation:
          "Any driver who hits an unattended vehicle must immediately try to locate and notify the owner. If that fails, you leave a note in a conspicuous place on the vehicle listing your name, address and motor vehicle insurance company.",
        context:
          "That is separate from the reporting threshold. A crash gets reported to police when combined damage reaches $4,000, or where there is injury or death. And in any crash involving injury or damage, drivers exchange name, address, insurance company and policy number.",
        trap:
          "A phone number is not what the manual asks for. Name, address and insurer are the three things the note must carry.",
        excerptKey: "crash-unattended",
        sourceLabel: "Noncommercial Driver License Manual - Crash Reports",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_10",
        topic: "licensing",
        question:
          "What is the fine for driving without liability insurance in North Dakota, first violation?",
        choices: ["$50", "$100", "$150", "$500"],
        correctIndex: 2,
        explanation:
          "One hundred and fifty dollars for a first violation, rising to $300 for a second or subsequent violation within three years, and it may result in a licence suspension.",
        context:
          "A conviction for no liability insurance also means providing proof of insurance to the division for one year and buying a duplicate licence carrying a Proof of Liability Insurance restriction. That duplicate costs $50, and another $50 to have the restriction removed at the end of the year.",
        trap:
          "The fine is the cheapest part. The duplicate licence and the removal fee add another $100 on top, and the record follows you for a year.",
        excerptKey: "insurance-fine",
        sourceLabel: "Noncommercial Driver License Manual - Liability Insurance",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_11",
        topic: "safety",
        question:
          "The manual says air bags are designed to do what?",
        choices: [
          "Replace seat belts in a frontal crash",
          "Provide supplemental protection for belted front-seat occupants in a frontal crash",
          "Protect occupants in side-impact and roll-over crashes",
          "Deploy in any crash above 15 mph",
        ],
        correctIndex: 1,
        explanation:
          "Supplemental protection, for belted front-seat occupants, in a frontal crash. Each part of that sentence is a limit: it supplements the belt rather than replacing it, it assumes you are belted, and it addresses frontal impacts.",
        context:
          "The manual is explicit that lap and shoulder belts must always be used with an airbag to protect occupants in side-impact and roll-over crashes. Airbags work best when everyone is buckled and children age 12 and under are properly restrained in the back seat.",
        trap:
          "\"The airbag will catch me\" is the belief the word supplemental is there to correct. Unbelted, the airbag arrives while you are already moving toward it.",
        excerptKey: "airbag-supplemental",
        sourceLabel: "Noncommercial Driver License Manual - Air Bags",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_12",
        topic: "rightOfWay",
        question:
          "A tow truck ahead of you is displaying a flashing yellow light. What does that mean?",
        choices: [
          "Stop and remain stopped until it passes",
          "It is warning you to slow down",
          "It has the right of way over all traffic",
          "It is out of service and may be passed freely",
        ],
        correctIndex: 1,
        explanation:
          "A yellow flashing light is a warning to slow down. The manual says it is used mostly on tow trucks and slow-moving vehicles, and it does not carry the stop-and-yield duty that red, white or blue lights do.",
        context:
          "The colour distinction matters. Flashing red, white or blue on an emergency or law enforcement vehicle means you pull to the right-hand curb and stop. Amber or white on an NDDOT maintenance vehicle parked on the Interstate or a multilane highway triggers the move-over duty instead - change lanes, or slow and pass with caution.",
        trap:
          "Yellow is the only emergency-style light that does not require you to stop. Treating it like red creates its own hazard on a busy road.",
        excerptKey: "yellow-flashing-light",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_13",
        topic: "signs",
        question:
          "What colour and shape identifies work-zone signs in North Dakota?",
        choices: [
          "Yellow diamonds with a black legend",
          "Red rectangles with white lettering",
          "White squares with a red circle and slash",
          "Orange, mostly diamond shaped, with a black legend",
        ],
        correctIndex: 3,
        explanation:
          "Orange with a black legend, and most are diamond shaped although a few are rectangular. Electronic message boards showing changing messages are used in work zones too.",
        context:
          "The colours divide cleanly: yellow diamonds are general warnings, orange means a work zone, white with black or red lettering is regulatory, green is direction, blue is services, brown is recreation. Flagpersons in work zones wear orange, yellow, strong yellow-green or fluorescent clothing and direct traffic with red flags or stop and slow paddles.",
        trap:
          "Yellow and orange are both warning families, and only one of them means workers may be a few feet from your wheels.",
        excerptKey: "wz-signs-orange",
        sourceLabel:
          "Noncommercial Driver License Manual - Construction and Maintenance Devices",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_14",
        topic: "rules",
        question:
          "You are backing out of a driveway. What does the manual say about responsibility?",
        choices: [
          "You are responsible for backing onto a lane of traffic safely",
          "Approaching traffic must yield to a vehicle already backing",
          "Responsibility is shared once half the vehicle is in the lane",
          "Sounding the horn transfers the duty to other drivers",
        ],
        correctIndex: 0,
        explanation:
          "Backing has to be done without interfering with other traffic, and the manual puts the responsibility for doing it safely on you. Nobody else acquires a duty because you have started.",
        context:
          "The manual's practical advice is to walk around the vehicle before backing to check for clearance, and to be careful not to back into children or obstacles. That is the same logic as the driveway stop rule: you cannot see what is behind a car from the driver's seat.",
        trap:
          "Being partly into the lane does not give you priority. It gives the approaching driver less room to avoid you.",
        excerptKey: "backing-responsible",
        sourceLabel: "Noncommercial Driver License Manual - Backing",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_15",
        topic: "impairment",
        question:
          "Who may be issued a temporary restricted licence after a DUI suspension in North Dakota?",
        choices: [
          "Anyone, immediately after the suspension begins",
          "Only drivers with no previous offences, after 90 days",
          "A driver who has served at least 30 days of suspension, or 14 days if participating in the 24/7 Sobriety Program",
          "Nobody - restricted licences were abolished",
        ],
        correctIndex: 2,
        explanation:
          "At least 30 days of the suspension must be served, or at least 14 days if the driver is in the 24/7 Sobriety Program. The programme participation continues until one year violation free.",
        context:
          "The manual adds a further condition that reads oddly at first: a temporary restricted licence can only be issued if within the past seven years there has been a refusal or more than one alcohol or drug related violation. A DUI suspension itself lasts 91 days for a first offence in seven years, 180 days if the concentration was .18 or greater, and longer for repeats.",
        trap:
          "The 14-day route is not a shortcut anyone can take. It is tied to enrolling in the 24/7 Sobriety Program and staying in it.",
        excerptKey: "dui-trl",
        sourceLabel:
          "Noncommercial Driver License Manual - Driving While Under the Influence",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_16",
        topic: "impairment",
        question:
          "What happens to your insurance obligations after a DUI conviction or a refusal in North Dakota?",
        choices: [
          "Nothing changes if you keep your existing policy",
          "The law requires proof of financial responsibility, an SR 22 filing",
          "Your insurer must cover you at the same rate for three years",
          "You must carry double the minimum liability limits",
        ],
        correctIndex: 1,
        explanation:
          "A DUI conviction or a refusal to take an alcohol concentration test triggers a requirement to show proof of financial responsibility, which is the SR 22 filing. Motor vehicle insurance is the usual way to satisfy it.",
        context:
          "The manual is candid about the cost: annual insurance rates could double or triple. That sits alongside the administrative penalties, which run separately from anything the court does - your licence plates and registration card may also be impounded for the length of the suspension or revocation.",
        trap:
          "The SR 22 is a filing your insurer makes with the state, not a type of policy you buy. Keeping your existing policy does not satisfy it by itself.",
        excerptKey: "dui-sr22",
        sourceLabel:
          "Noncommercial Driver License Manual - Driving While Under the Influence",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_17",
        topic: "signals",
        question:
          "The manual lists hand signals as something drivers should still know. Why?",
        choices: [
          "Because turn signals are optional on vehicles built before 1968",
          "Because the road test includes a hand-signal demonstration",
          "Because they are required whenever your vehicle is towing a trailer",
          "Because motorcyclists and bicyclists use them, and you must recognise them and give those riders room",
        ],
        correctIndex: 3,
        explanation:
          "The manual's reason is other road users. Motorists must be able to recognise hand signals given by motorcyclists and bicyclists and give them sufficient space to carry out the manoeuvre they have signalled, exactly as they would for another vehicle.",
        context:
          "The 100-foot signalling rule appears in this same section: all turn signals of intention to turn must be given continuously during the last 100 feet before the turn, whether they are electrical or given by hand.",
        trap:
          "This is not a historical curiosity. On a North Dakota county road the vehicle ahead signalling by hand is usually a cyclist, and misreading it puts you into their line.",
        excerptKey: "hand-signals-cyclists",
        sourceLabel: "Noncommercial Driver License Manual - Hand Signals",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_18",
        topic: "safety",
        question:
          "The manual gives a rule of thumb about speed and braking distance. What is it?",
        choices: [
          "Doubling your speed doubles your braking distance",
          "Doubling your speed adds half again to your braking distance",
          "Doubling your speed quadruples your braking distance",
          "Braking distance is unaffected by speed on dry pavement",
        ],
        correctIndex: 2,
        explanation:
          "Doubling your speed quadruples your braking distance. Vehicle weight works differently: doubling the weight doubles the braking distance rather than quadrupling it.",
        context:
          "That is why the 300-foot figure for a 55 mph stop grows so quickly. It also explains the manual's warning that on multi-lane highways where the limit is 70 or 80, the space you need in front of you is far larger than the same gap felt at city speeds.",
        trap:
          "Weight and speed do not scale the same way, and swapping the two multipliers is the error this question is built on.",
        excerptKey: "practice-speed-braking",
        sourceLabel:
          "Noncommercial Driver License Manual - Do These Each Time You Practice",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_19",
        topic: "emergencies",
        question:
          "What number does North Dakota publish for weather and road conditions?",
        choices: ["811", "511", "211", "311"],
        correctIndex: 1,
        explanation:
          "511 for weather and road conditions. The manual prints it alongside 911 for emergency highway assistance, and in a state with regular winter road closures it is the number that matters before you set off.",
        context:
          "It fits with the rest of the winter chapter, which is unusually long in this manual: carry a survival kit, double your following distance even with snow tires, stay with a vehicle stuck in a snowstorm because most deaths happen to people who leave, and never drive into a whiteout.",
        trap:
          "511 is for conditions, 911 for emergencies. Calling the wrong one wastes time you may not have on a closed highway.",
        excerptKey: "emergency-511",
        sourceLabel: "Noncommercial Driver License Manual - Liability Insurance",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_20",
        topic: "rightOfWay",
        question:
          "A pedestrian is halfway across a road at a place with no crosswalk. Who has the right of way?",
        choices: [
          "The pedestrian, because pedestrians always have priority",
          "Vehicles - a pedestrian crossing where there is no crosswalk must yield to all vehicles on the roadway",
          "Whoever entered the roadway first",
          "The pedestrian, but only during daylight",
        ],
        correctIndex: 1,
        explanation:
          "Outside a crosswalk, the duty runs the other way: a pedestrian crossing where there is no crosswalk must yield the right of way to all vehicles on the roadway. The manual states the pedestrian's own rule as having the right of way only in crosswalks.",
        context:
          "That does not license you to drive into someone. The manual also tells drivers to exercise due care and always be on the lookout for pedestrians, and to read a ball rolling into the street as a child about to follow it. Right of way describes who yields, not who is entitled to be hit.",
        trap:
          "\"Pedestrians always have the right of way\" is the belief this question tests, and it is wrong in both directions - outside a crosswalk they yield, and inside one you do.",
        excerptKey: "ped-no-crosswalk",
        sourceLabel: "Noncommercial Driver License Manual - Pedestrians",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s4_21",
        topic: "licensing",
        question:
          "From what age can a North Dakotan register as an organ, tissue and eye donor when applying for a permit?",
        choices: ["16", "18", "15", "14"],
        correctIndex: 3,
        explanation:
          "Fourteen - the same age as the instruction permit. Checking the Yes box on the application form serves as consent, and you can also register at donor.nd.gov.",
        context:
          "The manual asks you to tell your family, and notes that if you are under 18 your parents will be asked to affirm the decision. It also answers the two questions people most often have: donation does not prevent an open-casket funeral, and there is no charge to the donor's family.",
        trap:
          "Fourteen looks too young until you remember that it is the age at which North Dakota issues its first permit, and the donor question is asked on that application.",
        excerptKey: "organ-donor-14",
        sourceLabel:
          "Noncommercial Driver License Manual - Organ, Tissue, and Eye Donation",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_22",
        topic: "signs",
        question:
          "A round yellow railroad advance warning sign is followed by an X-shaped white sign at the tracks. What is the X-shaped sign called and what does it tell you?",
        choices: [
          "A milepost, giving the distance to the next crossing",
          "A crossbuck, marking the crossing, with a sign below giving the number of tracks",
          "A pennant, prohibiting passing at the crossing",
          "An advisory sign giving the maximum speed over the tracks",
        ],
        correctIndex: 1,
        explanation:
          "The X-shaped sign is a crossbuck. Where there is more than one track, a sign below it gives the number of tracks, and the manual's instruction is to make sure every track is clear and no train is approaching before you cross.",
        context:
          "Crossings come in two types. A passive crossing has no traffic control device at all - the decision to stop or go is entirely yours, with only the yellow advance warning sign, pavement markings and the crossbuck to help. An active crossing has flashing red lights, sometimes with bells and gates.",
        trap:
          "A cleared track is not a cleared crossing. The manual warns that a second train can be coming from the other direction on the track the first one just left.",
        excerptKey: "rr-crossbuck",
        sourceLabel:
          "Noncommercial Driver License Manual - Railroad Crossings",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_23",
        topic: "sharing",
        question:
          "Where do tractor-trailers tend to travel on a multi-lane North Dakota highway, and why?",
        choices: [
          "The centre lane, to help the flow of local traffic on and off the highway",
          "The right lane, because trucks are barred from other lanes",
          "The left lane, to keep clear of merging traffic",
          "Whichever lane has the smoothest surface",
        ],
        correctIndex: 0,
        explanation:
          "The centre lane. The manual explains it in two ways: it keeps the right lane free for traffic entering and leaving the highway, and it gives the truck driver options in both directions if they have to move to avoid something.",
        context:
          "The manual's list of mistakes around trucks is worth memorising: cutting in front of one to make an exit, lingering alongside while passing instead of passing completely on the left, tailgating so closely that the driver cannot see you in their mirrors, and underestimating how fast a large vehicle is closing on an intersection.",
        trap:
          "Trucks are not confined to the right lane in North Dakota, and treating the centre lane as blocked by a truck that has no right to be there leads to bad passing decisions.",
        excerptKey: "truck-center-lane",
        sourceLabel:
          "Noncommercial Driver License Manual - Sharing the Road with Trucks",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_24",
        topic: "emergencies",
        question:
          "Your windshield wipers fail during heavy snow. What does the manual tell you to do?",
        choices: [
          "Stop immediately in the lane you are in",
          "Turn on the defroster and continue at normal speed",
          "Slow down, put your head out the side window to see, and leave the roadway",
          "Follow the vehicle ahead closely enough to use its tracks",
        ],
        correctIndex: 2,
        explanation:
          "Slow down, look out the side window so you can see well enough to steer, and get off the roadway. It is an awkward instruction and it reflects that the alternative is driving blind.",
        context:
          "The manual gives a short answer for each failure: headlights gone means switch to parking lights and turn signals and leave the road as soon as you have slowed; a stuck accelerator means clutch or neutral first; and never turn the ignition to lock while moving, because the steering will lock the moment you try to turn.",
        trap:
          "Stopping in the lane in a snowstorm makes you the obstacle that the next vehicle cannot see. Getting off the roadway is part of the instruction.",
        excerptKey: "failure-wipers",
        sourceLabel: "Noncommercial Driver License Manual - Equipment Failure",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_25",
        topic: "parking",
        question:
          "You are parked between a safety zone and the curb next to it. What is the problem?",
        choices: [
          "It is on the manual's Do Not Park list",
          "Nothing, provided you are within one foot of the curb",
          "It is permitted for up to 15 minutes",
          "It is only prohibited during business hours",
        ],
        correctIndex: 0,
        explanation:
          "Parking between a safety zone and the adjacent curb is prohibited, as is parking within 15 feet of the points on the curb immediately opposite the ends of a safety zone. Safety zones are marked areas set aside for pedestrians.",
        context:
          "The rest of the manual's list of prohibited places is worth reading as a set: sidewalks, in front of driveways, within an intersection, on or within 10 feet of a crosswalk at an intersection, within 10 feet of a hydrant, within 15 feet of a beacon, stop sign or signal, on the roadway side of a parked vehicle, on bridges and in tunnels, beside street excavations, and anywhere a No Parking sign is posted.",
        trap:
          "A safety zone is a pedestrian refuge, not a parking bay. Blocking it forces people into the traffic lane.",
        excerptKey: "park-safety-zone",
        sourceLabel: "Noncommercial Driver License Manual - Do Not Park",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_26",
        topic: "speed",
        question:
          "The manual describes posted speed limits as maximums for what conditions?",
        choices: [
          "All weather conditions, since they are legal limits",
          "Ideal conditions",
          "Daylight hours only",
          "Dry pavement and no traffic",
        ],
        correctIndex: 1,
        explanation:
          "Ideal conditions. The manual's framing is that the posted limit is the ceiling when everything is in your favour, and that conditions may require you to drive more slowly than the sign allows.",
        context:
          "Section 39-09-01 turns that into a legal duty: you may not drive faster than is reasonable and prudent under the conditions, and you must drive with regard to actual and potential hazards. That is why a driver can be cited for excessive speed while sitting under the posted limit on ice.",
        trap:
          "Driving the posted limit in a whiteout is a violation of the basic rule even though the speedometer says you are legal.",
        excerptKey: "speed-ideal-conditions",
        sourceLabel: "Noncommercial Driver License Manual - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_27",
        topic: "signals",
        question:
          "What does the manual tell you to do when the left-turn signal shows a steady yellow arrow?",
        choices: [
          "Complete your turn quickly before it changes",
          "Treat it as a flashing yellow and turn when clear",
          "It is a warning that the left turn signal is changing to red",
          "Stop, because a yellow arrow means the turn is prohibited",
        ],
        correctIndex: 2,
        explanation:
          "A steady yellow arrow is a warning that the left-turn signal is changing to red. It is the same message as a steady yellow ball, applied to the turning movement.",
        context:
          "The turn indications run in a sequence: steady green arrow means left-turning drivers have the right of way; flashing yellow arrow means you may turn cautiously after yielding to oncoming traffic and pedestrians; steady yellow arrow warns the phase is ending; steady red arrow means stop and wait.",
        trap:
          "Steady yellow and flashing yellow arrows look similar at a glance and mean opposite things about whether you may still start a turn.",
        excerptKey: "signal-yellow-arrow-left",
        sourceLabel: "Noncommercial Driver License Manual - Turn Indications",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_28",
        topic: "rules",
        question:
          "The manual gives a specific test for when you may move back into your lane after passing. What is it?",
        choices: [
          "When the vehicle you passed flashes its headlights",
          "When you can see the entire front of the vehicle you passed in your inside rear-view mirror",
          "When you have travelled three car lengths past it",
          "When your passenger confirms it is clear",
        ],
        correctIndex: 1,
        explanation:
          "See the whole front of the passed vehicle in your inside rear-view mirror before you move over. It is a concrete check that does not depend on judging distance at speed.",
        context:
          "It works with the 200-foot rule rather than replacing it: you plan the pass so you can be back in your lane at least 200 feet before meeting an approaching vehicle, and the mirror check tells you when you are actually far enough ahead to start moving.",
        trap:
          "A headlight flash from the driver you passed is a courtesy in some places and an objection in others. The manual's test does not rely on anyone else.",
        excerptKey: "pass-mirror",
        sourceLabel: "Noncommercial Driver License Manual - Passing",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_29",
        topic: "impairment",
        question:
          "How does the manual describe the effect of over-the-counter cold medication on driving?",
        choices: [
          "It has no measurable effect at recommended doses",
          "It affects vision but not reaction time",
          "It only matters if combined with alcohol",
          "Even certain cold tablets and capsules can make you drowsy at the wheel",
        ],
        correctIndex: 3,
        explanation:
          "Even certain cold tablets and capsules can affect your ability to drive by making you drowsy, and the manual's advice is simply to read all directions carefully.",
        context:
          "The manual treats drugs and alcohol as the same problem for licensing purposes. The harsh penalties that apply to operating under the influence of alcohol apply equally to narcotic drugs, and North Dakota's implied consent covers a chemical test for alcohol and drug content alike.",
        trap:
          "\"It was only cough syrup\" is not a defence, and drowsiness at the wheel produces the same fatigue signs the manual lists elsewhere.",
        excerptKey: "drugs-cold-tablets",
        sourceLabel: "Noncommercial Driver License Manual - Drugs",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_30",
        topic: "safety",
        question:
          "The manual lists behaviours that mark aggressive driving rather than inexperience. Which of these is on the list?",
        choices: [
          "Denying entry into your lane or preventing passing",
          "Braking earlier than necessary",
          "Signalling too far in advance",
          "Driving below the posted limit",
        ],
        correctIndex: 0,
        explanation:
          "Denying entry into your lane or preventing someone from passing is on the manual's list of aggressive behaviours, alongside constant rushing and lane jumping, ignoring signs and regulations, ridiculing other drivers, revving past another car, tailgating to push someone along, and honking, yelling or gesturing.",
        context:
          "The manual's advice when you meet an aggressive driver is to get out of their way first, put your pride in the back seat, avoid eye contact, ignore gestures, wear your seat belt so you stay behind the wheel if you have to manoeuvre suddenly, and report them with a vehicle description, licence number, location and direction of travel.",
        trap:
          "Aggressive driving is defined by intent toward other drivers, not by speed alone. Blocking a pass qualifies even at the limit.",
        excerptKey: "aggressive-behaviours",
        sourceLabel:
          "Noncommercial Driver License Manual - Aggressive Driving",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_31",
        topic: "licensing",
        question:
          "A parent has signed sponsorship for a 16-year-old's licence and later changes their mind. What can they do?",
        choices: [
          "Nothing until the driver turns 18",
          "Withdraw the consent at any time, which cancels the permit or licence",
          "Request a curfew restriction be added",
          "Withdraw consent only after a moving violation",
        ],
        correctIndex: 1,
        explanation:
          "The person who consented can withdraw that consent at any time, and the permit or licence is cancelled. The teen can regain it with parental consent again, or when they turn 18.",
        context:
          "Consent of a parent or legal guardian is required for any minor to hold a permit or a licence in North Dakota, and the sponsorship carries financial liability. Where a parent cannot appear, they may designate someone through a notarized document, but the financial liability stays with the parent or guardian.",
        trap:
          "Withdrawal is not a penalty for anything and needs no reason. It is a standing power the sponsor holds until the driver turns 18.",
        excerptKey: "parental-consent-withdraw",
        sourceLabel:
          "Noncommercial Driver License Manual - Withdrawal of Parental Consent",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_32",
        topic: "sharing",
        question:
          "How much following distance does the manual recommend behind a motorcycle?",
        choices: [
          "Two seconds, since motorcycles are shorter",
          "The same three seconds as any vehicle",
          "Three or four seconds",
          "Five seconds in all conditions",
        ],
        correctIndex: 2,
        explanation:
          "Three or four seconds, so the rider has time to manoeuvre or stop in an emergency. The manual adds the reason the extra room matters - in dry conditions a motorcycle can stop more quickly than a car, so the gap closes faster than you expect.",
        context:
          "Motorcycles appear in the manual's list of situations that call for more than three seconds, alongside slippery roads, heavy loads or trailers, following large vehicles that block your view, and following a driver whose view to the rear is blocked.",
        trap:
          "The intuition that a smaller vehicle needs less room is backwards here. A bike out-brakes a car on dry pavement.",
        excerptKey: "moto-following-3-4",
        sourceLabel:
          "Noncommercial Driver License Manual - Sharing the Road with Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_33",
        topic: "rightOfWay",
        question:
          "The manual gives one scanning sequence for entering an intersection. What is it?",
        choices: [
          "Right, then left, then right again",
          "Left, then right, then left again",
          "Straight ahead, then both mirrors",
          "Left, then right, and proceed",
        ],
        correctIndex: 1,
        explanation:
          "Look first to your left, then to your right, then left again, and be prepared to yield. The second look left is the one that matters, because the nearest lane of danger is on your left and it is the one you check first and stalest.",
        context:
          "The manual repeats the same sequence in its coaching section for parents, phrased as look left, then front, then right before proceeding from a stop. Underneath it sits the manual's general warning that plenty of drivers ignore right-of-way rules, so you should always be ready to yield.",
        trap:
          "One look each way leaves the left-hand check several seconds old by the time you move. The repeat is the whole point of the sequence.",
        excerptKey: "row-look-left-right-left",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s4_34",
        topic: "emergencies",
        question:
          "What does the manual say about braking on a slippery road with anti-lock brakes?",
        choices: [
          "Pump the brakes rapidly to keep the wheels turning",
          "Keep firm and continuous pressure on the pedal",
          "Apply the brakes fully on and then fully off in sequence",
          "Use the parking brake to supplement them",
        ],
        correctIndex: 1,
        explanation:
          "Firm and continuous pressure. Pumping anti-lock brakes or letting up on them turns the system off and on and reduces its effectiveness, which is the opposite of what pumping does for older brakes.",
        context:
          "The manual gives different techniques by brake type, which is why the answers get mixed up. Drum brakes on all four wheels: pump them. Disc brakes: slow, intermittent braking, fully on then fully off, long enough to let them release so the wheels roll again. ABS: press and hold. Slamming any of them locks the wheels and starts a skid.",
        trap:
          "\"Pump the brakes on ice\" is advice from the drum-brake era and it actively degrades ABS. Modern cars want steady pressure.",
        excerptKey: "winter-abs",
        sourceLabel: "Noncommercial Driver License Manual - Winter Driving",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s4_35",
        topic: "signs",
        question:
          "What do the numbers on a North Dakota milepost sign tell you?",
        choices: [
          "How many miles remain to the next town",
          "The route number of the highway",
          "The distance to the nearest rest area",
          "How many miles you are from the state's south or west border, or from the origin of the route within the state",
        ],
        correctIndex: 3,
        explanation:
          "Mileposts count from the state's south or west border, or from where the route begins inside the state. That is why they run in one consistent direction rather than counting down to anywhere.",
        context:
          "Mileposts are long rectangles with white letters on a green background, the same colour family as direction and distance signs. They are the fastest way to give a location to 911 on a rural highway where there is nothing else to describe.",
        trap:
          "Mileposts do not count down to your destination. Knowing which end they start from is what makes them useful for reporting where you are.",
        excerptKey: "sign-milepost",
        sourceLabel: "Noncommercial Driver License Manual - Guide Signs",
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
      "The rules North Dakota learners actually get wrong: the places where the manual stops short and the Century Code carries on, the numbers that differ from every neighbouring state, and the road-test errors that Fargo and Bismarck drivers keep reporting.",
    questions: [
      {
        id: "nd_s5_01",
        topic: "sharing",
        question:
          "You are on a divided highway with a median. A school bus on the opposite roadway stops with its red lights flashing. What does North Dakota law require of you?",
        choices: [
          "Stop, because North Dakota requires all traffic in both directions to stop",
          "You need not stop, because the bus is on a different roadway of a highway with separate roadways",
          "Stop only if you are in the lane nearest the median",
          "Slow to 20 mph and pass with caution",
        ],
        correctIndex: 1,
        explanation:
          "Section 39-10-46(5) excuses a driver on a highway with separate roadways from stopping when the school bus is on a different roadway. The manual never mentions this exception - it says only that drivers approaching from both directions must stop.",
        context:
          "The exception is narrow. It needs genuinely separate roadways, not just a painted centre line or a two-way left turn lane, and there is a matching exception on a controlled-access highway where the bus is in a loading zone that pedestrians may not cross to. Everywhere else, both directions stop.",
        trap:
          "This is the gap between what the manual says and what the statute says. Reading only the manual, the answer looks like stop every time, and on an undivided road it is.",
        excerptKey: "statute-schoolbus-divided",
        sourceLabel: "North Dakota Century Code Section 39-10-46",
        sourceUrl: cc("10"),
        commonlyMissed: true,
      },
      {
        id: "nd_s5_02",
        topic: "speed",
        question:
          "A hill crest hides the road ahead so you cannot see more than about 100 feet. What speed does North Dakota law set, absent a posted limit?",
        choices: [
          "The posted limit still applies until a sign says otherwise",
          "45 mph",
          "20 mph",
          "25 mph",
        ],
        correctIndex: 2,
        explanation:
          "Twenty. Section 39-09-02(1)(d) sets 20 mph whenever the driver's view of the highway ahead is obstructed within a distance of 100 feet. The manual lists eight speed limits and leaves this one out entirely.",
        context:
          "It belongs with the other 20 mph situations in the statute: approaching an obstructed railway crossing within 50 feet, approaching an obstructed intersection within 50 feet, and passing a school during recess or at opening and closing hours. All four are about what you cannot see rather than where you are.",
        trap:
          "There is no sign for this one and the manual does not print it, so the only way to know it is from the statute. It is the sort of rule that turns up as a knowledge-test question about blind hills.",
        excerptKey: "statute-speed-view-100",
        sourceLabel: "North Dakota Century Code Section 39-09-02",
        sourceUrl: cc("09"),
        commonlyMissed: true,
      },
      {
        id: "nd_s5_03",
        topic: "licensing",
        question:
          "At how many points is a North Dakota driver under 18 cancelled, as opposed to suspended?",
        choices: ["6 or more points", "12 or more points", "9 or more points", "15 or more points"],
        correctIndex: 0,
        explanation:
          "Six. NDDOT states that for drivers under 18 the licence or privileges will be cancelled on an accumulation of 6 or more points, and section 39-06-01.1 puts it as an accumulated total in excess of five points.",
        context:
          "The manual's point chapter gives only the adult figure of 12, so a young driver reading the book alone gets a number that is wrong by half for them. Cancellation is also harsher than suspension: a cancelled minor is deemed never to have held a licence, and has to start again with an instruction permit, driver education and the full holding period. The point total does not reset when they do.",
        trap:
          "One school-bus violation is six points on its own. So is failing to give immediate notice of a reportable crash.",
        excerptKey: "web-minor-six-points",
        sourceLabel:
          "NDDOT - Driver License Points Reduction and Points Schedule",
        sourceUrl: POINTS,
        commonlyMissed: true,
      },
      {
        id: "nd_s5_04",
        topic: "safety",
        question:
          "Can a North Dakota officer stop a vehicle solely because an adult back-seat passenger is not wearing a seat belt?",
        choices: [
          "No, seat belt violations are secondary enforcement only",
          "Yes - the secondary enforcement provision was repealed in 2023",
          "No, the requirement applies only to front-seat occupants",
          "Only if the vehicle is on an Interstate",
        ],
        correctIndex: 1,
        explanation:
          "Yes. Section 39-21-41.5, headed Secondary enforcement, was repealed by the 2023 legislature. What remains is 39-21-41.4, which makes it an offence to operate a vehicle unless each occupant is wearing a properly adjusted and fastened safety belt.",
        context:
          "The manual says North Dakota's seat belt law requires all occupants to wear seat belts in all seating positions and says nothing about enforcement, so the change is invisible if you only read the book. There are narrow exemptions in the statute - a documented medical condition, rural mail carriers on duty, operators of farm vehicles and implements of husbandry, emergency medical personnel giving patient care, and cases where all the belts are already in use.",
        trap:
          "The manual is silent on enforcement rather than wrong about it, which is the harder kind of gap to notice.",
        excerptKey: "statute-belt-secondary-repealed",
        sourceLabel: "North Dakota Century Code Section 39-21-41.5",
        sourceUrl: cc("21"),
        commonlyMissed: true,
      },
      {
        id: "nd_s5_05",
        topic: "impairment",
        question:
          "You are 25, hold a full North Dakota licence, and are holding your phone to your ear to make a call while driving. Is that an offence under section 39-08-23?",
        choices: [
          "Yes - all handheld phone use while driving is prohibited",
          "Yes, unless the vehicle is stopped at a red light",
          "No, because the section applies only to drivers under 21",
          "No - the section bans composing, reading or sending an electronic message, and excludes calls and hands-free use",
        ],
        correctIndex: 3,
        explanation:
          "North Dakota's wireless device section bans using the device to compose, read or send an electronic message. It expressly carves out dialling or answering a call, reading or entering a phone number, using a GPS or navigation device, and any hands-free operation.",
        context:
          "That is narrower than the hands-free laws several neighbouring states have adopted, and it is easy to over-read the manual's wording. What the manual is right about is the definition of traffic: the ban applies while the vehicle is in motion or in temporary halt at a signal or sign, and only a lawfully parked vehicle is outside it. The penalty for texting is a $100 fine.",
        trap:
          "Being stopped at a red light does not put you outside the ban. The statute defines traffic to include a temporary halt at a signal or sign.",
        excerptKey: "statute-texting",
        sourceLabel: "North Dakota Century Code Section 39-08-23",
        sourceUrl: cc("08"),
        commonlyMissed: true,
      },
      {
        id: "nd_s5_06",
        topic: "licensing",
        question:
          "You are 22, hold a North Dakota instruction permit, and want to take a hands-free call while your supervising driver sits beside you. May you?",
        choices: [
          "Yes, hands-free is permitted on a permit",
          "Yes, as long as the supervising driver dials",
          "No - a permit holder of any age may not operate an electronic communication device to talk, compose, read or send a message while the vehicle is in motion",
          "No, but only if you are under 18",
        ],
        correctIndex: 2,
        explanation:
          "The permit restriction is total and age-blind. Section 39-06-04(5) bars a permittee from operating an electronic communication device to talk, compose, read or send an electronic message while the vehicle is in motion, whatever their age, and the manual says the same.",
        context:
          "There are three overlapping phone rules in North Dakota and they are different from each other. Any driver: no texting, hands-free calls fine. A licensed driver aged 16 or 17: no electronic communication device at all, under section 39-08-24. Anyone on an instruction permit, at any age: no device at all. The exceptions are emergency assistance, preventing a crime about to be committed, or a reasonable belief that someone's life or safety is in danger.",
        trap:
          "An adult on a permit gets the strictest rule of the three, which surprises people who have been driving legally in another state for years.",
        excerptKey: "statute-permit-phone",
        sourceLabel: "North Dakota Century Code Section 39-06-04",
        sourceUrl: cc("06"),
        commonlyMissed: true,
      },
      {
        id: "nd_s5_07",
        topic: "safety",
        question:
          "It is a bright winter afternoon and blowing snow has visibility down to a few hundred feet. Your daytime running lights are on. What else does the law require?",
        choices: [
          "Nothing - daytime running lights satisfy the requirement",
          "Hazard lights while visibility is reduced",
          "Full headlights, because the vehicle must display lighted headlamps and taillamps",
          "Fog lights only",
        ],
        correctIndex: 2,
        explanation:
          "Section 39-21-01 requires lighted headlamps, taillamps and illuminating devices whenever it is snowing or raining and conditions do not render a person or vehicle clearly discernible at 1,000 feet. Daytime running lights are not headlamps and they leave your tail lamps dark.",
        context:
          "This is the complaint North Dakota drivers raise about each other every winter: cars invisible from behind in a ground blizzard because the driver assumed the running lights were doing the job. The manual states the same 1,000-foot threshold in its night driving section.",
        trap:
          "Daytime running lights make you feel lit up because you can see the glow on the snow ahead. The vehicle behind you sees nothing at all.",
        excerptKey: "statute-lamps-required",
        sourceLabel: "North Dakota Century Code Section 39-21-01",
        sourceUrl: cc("21"),
        commonlyMissed: true,
      },
      {
        id: "nd_s5_08",
        topic: "speed",
        question:
          "North Dakota learners regularly report losing road-test points here. You enter a marked school zone during opening hours and hold 23 mph. What is the problem?",
        choices: [
          "Nothing - 23 is under the 25 mph school limit",
          "The school limit is 20 mph, so you are over it",
          "The school limit is 15 mph, so you are well over it",
          "School limits are advisory, so there is no problem",
        ],
        correctIndex: 1,
        explanation:
          "North Dakota's school limit is 20 mph, not the 25 that applies in business and residential districts generally. Twenty-three is a violation, and it is the specific error North Dakota learners describe failing road tests on.",
        context:
          "The limit applies when you pass by a school during recess or while children are going to or leaving school at opening or closing hours, unless local authorities have posted something lower. It is statutory rather than sign-dependent, though most North Dakota schools do post it.",
        trap:
          "The residential 25 is the number most drivers carry in their heads, and a school zone sits inside a residential district, which is exactly why the two get confused.",
        excerptKey: "statute-speed-school",
        sourceLabel: "North Dakota Century Code Section 39-09-02",
        sourceUrl: cc("09"),
        commonlyMissed: true,
      },
      {
        id: "nd_s5_09",
        topic: "parking",
        question:
          "How far from the nearest rail of a railroad crossing may you park in North Dakota?",
        choices: [
          "No closer than 15 feet",
          "No closer than 50 feet",
          "No closer than 25 feet",
          "There is no set distance",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen feet from the nearest rail. Section 39-10-49 lists it, and the manual's own Do Not Park list omits it entirely.",
        context:
          "The statute carries two prohibitions the manual leaves out: this one and the fire station rule - no parking within 20 feet of a fire station driveway, and none within 75 feet of the entrance on the opposite side of the street where it is properly signposted.",
        trap:
          "Fifteen feet is also North Dakota's stop distance from a crossing when a train is passing, so the same number does two jobs and is easy to attach to the wrong one.",
        excerptKey: "statute-park-railroad-15",
        sourceLabel: "North Dakota Century Code Section 39-10-49",
        sourceUrl: cc("10"),
      },
      {
        id: "nd_s5_10",
        topic: "rules",
        question:
          "North Dakota's 100-foot signalling rule. Which movements does the statute apply it to?",
        choices: [
          "Turns only",
          "Turns and lane changes only",
          "Turning, moving right or left on a roadway, and merging into or from traffic",
          "Turns, and stopping suddenly",
        ],
        correctIndex: 2,
        explanation:
          "Section 39-10-38 applies the continuous 100-foot signal to turning a vehicle, moving right or left upon a roadway, and merging into or from traffic. The manual only ever states it for turns.",
        context:
          "A separate subsection covers slowing: you may not stop or suddenly decrease speed without first giving an appropriate signal to the driver immediately behind you when there is an opportunity to do so. And the statute bars using turn signals as a courtesy or do-pass signal to drivers coming up behind you.",
        trap:
          "Signalling as you begin to drift across a lane line is too late by the statute's measure, even though almost everyone does it.",
        excerptKey: "statute-signal-100",
        sourceLabel: "North Dakota Century Code Section 39-10-38",
        sourceUrl: cc("10"),
        commonlyMissed: true,
      },
      {
        id: "nd_s5_11",
        topic: "safety",
        question:
          "Between what dates may studded snow tires be used in North Dakota?",
        choices: [
          "November 1 to April 1",
          "October 1 to May 1",
          "All year, without restriction",
          "October 15 to April 15",
        ],
        correctIndex: 3,
        explanation:
          "October 15 to April 15. Both the manual and section 39-21-40 give the same window, and the statute adds that school buses may run studded tires at any time of year.",
        context:
          "The studs themselves are also limited: they may not project more than one-sixteenth of an inch beyond the tread of the traction surface. Tire chains of reasonable proportions are permitted without a date restriction.",
        trap:
          "It is a calendar rule, not a weather rule. Snow in the third week of April does not extend the window.",
        excerptKey: "winter-studded-tires",
        sourceLabel: "Noncommercial Driver License Manual - Winter Driving",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s5_12",
        topic: "licensing",
        question:
          "You are 15 and hold a restricted Class D licence. How many passengers may you carry?",
        choices: [
          "One passenger for the first six months",
          "No passengers under 18 other than family",
          "No more than the vehicle manufacturer's suggested passenger capacity",
          "No passengers at all unless a parent is present",
        ],
        correctIndex: 2,
        explanation:
          "North Dakota's restriction is the vehicle's own capacity, not a headcount of teenagers. Section 39-06-17 says a restricted Class D licence holder may not carry more passengers than the vehicle manufacturer's suggested passenger capacity, and NDDOT states the same for permit holders.",
        context:
          "That is unusual. Most graduated licensing schemes limit the number of young passengers for the first six or twelve months, and North Dakota does not. What it limits instead is the curfew - no driving between the later of sunset or 9:00 pm and 5:00 am without a parent, guardian or someone at least 18, except directly to or from work, an official school activity or a religious activity.",
        trap:
          "The rule means one belt per person, no laps, no sitting on the console. It is not a restriction on who those people are.",
        excerptKey: "statute-restricted-passengers",
        sourceLabel: "North Dakota Century Code Section 39-06-17",
        sourceUrl: cc("06"),
        commonlyMissed: true,
      },
      {
        id: "nd_s5_13",
        topic: "parking",
        question:
          "You pull out of a parallel parking space on a Fargo street. North Dakota examiners name one omission here more than any other. What is it?",
        choices: [
          "Failing to signal before starting to move",
          "Failing to check the passenger-side mirror",
          "Turning the wheel before the vehicle moves",
          "Pulling out in a single movement rather than two",
        ],
        correctIndex: 0,
        explanation:
          "The signal. The manual's Leaving a Parking Space sequence puts it second, after the shoulder and mirror check and before yielding: look to the rear over your shoulder and in the mirror, signal before you start to move, yield to oncoming vehicles, then enter the nearest lane.",
        context:
          "Drivers treat leaving a space as a parking manoeuvre rather than as entering traffic, and the signal is what gets dropped. North Dakota road-test candidates in Fargo have been told by examiners that it is the most common infraction on the test.",
        trap:
          "Most people do signal to enter a parking space and forget to signal on the way out, because leaving does not feel like a lane change.",
        excerptKey: "park-leaving-space",
        sourceLabel:
          "Noncommercial Driver License Manual - Leaving a Parking Space",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s5_14",
        topic: "rightOfWay",
        question:
          "You are already circulating in a two-lane North Dakota roundabout when a vehicle waits to enter beside you. What does the manual tell you to do?",
        choices: [
          "Stop to let them in, since roundabouts run on courtesy",
          "Stay in your lane and keep going - entering traffic yields to you",
          "Change lanes to give them room",
          "Sound your horn to warn them",
        ],
        correctIndex: 1,
        explanation:
          "Circulating traffic has priority. The manual's roundabout sequence puts yielding on the driver entering, and tells the driver inside to stay in their lane within the roundabout.",
        context:
          "Roundabouts appeared in the Bismarck, Mandan and Lincoln area within the last few years and North Dakota drivers complain about exactly this behaviour - vehicles stopping inside the circle. Stopping is the one thing that breaks a roundabout, because everyone behind is expecting continuous flow.",
        trap:
          "Courtesy is the wrong instinct here. Stopping inside the circle to let someone in creates the rear-end crash the roundabout was built to prevent.",
        excerptKey: "roundabout-yield-circulating",
        sourceLabel: "Noncommercial Driver License Manual - Roundabouts",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s5_15",
        topic: "licensing",
        question:
          "You take the North Dakota knowledge test at a driver license site and step outside to take a phone call before finishing. What happens?",
        choices: [
          "You resume where you left off",
          "You receive a failed test score",
          "You are given a warning and allowed to continue",
          "You must restart the test from question one",
        ],
        correctIndex: 1,
        explanation:
          "You get a failed score. The manual states it twice - once at the front of the book and once in the testing checklist - that leaving the knowledge testing area before the test is completed produces a failed test score.",
        context:
          "Bringing the phone in is a separate failure. Children, pets other than service animals, backpacks, purses, paper, pens, pencils, markers, cell phones, notebooks and any other electronic device are barred from the testing area, and bringing any of them in is itself a failed score. You are responsible for securing them beforehand.",
        trap:
          "It is not a procedural warning, it is a fail. And the fee is per attempt - $5 at an office, with one attempt allowed per day.",
        excerptKey: "test-leave-area-fail",
        sourceLabel:
          "Noncommercial Driver License Manual - Check List for Testing",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s5_16",
        topic: "licensing",
        question:
          "You fail the North Dakota knowledge test online through KnowTo Drive. How soon can you retake it?",
        choices: [
          "Immediately, for another fee",
          "After 30 days",
          "After 7 days",
          "After 24 hours",
        ],
        correctIndex: 3,
        explanation:
          "After 24 hours. KnowTo Drive, which NDDOT publishes as its official online knowledge exam, states that a failed test can be retaken after 24 hours, and that five failures means waiting a year before testing online again.",
        context:
          "The online and in-office routes have different rules and different prices. Online: $10 an attempt under section 39-06-13, a 60-minute limit, and a webcam that disqualifies you if your cursor leaves the test window or a second face appears. In office: $5 an attempt with one attempt allowed per day. A disqualification online is 7 days rather than 24 hours.",
        trap:
          "Failing five times online locks you out of online testing for a year, though you can still go to a driver license site.",
        excerptKey: "k2d-retake",
        sourceLabel: "KnowTo Drive North Dakota FAQ - Registration",
        sourceUrl: K2D,
      },
      {
        id: "nd_s5_17",
        topic: "sharing",
        question:
          "How long must you maintain three feet of clearance when passing a bicycle in North Dakota?",
        choices: [
          "Until the front of your vehicle is level with the bicycle",
          "For the length of the passing manoeuvre only",
          "Until you are safely clear of the overtaken bicycle",
          "For 100 feet after passing",
        ],
        correctIndex: 2,
        explanation:
          "Section 39-10-11.1 requires you to maintain the clearance until you are safely clear of the bicycle. The three feet is a minimum applied throughout, not just at the moment you draw level.",
        context:
          "The manual adds the behavioural half: check over your shoulder after passing and before moving back to your normal position, and give extra room in bad weather. Cutting back in early is what puts a cyclist into the gutter or the gravel.",
        trap:
          "Three feet at the moment of passing and then an immediate cut back in still breaks the rule, because the trailing edge of your vehicle is what arrives last.",
        excerptKey: "statute-bike-three-feet",
        sourceLabel: "North Dakota Century Code Section 39-10-11.1",
        sourceUrl: cc("10"),
      },
      {
        id: "nd_s5_18",
        topic: "impairment",
        question:
          "An opened bottle of wine is shut in your glove compartment and nobody is drinking from it. Is that lawful in North Dakota?",
        choices: [
          "Yes, as long as the driver does not drink from it",
          "Yes, because a closed glove compartment is not the passenger area",
          "No - the statute counts a glove or utility compartment as part of the area the driver and passengers occupy",
          "Yes, provided every passenger is over 21",
        ],
        correctIndex: 2,
        explanation:
          "Section 39-08-18 names the glove compartment specifically. A utility or glove compartment is deemed to be within the area occupied by the driver and passengers, so an opened container there is exactly where the law says it may not be.",
        context:
          "An opened container has to go in the trunk, or in some other area not normally occupied by the driver and passengers where the vehicle has no trunk. Drinking in or on a motor vehicle on a public highway is separately unlawful for driver and passenger alike, and a violation carries a fifty dollar fee, recorded against the driving record only if the person was the driver.",
        trap:
          "Shutting the compartment changes nothing. The statute names it because it is the obvious hiding place, not because it works.",
        excerptKey: "statute-open-container-fee",
        sourceLabel: "North Dakota Century Code Section 39-08-18",
        sourceUrl: cc("08"),
        commonlyMissed: true,
      },
      {
        id: "nd_s5_19",
        topic: "speed",
        question:
          "You are on a paved two-lane township highway in rural North Dakota. There is no speed limit sign for miles. What is the maximum?",
        choices: ["65 mph", "60 mph", "70 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "Fifty-five. The 55 mph entry covers gravel, dirt and loose surface roads and, separately, paved two-lane county and township highways where there is no speed limit posted. The 65 mph figure exists only where a road is actually posted for it.",
        context:
          "North Dakota's list rewards reading the qualifiers. Two entries carry \"if posted\" or \"if there is no speed limit posted\", and mixing them up moves a driver 10 mph either way on the most common rural road type in the state.",
        trap:
          "Empty, straight and paved is not evidence of 65. Without a sign the answer is 55, and county roads are frequently unposted.",
        excerptKey: "speed-gravel",
        sourceLabel: "Noncommercial Driver License Manual - Speed Limits",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s5_20",
        topic: "rules",
        question:
          "North Dakota learners are told examiners fail people for rolling stops. What does the manual's coaching section actually ask for?",
        choices: [
          "A complete stop at stop signs and for right turns at red lights",
          "A three-second stop measured on the clock",
          "A stop only where a stop line is painted",
          "A slow roll where visibility is good",
        ],
        correctIndex: 0,
        explanation:
          "A complete stop at stop signs and for right turns at red lights. The manual pairs it with a scanning instruction: when proceeding from a stop, look left, then front, then right before you go.",
        context:
          "North Dakota does not put a number of seconds on a stop the way one or two states do. What it requires is that forward motion actually ceases, at the stop line or crosswalk, before the crosswalk or intersection where there is neither.",
        trap:
          "The right turn on red is the one drivers roll. It is expressly named in the manual as a place a complete stop is required.",
        excerptKey: "practice-complete-stop",
        sourceLabel:
          "Noncommercial Driver License Manual - Do These Each Time You Practice",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s5_21",
        topic: "emergencies",
        question:
          "An NDDOT maintenance truck is parked on the shoulder of a North Dakota Interstate with amber work lights flashing. What is required?",
        choices: [
          "Stop at the right-hand edge of the roadway as you would for a crash scene",
          "Nothing - amber lights carry no duty",
          "Move to a lane not adjacent to it, or slow and pass with caution if you cannot",
          "Reduce speed to 45 mph and hold your lane",
        ],
        correctIndex: 2,
        explanation:
          "Section 39-10-26(3) puts maintenance vehicles under the move-over duty: change to a lane that is not adjacent if you can do so safely, and if you cannot, proceed with caution, reduce speed and hold a safe speed for the conditions.",
        context:
          "Three separate move-over situations exist in North Dakota and they are not identical. An emergency vehicle at a crash scene on an ordinary road: stop at the right-hand edge. An emergency, law enforcement or NDDOT maintenance vehicle on the Interstate or a multilane highway outside city limits: change lanes. A stranded private vehicle with hazard lights in those same places: change lanes.",
        trap:
          "Amber lights on a tow truck in traffic are a warning to slow down; amber lights on a maintenance vehicle parked on the Interstate trigger a lane change. Same colour, different duty.",
        excerptKey: "move-over-interstate",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s5_22",
        topic: "signals",
        question:
          "You want to turn left on a red light in North Dakota. When is that lawful?",
        choices: [
          "Never - left on red is prohibited",
          "From a one-way street onto a one-way street, after stopping, unless a sign prohibits it",
          "From any street onto a one-way street",
          "Only between midnight and 5 am",
        ],
        correctIndex: 1,
        explanation:
          "One-way onto one-way only. The manual permits a left turn on a red light from a one-way street onto a one-way street, unless a sign prohibits it, and the same stopping and clear-intersection conditions apply as for a right on red.",
        context:
          "The pairing is what people get wrong. Right on red works from any street. Left on red requires both streets to be one-way, in the direction you are turning into. A sign prohibiting the movement overrides either, and some intersections display that sign electronically.",
        trap:
          "Turning left on red from a two-way street onto a one-way is not permitted, however clear the road looks. Both halves have to be one-way.",
        excerptKey: "signal-left-on-red",
        sourceLabel: "Noncommercial Driver License Manual - Traffic Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s5_23",
        topic: "parking",
        question:
          "You park facing a fire station driveway across the street. How far away must you be under North Dakota law?",
        choices: [
          "Within 75 feet is prohibited where properly signposted",
          "There is no rule for the opposite side of the street",
          "10 feet, the same as a hydrant",
          "20 feet, the same as the driveway side",
        ],
        correctIndex: 0,
        explanation:
          "Section 39-10-49 prohibits parking within 20 feet of the driveway entrance to a fire station, and on the opposite side of the street within 75 feet of that entrance where it is properly signposted.",
        context:
          "The 75-foot figure exists because a fire truck swings wide leaving a station and needs the far kerb clear to make the turn. Neither number appears in the manual, whose Do Not Park list is shorter than the statute's.",
        trap:
          "The opposite side of the street feels like it cannot be your problem. It is the side the truck has to swing into.",
        excerptKey: "statute-park-fire-station",
        sourceLabel: "North Dakota Century Code Section 39-10-49",
        sourceUrl: cc("10"),
      },
      {
        id: "nd_s5_24",
        topic: "impairment",
        question:
          "A 19-year-old is stopped in North Dakota with an alcohol concentration of .03 percent. What is the position?",
        choices: [
          "No offence - .03 is below the legal limit",
          "An offence, because the threshold under 21 is .02 percent",
          "No offence unless driving was impaired",
          "An offence only if there was a crash",
        ],
        correctIndex: 1,
        explanation:
          "Under 21 the threshold is .02 percent, so .03 puts the driver over it. That is a quarter of the adult figure and is low enough to be reached by a single drink.",
        context:
          "There are two separate problems for a driver that age. The alcohol concentration is one; the other is that anyone under 21 is prohibited from purchasing, consuming or possessing alcoholic beverages at all. And section 39-06-01.1 lets the director cancel a minor's licence for an alcohol or drug related driving offence, treating them as never having held one.",
        trap:
          ".08 is the number everyone knows and it is the wrong number for anyone under 21.",
        excerptKey: "dui-08-02",
        sourceLabel:
          "Noncommercial Driver License Manual - Driving While Under the Influence",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s5_25",
        topic: "signs",
        question:
          "Under North Dakota law, what actually triggers the duty to stop for a school bus?",
        choices: [
          "The bus coming to a stop, whatever its lights are doing",
          "The amber caution lights coming on",
          "Seeing children anywhere near the bus",
          "The bus stopped on the highway with its flashing red lights or the stop sign on its control arm in operation",
        ],
        correctIndex: 3,
        explanation:
          "Section 39-10-46(1) frames the duty around a schoolbus stopped on the highway with its flashing red lights or the stop sign on its control arm in operation, and it binds a driver meeting or overtaking the bus from either direction.",
        context:
          "Two details follow from that. The red visual signals and the stop arm may only be actuated when the bus is stopped on the highway to receive or discharge schoolchildren, so their operation is the reliable signal. And when a bus is being run for any other purpose, its SCHOOLBUS markings must be covered or concealed, which is your cue that the stopping duty is not in play.",
        trap:
          "Amber caution lights are a warning, not the trigger. They may come on between 300 and 500 feet before the stop, and the duty begins only when the reds are flashing or the arm is out.",
        excerptKey: "statute-schoolbus-stop",
        sourceLabel: "North Dakota Century Code Section 39-10-46",
        sourceUrl: cc("10"),
      },
      {
        id: "nd_s5_26",
        topic: "rules",
        question:
          "Winter conditions. The manual gives a following distance instruction that overrides the three-second rule. What is it?",
        choices: [
          "Add one second for every 10 mph",
          "Keep five seconds at all times",
          "Double your distance for following other vehicles",
          "Keep 100 feet at any speed",
        ],
        correctIndex: 2,
        explanation:
          "Double the distance. The manual says that snow tires or chains help but you should still double your following distance, which turns the three-second rule into six.",
        context:
          "The manual's other winter numbers are just as concrete: studded tires between October 15 and April 15, a $250 fine for entering an officially closed road, and firm continuous pressure on ABS rather than pumping. Its general statement is that most winter crashes are caused by driving too fast for conditions.",
        trap:
          "Snow tires do not shorten the gap you need. The manual specifically says to double it even with them fitted.",
        excerptKey: "winter-double-distance",
        sourceLabel: "Noncommercial Driver License Manual - Winter Driving",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s5_27",
        topic: "licensing",
        question:
          "A 14-year-old wants to take the North Dakota knowledge test online. What does the law require in addition to the usual conditions?",
        choices: [
          "Nothing extra - the online test is identical for all ages",
          "A driver education certificate before testing",
          "A parent or legal guardian must certify to the department that they monitored the applicant during the online examination",
          "The test must be taken at a school under staff supervision",
        ],
        correctIndex: 2,
        explanation:
          "Section 39-06-13(2)(b) requires a parent or legal guardian to certify to the department that they monitored the applicant during the online written examination before a class D instruction permit is issued to someone who passed online.",
        context:
          "The online exam has its own security layer as well: personal questions the applicant must answer during the test to deter fraud, and a webcam that disqualifies a session if the cursor leaves the test window, if captured photos do not match, or if a second person appears in frame. KnowTo Drive also requires the parent or guardian of an under-18 applicant to register alongside them.",
        trap:
          "Passing online does not produce a permit. You still have to book an appointment at a driver license office to collect it, and the manual says so in bold.",
        excerptKey: "statute-exam-online-parent",
        sourceLabel: "North Dakota Century Code Section 39-06-13",
        sourceUrl: cc("06"),
      },
      {
        id: "nd_s5_28",
        topic: "rightOfWay",
        question:
          "Two North Dakota rules govern turning left on a green ball with oncoming traffic present. Which statement is right?",
        choices: [
          "The turning driver yields, and must watch for a vehicle passing on the right of the oncoming car",
          "Oncoming traffic yields once the turning driver has entered the intersection",
          "Whoever entered the intersection first has priority",
          "The turning driver may proceed once the oncoming driver flashes their lights",
        ],
        correctIndex: 0,
        explanation:
          "The left-turning driver yields to oncoming traffic, and the manual adds the hazard that catches people out: a vehicle passing on the right of the oncoming car that has slowed or stopped. That second vehicle is invisible until it emerges.",
        context:
          "Entering the intersection does not create a right of way. The manual's general warning applies: never assume you have priority, and always be ready to yield to drivers who do not follow the rules. On a flashing yellow arrow the same duty applies with the added complication that oncoming traffic typically has green.",
        trap:
          "The oncoming driver's flash means \"I am letting you through\", not \"the lane beside me is empty\". They cannot see what they are inviting you into.",
        excerptKey: "row-left-turn-yield",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s5_29",
        topic: "sharing",
        question:
          "May a licensed 15-year-old operate a registered off-highway vehicle on a paved North Dakota highway posted at 65 mph?",
        choices: [
          "Yes, on any paved highway",
          "No - a class III machine on a paved highway posted up to 65 mph needs a licensed driver over 16",
          "Yes, provided they wear a helmet",
          "No, off-highway vehicles are barred from all paved highways",
        ],
        correctIndex: 1,
        explanation:
          "The manual splits the permission by age and machine. A licensed driver may operate a registered off-highway vehicle on gravel, dirt or loose surface roadways and on a paved highway posted at not more than 55 mph. A licensed driver over 16 may operate a registered class III machine on a paved highway posted at not more than 65 mph.",
        context:
          "Everyone under 18 on an off-highway vehicle must wear a safety helmet meeting United States Department of Transportation standards. Crossings are made at about 90 degrees from a complete stop, yielding to all roadway traffic, and only at intersections on a divided highway.",
        trap:
          "The helmet answer is true and is not the reason. The bar here is the combination of age, machine class and posted speed.",
        excerptKey: "ohv-paved-55",
        sourceLabel:
          "Noncommercial Driver License Manual - Off-Highway Vehicles Rules",
        sourceUrl: HB,
      },
      {
        id: "nd_s5_30",
        topic: "emergencies",
        question:
          "How many points does North Dakota assign for passing a stopped school bus?",
        choices: ["2 points", "4 points", "6 points", "10 points"],
        correctIndex: 2,
        explanation:
          "Six points, under the schedule in chapter 39-06.1. That single violation exceeds the five-point threshold at which a driver under 18 has their licence cancelled.",
        context:
          "For context on the scale: failing to yield the right of way is 2 points, disobeying a traffic control device is 2, failing to stop at a railroad crossing is 3, racing is 10, and driving 26 to 35 mph over the limit is 9. An adult is suspended at 12 points; a minor is cancelled above five.",
        trap:
          "A single school-bus violation ends a minor's licence outright, and cancellation is not a suspension you wait out - it treats you as never having been licensed.",
        excerptKey: "statute-schoolbus-points",
        sourceLabel: "North Dakota Century Code Section 39-06.1-10",
        sourceUrl: cc("06-1"),
        commonlyMissed: true,
      },
      {
        id: "nd_s5_31",
        topic: "signals",
        question:
          "A steady green arrow shows for your left turn while oncoming traffic has a red light. What is your position?",
        choices: [
          "You must still yield to oncoming traffic",
          "Left-turning drivers have the right of way",
          "You may turn only after the arrow becomes a green ball",
          "You may turn but must yield to any vehicle approaching the intersection",
        ],
        correctIndex: 1,
        explanation:
          "A steady green arrow is a protected turn - left-turning drivers have the right of way, in the manual's own words. Oncoming traffic is being held.",
        context:
          "It is worth reading the four turn indications as a set, because two of them permit a turn and two do not. Steady green arrow: protected, you have priority. Flashing yellow arrow: permitted, but you yield to oncoming traffic and pedestrians. Steady yellow arrow: the phase is ending. Steady red arrow: stop and wait.",
        trap:
          "Pedestrians still cross. A protected turn holds vehicles, and the manual's green arrow rule elsewhere requires yielding to anyone already in the intersection.",
        excerptKey: "signal-steady-green-left",
        sourceLabel: "Noncommercial Driver License Manual - Turn Indications",
        sourceUrl: HB,
      },
      {
        id: "nd_s5_32",
        topic: "safety",
        question:
          "A child under eight who is 58 inches tall rides in a North Dakota vehicle. What is required?",
        choices: [
          "A booster seat regardless of height",
          "A forward-facing car seat until age eight",
          "A correctly buckled safety belt is sufficient",
          "Nothing, since the child is under eight",
        ],
        correctIndex: 2,
        explanation:
          "Section 39-21-41.2 allows a child under eight who is at least 57 inches tall to use a correctly buckled safety belt instead of a child restraint system. At 58 inches this child qualifies.",
        context:
          "Below that height, a child under eight must be in a child restraint - car seat or booster. From eight through seventeen, a child must be in a restraint or correctly buckled in a safety belt. Violation is a $25 fine and one point against the driver's licence.",
        trap:
          "Fifty-seven inches is four foot nine, which is the standard height at which an adult belt fits properly. It is not an arbitrary number and it is not a weight.",
        excerptKey: "statute-child-57-inches",
        sourceLabel: "North Dakota Century Code Section 39-21-41.2",
        sourceUrl: cc("21"),
        commonlyMissed: true,
      },
      {
        id: "nd_s5_33",
        topic: "licensing",
        question:
          "How long does the KnowTo Drive online North Dakota knowledge test allow?",
        choices: ["30 minutes", "45 minutes", "There is no time limit", "60 minutes"],
        correctIndex: 3,
        explanation:
          "A 60-minute limit. KnowTo Drive's North Dakota FAQ is the only place either NDDOT or its testing platform publishes a time limit for the Class D knowledge test.",
        context:
          "The manual never states the exam's length, its question count or its pass mark, and no dot.nd.gov page does either. What is published is the process: register, take the test with a webcam and a keyboard and mouse on a desktop or laptop, get an immediate result, and book an appointment at a driver license office to collect the permit if you passed.",
        trap:
          "Sixty minutes is generous, which is why running out of it usually means a candidate is guessing rather than reading. The exam is drawn from the whole manual.",
        excerptKey: "k2d-60-minutes",
        sourceLabel:
          "KnowTo Drive North Dakota FAQ - Rules and Regulations",
        sourceUrl: K2D,
      },
      {
        id: "nd_s5_34",
        topic: "rules",
        question:
          "A vehicle you are following comes to a sudden stop and you rear-end it. Which North Dakota provision addresses following distance directly?",
        choices: [
          "Section 39-10-18, which bars following more closely than is reasonable and prudent",
          "Section 39-09-01, which sets a fixed minimum of three seconds",
          "Section 39-10-38, which requires a signal before slowing",
          "There is no statutory rule, only the manual's three-second guidance",
        ],
        correctIndex: 0,
        explanation:
          "Section 39-10-18 makes it an offence to follow another vehicle more closely than is reasonable and prudent, having due regard for the speed of the vehicles and the traffic and condition of the highway. It sets no number, which is why the manual supplies the three-second rule as a way to apply it.",
        context:
          "The statute adds a separate duty for trucks and vehicles towing another vehicle outside a business or residence district: leave enough space for an overtaking vehicle to enter it safely. The same requirement applies to caravans and motorcades, though not to funeral processions.",
        trap:
          "The three seconds is guidance for meeting a legal standard, not the legal standard itself. On ice, three seconds can still be following too closely.",
        excerptKey: "statute-following-close",
        sourceLabel: "North Dakota Century Code Section 39-10-18",
        sourceUrl: cc("10"),
      },
      {
        id: "nd_s5_35",
        topic: "licensing",
        question:
          "You are 17, hold a North Dakota permit issued four months ago, and have completed 60 hours of practice. Can you take the road test?",
        choices: [
          "Yes - the 50-hour requirement has been met",
          "Yes, if a parent signs the log",
          "No - a 16 or 17 year old must hold the permit for six months, or until turning 18",
          "No - all applicants must hold the permit for 12 months",
        ],
        correctIndex: 2,
        explanation:
          "The holding period is what governs here, not the hours. A 16 or 17 year old must hold the instruction permit for six months, or until turning 18 if that comes first, before completing or waiving the road test.",
        context:
          "The 50-hour requirement belongs to a different group. Only permit holders under 16 have to log 50 hours of supervised practice in variable conditions, with the parent or guardian signing on road-test day, and that is in addition to formal driver education. Over 16, there is no state-mandated log.",
        trap:
          "Doing more practice than required does not shorten the holding period. The two requirements attach to different age groups and neither substitutes for the other.",
        excerptKey: "web-16-17-steps",
        sourceLabel: "NDDOT - How to Apply for a Learner's Permit",
        sourceUrl: PERMIT,
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
      "A full-length run at the real thing, mixed the way the North Dakota knowledge test is - signs, signals, rules of the road, driving skills, alcohol and drugs, and the licensing rules that apply to you. No hints beyond what the exam itself would give you.",
    questions: [
      {
        id: "nd_s6_01",
        topic: "signs",
        question:
          "Which sign shape is used for one message only in North Dakota?",
        choices: [
          "The diamond",
          "The rectangle",
          "The circle",
          "The octagon",
        ],
        correctIndex: 3,
        explanation:
          "The octagon is reserved for STOP. The manual describes the stop sign as the only eight-sided sign, which makes it identifiable by outline alone in fog, glare or a language you cannot read.",
        context:
          "The other shapes each carry a family rather than a single message. Diamonds warn, rectangles guide and regulate, the downward triangle yields, and the circle is used for the railroad advance warning sign.",
        excerptKey: "sign-stop-octagon",
        sourceLabel: "Noncommercial Driver License Manual - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_02",
        topic: "signals",
        question:
          "You arrive at an intersection where the signal is flashing yellow. What should you do?",
        choices: [
          "Stop and then proceed when clear",
          "Proceed with caution",
          "Stop and wait for a green indication",
          "Treat it as a four-way stop",
        ],
        correctIndex: 1,
        explanation:
          "Flashing yellow means proceed with caution. It requires no stop, which is what separates it from a flashing red.",
        context:
          "Signals run in flashing mode late at night or when traffic is light. Flashing red is a stop sign: stop, then go when the intersection is clear. A completely dark signal is different again - stop and yield to any vehicle already in the intersection.",
        trap:
          "Flashing red and flashing yellow are frequently confused under exam pressure because both are flashing. Only red means stop.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "Noncommercial Driver License Manual - Flashing Indications",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_03",
        topic: "speed",
        question:
          "What is North Dakota's maximum speed on a paved and divided multi-lane highway that is not an Interstate?",
        choices: ["65 mph", "75 mph", "80 mph", "70 mph"],
        correctIndex: 3,
        explanation:
          "Seventy miles per hour, unless something else is posted. The 80 mph figure is reserved for rural Interstate highways.",
        context:
          "The full list runs 20, 25, 55, 65, 70 and 80, and the qualifiers matter as much as the numbers - 65 only where posted for that speed, 55 on gravel and on unposted paved two-lane county and township roads.",
        excerptKey: "speed-multilane",
        sourceLabel: "Noncommercial Driver License Manual - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_04",
        topic: "rightOfWay",
        question:
          "You are entering a roundabout. Which of these does the manual list among the steps?",
        choices: [
          "Yield to pedestrians and bicyclists",
          "Sound your horn on entry",
          "Enter from the left lane whatever your exit",
          "Come to a full stop at the yield line",
        ],
        correctIndex: 0,
        explanation:
          "Yielding to pedestrians and bicyclists is one of the manual's seven roundabout steps, alongside reducing speed, choosing the correct lane, yielding to circulating traffic, staying in your lane, not passing trucks, and clearing the roundabout for emergency vehicles.",
        context:
          "Lane choice in a multi-lane roundabout follows the same logic as an ordinary intersection: left lane to turn left, right lane to turn right, all lanes for straight through, unless signs and markings say otherwise.",
        trap:
          "There is no requirement to stop on entry, only to yield. Stopping when the circle is clear is what causes rear-end collisions there.",
        excerptKey: "roundabout-yield-circulating",
        sourceLabel: "Noncommercial Driver License Manual - Roundabouts",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_05",
        topic: "rules",
        question:
          "Two solid yellow lines separate the lanes on a two-lane road. What do they mean?",
        choices: [
          "Passing is allowed in one direction only",
          "Passing is allowed when the way is clear",
          "No passing in either direction; you may cross only as part of a left turn",
          "The road is about to become one-way",
        ],
        correctIndex: 2,
        explanation:
          "Two solid yellow lines mean no passing in either direction. Crossing them is permitted only as part of a left-turn manoeuvre.",
        context:
          "One solid line beside one broken line means no passing while you are in the lane next to the solid one, and that solid line may still be crossed to turn left. A broken yellow line on both sides may be crossed to turn left or to pass.",
        excerptKey: "marking-double-solid",
        sourceLabel: "Noncommercial Driver License Manual - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_06",
        topic: "parking",
        question:
          "How close to a crosswalk at an intersection may you park in North Dakota?",
        choices: [
          "No closer than 30 feet",
          "No closer than 20 feet",
          "No closer than 15 feet",
          "No closer than 10 feet",
        ],
        correctIndex: 3,
        explanation:
          "Ten feet. North Dakota uses 10 feet for a crosswalk at an intersection and for a fire hydrant, and 15 feet for a beacon, stop sign or traffic control signal at the side of the roadway.",
        context:
          "The statute at 39-10-49 also prohibits parking on the crosswalk itself, within an intersection, on a sidewalk and in front of any driveway. Those need no measurement at all.",
        trap:
          "Twenty feet is the crosswalk figure in a good many states. North Dakota's is 10.",
        excerptKey: "park-no-sidewalk-driveway",
        sourceLabel: "Noncommercial Driver License Manual - Do Not Park",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s6_07",
        topic: "safety",
        question:
          "How far ahead of oncoming traffic must you dim your headlights?",
        choices: ["300 feet", "500 feet", "200 feet", "1,000 feet"],
        correctIndex: 1,
        explanation:
          "Five hundred feet before meeting oncoming traffic. When following another vehicle the distance is 300 feet.",
        context:
          "Both figures appear in the manual and in section 39-21-21. Failing to dim is a one-point violation on North Dakota's schedule.",
        trap:
          "Five hundred and 300 are both correct North Dakota numbers for different situations. Meeting is the larger.",
        excerptKey: "night-dim-500-300",
        sourceLabel: "Noncommercial Driver License Manual - Night Driving",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_08",
        topic: "impairment",
        question:
          "What does North Dakota's implied consent rule mean for a licensed driver?",
        choices: [
          "You have consented to a chemical test of blood, breath, urine or saliva",
          "You have consented to a search of your vehicle at any traffic stop",
          "You have agreed to carry proof of insurance at all times",
          "You have agreed to a vision test at any time",
        ],
        correctIndex: 0,
        explanation:
          "By accepting a licence to drive in North Dakota you have already consented to a chemical test to determine alcohol or drug content in your blood, breath, urine or saliva.",
        context:
          "Refusing the test, or a roadside preliminary breath test, revokes the licence for 180 days to three years and triggers an SR 22 filing requirement. The manual's argument for taking it is short: if you are not legally intoxicated, the test will show it.",
        excerptKey: "implied-consent",
        sourceLabel: "Noncommercial Driver License Manual - Implied Consent",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_09",
        topic: "sharing",
        question:
          "What does the manual say about lingering beside a tractor-trailer while passing?",
        choices: [
          "It is safe if you stay in the truck's mirror",
          "Move to the right lane and pass on that side",
          "Match the truck's speed until the road opens up",
          "Do not linger - pass completely, and always on the left side",
        ],
        correctIndex: 3,
        explanation:
          "Pass a tractor-trailer completely and always on the left. Lingering alongside puts you where the driver cannot take evasive action if an obstacle appears ahead of them.",
        context:
          "The truck's blind spots run up to 20 feet in front of the cab, along both sides and particularly beside the cab, and up to 200 feet behind. The manual's rule of thumb is that if you cannot see the driver in their side mirror, they cannot see you.",
        excerptKey: "truck-pass-left",
        sourceLabel:
          "Noncommercial Driver License Manual - Sharing the Road with Trucks",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_10",
        topic: "licensing",
        question:
          "At what age does a restricted North Dakota Class D licence become unrestricted?",
        choices: ["16", "17", "18", "21"],
        correctIndex: 0,
        explanation:
          "At 16. A 15-year-old who passes the road test gets a restricted Class D licence, and at 16 it transitions to an unrestricted one.",
        context:
          "While restricted, the driver may only operate a vehicle belonging to a parent, guardian, grandparent, sibling, aunt or uncle, and may not drive between the later of sunset or 9:00 pm and 5:00 am without a parent, guardian or someone at least 18, except directly to or from work, an official school activity or a religious activity.",
        excerptKey: "minor-16-unrestricted",
        sourceLabel:
          "Noncommercial Driver License Manual - Minors Driver License",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_11",
        topic: "emergencies",
        question:
          "You are the first vehicle at a crash with injuries outside city limits in North Dakota. Who do you report it to?",
        choices: [
          "The local police department",
          "NDDOT",
          "Your insurance company only",
          "The Highway Patrol or the county sheriff's office",
        ],
        correctIndex: 3,
        explanation:
          "Outside city limits, immediate reporting goes to the Highway Patrol or the county sheriff's office. Inside a city it goes to the local police.",
        context:
          "The duty is triggered by injury, death, or combined damage of $4,000 or more. Drivers must also exchange name, address, motor vehicle insurance company and policy number. Where the driver cannot give notice and does not own the vehicle, the owner has five days from learning of the crash to supply what was not given.",
        excerptKey: "crash-report-outside-city",
        sourceLabel: "Noncommercial Driver License Manual - Crash Reports",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_12",
        topic: "signs",
        question:
          "A yellow sign warns of a lane reduction ahead. What should you do?",
        choices: [
          "Speed up to secure a place in the remaining lane",
          "Move safely into the proper lane",
          "Stop and wait for the traffic ahead to clear",
          "Straddle the lane line until the merge point",
        ],
        correctIndex: 1,
        explanation:
          "Move safely into the proper lane. The manual's instruction for lane reduction signs is exactly that - the sign exists so the merge can be done early and calmly rather than at the taper.",
        context:
          "The warning family includes several lane-related messages: added lane, where new traffic will not have to merge; divided highway begins and divided highway ends; two-way traffic; and traffic merging from the right.",
        excerptKey: "sign-lane-reduction",
        sourceLabel: "Noncommercial Driver License Manual - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_13",
        topic: "rules",
        question:
          "How does the manual describe the correct approach to a right turn?",
        choices: [
          "Stay as far to the right as possible and turn close to the right curb",
          "Swing left first to give the vehicle room",
          "Approach from the centre of the lane",
          "Use the shoulder to keep the lane clear",
        ],
        correctIndex: 0,
        explanation:
          "Stay as far to the right as possible on the approach and make the turn close to the right curb. That keeps a cyclist or another vehicle from slipping up your inside.",
        context:
          "Left turns are handled by combination in the manual. Two-way to two-way: begin as close to the centreline as possible. Two-way to one-way: left wheels near the centreline, turn before the centre of the intersection, enter the left lane. One-way to one-way: turn from the left lane, close to the left curb.",
        trap:
          "Swinging wide first is what a tractor-trailer has to do because of its length. A car doing it invites someone into the gap.",
        excerptKey: "turn-right-close-curb",
        sourceLabel: "Noncommercial Driver License Manual - Turning",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_14",
        topic: "safety",
        question:
          "A deer crossing sign is posted on a rural North Dakota road at dusk. What does the manual advise?",
        choices: [
          "Use high beams continuously to spot animals earlier",
          "Swerve if an animal enters the road",
          "Drive at slower speeds in areas where deer crossing signs are posted",
          "Sound the horn continuously through the area",
        ],
        correctIndex: 2,
        explanation:
          "Slow down where deer crossing signs are posted, and pay particular attention at dawn and dusk. Those are the hours when deer move and when your own vision is worst.",
        context:
          "The manual is explicit about what not to do if an animal does enter the road: do not swerve, because that can produce a worse crash - hitting a tree or another vehicle, or rolling the car. Keeping your eyes moving and scanning for animals, pedestrians and cyclists is the general night-driving instruction.",
        trap:
          "Swerving is the instinct and the manual names it as the thing that turns a survivable impact into a rollover.",
        excerptKey: "night-do-not-swerve",
        sourceLabel: "Noncommercial Driver License Manual - Night Driving",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_15",
        topic: "impairment",
        question:
          "What is the fine for a first DUI conviction in North Dakota where the alcohol concentration is below .16 percent?",
        choices: ["$250", "$500", "$750", "$1,000"],
        correctIndex: 1,
        explanation:
          "Five hundred dollars for a first conviction. At .16 percent or greater it rises to at least $750 plus two days imprisonment, which may be converted to community service.",
        context:
          "The administrative suspension runs separately from the court penalty. A first offence within seven years suspends the licence for 91 days, or 180 days where the concentration was .18 or greater.",
        excerptKey: "dui-first-500",
        sourceLabel:
          "Noncommercial Driver License Manual - Driving While Under the Influence",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_16",
        topic: "rightOfWay",
        question:
          "You are leaving a private driveway onto a North Dakota street. Who has the right of way?",
        choices: [
          "You do, once your front wheels are on the road",
          "All oncoming traffic on the roadway",
          "Whoever is travelling faster",
          "Traffic from the left only",
        ],
        correctIndex: 1,
        explanation:
          "A vehicle entering or crossing a roadway from a private drive must yield to all oncoming traffic. There is no partial priority for having started the manoeuvre.",
        context:
          "In a business or residential district there is an additional requirement: come to a complete stop immediately before crossing the sidewalk area, or before entering the roadway where there is no sidewalk.",
        excerptKey: "row-private-drive",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_17",
        topic: "sharing",
        question:
          "How should you treat a pedestrian in an unmarked crosswalk at an intersection?",
        choices: [
          "Yield, because pedestrians in marked and unmarked crosswalks have the right of way",
          "Proceed, because only marked crosswalks carry priority",
          "Yield only if they raise a hand",
          "Yield only during school hours",
        ],
        correctIndex: 0,
        explanation:
          "Marked and unmarked crosswalks are treated alike. Pedestrians in either have the right of way, and drivers must yield when a pedestrian is in the driver's lane of travel.",
        context:
          "The unmarked crosswalk is the sidewalk line continued across the intersection. The manual's parking and stopping rules use the same idea: where there are no lines at an intersection you stop before entering the crosswalk area, and if there is no crosswalk, before entering the intersection.",
        trap:
          "Absence of paint is not absence of a crosswalk. Most North Dakota intersections have unmarked ones on at least one leg.",
        excerptKey: "row-pedestrians",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_18",
        topic: "emergencies",
        question:
          "Your vehicle is stuck in a snowstorm on a North Dakota highway. What does the manual tell you to do?",
        choices: [
          "Walk to the nearest farmhouse for help",
          "Stay with the vehicle",
          "Run the engine continuously for warmth",
          "Sleep until conditions improve",
        ],
        correctIndex: 1,
        explanation:
          "Stay with the vehicle. The manual's reason is blunt: most deaths occur when people leave their vehicles and get lost.",
        context:
          "The rest of the advice is about staying alive inside it - open the windows slightly and run the vehicle and heater only for short periods to avoid carbon monoxide poisoning, stay active, and do not panic. The manual also tells you to carry a winter survival kit with warm clothing, footwear, a shovel and energy food.",
        trap:
          "Walking looks reasonable when you can see lights. In a ground blizzard those lights disappear within a few dozen yards.",
        excerptKey: "winter-stay-with-vehicle",
        sourceLabel: "Noncommercial Driver License Manual - Winter Driving",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_19",
        topic: "licensing",
        question:
          "What must a North Dakota permit holder do after passing the knowledge test online?",
        choices: [
          "Nothing - the permit is mailed automatically",
          "Print the confirmation and carry it as a permit",
          "Make an appointment at a driver license office to obtain the permit",
          "Retake the test in person within 30 days",
        ],
        correctIndex: 2,
        explanation:
          "Passing online does not produce a permit. You must make an appointment to visit a North Dakota driver license office to obtain it, and the manual states this in bold on its own page at the front of the book.",
        context:
          "The appointment is where identity, residence address and social security number are verified, and where a sponsor under 18 signs. You need proof of legal presence and current name and date of birth, plus two documents proving a North Dakota residence address - a post office box will not do.",
        excerptKey: "permit-online-then-office",
        sourceLabel: "Noncommercial Driver License Manual - Permits",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_20",
        topic: "signals",
        question:
          "A traffic signal is dark because of a power outage. What must a driver do?",
        choices: [
          "Stop and yield the right of way to any vehicle in the intersection",
          "Proceed with caution at reduced speed",
          "Treat it as a flashing yellow",
          "Wait for the power to be restored",
        ],
        correctIndex: 0,
        explanation:
          "Stop, and yield the right of way to any vehicle already in the intersection. The manual gives the power outage as its own example of when this applies.",
        context:
          "It is closest to the flashing red rule but not identical to it. Flashing yellow means proceed with caution without stopping, and flashing red means stop then proceed when the intersection is clear of pedestrians and vehicles.",
        excerptKey: "signal-dark",
        sourceLabel: "Noncommercial Driver License Manual - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_21",
        topic: "rules",
        question:
          "Which of these is a place the manual says you must never pass?",
        choices: [
          "On a four-lane divided highway",
          "Between sunset and sunrise",
          "In a business district",
          "While approaching the top of a hill or a curve",
        ],
        correctIndex: 3,
        explanation:
          "Approaching the top of a hill or a curve is on the manual's never-pass list, along with within 100 feet of an intersection, railroad crossing or tunnel, wherever a marking or sign indicates no passing, and whenever fog, snow or rain has reduced your view.",
        context:
          "The manual's own framing for crests and curves is a good habit generally: whenever there is a hill or curve ahead, treat it as though there is oncoming traffic just beyond it.",
        excerptKey: "pass-never-100-feet",
        sourceLabel: "Noncommercial Driver License Manual - Passing",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_22",
        topic: "speed",
        question:
          "You are approaching an intersection where a building blocks your view of cross traffic, and nothing is posted. What is the maximum speed?",
        choices: ["30 mph", "25 mph", "20 mph", "15 mph"],
        correctIndex: 2,
        explanation:
          "Twenty miles per hour when approaching an intersection where your view is in any way obstructed, unless something else is posted.",
        context:
          "The statute defines the obstruction precisely: your view is deemed obstructed if, in the last 50 feet of your approach, you do not have a clear and uninterrupted view of the intersection and of traffic on all the highways entering it for 200 feet.",
        trap:
          "There is no sign for this limit. It applies because of what the buildings do to your sight lines.",
        excerptKey: "speed-intersection-obstructed",
        sourceLabel: "Noncommercial Driver License Manual - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_23",
        topic: "safety",
        question:
          "The manual's coaching section gives one following-distance figure for ordinary traffic flow. What is it?",
        choices: [
          "At least a 3 to 4 second space",
          "At least a 2 second space",
          "At least a 5 second space",
          "At least four car lengths",
        ],
        correctIndex: 0,
        explanation:
          "At least a 3 to 4 second space between your vehicle and others in traffic flow, in the manual's parent-coaching list. The main Following and Stopping Distances chapter teaches the three-second rule and tells you to stretch it to four or more when conditions call for it.",
        context:
          "The list around it is compact and testable: check mirrors every 6 to 8 seconds, stay out of the No-Zone that extends about 15 feet on all sides of a truck or bus, and remember that doubling your speed quadruples your braking distance.",
        excerptKey: "practice-3-4-second",
        sourceLabel:
          "Noncommercial Driver License Manual - Do These Each Time You Practice",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_24",
        topic: "parking",
        question:
          "You are parking uphill on a North Dakota street with a curb. Which way do the front wheels point?",
        choices: [
          "Toward the curb",
          "Straight ahead",
          "Away from the curb",
          "Toward the centre of the road, then straightened",
        ],
        correctIndex: 2,
        explanation:
          "Uphill with a curb, the wheels turn away from the curb, so that a rolling car backs into it rather than into the traffic lane.",
        context:
          "Downhill with a curb is the opposite - wheels toward the curb. Uphill with no curb is different again: turn the wheels toward the shoulder so the vehicle would roll off the road rather than onto it.",
        trap:
          "The uphill and downhill answers are mirror images, which is why they get swapped. Work out where the car would roll and the answer follows.",
        excerptKey: "park-hill-signs",
        sourceLabel: "Noncommercial Driver License Manual - Parking on a Hill",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_25",
        topic: "sharing",
        question:
          "What does the manual say about a bicycle lane when you are about to turn right?",
        choices: [
          "Never enter it under any circumstances",
          "Enter it only after stopping",
          "Avoid driving in it other than to make a right turn, and signal and look before moving into it",
          "Use it as a right-turn lane at all times",
        ],
        correctIndex: 2,
        explanation:
          "Avoid designated bicycle lanes except to make a right turn, and do that safely - signal and look before moving into the lane on the approach to your turn. The manual also tells you to check your blind spot for bicyclists before initiating a right turn.",
        context:
          "Right turns are the most common conflict point between drivers and cyclists, because a cyclist travelling straight is coming up on the inside of a vehicle that is about to cross their path. Most crashes between motor vehicles and bicycles happen at intersections.",
        excerptKey: "bike-lane-right-turn",
        sourceLabel:
          "Noncommercial Driver License Manual - Sharing the Road with Bicycles",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_26",
        topic: "emergencies",
        question:
          "Rain has just started on a hard-surfaced North Dakota road. Why is that particularly slippery?",
        choices: [
          "Water combines with road dirt and oil to form a slick film between the tires and the surface",
          "Cold rain freezes on contact even in summer",
          "New rain washes gravel onto the road",
          "Tires expand slightly when wet",
        ],
        correctIndex: 0,
        explanation:
          "The first rain lifts accumulated dirt and oil and floats it into a slick film between the tires and the roadway. That is why the first few minutes of a shower are worse than a sustained downpour.",
        context:
          "Deeper water brings a second hazard - hydroplaning, where the tires ride on water rather than on the road surface. The manual's answer to both is the same: slow down, be alert, and remember that rain also cuts visibility.",
        excerptKey: "rain-slippery-start",
        sourceLabel: "Noncommercial Driver License Manual - Rain",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_27",
        topic: "signs",
        question:
          "You see a fluorescent yellow-green sign showing two figures walking. What is it?",
        choices: [
          "A regulatory sign prohibiting pedestrians",
          "A guide sign to a walking trail",
          "A construction sign",
          "A pedestrian or school warning sign",
        ],
        correctIndex: 3,
        explanation:
          "Fluorescent yellow-green is used for pedestrian and school warning signs in North Dakota, and standard yellow is used for the same messages. Both colours mean the same thing.",
        context:
          "The manual distinguishes the school signs by message: one tells you a school or a marked school crossing is ahead, another warns of a crosswalk for school children. The pedestrian version warns of people crossing the road generally.",
        trap:
          "The unusual colour makes people look for an unusual meaning. It is a warning sign in a high-visibility colour, nothing more.",
        excerptKey: "sign-school-pedestrian-colour",
        sourceLabel: "Noncommercial Driver License Manual - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_28",
        topic: "impairment",
        question:
          "How long does a first DUI suspension last in North Dakota for an offence within seven years?",
        choices: ["30 days", "60 days", "91 days", "180 days"],
        correctIndex: 2,
        explanation:
          "Ninety-one days for a first offence in seven years. Where the alcohol concentration was .18 or greater, a first offence draws 180 days.",
        context:
          "The ladder continues: 365 days for a second offence in seven years, two years for a second at .18 or greater or a third offence, and three years for a third or subsequent at .18 or greater. A refusal is revocation for 180 days to three years.",
        excerptKey: "dui-suspension-91",
        sourceLabel:
          "Noncommercial Driver License Manual - Driving While Under the Influence",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_29",
        topic: "rightOfWay",
        question:
          "A school bus ahead switches on its amber caution lights. What does that mean?",
        choices: [
          "The bus is about to stop and the red flashing lights will soon come on",
          "The bus is merging into your lane",
          "The bus has finished loading and is moving off",
          "Children have already crossed and you may pass",
        ],
        correctIndex: 0,
        explanation:
          "Amber caution lights are the warning that the bus is about to stop and that the red flashing lights will come on shortly. The statute allows the driver to activate them between 300 and 500 feet before the stop.",
        context:
          "Once the red lights are flashing, traffic in both directions stops and may not move until the bus starts moving, the bus driver signals it past, or the red lights stop flashing. The manual's advice is to be especially alert every time you see a school bus.",
        trap:
          "Amber is your last chance to plan a stop rather than an invitation to get past before the reds come on.",
        excerptKey: "schoolbus-yellow-lights",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s6_30",
        topic: "licensing",
        question:
          "Your North Dakota licence expired 14 months ago. What does NDDOT require?",
        choices: [
          "A renewal fee and a vision test only",
          "Nothing beyond the standard renewal",
          "You must retest",
          "A new sponsorship form",
        ],
        correctIndex: 2,
        explanation:
          "NDDOT requires you to retest if your licence has been expired more than one year. Under a year, the ordinary renewal applies.",
        context:
          "Two other renewal figures are worth keeping straight: you may renew up to 10 months before expiry without losing any remaining time, and a vision certificate presented instead of a test must be less than six months old. The licence itself expires at midnight on your birthday.",
        excerptKey: "web-retest-expired",
        sourceLabel: "NDDOT - Driver License Requirements",
        sourceUrl:
          "https://www.dot.nd.gov/driver/driver-education/driver-license-requirements",
      },
    ],
  },
];
