import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Official Florida Driver License Handbook
// (rev. 08/2023), published by the Florida Department of Highway Safety and
// Motor Vehicles, plus two FLHSMV web pages and one section of the Florida
// Statutes for rules the handbook does not state.
//
// Every `quote` below was located mechanically in the official source and
// checked as an exact substring before it was written here. Nothing is
// paraphrased. Three mechanical normalisations were applied to the extracted
// text, and to nothing else: curly quotes, en dashes and em dashes are folded
// to ASCII; a word split by a line break is rejoined; and the running page
// footer that interrupts a sentence across a page turn is removed. Where the
// source states a rule as a stem followed by a bulleted list or a table, the
// items are run together in the order they appear - no words are changed,
// dropped or reordered. Handbook typographical errors are preserved as they
// stand, because a quote that has been tidied up is no longer a quote.
//
// These are quoted, not summarised, because the Class E Knowledge Exam is
// written from this wording. Each one is kept to the operative rule and shown
// with its source, section and a link back to FLHSMV so the learner reads the
// real thing.

const HB = "Official Florida Driver License Handbook (rev. 08/2023)";
const HB_URL = "https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf";
const EXAM = "FLHSMV - Class E Knowledge Exam & Driving Skills Test";
const EXAM_URL =
  "https://www.flhsmv.gov/driver-licenses-id-cards/licensing-requirements-teens-graduated-driver-license-laws-driving-curfews/class-e-knowledge-exam-driving-skills-test/";
const FS = "Florida Statutes, Chapter 316 (Florida Legislature)";
const FS_OPEN_CONTAINER =
  "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.1936.html";

export const floridaExcerpts: HandbookExcerpt[] = [
  {
    key: "sign-colors-red",
    quote:
      "Red: Stop. Do not enter. Wrong way. Yield.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Sign Colors",
    url: HB_URL,
  },
  {
    key: "sign-colors-orange",
    quote:
      "Orange: Construction and maintenance warning.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Sign Colors",
    url: HB_URL,
  },
  {
    key: "sign-color-fluorescent-green",
    quote:
      "Flourescent Yellow Green: High emphasis warning of school, pedestrian and " +
      "bicycling activity.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Sign Colors",
    url: HB_URL,
  },
  {
    key: "sign-colors-brown",
    quote:
      "Brown: Areas of public recreation, cultural and historical significance.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Sign Colors",
    url: HB_URL,
  },
  {
    key: "stop-sign",
    quote:
      "Stop Sign. You must bring your vehicle to a complete halt. Stop before the " +
      "stop line, or if there is no stop line, before the crosswalk or " +
      "intersection at a point near the intersecting roadway where you have a " +
      "clear view of approaching traffic.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "all-way-stop-tie",
    quote:
      "If vehicles arrive at approximately the same time, each driver must yield " +
      "to the driver on their right.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "yield-sign",
    quote:
      "Yield. Slow down. Give vehicles crossing your path the right-of-way. If " +
      "the way is clear, you may move forward slowly without stopping.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "do-not-enter-sign",
    quote:
      "Do Not Enter. On one-way streets and roadways where you may not enter.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "wrong-way-sign",
    quote:
      "Wrong Way. You are going the wrong way. Turn around immediately.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "no-turn-on-red-sign",
    quote:
      "No Turn on Red. You must not turn right or left during the red light. You " +
      "must wait for the green signal.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "warning-signs-yellow-diamond",
    quote:
      "Warning signs are normally yellow and diamond-shaped. They alert drivers " +
      "to conditions ahead and what to look out for.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Warning Signs",
    url: HB_URL,
  },
  {
    key: "divided-highway-ends",
    quote:
      "Divided Highway Ends. The divided highway ends 350 to 500 feet ahead. You " +
      "will then be on a roadway with two-way traffic. Keep to the right.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Warning Signs",
    url: HB_URL,
  },
  {
    key: "one-lane-bridge-sign",
    quote:
      "One Lane Bridge. The bridge is wide enough for only one vehicle at a time. " +
      "Make sure the bridge is clear of oncoming traffic before you cross.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Warning Signs",
    url: HB_URL,
  },
  {
    key: "soft-shoulder-sign",
    quote:
      "Soft Shoulder. The ground on the side of the road is soft. Don't leave the " +
      "pavement except in an emergency.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Warning Signs",
    url: HB_URL,
  },
  {
    key: "low-clearance-sign",
    quote:
      "Low Clearance. Do not enter if your vehicle is taller than the height " +
      "listed on the sign.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Warning Signs",
    url: HB_URL,
  },
  {
    key: "advisory-speed-sign",
    quote:
      "Advisory Speed Sign. The fastest safe speed you should travel around the " +
      "curve ahead. Advisory speed signs may be used with any warning sign.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Warning Signs",
    url: HB_URL,
  },
  {
    key: "exit-speed-sign",
    quote:
      "Exit Speed. This sign lists the maximum safe speed for an exit ramp on an " +
      "expressway. Slow down to the posted speed.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "begin-right-turn-lane-sign",
    quote:
      "Begin Right Turn Lane. When entering a right turn lane you may encounter " +
      "bicyclists traveling straight; you must yield to the bicyclists.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "animal-crossing-sign",
    quote:
      "Animal Crossing. The animal pictured on the sign is common in the area; " +
      "watch for animals crossing the road particularly during twilight and at " +
      "nighttime.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Warning Signs",
    url: HB_URL,
  },
  {
    key: "school-sign",
    quote:
      "School Sign. You are near a school. Watch for children at all times, not " +
      "just during school hours.",
    source: HB,
    section: "Chapter 6: Traffic Controls - School Zone Signs & Signals",
    url: HB_URL,
  },
  {
    key: "school-bus-stop-ahead-sign",
    quote:
      "School Bus Stop Ahead. Be prepared to stop. This sign is used to alert " +
      "motorists of an upcoming school bus stop that may be unexpected or " +
      "obscured by roadway geometry, such as a curve or hill.",
    source: HB,
    section: "Chapter 6: Traffic Controls - School Zone Signs & Signals",
    url: HB_URL,
  },
  {
    key: "crossbuck-sign",
    quote:
      "Crossbuck Sign. These are yield signs; you must yield the right-ofway to " +
      "trains.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Railroad Crossing Signs & Signals",
    url: HB_URL,
  },
  {
    key: "dynamic-envelope",
    quote:
      "Dynamic Envelope. White roadway markings in the shape of connecting X's " +
      "used to visually highlight the danger zone where road users should not " +
      "stop.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Railroad Crossing Signs & Signals",
    url: HB_URL,
  },
  {
    key: "restricted-lane-ahead-sign",
    quote:
      "Restricted Lane Ahead. A lane is reserved for certain purposes or certain " +
      "vehicles, such as buses or carpool vehicles during rush hour traffic.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "pass-with-care-sign",
    quote:
      "Pass with Care. You are allowed to pass, but do so with caution.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "reduction-of-lanes-sign",
    quote:
      "Reduction of Lanes. The right lane ends and traffic must merge left. " +
      "Drivers in the left lane should allow others to merge smoothly.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Warning Signs",
    url: HB_URL,
  },
  {
    key: "steady-red-light",
    quote:
      "RED LIGHT Come to a complete stop at the stop line. Remain stopped until " +
      "the light turns green.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "right-turn-on-red",
    quote:
      "After stopping, you may turn right if there is not a NO TURN ON RED sign " +
      "and the way is clear.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "left-turn-on-red-one-way",
    quote:
      "You may turn left from a one-way street onto a one-way street that has " +
      "traffic moving to the left.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "yellow-light",
    quote:
      "YELLOW LIGHT Warning--the light is changing to red. Stop if you can safely " +
      "do so.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "green-light",
    quote:
      "GREEN LIGHT Go, but only if the intersection is clear. Yield to " +
      "pedestrians in the crosswalk and vehicles in the intersection.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "green-arrow",
    quote:
      "GREEN ARROW You may make a turn in the direction of the arrow.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "FLASHING YELLOW ARROW Turns are allowed in the direction of the arrow. The " +
      "oncoming traffic has a green light. Yield to oncoming traffic and " +
      "pedestrians.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "flashing-red-light",
    quote:
      "FLASHING RED LIGHT Used at dangerous intersections. Treat it like a stop " +
      "sign; stop and proceed when safe.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "flashing-yellow-light",
    quote:
      "FLASHING YELLOW LIGHT Used at, or just before, dangerous intersections.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "signal-out-of-order",
    quote:
      "If a traffic signal is out of order and law enforcement is not present, " +
      "treat the light/intersection as a four-way stop sign",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "lane-signal-red-x",
    quote:
      "Red X. Never drive in a lane under the red X.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "lane-signal-yellow-x",
    quote:
      "Yellow X. The lane signal is about to turn red.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "ramp-signals",
    quote:
      "Ramp signals control the rate of vehicles entering an expressway; and " +
      "alternate between red and green. You must wait for the green signal before " +
      "entering the expressway.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "power-outage-four-way",
    quote:
      "In circumstances where the power is out and traffic signals are not " +
      "active, treat intersections as a four-way stop",
    source: HB,
    section: "Chapter 9: Handling Emergencies",
    url: HB_URL,
  },
  {
    key: "broken-white-line",
    quote:
      "Single broken white line. You may cross this line to change lanes when it " +
      "is safe to do so.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Pavement Markings",
    url: HB_URL,
  },
  {
    key: "solid-white-line",
    quote:
      "Single solid white line. You may travel in the same direction on both " +
      "sides of this line, but do not cross the line unless you must do so to " +
      "avoid a hazard.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Pavement Markings",
    url: HB_URL,
  },
  {
    key: "broken-yellow-line",
    quote:
      "Single broken yellow line. Stay to the right of the line. You may cross " +
      "this line to pass a car ahead of you only when it is safe to do so.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Pavement Markings",
    url: HB_URL,
  },
  {
    key: "double-solid-yellow",
    quote:
      "Double solid yellow lines. Vehicles moving in either direction must not " +
      "pass/ cross these lines.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Pavement Markings",
    url: HB_URL,
  },
  {
    key: "yellow-solid-your-side",
    quote:
      "Double yellow lines-solid on right (\"your side\" of line), broken on " +
      "left. Passing is not allowed in this lane.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Pavement Markings",
    url: HB_URL,
  },
  {
    key: "red-reflectors",
    quote:
      "Red reflectors on lane lines always mean you are facing traffic the wrong " +
      "way and could have a head-on collision.",
    source: HB,
    section: "Chapter 7: Driving Safety - Traffic Lanes",
    url: HB_URL,
  },
  {
    key: "crosswalk-yield",
    quote:
      "Motorists must always yield the right-of-way to pedestrians in a crosswalk.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Pavement Markings",
    url: HB_URL,
  },
  {
    key: "turn-lane-only-arrow",
    quote:
      "Lane is marked with a curved arrow and the word \"ONLY\": you must turn in " +
      "the direction of the arrow.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Pavement Markings",
    url: HB_URL,
  },
  {
    key: "countdown-signal",
    quote:
      "Once the countdown starts and the hand is flashing, it is no longer safe " +
      "to enter the crosswalk.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Specialized Signs and Signals",
    url: HB_URL,
  },
  {
    key: "drawbridge-red",
    quote:
      "Drawbridge Signal Red. Come to a complete stop at the marked stop line. " +
      "The bridge is in operation and the roadway is closed to all pedestrian and " +
      "motor vehicle traffic.",
    source: HB,
    section: "Chapter 6: Traffic Controls - Specialized Signs and Signals",
    url: HB_URL,
  },
  {
    key: "rr-20-seconds",
    quote:
      "If you are stalled at a railroad crossing and the warning lights begin to " +
      "flash, 20 seconds is the minimal amount of time that it takes a train to " +
      "reach the grade after the warning lights begin flashing.",
    source: HB,
    section: "Chapter 9: Handling Emergencies",
    url: HB_URL,
  },
  {
    key: "speed-standard-limits",
    quote:
      "Florida Standard Speed Limits School Zones: 20 MPH Municipal, Business, or " +
      "Residential Area: 30 MPH* Streets and Highways: 55 MPH* Limited Access " +
      "Highways: 70 MPH",
    source: HB,
    section: "Chapter 7: Driving Safety - Speed Limits",
    url: HB_URL,
  },
  {
    key: "speed-never-higher-70",
    quote:
      "In Florida, the speed limit will never be higher than 70 mph.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Speeding",
    url: HB_URL,
  },
  {
    key: "speeding-buffer-myth",
    quote:
      "The \"speeding buffer\" is a myth. You are not allowed to drive up to 10 " +
      "MPH over the speed limit and may receive a citation for speeding.",
    source: HB,
    section: "Chapter 7: Driving Safety - Speed Limits",
    url: HB_URL,
  },
  {
    key: "minimum-speed-50",
    quote:
      "On highways, when the posted speed limit is 70 MPH, the minimum speed " +
      "limit is 50 MPH.",
    source: HB,
    section: "Chapter 7: Driving Safety - Speed Limits",
    url: HB_URL,
  },
  {
    key: "driving-too-slowly",
    quote:
      "Driving too slowly is also against Florida law. You must not drive so " +
      "slowly that you block or delay traffic moving at normal, safe speeds.",
    source: HB,
    section: "Chapter 7: Driving Safety - Speed Limits",
    url: HB_URL,
  },
  {
    key: "speed-limits-favorable",
    quote:
      "Speed limits show the fastest speed you may drive under favorable " +
      "conditions. You are responsible for adjusting your driving speed to the " +
      "weather, roadway, and traffic conditions.",
    source: HB,
    section: "Chapter 7: Driving Safety - Speed Limits",
    url: HB_URL,
  },
  {
    key: "speed-force-of-impact",
    quote:
      "When you double the speed of a car, you increase its force of impact four " +
      "times. When you triple the speed of a car, you increase its force of " +
      "impact nine times.",
    source: HB,
    section: "Chapter 7: Driving Safety - Speed Limits",
    url: HB_URL,
  },
  {
    key: "fines-doubled-zones",
    quote:
      "Fines are doubled when speeding infractions occur within a school zone or " +
      "construction zone, with possible civil penalties up to $1,000, and you can " +
      "be required to complete a driving course.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Speeding",
    url: HB_URL,
  },
  {
    key: "fine-50-over",
    quote:
      "The fine for exceeding the speed limit by more than 50 MPH is $1,000 for " +
      "the first offense and $2,500 for the second.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Speeding",
    url: HB_URL,
  },
  {
    key: "braking-distance-50",
    quote:
      "At 50 MPH, on dry pavement and with good brakes, it can take about 158 feet.",
    source: HB,
    section: "Chapter 7: Driving Safety - Braking Distance",
    url: HB_URL,
  },
  {
    key: "total-stopping-distance-50",
    quote:
      "At 50 MPH, you will travel a minimum of 268 feet",
    source: HB,
    section: "Chapter 7: Driving Safety - Braking Distance",
    url: HB_URL,
  },
  {
    key: "following-four-seconds",
    quote:
      "Keep a minimum following distance of four seconds during favorable weather " +
      "and traffic conditions.",
    source: HB,
    section: "Chapter 7: Driving Safety - Following Distances",
    url: HB_URL,
  },
  {
    key: "truck-300-feet",
    quote:
      "A truck or any vehicle towing another vehicle must not follow within 300 " +
      "feet of another truck or another vehicle in tow.",
    source: HB,
    section: "Chapter 7: Driving Safety - Following Distances",
    url: HB_URL,
  },
  {
    key: "fire-truck-500-feet",
    quote:
      "It's against the law to follow a fire truck responding to an emergency " +
      "closer than 500 feet.",
    source: HB,
    section: "Chapter 7: Driving Safety - Following Distances",
    url: HB_URL,
  },
  {
    key: "passing-200-feet",
    quote:
      "You must return to the right side of the road before coming within 200 " +
      "feet of any approaching vehicle.",
    source: HB,
    section: "Chapter 7: Driving Safety - Passing",
    url: HB_URL,
  },
  {
    key: "no-pass-zones",
    quote:
      "on hills or curves where you can't see at least 500 feet ahead; within 100 " +
      "feet of an intersection, bridge, viaduct, tunnel, or railroad crossing",
    source: HB,
    section: "Chapter 7: Driving Safety - Passing",
    url: HB_URL,
  },
  {
    key: "passing-on-right",
    quote:
      "Passing on the right is only legal when there are two or more traffic " +
      "lanes moving in the same direction or the vehicle you are passing is " +
      "making a left turn.",
    source: HB,
    section: "Chapter 7: Driving Safety - Passing",
    url: HB_URL,
  },
  {
    key: "signal-100-feet",
    quote:
      "You must give a turn signal at least 100 feet BEFORE making your turn.",
    source: HB,
    section: "Chapter 7: Driving Safety - Turning",
    url: HB_URL,
  },
  {
    key: "signal-not-invite-pass",
    quote:
      "It's against the law to use your directional signals to tell drivers " +
      "behind you that they can pass.",
    source: HB,
    section: "Chapter 7: Driving Safety - Turning",
    url: HB_URL,
  },
  {
    key: "three-lane-center",
    quote:
      "The center lane of a three-lane or five-lane highway is used only for " +
      "turning left.",
    source: HB,
    section: "Chapter 7: Driving Safety - Traffic Lanes",
    url: HB_URL,
  },
  {
    key: "three-point-turn-where-not",
    quote:
      "Never make a three-point turn or a U-turn on a curve, a hill, the highway, " +
      "or where there is a sign that prohibits U-turns.",
    source: HB,
    section: "Chapter 7: Driving Safety - Three-Point Turns",
    url: HB_URL,
  },
  {
    key: "hand-signals-left-side",
    quote:
      "Hand signals must be given from the left side of the vehicle.",
    source: HB,
    section: "Chapter 7: Driving Safety - Turning",
    url: HB_URL,
  },
  {
    key: "turn-signals-required-lane-change",
    quote:
      "Turn signals are required by law when changing lanes or overtaking a vehicle.",
    source: HB,
    section: "Chapter 7: Driving Safety - Turning",
    url: HB_URL,
  },
  {
    key: "open-intersection-yield",
    quote:
      "When you enter an open intersection, you must yield the right-of-way if: a " +
      "vehicle is already in the intersection; you enter or cross a state highway " +
      "from a secondary road; you enter a paved road from an unpaved road; or you " +
      "plan to make a left turn and a vehicle is approaching from the opposite " +
      "direction.",
    source: HB,
    section: "Chapter 7: Driving Safety - Open Intersections",
    url: HB_URL,
  },
  {
    key: "driveway-yield",
    quote:
      "Drivers entering a road from a driveway, alley, or roadside must yield to " +
      "vehicles already on the main road, as well as to pedestrians and " +
      "bicyclists on the sidewalk or in bike lanes.",
    source: HB,
    section: "Chapter 7: Driving Safety - Driveways",
    url: HB_URL,
  },
  {
    key: "two-way-stop-turning-yields",
    quote:
      "At a two-way stop, the turning vehicle yields to the vehicle going straight.",
    source: HB,
    section: "Chapter 7: Driving Safety - Intersections",
    url: HB_URL,
  },
  {
    key: "roundabout-yield",
    quote:
      "Drivers entering the roundabout must yield to traffic already in the " +
      "roundabout.",
    source: HB,
    section: "Chapter 7: Driving Safety - Roundabouts",
    url: HB_URL,
  },
  {
    key: "merge-yield-highway",
    quote:
      "Merge into traffic when you can do so safely. You must yield the " +
      "right-of-way to traffic on the highway.",
    source: HB,
    section: "Chapter 7: Driving Safety - Limited Access Highways",
    url: HB_URL,
  },
  {
    key: "emergency-vehicles-yield",
    quote:
      "Motorists, bicyclists, and pedestrians must yield the right-of-way to law " +
      "enforcement vehicles, fire engines, and other emergency vehicles using " +
      "sirens or flashing lights.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Emergency Vehicles",
    url: HB_URL,
  },
  {
    key: "funeral-procession",
    quote:
      "Motorists, bicyclists, and pedestrians must yield the right-of-way to " +
      "funeral processions.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Funeral Processions",
    url: HB_URL,
  },
  {
    key: "transit-bus-yield",
    quote:
      "All drivers shall yield the right-of-way to public transit buses traveling " +
      "in the same direction that have signaled and are reentering the traffic " +
      "flow from a specifically designated pullout bay.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Public Transit",
    url: HB_URL,
  },
  {
    key: "ped-no-pass-stopped-vehicle",
    quote:
      "You may not overtake or pass a vehicle that's stopped at a crosswalk to " +
      "allow a pedestrian to cross the roadway.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Pedestrians",
    url: HB_URL,
  },
  {
    key: "ped-right-on-red-stop",
    quote:
      "Always stop before turning right on red and look both ways for pedestrians " +
      "in the crosswalk.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Pedestrians",
    url: HB_URL,
  },
  {
    key: "white-cane",
    quote:
      "a visually impaired pedestrian who is carrying a white cane with a red tip " +
      "or guided by a service animal",
    source: HB,
    section: "Chapter 10: Sharing the Road - Pedestrians",
    url: HB_URL,
  },
  {
    key: "ped-no-block-crosswalk",
    quote:
      "Never block the crosswalk when stopped at a red light. Do not stop with " +
      "any portion of your vehicle overhanging the crosswalk.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Pedestrians",
    url: HB_URL,
  },
  {
    key: "school-bus-two-way",
    quote:
      "On a two-way street or highway, all drivers moving in either direction " +
      "must stop for a stopped school bus that is picking up or dropping of " +
      "children.",
    source: HB,
    section: "Chapter 10: Sharing the Road - School Buses",
    url: HB_URL,
  },
  {
    key: "school-bus-divided",
    quote:
      "If the highway is divided by a raised barrier or an unpaved median at " +
      "least five feet wide, you do not have to stop if you are moving in the " +
      "opposite direction of the bus. Painted lines or pavement markings are not " +
      "considered barriers.",
    source: HB,
    section: "Chapter 10: Sharing the Road - School Buses",
    url: HB_URL,
  },
  {
    key: "school-bus-same-direction",
    quote:
      "You must always stop if you are moving in the same direction as the bus " +
      "and you must remain stopped until the stop signal is withdrawn.",
    source: HB,
    section: "Chapter 10: Sharing the Road - School Buses",
    url: HB_URL,
  },
  {
    key: "move-over-who",
    quote:
      "The Move Over Law protects law enforcement officers, emergency workers, " +
      "tow truck drivers, sanitation workers, utility workers and road and bridge " +
      "maintenance or construction vehicles displaying warning lights stopped " +
      "along roadways while performing their jobs.",
    source: HB,
    section: "Chapter 7: Driving Safety - Move Over Law",
    url: HB_URL,
  },
  {
    key: "move-over-multi-lane",
    quote:
      "You must vacate the lane closest to the stationary law enforcement, " +
      "emergency vehicle, tow truck, sanitation, or utility vehicle. (Signal your " +
      "intention to change lanes.) If you cannot move over safely, you must slow " +
      "down to a speed of 20 MPH below the posted speed limit.",
    source: HB,
    section: "Chapter 7: Driving Safety - Move Over Law",
    url: HB_URL,
  },
  {
    key: "move-over-two-lane",
    quote:
      "On a Two-Lane Roadway You must slow down to 20 MPH below the posted speed " +
      "limit. If the speed limit is 20 MPH or less, you must travel at 5 MPH.",
    source: HB,
    section: "Chapter 7: Driving Safety - Move Over Law",
    url: HB_URL,
  },
  {
    key: "parking-12-inches",
    quote:
      "Park parallel to the curb in the direction of traffic, with right-hand " +
      "wheels parallel to and within 12 inches of the curb or side of roadway.",
    source: HB,
    section: "Chapter 7: Driving Safety - Parking",
    url: HB_URL,
  },
  {
    key: "parking-hills-wheels",
    quote:
      "Downhill Turn wheels to curb. Uphill with Curb Turn wheels away from curb. " +
      "Uphill without Curb Turn wheels to the right.",
    source: HB,
    section: "Chapter 7: Driving Safety - Parking on Hills",
    url: HB_URL,
  },
  {
    key: "parking-take-keys",
    quote:
      "Florida law requires that you take the keys out of your vehicle before " +
      "leaving it.",
    source: HB,
    section: "Chapter 7: Driving Safety - Parking",
    url: HB_URL,
  },
  {
    key: "parking-distances",
    quote:
      "15 feet of a fire hydrant. 20 feet of an intersection. 20 feet of the " +
      "entrance to a fire, ambulance, or rescue station. 30 feet of a rural " +
      "mailbox on a state highway (8 am-6 pm). 30 feet of any flashing signal, " +
      "stop sign, or traffic signal. 50 feet of a railroad crossing.",
    source: HB,
    section: "Chapter 7: Driving Safety - Parking",
    url: HB_URL,
  },
  {
    key: "parking-illegal-places",
    quote:
      "It's Against the Law to Park On crosswalks On sidewalks In bicycle lanes " +
      "In intersections On bridges On overpasses In tunnels In front of driveways " +
      "By yellow painted curbs",
    source: HB,
    section: "Chapter 7: Driving Safety - Parking",
    url: HB_URL,
  },
  {
    key: "straight-in-parking",
    quote:
      "When properly parked, the vehicle should be centered inside the space with " +
      "no part of the vehicle extending into the traffic lane.",
    source: HB,
    section: "Chapter 7: Driving Safety - Parking",
    url: HB_URL,
  },
  {
    key: "parking-check-before-door",
    quote:
      "Always check traffic around you before getting out of a vehicle so you do " +
      "not open your door into a bicyclist or another vehicle.",
    source: HB,
    section: "Chapter 7: Driving Safety - Parking",
    url: HB_URL,
  },
  {
    key: "disabled-permit-misuse",
    quote:
      "Anyone who obtains or uses a permit that does not belong to them can be " +
      "charged with a second degree misdemeanor, punishable by a $500 fine or up " +
      "to 6 months in jail",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Disabled Parking Permit Violations",
    url: HB_URL,
  },
  {
    key: "limited-access-prohibited",
    quote:
      "Pedestrians, hitchhikers, bicycles, animal-drawn vehicles, and " +
      "motor-driven cycles/motor scooters (with 150 cubic centimeter displacement " +
      "or less) are not allowed on limited-access highways.",
    source: HB,
    section: "Chapter 7: Driving Safety - Limited Access Highways",
    url: HB_URL,
  },
  {
    key: "missed-exit",
    quote:
      "Don't make last-minute turns into an exit. If you pass your exit, you must " +
      "go to the next one.",
    source: HB,
    section: "Chapter 7: Driving Safety - Limited Access Highways",
    url: HB_URL,
  },
  {
    key: "headlights-sunset-sunrise",
    quote:
      "Use headlights between the hours of sunset and sunrise.",
    source: HB,
    section: "Chapter 8: Special Driving Situations - Night Driving",
    url: HB_URL,
  },
  {
    key: "high-beam-500-oncoming",
    quote:
      "Not use high beam headlights within 500 feet of an oncoming vehicle; use " +
      "low beam headlights.",
    source: HB,
    section: "Chapter 8: Special Driving Situations - Night Driving",
    url: HB_URL,
  },
  {
    key: "low-visibility-low-beam",
    quote:
      "Drive with lights on low beam. High beams will reflect off the fog and " +
      "impair visibility even more.",
    source: HB,
    section: "Chapter 8: Special Driving Situations - Low Visibility",
    url: HB_URL,
  },
  {
    key: "wipers-headlights",
    quote:
      "Turn on your headlights when you turn on your windshield wipers.",
    source: HB,
    section: "Chapter 8: Special Driving Situations - Rain",
    url: HB_URL,
  },
  {
    key: "flooded-roadway",
    quote:
      "If you come to a flooded roadway, turn around and find another route. Do " +
      "not attempt to drive through the water!",
    source: HB,
    section: "Chapter 8: Special Driving Situations - Rain",
    url: HB_URL,
  },
  {
    key: "hydroplaning-def",
    quote:
      "Hydroplaning happens when your vehicle slides on top of a thin layer of " +
      "water between your tires and the road.",
    source: HB,
    section: "Chapter 8: Special Driving Situations - Rain",
    url: HB_URL,
  },
  {
    key: "skid-steer-direction",
    quote:
      "Turn the vehicle's front tires in the direction you want to go (steer in " +
      "the direction of the skid).",
    source: HB,
    section: "Chapter 9: Handling Emergencies",
    url: HB_URL,
  },
  {
    key: "abs-braking",
    quote:
      "Drivers with anti-lock brakes (ABS) must press down hard on the brake " +
      "pedal, hold it, and steer out of danger.",
    source: HB,
    section: "Chapter 9: Handling Emergencies",
    url: HB_URL,
  },
  {
    key: "tire-blowout",
    quote:
      "Tire Blowout 1. Take your foot off the gas. Do not use the brakes. 2. " +
      "Concentrate on steering. 3. Slow down gradually.",
    source: HB,
    section: "Chapter 9: Handling Emergencies",
    url: HB_URL,
  },
  {
    key: "right-wheels-off-pavement",
    quote:
      "Right Wheels Off Pavement 1. Take your foot of the gas pedal. 2. Hold the " +
      "wheel firmly and steer in a straight line. 3. Brake lightly.",
    source: HB,
    section: "Chapter 9: Handling Emergencies",
    url: HB_URL,
  },
  {
    key: "submerged-vehicle",
    quote:
      "If you crash into a pond, river, or other body of water, your vehicle will " +
      "only float on the surface for 30-60 seconds.",
    source: HB,
    section: "Chapter 9: Handling Emergencies",
    url: HB_URL,
  },
  {
    key: "crash-report-10-days",
    quote:
      "If the crash results in vehicle or property damage and does not require a " +
      "law enforcement report, you must make a written report of the crash to " +
      "FLHSMV within 10 days.",
    source: HB,
    section: "Chapter 9: Handling Emergencies - Your Responsibilities After a Crash",
    url: HB_URL,
  },
  {
    key: "crash-unattended-vehicle",
    quote:
      "If you are in a crash with an unattended vehicle or other property, you " +
      "must make every attempt to locate the owner and notify law enforcement.",
    source: HB,
    section: "Chapter 9: Handling Emergencies - Your Responsibilities After a Crash",
    url: HB_URL,
  },
  {
    key: "hit-and-run-death",
    quote:
      "Death: 1st degree felony, minimum 4-year prison term.",
    source: HB,
    section: "Chapter 9: Handling Emergencies - Stay at the Scene",
    url: HB_URL,
  },
  {
    key: "leaving-scene-illegal",
    quote:
      "It is against the law to leave the scene of a crash involving death, " +
      "injury or property damage.",
    source: HB,
    section: "Chapter 9: Handling Emergencies - Stay at the Scene",
    url: HB_URL,
  },
  {
    key: "do-not-move-injured",
    quote:
      "However, don't move an injured person who may have a neck or spinal injury.",
    source: HB,
    section: "Chapter 9: Handling Emergencies - First Aid",
    url: HB_URL,
  },
  {
    key: "disabled-vehicle-four-wheels",
    quote:
      "You must move the vehicle so all four wheels are out of traffic lanes as " +
      "soon as possible.",
    source: HB,
    section: "Chapter 9: Handling Emergencies",
    url: HB_URL,
  },
  {
    key: "dui-definition",
    quote:
      "You can be charged with Driving Under the Influence (DUI) if you are found " +
      "to be driving or in physical control of a motor vehicle while under the " +
      "influence of alcoholic beverages, controlled substances, prescriptions, or " +
      "over-thecounter medications.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Driving Under the Influence",
    url: HB_URL,
  },
  {
    key: "dui-08-suspension",
    quote:
      "At the time of arrest, your license will be administratively suspended if " +
      "you have a breath or blood alcohol level (BAL) of .08 or above, or refuse " +
      "to submit to a breath/ blood alcohol test.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Driving Under the Influence",
    url: HB_URL,
  },
  {
    key: "implied-consent-refusal",
    quote:
      "If you refuse to take the tests when asked, your license will " +
      "automatically be suspended for one year. A second refusal will result in " +
      "an 18 month suspension and a first degree misdemeanor.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Implied Consent Law",
    url: HB_URL,
  },
  {
    key: "zero-tolerance-02",
    quote:
      "Any driver under 21 years of age who is stopped by law enforcement and has " +
      "a BAL of .02 or higher will automatically have their driving privilege " +
      "suspended for six months.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Driving Under the Influence",
    url: HB_URL,
  },
  {
    key: "under-21-05-course",
    quote:
      "Any driver under 21 with a BAL of .05 or higher is required to attend a " +
      "substance abuse course.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Driving Under the Influence",
    url: HB_URL,
  },
  {
    key: "dui-75-years",
    quote:
      "A DUI (Driving Under the Influence) conviction must remain on your driving " +
      "record for 75 years.",
    source: HB,
    section: "Chapter 4: Before You Drive - Drinking & Driving",
    url: HB_URL,
  },
  {
    key: "drug-conviction-suspension",
    quote:
      "Florida law states that if you are convicted of possessing, selling, or " +
      "trafficking in drugs, including marijuana, your driver license must be " +
      "suspended.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Driving Under the Influence",
    url: HB_URL,
  },
  {
    key: "drugged-driving-same-penalty",
    quote:
      "Driving while impaired by drugs is illegal and subject to the same " +
      "penalties as driving while impaired by alcohol.",
    source: HB,
    section: "Chapter 4: Before You Drive - Drugged Driving",
    url: HB_URL,
  },
  {
    key: "judgment-affected-first",
    quote:
      "A person's judgment is the first thing affected after drinking an " +
      "alcoholic beverage.",
    source: HB,
    section: "Chapter 4: Before You Drive - Drinking & Driving",
    url: HB_URL,
  },
  {
    key: "dui-blood-test-required",
    quote:
      "In DUI cases involving death or serious injury, you will be required to " +
      "take a blood test with or without your consent.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Implied Consent Law",
    url: HB_URL,
  },
  {
    key: "open-container-law",
    quote:
      "It is unlawful and punishable as provided in this section for any person " +
      "to possess an open container of an alcoholic beverage or consume an " +
      "alcoholic beverage while operating a vehicle in the state or while a " +
      "passenger in or on a vehicle being operated in the state.",
    source: FS,
    section: "s. 316.1936 - Possession of open containers of alcoholic beverages in vehicles prohibited",
    url: FS_OPEN_CONTAINER,
  },
  {
    key: "safety-belt-law",
    quote:
      "All drivers, front seat passengers, and passengers under the age of 18 " +
      "wear safety belts*.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Safety Belts",
    url: HB_URL,
  },
  {
    key: "child-restraint-ages",
    quote:
      "Children under age 4 must be in a safety seat and children ages 4 and 5 " +
      "must be in either a safety seat or a booster seat.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Child Passenger Safety",
    url: HB_URL,
  },
  {
    key: "driver-charged-under-18",
    quote:
      "Drivers will be charged with a safety belt/ child restraint violation if " +
      "any passenger under 18 is not properly restrained.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Safety Belts",
    url: HB_URL,
  },
  {
    key: "children-under-13-rear-seat",
    quote:
      "Children under 13 should be secured in the rear seat because airbags can " +
      "injure or kill young children in the front seat.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Child Passenger Safety",
    url: HB_URL,
  },
  {
    key: "handheld-school-work-zone",
    quote:
      "Florida law prohibits a person from operating a motor vehicle while using " +
      "a wireless communications device in a handheld manner in a designated " +
      "school crossing, school zone, or work zone.",
    source: HB,
    section: "Chapter 4: Before You Drive - Distracted Driving",
    url: HB_URL,
  },
  {
    key: "distraction-categories",
    quote:
      "1. Visual--taking your eyes off the road 2. Manual--taking your hands off " +
      "the steering wheel 3. Cognitive--thinking about anything other than " +
      "driving",
    source: HB,
    section: "Chapter 4: Before You Drive - Distracted Driving",
    url: HB_URL,
  },
  {
    key: "passengers-18-charged",
    quote:
      "Passengers 18 years old or older will be charged with the violation if " +
      "they fail to wear a safety belt when required by law.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Safety Belts",
    url: HB_URL,
  },
  {
    key: "bicycle-three-feet",
    quote:
      "Florida law requires that you give bicyclists a minimum of three feet of " +
      "clearance and use caution/slow speed when driving next to or passing them.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Bicyclists",
    url: HB_URL,
  },
  {
    key: "bicycle-is-vehicle",
    quote:
      "In Florida, the bicycle is legally defined as a vehicle and has all of the " +
      "privileges, rights, and responsibilities on public roads (except limited " +
      "access highways) that a motor vehicle operator does.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Bicyclists",
    url: HB_URL,
  },
  {
    key: "bike-helmet-under-16",
    quote:
      "All bicyclists and passengers under age 16 are required to wear helmets " +
      "that meet federal safety standards.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Bicyclists",
    url: HB_URL,
  },
  {
    key: "bike-lights-night",
    quote:
      "Between sunset and sunrise, bicyclists must have a white light visible " +
      "from 500 feet on the front of their bicycle and a red reflector and a red " +
      "light visible from 600 feet on the rear.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Bicyclists",
    url: HB_URL,
  },
  {
    key: "bike-assume-straight",
    quote:
      "At intersections, assume bicyclists are traveling straight unless they " +
      "signal otherwise.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Bicyclists",
    url: HB_URL,
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "You must not attempt to share a lane with a motorcycle. The motorcyclist " +
      "is entitled to the entire lane.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Motorcycles and Mopeds",
    url: HB_URL,
  },
  {
    key: "motorcycle-helmet-21",
    quote:
      "Operators of motorcycles must wear a helmet unless they are 21 or older " +
      "AND carry a medical insurance policy providing for at least $10,000 in " +
      "medical benefits for injuries.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Motorcycles and Mopeds",
    url: HB_URL,
  },
  {
    key: "moped-class-e",
    quote:
      "Operators of mopeds must have a Class E driver license. A motorcycle " +
      "endorsement is not required.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Motorcycles and Mopeds",
    url: HB_URL,
  },
  {
    key: "motorcycle-buffer",
    quote:
      "Maintain more than a four-second buffer zone between you and a motorcyclist",
    source: HB,
    section: "Chapter 10: Sharing the Road - Motorcycles and Mopeds",
    url: HB_URL,
  },
  {
    key: "cmv-no-zone",
    quote:
      "Stay out of the \"No Zone.\" CMVs have large blind spots in front, behind, " +
      "and on both sides of the vehicle.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Commercial Motor Vehicles",
    url: HB_URL,
  },
  {
    key: "cmv-right-turn-swing",
    quote:
      "CMVs often need to swing wide to the left in order to make a right turn. " +
      "Do not drive between the CMV and the curb",
    source: HB,
    section: "Chapter 10: Sharing the Road - Commercial Motor Vehicles",
    url: HB_URL,
  },
  {
    key: "cmv-pass-left",
    quote:
      "Pass CMVs on the left side for maximum visibility.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Commercial Motor Vehicles",
    url: HB_URL,
  },
  {
    key: "golf-cart-age",
    quote:
      "A golf cart must not be driven on a public road or street by anyone under " +
      "the age of 18 unless they possess a valid learner's license or valid " +
      "driver license.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Golf Carts",
    url: HB_URL,
  },
  {
    key: "golf-cart-crossing",
    quote:
      "You may cross state roads if the posted speed limit is 45 MPH or less and " +
      "only at an intersection with a traffic control device.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Golf Carts",
    url: HB_URL,
  },
  {
    key: "lsv-definition",
    quote:
      "Low-speed vehicles (LSV) are fourwheeled vehicles with top speeds of 21-25 " +
      "MPH.",
    source: HB,
    section: "Chapter 10: Sharing the Road - Low-Speed Vehicles",
    url: HB_URL,
  },
  {
    key: "slow-moving-vehicle-sign",
    quote:
      "Farm vehicles designed for operation at speeds less than 25 MPH must " +
      "display this sign on the rear when using public highways",
    source: HB,
    section: "Chapter 10: Sharing the Road - Slow Moving Vehicles",
    url: HB_URL,
  },
  {
    key: "blind-spots-definition",
    quote:
      "Blind spots are areas near the left and right rear corners of your vehicle " +
      "that you can't see in your rear-view mirrors or with your peripheral " +
      "vision.",
    source: HB,
    section: "Chapter 7: Driving Safety",
    url: HB_URL,
  },
  {
    key: "class-e-pass-40",
    quote:
      "To pass, a customer must answer 40 out of 50 questions correctly, or score " +
      "80 percent.",
    source: EXAM,
    section: "Class E Knowledge Exam",
    url: EXAM_URL,
  },
  {
    key: "learner-15-years-old",
    quote:
      "Learner's License 1. Be at least 15 years old.",
    source: HB,
    section: "Chapter 1: Driver Licenses & ID Cards",
    url: HB_URL,
  },
  {
    key: "learner-curfew",
    quote:
      "Minors holding a learner's license must be accompanied by a licensed " +
      "driver age 21 or older, and must only drive during daylight hours. After 3 " +
      "months you may drive until 10 pm.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Restrictions for Minors (Driving Curfews)",
    url: HB_URL,
  },
  {
    key: "curfew-16",
    quote:
      "A 16-year-old licensed driver may not drive between 11 pm and 6 am unless " +
      "driving to or from work or accompanied by a licensed driver age 21 or " +
      "older.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Restrictions for Minors (Driving Curfews)",
    url: HB_URL,
  },
  {
    key: "curfew-17",
    quote:
      "A 17-year-old licensed driver may not drive between 1 am and 5 am, unless " +
      "driving to or from work or accompanied by a licensed driver age 21 or " +
      "older.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Restrictions for Minors (Driving Curfews)",
    url: HB_URL,
  },
  {
    key: "fifty-hours-experience",
    quote:
      "A parent, legal guardian, or responsible adult 21 years old or older, must " +
      "certify that the driver has had at least 50 hours of driving experience, " +
      "of which 10 hours were at night.",
    source: HB,
    section: "Chapter 1: Driver Licenses & ID Cards",
    url: HB_URL,
  },
  {
    key: "hold-learner-12-months",
    quote:
      "Must hold a learner's license for 12 months or until the 18th birthday, " +
      "whichever comes first.",
    source: HB,
    section: "Chapter 1: Driver Licenses & ID Cards",
    url: HB_URL,
  },
  {
    key: "minor-six-points",
    quote:
      "Any driver under the age of 18 who accumulates 6 or more points within a " +
      "12 month period is automatically restricted for one year to driving for " +
      "Business Purposes Only.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Mandatory Restriction for Minors",
    url: HB_URL,
  },
  {
    key: "point-suspensions",
    quote:
      "12 points within a 12-month period--30 day suspension 18 points within a " +
      "18-month period--3 month suspension 24 points within a 36-month period--1 " +
      "year suspension",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Point System",
    url: HB_URL,
  },
  {
    key: "points-out-of-state",
    quote:
      "The motorist receives the same number of points listed if the conviction " +
      "occurs out-of-state or in a federal court.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Point System",
    url: HB_URL,
  },
  {
    key: "no-fault-minimums",
    quote:
      "have a minimum of $10,000 in PIP AND a minimum of $10,000 in PDL coverage",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - No-Fault Law",
    url: HB_URL,
  },
  {
    key: "pip-pdl-what-they-cover",
    quote:
      "PIP covers your injuries if you're in a crash, no matter who caused it. " +
      "PDL coverage pays for damage to other people's property that you caused.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - No-Fault Law",
    url: HB_URL,
  },
  {
    key: "insurance-suspension-three-years",
    quote:
      "If you fail to provide proof of new insurance, your driver license and " +
      "license plate can be suspended for up to three years.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - No-Fault Law",
    url: HB_URL,
  },
  {
    key: "dui-higher-coverage",
    quote:
      "The coverage required in such a case must be at least $100,000 BIL for " +
      "injuries to one person, $300,000 BIL for injuries to two or more people, " +
      "and $50,000 PDL.",
    source: HB,
    section: "Chapter 3: Your Driving Privilege - Financial Responsibility Law",
    url: HB_URL,
  },
  {
    key: "tlsae-required",
    quote:
      "you must complete a TLSAE course before applying for a driver license in " +
      "the state of Florida",
    source: HB,
    section: "Chapter 2: Driving Schools & Test Providers",
    url: HB_URL,
  },
  {
    key: "address-change-30-days",
    quote:
      "You must obtain a new driver license within 30 calendar days of any change " +
      "to your mailing or residential address.",
    source: HB,
    section: "Chapter 1: Driver Licenses & ID Cards",
    url: HB_URL,
  },
  {
    key: "vision-20-40",
    quote:
      "20/40 or better vision in each eye with or without corrective lenses meets " +
      "state requirements without referral to an eye specialist.",
    source: HB,
    section: "Chapter 2: Driving Schools & Test Providers - Driver License Testing",
    url: HB_URL,
  },
];
