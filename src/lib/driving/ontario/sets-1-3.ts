import type { DrivingTestSet } from "../types";

// Ontario G1 practice sets 1-3.
//
// Every item below was written from scratch against the Official MTO Driver's
// Handbook on ontario.ca. Nothing is lifted from the handbook text and nothing
// is copied from a real or commercial test. Each question links to the exact
// chapter the rule lives in so the learner can read the authoritative wording
// on the government's own site.
//
// The real G1 is two separately-scored halves - 20 signs, 20 rules, 16 needed
// on each - so these sets run roughly 43-45% signs/signals items and the rest
// rules-side topics, letting the results screen split honestly.

const HB = "https://www.ontario.ca/document/official-mto-drivers-handbook";

const src = {
  signs: { sourceLabel: "MTO Driver's Handbook - Signs", sourceUrl: `${HB}/signs` },
  lights: {
    sourceLabel: "MTO Driver's Handbook - Traffic lights",
    sourceUrl: `${HB}/traffic-lights`,
  },
  pedSignals: {
    sourceLabel: "MTO Driver's Handbook - Pedestrian signals",
    sourceUrl: `${HB}/pedestrian-signals`,
  },
  markings: {
    sourceLabel: "MTO Driver's Handbook - Pavement markings",
    sourceUrl: `${HB}/pavement-markings`,
  },
  along: {
    sourceLabel: "MTO Driver's Handbook - Driving along",
    sourceUrl: `${HB}/driving-along`,
  },
  intersections: {
    sourceLabel: "MTO Driver's Handbook - Driving through intersections",
    sourceUrl: `${HB}/driving-through-intersections`,
  },
  stopping: {
    sourceLabel: "MTO Driver's Handbook - Stopping",
    sourceUrl: `${HB}/stopping`,
  },
  directions: {
    sourceLabel: "MTO Driver's Handbook - Changing directions",
    sourceUrl: `${HB}/changing-directions`,
  },
  positions: {
    sourceLabel: "MTO Driver's Handbook - Changing positions",
    sourceUrl: `${HB}/changing-positions`,
  },
  sharing: {
    sourceLabel: "MTO Driver's Handbook - Sharing the road with other road users",
    sourceUrl: `${HB}/sharing-road-other-road-users`,
  },
  freeway: {
    sourceLabel: "MTO Driver's Handbook - Freeway driving",
    sourceUrl: `${HB}/freeway-driving`,
  },
  night: {
    sourceLabel: "MTO Driver's Handbook - Driving at night and in bad weather",
    sourceUrl: `${HB}/driving-night-and-bad-weather`,
  },
  emergencies: {
    sourceLabel: "MTO Driver's Handbook - Dealing with emergencies",
    sourceUrl: `${HB}/dealing-emergencies`,
  },
  situations: {
    sourceLabel: "MTO Driver's Handbook - Dealing with particular situations",
    sourceUrl: `${HB}/dealing-particular-situations`,
  },
  licence: {
    sourceLabel: "MTO Driver's Handbook - Getting your driver's licence",
    sourceUrl: `${HB}/getting-your-drivers-licence`,
  },
  keeping: {
    sourceLabel: "MTO Driver's Handbook - Keeping your driver's licence",
    sourceUrl: `${HB}/keeping-your-drivers-licence`,
  },
  otherWays: {
    sourceLabel: "MTO Driver's Handbook - Other ways to lose your licence",
    sourceUrl: `${HB}/other-ways-lose-your-licence`,
  },
  ready: {
    sourceLabel: "MTO Driver's Handbook - Getting ready to drive",
    sourceUrl: `${HB}/getting-ready-drive`,
  },
  parking: {
    sourceLabel: "MTO Driver's Handbook - Parking along roadways",
    sourceUrl: `${HB}/parking-along-roadways`,
  },
  hov: {
    sourceLabel: "Ontario - High Occupancy Vehicle (HOV) lanes",
    sourceUrl: "https://www.ontario.ca/page/high-occupancy-vehicle-hov-lanes",
  },
} as const;

export const ontarioSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Set 1 - First principles",
    difficulty: "starter",
    description:
      "Sign shapes, default speed limits and the G1 restrictions themselves. One rule per question, nothing layered.",
    questions: [
      {
        id: "on_s1_01",
        topic: "signs",
        question:
          "You approach an eight-sided sign with a red background and white lettering. What does it require of you?",
        choices: [
          "Stopping only when another vehicle is already waiting",
          "Slowing to a crawl and continuing if nobody is coming",
          "A complete stop, then proceed once the way is clear",
          "Yielding to traffic on your right, then carrying on",
        ],
        correctIndex: 2,
        explanation:
          "Ontario gives the eight-sided shape to one message and one message only, so you can recognise it even when snow or grime hides the word. It asks for wheels genuinely stopped, not a slow roll that happens to look careful.",
        context:
          "Ontario's sign system encodes meaning in shape and colour before you ever read the words, and the octagon is used for nothing but a stop. Where a vehicle actually stops is a separate rule: at the painted stop line if there is one, otherwise at the crosswalk, otherwise at the edge of the sidewalk or the intersection. If your view of cross traffic is blocked from that point, you stop first and then edge forward for a second look.",
        trap:
          "Slowing to a crawl feels responsible and is what most drivers actually do, but the rule is a full stop - a rolling approach is an offence even when the intersection turns out to be empty.",
        ...src.signs,
      },
      {
        id: "on_s1_02",
        topic: "licensing",
        question:
          "A G1 driver is heading out for the evening. How much alcohol may be in their blood while they drive?",
        choices: [
          "None at all - their blood alcohol level has to be zero",
          "Anything under 0.05, the same as a fully licensed driver",
          "Anything under 0.08, the criminal threshold",
          "One standard drink, provided an hour has passed",
        ],
        correctIndex: 0,
        explanation:
          "Novice licences run on a zero-alcohol rule rather than a legal limit, because the whole point of the level is that the driver is still building judgement. There is no small allowance to work within.",
        context:
          "Ontario's graduated system sets zero blood alcohol for every novice driver at both G1 and G2, and a separate rule sets zero for anyone aged 21 and under whatever class they hold. Those two rules stack, so a young novice is covered twice over. Being caught with any alcohol brings an immediate roadside suspension and, on conviction, a longer one plus novice escalating sanctions.",
        trap:
          "The 0.05 answer looks right because that number genuinely exists in Ontario law - but it applies to the accompanying driver sitting beside the G1, not to the G1 at the wheel.",
        ...src.licence,
      },
      {
        id: "on_s1_03",
        topic: "signs",
        question:
          "A diamond-shaped sign with a yellow background and a black symbol is telling you what?",
        choices: [
          "The distance to the next town",
          "A law you are required to obey",
          "A crew is working on the road ahead",
          "A hazard or a change in the road is coming up",
        ],
        correctIndex: 3,
        explanation:
          "Yellow diamonds prepare you rather than command you. They exist so you can adjust speed and position before the curve, dip or crossing arrives, not to hand you a rule to follow.",
        context:
          "The sign families split by job: yellow diamonds warn about permanent road conditions, orange diamonds warn about temporary ones, white rectangles carry enforceable rules, green and blue rectangles handle navigation and services. Learning the family from the shape and colour means you can interpret a symbol you have never seen before. A warning sign has no penalty attached to it directly, but ignoring it and then losing control does.",
        trap:
          "Calling it a law you must obey is tempting because a curve warning clearly implies slowing down - but the enforceable rule there is the posted or default speed limit, not the diamond itself.",
        ...src.signs,
      },
      {
        id: "on_s1_04",
        topic: "speed",
        question:
          "You are driving through a small Ontario town and there are no speed limit signs posted anywhere. What limit applies?",
        choices: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
        correctIndex: 1,
        explanation:
          "Built-up areas carry a built-in limit so that a missing or vandalised sign never leaves a stretch of road ungoverned. Inside cities, towns and villages that default is 50 km/h.",
        context:
          "Ontario runs two unposted defaults: 50 km/h inside cities, towns and villages, and 80 km/h everywhere else. A posted sign overrides the default, and municipalities can post lower limits such as 40 or 30 on residential streets. All of these are ceilings for good conditions, so rain, snow or heavy pedestrian traffic still means driving slower than the number.",
        trap:
          "40 km/h is the most tempting wrong answer because so many Ontario neighbourhoods are now signed at 40 - but that is a posted limit, and with nothing posted the default reverts to 50.",
        ...src.along,
      },
      {
        id: "on_s1_05",
        topic: "signals",
        question:
          "You are stopped at a red light and want to turn right. Nothing is posted forbidding the turn. What is required?",
        choices: [
          "Nothing - a right turn on red never calls for a stop",
          "A full stop first, then the turn once the way is clear",
          "A green arrow before the turn becomes legal",
          "Waiting until the light goes green",
        ],
        correctIndex: 1,
        explanation:
          "The turn is a permission, not an exemption from the red. You still have to stop completely and then judge the gap, including any pedestrian stepping off the curb beside you.",
        context:
          "A red light means a full stop at the stop line or crosswalk. From there Ontario allows a right turn once the way is clear, and also a left turn from a one-way road onto another one-way road, in both cases unless a sign prohibits it. The permission never overrides pedestrians in the crossing or cross traffic that has a green.",
        trap:
          "Treating the right turn as a free-flowing merge is the common error - the permission only exists after the vehicle has genuinely come to rest, and rolling through it is enforced as running the red.",
        ...src.lights,
      },
      {
        id: "on_s1_06",
        topic: "rules",
        question:
          "In good weather, how much space should sit between you and the vehicle ahead?",
        choices: [
          "One car length for every 10 km/h of speed",
          "About half a second, so you are not holding anyone up",
          "A fixed 20 metres, whatever your speed",
          "At least two seconds of travel time",
        ],
        correctIndex: 3,
        explanation:
          "Measuring in seconds rather than metres means the gap scales with your speed automatically. Pick a marker, and if you reach it before you have counted two seconds after the car ahead passed it, you are too close.",
        context:
          "Two seconds is the fair-weather floor, not a target. The gap needs stretching in rain, snow or fog, behind motorcycles whose braking is unpredictable, behind large trucks that block your view of everything ahead, and when you are carrying a heavy load that lengthens your own stopping distance. Following too closely is an offence in its own right and carries four demerit points.",
        trap:
          "The car-lengths rule sounds authoritative and used to be taught widely, but it forces you to estimate lengths at speed - Ontario teaches the time-based method precisely because it needs no measuring.",
        ...src.along,
      },
      {
        id: "on_s1_07",
        topic: "signs",
        question:
          "A symbol sits inside a red circle with a diagonal line struck through it. What is the sign saying?",
        choices: [
          "The activity shown is not allowed",
          "The activity shown is allowed here",
          "The activity shown is allowed only at posted hours",
          "The activity shown is recommended",
        ],
        correctIndex: 0,
        explanation:
          "Ontario uses the ring colour to carry the verdict: red with a stroke through it forbids whatever is pictured inside. A green ring does the opposite and permits it.",
        context:
          "Regulatory signs work as a two-part sentence: the ring is the verb and the symbol is the object. Red ring with a stroke means the pictured action is prohibited, a green ring means it is permitted or required. Because the grammar is consistent, a sign you have never seen before is still readable, and any time restriction is added as separate wording underneath rather than being implied by the ring.",
        trap:
          "The 'allowed only at posted hours' option is tempting because plenty of Ontario prohibitions really are time-limited - but those always spell the hours out in words beneath the symbol, never inside the ring.",
        ...src.signs,
      },
      {
        id: "on_s1_08",
        topic: "rightOfWay",
        question:
          "Two vehicles arrive at a four-way stop at the same instant, on roads that cross each other. Who moves first?",
        choices: [
          "The vehicle carrying on straight through",
          "The vehicle on the left",
          "The vehicle on the right",
          "The larger of the two vehicles",
        ],
        correctIndex: 2,
        explanation:
          "Arrival order settles most four-way stops. The right-hand rule only exists as a tie-break, so the driver on the left gives way when there is genuinely nothing to separate them.",
        context:
          "At an all-way stop the first vehicle to stop is the first to go, and that resolves nearly every case on its own. Only a genuine simultaneous arrival falls back on the right-hand rule, where the vehicle on the left yields. The same tie-break logic governs intersections with no signs or lights at all, and none of it removes your duty to yield to pedestrians already crossing.",
        trap:
          "Picking the vehicle going straight feels intuitive because a left-turning driver usually waits - but that only applies when two vehicles arriving together are on the SAME road facing each other, not on crossing roads.",
        ...src.intersections,
      },
      {
        id: "on_s1_09",
        topic: "signals",
        question:
          "The traffic light ahead of you is a flashing green. What does that tell you about the oncoming lanes?",
        choices: [
          "The signal has failed and you should treat it as a stop sign",
          "They are also flashing green, so a left turn is unprotected",
          "They have a flashing amber and may enter the intersection",
          "They are held at a red, so you may turn left, go straight or turn right",
        ],
        correctIndex: 3,
        explanation:
          "A flashing green in Ontario is an advance green. Traffic coming the other way is sitting at a red, which is what makes the left turn safe to take from the proper lane.",
        context:
          "Ontario uses a flashing green to do the same job as a green left-turn arrow: it tells you that oncoming traffic is being held so your left turn is protected. Unlike the arrow, it also covers going straight and turning right from the correct lane. Pedestrians facing a flashing green are not permitted to start crossing, which is part of what makes the turn safe.",
        trap:
          "Reading it as a broken signal is the classic newcomer error, because several other provinces and US states use a flashing green to mean something entirely different - in Ontario it is a normal, deliberate advance phase.",
        commonlyMissed: true,
        ...src.lights,
      },
      {
        id: "on_s1_10",
        topic: "signs",
        question:
          "You come across a diamond-shaped sign with an orange background. What kind of information is it carrying?",
        choices: [
          "A permanent hazard built into the road",
          "A temporary condition such as construction or a lane closure",
          "A rule that carries doubled fines",
          "The route to a nearby service or facility",
        ],
        correctIndex: 1,
        explanation:
          "Orange is reserved for conditions that will not be there forever. Seeing it should make you expect the layout to differ from what your map or memory says.",
        context:
          "Orange marks temporary condition signs: construction, maintenance, detours, lane shifts and survey crews. They override the permanent signs and markings around them for as long as the work lasts. Separately, speeding fines are doubled in designated construction zones when workers are present, but that penalty comes from the posted construction-zone signing rather than from the orange colour alone.",
        trap:
          "The doubled-fines answer is close enough to the truth to be seductive - fines really are doubled in some work zones - but the orange diamond itself is a warning, and the penalty is created by separate signs.",
        ...src.signs,
      },
      {
        id: "on_s1_11",
        topic: "sharing",
        question:
          "A school bus in front of you switches on its upper amber lights. What should you be doing?",
        choices: [
          "Nothing at all until the red lights start flashing",
          "Speeding up to get past before the red lights come on",
          "Slowing down and preparing to stop",
          "Pulling onto the shoulder to wait it out",
        ],
        correctIndex: 2,
        explanation:
          "Amber is the warning stage, and it exists precisely so nobody has to brake hard when the reds come on. Trying to beat the change is how drivers end up stopped level with an opening door.",
        context:
          "A school bus runs a two-stage sequence: upper amber lights signal that it is about to stop for passengers, then flashing reds and the extended stop arm require traffic to stop. Behind the bus you stop at least 20 metres back, and you stay stopped until the reds go out and the arm folds away. Failing to stop for a school bus is one of Ontario's heavier offences at six demerit points.",
        trap:
          "Waiting until the reds appear before reacting is the answer most drivers give, and it is exactly why so many end up stopping abruptly or overshooting - the amber stage is there to be acted on.",
        ...src.sharing,
      },
      {
        id: "on_s1_12",
        topic: "safety",
        question:
          "A 12-year-old passenger is riding unbuckled. Who answers for it?",
        choices: [
          "The driver",
          "The child",
          "The child's parent, whether or not they are in the vehicle",
          "The front-seat passenger",
        ],
        correctIndex: 0,
        explanation:
          "Ontario puts the duty on whoever is at the wheel for every passenger under 16, and it comes with a fine and demerit points. Checking belts before moving off is part of the driving job, not a favour.",
        context:
          "The driver is responsible for making sure every passenger under 16 is properly secured, whether that means a seat belt, a child seat or a booster. Passengers 16 and over answer for themselves. Novice drivers face an extra layer: they must be able to provide a working seat belt for every person in the vehicle, and failing that can cost the licence for at least 30 days.",
        trap:
          "Blaming the parent feels fair when you are just giving a neighbour's kid a lift - but the law follows the person in control of the vehicle at that moment, not the child's guardian.",
        ...src.ready,
      },
      {
        id: "on_s1_13",
        topic: "signs",
        question:
          "A downward-pointing triangular sign, white with a red border, stands at the end of a side road. What does it require?",
        choices: [
          "Slowing, and stopping if needed, to let the other road's traffic go first",
          "A complete stop every time, exactly like a stop sign",
          "Merging without altering your speed",
          "That crossing traffic gives way to you",
        ],
        correctIndex: 0,
        explanation:
          "A yield asks you to fit into a gap rather than halt on principle. If a gap is there you flow through; if it is not, stopping becomes the only way to give way properly.",
        context:
          "A yield sign hands priority to traffic already in the intersection or on the road you are joining. The obligation is to give way, and how much you slow depends entirely on what is coming - sometimes that means a full stop, sometimes a gentle lift off the accelerator. The downward triangle is unique to yields, so like the octagon it is readable before you can make out any wording.",
        trap:
          "Treating it as a stop sign is the safe-feeling answer and rarely gets anyone hurt, but it is not what the sign asks for, and stopping dead in a live merge lane creates its own hazard.",
        ...src.intersections,
      },
      {
        id: "on_s1_14",
        topic: "speed",
        question:
          "You leave town onto a rural road and no speed limit signs are posted. What limit applies?",
        choices: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
        correctIndex: 2,
        explanation:
          "Outside cities, towns and villages the unposted default rises to 80 km/h. That is a ceiling rather than an instruction, and gravel, fog or a blind crest still call for less.",
        context:
          "Ontario's second default limit, 80 km/h, covers everything outside built-up areas unless a sign says otherwise. Freeways are posted higher, typically 100 km/h with some stretches at 110. The limit is the maximum for good conditions, and driving too fast for the actual conditions remains an offence regardless of what the speedometer reads.",
        trap:
          "90 km/h is tempting because it is roughly what traffic actually flows at on many rural Ontario roads - but real-world pace is not the legal default, and the unposted number is 80.",
        ...src.along,
      },
      {
        id: "on_s1_15",
        topic: "signals",
        question: "What do white lines painted between lanes tell you?",
        choices: [
          "Traffic on the other side is coming toward you",
          "Traffic on either side of them is travelling the same way you are",
          "The lane on your left is for passing only",
          "Parking is allowed along that edge",
        ],
        correctIndex: 1,
        explanation:
          "Colour is the shorthand for direction: white separates lanes moving together, yellow separates you from traffic coming the other way. Getting that pair straight makes an unfamiliar road much easier to read.",
        context:
          "Pavement markings carry two independent pieces of information. Colour tells you about direction - white for same-way traffic, yellow for opposing traffic. Pattern tells you about permission - broken means you may cross when it is safe, solid means you should not. Combine the two and a road you have never driven becomes readable at a glance, even in the dark.",
        trap:
          "Reading white as 'passing lane' mixes up the two signals - the colour never tells you what the lane is for, only which direction the traffic beside you is going.",
        ...src.markings,
      },
      {
        id: "on_s1_16",
        topic: "licensing",
        question: "A G1 driver wants to practise. Who is allowed to sit beside them?",
        choices: [
          "A G driver with one year of experience, in the back seat",
          "Any licensed driver over 21, sitting anywhere in the vehicle",
          "A G2 driver with two years of experience",
          "A fully licensed G driver with at least four years of experience, in the front passenger seat",
        ],
        correctIndex: 3,
        explanation:
          "The accompanying driver is meant to be a genuine second set of trained eyes, which is why the rule sets a licence class, an experience floor and a seat. Their own blood alcohol has to stay under 0.05 as well.",
        context:
          "Every G1 drive needs an accompanying driver who holds a full class G or better, has at least four years of driving experience, sits in the front passenger seat, and is under 0.05 blood alcohol themselves. Alongside that, a G1 cannot drive between midnight and 5 a.m., cannot use high-speed 400-series routes and named expressways except with a licensed instructor, and needs a working seat belt for every occupant.",
        trap:
          "The 'any licensed driver over 21' option mirrors how people actually behave - the experience requirement is four years of driving, and a G2 holder never qualifies no matter how old they are.",
        ...src.licence,
      },
      {
        id: "on_s1_17",
        topic: "signs",
        question:
          "A rectangular sign with a green background and white lettering appears beside the road. What is it for?",
        choices: [
          "Setting out a rule you have to follow",
          "Warning of a hazard around the next bend",
          "Pointing you toward destinations and giving distances",
          "Marking a temporary detour",
        ],
        correctIndex: 2,
        explanation:
          "Green is the navigation colour. Nothing on a green sign obliges you to act - it is there to answer where and how far, which is why it can be read at a glance and then ignored.",
        context:
          "Information and direction signs are rectangular, green with white lettering for destinations and distances, and blue with white symbols for services such as fuel, food and lodging. Neither colour creates an obligation, which matters when you are scanning: green and blue can wait, white regulatory signs and yellow or orange warnings cannot.",
        trap:
          "Confusing green with the temporary-detour answer is easy because detours also tell you where to go - but detour signing is orange, since it exists only while the closure lasts.",
        ...src.signs,
      },
      {
        id: "on_s1_18",
        topic: "sharing",
        question:
          "You are travelling toward a stopped school bus with its red lights flashing. A raised median separates your side of the road from the bus. What do you do?",
        choices: [
          "Carry on with care - only traffic behind the bus has to stop",
          "Stop where you are until the lights go off",
          "Stop at least 20 metres back, the same as traffic behind the bus",
          "Stop only if you can actually see children on the road",
        ],
        correctIndex: 0,
        explanation:
          "The exception hinges on the road being divided. With a median in between, no child can reach your lanes, so oncoming traffic keeps moving. Take the median away and both directions must stop.",
        context:
          "Flashing reds and an extended stop arm normally stop traffic in both directions. The single exception is a divided highway, where oncoming traffic may continue because a physical median stands between the children and those lanes. Traffic travelling behind the bus stops regardless, at least 20 metres back, and waits until the lights go out and the arm retracts.",
        trap:
          "Stopping anyway feels like the cautious choice and will not get you a ticket, but it is worth knowing why the exception exists - the test is a physical median, not lane count or a painted line.",
        commonlyMissed: true,
        ...src.sharing,
      },
      {
        id: "on_s1_19",
        topic: "rules",
        question:
          "Your turn signal is on and you are waiting to pull out. Does signalling give you the right of way?",
        choices: [
          "Only on roads posted at 50 km/h or less",
          "Yes, once the signal has been running for three seconds",
          "Yes, other drivers are obliged to let a signalling vehicle in",
          "No - it announces your intention, and you still have to wait for a safe gap",
        ],
        correctIndex: 3,
        explanation:
          "A signal is communication, not a claim. Assuming it clears a path is one of the more reliable ways to get hit, because the driver you are counting on may never have seen the light.",
        context:
          "Signalling is required before you turn, change lanes, slow or stop, and it should go on early enough that others can plan around it. What it never does is transfer priority - the duty to wait for a genuine gap stays with you throughout. The same logic applies to a hand wave from another driver: it is information about one person's intention, not permission from everyone else on the road.",
        trap:
          "The three-second answer sounds precise and rule-like, which is exactly what makes it convincing - but no amount of signalling time converts an intention into a right of way.",
        ...src.intersections,
      },
      {
        id: "on_s1_20",
        topic: "signs",
        question:
          "Some Ontario signs use a five-sided shape with a fluorescent yellow-green background. Where do they turn up?",
        choices: [
          "At construction zones",
          "Around schools and pedestrian crossings",
          "On freeway exit ramps",
          "At railway crossings",
        ],
        correctIndex: 1,
        explanation:
          "That colour was chosen because it jumps out of a grey streetscape in a way ordinary yellow does not. It flags places where people on foot, often small ones, are expected in the roadway.",
        context:
          "Ontario splits its warning signs by what is being warned about. Standard yellow diamonds cover road geometry - curves, dips, merges. The five-sided fluorescent yellow-green signs cover people: school areas, school crossings and pedestrian crossings. Seeing that colour should shift your scanning from the pavement to the sidewalks and between parked cars.",
        trap:
          "Construction is the tempting answer because both colours are deliberately loud - but work zones are orange, and the fluorescent yellow-green is reserved for pedestrian and school warnings.",
        ...src.signs,
      },
      {
        id: "on_s1_21",
        topic: "emergencies",
        question:
          "A fire truck comes up behind you with lights and siren running. What is the right response?",
        choices: [
          "Speed up to clear the intersection ahead of you",
          "Move as close as you safely can to the right edge and stop",
          "Move onto the shoulder and keep rolling slowly",
          "Stop exactly where you are in your lane",
        ],
        correctIndex: 1,
        explanation:
          "Predictability is what actually helps: pull right, stop, and let the crew route around you. Staying on the shoulder is the wrong instinct, because emergency vehicles often use the shoulder to get past a queue.",
        context:
          "When an emergency vehicle approaches with lights or siren, you pull as close as practical to the right-hand curb or edge and stop, signalling and braking gradually so the drivers behind you can follow suit. On a one-way road or a divided highway with several lanes you move to the nearest edge instead. A separate rule covers emergency vehicles already stopped ahead of you: slow down, and move over a lane if you safely can.",
        trap:
          "Speeding up to clear the intersection is what panicking drivers do, and it is the worst option - it puts you moving fast in exactly the space the emergency vehicle is aiming for.",
        ...src.situations,
      },
      {
        id: "on_s1_22",
        topic: "licensing",
        question: "Which of these is a G1 driver not permitted to do?",
        choices: [
          "Drive in heavy rain",
          "Drive on a road posted at 80 km/h",
          "Carry passengers in the back seat",
          "Drive between midnight and 5 a.m.",
        ],
        correctIndex: 3,
        explanation:
          "The overnight ban is a hard line for level one, whoever is sitting beside you. Roads posted at 80 km/h are fine; it is the higher-speed 400-series routes and named expressways that are off limits.",
        context:
          "G1 restrictions cover four things: zero blood alcohol, a qualified accompanying driver in the front passenger seat, a working seat belt for every occupant, and no driving between midnight and 5 a.m. On top of that, high-speed 400-series highways and named expressways such as the QEW, DVP, Gardiner, E.C. Row and Conestoga are closed to G1 drivers unless the person beside them is a licensed driving instructor. Nothing restricts back-seat passengers or driving in bad weather.",
        trap:
          "The 80 km/h option catches people who half-remember the freeway rule - the restriction is tied to specific high-speed highways, not to any road with a limit of 80.",
        commonlyMissed: true,
        ...src.licence,
      },
      {
        id: "on_s1_23",
        topic: "signals",
        question:
          "Someone is about to step off the curb when the pedestrian signal changes to a flashing orange hand. What does that mean for them?",
        choices: [
          "Do not start crossing; anyone already in the road finishes the crossing",
          "Cross quickly, because the walk signal is about to return",
          "Cross only if no vehicle is turning",
          "The signal is out of order",
        ],
        correctIndex: 0,
        explanation:
          "The hand is a start line, not a finish line. It closes the crossing to new arrivals while protecting anyone already out there, which is why a driver turning across the crosswalk still has to wait.",
        context:
          "The walking symbol permits a pedestrian to begin crossing, and while it shows they have priority over all vehicles. A hand symbol, whether flashing or steady, means do not start - but anyone already in the roadway keeps the right of way and should move promptly to safety. For drivers this matters most on a green turn, when the crosswalk you are turning across may still hold someone who set off legally.",
        trap:
          "Reading a flashing signal as 'hurry across' is the intuitive but wrong instinct, and it is the same instinct that gets pedestrians caught mid-road when the cross traffic gets its green.",
        ...src.pedSignals,
      },
      {
        id: "on_s1_24",
        topic: "parking",
        question: "How much clearance must you leave when parking near a fire hydrant?",
        choices: ["At least 9 metres", "At least 5 metres", "At least 3 metres", "At least 15 metres"],
        correctIndex: 2,
        explanation:
          "Three metres is roughly the working room a crew needs to couple a hose without dragging it around a bumper. It is a small number that gets forgotten precisely because it is small.",
        context:
          "Ontario's parking clearances scale with the hazard: 3 metres from a fire hydrant, 9 metres from an intersection, 15 metres from an intersection controlled by traffic lights, and 15 metres from the nearest rail of a level railway crossing. On top of the distances you must never block a sidewalk, crosswalk, road entrance or a public entrance to a hotel or theatre, and never park where your view is under 125 metres in both directions.",
        trap:
          "9 metres is the most attractive wrong answer because that number really is a parking clearance in Ontario - it just belongs to intersections, not hydrants.",
        ...src.parking,
      },
      {
        id: "on_s1_25",
        topic: "signs",
        question:
          "A rectangular sign with a blue background and white symbols is guiding you to what?",
        choices: [
          "The edge of a construction zone",
          "A hazard further along the road",
          "A rule that carries demerit points",
          "Services and facilities such as fuel, food or lodging",
        ],
        correctIndex: 3,
        explanation:
          "Blue handles amenities. Like green, it carries no obligation - it simply answers a question you might have about where the next stop is.",
        context:
          "Blue and green are the two information colours, and neither one requires anything of you. Green covers destinations and distances; blue covers services and facilities you might want to pull off for. Because they are optional reading, they can safely be scanned last, after the regulatory whites and the warning yellows and oranges have been dealt with.",
        trap:
          "Assuming blue means something official and enforceable is a natural leap - but no blue sign in this family creates a rule or a penalty.",
        ...src.signs,
      },
      {
        id: "on_s1_26",
        topic: "signs",
        question:
          "You pass a sign announcing a community safety zone. What changes inside it?",
        choices: [
          "The speed limit automatically drops to 40 km/h",
          "Fines for traffic offences go up",
          "Passing is banned for the length of the zone",
          "Only local traffic may use the road",
        ],
        correctIndex: 1,
        explanation:
          "The zone is a penalty multiplier, not a speed sign. A community has flagged that stretch as unusually risky for people on foot, so the same offence simply costs more there.",
        context:
          "A community safety zone is designated by a municipality where there is a recognised risk to pedestrians, often near schools, parks or seniors' housing. Inside it, fines for traffic offences are increased, but the posted speed limit and every other rule stay exactly as signed. A separate doubling applies to speeding fines in construction zones when workers are present.",
        trap:
          "The automatic 40 km/h answer is the one most people pick because community safety zones and reduced-speed areas so often overlap - the zone itself changes penalties, and any lower limit comes from its own posted sign.",
        commonlyMissed: true,
        ...src.signs,
      },
      {
        id: "on_s1_27",
        topic: "impairment",
        question:
          "A 20-year-old holds a full class G licence. What blood alcohol level may they drive with?",
        choices: [
          "Under 0.08, the criminal threshold",
          "Under 0.05, since the licence is a full one",
          "Zero - the rule covers every driver aged 21 and under",
          "Zero only during their first year on a full licence",
        ],
        correctIndex: 2,
        explanation:
          "Ontario ties this one to age rather than licence class, so finishing graduated licensing does not buy any allowance. Everyone 21 and under drives at zero.",
        context:
          "Ontario runs two overlapping zero-alcohol rules. One follows the licence: every G1 and G2 novice is at zero. The other follows age: every driver 21 and under is at zero regardless of class. Above that, 0.05 to 0.08 is the warn range with immediate roadside suspensions, and over 0.08 is criminal territory with a 90-day administrative suspension and a seven-day impoundment.",
        trap:
          "The 0.05 answer is tempting because holding a full G really does lift the novice restrictions - but the age-based rule is separate and keeps this driver at zero until they turn 22.",
        ...src.licence,
      },
      {
        id: "on_s1_28",
        topic: "safety",
        question: "When does Ontario require your headlights to be on?",
        choices: [
          "From half an hour before sunset until half an hour after sunrise",
          "Only between full dark and first light",
          "From sunset until sunrise exactly",
          "Only when you cannot make out another vehicle",
        ],
        correctIndex: 0,
        explanation:
          "The half-hour buffers at each end cover dusk and dawn, when your own vision feels fine but you are nearly invisible to others. Lights also go on any time poor conditions cut visibility below 150 metres.",
        context:
          "Headlights are required from half an hour before sunset to half an hour after sunrise, and at any other time when conditions stop you seeing clearly for 150 metres. Beyond that there are dipping rules: low beams within 150 metres of an oncoming vehicle and within 60 metres of one you are following, plus low beams in fog, where high beams reflect off the droplets and reduce what you can see.",
        trap:
          "The 'sunset until sunrise exactly' option sounds like the same rule with tidier numbers - but the half-hour margins are the entire point, because dusk is when drivers are hardest to see.",
        ...src.ready,
      },
      {
        id: "on_s1_29",
        topic: "rightOfWay",
        question:
          "A pedestrian is using a marked pedestrian crossover. When may you drive on?",
        choices: [
          "Once they have crossed the entire road and reached the sidewalk",
          "Once they have passed the centre line",
          "Once they are clear of your lane",
          "As soon as they notice you and wave you through",
        ],
        correctIndex: 0,
        explanation:
          "At a crossover the whole roadway belongs to the pedestrian until they are off it. Creeping forward once they clear your lane is the classic error, and it carries demerit points.",
        context:
          "At pedestrian crossovers and at school crossings staffed by a guard, drivers and cyclists must wait until everyone has completely cleared the roadway and reached the far side. The rule covers the whole width of the road, not just the lane you are in, and a crossing guard counts as a pedestrian too. Passing another vehicle within 30 metres of a crossover is separately prohibited, because the vehicle you are overtaking may be stopped for someone you cannot yet see.",
        trap:
          "Moving off once they clear your lane feels perfectly reasonable and is what most traffic actually does - but at a crossover the entitlement runs the full width of the road, and failing to wait is a four-point offence.",
        commonlyMissed: true,
        ...src.stopping,
      },
      {
        id: "on_s1_30",
        topic: "rules",
        question: "On a multi-lane road, where should you normally be driving?",
        choices: [
          "In the middle lane at all times",
          "In the left lane, so slower traffic can enter and exit freely",
          "In the right-hand lane, using the left lanes to pass",
          "Wherever traffic is thinnest, changing lanes often",
        ],
        correctIndex: 2,
        explanation:
          "Keeping right leaves the passing lanes free and cuts the number of lane changes everyone else has to make. Fewer weaving vehicles means fewer chances for two drivers to want the same patch of road.",
        context:
          "Ontario's default is keep right, pass left. You move into a left lane to overtake traffic moving slower than the limit, then return to the right when the pass is done. The right-hand lane is also where merging and exiting traffic interacts with the road, which is why staying there when you are not passing keeps the whole system predictable.",
        trap:
          "Hunting for the thinnest lane and changing often feels efficient, but each lane change is a fresh chance to be in someone's blind spot - steady lane discipline is what the rule is protecting.",
        ...src.along,
      },
    ],
  },

  {
    id: "set-2",
    setNumber: 2,
    title: "Set 2 - Core rules",
    difficulty: "easy",
    description:
      "Signals, pavement markings, right of way and the numbers the G1 keeps coming back to. Still one rule at a time, but less obvious.",
    questions: [
      {
        id: "on_s2_01",
        topic: "signals",
        question:
          "A green arrow pointing left is lit beside a red light. What are you being told?",
        choices: [
          "You may turn left after yielding to oncoming traffic",
          "You may turn left; oncoming traffic is being held",
          "You have to wait for a full green before turning",
          "Left turns are prohibited at this intersection",
        ],
        correctIndex: 1,
        explanation:
          "An arrow gives you a protected movement in the direction it points. Nothing should be coming at you, though a look through the intersection before you commit still costs nothing.",
        context:
          "A green arrow is an advance signal: it means traffic that would conflict with the arrow's direction is being held at a red. Ontario's flashing green does the same job, but covers going straight and turning right as well. At intersections with a fully protected left turn, the arrow is the only time a left turn is permitted at all.",
        trap:
          "The 'yield to oncoming traffic' option describes what you do on a plain green with no arrow - the whole point of the arrow is that the yielding has already been done for you by the signal.",
        ...src.lights,
      },
      {
        id: "on_s2_02",
        topic: "rightOfWay",
        question:
          "You reach a crossroads with no signs and no lights. Another car arrives from your right a moment after you do. Who has the right of way?",
        choices: [
          "Neither - both stop and wave the other through",
          "The other car, because it is on your right",
          "Whichever vehicle is travelling faster",
          "You do, because you arrived first",
        ],
        correctIndex: 3,
        explanation:
          "Order of arrival is the primary rule at an uncontrolled intersection. The right-hand rule is only there to break a genuine tie, so a car arriving a moment behind you does not inherit priority by being on your right.",
        context:
          "At an intersection with no signs or signals, you yield to any vehicle that got there before you. Only when two arrive together does the vehicle on the right take priority. The same two-step logic runs all-way stops, and in both cases pedestrians already in the crossing come ahead of everyone. Having the right of way never removes the duty to avoid a collision.",
        trap:
          "The right-hand rule is so widely taught that people apply it first and check arrival order second - it is the tie-break, not the opening rule.",
        ...src.intersections,
      },
      {
        id: "on_s2_03",
        topic: "signs",
        question:
          "A regulatory sign shows a symbol inside a green circle. What is the green ring saying?",
        choices: [
          "The sign is advisory rather than legal",
          "The activity shown is forbidden",
          "The activity shown is permitted or required here",
          "The rule applies to commercial vehicles only",
        ],
        correctIndex: 2,
        explanation:
          "Green ring and red ring are a matched pair, which is the whole point of the design. Once you know one of them you never have to guess at the other.",
        context:
          "Regulatory signs are usually rectangular or square, white or black, with black, white or coloured symbols, and the ring around a symbol carries the verdict. Green means you may or must do what is pictured; red with a diagonal stroke means you may not. Any restriction on time, direction or vehicle type is written out separately rather than being implied by the ring colour.",
        trap:
          "Calling it advisory is the seductive answer because a green ring feels permissive rather than commanding - but these are regulatory signs, and the permission they grant is a legal one.",
        ...src.signs,
      },
      {
        id: "on_s2_04",
        topic: "sharing",
        question:
          "You are about to overtake a cyclist on a city street. How much room should you leave?",
        choices: [
          "At least one metre, wherever that is practical",
          "At least half a metre",
          "Enough that you do not make contact",
          "At least two metres in every situation",
        ],
        correctIndex: 0,
        explanation:
          "A metre is the buffer that lets a rider swerve around a grate or a pothole without ending up under your mirror. Squeezing past closer than that draws a fine plus two demerit points.",
        context:
          "Ontario requires a minimum of one metre between vehicle and cyclist when passing, where practical. If the lane is too narrow to give that, the pass waits. Related rules keep drivers out of bike lanes except to complete a right turn at a corner or driveway, and require stopping behind bike boxes at intersections rather than inside them.",
        trap:
          "'Enough that you do not make contact' is how most drivers actually judge it, and it is exactly the standard the one-metre rule was written to replace - a cyclist needs room to move, not just room to exist.",
        ...src.sharing,
      },
      {
        id: "on_s2_05",
        topic: "signals",
        question:
          "Two solid yellow lines run down the middle of the road. What do they tell you?",
        choices: [
          "Parking is banned on both shoulders",
          "You may pass whenever the road ahead is clear",
          "The lane to your left is a turning lane",
          "Traffic on the other side is coming toward you and neither direction may pass",
        ],
        correctIndex: 3,
        explanation:
          "Yellow marks the divide between opposing flows, and solid means the sightlines or the layout make passing a bad bet. Two solid lines close it off from both sides.",
        context:
          "Read markings as colour plus pattern. Yellow means traffic on the far side is coming toward you; white means it is going your way. Solid means do not cross to pass; broken means you may when it is safe. A solid line on your side of a broken one closes passing for you while leaving it open to the other direction, and two solid lines close it for everybody.",
        trap:
          "Mistaking the double yellow for a turning lane is easy in cities, where a two-way left turn lane also uses yellow - but that layout pairs a solid outer line with a broken inner one, never two solids.",
        ...src.markings,
      },
      {
        id: "on_s2_06",
        topic: "licensing",
        question:
          "How long must a G1 be held before the level one road test if the driver completes an approved driver education course?",
        choices: [
          "6 months instead of 12",
          "8 months instead of 12",
          "10 months instead of 12",
          "The full 12 months either way",
        ],
        correctIndex: 1,
        explanation:
          "Approved training buys back four months of the twelve. It is the only shortcut in the graduated system, and it exists because structured instruction covers ground that unsupervised practice tends to miss.",
        context:
          "The G1 stage normally runs 12 months, reduced to 8 with a ministry-approved driver education course. Passing the level one road test moves you to G2, which must be held at least 12 months before the level two road test for a full G. Nothing shortens the G2 stage, so the driver education credit is a one-time saving at the start.",
        trap:
          "Six months is the number most people guess because it sounds like a clean halving of the wait - the actual reduction is four months, landing at eight.",
        ...src.licence,
      },
      {
        id: "on_s2_07",
        topic: "signs",
        question:
          "A white diamond is painted on a lane of a 400-series highway and repeated on the signs above it. Who is allowed to drive there?",
        choices: [
          "Any vehicle, as long as it holds the posted speed",
          "Vehicles carrying at least two people, plus buses, taxis, motorcycles and green-plate vehicles",
          "Vehicles carrying three or more people only",
          "Commercial trucks and buses only",
        ],
        correctIndex: 1,
        explanation:
          "The diamond marks a high occupancy vehicle lane, and two people in the car is the ordinary threshold. A handful of categories get in regardless of headcount, which is where most of the confusion sits.",
        context:
          "HOV lanes on 400-series highways need at least two occupants including the driver. Buses of all kinds, licensed taxis, airport limousines, emergency vehicles, motorcycles and green-plate electric vehicles qualify whatever their occupancy. Large trucks are excluded outright no matter how many people are aboard, and improper use draws a fine plus three demerit points.",
        commonlyMissed: true,
        trap:
          "Three or more occupants is the standard in a lot of US HOV systems, which is why it reads as plausible - Ontario's ordinary threshold is two.",
        ...src.freeway,
      },
      {
        id: "on_s2_08",
        topic: "emergencies",
        question:
          "After a collision, when does the law require you to report it to police?",
        choices: [
          "Only when a vehicle cannot be driven away",
          "Only when somebody is hurt",
          "Whenever the other driver asks you to",
          "When anyone is hurt, or the damage looks like more than $5,000",
        ],
        correctIndex: 3,
        explanation:
          "Injury triggers a report on its own, and so does damage above the dollar threshold even when everyone walks away. Modern bumpers and sensors mean a scrape reaches that figure far more easily than people expect.",
        context:
          "A collision must be reported to police when there are injuries, or when damage to vehicles or other property looks like it exceeds the threshold. Where nobody is hurt and the vehicles still drive, the sequence is to clear the roadway first, then exchange information, gather witness details, photograph the scene if it is safe, and notify your insurer. Failing to remain at the scene is one of the heaviest offences on the demerit schedule at seven points.",
        trap:
          "'Only when somebody is hurt' is the answer that sinks people, because property damage alone is enough - and estimating repair costs by eye almost always comes in low.",
        ...src.emergencies,
      },
      {
        id: "on_s2_09",
        topic: "signals",
        question: "The light over an intersection is flashing amber. How do you handle it?",
        choices: [
          "Slow down and move through with care",
          "Stop completely, then go when it is clear",
          "Treat it as a red until it stops flashing",
          "Carry on at the posted speed - it applies to the side road",
        ],
        correctIndex: 0,
        explanation:
          "Flashing amber says the intersection is live but you are on the favoured road. You keep your priority and trade it for extra caution, because the cross street is facing a flashing red.",
        context:
          "Flashing signals come in a pair that tells you the shape of the intersection. Flashing amber means proceed with caution; the cross street facing flashing red must come to a complete stop and only move when it is safe. Knowing the pairing means a flashing amber also tells you the cross traffic is under a stop obligation, which is useful information but not a guarantee they will honour it.",
        trap:
          "Treating a flashing amber as a red is the over-cautious answer, and it creates a genuine hazard - stopping dead on the favoured road invites a rear-end collision from traffic that expects you to keep moving.",
        ...src.lights,
      },
      {
        id: "on_s2_10",
        topic: "safety",
        question:
          "You are on a dark rural road with your high beams on and a vehicle appears ahead. When must you switch to low beams?",
        choices: [
          "Only once you can make out the driver",
          "Before you come within 60 metres of it",
          "Before you come within 150 metres of it",
          "Only if the other driver flashes you first",
        ],
        correctIndex: 2,
        explanation:
          "Dipping at 150 metres gives the oncoming driver time to recover their night vision before you are alongside. Waiting until they complain is already too late for both of you.",
        context:
          "There are two dipping distances and they are different on purpose. Low beams go on within 150 metres of an oncoming vehicle, and within 60 metres of a vehicle you are following, since glare via the mirrors is less direct than glare through a windshield. On unlit country roads you also dip at curves and crests where an approaching car's lights would arrive before the car does.",
        trap:
          "60 metres is the strongest distractor because it is a real Ontario number - it just belongs to the following case, not the oncoming one.",
        ...src.night,
      },
      {
        id: "on_s2_11",
        topic: "signs",
        question: "A large white X-shaped sign stands at the roadside. What is just ahead?",
        choices: [
          "A school crossing",
          "A crossroads with no signals",
          "A pedestrian crossover",
          "A railway crossing",
        ],
        correctIndex: 3,
        explanation:
          "The X shape is used for nothing else, so it reads instantly even at speed. Seeing it means slowing, looking both ways along the track, and never trying to beat a gate that has started to drop.",
        context:
          "Railway crossings get their own dedicated sign shape because the consequences of missing one are unlike anything else on the road. If a train is coming you stop at least 5 metres from the nearest rail or gate, you never drive around a lowered gate, and you avoid changing gears while on the tracks. Parking near a crossing is separately restricted to no closer than 15 metres from the nearest rail.",
        trap:
          "Guessing a plain crossroads is understandable since an X reads as an intersection symbol - but Ontario reserves the shape for rail, and uses a cross-shaped yellow diamond for road intersections.",
        ...src.signs,
      },
      {
        id: "on_s2_12",
        topic: "rules",
        question:
          "A white line is painted across your lane at a stop sign. Where exactly do you stop?",
        choices: [
          "With your front wheels sitting on the line",
          "Before the line, with no part of the vehicle over it",
          "Past the line, where you can see the cross traffic",
          "Wherever you can see both ways - the line is advisory",
        ],
        correctIndex: 1,
        explanation:
          "The stop line is placed to keep your bumper out of the crosswalk and out of the turning path of vehicles on the cross street. If sightlines are poor you stop there first, then edge forward carefully.",
        context:
          "Ontario gives a stopping point priority order: the marked stop line if there is one, otherwise the crosswalk, otherwise the edge of the sidewalk, otherwise the edge of the intersection. The first stop is mandatory wherever that point falls. Only after stopping there may you creep forward for a better view, and that second movement is not a substitute for the first stop.",
        trap:
          "Stopping past the line 'where you can actually see' sounds like good defensive driving, but skipping the first stop is what gets ticketed - the correct sequence is stop, then edge.",
        ...src.stopping,
      },
      {
        id: "on_s2_13",
        topic: "signals",
        question:
          "A broken white line separates you from the lane beside you. What does it allow?",
        choices: [
          "Nothing - it marks the edge of the roadway",
          "Passing on the left only",
          "Changing lanes when it is safe to do so",
          "Stopping in the lane to let passengers out",
        ],
        correctIndex: 2,
        explanation:
          "Broken means the movement is available; solid means it is closed. The white tells you the lane beside you runs the same way as yours, so the change is a merge rather than a pass into oncoming traffic.",
        context:
          "White separates traffic moving in the same direction, and the pattern sets the permission: broken lets you cross when safe, solid discourages it. A lane change still needs the full routine regardless of the marking - mirrors, blind spot over the shoulder, signal, and one more check before you move. The line grants permission, it does not confirm the lane is empty.",
        trap:
          "Reading it as 'passing on the left only' imports a rule that belongs to yellow centre-line markings - white lines between same-direction lanes say nothing about which side you overtake on.",
        ...src.markings,
      },
      {
        id: "on_s2_14",
        topic: "impairment",
        question:
          "A fully licensed driver registers in the warn range, between 0.05 and 0.08, for the first time. What happens on the spot?",
        choices: [
          "A three-day licence suspension",
          "A seven-day licence suspension",
          "A 90-day licence suspension",
          "A warning with no suspension",
        ],
        correctIndex: 0,
        explanation:
          "The warn range sits below the criminal threshold but still triggers an immediate roadside suspension. A second occurrence stretches to seven days and adds a mandatory education requirement.",
        context:
          "Ontario escalates by reading and by repetition. Warn range of 0.05 to 0.08 brings a three-day suspension first time, seven days plus alcohol education second time, and steeper consequences after that. Over 0.08, or refusing to provide a sample, brings a 90-day administrative suspension and a seven-day vehicle impoundment on top of the criminal process. Novice drivers and anyone 21 or under are at zero, so the warn range never applies to them.",
        trap:
          "The 90-day answer is the one people reach for because it is the number they have heard - but that belongs to readings over 0.08, not to the warn range.",
        ...src.otherWays,
      },
      {
        id: "on_s2_15",
        topic: "signs",
        question:
          "A white sign shows a black arrow curving to the left inside a red circle with a slash across it. What is prohibited?",
        choices: [
          "Turning left at that location",
          "Passing on the left",
          "Entering the road at all",
          "Making a U-turn",
        ],
        correctIndex: 0,
        explanation:
          "The symbol inside the ring is the whole message, and here it is a left turn. Reading the pictogram rather than memorising the sign as a picture is what lets you handle ones you have never seen.",
        context:
          "Prohibition signs pair a red ring and stroke with a symbol describing the banned movement. A left-turn arrow bans a left turn; an arrow doubling back on itself bans a U-turn; a horizontal white bar in a solid red circle means do not enter at all. Because the grammar is fixed, you can decode an unfamiliar prohibition by identifying the symbol rather than recalling the whole sign.",
        trap:
          "The U-turn answer is the closest miss, since both signs use a curving arrow inside a red ring - a U-turn symbol doubles back on itself, while a left-turn symbol simply bends away.",
        ...src.signs,
      },
      {
        id: "on_s2_16",
        topic: "parking",
        question: "How close to an intersection may you legally park?",
        choices: [
          "No closer than 5 metres, or 9 metres at a signalised corner",
          "No closer than 9 metres in every case",
          "No closer than 9 metres, or 15 metres where traffic lights control it",
          "No closer than 15 metres in every case",
        ],
        correctIndex: 2,
        explanation:
          "Signalised corners need the extra clearance because drivers have to see the signal head and the crosswalk from further back. Two numbers here, and which one applies depends on whether lights are involved.",
        context:
          "Ontario's parking distances form a small table worth knowing as a set: 3 metres from a fire hydrant, 9 metres from an ordinary intersection, 15 metres from one controlled by traffic lights, and 15 metres from the nearest rail of a railway crossing. Alongside those you must not block sidewalks, crosswalks, driveways or public entrances, and you must never park where the view is under 125 metres in both directions.",
        commonlyMissed: true,
        trap:
          "Answering a flat 9 metres everywhere is the usual slip, because that is the number people remember - the signalised version is 15, and that is the one enforcement notices.",
        ...src.parking,
      },
      {
        id: "on_s2_17",
        topic: "sharing",
        question:
          "A streetcar ahead of you has stopped on a two-way street and its doors are open. What must you do?",
        choices: [
          "Pass on the left, giving the doors room",
          "Stop at least two metres behind the rear doors and wait",
          "Pass slowly on the right, since passengers step toward the curb",
          "Stop level with the rear doors and edge past",
        ],
        correctIndex: 1,
        explanation:
          "Passengers step straight into the lane you are driving in, so you hold back until the doors close. Streetcars are otherwise passed on the right, and the two-metre rule does not apply where a proper passenger island exists.",
        context:
          "On a two-way street you pass a streetcar on the right, since the tracks sit toward the centre of the road. When it stops to load or unload you stay at least two metres behind the rear doors until the doors close and the passengers are clear. Where the stop has a dedicated safety island for passengers, the two-metre rule does not apply, but you still pass at a reasonable speed.",
        commonlyMissed: true,
        trap:
          "Passing on the left looks like the obvious way around a vehicle sitting in the centre lane - on a two-way street that puts you into oncoming traffic, which is why Ontario reverses the usual instinct here.",
        ...src.positions,
      },
      {
        id: "on_s2_18",
        topic: "signs",
        question:
          "A yellow diamond carries a black arrow bending sharply to the right. What is coming up?",
        choices: [
          "A right lane that is about to end",
          "A right turn you are obliged to make",
          "A road merging in from the right",
          "A curve in the road to the right",
        ],
        correctIndex: 3,
        explanation:
          "Yellow puts it in the warning family, so it describes the road rather than ordering you around. The same arrow on a white regulatory sign would be an instruction instead.",
        context:
          "Decode a sign in two steps: family first from shape and colour, then detail from the symbol. Yellow diamond means a permanent road condition you should prepare for, so the arrow is describing the geometry ahead. Change the background to white and the same arrow becomes a rule; change it to orange and it becomes a temporary lane shift around work.",
        trap:
          "Reading it as an obligatory turn is the trap, and it comes from ignoring the colour - drivers who memorise symbols rather than families fall into this on every unfamiliar sign.",
        ...src.signs,
      },
      {
        id: "on_s2_19",
        topic: "speed",
        question:
          "You are caught doing 70 km/h in a posted 50 zone. How many demerit points does that carry?",
        choices: ["6", "4", "3", "2"],
        correctIndex: 2,
        explanation:
          "Speeding is banded rather than flat: 16 to 29 km/h over draws three points, 30 to 49 over draws four, and 50 or more over jumps to six. Twenty over lands in the first band.",
        context:
          "Demerit points for speeding step up in bands rather than rising smoothly, so the exact margin matters. Beyond the point bands sit the stunt driving thresholds, which trigger at 40 km/h or more over where the limit is under 80, and 50 km/h or more over where it is 80 or higher. Points stay on the record for two years from the date of the offence.",
        trap:
          "Four points is the near miss, and it is only wrong by a few km/h - the four-point band starts at 30 over, so 70 in a 50 sits just underneath it.",
        ...src.keeping,
      },
      {
        id: "on_s2_20",
        topic: "signals",
        question: "The light turns amber as you approach. What does the law expect?",
        choices: [
          "Stop, unless you are so close that stopping would be unsafe",
          "Speed up to clear the intersection",
          "Stop under all circumstances",
          "Carry on at your current speed - amber is only a courtesy warning",
        ],
        correctIndex: 0,
        explanation:
          "Amber means the red is coming, so the default answer is to stop. The only exception is being close enough that braking would put you into the intersection anyway or invite a rear-end hit.",
        context:
          "A steady amber is an instruction to stop, with a narrow allowance for drivers already too close to do so safely. It is not a bonus few seconds of green. This is also why following distance matters at signals: the closer you sit to the vehicle ahead, the less room you have to make the stop decision cleanly when the light changes.",
        trap:
          "'Stop under all circumstances' is the answer that sounds most law-abiding, but slamming on the brakes when you are already inside the intersection is both unsafe and not what the rule asks for.",
        ...src.lights,
      },
      {
        id: "on_s2_21",
        topic: "safety",
        question: "You drive into thick fog at night. Which lights actually help?",
        choices: [
          "Parking lights on their own",
          "High beams",
          "Hazard flashers while still moving",
          "Low beams",
        ],
        correctIndex: 3,
        explanation:
          "High beams bounce off the water droplets and throw the glare straight back at you, so you see less rather than more. Low beams sit under most of that and light the road surface instead.",
        context:
          "Fog inverts the usual instinct that more light is better. Low beams aim under the densest part of the fog and reduce the glare reflected back at you. The wider principle behind bad-weather driving is not to overdrive your headlights - if your stopping distance is longer than the distance you can see, you are going too fast no matter what the posted limit says.",
        trap:
          "High beams are the instinctive grab in poor visibility, and they make things measurably worse - the light reflects off the droplets and builds a white wall in front of you.",
        ...src.night,
      },
      {
        id: "on_s2_22",
        topic: "signs",
        question:
          "A rectangular sign reads ONE WAY beside a black arrow. What is it telling you?",
        choices: [
          "The lane the arrow points to is a turning lane",
          "All traffic on that road travels in the arrow's direction",
          "You are required to turn in the direction of the arrow",
          "Oncoming traffic has priority over you",
        ],
        correctIndex: 1,
        explanation:
          "It describes the street, not your next move. That matters most when you are turning onto it, because it tells you which way you may legally enter.",
        context:
          "One-way signing is regulatory, and it governs the road rather than your vehicle. It matters in two situations: choosing which way to turn onto that street, and understanding when a left turn on a red light is permitted, which Ontario allows only from a one-way road onto another one-way road after a complete stop. A red circle with a white horizontal bar marks the wrong end of the same road.",
        trap:
          "Reading it as an order to turn is the common misread - the sign is describing the street's traffic flow, and you can still carry straight past it.",
        ...src.signs,
      },
      {
        id: "on_s2_23",
        topic: "rules",
        question: "Before making a U-turn, how far must you be able to see in both directions?",
        choices: ["At least 100 metres", "At least 150 metres", "At least 60 metres", "At least 200 metres"],
        correctIndex: 1,
        explanation:
          "A U-turn takes a long time and leaves you broadside across the road, so the sightline requirement is generous. U-turns stay off the table entirely on curves, hilltops, railway crossings and near bridges or tunnels.",
        context:
          "The visibility requirement exists because a U-turn puts your vehicle across both directions of traffic for several seconds. Beyond the sightline, U-turns are prohibited outright on curves, at railway crossings, near the crest of a hill, and close to bridges or tunnels where the view is blocked. A three-point turn on a narrow road carries the same restrictions.",
        trap:
          "100 metres is the strongest distractor because it sounds like a sensible round figure - but 150 is also the headlight-dipping distance, which makes it easier to remember as Ontario's standard 'long sightline' number.",
        ...src.directions,
      },
      {
        id: "on_s2_24",
        topic: "licensing",
        question: "How long do demerit points sit on your driving record?",
        choices: [
          "Until you next renew your licence",
          "One year from the date of conviction",
          "Three years from the date of the offence",
          "Two years from the date of the offence",
        ],
        correctIndex: 3,
        explanation:
          "They run from when the offence happened, not from when the case was resolved, and they fall off after two years. The conviction itself stays on the record longer than the points do.",
        context:
          "Points accumulate against thresholds that differ by licence class. A novice driver gets a warning letter at 2 points, a second at 6, and a 60-day suspension at 9, after which the total is reset to 4. A fully licensed driver is warned at 6, warned again at 9, and suspended 30 days at 15, resetting to 7. Because points expire two years from the offence date, a clean stretch clears the record on its own.",
        trap:
          "Counting from the conviction date rather than the offence date is the natural assumption, and it quietly overstates how long the points last, since court dates often fall months after the stop.",
        ...src.keeping,
      },
      {
        id: "on_s2_25",
        topic: "signals",
        question:
          "You are in an HOV lane and want to move back into the regular lanes, but a solid white line runs alongside you. What is allowed?",
        choices: [
          "Wait for the broken line and diamond markings before moving over",
          "Cross the solid line whenever a gap appears",
          "Cross the solid line as long as you signal first",
          "Stay in the HOV lane until the next exit ramp",
        ],
        correctIndex: 0,
        explanation:
          "The solid line is a barrier, and designated openings appear every couple of kilometres. Cutting across it is treated as an offence in its own right, complete with demerit points.",
        commonlyMissed: true,
        context:
          "HOV lanes on 400-series highways are separated from general traffic by a striped buffer that may not be crossed. Entry and exit happen only at designated openings, marked by broken white lines and diamond pavement markings, typically every two to four kilometres. Planning the exit ahead of time is part of using the lane, because there is no legal improvised way out of it.",
        trap:
          "Believing a signal makes the crossing legal is the most common misconception - signalling communicates intent, but it does not turn a prohibited movement into a permitted one.",
        ...src.hov,
      },
      {
        id: "on_s2_26",
        topic: "emergencies",
        question:
          "Ontario's slow down and move over rule covers stopped vehicles with flashing lights. Which ones?",
        choices: [
          "Any vehicle running its hazard lights",
          "Police and ambulance only",
          "Police, fire, ambulance and tow trucks",
          "Police, fire and ambulance, but not tow trucks",
        ],
        correctIndex: 2,
        explanation:
          "Tow operators work in live traffic as often as emergency crews do, which is why they were folded in. Where there are two or more lanes going your way, you slow and also move over if it is safe.",
        commonlyMissed: true,
        context:
          "Two separate rules govern emergency vehicles. One covers vehicles approaching you with lights and siren: pull to the right edge and stop. The other covers vehicles already stopped ahead of you with lights flashing - police, fire, ambulance and tow trucks - and requires you to slow down and, on a road with two or more lanes in your direction, move over a lane where it is safe. Failing to respond properly to an emergency vehicle brings a fine and three demerit points on a first offence.",
        trap:
          "Excluding tow trucks is the answer most drivers give, and it is exactly the gap the law was amended to close - roadside tow operators are among the most frequently struck workers on Ontario highways.",
        ...src.situations,
      },
      {
        id: "on_s2_27",
        topic: "signs",
        question:
          "Which description fits a regulatory sign - the kind that sets out a law you must follow?",
        choices: [
          "Five-sided with a fluorescent yellow-green background",
          "Diamond-shaped with a yellow background",
          "Rectangular with a green background",
          "Rectangular or square, usually white with black lettering or symbols",
        ],
        correctIndex: 3,
        explanation:
          "The plain white-and-black rectangle is the workhorse of enforceable signs. The other shapes and colours in the list warn, direct or highlight, but none of them create the rule itself.",
        context:
          "Ontario's sign families map cleanly onto jobs. Regulatory signs are rectangular or square, white or black, and carry the law. Warning signs are yellow diamonds. Temporary condition signs are orange diamonds. Information and direction signs are green or blue rectangles. School and pedestrian warnings use a five-sided fluorescent yellow-green shape. Stop and yield get unique shapes so they cannot be mistaken for anything else.",
        trap:
          "The yellow diamond is the strongest distractor because warning signs feel authoritative - but they describe a condition, and only the regulatory family creates an enforceable obligation.",
        ...src.signs,
      },
      {
        id: "on_s2_28",
        topic: "safety",
        question:
          "When may a child stop using a booster seat and rely on the seat belt alone?",
        choices: [
          "Once they turn 6, whatever their size",
          "Once they turn 8, reach 36 kg, or stand 145 cm tall",
          "Only once they are 8 and 36 kg and 145 cm all at the same time",
          "Once they can sit with their back flat against the seat",
        ],
        correctIndex: 1,
        explanation:
          "Any one of the three thresholds releases the requirement, because each is a rough proxy for the belt sitting on bone rather than soft tissue. Height is usually the one that matters most in practice.",
        context:
          "Ontario's child restraint rules step up by size. Infants under 9 kg go rear-facing. Toddlers from 9 to 18 kg use a forward-facing seat with the tether strap attached. Booster seats cover children under 8 who weigh 18 to 36 kg and are under 145 cm. The requirement lifts once any one of the three thresholds is met, and the driver is responsible for every passenger under 16 being properly secured.",
        trap:
          "Requiring all three thresholds at once is the seductive misread, because it sounds like the more careful interpretation - the rule is met by any one of them.",
        ...src.ready,
      },
      {
        id: "on_s2_29",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light with no arrow showing. Who goes first?",
        choices: [
          "You, once you have edged out into the intersection",
          "You, because you reached the light first",
          "Oncoming traffic, and any pedestrian crossing your path",
          "Whichever driver signals first",
        ],
        correctIndex: 2,
        explanation:
          "A plain green gives you permission to enter, not permission to cut across. Everything coming toward you and everyone walking through the crosswalk you are turning into clears before you move.",
        context:
          "An unprotected left turn on a green means waiting for oncoming traffic to clear and for pedestrians in or approaching your path to finish crossing. While you wait, keep the front wheels pointed straight ahead, so that a hit from behind does not push you into oncoming traffic. A green arrow or a flashing green is what converts the same turn into a protected one.",
        trap:
          "'Once you have edged out' captures how most drivers behave at a busy intersection, but position in the intersection confers no priority - the yielding obligation lasts until the gap is genuinely there.",
        ...src.intersections,
      },
      {
        id: "on_s2_30",
        topic: "rules",
        question:
          "How close to a pedestrian crossover may you overtake another vehicle?",
        choices: [
          "No passing within 30 metres of it",
          "No passing within 15 metres of it",
          "Passing is fine as long as nobody is crossing",
          "No passing within 60 metres of it",
        ],
        correctIndex: 0,
        explanation:
          "The ban exists because the vehicle you are passing may be stopped for someone you cannot see. Thirty metres keeps you from arriving in the crossing at speed with a blocked view.",
        context:
          "Ontario closes off passing wherever the manoeuvre would put you somewhere with no view and no escape: within 30 metres of a pedestrian crossover, within 30 metres of a bridge, viaduct or tunnel when crossing the centre line, approaching the crest of a hill or a blind curve, and in or near intersections. Snow plows are never to be passed while working.",
        trap:
          "'Fine as long as nobody is crossing' is the most tempting option and misses the whole point - the reason for the ban is precisely that you cannot see whether anyone is crossing.",
        ...src.stopping,
      },
    ],
  },

  {
    id: "set-3",
    setNumber: 3,
    title: "Set 3 - Full G1 shape",
    difficulty: "medium",
    description:
      "Forty questions in the shape of the real thing: roughly half signs and signals, half rules, with exact numbers and two-step scenarios.",
    questions: [
      {
        id: "on_s3_01",
        topic: "signals",
        question:
          "A flashing green and a green left-turn arrow both mean oncoming traffic is stopped. What is the difference in what you may do?",
        choices: [
          "The flashing green also lets you go straight or turn right; the arrow only permits the direction it points",
          "The flashing green is advisory and the arrow is mandatory",
          "The flashing green means yield to oncoming traffic; the arrow means it is being held",
          "There is no difference - both are advance greens",
        ],
        correctIndex: 0,
        explanation:
          "Both give you a protected window, but the flashing green covers every movement from the correct lane while the arrow covers only its own direction. Drivers new to Ontario often read the flashing green as a fault in the signal.",
        commonlyMissed: true,
        context:
          "Ontario's advance phase can be displayed two ways. A flashing green tells you oncoming traffic is at a red and lets you turn left, go straight or turn right from the appropriate lane. A green arrow protects only the direction it points. Pedestrians facing either display are not permitted to start crossing, which is part of what makes the movement protected in the first place.",
        trap:
          "Answering 'no difference' is the most attractive option because both really are advance greens - the distinction is the range of movements each one authorises.",
        ...src.lights,
      },
      {
        id: "on_s3_02",
        topic: "speed",
        question:
          "On a road posted at 60 km/h, at what speed does the offence cross into stunt driving territory?",
        choices: [
          "90 km/h - 30 km/h or more over any limit",
          "110 km/h - 50 km/h or more over any limit",
          "100 km/h - 40 km/h or more over a limit below 80",
          "120 km/h - double the posted limit",
        ],
        correctIndex: 2,
        explanation:
          "The threshold is tighter on slower roads, because 40 over in a 60 zone is far more dangerous than 40 over on a freeway. Where the limit is 80 or higher, the trigger moves up to 50 km/h over.",
        context:
          "Stunt driving and street racing sit above the ordinary speeding bands and carry their own consequences: an immediate roadside licence suspension, vehicle impoundment, and six demerit points on conviction. The speed triggers are 40 km/h or more over where the posted limit is under 80, and 50 km/h or more over where the limit is 80 or higher. Racing another vehicle qualifies regardless of the speeds involved.",
        trap:
          "The 50-over answer is right for freeways and wrong here - people remember the single larger number and miss that the threshold tightens on slower roads.",
        ...src.otherWays,
      },
      {
        id: "on_s3_03",
        topic: "signs",
        question:
          "A yellow diamond carries the outline of a red eight-sided sign. What is it telling you?",
        choices: [
          "The stop sign ahead has been removed",
          "A stop sign is coming up, possibly hidden from view",
          "You must stop at this sign itself",
          "Stop only if a vehicle is on the cross road",
        ],
        correctIndex: 1,
        explanation:
          "The diamond puts it in the warning family, so it is describing what is ahead rather than demanding anything here. These go up where a crest, a bend or foliage hides the actual stop sign until late.",
        context:
          "Warning signs that reproduce another sign inside a yellow diamond are advance notice, not the rule itself. The same pattern appears for signal lights ahead and yield ahead. Recognising the family from the diamond shape means you know to prepare rather than act, and the enforceable requirement arrives at the actual stop sign a few hundred metres later.",
        trap:
          "Stopping at the warning sign itself is the over-correction, and it puts you stationary in a spot where following traffic has no reason to expect it.",
        ...src.signs,
      },
      {
        id: "on_s3_04",
        topic: "rightOfWay",
        question:
          "You are approaching a roundabout. Which traffic matters most, and who gives way?",
        choices: [
          "Nobody yields; traffic alternates one vehicle at a time",
          "Vehicles waiting to enter on your right - they yield to you",
          "Vehicles entering from the far side - both of you yield",
          "Vehicles already circulating, especially those on your left - you yield to them",
        ],
        correctIndex: 3,
        explanation:
          "Traffic in the circle keeps moving and everyone entering fits around it. Since you travel counter-clockwise, the vehicles that will reach your entry point next are coming from your left.",
        context:
          "Ontario roundabouts run counter-clockwise, keeping to the right of the central island, and traffic already circulating has the right of way. On approach you slow, look left for a gap, and stop at the yield sign if one is not there. Lane choice matters too: the left lane serves left turns and straight through, the right lane serves right turns and straight through, and you signal right once you pass the exit before your own.",
        trap:
          "Applying the usual yield-to-the-right instinct backwards is the classic roundabout error - the vehicle on your right is behind you in the circulation order and is not the one you have to fit behind.",
        ...src.directions,
      },
      {
        id: "on_s3_05",
        topic: "signals",
        question:
          "The line at the left edge of your lane is a solid yellow. What does that rule out?",
        choices: [
          "Driving in that lane after dark",
          "Turning left into a driveway",
          "Crossing it to pass, because the pass is not considered safe there",
          "Stopping along the shoulder",
        ],
        correctIndex: 2,
        explanation:
          "Solid on your side of the centre means the sightlines will not support an overtake. It is about the pass specifically, not about every movement across the line.",
        context:
          "The line on your own side of the centre governs your permission. Solid means passing is closed to you; broken means it is open when the road ahead is clear. On a road where one side is solid and the other broken, only the direction facing the broken line may overtake. Two solid lines close passing to both directions.",
        trap:
          "Assuming a solid yellow bans every crossing is the over-read - the rule targets overtaking, and separate rules govern turns across the centre line.",
        ...src.markings,
      },
      {
        id: "on_s3_06",
        topic: "licensing",
        question: "Under what condition may a G1 driver use Highway 401?",
        choices: [
          "Only when the accompanying driver is a licensed driving instructor",
          "Never, under any circumstances",
          "Any time, provided a qualified G driver is in the front passenger seat",
          "Only between 5 a.m. and midnight, with any qualified G driver",
        ],
        correctIndex: 0,
        explanation:
          "High-speed freeways are closed to G1 drivers except with a licensed instructor beside them. A parent or friend who meets the ordinary accompanying-driver rules is not enough for those roads.",
        commonlyMissed: true,
        context:
          "G1 drivers are barred from 400-series highways with posted speeds over 80 km/h and from named expressways including the QEW, Don Valley Parkway, Gardiner Expressway, E.C. Row Expressway and Conestoga Parkway. The single exception is when the accompanying driver is a licensed driving instructor. All the other G1 restrictions - zero alcohol, seat belts for everyone, no driving midnight to 5 a.m. - continue to apply on those roads too.",
        trap:
          "'Never, under any circumstances' feels like the safe answer and is what many learners are told - the instructor exception is real, and it is how most G1 drivers get freeway practice before the G2 test.",
        ...src.licence,
      },
      {
        id: "on_s3_07",
        topic: "signs",
        question:
          "A red circle with a broad white horizontal bar across the middle faces you at a ramp. What does it mean?",
        choices: [
          "No parking anywhere beyond this point",
          "The road ahead is closed for construction",
          "Stop and yield to traffic already on the ramp",
          "Do not enter - you are looking at the wrong end of a one-way road or ramp",
        ],
        correctIndex: 3,
        explanation:
          "This one is deliberately wordless so it works at any speed and in any language. Seeing it means the traffic beyond is coming at you, and the correct response is to stop and back out of the situation.",
        context:
          "Do-not-enter signing marks the wrong end of a one-way road or an exit ramp, and it exists to catch a mistake before it becomes a head-on collision. It belongs to the regulatory family, so it is a legal prohibition rather than a warning. Its counterpart is the ONE WAY sign at the correct end of the same street, telling you which direction you may enter from.",
        trap:
          "Reading it as a construction closure is the most plausible miss, since both block your route - but closures are signed in orange, and this is a permanent regulatory prohibition.",
        ...src.signs,
      },
      {
        id: "on_s3_08",
        topic: "rules",
        question:
          "A train is approaching a level crossing ahead of you. How far back must you stop?",
        choices: [
          "At least 3 metres from the nearest rail",
          "At least 5 metres from the nearest rail or gate",
          "At least 10 metres from the nearest rail",
          "At least 15 metres from the nearest rail",
        ],
        correctIndex: 1,
        explanation:
          "Trains overhang their rails by a fair margin and a gate needs room to swing down. Five metres keeps your bumper outside both, and driving around a lowered gate is never an option.",
        context:
          "At every level crossing you slow and look both ways along the track before crossing. If a train is coming you stop at least 5 metres from the nearest rail or gate. Never drive around lowered gates, avoid shifting gears while on the tracks, and if your vehicle ever stalls on a crossing, get everyone out and away from the tracks before calling for help. Parking near a crossing has its own larger clearance of 15 metres.",
        trap:
          "15 metres is the tempting wrong answer because that number genuinely applies at railway crossings - it is the parking clearance, not the stopping distance.",
        ...src.stopping,
      },
      {
        id: "on_s3_09",
        topic: "signals",
        question:
          "Two white lines are painted across the road at an intersection, parallel to each other. What are they marking?",
        choices: [
          "A spot where brief parking is permitted",
          "A crosswalk, which you have to keep clear when stopped",
          "The boundary of a school zone",
          "A lane reserved for buses",
        ],
        correctIndex: 1,
        explanation:
          "Those parallel lines define where people on foot are entitled to be. Stopping with your vehicle inside them pushes pedestrians out around your bumper into moving traffic.",
        context:
          "Markings across a road, rather than along it, define where you stop and where people cross. A single transverse white line is the stop line; a pair of parallel lines is a crosswalk. Where both exist, the stop line sits behind the crosswalk precisely so that a stopped vehicle never occupies the crossing. Blocking a crosswalk is also a parking offence when the vehicle is left there.",
        trap:
          "Guessing a bus lane is understandable since those are also white-marked - but bus and bike lanes are marked along the direction of travel, never across it.",
        ...src.markings,
      },
      {
        id: "on_s3_10",
        topic: "safety",
        question: "Your vehicle begins to skid on a slick patch. What is the right sequence?",
        choices: [
          "Accelerate to pull the vehicle straight",
          "Brake hard and hold the wheel straight",
          "Steer sharply the opposite way to the skid",
          "Ease off whichever pedal you are using and keep steering where you want to go",
        ],
        correctIndex: 3,
        explanation:
          "A skid is the tires being asked for more grip than exists, so you give some demand back before anything else. Keep your eyes and the wheel pointed at your escape route, and resist the urge to overcorrect.",
        context:
          "Skid recovery has two halves: reduce what you are asking of the tires, then steer where you want to end up rather than where the car is currently pointing. Overcorrecting is what turns one skid into a second one in the opposite direction. Prevention matters more than recovery - keep cruise control off in snow and rain, and treat black-looking, glossy asphalt in freezing weather as ice.",
        trap:
          "Braking hard is the reflex and it is the single worst thing to do, because locked or overloaded tires have no grip left to steer with.",
        ...src.night,
      },
      {
        id: "on_s3_11",
        topic: "signs",
        question:
          "Ontario uses a fluorescent yellow-green background on some signs instead of the usual yellow. Why?",
        choices: [
          "To make signs about pedestrians and school areas stand out from ordinary warnings",
          "To mark construction zones where fines are doubled",
          "To identify provincial highway routes",
          "To show that the sign only applies at night",
        ],
        correctIndex: 0,
        explanation:
          "Ordinary yellow disappears against autumn leaves and street clutter. The brighter shade is used where the hazard is a person rather than a piece of road geometry.",
        context:
          "The colour split within the warning family is deliberate: standard yellow for road conditions such as curves, merges and dips, and fluorescent yellow-green on a five-sided shape for school areas, school crossings and pedestrian crossings. The distinction is useful because the response differs - geometry warnings mean adjust speed and line, people warnings mean move your eyes to the roadside and between parked vehicles.",
        trap:
          "Construction is the strongest pull because both colours are attention-grabbing - work zones are orange, and mixing the two means missing the cue that people, not pavement, are the hazard.",
        ...src.signs,
      },
      {
        id: "on_s3_12",
        topic: "sharing",
        question:
          "A school bus has stopped on the far side of a four-lane road with no median, red lights flashing. You are travelling toward it. What do you do?",
        choices: [
          "Slow to 20 km/h and pass with care",
          "Keep going, since you are in the oncoming lanes",
          "Stop and wait - with no median the road is not divided, so both directions stop",
          "Stop only if the stop arm is pointed toward your side",
        ],
        correctIndex: 2,
        explanation:
          "The test is whether a physical barrier separates the directions, not how many lanes there are. A painted centre line does not stop a child from walking straight into your lane, so you stop.",
        commonlyMissed: true,
        context:
          "Flashing reds and an extended stop arm stop traffic in both directions unless the road is divided by a physical median. Lane count is irrelevant - a four-lane undivided road still requires oncoming traffic to stop. Traffic behind the bus stops at least 20 metres back in every case, and nobody moves until the reds go out and the arm folds in. The offence carries six demerit points.",
        trap:
          "'Keep going, you are oncoming' is the answer that misapplies the divided-highway exception - the exception depends on a median existing, not on which side of the road you are on.",
        ...src.sharing,
      },
      {
        id: "on_s3_13",
        topic: "speed",
        question: "Which of these offences carries 4 demerit points?",
        choices: [
          "Failing to stop for a school bus",
          "Using a hand-held phone while driving",
          "Driving without a seatbelt",
          "Following too closely",
        ],
        correctIndex: 3,
        explanation:
          "Tailgating sits at four points, which surprises people who treat it as a minor habit. The phone is three, the seatbelt is two, and failing to stop for a school bus is six.",
        context:
          "Ontario's demerit schedule reflects collision risk rather than how annoying an offence feels. Seven points cover failing to remain at a collision and failing to stop for police. Six cover careless driving, racing, failing to stop for a school bus and the highest speed band. Four cover following too closely, speeding 30 to 49 over, and failing to stop at a pedestrian crossover. Three cover distracted driving and speeding 16 to 29 over.",
        trap:
          "Failing to stop for a school bus is the answer people pick because it sounds the most serious - and it is, at six points, which puts it in a heavier band than four.",
        ...src.keeping,
      },
      {
        id: "on_s3_14",
        topic: "signs",
        question:
          "A white rectangular sign reads MAXIMUM 80. Freezing rain is falling. What does that number mean now?",
        choices: [
          "The speed you should hold unless traffic prevents it",
          "A ceiling for ideal conditions - you are expected to drive slower when conditions are poor",
          "A limit that applies only on dry pavement, with no limit otherwise",
          "A figure that becomes a minimum once traffic is heavy",
        ],
        correctIndex: 1,
        explanation:
          "A posted limit is the fastest you may ever go there, calculated for a good day. Driving too fast for the conditions is its own offence even when the speedometer reads under the sign.",
        context:
          "Posted limits are maximums set for good conditions, and drivers are separately required to travel at a speed that allows a safe stop. In freezing rain, fog or snow the safe speed can be far below the sign. The related idea for night driving is not overdriving your headlights: if you cannot stop within the distance your lights illuminate, you are going too fast regardless of the posted number.",
        trap:
          "Reading it as a target speed is the everyday habit that trips people up on the test - a limit describes a ceiling, never an expectation.",
        ...src.along,
      },
      {
        id: "on_s3_15",
        topic: "parking",
        question:
          "How far from the nearest rail of a level railway crossing must you stay when parking?",
        choices: ["5 metres", "9 metres", "15 metres", "3 metres"],
        correctIndex: 2,
        explanation:
          "Parking clearance at a crossing is much larger than the five metres you stop at for an approaching train, because a parked vehicle blocks the sightline down the track for everyone behind it.",
        context:
          "The parking clearances worth memorising as a set are 3 metres from a hydrant, 9 metres from an intersection, 15 metres from a signalised intersection, and 15 metres from the nearest rail of a railway crossing. Separately, never park where a driver cannot see for 125 metres in both directions, and never block a sidewalk, crosswalk, driveway or public entrance.",
        trap:
          "5 metres is the tempting answer because it is the crossing number people know - but that is where you stop for an approaching train, and the parking clearance is three times larger.",
        ...src.parking,
      },
      {
        id: "on_s3_16",
        topic: "signals",
        question:
          "The line to the left of your lane is a broken yellow. What does that permit?",
        choices: [
          "Passing, when the road ahead is clear and you have room to get back in",
          "Passing at any time, since the line is broken",
          "Using the oncoming lane to wait for a left turn",
          "Nothing - broken yellow simply marks the road edge",
        ],
        correctIndex: 0,
        explanation:
          "Broken yellow means the sightlines allow an overtake, not that one is a good idea right now. The judgement about oncoming traffic and the return gap is still entirely yours.",
        context:
          "A broken line grants permission; it never certifies safety. Even where the marking allows a pass, separate prohibitions still apply within 30 metres of a pedestrian crossover, near bridges and tunnels, approaching a blind crest or curve, and in or near intersections. The whole overtake, including the return to your own lane, has to fit in the gap you can actually see.",
        trap:
          "'Any time, since the line is broken' is the trap, and it treats a permission as a guarantee - the marking says the geometry allows it, not that the road ahead is empty.",
        ...src.markings,
      },
      {
        id: "on_s3_17",
        topic: "emergencies",
        question:
          "You have a minor collision with no injuries and both vehicles still drive. What comes first?",
        choices: [
          "Move the vehicles off the travelled portion of the road, then exchange information and contact police",
          "Leave everything exactly where it came to rest until police arrive",
          "Exchange information and drive away without contacting anyone",
          "Call your insurer and wait in your vehicle where it stopped",
        ],
        correctIndex: 0,
        explanation:
          "A drivable car sitting in a live lane invites a second, worse collision. Clear the roadway first, then handle information, photographs and the report from somewhere safe.",
        context:
          "Where nobody is hurt and the vehicles are drivable, the order is clear the road, then contact police, exchange information with the other driver, collect witness details, photograph the scene if it is safe, and notify your insurer. Reporting to police is required when anyone is injured or damage looks like more than the dollar threshold. Leaving the scene without doing any of this is a seven-point offence.",
        trap:
          "Leaving the vehicles untouched is what television teaches and what a lot of drivers believe - preserving the scene matters far less than not being struck while standing in a live lane.",
        ...src.emergencies,
      },
      {
        id: "on_s3_18",
        topic: "signals",
        question: "An intersection is fitted with a transit priority signal. What does it change for you?",
        choices: [
          "It affects streetcars only, not buses",
          "Buses have to yield to through traffic",
          "Transit vehicles get their own phase, and other traffic and pedestrians give way to them",
          "It replaces the traffic light and turns the junction into a four-way stop",
        ],
        correctIndex: 2,
        explanation:
          "These signals let a bus or streetcar move before everyone else, which keeps a whole vehicle full of people on schedule. The catch is that the transit vehicle may pull out while your own light still looks normal.",
        commonlyMissed: true,
        context:
          "Transit priority signals override the ordinary signal display and give public transit vehicles their own movement through an intersection. Both drivers and pedestrians must yield to a transit vehicle operating on that phase. They appear where transit shares road space with general traffic, so the practical habit is to check for a moving bus or streetcar before assuming your own green means the intersection is yours.",
        trap:
          "Assuming buses yield to through traffic is the everyday expectation and exactly backwards here - the whole point of the signal is to reverse the usual priority.",
        ...src.lights,
      },
      {
        id: "on_s3_19",
        topic: "rules",
        question:
          "You are in an acceleration lane joining a freeway. What are you trying to achieve before you merge?",
        choices: [
          "Entering slowly so you have time to react to traffic",
          "Matching the speed of the traffic already on the freeway",
          "Stopping at the end of the ramp and waiting for a gap",
          "Entering faster than traffic so you can get across to the left",
        ],
        correctIndex: 1,
        explanation:
          "A merge works when the speed difference is close to zero, because then a modest gap is enough. Arriving slow forces everyone behind you to brake and turns an easy join into a hazard.",
        context:
          "A freeway entrance has two parts: the ramp, where you check mirrors and blind spots and pick your gap, and the acceleration lane, where you build to the speed of the traffic you are joining. Drivers already on the freeway are expected to move over where it is safe to leave room. Exits reverse the process - signal, move into the deceleration lane at speed, and shed the speed there rather than in the through lane.",
        trap:
          "Entering slowly sounds cautious and is the instinct of most new drivers, but a large speed difference is exactly what makes a merge dangerous for everyone behind you.",
        ...src.freeway,
      },
      {
        id: "on_s3_20",
        topic: "signs",
        question:
          "An orange sign routes you off your usual road around a closed section. What family does it belong to?",
        choices: [
          "Direction signs",
          "Regulatory signs",
          "Permanent warning signs",
          "Temporary condition signs",
        ],
        correctIndex: 3,
        explanation:
          "Orange always signals something added to the road for now: work, a closure, a shifted lane. It overrides what the permanent signs and your navigation app are telling you.",
        context:
          "Temporary condition signs are orange and cover construction, maintenance, detours, closed lanes and survey work. They take precedence over the permanent signing and markings around them for as long as the work lasts. Separately, speeding fines double in designated construction zones when workers are present, so an orange sign is often the cue that penalties have gone up as well.",
        trap:
          "Calling it a direction sign is the natural mistake because a detour does direct you - the family is set by colour, and orange means the arrangement is temporary.",
        ...src.signs,
      },
      {
        id: "on_s3_21",
        topic: "impairment",
        question:
          "A driver registers over 0.08 at the roadside. What happens to the licence immediately?",
        choices: [
          "A 3-day suspension, as with a first occurrence",
          "A 30-day suspension pending a court date",
          "A 90-day administrative suspension, with the vehicle impounded for 7 days",
          "Nothing until a court convicts them",
        ],
        correctIndex: 2,
        explanation:
          "The administrative suspension runs independently of the criminal case and starts at the roadside. Refusing to provide a sample is treated the same way.",
        context:
          "Ontario's alcohol consequences run in tiers. The warn range of 0.05 to 0.08 brings a three-day roadside suspension first time and seven days plus education second time. Over 0.08 or a refusal brings a 90-day administrative suspension and a seven-day impoundment, on top of whatever the criminal court later does. Drivers 21 and under and all novice drivers are at zero, so any reading at all triggers a 24-hour roadside suspension for them.",
        trap:
          "'Nothing until a court convicts them' misses the whole design of the system - the administrative suspension is deliberately immediate and does not wait for the criminal process.",
        ...src.otherWays,
      },
      {
        id: "on_s3_22",
        topic: "signals",
        question:
          "You have a green and are turning right. The pedestrian signal across your path shows a steady orange hand, but someone is still in the crosswalk finishing their crossing. What now?",
        choices: [
          "Wait - a pedestrian already in the crossing keeps the right of way",
          "Proceed, because the hand signal has ended their right to be there",
          "Sound your horn to move them along",
          "Turn behind them once they pass the centre of your lane",
        ],
        correctIndex: 0,
        explanation:
          "The hand stops new pedestrians from setting off; it does not evict anyone already in the road. Their protection lasts until they reach the far side.",
        context:
          "The hand symbol, flashing or steady, tells pedestrians not to begin crossing, while anyone already in the roadway retains the right of way and should move promptly to safety. A green light gives a turning driver permission to enter the intersection, never permission to cut across a person already in the crosswalk. The same waiting duty applies when turning left across a crossing on the far side.",
        trap:
          "Turning behind them once they clear your lane is the everyday habit and the wrong answer - the crossing pedestrian's priority runs until they are off the roadway.",
        ...src.pedSignals,
      },
      {
        id: "on_s3_23",
        topic: "safety",
        question:
          "On a cold day the asphalt ahead looks black and glossy rather than the usual dull grey. What should you assume?",
        choices: [
          "An oil spill, so steer sharply around it",
          "Fresh pavement, so carry on normally",
          "Standing water, so brake firmly to clear the tires",
          "Black ice, so ease off the accelerator without braking hard or using cruise control",
        ],
        correctIndex: 3,
        explanation:
          "Winter asphalt normally looks pale and dry, so a wet-looking shine when it is below freezing is the giveaway. Cruise control is particularly dangerous there because it will add power the moment a wheel slips.",
        context:
          "Black ice is a thin transparent layer that takes on the colour of the road beneath it, so the visual cue is the change from dull grey to glossy black. The response is to reduce speed gently, avoid hard braking and steering inputs, and keep cruise control switched off in any winter or wet conditions. Bridges and shaded stretches freeze first because they lose heat from underneath as well as above.",
        trap:
          "Braking firmly for what looks like standing water is the reflex that turns a survivable patch into a skid - on ice, hard braking is precisely what removes your remaining control.",
        ...src.night,
      },
      {
        id: "on_s3_24",
        topic: "licensing",
        question:
          "At how many demerit points does a novice driver face suspension, compared with a fully licensed driver?",
        choices: [
          "15 for both",
          "9 for a novice, 15 for a fully licensed driver",
          "6 for a novice, 9 for a fully licensed driver",
          "9 for both",
        ],
        correctIndex: 1,
        explanation:
          "Novice drivers are held to a much shorter leash, and warning letters arrive far earlier too. The suspension runs 60 days for a novice against 30 days for a fully licensed driver.",
        commonlyMissed: true,
        context:
          "Two parallel ladders run at once. A novice gets a warning letter at 2 points, a second at 6, and a 60-day suspension at 9, after which the balance resets to 4. A fully licensed driver is warned at 6, warned again at 9, and suspended for 30 days at 15, resetting to 7. Points expire two years from the offence date, so the ladders reset themselves over time as well.",
        trap:
          "6 and 9 is the strongest distractor because both numbers are real - they are the warning-letter thresholds, not the suspension thresholds.",
        ...src.keeping,
      },
      {
        id: "on_s3_25",
        topic: "signs",
        question:
          "A yellow diamond shows an arrow that snakes left and then right. What is ahead?",
        choices: [
          "A single sharp bend",
          "A run of curves - a winding stretch of road",
          "A road that splits into two",
          "A lane shifting around an obstacle",
        ],
        correctIndex: 1,
        explanation:
          "Multiple bends in the symbol mean multiple bends in the road, so the sensible response is to settle on a speed you can hold through all of them. A single-bend sign uses one arrow.",
        context:
          "Warning symbols are literal representations of the road ahead, which is why counting the bends in the arrow tells you what is coming. A single curved arrow means one bend; a snaking arrow means a series. Where the geometry needs a lower speed than the posted limit, an advisory speed tab is added below the diamond, and that number is a recommendation for the curve rather than a new legal limit.",
        trap:
          "A single sharp bend is the near miss, and the difference is entirely in the symbol - the response differs too, since one bend lets you accelerate out and a series does not.",
        ...src.signs,
      },
      {
        id: "on_s3_26",
        topic: "rules",
        question:
          "Within how many metres of a bridge, viaduct or tunnel are you barred from crossing the centre line to pass?",
        choices: ["100 metres", "15 metres", "60 metres", "30 metres"],
        correctIndex: 3,
        explanation:
          "Those structures narrow the road and remove any shoulder to escape onto, so there is nowhere to go if the pass turns out badly. Thirty metres keeps the manoeuvre clear of the pinch point.",
        context:
          "Ontario uses the same 30-metre buffer for two passing prohibitions: crossing the centre line within 30 metres of a bridge, viaduct or tunnel, and passing within 30 metres of a pedestrian crossover. Alongside them sit judgement-based bans on passing at the crest of a hill, on blind curves, in or near intersections, and past a working snow plow.",
        trap:
          "15 metres is the pull because it is a real Ontario distance - it belongs to the parking clearances, not to the passing prohibitions, which both use 30.",
        ...src.positions,
      },
      {
        id: "on_s3_27",
        topic: "signals",
        question:
          "You face a flashing red while the cross street faces a flashing amber. How does that intersection work?",
        choices: [
          "You stop and give way; the cross street may continue through with caution",
          "Both directions stop, as at a four-way stop",
          "You may continue through; the cross street stops",
          "Whoever arrives first goes, regardless of the colours",
        ],
        correctIndex: 0,
        explanation:
          "The pairing tells you which road is the through route. Flashing red behaves like a stop sign for you, while flashing amber leaves the other road with priority and a caution.",
        commonlyMissed: true,
        context:
          "Flashing signals are usually deployed as a pair so the intersection keeps a clear hierarchy overnight or in low traffic. A flashing red requires a complete stop and a move through only when it is safe, exactly like a stop sign. A flashing amber allows you to continue with caution. Reading the pairing tells you not only what you must do but what the other road is expected to do.",
        trap:
          "Treating it as a four-way stop is the safe-sounding answer, and it misreads the intersection - the cross street is not stopping, so waiting for them to stop leaves you sitting there indefinitely.",
        ...src.lights,
      },
      {
        id: "on_s3_28",
        topic: "sharing",
        question:
          "A driver squeezes past a cyclist with well under a metre of clearance. Beyond a fine, what else applies?",
        choices: [
          "An immediate licence suspension",
          "Three demerit points",
          "Two demerit points",
          "Nothing - it is a fine-only offence",
        ],
        correctIndex: 2,
        explanation:
          "Points are attached because a close pass is a genuine driving fault rather than a paperwork slip. It also removes any room for the rider to react to a pothole or a car door.",
        context:
          "Ontario requires at least one metre between vehicle and cyclist when passing, where practical, and backs it with a fine plus two demerit points. If the lane will not allow that gap, the pass waits until it will. Related duties keep drivers out of marked bike lanes except to complete a right turn, and require stopping behind rather than inside a bike box at a signalised intersection.",
        trap:
          "Assuming it is fine-only is the common belief, and it understates how the offence is treated - the demerit points are what make it a licence issue rather than a cost issue.",
        ...src.sharing,
      },
      {
        id: "on_s3_29",
        topic: "safety",
        question:
          "You are behind another vehicle at night on an unlit road. At what point do your high beams have to come off?",
        choices: [
          "Only if the other driver taps their brakes",
          "Within 150 metres of the vehicle ahead",
          "Within 30 metres of the vehicle ahead",
          "Within 60 metres of the vehicle ahead",
        ],
        correctIndex: 3,
        explanation:
          "High beams bounce off the mirrors of the car in front and blind that driver just as effectively as an oncoming one. The following distance is shorter than the oncoming one because the geometry is less direct.",
        context:
          "Two dipping distances apply and they are easy to mix up: 150 metres for an oncoming vehicle, 60 metres for one you are following. On unlit country roads you also drop to low beams at curves and hilltops, where an approaching vehicle's lights show before the vehicle does. High beams go back on once there is nothing ahead to dazzle.",
        trap:
          "150 metres is the strongest distractor because it is the other real number in the same rule - it applies to oncoming traffic, where the glare is direct.",
        ...src.night,
      },
      {
        id: "on_s3_30",
        topic: "parking",
        question:
          "You park facing downhill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Turned away from the curb, so the vehicle rolls clear of the lane",
          "Turned toward the curb, so the vehicle rolls into it rather than into traffic",
          "Straight ahead, with the parking brake set",
          "Toward the curb, but only when the slope is steep",
        ],
        correctIndex: 1,
        explanation:
          "Point the wheels so that gravity works against the roll rather than with it. Facing downhill the vehicle would move forward, so the front wheels aim into the curb to catch it.",
        context:
          "Hill parking follows one idea: work out which way the vehicle would roll, then aim the wheels so the curb stops it. Facing downhill with a curb, the wheels turn toward the curb. Facing uphill with a curb, they turn away so the vehicle rolls back into it. Facing uphill with no curb at all, they turn sharply right so the vehicle would roll off the road rather than into traffic. Park parallel to the edge, roughly 30 centimetres out.",
        trap:
          "'Only when the slope is steep' is the seductive option because it sounds like reasonable judgement - the wheel-turning rule applies on any hill, and gentle slopes are where people get caught out.",
        ...src.parking,
      },
      {
        id: "on_s3_31",
        topic: "signals",
        question:
          "At a fully protected left turn, the green arrow goes out and the through light turns green. What may you do?",
        choices: [
          "Turn left, since the green covers every movement",
          "Turn left after yielding to oncoming traffic",
          "Nothing - left turns are only permitted on the arrow at that intersection",
          "Turn left provided no pedestrian is waiting",
        ],
        correctIndex: 2,
        explanation:
          "A fully protected intersection removes the unprotected turn entirely, usually because sightlines or volumes make it too dangerous. When the arrow goes out, your turn is finished until the next cycle.",
        context:
          "Ontario runs left turns three ways. Unprotected: a plain green, and you yield to oncoming traffic and pedestrians. Protected-permissive: an advance green or flashing green first, then an ordinary green during which you yield. Fully protected: a separate signal head for the turn lane, where the arrow is the only time a left turn is legal and the through green does not permit one at all.",
        trap:
          "'Yield to oncoming traffic and turn' is what works at almost every other intersection, which is what makes it the dangerous answer here - a fully protected intersection is set up precisely because that manoeuvre is not safe there.",
        ...src.lights,
      },
      {
        id: "on_s3_32",
        topic: "rules",
        question:
          "You are leaving a freeway. Where should most of your slowing down happen?",
        choices: [
          "In the deceleration lane, once you are out of the through lane",
          "In the through lane, before you signal",
          "On the exit ramp itself, after the deceleration lane",
          "Anywhere, as long as you are below the ramp speed by the curve",
        ],
        correctIndex: 0,
        explanation:
          "The deceleration lane exists so you can shed speed without a queue building behind you at highway pace. Braking in the through lane is one of the more common causes of freeway rear-end collisions.",
        context:
          "A freeway exit has three parts: the deceleration lane, the ramp, and the intersection or road at the end. You signal and move into the deceleration lane at close to highway speed, then reduce gradually to the speed posted for the ramp. Speed adaptation makes this harder than it sounds - after a long stretch at highway pace, 60 km/h feels far slower than it is, so check the speedometer rather than trusting the sensation.",
        trap:
          "Leaving the braking for the ramp itself is the near miss and the more dangerous half of the error, because ramp curves are where a misjudged speed puts you off the road entirely.",
        ...src.freeway,
      },
      {
        id: "on_s3_33",
        topic: "signs",
        question:
          "A yellow diamond shows a truck on a steep downward slope. What is it preparing you for?",
        choices: [
          "A steep descent where heavy vehicles may pick up speed",
          "A weigh station used by trucks",
          "A lane reserved for trucks only",
          "A ban on trucks past this point",
        ],
        correctIndex: 0,
        explanation:
          "It is a warning about the grade, aimed at everyone but flagged with a truck because loaded vehicles struggle most. Cutting in front of a descending truck leaves it with nowhere near enough braking room.",
        context:
          "The yellow diamond marks it as a warning about road geometry, and the truck symbol identifies who is most affected rather than who the sign is addressed to. Large commercial vehicles need far longer to stop than cars, have deep blind spots on both sides and behind, and swing wide on right turns. On a long descent, giving them extra room in front and behind is the practical response.",
        trap:
          "Reading it as a truck prohibition mixes up the families - a ban would appear as a truck symbol inside a red circle with a stroke, on a white regulatory sign.",
        ...src.signs,
      },
      {
        id: "on_s3_34",
        topic: "rightOfWay",
        question:
          "A crossing guard steps into the road holding up a stop sign. When may you move again?",
        choices: [
          "Once the guard lowers the sign, even while still on the road",
          "Once the children have reached the far sidewalk",
          "Once every pedestrian and the guard have cleared the whole roadway",
          "Once your half of the road is clear",
        ],
        correctIndex: 2,
        explanation:
          "The guard is a pedestrian too, and they are usually the last one off the road. Rolling forward while they walk back to the curb is exactly the moment this rule was written to prevent.",
        context:
          "At a school crossing controlled by a guard, you stop before reaching the crossing and stay stopped until everyone, the guard included, is off the roadway. The identical logic governs pedestrian crossovers: the entitlement covers the entire width of the road rather than just your lane. Failing to yield at a crossover is a four-point offence, and passing within 30 metres of one is separately prohibited.",
        trap:
          "Moving off once your own half is clear is the everyday shortcut and the one that gets ticketed - the whole roadway has to be empty, not just the part in front of you.",
        ...src.stopping,
      },
      {
        id: "on_s3_35",
        topic: "licensing",
        question:
          "A G2 driver is convicted of using a hand-held phone while driving. How does that differ from a fully licensed driver's outcome?",
        choices: [
          "They receive double the demerit points",
          "They face a licence suspension that escalates with each conviction, rather than demerit points",
          "There is no difference between the licence classes",
          "They receive a warning letter only",
        ],
        correctIndex: 1,
        explanation:
          "Novice drivers are dealt with through suspensions instead of points, and repeat convictions can end in the licence being cancelled outright. A fully licensed driver takes a fine and three points.",
        context:
          "Novice drivers sit under a separate consequence regime for several offences. Distracted driving convictions bring escalating suspensions rather than demerit points, with the third conviction risking cancellation and removal from the graduated system. Novice escalating sanctions apply more broadly too, triggered within a five-year window by repeat novice violations, convictions carrying four or more demerit points, or court-ordered suspensions.",
        trap:
          "'No difference between the classes' is the assumption most learners make, and it understates the risk considerably - the novice consequence hits the licence directly rather than a point balance.",
        ...src.keeping,
      },
      {
        id: "on_s3_36",
        topic: "signs",
        question:
          "A car with two people aboard is using an HOV lane, and a large transport truck carrying three people pulls in behind it. Is the truck allowed there?",
        choices: [
          "Yes, provided the truck is running empty",
          "Yes - three occupants clears the minimum",
          "Yes, but only outside rush hours",
          "No - large trucks are barred from HOV lanes regardless of how many people are aboard",
        ],
        correctIndex: 3,
        explanation:
          "The occupancy rule is not the only rule. Large trucks are excluded outright because their speed and length work against what the lane is designed to do.",
        commonlyMissed: true,
        context:
          "HOV lanes on 400-series highways require at least two occupants including the driver, with buses, licensed taxis, airport limousines, emergency vehicles, motorcycles and green-plate vehicles admitted whatever their occupancy. Large trucks are excluded no matter what. Access is only at designated openings marked with broken white lines and diamonds, and misuse draws a fine plus three demerit points.",
        trap:
          "Counting the three occupants and stopping there is the trap the question is built around - the occupancy test is necessary but not sufficient, and the vehicle-type exclusion overrides it.",
        ...src.freeway,
      },
      {
        id: "on_s3_37",
        topic: "rules",
        question:
          "You are cruising in the far-left lane of a freeway at exactly the posted limit, with the right-hand lanes clear. What is expected of you?",
        choices: [
          "Stay put unless another driver flashes their lights at you",
          "Stay put, since you are at the limit and entitled to the lane",
          "Move back to the right - the left lanes are there for passing",
          "Move right only once traffic gets heavy",
        ],
        correctIndex: 2,
        explanation:
          "Sitting in the passing lane forces faster traffic to overtake on the right, which is the manoeuvre nobody expects. Keeping right when you are not actively passing removes that whole problem.",
        context:
          "Freeway lane discipline is keep right, pass left, and return right once the pass is complete. The far-left lane is for overtaking traffic moving slower than the limit, not for settling into. The reason is predictability rather than speed enforcement: when everyone follows the convention, overtaking happens on one side only and drivers know where to look.",
        trap:
          "'I am at the limit so the lane is mine' is the most common justification and misreads the rule - lane discipline is about the lane's purpose, not about whether your speed is legal.",
        ...src.freeway,
      },
      {
        id: "on_s3_38",
        topic: "signals",
        question:
          "The lane beside the curb is marked with a painted bicycle symbol. When may you drive into it?",
        choices: [
          "Only briefly, to complete a right turn at a corner or driveway",
          "Any time the lane beside you is congested",
          "Only to park, if no sign forbids it",
          "Never, for any reason at all",
        ],
        correctIndex: 0,
        explanation:
          "The lane belongs to cyclists, with a narrow exception so right turns are still possible. You enter it late, after checking over your shoulder, rather than travelling along it.",
        context:
          "Marked bike lanes are reserved for cyclists, and motor vehicles enter only to complete a right turn at a corner or a driveway. Related markings include bike boxes at signalised intersections, which put waiting cyclists ahead of stopped traffic - drivers stop behind them rather than inside them. Where a bike lane is not present, the one-metre passing rule governs instead.",
        trap:
          "'Never, for any reason' sounds like the strictest and therefore safest answer, but it is wrong in a way that matters - refusing to enter the lane forces you to turn right across it instead, cutting off any cyclist alongside you.",
        ...src.sharing,
      },
      {
        id: "on_s3_39",
        topic: "impairment",
        question:
          "A 19-year-old G2 driver registers any alcohol at all at the roadside. What follows immediately?",
        choices: [
          "A fine with no effect on the licence",
          "A warning, since the reading is below 0.05",
          "A 90-day administrative suspension",
          "A 24-hour roadside suspension, with a minimum 30-day suspension on conviction",
        ],
        correctIndex: 3,
        explanation:
          "Two separate zero-alcohol rules land on this driver at once, one for the novice licence and one for being 21 or under. The roadside suspension is immediate and the conviction adds a longer one on top.",
        context:
          "Zero blood alcohol applies to every novice driver and to every driver aged 21 and under, and a young G2 holder is covered by both. Any detectable alcohol brings an immediate 24-hour roadside suspension, followed on conviction by a suspension of at least 30 days. The warn range and criminal thresholds that apply to older fully licensed drivers never come into play for this group.",
        trap:
          "Assuming a reading under 0.05 is only a warning is the error, and it imports a threshold that simply does not exist for this driver - their limit is zero, not 0.05.",
        ...src.otherWays,
      },
      {
        id: "on_s3_40",
        topic: "signs",
        question:
          "A regulatory sign shows a bicycle inside a green circle. What is it saying?",
        choices: [
          "Bicycles are prohibited beyond this point",
          "Bicycles are permitted on this route",
          "Watch for cyclists crossing ahead",
          "The lane is closed to motor vehicles at all times",
        ],
        correctIndex: 1,
        explanation:
          "Green ring, permitted; red ring with a stroke, prohibited. Once that pair is fixed in your head, you can read a sign whose symbol you have never encountered before.",
        context:
          "The ring colour on a regulatory sign is the verb of the sentence and the symbol is the object. Green means the pictured activity is permitted or required; red with a diagonal stroke means it is prohibited. Because the grammar never varies, unfamiliar signs stay readable, and the same bicycle symbol on a yellow diamond would be a warning about cyclists rather than a rule about them.",
        trap:
          "'Watch for cyclists crossing' is the strongest distractor because the symbol is identical to a warning sign - the circle and the regulatory format are what make this a permission rather than a caution.",
        ...src.signs,
      },
    ],
  },
];
