import type { DrivingTestSet } from "../types";

// Sources as for sets 1-3: the North Carolina Driver Handbook (revised May
// 2025), NCDMV's own pages, 19A NCAC 03B .0201 for the pass marks the
// handbook never states, NCDOT's Move Over Law page for the fine, and the
// N.C. Department of Insurance for the liability minimums that changed on
// 1 July 2025 and which the printed handbook still shows at the old figures.
// Questions are original; explanations and context are our own words.
const HB =
  "https://www.ncdot.gov/dmv/license-id/driver-licenses/new-drivers/Documents/nc-driver-handbook.pdf";
const TESTS =
  "https://www.ncdot.gov/dmv/license-id/driver-licenses/new-drivers/Pages/driver-license-tests.aspx";
const RULE =
  "https://www.ncdot.gov/about-us/how-we-operate/policy-process/rules/Documents/19a-ncac-03b-0201-emergency-rule.pdf";
const MOVEOVER =
  "https://www.ncdot.gov/initiatives-policies/safety/driving-safety/Pages/move-over-law.aspx";
const INSURANCE =
  "https://www.ncdoi.gov/changes-rating-automobile-insurance-policies-effective-july-1-2025";

export const northcarolinaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Wider Ground",
    difficulty: "medium",
    description:
      "The rest of the handbook: moving over for stopped emergency vehicles, equipment and inspection rules, highway numbering, and the penalties North Carolina attaches to speed once you are above 55 mph.",
    questions: [
      {
        id: "nc_s4_01",
        topic: "rules",
        question:
          "A police car is stopped on the shoulder with its warning lights on, within twelve feet of the roadway. You are on a highway with two lanes running your way. What must you do?",
        choices: [
          "Slow to a reduced speed but stay in the lane nearest the police car",
          "Move out of the lane nearest the stopped vehicle and stay there until you are safely past",
          "Stop completely until the officer waves you on",
          "Sound your horn as you go by",
        ],
        correctIndex: 1,
        explanation:
          "Where there are at least two lanes in your direction, you change out of the lane nearest the stopped vehicle and remain in the other lane until you are safely clear of it.",
        context:
          "Slowing down is the fallback rather than the rule. It applies only where the road offers a single lane in your direction, in which case you reduce to a safe speed and hold it until completely past. The requirement covers any authorised emergency vehicle with warning lights on that is parked or standing within twelve feet of the roadway, and that includes public service vehicles assisting wrecked or disabled cars.",
        trap:
          "Slowing instead of moving over when a second lane is available. Slowing is the one-lane answer, not the general one.",
        excerptKey: "move-over-12-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Move Over",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_02",
        topic: "licensing",
        question: "What does failing to obey North Carolina's Move Over Law cost you?",
        choices: [
          "A written warning on a first offence",
          "A $50 fine",
          "Two licence points and nothing more",
          "A $250 fine, and possibly misdemeanour or felony charges if someone is hurt or property damaged",
        ],
        correctIndex: 3,
        explanation:
          "A fine of two hundred and fifty dollars, and a driver who injures someone or damages property in the process can face misdemeanour or felony charges on top of it.",
        context:
          "The law reaches further than police cars. NCDOT lists law enforcement, ambulances and fire trucks alongside its own safety patrol and maintenance trucks, highway contractors, tow trucks and utility trucks. Once you are past the stopped vehicle you may merge back and return to the posted limit.",
        trap:
          "Assuming it applies only to police vehicles. Tow trucks and utility trucks are covered by the same rule.",
        excerptKey: "move-over-fine",
        sourceLabel: "NCDOT - Move Over Law",
        sourceUrl: MOVEOVER,
      },
      {
        id: "nc_s4_03",
        topic: "signs",
        question:
          "You see a sign in blue and white beside the highway. What kind of information does it carry?",
        choices: [
          "A regulation you must obey",
          "A nearby hospital, Highway Patrol station or telephone",
          "A warning about the road ahead",
          "A toll charge on the road ahead",
        ],
        correctIndex: 1,
        explanation:
          "Blue and white marks services: a hospital, a Highway Patrol station or a telephone nearby. It is a guide sign, not a regulatory one.",
        context:
          "Guide signs are rectangular and come in green, brown or blue, giving directions and distances rather than instructions. Getting the colour families straight is worth a mark or two on the signs test: red and white for regulation, yellow for general warning, orange for work zones, and green, brown or blue for guidance. If you are lost, pull onto the shoulder to read a sign rather than stopping in the road.",
        trap:
          "Confusing blue service signs with blue reflective pavement markers, which mark fire hydrants rather than services.",
        excerptKey: "blue-white-services",
        sourceLabel: "NC Driver Handbook - Chapter 5, Guide/Informational Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_04",
        topic: "speed",
        question:
          "You are convicted of driving 72 mph in a 55 mph zone. What happens to your driving privilege?",
        choices: [
          "Revocation for at least 30 days",
          "Three licence points and no revocation",
          "A 60-day revocation",
          "Nothing, unless it is a second offence",
        ],
        correctIndex: 0,
        explanation:
          "Two conditions have to stack for this penalty, and both are met here: more than fifteen miles per hour over the limit, while travelling faster than 55 mph. That brings a revocation of at least thirty days.",
        context:
          "The number 55 does a lot of work in North Carolina's speed penalties. Speeding above 55 is worth three licence points rather than the two an ordinary moving violation carries. Two convictions of speeding over 55 inside twelve months can bring a suspension, as can one such conviction paired with a reckless driving conviction inside a year. A second over-55-and-15-over charge inside a year, or speeding plus reckless driving on the same occasion, takes the revocation to sixty days.",
        trap:
          "Testing only one of the two conditions. Eighteen over in a 35 zone does not trigger this, because you were never above 55.",
        excerptKey: "revoke-30-days-15-over",
        sourceLabel: "NC Driver Handbook - Chapter 3, Suspensions",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s4_05",
        topic: "safety",
        question: "How fast does an air bag come out of the dashboard in a crash?",
        choices: ["Around 50 mph", "Up to 200 miles per hour", "Around 100 mph", "Around 20 mph"],
        correctIndex: 1,
        explanation:
          "Up to two hundred miles per hour, faster than you can blink. That is what makes it life-saving for a belted adult sitting back and dangerous for anyone sitting too close.",
        context:
          "Air bags are supplemental to belts rather than a replacement for them, which is why the belt law applies whether or not the car has them. The practical consequences follow from the speed: children twelve and under belong in a rear seat, a rear-facing infant seat must never go in front of a passenger air bag, and driver and front passenger seats should be moved as far back as is practical, especially for shorter people.",
        trap:
          "Thinking of an air bag as a cushion. At that speed it is closer to being struck, which is exactly why the seating rules exist.",
        excerptKey: "airbag-200-mph",
        sourceLabel: "NC Driver Handbook - Chapter 4, Children and Air Bags",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_06",
        topic: "emergencies",
        question:
          "Your right-hand wheels drop off the pavement onto a soft shoulder at speed. What should you do?",
        choices: [
          "Brake hard and steer back onto the pavement at once",
          "Accelerate to climb back over the lip",
          "Ease off the accelerator, steer straight ahead, and let the engine slow the car before easing back on",
          "Steer sharply left immediately to regain the lane",
        ],
        correctIndex: 2,
        explanation:
          "Do not brake and do not wrench the wheel back. Come off the accelerator, hold a straight line, let the engine slow the car, then check for traffic and ease back onto the road once you are stopped or nearly so.",
        context:
          "Braking or turning sharply while two wheels are on a lower, looser surface is what produces the skid or the rollover, because the tyres on the shoulder have far less grip than the ones on the pavement. The handbook makes the same point about several emergencies: the first move is almost always to take the speed out gently rather than to correct the position quickly.",
        trap:
          "Treating it as a steering problem. It is a speed problem first, and the steering only becomes safe once the speed is down.",
        excerptKey: "off-pavement-response",
        sourceLabel: "NC Driver Handbook - Chapter 4, Unusual Emergencies",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_07",
        topic: "sharing",
        question:
          "How much clear road does the handbook say you may need to overtake a car towing a trailer?",
        choices: [
          "As much as half a mile",
          "About 500 feet",
          "About a quarter of a mile",
          "The same distance as for any car",
        ],
        correctIndex: 0,
        explanation:
          "Up to half a mile of clear road. A towing vehicle and trailer is far longer than a car and accelerates far more slowly, so the pass takes much longer than it looks.",
        context:
          "The other hazards are worth carrying with you: watch for sway from crosswinds or slippery curves, and remember that sudden braking can jackknife a trailer. Recreational vehicles create similar problems, being longer, higher and wider than a car, with much larger blind spots and a habit of blocking your field of vision the closer you get.",
        trap:
          "Judging the pass by the length of the vehicle rather than by its acceleration. It is the slow build of speed that eats the distance.",
        excerptKey: "trailer-half-mile",
        sourceLabel: "NC Driver Handbook - Chapter 6, Recreational Vehicles and Trailers",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_08",
        topic: "signals",
        question: "What does a solid green arrow give you?",
        choices: [
          "Permission to turn after yielding to oncoming traffic",
          "A warning that the signal is about to change",
          "Permission to turn only if no pedestrian is present",
          "A protected movement, so you may make the indicated turn without yielding",
        ],
        correctIndex: 3,
        explanation:
          "A green arrow is a protected movement. The conflicting traffic is being held, so you may enter the intersection and make the indicated turn, though still cautiously.",
        context:
          "There is one qualification the handbook adds: a driver making a U-turn should yield to opposing right-turning traffic when both movements have a green arrow at the same time. The rest of the family runs the other way. A flashing yellow arrow permits the turn but hands the yielding back to you, a steady yellow arrow means the protection is ending, and a red arrow stops turning traffic outright.",
        trap:
          "Treating every arrow as protection. Only the green one holds the opposing traffic for you.",
        excerptKey: "green-arrow",
        sourceLabel: "NC Driver Handbook - Chapter 5, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_09",
        topic: "rightOfWay",
        question:
          "At an intersection with no traffic signals, a pedestrian extends a white cane with a red tip. What does the law require?",
        choices: [
          "Nothing extra beyond the ordinary pedestrian rules",
          "Special consideration for that pedestrian",
          "That you sound your horn to indicate you have seen them",
          "That you proceed first, so the pedestrian can hear you clear the intersection",
        ],
        correctIndex: 1,
        explanation:
          "The law gives a blind pedestrian special consideration at an intersection without traffic signals, whether they are using a white cane, a white cane with a red tip, or a guide dog.",
        context:
          "It sits on top of the ordinary pedestrian rules, which are already generous. Pedestrians have the right of way in marked and unmarked crosswalks at unsignalled intersections, and anyone crossing on a green outranks every vehicle including one turning across their path. The handbook's overall position is blunt: the safe driver yields to a pedestrian whether or not the pedestrian is entitled to it.",
        trap:
          "Sounding the horn as a courtesy. Here it can startle rather than help, and the horn rule is aimed at pedestrians who have not seen you at all.",
        excerptKey: "blind-pedestrian-cane",
        sourceLabel: "NC Driver Handbook - Chapter 4, The Driver and Pedestrian",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s4_10",
        topic: "parking",
        question:
          "You stop alongside a car that is already parked at the kerb, to wait for a passenger. What is that called and is it permitted?",
        choices: [
          "Standing, and it is permitted for up to five minutes",
          "Kerb waiting, and it is permitted with hazard lights on",
          "Loading, and it is permitted outside business hours",
          "Double parking, and it is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "Stopping on the roadway side of another vehicle is double parking, and North Carolina's list of places you may not park includes it outright.",
        context:
          "The list is best learned as a group, since the exam moves between its items. It also covers intersections and driveways, crosswalks, sidewalks and bridges, anywhere marked with no-parking signs, the paved travel portion of a highway, spaces reserved for disabled use without the plate or placard, and the interstate right of way apart from designated areas and emergencies.",
        trap:
          "Believing hazard flashers legalise it. They announce the vehicle; they do not create permission.",
        excerptKey: "park-double-parking",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where you should not park",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_11",
        topic: "impairment",
        question:
          "A passenger in your car has an opened bottle of beer. Where may it legally be carried?",
        choices: [
          "Anywhere in the car, provided the passenger is over 21",
          "In the passenger area, so long as the driver does not drink",
          "Not in the passenger area of the car at all",
          "In the front only, where the driver can see it",
        ],
        correctIndex: 2,
        explanation:
          "North Carolina's DWI laws prohibit transporting an open container of any alcoholic beverage, including in the passenger area of the car.",
        context:
          "The same body of law forbids a driver from consuming any alcoholic beverage while driving, allows enforcement agencies to run checkpoints for impaired drivers, and goes further still in commercial vehicles, where possessing alcoholic beverages in the passenger area is prohibited whether the container is open or closed. On the commercial points table that possession is worth four points on its own.",
        trap:
          "Assuming the rule protects only the driver. The container's location is what matters, not who is drinking from it.",
        excerptKey: "open-container",
        sourceLabel: "NC Driver Handbook - Chapter 2, DWI Laws",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_12",
        topic: "rules",
        question: "How far should your headlights let you see a person at night?",
        choices: [
          "200 feet on high beam and 150 feet on low",
          "200 feet on high beam and 75 feet on low",
          "100 feet on high beam and 50 feet on low",
          "300 feet on high beam and 100 feet on low",
        ],
        correctIndex: 1,
        explanation:
          "Two hundred feet on high beam, seventy-five feet on low. If yours fall short of that, they need checking.",
        context:
          "Those distances are also a speed limit in disguise, since the handbook tells you never to drive at a speed at which you cannot stop within the distance you can see. Seventy-five feet on low beam is not much road at 45 mph. Poorly aimed headlights make things worse by shining into oncoming eyes, and overloading the rear of a car tips the front up and does the same thing.",
        trap:
          "Reading the figures as trivia. They are the basis of the rule about outdriving your headlights at night.",
        excerptKey: "high-beam-200-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Lights",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_13",
        topic: "licensing",
        question:
          "What restoration fee must be paid before a revocation resulting from a DWI conviction can be cleared?",
        choices: ["$83.50", "$100.00", "$167.25", "$50.00"],
        correctIndex: 2,
        explanation:
          "One hundred and sixty-seven dollars and twenty-five cents for a DWI revocation, against eighty-three dollars and fifty cents for other suspensions and revocations.",
        context:
          "A separate fifty dollar service fee is also charged on restoration, unless you surrendered the licence to the court or posted it to the DMV before the suspension took effect. Restoring the privilege means visiting a driver licence office, proving identity, paying the fees, reapplying, sitting any required tests, and producing proof of insurance where it is called for.",
        trap:
          "Quoting the standard eighty-three dollar fifty fee. The DWI figure is roughly double, and the service fee sits on top of both.",
        excerptKey: "restoration-fee-dwi",
        sourceLabel: "NC Driver Handbook - Chapter 3, Driver License Restoration",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s4_14",
        topic: "signs",
        question: "What is a black-on-orange sign reserved for in North Carolina?",
        choices: [
          "School zones during posted hours",
          "Emergency detours only",
          "Any temporary hazard, including crashes",
          "Identifying highway work zones",
        ],
        correctIndex: 3,
        explanation:
          "Orange signs with black lettering are used strictly to identify work zones, both approaching them and inside them.",
        context:
          "The work zone runs from the first sign that marks its beginning to the last sign that marks its end, so the signs define the legal boundaries as well as warning you. Inside it, black-on-orange signs give specific instructions well in advance so you are not forced into a late lane change. A flagger sign warns that someone in an orange vest is controlling traffic ahead with a STOP/SLOW paddle.",
        trap:
          "Assuming the orange signs mean workers are present. The zone and its penalties exist between the signs whether or not anyone is working.",
        excerptKey: "work-zone-orange",
        sourceLabel: "NC Driver Handbook - Chapter 4, Work Zones",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_15",
        topic: "speed",
        question:
          "You are travelling considerably below the posted speed limit on an open road. What does the handbook say about that?",
        choices: [
          "It is always the safest choice",
          "You are more likely to cause or be involved in a crash than a driver moving at a normal speed",
          "It is only a problem on interstates",
          "It is acceptable so long as you use your hazard flashers",
        ],
        correctIndex: 1,
        explanation:
          "Driving well below the posted limit raises your crash risk rather than lowering it, because faster traffic arrives behind you with less time to react.",
        context:
          "It is worst just past the crest of a hill or round a curve, where an approaching driver has no warning at all. If traffic is collecting behind you, the handbook's advice is to pull over, stop and let it pass. Where a minimum speed limit is posted you should still observe it, and inside a work zone driving slower than the surrounding traffic is named as a major cause of rear-end collisions.",
        trap:
          "Equating slow with safe. North Carolina says the opposite, and says it twice.",
        excerptKey: "slow-driver-risk",
        sourceLabel: "NC Driver Handbook - Chapter 4, Adjusting Your Speed",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_16",
        topic: "safety",
        question:
          "A 17-year-old is driving on a public street. What may they do with a mobile phone?",
        choices: [
          "Use it hands-free for any purpose",
          "Use it for calls but not for texting",
          "Not use it at all while the vehicle is in motion, apart from an emergency call",
          "Use it freely, since the restriction ends at 16",
        ],
        correctIndex: 2,
        explanation:
          "Drivers under eighteen may not use a mobile phone or associated technology at all while the vehicle is in motion on a public street, highway or public vehicular area. Emergency calls are the exception.",
        context:
          "The permitted emergency calls are named: an emergency response operator, a hospital, a physician's office or health clinic, an ambulance service, a fire department, a law enforcement agency, or a parent, legal guardian or spouse. For adult drivers the ban is narrower, covering email and text messages rather than all use, and a school bus driver may not use a phone or mobile device at all. A cell phone infraction also blocks a young driver from moving up a graduated licensing level for six months.",
        trap:
          "Assuming hands-free makes it lawful for a young driver. The under-18 ban covers use, not just holding the phone.",
        excerptKey: "under-18-no-cell-phone",
        sourceLabel: "NC Driver Handbook - Chapter 4, Cell Phones",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_17",
        topic: "emergencies",
        question:
          "Two cars collide on a highway ramp. Nobody is injured and both cars are drivable. What should the drivers do?",
        choices: [
          "Move each vehicle out of the travel lane onto the shoulder",
          "Leave both vehicles exactly where they stopped until police arrive",
          "Move only the vehicle that was struck",
          "Push both vehicles into the median",
        ],
        correctIndex: 0,
        explanation:
          "Where there are no injuries or fatalities and a vehicle can be driven safely under its own power, it should be moved out of the travel lane onto the shoulder.",
        context:
          "That is conditional on doing no further damage to the vehicle, to other traffic or to the roadway, and it does not replace any of your other duties. You must still stop immediately, take precautions against a second crash, help anyone injured, and make sure law enforcement is informed. Damage totalling a thousand dollars or more, or any injury, requires an immediate report.",
        trap:
          "Leaving the cars in a live lane to preserve the scene. Where nobody is hurt, North Carolina wants the lane cleared.",
        excerptKey: "crash-move-vehicles",
        sourceLabel: "NC Driver Handbook - Chapter 4, Crashes",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_18",
        topic: "sharing",
        question: "What is the safest way to pass a bicyclist?",
        choices: [
          "Squeeze past within your lane at reduced speed",
          "Sound your horn and pass close so the manoeuvre is brief",
          "Follow until the cyclist pulls onto the shoulder",
          "Change lanes and pass in the other lane",
        ],
        correctIndex: 3,
        explanation:
          "Change lanes. The handbook names it as the safest way, and adds that you should pass only where there is abundant clearance and nothing coming in the opposing lane.",
        context:
          "Passing a bicyclist lawfully means following the ordinary vehicle passing rules, since a bicycle is a vehicle. A rider staying to the right of the lane is helping you see when it is safe to go, but riders legitimately use the whole lane to avoid hazards or conflicts with right-turning traffic. Inside a roundabout you should not pass a bicyclist at all.",
        trap:
          "Reading a cyclist's position at the right of the lane as an invitation to share it. It is a courtesy, not permission.",
        excerptKey: "bicycle-pass-change-lanes",
        sourceLabel: "NC Driver Handbook - Chapter 6, Pass with Care",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_19",
        topic: "rightOfWay",
        question:
          "An officer is directing traffic through an intersection and waves you forward while the light facing you is red. What should you do?",
        choices: [
          "Follow the officer's signal, because it overrides the traffic signal",
          "Wait for the light to change, because a signal always governs",
          "Wait until the officer switches the signal off",
          "Follow the officer's signal only if the light is malfunctioning",
        ],
        correctIndex: 0,
        explanation:
          "An officer directing traffic outranks the signals and signs. Obey the hand signals rather than the lights.",
        context:
          "It is also the exception that disables the dark-signal rule: an intersection whose lights have failed is treated as an all-way stop unless an officer or another authorised person is directing traffic. Traffic officers usually signal a stop with a raised palm and one long blast on the whistle, and signal you to move on with a beckoning hand and a series of short blasts. After dark the same signals may be given with a flashlight.",
        trap:
          "Hesitating on a red because the light feels more official. A person directing traffic is the higher authority here.",
        excerptKey: "officer-overrides-signals",
        sourceLabel: "NC Driver Handbook - Chapter 5, Traffic Officers",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_20",
        topic: "rules",
        question: "What does North Carolina require of a vehicle's taillights?",
        choices: [
          "Red or amber, visible for at least 100 feet",
          "Red, visible for at least 300 feet",
          "Red, visible for at least 500 feet",
          "Any colour, so long as they are visible for 200 feet",
        ],
        correctIndex: 2,
        explanation:
          "Taillights must be red and visible from at least five hundred feet. Brake and turn signal lights are a separate requirement with a different distance.",
        context:
          "The equipment distances come as a set. Taillights carry to five hundred feet; brake and turn signal lights, which may be red or amber, must show for at least a hundred feet in normal daylight on any vehicle built since 1955; and the white light on the licence plate must make the numbers readable from fifty feet. The horn must be audible at two hundred feet without being unreasonably loud or harsh.",
        trap:
          "Applying the hundred-foot brake light figure to the taillights. Taillights carry five times as far.",
        excerptKey: "taillights-500-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Lights",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_21",
        topic: "signals",
        question:
          "You approach a hybrid beacon at a mid-block crosswalk and it is showing no light at all. What does that mean?",
        choices: [
          "The beacon has failed and the crossing should be treated as an all-way stop",
          "Pedestrians have priority regardless, so you must stop",
          "The crossing is closed",
          "Nobody has activated it, so you may proceed as normal",
        ],
        correctIndex: 3,
        explanation:
          "A hybrid beacon stays dark until a pedestrian or emergency responder activates it. Dark means nothing is happening and you carry on normally.",
        context:
          "Once activated it flashes yellow, then goes steady yellow, then steady red while the crossing begins, and finally alternates flashing red as it finishes, during which drivers must remain stopped until the crossing is clear and may then move off after a complete stop. The dark phase is where hybrid beacons differ from ordinary signals, since a dark traffic signal at an intersection means an all-way stop.",
        trap:
          "Carrying the dark-signal rule across from intersections. A dark hybrid beacon is not a failed signal, it is an idle one.",
        excerptKey: "hybrid-beacon-dark",
        sourceLabel: "NC Driver Handbook - Chapter 5, Hybrid Beacons",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_22",
        topic: "parking",
        question:
          "You want to park near a corner on a rural road that has no kerb at all. How far back must you stop?",
        choices: [
          "25 feet from the intersecting right of way lines",
          "15 feet from the intersecting right of way lines",
          "50 feet from the edge of the crossing road",
          "No distance applies where there is no kerb",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet from the intersecting right of way lines where there is no kerb. Twenty-five feet is the figure for a kerbed street, measured from the kerb line.",
        context:
          "The rule shifts because the reference point shifts: without a kerb there is no kerb line to measure from, so the right of way line takes over. Both versions exist for the same reason, which is that a vehicle parked tight to a corner blocks the view of a driver waiting to pull out. Parked vehicles appear in the handbook's own list of things that create blind spots.",
        trap:
          "Using twenty-five feet everywhere. The kerbed and unkerbed versions carry different numbers and different reference points.",
        excerptKey: "park-25-feet-intersection",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where you should not park",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s4_23",
        topic: "impairment",
        question:
          "A driver is convicted of DWI for the second time, the earlier offence having happened two years before. How long is the revocation?",
        choices: ["One year", "Four years", "Two years", "Permanent"],
        correctIndex: 1,
        explanation:
          "Four years, because the earlier offence fell within three years of the current one. A second conviction outside that window is treated differently.",
        context:
          "The whole ladder is built on look-back windows rather than on raw counts. A first conviction brings a mandatory one-year revocation. A third brings permanent revocation if at least one of the prior convictions fell within the past five years. A fourth is permanent regardless, and becomes a felony where the three earlier convictions all fell within the past seven years.",
        trap:
          "Counting convictions and ignoring the dates. Each stage of the ladder has a different look-back period attached.",
        excerptKey: "dwi-second-conviction",
        sourceLabel: "NC Driver Handbook - Chapter 2, If you are convicted of DWI",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_24",
        topic: "licensing",
        question: "Who may act as a supervising driver for a learner permit holder?",
        choices: [
          "Any licensed driver over 18",
          "A parent or guardian only",
          "A parent, grandparent, guardian, or a responsible person approved by them, who has held a valid licence for at least five years",
          "Any licensed driver, provided they are seated in the vehicle",
        ],
        correctIndex: 2,
        explanation:
          "It must be a parent, grandparent or guardian, or someone they have approved, and that person must hold a valid licence and have held one for at least five years.",
        context:
          "The experience requirement is the piece people forget, and it is fixed at five years rather than tied to age. The supervising driver has to be seated beside the permit holder, and on a Level One permit nobody else may sit in the front. Adult learner permits work the same way in substance: the holder must be accompanied by someone licensed for the class of vehicle being driven, seated alongside.",
        trap:
          "Assuming any adult with a licence will do. Five years of licensed driving is the actual bar.",
        excerptKey: "supervising-driver-five-years",
        sourceLabel: "NC Driver Handbook - Chapter 1, Supervising Driver",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_25",
        topic: "speed",
        question: "How much should you reduce your speed on wet pavement?",
        choices: [
          "By 20 mph",
          "By half",
          "By at least five to 10 miles per hour",
          "No reduction is needed once the rain has stopped",
        ],
        correctIndex: 2,
        explanation:
          "At least five to ten miles per hour slower than you would drive on a dry road, and at least twice the normal following distance.",
        context:
          "The first ten to fifteen minutes are the worst, because rain lifts oil, dirt and rubber off the asphalt and floats it into a film. Stopping distances on slippery pavement stretch from two to ten times longer than on dry. The danger does not end with the shower either, since puddles sit in the road for hours or days afterwards and can still cause hydroplaning.",
        trap:
          "Treating the end of the rain as the end of the hazard. Standing water long outlasts the shower.",
        excerptKey: "rain-five-to-ten-slower",
        sourceLabel: "NC Driver Handbook - Chapter 4, Rain",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_26",
        topic: "safety",
        question: "At what tread depth does North Carolina consider a tyre unsafe?",
        choices: [
          "Less than 1/4 inch",
          "Less than 1/8 inch",
          "Less than 3/32 inch",
          "Less than 1/16 inch",
        ],
        correctIndex: 3,
        explanation:
          "Below one sixteenth of an inch a tyre is unsafe, as it is if it is cut, cracked, worn to the cord, or showing tread separation or chunking.",
        context:
          "Tread depth is what lets water escape from under the tyre, so it is directly tied to hydroplaning, which can begin in as little as an eighth of an inch of water. Under-inflation reduces grip and raises blowout risk, over-inflation wears the middle of the tread and reduces traction, and the handbook asks you to check pressures at least once a month while the tyres are cool.",
        trap:
          "Assuming the legal minimum is a safe minimum. A tyre at exactly one sixteenth is legal and already hydroplanes readily.",
        excerptKey: "tire-tread-1-16",
        sourceLabel: "NC Driver Handbook - Chapter 4, Tires",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_27",
        topic: "emergencies",
        question:
          "A car crosses the centre line and comes straight at you on a two-lane road. What does the handbook tell you to do?",
        choices: [
          "Reduce speed, sound your horn, and keep to the right even if that means leaving the road",
          "Steer left into the lane the other car has vacated",
          "Brake hard and hold your position in the lane",
          "Flash your headlights and maintain speed",
        ],
        correctIndex: 0,
        explanation:
          "Slow down, sound the horn, and keep right, and the handbook says to keep right even if it means running off the road.",
        context:
          "Steering left is the tempting move and the wrong one, because a driver who has drifted will usually wake up and correct back into their own lane, which is where you would then be. The same principle runs through the crash advice generally: sound the horn, keep right, turn away from oncoming traffic even if you must leave the road, and drive into an open field if one is there.",
        trap:
          "Swapping lanes with the other driver. Their correction takes them back into the space you just moved into.",
        excerptKey: "head-on-keep-right",
        sourceLabel: "NC Driver Handbook - Chapter 4, Unusual Emergencies",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_28",
        topic: "sharing",
        question: "How far do a tractor-trailer's blind spots extend?",
        choices: [
          "About 10 feet ahead and 50 feet behind",
          "Only alongside the trailer",
          "About 5 feet ahead and 100 feet behind",
          "Up to 20 feet ahead of the cab and up to 200 feet behind the trailer",
        ],
        correctIndex: 3,
        explanation:
          "Up to twenty feet in front of the cab and up to two hundred feet behind the trailer, as well as along both sides and particularly alongside the cab.",
        context:
          "The two-hundred-foot rear blind spot is why following a truck closely is worse than following a car closely: you cannot see past it and the driver cannot see you at all. The quick test is the mirror one, since if you cannot see the driver's face in their side mirror, they cannot see your car. Trucks also need extra room to turn, because the rear wheels do not track the path of the front ones.",
        trap:
          "Underestimating the rear zone. Two hundred feet is far further back than most drivers imagine, and it is where tailgaters sit.",
        excerptKey: "truck-no-zones",
        sourceLabel: "NC Driver Handbook - Chapter 6, No-Zones",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_29",
        topic: "rules",
        question: "How should you use the lanes on a one-way street?",
        choices: [
          "Keep right at all times",
          "Keep left at all times",
          "Use the centre lane or lanes for through travel and the outside lanes for turning",
          "Use whichever lane is moving fastest",
        ],
        correctIndex: 2,
        explanation:
          "Through traffic belongs in the centre lanes and turning traffic in the outside ones. That keeps vehicles going straight clear of those slowing to turn.",
        context:
          "A one-way street changes several ordinary rules at once. Driving on the left is legal there, parking on the left is legal there, and passing on the right is permitted because every lane runs the same way. It also affects the signal you give when pulling out of a parallel space, since a car parked on the left of a one-way street signals right rather than left.",
        trap:
          "Carrying the keep-right habit onto a one-way street. Sitting in the right lane there puts you among the turning traffic.",
        excerptKey: "one-way-street-lanes",
        sourceLabel: "NC Driver Handbook - Chapter 4, City Driving",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_30",
        topic: "signs",
        question: "What shape is the route marker for a U.S. highway?",
        choices: ["A shield", "A diamond", "A rectangle", "A pentagon"],
        correctIndex: 0,
        explanation:
          "U.S. highways use a shield. North Carolina state routes use a diamond, and secondary roads use a rectangle.",
        context:
          "Interstates use a shield too, but a distinctive red, white and blue one, so colour separates the two shield families. The numbering itself carries information: odd-numbered highways generally run north and south, and even-numbered ones east and west. Guide signs are otherwise rectangular and come in green, brown or blue.",
        trap:
          "Confusing the U.S. shield with the interstate shield. Same shape, different colours, different system.",
        excerptKey: "us-route-shield",
        sourceLabel: "NC Driver Handbook - Chapter 5, Guide/Informational Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_31",
        topic: "rightOfWay",
        question:
          "You are on a four-lane limited-access highway with a centre median. A fire engine with lights and siren is coming the other way. Must you pull over and stop?",
        choices: [
          "Yes, all traffic must yield regardless of direction",
          "Yes, but only if the median is less than 30 feet wide",
          "Only if the fire engine crosses into your carriageway",
          "No, the requirement does not apply to traffic travelling the opposite way on such a highway",
        ],
        correctIndex: 3,
        explanation:
          "The general rule binds traffic in both directions, but it carves out exactly this case: opposite-direction traffic on a four-lane limited-access highway with a centre median is not required to yield.",
        context:
          "Everywhere else the duty is unconditional. As an emergency vehicle approaches from ahead or behind, you drive to the right-hand kerb or edge and stop completely, staying there until it has passed or an officer directs you on. That is separate from the Move Over rule, which covers emergency vehicles already stopped at the roadside with their lights on.",
        trap:
          "Applying the exception on any divided road. It is specific to a four-lane limited-access highway with a centre median.",
        excerptKey: "emergency-divided-exception",
        sourceLabel: "NC Driver Handbook - Chapter 4, Emergency and Law Enforcement Vehicles",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s4_32",
        topic: "parking",
        question:
          "A fire hose is lying across the road while crews work at a fire. What may you do?",
        choices: [
          "Never drive over it",
          "Drive over it slowly if there is no other route",
          "Drive over it if a firefighter waves you through",
          "Drive over it once the hose has stopped flowing",
        ],
        correctIndex: 0,
        explanation:
          "Never. The rule is absolute in the handbook, with no exception for low speed or for lack of an alternative route.",
        context:
          "It sits alongside the other fire and emergency clearances, which are worth reading together: a hundred feet from an emergency vehicle stopped at a crash scene, a full block from fire trucks responding to an alarm, and a block inside the city or four hundred feet outside it from a fire or a fire truck. All of them are about keeping responders and their equipment functional.",
        trap:
          "Treating it as advice rather than a prohibition. Driving over a charged hose can injure the crew on the end of it.",
        excerptKey: "emergency-fire-hose",
        sourceLabel: "NC Driver Handbook - Chapter 4, Emergency and Law Enforcement Vehicles",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_33",
        topic: "licensing",
        question:
          "What is the lowest light transmittance North Carolina allows for after-factory window tint?",
        choices: ["35%", "20%", "50%", "70%"],
        correctIndex: 0,
        explanation:
          "Tinted windows must let at least thirty-five percent of light through. Anything darker than that fails.",
        context:
          "Tint is checked as part of the annual inspection, and a vehicle with after-factory tint is charged an extra ten dollars for the check. Every vehicle registered in North Carolina must be inspected each year, inspections may be done up to ninety days before the registration expires, and a vehicle that fails may be re-inspected free at the same station within sixty days.",
        trap:
          "Reading the figure backwards. Thirty-five percent is how much light must pass through, not how much may be blocked.",
        excerptKey: "window-tint-35",
        sourceLabel: "NC Driver Handbook - Chapter 7, Window Tinting",
        sourceUrl: HB,
      },
      {
        id: "nc_s4_34",
        topic: "impairment",
        question:
          "A 17-year-old provisional licensee is convicted of driving after consuming a small amount of alcohol. What follows?",
        choices: [
          "A warning, since they were below 0.08",
          "A 30-day suspension",
          "A one-year licence revocation",
          "Four licence points",
        ],
        correctIndex: 2,
        explanation:
          "Driving after or while consuming any amount of alcohol or drugs is unlawful for a provisional licensee, and a conviction revokes the licence for a full year.",
        context:
          "The same one-year revocation applies to any driver under twenty-one convicted of driving with any amount of alcohol or drugs in their body, so the exposure follows the age rather than the licence class. Provisional licensees carry other extra risks besides: a second moving violation inside twelve months brings a thirty-day suspension, a third ninety days, and a fourth six months.",
        trap:
          "Reaching for the adult 0.08 threshold. For a driver under twenty-one there is no permitted level at all.",
        excerptKey: "provisional-alcohol-revocation",
        sourceLabel: "NC Driver Handbook - Chapter 1, The Provisional Licensee",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s4_35",
        topic: "speed",
        question: "What speed is a modern roundabout designed to be travelled at?",
        choices: [
          "About 15 to 20 mph",
          "About 30 mph",
          "The posted limit of the approaching road",
          "About 5 mph",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen to twenty miles per hour. Modern roundabouts are built much smaller than the older traffic circles precisely to force speeds down.",
        context:
          "Low speed is what makes the geometry safe, since it removes the head-on and high-angle impacts that ordinary intersections produce. Traffic already in the roundabout has priority, everything moves counterclockwise, and you signal on the way out. A yellow roundabout-ahead sign warns you to slow before you get there.",
        trap:
          "Carrying the approach speed into the circle. The design assumes you have already slowed to roughly a third of highway speed.",
        excerptKey: "roundabout-speed",
        sourceLabel: "NC Driver Handbook - Chapter 4, Roundabouts",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail",
    difficulty: "hard",
    description:
      "North Carolina's genuine oddities and its stacked thresholds: the horn that creates a legal duty, the point counts that change after reinstatement, the revocations that need two conditions met at once, and the rules that catch drivers who learned somewhere else.",
    questions: [
      {
        id: "nc_s5_01",
        topic: "rules",
        question:
          "What is the legal effect of sounding your horn before overtaking another vehicle in North Carolina?",
        choices: [
          "None; it is a courtesy only",
          "It transfers liability for the pass to the other driver",
          "It places the driver being passed under a legal obligation to help you complete the pass",
          "It permits you to pass in a no-passing zone",
        ],
        correctIndex: 2,
        explanation:
          "The horn signal creates a duty. Once it is sounded, the driver being passed is legally obliged to help, which means moving to the right edge and not accelerating.",
        context:
          "That duty has teeth. A driver who speeds up instead, fails to give way and causes a crash resulting in bodily injury or property damage can be charged with a misdemeanour. It also explains why North Carolina writes the horn into the passing procedure at all, alongside looking ahead and behind and signalling your intention.",
        trap:
          "Assuming the horn is aggression or noise. Here it is the step that switches on the other driver's obligation.",
        excerptKey: "passing-horn-obligation",
        sourceLabel: "NC Driver Handbook - Chapter 4, Passing",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s5_02",
        topic: "licensing",
        question:
          "Your licence was suspended under the point system and has since been reinstated. How many points can now bring a second suspension?",
        choices: ["12 points within three years", "10 points within two years", "8 points within three years", "7 points within one year"],
        correctIndex: 2,
        explanation:
          "The bar drops after a reinstatement. Eight points inside three years is enough for a second suspension, against twelve for the first.",
        context:
          "Reinstatement wipes all previous driver licence points, so the count starts again from zero, but it starts against the lower threshold. Insurance points are untouched by any of this and run on a separate system entirely. The suspensions themselves lengthen: sixty days for the first, six months for the second, twelve months for the third.",
        trap:
          "Assuming a clean slate means the same twelve-point ceiling. The slate is clean; the ceiling is lower.",
        excerptKey: "points-twelve-suspension",
        sourceLabel: "NC Driver Handbook - Chapter 3, Driver License Points",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s5_03",
        topic: "speed",
        question:
          "How many convictions of speeding over 55 mph, within what period, can cost you your licence?",
        choices: [
          "Three within two years",
          "Three within twelve months",
          "Two within two years",
          "Two within a period of twelve months",
        ],
        correctIndex: 3,
        explanation:
          "Two convictions of speeding over 55 mph inside twelve months is enough for the DMV to suspend. Neither one needs to be an extreme speed.",
        context:
          "This runs independently of the point system, so a driver can lose the licence on speed convictions alone while sitting well under twelve points. Two related triggers sit alongside it: one over-55 conviction paired with a reckless driving conviction inside a year, and a conviction for speeding over 75 mph in certain cases. Separately, being more than 15 mph over while above 55 revokes the privilege for at least thirty days on its own.",
        trap:
          "Counting points and concluding you are safe. This suspension does not go through the point system at all.",
        excerptKey: "suspension-two-speeding",
        sourceLabel: "NC Driver Handbook - Chapter 3, Suspensions",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s5_04",
        topic: "impairment",
        question:
          "You wilfully refuse a chemical test after being charged with impaired driving. How long can you be off the road?",
        choices: [
          "30 days in total",
          "12 months in total",
          "At least 30 days immediately, plus a further revocation of at least 12 months",
          "Until the court case is concluded, and no longer",
        ],
        correctIndex: 2,
        explanation:
          "Two revocations stack: the immediate one of at least thirty days, and an additional DMV revocation of at least twelve months for the refusal itself.",
        context:
          "A judge may issue a limited driving privilege once six months of the wilful refusal revocation have elapsed, but that is discretionary rather than automatic. The refusal is also admissible in court, so declining the test does not remove the evidence against you. All of this sits on top of whatever the impaired driving charge itself produces.",
        trap:
          "Reading the two revocations as alternatives. They run together, which is what makes refusal expensive.",
        excerptKey: "refusal-revocation",
        sourceLabel: "NC Driver Handbook - Chapter 2, Driving While Impaired",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s5_05",
        topic: "safety",
        question:
          "Which of these is a genuine exemption from North Carolina's seat belt law?",
        choices: [
          "A driver making frequent stops to deliver property, where the speed between stops does not exceed 20 mph",
          "Any driver travelling under 25 mph",
          "Any passenger seated in the rear of a car",
          "Any driver on a private road",
        ],
        correctIndex: 0,
        explanation:
          "Frequent-stop delivery work is exempt, but only where the speed between stops stays at or below twenty miles per hour. The exemption is tied to the working pattern and the speed together.",
        context:
          "The other exemptions are equally narrow: a certified medical or physical condition or professionally certified phobia, rural letter carriers and newspaper delivery drivers on their routes, property-carrying vehicles used for agriculture in intrastate commerce, vehicles not required to have belts, situations where every belted position is already occupied, and occupants other than the driver and front passengers of a well-equipped motor home. There is no general rear-seat exemption at all.",
        trap:
          "Believing there is a back-seat exemption. North Carolina belts every occupant, and the exceptions are about jobs and medicine rather than seating.",
        excerptKey: "belt-exemption-20-mph",
        sourceLabel: "NC Driver Handbook - Chapter 4, Exemptions to the seat belt law",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_06",
        topic: "rightOfWay",
        question:
          "A school bus stops for passengers on a divided highway of four lanes with a grass median. Which traffic must stop?",
        choices: [
          "All traffic from both directions",
          "Only traffic in the lane immediately beside the bus",
          "Nobody, since a divided highway is exempt",
          "Only the traffic following the bus",
        ],
        correctIndex: 3,
        explanation:
          "On a divided highway of four lanes or more with a median separation, only traffic behind the bus stops. Oncoming traffic on the other side of the median may continue.",
        context:
          "The median is what does the work, because children are not expected to cross it. Take the median away and the answer flips: a four-lane road without a median separation stops traffic in both directions. So does a two-lane road, and so does a two-lane road with a centre turning lane. A centre turning lane only produces the following-traffic-only answer once the road has four lanes or more.",
        trap:
          "Reading four lanes as the deciding factor. Four lanes with no median still stops both directions.",
        excerptKey: "school-bus-divided-median",
        sourceLabel: "NC Driver Handbook - Chapter 4, School Buses",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s5_07",
        topic: "emergencies",
        question:
          "You stop at the scene of a crash and give first aid to an injured person. What is your legal position?",
        choices: [
          "You accept liability for the outcome by intervening",
          "The law protects you from civil liability except for intentional wrongdoing or unruly conduct",
          "You are protected only if you hold a first aid certificate",
          "You have no protection unless a law enforcement officer asked you to help",
        ],
        correctIndex: 1,
        explanation:
          "North Carolina shields anyone who stops and renders aid at a crash scene from civil liability, apart from intentional wrongdoing or unruly conduct.",
        context:
          "The protection sits alongside a set of duties that are not optional. If you are involved in a crash you must stop immediately, guard against further collisions at the scene, do what you can to help the injured, and see that law enforcement is told. Failing to stop and render aid where you are involved carries a one-year revocation of its own.",
        trap:
          "Driving on to avoid exposure. Where you were involved, leaving is the thing that costs you the licence.",
        excerptKey: "good-samaritan",
        sourceLabel: "NC Driver Handbook - Chapter 4, Crashes",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_08",
        topic: "signs",
        question:
          "You reach a stop sign at an intersection with no stop line and no marked crosswalk. Where exactly must you stop?",
        choices: [
          "Level with the stop sign itself",
          "Anywhere within one car length of the sign",
          "Before entering the intersection, at a point where you can see along the intersecting street",
          "With your front wheels over the edge of the intersecting road",
        ],
        correctIndex: 2,
        explanation:
          "Before entering the intersection, and specifically at the point where you have a view of the intersecting street. The sign's position does not decide it.",
        context:
          "Where a stop line is painted, the line is the stopping point. The unmarked version is written around visibility rather than distance, which is why easing forward to a second stop past a hedge or a parked car is the expected behaviour rather than a violation. Stop signs are placed anywhere from six to fifty feet back, so their position tells you nothing useful about where to stop.",
        trap:
          "Stopping level with the sign. On a sign set well back that puts you in exactly the blind position the rule exists to avoid.",
        excerptKey: "stop-line-no-markings",
        sourceLabel: "NC Driver Handbook - Chapter 5, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_09",
        topic: "parking",
        question:
          "You pull entirely onto a wide shoulder just past the crest of a hill and park there. Is that lawful?",
        choices: [
          "Yes, since all four wheels are off the pavement",
          "Yes, provided you leave your hazard flashers on",
          "Yes, during daylight hours",
          "No, because approaching drivers cannot see the vehicle from 200 feet in both directions",
        ],
        correctIndex: 3,
        explanation:
          "Shoulder parking is unlawful unless approaching drivers can see the parked vehicle from at least two hundred feet in both directions. A blind crest fails that test however wide the shoulder is.",
        context:
          "The rule is a sight-distance rule rather than a clearance rule, which is why getting fully off the pavement does not settle it. Parking on the paved or primary travel portion of a highway is prohibited outright, and on an interstate the whole right of way is out of bounds apart from designated areas and genuine emergencies.",
        trap:
          "Measuring how far off the road you are. The measurement that matters is how far away a driver can first see you.",
        excerptKey: "park-shoulder-200-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where you should not park",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_10",
        topic: "sharing",
        question:
          "A moped rider is stopped and found to be impaired. Do the DWI laws apply?",
        choices: [
          "No, because a moped needs no licence endorsement",
          "Yes, the impaired driving laws that apply to other motor vehicle drivers apply to moped operators too",
          "Only if the moped exceeds 30 mph",
          "Only where the rider holds a full driver licence",
        ],
        correctIndex: 1,
        explanation:
          "Impaired driving law reaches moped operators exactly as it reaches car drivers. The smaller machine buys no exemption.",
        context:
          "Mopeds sit awkwardly between vehicle categories, and the handbook resolves the ambiguity by pulling them in rather than pushing them out. Riders must be sixteen or older, must hold a North Carolina driver licence or ID card, must register the machine and carry a plate on the rear, and must wear a compliant helmet. Bicyclists are caught by the DWI laws too, because a bicycle is a vehicle.",
        trap:
          "Reading the lack of an endorsement as a lack of obligations. The DWI laws follow the road, not the licence class.",
        excerptKey: "moped-dwi-applies",
        sourceLabel: "NC Driver Handbook - Chapter 6, Mopeds",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_11",
        topic: "licensing",
        question:
          "How many hours must be recorded in the Level One driving log, and how many of them at night?",
        choices: [
          "40 hours, 10 at night",
          "50 hours, 15 at night",
          "60 hours, 20 at night",
          "60 hours, at least 10 at night",
        ],
        correctIndex: 3,
        explanation:
          "A minimum of sixty hours of driving, of which at least ten must be at night. The log is signed by the supervising driver and handed in when applying for the Level Two licence.",
        context:
          "The handbook defines the two periods rather than leaving them to judgement: daytime runs from sunrise to sunset and for as long as daylight persists, and night-time is after sunset and within the hours when daylight does not exist. That matters because for the first six months a Level One permit only allows driving between 5 a.m. and 9 p.m., so night hours largely have to be logged in the winter months or after the six-month mark.",
        trap:
          "Remembering sixty and guessing at the night component. Ten hours is the figure, and it is a minimum rather than a target.",
        excerptKey: "level1-driving-log-60",
        sourceLabel: "NC Driver Handbook - Chapter 1, Limited Learner Permit",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s5_12",
        topic: "rules",
        question:
          "How far ahead must you be able to see on a curve or a hill before passing is permitted?",
        choices: ["200 feet", "300 feet", "At least 500 feet", "1,000 feet"],
        correctIndex: 2,
        explanation:
          "Passing on a curve or a hill is unsafe and usually illegal wherever the driver cannot see at least five hundred feet ahead.",
        context:
          "It is one entry on a longer list of places where passing is off limits: intersections in cities and towns, railroad crossings, marked rural intersections, anywhere with a solid yellow line in your lane or a double solid yellow line, and any intersection or crosswalk where a vehicle has stopped to let people cross. The catch-all is the important one, since passing is prohibited wherever you cannot see the road is clear far enough ahead to complete the manoeuvre safely.",
        trap:
          "Judging the gap by the oncoming traffic you can actually see. The rule is about how far you can see at all.",
        excerptKey: "passing-500-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where passing is unsafe",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s5_13",
        topic: "signals",
        question:
          "The signal ahead turns yellow when you are already very close to the intersection and stopping would mean braking hard. What should you do?",
        choices: [
          "Brake hard and stop, whatever it takes",
          "Drive cautiously through the intersection",
          "Accelerate to clear the intersection before the red",
          "Stop with your front wheels inside the crosswalk",
        ],
        correctIndex: 1,
        explanation:
          "Yellow means stop unless you are too close to do so safely, in which case you continue cautiously through. What you must never do is speed up to beat the red.",
        context:
          "The handbook words this carefully because both errors are dangerous. Slamming on the brakes when you are already committed invites a rear-end collision; accelerating turns a yellow into a red-light violation, which is worth three licence points. Stopping short of the marked stop line or crosswalk is the default whenever you can do it without an emergency stop.",
        trap:
          "Reading yellow as an instruction to hurry. The handbook explicitly forbids speeding up to beat the red.",
        excerptKey: "circular-yellow",
        sourceLabel: "NC Driver Handbook - Chapter 5, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_14",
        topic: "speed",
        question:
          "How much fast-moving water across a road is enough to float a car or turn it over?",
        choices: [
          "About 12 inches",
          "About 3 feet",
          "About 6 inches",
          "About 2 feet",
        ],
        correctIndex: 0,
        explanation:
          "Twelve inches of fast-moving water can float a car or cause it to turn over. Six inches is already enough to sweep one off the highway.",
        context:
          "Inland flooding has been behind eighty-five percent of North Carolina's deaths from tropical weather since 1970, and half of those deaths involved someone driving onto a road they knew was flooded. The handbook's instruction is simply never to drive through standing water, because the depth is deceptive and part of the roadbed may already have washed away.",
        trap:
          "Judging the depth by eye. Water that looks shallow enough to cross is regularly deep enough to lift the car.",
        excerptKey: "flood-six-twelve-inches",
        sourceLabel: "NC Driver Handbook - Chapter 4, Driving in Flood Conditions",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_15",
        topic: "impairment",
        question:
          "A 20-year-old is convicted of attempting to buy alcohol at a shop. They were not driving. What happens to their licence?",
        choices: [
          "Nothing, since no driving was involved",
          "A 30-day suspension",
          "A one-year revocation",
          "Three licence points",
        ],
        correctIndex: 2,
        explanation:
          "The law requires a one-year driver licence revocation for an underage person who purchases or attempts to purchase alcohol, whether or not a vehicle was anywhere near the incident.",
        context:
          "The same one-year revocation reaches an underage person who aids or abets such a purchase, one who uses a fraudulent or borrowed ID to obtain alcohol, anyone who lets their own licence or ID be used that way, and anyone who gives alcohol to an underage person. The purchase age in North Carolina is twenty-one, and the licence is used as the enforcement lever regardless of whether driving was involved.",
        trap:
          "Assuming a licence penalty needs a driving offence. This one attaches to the alcohol offence directly.",
        excerptKey: "underage-purchase-revocation",
        sourceLabel: "NC Driver Handbook - Chapter 2, Alcohol and the Young Driver",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s5_16",
        topic: "safety",
        question:
          "You are driving three passengers, all aged 14. Who is legally responsible for making sure they are restrained?",
        choices: [
          "Each passenger, individually",
          "The driver",
          "The registered owner of the vehicle",
          "Their parents, whether or not they are present",
        ],
        correctIndex: 1,
        explanation:
          "Every driver carrying passengers younger than sixteen must make sure each of them is properly secured in a restraint or a seat belt. The obligation sits with the driver.",
        context:
          "For passengers under eight and under eighty pounds that means a weight-appropriate child restraint rather than a belt, and where the car has an active passenger-side front air bag and a rear seat, a child under five and under forty pounds must be in the back. Failing to properly restrain a child carries two licence points on top of anything else.",
        trap:
          "Assuming teenagers are responsible for themselves. Until sixteen, it is the driver who answers for them.",
        excerptKey: "child-restraint-under-16",
        sourceLabel: "NC Driver Handbook - Chapter 4, Child Seats",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_17",
        topic: "emergencies",
        question: "Your car stalls on a railroad crossing. What is the first thing you do?",
        choices: [
          "Try to restart the engine",
          "Put the car in neutral and push it clear",
          "Get everyone out of the vehicle immediately",
          "Call 911 from the driver's seat",
        ],
        correctIndex: 2,
        explanation:
          "Get out at once, and get everyone else out with you. A train weighing several thousand tons at 55 mph needs more than a mile to stop, so by the time the engineer sees the car it is far too late.",
        context:
          "Once clear, move away from both the vehicle and the tracks, walking along the roadway to somewhere safe. Then find the blue Emergency Notification System sign at or near the crossing and use the number on it, which is the fastest way to reach the railroad and stop a train. Every highway-railroad crossing in North Carolina is required to have one posted in each direction.",
        trap:
          "Trying the ignition one more time. Every second spent in the car is spent in the wrong place.",
        excerptKey: "railroad-stalled-get-out",
        sourceLabel: "NC Driver Handbook - Chapter 4, Railroad related emergencies",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_18",
        topic: "rightOfWay",
        question:
          "You are already inside a roundabout when an emergency vehicle with lights and siren approaches. What should you do?",
        choices: [
          "Stop immediately where you are",
          "Exit the roundabout first, then pull over to let it pass",
          "Reverse out of the roundabout",
          "Continue circulating until it has gone through",
        ],
        correctIndex: 1,
        explanation:
          "Drivers already in the roundabout should exit first and then pull over. Stopping inside blocks the circulating lane, which is the one route the emergency vehicle needs.",
        context:
          "Drivers who have not yet entered do the opposite: never enter a roundabout while an emergency vehicle with lights and siren is passing through. That is a rare exception to the general emergency vehicle rule, which asks you to pull to the right-hand edge and stop completely, because inside a roundabout there is no right-hand edge to pull onto.",
        trap:
          "Applying the pull-over-and-stop rule literally. Inside a roundabout that creates the blockage it is meant to prevent.",
        excerptKey: "roundabout-emergency-vehicle",
        sourceLabel: "NC Driver Handbook - Chapter 4, Roundabouts",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_19",
        topic: "signs",
        question:
          "What is the relationship between the yellow pennant sign and the rectangular DO NOT PASS sign?",
        choices: [
          "The pennant emphasises the DO NOT PASS sign rather than replacing it",
          "The pennant replaces the DO NOT PASS sign on rural roads",
          "The pennant marks the end of the no-passing zone the DO NOT PASS sign began",
          "They are unrelated signs that happen to appear together",
        ],
        correctIndex: 0,
        explanation:
          "The pennant emphasises rather than replaces. It is a warning sign reinforcing a regulatory one, and both mark the same no-passing zone.",
        context:
          "The two are placed on opposite sides of the road, which is what makes the pairing easy to miss. The rectangular regulatory sign carries the instruction; the yellow pennant sits on the left, pointing at where the zone begins. The same zone shows up a third time on the pavement, as a solid yellow line in your lane.",
        trap:
          "Reading either sign as marking the end of a zone. Both mark the beginning, and the pennant points at it.",
        excerptKey: "pennant-no-passing",
        sourceLabel: "NC Driver Handbook - Chapter 5, Warning Signs",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s5_20",
        topic: "rules",
        question:
          "On a road posted at 45 mph, how far in advance must you signal before turning?",
        choices: [
          "100 feet, as on any road",
          "150 feet",
          "Three seconds before the turn",
          "At least the last 200 feet",
        ],
        correctIndex: 3,
        explanation:
          "Forty-five miles per hour is the threshold at which the requirement doubles. At 45 mph or more it is two hundred feet; below that it is a hundred.",
        context:
          "The threshold is inclusive, so a road posted at exactly 45 already takes the longer distance. It scales with the limit rather than with your actual speed, and the handbook's advice runs beyond it: the faster you are moving the further ahead you should signal, and you should signal even when you can see nobody to signal to.",
        trap:
          "Reading 45 as below the threshold. It is the point at which the longer distance starts to apply, not the last road where the shorter one does.",
        excerptKey: "signal-100-200-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Flashing Turn Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_21",
        topic: "licensing",
        question:
          "Your driving privilege is reinstated after a point-system suspension. What happens to your points?",
        choices: [
          "Both driver licence points and insurance points are cancelled",
          "Driver licence points are cancelled; insurance points are not",
          "Neither is cancelled; both carry over in full",
          "Insurance points are cancelled; driver licence points are not",
        ],
        correctIndex: 1,
        explanation:
          "Reinstatement cancels all previous driver licence points. It has no effect at all on insurance points, which insurers run on a separate system of their own.",
        context:
          "Keeping the two systems apart matters, because they measure different things and are not interchangeable. The DMV's points decide whether you keep your licence; the insurer's points decide what you pay. The handbook's advice on insurance points is simply to ask your agent, since the DMV has no involvement in setting them.",
        trap:
          "Expecting reinstatement to reset your premium. That is a separate system with a separate memory.",
        excerptKey: "points-cancelled-on-reinstatement",
        sourceLabel: "NC Driver Handbook - Chapter 3, Driver License Points",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s5_22",
        topic: "parking",
        question:
          "On a road with no kerb, what is measured to determine how far from an intersection you may park?",
        choices: [
          "The intersecting right of way lines",
          "The nearest edge of the pavement",
          "The centre of the intersection",
          "The nearest stop sign",
        ],
        correctIndex: 0,
        explanation:
          "The intersecting right of way lines, with fifteen feet as the required distance. On a kerbed street it is the kerb line instead, and the distance is twenty-five feet.",
        context:
          "Both numbers exist to protect the sight line of a driver waiting to pull out of the intersecting road, which is why the reference point moves with the road's construction rather than staying fixed. The handbook lists vehicles parked too close to an intersection alongside glare, dirty windshields, bushes and buildings as a source of blind spots, and tells you to ease forward until you can see clearly.",
        trap:
          "Measuring from the pavement edge on an unkerbed road. The right of way line usually sits further out than the asphalt does.",
        excerptKey: "park-25-feet-intersection",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where you should not park",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_23",
        topic: "sharing",
        question:
          "A piece of farm machinery ahead of you signals left and pulls toward the right side of the road. What is probably happening?",
        choices: [
          "The operator is pulling over to let you pass",
          "The signal has been left on by mistake",
          "The operator is swinging wide in order to turn left, and passing now risks a collision",
          "The machine has broken down",
        ],
        correctIndex: 2,
        explanation:
          "Wide machinery often has to swing right before turning left. The left signal means what it says, and passing into it is how these collisions happen.",
        context:
          "The handbook names this as a typical cause of the sideswipe and angle crashes that involve farm equipment, most of which happen on clear days on dry paved roads. The only advisable time to pass is when the operator has actually moved off the road at a practical spot to let traffic by. Farm equipment may be wider than it looks from behind and may need space in both lanes.",
        trap:
          "Reading the move toward the right as an invitation. It is the first half of a left turn.",
        excerptKey: "farm-left-signal-mistake",
        sourceLabel: "NC Driver Handbook - Chapter 4, Safe Driving Around Farm Equipment",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_24",
        topic: "speed",
        question: "How deep does water have to be before hydroplaning becomes possible?",
        choices: [
          "About an inch",
          "A little more than 1/8 inch",
          "About half an inch",
          "About two inches",
        ],
        correctIndex: 1,
        explanation:
          "A little more than an eighth of an inch is enough, at speeds from around thirty miles per hour upward. It does not take standing floodwater.",
        context:
          "That depth is barely a sheen on the road, which is why the warning signs are worth learning: reflections on the surface, dimples from raindrops hitting standing water, a slushing sound from the tyres and a loose feeling in the steering. Deep open tread lets water escape and helps prevent it, while worn or under-inflated tyres make it far more likely.",
        trap:
          "Waiting for visible standing water. By the time a puddle is obvious you are well past the threshold.",
        excerptKey: "hydroplane-30-mph",
        sourceLabel: "NC Driver Handbook - Chapter 4, Hydroplaning",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_25",
        topic: "signals",
        question:
          "The traffic lights at an intersection are dark, but a police officer is standing in the middle directing traffic. How should you proceed?",
        choices: [
          "As an all-way stop, ignoring the officer",
          "Stop at the line and wait for the signal to be restored",
          "Treat the largest road as having priority",
          "Follow the officer's directions, which displace the all-way stop rule",
        ],
        correctIndex: 3,
        explanation:
          "The all-way stop rule for a dark signal applies only where nobody is directing traffic. An officer or other authorised person outranks it.",
        context:
          "The same exception covers another traffic control device that has been put into operation, such as temporary signs. Where nothing and nobody is directing, every approach at a dark signal is treated as though it carried a stop sign. Officers usually stop traffic with a raised palm and a long whistle blast, and wave it on with a beckoning hand and short blasts, using a flashlight after dark.",
        trap:
          "Applying the all-way stop rule mechanically. It is the fallback for when nobody is in charge, not an override.",
        excerptKey: "dark-signal-four-way-stop",
        sourceLabel: "NC Driver Handbook - Chapter 5, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_26",
        topic: "emergencies",
        question: "A front tyre blows out at highway speed. What should you do about the brakes?",
        choices: [
          "Leave them alone until the engine has slowed the car enough for you to keep control",
          "Apply them hard and immediately",
          "Pump them rapidly to shed speed",
          "Apply the emergency brake at once",
        ],
        correctIndex: 0,
        explanation:
          "Do not brake until the engine has slowed the car enough that you can still control it. Grip the wheel, hold your line, and come off the accelerator first.",
        context:
          "Braking on a blown tyre pulls the car sharply toward the failed corner, which is why the sequence matters more than the speed of the response. Once you have control, find somewhere safe to get completely off the road. A bumpy ride with no obvious cause is worth stopping to investigate, since it can be a tyre on its way to failing.",
        trap:
          "Braking hard. It is the instinctive move and it converts a blowout into a spin.",
        excerptKey: "blowout-response",
        sourceLabel: "NC Driver Handbook - Chapter 4, Blowouts",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_27",
        topic: "impairment",
        question:
          "A driver is convicted of DWI for the third time. One of the two earlier convictions was four years ago. What is the consequence?",
        choices: [
          "Permanent revocation of the driver licence",
          "A ten-year revocation",
          "A four-year revocation",
          "A one-year revocation with mandatory treatment",
        ],
        correctIndex: 0,
        explanation:
          "A third conviction brings permanent revocation where at least one of the prior convictions fell within the past five years. Four years is inside that window.",
        context:
          "Every stage of this ladder depends on dates as much as on counts. A first conviction is one year; a second is four years where the earlier offence fell within three; a third is permanent on the five-year test; a fourth is permanent outright and becomes a felony where all three earlier convictions fell within seven years. A second conviction also carries a mandatory jail sentence.",
        trap:
          "Counting to three and stopping. Without a prior inside five years the third conviction does not reach permanent revocation.",
        excerptKey: "dwi-third-conviction",
        sourceLabel: "NC Driver Handbook - Chapter 2, If you are convicted of DWI",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_28",
        topic: "rules",
        question: "In which of these situations may you lawfully pass on the right?",
        choices: [
          "When the vehicle ahead is travelling below the speed limit",
          "When you are driving in a lane set aside for right turns",
          "When the shoulder is paved and wide enough",
          "When the driver ahead has signalled you past",
        ],
        correctIndex: 1,
        explanation:
          "A lane set aside for right turns is one of the four named exceptions. The others are highways with at least two lanes each way, one-way streets, and passing a vehicle already in a left-turn lane.",
        context:
          "Passing on the right is prohibited generally because it puts you on the blind side of the vehicle you are overtaking, which could turn right or pull over without ever seeing you. The exceptions all share a feature: they are situations where a second lane genuinely exists in your direction and the vehicle you pass has no reason to move into it.",
        trap:
          "Treating a wide paved shoulder as an extra lane. None of the exceptions covers it, however much room there is.",
        excerptKey: "passing-right-exceptions",
        sourceLabel: "NC Driver Handbook - Chapter 4, Passing on the right",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_29",
        topic: "safety",
        question: "What does North Carolina require of bicycle riders under the age of 16?",
        choices: [
          "An approved bicycle helmet, and they must be seated on a saddle seat",
          "A helmet only when riding on a road posted above 35 mph",
          "Nothing beyond the ordinary traffic laws",
          "Adult supervision at all times",
        ],
        correctIndex: 0,
        explanation:
          "Riders and passengers under sixteen must wear an approved protective bicycle helmet and must be on a saddle seat.",
        context:
          "A passenger under forty pounds or under forty inches tall must additionally be in a bicycle restraining seat. Alongside those rules, a bicycle at night needs a front light visible for three hundred feet and a rear red light or reflector visible for two hundred. Bicycles are vehicles, so riders stop for stop signs and lights, ride with traffic and give hand signals.",
        trap:
          "Remembering the helmet and forgetting the saddle seat. Both are in the same requirement, and children carried on a crossbar breach it.",
        excerptKey: "bicycle-helmet-under-16",
        sourceLabel: "NC Driver Handbook - Chapter 6, Bicycles",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_30",
        topic: "rightOfWay",
        question:
          "The signal turns yellow and then red while a pedestrian is still partway across the road in front of you. What must you do?",
        choices: [
          "Proceed once you have the green, since their crossing time has expired",
          "Sound your horn to hurry them along",
          "Move forward slowly to encourage them to clear",
          "Allow them to complete the crossing safely",
        ],
        correctIndex: 3,
        explanation:
          "Where a signal changes to yellow or red while a pedestrian is still in the street, drivers must let them finish crossing safely.",
        context:
          "The duty holds regardless of whether the pedestrian started legally, which fits North Carolina's broader position that a safe driver yields to a pedestrian whether or not the pedestrian is entitled to it. There is one situation where the horn is the right answer: if you are moving through on green and someone starts to cross against their red, the handbook tells you to warn them with the horn, and to stop yourself if they do not.",
        trap:
          "Treating the light change as transferring the right of way to you. It does not, while someone is still in the road.",
        excerptKey: "pedestrian-complete-crossing",
        sourceLabel: "NC Driver Handbook - Chapter 4, The Driver and Pedestrian",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_31",
        topic: "signs",
        question:
          "You pass a round yellow sign with a black cross and the letters RR, and shortly afterwards reach an X-shaped white sign. What are these two signs doing?",
        choices: [
          "The round sign is advance warning; the X-shaped crossbuck marks the crossing itself",
          "The round sign marks the crossing; the X-shaped sign warns of a second crossing ahead",
          "Both mark the crossing, one for each direction of travel",
          "The round sign is a speed advisory; the X-shaped sign is the regulatory stop sign",
        ],
        correctIndex: 0,
        explanation:
          "The circular RR sign warns you a crossing is coming. The crossbuck is mounted at the crossing, and a small sign under it tells you how many tracks there are.",
        context:
          "Both signs impose the same obligation once a train is involved: you must stop when a flagger, signal or gate indicates one is approaching, and remain stopped until the gate lifts or the signal or flagger says it is safe. Even a crossing with nothing but a crossbuck requires you to yield to a train, and trains have the right of way over every kind of highway traffic.",
        trap:
          "Waiting for the crossbuck before slowing. By then you are already at the rails.",
        excerptKey: "round-rr-sign",
        sourceLabel: "NC Driver Handbook - Chapter 5, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_32",
        topic: "licensing",
        question:
          "Your DMV hearing has not helped and you still believe the revocation was wrong. What can you do next?",
        choices: [
          "Nothing; the DMV's decision is final",
          "Ask for a second hearing before the same officer",
          "Appeal to the N.C. Court of Appeals within 60 days",
          "Appeal to the Superior Court of your county within 30 days",
        ],
        correctIndex: 3,
        explanation:
          "You may appeal the DMV's decision to the Superior Court of the county where you live, and you have thirty days to do it.",
        context:
          "The hearing comes first, in the judicial district where you reside, and you are told the time and place by post. At it you may put forward any facts you think entitle you to keep your privilege or to have the suspension shortened. The Superior Court's job on appeal is to review whether there were proper grounds for revoking the privilege at all.",
        trap:
          "Assuming an administrative decision cannot be challenged. It can, but the thirty-day window is short.",
        excerptKey: "appeal-30-days-superior",
        sourceLabel: "NC Driver Handbook - Chapter 3, Suspensions",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_33",
        topic: "speed",
        question: "When does a reduced school zone speed limit apply?",
        choices: [
          "All day, every day of the year",
          "During the specific school hours indicated, in many school zones",
          "Only when children are visible on the roadway",
          "Only on days when the school is examining",
        ],
        correctIndex: 1,
        explanation:
          "In many school zones the reduced limit runs only during certain school hours. The same stretch can carry two different limits at two different times of day.",
        context:
          "The five-sided pentagon sign is what marks the zone or crossing, and it asks for extra vigilance whether or not a reduced limit is in force at that moment. Speeding in a school zone above the posted school zone limit is a separate offence worth three licence points, and it sits alongside the separate caps of 45 mph for a school bus and 55 mph for a school activity bus.",
        trap:
          "Waiting to see children before slowing. The limit runs on the posted hours, not on who happens to be on the pavement.",
        excerptKey: "pentagon-school",
        sourceLabel: "NC Driver Handbook - Chapter 5, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_34",
        topic: "emergencies",
        question:
          "You are stopped and can see in the mirror that the car behind is not going to stop in time. There is nothing in front of you. What should you do?",
        choices: [
          "Brace against the wheel and hold the brake down hard",
          "Duck sideways across the passenger seat",
          "Press the accelerator and move away as far as you can",
          "Release the brake so the car rolls freely on impact",
        ],
        correctIndex: 2,
        explanation:
          "With clear space ahead, accelerate away. Moving forward reduces the closing speed and may avoid the impact entirely.",
        context:
          "If there is no room to move, the handbook's advice changes: be ready on the brakes so you are not pushed into whatever is in front, brace yourself between the steering wheel and the seat, and press the back of your head firmly against the head restraint. That last detail is what limits whiplash, and it only works if the head restraint is at the right height.",
        trap:
          "Bracing without checking the space ahead. Where there is room, getting out of the way beats absorbing the hit.",
        excerptKey: "rear-end-about-to-be-hit",
        sourceLabel: "NC Driver Handbook - Chapter 4, Crashes",
        sourceUrl: HB,
      },
      {
        id: "nc_s5_35",
        topic: "parking",
        question:
          "Firefighters are working a house fire outside the city limits. How far away must you park?",
        choices: [
          "100 feet",
          "One block",
          "200 feet",
          "At least 400 feet",
        ],
        correctIndex: 3,
        explanation:
          "Four hundred feet outside the city. Inside the city limits the same rule is expressed as one full block from the fire or the fire truck.",
        context:
          "The two versions exist because a rural road has no blocks to count. Neighbouring rules use different numbers again: a hundred feet from an emergency vehicle stopped to investigate a crash or give assistance, and no closer than one block from fire trucks responding to an alarm. Driving over a fire hose is prohibited outright, at any distance and any speed.",
        trap:
          "Applying the one-block figure on a rural road. Outside the city the measurement is four hundred feet.",
        excerptKey: "park-fire-block-400",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where you should not park",
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
      "A full-length run at the real thing: mixed topics, no clustering, and the same eighty percent bar NCDMV applies. Twenty-four of these thirty is a pass.",
    questions: [
      {
        id: "nc_s6_01",
        topic: "signals",
        question:
          "A steady red signal faces you and the pavement carries a painted stop line. Where must you stop?",
        choices: [
          "Level with the signal head, so you can see it change",
          "Anywhere within one car length of the intersection",
          "At the marked stop line",
          "With your front bumper inside the crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "Where a stop line is marked, that is where you stop. Only when there is no line and no crosswalk do you stop before entering the intersection instead.",
        context:
          "The rule covers stop signs, traffic lights, flashing lights and any other control device requiring a stop, so it is the same answer in each case. Where there is nothing painted, the stopping point is chosen for visibility: far enough forward to see along the intersecting street, which often means easing up to a second stop past a parked car.",
        trap:
          "Creeping up level with the signal. That puts you across the crosswalk, which is exactly where pedestrians belong.",
        excerptKey: "stop-line-rule",
        sourceLabel: "NC Driver Handbook - Chapter 5, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_02",
        topic: "rules",
        question:
          "The centre of a two-lane road is marked with continuous double solid yellow lines. What may you do?",
        choices: [
          "Pass, if the oncoming lane is clear",
          "Not cross them to pass in either direction",
          "Pass, but only if the vehicle ahead is below the speed limit",
          "Pass in one direction only, depending on which side the second line falls",
        ],
        correctIndex: 1,
        explanation:
          "Continuous double solid yellow centre lines prohibit passing in both directions. Neither driver may cross them to overtake.",
        context:
          "The pattern on your own side is what decides it. A broken or skipped yellow line in your lane allows passing with care; a solid yellow line in your lane does not. Yellow always separates opposing streams of traffic and white separates traffic moving the same way, so the colour and the pattern give you two separate pieces of information.",
        trap:
          "Reading a clear oncoming lane as permission. The marking is the rule, and a clear road does not suspend it.",
        excerptKey: "double-solid-yellow",
        sourceLabel: "NC Driver Handbook - Chapter 5, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_03",
        topic: "rightOfWay",
        question:
          "At an intersection with no signs or signals, one car is already partway through and another is just arriving. Who has the right of way?",
        choices: [
          "The vehicle already in the intersection",
          "The vehicle on the right",
          "The vehicle travelling faster",
          "The vehicle going straight rather than turning",
        ],
        correctIndex: 0,
        explanation:
          "Anything already inside the intersection outranks anything that has not yet entered. The vehicle-on-the-right rule only decides genuine ties.",
        context:
          "The uncontrolled intersection rules run in that order for a reason: the first job is to clear vehicles that are already committed, and only then to sort out simultaneous arrivals. A vehicle with the right of way may go straight or, after signalling, turn either way. Having priority never excuses hitting anyone, and North Carolina separately requires you to slow for every intersection whether or not priority is yours.",
        trap:
          "Reaching for the right-hand rule first. It is the tie-break, not the primary rule.",
        excerptKey: "uncontrolled-already-in",
        sourceLabel: "NC Driver Handbook - Chapter 4, Special Driving Situations",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_04",
        topic: "speed",
        question:
          "There is no speed limit sign anywhere on the street you are driving along inside a town. What limit applies?",
        choices: ["25 mph", "35 mph", "45 mph", "There is no limit until one is posted"],
        correctIndex: 1,
        explanation:
          "Thirty-five miles per hour applies by default inside cities and towns. The absence of a sign never means the absence of a limit.",
        context:
          "The other defaults are 55 mph outside cities and towns and 70 mph on interstates. All of them are ceilings rather than recommendations, and the handbook says outright that you must often drive slower than the posted figure but never faster. Special areas such as school zones carry their own posted limits for particular hours.",
        trap:
          "Applying a 25 mph residential default. That is common elsewhere and is not North Carolina's figure.",
        excerptKey: "city-limit-35",
        sourceLabel: "NC Driver Handbook - Chapter 4, Adjusting Your Speed",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_05",
        topic: "signs",
        question: "Which sign uses the octagonal shape in North Carolina?",
        choices: [
          "Yield signs and stop signs, both",
          "Stop signs and railroad crossbucks",
          "Stop signs, and nothing else",
          "Any sign carrying a mandatory instruction",
        ],
        correctIndex: 2,
        explanation:
          "The octagon is reserved for stop signs alone. That exclusivity is what lets you recognise one from behind, in fog, or when the face is obscured.",
        context:
          "The rest of the shape vocabulary is just as tightly assigned. A downward triangle is yield, a yellow diamond is a general warning, an orange diamond is a work zone, a pentagon is a school zone or crossing, a pennant is a no-passing zone, and a crossbuck is a railroad crossing. Rectangles carry regulations and, in green, brown or blue, guidance.",
        trap:
          "Assuming an unfamiliar red sign might be an octagon. Only STOP uses it, whatever the message.",
        excerptKey: "stop-sign-octagon",
        sourceLabel: "NC Driver Handbook - Chapter 5, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_06",
        topic: "impairment",
        question:
          "What blood alcohol concentration constitutes impaired driving in a commercial motor vehicle?",
        choices: ["0.08", "0.05", "0.02", "0.04"],
        correctIndex: 3,
        explanation:
          "Half the ordinary threshold: 0.04 in a commercial motor vehicle, against 0.08 for everyone else.",
        context:
          "A commercial DWI conviction also takes the alcohol concentration restriction on any restored licence straight to 0.00, rather than the 0.04 that applies on an ordinary first restoration. Commercial drivers are treated more severely across the board: the points assessed for offences in a commercial vehicle are higher, and any fine or penalty may be doubled.",
        trap:
          "Applying the adult 0.08 figure behind the wheel of a truck. The commercial threshold is half of it.",
        excerptKey: "dwi-two-ways",
        sourceLabel: "NC Driver Handbook - Chapter 2, Driving While Impaired",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_07",
        topic: "safety",
        question: "How should you use anti-lock brakes in an emergency stop?",
        choices: [
          "Brake hard and hold firm, steady pressure on the pedal",
          "Pump the pedal rapidly",
          "Apply and release in a steady rhythm",
          "Use the emergency brake instead",
        ],
        correctIndex: 0,
        explanation:
          "Press hard and keep the pressure on. Pumping the pedal, or letting the pressure off, reduces the system's effectiveness.",
        context:
          "The pumping technique belongs to cars without ABS, where the handbook does tell you to pump gently. Anti-lock brakes improve stability, steerability and stopping capability, and the steering part is the one people forget: because the wheels do not lock, you can still steer while braking hard, which is often more useful than the shorter distance.",
        trap:
          "Pumping out of habit. The two systems want opposite inputs, and getting it wrong costs you the benefit.",
        excerptKey: "abs-no-pumping",
        sourceLabel: "NC Driver Handbook - Chapter 4, Anti-lock Braking System",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_08",
        topic: "sharing",
        question:
          "A school bus has its flashing red lights on and its stop arm out. When may you move again?",
        choices: [
          "As soon as the last child has left the roadway",
          "Once the stop signal is withdrawn, the red lights are off and the bus has started to move",
          "After counting to five with the bus stationary",
          "As soon as the bus driver waves you through",
        ],
        correctIndex: 1,
        explanation:
          "All three conditions have to be met: the mechanical stop signal withdrawn, the flashing red lights off, and the bus actually moving off again.",
        context:
          "The rule is written that way because children reappear. Even when a bus is nowhere in sight, children waiting at or leaving a stop can run into the road unexpectedly, which is why the handbook asks for extra care around bus stops generally. Passing a stopped school bus carries five licence points, more than any other single non-commercial offence, and eight in a commercial vehicle.",
        trap:
          "Moving off when the children are clear. The signal and the lights and the bus moving are what release you, not your own judgement of the pavement.",
        excerptKey: "school-bus-stop-rule",
        sourceLabel: "NC Driver Handbook - Chapter 4, School Buses",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_09",
        topic: "licensing",
        question:
          "Someone is applying for a North Carolina driver licence for the first time. Which tests must they complete?",
        choices: [
          "The knowledge examination only",
          "The knowledge examination and the road test",
          "The road signs test and the vision test",
          "The knowledge examination, the road signs test, the vision test and the road test",
        ],
        correctIndex: 3,
        explanation:
          "First-time applicants sit the full examination: knowledge, road signs, vision and the on-road driving test. Each part is passed separately.",
        context:
          "The pass marks differ by part. The knowledge examination needs eighty percent; the road signs test needs nine of twelve for a Class C licence; and vision must reach 20/40 in either eye or both together for an unrestricted licence, with corrective lenses noted as a restriction otherwise. Someone transferring a current out-of-state licence sits only the signs and vision tests.",
        trap:
          "Assuming a driving test can substitute for the written parts. Every part is passed on its own terms.",
        excerptKey: "first-time-full-examination",
        sourceLabel: "19A NCAC 03B .0201 - First time applicants",
        sourceUrl: RULE,
        commonlyMissed: true,
      },
      {
        id: "nc_s6_10",
        topic: "parking",
        question:
          "How far from the kerb line of an intersecting street must you park on a kerbed city street?",
        choices: ["10 feet", "15 feet", "25 feet", "50 feet"],
        correctIndex: 2,
        explanation:
          "Twenty-five feet from the kerb line of the intersecting street. The distance drops to fifteen feet from the right of way lines where there is no kerb.",
        context:
          "It belongs to a set of parking distances that the exam moves between: fifteen feet from a fire hydrant or fire station entrance, a hundred feet from an emergency vehicle stopped at a scene, two hundred feet of visibility in both directions before a shoulder is legal, and a block inside the city or four hundred feet outside it from a fire or fire truck.",
        trap:
          "Using fifteen feet, which is both the hydrant figure and the unkerbed version of this same rule.",
        excerptKey: "park-25-feet-intersection",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where you should not park",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_11",
        topic: "emergencies",
        question: "You are involved in a collision. What is your first legal obligation?",
        choices: [
          "Stop the vehicle immediately",
          "Photograph the scene before anything is moved",
          "Telephone your insurance company",
          "Exchange details with the other driver",
        ],
        correctIndex: 0,
        explanation:
          "Stop immediately. Failing to stop is itself a violation, and failing to stop and render aid where you were involved carries a one-year revocation.",
        context:
          "What follows is a sequence rather than a menu: guard against further collisions at the scene, help anyone injured, make sure law enforcement is informed, and exchange names, addresses, licence numbers, registration numbers and insurers. Where nobody is hurt and the vehicles are drivable, move them out of the travel lane. Any injury, or a thousand dollars of damage, requires an immediate report.",
        trap:
          "Starting with the paperwork. Stopping and helping come first, and skipping the first step is what costs a licence.",
        excerptKey: "crash-must-stop",
        sourceLabel: "NC Driver Handbook - Chapter 4, Crashes",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_12",
        topic: "rules",
        question:
          "When does North Carolina law actually require you to use your horn?",
        choices: [
          "Whenever another driver behaves dangerously",
          "Only to warn of an imminent collision",
          "Never; the horn is always discretionary",
          "Whenever a pedestrian may be affected by your turn, stop or start from a parked position",
        ],
        correctIndex: 3,
        explanation:
          "The law requires the horn whenever a pedestrian may be affected by a turn, a stop, or a start from a parked position. And if they do not stop, the handbook says the driver must.",
        context:
          "That is the second place North Carolina makes horn use mandatory rather than optional, the other being before overtaking. There is a third situation where it is directed: if you are moving through an intersection on green and a pedestrian starts to cross against their red, warn them with the horn. The horn must be audible at two hundred feet and must not be used unnecessarily or unreasonably.",
        trap:
          "Thinking of the horn purely as a warning of danger. Here it is a required part of ordinary manoeuvres near people on foot.",
        excerptKey: "horn-for-pedestrian",
        sourceLabel: "NC Driver Handbook - Chapter 4, The Driver and Pedestrian",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s6_13",
        topic: "signals",
        question: "What does a red arrow signal mean?",
        choices: [
          "Turn after yielding to oncoming traffic",
          "Turn after coming to a complete stop",
          "Turning traffic must stop",
          "The signal is about to change to a green arrow",
        ],
        correctIndex: 2,
        explanation:
          "A red arrow stops turning traffic. Unlike a circular red, it does not carry a turn-after-stopping allowance.",
        context:
          "That is the practical difference worth carrying into the exam: on a steady circular red you may turn right after a complete stop unless a NO TURN ON RED sign is posted, but a red arrow prohibits the movement outright. On right turn signal heads a steady red circle may be used instead of a red arrow, so read the head you are actually facing.",
        trap:
          "Turning right on a red arrow. The circular red allows it and the arrow does not.",
        excerptKey: "red-arrow",
        sourceLabel: "NC Driver Handbook - Chapter 5, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_14",
        topic: "speed",
        question: "What is the statutory maximum speed on North Carolina's interstate highways?",
        choices: ["70 mph", "65 mph", "75 mph", "60 mph"],
        correctIndex: 0,
        explanation:
          "Seventy miles per hour. Individual stretches are posted lower and the posted figure always governs, but 70 is the ceiling.",
        context:
          "Interstates are safer roads by design, with opposing traffic separated, no railroad crossings, no sharp curves and no stop signs or signals. The handbook's interstate advice is mostly about the merge and the exit: use the acceleration lane until your speed matches the traffic, keep right and use the left lanes for passing, and if you miss an exit go on to the next rather than slowing, reversing or turning round.",
        trap:
          "Answering 75, which is common further west but has never been North Carolina's figure.",
        excerptKey: "max-speed-table",
        sourceLabel: "NC Driver Handbook - Chapter 4, Maximum Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_15",
        topic: "signs",
        question: "What does a diamond-shaped sign in black on orange mean?",
        choices: [
          "A school zone during posted hours",
          "A construction or maintenance area",
          "A permanent hazard in the road",
          "A detour for heavy vehicles only",
        ],
        correctIndex: 1,
        explanation:
          "Black on orange marks construction and maintenance areas. The shape still says warning; the colour says work zone.",
        context:
          "North Carolina reserves black-on-orange strictly for work zones, so the colour is reliable. The zone itself runs from the first sign marking its start to the last sign marking its end, and where a sign at the beginning lists a penalty for speeding, that penalty is added to whatever the speeding conviction carries on its own.",
        trap:
          "Assuming orange signs only appear where work is visibly happening. They define the zone whether or not a crew is present.",
        excerptKey: "diamond-warning",
        sourceLabel: "NC Driver Handbook - Chapter 5, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_16",
        topic: "rightOfWay",
        question:
          "Two cars arrive at an uncontrolled intersection at the same instant, one on each of two crossing roads. Who yields?",
        choices: [
          "The driver on the left yields to the driver on the right",
          "The driver on the right yields to the driver on the left",
          "Whichever driver is turning yields, regardless of position",
          "Whichever driver arrived from the smaller road yields",
        ],
        correctIndex: 0,
        explanation:
          "The vehicle on the right has the right of way, which means the driver on the left is the one who waits.",
        context:
          "The rule only bites on a genuine tie. Anything already in the intersection has priority over anything still arriving, and between two facing vehicles the ordinary rules give way to a different one: the driver turning left waits for the driver going straight. Even with priority, North Carolina requires you to slow down on approach.",
        trap:
          "Getting the direction of the obligation backwards. The right-hand car goes; the left-hand car yields.",
        excerptKey: "uncontrolled-vehicle-right",
        sourceLabel: "NC Driver Handbook - Chapter 4, Special Driving Situations",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_17",
        topic: "safety",
        question: "How far ahead does the handbook say a good driver should be looking?",
        choices: [
          "About two car lengths",
          "Ten to 15 seconds ahead, roughly a city block",
          "As far as the headlights reach",
          "To the vehicle immediately in front",
        ],
        correctIndex: 1,
        explanation:
          "Ten to fifteen seconds of travel ahead, which is about one city block. Looking that far forward is what lets you avoid sudden stops and last-minute lane changes.",
        context:
          "The other half of scanning is behind you: check the mirrors roughly every ten seconds to see whether anyone is following too closely, and check again before changing lanes, backing, slowing or starting down a long hill. Mirrors leave blind spots near the left and right rear corners, so a shoulder check still belongs in every lane change.",
        trap:
          "Measuring in distance rather than time. Ten seconds is a very different distance at 25 mph and at 65.",
        excerptKey: "scanning-10-15-seconds",
        sourceLabel: "NC Driver Handbook - Chapter 4, Scanning",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_18",
        topic: "impairment",
        question: "What revocation follows a first DWI conviction in North Carolina?",
        choices: [
          "30 days",
          "90 days",
          "Six months",
          "A mandatory one year",
        ],
        correctIndex: 3,
        explanation:
          "A mandatory one-year revocation of the driver licence. The thirty-day figure is the immediate pre-conviction revocation, which is a different thing.",
        context:
          "The pre-conviction revocation applies as soon as a test shows 0.08 or more, or on a refusal, and lasts at least thirty days. The conviction revocation is the one that runs a year. From there the ladder escalates on look-back windows: four years for a second where the earlier offence fell within three, and permanent for a third where a prior fell within five. Anyone convicted must obtain a substance abuse assessment before the privilege can be reinstated.",
        trap:
          "Confusing the immediate thirty-day revocation with the sentence. The first happens at the roadside, the second in court.",
        excerptKey: "dwi-first-conviction",
        sourceLabel: "NC Driver Handbook - Chapter 2, If you are convicted of DWI",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_19",
        topic: "sharing",
        question:
          "A cyclist ahead of you is riding in the middle of the travel lane rather than at the edge. What does North Carolina expect of you?",
        choices: [
          "Sound your horn until they move over",
          "Pass within the lane, since there is room beside them",
          "Report them, since riding in the lane is unlawful",
          "Expect it, because traffic conditions may require a cyclist to use the full travel lane",
        ],
        correctIndex: 3,
        explanation:
          "State law lets bicyclists ride among other road users and expressly contemplates them using the whole travel lane when conditions require it.",
        context:
          "Riders choose between a bike lane, a paved shoulder and the general lane based on hazards in the road and on the risk of a conflict with right-turning traffic, so a rider moving out is usually reading the road rather than obstructing it. Passing one lawfully means following the ordinary passing rules with abundant clearance and no oncoming traffic, and the safest way is to change lanes.",
        trap:
          "Reading lane position as an obstruction. The law anticipates it and asks drivers to expect it.",
        excerptKey: "bicycle-full-lane",
        sourceLabel: "NC Driver Handbook - Chapter 6, Bicycles",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s6_20",
        topic: "licensing",
        question:
          "What are the minimum liability insurance limits for a North Carolina policy issued or renewed today?",
        choices: [
          "$30,000 per person, $60,000 per accident, $25,000 property damage",
          "$50,000 per person, $100,000 per accident, $50,000 property damage",
          "$25,000 per person, $50,000 per accident, $25,000 property damage",
          "$100,000 per person, $300,000 per accident, $50,000 property damage",
        ],
        correctIndex: 1,
        explanation:
          "Fifty thousand per person, a hundred thousand per accident and fifty thousand for property damage, for any policy issued or renewed on or after 1 July 2025.",
        context:
          "The old limits were thirty, sixty and twenty-five thousand, and they had stood since 1999. The printed handbook still shows those older figures, because it went to press before the change took effect, so the Department of Insurance rather than the handbook is the current authority here. The same legislation also brought underinsured motorist coverage into every new or renewed policy.",
        trap:
          "Quoting the handbook's table. It is out of date on this point, and the newer 50/100/50 figures are the ones in force.",
        excerptKey: "insurance-new-minimums",
        sourceLabel: "N.C. Department of Insurance - Increased Minimum Limits",
        sourceUrl: INSURANCE,
        commonlyMissed: true,
      },
      {
        id: "nc_s6_21",
        topic: "emergencies",
        question: "What is the correct response when your car starts to skid?",
        choices: [
          "Brake firmly and steer straight ahead",
          "Steer against the direction of the skid and accelerate gently",
          "Hold the wheel still and wait for grip to return",
          "Ease off the accelerator and steer in the direction the rear of the car is sliding",
        ],
        correctIndex: 3,
        explanation:
          "Come off the accelerator and steer where the back of the car is going. As the car straightens, turn the wheel back the other way so you do not over-steer into a second skid.",
        context:
          "Braking is handled separately and depends on the car: with anti-lock brakes you use firm steady pressure and do not pump, and without them you pump gently. Wet roads, ice and packed snow are the usual triggers, and the handbook's real preventive advice is to reduce speed gradually rather than to rely on recovering from a skid you have already started.",
        trap:
          "Forgetting the second half of the correction. Steering into the skid without unwinding is how one skid becomes two.",
        excerptKey: "skid-steer-into",
        sourceLabel: "NC Driver Handbook - Chapter 4, Skids",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_22",
        topic: "rules",
        question:
          "You are overtaking a car on a two-lane road. How far to its left must you pass?",
        choices: ["At least one foot", "At least 18 inches", "At least two feet", "At least four feet"],
        correctIndex: 2,
        explanation:
          "Two feet is the minimum clearance the law sets. Alongside it sits a practical test: if the driver you passed had to slow to let you back in, the pass was not safe.",
        context:
          "The same two feet applies to passing a moped. A motorcycle is different and is entitled to the full width of its lane, so passing one means changing lanes. Before any of this you need to be able to see far enough ahead to get back into your own lane before meeting oncoming traffic.",
        trap:
          "Answering three feet, which is the figure in a great many other states. North Carolina's written minimum is two.",
        excerptKey: "passing-two-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Passing",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s6_23",
        topic: "parking",
        question:
          "Your passenger wants to be dropped off, and the only space is alongside a car already parked at the kerb. What does the law say?",
        choices: [
          "It is permitted for under two minutes",
          "It is permitted if you stay in the driver's seat",
          "It is permitted with hazard flashers on",
          "It is prohibited; stopping on the roadway side of another vehicle is double parking",
        ],
        correctIndex: 3,
        explanation:
          "Stopping on the roadway side of another vehicle is double parking, and it appears on North Carolina's list of places you may not park. No duration or lights make it lawful.",
        context:
          "The list is one of the handbook's more heavily tested passages. It also covers intersections and driveways, crosswalks, sidewalks and bridges, the paved travel portion of a highway, spaces reserved for disabled use without a plate or placard, and the right of way of an interstate apart from designated areas and genuine emergencies.",
        trap:
          "Believing a brief stop is not parking. The rule is about where the vehicle is, not how long it is there.",
        excerptKey: "park-double-parking",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where you should not park",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s6_24",
        topic: "signals",
        question: "What does a flashing yellow signal mean?",
        choices: [
          "Stop, then proceed when clear",
          "The signal is out of order",
          "Slow down and proceed with caution",
          "Prepare to stop for a red signal",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow carries the same meaning as a warning sign: slow down and go on with care. It does not require a stop.",
        context:
          "Its counterpart is the flashing red, which carries the meaning of a stop sign, so you stop and then move off when you can enter without interfering with approaching traffic. Both are distinct from a signal that has gone completely dark, which turns the intersection into an all-way stop unless someone authorised is directing traffic.",
        trap:
          "Reading a flashing yellow as a failure. It is a deliberate mode, and stopping for it obstructs traffic behind you.",
        excerptKey: "flashing-red-yellow",
        sourceLabel: "NC Driver Handbook - Chapter 5, Flashing Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_25",
        topic: "speed",
        question: "How much stopping distance should you allow on snow or ice?",
        choices: [
          "The same as on a dry road, if you have snow tyres",
          "At least three times the normal stopping distance",
          "About 50 percent more",
          "Twice the normal stopping distance",
        ],
        correctIndex: 1,
        explanation:
          "At least three times the normal distance. That is the figure for starting and stopping on snowy or icy roads, and it assumes you have already slowed right down.",
        context:
          "Speed comes down first: more than half for packed snow, and a crawl on ice. Get a feel for the road by testing the steering and the braking, let the engine slow the car rather than riding the brake, and keep extra distance from the vehicle ahead. Watch shady spots, bridges and overpasses, which freeze before the rest of the road does.",
        trap:
          "Applying the wet-road figure. Twice the following distance is for rain; snow and ice ask for three times the stopping distance.",
        excerptKey: "snow-three-times-distance",
        sourceLabel: "NC Driver Handbook - Chapter 4, Snow and Ice",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_26",
        topic: "signs",
        question: "Which shape marks a school zone or school crossing?",
        choices: [
          "A five-sided pentagon",
          "A yellow diamond",
          "An inverted triangle",
          "A yellow pennant",
        ],
        correctIndex: 0,
        explanation:
          "The pentagon. It is reserved for school zones and school crossings, and asks for particular alertness to children.",
        context:
          "In many school zones the limit drops during specific school hours rather than all day, and speeding above the school zone limit is worth three licence points. The pennant, which is the other odd-shaped warning sign, marks the beginning of a no-passing zone and sits on the left-hand side of the road.",
        trap:
          "Confusing the pentagon with the pennant. Both break the diamond pattern, and they mean entirely different things.",
        excerptKey: "pentagon-school",
        sourceLabel: "NC Driver Handbook - Chapter 5, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_27",
        topic: "rightOfWay",
        question:
          "You want to turn left at an intersection. A car is approaching from the opposite direction, going straight. What must you do?",
        choices: [
          "Turn first, since you reached the centre of the intersection earlier",
          "Signal, wait, and turn only when the turn can be made safely",
          "Proceed together, since your paths do not conflict",
          "Sound your horn and complete the turn",
        ],
        correctIndex: 1,
        explanation:
          "The left-turning driver waits. Signal, then hold until the turn can be completed safely, because the through movement has the right of way.",
        context:
          "Two facing vehicles only conflict when one of them turns across the other, which is why the burden falls on the turn. The same logic applies with a circular green: the signal permits the movement but protects nothing, and turning traffic still yields to oncoming vehicles and to pedestrians. A green arrow is the only version that removes that obligation.",
        trap:
          "Treating a gap in the oncoming stream as a right to go. The obligation stays with you whatever the gap looks like.",
        excerptKey: "facing-left-turn-yields",
        sourceLabel: "NC Driver Handbook - Chapter 4, Special Driving Situations",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_28",
        topic: "safety",
        question: "Where does the handbook say children aged 12 and under should ride?",
        choices: [
          "Buckled up in a rear seat",
          "In the front, where the driver can watch them",
          "Anywhere, provided they are belted",
          "In a booster seat regardless of size",
        ],
        correctIndex: 0,
        explanation:
          "Buckled up in a rear seat. It is the handbook's safety guidance, sitting on top of the narrower legal requirements about restraints.",
        context:
          "The legal rules are separate and more specific: under eight and under eighty pounds means a weight-appropriate restraint, and under five and under forty pounds means the rear seat where the car has an active passenger-side front air bag. The reason for the general guidance is the air bag, which deploys from the dashboard at up to two hundred miles per hour.",
        trap:
          "Mistaking the guidance for the statute. Twelve and under is the recommendation; the legal thresholds are eight and eighty, and five and forty.",
        excerptKey: "child-12-and-under-rear",
        sourceLabel: "NC Driver Handbook - Chapter 4, Child Safety Points",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_29",
        topic: "emergencies",
        question:
          "You are partway across a railroad crossing when the lights start flashing and the gates begin to come down. What should you do?",
        choices: [
          "Stop and reverse clear of the tracks",
          "Stop where you are and wait for the gates to lift",
          "Keep moving and drive through, because the gates are flexible and will not trap you",
          "Sound your horn and stop until an official arrives",
        ],
        correctIndex: 2,
        explanation:
          "Keep going. The warning system leaves enough time to finish crossing, and the gates are flexible and will not block a vehicle in.",
        context:
          "Stopping or reversing is what turns a manageable situation into a stalled car on the rails. The handbook's other warning is worth pairing with it: crossing gates will not trap you, but stopped traffic can, so never enter a crossing unless you are sure the traffic ahead will not leave you stranded on the tracks. If you do end up stalled on a crossing, get out immediately.",
        trap:
          "Braking when the lights start. On a crossing, the correct response is the one that gets you off it.",
        excerptKey: "railroad-keep-moving",
        sourceLabel: "NC Driver Handbook - Chapter 4, Remember these railroad crossing rules",
        sourceUrl: HB,
      },
      {
        id: "nc_s6_30",
        topic: "licensing",
        question:
          "You fail the knowledge test for a regular Class C licence. How soon may you retake it?",
        choices: [
          "The same day",
          "After 24 hours",
          "In seven calendar days",
          "After 30 days",
        ],
        correctIndex: 2,
        explanation:
          "Seven calendar days. The same waiting period applies to the driving test, and you retake only the part you failed.",
        context:
          "Because each test is passed separately, failing one leaves the others intact. The knowledge examination needs eighty percent, the road signs test needs nine of twelve for a Class C licence, and the vision test needs 20/40 in either eye or both together for an unrestricted licence. First-time applicants take all four parts, including the on-road driving test.",
        trap:
          "Assuming a failure means starting from scratch. Only the failed part is repeated, and only after the seven-day wait.",
        excerptKey: "retest-seven-days",
        sourceLabel: "NCDMV - Driver License Tests",
        sourceUrl: TESTS,
      },
    ],
  },
];
