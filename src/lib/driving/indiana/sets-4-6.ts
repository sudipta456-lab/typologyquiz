import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing discipline as sets 1 to 3: every fact is checked
// against the Indiana Driver's Manual as published by the Indiana Bureau of
// Motor Vehicles, or against a BMV page on in.gov where the manual is silent.
//
// Set 5 is deliberately built out of the places Indiana differs from the states
// around it, or states a rule in wording that reads backwards on a first pass:
// the vehicle on the LEFT yields at a tie, the 60 mph rural state divided
// highway that has no equivalent next door, the two-minute dead-red allowance,
// the roundabout rule that hands priority to large vehicles, the 45-degree run
// TOWARD an oncoming train, and the school bus exception that turns on whether
// the median is a barrier rather than on the paint.
const CH = (n: number | string) =>
  `https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_${n}.pdf`;
const LICENCE_PAGE =
  "https://www.in.gov/bmv/licenses-permits-ids/learners-permits-and-drivers-licenses-overview/drivers-license/";
const RESTRICTIONS_PAGE =
  "https://www.in.gov/bmv/licenses-permits-ids/learners-permits-and-drivers-licenses-overview/drivers-license/endorsements-and-restrictions/";

export const indianaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Licensing, Points and the Road",
    difficulty: "medium",
    description:
      "The paperwork half of Indiana driving alongside the road rules: what a probationary licence lets you do, what points cost you, and the manual detail that only shows up once you read past the headline.",
    questions: [
      {
        id: "in_s4_01",
        topic: "rules",
        question: "How many lanes may you cross at a time when changing lanes in Indiana?",
        choices: [
          "Two, if both are clear",
          "One",
          "As many as needed to reach your exit",
          "Two on an interstate, one elsewhere",
        ],
        correctIndex: 1,
        explanation:
          "One lane at a time. Indiana states it as a flat instruction, and weaving across lanes is called out separately as a sharp increase in crash risk.",
        context:
          "The five-step routine attached to it is what the skills examiner watches: check the target lane is clear ahead, check your mirrors for anyone about to pass you, turn your head to check the blind spot, signal, then move over smoothly. Unsafe lane movement carries four points on an Indiana record, and straddling marked lanes is an automatic failure on the skills exam.",
        trap:
          "Signalling once and crossing two lanes is still two lane changes. Each one needs its own check and its own signal.",
        excerptKey: "one-lane-at-a-time",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Changing Lanes and Passing Other Vehicles",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_02",
        topic: "safety",
        question:
          "Your vehicle's wheels drop onto the soft shoulder at speed. What does Indiana tell you to do?",
        choices: [
          "Brake hard and steer back onto the pavement",
          "Ease off the gas, stay on the shoulder, then turn back gradually",
          "Accelerate to pull the car back onto the road",
          "Steer back immediately before the shoulder softens",
        ],
        correctIndex: 1,
        explanation:
          "Do not snatch it back. Ease off the accelerator, drive along the shoulder, and only rejoin the pavement gradually once you have slowed.",
        context:
          "The manual explains the physics: turning back onto the pavement straight away can throw the vehicle off balance, and overcorrecting at highway speed is one of the main causes of rollovers. It gives the same instruction twice, once in the rollover section and again in the chapter on emergencies, which is a fair signal of how often the instinctive response kills people.",
        trap:
          "The instinct to get back on the road at once is exactly what the rule is written against. Speed comes off first, then the steering.",
        excerptKey: "rollover-off-roadway",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Rollover",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s4_03",
        topic: "licensing",
        question:
          "You are 17, have finished an approved driver education programme, and hold a probationary licence. When may you drive between 11 p.m. and 5 a.m. after your first 180 days?",
        choices: [
          "Never before you turn 18",
          "Only at weekends",
          "Only with another licensed driver of any age",
          "Going to or from work, a school-sanctioned activity or a religious event",
        ],
        correctIndex: 3,
        explanation:
          "Indiana lists four ways through the curfew: lawful employment, a school-sanctioned activity, a religious event, or being accompanied by a qualifying adult.",
        context:
          "The qualifying adult is a licensed driver aged at least 25, or your spouse if licensed and at least 21. The curfew itself has two stages: for the first 180 days after you get the probationary licence it runs 10 p.m. to 5 a.m., and after that, while you are under 18, it becomes after 11 p.m. Sunday through Thursday, before 5 a.m. Monday through Friday, and 1 a.m. to 5 a.m. at weekends.",
        trap:
          "A licensed driver of any age is not enough. The accompanying adult has to be 25, or a spouse of 21 or over.",
        excerptKey: "probationary-curfew-exceptions",
        sourceLabel: "Indiana Driver's Manual - Chapter 1, Probationary Driver's License Time Restrictions",
        sourceUrl: CH(1),
        commonlyMissed: true,
      },
      {
        id: "in_s4_04",
        topic: "signs",
        question: "What information does a green traffic sign carry in Indiana?",
        choices: [
          "Permitted movements, directions and distances to destinations",
          "Hazards ahead on the roadway",
          "Recreational and cultural sites",
          "Regulations you must obey",
        ],
        correctIndex: 0,
        explanation:
          "Green is guidance: permitted movements, directions, highway entrances and exits, and the distance to the next town.",
        context:
          "Indiana's three information colours split neatly. Green does guidance and direction, blue does road services such as fuel and food at an upcoming exit, brown does parks, historic markers and other recreational or cultural destinations. Regulations live on white and red backgrounds; warnings on yellow, fluorescent yellow-green and orange.",
        trap:
          "Green is not a regulatory colour. A green sign telling you a lane is permitted to turn is still guidance, not a rule you can be ticketed for.",
        excerptKey: "sign-green",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Colors",
        sourceUrl: CH(6),
      },
      {
        id: "in_s4_05",
        topic: "sharing",
        question:
          "You are behind a tractor-trailer that appears to be moving left as it slows at a junction. What should you assume?",
        choices: [
          "The driver is changing lanes and you may pass on the right",
          "The driver is pulling over to let you by",
          "The driver has drifted and needs warning",
          "The driver may be swinging out to make a tight right turn",
        ],
        correctIndex: 3,
        explanation:
          "Long vehicles often swing left as the first move in a tight right turn, because the rear wheels cut a much shorter path than the front ones.",
        context:
          "The manual's instruction is to watch the truck's signals before trying to pass, especially on the right, and to wait a moment when it appears to be moving left. Passing on the right at that moment puts your car exactly where the trailer is about to sweep. Indiana's general advice for trucks is to pass completely and always on the left.",
        trap:
          "The gap that opens on the truck's right as it swings out is the trap, not an invitation. It is about to close.",
        excerptKey: "truck-swing-out",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Turning",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s4_06",
        topic: "signals",
        question: "What does a flashing yellow light without an arrow mean at an Indiana intersection?",
        choices: [
          "Slow down and use caution going through",
          "Stop, then proceed when clear",
          "The signal has failed and the intersection is uncontrolled",
          "Yield to all cross traffic",
        ],
        correctIndex: 0,
        explanation:
          "Slow down and go through with caution. Cross traffic is required to yield to you, but you still watch for people trying it on.",
        context:
          "If you are turning left on a flashing yellow you must still yield to oncoming traffic and pedestrians. The flashing red is the counterpart: a full stop, then proceed. And a signal that is completely dark is a third case again - stop before entering, then yield in the order the manual sets out.",
        trap:
          "Flashing yellow does not require a stop, and a dark signal does. Reading a dead signal as a flashing yellow is the dangerous version of this mistake.",
        excerptKey: "flashing-yellow-light",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Yellow Flashing Lights",
        sourceUrl: CH(6),
      },
      {
        id: "in_s4_07",
        topic: "speed",
        question:
          "Unless posted otherwise, how fast may a truck with a declared gross weight over 26,000 pounds travel on a rural Indiana interstate?",
        choices: ["70 mph", "55 mph", "65 mph", "60 mph"],
        correctIndex: 2,
        explanation:
          "65 mph for heavy trucks, on the same road where passenger vehicles may do 70.",
        context:
          "Indiana therefore runs a split limit on rural interstates, and the truck figure is the one drivers forget when they wonder why a lorry will not keep pace. Cross into an urban area of at least 50,000 people and everything on that interstate drops to 55. Trucks are also lane-restricted: the right lane where there are two in a direction, the right two lanes where there are three or more.",
        trap:
          "70 is the car number. A truck doing 65 in front of you on a rural interstate is at its legal maximum.",
        excerptKey: "rural-interstate-trucks-65",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Rural Interstate Highway Speed Limits",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_08",
        topic: "rightOfWay",
        question: "What is the test Indiana gives for whether you have yielded properly at a yield sign?",
        choices: [
          "You slowed to under 15 mph on the approach",
          "You signalled before entering",
          "No approaching driver with the right of way had to brake to avoid you",
          "You checked your mirrors before merging",
        ],
        correctIndex: 2,
        explanation:
          "The test is what the other driver had to do. If a vehicle with the right of way had to brake because of you, you did not yield.",
        context:
          "It is a usefully behavioural way to state the rule, because it does not depend on estimating gaps in seconds. The yield sign itself asks you to slow on the approach and be prepared to come to a complete stop for any vehicle or pedestrian with priority. The same standard runs through Indiana's merging and roundabout rules.",
        trap:
          "Slowing down is not yielding. If the other driver still had to lift off, the manoeuvre was not legal however slowly you took it.",
        excerptKey: "yield-no-braking",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Approaching a Yield Sign",
        sourceUrl: CH(6),
      },
      {
        id: "in_s4_09",
        topic: "emergencies",
        question: "Your conventional brakes fail while you are driving. What does Indiana tell you to do?",
        choices: [
          "Shift to a lower gear and pump the brake pedal fast and hard several times",
          "Pull the parking brake fully on at once",
          "Switch off the ignition to slow the engine",
          "Steer into the kerb to scrub off speed",
        ],
        correctIndex: 0,
        explanation:
          "Drop a gear and pump the pedal hard and fast. Pumping can build enough pressure in a conventional disc or drum system to bring the car down.",
        context:
          "If the parking brake becomes necessary, the manual tells you to hold the release out so you can let it off instantly if the rear wheels lock and the car starts to skid. With the car in a low gear, start looking for somewhere off the roadway to stop, and once you are stopped, call for help rather than driving on.",
        trap:
          "Turning off the ignition is the worst option here: on a car with a steering interlock it can lock the wheel and take away what steering you still have.",
        excerptKey: "brake-failure-pump",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, Brake Failure",
        sourceUrl: CH(8),
      },
      {
        id: "in_s4_10",
        topic: "impairment",
        question:
          "How long do points from a traffic conviction stay active on an Indiana driving record?",
        choices: ["One year", "Two years from the conviction date", "Five years", "Three years"],
        correctIndex: 1,
        explanation:
          "Two years from the date of conviction. After that they drop off the active total.",
        context:
          "Two years is short enough that it feels forgiving and long enough that offences stack: 16 to 25 mph over the limit is four points, unsafe lane movement four, a hand-held device violation four, following too closely six, and failing to yield to an emergency vehicle six. Reach six or more active points and renewing your licence brings back the knowledge exam.",
        trap:
          "Points expire two years from the conviction, not from the date you were stopped. A slow court date extends the clock.",
        excerptKey: "points-two-years",
        sourceLabel: "Indiana Driver's Manual - Chapter 5, Point Values",
        sourceUrl: CH(5),
      },
      {
        id: "in_s4_11",
        topic: "parking",
        question: "You are parallel parking. How far from the car in front should you position yourself to start?",
        choices: [
          "Level with its rear wing mirror",
          "Touching distance, to keep the angle tight",
          "Half a car's width",
          "At least two feet away, parallel with it",
        ],
        correctIndex: 3,
        explanation:
          "At least two feet of separation, sitting parallel to the parked car with your rear bumpers level, before you start to reverse.",
        context:
          "The manual runs the whole manoeuvre as a five-step sequence. Signal, then line up parallel with at least two feet of clearance and your rear bumpers level. Reverse slowly until your front is level with the other car's front door and turn the wheel sharply right until you sit at 45 degrees. Swing the wheel left as your front clears their rear, then straighten up and pull forward in the space.",
        trap:
          "Starting too close is what forces the kerb strike halfway through. The two feet are what give the front of your car room to swing.",
        excerptKey: "parallel-park-two-feet",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Parallel Parking",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_12",
        topic: "rules",
        question:
          "Your indicators have failed and you need to signal a turn during ordinary driving. What does Indiana allow?",
        choices: [
          "Nothing - you must not drive until they are repaired",
          "Sound the horn instead",
          "Use hand signals",
          "Flash your headlights to warn following traffic",
        ],
        correctIndex: 2,
        explanation:
          "Hand signals are the permitted fallback when one or more of your lighted signals is not working.",
        context:
          "Indiana's preference is plain - the lighted signals fitted to most vehicles are described as the safest type - and hand signals exist for the failure case. One place they are not permitted at all is the driving skills exam, where the manual states you may not use them. No brake or signal lights is a two-point violation.",
        trap:
          "Knowing the hand signals will not help you on the skills exam. Indiana bars them there specifically.",
        excerptKey: "hand-signals-not-on-exam",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Signaling Intention to Turn",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_13",
        topic: "signs",
        question: "Which colour does Indiana use for signs carrying road services and information?",
        choices: ["Brown", "Green", "White", "Blue"],
        correctIndex: 3,
        explanation:
          "Blue. The manual's example is a sign listing the amenities at an upcoming exit.",
        context:
          "The three information colours are the ones drivers confuse: blue is services, brown is recreational and cultural sites, green is guidance and distances. Regulations sit on white, urgent regulations on red, warnings on yellow and fluorescent yellow-green, and temporary conditions on orange. Seven colours, seven jobs.",
        trap:
          "A state park sign is brown, not blue. Blue is what you need on the journey; brown is where you are going.",
        excerptKey: "sign-blue",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Colors",
        sourceUrl: CH(6),
      },
      {
        id: "in_s4_14",
        topic: "safety",
        question: "Where does Indiana say your head restraint should sit?",
        choices: [
          "Level with the back of your neck",
          "Higher than the top of your head and as close to the back of it as possible",
          "As far back as it will go, to avoid contact",
          "Level with your shoulders",
        ],
        correctIndex: 1,
        explanation:
          "Higher than the top of your head and as close to the back of it as you can get it. A restraint set low acts as a pivot rather than a support.",
        context:
          "The manual gives a matching set of seating rules: the belt low on the hips and flat across the collarbone, and the driver sitting at least 12 inches back from the steering wheel because of the air bag. All three exist to make the restraint system work as designed rather than to make you comfortable.",
        trap:
          "A gap behind your head is not a safety margin. The closer the restraint sits, the less your neck moves before it catches you.",
        excerptKey: "head-restraint-position",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Seat Belts",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_15",
        topic: "licensing",
        question:
          "You are 19 and hold an Indiana learner's permit. Who may supervise your practice driving?",
        choices: [
          "Any licensed adult over 18",
          "A parent or guardian only",
          "A licensed driver of any age, if they hold a full licence",
          "A licensed driver aged at least 25, or your spouse if licensed and 21 or over",
        ],
        correctIndex: 3,
        explanation:
          "At 18 or over the supervisor must be a licensed driver of at least 25 with valid privileges, or your spouse if licensed and at least 21.",
        context:
          "Indiana adds a relationship requirement below 18 that disappears at 18: an under-18 permit holder practising outside a driver education programme needs a supervising driver of 25 or more who is related by blood, marriage or legal status, or a licensed driving instructor or certified rehabilitation specialist. In every version the supervising driver sits in the front passenger seat.",
        trap:
          "Being over 21 is not enough on its own. Only a spouse gets in at 21; everyone else has to be 25.",
        excerptKey: "adult-permit-practice",
        sourceLabel: "Indiana Driver's Manual - Chapter 1, Practice Driving with Your Learner's Permit",
        sourceUrl: CH(1),
      },
      {
        id: "in_s4_16",
        topic: "sharing",
        question:
          "You have parked on a city street and are about to open the driver's door. What does Indiana ask you to do first?",
        choices: [
          "Sound the horn to warn passing traffic",
          "Signal with your indicators",
          "Open the door quickly to be visible",
          "Check for bicyclists",
        ],
        correctIndex: 3,
        explanation:
          "Look for cyclists before the door moves. A door opened into a bike lane leaves a rider no room and no time.",
        context:
          "Indiana is thorough about bike lanes generally: do not drive or park in one, do not position your vehicle so it obstructs bicycle traffic, yield to a cyclist using one, do not move into one to set up a turn, and cross one only when you are actually turning or entering or leaving an alley, driveway or private road. Sharrow markings exist partly to push cyclists away from exactly this door zone.",
        trap:
          "A quick glance in the mirror does not cover it. A cyclist can be inside your blind spot at the moment you reach for the handle.",
        excerptKey: "bicycle-check-door",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Bicycles",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_17",
        topic: "signals",
        question: "What does a signal displaying only bicycle symbols control?",
        choices: [
          "A bike lane or separate bike path, and it applies only to bicyclists",
          "All traffic in the nearest lane",
          "A shared lane for bicycles and buses",
          "A crossing for pedestrians and cyclists together",
        ],
        correctIndex: 0,
        explanation:
          "It governs a bike lane or a separate path, and it speaks only to bicyclists. Red, yellow and green mean what they always mean.",
        context:
          "Indiana has a matching signal for transit: white rectangular bars control a bus or transit lane and apply only to bus and transit operators. Coloured pavement backs both up - green to make bike lanes more visible, red for bus and transit lanes. A cyclist stuck at a bicycle signal that will not change may proceed after a complete stop of at least two minutes.",
        trap:
          "A bicycle signal showing red does not release you at a normal red. Read the signal that is aimed at your lane.",
        excerptKey: "bicycle-signal",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Bicycle Signals",
        sourceUrl: CH(6),
      },
      {
        id: "in_s4_18",
        topic: "speed",
        question: "When do Indiana's common school zone speed limits normally apply?",
        choices: [
          "All day, every day of the year",
          "Only while a crossing guard is on duty",
          "7 a.m. to 4:30 p.m. Monday to Friday, or when the beacons are flashing",
          "8 a.m. to 3 p.m. on school days only",
        ],
        correctIndex: 2,
        explanation:
          "The common hours are 7 a.m. to 4:30 p.m. Monday to Friday, or whenever the school speed limit beacons are flashing.",
        context:
          "That is the usual pattern rather than a fixed statewide rule: the manual notes that local authorities may also set lower school zone limits whenever children are present. The signs themselves are five-sided or fluorescent yellow-green, and disobeying a school zone sign is on the BMV's list of automatic failures for the driving skills exam.",
        trap:
          "The limit does not end at the final bell. The stated window runs to 4:30 p.m., and a flashing beacon overrides the clock either way.",
        excerptKey: "school-zone-hours",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, School Zone Speed Limits",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_19",
        topic: "rightOfWay",
        question:
          "You are in a multi-lane roundabout and realise you are in the wrong lane for your exit. What does Indiana say?",
        choices: [
          "Change lanes as soon as a gap appears",
          "Stop and wait for a gap in the adjacent lane",
          "Reverse to the previous exit",
          "Do not change lanes in the circulatory roadway - carry on and go round again",
        ],
        correctIndex: 3,
        explanation:
          "Lane changes inside the circle are out. You pick your lane before entering, and if you get it wrong you continue round rather than cutting across.",
        context:
          "Indiana signs and marks its multi-lane roundabouts in advance for exactly this reason, so the lane decision is made on the approach. Circulating traffic has priority over anyone entering, so a driver stopping mid-circle to change lanes blocks the whole thing. Large vehicles get priority within the circle, and where two large trucks meet, the right lane yields to the left.",
        trap:
          "Missing your exit costs you one more lap and nothing else. Cutting across inside the circle is what causes the collision.",
        excerptKey: "roundabout-no-lane-change",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Roundabouts",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_20",
        topic: "emergencies",
        question:
          "A crash has damaged an unattended parked car and the owner is nowhere to be found. What must you do?",
        choices: [
          "Leave a note and drive on",
          "Report it to your insurer within 48 hours",
          "Stop, try to notify the owner, and if you cannot, call a law enforcement agency",
          "Nothing, provided the damage is only cosmetic",
        ],
        correctIndex: 2,
        explanation:
          "Stop and stay at the scene, take reasonable steps to find the owner, and where you cannot, call a law enforcement agency and give them the information.",
        context:
          "Indiana treats a collision with unattended property the same way it treats one with another driver: the duty is to stop, to remain, and to make sure the details reach someone. Leaving the scene of an accident is on the list of major offences that count toward habitual traffic violator status, which can end in a ten-year suspension.",
        trap:
          "A note under a wiper is not what the manual asks for. If the owner cannot be found, law enforcement has to be told.",
        excerptKey: "accident-unattended-vehicle",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, Provide Reasonable Assistance",
        sourceUrl: CH(8),
      },
      {
        id: "in_s4_21",
        topic: "rules",
        question: "What does a solid yellow line on your side of the centre mean in Indiana?",
        choices: [
          "Do not cross it except to turn",
          "It may be crossed to pass when the road ahead is clear",
          "It marks the edge of the roadway",
          "It separates lanes travelling in the same direction",
        ],
        correctIndex: 0,
        explanation:
          "A solid yellow line on your side is a no-passing line. Turning across it is the exception the manual allows.",
        context:
          "Indiana treats it as one of the four ways a passing prohibition is announced, alongside the pennant-shaped NO PASSING ZONE sign on the left, the white rectangular DO NOT PASS sign on the right, and the situational rules about curves, hill crests and the 100 feet around intersections, railroad crossings, bridges, viaducts and tunnels. Crossing a solid yellow line to pass is an automatic failure on the skills exam.",
        trap:
          "The permission to turn across it does not extend to easing across it to overtake. Those are different manoeuvres.",
        excerptKey: "yellow-lane-markings",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Lane Markings",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_22",
        topic: "signs",
        question: "What is the point of a supplemental plaque under a stop sign in Indiana?",
        choices: [
          "It gives the hours the stop applies",
          "It tells you which directions at the intersection must stop",
          "It identifies the road you are crossing",
          "It shows the distance to the next stop sign",
        ],
        correctIndex: 1,
        explanation:
          "It tells you how much of the intersection is controlled - ALL WAY, or CROSS TRAFFIC DOES NOT STOP.",
        context:
          "That distinction changes what you can assume once you have stopped. With an ALL WAY plaque, order of stopping decides who goes and the vehicle on the left yields a tie. With CROSS TRAFFIC DOES NOT STOP, you have no claim at all until the road is genuinely clear, because the other drivers have no reason to slow.",
        trap:
          "An unplaqued stop sign is not automatically an all-way stop. Assuming cross traffic is stopping too is how these collisions happen.",
        excerptKey: "supplemental-plaques",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Supplemental Plaques",
        sourceUrl: CH(6),
        commonlyMissed: true,
      },
      {
        id: "in_s4_23",
        topic: "safety",
        question:
          "You have driven through deep puddles and your brakes feel soft. What does Indiana suggest?",
        choices: [
          "Stop and let them dry before driving on",
          "Test them by pumping them, which helps dry them out",
          "Use the parking brake until they recover",
          "Drive faster to force air through the discs",
        ],
        correctIndex: 1,
        explanation:
          "Pump them. Testing the brakes after standing water both tells you what you have and helps dry the friction surfaces.",
        context:
          "It fits Indiana's wider wet-weather advice: slow down for heavy rain, standing water or slush, slow down further if the water is deeper than your tread, and use headlights so other drivers can see you. If the water is deep enough to be over the road, the instruction changes entirely - do not drive into it, because the depth is not obvious and it may be hiding a washout.",
        trap:
          "Waiting for the brakes to dry on their own leaves you with no brakes in the meantime. Pumping is both the test and the fix.",
        excerptKey: "wet-brakes-pump",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Rain",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_24",
        topic: "licensing",
        question: "How long is an Indiana driver's licence valid for a driver aged 78?",
        choices: ["Six years", "Four years", "Three years", "Two years"],
        correctIndex: 2,
        explanation:
          "Three years for drivers aged 75 through 84. Under 75 it is six years, and at 85 or over it drops to two.",
        context:
          "The shortening ladder exists so that vision screening and any medical review come round more often as drivers age. A probationary licence works differently again: it runs until you are 21 years and 30 days old, cannot be renewed before your 21st birthday, and turns into an unrestricted licence at that renewal. A commercial licence is four years regardless of age.",
        trap:
          "The four-year figure belongs to the commercial licence, not to any age band of an ordinary one.",
        excerptKey: "licence-validity",
        sourceLabel: "Indiana Driver's Manual - Chapter 1, Driver's License Validity",
        sourceUrl: CH(1),
      },
      {
        id: "in_s4_25",
        topic: "sharing",
        question:
          "What restriction does Indiana place on a motor driven cycle's speed?",
        choices: [
          "It may not exceed 25 miles per hour",
          "It may not exceed 45 miles per hour",
          "It may not exceed 35 miles per hour",
          "It follows the posted limit like any other vehicle",
        ],
        correctIndex: 2,
        explanation:
          "35 mph is the cap for a motor driven cycle, regardless of what the road is posted at.",
        context:
          "An MDC in Indiana is a vehicle with a seat or saddle, no more than three wheels on the ground, an engine of no more than 50 cubic centimetres, and MDC registration. Operators must be at least 15, must wear a helmet and eye protection under 18, must ride astride the seat with headlamps lit, must keep near the right-hand edge except to pass or set up a left turn, may not carry passengers, and may not use an interstate or a sidewalk.",
        trap:
          "25 mph is the slow-moving vehicle emblem figure. The MDC cap is 35.",
        excerptKey: "mdc-35-mph",
        sourceLabel: "Indiana Driver's Manual - Chapter 2, MDC - Motor Driven Cycle",
        sourceUrl: CH(2),
      },
      {
        id: "in_s4_26",
        topic: "signals",
        question:
          "A pedestrian signal starts flashing DON'T WALK while someone is halfway across. What is it telling them?",
        choices: [
          "The time to cross safely is ending",
          "They must turn back to the kerb they left",
          "Vehicles have already been released",
          "The signal has malfunctioned",
        ],
        correctIndex: 0,
        explanation:
          "A flashing display is the warning that the crossing interval is running out, not an instruction to a pedestrian already in the road.",
        context:
          "Indiana explains the pedestrian signal set as a pair: WALK or a walking figure means it is safe to start crossing, DON'T WALK or a raised hand means it is not, and the flashing state marks the transition between them. At some intersections a button near the base of the signal or the stop sign calls the walk phase. As a driver, a flashing DON'T WALK means expect someone still in the crosswalk.",
        trap:
          "It is not a green light for drivers. Someone who started legally is still crossing and still has the right of way.",
        excerptKey: "pedestrian-signal-flashing",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Pedestrian Signals",
        sourceUrl: CH(6),
      },
      {
        id: "in_s4_27",
        topic: "impairment",
        question:
          "How many points does a hand-held device violation carry on an Indiana driving record?",
        choices: ["Two points", "Six points", "One point", "Four points"],
        correctIndex: 3,
        explanation:
          "Four points, the same as unsafe lane movement or disregarding a stop or yield sign.",
        context:
          "Four points is a third of the way to the six that force a knowledge exam at renewal, and points sit on your record for two years from conviction. The underlying rule is that a telecommunications device may not be used at all while driving, with hands-free operation and a genuine 911 call as the only exceptions.",
        trap:
          "It is not a minor two-point offence. Indiana rates it alongside running a stop sign.",
        excerptKey: "points-handheld",
        sourceLabel: "Indiana Driver's Manual - Chapter 5, Point Values",
        sourceUrl: CH(5),
        commonlyMissed: true,
      },
      {
        id: "in_s4_28",
        topic: "speed",
        question:
          "You are on an interstate running through Indianapolis with no posted limit visible. What is the maximum?",
        choices: ["70 mph", "65 mph", "55 mph", "60 mph"],
        correctIndex: 2,
        explanation:
          "55 mph. An interstate inside an urban area is held to 55, not the 70 that applies to the rural stretches of the same road.",
        context:
          "Urban here means a population of at least 50,000. The 55 figure also covers non-divided state highways and county roads, which makes it the most widely applicable single number in Indiana's list. Above it sit the rural state divided highway at 60 and the rural interstate at 70; below it the urban residential 30 and the alley 15.",
        trap:
          "The interstate does not carry its rural limit into the city. Same road, different number.",
        excerptKey: "urban-interstate-55",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Urban Speed Limits",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s4_29",
        topic: "parking",
        question:
          "You are pulling out of a parking space into moving traffic. What does Indiana ask for?",
        choices: [
          "Nothing beyond a mirror check",
          "Use your turn signal",
          "Sound the horn as you emerge",
          "Reverse into the traffic lane so you can see better",
        ],
        correctIndex: 1,
        explanation:
          "Signal. Indiana states it as an instruction in its own right for entering traffic from a parking space.",
        context:
          "It comes alongside two related duties: look in both directions and double-check for cars and pedestrians when backing out of a space, and check for bicyclists before opening a door. Reversing generally requires you to turn your body and look through the back window rather than relying on the mirror, and to go slowly while watching in every direction.",
        trap:
          "A parking space is not exempt from signalling because the movement is short. The signal is what tells approaching traffic you are joining it.",
        excerptKey: "signal-before-leaving-space",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Parallel Parking",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_30",
        topic: "rightOfWay",
        question:
          "A pedestrian using a white cane is waiting to cross where there is no marked crosswalk. What applies?",
        choices: [
          "You must always yield the right of way to a person who is visually impaired",
          "You have the right of way outside a marked crosswalk",
          "You should sound your horn to indicate you have seen them",
          "You should proceed slowly past them",
        ],
        correctIndex: 0,
        explanation:
          "Indiana states this without qualification: drivers must always yield to persons who are visually impaired.",
        context:
          "The manual explains why the cane and the guide dog matter to you specifically - independent travel for a person with a visual disability carries risk that drivers can greatly reduce simply by recognising the signals. It sits inside a general duty to yield to pedestrians that Indiana never conditions on a crosswalk, and a separate rule against making a turn that forces any pedestrian to stop or slow.",
        trap:
          "Sounding your horn is not a courtesy here. It gives no direction and can startle someone navigating by sound.",
        excerptKey: "white-cane-guide-dog",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Visually Impaired Pedestrians",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_31",
        topic: "rules",
        question:
          "Which of these is on Indiana's list of automatic failures for the driving skills exam?",
        choices: [
          "Leaving your indicator on after a lane change",
          "Failing to check your blind spot",
          "Driving too slowly",
          "Passing in a no-passing zone or crossing a solid yellow line",
        ],
        correctIndex: 3,
        explanation:
          "Passing in a no-passing zone or otherwise crossing a solid yellow line ends the exam there and then.",
        context:
          "Indiana keeps two separate lists. Faults that can affect your score include leaving a signal on, driving too slowly, failing to check a blind spot, and following too closely. Automatic failures are the safety-critical ones: disobeying a yield, stop, school zone or no-turn-on-red sign, disobeying a signal, backing over a kerb, speeding, driving too fast for conditions, turning into the wrong lane, straddling lanes, failing to yield, and failing to stop for an emergency vehicle or a school bus.",
        trap:
          "The other three options are all real faults, but they cost you marks rather than the exam. Crossing the solid yellow ends it.",
        excerptKey: "skills-exam-auto-fail",
        sourceLabel: "Indiana Driver's Manual - Chapter 1, Driving Skills Exam",
        sourceUrl: CH(1),
      },
      {
        id: "in_s4_32",
        topic: "safety",
        question: "Why does Indiana warn about ramps, bridges and overpasses in winter?",
        choices: [
          "Moisture on them may freeze before the rest of the road does",
          "They are cleared last by the highway authority",
          "They collect more snow because of their camber",
          "Their surfaces are always smoother than the road",
        ],
        correctIndex: 0,
        explanation:
          "Cold air gets at them from above and below, so moisture can freeze there while the ordinary road surface is still merely wet.",
        context:
          "The manual's other winter instructions are practical ones. Clear your windows before setting off, brush the snow off your headlights and taillights regularly, and watch for drifting snow in rural areas where a few inches can close a road. Stay well back from snowploughs, and run a full tank so the heater can keep working if you are stranded.",
        trap:
          "A road that looks merely wet can be iced on the bridge deck. Indiana even signs this one - WATCH FOR ICE ON BRIDGES is a listed warning sign.",
        excerptKey: "bridges-freeze-first",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Winter Driving",
        sourceUrl: CH(7),
      },
      {
        id: "in_s4_33",
        topic: "licensing",
        question: "How long do you have to obtain an Indiana driver's licence after becoming a resident?",
        choices: ["90 days", "60 days", "30 days", "180 days"],
        correctIndex: 1,
        explanation:
          "60 days from becoming an Indiana resident.",
        context:
          "Indiana also bars you from holding two credentials at once, so any out-of-state licence has to be surrendered as part of the application. Whether you have to test depends on the state of the old licence: expired less than five years, or held unrevoked for less than a year, means a knowledge exam; expired more than five years means a knowledge exam and a skills test as well.",
        trap:
          "The 30-day figure belongs to address and name changes on an existing Indiana credential, not to a new resident's licence.",
        excerptKey: "new-resident-60-days",
        sourceLabel: "Indiana Driver's Manual - Chapter 1, Indiana Residency Requirements",
        sourceUrl: CH(1),
      },
      {
        id: "in_s4_34",
        topic: "emergencies",
        question:
          "It looks certain you will hit something. Which choice does Indiana say is safest?",
        choices: [
          "Something moving in the same direction as you",
          "Something solid, so the impact is over quickly",
          "Anything, as long as you keep both hands on the wheel",
          "An oncoming vehicle, which will slow you fastest",
        ],
        correctIndex: 0,
        explanation:
          "Hitting something moving your way is best, because the closing speed is lowest. A stationary object is next, and a head-on impact is the worst.",
        context:
          "The manual gives three ways out of an imminent collision - stop quickly, turn quickly, or in some cases accelerate out of the way - and tells you to turn away from oncoming traffic even if that means leaving the road. If you do leave it, drive off rather than skid off so you keep some control, and pick something that will give way, like brush or shrubs, over something hard.",
        trap:
          "The instinct to stay on the pavement at all costs is what puts drivers into the oncoming lane. Indiana would rather you took the verge.",
        excerptKey: "collision-hit-moving",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, Avoiding Collisions",
        sourceUrl: CH(8),
      },
      {
        id: "in_s4_35",
        topic: "signs",
        question: "What does a white background on an Indiana traffic sign indicate?",
        choices: [
          "A hazard warning",
          "A traffic regulation you must obey, or a state highway marker",
          "A temporary condition",
          "A service available ahead",
        ],
        correctIndex: 1,
        explanation:
          "White carries regulations - speed limits, NO TURN ON RED, turn prohibitions - and also does duty as a state highway marker.",
        context:
          "White and red are Indiana's two regulatory colours. White covers the ordinary rules you must obey; red is reserved for regulations needing immediate action to avoid a safety threat, such as WRONG WAY or DO NOT ENTER. Because both are regulatory, the difference is urgency rather than force.",
        trap:
          "White is not an information colour despite the highway markers. A white rectangle with a number on it is a rule, not a suggestion.",
        excerptKey: "sign-white",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Colors",
        sourceUrl: CH(6),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Indiana's exceptions, its stacked thresholds, and the rules it words differently from every state on its border. If a number here surprises you, it is the number the manual gives.",
    questions: [
      {
        id: "in_s5_01",
        topic: "speed",
        question:
          "You are on a divided state highway in rural Indiana. There is no speed limit sign. What is the maximum?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 1,
        explanation:
          "60 mph. The rural state divided highway is a tier in its own right, above the 55 that applies to non-divided state highways and below the 70 on a rural interstate.",
        context:
          "Indiana is unusual in having this middle tier at all, which is why it is the single most-missed number in the manual. Remove the median from the same road and it drops to 55; upgrade it to an interstate and it rises to 70 for cars and 65 for heavy trucks. The BMV puts this exact question in its own published practice exam.",
        trap:
          "55 is the answer almost everywhere else and the wrong one here. A rural divided state highway in Indiana is 60.",
        excerptKey: "rural-divided-60",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Rural Interstate Highway Speed Limits",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s5_02",
        topic: "licensing",
        question:
          "How does the Chapter 1 rule on telecommunications devices for probationary licence holders differ from the general rule?",
        choices: [
          "It permits hands-free use, like the general rule",
          "It applies only to drivers under 18",
          "It applies only between 10 p.m. and 5 a.m.",
          "It bars any form of telecommunications device except for a 911 call",
        ],
        correctIndex: 3,
        explanation:
          "Chapter 1's probationary paragraph bans any use of a telecommunications device, with a 911 emergency call as the only exception. It does not carry the hands-free allowance the general rule carries.",
        context:
          "The manual states three overlapping versions of this rule. Chapter 1's general public-safety paragraph gives the older texting rule - no typing, transmitting or reading a text or email unless hands-free or calling 911. Chapter 1's probationary paragraph is the broadest, with no hands-free exception at all. Chapter 7 states the modern rule: no use of the device, hands-free or 911 excepted. A hand-held device violation is four points.",
        trap:
          "Reading only Chapter 7 leaves you thinking hands-free is universally fine. The probationary paragraph is written more tightly than that.",
        excerptKey: "probationary-phone-ban",
        sourceLabel: "Indiana Driver's Manual - Chapter 1, Probationary Driver's License Telecommunications Device Prohibition",
        sourceUrl: CH(1),
      },
      {
        id: "in_s5_03",
        topic: "signals",
        question:
          "Which vehicles does Indiana's two-minute dead-red allowance NOT cover?",
        choices: [
          "Motorcycles",
          "Bicycles at a bicycle traffic signal",
          "Autocycles",
          "Motor driven cycles",
        ],
        correctIndex: 2,
        explanation:
          "Autocycles are excluded. The manual says the rule does not apply to them, while motorcycles, motor driven cycles and bicycles all get the allowance.",
        context:
          "The rule exists because a light two-wheeler often will not trip the induction loop buried in the pavement, so the light never sees it and never changes. An autocycle is a three-wheeled vehicle with a roll cage, seat belts, anti-lock brakes and a steering wheel, heavy enough that the detector does pick it up - and you drive one on an ordinary Indiana driver's licence with no motorcycle endorsement at all.",
        trap:
          "Three wheels and a motorcycle-ish look do not make an autocycle a motorcycle for this rule. Indiana carves it out by name.",
        excerptKey: "dead-red-not-autocycles",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Approaching a Red Light or Stop Sign",
        sourceUrl: CH(6),
        commonlyMissed: true,
      },
      {
        id: "in_s5_04",
        topic: "rules",
        question:
          "You are on a four-lane road with a raised concrete barrier down the middle and a school bus stops on the opposite side with red lights on. What must you do?",
        choices: [
          "Stop, as on any other road",
          "Stop only if children are visible",
          "Slow to 10 mph and pass with caution",
          "Carry on - only traffic going the same way as the bus must stop",
        ],
        correctIndex: 3,
        explanation:
          "Where the roadway is divided by a barrier or an unimproved median, only traffic travelling in the same direction as the bus is required to stop.",
        context:
          "Everything turns on what is dividing the road. A physical barrier or an unimproved median triggers the exception; a painted centre line, however wide, does not. On an ordinary undivided road - including a four-lane one with nothing but paint down the middle - traffic in both directions must stop. Disregarding a stop arm is a Class A misdemeanour, and a felony if it injures or kills someone.",
        trap:
          "Four lanes is not the test, and neither is a two-way left-turn lane. The question is whether there is a barrier or an unimproved median.",
        excerptKey: "school-bus-divided-exception",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, School Buses",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s5_05",
        topic: "sharing",
        question:
          "Two large trucks reach a multi-lane Indiana roundabout side by side. Which one yields?",
        choices: [
          "The driver in the right lane yields to the driver in the left lane",
          "The driver in the left lane yields to the driver in the right lane",
          "Whichever entered the roundabout second",
          "Neither - both proceed at reduced speed",
        ],
        correctIndex: 0,
        explanation:
          "The right lane yields to the left. It is the reverse of the intuition most drivers bring to a roundabout.",
        context:
          "The reason is the geometry of the exit. A long vehicle in the left lane needs to swing wide to get round and out, and the right lane is where that swing lands. The same section requires ordinary drivers to yield to large vehicles in a multi-lane roundabout, including slowing or stopping to let them through, which is the only place Indiana gives a vehicle priority for being big.",
        trap:
          "Roundabouts usually favour the inside lane's occupant giving way, not claiming priority. Indiana's truck rule runs the other way.",
        excerptKey: "roundabout-two-trucks",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Roundabouts",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s5_06",
        topic: "safety",
        question:
          "Your rear wheels start sliding sideways in a car with conventional brakes. Which way do you steer?",
        choices: [
          "In the direction the rear of the car is sliding",
          "Away from the direction of the slide",
          "Straight ahead, without any steering input",
          "Toward the outside of the corner",
        ],
        correctIndex: 0,
        explanation:
          "Steer in the direction the back of the car is going, in a controlled way, and ease off the accelerator at the same time.",
        context:
          "Indiana adds two limits to that instruction: do not make a fast turn away from the direction of the skid, and do not steer too far, because either can flip the slide into a spin. Once traction returns, straighten up and carry on slowly. The correction is the same whether the car is front-wheel drive or rear-wheel drive, which is a point the manual makes explicitly.",
        trap:
          "The ABS answer is different. With anti-lock brakes you keep firm continuous pressure on the pedal and steer normally, and you do not pump.",
        excerptKey: "skid-conventional-brakes",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Skidding",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_07",
        topic: "rightOfWay",
        question:
          "At a dark, non-operating signal, which vehicle does Indiana say you must yield to on a simultaneous arrival?",
        choices: [
          "The one to your left",
          "The one that is going straight",
          "The one to your right",
          "The larger vehicle",
        ],
        correctIndex: 2,
        explanation:
          "At a dark signal the manual words it as yielding to the vehicle that arrived at the same time and is to your right.",
        context:
          "Indiana states the same underlying rule two ways in the same chapter. At an all-way stop and at a flashing red light it says the vehicle on the left shall yield; at a non-operating signal it says yield to the vehicle on your right. Both produce the identical outcome. What matters is not being thrown by whichever phrasing the question uses.",
        trap:
          "The left-yields wording elsewhere in the manual is the same rule, not a different one. Answering from memory of the phrase rather than the outcome is what catches people.",
        excerptKey: "dark-signal-yield-right",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Approaching an Intersection with Non-Operating Signal",
        sourceUrl: CH(6),
        commonlyMissed: true,
      },
      {
        id: "in_s5_08",
        topic: "signs",
        question:
          "Traffic signals at an intersection in the middle of a street start flashing red in all directions. What does Indiana say this indicates?",
        choices: [
          "A train is approaching on tracks running down the street",
          "The signal controller has failed",
          "A funeral procession is passing",
          "An emergency vehicle is approaching",
        ],
        correctIndex: 0,
        explanation:
          "Where trains run on tracks laid in the middle of a street, all-directions flashing red is how Indiana announces an approaching train.",
        context:
          "The manual tells you to treat that indication exactly like any other crossing warning. The wider railroad section is full of things drivers assume are optional and are not: driving round a lowered gate is illegal, you never begin to cross unless you can clear the tracks without stopping, and where there are two tracks you check for a second train once the first has passed.",
        trap:
          "It looks like a failed signal and it is not. Treating it as a four-way stop and edging out puts you onto the tracks.",
        excerptKey: "rr-street-tracks",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Railroad Crossing Safety",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_09",
        topic: "impairment",
        question:
          "An Indiana driver holds a licence carrying Restriction 2. What alcohol condition applies to them?",
        choices: [
          "They must not drive at all after consuming alcohol",
          "The ordinary .08 limit, like any other driver",
          "They must not operate a vehicle with a blood alcohol content of .02 or more",
          "They must not drive between 10 p.m. and 5 a.m.",
        ],
        correctIndex: 2,
        explanation:
          "Restriction 2 is the habitual traffic violator conditional restriction, and it sets a .02 ceiling rather than the ordinary .08 - as well as requiring the driver to submit to chemical testing on request.",
        context:
          "The driver also signs an affidavit acknowledging the testing obligation when the credential is issued. It sits inside Indiana's habitual traffic violator scheme, where two judgments involving injury or death in ten years brings a ten-year suspension, three major offences in ten years brings ten years, and ten violations in ten years including one major offence brings five.",
        trap:
          ".02 is a restriction attached to a particular licence, not a general Indiana rule. This question is about Restriction 2 specifically.",
        excerptKey: "bmv-restriction-2-bac",
        sourceLabel: "Indiana BMV - Endorsements and Restrictions",
        sourceUrl: RESTRICTIONS_PAGE,
        commonlyMissed: true,
      },
      {
        id: "in_s5_10",
        topic: "emergencies",
        question:
          "Your car is stalled on a railroad crossing, no train is in sight, and there is a blue sign on the crossing gate. What do you do first?",
        choices: [
          "Call 911 and wait for them to reach the railroad",
          "Call the Emergency Notification System number on the blue sign",
          "Try to push the vehicle clear yourself",
          "Set out warning triangles along the track",
        ],
        correctIndex: 1,
        explanation:
          "Call the Emergency Notification System first, using the number on the blue sign attached to the crossing gate. ENS can reach the trains directly. Then call 911.",
        context:
          "The order matters because the railroad can hold or stop approaching trains far faster than a dispatcher relaying the message. If a train IS approaching, the priority reverses entirely - get everyone out, get clear, run at a 45-degree angle away from the tracks in the direction the train is coming from, and call 911 afterwards. Once the lights flash and the gate begins to drop you have about 20 seconds.",
        trap:
          "911 is the reflex and the second call here. The blue ENS sign exists because the railroad is the one who can stop the train.",
        excerptKey: "rr-ens-blue-sign",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Safety at Railroad Crossings",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_11",
        topic: "parking",
        question:
          "You are parking on a slope where there is no kerb at all. Which way do the wheels go?",
        choices: [
          "Toward the street, so the car stays visible",
          "Straight ahead with the parking brake on",
          "Uphill, whichever direction you are facing",
          "Away from the street",
        ],
        correctIndex: 3,
        explanation:
          "With no kerb, the wheels point away from the street in either direction, so a car that starts rolling leaves the roadway rather than joining it.",
        context:
          "Indiana gives three cases rather than two. Facing downhill against a kerb, wheels toward the kerb. Facing uphill against a kerb, wheels away from it, so the car rolls back into the kerb. No kerb at all, wheels away from the street. The first two are mirror images and get swapped constantly; the third is the one people never learn at all.",
        trap:
          "The downhill and uphill rules both assume a kerb to catch the car. Take the kerb away and only one answer works in either direction.",
        excerptKey: "parking-no-curb",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Parallel Parking",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_12",
        topic: "rules",
        question:
          "How far beyond the rear of a vehicle must a load extend before Indiana requires it to be flagged or lit?",
        choices: ["Six feet", "Two feet", "Three feet", "Four feet"],
        correctIndex: 3,
        explanation:
          "Four feet. Beyond that a red flag of not less than 12 square inches is required in daylight, and a red lamp between sunset and sunrise.",
        context:
          "Both markers have to be visible from the rear and from both sides, and the lamp has to be visible at 500 feet - the same 500-foot figure Indiana uses for headlights and for dipping to low beam. The rule catches tailboards and tailgates that project as well as the load itself.",
        trap:
          "The flag and the lamp are not alternatives you choose between. Daylight takes the flag; sunset to sunrise takes the lamp.",
        excerptKey: "load-four-feet-lamp",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Truck Equipment Requirements",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_13",
        topic: "licensing",
        question:
          "Your Indiana driver's licence has been expired for six years. What must you do to get back on the road?",
        choices: [
          "Pay a penalty and pass a vision screening",
          "Pay a penalty and pass a knowledge exam",
          "Pay a penalty and pass a knowledge exam, a skills exam and a vision screening",
          "Nothing beyond the standard renewal",
        ],
        correctIndex: 2,
        explanation:
          "Past five years you are effectively starting again: an administrative penalty, a knowledge exam, a driving skills exam and a vision screening.",
        context:
          "The ladder has two rungs. Expired at least 180 days but not more than five years means a penalty, a knowledge exam and a vision screening. Expired five years or more adds the skills exam. Every renewal after the expiry date carries an administrative penalty regardless of how far past it you are.",
        trap:
          "The five-year mark is what adds the road test, not the knowledge exam. That one arrives at 180 days.",
        excerptKey: "renew-expired-5yr",
        sourceLabel: "Indiana Driver's Manual - Chapter 4, Renewing a Credential",
        sourceUrl: CH(4),
      },
      {
        id: "in_s5_14",
        topic: "sharing",
        question:
          "How far back does Indiana ask you to stay when following a motorcycle?",
        choices: [
          "Two seconds, as for any vehicle",
          "At least three or four seconds",
          "One hundred feet",
          "Twice the gap you would leave for a car",
        ],
        correctIndex: 1,
        explanation:
          "Three or four seconds, which is longer than the two to three the manual gives for following an ordinary vehicle.",
        context:
          "The extra second buys the rider room to manoeuvre or stop in an emergency. Motorcycles can stop far more quickly than a car, they can change speed or lane position suddenly to avoid potholes, gravel or a pavement seam, and their small profile makes their speed and distance hard to judge. Indiana asks you to give them the width of a full lane too.",
        trap:
          "Two to three seconds is the general figure. Applying it to a motorcycle is exactly the error the separate rule exists to prevent.",
        excerptKey: "motorcycle-three-four-seconds",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Motorcycles and Motor Driven Cycles",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s5_15",
        topic: "signals",
        question:
          "A pedestrian hybrid beacon shows two alternating flashing red lights. What may a driver do?",
        choices: [
          "Proceed through if the crossing is clear of pedestrians",
          "Stop and wait until the beacon goes dark",
          "Treat it as a steady red and remain stopped",
          "Proceed without stopping",
        ],
        correctIndex: 0,
        explanation:
          "Alternating flashing reds are the clearance phase: you may go through once you can see the crossing is clear of pedestrians.",
        context:
          "The beacon runs a fixed cycle once a pedestrian activates it - dark, flashing yellow to let drivers clear, steady yellow as a warning, two steady reds while the pedestrian crosses, then alternating flashing reds during the clearance interval, then dark again until the next activation. Knowing the sequence tells you where in it you are.",
        trap:
          "Flashing red is not the same as steady red here. Steady means stay stopped; alternating flashing means go if the crossing is clear.",
        excerptKey: "hybrid-beacon-flashing-red",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Pedestrian Hybrid Beacons",
        sourceUrl: CH(6),
      },
      {
        id: "in_s5_16",
        topic: "speed",
        question:
          "You are driving a school bus on an Indiana interstate. What is the maximum unless posted lower?",
        choices: ["40 mph", "55 mph", "60 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "60 mph on an interstate or highway. Off that network, a school bus is limited to 40 mph.",
        context:
          "Indiana publishes only a handful of vehicle-specific speed limits, and the pair of school bus figures is the one that trips people because 40 and 60 sound like they belong to different states rather than different roads. The other vehicle-specific figures are the 65 mph cap on trucks over 26,000 pounds on a rural interstate and the 25 mph ceiling announced by a slow-moving vehicle emblem.",
        trap:
          "40 is the general road figure. On the interstate the bus may run at 60, well above what most drivers expect of it.",
        excerptKey: "school-bus-60",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, School Bus Speed Limits",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s5_17",
        topic: "safety",
        question:
          "How does Indiana say you can tell your anti-lock brakes are working during a hard stop?",
        choices: [
          "A mechanical noise, vibration, or increased pedal resistance",
          "The pedal goes soft and sinks toward the floor",
          "The steering wheel becomes lighter",
          "The engine note changes",
        ],
        correctIndex: 0,
        explanation:
          "Noise, vibration or a pedal that pushes back harder. All three are the system doing its job, not a fault.",
        context:
          "The manual mentions it precisely so drivers do not lift off in alarm. With ABS the technique is to keep firm continuous pressure on the pedal and steer normally, and never to pump the brakes. It is the unfamiliar feedback - the noise and the juddering pedal - that makes people pump anyway, and pumping is the one thing that stops the system working.",
        trap:
          "A juddering pedal feels like something failing. It is the one signal that tells you the system is engaged.",
        excerptKey: "abs-working-signs",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Skidding",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_18",
        topic: "signs",
        question:
          "A flashing arrow board in a work zone is showing no direction either way. What does that mean?",
        choices: [
          "Move into the left lane",
          "Stop and wait for a flagger",
          "Move into the right lane",
          "Use caution, but you are not required to change lanes",
        ],
        correctIndex: 3,
        explanation:
          "A board flashing without pointing anywhere is a caution signal. It does not order you into another lane.",
        context:
          "Arrow boards are normally used to announce a lane closure or a crossover, with cones, barrels, barricades and lane markings tracing the path you must follow. Flaggers control traffic at some sites: a fluorescent orange or red flag held horizontally into the traffic lane means stop, and a paddle means whatever it says, STOP or SLOW. Automated flagger assistance devices do the same job with a sign or with red and yellow lights.",
        trap:
          "Assuming any flashing board means merge causes exactly the kind of last-second lane change the work zone was set up to avoid.",
        excerptKey: "arrow-board-no-direction",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Work Zones",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_19",
        topic: "rightOfWay",
        question:
          "You are at an all-way stop and genuinely cannot tell who arrived first. What does Indiana advise?",
        choices: [
          "Yield the right of way to the other driver",
          "Assert your position so the other driver knows what you intend",
          "Sound your horn and go",
          "Wait for the other driver to sound their horn",
        ],
        correctIndex: 0,
        explanation:
          "Where there is any doubt about who has the right of way, or any chance of a crash, Indiana tells you to give way.",
        context:
          "The manual sets this out immediately after the tie-break rule, which is telling: the formal rule is that the vehicle on the left yields, and the practical instruction is that doubt itself is enough reason to yield. Given that failure to yield is the most common contributing factor in Indiana collisions, the advice earns its place.",
        trap:
          "Asserting your right of way is not the assertive-driving answer the manual wants. It writes the tie-break rule and then tells you to give it up in doubt.",
        excerptKey: "all-way-stop-doubt",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, All-Way Stops",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_20",
        topic: "impairment",
        question:
          "Which of these does Indiana's aggressive driving definition include as one of the qualifying acts?",
        choices: [
          "Driving under the influence of alcohol",
          "Repeatedly flashing your headlights",
          "Failing to signal a lane change",
          "Driving without a valid licence",
        ],
        correctIndex: 1,
        explanation:
          "Repeatedly flashing your headlights is on the statutory list, alongside sounding the horn unnecessarily and overtaking on the right by driving off the roadway.",
        context:
          "Indiana requires at least three of the listed acts during one episode of continuous driving before the offence is made out. The full list is following too closely, unsafe operation of a vehicle, overtaking on the right by leaving the roadway, unsafe stopping or slowing, unnecessary horn use, failure to yield, failure to obey a traffic control device, driving at an unsafe speed, and repeatedly flashing the headlights.",
        trap:
          "The listed acts are mostly minor on their own. It is the combination of three in one episode that Indiana punishes.",
        excerptKey: "aggressive-list",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Aggressive Driving",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s5_21",
        topic: "rules",
        question:
          "Where does Indiana say a NO PASSING ZONE pennant sign is placed, and a DO NOT PASS sign?",
        choices: [
          "Both on the right-hand side of the road",
          "Both on the left-hand side of the road",
          "The pennant on the left, the DO NOT PASS sign on the right",
          "The pennant on the right, the DO NOT PASS sign on the left",
        ],
        correctIndex: 2,
        explanation:
          "The yellow pennant goes on the left-hand side of a two-way road; the white rectangular DO NOT PASS sign goes on the right.",
        context:
          "The split is deliberate. The pennant faces the driver who is thinking about crossing the centre line, so it sits where that driver is already looking. The rectangular sign sits in the normal position for a regulatory sign. Both back up the pavement marking - a solid yellow line on your side of the centre.",
        trap:
          "A sign on the left is not misplaced or facing the other carriageway. Indiana puts the pennant there on purpose.",
        excerptKey: "no-passing-signs",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Prohibited Passing",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_22",
        topic: "emergencies",
        question:
          "Your car is disabled in daylight on a divided highway. Where do the two red flags go?",
        choices: [
          "Approximately 100 feet in front of the car and 100 feet behind it",
          "Both approximately 200 feet behind the car",
          "Both immediately alongside the car",
          "Approximately 50 feet in front and 50 feet behind",
        ],
        correctIndex: 0,
        explanation:
          "One about 100 feet in front, one about 100 feet behind. It is a daytime requirement, distinct from the night-time devices.",
        context:
          "At night, or whenever headlights are required on a divided highway, the requirement changes to a lighted fuse, a lighted red electric lantern or a portable red emergency reflector placed 100 feet behind and 100 feet in front in the centre of your lane, plus one on the traffic side about ten feet from the vehicle. Stopped within 500 feet of a curve, hilltop or other obstruction, the device goes out to at least 500 feet.",
        trap:
          "The 200-foot figure belongs to the reflective triangle in the roadside emergency section. The daytime flags are 100 feet each way.",
        excerptKey: "disabled-vehicle-100-feet",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Warning Devices for Stopped Vehicles",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_23",
        topic: "licensing",
        question:
          "Which figure does the Indiana Driver's Manual actually publish for the number of questions on the driver knowledge exam?",
        choices: [
          "Fifty questions with a pass mark of forty",
          "Thirty questions with a pass mark of twenty-four",
          "None - the manual states no question count for the driver exam",
          "Twenty-five questions, of which you may miss five",
        ],
        correctIndex: 2,
        explanation:
          "Neither the manual nor any BMV page states how many questions the driver knowledge exam has. What is published is the structure: two components, 80 percent or higher on each.",
        context:
          "Chapter 9 does print a 25-question figure with a five-miss allowance, but it belongs to the for-hire endorsement exam and the motor driven cycle endorsement exam, both of which are separate tests. Reading that line as the driver exam's format is the most common misreading of the chapter.",
        trap:
          "The 25-question figure is right there in the same chapter, attached to a different exam. It is not the driver knowledge exam's format.",
        excerptKey: "endorsement-exam-25",
        sourceLabel: "Indiana Driver's Manual - Chapter 9, Knowledge Exam Sample Questions",
        sourceUrl: CH(9),
        commonlyMissed: true,
      },
      {
        id: "in_s5_24",
        topic: "sharing",
        question:
          "Where does the Indiana manual say tractor-trailers position themselves on a multi-lane highway, and why?",
        choices: [
          "The left lane, to stay clear of merging traffic",
          "The centre lane, to help local traffic on and off and keep their options open",
          "The right lane at all times, without exception",
          "Whichever lane is emptiest",
        ],
        correctIndex: 1,
        explanation:
          "The centre lane, both to leave the outside lane free for local traffic joining and leaving and to keep an escape route open in either direction.",
        context:
          "That is a description of practice, not the legal restriction, and the two need holding apart. The restriction is that trucks stay in the right lane where an interstate has two lanes in one direction, and in the right two lanes where it has three or more. The centre-lane habit is what the manual explains so you understand why a truck will not simply move over for you.",
        trap:
          "Right lane at all times is the rule for a two-lane carriageway only. With three or more lanes the truck has the right two.",
        excerptKey: "truck-centre-lane",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Maneuverability",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_25",
        topic: "safety",
        question:
          "Where does Indiana tell you to find the correct tyre pressure for your vehicle?",
        choices: [
          "Moulded into the tyre's sidewall",
          "On the tyre retailer's chart",
          "In the vehicle's service history",
          "On the sticker inside the driver's door, or in the owner's manual",
        ],
        correctIndex: 3,
        explanation:
          "The door-jamb sticker or the owner's manual. The manual states in capitals that you should not use the figure on the tyre's sidewall.",
        context:
          "The sidewall number is the tyre's own maximum, not what your car needs, so following it overinflates most vehicles. Indiana asks you to check pressures monthly or before a long trip, including the spare, and to check them cold - before driving, or at least three hours after. Tyres are known to lose about one psi a month on their own.",
        trap:
          "The sidewall figure is printed on every tyre and is the wrong one to use. That is exactly why the manual shouts about it.",
        excerptKey: "tyre-pressure-source",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Tire Pressure",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_26",
        topic: "signals",
        question:
          "You are at a red light with a crossbuck and a stop sign at a railroad crossing further on. What does the stop sign at the crossing require?",
        choices: [
          "Nothing extra if the crossbuck is visible",
          "A slow approach, with a stop only if bells are sounding",
          "A complete stop, then cross only after making certain no train is coming",
          "A stop only for commercial vehicles",
        ],
        correctIndex: 2,
        explanation:
          "A crossbuck with a stop sign means a full stop every time, then you cross only once you are certain no train is approaching.",
        context:
          "Indiana adds a specific warning: never assume no train is coming simply because there is only a stop sign there. A crossbuck standing alone is treated as a yield, leaving the decision to you. Active bells, flashing lights or gates mean stop and stay stopped until the warning cancels or an officer or railroad flagman directs you.",
        trap:
          "The absence of lights and gates is not evidence that the line is quiet. It only means the crossing is passively protected.",
        excerptKey: "crossbuck-with-stop-sign",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Crossbucks",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_27",
        topic: "speed",
        question:
          "Which of these Indiana roads carries a 55 mph maximum when nothing is posted?",
        choices: [
          "A non-divided state highway",
          "An urban residential street",
          "A rural state divided highway",
          "A rural interstate",
        ],
        correctIndex: 0,
        explanation:
          "A non-divided state highway is 55. Add a median in a rural area and it becomes 60; make it an interstate and it becomes 70 for cars.",
        context:
          "Indiana groups three roads at 55: the urban interstate, the non-divided state highway and the county road. The full list runs 70 rural interstate for passenger vehicles, 65 for heavy trucks on the same road, 60 rural state divided highway, 55 for those three, 30 urban residential and 15 alley. Every one of them yields to a posted sign.",
        trap:
          "Divided and non-divided are different tiers on what looks like the same state highway. The median is worth 5 mph.",
        excerptKey: "non-divided-state-highway-55",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Urban Speed Limits",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s5_28",
        topic: "signs",
        question:
          "Indiana's manual says traffic signs are posted by which bodies?",
        choices: [
          "The Bureau of Motor Vehicles alone",
          "The Indiana State Police",
          "Federal highway authorities only",
          "The Indiana Department of Transportation and local governments",
        ],
        correctIndex: 3,
        explanation:
          "INDOT and local governments, not the BMV. The BMV writes the manual and runs the exam; it does not put up the signs.",
        context:
          "That division explains something the exam expects of you: local authorities can set their own school zone limits whenever children are present, and can post limits that override any of the manual's default numbers. Signs use colour, shape, written messages and symbols precisely so that a driver can read them quickly regardless of who put them there.",
        trap:
          "The BMV's name on the manual makes it the obvious wrong answer. Signing is a transport and local-government job.",
        excerptKey: "signs-posted-by",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Signs and Signals",
        sourceUrl: CH(6),
      },
      {
        id: "in_s5_29",
        topic: "rightOfWay",
        question:
          "You are turning left across a bike lane at an intersection. What does Indiana say about moving into that lane?",
        choices: [
          "Move into it early so cyclists can pass on your left",
          "Do not move into a bicycle path or lane in preparation for a turn",
          "Move into it only if it is painted green",
          "Move into it whenever the lane beside you is congested",
        ],
        correctIndex: 1,
        explanation:
          "You do not enter a bike lane to set up a turn. You cross it only when actually turning, or entering or leaving an alley, driveway or private road.",
        context:
          "This is the opposite of what several other states teach, where merging into the bike lane before a right turn is the recommended technique. Indiana instead tells drivers to stay out of it, to yield to any cyclist using it, not to drive or park in it, and not to position a vehicle so it obstructs bicycle traffic in it. A cyclist may lawfully use the ordinary travel lane instead.",
        trap:
          "The merge-before-turning technique taught elsewhere is expressly forbidden here. Indiana's rule is to cross, not to occupy.",
        excerptKey: "bicycle-lane-no-turn-prep",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Bicycle Lanes",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_30",
        topic: "rules",
        question:
          "How does Indiana define an urban area for the purpose of its speed limits?",
        choices: [
          "An area with a population of at least 50,000",
          "Any area where street lighting is provided",
          "Anywhere with a posted limit under 40 mph",
          "Any area inside a city or town boundary",
        ],
        correctIndex: 0,
        explanation:
          "A population of at least 50,000. Rural interstate is defined as the mirror image - located outside an urban area of that size.",
        context:
          "That threshold is what switches the interstate limit between 70 and 55, so it does real work rather than being a definition for its own sake. It means a good many Indiana towns and small cities are not urban areas for this purpose, and the interstate running past them keeps its rural limit.",
        trap:
          "City limits signs and street lighting are not the test. The manual's definition is a population figure.",
        excerptKey: "urban-definition",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Urban Speed Limits",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_31",
        topic: "licensing",
        question:
          "How does the manual describe the training a BMV licensed driver education course contains?",
        choices: [
          "50 hours of supervised practice and 10 hours at night",
          "30 hours of theoretical training and six hours behind the wheel",
          "Six hours of classroom work and 30 hours behind the wheel",
          "180 days of supervised driving",
        ],
        correctIndex: 1,
        explanation:
          "30 hours of theory and six hours behind the wheel. Complete it and the school may administer your skills exam if it takes part in the BMV's programme.",
        context:
          "Those figures are separate from the 50 hours of supervised practice, 10 of them at night, that the licence application requires. Completing an approved course also lowers the licence age from 16 years and 270 days to 16. If the school does not take part in the testing programme, or you fail either portion of the course, the skills exam goes back to a BMV branch.",
        trap:
          "The 30 and six figures are the course; the 50 and 10 are the log. Neither substitutes for the other.",
        excerptKey: "driver-ed-hours",
        sourceLabel: "Indiana Driver's Manual - Chapter 1, Driving Skills Exam",
        sourceUrl: CH(1),
      },
      {
        id: "in_s5_32",
        topic: "safety",
        question:
          "Indiana warns about one type of vehicle whose rollover risk climbs sharply with the number of people aboard. Which?",
        choices: [
          "A pickup truck with a loaded bed",
          "A car towing a trailer",
          "A compact SUV",
          "A 15-passenger van",
        ],
        correctIndex: 3,
        explanation:
          "The 15-passenger van. Adding occupants raises its centre of gravity and its rollover risk climbs dramatically.",
        context:
          "The manual lists the aggravating factors alongside it: inexperienced drivers, improperly sized or inflated tyres, and cargo or passengers loaded in a way that shifts the centre of gravity. It sets that inside the broader rollover picture, where rollovers account for nearly a third of passenger vehicle fatalities and most of them start with a driver overcorrecting after leaving the roadway.",
        trap:
          "The obvious answer is a tall SUV. Indiana names the 15-passenger van specifically, because the risk rises with how full it is.",
        excerptKey: "rollover-15-passenger-van",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Rollover",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_33",
        topic: "emergencies",
        question:
          "A truck or bus is disabled on an Indiana roadway. What warning devices does the driver have to display?",
        choices: [
          "A single reflective triangle",
          "Hazard lights only",
          "Two red flags in daylight",
          "Three bi-directional reflective triangles, or six fuses or three liquid-burning flares",
        ],
        correctIndex: 3,
        explanation:
          "Three federally conforming bi-directional emergency reflective triangles, or at least six fuses, or three liquid-burning flares.",
        context:
          "Placement matters as much as the count: one about 100 feet toward approaching traffic, one about 100 feet in the other direction, each in the centre of the occupied lane, and one on the traffic side of the vehicle. On a divided highway the distance goes out to 200 feet, and within 500 feet of a curve or hill crest, to at least 500 feet.",
        trap:
          "The two-red-flags answer belongs to an ordinary disabled car in daylight. Trucks, buses and tractor-trailers carry the heavier requirement.",
        excerptKey: "truck-three-triangles",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Warning Devices for Stopped Vehicles",
        sourceUrl: CH(7),
      },
      {
        id: "in_s5_34",
        topic: "impairment",
        question:
          "A driver is convicted of operating a watercraft while intoxicated in Indiana. What happens to their driving privileges?",
        choices: [
          "Nothing - watercraft offences are handled separately",
          "They face the same penalties as an intoxicated motor vehicle operator",
          "Only a fine, with no effect on the driving record",
          "A suspension only if a motor vehicle was also involved",
        ],
        correctIndex: 1,
        explanation:
          "Indiana applies the same penalties as it would to an intoxicated driver, and the conviction goes onto your driver record.",
        context:
          "The link runs both ways. Operating a watercraft with an engine of more than 10 horsepower requires you to carry a valid driver's licence in the first place, you may not operate one at all while your licence is suspended, and other watercraft offences such as reckless operation are also added to your driving record.",
        trap:
          "Water and road look like separate legal worlds in most states. Indiana runs the watercraft offence straight through the driving record.",
        excerptKey: "owi-watercraft",
        sourceLabel: "Indiana Driver's Manual - Chapter 5, Operating a Watercraft While Intoxicated",
        sourceUrl: CH(5),
      },
      {
        id: "in_s5_35",
        topic: "parking",
        question:
          "Why does Indiana say the striped area beside an accessible parking space must be kept clear?",
        choices: [
          "It is a fire lane",
          "It marks the boundary of the car park",
          "A wheelchair user needs it to transfer in and out of the vehicle and to deploy a ramp",
          "It is reserved for loading and unloading goods",
        ],
        correctIndex: 2,
        explanation:
          "It is the transfer space. A wheelchair user needs it to get in and out, and an accessible vehicle needs it to deploy its ramp.",
        context:
          "The consequence is that parking there is prohibited at all times, even for someone holding a valid placard, and the manual states that ban in two separate chapters. Reserved accessible spaces themselves are marked with both a sign and pavement markings, and using an expired placard can bring a fine.",
        trap:
          "A placard makes no difference to the striped area. It is not parking of any kind; it is somebody's way out of their car.",
        excerptKey: "access-aisle-purpose",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Handicap Accessible Parking",
        sourceUrl: CH(7),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Full Exam Simulation",
    difficulty: "exam",
    description:
      "A full mixed paper across both of the BMV's components - signs on one side, the traffic rules of Chapters 6, 7 and 8 on the other. No hints, and the same 80 percent standard the real exam applies to each half.",
    questions: [
      {
        id: "in_s6_01",
        topic: "signs",
        question: "How many sign colours does the Indiana Driver's Manual describe?",
        choices: ["Seven", "Five", "Four", "Nine"],
        correctIndex: 0,
        explanation:
          "Seven: brown, blue, green, orange, white, yellow and fluorescent yellow-green, and red. There are also seven common shapes.",
        context:
          "The colour tells you the category of information before you have read a word. Brown is recreational and cultural sites, blue is road services, green is guidance and distances, and orange is temporary conditions. White carries regulations, yellow and fluorescent yellow-green carry warnings and school areas, and red is the regulation you have to act on immediately.",
        trap:
          "Yellow and fluorescent yellow-green are counted as one colour in the manual's list of seven, not two.",
        excerptKey: "sign-colors-seven",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Colors",
        sourceUrl: CH(6),
      },
      {
        id: "in_s6_02",
        topic: "rules",
        question:
          "You are on a highway with several lanes in your direction and you are not overtaking. Which lane should you use?",
        choices: [
          "The centre lane",
          "Whichever lane is emptiest",
          "The right lane",
          "The left lane, so slower traffic can pass on the right",
        ],
        correctIndex: 2,
        explanation:
          "Slower vehicles use the right lane. The left is left free for faster-moving and passing vehicles.",
        context:
          "It is one rule out of a set Indiana applies to multi-lane driving: change one lane at a time, do not weave, signal before every change, and check mirrors and blind spot each time. Trucks have their own version - the right lane where there are two in a direction, the right two lanes where there are three or more.",
        trap:
          "Travelling at the limit does not entitle you to sit in the left lane. The manual assigns the lane by role, not by speed.",
        excerptKey: "slower-vehicles-right-lane",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Changing Lanes and Passing Other Vehicles",
        sourceUrl: CH(7),
      },
      {
        id: "in_s6_03",
        topic: "signals",
        question:
          "Where does Indiana tell you to stop at a stop sign that has no stop line and no crosswalk?",
        choices: [
          "Level with the sign itself",
          "Ten feet back from the kerb line",
          "Wherever you can see both ways",
          "Before entering the intersection",
        ],
        correctIndex: 3,
        explanation:
          "With no line and no crosswalk, you stop before entering the intersection.",
        context:
          "The manual gives the fallbacks in order: stop at the solid white stop line if there is one; if not, stop perpendicular to the stop sign or before entering the crosswalk on your side; and if there is no crosswalk either, before entering the intersection. Overrunning any of those is a marked fault on the driving skills exam.",
        trap:
          "Stopping where you can see is a second movement, not the stop. You stop first, then edge forward if you need the view.",
        excerptKey: "stop-line-order",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Approaching a Red Light or Stop Sign",
        sourceUrl: CH(6),
      },
      {
        id: "in_s6_04",
        topic: "rightOfWay",
        question:
          "Two large trucks are coming through a multi-lane roundabout as you approach it. What does Indiana require of you?",
        choices: [
          "Yield to them, including slowing or stopping to let them through",
          "Enter ahead of them, since they are slower",
          "Enter alongside them in the outer lane",
          "Yield only if you are in the inner lane",
        ],
        correctIndex: 0,
        explanation:
          "Drivers must yield the right of way to large vehicles going through a multi-lane roundabout at the same time, and that includes slowing or stopping for them.",
        context:
          "The reason is the space a long vehicle needs to get round: its rear wheels cut inside its front wheels, which is why Indiana roundabouts have a truck apron in the middle. Where two large trucks meet in the circle, the driver in the right lane yields to the driver in the left.",
        trap:
          "Being already at the yield line does not give you a claim. Indiana hands priority to the large vehicle here.",
        excerptKey: "roundabout-large-vehicles",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Roundabouts",
        sourceUrl: CH(7),
      },
      {
        id: "in_s6_05",
        topic: "speed",
        question:
          "Unless posted otherwise, what is the maximum speed in most urban residential areas in Indiana?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "30 mph in most urban residential areas, unless a sign sets it lower.",
        context:
          "Urban means a population of at least 50,000 for this purpose. The residential 30 sits second from the bottom of Indiana's ladder, above the 15 mph alley limit and below the 55 that covers county roads, non-divided state highways and urban interstates.",
        trap:
          "25 is the residential default in many neighbouring states, which makes it the answer most people reach for. Indiana's figure is 30.",
        excerptKey: "residential-30",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Urban Speed Limits",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s6_06",
        topic: "safety",
        question: "What does Indiana say about carbon monoxide from a vehicle's exhaust?",
        choices: [
          "It has a distinctive sweet smell",
          "It is only dangerous in an enclosed garage",
          "It irritates the eyes before it affects you otherwise",
          "You cannot see, smell or taste it",
        ],
        correctIndex: 3,
        explanation:
          "It gives you no warning at all through the senses, which is what makes a faulty exhaust dangerous.",
        context:
          "The manual lists symptoms to watch for - drowsiness or dizziness, a bluish tinge to skin or lips, headache, increased sensitivity to light - and the conditions that make a leak likely: the heater running, a faulty exhaust system, or heavy traffic where you are breathing other vehicles' fumes. Its advice is to close the fresh-air vent in congested traffic and open it on highways in cold weather.",
        trap:
          "Feeling drowsy on a long drive can be fatigue or it can be a leaking exhaust. The symptoms overlap, which is why the manual lists them.",
        excerptKey: "carbon-monoxide-senses",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, Carbon Monoxide Poisoning",
        sourceUrl: CH(8),
      },
      {
        id: "in_s6_07",
        topic: "sharing",
        question:
          "You are approaching a stalled car on the hard shoulder with its hazard lights flashing. What does Indiana require?",
        choices: [
          "Nothing beyond ordinary care",
          "Stop until it is safe to pass",
          "Sound your horn as you approach",
          "Change lanes away from it, or slow to 10 mph under the limit",
        ],
        correctIndex: 3,
        explanation:
          "A disabled vehicle running hazard lights triggers the same duty as an emergency or amber-lit vehicle: move over if you can, and if you cannot, drop to 10 mph below the posted limit.",
        context:
          "Indiana's Move Over law covers three categories: emergency vehicles with red, red and white, or red and blue flashing lights; authorised parked vehicles with amber lights such as tow trucks, highway maintenance, utility, refuse and survey vehicles; and disabled vehicles with hazard warning signals. Failing an emergency vehicle is a Class A infraction; the other two are Class B.",
        trap:
          "A broken-down family car is covered by the same law as a police car. The lights are hazards rather than flashing beacons, and the duty applies anyway.",
        excerptKey: "move-over-disabled",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Disabled Vehicles",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s6_08",
        topic: "signs",
        question: "A pennant-shaped sign appears on the left of a two-way road. What does it prohibit?",
        choices: [
          "Passing other vehicles on the left",
          "Turning left at the next junction",
          "Stopping on the shoulder",
          "Exceeding an advisory speed",
        ],
        correctIndex: 0,
        explanation:
          "The pennant marks a no-passing zone and warns you not to pass on the left.",
        context:
          "Indiana pairs it with the white rectangular DO NOT PASS sign on the right-hand side and with a solid yellow line on your side of the centre. All three announce the same thing. Passing is also barred on or approaching a curve, approaching the crest of a hill, and within 100 feet of an intersection, railroad crossing, bridge, viaduct or tunnel.",
        trap:
          "Its position on the left is not an oversight. It is placed where a driver about to cross the centre line is looking.",
        excerptKey: "shape-pennant",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Shapes",
        sourceUrl: CH(6),
      },
      {
        id: "in_s6_09",
        topic: "licensing",
        question:
          "How long must you hold a valid Indiana learner's permit before applying for a driver's licence?",
        choices: ["90 days", "180 days", "One year", "30 days"],
        correctIndex: 1,
        explanation:
          "180 days, roughly six months, of holding a valid permit that has not been expired, suspended or revoked.",
        context:
          "Time spent holding a valid permit counts toward that 180 days even across a renewal. Age requirements run alongside it: at least 16 with an approved driver education programme completed, or 16 years and 270 days without one. Applicants 18 or over with a documented disability and completed rehabilitation training have no holding period at all.",
        trap:
          "Reaching the age is not enough on its own. The 180-day holding period runs regardless of how old you are when you get the permit.",
        excerptKey: "bmv-probationary-180-permit",
        sourceLabel: "Indiana BMV - Driver's License",
        sourceUrl: LICENCE_PAGE,
      },
      {
        id: "in_s6_10",
        topic: "impairment",
        question:
          "Which of these does the Indiana manual list as a sign that another driver may be impaired?",
        choices: [
          "Driving with the windows down in cold weather",
          "Straddling the centre line or weaving back and forth",
          "Braking gently at every intersection",
          "Signalling every turn well in advance",
        ],
        correctIndex: 1,
        explanation:
          "Straddling the centre line or weaving is on the manual's list of impaired-driving indicators.",
        context:
          "The full list includes wide turns, exceeding the limit or driving unusually slowly, coming close to hitting another vehicle or object, swerving or drifting or following too closely, stopping for no reason, turning abruptly or illegally, signalling inconsistently, and driving at night without headlights. The manual describes an impaired driver's car as a lethal weapon, which is why it wants you to recognise the pattern early.",
        trap:
          "Unusually slow driving is on the list as well as speeding. Impairment shows up as inconsistency, not simply as excess.",
        excerptKey: "impaired-driver-signs",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, Ways to Spot an Impaired Driver",
        sourceUrl: CH(8),
      },
      {
        id: "in_s6_11",
        topic: "rules",
        question:
          "You want to reverse out of a parking space. What does Indiana say about how you look?",
        choices: [
          "Use the rearview mirror, which gives the widest view",
          "Rely on the reversing camera where one is fitted",
          "Turn your body to the right and look through the back window",
          "Open the door and lean out to check the kerb",
        ],
        correctIndex: 2,
        explanation:
          "Turn and look through the back window. Indiana states plainly that you should never reverse using the rearview mirror alone.",
        context:
          "Reversing is treated as harder than driving forward because the vehicle itself blocks your view and speed and direction are both harder to control. The manual asks you to go slowly and watch in all directions, to look both ways and double-check for cars and pedestrians when backing out of a space, and never to back into an intersection to turn round.",
        trap:
          "A reversing camera does not replace the head turn. Indiana's instruction is about the field of view, not the convenience.",
        excerptKey: "reversing-look-back",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Reversing",
        sourceUrl: CH(7),
      },
      {
        id: "in_s6_12",
        topic: "emergencies",
        question:
          "You have been stopped by a police officer at night. What does Indiana suggest you do?",
        choices: [
          "Step out of the vehicle so the officer can see you clearly",
          "Move to the centre median where there is more room",
          "Pull over in a well-lit place, stay in the vehicle and keep your hands visible",
          "Wait until you reach your destination before stopping",
        ],
        correctIndex: 2,
        explanation:
          "Stop somewhere well lit if you can, stay inside unless the officer directs otherwise, and keep the driver's hands on the wheel with passengers' hands visible.",
        context:
          "The manual's suggested sequence starts before you stop: switch on your right turn signal to show you have seen the officer, move to the right-hand shoulder rather than the median, and turn on your hazard lights if you need time to find a safe place. End your call, turn off the radio, turn on the interior light at night, and lower tinted windows before the officer reaches you.",
        trap:
          "The centre median feels like a legitimate stopping place and puts both of you between two streams of traffic. Indiana rules it out expressly.",
        excerptKey: "traffic-stop-no-median",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, Traffic Stops by Law Enforcement",
        sourceUrl: CH(8),
      },
      {
        id: "in_s6_13",
        topic: "signals",
        question:
          "What does a green arrow displayed alongside a red light allow you to do?",
        choices: [
          "Nothing - a red light overrides any arrow",
          "Turn after coming to a complete stop",
          "Turn only from a one-way street",
          "Turn in the direction of the arrow, provided the intersection is clear",
        ],
        correctIndex: 3,
        explanation:
          "The green arrow gives you the right of way for that movement even with a red showing. You go if the intersection is clear.",
        context:
          "That is a protected turn, which is the difference between it and a plain green ball or a flashing yellow arrow - both of which only give permission to look for a gap in oncoming traffic. A steady yellow arrow means the protection is ending, and a red arrow means stop.",
        trap:
          "The red beside the arrow governs the movements the arrow does not cover. It does not cancel the arrow.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Turning through an Intersection",
        sourceUrl: CH(6),
      },
      {
        id: "in_s6_14",
        topic: "parking",
        question: "Which of these does Indiana list as a place you may not park?",
        choices: [
          "Any road with a centre turn lane",
          "On a bridge or other elevated structure",
          "Within 100 feet of a school",
          "On any street between midnight and 6 a.m.",
        ],
        correctIndex: 1,
        explanation:
          "Bridges and other elevated structures, such as on a highway or in a tunnel, are on Indiana's prohibited list.",
        context:
          "The rest of the list is long and worth reading once. It runs to highways unless posted otherwise, intersections and pedestrian crosswalks, sidewalks and the area in front of any driveway, and anywhere within 15 feet of a hydrant or in a fire lane. It finishes with yellow kerbs, double parking, reserved accessible spaces without a valid placard, and the diagonally striped area next to one.",
        trap:
          "The prohibition is about the structure, not about how long you stop. A bridge shoulder is not a legal place to leave a car.",
        excerptKey: "parking-prohibited-list",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Illegal Parking Areas",
        sourceUrl: CH(7),
      },
      {
        id: "in_s6_15",
        topic: "signs",
        question: "What does a yellow sign prepare you for in Indiana?",
        choices: [
          "Road conditions and hazards ahead, and nearby school zones",
          "Services at the next exit",
          "A regulation you must obey",
          "A temporary work zone",
        ],
        correctIndex: 0,
        explanation:
          "Yellow warns of specific road conditions and hazards ahead, and alerts you to nearby school zones. SLIPPERY WHEN WET is the manual's example.",
        context:
          "Fluorescent yellow-green is the related colour, used for schools, pedestrians, bicycles, playgrounds and school bus routes. Neither is the work zone colour - that is orange, which means temporary conditions. Yellow warnings usually come on a diamond, sometimes with a rectangular advisory speed plaque beneath.",
        trap:
          "Orange and yellow both warn, and they warn about different things. Orange is temporary; yellow is a condition of the road itself.",
        excerptKey: "sign-yellow",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Colors",
        sourceUrl: CH(6),
      },
      {
        id: "in_s6_16",
        topic: "speed",
        question:
          "You are on a rural Indiana interstate in a passenger car. What is the maximum unless posted otherwise?",
        choices: ["65 mph", "70 mph", "60 mph", "55 mph"],
        correctIndex: 1,
        explanation:
          "70 mph for a passenger vehicle. Trucks over 26,000 pounds are capped at 65 on the same road.",
        context:
          "Rural means outside an urban area with a population of at least 50,000. The same interstate drops to 55 once it enters one. The 70 is the highest number in Indiana's list, and like all of them it gives way to a posted sign and to the manual's separate instruction to reduce speed in bad weather, on slick roads or with worn tyres.",
        trap:
          "60 belongs to the rural state divided highway, which is a different road type. The interstate figure is 70.",
        excerptKey: "rural-interstate-70",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Rural Interstate Highway Speed Limits",
        sourceUrl: CH(7),
      },
      {
        id: "in_s6_17",
        topic: "rightOfWay",
        question:
          "You are turning right and a bicyclist is coming up on your right. What does Indiana say?",
        choices: [
          "Turn ahead of the cyclist, who can stop more easily",
          "Move into the bike lane first so the cyclist cannot come up beside you",
          "Sound your horn and complete the turn",
          "Let the cyclist go through the intersection first",
        ],
        correctIndex: 3,
        explanation:
          "Let the cyclist through the intersection before you turn. Turning across their path is the collision Indiana is trying to prevent.",
        context:
          "The manual's related instructions all point the same way. Do not turn across a cyclist's path, and do not move into a bike lane in preparation for a turn. Cross a bike lane only when you are actually turning or entering an alley or driveway, and stay behind a cyclist sharing a left-turn lane with you until they have finished the turn.",
        trap:
          "Merging into the bike lane before the turn is standard technique in several other states and is expressly forbidden in Indiana.",
        excerptKey: "bicycle-right-turn",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Bicycles",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s6_18",
        topic: "safety",
        question:
          "You come to a stretch of road where floodwater is running over the surface. What does Indiana tell you to do?",
        choices: [
          "Drive through slowly in a low gear",
          "Follow the tracks of the vehicle ahead",
          "Do not drive into it - the depth is not obvious and it may hide a washout",
          "Test the depth by easing the front wheels in",
        ],
        correctIndex: 2,
        explanation:
          "Do not drive into water lying over the road. You cannot judge its depth, and it can be hiding a section of road that has been washed away.",
        context:
          "Flash flooding causes more deaths than any other roadway weather event each year, which is why the manual is unusually direct about it. Do not drive round barricades or past ROAD CLOSED signs, and watch for bridges and roadbeds that may have been undermined by floodwater. If your car stalls in a flooded area, abandon it at once, because the water can rise fast enough to sweep a car and its occupants away.",
        trap:
          "Following someone else through tells you nothing. Their vehicle may sit higher, and the road can fail between one car and the next.",
        excerptKey: "flood-water-over-road",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Flash Flooding",
        sourceUrl: CH(7),
      },
      {
        id: "in_s6_19",
        topic: "sharing",
        question: "How many abreast may bicyclists ride on an Indiana roadway?",
        choices: [
          "Single file only",
          "Three abreast on roads with a shoulder",
          "No more than two abreast",
          "As many as the lane width allows",
        ],
        correctIndex: 2,
        explanation:
          "No more than two abreast, except on paths or parts of roadways set aside for the exclusive use of bicycles.",
        context:
          "It sits alongside the rest of Indiana's bicycle rules: pass with a minimum of three feet and only when there is no danger from oncoming traffic, yield to a cyclist as you would to another vehicle, and accept that a cyclist may lawfully use the travel lane rather than a bike lane. On most roads cyclists have the same rights and responsibilities as any other road user.",
        trap:
          "Two abreast is legal, so a pair riding side by side is not obstructing you. Single file is not required on an ordinary road.",
        excerptKey: "bicycle-two-abreast",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Bicycles",
        sourceUrl: CH(7),
      },
      {
        id: "in_s6_20",
        topic: "rules",
        question: "What is the maximum width of a vehicle that may be operated without a special permit in Indiana?",
        choices: [
          "Seven feet, eight inches",
          "Eight feet, six inches",
          "Ten feet, nine inches",
          "Thirteen feet, six inches",
        ],
        correctIndex: 1,
        explanation:
          "Eight feet six inches wide. Thirteen feet six inches is the height limit, and 80,000 pounds the weight limit.",
        context:
          "Exceeding any of the three means an oversize or overweight permit before the vehicle moves. Indiana also requires any truck or bus 80 inches wide or more to carry additional lighting markers and reflectors so its width is visible at night. The BMV uses the width figure as a sample question in its for-hire endorsement exam.",
        trap:
          "Thirteen feet six inches is the height, and it sits right beside the width in the manual. The width is eight feet six.",
        excerptKey: "truck-max-width",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Sharing the Road with Tractor-Trailers",
        sourceUrl: CH(7),
      },
      {
        id: "in_s6_21",
        topic: "licensing",
        question:
          "You have moved house within Indiana. How long do you have to amend your credential?",
        choices: [
          "60 days",
          "Within 30 days of the address change",
          "Before your next renewal",
          "Ten days",
        ],
        correctIndex: 1,
        explanation:
          "Within 30 days of changing your principal legal address, and that means a visit to a branch with the required documents.",
        context:
          "A mailing address is different and can be changed online, at a BMV Connect kiosk or at a branch. The same 30-day window applies to a legal name change, which also requires the Social Security Administration record to be updated first and at least one business day allowed before you go to the BMV. New residents get 60 days to obtain an Indiana licence.",
        trap:
          "Changing your mailing address online does not satisfy this. The principal legal address needs a branch visit and documents.",
        excerptKey: "address-change-30-days",
        sourceLabel: "Indiana Driver's Manual - Chapter 4, Address Change",
        sourceUrl: CH(4),
      },
      {
        id: "in_s6_22",
        topic: "signals",
        question:
          "You are at a red light on a one-way street, turning left onto another one-way street. What must happen before you go?",
        choices: [
          "Nothing beyond checking for oncoming traffic",
          "You must wait for a green arrow",
          "A complete stop, a clear path, no NO TURN ON RED sign, and the correct lanes",
          "You must yield only to pedestrians",
        ],
        correctIndex: 2,
        explanation:
          "The left on red is permitted here, but on all four conditions: a complete stop, nothing in or about to enter your path, no sign forbidding it, and the correct lanes.",
        context:
          "Indiana permits a left on red only between two one-way streets, which is narrower than the right on red - available at any intersection unless a sign withdraws it. The conditions are identical for both. A red arrow works the same way as a red ball for this purpose.",
        trap:
          "The turn being permitted at all is the hard part to remember. Forgetting the stop after that is the other half of the mistake.",
        excerptKey: "left-on-red",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Turning through a Solid Red Light",
        sourceUrl: CH(6),
        commonlyMissed: true,
      },
      {
        id: "in_s6_23",
        topic: "signs",
        question: "What does the manual say Indiana's five-sided sign warns you about?",
        choices: [
          "An area near a school where children may be crossing",
          "A pedestrian crossing on any road",
          "A playground with no school attached",
          "A crossing guard on duty",
        ],
        correctIndex: 0,
        explanation:
          "You are entering an area near a school, and children may be crossing the road.",
        context:
          "School signing in Indiana uses two devices together: the five-sided shape, and fluorescent yellow-green backgrounds for schools, pedestrians, bicycles, playgrounds and bus routes. The speed limit that goes with them is separately posted, commonly 7 a.m. to 4:30 p.m. Monday to Friday, or whenever the beacons flash.",
        trap:
          "It marks the school area, not a specific crossing point. Children may cross anywhere within it.",
        excerptKey: "shape-five-sided",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Shapes",
        sourceUrl: CH(6),
      },
      {
        id: "in_s6_24",
        topic: "safety",
        question: "How far back does Indiana say a driver should sit from the steering wheel?",
        choices: [
          "At least 12 inches",
          "At least six inches",
          "As close as is comfortable",
          "At least 24 inches",
        ],
        correctIndex: 0,
        explanation:
          "At least 12 inches. The gap exists so a deploying air bag has room to inflate before it reaches you.",
        context:
          "It comes with the rest of Indiana's seating guidance: the belt worn low on the hips and flat across the collarbone, and the head restraint set higher than the top of your head and as close behind it as possible. All three are about making the restraint system work rather than about comfort, and the manual insists the belt is worn even in a car with air bags.",
        trap:
          "Sitting close for better control is the instinct this rule works against. An air bag that reaches you before it has inflated is the injury it prevents.",
        excerptKey: "driver-12-inches",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Seat Belts",
        sourceUrl: CH(7),
      },
      {
        id: "in_s6_25",
        topic: "speed",
        question:
          "What speed does a slow-moving vehicle emblem tell you the vehicle ahead cannot exceed?",
        choices: ["15 mph", "35 mph", "30 mph", "25 mph"],
        correctIndex: 3,
        explanation:
          "25 mph. The orange fluorescent triangle with red reflective edges is a statement about the vehicle's top speed.",
        context:
          "Indiana requires it on slow farm vehicles, construction equipment and animal-drawn vehicles, all of which you may meet on rural roads. The manual asks for care when approaching and passing them, and treats a horse or horse-drawn vehicle on a public highway as having the same rights and responsibilities as a driver, with hand signals to watch for.",
        trap:
          "35 mph is the motor driven cycle cap, not the slow-moving vehicle figure. This emblem means 25.",
        excerptKey: "slow-moving-emblem",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Slow-Moving Vehicle Emblem",
        sourceUrl: CH(6),
      },
      {
        id: "in_s6_26",
        topic: "emergencies",
        question:
          "You must get out of your vehicle while it is stopped on the hard shoulder. Which side do you use?",
        choices: [
          "Whichever side is nearer your destination",
          "The driver's side, so you are visible to traffic",
          "The passenger side, after checking for traffic and drop-offs",
          "Through the rear doors",
        ],
        correctIndex: 2,
        explanation:
          "The passenger side, away from the traffic lane, and only after you have checked for vehicles, obstructions and any drop-off or incline.",
        context:
          "It sits inside Indiana's roadside routine: pull onto the shoulder if you can, put the hazard lights on, keep a torch within reach, and carry a reflective vest and a red emergency triangle. The triangle goes 200 feet behind the vehicle, or 500 feet if you are on a hill or a curve where approaching drivers cannot see you in time.",
        trap:
          "Being visible to traffic is not the aim. Getting out on the side traffic is passing is what the rule exists to prevent.",
        excerptKey: "exit-passenger-side",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, Roadside Emergency Situations",
        sourceUrl: CH(8),
      },
      {
        id: "in_s6_27",
        topic: "rightOfWay",
        question:
          "You have stopped at a red flashing light where cross traffic is NOT required to stop. When may you proceed?",
        choices: [
          "As soon as you have stopped for three seconds",
          "Only when the intersection is clear and you will not interfere with cross traffic's right of way",
          "As soon as the nearest cross vehicle slows",
          "After yielding to the vehicle on your left",
        ],
        correctIndex: 1,
        explanation:
          "You go only when the intersection is clear and your move will not interfere with the right of way of the cross traffic, which is not stopping at all.",
        context:
          "Indiana handles the two flashing red cases separately. Where all traffic must stop, you yield to any vehicle already in the intersection and to any vehicle that stopped before you, with the vehicle on the left yielding a genuine tie. Where cross traffic does not stop, none of that applies - you simply wait for a real gap.",
        trap:
          "The tie-break rules belong to the all-way case. With cross traffic running, there is no queue to be part of.",
        excerptKey: "flashing-red-light",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Red Flashing Lights",
        sourceUrl: CH(6),
      },
      {
        id: "in_s6_28",
        topic: "sharing",
        question:
          "Which vehicles trigger Indiana's Move Over duty when parked with amber flashing lights?",
        choices: [
          "Police vehicles only",
          "Ambulances and fire vehicles",
          "School buses",
          "Tow trucks, highway maintenance, utility, refuse and survey or construction vehicles",
        ],
        correctIndex: 3,
        explanation:
          "Amber lights on recovery vehicles and tow trucks, highway maintenance vehicles, utility service vehicles, solid waste haulers and survey or construction vehicles all trigger the duty.",
        context:
          "Emergency vehicles are the separate category, showing alternately flashing red, red and white, or red and blue, and failing them is a Class A infraction rather than a Class B. Disabled vehicles running hazard lights are a third category with the same Class B treatment. In every case the duty is to change lanes away, or to slow to 10 mph under the posted limit if you cannot.",
        trap:
          "Amber is not a lesser colour that can be ignored. It is a different category with its own infraction attached.",
        excerptKey: "move-over-amber-list",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Authorized Parked Vehicles",
        sourceUrl: CH(7),
      },
      {
        id: "in_s6_29",
        topic: "impairment",
        question:
          "What is Indiana's minimum motor vehicle liability insurance requirement?",
        choices: [
          "$25,000 / $50,000 / $25,000",
          "$15,000 / $30,000 / $10,000",
          "$50,000 / $100,000 / $50,000",
          "$30,000 / $60,000 / $25,000",
        ],
        correctIndex: 0,
        explanation:
          "25/50/25: $25,000 for injury or death of one person, $50,000 for two or more in one accident, and $25,000 for property damage.",
        context:
          "Driving without a policy meeting that standard brings a suspension and a reinstatement fee - $250 for a first no-insurance suspension, $500 for a second, $1,000 for a third and beyond. A Certificate of Compliance from your insurer has to reach the BMV within 90 days of a request to verify financial responsibility, and once suspended you may need an SR22 on file for 180 continuous days.",
        trap:
          "The middle figure covers two or more people in one accident, not double the per-person cover for a single claimant.",
        excerptKey: "insurance-minimum",
        sourceLabel: "Indiana Driver's Manual - Chapter 5, Insurance Requirements",
        sourceUrl: CH(5),
        commonlyMissed: true,
      },
      {
        id: "in_s6_30",
        topic: "rules",
        question:
          "You are approaching the crest of a steep hill on a rural Indiana road. What does the manual tell you to do?",
        choices: [
          "Slow down, move to the right side of the road and watch for oncoming vehicles",
          "Maintain speed so you clear the crest quickly",
          "Move toward the centre for a better view over the top",
          "Sound your horn as you approach the summit",
        ],
        correctIndex: 0,
        explanation:
          "Slow down, keep right and expect something coming the other way. You cannot see over the crest, and neither can they.",
        context:
          "Passing is separately prohibited when approaching a hill crest, with no distance attached - the approach itself is enough. Indiana's rural road section adds the other hazards to expect out there: reduced traction on gravel, dust on dirt roads, narrow bridges you may have to stop for, and standing crops such as corn blocking your view of intersections and curves.",
        trap:
          "Moving toward the centre for a view is the manoeuvre that causes the head-on. The manual sends you the other way.",
        excerptKey: "rural-crest",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Driving on Rural Roads",
        sourceUrl: CH(7),
      },
    ],
  },
];
