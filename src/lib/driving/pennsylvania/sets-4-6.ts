import type { DrivingTestSet } from "../types";

// Sources as for sets 1-3: the Pennsylvania Driver's Manual (PUB 95, 4-21),
// PennDOT's own pages, and the Pennsylvania Vehicle Code where the 2021
// manual is silent or has been overtaken - notably the snow-and-ice removal
// law added by Act 90 of 2022 and the Move Over fines raised by Act 105 of
// 2020. Questions are original; explanations and context are our own words.
const HB =
  "https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/dvspubsforms/bdl/bdl-manuals/pa-drivers-manual-non-commercial/english/pub%2095.pdf";
const TESTING =
  "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/testing";
const POINTS =
  "https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/dvspubsforms/bdl/bdl-fact-sheets/fs-ps.pdf";
const WORKZONE =
  "https://www.pa.gov/agencies/penndot/traveling-in-pa/safety/traffic-safety-driver-topics/work-zone-safety";
const CODE_3721 = "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/75/00.037.021.000..HTM";
const CODE_4581 = "https://www.legis.state.pa.us/wu01/li/li/ct/htm/75/00.045.081.000..htm";

export const pennsylvaniaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Wider Ground",
    difficulty: "medium",
    description:
      "The rest of the manual: work zones, lane control signals, highway numbering, emergencies at the wheel, and the equipment and inspection rules PennDOT expects you to have read.",
    questions: [
      {
        id: "pa_s4_01",
        topic: "rules",
        question:
          "You are driving through a work zone and a solid white line separates your lane from the next one. What does it require?",
        choices: [
          "You may cross it if traffic in the next lane is moving faster",
          "Do not cross it; stay in your lane",
          "It marks the edge of the work area and has no effect on lane changes",
          "Cross it only when a flagger signals you to",
        ],
        correctIndex: 1,
        explanation:
          "PennDOT is explicit about this one: do not cross a solid white line in a work zone. Lane changes belong before the taper, not inside it.",
        context:
          "The whole set of work zone habits pulls the same way. Move over as soon as a sign tells you a lane closes ahead. Double your following distance, because the commonest work zone crash is a rear-ender. Keep cruise control switched off. Keep moving at a safe speed rather than slowing to look at the work. And a flagger's instruction outranks any sign or signal in the zone.",
        trap:
          "Squeezing into a shorter queue at the last moment is what turns a lane closure into a stationary jam and a collision.",
        excerptKey: "work-zone-no-solid-white",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Work Zones",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_02",
        topic: "signs",
        question: "Where will you find a DO NOT ENTER sign, and what does it mean?",
        choices: [
          "Partway along a one-way street, warning you that you have turned in wrongly",
          "At the end of a divided highway, where two-way traffic resumes",
          "At the entrance to a private road, restricting access to residents",
          "At the start of a one-way street or ramp, barring you from entering in that direction",
        ],
        correctIndex: 3,
        explanation:
          "DO NOT ENTER sits at the beginning of a one-way street or ramp and tells you not to drive onto it heading the way you are pointed.",
        context:
          "It works as a pair with WRONG WAY, which is placed further along to catch a driver who has already made the mistake. You will meet the pair, along with ONE WAY signs, wherever an ordinary road meets a divided highway, because a divided highway behaves as two one-way roads. A useful confirmation on a ramp: white line on your right and yellow on your left means you are pointed the correct way.",
        trap:
          "Assuming that both signs mean the same thing at the same place misses their sequence, which is exactly what tells you how far you have already gone wrong.",
        excerptKey: "do-not-enter-wrong-way",
        sourceLabel: "PA Driver's Manual - Chapter 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_03",
        topic: "signals",
        question: "A steady yellow X appears over the lane you are in. What is it telling you?",
        choices: [
          "Slow down; the lane narrows ahead",
          "The lane is reserved for buses during peak hours",
          "Change lanes, because this lane's direction is about to be reversed",
          "Prepare to stop at the toll booth ahead",
        ],
        correctIndex: 2,
        explanation:
          "A yellow X is the warning stage of a reversible lane. It means leave the lane safely now, because traffic is about to be sent the other way through it.",
        context:
          "Lane use control signals hang directly over the lane they control and appear at toll plazas, on bridges and in tunnels, and on city roads that flip direction for rush hour. A downward green arrow means the lane is open to you, a red X means you may not use it at all, and white left-turn arrows restrict the lane to turns.",
        trap:
          "Waiting to see whether the X turns red wastes the warning. Yellow is the point at which you still have room to move.",
        excerptKey: "lane-yellow-x",
        sourceLabel: "PA Driver's Manual - Chapter 2, Lane Use Control Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_04",
        topic: "sharing",
        question:
          "A tractor-trailer ahead of you swings left before making a right turn. What should you do?",
        choices: [
          "Pass on the right while the gap is open",
          "Sound your horn to signal that the driver is in the wrong lane",
          "Move up alongside so the driver can see you",
          "Stay back and let the truck complete the turn",
        ],
        correctIndex: 3,
        explanation:
          "Trucks need the extra width so the trailer's rear wheels can clear the corner. The gap that opens on the right is where the trailer is about to be.",
        context:
          "The driver cannot see a car that has slipped between the truck and the curb, and by the time the trailer starts to sweep round there is nowhere for that car to go. Pay attention to turn signals rather than to which way the cab is pointing, and do not pass until the turn is finished.",
        trap:
          "The apparent gap on the inside looks like the driver has left room. It is the space the trailer needs.",
        excerptKey: "truck-wide-turns",
        sourceLabel: "PA Driver's Manual - Chapter 3, Turns",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_05",
        topic: "licensing",
        question:
          "You are 17 and are convicted of driving 30 mph over the posted limit. What happens to your licence?",
        choices: [
          "Three points and a fine, with no suspension",
          "A written special point examination",
          "A departmental hearing",
          "A mandatory 90-day suspension",
        ],
        correctIndex: 3,
        explanation:
          "A driver under 18 who is convicted of exceeding the limit by 26 mph or more, or who accumulates six or more points, receives a mandatory 90-day suspension. Any further occurrence is 120 days.",
        context:
          "This is where the junior rules diverge sharply from the adult ones. An adult reaching six points for the first time is sent to a special point exam or Driver Improvement School, not suspended. For a junior driver, six points and the 26-mph threshold both trigger suspension outright, which is why a single bad ticket costs a teenager so much more than it costs their parent.",
        trap:
          "Assuming the adult path applies is the error. Under 18, six points is a suspension, not a test.",
        excerptKey: "junior-90-day-suspension",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 1, Junior Driver's License Information",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_06",
        topic: "speed",
        question:
          "You are overtaking a slower vehicle on a two-lane road. How much faster than it should you be travelling?",
        choices: [
          "As fast as the road allows, to spend less time exposed",
          "About 25 mph faster",
          "About 10 mph faster",
          "The same speed, edging past gradually",
        ],
        correctIndex: 2,
        explanation:
          "About 10 mph faster than the vehicle you are passing. Enough to complete the manoeuvre briskly, without a speed difference so large that you cannot judge the oncoming gap.",
        context:
          "That figure sits alongside the space requirement: at 45 mph you need roughly a quarter of a mile of clear road, because you are borrowing the oncoming lane. You may pass more than one vehicle at a time, but only if there is a gap ahead of them big enough to return into. Once past, wait until both of the passed vehicle's headlights show in your mirror before pulling back in.",
        trap:
          "Accelerating hard to cut the exposure sounds sensible and instead makes the closing speed with oncoming traffic impossible to read.",
        excerptKey: "passing-10-mph-faster",
        sourceLabel: "PA Driver's Manual - Chapter 3, Passing",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_07",
        topic: "parking",
        question:
          "What does Pennsylvania require before a vehicle may legally use a parking space reserved for people with disabilities?",
        choices: [
          "A placard displayed on the dashboard, whoever is in the vehicle",
          "A disabled person or disabled veteran plate or placard, and the trip must be by or for the disabled person",
          "A doctor's note kept in the glove compartment",
          "Nothing, provided the driver stays with the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Two conditions have to hold at once: the plate or placard must be displayed, and the vehicle must be operated by or for the transport of the disabled person or severely disabled veteran.",
        context:
          "Borrowing a relative's placard to park while running your own errand fails the second condition even though the placard is genuine. Enforcement is real: an unlawfully parked vehicle can be towed at the owner's expense, and the offence carries a fine between $50 and $200.",
        trap:
          "The placard alone is not the licence to park. It is the person it belongs to who has to be making the journey.",
        excerptKey: "disabled-parking-conditions",
        sourceLabel: "PA Driver's Manual - Chapter 5, Parking Areas for Persons with Disabilities",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_08",
        topic: "impairment",
        question: "What counts as one standard drink in the Pennsylvania manual?",
        choices: [
          "1.5 oz of 80 proof liquor, 12 oz of regular beer, or 5 oz of wine",
          "1 oz of liquor, 10 oz of beer, or 3 oz of wine",
          "2 oz of liquor, 16 oz of beer, or 8 oz of wine",
          "Any single glass, whatever it contains",
        ],
        correctIndex: 0,
        explanation:
          "A drink and a glass are not the same measure. The manual counts 1.5 oz of 80 proof spirits, 12 oz of ordinary beer or 5 oz of wine as one drink each.",
        context:
          "The point of a standard measure is the hour it takes an average person to process it, which is where the one-drink-per-hour guidance comes from. That guidance has limits: alcohol concentrates more in smaller bodies, and a woman drinking the same amount as a man of equal weight over the same period may reach a higher level.",
        trap:
          "Pouring by the glass rather than by the measure is how people underestimate what they have had, particularly with spirits and with strong beer.",
        excerptKey: "one-drink-definition",
        sourceLabel: "PA Driver's Manual - Chapter 3, Alcohol and Driving",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_09",
        topic: "safety",
        question:
          "You cannot find eight feet of clear space on either side of your vehicle in traffic. What does the manual suggest you do?",
        choices: [
          "Move to the outside lane regardless of your route",
          "Increase your following distance to allow more space ahead",
          "Reduce your speed to below 40 mph",
          "Switch on your hazard flashers until a gap opens",
        ],
        correctIndex: 1,
        explanation:
          "When you have no escape path to the side, the space in front becomes your only option, so the manual asks you to lengthen the following distance to compensate.",
        context:
          "Pennsylvania teaches space management as six areas around the car, and the point is to keep at least one of them usable. Avoid travelling alongside other vehicles on multi-lane roads, because that blocks your view, closes your escape route and puts you in somebody's blind spot. Where hazards appear on both sides at once, slow down and split the difference between them.",
        trap:
          "Adding space to the front feels like the wrong lever when the squeeze is at the sides. It is the only lever you actually control.",
        excerptKey: "escape-path-eight-feet",
        sourceLabel: "PA Driver's Manual - Chapter 3, Managing Space",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_10",
        topic: "emergencies",
        question:
          "Your accelerator pedal sticks down and the car keeps gaining speed. After tapping the pedal fails, what should you do?",
        choices: [
          "Turn the ignition to LOCK",
          "Reach down and pull the pedal up by hand",
          "Shift to neutral and use the brakes",
          "Apply the parking brake hard",
        ],
        correctIndex: 2,
        explanation:
          "Neutral cuts the drive to the wheels, so the engine races but the car stops accelerating and the brakes can do their job.",
        context:
          "Keep your eyes on the road throughout; reaching down to free the pedal by hand takes you off the road entirely. Once you are slowing, concentrate on steering, pull off, stop, switch off and put the flashers on. If you have to switch the ignition off while still moving, use OFF and never LOCK, because LOCK takes the steering with it.",
        trap:
          "Killing the ignition first is the instinct. Done wrongly it removes power steering and braking assistance while the car is still at speed.",
        excerptKey: "stuck-accelerator",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, If Your Accelerator Sticks",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_11",
        topic: "rightOfWay",
        question:
          "You are inside a roundabout when an ambulance approaches with lights and siren. What should you do?",
        choices: [
          "Stop where you are so the ambulance can pass",
          "Reverse out of the roundabout the way you came",
          "Speed up and take the first exit without signalling",
          "Continue to your exit, leave the roundabout, and then pull to the side",
        ],
        correctIndex: 3,
        explanation:
          "You never stop inside a roundabout. Exit first, then pull over. Drivers still approaching should stay out of the circle altogether until the ambulance is through.",
        context:
          "Stopping in the circle blocks the one path the emergency vehicle has, and it traps everyone behind you as well. The ordinary roundabout rules still apply as you leave: signal right as you approach your exit, and yield to pedestrians in the crosswalk on the way out.",
        trap:
          "The reflex for every emergency vehicle is to stop where you are. A roundabout is the one place where that makes things worse.",
        excerptKey: "roundabout-never-stop",
        sourceLabel: "PA Driver's Manual - Chapter 3, How to Use a Circular Intersection",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_12",
        topic: "signs",
        question: "What does an even-numbered, two-digit interstate route generally run?",
        choices: [
          "East and west",
          "North and south",
          "In a loop around a city",
          "As a spur into a city centre",
        ],
        correctIndex: 0,
        explanation:
          "Even two-digit interstates run broadly east-west and odd ones north-south. In Pennsylvania I-76 is the southern east-west route, I-80 and I-84 the northern ones, while I-79 sits west and I-95 east.",
        context:
          "Three-digit numbers add a layer. Starting with an even digit usually means the route rejoins interstates at both ends, a loop or beltway such as I-276 near Philadelphia. Starting with an odd digit usually means a spur that connects at one end only, like I-180 at Williamsport. Mile markers count up as you travel east or north, and exit numbers follow them.",
        trap:
          "Odd and even are easy to swap, and the loop-versus-spur distinction rests on the same odd-even logic one digit further in.",
        excerptKey: "interstate-even-numbers",
        sourceLabel: "PA Driver's Manual - Chapter 2, Interstate Numbering System",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_13",
        topic: "rules",
        question:
          "You end up in a lane marked for turns only, but you wanted to go straight through the intersection. What must you do?",
        choices: [
          "Continue straight, since your intended route takes priority",
          "Make the turn the lane is marked for",
          "Stop and wait for a gap to change lanes inside the intersection",
          "Reverse and change lanes before the stop line",
        ],
        correctIndex: 1,
        explanation:
          "The lane markings decide it, not your intentions. In a turn-only lane you turn, even if you got there by mistake, and correct your route afterwards.",
        context:
          "The rule runs both ways: from a lane marked for through traffic you continue straight, even if you meant to turn. A sign carrying a turn arrow and the word ONLY makes it explicit. Changing lanes inside an intersection is the manoeuvre these rules exist to prevent, because the driver beside you is committed to their own path.",
        trap:
          "Cutting across at the last second is exactly the move that collides with a driver already turning from the correct lane.",
        excerptKey: "lane-marked-turn-only-must-turn",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Approaching Intersections",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_14",
        topic: "signals",
        question: "A steady yellow arrow appears in your turning lane. What does it mean?",
        choices: [
          "You may turn, but must yield to oncoming traffic",
          "The turn phase is ending and the arrow will soon be red",
          "Turning is prohibited from this lane at all times",
          "The signal has failed; treat the lane as a stop sign",
        ],
        correctIndex: 1,
        explanation:
          "A steady yellow arrow says the movement allowed by the green arrow or the flashing yellow arrow is finishing. Slow down and prepare to stop before entering the intersection.",
        context:
          "It behaves like an ordinary yellow light applied to one movement. If you are already inside the intersection, or cannot stop safely before entering it, you may complete the turn you started on the previous arrow, with caution. What you cannot do is treat it as an invitation to start a new one.",
        trap:
          "Yellow arrow and flashing yellow arrow sound almost identical and mean opposite things: one is a turn beginning, the other a turn ending.",
        excerptKey: "steady-yellow-arrow",
        sourceLabel: "PA Driver's Manual - Chapter 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_15",
        topic: "speed",
        question:
          "On an unlit road at night with low beams, what is the fastest you should drive to avoid outrunning your headlights?",
        choices: ["45 mph", "55 mph", "35 mph", "65 mph"],
        correctIndex: 0,
        explanation:
          "Low beams reach only about 250 feet, and stopping from 55 mph takes more than that even on dry pavement. Forty-five is the figure the manual gives for staying inside the lit distance.",
        context:
          "Overdriving your headlights means arriving somewhere you have not been able to see. Night is already the most dangerous time to drive, with fatality rates three to four times daytime levels, and pedestrians are the hardest thing of all to pick out. Keeping the headlights clean matters too: dirt can cut their output by half.",
        trap:
          "The posted limit is often 55 on exactly the kind of rural road where this applies, so the legal speed and the safe speed diverge.",
        excerptKey: "overdrive-headlights-45",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Driving at Night",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_16",
        topic: "licensing",
        question: "You fail the Pennsylvania knowledge test. When may you take it again?",
        choices: [
          "After a 30-day waiting period",
          "After completing an approved driver education course",
          "The following business day",
          "Immediately, as many times as you like on the same day",
        ],
        correctIndex: 2,
        explanation:
          "You may retake it the next business day. You may not sit it twice in one day, and that limit applies whichever driver license center you visit.",
        context:
          "Keep the forms you brought with you, because the examiner returns the learner's permit application and, for under-18 applicants, the parental consent form, and you have to bring them back for the next attempt. The test itself is available in written and audio formats and in a long list of languages on request, at every driver license center in the state.",
        trap:
          "Driving to a different center to sit it again the same day does not work; the one-attempt-per-day rule is statewide.",
        excerptKey: "knowledge-test-retake-next-day",
        sourceLabel: "PennDOT - PA Driver's Manual, Testing",
        sourceUrl: TESTING,
      },
      {
        id: "pa_s4_17",
        topic: "sharing",
        question:
          "Who may legally ride in the open bed of a pickup truck on a Pennsylvania road?",
        choices: [
          "Anyone aged 18 or over, at speeds of 35 mph or less",
          "Anyone at all, provided the truck stays below 35 mph",
          "Children of any age if an adult rides with them",
          "Nobody, in any circumstances",
        ],
        correctIndex: 0,
        explanation:
          "The truck may not exceed 35 mph with anybody in the bed, and it may not be driven at all with a child under 18 in the bed. Both limits apply together.",
        context:
          "A short list of exceptions exists for farm and rural life: a farmer's child or a child employed as farm labour being moved between parts of a farm, a child with a valid hunting licence travelling between a hunting camp and a hunting site during the season, and a child taking part in an officially sanctioned parade while the parade is under way.",
        trap:
          "The two conditions get merged into one. Speed governs adults, age governs children, and the under-18 bar is not lifted by driving slowly.",
        excerptKey: "open-bed-truck",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Passengers in an Open-Bed Truck",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_18",
        topic: "parking",
        question: "Which way should your vehicle face when you park on a Pennsylvania street?",
        choices: [
          "Whichever way makes leaving the space easier",
          "In the direction traffic moves on that side of the road",
          "Facing oncoming traffic, so drivers can see your headlights",
          "Either direction on a two-way street",
        ],
        correctIndex: 1,
        explanation:
          "You park facing the way traffic runs. Parking against the flow means driving on the wrong side of the road to get into the space and to leave it.",
        context:
          "The rest of the parking routine follows: within 12 inches of the curb, parking brake set, transmission in Park or, on a manual, in Reverse or First, and the wheels turned appropriately if you are on a hill. There is also a useful clue in the other direction: cars parked on both sides of a street all facing the same way tells you the street is one-way.",
        trap:
          "On a quiet street it feels harmless to swing across into a facing space. The manoeuvre itself is the violation.",
        excerptKey: "parking-direction-of-traffic",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_19",
        topic: "safety",
        question:
          "You want to hang an air freshener from your rearview mirror. What does Pennsylvania law say?",
        choices: [
          "It is permitted if it is smaller than four inches",
          "It is illegal to have anything hanging from the mirror while the vehicle is moving",
          "It is permitted on any vehicle registered before 2010",
          "It is permitted provided it does not obscure the mirror itself",
        ],
        correctIndex: 1,
        explanation:
          "Nothing may hang from the rearview mirror while the vehicle is in motion. Tags, permits and placards may only be attached to the mirror while the vehicle is parked.",
        context:
          "The same principle covers the glass: placing anything on the front windshield that blocks the driver's view of the road is illegal too. Both rules sit within the manual's pre-drive checklist, alongside adjusting the seat before the mirrors, setting the side mirrors so you can just barely see the side of your own vehicle when you lean, and securing loose objects that would become projectiles in a crash.",
        trap:
          "A parking placard is the usual exception people assume. It is allowed on the mirror only while you are parked.",
        excerptKey: "rearview-mirror-objects",
        sourceLabel: "PA Driver's Manual - Chapter 3, Vehicle Checks",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_20",
        topic: "impairment",
        question: "What actually lowers your blood alcohol concentration?",
        choices: [
          "Strong coffee",
          "A cold shower",
          "Eating a large meal",
          "Time, and nothing else",
        ],
        correctIndex: 3,
        explanation:
          "Only time. Coffee, cold water and food change how alert you feel; none of them changes how much alcohol is in your blood.",
        context:
          "An average person needs at least an hour to process one standard drink, which is where the one-per-hour guidance comes from, and it is guidance rather than a rule because weight, sex and physical condition all shift the rate. What feels like sobering up is usually just the stimulant effect of caffeine masking impairment that is still fully present.",
        trap:
          "This one is dangerous precisely because coffee makes people feel capable. The feeling improves and the driving does not.",
        excerptKey: "only-time-sobers-you",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Alcohol and Driving",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_21",
        topic: "emergencies",
        question:
          "At 40 mph a hazard appears in your lane with room to go around it. What does the manual suggest?",
        choices: [
          "Steering around it is usually better than braking for it",
          "Braking is always the safer response",
          "Brake first, then steer once you have slowed below 25 mph",
          "Sound the horn and hold your line",
        ],
        correctIndex: 0,
        explanation:
          "Above about 25 mph, steering around a hazard usually beats braking for it, because your reaction time for a swerve is shorter than for a stop.",
        context:
          "Evasive steering only works if you are holding the wheel properly. The manual asks for both hands at 9 and 3 or at 8 and 4, thumbs along the face of the rim rather than hooked inside it, which lets you turn half a turn one way and nearly a full turn back without losing grip. That grip also keeps your arms out of the airbag's path.",
        trap:
          "Braking is the reflex, and at higher speeds it commits you to hitting whatever is in front while it scrubs off speed.",
        excerptKey: "steer-vs-brake",
        sourceLabel: "PA Driver's Manual - Chapter 3, Steering Your Way Out of an Emergency",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_22",
        topic: "rules",
        question: "May you pass another vehicle while you are in a highway acceleration lane?",
        choices: [
          "No, passing in an acceleration lane is illegal",
          "Yes, if the vehicle ahead is below the highway speed",
          "Yes, provided you signal first",
          "Only if the acceleration lane has two marked lanes",
        ],
        correctIndex: 0,
        explanation:
          "Passing a vehicle ahead of you in an acceleration lane is illegal in Pennsylvania. The lane is for building up to highway speed, not for overtaking.",
        context:
          "Used properly, the acceleration lane lets you reach the speed of traffic before you merge, and lets drivers on the highway see you coming. The routine is signal, look for the opening including over your shoulder, accelerate to match, then merge. Where an entrance and an exit share a short weaving lane, the driver entering yields to the driver leaving.",
        trap:
          "A slow driver ahead on the ramp is frustrating, and going round them puts you into the merge without a gap and without being seen.",
        excerptKey: "acceleration-lane-no-passing",
        sourceLabel: "PA Driver's Manual - Chapter 3, Merging with Traffic",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_23",
        topic: "signs",
        question:
          "A yellow diamond shows two lines converging, warning of merging traffic ahead. Who has to yield?",
        choices: [
          "Traffic already on the major roadway",
          "Whichever driver is travelling more slowly",
          "The traffic entering from the ramp or side road",
          "Neither; the lanes run side by side without merging",
        ],
        correctIndex: 2,
        explanation:
          "Entering traffic yields to traffic already on the major roadway. The sign warns you that vehicles may be joining your lane, not that you must make way for them.",
        context:
          "An ADDED LANE sign says something different and is easy to confuse with it: there, merging is not necessary at all, because the entering traffic gets a new lane of its own. A WEAVE AREA sign means you will be merging with a roadway while other traffic crosses your path to exit. Courtesy still argues for moving over where you safely can.",
        trap:
          "Reading the merge sign as an instruction to let people in reverses the legal duty, even though yielding to them is often the polite thing to do.",
        excerptKey: "merging-traffic-yield",
        sourceLabel: "PA Driver's Manual - Chapter 2, Merging Traffic",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_24",
        topic: "rightOfWay",
        question:
          "The car ahead of you has stopped in the traffic lane for no obvious reason. What should you do before passing it?",
        choices: [
          "Pass promptly, since the driver may be about to reverse",
          "Sound your horn and wait for the driver to move",
          "Pass on the right, where you have a better view",
          "Slow down and do not pass until you are sure nobody is crossing in front of it",
        ],
        correctIndex: 3,
        explanation:
          "A vehicle stopped for no visible reason is very often stopped for a pedestrian you cannot see. Slow down and wait until you are sure the crosswalk in front of it is clear.",
        context:
          "This sits inside a wider set of pedestrian duties: yield to people crossing at intersections and in crosswalks, slow down and take extra care near children, be patient with elderly pedestrians and people with disabilities, always yield to a blind pedestrian, and check for people in your path before backing up.",
        trap:
          "The stopped car looks like an obstruction to get round. It is more often a warning that somebody is already in the road.",
        excerptKey: "stopped-vehicle-pedestrians",
        sourceLabel: "PA Driver's Manual - Chapter 3, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_25",
        topic: "speed",
        question:
          "You are driving on packed snow. What does the Pennsylvania manual suggest you do about speed?",
        choices: [
          "Reduce it by 5 to 10 mph",
          "Reduce it by a quarter",
          "Cut it in half",
          "Keep to the posted limit and rely on winter tyres",
        ],
        correctIndex: 2,
        explanation:
          "Packed snow calls for halving your speed. On ice you slow to a crawl and leave about ten times the normal gap to the vehicle ahead.",
        context:
          "The scale runs upward from wet roads, where the manual asks for 5 to 10 mph off and a five or six second gap. It also warns against cruise control on slippery surfaces, because the system keeps feeding power into a spinning wheel when what you need is to back off. Timing your arrival at a green light so you coast rather than brake and re-accelerate is the winter trick worth learning.",
        trap:
          "Halving is a much bigger cut than most drivers make. Ten mph off a 40 mph limit is not the same instruction at all.",
        excerptKey: "snow-ice-speed-reduction",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Snow and Ice",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_26",
        topic: "licensing",
        question: "How often must a Pennsylvania-registered vehicle pass a safety inspection?",
        choices: ["Every 24 months", "Every 12 months", "Every 6 months", "Only when it is sold"],
        correctIndex: 1,
        explanation:
          "Annually, at an authorised inspection station, with the expiry date shown on the sticker. You may have it done up to 90 days before that date.",
        context:
          "In many counties an emissions inspection on the vehicle's control system is required as well, for cars, vans and light trucks of model year 1975 or newer, and it must be done before the safety inspection can be completed. Separately, an officer who spots faulty equipment can require you to fix it within five days to avoid a citation.",
        trap:
          "Emissions testing is county-based while safety inspection is statewide, and people who move within Pennsylvania often assume their old county's rules travel with them.",
        excerptKey: "safety-inspection-12-months",
        sourceLabel: "PA Driver's Manual - Chapter 5, Vehicle Safety and Emissions Inspection",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_27",
        topic: "sharing",
        question:
          "A cyclist is riding straight ahead on the shoulder as you prepare to turn right into a driveway. What does the law require?",
        choices: [
          "You may not turn across the cyclist's path",
          "You may turn if you signal at least 100 feet in advance",
          "The cyclist must yield, since the shoulder is not a travel lane",
          "You may turn provided you leave four feet of clearance",
        ],
        correctIndex: 0,
        explanation:
          "Drivers may not turn into the path of a cyclist riding straight ahead on a roadway or shoulder. The turn waits until the cyclist is through.",
        context:
          "Pennsylvania treats bicyclists as vehicle operators, bound by traffic laws but entitled to travel below the posted minimum speed without being cited for impeding traffic. They may use the shoulder but are not obliged to, and on a single-lane road they may use any part of the lane to avoid hazards. Forcing a cyclist off the road can bring criminal charges.",
        trap:
          "The four-foot rule governs passing, not turning. Clearance while you overtake does nothing about a right hook.",
        excerptKey: "bicycle-no-turn-into-path",
        sourceLabel: "PA Driver's Manual - Chapter 5, Safe Passing Is The Law",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_28",
        topic: "signals",
        question: "Which of these makes a stop at a railroad crossing compulsory?",
        choices: [
          "A crossbuck sign with no other equipment",
          "An advance warning sign on the approach",
          "Pavement markings reading R X R",
          "A lowered gate, flashing red lights, a flagger, or the train's own audible signal",
        ],
        correctIndex: 3,
        explanation:
          "Any signal of an approaching train makes the stop mandatory: flashing red lights, a lowered gate, a flagger signalling, or the train sounding its horn.",
        context:
          "Where there are no signals at all, a crossbuck functions as a yield sign, so you slow, look both ways and listen. Never drive around a lowered gate. If the crossing has more than one track, wait after a train clears until you can see down every track, because a second train may be coming the other way.",
        trap:
          "The crossbuck looks like the controlling sign, so drivers treat gateless crossings as needing nothing. What triggers the stop is the evidence of a train.",
        excerptKey: "railroad-signal-types",
        sourceLabel: "PA Driver's Manual - Chapter 2, Railroad Crossing Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_29",
        topic: "parking",
        question:
          "You stop briefly alongside a car already parked at the curb, to let a passenger out. What is that?",
        choices: [
          "Double parking, which is prohibited",
          "Legal, provided you stay with the vehicle",
          "Legal for up to five minutes",
          "Legal if your hazard flashers are on",
        ],
        correctIndex: 0,
        explanation:
          "Stopping on the roadway side of a vehicle already parked at the curb is double parking, and Pennsylvania prohibits it except in an emergency or when a police officer directs it.",
        context:
          "The prohibited list covers places as well as distances: sidewalks, intersections, crosswalks, bridges and elevated structures, tunnels, railroad tracks, in front of any public or private driveway, alongside street excavations or work areas, between the roadways of a divided highway, and anywhere signs prohibit stopping or parking.",
        trap:
          "Hazard flashers do not create permission. They warn other drivers; they do not legalise where you have stopped.",
        excerptKey: "no-parking-double-park",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_30",
        topic: "rules",
        question:
          "You have just overtaken a car on a two-lane road. How do you know it is safe to move back in?",
        choices: [
          "When the car disappears from your side mirror",
          "After counting four seconds from the moment you passed",
          "When both of its headlights are visible in your rearview mirror",
          "As soon as you have signalled your return",
        ],
        correctIndex: 2,
        explanation:
          "Seeing both headlights of the passed vehicle in your rearview mirror means you are far enough ahead to pull in without cutting the driver off.",
        context:
          "Signal your return as well, so the driver behind understands what you are doing. Vanishing from the side mirror proves the opposite of what people think: it means the car has entered your blind spot, not that it is far behind. The same headlights test is the manual's advice after passing a truck.",
        trap:
          "The side mirror is the wrong instrument for this. Losing sight of a vehicle there is the definition of a blind spot.",
        excerptKey: "return-after-passing",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Passing",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_31",
        topic: "emergencies",
        question:
          "You drive around a barrier closing a flooded road. What does a conviction bring?",
        choices: [
          "Two points and a fine of up to $250",
          "A written warning on a first offence",
          "Four points and a mandatory 30-day suspension",
          "A fine only, with no points",
        ],
        correctIndex: 0,
        explanation:
          "Driving around or through a sign or device closing a road for hazardous conditions carries two points and a fine of up to $250.",
        context:
          "If emergency responders have to come out because of what you did, the fine rises to as much as $500 and you can be billed for the cost of the rescue. There is good reason for the severity: since 2006 nearly half of Pennsylvania's flood deaths have involved vehicles, and six inches of moving water is enough to take control away from you.",
        trap:
          "The barrier looks like a precaution rather than a legal boundary, which is exactly why the offence was written with points attached.",
        excerptKey: "road-closure-penalty",
        sourceLabel: "PA Driver's Manual - Chapter 5, Obedience to Traffic-Control Devices",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_32",
        topic: "safety",
        question: "How far should you sit from the steering wheel if your vehicle has an airbag?",
        choices: [
          "As close as possible, for better control",
          "About 6 inches",
          "At least 10 inches",
          "The distance does not matter if you are wearing a seat belt",
        ],
        correctIndex: 2,
        explanation:
          "At least 10 inches between you and the steering wheel. An airbag deploys with enough force to injure someone sitting on top of it.",
        context:
          "Airbags supplement belts rather than replacing them, so the belt goes on regardless: lap strap snug across the hips, shoulder strap across the chest and clear of the neck. Rear-facing child seats must never go in a front seat with an active passenger airbag, and the manual recommends all children aged 12 and under ride in the back.",
        trap:
          "Shorter drivers slide forward for pedal reach and end up well inside 10 inches, which is the exact combination the warning is about.",
        excerptKey: "airbag-10-inches",
        sourceLabel: "PA Driver's Manual - Chapter 5, Air Bag Safety Information",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_33",
        topic: "signs",
        question:
          "A yellow panel reading EXIT ONLY sits on a green highway sign above your lane. What does it mean?",
        choices: [
          "The lane is closed beyond the next exit",
          "Only local traffic may use this lane",
          "The exit is reserved for trucks",
          "Stay in this lane and you must leave the highway",
        ],
        correctIndex: 3,
        explanation:
          "The lane below an EXIT ONLY panel does not continue through the interchange; it becomes the ramp. Stay in it and you are leaving the highway.",
        context:
          "Highway guide signs come in a series, usually two advance signs and then one at the exit itself, because a single sign is easy to miss at speed. The small exit number tab sits on the left of the sign if the exit is on the left and on the right if it is on the right, and any arrows point towards the exit side.",
        trap:
          "The lane looks like an ordinary travel lane for a considerable distance, which is why drivers who ignore the panel end up exiting by accident.",
        excerptKey: "exit-only-panel",
        sourceLabel: "PA Driver's Manual - Chapter 2, Highway Guide Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_34",
        topic: "impairment",
        question:
          "Under Pennsylvania's anti-texting law, what kind of offence is texting while driving?",
        choices: [
          "A secondary offence, chargeable only alongside another violation",
          "A civil penalty with no criminal element",
          "A primary summary offence carrying a $50 fine",
          "A misdemeanour carrying points on your record",
        ],
        correctIndex: 2,
        explanation:
          "It is a primary summary offence with a $50 fine, which means an officer can stop you for it on its own without any other violation.",
        context:
          "The law defines an interactive wireless communication device broadly, covering phones, smartphones, tablets and portable computers, and covers text messages, instant messages, email and other written communication. It expressly does not cover a GPS unit, a system built into the vehicle, or a communications device fixed to a bus or school bus, and it overrides any local ordinance on the subject.",
        trap:
          "Calling it a summary offence makes it sound minor and secondary. Primary enforcement is the part that matters: it is a reason to be pulled over.",
        excerptKey: "texting-law",
        sourceLabel: "PA Driver's Manual - Chapter 5, Anti-Texting Law",
        sourceUrl: HB,
      },
      {
        id: "pa_s4_35",
        topic: "speed",
        question:
          "You drive into a snow squall on an interstate and visibility drops to almost nothing. What does PennDOT advise?",
        choices: [
          "Brake hard and stop in your lane until it clears",
          "Slow gradually and switch on your hazard lights",
          "Maintain speed to get through it quickly",
          "Pull onto the shoulder and switch off your lights",
        ],
        correctIndex: 1,
        explanation:
          "Slow down gradually and put your hazard lights on so you are visible. Braking hard is specifically warned against, because the driver behind cannot see you either.",
        context:
          "Snow squalls arrive on otherwise clear days, dropping visibility to near zero and slickening the surface within seconds, often where traffic is doing more than 60 mph. If you know one is coming, get off the road and wait it out. If you are caught in a collision inside one, staying in your vehicle is normally safer than getting out.",
        trap:
          "Stopping in the travel lane is the instinct when you cannot see, and it is what turns a squall into a multi-vehicle pile-up.",
        excerptKey: "snow-squall-caution",
        sourceLabel: "PA Driver's Manual - Chapter 3, Snow Squalls",
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
      "Pennsylvania's stumpers: the snow removal law, what really happens at six points and at eleven, junior licence penalties, and the gaps where the 2021 manual and current statute disagree.",
    questions: [
      {
        id: "pa_s5_01",
        topic: "rules",
        question:
          "Snow stopped falling yesterday morning and your car still has six inches on the roof. What does Pennsylvania law require?",
        choices: [
          "Reasonable efforts to clear the hood, trunk and roof within 24 hours of the snow stopping",
          "Nothing, unless snow actually comes off and hits somebody",
          "Clearing only the windows and lights before driving",
          "Clearing the vehicle only if you are driving on an interstate",
        ],
        correctIndex: 0,
        explanation:
          "The law names the hood, trunk and roof specifically, and gives you 24 hours after the snow or ice stops falling to make reasonable efforts to clear them. It is a $50 fine whether or not anything ever comes off the vehicle.",
        context:
          "The requirement was added to the Vehicle Code in 2022, after the 2021 edition of the manual was printed, so the manual describes only the older half of the rule. A separate and much heavier penalty still applies where snow or ice does come off a moving vehicle and strikes another vehicle or a pedestrian, causing death or serious bodily injury: $200 to $1,500. An officer may also stop you on the strength of the accumulation alone.",
        trap:
          "Clearing a porthole in the windshield and driving off is the classic failure. The roof is named in the statute, and it is the part nobody clears.",
        excerptKey: "snow-ice-remove-24-hours",
        commonlyMissed: true,
        sourceLabel: "75 Pa.C.S. § 3721 - Snow and ice",
        sourceUrl: CODE_3721,
      },
      {
        id: "pa_s5_02",
        topic: "licensing",
        question: "How do points come off a Pennsylvania driving record?",
        choices: [
          "They expire three years after the violation",
          "They are removed when you pay the fine in full",
          "They come off only by passing a special point examination",
          "Three come off for every 12 consecutive months without a violation or suspension",
        ],
        correctIndex: 3,
        explanation:
          "Three points for every 12 consecutive months in which you pick up no point-carrying violation and serve no suspension. The clock runs from the last violation or the last restoration, whichever is more recent.",
        context:
          "Once the record reaches zero and stays there for a further 12 months, any later accumulation counts as a first accumulation again, which resets the escalating consequences. The other route down is corrective: passing the special point exam removes two points, completing Driver Improvement School removes four.",
        trap:
          "People expect a per-violation expiry clock. Pennsylvania runs one clock for the whole record, and a single new ticket restarts it.",
        excerptKey: "point-removal-12-months",
        commonlyMissed: true,
        sourceLabel: "PennDOT - The Pennsylvania Point System fact sheet",
        sourceUrl: POINTS,
      },
      {
        id: "pa_s5_03",
        topic: "sharing",
        question:
          "You are convicted of passing a school bus that had its red lights flashing and stop arm extended. What is the penalty?",
        choices: [
          "Three points and a fine",
          "A 60-day licence suspension, five points and a fine",
          "A 30-day suspension and two points",
          "A fine only, unless a child was struck",
        ],
        correctIndex: 1,
        explanation:
          "Sixty days off the road, five points on the record, and a fine. It is one of the heaviest penalties in the Vehicle Code for an offence with no collision involved.",
        context:
          "Five points is most of the way to the six that triggers corrective action, and the 60-day suspension applies on the first conviction rather than after any escalation. The requirement it enforces is a stop at least 10 feet from the bus, from both directions, with the single exception of the opposite side of a physically divided highway.",
        trap:
          "Nobody expects a suspension for a first offence with no crash. This is the one where a single conviction takes the licence.",
        excerptKey: "school-bus-penalty",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, School Buses",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_04",
        topic: "impairment",
        question:
          "A 19-year-old is convicted of DUI with a blood alcohol level of 0.03. Which penalty band applies?",
        choices: [
          "General impairment, the lowest band",
          "No band; the reading is below 0.08",
          "High rate, the middle band",
          "Highest rate, the top band",
        ],
        correctIndex: 2,
        explanation:
          "An under-21 driver convicted at 0.02 or above is sentenced under the high rate table, even though the reading is far below the levels that band normally describes.",
        context:
          "For a first offence in that band the manual describes two days to six months in prison, a fine of $500 to $5,000, a 12-month suspension and a year of ignition interlock. The same escalation applies to a driver of any age whose reading is only 0.08 to 0.099 but who is involved in a crash causing injury, death or property damage. Refusing chemical testing puts you in the top band instead.",
        trap:
          "It looks as though a low reading must mean a low penalty band. For an under-21 driver the reading only decides guilt, not the band.",
        excerptKey: "under-21-high-rate-penalties",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 4, Severe Penalties",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_05",
        topic: "signals",
        question:
          "A white two-way left-turn arrow is displayed over a lane. What does that lane allow?",
        choices: [
          "Left turns only, shared with left-turning drivers coming the other way",
          "Left turns only, for traffic travelling your direction",
          "Left turns and straight-ahead movement",
          "U-turns as well as left turns, in either direction",
        ],
        correctIndex: 0,
        explanation:
          "The two-way version tells you the lane is for left turns and that drivers approaching from the opposite direction are using it for the same purpose.",
        context:
          "It is the overhead-signal counterpart to the painted centre turn lane, marked with a solid yellow line outside and a broken yellow line inside on each side. A single white left-turn arrow means the same restriction without the shared use. Both belong to the lane use control family that also includes the green downward arrow, the yellow X and the red X.",
        trap:
          "The word two-way reads as two directions of travel. It means two directions of left-turning traffic sharing one lane, which is a much narrower permission.",
        excerptKey: "two-way-left-turn-arrow",
        sourceLabel: "PA Driver's Manual - Chapter 2, Lane Use Control Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_06",
        topic: "speed",
        question:
          "You are caught doing 12 mph over the limit in an active work zone. Beyond the fine, what happens?",
        choices: [
          "An automatic 15-day licence suspension",
          "Two points and nothing further",
          "A mandatory court appearance but no suspension",
          "A written warning on a first offence",
        ],
        correctIndex: 0,
        explanation:
          "Eleven mph or more over the posted limit in an active work zone brings an automatic 15-day suspension. The same applies if you crash in an active work zone and are convicted of failing to drive at a safe speed.",
        context:
          "An active work zone is where workers are on the roadway or on the shoulder beside an open lane, marked by signs and by a white flashing light on the ACTIVE WORK ZONE WHEN FLASHING sign. Fines are doubled there for speeding, DUI and failure to obey traffic devices. Separately, Pennsylvania's automated work zone cameras issue civil penalties only: a warning, then $75, then $150, with no points.",
        trap:
          "Camera tickets and officer-issued citations feel like the same thing. Only the officer's citation carries points, doubled fines and this suspension.",
        excerptKey: "work-zone-15-day-suspension",
        commonlyMissed: true,
        sourceLabel: "PennDOT - Work Zone Safety, Laws",
        sourceUrl: WORKZONE,
      },
      {
        id: "pa_s5_07",
        topic: "rightOfWay",
        question:
          "You are turning left from a minor street onto a major one. What gap should you allow in traffic coming from your right?",
        choices: ["About four seconds", "About six seconds", "About nine seconds", "About twelve seconds"],
        correctIndex: 2,
        explanation:
          "Nine seconds for a left turn from a minor street onto a major one, because you have to cross one stream and then accelerate into another.",
        context:
          "The manual gives three gap figures and they climb with the complexity of the manoeuvre. Crossing a 30 mph street at a two-way stop needs about six seconds in both directions. A right turn needs about eight seconds from traffic on your left. A left turn from minor to major needs nine from the right.",
        trap:
          "Nine seconds feels enormous from a standing start, which is why drivers take a six-second gap and finish the turn in front of a braking driver.",
        excerptKey: "gap-left-turn",
        sourceLabel: "PA Driver's Manual - Chapter 3, Moving Into and Through Intersections",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_08",
        topic: "parking",
        question:
          "May you park in the median area between the two roadways of a divided highway?",
        choices: [
          "Yes, if you are entirely off the travelled surface",
          "No, including in the crossovers",
          "Yes, for up to 15 minutes",
          "Yes, provided your hazard flashers are on",
        ],
        correctIndex: 1,
        explanation:
          "Parking between the roadways of a divided highway is prohibited, and the prohibition names the crossovers specifically.",
        context:
          "The same list bars stopping on any bridge or other elevated structure, in a highway tunnel, on railroad tracks, on a sidewalk, within an intersection or a crosswalk, and on a limited access highway unless traffic control devices allow it. The exceptions throughout are emergencies and the direction of a police officer.",
        trap:
          "The crossover looks purpose-built for stopping in, which is exactly why the statute names it rather than leaving it to inference.",
        excerptKey: "no-parking-divided-highway",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_09",
        topic: "safety",
        question: "Where does the Pennsylvania manual recommend children aged 12 and under ride?",
        choices: [
          "In the rear seat",
          "In the front seat, where the driver can watch them",
          "In whichever seat has a shoulder belt",
          "In the rear seat only until they turn 8",
        ],
        correctIndex: 0,
        explanation:
          "The recommendation is the rear seat for everyone aged 12 and under, for two reasons: most serious collisions are frontal, and children fidget forward into the airbag's deployment zone.",
        context:
          "Alongside the recommendation sit hard requirements. Under 2 means a rear-facing seat until the child outgrows the manufacturer's height and weight limits. Under 4 means an approved child restraint anywhere in the vehicle. From 4 up to 8 means a booster with lap and shoulder belt. From 8 up to 18 means a seat belt in any seat. A rear-facing seat must never go in front of an active airbag.",
        trap:
          "The age 8 booster threshold gets mistaken for the age at which the back seat stops mattering. The two rules track different ages.",
        excerptKey: "children-12-and-under-rear",
        sourceLabel: "PA Driver's Manual - Chapter 5, Air Bag Safety Information",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_10",
        topic: "emergencies",
        question:
          "Ice flies off your moving vehicle, strikes another car and seriously injures the driver. What fine range applies?",
        choices: ["$50 to $200", "$200 to $1,500", "$25 to $100", "$1,000 to $5,000"],
        correctIndex: 1,
        explanation:
          "Where dislodged snow or ice strikes another vehicle or a pedestrian and causes death or serious bodily injury, the fine runs from $200 to $1,500 for each offence.",
        context:
          "That is a separate offence from simply failing to clear the vehicle, which carries a flat $50 whether or not anything ever comes off. The 2021 manual still describes the older $200 to $1,000 range from the 2006 version of the law; the current figures come from the Vehicle Code as amended in 2022. Note also that the heavier penalty is tied to injury or death, not to property damage.",
        trap:
          "Treating the two offences as one range gets both halves wrong. Failure to clear and dislodged ice causing injury are charged separately.",
        excerptKey: "snow-ice-dislodged-fine",
        commonlyMissed: true,
        sourceLabel: "75 Pa.C.S. § 3721 - Snow and ice",
        sourceUrl: CODE_3721,
      },
      {
        id: "pa_s5_11",
        topic: "signs",
        question:
          "You see a three-digit interstate shield whose first digit is odd, such as I-180. What kind of route is it?",
        choices: [
          "A loop that rejoins the interstate system at both ends",
          "A toll road operated separately from the interstate system",
          "A route that runs east and west",
          "A spur that connects to another interstate at one end only",
        ],
        correctIndex: 3,
        explanation:
          "An odd first digit marks a spur, joining another interstate at just one end and often running into a city centre. I-180 at Williamsport is the manual's example.",
        context:
          "An even first digit means a loop or beltway that reconnects at both ends, such as I-276 near Philadelphia. The two-digit rules underneath are simpler: even numbers run east-west, odd numbers north-south, with numbers rising from south to north and from west to east across the country.",
        trap:
          "The odd-even logic has to be applied to the first digit of three, and it is easy to read the whole number as though it were a two-digit route.",
        excerptKey: "interstate-three-digit-odd",
        sourceLabel: "PA Driver's Manual - Chapter 2, Interstate Numbering System",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_12",
        topic: "licensing",
        question:
          "You hold a junior driver's licence and turn 18 next week. What happens to your licence?",
        choices: [
          "It expires and you must reapply as an adult",
          "It stays a junior licence until you complete a driver training course",
          "It automatically becomes a regular driver's licence",
          "It converts only after you submit an application and fee",
        ],
        correctIndex: 2,
        explanation:
          "A junior licence becomes a regular one automatically at 18. No application is needed for that particular route.",
        context:
          "There is also an earlier route. After holding the junior licence for a year you may apply to convert it if you have passed a driver training course approved by the PA Department of Education, have not been at fault in a crash for a year, have not been convicted of any Vehicle Code violation for a year, and have parental consent. That one is made on form DL-59.",
        trap:
          "The early-upgrade conditions get read as though they applied to everybody. They are the shortcut; turning 18 does it on its own.",
        excerptKey: "junior-to-regular-licence",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 1, Junior Driver's License Information",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_13",
        topic: "rules",
        question: "How close to a bridge or tunnel may you overtake another vehicle?",
        choices: [
          "No passing within 100 feet of it",
          "No passing within 50 feet of it",
          "Passing is allowed if the line is broken",
          "No passing within 300 feet of it",
        ],
        correctIndex: 0,
        explanation:
          "One hundred feet from any bridge, elevated structure or tunnel. The same figure applies within 100 feet of an intersection or railroad grade crossing.",
        context:
          "Passing is also barred approaching or on a curve or hill crest that limits your view of oncoming traffic, and on the shoulder of a multi-lane highway. Bridges and underpasses often narrow the lanes and remove the shoulder altogether, which is why the manual asks you to slow down and hold your lane rather than looking for a way past.",
        trap:
          "A broken centre line describes ordinary sight lines, not the structural restrictions. Both have to allow the pass.",
        excerptKey: "no-passing-bridge-tunnel",
        sourceLabel: "PA Driver's Manual - Chapter 3, Passing",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_14",
        topic: "sharing",
        question:
          "How long can passing a truck take at highway speeds, according to the Pennsylvania manual?",
        choices: ["Around 5 seconds", "Up to 30 seconds", "Around 10 seconds", "Up to 2 minutes"],
        correctIndex: 1,
        explanation:
          "As much as 30 seconds at highway speeds. That is a long time to be alongside a vehicle whose driver may not be able to see you.",
        context:
          "On a level road the difference against passing a car is only three to five seconds; the 30-second figure reflects the full manoeuvre including getting clear. On an upgrade a truck loses speed and becomes easier to pass; on a downgrade its momentum builds and you may need more speed of your own. Keep both hands on the wheel for the turbulence, and do not linger alongside.",
        trap:
          "Underestimating the time is how drivers start a pass they cannot finish before the next hill or curve arrives.",
        excerptKey: "truck-passing-time",
        sourceLabel: "PA Driver's Manual - Chapter 3, Passing a Truck",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_15",
        topic: "impairment",
        question:
          "At what blood alcohol concentration does Pennsylvania's highest rate DUI band begin?",
        choices: ["0.10 percent", "0.12 percent", "0.16 percent", "0.20 percent"],
        correctIndex: 2,
        explanation:
          "The highest rate band starts at 0.16 percent. Below it, high rate covers 0.10 to 0.159, and general impairment covers 0.08 to 0.099.",
        context:
          "Two groups land in the top band regardless of reading: anyone who refuses chemical testing, and anyone convicted of driving under the influence of Schedule I, II or III substances that were not medically prescribed, of a drug and alcohol combination, or of substances such as inhalants. A first offence there means three days to six months in prison, a $1,000 to $5,000 fine, a 12-month suspension and a year of ignition interlock.",
        trap:
          "Doubling the legal limit produces 0.16 by coincidence rather than by rule, and 0.10 is the boundary people reach for because it is the older familiar figure.",
        excerptKey: "highest-rate-tier",
        sourceLabel: "PA Driver's Manual - Chapter 4, Severe Penalties",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_16",
        topic: "speed",
        question: "Why does the Pennsylvania manual warn against cruise control on slippery roads?",
        choices: [
          "It keeps applying power when a wheel starts to spin",
          "It disengages without warning below 40 mph",
          "It increases fuel consumption in cold weather",
          "It prevents the anti-lock brakes from operating",
        ],
        correctIndex: 0,
        explanation:
          "Regaining control of a spinning wheel means reducing power, and an engaged cruise control does the opposite: it keeps feeding power in to hold the set speed.",
        context:
          "Snow, ice, slush and standing water can all break traction, and the system cannot tell the difference between a wheel that is spinning and a road that has got steeper. Cruise control is also specifically ruled out in work zones, where the speed you need changes faster than the system will react.",
        trap:
          "Cruise control is often marketed as a smoothness aid, which makes it sound like the right tool for a slippery surface. It removes the one input that recovers grip.",
        excerptKey: "no-cruise-control-slippery",
        sourceLabel: "PA Driver's Manual - Chapter 3, Snow and Ice",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_17",
        topic: "signals",
        question:
          "You are in the left lane of a one-way street facing a steady red arrow, and want to turn left onto another one-way street. What may you do?",
        choices: [
          "Nothing; a red arrow prohibits the turn entirely",
          "Turn without stopping, since a red arrow is advisory",
          "Turn only when the arrow starts flashing yellow",
          "Stop, yield, and then turn, unless a sign forbids it",
        ],
        correctIndex: 3,
        explanation:
          "The turns permitted on a steady red signal are also permitted on a steady red arrow. One-way onto one-way, from the left lane, after a full stop and yielding, unless a sign says no.",
        context:
          "What the arrow removes is the suggestion that the movement is currently authorised on its own account. The wait it describes is for a green arrow or a flashing yellow arrow, either of which would let you turn without the stop-and-yield sequence. The same logic makes right on red lawful at a red arrow.",
        trap:
          "The arrow's shape reads as a stronger prohibition than a round red, which is why drivers sit through a turn they are entitled to make.",
        excerptKey: "steady-red-arrow",
        sourceLabel: "PA Driver's Manual - Chapter 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_18",
        topic: "safety",
        question:
          "The manual describes the Dutch Reach for opening a car door. What does it involve?",
        choices: [
          "Opening the door only a few inches at first",
          "Waiting for a passing cyclist to acknowledge you",
          "Opening the door with the hand further from it",
          "Opening the door with the engine still running",
        ],
        correctIndex: 2,
        explanation:
          "You use your far hand, which forces your body to turn towards the door and brings approaching cyclists into view. It also stops the door swinging open fast.",
        context:
          "The check runs rearview mirror, side mirror, then the reach. Doors are a serious hazard to cyclists, which is also why riders are advised to stay at least three feet clear of parked cars, in a bike lane or out of one. Pennsylvania separately expects you to check for traffic behind you before you get out of a parked vehicle.",
        trap:
          "Cracking the door slightly is the intuitive precaution and it does nothing about the blind spot behind your shoulder.",
        excerptKey: "dutch-reach",
        sourceLabel: "PA Driver's Manual - Chapter 5, The Danger of Open Doors to Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_19",
        topic: "parking",
        question:
          "What fine does Pennsylvania set for parking unlawfully in a space reserved for people with disabilities?",
        choices: ["$25 to $75", "$100 flat", "$500 minimum", "$50 to $200"],
        correctIndex: 3,
        explanation:
          "Between $50 and $200, and the vehicle can also be towed, with the owner paying the towing costs to get it back.",
        context:
          "Two conditions have to hold before the space may be used at all: the vehicle displays a disabled person or disabled veteran plate or placard, and the vehicle is being operated by or for the transport of that person. Meeting one condition without the other is still a violation, which is what catches people borrowing a family placard.",
        trap:
          "The towing charge is separate from the fine, so the real cost of the offence is well above the headline range.",
        excerptKey: "disabled-parking-fine",
        sourceLabel: "PA Driver's Manual - Chapter 5, Parking Areas for Persons with Disabilities",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_20",
        topic: "licensing",
        question: "What happens when a Pennsylvania driving record reaches 11 points?",
        choices: [
          "A written special point examination",
          "A departmental hearing",
          "Driver Improvement School",
          "An automatic licence suspension",
        ],
        correctIndex: 3,
        explanation:
          "Eleven or more points brings automatic suspension. The length depends on how many times the licence has been suspended before: five days per point for a first suspension, ten for a second, fifteen for a third, and a full year after that.",
        context:
          "The earlier stages are corrective rather than punitive. Six points the first time means a special point exam or Driver Improvement School within 30 days. Six points a second time means a departmental hearing and Driver Improvement School. Once a suspension has been served and the privilege restored, the record shows five points regardless of what it held before.",
        trap:
          "Six points is widely believed to be the suspension threshold for adults. It is the intervention threshold; eleven is where the licence goes.",
        excerptKey: "points-eleven-suspension",
        commonlyMissed: true,
        sourceLabel: "PennDOT - The Pennsylvania Point System fact sheet",
        sourceUrl: POINTS,
      },
      {
        id: "pa_s5_21",
        topic: "emergencies",
        question:
          "Police did not investigate a crash in which somebody was injured. What must you do, and by when?",
        choices: [
          "Nothing; the insurance claim is sufficient",
          "Send PennDOT a Driver's Accident Report Form within five days",
          "Report to a magistrate within 30 days",
          "File a report with your county within 10 days",
        ],
        correctIndex: 1,
        explanation:
          "Form AA-600 goes to PennDOT's Bureau of Highway Safety and Traffic Engineering within five days. The duty applies where somebody died or was injured, or where a vehicle had to be towed, and police did not investigate.",
        context:
          "The immediate obligations at the scene are separate: stop at or near it, move clear of traffic if you can, call police if anyone is hurt or if any vehicle needs towing, and exchange names, addresses, telephone numbers, registration numbers and insurance details. Hitting a parked car or damaging property means finding the owner, or leaving a note with the date, time, your name and a contact number, and calling police.",
        trap:
          "Five days is much tighter than people assume, and the duty exists precisely in the case where nobody official took charge at the scene.",
        excerptKey: "crash-report-five-days",
        sourceLabel: "PA Driver's Manual - Chapter 4, Crashes",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_22",
        topic: "rightOfWay",
        question:
          "You are at a two-way stop and want to cross a 30 mph street. What gap should you look for?",
        choices: [
          "About six seconds in both directions",
          "About three seconds in both directions",
          "About nine seconds in both directions",
          "Any gap large enough to clear the first lane",
        ],
        correctIndex: 0,
        explanation:
          "About six seconds in each direction, or roughly a block of clear road either way. Look left first, then right, then left again before moving.",
        context:
          "Left is checked first because vehicles from the left reach you sooner. Keep looking as you enter the intersection, because a driver with a stop sign or a red light may not honour it. If parked cars, shrubs or buildings block the view, ease forward until you can actually see rather than guessing from where you stopped.",
        trap:
          "Clearing the first lane is not the manoeuvre. Stopping halfway across is only safe where there is a centre median big enough to hold the whole vehicle.",
        excerptKey: "gap-two-way-stop",
        sourceLabel: "PA Driver's Manual - Chapter 3, Moving Into and Through Intersections",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_23",
        topic: "rules",
        question:
          "You are approaching the crest of a hill on a two-lane road and cannot see beyond it. May you pass?",
        choices: [
          "Yes, if there is no oncoming vehicle currently in sight",
          "Yes, provided you can complete the pass within 300 feet",
          "No; passing is prohibited where a curve or hill crest restricts your view",
          "Yes, if the centre line is broken on your side",
        ],
        correctIndex: 2,
        explanation:
          "Passing is barred approaching or on a curve or hill crest that restricts your view of oncoming traffic. Not being able to see is precisely the condition.",
        context:
          "The other prohibitions sit alongside it: within 100 feet of an intersection or railroad crossing, within 100 feet of a bridge, elevated structure or tunnel, and on the shoulder of a multi-lane highway. The pennant-shaped NO PASSING ZONE sign and a solid yellow line on your side of the centre usually mark these stretches, but the rule holds whether or not they do.",
        trap:
          "Seeing no oncoming vehicle over a crest proves nothing at all, because the sight line is the thing you do not have.",
        excerptKey: "no-passing-curve-hill",
        sourceLabel: "PA Driver's Manual - Chapter 3, You May Not Pass If",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_24",
        topic: "signs",
        question: "What does a yellow diamond showing a series of arrows pointing one way tell you?",
        choices: [
          "Traffic merges from that direction",
          "The road bends in the direction the chevrons point",
          "The lane on that side is closed",
          "Overtaking is permitted on that side",
        ],
        correctIndex: 1,
        explanation:
          "Chevrons mark a sharp change in direction and point the way the road bends. Several of them are usually placed through the curve itself.",
        context:
          "Chevrons normally follow an advance curve warning sign, and they earn their keep at night and in poor visibility when the road's shape is otherwise invisible. The manual's rule for any curve is that the speed comes off before you enter it, not during, and that you sit slightly right of centre in a right-hand bend and mid-lane in a left-hand one.",
        trap:
          "Chevrons look like merge or lane-shift arrows at a glance, and reading them as a lane instruction rather than a road-shape one is how drivers arrive at the bend too fast.",
        excerptKey: "chevron-signs",
        sourceLabel: "PA Driver's Manual - Chapter 2, Chevron Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_25",
        topic: "sharing",
        question:
          "A motorcycle ahead of you has its right turn signal flashing. What should you assume?",
        choices: [
          "The rider is turning right, so you may pull out",
          "The rider is changing lanes to the right",
          "Nothing; the signal may simply not have cancelled itself",
          "The rider is slowing to let you past",
        ],
        correctIndex: 2,
        explanation:
          "Motorcycle and moped signals often do not cancel automatically, so a flashing indicator may be left over from an earlier turn. Wait until the rider is actually turning.",
        context:
          "Most car-motorcycle collisions happen at intersections, and the usual pattern is a driver turning left across a rider's path after misjudging that rider's speed or intentions. The same caution applies to any oncoming vehicle showing a signal: the driver may have changed their mind, or be turning into a driveway just beyond you.",
        trap:
          "A signal looks like a commitment. On a motorcycle it is often just a signal nobody switched off.",
        excerptKey: "motorcycle-turn-signal",
        sourceLabel: "PA Driver's Manual - Chapter 3, Motorcyclists and Moped Drivers",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_26",
        topic: "speed",
        question:
          "On a Pennsylvania highway that is not an interstate, how often should you expect to see the speed limit posted?",
        choices: [
          "At every intersection",
          "Once at each municipal boundary",
          "At intervals of roughly half a mile",
          "Only where the limit changes",
        ],
        correctIndex: 2,
        explanation:
          "Roughly every half mile on non-interstate highways. On interstates the limit is posted after each interchange instead.",
        context:
          "The posting pattern matters because a limit you never saw still binds you. The number itself describes the maximum under ideal road, traffic and weather conditions, so it is a ceiling rather than a target, and driving too fast for conditions remains a separate offence at any speed below it.",
        trap:
          "Assuming a limit only gets posted where it changes leaves you guessing on a long road you joined partway along.",
        excerptKey: "speed-limit-posting-interval",
        sourceLabel: "PA Driver's Manual - Chapter 3, Posted Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_27",
        topic: "impairment",
        question:
          "What restoration fee does Pennsylvania charge for a first refusal of chemical testing?",
        choices: ["$100", "$250", "$300", "$500"],
        correctIndex: 3,
        explanation:
          "Five hundred dollars for a first refusal, rising to $1,000 for a second and $2,000 for a third or subsequent one. It is payable by certified check or money order.",
        context:
          "That fee is on top of the ordinary restoration fee required under the Vehicle Code, and on top of the one-year suspension the refusal itself brings. Refusal also puts you in the highest DUI penalty band, and a refusal combined with a conviction can mean two and a half years off the road, or three years where there is a prior DUI or prior refusal.",
        trap:
          "The refusal penalties stack rather than replace. People weigh the refusal against the DUI when in practice they can arrive together.",
        excerptKey: "refusal-restoration-fee",
        sourceLabel: "PA Driver's Manual - Chapter 4, Chemical Test Refusal Restoration Fee",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_28",
        topic: "safety",
        question:
          "What does the Vehicle Code require of a driver who is under 18, regardless of which seat anyone else occupies?",
        choices: [
          "They must have an adult in the front passenger seat",
          "They must be secured in a properly adjusted and fastened seat belt",
          "They must display a learner plate on the vehicle",
          "They must keep the headlights on at all times",
        ],
        correctIndex: 1,
        explanation:
          "A driver under 18 must be belted. It is stated separately from the general front-seat rule, and it is why teenage drivers can be stopped for the belt alone.",
        context:
          "The under-18 provisions are enforced differently from the adult one. The Vehicle Code's secondary-enforcement limit, which stops an adult front-seat belt violation being charged on its own, applies only to that adult provision. Under-18 drivers and passengers fall outside it. The same driver must also secure every occupant aged 8 up to 18, and may not carry more passengers than the vehicle has seat belts.",
        trap:
          "Pennsylvania's belt law is widely described as secondary enforcement full stop. For under-18 occupants it is not.",
        excerptKey: "seat-belt-statute-driver-under-18",
        commonlyMissed: true,
        sourceLabel: "75 Pa.C.S. § 4581 - Restraint systems",
        sourceUrl: CODE_4581,
      },
      {
        id: "pa_s5_29",
        topic: "licensing",
        question: "How long is a Pennsylvania learner's permit valid?",
        choices: [
          "One year from the issue date",
          "Six months from the issue date",
          "Two years from the issue date",
          "Until your eighteenth birthday",
        ],
        correctIndex: 0,
        explanation:
          "One year from the date printed on the initial permit. If it expires or you fail the road test three times, you use form DL-31 to add, extend, replace or correct it.",
        context:
          "The year overlaps the other clocks rather than replacing them. Under-18 applicants must hold the permit six months before the road test and must have completed 65 hours of supervised driving including 10 at night and 5 in bad weather. Taking the permit outside Pennsylvania is worth checking first with your insurer and the other state, since it may not be recognised.",
        trap:
          "The six-month wait and the one-year validity get merged into one number, which leaves people surprised when the permit runs out.",
        excerptKey: "permit-validity",
        sourceLabel: "PA Driver's Manual - Chapter 1, Learner's Permit",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_30",
        topic: "emergencies",
        question:
          "A vehicle is coming head-on towards you in your lane. After sounding your horn, what should you do?",
        choices: [
          "Swerve left into the lane the other driver has left",
          "Brake hard and hold your lane",
          "Flash your headlights and maintain speed",
          "Try to escape to the right if you can",
        ],
        correctIndex: 3,
        explanation:
          "Steer right. If you go left and the other driver corrects at the last moment, you meet them again in the lane you both moved into.",
        context:
          "The horn comes first because the other driver may simply not have seen you, and may be asleep, distracted or impaired. Where a collision cannot be avoided, brake firmly and steadily rather than stamping: every mile per hour you shed reduces the impact, and staying belted with the head restraint properly set is what determines the outcome.",
        trap:
          "Going left looks logical because it aims at empty road. It aims at the road the other driver is about to recover into.",
        excerptKey: "head-on-collision",
        sourceLabel: "PA Driver's Manual - Chapter 3, If Another Vehicle Is Approaching Head-On",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_31",
        topic: "rules",
        question:
          "Your passenger throws a food wrapper out of the window while you are driving. Who can be fined?",
        choices: [
          "Only the passenger who threw it",
          "Nobody, unless police witness it directly",
          "You, as the driver, can be fined up to $300",
          "Both of you, but only for a second offence",
        ],
        correctIndex: 2,
        explanation:
          "The anti-littering law expressly reaches conduct by any other person in a vehicle you are driving, and the fine on conviction runs up to $300.",
        context:
          "The prohibition covers dropping, throwing or depositing waste paper, sweepings, ashes, household waste, glass, metal, refuse, rubbish or any dangerous or detrimental substance onto any highway, onto public or private property without consent, or into the waters of the Commonwealth. Removing it immediately is the way out.",
        trap:
          "Drivers assume responsibility follows the hand that threw it. The statute puts it on the person driving.",
        excerptKey: "littering-fine",
        sourceLabel: "PA Driver's Manual - Chapter 5, Anti-Littering Law",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_32",
        topic: "signs",
        question: "What does an ADDED LANE sign tell you?",
        choices: [
          "Entering traffic must yield before joining your lane",
          "Merging is not necessary, because entering traffic gets a new lane",
          "A lane opens for passing over the next mile",
          "The road widens for a turning lane at the next intersection",
        ],
        correctIndex: 1,
        explanation:
          "The entering roadway brings its own new lane, so nobody has to merge. It is the one warning of this family that does not describe a conflict.",
        context:
          "Compare it with MERGING TRAFFIC, where the two streams do have to combine and the entering traffic yields, and with WEAVE AREA, where entering and exiting traffic cross each other's paths over a short distance. Reading which of the three you are looking at decides whether you need to make room, hold your line, or expect somebody to cut across you.",
        trap:
          "Treating an added lane as a merge produces exactly the unnecessary braking, in the through lane, that causes rear-end collisions at on-ramps.",
        excerptKey: "added-lane-sign",
        sourceLabel: "PA Driver's Manual - Chapter 2, Added Lane",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_33",
        topic: "rightOfWay",
        question:
          "Your light is green but traffic ahead is backed up beyond the intersection. What should you do?",
        choices: [
          "Enter and wait, since your signal is green",
          "Wait behind the stop line until you can clear the intersection",
          "Enter and reverse out if the queue does not move",
          "Enter, then turn right to get out of the way",
        ],
        correctIndex: 1,
        explanation:
          "A green light permits you to go, not to occupy the intersection. You hold back until you are sure you can get all the way through.",
        context:
          "The same principle covers crossing and turning generally: make sure no vehicles or pedestrians are blocking your path before you commit, because being stranded in the middle with traffic coming at you removes every option. Stopping halfway across is only acceptable where a centre median is large enough to hold the entire vehicle.",
        trap:
          "The green light feels like a duty to move, and creeping in to hold your place is what locks up an intersection when the phase changes.",
        excerptKey: "blocked-intersection",
        sourceLabel: "PA Driver's Manual - Chapter 3, Crossing Traffic",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_34",
        topic: "parking",
        question: "May you stop and park on a limited access highway in Pennsylvania?",
        choices: [
          "No, unless official traffic control devices indicate you are allowed",
          "Yes, on the right shoulder for up to an hour",
          "Yes, anywhere the shoulder is wide enough",
          "Yes, provided you switch on your hazard flashers",
        ],
        correctIndex: 0,
        explanation:
          "Parking on a limited access highway is prohibited unless traffic control devices say otherwise. Emergencies and the direction of a police officer are the exceptions that run through the whole list.",
        context:
          "If you do break down, get as far off the road as you can, put on the hazard flashers, raise the hood so the reason is obvious, and pick a place where you are easy to see. Anywhere you leave a vehicle stopped on the roadway itself, it has to be visible for at least 500 feet in both directions.",
        trap:
          "Hazard flashers make an unlawful stop visible, not lawful. They are a warning device, not an authorisation.",
        excerptKey: "no-parking-limited-access",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s5_35",
        topic: "safety",
        question: "How does the Pennsylvania manual define a blind spot?",
        choices: [
          "The area directly behind the vehicle, hidden by the trunk",
          "Anywhere your mirrors are fogged or dirty",
          "The area beyond the reach of your headlights at night",
          "Any place around the vehicle a driver cannot see without moving their head",
        ],
        correctIndex: 3,
        explanation:
          "It is defined by what your head has to do, not by where the area sits. Anywhere you must move your head to see is a blind spot.",
        context:
          "That definition is why the manual asks you to avoid sitting on either side of another vehicle and slightly behind it, since both positions put you in that driver's blind spot: either speed up or drop back. Trucks and buses carry much larger blind spots on all four sides, and the mirror test tells you when you are inside one.",
        trap:
          "Thinking of the blind spot as one fixed patch over your left shoulder ignores the right side and the area straight behind, which are just as hidden.",
        excerptKey: "blind-spot-definition",
        sourceLabel: "PA Driver's Manual - Chapter 3, Keep Your Vehicle Where It Can Be Seen",
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
      "Thirty questions across the whole manual at the level PennDOT actually tests. The real thing is 18 questions and you need 15 - about 83 percent - so treat 25 out of 30 here as your pass mark and anything less as a topic to go back to.",
    questions: [
      {
        id: "pa_s6_01",
        topic: "signs",
        question: "What is the purpose of a regulatory sign?",
        choices: [
          "To warn you about conditions on the road ahead",
          "To tell you what the law requires or forbids at that point",
          "To direct you towards towns and services",
          "To identify the route number you are travelling on",
        ],
        correctIndex: 1,
        explanation:
          "Regulatory signs state the law: speed limits, direction of travel, turning and parking restrictions. Ignoring one means a fine and points, not just a hazard.",
        context:
          "Most are black and white vertical rectangles or squares, like SPEED LIMIT. Some are black, white and red, like NO LEFT TURN with its circle and slash. A few are red and white, like STOP, YIELD, DO NOT ENTER and WRONG WAY. Reserved disabled parking is the odd one out, regulatory despite its blue and white colouring.",
        trap:
          "Colour alone will not sort regulatory from warning signs, because the family spans several colour schemes. What they share is that they state a rule.",
        excerptKey: "regulatory-signs",
        sourceLabel: "PA Driver's Manual - Chapter 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_02",
        topic: "rules",
        question:
          "You are on a multi-lane road with broken white lines between the lanes and a double yellow centreline. What may you cross?",
        choices: [
          "Both, if the road ahead is clear",
          "The broken white lines only",
          "The double yellow lines only, and only to overtake",
          "Neither while any vehicle is in sight",
        ],
        correctIndex: 1,
        explanation:
          "Broken white lines separate lanes going your way and may be crossed to change lanes or pass. The double yellow separates opposing traffic and may not be crossed to pass.",
        context:
          "Colour tells you what lies beyond the line, pattern tells you whether you may cross it. Broken is crossable, solid is not, with turns as the exception, and the four-foot bicycle passing rule as a narrow further one. On a divided highway the left edge of each carriageway is marked with a solid yellow line and the right edge with solid white.",
        trap:
          "Checking that the road looks clear answers a different question. The marking decides whether the manoeuvre is permitted at all.",
        excerptKey: "broken-white-lines-passing",
        sourceLabel: "PA Driver's Manual - Chapter 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_03",
        topic: "rightOfWay",
        question: "How does Pennsylvania law actually treat right of way at intersections?",
        choices: [
          "It grants right of way to the driver who arrives first",
          "It grants right of way to through traffic over turning traffic",
          "It grants right of way to the vehicle on the larger road",
          "It does not grant right of way at all; it only says who must yield",
        ],
        correctIndex: 3,
        explanation:
          "The law is written entirely in terms of who must yield. Nobody is handed a right, which is why a driver who is legally entitled to go must still stop or yield to avoid a crash.",
        context:
          "That framing changes how the yielding rules read. Left turns yield to oncoming traffic. Entering traffic yields to a roundabout. When two vehicles arrive together from different roads, the one on the left yields. Vehicles from alleys, private roads and driveways wait for the main road. Each is an obligation on somebody, not a permission for anybody.",
        trap:
          "Insisting on a right of way you believe you have is the specific behaviour the manual warns against, because being right does not stop the collision.",
        excerptKey: "right-of-way-not-given",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Negotiating Intersections",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_04",
        topic: "speed",
        question: "On an interstate highway in Pennsylvania, where is the speed limit posted?",
        choices: [
          "At every mile marker",
          "Only at the state line",
          "After each interchange",
          "Only where the limit changes",
        ],
        correctIndex: 2,
        explanation:
          "Interstates carry the limit after each interchange, so any driver joining the highway sees it shortly after entering. Other highways post it roughly every half mile.",
        context:
          "Seventy is the highest limit that can be posted anywhere in the state, and plenty of interstates carry less. Whatever the number, it describes ideal road, traffic and weather conditions, and you can be cited for driving too fast for conditions while sitting under it.",
        trap:
          "Posting only where the limit changes sounds efficient and would leave a driver who joined halfway along with nothing to go on.",
        excerptKey: "interstate-speed-posting",
        sourceLabel: "PA Driver's Manual - Chapter 3, Posted Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_05",
        topic: "licensing",
        question:
          "Which class of Pennsylvania licence covers ordinary passenger cars, pickups and vans?",
        choices: ["Class A", "Class B", "Class M", "Class C"],
        correctIndex: 3,
        explanation:
          "Class C, with a minimum age of 16, covers the vehicles most drivers use. Classes A and B are commercial weight classes with a minimum age of 18, and Class M is for motorcycles.",
        context:
          "Class C also authorises a motor-driven cycle with an automatic transmission and an engine of 50cc or less, and a three-wheeled motorcycle with an enclosed cab. Firefighters and rescue squad members holding Class C and a certificate of authorisation may operate their organisation's emergency vehicles.",
        trap:
          "Class A and B sound like the ordinary tiers because of the lettering. They are the heavy combination and single-vehicle commercial classes.",
        excerptKey: "class-c-licence",
        sourceLabel: "PA Driver's Manual - Chapter 1, Classes of Driver's Licenses",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_06",
        topic: "impairment",
        question:
          "A driver aged 30 blows 0.09 and has caused a crash with property damage. Which penalty band applies?",
        choices: [
          "General impairment, because the reading is under 0.10",
          "No band, because the reading is under 0.10 and nobody was injured",
          "Highest rate, because a crash occurred",
          "High rate, because a crash caused damage or injury",
        ],
        correctIndex: 3,
        explanation:
          "A crash causing bodily injury, death or property damage moves a 0.08 to 0.099 reading up from general impairment into the high rate band.",
        context:
          "The bands describe readings but they are not decided by readings alone. Under-21 drivers convicted at 0.02 or above are sentenced in the high rate band too. Anyone who refuses chemical testing, or is convicted of driving under the influence of unprescribed Schedule I, II or III substances, lands in the highest band regardless of what they blew.",
        trap:
          "Reading the tables as pure BAC ranges misses the three escalation routes written underneath them.",
        excerptKey: "crash-bumps-to-high-rate",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 4, Severe Penalties",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_07",
        topic: "safety",
        question: "In what order should you look when you arrive at an intersection?",
        choices: [
          "Right, then left, then right again",
          "Straight ahead, then both sides",
          "Left, then right, then left again",
          "Whichever direction traffic is heaviest, then the other",
        ],
        correctIndex: 2,
        explanation:
          "Left first, because vehicles coming from the left reach you sooner, then right, then left again to catch anything you missed the first time.",
        context:
          "Keep looking as you enter, because a stop sign or signal does not guarantee that cross traffic will honour it. Where buildings, shrubs or parked cars block the view, move forward slowly until you can genuinely see rather than committing from where you stopped. For a right turn the sequence widens to left, ahead, right, then left again.",
        trap:
          "Looking right first wastes the check on the further lane and lets the nearer one develop while you are looking the wrong way.",
        excerptKey: "left-right-left",
        sourceLabel: "PA Driver's Manual - Chapter 3, Looking to the Sides",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_08",
        topic: "sharing",
        question:
          "A pedestrian is waiting to cross mid-block and you stop to wave them across. What does the manual say about that?",
        choices: [
          "It is never safe to wave a pedestrian into the line of traffic",
          "It is good practice provided you have stopped completely",
          "It is acceptable only during daylight hours",
          "It is required once you have made eye contact",
        ],
        correctIndex: 0,
        explanation:
          "Waving somebody out is never safe, and the manual singles out unmarked and mid-block locations. You control one lane; you cannot see or vouch for the others.",
        context:
          "The genuine duties are broad enough without inventing this one: yield at intersections and crosswalks, slow down near children, be patient with elderly pedestrians and people with disabilities, always yield to a blind pedestrian, check behind before reversing, and never pass a stopped vehicle until you are sure nobody is crossing in front of it.",
        trap:
          "It feels like the courteous thing to do, and it invites somebody into the path of a driver who never saw either of you.",
        excerptKey: "never-wave-pedestrian",
        sourceLabel: "PA Driver's Manual - Chapter 3, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_09",
        topic: "parking",
        question: "What does the manual tell you to do before you leave a parked vehicle?",
        choices: [
          "Turn off the engine, remove the key, lock the doors, and check for traffic before getting out",
          "Leave the engine running if you will be less than five minutes",
          "Leave a window open to prevent heat build-up",
          "Turn the wheels towards the curb whatever the gradient",
        ],
        correctIndex: 0,
        explanation:
          "Engine off, key out, doors locked, and a look behind for traffic before you open the door. That last check is the one people skip.",
        context:
          "The rest of the parking routine comes first: within 12 inches of the curb, facing the direction traffic moves, parking brake set, transmission in Park or, on a manual, in Reverse or First. On a hill the wheels are turned according to the slope and whether there is a curb. Opening the door is best done with the far hand, which turns your body and shows you approaching cyclists.",
        trap:
          "Turning the wheels towards the curb is right for downhill and wrong for uphill with a curb, so it is not a universal instruction.",
        excerptKey: "leaving-vehicle",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_10",
        topic: "emergencies",
        question:
          "A vehicle behind you is flashing blue lights only and signalling you to pull over. What does that tell you?",
        choices: [
          "It is an unmarked police car",
          "It is a state police vehicle rather than a local one",
          "It is not a police officer",
          "It is a police vehicle responding to an emergency elsewhere",
        ],
        correctIndex: 2,
        explanation:
          "Blue lights alone do not signify a police officer in Pennsylvania. Police vehicles show red and blue, or red alone on some unmarked cars, sometimes with white flashers added.",
        context:
          "If you see red and blue or red alone and are still unsure who is stopping you, you may drive on to the nearest well-lit, populated area, so long as you acknowledge the request by putting your flashers on and slowing down. You may ask for identification, and you should if the person is not in uniform or the vehicle is unmarked.",
        trap:
          "Blue is so strongly associated with police that a blue-only vehicle reads as authority. It is the one combination that is not.",
        excerptKey: "police-blue-only-not-police",
        sourceLabel: "PA Driver's Manual - Chapter 4, If You Are Stopped by the Police",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_11",
        topic: "signals",
        question: "A steady downward green arrow is displayed over your lane. What does it mean?",
        choices: [
          "You must turn at the next intersection",
          "The lane merges with the one on your right",
          "You may use the lane",
          "You may use the lane only if you are turning left",
        ],
        correctIndex: 2,
        explanation:
          "A downward green arrow simply means the lane below it is open to you. It is the permissive member of the lane use control family.",
        context:
          "The others tell you the opposite or something narrower. A yellow X means leave the lane, because its direction is about to reverse. A red X means you may not use it. A white one-way left-turn arrow restricts the lane to left turns, and a white two-way left-turn arrow does the same while warning that opposing left-turners share it.",
        trap:
          "The downward point looks like an instruction to move into that lane. It only tells you the lane is available.",
        excerptKey: "lane-green-arrow",
        sourceLabel: "PA Driver's Manual - Chapter 2, Lane Use Control Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_12",
        topic: "signs",
        question: "A circular sign shows a U-shaped arrow crossed by a red slash. What does it prohibit?",
        choices: [
          "Left turns at the intersection",
          "Reversing on this stretch of road",
          "Entering the road ahead",
          "Turning completely round to go the other way",
        ],
        correctIndex: 3,
        explanation:
          "It is the NO U-TURN sign, and it bars a complete turn to head back the way you came. It says nothing about ordinary left or right turns.",
        context:
          "Where U-turns are not prohibited by sign, they still require sight lines: traffic in every direction at least 500 feet away and able to see you, and never on a curve or approaching a hill crest. The turn-restriction family also includes NO LEFT TURN and NO RIGHT TURN, all drawn as a black arrow in a circle with a red slash.",
        trap:
          "The U-shaped arrow gets read as a left-turn prohibition because a U-turn starts like one, which leaves drivers waiting at intersections where left turns are perfectly legal.",
        excerptKey: "no-u-turn-sign",
        sourceLabel: "PA Driver's Manual - Chapter 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_13",
        topic: "rules",
        question: "When does Pennsylvania law require headlights, apart from bad weather?",
        choices: [
          "From one hour after sunset to one hour before sunrise",
          "Only when street lighting is absent",
          "Only on roads with a limit above 45 mph",
          "Between sunset and sunrise",
        ],
        correctIndex: 3,
        explanation:
          "From sunset to sunrise, with no buffer either side. The requirement starts the moment the sun goes down, not once it feels dark.",
        context:
          "The other triggers are grey days and heavy traffic where you would otherwise blend in, unfavourable conditions such as rain, snow, sleet, hail, fog, smoke or smog, whenever you cannot see people or vehicles 1,000 feet ahead, work zones, and any time the wipers are running because of the weather. Daytime running lights never satisfy the requirement, because the tail lights stay dark.",
        trap:
          "The one-hour buffer belongs to other jurisdictions' rules. Pennsylvania draws the line at sunset itself.",
        excerptKey: "headlights-sunset-sunrise",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Driving at Night",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_14",
        topic: "rightOfWay",
        question:
          "Three cars arrive at a four-way stop at clearly different times. Who moves off first?",
        choices: [
          "The driver furthest to the right of the others",
          "The first vehicle to reach the intersection",
          "The driver going straight rather than turning",
          "The driver on the wider of the two roads",
        ],
        correctIndex: 1,
        explanation:
          "Arrival order settles it. The first to reach the intersection goes first, and the left-yields-to-right rule only matters where two drivers genuinely arrive together.",
        context:
          "All four approaches have to stop, and drivers facing each other may both proceed, watching for turns, because their paths only conflict if one turns left. A dark or non-functioning signal is treated as a four-way stop, which means the same order applies at an intersection that normally runs on lights.",
        trap:
          "The left-yields-to-right tie-break is the memorable part of the rule, so people apply it when there is no tie to break.",
        excerptKey: "four-way-stop",
        sourceLabel: "PA Driver's Manual - Chapter 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_15",
        topic: "speed",
        question: "Roughly how far does a vehicle travel in one second at 65 mph?",
        choices: ["About 50 feet", "About 100 feet", "About 20 feet", "About 200 feet"],
        correctIndex: 1,
        explanation:
          "Almost 100 feet per second. That is why the manual says it takes less than a second of inattention to run off the road at highway speed.",
        context:
          "It also explains why the four-second following rule matters so much at speed: four seconds at 65 mph is nearly 400 feet of road. Half of the fatal crashes on highways involve vehicles running off the road through speed or fatigue, and a fifth involve rear-end collisions caused by inattention and following too closely.",
        trap:
          "A second sounds like nothing until it is converted into distance, which is the whole point of the figure.",
        excerptKey: "highway-speed-feet-per-second",
        sourceLabel: "PA Driver's Manual - Chapter 3, Traveling on Highways",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_16",
        topic: "licensing",
        question:
          "A junior driver works an evening shift that finishes at 11:30 p.m. What lets them drive home?",
        choices: [
          "A notarised affidavit or certificate of authorisation from the employer, carried with the licence",
          "Nothing; the curfew has no exceptions",
          "A verbal agreement with a parent",
          "A note from the employer kept at the workplace",
        ],
        correctIndex: 0,
        explanation:
          "Employment, public or charitable service and volunteer fire company membership all lift the curfew, but only with documentation showing the likely schedule, carried with the licence.",
        context:
          "The curfew itself runs 11 p.m. to 5 a.m., and the other way through it is having a parent, guardian, person in loco parentis or spouse aged 18 or over in the car. The paperwork is a notarised affidavit or a certificate of authorisation from the employer, supervisor or fire chief, and the manual is specific that it should be kept with the driver's licence.",
        trap:
          "The exception is well known and the documentation requirement is not, which is what turns a lawful journey into a citation.",
        excerptKey: "junior-curfew-exception",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 1, Junior Driver's License Information",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_17",
        topic: "impairment",
        question:
          "You have been awake for 18 hours. What level of impairment does the manual compare that to?",
        choices: [
          "A blood alcohol level of .02 percent",
          "A blood alcohol level of .05 percent",
          "A blood alcohol level of .08 percent",
          "None; fatigue does not compare to alcohol",
        ],
        correctIndex: 1,
        explanation:
          "Eighteen hours awake is roughly equivalent to .05 percent. At 24 hours the comparison rises to .10, which is above the legal limit for an adult.",
        context:
          "Fatigue mirrors alcohol in what it damages: reaction time, judgement, vision and memory. It adds a hazard of its own, since you can fall asleep at the wheel without noticing, and a few seconds is enough to be fatal. Teenagers sleeping under eight hours a night carry a measurably higher crash risk.",
        trap:
          "Eighteen hours is an ordinary long day, which is why the comparison surprises people. The manual is describing normal life, not an extreme.",
        excerptKey: "fatigue-18-hours",
        sourceLabel: "PA Driver's Manual - Chapter 3, Lack of Sleep",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_18",
        topic: "sharing",
        question:
          "A cyclist is riding well below the posted minimum speed on a Pennsylvania road. What is their legal position?",
        choices: [
          "They must move to the shoulder whenever traffic builds behind them",
          "They may travel below the minimum speed and cannot be cited for impeding traffic",
          "They may only ride on roads with a limit of 35 mph or less",
          "They must dismount and walk if three or more vehicles are held up",
        ],
        correctIndex: 1,
        explanation:
          "Bicyclists count as vehicle operators, bound by traffic law, but they may travel below the posted minimum speed and may not be cited for impeding traffic.",
        context:
          "They may use a shoulder or berm but are not required to, and where a road has a single travel lane in each direction the requirement to keep right is waived. On a one-lane road they may use any part of the lane to avoid hazards, including keeping clear of parked cars. Forcing a cyclist off the road can bring criminal charges.",
        trap:
          "Drivers assume slow traffic must yield the road. For cyclists Pennsylvania has written the opposite into the law.",
        excerptKey: "bicycle-vehicle-operators",
        sourceLabel: "PA Driver's Manual - Chapter 5, Safe Passing Is The Law",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_19",
        topic: "safety",
        question: "Why does the manual tell you to secure loose items in the passenger compartment?",
        choices: [
          "They distract the driver by sliding around",
          "They interfere with the airbag sensors",
          "In a crash they keep travelling at the speed the vehicle was doing",
          "They can block the ventilation system",
        ],
        correctIndex: 2,
        explanation:
          "A loose object does not stop when the car does. It carries on at whatever speed you were travelling until it hits somebody or something.",
        context:
          "The manual's advice is to put heavier things such as backpacks, luggage and tools in the trunk where possible, or to strap them in with seat belts, and never to store anything on the rear window deck. It sits alongside the pre-drive checks: seat, mirrors, head restraint, belts, and nothing hanging from the rearview mirror while you are moving.",
        trap:
          "Distraction is the plausible-sounding reason and is not the one given. The hazard is kinetic, not visual.",
        excerptKey: "loose-items-projectiles",
        sourceLabel: "PA Driver's Manual - Chapter 3, Vehicle Checks",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_20",
        topic: "parking",
        question: "May you stop or park on a bridge in Pennsylvania?",
        choices: [
          "Yes, if there is a shoulder wide enough to clear the traffic lane",
          "No; bridges, other elevated structures and highway tunnels are all prohibited",
          "Yes, for up to ten minutes",
          "Yes, provided your hazard flashers are on",
        ],
        correctIndex: 1,
        explanation:
          "Bridges, elevated structures and highway tunnels are all on the prohibited list, along with railroad tracks, sidewalks, intersections and crosswalks.",
        context:
          "Emergencies and the direction of a police officer are the standing exceptions. The reason bridges and tunnels appear together is that both usually lack a real shoulder and offer no room for anybody to get past a stopped vehicle, which is also why passing is barred within 100 feet of either.",
        trap:
          "A wide-looking shoulder on a bridge is often a maintenance walkway rather than a refuge, so it does not turn a prohibited stop into a permitted one.",
        excerptKey: "no-parking-bridge-tunnel",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_21",
        topic: "emergencies",
        question:
          "Your brake system warning light comes on while you are driving a modern car. What is likely to be true?",
        choices: [
          "You probably still have braking on two of the four wheels",
          "The brakes have failed completely and will not respond",
          "The parking brake is your only remaining option",
          "The warning is for the brake fluid level only and can be ignored",
        ],
        correctIndex: 0,
        explanation:
          "Newer cars use a split braking system, so a failure usually leaves two wheels braking, normally one front and one rear. That is enough to reach the side of the road.",
        context:
          "Expect the pedal to travel much further than usual before anything happens, and to need a much harder push. Stopping distance goes up sharply, so think about where the car is headed and use a lower gear to help scrub off speed. Once you have stopped, call for help rather than driving on.",
        trap:
          "Treating the warning light as advisory is the dangerous reading. It is telling you half the system has gone.",
        excerptKey: "brake-warning-light",
        sourceLabel: "PA Driver's Manual - Chapter 3, If Your Vehicle Has Brake Failure",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_22",
        topic: "signs",
        question: "What does a KEEP RIGHT sign at a traffic island tell you?",
        choices: [
          "Slower traffic should use the right-hand lane",
          "The road narrows to a single lane ahead",
          "Pass to the right of the island or divider",
          "Right turns only are permitted from this lane",
        ],
        correctIndex: 2,
        explanation:
          "It tells you which side of the island or divider to take, and the answer is the right-hand side. It is about physical geometry, not lane discipline.",
        context:
          "These signs appear where a road splits round an obstruction or a median begins. They belong with the object markers, whose diagonal stripes point down in the direction you need to move to clear the hazard, and with the DIVIDED HIGHWAY BEGINS sign, which warns that the road ahead becomes two one-way roadways separated by a median.",
        trap:
          "It reads like the general keep-right lane rule, which is a different idea entirely and does not depend on an island being there.",
        excerptKey: "keep-right-sign",
        sourceLabel: "PA Driver's Manual - Chapter 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_23",
        topic: "rules",
        question: "Where are U-turns specifically prohibited in Pennsylvania?",
        choices: [
          "On any road with a limit above 35 mph",
          "At any signalised intersection",
          "Within city limits",
          "On curves, and approaching or nearing the crest of a hill",
        ],
        correctIndex: 3,
        explanation:
          "Curves and hill crests are named because approaching drivers cannot see you soon enough to react. A NO U-TURN sign removes the option anywhere it is posted.",
        context:
          "Even where a U-turn is permitted, it may only be made without endangering other traffic, which the manual translates into a practical test: drivers coming from every direction at least 500 feet away, and able to see you clearly. Where the road is divided and left turns are barred, a jughandle may be provided instead, taking you right and back round to a signal.",
        trap:
          "Looking for a prohibition sign is the wrong test. The geometric restrictions apply whether or not anybody has signed them.",
        excerptKey: "u-turn-prohibited-places",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, U-Turns",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_24",
        topic: "signals",
        question: "A steady DON'T WALK or steady upraised hand is displayed. What does it mean?",
        choices: [
          "Finish crossing if you have already started",
          "Do not cross",
          "Cross only at the far side of the intersection",
          "Wait for traffic to clear, then cross",
        ],
        correctIndex: 1,
        explanation:
          "Steady means do not cross at all. The flashing version is the one that lets you finish a crossing you have already begun.",
        context:
          "The full sequence runs steady WALK, meaning start crossing while watching for turning vehicles, then flashing DON'T WALK, meaning finish if you are in the street and do not start if you are not, then steady DON'T WALK. Where an intersection has no pedestrian signals at all, pedestrians obey the ordinary red, yellow and green lights.",
        trap:
          "Steady and flashing look similar from across a wide intersection, and only one of them permits anything.",
        excerptKey: "pedestrian-steady-dont-walk",
        sourceLabel: "PA Driver's Manual - Chapter 2, Pedestrian Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_25",
        topic: "licensing",
        question: "What must you bring for the vehicle you plan to drive in your road test?",
        choices: [
          "Its valid registration card and proof that it is currently insured",
          "Its title and a bill of sale",
          "Nothing; the examiner checks the plate against PennDOT records",
          "A maintenance record from the past 12 months",
        ],
        correctIndex: 0,
        explanation:
          "The valid registration card and proof of current insurance, both for the vehicle you are actually testing in. Originals only; copies are turned away.",
        context:
          "You also bring your valid learner's permit, the licence of the qualifying person accompanying you, and, if you are under 18, the signed certification of 65 hours of supervised driving on form DL-180C. Before the test the examiner checks the vehicle's inspection sticker, lights, horn, brakes, wipers, signals, mirrors, doors, seats and tyres, and an unsafe vehicle ends the appointment there.",
        trap:
          "Bringing a photocopy is treated as bringing nothing, and it is the commonest reason a road test does not go ahead.",
        excerptKey: "road-test-documents",
        sourceLabel: "PA Driver's Manual - Chapter 1, Road Test",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_26",
        topic: "rightOfWay",
        question: "What does the manual say about pedestrians at a roundabout?",
        choices: [
          "Motorists must yield to them both entering and exiting",
          "Pedestrians must yield to all circulating traffic",
          "Motorists yield only at marked crosswalks on the exit side",
          "Pedestrians must use a separate crossing away from the roundabout",
        ],
        correctIndex: 0,
        explanation:
          "You yield to pedestrians on the way in and on the way out. Roundabouts put crosswalks on both, set back from the circle itself.",
        context:
          "The vehicle rules around them are the ones people forget under pressure: slow on approach, yield at the line to traffic already circulating, go counterclockwise to your exit, signal right as you approach it, and never stop inside the circle. Cyclists may ride it as a vehicle, and you never overtake one that is doing so.",
        trap:
          "Concentrating on the gap in circulating traffic is what makes drivers roll over the entry crosswalk without ever looking at it.",
        excerptKey: "roundabout-pedestrians",
        sourceLabel: "PA Driver's Manual - Chapter 3, How to Use a Circular Intersection",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_27",
        topic: "impairment",
        question:
          "You take an over-the-counter antihistamine before driving. What does the manual say?",
        choices: [
          "Over-the-counter medicines are safe by definition",
          "Only prescription drugs can impair driving",
          "Antihistamines are safe as long as you take the lowest dose",
          "It can affect your driving, so check the label and ask a doctor or pharmacist",
        ],
        correctIndex: 3,
        explanation:
          "Sleeping pills, cough medicines, antihistamines and decongestants can all affect driving. The manual asks you to read the warning label before driving and to consult a doctor or pharmacist if you are unsure.",
        context:
          "Drugs other than alcohol are involved in roughly a fifth of motorist deaths each year, and combining them with alcohol makes both worse. The manual's shorthand is worth remembering: if the label says do not operate heavy machinery, your vehicle counts as heavy machinery.",
        trap:
          "Being available without a prescription reads as being safe to drive on. Availability and impairment are unrelated.",
        excerptKey: "otc-drugs-driving",
        sourceLabel: "PA Driver's Manual - Chapter 3, Drugs and Driving",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_28",
        topic: "safety",
        question: "How much more likely are you to be killed if you are thrown from a vehicle in a crash?",
        choices: ["About twice as likely", "About five times", "Almost 25 times", "About 50 percent more likely"],
        correctIndex: 2,
        explanation:
          "Almost 25 times. Seat belts work partly by slowing your body gently and partly by simply keeping you inside the vehicle.",
        context:
          "The forces involved are hard to picture: a crash can fling an unbelted occupant as much as 150 feet, and four out of five people killed after being thrown clear would have survived had they stayed inside. Hitting an interior surface at 30 mph is comparable to falling from a three-storey building, which is why arms and legs cannot brace against it.",
        trap:
          "Being thrown clear is an old piece of folklore that runs directly against the evidence.",
        excerptKey: "thrown-from-vehicle",
        sourceLabel: "PA Driver's Manual - Chapter 5, Seat Belt Law",
        sourceUrl: HB,
      },
      {
        id: "pa_s6_29",
        topic: "speed",
        question:
          "Which violations carry doubled fines in an active Pennsylvania work zone?",
        choices: [
          "Speeding, driving under the influence and failure to obey traffic devices",
          "Speeding only",
          "Parking violations only",
          "All moving violations statewide, whether or not the zone is active",
        ],
        correctIndex: 0,
        explanation:
          "Speeding, DUI and failure to obey traffic control devices all carry doubled fines in an active work zone, and homicide by vehicle there can add up to five years.",
        context:
          "An active work zone is where workers are on the roadway or the shoulder beside an open lane, and it is marked by an ACTIVE WORK ZONE WHEN FLASHING sign with a white flashing light. Speeding 11 mph or more over the limit there also brings an automatic 15-day suspension. Headlights, by contrast, are required in every posted zone whether or not it is active.",
        trap:
          "The doubling is often assumed to apply to any orange-signed stretch of road. It is tied to the zone being active.",
        excerptKey: "work-zone-doubled-fines-list",
        commonlyMissed: true,
        sourceLabel: "PennDOT - Work Zone Safety, Laws",
        sourceUrl: WORKZONE,
      },
      {
        id: "pa_s6_30",
        topic: "sharing",
        question:
          "A truck ahead of you has stopped in the road and is preparing to reverse into a loading bay. What should you do?",
        choices: [
          "Wait for the truck to finish the manoeuvre",
          "Pass behind it quickly while it is still stationary",
          "Pass in front of it on the opposite side of the road",
          "Sound your horn until the driver lets you through",
        ],
        correctIndex: 0,
        explanation:
          "Never cross behind a truck that is preparing to back up. The space behind it is a blind spot the driver cannot check, and reversing starts without warning.",
        context:
          "A driver backing into a loading area from the road often has no choice but to block it briefly. The few seconds it takes are shorter than the delay any collision would cause. Trucks and buses carry blind spots on all four sides, and the deepest of them is the one directly behind.",
        trap:
          "The truck being stationary reads as safety. It is stationary because it is about to move in the direction you want to cross.",
        excerptKey: "truck-backing",
        sourceLabel: "PA Driver's Manual - Chapter 3, Backing Crashes",
        sourceUrl: HB,
      },
    ],
  },
];
