import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Ohio Driver Manual - the publication
// the BMV still lists as the Digest of Ohio Motor Vehicle Laws, form HSY 7607,
// revision 10/25 - plus the Ohio BMV's own Driver License & ID Cards page for
// the knowledge-test format, the TIPIC rules and the probationary licence
// restrictions, and three sections of the Ohio Revised Code where the manual is
// silent. Questions are original. Explanations, context notes and trap notes
// are written from scratch; the deep link is there so the learner reads Ohio's
// own authoritative wording on the state's site.
//
// Ohio says OVI - operating a vehicle impaired - not DUI or DWI. The wording is
// used deliberately throughout, because that is the term on the real test.
const MAN = "https://dam.assets.ohio.gov/image/upload/publicsafety.ohio.gov/hsy7607.pdf";

export const ohioSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Ohio Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Ohio: what the shapes and colours mean, who goes first, and the handful of numbers the knowledge test expects you to know cold.",
    questions: [
      {
        id: "oh_s1_01",
        topic: "signs",
        question:
          "You approach an eight-sided red sign at an intersection. What does Ohio require of you?",
        choices: [
          "Bring the vehicle to a complete stop before entering",
          "Stop only when a pedestrian is waiting to cross",
          "Slow to walking pace and continue if nothing is coming",
          "Yield only to traffic already inside the intersection",
        ],
        correctIndex: 0,
        explanation:
          "The octagon carries one message and one only: every vehicle in that lane stops before it proceeds. You stop behind the stop line or crosswalk, then move off when the way is clear.",
        context:
          "Ohio signs carry meaning in shape and colour as well as words, so you can start reacting before you can read them. An octagon means stop, a downward triangle means yield, a yellow diamond warns of something ahead, and orange means roadwork. Learning the shape and colour system is worth more marks than memorising individual signs, because the test shows signs you have never met and expects you to reason from the shape.",
        trap:
          "Slowing to walking pace is the rolling stop that gets people ticketed. Ohio wants the vehicle stopped, not merely slow, no matter how empty the road looks.",
        excerptKey: "stop-sign-caption",
        sourceLabel: "Ohio Driver Manual - Traffic Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_02",
        topic: "signals",
        question: "A traffic light ahead of you is showing a steady red. What must you do?",
        choices: [
          "Stop and wait behind the stop line until the light turns green",
          "Stop well back so you can see the whole intersection",
          "Stop only if another vehicle is approaching",
          "Slow down and proceed if the intersection is empty",
        ],
        correctIndex: 0,
        explanation:
          "A steady red means stop before entering the intersection, and you wait behind the stop line, crosswalk or intersection until the light turns green. A permitted turn on red is the one exception, and it still starts with a full stop.",
        context:
          "Ohio's signal colours run steady red (stop), steady yellow (the light is about to change, so use caution and prepare to stop), and steady green (go if the intersection is clear). The flashing versions change the meaning: flashing red behaves like a stop sign, flashing yellow means slow down and proceed with caution. A signal that is completely dark is treated as a four-way stop.",
        trap:
          "Stopping well back from the line feels safer but can leave you invisible to the sensors that trigger the light, so you sit through cycle after cycle.",
        excerptKey: "signal-red",
        sourceLabel: "Ohio Driver Manual - Traffic Signals",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_03",
        topic: "rules",
        question:
          "How far before a turn does Ohio require you to switch on your turn signal?",
        choices: ["25 feet", "50 feet", "75 feet", "100 feet"],
        correctIndex: 3,
        explanation:
          "The signal goes on at least 100 feet before you turn. That is roughly six car lengths, and it is the distance the manual states both for turning and for changing direction generally.",
        context:
          "Signalling is about giving other people time to react, so the distance is a minimum rather than a target. The same 100-foot rule covers lane changes and merges. You can give the signal mechanically or with the correct hand and arm signal, and you are expected to cancel it afterwards so nobody misreads your intentions.",
        trap:
          "50 feet is the figure that feels right at low speed, and it is what most drivers actually do at a junction they are already stopped at.",
        excerptKey: "turn-signal-100-feet",
        sourceLabel: "Ohio Driver Manual - Turn Signal",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_04",
        topic: "rightOfWay",
        question:
          "Two cars reach a four-way intersection at exactly the same moment. Who has the right of way?",
        choices: [
          "The faster-moving driver",
          "The driver going straight ahead",
          "The driver on the right",
          "The driver on the larger road",
        ],
        correctIndex: 2,
        explanation:
          "When two drivers arrive together at a four-way intersection, you yield to the driver on your right. If one of you clearly arrived first, that driver goes first and the tie-break never comes up.",
        context:
          "Ohio's right-of-way list is a priority order rather than a set of separate rules: the driver already there or arriving first, then oncoming traffic when you are turning left, then the driver on your right in a tie. You also yield when entering a highway from a driveway or private road, when you are on an entrance ramp, and to pedestrians, emergency vehicles and funeral processions.",
        trap:
          "Right of way is never something you take. Even when the rule is on your side, you are expected to give way rather than insist on it if the other driver moves first.",
        excerptKey: "row-driver-on-right",
        sourceLabel: "Ohio Driver Manual - Right-of-Way",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_05",
        topic: "speed",
        question:
          "On a street inside an Ohio municipal corporation with no sign posted, what speed limit applies?",
        choices: ["15 mph", "25 mph", "35 mph", "45 mph"],
        correctIndex: 1,
        explanation:
          "Streets within a municipal corporation carry a 25 mph limit unless a sign says otherwise. Alleys inside the same municipality are lower again at 15 mph.",
        context:
          "Ohio publishes standard limits by road type so an unposted road is never guesswork: 15 mph in alleys, 20 mph in school zones during the restricted hours, 25 mph on municipal streets, 35 mph on state routes and through highways inside a municipality outside a business district, 50 mph on state routes inside a municipality outside an urban district, 55 mph on freeways with paved shoulders inside a municipality, and 70 mph on rural freeways. A posted sign always beats the standard figure.",
        trap:
          "35 mph is the figure for state routes running through a town, which is exactly the road most people picture when they hear 'in town'.",
        excerptKey: "speed-by-road-type",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Speed Limits",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_06",
        topic: "safety",
        question:
          "Ohio's mandatory safety belt law applies to which occupants of a passenger vehicle?",
        choices: [
          "The driver and front-seat occupants",
          "Only the driver",
          "The driver and any passenger under 21",
          "Only occupants who are not covered by an air bag",
        ],
        correctIndex: 0,
        explanation:
          "Ohio requires the driver and front-seat occupants of most passenger vehicles to wear belts. If the driver is under 18 the rule tightens: everyone in the vehicle must be belted and the number of occupants cannot exceed the belts originally fitted.",
        context:
          "Air bags do not replace belts. The manual describes air bags as supplemental restraints that work best in combination with a belt, and it spells out how the belt should sit: across the bony parts of the shoulder and hips, never under the arm or behind the back, with the lap belt snug and low.",
        trap:
          "Assuming a belt is unnecessary in an air-bag-equipped car has it backwards. The bag is designed around the belt holding you in position.",
        excerptKey: "safety-belt-law",
        sourceLabel: "Ohio Driver Manual - Safety Restraints",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_07",
        topic: "signs",
        question: "What does a yellow diamond-shaped sign tell you?",
        choices: [
          "You are entering a work zone",
          "A service or facility is nearby",
          "There is possible danger ahead",
          "A traffic law applies at this point",
        ],
        correctIndex: 2,
        explanation:
          "Yellow diamonds are warning signs. They tell you about a hazard or a change in the road ahead so you can slow down and prepare before you reach it.",
        context:
          "Ohio groups signs by purpose. Regulatory signs give notice of traffic laws. Prohibitory signs carry a red circle with a slash, which stands for the word NO. Warning signs are diamond-shaped and usually yellow with black lettering or symbols. Work zone signs are orange. Guide signs are square or rectangular in green, brown or blue.",
        trap:
          "Orange also warns you about something ahead, but it means roadwork specifically. Colour is what separates the two, not shape.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Ohio Driver Manual - Warning Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_08",
        topic: "sharing",
        question:
          "How much space must an Ohio driver leave when passing a bicycle?",
        choices: [
          "One foot",
          "Two feet",
          "At least three feet",
          "A full lane width",
        ],
        correctIndex: 2,
        explanation:
          "Ohio sets a safety zone of at least three feet between a motor vehicle and a bicycle. That is a minimum, and more is expected when the road surface is poor.",
        context:
          "Bicycles count as vehicles on Ohio roadways, so they ride with traffic rather than against it and obey the same signs, signals and markings you do. As a driver you are expected to slow down when approaching or passing a cyclist, avoid sounding your horn close to one, pass only when it can be done safely, and never force a cyclist off the road.",
        trap:
          "A full lane width is the rule for motorcycles, which are entitled to use the whole lane. For bicycles the stated figure is three feet.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Ohio Driver Manual - Bicyclists",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_09",
        topic: "licensing",
        question:
          "What is the earliest age at which you can take the Ohio knowledge test?",
        choices: [
          "15 years and six months",
          "15 years and nine months",
          "16 years",
          "16 years and six months",
        ],
        correctIndex: 0,
        explanation:
          "At 15 years and six months you meet the minimum age to take the vision screening and the knowledge test, which is the first step toward a temporary instruction permit identification card.",
        context:
          "Passing the test does not hand you a permit. You then have 60 days to buy the TIPIC at a deputy registrar licence agency, and if you miss that window you start again with the vision screening and the knowledge test. An applicant under 18 needs a parent or guardian present to co-sign the application.",
        trap:
          "16 is when the passenger-seat rules change, not when testing begins, which is why it is the age people quote for the permit.",
        excerptKey: "minimum-age-15-6",
        sourceLabel: "Ohio Driver Manual - Vision Screening and Knowledge Testing",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_10",
        topic: "signals",
        question: "A traffic signal ahead of you is flashing red. What does it require?",
        choices: [
          "Treat it as a green light for the busier road",
          "Come to a complete stop, then proceed when clear",
          "Wait for the signal to resume normal operation",
          "Slow down and continue without stopping",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red is a stop sign in light form. You stop behind the stop line, crosswalk or intersection, check that nothing is crossing your path, and then go.",
        context:
          "Flashing signals come in a matched pair. Flashing red means stop and yield to any traffic that does not have to stop. Flashing yellow means slow down and proceed with caution, prepared to stop for traffic that may enter the intersection. Neither is a fault in the signal, so waiting for the lights to change simply blocks the junction.",
        trap:
          "Flashing red is the one people treat as a yield, which turns a required stop into a rolling one.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Ohio Driver Manual - Traffic Signals",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_11",
        topic: "rules",
        question:
          "Unless a sign forbids it, what does Ohio allow at a steady red light?",
        choices: [
          "A right turn without stopping if nothing is coming",
          "A left turn from any lane",
          "Nothing until the light turns green",
          "A right turn after a complete stop",
        ],
        correctIndex: 3,
        explanation:
          "A right turn on red is permitted unless a sign specifically prohibits it, but only after a complete stop and only once all crossing traffic and every pedestrian has cleared the intersection.",
        context:
          "Ohio also permits a left turn on red, but under much tighter conditions: from the extreme left lane of a one-way street onto another one-way street, and again only where no sign forbids it. Both permissions vanish the moment a NO TURN ON RED sign is posted, and both start with a full stop rather than a roll.",
        trap:
          "Turning without stopping because the way looks clear is the most-cited version of this rule and the most-ticketed. The stop is not optional.",
        excerptKey: "right-turn-on-red",
        sourceLabel: "Ohio Driver Manual - Turning on a Red Traffic Signal",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_12",
        topic: "parking",
        question:
          "When you park parallel at a kerb in Ohio, how close to the kerb must the vehicle be?",
        choices: [
          "Within 6 inches",
          "Within 12 inches",
          "Within 18 inches",
          "Within 24 inches",
        ],
        correctIndex: 1,
        explanation:
          "A parked vehicle must sit parallel to the kerb and no more than 12 inches from it, facing the direction traffic runs on that side of the street.",
        context:
          "On a one-way street the rule relaxes slightly: you may park against either kerb, still parallel and still within 12 inches. Ohio also bans parking within 20 feet of an intersection or crosswalk, within 10 feet of a fire hydrant, within one foot of another parked vehicle, in front of a driveway, or on a sidewalk.",
        trap:
          "Facing the wrong way is a violation even when the car is neatly against the kerb, because the rule covers direction as well as distance.",
        excerptKey: "parking-direction-12-inches",
        sourceLabel: "Ohio Driver Manual - Parking",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_13",
        topic: "signs",
        question:
          "A sign shows a bicycle inside a red circle with a diagonal slash. What does it mean?",
        choices: [
          "Watch for cyclists crossing",
          "A bicycle lane begins here",
          "Cyclists must dismount",
          "Bicycles are not permitted",
        ],
        correctIndex: 3,
        explanation:
          "The red circle with a slash stands for the word NO, so whatever the sign pictures is the thing that is prohibited. Here that is bicycles.",
        context:
          "Once you know the symbol you can read prohibitory signs you have never seen. The same circle and slash produce NO LEFT TURN, NO U TURN and NO RIGHT TURN. It is a different family from the yellow diamond warning signs, which show a hazard rather than a ban - a bicycle on a yellow diamond warns of a bicycle crossing.",
        trap:
          "A bicycle symbol on a yellow diamond is a warning about cyclists ahead. Same picture, opposite instruction, and the colour is what tells you which is which.",
        excerptKey: "prohibitory-signs",
        sourceLabel: "Ohio Driver Manual - Prohibitory Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_14",
        topic: "impairment",
        question:
          "At what blood-alcohol concentration is it illegal for a driver of any age to operate a vehicle in Ohio?",
        choices: [".02%", ".04%", ".06%", ".08%"],
        correctIndex: 3,
        explanation:
          "The general limit is .08 percent at any age. Commercial drivers are held to .04 percent, and anyone under 21 is at .02 percent.",
        context:
          "Ohio calls the offence OVI - operating a vehicle impaired - not DUI or DWI. A driver can be convicted on the arresting officer's observations as well as a chemical test, so being below a number is not the same as being safe or legal. Refusing the chemical test carries its own automatic suspension.",
        trap:
          ".02 is the under-21 figure. It is the one people remember from the zero-tolerance messaging and then apply to everyone.",
        excerptKey: "bac-limits",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Alcohol and the Law",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_15",
        topic: "rightOfWay",
        question:
          "You are pulling out of a private driveway onto a public road. Who has the right of way?",
        choices: [
          "Whoever reaches the junction first",
          "You, once your front wheels are on the road",
          "Drivers already on the public road",
          "Neither party; both must stop",
        ],
        correctIndex: 2,
        explanation:
          "Traffic already on the public highway has priority over anyone entering from a driveway or private road. You wait for a gap rather than forcing one.",
        context:
          "Ohio adds a second requirement in built-up areas: when you emerge from an alley, driveway or private road in a business or residential district you must stop at the sidewalk, or before the roadway if there is no sidewalk, and yield to any pedestrian on it. The pedestrian comes first, then the traffic on the road.",
        trap:
          "Arriving first counts at an intersection of two public roads. It carries no weight at all when you are the one joining from private property.",
        excerptKey: "row-driveway",
        sourceLabel: "Ohio Driver Manual - Right-of-Way",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_16",
        topic: "safety",
        question:
          "What following distance behind the vehicle ahead does the Ohio manual recommend in normal conditions?",
        choices: [
          "Four seconds, or one vehicle length for every 10 mph",
          "Two seconds regardless of speed",
          "One vehicle length regardless of speed",
          "Six seconds at any speed",
        ],
        correctIndex: 0,
        explanation:
          "Ohio asks for a minimum of one vehicle length for every 10 mph of travel, or four seconds between you and the vehicle ahead - whichever way you prefer to measure it.",
        context:
          "You test it by picking a fixed object such as a sign or pole: when the vehicle ahead passes it, start counting, and if you reach the object before four seconds you are too close. Ohio wants that interval increased when visibility is poor, at night, on slippery roads, and behind large vehicles or anything that has to stop at railroad crossings.",
        trap:
          "The two-second rule is the one most people were taught. Ohio's stated figure is four, and the gap matters most in exactly the conditions where drivers shrink it.",
        excerptKey: "following-distance-four-seconds",
        sourceLabel: "Ohio Driver Manual - Space to the Front",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_17",
        topic: "signs",
        question: "What does an orange background on a road sign tell you?",
        choices: [
          "The route is a state highway",
          "You are approaching roadwork",
          "The road is closed to through traffic",
          "A recreation area is ahead",
        ],
        correctIndex: 1,
        explanation:
          "Orange with black letters or symbols is Ohio's work zone colour. It tells you roadwork is under way and that you should reduce speed and watch for workers and equipment.",
        context:
          "The colour code does a lot of work on the test. Red is stop or prohibition, yellow is general warning, orange is work zones, green, brown and blue are guide information, and white with black is regulatory. In a work zone a flagger's instructions override the signs, and speeding there can carry doubled fines and jail time.",
        trap:
          "Brown is the recreation and historic colour. It is the one people reach for whenever a sign is neither yellow nor green.",
        excerptKey: "work-zone-sign-color",
        sourceLabel: "Ohio Driver Manual - Work Zones",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_18",
        topic: "rules",
        question:
          "What does a broken white line between two lanes of traffic tell you?",
        choices: [
          "Traffic on the far side runs the opposite way",
          "The lane to your right is reserved for buses",
          "You must stay in your lane until the line becomes solid",
          "Traffic beside you runs the same way and you may change lanes",
        ],
        correctIndex: 3,
        explanation:
          "White lines separate traffic travelling in the same direction, and a broken white line means you may cross it to change lanes when it is safe.",
        context:
          "Colour tells you direction and the pattern tells you permission. White separates same-direction traffic; yellow separates opposing traffic. A solid double yellow means stay right of it apart from turning left or passing a slow-moving vehicle. Where one yellow line is solid and the other broken, only the side with the broken line may pass.",
        trap:
          "Yellow is the colour that signals oncoming traffic. Reading a white line as a centre line is the mistake that puts drivers into the wrong lane on unfamiliar roads.",
        excerptKey: "markings-white",
        sourceLabel: "Ohio Driver Manual - Lane Pavement Markings",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_19",
        topic: "sharing",
        question:
          "An ambulance approaches with flashing lights and a siren while you are driving. What must you do?",
        choices: [
          "Pull to the right side of the road and stop",
          "Speed up to clear the intersection ahead",
          "Stop where you are, whatever lane you are in",
          "Move to the left lane and slow down",
        ],
        correctIndex: 0,
        explanation:
          "You pull quickly and safely to the right side of the road and stop, avoiding blocking intersections, and stay there until the emergency vehicle has passed.",
        context:
          "The requirement runs until the vehicle has gone by or an officer directs you otherwise. It does not apply to traffic travelling in the opposite direction on a divided highway, where the median already separates you. A stopped emergency vehicle triggers a different rule entirely - Ohio's Move Over law.",
        trap:
          "Stopping dead in your lane feels obedient but leaves the emergency vehicle nowhere to go. The instruction is to move right first, then stop.",
        excerptKey: "emergency-vehicle-pull-right",
        sourceLabel: "Ohio Driver Manual - Emergency Vehicles",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_20",
        topic: "speed",
        question:
          "What speed limit applies in an Ohio school zone during the restricted hours?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 1,
        explanation:
          "School zones drop to 20 mph during recess and while children are arriving at or leaving school during normal hours of operation.",
        context:
          "The limit is time-bound rather than permanent, which is why the sign reads as a speed limit during restricted hours. Beyond the posted zone, Ohio expects a slower speed whenever the lights are flashing or children are present, and a crossing guard's instructions at a school intersection must be obeyed.",
        trap:
          "25 mph is the ordinary municipal street limit, so drivers who know that number apply it to the school zone as well.",
        excerptKey: "school-zone-sign-caption",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Speed Limits",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_21",
        topic: "signals",
        question: "A steady yellow light appears as you approach an intersection. What does it mean?",
        choices: [
          "Speed up to clear the intersection",
          "The light is about to turn red; prepare to stop",
          "The signal is faulty; treat it as a stop sign",
          "Traffic from the side street is being released",
        ],
        correctIndex: 1,
        explanation:
          "A steady yellow tells you the colour is about to change to red. You use caution and prepare to stop rather than treating it as extra green time.",
        context:
          "Ohio's phrasing is deliberately about preparation. If you are so close that stopping would be unsafe or would put you in the intersection, you continue through, but the default response to yellow is to slow. Accelerating on yellow is a common cause of collisions with vehicles that begin moving on their own green.",
        trap:
          "Treating yellow as a signal to hurry is exactly the behaviour the wording is written against, and it is the reason people get caught in the intersection when red arrives.",
        excerptKey: "signal-yellow",
        sourceLabel: "Ohio Driver Manual - Traffic Signals",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_22",
        topic: "emergencies",
        question:
          "A power cut has left the traffic signals at a busy junction completely dark. How do you proceed?",
        choices: [
          "Proceed without stopping if the way is clear",
          "Wait for a police officer before crossing",
          "Treat the intersection as a four-way stop",
          "Give priority to the larger road",
        ],
        correctIndex: 2,
        explanation:
          "By law a non-working traffic signal is treated as a four-way stop, unless a law enforcement officer is there directing traffic. You stop, then move through carefully.",
        context:
          "The same result applies to any signal that is out of order, not just one knocked out by a storm. The manual is blunt about the risk: proceed carefully because other drivers may not stop. Where an officer is directing traffic, the officer's instructions override the signals entirely.",
        trap:
          "Giving the bigger road priority is what most drivers actually do at a dark signal, and it has no basis in Ohio law.",
        excerptKey: "signal-outage-four-way",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Inoperable Traffic Signals",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_23",
        topic: "signs",
        question:
          "You see a downward-pointing triangle with a red border. What does it require?",
        choices: [
          "A full stop at all times",
          "Merging traffic ahead",
          "Stop only if other traffic is affected, and yield to oncoming traffic",
          "The road ahead narrows",
        ],
        correctIndex: 2,
        explanation:
          "The inverted triangle is the yield sign. You stop only if other traffic would be affected, and you give way to all oncoming traffic before proceeding.",
        context:
          "The difference between stop and yield is a difference in default. At a stop sign the vehicle stops every time. At a yield you slow, look and give way, stopping only when the traffic you are joining requires it. Both shapes are unique to their message, so you can identify them from behind or in poor light.",
        trap:
          "Treating a yield as a stop wastes nothing but time, but treating it as a free pass is the version that causes collisions where two roads merge.",
        excerptKey: "yield-sign-caption",
        sourceLabel: "Ohio Driver Manual - Regulatory Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_24",
        topic: "safety",
        question:
          "Ohio law requires your headlights to be on in which of these situations?",
        choices: [
          "Any time your wipers are running because of precipitation",
          "Only on unlit rural roads",
          "Only between sunset and sunrise",
          "Only when you cannot see 500 feet ahead",
        ],
        correctIndex: 0,
        explanation:
          "If the wipers are on because of rain or snow, the headlights must be on too. The requirement also covers sunset to sunrise and any period of poor visibility, whatever the time of day.",
        context:
          "The fourth trigger is a distance test: lights must be on any time natural light does not let you clearly see objects 1,000 feet ahead. High beams may be used whenever headlights are used, except when a vehicle is approaching - Ohio requires you to dim for oncoming traffic. In fog you use low beams, not high.",
        trap:
          "Sunset to sunrise is the part everyone knows, and the wipers rule is the part that catches people out on a grey afternoon.",
        excerptKey: "headlights-wipers",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - When to Use Headlights",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_25",
        topic: "rules",
        question:
          "On a road with four or more lanes, which lane does Ohio expect you to drive in?",
        choices: [
          "The left lane, keeping right only to exit",
          "The right lane",
          "The lane just right of centre",
          "Whichever lane is moving fastest",
        ],
        correctIndex: 1,
        explanation:
          "On a road of four or more lanes you drive in the right lane. The lane just right of centre is there for passing and for making left turns.",
        context:
          "Ohio's general rule is that you keep to the right half of the roadway, with named exceptions: when overtaking, on a road with three or more marked lanes, on a one-way road, when an officer or a traffic control device directs otherwise, and when an obstruction forces you left of centre - in which case you yield to oncoming traffic.",
        trap:
          "Following the fastest-moving lane is how drivers end up camped in the left lane, which is the behaviour the rule is written to prevent.",
        excerptKey: "lane-travel-four-lanes",
        sourceLabel: "Ohio Driver Manual - Lane Travel",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_26",
        topic: "licensing",
        question:
          "How long must a driver under 18 hold the TIPIC before taking the driving test?",
        choices: [
          "Three months",
          "One year",
          "30 days",
          "At least six months",
        ],
        correctIndex: 3,
        explanation:
          "An applicant under 18 must hold the temporary instruction permit identification card for at least six months before the driving test. The requirement applies to under-18 drivers only.",
        context:
          "The six months sits alongside two other requirements for under-21 applicants: a driver education course of 24 hours classroom or online instruction plus 8 hours behind the wheel, and 50 logged hours of driving with an eligible licensed driver, of which at least 10 must be at night. A temporary resident aged 21 or older holds the TIPIC for only 14 days.",
        trap:
          "The 14-day figure belongs to temporary residents aged 21 and over. Applying it to a teenager skips five and a half months of the requirement.",
        excerptKey: "hold-tipic-six-months",
        sourceLabel: "Ohio Driver Manual - Driver Education Requirements",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_27",
        topic: "signs",
        question:
          "An orange and red reflective triangle is fixed to the back of the vehicle ahead. What does it tell you?",
        choices: [
          "The vehicle is carrying hazardous cargo",
          "The vehicle is oversized",
          "The vehicle is travelling at less than 25 mph",
          "The driver is a learner",
        ],
        correctIndex: 2,
        explanation:
          "The slow-moving vehicle emblem marks something travelling at less than 25 mph - typically farm equipment, construction equipment or an animal-drawn vehicle.",
        context:
          "Closing speed is the danger. At highway speeds you reach a 20 mph tractor far faster than instinct expects, and the manual notes that a farm machinery operator cannot hear you approaching. Farm machinery must display the emblem and use a red flashing light at night, and warning signs are posted where horse-drawn vehicles are likely.",
        trap:
          "Reading it as a hazard placard misses the point entirely: the warning is about speed, and the risk is that you arrive too fast to stop.",
        excerptKey: "slow-moving-emblem",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Slow Moving Vehicles",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_28",
        topic: "rightOfWay",
        question:
          "A pedestrian is stepping into a crosswalk ahead of you. What does Ohio require?",
        choices: [
          "Sound your horn to warn them",
          "Proceed if you can pass behind them",
          "Yield only in marked crosswalks",
          "Yield the right of way to the pedestrian",
        ],
        correctIndex: 3,
        explanation:
          "You yield to pedestrians entering or already in a crosswalk. Where a stop line is painted before the crosswalk, you stop at the line rather than on the crossing.",
        context:
          "Ohio is explicit that not all crosswalks are marked the same way, so the duty is not limited to painted zebra stripes. The manual goes further and tells drivers to expect pedestrians who do not obey signals or use marked crossings at all, and pedestrians who are blind or visually impaired - carrying a white cane or using a guide dog - have the right of way.",
        trap:
          "Waiting for a marked crossing before yielding is the assumption that gets pedestrians hit at unmarked intersections, which are crosswalks too.",
        excerptKey: "crosswalk-yield",
        sourceLabel: "Ohio Driver Manual - Crosswalks",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_29",
        topic: "sharing",
        question:
          "A large truck ahead of you swings wide to the left before turning right. What should you do?",
        choices: [
          "Stay back and let the truck complete its turn",
          "Pass it on the left while it is turning",
          "Move into the gap on its right to keep traffic flowing",
          "Sound your horn so the driver knows you are there",
        ],
        correctIndex: 0,
        explanation:
          "Trucks and buses often swing wide from the left lane so their trailer clears the kerb. Squeezing into the gap on their right puts you exactly where the trailer is about to go.",
        context:
          "Large vehicles have longer stopping distances, wider blind spots and far less manoeuvrability than a car. Their side blind spots are big enough that if you cannot see the driver's face in the mirror, the driver cannot see you. The rear blind spot extends up to 200 feet, and a loaded truck at 55 mph needs a minimum of 335 feet to stop.",
        trap:
          "The gap on the inside looks like an invitation and is the single most common way drivers get crushed against a kerb by a turning truck.",
        excerptKey: "truck-wide-right-turn",
        sourceLabel: "Ohio Driver Manual - Commercial Vehicles",
        sourceUrl: MAN,
      },
      {
        id: "oh_s1_30",
        topic: "safety",
        question:
          "Your vehicle begins to skid on an icy Ohio road. What is the correct response?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Take your foot off the accelerator and steer into the skid",
          "Accelerate gently to regain traction",
          "Pull the parking brake to slow the rear wheels",
        ],
        correctIndex: 1,
        explanation:
          "Lift off the accelerator and turn the wheel in the direction of the skid. Ohio is explicit that you never apply the brakes while skidding.",
        context:
          "Skids come from travelling too fast for the conditions, stopping too suddenly, or tyres that can no longer grip. Prevention is most of the answer: slower speeds, bigger gaps, and lightly tapping the brake to shed momentum rather than stamping on it. Bridges, overpasses and shaded stretches ice over before the rest of the road does.",
        trap:
          "Braking is the instinctive reaction and the one that turns a recoverable skid into a spin, which is why the manual rules it out in so many words.",
        excerptKey: "winter-skid",
        sourceLabel: "Ohio Driver Manual - Winter Driving",
        sourceUrl: MAN,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Everyday Ohio Roads",
    difficulty: "easy",
    description:
      "Thirty questions on the rules you use on every trip: markings and signals, passing, school buses, railroad crossings and the paperwork Ohio expects you to carry.",
    questions: [
      {
        id: "oh_s2_01",
        topic: "signals",
        question:
          "A green arrow is showing on the signal head for your lane. What does it permit?",
        choices: [
          "A turn in the direction of the arrow without stopping",
          "A turn only after yielding to oncoming traffic",
          "Any movement through the intersection",
          "A turn only when the round green also shows",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow means you can turn in the direction the arrow points without stopping, because the conflicting movements are being held.",
        context:
          "That is the difference between a protected and a permitted turn. On a round green you may still turn, but you have to wait for a gap in oncoming traffic and yield to pedestrians. The arrow removes that obligation because nothing should be coming the other way while it is lit.",
        trap:
          "Treating the arrow as if it were an ordinary green means sitting in the intersection waiting for traffic that is not coming, and losing the phase.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Ohio Driver Manual - Traffic Signals",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_02",
        topic: "rules",
        question:
          "A solid double yellow line runs down the centre of a two-lane road. What does it allow?",
        choices: [
          "Passing in either direction when the road ahead is clear",
          "Passing only for the direction with the outer solid line",
          "Crossing only to turn left or to pass a slow-moving vehicle",
          "Nothing; the line may never be crossed",
        ],
        correctIndex: 2,
        explanation:
          "A solid double yellow bans passing from both directions. You may still cross it to turn left into a driveway, or to pass a slow-moving vehicle such as a bicycle or a tractor displaying the slow-moving emblem, when it is safe.",
        context:
          "The exception for slow-moving vehicles has conditions attached. The vehicle you are passing must be travelling at less than half the posted speed limit, you must not exceed the speed limit while passing, and there must be enough clear space in the oncoming lane to complete the manoeuvre.",
        trap:
          "'Never crossed' sounds like the strict answer and is wrong in both directions - the line permits left turns and the slow-vehicle pass.",
        excerptKey: "markings-double-yellow",
        sourceLabel: "Ohio Driver Manual - Lane Pavement Markings",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_03",
        topic: "rightOfWay",
        question:
          "A school bus with its red lights flashing has stopped on a two-lane street. What must approaching traffic do?",
        choices: [
          "Only traffic behind the bus must stop",
          "Traffic in both directions must stop",
          "Pass at 10 mph or less if no children are visible",
          "Stop only if children are already on the roadway",
        ],
        correctIndex: 1,
        explanation:
          "On a road with fewer than four lanes, every driver approaching from either direction stops at least 10 feet from the front or rear of the bus and stays stopped until the bus moves off or the driver waves them on.",
        context:
          "The lane count is what changes the rule. Where the road has four or more lanes, only traffic travelling in the same direction as the bus has to stop, and it stops at the rear of the bus. The amber lights that flash beforehand are a warning to prepare, not a requirement to stop.",
        trap:
          "'Only if children are visible' inverts the rule. The child you cannot see is precisely the one the law is protecting.",
        excerptKey: "school-bus-fewer-than-four",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Stopping for a School Bus",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_04",
        topic: "signs",
        question: "What information do green, brown and blue signs carry in Ohio?",
        choices: [
          "Guidance: destinations, services and points of interest",
          "Prohibitions on specific manoeuvres",
          "Temporary construction instructions",
          "Warnings about the road ahead",
        ],
        correctIndex: 0,
        explanation:
          "Green, brown and blue are guide sign colours. They point you toward destinations, services and points of interest rather than telling you what you must or must not do.",
        context:
          "Guide signs are square or rectangular rather than diamond-shaped, which is another cue that they are informational. They are the signs that help you find hospitals, fuel, restaurants and hotels, and they carry the intersecting-road information you use to navigate. Route number signs work alongside them, with the shape and colour telling you whether a road is interstate, U.S., state, county or local.",
        trap:
          "Blue also appears on parking signs for people with disabilities, which is a regulatory use and the reason blue gets misfiled as an instruction colour.",
        excerptKey: "guide-signs-services",
        sourceLabel: "Ohio Driver Manual - Guide Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_05",
        topic: "safety",
        question:
          "Where should your hands rest on the steering wheel according to the Ohio manual?",
        choices: [
          "At 10 and 2 o'clock",
          "At 4 and 8 o'clock",
          "One hand at 12 o'clock",
          "Both hands together at the bottom of the wheel",
        ],
        correctIndex: 1,
        explanation:
          "Ohio teaches 4 and 8 o'clock - both hands on the outside of the wheel on opposite sides. The low position keeps your arms clear of an air bag if it deploys.",
        context:
          "The seating advice around it follows the same logic. You want at least 10 inches between your chest and the wheel, the top of the wheel no higher than your shoulders, and the head restraint touching the back of your head rather than sitting below your ears. The 12 o'clock grip has one specific use: your left hand while reversing.",
        trap:
          "10 and 2 was the standard for decades and is still what most people were taught. Air bags changed the advice.",
        excerptKey: "hand-position",
        sourceLabel: "Ohio Driver Manual - Steering",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_06",
        topic: "sharing",
        question:
          "You are approaching a police car stopped on the shoulder of a four-lane highway with its lights flashing. What does Ohio's Move Over law require?",
        choices: [
          "Sound your horn as you pass",
          "Stop until the officer waves you past",
          "Change into a lane not next to the stopped vehicle",
          "Maintain your speed but move to the far edge of your lane",
        ],
        correctIndex: 2,
        explanation:
          "Where the road has two or more lanes running your way, you change into a lane that is not adjacent to the stopped vehicle. If changing lanes is unsafe or impossible, you slow down and pass with caution instead.",
        context:
          "The law is not limited to police. It covers other emergency vehicles, road service vehicles such as tow trucks and snowplows, waste collection vehicles, highway maintenance vehicles and public utility commission vehicles, whenever their warning lights are on. The offence is a strict liability one, so not noticing is not a defence.",
        trap:
          "Most people know the rule for police cars and are surprised that a bin lorry or a tow truck with its lights on triggers exactly the same duty.",
        excerptKey: "move-over-law",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Move Over Laws",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_07",
        topic: "rules",
        question:
          "A train is approaching a railroad crossing ahead. Where must you stop?",
        choices: [
          "No closer than 15 feet and no farther than 50 feet from the crossing",
          "At least 5 feet from the nearest rail",
          "Anywhere behind the crossbuck sign",
          "No closer than 25 feet and no farther than 100 feet",
        ],
        correctIndex: 0,
        explanation:
          "Ohio sets a window rather than a single distance: stop no closer than 15 feet and no farther than 50 feet from the crossing when a train is coming.",
        context:
          "You wait until the train has passed and the warning signals have stopped before crossing, because a second train can follow on another track. Where a crossing is marked only with pavement markings or a crossbuck, you slow down and be ready to stop if you see or hear a train. A stop sign at a crossing means every vehicle stops.",
        trap:
          "The far limit matters as much as the near one. Stopping 100 feet back leaves you unable to see the track clearly and encourages the driver behind to creep past you.",
        excerptKey: "railroad-stop-distance",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Railroad Crossings",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_08",
        topic: "licensing",
        question:
          "What are Ohio's minimum liability insurance limits for injury or death of one person?",
        choices: ["$10,000", "$15,000", "$20,000", "$25,000"],
        correctIndex: 3,
        explanation:
          "Ohio's minimums are $25,000 for injury or death of one person, $50,000 for two or more people, and $25,000 for property damage.",
        context:
          "Driving without insurance is illegal in Ohio, and so is letting someone else drive your uninsured vehicle. You must be able to show proof whenever you are ticketed, at a vehicle inspection stop, at any traffic court appearance, and after a crash causing more than $400 in property damage. The alternative to insurance is a personal bond plus a $30,000 certificate of deposit with the State Treasurer.",
        trap:
          "The property damage figure is also $25,000, so people who half-remember the numbers pick the middle option and lose the injury limit.",
        excerptKey: "insurance-minimums",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Insurance and Financial Responsibility",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_09",
        topic: "signs",
        question:
          "A yellow diamond shows a T shape with the stem pointing toward you. What is ahead?",
        choices: [
          "A road that branches into two",
          "An intersection where you must turn left or right",
          "A narrow bridge",
          "A dead end after the next junction",
        ],
        correctIndex: 1,
        explanation:
          "The T sign warns of an intersection ahead where the road you are on ends, so you will have to turn left or right.",
        context:
          "Warning diamonds are read as pictures of the road ahead. A Y shape means the road branches. A curving arrow means the road curves. Two arrows pointing in opposite directions means traffic runs both ways. Reading the picture rather than memorising each sign is what lets you handle the ones the test throws at you cold.",
        trap:
          "The Y sign is the branching one. T and Y are easy to swap under time pressure because both describe the shape of the junction.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Ohio Driver Manual - Warning Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_10",
        topic: "impairment",
        question:
          "A driver under 21 is stopped in Ohio and tests at .03 percent BAC. What is the position?",
        choices: [
          "It is over the limit for a driver under 21",
          "It is an offence only if the driver is under 18",
          "It is treated as a refusal to test",
          "No offence, because it is below .08",
        ],
        correctIndex: 0,
        explanation:
          "Anyone under 21 is at a .02 percent limit, so .03 is over it. The .08 figure is the general limit and does not apply to under-21 drivers as a defence.",
        context:
          "Ohio has a separate offence for this: Operating a Vehicle after Underage Alcohol Consumption, or OVUAC. It can bring a licence suspension of three months to two years, a required remedial driving course, reinstatement fees, a retake of the driver licence examination, and possibly jail time.",
        trap:
          "'Under the legal limit' is meaningless for an under-21 driver, because the legal limit for them is a quarter of the adult one.",
        excerptKey: "ovuac",
        sourceLabel: "Ohio Driver Manual - Alcohol and the Law",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_11",
        topic: "rules",
        question: "Where does Ohio allow you to pass another vehicle on the shoulder?",
        choices: [
          "On a paved shoulder only",
          "When traffic ahead is stopped",
          "Nowhere; passing on the shoulder is never permitted",
          "When the vehicle ahead is turning left",
        ],
        correctIndex: 2,
        explanation:
          "Ohio's instruction is absolute: never pass on the shoulder, whether it is paved or not.",
        context:
          "On multi-lane roads the left-most lane is the passing lane, used when the pass can be completed without interfering with traffic in either direction. On a two-lane road you may only pass where the broken yellow line is on your side. Passing is ruled out when an oncoming vehicle is approaching, when a curve or hill blocks your view, at intersections, and before a railroad crossing or bridge.",
        trap:
          "A wide paved shoulder looks like a usable lane, especially when someone ahead is waiting to turn left, and that is exactly the situation the blanket ban is written for.",
        excerptKey: "passing-never-shoulder",
        sourceLabel: "Ohio Driver Manual - Passing",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_12",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Ohio?",
        choices: [
          "No closer than 5 feet",
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 20 feet",
        ],
        correctIndex: 1,
        explanation:
          "Ohio bans stopping, parking or standing within 10 feet of a fire hydrant.",
        context:
          "The same list bans parking on a sidewalk, in front of a public or private driveway, within 20 feet of an intersection or crosswalk, within one foot of another parked vehicle, alongside a vehicle already parked at the kerb, and anywhere a sign prohibits stopping. The exceptions are narrow: avoiding a conflict with other traffic, or following the direction of an officer or traffic control device.",
        trap:
          "20 feet is the intersection and crosswalk figure. Both numbers appear in the same list, which is why they get swapped.",
        excerptKey: "parking-prohibited-places",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Stopping, Parking, or Standing Prohibited",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_13",
        topic: "signals",
        question: "What does a flashing yellow signal require of you?",
        choices: [
          "Treat the intersection as a four-way stop",
          "Stop and yield before proceeding",
          "Stop only if traffic is crossing",
          "Slow down and proceed with caution",
        ],
        correctIndex: 3,
        explanation:
          "Flashing yellow means slow down and proceed with caution, staying ready to stop for anything that may enter the intersection.",
        context:
          "It is deliberately weaker than its red counterpart. Flashing red requires a full stop and a yield to traffic that does not have to stop; flashing yellow requires care but no stop. Neither indicates a broken signal - a signal that is genuinely dark is treated as a four-way stop instead.",
        trap:
          "Reading flashing yellow as a four-way stop causes rear-end collisions, because the driver behind is expecting the road to keep moving.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "Ohio Driver Manual - Traffic Signals",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_14",
        topic: "safety",
        question:
          "Ohio expects a driver to scan how far ahead along the intended path of travel?",
        choices: [
          "20 to 30 seconds",
          "5 to 10 seconds",
          "The length of one city block",
          "As far as the headlights reach",
        ],
        correctIndex: 0,
        explanation:
          "The manual asks you to look at what is happening 20 to 30 seconds in front of the car, which is far beyond the vehicle immediately ahead.",
        context:
          "That long look is one part of a searching pattern you repeat every trip: ahead down your planned path, to the sides for traffic that might cross it, over your shoulders for blind spots, and to the rear in the mirrors - especially when changing lanes, slowing or entering an intersection.",
        trap:
          "Five to ten seconds is roughly the distance drivers naturally watch, which is why the manual gives a much longer figure.",
        excerptKey: "look-ahead-20-30",
        sourceLabel: "Ohio Driver Manual - Visual Search",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_15",
        topic: "sharing",
        question:
          "A motorcyclist is riding in the lane ahead of you. What does Ohio expect?",
        choices: [
          "Share the lane, since a motorcycle needs less width",
          "Allow the motorcyclist a full lane width",
          "Pass immediately so the rider is not held up",
          "Stay at least two lanes away",
        ],
        correctIndex: 1,
        explanation:
          "A motorcyclist gets a full lane width. The rider needs that space to move within the lane when avoiding potholes, gravel, seams and other hazards.",
        context:
          "Motorcyclists have the same rights and responsibilities as any other driver, and they are harder to see, so Ohio asks you to check mirrors and blind spots for them specifically. Following distance goes up to a minimum of four seconds, or more in the wet, and a flashing motorcycle signal should not be trusted because it may not self-cancel.",
        trap:
          "Sharing the lane looks courteous and is the manoeuvre that leaves a rider nowhere to go when the surface changes.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Ohio Driver Manual - Motorcyclists",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_16",
        topic: "signs",
        question:
          "A round yellow sign with a black X and two R letters appears ahead. What does it mean?",
        choices: [
          "A rest area is ahead",
          "The road surface is rough",
          "A river crossing is ahead",
          "A railroad crossing is ahead",
        ],
        correctIndex: 3,
        explanation:
          "The round yellow sign with the X and the RR letters is the advance warning for a highway-railroad grade crossing. The white X-shaped crossbuck marks the crossing itself.",
        context:
          "The round shape is reserved for this one message, which is why it is worth learning on its own. Some crossings add flashing red lights, with or without a gate. Where there are none, you slow down and be prepared to stop if you see or hear a train, and if there is a stop sign at the crossing, every vehicle must stop.",
        trap:
          "Rough road is a diamond. The circle exists precisely so a railroad warning cannot be mistaken for an ordinary hazard sign.",
        excerptKey: "railroad-crossing-sign",
        sourceLabel: "Ohio Driver Manual - Railroad Crossings",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_17",
        topic: "rightOfWay",
        question:
          "You are waiting to turn left at a green light while oncoming traffic streams past. What does Ohio expect?",
        choices: [
          "Reverse out of the intersection if no gap appears",
          "Turn as soon as the light appears, before traffic builds",
          "Yield to oncoming traffic and turn when there is a safe gap",
          "Turn behind the first oncoming vehicle",
        ],
        correctIndex: 2,
        explanation:
          "A round green permits the turn but does not protect it. You yield to oncoming traffic and to pedestrians, and turn when there is a genuine opportunity.",
        context:
          "Ohio tells you not to enter the intersection until there is an opportunity to turn, and where heavy traffic never offers one, to position the front of the vehicle slightly past the stop bar and turn as soon as it is safe. Turning left means moving from the left-most part of your lane into the lane furthest left on the road you are joining.",
        trap:
          "Rolling into the middle of the intersection and waiting there is what most drivers do, and it leaves you exposed when the light changes.",
        excerptKey: "left-turn-waiting",
        sourceLabel: "Ohio Driver Manual - Left Turns",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_18",
        topic: "rules",
        question:
          "What is the centre lane marked with a broken yellow line and a solid yellow line on each side used for?",
        choices: [
          "Passing slower traffic in either direction",
          "Left turns from either direction",
          "Emergency vehicles only",
          "Merging onto the roadway",
        ],
        correctIndex: 1,
        explanation:
          "That is a two-way left turn lane. Vehicles from either direction may enter it immediately before making a left turn, and it is not a travel or passing lane.",
        context:
          "The lane is also marked with white two-way left-turn arrows, so the pavement tells you twice. Using it to travel, to pass, or to merge into traffic is outside what it is for, and because drivers from both directions may enter it, treating it as a lane to accelerate in is how head-on collisions happen there.",
        trap:
          "Using it as a merging lane is the natural instinct when pulling out of a busy shopping centre, and it is explicitly not one of its uses.",
        excerptKey: "two-way-left-turn-use",
        sourceLabel: "Ohio Driver Manual - Two-Way Left Turn Only Lane",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_19",
        topic: "emergencies",
        question:
          "Your brakes fail while you are driving. What does the Ohio manual tell you to do first?",
        choices: [
          "Turn off the engine immediately",
          "Shift into reverse to slow the vehicle",
          "Steer into a kerb to scrub off speed",
          "Apply the parking brake slowly",
        ],
        correctIndex: 3,
        explanation:
          "Use the parking brake, applied slowly so you do not lock the rear wheels and start a skid. Only if that fails do you switch off the engine, pull off the road and put the flashers on.",
        context:
          "Ohio treats malfunctions as a sequence: keep control first, shed speed second, get off the road third. A stuck accelerator means flashers on, shift to neutral, look for an escape route, then brake gradually and pull off. A blowout means gripping the wheel, holding a straight line, and slowing gradually without braking.",
        trap:
          "Killing the engine first is the reflex, and it can lock the steering and kill your power assistance while you are still moving.",
        excerptKey: "brake-failure",
        sourceLabel: "Ohio Driver Manual - Brake Failure",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_20",
        topic: "speed",
        question:
          "What is the standard speed limit on a rural freeway in Ohio?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 3,
        explanation:
          "Rural freeways in Ohio carry a 70 mph limit. Freeways with paved shoulders inside a municipal corporation are set lower, at 55 mph.",
        context:
          "Every one of these figures is a maximum for ideal conditions, not a target. Ohio states plainly that in inclement weather, poor road conditions or heavy traffic, a reasonable speed may be well below the posted limit, and that you may never drive faster than lets you stop within the distance you can see to be clear.",
        trap:
          "65 is the limit in several neighbouring states and on many older Ohio stretches, so it is the number that feels right.",
        excerptKey: "speed-by-road-type",
        sourceLabel: "Ohio Driver Manual - Speed Limits",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_21",
        topic: "signs",
        question:
          "A white rectangular sign with black lettering states a rule. What category is it?",
        choices: [
          "A regulatory sign",
          "A warning sign",
          "A guide sign",
          "A work zone sign",
        ],
        correctIndex: 0,
        explanation:
          "White with black lettering is Ohio's regulatory format. Regulatory signs give notice of traffic laws and regulations, and they carry the force of law.",
        context:
          "Colour and shape narrow the category before you read a word. Regulatory signs are typically white and rectangular; warnings are yellow diamonds; work zone signs are orange; guide signs are green, brown or blue. Two regulatory signs break the colour pattern deliberately so they are unmistakable: the red octagon and the red-bordered triangle.",
        trap:
          "A white sign feels informational because it is plain, which is why people file speed limit and lane-use signs under guidance rather than law.",
        excerptKey: "regulatory-signs",
        sourceLabel: "Ohio Driver Manual - Regulatory Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_22",
        topic: "safety",
        question:
          "Under Ohio's child restraint law, what is required for a child aged 5 who is 3 feet 10 inches tall?",
        choices: [
          "No restraint, provided the child sits in the rear",
          "A rear-facing child safety seat",
          "A booster seat",
          "An adult safety belt alone",
        ],
        correctIndex: 2,
        explanation:
          "A child at least 4 but under 8 must be in a booster seat unless the child is 4 feet 9 inches tall or taller. At 3 feet 10 inches, the booster is required.",
        context:
          "The ladder runs by age and size together. Under 4 or under 40 pounds means a child safety seat. Four up to 8 means a booster unless the child has reached 4 feet 9 inches. Eight up to 15 means a safety belt. Children aged 12 and under belong in the back seat, and a rear-facing seat must never go in front of an active passenger air bag.",
        trap:
          "Age alone does not settle it. A tall five-year-old and a small five-year-old land on different sides of the rule because height is the escape clause.",
        excerptKey: "child-booster-seat",
        sourceLabel: "Ohio Driver Manual - Child Passenger Restraints",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_23",
        topic: "sharing",
        question:
          "Where is the blind spot directly behind a large truck, and how far does it extend?",
        choices: [
          "About 50 feet",
          "About 100 feet",
          "Up to 200 feet",
          "Trucks have no rear blind spot",
        ],
        correctIndex: 2,
        explanation:
          "A large vehicle's rear blind spot extends up to 200 feet. Sitting inside it means the driver cannot see you and you cannot see what is happening ahead of the truck.",
        context:
          "Ohio calls these areas the No Zone. The side blind spots are larger than a car's, and if you cannot see the driver's face in the mirror the driver cannot see you. The front No Zone is about stopping distance: a loaded truck at 55 mph needs a minimum of 335 feet to stop, which is why cutting in and braking is so dangerous.",
        trap:
          "Assuming a truck's mirrors cover everything behind it is what keeps drivers tucked in close on the motorway, where they are both invisible and blind.",
        excerptKey: "truck-rear-no-zone",
        sourceLabel: "Ohio Driver Manual - Rear No Zones",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_24",
        topic: "licensing",
        question:
          "A driver aged 16 holds a TIPIC. Who may supervise them at 1 a.m.?",
        choices: [
          "A parent, guardian or custodian holding a valid driver licence",
          "Nobody; driving at that hour is not permitted at all",
          "Any licensed driver aged 21 or older",
          "Any licensed driver aged 18 or older",
        ],
        correctIndex: 0,
        explanation:
          "Between midnight and 6 a.m. a TIPIC holder aged 16 or 17 must be accompanied by a parent, guardian or custodian with a valid licence. Outside those hours any licensed driver aged 21 or older may sit in the front passenger seat.",
        context:
          "A permit holder under 16 is more restricted still: a parent, guardian, custodian, licensed driving instructor, or a person aged 21 or older acting in place of a parent must occupy the front passenger seat. At every age the supervising adult must not be intoxicated, everyone must be belted, the permit must be carried, and mobile devices are banned outright.",
        trap:
          "The night-time rule narrows who counts rather than banning driving, which is why 'nobody' feels right and is wrong.",
        excerptKey: "tipic-16-to-17",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - TIPIC Restrictions",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_25",
        topic: "rules",
        question: "How do you enter a roundabout in Ohio?",
        choices: [
          "Enter clockwise, yielding to traffic on your right",
          "Enter counterclockwise, yielding to traffic already circulating",
          "Enter at the same speed as circulating traffic without yielding",
          "Stop first, then enter regardless of circulating traffic",
        ],
        correctIndex: 1,
        explanation:
          "Traffic runs counterclockwise around the centre island, and entering traffic yields to whatever is already going round. You look left and enter when the lane is clear.",
        context:
          "Once you are in, you keep moving: no stopping and no lane changes inside the circle, so the lane you choose on approach is the lane you commit to. Ohio numbers the exits for you - first exit to turn right, second to go straight, third to turn left, fourth to make a U-turn.",
        trap:
          "Yielding to the right is the ordinary intersection habit, and inside a roundabout the traffic that matters is coming from your left.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Ohio Driver Manual - Roundabouts or Traffic Circles",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_26",
        topic: "signals",
        question:
          "You have a green light but traffic on the far side of the intersection is backed up solid. What must you do?",
        choices: [
          "Enter and turn right to escape the queue",
          "Sound your horn to move the queue along",
          "Enter and wait, since your light is green",
          "Stop before the intersection until the far side clears",
        ],
        correctIndex: 3,
        explanation:
          "You stop before the intersection and wait until traffic across it moves forward. A driver must not enter an intersection when there is not enough room on the other side for the vehicle.",
        context:
          "Ohio states the rule applies whether or not the signal gives you the right to proceed, which is exactly the point: a green light is permission to go, not permission to block the junction. Blocking it strands cross traffic and pedestrians when their phase arrives.",
        trap:
          "'My light is green' is the reasoning behind most blocked intersections, and the manual answers it directly.",
        excerptKey: "stop-blocking-intersection",
        sourceLabel: "Ohio Driver Manual - A driver must stop",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_27",
        topic: "safety",
        question:
          "You are about to reverse out of a parking space. What does Ohio tell you to do before you get in?",
        choices: [
          "Check behind the vehicle on foot",
          "Rely on the reversing camera",
          "Sound the horn twice",
          "Adjust the mirrors to point downward",
        ],
        correctIndex: 0,
        explanation:
          "Check behind the vehicle before you get in, because children and small objects simply cannot be seen from the driver's seat.",
        context:
          "Once you are reversing, the technique is specific: foot on the brake, shift to reverse, left hand at 12 o'clock on the wheel, right arm over the passenger seat and look directly through the rear window. Mirrors and cameras are supplements - neither shows the area immediately behind the car.",
        trap:
          "Trusting the camera alone is the modern version of this mistake, and the manual singles it out because a camera does not show the whole area.",
        excerptKey: "backing-up-look-behind",
        sourceLabel: "Ohio Driver Manual - Backing Up",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_28",
        topic: "signs",
        question:
          "You see a diamond sign showing two vehicles converging on a narrow structure. What does it tell you?",
        choices: [
          "The bridge is closed to heavy vehicles",
          "Traffic merges from the right",
          "The bridge carries one lane, and the nearest vehicle has priority",
          "The road surface changes at the bridge",
        ],
        correctIndex: 2,
        explanation:
          "That is the one lane bridge warning. Only one vehicle can cross at a time, and the vehicle nearest the bridge has the right of way.",
        context:
          "It is one of the few warning signs that also settles a right-of-way question, which is why it is worth learning as a rule rather than a picture. On approach you slow down early enough to stop, because on a single-lane structure there is no room to negotiate once you are committed.",
        trap:
          "Assuming the bigger or faster vehicle should go first is how two drivers end up nose to nose in the middle of the span.",
        excerptKey: "one-lane-bridge-sign",
        sourceLabel: "Ohio Driver Manual - Warning Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_29",
        topic: "sharing",
        question:
          "Where must a bicycle be ridden on an Ohio roadway?",
        choices: [
          "Facing oncoming traffic so the rider can see it",
          "On the sidewalk wherever one exists",
          "In the centre of the traffic lane at all times",
          "With traffic, following the same rules as other vehicles",
        ],
        correctIndex: 3,
        explanation:
          "Bicycles count as vehicles on the roadway. They ride with traffic rather than against it, and they obey the same signs, signals and pavement markings.",
        context:
          "Because a bicycle is a vehicle, a cyclist can legally take a lane, signal a turn and proceed through an intersection like any other road user. Ohio does allow a bicycle to be parked on a sidewalk provided it does not block pedestrians, which is a parking permission rather than a riding one.",
        trap:
          "Riding against traffic is the rule for pedestrians walking on a road without a sidewalk, and it gets applied to cyclists by people who half-remember it.",
        excerptKey: "bicycle-is-vehicle",
        sourceLabel: "Ohio Driver Manual - Bicyclists",
        sourceUrl: MAN,
      },
      {
        id: "oh_s2_30",
        topic: "rightOfWay",
        question:
          "A funeral procession is passing through an intersection where you have a green light. What does Ohio expect?",
        choices: [
          "Proceed, since your signal governs",
          "Yield to the procession",
          "Join the end of the procession to clear the junction",
          "Sound your horn and proceed slowly",
        ],
        correctIndex: 1,
        explanation:
          "Funeral processions appear on Ohio's list of traffic you yield to, alongside pedestrians, cyclists and public safety vehicles.",
        context:
          "The list is a hierarchy of who goes first when the ordinary rules would put two road users in the same place: the driver who arrived first, oncoming traffic when you are turning left, the driver on your right in a tie, traffic on the road you are joining, traffic already on a limited access highway, people still in the intersection, emergency vehicles, and funeral processions.",
        trap:
          "A green light settles who may proceed against the cross street. It does not override the categories Ohio tells you to yield to.",
        excerptKey: "row-funeral",
        sourceLabel: "Ohio Driver Manual - Right-of-Way",
        sourceUrl: MAN,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Exam Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched at the level of the real Ohio knowledge test, mixing sign recognition with the rules of the road, penalties and licensing details that come straight out of the manual.",
    questions: [
      {
        id: "oh_s3_01",
        topic: "rules",
        question:
          "You are on a two-lane road where the yellow line on your side is solid and the line on the other side is broken. What may you do?",
        choices: [
          "Not pass; the solid line is on your side",
          "Pass only vehicles travelling under 25 mph",
          "Pass, because one of the lines is broken",
          "Pass only if the oncoming lane is empty for 500 feet",
        ],
        correctIndex: 0,
        explanation:
          "The line that governs is the one in your lane. A solid yellow beside you means no passing, while the driver on the other side, with the broken line, may pass.",
        context:
          "Ohio states it as a pair: passing is allowed for motorists in the lane with the broken line and prohibited for motorists in the lane with the solid line. It is why the same stretch of road can be a legal pass one way and an illegal one the other, and why you read the line closest to you rather than the pattern as a whole.",
        trap:
          "Seeing any broken line and treating it as permission is the mistake, because half of every passing zone is a no-passing zone for the other direction.",
        excerptKey: "passing-solid-in-your-lane",
        sourceLabel: "Ohio Driver Manual - Passing Zone",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_02",
        topic: "licensing",
        question:
          "How many points within a two-year period trigger a licence suspension in Ohio?",
        choices: ["6", "8", "10", "12"],
        correctIndex: 3,
        explanation:
          "Twelve or more points inside a two-year period brings a 12-point suspension. Six points in the same window brings a warning letter, not a suspension.",
        context:
          "Getting the licence back is a process rather than a wait: you complete a remedial driving course, file an SR-22 bond with the BMV, and pay reinstatement fees. Under the Revised Code the 12-point suspension is a class D suspension, which runs for six months, and driving during it is a first-degree misdemeanour with a minimum three days in jail.",
        trap:
          "Six points is the number people remember, because that is when the letter arrives and the letter is the part they actually see.",
        excerptKey: "points-twelve-suspension",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Penalties",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_03",
        topic: "signs",
        question:
          "A five-sided sign shaped like a house pointing upward appears beside the road. What is it?",
        choices: [
          "A school zone or school crossing sign",
          "A hospital direction sign",
          "A county route marker",
          "A hazardous cargo route sign",
        ],
        correctIndex: 0,
        explanation:
          "The five-sided pentagon is reserved for schools and school crossings. Like the octagon and the crossbuck, the shape is unique so it can be identified at a glance.",
        context:
          "Ohio's school messages come in layers. The pentagon marks the area, a posted school zone speed limit applies during restricted hours, and the manual asks for a slower speed whenever lights are flashing or children are present. A crossing guard directing traffic at a school intersection must be obeyed.",
        trap:
          "Yellow is the colour of both warning diamonds and school pentagons, so people sort by colour and miss that the shape is doing the work.",
        excerptKey: "school-zone-slower-limit",
        sourceLabel: "Ohio Driver Manual - Pedestrians and School Zones",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_04",
        topic: "impairment",
        question:
          "A driver refuses the chemical test after an OVI arrest in Ohio. What happens to their licence?",
        choices: [
          "A suspension that ends if they are later acquitted",
          "An immediate suspension of one to five years",
          "Nothing until a court convicts them",
          "A 90-day suspension identical to a failed test",
        ],
        correctIndex: 1,
        explanation:
          "Refusing the test brings an administrative licence suspension of one to five years, starting immediately, and it stands even if the driver is later acquitted of the OVI charge.",
        context:
          "The suspension length rises with history. A first refusal is one year; a prior refusal or OVI conviction makes it two; two priors make it three; three or more make it five. Testing over the limit is treated separately and more leniently at first - 90 days for a first offence.",
        trap:
          "People assume refusing leaves the state with no evidence and therefore no penalty. The suspension is administrative and does not wait for the court.",
        excerptKey: "als-refusal-acquittal",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Administrative License Suspension",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_05",
        topic: "safety",
        question:
          "How far behind a disabled vehicle does Ohio suggest placing emergency flares?",
        choices: [
          "About 200 to 300 feet",
          "About 50 feet",
          "About 100 feet",
          "About 500 feet",
        ],
        correctIndex: 0,
        explanation:
          "Flares go roughly 200 to 300 feet behind the vehicle, far enough back that approaching drivers have time to change lanes before they reach you.",
        context:
          "The rest of the breakdown sequence matters as much: get the vehicle off the road and away from traffic if you can, put the hazard lights on to show it is disabled, and stay inside the vehicle until help arrives rather than standing on a live carriageway.",
        trap:
          "Fifty feet feels like a sensible distance while you are walking it, and it gives a driver at highway speed under a second to react.",
        excerptKey: "breakdown-flares",
        sourceLabel: "Ohio Driver Manual - Vehicle Breakdown",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_06",
        topic: "rightOfWay",
        question:
          "You are on an entrance ramp joining an interstate. Who yields?",
        choices: [
          "Whichever vehicle is travelling faster",
          "You yield to traffic already on the highway",
          "Neither; merging traffic has equal priority",
          "Traffic on the interstate must make room",
        ],
        correctIndex: 1,
        explanation:
          "Drivers already on a limited access or interstate highway have priority. You use the acceleration lane to match their speed and merge into a gap.",
        context:
          "The technique follows from the rule. Look over your shoulder in the direction you are merging, use the outside mirrors to pick a gap, accelerate to the speed of the traffic you are joining, signal, merge, and cancel the signal. Arriving on the highway too slowly is what forces other drivers to brake.",
        trap:
          "Assuming through traffic will move over turns your merge into someone else's emergency, and it is not what the priority rule says.",
        excerptKey: "row-entrance-ramp",
        sourceLabel: "Ohio Driver Manual - Right-of-Way",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_07",
        topic: "signs",
        question:
          "What does a pennant-shaped yellow sign on the left side of the road mean?",
        choices: [
          "Slow traffic should keep right",
          "A passing lane begins",
          "The road narrows ahead",
          "A no-passing zone begins",
        ],
        correctIndex: 3,
        explanation:
          "The sideways triangle, or pennant, marks the start of a no-passing zone. It is posted on the left so it sits in your view when you are looking for a chance to pass.",
        context:
          "It works with the centre line rather than instead of it. Where the pennant appears, the yellow line on your side will be solid. Ohio also rules out passing when an oncoming vehicle is approaching, when a curve or hill blocks your view, at intersections and before a railroad crossing or bridge, whatever the markings say.",
        trap:
          "Signs on the left are unusual enough that drivers assume they apply to the opposite carriageway. This one is aimed squarely at you.",
        excerptKey: "passing-do-not-when",
        sourceLabel: "Ohio Driver Manual - Passing",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_08",
        topic: "parking",
        question:
          "How should the front wheels be turned when you park on a hill in Ohio?",
        choices: [
          "Straight ahead, with the parking brake set",
          "Toward the kerb side of the road",
          "Away from the kerb on a downhill slope",
          "Whichever way the road camber falls",
        ],
        correctIndex: 1,
        explanation:
          "Ohio's instruction is a single one: turn the front wheels toward the kerb side of the road. You then shift to park, set the parking brake and switch off.",
        context:
          "Several states publish a four-way table that changes with slope direction and whether a kerb is present. Ohio does not - the manual gives one rule for hills and grades, so the wheels point kerbward whichever way the hill runs. The parking brake is part of the same instruction rather than an optional extra.",
        trap:
          "The uphill-downhill table from other states' handbooks is the answer people import, and it does not match what Ohio actually asks for.",
        excerptKey: "parking-hill",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Parking on a Hill or Grade",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_09",
        topic: "signals",
        question:
          "You are stopped at a red light on a one-way street, wanting to turn left onto another one-way street. What does Ohio allow?",
        choices: [
          "The turn from the extreme left lane after a complete stop",
          "The turn from any lane after a complete stop",
          "Nothing; a left turn on red is never permitted",
          "The turn only where a sign specifically authorises it",
        ],
        correctIndex: 0,
        explanation:
          "Ohio permits a left on red from the extreme left lane of a one-way street onto another one-way street, unless a sign forbids it. The complete stop comes first.",
        context:
          "It mirrors the right-on-red permission and carries the same conditions: a full stop, no sign prohibiting the turn, and yielding to crossing traffic and pedestrians before you move. Both permissions disappear entirely wherever a NO TURN ON RED sign is posted.",
        trap:
          "Believing left on red is never legal is the safe-sounding answer, and it fails a question the manual states in a single sentence.",
        excerptKey: "left-turn-on-red",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Turning on a Red Traffic Signal",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_10",
        topic: "sharing",
        question:
          "You are behind a tractor travelling at 15 mph on a road with a 45 mph limit and a solid yellow centre line. What does Ohio permit?",
        choices: [
          "Passing only after sounding your horn",
          "Passing on the right-hand shoulder",
          "Passing, since the tractor is under half the limit and the way is clear",
          "Nothing; a solid yellow line never permits passing",
        ],
        correctIndex: 2,
        explanation:
          "Ohio lets you cross a solid yellow line to pass a slow-moving vehicle when it is travelling at less than half the posted limit, you do not exceed the limit yourself, and there is enough clear space in the oncoming lane.",
        context:
          "All three conditions have to hold. A tractor at 25 mph in a 45 zone is over half the limit, so the same manoeuvre would not be allowed. The permission exists because farm equipment on rural state routes would otherwise create long queues, and it sits alongside the rule that slow vehicles must keep as far right as they can.",
        trap:
          "The blanket 'solid yellow means never' answer is the one most drivers give, and Ohio writes an explicit exception for exactly this situation.",
        excerptKey: "slow-vehicle-pass-half-limit",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Slow Moving Vehicles",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_11",
        topic: "safety",
        question:
          "Roughly how far does it take to stop from 50 mph on dry pavement with good brakes, according to the Ohio manual?",
        choices: ["About 60 feet", "About 100 feet", "About 158 feet", "About 300 feet"],
        correctIndex: 2,
        explanation:
          "The manual gives about 158 feet of braking distance at 50 mph on dry pavement with good brakes - and that is braking alone, before perception and reaction time are added.",
        context:
          "Total stopping distance is three pieces stacked together: the time to perceive that you must stop, the time to move your foot to the brake, and the distance the brakes then need. Speed inflates all three, which is why the manual pairs the figure with the reminder that faster travel needs more time and more distance.",
        trap:
          "Quoting a braking figure as the whole stopping distance underestimates the real one badly, because reaction alone can add another car length or two.",
        excerptKey: "braking-distance-158",
        sourceLabel: "Ohio Driver Manual - Braking Distance",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_12",
        topic: "rules",
        question:
          "Which vehicles are required to stop at every railroad crossing in Ohio?",
        choices: [
          "All vehicles with a trailer",
          "Any vehicle over 10,000 pounds",
          "All vehicles at crossings without gates",
          "Buses, vehicles carrying passengers for hire, and vehicles carrying explosives or flammable liquids",
        ],
        correctIndex: 3,
        explanation:
          "School buses, vehicles carrying passengers for hire, and vehicles carrying explosives or flammable liquids must stop at railroad crossings whether or not a train is coming.",
        context:
          "Those drivers then listen through an open door or window, look both ways for a train and for signals indicating one, and proceed with care. That is also why Ohio tells ordinary drivers to increase their following distance behind buses and hazardous-material carriers: they will stop where you would not expect it.",
        trap:
          "Trailer weight has nothing to do with it. The rule is about what the vehicle is carrying - people or dangerous cargo.",
        excerptKey: "railroad-must-stop-vehicles",
        sourceLabel: "Ohio Driver Manual - Railroad Crossings",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_13",
        topic: "licensing",
        question:
          "How many supervised driving hours must an Ohio applicant under 21 log before the driving test?",
        choices: ["24 hours", "40 hours", "50 hours", "60 hours"],
        correctIndex: 2,
        explanation:
          "Fifty logged hours with an eligible licensed driver, of which at least 10 must be at night. That is on top of the driver education course, not part of it.",
        context:
          "The course itself is 24 hours of classroom or online instruction plus 8 hours of driving time at a licensed driver training school. The 50 hours are recorded on the Fifty-Hour Affidavit, form BMV 5791, which is notarised and handed in at the driving test appointment.",
        trap:
          "24 is the classroom figure and the one people quote, because it is the number attached to the part of training that feels most formal.",
        excerptKey: "fifty-hours",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - Driver Education Requirements",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_14",
        topic: "signs",
        question:
          "A diamond sign shows a truck on a downward slope. What does it warn of?",
        choices: [
          "A weigh station ahead",
          "A downhill grade ahead",
          "A truck route begins",
          "Trucks are prohibited",
        ],
        correctIndex: 1,
        explanation:
          "The truck on a slope is the downhill grade warning. It tells you to expect a descent steep enough that speed control and brake heat become issues.",
        context:
          "Warning diamonds describe the road, not the vehicles on it. A picture of a truck is a way of showing what the road does to a heavy vehicle. If it were a prohibition, it would be inside a red circle with a slash; if it were a route marker, it would be a rectangular guide sign.",
        trap:
          "A truck symbol reads as a truck instruction, which is why people file this one under routes or restrictions rather than under grades.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Ohio Driver Manual - Warning Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_15",
        topic: "emergencies",
        question:
          "You are involved in a crash in Ohio. What must you do before leaving the scene?",
        choices: [
          "Wait for a police officer, whatever the damage",
          "Photograph the vehicles and go",
          "Exchange contact and insurance information with those involved",
          "Move both vehicles to a car park",
        ],
        correctIndex: 2,
        explanation:
          "You do not leave until you have exchanged contact and insurance details with everyone involved - and if the vehicle you hit was unoccupied, that includes leaving a note.",
        context:
          "The sequence around it is: warn approaching traffic and put the hazard lights on, move the vehicle out of the flow of traffic if the crash is minor and it is safe, check everyone for injuries and call 911 if anyone is hurt, then notify the Highway Patrol, Sheriff or local police. Ohio also tells you to swap information without discussing fault or coverage.",
        trap:
          "Leaving after taking photographs still counts as leaving the scene, because the duty is to exchange information with the other party.",
        excerptKey: "crash-remain-at-scene",
        sourceLabel: "Ohio Driver Manual - In the Event of a Crash",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_16",
        topic: "speed",
        question:
          "You are driving at the posted 55 mph limit in heavy fog. What does Ohio law say about your speed?",
        choices: [
          "It may be unlawful if you cannot stop within the distance you can see",
          "It is lawful provided your fog lights are on",
          "It is lawful only on a divided highway",
          "It is lawful, because you are at the posted limit",
        ],
        correctIndex: 0,
        explanation:
          "Regardless of the posted limit, Ohio prohibits driving faster than lets you stop in the distance available. A legal number can still be an illegal speed in fog.",
        context:
          "This is the assured clear distance ahead rule, and it is the reason Ohio describes posted limits as reasonable speeds for a well-designed road in dry weather. In inclement weather, poor road conditions or heavy traffic, the reasonable speed drops below the sign. In fog specifically, you also use low beams rather than high.",
        trap:
          "'I was at the limit' is the defence drivers reach for after a fog pile-up, and it is the exact argument the rule was written to defeat.",
        excerptKey: "speed-stop-in-distance",
        sourceLabel: "Ohio Driver Manual - Speed Limits",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_17",
        topic: "rightOfWay",
        question:
          "You are emerging from a driveway in a residential district and a pedestrian is walking along the sidewalk. What must you do?",
        choices: [
          "Proceed slowly; the sidewalk is not a crosswalk",
          "Sound your horn and continue",
          "Cross behind the pedestrian",
          "Stop at the sidewalk and yield to the pedestrian",
        ],
        correctIndex: 3,
        explanation:
          "Ohio requires a stop at the sidewalk when you emerge from an alley, driveway or private road in a business or residential district, and you yield to any pedestrian on it.",
        context:
          "Where there is no sidewalk, you stop before entering the roadway instead. The stop is separate from and earlier than yielding to traffic on the road, so there can be two stops in a single exit: one for the footway, one for the carriageway.",
        trap:
          "A sidewalk is not a crosswalk, which is true and irrelevant - the duty to stop for it is stated in its own right.",
        excerptKey: "stop-sidewalk-driveway",
        commonlyMissed: true,
        sourceLabel: "Ohio Driver Manual - A driver must stop",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_18",
        topic: "safety",
        question:
          "What is the minimum legal tyre tread depth on the road surface in Ohio?",
        choices: ["1/32 inch", "1/16 inch", "1/8 inch", "1/4 inch"],
        correctIndex: 1,
        explanation:
          "A tyre in safe condition has at least 1/16 inch of tread on the road surface, and no major bumps, bulges, breaks or tread damage.",
        context:
          "The penny test is the quick check: put the coin into the deepest groove with Lincoln's head pointing down, and if you can see the whole head the tyre is worn out. Ohio also requires the correct inflation pressure, which is shown on the door jamb, and permits studded tyres only from 1 November to 15 April.",
        trap:
          "1/32 is the number used in some other jurisdictions and in tyre marketing, so it lands as familiar and is half of what Ohio requires.",
        excerptKey: "tire-tread-depth",
        sourceLabel: "Ohio Driver Manual - Tire Safety",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_19",
        topic: "signals",
        question:
          "What does Ohio require of a driver when the lights turn green at an intersection?",
        choices: [
          "Pause before moving into the intersection",
          "Wait for the vehicle ahead to clear the far side",
          "Sound the horn if the vehicle ahead does not move",
          "Move off immediately to keep traffic flowing",
        ],
        correctIndex: 0,
        explanation:
          "Ohio tells you to pause when the light turns green, because you cannot rely on other road users to obey their own signals.",
        context:
          "That pause is the practical answer to red-light running, which is the main cause of collisions at signalised intersections. A green light is permission subject to the intersection actually being clear, which is why the manual describes green as travel with caution through the intersection if it is clear to do so.",
        trap:
          "Moving the instant the light changes is what most drivers do and is exactly the behaviour that meets a vehicle still running the tail of its yellow.",
        excerptKey: "green-light-pause",
        sourceLabel: "Ohio Driver Manual - Tips",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_20",
        topic: "impairment",
        question:
          "Under Ohio's distracted driving law, what may a driver aged 18 or over do with a phone while driving?",
        choices: [
          "Type a short message while stopped in traffic",
          "Hold the phone to their ear for the whole call",
          "Make and receive calls hands-free, without holding or supporting the device",
          "Use the phone freely as long as they are not in a work zone",
        ],
        correctIndex: 2,
        explanation:
          "An adult driver may use hands-free technology and other device features so long as they do not hold or physically support the device or manually enter letters, numbers or symbols. Devices may only be activated or deactivated with a single touch or swipe.",
        context:
          "Ohio makes this a primary offence, so an officer can pull you over for it alone. Penalties escalate: two points and up to $150 for a first offence in two years, three points and up to $250 for a second, four points, up to $500 and a possible 90-day suspension for a third, with fines doubled in a work zone. A driver under 18 may not use any device at all, even hands-free.",
        trap:
          "Being stopped in traffic does not switch the rule off for a driver under 18, and typing is banned for adults whether the car is moving or not.",
        excerptKey: "distracted-adult-law",
        sourceLabel: "Ohio Driver Manual - Distracted Driving",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_21",
        topic: "sharing",
        question:
          "A vehicle displaying the slow-moving emblem is ahead on a rural road. What should you assume about the driver?",
        choices: [
          "They are required to travel on the shoulder",
          "They can hear you approaching",
          "They will pull over as soon as they see you",
          "They may not hear you approaching",
        ],
        correctIndex: 3,
        explanation:
          "Ohio warns that the operator of farm machinery cannot hear approaching vehicles, so you pass with caution rather than assuming you have been noticed.",
        context:
          "Slow vehicles are required to keep to the available right lane or as close to the right-hand kerb or edge as possible, but that is not the same as leaving the road for you. Farm machinery must carry the slow-moving emblem and show a red flashing light at night, and warning signs are posted where animal-drawn vehicles and horseback riders are likely.",
        trap:
          "Waiting for the tractor to pull over invites a rash pass when it does not, and nothing in the rules requires it to leave the roadway.",
        excerptKey: "farm-machinery-emblem",
        sourceLabel: "Ohio Driver Manual - Farm Machinery",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_22",
        topic: "rules",
        question:
          "Where must you position the vehicle when making a right turn in Ohio?",
        choices: [
          "Swing wide left first so the turn is smoother",
          "Turn from the right-most part of your lane into the right-most part of the new street",
          "Turn from the centre of the lane into any available lane",
          "Turn from whichever lane is clear of parked cars",
        ],
        correctIndex: 1,
        explanation:
          "You turn right from the right-most portion of your lane into the right-most portion of the street you are joining, and you avoid swinging wide to the left first.",
        context:
          "The left turn is the mirror image: from the left-most part of your lane into the lane furthest left on the road you are entering, just right of the centre dividing line, and the manual says this applies on four-lane highways too. Where several lanes could serve the turn, you pick one on approach and stay in it until the turn is complete.",
        trap:
          "Swinging wide is a habit borrowed from large vehicles, which need the room. In a car it invites someone to slip up your inside.",
        excerptKey: "right-turn-position",
        sourceLabel: "Ohio Driver Manual - Right Turns",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_23",
        topic: "signs",
        question:
          "You see a rectangular green sign listing city names, distances and arrows. What is its function?",
        choices: [
          "It marks the boundary of a municipal corporation",
          "It regulates which lanes may be used",
          "It guides you toward destinations",
          "It warns of an intersection ahead",
        ],
        correctIndex: 2,
        explanation:
          "Green rectangular signs are guide signs. They provide destination and distance information rather than imposing a rule.",
        context:
          "Guide signs cover intersecting roads, cities and towns, and services along the highway, and they share the category with brown recreation signs and blue service signs. Route number markers work alongside them, using shape and colour to say whether the road is an interstate, a U.S. route, a state route or a county road.",
        trap:
          "Lane-use instructions also appear on overhead rectangles, but those are white regulatory signs. Colour is what separates guidance from law.",
        excerptKey: "guide-signs-shape",
        sourceLabel: "Ohio Driver Manual - Guide Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_24",
        topic: "licensing",
        question:
          "You have just moved to Ohio holding an out-of-state licence. How long do you have to get an Ohio licence?",
        choices: ["10 days", "30 days", "60 days", "90 days"],
        correctIndex: 1,
        explanation:
          "Within 30 days of establishing residency you must hold an Ohio-issued driver licence, and any vehicle you own needs an Ohio title and registration.",
        context:
          "Ohio treats residency as a set of ordinary life events rather than a formal declaration: taking a job, signing a lease, buying a home, or enrolling children in school all make you a resident. The clock starts from that point, not from the day you decide to change your paperwork.",
        trap:
          "Sixty days is the window for buying a TIPIC or licence after passing a test, which is why the number feels like it belongs to this rule.",
        excerptKey: "new-resident-30-days",
        sourceLabel: "Ohio Driver Manual - New Ohio Residents",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_25",
        topic: "safety",
        question:
          "You are driving in heavy fog. Which lights should you use?",
        choices: [
          "High beams, for maximum reach",
          "Hazard lights while moving",
          "Parking lights only",
          "Low beam headlights",
        ],
        correctIndex: 3,
        explanation:
          "Low beams. High beams bounce off the water droplets and reflect glare back at you, making the fog harder to see through, not easier.",
        context:
          "Ohio calls fog one of the most hazardous conditions a driver can face and asks you to slow down, move with the flow of traffic while expecting to stop at any moment, keep a consistent distance from the vehicle ahead, and shift your gaze rather than staring. If you crash, get the vehicle off the road as soon as it is safe.",
        trap:
          "Reaching for high beams is instinctive when visibility drops, and it makes the situation measurably worse.",
        excerptKey: "fog-low-beams",
        sourceLabel: "Ohio Driver Manual - Driving in Fog",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_26",
        topic: "parking",
        question:
          "How far from an intersection or crosswalk does Ohio prohibit parking?",
        choices: ["Within 10 feet", "Within 15 feet", "Within 20 feet", "Within 30 feet"],
        correctIndex: 2,
        explanation:
          "You may not stop, park or stand within 20 feet of an intersection or a crosswalk.",
        context:
          "The distance exists so drivers and pedestrians can see round the corner. The same list bans parking within 10 feet of a fire hydrant, within one foot of another parked vehicle, in front of a driveway, on a sidewalk, alongside a vehicle already parked at the kerb, and anywhere signs prohibit stopping.",
        trap:
          "10 feet is the hydrant figure. The two numbers sit in the same bulleted list, which is exactly why they get transposed under exam pressure.",
        excerptKey: "parking-prohibited-places",
        sourceLabel: "Ohio Driver Manual - Stopping, Parking, or Standing Prohibited",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_27",
        topic: "signals",
        question:
          "At a signalised intersection a police officer waves you through against a red light. What do you do?",
        choices: [
          "Follow the officer's direction",
          "Obey the red light and wait",
          "Wait for the officer to change the signal",
          "Proceed only if no traffic is crossing",
        ],
        correctIndex: 0,
        explanation:
          "An officer directing traffic outranks the signal. Ohio's own rule for a non-working signal makes the same point, carving out the case where an officer is present to direct traffic.",
        context:
          "Officers take over exactly when the signals cannot cope: after a crash, during an evacuation, or when a power cut leaves the lights dark. Obeying the light instead of the officer at that point blocks the movement they are trying to release and puts you in conflict with drivers following instructions.",
        trap:
          "'The light is the law' is a good instinct in every other situation, and it is the reason drivers freeze at a junction being directed by hand.",
        excerptKey: "signal-outage-four-way",
        sourceLabel: "Ohio Driver Manual - Inoperable Traffic Signals",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_28",
        topic: "rules",
        question:
          "What does Ohio require before you change lanes on a multi-lane road?",
        choices: [
          "A mirror check alone is sufficient",
          "Sound the horn to alert the driver alongside",
          "Turn your head and check the blind spot in the direction you are moving",
          "Wait until the lane beside you is empty for 500 feet",
        ],
        correctIndex: 2,
        explanation:
          "Mirrors are not enough. You check the mirrors and then turn your head to look over your shoulder into the blind spot on the side you are moving toward.",
        context:
          "The full sequence is check mirrors and blind spot, identify a gap, signal, look again in the direction of the change, adjust speed, steer into the lane, and cancel the signal. Properly adjusted door mirrors shrink the blind spot but never remove it, which is why the shoulder check stays in the routine.",
        trap:
          "Modern blind-spot warning lights make the head check feel redundant, and they do not cover a fast-approaching motorcycle the way a glance does.",
        excerptKey: "changing-lanes-blind-spot",
        sourceLabel: "Ohio Driver Manual - Changing Lanes",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_29",
        topic: "sharing",
        question:
          "A car and a large truck are approaching each other at an intersection, and you want to turn left in front of the truck. What does Ohio advise?",
        choices: [
          "Turn, because trucks accelerate slowly",
          "Do not turn if you are in any doubt about the truck's speed",
          "Turn only if the truck is signalling",
          "Turn if you have a green light",
        ],
        correctIndex: 1,
        explanation:
          "When in doubt about the speed of an oncoming truck or bus, you do not turn left in its path. Drivers routinely misjudge how fast a large vehicle is closing.",
        context:
          "Two things stack against you here: a big vehicle looks slower than it is because of its size, and it takes far longer to stop than a car if your judgement is wrong. Ohio also asks you to stop behind intersection stop lines, which keeps you far enough back that larger vehicles have room to turn.",
        trap:
          "A green light answers the question of who may proceed and says nothing at all about whether the gap is big enough.",
        excerptKey: "truck-left-turn-judgement",
        sourceLabel: "Ohio Driver Manual - Commercial Vehicles",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_30",
        topic: "emergencies",
        question:
          "Your right-hand wheels drop off the pavement onto a soft shoulder. What is the correct recovery?",
        choices: [
          "Ease off the accelerator, slow gradually, then return when it is safe",
          "Accelerate to climb back onto the surface",
          "Steer back sharply onto the pavement",
          "Brake hard to stop on the shoulder",
        ],
        correctIndex: 0,
        explanation:
          "Take your foot off the accelerator, slow down gradually, and return to the pavement only when it is safe to do so. Sharp inputs are what turn a drop-off into a crash.",
        context:
          "The danger is the lip between the shoulder and the road surface. Yanking the wheel back can catch the tyre on that edge and throw the car across the centre line. The same principle governs skids and blowouts: reduce speed gently, keep the car pointing straight, and do not brake sharply.",
        trap:
          "Steering back immediately is the panic response, and it is the specific action that causes head-on collisions after a drop-off.",
        excerptKey: "drop-off-recovery",
        sourceLabel: "Ohio Driver Manual - Uneven Surface Drop-Offs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_31",
        topic: "signs",
        question:
          "What does a diamond sign showing two arrows pointing in opposite directions warn you about?",
        choices: [
          "A passing lane opens on the left",
          "A roundabout is ahead",
          "A divided highway begins",
          "Traffic ahead travels in opposite directions",
        ],
        correctIndex: 3,
        explanation:
          "The two opposing arrows tell you that the road ahead carries traffic in both directions - typically where a one-way section or a divided road ends.",
        context:
          "It matters most at the end of a divided highway, where a driver used to one-way flow can drift into oncoming traffic. The sign is doing the same job as the centre line: telling you which side of the road is yours before you find out the hard way.",
        trap:
          "Reading it as the start of a divided highway is the exact opposite of the warning and puts you into the wrong carriageway.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Ohio Driver Manual - Warning Signs",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_32",
        topic: "impairment",
        question:
          "Which of these can impair driving ability under Ohio law?",
        choices: [
          "Alcohol only",
          "Alcohol and illegal drugs only",
          "Any substance that impairs the ability to operate a vehicle safely",
          "Only substances that show on a breath test",
        ],
        correctIndex: 2,
        explanation:
          "Ohio's phrasing is deliberately broad: any substance that, taken into the body, impairs the ability to operate a vehicle safely. Prescriptions and over-the-counter remedies are included.",
        context:
          "Antidepressants, pain relief, sleep aids and sedatives all appear by name in the manual, and drivers are told to read the warning label or ask a doctor or pharmacist before taking them. Combining alcohol with any impairing drug is singled out, because drugs can amplify alcohol's effects or add their own.",
        trap:
          "'It was prescribed' is not a defence, and it is the reason the manual names prescription categories explicitly rather than leaving them implied.",
        excerptKey: "impairment-medication",
        sourceLabel: "Ohio Driver Manual - Impairing Drugs and Driving",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_33",
        topic: "speed",
        question:
          "Why does Ohio describe posted speed limits as reasonable speeds rather than simply as limits?",
        choices: [
          "Because they are advisory on rural roads",
          "Because they are set for a well-designed road in dry, clear weather",
          "Because they may be exceeded when overtaking",
          "Because they apply only during daylight",
        ],
        correctIndex: 1,
        explanation:
          "The posted figure assumes the road's design, its expected traffic volume and dry weather without fog or anything else cutting visibility. Change those and the reasonable speed drops.",
        context:
          "This is why a driver can be cited for going too fast for conditions while sitting under the posted number. The limit is a ceiling for good conditions, and Ohio pairs it with the assured clear distance rule, which requires you to be able to stop within the distance you can actually see.",
        trap:
          "Reading limits as advisory in either direction is wrong: you may never exceed them, and you may not always drive at them.",
        excerptKey: "speed-reasonable",
        sourceLabel: "Ohio Driver Manual - Speed Limits",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_34",
        topic: "rightOfWay",
        question:
          "You are stopped at a stop sign where parked cars block your view of crossing traffic. What does Ohio tell you to do?",
        choices: [
          "Edge forward until you can see, then enter when clear",
          "Proceed slowly across, relying on other drivers to react",
          "Reverse and choose a different route",
          "Wait until a gap in the parked cars appears",
        ],
        correctIndex: 0,
        explanation:
          "You edge forward from the stop line to a point where you can actually see the crossing traffic, then enter the intersection when it is clear.",
        context:
          "This is the same principle behind where Ohio tells you to stop in the first place: behind the stop line or crosswalk, and then at a point where you have a clear view of the road you are joining. Stopping twice is normal - once for the line, once for the view.",
        trap:
          "Creeping out into the intersection without stopping again is a different manoeuvre entirely, and it is the one that gets the front wing removed.",
        excerptKey: "edge-forward",
        sourceLabel: "Ohio Driver Manual - Tips",
        sourceUrl: MAN,
      },
      {
        id: "oh_s3_35",
        topic: "safety",
        question:
          "Ohio requires you to increase your following distance in which of these situations?",
        choices: [
          "When you are on a one-way street",
          "When another driver is tailgating you",
          "When you are travelling below the speed limit",
          "When you are following a bus or a vehicle carrying hazardous materials",
        ],
        correctIndex: 3,
        explanation:
          "Buses and hazardous-material carriers must stop at railroad crossings whether or not a train is coming, so they will brake where you would not expect it.",
        context:
          "Ohio's list of situations calling for a longer gap also covers reduced visibility from weather or darkness, slippery roads, and following large vehicles such as trucks, buses, recreational vehicles and anything towing a trailer. A tailgater is handled differently: keep a steady speed, signal early, and leave more room in front so you never have to stop hard.",
        trap:
          "Closing up when someone tailgates you feels like a way to keep traffic moving and removes the space you need to brake gently instead of sharply.",
        excerptKey: "following-distance-increase",
        sourceLabel: "Ohio Driver Manual - Space to the Front",
        sourceUrl: MAN,
      },
    ],
  },
];
