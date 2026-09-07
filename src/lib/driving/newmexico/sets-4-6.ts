import type { DrivingTestSet } from "../types";

// Sets 4 to 6 of the New Mexico bank. Same sourcing rule as sets 1 to 3: the
// New Mexico Driver Manual (version 11.19.19, MVD, Taxation and Revenue
// Department) for anything the manual states, and Chapter 66 NMSA 1978 from
// NMOneSource.com for the rules the manual leaves out. Where the two conflict
// the disputed number is not asked for, and the conflict is written up in
// docs/driving/research/newmexico.md.
//
// Set 5 is built from what New Mexico learners actually report going wrong.
// The forum threads behind it are listed in the research note, and none of them
// supplied a question - a forum post is evidence about what CONFUSES people,
// never about what the law says, so every rule below was re-checked against the
// manual or the statute and the confusion became the trap rather than the
// answer.
const HB = "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf";
/** Printed page number to a PDF page anchor - the book's page 1 is PDF page 4. */
const hb = (page: number) => `${HB}#page=${page + 3}`;
const ST = "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do";
/** Chapter 66 is served as one PDF; the anchor is that PDF's own page. */
const st = (page: number) => `${ST}#page=${page}`;

export const newmexicoSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions spread over every chapter of the New Mexico Driver Manual, including the corners of it people skip - emergencies, wildlife, health and the motorcycle section.",
    questions: [
      {
        id: "nm_s4_01",
        topic: "signals",
        question:
          "A reserved lane in New Mexico has a white diamond painted on the road surface. What does that tell you?",
        choices: [
          "The lane is closed",
          "The lane is a passing lane",
          "The lane ends ahead",
          "The lane is reserved for a special use, such as buses, bicycles or high-occupancy vehicles",
        ],
        correctIndex: 3,
        explanation:
          "The white diamond marks a reserved lane. Signs beside it say what the reservation is: transit or bus, bicycle, or HOV for high occupancy vehicles.",
        context:
          "HOV signs carry a number. HOV 3 means there must be at least three people in the vehicle, and the sign also states the days and hours the restriction applies.",
        trap: "A reserved lane is not a general-purpose lane outside the posted hours unless the sign says so. The sign, not the diamond, carries the times.",
        excerptKey: "reserved-lanes",
        sourceLabel: "New Mexico Driver Manual - Other Lane Controls, Reserved Lanes",
        sourceUrl: hb(9),
      },
      {
        id: "nm_s4_02",
        topic: "safety",
        question:
          "Your engine dies while you are driving. What does the manual warn you about the steering and brakes?",
        choices: [
          "Both will stop working completely",
          "Steering may be hard to turn and the brakes may need a very hard push, but both still work",
          "The steering locks immediately",
          "The brakes work normally and the steering is unaffected",
        ],
        correctIndex: 1,
        explanation:
          "Both still work, they just get heavy. The manual tells you to keep a strong grip because steering will be difficult to turn, and to expect to push very hard on the brake pedal.",
        context:
          "Power steering and power brakes are assisted by the engine, not created by it. With the engine dead the assistance goes and the mechanism stays, which is why the instruction is about effort rather than about giving up on control.",
        trap: "Believing the steering has locked is what stops drivers from steering off the road. It has not.",
        excerptKey: "power-failure",
        sourceLabel: "New Mexico Driver Manual - Emergencies, Power Failure",
        sourceUrl: hb(31),
      },
      {
        id: "nm_s4_03",
        topic: "rules",
        question:
          "You are on a three-lane road going your way, and there is a lot of traffic entering and exiting. Which lane does the manual send you to?",
        choices: [
          "The center travel lane",
          "The right lane at all times",
          "The left lane, out of the merge traffic",
          "Whichever lane is moving fastest",
        ],
        correctIndex: 0,
        explanation:
          "The center travel lane. The general rule is stay right except to pass, but with three or more lanes and heavy entering and exiting traffic the manual moves you to the middle.",
        context:
          "The reasoning is that the right lane is where merges land and exits leave, and the left lane is for passing. In heavy interchange traffic the center is the lane with the fewest people changing into it.",
        trap: "This is an exception to keep-right, not a contradiction of it. On a two-lane road in your direction the answer is still the right lane.",
        excerptKey: "three-lane-center",
        sourceLabel: "New Mexico Driver Manual - General Rules",
        sourceUrl: hb(10),
      },
      {
        id: "nm_s4_04",
        topic: "impairment",
        question:
          "How long does the New Mexico Driver Manual say alcohol takes to reach your brain?",
        choices: [
          "Instantly",
          "About 5 to 10 minutes",
          "20 to 40 minutes",
          "About two hours",
        ],
        correctIndex: 2,
        explanation:
          "Twenty to forty minutes. Alcohol goes from the stomach into the blood and to all parts of the body, and it reaches the brain in that window.",
        context:
          "The delay is the danger. The manual compares it to sunburn: alcohol affects the part of the brain that governs judgment, so by the time you feel it, it is already too late to have made a better decision.",
        trap: "A delay of half an hour is not a safe window to drive in. The alcohol is already in the blood and the effect is coming.",
        excerptKey: "alcohol-brain",
        sourceLabel: "New Mexico Driver Manual - Why is Drinking and Driving So Dangerous?",
        sourceUrl: hb(29),
      },
      {
        id: "nm_s4_05",
        topic: "parking",
        question:
          "How far from a railroad crossing does the New Mexico Driver Manual say you may not park?",
        choices: [
          "Within 15 feet",
          "Within 25 feet",
          "Within 30 feet",
          "Within 50 feet",
        ],
        correctIndex: 3,
        explanation:
          "Fifty feet. The manual's no-parking list and Section 66-7-351 agree, with the statute measuring from the nearest rail of the crossing.",
        context:
          "Fifty feet is the largest distance on the list apart from the 75 feet that applies opposite a fire station driveway. Fifteen feet is the hydrant, thirty is the approach to a signal or stop sign, and twenty is the fire station driveway on your own side.",
        trap: "Thirty feet is the signal and stop-sign figure. The railroad number is larger because a train needs the sightline.",
        excerptKey: "no-park-railroad",
        sourceLabel: "New Mexico Driver Manual - Parking, No-Parking Zones",
        sourceUrl: hb(13),
      },
      {
        id: "nm_s4_06",
        topic: "sharing",
        question:
          "The manual gives a rule of thumb for whether a truck driver can see you. What is it?",
        choices: [
          "If you can see the trailer's rear wheels, you are visible",
          "If you cannot see the driver in the side mirror, the driver cannot see you",
          "If you are within three car lengths, you are visible",
          "If your headlights are on, you are visible",
        ],
        correctIndex: 1,
        explanation:
          "If you cannot see the driver in the truck's side mirror, the driver cannot see you. It is a test you can apply from your own seat at speed.",
        context:
          "Truck blind spots are large enough that the manual gives them a name, the NO ZONE, and warns that a trucker swerving to avoid a hazard will move into one without knowing you are there.",
        trap: "Sitting higher does not mean seeing more. The manual concedes truckers see better in front and have bigger mirrors, and says there are still large areas they cannot see at all.",
        excerptKey: "truck-no-zone",
        sourceLabel: "New Mexico Driver Manual - Trucker's Blind Spots",
        sourceUrl: hb(27),
      },
      {
        id: "nm_s4_07",
        topic: "signs",
        question:
          "What tells you the type of roadway you are on - interstate, US, state, city or county?",
        choices: [
          "The shape and color of the route number sign",
          "The color of the edge lines",
          "The number of digits in the road number",
          "The height of the sign posts",
        ],
        correctIndex: 0,
        explanation:
          "Route number signs encode the road type in their shape and color. The manual treats that as one of the three guide-sign families, alongside destination signs and service signs.",
        context:
          "The manual's advice on using them is practical: plan the route on a map before the trip, then follow the route signs during it, so you are reading confirmations rather than making decisions at speed.",
        trap: "Edge lines mark the edge of the roadway and say nothing about what kind of road it is.",
        excerptKey: "route-signs",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Route Number Signs",
        sourceUrl: hb(8),
      },
      {
        id: "nm_s4_08",
        topic: "licensing",
        question:
          "Which of these does the New Mexico Driver Manual list as a way to lose your driving privileges?",
        choices: [
          "Failing a vision test at renewal",
          "Receiving two parking tickets in a year",
          "Letting someone else use your driver license",
          "Driving a vehicle registered in another state",
        ],
        correctIndex: 2,
        explanation:
          "Lending your license to someone else is on the manual's list of things that cost you your driving privileges, alongside a DWI conviction, refusing a chemical test and leaving the scene of an accident.",
        context:
          "The rest of the list runs to giving false information on an application, failing to settle a financial judgment from a crash, altering the license or using someone else's to buy alcohol, failing to appear for a re-examination, using a vehicle to commit a felony, and having too many points.",
        trap: "Parking tickets do not carry points in New Mexico. Points attach to moving violations.",
        excerptKey: "keep-lend-license",
        sourceLabel: "New Mexico Driver Manual - Keeping the Driver License",
        sourceUrl: hb(3),
      },
      {
        id: "nm_s4_09",
        topic: "rightOfWay",
        question:
          "You are pulling out of a driveway onto a main road. Who has the right of way?",
        choices: [
          "You do, once your front wheels reach the roadway",
          "Whoever signals first",
          "You do, if you are turning right",
          "The vehicles already on the main road",
        ],
        correctIndex: 3,
        explanation:
          "Drivers entering a road from a driveway, alley or roadside must yield to vehicles already on the main road. You wait for a gap.",
        context:
          "There are two yields stacked on top of each other here. Crossing the sidewalk you yield to pedestrians, and entering the roadway you yield to traffic already on it.",
        trap: "Turning right does not change the obligation. Direction of turn is not part of this rule.",
        excerptKey: "row-driveway",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "nm_s4_10",
        topic: "safety",
        question:
          "A collision looks likely and there is room ahead of you. What does the manual say about speeding up?",
        choices: [
          "Never accelerate to avoid a collision",
          "Sometimes it is the best or necessary option, and you slow down once the danger has passed",
          "Only a professional driver should attempt it",
          "Only if you have antilock brakes",
        ],
        correctIndex: 1,
        explanation:
          "Speeding up is one of the three options the manual gives you. It applies when another vehicle is about to hit you from the side or behind and there is room in front to get out of the way.",
        context:
          "The three options in the manual are stop, turn or speed up. It also notes that in most cases you can turn the vehicle quicker than you can stop it, which is why turning is worth considering rather than braking alone.",
        trap: "The manual adds the second half of the instruction that people forget: slow down once the danger has passed.",
        excerptKey: "speeding-up-to-avoid",
        sourceLabel: "New Mexico Driver Manual - Avoiding Collisions, Speeding Up",
        sourceUrl: hb(32),
      },
      {
        id: "nm_s4_11",
        topic: "speed",
        question:
          "You are approaching a sharp curve. When does the New Mexico Driver Manual want you to slow down?",
        choices: [
          "Before you enter the curve",
          "As you reach the apex",
          "Gently throughout the curve",
          "Only if the curve has a posted advisory speed",
        ],
        correctIndex: 0,
        explanation:
          "Before you enter it, so that you do not have to brake in the curve. Braking in a curve is what makes the tires let go.",
        context:
          "The physics the manual gives is simple: a vehicle can travel much faster in a straight line than it can in a curve, and if you go too fast the tires cannot grip and the vehicle skids.",
        trap: "Braking through the curve feels like the cautious version and is the one that produces the skid.",
        excerptKey: "curves-slow-before",
        sourceLabel: "New Mexico Driver Manual - Adjusting to Road Conditions, Curves",
        sourceUrl: hb(20),
      },
      {
        id: "nm_s4_12",
        topic: "signals",
        question:
          "Where does the manual say a flashing yellow light leaves you, compared with a flashing red?",
        choices: [
          "Both require a full stop",
          "Flashing yellow requires a stop, flashing red does not",
          "Flashing yellow means slow down and proceed with caution; flashing red means stop first",
          "Neither requires you to change speed",
        ],
        correctIndex: 2,
        explanation:
          "Flashing yellow means slow down and proceed with caution. Flashing red means the same as a stop sign, so you make a full stop and then go when it is safe.",
        context:
          "The pairing is deliberate in the manual. Both flashing signals hand the decision back to you, but only one of them requires you to come to a stop before you make it.",
        trap: "Getting them the wrong way round is one of the most-repeated signal errors, and it is the one that puts a car into the side of another at a crossroads.",
        excerptKey: "flashing-yellow",
        sourceLabel: "New Mexico Driver Manual - Traffic Signals",
        sourceUrl: hb(4),
      },
      {
        id: "nm_s4_13",
        topic: "sharing",
        question:
          "What does New Mexico law require of a motorcycle rider and passenger under the age of 18?",
        choices: [
          "A helmet meeting standards set by the secretary, securely fastened",
          "Eye protection only",
          "A helmet only above 45 mph",
          "Nothing beyond what applies to adults",
        ],
        correctIndex: 0,
        explanation:
          "Section 66-7-356 requires anyone under eighteen operating a motorcycle to wear a securely fastened safety helmet meeting the secretary's standards, and forbids carrying a passenger under eighteen without one.",
        context:
          "The manual says the same and then goes further as advice rather than law: it recommends that ALL motorcycle drivers and passengers wear a helmet, and lists what makes a good one - meets DOT standards, fits snugly all the way around, and has no cracks, loose padding or frayed straps.",
        trap: "New Mexico's helmet law is age-based, not speed-based. Over eighteen it is a recommendation and not a requirement.",
        excerptKey: "st-helmet-under-18",
        sourceLabel: "Section 66-7-356 NMSA 1978 - Mandatory use of protective helmets",
        sourceUrl: st(725),
      },
      {
        id: "nm_s4_14",
        topic: "rules",
        question:
          "You are on a two-lane road and a line of cars has built up behind you. What does the manual tell you to do?",
        choices: [
          "Speed up to the posted maximum",
          "Pull over when it is safe to do so and let them pass",
          "Stay where you are, since you are at the limit",
          "Move onto the shoulder and keep driving",
        ],
        correctIndex: 1,
        explanation:
          "Pull over when it is safe and let them past. The manual says going much slower than other vehicles can be just as bad as speeding, because it bunches traffic up behind you and forces people to pass.",
        context:
          "Every pass is a chance for a collision, which is the manual's argument for keeping pace with traffic in the first place - the vehicle you are passing may change lanes suddenly, or an oncoming vehicle may appear.",
        trap: "Driving on the shoulder to let traffic by is specifically forbidden. Unless officials direct you, you never drive on the shoulder.",
        excerptKey: "keep-pace",
        sourceLabel: "New Mexico Driver Manual - Adjusting to Traffic",
        sourceUrl: hb(21),
      },
      {
        id: "nm_s4_15",
        topic: "emergencies",
        question:
          "Your headlights suddenly go out at night. What is the manual's first instruction?",
        choices: [
          "Brake hard and stop where you are",
          "Steer by the light of other vehicles",
          "Try the headlight switch a few times",
          "Turn on the interior light so you can be seen",
        ],
        correctIndex: 2,
        explanation:
          "Try the switch a few times first. If that does not bring them back, you switch on the emergency flashers, turn signals or fog lights, and pull off the road as soon as possible.",
        context:
          "The three-step shape is the same across the manual's vehicle failures: try the simple fix, then make yourself visible, then get off the roadway. It is the same sequence as brake failure and a stuck accelerator.",
        trap: "Stopping in the lane in the dark with no lights is the worst outcome of all, which is why getting off the road is the last step rather than the first.",
        excerptKey: "headlight-failure",
        sourceLabel: "New Mexico Driver Manual - Emergencies, Headlight Failure",
        sourceUrl: hb(31),
      },
      {
        id: "nm_s4_16",
        topic: "impairment",
        question:
          "What does the manual say a driver should do when they are angry or excited?",
        choices: [
          "Drive slowly until the feeling passes",
          "Turn the radio up and concentrate",
          "Open a window for fresh air",
          "Give themselves time to cool off, and stay off the road until they have calmed down",
        ],
        correctIndex: 3,
        explanation:
          "Cool off first and stay off the road until you have. The manual suggests a short walk if that helps, and it treats anger as a reason not to drive rather than something to drive through.",
        context:
          "Emotions get their own short section between health and cell phones. Being overly worried, excited, afraid, angry or depressed can all stop you driving well, and the advice differs by state: cool off before driving when angry, keep your mind on the driving when worried or upset.",
        trap: "Slowing down does not fix a judgment problem. The manual's remedy for anger is time, not speed.",
        excerptKey: "emotions",
        sourceLabel: "New Mexico Driver Manual - Emotions",
        sourceUrl: hb(30),
      },
      {
        id: "nm_s4_17",
        topic: "signs",
        question:
          "What determines where New Mexico marks its passing zones?",
        choices: [
          "How far you can see ahead",
          "The width of the road",
          "The speed limit on that stretch",
          "The volume of traffic",
        ],
        correctIndex: 0,
        explanation:
          "Sight distance. The manual says passing areas are based on how far you can see ahead, and that they take account of unseen hazards such as hills, curves, intersections and driveways.",
        context:
          "The signs and the pavement markings work together to tell you where a passing zone starts, where it ends, and where you may not pass. Where passing is permitted you may still only do it if it is safe.",
        trap: "A no-passing zone is not about the speed limit or the width. A wide fast road with a blind crest is exactly where a no-passing zone belongs.",
        excerptKey: "passing-sight-based",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, No Passing Signs",
        sourceUrl: hb(7),
      },
      {
        id: "nm_s4_18",
        topic: "safety",
        question:
          "Where does the New Mexico Driver Manual say to place your hands on the steering wheel?",
        choices: [
          "Both at the top of the wheel",
          "One hand at the top, one on the gear selector",
          "At 10 o'clock and 2 o'clock, or 9 and 3, with knuckles outside the rim",
          "Wherever is comfortable, since it makes no difference",
        ],
        correctIndex: 2,
        explanation:
          "The manual gives 10 and 2 as one balanced position and notes that some drivers prefer 9 and 3. Either way, the instruction is to keep your knuckles outside the rim of the wheel.",
        context:
          "For sharp corners the technique changes: turn hand over hand, and when you complete the turn, straighten the wheel by hand rather than letting it slip back through your fingers.",
        trap: "Letting the wheel spin back on its own is the habit the manual calls out as dangerous, because you have no control of where it stops.",
        excerptKey: "steering-hands",
        sourceLabel: "New Mexico Driver Manual - Basic Driving, Steering",
        sourceUrl: hb(14),
      },
      {
        id: "nm_s4_19",
        topic: "parking",
        question:
          "You have parked at the curb on a busy street. Which side does the manual tell you to get out on?",
        choices: [
          "The street side, so you can see traffic",
          "Whichever side the passengers are on",
          "The curb side if you can, and check traffic first if you must use the street side",
          "It makes no difference on a residential street",
        ],
        correctIndex: 2,
        explanation:
          "The curb side if you can. If you have to use the street side, you check traffic before you get out and shut the door as soon as you can afterwards.",
        context:
          "The mirror image of this rule appears in the motorcycle section, where riders are told to stay toward the left of their lane when passing parked cars, precisely because doors open and people step out from between vehicles.",
        trap: "Opening a door into a travel lane is a violation in its own right under Section 66-7-367, not just bad practice.",
        excerptKey: "parking-door",
        sourceLabel: "New Mexico Driver Manual - Parking",
        sourceUrl: hb(13),
      },
      {
        id: "nm_s4_20",
        topic: "rightOfWay",
        question:
          "A school bus has finished loading and its red lights have stopped flashing. What does the manual tell you to do next?",
        choices: [
          "Proceed immediately, since the signal has ended",
          "Wait five seconds and then proceed",
          "Watch for children along the side of the road and do not proceed until they have completely left the roadway",
          "Sound your horn to warn the children before moving",
        ],
        correctIndex: 2,
        explanation:
          "The lights going off is not the all-clear. You watch for children along the side of the road and wait until they have completely left the roadway and it is safe to move.",
        context:
          "That instruction sits directly after the stopping rule in the manual's right-of-way list, because the moment after the lights go off is when a child who was slow getting off the bus is still crossing.",
        trap: "The signal governs the traffic, but the child governs the moment. Treating the lights going off as permission to move is how children get hit.",
        excerptKey: "school-bus-after",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(12),
      },
      {
        id: "nm_s4_21",
        topic: "signals",
        question:
          "What does the manual say about the small, very bright blinking light some New Mexico red signals carry in the middle of the red lens?",
        choices: [
          "It means the signal is out of order",
          "It is there to alert you to the red light and that you must stop",
          "It means the red is about to change to green",
          "It permits a right turn without stopping",
        ],
        correctIndex: 1,
        explanation:
          "It is an attention device. The manual says it is there to alert you to the red light and to the fact that you must stop.",
        context:
          "These appear at intersections where the red is easy to miss - a long approach, a crest, a low sun. The obligation is unchanged: it is still a steady red and you still stop.",
        trap: "A blinking element inside the red does not make it a flashing red. A flashing red is the whole lens flashing, and that one you may proceed from after stopping.",
        excerptKey: "red-steady",
        sourceLabel: "New Mexico Driver Manual - Traffic Signals",
        sourceUrl: hb(4),
      },
      {
        id: "nm_s4_22",
        topic: "licensing",
        question:
          "What must a New Mexico provisional license applicant have completed in practice driving?",
        choices: [
          "30 hours, including 5 at night",
          "Not less than 50 hours, including not less than 10 hours at night",
          "40 hours, with no night requirement",
          "100 hours, including 20 at night",
        ],
        correctIndex: 1,
        explanation:
          "Fifty hours in total, with at least ten of them at night. The parent or guardian certifies in writing that the hours have been completed.",
        context:
          "Section 66-5-8 allows one exemption from the night hours: an applicant who cannot drive at night because of low nighttime vision, on an ophthalmologic or optometric report from a licensed practitioner attesting to the condition and its effect.",
        trap: "The ten night hours are part of the fifty, not on top of them. The statute says fifty hours 'including' not less than ten of night driving.",
        excerptKey: "st-practice-fifty-hours",
        sourceLabel: "Section 66-5-8 NMSA 1978 - Provisional licenses",
        sourceUrl: st(359),
      },
      {
        id: "nm_s4_23",
        topic: "sharing",
        question:
          "You are riding a motorcycle and a car in the next lane starts to squeeze past you within your lane. What does the manual advise?",
        choices: [
          "Move to the far side of your lane to give room",
          "Keep a center-of-the-lane position to discourage it",
          "Speed up sharply to get clear",
          "Signal a lane change and move over",
        ],
        correctIndex: 1,
        explanation:
          "Hold the center of the lane. The manual says to discourage lane sharing by others by keeping a center position whenever drivers might be tempted to squeeze by.",
        context:
          "It names when the temptation is strongest: heavy bumper-to-bumper traffic, when a driver wants to pass, when you are preparing to turn at an intersection, and when you are getting into an exit lane. Lane sharing itself is usually prohibited in New Mexico.",
        trap: "Moving over to make room invites the pass into your lane. The manual treats the space as yours to occupy rather than to share.",
        excerptKey: "mc-lane-sharing",
        sourceLabel: "New Mexico Driver Manual - Motorcycles, Lane Sharing",
        sourceUrl: hb(36),
      },
      {
        id: "nm_s4_24",
        topic: "speed",
        question:
          "You are driving on a gravel road in rural New Mexico. What does the manual say about traction?",
        choices: [
          "Gravel gives more grip than asphalt when it is dry",
          "Traction is the same as on pavement below 40 mph",
          "Traction is worse than on concrete or asphalt, so you must slow down",
          "Traction only matters on gravel when braking",
        ],
        correctIndex: 2,
        explanation:
          "You do not have as much traction on gravel or dirt as on concrete or asphalt, so you slow down. It takes much longer to stop and it is much easier to skid when turning.",
        context:
          "The manual makes tires the whole story: the only contact your vehicle has with the road is through them, and how well they grip depends on the condition of the tires and the type and condition of the surface.",
        trap: "The problem shows up in turns as much as in braking. The manual names skidding when turning as the specific gravel risk.",
        excerptKey: "gravel-traction",
        sourceLabel: "New Mexico Driver Manual - Adjusting to Road Conditions",
        sourceUrl: hb(20),
      },
      {
        id: "nm_s4_25",
        topic: "rules",
        question:
          "Under Section 66-7-325, when must you signal before slowing down or stopping?",
        choices: [
          "Only on a highway",
          "Only when a vehicle is directly behind you within 100 feet",
          "Only when you are also turning",
          "Whenever there is a vehicle immediately to the rear and an opportunity to give the signal",
        ],
        correctIndex: 3,
        explanation:
          "The statute forbids stopping or suddenly decreasing speed without first giving an appropriate signal to the driver of any vehicle immediately to the rear, when there is an opportunity to give it.",
        context:
          "The manual says the same thing in plainer words: your brake lights let people know you are slowing, you should always slow as early as it is safe to, and you should not slow down or stop suddenly without signaling to the driver behind if you have time.",
        trap: "Brake lights count as the signal in most cases. The rule is about not stopping suddenly with no warning at all, not about using a hand signal every time.",
        excerptKey: "st-signal-slowing",
        sourceLabel: "Section 66-7-325 NMSA 1978 - Turning movements and required signals",
        sourceUrl: st(677),
      },
      {
        id: "nm_s4_26",
        topic: "safety",
        question:
          "The manual names a specific place where the pavement can be icy while the rest of the road is not. Where?",
        choices: [
          "In a tunnel",
          "On overpasses and other bridges",
          "At the crest of a hill",
          "Inside a traffic circle",
        ],
        correctIndex: 1,
        explanation:
          "Bridges and overpasses. There is no earth underneath them to insulate against the cold, so they can be colder and icier than the roadway either side.",
        context:
          "The manual's other icy clues are worth knowing together: shady spots on cold wet days freeze first and dry last, ice near the freezing point is wetter and therefore more slippery than ice well below it, and rain on a hot day brings oil to the surface for the first few minutes.",
        trap: "A dry approach tells you nothing about the bridge deck. That is the whole point of the warning.",
        excerptKey: "bridges-icy",
        sourceLabel: "New Mexico Driver Manual - Adjusting to Road Conditions, Slippery roads",
        sourceUrl: hb(20),
      },
      {
        id: "nm_s4_27",
        topic: "signs",
        question:
          "A regulatory sign shows a symbol inside a red circle with a red slash across it. What does it do?",
        choices: [
          "Prohibits the action shown, such as a left turn or a U-turn",
          "Warns that the action shown is dangerous but permitted",
          "Marks the end of a restriction",
          "Indicates a recommended action",
        ],
        correctIndex: 0,
        explanation:
          "The red circle and slash prohibit the action in the symbol. The manual gives no left turn, no right turn and no U-turn as its examples.",
        context:
          "That family sits inside the wider regulatory group - square, rectangular or specially shaped signs in white, red or black, carrying rules about direction, lane use, turning, speed and parking.",
        trap: "A prohibition sign is not advisory. Warning signs are the yellow diamonds, and they are a different family entirely.",
        excerptKey: "prohibitory-signs",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Regulatory Signs",
        sourceUrl: hb(6),
      },
      {
        id: "nm_s4_28",
        topic: "impairment",
        question:
          "What does the New Mexico Driver Manual say about fatigue and long trips?",
        choices: [
          "Coffee at the start of the trip prevents drowsiness",
          "A large meal before leaving keeps energy up",
          "Take a break every hour or so, and never drive if you are sleepy",
          "Fatigue only matters after four hours of driving",
        ],
        correctIndex: 2,
        explanation:
          "Stop every hour or so, walk around and get some fresh air, and never drive while sleepy. The manual says a few minutes on a rest break can save your life.",
        context:
          "Its prevention list runs the other way too: get a normal night's sleep before you leave, do not set off already tired, avoid medicine that makes you drowsy, and eat lightly, because a big meal makes some people sleepy.",
        trap: "A big meal before a long drive is on the manual's list of things NOT to do, not a way to keep going.",
        excerptKey: "fatigue-breaks",
        sourceLabel: "New Mexico Driver Manual - Be in Shape to Drive, Fatigue",
        sourceUrl: hb(28),
      },
      {
        id: "nm_s4_29",
        topic: "emergencies",
        question:
          "Your vehicle is hit from the rear. What does the manual tell you to do with your body and your feet?",
        choices: [
          "Brace against the steering wheel and lift off the pedals",
          "Lean forward to absorb the impact",
          "Turn to look behind you",
          "Press back against the seat with your head on the restraint, and be ready to brake",
        ],
        correctIndex: 3,
        explanation:
          "Press yourself against the seat back with your head against the head restraint, because your body is thrown backwards, and be ready to apply the brakes so you are not pushed into another vehicle.",
        context:
          "The manual gives three cases. Hit from the rear, press back and be ready to brake. Hit from the side, rely on the lap and shoulder belts and get ready to steer or brake. Hit from the front, try to turn so the blow is a glancing one.",
        trap: "The second collision is the one people forget. In every case the manual asks you to be ready to stop the car hitting something else afterwards.",
        excerptKey: "hit-from-rear",
        sourceLabel: "New Mexico Driver Manual - Protect Yourself in Collisions",
        sourceUrl: hb(33),
      },
      {
        id: "nm_s4_30",
        topic: "rules",
        question:
          "You are approaching an intersection where a police officer is directing traffic, and the signal shows green. What must you do?",
        choices: [
          "Follow the signal, because it is the legal control",
          "Obey the directions of the officer",
          "Stop and wait for the officer to leave",
          "Follow whichever gives you the shorter wait",
        ],
        correctIndex: 1,
        explanation:
          "You obey the person. The manual says traffic control can be provided by law enforcement, highway personnel or school crossing guards, and that you must obey directions from these people.",
        context:
          "Work areas are the case you meet most often. Where traffic there is controlled by a person with a sign or a flag, the manual gives the same instruction in the same words - you must obey these people.",
        trap: "A green light is the default control, and a person directing traffic overrides it. That is why they are there.",
        excerptKey: "tcd-what",
        sourceLabel: "New Mexico Driver Manual - Traffic Control Devices",
        sourceUrl: hb(3),
      },
      {
        id: "nm_s4_31",
        topic: "rightOfWay",
        question:
          "How much of a gap do you need in traffic before merging, according to the manual?",
        choices: [
          "About four seconds",
          "About two seconds",
          "About six seconds",
          "One car length for every 10 mph",
        ],
        correctIndex: 0,
        explanation:
          "About four seconds. If you move into the middle of a four-second gap, both you and the vehicle now behind you end up with a two-second following distance.",
        context:
          "The manual applies the same four-second gap whenever you change lanes, enter a roadway or your lane merges with another. Crossing several lanes is done one at a time, not in a single sweep.",
        trap: "Four seconds to merge and three seconds to follow are different numbers for different jobs, and the manual gives them two pages apart.",
        excerptKey: "four-second-merge",
        sourceLabel: "New Mexico Driver Manual - Sharing Space, Space to Merge",
        sourceUrl: hb(24),
      },
      {
        id: "nm_s4_32",
        topic: "parking",
        question:
          "You have parked and switched off. What does the manual tell you to do with the keys?",
        choices: [
          "Leave them in the ignition if you will be nearby",
          "Leave them above the visor if someone else may need the car",
          "Never leave the ignition keys in a parked vehicle",
          "Leave them in the ignition but lock the doors",
        ],
        correctIndex: 2,
        explanation:
          "Never leave the ignition keys in a parked vehicle. The manual pairs it with a habit: lock the doors whenever you leave the car.",
        context:
          "The parking list is a short sequence you can run every time. Park somewhere far enough from the travel lane and visible from both directions, set the parking brake, leave the transmission in park or in gear, take the keys, and lock up.",
        trap: "Locking the doors with the keys inside protects the car and not much else. The manual's instruction is about the keys, not the locks.",
        excerptKey: "parking-keys",
        sourceLabel: "New Mexico Driver Manual - Parking",
        sourceUrl: hb(13),
      },
      {
        id: "nm_s4_33",
        topic: "licensing",
        question:
          "Which medical conditions does the manual say require periodic statements from a physician to the New Mexico Motor Vehicle Division?",
        choices: [
          "Any condition requiring prescription medicine",
          "Color blindness and hearing loss",
          "Only conditions that caused a previous crash",
          "Epilepsy, diabetes, adverse heart conditions and other medical problems",
        ],
        correctIndex: 3,
        explanation:
          "Drivers with epilepsy, diabetes, adverse heart conditions and other medical problems are required to send the Motor Vehicle Division periodic medical statements signed by their physicians.",
        context:
          "The manual adds specific guidance for each. People with epilepsy should be stable and seizure free for a six-month period before a license is issued. Insulin-using diabetics should not drive when there is any chance of a reaction, blackout or shock.",
        trap: "This is a reporting duty, not automatically a bar on driving. The statements go to MVD, and MVD decides.",
        excerptKey: "health-reporting",
        sourceLabel: "New Mexico Driver Manual - Health",
        sourceUrl: hb(30),
      },
      {
        id: "nm_s4_34",
        topic: "signals",
        question:
          "What does a dashed white line between two lanes going the same direction permit?",
        choices: [
          "Passing oncoming traffic",
          "Crossing to change lanes when it is safe to do so",
          "Parking along the line",
          "Nothing - it is a barrier line",
        ],
        correctIndex: 1,
        explanation:
          "A dashed white line means you may cross it to change lanes if it is safe to do so. White always separates traffic moving in the same direction.",
        context:
          "The four markings to hold in mind are: dashed white, change lanes freely when safe; solid white, stay in your lane unless a special situation requires otherwise; dashed yellow, you may cross to pass; double solid yellow, neither side passes.",
        trap: "Passing oncoming traffic is a yellow-line question. A white line never separates opposing directions.",
        excerptKey: "white-dashed",
        sourceLabel: "New Mexico Driver Manual - Pavement Markings",
        sourceUrl: hb(8),
      },
      {
        id: "nm_s4_35",
        topic: "sharing",
        question:
          "You are riding a motorcycle at night. What following distance does the manual recommend?",
        choices: [
          "Two seconds",
          "The same three seconds as in daylight",
          "Open it up to three seconds and allow more distance to pass and be passed",
          "Four car lengths",
        ],
        correctIndex: 2,
        explanation:
          "The manual's night riding advice is to open up a three second following distance and to allow more distance both to pass and to be passed, because distances are harder to judge at night.",
        context:
          "It gives the reason: your eyes rely on shadows and light contrasts to judge how far away something is and how fast it is closing, and artificial light at night distorts or removes both. Reducing speed and using the high beam when you are not following or meeting a car are the other two instructions.",
        trap: "Riders often read this as the same rule as the car three-second rule. The point is the addition around it - more room to pass, more room to be passed, and a slower speed than you would use by day.",
        excerptKey: "mc-night",
        sourceLabel: "New Mexico Driver Manual - Motorcycles, Riding At Night",
        sourceUrl: hb(38),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The rules New Mexico learners report getting wrong: the ones the manual states once and buries, the ones it does not state at all, and the pairs of numbers that look interchangeable and are not.",
    questions: [
      {
        id: "nm_s5_01",
        topic: "licensing",
        question:
          "A 15-year-old wants an instructional permit. What does New Mexico require BEFORE the permit can be issued?",
        choices: [
          "They must already be enrolled in or have completed a driver education course approved by the Traffic Safety Bureau",
          "They must have held a bicycle license",
          "They must complete 50 hours of supervised practice",
          "They must pass a road test",
        ],
        correctIndex: 0,
        explanation:
          "Driver education comes first. Section 66-5-8 lets the division issue an instruction permit to a person fifteen or older who is enrolled in and attending, or has completed, a Bureau-approved driver education course that includes a DWI prevention and education component.",
        context:
          "In practice this is why the school hands you paperwork. MVD's own procedure asks for a Driver Education Referral Card or a Certificate of Completion, and the knowledge exam may be given by an MVD-contracted driver education school rather than at the counter.",
        trap: "The order feels backwards to families arriving from states where the permit comes first and the class comes after. In New Mexico the class - or at least enrolment in it - comes first.",
        excerptKey: "permit-driver-ed",
        sourceLabel: "New Mexico Driver Manual - Instructional Permit",
        sourceUrl: hb(1),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_02",
        topic: "safety",
        question:
          "You are following an ambulance that is not running its siren. What following distance does the manual want?",
        choices: [
          "Two seconds",
          "Three seconds, as normal",
          "One car length per 10 mph",
          "Four seconds",
        ],
        correctIndex: 3,
        explanation:
          "Following emergency vehicles is one of the six situations the manual lists for a four-second gap, whether or not the lights and siren are running.",
        context:
          "The other five are slippery roads, following a motorcycle, carrying a heavy load or towing a trailer, approaching a railroad crossing, and being stopped on a hill or incline.",
        trap: "The three-second rule is the baseline, not the answer to every following-distance question. Six named situations move it to four.",
        excerptKey: "four-second-situations",
        sourceLabel: "New Mexico Driver Manual - Sharing Space, Space Ahead",
        sourceUrl: hb(24),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_03",
        topic: "rules",
        question:
          "Section 66-7-374 bans texting while driving in New Mexico. What does it also ban that people assume it does not?",
        choices: [
          "Using a hands-free device",
          "Manually typing on a handheld mobile communication device for any purpose",
          "Using a global positioning system",
          "Carrying a phone in the vehicle at all",
        ],
        correctIndex: 1,
        explanation:
          "The section bans reading or viewing a text message AND manually typing on a handheld mobile communication device for any purpose. Typing a search or an address is inside the ban even though nothing is being sent to anyone.",
        context:
          "The statute's own exclusions tell you where the edges are: global positioning and navigation systems, devices physically or electronically integrated into the vehicle, and voice-operated or hands-free devices where a hand is used only to activate or deactivate a feature.",
        trap: "The Driver Manual's cell phone paragraph says only that it is illegal in some towns to use a phone without a hands-free device. The statewide ban came in 2014 and the manual never caught up.",
        excerptKey: "st-texting",
        sourceLabel: "Section 66-7-374 NMSA 1978 - Texting while driving",
        sourceUrl: st(741),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_04",
        topic: "rightOfWay",
        question:
          "A school bus with red lights flashing is stopped on the far side of a road divided by a raised median. Must you stop?",
        choices: [
          "Yes, in every case",
          "Yes, unless you are more than 100 feet away",
          "No - the manual excuses you when the bus is coming towards you and the roadway is separated by a median or other physical barrier",
          "No, because a divided road is never covered",
        ],
        correctIndex: 2,
        explanation:
          "The median exception is narrow and specific: you are not required to stop if the bus is travelling towards you and the roadway is separated by a median or other physical barrier. On an undivided road you stop from either direction.",
        context:
          "Section 66-7-347 uses the phrase 'separate roadways' for the same idea, and adds a second case - a controlled-access highway where the bus is in a loading zone that pedestrians are not permitted to cross to.",
        trap: "A painted center stripe or a two-way turn lane is not a median. Only a physical barrier separating the roadways releases you.",
        excerptKey: "school-bus-median",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(12),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_05",
        topic: "speed",
        question:
          "You are on an unposted New Mexico county road. What speed limit applies under Section 66-7-301?",
        choices: [
          "55 mph",
          "45 mph",
          "35 mph",
          "75 mph",
        ],
        correctIndex: 0,
        explanation:
          "Fifty-five miles per hour on a county road without a posted speed limit. The legislature added that line in 2015, effective 1 January 2016.",
        context:
          "The statute's other maximums are 15 passing a properly posted school zone while children are going to or leaving school, 30 in a business or residence district, and 75 as the general maximum.",
        trap: "The Driver Manual prints '55 mph on public highways, unless posted otherwise', which is not how the statute reads. The statute's 55 is specifically the unposted county road, and the general maximum is 75. On an unposted county road both readings give the same answer, which is why this question asks about that case.",
        excerptKey: "st-speed-limits",
        sourceLabel: "Section 66-7-301 NMSA 1978 - Speed regulation",
        sourceUrl: st(642),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_06",
        topic: "signals",
        question:
          "You are on a one-way street and want to turn left into another one-way street at a red light. Does New Mexico permit it?",
        choices: [
          "No, left on red is never permitted",
          "Only where a sign expressly allows it",
          "Only between one-way streets that carry a bike lane",
          "Yes, unless the turn is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "The manual states it in one line inside the scanning chapter: you may also turn left from a one-way street into another one-way street unless prohibited. It is the mirror of the right-on-red default.",
        context:
          "Both turns carry the same conditions as any turn on red. You have already stopped, you have checked for pedestrians crossing where you will be turning, and a sign forbidding the turn overrides the default.",
        trap: "The rule is buried in a paragraph about turning right, not in the traffic signal section, so learners who read the signal chapter alone never meet it.",
        excerptKey: "right-on-red-unless",
        sourceLabel: "New Mexico Driver Manual - Scanning, Intersections",
        sourceUrl: hb(16),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_07",
        topic: "safety",
        question:
          "You are checking whether you are driving too fast for the conditions using the Four Second Sight Distance Rule. What do you count against?",
        choices: [
          "The vehicle in front of you",
          "A stationary object as far ahead as you can clearly see",
          "The next painted lane marking",
          "The edge of your headlight beam",
        ],
        correctIndex: 1,
        explanation:
          "You pick a stationary object as far ahead as you can clearly see - the manual suggests a sign or a telephone pole - and count four seconds. Reaching it before you finish means you are outdriving your sight distance.",
        context:
          "The manual states the underlying principle in a sentence: you must not drive faster than the distance you can see. At night the same test tells you whether you are overdriving your headlights, which reach about 400 feet.",
        trap: "Counting against the car in front is the three-second following rule. This one is deliberately about a fixed object at the limit of your vision.",
        excerptKey: "four-second-sight",
        sourceLabel: "New Mexico Driver Manual - How Well Can You See?",
        sourceUrl: hb(23),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_08",
        topic: "parking",
        question:
          "A curb is painted yellow in New Mexico. What does that indicate?",
        choices: [
          "Handicap parking only",
          "Only short stops are permitted",
          "A fire zone with no parking or standing",
          "A loading zone or some other restriction",
        ],
        correctIndex: 3,
        explanation:
          "Yellow marks a loading zone or some other restriction. The manual's wording leaves the second half open, so the posted sign tells you which restriction applies.",
        context:
          "White is the short-stop color, red is the fire zone where neither parking nor standing is allowed, and blue is handicap parking only, which needs a plate, tag or sticker.",
        trap: "Yellow and white get swapped constantly. White is where you may briefly stop; yellow is where loading or another posted restriction governs.",
        excerptKey: "curb-colors",
        sourceLabel: "New Mexico Driver Manual - Parking",
        sourceUrl: hb(14),
      },
      {
        id: "nm_s5_09",
        topic: "emergencies",
        question:
          "You come across a collision that you were not involved in, and emergency crews have already arrived. What does the manual tell you to do?",
        choices: [
          "Keep your attention on your driving and keep moving",
          "Stop and offer assistance",
          "Stop and photograph the scene as a witness",
          "Slow to a walking pace to check for injuries",
        ],
        correctIndex: 0,
        explanation:
          "The manual's instruction is not to stop at an accident unless you are involved or emergency help has not yet arrived. You keep moving, watching for people who might be in or near the road.",
        context:
          "It is blunter still about deliberate spectating: never drive to the scene of an accident, a fire or another disaster just to look, because you may block the way for police, firefighters, ambulances, tow trucks and other rescue vehicles.",
        trap: "Stopping to help sounds right and is what causes the second collision. Once help has arrived, the useful thing a passing driver does is clear the road.",
        excerptKey: "do-not-stop-at-accident",
        sourceLabel: "New Mexico Driver Manual - Accidents and the Financial Responsibility Law",
        sourceUrl: hb(33),
      },
      {
        id: "nm_s5_10",
        topic: "impairment",
        question:
          "A driver under 21 tests at 0.03 percent BAC in New Mexico. What does Section 66-8-111 provide?",
        choices: [
          "No consequence, since it is below the adult limit",
          "A six-month revocation, the same as an adult",
          "A one-year revocation, or until all reinstatement conditions are met",
          "A written warning only",
        ],
        correctIndex: 2,
        explanation:
          "Under 21, a result of two one hundredths or more triggers a revocation of one year or until all conditions for reinstatement are met, whichever is later. An adult over the 0.08 limit gets six months.",
        context:
          "The statute sets three test thresholds for revocation: 0.08 at 21 or older, 0.04 driving a commercial vehicle, and 0.02 under 21. The revocation period is longer for the youngest drivers, not shorter.",
        trap: "The young driver's revocation is TWICE as long as an adult's for a first result over the limit. The intuition that a lower reading means a lighter consequence is exactly backwards here.",
        excerptKey: "st-under-21-revocation",
        sourceLabel: "Section 66-8-111 NMSA 1978 - Grounds for revocation",
        sourceUrl: st(898),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_11",
        topic: "sharing",
        question:
          "You are about to make a right turn and you have just passed a bicyclist on your right. What does the manual tell you to do?",
        choices: [
          "Complete the turn quickly, before the rider catches up",
          "Slow down and merge behind the bicyclist before turning",
          "Signal and turn from your current position",
          "Sound the horn and turn",
        ],
        correctIndex: 1,
        explanation:
          "You slow down and merge behind the rider before turning. The manual's instruction is not to make a sudden right turn after passing a bicyclist on your right.",
        context:
          "This is the classic right hook. Having just overtaken, you are ahead of a rider who is still travelling at speed on your right, and turning across them puts the rider into the side of the car.",
        trap: "Beating the rider to the corner is the instinct and it is what the rule is written against. The manual asks you to give up the position you just gained.",
        excerptKey: "bicycle-no-sudden-right",
        sourceLabel: "New Mexico Driver Manual - Sharing the Road, Bicycles Are Vehicles",
        sourceUrl: hb(26),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_12",
        topic: "rules",
        question:
          "You are approaching a hill where you cannot see the road beyond the crest, and you want to pass. What does the manual say?",
        choices: [
          "Pass if the oncoming lane is empty as far as the crest",
          "Pass, but return to your lane before the crest",
          "Sound your horn and pass",
          "Do not start to pass within one-third of a mile of the hill",
        ],
        correctIndex: 3,
        explanation:
          "One-third of a mile, which is about ten seconds ahead. The manual tells you to treat a hill or a curve exactly as you would an oncoming vehicle - assume there is one just out of sight.",
        context:
          "That distance is the same as the ten-second gap you need to pass at 55 mph, expressed the other way round. It is a sight-distance requirement, so an empty lane you cannot see the end of does not satisfy it.",
        trap: "Planning to be back in your lane before the crest assumes you can predict how long the pass takes. The rule removes the guess by pushing the whole maneuver back a third of a mile.",
        excerptKey: "pass-hills-curves",
        sourceLabel: "New Mexico Driver Manual - Sharing Space, Space to Pass",
        sourceUrl: hb(25),
      },
      {
        id: "nm_s5_13",
        topic: "licensing",
        question:
          "A provisional license holder in New Mexico is driving at 8:00 p.m. Which passengers may be in the car with no adult present?",
        choices: [
          "At most one passenger under 21 who is not immediate family",
          "Any number of passengers",
          "Only immediate family, in any number, plus two friends",
          "No passengers at all",
        ],
        correctIndex: 0,
        explanation:
          "Not more than one passenger under the age of 21 who is not a member of the licensee's immediate family. Immediate family members do not count against the limit.",
        context:
          "The restriction lifts when a licensed driver 21 or older is in the vehicle. It applies at every hour, not only during the midnight-to-5:00 a.m. curfew, which is a separate restriction on the same license.",
        trap: "The rule counts non-family passengers under 21. Two siblings and one friend is legal; one friend and one classmate is not.",
        excerptKey: "st-provisional-passenger",
        sourceLabel: "Section 66-5-8 NMSA 1978 - Provisional licenses",
        sourceUrl: st(359),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_14",
        topic: "safety",
        question:
          "You are backing out of a parking space. What does the manual say about your mirrors?",
        choices: [
          "Use the rearview mirror as your primary reference",
          "Use the side mirrors and a shoulder check together",
          "Use a reversing camera in place of looking",
          "Do not depend on the mirrors - turn around and look through the rear window",
        ],
        correctIndex: 3,
        explanation:
          "Place your right arm on the back of the seat, turn around, and look directly through the rear window. The manual says not to depend on the rearview or side mirrors, because you cannot see directly behind the vehicle with them.",
        context:
          "The backing sequence starts before you get in. The manual asks you to check behind the vehicle first, because children and small objects cannot be seen from the driver's seat, then to back slowly, and to use a person outside the vehicle to help whenever you can.",
        trap: "Mirrors are the natural habit from driving forwards and they are the wrong tool here. The rule is to look with your own eyes through the glass.",
        excerptKey: "backing-look-behind",
        sourceLabel: "New Mexico Driver Manual - Scanning, When you back up",
        sourceUrl: hb(17),
      },
      {
        id: "nm_s5_15",
        topic: "signs",
        question:
          "What is the difference between a school zone sign and a school crossing sign in New Mexico's warning family?",
        choices: [
          "One is orange and the other is yellow",
          "One is regulatory and the other is a guide sign",
          "Both are yellow warning signs - the zone sign marks the area, the crossing sign marks where children cross",
          "Only the crossing sign is enforceable",
        ],
        correctIndex: 2,
        explanation:
          "Both belong to the yellow warning family the manual illustrates. School Zone and School Crossing appear side by side in that list, and neither is a regulatory sign in its own right.",
        context:
          "The speed number is a separate thing from the warning sign. The manual's 15 mph school zone limit applies where the zone is properly posted, and Section 66-7-301 ties it to children going to or leaving school.",
        trap: "Orange belongs to work areas. A school zone sign is never orange, however temporary the school crossing looks.",
        excerptKey: "warning-signs",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Warning Signs",
        sourceUrl: hb(4),
      },
      {
        id: "nm_s5_16",
        topic: "rightOfWay",
        question:
          "Under Section 66-7-332, an emergency vehicle is approaching from behind with lights and siren, and you are already in an intersection. What does the manual tell you to do?",
        choices: [
          "Stop where you are so the emergency vehicle can go round you",
          "Turn right at once to clear the path",
          "Drive through the intersection first, then pull over to the right",
          "Reverse out of the intersection",
        ],
        correctIndex: 2,
        explanation:
          "Clear the intersection first. The statutory duty is to pull as close as possible to the right-hand edge or curb of the roadway clear of any intersection, and stop there.",
        context:
          "The rest of the duty is to remain in that position until the emergency vehicle has passed, unless a police officer directs otherwise, and to follow any instructions given over the emergency vehicle's loudspeaker.",
        trap: "Stopping instantly is the reflex and it blocks the intersection, which is usually the route the emergency vehicle needs.",
        excerptKey: "st-emergency-approach",
        sourceLabel: "Section 66-7-332 NMSA 1978 - Approach of moving authorized emergency vehicles",
        sourceUrl: st(688),
      },
      {
        id: "nm_s5_17",
        topic: "speed",
        question:
          "The road has packed snow on it. What does the manual say about your speed?",
        choices: [
          "Cut your speed in half",
          "Reduce by about 10 mph",
          "Reduce by about 20 mph",
          "Slow to a crawl",
        ],
        correctIndex: 0,
        explanation:
          "On packed snow you cut your speed in half. That is a different instruction from the wet-road one, which is a reduction of about 10 mph.",
        context:
          "The three-step ladder in the manual is wet, reduce about 10 mph; packed snow, halve your speed; ice, slow to a crawl. It also says to use snow tires or chains when there is snow on the road, and that studded tires are not permitted in many areas.",
        trap: "Slowing to a crawl is the ICE instruction. Applying it to packed snow makes you a hazard; applying the packed-snow rule to ice is far worse.",
        excerptKey: "slippery-numbers",
        sourceLabel: "New Mexico Driver Manual - Adjusting to Road Conditions, Slippery roads",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_18",
        topic: "signals",
        question:
          "A flashing yellow X is displayed over the lane you are in. What may you use that lane for?",
        choices: [
          "Nothing - the lane is closed",
          "Turning only",
          "Through traffic at reduced speed",
          "Passing only",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow X means the lane is only for turning. A steady yellow X is the one that means the lane's use is changing and you should leave it.",
        context:
          "The reversible lane signals form a set of four: green arrow, you may use the lane; red X, you may not; flashing yellow X, turns only; steady yellow X, get out as soon as it is safe.",
        trap: "Two yellow X states, two different meanings, and the difference is only whether it is flashing. It is the single most missed item in the lane-control section.",
        excerptKey: "reversible-signals",
        sourceLabel: "New Mexico Driver Manual - Other Lane Controls, Reversible Lanes",
        sourceUrl: hb(9),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_19",
        topic: "emergencies",
        question:
          "The accelerator sticks open while you are driving. What does the manual tell you to do after keeping your eyes on the road?",
        choices: [
          "Switch off the engine immediately",
          "Stand on the brakes",
          "Pull the parking brake",
          "Shift quickly to neutral",
        ],
        correctIndex: 3,
        explanation:
          "Shift quickly to neutral. Only after that do you pull off the road when it is safe, and only then do you turn off the engine.",
        context:
          "The order matters because switching the engine off first takes the power steering and the power brakes with it, and on many vehicles it can lock the steering column. Neutral disconnects the engine from the wheels while leaving you everything else.",
        trap: "Killing the ignition is the instinctive move and it is third on the list, not first, for exactly that reason.",
        excerptKey: "gas-pedal-sticks",
        sourceLabel: "New Mexico Driver Manual - Emergencies, Gas Pedal Sticks",
        sourceUrl: hb(31),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_20",
        topic: "rules",
        question:
          "Under Section 66-7-318, how closely may a motorcade of vehicles follow each other outside a business or residence district?",
        choices: [
          "No closer than three hundred feet",
          "No closer than one hundred feet",
          "No closer than fifty feet",
          "There is no distance in the statute",
        ],
        correctIndex: 0,
        explanation:
          "Three hundred feet. The same figure applies to a motor truck or a vehicle towing another following a like vehicle outside a business or residence district.",
        context:
          "The subsection carves out two exceptions: funeral processions, and escort vehicles of a motor vehicle escort service, which may run closer if that is what keeps the escorted unit together. A vehicle in a driver-assisted platoon that is not the lead vehicle is also excepted.",
        trap: "The manual never mentions three hundred feet at all. Its whole treatment of following distance is the three-second rule, so this number can only come from the statute.",
        excerptKey: "st-caravan-300-feet",
        sourceLabel: "Section 66-7-318 NMSA 1978 - Following too closely",
        sourceUrl: st(669),
      },
      {
        id: "nm_s5_21",
        topic: "impairment",
        question:
          "What does the New Mexico Driver Manual say about how much alcohol is safe before driving?",
        choices: [
          "One drink per hour is safe",
          "One drink is safe for an adult over 180 pounds",
          "There is no safe amount, and with two or more drinks in your bloodstream you are impaired and could be arrested",
          "Beer and wine are safe, spirits are not",
        ],
        correctIndex: 2,
        explanation:
          "The manual puts it in capitals - there is no safe amount of alcohol - and says even one drink can affect your driving, with two or more meaning you are impaired and could be arrested.",
        context:
          "It also defines a drink so the count is not guesswork: one and a half ounces of 80-proof liquor, twelve ounces of beer, or five ounces of wine. A specialty drink can hold several of those at once.",
        trap: "One drink per hour is the manual's ELIMINATION rate, not a permission. Drinking at that rate keeps you level, it does not keep you sober.",
        excerptKey: "alcohol-no-safe-amount",
        sourceLabel: "New Mexico Driver Manual - Effects of Alcohol",
        sourceUrl: hb(29),
      },
      {
        id: "nm_s5_22",
        topic: "parking",
        question:
          "Which of these is on the New Mexico Driver Manual's no-parking list?",
        choices: [
          "Any street with a posted speed above 35 mph",
          "The road side of a vehicle already parked at the curb",
          "Any unlit street after dark",
          "Within 100 feet of a school",
        ],
        correctIndex: 1,
        explanation:
          "Double parking is on the list, described as parking on the road side of a parked vehicle. Section 66-7-351 uses the same words.",
        context:
          "The list also covers intersections, crosswalks and sidewalks, construction areas where you would block traffic, bridges, overpasses, tunnels and underpasses, the wrong side of the street, handicap spaces without the plate or placard, railroad tracks, and anywhere a sign says you cannot park.",
        trap: "The list is about locations, not about time of day or the speed of the street. Nothing on it turns on how fast traffic goes past.",
        excerptKey: "no-park-double",
        sourceLabel: "New Mexico Driver Manual - Parking, No-Parking Zones",
        sourceUrl: hb(13),
      },
      {
        id: "nm_s5_23",
        topic: "sharing",
        question:
          "What does the manual say about riding or driving alongside a large truck or bus?",
        choices: [
          "It is safe as long as you match its speed",
          "It is safe in the left lane only",
          "It is the best place to be seen",
          "Never stay alongside one, because they have large blind spots",
        ],
        correctIndex: 3,
        explanation:
          "Never stay alongside a large vehicle such as a truck or bus. The manual's reason is that they have large blind spots and it is hard for their drivers to see you at all.",
        context:
          "The wider rule is to drive where others can see you. Avoid sitting on either side and slightly to the rear of any vehicle, and when you pass, get through the other driver's blind spot as quickly as you can.",
        trap: "Matching speed feels stable and is what keeps you parked in the blind spot. The instruction is to speed up or drop back, not to hold station.",
        excerptKey: "blind-spot-large-vehicle",
        sourceLabel: "New Mexico Driver Manual - Letting Others Know You Are There",
        sourceUrl: hb(19),
      },
      {
        id: "nm_s5_24",
        topic: "safety",
        question:
          "You are the first driver at a crash scene and there are power lines down across the road. What does the manual tell you to do?",
        choices: [
          "Move them to the roadside with a dry stick",
          "Drive over them slowly",
          "Cover them with a blanket",
          "Do not go near them",
        ],
        correctIndex: 3,
        explanation:
          "Do not go near them. It is one of the five instructions in the manual's list for the accident scene, alongside getting your own vehicle off the road and not standing or walking in traffic lanes.",
        context:
          "The other two are about fire: turn off the ignition of wrecked vehicles and do not smoke around them, because fuel could have spilled. Then use flares or other warning devices so approaching traffic knows what is ahead.",
        trap: "A dry stick and rubber-soled shoes are folklore, not procedure. The manual's instruction here has no technique attached to it.",
        excerptKey: "accident-turn-off-ignition",
        sourceLabel: "New Mexico Driver Manual - At the accident scene",
        sourceUrl: hb(34),
      },
      {
        id: "nm_s5_25",
        topic: "licensing",
        question:
          "Which requirement for an unrestricted New Mexico license relates to the twelve months of the provisional period specifically?",
        choices: [
          "You must have driven at least 200 hours during it",
          "You must not have moved out of state during it",
          "You must have renewed the provisional license once",
          "You must not have been adjudicated guilty of, or have pending, an offense involving alcohol or drugs during it",
        ],
        correctIndex: 3,
        explanation:
          "The alcohol and drug condition is tied to the provisional period itself. Section 66-5-5 requires that the applicant has not been adjudicated for an alcohol or drug offense in the twelve months immediately preceding the application and has none pending.",
        context:
          "The manual lists four conditions for the unrestricted license: twelve months on the provisional license, no traffic violation conviction in the preceding 90 days, no traffic violations pending, and no alcohol or drug offense during the provisional period.",
        trap: "There is no additional practice-hour requirement at this stage. The fifty hours belong to the step before, when you applied for the provisional license.",
        excerptKey: "unrestricted-no-alcohol",
        sourceLabel: "New Mexico Driver Manual - Unrestricted Driver License",
        sourceUrl: hb(2),
      },
      {
        id: "nm_s5_26",
        topic: "signs",
        question:
          "You reach a railroad crossing where the bell is still sounding but the train has gone past. What does the manual say?",
        choices: [
          "Cross once you can see the tracks are clear",
          "Do not cross until the bell or horn has stopped",
          "Cross if the gate has lifted, whatever the bell is doing",
          "Cross only if there is a single track",
        ],
        correctIndex: 1,
        explanation:
          "Do not cross until the bell or horn has stopped. The signal is still telling you something, and at a multi-track crossing it may be telling you about a second train.",
        context:
          "The manual makes the second-train point twice. Crossings with more than one track often post a sign showing the number of tracks, but not all of them do, so you check for a second track yourself, and you wait until the passing train is well down the line before starting across.",
        trap: "A lifted gate and a clear view are not the whole signal. The audible warning is part of the same system and it is still running.",
        excerptKey: "rr-bell",
        sourceLabel: "New Mexico Driver Manual - Railroad Crossing Warning Signs",
        sourceUrl: hb(6),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_27",
        topic: "rightOfWay",
        question:
          "You are turning left at a busy intersection and there is a gap in the oncoming traffic. What does the manual tell you to check before you commit?",
        choices: [
          "Only that the gap is large enough",
          "Only that the light is still green",
          "The street you are turning into, so you are not left stranded in the path of oncoming traffic",
          "The vehicle behind you, in case it is also turning",
        ],
        correctIndex: 2,
        explanation:
          "You look into the street you are turning into to make sure no vehicles or pedestrians are in your path. A blocked exit leaves you stopped across the oncoming lanes.",
        context:
          "The manual gives the whole sequence: find a safe gap, look at the street you are entering, then look one more time in the direction of oncoming traffic before you turn. The last look is the one that catches the car that appeared while you were looking away.",
        trap: "A gap that is big enough to move into is not the same as a gap that is big enough to clear. Where you are going matters as much as what is coming.",
        excerptKey: "left-turn-gap",
        sourceLabel: "New Mexico Driver Manual - Scanning, Intersections",
        sourceUrl: hb(16),
      },
      {
        id: "nm_s5_28",
        topic: "speed",
        question:
          "How does the New Mexico Driver Manual describe the maximum posted speed limit?",
        choices: [
          "The speed you should aim for in normal conditions",
          "The speed below which you cannot be cited",
          "The average speed of traffic on that road",
          "A figure that should be driven only in ideal driving conditions",
        ],
        correctIndex: 3,
        explanation:
          "The manual says the maximum limit should be driven only in ideal driving conditions, and that you must reduce speed when conditions require it. The examples given are a slippery road, rain, snow, ice and fog.",
        context:
          "Section 66-7-301 puts the same duty in law: in every event speed must be controlled as necessary to avoid colliding with a person, vehicle or other conveyance on or entering the highway.",
        trap: "Driving the posted number in bad weather is not automatically legal. Both the manual and the statute treat the posted figure as a ceiling for the best case.",
        excerptKey: "speed-ideal-conditions",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Speed Limit Signs",
        sourceUrl: hb(6),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_29",
        topic: "rules",
        question:
          "Another driver is about to pull out of a side street between you and the corner where you plan to turn. What does the manual say about your turn signal?",
        choices: [
          "Signal earlier than usual so they see you clearly",
          "Wait until you have passed them before you signal",
          "Signal and flash your headlights",
          "Do not signal at all until you begin the turn",
        ],
        correctIndex: 1,
        explanation:
          "Wait until you have passed the vehicle, then signal. An early signal can make that driver think you intend to turn where they are, and pull into your path.",
        context:
          "It is the one place the manual asks you to signal later rather than earlier. Everywhere else the instruction is to signal at least 100 feet ahead and to signal every time you change direction, even when you cannot see anyone.",
        trap: "'Always signal early' is a good habit with exactly one documented exception in New Mexico, and this is it.",
        excerptKey: "signal-when",
        sourceLabel: "New Mexico Driver Manual - Letting Others Know What You Are Doing",
        sourceUrl: hb(19),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_30",
        topic: "signals",
        question:
          "You are stopped at a red light with a green arrow showing for a left turn. What does the manual say a green arrow means?",
        choices: [
          "You can safely turn in the direction of the arrow, with no oncoming or crossing traffic while it is green",
          "You may turn after yielding to oncoming traffic",
          "You may turn only if no pedestrian is present",
          "The arrow is advisory and the red still governs",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow is a protected turn. The manual says there should be no oncoming or crossing traffic while the arrow is green.",
        context:
          "The protection is not permanent. When the arrow turns yellow the protection is ending, and you prepare to stop and give the right of way to oncoming traffic before turning.",
        trap: "Protected does not mean nobody is there. The manual still asks you to watch for pedestrians crossing in front of your vehicle when you turn either way.",
        excerptKey: "green-arrow",
        sourceLabel: "New Mexico Driver Manual - Traffic Signals",
        sourceUrl: hb(4),
      },
      {
        id: "nm_s5_31",
        topic: "safety",
        question:
          "It has started to rain after a long hot dry spell. What does the manual warn about the first few minutes?",
        choices: [
          "Visibility drops faster than in normal rain",
          "Standing water collects more quickly",
          "Tires cool and lose pressure",
          "The pavement can be very slippery because heat brings oil in the asphalt to the surface",
        ],
        correctIndex: 3,
        explanation:
          "Heat draws the oil in the asphalt up to the surface, and the road stays more slippery until the rain has washed it off. The manual gives the first few minutes as the dangerous window.",
        context:
          "It is one of four slippery-road clues the manual lists: shady spots on cold wet days, bridge and overpass decks, ice near the freezing point being wetter and more slippery than ice well below it, and the first rain on a hot day.",
        trap: "The instinct is that a light first rain is the safest part of a storm. On hot asphalt it is the most slippery part.",
        excerptKey: "rain-hot-day",
        sourceLabel: "New Mexico Driver Manual - Adjusting to Road Conditions, Slippery roads",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "nm_s5_32",
        topic: "sharing",
        question:
          "You are driving at dusk on a rural New Mexico highway and a deer crosses ahead of you. What does the manual tell you to expect?",
        choices: [
          "The deer will move out of your way if you sound the horn",
          "Where one animal is crossing, there may be more",
          "Deer only cross at marked animal crossing signs",
          "A single deer poses no risk to a modern vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Where one animal is crossing, there may be more. The manual also tells you to assume animals will not get out of your way, and to be especially watchful at dawn, dusk and the first few hours after dark.",
        context:
          "New Mexico treats this as a major hazard rather than a footnote. It reports thousands of accidents a year between large animals and vehicles, with people hurt or killed, and it names deer, elk, pronghorn antelope, black bears and cougars.",
        trap: "Animal crossing signs mark places where wildlife has been hit before. They do not mark the only places wildlife crosses.",
        excerptKey: "wildlife-more-than-one",
        sourceLabel: "New Mexico Driver Manual - To Avoid Hurting an Animal",
        sourceUrl: hb(21),
      },
      {
        id: "nm_s5_33",
        topic: "impairment",
        question:
          "What does the New Mexico Driver Manual say sobers a person up?",
        choices: [
          "Coffee and fresh air",
          "A cold shower",
          "Time, and nothing else",
          "Exercise",
        ],
        correctIndex: 2,
        explanation:
          "Time is the only thing that will sober you up. The manual names coffee, fresh air, exercise and cold showers and says none of them help.",
        context:
          "The rate is fixed: your body gets rid of one alcoholic drink per hour, and there is no way to speed it up. That is why the manual's practical advice is a designated driver, public transportation or a cab.",
        trap: "Each of the three wrong answers here is a remedy the manual explicitly lists and rejects, which is why they keep appearing on tests.",
        excerptKey: "one-drink-per-hour",
        sourceLabel: "New Mexico Driver Manual - Effects of Alcohol",
        sourceUrl: hb(29),
      },
      {
        id: "nm_s5_34",
        topic: "parking",
        question:
          "Under Section 66-7-351, within how many feet of a fire station driveway on the same side of the street may you not park?",
        choices: [
          "Ten feet",
          "Fifteen feet",
          "Twenty feet",
          "Thirty feet",
        ],
        correctIndex: 2,
        explanation:
          "Twenty feet on the same side of the street, and seventy-five feet on the opposite side where it is properly signposted. The Driver Manual gives the same two numbers.",
        context:
          "The 75-foot figure on the far side exists because a fire truck swinging out of a station needs the width of the whole street, not just its own lane.",
        trap: "Fifteen feet is the fire hydrant. The fire station driveway is a different rule with a different number.",
        excerptKey: "no-park-fire-station",
        sourceLabel: "New Mexico Driver Manual - Parking, No-Parking Zones",
        sourceUrl: hb(13),
      },
      {
        id: "nm_s5_35",
        topic: "emergencies",
        question:
          "You are broken down on a highway shoulder and you have flares in the car. Where does the manual tell you to put them?",
        choices: [
          "Alongside the vehicle on the traffic side",
          "In front of the vehicle to light the road ahead",
          "On the roof of the vehicle",
          "Behind the vehicle, so approaching drivers can change lanes if they need to",
        ],
        correctIndex: 3,
        explanation:
          "Behind the vehicle. The purpose the manual gives is to warn approaching traffic in time for it to change lanes if it needs to.",
        context:
          "The whole sequence is get off the road and away from traffic if you can, flashers on, stop where drivers have a clear view of you if you cannot get off - not just over a hill or around a curve - and never stand in the roadway.",
        trap: "Placing warnings alongside the car warns nobody. The point is to give the driver who has not yet arrived somewhere to go.",
        excerptKey: "emergency-flashers",
        sourceLabel: "New Mexico Driver Manual - Letting Others Know You Are There",
        sourceUrl: hb(19),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix the MVD knowledge exam actually uses, with no hints and no scaffolding. Seventy percent is the pass mark, so 21 of these 30.",
    questions: [
      {
        id: "nm_s6_01",
        topic: "signs",
        question: "What does a white rectangular sign with black lettering usually carry?",
        choices: [
          "A warning about the road ahead",
          "A direction to a nearby town",
          "A rule you must obey",
          "The location of a service",
        ],
        correctIndex: 2,
        explanation:
          "White with black lettering is the regulatory family. Those signs carry rules about traffic direction, lane use, turning, speed and parking.",
        context:
          "The manual groups signs by job: warning signs are yellow diamonds, work area signs are orange, regulatory signs are white, red or black in square, rectangular or special shapes, destination signs are green or brown, and service signs are blue.",
        trap: "Color is the fastest read on a sign you meet at speed, and white is the one that means an enforceable rule.",
        excerptKey: "regulatory-signs",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Regulatory Signs",
        sourceUrl: hb(6),
      },
      {
        id: "nm_s6_02",
        topic: "rightOfWay",
        question:
          "At an intersection with no signs or signals, two vehicles arrive together. Who goes first?",
        choices: [
          "The vehicle on the right",
          "The vehicle on the left",
          "The vehicle already indicating",
          "The vehicle travelling faster",
        ],
        correctIndex: 0,
        explanation:
          "You yield to vehicles coming from the right at an intersection with no stop sign, yield sign or traffic signal.",
        context:
          "The right-hand rule also breaks ties at a four-way stop, where order of arrival decides first and only a genuine dead heat falls back to which side the other vehicle is on.",
        trap: "Signaling communicates intent. It never creates priority.",
        excerptKey: "row-uncontrolled",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "nm_s6_03",
        topic: "speed",
        question: "What is the maximum speed in a New Mexico business or residence district unless posted otherwise?",
        choices: ["20 mph", "25 mph", "35 mph", "30 mph"],
        correctIndex: 3,
        explanation:
          "Thirty miles per hour. Both the manual's speed table and Section 66-7-301 give that as the default for a business or residence district.",
        context:
          "The other statutory maximums are 15 passing a properly posted school zone while children are going to or leaving school, 55 on an unposted county road, and 75 as the general maximum.",
        trap: "Twenty-five is the residential default in many other states and it is the wrong answer here.",
        excerptKey: "speed-business",
        sourceLabel: "New Mexico Driver Manual - Speed Limits",
        sourceUrl: hb(12),
      },
      {
        id: "nm_s6_04",
        topic: "safety",
        question: "How many seconds of following distance does New Mexico teach as the baseline?",
        choices: ["Two", "Three", "Four", "Five"],
        correctIndex: 1,
        explanation:
          "Three seconds, and the manual says it works at any speed. Six named situations push it to four.",
        context:
          "You count from the moment the rear of the vehicle ahead passes a fixed point until you reach the same point, using one-thousand-one, one-thousand-two, one-thousand-three.",
        trap: "Four seconds belongs to the merging gap and to the sight-distance rule. Three is the baseline following distance.",
        excerptKey: "three-second-rule",
        sourceLabel: "New Mexico Driver Manual - Sharing Space, Space Ahead",
        sourceUrl: hb(23),
      },
      {
        id: "nm_s6_05",
        topic: "signals",
        question: "What must you do at a steady red arrow?",
        choices: [
          "Turn after yielding to oncoming traffic",
          "Turn after a full stop",
          "Stop, and not go in the direction of the arrow",
          "Proceed with caution",
        ],
        correctIndex: 2,
        explanation:
          "A red arrow means stop, and you cannot go in the direction of the arrow. You may proceed when the red arrow goes off and a green arrow or light comes on.",
        context:
          "Arrows in New Mexico describe protection. Green means protected, yellow means the protection is ending, and red means the movement is barred until the signal changes.",
        trap: "Right on red is a rule about the steady red LIGHT. A red arrow pointing the way you want to go is not the same signal.",
        excerptKey: "red-arrow",
        sourceLabel: "New Mexico Driver Manual - Traffic Signals",
        sourceUrl: hb(4),
      },
      {
        id: "nm_s6_06",
        topic: "parking",
        question: "Which of these does the New Mexico Driver Manual forbid?",
        choices: [
          "Parking within 30 feet of a traffic signal, stop sign or yield sign",
          "Parking on any street with a bus route",
          "Parking facing downhill",
          "Parking within 10 feet of another vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Thirty feet from a traffic signal, stop sign or yield sign is on the manual's no-parking list, and Section 66-7-351 uses the same thirty feet on the approach to a flashing beacon, stop sign or traffic-control signal.",
        context:
          "The manual's version of the list adds the yield sign, which the statute's paragraph does not name. On the rest - hydrants, railroad crossings, fire station driveways, bridges, double parking - the two agree.",
        trap: "Parking downhill is fine. What the manual asks is that you turn the wheels sharply towards the curb so the vehicle rolls away from traffic if it moves.",
        excerptKey: "no-park-signal",
        sourceLabel: "New Mexico Driver Manual - Parking, No-Parking Zones",
        sourceUrl: hb(13),
      },
      {
        id: "nm_s6_07",
        topic: "impairment",
        question: "How long can a New Mexico driver lose their license for refusing a chemical test?",
        choices: [
          "Thirty days",
          "Ninety days",
          "Six months",
          "One year",
        ],
        correctIndex: 3,
        explanation:
          "One year, or until all conditions for reinstatement are met, whichever is later. Refusing also opens the door to an aggravated driving-under-the-influence charge.",
        context:
          "An adult who submits and tests at 0.08 or more faces a six-month revocation for a first result. Refusal therefore carries twice the revocation of a positive test.",
        trap: "Refusing is not a way to avoid the consequence. It is the longer of the two.",
        excerptKey: "refusal-one-year",
        sourceLabel: "New Mexico Driver Manual - Alcohol and The Law",
        sourceUrl: hb(29),
      },
      {
        id: "nm_s6_08",
        topic: "rules",
        question: "When are you permitted to cross a solid yellow line on your side of the road?",
        choices: [
          "To pass a slower vehicle when the oncoming lane is clear",
          "To turn into a driveway, if it is safe to do so",
          "Never, under any circumstances",
          "Whenever traffic is stopped ahead",
        ],
        correctIndex: 1,
        explanation:
          "The manual permits crossing a solid yellow line to turn into a driveway if it is safe. What it forbids is passing when the solid line is on your side.",
        context:
          "Where a solid and a dashed yellow line run together, the dashed one governs your side: if the dashed line is on your side you may pass when it is safe, and if the solid line is on your side you may not.",
        trap: "A clear oncoming lane does not license the pass. The line, not the traffic, decides whether passing is permitted there.",
        excerptKey: "yellow-cross-for-driveway",
        sourceLabel: "New Mexico Driver Manual - Pavement Markings",
        sourceUrl: hb(8),
      },
      {
        id: "nm_s6_09",
        topic: "licensing",
        question: "How long must a New Mexico provisional license be held before an unrestricted license?",
        choices: [
          "Six months",
          "Ninety days",
          "Twelve months",
          "Two years",
        ],
        correctIndex: 2,
        explanation:
          "Twelve months immediately preceding the date of the application, and Section 66-5-8 adds thirty days for each traffic violation committed during that period.",
        context:
          "The permit stage is the six-month one. Six months on the instructional permit, twelve months on the provisional license, and the unrestricted license becomes available at sixteen and a half.",
        trap: "Six months is the permit period, not the provisional one. Getting the two the wrong way round is one of the most common licensing errors.",
        excerptKey: "unrestricted-12-months",
        sourceLabel: "New Mexico Driver Manual - Unrestricted Driver License",
        sourceUrl: hb(2),
      },
      {
        id: "nm_s6_10",
        topic: "sharing",
        question:
          "An average car takes about 400 feet to stop from 55 mph. About how far does a large truck take?",
        choices: [
          "About the same",
          "About 500 feet",
          "About 600 feet",
          "Almost 800 feet",
        ],
        correctIndex: 3,
        explanation:
          "Almost 800 feet, which is roughly double. The manual's practical instruction from that number is not to pull in front of a big rig and then slow down or stop.",
        context:
          "Trucks also need more room to turn and often swing wide to make a right turn, so a left signal on a truck deserves a second look before you commit to passing on that side.",
        trap: "Modern brakes have not closed that gap. A loaded truck's stopping distance is a mass problem, not a technology one.",
        excerptKey: "truck-stopping",
        sourceLabel: "New Mexico Driver Manual - Sharing the Road, Large Tucks and RVs",
        sourceUrl: hb(27),
      },
      {
        id: "nm_s6_11",
        topic: "emergencies",
        question: "What is the manual's first step if your brakes fail?",
        choices: [
          "Turn off the engine",
          "Pump the brake pedal several times",
          "Steer into a barrier to stop the car",
          "Pull the parking brake as hard as you can",
        ],
        correctIndex: 1,
        explanation:
          "Pump the pedal several times, which will often build enough pressure to let you stop. Only then do you move to the parking brake, pulled slowly.",
        context:
          "If neither works, you shift down through the gears and look for a safe place to slow to a stop off the roadway. The manual is clear that you do not then drive the vehicle without brakes.",
        trap: "A hard pull on the parking brake locks the rear wheels and starts a skid, which is why the manual says to pull it slowly and be ready to release it.",
        excerptKey: "brake-failure",
        sourceLabel: "New Mexico Driver Manual - Emergencies, Brake Failure",
        sourceUrl: hb(31),
      },
      {
        id: "nm_s6_12",
        topic: "signs",
        question: "What does an octagonal sign always mean?",
        choices: [
          "Yield",
          "Do not enter",
          "Stop",
          "No passing",
        ],
        correctIndex: 2,
        explanation:
          "Eight sides is reserved for stop, and nothing else uses that shape. A stop sign is red with white letters and requires a full stop at the sign or the stop line.",
        context:
          "Shape carries meaning because it survives conditions that color does not - dirt, snow, glare, or a sign lit only by your headlights.",
        trap: "The downward triangle is yield, and the square with a white bar in a red ball is do not enter. Neither shares the octagon.",
        excerptKey: "stop-sign",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Stop Sign",
        sourceUrl: hb(7),
      },
      {
        id: "nm_s6_13",
        topic: "safety",
        question: "What does the manual tell you to do first if you feel your tires lose traction on water?",
        choices: [
          "Brake gently",
          "Ease your foot off the gas pedal",
          "Steer towards the shoulder",
          "Shift down a gear",
        ],
        correctIndex: 1,
        explanation:
          "Ease off the gas. Then keep the steering wheel straight, and do not try to stop or turn until the tires are gripping the road again.",
        context:
          "The manual's prevention is simpler than the recovery: slow down in the rain or when the road is wet. Most tires hold traction up to about 35 mph on a wet road, and in heavy rain can lose it entirely at about 50.",
        trap: "Braking or steering while the tires are riding on water does nothing until they touch the road again, and then it does too much.",
        excerptKey: "hydroplaning-response",
        sourceLabel: "New Mexico Driver Manual - Adjusting to Road Conditions, Water on the roadway",
        sourceUrl: hb(21),
      },
      {
        id: "nm_s6_14",
        topic: "rules",
        question: "How long must a turn signal run before you turn, under Section 66-7-325?",
        choices: [
          "The last 50 feet",
          "The last three seconds",
          "The last two car lengths",
          "Continuously during not less than the last 100 feet travelled",
        ],
        correctIndex: 3,
        explanation:
          "Continuously during not less than the last one hundred feet travelled by the vehicle before turning. The manual gives the same distance in plainer words.",
        context:
          "The statute also requires that the turn itself be capable of being made with reasonable safety before you start it, and that the signal be given whenever any other traffic may be affected by the movement.",
        trap: "New Mexico measures the signal in distance, not in time or in blinks. One hundred feet at 30 mph is a little over two seconds; at 60 it is barely one.",
        excerptKey: "st-signal-100-feet",
        sourceLabel: "Section 66-7-325 NMSA 1978 - Turning movements and required signals",
        sourceUrl: st(677),
      },
      {
        id: "nm_s6_15",
        topic: "rightOfWay",
        question: "Who must yield when a driver is entering a traffic circle?",
        choices: [
          "The drivers already in the circle",
          "The driver entering the circle",
          "Neither, since traffic circles are uncontrolled",
          "Whoever is in the outside lane",
        ],
        correctIndex: 1,
        explanation:
          "The driver entering yields to drivers already in the circle. You wait for a gap rather than merging into one that is not there.",
        context:
          "New Mexico also calls a traffic circle a rotary traffic island, and requires you to drive on the right side of the island once you are in it.",
        trap: "Circles look uncontrolled and are not. The right-of-way rule is stated explicitly in the manual's right-of-way list.",
        excerptKey: "row-traffic-circle",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "nm_s6_16",
        topic: "speed",
        question: "About how far ahead do a car's headlights let you see, according to the manual?",
        choices: [
          "About 200 feet",
          "About 300 feet",
          "About 400 feet",
          "About 600 feet",
        ],
        correctIndex: 2,
        explanation:
          "About 400 feet, and the manual converts that straight into a speed: you should drive at a speed that lets you stop within that distance, or about 50 mph.",
        context:
          "That is the same 400 feet it gives for reacting and stopping from 50 mph on dry pavement with good tires and brakes. Driving faster than that at night means outdriving your headlights.",
        trap: "High beams reach further than low, but the 400-foot figure is the manual's working number for night driving speed.",
        excerptKey: "headlight-range",
        sourceLabel: "New Mexico Driver Manual - How Well Can You See?, Darkness",
        sourceUrl: hb(23),
      },
      {
        id: "nm_s6_17",
        topic: "impairment",
        question: "What does New Mexico define as one alcoholic drink?",
        choices: [
          "One and a half ounces of 80-proof liquor, 12 ounces of beer, or a 5 ounce glass of wine",
          "Two ounces of liquor, 16 ounces of beer, or 8 ounces of wine",
          "One ounce of liquor, 8 ounces of beer, or 4 ounces of wine",
          "Any drink served in a bar, whatever the measure",
        ],
        correctIndex: 0,
        explanation:
          "One and a half ounces of 80-proof liquor straight or with a mixer, twelve ounces of beer, or a five ounce glass of wine. Those three are equivalent.",
        context:
          "The manual adds the exception that ruins the arithmetic in practice: specialty drinks can hold more alcohol and can be the same as having several normal drinks.",
        trap: "Counting glasses rather than measures is what puts people over. A single large cocktail can be three drinks by this definition.",
        excerptKey: "standard-drink",
        sourceLabel: "New Mexico Driver Manual - Effects of Alcohol",
        sourceUrl: hb(29),
      },
      {
        id: "nm_s6_18",
        topic: "sharing",
        question: "What are sharrows, and what do they mean for a motorist?",
        choices: [
          "Markings that reserve the lane for bicycles only",
          "Markings that direct bicyclists onto the sidewalk",
          "Markings that show where a bicycle lane begins",
          "Shared lane pavement markings - bicyclists are encouraged to take the whole lane and motorists shall yield as needed",
        ],
        correctIndex: 3,
        explanation:
          "Sharrows are shared lane pavement markings, painted where a road is too narrow for side-by-side sharing. They mean riders are encouraged to take the whole travel lane and that motorists shall yield to the bicyclist as needed.",
        context:
          "The manual's instructions to a motorist meeting sharrows are to slow down and yield, to pass only where the road width lets the rider move right, and to try to give at least five feet of clearance when passing.",
        trap: "Sharrows do not reserve the lane. Cars still use it - what changes is who yields to whom while they do.",
        excerptKey: "sharrows",
        sourceLabel: "New Mexico Driver Manual - Sharing the Road, What are sharrows?",
        sourceUrl: hb(26),
      },
      {
        id: "nm_s6_19",
        topic: "signals",
        question: "What does a solid white line between lanes of traffic mean?",
        choices: [
          "Stay in your lane unless a special situation requires a change",
          "Cross freely whenever it is safe",
          "The lane is reserved for buses",
          "Passing is permitted on the left only",
        ],
        correctIndex: 0,
        explanation:
          "You should stay in your lane unless a special situation requires you to change lanes. It is the stronger of the two white markings.",
        context:
          "White separates traffic moving in the same direction, and yellow separates opposing directions. Within white, dashed means change lanes when it is safe.",
        trap: "The absolute prohibition on passing belongs to two solid yellow lines. Solid white is a strong instruction, not a barrier.",
        excerptKey: "white-solid",
        sourceLabel: "New Mexico Driver Manual - Pavement Markings",
        sourceUrl: hb(8),
      },
      {
        id: "nm_s6_20",
        topic: "parking",
        question: "What does a blue curb mean in New Mexico?",
        choices: [
          "Loading zone",
          "Handicap parking only, with a plate, tag or sticker",
          "Short stops only",
          "No parking at any time",
        ],
        correctIndex: 1,
        explanation:
          "Blue is handicap parking, and the manual's no-parking list makes the qualification explicit: you may not park in a space marked for the handicapped unless you have a handicap license plate, tag or sticker.",
        context:
          "The four colors run white for short stops, yellow for a loading zone or another restriction, red for a fire zone with no parking or standing, and blue for handicap parking.",
        trap: "Red, not blue, is the color that bars everyone. Blue bars everyone without the permit.",
        excerptKey: "curb-colors",
        sourceLabel: "New Mexico Driver Manual - Parking",
        sourceUrl: hb(14),
      },
      {
        id: "nm_s6_21",
        topic: "safety",
        question: "How far ahead should you look when driving in city traffic?",
        choices: [
          "At least one block, which is about ten seconds",
          "To the next intersection only",
          "About three seconds ahead",
          "As far as the vehicle in front",
        ],
        correctIndex: 0,
        explanation:
          "At least ten seconds ahead, which the manual translates to about one city block. Looking that far ahead is what gives you time to change lanes rather than brake.",
        context:
          "The manual claims practical benefits beyond safety: less last-minute braking, better fuel use, steadier traffic flow, and straighter steering with less weaving.",
        trap: "Watching the car in front is the habit that produces chain-reaction rear-end collisions, which the manual calls very common.",
        excerptKey: "look-ten-seconds",
        sourceLabel: "New Mexico Driver Manual - Scanning, Look ahead",
        sourceUrl: hb(15),
      },
      {
        id: "nm_s6_22",
        topic: "licensing",
        question:
          "Who must accompany the holder of a New Mexico instructional permit driving a motorcycle?",
        choices: [
          "Nobody - motorcycle permits carry no supervision requirement",
          "A licensed driver 21 or older, following the learner",
          "A parent or guardian in a chase vehicle",
          "A certified instructor only",
        ],
        correctIndex: 1,
        explanation:
          "On a motorcycle the licensed driver follows the learner instead of sitting beside them. The same supervisor qualifications apply: 21 or older and licensed at least three years.",
        context:
          "Section 66-5-8 adds a separate restriction for motorcycle permits: a holder of an instruction permit for a motorcycle shall not carry any other passenger while operating one.",
        trap: "The seat-beside-the-driver requirement is written for cars. The manual carves the motorcycle case out in the same paragraph.",
        excerptKey: "permit-seat",
        sourceLabel: "New Mexico Driver Manual - Instructional Permit",
        sourceUrl: hb(1),
      },
      {
        id: "nm_s6_23",
        topic: "rules",
        question:
          "You are making a right turn. What does the manual tell you to avoid?",
        choices: [
          "Signaling before you slow down",
          "Checking your mirror before the turn",
          "Turning from the lane nearest the curb",
          "Swinging wide to the left before you turn",
        ],
        correctIndex: 3,
        explanation:
          "Avoid swinging wide to the left before turning right. The driver behind you may read it as a lane change or a left turn and try to pass you on the right.",
        context:
          "The other half of the same rule is about the exit. Swinging wide as you complete the turn puts you in the far lane, where drivers already there are not expecting you.",
        trap: "Wide entry feels like it makes a tight corner easier. What it does is open a gap on your right that another driver will use.",
        excerptKey: "right-turn-no-swing",
        sourceLabel: "New Mexico Driver Manual - General Rules, Right turns",
        sourceUrl: hb(10),
      },
      {
        id: "nm_s6_24",
        topic: "emergencies",
        question:
          "You have been involved in a collision. What information does the manual tell you to exchange with the other drivers?",
        choices: [
          "Names only",
          "Name, address, driver license number, vehicle information, and insurance company and policy number if available",
          "Insurance details only",
          "Nothing until the police arrive",
        ],
        correctIndex: 1,
        explanation:
          "The manual's list is name, address, driver license number, vehicle information such as plate, make, model and year, and the insurance company and policy number if available.",
        context:
          "It also asks you to get the names and addresses of everyone involved and any witnesses, to record the damage to the vehicles, and to provide information to police or other emergency officials if they request it.",
        trap: "Waiting for police before exchanging anything can leave you with nothing if the other driver leaves. The duty to exchange does not depend on an officer being present.",
        excerptKey: "accident-exchange",
        sourceLabel: "New Mexico Driver Manual - Report the Accident",
        sourceUrl: hb(34),
      },
      {
        id: "nm_s6_25",
        topic: "signs",
        question:
          "A blue sign with a white symbol appears beside a rural highway. What is it most likely telling you?",
        choices: [
          "A hospital, rest area or gas station is nearby",
          "A curve is coming up",
          "The speed limit is changing",
          "A scenic overlook is ahead",
        ],
        correctIndex: 0,
        explanation:
          "Blue signs mark services - rest areas, gas stations, campgrounds and hospitals among them.",
        context:
          "Destination signs, which are green or brown, are the ones that point to towns, airports, state lines, national parks, historical areas and museums. Blue is reserved for the things a traveller needs rather than the places they are going.",
        trap: "A scenic overlook is a destination and would be signed brown or green, not blue.",
        excerptKey: "service-signs",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Service Signs",
        sourceUrl: hb(8),
      },
      {
        id: "nm_s6_26",
        topic: "sharing",
        question:
          "What does the manual say about children being secured in a vehicle?",
        choices: [
          "They may ride in the front once they can reach the belt",
          "Rear seating is optional if the airbag is switched off",
          "The rear seat is only for children under two",
          "Children should be secured in the rear seat, and never in the front passenger side, especially with an air bag",
        ],
        correctIndex: 3,
        explanation:
          "The manual's instruction is that children should be secured in the rear seat and never in the front passenger side, especially where the vehicle has an air bag, because a deploying bag can injure a child.",
        context:
          "Section 66-7-369 is the operative law and it is stricter than the manual's paragraph: every passenger under eighteen must be properly restrained, children under one year in a rear-facing device in the rear seat, one through four or under forty pounds in a child restraint, and five through six or under sixty pounds in a booster or restraint.",
        trap: "The manual's own age and weight figures - under 24 months or less than 60 pounds - predate the 2005 rewrite of Section 66-7-369. Where the two differ, the statute is the law, and this question asks only about the seating position, which both agree on.",
        excerptKey: "belt-child-rear",
        sourceLabel: "New Mexico Driver Manual - Safety Belts and Child Restraints",
        sourceUrl: hb(3),
        commonlyMissed: true,
      },
      {
        id: "nm_s6_27",
        topic: "signals",
        question:
          "You are already inside an intersection when the light turns yellow. What does the manual tell you to do?",
        choices: [
          "Stop where you are",
          "Reverse out of the intersection",
          "Stop only if you can do so before the crosswalk",
          "Do not stop - continue through the intersection",
        ],
        correctIndex: 3,
        explanation:
          "Do not stop. The manual's instruction is that if you are in the intersection when the yellow comes on, you continue through it.",
        context:
          "The general rule for a steady yellow is to stop if it is safe to do so. The in-the-intersection case is the exception, because stopping inside the box is what blocks the cross traffic when their green arrives.",
        trap: "Backing out of an intersection is doubly wrong - the manual forbids backing in any travel lane except to parallel park.",
        excerptKey: "yellow-in-intersection",
        sourceLabel: "New Mexico Driver Manual - Traffic Signals",
        sourceUrl: hb(4),
      },
      {
        id: "nm_s6_28",
        topic: "rightOfWay",
        question:
          "A pedestrian is standing at the edge of an unmarked crosswalk at an intersection, waiting to cross. What must you do?",
        choices: [
          "Proceed, since the crosswalk is unmarked",
          "Proceed if the pedestrian has not stepped off the curb",
          "Sound your horn to signal them across",
          "Yield to them, because you must yield to pedestrians in or about to enter a crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "You yield. The manual requires you to yield to pedestrians in or about to enter a crosswalk, and it says plainly that not all crosswalks are marked.",
        context:
          "The right-of-way chapter goes further and requires you to yield to a pedestrian even when the pedestrian is not obeying traffic controls, and to do everything you can to avoid striking a pedestrian or another vehicle regardless of the circumstances.",
        trap: "Paint does not create the crosswalk at an intersection. An unmarked crossing carries the same obligation as a painted one.",
        excerptKey: "crosswalk-yield",
        sourceLabel: "New Mexico Driver Manual - Pavement Markings",
        sourceUrl: hb(8),
        commonlyMissed: true,
      },
      {
        id: "nm_s6_29",
        topic: "speed",
        question:
          "What does the manual say about the distance needed to turn, slow or stop as speed rises?",
        choices: [
          "It stays roughly the same up to 50 mph",
          "It rises only when the road is wet",
          "The faster your vehicle is going, the more distance it will take",
          "It depends only on the condition of the brakes",
        ],
        correctIndex: 2,
        explanation:
          "The faster you are going, the more distance it takes to turn, slow or stop. The manual states it as a single line at the end of its section on signaling when you slow down.",
        context:
          "The concrete version is the pair of stopping figures: about 200 feet at 30 mph and about 400 feet at 50, on dry pavement with good tires and brakes. Sixty-seven percent more speed costs you double the distance.",
        trap: "Brake condition matters and it is not the variable in this rule. Speed is.",
        excerptKey: "speed-more-distance",
        sourceLabel: "New Mexico Driver Manual - Letting Others Know What You Are Doing",
        sourceUrl: hb(20),
      },
      {
        id: "nm_s6_30",
        topic: "impairment",
        question:
          "What does the manual say happens on a first DWI conviction in New Mexico, beyond fines and possible jail?",
        choices: [
          "A written warning is placed on the record",
          "The vehicle is impounded for thirty days",
          "The license is surrendered for ninety days with no further conditions",
          "You are ordered into treatment and to install an ignition interlock device on your vehicle",
        ],
        correctIndex: 3,
        explanation:
          "A first conviction brings stiff fines and court costs, possible jail, an order into treatment, and an ignition interlock device on the vehicle. MVD also has the authority to revoke the license.",
        context:
          "Section 66-8-102 fills in the detail: not more than ninety days imprisonment or a fine of not more than five hundred dollars or both, at least twenty-four hours of community service, and a court-ordered screening program and DWI school.",
        trap: "The interlock is not reserved for repeat offenders in New Mexico. It comes with the first conviction.",
        excerptKey: "dwi-first-conviction",
        sourceLabel: "New Mexico Driver Manual - Alcohol and The Law",
        sourceUrl: hb(29),
      },
    ],
  },
];
