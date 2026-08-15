import type { DrivingTestSet } from "../types";

// Every fact below was checked against the New Jersey Driver Manual (2025),
// published by the New Jersey Motor Vehicle Commission, plus njmvc.gov pages
// for the graduated driver licence programme and the point schedule, and the
// Department of Banking and Insurance's Auto Insurance Buyer's Guide for the
// liability minimums the manual does not state.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the MVC's
// own authoritative wording on the state's site.
//
// Answer positions were assigned from a balanced target sequence BEFORE the
// questions were written, so no rotation pass was needed afterwards.
const HB = "https://www.nj.gov/mvc/pdf/license/drivermanual.pdf";
const GDL = "https://www.nj.gov/mvc/about/gdlsafety.htm";

export const newjerseySets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "New Jersey Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in New Jersey: what the shapes and colours mean, who goes first, and the handful of numbers the MVC's 50-question knowledge test expects you to know cold.",
    questions: [
      {
        id: "nj_s1_01",
        topic: "signs",
        question:
          "You come to an eight-sided red sign at an intersection. What does New Jersey require of you?",
        choices: [
          "Slow to walking pace and keep rolling if nothing is coming",
          "Yield only to vehicles already inside the intersection",
          "Stop only when a pedestrian is waiting at the kerb",
          "Come to a complete stop, then go once you have yielded to anything close enough to be a hazard",
        ],
        correctIndex: 3,
        explanation:
          "The octagon has exactly one meaning and it is a full stop. New Jersey then adds a positional rule: you must be stopped within five feet of the nearest crosswalk or stop line, and you may only move off once traffic on the cross street is no longer an immediate hazard.",
        context:
          "New Jersey signs carry meaning in shape and colour as well as words, so you can begin reacting before you can read the text. The octagon belongs to STOP alone, the downward triangle to YIELD, the yellow diamond warns of a hazard ahead and orange means road work. Learning the shape system earns more marks than memorising individual signs, because the test can show you a sign you have never seen and expect you to reason from its outline.",
        trap:
          "Rolling through at walking pace is the habit that earns the ticket. The MVC wants the wheels stopped, and it wants them stopped within five feet of the line.",
        excerptKey: "stop-within-five-feet",
        sourceLabel: "NJ Driver Manual - Chapter 4, Intersections",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_02",
        topic: "signals",
        question: "A traffic light ahead of you turns steady red. Where must you stop?",
        choices: [
          "Anywhere within one car length of the signal head",
          "Level with the signal so you can watch it change",
          "Before the intersection or the crosswalk, and you stay there until the light turns green",
          "Only if a vehicle is approaching from the cross street",
        ],
        correctIndex: 2,
        explanation:
          "Steady red means stopping short of the intersection or the crosswalk, and staying stopped until green. Where the pavement carries a single solid white line across the road, that line is where you stop.",
        context:
          "New Jersey's signal colours run steady red (stop and stay stopped), steady yellow (red is coming, stop unless you are too close to do it safely), steady green (go, but yield to anyone still in the intersection). The flashing versions change the meaning completely: flashing red behaves like a stop sign, flashing yellow means slow down and proceed with care. A police officer directing traffic outranks the signal even when the instruction contradicts the light.",
        trap:
          "Creeping forward to see the signal better puts your bumper inside the crosswalk, which is exactly where pedestrians are entitled to be. Blocking a crosswalk is its own violation in New Jersey.",
        excerptKey: "red-light-remain-stopped",
        sourceLabel: "NJ Driver Manual - Chapter 11, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_03",
        topic: "speed",
        question:
          "You are driving through a residential district in New Jersey and there is no speed limit sign anywhere. What is the limit?",
        choices: ["15 mph", "20 mph", "30 mph", "25 mph"],
        correctIndex: 3,
        explanation:
          "Unless a sign says otherwise, 25 mph is the New Jersey limit in school zones and in business or residential districts. It is the figure the test expects when no sign is mentioned.",
        context:
          "New Jersey publishes a statutory ladder of limits that applies wherever nothing is posted: 25 mph in school zones and business or residential districts, 35 mph in suburban business and residential districts, 50 mph on non-posted rural roadways, 55 mph on certain state highways and interstates, and 65 mph on certain interstates. Learn the ladder rather than individual roads, because the exam asks about the unposted case.",
        trap:
          "Several neighbouring states put residential streets at 30 mph. New Jersey sits at 25, and it uses the same 25 for school zones rather than dropping lower.",
        excerptKey: "speed-limits-table",
        sourceLabel: "NJ Driver Manual - Chapter 4, Speed Control",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_04",
        topic: "rightOfWay",
        question:
          "Two cars arrive at a four-way stop at exactly the same moment, on roads that cross at right angles. Who goes first?",
        choices: [
          "The driver on the right",
          "Whoever signals their intention first",
          "The driver going straight rather than turning",
          "The larger vehicle, because it needs more room to clear",
        ],
        correctIndex: 0,
        explanation:
          "When two drivers reach a multi-way stop together, the one on the left yields, so the driver on the right moves off first. The tie-break is about position, not size, speed or intention.",
        context:
          "At a multi-way stop the ordinary rule is arrival order: first to the line is first to go. Only a genuine tie brings in the right-hand rule. New Jersey adds a second yielding rule at the same intersections, which is that you also yield to anyone already stopped there when you arrive, so a driver who beat you to the line keeps priority even if you are on their right.",
        trap:
          "Signalling first proves nothing. A turn signal announces what you intend to do; it does not create a right to go before someone else.",
        excerptKey: "multiway-stop-right",
        sourceLabel: "NJ Driver Manual - Chapter 4, Intersections",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_05",
        topic: "safety",
        question:
          "You are 17, driving on a probationary licence, with three friends of the same age in the car. Who must be wearing a seat belt?",
        choices: [
          "Only you, because you are the driver",
          "Only the people sitting in the front",
          "Everyone in the front, and anyone under 18 anywhere",
          "You and every passenger, wherever they are sitting",
        ],
        correctIndex: 3,
        explanation:
          "A GDL permit or probationary licence carries its own belt rule: the holder must be belted and must require every passenger, seated anywhere in the vehicle, to be belted too. It is stricter than the rule that applies to a fully licensed driver.",
        context:
          "New Jersey's general belt law makes it a primary offence for the driver, any front-seat passenger and anyone under 18 to ride unbelted, and it puts responsibility for under-18 passengers on the driver. Unbelted back-seat occupants aged 18 and over are covered only by a secondary rule, so they can be ticketed once the car has been stopped for something else. GDL drivers lose that gap entirely.",
        trap:
          "It is tempting to apply the adult rule and assume the back seat is a grey area. On a probationary licence there is no grey area, and it is you who answers for it.",
        excerptKey: "seat-belt-gdl",
        sourceLabel: "NJ Driver Manual - Chapter 3, Seat Belt Law",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_06",
        topic: "signals",
        question: "What does a flashing red traffic signal require?",
        choices: [
          "A full stop, then go only when it is safe",
          "Slowing down and proceeding with care",
          "Nothing, if the cross street is clearly empty",
          "Waiting until the light stops flashing",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red is a stop sign in light form. You stop, yield to traffic and pedestrians, and move off only when it is safe to do so.",
        context:
          "Flashing signals come in two flavours and they are opposites. Flashing red means stop, yield, then go when safe. Flashing yellow means slow down and proceed with care, with no obligation to stop. At a railroad crossing a flashing red means a train is coming and you must not move until the lights stop flashing and every other active device has switched off.",
        trap:
          "Waiting for a flashing red to change is a mistake at a road intersection: it is not going to change. At a railroad crossing, though, waiting is exactly right.",
        excerptKey: "flashing-red",
        sourceLabel: "NJ Driver Manual - Chapter 11, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_07",
        topic: "impairment",
        question:
          "At what blood alcohol concentration does a driver aged 21 or over commit a DUI offence in New Jersey?",
        choices: ["0.05 percent", "0.08 percent", "0.10 percent", "0.02 percent"],
        correctIndex: 1,
        explanation:
          "For a driver of 21 or over the threshold is 0.08 percent. You can also be convicted below that figure if your driving shows you are under the influence of drink or drugs, because the offence is not defined by the number alone.",
        context:
          "New Jersey's DUI law bans driving under the influence of intoxicating liquor or of narcotic, hallucinogenic or habit-producing drugs, and separately bans driving at 0.08 percent or higher. Under 21 the number drops to 0.01 percent. The manual notes that crash risk has already doubled a little above 0.05 percent and is six times higher at 0.10 percent, which is why the legal figure is not a safety threshold.",
        trap:
          "0.10 was the old national figure and it still lingers in people's heads. In New Jersey a first offence is graded differently above and below 0.10, but the offence itself begins at 0.08.",
        excerptKey: "bac-08",
        sourceLabel: "NJ Driver Manual - Chapter 6, How Much is Too Much",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_08",
        topic: "signs",
        question: "Which sign shape does New Jersey use for YIELD?",
        choices: [
          "A five-sided pentagon",
          "A yellow diamond",
          "A three-sided triangle standing on its point",
          "A round sign with a red border",
        ],
        correctIndex: 2,
        explanation:
          "YIELD is the downward-pointing triangle, red and white. It is the only three-sided regulatory sign on the road, which is what makes it readable from a distance.",
        context:
          "New Jersey ties shape to meaning so tightly that the manual prints a table of it: octagon for STOP, triangle for YIELD, pentagon for school signs, pennant for a no-passing warning, diamond for a hazard, round for a railroad advance warning and the X of a crossbuck at the crossing itself. Colour reinforces the shape, with orange for construction, brown for recreation, green for direction and blue for motorist services.",
        trap:
          "The pennant is also a three-sided yellow sign, but it hangs on the left of the road and warns of a no-passing zone. It is not a yield sign.",
        excerptKey: "sign-shapes-red-yellow",
        sourceLabel: "NJ Driver Manual - Chapter 11, Sign Colors and Shapes",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_09",
        topic: "licensing",
        question: "What must you have with you every time you drive in New Jersey?",
        choices: [
          "A valid licence or validated permit, your insurance card and your registration card",
          "Your licence only, since the state can look the rest up",
          "Your licence and registration, with insurance kept at home",
          "Nothing, provided the vehicle is properly registered",
        ],
        correctIndex: 0,
        explanation:
          "State law requires you to carry a valid driver licence, probationary licence or validated permit, together with valid insurance and registration cards. The insurance card may be shown in electronic form.",
        context:
          "The three documents are demanded at four moments: before an inspection, after a crash, when you are stopped for a traffic violation and at a roadside spot check. New Jersey also sets deadlines around your licence details, one week to report a change of address and two weeks to report a legal change of name, and gives a new resident 60 days to convert an out-of-state licence.",
        trap:
          "An electronic insurance card is fine. A photograph of your registration is not the same thing, and 'my insurer emails it' does not help you at the roadside.",
        excerptKey: "license-carry",
        sourceLabel: "NJ Driver Manual - Chapter 1, Laws Governing Driver Licenses",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_10",
        topic: "rules",
        question: "On a New Jersey road with two lanes running your way, which lane should you normally use?",
        choices: [
          "Either one, as long as you keep up with traffic",
          "The lane nearest the right-hand edge or kerb, unless you are overtaking or preparing to turn left",
          "The left lane, so that slower traffic can enter and leave on the right",
          "Whichever lane has the smoothest surface",
        ],
        correctIndex: 1,
        explanation:
          "New Jersey requires you to drive in the right-hand lane whenever it is available for travel. The two exceptions are overtaking another vehicle and setting up for a left turn.",
        context:
          "The keep-right rule starts from the roadway as a whole, since you must drive on the right half unless the street is one-way, and then repeats itself lane by lane on a multi-lane road. Failure to keep right and failure to observe traffic lanes each carry two points. The only routine reason to sit in a left or centre lane is the manual's advice for a congested urban expressway, where it recommends the inner lanes to stay clear of merging conflicts.",
        trap:
          "Cruising in the left lane because you are already at the speed limit is still a violation. The rule is about lane position, not about how fast you are going.",
        excerptKey: "keep-right-multi-lane",
        sourceLabel: "NJ Driver Manual - Chapter 4, Keeping to the Right",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_11",
        topic: "sharing",
        question:
          "A school bus ahead of you on an ordinary two-lane road switches on its flashing red lights. What does New Jersey require?",
        choices: [
          "Stop at least 25 feet away and wait until the signals are switched off",
          "Stop directly behind the bus so following traffic can see you",
          "Slow to 10 mph and pass with care",
          "Stop only if you can see children crossing",
        ],
        correctIndex: 0,
        explanation:
          "New Jersey does not simply say stop, it names a distance: at least 25 feet from the bus when you are on a two-lane road, on a multi-lane highway divided only by painted lines, or on a privately maintained road.",
        context:
          "The distance rule is what makes this a New Jersey question rather than a generic one. Three variants sit alongside it. On a dual highway where you are on the far side of a safety island or raised median you slow to 10 mph instead of stopping. If the bus has pulled up directly in front of a school, traffic from either direction may pass at no more than 10 mph. And once the signals go off you still move away watching for children, because the amber and red lights can fail.",
        trap:
          "Stopping right behind the bus feels considerate and breaks the rule. Twenty-five feet is the point of it: it is the room a child needs to be seen.",
        commonlyMissed: true,
        excerptKey: "school-bus-25-feet",
        sourceLabel: "NJ Driver Manual - Chapter 4, Stop for School Buses",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_12",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in New Jersey?",
        choices: ["5 feet", "No closer than 10 feet", "No closer than 15 feet", "20 feet"],
        correctIndex: 1,
        explanation:
          "Ten feet is the hydrant clearance. It is the shortest of New Jersey's parking distances, which is precisely why people mix it up with the longer ones.",
        context:
          "The manual sets out a list of distances that are worth learning as a group, because the exam tends to give you one and offer the others as decoys: 10 feet from a fire hydrant, 20 feet from a fire station driveway and 75 feet from the kerb opposite one, 25 feet from a crosswalk at an intersection, and 50 feet from either a railroad crossing or a stop sign. Separately, you may never park more than six inches out from the kerb.",
        trap:
          "Fifteen feet is the hydrant figure in a number of other states, so it feels right. New Jersey uses 15 feet for stopping at a railroad crossing, not for hydrants.",
        excerptKey: "no-park-hydrant",
        sourceLabel: "NJ Driver Manual - Chapter 4, Do Not Park",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_13",
        topic: "signals",
        question: "A green arrow is showing for your lane. What does it permit?",
        choices: [
          "Any movement, since green means go",
          "Only the movement the arrow points to, and you still yield to pedestrians",
          "A protected turn with no need to look for pedestrians",
          "Turning, but only after stopping first",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow lets you make the movement it points to and nothing else. Even when it is protected against opposing traffic, you still owe pedestrians a look.",
        context:
          "New Jersey hangs green arrows at the bottom of a vertical signal head, and they can show on their own or beside a red. Either way the instruction is the same: proceed only as the arrow shows. A yellow arrow is the warning that the protected phase is ending and gives you the chance to stop safely, exactly as a yellow ball does.",
        trap:
          "A protected arrow removes conflicting vehicles, not people. Someone stepping off the kerb on a walk signal still has priority over your turn.",
        excerptKey: "green-arrow",
        sourceLabel: "NJ Driver Manual - Chapter 11, Green Arrow",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_14",
        topic: "rightOfWay",
        question:
          "You are at a red light in New Jersey and want to turn right. There is no sign about turning. What may you do?",
        choices: [
          "Stop completely, then turn if you can yield to all traffic and pedestrians",
          "Turn without stopping if the road looks clear",
          "Wait for green, because right on red needs a sign permitting it",
          "Turn on red only between 9am and 4pm",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is permitted across New Jersey unless a No Turn on Red sign is posted. The conditions are a full stop first and yielding to everything, oncoming vehicles and pedestrians alike.",
        context:
          "New Jersey is the mirror image of New York City here, where right on red is banned unless a sign allows it. The manual pairs the permission with a warning that is easy to skim past: cyclists and moped riders crossing in front of you may have a green light and are hard to see from a stopped car. Turning improperly at a traffic light costs three points.",
        trap:
          "The tempting wrong answer is the rolling right turn. Failing to come to a genuine stop is what turns a legal manoeuvre into a citation.",
        excerptKey: "right-on-red",
        sourceLabel: "NJ Driver Manual - Chapter 4, Right Turn on Red",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_15",
        topic: "speed",
        question:
          "Heavy rain has cut visibility on a 55 mph highway. You are driving at 54 mph. Can you be cited?",
        choices: [
          "No, because you are under the posted limit",
          "No, unless a variable sign has lowered the limit",
          "Yes, because the posted limit does not override weather and road conditions",
          "Only if a crash results",
        ],
        correctIndex: 2,
        explanation:
          "New Jersey tells you never to drive faster than weather, road or other conditions safely allow, whatever the sign says. Failing to slow down for conditions is itself a moving violation.",
        context:
          "The posted number is a ceiling, not a permission. The manual lists the situations that should pull you below it: narrow or winding roads, intersections and railroad crossings, hills, sharp or blind curves, anywhere pedestrians or hazards are likely, and any wet or slippery surface. It adds the opposite failing too, since blocking traffic by driving too slowly when the road and traffic are normal is also prohibited.",
        trap:
          "The posted limit is the answer people reach for because it is a number. Conditions win, and the citation is written for driving too fast for them.",
        excerptKey: "speed-conditions",
        sourceLabel: "NJ Driver Manual - Chapter 4, Speed Control",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_16",
        topic: "safety",
        question:
          "New Jersey's three-seconds-plus rule tells you to do what?",
        choices: [
          "Pick a fixed object ahead and make sure at least three seconds pass between the car in front reaching it and you reaching it",
          "Wait three seconds at every stop sign before moving off",
          "Leave three car lengths between you and the vehicle ahead at any speed",
          "Check your mirrors every three seconds",
        ],
        correctIndex: 0,
        explanation:
          "You choose a fixed object, start counting when the vehicle ahead passes it, and you should not reach it in under three seconds. The method works at any speed, which is why the manual prefers it to counting car lengths.",
        context:
          "New Jersey gives following distance two ways. The older rule of thumb is one car length, about 20 feet, for every 10 mph. The three-seconds-plus rule replaces the guesswork, and the plus matters: bad weather takes it to four seconds or more, and a snow-covered road takes it to six or more. The manual also gives a table where ice calls for as much as twelve car lengths at 20 mph.",
        trap:
          "Three car lengths is the answer that sounds close enough. At 50 mph the car-length rule alone would call for five, and the time-based rule is the one you can actually apply.",
        excerptKey: "three-second-rule",
        sourceLabel: "NJ Driver Manual - Chapter 5, Three Seconds-Plus Rule",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_17",
        topic: "signs",
        question: "You see an orange diamond-shaped sign ahead. What is it telling you?",
        choices: [
          "A recreation area is coming up",
          "There is a permanent hazard in the road",
          "You are approaching construction or maintenance work",
          "The route number is about to change",
        ],
        correctIndex: 2,
        explanation:
          "Orange is New Jersey's construction and maintenance colour, and the diamond is its warning shape. Together they mean a work zone is ahead.",
        context:
          "A work zone in New Jersey carries a financial edge that the sign itself does not state: traffic fines are doubled for motor vehicle violations committed in roadway construction zones. The advance warning appears up to half a mile before the work, and the flaggers who may be controlling traffic have the same authority as a regulatory sign, so ignoring them is a citable offence.",
        trap:
          "Brown is the recreation and scenic colour and yellow is the ordinary hazard colour. Orange is temporary work, and it is the one that doubles your fine.",
        excerptKey: "sign-colors-orange-brown",
        sourceLabel: "NJ Driver Manual - Chapter 11, Sign Colors and Shapes",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_18",
        topic: "rules",
        question: "How far before a turn does New Jersey law require you to signal?",
        choices: ["50 feet", "At least 100 feet", "200 feet", "Half a block"],
        correctIndex: 1,
        explanation:
          "The signal goes on at least 100 feet before the turn, and you move into the proper lane by then as well. Cancelling it afterwards is part of the same rule.",
        context:
          "New Jersey states the requirement twice, once under driving signals and again under turning, and both times it pairs the distance with lane position. Failure to give a proper signal is a two-point violation. If your indicators fail you are expected to use the standard hand signals instead: arm straight out for left, arm up for right, arm down with the palm to the rear for stopping or slowing.",
        trap:
          "Leaving the signal on after the turn is the half of the rule people forget, and the manual says plainly that it misleads other drivers.",
        excerptKey: "signal-100-feet",
        sourceLabel: "NJ Driver Manual - Chapter 3, Driving Signals",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_19",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with its siren going and its lights flashing. What should you do?",
        choices: [
          "Speed up to clear the road ahead of it",
          "Stop where you are, in your lane",
          "Move to the left so it can use the right-hand lane",
          "Steer to the extreme right of the road, stop, and let it pass",
        ],
        correctIndex: 3,
        explanation:
          "New Jersey wants you at the extreme right of the roadway and stopped. Once the emergency vehicle has gone by, you must stay at least 300 feet behind it.",
        context:
          "The 300-foot tail is the part of this rule that catches people, because the instinct after an ambulance passes is to slot in behind it and enjoy the clear road. Related rules run alongside: never park within 200 feet of a fire department vehicle in service, never drive over a fire hose unless an official directs you to, and remember that a private car showing blue lights is a volunteer firefighter or rescue member on a call.",
        trap:
          "Stopping dead in a live lane is the answer that feels obedient. New Jersey wants you out of the way first, at the extreme right, and then stopped.",
        excerptKey: "emergency-vehicle-300-feet",
        sourceLabel: "NJ Driver Manual - Chapter 4, Pull Over and Stop for Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_20",
        topic: "signals",
        question:
          "A green light turns yellow as you approach the intersection, and you have plenty of room to stop. What does New Jersey require?",
        choices: [
          "Stop before entering the intersection",
          "Continue through, because yellow means proceed with caution",
          "Speed up so you clear the intersection before red",
          "Stop only if a vehicle is waiting on the cross street",
        ],
        correctIndex: 0,
        explanation:
          "A yellow following a green is an instruction to stop before entering the intersection. The only exception is being so close that stopping cannot be done safely.",
        context:
          "New Jersey words the yellow rule as a duty rather than a suggestion, which is why the exam treats it as a stopping regulation and not a caution. If the light changes while you are already inside the intersection you carry on through with care. The manual also warns about the stale green, a light that has been green a long while and is about to turn, and notes that most signal crashes happen in the first few seconds after a change.",
        trap:
          "Measured practice-test data puts this among the most-missed items in New Jersey, because 'proceed with caution' is the answer people carry over from flashing yellow. Flashing yellow means caution; steady yellow means stop.",
        commonlyMissed: true,
        excerptKey: "yellow-after-green",
        sourceLabel: "NJ Driver Manual - Chapter 4, Stopping Regulations",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_21",
        topic: "impairment",
        question:
          "A 19-year-old is stopped in New Jersey and blows 0.03 percent. What is the position?",
        choices: [
          "No offence, because the limit is 0.08 for everyone",
          "No offence, because the under-21 limit is 0.02",
          "An offence, because the under-21 limit is 0.01 percent",
          "An offence only if the driver appears impaired",
        ],
        correctIndex: 2,
        explanation:
          "New Jersey sets the under-21 threshold at 0.01 percent, so 0.03 is well over it. That is separate from the 0.08 offence and carries its own penalties.",
        context:
          "An underage first offence brings a 30 to 90 day suspension of driving privileges, 15 to 30 days of community service, and referral to an Intoxicated Driver Resource Centre or an alcohol education programme. If the person is not yet licensed the suspension starts on the day they first become eligible. The penalties sit on top of anything imposed for the DUI offence itself.",
        trap:
          "Most zero-tolerance states use 0.02. New Jersey uses 0.01, which is low enough that it is effectively any measurable alcohol at all.",
        commonlyMissed: true,
        excerptKey: "bac-under-21",
        sourceLabel: "NJ Driver Manual - Chapter 6, How Much is Too Much",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_22",
        topic: "rules",
        question:
          "It is a grey afternoon and you have switched your windshield wipers on for steady rain. What else does New Jersey law require?",
        choices: [
          "Nothing, as long as you can see clearly",
          "Hazard lights, so you are visible from behind",
          "Headlights, because wipers in use means headlights on",
          "Parking lights, which are enough in daylight",
        ],
        correctIndex: 2,
        explanation:
          "New Jersey ties the two together directly: when the wipers are in use the headlights must be on. It is a statutory requirement, not a courtesy.",
        context:
          "Headlights are required from half an hour after sunset to half an hour before sunrise, whenever visibility falls to 500 feet or less, whenever the wipers are running for rain, snow or ice, and in fog, mist or smoke. Parking or auxiliary lights are explicitly not a substitute. Fog lights may only supplement low beams, never replace them.",
        trap:
          "Daytime running lights are not headlights, and neither are parking lights. The manual rules the substitution out in so many words.",
        excerptKey: "headlights-when-required",
        sourceLabel: "NJ Driver Manual - Chapter 4, Using Headlights",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_23",
        topic: "parking",
        question: "How far from the kerb may a legally parked car sit in New Jersey?",
        choices: [
          "No more than six inches",
          "No more than one foot",
          "No more than 18 inches",
          "Any distance, as long as traffic can get past",
        ],
        correctIndex: 0,
        explanation:
          "Six inches is the legal maximum, and the same figure appears in the road test as the standard for parallel parking. Beyond it, the car is illegally parked.",
        context:
          "The six-inch rule is why parallel parking is an MVC road test item rather than a nicety. New Jersey pairs it with a hill-parking rule that has no curb-or-no-curb variations to memorise: facing downhill the wheels turn toward the kerb, facing uphill they turn away from it, and the parking brake goes on either way.",
        trap:
          "A foot feels generous enough to be legal. It is double the limit, and it is the sort of thing that gets ticketed on a narrow street.",
        excerptKey: "park-six-inches-curb",
        sourceLabel: "NJ Driver Manual - Chapter 4, Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_24",
        topic: "safety",
        question: "Where must a child under eight years old ride in a New Jersey vehicle?",
        choices: [
          "Anywhere, as long as they are in an approved restraint",
          "In the front seat, so the driver can watch them",
          "In a rear seat, unless the vehicle has no rear seats at all",
          "In a rear seat only until they turn six",
        ],
        correctIndex: 2,
        explanation:
          "All children under eight must be seated in a rear seat. Only a vehicle with no rear seats at all lets them ride in front, and even then a rear-facing seat is banned in front of a live passenger airbag.",
        context:
          "New Jersey builds its child restraint law out of stacked age-and-size thresholds. Under two and under 30 pounds means rear-facing with a five-point harness. Under four and under 40 pounds means a five-point harness seat in the back. Under eight and under 57 inches means a harnessed seat or a booster in the back. Getting it wrong costs $50 to $75 plus costs.",
        trap:
          "The thresholds are conjunctions, not alternatives. A child has to be under two and under 30 pounds to fall in the rear-facing band, and outgrowing either one moves them on.",
        excerptKey: "child-under-eight-rear",
        sourceLabel: "NJ Driver Manual - Chapter 3, Child Passenger Safety Law",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_25",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing in a marked crosswalk ahead of you. What does New Jersey require?",
        choices: [
          "Slow down and pass behind them",
          "Sound the horn to warn them",
          "Yield, which may mean slowing rather than stopping",
          "Stop and remain stopped until they have crossed",
        ],
        correctIndex: 3,
        explanation:
          "In a marked crosswalk the duty is to stop and remain stopped. Yielding is the lesser duty and it applies to an unmarked crosswalk at an intersection.",
        context:
          "That distinction is the whole of New Jersey pedestrian law in one line: stop for a marked crosswalk, yield at an unmarked one. The penalties are heavy, up to $500, up to 25 days in jail, community service, a suspension of up to six months and two points. Passing a vehicle that has stopped for a pedestrian is a separate offence, and blocking a crosswalk while waiting at a red is another.",
        trap:
          "Yielding sounds like the safe general answer, and for a marked crosswalk it is the wrong one. Slowing to squeeze past is exactly what the statute forbids.",
        excerptKey: "stop-and-remain-stopped",
        sourceLabel: "NJ Driver Manual - Chapter 8, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_26",
        topic: "signs",
        question: "What does a five-sided yellow sign mean in New Jersey?",
        choices: [
          "A no-passing zone begins",
          "A school zone or school crossing",
          "A railroad crossing is ahead",
          "A hospital is nearby",
        ],
        correctIndex: 1,
        explanation:
          "The pentagon is reserved for school signs. Nothing else on a New Jersey road uses five sides, which is what lets you recognise it before you can read it.",
        context:
          "School signs may be printed in standard yellow or in the fluorescent yellow-green the state uses for pedestrian and bicycle warnings, but the outline stays the same. Beside a school, the speed limit is 25 mph unless posted otherwise, and the manual asks for extra care because children chasing a ball give no thought to traffic.",
        trap:
          "The round yellow sign is the railroad advance warning, and the yellow pennant is the no-passing warning. Both are yellow warnings; neither is five-sided.",
        excerptKey: "sign-shapes-red-yellow",
        sourceLabel: "NJ Driver Manual - Chapter 11, Sign Colors and Shapes",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_27",
        topic: "sharing",
        question: "How does New Jersey law treat a cyclist on a public road?",
        choices: [
          "As a pedestrian, with the right of way at all times",
          "As a vehicle that must stay on the shoulder",
          "As a road user who may be passed at any distance if you are careful",
          "As having the same rights and responsibilities as a motor vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Cyclists, skateboarders and inline skaters have the same rights and responsibilities as motor vehicles. They also fall into a protected category, vulnerable road users, which brings the Safe Passing Law into play.",
        context:
          "Safe passing in New Jersey has a measurement attached. You move over a lane if there is one; on a single-lane road you leave at least four feet; and if four feet is not available you slow to 25 mph and wait until you can pass without endangering them. Causing bodily injury by ignoring this is a $500 fine and two points, and even without injury it is $100.",
        trap:
          "Same rights and responsibilities cuts both ways. A cyclist may take a full traffic lane to turn left, and treating that as an obstruction rather than a legal manoeuvre is how collisions start.",
        excerptKey: "bicycles-same-rights",
        sourceLabel: "NJ Driver Manual - Chapter 8, Bicycles, Skateboards, and Inline Skates",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_28",
        topic: "speed",
        question:
          "You are caught 12 mph over the limit in a posted 65 mph zone in New Jersey. What happens to the fine?",
        choices: [
          "It is the standard fine for that speed",
          "It is doubled",
          "It is halved because 65 zones have a tolerance",
          "It is trebled",
        ],
        correctIndex: 1,
        explanation:
          "Exceeding a 65 mph limit by 10 mph or more doubles the fine, and doubling also applies to most other moving violations committed in a 65 mph zone.",
        context:
          "New Jersey has three separate fine-doubling regimes and the test likes them. The 65 mph rule needs you to be 10 mph or more over. Construction and work zones double fines for any moving violation, no threshold at all. Safe Corridors, which are highways with crash rates half again above the state average, double fines for speeding and aggressive driving. Points come from the speed itself: two up to 14 mph over, four from 15 to 29, five at 30 or more.",
        trap:
          "The 10 mph threshold belongs to 65 mph zones alone. In a work zone there is no cushion, and the fine doubles for a single mile per hour over.",
        excerptKey: "double-fines-65",
        sourceLabel: "NJ Driver Manual - Chapter 4, Speed Control",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_29",
        topic: "rules",
        question:
          "The red lights are flashing and the bells are ringing at a railroad crossing. How close may you get?",
        choices: [
          "Right up to the gate, so long as you stop",
          "10 feet",
          "20 feet",
          "No closer than 15 feet",
        ],
        correctIndex: 3,
        explanation:
          "Fifteen feet is the minimum stopping distance from a railroad crossing when the lights are flashing, the bells are ringing, the gates are coming down or a flag signal is given.",
        context:
          "You wait until the gates are fully raised, the bells have stopped and the lights have stopped flashing before you move. Several other railroad rules travel with this one: never stop on the tracks, never start across unless there is room to clear the far side, do not pass another vehicle within 100 feet of a crossing, and be ready to stop behind a school bus or hazardous-materials vehicle even when no train is signalled, because those vehicles must always stop.",
        trap:
          "Twenty-five feet is the school bus figure and 50 feet is the no-parking figure for a crossing. The stopping distance at an active crossing is 15.",
        excerptKey: "railroad-15-feet",
        sourceLabel: "NJ Driver Manual - Chapter 4, Stop at Railroad Crossings",
        sourceUrl: HB,
      },
      {
        id: "nj_s1_30",
        topic: "signals",
        question:
          "A power cut has left the traffic signals at a busy intersection completely dark, and nobody is directing traffic. How do you treat the intersection?",
        choices: [
          "As an uncontrolled intersection, where the driver on the right has priority",
          "As if you had a green light, since the signal is out",
          "As a four-way stop",
          "As a yield, slowing only if something is coming",
        ],
        correctIndex: 2,
        explanation:
          "A dark or malfunctioning signal is treated as a four-way stop in New Jersey. Every approach stops, looks left and right, and moves off only when it is safe.",
        context:
          "This is a specific statutory instruction, not an application of the general uncontrolled-intersection rule, and that is what the exam is testing. It matters practically too, because an intersection large enough to be signalised is usually far too busy to negotiate on the right-hand rule alone. The unlit-signal instruction sits in the manual's signal section rather than its intersection section, which is part of why people miss it.",
        trap:
          "Measured practice-test data makes this the single most-missed New Jersey item, at roughly a 55 percent error rate, and 'uncontrolled intersection' is the answer nearly everyone picks. Uncontrolled means no signal was ever there; a dead signal is a four-way stop.",
        commonlyMissed: true,
        excerptKey: "unlit-signal",
        sourceLabel: "NJ Driver Manual - Chapter 11, Unlit Signal",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "The everyday rules the MVC expects you to have absorbed before you touch a wheel: passing, signals, parking distances, the graduated licence restrictions and the numbers that go with them.",
    questions: [
      {
        id: "nj_s2_01",
        topic: "signals",
        question: "What does a flashing yellow traffic signal mean?",
        choices: [
          "Stop, then proceed when safe",
          "Slow down and proceed with care",
          "The signal is about to turn red",
          "Yield to any vehicle on your right",
        ],
        correctIndex: 1,
        explanation:
          "Flashing yellow asks you to slow down and go through with care. There is no requirement to stop.",
        context:
          "New Jersey uses flashing signals to downgrade an intersection outside busy hours, and the two colours are opposites. Flashing yellow gives the main road priority and asks only for caution. Flashing red on the side road is a stop sign in light form. Do not confuse a flashing yellow with a steady yellow, which is a stopping instruction.",
        trap:
          "Reading a flashing yellow as a warning that red is imminent comes from the steady yellow. A flashing yellow may flash all night without ever changing.",
        excerptKey: "flashing-yellow",
        sourceLabel: "NJ Driver Manual - Chapter 11, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_02",
        topic: "rules",
        question:
          "The centre line on your side of the road is solid and the other side is broken. What does that tell you?",
        choices: [
          "Both directions may pass here",
          "You may not pass, but oncoming traffic may",
          "Neither direction may pass",
          "You may pass, but only on the right",
        ],
        correctIndex: 1,
        explanation:
          "The line on your own side governs you. Solid on your side means no passing for you, while the broken line lets oncoming traffic pass.",
        context:
          "New Jersey states the pattern three ways: both lines solid means no passing at all, one line broken means passing is allowed only from the side with the broken line, and both broken means both directions may pass. The manual adds a rider that is easy to skip, which is that any pass must be completed before the lines become solid again, so the decision point is well before the markings change.",
        trap:
          "Looking at the far line rather than your own inverts the answer. The marking nearest you is the one that governs your manoeuvre.",
        excerptKey: "center-lines",
        sourceLabel: "NJ Driver Manual - Chapter 4, Passing",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_03",
        topic: "licensing",
        question:
          "You are 18 and hold a New Jersey probationary licence. What is the latest you may legally be driving?",
        choices: ["10:00 pm", "11:00 pm", "11:01 pm", "Midnight"],
        correctIndex: 2,
        explanation:
          "The restriction bites after 11:01 pm and runs until 5:00 am, so 11:01 pm is the last minute you may legally be at the wheel.",
        context:
          "New Jersey writes its GDL curfew with an oddly precise start time that both the manual and the MVC website repeat word for word. The restriction covers examination permits, special learner permits and probationary licences, and it applies to holders under 21 regardless of how old they were when they started. Exemptions exist for documented employment or religious need, and you must carry the certification on official letterhead.",
        trap:
          "The obvious guess is 11:00 pm, and it is one minute out. The restriction is worded as a ban after 11:01 pm, which is precisely the kind of detail the exam likes.",
        commonlyMissed: true,
        excerptKey: "gdl-curfew",
        sourceLabel: "NJ MVC - Graduated Driver License restrictions",
        sourceUrl: GDL,
      },
      {
        id: "nj_s2_04",
        topic: "speed",
        question:
          "You are on a rural New Jersey roadway with no speed limit sign posted anywhere. What limit applies?",
        choices: ["35 mph", "45 mph", "50 mph", "55 mph"],
        correctIndex: 2,
        explanation:
          "Non-posted rural roadways carry a 50 mph limit in New Jersey. It is the one rung of the ladder that has no everyday sign to remind you of it.",
        context:
          "The unposted ladder runs 25 mph in school zones and business or residential districts, 35 mph in suburban business and residential districts, 50 mph on non-posted rural roadways, 55 mph on certain state highways and interstates as posted, and 65 mph on certain interstates as posted. The 55 and 65 figures always come with a sign; the lower three are what you fall back on when nothing is posted.",
        trap:
          "Fifty-five is the reflex answer because it is the familiar highway number, but 55 mph in New Jersey applies only where it is posted. The unposted rural figure is 50.",
        commonlyMissed: true,
        excerptKey: "speed-limits-table",
        sourceLabel: "NJ Driver Manual - Chapter 4, Speed Control",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_05",
        topic: "parking",
        question: "How close to a stop sign may you park in New Jersey?",
        choices: ["25 feet", "No closer than 50 feet", "10 feet", "30 feet"],
        correctIndex: 1,
        explanation:
          "Fifty feet is the clearance for a stop sign, and the same 50 feet applies to a railroad crossing. Both are about sight lines rather than access.",
        context:
          "New Jersey's no-parking list mixes distances with places. The distances are 10 feet from a hydrant, 20 feet from a fire station driveway with 75 feet on the opposite kerb, 20 feet from the end of a pedestrian safety zone, 25 feet from a crosswalk at an intersection, and 50 feet from a stop sign or railroad crossing. The places include crosswalks, sidewalks, bus stops, intersections, driveways, bridges, tunnels, interstate highways and alongside another parked car.",
        trap:
          "Twenty-five feet is the crosswalk figure, not the stop sign figure. The two are next to each other on the list and are routinely swapped.",
        excerptKey: "no-park-railroad-50",
        sourceLabel: "NJ Driver Manual - Chapter 4, Do Not Park",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_06",
        topic: "safety",
        question: "Where does the New Jersey manual tell you to put your hands on the wheel?",
        choices: [
          "At 9 and 3 o'clock, thumbs along the face of the wheel",
          "At 10 and 2 o'clock, thumbs hooked inside the rim",
          "One hand at 12 o'clock",
          "Wherever is comfortable, since it makes no difference",
        ],
        correctIndex: 0,
        explanation:
          "Nine and three, with the thumbs resting along the face of the rim rather than hooked around it. The reason is the airbag: a hooked thumb is what breaks when the bag fires.",
        context:
          "The manual's steering guidance is built around modern airbags rather than the older 10-and-2 teaching. It also asks for hand-over-hand steering through turns, warns against gripping the rim from the inside, and says both hands stay on the wheel except when shifting gears or giving a hand signal. In reverse, palming the wheel one-handed can fail you on the road test.",
        trap:
          "Ten and two is not merely old-fashioned in New Jersey's telling, it puts your forearms across the airbag. The hazard is the reason the position moved.",
        excerptKey: "steering-9-and-3",
        sourceLabel: "NJ Driver Manual - Chapter 3, Steering",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_07",
        topic: "sharing",
        question:
          "An ice cream truck ahead of you has its red lights flashing and its stop arm out. What does New Jersey require?",
        choices: [
          "Nothing, since the rule applies only to school buses",
          "Stop and wait until the truck moves off",
          "Slow to 25 mph and pass with care",
          "Stop, then drive past at no more than 15 mph",
        ],
        correctIndex: 3,
        explanation:
          "New Jersey has a frozen dessert truck law of its own. You yield to anyone crossing to or from the truck, stop, and then pass at no more than 15 mph.",
        context:
          "Very few states legislate for ice cream trucks, which is exactly why this appears on the New Jersey exam. The one exception is a dual highway where you are on the far side of a safety island or raised median, in which case you need not stop at all. Improperly passing a frozen dessert truck costs four points, only one fewer than passing a school bus.",
        trap:
          "The figures for school buses and ice cream trucks are different and get swapped. School bus: stop 25 feet back, or 10 mph past a divided median or in front of a school. Ice cream truck: stop, then 15 mph.",
        commonlyMissed: true,
        excerptKey: "frozen-dessert-15-mph",
        sourceLabel: "NJ Driver Manual - Chapter 4, Stop for Frozen Dessert Trucks",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_08",
        topic: "signs",
        question:
          "A yellow three-sided sign shaped like a pennant hangs on the left-hand side of the road. What is it?",
        choices: [
          "A yield sign for oncoming traffic",
          "A no-passing zone warning",
          "A merge warning",
          "A school crossing marker",
        ],
        correctIndex: 1,
        explanation:
          "The yellow pennant is the no-passing warning, and it is deliberately placed on the left where you will see it as you begin to look for a gap.",
        context:
          "The pennant is the only three-sided yellow sign in the manual's table, and it is the only regulatory sign posted on the left. It works with the pavement markings rather than instead of them, so where the pennant appears you should already be seeing a solid yellow line on your side. Improper passing in a no-passing zone is a four-point violation.",
        trap:
          "Three sides suggests yield, and yield is the answer people give. The yield sign is red and white and points downward; the pennant is yellow and points sideways.",
        excerptKey: "sign-shapes-red-yellow",
        sourceLabel: "NJ Driver Manual - Chapter 11, Sign Colors and Shapes",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_09",
        topic: "rightOfWay",
        question:
          "Two roads meet with no signs, no signals and no markings, and two cars arrive together. Who yields?",
        choices: [
          "Whoever is on the wider road",
          "Whoever arrives at a higher speed",
          "Neither, since both should stop and wave the other on",
          "The driver on the left yields to the driver on the right",
        ],
        correctIndex: 3,
        explanation:
          "At an uncontrolled intersection New Jersey applies the same rule as at a tie at a stop sign: the vehicle on the left yields to the vehicle on the right.",
        context:
          "The manual is blunt about uncontrolled intersections, warning you not to assume a road is protected merely because it is wide, smooth or busy. If there are no signals, there is no traffic control. It asks you to slow down on the approach and be ready to stop for anything coming from either side, and it applies the same left-yields-to-right principle when you are unsure who has priority in a traffic circle.",
        trap:
          "Both drivers waving each other on is the polite answer and the dangerous one. The rule exists so that somebody moves and the other waits.",
        excerptKey: "uncontrolled-left-yields",
        sourceLabel: "NJ Driver Manual - Chapter 4, Uncontrolled Intersections",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_10",
        topic: "emergencies",
        question:
          "Your car breaks down on a highway shoulder. What does the manual tell you to do?",
        choices: [
          "Pull as far onto the shoulder as you can, flashers on, hood up, and stay belted inside with the doors locked",
          "Stand behind the car so approaching traffic can see you",
          "Walk to the nearest exit for help",
          "Leave the car in the lane with the hazards on and wait on the verge",
        ],
        correctIndex: 0,
        explanation:
          "Get right off the road, put the flashers on, raise the hood as a distress signal, and then stay in the vehicle with your belt on and the doors locked while you call for help.",
        context:
          "The manual is deliberately specific about staying inside, and it adds that you should ask anyone who stops to telephone for assistance rather than get into a stranger's vehicle. If you need to set out warning devices, one goes just behind the car and another at least 300 feet back, roughly 120 paces. At night, never stand or work behind the vehicle where you block your own taillights.",
        trap:
          "Standing behind the car to be visible is the instinct, and it puts you exactly where a following driver will not see you until too late.",
        excerptKey: "disabled-vehicle-actions",
        sourceLabel: "NJ Driver Manual - Chapter 4, Disabled Vehicles",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_11",
        topic: "impairment",
        question: "What actually lowers a person's blood alcohol concentration?",
        choices: [
          "Strong coffee and a cold shower",
          "Time, and nothing else",
          "A large meal before driving",
          "Exercise, which burns the alcohol off faster",
        ],
        correctIndex: 1,
        explanation:
          "Only time. The liver oxidises about 90 percent of the alcohol at its own pace, and the remaining 10 percent leaves in breath, urine and sweat.",
        context:
          "Food slows how fast alcohol enters the bloodstream but cannot stop a high reading building up when someone is drinking steadily. It also makes no difference what the drink is: roughly half an ounce of alcohol sits in a 12-ounce beer, a five-ounce glass of wine and an ounce and a half of spirits alike. Body weight, quantity, speed of drinking and food are the four factors the manual lists as determining BAC.",
        trap:
          "The sober-up-quick folk remedies all fail for the same reason, which is that they do nothing to the liver's fixed rate of work.",
        excerptKey: "only-time-sobers",
        sourceLabel: "NJ Driver Manual - Chapter 6, Effects of Alcohol",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_12",
        topic: "signals",
        question:
          "A police officer is waving you through an intersection where the light is red. What do you do?",
        choices: [
          "Wait for green, because the signal is the legal authority",
          "Stop first, then follow the officer",
          "Ignore the officer unless they are in uniform",
          "Follow the officer's direction, because it overrides the signal",
        ],
        correctIndex: 3,
        explanation:
          "A police officer can overrule traffic signals, and law enforcement directions must always be obeyed. Failing to observe an officer's direction is a two-point violation.",
        context:
          "The manual sets out a hierarchy without labelling it as one. An officer directing traffic sits above the signals; the signals and signs sit above pavement markings only in the sense that markings carry the same force of law as signs; and flaggers in a work zone have the same authority as a regulatory sign. The one instruction you never override is a train, which always has priority.",
        trap:
          "The instinct to obey the light is exactly the instinct the rule is written against. Signals cannot see a stalled truck or a collision on the far side.",
        excerptKey: "police-overrule-signals",
        sourceLabel: "NJ Driver Manual - Chapter 11, Driver Safety",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_13",
        topic: "rules",
        question:
          "Your turn signals have failed and you need to turn left. What is the correct hand signal?",
        choices: [
          "Arm out and angled downward",
          "Arm out and angled upward",
          "Arm straight out from the window",
          "Arm out with the palm facing forward",
        ],
        correctIndex: 2,
        explanation:
          "Left is the arm straight out. Up means right, and down with the palm to the rear means stopping or slowing.",
        context:
          "New Jersey requires drivers to know the hand signals, which are standard across every state, and expects you to use them until faulty indicators are fixed. Cyclists, skateboarders and inline skaters use the same three signals with one addition: they may also signal a right turn with the right arm held straight out, which is why you may see an arm on either side meaning right.",
        trap:
          "Arm up and arm out both feel like left to somebody who has never used them. Straight out is left, up is right, and the cyclist's right-arm-out is right as well.",
        excerptKey: "hand-signals",
        sourceLabel: "NJ Driver Manual - Chapter 3, Driving Signals",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_14",
        topic: "licensing",
        question:
          "What must a 17-year-old New Jersey permit holder display on the vehicle they are driving?",
        choices: [
          "A learner plate in the rear window",
          "A single decal on the rear licence plate",
          "Nothing, as long as the supervising driver is present",
          "Two red reflective decals, one on each licence plate",
        ],
        correctIndex: 3,
        explanation:
          "Two red reflective decals, one on the top left corner of the front plate and one on the top left of the rear. They cost $4 a pair and come from the MVC.",
        context:
          "The decal requirement is New Jersey's own, introduced under Kyleigh's Law, and it applies to every permit or probationary licence holder under 21. Anyone 21 or over holding an examination permit or probationary licence is exempt from the decal rule, and from the curfew and passenger limits too. Failing to display the decals is a $100 fine, the same penalty as breaching any other GDL restriction.",
        trap:
          "One decal is not enough and the placement is specified. Both plates, top left corner on each.",
        excerptKey: "gdl-decal-placement",
        sourceLabel: "NJ Driver Manual - Chapter 1, GDL Decal",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_15",
        topic: "safety",
        question:
          "An 18-month-old weighing 25 pounds is travelling with you. How must the child be secured?",
        choices: [
          "In a booster seat in the rear",
          "In a forward-facing seat with a five-point harness",
          "In a lap belt in the rear seat",
          "In a rear-facing seat with a five-point harness",
        ],
        correctIndex: 3,
        explanation:
          "Under two years old and under 30 pounds means a federally approved rear-facing seat with a five-point harness. This child meets both conditions.",
        context:
          "New Jersey's bands stack by age and weight together. Rear-facing applies under two and under 30 pounds; a forward-facing five-point harness in the back applies under four and under 40 pounds; and a harnessed seat or booster in the back applies under eight and under 57 inches. A child leaves a band by outgrowing either the age or the manufacturer's height and weight limits.",
        trap:
          "A rear-facing seat must never go in front of a live passenger airbag, so the front seat is not an alternative when the back is full.",
        excerptKey: "child-under-two",
        sourceLabel: "NJ Driver Manual - Chapter 3, Child Passenger Safety Law",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_16",
        topic: "speed",
        question:
          "What happens to the fine for a moving violation committed inside a New Jersey highway construction zone?",
        choices: [
          "It is doubled",
          "It is increased by 50 percent",
          "It is unchanged, but points are doubled",
          "It is doubled only if workers are present",
        ],
        correctIndex: 0,
        explanation:
          "Fines are doubled for motor vehicle violations committed in roadway construction zones, and the doubling does not depend on workers being present.",
        context:
          "The list of offences the doubling covers is broad: reckless driving, careless driving, speeding, improper passing, tailgating, improper turns, failing to observe traffic lanes, failing to obey a signal or sign, and failing to obey an officer. The work zone begins at the advance warning sign, which may sit up to half a mile ahead of the actual work, so the doubled-fine area is larger than the coned section.",
        trap:
          "Waiting to see workers before slowing misreads the rule. The doubled fine attaches to the zone, not to whether anybody is standing in it.",
        excerptKey: "work-zone-double-fines",
        sourceLabel: "NJ Driver Manual - Chapter 5, Construction Zones/Work Zones",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_17",
        topic: "parking",
        question:
          "You are parking facing downhill on a street with a kerb. Which way do the front wheels go?",
        choices: [
          "Straight ahead, with the parking brake on",
          "Turned toward the kerb",
          "Turned away from the kerb",
          "It makes no difference if the brake is set",
        ],
        correctIndex: 1,
        explanation:
          "Downhill, the wheels turn toward the kerb so that a rolling car is caught by it. The parking brake goes on and the transmission goes into park, or into reverse on a manual.",
        context:
          "New Jersey keeps hill parking simpler than most states because it does not split the rule by whether a kerb is present. Downhill means wheels toward the kerb and the car in park or reverse. Uphill means wheels away from the kerb and the car in park or low gear. The parking brake is required either way.",
        trap:
          "The gear differs between the two cases and people memorise only the wheels. Downhill takes reverse on a manual, uphill takes low.",
        excerptKey: "park-downhill",
        sourceLabel: "NJ Driver Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_18",
        topic: "signs",
        question: "What kind of information does a blue rectangular sign carry?",
        choices: [
          "Direction and route guidance",
          "Motorist services such as fuel, food and lodging",
          "Public recreation and scenic areas",
          "Temporary construction information",
        ],
        correctIndex: 1,
        explanation:
          "Blue signs carry motorist services, with white letters or symbols on a blue background. Green does route guidance and brown does recreation.",
        context:
          "The manual's colour table is worth learning as a set, because the exam asks about it as a set. White vertical rectangles are regulatory, blue is services, brown is recreation and scenic guidance, green is direction guidance, orange is construction and maintenance, red is stop and yield, and yellow is warning.",
        trap:
          "Green and blue are both about getting somewhere, so they blur together. Green tells you where the road goes; blue tells you what is at the exit.",
        excerptKey: "sign-colors-blue",
        sourceLabel: "NJ Driver Manual - Chapter 11, Sign Colors and Shapes",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_19",
        topic: "rightOfWay",
        question:
          "A bus that has just finished picking up passengers signals to pull back into your lane. What does state law require?",
        choices: [
          "Nothing, since the bus must wait for a gap",
          "Yield only if the bus is a school bus",
          "Sound your horn and maintain speed",
          "Yield the right of way and let it back into traffic",
        ],
        correctIndex: 3,
        explanation:
          "All non-emergency vehicles must yield to a bus re-entering traffic after dropping off or picking up passengers. The requirement covers commercial buses as well as school buses.",
        context:
          "The duty has a clear endpoint. Once the bus is back in the normal flow of traffic you are not required to yield to it for ordinary lane changes, and bus operators are separately required to drive responsibly. Ignoring the re-entry rule carries a fine of $50 to $200 and up to 15 days in jail. Postal vehicles get the same courtesy when they rejoin traffic.",
        trap:
          "Assuming the rule is a school bus rule loses the point. It is written for buses generally, and the same courtesy is owed to postal vehicles.",
        excerptKey: "yield-to-buses",
        sourceLabel: "NJ Driver Manual - Chapter 8, Yielding to School and Commercial Buses",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_20",
        topic: "sharing",
        question: "What is the maximum speed a moped may be driven at in New Jersey?",
        choices: ["15 mph", "20 mph", "25 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "Moped riders may not exceed 25 mph. They must obey every traffic sign and signal and ride on the right with the flow of traffic.",
        context:
          "New Jersey draws careful lines between small vehicles. A moped is a pedal-equipped two-wheeler capped at 25 mph. A low-speed vehicle is a four-wheeler capable of more than 20 mph but no more than 25 mph, and it cannot run on petrol or diesel. Motorised scooters, which include pocket bikes and motorised skateboards, are barred from public roads and sidewalks except on designated municipal or county property.",
        trap:
          "Mopeds and motorised scooters are not the same thing in New Jersey law. One is a legal road vehicle with a speed cap; the other is not allowed on the road at all.",
        excerptKey: "moped-25-mph",
        sourceLabel: "NJ Driver Manual - Chapter 8, Mopeds",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_21",
        topic: "rules",
        question: "When may you legally pass another vehicle on the right in New Jersey?",
        choices: [
          "Whenever the vehicle ahead is going below the speed limit",
          "Never, under any circumstances",
          "On a road with two or more lanes in your direction, or when the driver ahead is turning left and there is room",
          "On any road, provided you use the shoulder to get past",
        ],
        correctIndex: 2,
        explanation:
          "Passing on the right is confined to roads with more than one lane going your way where traffic is moving in two or more substantially continuous lines, or where the driver ahead is turning left and there is room to get by.",
        context:
          "Most passing is done on the left, and the exceptions above are narrow. One thing is absolute: you may never pass on the right shoulder, which the manual calls out as against the law. Improper passing on the right or off the roadway carries four points, the same as improper passing in a no-passing zone, and it is one of the most-missed point values in New Jersey.",
        trap:
          "Using the shoulder to get around a slow driver feels like a minor sin. It is a four-point moving violation, and the point value alone puts it in serious territory.",
        excerptKey: "passing-on-right",
        sourceLabel: "NJ Driver Manual - Chapter 4, Passing",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_22",
        topic: "signals",
        question:
          "Your light turns green but a car is still finishing its turn across the intersection. What do you do?",
        choices: [
          "Proceed, since the green gives you the right of way",
          "Yield to anything still in the intersection, then go",
          "Sound your horn and proceed slowly",
          "Reverse to give the other driver room",
        ],
        correctIndex: 1,
        explanation:
          "Green means go, but only after yielding to pedestrians and vehicles still inside the intersection. Most signal crashes happen in the first few seconds after a change, which is exactly this moment.",
        context:
          "A green light is a permission conditional on the intersection being clear. New Jersey extends the same yielding duty to your own turns: yield to approaching vehicles before turning left, and yield to pedestrians whichever way you turn. When a walk signal is showing, turning motorists must give way to anyone crossing on it.",
        trap:
          "Treating green as an absolute right of way is what the manual is warning against, and it is the reason it names the first few seconds as the dangerous ones.",
        excerptKey: "green-light-yield",
        sourceLabel: "NJ Driver Manual - Chapter 11, Green Light",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_23",
        topic: "emergencies",
        question: "When does New Jersey law require you to notify the police of a crash?",
        choices: [
          "Only when someone is taken to hospital",
          "Only when the damage is obviously over $5,000",
          "Only when another driver asks you to",
          "Whenever there is injury, death, or vehicle or property damage",
        ],
        correctIndex: 3,
        explanation:
          "The duty to notify police covers injury, death, and vehicle or property damage. It is not limited to serious collisions.",
        context:
          "A separate paperwork duty kicks in when property damage exceeds $500 or anyone is injured: you must send a written report to the MVC within 10 days if no police report is filed, and notify your insurer at once. If police do file a report, the written MVC report is not required. Hitting a parked car counts as a crash, so police must be told and you must try to find the owner.",
        trap:
          "The $500 figure is about the written report to the MVC, not about whether to call police. Police get told regardless of the amount.",
        excerptKey: "crash-notify-police",
        sourceLabel: "NJ Driver Manual - Chapter 5, Reporting Crashes",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_24",
        topic: "impairment",
        question:
          "You are arrested for drink driving in New Jersey and refuse the breath test. What follows?",
        choices: [
          "Penalties in their own right, including a surcharge of $1,000 a year for three years",
          "Nothing, because the test is voluntary",
          "A warning on a first refusal only",
          "The charge is dropped for lack of evidence",
        ],
        correctIndex: 0,
        explanation:
          "New Jersey has an implied consent law, so refusal is itself an offence. It brings a violation surcharge of $1,000 a year for three years, alongside loss of driving privileges, IDRC referral, fines and an interlock requirement.",
        context:
          "Implied consent means that by using New Jersey roads you have already agreed to a breath test following an arrest for an intoxicated driving offence. Refusing does not make the case go away: you will be taken to a hospital where staff may draw blood, and a first refusal conviction costs your driving privileges until an ignition interlock is installed. Failure to pay the surcharge suspends your licence indefinitely until it is paid.",
        trap:
          "Refusing to blow looks like withholding evidence. In New Jersey it creates a second offence and adds a surcharge that outlives the case.",
        excerptKey: "implied-consent",
        sourceLabel: "NJ Driver Manual - Chapter 7, Breath Test",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_25",
        topic: "signs",
        question: "What does the X-shaped crossbuck at a railroad crossing legally mean?",
        choices: [
          "Stop before crossing, always",
          "The crossing is closed to traffic",
          "Sound your horn before crossing",
          "The same as a yield sign",
        ],
        correctIndex: 3,
        explanation:
          "A crossbuck has the force of a yield sign. You must always give way to trains, which cannot swerve and cannot stop quickly.",
        context:
          "The manual splits railroad warnings into passive and active. Pavement markings, signs and crossbucks are passive; flashing red lights, ringing bells and lowered gates are active. Active devices mean a train is coming and you stop at least 15 feet back. A freight train at 55 mph needs a mile or more to stop, and trains can appear as optical illusions, closer and faster than they look.",
        trap:
          "Reading the crossbuck as a stop sign is the common error. It is a yield, and the stop obligation arrives with the active devices.",
        excerptKey: "crossbuck-yield",
        sourceLabel: "NJ Driver Manual - Chapter 11, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_26",
        topic: "safety",
        question:
          "What is the minimum tread the New Jersey manual says a tyre must have?",
        choices: [
          "1/16 inch, about the edge of a penny",
          "1/8 inch",
          "1/4 inch",
          "Any tread at all, as long as the belts are not showing",
        ],
        correctIndex: 0,
        explanation:
          "A sixteenth of an inch, which the manual compares to the edge of a penny. Below that a vehicle should not be driven.",
        context:
          "Tyres are one of the vehicle items that can fail you before you even start the road test, along with brakes, brake lights, signals, mirrors, cracked glass and tinted front windows. Worn tyres also feed directly into hydroplaning, which begins at around 35 mph on a wet surface and gets worse as tread disappears. Tyres must match, so radials should not be mixed with other types.",
        trap:
          "A bald tyre that still holds air passes the eyeball test and fails the legal one. The manual gives you a coin-edge check for a reason.",
        excerptKey: "tire-tread",
        sourceLabel: "NJ Driver Manual - Chapter 3, Car Condition",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_27",
        topic: "licensing",
        question: "How is the New Jersey knowledge test scored?",
        choices: [
          "40 questions, 32 needed",
          "25 questions, 20 needed",
          "50 questions, 40 needed",
          "50 questions, 35 needed",
        ],
        correctIndex: 2,
        explanation:
          "Fifty questions with a pass mark of 80 percent, so 40 correct answers. There is also a survey question about organ donation, which is not scored.",
        context:
          "The knowledge test is one of three screenings for a basic licence, alongside six points of ID verification and a vision test. The vision standard for a basic licence is 20/50 with or without corrective lenses, which is looser than the 20/40 demanded of commercial applicants. The MVC offers the test in a dozen languages plus American Sign Language, and headphones for an oral version.",
        trap:
          "Eighty percent of 50 is 40, so you can miss ten. The organ donation question at the end is a survey and does not count against you.",
        excerptKey: "knowledge-test-pass",
        sourceLabel: "NJ Driver Manual - Chapter 2, Test Requirements",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_28",
        topic: "rules",
        question:
          "You are approaching a stop sign where the pavement markings have worn away. Where exactly must you stop?",
        choices: [
          "Anywhere before the intersection",
          "Level with the sign itself",
          "Within five feet of the nearest crosswalk or stop line",
          "At least ten feet back, to leave room for turning traffic",
        ],
        correctIndex: 2,
        explanation:
          "New Jersey states the requirement as a complete stop at a point within five feet of the nearest crosswalk or stop line at the near side of the intersecting street.",
        context:
          "The five-foot rule pairs with the duty that follows it, which is to yield to any traffic on the intersecting street that is close enough to be an immediate hazard. Where a single solid white line does cross the road, that line is the stop point. Failing to observe a stop or yield sign is a two-point violation, and driving across private property to dodge a sign or signal is a separate offence in its own right.",
        trap:
          "Stopping level with the sign is a habit picked up from signs mounted well back from the junction. The rule measures from the crosswalk or stop line, not from the post.",
        excerptKey: "stop-within-five-feet",
        sourceLabel: "NJ Driver Manual - Chapter 4, Intersections",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_29",
        topic: "speed",
        question: "At roughly what speed can tyres start to hydroplane on a wet road?",
        choices: ["About 35 mph", "About 45 mph", "About 55 mph", "About 65 mph"],
        correctIndex: 0,
        explanation:
          "Hydroplaning can begin at about 35 mph, and the risk grows with speed. Past 55 mph the tyres may leave the surface entirely.",
        context:
          "Once the tyres are riding on a film of water, braking is virtually impossible and steering does nothing. A gust of wind, a change in road level or a small steering input can put the car into a skid. The defences are bald tyres avoided, speed reduced whenever there is heavy rain, standing water or slush, and in a downpour driving on the highest part of the road, which usually means the centre lane of a multi-lane highway.",
        trap:
          "Fifty-five is the figure at which control is effectively gone, not the figure at which the problem starts. The problem starts around 35.",
        excerptKey: "hydroplaning-35",
        sourceLabel: "NJ Driver Manual - Chapter 5, Hydroplaning",
        sourceUrl: HB,
      },
      {
        id: "nj_s2_30",
        topic: "parking",
        question:
          "Which of these is on New Jersey's list of places you may never stop or park?",
        choices: [
          "Alongside another vehicle already parked at the kerb",
          "Within 100 feet of a school entrance",
          "On any street with a posted speed limit above 35 mph",
          "Within 300 feet of a traffic signal",
        ],
        correctIndex: 0,
        explanation:
          "Double parking, meaning stopping next to a vehicle already parked at the kerb, is expressly prohibited. The other three distances are not New Jersey rules at all.",
        context:
          "The no-parking list mixes places and distances: crosswalks, sidewalks, bus stop zones, intersections, in front of public or private driveways, on bridges, elevated roadways and in tunnels, on interstate highways, in marked disabled spaces without authorisation, near properly marked street construction, and alongside a parked vehicle. Municipal ordinances can add more.",
        trap:
          "Plausible-sounding distances are the decoys here. New Jersey's actual distances are 10, 20, 25, 50 and 75 feet, and none of them concern school entrances or signals.",
        excerptKey: "no-double-parking",
        sourceLabel: "NJ Driver Manual - Chapter 4, Do Not Park",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Exam Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real MVC test sits, including the New Jersey rules that exist almost nowhere else: traffic circles with no rules, safe passing distances, and the point schedule.",
    questions: [
      {
        id: "nj_s3_01",
        topic: "rules",
        question:
          "What does the New Jersey Driver Manual say about the rules for driving in a traffic circle?",
        choices: [
          "Traffic already in the circle always has priority",
          "Traffic entering the circle always has priority",
          "The vehicle on the left always yields inside the circle",
          "There are no set rules, so signs and the established flow decide",
        ],
        correctIndex: 3,
        explanation:
          "New Jersey says plainly that there are no set rules for driving into, around and out of a traffic circle, and that common sense and caution must prevail.",
        context:
          "Priority in a New Jersey circle is decided by whatever is actually there: stop or yield signs at the entrances govern if they exist, and otherwise the historically established flow pattern usually gives priority to the major highway running through. Where you genuinely cannot tell, the manual falls back on the uncontrolled-intersection rule, which is that the vehicle on the left yields to the vehicle on the right. A roundabout, by contrast, is a modern one-way circular intersection with signage that does tell you what to do.",
        trap:
          "Every other state teaches that circulating traffic has priority, and New Jersey's older circles were built before that convention. Assuming priority is exactly how the state's circles earned their reputation.",
        commonlyMissed: true,
        excerptKey: "traffic-circle-no-rules",
        sourceLabel: "NJ Driver Manual - Chapter 4, Traffic Circle",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_02",
        topic: "sharing",
        question:
          "You are on a single-lane road behind a cyclist and want to pass. What does New Jersey's Safe Passing Law require?",
        choices: [
          "At least a four-foot safety zone, and if that is impossible, slow to 25 mph and wait",
          "At least three feet of clearance at any speed",
          "Nothing specific, as long as you do not make contact",
          "A full lane change, even on a single-lane road",
        ],
        correctIndex: 0,
        explanation:
          "Four feet is the measured minimum on a single-lane road. Where the road will not give you four feet, you slow to 25 mph and stay back until you can pass safely.",
        context:
          "The Safe Passing Law protects vulnerable road users, which includes cyclists, skateboarders, inline skaters and pedestrians. It has three steps in order: obey existing no-passing and speed rules and move over a lane if one exists; on a single lane leave four feet; and if four feet is not available, drop to 25 mph and be ready to stop. Causing bodily injury by ignoring it costs $500 and two points; without injury it is a $100 fine and no points.",
        trap:
          "Three feet is the figure in many other states and it is the answer people give. New Jersey uses four, and it attaches a speed of 25 mph to the case where four is impossible.",
        commonlyMissed: true,
        excerptKey: "safe-passing-four-feet",
        sourceLabel: "NJ Driver Manual - Chapter 8, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_03",
        topic: "licensing",
        question:
          "How many points on a New Jersey driving record trigger a notice of scheduled suspension?",
        choices: ["6", "8", "10", "12"],
        correctIndex: 3,
        explanation:
          "Reaching 12 points brings a notice of scheduled suspension from the MVC. Between 12 and 14 points in a 24-month period you may be offered a Driver Improvement Program instead.",
        context:
          "Two separate thresholds sit in the point system and they are easy to merge. Six or more points within three years triggers a money penalty, a surcharge of $150 plus $25 for each point above six, payable annually for three years. Twelve points triggers suspension. Points come off at up to three a year for a clean year, two for a defensive driving course once every five years, and three for a Driver Improvement Program.",
        trap:
          "Six points is the surcharge threshold, not the suspension threshold. Reaching six costs you money; reaching twelve costs you the licence.",
        excerptKey: "points-12-notice",
        sourceLabel: "NJ Driver Manual - Chapter 7, Driver Improvement Program",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_04",
        topic: "signals",
        question: "A green turn arrow changes to a yellow arrow. What is it telling you?",
        choices: [
          "The turn is now unprotected but still permitted indefinitely",
          "You must complete the turn immediately whatever the traffic",
          "The signal is changing from green to red and you have a chance to stop safely",
          "Oncoming traffic has been given a green",
        ],
        correctIndex: 2,
        explanation:
          "A yellow arrow means the signal is changing from green to red and is giving you the chance to stop safely. It is the arrow equivalent of a steady yellow ball.",
        context:
          "New Jersey positions signal heads predictably so you can read them at a glance: hung vertically, red is on top, yellow in the middle, green third and any green arrow at the bottom. Hung horizontally, red is always on the left. A green arrow, whether alone or beside a red, permits only the movement it shows, and you still yield to pedestrians while making it.",
        trap:
          "Reading a yellow arrow as permission to keep turning is the same error as reading a steady yellow as caution. Both are stopping instructions with an exception for being too close.",
        excerptKey: "yellow-arrow",
        sourceLabel: "NJ Driver Manual - Chapter 11, Yellow Light",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_05",
        topic: "speed",
        question:
          "What speed limit applies in a New Jersey suburban business or residential district with no sign posted?",
        choices: ["25 mph", "30 mph", "45 mph", "35 mph"],
        correctIndex: 3,
        explanation:
          "Suburban business and residential districts sit at 35 mph. Ordinary business and residential districts, and school zones, sit at 25.",
        context:
          "The word suburban is doing all the work here and it is the only thing separating the 25 and 35 rungs of New Jersey's unposted ladder. Above them come 50 mph on non-posted rural roadways, then 55 and 65 mph on certain state highways and interstates where posted. In every case the posted figure is a maximum and the conditions rule takes precedence over it.",
        trap:
          "Twenty-five and 35 both describe business and residential districts, which is why they are so often swapped. Suburban is the 35 case.",
        excerptKey: "speed-limits-table",
        sourceLabel: "NJ Driver Manual - Chapter 4, Speed Control",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_06",
        topic: "safety",
        question:
          "You normally hold a three-second gap. Heavy rain sets in. What does the manual want you to do?",
        choices: [
          "Increase the interval to four seconds or more",
          "Keep three seconds but reduce speed by 10 mph",
          "Switch to counting two car lengths per 10 mph",
          "Keep three seconds, since the rule already allows for weather",
        ],
        correctIndex: 0,
        explanation:
          "Bad weather takes the interval to four seconds or more. On a snow-covered road it goes to six seconds or more.",
        context:
          "The three-seconds-plus rule is called plus for exactly this reason: three seconds is the fair-weather floor, not a fixed number. The manual's car-length table pushes the same way, showing two car lengths at 20 mph in ideal conditions, four on wet pavement or gravel, six on packed snow and twelve on ice. Stopping distance is perception plus reaction plus braking, and only the reaction part is under your direct control.",
        trap:
          "Slowing down without lengthening the gap addresses only half the problem. Wet pavement roughly doubles the space you need at any given speed.",
        excerptKey: "bad-weather-four-seconds",
        sourceLabel: "NJ Driver Manual - Chapter 5, Three Seconds-Plus Rule",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_07",
        topic: "parking",
        question:
          "How far from a fire station driveway must you keep clear when parking on the same side of the street?",
        choices: ["10 feet", "20 feet", "50 feet", "75 feet"],
        correctIndex: 1,
        explanation:
          "Twenty feet from the driveway entrance on the same side, and 75 feet on the street opposite the entrance. The two figures go together.",
        context:
          "Fire access generates three separate New Jersey distances. Twenty feet from a fire station driveway, 75 feet opposite one, and 10 feet from a fire hydrant. On top of those, you may never park within 200 feet of a fire department vehicle that is in service, and you may not drive over a fire hose unless an official directs you to.",
        trap:
          "Seventy-five feet is the opposite-side figure and is offered here to catch anyone who has learned only one number from the pair.",
        excerptKey: "no-park-fire-station",
        sourceLabel: "NJ Driver Manual - Chapter 4, Do Not Park",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_08",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and a train is coming. Which way do you run?",
        choices: [
          "Straight back along the tracks, away from the train",
          "Directly away from the tracks at right angles",
          "Stay in the vehicle and brace for impact",
          "At a 45-degree angle away from the car, toward the direction the train is coming from",
        ],
        correctIndex: 3,
        explanation:
          "Away from the vehicle at 45 degrees, and toward the train rather than away from it. Running that way puts you behind the point of impact instead of in the path of the debris.",
        context:
          "The instruction is counter-intuitive and that is why the manual spells it out. If no train is coming you still get everyone out and well clear before doing anything else, then call the number on the Emergency Notification sign at the crossing, or 911. Never try to move the vehicle, and never enter a crossing unless there is room to clear the far side, since a train overhangs the rails by three feet or more on each side.",
        commonlyMissed: true,
        trap:
          "Running away from the train is the instinct. The debris travels in the direction the train is moving, so fleeing that way keeps you in front of it.",
        excerptKey: "stalled-tracks-45-degrees",
        sourceLabel: "NJ Driver Manual - Chapter 5, Stalling on Railroad Tracks",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_09",
        topic: "impairment",
        question:
          "What is the violation surcharge for refusing a breath test in New Jersey?",
        choices: [
          "$250 a year for three years",
          "$1,000 a year for three years",
          "A single payment of $500",
          "There is no surcharge for refusal",
        ],
        correctIndex: 1,
        explanation:
          "Refusal carries a surcharge of $1,000 a year for three years, which is the same rate as a first or second DWI.",
        context:
          "Surcharges sit apart from court fines and are payable to the MVC regardless of anything the court orders. The published rates are $100 a year for an unlicensed or expired-licence driver, $250 a year for driving while suspended or for operating an uninsured vehicle, $1,000 a year for DWI or refusal, and $1,500 a year for a third DWI within three years. Failing to pay suspends the licence until it is cleared, and unpaid balances go to the Superior Court as judgments.",
        trap:
          "Refusal is priced identically to a conviction, which removes any advantage in refusing. Standard point reductions never apply to surcharges.",
        excerptKey: "refusal-surcharge",
        sourceLabel: "NJ Driver Manual - Chapter 7, Breath Test",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_10",
        topic: "rightOfWay",
        question:
          "You are joining an expressway on a weave lane, where the on-ramp and the off-ramp share the same stretch. Who yields?",
        choices: [
          "The exiting driver, because you have less room",
          "Whoever is travelling faster",
          "Neither, because the lane is designed for it",
          "You do, because entering traffic yields to traffic leaving the expressway",
        ],
        correctIndex: 3,
        explanation:
          "On a weave lane the driver entering from the ramp yields to the driver leaving the expressway. The exiting driver has already committed to the manoeuvre.",
        context:
          "Weave lanes are common on New Jersey's older parkways and turnpike interchanges, where an entrance and an exit share one auxiliary lane. Elsewhere on a highway the ordinary rule stands: traffic on the acceleration lane yields to traffic already on the main road, and you should reach the flow's speed rather than stopping in the acceleration lane. If you miss your exit, you go on to the next one rather than backing up.",
        trap:
          "Assuming entering traffic always has the harder job and therefore priority gets the rule backwards. Entering traffic yields in both the ordinary case and the weave case.",
        excerptKey: "weave-lane",
        sourceLabel: "NJ Driver Manual - Chapter 4, Weave Lane",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_11",
        topic: "signs",
        question:
          "A yellow sign warns of a curve ahead and carries a smaller sign underneath reading 30. What is that 30?",
        choices: [
          "A new legal speed limit that replaces the posted limit",
          "A minimum speed for the curve",
          "The distance in yards to the curve",
          "An advisory speed for the curve, used because the safe speed is below the posted limit",
        ],
        correctIndex: 3,
        explanation:
          "It is an advisory speed, posted where the maximum safe speed round a curve is lower than the limit for that road. It goes with a warning sign, never on its own.",
        context:
          "Advisory speeds are not themselves enforceable limits, but ignoring one puts you squarely inside New Jersey's conditions rule, which forbids driving faster than the road safely allows regardless of what is posted. The manual asks you to slow before entering a curve rather than braking in it, and to watch for oncoming vehicles drifting wide out of the bend.",
        trap:
          "Treating an advisory number as the new legal limit means you could be cited for careless driving at a speed that looked posted and lawful.",
        excerptKey: "advisory-speed-sign",
        sourceLabel: "NJ Driver Manual - Chapter 11, Sign Colors and Shapes",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_12",
        topic: "rules",
        question:
          "Visibility on the road has dropped to about 400 feet because of mist. What does New Jersey require?",
        choices: [
          "Hazard lights on and speed reduced",
          "Fog lights only",
          "Headlights on, because the threshold is 500 feet or less",
          "Nothing, unless it is after sunset",
        ],
        correctIndex: 2,
        explanation:
          "Five hundred feet is the statutory threshold. Once visibility falls to 500 feet or less, the headlights must be on regardless of the time of day.",
        context:
          "New Jersey lists four separate triggers for headlights: the half-hour windows around sunset and sunrise, visibility of 500 feet or less, wipers running for rain, snow or ice, and fog, mist or smoke. In fog itself the manual wants low beams, not high, because high beams reflect back off the water droplets. Fog lights may supplement low beams but never replace headlights.",
        trap:
          "Reaching for the high beams in fog makes visibility worse, not better, and the manual says low beam explicitly.",
        excerptKey: "headlights-when-required",
        sourceLabel: "NJ Driver Manual - Chapter 4, Using Headlights",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_13",
        topic: "sharing",
        question:
          "You have just overtaken a tractor-trailer on a highway. When may you move back in front of it?",
        choices: [
          "As soon as your rear bumper clears its front bumper",
          "Once the whole front of the truck is visible in your rear-view mirror",
          "Immediately, since the truck driver can see you",
          "After signalling, whatever the gap",
        ],
        correctIndex: 1,
        explanation:
          "Wait until the whole front of the truck shows in your rear-view mirror. Anything closer puts you inside the front no-zone, where the driver simply cannot see you.",
        context:
          "Large vehicles have blind spots on all four sides, and the manual calls them no-zones. The rear no-zone extends around 200 feet behind; the front no-zone covers 10 to 20 feet; the sides are long and deep. A truck needs up to 25 percent more distance to stop in bad weather, may swing wide left to make a right turn, and you should never pass one on the right.",
        trap:
          "Judging the gap from your own bumper rather than from the mirror is what puts cars in front of trucks that cannot stop for them.",
        excerptKey: "truck-front-no-zone",
        sourceLabel: "NJ Driver Manual - Chapter 8, Front No-Zone",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_14",
        topic: "licensing",
        question:
          "May a New Jersey GDL permit or probationary licence holder use a hands-free phone while driving?",
        choices: [
          "Yes, hands-free is always permitted",
          "Yes, but only when a supervising driver is in the car",
          "Yes, for calls but not for navigation",
          "No, hands-free is banned for GDL holders as well as hand-held",
        ],
        correctIndex: 3,
        explanation:
          "GDL holders may not use a hand-held or hands-free phone, or any other hand-held electronic device, at the wheel. The exemption that fully licensed drivers get does not apply to them.",
        context:
          "New Jersey's general phone law bans hand-held use as a primary offence and permits hands-free, with fines running $200 to $400 for a first offence and rising to $600 to $800 by the third within ten years, plus three points on a third or subsequent conviction. The GDL rule is stricter and simply removes the hands-free exception. Breaching it is a GDL violation carrying a $100 fine.",
        trap:
          "Knowing that New Jersey permits hands-free is exactly what leads GDL holders into the violation. The permission stops at the general licence.",
        commonlyMissed: true,
        excerptKey: "cell-phone-gdl",
        sourceLabel: "NJ Driver Manual - Chapter 4, Cellular Telephones",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_15",
        topic: "safety",
        question: "How far ahead does the New Jersey manual want you looking in city traffic?",
        choices: [
          "At least 12 seconds",
          "At least 4 seconds",
          "One block, regardless of speed",
          "As far as your headlights reach",
        ],
        correctIndex: 0,
        explanation:
          "Twelve seconds, meaning you should be able to see an object far enough ahead that it takes at least twelve seconds to reach it. At 25 mph on a clear city street that is about a block.",
        context:
          "Looking twelve seconds ahead is a different task from keeping a three-second following distance: one is about spotting problems, the other about having room to react to them. In heavy traffic the manual wants you slower, because reducing speed is how you buy back time. It also asks you to check the intersections ahead while you are still mid-block, and to be at your lowest speed as you reach a crosswalk.",
        trap:
          "One block is only the right answer at about 25 mph, which is why the manual states the rule in seconds rather than distance.",
        excerptKey: "look-12-seconds",
        sourceLabel: "NJ Driver Manual - Chapter 5, City Driving",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_16",
        topic: "parking",
        question:
          "How close to a crosswalk at an intersection may you park in New Jersey?",
        choices: ["10 feet", "No closer than 25 feet", "30 feet", "50 feet"],
        correctIndex: 1,
        explanation:
          "Twenty-five feet from a crosswalk at an intersection, or from the sideline of a street, with an exception for alleys.",
        context:
          "This distance exists to preserve sight lines between drivers and people on foot, and it is echoed by two related rules. Parking in a crosswalk is banned outright, and stopping with any part of the vehicle inside the crosswalk area while waiting at a red light or stop sign is a violation in its own right. On a multi-lane road you are asked to stop about 30 feet before a crosswalk so the driver in the next lane can see who is crossing.",
        trap:
          "Twenty-five and 50 feet are both on the list, one for crosswalks and one for stop signs and railroad crossings. Swapping them is the standard mistake.",
        excerptKey: "no-park-crosswalk-25",
        sourceLabel: "NJ Driver Manual - Chapter 4, Do Not Park",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_17",
        topic: "speed",
        question: "What is a Safe Corridor in New Jersey?",
        choices: [
          "A stretch of state highway where fines are doubled because of its crash record",
          "A lane reserved for buses and carpools",
          "A protected route for pedestrians near schools",
          "A section of highway with a raised minimum speed",
        ],
        correctIndex: 0,
        explanation:
          "Safe Corridors are designated stretches of state highway where fines are doubled for offences including speeding and aggressive driving.",
        context:
          "Designation is data-driven: a road qualifies when its crash rate runs 50 percent above the state rate and it has recorded 1,000 or more crashes over three years. The Commissioner of Transportation can add corridors and can remove those that improve. It is the third of New Jersey's fine-doubling regimes, alongside 65 mph zones at 10 mph or more over, and construction zones with no threshold at all.",
        trap:
          "The name suggests a protective zone for pedestrians or cyclists. It is an enforcement designation attached to a crash record.",
        excerptKey: "safe-corridors",
        sourceLabel: "NJ Driver Manual - Chapter 4, Safe Corridors",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_18",
        topic: "signals",
        question:
          "A steady white walking figure is showing for pedestrians as you wait to turn. What does New Jersey require of you?",
        choices: [
          "Nothing, since your green arrow protects the turn",
          "Yield to pedestrians crossing on that signal and to anyone in the crosswalk",
          "Proceed if you can clear the crossing before they reach your lane",
          "Sound your horn to establish who is going first",
        ],
        correctIndex: 1,
        explanation:
          "State law requires turning motorists to yield to pedestrians crossing on the walk signal and to anyone already in the crosswalk. The turn arrow does not change that.",
        context:
          "The pedestrian signals pair up. The steady white figure or countdown means pedestrians may cross and turning drivers must give way. The orange raised palm means pedestrians should not leave the kerb, though anyone already in the road gets time to finish. Countdown timers do not authorise you to nip through as the numbers run down, because whoever is still in the crosswalk keeps the right of way.",
        trap:
          "A protected green arrow removes conflicting traffic, not people on foot. This is the intersection failure that produces the most pedestrian injuries.",
        excerptKey: "pedestrian-signal-white",
        sourceLabel: "NJ Driver Manual - Chapter 11, Pedestrian Signals",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_19",
        topic: "emergencies",
        question:
          "You have stopped on a highway shoulder with a breakdown and want to set out warning devices. Where does the second one go?",
        choices: [
          "About 50 feet behind the vehicle",
          "At least 300 feet back, roughly 120 paces",
          "150 feet ahead of the vehicle",
          "Directly beside the driver's door",
        ],
        correctIndex: 1,
        explanation:
          "One flare or warning device goes just behind the car and the second at least 300 feet back, which the manual converts to about 120 paces.",
        context:
          "Three hundred feet appears twice in the manual, for warning devices behind a breakdown and for the distance you keep behind a signalling emergency vehicle. The rest of the breakdown routine is to raise the hood, turn on the flashers, tie something white to the antenna or door handle if you need help, and never stand behind the vehicle at night where you block your own taillights.",
        trap:
          "Fifty feet is not enough at highway speed. A driver doing 60 mph covers 88 feet every second, so 300 feet buys barely three seconds of warning.",
        excerptKey: "emergency-stop-300-feet",
        sourceLabel: "NJ Driver Manual - Chapter 5, Emergency Stops",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_20",
        topic: "impairment",
        question:
          "At what reading will an ignition interlock device stop a car from starting?",
        choices: [
          "0.01 percent",
          "0.02 percent",
          "Above 0.05 percent",
          "0.08 percent",
        ],
        correctIndex: 2,
        explanation:
          "The interlock has a built-in breathalyser and prevents the vehicle starting if the driver's BAC exceeds 0.05 percent, well below the 0.08 offence threshold.",
        context:
          "Interlock periods are graded by the reading at the original offence. A first offence between 0.08 and 0.10 brings three months from restoration; 0.10 to 0.15 brings seven months to a year; 0.15 or higher brings the device during the suspension and for 12 to 15 months after restoration. A refusal brings 9 to 15 months after restoration, and a second or subsequent offence brings two to four years.",
        trap:
          "The interlock is not calibrated to the legal limit. It cuts in at 0.05, which is roughly the point at which the manual says crash risk has already doubled.",
        excerptKey: "interlock-0-05",
        sourceLabel: "NJ Driver Manual - Chapter 7, Ignition Interlock Device",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_21",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light with no arrow. A pedestrian steps into the crosswalk you are turning across. What must you do?",
        choices: [
          "Yield to oncoming traffic and stop for the pedestrian in the crosswalk",
          "Complete the turn quickly, since the pedestrian can wait",
          "Yield to oncoming traffic only, because the green covers the crossing",
          "Reverse out of the intersection",
        ],
        correctIndex: 0,
        explanation:
          "Both duties apply at once. You yield to oncoming traffic before turning and you stop for pedestrians in the crosswalk you are crossing.",
        context:
          "An unprotected left is the manoeuvre with the most competing obligations in the manual: oncoming vehicles, cyclists and motorcycles in that oncoming stream, and pedestrians on the far crosswalk. If two vehicles facing each other are both turning left, each turns to the left of the centre of the intersection. Improper right or left turning is a three-point violation.",
        trap:
          "Once the gap in oncoming traffic finally arrives, the urge is to take it and worry about the crosswalk afterwards. That is precisely the sequence the rule forbids.",
        excerptKey: "left-turn-yield",
        sourceLabel: "NJ Driver Manual - Chapter 4, Intersections",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_22",
        topic: "rules",
        question: "You have driven past your exit on the Garden State Parkway. What should you do?",
        choices: [
          "Carry on to the next exit",
          "Reverse carefully along the deceleration lane",
          "Cross the median at the next opening",
          "Stop on the shoulder and wait for a gap to back up",
        ],
        correctIndex: 0,
        explanation:
          "Go on to the next exit. Backing up on an exit ramp or deceleration lane is expressly forbidden, and using the median strip is its own offence.",
        context:
          "New Jersey names the parkway, turnpike and Atlantic City Expressway specifically in its point schedule: moving against traffic on them costs two points, unlawful use of the median strip two points, and improper passing four. On any highway the manual's exit advice is to slow only after you are in the deceleration lane, obey the ramp's advisory speed, and never stop in the entry or exit lanes.",
        trap:
          "Missing an exit costs a few minutes. Backing up on a ramp is how head-on collisions happen at closing speeds nobody expects.",
        excerptKey: "no-backing-on-ramp",
        sourceLabel: "NJ Driver Manual - Chapter 4, Leaving Highways, Parkways, and Turnpikes",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_23",
        topic: "signs",
        question:
          "You come up behind a vehicle displaying a fluorescent orange triangle. What does it mean?",
        choices: [
          "The vehicle is carrying hazardous materials",
          "The vehicle is a student driver",
          "The vehicle is slow-moving, such as farm or construction equipment",
          "The vehicle is disabled and being towed",
        ],
        correctIndex: 2,
        explanation:
          "The orange triangle marks a slow-moving vehicle such as farm or construction equipment operating on a public highway. Its operator must still obey all the traffic rules.",
        context:
          "The emblem exists because closing speed is the danger: a driver at 55 mph coming up on a tractor at 15 mph has very little time to react. New Jersey also asks for extra care in farm country and open land where livestock or deer may cross, and its general advice on animals is to slow rather than swerve, because swerving is what turns a near miss into a collision.",
        trap:
          "Orange is also the construction and maintenance colour, which makes people read the triangle as a work-zone marker rather than a speed warning.",
        excerptKey: "slow-moving-vehicle-sign",
        sourceLabel: "NJ Driver Manual - Chapter 11, Special Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_24",
        topic: "sharing",
        question:
          "You are coming up behind a horse-drawn carriage on a New Jersey road. What does the law require?",
        choices: [
          "Nothing specific, beyond passing wide",
          "Sound your horn to alert the driver",
          "Stop until the carriage leaves the roadway",
          "Reduce speed to 25 mph or less and proceed with caution",
        ],
        correctIndex: 3,
        explanation:
          "Motorists must reduce speed to 25 mph or less when approaching or passing a horse-drawn vehicle or a horseback rider, and proceed with caution.",
        context:
          "There is a second obligation that surprises people: if a rider or carriage driver coming the other way puts up a hand or otherwise signals, you must stop and remain stationary for as long as it takes the horse to pass. Horse-drawn vehicles have the same rights and responsibilities as motor vehicles on public roads, must keep as far right as possible, and must show a light in the same conditions that require your headlights.",
        commonlyMissed: true,
        trap:
          "Sounding the horn is the worst available option next to a horse, and it is not what the statute asks for. The statute asks for 25 mph.",
        excerptKey: "horse-25-mph",
        sourceLabel: "NJ Driver Manual - Chapter 8, Horseback Riders & Horse-Drawn Vehicles",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_25",
        topic: "safety",
        question: "When may studded snow tyres be used in New Jersey?",
        choices: [
          "Between 15 November and 1 April",
          "Between 1 October and 30 April",
          "Between 1 December and 15 March",
          "At any time of year",
        ],
        correctIndex: 0,
        explanation:
          "New Jersey allows studded snow tyres from 15 November to 1 April. Outside that window they are not permitted.",
        context:
          "The manual is equally clear about what snow tyres do and do not achieve: they improve traction for starting, steering and stopping in snow, but they do not grip well on ice. Chains are the best answer on ice and in hard-packed or deep snow. In snow and ice generally, an anti-lock system wants steady pressure on the pedal and no pumping, and a locked conventional brake needs releasing and reapplying more gently.",
        commonlyMissed: true,
        trap:
          "The dates are specific and easy to approximate wrongly. It is 15 November, not 1 November, and 1 April, not 15 April.",
        excerptKey: "studded-tires-dates",
        sourceLabel: "NJ Driver Manual - Chapter 5, Snow and Ice",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_26",
        topic: "licensing",
        question:
          "You have a crash causing about $900 of damage and no police report is filed. What must you do?",
        choices: [
          "Nothing, since no one was hurt",
          "Report it to your insurer only",
          "Send a written report to the MVC within 10 days",
          "Send a written report to the MVC within 30 days",
        ],
        correctIndex: 2,
        explanation:
          "Where damage exceeds $500 or anyone is injured, a written report goes to the MVC within 10 days if no police report has been filed. You must also notify your insurer at once.",
        context:
          "The two duties are separate. Police must be notified of any crash involving injury, death, or vehicle or property damage, with no dollar threshold at all. The written MVC report is the follow-up, and it is only required when the police have not filed one of their own. Leaving the scene of a crash costs two points where there is no personal injury and eight where there is, the heaviest single entry on the schedule.",
        trap:
          "Thirty days is the deadline in several other states. New Jersey gives you ten.",
        excerptKey: "crash-report-10-days",
        sourceLabel: "NJ Driver Manual - Chapter 5, Reporting Crashes",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_27",
        topic: "speed",
        question:
          "Above roughly what speed does the manual say tyres may leave the road surface entirely on standing water?",
        choices: ["35 mph", "45 mph", "55 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Past 55 mph the tyres may lift off the surface completely, at which point braking is virtually impossible and steering does nothing at all.",
        context:
          "Hydroplaning is a progression rather than a switch. It can begin at about 35 mph, the risk rises with speed, and beyond 55 mph the contact patch may be gone. Once you are hydroplaning, a gust of wind, a change in road level or a small steering input is enough to start a skid. Worn tyres bring the onset speed down, which is why the tread minimum and this rule belong together.",
        trap:
          "Thirty-five is the onset figure, offered here as the decoy, because both numbers come from the same paragraph.",
        excerptKey: "hydroplaning-55",
        sourceLabel: "NJ Driver Manual - Chapter 5, Hydroplaning",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_28",
        topic: "rules",
        question:
          "You drive off with six inches of snow still on the roof of your car, and none of it comes off. Have you broken New Jersey law?",
        choices: [
          "No, the offence needs snow or ice to actually come off",
          "No, provided the windows and mirrors are clear",
          "Only if a police officer sees the snow move",
          "Yes, and the fine is $25 to $75 whether anything dislodges or not",
        ],
        correctIndex: 3,
        explanation:
          "The removal duty is free-standing. You must make all reasonable efforts to clear ice and snow from the hood, trunk, roof and windshield before driving, and failing to do so is $25 to $75 regardless of whether anything comes off.",
        context:
          "A second and much heavier penalty applies if snow or ice does dislodge and causes injury or property damage: $200 to $1,000 for a private vehicle and $500 to $1,500 for a commercial one, with the manual noting fines up to $1,500 in that situation. The two penalties stack conceptually, since one is about the state of your vehicle and the other about the consequence.",
        trap:
          "Clearing only the glass is what most people do and it is not what the statute asks. The hood, trunk and roof are named individually.",
        excerptKey: "snow-ice-fine",
        sourceLabel: "NJ Driver Manual - Chapter 3, Snow and Ice",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_29",
        topic: "signals",
        question:
          "Flashing red lights are showing at a railroad crossing but you can see no train. When may you cross?",
        choices: [
          "As soon as you have stopped and looked both ways",
          "Only once the gates are up, the bells have stopped and the lights have stopped flashing",
          "After waiting thirty seconds",
          "As soon as the gates begin to rise",
        ],
        correctIndex: 1,
        explanation:
          "You wait for all three: gates fully raised, bells silent and lights no longer flashing. Trains can appear as optical illusions, closer and faster than they seem.",
        context:
          "A flashing red at a road intersection behaves like a stop sign and lets you go when safe, but a flashing red at a railroad crossing means a train is approaching and there is nothing to judge. Crossings may carry several devices at once, and a second train can be following the first on another track. Improper crossing of a railroad grade crossing is a two-point violation.",
        trap:
          "Applying the road-intersection version of a flashing red to a railroad crossing is the error, and it is the one the manual writes a separate paragraph to prevent.",
        excerptKey: "railroad-wait-for-gates",
        sourceLabel: "NJ Driver Manual - Chapter 4, Stop at Railroad Crossings",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_30",
        topic: "emergencies",
        question:
          "Your conventional disc and drum brakes suddenly fail. What does the manual tell you to try first?",
        choices: [
          "Pull the parking brake hard and hold it",
          "Shift to a lower gear and pump the brake pedal fast and hard several times",
          "Switch off the ignition to slow the engine",
          "Steer into the kerb to scrub off speed",
        ],
        correctIndex: 1,
        explanation:
          "Lower gear first, then pump the pedal fast and hard several times to try to build pressure. Only if that fails do you use the parking brake, holding the release so you can let go if the rear wheels lock.",
        context:
          "The manual's emergency sequences are all about not making things worse. Turning the ignition to lock while moving will lock the steering. On a blowout you hold the wheel straight, lift off the accelerator and let the car coast rather than braking. If the hood flies up you slow immediately and steer by the lane markings visible under or beside it.",
        trap:
          "Yanking the parking brake on straight away is likely to lock the rear wheels and put you into a skid, which is why it is the second step and comes with the release held.",
        excerptKey: "brake-failure",
        sourceLabel: "NJ Driver Manual - Chapter 5, Brake Failure",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_31",
        topic: "rightOfWay",
        question:
          "You are pulling out of a private driveway onto a main road. Who has priority?",
        choices: [
          "All traffic on the main road, and you yield to it",
          "You do, once your bonnet is past the kerb line",
          "Whoever is closer to the junction",
          "Traffic from the left only",
        ],
        correctIndex: 0,
        explanation:
          "A driver coming from a private road or driveway yields to all traffic on the main road. The same applies coming out of an alley or a building.",
        context:
          "New Jersey also requires you to stop before crossing a sidewalk when leaving a driveway or alley, and failing to do so carries two points, as does failing to yield to pedestrians or vehicles while entering or leaving a highway. The rule has no reciprocity: emerging traffic never acquires priority by inching out, and there is no equivalent of the right-hand rule here.",
        trap:
          "Nosing out until oncoming drivers have to react is a technique, not a right of way. The obligation stays with you until you are in the traffic stream.",
        excerptKey: "driveway-yield",
        sourceLabel: "NJ Driver Manual - Chapter 4, Uncontrolled Intersections",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_32",
        topic: "impairment",
        question:
          "A 20-year-old is convicted of a first underage drink-driving offence at 0.04 percent. What does New Jersey impose?",
        choices: [
          "A fine only",
          "A one-year suspension",
          "A 30 to 90 day suspension, 15 to 30 days of community service and an alcohol programme",
          "A written warning on a first offence",
        ],
        correctIndex: 2,
        explanation:
          "The underage penalty is a 30 to 90 day suspension, 15 to 30 days of community service and participation in an IDRC or an alcohol education and highway safety programme.",
        context:
          "If the person is not yet licensed, the suspension starts on the day they first become eligible for a licence, so it cannot be waited out. Underage drinking in a licensed premises brings its own $500 fine and licence loss under the alcoholic beverage law. Anyone charged with an alcohol-related traffic offence must be detained at one of New Jersey's county Intoxicated Driver Resource Centres.",
        trap:
          "The underage penalty is not a lesser version of the adult one, it is a different structure built around suspension and community service rather than fines.",
        excerptKey: "underage-first-offense",
        sourceLabel: "NJ Driver Manual - Chapter 7, Underage Offense",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_33",
        topic: "sharing",
        question:
          "You are on a dual-lane highway with a raised median, and a school bus on the other side of the median stops with red lights flashing. What must you do?",
        choices: [
          "Stop until the lights go off",
          "Stop at least 25 feet from the median",
          "Slow to 10 mph and continue with care",
          "Nothing at all, since a median removes the duty entirely",
        ],
        correctIndex: 2,
        explanation:
          "On a dual-lane highway, a driver on the far side of a safety island or raised median slows to 10 mph rather than stopping.",
        context:
          "New Jersey grades this rule by road type rather than giving one answer. On a two-lane road, a multi-lane highway divided only by painted lines, or a privately maintained road, you stop at least 25 feet away. On a dual-lane highway with a physical median and you on the other side, it is 10 mph. Directly in front of a school, both directions may pass at no more than 10 mph. Improper passing of a school bus is a five-point violation.",
        commonlyMissed: true,
        trap:
          "The frozen dessert truck rule does drop away entirely on the far side of a median, which is why people transfer that exemption to school buses. For a school bus the duty becomes 10 mph, not nothing.",
        excerptKey: "school-bus-divided-10",
        sourceLabel: "NJ Driver Manual - Chapter 4, Stop for School Buses",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_34",
        topic: "parking",
        question:
          "Traffic is heavy and there is no space at the kerb, so you stop alongside a parked car with your hazards on while a passenger runs into a shop. Is that legal in New Jersey?",
        choices: [
          "No, double parking is on the list of places you may never stop or park",
          "Yes, if the hazards are on",
          "Yes, for up to five minutes",
          "Yes, provided the engine is running and you stay at the wheel",
        ],
        correctIndex: 0,
        explanation:
          "Stopping next to a vehicle already parked at the kerb is double parking, and it appears on the list of places where you may never stop or park. Hazard lights change nothing.",
        context:
          "The list allows only two escapes, a direction from a police officer and avoiding a crash. Hazard lights themselves are treated as an emergency device in New Jersey and are grouped with spotlights as something not to be used for ordinary driving purposes. The idling limit is a separate trap: leaving the engine running for more than three consecutive minutes is prohibited, with fines of $250 to $1,000.",
        trap:
          "Hazard lights are widely treated as a licence to stop anywhere. They are not, and the manual reserves them for genuine emergencies.",
        excerptKey: "no-double-parking",
        sourceLabel: "NJ Driver Manual - Chapter 4, Do Not Park",
        sourceUrl: HB,
      },
      {
        id: "nj_s3_35",
        topic: "signs",
        question:
          "What do New Jersey's regulatory signs generally look like?",
        choices: [
          "Yellow diamonds with black symbols",
          "Rectangles taller than they are wide, with black wording on white",
          "Orange squares with black lettering",
          "Green rectangles with white lettering",
        ],
        correctIndex: 1,
        explanation:
          "Regulatory signs are generally rectangular with the longer dimension vertical, and they carry black wording and a black border on a white background.",
        context:
          "STOP, YIELD and DO NOT ENTER are the exceptions that use their own shapes and colours, which is why the manual lists them separately. Everything else that regulates speed or movement, from speed limits to parking restrictions to turn prohibitions, uses the white vertical rectangle. Road markings carry the same force of law as these signs, which is a point the manual makes explicitly.",
        trap:
          "The yellow diamond warns and the green rectangle guides. Neither regulates, and only regulatory signs create an offence by themselves.",
        excerptKey: "sign-categories",
        sourceLabel: "NJ Driver Manual - Chapter 11, Regulatory Signs",
        sourceUrl: HB,
      },
    ],
  },
];
