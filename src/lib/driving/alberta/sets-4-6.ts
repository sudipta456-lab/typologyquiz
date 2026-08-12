// Alberta - Class 7 knowledge test practice, sets 4 through 6 (the hard end).
//
// Every fact here was checked against the Government of Alberta's Driver's Guide
// (Cars and Light Trucks, Spring 2026 edition) and the alberta.ca pages it points
// at for penalties. Questions are written from scratch to test the same rules the
// guide teaches - no handbook sentences are reproduced, and no item is taken from
// any real or practice exam. Explanations, context notes and trap warnings are all
// written in our own words; the sourceUrl is what carries the learner to the
// authoritative text on the government's own site.
//
// The commonlyMissed flag marks TOPICS that Alberta learners and new drivers
// reliably get tangled up in: the urban solid-yellow passing exception, who yields
// inside a two-lane roundabout, school buses on divided highways, playground zone
// hours, and the exact demerit thresholds for GDL drivers.

import type { DrivingTestSet } from "../types";

const GUIDE = "https://www.alberta.ca/driver-guides-overview-and-pdf-versions";

export const albertaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Alberta Set 4 - Real Exam Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five mixed questions pitched at the level of the real Class 7 knowledge test. Signs, right of way, speed zones, GDL conditions and winter driving, interleaved the way the actual test presents them.",
    questions: [
      {
        id: "ab_s4_01",
        topic: "signs",
        question:
          "A five-sided sign with a bright yellow-green background appears at the side of the road. What is it telling you?",
        choices: [
          "A construction detour starts at the next corner",
          "You are entering a school zone or school area",
          "You are approaching a playground with no through road",
          "A pedestrian-only shopping street begins ahead",
        ],
        correctIndex: 1,
        explanation:
          "Alberta reserves the pentagon shape and the fluorescent yellow-green colour for schools, and nothing else uses that combination. The shape is deliberately odd so you register it from a distance and start scanning for children before you can even read the wording.",
        context:
          "Alberta sorts signs by shape and colour before you ever read the words, and the exam leans on that. Pentagons in fluorescent yellow-green mean schools, yellow diamonds warn of hazards, orange diamonds mean roadwork, white rectangles carry regulations, green rectangles give directions and blue squares point to services. Learning the six families is worth more marks than memorising individual pictures.",
        trap: "A playground sign is tempting because both involve children, but playground zones use the standard warning colours rather than the fluorescent yellow-green pentagon.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_02",
        topic: "rules",
        question:
          "You are stopped at a red light and want to turn left. In which situation does Alberta allow that turn?",
        choices: [
          "Turning from a one-way street onto a two-way street, if no pedestrians are waiting",
          "Never - every left turn in Alberta requires a green light or a green arrow",
          "Turning from a one-way street onto another one-way street, after stopping completely",
          "Turning from any street onto a one-way street, once oncoming traffic clears",
        ],
        correctIndex: 2,
        explanation:
          "The left-on-red allowance only works when both roads carry traffic in a single direction, because then your turn never crosses a stream of oncoming vehicles. You still have to stop first, yield to everything already moving, and obey any sign that bans the turn.",
        context:
          "Alberta permits two turns against a red light, and both work the same way: full stop first, then go only if it is safe and no sign prohibits it. Right on red is the common one. Left on red is the narrow one, and it needs a one-way street on both ends of the turn. In each case pedestrians crossing where you are heading still come first.",
        trap: "Answering never feels like the safe, conservative choice, but it is simply wrong - Alberta does allow the one-way-to-one-way left turn on red.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s4_03",
        topic: "rightOfWay",
        question:
          "Two vehicles reach an intersection with no signs and no signals at the same moment, approaching from different roads. Who goes first?",
        choices: [
          "The driver travelling straight through, regardless of position",
          "The driver on the wider or busier of the two roads",
          "The driver who is already moving faster, since stopping takes longer",
          "The driver who has the other vehicle on their right must yield",
        ],
        correctIndex: 3,
        explanation:
          "With nothing to control the intersection, Alberta falls back on a single tiebreaker: yield to the vehicle on your right. It only works if both drivers know it, so approach slowly enough to stop and confirm the other driver is actually giving way before you commit.",
        context:
          "Uncontrolled intersections are common in residential areas, rural grids and parking lots, and the rule is always the same: yield right. Road width, traffic volume and who is going straight make no difference. Alberta also expects you to arrive slowly enough to stop, because fences, hedges and parked cars routinely hide the vehicle you are supposed to be yielding to.",
        trap: "Assuming the through movement wins is the usual error - that is how signed intersections behave, not uncontrolled ones.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_04",
        topic: "speed",
        question:
          "You are driving on a city street inside an urban area and there is no speed limit sign anywhere in sight. What limit applies?",
        choices: ["50 km/h", "40 km/h", "60 km/h", "30 km/h"],
        correctIndex: 0,
        explanation:
          "Fifty is the fallback limit for roadways inside an urban area when nothing is posted. Some Alberta municipalities have since dropped their default to 40 by bylaw, which is exactly why you still read the signs instead of assuming.",
        context:
          "Alberta has four default limits worth memorising: 50 on urban roadways, 80 on roadways outside urban areas, 80 on a provincial highway inside a city's corporate limits, and 100 on a provincial highway outside an urban area. All four apply only where nothing is posted, and municipalities may set something different by bylaw.",
        trap: "Forty is a real limit on many residential streets, but only where a municipality has posted or legislated it - it is not the provincial default.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_05",
        topic: "safety",
        question:
          "On dry pavement in normal traffic, how much following time should you keep behind the vehicle ahead?",
        choices: [
          "Three car lengths, no matter what speed you are travelling",
          "At least two seconds, measured as it passes a fixed point",
          "At least one second, measured as it passes a fixed point",
          "One car length for every 10 km/h of your speed",
        ],
        correctIndex: 1,
        explanation:
          "Two seconds roughly covers the time you burn noticing a problem and getting your foot onto the brake, before the brakes have done anything at all. Counting seconds beats counting car lengths because the gap it produces grows automatically as you speed up.",
        context:
          "Stopping distance is three things stacked together: the time to perceive a hazard, the time to react, and the distance the brakes need. The first two run about three quarters of a second each no matter how good you think your reflexes are. Two seconds is the dry-pavement minimum, four is the figure for heavy or long vehicles, and every degraded condition - rain, ice, night, fatigue - means adding more.",
        trap: "Car-length rules sound precise but fail at speed, because the gap they produce stays fixed while your stopping distance keeps growing.",
        sourceLabel: "Alberta Driver's Guide - Responsible Driving",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_06",
        topic: "signs",
        question:
          "A white square sign shows a symbol inside a plain green circle. What does the green circle mean?",
        choices: [
          "The action shown in the circle is mandatory here",
          "The sign applies only during posted rush hour periods",
          "The action shown in the circle is permitted here",
          "The action shown in the circle is prohibited here",
        ],
        correctIndex: 2,
        explanation:
          "Alberta pairs two opposite symbols on the same white square: a green circle grants permission, a red circle with a slash takes it away. Mixing the two up is a classic exam slip, so read the circle colour before you read anything inside it.",
        context:
          "Three similar-looking white square signs mean three different things. A green circle around a symbol permits that action. A red circle with a diagonal bar forbids it. A plain black symbol with no circle at all, such as a lane-control arrow, makes it compulsory. Same shape, same background, completely different obligations, so the enclosure is the part that matters.",
        trap: "Reading the symbol first and the circle second is how people invert the meaning - the arrow inside tells you the action, not whether it is allowed.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_07",
        topic: "impairment",
        question:
          "Two hours into a long highway drive you catch yourself drifting toward the shoulder. What actually fixes this?",
        choices: [
          "Open the windows and turn the radio volume up",
          "Speed up slightly so the trip ends sooner",
          "Switch to high beams so the road looks brighter",
          "Pull over somewhere safe and rest before continuing",
        ],
        correctIndex: 3,
        explanation:
          "Fatigue stretches your reaction time and dulls your judgment in much the same way alcohol does, and cold air or loud music masks the symptom without touching the cause. Drifting out of your lane is a warning that you have already started losing control of the task.",
        context:
          "Alberta treats fatigue as an impairment alongside alcohol, drugs and some medications, because all of them attack the same things: judgment, reaction time and attention. Long monotonous drives, poor sleep, illness, a warm cabin and a heavy meal all compound it. The recognised countermeasures are rest, ventilation, keeping your eyes scanning, and stopping to walk around - not stimulation tricks.",
        trap: "Fresh air and loud music feel effective because they briefly wake you up, but the alertness they buy fades in minutes while the sleep debt does not.",
        sourceLabel: "Alberta Driver's Guide - Driving within the Law",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_08",
        topic: "rules",
        question: "Which of these manoeuvres does NOT legally require a signal?",
        choices: [
          "Continuing straight through an intersection in your own lane",
          "Pulling out from a parking spot at the curb",
          "Moving one lane to the left on a multi-lane road",
          "Turning right into a driveway",
        ],
        correctIndex: 0,
        explanation:
          "Signals exist to announce a change in your path, so they are required when you leave the curb, change lanes or turn. Holding your lane through an intersection changes nothing, and signalling there would only confuse the drivers reading you.",
        context:
          "Alberta requires a signal for three moves: pulling away from a curb or parking lane, turning left or right, and changing lanes. The timing matters too - signal early enough to give real warning, but not so early that drivers misread which gap or corner you mean, and switch it off afterwards if the vehicle does not self-cancel.",
        trap: "People assume a signal is never wrong, but leaving one on or flashing it where you are not actually turning misleads other drivers as badly as not signalling at all.",
        sourceLabel: "Alberta Driver's Guide - The Basics of Driving",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_09",
        topic: "sharing",
        question:
          "Under Alberta law, which cyclists are required to wear an approved bicycle helmet?",
        choices: [
          "Every cyclist, regardless of age or where they are riding",
          "Cyclists and bicycle passengers under 18 years of age",
          "Cyclists and bicycle passengers under 16 years of age",
          "Only cyclists riding on a roadway with a posted limit above 50 km/h",
        ],
        correctIndex: 1,
        explanation:
          "The helmet requirement covers anyone under 18 on a bicycle, whether they are pedalling or riding along as a passenger. Adults are strongly encouraged to wear one but are not compelled to.",
        context:
          "A bicycle being ridden counts as a vehicle in Alberta, so cyclists obey the same signals, signs and right-of-way rules as drivers, and a cyclist waiting at a light has the same standing as a car. Push the bike instead of riding it and that person becomes a pedestrian. Cyclists must ride as close to the right curb as practical, but may legitimately swing wide around grates, gravel and potholes.",
        trap: "Sixteen is a common guess because it matches the seat belt supervision age, but the cycling helmet threshold is 18.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_10",
        topic: "rightOfWay",
        question:
          "You and another driver arrive at a four-way stop at the same instant, and that driver is on your right. What should you do?",
        choices: [
          "Proceed first if you are going straight and they are turning",
          "Wave them through only if a pedestrian is waiting to cross",
          "Let the driver on your right proceed first",
          "Proceed first, because you are on their left",
        ],
        correctIndex: 2,
        explanation:
          "At an all-way stop the first vehicle to arrive goes first, and a genuine tie is broken in favour of the vehicle on the right. Even then, the rule is only useful if you wait until the other driver has clearly settled on the same answer you did.",
        context:
          "Three- and four-way stops run on order of arrival, with yield-to-the-right as the tiebreaker, and every driver must stop regardless of how empty the intersection looks. Alberta frames these as courtesy corners because the sequencing only works when everyone reads it the same way. Never move until you can do so safely, whatever the theoretical order says.",
        trap: "Believing that going straight beats turning is a rule imported from other situations - at an all-way stop, arrival order settles it, not direction of travel.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_11",
        topic: "signs",
        question:
          "A diamond-shaped sign with an orange background appears ahead of you on the highway. What does the orange colour signal?",
        choices: [
          "A permanent hazard such as a curve or a hidden road",
          "A detour that only applies to trucks and buses",
          "A section of highway where passing is prohibited",
          "Information about a construction or maintenance area",
        ],
        correctIndex: 3,
        explanation:
          "Alberta uses yellow diamonds for permanent road hazards and switches to orange for work zones, so the colour alone tells you whether the hazard is built into the road or has just been dropped there today. Orange also means the posted limit applies whether or not you can see anyone working.",
        context:
          "Construction zone speed limits bind you at all times, not only when crews are visible, because the surface hazards - fresh oil, loose gravel, sudden drop-offs - do not go home at night. When workers are actually present, speeding fines in the zone are doubled. You are also required to obey a flag person's directions ahead of any sign or signal.",
        trap: "Thinking the limit only counts when people are working is the expensive mistake here - an empty-looking work zone is still a work zone.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_12",
        topic: "safety",
        question:
          "On a cold morning the asphalt ahead looks shiny and black rather than the usual dull grey. What is the safest response?",
        choices: [
          "Ease off the accelerator and reduce speed without braking",
          "Brake firmly now, while you still have some traction left",
          "Hold your speed so the tires keep their momentum through it",
          "Steer onto the shoulder, where gravel gives better grip",
        ],
        correctIndex: 0,
        explanation:
          "That glossy look is usually black ice, a thin transparent layer that offers almost no grip. Braking or steering hard on it is what turns a slippery patch into a skid, so bleed speed off gently with the accelerator and keep your inputs small.",
        context:
          "Certain surfaces ice over before anything else does: bridge decks and overpasses, because cold air circulates underneath them; shaded stretches that the sun never reaches; and intersections, where exhaust heat and spinning wheels polish the surface. The general winter rule is to make every input - steering, braking, acceleration - smaller and earlier than you would on dry pavement.",
        trap: "Braking early feels responsible, but on a surface with almost no grip it is the input most likely to lock a wheel and start the skid you were trying to avoid.",
        sourceLabel:
          "Alberta Driver's Guide - Emergency Situations and Challenging Conditions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_13",
        topic: "speed",
        question:
          "A school zone sign in Alberta has a maximum speed posted with it but no other numbers. What is that speed, unless something different is shown?",
        choices: [
          "50 km/h",
          "30 km/h",
          "40 km/h",
          "25 km/h",
        ],
        correctIndex: 1,
        explanation:
          "Both urban and rural school zones default to 30 km/h while the zone is active. Thirty is slow enough that a child stepping out from between parked cars is still a near miss rather than a fatality.",
        context:
          "School and playground zones share the same default limit of 30 km/h and the same ban on passing another vehicle travelling your direction while the restriction is active. What differs is the schedule: school zones run in three blocks on school days, playground zones run every day from 8:30 a.m. until an hour after sunset. Municipalities may post different hours beneath the sign.",
        trap: "Forty is a plausible guess because it is a common residential limit, but zones built around children drop to 30.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_14",
        topic: "parking",
        question:
          "You are hunting for street parking and spot a gap beside a fire hydrant. How much clearance does Alberta require?",
        choices: [
          "At least one and a half metres from the hydrant",
          "Any distance, as long as the hydrant stays visible",
          "At least five metres from the hydrant",
          "At least three metres from the hydrant",
        ],
        correctIndex: 2,
        explanation:
          "Five metres is the standard keep-clear distance around a hydrant, and it applies to the nearest point on the curb when the hydrant sits back from the road. Firefighters need to swing a hose onto it without first towing your car.",
        context:
          "Five metres is Alberta's standard parking buffer, and it repeats: five from a hydrant, five from a stop or yield sign, five from the nearest edge of a marked crosswalk, and five from the edge of an intersecting roadway. The odd one out is a driveway or garage access, which needs only one and a half metres. Sidewalks, crosswalks, intersections, bridges and underpasses are simply off limits.",
        trap: "One and a half metres is a real number in the parking rules, but it belongs to driveways, not hydrants.",
        sourceLabel: "Alberta Driver's Guide - The Basics of Driving",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_15",
        topic: "rules",
        question:
          "The traffic signal ahead of you is flashing red. How should you treat it?",
        choices: [
          "Exactly like a yield sign - slow down and merge when clear",
          "As a signal failure, meaning right of way goes to the busier road",
          "As a warning that the light is about to turn solid green",
          "Exactly like a stop sign - stop, then go when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red carries the full weight of a stop sign: complete stop at the line or crosswalk, then proceed only after yielding. When every approach is flashing red the intersection has effectively become a four-way stop.",
        context:
          "Alberta has three flashing signal colours and they are not interchangeable. Flashing red is a stop sign. Flashing yellow means proceed with caution after yielding to pedestrians and anything already in the intersection. Flashing green is the unusual one - it means opposing traffic is being held at red, so you may go straight or turn either way without stopping.",
        trap: "Treating flashing red as a yield is the dangerous confusion, because it swaps a required full stop for a rolling approach.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_16",
        topic: "signs",
        question:
          "A reflective orange triangle is mounted on the back of the vehicle in front of you. What does it tell you?",
        choices: [
          "The vehicle travels at less than 40 km/h",
          "The vehicle is carrying dangerous goods",
          "The vehicle is being driven by a new driver",
          "The vehicle is wider than a standard traffic lane",
        ],
        correctIndex: 0,
        explanation:
          "The slow-moving vehicle triangle goes on tractors, machinery and equipment that cannot keep up with traffic. Closing speed is what kills on rural highways, so treat the triangle as a cue to start scrubbing speed early.",
        context:
          "A handful of signs are mounted on vehicles rather than at the roadside, and each demands a different response. The orange triangle marks something travelling under 40 km/h. An oversized load sign means give extra room when passing. A slow-moving convoy with pilot vehicles will usually pull off the travelled roadway once traffic stacks up behind it.",
        trap: "Confusing it with a dangerous goods placard is easy because both are orange - but dangerous goods use a diamond with numbers, not a plain hollow triangle.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_17",
        topic: "rightOfWay",
        question:
          "You are accelerating down an on-ramp while traffic runs steadily in the right-hand lane of the highway. Who has the right of way?",
        choices: [
          "Whichever vehicle reaches the end of the acceleration lane first",
          "Neither - merging is a shared responsibility between both drivers",
          "The highway traffic, so you must stop at the end of the ramp if needed",
          "You do, because the ramp is designed to feed you into the lane",
        ],
        correctIndex: 1,
        explanation:
          "Alberta assigns no right of way at a merge: the ramp driver matches highway speed and picks a gap, and highway drivers make room where they can. Stopping at the end of an acceleration lane is the genuinely dangerous choice, because nobody behind you expects it.",
        context:
          "The acceleration lane exists so you can reach the speed of highway traffic before joining it, and you should be signalling, shoulder checking and picking a gap while still on the ramp. Move over once past the solid white line, and hold your speed as you do. Drivers already on the highway are expected to shift left where they safely can, to leave the right lane open.",
        trap: "Treating the ramp end like a yield sign - slowing or stopping to wait for a gap - is what causes rear-end collisions there.",
        sourceLabel: "Alberta Driver's Guide - Highways and Freeways",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s4_18",
        topic: "emergencies",
        question:
          "Two vehicles bump in a parking lot. Nobody is hurt, and the combined damage looks like roughly $6,000. What is required?",
        choices: [
          "A report is only needed if one vehicle has to be towed",
          "A report is only needed when the collision happens on a public road",
          "The collision must be reported to police",
          "Nothing beyond swapping insurance details, since nobody was injured",
        ],
        correctIndex: 2,
        explanation:
          "Alberta sets the property damage reporting threshold at $5,000 in combined damage, and anything at or above it goes to police. Injury, a death, or damage to public property such as a signal or a parking meter also triggers a report regardless of the dollar figure.",
        context:
          "After any collision the sequence is: help anyone hurt, protect the scene with hazard lights and triangles, then exchange names, contact details and insurance information with the other drivers and note down witnesses. Record the time, place and weather, and never debate fault at the scene. Report to police if anyone is injured or killed, if damage reaches the threshold, or if public property was hit.",
        trap: "The absence of injuries feels like it settles the matter, but the dollar threshold is an independent trigger and failing to report carries demerit points of its own.",
        sourceLabel:
          "Alberta Driver's Guide - Emergency Situations and Challenging Conditions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_19",
        topic: "safety",
        question:
          "At what point does Alberta require you to switch your headlights on?",
        choices: [
          "Only between official sunset and official sunrise",
          "Whenever your windshield wipers are running",
          "Thirty minutes after sunset and until thirty minutes before sunrise",
          "Whenever you cannot clearly see 150 metres ahead of you",
        ],
        correctIndex: 3,
        explanation:
          "The trigger is visibility rather than the clock, so heavy snow or a smoky afternoon can put you under the rule in broad daylight. Daytime running lights do not count, because they leave your tail lights dark and make you nearly invisible from behind.",
        context:
          "Alberta's night driving rules are built around three distances. Headlights are required whenever you cannot clearly see 150 metres ahead. Drop to low beams within 300 metres of an oncoming vehicle, and within 150 metres when following one. In fog, smoke or heavy snow, low beams work better than high beams because high beams reflect the glare straight back at you.",
        trap: "The sunset-to-sunrise answer sounds official, but tying the rule to the clock leaves you unlit in the daytime whiteout where you most need to be seen.",
        sourceLabel:
          "Alberta Driver's Guide - Emergency Situations and Challenging Conditions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_20",
        topic: "rules",
        question:
          "You are on a multi-lane road and the line between your lane and the next one is a broken white line. What does that permit?",
        choices: [
          "Changing lanes when it is safe, with traffic moving the same way",
          "Changing lanes only to pass a slower vehicle, then returning",
          "Nothing - white lines always prohibit crossing",
          "Using the next lane for oncoming traffic during rush hour",
        ],
        correctIndex: 0,
        explanation:
          "White separates traffic heading the same direction, and broken means crossing is allowed. Solid white is the same road but a closed door, and yellow entirely changes the meaning because it puts opposing traffic on the other side.",
        context:
          "Pavement markings encode two independent facts. Colour tells you about direction: white means traffic on both sides is going the same way, yellow means the other side is oncoming and should always be on your left. Pattern tells you about permission: broken means you may cross, solid means you may not. Read colour and pattern together and almost any line makes sense.",
        trap: "Restricting the lane change to passing only imports a rule that does not exist here - a broken white line permits any safe lane change.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_21",
        topic: "signs",
        question:
          "What information is a diamond-shaped sign with a yellow background giving you?",
        choices: [
          "Services such as fuel, food or lodging ahead",
          "A warning about a hazard or condition ahead",
          "A regulation you are legally required to obey",
          "Directions and distances to nearby destinations",
        ],
        correctIndex: 1,
        explanation:
          "Yellow diamonds warn; they do not command. Reading the shape and colour before the symbol lets you sort a sign into warning, regulation or information while it is still far enough away to act on.",
        context:
          "Yellow diamonds cover a wide family: curves and turns, hidden roads and T-intersections, merges and added lanes, narrowing roadways, hills and bumps, slippery surfaces, animal and pedestrian crossings, and railway crossings ahead. None of them carries a fine on its own, but ignoring one and then losing control does - the underlying careless driving offence is worth six demerit points.",
        trap: "Advisory speed tabs hung beneath yellow diamonds fool people into thinking the sign is regulatory - those numbers are recommendations for ideal conditions.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_22",
        topic: "speed",
        question:
          "A tow truck sits on the shoulder of a 110 km/h highway with its lights flashing, and you are in the lane right beside it. What speed must you drop to?",
        choices: [
          "Half the posted limit for that stretch of highway",
          "The posted limit is fine, provided you change lanes",
          "60 km/h, or the posted limit if that number is lower",
          "80 km/h, or the posted limit if that number is lower",
        ],
        correctIndex: 2,
        explanation:
          "The slow-down rule caps you at 60 or the posted limit, whichever is smaller, in the lanes immediately next to a stopped emergency vehicle or tow truck showing lights. Speeding fines there are doubled, because a person standing on the shoulder has nothing between them and your bumper.",
        context:
          "The rule covers police, fire, ambulance, tow trucks, snowplows and highway maintenance vehicles - anything stopped with lights flashing. It binds the lanes immediately adjacent to the stopped vehicle. If you are further over you are not bound by the 60 km/h cap, but you are still expected to slow, leave space, and watch for people moving around the scene.",
        trap: "Assuming a lane change excuses you is half right - moving over is good practice, but it does not remove the speed cap if you end up in an adjacent lane anyway.",
        sourceLabel:
          "Alberta Driver's Guide - Emergency Situations and Challenging Conditions",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s4_23",
        topic: "licensing",
        question:
          "A Class 7 learner is driving at 1:30 a.m. with a fully licensed adult sitting beside them. Is this allowed?",
        choices: [
          "Yes - the supervising driver removes the time restriction",
          "Yes, as long as the trip is for work or school",
          "No, unless the learner has held the licence for a full year",
          "No - learners cannot drive between midnight and 5 a.m. at all",
        ],
        correctIndex: 3,
        explanation:
          "The learner curfew is absolute: no driving between midnight and 5 a.m., supervisor or not. It exists because those hours combine the worst visibility, the tiredest drivers and the highest concentration of impaired traffic on the road.",
        context:
          "A Class 7 learner must hold the licence at least a year, drive only with a fully licensed non-GDL driver aged 18 or over seated beside them, carry no more passengers than there are seat belts, keep a zero alcohol and drug level, stay off the road from midnight to 5 a.m., and faces suspension at eight demerit points. Breaching the curfew is itself a two-point offence.",
        trap: "The supervisor feels like it should unlock everything - it satisfies the accompaniment condition, but it does nothing about the curfew.",
        sourceLabel: "Alberta Driver's Guide - Licensing Information",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s4_24",
        topic: "rightOfWay",
        question:
          "You are approaching the entrance to a single-lane roundabout. Who must yield?",
        choices: [
          "You do - traffic already circulating has the right of way",
          "Traffic in the circle does, because you are entering on their right",
          "Whoever arrives at the entry line first",
          "Nobody - roundabouts are designed so vehicles simply interleave",
        ],
        correctIndex: 0,
        explanation:
          "A roundabout only keeps flowing if the circle never has to stop, so every entry yields to the vehicles already going around. Traffic circulates counterclockwise, which means you are watching for the gap on your left as you approach.",
        context:
          "One rule governs every circular intersection in Alberta, single lane or multi-lane, roundabout or the larger traffic circle: entering traffic yields to traffic already in the circle. Once inside, signal right after passing the exit before the one you want, watch for pedestrians at the crossings, and if you cannot get out safely, simply go around again rather than forcing the exit.",
        trap: "The yield-to-the-right habit misfires badly here, because in a counterclockwise circle the traffic you must yield to is approaching from your left.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_25",
        topic: "signs",
        question:
          "A crossbuck sign - two white blades forming an X - stands at a railway crossing with no lights or gates. What does it require?",
        choices: [
          "Nothing, unless a bell or a warning light is also present",
          "Yield to all trains, and stop if one is approaching",
          "Come to a full stop every time, whether or not a train is near",
          "Slow to 30 km/h and continue across without stopping",
        ],
        correctIndex: 1,
        explanation:
          "The crossbuck is a yield sign for trains. You are not required to stop at an empty crossing, but you are required to stop for any train that is close enough or sounding a warning, and a train always wins the argument about stopping distance.",
        context:
          "Railway crossings come in escalating levels of control, each with its own stopping rule. A crossbuck alone means yield, and stop for a train visible or sounding a signal within about 500 metres. A stop sign at a crossing means stop every time, between five and fifteen metres from the nearest rail. Flashing lights and bells mean stop at least five metres back and wait until they cease.",
        trap: "Answering that you must stop every time is over-cautious rather than correct, and stopping unnecessarily on a rural highway creates its own rear-end risk.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_26",
        topic: "rules",
        question:
          "You reach a stop sign at an intersection that has no stop line and no marked crosswalk. Where exactly do you stop?",
        choices: [
          "Anywhere, as long as you come to a complete halt",
          "At least five metres back from the intersecting roadway",
          "Within three metres of the roadway you are about to enter",
          "With your front bumper level with the stop sign itself",
        ],
        correctIndex: 2,
        explanation:
          "The stopping point follows a priority order: stop line first, then marked crosswalk, and if the road has neither, within three metres of the intersecting roadway. That last position gives you a usable view of cross traffic without putting your nose into it.",
        context:
          "The same three-tier order applies wherever you must stop at an intersection, including red lights and flashing reds: stop before the stop line if there is one, otherwise before the marked crosswalk, otherwise before the intersection itself. Stopping too far back means you cannot see, and stopping too far forward puts you in the path of the traffic you were checking for.",
        trap: "Five metres appears constantly in Alberta's parking rules, which is exactly why it feels right here - but the stopping distance at an unmarked intersection is three.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s4_27",
        topic: "safety",
        question:
          "The back of your car begins sliding sideways on a slushy corner. What should your feet and hands be doing?",
        choices: [
          "Steady pressure on the brake while you countersteer hard",
          "Light acceleration to pull the vehicle straight again",
          "Both feet off the pedals and hands held still on the wheel",
          "Both feet off the pedals, eyes and steering toward your escape path",
        ],
        correctIndex: 3,
        explanation:
          "Braking or accelerating mid-skid asks the tires for grip they do not have, so the recovery starts by taking both pedals out of the equation. Steering follows your eyes, so looking at where you want the front of the car to end up does most of the correcting for you.",
        context:
          "Alberta describes several skid types - braking, power and cornering - and the recovery is nearly identical for all of them: get off the pedal that caused it, keep off the brake, look where you want the front of the vehicle to go, and make small steering corrections rather than large ones. Overcorrecting simply throws the car into a second skid the other way.",
        trap: "Holding the wheel dead still is close but not right - you still have to steer toward your escape path, just gently.",
        sourceLabel:
          "Alberta Driver's Guide - Emergency Situations and Challenging Conditions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_28",
        topic: "impairment",
        question:
          "A driver holding a Class 5-GDL licence blows a reading showing a small amount of alcohol. What does the IRS ZERO: Novice program impose?",
        choices: [
          "A 30-day licence suspension, a 7-day vehicle seizure and a $200 fine",
          "A 3-day licence suspension, a 3-day vehicle seizure and a $300 fine",
          "A 24-hour suspension and a warning on the driving record",
          "A 90-day licence suspension and a 30-day vehicle seizure",
        ],
        correctIndex: 0,
        explanation:
          "Novice drivers have no legal allowance at all, so any alcohol or drug in the system triggers the zero-tolerance sanction rather than the graduated WARN scale used for fully licensed drivers. Fines also carry a victim surcharge on top of the listed amount.",
        context:
          "Alberta's Immediate Roadside Sanctions program has several streams. IRS ZERO: Novice covers Class 7 and Class 5-GDL drivers with any alcohol or drug present. IRS: WARN starts at 50 milligrams of alcohol per 100 millilitres of blood. IRS: FAIL applies at 80 milligrams, at criminal-level drug concentrations, or on refusing a demand. There is also a 24-hour stream for impairment from a physical or medical condition.",
        trap: "The three-day WARN penalty is the tempting answer because it is the one people hear about, but it belongs to fully licensed drivers over 0.05, not to novices.",
        sourceLabel: "Alberta Driver's Guide - Driving within the Law",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s4_29",
        topic: "signals",
        question:
          "The traffic light facing you is a flashing green. What does that mean in Alberta?",
        choices: [
          "Pedestrians have pressed the crossing button and you must stop",
          "You may go straight or turn either way; oncoming traffic has a red",
          "You must yield to oncoming traffic before turning left",
          "The signal is malfunctioning and should be treated as a four-way stop",
        ],
        correctIndex: 1,
        explanation:
          "A flashing green in Alberta means the opposing direction is being held on red, so your left turn is protected in the same way a green arrow protects it. Drivers arriving from other provinces often misread it, and you still owe the right of way to anyone already lawfully in the intersection.",
        context:
          "Alberta's flashing green functions as an advance green: the opposing approach is stopped, so you may proceed straight or turn either direction without stopping. It is not universal across Canada - in British Columbia the same signal marks a pedestrian-activated crossing - which is why newcomers hesitate at it. Pedestrians and vehicles already lawfully in the intersection still come first.",
        trap: "Assuming you must yield to oncoming traffic is the reflex from a solid green, and it turns a protected turn into an unnecessary hesitation in the intersection.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s4_30",
        topic: "rules",
        question:
          "You have overshot the corner where you meant to turn and the intersection is now just behind you. What does the law allow?",
        choices: [
          "Reverse if you signal first and your hazard lights are on",
          "Reverse across the crosswalk only, but not into the intersection",
          "Carry on to the next intersection - reversing into one is illegal",
          "Reverse slowly into the intersection once traffic behind you clears",
        ],
        correctIndex: 2,
        explanation:
          "Backing into an intersection or a crosswalk is prohibited outright, because the drivers and pedestrians there have no reason to expect a vehicle travelling the wrong way. Carry on and loop around; it costs a minute and carries none of the risk.",
        context:
          "Alberta's reversing rules are consistent: back up only at a crawl, only after checking that the path behind is clear, and never into an intersection or crosswalk. Backing out of a driveway means steering into the nearest lane and then driving forward rather than reversing across a second lane. On a highway, reversing to recover a missed exit is prohibited entirely.",
        trap: "Hazard lights feel like they legitimise the move, but they only mark a hazard - they do not create permission for a prohibited manoeuvre.",
        sourceLabel: "Alberta Driver's Guide - The Basics of Driving",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_31",
        topic: "signs",
        question:
          "You see a square sign with a blue background and a white symbol on it. What kind of information does it carry?",
        choices: [
          "A regulation that carries a fine if you ignore it",
          "The distance remaining to the next major city",
          "A warning about a hazard on the road surface ahead",
          "Services ahead, such as fuel, food, lodging or assistance",
        ],
        correctIndex: 3,
        explanation:
          "Blue is Alberta's colour for driver services, while green rectangles handle destinations and distances. Sorting signs by background colour is faster than reading them, which matters at highway speed.",
        context:
          "Information signs split by colour: blue squares for services such as fuel, food, lodging, hospitals, telephones and electric vehicle charging; green rectangles for directions and distances; and brown or green panels for recreation areas and points of interest. None of them regulates your behaviour, so nothing on them can be enforced against you.",
        trap: "Blue is used for accessible parking signs too, which leads people to expect a regulation - but the blue services square carries no obligation at all.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_32",
        topic: "speed",
        question:
          "Unless a municipality posts different hours, when is a playground zone speed restriction in effect?",
        choices: [
          "Every day, from 8:30 a.m. until one hour after sunset",
          "School days only, from 8:00 a.m. until 4:30 p.m.",
          "Every day, from 7:00 a.m. until 9:00 p.m. year round",
          "Only when children are visibly present in the playground",
        ],
        correctIndex: 0,
        explanation:
          "Playground zones run seven days a week and end an hour after sunset, so the cut-off slides through the year and is far later in June than in December. School zones are the ones tied to school days and fixed time blocks, and the two get mixed up constantly.",
        context:
          "Playground zone restrictions apply every day, weekends and holidays included, from 8:30 a.m. until one hour after sunset, at 30 km/h unless another number is posted. Passing another vehicle going your direction is prohibited while the restriction is active. Municipalities may substitute their own hours, and if they do, those hours appear on a sign beneath the playground sign.",
        trap: "Waiting until you actually see children is the reasoning that gets people ticketed - the zone is active on a schedule, not on demand.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s4_33",
        topic: "sharing",
        question:
          "A school bus ahead of you switches on alternating amber lights. What is it telling you?",
        choices: [
          "You may pass on the left as long as you stay under 30 km/h",
          "It is about to stop, so get ready to stop as well",
          "It has finished loading and is pulling back into traffic",
          "You must stop immediately, exactly as you would for red lights",
        ],
        correctIndex: 1,
        explanation:
          "Amber is the warning stage before the reds come on and the stop arm swings out. Passing during the amber phase is legal but not smart, because the bus may be seconds away from releasing children onto the road.",
        context:
          "School bus lights work in two stages. Alternating ambers warn that the bus is slowing to stop, and you should be preparing to stop too. Alternating reds with the stop arm out require a full stop about 20 metres back, from both directions on an undivided road, and you stay stopped until the lights go out and the arm folds in. Failing to stop is a six-point offence.",
        trap: "Treating amber as an immediate stop obligation is the wrong half of the error - amber means prepare, reds mean stop, and only the reds carry the penalty.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_34",
        topic: "safety",
        question:
          "How far ahead should you be scanning while driving in an urban area?",
        choices: [
          "About 20 to 25 seconds, the same as on a rural highway",
          "As far as your headlights reach, regardless of the time of day",
          "About 12 to 15 seconds, roughly one to one and a half blocks",
          "About 5 seconds, roughly to the end of the block you are on",
        ],
        correctIndex: 2,
        explanation:
          "Twelve to fifteen seconds of visual lead gives you time to spot a problem developing and change course smoothly instead of reacting to it. Rural driving needs a longer lead, roughly 20 to 25 seconds, because everything arrives faster.",
        context:
          "Proactive driving means looking for problems before they become emergencies. Scan 12 to 15 seconds ahead in town, 20 to 25 seconds on rural roads, and check your mirrors every 8 to 12 seconds. Alberta splits hazards into fixed ones you can anticipate - curves, hidden driveways, intersections - and variable ones that change through the day, such as children, stale green lights and icy patches.",
        trap: "Five seconds feels generous behind the wheel, but it only reaches the next few car lengths, which is about when a problem has already become unavoidable.",
        sourceLabel: "Alberta Driver's Guide - Responsible Driving",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s4_35",
        topic: "rightOfWay",
        question:
          "A pedestrian at the curb in an urban area raises an arm and points across the street toward the far curb. What does this require of you?",
        choices: [
          "Sound your horn once to acknowledge you have seen them",
          "Continue, since they have not stepped off the curb yet",
          "Slow to 30 km/h and pass behind them once they start walking",
          "Stop safely before the crosswalk and let them cross",
        ],
        correctIndex: 3,
        explanation:
          "That raised arm is a recognised signal of intent to cross, and it obliges you to stop rather than wait for the pedestrian to gamble on your intentions. Stop far enough back that drivers in the other lanes can see the person too.",
        context:
          "Crosswalks exist at every intersection whether or not they are painted, and a pedestrian who has entered one has the right of way. Stopping two to three car lengths back leaves the pedestrian visible to traffic in other lanes. You must never pass a vehicle that has stopped for a pedestrian, and failing to yield to someone in a crosswalk costs four demerit points.",
        trap: "Waiting for the pedestrian to physically step onto the road inverts the rule - the signalled intention is what triggers your obligation to stop.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "Alberta Set 5 - The Ones People Fail On",
    difficulty: "hard",
    description:
      "Thirty-five hard questions: exact distances, demerit values, impaired driving sanctions, multi-step right of way inside roundabouts, and the sign pairs that look almost identical. Everything here is answerable from the official guide, but none of it is guessable.",
    questions: [
      {
        id: "ab_s5_01",
        topic: "rules",
        question:
          "A single solid yellow line runs down the centre of a city street. What does Alberta allow?",
        choices: [
          "Passing is permitted within an urban area if it can be done safely",
          "Passing is prohibited anywhere a solid yellow line appears",
          "Passing is permitted only where a sign specifically authorises it",
          "Passing is permitted only when the vehicle ahead is turning left",
        ],
        correctIndex: 0,
        explanation:
          "This is one of Alberta's genuine oddities: inside an urban area a single solid yellow line does not, by itself, forbid a safe pass. Take that same line out onto a rural highway and passing is prohibited, and a double solid line prohibits it everywhere.",
        context:
          "Yellow centre line markings encode passing permission. A broken yellow line means passing is allowed. A solid and broken pair means only the driver with the broken line on their side may pass. Double solid yellow means neither may. The single solid yellow is the exception with a geography clause: passing across it is permitted inside urban areas, and prohibited everywhere else.",
        trap: "The blanket answer that solid yellow always forbids passing is what most drivers believe, and it is right everywhere except the urban case this question is testing.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s5_02",
        topic: "rightOfWay",
        question:
          "You are circulating in the outside lane of a two-lane roundabout when a vehicle in the inside lane moves toward your lane to exit. Who yields?",
        choices: [
          "Whoever entered the roundabout second must yield",
          "You do - inside the circle, drivers on the right yield to drivers on the left",
          "The inside driver does, because they are crossing into your lane",
          "Neither - the driver closer to the exit always has priority",
        ],
        correctIndex: 1,
        explanation:
          "Once inside a two-lane circle the priority flips from what people expect: the outside lane gives way to the inside lane, because inside drivers must cross the outer lane to get out. This is the single most common source of roundabout collisions in Alberta.",
        context:
          "A two-lane roundabout has two separate priority rules working at once. Entering traffic yields to everything already in the circle. Then, inside the circle, drivers on the right yield to drivers on the left, so the inner lane can reach its exit. Choose your lane before entering - right lane for the first exit, left lane to go further - stay in it, and never change lanes inside the circle.",
        trap: "It feels obvious that whoever crosses into your lane should yield, and that instinct is exactly backwards inside a multi-lane circle.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s5_03",
        topic: "speed",
        question:
          "You are on a numbered provincial highway that runs inside the corporate limits of a city, and no speed limit is posted. What applies?",
        choices: [
          "60 km/h",
          "50 km/h",
          "80 km/h",
          "100 km/h",
        ],
        correctIndex: 2,
        explanation:
          "A provincial highway drops from 100 to 80 once it crosses into a city's corporate limits, even though it is still the same highway. The 50 km/h default belongs to ordinary urban roadways, not to a highway passing through town.",
        context:
          "Two facts decide the default limit: whether the road is a provincial highway, identified by a numbered route marker, and whether you are inside or outside an urban area. Highway plus outside gives 100. Highway plus inside a city gives 80. An ordinary roadway outside an urban area also gives 80, and an ordinary roadway inside an urban area gives 50.",
        trap: "Fifty is the seductive answer because you are inside a city, but the urban default applies to ordinary roadways, not to a provincial highway running through one.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_04",
        topic: "signs",
        question:
          "You pass a school sign that has no speed limit sign attached beneath it. What does this mean?",
        choices: [
          "It is a school zone - the 30 km/h limit applies during posted hours",
          "It is a school zone that is currently outside its active hours",
          "It marks a school crosswalk where you must stop for any pedestrian",
          "It is a school area - no reduced limit, but expect children nearby",
        ],
        correctIndex: 3,
        explanation:
          "The attached speed sign is what turns a school sign into a school zone. Without it you are in a school area, which carries no reduced limit at all and is purely a warning to drive with more care. The same distinction applies to playground signs.",
        context:
          "Alberta distinguishes zones from areas by the presence of a speed sign. A zone carries an enforceable reduced limit during its hours and a ban on passing. An area is a warning only - drive with extra care, but the normal limit stands. Zones end where a sign shows either a higher maximum or an explicit end-of-zone message.",
        trap: "Assuming any school sign means 30 km/h is the natural over-correction, and it produces the opposite error of missing where the reduced limit genuinely applies.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s5_05",
        topic: "safety",
        question:
          "At night you spot an oncoming vehicle on a straight rural highway. At roughly what distance must you switch to low beams?",
        choices: [
          "Within 300 metres of the oncoming vehicle",
          "Within 150 metres of the oncoming vehicle",
          "Within 500 metres of the oncoming vehicle",
          "Only once you can read that vehicle's licence plate",
        ],
        correctIndex: 0,
        explanation:
          "High beams have to come down within 300 metres of oncoming traffic, and within 150 metres when you are following someone. The following distance is shorter because you are dazzling them through a mirror rather than head on.",
        context:
          "Alberta pairs two dimming distances: 300 metres for oncoming vehicles, 150 metres when following, roughly one and a half city blocks. The rule applies even on a divided highway where the oncoming lanes look far away. When someone else fails to dim, look slightly down and toward the right edge of your lane rather than staring into the glare.",
        trap: "One hundred and fifty metres is a real figure in the same rule, which makes it the natural wrong answer - it applies to following, not to oncoming traffic.",
        sourceLabel:
          "Alberta Driver's Guide - Emergency Situations and Challenging Conditions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_06",
        topic: "rules",
        question:
          "Outside an urban area, where does Alberta specifically prohibit a U-turn?",
        choices: [
          "On any road with a posted limit above 80 km/h",
          "Near the crest of a hill where a driver within 150 metres could not see you",
          "Anywhere the shoulder is narrower than the width of your vehicle",
          "Within 300 metres of a marked railway crossing",
        ],
        correctIndex: 1,
        explanation:
          "Rural U-turn restrictions are written around sightlines: no turning on a curve, and none near a hill crest where an approaching driver within 150 metres cannot see you. A vehicle broadside across a 100 km/h highway is invisible until it is far too late.",
        context:
          "U-turn rules split by setting. Everywhere: no U-turn at a signal-controlled intersection unless a device permits it, and none where a sign forbids it. In urban areas: not between intersections, not at an alley, and not at an intersection where one of the roadways is a parking lot access. In rural areas: not on a curve, and not near a hill crest with under 150 metres of sightline.",
        trap: "Tying the rule to posted speed sounds sensible but is invented - Alberta's rural U-turn restrictions are about what other drivers can see, not how fast they are going.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_07",
        topic: "impairment",
        question:
          "A fully licensed driver registers a blood alcohol concentration of 0.06 and receives a first IRS: WARN. What are the consequences?",
        choices: [
          "15-day suspension, 7-day vehicle seizure and a $600 fine",
          "30-day suspension, 7-day vehicle seizure and a $200 fine",
          "3-day suspension, 3-day vehicle seizure and a $300 fine",
          "7-day suspension, 3-day vehicle seizure and a $300 fine",
        ],
        correctIndex: 2,
        explanation:
          "IRS: WARN starts at 50 milligrams of alcohol in 100 millilitres of blood, well under the criminal threshold, and the first occurrence costs three days off the road plus the car. Repeat occurrences escalate to 15 then 30 days and add mandatory education courses.",
        context:
          "The WARN band covers roughly 0.05 to just under 0.08 and escalates across three occurrences: three days off the road, then 15 days with a seven-day seizure and a mandatory course, then 30 days with a seven-day seizure and the IMPACT program. Fines climb from $300 to $600 to $1,200, each with a 20 per cent victim surcharge on top.",
        trap: "The 30-day and $200 combination is a real Alberta penalty, but it belongs to the novice zero-tolerance stream rather than to WARN.",
        sourceLabel: "Alberta Driver's Guide - Driving within the Law",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_08",
        topic: "licensing",
        question:
          "A GDL driver serves a demerit point suspension. When the licence is reinstated, how many demerit points remain on the record?",
        choices: [
          "Zero",
          "Seven",
          "Eight",
          "Three",
        ],
        correctIndex: 3,
        explanation:
          "Serving a suspension does not wipe the slate. A GDL driver comes back carrying three points, and a fully licensed driver comes back carrying seven, which leaves very little room before the next suspension. Those points sit on the record for two years.",
        context:
          "GDL drivers get a warning letter at four to seven points and are suspended at eight or more within two years. Fully licensed drivers get the letter at eight to 14 and are suspended at 15 or more. Either way the first suspension is one month, a second within a year is three months, and a third within two years is six. Points drop off two years after the conviction date.",
        trap: "Expecting a clean slate after serving the suspension is the intuitive read, and it is why second suspensions arrive so much faster than people expect.",
        sourceLabel: "Alberta Driver's Guide - Driving within the Law",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_09",
        topic: "rightOfWay",
        question:
          "You are driving straight along the through road of a T-intersection that has no signs or signals. A vehicle is stopped on the stem road, to your right. Who has the right of way?",
        choices: [
          "The vehicle on your right, even though you are on the through road",
          "You do, because the through road always takes priority",
          "You do, because the other vehicle is entering from a terminating road",
          "Neither - both drivers must stop and negotiate",
        ],
        correctIndex: 0,
        explanation:
          "An uncontrolled T-intersection is an ordinary uncontrolled intersection, so the yield-to-the-right rule applies with no exception for the road that carries straight through. Plenty of drivers assume otherwise, so slow down and confirm rather than asserting a right of way you do have.",
        context:
          "Alberta gives uncontrolled intersections one rule and no exceptions: yield to the vehicle on your right. Road shape does not change it, which is why the uncontrolled T is singled out as a trouble spot. Failing to slow down and observe properly at an uncontrolled intersection is also an automatic fail on the Class 5 road test.",
        trap: "The idea that a through road outranks a terminating one is a rule from signed intersections, and carrying it into an uncontrolled T is how these collisions happen.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s5_10",
        topic: "signs",
        question:
          "A large white diamond is painted directly on the surface of a traffic lane. What does it indicate?",
        choices: [
          "The lane is a designated passing lane on a divided highway",
          "The lane is reserved for specific vehicles such as buses or bicycles",
          "The lane must be kept clear for left-turning traffic in both directions",
          "The lane ends ahead and traffic must merge",
        ],
        correctIndex: 1,
        explanation:
          "A painted diamond marks a reserved lane, and signs alongside it spell out which vehicles qualify and whether the restriction runs all day or only at peak hours. Do not confuse it with the X markings on rural pavement, which warn of a railway crossing.",
        context:
          "Pavement symbols supplement signs and sometimes stand alone. Arrows show which movements a lane permits. Diamonds mark reserved lanes. Diagonal-striped painted islands are no-travel space. An X on rural pavement warns of a railway crossing ahead. Bicycle stencils with a solid white line mark a bike lane, which vehicles may enter only to turn or reach a parking spot.",
        trap: "Left-turn markings are the tempting alternative because they also appear as painted symbols in a middle lane, but those are arrows, not diamonds.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_11",
        topic: "rules",
        question:
          "A railway crossing is controlled by a stop sign. Where must you bring your vehicle to a stop?",
        choices: [
          "At least twenty metres from the nearest rail",
          "Anywhere before the rails, as long as you stop completely",
          "Between five and fifteen metres from the nearest rail",
          "Between three and ten metres from the nearest rail",
        ],
        correctIndex: 2,
        explanation:
          "The five-to-fifteen metre window is deliberate: closer than five metres and an overhanging rail car could reach you, further than fifteen and you cannot see far enough down the track. Flashing red signals without a stop sign use a simpler rule - stop at least five metres back.",
        context:
          "Railway crossings use three stopping rules depending on the control. Crossbuck alone: yield, and stop for an approaching train. Stop sign: stop every time, between five and fifteen metres from the nearest rail. Flashing lights and bells: stop at least five metres back and wait until they stop and the train has cleared. Where gates are fitted, stay put until they are fully raised.",
        trap: "Twenty metres borrows the school bus stopping distance, which is the number most learners have memorised and the wrong one here.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s5_12",
        topic: "emergencies",
        question:
          "Your vehicle breaks down on a highway and you set out reflective warning triangles. How should they be spaced?",
        choices: [
          "Behind the vehicle, roughly 3 to 5 metres apart",
          "One in front and one behind, each about 50 metres out",
          "Directly against the rear bumper so they are not blown over",
          "Behind the vehicle, roughly 10 to 20 metres apart",
        ],
        correctIndex: 3,
        explanation:
          "Spacing the triangles 10 to 20 metres apart behind the vehicle gives approaching drivers a sequence of warnings rather than one object they might dismiss. Triangles bunched at the bumper arrive too late to change anyone's behaviour.",
        context:
          "A breakdown on a highway is handled in a fixed order: get off the travelled portion if you can, avoid stopping on a bridge or in a tunnel, switch on hazard lights, raise the hood, and set out triangles behind the vehicle. If the position is dangerous, everyone should leave the vehicle and wait well back and to the side, never in the path a following vehicle would take.",
        trap: "Placing triangles right at the bumper feels tidy and keeps them from blowing away, but it gives approaching drivers no reaction distance at all.",
        sourceLabel:
          "Alberta Driver's Guide - Emergency Situations and Challenging Conditions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_13",
        topic: "speed",
        question:
          "How many demerit points does a conviction for exceeding the speed limit by 31 to 50 km/h carry?",
        choices: ["Four", "Three", "Five", "Six"],
        correctIndex: 0,
        explanation:
          "Speeding demerits climb in bands: two points up to 15 over, three for 16 to 30, four for 31 to 50, and six once you pass 51 over. For a GDL driver a single four-point conviction is halfway to a suspension.",
        context:
          "Speeding is scored in four bands - two, three, four and six points - and the top band sits alongside careless driving, racing and failing to stop for a school bus. Points attach on the conviction date, which includes simply paying the ticket, and stay on the record for two years. A government-approved defensive driving course earns a three-point credit if taken before you reach the suspension threshold.",
        trap: "Three points is the band immediately below, and paying a ticket without checking which band you actually fell into is how drivers get blindsided by a suspension.",
        sourceLabel: "Alberta Driver's Guide - Driving within the Law",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_14",
        topic: "signs",
        question:
          "A wedge-shaped area of pavement is painted with diagonal stripes - a painted island. When may you drive across it?",
        choices: [
          "Never, under any circumstances",
          "Only to enter or leave a driveway, alley or private drive",
          "Whenever traffic in the adjacent lane is stopped",
          "To pass a vehicle waiting to turn left",
        ],
        correctIndex: 1,
        explanation:
          "Painted islands are not travel space, and they are not parking or stopping space either. The single exception is crossing one to reach or leave a driveway, alley or private drive that sits beyond it.",
        context:
          "Several painted areas are off limits for travel, each for its own reason. Painted islands separate conflicting streams and may only be crossed to reach a driveway or alley. No-stopping zones near intersections keep space clear for large vehicles to swing through. Bicycle lanes are for cyclists, with the narrow exception of entering to turn right or reach a parking spot.",
        trap: "Answering never is nearly right and therefore very tempting, but it misses the one legitimate use the rule preserves.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_15",
        topic: "rightOfWay",
        question:
          "You have moved into the intersection on a green light waiting for a gap to turn left. How should your vehicle be positioned?",
        choices: [
          "Left of the centre line, so oncoming traffic can see your intention",
          "Angled toward the corner so you can complete the turn quickly",
          "Right of the centre line, with the front wheels pointed straight ahead",
          "Right of the centre line, with the front wheels already turned left",
        ],
        correctIndex: 2,
        explanation:
          "Wheels turned left while you wait is the dangerous habit: a rear-end hit would push you straight into oncoming traffic. Keeping them pointed ahead means the same impact shoves you forward through the intersection instead.",
        context:
          "Alberta treats left turns as the highest-risk routine manoeuvre, and the guidance is specific. Be in the correct lane at least 15 metres out. Stay right of the yellow line while waiting. Only enter the intersection if there is genuinely room for your vehicle. Wheels straight until you actually turn. On a two-lane highway, shoulder check left first in case someone is passing you.",
        trap: "Pre-turning the wheels feels efficient and shaves a moment off the turn, and it is exactly the habit that turns a rear-end bump into a head-on collision.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_16",
        topic: "parking",
        question:
          "You need to leave your vehicle at the roadside outside an urban area. Besides leaving a clear passage for other traffic, what does the law require?",
        choices: [
          "Your vehicle must be visible for 30 metres along the road in both directions",
          "Your hazard lights must be left flashing the entire time",
          "You must park facing the same direction as oncoming traffic",
          "Your vehicle must be visible for 60 metres along the road in both directions",
        ],
        correctIndex: 3,
        explanation:
          "Sixty metres of visibility in each direction gives approaching drivers enough warning at rural speeds to react to a stationary vehicle. Parking on the roadway, parking lane or shoulder of a primary highway is otherwise off limits unless the vehicle cannot move or it is a genuine emergency.",
        context:
          "Rural parking is far more restricted than urban parking. On a primary highway you may only stop on the roadway, parking lane or shoulder if the vehicle cannot move under its own power, an emergency has arisen, or the law specifically allows it. Wherever you do stop, other traffic needs a clear passage and your vehicle must be visible 60 metres in both directions.",
        trap: "Hazard lights feel like the substitute for visibility, but flashers do not satisfy a sightline requirement measured in metres.",
        sourceLabel: "Alberta Driver's Guide - The Basics of Driving",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_17",
        topic: "rules",
        question:
          "A centre lane is marked on both sides by a solid yellow line paired with a broken yellow line, with left-turn arrows painted in it. How is that lane used?",
        choices: [
          "Drivers from both directions may use it to prepare for a left turn",
          "Only drivers travelling in the same direction as the nearest arrow may use it",
          "It is a passing lane that alternates direction by time of day",
          "It is reserved for emergency vehicles and must be kept clear",
        ],
        correctIndex: 0,
        explanation:
          "A two-way left turn lane is shared by traffic from both directions, and crossing the solid yellow to enter it is expressly allowed. What you cannot do is treat it as a running lane - move in only near the point where you will actually turn.",
        context:
          "The two-way left turn lane is one of the few places where crossing a solid yellow line is expected rather than prohibited. Both directions share the same centre lane to wait for a gap, which means you must watch for a vehicle entering it head-on from the opposite direction. Enter close to your turn, not blocks early, and never use it to travel or to pass.",
        trap: "Reading it as a directional lane based on the nearest arrow is the intuitive interpretation, and it leads drivers to enter it far too early and travel in it.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_18",
        topic: "signs",
        question:
          "On a winter highway you see a vehicle ahead displaying flashing amber and red lights together. What should you expect?",
        choices: [
          "A volunteer firefighter responding to an emergency",
          "A snowplow working the road ahead",
          "A police vehicle escorting an oversized load",
          "A tow truck recovering a vehicle from the ditch",
        ],
        correctIndex: 1,
        explanation:
          "Amber and red flashing together is the snowplow combination, and the snow cloud behind one can hide both the plow and any oncoming vehicle that is passing it. Flashing green, by contrast, marks a volunteer firefighter and is treated like any other emergency vehicle.",
        context:
          "Passing a snowplow is prohibited when your view along its side is blocked, when passing would interfere with the plowing, or when it simply cannot be done safely. Operators pull over roughly every five to eight kilometres where it is safe to let traffic by, so waiting costs very little. Watch too for oncoming vehicles passing a plow using your lane.",
        trap: "Tow trucks are the plausible winter guess, but they use amber alone - it is the red paired with amber that identifies a snowplow.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s5_19",
        topic: "safety",
        question:
          "Lumber in the back of your truck extends about two metres past the rear bumper. What does daylight travel require?",
        choices: [
          "Nothing extra during daylight, as long as the load is tied down",
          "An orange triangle mounted at the end of the load",
          "A red flag at the end of the load, at least 30 centimetres on each side",
          "A red light at the end of the load, visible from behind",
        ],
        correctIndex: 2,
        explanation:
          "Once a load projects one and a half metres or more beyond the rear, daylight requires a red flag measuring at least 30 centimetres on every side of the square. After dark the flag is no longer visible, so a red light takes its place.",
        context:
          "Several vehicle rules exist purely so other drivers can judge your size and behaviour. Overhanging loads need a red flag by day and a red light by night. A blocked inside mirror means outside mirrors on both sides. Trailers wider than the towing vehicle need extension mirrors. Nobody may ride outside the vehicle or in a towed trailer.",
        trap: "Assuming daylight makes the load obvious enough is the common shortcut, but the flag requirement is triggered by the length of the overhang, not by visibility.",
        sourceLabel: "Alberta Driver's Guide - Responsible Driving",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_20",
        topic: "speed",
        question:
          "Freezing rain is falling on a highway posted at 100 km/h. You are driving at 95. Is that legal?",
        choices: [
          "Yes - you are below the posted maximum, which is the legal test",
          "Yes, provided your vehicle has winter tires fitted",
          "No, because posted limits are automatically halved in freezing rain",
          "No - any speed unsafe for the conditions is illegal, whatever the sign says",
        ],
        correctIndex: 3,
        explanation:
          "A posted limit describes the maximum under ideal conditions, not a speed you are entitled to. Once rain, ice or fog degrades traction or visibility, the safe speed becomes the legal one, and being under the sign is no defence.",
        context:
          "Alberta frames posted limits as ceilings for ideal conditions, so weather, traffic, light and road surface can all push the legal maximum below the number on the sign. Driving too fast for conditions can support a careless driving charge, worth six demerit points. Driving too slowly is also treated as a hazard, so the goal is matching conditions rather than simply going slow.",
        trap: "Winter tires make the wrong answer feel defensible, but better equipment shortens your stopping distance without changing the legal standard.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_21",
        topic: "rightOfWay",
        question:
          "You are part of a funeral procession approaching a red light, with your headlights on and the vehicle ahead of you close in front. What may you do?",
        choices: [
          "Continue through without stopping, provided it is safe",
          "Stop as normal - processions have no special right of way in Alberta",
          "Continue only if a police officer is directing the procession",
          "Continue only through stop signs, never through a red light",
        ],
        correctIndex: 0,
        explanation:
          "A funeral procession may move through a stop sign or a red light without stopping, so long as headlights are on, the vehicle stays tucked in behind the one ahead, and the move is safe. Other drivers must not cut through the procession and must yield until it has passed.",
        context:
          "The procession exemption has conditions attached: headlights on, following closely behind the vehicle ahead so the procession reads as one unit, and proceeding only when it is safe. If you are not in the procession, the rule reverses - yield to it, do not cut through it, and wait for it to clear.",
        trap: "Limiting the exemption to stop signs sounds like the cautious middle answer, but the allowance covers red lights too.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_22",
        topic: "rules",
        question:
          "At a railway crossing marked only with a crossbuck, when does the law require you to stop?",
        choices: [
          "Only when the crossing serves more than one set of tracks",
          "When a train is visible or sounding a signal within about 500 metres",
          "When a train is visible or sounding a signal within about 200 metres",
          "Every time, then proceed after checking both directions",
        ],
        correctIndex: 1,
        explanation:
          "Five hundred metres is roughly five city blocks, which sounds generous until you remember a freight train can need a kilometre or more to stop. The margin is built around the train's braking distance, not yours.",
        context:
          "Advance warning signs before a crossing tell you to look, listen and slow down, and any speed shown on them is lower than the road's posted limit. Never start across unless you can clear the tracks completely, and after one train passes, check again before moving - a second train can be coming on another track, masked by the noise of the first.",
        trap: "Two hundred metres feels like a realistic judgment call, but it leaves nowhere near enough margin for a train that needs a kilometre to stop.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_23",
        topic: "signs",
        question:
          "You approach a white square sign showing a left-turn arrow inside a green circle. What is it telling you?",
        choices: [
          "All traffic in this lane must turn left",
          "The left lane ahead is reserved for buses and taxis",
          "Left turns are permitted at this location",
          "Left turns are prohibited at this location",
        ],
        correctIndex: 2,
        explanation:
          "Green circle grants permission, red circle with a slash removes it, and a plain black arrow on white makes the movement compulsory. Three visually similar signs, three completely different obligations, so read the enclosure before the arrow.",
        context:
          "Permissive signs put a green circle around an allowed action: a turn direction, trucks, bicycles, dangerous goods, snow vehicles, or passing. Prohibitive signs put the same symbols inside a red circle with a diagonal bar. Designated lane signs drop the circle entirely and show a plain arrow, which makes the movement mandatory for that lane.",
        trap: "The mandatory reading is the most dangerous mistake, because it turns a permission into an obligation and can push you into a turn you did not want.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_24",
        topic: "safety",
        question:
          "Snow is drifting across a highway and the surface is patchy. Why is cruise control a bad idea here?",
        choices: [
          "It disables the anti-lock braking system on most vehicles",
          "It prevents the transmission from downshifting on hills",
          "It stops the traction control system from engaging",
          "It keeps feeding power when a tire hits ice, which can trigger a skid",
        ],
        correctIndex: 3,
        explanation:
          "Cruise control has one instruction: hold the set speed. Meet a slick patch and it responds to the wheels slowing by applying more throttle, which is precisely the wrong input. In winter, speed should stay under your own foot.",
        context:
          "Winter driving in Alberta is a set of small habits: service the vehicle before the season, clear all snow and frost from the glass, keep speed and inputs gentle, extend following distance, and leave cruise control off. Carry blankets, a shovel, sand or salt, a scraper and a light. If you end up stranded in a safe spot, staying with the vehicle is usually the better call.",
        trap: "The traction control and ABS answers sound technical enough to be right, but modern systems keep working - the real problem is cruise control feeding throttle at the worst moment.",
        sourceLabel:
          "Alberta Driver's Guide - Emergency Situations and Challenging Conditions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_25",
        topic: "impairment",
        question:
          "A driver receives a first IRS: FAIL. What licence suspension does it carry?",
        choices: [
          "90 days with no driving at all, followed by a further 12-month suspension",
          "90 days with no driving at all, and nothing further",
          "30 days with no driving at all, followed by a further 12-month suspension",
          "A single 12-month suspension starting immediately",
        ],
        correctIndex: 0,
        explanation:
          "IRS: FAIL is a two-stage sanction. The first 90 days are absolute, and the 12 months that follow can only be driven through by joining the ignition interlock program. A second occurrence extends that second stage to 36 months, and a third makes it lifetime.",
        context:
          "IRS: FAIL applies at 80 milligrams of alcohol per 100 millilitres of blood, at prescribed drug concentrations, on impairment to any degree, or on refusing a demand. A first occurrence adds a 30-day vehicle seizure, a $1,000 fine plus surcharge, and a mandatory education course. These provincial penalties apply with or without a separate Criminal Code charge.",
        trap: "Stopping at 90 days is the answer most people give, because that is the figure that gets reported - the 12-month interlock stage after it is the part that gets forgotten.",
        sourceLabel: "Alberta Driver's Guide - Driving within the Law",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_26",
        topic: "sharing",
        question:
          "You are travelling on a highway divided by a median. A school bus on the opposite side stops and its alternating red lights begin flashing. What must you do?",
        choices: [
          "Slow to 30 km/h but continue past the bus",
          "Proceed with caution - only traffic behind the bus must stop",
          "Stop about 20 metres away and wait until the red lights go out",
          "Stop only if children are visible near the roadway",
        ],
        correctIndex: 1,
        explanation:
          "A physical median is the one thing that excuses opposing traffic from stopping, because no child should be crossing it. On any undivided road, including a four-lane one, traffic in every lane and both directions has to stop about 20 metres back until the lights go out and the stop arm folds in.",
        context:
          "The school bus rule turns on one question: is the highway physically divided by a median? If not, every lane in both directions stops, whether the road has two lanes or four. If it is divided, only traffic behind the bus stops, and oncoming traffic may proceed with caution while watching for pedestrians. Traffic behind the bus stops in either case.",
        trap: "Stopping anyway feels like the safe answer, and on a busy divided highway an unexpected stop in a fast lane creates a rear-end collision risk of its own.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s5_27",
        topic: "rules",
        question:
          "How far before an intersection should you already be settled in the correct lane for your turn?",
        choices: [
          "At least 30 metres",
          "At least 50 metres",
          "At least 15 metres",
          "At least 5 metres",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen metres, about 50 feet, is the minimum for being in position with your signal on. Late lane changes at intersections are one of the standard reasons people lose points on a road test, and they surprise the drivers around you.",
        context:
          "Turn preparation runs in a fixed sequence: check mirrors, shoulder check, signal, move into the proper lane, and be settled there at least 15 metres out. On a right turn, stay within about a metre of the curb through the whole turn. On a left, turn from the lane just right of the yellow line into the lane just right of the yellow line, and never swing wide across two lanes.",
        trap: "Fifty metres sounds like the responsible over-estimate, and the 50 in the rule is actually 50 feet, which is where the confusion starts.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_28",
        topic: "rules",
        question:
          "Which of these convictions carries the highest number of demerit points in Alberta?",
        choices: [
          "Careless driving, without regard for other road users",
          "Failing to stop for a school bus showing flashing reds",
          "Racing another vehicle on a public highway",
          "Failing to remain at the scene of a collision",
        ],
        correctIndex: 3,
        explanation:
          "Leaving the scene sits alone at seven points, above the six-point group that includes careless driving, racing, failing to stop for a school bus and speeding by 51 km/h or more. A single seven-point conviction alone suspends a GDL driver, who is cut off at eight.",
        context:
          "Alberta's demerit scale runs from two to seven points. Seven is leaving the scene of a collision. Six covers careless driving, racing, failing to stop for a school bus and extreme speeding. Five covers failing to stop for a peace officer. Four covers following too closely and failing to yield to a pedestrian in a crosswalk. Three covers stop sign and red light offences.",
        trap: "Careless driving feels like it should top the scale because it sounds like the broadest offence, but at six points it sits just below leaving the scene.",
        sourceLabel: "Alberta Driver's Guide - Driving within the Law",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_29",
        topic: "signs",
        question:
          "A large rectangular sign with a green background and white lettering hangs above the highway. What is it providing?",
        choices: [
          "Direction and distance to destinations ahead",
          "A regulation such as a lane restriction",
          "Notice of a recreation area or historic site",
          "Roadside services such as fuel and lodging",
        ],
        correctIndex: 0,
        explanation:
          "Green rectangles handle guidance: where places are and how far away. Blue squares point to services, brown signs handle recreation areas, and none of them carry a rule you can be ticketed for ignoring.",
        context:
          "Guide signs come in three flavours: directional, which points the way; distance, which gives kilometres to a destination; and combination, which does both. Route markers with one, two or three digits identify provincial highways, while a road with no marker at all - a township or range road - is a local road, and that distinction changes the default speed limit.",
        trap: "Lane restriction is the tempting answer for an overhead sign, but overhead regulatory lane control uses white on black, not white on green.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_30",
        topic: "emergencies",
        question:
          "Your vehicle stalls on a railway crossing and a train is approaching. What should you do?",
        choices: [
          "Stand clear of the vehicle beside the tracks and wave at the train",
          "Get everyone out and move away from the tracks toward the train",
          "Get everyone out and move away from the tracks behind the vehicle",
          "Stay in the vehicle and keep trying to restart the engine",
        ],
        correctIndex: 1,
        explanation:
          "It sounds backwards, but moving toward the oncoming train and well off the tracks puts you behind the point of impact. Debris from a struck vehicle is thrown forward along the train's direction of travel, which is exactly where standing behind the car would put you.",
        context:
          "The rules around railway crossings are built on the assumption that the train cannot help you. Do not start across unless you can clear the tracks completely. Do not change gears mid-crossing in a manual vehicle, in case you cannot complete the shift. If the vehicle stalls, abandon it immediately - people are replaceable to insurers, but not to anyone else.",
        trap: "Retreating behind the vehicle is the instinctive move and it puts you directly in the debris path, which is why the counter-intuitive answer is the right one.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_31",
        topic: "safety",
        question:
          "You are driving a motor home on a dry highway. What minimum following distance is recommended?",
        choices: [
          "Three seconds",
          "Six seconds",
          "Four seconds",
          "Two seconds",
        ],
        correctIndex: 2,
        explanation:
          "Ordinary vehicles work on two seconds, but heavy or long vehicles need roughly four because their mass carries them much further before the brakes win. Poor weather stretches both figures.",
        context:
          "The two-second rule is a floor for ordinary vehicles in ideal conditions, and everything about your situation pushes it upward: a large or heavy vehicle, a trailer, rain or snow, night, fatigue, or a load. Behind a large truck the extra distance also buys you a view of the road ahead, which a close follow completely removes.",
        trap: "Three seconds is the intuitive middle answer for something bigger than a car, but Alberta's figure for large vehicles is a full four.",
        sourceLabel: "Alberta Driver's Guide - Responsible Driving",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_32",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping centre parking lot onto a main street, and the exit has no stop sign. What is required?",
        choices: [
          "Yield to street traffic, but no stop is required without a sign",
          "Yield only to pedestrians, since parking lot exits are private property",
          "Merge with traffic at the same speed, as you would from a ramp",
          "Stop before the sidewalk, stop again before the street, and yield",
        ],
        correctIndex: 3,
        explanation:
          "Exits from parking lots, alleys, service roads and driveways are treated as if an invisible stop sign were posted. You stop before crossing the sidewalk, stop again before entering the roadway, and yield to everyone already there.",
        context:
          "Anywhere you leave private property or a minor access for a main roadway, Alberta expects two stops and a yield: once before the sidewalk, once before the roadway, giving way to pedestrians and traffic both times. The same right-of-way rules apply inside parking lots too, where lanes meeting each other are treated as uncontrolled intersections.",
        trap: "The absence of a sign is what fools people, but the stop obligation here comes from the type of access, not from any posted sign.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_33",
        topic: "signs",
        question:
          "Two yellow warning signs look nearly identical. One shows roadways joining into a single lane; the other shows a second lane being added so the roadways run side by side. What does the second one - free flow, or added lane - mean?",
        choices: [
          "Entering traffic gets its own lane, so neither stream has to merge",
          "Entering traffic must merge into your lane, so leave a gap",
          "Your lane ends shortly and you must move over to the left",
          "The road ahead becomes a divided highway with a median",
        ],
        correctIndex: 0,
        explanation:
          "Merging traffic and added lane are drawn almost the same way, but they demand opposite responses. Merging means two streams must fit into one space; added lane means the joining road brings its own lane along, so nobody needs to give way.",
        context:
          "Alberta's warning signs for roadways coming together split into two families. One warns that roadways join, meaning drivers on both must cooperate to fit into one lane. The other warns that roadways run side by side without joining, so the entering traffic keeps its own lane. A third family - lane ends, or road narrows - tells you the space is being taken away rather than added.",
        trap: "Reading every converging-lines sign as a merge is the default assumption, and it produces unnecessary braking on a highway where nobody actually had to yield.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s5_34",
        topic: "sharing",
        question:
          "A loaded log hauling truck ahead of you signals to turn off the highway. What should you do?",
        choices: [
          "Move onto the shoulder and continue past at reduced speed",
          "Hold well back - the logs can swing across every lane during the turn",
          "Pass on the opposite side to the one the truck is turning toward",
          "Pass immediately, before the truck slows and blocks the road",
        ],
        correctIndex: 1,
        explanation:
          "Logs can overhang the back of the trailer by as much as nine metres, and that tail sweeps a huge arc as the truck turns. There is no safe side to pass on, so the only correct move is to wait behind.",
        context:
          "Large vehicles need room that looks excessive until you watch one turn. A truck turning right may swing left first, and the gap it opens on the right is where the trailer will end up. A truck turning onto your road may need to cross the centre line or use part of your lane, so stopping back from the intersection is the helpful move.",
        trap: "Choosing the side opposite the turn feels clever, but a nine-metre overhang can sweep across every lane, so no side is genuinely clear.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s5_35",
        topic: "licensing",
        question:
          "A Class 5-GDL driver completes an approved driver training course and has it recorded on their driving record. What does this achieve?",
        choices: [
          "The zero alcohol condition is lifted immediately",
          "The demerit suspension threshold rises from eight points to fifteen",
          "The probationary stage can be shortened by up to six months",
          "The probationary stage can be shortened by up to twelve months",
        ],
        correctIndex: 2,
        explanation:
          "An approved course can trim up to six months off the two-year probationary stage, provided the other exit requirements are met. Everything else - the zero tolerance rule, the eight-point threshold - stays in force until you actually leave the GDL program.",
        context:
          "Exiting the GDL program requires being at least 18, spending a minimum of two years in the probationary stage, and staying free of suspensions and violations through the last 12 months of it. Only on exit do you gain the higher demerit allowance, lose the zero alcohol and drug condition, become eligible to supervise a learner, and qualify to re-class to a commercial licence.",
        trap: "Expecting the course to lift the zero tolerance condition is the appealing misread - nothing about GDL restrictions changes until you actually exit the program.",
        sourceLabel: "Alberta Driver's Guide - Licensing Information",
        sourceUrl: GUIDE,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Alberta Set 6 - Full Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions, mixed topics, no hints - the same shape as the real Alberta Class 7 knowledge test. You need 25 correct to pass, so you can afford five mistakes and no more.",
    questions: [
      {
        id: "ab_s6_01",
        topic: "signs",
        question:
          "A white square sign shows a curved U-shaped arrow inside a red circle with a diagonal bar through it. What does it prohibit?",
        choices: [
          "Making a left turn at this location",
          "Reversing on this section of roadway",
          "Entering the intersection when traffic is backed up",
          "Making a U-turn at this location",
        ],
        correctIndex: 3,
        explanation:
          "The looping arrow is the U-turn symbol, and the red circle and bar cancel whatever sits inside it. U-turns are already banned at signal-controlled intersections unless a device says otherwise, so this sign is usually posted where drivers would not otherwise expect a restriction.",
        context:
          "Prohibitive signs put a red circle and diagonal bar over the symbol for the banned action, and Alberta uses the family widely: no left turn, no right turn, no U-turn, no passing, no passing bicycles, no trucks, no bicycles, no pedestrians, no dangerous goods. A separate style with an arrow underneath handles no parking and no stopping, showing which direction the restriction runs.",
        trap: "The no-left-turn sign is nearly identical apart from the arrow shape, and at speed the two are genuinely easy to swap.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_02",
        topic: "rules",
        question:
          "The light ahead turns solid yellow as you approach. What does the law require?",
        choices: [
          "Stop before the line, unless you are too close to stop safely",
          "Continue through, since yellow means the light is still yours",
          "Stop, without exception, wherever your vehicle happens to be",
          "Accelerate to clear the intersection before the light turns red",
        ],
        correctIndex: 0,
        explanation:
          "Yellow is a stop instruction with one carve-out, for the case where braking would be more dangerous than proceeding. If you are already inside the intersection when it changes, clear it rather than stopping dead in the middle.",
        context:
          "Alberta expects you to read a green light for how long it has been green. A stale green - one that has been showing for a while - is about to change, and the pedestrian signal is a useful tell: a walk symbol means you have time, a flashing or solid don't walk means prepare to stop. Anticipating the change is what keeps the yellow decision from being a gamble.",
        trap: "Accelerating to beat the red is the reflex, and it converts a routine decision into the highest-risk moment in ordinary city driving.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_03",
        topic: "rightOfWay",
        question:
          "You are turning left at an intersection on a solid green light, with no arrow. Who must you yield to?",
        choices: [
          "Only vehicles that are already inside the intersection",
          "Oncoming traffic and pedestrians crossing the road you are entering",
          "Oncoming traffic only - pedestrians face a red at the same time",
          "Nobody, because a green light grants you the right of way",
        ],
        correctIndex: 1,
        explanation:
          "A plain green permits your turn without protecting it. Oncoming vehicles have the same green, and pedestrians crossing the street you are turning into typically have a walk signal, so both take priority over you.",
        context:
          "Green lights come in three grades of protection. A solid green permits movement but protects nothing, so left turns yield to oncoming traffic and both turns yield to pedestrians. A green arrow protects the direction it points. A flashing green means opposing traffic is being held on red. Knowing which one you are looking at is the whole question.",
        trap: "Believing a green light confers the right of way is the single most common misconception about turning left, and it is the source of a large share of intersection collisions.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_04",
        topic: "speed",
        question:
          "You are on a provincial highway outside any urban area, and no speed limit is posted. What limit applies?",
        choices: [
          "110 km/h",
          "90 km/h",
          "100 km/h",
          "80 km/h",
        ],
        correctIndex: 2,
        explanation:
          "Provincial highways outside urban areas default to 100. Ordinary roadways outside an urban area - township roads, range roads and the like - default to 80 instead, so the presence of a highway route marker changes the answer.",
        context:
          "The way to tell a provincial highway from a local road is the route marker: a one-, two- or three-digit numbered shield. A road identified only by a name, a township number or a range number is a local road, and it carries the 80 km/h rural default rather than the 100 km/h highway default. Municipalities may set something different by bylaw.",
        trap: "Eighty is the trap because it is the correct default for the other kind of rural road, and the two are easy to conflate when nothing is posted.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s6_05",
        topic: "safety",
        question: "How often should you be glancing in your rear view mirrors?",
        choices: [
          "Every thirty seconds, and before slowing or stopping",
          "Only when preparing to change lanes or turn",
          "Continuously, alternating between the inside and outside mirrors",
          "Every eight to twelve seconds, and before slowing or stopping",
        ],
        correctIndex: 3,
        explanation:
          "A glance every eight to twelve seconds - about once a block in the city - keeps you aware of who is behind you before it matters. That awareness is what lets you brake gradually for a hazard instead of standing on the pedal with a tailgater behind you.",
        context:
          "Mirrors never cover everything. Adjust the inside mirror to frame the whole rear window and the outside mirrors so you can just see a sliver of your own vehicle, which minimises but does not eliminate the blind spots beside and slightly behind you. That is why a shoulder check is required in addition to a mirror check before every lane change.",
        trap: "Saving mirror checks for lane changes is the habit most new drivers fall into, and it means arriving at a hazard with no idea what is behind you.",
        sourceLabel: "Alberta Driver's Guide - Responsible Driving",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_06",
        topic: "signs",
        question:
          "A yellow diamond warns of a curve ahead, and a small yellow sign beneath it reads 60. What is that number?",
        choices: [
          "A recommended maximum for the curve under ideal conditions",
          "A legal speed limit that applies through the curve",
          "The minimum speed required to hold the lane through the curve",
          "The distance in metres to the start of the curve",
        ],
        correctIndex: 0,
        explanation:
          "A yellow tab under a warning sign is advisory, whereas the same number on a white rectangular sign would be a legal limit. Advisory or not, it assumes dry pavement and good visibility - in freezing rain even that figure is too fast.",
        context:
          "Colour separates advice from law. Numbers on white rectangular regulatory signs are enforceable limits. Numbers on yellow tabs beneath warning signs are recommendations for the hazard ahead under ideal conditions, and they appear under curve signs, railway crossing warnings and similar hazards. Exceeding an advisory speed is not itself an offence, but losing control while doing it is.",
        trap: "Treating the advisory tab as a legal limit is harmless, but treating a white regulatory sign as advisory is the reverse mistake that gets people ticketed.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_07",
        topic: "impairment",
        question:
          "At what point does the zero alcohol and drug condition stop applying to a new Alberta driver?",
        choices: [
          "When they have held any licence for two years",
          "When they exit the GDL program and hold a full Class 5 licence",
          "When they pass the Class 5 road test and move to a Class 5-GDL licence",
          "When they turn 18, regardless of licence stage",
        ],
        correctIndex: 1,
        explanation:
          "Zero tolerance covers the entire GDL program, both the learner stage and the probationary stage, and only lifts on exit to a full Class 5. Passing the road test moves you up a stage but changes nothing about alcohol or drugs.",
        context:
          "Novice drivers are covered by IRS ZERO: Novice, which applies to any alcohol or drug at all rather than to a threshold. Being over 18 does not exempt you, because the GDL program is tied to licence stage rather than age. Exiting the program is what lifts the condition, raises your demerit allowance and lets you supervise a learner.",
        trap: "Turning 18 feels like it should be the switch since it is the legal drinking age, but the restriction follows the licence stage, not the birthday.",
        sourceLabel: "Alberta Driver's Guide - Licensing Information",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_08",
        topic: "rules",
        question:
          "The vehicle in the lane beside you stops at a marked crosswalk and a pedestrian starts across. What must you do?",
        choices: [
          "Continue, since the pedestrian is not yet in your lane",
          "Sound your horn to warn the pedestrian and proceed carefully",
          "Stop as well - you cannot pass a vehicle stopped for a pedestrian",
          "Continue past at reduced speed while watching the crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "A stopped vehicle at a crosswalk hides the person walking behind it, and passing it is how pedestrians get struck in the second lane. The rule holds whether the crosswalk is painted or is simply the unmarked one that exists at every intersection.",
        context:
          "The prohibition on passing at crosswalks is broad: never pass another vehicle when approaching a crosswalk, because it may be slowing for someone you cannot see. When you are the one stopping, do it two to three car lengths back so drivers in other lanes can see both you and the pedestrian in time to react.",
        trap: "Reasoning that the pedestrian has not reached your lane yet is exactly the calculation that fails, because they arrive at your lane at walking pace and you arrive at highway-of-the-city pace.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_09",
        topic: "sharing",
        question:
          "You are catching up to a cyclist riding near the right curb on a road with two lanes in your direction. How should you get past?",
        choices: [
          "Stay in your lane and pass wide within it, giving about a metre",
          "Follow closely until the cyclist moves onto the sidewalk",
          "Sound your horn, then pass within the lane once they move over",
          "Change lanes to pass, the same as you would for any other vehicle",
        ],
        correctIndex: 3,
        explanation:
          "A bicycle in traffic is a vehicle, so passing one means moving into another lane rather than squeezing by inside the same one. Cyclists also legitimately swing wide around grates, gravel and potholes, which is precisely when a lane-sharing pass goes wrong.",
        context:
          "Sharing the road with cyclists comes down to a few habits: change lanes to pass, do not follow closely since bicycles have no brake lights, shoulder check right before turning right in case a cyclist is alongside, check for cyclists before opening a door at the curb, and check again before pulling away from it. Some signs specifically warn that cyclists may use the full lane ahead.",
        trap: "The wide-within-the-lane pass feels courteous and is what most drivers actually do, but it leaves no room when the cyclist has to swerve around a hazard.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_10",
        topic: "rightOfWay",
        question:
          "You approach a yield sign and there is no cross traffic and no pedestrian anywhere near. What is required?",
        choices: [
          "You may proceed without stopping, at a speed that lets you stop easily",
          "You must come to a complete stop, then proceed",
          "You must slow to 30 km/h before entering the intersection",
          "You may proceed at normal speed, since a yield is only advisory",
        ],
        correctIndex: 0,
        explanation:
          "A yield sign asks you to give way, not to stop, so an empty intersection can be entered rolling. The catch is that your approach speed must leave you able to stop comfortably if something appears, which usually means slower than you think.",
        context:
          "A yield sign obliges you to give way to traffic that is not facing a yield sign and to pedestrians waiting or already crossing. Reduce speed on approach and be prepared to stop; a full stop is required only when something is actually there to yield to. A flashing yellow signal behaves similarly - proceed with caution after yielding to anything already in the intersection.",
        trap: "Calling a yield advisory is the dangerous over-reading - it carries a genuine legal obligation to give way, enforceable like any other sign.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_11",
        topic: "signs",
        question:
          "A yellow diamond warning sign shows two lanes of traffic converging toward a single line - the divided highway ends symbol. What is it telling you?",
        choices: [
          "The highway ends ahead at a junction with another route",
          "The median ends ahead and you will meet oncoming traffic",
          "Two lanes in your direction merge into one lane",
          "A median begins ahead and traffic separates into two roadways",
        ],
        correctIndex: 1,
        explanation:
          "Divided highway ends is one of the most consequential warnings on a rural road: the barrier between you and oncoming traffic disappears, so passing rules and your position in the lane both change. Its near twin, divided highway begins, means the opposite.",
        context:
          "The end of a divided highway changes several things at once. Oncoming traffic returns, so passing needs a clear view and a legal marking. High beam dimming distances start mattering again. And the school bus rule flips - on an undivided road you must stop for a bus with flashing reds from both directions, where on a divided highway you would not have to.",
        trap: "Reading it as a lane merge is the common misread, and it leads drivers to look for a lane drop instead of preparing for oncoming traffic.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s6_12",
        topic: "safety",
        question:
          "Driving through standing water, your steering suddenly goes light and unresponsive. What should you do?",
        choices: [
          "Accelerate gently to push the water out from under the tires",
          "Turn the wheel sharply to break the film of water",
          "Ease off the accelerator without braking and steer where you want to go",
          "Brake steadily to bring the tires back into contact with the road",
        ],
        correctIndex: 2,
        explanation:
          "That light feeling is hydroplaning - the tires are riding on water instead of pavement. Braking or steering hard does nothing while there is no grip and everything at the instant grip returns, so let the vehicle slow itself and keep your inputs gentle.",
        context:
          "The recovery for hydroplaning is the recovery for almost every loss of traction: get off the pedals, look and steer where you want the front of the vehicle to go, and make small corrections. Rain also means low beams rather than high, since high beams reflect glare back at you, and it means watching for spray from other vehicles blinding you at the worst moment.",
        trap: "Braking is the instinct that turns a brief loss of grip into a full skid, because the moment traction returns you have a locked wheel instead of a rolling one.",
        sourceLabel:
          "Alberta Driver's Guide - Emergency Situations and Challenging Conditions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_13",
        topic: "speed",
        question:
          "You are passing a slow vehicle on a two-lane highway posted at 90 km/h and need to get back in before an oncoming car arrives. What does the law allow?",
        choices: [
          "Up to 20 km/h over the limit while actually alongside the other vehicle",
          "Any speed necessary, provided you return to the limit immediately after",
          "Up to 10 km/h over the limit, since passing is a safety manoeuvre",
          "Nothing above 90 - exceeding the limit to complete a pass is illegal",
        ],
        correctIndex: 3,
        explanation:
          "There is no speeding allowance for passing anywhere in Alberta. If the pass cannot be completed within the limit, the honest conclusion is that there was never enough room for it, and you should have stayed behind.",
        context:
          "Passing on a two-lane highway is prohibited outright in several situations: where a solid yellow line sits on your side outside an urban area, where a no-passing sign is posted, on a curve, near the crest of a hill, in an active school or playground zone, where a vehicle has stopped for a pedestrian, and where a school bus is showing flashing red lights.",
        trap: "The small allowance answers are seductive because they match what drivers actually do, and there is no such allowance in the rules.",
        sourceLabel: "Alberta Driver's Guide - Highways and Freeways",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_14",
        topic: "parking",
        question:
          "You are parking facing downhill on the right side of a street with a curb. Which way should the front wheels point?",
        choices: [
          "Toward the curb, rolled forward until the tire touches it",
          "Away from the curb, toward the centre of the road",
          "Straight ahead, with the park brake set firmly",
          "Toward the curb when the road is dry, away from it when icy",
        ],
        correctIndex: 0,
        explanation:
          "Point the wheels so that a vehicle which starts rolling ends up against the curb rather than out in traffic. Downhill always means turning toward the curb; uphill with a curb reverses it, and uphill with no curb means turning toward the road's edge.",
        context:
          "Hill parking has three cases when you are on the right side of the road. Downhill: wheels toward the curb. Uphill with a curb: wheels away from the curb, then roll back until the tire rests against it. Uphill with no curb: wheels toward the road's edge. Always set the park brake and leave an automatic in park or a manual in low gear. On the left side of the road, reverse the directions.",
        trap: "Relying on the park brake alone is the shortcut people take, and the wheel position exists precisely for the case where the brake fails.",
        sourceLabel: "Alberta Driver's Guide - The Basics of Driving",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s6_15",
        topic: "rules",
        question:
          "Three friends want to ride in the open box of your pickup truck for a short trip across town. Is that legal in Alberta?",
        choices: [
          "No, unless the box is fitted with a canopy and seating",
          "No - nobody may ride on the outside of a vehicle, including a truck box",
          "Yes, provided the truck stays on residential streets under 50 km/h",
          "Yes, provided every passenger is at least 16 years old",
        ],
        correctIndex: 1,
        explanation:
          "Riding on the outside of a vehicle is prohibited, and an open truck box counts. Both the driver and the passenger can be charged, and the reason is blunt: there is nothing back there to hold anyone in place.",
        context:
          "Alberta's occupant rules are strict. Everyone must be secured by a seat belt or an approved child seat. The driver is responsible for every passenger under 16 and can be fined for them, while passengers 16 and over can be fined themselves. Nobody may ride in a towed trailer or on the outside of a vehicle, and towing a person on skis, a toboggan or a bicycle is prohibited.",
        trap: "The low-speed exception feels reasonable, and there is no such exception - a 40 km/h impact is fatal to an unrestrained person in a truck box.",
        sourceLabel: "Alberta Driver's Guide - Responsible Driving",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_16",
        topic: "signs",
        question:
          "A yellow sign carrying a row of large black arrowheads pointing the same way is mounted at the roadside. What does it mark?",
        choices: [
          "A lane that ends and merges in the direction shown",
          "A detour route around a construction zone",
          "A sharp bend in the road, in the direction the arrows point",
          "A section of roadway where passing is prohibited",
        ],
        correctIndex: 2,
        explanation:
          "Chevron signs sit right at the outside of a sharp bend, where headlights will find them, and they tell you which way the road is about to go. They usually appear in a series, so the more chevrons you can see at once, the tighter the corner.",
        context:
          "Alberta uses a graded family of curve warnings: a gentle curve sign, a sharp turn sign, a winding road sign for a series of bends, and chevrons placed within the bend itself to trace its path. Any speed number attached beneath one is advisory for ideal conditions, and passing on a curve on a two-lane highway is both unsafe and illegal.",
        trap: "Mistaking chevrons for merge arrows is easy at a glance, and it sends drivers looking for a lane change when they should be scrubbing speed.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_17",
        topic: "rightOfWay",
        question:
          "You are driving on a one-way street when an ambulance approaches from behind with its siren sounding. What should you do?",
        choices: [
          "Move only to the right curb and stop until it passes",
          "Maintain your speed and lane so the ambulance can steer around you",
          "Stop immediately in your lane and let the ambulance find a way past",
          "Move to the nearest curb, left or right, and stop until it passes",
        ],
        correctIndex: 3,
        explanation:
          "On a one-way road you clear to whichever curb is closer, which is what makes it different from a two-way road where everyone goes right. Stopping dead in a travel lane just relocates the obstruction, and once the ambulance is by, stay at least 150 metres back.",
        context:
          "When an emergency vehicle approaches from any direction with a siren going, you must yield: move clear, stop, and stay stopped until it has passed, then check that no second vehicle is following. A vehicle showing flashing green lights is a volunteer firefighter responding to a call and is treated the same way. Follow no closer than 150 metres afterwards.",
        trap: "The move-right rule is drilled in so thoroughly that drivers apply it on one-way streets, where crossing to the far-side curb can be the wrong direction entirely.",
        sourceLabel:
          "Alberta Driver's Guide - Emergency Situations and Challenging Conditions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_18",
        topic: "emergencies",
        question:
          "Your engine loses power and you need to pull over. Which location should you avoid?",
        choices: [
          "A bridge or a tunnel",
          "The emergency stopping lane of a divided highway",
          "A wide gravel approach beside a rural road",
          "A parking lot entrance set back from the roadway",
        ],
        correctIndex: 0,
        explanation:
          "Bridges and tunnels have no shoulder to speak of, nowhere for occupants to stand clear, and no room for other traffic to route around you. If the vehicle will still roll at all, get it past the structure before stopping.",
        context:
          "The emergency stopping lane exists precisely for breakdowns and urgent situations, which is why using it as a travel or passing lane is prohibited. If you do stop there, hazard lights go on, the hood goes up, triangles go out behind, and everyone waits well back and to the side of the vehicle rather than inside it or directly behind it.",
        trap: "The emergency stopping lane sounds like the wrong answer because you are told not to drive in it, but stopping there is exactly what it is for.",
        sourceLabel:
          "Alberta Driver's Guide - Emergency Situations and Challenging Conditions",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_19",
        topic: "safety",
        question:
          "You are two hours from home late at night, yawning, and starting to lose track of the last few kilometres. What is the right call?",
        choices: [
          "Call someone hands-free to keep yourself in conversation",
          "Find a safe place to stop and rest before going any further",
          "Push on but reduce your speed by 20 km/h to compensate",
          "Turn the heat down and keep the window open to stay alert",
        ],
        correctIndex: 1,
        explanation:
          "Losing track of the last stretch of road is a sign you have already had brief lapses in attention, which is as close to sleep as driving gets. Cold air, conversation and slower speeds delay the moment without preventing it; only rest actually resets you.",
        context:
          "Fatigue is worsened by lack of sleep, long stretches at the wheel, stress, boredom, illness, eye strain, overeating, a warm cabin and any alcohol or drug use. It stretches reaction time and degrades judgment, producing drifting out of lane, off-road departures and crossings into oncoming traffic. Alberta's remedy is preventive: sleep first, ventilate, keep scanning, and stop to walk around.",
        trap: "The hands-free call sounds like a compliant solution because hands-free is legal, but a phone conversation is still a distraction and does nothing for the underlying sleep debt.",
        sourceLabel: "Alberta Driver's Guide - Driving within the Law",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_20",
        topic: "rules",
        question:
          "You realise on a divided highway that you have just gone past your exit. What should you do?",
        choices: [
          "Stop on the shoulder and wait for a gap, then reverse to the ramp",
          "Use the next median opening to turn around",
          "Carry on to the next exit and find another route back",
          "Reverse along the shoulder to reach the exit ramp",
        ],
        correctIndex: 2,
        explanation:
          "Reversing on a highway, its shoulder or the emergency stopping lane is prohibited and reliably catastrophic at highway speeds. Median openings are for maintenance and emergency vehicles, not for correcting a missed exit.",
        context:
          "Exiting a highway safely means planning ahead: be in the correct lane well before the ramp, signal early, and do most of your slowing in the deceleration lane rather than on the highway itself. Weave zones, where an entrance and an exit share the same short stretch of lane, need extra care because vehicles are speeding up and slowing down in the same space.",
        trap: "The median opening looks purpose-built for turning around, and using one puts you crossing 100 km/h traffic from a standing start.",
        sourceLabel: "Alberta Driver's Guide - Highways and Freeways",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_21",
        topic: "signs",
        question:
          "A yellow diamond shows a car with two wavy lines trailing behind its wheels. What is it warning you about?",
        choices: [
          "The road surface changes from pavement to gravel",
          "There are rumble strips ahead on the shoulder",
          "Loose gravel is being thrown up by passing traffic",
          "The road ahead becomes slippery when wet",
        ],
        correctIndex: 3,
        explanation:
          "Those wavy tracks are skid marks, and the sign warns that this stretch loses grip in the wet. Treat it as a cue to reduce speed before the surface changes rather than while you are already on it.",
        context:
          "Alberta has a family of yellow diamonds for changing road conditions: hills, bumps, pavement ends, slippery when wet, rumble strips, falling rock and bridge ices. Bridge ices is the one that matters most in winter, because a bridge deck has cold air circulating underneath and freezes well before the road on either side of it.",
        trap: "Reading it as a change to gravel is the natural guess since both involve reduced grip, but Alberta has a separate pavement ends sign for that.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_22",
        topic: "speed",
        question:
          "Unless a municipality has posted different hours, when is a school zone speed limit in effect?",
        choices: [
          "On school days, from 8:00 to 9:30 a.m., 11:30 a.m. to 1:30 p.m., and 3:00 to 4:30 p.m.",
          "On school days, from 8:00 a.m. to 4:30 p.m. continuously",
          "Every day of the week, from 8:30 a.m. until one hour after sunset",
          "On school days, from 8:30 a.m. to 9:30 a.m. and 3:00 p.m. to 4:00 p.m.",
        ],
        correctIndex: 0,
        explanation:
          "School zones cover three separate blocks matching arrival, lunch and dismissal, and only on days school is running. Playground zones are the ones that run every day from 8:30 a.m. to an hour after sunset, and confusing the two schedules is a standard mistake.",
        context:
          "Both zone types share a 30 km/h default and a ban on passing while active, and both may have their hours changed by municipal bylaw, in which case the times appear on a sign beneath the main one. Several Alberta cities have converted school zones into playground zones precisely to eliminate the three-block schedule, so read the sign rather than relying on the default.",
        trap: "The continuous 8:00 to 4:30 answer is the plausible simplification, and it has you slowed for hours when the zone is not in effect and gives you nothing on the days it is.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s6_23",
        topic: "licensing",
        question:
          "A peace officer pulls you over during an ordinary traffic stop. What must you be able to produce?",
        choices: [
          "Whatever documents you have, since digital copies are always acceptable",
          "Your driver's licence, vehicle registration and proof of insurance",
          "Your driver's licence only - the rest can be produced later",
          "Your driver's licence and proof of insurance, but not registration",
        ],
        correctIndex: 1,
        explanation:
          "All three documents have to be with you every time you drive, and an officer can ask for any of them. The insurance proof is the pink financial responsibility card issued by your insurer.",
        context:
          "Being pulled over has a routine of its own: stop safely at the right edge on a two-way road or the nearest edge on a one-way, leave the officer room to stop behind you, put the vehicle in park with the brake set, stay inside, and wait for instructions before reaching for anything. Do not move the vehicle again until the officer tells you to.",
        trap: "Registration is the document people leave at home, and it is required to be with you just as much as the licence and the pink card.",
        sourceLabel: "Alberta Driver's Guide - Licensing Information",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_24",
        topic: "rightOfWay",
        question:
          "You have a green light and the right of way, but an oncoming driver starts turning left directly across your path. What should you do?",
        choices: [
          "Sound your horn and continue at the same speed",
          "Swerve across the centre line into the oncoming lane",
          "Brake and take whatever action avoids the collision",
          "Hold your speed and lane, since the other driver must yield",
        ],
        correctIndex: 2,
        explanation:
          "Right of way is something other drivers give you, not something that protects you, and Alberta puts a duty on every driver to do what they can to prevent a collision regardless of who was in the wrong. Winning the argument at the scene is worth nothing.",
        context:
          "Proactive driving assumes other people will make mistakes. Watch for the errors rather than the entitlements: drivers who miss a signal, drivers who misjudge your speed, drivers who simply do not see you. Leave a space cushion, plan an escape route, and if you must swerve, stay on your own side of the yellow line rather than trading one collision for a worse one.",
        trap: "Standing on your right of way feels justified and is legally irrelevant once the collision happens - the duty to avoid it applies to you as well.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_25",
        topic: "signs",
        question:
          "A yellow diamond sign shows the silhouette of a school bus. What does it indicate?",
        choices: [
          "A school zone with a reduced speed limit begins ahead",
          "School buses are prohibited on the road ahead",
          "A school bus loading area where stopping is not permitted",
          "A school bus stop is located ahead",
        ],
        correctIndex: 3,
        explanation:
          "This is a warning that buses stop somewhere along the road ahead, often where a hill or a curve would otherwise hide one from view. It is not a speed zone, and it does not itself require you to stop.",
        context:
          "Warning signs about traffic regulations give you advance notice of something you will have to obey shortly: stop ahead, yield ahead, traffic signals ahead, school bus stop ahead. None of them carries the obligation itself - they exist so the actual sign or signal never arrives as a surprise, which matters most on rural roads where sightlines are short.",
        trap: "Confusing it with the school zone sign is the obvious slip, and the giveaway is the shape - school zones use a fluorescent pentagon, not a yellow diamond.",
        sourceLabel: "Alberta Driver's Guide - Traffic Control",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_26",
        topic: "rules",
        question:
          "You type a destination into your phone's map app while stopped at a red light, then set it down as the light changes. How does Alberta treat this?",
        choices: [
          "It is a distracted driving offence carrying a fine and three demerit points",
          "It is permitted, because the vehicle was stationary at the time",
          "It is permitted, because entering an address is not the same as texting",
          "It is a warning offence only, with no demerit points attached",
        ],
        correctIndex: 0,
        explanation:
          "The distracted driving rules cover holding a phone, texting, programming a GPS, reading, grooming and similar activities, and being stopped in a travel lane does not exempt you. The offence carries three demerits - enough that two of them suspend a GDL driver.",
        context:
          "The list of prohibited distractions is broader than most drivers expect: hand-held phone use, texting or emailing, operating laptops, cameras, video games or entertainment displays, programming audio players, entering information into a GPS, reading printed material, writing or sketching, and personal grooming. Alberta also advises against hands-free calling, which is legal but still takes attention off the road.",
        trap: "Being stopped at a light feels like the moment when it is safe, and the offence does not distinguish between stopped in traffic and moving.",
        sourceLabel: "Alberta Driver's Guide - Responsible Driving",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_27",
        topic: "impairment",
        question:
          "Your pharmacist mentions that a new prescription may cause drowsiness. What does this mean for driving?",
        choices: [
          "It only matters for drivers still in the GDL program",
          "It can impair you, so know its effects before you drive on it",
          "Prescription medication cannot legally be treated as impairment",
          "It only matters if you also drink alcohol while taking it",
        ],
        correctIndex: 1,
        explanation:
          "Impairment is about your actual capacity to drive, not about whether a substance was legally obtained, and both prescription and over-the-counter medicines can dull judgment and reaction time. Ask your doctor or pharmacist how the drug behaves, especially in combination with anything else.",
        context:
          "Alberta groups everything that degrades fitness to drive together: alcohol, drugs, prescription and over-the-counter medication, stress, fatigue and lack of sleep. There is also a 24-hour roadside sanction stream for drivers impaired by a physical or medical condition, which shows that the province is interested in your capacity rather than in what caused the deficit.",
        trap: "Assuming a legal prescription is automatically a defence is the misconception, and it ignores that impairment is measured by effect rather than by legality.",
        sourceLabel: "Alberta Driver's Guide - Driving within the Law",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_28",
        topic: "safety",
        question:
          "A blizzard puts your vehicle into the ditch in a safe spot, well off the highway. What is generally the safest thing to do?",
        choices: [
          "Set out on foot toward the nearest lights you can see",
          "Wait in the vehicle with the engine off and all windows sealed",
          "Stay with the vehicle, running the engine sparingly with a window cracked",
          "Stay with the vehicle and run the engine continuously for warmth",
        ],
        correctIndex: 2,
        explanation:
          "Your vehicle is shelter and it is far easier to find than you are on foot. Run the engine only enough to keep warm and leave a window open slightly, because a snow-blocked or leaking exhaust can fill the cabin with carbon monoxide you will never smell.",
        context:
          "Winter emergency supplies exist for exactly this situation: blankets and extra clothing, sand or road salt, a shovel, a candle in a deep can with matches, an ice scraper and brush. Carbon monoxide is the specific hazard when you sit in a running vehicle in deep snow, since it is colourless, odourless and tasteless, and a blocked tailpipe routes it straight into the cabin.",
        trap: "Walking toward visible lights is the instinct that kills people in blizzards, because distance is impossible to judge in whiteout and the vehicle is the only shelter you have.",
        sourceLabel:
          "Alberta Driver's Guide - Emergency Situations and Challenging Conditions",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "ab_s6_29",
        topic: "sharing",
        question:
          "A large truck ahead of you signals a right turn at an intersection and swings out to the left first. What should you do?",
        choices: [
          "Move up on the right, since the truck has left that space open",
          "Pass on the left while the truck completes its turn",
          "Pull alongside on the right and wait there until the truck clears",
          "Stay well back and keep out of the space on the truck's right",
        ],
        correctIndex: 3,
        explanation:
          "A long vehicle has to swing wide to get its trailer around a corner, so that inviting gap on its right is exactly where the trailer is about to sweep through. Anything sitting there gets squeezed between the truck and the curb.",
        context:
          "Large vehicles have large blind spots, and Alberta gives a simple test: if you cannot see both of the truck's side mirrors, the driver cannot see you. Leave extra space behind one at a traffic light, since it needs more room to stop and may roll back on a hill, and leave extra room in front before pulling back in after a pass.",
        trap: "The gap on the right looks like an invitation, which is precisely why right-turn squeeze collisions between trucks and cars keep happening.",
        sourceLabel: "Alberta Driver's Guide - Sharing the Road",
        sourceUrl: GUIDE,
      },
      {
        id: "ab_s6_30",
        topic: "rules",
        question:
          "The light is green but traffic on the far side of the intersection is backed up. What should you do?",
        choices: [
          "Wait behind the line until you can clear the intersection completely",
          "Enter on the green and wait in the intersection for space to open",
          "Enter as far as the crosswalk on the far side and wait there",
          "Enter and, if the light changes, reverse back out of the intersection",
        ],
        correctIndex: 0,
        explanation:
          "Entering an intersection you cannot exit blocks cross traffic when the light turns and leaves you stranded in the collision zone. Hold behind the line until there is genuinely room on the other side for your whole vehicle plus the crosswalk.",
        context:
          "The rule is that you do not enter an intersection until you can clear it completely, including the crosswalk on the far side. The same thinking applies at railway crossings, where stopping on the tracks is potentially fatal, and to left turns, where you should stay behind the crosswalk if there is only room for one vehicle waiting in the intersection.",
        trap: "Creeping up to the far crosswalk feels like a compromise, and it still blocks pedestrians and leaves you sitting in the path of cross traffic.",
        sourceLabel: "Alberta Driver's Guide - Intersections and Turns",
        sourceUrl: GUIDE,
      },
    ],
  },
];
