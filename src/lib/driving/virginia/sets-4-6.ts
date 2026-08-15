import type { DrivingTestSet } from "../types";

// Continues the Virginia bank. Same sourcing discipline as sets 1-3: the
// Virginia Driver's Manual (DMV 39) first, dmv.virginia.gov pages where the
// manual is silent or stale, and the Code of Virginia (Title 46.2) for rules
// the manual states only as a table or does not state at all.
//
// Sets 5 and 6 lean on the statute more heavily than the earlier sets, because
// the provisions that actually catch Virginia drivers out - move-over as
// reckless driving, the truck speed limit on secondary roads, the fines
// attached to a handheld device, the current liability minimums - are ones the
// 2024 manual either understates or does not carry.
const HB = "https://www.dmv.virginia.gov/sites/default/files/forms/dmv39.pdf";
const KNOW = "https://www.dmv.virginia.gov/licenses-ids/exams/know-exam";
const ED = "https://www.dmv.virginia.gov/licenses-ids/learners/ed-reqs";
const PTS = "https://www.dmv.virginia.gov/licenses-ids/improvement/points/system";
const INS = "https://www.dmv.virginia.gov/vehicles/insurance-requirements";
const SPEED_FAQ = "https://www.dmv.virginia.gov/safety/programs/speeding/faqs";
const CODE_804 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-804/";
const CODE_818 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-818.2/";
const CODE_833 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-833/";
const CODE_8331 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-833.1/";
const CODE_861 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-861.1/";
const CODE_862 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-862/";
const CODE_870 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-870/";
const CODE_873 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-873/";
const CODE_878 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-878.2/";
const CODE_888 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-888/";
const CODE_894 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-894/";
const CODE_924 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-924/";
const CODE_1079 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-1079/";
const CODE_335 = "https://law.lis.virginia.gov/vacode/title46.2/section46.2-335/";

export const virginiaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Virginia Specifics",
    difficulty: "medium",
    description:
      "Thirty-five questions on the rules that are distinctly Virginia's: the move-over duties, the trash-truck clearance, the radar detector ban, and the numbers behind the demerit point system.",
    questions: [
      {
        id: "va_s4_01",
        topic: "signs",
        question: "You see pink and black signs beside the road. What do they mark?",
        choices: [
          "A school zone",
          "An incident area",
          "A permanent construction project",
          "A tourist or scenic route",
        ],
        correctIndex: 1,
        explanation:
          "Pink with black marks an incident area - a crash scene or similar disruption. Orange with black is the construction colour.",
        context:
          "Both colours warn and advise, and both appear alongside ordinary black-and-white regulatory signs imposing rules that exist only because of the incident or the work. Pink is the newer of the two and turns up around lane closures for crashes, spills and emergency operations. Treat it exactly as you would orange: slow down, expect a changed traffic pattern and stay alert.",
        trap:
          "Pink is easy to read as decorative or temporary signage. It carries the same weight as orange.",
        commonlyMissed: true,
        excerptKey: "sign-orange-pink",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "va_s4_02",
        topic: "rules",
        question: "What do double solid white lines separating two lanes mean?",
        choices: [
          "You may not cross them",
          "Cross them only when passing",
          "They separate opposing directions of travel",
          "They mark the right edge of the pavement",
        ],
        correctIndex: 0,
        explanation:
          "No crossing. They usually separate a special-use lane - most often an HOV lane - from the ordinary lanes of an expressway.",
        context:
          "You enter the special lane only where signs and markings allow it, which means finding the designated opening rather than crossing where it suits you. Both lanes travel the same direction, so the double white is not about opposing traffic. HOV lanes are separately marked by a diamond in the centre of the lane, or by a barrier.",
        trap:
          "Double white looks like double yellow and gets read as an opposing-traffic divider. Colour is the difference: yellow separates directions, white separates same-direction lanes.",
        excerptKey: "double-solid-white",
        sourceLabel: "Virginia Driver's Manual - Section 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "va_s4_03",
        topic: "safety",
        question: "Snow has fallen overnight. What does Virginia expect before you drive?",
        choices: [
          "Clear the windshield",
          "Clear the windshield and the front windows",
          "Nothing - the manual does not address it",
          "Clear the entire car, roof and hood included",
        ],
        correctIndex: 3,
        explanation:
          "The whole vehicle. Snow and ice left on the roof, hood or rear fly off at speed and become a hazard to whoever is behind you.",
        context:
          "The manual also asks you to clear every window, mirror, and the front and rear lights, so you can see out and other drivers can read your signals. Beyond clearing, equip the car with all-weather snow tyres or chains, brake gently on packed snow, and slow down before you stop or turn. Bridges and shaded stretches freeze before the rest of the road.",
        trap:
          "A porthole cleared in the windscreen counts as clearing nothing. Mirrors and lights are part of the requirement too.",
        excerptKey: "snow-remove",
        sourceLabel: "Virginia Driver's Manual - Section 3, Snow",
        sourceUrl: HB,
      },
      {
        id: "va_s4_04",
        topic: "signals",
        question:
          "A pedestrian hybrid beacon over a crosswalk switches from solid red to two red lights alternately flashing. What may you do?",
        choices: [
          "Remain stopped until the beacon goes dark",
          "Treat it as a green light and proceed at normal speed",
          "Proceed with caution once the crosswalk is clear",
          "Reverse back out of the crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "The alternating flash is the last phase, running while the pedestrian countdown finishes. If the crosswalk in front of you is clear, you may go, carefully.",
        context:
          "The beacon runs a fixed sequence at intersections that have no ordinary traffic signal. One yellow light at the bottom flashes when a pedestrian presses the button; the yellow then goes solid to warn you to prepare to stop; the two top red lights go solid while the walk signal shows and you must stop; and finally the two reds alternate while the countdown runs down.",
        trap:
          "Alternating red reads as a railroad-crossing flash, which requires a stop. Here it is the phase that releases you, provided the crossing is empty.",
        commonlyMissed: true,
        excerptKey: "phb-flashing-red",
        sourceLabel: "Virginia Driver's Manual - Section 2, Pedestrian Hybrid Beacons",
        sourceUrl: HB,
      },
      {
        id: "va_s4_05",
        topic: "rightOfWay",
        question: "A military convoy is moving along the road ahead of you. What is required?",
        choices: [
          "Convoys yield to civilian traffic",
          "You may join the convoy to travel more quickly",
          "Convoys have no special standing in Virginia",
          "Yield to it, and never cut through or join it",
        ],
        correctIndex: 3,
        explanation:
          "Yield, and leave it whole. Virginia words the military convoy rule the same way it words the funeral procession rule.",
        context:
          "Both belong to the list of yielding obligations that have nothing to do with signals or signs: first-arrival order at intersections, entrance ramps, roundabouts, private roads, crosswalks, funeral processions and military convoys. What they have in common is that the vehicles are moving as a unit and a driver inserting themselves into the gap breaks it up.",
        trap:
          "Convoys leave large gaps for spacing, which look like room to merge. They are the spacing, not an invitation.",
        excerptKey: "military-convoy",
        sourceLabel: "Virginia Driver's Manual - Section 3, Yielding the Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "va_s4_06",
        topic: "speed",
        question: "What is Virginia's position on radar detectors?",
        choices: [
          "Operating a vehicle equipped with one, using one, and selling one are all unlawful",
          "Legal in passenger cars, illegal in commercial vehicles",
          "Legal but subject to an annual fee",
          "Legal outside cities and towns",
        ],
        correctIndex: 0,
        explanation:
          "All three: it is unlawful to operate a vehicle equipped with a detector, unlawful to use one, and unlawful to sell one in Virginia.",
        context:
          "The mere presence of the device in or on the vehicle is prima facie evidence of the offence, and the Commonwealth does not have to show it was working or switched on. The section's own title notes the flip side - a radar detector conviction carries no demerit points. Virginia is one of only a couple of US jurisdictions with a ban this broad.",
        trap:
          "Drivers assume unplugging the detector or leaving it in the glovebox solves it. Equipped is the standard, not in use.",
        commonlyMissed: true,
        excerptKey: "code-radar-sale",
        sourceLabel: "Code of Virginia § 46.2-1079",
        sourceUrl: CODE_1079,
      },
      {
        id: "va_s4_07",
        topic: "sharing",
        question:
          "You are passing a stationary trash collection vehicle on a two-lane road and cannot change lanes. What does Virginia require?",
        choices: [
          "Hold the posted limit and pass normally",
          "Slow to 10 mph below the posted limit and pass at least two feet to the left of it",
          "Stop until the vehicle moves",
          "Sound your horn and pass",
        ],
        correctIndex: 1,
        explanation:
          "Ten below the limit and at least two feet of clearance. On a highway with four or more lanes the primary instruction is to change to a lane not next to it, if you can do so safely.",
        context:
          "The rule sits inside a wider set of duties around stationary vehicles: emergency vehicles and tow trucks with flashing lights, vehicles running hazard flashers or displaying caution signs or lit flares, and mail vehicles. The common instruction is to move over where you can, and to reduce speed and proceed with caution where you cannot.",
        trap:
          "The two feet and 10 mph figures are unique to trash collection. Applying them to a police car on the shoulder gets the emergency-vehicle rule wrong.",
        commonlyMissed: true,
        excerptKey: "move-over-trash",
        sourceLabel: "Virginia Driver's Manual - Section 3, Yielding to Vehicles with Flashing Lights",
        sourceUrl: HB,
      },
      {
        id: "va_s4_08",
        topic: "licensing",
        question: "What is the maximum number of safe driving points a Virginia driver can hold?",
        choices: ["Ten", "Three", "There is no cap", "Five"],
        correctIndex: 3,
        explanation:
          "Five. You earn one for each full calendar year with a valid Virginia licence and no violations or suspensions, and they are awarded in early April for the previous year.",
        context:
          "You can also earn five at once by voluntarily completing a driver improvement clinic - but only voluntarily. If DMV or a court required the clinic, no safe driving points are awarded, and a court-ordered attendance needs documentation given to the clinic before DMV can award anything at all.",
        trap:
          "Doing a clinic after a conviction feels like it should earn the five points. Required attendance earns none.",
        excerptKey: "safe-points-max-five",
        sourceLabel: "Virginia DMV - The Points System",
        sourceUrl: PTS,
      },
      {
        id: "va_s4_09",
        topic: "parking",
        question: "Fire apparatus is stopped answering an alarm. How far away must you park?",
        choices: ["50 feet", "100 feet", "20 feet", "500 feet"],
        correctIndex: 3,
        explanation:
          "Five hundred feet - by a wide margin the largest parking setback in the Virginia list.",
        context:
          "The distance exists because a fire scene needs room for more apparatus, hose lays and aerial ladders, none of which is obvious from a parked car half a block away. The number is worth pairing with the other 500-foot rule: never follow an emergency vehicle closer than 500 feet while its lights are flashing.",
        trap:
          "Five hundred feet is roughly a block and a half, which feels excessive next to the 15 and 20 foot rules and so gets guessed low.",
        excerptKey: "park-500-fire",
        sourceLabel: "Virginia Driver's Manual - Section 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "va_s4_10",
        topic: "impairment",
        question: "What does Virginia's implied consent law mean for you?",
        choices: [
          "You may refuse a breath test with no consequence",
          "By driving on Virginia's public roads you have already agreed to take a breath test on request",
          "Only a blood test can be required of you",
          "Consent must be given in writing at the roadside",
        ],
        correctIndex: 1,
        explanation:
          "Driving here is the consent. Where police have probable cause, the test can be requested and refusing it carries its own consequences.",
        context:
          "Refusing a breath test triggers the same automatic administrative suspension as blowing .08 or higher: seven days for a first offence, 60 days or until trial for a second, and until trial for a third. A refusal is separately something the court may suspend or revoke your licence for on conviction. After a crash with probable cause you can be arrested for DUI within three hours, without a warrant, anywhere.",
        trap:
          "Refusal is often treated as the safe option. It produces the suspension anyway and adds a charge.",
        excerptKey: "implied-consent",
        sourceLabel: "Virginia Driver's Manual - Section 5, Alcohol and the Law",
        sourceUrl: HB,
      },
      {
        id: "va_s4_11",
        topic: "emergencies",
        question: "Someone is injured inside a wrecked car at a crash you have stopped at. What does the manual advise?",
        choices: [
          "Always move them clear of the vehicle",
          "Move them onto the shoulder away from traffic",
          "Leave them where they are unless you have medical training or there is immediate danger such as fire",
          "Move them only if they ask you to",
        ],
        correctIndex: 2,
        explanation:
          "Leave them. Moving someone with a spinal or internal injury can do far more harm than the wait for trained help.",
        context:
          "The manual is otherwise clear that you should give whatever help you can, so this is a narrow carve-out rather than a reason to stand back. The immediate-danger exception - fire being the example given - is the case where the risk of staying outweighs the risk of moving. Get out of your own vehicle carefully and keep it between you and moving traffic where possible.",
        trap:
          "The instinct to pull someone clear is strong and usually wrong. Trained help arriving in five minutes beats an untrained extraction now.",
        excerptKey: "crash-do-not-move-injured",
        sourceLabel: "Virginia Driver's Manual - Section 3, Traffic Crashes",
        sourceUrl: HB,
      },
      {
        id: "va_s4_12",
        topic: "signs",
        question: "A sign shows a low clearance height for the overpass ahead. What does it require?",
        choices: [
          "Reduce speed as you pass beneath",
          "The road narrows under the bridge",
          "Do not proceed if your vehicle is taller than the height shown",
          "No trucks are permitted on this road",
        ],
        correctIndex: 2,
        explanation:
          "It is a go or no-go number. If your vehicle - including anything on the roof or on a trailer - is taller than the figure, you do not proceed.",
        context:
          "The sign belongs to the warning family, so it is yellow with black. It matters most to drivers of rented box vans and to anyone towing, because those are the vehicles whose height the driver has never had to think about. Low ground railroad crossing signs address the mirror-image problem: a steep slope where a low vehicle can ground out on the tracks.",
        trap:
          "Roof loads and raised trailer decks get forgotten. The number applies to the tallest point of the whole combination.",
        excerptKey: "low-clearance",
        sourceLabel: "Virginia Driver's Manual - Section 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s4_13",
        topic: "rules",
        question:
          "You began a pass legally, but you are still in the left lane as the No Passing zone starts. Where do you stand?",
        choices: [
          "Legal, because you started before the zone",
          "Legal, because the road ahead is clear",
          "Legal for the first 100 feet inside the zone",
          "Illegal - the pass has to be completed before the zone begins",
        ],
        correctIndex: 3,
        explanation:
          "The manual puts it plainly: if you are still in the left lane when you reach the zone, you are breaking the law.",
        context:
          "The obligation is therefore about judging the whole manoeuvre before you commit, not about reacting when the markings change. The manual's other passing instructions run the same way - check ahead, behind and in your blind spot, signal, accelerate, and return right as soon as you can see the front of the passed vehicle in your rearview mirror. And you may not exceed the limit to get it done.",
        trap:
          "Having started legally feels like it should protect you. The offence is defined by where you are when the zone begins.",
        commonlyMissed: true,
        excerptKey: "pass-complete-before-zone",
        sourceLabel: "Virginia Driver's Manual - Section 3, Passing",
        sourceUrl: HB,
      },
      {
        id: "va_s4_14",
        topic: "safety",
        question: "How long should a child ride rear-facing in Virginia?",
        choices: [
          "Until six months",
          "Until twelve months",
          "Until the child can sit up unaided",
          "From birth to age 2, or as long as the seat's manufacturer allows",
        ],
        correctIndex: 3,
        explanation:
          "Age two is the floor, and the manufacturer's limit may take it further. The statute forbids turning the seat forward-facing before two years, or before the manufacturer's minimum forward-facing weight.",
        context:
          "Child restraint devices go in the back seat. The only exception is a vehicle with no back seat at all, and then only if there is no passenger air bag or it has been switched off. All children under age 8 must be in a child seat or booster, and DMV advises keeping children under 13 in the back.",
        trap:
          "Reaching the seat's weight limit is not the whole test - the age two threshold has to be met as well.",
        excerptKey: "child-rear-facing-2",
        sourceLabel: "Virginia Driver's Manual - Section 4, Child Safety Seats",
        sourceUrl: HB,
      },
      {
        id: "va_s4_15",
        topic: "signals",
        question: "The light ahead turns steady yellow and you have not yet reached the intersection. What should you do?",
        choices: [
          "Stop, unless stopping would be unsafe",
          "Accelerate to clear the intersection before red",
          "Treat it exactly as you would a flashing yellow",
          "Stop regardless of where you are, even inside the intersection",
        ],
        correctIndex: 0,
        explanation:
          "Stop if you have not entered the intersection. Only when stopping would be unsafe do you go through, and cautiously.",
        context:
          "If you are already inside the intersection when it turns yellow, keep going and clear it - stopping there is worse than proceeding. The Code says the same thing from the other end: traffic that has not entered the intersection, crosswalks included, shall stop if it is not reasonably safe to continue. The manual adds the obvious instruction not to speed up to beat the light.",
        trap:
          "Yellow gets read as a licence to accelerate. It is a warning that the phase is ending, not extra green time.",
        excerptKey: "yellow-light",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s4_16",
        topic: "speed",
        question: "You are doing 88 mph on a stretch of interstate posted at 70 mph. How is that charged?",
        choices: [
          "Reckless driving, because any speed over 85 mph is reckless whatever the limit",
          "A speeding infraction, because you are less than 20 mph over",
          "Reckless driving only on non-interstate roads",
          "A speeding infraction with an added surcharge",
        ],
        correctIndex: 0,
        explanation:
          "The over-85 trigger is independent of the posted limit. At 88 in a 70 zone you are only 18 over, and still reckless driving.",
        context:
          "The statute gives two separate triggers: 20 mph or more above the applicable limit, or any speed above 85 mph regardless of that limit. Reckless driving is a misdemeanour criminal offence carrying six demerit points, and a court may order a licence suspension of 60 days to six months, or from 1 July 2026, enrolment in the Intelligent Speed Assistance Program instead.",
        trap:
          "Higher posted limits feel like they should raise the criminal threshold with them. They do not - 86 mph is reckless in a 70 zone.",
        excerptKey: "code-reckless-speed",
        sourceLabel: "Code of Virginia § 46.2-862",
        sourceUrl: CODE_862,
      },
      {
        id: "va_s4_17",
        topic: "rightOfWay",
        question:
          "You are second in line at a stop sign. The car ahead of you stops, then pulls away. What do you do?",
        choices: [
          "Follow it through without stopping, since it has already stopped for both of you",
          "Stop at the sign yourself, then go when the way is clear",
          "Roll through slowly if the intersection is clear",
          "Stop only if a vehicle is approaching on the cross street",
        ],
        correctIndex: 1,
        explanation:
          "Each vehicle stops at the sign in its own right. The manual states it directly for exactly this situation.",
        context:
          "The stop happens at the sign, the stop line, the crosswalk or the curb, whichever you reach first. Once stopped, the ordering rules take over: first to arrive goes first, and if two arrive together the driver on the left yields to the driver on the right. At an intersection marked All Way or 4 Way, every approach stops.",
        trap:
          "Following the car ahead through is one of the most-ticketed stop sign offences, precisely because it feels like the queue has already been handled.",
        commonlyMissed: true,
        excerptKey: "stop-behind-lead-car",
        sourceLabel: "Virginia Driver's Manual - Section 3, Stopping",
        sourceUrl: HB,
      },
      {
        id: "va_s4_18",
        topic: "sharing",
        question: "Where within a lane should you expect a motorcyclist to ride?",
        choices: [
          "Anywhere in it - expect them to change position within the lane",
          "In the centre of the lane at all times",
          "In the right third of the lane",
          "In the left third of the lane",
        ],
        correctIndex: 0,
        explanation:
          "The rider uses the whole lane and moves within it as conditions change. What looks erratic from a car is normally deliberate.",
        context:
          "A patch of gravel, a seam in the pavement, an open expansion joint or a gust of crosswind are all major obstacles on two wheels and invisible from a car. Virginia specifically flags open joints and expansion joints on bridges and ramps as motorcycle hazards. More than half of fatal motorcycle crashes involve a car, and the usual cause is the driver not seeing the bike.",
        trap:
          "Reading a lane-position change as an invitation to move alongside is how cars end up in the space the rider was keeping open.",
        excerptKey: "motorcycle-lane-use",
        sourceLabel: "Virginia Driver's Manual - Section 3, Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "va_s4_19",
        topic: "licensing",
        question:
          "A driver picks up a third demerit-point conviction for offences committed while under 18. What happens?",
        choices: [
          "A warning letter from DMV",
          "A 30-day suspension",
          "Revocation for one year or until they turn 18, whichever is longer",
          "A driver improvement clinic and nothing further",
        ],
        correctIndex: 2,
        explanation:
          "Revocation, for a year or until the eighteenth birthday - whichever period is longer.",
        context:
          "The escalation runs clinic, suspension, revocation. A first conviction requires a driver improvement clinic, and failing to complete it within 90 days suspends the licence until you do. A second brings a 90-day suspension, with a possible petition to the juvenile court for restricted privileges to get to work or college. Safety belt and child restraint convictions count for this purpose even though they carry no demerit points.",
        trap:
          "The whichever-is-longer clause bites hardest on the youngest drivers. At sixteen, the revocation runs for two years, not one.",
        commonlyMissed: true,
        excerptKey: "under-18-second-third",
        sourceLabel: "Virginia Driver's Manual - Section 5, Driver Improvement Program",
        sourceUrl: HB,
      },
      {
        id: "va_s4_20",
        topic: "rules",
        question:
          "You are on a two-lane road with no centre markings at all, behind a slow vehicle. May you pass?",
        choices: [
          "Yes, on the left, if no sign forbids passing and the way is clear",
          "No - passing is never lawful where there are no markings",
          "Yes, on either side",
          "Only if the vehicle ahead is farm equipment",
        ],
        correctIndex: 0,
        explanation:
          "Unmarked does not mean prohibited. On an unmarked two-lane road you may pass on the left if no sign forbids it and you have made sure the way is clear.",
        context:
          "The manual notes that many two-lane roads in Virginia carry no lane markings, so this is an ordinary rural situation rather than an edge case. The general prohibitions still apply: no passing on hills, curves, at intersections or at railroad crossings unless there are two or more lanes in your direction, and none off the pavement or on the shoulder.",
        trap:
          "Absence of a line reads as absence of permission. The signs and the sightlines are what govern.",
        excerptKey: "unmarked-two-lane",
        sourceLabel: "Virginia Driver's Manual - Section 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "va_s4_21",
        topic: "emergencies",
        question: "A fire engine passes you with its lights flashing. How close may you follow it?",
        choices: ["No closer than 200 feet", "No closer than 500 feet", "No closer than 100 feet", "There is no set distance"],
        correctIndex: 1,
        explanation:
          "Five hundred feet while the lights are flashing. Following closer puts you inside the space the crew needs and inside the traffic the vehicle is disrupting.",
        context:
          "It is the same figure as the parking rule around fire apparatus stopped at an alarm. Once an emergency vehicle has passed you, resist the pull of the cleared lane - other traffic is still recovering from having pulled over, and a second emergency vehicle often follows the first.",
        trap:
          "The gap an emergency vehicle opens looks like free road. Using it is the classic way drivers end up in a secondary collision.",
        excerptKey: "follow-emergency-500",
        sourceLabel: "Virginia Driver's Manual - Section 3, Yielding to Vehicles with Flashing Lights",
        sourceUrl: HB,
      },
      {
        id: "va_s4_22",
        topic: "signs",
        question: "You come to a downward-pointing triangular sign. What does it require?",
        choices: [
          "Slow down, be ready to stop, and let others pass safely first",
          "Come to a complete stop every time",
          "Merge without slowing",
          "You have priority over the crossing road",
        ],
        correctIndex: 0,
        explanation:
          "Yield. Slow as you approach, be prepared to stop, and let any vehicles, pedestrians or bicyclists pass before you proceed.",
        context:
          "A yield sign often comes with a yield line on the pavement - a row of triangles marking where you must give way, or stop if necessary. That combination is common at the entrance to a roundabout. The distinction from the octagon is that a stop sign requires a stop every time, whereas a yield requires a stop only when giving way needs one.",
        trap:
          "Treating a yield as advisory is the error at speed; treating it as a stop sign is the error that gets you rear-ended. It is neither.",
        excerptKey: "shape-triangle",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Shapes",
        sourceUrl: HB,
      },
      {
        id: "va_s4_23",
        topic: "impairment",
        question:
          "You are charged with DUI on a first offence. How long is the automatic administrative suspension?",
        choices: ["30 days", "Seven days", "60 days", "Until your trial date"],
        correctIndex: 1,
        explanation:
          "Seven days, imposed automatically at the charge rather than at conviction. A second offence is 60 days or until trial, whichever comes first, and a third runs until trial.",
        context:
          "The administrative suspension triggers on either a refusal of a breath test or a BAC of .08 or higher. It is separate from and additional to whatever the court and DMV impose on conviction, and where there are multiple DUI convictions the suspension and revocation periods run consecutively rather than at the same time.",
        trap:
          "It is easy to assume nothing happens to your licence until a court decides. The administrative suspension starts before that.",
        excerptKey: "als-seven-days",
        sourceLabel: "Virginia Driver's Manual - Section 5, Administrative License Suspension",
        sourceUrl: HB,
      },
      {
        id: "va_s4_24",
        topic: "safety",
        question: "In what order should you look before entering an intersection?",
        choices: [
          "Left, then right, then one more quick look left",
          "Right first, because that traffic has priority",
          "Straight ahead only, and rely on peripheral vision",
          "In the rearview mirror first",
        ],
        correctIndex: 0,
        explanation:
          "Left first, because traffic coming from the left reaches you sooner - it is in the nearer lane. Then right, then left again to catch anything new.",
        context:
          "The same left-right-left habit belongs at any place where people or animals can cross your path: crosswalks, shopping centres, construction areas and playgrounds. Searching more generally means keeping your eyes moving rather than staring at the middle of the road, and looking for clues - exhaust smoke, brake lights, turned wheels - that a vehicle is about to move.",
        trap:
          "The second left look gets dropped once drivers are confident. It is the one that catches the car that arrived while you were checking right.",
        excerptKey: "look-left-first",
        sourceLabel: "Virginia Driver's Manual - Section 3, Searching",
        sourceUrl: HB,
      },
      {
        id: "va_s4_25",
        topic: "signals",
        question: "Under what circumstances does Virginia permit a left turn on a red light?",
        choices: [
          "Never in Virginia",
          "From a one-way street onto another one-way street, after a complete stop",
          "From any street onto a one-way street",
          "Only where a sign specifically permits it",
        ],
        correctIndex: 1,
        explanation:
          "One-way to one-way, after stopping completely and yielding to pedestrians and traffic. Both streets have to be one-way.",
        context:
          "As with right on red, the permission disappears if a No Turn on Red sign is posted or a red arrow points in the direction you want to go. Look both ways before committing and check specifically for motorcycles, bicycles and mopeds, which are the vehicles most easily missed in that scan.",
        trap:
          "Turning left on red from a two-way street onto a one-way is the version people attempt. The origin street has to be one-way as well.",
        commonlyMissed: true,
        excerptKey: "left-turn-on-red",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s4_26",
        topic: "speed",
        question: "How much over the limit will Virginia police tolerate before stopping you?",
        choices: [
          "Officers generally wait until 10 mph over",
          "Five mph over is treated as within tolerance",
          "There is no buffer zone in Virginia",
          "The tolerance is 15 percent of the posted limit",
        ],
        correctIndex: 2,
        explanation:
          "DMV states it flatly: there is no so-called buffer zone in Virginia when it comes to speeding violations.",
        context:
          "That answer sits alongside a set of thresholds that are genuinely fixed. Twenty over or above 85 mph is reckless driving. Eighty-one to 85 in a 65 zone adds $100. A signed residence district limit carries a $200 fine that cannot be suspended unless the court orders 20 hours of community service. None of those leaves room for an informal allowance below them.",
        trap:
          "The folk wisdom about a nine-mph cushion is imported from elsewhere and DMV contradicts it directly.",
        excerptKey: "no-buffer-zone",
        sourceLabel: "Virginia DMV - Speeding and Aggressive Driving FAQs",
        sourceUrl: SPEED_FAQ,
      },
      {
        id: "va_s4_27",
        topic: "parking",
        question: "On a one-way road in Virginia, which side may you park on?",
        choices: ["The right side only", "The left side only", "Neither side without a permit", "Either side"],
        correctIndex: 3,
        explanation:
          "Either side, because all the traffic is going the same way. On a two-way street you park on the right.",
        context:
          "Whichever side you use, get as far from moving traffic as you can and no more than one foot from the curb. If there is no curb, do not park on the hard surface of the road at all. Before opening the door, look for cars, bicyclists and pedestrians - a door opened into a bike lane is both a hazard and a violation.",
        trap:
          "The right-side habit from two-way streets carries over and drivers assume left-side parking must be illegal. On a one-way it is not.",
        excerptKey: "park-one-way",
        sourceLabel: "Virginia Driver's Manual - Section 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "va_s4_28",
        topic: "rules",
        question: "What does the Code of Virginia say about the centre lane of a three-lane road?",
        choices: [
          "It is an ordinary travel lane",
          "It is reserved for trucks and buses",
          "Do not drive in it except to overtake, to prepare a left turn, or where it is allocated to your direction",
          "Only emergency vehicles may use it",
        ],
        correctIndex: 2,
        explanation:
          "Three permitted uses and no others: overtaking, preparing a left turn, or travelling where signs or markings allocate the lane to your direction of travel.",
        context:
          "That statutory rule underlies the two pavement markings you meet on the ground. A single broken yellow on each side makes it a passing lane for both directions; a solid yellow paired with a broken yellow on each side makes it a shared left-turn lane, with a 150-foot limit on how far you may travel in it.",
        trap:
          "Using the centre lane as a general overtaking lane for a long stretch is the misuse. The permission is for the overtake, not for cruising.",
        excerptKey: "code-three-lane-center",
        sourceLabel: "Code of Virginia § 46.2-804",
        sourceUrl: CODE_804,
      },
      {
        id: "va_s4_29",
        topic: "sharing",
        question: "You are approaching light rail tracks in traffic that is backing up. What should you do?",
        choices: [
          "Cross whenever the gate is up",
          "Stop on the tracks if traffic ahead has stopped, then move when it clears",
          "Do not cross unless you have room to clear the tracks without stopping",
          "Trains run to a schedule, so timing is predictable",
        ],
        correctIndex: 2,
        explanation:
          "Never enter unless you can get all the way across. Stopping on the tracks because traffic ahead stopped is how cars get struck.",
        context:
          "Virginia's light rail system, The Tide in Norfolk, crosses motor traffic at 27 points along a 7.4 mile route, so the trains share the street rather than running on a separate corridor. The rules are the same as for heavy rail: never drive around a lowered gate, never stop, pass or change gear on the tracks, and expect a train on any track at any time.",
        trap:
          "A raised gate is not a clearance to enter if the far side is blocked. The question is whether you can get off the tracks, not onto them.",
        excerptKey: "light-rail-tracks",
        sourceLabel: "Virginia Driver's Manual - Section 3, Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "va_s4_30",
        topic: "rightOfWay",
        question:
          "An ambulance is coming toward you in the opposite lane on an undivided highway. What must you do?",
        choices: [
          "Carry on - only traffic in the same direction has to yield",
          "Slow to 20 mph and continue",
          "Move into the left lane to give it room",
          "Pull over to the edge of the road and stop until it passes",
        ],
        correctIndex: 3,
        explanation:
          "On an undivided highway you pull over and stop for emergency vehicles coming the other way, not just those coming up behind you.",
        context:
          "This is one of the duties that changes with the road. On a divided highway with a median there is no equivalent obligation, because the emergency vehicle has its own carriageway. Behind you, the rule is unconditional: yield right of way immediately, pull to the right edge and stop until it has passed.",
        trap:
          "Drivers assume oncoming traffic is somebody else's problem. On an undivided road the emergency vehicle may well need your side of it.",
        commonlyMissed: true,
        excerptKey: "emergency-opposite",
        sourceLabel: "Virginia Driver's Manual - Section 3, Yielding to Vehicles with Flashing Lights",
        sourceUrl: HB,
      },
      {
        id: "va_s4_31",
        topic: "licensing",
        question: "You have failed the Virginia knowledge exam three times. What has to happen before a fourth attempt?",
        choices: [
          "Wait 30 days and try again",
          "Pay a re-test fee",
          "Complete and pass the classroom component of driver education",
          "Take the exam orally instead",
        ],
        correctIndex: 2,
        explanation:
          "The classroom part of driver education, completed after the date of the third failure, and the certificate handed to DMV before you can test again.",
        context:
          "There is an alternative route DMV describes for satisfying the same requirement: an 8-hour course based on the Virginia Driver's Manual, available at a driver training school and online. Applicants under 18 can only take that course if they have already completed the classroom component of driver education. The exam itself may be taken only once per business day, and under-18 applicants must wait a full 15 days after a failure.",
        trap:
          "Completing a course you already took before the third failure does not count. The completion date has to fall after it.",
        excerptKey: "three-failures",
        sourceLabel: "Virginia Driver's Manual - Section 1, Testing",
        sourceUrl: HB,
      },
      {
        id: "va_s4_32",
        topic: "safety",
        question: "Your car has antilock brakes and you need to stop hard. What should you not do?",
        choices: [
          "Apply steady pressure to the pedal",
          "Steer while braking",
          "Brake and steer at the same time on a wet surface",
          "Pump the brakes",
        ],
        correctIndex: 3,
        explanation:
          "Never pump antilock brakes. Pumping defeats the system, which is already cycling the brakes far faster than a foot can.",
        context:
          "The manual asks you to read the owner's manual and practise braking before you need it, because the pedal pulse and the noise an ABS stop makes will otherwise startle you into lifting off. On slippery surfaces generally, the instruction is to release the accelerator and brake gently - you have the most traction and control while the front tyres are still rolling.",
        trap:
          "Pumping is the correct technique for older non-ABS systems, so drivers taught decades ago carry the habit into cars where it is wrong.",
        excerptKey: "antilock-brakes",
        sourceLabel: "Virginia Driver's Manual - Section 3, Antilock Brakes",
        sourceUrl: HB,
      },
      {
        id: "va_s4_33",
        topic: "signs",
        question: "A merge sign warns that two same-direction lanes are about to become one. Who is responsible?",
        choices: [
          "The vehicle already in the through lane has priority throughout",
          "The merging driver alone must adjust",
          "Drivers in both lanes share responsibility for merging safely",
          "Whichever driver is ahead at the taper",
        ],
        correctIndex: 2,
        explanation:
          "Virginia puts the duty on both lanes. Neither driver gets to hold their line and make the other solve it.",
        context:
          "Compare it with the lane reduction sign, where the responsibility is asymmetric: the right lane ends, drivers in it must merge left when space opens up, and drivers in the left lane should allow them in smoothly. Reading which of the two signs you have determines who is doing the accommodating.",
        trap:
          "Drivers treat every merge as a lane reduction and assume the through lane wins. The plain merge sign says otherwise.",
        excerptKey: "merge-sign",
        sourceLabel: "Virginia Driver's Manual - Section 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s4_34",
        topic: "emergencies",
        question: "When may you lawfully stop your vehicle in a way that impedes traffic on a Virginia highway?",
        choices: [
          "Only for an emergency, a crash or a mechanical breakdown",
          "Whenever you need to check directions",
          "Any time, provided you are on the shoulder",
          "To take a phone call",
        ],
        correctIndex: 0,
        explanation:
          "Those three cases and no others. Stopping in a way that impedes or endangers others' use of the highway is otherwise prohibited outright.",
        context:
          "Where one of the three does apply, further obligations kick in: switch on the hazard flashers, and if the vehicle is movable, nobody is hurt and you can do it safely, move it off the roadway rather than leaving it in a lane. Get it to the shoulder as soon as possible and off the shoulder without unnecessary delay.",
        trap:
          "Handling a phone call is exactly the situation the law contemplates - which is why it requires you to be lawfully parked or stopped, not merely halted at the roadside.",
        excerptKey: "code-stop-impede",
        sourceLabel: "Code of Virginia § 46.2-888",
        sourceUrl: CODE_888,
      },
      {
        id: "va_s4_35",
        topic: "impairment",
        question:
          "You are caught driving while your licence is suspended for an alcohol-related offence. What happens to the vehicle?",
        choices: [
          "It is impounded for ten days",
          "It is impounded immediately for 30 days",
          "Nothing happens to it unless you are convicted",
          "It is impounded for seven days",
        ],
        correctIndex: 1,
        explanation:
          "Immediate impoundment for 30 days, before any conviction. On conviction the court can add a further 90 days.",
        context:
          "A separate impoundment rule covers driving with no licence at all after a previous conviction for the same thing: the vehicle stays impounded until you obtain a licence or for three days, whichever is less. Both sit on top of the licence consequences rather than replacing them.",
        trap:
          "The 30 days is triggered by being caught, not by being convicted. Waiting for a court date does not get the car back.",
        excerptKey: "impound-30-days",
        sourceLabel: "Virginia Driver's Manual - Section 5, Vehicle Impoundment",
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
      "Thirty-five questions built around Virginia's genuinely unusual provisions and the thresholds that stack: move-over as reckless driving, the separate truck speed limit, the wheel-turning rules on hills, and the fines the manual understates.",
    questions: [
      {
        id: "va_s5_01",
        topic: "licensing",
        question:
          "Besides a licensed driver aged 21 or over, who else may supervise a Virginia learner's permit holder?",
        choices: [
          "Any licensed driver aged 18 or over",
          "A parent or legal guardian, or a sibling or step-sibling aged 18 or over",
          "A parent, and nobody else",
          "Any licensed friend aged 19 or over",
        ],
        correctIndex: 1,
        explanation:
          "The under-21 exception is defined by relationship. A parent or legal guardian, or a brother, sister, half-sibling or step-sibling aged 18 or over, may supervise.",
        context:
          "Whoever supervises must be alert, able to assist, actually occupying the seat beside the driver, and lawfully permitted to drive at that moment. The last condition rules out an older sibling whose own licence is suspended. Everyone else has to be at least 21 and licensed.",
        trap:
          "An 18-year-old with a spotless record still cannot supervise unless they are family. Age alone never satisfies the exception.",
        commonlyMissed: true,
        excerptKey: "code-permit-accompanied",
        sourceLabel: "Code of Virginia § 46.2-335",
        sourceUrl: CODE_335,
      },
      {
        id: "va_s5_02",
        topic: "speed",
        question:
          "On a secondary Virginia highway where a car may lawfully do 55 mph, what is the limit for a truck or a vehicle towing a trailer?",
        choices: ["45 mph", "55 mph, the same as a car", "35 mph", "There is no separate limit"],
        correctIndex: 0,
        explanation:
          "Forty-five. On highways other than interstates, four-lane roads and state primaries, trucks and vehicles towing another vehicle or a house trailer are held ten below the car limit.",
        context:
          "The manual's speed section gives one set of defaults for passenger vehicles and motorcycles and never mentions the truck figure at all, so this is a case where the Code carries the rule alone. The statute names trucks, tractor trucks, combinations designed to transport property, and vehicles towing something self-propelled or a house trailer.",
        trap:
          "It catches ordinary drivers, not just professionals. Towing a car or a travel trailer puts you under the 45 mph figure on those roads.",
        commonlyMissed: true,
        excerptKey: "code-45-trucks",
        sourceLabel: "Code of Virginia § 46.2-870",
        sourceUrl: CODE_870,
      },
      {
        id: "va_s5_03",
        topic: "rules",
        question:
          "You are approaching a crosswalk and the vehicle in the lane beside you has stopped. May you pass it?",
        choices: [
          "Yes, if you slow down",
          "Yes, in the left lane only",
          "No - a stopped vehicle at a crosswalk may be hiding a pedestrian",
          "Yes, if you sound your horn first",
        ],
        correctIndex: 2,
        explanation:
          "Virginia lists this among the situations where passing is unlawful and unsafe, and the statute separately forbids overtaking a vehicle stopped for a pedestrian.",
        context:
          "This is the multiple-threat collision the crosswalk rules are built around: the stopped car is the warning, and the driver who goes round it arrives at speed exactly where the pedestrian steps out. The manual's blunter version is that passing at a crosswalk is illegal, because you may not see pedestrians crossing in front of other vehicles.",
        trap:
          "The stopped car reads as an obstacle rather than a signal, so the natural move is to go round it. That move is the collision.",
        commonlyMissed: true,
        excerptKey: "pass-crosswalk-stopped",
        sourceLabel: "Virginia Driver's Manual - Section 3, Passing",
        sourceUrl: HB,
      },
      {
        id: "va_s5_04",
        topic: "emergencies",
        question: "How does Virginia grade leaving the scene of a crash?",
        choices: [
          "As a traffic infraction",
          "As a Class 5 felony if anyone is injured or killed, or damage exceeds $1,000",
          "As a civil matter between the insurers",
          "As a Class 3 misdemeanour in every case",
        ],
        correctIndex: 1,
        explanation:
          "A Class 5 felony where there is injury or death, or where property damage tops $1,000. At $1,000 or less of property damage it is a Class 1 misdemeanour.",
        context:
          "The duty the offence attaches to is specific: stop as close to the scene as you can without obstructing traffic, and report your name, address, driver's licence number and vehicle registration number to police and to the person struck or the other driver. You must also render reasonable assistance, including taking an injured person for treatment if that is plainly necessary or they ask.",
        trap:
          "The felony line for property damage is $1,000, not the $3,000 figure the manual gives for when an officer must report a crash to DMV.",
        excerptKey: "code-hit-and-run",
        sourceLabel: "Code of Virginia § 46.2-894",
        sourceUrl: CODE_894,
      },
      {
        id: "va_s5_05",
        topic: "signals",
        question: "A flashing red arrow points left at the signal ahead. What does the Code allow?",
        choices: [
          "No turn at all in that direction",
          "Proceed without stopping if the way is clear",
          "It indicates a signal failure; treat the intersection as an all-way stop",
          "Stop first, then turn cautiously in the arrow's direction when clear",
        ],
        correctIndex: 3,
        explanation:
          "Stop, then go. The statute says traffic shall stop before entering the intersection, and after stopping may cautiously enter to turn in the direction of the signal.",
        context:
          "The four arrow indications are worth holding as a set. Steady red arrow: no turn, unless a sign permits it after a stop. Flashing red arrow: stop, then turn when clear. Flashing yellow arrow: turn when clear, no stop required, but yield. Steady green arrow: protected. Only the last one gives you priority.",
        trap:
          "The steady red arrow and the flashing red arrow look nearly identical at a glance and mean opposite things about whether the turn is available at all.",
        commonlyMissed: true,
        excerptKey: "code-flashing-red-arrow",
        sourceLabel: "Code of Virginia § 46.2-833",
        sourceUrl: CODE_833,
      },
      {
        id: "va_s5_06",
        topic: "sharing",
        question: "A green-painted bicycle box is marked at the intersection ahead. What are your obligations?",
        choices: [
          "Stop inside the box on red so cyclists can pass behind you",
          "Stop behind the box on red, and no right turn on red is allowed there",
          "Right on red is permitted if you signal and yield",
          "Bike boxes are advisory markings with no legal effect",
        ],
        correctIndex: 1,
        explanation:
          "You stop behind the whole box, not inside it, and right turns on red are not allowed at these intersections at all.",
        context:
          "The box exists so cyclists can move in front of stopped traffic and be visible when the light changes. If you are turning right on a green light there, you must signal and yield to cyclists on your right. The bike lanes leading into and out of the box may also be painted green, and motor vehicles may not use them.",
        trap:
          "Right on red is the default across Virginia, so drivers apply it here out of habit. The bike box removes it.",
        excerptKey: "bike-box",
        sourceLabel: "Virginia Driver's Manual - Section 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "va_s5_07",
        topic: "safety",
        question:
          "You fail to move over for a stationary police car with its lights flashing on a four-lane highway, and you could safely have changed lanes. How is that charged in Virginia?",
        choices: [
          "As a parking-type infraction",
          "As reckless driving",
          "As a warning with no penalty",
          "As a civil penalty carrying no demerit points",
        ],
        correctIndex: 1,
        explanation:
          "Reckless driving. The statute says so in terms: a violation of the emergency-vehicle move-over subsection is reckless driving.",
        context:
          "The duty is to change into a lane not adjacent to the stopped vehicle where the road has four or more lanes with at least two going your way, and where changing lanes is unreasonable or unsafe, to proceed with due caution at a safe speed. The lighter subsection - hazard flashers, caution signs and lit flares - is only a traffic infraction. The manual notes that violations can bring a court suspension and demerit points.",
        trap:
          "The move-over rule looks like a courtesy provision, so its classification as a criminal offence catches people completely off guard.",
        commonlyMissed: true,
        excerptKey: "code-move-over-reckless",
        sourceLabel: "Code of Virginia § 46.2-861.1",
        sourceUrl: CODE_861,
      },
      {
        id: "va_s5_08",
        topic: "signs",
        question: "A Rumble Strips Ahead sign appears before a work zone. What should you do at the strips?",
        choices: [
          "Swerve around them to protect the suspension",
          "Stop before reaching them",
          "Drive slowly over them rather than swerving around them",
          "They mark the edge of a bike lane",
        ],
        correctIndex: 2,
        explanation:
          "Drive over them, slowly. The manual states the point directly because swerving is the instinctive response and the dangerous one.",
        context:
          "The strips are black or orange bands laid across the travel lanes ahead of a work zone, a flagger or a lane closure, and their whole purpose is the noise and vibration that pull an inattentive driver's attention back to the road. Swerving to avoid them takes you out of your lane at exactly the point where the traffic pattern is changing.",
        trap:
          "Rumble strips on a shoulder or centre line are warnings that you have drifted; these are deliberate and belong in your path.",
        excerptKey: "rumble-strips",
        sourceLabel: "Virginia Driver's Manual - Section 2, Work Zones",
        sourceUrl: HB,
      },
      {
        id: "va_s5_09",
        topic: "rightOfWay",
        question:
          "How do Virginia's flashing-light yielding requirements apply inside a highway work zone?",
        choices: [
          "They are doubled inside work zones",
          "They apply only on interstates",
          "They apply only after dark",
          "They do not apply in highway work zones",
        ],
        correctIndex: 3,
        explanation:
          "The manual states plainly that these requirements do not apply in highway work zones - the whole set about stationary and approaching vehicles with flashing lights.",
        context:
          "The reason is practical: a work zone is full of vehicles running amber lights, and a duty to change lanes away from each one would be unworkable and unsafe in a narrowed corridor. The work zone has its own rules instead - obey the posted limit, keep to the middle of your lane, do not change lanes until you are completely clear of the zone, and expect flaggers and flashing arrow boards.",
        trap:
          "It reads as a licence to relax, which it is not. Work zone speeding runs to $500 and using a handheld device there is a mandatory $250.",
        commonlyMissed: true,
        excerptKey: "not-in-work-zones",
        sourceLabel: "Virginia Driver's Manual - Section 3, Yielding to Vehicles with Flashing Lights",
        sourceUrl: HB,
      },
      {
        id: "va_s5_10",
        topic: "impairment",
        question:
          "You are in a crash and an officer develops probable cause for DUI after you have left the scene. What is the arrest window?",
        choices: [
          "Within three hours of the crash, without a warrant and at any location",
          "Within one hour of the crash",
          "Only at the scene itself",
          "Only with a warrant obtained first",
        ],
        correctIndex: 0,
        explanation:
          "Three hours, no warrant needed, and the arrest can happen anywhere - your home included.",
        context:
          "The three-hour rule works alongside implied consent, under which driving on Virginia's public roads already amounts to agreeing to a breath test on request. Refusing that test brings the same automatic administrative suspension as a .08 result, and gives the court a separate ground for suspending or revoking your licence on conviction.",
        trap:
          "Getting home is not the end of it. The window runs from the crash, not from the last time an officer saw you driving.",
        excerptKey: "dui-three-hours",
        sourceLabel: "Virginia Driver's Manual - Section 5, Alcohol and the Law",
        sourceUrl: HB,
      },
      {
        id: "va_s5_11",
        topic: "parking",
        question: "How close to the entrance of a rescue squad station may you park?",
        choices: ["No closer than 5 feet", "No closer than 20 feet", "No closer than 50 feet", "No closer than 15 feet"],
        correctIndex: 3,
        explanation:
          "Fifteen feet - the same figure Virginia applies to a fire hydrant, and to the entrance of a fire or ambulance station.",
        context:
          "Group the distances by size rather than by hazard and they stay straight: 15 feet for hydrants and emergency station entrances, 20 feet for intersections, 50 feet for railroad crossings, 500 feet for fire apparatus stopped at an alarm. The non-numeric prohibitions - double parking, crosswalks, sidewalks, driveways, bike lanes, disabled bays and their striped access aisles - carry no distance at all.",
        trap:
          "A station entrance intuitively feels like it should need more room than a hydrant, so this one gets guessed high.",
        excerptKey: "no-park-distances",
        sourceLabel: "Virginia Driver's Manual - Section 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "va_s5_12",
        topic: "rules",
        question:
          "Traffic is backed up at a light, so you cut through a corner filling-station forecourt to reach the cross street. What is the legal position?",
        choices: [
          "Lawful, because the signal is not obeyed either way",
          "Lawful with the property owner's permission",
          "Unlawful - you may not drive across public or private property to evade a sign or signal",
          "Only an issue on interstate highways",
        ],
        correctIndex: 2,
        explanation:
          "It is a specific offence in Virginia to drive off the roadway and across public or private property in order to evade a stop sign, yield sign, traffic light or other control device.",
        context:
          "The manual makes the same point in its opening paragraph on traffic control, saying it is illegal to avoid these controls by cutting through a parking lot or field. Since the offence turns on the purpose of the manoeuvre, pulling into a forecourt to buy fuel is not caught; using it as a shortcut past the signal is.",
        trap:
          "Permission from the property owner is irrelevant. The offence is about evading the control device, not about trespass.",
        commonlyMissed: true,
        excerptKey: "code-evasion",
        sourceLabel: "Code of Virginia § 46.2-833.1",
        sourceUrl: CODE_8331,
      },
      {
        id: "va_s5_13",
        topic: "licensing",
        question:
          "How many demerit points in twelve months brings a 90-day suspension for a driver aged 18 or over?",
        choices: [
          "8 points in 12 months",
          "12 points in 12 months",
          "24 points in 12 months",
          "18 points in 12 months, or 24 in 24 months",
        ],
        correctIndex: 3,
        explanation:
          "Eighteen in twelve months, or twenty-four in twenty-four. That is the suspension tier, and a driver improvement clinic is required before the privilege comes back.",
        context:
          "The ladder has three rungs. Eight in twelve months, or twelve in twenty-four, brings an advisory letter. Twelve in twelve months, or eighteen in twenty-four, requires a clinic within 90 days. Eighteen in twelve months, or twenty-four in twenty-four, brings the 90-day suspension, the clinic, and a six-month probation once you are back.",
        trap:
          "The 12-in-12 and 18-in-12 figures get swapped. Twelve is the clinic, eighteen is the suspension.",
        commonlyMissed: true,
        excerptKey: "adult-18-points",
        sourceLabel: "Virginia Driver's Manual - Section 5, Driver Improvement Program",
        sourceUrl: HB,
      },
      {
        id: "va_s5_14",
        topic: "speed",
        question: "When are Virginia's school crossing signs supposed to be in position or lit?",
        choices: [
          "All day on school days",
          "For 30 minutes before regular school hours, 30 minutes after, and other times children are going to or from school",
          "Only while a crossing guard is on duty",
          "Between 7 a.m. and 5 p.m.",
        ],
        correctIndex: 1,
        explanation:
          "Thirty minutes either side of regular school hours, plus any other time the presence of children reasonably requires the warning.",
        context:
          "The 25 mph limit applies between those signs while they are in position or turned on, and the signs go no more than 750 feet from the school property or the crossing. A locality may shorten the thirty-minute windows by ordinance. Some Virginia school zones now carry automated photo speed enforcement as well.",
        trap:
          "Assuming the limit is live all day makes you slower than the law requires; assuming it only bites at the bell makes you faster than it allows.",
        commonlyMissed: true,
        excerptKey: "code-school-signs-30-min",
        sourceLabel: "Code of Virginia § 46.2-873",
        sourceUrl: CODE_873,
      },
      {
        id: "va_s5_15",
        topic: "signals",
        question: "What takes away your right to turn right on red at a Virginia intersection?",
        choices: [
          "Either one - a posted No Turn on Red sign, or a red arrow pointing right",
          "Only a posted No Turn on Red sign",
          "Only a red arrow pointing right",
          "Neither, once you have come to a complete stop",
        ],
        correctIndex: 0,
        explanation:
          "The manual names both in the same sentence. A No Turn on Red sign or a right-pointing red arrow each removes the option on its own.",
        context:
          "The same pairing applies on the left-turn side, where a No Turn on Red sign or a left-pointing red arrow blocks the one-way to one-way turn. Where neither is present, the turn is permitted after a complete stop and after yielding to pedestrians and traffic - with a particular check for motorcycles, bicycles and mopeds.",
        trap:
          "Drivers scan for the sign, do not see one, and turn without registering that the arrow itself was red.",
        excerptKey: "no-turn-on-red-sign",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s5_16",
        topic: "safety",
        question: "What three things does Virginia say determine how far it takes you to stop?",
        choices: [
          "Speed and the condition of the brakes",
          "Reaction distance and braking distance",
          "Perception time, reaction distance and braking distance",
          "Perception time and braking distance",
        ],
        correctIndex: 2,
        explanation:
          "Three components: the time to recognise the hazard, the distance travelled before you get on the brakes, and the distance the car covers once you have.",
        context:
          "Only the third is really about the car. Perception time and reaction distance are affected by weather, visibility and your own mental and physical state, which is why fatigue, medication and distraction lengthen a stop without touching the brakes at all. Braking distance itself depends on speed, brake and tyre condition, and the pavement - and wet pavement can double it.",
        trap:
          "Perception time gets dropped because it involves no movement of the car. It is where a distracted driver loses the most ground.",
        excerptKey: "stopping-three-factors",
        sourceLabel: "Virginia Driver's Manual - Section 3, Stopping Distance",
        sourceUrl: HB,
      },
      {
        id: "va_s5_17",
        topic: "sharing",
        question: "You come up behind a horse-drawn buggy on a rural Virginia road. What does the law require?",
        choices: [
          "Pass with at least three feet of clearance, and do not use the horn",
          "Sound the horn to warn the driver you are there",
          "Pass at the posted speed limit to minimise the time alongside",
          "Two feet of clearance is sufficient for animal-drawn vehicles",
        ],
        correctIndex: 0,
        explanation:
          "Three feet, when the way is clear, and the manual specifically tells you not to use the horn - the noise is what spooks the animal.",
        context:
          "The three-foot rule is one provision covering a whole class: bicycles, electric personal assistive mobility devices, power-assisted bicycles, mopeds, animals and animal-drawn vehicles all get the same clearance. And the same corollary applies - if the lane is not wide enough to give three feet while staying in it, you must change lanes to pass.",
        trap:
          "The horn feels like courtesy. Around a horse it is the single most dangerous thing you can do.",
        excerptKey: "buggy-three-feet",
        sourceLabel: "Virginia Driver's Manual - Section 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s5_18",
        topic: "signs",
        question: "When must a school bus stop at a railroad crossing?",
        choices: [
          "Only when the lights are flashing",
          "Only if the driver can see a train",
          "Only at crossings fitted with gates",
          "Always, even when the lights are not flashing",
        ],
        correctIndex: 3,
        explanation:
          "Every time. The manual flags it as a note because ordinary drivers need to expect the stop and not run into the back of the bus.",
        context:
          "For everyone else the rule is different: you stop at a railroad crossing when the signals are flashing, when a gate is coming down, or when a train is close enough to be a hazard. The general instruction at any crossing is that unless you can clear the tracks completely, you never start across - make sure there is room on the far side first.",
        trap:
          "Following a school bus onto a quiet crossing at speed is how drivers get caught out. The bus is going to stop whether or not anything is coming.",
        excerptKey: "school-bus-railroad",
        sourceLabel: "Virginia Driver's Manual - Section 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s5_19",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing at an ordinary intersection with no marked crosswalk. When must you stop?",
        choices: [
          "Never - only marked crosswalks create a duty to stop",
          "At any intersection where the speed limit is 35 mph or less",
          "Only where the limit is 25 mph or less",
          "You need only slow down and pass carefully",
        ],
        correctIndex: 1,
        explanation:
          "The statute names three places where the stop is required, and the third is any intersection on a road where the limit is not more than 35 mph, marked crosswalk or not.",
        context:
          "The other two are any clearly marked crosswalk, midblock or at a block end, and any regular pedestrian crossing in the projection of the adjacent sidewalk. In every case you stay stopped until the pedestrian has passed the lane you are in. Drivers turning at intersections must change course, slow or stop as needed, and pedestrians crossing at intersections always have right of way over turning vehicles.",
        commonlyMissed: true,
        trap:
          "The 35 mph condition attaches to the intersection case only. A marked crosswalk creates the duty at any speed limit.",
        excerptKey: "code-ped-35-intersection",
        sourceLabel: "Code of Virginia § 46.2-924",
        sourceUrl: CODE_924,
      },
      {
        id: "va_s5_20",
        topic: "emergencies",
        question:
          "Emergency services respond to an incident caused by your DUI. What can you be billed?",
        choices: [
          "Nothing - response costs are publicly funded",
          "Up to $250",
          "Up to $1,000 for the cost of the response",
          "Up to $5,000",
        ],
        correctIndex: 2,
        explanation:
          "Up to $1,000, depending on the laws of the city or county you were driving in - covering law enforcement, emergency medical services, firefighters and rescue personnel.",
        context:
          "It is restitution rather than a fine, and it sits on top of everything else a DUI carries: the administrative suspension, the court penalties, the vehicle impoundment, and the added jail time and fine if a passenger aged 17 or under was in the car. Because it is set locally, whether it applies depends on where the incident happened.",
        trap:
          "It is easy to assume the emergency response is a public cost. Virginia lets the locality recover it from the impaired driver.",
        excerptKey: "restitution-1000",
        sourceLabel: "Virginia Driver's Manual - Section 5, Restitution",
        sourceUrl: HB,
      },
      {
        id: "va_s5_21",
        topic: "rules",
        question:
          "You are driving below the speed of surrounding traffic on a multi-lane road. Which lane does the Code put you in?",
        choices: [
          "The lane nearest the right edge, except to overtake or prepare a left turn",
          "Any lane, since you are within the speed limit",
          "The centre lane, out of the way of both merging and passing traffic",
          "The rule applies only to trucks",
        ],
        correctIndex: 0,
        explanation:
          "The lane nearest the right edge or right curb, whenever that lane is available. The exceptions are overtaking, preparing a left turn, and roads where right lanes are set aside for slow-moving traffic.",
        context:
          "The manual gives the same instruction from the other direction - stay in the right lane if you are driving slower than the traffic around you, and use the left lane for passing rather than cruising. The test is your speed relative to the traffic, not relative to the posted limit, which is why driving the limit in the left lane can still put you in the wrong.",
        trap:
          "Drivers reason that if they are at the posted limit nobody has a claim on the lane. The statute measures against the normal speed of traffic instead.",
        excerptKey: "code-slow-right-lane",
        sourceLabel: "Code of Virginia § 46.2-804",
        sourceUrl: CODE_804,
      },
      {
        id: "va_s5_22",
        topic: "impairment",
        question:
          "A 19-year-old is convicted of driving after illegally consuming alcohol with a BAC of .04. What does the court impose?",
        choices: [
          "A 30-day suspension",
          "Demerit points and no more",
          "A one-year suspension, plus a $500 minimum fine or at least 50 hours of community service",
          "A written warning for a first offence",
        ],
        correctIndex: 2,
        explanation:
          "A full year of suspension from the date of conviction, and either the mandatory minimum $500 fine or at least 50 hours of community service.",
        context:
          "Virginia's zero tolerance policy sets the under-21 threshold at .02, so .04 is comfortably inside it. Had the same driver blown .08 or higher, they would face the adult DUI penalties instead. A separate provision covers fake IDs: at least $500, at least 50 hours of community service, up to twelve months in jail, and a suspension of six months to a year.",
        trap:
          "The suspension is a year for a first offence, which people consistently under-estimate because .04 is only half the adult limit.",
        commonlyMissed: true,
        excerptKey: "under-21-penalty",
        sourceLabel: "Virginia Driver's Manual - Section 5, Alcohol Related Violations, Persons Under Age 21",
        sourceUrl: HB,
      },
      {
        id: "va_s5_23",
        topic: "speed",
        question:
          "A residence district posts a speed limit sign that also displays the penalty for violations. What is that penalty?",
        choices: [
          "A $50 fine",
          "A $200 fine that may not be suspended unless the court orders 20 hours of community service",
          "A $100 fine",
          "Demerit points but no fine",
        ],
        correctIndex: 1,
        explanation:
          "Two hundred dollars, and the statute closes off the usual escape route by forbidding suspension of any part of it unless the court orders 20 hours of community service.",
        context:
          "The sign has to carry both the limit and the penalty for the enhanced fine to apply, which is what distinguishes it from an ordinary residential 25 mph sign. Localities ask for these where a road that looks like an arterial runs through what has become a residential area and speeding is documented.",
        commonlyMissed: true,
        trap:
          "The sign looks like a scare tactic rather than a distinct statutory penalty, so drivers discount it. The $200 is real and largely unsuspendable.",
        excerptKey: "code-residence-200-fine",
        sourceLabel: "Code of Virginia § 46.2-878.2",
        sourceUrl: CODE_878,
      },
      {
        id: "va_s5_24",
        topic: "licensing",
        question:
          "How long must a Virginia resident under 18 hold a learner's permit before getting a driver's license?",
        choices: ["60 days", "Six months", "Nine months", "Twelve months"],
        correctIndex: 2,
        explanation:
          "Nine months, alongside completing a Virginia-approved driver education programme. It is DMV's driver education page that carries the figure, not the manual.",
        context:
          "Adults run on a different clock: an applicant 18 or over holds the permit 60 days before a first road skills test, or completes driver education instead. The under-18 route also needs a parent or guardian to certify at least 45 hours of driving, 15 of them after sunset, and a 90-minute parent-teen component on top of the classroom course.",
        commonlyMissed: true,
        trap:
          "The manual's 60-day figure is the adult one. Applying it to a 16-year-old is off by seven months.",
        excerptKey: "under-18-permit-9-months",
        sourceLabel: "Virginia DMV - Driver Education",
        sourceUrl: ED,
      },
      {
        id: "va_s5_25",
        topic: "safety",
        question: "You are following another vehicle at night on high beams. When must you switch down?",
        choices: [
          "Within 500 feet of the vehicle ahead",
          "Within 100 feet",
          "Only in cities and towns",
          "Within 200 feet of the vehicle ahead",
        ],
        correctIndex: 3,
        explanation:
          "Two hundred feet when following. The 500-foot figure belongs to oncoming traffic.",
        context:
          "The difference is about where the light lands. Following, your beams reach the mirrors of the car ahead, so the shorter distance is enough; oncoming, they go straight into the other driver's eyes, so the margin is larger. In cities and towns use low beams anyway, except on unlit streets, and in heavy fog use low beams because high beams reflect back.",
        trap:
          "The two figures get swapped constantly, and the following distance is the one people set too long.",
        excerptKey: "low-beam-following-200",
        sourceLabel: "Virginia Driver's Manual - Section 3, Night Driving",
        sourceUrl: HB,
      },
      {
        id: "va_s5_26",
        topic: "signals",
        question: "An overhead lane signal shows a yellow X or a yellow downward diagonal arrow. What does it mean?",
        choices: [
          "The lane is permanently closed",
          "You may continue using the lane normally",
          "Move out of that lane as soon as it is safe to do so",
          "The lane is reserved for buses at this hour",
        ],
        correctIndex: 2,
        explanation:
          "It is the transition warning: the lane is about to close, so get out of it when you safely can.",
        context:
          "The full vocabulary runs green arrow for open, yellow X or yellow downward diagonal arrow for leave the lane, red X for never drive there, and a one-way or two-way arrow signal meaning you may enter that lane only to turn in the arrow's direction. These are how reversible lanes get switched over between the morning and evening peaks.",
        trap:
          "Yellow reads as caution rather than instruction, so drivers stay in the lane until the red X appears. By then they are being asked to cross moving traffic.",
        excerptKey: "lane-yellow-x",
        sourceLabel: "Virginia Driver's Manual - Section 2, Lane Use Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s5_27",
        topic: "signs",
        question: "A Divided Highway Ends sign appears. What is coming up?",
        choices: [
          "The road is about to split into two one-way roadways",
          "Two-way traffic resumes ahead, so keep right",
          "The right lane ends and you must merge left",
          "A median is being installed ahead",
        ],
        correctIndex: 1,
        explanation:
          "The median or divider stops, traffic goes both ways again, and you keep right. Its counterpart, Divided Highway Begins, warns of the opposite change.",
        context:
          "The two signs matter because they mark the point where your assumptions about oncoming traffic change. On a divided road each carriageway is one-way, so a head-on is unlikely; the moment the division ends, it is not. It also changes what other rules require of you - the duty to pull over for an emergency vehicle coming the other way applies on undivided highways.",
        trap:
          "The two signs use similar symbols and get confused. Reading one as the other means expecting a median where two-way traffic is about to start.",
        excerptKey: "divided-hwy-ends",
        sourceLabel: "Virginia Driver's Manual - Section 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "va_s5_28",
        topic: "sharing",
        question: "How large is a large truck's forward blind spot?",
        choices: [
          "About ten feet ahead of the cab",
          "There is no forward blind spot from a high cab",
          "About five feet ahead of the cab",
          "Up to 20 feet in front of the cab, with roughly 200 feet behind",
        ],
        correctIndex: 3,
        explanation:
          "Twenty feet in front and around 200 feet behind. The height of the cab creates the forward blind spot rather than removing it.",
        context:
          "Those are two of the four No-Zones; the side ones are the largest of all and are why these vehicles swing wide to turn. A truck and trailer can be 65 feet long and take over half a mile of clear road to pass, and they need close to twice the distance a car does to stop. When you have passed one, look for the whole front of it in your mirror before pulling in.",
        trap:
          "Cutting in immediately after passing puts you in the forward No-Zone and removes the truck's stopping distance at the same time.",
        excerptKey: "truck-blind-spots",
        sourceLabel: "Virginia Driver's Manual - Section 3, Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "va_s5_29",
        topic: "parking",
        question: "You are parking facing uphill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Right, so the wheels chock against the curb",
          "Left, so that if the car rolls back it catches the curb",
          "Straight, with the parking brake set firmly",
          "Right, and leave the transmission in neutral",
        ],
        correctIndex: 1,
        explanation:
          "Uphill with a curb, turn the wheels left. If the car rolls backwards the rear tyre finds the curb and stops it.",
        context:
          "The three cases are worth learning as a group. Uphill with a curb: wheels left. Downhill with a curb: wheels right, so they chock into it. Without a curb, in either direction: wheels right, so a rolling car takes its rear away from traffic. The underlying rule is the same each time - point the wheels so that gravity takes the car out of the traffic lane.",
        commonlyMissed: true,
        trap:
          "The uphill case is the odd one out, and it is the one people get wrong because two of the three answers are right.",
        excerptKey: "park-hill-wheels",
        sourceLabel: "Virginia Driver's Manual - Section 3, Parking on a hill",
        sourceUrl: HB,
      },
      {
        id: "va_s5_30",
        topic: "rightOfWay",
        question:
          "You and an oncoming driver are both signalling to turn left across each other. How does Virginia say to do it?",
        choices: [
          "Turn in front of each other, so the passenger sides pass alongside",
          "Turn behind each other, passing driver's side to driver's side",
          "The driver on the right goes first and the other waits",
          "Both wait for a protected green arrow",
        ],
        correctIndex: 0,
        explanation:
          "In front of each other, ending up with the passenger sides adjacent. It keeps both drivers' view of oncoming traffic open through the turn.",
        context:
          "The alternative, turning behind each other, is common in other places and puts each car's body between the other driver and the traffic still coming straight through. Neither driver has protection here in any case: with a green ball rather than a green arrow, both are yielding to oncoming traffic and to pedestrians in the intersection.",
        trap:
          "Turning behind feels more natural because the paths do not cross. It is the manoeuvre that hides the through traffic from both drivers.",
        excerptKey: "two-lefts-passenger-side",
        sourceLabel: "Virginia Driver's Manual - Section 3, Turning",
        sourceUrl: HB,
      },
      {
        id: "va_s5_31",
        topic: "rules",
        question: "When may you pass on the right by leaving the paved roadway?",
        choices: [
          "When traffic ahead has stopped completely",
          "When the shoulder is wide and paved",
          "When the driver ahead is turning left",
          "Never - you may not leave the pavement or main roadway to get around another vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Never. The permission to pass on the right applies to a vehicle signalling a left turn, and even then only if you can do it without leaving the pavement.",
        context:
          "Passing off the pavement or on the shoulder appears separately in the manual's list of unlawful and unsafe passing, alongside hills, curves, intersections and railroad crossings, and passing a stopped school bus. Passing on the shoulder is also one of the behaviours Virginia lists as characteristic of aggressive driving, which is itself an offence.",
        trap:
          "A wide paved shoulder looks like a usable lane, particularly when traffic is queuing. It is not part of the roadway.",
        excerptKey: "pass-not-off-pavement",
        sourceLabel: "Virginia Driver's Manual - Section 3, Passing",
        sourceUrl: HB,
      },
      {
        id: "va_s5_32",
        topic: "emergencies",
        question:
          "A tow truck is stopped on the shoulder of a four-lane highway with its amber lights flashing. What is required?",
        choices: [
          "Change to a lane not next to it, if that is reasonable and safe",
          "Nothing - only police, fire and ambulance trigger the rule",
          "Sound the horn as you pass to acknowledge it",
          "Stop until the tow truck moves off",
        ],
        correctIndex: 0,
        explanation:
          "Tow trucks are covered alongside emergency vehicles. Move over where you reasonably and safely can; where you cannot, reduce speed and proceed with caution.",
        context:
          "The manual extends the same treatment down a scale of vehicles: stationary vehicles running hazard flashers, displaying caution signs or marked by lit flares or torches also require a lane change and caution. Trash collection vehicles have their own version with the 10 mph and two-foot figures, and mail vehicles simply require caution and a safe speed.",
        trap:
          "The colour of the lights does not determine the duty. Amber on a tow truck brings the same obligation as blue and red.",
        excerptKey: "move-over-stationary",
        sourceLabel: "Virginia Driver's Manual - Section 3, Yielding to Vehicles with Flashing Lights",
        sourceUrl: HB,
      },
      {
        id: "va_s5_33",
        topic: "safety",
        question: "How far ahead does Virginia say expert drivers focus their eyes?",
        choices: [
          "20 to 30 seconds ahead, roughly one city block in town",
          "About two car lengths",
          "About five seconds ahead",
          "As far as the headlights reach",
        ],
        correctIndex: 0,
        explanation:
          "Twenty to thirty seconds - stated in time rather than distance, so it scales automatically with your speed.",
        context:
          "Looking that far ahead is what lets you identify a risk early enough to have options. The rest of searching is the same discipline applied elsewhere: keep the eyes moving instead of staring at the middle of the road, scan side to side for signs and signals, look for clues such as exhaust smoke, brake lights and turned wheels, and check the mirror about every ten seconds.",
        trap:
          "Staring at the car in front feels like paying attention. It is the surest way to arrive at a hazard with no time to react.",
        excerptKey: "search-20-30-seconds",
        sourceLabel: "Virginia Driver's Manual - Section 3, Searching",
        sourceUrl: HB,
      },
      {
        id: "va_s5_34",
        topic: "impairment",
        question: "What does Virginia impose for providing alcohol to someone under 21?",
        choices: [
          "A fine of up to $100",
          "A warning for a first offence",
          "A fine of up to $2,500, licence suspension of up to a year, and up to 12 months in jail",
          "Community service only",
        ],
        correctIndex: 2,
        explanation:
          "All three together. The same penalties apply to selling or supplying alcohol to someone who is intoxicated or under a court order to abstain.",
        context:
          "It sits alongside the other under-21 provisions: driving after illegally consuming alcohol at .02 or above brings a one-year suspension and a $500 minimum fine or 50 hours of community service, and using a fake ID to buy alcohol brings a $500 minimum fine, 50 hours of community service, up to 12 months in jail and a suspension of six months to a year.",
        trap:
          "It is often treated as a social offence rather than a driving one. It carries a mandatory licence suspension all the same.",
        excerptKey: "providing-alcohol",
        sourceLabel: "Virginia Driver's Manual - Section 5, Alcohol Related Violations, Persons Under Age 21",
        sourceUrl: HB,
      },
      {
        id: "va_s5_35",
        topic: "licensing",
        question:
          "What is the fine for a first offence of holding a handheld communications device while driving in Virginia?",
        choices: ["$50", "$250", "$500", "$125"],
        correctIndex: 3,
        explanation:
          "One hundred and twenty-five dollars for a first offence, rising to $250 for a second or subsequent one. In a highway work zone it is a mandatory $250 whatever the offence number.",
        context:
          "The offence is holding the device, so hands-free use is not caught for adult drivers, and a phone may be used for navigation as long as you are neither entering information nor holding it. The exceptions are narrow: emergency vehicle operators on duty, drivers lawfully parked or stopped, anyone reporting an emergency, amateur and CB radio, and certain highway incident-management vehicles.",
        commonlyMissed: true,
        trap:
          "Drivers under 18 do not get the hands-free allowance at all - Virginia bans their use of a phone while driving whether or not it is handheld.",
        excerptKey: "code-handheld-fines",
        sourceLabel: "Code of Virginia § 46.2-818.2",
        sourceUrl: CODE_818,
      },
    ],
  },

  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the shape of the real thing: signs and rules interleaved, no hints, and the tone of DMV's own sample exam. Virginia's real test is 10 sign questions you must get perfect, then 30 general knowledge questions needing 24 correct.",
    questions: [
      {
        id: "va_s6_01",
        topic: "signs",
        question: "This road sign is five-sided. What does it mean?",
        choices: [
          "Railroad crossing",
          "Yield right-of-way ahead",
          "School zone or school crossing",
          "Do not enter",
        ],
        correctIndex: 2,
        explanation:
          "The pentagon marks a school zone or school crossing, and a second sign with an arrow may show exactly where the crosswalk is.",
        context:
          "The five shapes DMV expects you to recognise on sight are the octagon for stop, the downward triangle for yield, the diamond for warning, the pentagon for schools, and the rectangle for regulation or guidance. Part one of the knowledge exam is ten sign questions and every one has to be right.",
        trap:
          "The pentagon warns of the school; it does not set the limit. The 25 mph school figure comes from the school crossing signs.",
        excerptKey: "shape-pentagon",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Shapes",
        sourceUrl: HB,
      },
      {
        id: "va_s6_02",
        topic: "signals",
        question: "You have stopped at a steady red light. When may you move off?",
        choices: [
          "When the light changes, staying stopped as long as it is red unless a turn is allowed",
          "As soon as the cross traffic has cleared",
          "After three seconds if nothing is coming",
          "Immediately, treating it as a yield once you have stopped",
        ],
        correctIndex: 0,
        explanation:
          "Red means remain stopped for as long as it shows. The only exceptions are the turns Virginia specifically permits: right on red, and left on red one-way to one-way.",
        context:
          "Where you stop is defined too - at the stop line, or if there is none, before the crosswalk, and failing that before you enter the intersection. A steady green arrow permits movement in the arrow's direction; a green ball permits movement when the way is clear but protects nothing.",
        trap:
          "A clear cross street is not a signal. Only the light, an officer, or a permitted turn releases you.",
        excerptKey: "red-light-stop",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s6_03",
        topic: "speed",
        question:
          "You are on a paved rural road that is not a school, business or residential area, with no speed limit signs posted. What is the limit?",
        choices: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "Fifty-five for passenger vehicles and motorcycles. It is the catch-all default for everything that is not 25 or 35.",
        context:
          "The three defaults are 25 mph in school, business and residential areas, 35 mph on unpaved roads and 55 mph on all other roads. Where a sign has been posted, the sign wins - interstates can be posted at 70 mph after a traffic engineering study, and certain named US routes at 60.",
        trap:
          "Fifty-five is the default, not the maximum. It applies where nothing is posted, not where a higher figure is.",
        excerptKey: "default-speed-limits",
        sourceLabel: "Virginia Driver's Manual - Section 3, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "va_s6_04",
        topic: "rules",
        question: "You have completed a turn. What should you check?",
        choices: [
          "Leave the signal on until your next manoeuvre",
          "Nothing - every car cancels its own signal",
          "Signals are only needed on main roads",
          "That the turn signal has stopped flashing",
        ],
        correctIndex: 3,
        explanation:
          "Confirm it has cancelled. A signal left running tells everyone around you that you are about to do something you are not.",
        context:
          "Self-cancelling mechanisms only reset after enough steering movement, so a gentle turn or a lane change often leaves the signal running. The wider point is that a signal is a communication: use it three to four seconds or 100 feet ahead of a turn, use it for lane changes and for entering and leaving a highway, and use it even when the road appears empty.",
        trap:
          "A stale signal is not a harmless mistake. It invites a driver waiting to pull out to move in front of you.",
        excerptKey: "signal-off-after-turn",
        sourceLabel: "Virginia Driver's Manual - Section 3, Turn Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s6_05",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a white cane, or using a guide dog, is about to cross ahead of you. What is required?",
        choices: [
          "Slow to walking pace and pass carefully",
          "Sound the horn so they know you are there",
          "Proceed if they have not yet stepped off the kerb",
          "Come to a full stop",
        ],
        correctIndex: 3,
        explanation:
          "A full stop. Virginia requires it specifically, because the cane or the dog signals blindness or vision impairment.",
        context:
          "The obligation runs alongside the general duty to stop for pedestrians lawfully crossing, and it is one of several places the manual asks you to remember that elderly people and people with disabilities may move slowly. Failing to stop and causing serious bodily injury or death is a Class 1 misdemeanour.",
        commonlyMissed: true,
        trap:
          "The horn is worse than useless here. A blind pedestrian navigates by sound, and a horn removes the information they are relying on.",
        excerptKey: "pedestrian-cane-dog",
        sourceLabel: "Virginia Driver's Manual - Section 3, Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "va_s6_06",
        topic: "sharing",
        question:
          "You are on a divided highway. A school bus on the other carriageway stops with its red lights flashing. What must you do?",
        choices: [
          "Stop, because the rule applies from any direction",
          "You need not stop, but be ready for children crossing into your lanes",
          "Stop only if you can see children near the bus",
          "Slow to 25 mph and continue",
        ],
        correctIndex: 1,
        explanation:
          "The median exception applies. You are not required to stop, though DMV still asks you to be prepared for students who exit and cross.",
        context:
          "The exception is narrow: it needs a median or physical barrier dividing the road, and the bus has to be on the far side of it. Everywhere else you stop from any direction, on a highway, private road or school driveway, and stay stopped until everyone is clear and the bus moves again - and you also stop where the bus is loading or unloading with its signals off.",
        commonlyMissed: true,
        trap:
          "A painted centre line or a two-way turn lane is not a median. Only a median or a physical barrier triggers the exception.",
        excerptKey: "school-bus-median",
        sourceLabel: "Virginia Driver's Manual - Section 3, Stopping for School Buses",
        sourceUrl: HB,
      },
      {
        id: "va_s6_07",
        topic: "safety",
        question: "What is the correct hand signal for slowing or stopping?",
        choices: [
          "Left hand and arm pointing downward",
          "Left hand and arm pointing straight out",
          "Left hand and arm pointing upward",
          "Right hand and arm pointing downward",
        ],
        correctIndex: 0,
        explanation:
          "Left arm down for slow or stop. Straight out is a left turn, and left arm up is a right turn.",
        context:
          "All three signals use the left arm, because it is the one visible out of the driver's window on a right-hand-drive-free road system. Virginia asks you to develop the habit of signalling - by lamp or by hand - even when there is no other traffic about, and hand signals remain the fallback when your lights fail.",
        trap:
          "Left arm down and left arm up are easy to invert. Down is stop; up is right.",
        excerptKey: "hand-signals",
        sourceLabel: "Virginia Driver's Manual - Section 3, Hand Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s6_08",
        topic: "licensing",
        question: "What is the difference between a suspended and a revoked driving privilege in Virginia?",
        choices: [
          "Suspension is permanent and revocation is temporary",
          "Suspension is temporary; revocation terminates the privilege until you re-apply",
          "They are two words for the same thing",
          "Revocation always lasts exactly 30 days",
        ],
        correctIndex: 1,
        explanation:
          "A suspension withdraws the privilege for a period and you reinstate at the end of it. A revocation terminates it, and you have to re-apply from scratch.",
        context:
          "Re-applying after a revocation means passing the vision screening, the two-part knowledge exam and the road skills test again, plus proof of legal presence and the fees. The same re-testing catches suspended drivers whose licence has been expired for a year or more.",
        trap:
          "People treat the two as interchangeable. The practical gap is enormous - one is a waiting period, the other is starting over.",
        excerptKey: "revocation-def",
        sourceLabel: "Virginia Driver's Manual - Section 5, Penalties",
        sourceUrl: HB,
      },
      {
        id: "va_s6_09",
        topic: "impairment",
        question: "Can a Virginia driver be convicted of DUI with a blood alcohol content below .08?",
        choices: [
          "No - .08 is the only threshold that matters",
          "Yes, if your driving is impaired",
          "Only if you are under 21",
          "Only if you hold a commercial licence",
        ],
        correctIndex: 1,
        explanation:
          "Yes. The manual says directly that if your driving is impaired you can be convicted with a BAC lower than .08.",
        context:
          "The .08 figure creates a presumption rather than a boundary - above it the case is straightforward, below it the Commonwealth proves impairment instead. The same reasoning covers drugs, where there is no equivalent number at all: impairment by any drug, prescription or over the counter, carries the same penalties as alcohol.",
        commonlyMissed: true,
        trap:
          "Blowing under .08 is widely read as a complete defence. It removes the presumption and nothing else.",
        excerptKey: "dui-08",
        sourceLabel: "Virginia Driver's Manual - Section 3, Drunk and Drugged Driving",
        sourceUrl: HB,
      },
      {
        id: "va_s6_10",
        topic: "parking",
        question: "You stop alongside a car that is already parked at the curb, to wait for a friend. What is that?",
        choices: [
          "Allowed briefly with your hazard flashers on",
          "Allowed outside business districts",
          "Double parking, which is prohibited",
          "Allowed as long as you stay with the vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Parking beside another parked vehicle is double parking and Virginia prohibits it outright. Hazard lights do not create an exception.",
        context:
          "It sits in a list of prohibitions that carry no distance: crosswalks and sidewalks, in front of driveways, in disabled bays and their striped access aisles, in a bike lane, on the hard surface of a road with no curb, and anywhere you block or endanger traffic in a designated lane. The distance-based prohibitions - hydrants, intersections, crossings, fire apparatus - are separate.",
        trap:
          "Staying with the vehicle is the condition attached to a yellow curb, not to double parking, where nothing makes it lawful.",
        excerptKey: "no-park-general",
        sourceLabel: "Virginia Driver's Manual - Section 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "va_s6_11",
        topic: "emergencies",
        question: "You have been in a crash with property damage but no injuries. What does the manual require?",
        choices: [
          "Report the crash to the police as quickly as possible",
          "Report it to DMV within 10 days",
          "Report it only if someone was injured",
          "Report it only if damage exceeds $3,000",
        ],
        correctIndex: 0,
        explanation:
          "Crashes involving property damage, personal injury or death must be reported to police, and as quickly as possible.",
        context:
          "The $3,000 figure is a different thing entirely - it is the threshold above which an officer must forward a written crash report to DMV, alongside any injury or death. Your own duties do not scale with the damage: stop, help anyone injured, report to police, exchange details and notify your insurer.",
        trap:
          "The $3,000 number gets read as a reporting threshold for drivers. It is the officer's, not yours.",
        excerptKey: "crash-report-police",
        sourceLabel: "Virginia Driver's Manual - Section 3, Traffic Crashes",
        sourceUrl: HB,
      },
      {
        id: "va_s6_12",
        topic: "signs",
        question: "A green sign with white lettering is mounted over the highway. What is it doing?",
        choices: [
          "Warning of a hazard",
          "Giving destination information",
          "Pointing to motorist services",
          "Imposing a regulation",
        ],
        correctIndex: 1,
        explanation:
          "Green provides destination guidance. Blue points to motorist services and brown to historical or cultural interests.",
        context:
          "None of the three imposes a legal obligation, which is what separates them from the regulatory family. Regulatory signs are black on white, or red on white where they prohibit; warnings are yellow with black, with a yellow-green variant reserved for school, pedestrian and bicyclist activity; orange means construction and pink means an incident.",
        trap:
          "Green also appears as pavement paint in bike lanes and bike boxes, which is a completely separate use of the colour.",
        excerptKey: "sign-green-blue-brown",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "va_s6_13",
        topic: "rules",
        question: "May you exceed the speed limit briefly to complete a pass?",
        choices: [
          "No - it is against the law to exceed the limit as you pass",
          "Yes, by up to 10 mph while overtaking",
          "Yes, the limit is suspended for the duration of the pass",
          "Yes, but only on two-lane roads",
        ],
        correctIndex: 0,
        explanation:
          "The manual states it as its own rule: it is against the law to exceed the speed limit as you pass.",
        context:
          "That constrains the whole manoeuvre, because you have to be able to complete the pass at or below the limit and be back in your lane before a No Passing zone begins. If the vehicle ahead is close to the limit already, the pass is not available at all. Return right as soon as you can see the front of the passed vehicle in your rearview mirror.",
        commonlyMissed: true,
        trap:
          "Getting past quickly feels safer than lingering alongside. Virginia's answer is not to start a pass you cannot finish legally.",
        excerptKey: "pass-no-speeding",
        sourceLabel: "Virginia Driver's Manual - Section 3, Passing",
        sourceUrl: HB,
      },
      {
        id: "va_s6_14",
        topic: "signals",
        question:
          "The light turns green while a pedestrian is still crossing the street you want to turn into. What do you do?",
        choices: [
          "Sound the horn to hurry them along",
          "Turn behind them once they have passed the centre line",
          "Edge forward so they understand you are waiting",
          "Let them finish crossing before you turn",
        ],
        correctIndex: 3,
        explanation:
          "Wait. Virginia says explicitly that if the light changes from red to green while a pedestrian is in the street, you allow them to cross before turning.",
        context:
          "The same instruction attaches to the flashing yellow arrow, where a signal changing from red while someone is in the intersection means the pedestrian goes first. More generally the manual asks you to let pedestrians completely cross the street before beginning any turn, and notes that they have right of way.",
        trap:
          "Turning behind a pedestrian who has passed the centre line looks harmless and is precisely the manoeuvre the rule forbids.",
        excerptKey: "green-turn-yield",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s6_15",
        topic: "speed",
        question:
          "You are caught holding your phone while driving through a highway work zone. What is the penalty?",
        choices: ["$125", "A mandatory $250 fine", "$100", "$500"],
        correctIndex: 1,
        explanation:
          "A mandatory $250 in a work zone, whether or not it is your first offence. Elsewhere a first offence is $125 and a second or subsequent one is $250.",
        context:
          "Work zones raise the stakes across the board. Speeding in one where workers are present carries a fine of up to $500, and some carry automated photo speed enforcement. The move-over rules for flashing lights, by contrast, do not apply inside a work zone at all.",
        commonlyMissed: true,
        trap:
          "The word mandatory matters. A court may substitute a driver improvement clinic for a first handheld offence elsewhere, but not for the work zone version.",
        excerptKey: "code-handheld-workzone",
        sourceLabel: "Code of Virginia § 46.2-818.2",
        sourceUrl: CODE_818,
      },
      {
        id: "va_s6_16",
        topic: "safety",
        question: "Compared with the rest of the road, when do bridges freeze?",
        choices: [
          "Last, because the structure retains heat",
          "First, but they are treated first so they are usually safest",
          "At the same rate as the surrounding road",
          "Before other road surfaces",
        ],
        correctIndex: 3,
        explanation:
          "Before the rest of the road. Air circulates underneath a bridge deck, so it loses heat from both sides while ordinary pavement is warmed from below.",
        context:
          "Shaded stretches behave the same way for the same reason. The general response to hazardous conditions is to reduce speed first, double your normal following distance and switch on the headlights. On packed snow or ice, release the accelerator and brake gently - you have the most control while the front tyres are still rolling.",
        trap:
          "A dry-looking bridge on a near-freezing day is the classic black ice trap, because the approach road gives no warning.",
        excerptKey: "bridges-freeze",
        sourceLabel: "Virginia Driver's Manual - Section 3, Snow",
        sourceUrl: HB,
      },
      {
        id: "va_s6_17",
        topic: "rightOfWay",
        question:
          "You reach an intersection where the traffic signals are showing no lights at all. What is required?",
        choices: [
          "Yield to the right and continue",
          "The larger road keeps priority",
          "Every vehicle must stop and treat it as an all-way stop",
          "Proceed at 15 mph without stopping if the way is clear",
        ],
        correctIndex: 2,
        explanation:
          "All approaches stop and the intersection becomes an all-way stop, with arrival order and the left-yields-to-right tie-break governing.",
        context:
          "Two things override it: an officer or other authorised person directing traffic, and portable stop signs put out at the intersection. Do not confuse a dark signal with a flashing red, which converts only that approach into a stop; the road with a flashing yellow keeps moving.",
        trap:
          "Drivers on the bigger road assume priority carries over from the signal timing. Nothing about the road's size survives the outage.",
        excerptKey: "dark-signal",
        sourceLabel: "Virginia Driver's Manual - Section 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "va_s6_18",
        topic: "sharing",
        question: "A cyclist ahead of you is riding in the middle of the lane rather than near the edge. What is the position?",
        choices: [
          "They are breaking the law and should move right",
          "It is permitted where the lane is too narrow to share or they are about to turn left",
          "Cyclists must always use the shoulder",
          "Only children may ride in the centre of a lane",
        ],
        correctIndex: 1,
        explanation:
          "Virginia allows it when necessary - typically because the lane is too narrow to share side by side, or because the rider is preparing to turn left.",
        context:
          "A bicyclist on the roadway generally has the same right of way as a driver. That combines with the three-foot rule to produce a practical consequence: on a narrow lane you may not squeeze past, and if you cannot give three feet within the lane, you must change lanes. Where a double yellow line makes that impossible, Virginia permits crossing it to pass a cyclist when the opposite lane is clear.",
        trap:
          "Centre-lane riding looks obstructive and is usually the safest and most legal position available to the rider.",
        excerptKey: "bike-center-lane",
        sourceLabel: "Virginia Driver's Manual - Section 3, Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "va_s6_19",
        topic: "licensing",
        question: "How does the two-part Virginia knowledge exam work?",
        choices: [
          "All ten sign questions must be correct before you can begin part two",
          "You may take the two parts in whichever order you prefer",
          "Eight of the ten sign questions is a pass",
          "The sign section is optional if you hold an out-of-state licence",
        ],
        correctIndex: 0,
        explanation:
          "Part one is ten traffic sign questions and every one must be right before part two opens. Part two is 30 general knowledge questions, of which you must get 24 correct.",
        context:
          "DMV's exam page gives the counts; the manual gives the pass mark for part two as at least 80 percent, which is the same 24 out of 30. The exam runs on a computer at a DMV customer service centre or in participating high school classrooms, and may be taken only once per business day. Under 18, a failure means waiting a full 15 days.",
        commonlyMissed: true,
        trap:
          "There is no partial credit on part one. Nine out of ten stops the test before the general knowledge section begins.",
        excerptKey: "exam-part-counts",
        sourceLabel: "Virginia DMV - The Knowledge Exam",
        sourceUrl: KNOW,
      },
      {
        id: "va_s6_20",
        topic: "impairment",
        question: "Which hours does Virginia advise avoiding because of drowsy driving risk?",
        choices: ["6 a.m. to 10 a.m.", "Noon to 3 p.m.", "4 p.m. to 8 p.m.", "10 p.m. to 6 a.m."],
        correctIndex: 3,
        explanation:
          "Ten at night to six in the morning - the window where the body's own rhythm works hardest against you.",
        context:
          "The other advice runs alongside it: sleep properly before a long trip, avoid alcohol and heavy meals, watch for medications that impair driving, stop at least every two hours, and nap for 10 to 20 minutes if you need to. Virginia calls drowsy driving a form of impaired driving, and says the usual remedies - caffeine, gum, an open window, a loud radio - do not work.",
        trap:
          "Drowsy driving gets treated as a comfort issue rather than an impairment one. Virginia files it with alcohol and drugs.",
        excerptKey: "drowsy-avoid-hours",
        sourceLabel: "Virginia Driver's Manual - Section 3, Drowsy Driving",
        sourceUrl: HB,
      },
      {
        id: "va_s6_21",
        topic: "rules",
        question: "Another driver begins to overtake you. What should you do?",
        choices: [
          "Speed up so the manoeuvre is over sooner",
          "Move onto the shoulder to give them room",
          "Brake hard to open a gap in front of you",
          "Hold a steady speed, or slow down",
        ],
        correctIndex: 3,
        explanation:
          "Steady or slower. Accelerating turns a completed pass into an aborted one with the other car stranded in the oncoming lane.",
        context:
          "The passing driver has already committed to a distance and a time based on your speed when they started. Their obligations are to check ahead, behind and in the blind spot, signal, accelerate without exceeding the limit, and return right as soon as they can see the front of your car in their mirror. Yours is simply not to move the target.",
        trap:
          "Speeding up is often unconscious - a response to being overtaken rather than a decision. It is the most dangerous thing you can do at that moment.",
        excerptKey: "being-passed",
        sourceLabel: "Virginia Driver's Manual - Section 3, Passing",
        sourceUrl: HB,
      },
      {
        id: "va_s6_22",
        topic: "signs",
        question: "A sign is printed in black on white. What is it telling you?",
        choices: [
          "A regulation you are required by law to obey",
          "A warning about the road ahead",
          "A guide to services at the next exit",
          "A construction work zone",
        ],
        correctIndex: 0,
        explanation:
          "Black on white is the regulatory combination - speed limits, do not pass, no turns. The operation is regulated by law.",
        context:
          "Red with white handles the prohibitions: stop, yield, do not enter, wrong way, the circle-and-slash. Both families impose obligations, which is what separates them from the informational greens, blues and browns and from the yellow and yellow-green warnings.",
        trap:
          "A black-on-white speed sign is enforceable; a yellow sign showing a speed on a curve or ramp is advisory. The colour, not the number, is the tell.",
        excerptKey: "sign-black-white",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "va_s6_23",
        topic: "safety",
        question: "You are carrying a six-year-old. What does Virginia require?",
        choices: [
          "A lap belt is sufficient from age four",
          "A booster becomes optional above 40 pounds",
          "A child safety seat or booster seat",
          "The requirement applies only to the front seat",
        ],
        correctIndex: 2,
        explanation:
          "Under age 8 means a child safety seat or booster, in any vehicle manufactured after 1 January 1968 and wherever the child is sitting.",
        context:
          "The restraint goes in the back seat; the only exception is a vehicle with no back seat, and then only with no passenger air bag or the air bag switched off. Rear-facing is required until at least age two. A first conviction under the child restraint law is a $50 fine, and a second or subsequent one can reach $500.",
        trap:
          "Weight is not the statutory test for the under-8 rule. Age is, with the manufacturer's limits layered on top for the seat itself.",
        excerptKey: "child-seat-under-8",
        sourceLabel: "Virginia Driver's Manual - Section 4, Child Safety Seats",
        sourceUrl: HB,
      },
      {
        id: "va_s6_24",
        topic: "emergencies",
        question: "What can a conviction for aggressive driving cost you in Virginia?",
        choices: [
          "A fine, with no effect on your licence",
          "A licence suspension of ten days up to six months",
          "Automatic revocation for a year",
          "Demerit points but no suspension",
        ],
        correctIndex: 1,
        explanation:
          "Ten days to six months of suspension, at the court's discretion, on top of whatever else is imposed.",
        context:
          "Virginia defines aggressive driving by intent - harassing, intimidating, injuring or obstructing another person while committing one or more traffic offences, such as failing to yield, evading a traffic control device or refusing to give way to an overtaking vehicle. If you meet one, the manual's advice is to stay out of the way, avoid eye contact and ignore the gestures. On an interstate you can report one by dialling #77.",
        trap:
          "The offence is not defined by speed. Weaving, tailgating and passing on the shoulder all count, at any speed.",
        excerptKey: "aggressive-driving-penalty",
        sourceLabel: "Virginia Driver's Manual - Section 3, Aggressive Driving",
        sourceUrl: HB,
      },
      {
        id: "va_s6_25",
        topic: "speed",
        question: "May you drive slower than the posted limit in Virginia?",
        choices: [
          "No - the posted figure is the required speed",
          "No, unless conditions make it unsafe",
          "Yes, at any speed you choose on any road",
          "Yes, but not so slowly that you impede the normal movement of traffic",
        ],
        correctIndex: 3,
        explanation:
          "Slower is allowed, up to the point where you start impeding normal traffic movement. Faster is not allowed at all.",
        context:
          "Virginia also requires you to slow below the posted figure where a school zone or work zone limit is in effect, or where construction or bad weather makes the posted speed unsafe. And if you are moving slower than the traffic around you on a multi-lane road, the right lane is where you belong.",
        trap:
          "Driving well under the limit in the left lane manages to break two rules at once - impeding traffic, and treating the passing lane as a cruising lane.",
        excerptKey: "speed-limit-def",
        sourceLabel: "Virginia Driver's Manual - Section 3, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "va_s6_26",
        topic: "signals",
        question:
          "A police officer is directing traffic and waves you through an intersection where the light is red. What do you do?",
        choices: [
          "Obey the signal - it always takes precedence",
          "Follow whichever instruction is more cautious",
          "Follow the officer's direction",
          "Stop and wait for the officer to leave the intersection",
        ],
        correctIndex: 2,
        explanation:
          "The officer outranks the signal. Virginia tells you to obey all signs and signals unless directed by a police officer, and always to follow the officer's direction.",
        context:
          "The same principle covers the out-of-service signal rule: a dark signal converts the intersection into an all-way stop, but not where an officer or other authorised person is directing traffic, or where portable stop signs have been put out. Flaggers in work zones get the same deference - stopping when signalled by a flagger is on the manual's list of times you must always stop.",
        trap:
          "Doing the more cautious thing feels safe and is not. An officer directing traffic is managing a whole intersection and needs you to move when told.",
        excerptKey: "officer-overrides",
        sourceLabel: "Virginia Driver's Manual - Section 2, Signals, Signs and Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "va_s6_27",
        topic: "parking",
        question: "You are about to open your door into a city street. What does Virginia ask?",
        choices: [
          "Check for cars, bicyclists and pedestrians first",
          "Open quickly, so you are exposed for less time",
          "Only the driver needs to check; passengers are on the kerb side",
          "It is only a concern on one-way streets",
        ],
        correctIndex: 0,
        explanation:
          "Look before you open. The manual names cars, bicyclists and pedestrians specifically.",
        context:
          "The reason cyclists are named is that a door opened into a bike lane leaves the rider no room at all, and Virginia separately prohibits parking in a bike lane for the same reason. Everything about parking is aimed at getting the car and its occupants out of the traffic stream: as far from moving traffic as possible, within one foot of the curb, right side on a two-way street.",
        trap:
          "Passengers are the ones who usually forget, and on a two-way street the passenger door is the kerb side only if you have parked correctly.",
        excerptKey: "exit-vehicle-check",
        sourceLabel: "Virginia Driver's Manual - Section 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "va_s6_28",
        topic: "rightOfWay",
        question:
          "Two vehicles reach an intersection marked All Way at the same moment, on roads that cross at right angles. Who goes first?",
        choices: [
          "The driver on the left",
          "Whichever driver is going straight rather than turning",
          "The driver on the right",
          "Whoever signals their intention first",
        ],
        correctIndex: 2,
        explanation:
          "The driver on the left yields, so the driver on the right proceeds first. It applies only when the arrival really is simultaneous.",
        context:
          "At an intersection signed All Way or 4 Way, every vehicle on every approach stops, and the order of departure is the order of arrival. Two drivers facing one another can often go together, since their paths only conflict if one turns left across the other.",
        trap:
          "Size, speed and signalling change nothing. The tie-break is purely about which side of the intersection you are on.",
        excerptKey: "octagon-tie",
        sourceLabel: "Virginia Driver's Manual - Section 2, Sign Shapes",
        sourceUrl: HB,
      },
      {
        id: "va_s6_29",
        topic: "sharing",
        question: "How much following distance should you leave behind a motorcycle?",
        choices: [
          "An extra second beyond the normal rule, doubled in bad weather",
          "Two seconds is enough at any speed",
          "Closer than normal, so the rider can see you in their mirrors",
          "Exactly the same distance you would leave behind a car",
        ],
        correctIndex: 0,
        explanation:
          "Add a second to whichever band applies, and double it in inclement weather.",
        context:
          "The extra room exists because a motorcycle can stop in a shorter distance than a car and because the rider may swerve for a hazard you cannot see. Virginia's base bands are two seconds under 35 mph, three from 35 to 45 and four from 46 to 70, so behind a motorcycle at highway speed you are looking at five seconds and ten in the wet.",
        trap:
          "Following closer to be visible is exactly backwards. A rider's mirrors show the vehicle behind well before it is close enough to be a threat.",
        excerptKey: "motorcycle-following",
        sourceLabel: "Virginia Driver's Manual - Section 3, Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "va_s6_30",
        topic: "licensing",
        question:
          "For a policy effective on or after 1 January 2025, what are Virginia's minimum liability insurance limits?",
        choices: [
          "$25,000 / $50,000 / $20,000",
          "$50,000 / $100,000 / $25,000",
          "$30,000 / $60,000 / $20,000",
          "$100,000 / $300,000 / $50,000",
        ],
        correctIndex: 1,
        explanation:
          "Fifty thousand for injury or death of one person, one hundred thousand for two or more, and twenty-five thousand for property damage.",
        context:
          "Virginia raised the minimums twice in short order: 30/60/20 for policies effective from 1 January 2022, and 50/100/25 from 1 January 2025. The manual's insurance table still shows the older figures and still describes a $500 uninsured motor vehicle fee, which no longer exists - you now certify that the vehicle is insured. Driving uninsured brings a $600 non-compliance fee and an SR-22 filing for three years.",
        commonlyMissed: true,
        trap:
          "The manual is the wrong source here. Studying its table gives you 30/60/20, which was superseded at the start of 2025.",
        excerptKey: "insurance-min-2025",
        sourceLabel: "Virginia DMV - Insurance Requirements",
        sourceUrl: INS,
      },
    ],
  },
];
