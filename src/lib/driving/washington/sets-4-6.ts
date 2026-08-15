import type { DrivingTestSet } from "../types";

// Sources and method are as described at the head of sets-1-3.ts: the
// Washington State Driver Guide (DOL, (c) 2025) read from DOL's text-only
// edition, two dol.wa.gov pages, and the sections of RCW Title 46 carrying
// rules the guide states incompletely or not at all.
//
// Three rules are deliberately NOT tested on their numbers, because the
// official sources disagree with each other and a learner cannot be marked
// wrong for following either one.
//
//  - Licence sanction for refusing a breath test. The guide gives 90 to 730
//    days, or until age 21, whichever is longer. RCW 46.20.308 gives at least
//    one year. Questions here test that refusal carries a licence penalty and
//    leave the length alone.
//  - Passing a bicyclist by crossing the centre line. The guide tells you to
//    move into the other lane when nothing is coming and, a few lines later,
//    never to cross into oncoming traffic to pass a bicyclist. Questions here
//    test the three-foot minimum and the rule against sharing a lane, both of
//    which the guide states without contradicting itself.
//  - The oncoming-traffic exception to the school bus stop arm, where the
//    guide reads as requiring three or more lanes AND a median while
//    RCW 46.61.370 makes those two independent exceptions. Nothing here turns
//    on a multi-lane undivided road, which is the only case they disagree on.
//
// One widely repeated non-rule is worth naming: Washington has no
// wipers-on/headlights-on law. The guide offers rain and snow as a memory aid
// for switching lights on; the legal triggers in RCW 46.37.020 are the half
// hour after sunset to half hour before sunrise window and the thousand-foot
// visibility standard. A question below tests exactly that distinction.
const HB =
  "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only";
const TEST =
  "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/do-i-need-take-test";
const rcw = (cite: string) => `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`;

export const washingtonSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Speed, Space and Conditions",
    difficulty: "medium",
    description:
      "Washington weather is a driving hazard in its own right. Stopping distances, following distance, black ice, hydroplaning, and the speed rules the guide never puts a number to.",
    questions: [
      {
        id: "wa_s4_01",
        topic: "speed",
        question:
          "There is no posted speed limit on the city street you are driving. What does Washington law set as the maximum?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 1,
        explanation:
          "City and town streets default to 25 mph. The absence of a sign is not the absence of a limit.",
        context:
          "The Driver Guide never states these defaults, so they come from RCW 46.61.400: 25 mph on city and town streets, 50 mph on county roads and 60 mph on state highways. Note how much lower the state highway figure is than the 65 or 70 mph drivers arriving from other states expect. All three are ceilings that a posted sign can lower, and all three sit underneath the basic rule requiring a speed that is reasonable and prudent for the conditions.",
        trap:
          "Residential streets are often posted at 25 anyway, which leads drivers to assume an unsigned street has no limit at all. It has the same one.",
        commonlyMissed: true,
        excerptKey: "rcw-speed-city",
        sourceLabel: "RCW 46.61.400 - Basic rule and maximum limits",
        sourceUrl: rcw("46.61.400"),
      },
      {
        id: "wa_s4_02",
        topic: "safety",
        question:
          "How much space does Washington's guide ask you to leave between you and the vehicle ahead?",
        choices: [
          "At least twice the length of your vehicle",
          "At least three seconds of travel time",
          "At least one car length for every 10 mph",
          "At least 100 feet at any speed",
        ],
        correctIndex: 0,
        explanation:
          "Washington states it as distance rather than time: at least twice the length of your vehicle between you and the car in front.",
        context:
          "This is unusual, and worth noting precisely because so many other states teach a seconds-based rule. The guide never mentions a three-second or four-second rule at all. It does ask you to increase the gap in the situations where stopping takes longer - at night, on unfamiliar roads, on snow, and behind large vehicles whose braking distance is far greater than yours. RCW 46.61.145 backs it with a standard rather than a number, forbidding you to follow more closely than is reasonable and prudent.",
        trap:
          "The three-second rule is good practice but it is not what Washington's guide says. If a question asks what the guide requires, the answer is measured in vehicle lengths.",
        commonlyMissed: true,
        excerptKey: "following-two-lengths",
        sourceLabel: "Washington State Driver Guide - 5.2 Space",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_03",
        topic: "safety",
        question: "Your car begins to hydroplane. What should you do first?",
        choices: [
          "Brake firmly to regain contact with the road",
          "Steer sharply toward the shoulder",
          "Accelerate gently to push water away from the tyres",
          "Take your foot off the accelerator",
        ],
        correctIndex: 3,
        explanation:
          "Ease off the accelerator first. Hydroplaning means the tyres are riding on water, so anything abrupt - throttle, brake or steering - only extends the slide.",
        context:
          "Washington's sequence is: off the accelerator, then press the brakes gently, keep the steering wheel steady, and look where you want to go while the tyres regain grip. If the car has antilock brakes they will help it re-establish contact; without ABS, pressing hard can make the hydroplaning worse. The best defence is prevention - slow down when the road is wet.",
        trap:
          "Overcorrecting with the steering wheel is the instinctive response and the most dangerous one. Hold it steady and wait for grip to return.",
        excerptKey: "hydroplane-steady-wheel",
        sourceLabel: "Washington State Driver Guide - 5.6 Hydroplaning",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_04",
        topic: "safety",
        question: "Why is a road most slippery in the first few minutes of rain on a hot day?",
        choices: [
          "Rainwater is warmer and evaporates unevenly",
          "Tyre rubber softens and loses grip in the heat",
          "Heat brings oil in the asphalt to the surface",
          "Brake pads glaze over when they get wet suddenly",
        ],
        correctIndex: 2,
        explanation:
          "Heat draws the oil in the asphalt up to the surface. Until the rain washes that oil away, the road is far more slippery than the amount of water suggests.",
        context:
          "Washington's guide catalogues the conditions where grip disappears without warning, and most are about temperature rather than rainfall. Shady spots stay icy on cold wet days when the rest of the road is clear. Overpasses and bridges freeze before the road they carry. And when below-freezing temperatures rise to near freezing, ice melts to water on top of ice, which is more slippery still.",
        trap:
          "The danger drops as the rain continues, which is the reverse of what drivers expect. Heavy rain later on is less treacherous than the first few minutes.",
        excerptKey: "rain-hot-day",
        sourceLabel: "Washington State Driver Guide - 5.6 Slippery roads",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_05",
        topic: "impairment",
        question:
          "You hold a Washington instruction permit. What does the law allow you to do with a mobile phone while driving?",
        choices: [
          "Nothing - you may not use a phone at all, even hands-free, except to report an emergency",
          "Use it hands-free, as any other driver may",
          "Use it hands-free provided a supervising driver is present",
          "Use it for navigation only, mounted on the windscreen",
        ],
        correctIndex: 0,
        explanation:
          "Permit and intermediate licence holders may not use a cell phone or any mobile electronic device while driving, and the ban covers hands-free use. Reporting an emergency is the only exception.",
        context:
          "Washington runs two different standards side by side and this is the one people miss. For drivers generally, the rule is that you cannot hold an electronic device while driving; hands-free is permitted. For anyone on a permit or an intermediate licence, hands-free is banned as well. The guide states it plainly and then repeats it in a separate chapter, which is a fair indication of how often it gets missed by exactly the people taking the knowledge test.",
        trap:
          "Hands-free is the exemption for everyone else, which is why it looks like the safe answer. It is not available to permit or intermediate licence holders.",
        commonlyMissed: true,
        excerptKey: "intermediate-phone",
        sourceLabel: "Washington State Driver Guide - 1.8 Intermediate driver license",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_06",
        topic: "safety",
        question: "What is the correct response to a skid?",
        choices: [
          "Steer in the opposite direction to the skid",
          "Brake hard and hold the wheel straight",
          "Steer in the same direction the vehicle is moving",
          "Engage the parking brake to slow the rear wheels",
        ],
        correctIndex: 2,
        explanation:
          "Steer in the same direction the vehicle is actually moving, and keep correcting until the tyres regain traction and follow your steering again.",
        context:
          "Washington's full sequence is to lift off the accelerator, press or pump the brakes, steer in the direction the vehicle is travelling, keep adjusting, then reassess the conditions once you have control back. Antilock brakes help control wheel rotation and let you keep steering; without them, stamping on the pedal can deepen the skid. The guide's underlying point is that a skidding vehicle cannot really be controlled, so avoiding one matters more than recovering from it.",
        trap:
          "Steering against the skid feels like the corrective move and makes it worse. You steer where the car is going, not where you wish it were going.",
        excerptKey: "skid-steer-direction",
        sourceLabel: "Washington State Driver Guide - 5.6 Skidding",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_07",
        topic: "safety",
        question: "A front tyre blows out at speed. What should you do?",
        choices: [
          "Brake hard immediately",
          "Grip the wheel firmly, hold your line and ease off the accelerator",
          "Steer sharply onto the shoulder",
          "Engage the parking brake gradually",
        ],
        correctIndex: 1,
        explanation:
          "Hold the wheel firmly, keep the car going straight and lift off the accelerator. Washington tells you specifically not to brake - let the vehicle slow itself, braking gently only if you must.",
        context:
          "A blowout pulls the car hard toward the failed tyre, and braking transfers weight forward onto exactly the corner that has lost its tyre, which can turn a manageable problem into a spin. Once the car has slowed, pull off the road somewhere safe and put the hazard lights on. If you cannot reach a safe place to change it, the guide tells you to stay in the vehicle with hazards on and call for help.",
        trap:
          "Braking is the instinct and it is the one thing the guide rules out. Slowing down and stopping quickly are not the same goal here.",
        commonlyMissed: true,
        excerptKey: "blowout-no-brake",
        sourceLabel: "Washington State Driver Guide - 5.7 Tires",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_08",
        topic: "speed",
        question:
          "Conditions are poor but you are driving at the posted limit. Can you still be ticketed?",
        choices: [
          "No - the posted limit is a complete defence",
          "Only if a collision results",
          "Yes - you can be ticketed for driving too fast for conditions",
          "Only in a designated work zone or school zone",
        ],
        correctIndex: 2,
        explanation:
          "Yes. Washington states outright that you can be ticketed for travelling too fast for road conditions even while under the posted limit.",
        context:
          "Two separate tests apply to your speed at every moment, and the posted number answers only one of them. RCW 46.61.400 opens with the basic rule: no one may drive faster than is reasonable and prudent for the conditions and the hazards then existing. Posted limits are maxima for ideal conditions. The guide asks you to slow for sharp curves, slippery roads, pedestrians and children, car parks, heavy traffic, narrow bridges and tunnels, and residential areas.",
        trap:
          "The sign is a ceiling, never a licence. In fog or on ice the lawful speed can be far below the number posted.",
        excerptKey: "rcw-basic-rule",
        sourceLabel: "RCW 46.61.400 - Basic rule and maximum limits",
        sourceUrl: rcw("46.61.400"),
      },
      {
        id: "wa_s4_09",
        topic: "sharing",
        question:
          "You are merging in front of a large truck. When is it safe to move over?",
        choices: [
          "As soon as you can see the truck's front bumper",
          "When you are level with the truck's cab",
          "When the truck driver flashes their headlights",
          "When you can see both of the truck's headlights in your rearview mirror",
        ],
        correctIndex: 3,
        explanation:
          "Wait until both of the truck's headlights are visible in your rearview mirror. That is the point at which you are far enough ahead to leave the driver room to brake.",
        context:
          "The distance matters because a loaded truck with properly adjusted brakes needs about 450 feet to stop from 55 mph. Cutting in closer than that removes the space the driver needs and cannot get back. Washington also asks you to maintain the flow of traffic after merging rather than slowing, and to stay out of the blind zones along a large vehicle's sides - if you cannot see its mirrors, its driver cannot see you.",
        trap:
          "A gap that looks generous from a car is not generous to a truck. The stopping distance, not the visible space, is what makes the merge safe.",
        excerptKey: "truck-merge-headlights",
        sourceLabel: "Washington State Driver Guide - 4.4 Sharing with large vehicles",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_10",
        topic: "safety",
        question: "What does an antilock braking system do for you in an emergency stop?",
        choices: [
          "It shortens your stopping distance considerably",
          "It lets you keep steering while braking hard",
          "It applies the brakes automatically when it detects an obstacle",
          "It prevents the vehicle from skidding on ice",
        ],
        correctIndex: 1,
        explanation:
          "ABS keeps the wheels from locking so you can still steer while braking hard. Washington states plainly that it does not shorten your stopping distance.",
        context:
          "The safety benefit is control rather than distance, and expecting the wrong one leads drivers to leave too little room. When ABS engages you feel the pedal shudder, which is normal and not a reason to ease off. The guide suggests practising firm braking in a large open paved area so the sensation is familiar before you need it. It also distinguishes four levels of braking - light, medium, firm and emergency - with light and medium being the ones you should normally need.",
        trap:
          "Believing ABS stops you sooner is a dangerous misreading. It changes what you can do while stopping, not how far it takes.",
        excerptKey: "abs-no-shorter",
        sourceLabel: "Washington State Driver Guide - 2.8 Braking",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_11",
        topic: "speed",
        question: "What speed are Washington roundabouts designed for?",
        choices: ["5 to 10 mph", "10 to 15 mph", "15 to 25 mph", "25 to 35 mph"],
        correctIndex: 2,
        explanation:
          "Roundabouts are built for speeds between 15 and 25 mph. The geometry does much of the slowing for you, which is why they work without signals.",
        context:
          "That design speed shapes how you drive one. Slow on approach, read the lane choice sign and pick your lane, then yield to everything already circulating before entering. Stop for pedestrians and bicyclists in the crosswalks at entry and exit. Keep your lane all the way round, and leave large vehicles the two lanes of space they need.",
        trap:
          "Entering too fast is the common fault, because a clear roundabout invites speed. The design assumes you have already slowed on approach.",
        excerptKey: "roundabout-speed",
        sourceLabel: "Washington State Driver Guide - 4.15 How to drive a roundabout",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_12",
        topic: "safety",
        question: "How much tread should a tyre have at minimum?",
        choices: [
          "Not less than 2/32 of an inch",
          "Not less than 1/32 of an inch",
          "Not less than 4/32 of an inch",
          "Not less than 6/32 of an inch",
        ],
        correctIndex: 0,
        explanation:
          "Two thirty-seconds of an inch is the floor. Below it, tyres cannot clear water and start slipping and sliding on wet roads.",
        context:
          "Tread depth is one of several checks Washington puts on the driver rather than on a garage. Correct tyre pressure is on the label on the driver's door edge or in the owner's manual, and low pressure affects handling. Windows must be completely cleared of snow, ice and frost before you drive, and nothing should hang from the mirror or clutter the glass.",
        trap:
          "Tyres with tread left can still be too worn. The legal minimum is close to the point where wet grip collapses, not a comfortable margin.",
        excerptKey: "tire-tread",
        sourceLabel: "Washington State Driver Guide - 2.5 Vehicle maintenance",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_13",
        topic: "sharing",
        question:
          "A snowplough is working on the road ahead of you. What is the particular hazard?",
        choices: [
          "Ploughs stop without warning to reverse",
          "Ploughs travel faster than posted limits",
          "Ploughs can throw snow up and create blizzard-like conditions",
          "Ploughs cannot be passed under any circumstances",
        ],
        correctIndex: 2,
        explanation:
          "A plough forces snow up and off the road, which can produce blizzard-like conditions and wipe out visibility for anyone following too closely.",
        context:
          "The remedy is distance, which is the same answer Washington gives for most winter hazards. Snowy roads call for a much larger following gap and dramatically reduced speed, and the guide tells you to use snow tyres or chains when they are required. Chains and studded tyres are both listed as ways to improve traction in winter months.",
        trap:
          "Sitting close behind a plough to travel on the cleared surface is exactly what puts you in the snow cloud it is throwing.",
        excerptKey: "truck-stopping-450",
        sourceLabel: "Washington State Driver Guide - 4.4 Snowplows",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_14",
        topic: "licensing",
        question: "How long is a passing Washington knowledge test score valid?",
        choices: ["2 years", "1 year", "6 months", "5 years"],
        correctIndex: 0,
        explanation:
          "A passing score stands for two years. Let it lapse before you take the skills exam and you sit the knowledge test again.",
        context:
          "Two clocks run at once and they do not match. The instruction permit lasts one year and can be renewed for a fee; the knowledge exam score lasts two years from the day you pass. DOL's own page states both the two-year validity and the fact that there may be a waiting period before you can retest if you fail.",
        trap:
          "Renewing the permit does not renew the exam score. They expire independently, and it is the score that forces a retest.",
        excerptKey: "dol-score-2-years",
        sourceLabel: "Washington DOL - Do I need to take a test?",
        sourceUrl: TEST,
      },
      {
        id: "wa_s4_15",
        topic: "safety",
        question: "Where should your hands be on the steering wheel?",
        choices: [
          "At 9 and 3, or 10 and 2, on the top half of the wheel",
          "At 12, with the other hand resting on the gear selector",
          "At 8 and 4, low on the wheel",
          "One hand at 12 at all times",
        ],
        correctIndex: 0,
        explanation:
          "Hands go on the outside of the wheel on its top half, at 9 and 3 or at 10 and 2. That gives the best control and keeps your arms clear of the airbag.",
        context:
          "Washington teaches three steering methods for different situations. Hand-to-hand, where the hands never cross, is the default and keeps your arms out of the airbag's path. Hand-over-hand suits low speeds, tight turns, parking and skid recovery. One-hand steering is for backing or reaching a control, and the 12 o'clock position is recommended only when backing, with your body turned to see behind.",
        trap:
          "The 12 o'clock grip is correct in exactly one situation - reversing. Using it while driving forward puts your forearm across the airbag.",
        excerptKey: "steering-9-3",
        sourceLabel: "Washington State Driver Guide - 2.7 Steering",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_16",
        topic: "parking",
        question:
          "You are leaving your car and there is a child in the back. What does Washington law say?",
        choices: [
          "A child of any age may be left if the doors are locked",
          "It is a crime to leave a child under 8 unattended",
          "It is a crime to leave a child under 10 unattended",
          "It is a crime to leave a child under 12 unattended, or under 16 with the engine running",
        ],
        correctIndex: 3,
        explanation:
          "Two thresholds stack. Leaving a child under 12 unattended in a parked vehicle is a crime, and so is leaving a child under 16 unattended while the motor is running.",
        context:
          "The higher age applies to the running engine because a vehicle that can be moved is a much greater risk than one that cannot. Washington applies similar protection to animals, making it a crime to leave one unattended where heat, cold, lack of ventilation or lack of water could harm or kill it. Where nobody nearby has access to the vehicle, law enforcement may remove a child or animal by any reasonable means, and are not liable for damage caused in doing so.",
        trap:
          "One age does not cover both cases. A 14-year-old may be left in a parked car but not in one with the engine running.",
        excerptKey: "child-unattended-12",
        sourceLabel: "Washington State Driver Guide - 4.18 Parking",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_17",
        topic: "impairment",
        question: "How long should a tired driver stop and nap, according to Washington's guide?",
        choices: [
          "About 20 minutes",
          "At least 2 hours",
          "5 minutes is enough to restore alertness",
          "Napping is not recommended - keep driving to your destination",
        ],
        correctIndex: 0,
        explanation:
          "Pull off the road and take a 20-minute nap. The guide's position is that stopping to sleep beats risking a crash.",
        context:
          "Fatigue impairs vision and judgement in much the same way alcohol and drugs do. The warning signs Washington lists are concrete: you cannot remember the last few miles, your eyelids are heavy, you are drifting from your lane or hitting rumble strips, you are missing exits, or you have become restless and irritable. Before a long trip, aim for the 7 to 9 hours most people need and plan to stop about every 100 miles or 2 hours.",
        trap:
          "Coffee, loud music and an open window are coping tricks, not remedies. The guide's answer to drowsiness is to stop.",
        excerptKey: "fatigue-nap",
        sourceLabel: "Washington State Driver Guide - 3.1 Fatigue and drowsy driving",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_18",
        topic: "speed",
        question: "What does a minimum speed limit sign require?",
        choices: [
          "That you never drive below the posted maximum",
          "That you maintain that speed regardless of conditions",
          "That you travel at least that fast so you do not become a hazard",
          "That heavy vehicles keep to the right lane",
        ],
        correctIndex: 2,
        explanation:
          "A minimum speed sign requires you to travel at least that fast, so you do not become an obstacle to the traffic around you.",
        context:
          "Speed limit signs can state a maximum or a minimum, and Washington uses both. The maximum is what is legal in ideal conditions and can be lowered by weather. The minimum is about not impeding others - a very slow vehicle in fast traffic is a hazard in its own right. The same thinking underlies the left-lane rule, where RCW 46.61.100 makes it an infraction to drive continuously in the left lane when doing so impedes other traffic.",
        trap:
          "A minimum speed does not override the duty to drive safely for conditions. If the weather makes that speed unsafe, the answer is to leave the road, not to maintain it.",
        excerptKey: "minimum-speed",
        sourceLabel: "Washington State Driver Guide - 4.12 Speed Limit",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_19",
        topic: "emergencies",
        question:
          "Your vehicle breaks down and you cannot get it off the road. Where should you place warning flares?",
        choices: [
          "50 feet behind the vehicle",
          "100 feet behind the vehicle",
          "Directly beside the vehicle",
          "200 to 300 feet behind the vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Two hundred to three hundred feet back. Flares placed close to the car give approaching drivers no time to react to it.",
        context:
          "Washington's breakdown sequence starts with getting the vehicle off the road and away from traffic if you can. If you cannot, stop where drivers have a clear view of you - not just over a crest or around a curve. Turn on the emergency flashers and headlights. With no flares available, stand somewhere safe and wave traffic around, and consider raising the hood or tying a white cloth to the aerial, mirror or door handle.",
        trap:
          "Standing in a traffic lane to wave people past is what the guide warns against. Warn from a safe position, not from the carriageway.",
        excerptKey: "flares-200-300",
        sourceLabel: "Washington State Driver Guide - 5.7 Vehicle failures",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_20",
        topic: "safety",
        question: "Where should a child under 13 ride?",
        choices: [
          "In the front seat, if properly belted",
          "In the back seat",
          "In the front seat, if the airbag is switched off",
          "Anywhere, once they are over 4 feet tall",
        ],
        correctIndex: 1,
        explanation:
          "Children under 13 belong in the back. The reason is the airbag - deployment can seriously injure or kill a child sitting in front of it.",
        context:
          "Washington's restraint progression runs by age and then by size. Rear-facing until age 2. A harnessed car seat, rear or forward facing, from 2 to 4. A car seat or booster from age 4 until adult belts fit properly, typically somewhere between 8 and 12. RCW 46.61.687 makes the booster threshold a height rather than an age - under four feet nine inches. After that, a properly fitting seat belt.",
        trap:
          "Being big enough for an adult belt is not the same as being old enough for the front seat. The airbag rule turns on age, and it is 13.",
        excerptKey: "child-front-seat-13",
        sourceLabel: "Washington State Driver Guide - 2.6 Airbags",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_21",
        topic: "safety",
        question:
          "You are driving at night and an oncoming car has its high beams on. Where should you look?",
        choices: [
          "Directly at the oncoming headlights to track the vehicle",
          "At your own dashboard until it passes",
          "Toward the centre line",
          "Toward the right edge of the road",
        ],
        correctIndex: 3,
        explanation:
          "Look toward the right edge of the road and use it as a steering guide. That keeps you oriented without staring into the glare.",
        context:
          "Washington's night driving advice is built around the fact that your eyes need time to recover from bright light. Avoid looking directly into oncoming headlights, search beyond your own beams for dark shapes and shadows, and glance to the sides occasionally to find the pavement edge and spot hazards coming from there. Use high beams when nothing is coming, and switch down both for oncoming traffic and when following someone.",
        trap:
          "Flashing your own high beams back is a road rage behaviour the guide lists by name, and it blinds the other driver rather than helping either of you.",
        excerptKey: "night-glare-right-edge",
        sourceLabel: "Washington State Driver Guide - 5.6 Night driving",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_22",
        topic: "impairment",
        question: "Which impairment does Washington identify as most common in fatal crashes?",
        choices: [
          "Alcohol on its own",
          "Polydrug use - more than one substance combined",
          "Prescription medication on its own",
          "Fatigue",
        ],
        correctIndex: 1,
        explanation:
          "Polydrug use, meaning the mixing of more than one type of drug, is named as the impairment most often involved in fatal crashes.",
        context:
          "Polydrug use covers combinations of alcohol, cannabis, illegal drugs, prescription medicines, over-the-counter remedies and other substances including inhalants. The danger is that the combined effect can exceed what any one of them would produce alone, and the outcome varies with purity, quantity, frequency and method of use. The guide warns that a medicine which seems harmless alone may cause severe impairment alongside another drug or a drink.",
        trap:
          "Alcohol is the most common impairing substance overall, which makes it the tempting answer. The question is about fatal crashes, where combinations lead.",
        excerptKey: "polydrug-most-common",
        sourceLabel: "Washington State Driver Guide - 3.1 Polydrug use and driving",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_23",
        topic: "sharing",
        question: "How far must you stop from the nearest rail at a railway crossing?",
        choices: [
          "Between 5 and 20 feet",
          "Between 15 and 50 feet",
          "Between 25 and 75 feet",
          "At least 100 feet",
        ],
        correctIndex: 1,
        explanation:
          "The stopping band is 15 to 50 feet from the nearest rail - far enough to clear the train's overhang, close enough to see along the track.",
        context:
          "That stop is required when the signal is flashing, when the gate is down or coming down, when a flagger signals you to stop, when a train is close enough to be an immediate hazard, when you hear a warning horn, or where a stop sign is posted. You may go once the red lights stop flashing and the other warning devices switch off. Never drive around a lowered gate.",
        trap:
          "Trains overhang the rails by several feet on each side. Stopping just short of the track is not far enough back.",
        excerptKey: "train-stop-distance",
        sourceLabel: "Washington State Driver Guide - 4.7 Sharing the road with trains",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_24",
        topic: "speed",
        question:
          "What is the maximum speed on a Washington state highway where nothing is posted?",
        choices: ["45 mph", "50 mph", "60 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Sixty miles per hour is the statutory maximum for state highways where no lower limit is posted. County roads default to 50 mph and city streets to 25 mph.",
        context:
          "Washington's Driver Guide never states these figures, so they come from RCW 46.61.400. The 60 mph number surprises drivers who assume the 65 or 70 mph they know from other states, and it is a default rather than a target - signs frequently post something lower, and the basic rule requiring a reasonable and prudent speed sits underneath all of them.",
        trap:
          "Interstate limits are posted and often higher, which is where the assumption comes from. The unposted statutory default is 60.",
        commonlyMissed: true,
        excerptKey: "rcw-speed-city",
        sourceLabel: "RCW 46.61.400 - Basic rule and maximum limits",
        sourceUrl: rcw("46.61.400"),
      },
      {
        id: "wa_s4_25",
        topic: "safety",
        question: "How should you approach a sharp curve?",
        choices: [
          "Slow down before entering, then hold a steady speed through it",
          "Brake through the curve to keep the speed down",
          "Accelerate into the curve to maintain traction",
          "Coast in neutral until the road straightens",
        ],
        correctIndex: 0,
        explanation:
          "Do your slowing before you enter, then hold a steady speed round. Braking or accelerating mid-curve upsets the car's balance and can break traction.",
        context:
          "Washington explains this through the forces at work. Inertia wants the car to keep going straight while you are asking it to turn, and higher speed means more kinetic energy and less grip in reserve. Position slightly to the outside of your lane on approach for a better view round, steer smoothly rather than sharply, and accelerate gently on the way out. Rain, snow or ice cut the friction available, so slow more still.",
        trap:
          "Braking in the middle of a curve is the instinctive response to entering too fast, and it is what turns too fast into a skid.",
        excerptKey: "curve-steady-speed",
        sourceLabel: "Washington State Driver Guide - 5.6 In the curve",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_26",
        topic: "rules",
        question: "What does Washington say about reversing on a freeway or shoulder?",
        choices: [
          "It is illegal to back up on a shoulder or freeway",
          "It is allowed if you have missed your exit",
          "It is allowed below 5 mph with hazard lights on",
          "It is allowed only on the right shoulder",
        ],
        correctIndex: 0,
        explanation:
          "Backing up on a shoulder or a freeway is illegal in Washington. Missing your exit is not a reason to reverse.",
        context:
          "The guide's instruction is to keep moving forward and correct your route at the next opportunity. It sits with several related rules in the same section: do not use the shoulder to pass, do not drive on the shoulder at all unless directed by signs or officials, avoid blocking travel lanes and keep going until you can pull over safely, and do not hitchhike or pick up hitchhikers on Washington freeways.",
        trap:
          "A clear carriageway behind you is not the test. Reversing on a freeway is prohibited outright, regardless of traffic.",
        excerptKey: "no-reversing-freeway",
        sourceLabel: "Washington State Driver Guide - 4.10 General driving guidance",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_27",
        topic: "emergencies",
        question: "The accelerator sticks open while you are driving. What should you do?",
        choices: [
          "Switch off the engine immediately",
          "Shift quickly into neutral",
          "Pump the accelerator to free it",
          "Apply the parking brake at once",
        ],
        correctIndex: 1,
        explanation:
          "Shift to neutral. That disconnects the engine from the wheels while you keep steering and braking normally.",
        context:
          "Washington's order matters: keep your eyes on the road, shift to neutral, pull off the road when it is safe, then switch the engine off. Turning the engine off while still moving is the wrong first move because it can lock the steering and costs you the power assistance for brakes and steering, which is the same reason the guide warns that the wheel becomes hard to turn if the engine cuts out on its own.",
        trap:
          "Killing the engine first seems like the direct fix and removes your steering assistance at the worst moment. Neutral first, engine off once stopped.",
        excerptKey: "accelerator-neutral",
        sourceLabel: "Washington State Driver Guide - 5.7 Accelerator",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_28",
        topic: "sharing",
        question:
          "Why does Washington warn about the blind zones alongside large vehicles?",
        choices: [
          "Truck mirrors are legally required to be smaller",
          "Trucks are not fitted with blind spot monitoring",
          "The zones move as the truck changes lanes",
          "If you cannot see the driver's mirrors, the driver cannot see you",
        ],
        correctIndex: 3,
        explanation:
          "The mirror test is the whole point. If the truck's mirrors are not visible to you, you are in a blind zone and the driver has no idea you are there.",
        context:
          "Large vehicles have blind zones on every side, sometimes called no zones because there should be no vehicle in them. Washington asks you not to drive alongside a large vehicle for long, and to speed up or drop back so the driver can see you. The related advice covers following distance for a wide view ahead, leaving room when merging, and giving turning space, since a large vehicle may need more than one lane to get round a corner.",
        trap:
          "Modern blind spot technology does not close these zones. The guide notes that such systems have limits and cannot see everything.",
        excerptKey: "blind-zone-mirrors",
        sourceLabel: "Washington State Driver Guide - 2.13 Other vehicles' blind zones",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_29",
        topic: "parking",
        question:
          "You are parking uphill on a street with a tall curb. Which way should the front wheels point?",
        choices: [
          "Straight ahead",
          "Toward the curb",
          "Away from the curb, so the tyre backs into it",
          "It does not matter with a tall curb",
        ],
        correctIndex: 2,
        explanation:
          "Facing uphill against a tall curb, turn the wheels away from it until the back of the front tyre rests against the curb. A rolling car then backs into the curb rather than into traffic.",
        context:
          "Every hill parking rule in Washington is designed around a parking brake that fails. Uphill with a tall curb, wheels away so the car rolls back into it. Downhill, wheels toward the curb so it rolls forward into it. Where the curb is low or rounded, the guide notes that turning toward it may be safer uphill, since the car would then roll away from the road. With no curb at all, point the wheels toward the edge of the road either way.",
        trap:
          "Uphill and downhill are opposite answers, which is what makes this pair so easy to mix up. Work out which way the car would roll, then aim the tyres into something.",
        excerptKey: "park-uphill",
        sourceLabel: "Washington State Driver Guide - 4.18 Facing up the hill",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_30",
        topic: "impairment",
        question:
          "You have started a new prescription medicine. What does Washington advise before driving?",
        choices: [
          "Drive only short distances for the first week",
          "Halve the dose on days you plan to drive",
          "Nothing - prescribed medicines are exempt from impaired driving law",
          "Wait until you know how it affects your judgement, coordination and reaction time",
        ],
        correctIndex: 3,
        explanation:
          "Find out how it affects you before you drive on it. The guide gives the same advice for a new prescription, a first-time prescription, or an increased dose of something you already take.",
        context:
          "Impaired driving is a criminal offence regardless of where the drug came from - prescribed, bought over the counter, bought in a shop or obtained illegally. Over-the-counter remedies for headaches, colds and allergies can cause drowsiness, and prescription drugs can affect reflexes, judgement, vision and alertness. Warnings against operating heavy machinery include driving. Read the labels and ask your doctor or pharmacist, particularly about combining medicines with alcohol.",
        trap:
          "Having a valid prescription is no defence. Washington states that it makes no difference whether the drug was prescribed or not.",
        excerptKey: "legal-drug-not-safe",
        sourceLabel: "Washington State Driver Guide - 3.1 Medications and driving",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_31",
        topic: "safety",
        question: "What is black ice?",
        choices: [
          "Ice mixed with road grit, which reduces grip",
          "Ice that forms only on bridges",
          "A thin coating of ice that is hard to see",
          "Ice that has begun to melt and refreeze overnight",
        ],
        correctIndex: 2,
        explanation:
          "Black ice is a thin coating that is very hard to see. Drivers crash on it because the road looks merely wet.",
        context:
          "Washington's advice is to stay alert whenever temperatures are near or below freezing, whether or not you can see ice. The related traps are worth knowing together: shady spots stay icy on cold wet days, overpasses and bridges ice up before the roads leading to them, and when below-freezing temperatures rise toward freezing the melting ice makes the surface more slippery still, not less.",
        trap:
          "Not seeing ice is not evidence there is none. The guide's point is that black ice is invisible, so the temperature is the warning.",
        excerptKey: "black-ice",
        sourceLabel: "Washington State Driver Guide - 5.6 Slippery roads",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_32",
        topic: "rules",
        question:
          "Your brake lights have failed and you need to slow down. What hand signal should you give?",
        choices: [
          "Left arm out of the window, fingers pointing down",
          "Left arm out of the window, pointing straight out",
          "Left arm out of the window, bent upward",
          "Right arm out of the passenger window, pointing down",
        ],
        correctIndex: 0,
        explanation:
          "Left arm out of the driver's window with your fingers pointing at the ground tells the driver behind you to slow down and prepare to stop.",
        context:
          "All three Washington hand signals use the left arm out of the driver's window, and they differ only in what the hand does. Fingers pointing down means stopping or slowing. The arm straight out means a left turn. The arm bent at the elbow with fingers up means a right turn. The guide expects you to use them whenever brake lights or indicators have failed, and separately requires brake lights to be clearly visible from 100 feet.",
        trap:
          "Reaching across to the passenger window is not a Washington signal. Every one of them is made with the left arm from the driver's side.",
        excerptKey: "hand-signal-stop",
        sourceLabel: "Washington State Driver Guide - 2.5 Hand signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_33",
        topic: "emergencies",
        question:
          "A power line has fallen across your vehicle. What should you do?",
        choices: [
          "Get out quickly and move away from the vehicle",
          "Get out and push the vehicle clear of the line",
          "Open the door and step down carefully, avoiding the line",
          "Stay inside the vehicle and call 911",
        ],
        correctIndex: 3,
        explanation:
          "Stay in the vehicle and call 911. Assume every downed line is live, and remember the ground around the car may be energised too.",
        context:
          "The only exception is fire. If the vehicle catches light you must get clear, and the technique matters: open the door, perch on the sill, jump clear with your arms at your sides so you never touch vehicle and ground at once, land with both feet together, then shuffle 35 feet away without lifting your feet apart. That same 35-foot figure is the distance the guide asks you to keep other people back to.",
        trap:
          "Stepping out normally puts one foot on the ground while a hand is still on the car, which completes a circuit through your body.",
        excerptKey: "power-line-stay-inside",
        sourceLabel: "Washington State Driver Guide - 5.9 Encountering power lines",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_34",
        topic: "sharing",
        question:
          "Why might a motorcyclist slow down without showing a brake light?",
        choices: [
          "Motorcycle brake lights are dimmer by design",
          "Motorcycles are exempt from brake light requirements",
          "Brake lights switch off above a certain speed",
          "Riders often slow using the throttle rather than the brakes",
        ],
        correctIndex: 3,
        explanation:
          "Riders frequently slow by rolling off the throttle, which produces no brake light at all. Your only warning is the gap closing.",
        context:
          "Washington asks you to watch motorcycles more attentively than other vehicles for exactly this kind of reason. The guide also notes that some machines have turn signals that do not cancel automatically, so a blinking indicator may be left over from an earlier turn. Riders change position within their lane constantly to see, be seen and dodge surface hazards, and gravel, seams, potholes or a manhole cover can force a change of speed or line that would not trouble a car at all.",
        trap:
          "Judging a motorcycle's speed by its brake light will leave you closing far too fast. Watch the machine, not the lamp.",
        excerptKey: "motorcycle-brake-lights",
        sourceLabel: "Washington State Driver Guide - 4.5 Sharing with motorcycles",
        sourceUrl: HB,
      },
      {
        id: "wa_s4_35",
        topic: "licensing",
        question: "How soon must you update your address with the Department of Licensing?",
        choices: [
          "Within 30 days",
          "Within 10 days",
          "At your next licence renewal",
          "Within 60 days",
        ],
        correctIndex: 1,
        explanation:
          "Ten days. You update it through License Express, and a name change has to be done in person at a driver licensing office.",
        context:
          "Washington runs several deadlines that are easy to confuse because they cover related situations. Address changes go in within 10 days. New residents have 30 days to get a Washington licence and 30 days to register a vehicle. If you sell or gift a vehicle you file a report of sale within 5 days, and the buyer has 15 days to transfer the title before penalty fees start.",
        trap:
          "Changing the address on your driver licence does not change your vehicle address. Washington treats those as two separate records.",
        excerptKey: "address-change-10-days",
        sourceLabel: "Washington State Driver Guide - 1.16 Additional services",
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
      "Washington's genuine traps: rules that differ from neighbouring states, thresholds that stack, and the handful of things the guide states in one place and the statute states differently.",
    questions: [
      {
        id: "wa_s5_01",
        topic: "impairment",
        question:
          "Is it legal in Washington to drive while wearing noise-cancelling headphones?",
        choices: [
          "No - driving while wearing earbuds, headphones or headsets is against the law",
          "Yes, provided no audio is playing",
          "Yes, as long as you can still hear a siren",
          "Yes, but only outside city limits",
        ],
        correctIndex: 0,
        explanation:
          "Washington bans driving while wearing earbuds, earphones, headphones or headsets, and the ban covers devices that cancel noise as well as those that broadcast sound.",
        context:
          "The one permitted exception is narrow: a hands-free device in one ear, complying with the relevant Washington Administrative Code provision. That is quite separate from the electronic device rules, which stop you holding a phone at all and stop permit and intermediate licence holders from using one even hands-free. Washington's reasoning is that horns, sirens and screeching tyres carry information you need.",
        trap:
          "Silence is not the test. Noise-cancelling headphones are caught precisely because they remove sound, and both ears being covered is the problem.",
        commonlyMissed: true,
        excerptKey: "earbuds-illegal",
        sourceLabel: "Washington State Driver Guide - 3.0 Hearing",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_02",
        topic: "licensing",
        question:
          "A 16-year-old received their intermediate licence four months ago. Who may ride with them?",
        choices: [
          "Up to three friends under 20",
          "Any passengers, at any time",
          "Immediate family only",
          "One passenger under 20, plus family",
        ],
        correctIndex: 2,
        explanation:
          "For the first six months, an intermediate licence holder may carry no passengers under 20 at all unless they are immediate family.",
        context:
          "The restriction eases in two stages. From issue to six months, no passengers under 20 except immediate family. From six months until age 18 or one year, whichever comes first, no more than three passengers under 20, again excepting immediate family. Note the age threshold is under 20, not under 18 or 21, and it is the passengers' ages that matter rather than the driver's.",
        trap:
          "Under 20 is a deliberately odd number and the usual error is to reach for 18. A 19-year-old friend counts against the limit.",
        commonlyMissed: true,
        excerptKey: "intermediate-passengers-0-6",
        sourceLabel: "Washington State Driver Guide - 1.8 Intermediate driver license",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_03",
        topic: "safety",
        question:
          "It is raining hard in the middle of the afternoon and you have your wipers on. What does Washington law require of your headlights?",
        choices: [
          "Headlights must be on whenever the wipers are on",
          "Headlights are required if people and vehicles are not clearly discernible at 1,000 feet",
          "Headlights are required only between sunset and sunrise",
          "Daytime running lights satisfy the requirement in rain",
        ],
        correctIndex: 1,
        explanation:
          "Washington has no wipers-on rule. The legal triggers are the half hour after sunset to half hour before sunrise window, and any other time when poor light or weather means people and vehicles are not clearly discernible at a thousand feet.",
        context:
          "This one catches people because the guide offers rain, snow, fog and smoke as a practical memory aid for switching lights on, and third-party study sites repeat it as though it were the statute. RCW 46.37.020 is written around visibility instead, and never mentions wipers or windscreens. In heavy rain the two usually coincide, which is why running your lights whenever the wipers are on remains sensible advice even though it is not the legal test.",
        trap:
          "Several neighbouring states do tie headlights to wipers, so drivers import the rule. Washington's trigger is the thousand-foot visibility standard.",
        commonlyMissed: true,
        excerptKey: "rcw-headlight-law",
        sourceLabel: "RCW 46.37.020 - When lighted lamps are required",
        sourceUrl: rcw("46.37.020"),
      },
      {
        id: "wa_s5_04",
        topic: "impairment",
        question:
          "What is the THC limit for a driver aged 21 or over in Washington?",
        choices: [
          "There is no numeric limit",
          "2.00 nanograms per millilitre of blood",
          "5.00 nanograms per millilitre of blood",
          "10.00 nanograms per millilitre of blood",
        ],
        correctIndex: 2,
        explanation:
          "Five nanograms of active THC per millilitre of blood is the threshold for drivers 21 and over. For drivers under 21 anything above zero carries the same consequences.",
        context:
          "Washington is one of relatively few states with a numeric per se cannabis limit, which is why the figure is worth knowing rather than reasoning about. The alcohol thresholds run in parallel at 0.08 percent for 21 and over and 0.02 percent for under 21. Cannabis being legal to buy at 21 changes nothing about driving: the guide states that driving after consuming any cannabis is illegal at every age, and that there is no safe amount.",
        trap:
          "Legal possession and legal driving are separate questions. Being lawfully able to buy cannabis says nothing about being lawfully able to drive after using it.",
        commonlyMissed: true,
        excerptKey: "thc-thresholds",
        sourceLabel: "Washington State Driver Guide - 1.15 THC Cannabis Concentration",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_05",
        topic: "parking",
        question:
          "Where may an open container of alcohol or cannabis be carried in a vehicle?",
        choices: [
          "In the glove compartment, if it is closed",
          "Anywhere, provided the driver has not consumed any",
          "In a centre console with a lid",
          "In the trunk or the bed of a truck",
        ],
        correctIndex: 3,
        explanation:
          "Open alcohol and cannabis may only travel in the trunk or a truck bed. Storage compartments the driver can reach are expressly ruled out.",
        context:
          "Washington's open container law covers cannabis alongside alcohol, which is not true everywhere and is easy to overlook. It is a traffic infraction for anyone in a vehicle on the road to drink alcohol or consume cannabis, to possess containers or products that have been opened, have a broken seal or are partly used, or to hide either in unlabelled or mislabelled containers.",
        trap:
          "A glove box or a lidded console feels like it should qualify as closed storage. Both are accessible to the driver, which is exactly what the rule excludes.",
        excerptKey: "open-container-storage",
        sourceLabel: "Washington State Driver Guide - 1.15 Open container law",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_06",
        topic: "rules",
        question: "When are studded tyres legal in Washington?",
        choices: [
          "From November 1 through March 31",
          "From October 1 through April 30",
          "At any time during winter weather",
          "From December 1 through February 28",
        ],
        correctIndex: 0,
        explanation:
          "The legal window runs from November 1 to March 31. RCW 46.37.420 puts it the other way round, making studs unlawful between April 1 and November 1.",
        context:
          "The Driver Guide mentions studded tyres as a way to improve winter traction but never gives the dates, so this is a statute-only rule. It is worth knowing that the department has authority to extend the season in bad years and has done so before, so an announced extension is not a contradiction of the rule. Chains are the other option the guide names, and it tells you to use snow tyres or chains where they are required.",
        trap:
          "Late snow does not extend the season by itself. Unless an extension has actually been announced, studs come off at the end of March.",
        commonlyMissed: true,
        excerptKey: "rcw-studded-tires",
        sourceLabel: "RCW 46.37.420 - Tire equipment",
        sourceUrl: rcw("46.37.420"),
      },
      {
        id: "wa_s5_07",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing at an unmarked crosswalk. What does RCW 46.61.235 require of an approaching driver?",
        choices: [
          "Slow down and pass behind them",
          "Stop and remain stopped while they cross",
          "Yield only if they raise a hand",
          "Sound the horn and proceed slowly",
        ],
        correctIndex: 1,
        explanation:
          "The statute requires you to stop and remain stopped, which is a stronger duty than yielding. It applies while the person is within one lane of the half of the roadway you are on or turning onto.",
        context:
          "The rule reaches pedestrians, bicycles and personal delivery devices alike, and it applies at unmarked crosswalks exactly as at marked ones - every intersection in Washington is legally a crosswalk. The Driver Guide adds a practical margin on top: wait until the person has cleared your lane and one more, or until they have completely crossed if they are using a wheelchair, cane, guide dog or other service animal.",
        trap:
          "Rolling slowly past behind someone is not compliance. The duty is to stop and stay stopped, not to time a gap around them.",
        commonlyMissed: true,
        excerptKey: "rcw-crosswalk-stop",
        sourceLabel: "RCW 46.61.235 - Crosswalks",
        sourceUrl: rcw("46.61.235"),
      },
      {
        id: "wa_s5_08",
        topic: "licensing",
        question:
          "An intermediate licence holder is stopped for a second traffic violation. What happens?",
        choices: [
          "A warning letter is sent to their parents",
          "The current restrictions continue until they turn 18",
          "The licence is revoked permanently",
          "The licence is suspended for six months or until they turn 18, whichever comes first",
        ],
        correctIndex: 3,
        explanation:
          "A second violation suspends the licence for six months or until the driver turns 18, whichever arrives sooner.",
        context:
          "The penalties escalate across three steps. A first violation means the current restrictions stay in force until 18. A second brings the six-month suspension. A third suspends the licence until the driver turns 18. At-fault collisions count alongside traffic violations. Separately, DOL sends warning letters to the parents and guardians of intermediate licence holders after violations or crashes.",
        trap:
          "The first violation does not suspend anything, which can read as leniency. What it actually does is remove the prospect of restrictions easing early.",
        excerptKey: "intermediate-violation-2",
        sourceLabel: "Washington State Driver Guide - 1.8 Intermediate driver license",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_09",
        topic: "emergencies",
        question:
          "No officer attended your collision. How long do you have to file a collision report?",
        choices: ["4 days", "10 days", "30 days", "No report is needed if no officer attended"],
        correctIndex: 0,
        explanation:
          "Four days. Where a law enforcement officer has not filed a report for you, filing the collision report form yourself is required by state law.",
        context:
          "The four-day deadline sits alongside the other things Washington asks of you after a crash: exchange names, contact details, driver licence numbers and insurance details; photograph the damage; and give information to police or emergency officials if asked. Where you have hit a parked vehicle and cannot find the owner, leave a note somewhere visible with the date, the time and your contact details.",
        trap:
          "No police attendance does not mean no paperwork. That is precisely the situation where the obligation falls on you.",
        excerptKey: "collision-report-4-days",
        sourceLabel: "Washington State Driver Guide - 5.9 Reporting a crash",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_10",
        topic: "rules",
        question:
          "Where in Washington may you legally drive a vehicle on an ocean beach?",
        choices: [
          "On any ocean beach outside the summer season",
          "On any beach where no sign prohibits it",
          "Nowhere - beach driving is banned statewide",
          "Only in Grays Harbor and Pacific Counties",
        ],
        correctIndex: 3,
        explanation:
          "Beach driving is confined to Grays Harbor and Pacific Counties. The beach counts as a state highway there, so every ordinary driving law applies on the sand.",
        context:
          "The speed limit on the beach is 25 mph, and pedestrians and bicyclists hold right of way at all times, which is stricter than the rule anywhere else. You may only enter through marked beach approaches and may only drive on hard-packed sand, and signs prohibit beach driving in some areas and circumstances.",
        trap:
          "Treating the beach as informal ground where road rules relax gets it exactly backwards. It is legally a state highway, with an unusually strong pedestrian right of way.",
        excerptKey: "beach-driving",
        sourceLabel: "Washington State Driver Guide - 4.20 Beaches",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_11",
        topic: "signals",
        question:
          "What is the difference between how Washington treats a dark signal and a flashing yellow one?",
        choices: [
          "Both become four-way stops",
          "Both become yield signs",
          "A dark signal becomes a four-way stop; a flashing yellow acts as a yield sign",
          "A dark signal becomes a yield sign; a flashing yellow requires a full stop",
        ],
        correctIndex: 2,
        explanation:
          "They are different instructions. A signal that has failed altogether becomes a four-way stop for every approach. A flashing yellow carries the same meaning as a yield sign.",
        context:
          "Washington maps each signal state onto a sign. Flashing red is a stop sign. Flashing yellow is a yield sign, and the guide tells you to treat that intersection as uncontrolled. A dark signal is the odd one out, becoming a four-way stop where you stop completely and yield to traffic on your right. Getting these the wrong way round means either stopping unnecessarily in fast traffic or failing to stop where everyone else does.",
        trap:
          "Both situations feel like a broken signal, which is why they blur together. Only the completely dark one turns the junction into a four-way stop.",
        commonlyMissed: true,
        excerptKey: "dark-signal-4way",
        sourceLabel: "Washington State Driver Guide - 4.10 Broken lights or signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_12",
        topic: "safety",
        question: "At what distance must you dim your high beams for a vehicle you are following?",
        choices: ["500 feet", "300 feet", "200 feet", "1,000 feet"],
        correctIndex: 1,
        explanation:
          "Three hundred feet when you are behind another vehicle. The figure for an oncoming vehicle is longer, at 500 feet.",
        context:
          "The two distances differ because the glare reaches the other driver by different routes. An oncoming driver takes your beams directly in the eyes, so you dim earlier at 500 feet. A driver ahead of you gets them via the mirrors, so 300 feet suffices. The guide's related advice is to use high beams on open roads without street lighting, and to switch to regular headlights whenever you are following someone.",
        trap:
          "The two numbers are easy to swap. The longer distance goes with the oncoming vehicle, because direct glare is worse than reflected glare.",
        excerptKey: "high-beam-distances",
        sourceLabel: "Washington State Driver Guide - 2.5 Vehicle maintenance",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_13",
        topic: "licensing",
        question:
          "You did not enrol in a driver training course and want a permit. When can you take the knowledge exam, and when can you take the skills exam?",
        choices: [
          "Knowledge exam at 15 and a half; skills exam at 18",
          "Knowledge exam at 15; skills exam at 16",
          "Knowledge exam at 16; skills exam at 16 and a half",
          "Both at 15 and a half",
        ],
        correctIndex: 0,
        explanation:
          "Without driver training you can take the knowledge exam once you turn 15 and a half, but you must wait until 18 to take the skills exam and get a licence.",
        context:
          "The two routes diverge sharply. Enrol in a driver training course and you may apply for a permit as early as 15, then licence at 16 or 17 after holding the permit six months, completing the course, and logging 40 hours of day and 10 hours of night driving. Skip the training and the permit comes later and the licence waits until 18. The training route is substantially faster to a licence.",
        trap:
          "Passing the knowledge exam at 15 and a half does not start a countdown to a licence at 16. Without the course, the skills exam is unavailable until 18.",
        excerptKey: "permit-age-no-training",
        sourceLabel: "Washington State Driver Guide - 1.8 Getting a personal driver license",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_14",
        topic: "parking",
        question:
          "How far from a fire station driveway on the opposite side of the street must you park?",
        choices: ["15 feet", "30 feet", "50 feet", "75 feet"],
        correctIndex: 3,
        explanation:
          "Seventy-five feet, and note it applies to the opposite side of the street. The margin exists so appliances can swing out of the station without obstruction.",
        context:
          "This is the longest distance in Washington's parking list and the one most often forgotten, partly because it governs the far side of the road rather than the near one. The rest of the set runs: 5 feet from a driveway, alley or private road; 15 feet from a fire hydrant; 20 feet from a pedestrian safety zone; 30 feet from a traffic signal, stop sign or yield sign; and 50 feet from a railway crossing.",
        trap:
          "Being across the street from the station feels like being out of the way. That is exactly the situation this distance was written for.",
        excerptKey: "park-fire-station-75",
        sourceLabel: "Washington State Driver Guide - 4.18 Parking",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_15",
        topic: "impairment",
        question:
          "Can you be charged with DUI in Washington if the vehicle is parked and not moving?",
        choices: [
          "No - the vehicle must be in motion",
          "Only if the keys are in the ignition",
          "Only on a public highway, never on private property",
          "Yes - being in physical control of a vehicle is enough",
        ],
        correctIndex: 3,
        explanation:
          "Yes. DUI extends to being in physical control of a vehicle even when it is parked, and the test is whether you have the ability to take control of the engine or its operation.",
        context:
          "This surprises people who assume sleeping it off in the car is a safe option. Washington's other DUI provisions run alongside it: 0.08 percent BAC at 21 and over, 0.02 percent under 21, 5.00 nanograms of THC at 21 and over and anything above zero under 21. Alcohol and drug offences stay on your driving record for life, and reinstatement means retaking both the knowledge and skills exams.",
        trap:
          "Pulling over and stopping does not put you outside the offence. Physical control is a broader test than driving.",
        commonlyMissed: true,
        excerptKey: "dui-physical-control",
        sourceLabel: "Washington State Driver Guide - 1.15 Driving under the influence (DUI)",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_16",
        topic: "sharing",
        question:
          "A vehicle ahead of you has stopped at a crosswalk. What may you not do?",
        choices: [
          "Wait behind it until it moves",
          "Overtake it",
          "Sound your horn",
          "Change lanes to the left",
        ],
        correctIndex: 1,
        explanation:
          "Do not overtake a vehicle stopped at a crosswalk. It has almost certainly stopped for someone you cannot see from behind it.",
        context:
          "This is the multiple threat that kills pedestrians: the stopped vehicle hides the person crossing from the driver coming up alongside, and the pedestrian equally cannot see the second vehicle. Washington's crosswalk duty already requires you to stop and remain stopped while someone is within one lane of your half of the road, and every intersection is a crosswalk whether or not it is painted.",
        trap:
          "A vehicle stopped for no visible reason is a warning, not an obstacle. Passing it is exactly when you will meet the pedestrian it stopped for.",
        excerptKey: "crosswalk-unmarked",
        sourceLabel: "Washington State Driver Guide - 4.16 Crosswalks",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_17",
        topic: "rules",
        question:
          "Under RCW 46.61.100, when does driving in the left lane become a traffic infraction?",
        choices: [
          "Whenever you are not actively overtaking",
          "Whenever you are travelling below the speed limit",
          "Only on roads with four or more lanes",
          "When you drive continuously in it and impede the flow of other traffic",
        ],
        correctIndex: 3,
        explanation:
          "The infraction is driving continuously in the left lane of a multilane road when doing so impedes other traffic. The impeding is what makes it an offence, not the mere occupancy.",
        context:
          "The statute also lists the legitimate reasons to be in the left lane: overtaking, travelling faster than the flow, moving left to let traffic merge, and preparing for a left turn. The Driver Guide states the rule more simply as keep right except to pass, which is good practice but a shade stricter than the law. Neither version excuses exceeding the speed limit while overtaking.",
        trap:
          "Driving at the posted limit does not immunise you. If a queue is building behind you, the impeding element is satisfied whatever your speedometer reads.",
        commonlyMissed: true,
        excerptKey: "rcw-left-lane-impede",
        sourceLabel: "RCW 46.61.100 - Keep right except when passing",
        sourceUrl: rcw("46.61.100"),
      },
      {
        id: "wa_s5_18",
        topic: "emergencies",
        question: "Someone is injured at a collision scene. What should you not do?",
        choices: [
          "Give them water while waiting for help",
          "Cover them with a blanket or coat",
          "Check for breathing, then for bleeding",
          "Apply pressure to a bleeding wound",
        ],
        correctIndex: 0,
        explanation:
          "Do not give an injured person anything to drink, water included. Keeping them warm and covered is the right move.",
        context:
          "Washington's sequence at an injury scene is to call 911, avoid moving anyone unless the vehicle is burning or there is another immediate danger, then help those who are not already walking and talking. Check breathing first, then bleeding, and for bleeding apply pressure by hand, then a dressing, then a tourniquet if needed. Cover the person to keep them warm and reduce the risk of shock.",
        trap:
          "Offering water feels like basic kindness and is specifically ruled out, because it can cause harm if surgery follows or if the person cannot swallow safely.",
        excerptKey: "injury-no-drink",
        sourceLabel: "Washington State Driver Guide - 5.9 Reporting an injury",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_19",
        topic: "licensing",
        question: "Your licence expired nine years ago. What do you need to do?",
        choices: [
          "Pay a late fee and renew online",
          "Retake both the knowledge and skills tests",
          "Retake the skills test only",
          "Apply for a duplicate licence",
        ],
        correctIndex: 1,
        explanation:
          "A licence eight or more years expired means retaking both the skills and knowledge tests. Nine years is past that line.",
        context:
          "Below the eight-year mark you may simply owe an additional fee on renewal. Washington also lets you renew up to a year before expiry, which is the simplest way to avoid the problem entirely. Retesting is required in other circumstances too: after reinstatement following an alcohol or drug offence, and where a medical or physical condition indicates testing is needed.",
        trap:
          "The reinstatement path is not a paperwork exercise once the gap gets long enough. At eight years you are back to sitting both exams.",
        excerptKey: "expired-eight-years",
        sourceLabel: "Washington State Driver Guide - 1.15 Maintaining your license",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_20",
        topic: "rules",
        question:
          "It is illegal to park in an electric vehicle charging space in Washington when:",
        choices: [
          "The vehicle is not electric",
          "The stay exceeds four hours",
          "The vehicle is not connected to the charging equipment",
          "The space is outside a designated charging zone",
        ],
        correctIndex: 2,
        explanation:
          "The test is whether you are plugged in. Parking there without being connected to the charging equipment is illegal, whatever kind of vehicle you drive.",
        context:
          "Framing the rule around connection rather than vehicle type is what makes it effective: an electric car occupying the bay without charging blocks it just as thoroughly as a petrol one. It sits with Washington's other parking prohibitions covering fire lanes, access aisles beside disabled bays, intersections, crosswalks, sidewalks and bicycle lanes.",
        trap:
          "Driving an electric vehicle does not entitle you to the space. If you are not connected to the charger, you are parked illegally.",
        excerptKey: "ev-charging-parking",
        sourceLabel: "Washington State Driver Guide - 4.18 Electric vehicle charging station parking",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_21",
        topic: "sharing",
        question:
          "What does Washington require when transporting a dog in the bed of a pickup truck?",
        choices: [
          "Nothing, provided the vehicle stays below 35 mph",
          "A protective harness or enclosure so the animal cannot jump or fall out",
          "A second person riding in the back with the animal",
          "A cover over the truck bed at all times",
        ],
        correctIndex: 1,
        explanation:
          "Carrying an animal outside the vehicle requires a protective harness or enclosure so it cannot jump or fall out. Without one it is illegal.",
        context:
          "Washington treats this as both an animal welfare matter and a road safety one. Transporting animals in a way that risks the animal or public safety is a misdemeanour under the state's cruelty laws, and an officer may take charge of animals in a vehicle if you are taken into custody, with a fee to reclaim them. The guide also notes that a loose animal in the cabin, or one riding on the driver's lap, is a distraction.",
        trap:
          "Low speed and short journeys are not exemptions. The requirement is about restraint, not about how far or how fast you are going.",
        excerptKey: "animal-transport",
        sourceLabel: "Washington State Driver Guide - 4.19 Animals",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_22",
        topic: "signals",
        question:
          "You are approaching a bicycle box at a red light and want to turn right. What does Washington allow?",
        choices: [
          "Turn right on red after stopping, as usual",
          "Pull into the bicycle box and turn from there",
          "You may not turn right on red at a bicycle box",
          "Turn right on red only if no bicycle is present",
        ],
        correctIndex: 2,
        explanation:
          "Right on red is unavailable at a bicycle box. You stay behind the white line until the box has cleared.",
        context:
          "A bicycle box places riders in front of stopped traffic so they cross first when the light turns green and then move into the bike lane on the far side. A vehicle turning right on red would cut straight across that path, which is why the permission is withdrawn. Red arrows remove the same permission, as do No Turn On Red signs.",
        trap:
          "Right on red is a Washington default, so drivers apply it automatically. The bicycle box is one of the specific places where it disappears.",
        commonlyMissed: true,
        excerptKey: "bicycle-box",
        sourceLabel: "Washington State Driver Guide - 4.16 Bicycle boxes",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_23",
        topic: "rightOfWay",
        question:
          "You are stopped in traffic and an intermediate licence holder in the car beside you is on a hands-free call. Is that lawful?",
        choices: [
          "Yes, hands-free is permitted for all drivers",
          "Yes, provided the vehicle is stationary in traffic",
          "Yes, if the call is under two minutes",
          "No - permit and intermediate licence holders may not use a device even hands-free",
        ],
        correctIndex: 3,
        explanation:
          "Intermediate licence and permit holders may not use a cell phone or mobile electronic device at all, including hands-free. Only reporting an emergency is permitted.",
        context:
          "This is the sharpest divide in Washington's distracted driving rules. Ordinary drivers may not hold a device but may use it hands-free. Permit and intermediate licence holders lose the hands-free option too. Being stopped in a queue does not help, because driving includes being on the roadway in traffic. Fines after a first violation can be doubled.",
        trap:
          "Sitting stationary in traffic feels like not driving. It is not a break in the journey for the purposes of this rule.",
        commonlyMissed: true,
        excerptKey: "permit-no-phone",
        sourceLabel: "Washington State Driver Guide - 3.0 Hearing",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_24",
        topic: "speed",
        question:
          "How far does the reduced speed zone extend around a marked school or playground crosswalk?",
        choices: [
          "300 feet in either direction from the crosswalk",
          "100 feet in either direction",
          "500 feet in either direction",
          "Only the width of the crosswalk itself",
        ],
        correctIndex: 0,
        explanation:
          "Three hundred feet either side of the marked crosswalk, where it is properly posted with school or playground speed limit signs. The limit within the zone is 20 mph.",
        context:
          "RCW 46.61.440 supplies the distance, which the Driver Guide does not state - the guide gives the 20 mph figure and notes that signs may clarify when it applies. The zone extends well beyond the painted crossing itself, which is why slowing only as you reach the markings leaves you speeding through most of it. Automated cameras may enforce school zone speeding, with tickets going to the registered owner.",
        trap:
          "Judging the zone by where the paint is puts you over the limit for the approach and the exit. It starts 300 feet out.",
        commonlyMissed: true,
        excerptKey: "rcw-school-zone-300",
        sourceLabel: "RCW 46.61.440 - Speed limit at school or playground crosswalks",
        sourceUrl: rcw("46.61.440"),
      },
      {
        id: "wa_s5_25",
        topic: "safety",
        question:
          "How far should your chest be from the steering wheel?",
        choices: ["At least 6 inches", "At least 8 inches", "At least 10 inches", "At least 15 inches"],
        correctIndex: 2,
        explanation:
          "At least ten inches, to leave room for the airbag to deploy. Sitting closer turns a safety device into a hazard.",
        context:
          "Washington's seating advice is a set of related adjustments made before you move off: the seat far enough back to reach the pedals comfortably and see over the bonnet, the backrest upright enough to sit straight, the steering wheel positioned so your elbows keep a gentle bend, and the headrest level with your ears to limit whiplash. The guide asks you to redo these every time someone else has been driving.",
        trap:
          "Sitting close for better control of the wheel is exactly what the ten-inch figure guards against. An airbag deploys with enough force to injure at short range.",
        excerptKey: "chest-10-inches",
        sourceLabel: "Washington State Driver Guide - 2.5 Driver's seat",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_26",
        topic: "impairment",
        question:
          "What is the consequence of refusing a breath or blood test in Washington?",
        choices: [
          "No consequence, since testing is voluntary",
          "A fine only",
          "A warning on a first refusal",
          "Loss of your driving privilege",
        ],
        correctIndex: 3,
        explanation:
          "Refusal costs you your driving privilege. Under the implied consent law, everyone who drives in Washington has already agreed to be tested where an officer suspects impairment.",
        context:
          "Implied consent means the agreement is a condition of driving rather than something you decide at the roadside. The official sources state the suspension length differently - the Driver Guide gives a range running from 90 to 730 days, or until age 21, whichever is longer, while RCW 46.20.308 states at least one year - so the length is not the point to memorise. What is consistent is that refusing carries a licence penalty of its own, quite separate from any DUI charge.",
        trap:
          "Refusing does not avoid the problem, it adds a second one. The licence sanction applies whether or not the impaired driving charge succeeds.",
        excerptKey: "implied-consent",
        sourceLabel: "Washington State Driver Guide - 1.15 Driving under the influence (DUI)",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_27",
        topic: "rules",
        question:
          "What is the rule about cutting into a ferry queue in Washington?",
        choices: [
          "It is a traffic offence that can lead to a fine",
          "It is discouraged but carries no penalty",
          "It is permitted for vehicles with a reservation",
          "It is permitted within 100 feet of the terminal",
        ],
        correctIndex: 0,
        explanation:
          "Ferry line-cutting is a traffic offence and can bring a fine. Washington State Ferries are part of the state highway network, so road rules apply to the queue.",
        context:
          "Because the ferries count as a marine highway system, all the ordinary rules of the road apply in and around the terminals. Follow the signs into the designated ferry lane and join the back of the queue. Where a holding lane runs through a residential area, do not block driveways or intersections. Bicyclists get priority loading on most ferries and may move up past waiting vehicles to their own waiting area.",
        trap:
          "A queue on a public road is not an informal line where courtesy is the only rule. Cutting it is an enforceable traffic offence.",
        excerptKey: "ferry-line-cutting",
        sourceLabel: "Washington State Driver Guide - 4.20 Ferries",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_28",
        topic: "licensing",
        question:
          "Which document lets you cross the Canadian border by land and board a domestic flight?",
        choices: [
          "An enhanced driver licence",
          "A standard Washington driver licence",
          "A standard driver licence with a vehicle registration",
          "Any Washington ID card",
        ],
        correctIndex: 0,
        explanation:
          "The enhanced driver licence covers domestic air travel, land and sea border crossings and access to federal facilities. Standard licences do none of these.",
        context:
          "Washington states plainly that standard licences and IDs do not meet REAL ID standards, while enhanced ones do. Note the limit on both: neither is valid for international air travel, which still needs a passport. The guide also makes the point that REAL ID is a law rather than a document, and an enhanced licence is one of several ways to satisfy it.",
        trap:
          "An enhanced licence is not a passport substitute for flying abroad. It works for land and sea crossings, not international flights.",
        excerptKey: "edl-real-id",
        sourceLabel: "Washington State Driver Guide - 1.6 Identification and driver licenses",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_29",
        topic: "emergencies",
        question:
          "You are issued a traffic ticket and disagree with it. What should you do at the roadside?",
        choices: [
          "Refuse to sign, since signing admits guilt",
          "Sign only after the officer notes your objection",
          "Refuse to sign and request a supervisor",
          "Sign it - signing is not an admission of guilt",
        ],
        correctIndex: 3,
        explanation:
          "Sign it. Washington is explicit that accepting and signing a ticket is not an admission of guilt, and that refusing to sign could get you arrested.",
        context:
          "Contesting the ticket happens in court, not at the roadside. The guide tells you that you may respectfully ask the officer questions but should not prolong the stop by arguing, and that if you believe the officer acted improperly you can contact their agency and ask for a supervisor afterwards. Once you have the ticket, follow the instructions on the back within 15 days or your driving privileges may be suspended.",
        trap:
          "Refusing to sign feels like preserving your position and does the opposite - it risks arrest while doing nothing to help your case.",
        excerptKey: "ticket-refuse-arrest",
        sourceLabel: "Washington State Driver Guide - 5.10 Getting a ticket",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_30",
        topic: "safety",
        question: "What is the Dutch Reach, and why does Washington teach it?",
        choices: [
          "A mirror adjustment method that removes blind zones",
          "Opening your door with the hand farthest from it, so you turn and see approaching cyclists",
          "A technique for gripping the wheel in a skid",
          "A way of reversing out of an angled parking space",
        ],
        correctIndex: 1,
        explanation:
          "You open the door with your far hand, which forces your body to turn toward the road. That brings approaching cyclists into view and slows the door's swing.",
        context:
          "Dooring is a serious risk to riders because a door opens far faster than anyone can react to it. The technique produces two benefits at once: the twist turns your head and shoulders toward oncoming traffic, and reaching across naturally limits how hard you can push. Washington pairs it with checking your rear and side mirrors before opening, and with looking carefully in all directions after parking.",
        trap:
          "Checking the mirror alone leaves a blind zone right beside the car. The turn of the body is what the technique is for.",
        excerptKey: "dutch-reach",
        sourceLabel: "Washington State Driver Guide - 4.18 Check traffic before you open your door",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_31",
        topic: "rightOfWay",
        question:
          "You are at an uncontrolled intersection intending to turn left, and a car is approaching from the opposite direction. Who yields?",
        choices: [
          "The oncoming car, if you arrived first",
          "Whichever driver is travelling slower",
          "You do",
          "Neither - both should proceed with caution",
        ],
        correctIndex: 2,
        explanation:
          "You yield. Turning left with a vehicle approaching from the opposite direction is one of Washington's four listed uncontrolled-intersection yield situations.",
        context:
          "The other three are a vehicle already in the intersection, entering or crossing a state highway from a secondary road, and entering a paved road from an unpaved one. None of them requires a sign to operate. RCW 46.61.185 states the same left-turn duty in general terms, covering turns within an intersection and into an alley, private road or driveway.",
        trap:
          "Arriving first does not override the left-turn duty. It settles ties between drivers doing the same thing, and a left turn is not the same thing as going straight.",
        excerptKey: "rcw-left-turn-yield",
        sourceLabel: "RCW 46.61.185 - Vehicle turning left",
        sourceUrl: rcw("46.61.185"),
      },
      {
        id: "wa_s5_32",
        topic: "sharing",
        question:
          "Why might a fire truck travel clockwise through a traffic calming circle?",
        choices: [
          "Emergency vehicles are exempt from all direction rules",
          "Because calming circles are built for passenger vehicles and may not fit larger ones",
          "Because clockwise travel is the default at calming circles",
          "To warn other drivers of an emergency ahead",
        ],
        correctIndex: 1,
        explanation:
          "Calming circles are designed for passenger cars, and a fire truck, bus or delivery lorry may simply not fit round one. The guide warns they might have to go clockwise to get through.",
        context:
          "This is the practical difference between a calming circle and a roundabout. A roundabout is engineered for large vehicles, with a truck apron around the central island and room for two lanes' worth of swing. A calming circle is retrofitted into an existing junction to slow traffic, and its approaches may carry stop signs, yield signs or nothing at all, so you apply whatever right-of-way rules that intersection has.",
        trap:
          "A large vehicle coming the other way round is not a driver going the wrong way. Give it space rather than trying to hold your line.",
        commonlyMissed: true,
        excerptKey: "calming-circle-large",
        sourceLabel: "Washington State Driver Guide - 4.15 Traffic calming circles",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_33",
        topic: "signals",
        question:
          "What is the difference between aggressive driving and road rage in Washington?",
        choices: [
          "They are the same offence under different names",
          "Aggressive driving is a traffic offence; road rage is a criminal offence",
          "Aggressive driving is criminal; road rage is a civil matter",
          "Road rage applies only to passengers",
        ],
        correctIndex: 1,
        explanation:
          "Washington separates them by seriousness. Aggressive driving is a traffic offence; road rage, which involves violent behaviour using a vehicle or another weapon, is a criminal offence.",
        context:
          "Aggressive driving means deliberately doing something that endangers people or property - speeding, tailgating, unsafe lane changes, improper signalling, ignoring traffic control devices, or driving too close to someone walking or cycling. Road rage escalates to an angry, violent response to something on the road. The guide asks you to report road rage in progress by calling 911, with location, plate, direction of travel and a description.",
        trap:
          "These are not two words for impatience. One is an infraction, the other is a crime, and the line is violence.",
        excerptKey: "road-rage-criminal",
        sourceLabel: "Washington State Driver Guide - 3.1 Road rage",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_34",
        topic: "parking",
        question:
          "What is the rule about hanging a disabled parking placard from your rearview mirror?",
        choices: [
          "It must be displayed there whenever the vehicle is in use",
          "It may hang there only while the vehicle is parked",
          "Do not hang it there while driving, because it obstructs your view",
          "It must be displayed on the dashboard at all times",
        ],
        correctIndex: 2,
        explanation:
          "Do not drive with it hanging from the mirror. Washington's reason is straightforward - it blocks your view of the road.",
        context:
          "Placards and disabled plates give access to reserved spaces, and Washington fines both parking in one without displaying the required credential and blocking the striped access aisle beside it. Applying for temporary or permanent disabled parking privileges requires you and your physician to complete the Disabled Parking Application for Individuals form.",
        trap:
          "The mirror is the obvious place to hang it and that is the point of the warning. Display it when parked, not while driving.",
        excerptKey: "placard-not-driving",
        sourceLabel: "Washington State Driver Guide - 4.18 Reserved disabled parking",
        sourceUrl: HB,
      },
      {
        id: "wa_s5_35",
        topic: "speed",
        question:
          "You are in an emergency zone on a road posted at 70 mph. What is the fastest you may drive?",
        choices: [
          "60 mph",
          "70 mph, if you have moved over a lane",
          "65 mph",
          "50 mph",
        ],
        correctIndex: 3,
        explanation:
          "Fifty miles per hour is the ceiling. The Driver Guide states you should never drive faster than 50 mph in an emergency zone, whatever the posted limit.",
        context:
          "The general requirement is to move over into a lane farther from the incident, or, where that would be unsafe, to slow to at least 10 mph below the posted limit. RCW 46.61.212 handles high-speed roads specifically: where the posted limit is 60 mph or more, you reduce to no more than 50 mph. The zone runs 200 feet before and after the scene, and covers tow trucks, solid waste and utility vehicles as well as police, fire and ambulances.",
        trap:
          "Taking 10 mph off a 70 mph limit gives 60, which is still too fast. The 50 mph cap overrides the subtraction on high-speed roads.",
        commonlyMissed: true,
        excerptKey: "emergency-zone-slow",
        sourceLabel: "Washington State Driver Guide - 4.17 Emergency zone",
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
      "Thirty questions in the shape of the real thing. Washington's knowledge test is 40 questions and you need 32 correct - 80 percent. Mixed topics, no hints, exam wording.",
    questions: [
      {
        id: "wa_s6_01",
        topic: "licensing",
        question:
          "How many questions are on the Washington knowledge test, and how many must you answer correctly?",
        choices: [
          "25 of 30",
          "30 of 40",
          "32 of 40",
          "40 of 50",
        ],
        correctIndex: 2,
        explanation:
          "You must get 32 out of 40 correct, which is 80 percent. DOL states the figures on its testing page; the Driver Guide itself does not give them.",
        context:
          "The knowledge test is multiple choice and is offered in twelve languages, though you should check your testing location offers the one you need. A passing score is valid for two years, and if you fail there may be a waiting period before you can retest. You can sit it at an approved driver training school or by appointment at a driver licensing office, and fees vary by location.",
        trap:
          "The guide describes the exam without ever stating its length or pass mark. If you studied only the handbook, this is a number you will not have met.",
        excerptKey: "dol-knowledge-32-40",
        sourceLabel: "Washington DOL - Do I need to take a test?",
        sourceUrl: TEST,
      },
      {
        id: "wa_s6_02",
        topic: "rightOfWay",
        question:
          "A pedestrian steps into an unmarked crosswalk at an intersection ahead of you. What must you do?",
        choices: [
          "Stop and remain stopped while they cross",
          "Slow down and pass behind them",
          "Continue, since the crosswalk is unmarked",
          "Sound your horn and proceed with care",
        ],
        correctIndex: 0,
        explanation:
          "Stop and stay stopped. Every intersection in Washington is legally a crosswalk whether or not it is painted, so the duty is identical to a marked one.",
        context:
          "The statutory duty applies while the pedestrian is within one lane of the half of the roadway you are on or turning onto. The Driver Guide adds a practical margin, asking you to wait until they have cleared your lane and one more - or, if they are using a wheelchair, cane, guide dog or other service animal, until they have completely crossed.",
        trap:
          "The absence of paint is not the absence of a crosswalk, and yielding is not the same as stopping and remaining stopped.",
        commonlyMissed: true,
        excerptKey: "rcw-crosswalk-stop",
        sourceLabel: "RCW 46.61.235 - Crosswalks",
        sourceUrl: rcw("46.61.235"),
      },
      {
        id: "wa_s6_03",
        topic: "signals",
        question: "What should you do at a flashing yellow traffic light?",
        choices: [
          "Come to a complete stop before proceeding",
          "Treat it as a yield sign and proceed when you have right of way",
          "Treat it as a four-way stop",
          "Continue at the posted speed without changing anything",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow carries the same meaning as a yield sign. Treat the junction as uncontrolled and go only when you actually have right of way.",
        context:
          "Washington's flashing signals each map onto a sign. Flashing red is a stop sign, requiring a complete stop. Flashing yellow is a yield sign. A signal that has gone completely dark is neither - that becomes a four-way stop, where every approach stops and yields to the traffic on its right.",
        trap:
          "Flashing yellow and a dead signal produce different obligations. Only the dark one turns the intersection into a four-way stop.",
        excerptKey: "flashing-yellow-yield",
        sourceLabel: "Washington State Driver Guide - 4.11 Traffic light signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_04",
        topic: "parking",
        question: "How close to a railway crossing may you park?",
        choices: ["15 feet", "50 feet", "75 feet", "100 feet"],
        correctIndex: 1,
        explanation:
          "Fifty feet from a railway crossing. Parking closer obstructs the sight lines drivers need to check the track before crossing.",
        context:
          "Washington's parking distances work best learned as one set, because the numbers are all different: 5 feet from a driveway, alley or private road; 15 feet from a fire hydrant; 20 feet from a pedestrian safety zone; 30 feet from a traffic signal, stop sign or yield sign; 50 feet from a railway crossing; and 75 feet from a fire station driveway on the opposite side of the street.",
        trap:
          "The railway figure is one of the larger ones, and it is easy to confuse with the 15 feet that applies to a fire hydrant.",
        excerptKey: "park-railroad-50",
        sourceLabel: "Washington State Driver Guide - 4.18 Parking",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_05",
        topic: "impairment",
        question: "What is the BAC limit for a driver under the age of 21 in Washington?",
        choices: [
          "0.02 percent",
          "0.05 percent",
          "0.08 percent",
          "There is no separate limit for under-21 drivers",
        ],
        correctIndex: 0,
        explanation:
          "Drivers under 21 face the same consequences at 0.02 percent that drivers 21 and over face at 0.08 percent. It is close to zero tolerance.",
        context:
          "The cannabis thresholds mirror the same structure: 5.00 nanograms of active THC per millilitre for drivers 21 and over, and anything above zero for drivers under 21. DUI in Washington also extends to being in physical control of a parked vehicle, and alcohol and drug offences remain on your driving record for life.",
        trap:
          "Everyone remembers 0.08 and forgets there is a second, much lower tier for young drivers. At 0.02, a single drink can put an under-21 driver over.",
        commonlyMissed: true,
        excerptKey: "bac-thresholds",
        sourceLabel: "Washington State Driver Guide - 1.15 Blood Alcohol Concentration",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_06",
        topic: "sharing",
        question:
          "You are driving behind a school bus on a two-lane road when its red lights begin flashing. What must you do?",
        choices: [
          "Pass on the left if the road is clear",
          "Slow to 20 mph and continue past",
          "Stop only if you can see children",
          "Stop and wait until the lights stop flashing and the arm retracts",
        ],
        correctIndex: 3,
        explanation:
          "Stop and wait. Traffic travelling behind the bus stops on every road, and you may go only once the lights stop flashing, the sign retracts and the arm returns to the front bumper.",
        context:
          "There is no lane-count exception for traffic travelling the same way as the bus - that exception only ever applies to oncoming traffic. Washington also blocks the obvious workaround by stating that drivers in all turn lanes must stop, and that you should not use a centre turn lane to pass a stopped school bus. Fines are doubled for passing one.",
        trap:
          "Keep watching after the lights go out. A child who is slow to cross does not know the rule has just expired.",
        commonlyMissed: true,
        excerptKey: "bus-same-direction",
        sourceLabel: "Washington State Driver Guide - 4.2 Sharing with school buses",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_07",
        topic: "speed",
        question: "What is the speed limit in a Washington school zone?",
        choices: ["15 mph", "25 mph", "30 mph", "20 mph"],
        correctIndex: 3,
        explanation:
          "Twenty miles per hour. Where the zone is marked around a school or playground crosswalk, it extends 300 feet either side of the crossing.",
        context:
          "School zones cover the roads around a school building or playground and may be marked with signs, pavement markings or flashing lights. Some signs narrow the hours the limit applies. School zone speeding is one of the three things automated cameras may enforce in Washington, alongside running a red light and failing to stop at a railway crossing signal.",
        trap:
          "The limit does not lift when the school day ends. Children use playgrounds and stay for activities well after hours.",
        excerptKey: "school-zone-20",
        sourceLabel: "Washington State Driver Guide - 4.17 Zones",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_08",
        topic: "rules",
        question: "When may you cross double solid white lines?",
        choices: [
          "When passing a slower vehicle",
          "Never - crossing them is illegal",
          "When moving into an exit lane",
          "When traffic in your lane has stopped",
        ],
        correctIndex: 1,
        explanation:
          "Never. Double solid white lines act as a barrier between lanes and Washington makes crossing them illegal outright.",
        context:
          "White lines separate traffic moving in the same direction, and the pattern grades how freely you may move. A dashed white line may be crossed when safe. A single solid white line means stay in your lane unless something specific requires a change. Double solid white removes the option altogether. Shortened dashes mean something else again - your lane is ending.",
        trap:
          "Missing your exit is the situation that tempts drivers across these lines, and it is not an exception.",
        excerptKey: "double-white-illegal",
        sourceLabel: "Washington State Driver Guide - 4.16 Road markings",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_09",
        topic: "safety",
        question: "Until what age or size must a child use a booster seat in Washington?",
        choices: [
          "Until adult belts fit properly, typically between 8 and 12 years old",
          "Until age 6",
          "Until age 4",
          "Until they weigh 60 pounds",
        ],
        correctIndex: 0,
        explanation:
          "From age 4 a child stays in a car or booster seat until the vehicle's lap and shoulder belts fit properly, which the guide says is typically between 8 and 12.",
        context:
          "The progression runs rear-facing until age 2, a harnessed car seat from 2 to 4, then a booster until adult belts fit. RCW 46.61.687 makes the booster threshold a height rather than an age - under four feet nine inches. Separately, children under 13 should ride in the back seat because of the risk from a deploying airbag.",
        trap:
          "The end of the booster stage is set by fit, not by a birthday. A small ten-year-old may still need one.",
        excerptKey: "child-booster",
        sourceLabel: "Washington State Driver Guide - 2.6 Child seats",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_10",
        topic: "rightOfWay",
        question: "What must you do when entering a roundabout?",
        choices: [
          "Stop at the entry line in every case",
          "Merge at the speed of circulating traffic",
          "Yield to all traffic already in the roundabout",
          "Yield only to vehicles signalling to exit",
        ],
        correctIndex: 2,
        explanation:
          "Yield to everything already circulating. Look left, wait for a gap, then enter and travel counterclockwise to your exit.",
        context:
          "Washington roundabouts are designed for 15 to 25 mph. Pick your lane on approach from the lane choice sign and hold it until you exit - changing lanes inside is what causes collisions there. Stop for pedestrians and bicyclists in the crosswalks at entry and exit, give large vehicles the two lanes of space they need, and if an emergency vehicle approaches, drive out of the roundabout before pulling over.",
        trap:
          "Yielding is not stopping. An unnecessary stop at a clear roundabout invites a rear-end collision.",
        excerptKey: "roundabout-yield-left",
        sourceLabel: "Washington State Driver Guide - 4.15 How to drive a roundabout",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_11",
        topic: "signs",
        question: "What does an orange sign mean?",
        choices: [
          "A school crossing lies ahead",
          "The road is about to change surface",
          "Motorist services are available",
          "You are entering a construction or maintenance area",
        ],
        correctIndex: 3,
        explanation:
          "Orange marks construction and maintenance. Fines double for offences committed in construction areas when workers are present.",
        context:
          "Inside a work zone you must yield to construction personnel, to vehicles with flashing yellow lights and to equipment. Washington asks you to reduce speed even where no workers are visible, since narrow lanes and rough surfaces are hazards in themselves, and to keep obeying the posted signs until you pass the End Road Work sign.",
        trap:
          "Orange is not a general warning colour. Yellow warns of road conditions; fluorescent yellow-green warns of people; orange means roadworks specifically.",
        excerptKey: "colour-orange",
        sourceLabel: "Washington State Driver Guide - 4.12 Signs",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_12",
        topic: "impairment",
        question: "What does Washington's distracted driving law say about holding a phone?",
        choices: [
          "Holding a phone is allowed at speeds below 25 mph",
          "You cannot hold any electronic device while driving",
          "Holding a phone is allowed when stopped in traffic",
          "Holding a phone is allowed for calls but not for texting",
        ],
        correctIndex: 1,
        explanation:
          "No driver may hold an electronic device while driving - phones, tablets or gaming devices - regardless of age or experience. Hands-free use is permitted for most drivers.",
        context:
          "There is a stricter tier underneath. Permit and intermediate licence holders may not use a device at all, including hands-free, except to report an emergency. Washington separately bans driving while wearing earbuds, headphones or headsets, allowing only a single hands-free earpiece in one ear. Fines after a first violation can be doubled.",
        trap:
          "Hands-free is the general exemption but not the universal one. It is unavailable to exactly the drivers most likely to be sitting this test.",
        commonlyMissed: true,
        excerptKey: "no-holding-device",
        sourceLabel: "Washington State Driver Guide - 3.4 Washington's distracted driving laws",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_13",
        topic: "rules",
        question:
          "You are turning left at an intersection. Which lane should you finish the turn in?",
        choices: [
          "Whichever lane is clearest",
          "The outermost lane, to leave room for others",
          "The lane closest to the one you came from",
          "Any lane, provided you signal afterwards",
        ],
        correctIndex: 2,
        explanation:
          "State law requires you to turn into the lane closest to the one you came from. Change lanes afterwards if you need a different one.",
        context:
          "The rule applies equally to left and right turns, and exists so other drivers can predict where your vehicle will emerge. Where there is more than one turn lane, stay in your original lane through the turn rather than drifting across. RCW 46.61.290 frames it as position: a left turn is approached in the extreme left-hand lane available, a right turn as close as practicable to the right-hand curb.",
        trap:
          "Swinging wide to set up your onward route is the common error, and it is exactly how vehicles collide in adjacent turn lanes.",
        excerptKey: "turn-closest-lane",
        sourceLabel: "Washington State Driver Guide - 4.14 Turning",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_14",
        topic: "emergencies",
        question:
          "You see a police car stopped on the shoulder with its lights flashing. What does the law require?",
        choices: [
          "Maintain speed and stay in your lane",
          "Stop until the officer signals you past",
          "Move over into a farther lane, or slow to at least 10 mph below the posted limit",
          "Sound your horn as you pass",
        ],
        correctIndex: 2,
        explanation:
          "Move over into a lane farther away, or if that is unsafe, slow to at least 10 mph below the posted limit. The Driver Guide also caps you at 50 mph in an emergency zone.",
        context:
          "Washington's emergency zone covers far more than police cars. Tow trucks, solid waste trucks, incident response, highway maintenance and utility vehicles all count alongside fire trucks and ambulances. RCW 46.61.212 sets the zone as the adjacent lanes 200 feet before and after the scene, so the duty begins well before you are level with it.",
        trap:
          "Slowing is the fallback, not the first choice. Where you can safely change lanes, that is what is expected.",
        commonlyMissed: true,
        excerptKey: "emergency-zone-action",
        sourceLabel: "Washington State Driver Guide - 4.17 Emergency zone",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_15",
        topic: "safety",
        question: "What should you do if your vehicle starts to skid?",
        choices: [
          "Brake hard and steer against the skid",
          "Ease off the accelerator and steer where the vehicle is moving",
          "Accelerate to pull the vehicle straight",
          "Apply the parking brake to slow the rear wheels",
        ],
        correctIndex: 1,
        explanation:
          "Lift off the accelerator and steer in the same direction the vehicle is actually moving, correcting until the tyres regain traction.",
        context:
          "Washington's sequence is off the accelerator, press or pump the brakes, steer in the direction of travel, keep correcting, then reassess conditions once control returns. Antilock brakes help control wheel rotation and preserve steering; without them, stamping the pedal can worsen the skid. Since a skidding vehicle cannot really be controlled, avoiding one matters more than recovering.",
        trap:
          "Steering against the skid feels corrective and deepens it. You steer where the car is going, not where you want it to be.",
        excerptKey: "skid-steer-direction",
        sourceLabel: "Washington State Driver Guide - 5.6 Skidding",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_16",
        topic: "sharing",
        question: "How much clearance must you leave when passing a bicyclist?",
        choices: ["1 foot", "2 feet", "At least 3 feet", "At least 6 feet"],
        correctIndex: 2,
        explanation:
          "At least three feet between the bicyclist and the widest part of your vehicle - mirrors and trailers included, not just the bodywork.",
        context:
          "Washington prefers a full lane change where one is available: with two lanes going your way, move over completely rather than easing past in your own. You cannot share a lane with a bicyclist at all, and riders may lawfully use the full lane and position themselves to be seen. Bicyclists in crosswalks count as pedestrians, so you yield to them in marked and unmarked crossings alike.",
        trap:
          "Three feet is a floor rather than a target. The rider may need to move suddenly for a hazard you cannot see from behind.",
        commonlyMissed: true,
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Washington State Driver Guide - 4.6 Sharing with bicyclists",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_17",
        topic: "signals",
        question: "What does a steady yellow light mean?",
        choices: [
          "Speed up to clear the intersection",
          "Stop immediately, wherever you are",
          "The light will turn green shortly",
          "The light is changing to red - slow down and prepare to stop",
        ],
        correctIndex: 3,
        explanation:
          "Yellow means red is coming. Slow down and prepare to stop; if you are already in the intersection, carry on through at the posted speed.",
        context:
          "Washington closes the obvious loophole explicitly: you are not allowed to accelerate beyond the posted speed limit either to enter or to clear an intersection on a yellow. The yellow arrow works the same way for a turning movement, warning that the arrow is about to go red and that you should prepare to stop and give way to oncoming traffic.",
        trap:
          "Treating yellow as an invitation to accelerate is a violation in its own right, quite apart from any collision it causes.",
        excerptKey: "yellow-no-accelerate",
        sourceLabel: "Washington State Driver Guide - 4.11 Traffic light signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_18",
        topic: "licensing",
        question:
          "What is the nighttime driving restriction for an intermediate licence holder?",
        choices: [
          "No driving between 1 a.m. and 5 a.m. unless accompanied by a parent, guardian or licensed driver at least 25",
          "No driving between midnight and 6 a.m. under any circumstances",
          "No driving after 10 p.m. on school nights",
          "There is no nighttime restriction",
        ],
        correctIndex: 0,
        explanation:
          "The curfew runs from 1 a.m. to 5 a.m., and the exception requires a parent, guardian or a licensed driver aged at least 25 in the vehicle.",
        context:
          "The nighttime restriction expires after one year of safe driving, and intermediate licence holders may drive at any hour for agricultural purposes. Passenger limits run alongside: no passengers under 20 except immediate family for the first six months, then no more than three. All restrictions lift automatically at 18 without needing a new licence.",
        trap:
          "Any adult in the car will not do. The supervising driver has to be a parent or guardian, or licensed and at least 25.",
        commonlyMissed: true,
        excerptKey: "intermediate-curfew",
        sourceLabel: "Washington State Driver Guide - 1.8 Intermediate driver license",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_19",
        topic: "rules",
        question: "What does Washington's guide say about using the shoulder of the road?",
        choices: [
          "It may be used to pass slow vehicles",
          "You should not drive on it unless directed by officials or signs",
          "It may be used freely during heavy congestion",
          "It may be used by vehicles turning right",
        ],
        correctIndex: 1,
        explanation:
          "Stay off the shoulder unless officials or signs direct you onto it. Washington also states specifically that you should not use shoulders to pass.",
        context:
          "This sits with several related rules in the guide's general driving guidance: keep right except to pass, remember carpool lanes are not passing lanes, avoid blocking travel lanes and keep moving until you can pull over safely, and do not reverse on a road - backing up on a shoulder or freeway is illegal.",
        trap:
          "Congestion is not an authorisation. The shoulder is emergency space and a refuge for stopped vehicles, not an extra lane.",
        excerptKey: "no-shoulder-passing",
        sourceLabel: "Washington State Driver Guide - 4.10 General driving guidance",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_20",
        topic: "parking",
        question:
          "You are parking on a hill where there is no curb. Which way should the wheels point?",
        choices: [
          "Straight ahead",
          "To the left, toward the centre of the road",
          "Toward the edge of the road",
          "It does not matter without a curb",
        ],
        correctIndex: 2,
        explanation:
          "Point the wheels toward the edge of the road, whichever way you are facing. If the vehicle rolls, it leaves the carriageway instead of entering it.",
        context:
          "Every hill parking rule in Washington is a backup for a parking brake that fails. With a tall curb, face uphill with the wheels turned away so the tyre backs into it, and face downhill with the wheels turned toward it. Without a curb there is nothing to catch the vehicle, so the aim shifts to steering it away from traffic. Always set the parking brake as well.",
        trap:
          "The no-curb case is not a variation on the curb rules but its own answer, and the direction you face makes no difference to it.",
        excerptKey: "park-no-curb",
        sourceLabel: "Washington State Driver Guide - 4.18 If there is no curb",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_21",
        topic: "signs",
        question: "What does a solid yellow line on your side of the centre indicate?",
        choices: [
          "You may pass when the road ahead is clear",
          "The road is about to become one-way",
          "You may not cross it to pass",
          "A bicycle lane begins",
        ],
        correctIndex: 2,
        explanation:
          "A solid yellow line on your side means no passing. It can also mark the edge of the road.",
        context:
          "Yellow tells you traffic beyond the line runs the opposite way; the pattern tells you whether you may cross it. Dashed yellow permits passing when it is safe. Double solid yellow forbids it in both directions. Where a solid and a dashed line sit together, the side with the dashed line may pass and the side with the solid line may not.",
        trap:
          "A clear road ahead does not override the marking. The line reflects sight lines and hazards you may not be able to see.",
        excerptKey: "solid-yellow-no-pass",
        sourceLabel: "Washington State Driver Guide - 4.16 Road markings",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_22",
        topic: "safety",
        question: "When must you use headlights according to Washington law?",
        choices: [
          "Only when street lighting is switched off",
          "Whenever your windscreen wipers are operating",
          "From sunset to sunrise",
          "From half an hour after sunset to half an hour before sunrise",
        ],
        correctIndex: 3,
        explanation:
          "The window runs from half an hour after sunset to half an hour before sunrise. RCW 46.37.020 adds a second trigger whenever people and vehicles are not clearly discernible at a thousand feet.",
        context:
          "Washington has no law tying headlights to wipers, though the Driver Guide offers rain, snow, fog and smoke as a practical reminder to switch them on. Daytime running lights do not satisfy the requirement - they are dimmer than headlights and do not illuminate your tail lights, which is what traffic behind you needs to see.",
        trap:
          "Several nearby states do tie headlights to wipers, so drivers import the rule. Washington's legal trigger is visibility, not wiper use.",
        commonlyMissed: true,
        excerptKey: "headlight-times",
        sourceLabel: "Washington State Driver Guide - 2.5 Vehicle maintenance",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_23",
        topic: "rightOfWay",
        question:
          "Two vehicles arrive at a four-way stop at the same moment. Who has right of way?",
        choices: [
          "The vehicle on the right",
          "The vehicle on the left",
          "The vehicle travelling straight, whichever side it is on",
          "The vehicle that signals first",
        ],
        correctIndex: 0,
        explanation:
          "In a genuine tie, the vehicle on the right goes first. That rule only applies once arrival order has failed to settle it.",
        context:
          "Arrival order is the primary rule at a four-way stop and resolves most situations on its own. The right-hand rule is the tie-break for simultaneous arrivals, and the same tie-break applies where a signal has gone dark. On top of both sits the rule that a vehicle turning left yields to traffic going straight or turning right.",
        trap:
          "Drivers reach for the right-hand rule too early. If one of you clearly arrived first, arrival order decides and position is irrelevant.",
        excerptKey: "four-way-tie-right",
        sourceLabel: "Washington State Driver Guide - 4.13 4-way stop",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_24",
        topic: "impairment",
        question:
          "Which statement about cannabis and driving in Washington is correct?",
        choices: [
          "Adults over 21 may drive after moderate use",
          "Driving after consuming any cannabis is illegal at every age",
          "Only smoked cannabis affects driving ability",
          "Edibles are exempt from impaired driving law",
        ],
        correctIndex: 1,
        explanation:
          "Driving after consuming any cannabis is illegal for all ages. Recreational use is legal at 21, but that governs possession and consumption, not driving.",
        context:
          "The guide states there is no safe amount of cannabis for driving, and names edibles, patches, vapes, tinctures and topicals as forms that all count. The numeric thresholds are 5.00 nanograms of active THC per millilitre of blood at 21 and over, and anything above zero under 21. Mixing cannabis with alcohol or other drugs is polydrug use, which Washington identifies as the impairment most often present in fatal crashes.",
        trap:
          "Legalisation changed what you may possess, not what you may drive after using. The two questions are entirely separate.",
        excerptKey: "cannabis-no-safe-amount",
        sourceLabel: "Washington State Driver Guide - 3.1 Cannabis and driving",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_25",
        topic: "sharing",
        question:
          "A pedestrian using a guide dog is crossing ahead of you. When may you proceed?",
        choices: [
          "Once they have cleared your lane",
          "Once they have cleared your lane and one more",
          "Once they have completely crossed the street",
          "As soon as they pass the centre of the road",
        ],
        correctIndex: 2,
        explanation:
          "Wait until they have completely crossed. Washington applies a stricter standard to anyone using a wheelchair, cane, guide dog or other service animal.",
        context:
          "The ordinary standard is already more demanding than most drivers assume - wait until a pedestrian has cleared your lane and one additional lane. For someone using a mobility aid or service animal, the wait runs to the full crossing. The guide also states that interfering with a service animal is unlawful, and warns against sounding your horn, which can frighten or confuse the animal.",
        trap:
          "The one-extra-lane rule does not apply here. This is the situation Washington singles out for the longer wait.",
        commonlyMissed: true,
        excerptKey: "ped-clear-extra-lane",
        sourceLabel: "Washington State Driver Guide - 4.1 Sharing with people",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_26",
        topic: "emergencies",
        question: "What should you do first if your vehicle breaks down on a highway?",
        choices: [
          "Get the vehicle off the road and away from traffic if you can",
          "Stand behind the vehicle to warn approaching drivers",
          "Raise the hood and wait in the driver's seat",
          "Walk to the nearest exit for help",
        ],
        correctIndex: 0,
        explanation:
          "Get clear of traffic first. If that is impossible, stop where approaching drivers have a clear view of you rather than just over a crest or around a curve.",
        context:
          "Once stopped, put on the emergency flashers and headlights, and place flares 200 to 300 feet behind the vehicle. Without flares, stand somewhere safe and wave traffic around. Raising the hood or tying a white cloth to the aerial, mirror or door handle signals that you need help. Washington warns you not to stand or walk in traffic lanes.",
        trap:
          "Standing behind the car to flag people down puts you in the lane where the collision would happen. Warn from a safe position.",
        excerptKey: "breakdown-off-road",
        sourceLabel: "Washington State Driver Guide - 5.7 Vehicle failures",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_27",
        topic: "signals",
        question: "What does a red arrow mean at a traffic signal?",
        choices: [
          "Stop, then turn when clear as at a red ball",
          "Yield to oncoming traffic and turn",
          "The signal is about to change to green",
          "You may not travel in the direction of the arrow",
        ],
        correctIndex: 3,
        explanation:
          "A red arrow prohibits movement in that direction completely, and it removes the ordinary permission to turn on red.",
        context:
          "The distinction between a red ball and a red arrow determines whether turning on red is available at all. At a red ball you may turn right after a full stop, or left onto a one-way street, unless a sign forbids it. A red arrow withdraws that. So does a No Turn On Red sign, and so does the presence of a bicycle box at the intersection.",
        trap:
          "Treating a red arrow like a red ball is the classic error. It is a prohibition on the movement, not a pause before it.",
        excerptKey: "red-arrow",
        sourceLabel: "Washington State Driver Guide - 4.11 Traffic light signals",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_28",
        topic: "licensing",
        question: "What insurance liability minimums does Washington require?",
        choices: [
          "$15,000 / $30,000 / $5,000",
          "$25,000 / $50,000 / $10,000",
          "$50,000 / $100,000 / $25,000",
          "$100,000 / $300,000 / $50,000",
        ],
        correctIndex: 1,
        explanation:
          "Twenty-five thousand for the injury or death of one person, fifty thousand for two or more in a single collision, and ten thousand for damage to others' property.",
        context:
          "Washington requires you to have liability insurance and to keep proof of it with you or in the vehicle. Driving without insurance is among the grounds listed for losing your driving privileges. Proof of insurance is one of the three documents an officer will typically ask for at a stop, alongside your driver licence and vehicle registration.",
        trap:
          "The three figures are easy to transpose. The larger bodily injury figure covers two or more people in one collision, not a single serious injury.",
        excerptKey: "insurance-minimums",
        sourceLabel: "Washington State Driver Guide - 2.3 Insurance required",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_29",
        topic: "rules",
        question: "What must you do if a police officer pulls you over at night?",
        choices: [
          "Step out of the vehicle to meet the officer",
          "Retrieve your licence and registration before they reach the window",
          "Leave the engine running until instructed otherwise",
          "Turn on your interior lights and keep your hands on the wheel",
        ],
        correctIndex: 3,
        explanation:
          "Switch on the interior lights and keep your hands on the steering wheel. Both make the stop more predictable for the officer.",
        context:
          "Washington's sequence is to signal and pull to the right as soon as it is safe, turn off the engine and any audio, stay in the vehicle unless told otherwise, and follow instructions. Tell the officer immediately if there is a weapon in the vehicle, and wait for their instructions before reaching for your licence or documents - saying where they are first.",
        trap:
          "Getting your documents out before the officer arrives looks helpful and reads as reaching for something unseen. Wait to be asked.",
        excerptKey: "pullover-interior-lights",
        sourceLabel: "Washington State Driver Guide - 5.10 Getting pulled over",
        sourceUrl: HB,
      },
      {
        id: "wa_s6_30",
        topic: "safety",
        question:
          "How much space does Washington ask you to keep from the vehicle in front?",
        choices: [
          "At least twice the length of your vehicle",
          "At least three seconds of travel time",
          "At least 50 feet at any speed",
          "One car length for every 10 mph of speed",
        ],
        correctIndex: 0,
        explanation:
          "Washington states it as at least twice the length of your vehicle. The guide never uses a seconds-based following rule at all.",
        context:
          "Increase the gap wherever stopping takes longer: at night, on unfamiliar roads, in snow, and behind large vehicles, which need far more distance than a car. RCW 46.61.145 backs this with a standard rather than a number, forbidding you to follow more closely than is reasonable and prudent given speed, traffic and road conditions.",
        trap:
          "The three-second rule is sound practice and widely taught elsewhere, but it is not what Washington's guide says.",
        commonlyMissed: true,
        excerptKey: "following-two-lengths",
        sourceLabel: "Washington State Driver Guide - 5.2 Space",
        sourceUrl: HB,
      },
    ],
  },
];
