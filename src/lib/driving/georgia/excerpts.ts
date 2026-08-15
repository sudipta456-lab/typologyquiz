import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Georgia Department of Driver Services
// Driver's Manual, quoted from the manual DDS publishes section by section on
// dds.georgia.gov (the same text as the printed PDF, but each rule carries its
// own deep link), plus the DDS points schedule and teen-driving pages for the
// handful of rules the manual chapters do not spell out.
//
// Every `quote` below was located mechanically in the fetched official source
// and checked as an exact substring before it was written here. Nothing is
// paraphrased. Three mechanical normalisations were applied to the fetched
// text and to nothing else: curly quotes, en dashes and em dashes are folded to
// ASCII; soft hyphens and the line breaks that split a word across a column are
// removed; and runs of whitespace are collapsed to a single space. Where DDS
// states a rule as a stem followed by a bulleted list, the items are run
// together in the order they appear - no words are changed, dropped or
// reordered. DDS's own typographical slips are preserved as they stand,
// because a quote that has been tidied up is no longer a quote.
//
// These are quoted, not summarised, because the Georgia knowledge exam - 20
// road signs questions and 20 road rules questions - is written from this
// wording. Each one is kept to the operative rule and shown with its source,
// section and a link back to DDS so the learner reads the real thing.

const MANUAL = "Georgia Department of Driver Services Driver's Manual (2023-2024)";
const DDS = "Georgia Department of Driver Services";

const U1 = "https://dds.georgia.gov/section-5-continued-other-laws";
const U2 = "https://dds.georgia.gov/section-7-continued";
const U3 = "https://dds.georgia.gov/section-5-continued";
const U4 = "https://dds.georgia.gov/document/publication/ga-drivers-manual/download";
const U5 = "https://dds.georgia.gov/section-5-continued-keep-right-except-pass";
const U6 = "https://dds.georgia.gov/section-7-continued-more-warning-signs";
const U7 = "https://dds.georgia.gov/section-9-continued";
const U8 = "https://dds.georgia.gov/section-7-continued-traffic-signals-and-signs";
const U9 = "https://dds.georgia.gov/section-7-continued-other-signs-signals";
const U10 = "https://dds.georgia.gov/section-5-turning-signals-parallel-parking";
const U11 = "https://dds.georgia.gov/section-6-continued";
const U12 = "https://dds.georgia.gov/section-7-continued-warning-signs";
const U13 = "https://dds.georgia.gov/section-10-continued";
const U14 = "https://dds.georgia.gov/section-7-signs-signals-markings";
const U15 = "https://dds.georgia.gov/section-8-continued-more-safety-guidelines-pt2";
const U16 = "https://dds.georgia.gov/section-9-continued-sharing-road";
const U17 = "https://dds.georgia.gov/section-11-crashes";
const U18 = "https://dds.georgia.gov/section-7-continued-guide-signs";
const U19 = "https://dds.georgia.gov/teen-driving-laws-faqs";
const U20 = "https://dds.georgia.gov/section-7-more-signals-signs";
const U21 = "https://dds.georgia.gov/section-9-sharing-road";
const U22 = "https://dds.georgia.gov/section-3-testing-information";
const U23 = "https://dds.georgia.gov/section-7-continued-construction-maintenance-warning-signs";
const U24 = "https://dds.georgia.gov/section-5-traffic-laws";
const U25 = "https://dds.georgia.gov/section-8-continued-more-safety-guidelines";
const U26 = "https://dds.georgia.gov/section-3-continued";
const U27 = "https://dds.georgia.gov/section-1-continued";
const U28 = "https://dds.georgia.gov/section-2-continued-other-license-types-continued";
const U29 = "https://dds.georgia.gov/teen-drivers/joshuas-law-requirements";
const U30 = "https://dds.georgia.gov/section-6-teen-driving-laws";
const U31 = "https://dds.georgia.gov/section-10-continued-safety-responsibility-law";

export const georgiaExcerpts: HandbookExcerpt[] = [
  {
    key: "sign-shapes-seven",
    quote:
      "The State of Georgia uses seven basic shapes of signs to convey traffic control instructions. Drivers should know signs by their shapes and colors so that they may recognize them from a distance and begin reacting timely and appropriately.",
    source: MANUAL,
    section: "Section 7: Signs, Signals & Markings - Shapes of Signs",
    url: U14,
  },
  {
    key: "sign-vertical-rectangle",
    quote:
      "Vertical Rectangle signs are generally used for regulatory signs, which tell you what you must do. You must obey them in the same manner as traffic laws.",
    source: MANUAL,
    section: "Section 7: Signs, Signals & Markings - Shapes of Signs",
    url: U14,
  },
  {
    key: "sign-octagon",
    quote:
      "An Octagon (eight-sided shape) always means stop. When you come to it, you must make a complete stop at a marked stop line. If there is no stop line, stop before the crosswalk on your side of the intersection. If there is no crosswalk, stop at a point from which you can best see oncoming traffic.",
    source: MANUAL,
    section: "Section 7: Signs, Signals & Markings - Shapes of Signs",
    url: U14,
  },
  {
    key: "sign-triangle",
    quote:
      "Triangle signs mean yield. You must slow down to a speed that is reasonable for existing conditions and stop if necessary. If you must stop, do so at a marked stop line, if it exists.",
    source: MANUAL,
    section: "Section 7 Continued - Shapes of Signs",
    url: U2,
  },
  {
    key: "sign-diamond",
    quote:
      "Diamond shaped signs warn of existing or possible hazards on roadways or adjacent areas. They are yellow with black words indicating the potential hazard, or black symbols visually describing the potential hazard.",
    source: MANUAL,
    section: "Section 7 Continued - Shapes of Signs",
    url: U2,
  },
  {
    key: "sign-round",
    quote:
      "A round sign means you are approaching a railroad crossing. This sign is posted a few hundred feet in front of the tracks and alerts you to slow down, look, listen and prepare to stop.",
    source: MANUAL,
    section: "Section 7 Continued - Shapes of Signs",
    url: U2,
  },
  {
    key: "sign-pentagon",
    quote:
      "Pentagon shaped signs mean you are approaching a school zone and/or school crossing. When used, they will be erected not less than 150 feet nor more than 700 feet in advance of the school grounds or school crossing.",
    source: MANUAL,
    section: "Section 7 Continued - Shapes of Signs",
    url: U2,
  },
  {
    key: "railroad-no-passing",
    quote:
      "Passing is prohibited at all railroad crossings.",
    source: MANUAL,
    section: "Section 7 Continued - Shapes of Signs",
    url: U2,
  },
  {
    key: "regulatory-signs",
    quote:
      "Regulatory signs tell drivers what they may or may not do. Drivers, including bicyclists, must obey them in the same manner as traffic laws.",
    source: MANUAL,
    section: "Section 7 Continued - Regulatory Signs",
    url: U2,
  },
  {
    key: "red-circle-slash",
    quote:
      "Remember, a red circle with a red slash from upper left to lower right means \"No.\" The picture within the circle shows what is prohibited.",
    source: MANUAL,
    section: "Section 7 Continued - Regulatory Signs",
    url: U2,
  },
  {
    key: "sign-wrong-way",
    quote:
      "You are approaching a one-way highway or ramp. Driving on the highway or ramp in the direction you are traveling is not allowed.",
    source: MANUAL,
    section: "Section 7 Continued - Regulatory Signs (Wrong Way)",
    url: U2,
  },
  {
    key: "sign-do-not-enter",
    quote:
      "This marks a one-way road. If you are facing this sign traffic is coming toward you. You must not continue down the road.",
    source: MANUAL,
    section: "Section 7 Continued - Regulatory Signs (Do Not Enter)",
    url: U2,
  },
  {
    key: "sign-no-u-turn",
    quote:
      "You cannot turn around to go in the opposite direction at this intersection.",
    source: MANUAL,
    section: "Section 7 Continued - Regulatory Signs (No U Turn)",
    url: U2,
  },
  {
    key: "sign-school-speed-limit",
    quote:
      "You are approaching a school zone. A reduced speed limit is in effect when the yellow lights are flashing.",
    source: MANUAL,
    section: "Section 7 Continued - Regulatory Signs (School Speed Limit)",
    url: U2,
  },
  {
    key: "sign-one-way",
    quote:
      "You may travel only in the direction of the arrow.",
    source: MANUAL,
    section: "Section 7 Continued - Regulatory Signs (One Way)",
    url: U2,
  },
  {
    key: "sign-keep-right",
    quote:
      "Traffic is required to keep to the right of medians or obstructions.",
    source: MANUAL,
    section: "Section 7 Continued - Regulatory Signs (Keep Right)",
    url: U2,
  },
  {
    key: "sign-slower-traffic-keep-right",
    quote:
      "When two or more traveling lanes are available in the direction you are traveling, slower traffic should travel in the right (outside) lane(s).",
    source: MANUAL,
    section: "Section 7 Continued - Regulatory Signs (Slower Traffic Keep Right)",
    url: U2,
  },
  {
    key: "sign-speed-limit",
    quote:
      "55 miles per hour is the maximum speed limit permitted in this area.",
    source: MANUAL,
    section: "Section 7 Continued - Regulatory Signs (Speed Limit)",
    url: U2,
  },
  {
    key: "sign-no-turn-on-red",
    quote:
      "A right turn on red is prohibited, even after coming to a complete stop.",
    source: MANUAL,
    section: "Section 7 Continued - Regulatory Signs (No Right Turn On Red)",
    url: U2,
  },
  {
    key: "warning-signs-color",
    quote:
      "Warning signs are usually yellow with black markings. (Warning signs can also be fluorescent green with black markings.) They alert you to conditions that are immediately ahead.",
    source: MANUAL,
    section: "Section 7 Continued: Warning Signs",
    url: U12,
  },
  {
    key: "sign-narrow-bridge",
    quote:
      "The bridge ahead allows room for only two lanes of traffic. Approach with caution.",
    source: MANUAL,
    section: "Section 7 Continued: Warning Signs (Narrow Bridge)",
    url: U12,
  },
  {
    key: "sign-soft-shoulder",
    quote:
      "Shoulder of the road is soft. Drive on the shoulder only in emergencies.",
    source: MANUAL,
    section: "Section 7 Continued: Warning Signs (Soft Shoulder)",
    url: U12,
  },
  {
    key: "sign-two-way-traffic",
    quote:
      "Warning that you are leaving a separated one-way highway and will soon be driving on a two-way highway.",
    source: MANUAL,
    section: "Section 7 Continued: Warning Signs (Two Way Traffic)",
    url: U12,
  },
  {
    key: "sign-divided-highway-begins",
    quote:
      "Divided highway begins. Prepare to change lanes or shift lane position.",
    source: MANUAL,
    section: "Section 7 Continued: Warning Signs (Divided Highway)",
    url: U12,
  },
  {
    key: "sign-low-clearance",
    quote:
      "Approaching a low underpass. Do not enter if your vehicle or cargo exceeds the maximum height indicated on the sign.",
    source: MANUAL,
    section: "Section 7 Continued: Warning Signs (Low Clearance)",
    url: U12,
  },
  {
    key: "sign-dip",
    quote:
      "There is a dip in the road ahead. Slow down!",
    source: MANUAL,
    section: "Section 7 Continued: Warning Signs (Dip)",
    url: U12,
  },
  {
    key: "sign-road-ends",
    quote:
      "The road you are traveling on ends straight ahead. Slow down and prepare to yield or stop before turning right or left.",
    source: MANUAL,
    section: "Section 7 Continued: More Warning Signs (Road Ends)",
    url: U6,
  },
  {
    key: "sign-divided-highway-ends",
    quote:
      "Divided highway ends. Prepare to change lanes or shift lane position.",
    source: MANUAL,
    section: "Section 7 Continued: More Warning Signs (Divided Highway Ends)",
    url: U6,
  },
  {
    key: "sign-hill",
    quote:
      "Steep hill ahead. Slow down and be ready to shift to lower gear to control speed and protect brakes from damage.",
    source: MANUAL,
    section: "Section 7 Continued: More Warning Signs (Hill)",
    url: U6,
  },
  {
    key: "sign-slippery-when-wet",
    quote:
      "Roadway is slippery when wet. Remember, the first half-hour of rain is most hazardous.",
    source: MANUAL,
    section: "Section 7 Continued: More Warning Signs (Slippery When Wet)",
    url: U6,
  },
  {
    key: "sign-merge",
    quote:
      "Traffic merging from the right. Prepare to allow traffic to safely merge.",
    source: MANUAL,
    section: "Section 7 Continued: More Warning Signs (Merge)",
    url: U6,
  },
  {
    key: "sign-yield-ahead",
    quote:
      "There is a yield sign ahead. Slow down and prepare to stop if necessary.",
    source: MANUAL,
    section: "Section 7 Continued: More Warning Signs (Yield Ahead)",
    url: U6,
  },
  {
    key: "sign-stop-ahead",
    quote:
      "There is a stop sign ahead. Begin to slow down and be prepared to stop.",
    source: MANUAL,
    section: "Section 7 Continued: More Warning Signs (Stop Ahead)",
    url: U6,
  },
  {
    key: "sign-no-passing-zone",
    quote:
      "This sign is on the left side of the highway and marks the beginning of a no passing zone. Any passing maneuver must be completed before reaching this sign.",
    source: MANUAL,
    section: "Section 7 Continued: More Warning Signs (No Passing Zone)",
    url: U6,
  },
  {
    key: "sign-lanes-reduced",
    quote:
      "Number of lanes reduced ahead.",
    source: MANUAL,
    section: "Section 7 Continued: More Warning Signs (Lanes Reduced)",
    url: U6,
  },
  {
    key: "sign-pedestrians-in-crosswalk",
    quote:
      "Drivers must stop and stay stopped when pedestrians are in the crosswalk.",
    source: MANUAL,
    section: "Section 7 Continued: More Warning Signs (Pedestrians In Crosswalk)",
    url: U6,
  },
  {
    key: "guide-signs",
    quote:
      "Guide signs may indicate what road you are on, and how to get to your destination. Many guide signs are rectangular, but some have other shapes.",
    source: MANUAL,
    section: "Section 7 Continued: Guide Signs",
    url: U18,
  },
  {
    key: "sign-slow-moving-vehicle",
    quote:
      "Caution - a vehicle displaying this emblem is a slow-moving vehicle. A slow-moving vehicle is defined as any vehicle moving less than 25 miles per hour. They are required by law to display this emblem.",
    source: MANUAL,
    section: "Section 7 Continued: Guide Signs (Slow-Moving Vehicle)",
    url: U18,
  },
  {
    key: "sign-crossbuck",
    quote:
      "The cross-buck is placed at all railroad crossings. Yield to any approaching trains. Slow down, look and listen before crossing. A sign below the cross-buck indicates the number of tracks. A complete stop is required when a red light is flashing.",
    source: MANUAL,
    section: "Section 7 Continued: Guide Signs (Railroad Crossing)",
    url: U18,
  },
  {
    key: "construction-signs-orange",
    quote:
      "Warning signs for construction and maintenance projects are used to alert you to dangers ahead and give you enough time to adjust your speed accordingly. These signs are orange with black markings.",
    source: MANUAL,
    section: "Section 7 Continued: Construction & Maintenance Warning Signs",
    url: U23,
  },
  {
    key: "sign-advisory-plaques",
    quote:
      "These signs may be accompanied by speed advisory plaques that indicate the speed with which you should proceed.",
    source: MANUAL,
    section: "Section 7 Continued: More Warning Signs (Speed Limit Signs)",
    url: U6,
  },
  {
    key: "sign-crossing-advance",
    quote:
      "These signs alert drivers in advance of areas where animals, people, and vehicles may be crossing.",
    source: MANUAL,
    section: "Section 7 Continued: More Warning Signs (Crossing Signs)",
    url: U6,
  },
  {
    key: "signal-not-functioning",
    quote:
      "If a traffic signal is not functioning at all at an intersection, all drivers must treat the intersection as if a stop sign is posted for all directions.",
    source: MANUAL,
    section: "Section 7 Continued: Traffic Signals and Signs",
    url: U8,
  },
  {
    key: "signal-malfunction-flashing",
    quote:
      "If a traffic signal is malfunctioning and flashing, drivers must proceed based on the color of the flashing signal they are facing: if the driver is facing a yellow flashing signal, the driver may proceed with caution;",
    source: MANUAL,
    section: "Section 7 Continued: Traffic Signals and Signs",
    url: U8,
  },
  {
    key: "signal-red",
    quote:
      "A red light means you must make a complete stop before entering the crosswalk or intersection and wait until the light turns to green before proceeding.",
    source: MANUAL,
    section: "Section 7 Continued: Traffic Signals and Signs",
    url: U8,
  },
  {
    key: "signal-yellow",
    quote:
      "A yellow light warns that the light is changing from green to red. Slow down and prepare to stop.",
    source: MANUAL,
    section: "Section 7 Continued: Traffic Signals and Signs",
    url: U8,
  },
  {
    key: "signal-green",
    quote:
      "A green light means you may proceed if it is safe to do so after stopping for pedestrians and yielding to vehicles within the intersection.",
    source: MANUAL,
    section: "Section 7 Continued: Traffic Signals and Signs",
    url: U8,
  },
  {
    key: "signal-flashing-red",
    quote:
      "A red flashing light means you must stop completely (treat as you would a stop sign). Proceed with caution only after yielding the right-of-way to pedestrians and to other vehicles at the intersection.",
    source: MANUAL,
    section: "Section 7 Continued: Traffic Signals and Signs",
    url: U8,
  },
  {
    key: "signal-flashing-yellow",
    quote:
      "A yellow flashing light means you must slow down and exercise caution before proceeding through the intersection.",
    source: MANUAL,
    section: "Section 7 Continued: Traffic Signals and Signs",
    url: U8,
  },
  {
    key: "signal-flashing-yellow-arrow",
    quote:
      "A flashing yellow arrow means you may turn left after yielding to oncoming traffic and pedestrians (oncoming traffic still has the green light).",
    source: MANUAL,
    section: "Section 7 Continued: Traffic Signals and Signs",
    url: U8,
  },
  {
    key: "ped-signal-flashing",
    quote:
      "Flashing - do not leave the curb, but complete walking across the street if already started.",
    source: MANUAL,
    section: "Section 7: More Signals & Signs - Pedestrian Signals",
    url: U20,
  },
  {
    key: "phb-flashing-red",
    quote:
      "The double solid red signals are followed by alternating FLASHING RED signals. This requires drivers to come to a full STOP, and proceed when pedestrians have cleared the crosswalk.",
    source: MANUAL,
    section: "Section 7: More Signals & Signs - Pedestrian-Hybrid Beacons",
    url: U20,
  },
  {
    key: "stop-lines",
    quote:
      "Drivers must come to a complete stop at the stop line, when present, not at the actual stop sign or traffic signal.",
    source: MANUAL,
    section: "Section 7 Continued: Other Signs & Signals - Stop Lines",
    url: U9,
  },
  {
    key: "center-lines",
    quote:
      "These are used to separate traffic moving in opposite directions on paved roadways. Broken yellow lines are used when there are only two lanes and it is safe to pass in either direction.",
    source: MANUAL,
    section: "Section 7 Continued: Other Signs & Signals - Center Lines",
    url: U9,
  },
  {
    key: "no-passing-lines",
    quote:
      "These single, solid yellow lines on two-lane roads indicate zones where passing is prohibited. They will be located on the right of the broken yellow line when they apply to the lane in which you are traveling.",
    source: MANUAL,
    section: "Section 7 Continued: Other Signs & Signals - No Passing Lines",
    url: U9,
  },
  {
    key: "double-white-lines",
    quote:
      "When the double white lines are dashed, vehicles are allowed to cross over to the adjacent lane. When the double white lines are solid, lane changes are prohibited.",
    source: MANUAL,
    section: "Section 7 Continued: Other Signs & Signals - Double White Lines",
    url: U9,
  },
  {
    key: "four-or-more-lanes",
    quote:
      "When there are four or more lanes with traffic moving in opposite directions, two solid yellow lines mark the center of the roadway. You may cross these lines only to make a left turn into or from an alley, private road, driveway, or another street.",
    source: MANUAL,
    section: "Section 7 Continued: Other Signs & Signals - Lane Lines",
    url: U9,
  },
  {
    key: "traffic-striping",
    quote:
      "The area is similar to a triangle with solid yellow diagonal lines within the outside lines. Always keep to the right of these markings.",
    source: MANUAL,
    section: "Section 7 Continued: Other Signs & Signals - Traffic Striping",
    url: U9,
  },
  {
    key: "turn-lanes",
    quote:
      "Georgia law prohibits the use of this lane for any purpose other than making a left turn. You may enter this lane no more than 300 feet from the location of the left turn.",
    source: MANUAL,
    section: "Section 7 Continued: Other Signs & Signals - Turn Lanes",
    url: U9,
  },
  {
    key: "bicycle-lanes",
    quote:
      "Drivers of motor vehicles are prohibited from driving or parking in the bicycle lane, except to cross over it to make a turn. When crossing over a bicycle lane to make a turn, motorists must yield to bicyclists that are present.",
    source: MANUAL,
    section: "Section 7 Continued: Other Signs & Signals - Bicycle Lanes",
    url: U9,
  },
  {
    key: "roundabouts",
    quote:
      "You must yield to other traffic that is already in the roundabout. You will always enter a roundabout to the right, and continue circling until you have reached the roadway onto which you want to turn.",
    source: MANUAL,
    section: "Section 7 Continued: Other Signs & Signals - Roundabouts",
    url: U9,
  },
  {
    key: "signs-its-the-law",
    quote:
      "Georgia law requires that all drivers, including bicyclists, obey official highway signs and traffic control signals unless otherwise directed by a police officer or emergency worker.",
    source: MANUAL,
    section: "Section 7: Signs, Signals & Markings - It's the Law",
    url: U14,
  },
  {
    key: "three-basic-laws",
    quote:
      "The three most basic traffic laws require drivers to: Obey traffic control devices (lights and signs); Obey the traffic directions of a law enforcement officer or firefighter, even if it goes against what the traffic control devices tell you to do;",
    source: MANUAL,
    section: "Section 5: Traffic Laws - 3 Most Basic Traffic Laws",
    url: U24,
  },
  {
    key: "row-merging",
    quote:
      "When the roadway you are traveling on is merging into other traffic without stopping, adjust your speed and vehicle position to allow you to merge into the new lane safely.",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "row-uncontrolled",
    quote:
      "At intersections where there are no stop signs, yield signs or other traffic signals, if two vehicles come to the intersection at the same time, the driver of the vehicle on the left must yield to the driver of the vehicle on the right;",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "row-four-way-stop",
    quote:
      "At a four-way intersection where all drivers are faced with stop signs, all drivers must yield to pedestrians; otherwise the vehicles should proceed through the intersection in a \"first to arrive, first to proceed order.\"",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "row-left-turn",
    quote:
      "When making a left turn at an intersection, or into an alley or driveway, yield the right-of-way to all traffic coming from the opposite direction;",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "row-yield-sign",
    quote:
      "When approaching a yield sign, slow down to a safe speed and be prepared to stop. If necessary, stop and only proceed when it is safe to do so;",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "row-green-light",
    quote:
      "At intersections with traffic control lights, wait until the intersection is clear of traffic or approaching traffic before entering. Do not proceed \"just because\" you have the green light;",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "row-alley-private-road",
    quote:
      "If you are about to enter or cross a highway from an alley, private road or highway, you must stop and yield the right-of-way to all other pedestrians and vehicles already traveling on the roadway or sidewalk you are entering or crossing;",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "row-emergency-vehicle",
    quote:
      "If emergency vehicles are using their emergency lights (blue or red) and sirens, safely maneuver your vehicle out of their way. You should slow your vehicle and move over to the shoulder of the road, or if that is not possible, as far to the right of the roadway or lane as you can, and stop.",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "right-turn-on-red",
    quote:
      "Unless a sign posted at that intersection prohibits doing so, it is permissible to make a \"right turn on red\" at an intersection controlled by a traffic control light. You may proceed only after making a complete stop, yielding to all traffic and pedestrians,",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "left-turn-on-red",
    quote:
      "Unless a sign posted at that intersection prohibits doing so, it is permissible to make a \"left turn on red\" from the left lane of a one-way street onto a one-way street on which the traffic moves toward the driver's left.",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "school-bus-yellow-lights",
    quote:
      "When a school bus is preparing to stop to load or unload children, the driver of the bus will activate flashing yellow lights. When these flashing yellow lights are activated, all drivers approaching the school bus should slow down and be prepared to stop.",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "school-bus-red-lights",
    quote:
      "Once the flashing lights have turned red and the stop signs have extended from the side of the bus, it is unlawful for any vehicle to pass the stopped school bus while it is loading or unloading passengers.",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "school-bus-median",
    quote:
      "On a highway divided by a median, cars traveling on the opposite side from the stopped school bus are not required to stop, however drivers should remain attentive for children walking along or crossing the roadway.",
    source: MANUAL,
    section: "Section 5 Continued - Laws Governing Right-of-Way",
    url: U3,
  },
  {
    key: "passing-zone",
    quote:
      "A passing zone is indicated by striped lines to the right of the center line of the roadway. If the line nearest your vehicle is solid, you are not in a passing zone.",
    source: MANUAL,
    section: "Section 5 Continued - How To Pass On A Two-Lane Road",
    url: U3,
  },
  {
    key: "passing-complete-200-feet",
    quote:
      "You must have sufficient time and space to execute your passing maneuver and return your vehicle completely to the right lane before the passing zone ends, before entering an intersection, and before oncoming traffic is within 200 feet of your vehicle;",
    source: MANUAL,
    section: "Section 5 Continued - How To Pass On A Two-Lane Road",
    url: U3,
  },
  {
    key: "passing-prohibited-100-feet",
    quote:
      "Within 100 feet of a railroad crossing; Within 100 feet of a bridge, viaduct or tunnel;",
    source: MANUAL,
    section: "Section 5 Continued - Passing is prohibited on two-lane roads",
    url: U3,
  },
  {
    key: "passing-prohibited-other",
    quote:
      "On a hill or curve where it is not possible to see oncoming vehicles which might be close enough to be a hazard; On the shoulder of the road; When a school bus is stopped to load or unload passengers.",
    source: MANUAL,
    section: "Section 5 Continued - Passing is prohibited on two-lane roads",
    url: U3,
  },
  {
    key: "passing-on-the-right",
    quote:
      "You may pass on the right of another vehicle which is making or about to make a left turn if there is sufficient pavement width for both your vehicle and the vehicle making the left turn.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Passing On The Right",
    url: U4,
  },
  {
    key: "passing-stopped-cars",
    quote:
      "Whenever any vehicle is stopped to permit a pedestrian to cross the roadway at a marked crosswalk or at any unmarked crosswalk at an intersection, the driver of any other vehicle approaching from the rear shall not overtake and pass the stopped vehicle.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Passing Stopped Cars",
    url: U4,
  },
  {
    key: "passing-bicycles",
    quote:
      "reduce the speed of the motor vehicle to a reasonable and proper speed for the traffic conditions, which speed shall be at least ten miles per hour less than the posted speed limit or 25 miles per hour, whichever is more",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Passing Bicycles",
    url: U7,
  },
  {
    key: "passing-motorcyclists",
    quote:
      "A motorcyclist legally occupies the full width of a single lane when traveling. When passing a motorcyclist, a driver must pass in an adjacent lane. Drivers are not permitted to occupy the same lane as a motorcyclist while passing them.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Passing Motorcyclists",
    url: U4,
  },
  {
    key: "weaving",
    quote:
      "It is unlawful to weave from one lane of traffic to another in order to move faster than the flow of traffic.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Weaving",
    url: U4,
  },
  {
    key: "move-over-requirements",
    quote:
      "In Georgia, this law requires motorists to: Move over to the next lane if safely possible. If unable to move over, then slow down below the speed limit and be prepared to stop.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - The \"Move Over\" Law",
    url: U4,
  },
  {
    key: "move-over-scope",
    quote:
      "This law applies to any emergency, sanitation, or utility service vehicle parked on the shoulder of the roadway.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - The \"Move Over\" Law",
    url: U4,
  },
  {
    key: "move-over-fine",
    quote:
      "Violations can result in a fine of no more than $500 for the first offense.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - The \"Move Over\" Law",
    url: U4,
  },
  {
    key: "turn-signal-required",
    quote:
      "A turn signal must be given whenever a turn is made to the right or the left. You must give a continuous turn signal for an adequate distance to alert other drivers before turning.",
    source: MANUAL,
    section: "Section 5: Turning Signals & Parallel Parking - Turn Signals",
    url: U10,
  },
  {
    key: "illegal-signals",
    quote:
      "It is against the law to flash turn signals as a courtesy or \"do pass\" signal to other drivers in the rear.",
    source: MANUAL,
    section: "Section 5: Turning Signals & Parallel Parking - Illegal Signals",
    url: U10,
  },
  {
    key: "right-turn-bike-lane",
    quote:
      "If there is a bicycle lane on the road on which you are traveling, you must yield to bicyclists traveling straight through the intersection before making a right turn;",
    source: MANUAL,
    section: "Section 5: Turning Signals & Parallel Parking - How To Make A Right Turn",
    url: U10,
  },
  {
    key: "left-turn-no-lane-change",
    quote:
      "Once you have entered an intersection to make a left turn, you cannot change lanes in the intersection;",
    source: MANUAL,
    section: "Section 5: Turning Signals & Parallel Parking - How To Make A Left Turn",
    url: U10,
  },
  {
    key: "left-turn-pedestrians",
    quote:
      "You must stop and remain stopped for any pedestrians in the crosswalk of the road you are turning onto until they have cleared the lanes of traffic that you are traveling on.",
    source: MANUAL,
    section: "Section 5: Turning Signals & Parallel Parking - How To Make A Left Turn",
    url: U10,
  },
  {
    key: "u-turns",
    quote:
      "Do not make a U-turn on a curve or near the top of a hill if you cannot be seen by other drivers approaching from either direction. Do not make a U-turn where signs prohibit doing so.",
    source: MANUAL,
    section: "Section 5: Turning Signals & Parallel Parking - U-Turns",
    url: U10,
  },
  {
    key: "parking-on-highway",
    quote:
      "It is against the law to park on a highway. If the vehicle is disabled, you should make every practical effort to park off the highway, leaving free passage and a clear view of your vehicle for 200 feet in each direction.",
    source: MANUAL,
    section: "Section 5: Turning Signals & Parallel Parking - Stopping, Standing, and Parking",
    url: U10,
  },
  {
    key: "parking-never",
    quote:
      "On the street side of any parked vehicle; On a sidewalk; Within an intersection; On a crosswalk; Between a safety zone and the adjacent curb;",
    source: MANUAL,
    section: "Section 5: Turning Signals & Parallel Parking - Stopping, Standing, and Parking",
    url: U10,
  },
  {
    key: "parking-distances",
    quote:
      "Within 15 feet of a fire hydrant; Within 20 feet of a crosswalk at an intersection; Within 30 feet of a stop sign, yield sign, or traffic control signal; Within 20 feet of a fire station driveway; Within 75 feet of the spot across the street from a fire station driveway; Within 50 feet of a railroad crossing;",
    source: MANUAL,
    section: "Section 5: Turning Signals & Parallel Parking - Stopping, Standing, and Parking",
    url: U10,
  },
  {
    key: "backing-up",
    quote:
      "Before backing, check all sides of your vehicle to make sure it is safe to do so. You should turn your head and look over your right shoulder while backing; do not depend on your mirrors;",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Backing Up",
    url: U5,
  },
  {
    key: "super-speeder",
    quote:
      "Any driver convicted of speeding 75 mph or more on a two-lane road or 85 miles per hour or more on any road in Georgia, will be assessed a $200 state fee.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Super Speeder",
    url: U5,
  },
  {
    key: "super-speeder-nonpayment",
    quote:
      "Failure to pay the state fee on time will result in a license suspension and additional $50 reinstatement fee.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Super Speeder",
    url: U5,
  },
  {
    key: "speed-limits-general",
    quote:
      "30 miles per hour in any urban or residential district; 35 miles per hour on an unpaved county road; 70 miles per hour on a rural interstate; 65 miles per hour on an urban interstate or on a multi-lane divided highway; 55 miles per hour in all other areas.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Speed Limits",
    url: U5,
  },
  {
    key: "driving-too-slowly",
    quote:
      "Drivers are prohibited from driving a motor vehicle at such a slow speed as to impede the normal and reasonable movement of traffic except when a reduced speed is necessary for safe operation.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Driving Too Slowly",
    url: U5,
  },
  {
    key: "slow-poke-law",
    quote:
      "Slower drivers must move out of the passing lane (most left-hand lanes) and over to the right to allow faster-moving traffic to proceed. Regardless of the speed you are traveling, you must move from the lane when faster traffic is approaching.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - The \"Slow Poke\" Law (House Bill 459)",
    url: U5,
  },
  {
    key: "slow-poke-exceptions",
    quote:
      "When traffic conditions make it necessary to drive in the passing lane; When inclement weather, obstructions, or hazards make it necessary to drive in the passing lane; When compliance with a law of this state or with an official traffic control device makes it necessary to drive in the passing lane;",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - The \"Slow Poke\" Law (House Bill 459)",
    url: U5,
  },
  {
    key: "railroad-stop-distance",
    quote:
      "You must always stop within 50 feet, but not less than 15 feet, from the nearest rail of a railroad crossing when any of the following apply:",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Railroad Crossings",
    url: U5,
  },
  {
    key: "railroad-gates",
    quote:
      "Under no circumstances should a motorist drive through, around or under any crossing gate while the gate is lowered.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Railroad Crossings",
    url: U5,
  },
  {
    key: "work-zone-speed-penalty",
    quote:
      "Motorists who disobey regulatory speed limits in a work zone may be found guilty of a misdemeanor of a high and aggravated nature and will be punished by a fine of not less than $100.00 nor more than $2,000.00, or by imprisonment for a term not to exceed 12 months, or both.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Reduce Your Speed",
    url: U5,
  },
  {
    key: "work-zone-flagger",
    quote:
      "Flaggers are people used to direct traffic through and around work zones. In a work zone, a flagger has the same authority as a regulatory sign. Do not disobey a flagger's traffic control directions.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Obey Flaggers",
    url: U5,
  },
  {
    key: "work-zone-amber",
    quote:
      "Work vehicles and heavy equipment will typically have flashing or revolving amber lights.You must yield the right-of-way to these vehicles. Reduce your speed as you approach any work zone where vehicles have amber lights displayed.",
    source: MANUAL,
    section: "Section 5 Continued: Keep Right, Except to Pass - Yield to Amber Lights",
    url: U5,
  },
  {
    key: "dui-21-and-over",
    quote:
      "A person 21 or more years of age is considered \"Under the Influence of Alcohol\" when 0.08 gm or more by alcohol weight is present in the blood;",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Driving Under the Influence",
    url: U1,
  },
  {
    key: "dui-under-21",
    quote:
      "A person under 21 years of age is irrefutably considered \"Under the Influence of Alcohol\" when 0.02 gm or more by alcohol weight is present in the blood;",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Driving Under the Influence",
    url: U1,
  },
  {
    key: "dui-prescription",
    quote:
      "Having a prescription for certain medication is not a defense if the medication impairs your ability to safely operate a motor vehicle.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Driving Under the Influence",
    url: U1,
  },
  {
    key: "reckless-driving",
    quote:
      "Reckless driving is defined as driving any vehicle in reckless disregard for the safety of persons or property. Examples of reckless driving include but are not limited to speeding, weaving in and out of traffic, improperly passing, etc.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Reckless Driving",
    url: U1,
  },
  {
    key: "aggressive-driving",
    quote:
      "A person commits the offense of aggressive driving when he or she operates any motor vehicle with the intent to annoy, harass, molest, intimidate, injure, or obstruct another person;",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Aggressive Driving",
    url: U1,
  },
  {
    key: "median-strip",
    quote:
      "It is unlawful to drive across a dividing section, barrier, or unpaved strip which separates two roadways at any point other than at an authorized opening or crossover.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Median Strip",
    url: U1,
  },
  {
    key: "headphones",
    quote:
      "It is unlawful to operate a motor vehicle while wearing a headphone, headset, or any other device which would impair the driver's ability to hear.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Impaired Hearing and Vision",
    url: U1,
  },
  {
    key: "opening-doors",
    quote:
      "Opening the doors of a vehicle on the side on which traffic is moving is prohibited unless it is safe to do so and unless it can be done without interfering with the movement of other traffic, including bicyclists that may be operating close to the lane of parked cars.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Opening Vehicle Doors",
    url: U1,
  },
  {
    key: "headlights-when",
    quote:
      "You must use your headlights between one-half hour after sunset to one-half hour before sunrise; at any time when it is raining; or when visibility is limited.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Use Headlights Properly",
    url: U1,
  },
  {
    key: "headlights-dim",
    quote:
      "You are within 500 feet of an approaching vehicle so as not to blind the driver; You are following closely (within 200 feet) behind another vehicle; You are driving on lighted roads; You are driving in rain, fog, snow, or smoke; Your vision is reduced to less than 200 feet.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Use Headlights Properly",
    url: U1,
  },
  {
    key: "seat-belts",
    quote:
      "Georgia law states that each occupant in the front seat of a passenger vehicle traveling on Georgia roads and highways must be secured by a seat safety belt (lap and shoulder). All occupants of any passenger vehicle must utilize a seat safety belt if they are under the age of 18.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Safety Belts",
    url: U1,
  },
  {
    key: "child-restraint",
    quote:
      "Every driver transporting a child who is under eight years of age, except in a taxicab or public transit vehicle, must properly restrain the child in a child passenger restraining system appropriate for the child's height and weight.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Safety Restraints for Children",
    url: U1,
  },
  {
    key: "following-emergency-vehicles",
    quote:
      "The driver of any vehicle, other than one on official business, must not follow any fire fighting apparatus traveling in response to a fire alarm, or other emergency vehicles, closer than 200 feet, or park any vehicle within 500 feet of any fire apparatus stopped in answer to a fire alarm.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Following Emergency Vehicles",
    url: U1,
  },
  {
    key: "litter-penalty",
    quote:
      "Persons convicted of this law may be assessed a fine up to $1000 and a 12 month jail term. In addition, if convicted of littering, a judge could order the convicted person to pick up and remove litter from any designated area.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Georgia's Litter Control Law",
    url: U1,
  },
  {
    key: "hands-free-law",
    quote:
      "Georgia has a hands Free Law (HB 673) that mandates that drivers are not allowed to hold or support a phone for any reason. A phone can only be used with headphones, a wireless device, phone holder or mounted device.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Texting & Cell Phones",
    url: U1,
  },
  {
    key: "hands-free-prohibited",
    quote:
      "Holding or supporting, with any part of the body, a wireless telecommunications device or stand-alone electronic device.",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Hands Free Georgia Law (HB 673)",
    url: U1,
  },
  {
    key: "hands-free-penalties",
    quote:
      "1st conviction - 1 point and fine not more than $50.00 2nd conviction - 2 points and fine not more than $100.00 3rd or more convictions - 3 points and fine nor more than $150.00",
    source: MANUAL,
    section: "Section 5 Continued: Other Laws - Hands Free Georgia Law (HB 673)",
    url: U1,
  },
  {
    key: "hydroplaning",
    quote:
      "In a standard passenger car, partial hydroplaning can begin at speeds as low as 35 mph. At 55 mph, the tires may lose all contact with the road.",
    source: MANUAL,
    section: "Section 8: Safety Guidelines - Hydroplaning",
    url: U4,
  },
  {
    key: "skidding",
    quote:
      "ease your foot off of the accelerator; begin turning the steering wheel in the direction of the skid; once you have regained control of the vehicle, you can lightly apply brakes and steer in a safe direction.",
    source: MANUAL,
    section: "Section 8: Safety Guidelines - Skidding",
    url: U4,
  },
  {
    key: "first-half-hour-rain",
    quote:
      "Remember, the first half-hour of rainfall is the most dangerous because roadways become extremely slippery when the water mixes with oil and other chemicals on the road surfaces.",
    source: MANUAL,
    section: "Section 8: Safety Guidelines - Skidding",
    url: U4,
  },
  {
    key: "following-too-closely",
    quote:
      "Watch the car ahead of you. When it passes a reference point, such as a telephone pole or street sign, count \"one-thousand-one, one-thousand-two.\" If you pass the same spot before you are through counting, you are following too closely.",
    source: MANUAL,
    section: "Section 8 Continued: More Safety Guidelines - Following Too Closely",
    url: U25,
  },
  {
    key: "gores",
    quote:
      "Drivers entering the controlled access highway are prohibited by law from crossing this solid white line, and are required to continue traveling in the acceleration lane until the solid white line disappears.",
    source: MANUAL,
    section: "Section 8 Continued: More Safety Guidelines - Gores",
    url: U15,
  },
  {
    key: "hov-lanes",
    quote:
      "High Occupancy Vehicle (HOV) lanes are travel lanes that are restricted to vehicles with more than one occupant, buses, motorcycles, and vehicles with Alternative Fuel Vehicle license plates. The lanes are marked with a diamond symbol and the hours of restriction are posted.",
    source: MANUAL,
    section: "Section 8 Continued: More Safety Guidelines - HOV Lanes",
    url: U15,
  },
  {
    key: "expressway-no-backing",
    quote:
      "Don't back up. Driving in reverse on an expressway is prohibited under any circumstances;",
    source: MANUAL,
    section: "Section 8 Continued: More Safety Guidelines - Tips For Expressway Driving",
    url: U15,
  },
  {
    key: "expressway-stopping",
    quote:
      "Stopping on the roadway shoulder is highly dangerous and permitted only in an emergency. Switching drivers, stretching, or retrieving an item from the back of the vehicle is NOT considered an emergency.",
    source: MANUAL,
    section: "Section 8 Continued: More Safety Guidelines - Tips For Expressway Driving",
    url: U15,
  },
  {
    key: "pedestrian-stop-and-remain",
    quote:
      "The driver of a vehicle shall stop and remain stopped to allow a pedestrian to cross the roadway within a crosswalk:",
    source: MANUAL,
    section: "Section 9: Sharing the Road - Georgia's Law Concerning Pedestrians",
    url: U21,
  },
  {
    key: "pedestrian-half-of-roadway",
    quote:
      "When the pedestrian is upon the half of the roadway on which the vehicle is traveling, or when the pedestrian is approaching and is within one lane of the half of the roadway on which the vehicle is traveling or onto which it is turning.",
    source: MANUAL,
    section: "Section 9: Sharing the Road - Georgia's Law Concerning Pedestrians",
    url: U21,
  },
  {
    key: "crosswalks-exist",
    quote:
      "Crosswalks exist on all four corners of intersections even when they are not marked by painted lines. A crosswalk is the part of the pavement for pedestrian traffic where the sidewalk would extend across the street.",
    source: MANUAL,
    section: "Section 9: Sharing the Road - Crosswalks",
    url: U7,
  },
  {
    key: "blind-pedestrians",
    quote:
      "Pedestrians using guide dogs or white walking canes must be given the right of way at all times.",
    source: MANUAL,
    section: "Section 9: Sharing the Road - Blind Pedestrians",
    url: U7,
  },
  {
    key: "multilane-ten-feet",
    quote:
      "When you stop at a crosswalk on a multi-lane road, stop at least 10 feet before the crosswalk so a driver in the next lane can see the pedestrian.",
    source: MANUAL,
    section: "Section 9: Sharing the Road - Passing Stopped Cars in Lanes of Travel",
    url: U7,
  },
  {
    key: "right-on-red-pedestrians",
    quote:
      "Before turning right on red, drivers must come to a full and complete stop before the crosswalk. Do not block the crosswalk when waiting to make a right turn at a red light.",
    source: MANUAL,
    section: "Section 9: Sharing the Road - Turning Right at a Red Traffic Signal",
    url: U7,
  },
  {
    key: "bicyclists-entitled",
    quote:
      "Bicyclists are legally entitled to use every road in Georgia except the interstate and interstate-like highways (limited access highways). The law allows bicyclists use of the full lane. They are not required to be in a bike lane even when one is present.",
    source: MANUAL,
    section: "Section 9: Sharing the Road - Sharing the Road With Bicycles",
    url: U7,
  },
  {
    key: "bicycle-three-feet",
    quote:
      "When passing a bicycle rider, leave the bicyclist plenty of room in case he or she has to swerve to miss a pothole or other danger in the road. The minimum legal space for a motorist to pass a bicyclist is 3 feet.",
    source: MANUAL,
    section: "Section 9: Sharing the Road - Sharing the Road With Bicycles",
    url: U7,
  },
  {
    key: "bike-lane-motorists",
    quote:
      "Bike lanes and any other bicycle infrastructure are for the use of bicycles only. Motorists are not to drive or park in a bike lane.",
    source: MANUAL,
    section: "Section 9 Continued - Important Reminders Concerning Bicycle Riders",
    url: U7,
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Motorcycles are allowed the full width of a lane in which to maneuver. Although it may seem that there is enough room in the traffic lane for a motor vehicle and a motorcycle, the motorcycle needs the room to maneuver safely. Do not share the lane.",
    source: MANUAL,
    section: "Section 9 Continued - Sharing the Road With Motorcycles",
    url: U7,
  },
  {
    key: "motorcycle-following-distance",
    quote:
      "Allow more following distance -- three or four seconds - when following a motorcycle so the motorcycle rider has enough time to maneuver or stop in an emergency.",
    source: MANUAL,
    section: "Section 9 Continued - Sharing the Road With Motorcycles",
    url: U7,
  },
  {
    key: "school-bus-stop-rule",
    quote:
      "In most cases, all drivers are required to stop when approaching or meeting a stopped school bus that has its lights flashing and is loading or unloading passengers. The exception to this rule is when highways are separated in the center by median strips.",
    source: MANUAL,
    section: "Section 9 Continued - Sharing the Road With School Buses",
    url: U16,
  },
  {
    key: "school-bus-remain-stopped",
    quote:
      "After stopping, you must remain stopped until the bus resumes motion or deactivates its warning signals AND all loading or unloading passengers have cleared the roadway.",
    source: MANUAL,
    section: "Section 9 Continued - Sharing the Road With School Buses",
    url: U16,
  },
  {
    key: "truck-stopping-distance",
    quote:
      "A fully loaded tractor-trailer, traveling 55 mph, needs 3 times the distance a car needs to stop;",
    source: MANUAL,
    section: "Section 9 Continued - Sharing the Road With Commercial Motor Vehicles",
    url: U16,
  },
  {
    key: "no-zones",
    quote:
      "The \"No-Zone\" represents the danger areas around trucks and buses where crashes are more likely to occur. Some No-Zones are actual blind spots or areas around trucks and buses where your car \"disappears\" from the view of the drivers.",
    source: MANUAL,
    section: "Section 9 Continued - Sharing the Road With Commercial Motor Vehicles",
    url: U16,
  },
  {
    key: "crash-notify-500",
    quote:
      "Notify the nearest law enforcement agency immediately if anyone is injured or killed, or if property damage exceeds $500.00;",
    source: MANUAL,
    section: "Section 11: Crashes - If You Are Involved In A Crash",
    url: U17,
  },
  {
    key: "good-samaritan",
    quote:
      "Georgia has a Good Samaritan Law. This law holds any person harmless for civil damages arising as a result of any act or omission in rendering emergency care.",
    source: MANUAL,
    section: "Section 11: Crashes - Aiding the Injured",
    url: U17,
  },
  {
    key: "move-vehicles-after-crash",
    quote:
      "When a traffic crash occurs on a multilane highway or expressway, and if there is no apparent serious injury or death, it is the duty of the drivers of the vehicles involved to move their vehicles from the roadway to a safe location along the shoulder, emergency lane, median, or any other safe refuge.",
    source: MANUAL,
    section: "Section 11: Crashes - Moving Vehicles Following a Crash",
    url: U17,
  },
  {
    key: "deer-never-swerve",
    quote:
      "Should the deer or other animal run out in front of your car, slow down as much as possible to minimize the damage of a crash. Never swerve to avoid a deer.",
    source: MANUAL,
    section: "Section 11: Crashes - Deer-Automobile Crashes",
    url: U17,
  },
  {
    key: "exam-road-signs",
    quote:
      "A set of questions on the meaning of standard highway signs will be given. This test is given in English only. You will be asked to identify certain signs, signals and markers. You must correctly answer 15 out of 20 questions to pass.",
    source: MANUAL,
    section: "Section 3: Testing Information - Road Signs",
    url: U22,
  },
  {
    key: "exam-road-rules",
    quote:
      "The road rules test consists of a set of questions about driver responsibility, knowledge of laws, and safe driving practices applicable to the class of license for which you are applying. You must correctly answer 15 out of 20 questions to pass.",
    source: MANUAL,
    section: "Section 3: Testing Information - Road Rules",
    url: U22,
  },
  {
    key: "road-test-score",
    quote:
      "You must achieve a minimum score of 75% to pass.",
    source: MANUAL,
    section: "Section 3 Continued - Road Test For Class C or D",
    url: U26,
  },
  {
    key: "carry-license",
    quote:
      "You must have an appropriate driver's license or permit in your possession while operating a motor vehicle in the State of Georgia. If stopped while driving, you must display your driver's license/permit to any law enforcement officer upon his or her request.",
    source: MANUAL,
    section: "Section 1 Continued - Carrying and Displaying Your License",
    url: U27,
  },
  {
    key: "expired-license",
    quote:
      "To renew a driver's license that has been expired more than two years, you must pass a vision test, a driving test, and an exam to test your knowledge of road signs and road rules.",
    source: MANUAL,
    section: "Section 1 Continued - Expired License",
    url: U4,
  },
  {
    key: "new-resident-30-days",
    quote:
      "You must apply for a Georgia driver's license or permit within 30 days of becoming a Georgia resident if you wish to drive upon the highways of this state.",
    source: MANUAL,
    section: "Section 2 Continued - New Georgia Residents",
    url: U28,
  },
  {
    key: "tadra",
    quote:
      "TADRA is a graduated driver's license program for young drivers ages 15 to 18. It was established in Georgia by a collaborative effort of highway safety advocates, legislators, law enforcement officials, educators, businesses, and media",
    source: DDS + " - Teen Driving Laws FAQs",
    section: "What is TADRA?",
    url: U19,
  },
  {
    key: "class-d-restrictions-by-class",
    quote:
      "The restrictions associated with a Class D Georgia Driver's License are based on the class of license, not the age of the driver.",
    source: DDS + " - Teen Driving Laws FAQs",
    section: "Do the curfew and passenger conditions still apply to me?",
    url: U19,
  },
  {
    key: "joshuas-law",
    quote:
      "Teen Driver Education - Senate Bill 226 also known as \"Joshua's Law\" requires 16 and 17 years old to do the following to get a Georgia Driver's License:",
    source: DDS + " - Joshua's Law Requirements",
    section: "Joshua's Law Requirements",
    url: U29,
  },
  {
    key: "joshuas-law-manual",
    quote:
      "Approved driver education training required to obtain a Class D Provisional license at ages 16 and 17;",
    source: MANUAL,
    section: "Section 6: Teen Driving Laws - Joshua's Law",
    url: U30,
  },
  {
    key: "class-cp-conditions",
    quote:
      "Once issued a Class C Instructional Permit (CP), you may operate any Class C vehicle when accompanied by a person at least 21 years of age who is licensed to drive a Class C vehicle, who is fit and capable of exercising control over the vehicle, and who is occupying a seat beside the driver;",
    source: MANUAL,
    section: "Section 6: Teen Driving Laws - Conditions of a Class C Instructional Permit (CP)",
    url: U11,
  },
  {
    key: "class-d-curfew",
    quote:
      "A Class D license Holder may not drive between the hours of 12:00 a.m. and 5:00 a.m. - NO EXCEPTIONS;",
    source: MANUAL,
    section: "Section 6: Teen Driving Laws - Conditions of a Class D Provisional License",
    url: U11,
  },
  {
    key: "class-d-first-six-months",
    quote:
      "During the first six months following issuance, only immediate family members may ride in the vehicle.",
    source: MANUAL,
    section: "Section 6: Teen Driving Laws - Conditions of a Class D Provisional License",
    url: U11,
  },
  {
    key: "class-d-second-six-months",
    quote:
      "During the second six months following issuance, only one passenger under 21 years of age who is not a member of the driver's immediate family may ride in the vehicle;",
    source: MANUAL,
    section: "Section 6: Teen Driving Laws - Conditions of a Class D Provisional License",
    url: U11,
  },
  {
    key: "class-d-after-a-year",
    quote:
      "After the first and second six-month periods, only three passengers under 21 years of age who are not members of the driver's immediate family may ride in the vehicle;",
    source: MANUAL,
    section: "Section 6: Teen Driving Laws - Conditions of a Class D Provisional License",
    url: U11,
  },
  {
    key: "class-d-clean-record",
    quote:
      "A Class D license Holder must, for the 12 months preceding application for their Class C license, be free from any convictions for major traffic violations that result in the mandatory suspension of a driver's license.",
    source: MANUAL,
    section: "Section 6: Teen Driving Laws - Conditions of a Class D Provisional License",
    url: U11,
  },
  {
    key: "driver-ed-40-hours",
    quote:
      "You must also have completed a cumulative total of at least 40 hours of other driving experience including at least 6 hours at night.",
    source: MANUAL,
    section: "Section 6: Teen Driving Laws - Driver Education Requirements",
    url: U11,
  },
  {
    key: "under-21-suspension",
    quote:
      "The instructional permit or driver's license of any person under 21 years of age convicted of any of the following offenses shall be SUSPENDED for a period of six months for a first conviction, or for a period of twelve months for a second or subsequent conviction.",
    source: MANUAL,
    section: "Section 6: Teen Driving Laws - Convictions Other Than DUI",
    url: U11,
  },
  {
    key: "points-suspension",
    quote:
      "For any person who accumulates 15 or more points within 24 months; For any person under the age of 21 with a conviction for any 4-point violation; For any person under 18 years of age with an accumulation of 4 points within twelve months.",
    source: MANUAL,
    section: "Section 10 Continued - The Points System",
    url: U13,
  },
  {
    key: "points-reduction",
    quote:
      "Licensed Georgia residents may request that DDS reduce the number of points assessed against their Georgia driver's license up to 7 points once every 5 years.",
    source: MANUAL,
    section: "Section 10 Continued - Points Reduction",
    url: U13,
  },
  {
    key: "points-reduction-course",
    quote:
      "To qualify for a points reduction, you must successfully complete a certified 6-hour driver improvement (defensive driving) course and present the original certificate of completion to the DDS by mail or in person at one of our Customer Service Centers.",
    source: MANUAL,
    section: "Section 10 Continued - Points Reduction",
    url: U13,
  },
  {
    key: "points-avoidance",
    quote:
      "When the original certificate of completion is presented to the court, the court shall reduce the fine assessed by 20 percent and no points shall be assessed against the driver. This plea may be accepted by the court once every five years.",
    source: MANUAL,
    section: "Section 10 Continued - Points Avoidance",
    url: U13,
  },
  {
    key: "implied-consent-refusal",
    quote:
      "If you refuse this testing, your Georgia driver's license or privilege to drive on the highways of this state will be suspended for a minimum period of one year.",
    source: MANUAL,
    section: "Section 10 Continued - Implied Consent",
    url: U13,
  },
  {
    key: "habitual-violator",
    quote:
      "You are declared a Habitual Violator based upon the third conviction of any combination of these offenses within 5 years:",
    source: MANUAL,
    section: "Section 10 Continued: Safety Responsibility Law - Mandatory Revocations",
    url: U31,
  },
  {
    key: "limited-permit",
    quote:
      "In some situations, a limited driving permit may be available for a fee of $25 during the suspension period.",
    source: MANUAL,
    section: "Section 10 Continued: Safety Responsibility Law - Limited Driving Permits",
    url: U4,
  },
  {
    key: "under-21-suspension-offenses",
    quote:
      "Reckless driving; Aggressive driving; Speeding 24 mph or more over the speed limit; Unlawful passing of a school bus; Improper passing on a hill or a curve;",
    source: MANUAL,
    section: "Section 10 Continued - Types of Suspensions",
    url: U13,
  },
];
