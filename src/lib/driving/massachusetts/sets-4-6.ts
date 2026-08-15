import type { DrivingTestSet } from "../types";

// Continues the Massachusetts bank. Same sourcing discipline as sets 1-3: the
// Massachusetts Driver's Manual (Revised April 2026) first, mass.gov RMV pages
// where the manual compresses a rule into a chart, and the Massachusetts
// General Laws for rules the manual states only in outline or does not state at
// all.
//
// Sets 5 and 6 lean on the statute more heavily than the earlier sets, because
// the provisions that actually catch Massachusetts drivers out - the 100-foot
// minimum following distance behind a school bus, the escalating fines for
// passing a stopped one, the single-file passing rule for motorcycles, the
// 15 mph limit near a peddler's vehicle, and the rule that a green light is no
// defence to blocking an intersection - are ones the 2026 manual either
// summarises or leaves out.
const HB = "https://www.mass.gov/doc/english-drivers-manual/download";
const EXAM = "https://www.mass.gov/doc/learners-permit-exam-overview/download";
const C90_13B = "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXIV/Chapter90/Section13B";
const C90_14 = "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXIV/Chapter90/Section14";
const C90_17 = "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXIV/Chapter90/Section17";
const C89_4A = "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXIV/Chapter89/Section4A";
const C89_9 = "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXIV/Chapter89/Section9";

export const massachusettsSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Massachusetts Specifics",
    difficulty: "medium",
    description:
      "The rules that are particular to Massachusetts rather than general to driving: rotary and trolley etiquette, the local speed options, the Junior Operator penalty structure, and the numbers the RMV states as figures rather than principles.",
    questions: [
      {
        id: "ma_s4_01",
        topic: "licensing",
        question:
          "What vision standard must you meet for a full Class D licence in Massachusetts?",
        choices: [
          "20/40 in the better eye, corrected, and 120 degrees of horizontal peripheral vision",
          "20/20 in both eyes, uncorrected",
          "20/60 in the better eye and 90 degrees of peripheral vision",
          "20/30 in each eye separately",
        ],
        correctIndex: 0,
        explanation:
          "Twenty-forty corrected in the better eye, plus 120 degrees of horizontal peripheral vision using both eyes together.",
        context:
          "The screening happens at the Service Center when you apply for a permit or licence, and it covers visual acuity, colour vision and peripheral vision. If you normally wear glasses or contacts for distance you must wear them for the screening, and passing that way earns you the corrective lenses restriction, code letter B. Corrected vision between 20/50 and 20/70 in the better eye may still get you a daylight only licence.",
        trap:
          "The peripheral requirement is measured with both eyes together, not eye by eye, and it is the part most people forget exists.",
        excerptKey: "vision-standard",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, Vision Screening Requirements",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_02",
        topic: "rules",
        question:
          "Traffic is crawling on a highway and the breakdown lane is empty. May you use it to get past?",
        choices: [
          "Yes, as long as you signal and keep your speed low",
          "No - a breakdown lane, shoulder or sidewalk may never be used to pass",
          "Yes, if the vehicle ahead is stopped rather than moving",
          "Yes, once traffic has been stationary for more than a minute",
        ],
        correctIndex: 1,
        explanation:
          "Massachusetts bars passing in a breakdown lane, on a shoulder or on a sidewalk outright. The permission some highways give for breakdown-lane travel is a different thing entirely.",
        context:
          "A handful of Massachusetts highways do allow breakdown-lane travel, but only during specific hours that are clearly posted, and even then it is travel rather than passing. The manual warns that when you exit a highway using breakdown lanes as travel lanes you should check your right-hand blind spot carefully, because traffic may be moving there.",
        trap:
          "Seeing other cars in the breakdown lane during rush hour does not mean it is open. Those hours are posted, and passing is never one of the permitted uses.",
        excerptKey: "no-shoulder-passing",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Rules for Passing",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_03",
        topic: "sharing",
        question:
          "On a Massachusetts multiple-lane highway, which lanes may trucks and buses use?",
        choices: [
          "Any lane, as long as they keep pace with traffic",
          "The far right lane only",
          "Any lane except the far left",
          "The two right-hand lanes only",
        ],
        correctIndex: 3,
        explanation:
          "The two right-hand lanes: the far right for normal travel and the second lane for passing. Everything left of that is closed to them.",
        context:
          "That is why the manual warns car drivers not to dawdle in the second lane. Sitting below the flow there bottles up every truck and bus trying to pass, and the resulting cluster of large vehicles is a hazard in itself. If a truck or bus wants past you, move over when it is safe rather than making it work around you.",
        trap:
          "It is not just the far right lane. The second lane is theirs for passing, which is why a slow car in it causes so much trouble.",
        commonlyMissed: true,
        excerptKey: "truck-lanes",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Driving Too Slowly",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_04",
        topic: "safety",
        question:
          "How much following distance does Massachusetts recommend behind heavy equipment such as a dump truck or tractor?",
        choices: ["Three seconds", "Four seconds", "Six seconds", "At least ten seconds"],
        correctIndex: 3,
        explanation:
          "Ten seconds, which is more than three times the ordinary car figure. Heavy equipment carries far more weight and needs much more room to stop.",
        context:
          "The three following-distance figures run three, four and ten: three seconds behind an ordinary car, four behind a motorcycle, ten behind heavy equipment. The manual also warns against cutting in front of heavy equipment or tractor-trailers at all, and notes that a fully loaded tractor-trailer may need twice the stopping distance of a passenger car.",
        trap:
          "Ten seconds feels absurdly long and gets dismissed as a suggestion. It is the figure the manual actually states.",
        commonlyMissed: true,
        excerptKey: "ten-second-heavy",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Safe Distances Around Your Car",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_05",
        topic: "signals",
        question:
          "A pedestrian presses the button at a mid-block crossing and amber lights begin flashing in an irregular pattern. What must you do?",
        choices: [
          "Slow down and continue if the crossing looks clear",
          "Treat it as a yield and merge past",
          "Stop for pedestrians",
          "Nothing, since amber is only advisory",
        ],
        correctIndex: 2,
        explanation:
          "A Rectangular Rapid Flashing Beacon obliges you to stop for pedestrians whenever its amber lights are flashing.",
        context:
          "These beacons are placed where there is no traffic signal - mid-block crosswalks and unsignalised intersections - and they are activated either by a push button or by a pedestrian detection system. The irregular flash pattern is deliberate, so the device does not read as an ordinary warning light. The Pedestrian Hybrid Beacon is a different device with a five-phase sequence of its own.",
        trap:
          "Amber usually means caution rather than stop. This is the exception, and it appears exactly where pedestrians have no other protection.",
        excerptKey: "rrfb",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Rectangular Rapid Flashing Beacon",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_06",
        topic: "impairment",
        question:
          "What licence suspension follows a first conviction for operating under the influence in Massachusetts?",
        choices: ["90 days", "One year", "Two years", "Six months"],
        correctIndex: 1,
        explanation:
          "One year for a first conviction, on top of a fine between $500 and $5,000 and a possible prison term of up to two and a half years.",
        context:
          "The ladder climbs steeply: two years for a second conviction, eight for a third, ten for a fourth, and a lifetime revocation for a fifth. The court may allow a first offender to complete an alcohol education course to shorten the suspension - to between 45 and 90 days if you are over 21, or to 210 days if you are under 21. Reinstatement fees run from $500 upward.",
        trap:
          "The reduced 45-to-90-day figure is what people remember, but it depends on a court allowing the education course. The suspension itself is a year.",
        excerptKey: "oui-first-offense",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Penalties for Operating Under the Influence",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_07",
        topic: "parking",
        question:
          "What is the fine for a first offence of parking in a space reserved for disabled person or disabled veteran plates?",
        choices: ["$100", "$300", "$500", "$50"],
        correctIndex: 1,
        explanation:
          "Three hundred dollars for a first offence. Wrongful use of somebody else's disabled person or veteran plate or placard carries a minimum of $500.",
        context:
          "The prohibition extends beyond the marked bay itself: you may not park in the striped crosshatch area next to an HP-DV space either, and that holds even if you do have disability plates or a placard, because the crosshatching is the access space for a ramp or lift. These are among the few parking fines the state fixes rather than leaving to the city or town.",
        trap:
          "The crosshatch beside the space is not spare room for a small car. It is what makes the space usable.",
        commonlyMissed: true,
        excerptKey: "parking-hp-dv",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_08",
        topic: "speed",
        question:
          "According to the Massachusetts manual, what share of pedestrians are seriously injured or killed when struck at 30 mph?",
        choices: ["40 percent", "13 percent", "60 percent", "73 percent"],
        correctIndex: 0,
        explanation:
          "Forty percent at 30 mph. The figure is 13 percent at 20 mph and 73 percent at 40 mph.",
        context:
          "Those three numbers are why the unposted speed figures step down so sharply in built-up areas and why school zones are set at 20 mph. The manual describes vehicle speed as the leading threat to pedestrian safety, and notes that about a third of all motor vehicle fatalities involve speeding. Higher speed also degrades how well your own safety equipment protects you.",
        trap:
          "The jump between 30 and 40 mph is not gentle - it nearly doubles. Ten miles an hour changes the outcome, not just the impact.",
        excerptKey: "pedestrian-speed-risk",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Dangers of Speeding",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_09",
        topic: "rightOfWay",
        question:
          "You want to turn left across a queue of stopped traffic, and a driver in the queue waves you through. What is the legal position?",
        choices: [
          "Their wave transfers the right of way to you",
          "Oncoming traffic still has the right of way, whatever the wave suggests",
          "You may proceed if you sound your horn first",
          "The wave is binding only if the other driver is also turning",
        ],
        correctIndex: 1,
        explanation:
          "A wave is a courtesy, not a legal transfer. Oncoming traffic keeps the right of way, and it is your job to see for yourself that the way is clear.",
        context:
          "The manual gives this its own heading - courtesy crashes - because being waved into a gap you cannot see across is a common way to get hit. The test is whether you can see that there is no oncoming traffic, or that all of it is stopped. What another driver is signalling to you is beside the point.",
        trap:
          "Refusing a wave feels rude. Accepting one from a driver whose view you cannot share is how the crash happens.",
        excerptKey: "courtesy-crashes",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Courtesy Crashes",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_10",
        topic: "emergencies",
        question:
          "How close to a fire may you legally drive or park in Massachusetts?",
        choices: [
          "No closer than 100 feet",
          "No closer than 300 feet",
          "No closer than 800 feet",
          "There is no set distance - follow the firefighters' directions",
        ],
        correctIndex: 2,
        explanation:
          "Eight hundred feet, which is a distinctly long exclusion and one of the largest fixed distances in the manual.",
        context:
          "The same passage bars you from driving over an unprotected fire hose unless a firefighter or public safety official directs you to. Both rules exist because a hose crossing a road is a lifeline that a single vehicle can crush, and because a fire scene needs room for apparatus that has not arrived yet.",
        trap:
          "Eight hundred feet is more than two football fields. Drivers underestimate it badly and end up parked inside the exclusion.",
        excerptKey: "fire-800-feet",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Stationary Emergency and Maintenance Vehicles",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_11",
        topic: "signs",
        question: "What does the number posted below a white crossbuck sign tell you?",
        choices: [
          "The speed limit across the crossing",
          "How many sets of tracks cross the road",
          "The distance in feet to the nearest signal",
          "The maximum weight the crossing will carry",
        ],
        correctIndex: 1,
        explanation:
          "It counts the tracks. More than one set means a second train may be hidden behind the first.",
        context:
          "The crossbuck marks the point where the rails meet the road; the round yellow sign further back warns you that a crossing is coming and tells you to slow down and prepare to stop. Some crossings add red flashing lights, a bell and a gate. Where the lights flash you stop at least 15 feet before the light post or gate and stay stopped until the gate lifts and the lights go out.",
        trap:
          "A train clearing the crossing does not mean the crossing is clear. On a multi-track crossing the first train can mask the second.",
        excerptKey: "crossbuck",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Railroad Crossings",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_12",
        topic: "licensing",
        question:
          "Who may act as your sponsor for a Massachusetts Class D road test?",
        choices: [
          "Any licensed driver over 18",
          "A parent or guardian only",
          "Any adult holding a valid licence, including a foreign one",
          "A driver aged 21 or over with a year's experience and a valid US state licence",
        ],
        correctIndex: 3,
        explanation:
          "At least 21, at least a year of driving experience, and a valid driver's licence issued by their home state. Holders of foreign licences cannot sponsor.",
        context:
          "No sponsor means no test - the examiner will simply not run it, and you are charged the fee anyway. The sponsor sits in the seat behind you during the test while the examiner sits beside you. One person may not sponsor more than three different applicants in a year without approval from the RMV Road Test Program, and a Class M road test needs no sponsor at all.",
        trap:
          "A valid foreign licence is enough to drive on in Massachusetts as a visitor but not enough to sponsor a road test.",
        excerptKey: "road-test-sponsor",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, Sponsor Requirements",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_13",
        topic: "rules",
        question:
          "You reach a red light with a green bicycle box painted across the lane in front of you, and no bicycles are in it. Where do you stop?",
        choices: [
          "Inside the box, since it is empty",
          "At the crosswalk beyond the box",
          "Anywhere before the intersection",
          "Behind the box, even though it is empty",
        ],
        correctIndex: 3,
        explanation:
          "You stop behind the bicycle box whether or not anyone is in it, and wait for the green.",
        context:
          "Bicycle boxes sit ahead of the crosswalk and cover the whole travel lane, giving riders a visible place to wait clear of turning vehicles. They also let a rider make a two-stage left turn - crossing straight through on the green, stopping in the box on the road they are turning onto, then continuing straight when that signal turns green. Green pavement elsewhere carries a similar rule: do not stop on it at a red light.",
        trap:
          "An empty box looks like wasted road. A cyclist arriving after you have crept into it has nowhere safe left to go.",
        excerptKey: "bicycle-box",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Bicycle Boxes",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_14",
        topic: "safety",
        question:
          "You clear the windshield of your car after a snowfall but leave the roof and trunk covered. What can happen under Massachusetts law?",
        choices: [
          "Nothing, as long as you can see out",
          "You can be charged with negligent operation",
          "A fixed $25 fine, with no other consequence",
          "It is only an offence on a highway",
        ],
        correctIndex: 1,
        explanation:
          "Snow and ice blowing off your roof, hood or trunk into the vehicles behind you can bring a negligent operation charge.",
        context:
          "The instruction is to remove all ice and snow before driving - every window, the wipers, the headlights and brake lights, and then the roof, hood and trunk. Massachusetts adds the winter-driving basics around it: lower your speed, accelerate slowly, never lock the brakes on ice, keep the tank at least half full, and expect bridges and overpasses to freeze before the rest of the road.",
        trap:
          "Being able to see out is the driver's test of whether the car is clear. The law's test is whether the car is a hazard to the people behind.",
        excerptKey: "clear-snow",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Winter Driving",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_15",
        topic: "sharing",
        question:
          "You are on a narrow street with an advisory bicycle lane, dashed on both sides. What do the dashes mean for you?",
        choices: [
          "You may not enter the lane at all",
          "You may drive in it only when turning",
          "You may use the lane space when necessary, but must always yield to bicyclists first",
          "Bicyclists must leave the lane when a car approaches",
        ],
        correctIndex: 2,
        explanation:
          "The dashes mark the lane as shareable when the street is too narrow for a full bike lane. Bicyclists get priority in it whenever they are there.",
        context:
          "A conventional bicycle lane is marked by solid white lines and is five feet wide, and motor vehicles may only enter it to turn on or off the road. The advisory version exists for streets that cannot fit that but still carry a lot of bicycle traffic. Shared Lane Markings, or sharrows, are different again - they position riders in a lane shared with traffic and oblige drivers to leave room when passing.",
        trap:
          "A dashed line usually means you may cross freely. Here it means you may borrow the space, and only when the riders are not using it.",
        excerptKey: "advisory-bike-lane",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Advisory Bicycle Lanes",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_16",
        topic: "impairment",
        question:
          "You have been required to fit an Ignition Interlock Device. How long must it stay on after your licence is reinstated?",
        choices: [
          "Until the reinstatement takes effect",
          "Six months",
          "One year",
          "Two more years",
        ],
        correctIndex: 3,
        explanation:
          "Two further years after reinstatement, on top of the whole period you hold a hardship licence.",
        context:
          "The requirement applies once you have two or more operating under the influence offences and become eligible for a hardship licence or for reinstatement. You pay for the device yourself. If you need to take a road test in a vehicle fitted with one, it must also have a centre console brake and a seat for your sponsor, or the booking cannot be made online.",
        trap:
          "Getting the licence back is not the end of the requirement. The clock on the device runs for two years past that point.",
        commonlyMissed: true,
        excerptKey: "interlock-duration",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Ignition Interlock Devices",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_17",
        topic: "parking",
        question:
          "What does Massachusetts state law require when you leave your vehicle unattended?",
        choices: [
          "Stop the motor, set the parking brake, lock the ignition, remove the key and lock the door",
          "Set the parking brake and leave the vehicle in gear",
          "Remove the key only, and only overnight",
          "Nothing specific, provided the vehicle is legally parked",
        ],
        correctIndex: 0,
        explanation:
          "All five steps are stated as a legal requirement, not as advice: motor off, brake set, ignition locked, key removed, door locked.",
        context:
          "The rule sits at the front of the parking section alongside the requirements to leave at least a 12-foot clear roadway and to park no more than 12 inches from the curb in a business or residential district. On a hill it combines with the wheel-turning rules, so a parked car has both a brake and a mechanical backstop against rolling.",
        trap:
          "Leaving the engine running while you dash inside is not a grey area. It also runs into the five-minute idling limit.",
        excerptKey: "leaving-vehicle",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_18",
        topic: "speed",
        question:
          "Some Massachusetts cities and towns have adopted a lower unposted limit for thickly settled areas. What is it, and how do you know you are in one?",
        choices: [
          "20 mph, marked by pavement stencils",
          "30 mph, announced only in local by-laws",
          "25 mph, with signs posted at every entrance to the city or town",
          "15 mph, signed at each individual street",
        ],
        correctIndex: 2,
        explanation:
          "Twenty-five miles per hour, and the community must post signs at all of its entrances when it adopts the option.",
        context:
          "The default figure inside a thickly settled or business district is 30 mph. A city or town that accepts the relevant statute may drop that to 25 on roads under its own control - state highways are excluded. Because the change is announced at the boundary rather than street by street, crossing a town line can change what counts as reasonable and proper without another sign appearing.",
        trap:
          "The signs are at the town line, not on the street you are driving down. Missing one leaves you 5 mph over on every unposted road in the town.",
        commonlyMissed: true,
        excerptKey: "thickly-settled-25",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_19",
        topic: "signals",
        question:
          "A pedestrian is halfway across when the crossing countdown reaches zero. Who has the right of way?",
        choices: [
          "You do, since the pedestrian phase has ended",
          "Neither - both should stop",
          "You do, but only if you sound your horn",
          "The pedestrian, because they were already in the crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "A pedestrian already in the crosswalk when the countdown reaches zero keeps the right of way. The timer tells people whether to start, not whether to finish.",
        context:
          "The pedestrian signals themselves are white and orange WALK and DON'T WALK indications. A pedestrian should not begin to cross on DON'T WALK, but somebody already in the crosswalk should finish crossing. From the driver's side the duties are broader still: yield to anyone entering or using a crosswalk in your path, and never block a crosswalk.",
        trap:
          "The countdown looks like a deadline for the pedestrian. It is a starting signal, and it does not expire their right to finish.",
        excerptKey: "countdown-timer",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Pedestrian Signals",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_20",
        topic: "rightOfWay",
        question:
          "You are passing a horse on a country road and the rider raises a hand for you to stop. What must you do?",
        choices: [
          "Stop - you must stop if a rider or driver signals you to",
          "Continue slowly, since the road is a public way",
          "Sound your horn to let the rider know you are there",
          "Pull out wide and accelerate past",
        ],
        correctIndex: 0,
        explanation:
          "A signal from the rider or driver obliges you to stop. So does an animal that appears frightened as you pass.",
        context:
          "The wider rule gives the right of way to any animal being led, ridden or driven. Slow down as you approach, stop if the animal is coming toward you or crossing your path, and leave plenty of room if you are going the same way. Do not sound the horn or make any loud noise - the whole point is not to startle the animal. The law covers horses, cows and any other draft animal.",
        trap:
          "Sounding the horn feels like a courtesy warning. Here it is the precise thing you are told not to do.",
        excerptKey: "animals-stop-signal",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Animals and Horse-Drawn Vehicles",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_21",
        topic: "emergencies",
        question:
          "Your car breaks down and you get it onto the shoulder of a busy highway. What does Massachusetts tell you to do next?",
        choices: [
          "Stay in your vehicle",
          "Stand beside the car so you are visible to traffic",
          "Walk to the nearest exit for help",
          "Stand in the breakdown lane behind the car to warn drivers",
        ],
        correctIndex: 0,
        explanation:
          "You stay inside. The manual is blunt that many people have been killed standing near or working on a vehicle at the roadside.",
        context:
          "Once you are parked and still inside: hazard lights on, interior lights on at night, and put your safety vest on before you consider getting out. If you do set out warning triangles or LED flares, the pattern on a divided highway is 10 feet and 100 feet behind the vehicle; on a two-way or undivided road you add a third at 100 feet in front. Tie a white cloth to the antenna or door handle, or a red one when it is snowing.",
        trap:
          "Standing outside feels safer than sitting in a car near traffic. On a highway shoulder it is the more dangerous of the two.",
        excerptKey: "breakdown-stay-inside",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Breakdowns",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_22",
        topic: "signs",
        question: "What does a sign showing a red circle with a diagonal slash mean?",
        choices: [
          "A hazard is present at this point",
          "Something is prohibited",
          "The route ahead has been rerouted",
          "A service is available nearby",
        ],
        correctIndex: 1,
        explanation:
          "The red circle and slash is the prohibition marker. It is a regulatory sign, and it states a law rather than warning of a hazard.",
        context:
          "Regulatory signs use a red or white background. Some are words only, such as SPEED LIMIT; some are images only, such as NO U-TURN; some combine the two. Warning signs are a separate category on yellow or fluorescent yellow-green, and guide signs are green, blue or brown depending on whether they give directions, motorist services or points of interest.",
        trap:
          "Regulatory and warning signs both change your behaviour, but only one of them is stating a law you can be cited for breaking.",
        excerptKey: "regulatory-signs",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_23",
        topic: "licensing",
        question:
          "You are sitting the permit exam online and stare at a hard question without clicking anything. How long before the system fails you automatically?",
        choices: ["30 seconds", "More than two minutes", "Five minutes", "There is no inactivity limit"],
        correctIndex: 1,
        explanation:
          "More than two minutes without clicking a button on a question counts as inactivity and fails the exam automatically.",
        context:
          "The online exam carries three automatic failures: inactivity beyond two minutes, exceeding the 25-minute overall limit, and leaving the browser during the exam. Any of them means you have to pay another $30 fee through your myRMV profile before you can sit it again. With 25 questions in 25 minutes you have about a minute each, so two minutes on one question is already over budget.",
        trap:
          "Reading a question carefully is fine; leaving it unanswered while you think is not. Pick something and move on.",
        excerptKey: "exam-auto-fail",
        sourceLabel: "Massachusetts RMV - Learner's Permit Exam Overview",
        sourceUrl: EXAM,
      },
      {
        id: "ma_s4_24",
        topic: "rules",
        question:
          "Under which conditions does Massachusetts say a three-point turn is appropriate?",
        choices: [
          "Whenever a U-turn would be inconvenient",
          "On any residential street during daylight",
          "Only when the street is narrow, visibility is good, traffic is light, the turn is legal and there is no other option",
          "Only where a sign specifically permits turning",
        ],
        correctIndex: 2,
        explanation:
          "The manual gives it as a list of conditions that must all be met, ending with there being no other option available.",
        context:
          "The full list is a narrow street, good visibility, no public driveways to turn into, light traffic, the turn being legal, and no alternative. The procedure itself starts from as close to the right curb as you can get, needs a gap of 20 to 30 seconds, and involves reversing to the opposite curb while looking over your right shoulder. It is the fallback for when there is not enough room for a U-turn.",
        trap:
          "It is not a general-purpose way to turn around. The conditions read as a checklist because they are one.",
        excerptKey: "three-point-turn",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Three-Point Turns",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_25",
        topic: "safety",
        question:
          "You are 30 and want to follow satellite navigation on your phone while driving in Massachusetts. What is permitted?",
        choices: [
          "Holding the phone as long as you only glance at the map",
          "Nothing - navigation apps are barred along with everything else",
          "Using it if the phone is affixed in the vehicle for navigation",
          "Using it only when stopped at a red light",
        ],
        correctIndex: 2,
        explanation:
          "A navigation device, including a phone, may be used if it is affixed in the vehicle - temporarily or permanently - for the purpose of providing navigation assistance.",
        context:
          "For drivers 18 and over the general rule is hands-free only: the device is mounted to the windshield, dashboard or centre console, and you may touch it only to activate hands-free mode. Reading or writing an electronic message is out entirely. The navigation carve-out is a genuine exception, but it depends on the mount, not on how briefly you look.",
        trap:
          "The exception is about where the phone is, not what is on the screen. A map on a handheld phone is still a handheld phone.",
        excerptKey: "hands-free-gps",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Distracted Driving Law",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_26",
        topic: "impairment",
        question:
          "A 17-year-old fails a chemical test in Massachusetts. What is the administrative suspension?",
        choices: [
          "30 days",
          "30 days plus 90 days",
          "One year only",
          "30 days plus an additional year",
        ],
        correctIndex: 3,
        explanation:
          "Thirty days for the failed test, plus an additional year under the under-21 provisions. Entering an approved alcohol education programme on a first case can cut the year down to 180 days.",
        context:
          "The structure differs by age band. Over 21, a failed test means 30 days or until the court case concludes, whichever is shorter. Between 18 and 21 it is 30 days plus 180. Under 18 it is 30 days plus a year. The manual stresses that the additional under-21 suspension is about getting young drivers into alcohol education, so it survives even if you win the court case.",
        commonlyMissed: true,
        trap:
          "Winning in court does not clear the extra suspension. It is administrative and runs independently of the criminal case.",
        excerptKey: "failed-test-under-18",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, License Suspension Periods for Failed Chemical Tests",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_27",
        topic: "sharing",
        question:
          "You open your car door into a passing bicyclist in Massachusetts. What is the penalty for the person who opened it?",
        choices: [
          "A fine of up to $100",
          "A written warning only",
          "A mandatory court appearance",
          "Nothing, because the cyclist should have left more room",
        ],
        correctIndex: 0,
        explanation:
          "Up to $100, and it applies to passengers as well as drivers.",
        context:
          "The manual teaches the Dutch Reach as the way to avoid it: check the rear-view mirror, check the side mirror, then open the door with the hand further from it. Reaching across turns your body toward the road so you actually see what is coming, and it slows the door down. Riders are separately advised to stay at least three feet clear of parked cars, on streets with and without bike lanes.",
        trap:
          "Blaming the rider's position does not help. The offence is committed by the person who opens the door.",
        excerptKey: "dooring-fine",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, As a motorist in the presence of bicycles",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_28",
        topic: "speed",
        question:
          "You are driving in a funeral procession on a highway posted at 65 mph. What is the fastest you may go?",
        choices: ["55 mph", "65 mph", "45 mph", "The posted limit, like any other traffic"],
        correctIndex: 0,
        explanation:
          "Fifty-five miles per hour, whatever the posted limit is, once it is 55 or higher.",
        context:
          "The procession rules cut both ways. On any other public way you also may not travel more than 5 mph below the posted limit, so the procession has to keep moving. Headlights and taillights stay on throughout, and the first and last vehicles run hazard lights. A funeral home vehicle may show a flashing purple light and no other colour.",
        trap:
          "Assuming the procession simply follows the posted limit. It has its own ceiling of 55 and its own floor of 5 mph under the limit.",
        commonlyMissed: true,
        excerptKey: "funeral-speed",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Funeral Processions",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_29",
        topic: "rightOfWay",
        question: "What must you do before turning onto a designated throughway?",
        choices: [
          "Nothing special - normal right-of-way rules apply",
          "Stop, regardless of what signs are present",
          "Yield the right of way to traffic already on the throughway",
          "Signal for at least 500 feet before the turn",
        ],
        correctIndex: 2,
        explanation:
          "You yield to traffic already on the throughway before you turn onto it.",
        context:
          "Throughways are designated by the highways department on state roads, or by a city or town on roads it controls, and the designation comes with stop signs, yield signs and other control devices at the intersections. The rule sits beside the related one that a single or two-lane road yields at an intersection with a divided highway or any road of three or more lanes.",
        trap:
          "Arrival order does not decide it. The designation itself gives the through traffic priority.",
        excerptKey: "throughway-yield",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Throughways",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_30",
        topic: "emergencies",
        question:
          "You break down on an undivided two-way road and have warning triangles. Where do they go?",
        choices: [
          "10 feet behind, 100 feet behind, and 100 feet in front of the vehicle",
          "One directly behind the vehicle only",
          "50 feet behind and 50 feet in front",
          "200 feet behind the vehicle only",
        ],
        correctIndex: 0,
        explanation:
          "Three positions on a two-way or undivided road: 10 feet behind, 100 feet behind, and 100 feet in front, because traffic reaches you from both directions.",
        context:
          "On a divided highway you only need the two behind - 10 feet and 100 feet - since nothing is coming at you from the front. Before you get out at all, assess whether it is safe, and consider leaving by the door away from moving traffic. Put the safety vest on while still inside the vehicle, and raise the hood once you are out.",
        trap:
          "Copying the divided-highway pattern onto a two-way road leaves the direction that will actually hit you head-on unmarked.",
        excerptKey: "warning-triangles",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Breakdowns",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_31",
        topic: "parking",
        question:
          "You have several unpaid parking tickets from your city. What happens when your licence comes up for renewal?",
        choices: [
          "Nothing - parking tickets are a municipal matter",
          "The RMV adds the fines to your renewal fee",
          "The RMV will refuse to renew until they are paid",
          "Your licence is suspended immediately",
        ],
        correctIndex: 2,
        explanation:
          "Unpaid parking fines block both a licence renewal and a vehicle registration renewal until they are cleared.",
        context:
          "Parking violations are not civil motor vehicle infractions and are handled by the city or town that issued them, but they still reach the RMV at renewal time. They sit on a list that also includes abandoned vehicle citations, unpaid excise tax, outstanding court warrants, unpaid E-ZPass and Tobin Bridge violations. Before renewing you have to present official release forms, and a court warrant needs a recall notice from the court.",
        trap:
          "A municipal ticket feels disconnected from your licence. It is the most common reason a routine renewal is refused.",
        excerptKey: "unpaid-parking-tickets",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_32",
        topic: "signs",
        question:
          "A civil flagger in a work zone waves you into a lane that the signs and pavement markings say is closed. What do you do?",
        choices: [
          "Follow the signs, which have legal force the flagger lacks",
          "Stop and wait for a police officer",
          "Follow the flagger's direction",
          "Choose whichever appears safer",
        ],
        correctIndex: 2,
        explanation:
          "You must always obey a traffic officer's directions, even where they overrule signs, signals or pavement markings.",
        context:
          "Civil flaggers are used on low-speed, low-volume roads to control traffic around the work area, and a Flagger Ahead sign is posted around 500 feet in advance. The signs and devices in a work zone are set out for the normal case; the person standing in the road knows what has changed since. The same principle applies to a police officer directing traffic at a signal.",
        trap:
          "Signs feel more authoritative than a person because they are permanent. In a work zone the person is more current.",
        excerptKey: "officer-overrides",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Roadway Construction/Maintenance",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_33",
        topic: "rules",
        question:
          "You enter an intersection on a green light and traffic ahead stops, leaving you stranded across the junction. What is the legal position in Massachusetts?",
        choices: [
          "You are protected because you entered on a green",
          "It is a defence if the traffic ahead stopped unexpectedly",
          "You may proceed through on the red to clear the box",
          "The green light is no defence - you should have waited another cycle",
        ],
        correctIndex: 3,
        explanation:
          "The statute says outright that a green light is no defence to blocking the intersection, and that you must wait another signal cycle if necessary.",
        context:
          "The manual states the duty as entering an intersection or crossing a crosswalk only when there is enough room to get through safely. The statute adds the enforcement edge and a fine of up to $150. Blocking a junction is also one of the situations where an at-fault crash finding is easy to reach, because the standards of fault list includes failing to proceed with due caution from a signal or sign.",
        commonlyMissed: true,
        trap:
          "A green light feels like permission to enter. It is permission to proceed, and only if you can actually get all the way through.",
        excerptKey: "green-no-defense",
        sourceLabel: "Massachusetts General Laws, Chapter 89, Section 9",
        sourceUrl: C89_9,
      },
      {
        id: "ma_s4_34",
        topic: "licensing",
        question:
          "You accumulate three surchargeable events within two years. What does the RMV require?",
        choices: [
          "An immediate 30-day suspension",
          "A 60-day suspension and a $100 fee",
          "Nothing until you reach seven events",
          "Completion of a Driver Retraining Course within 90 days",
        ],
        correctIndex: 3,
        explanation:
          "You must finish the Massachusetts Driver Retraining Course within 90 days, or the licence is suspended until you do.",
        context:
          "A surchargeable event is a moving violation or a crash where you are found more than 50 percent at fault and your insurer paid out more than $1,000. Three in two years brings the retraining course; seven in three years brings an automatic 60-day suspension; three major moving violations, or twelve major and minor combined, in five years makes you a habitual traffic offender with a four-year revocation. Completing the course does not remove the offences from your record.",
        trap:
          "The course is not a way to clear points. It is an additional requirement, and skipping it costs you the licence outright.",
        excerptKey: "three-surchargeable",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Surchargeable Events",
        sourceUrl: HB,
      },
      {
        id: "ma_s4_35",
        topic: "signals",
        question:
          "Your traffic signal is showing red and yellow together as you wait to turn. What duty do you have toward pedestrians?",
        choices: [
          "None, since the phase is about to change in your favour",
          "You must yield to pedestrians",
          "You may proceed if you edge forward slowly",
          "You must yield only to pedestrians on your right",
        ],
        correctIndex: 1,
        explanation:
          "The manual states the duty for a signal that is red, or red and yellow together: you yield to pedestrians.",
        context:
          "The pedestrian duties for drivers form a short list worth learning as a block. Yield to anyone entering or using a crosswalk in your path. Never block a crosswalk. Never pass a vehicle that is stopped or slowing for a pedestrian. Yield when turning into a driveway or parking lot. And on a multi-lane road, never pass a vehicle stopped at a crosswalk without checking for someone crossing in front of it.",
        trap:
          "A signal about to turn green feels like the phase has already started. The pedestrian phase has not necessarily ended.",
        excerptKey: "yield-red-and-yellow",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Laws for Drivers",
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
      "The Junior Operator penalty structure, the chemical test tables, and the Massachusetts rules that live in the General Laws rather than in the manual. These are the items that separate a pass from a near miss.",
    questions: [
      {
        id: "ma_s5_01",
        topic: "sharing",
        question:
          "Massachusetts law sets a minimum distance you must keep behind a school bus, whether or not its lights are flashing. What is it?",
        choices: ["50 feet", "20 feet", "300 feet", "100 feet"],
        correctIndex: 3,
        explanation:
          "One hundred feet. Every school bus is required to carry the words \"keep back 100 feet\" on the rear, legible from that distance.",
        context:
          "This rule is in the General Laws and does not appear in the driver's manual at all, which is why so many licensed Massachusetts drivers have never heard of it. It sits alongside the far better known duty to stop entirely when the bus displays flashing red lights and swings out its stop sign, from either side of the road.",
        trap:
          "The stopping rule is the famous one, so drivers assume nothing applies when the bus is simply moving. A separate 100-foot rule applies at all times.",
        commonlyMissed: true,
        excerptKey: "school-bus-100-feet",
        sourceLabel: "Massachusetts General Laws, Chapter 90, Section 14",
        sourceUrl: C90_14,
      },
      {
        id: "ma_s5_02",
        topic: "licensing",
        question:
          "A Junior Operator is found responsible for a first speeding offence. What does reinstatement require?",
        choices: [
          "A new learner's permit exam, a Driver Attitudinal Retraining course and a new road test",
          "Payment of the fine only",
          "A defensive driving course, with no retesting",
          "Nothing beyond serving the suspension",
        ],
        correctIndex: 0,
        explanation:
          "All three: a fresh permit exam, the Driver Attitudinal Retraining course, and a new road test - after a 90-day suspension and a $500 reinstatement fee.",
        context:
          "The Junior Operator may also be required to complete the State Courts Against Road Rage programme, though only once in their driving life. Compare the adult position: it takes three speeding violations inside 12 months before an adult sees a 30-day suspension, with no retesting at all. The gap between the two is the sharpest in the whole Massachusetts penalty structure.",
        trap:
          "The 90-day suspension is only the visible part. Losing the licence entirely and having to re-earn it from the permit exam is the real cost.",
        commonlyMissed: true,
        excerptKey: "jol-speeding-reinstate",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Mandatory LICENSE Suspensions (Junior Operators)",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_03",
        topic: "speed",
        question:
          "Massachusetts law sets an unusually low speed near a vehicle used for hawking or peddling merchandise that is displaying flashing amber lights. What is it?",
        choices: ["25 mph", "20 mph", "10 mph", "15 mph within a tenth of a mile"],
        correctIndex: 3,
        explanation:
          "Fifteen miles per hour, and the restriction reaches a tenth of a mile in every direction from the vehicle.",
        context:
          "This one sits in the speed statute rather than the manual. Like the other statutory figures it is framed as prima facie evidence that your speed was greater than reasonable and proper, rather than as a flat limit. In practice it covers ice cream trucks and similar vendors, where children step into the road from between parked cars without looking.",
        trap:
          "Fifteen mph feels like a school zone figure and this is lower than the school zone. It is also enforced across a tenth of a mile, not just alongside the truck.",
        commonlyMissed: true,
        excerptKey: "peddler-speed",
        sourceLabel: "Massachusetts General Laws, Chapter 90, Section 17",
        sourceUrl: C90_17,
      },
      {
        id: "ma_s5_04",
        topic: "impairment",
        question:
          "A driver over 21 with one prior operating-under-the-influence offence refuses a chemical test. How long is the suspension?",
        choices: ["180 days", "One year", "Three years", "Five years"],
        correctIndex: 2,
        explanation:
          "Three years for a refusal with one prior offence, against 180 days with no prior. The step is more than sixfold.",
        context:
          "The ladder continues to five years with two priors and a lifetime revocation with three or more. What counts as a prior is narrow: a court conviction for operating under the influence, or a court-ordered assignment to an alcohol education programme. Earlier refusals do not count as priors, which is a distinction people get wrong in both directions.",
        commonlyMissed: true,
        trap:
          "Refusing is often described as protecting yourself. With one prior on record it is the single most expensive decision available at the roadside.",
        excerptKey: "refusal-not-prior",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, License Suspension Periods for Refusing a Chemical Test",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_05",
        topic: "rules",
        question:
          "Two motorcyclists riding side by side in one lane come up behind a slower car. What does Massachusetts law require of them?",
        choices: [
          "They may pass side by side if the lane is wide enough",
          "They may pass within the car's lane if they stay to one side",
          "They must ride single file when passing",
          "They must wait until an adjacent lane opens",
        ],
        correctIndex: 2,
        explanation:
          "Riders must go single file to pass. They may also never pass another motor vehicle within the same lane - the sole exception being another motorcycle.",
        context:
          "The same statute caps riding abreast at two machines. The manual's version adds that riders must not travel along pavement lines between lanes of traffic, and that weaving between lanes is illegal at any time. From a driver's side, the mirror-image rule is that a motorcycle is entitled to the full width of its lane and you may never share one.",
        trap:
          "Two abreast is legal for riding and not for passing. The permission narrows the moment the pass begins.",
        excerptKey: "motorcycle-single-file",
        sourceLabel: "Massachusetts General Laws, Chapter 89, Section 4A",
        sourceUrl: C89_4A,
      },
      {
        id: "ma_s5_06",
        topic: "safety",
        question:
          "At which handheld-device offence does the violation become a surchargeable incident on your insurance?",
        choices: ["The first", "The second", "It never becomes surchargeable", "The third"],
        correctIndex: 3,
        explanation:
          "A first or second offence is not surchargeable. A third or subsequent one is, on top of the $500 fine.",
        context:
          "The fine ladder runs $100, then $250, then $500. A second or subsequent offence also carries a mandatory distracted driving programme selected by the Registrar. The insurance consequence arriving only at the third offence is stated in the statute rather than the manual, though the manual's penalty list does note the surcharge at the third offence.",
        commonlyMissed: true,
        trap:
          "Assuming the insurance hit lands with the first ticket. It does not, which is exactly why the third one is so much more expensive than the fine suggests.",
        excerptKey: "hands-free-surcharge",
        sourceLabel: "Massachusetts General Laws, Chapter 90, Section 13B",
        sourceUrl: C90_13B,
      },
      {
        id: "ma_s5_07",
        topic: "signs",
        question:
          "What is the fine range for a second conviction of passing a stopped school bus with its red lights flashing in Massachusetts?",
        choices: [
          "$250 flat",
          "Not less than $500 and not more than $1,000",
          "Not less than $100 and not more than $300",
          "A flat $2,000",
        ],
        correctIndex: 1,
        explanation:
          "Five hundred to a thousand dollars for a second offence, and a thousand to two thousand for a third or subsequent one. The first offence is a minimum of $250.",
        context:
          "The manual gives the first-offence figure and mentions that a licence suspension can follow, but the escalation is only in the statute. A second or subsequent conviction is reported to the Registrar, who must revoke the licence immediately - no appeal or motion for a new trial stays that revocation. Reinstatement waits six months after a second conviction and a year after a third.",
        trap:
          "The $250 figure from the manual reads like the whole penalty. It is the floor for a first offence only.",
        excerptKey: "school-bus-fine-escalation",
        sourceLabel: "Massachusetts General Laws, Chapter 90, Section 14",
        sourceUrl: C90_14,
      },
      {
        id: "ma_s5_08",
        topic: "licensing",
        question:
          "A Junior Operator is caught driving at 1:30 a.m. without a parent in the car. What can they be charged with?",
        choices: [
          "A civil motor vehicle infraction with a fixed fine",
          "A parking-style municipal violation",
          "Operating a motor vehicle without being licensed, a criminal violation",
          "Nothing, because the night restriction is only secondary enforcement",
        ],
        correctIndex: 2,
        explanation:
          "Driving outside the permitted hours can be charged as operating without being licensed, which is a criminal violation rather than a civil infraction.",
        context:
          "Massachusetts also runs secondary enforcement at the edges of the window. Between 12:30 and 1:00 a.m. and between 4:00 and 5:00 a.m. the restriction is enforced only if the Junior Operator has already been lawfully stopped for something else - but driving during those times without a parent present remains illegal. At 1:30 a.m. you are in the primary enforcement window anyway.",
        commonlyMissed: true,
        trap:
          "Hearing about secondary enforcement makes drivers think the whole curfew is soft. The middle of the window is enforced directly, and the charge is criminal.",
        excerptKey: "jol-curfew-criminal",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, JOL License Restrictions",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_09",
        topic: "emergencies",
        question:
          "You scrape a parked car and drive off without leaving your details. What is the maximum penalty in Massachusetts?",
        choices: [
          "A $200 fine only",
          "Six months' imprisonment",
          "A $1,000 fine and one year in prison",
          "Up to $200 or up to two years' imprisonment, or both",
        ],
        correctIndex: 3,
        explanation:
          "For leaving the scene after a crash causing damage to another vehicle or property, the maximum is $200, two years' imprisonment, or both.",
        context:
          "The ladder rises with the harm. Leaving after a crash causing personal injury short of death carries up to $1,000 and two years. Leaving after a crash causing an injury that results in death carries up to $5,000 and up to two and a half years in jail or ten years in state prison. Beyond the criminal penalty, any conviction can bring probation costs and up to six years of insurance surcharges.",
        trap:
          "The modest fine hides the real exposure. The custodial maximum for a scraped bumper is two years.",
        excerptKey: "leaving-scene-penalties",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Hit and Run Crashes",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_10",
        topic: "parking",
        question:
          "You hold valid disabled person plates. May you park in the striped crosshatch area beside a reserved space?",
        choices: [
          "Yes - the plates cover both the space and the hatching",
          "No - the crosshatch is off limits even with plates or a placard",
          "Yes, if the reserved space itself is occupied",
          "Only for loading and unloading",
        ],
        correctIndex: 1,
        explanation:
          "The crosshatch is barred to everybody, plates or no plates. It exists so a ramp or lift can deploy beside the reserved space.",
        context:
          "The reserved space itself carries a $300 fine for a first offence if you park there without the right plates or placard, and wrongful use of somebody else's plate or placard carries a minimum of $500. The crosshatch prohibition is listed separately in the manual precisely because holders of legitimate placards assume it is included in their entitlement.",
        trap:
          "Having the placard feels like it covers the whole marked area. The hatching is access space, not parking space.",
        excerptKey: "parking-crosshatch",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_11",
        topic: "rightOfWay",
        question:
          "You are entering a multi-lane rotary and intend to take an exit three-quarters of the way around. Which lane should you enter from?",
        choices: [
          "The right lane, staying right throughout",
          "The left lane, travelling through the middle or inner lane and exiting on the right",
          "Either lane, as long as you signal",
          "The right lane, moving left once you are inside",
        ],
        correctIndex: 1,
        explanation:
          "For a three-quarter turn or a U-turn you enter from the left lane, travel through the middle or inner lane, and come out on the right.",
        context:
          "Massachusetts gives the opposite pattern for a quarter turn or going straight through: enter from the right lane, stay in it, and exit onto the right lane. If the rotary has only one lane, or you arrive on a single-lane road, you stay right throughout. Where signs are posted, they override the general pattern. Signal right as you approach your exit.",
        trap:
          "Entering right for a long way round leaves you needing to cross the exiting traffic at every intermediate exit.",
        excerptKey: "rotary-lane-choice",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Choosing a Lane",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_12",
        topic: "signals",
        question:
          "A steady red arrow points left while the circular signal beside it is green. What may you do?",
        choices: [
          "Go straight or right, but not left",
          "Turn left after stopping, as though it were a red circle",
          "Turn left, because the green circle governs the whole intersection",
          "Wait for the red arrow to clear before doing anything",
        ],
        correctIndex: 0,
        explanation:
          "A red arrow works like a steady red circle, but only for traffic heading in the arrow's direction. The green circle governs the other movements.",
        context:
          "Massachusetts applies the same turn-on-red rules to arrows as to circles, which is worth flagging because other states do not - the manual warns explicitly that this differs once you drive out of state. A green arrow is a protected turn, and a flashing yellow arrow permits the turn only when you can find a gap yourself.",
        trap:
          "The green circle looks like it authorises everything at the intersection. The arrow carves your direction out of it.",
        excerptKey: "red-arrow",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Steady Red Arrow",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_13",
        topic: "speed",
        question:
          "The Massachusetts speed statute attaches a distance to its outside-district thresholds. What is it?",
        choices: [
          "A quarter of a mile",
          "One-eighth of a mile",
          "One mile",
          "Five hundred feet",
        ],
        correctIndex: 0,
        explanation:
          "A quarter of a mile for the outside-district figures of 50 and 40 mph. Inside a thickly settled or business district the statute uses one-eighth of a mile.",
        context:
          "The statute frames all of these as prima facie evidence that your speed was greater than reasonable and proper, rather than as absolute limits - and it specifies a divided highway for the 50 mph figure, where the manual just says a highway. Where a limit has actually been posted, exceeding it is itself prima facie evidence, and you must still slow for special hazards, weather or road conditions.",
        commonlyMissed: true,
        trap:
          "The manual states these as flat numbers, so the distance qualifiers come as a surprise. Both sources are official, and they are written to different purposes.",
        excerptKey: "prima-facie-statute",
        sourceLabel: "Massachusetts General Laws, Chapter 90, Section 17",
        sourceUrl: C90_17,
      },
      {
        id: "ma_s5_14",
        topic: "sharing",
        question:
          "What time-of-day restriction applies to a motorized scooter in Massachusetts?",
        choices: [
          "None - they may be ridden at any hour with lights",
          "They may not be driven after sunset or before sunrise",
          "They may not be ridden between midnight and 5:00 a.m.",
          "They may be ridden at night only on roads posted below 30 mph",
        ],
        correctIndex: 1,
        explanation:
          "No riding after sunset or before sunrise. It is a flat daylight-only rule, not a lighting requirement.",
        context:
          "Massachusetts distinguishes four small-vehicle categories with different rules. A motorized scooter is capped at 20 mph, must stay to the right even when passing, may carry no passengers, and requires a helmet. A moped is capped at 25 mph. A limited use vehicle goes above 30 but no more than 40 mph and is barred from roads posted above 40. A low speed vehicle does 20 to 25 mph and is barred from roads posted above 30.",
        trap:
          "Fitting lights does not buy you the night. The scooter restriction is on the hours themselves.",
        excerptKey: "scooter-night",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Motorized Scooter Safety",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_15",
        topic: "rules",
        question:
          "A car ahead of you is stopped in the middle of a block, nowhere near an intersection. What does Massachusetts say about passing it?",
        choices: [
          "Pass, since it is not at an intersection",
          "Pass if you can see the road ahead is clear",
          "Do not pass - it may be stopped for something you cannot see",
          "Pass only if the driver waves you through",
        ],
        correctIndex: 2,
        explanation:
          "The rule covers vehicles stopped or turning both at intersections and away from them. Something you cannot see may be in front of it.",
        context:
          "That something is usually a pedestrian. The manual is emphatic elsewhere that you must never pass a vehicle stopped or slowing for a pedestrian, and that on a multi-lane road you never pass a vehicle stopped at a crosswalk without checking first. The blind pedestrian rule goes further still: never pass another stopped vehicle at all when someone with a white cane or guide dog is crossing.",
        trap:
          "A stopped car mid-block looks like an obstruction rather than a warning. It is more often a warning.",
        excerptKey: "passing-stopped-vehicles",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Passing Stopped Vehicles",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_16",
        topic: "safety",
        question:
          "You crash and injure someone because you were using a mobile electronic device. What follows in Massachusetts?",
        choices: [
          "A $500 fine and an insurance surcharge",
          "A civil infraction and mandatory retraining",
          "A three-month suspension",
          "Criminal charges and loss of your licence",
        ],
        correctIndex: 3,
        explanation:
          "It is a crime to injure a person or damage property through negligent driving, and the manual says you will face criminal charges and lose your licence.",
        context:
          "The offence has its own name in the RMV's tables - negligent operation and injury from mobile phone use - and its own suspension periods, from 60 days to a year for an adult with a $500 reinstatement fee. For a Junior Operator it is 180 days for a first offence and a year for any subsequent one, with a new permit exam and road test attached to the later ones.",
        trap:
          "The ordinary handheld fines are civil and modest. Cause an injury and the whole thing moves into criminal territory.",
        excerptKey: "negligent-phone",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Negligent Operation and Injury from Mobile Phone Use",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_17",
        topic: "licensing",
        question:
          "What makes a Massachusetts driver a habitual traffic offender, and what does it cost?",
        choices: [
          "Five moving violations in two years; a one-year revocation",
          "Three at-fault crashes in three years; a two-year revocation",
          "Ten violations of any kind in ten years; a six-month revocation",
          "Three major moving violations, or twelve major and minor combined, in five years; a four-year revocation",
        ],
        correctIndex: 3,
        explanation:
          "Three major moving violations, or any combination of twelve major or minor ones, inside five years. The revocation runs four years and the reinstatement fee is $500.",
        context:
          "It is the longest of the routine suspensions on the adult chart, and it sits above the 30-day suspension for three speeding violations in a year and the 60-day one for seven surchargeable events in three years. Because a suspension of two years or more requires you to pass a learner's permit exam and a road test again, a habitual traffic offender finding means starting over.",
        commonlyMissed: true,
        trap:
          "Twelve violations sounds like a lot until you notice that minor ones count. The five-year window is long enough to gather them without noticing.",
        excerptKey: "habitual-offender",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Mandatory License Suspensions (18 Years and Older)",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_18",
        topic: "impairment",
        question:
          "A 19-year-old is charged with operating under the influence and wins the case in court. What happens to the additional under-21 suspension?",
        choices: [
          "It still applies - the court outcome does not change it",
          "It is cancelled automatically on acquittal",
          "It is halved",
          "It is stayed pending an appeal",
        ],
        correctIndex: 0,
        explanation:
          "The additional under-21 suspension is administrative. The manual says outright that it does not matter what happens with the court case.",
        context:
          "Its purpose is to get young drivers into an approved alcohol education programme rather than to punish the underlying offence. For a first case, entry into a Department of Public Health approved programme can waive the extra 180 days for an 18-to-21-year-old, or cut the extra year down to 180 days for someone under 18. Winning the case does not remove the requirement to take the course.",
        commonlyMissed: true,
        trap:
          "Beating the charge feels like it should end the matter. The administrative and criminal tracks run independently in Massachusetts.",
        excerptKey: "under-21-court-irrelevant",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, License Suspension Periods for Failed Chemical Tests",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_19",
        topic: "parking",
        question:
          "Which of these does the Massachusetts manual list as a place you may not park?",
        choices: [
          "Any street with a posted speed limit above 30 mph",
          "On a roadway in a rural area or outside a thickly settled district",
          "Within 50 feet of a bus stop",
          "On any street between midnight and 5:00 a.m.",
        ],
        correctIndex: 1,
        explanation:
          "Parking on a roadway in a rural area or outside a thickly settled district is on the prohibited list, alongside state and interstate highways and the Massachusetts Turnpike.",
        context:
          "The reasoning is sight lines and speed - a parked car on an unlit rural road is a hazard that nothing warns approaching traffic about. Turnpike parking carries fines of $15 to $100. The list also bars double parking in a traffic lane beside a row of parked cars, and stopping to make non-emergency repairs to your vehicle.",
        trap:
          "An empty country road looks like the safest place to stop. It is one of the few places the manual names as prohibited outright.",
        excerptKey: "parking-rural",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_20",
        topic: "emergencies",
        question:
          "What is the maximum state prison term for leaving the scene of a crash that caused a personal injury resulting in death?",
        choices: ["Two years", "Ten years", "Five years", "Two and a half years"],
        correctIndex: 1,
        explanation:
          "Up to ten years in state prison, or up to two and a half years in jail, along with a fine of up to $5,000.",
        context:
          "The duty is simple and absolute: stop, identify yourself properly, give aid if you can, and call for emergency assistance if it is needed. Massachusetts recorded 13,829 hit and run crashes in 2022. The licence consequences follow separately - one to two years for leaving the scene where a person is injured, with a $500 reinstatement fee.",
        trap:
          "Two and a half years is the jail figure and ten is the state prison figure. They are alternatives, not a sequence.",
        excerptKey: "leaving-scene-duty",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Hit and Run Crashes",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_21",
        topic: "signs",
        question: "What does Massachusetts use fluorescent pink signs for?",
        choices: [
          "School zone warnings",
          "Electronic toll collection",
          "Incident management",
          "Evacuation routes",
        ],
        correctIndex: 2,
        explanation:
          "Fluorescent pink is the incident management colour - signs put out around a crash, a closure or another unplanned event.",
        context:
          "It is one of three colours Massachusetts adds to the standard set. Fluorescent yellow-green covers school zone, bicycle, pedestrian and curve warnings, and purple marks electronic toll collection. Evacuation routes are shown in blue alongside motorist services, and orange stays with planned construction and maintenance.",
        trap:
          "Pink and orange both signal that something unusual is happening. Orange means planned work; pink means an incident nobody planned for.",
        excerptKey: "sign-colours-2",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Traffic Signs",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_22",
        topic: "rightOfWay",
        question:
          "You are turning right at an intersection and a bicyclist on your right is continuing straight through. Who goes first?",
        choices: [
          "You do, because you signalled your turn first",
          "Whoever entered the intersection first",
          "The bicyclist - you must yield to a rider going straight through",
          "The bicyclist must stop, since bikes yield to motor vehicles",
        ],
        correctIndex: 2,
        explanation:
          "A turning driver yields to a bicyclist going straight through the intersection. Cutting in front of one is specifically called out.",
        context:
          "This is the crash the manual calls a right hook, and it lists the motor vehicle as at fault in every one of the common bicycle crash scenarios it illustrates. Related duties: after passing a bicycle you must not return to the right until you are safely clear of it, and you may not make an abrupt right turn across one unless you are at a safe distance and can turn at a reasonable speed.",
        trap:
          "Signalling early does not create priority over a rider already alongside you. It only tells them what is about to hit them.",
        excerptKey: "turning-yield-bicycle",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Intersections",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_23",
        topic: "rules",
        question:
          "Where does Massachusetts forbid a U-turn on visibility grounds?",
        choices: [
          "Anywhere you cannot see 200 feet",
          "Anywhere within a business district",
          "Anywhere with a posted limit above 35 mph",
          "At the crest of a hill, near a curve, or anywhere you cannot see 500 feet",
        ],
        correctIndex: 3,
        explanation:
          "Five hundred feet of visibility, and hill crests and curves are named specifically because the sight line collapses there without warning.",
        context:
          "The other U-turn rules are that you make it from the lane closest to the centre line, that your path must be clear and the manoeuvre safe, and that a NO U-TURN sign removes the option entirely. Where there is not enough room, the three-point turn is the fallback - and it comes with its own list of conditions, including good visibility and light traffic.",
        trap:
          "Five hundred feet is the same figure as the high-beam dimming distance, and drivers routinely halve it when judging a hill crest.",
        excerptKey: "u-turn-visibility",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, U-Turns",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_24",
        topic: "speed",
        question:
          "What speed limit does Massachusetts law place on a school bus actually carrying school children?",
        choices: [
          "40 mph, except on a limited access highway",
          "The posted limit, like any other vehicle",
          "50 mph on all roads",
          "35 mph everywhere",
        ],
        correctIndex: 0,
        explanation:
          "Forty miles per hour while carrying children, with limited access highways carved out.",
        context:
          "The rule is in the speed statute rather than the manual. It is the counterpart to the rules that protect the bus from other traffic - the duty to stop from either side of the road when its red lights flash, and the separate requirement that no vehicle follow within 100 feet of one. Together they treat a loaded school bus as a slow-moving protected object.",
        commonlyMissed: true,
        trap:
          "The exception for limited access highways is easy to lose. On an interstate the bus follows the posted limit like everyone else.",
        excerptKey: "school-bus-speed",
        sourceLabel: "Massachusetts General Laws, Chapter 90, Section 17",
        sourceUrl: C90_17,
      },
      {
        id: "ma_s5_25",
        topic: "sharing",
        question:
          "A trolley is approaching as you wait to turn across its tracks. What does Massachusetts say?",
        choices: [
          "Turn quickly, since the trolley can brake",
          "Turn if the trolley is more than a car length away",
          "Do not turn in front of an approaching trolley",
          "Turn only after sounding your horn",
        ],
        correctIndex: 2,
        explanation:
          "You do not turn in front of an approaching trolley. Its path is fixed to the rails and the driver cannot swerve to avoid you.",
        context:
          "The related rules are to look for oncoming trolleys before crossing any tracks, to keep a safe distance when a trolley shares the roadway, and never to drive within eight feet of a passenger step while a trolley is loading or unloading. Buses get their own courtesies: let a signalling bus pull away from a stop, and watch for pedestrians getting on and off.",
        trap:
          "Trolleys look slow and predictable. Being predictable is exactly the problem - they cannot move out of your way at all.",
        excerptKey: "trolley-cannot-swerve",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Buses and Trolleys",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_26",
        topic: "safety",
        question:
          "From how far away must your licence plate number be visible at night in Massachusetts?",
        choices: ["60 feet", "30 feet", "100 feet", "50 feet"],
        correctIndex: 0,
        explanation:
          "Sixty feet at night. Plates must be kept clean and unobstructed, and the registration sticker goes only in the upper right corner.",
        context:
          "It sits with the rest of the equipment requirements: two white headlights at the front, two red lights and three red brake lights at the back, a small white light above the rear plate, working directional signals, mirrors, a horn, wipers, a muffler, a foot brake and a parking brake, and a driver's window that raises and lowers. Every vehicle must pass an annual safety and emissions inspection.",
        trap:
          "A plate frame or a tow ball that clips a digit is enough to fail this, and it is an easy thing to be stopped for.",
        excerptKey: "plate-visibility",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, License Plates",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_27",
        topic: "licensing",
        question:
          "Your licence has been suspended for two years. What does reinstatement require beyond serving the time and paying the fee?",
        choices: [
          "A medical clearance from your physician",
          "A defensive driving course",
          "Nothing further",
          "Passing a learner's permit exam and a road test again",
        ],
        correctIndex: 3,
        explanation:
          "Any suspension of two years or more means re-taking both the permit exam and the road test, with identification documents produced again.",
        context:
          "Most reinstatement fees are $100, though serious offences run as high as $1,200. Reinstatement usually involves a hearing, conducted by phone with a Hearings Officer who may take up to ten business days to decide. The manual is candid that most suspensions are mandatory and the hearing is only about whether the law has been applied correctly - the officer cannot prevent a valid suspension.",
        trap:
          "The hearing sounds like a chance to argue the merits. Once you have been found guilty or responsible, the facts are no longer in play.",
        excerptKey: "long-suspension-retest",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, License Reinstatement",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_28",
        topic: "impairment",
        question:
          "A Junior Operator under 18 is convicted of leaving the scene of a crash. What additional suspension applies on top of everything else?",
        choices: [
          "60 days for a first offence",
          "180 days for a first offence, and a year for any subsequent one",
          "30 days for a first offence",
          "None - the ordinary adult penalties apply",
        ],
        correctIndex: 1,
        explanation:
          "One hundred and eighty days for a first offence and a year afterwards, imposed on top of any other penalty required by law.",
        context:
          "The provision covers a long list: operating under the influence, operating to endanger, leaving the scene, drinking from an open container, OUI with serious bodily injury, unauthorised use of a motor vehicle, reckless or negligent operation, lending your licence or permit, and motor vehicle homicide. It applies only to Junior Operators, and only where they have not already picked up an additional suspension for failing or refusing a breath test.",
        commonlyMissed: true,
        trap:
          "It is genuinely additional. The Junior Operator serves the adult penalty and then this one, and a parent or guardian is notified either way.",
        excerptKey: "jol-24p",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Mandatory LICENSE Suspensions (Junior Operators)",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_29",
        topic: "signals",
        question: "What is a bicycle signal, and what does a green one do?",
        choices: [
          "A signal for bike lanes that always runs with the main green",
          "A warning device activated by approaching bicyclists",
          "A signal showing bicycle symbols, letting riders cross while motor traffic is held",
          "A pedestrian signal that bicyclists may also obey",
        ],
        correctIndex: 2,
        explanation:
          "Bicycle signals display steady red, yellow and green bicycle symbols. A green lets riders cross a busy intersection while motor vehicles are stopped, keeping them clear of turning traffic.",
        context:
          "They are one of several bicycle-specific devices Massachusetts uses at intersections. Bicycle boxes give riders a place to wait ahead of the crosswalk, with drivers required to stop behind them even when empty. Green pavement marks conflict areas, and separated bicycle lanes physically divide riders from traffic - with drivers obliged to check for oncoming riders before turning across one.",
        trap:
          "Assuming the bicycle signal runs in step with your own. The whole point is that the phases are separated.",
        excerptKey: "bicycle-signals",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Bicycle Signals",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_30",
        topic: "emergencies",
        question:
          "Your car goes into deep water. What does Massachusetts tell you to do first?",
        choices: [
          "Open a door to equalise the pressure",
          "Wait for the car to fill so the doors will open",
          "Call 911 before attempting to get out",
          "Unfasten your belt and get out through a window",
        ],
        correctIndex: 3,
        explanation:
          "Belt off, then out through a window - and open power windows quickly before the water disables them. Do not open a door.",
        context:
          "Opening a door lets water rush in and can flip the vehicle. If the car sinks before you get out, climb into the rear seat where an air pocket may form, wait for the vehicle to settle, take a deep breath and go out through a window. The manual pairs this with the advice to carry a glass breaker tool in the cabin where you can reach it.",
        trap:
          "The advice to wait for the doors to equalise is old and wrong. Massachusetts tells you to be out through a window before that point.",
        excerptKey: "vehicle-in-water",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Vehicle Drives into Water",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_31",
        topic: "parking",
        question:
          "Where does Massachusetts require you to leave a 12-foot clear roadway?",
        choices: [
          "Whenever you park or stop your vehicle",
          "Only on state highways",
          "Only when parking at night",
          "Only outside a thickly settled district",
        ],
        correctIndex: 0,
        explanation:
          "It applies whenever you park or stop, alongside the general duty not to create a traffic hazard.",
        context:
          "Twelve feet is roughly a full travel lane, so on a narrow street it can rule out parking altogether. The companion figure is 12 inches - the maximum gap between your vehicle and the curb in a business or residential district, with angled parking the only exception. Parking bays marked with white lines must be used one car to a bay.",
        trap:
          "The two twelves get swapped. Twelve feet is what you leave open for traffic; 12 inches is how close you sit to the curb.",
        excerptKey: "parking-12-feet",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_32",
        topic: "rules",
        question:
          "How many motorcycles may ride side by side in a lane in Massachusetts, and what may they not do?",
        choices: [
          "Three abreast, but not along the lane lines",
          "No more than two abreast, and never along the pavement lines between lanes",
          "Two abreast, but only on limited access highways",
          "Any number, provided the lane is wide enough",
        ],
        correctIndex: 1,
        explanation:
          "Two abreast at most, and riders may not travel along the pavement lines between lanes of traffic.",
        context:
          "The manual adds that a motorcycle unable to maintain minimum posted speeds should not be on highways or expressways at all. The statute goes further: riders must go single file when passing, and may not pass another motor vehicle within the same lane, though they may pass another motorcycle that way. Weaving between lanes is illegal at any time.",
        trap:
          "Riding two abreast is legal, which makes drivers assume filtering between lanes is too. It is not.",
        excerptKey: "motorcycle-two-abreast",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Special rules for motorcycles",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_33",
        topic: "speed",
        question:
          "Massachusetts adds a fixed surcharge to every speeding fine that funds a specific programme. How much, and for what?",
        choices: [
          "$5, for public safety",
          "$25, for driver education",
          "$50, for the Head Injury Treatment Services Trust Fund",
          "$100, for road maintenance",
        ],
        correctIndex: 2,
        explanation:
          "Fifty dollars on every speeding fine, and the whole of it goes to the Head Injury Treatment Services Trust Fund.",
        context:
          "There is a second, separate surcharge of $5 for public safety that attaches to every civil motor vehicle infraction arising from Chapter 89 or 90, not just to speeding. The base speeding penalty is $100, with $10 for each mph above the first ten over. Note that the manual's own worked example - $185 for 73 mph in a 55 zone - does not include the $50 surcharge it describes two paragraphs earlier.",
        trap:
          "The $5 and the $50 are different surcharges with different scopes. The $50 is speeding-only; the $5 covers civil infractions generally.",
        excerptKey: "head-injury-surcharge",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Speeding Violations",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_34",
        topic: "rightOfWay",
        question:
          "A pedestrian with a white cane is crossing the street ahead. What does the Massachusetts White Cane Law require?",
        choices: [
          "Come to a complete stop and stay stopped until they have safely crossed",
          "Slow down and pass behind them",
          "Sound your horn so they know where you are",
          "Wave them across so they know it is safe",
        ],
        correctIndex: 0,
        explanation:
          "A complete stop, held until the person has crossed safely. You do not honk, you do not wave them on, and you never pass another stopped vehicle.",
        context:
          "A blind pedestrian may be using a white cane or a guide dog. The prohibition on honking and waving matters because both signals are useless to someone who cannot see them, and a wave can send a person into the path of a car in the next lane. The rule against passing a stopped vehicle applies at any crosswalk, but here it is absolute.",
        trap:
          "Waving somebody across feels like the helpful thing to do. To a blind pedestrian it communicates nothing, and it can be lethal.",
        excerptKey: "white-cane-law",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "ma_s5_35",
        topic: "signs",
        question:
          "Which of these Massachusetts signs is a regulatory sign rather than a warning sign?",
        choices: [
          "One telling you that you may not turn right after stopping at a red light",
          "One warning that a stop sign is ahead",
          "One warning of a playground",
          "One warning that the road is slippery when wet",
        ],
        correctIndex: 0,
        explanation:
          "A NO TURN ON RED sign states a law you can be cited for breaking. Stop ahead, playground and slippery-when-wet all warn of a condition instead.",
        context:
          "Regulatory signs carry a red or white background and tell you what the law requires or forbids - no right turn, no U-turn, no trucks, no overtaking, traffic in the direction of the arrow only. Warning signs are yellow or fluorescent yellow-green and tell you the road layout or conditions are about to change. A red circle with a diagonal slash always means a prohibition.",
        trap:
          "Both categories change what you do, but only one of them creates an offence. Ignoring a warning sign is bad driving; ignoring a regulatory sign is a violation.",
        excerptKey: "regulatory-signs",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Regulatory Signs",
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
      "Thirty questions across every topic the RMV lists for its 25-question exam, at real exam difficulty and with no hints. Rules of the road, signs, alcohol, suspensions and the Junior Operator Law, mixed the way the real test mixes them.",
    questions: [
      {
        id: "ma_s6_01",
        topic: "licensing",
        question:
          "You pass your road test having already prepaid the fees. What is your validated learner's permit good for?",
        choices: [
          "A temporary licence valid up to 60 days",
          "A temporary licence valid up to 30 days",
          "Nothing - you must visit a Service Center before driving",
          "A full licence, with the card following by post",
        ],
        correctIndex: 0,
        explanation:
          "The examiner validates the permit and it becomes a temporary licence for up to 60 days, unless the permit itself expires sooner.",
        context:
          "The permanent card is manufactured at a secure location and mailed to you. If it has not arrived within 30 days you should call the RMV Contact Center. If you had not prepaid, you have 60 days to pay online or take the annotated permit to a Service Center - and paying online without visiting means you will not receive a temporary licence at all.",
        trap:
          "Paying online after the test is convenient and leaves you without a temporary licence. That distinction is easy to miss.",
        excerptKey: "temp-licence",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, Receiving Your New License",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_02",
        topic: "signs",
        question:
          "A STOP sign at an intersection has a 4-WAY plate added below it. What does that tell you?",
        choices: [
          "You have priority over the cross street",
          "Only the through road must stop",
          "All traffic coming to the intersection must stop",
          "You may proceed without stopping if the way is clear",
        ],
        correctIndex: 2,
        explanation:
          "A 4-WAY or ALL WAY plate means every approach stops. The first vehicle to reach the intersection has the right of way.",
        context:
          "Without that plate, the cross street may not be controlled at all, which is why the plate exists. At a four-way stop you yield to a vehicle that has already come to a full stop, and to a vehicle directly on your right that stopped at the same moment as you. Where there is genuine doubt, give way to the driver on your right.",
        trap:
          "Assuming an ordinary stop sign means the cross traffic is stopping too. Without the plate, it very often is not.",
        commonlyMissed: true,
        excerptKey: "all-way-stop-sign",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Stop and Yield Signs",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_03",
        topic: "signals",
        question: "What does a flashing yellow circle require?",
        choices: [
          "A complete stop before proceeding",
          "Proceed with caution and stay alert",
          "Stop only if traffic is approaching",
          "Yield to all traffic on the cross street",
        ],
        correctIndex: 1,
        explanation:
          "It is a warning, not a control. You proceed with caution, stay alert, and look both ways as you cross.",
        context:
          "Flashing yellow and flashing red get paired at the same intersection - one road gets the caution, the cross road gets the stop. A flashing red means the same as a STOP sign and requires a complete halt. If the signal heads are dark rather than flashing, treat every approach as a stop sign.",
        trap:
          "Flashing yellow being the easy one makes drivers stop looking. The cross street is stopping, and the drivers there will be looking for a gap.",
        excerptKey: "flashing-yellow",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Flashing Yellow Circle",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_04",
        topic: "speed",
        question:
          "According to the Massachusetts manual, what share of pedestrians struck at 40 mph are seriously injured or killed?",
        choices: ["73 percent", "40 percent", "55 percent", "90 percent"],
        correctIndex: 0,
        explanation:
          "Seventy-three percent at 40 mph, against 40 percent at 30 mph and 13 percent at 20 mph.",
        context:
          "The manual describes vehicle speed as the leading threat to pedestrian safety and notes that about a third of all motor vehicle fatalities involve speeding. The same section explains why: at higher speeds drivers see less, need longer to stop, are more likely to lose control, and get less protection from the vehicle's own safety equipment.",
        trap:
          "The curve is not a straight line. Each ten miles an hour costs far more than the last.",
        excerptKey: "pedestrian-speed-risk",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Dangers of Speeding",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_05",
        topic: "rules",
        question:
          "A double solid white line separates you from the lane beside you. What does it permit?",
        choices: [
          "Crossing to pass, if the way is clear",
          "Crossing to turn left",
          "Crossing only in an emergency",
          "Nothing - crossing a double solid white line is not allowed",
        ],
        correctIndex: 3,
        explanation:
          "Crossing a double solid white line is not allowed. Both lanes run the same way, so there is no turning exception the way there is with yellow.",
        context:
          "The white line family runs from most permissive to least: broken white may be crossed to change lanes once you have signalled and checked, solid white should not be crossed unless you need to avoid danger, and double solid white may not be crossed at all. Yellow lines answer a different question - they mean the traffic beyond is coming toward you.",
        trap:
          "The left-turn exception belongs to double yellow, not double white. There is nothing to turn across here.",
        excerptKey: "double-white",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Double Solid White Line",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_06",
        topic: "rightOfWay",
        question:
          "How does the Massachusetts manual characterise the right of way?",
        choices: [
          "A legal entitlement you may insist on",
          "A priority determined by vehicle size",
          "Something you give rather than take",
          "A rule that applies only where signs are absent",
        ],
        correctIndex: 2,
        explanation:
          "The manual says the right of way is something you give, not take, and that you should always give it when another driver fails to follow the rules.",
        context:
          "The rules exist to handle traffic situations that signs and signals do not cover, and the manual describes them as based on safety and courtesy rather than on rights. It applies the same framing to defensive driving generally: giving the right of way is described as a large part of preventing unsafe situations, and one in five people of driving age is deaf or hard of hearing.",
        trap:
          "Being legally in the right settles who pays for the damage. It does not stop the collision happening.",
        excerptKey: "right-of-way-given",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Right-of-Way Rules",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_07",
        topic: "safety",
        question:
          "How long does the Massachusetts manual say it takes to react to a situation and get your foot on the brake?",
        choices: [
          "About a quarter of a second",
          "About three-quarters of a second",
          "About one and a half seconds",
          "About two seconds",
        ],
        correctIndex: 1,
        explanation:
          "About three-quarters of a second, which at 50 mph means the car has covered another 55 feet before the brakes even engage.",
        context:
          "The manual works the arithmetic out: at 50 mph, 55 feet of reaction distance plus roughly 160 feet of braking gives about 215 feet in total on dry, level, clear pavement. At 60 mph the total reaches about 292 feet, nearly a whole football field, and at 30 mph it is about 104 feet. Wet, slippery or uneven surfaces stretch all of it.",
        trap:
          "Reaction distance and braking distance are separate. Reacting fast does not shorten the braking half at all.",
        excerptKey: "reaction-time",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Braking and Stopping",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_08",
        topic: "impairment",
        question:
          "Which of these contains roughly the same amount of alcohol as a 12-ounce beer?",
        choices: [
          "A ten-ounce glass of wine",
          "A three-ounce serving of 80-proof spirit",
          "Two five-ounce glasses of wine",
          "A five-ounce glass of wine",
        ],
        correctIndex: 3,
        explanation:
          "A five-ounce glass of wine, a 12-ounce beer and a one-and-a-half-ounce serving of 80-proof spirit all carry about half an ounce of alcohol.",
        context:
          "The manual's point is that the kind of drink is irrelevant - what matters is the amount of alcohol over a period of time, and mixing spirit into a soft drink changes nothing. Any one of the three can raise an average person's blood alcohol content by about 0.02, so more than one drink in an hour means the figure climbs.",
        trap:
          "Spirit mixed into a tall soft drink looks weaker than a beer. It is the same amount of alcohol in a larger glass.",
        excerptKey: "standard-drink",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Blood Alcohol Content",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_09",
        topic: "sharing",
        question:
          "When does Massachusetts say you should pass a truck or bus on the right?",
        choices: [
          "Only when it is absolutely necessary",
          "Whenever the right lane is clear",
          "Whenever the vehicle is travelling below the speed limit",
          "Only on a divided highway",
        ],
        correctIndex: 0,
        explanation:
          "Only when it is absolutely necessary. Large vehicles swing left before turning right, and the right side is where their blind spot is worst.",
        context:
          "If you are alongside a truck or bus you are probably in a blind spot, so the manual tells you to watch for a possible right-hand turn and stay safely behind until you know what the driver is doing. The same section covers the rest: do not follow closely enough to lose sight of the mirrors, do not cut in and slow down, and remember a loaded tractor-trailer may need twice the stopping distance of a car.",
        commonlyMissed: true,
        trap:
          "A truck drifting left looks like it is making room for you. It is more often setting up a wide right turn across the space you are entering.",
        excerptKey: "truck-right-turn",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Passing on the Right",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_10",
        topic: "parking",
        question: "Which of these appears on the Massachusetts list of places you may not park?",
        choices: [
          "Any space without a painted line",
          "In a bicycle lane",
          "Within 100 feet of a school",
          "On any street with a bus route",
        ],
        correctIndex: 1,
        explanation:
          "Bicycle lanes are on the prohibited list, along with bus stops, taxi stands and posted loading zones.",
        context:
          "The list also covers no parking, no standing and no stopping zones, street-cleaning zones during their posted times, crosswalks, driveways, handicap-access ramps, sidewalks, curbs, medians and traffic islands. Blocking a bicycle lane is particularly hazardous because it forces riders out into the traffic stream at the point where drivers least expect them.",
        trap:
          "A bike lane looks like an unused strip of road. Parking there is specifically listed as prohibited.",
        excerptKey: "parking-bike-lane",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_11",
        topic: "emergencies",
        question:
          "Your brakes fail and the vehicle does not have antilock brakes. What does Massachusetts tell you to try first?",
        choices: [
          "Pump the brake pedal rapidly several times",
          "Apply the parking brake at once, hard",
          "Switch off the ignition",
          "Steer for the shoulder and coast to a stop",
        ],
        correctIndex: 0,
        explanation:
          "Without antilock brakes, pumping the pedal rapidly can rebuild brake fluid pressure. With antilock brakes you must not pump them.",
        context:
          "If pumping fails, the sequence is to downshift toward the lowest gear, apply the parking brake gently while holding the release in case the vehicle skids, and use the horn and lights to warn everyone around you. The dashboard indicator or the owner's manual tells you which type of brakes you have, and that is worth knowing before you need it.",
        trap:
          "Pumping is the classic advice and it is exactly wrong on an antilock system, which is what most modern cars have.",
        excerptKey: "brake-failure",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Brake Failure",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_12",
        topic: "licensing",
        question:
          "You move to Massachusetts holding a valid licence from another state. How long may you keep driving on it?",
        choices: [
          "Thirty days from the date you become a resident",
          "There is no grace period - you must obtain a Massachusetts licence",
          "Sixty days, or until the out-of-state licence expires",
          "Six months from the date of your move",
        ],
        correctIndex: 1,
        explanation:
          "The manual is explicit: once you become a resident you must obtain a Massachusetts licence to retain your driving privileges, and there is no grace period.",
        context:
          "A new resident with an out-of-state licence may be eligible to convert without testing. Conversions from the 14 US territories, Canada or Mexico need an original certified driving record no more than 30 days old, because those jurisdictions are not visible to the RMV through the Problem Driver Pointer System. You may hold only one licence or ID card at a time, and the State-to-State programme cancels the old one.",
        trap:
          "Almost every neighbouring state gives new residents a window of some kind. Massachusetts gives none.",
        excerptKey: "no-grace-period",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, Who Needs a Massachusetts License?",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_13",
        topic: "signs",
        question: "What does a Shared Lane Marking, or sharrow, painted on the road mean?",
        choices: [
          "The lane is reserved for bicycles",
          "Bicycles must ride to the right of the marking",
          "Motor vehicles must leave the lane when bicycles are present",
          "The lane is shared, and you must watch for bicyclists and leave room when passing",
        ],
        correctIndex: 3,
        explanation:
          "It marks a lane shared between bicycles and motor traffic, and puts you on notice to look for riders and give them room when you pass.",
        context:
          "The marking helps riders position themselves clear of the door zone of parked cars and out of the squeeze against a narrow lane. It is deliberately different from the bicycle symbols used to mark an actual bicycle lane, which is five feet wide and bounded by solid white lines. Whatever the markings say, the four-foot passing distance applies.",
        trap:
          "A sharrow looks like a bike lane symbol without the lane. It is a warning to drivers, not a boundary for riders.",
        excerptKey: "sharrows",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Shared Lane Markings",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_14",
        topic: "signals",
        question:
          "A police officer is directing traffic at an intersection and waves you through a red light. What do you do?",
        choices: [
          "Wait for the green, since the signal has legal force",
          "Stop, then proceed on the officer's signal",
          "Follow the officer's direction",
          "Sound your horn and wait for confirmation",
        ],
        correctIndex: 2,
        explanation:
          "You must always obey a traffic officer's directions, even where they overrule signs, signals or pavement markings.",
        context:
          "Officers direct traffic where the signal timing cannot cope with what is actually happening - a crash, a closure, an event emptying out. The same principle covers civil flaggers in work zones. It is the one rule that sits above everything else painted or posted on the road.",
        trap:
          "Hesitating at the red while an officer waves you on creates exactly the jam they are there to clear.",
        excerptKey: "officer-overrides",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Roadway Construction/Maintenance",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_15",
        topic: "speed",
        question:
          "On dry, level pavement, roughly what is the total stopping distance from 30 mph according to the Massachusetts manual?",
        choices: ["About 104 feet", "About 60 feet", "About 150 feet", "About 215 feet"],
        correctIndex: 0,
        explanation:
          "About 104 feet at 30 mph. At 60 mph it stretches to roughly 292 feet - almost a whole football field.",
        context:
          "Total stopping distance is reaction distance plus braking distance. At 50 mph the manual works it as 55 feet of reaction plus about 160 feet of braking, giving roughly 215 feet. Doubling the speed does far more than double the distance, and every one of these figures assumes dry, level, clear pavement and brakes and tires in good order.",
        trap:
          "The 215-foot figure belongs to 50 mph and gets attached to 30 by people who half-remember the table.",
        excerptKey: "stopping-distance-60",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Braking and Stopping",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_16",
        topic: "rules",
        question: "How far before a highway exit ramp must you signal?",
        choices: ["At least 100 feet", "At least 200 feet", "At least 300 feet", "At least 500 feet"],
        correctIndex: 3,
        explanation:
          "At least 500 feet before you reach the exit ramp. The same 500-foot figure applies to any turn made on a highway.",
        context:
          "On ordinary roads the signalling distance is 100 feet. Make sure you are in the right lane well in advance, slow to the posted exit ramp speed once you are on the ramp, and stay alert for traffic backing up at the top of it. If you miss the exit, do not stop and never back up on a highway - carry on to the next one.",
        commonlyMissed: true,
        trap:
          "The ordinary 100-foot figure gets applied to highways, where it gives the traffic behind almost no warning at speed.",
        excerptKey: "exit-signal-500",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Entering and Exiting the Highway",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_17",
        topic: "rightOfWay",
        question:
          "Two cars stop at a four-way stop at exactly the same moment, one directly to the right of the other. Who goes first?",
        choices: [
          "The car on the left, because it has the shorter path",
          "Whichever driver signals first",
          "The car on the right",
          "The car going straight rather than turning",
        ],
        correctIndex: 2,
        explanation:
          "A genuine tie is broken by position: you yield to a vehicle directly to your right that stopped at the same time as you.",
        context:
          "That tie-break only applies to simultaneous arrivals. The primary rule is arrival order - vehicles go in the order they stopped, and the first to stop is the next to go. The manual acknowledges that four-way stops cause confusion, and suggests eye contact as the practical way to read another driver's intentions.",
        trap:
          "The right-hand rule is the exception, not the default. Applying it to a car that arrived after you gives away a turn that was yours.",
        excerptKey: "four-way-order",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Four-Way Stop",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_18",
        topic: "safety",
        question: "What does Massachusetts allow in the way of window tinting?",
        choices: [
          "Side and rear windows up to 50 percent, and a windshield strip",
          "No tinting of any kind on a passenger vehicle",
          "Any tint, provided the vehicle passes its annual inspection",
          "Side and rear windows up to 35 percent, with no windshield tint at all",
        ],
        correctIndex: 3,
        explanation:
          "Side and rear windows may be darkened up to 35 percent. Tinting the windshield is illegal outright.",
        context:
          "The equipment rules around it are equally specific. A spot light may only be used to read signs or as an emergency light if the headlights have failed, and it may not shine more than two feet above the roadway at 30 feet. Emergency lights - flashing, rotating, oscillating or strobe - are not allowed at all without an RMV permit.",
        commonlyMissed: true,
        trap:
          "Passing inspection with tint already fitted does not make it legal. Windshield tint is prohibited whatever else the car does.",
        excerptKey: "window-tint",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Passenger Vehicle Safety",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_19",
        topic: "impairment",
        question:
          "What licence suspension follows a third conviction for operating under the influence in Massachusetts?",
        choices: ["Eight years", "Two years", "Five years", "Ten years"],
        correctIndex: 0,
        explanation:
          "Eight years for a third conviction. It is also a felony, with a minimum of 150 days in prison and fines from $1,000 to $15,000.",
        context:
          "The full ladder runs one year, two years, eight years, ten years and then a lifetime revocation on a fifth conviction. Reinstatement fees climb alongside it: $500 for the first, $700 for the second, and $1,200 for the third and fourth. Anyone with two or more offences who becomes eligible for a hardship licence or reinstatement must fit an Ignition Interlock Device at their own expense.",
        trap:
          "The jump from two years to eight is the one that surprises people. The third conviction is where the ladder stops being gradual.",
        excerptKey: "oui-escalation",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Criminal Offenses and Suspensions",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_20",
        topic: "sharing",
        question:
          "You come up behind a farm tractor displaying an orange triangular sign. What does Massachusetts tell you to do?",
        choices: [
          "Pass immediately, before the road narrows",
          "Sound your horn to ask the driver to pull over",
          "Maintain your speed and follow closely so you can pass at the first gap",
          "Reduce your speed and use caution, treating it like a bicyclist or pedestrian",
        ],
        correctIndex: 3,
        explanation:
          "Slow down and use caution. The manual says to treat slow-moving vehicles in much the same way as bicyclists and pedestrians, and to leave plenty of space if you plan to pass.",
        context:
          "The orange sign marks farm vehicles, construction rigs and anything else travelling well below the traffic flow, and its whole purpose is to give you enough warning to shed speed before you arrive. The passing rules still apply on top of that - a clear view of at least 400 feet before you cross a broken yellow line, and back in your lane before oncoming traffic is within 200 feet.",
        trap:
          "The closing speed is far higher than it looks. Slow-moving vehicles are the ones drivers arrive at faster than they expect.",
        excerptKey: "slow-moving-vehicle",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Slow-Moving Vehicles",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_21",
        topic: "emergencies",
        question:
          "You are first on the scene of a crash with no emergency services present and you have flares. Where do they go?",
        choices: [
          "Directly beside the damaged vehicles",
          "Fifty feet in front of the crash only",
          "Two hundred feet or more in front of and behind the crash",
          "Only behind the crash, to warn following traffic",
        ],
        correctIndex: 2,
        explanation:
          "Two hundred feet or more in both directions, so drivers arriving from either way have time to slow.",
        context:
          "The sequence for a witness is to park off the road with hazard lights on, check for injuries, call the police, set out warning devices, follow the first aid guidance, and if possible move the vehicles to the side and turn off their ignitions. Do not go near fallen electrical wires, and if wires have landed on a vehicle, tell the occupants to stay inside until help arrives.",
        trap:
          "Devices placed close to the wreck only warn drivers who are already too near to stop.",
        excerptKey: "witness-crash",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, If You Witness a Crash",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_22",
        topic: "parking",
        question:
          "A snow emergency has been declared in your city. What does the Massachusetts parking list say?",
        choices: [
          "You may not park during a weather or roadway emergency",
          "You may park as usual until plows arrive",
          "Only commercial vehicles are restricted",
          "Parking is permitted on the odd-numbered side of the street",
        ],
        correctIndex: 0,
        explanation:
          "Parking during a weather or roadway emergency is on the prohibited list, straightforwardly.",
        context:
          "It appears in the same list as sidewalks, curbs, medians, traffic islands, facing the wrong way against traffic, and double parking beside a row of parked cars. Because most parking fines are set by city or town ordinance, the amount varies from place to place - but the prohibition itself comes from state law rather than local rules.",
        commonlyMissed: true,
        trap:
          "Local snow emergency rules differ so much that drivers treat the whole thing as municipal. The prohibition is on the state list.",
        excerptKey: "parking-misc-prohibited",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_23",
        topic: "signs",
        question: "What does a brown highway sign point you toward?",
        choices: [
          "A recreational area, state park, point of interest or scenic site",
          "A hospital or emergency service",
          "Fuel, food and lodging",
          "An evacuation route",
        ],
        correctIndex: 0,
        explanation:
          "Brown is the recreational, historic and scenic colour - parks, points of interest and similar destinations.",
        context:
          "Guide signs split three ways by colour. Green signs give highway directions and take you through interchanges. Blue signs list motorist services such as fuel, food and lodging, and also mark evacuation routes. Brown covers recreation and scenery. Route markers are separate again: white rectangles for Massachusetts state routes, and blue, red and white shields for interstates.",
        trap:
          "Blue and brown both point you somewhere off the highway. Blue is what you need; brown is where you might want to go.",
        excerptKey: "sign-colours",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Guide Signs",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_24",
        topic: "signals",
        question:
          "You are approaching a red light and the pavement ahead of you is painted green. What does Massachusetts say?",
        choices: [
          "Stop on the green pavement so bicyclists can pass on your right",
          "The green pavement marks a right-turn-only lane",
          "Green pavement is a bus lane and may not be entered",
          "Do not stop on the green pavement",
        ],
        correctIndex: 3,
        explanation:
          "You should not stop on green pavement at a red light. It marks a place where cars and bicycles conflict, and stopping on it puts you in the riders' path.",
        context:
          "Green pavement appears wherever bicycles and motor vehicles have to cross paths, and you are told to look for riders before crossing it. Red pavement is a different colour with a different meaning - it marks travel lanes and station stops for buses, streetcars, trolleys, light rail and rapid transit.",
        commonlyMissed: true,
        trap:
          "Green pavement looks decorative, so drivers roll onto it and stop. The colour is there to keep vehicles off it.",
        excerptKey: "green-pavement",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Green Pavement",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_25",
        topic: "rules",
        question:
          "What is the general rule about using a highway breakdown lane for travel in Massachusetts?",
        choices: [
          "It may be used freely during rush hour",
          "It may not generally be used, though some highways allow it during specific posted hours",
          "It may be used by any vehicle carrying two or more people",
          "It may be used whenever the travel lanes are stationary",
        ],
        correctIndex: 1,
        explanation:
          "As a general rule the breakdown lane is not for travel or passing, but a few highways permit travel there during clearly posted hours.",
        context:
          "The manual describes that use as very restricted, with the hours posted clearly, and it never extends to passing. When exiting a highway where breakdown lanes are in use as travel lanes, check your right-hand blind spot carefully - there may be traffic moving where you expect a shoulder.",
        trap:
          "Seeing traffic in the breakdown lane is not proof the hours are in force. Following the car in front is not a defence.",
        excerptKey: "breakdown-lane",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Using Lanes",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_26",
        topic: "speed",
        question:
          "What is the lowest penalty for exceeding the speed limit in Massachusetts, before any per-mile charges?",
        choices: [
          "$50 plus a $5 public safety surcharge",
          "$100 plus a $5 public safety surcharge",
          "$25 plus court costs",
          "$150 flat",
        ],
        correctIndex: 1,
        explanation:
          "One hundred dollars is the floor, plus the $5 public safety surcharge that attaches to all speeding violations.",
        context:
          "Above ten miles per hour over, a further $10 is added for each mph beyond the first ten. Every speeding fine also carries a $50 surcharge for the Head Injury Treatment Services Trust Fund, and a fine inside a posted work zone is doubled. Separately, the $5 public safety surcharge is added to every civil motor vehicle infraction arising from Chapter 89 or 90, not just speeding.",
        commonlyMissed: true,
        trap:
          "There is no small-margin ticket in Massachusetts. One mile over carries the same $100 floor as nine.",
        excerptKey: "speeding-fine-base",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Speeding Violations",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_27",
        topic: "rightOfWay",
        question:
          "You are turning into a parking lot and a pedestrian is walking along the sidewalk across the entrance. Who has the right of way?",
        choices: [
          "You do, once you have begun the turn",
          "Whoever reaches the entrance first",
          "The pedestrian, who has the right of way on a sidewalk crossing a driveway",
          "Neither - both should stop and negotiate",
        ],
        correctIndex: 2,
        explanation:
          "Pedestrians have the right of way when using a sidewalk or crossing a driveway or alley. You yield when turning into a driveway or parking lot.",
        context:
          "The manual states that duty twice, once in the pedestrian right-of-way rules and once in the list of duties for drivers, which is a fair signal of how often it is broken. The wider rule is that you must always yield to a pedestrian who is in a roadway, and that you slow down and stop when necessary for anyone walking in the street.",
        trap:
          "The sidewalk looks like it stops at the driveway. Legally it does not, and the person walking along it keeps priority.",
        excerptKey: "pedestrian-sidewalk-driveway",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_28",
        topic: "safety",
        question: "What is the maximum fine for tailgating in Massachusetts?",
        choices: ["$25", "$50", "$500", "$100"],
        correctIndex: 3,
        explanation:
          "Up to $100. The manual calls tailgating illegal and names it as the main cause of rear-end crashes.",
        context:
          "If somebody is tailgating you, the advice is to move to another lane or pull to the side and let them past rather than braking to make a point. The related following distances are three seconds behind an ordinary car, four behind a motorcycle and ten behind heavy equipment - and if you cannot see a truck's mirrors, you are already too close.",
        trap:
          "Tailgating reads as bad manners rather than an offence. It is a specific violation with a specific fine attached.",
        excerptKey: "tailgating-fine",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Safe Distances Around Your Car",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_29",
        topic: "impairment",
        question:
          "You are taking a prescription medicine that makes you drowsy. What is the position under Massachusetts law?",
        choices: [
          "Prescription medicines are exempt from the impaired driving laws",
          "It matters only if the label carries a warning",
          "You can be considered operating under the influence on prescription drugs",
          "It applies only to drivers under 21",
        ],
        correctIndex: 2,
        explanation:
          "The manual says outright that you can be considered OUI with prescription drugs, and that it is illegal to operate while impaired by any substance.",
        context:
          "The same section covers over-the-counter medicines for colds, hay fever and headaches, which commonly cause drowsiness, and painkillers containing codeine. Sedatives and tranquillisers do the same. Stimulants create a different problem - a short period of alertness followed by fatigue, nervousness, dizziness and poor concentration. Read the labels, and ask your doctor or pharmacist if you are unsure.",
        trap:
          "Having a valid prescription addresses the possession question and does nothing at all for the driving question.",
        excerptKey: "prescription-oui",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Other Drugs",
        sourceUrl: HB,
      },
      {
        id: "ma_s6_30",
        topic: "emergencies",
        question:
          "You are required to file a crash report. Where do the copies go?",
        choices: [
          "To the RMV only",
          "To the local police, your insurance company, and the RMV",
          "To your insurance company and the RMV",
          "To the local police only",
        ],
        correctIndex: 1,
        explanation:
          "Three copies: one to the police department for the city or town where the crash happened, one to your insurer, and one to the RMV.",
        context:
          "The report is due within five days of any crash causing injury, death, or $1,000 or more of property damage. Massachusetts is explicit that telling your insurance company alone is not enough, and that failing to file when required can bring a fine and a licence suspension. Keep a copy for yourself; a police-completed report can be requested online for $20.",
        trap:
          "Notifying the insurer feels like the responsible step and covers only one of the three destinations.",
        excerptKey: "crash-report-copies",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Reporting a Crash",
        sourceUrl: HB,
      },
    ],
  },
];
