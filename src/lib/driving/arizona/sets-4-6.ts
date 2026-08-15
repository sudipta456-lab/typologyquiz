import type { DrivingTestSet } from "../types";

// Continues the bank begun in sets-1-3.ts; the sourcing note there applies to
// every question here too. Sets 5 and 6 lean hardest on the rules Arizona
// states only in statute - secondary seat belt enforcement, criminal speeding,
// the thirty-foot parking setback, the move-over penalty scale, the $2,000 cap
// on flood rescue liability - because those are exactly the rules a learner who
// read only the manual will not have met.
const HB = "https://apps.azdot.gov/files/mvd/mvd-forms-lib/99-0117.pdf";
const TD =
  "https://azdot.gov/mvd/services/driver-services/teen-drivers/permit-and-license-requirements";
const ARS_701 = "https://www.azleg.gov/ars/28/00701.htm";
const ARS_701_02 = "https://www.azleg.gov/ars/28/00701-02.htm";
const ARS_735 = "https://www.azleg.gov/ars/28/00735.htm";
const ARS_775 = "https://www.azleg.gov/ars/28/00775.htm";
const ARS_855 = "https://www.azleg.gov/ars/28/00855.htm";
const ARS_857 = "https://www.azleg.gov/ars/28/00857.htm";
const ARS_873 = "https://www.azleg.gov/ars/28/00873.htm";
const ARS_909 = "https://www.azleg.gov/ars/28/00909.htm";
const ARS_910 = "https://www.azleg.gov/ars/28/00910.htm";
const ARS_959_01 = "https://www.azleg.gov/ars/28/00959-01.htm";
const ARS_1098 = "https://www.azleg.gov/ars/28/01098.htm";

export const arizonaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Arizona Conditions",
    difficulty: "medium",
    description:
      "The desert-specific half of the manual, mixed with the everyday markings and turn rules: dust storms, flash floods, monsoon wind, work zones, and the emergencies that come with driving a long way between towns.",
    questions: [
      {
        id: "az_s4_01",
        topic: "rules",
        question:
          "A centre lane is bordered by a broken yellow line on the inside and a solid yellow line on the outside. What is that lane for?",
        choices: [
          "Overtaking slower traffic in either direction",
          "Vehicles turning left in either direction",
          "Through traffic during rush hour",
          "Emergency vehicles only",
        ],
        correctIndex: 1,
        explanation:
          "That marking identifies a two-way left turn lane, reserved for left-turning vehicles going either way.",
        context:
          "You signal before entering it, move completely in, and stay alert because drivers coming the other way are using the same lane. It gives you somewhere to slow before turning off the street, and somewhere to wait when turning onto it from a side street or driveway. Arizona bars using it for passing, for through traffic, or as a run-up to merge.",
        trap:
          "Treating it as an acceleration lane to build speed before merging is specifically prohibited, and it is what puts you nose to nose with an oncoming turner.",
        excerptKey: "two-way-left-turn-lane",
        sourceLabel: "Arizona Driver License Manual - Section 3, Two-Way Left Turn Lane",
        sourceUrl: HB,
      },
      {
        id: "az_s4_02",
        topic: "signals",
        question:
          "You are waiting to turn left on a green arrow when the arrow turns steady yellow. You have not yet entered the intersection. What do you do?",
        choices: [
          "Stop and wait for a green arrow",
          "Complete the turn quickly before it goes red",
          "Turn after yielding to oncoming traffic",
          "Reverse out of the turn lane",
        ],
        correctIndex: 0,
        explanation:
          "A steady yellow arrow warns the turn phase is ending. If you have not entered the intersection yet, you stop and wait for the next green arrow.",
        context:
          "If you are already inside the intersection when the arrow turns yellow, the rule flips - continue your turn and clear the intersection safely rather than stopping in it. The same logic governs the round yellow ball: your position at the moment it changes decides whether you stop or clear.",
        trap:
          "A yellow arrow is not a flashing yellow arrow. The flashing version lets you turn after yielding; the steady one tells you the phase is over.",
        excerptKey: "yellow-arrow",
        sourceLabel: "Arizona Driver License Manual - Section 3, Yellow Arrow",
        sourceUrl: HB,
      },
      {
        id: "az_s4_03",
        topic: "safety",
        question:
          "Visibility is dropping fast in a dust storm and you decide to stop. Where does Arizona tell you to stop?",
        choices: [
          "In the emergency lane with hazards flashing",
          "In your travel lane, so following traffic sees you",
          "Completely off the highway, as far right as possible",
          "On the median, away from both directions of traffic",
        ],
        correctIndex: 2,
        explanation:
          "Arizona wants you completely off the highway and as far right as you can get - not in a travel lane and not in the emergency lane.",
        context:
          "The emergency lane is ruled out deliberately, because a driver still moving blind will use it as a guide. Once you are clear of the road, kill your lights, take your foot off the brake, stay belted inside the vehicle and wait for the storm to pass. Arizona's instruction is to do all this early rather than once visibility has already gone.",
        commonlyMissed: true,
        trap:
          "The emergency lane feels like exactly where a stopped car belongs. In a dust storm it is where the next car will be.",
        excerptKey: "dust-storm-not-travel-lane",
        sourceLabel: "Arizona Driver License Manual - Section 5, Dust Storms",
        sourceUrl: HB,
      },
      {
        id: "az_s4_04",
        topic: "rightOfWay",
        question:
          "You are approaching a tow truck stopped on the shoulder with amber lights flashing. What does Arizona's Move Over Law require?",
        choices: [
          "Nothing - the law covers police and ambulances only",
          "Sound your horn as you pass",
          "Stop until the tow truck moves off",
          "Move over one lane, or slow down if moving over is unsafe",
        ],
        correctIndex: 3,
        explanation:
          "Move over one lane to create a margin of space. Where changing lanes is impossible or unsafe, you slow down and proceed with caution instead.",
        context:
          "Arizona's version of the law is unusually broad. It covers any vehicle pulled over with flashing lights - emergency response and law enforcement, but also tow trucks, highway maintenance vehicles and ordinary private cars. It applies on freeways, on other multi-lane highways, and on city roads and streets alike.",
        commonlyMissed: true,
        trap:
          "Most drivers think the duty is limited to police and emergency vehicles. A private car with its hazards on triggers it too.",
        excerptKey: "move-over-law",
        sourceLabel: "Arizona Driver License Manual - Section 3, The Move Over Law",
        sourceUrl: HB,
      },
      {
        id: "az_s4_05",
        topic: "parking",
        question:
          "You are parking on a slope on a desert road with no kerb at all. Which way do the front wheels point?",
        choices: [
          "To the right, so the car would roll away from the centre of the road",
          "To the left, toward the centre of the road",
          "Straight ahead, with the parking brake set",
          "To the right if facing uphill, to the left if facing downhill",
        ],
        correctIndex: 0,
        explanation:
          "With no kerb, the wheels go right in either direction of slope, so a runaway car heads off the road rather than into traffic.",
        context:
          "The no-kerb case is the one people get wrong because it does not depend on which way the slope runs. With a kerb, direction matters: downhill turns the wheels toward the kerb, uphill turns them left with the right front tyre resting against it. Without a kerb there is nothing to catch the car, so you aim it away from other traffic.",
        trap:
          "Applying the downhill-toward-the-kerb rule where there is no kerb points the car straight at the centre of the road.",
        excerptKey: "park-no-curb",
        sourceLabel: "Arizona Driver License Manual - Section 2, Parking on a Hill",
        sourceUrl: HB,
      },
      {
        id: "az_s4_06",
        topic: "speed",
        question:
          "You are cited for speeding in a signed Arizona work zone. What happens to the fine?",
        choices: [
          "It is reduced if no workers were present",
          "It is the same as anywhere else",
          "It is waived on a first offence",
          "It is doubled",
        ],
        correctIndex: 3,
        explanation:
          "Where the signs are posted, Arizona doubles the fine for a speed violation in a work zone.",
        context:
          "The doubled fine exists to protect the people working as much as the drivers passing through. Work zones can be long-term projects with permanent signs or a few hours of portable ones, and workers or construction vehicles may enter the travel lanes at any point. The manual's advice is to stay on high alert and expect to stop or slow suddenly.",
        trap:
          "An empty-looking work zone still carries the doubled fine. What triggers it is the signs being posted, not whether anyone is visibly working.",
        excerptKey: "work-zone-fines-double",
        sourceLabel: "Arizona Driver License Manual - Section 3, Fines double in work zones",
        sourceUrl: HB,
      },
      {
        id: "az_s4_07",
        topic: "sharing",
        question:
          "The motorcycle ahead of you has had its right indicator on for half a mile. What should you assume?",
        choices: [
          "That it may have been left on, since motorcycle signals do not self-cancel",
          "That the rider is about to turn right",
          "That the bike has an electrical fault",
          "That the rider is inviting you to pass",
        ],
        correctIndex: 0,
        explanation:
          "Motorcycle turn signals do not shut off automatically, so a rider may simply have forgotten to cancel one after an earlier turn.",
        context:
          "Arizona warns against reading intent into a rider's signal or position. A rider may shift within the lane to avoid oil, potholes or debris, or to improve their view - not because they are turning. Most car-motorcycle crashes at intersections come from a driver turning into the rider's path, so make sure you know what a rider is doing before you move into it.",
        trap:
          "Pulling out because the signal says the bike is turning off is a common cause of exactly the crash Arizona describes.",
        excerptKey: "motorcycle-signals",
        sourceLabel: "Arizona Driver License Manual - Section 4, Sharing the Road with a Motorcycle",
        sourceUrl: HB,
      },
      {
        id: "az_s4_08",
        topic: "impairment",
        question: "At what alcohol concentration does Arizona's Extreme DUI category begin?",
        choices: ["0.08", "0.10", "0.12", "0.15"],
        correctIndex: 3,
        explanation:
          "Extreme DUI starts at 0.15. A first offence there means at least 30 consecutive days in jail and a fine of no less than $2,500.",
        context:
          "Arizona grades DUI in tiers. Ordinary DUI starts at 0.08 and a first offence carries at least ten consecutive days in jail, a 90-day suspension and a fine of at least $1,250. Extreme DUI starts at 0.15. At 0.20 or higher the first-offence jail term rises to at least 45 days with no suspended sentence available.",
        trap:
          "The tiers are not just bigger fines - the jail time is mandatory minimums, and at 0.20 a suspended sentence stops being an option.",
        excerptKey: "extreme-dui-015",
        sourceLabel: "Arizona Driver License Manual - Section 5, Extreme DUI",
        sourceUrl: HB,
      },
      {
        id: "az_s4_09",
        topic: "signs",
        question:
          "A flashing arrow panel on the back of a truck points left. What does it mean?",
        choices: [
          "The lane to your left is closed",
          "Slow down and prepare to merge in the direction of the arrow",
          "Stop and wait for a flagger",
          "The truck is turning left",
        ],
        correctIndex: 1,
        explanation:
          "Arrow panels give advance warning to move into another lane. You slow down and merge the way the arrow points.",
        context:
          "Arrow panels run day and night as part of the same work-zone toolkit as cones, drums, barricades and electronic message signs. Electronic message boards carry warnings about construction, road closures, special directions and weather, including ADOT's wrong-way driver alerts on Phoenix freeways.",
        trap:
          "Reading the panel as the truck's own turn signal means you stay in a lane that is about to end.",
        excerptKey: "arrow-panels",
        sourceLabel: "Arizona Driver License Manual - Section 3, Flashing Arrow Panels",
        sourceUrl: HB,
      },
      {
        id: "az_s4_10",
        topic: "rules",
        question:
          "A single solid white line runs along the right edge of the roadway. When may you cross it?",
        choices: [
          "In an emergency or to avoid a road hazard",
          "Any time, provided you signal first",
          "Only where the shoulder is paved",
          "Never, under any circumstance",
        ],
        correctIndex: 0,
        explanation:
          "The solid white edge line is crossed only in an emergency or to avoid a hazard on the road.",
        context:
          "Solid white lines are also used for turn lanes and to discourage lane changes near intersections. The one routine exception Arizona names is merging into and out of an HOV lane, where crossing the solid white is permitted. A double solid white line, by contrast, may not be crossed at all.",
        trap:
          "Drifting onto the shoulder to let someone past feels courteous, but the edge line is not a lane and crossing it without cause is a violation.",
        excerptKey: "solid-white-edge",
        sourceLabel: "Arizona Driver License Manual - Section 3, Solid White Lines",
        sourceUrl: HB,
      },
      {
        id: "az_s4_11",
        topic: "emergencies",
        question: "Your car has anti-lock brakes and you need to stop hard. What do you do?",
        choices: [
          "Pump the pedal rapidly",
          "Pull the parking brake at the same time",
          "Press and hold - you do not pump anti-lock brakes",
          "Press, release, then press again",
        ],
        correctIndex: 2,
        explanation:
          "Arizona is direct about it: do not pump anti-lock brakes. Pumping is what you do only in a car that does not have them.",
        context:
          "Pumping is the fallback for total brake failure in a vehicle without ABS - rapid pumping may build enough pressure to stop you. If that fails, apply the parking brake slowly while holding the release so you can back off if the rear wheels lock, and shift down while looking for somewhere safe to stop.",
        trap:
          "Drivers who learned to pump the brakes on ice keep doing it on ABS, which defeats the system that is already doing it far faster than a foot can.",
        excerptKey: "abs-do-not-pump",
        sourceLabel: "Arizona Driver License Manual - Section 6, Brake Failure",
        sourceUrl: HB,
      },
      {
        id: "az_s4_12",
        topic: "licensing",
        question:
          "You hold a Class G graduated licence issued five weeks ago. When may you not drive?",
        choices: [
          "Between 10pm and 6am on any night",
          "Between midnight and 5am, unless an exception applies",
          "Between 11pm and 5am at weekends only",
          "At any time after dark",
        ],
        correctIndex: 1,
        explanation:
          "Arizona's curfew for the first six months on a graduated licence runs midnight to 5am, with named exceptions.",
        context:
          "You may still drive in those hours with a parent or legal guardian holding a Class A, B, C or D licence in the front passenger seat, or when driving directly to or from a sanctioned school activity, your place of employment, a sanctioned religious activity or a family emergency. The restriction lifts after six months on the licence.",
        commonlyMissed: true,
        trap:
          "Neighbouring states start their teen curfews at 11pm or even 10pm. Arizona's starts at midnight, and it runs on every night of the week.",
        excerptKey: "gdl-curfew-teen",
        sourceLabel: "Arizona MVD - Teen Driver Guide to Class G Permit and License",
        sourceUrl: TD,
      },
      {
        id: "az_s4_13",
        topic: "safety",
        question:
          "The road surface has turned slippery. How does Arizona want you to change your following distance?",
        choices: [
          "Add one second",
          "Keep three seconds but brake earlier",
          "Double it, to six seconds or more",
          "Halve your speed instead of changing the gap",
        ],
        correctIndex: 2,
        explanation:
          "Double the gap. Arizona asks for six seconds or more on slippery roads to give you room to adjust speed or stop.",
        context:
          "Six seconds is the recurring wet-and-slick number: heavy rain calls for at least six, and snow or ice increases the distance you need by at least six seconds. Behind a large vehicle that blocks your view of the road ahead, Arizona wants extra distance again so you can see around it.",
        trap:
          "Braking earlier does not create distance you never had. The gap is what buys the time; brake timing only spends it.",
        excerptKey: "slippery-6-seconds",
        sourceLabel: "Arizona Driver License Manual - Section 5, Braking and Stopping",
        sourceUrl: HB,
      },
      {
        id: "az_s4_14",
        topic: "signals",
        question:
          "You approach a pedestrian-activated crossing where all the lights are blank. What does that mean?",
        choices: [
          "The beacon is out of service and you must stop",
          "Proceed with caution if the crossing is clear",
          "Stop and wait ten seconds before proceeding",
          "Treat it as a four-way stop",
        ],
        correctIndex: 1,
        explanation:
          "Blank means nobody has activated the beacon. You proceed with caution provided the crossing is clear.",
        context:
          "The blank phase is the resting state of these crossings, not a fault. The active sequence runs flashing yellow when someone presses the button, solid yellow to prepare to stop, solid red while a pedestrian is in the crossing, then flashing red - stop, then go once they have cleared your half of the road.",
        trap:
          "Dark lights on an overhead beacon look like a broken signal, which Arizona treats as a four-way stop. A blank pedestrian beacon is not that.",
        excerptKey: "hawk-lights-blank",
        sourceLabel: "Arizona Driver License Manual - Section 3, Pedestrian Activated Signals",
        sourceUrl: HB,
      },
      {
        id: "az_s4_15",
        topic: "rightOfWay",
        question:
          "You are travelling the opposite way from a stopped school bus on a road split by a raised concrete median. Must you stop?",
        choices: [
          "No - a divided roadway removes the duty for opposing traffic",
          "Yes, in every case",
          "Only if children are visible",
          "Only if you are in the lane nearest the median",
        ],
        correctIndex: 0,
        explanation:
          "On a genuinely divided roadway, traffic travelling the opposite way does not have to stop for a school bus.",
        context:
          "Divided means a physical barrier - a fence, kerbing or a separation of the pavement. Arizona says outright that roadway striping by itself does not divide a road, and the statute adds that lanes on either side of a two-way left turn lane are not separate roadways either. The manual still urges extreme care near any stopped bus, because children dart out.",
        commonlyMissed: true,
        trap:
          "A painted median or a centre turn lane looks like a divider and is not one. If nothing physical separates you from the bus, you stop.",
        excerptKey: "school-bus-divided",
        sourceLabel: "Arizona Driver License Manual - Section 3, School Buses and School Zones",
        sourceUrl: HB,
      },
      {
        id: "az_s4_16",
        topic: "rules",
        question:
          "How close to a street crossing does Arizona's no-passing rule reach?",
        choices: [
          "50 feet",
          "75 feet",
          "Within 100 feet",
          "There is no fixed distance",
        ],
        correctIndex: 2,
        explanation:
          "One hundred feet. The same figure covers a railway crossing, and a bridge, tunnel or underpass where your view is blocked.",
        context:
          "One hundred feet is the number that ties the do-not-pass list together. It sits alongside the two visibility rules - no passing where a solid line runs on your side, and none approaching a curve or hillcrest where you cannot see far enough ahead to be sure the pass is safe.",
        trap:
          "The rule counts distance from the crossing, not from the intersection you can see. At 45 mph a hundred feet passes in a second and a half.",
        excerptKey: "no-pass-street-crossing",
        sourceLabel: "Arizona Driver License Manual - Section 2, Do Not Pass",
        sourceUrl: HB,
      },
      {
        id: "az_s4_17",
        topic: "speed",
        question: "What speed are Arizona roundabouts designed for?",
        choices: [
          "10 mph",
          "15 to 20 mph",
          "25 to 30 mph",
          "The posted limit of the approach road",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen to twenty miles per hour. That is the design speed, so you slow to it on approach rather than at the yield line.",
        context:
          "You slow on approach, enter to the right of the central island, take a gap and keep moving once inside. Yield to traffic already circulating, and to large vehicles entering at the same time as you. If you miss your exit, carry on round rather than stopping or reversing.",
        trap:
          "Arriving at the yield line still doing the approach limit means you either stop dead or enter far too fast for the circle geometry.",
        excerptKey: "roundabout-speed",
        sourceLabel: "Arizona Driver License Manual - Section 2, Roundabouts",
        sourceUrl: HB,
      },
      {
        id: "az_s4_18",
        topic: "sharing",
        question:
          "You are about to pass a cyclist who has not noticed you. What does Arizona say about sounding your horn?",
        choices: [
          "Sound it briefly as a courtesy warning",
          "Sound it only at night",
          "It is unsafe - it may startle the rider into a crash",
          "Sound it twice, then pass",
        ],
        correctIndex: 2,
        explanation:
          "Arizona calls it unsafe. A horn can startle a rider badly enough to cause the crash you were trying to avoid.",
        context:
          "The safe approach is the three-foot minimum and patience: wait until you have the room, then pass wide. Beyond that, dim your headlights at night as a courtesy to riders, expect a cyclist to swerve for hazards, and remember they may legally move left to turn, to pass, or where the lane is too narrow to share.",
        trap:
          "The horn feels like the responsible warning. On a bicycle at close range it is an input the rider cannot absorb safely.",
        excerptKey: "bicycle-no-honking",
        sourceLabel: "Arizona Driver License Manual - Section 4, Sharing the Road with a Bicyclist",
        sourceUrl: HB,
      },
      {
        id: "az_s4_19",
        topic: "parking",
        question:
          "Your passenger holds a disabled parking placard but is not with you today. May you use an accessible bay?",
        choices: [
          "Yes, if the placard is displayed",
          "Yes, for up to thirty minutes",
          "Yes, if you are collecting something for them",
          "No - the bay may only be used when transporting the person the placard was issued to",
        ],
        correctIndex: 3,
        explanation:
          "The placard permits the space only when the person it was issued to is being transported. Anyone else parking there faces a fine.",
        context:
          "Arizona ties the entitlement to the person, not the vehicle. The space is reserved for a vehicle displaying a valid placard or plate bearing the international symbol of access, and only while carrying the person who was issued it. The same symbol on a licence plate carries the same condition.",
        trap:
          "Having the placard in the car is only half the test. The person it belongs to has to be in the car too.",
        excerptKey: "disabled-parking-placard",
        sourceLabel: "Arizona Driver License Manual - Section 2, International Symbol of Access",
        sourceUrl: HB,
      },
      {
        id: "az_s4_20",
        topic: "safety",
        question:
          "A large truck is overtaking you on the left in strong crosswinds. What does Arizona recommend?",
        choices: [
          "Accelerate to shorten the time alongside",
          "Move toward the centre line to keep clear of the shoulder",
          "Brake firmly until it has passed",
          "Move as far right in your lane as possible and slow down",
        ],
        correctIndex: 3,
        explanation:
          "Move right within your lane and reduce speed. Once the truck is by, accelerate gently so anything you are towing keeps tracking straight.",
        context:
          "Big vehicles throw gusts as they pass, and Arizona notes you may need steering corrections when meeting trucks or buses even without a crosswind. Wind is worst for campers, large recreational vehicles, lightweight cars and anything towing a trailer, where a gust can start a sway or even a jackknife.",
        trap:
          "Speeding up to get the manoeuvre over with keeps you in the turbulent air longer and gives you less margin to correct.",
        excerptKey: "wind-passing-truck",
        sourceLabel: "Arizona Driver License Manual - Section 5, Wind",
        sourceUrl: HB,
      },
      {
        id: "az_s4_21",
        topic: "impairment",
        question:
          "Where may an open container of liquor legally be carried in a car on an Arizona public road?",
        choices: [
          "In the glovebox, if it is closed",
          "In a cupholder in the back seat",
          "In the boot, or behind the last upright seat where there is no boot",
          "Anywhere, as long as the driver has not been drinking",
        ],
        correctIndex: 2,
        explanation:
          "The boot is outside the passenger compartment, and so is the area behind the last upright seat in a vehicle with no boot.",
        context:
          "Arizona defines the passenger compartment broadly, including unlocked compartments and portable containers within reach of the driver or a passenger. That sweeps in the glovebox and the door pockets. Riders in a bus, limousine, taxi or the living area of a motor home are exempt from the rule altogether.",
        commonlyMissed: true,
        trap:
          "A closed glovebox is not a safe place - it is an unlocked compartment within reach, which is precisely what the definition captures.",
        excerptKey: "open-container-trunk",
        sourceLabel: "Arizona Driver License Manual - Section 5, Open Container",
        sourceUrl: HB,
      },
      {
        id: "az_s4_22",
        topic: "signals",
        question:
          "The light turns yellow and you accelerate to get through before it changes. How does Arizona treat that?",
        choices: [
          "Acceptable if you clear the intersection on yellow",
          "Acceptable outside school hours",
          "A civil matter between you and the following driver",
          "Illegal, and a cause of crashes",
        ],
        correctIndex: 3,
        explanation:
          "Arizona describes speeding up to beat the light as illegal outright, and as something that could cause a crash.",
        context:
          "The yellow rule turns on your position. Not yet in the intersection means come to a safe stop; already in it means clear it safely. Accelerating is outside both. Running the red that follows brings a mandatory Traffic Survival School order on conviction, plus points on your record.",
        trap:
          "People treat yellow as a permission with a countdown attached. The manual treats accelerating on yellow as an offence in itself.",
        excerptKey: "beat-the-light",
        sourceLabel: "Arizona Driver License Manual - Section 3, Signal Lights",
        sourceUrl: HB,
      },
      {
        id: "az_s4_23",
        topic: "rules",
        question:
          "Some Arizona travel lanes carry traffic one way at certain times and the other way at others. How are they usually marked?",
        choices: [
          "By a solid white line on both sides",
          "By double-dashed yellow lines",
          "By green arrows painted on the pavement",
          "By a raised median that retracts",
        ],
        correctIndex: 1,
        explanation:
          "Double-dashed yellow lines mark a reversible lane. Which direction it serves depends on the time of day.",
        context:
          "Before using one you check the signs at the roadside or overhead to see which lanes you may use at that moment. Reversible lanes sit alongside the other special markings Arizona uses - the two-way left turn lane with its broken-inside, solid-outside yellow pair, and the diamond markings that identify an HOV lane.",
        trap:
          "Double-dashed yellow is easy to confuse with the two-way left turn lane's marking, which pairs a broken line with a solid one.",
        excerptKey: "reversible-lanes",
        sourceLabel: "Arizona Driver License Manual - Section 3, Reversible Lanes",
        sourceUrl: HB,
      },
      {
        id: "az_s4_24",
        topic: "emergencies",
        question:
          "A deer is standing at the roadside ahead, not yet on the road. What does Arizona advise?",
        choices: [
          "Sound your horn to move it away",
          "Flash your high beams repeatedly",
          "Slow down and do not sound your horn",
          "Accelerate past before it can react",
        ],
        correctIndex: 2,
        explanation:
          "Arizona says specifically not to use the horn on an animal that is not yet on the road - it may startle the animal into running in front of you.",
        context:
          "If an animal is already on the road, slow as much as you can and manoeuvre to avoid a direct hit without losing control of the car. Wildlife appears in unexpected places, and livestock gets onto Arizona roads through open gates and cut fences. An animal that is a hazard to traffic is worth a call to 911.",
        commonlyMissed: true,
        trap:
          "The horn is the standard advice in several other states. Arizona reverses it for an animal still off the road.",
        excerptKey: "animals-no-horn",
        sourceLabel: "Arizona Driver License Manual - Section 6, Animals on the Road",
        sourceUrl: HB,
      },
      {
        id: "az_s4_25",
        topic: "signs",
        question:
          "You break down on a remote Arizona state highway. Why does the manual tell you to note the nearest mile post?",
        choices: [
          "It tells emergency services and roadside assistance where you are",
          "It sets the speed limit for that stretch",
          "It shows how far to the next fuel stop",
          "It identifies which county maintains the road",
        ],
        correctIndex: 0,
        explanation:
          "Mile posts fix your position. Arizona tells you to note the route and your distance from the nearest post if you have to stop.",
        context:
          "Arizona is one of a small number of states where every state highway carries mileage markers, set about a mile apart and roughly two feet off the right shoulder. They are the reference point for a crash, a mechanical failure or running out of fuel. Alongside them, ADOT runs the 511 phone line and az511.com for road conditions and closures.",
        trap:
          "Describing your location by the last town you passed is close to useless on a highway where towns are fifty miles apart.",
        excerptKey: "mile-posts",
        sourceLabel: "Arizona Driver License Manual - Section 3, Mile Posts",
        sourceUrl: HB,
      },
      {
        id: "az_s4_26",
        topic: "rightOfWay",
        question:
          "A funeral procession led by an escort vehicle showing a flashing red light is crossing ahead of you. What is your duty?",
        choices: [
          "Proceed if the escort has already passed",
          "Follow the procession through the intersection",
          "Yield the right-of-way to the procession",
          "Yield only if you face a stop sign",
        ],
        correctIndex: 2,
        explanation:
          "Arizona requires you to yield to any vehicle that is part of a funeral procession being led by an escort vehicle flashing a red or blue light.",
        context:
          "The escort's flashing light is what identifies the procession as one entitled to the right-of-way. The rest of the procession follows on the escort's authority, so the duty to yield continues through the whole line and not just past the lead vehicle.",
        trap:
          "Slotting into the gap once the escort has gone by breaks up a procession that still holds the right-of-way.",
        excerptKey: "funeral-procession",
        sourceLabel: "Arizona Driver License Manual - Section 3, Funerals",
        sourceUrl: HB,
      },
      {
        id: "az_s4_27",
        topic: "safety",
        question:
          "Arizona's manual describes a coin test for tyre tread. What are you looking for?",
        choices: [
          "Part of Lincoln's head covered by the tread",
          "The whole coin disappearing into the groove",
          "The coin standing upright without falling",
          "The date on the coin still readable",
        ],
        correctIndex: 0,
        explanation:
          "Put a penny into the shallowest groove with Lincoln's head down. If part of his head is not covered by the tread, the tyres need replacing.",
        context:
          "Arizona flags tyre maintenance harder than most states because the conditions are harder on rubber - intense summer heat, monsoon storms and snow and ice in the high country. The other self-check is pressure, using the recommended psi normally shown on the door jamb rather than the number moulded into the tyre.",
        trap:
          "The under-inflated or worn tyre is also the one that hydroplanes at well under the 50 mph the manual quotes for heavy rain.",
        excerptKey: "penny-test",
        sourceLabel: "Arizona Driver License Manual - Section 1, Tire Safety",
        sourceUrl: HB,
      },
      {
        id: "az_s4_28",
        topic: "rules",
        question: "How should you position the car as you prepare for a right turn?",
        choices: [
          "In the centre of the lane, to keep options open",
          "Close to the right kerb or edge of the road, without swinging wide",
          "Swing left first so the turn is smoother",
          "Straddle the lane line to signal your intention",
        ],
        correctIndex: 1,
        explanation:
          "Stay close to the right kerb or road edge, and do not swing wide before or during the turn.",
        context:
          "The rule closes the gap a cyclist or motorcyclist could slip into on your inside. Arizona applies its turning rules at every location, including driveways and alleys, and asks you to signal, slow, and check for pedestrians, mopeds and bicycles as you turn. Unless signs say otherwise you finish in the right lane of the road you enter.",
        trap:
          "Drivers copy the wide swing they see trucks make. Trucks need it because of their length; a car swinging wide just opens a gap on its right.",
        excerptKey: "right-turn-close-curb",
        sourceLabel: "Arizona Driver License Manual - Section 3, Right Turns",
        sourceUrl: HB,
      },
      {
        id: "az_s4_29",
        topic: "sharing",
        question:
          "A tractor ahead of you on a rural Arizona road pulls to the left. What is the most likely explanation?",
        choices: [
          "It is turning left",
          "It is pulling over to let you pass",
          "It is avoiding a pothole",
          "It is setting up for a wide right turn",
        ],
        correctIndex: 3,
        explanation:
          "Farm machinery often has to pull left before turning right, because the turn is too wide to take from the right edge.",
        context:
          "Arizona notes that farm machinery typically travels at 25 mph or less, may take up more than one lane, and may have no signals at all. It also has a legal right to be on the road. The safe response is a long following distance that keeps your view of the road ahead open.",
        trap:
          "Reading the leftward move as a left turn and passing on the right puts you exactly where the machine is about to be.",
        excerptKey: "farm-machinery",
        sourceLabel: "Arizona Driver License Manual - Section 4, Slow Moving Vehicles",
        sourceUrl: HB,
      },
      {
        id: "az_s4_30",
        topic: "speed",
        question:
          "Arizona statute sets a duty about speed that applies even when you are under every posted limit. What is it?",
        choices: [
          "You must drive at the average speed of surrounding traffic",
          "You may not drive faster than is reasonable and prudent for the conditions",
          "You must reduce speed by 10 mph in any rain",
          "You must drive at least 10 mph below the limit at night",
        ],
        correctIndex: 1,
        explanation:
          "The basic speed rule: never faster than is reasonable and prudent for the circumstances, conditions and hazards existing at the time.",
        context:
          "The statute names the situations where the maximum drops automatically - approaching and crossing intersections and railway crossings, going round curves, approaching a hillcrest, travelling a narrow or winding road, and where weather or road conditions create a special hazard. It also requires you to control speed so as to avoid colliding with anything on or entering the road.",
        trap:
          "Being at or below the sign is no defence when conditions called for less. The posted number is a ceiling, not a safe harbour.",
        excerptKey: "reasonable-and-prudent",
        sourceLabel: "Arizona Revised Statutes 28-701 - Reasonable and prudent speed",
        sourceUrl: ARS_701,
      },
      {
        id: "az_s4_31",
        topic: "licensing",
        question: "How long is an Arizona motorcycle instruction permit valid?",
        choices: [
          "12 months, renewable once",
          "7 months, renewable only once in a 24-month period",
          "6 months, non-renewable",
          "24 months, renewable annually",
        ],
        correctIndex: 1,
        explanation:
          "Seven months, and it can be renewed only one time within any twenty-four month period.",
        context:
          "That makes it shorter than the graduated or operator permit, which runs twelve months. A motorcycle permit also bars you from carrying passengers and from riding on freeways or interstates between sunset and sunrise, or whenever there is not enough light to see people or vehicles clearly at 500 feet. You can apply for one from 15 years 6 months, and a motorcycle licence itself from 16.",
        trap:
          "Assuming the motorcycle permit matches the car permit's twelve months leaves you riding on an expired one.",
        excerptKey: "motorcycle-permit-validity",
        sourceLabel: "Arizona Driver License Manual - Classes of Licenses, Instruction Permit",
        sourceUrl: HB,
      },
      {
        id: "az_s4_32",
        topic: "safety",
        question:
          "Water is running across a desert wash on the road ahead after a monsoon storm. What does Arizona tell you to do?",
        choices: [
          "Cross slowly in low gear",
          "Cross only if another vehicle has just made it through",
          "Estimate the depth and cross if it is under a foot",
          "Do not cross flooded washes",
        ],
        correctIndex: 3,
        explanation:
          "Arizona's instruction is flat: do not cross flooded washes. Water can stall the engine, hide potholes and carry the car downstream.",
        context:
          "Heavy rain causes flash floods in Arizona washes with very little warning. Where you do have to drive through standing water, do it at a slow steady speed, and never let two vehicles meet in deep water - one goes entirely through before the other starts. Check the brakes after you are out, and dry them by accelerating gently while holding light pressure on the pedal.",
        commonlyMissed: true,
        trap:
          "Watching another vehicle get through proves nothing about depth or current, and the second car meeting the first in deep water is exactly what Arizona warns against.",
        excerptKey: "flash-floods",
        sourceLabel: "Arizona Driver License Manual - Section 5, Rain",
        sourceUrl: HB,
      },
      {
        id: "az_s4_33",
        topic: "parking",
        question:
          "When may you legally stop on the shoulder of an Arizona freeway?",
        choices: [
          "In an emergency, or in a specially provided area such as a rest area",
          "Any time, provided your hazards are on",
          "To let a passenger take a photograph",
          "Whenever traffic ahead has stopped",
        ],
        correctIndex: 0,
        explanation:
          "Parking on the freeway shoulder is prohibited except in an emergency; otherwise you stop only in areas provided for it.",
        context:
          "The freeway restrictions run together: no crossing the median, no U-turns, no lane changes without signalling, no entering except at an on-ramp, no reversing if you miss an exit. If you do need to stop, pull as far onto the right shoulder as possible, avoid stopping near ramps, and signal for help with your flashers or by raising the bonnet.",
        trap:
          "The shoulder is wide and looks like provision for stopping. Arizona treats it as emergency-only, and parking there otherwise is an offence.",
        excerptKey: "freeway-no-shoulder-parking",
        sourceLabel: "Arizona Driver License Manual - Section 2, Other Freeway Restrictions",
        sourceUrl: HB,
      },
      {
        id: "az_s4_34",
        topic: "impairment",
        question:
          "What has to happen before Arizona can cite you for aggressive driving?",
        choices: [
          "Any single dangerous manoeuvre",
          "Two speeding tickets within a year",
          "A collision resulting from your driving",
          "Speeding plus two other listed violations in one continuous period of driving",
        ],
        correctIndex: 3,
        explanation:
          "Aggressive driving stacks: you must exceed the posted limit and commit at least two of the listed violations in a single continuous period of driving, presenting an immediate hazard.",
        context:
          "The listed violations are failing to obey traffic control signs or signals, passing on the right, an unsafe lane change, following too closely, and failing to yield to emergency vehicles. A first conviction means Traffic Survival School and a possible 30-day suspension; a second within 24 months is a Class 1 misdemeanour with a 12-month suspension.",
        commonlyMissed: true,
        trap:
          "One bad manoeuvre is not aggressive driving in Arizona. The offence is deliberately built as a stack, which is why people misread what it covers.",
        excerptKey: "aggressive-driving-definition",
        sourceLabel: "Arizona Driver License Manual - Section 5, Road Rage and Aggressive Driving",
        sourceUrl: HB,
      },
      {
        id: "az_s4_35",
        topic: "signals",
        question: "Who is bound by traffic signal lights in Arizona?",
        choices: [
          "Motorists only",
          "Motorists and motorcyclists",
          "Motorists, pedestrians, cyclists and moped riders alike",
          "Everyone except cyclists in a marked bike lane",
        ],
        correctIndex: 2,
        explanation:
          "Arizona applies signal lights to pedestrians and to bicycle and moped riders as much as to drivers.",
        context:
          "That symmetry runs through the manual. Cyclists obey the same traffic laws as drivers and hold the right-of-way under the same conditions. The one thing that outranks a signal for any of them is a police officer directing traffic.",
        trap:
          "A cyclist rolling through a red is breaking the same rule you would be. The signal does not stop applying because the vehicle has two wheels.",
        excerptKey: "signals-apply-to-all",
        sourceLabel: "Arizona Driver License Manual - Section 3, Signal Lights",
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
      "Rules Arizona states only in statute, thresholds that stack, and the figures the manual gives once and never repeats - the material that separates a pass from a near miss.",
    questions: [
      {
        id: "az_s5_01",
        topic: "safety",
        question:
          "Can an Arizona officer pull you over solely because you are not wearing a seat belt?",
        choices: [
          "No - a belt violation needs another suspected offence to justify the stop",
          "Yes, at any time",
          "Yes, but only in a school zone",
          "Yes, if a passenger under 16 is also unbelted",
        ],
        correctIndex: 0,
        explanation:
          "Arizona's adult belt law is secondary enforcement. An officer may not stop or cite you for it unless there is reasonable cause to believe another motor vehicle law was broken.",
        context:
          "The statute goes further than the stop rule. A belt violation carries a maximum civil penalty of $10, it may not be used to suspend or revoke a licence, courts do not send the abstract to MVD, and insurers may not treat it as a violation when setting rates. The child restraint rules and the duty to belt passengers under sixteen are separate and stricter.",
        commonlyMissed: true,
        trap:
          "The manual never mentions any of this, so a learner who studied only the manual assumes belts are primary enforcement as in most neighbouring states.",
        excerptKey: "seatbelt-secondary",
        sourceLabel: "Arizona Revised Statutes 28-909 - Vehicle restraints required",
        sourceUrl: ARS_909,
      },
      {
        id: "az_s5_02",
        topic: "rules",
        question:
          "A school bus is stopped with its lights flashing on the far side of a road whose only central feature is a two-way left turn lane. Must you stop?",
        choices: [
          "No - the turn lane divides the roadway",
          "Yes - a two-way left turn lane does not make the roadway divided",
          "Only if you are in the lane next to the turn lane",
          "Only during posted school hours",
        ],
        correctIndex: 1,
        explanation:
          "Arizona statute says lanes on either side of a two-way left turn lane are not separate roadways, so the exemption for divided roads does not apply.",
        context:
          "The exemption for opposing traffic requires a genuinely divided roadway - a fence, kerbing or a separation of the pavement. The manual adds that striping alone does not divide a road. Passing a stopped school bus carries a minimum civil penalty of $250 for a first offence, rising to $750 and a suspension of up to six months for a second inside thirty-six months.",
        commonlyMissed: true,
        trap:
          "A centre turn lane is wide, painted on both sides and feels like a median. Legally it is none of those things.",
        excerptKey: "school-bus-turn-lane-not-divided",
        sourceLabel: "Arizona Revised Statutes 28-857 - Overtaking and passing school bus",
        sourceUrl: ARS_857,
      },
      {
        id: "az_s5_03",
        topic: "speed",
        question:
          "You are clocked at 66 mph on a road posted at 45. Under Arizona statute, what have you committed?",
        choices: [
          "An ordinary civil speeding violation",
          "Criminal speeding - more than 20 mph over the posted limit",
          "Nothing, if traffic was flowing at that speed",
          "Reckless driving automatically",
        ],
        correctIndex: 1,
        explanation:
          "More than twenty over the posted limit is excessive speed under Arizona statute, and that is a class 3 misdemeanour rather than a ticket.",
        context:
          "The excessive-speed statute has three limbs: over 35 mph approaching a school crossing, more than 20 mph over the posted limit in a business or residential district (or over 45 mph where nothing is posted), and more than 20 mph over the posted limit anywhere else. Where the criminal charge is brought, the civil speeding complaint for the same conduct cannot also be issued.",
        commonlyMissed: true,
        trap:
          "The driver manual never mentions criminal speeding at all, so people meet the threshold for the first time in court.",
        excerptKey: "criminal-speed-20-over",
        sourceLabel: "Arizona Revised Statutes 28-701.02 - Excessive speeds",
        sourceUrl: ARS_701_02,
      },
      {
        id: "az_s5_04",
        topic: "rightOfWay",
        question:
          "What is the civil penalty for a first violation of Arizona's rule on passing a stationary vehicle with flashing lights?",
        choices: ["$100", "$150", "$200", "$275"],
        correctIndex: 3,
        explanation:
          "Two hundred and seventy-five dollars for a first violation, rising to $500 for a second within five years and $1,000 for a third.",
        context:
          "The underlying duty is the move-over rule: on a road with at least four lanes and two going your way, change into a lane not adjacent to the stopped vehicle; where that is impossible or unsafe, slow down and keep a safe speed for the conditions. It applies to any vehicle displaying flashing or warning lights, private cars included.",
        trap:
          "The penalty scale counts back five years, so a violation from four years ago still triples the cost of today's.",
        excerptKey: "move-over-penalty",
        sourceLabel: "Arizona Revised Statutes 28-775 - Passing stationary vehicles",
        sourceUrl: ARS_775,
      },
      {
        id: "az_s5_05",
        topic: "impairment",
        question: "Which of these makes a DUI an Aggravated DUI in Arizona?",
        choices: [
          "A first offence with a BAC over 0.15",
          "Refusing a breath test",
          "Committing a DUI while your driving privilege is suspended or revoked",
          "Any DUI in a work zone",
        ],
        correctIndex: 2,
        explanation:
          "Driving under the influence while suspended or revoked is one of the aggravating circumstances, alongside a third DUI in seven years and a DUI with a passenger under fifteen.",
        context:
          "Aggravated DUI also catches a driver who is subject to a certified ignition interlock requirement and commits a DUI or extreme DUI. The penalty is prison for up to two years and revocation of the licence for one year, on top of alcohol screening, education or treatment and an interlock requirement on any vehicle you drive.",
        trap:
          "A high BAC by itself makes it Extreme DUI, not Aggravated. The aggravating factors are about circumstances rather than the reading.",
        excerptKey: "aggravated-dui",
        sourceLabel: "Arizona Driver License Manual - Section 5, Aggravated DUI",
        sourceUrl: HB,
      },
      {
        id: "az_s5_06",
        topic: "parking",
        question:
          "Arizona statute sets a parking setback the driver manual's own list leaves out. How close to a stop sign or traffic signal may you park?",
        choices: [
          "Ten feet",
          "Fifteen feet",
          "Twenty feet",
          "No closer than thirty feet on the approach",
        ],
        correctIndex: 3,
        explanation:
          "Thirty feet on the approach to a flashing beacon, stop sign, yield sign or traffic signal at the side of the road.",
        context:
          "The statute's list is longer than the manual's. Alongside the thirty-foot setback it adds twenty feet from a fire station driveway entrance, seventy-five feet opposite a posted fire station entrance, and eight feet six inches from the centre of a railway track. The manual's figures - fifteen feet from a hydrant, twenty from a crosswalk, fifty from a railway crossing - are a subset.",
        commonlyMissed: true,
        trap:
          "A learner who memorised the manual's parking list has never seen the thirty-foot rule, and a parked car hiding a stop sign is exactly what it exists to prevent.",
        excerptKey: "park-stop-sign-30",
        sourceLabel: "Arizona Revised Statutes 28-873 - Stopping, standing or parking prohibitions",
        sourceUrl: ARS_873,
      },
      {
        id: "az_s5_07",
        topic: "sharing",
        question:
          "A motorcycle is lane filtering past stopped traffic on a street posted at 40 mph. What is the maximum speed the motorcycle may travel?",
        choices: [
          "25 mph",
          "20 mph",
          "15 mph",
          "The posted limit of 40 mph",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen miles per hour is the motorcycle's own ceiling while filtering, regardless of what the street is posted at.",
        context:
          "Filtering in Arizona requires all three conditions at once: the street divided into at least two lanes going the same way, a posted limit no higher than 45 mph, and the motorcycle travelling no faster than 15 mph. It applies only to passing vehicles that are stopped in the same direction and lane - not to riding between moving traffic.",
        commonlyMissed: true,
        trap:
          "The two numbers are easy to swap. Forty-five governs the street; fifteen governs the motorcycle.",
        excerptKey: "lane-filtering-15",
        sourceLabel: "Arizona Driver License Manual - Section 4, Sharing the Road with a Motorcycle",
        sourceUrl: HB,
      },
      {
        id: "az_s5_08",
        topic: "signals",
        question:
          "The pedestrian beacon ahead has just started flashing yellow. What has happened?",
        choices: [
          "A pedestrian is already in the crossing",
          "The beacon has failed and reverted to caution",
          "A pedestrian has activated the signal",
          "The beacon is warning of a school crossing ahead",
        ],
        correctIndex: 2,
        explanation:
          "Flashing yellow is the first phase - somebody has pressed the button. Solid yellow follows, telling you to prepare to stop.",
        context:
          "The full sequence runs flashing yellow when the button is pressed, solid yellow to prepare to stop, solid red while a pedestrian is in the crossing, flashing red meaning stop then go once they have cleared your half of the road, and all lights blank meaning proceed with caution if the crossing is clear.",
        trap:
          "Flashing yellow is the earliest warning you get and it is easy to dismiss. It is the phase where you still have room to slow gently.",
        excerptKey: "hawk-flashing-yellow",
        sourceLabel: "Arizona Driver License Manual - Section 3, Pedestrian Activated Signals",
        sourceUrl: HB,
      },
      {
        id: "az_s5_09",
        topic: "emergencies",
        question:
          "You drove around a flood barricade, got stuck, and had to be rescued. What is the most Arizona statute can charge you for the emergency response?",
        choices: [
          "Nothing - rescue services are publicly funded",
          "Up to $500",
          "Up to $1,000",
          "Up to $2,000 for a single incident",
        ],
        correctIndex: 3,
        explanation:
          "Two thousand dollars is the statutory cap for a single incident. The manual mentions the liability but not the figure.",
        context:
          "The liability covers the reasonable costs of police, fire, rescue and emergency medical services at the scene, including the responders' salaries, but not the ambulance service's own charges. Your insurer is entitled to exclude cover for it, and it sits on top of any other liability you may have.",
        commonlyMissed: true,
        trap:
          "People assume the charge is theoretical or capped low. Two thousand dollars per incident is real, and an insurer may lawfully refuse to pay it.",
        excerptKey: "flood-liability-cap",
        sourceLabel: "Arizona Revised Statutes 28-910 - Liability for emergency responses in flood areas",
        sourceUrl: ARS_910,
      },
      {
        id: "az_s5_10",
        topic: "licensing",
        question:
          "An Arizona teen completes an approved defensive driving or traffic survival school course. How much supervised practice must a parent then certify?",
        choices: [
          "30 hours, with 10 at night",
          "20 hours, with at least 6 at night",
          "15 hours, with 5 at night",
          "No practice hours at all",
        ],
        correctIndex: 1,
        explanation:
          "Completing that course lowers the requirement from 30 hours with 10 at night to 20 hours with at least 6 at night.",
        context:
          "MVD offers three routes to a graduated licence. Thirty hours of supervised practice including ten at night, then the road test. Twenty hours including six at night after an approved traffic survival school or certified defensive driving course, then the road test. Or a full driver education programme, which waives the road test if proof arrives within twelve months of issue.",
        commonlyMissed: true,
        trap:
          "The 20/6 route needs the right kind of course. An ordinary commercial driving lesson does not unlock it.",
        excerptKey: "gdl-practice-20-6",
        sourceLabel: "Arizona MVD - Teen Driver Guide, Gain Some Experience",
        sourceUrl: TD,
      },
      {
        id: "az_s5_11",
        topic: "safety",
        question:
          "You have stopped clear of the road in a dust storm with your lights off. Should you get out of the car?",
        choices: [
          "No - stay in the vehicle with your seat belts buckled",
          "Yes, move away from the vehicle in case it is struck",
          "Yes, stand at the roadside to flag help",
          "Only if the engine will not restart",
        ],
        correctIndex: 0,
        explanation:
          "Arizona wants you inside the vehicle and still belted, waiting until the storm has passed.",
        context:
          "The whole dust storm procedure hangs together. Slow early and get completely off the highway, stop as far right as you can, keep out of the travel lane and the emergency lane, switch everything off including the brake lights, stay belted inside and wait. Getting out puts you into a zero-visibility environment on foot.",
        trap:
          "Leaving the car is normally the safer choice when stopped near traffic. In a dust storm it is the opposite.",
        excerptKey: "dust-storm-stay-buckled",
        sourceLabel: "Arizona Driver License Manual - Section 5, Dust Storms",
        sourceUrl: HB,
      },
      {
        id: "az_s5_12",
        topic: "rules",
        question:
          "Traffic in the through lanes is crawling and the two-way left turn lane beside you is empty. May you use it to get ahead?",
        choices: [
          "Yes, if you stay under 15 mph",
          "Yes, for up to 300 feet",
          "Yes, if you signal on entering and leaving",
          "No - it may not be used for passing or for through traffic",
        ],
        correctIndex: 3,
        explanation:
          "Arizona bars using the two-way left turn lane for passing, for through traffic, or to build speed before merging.",
        context:
          "The lane exists so a left-turning driver can slow out of the traffic stream, and so a driver coming from a side street or driveway has somewhere to wait. It is bordered by a broken yellow line on the inside and a solid one on the outside, and drivers coming the other way are entitled to be in it at the same time.",
        trap:
          "The lane is genuinely empty most of the time, which is exactly what tempts drivers into treating it as a spare lane.",
        excerptKey: "two-way-left-turn-no-passing",
        sourceLabel: "Arizona Driver License Manual - Section 3, Two-Way Left Turn Lane",
        sourceUrl: HB,
      },
      {
        id: "az_s5_13",
        topic: "signs",
        question:
          "What job does a rectangular sign do in Arizona's shape system?",
        choices: [
          "It regulates traffic and directs the driver's speed and direction",
          "It warns of a hazard ahead",
          "It marks a school crossing",
          "It gives distances to towns only",
        ],
        correctIndex: 0,
        explanation:
          "Rectangles regulate. They carry the rules you must obey, including speed and direction of travel.",
        context:
          "The shape system assigns one job per outline: octagon for stop, downward triangle for yield, rectangle for regulation, pennant for the start of a no-passing zone, diamond for warning, pentagon for school crossing, circle for a railway warning. Colour reinforces it - white with black lettering regulates, orange recommends in a work zone.",
        trap:
          "Vertical rectangles also carry guide information such as route markers, so the shape alone is not enough - the colour has to be read with it.",
        excerptKey: "sign-rectangular",
        sourceLabel: "Arizona Driver License Manual - Section 3, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "az_s5_14",
        topic: "rightOfWay",
        question:
          "A child is standing in a school crossing while the portable signs are out. What does Arizona require?",
        choices: [
          "Slow to 15 mph and pass carefully",
          "Yield only if the child is in your half of the road",
          "Sound your horn and proceed slowly",
          "Come to a complete stop",
        ],
        correctIndex: 3,
        explanation:
          "A complete stop. Arizona requires vehicles to stop at any school crossing whenever the crosswalk is occupied by any person.",
        context:
          "That duty runs alongside the 15 mph limit between the portable signs and the ban on passing another vehicle inside the crossing zone. Where a crossing guard is present you follow their instructions. And the pedestrian rules generally apply - you yield in any marked or unmarked crosswalk, and never pass a vehicle stopped for someone crossing.",
        trap:
          "Fifteen miles per hour is the speed rule, not the whole rule. With a person in the crosswalk the requirement is a stop, not a crawl.",
        excerptKey: "pedestrian-school-crossing-stop",
        sourceLabel: "Arizona Driver License Manual - Section 3, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "az_s5_15",
        topic: "speed",
        question:
          "The portable school crossing signs are out and traffic ahead is slow. May you pass?",
        choices: [
          "Yes, at no more than 15 mph",
          "Yes, if the crosswalk itself is empty",
          "No - passing in a school crossing zone is prohibited",
          "Yes, if a crossing guard waves you through",
        ],
        correctIndex: 2,
        explanation:
          "Passing another vehicle inside a school crossing zone is prohibited outright, whatever your speed.",
        context:
          "The portable signs themselves say there is to be no passing, that school is in session, and that drivers must stop when children are in the crosswalk. Between them the maximum speed is 15 mph. Where the signs also warn that the civil penalty doubles, that is what happens on conviction.",
        trap:
          "Keeping to 15 mph does not make the pass lawful. The speed limit and the passing ban are two separate requirements.",
        excerptKey: "school-crossing-no-passing",
        sourceLabel: "Arizona Driver License Manual - Section 3, School Crossing Sign",
        sourceUrl: HB,
      },
      {
        id: "az_s5_16",
        topic: "impairment",
        question:
          "You refuse a chemical test a second time, six years after the first refusal. What is the suspension?",
        choices: [
          "12 months, the same as a first refusal",
          "18 months",
          "Nothing, because more than five years have passed",
          "Two years, because the second refusal fell within seven years",
        ],
        correctIndex: 3,
        explanation:
          "Two years. The lookback for a second refusal is seven years - eighty-four months - so a six-year gap is still inside it.",
        context:
          "The refusal suspension is administrative and applies whether or not you are convicted of anything. Refusing to take the test, or failing to complete it successfully, both count as a refusal. Consent to testing is automatic when you drive in Arizona under the implied consent law.",
        trap:
          "People remember a five-year window from other penalty scales. The refusal lookback is seven.",
        excerptKey: "chemical-test-refusal-penalty",
        sourceLabel: "Arizona Driver License Manual - Section 5, Suspension and Traffic School",
        sourceUrl: HB,
      },
      {
        id: "az_s5_17",
        topic: "safety",
        question:
          "You are following another car at night on a country road. At what distance must you drop to low beams?",
        choices: [
          "500 feet",
          "300 feet",
          "Within 200 feet",
          "Whenever their tail lights are visible",
        ],
        correctIndex: 2,
        explanation:
          "Two hundred feet is the following figure. Five hundred feet is the separate threshold for oncoming traffic.",
        context:
          "Arizona's night-driving rules use two distances for two situations. High beams are for highways where no vehicle is coming toward you within 500 feet; low beams are required whenever you are within 200 feet of a car you are following. City and town streets get low beams as a matter of course.",
        trap:
          "The two figures get merged into one. Following is the shorter distance because your beams are hitting the other driver's mirrors, not their eyes.",
        excerptKey: "low-beams-200-feet",
        sourceLabel: "Arizona Driver License Manual - Section 5, Night Driving",
        sourceUrl: HB,
      },
      {
        id: "az_s5_18",
        topic: "parking",
        question:
          "Arizona statute bars parking near a fire station entrance. How close to the driveway entrance may you park?",
        choices: [
          "No closer than twenty feet",
          "No closer than ten feet",
          "No closer than fifty feet",
          "There is no restriction if the doors are closed",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet from the driveway entrance, and seventy-five feet on the opposite side of the street where that is properly posted.",
        context:
          "This sits in the statutory parking list rather than the manual's. That list also carries the thirty-foot setback from a stop sign, yield sign, signal or flashing beacon, and bars parking on the roadway side of an already parked vehicle - what most drivers would call double parking.",
        trap:
          "The rule for the far side of the street is nearly four times the distance, because a fire appliance needs the swing room to turn out.",
        excerptKey: "park-fire-station",
        sourceLabel: "Arizona Revised Statutes 28-873 - Stopping, standing or parking prohibitions",
        sourceUrl: ARS_873,
      },
      {
        id: "az_s5_19",
        topic: "sharing",
        question:
          "You pass a cyclist too closely and the collision causes serious physical injury. What civil penalty does Arizona statute allow?",
        choices: [
          "Up to $250",
          "Up to $500",
          "Up to $750",
          "There is no separate penalty",
        ],
        correctIndex: 1,
        explanation:
          "Up to five hundred dollars where the violation causes serious physical injury, and up to a thousand where it causes death.",
        context:
          "The underlying duty is the three-foot minimum when overtaking a bicycle going the same way, held until you are safely past. The enhanced penalties do not apply where the cyclist was injured in a traffic lane while a designated bicycle lane or path was present and passable.",
        trap:
          "The three-foot rule reads like guidance in the manual. The statute attaches four-figure penalties to breaking it.",
        excerptKey: "bicycle-penalty-injury",
        sourceLabel: "Arizona Revised Statutes 28-735 - Overtaking bicycles",
        sourceUrl: ARS_735,
      },
      {
        id: "az_s5_20",
        topic: "emergencies",
        question:
          "You move your damaged but drivable car out of the travel lanes before police arrive. What effect does that have on fault?",
        choices: [
          "It counts against you as leaving the scene",
          "It shifts fault to whoever moved second",
          "Moving the vehicle cannot by itself be used to put you at fault",
          "It voids your insurance claim",
        ],
        correctIndex: 2,
        explanation:
          "Arizona protects the person who clears the road. Moving the vehicle before police arrive cannot on its own be used to find you at fault.",
        context:
          "That protection exists because the law requires the move in the first place. Where there is no serious injury or fatality, an operable vehicle that can be moved safely must come off the main travelled part of the road. Any licensed driver may do it, provided the move does not cause further damage or increase the hazard.",
        trap:
          "Fear of appearing responsible keeps drivers parked in live lanes, which is exactly the situation that produces the second, worse crash.",
        excerptKey: "crash-move-not-at-fault",
        sourceLabel: "Arizona Driver License Manual - Section 6, Crash Procedures",
        sourceUrl: HB,
      },
      {
        id: "az_s5_21",
        topic: "rules",
        question:
          "A special left-turn lane is signed and marked at the intersection ahead. May you turn left from the lane beside it?",
        choices: [
          "Yes, if the turn lane is full",
          "Yes, provided you signal",
          "Yes, outside peak hours",
          "No - where a left-turn lane is provided you may not turn left from any other lane",
        ],
        correctIndex: 3,
        explanation:
          "Where the lane is signed or marked, Arizona requires you to use it and forbids turning left from anywhere else.",
        context:
          "The general left-turn rules put you in the lane just right of the centre line on a two-way road, turning just left of the centre point of the intersection and into the lane just right of the centre line on the road you enter. A marked turn lane replaces that positioning and becomes mandatory.",
        trap:
          "A queue in the turn lane is not an excuse. Turning left from the through lane cuts across drivers who expect no turn from there.",
        excerptKey: "left-turn-lane-required",
        sourceLabel: "Arizona Driver License Manual - Section 3, Left Turns",
        sourceUrl: HB,
      },
      {
        id: "az_s5_22",
        topic: "signals",
        question:
          "You are convicted of running a red light in Arizona and pay the fine. What else follows automatically?",
        choices: [
          "Nothing beyond the fine",
          "MVD must order you to complete Traffic Survival School",
          "An automatic 30-day suspension",
          "A mandatory ignition interlock device",
        ],
        correctIndex: 1,
        explanation:
          "MVD is required by law to order Traffic Survival School for every red light conviction the courts report. Failing to complete it suspends your privilege indefinitely.",
        context:
          "Paying the fine is itself treated as accepting responsibility and is reported to MVD as a conviction. Points go on your record as well. Where running the red causes a crash with life-threatening injuries the fine can reach $500 with a three-month suspension, and a fatal crash can bring $1,000 and six months.",
        commonlyMissed: true,
        trap:
          "Paying the ticket to make it go away is what triggers the school order. It is not a way of avoiding the consequence.",
        excerptKey: "red-light-tss-mandatory",
        sourceLabel: "Arizona Driver License Manual - Section 3, Red Light Running",
        sourceUrl: HB,
      },
      {
        id: "az_s5_23",
        topic: "licensing",
        question:
          "A Class G driver is found responsible for a first breach of the curfew or passenger restriction. What happens?",
        choices: [
          "A written warning only",
          "A fine of up to $75 and the restrictions extended by 30 days",
          "Immediate licence suspension for 30 days",
          "The licence reverts to an instruction permit",
        ],
        correctIndex: 1,
        explanation:
          "A maximum $75 fine and a 30-day extension of the restriction. A second brings $100 and 60 days; a third brings $100 and a 30-day suspension.",
        context:
          "These are separate from the general under-18 penalties in the manual, where a first traffic conviction means Traffic Survival School, a second a three-month suspension and a third a six-month suspension. The graduated restrictions themselves are secondary enforcement - an officer needs another suspected violation to stop you for one.",
        trap:
          "The penalty is not just money. Every breach pushes the end of the restricted period further away.",
        excerptKey: "gdl-penalty-first",
        sourceLabel: "Arizona MVD - Teen Driver Guide, Graduated Permit/License FAQ",
        sourceUrl: TD,
      },
      {
        id: "az_s5_24",
        topic: "safety",
        question:
          "Arizona statute sets a light transmission figure for tinting on front side windows. What is it?",
        choices: [
          "Fifty percent",
          "Forty percent",
          "Thirty-three percent, plus or minus three",
          "Twenty percent",
        ],
        correctIndex: 2,
        explanation:
          "Thirty-three percent light transmission, with a tolerance of three points either way, plus a luminous reflectance figure of thirty-five percent.",
        context:
          "The manual only says tint is legal within certain limits and puts the burden on owners to check that the installer complies. The statute fills in the numbers, and also bars any material that obstructs or reduces your clear view through the windscreen or the side or rear windows. Windows behind the driver are governed by reflectance rather than transmission.",
        trap:
          "The rules for front side windows and for windows behind the driver are different. A shop fitting the darker rear specification to the front is fitting an illegal tint.",
        excerptKey: "tint-front-windows",
        sourceLabel: "Arizona Revised Statutes 28-959.01 - Materials on windows or windshield",
        sourceUrl: ARS_959_01,
      },
      {
        id: "az_s5_25",
        topic: "rules",
        question:
          "You are carrying garden waste in an open pickup bed on an Arizona highway. What does the law require?",
        choices: [
          "Nothing, if the load is below the sides of the bed",
          "The load must be constructed or secured so nothing can drop, sift, leak or escape",
          "A warning flag on the rearmost item",
          "A permit from ADOT for any uncovered load",
        ],
        correctIndex: 1,
        explanation:
          "Arizona requires the vehicle to be built or loaded so that no part of the load can drop, sift, leak or otherwise escape.",
        context:
          "Any covering over the load has to be fastened so it cannot come loose or become a hazard itself. The exceptions are narrow: sand dropped for traction, water or a substance sprinkled while cleaning a road, and minor leaves and stems from agricultural loads. Debris on the road is a hazard the manual singles out as common in Arizona.",
        trap:
          "Loose debris is what causes the swerve-and-lose-control crash the manual describes - the driver behind you pays for your unsecured load.",
        excerptKey: "secure-loads",
        sourceLabel: "Arizona Revised Statutes 28-1098 - Vehicle loads",
        sourceUrl: ARS_1098,
      },
      {
        id: "az_s5_26",
        topic: "speed",
        question:
          "Arizona gives three guidelines for adjusting speed in bad weather. What does it say about following distance?",
        choices: [
          "Add one second per 10 mph",
          "Keep the normal gap and reduce speed instead",
          "Add two car lengths",
          "Double the distance from the vehicle in front",
        ],
        correctIndex: 3,
        explanation:
          "Double it, and reduce speed appropriately at the same time. The two adjustments go together rather than as alternatives.",
        context:
          "The three guidelines are: reduce speed appropriately on wet roads, reduce speed appropriately on snow or ice, and in bad weather double the following distance while also reducing speed. Elsewhere the manual puts numbers on it - at least six seconds in heavy rain, six or more on slippery roads.",
        trap:
          "Slowing down without lengthening the gap leaves the same problem. Both figures have to change together.",
        excerptKey: "speed-double-following",
        sourceLabel: "Arizona Driver License Manual - Section 3, Adjusting Speed to Conditions",
        sourceUrl: HB,
      },
      {
        id: "az_s5_27",
        topic: "rightOfWay",
        question:
          "You are inside a roundabout when an ambulance approaches with lights and siren. What does Arizona want?",
        choices: [
          "Proceed with caution and exit if you can, or pull over to the right",
          "Stop immediately where you are",
          "Reverse out of the roundabout",
          "Accelerate round to clear the circle faster",
        ],
        correctIndex: 0,
        explanation:
          "Carry on carefully and exit if you can, or pull over to the right. Stopping inside the circle blocks the route the ambulance needs.",
        context:
          "This is the roundabout version of the general rule, which is to move right and stop until an emergency vehicle has passed. Inside a circulating roundabout, stopping dead would jam every approach at once, so Arizona asks you to clear the circle first and then pull over.",
        trap:
          "The reflex of stopping the moment you hear a siren is the wrong one here, and it is exactly the reflex the manual is correcting.",
        excerptKey: "roundabout-emergency-vehicle",
        sourceLabel: "Arizona Driver License Manual - Section 2, Roundabouts",
        sourceUrl: HB,
      },
      {
        id: "az_s5_28",
        topic: "impairment",
        question:
          "You are driving a car fitted with a certified ignition interlock device. What must you do once you are under way?",
        choices: [
          "Blow into the device at random intervals while driving",
          "Nothing further - the start-up test is the whole requirement",
          "Blow into it every time you stop at a light",
          "Blow into it once at the halfway point of the journey",
        ],
        correctIndex: 0,
        explanation:
          "The device asks for further breath samples at random intervals during the journey, not just before the engine starts.",
        context:
          "The interlock is a breath alcohol instrument wired into the ignition and power system, and the vehicle will not start if the reading is over the set level. Arizona attaches an interlock requirement to DUI, extreme DUI and aggravated DUI sentences, and operating a vehicle without a functioning one when required is grounds for impounding the vehicle.",
        trap:
          "Treating it as a start-up test only misses the rolling retests, which is how people fail an interlock order they thought they were complying with.",
        excerptKey: "interlock-random",
        sourceLabel: "Arizona Driver License Manual - Section 5, Certified Ignition Interlock Device",
        sourceUrl: HB,
      },
      {
        id: "az_s5_29",
        topic: "sharing",
        question:
          "You are at a Valley light rail intersection facing a red arrow. What may you do?",
        choices: [
          "Turn across the tracks after stopping",
          "Turn if no train is visible",
          "Nothing - a red arrow means do not turn",
          "Make a U-turn but not a left turn",
        ],
        correctIndex: 2,
        explanation:
          "Arizona states it plainly for light rail crossings: stop on red, and a red arrow means do not turn.",
        context:
          "Cars may cross the METRO trackway only at controlled locations and may turn across the tracks only from designated turn lanes controlled by signals. U-turns are permitted at almost all light rail intersections so vehicles can get across, but they too are signal-controlled. Light rail vehicles are quiet, so watch for flashing headlights and listen for bells and horns.",
        trap:
          "Looking down the track and seeing nothing is not a substitute for the signal - a train covers a lot of ground while you are checking.",
        excerptKey: "light-rail-red-arrow",
        sourceLabel: "Arizona Driver License Manual - Section 3, METRO Light Rail",
        sourceUrl: HB,
      },
      {
        id: "az_s5_30",
        topic: "safety",
        question:
          "You have just driven slowly through standing water. What does Arizona tell you to do next?",
        choices: [
          "Accelerate hard to blow the water clear",
          "Test the brakes to see whether they will stop the car",
          "Pull over and let them dry for ten minutes",
          "Nothing - modern brakes are sealed",
        ],
        correctIndex: 1,
        explanation:
          "Check the brakes as soon as you are out of the water. Wet brakes can grab suddenly or pull to one side.",
        context:
          "Arizona also suggests applying the brakes gently with your left foot while driving through, to help keep them dry. If they are wet afterwards, dry them by accelerating slowly while holding light pressure on the brake pedal. All of this assumes water shallow enough to drive through - flooded washes are not to be crossed at all.",
        trap:
          "Brakes that pull to one side at the first hard stop after a crossing are the failure mode here, and you find out at exactly the wrong moment.",
        excerptKey: "wet-brakes",
        sourceLabel: "Arizona Driver License Manual - Section 5, Rain",
        sourceUrl: HB,
      },
      {
        id: "az_s5_31",
        topic: "emergencies",
        question:
          "You leave the scene of a collision where only a vehicle was damaged, and are later convicted of failing to stop. What happens to your licence?",
        choices: [
          "Suspended for one year",
          "Suspended for 90 days",
          "Revoked for three years",
          "A fine only, with no licence action",
        ],
        correctIndex: 0,
        explanation:
          "One year's suspension where only a vehicle was damaged. The penalties climb sharply from there.",
        context:
          "The scale runs a year's suspension for vehicle damage alone, three years' revocation where someone was injured, five years' revocation for a serious physical injury, and ten years' revocation where someone died - the last two not counting time spent in custody. Leaving the scene also carries six points on your record.",
        trap:
          "The consequence is real even where nobody was hurt and the damage was small. Not stopping is a licence matter regardless of the crash's severity.",
        excerptKey: "failure-to-stop-damage",
        sourceLabel: "Arizona Driver License Manual - Section 6, Failure to Stop at a Crash",
        sourceUrl: HB,
      },
      {
        id: "az_s5_32",
        topic: "parking",
        question:
          "You want to stop briefly on a bridge over a wash to look at the view. What does Arizona say?",
        choices: [
          "Permitted if you keep the engine running",
          "Permitted outside peak hours",
          "Permitted where the bridge has a wide shoulder",
          "Prohibited - you may not park on a bridge or within a tunnel",
        ],
        correctIndex: 3,
        explanation:
          "Bridges and tunnels are on Arizona's prohibited parking list outright.",
        context:
          "The list also covers sidewalks, crosswalks, the inside of an intersection, in front of a public or private driveway, freeways and interstates except in an emergency, anywhere signs prohibit parking, and anywhere your vehicle would create a hazard for others. Distances apply on top: fifteen feet from a hydrant, twenty from a crosswalk, fifty from a railway crossing.",
        trap:
          "A wide shoulder on a bridge is there for breakdowns and maintenance, not for parking. Sight lines on a bridge are usually the worst on the road.",
        excerptKey: "park-bridge-tunnel",
        sourceLabel: "Arizona Driver License Manual - Section 2, Prohibited Parking",
        sourceUrl: HB,
      },
      {
        id: "az_s5_33",
        topic: "signs",
        question:
          "What kind of crash does Arizona name as the most common in a work zone?",
        choices: [
          "Rear-end collisions from drivers going too fast",
          "Head-on collisions from lane shifts",
          "Rollovers on uneven surfaces",
          "Side-swipes at merge points",
        ],
        correctIndex: 0,
        explanation:
          "Rear-end collisions caused by drivers travelling too fast, alongside crashes with fixed objects and vehicles striking people working in the area.",
        context:
          "That is why the manual asks you to be on high alert and to expect to stop or slow suddenly for changing conditions, including changes to the road surface. Workers and construction vehicles may be right beside the travel lanes or may enter them at any point, and fines for speeding are doubled where the signs are posted.",
        trap:
          "The hazard people prepare for is the narrow lane. The one that actually gets them is the queue of stopped traffic ahead.",
        excerptKey: "work-zone-crashes",
        sourceLabel: "Arizona Driver License Manual - Section 3, Roadway Construction and Temporary Work Zones",
        sourceUrl: HB,
      },
      {
        id: "az_s5_34",
        topic: "licensing",
        question:
          "A Class G driver in their first six months wants to use a phone. What is permitted?",
        choices: [
          "An audible navigation system, provided it is not programmed while driving",
          "Hands-free calling, as for adult drivers",
          "Any use while stopped at a traffic light",
          "Voice-to-text messaging",
        ],
        correctIndex: 0,
        explanation:
          "The only permitted uses are an emergency and an audible turn-by-turn navigation system, and the destination must not be entered or adjusted while driving.",
        context:
          "This is stricter than the adult hands-free law. Adults may use a device hands-free, with an earpiece or a wrist-worn device, and may use voice-to-text. A Class G driver in the first six months may not use a wireless device at all beyond those two exceptions. Like the curfew and passenger rules, it is secondary enforcement.",
        commonlyMissed: true,
        trap:
          "Hands-free is lawful for adults, so teenagers assume it is lawful for them. In the first six months on a Class G licence it is not.",
        excerptKey: "gdl-phone-ban",
        sourceLabel: "Arizona MVD - Teen Driver Guide, Graduated Permit/License FAQ",
        sourceUrl: TD,
      },
      {
        id: "az_s5_35",
        topic: "rules",
        question:
          "Your lane is marked with a curved arrow and the word ONLY. What must you do?",
        choices: [
          "Turn or continue straight, whichever suits",
          "Turn only if a signal permits it",
          "Turn in the direction the arrow points",
          "Yield to the lane beside you before turning",
        ],
        correctIndex: 2,
        explanation:
          "A curved arrow with ONLY makes the turn compulsory - you must go the way the arrow points.",
        context:
          "Where a lane carries both a curved and a straight arrow, you have the choice of turning that way or going straight on. Solid white lines are used to mark turn lanes and to discourage lane changes near intersections, which is why the decision has to be made well before the junction.",
        trap:
          "Realising too late and changing lanes across a solid white line at the last moment swaps one violation for another.",
        excerptKey: "turn-lane-arrow",
        sourceLabel: "Arizona Driver License Manual - Section 3, Turn Lane Arrow",
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
      "Thirty questions, the same length as MVD's real permit test, drawn across every section of the manual. Eighty percent - twenty-four correct - is the pass mark on the day.",
    questions: [
      {
        id: "az_s6_01",
        topic: "rules",
        question:
          "A broken white line separates your lane from the one beside it. What does it permit?",
        choices: [
          "Nothing - white lines may never be crossed",
          "Passing only on a highway",
          "Crossing with caution once you have signalled",
          "Crossing only to enter an HOV lane",
        ],
        correctIndex: 2,
        explanation:
          "Broken white separates lanes going the same way and may be crossed with caution after signalling.",
        context:
          "White separates same-direction traffic, yellow separates opposing traffic; broken means crossing is allowed, solid means it is discouraged or prohibited. A single solid white marks the road edge or a place where lane changes are unwanted, crossed only in an emergency, to avoid a hazard, or when merging in and out of an HOV lane. Double solid white may not be crossed at all.",
        trap:
          "The permission is to cross, not to drift. Arizona still expects the signal and the shoulder check first.",
        excerptKey: "broken-white",
        sourceLabel: "Arizona Driver License Manual - Section 3, Broken White Lines",
        sourceUrl: HB,
      },
      {
        id: "az_s6_02",
        topic: "signals",
        question: "What exactly does a green light permit?",
        choices: [
          "Proceeding at the posted limit regardless of the intersection",
          "Priority over pedestrians already crossing",
          "Entering the intersection ahead of any turning traffic",
          "Going through in the direction indicated, if the roadway is clear",
        ],
        correctIndex: 3,
        explanation:
          "Green permits you to go in the direction the signal indicates, provided the roadway is clear. It is a permission, not a guarantee.",
        context:
          "Arizona asks you to check left and right before entering on a green to avoid a red-light runner, and to yield to any vehicle already inside the intersection when the light changed. Pedestrians already crossing keep their right-of-way too. The manual's own heading says it: Green Means Go, if Clear.",
        trap:
          "Drivers treat the green as clearing the intersection for them. It clears the signal, nothing more.",
        excerptKey: "green-means-go",
        sourceLabel: "Arizona Driver License Manual - Section 3, Signal Lights",
        sourceUrl: HB,
      },
      {
        id: "az_s6_03",
        topic: "rightOfWay",
        question:
          "You have the right-of-way at an intersection but taking it would probably cause a crash. What does Arizona say?",
        choices: [
          "No one is allowed to take the right-of-way if taking it means a crash may result",
          "Take it - the other driver is at fault",
          "Take it but sound your horn first",
          "Take it only if you are on the larger road",
        ],
        correctIndex: 0,
        explanation:
          "Arizona is explicit: nobody may take the right-of-way if taking it means a crash may result.",
        context:
          "The manual frames the whole concept negatively - the law does not give anyone the right-of-way, it only states who must yield. Even where you clearly have priority, the duty to look for traffic and pedestrians and to avoid a collision does not go away.",
        trap:
          "Being right does not stop the crash happening. The right-of-way is a rule about who yields, not a shield.",
        excerptKey: "right-of-way-never-take",
        sourceLabel: "Arizona Driver License Manual - Section 3, Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "az_s6_04",
        topic: "speed",
        question:
          "According to the manual's list of speeds that apply where nothing is posted, what figure covers open highways and city freeways?",
        choices: ["45 mph", "55 mph", "65 mph", "75 mph"],
        correctIndex: 1,
        explanation:
          "Fifty-five is the manual's figure for open highways or city freeways, below the 65 it gives for designated open highways and the 75 for rural freeways.",
        context:
          "The manual's unposted table runs 15 mph approaching a school crosswalk, 25 mph in a business or residential district, 55 mph on open highways or city freeways, 65 mph on designated open highways and 75 mph on rural freeways. Arizona statute states the general unposted prima facie limit outside a business or residential district as 65 mph, so the two sources do not line up on this figure - the posted sign settles it in practice.",
        commonlyMissed: true,
        trap:
          "This is the one line where the manual and the statute disagree, so learn the manual's number for the test and read the posted sign on the road.",
        excerptKey: "speed-defaults",
        sourceLabel: "Arizona Driver License Manual - Section 3, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "az_s6_05",
        topic: "safety",
        question: "Your car starts to hydroplane in heavy rain. What is the correct response?",
        choices: [
          "Brake firmly to regain contact",
          "Steer sharply toward the shoulder",
          "Come off the accelerator and do not brake",
          "Accelerate gently to push through the water",
        ],
        correctIndex: 2,
        explanation:
          "Take your foot off the accelerator and leave the brake alone, then hold the wheel firmly until the tyres grip again.",
        context:
          "Hydroplaning is the tyre riding up on a film of water instead of cutting through it, and at 50 mph in heavy rain the contact can go entirely. Worn or under-inflated tyres let go far sooner. Arizona also asks you to avoid steering changes while it is happening - the tyres will bite again suddenly, and a big steering input waiting for them is what puts you sideways.",
        trap:
          "Braking does nothing while the tyres are off the road, and everything at the moment they touch down again.",
        excerptKey: "hydroplaning-response",
        sourceLabel: "Arizona Driver License Manual - Section 5, Rain",
        sourceUrl: HB,
      },
      {
        id: "az_s6_06",
        topic: "parking",
        question: "A kerb is painted yellow. What does that allow?",
        choices: [
          "Parking for up to an hour",
          "Dropping off passengers only",
          "Nothing at all",
          "Loading or unloading, while you stay with the car",
        ],
        correctIndex: 3,
        explanation:
          "Yellow is for loading and unloading, and Arizona adds that you stay with your vehicle while doing it.",
        context:
          "Arizona uses three kerb colours and no others. White is for picking up and dropping off passengers, yellow is for loading and unloading with the driver present, and red bars stopping, standing and parking outright. A painted kerb is always a signal that a special rule applies there.",
        trap:
          "Leaving the car to carry the load inside breaks the yellow-kerb condition, which requires you to stay with the vehicle.",
        excerptKey: "curb-yellow",
        sourceLabel: "Arizona Driver License Manual - Section 3, Painted Curbs",
        sourceUrl: HB,
      },
      {
        id: "az_s6_07",
        topic: "sharing",
        question:
          "Why does Arizona warn that a motorcycle's distance and speed are hard to judge?",
        choices: [
          "Because riders change speed more often than drivers",
          "Because motorcycle headlights are dimmer",
          "Because motorcycles are quieter than cars",
          "Because its small size makes it look farther away and slower than it is",
        ],
        correctIndex: 3,
        explanation:
          "The small frontal area fools your judgement of distance, and a single headlight or taillight gives you fewer visual cues to work with.",
        context:
          "That misjudgement is behind the most common car-motorcycle crash: a driver turning in front of a rider they either did not see or thought was further off. Riders are also less stable in rain and wind, and are entitled to the full width of their lane to manoeuvre in.",
        trap:
          "Thinking there is time to turn across an approaching motorcycle is precisely the error the manual is describing.",
        excerptKey: "motorcycle-size-judgment",
        sourceLabel: "Arizona Driver License Manual - Section 4, Sharing the Road with a Motorcycle",
        sourceUrl: HB,
      },
      {
        id: "az_s6_08",
        topic: "impairment",
        question:
          "What is the minimum jail term for a first ordinary DUI conviction in Arizona?",
        choices: [
          "There is no minimum on a first offence",
          "24 hours",
          "10 consecutive days",
          "30 consecutive days",
        ],
        correctIndex: 2,
        explanation:
          "Not less than ten consecutive days, with a suspension of at least 90 days and a fine of at least $1,250.",
        context:
          "A first DUI also brings mandatory alcohol screening, education or treatment, community service, and possibly an ignition interlock requirement. A second or subsequent offence steps up to at least 90 days in jail, a fine of at least $3,000 and a twelve-month revocation.",
        commonlyMissed: true,
        trap:
          "People expect a first offence to be a fine and a suspension. The jail term is a mandatory minimum, not a maximum a judge might reach for.",
        excerptKey: "dui-first-offense",
        sourceLabel: "Arizona Driver License Manual - Section 5, DUI",
        sourceUrl: HB,
      },
      {
        id: "az_s6_09",
        topic: "signs",
        question: "What are flaggers in an Arizona work zone equipped with?",
        choices: [
          "Green paddles and blue vests",
          "Yellow helmets and hand signals only",
          "Orange vests or jackets, and red flags or stop-slow panels",
          "Radios and portable traffic signals",
        ],
        correctIndex: 2,
        explanation:
          "Orange high-visibility clothing, and either red flags or stop-slow panels to direct traffic through the area.",
        context:
          "Flaggers are part of the orange work-zone system: orange signs, cones, drums and barricades, diamond-shaped construction signs, electronic message boards and flashing arrow panels. Their directions carry the same weight as the signs around them, and fines for speeding double where the signs are posted.",
        trap:
          "A flagger's stop paddle is not advisory. Driving past one is failing to obey a traffic control device.",
        excerptKey: "flaggers",
        sourceLabel: "Arizona Driver License Manual - Section 3, Flaggers",
        sourceUrl: HB,
      },
      {
        id: "az_s6_10",
        topic: "rules",
        question: "You realise you have just passed your freeway exit. What does Arizona require?",
        choices: [
          "Reverse carefully along the shoulder",
          "Stop and wait for a gap in traffic to back up",
          "Cross the gore area to rejoin the ramp",
          "Carry on to the next exit - never stop and never back up",
        ],
        correctIndex: 3,
        explanation:
          "Do not stop and never reverse on a highway. Take the next exit and use the signs to rejoin in the other direction.",
        context:
          "Reversing is on the list of things Arizona forbids on a freeway, alongside crossing the median, U-turns, entering anywhere but an on-ramp, and parking or stopping outside an emergency or a provided area. Driving over or parking in a gore area is a separate offence carrying three points.",
        trap:
          "The shoulder makes reversing look feasible on a quiet stretch. It is the manoeuvre nobody behind you is expecting.",
        excerptKey: "freeway-no-backing",
        sourceLabel: "Arizona Driver License Manual - Section 2, Entering and Exiting the Highway",
        sourceUrl: HB,
      },
      {
        id: "az_s6_11",
        topic: "emergencies",
        question:
          "Your brakes fail in a car without anti-lock brakes. What is the first thing to try?",
        choices: [
          "Pump the brake pedal rapidly to build pressure",
          "Pull the parking brake to its full travel at once",
          "Switch off the engine to slow the car",
          "Shift into neutral and coast to a stop",
        ],
        correctIndex: 0,
        explanation:
          "Rapid pumping may build enough hydraulic pressure to stop the car. That is the first step in a vehicle without ABS.",
        context:
          "If pumping fails, apply the parking brake slowly while holding the release, so you can ease off if the rear wheels lock and the car begins to skid. Shift down and look for somewhere safe to stop. In a car that does have anti-lock brakes, Arizona's instruction is the opposite - do not pump them.",
        trap:
          "Yanking the parking brake to full travel locks the rear wheels and puts the car into a skid you now have to recover from as well.",
        excerptKey: "brake-failure-pump",
        sourceLabel: "Arizona Driver License Manual - Section 6, Brake Failure",
        sourceUrl: HB,
      },
      {
        id: "az_s6_12",
        topic: "licensing",
        question:
          "You arrive for your Arizona road test in a car with lane-keeping and self-parking systems. What applies?",
        choices: [
          "They may be used if you tell the examiner first",
          "They may be used for parking only",
          "They count in your favour as safety equipment",
          "Advanced driver assistance systems are prohibited during the test",
        ],
        correctIndex: 3,
        explanation:
          "ADAS features including auto-drive and parking assistance are prohibited on the road test. Every manoeuvre has to be performed manually.",
        context:
          "You provide the test vehicle, and it has to be roadworthy: working brakes, brake lights, indicators and horn, an uncracked windscreen, inside and outside mirrors, sound tyres, operational front windows and doors that open and close. You also show current registration and liability insurance, and belts must be fitted and worn in any 1972 or newer vehicle.",
        trap:
          "Turning the systems off is your responsibility, not the examiner's. A car that parks itself will not demonstrate that you can.",
        excerptKey: "road-test-adas",
        sourceLabel: "Arizona Driver License Manual - Arizona's Driver License, Road Test",
        sourceUrl: HB,
      },
      {
        id: "az_s6_13",
        topic: "safety",
        question:
          "You are driving in Arizona's high country in winter. Which surfaces ice up first?",
        choices: [
          "Uphill stretches",
          "Bridges and shady areas",
          "Newly paved sections",
          "Tunnels and underpasses",
        ],
        correctIndex: 1,
        explanation:
          "Bridge surfaces freeze before other road surfaces, and shaded sections hold ice long after the open road has cleared.",
        context:
          "Arizona's winter advice runs alongside it: drive with caution, avoid sudden changes of speed or direction, clear snow and ice off all windows and lights before setting off, fit snow tyres or chains, and slow before stopping or turning. On slippery surfaces you have most control while the front tyres are rolling, so the car answers steering better than braking.",
        trap:
          "People associate ice with Flagstaff and forget it exists at all in the state. Arizona's high country runs to over 7,000 feet.",
        excerptKey: "bridges-freeze",
        sourceLabel: "Arizona Driver License Manual - Section 5, Snow and Ice",
        sourceUrl: HB,
      },
      {
        id: "az_s6_14",
        topic: "signals",
        question:
          "You run a flashing red light and are cited. What does conviction bring in Arizona?",
        choices: [
          "A requirement to attend Traffic Survival School",
          "A written warning on a first occasion",
          "An automatic six-month suspension",
          "Points only, with no course requirement",
        ],
        correctIndex: 0,
        explanation:
          "Arizona treats running a flashing red like running a red light: conviction brings a Traffic Survival School requirement.",
        context:
          "A flashing red carries exactly the same force as a stop sign - a full stop, then proceed when the roadway is clear. MVD is obliged by law to order the school for every red light conviction the courts report, and failing to complete it suspends your driving privilege indefinitely. Points go on your record as well.",
        trap:
          "A flashing red feels less serious than a solid one because the intersection is usually quiet. The consequence on conviction is identical.",
        excerptKey: "red-light-tss",
        sourceLabel: "Arizona Driver License Manual - Section 3, Red Light Running",
        sourceUrl: HB,
      },
      {
        id: "az_s6_15",
        topic: "rightOfWay",
        question:
          "You reach a stop sign at an intersection with no stop line and no crosswalk painted. Where do you stop?",
        choices: [
          "Level with the sign, whatever the view is like",
          "At the far edge of the intersection",
          "Wherever the car ahead of you stopped",
          "At the point nearest the intersecting road where you can see approaching traffic",
        ],
        correctIndex: 3,
        explanation:
          "Without a crosswalk or stop line, the stop goes at the nearest point to the intersecting road from which you can see traffic coming.",
        context:
          "The order of preference is fixed: stop before the crosswalk on the near side if there is one, otherwise at a clearly marked stop line, otherwise at the point closest to the intersecting road that gives you a view. An officer directing you to proceed overrides all of it.",
        commonlyMissed: true,
        trap:
          "Stopping level with the sign satisfies the sign and not the rule - the sign is often set well back from where the view actually opens up.",
        excerptKey: "stop-sign-where",
        sourceLabel: "Arizona Revised Statutes 28-855 - Stop signs; yield signs",
        sourceUrl: ARS_855,
      },
      {
        id: "az_s6_16",
        topic: "rules",
        question:
          "You have overtaken a car on a two-lane road. When may you move back into the right lane?",
        choices: [
          "As soon as the other car leaves your blind spot",
          "After counting three seconds from passing",
          "Once you can see the whole front of the vehicle in your mirror, after a shoulder check and a signal",
          "Immediately, since the pass is complete",
        ],
        correctIndex: 2,
        explanation:
          "Arizona's marker is seeing the entire front, or both headlights, of the car you passed in your rearview mirror - then shoulder check, signal, and move back.",
        context:
          "Before starting the pass you need to be sure of enough time and room to get completely in front without endangering oncoming traffic. The same routine applies to overtaking slow-moving motorcycles, bicycles and mopeds - returning too soon can force a rider to swerve into traffic or off the road.",
        trap:
          "Cutting back in as soon as the car disappears from the door mirror is exactly the manoeuvre the headlight test is designed to prevent.",
        excerptKey: "passing-return-headlights",
        sourceLabel: "Arizona Driver License Manual - Section 2, Passing",
        sourceUrl: HB,
      },
      {
        id: "az_s6_17",
        topic: "speed",
        question:
          "A crossing guard is directing children across a school crossing. What do you do?",
        choices: [
          "Follow the guard's instructions and stop completely while anyone is in the crosswalk",
          "Proceed at 15 mph past the guard",
          "Wait only if the guard raises a stop paddle",
          "Treat the guard as advisory and use your own judgement",
        ],
        correctIndex: 0,
        explanation:
          "You follow the crossing guard's instructions, and you come to a complete stop whenever any person is in the crosswalk.",
        context:
          "The 15 mph limit runs between the portable signs, passing is prohibited inside the zone, and the duty to stop for anyone in the crossing sits on top of both. Where the portable signs also warn that the civil penalty doubles, that is what happens on conviction.",
        trap:
          "Fifteen miles per hour is the speed rule. With a person in the crosswalk the requirement is a stop, not a slow roll.",
        excerptKey: "school-crossing-guard",
        sourceLabel: "Arizona Driver License Manual - Section 3, School Crossing Sign",
        sourceUrl: HB,
      },
      {
        id: "az_s6_18",
        topic: "sharing",
        question:
          "What lighting does Arizona require of a cyclist riding at night?",
        choices: [
          "A white head lamp visible from 500 feet, and a rear reflector",
          "A red rear lamp only",
          "Reflective clothing, with no lamp requirement",
          "A white lamp visible from 100 feet, front and rear",
        ],
        correctIndex: 0,
        explanation:
          "A white headlamp visible from 500 feet plus a rear reflector. A flashing red rear beacon is recommended on top of that.",
        context:
          "The bicycle rules also require riding with the flow of traffic, staying as near the right as practicable, not riding more than two abreast, using proper hand signals, and not riding under the influence. Drivers are asked to dim their headlights at night as a courtesy to riders.",
        trap:
          "A reflector is not a lamp. A rider with only reflectors front and rear does not meet the requirement.",
        excerptKey: "bicycle-night-lamp",
        sourceLabel: "Arizona Driver License Manual - Section 4, Important rules for bicyclists",
        sourceUrl: HB,
      },
      {
        id: "az_s6_19",
        topic: "safety",
        question:
          "A wall of dust is closing on the highway ahead. What does Arizona want you to do first?",
        choices: [
          "Switch on your hazard flashers and keep driving slowly",
          "Follow the tail lights of the car in front",
          "Check traffic, slow down, and get completely off the highway as soon as you can",
          "Stop in the emergency lane before visibility goes",
        ],
        correctIndex: 2,
        explanation:
          "Check the traffic around you, begin slowing, and pull completely off the highway - and do it early rather than waiting for visibility to fail.",
        context:
          "Once you are off the road, stop as far right as possible, never in a travel lane or the emergency lane, turn your lights off, take your foot off the brake, stay belted in the vehicle and wait for the storm to pass. Arizona calls the whole procedure Pull Aside, Stay Alive.",
        commonlyMissed: true,
        trap:
          "Following the tail lights ahead is the single most dangerous choice in a dust storm - those lights may belong to a car that has already stopped.",
        excerptKey: "dust-storm-off-highway",
        sourceLabel: "Arizona Driver License Manual - Section 5, Dust Storms",
        sourceUrl: HB,
      },
      {
        id: "az_s6_20",
        topic: "parking",
        question: "What does Arizona say about relying on a reversing camera?",
        choices: [
          "It replaces the need to look behind you",
          "Turn around and look through the rear window - do not depend on mirrors or backup cameras",
          "It is sufficient if paired with parking sensors",
          "It may be used only in daylight",
        ],
        correctIndex: 1,
        explanation:
          "Arizona names backup cameras specifically and tells you not to depend on them. Turn round and look through the rear window.",
        context:
          "The manual's reversing routine is to check behind the car before you even get in, because children and small objects are invisible from the driver's seat, then to turn and look directly through the rear window, and to back up slowly. Reversing is singled out as dangerous precisely because your view is so poor.",
        trap:
          "A camera shows a rectangle of ground directly behind the bumper. The child running in from the side is outside it.",
        excerptKey: "backing-up-rear-window",
        sourceLabel: "Arizona Driver License Manual - Section 2, Backing Up/Reversing",
        sourceUrl: HB,
      },
      {
        id: "az_s6_21",
        topic: "impairment",
        question: "How many points does a speeding conviction carry in Arizona?",
        choices: ["3", "2", "4", "6"],
        correctIndex: 0,
        explanation:
          "Three points for speeding - the same as driving over or parking in a gore area, and more than the two carried by most other moving violations.",
        context:
          "The scale runs eight points for DUI, extreme DUI, aggravated DUI, reckless driving, racing and aggressive driving; six for leaving the scene of a crash; three for speeding and for gore area violations; and two for wrong-way driving and for all other moving violations. Eight points inside twelve months means Traffic Survival School or a possible suspension.",
        commonlyMissed: true,
        trap:
          "Driving over a gore area carries the same three points as speeding, which surprises people who think of it as a marking rather than a violation.",
        excerptKey: "points-speeding-3",
        sourceLabel: "Arizona Driver License Manual - Section 5, Violation points",
        sourceUrl: HB,
      },
      {
        id: "az_s6_22",
        topic: "rightOfWay",
        question: "What does putting your indicator on actually give you?",
        choices: [
          "Priority over traffic already in the lane you want",
          "Nothing - signalling does not give you the right-of-way",
          "The right to merge after three seconds",
          "Priority at an uncontrolled intersection",
        ],
        correctIndex: 1,
        explanation:
          "Arizona says it plainly: signalling does not give you the right-of-way. It announces an intention and nothing more.",
        context:
          "The signal exists to give other drivers time to react - at least 100 feet, or roughly four seconds, before a turn. It goes on before every lane change, turn, entry to or exit from a freeway, pull-away from a kerb or pull-over. Turning it off afterwards matters too, because a signal left running misleads everyone behind you.",
        trap:
          "Indicating and moving in one action is treating the signal as permission. The other driver still has to leave you the gap.",
        excerptKey: "signal-no-right-of-way",
        sourceLabel: "Arizona Driver License Manual - Section 2, Signaling",
        sourceUrl: HB,
      },
      {
        id: "az_s6_23",
        topic: "emergencies",
        question:
          "You have moved your car off the freeway after a minor crash and called 911. What must you not do?",
        choices: [
          "Wait on the shoulder for police",
          "Leave the scene of the crash",
          "Photograph the damage",
          "Talk to the other driver",
        ],
        correctIndex: 1,
        explanation:
          "Never leave the scene. Moving the vehicle out of live lanes is required; leaving altogether is a separate and serious offence.",
        context:
          "Once you are clear, check that everyone is unhurt, stay out of the travel lanes, watch approaching traffic and wait. Exchange licence numbers, names and addresses, insurers and policy numbers, plate numbers and witness details, and call the police immediately if anyone is injured.",
        trap:
          "Clearing the roadway and leaving the scene feel like the same movement. One is required by law and the other costs you your licence.",
        excerptKey: "never-leave-scene",
        sourceLabel: "Arizona Driver License Manual - Section 6, Quick Clearance",
        sourceUrl: HB,
      },
      {
        id: "az_s6_24",
        topic: "rules",
        question:
          "You will be driving several blocks along a one-way street. Which lane does Arizona suggest?",
        choices: [
          "The left lane, for the best view ahead",
          "The right lane, nearest the kerb",
          "Whichever lane is moving fastest",
          "The centre lane, since the outer lanes are used by turning vehicles",
        ],
        correctIndex: 3,
        explanation:
          "The centre lane, because the left and right lanes on a one-way street are the ones turning traffic will be using.",
        context:
          "The advice fits the wider lane-use rules. Stay right on ordinary two-way roads and use the left lane only to pass; on a one-way street the same logic points to the middle, since both outer lanes serve turning movements. On a roadway with three lanes the centre one is reserved for passing, preparing to turn left, or where it is signposted for your direction.",
        trap:
          "Habitually hugging the right kerb on a one-way street puts you in the lane every right-turning driver needs.",
        excerptKey: "one-way-center-lane",
        sourceLabel: "Arizona Driver License Manual - Section 3, One-Way Streets",
        sourceUrl: HB,
      },
      {
        id: "az_s6_25",
        topic: "safety",
        question:
          "Rain has just started and your windscreen is dusty. What does Arizona suggest about the wipers?",
        choices: [
          "Run them at full speed immediately",
          "Wait a short time before using them, or they will smear",
          "Use the washers first and leave the wipers off",
          "Use them intermittently only above 40 mph",
        ],
        correctIndex: 1,
        explanation:
          "Wait a moment after the rain begins. On a dirty windscreen the blades smear rather than clear.",
        context:
          "That first-rain advice pairs with the warning about the surface: for about thirty minutes after rain starts, grime and oil mix with the water and make the road slippery. Slow down and stretch the gap to the vehicle ahead to at least six seconds, and watch for vehicles behind and in your blind spots, which are especially hard to see in heavy rain.",
        trap:
          "A smeared windscreen at the exact moment the road turns slick is a compounding problem, not two separate ones.",
        excerptKey: "rain-wipers-smear",
        sourceLabel: "Arizona Driver License Manual - Section 5, Rain",
        sourceUrl: HB,
      },
      {
        id: "az_s6_26",
        topic: "signals",
        question: "What do yellow centre lines on an Arizona road tell you?",
        choices: [
          "That the lane is reserved for turning",
          "That the road is one-way",
          "That there is a bicycle lane alongside",
          "That there is two-way traffic, flowing in both directions",
        ],
        correctIndex: 3,
        explanation:
          "Yellow means opposing traffic. White lines are what separate lanes moving the same way and mark the edge of the roadway.",
        context:
          "That single distinction unlocks most of the marking rules. Yellow separates opposing traffic, so crossing it puts you in the path of oncoming vehicles - broken yellow permits it when clear, solid does not. White separates same-direction traffic, so crossing it is a lane change - broken permits it with caution, single solid discourages it, double solid prohibits it.",
        trap:
          "Reading the pattern without reading the colour is the mistake. Broken means the same thing in both colours, but what you are crossing into does not.",
        excerptKey: "markings-yellow-white",
        sourceLabel: "Arizona Driver License Manual - Section 3, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "az_s6_27",
        topic: "sharing",
        question: "How does a large truck's stopping distance compare with a car's?",
        choices: [
          "About the same, thanks to air brakes",
          "Slightly longer when loaded",
          "It takes trucks twice as long to stop",
          "Roughly half again as long",
        ],
        correctIndex: 2,
        explanation:
          "Twice as long. That is why cutting into the space in front of a truck halves the room it has to stop in.",
        context:
          "Arizona's five truck rules follow from that: do not cut in front of them, stay out of their blind spots, follow far enough back to see past them, watch their turn signals because they swing wide, and pull well off the highway if you break down. A truck can weigh as much as twenty-five cars, which is what makes a shoulder collision so severe.",
        trap:
          "The gap in front of a truck is large because the truck needs it, not because the driver is leaving room for you.",
        excerptKey: "truck-stopping",
        sourceLabel: "Arizona Driver License Manual - Section 4, Sharing the Road with a Truck",
        sourceUrl: HB,
      },
      {
        id: "az_s6_28",
        topic: "licensing",
        question: "What is the minimum age for an Arizona operator (Class D) licence?",
        choices: [
          "18",
          "16",
          "17",
          "21",
        ],
        correctIndex: 0,
        explanation:
          "Eighteen. Below that age the route is the graduated Class G licence, available from 16.",
        context:
          "An operator licence covers any vehicle that does not need a motorcycle or commercial licence. A holder of a graduated licence is not obliged to switch to an operator licence at 18, though they may. The operator instruction permit also has an 18 minimum, whereas the graduated and motorcycle permits start at 15 years 6 months.",
        trap:
          "Turning 18 does not automatically convert a Class G licence. It just lifts the restrictions and makes the switch optional.",
        excerptKey: "operator-license-18",
        sourceLabel: "Arizona Driver License Manual - Classes of Licenses, Operator License",
        sourceUrl: HB,
      },
      {
        id: "az_s6_29",
        topic: "safety",
        question:
          "What is the overriding rule Arizona gives about speed at night?",
        choices: [
          "Stay 10 mph below the posted limit after dark",
          "Never drive so fast that you cannot stop within the distance your lights show you",
          "Use high beams to extend your safe speed",
          "Match the speed of the traffic around you",
        ],
        correctIndex: 1,
        explanation:
          "Your lights define your stopping distance at night. Arizona's rule is never to outdrive them.",
        context:
          "The manual calls headlights a poor substitute for daylight, and pairs the rule with the beam distances - high beams where no oncoming vehicle is within 500 feet, low beams within 200 feet of a car you are following, low beams on city streets. Glare, unseen objects and reduced visibility are what make night driving hazardous.",
        trap:
          "Low beams reach far less far than high beams, so dropping to low without dropping speed is exactly the situation the rule describes.",
        excerptKey: "night-overdriving-lights",
        sourceLabel: "Arizona Driver License Manual - Section 5, Night Driving",
        sourceUrl: HB,
      },
      {
        id: "az_s6_30",
        topic: "rightOfWay",
        question: "Which way do you go around the central island of a roundabout in Arizona?",
        choices: [
          "Enter to the right of the central island",
          "Enter to the left of the central island",
          "Whichever way your exit is closer",
          "To the left if turning left, to the right otherwise",
        ],
        correctIndex: 0,
        explanation:
          "Always to the right of the central island, so traffic circulates in one consistent direction.",
        context:
          "The statute states the same rule for rotary traffic islands generally. Beyond direction, the roundabout rules are to slow to the 15 to 20 mph the design assumes, yield to circulating traffic and to large vehicles entering at the same time as you, yield to pedestrians and cyclists crossing the approaches, and keep moving once you are inside.",
        trap:
          "A driver used to left-hand traffic, or one who spots a nearer exit to the left, is the one this rule is written for.",
        excerptKey: "roundabout-enter-right",
        sourceLabel: "Arizona Driver License Manual - Section 2, Roundabouts",
        sourceUrl: HB,
      },
    ],
  },
];
