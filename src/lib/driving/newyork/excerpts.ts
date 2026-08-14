import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the New York State Driver's Manual (MV-21), as
// published in HTML chapter by chapter on dmv.ny.gov, plus the DMV's own pages
// for the Graduated License Law, learner permit restrictions and insurance
// requirements where those state a rule the manual only summarises.
//
// Every `quote` below was located as a literal substring of the fetched page
// text and verified mechanically. Nothing here is paraphrased, tidied, merged
// across sections, or reworded. Two normalisations are applied and nothing
// else: curly quotes and dashes are folded to ASCII, and runs of whitespace
// (which the DMV's HTML sprinkles unevenly inside parentheses and around
// units) are treated as equivalent. No word is changed, dropped or reordered.
//
// These are quoted rather than summarised because the written test is drawn
// from this wording. Each is kept to the operative rule and shown with its
// source, section and a link back to the DMV so the learner reads the real
// thing on the state's own site.

const MANUAL = "New York State Driver's Manual (MV-21)";
const M = "https://dmv.ny.gov/new-york-state-drivers-manual-practice-tests";
const CH1 = `${M}/chapter-1-driver-licenses`;
const CH2 = `${M}/chapter-2-how-keep-your-license`;
const CH3 = `${M}/chapter-3-owning-vehicle`;
const CH4 = `${M}/chapter-4-traffic-control`;
const CH5 = `${M}/chapter-5-intersections-and-turns`;
const CH6 = `${M}/chapter-6-passing`;
const CH7 = `${M}/chapter-7-parallel-parking`;
const CH8 = `${M}/chapter-8-defensive-driving`;
const CH9 = `${M}/chapter-9-alcohol-and-other-drugs`;
const CH10 = `${M}/chapter-10-special-driving-conditions`;
const CH11 = `${M}/chapter-11-sharing-road`;
const CH12 = `${M}/chapter-12-if-you-are-traffic-crash`;

const GDL = "NYS DMV - The Graduated License Law and Restrictions for Drivers Under 18";
const GDL_URL = "https://dmv.ny.gov/driver-license/younger-driver/the-graduated-license-law";
const PERMITS = "NYS DMV - Learner Permit Restrictions";
const PERMITS_URL = "https://dmv.ny.gov/driver-license/learner-permit-restrictions";
const INSURANCE = "NYS DMV - New York State Insurance Requirements";
const INSURANCE_URL = "https://dmv.ny.gov/insurance/insurance-requirements";

export const newyorkExcerpts: HandbookExcerpt[] = [
  // ------------------------------------------------- Chapter 4: signs
  {
    key: "sign-regulation-shape",
    quote:
      "REGULATION SIGNS normally are white rectangles with black letters or symbols, but some are different shapes, and some can use red letters or symbols.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Signs",
    url: CH4,
  },
  {
    key: "sign-warning-shape",
    quote:
      "WARNING SIGNS normally are yellow and diamond-shaped, with black letters or symbols.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Signs",
    url: CH4,
  },
  {
    key: "sign-destination-green",
    quote: "DESTINATION SIGNS are green with white letters and symbols.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Signs",
    url: CH4,
  },
  {
    key: "sign-service-blue",
    quote: "SERVICE SIGNS are blue with white letters and symbols.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Signs",
    url: CH4,
  },
  {
    key: "sign-work-area-orange",
    quote:
      "A work area speed limit as low as 25 MPH (40 km/h) can be posted. Even if no speed limit is provided, you must drive at a reduced speed through the work zone and you must always obey the flag persons.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Work Area Signs",
    url: CH4,
  },
  {
    key: "sign-route-shape",
    quote:
      "Indicate interstate, U.S., state or county routes. The shape tells you the type of route you are on.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Route Signs",
    url: CH4,
  },
  {
    key: "sign-red-circle-slash",
    quote:
      "Some regulation signs have a red circle with a slash over a symbol. This indicates that an action, like a right turn, is not allowed or that some vehicles are restricted from the road.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Other Regulation Signs",
    url: CH4,
  },
  {
    key: "sign-warning-meaning",
    quote:
      "You are approaching a hazardous location or a location where there is a special rule, as shown in the sample signs.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Warning Signs",
    url: CH4,
  },
  {
    key: "stop-sign-meaning",
    quote:
      "Come to a full stop, yield the right-of-way to vehicles and pedestrians in or heading toward the intersection.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Stop Sign",
    url: CH4,
  },
  {
    key: "stop-sign-where",
    quote:
      "You must come to a stop before the stop line, if there is one. If not, you must stop before you enter the crosswalk.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Stop Sign",
    url: CH4,
  },
  {
    key: "stop-sign-no-line",
    quote:
      "If there is no stop line or crosswalk, you must stop before you enter the intersection, at the point nearest the intersection that gives you a view of traffic on the intersecting roadway.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Stop Sign",
    url: CH4,
  },
  {
    key: "yield-sign-meaning",
    quote:
      "Decrease speed as you reach the intersection. Prepare to stop and yield the right-of-way to vehicles and pedestrians in or heading toward the intersection.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Yield Sign",
    url: CH4,
  },
  {
    key: "yield-sign-full-stop",
    quote: "You must come to a full stop at a YIELD sign if traffic conditions require it.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Yield Sign",
    url: CH4,
  },

  // --------------------------------------------- Chapter 4: signals
  {
    key: "signal-out-of-service",
    quote:
      "State law requires that if the traffic lights or controls are out of service or does not operate correctly when you approach an intersection, you must come to a stop as you would for a stop sign.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "signal-steady-red",
    quote:
      "Steady Red: Stop. Do not go until the light is green. If a green arrow is shown with the red light, you can go toward the arrow and only if the intersection is clear.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "right-turn-on-red",
    quote:
      "You can make a right turn at a steady red light after you come to a full stop and yield the right-of-way to oncoming traffic and pedestrians.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "left-turn-on-red",
    quote:
      "You can make a left turn at a steady red light when you turn from a one-way road into another one-way road after you come to a full stop and yield the right-of-way to oncoming traffic and pedestrians.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "nyc-no-turn-on-red",
    quote:
      "You are not allowed to turn on a red light in New York City unless a sign that permits it is posted.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "school-bus-no-right-on-red",
    quote: "The driver of a school bus containing pupils cannot turn right on any red light.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "signal-flashing-red",
    quote:
      "Flashing Red: Means the same as a STOP sign: Stop, yield the right-of-way, and go when it is safe.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "signal-red-arrow",
    quote:
      "Red Arrow: Do not go in the direction of the arrow until the red arrow light is off and a green light or arrow light goes on. A right or left turn on red is not permitted at a red arrow.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "signal-steady-yellow",
    quote:
      "Steady Yellow: The light will change from green to red. Be prepared to stop for the red light.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "signal-flashing-yellow",
    quote: "Flashing Yellow: Drive with caution.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "signal-yellow-arrow",
    quote:
      "Yellow Arrow: The protection of a green arrow will end. If you intend to turn in the direction of the arrow, be prepared to stop.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "signal-steady-green",
    quote:
      "Steady Green: Go, but yield the right-of-way to other traffic at the intersection as required by law",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "signal-green-arrow",
    quote:
      "Green Arrow: You can go in the direction of the arrow, but you must yield the right-of-way to other traffic at the intersection as required by law",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Lights",
    url: CH4,
  },
  {
    key: "lane-control-red-x",
    quote: "Steady Red \"X\": Do not drive in this lane.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Lane Use Control Lights",
    url: CH4,
  },
  {
    key: "lane-control-yellow-x",
    quote: "Steady Yellow \"X\": Move from this lane.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Lane Use Control Lights",
    url: CH4,
  },
  {
    key: "lane-control-flashing-yellow-x",
    quote: "Flashing Yellow \"X\": This lane can only be used for a left turn.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Lane Use Control Lights",
    url: CH4,
  },

  // ------------------------------------ Chapter 4: pavement markings
  {
    key: "edge-line-illegal-to-cross",
    quote:
      "It is illegal to drive across the edge line, except when told to by a police officer or other authorized official or when allowed by an official sign.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Edge and Lane Lines",
    url: CH4,
  },
  {
    key: "edge-line-angles-in",
    quote:
      "An edge line that angles toward the center of the road shows that the road is narrower ahead.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Edge and Lane Lines",
    url: CH4,
  },
  {
    key: "lane-lines-white",
    quote:
      "Lines that separate lanes of traffic that moves in the same direction are white.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Edge and Lane Lines",
    url: CH4,
  },
  {
    key: "lane-lines-yellow",
    quote:
      "Lines that separate traffic that moves in opposite directions are yellow.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Edge and Lane Lines",
    url: CH4,
  },
  {
    key: "line-one-broken",
    quote:
      "One broken line: You can pass other vehicles or change lanes if you can do so safely without interfering with traffic.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Edge and Lane Lines",
    url: CH4,
  },
  {
    key: "line-solid-with-broken",
    quote:
      "Solid line with broken line: If you are on the side with the solid line, you cannot pass other vehicles or go across the line except to make a left turn into a driveway.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Edge and Lane Lines",
    url: CH4,
  },
  {
    key: "line-double-solid",
    quote: "Double solid lines: You can not pass or change lanes.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Edge and Lane Lines",
    url: CH4,
  },
  {
    key: "line-one-solid",
    quote:
      "One solid line: You can pass other vehicles or change lanes, but you can only do so when obstructions in the road or traffic conditions make it necessary.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Edge and Lane Lines",
    url: CH4,
  },
  {
    key: "stop-line-crosswalk",
    quote:
      "When required to stop because of a sign or light, you must stop before you reach the stop line, if there is one, or the crosswalk.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Stop and Crosswalk Lines",
    url: CH4,
  },
  {
    key: "lane-arrows",
    quote:
      "You must be in the correct lane before you reach the solid line that separates the lanes.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Arrows",
    url: CH4,
  },
  {
    key: "diamond-lane",
    quote:
      "You cannot enter and use these lanes unless your vehicle complies with the occupancy or other requirements indicated by signs for the times the special conditions are in effect.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Diamond Symbol",
    url: CH4,
  },
  {
    key: "traffic-officer-precedence",
    quote:
      "Directions given by traffic officers take precedence over signs, signals or pavement markings.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Officers",
    url: CH4,
  },
  {
    key: "traffic-officer-who",
    quote:
      "Among the persons authorized to direct traffic are police officers, fire police, highway work area flag persons, school crossing persons, and school bus drivers.",
    source: MANUAL,
    section: "Chapter 4: Traffic Control - Traffic Officers",
    url: CH4,
  },

  // ----------------------------------- Chapter 5: right of way, turns
  {
    key: "row-traffic-in-intersection",
    quote:
      "A driver who approaches an intersection must yield the right-of-way to traffic that is in the intersection.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Right-of-Way",
    url: CH5,
  },
  {
    key: "row-left-turn-yields",
    quote:
      "If drivers approaching from opposite directions reach an intersection at about the same time, a driver that turns left must yield to traffic that moves straight or turns right.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Right-of-Way",
    url: CH5,
  },
  {
    key: "row-left-into-driveway",
    quote:
      "You must also yield to traffic headed toward you when you turn left into a driveway, parking lot or other area, even if there are no signs or signals that control the turn.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Right-of-Way",
    url: CH5,
  },
  {
    key: "row-driver-on-left-yields",
    quote:
      "At intersections not controlled by signs or signals, or where two or more drivers stop at STOP signs at the same time and they are at right angles, the driver on the left must yield the right-of-way to the driver on the right.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Right-of-Way",
    url: CH5,
  },
  {
    key: "row-from-driveway",
    quote:
      "A vehicle that enters a roadway from a driveway, alley, private road, or another place that is not a roadway, must stop and yield the right-of-way to traffic on the roadway and to pedestrians.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Right-of-Way",
    url: CH5,
  },
  {
    key: "row-pedestrians-crosswalk",
    quote:
      "Drivers must yield to pedestrians who legally use marked or unmarked crosswalks. This means you must slow down or stop if necessary.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Right-of-Way",
    url: CH5,
  },
  {
    key: "row-do-not-block",
    quote:
      "You cannot enter an intersection if traffic is backed up on the other side and you can not get completely through the intersection.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Right-of-Way",
    url: CH5,
  },
  {
    key: "row-traffic-circle",
    quote:
      "A driver who approaches a traffic circle or rotary must yield the right-of-way to drivers already in the circle.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Right-of-Way",
    url: CH5,
  },
  {
    key: "emergency-pull-right-stop",
    quote:
      "When you hear or see an emergency vehicle heading toward your vehicle from any direction, safely pull over immediately to the right edge of the road and stop.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Emergency Vehicles",
    url: CH5,
  },
  {
    key: "emergency-clear-intersection",
    quote: "If you are in an intersection, drive out of it before you pull over.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Emergency Vehicles",
    url: CH5,
  },
  {
    key: "emergency-opposite-lane",
    quote:
      "You must pull over and stop for an emergency vehicle even if it is headed toward you in the opposite lane of a two-way roadway.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Emergency Vehicles",
    url: CH5,
  },
  {
    key: "emergency-siren-unseen",
    quote:
      "If you hear a siren or air-horn close by but do not know exactly where the emergency vehicle is, you must safely pull over to the right-side edge of the road and stop until you are sure it is not headed toward you.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Emergency Vehicles",
    url: CH5,
  },
  {
    key: "move-over-law",
    quote:
      "Drivers must reduce speed on all roads when encountering such vehicles, but on parkways, interstates and other controlled access roads with multiple lanes, drivers are further required to move from the lane adjacent to the emergency or hazard vehicle unless traffic or other hazards prevent doing so safely.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Move Over Law",
    url: CH5,
  },
  {
    key: "move-over-all-stopped",
    quote:
      "Drivers are also required to move over for motor vehicles which are parked, stopped or standing on the shoulder or any portion of a parkway or controlled-access highway.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Move Over Law",
    url: CH5,
  },
  {
    key: "blue-green-lights",
    quote:
      "Personal vehicles driven by volunteer fire fighters responding to alarms are allowed to display blue lights and those driven by volunteer ambulance or rescue squad members can display green lights.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Blue, Green and Amber Lights",
    url: CH5,
  },
  {
    key: "blue-green-not-authorized",
    quote:
      "The vehicles that display blue, green or amber lights are not authorized emergency vehicles. Their drivers must obey all traffic laws.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Blue, Green and Amber Lights",
    url: CH5,
  },
  {
    key: "signal-100-feet",
    quote:
      "The law requires you to signal a turn or lane change with your turn lights or hand signals at least 100 feet (30 m) ahead.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Turns",
    url: CH5,
  },
  {
    key: "turn-wheels-straight",
    quote:
      "Keep your wheels straight until you actually begin to make your turn. If your wheels are turned and you are hit from behind, your vehicle could be pushed into the oncoming lane of traffic.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Turns",
    url: CH5,
  },
  {
    key: "turn-right-position",
    quote:
      "As you prepare to turn, get as far to the right as possible. Do not make wide, sweeping turns. Unless signs direct you to do otherwise, turn into the right lane of the road you enter.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - Right Turn",
    url: CH5,
  },
  {
    key: "turn-left-one-way-to-one-way",
    quote:
      "Move into the left lane when you prepare to turn. If the road you enter has two lanes, you must turn into its left lane.",
    source: MANUAL,
    section:
      "Chapter 5: Intersections and Turns - Left Turn From One-Way Road Into One-Way Road",
    url: CH5,
  },
  {
    key: "turn-left-two-way-to-one-way",
    quote:
      "Approach the turn from the right half of the roadway closest to the center. Make the turn before you reach the center of the intersection and turn into the left lane of the road you enter.",
    source: MANUAL,
    section:
      "Chapter 5: Intersections and Turns - Left Turn From Two-Way Road Into One-Way Road",
    url: CH5,
  },
  {
    key: "turn-left-two-way-to-two-way",
    quote:
      "Keep to the right of the center line of the road you enter, but as close as possible to the center line.",
    source: MANUAL,
    section:
      "Chapter 5: Intersections and Turns - Left Turn From Two-Way Road Into Two-Way Road",
    url: CH5,
  },
  {
    key: "uturn-definition",
    quote:
      "A \"U-turn\" is any turn you make so you can proceed in the opposite direction.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - U-Turns",
    url: CH5,
  },
  {
    key: "uturn-lane-position",
    quote:
      "You can make a U-turn only from the left portion of the lane nearest to the centerline of the roadway, never from the right lane.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - U-Turns",
    url: CH5,
  },
  {
    key: "uturn-500-feet",
    quote:
      "You can not make a U-turn near the top of a hill, a curve or any other location where other drivers can not see your vehicle from 500 feet (150 m) away in either direction.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - U-Turns",
    url: CH5,
  },
  {
    key: "uturn-nyc-business-district",
    quote:
      "U-turns are also illegal in business districts of New York City and where NO U-TURN signs are provided.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - U-Turns",
    url: CH5,
  },
  {
    key: "uturn-expressway",
    quote:
      "You can never make a U-turn on a limited access expressway, even if paths connect your side of the expressway with the other side.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - U-Turns",
    url: CH5,
  },
  {
    key: "uturn-school-zone",
    quote:
      "In addition, it is prohibited for a vehicle to make a U-turn in a school zone.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - U-Turns",
    url: CH5,
  },
  {
    key: "three-point-turn",
    quote:
      "Unless prohibited, a three-point turn may be used to turn around on a narrow, two-way street.",
    source: MANUAL,
    section: "Chapter 5: Intersections and Turns - U-Turns",
    url: CH5,
  },

  // ------------------------------------- Chapter 6: passing, buses
  {
    key: "drive-right-pass-left",
    quote:
      "The law requires that we drive on the right side of the road. When we are allowed to pass other vehicles, we usually pass on the left.",
    source: MANUAL,
    section: "Chapter 6: Passing",
    url: CH6,
  },
  {
    key: "no-speeding-to-pass",
    quote: "You must not exceed the speed limit to pass another vehicle.",
    source: MANUAL,
    section: "Chapter 6: Passing",
    url: CH6,
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "When you pass a motorcycle, remember to give the motorcycle the same full lane width as other vehicles are allowed.",
    source: MANUAL,
    section: "Chapter 6: Passing",
    url: CH6,
  },
  {
    key: "pass-bicycle-on-left",
    quote:
      "When overtaking a bicyclist from behind, the law requires you to pass on the left at a safe distance until the bicycle has been cleared.",
    source: MANUAL,
    section: "Chapter 6: Passing",
    url: CH6,
  },
  {
    key: "lane-change-signal-100-feet",
    quote:
      "The law requires you to use turn signal lamps or hand and arm signals to indicate your intention to change lanes at least 100 feet (30 m) before you make a lane change.",
    source: MANUAL,
    section: "Chapter 6: Passing",
    url: CH6,
  },
  {
    key: "never-pass-stopped-at-crosswalk",
    quote:
      "You must never pass a vehicle that has stopped at a crosswalk to allow a pedestrian to go across.",
    source: MANUAL,
    section: "Chapter 6: Passing",
    url: CH6,
  },
  {
    key: "no-pass-oncoming-200-feet",
    quote:
      "You cannot safely return to the right lane before any oncoming vehicle comes within 200 feet (60 m) of you.",
    source: MANUAL,
    section: "Chapter 6: Passing - How to Pass on the Left",
    url: CH6,
  },
  {
    key: "no-pass-railroad-100-feet",
    quote: "You are within 100 feet (30 m) of a railroad crossing on a two-way roadway.",
    source: MANUAL,
    section: "Chapter 6: Passing - How to Pass on the Left",
    url: CH6,
  },
  {
    key: "no-pass-bridge-tunnel",
    quote:
      "You are within 100 feet (30 m) of a bridge, tunnel or viaduct on a two-way road and your view is obstructed.",
    source: MANUAL,
    section: "Chapter 6: Passing - How to Pass on the Left",
    url: CH6,
  },
  {
    key: "no-pass-hill-curve",
    quote:
      "You approach a curve or the top of a hill on a two-way road and cannot see around or over it.",
    source: MANUAL,
    section: "Chapter 6: Passing - How to Pass on the Left",
    url: CH6,
  },
  {
    key: "blind-spot-shoulder-check",
    quote:
      "Never depend on your mirrors when you prepare to change lanes. Even correctly adjusted mirrors will leave \"blind spots\" behind both sides of your vehicle.",
    source: MANUAL,
    section: "Chapter 6: Passing - How to Pass on the Left",
    url: CH6,
  },
  {
    key: "return-after-passing",
    quote:
      "Before you return to the right lane, signal and look at your interior rear-view mirror and make sure you can see the front bumper of the vehicle you passed.",
    source: MANUAL,
    section: "Chapter 6: Passing - How to Pass on the Left",
    url: CH6,
  },
  {
    key: "pass-right-only-when-listed",
    quote:
      "You can pass a vehicle on the right only in the conditions listed below and only if you can pass safely.",
    source: MANUAL,
    section: "Chapter 6: Passing - How to Pass on the Right",
    url: CH6,
  },
  {
    key: "no-driving-on-shoulder",
    quote:
      "You cannot drive on or across the shoulder or edge line of the road unless a sign allows it or when indicated by a traffic officer",
    source: MANUAL,
    section: "Chapter 6: Passing - How to Pass on the Right",
    url: CH6,
  },
  {
    key: "being-passed-on-left",
    quote:
      "If another vehicle passes you on the left, decrease your speed slightly and stay centered in your lane.",
    source: MANUAL,
    section: "Chapter 6: Passing - Being Passed",
    url: CH6,
  },
  {
    key: "passed-on-right-move-over",
    quote:
      "If you find that you are being passed on the right by many vehicles, you should move into the right lane and allow them to pass you on the left.",
    source: MANUAL,
    section: "Chapter 6: Passing - Being Passed",
    url: CH6,
  },
  {
    key: "school-bus-red-lights-stop",
    quote:
      "When a stopped school bus flashes its red light(s), traffic that approaches from either direction, even in front of the school and in school parking lots, must stop before it reaches the bus.",
    source: MANUAL,
    section: "Chapter 6: Passing - School Buses",
    url: CH6,
  },
  {
    key: "school-bus-20-feet",
    quote: "You should stop at least 20 feet (6 m) away from the bus.",
    source: MANUAL,
    section: "Chapter 6: Passing - School Buses",
    url: CH6,
  },
  {
    key: "school-bus-yellow-lights",
    quote:
      "Before a school bus stops to load or discharge passengers, the driver will usually flash yellow warning lights which are located on the front and back of the bus near the roof.",
    source: MANUAL,
    section: "Chapter 6: Passing - School Buses",
    url: CH6,
  },
  {
    key: "school-bus-divided-highway",
    quote:
      "This law applies on all roadways in New York State. You must stop for a school bus even if it is on the opposite side of a divided highway.",
    source: MANUAL,
    section: "Chapter 6: Passing - School Buses",
    url: CH6,
  },
  {
    key: "school-bus-when-to-proceed",
    quote:
      "When you stop for a school bus, you cannot drive again until the bus starts moving again or when the bus driver or a traffic officer signals that you can proceed.",
    source: MANUAL,
    section: "Chapter 6: Passing - School Buses",
    url: CH6,
  },
  {
    key: "school-bus-fines",
    quote:
      "The fine when you pass a stopped school bus ranges from a minimum of $250 for a first violation to a maximum of $1,000 for three violations in three years.",
    source: MANUAL,
    section: "Chapter 6: Passing - School Buses",
    url: CH6,
  },
  {
    key: "school-bus-three-strikes",
    quote:
      "If you are convicted of three of these violations in three years, your driver license will be revoked for a minimum of six months.",
    source: MANUAL,
    section: "Chapter 6: Passing - School Buses",
    url: CH6,
  },
  {
    key: "school-bus-disability-vehicles",
    quote:
      "Remember that vehicles that transport people with disabilities can be equipped as school buses and you must stop for them as you would for other school buses.",
    source: MANUAL,
    section: "Chapter 6: Passing - School Buses",
    url: CH6,
  },

  // ------------------------------------ Chapter 7: parking, stopping
  {
    key: "parallel-park-one-foot",
    quote:
      "In your final parking position, your wheels must be no more than one foot (30 cm) from the curb.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - How to Park",
    url: CH7,
  },
  {
    key: "park-on-hill-wheels",
    quote:
      "Turn the wheels toward the curb or side of the road, so they will keep your vehicle from heading into traffic.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - How to Park on a Hill",
    url: CH7,
  },
  {
    key: "door-on-roadside",
    quote:
      "After parking, remember that you must not open the door on the roadside if it will interfere with bicyclists and other traffic.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - How to Park",
    url: CH7,
  },
  {
    key: "parking-definition",
    quote:
      "Parking is when a vehicle is stopped, occupied or not, other than temporarily for the purpose of loading or unloading merchandise or passengers.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Parking Regulations",
    url: CH7,
  },
  {
    key: "no-parking-sign",
    quote:
      "A NO PARKING sign means you can make a temporary stop to load or discharge merchandise or passengers.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Parking Regulations",
    url: CH7,
  },
  {
    key: "no-standing-sign",
    quote:
      "A NO STANDING sign means you can make a temporary stop to load or discharge passengers. The driver cannot exit the vehicle.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Parking Regulations",
    url: CH7,
  },
  {
    key: "no-stopping-sign",
    quote:
      "A NO STOPPING sign means you can stop only to obey a traffic sign, signal or officer or to prevent conflicts with other vehicles.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Parking Regulations",
    url: CH7,
  },
  {
    key: "park-hydrant-15-feet",
    quote:
      "Within 15 feet (5 m) of a fire hydrant, unless a licensed driver remains in the vehicle to move it in an emergency.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Parking Regulations",
    url: CH7,
  },
  {
    key: "park-double-parking",
    quote: "On the roadside of a parked vehicle (\"double parking\").",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Parking Regulations",
    url: CH7,
  },
  {
    key: "park-safety-area-30-feet",
    quote:
      "Within 30 feet (10 m) of a pedestrian safety area, unless another distance is marked.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Parking Regulations",
    url: CH7,
  },
  {
    key: "park-crosswalk-20-feet",
    quote: "Within 20 feet (6 m) of a crosswalk at an intersection.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Parking Regulations",
    url: CH7,
  },
  {
    key: "park-signal-stop-yield-30-feet",
    quote: "Within 30 feet (10 m) of a traffic light, STOP sign or YIELD sign.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Parking Regulations",
    url: CH7,
  },
  {
    key: "park-fire-station-20-75",
    quote:
      "Within 20 feet (6 m) of a fire station driveway, or within 75 feet (23 m) on the opposite side of the road.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Parking Regulations",
    url: CH7,
  },
  {
    key: "park-railroad-50-feet",
    quote:
      "You cannot park your vehicle within 50 feet (15 m) of a railroad crossing.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Parking Regulations",
    url: CH7,
  },
  {
    key: "park-bridge-tunnel-tracks",
    quote: "On a bridge or in a tunnel.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Parking Regulations",
    url: CH7,
  },
  {
    key: "disabled-parking-permit",
    quote:
      "You can park in reserved spaces only if you have a permit or vehicle plates for persons with disabilities and only when the person who received the permit or vehicle plates is in the vehicle.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Reserved Parking for People with Disabilities",
    url: CH7,
  },
  {
    key: "disabled-parking-striped-area",
    quote:
      "Do not park in the spaces with diagonal stripes next to reserved parking areas.",
    source: MANUAL,
    section: "Chapter 7: Parallel Parking - Reserved Parking for People with Disabilities",
    url: CH7,
  },

  // ---------------------------- Chapter 8: speed, space, restraints
  {
    key: "speed-55-default",
    quote: "You must obey the speed limit. If no limit is posted, drive no more than 55 mph (88 km/h).",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Speed",
    url: CH8,
  },
  {
    key: "speed-nyc-25",
    quote:
      "For example, the speed limit is 25 mph (40 km/h) in New York City unless another limit is posted.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Speed",
    url: CH8,
  },
  {
    key: "speed-not-reasonable",
    quote:
      "Even if you were to drive at 50 mph (80 km/h) on that hazardous highway, a police officer could ticket you for a speed \"not reasonable\" for the conditions.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Speed",
    url: CH8,
  },
  {
    key: "speed-minimum-limits",
    quote:
      "To keep a smooth traffic flow, some highways also have minimum speed limits. If you drive slower than the minimum speed you can halt the traffic flow and create a dangerous condition.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Speed",
    url: CH8,
  },
  {
    key: "two-second-rule",
    quote:
      "For a good \"space cushion,\" use the two-second rule: Select an object near or above the road ahead like a sign, tree or overpass.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Allow Yourself Space",
    url: CH8,
  },
  {
    key: "two-second-rule-bad-weather",
    quote:
      "In bad weather and when following large trucks, increase the count to at least three or four seconds for additional space.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Allow Yourself Space",
    url: CH8,
  },
  {
    key: "tailgated-response",
    quote:
      "If a driver follows you too closely (tailgates) move to another lane if possible, or reduce speed and pull off the road to let the driver go by.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Allow Yourself Space",
    url: CH8,
  },
  {
    key: "belt-primary-enforcement",
    quote:
      "New York is a \"primary enforcement\" state. A law enforcement officer can issue a traffic ticket for failure to wear a seat belt.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Seat Belts, Child Safety Seats, and Air Bags",
    url: CH8,
  },
  {
    key: "belt-16-and-older",
    quote:
      "A passenger age sixteen (16) years of age or older must be properly restrained by a seat belt, one person per belt.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Seat Belts, Child Safety Seats, and Air Bags",
    url: CH8,
  },
  {
    key: "belt-driver-responsible-under-16",
    quote:
      "The driver must make sure that each passenger under the age of sixteen (16) is properly restrained by a seat belt or appropriate child restraint system. The driver can face a fine of $25 to $100 and receive three points on their driver license for each violation.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Seat Belts, Child Safety Seats, and Air Bags",
    url: CH8,
  },
  {
    key: "child-rear-facing-until-two",
    quote:
      "A child must be restrained in the rear-facing position until they are two (2) years old or reach the highest weight or height limit allowed by the car seat manufacturer.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Seat Belts, Child Safety Seats, and Air Bags",
    url: CH8,
  },
  {
    key: "child-booster-four-to-seven",
    quote:
      "A child between the age of four (4) and seven (7) must be restrained in an appropriate federally approved child restraint system (commonly referred to as a booster seat) used with lap and shoulder belt.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Seat Belts, Child Safety Seats, and Air Bags",
    url: CH8,
  },
  {
    key: "belt-eight-to-fifteen",
    quote:
      "All other passengers between the ages of eight (8) and fifteen (15) must be properly restrained by a seat belt, one person per belt.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Seat Belts, Child Safety Seats, and Air Bags",
    url: CH8,
  },
  {
    key: "airbag-ten-inches",
    quote:
      "You should sit with at least 10 inches between the center of your chest and the cover of the air bag.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Seat Belts, Child Safety Seats, and Air Bags",
    url: CH8,
  },
  {
    key: "airbag-no-rear-facing-front",
    quote:
      "NEVER PUT AN INFANT IN A REAR-FACING CHILD SAFETY SEAT IN THE FRONT SEAT OF A VEHICLE THAT HAS A PASSENGER AIR BAG.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Seat Belts, Child Safety Seats, and Air Bags",
    url: CH8,
  },
  {
    key: "airbags-work-with-belts",
    quote: "Air bags are meant to work WITH seat belts, not to replace them.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Seat Belts, Child Safety Seats, and Air Bags",
    url: CH8,
  },
  {
    key: "work-zone-fines-double",
    quote:
      "That is why when you speed in work zones, ticket fines double, even when the workers or work vehicles are not there.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - How to Drive Safely in Work Zones",
    url: CH8,
  },
  {
    key: "flagger-authority",
    quote:
      "A flagger has the same authority as a sign, which indicates you can receive a ticket for disobeying their directions.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - How to Drive Safely in Work Zones",
    url: CH8,
  },
  {
    key: "work-zone-merge-early",
    quote:
      "Do not speed to the end of the closed lane and try to get into the other lane.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Work Zone Tips",
    url: CH8,
  },
  {
    key: "work-zone-until-end-sign",
    quote:
      "Obey the signs until you pass the one that states the work zone has ended.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Work Zone Tips",
    url: CH8,
  },
  {
    key: "roundabout-yield-at-entry",
    quote:
      "Roundabouts follow the \"yield-at-entry\" rule, in which approaching vehicles must wait for a gap in the circulating flow before entering the circle.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Roundabouts",
    url: CH8,
  },
  {
    key: "roundabout-30-mph",
    quote:
      "Roundabouts are designed so that the speed of all vehicles is restricted to 30 mph (50 km/h) or less within the roundabout.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Roundabouts",
    url: CH8,
  },
  {
    key: "roundabout-look-left",
    quote: "Look to the left. Traffic in the roundabout has the right-of-way.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - How to Navigate a Roundabout",
    url: CH8,
  },
  {
    key: "roundabout-no-passing-bicycle",
    quote:
      "Bicyclists are permitted to ride within the roundabout and will be riding in the lane just as other vehicles do. Please do not pass a bicycle in the roundabout.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - How to Navigate a Roundabout",
    url: CH8,
  },
  {
    key: "drowsy-nap",
    quote:
      "Pull off into a safe area away from traffic and take a brief nap (15 to 45 minutes).",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Actions for the Drowsy Driver",
    url: CH8,
  },
  {
    key: "drowsy-no-tricks",
    quote:
      "Not depend on the radio, open window or other \"tricks\" to keep you awake.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Actions for the Drowsy Driver",
    url: CH8,
  },
  {
    key: "drowsy-rest-stops",
    quote: "Schedule regular stops for every 100 miles or two hours.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Prevention",
    url: CH8,
  },
  {
    key: "handheld-phone-penalty",
    quote:
      "In New York State, it is a traffic infraction to speak into or listen to a hand-held mobile telephone while driving. For a first offense you could pay a fine up to $200 and receive five license points.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Using a Cellular or Mobile Telephone",
    url: CH8,
  },
  {
    key: "texting-junior-suspension",
    quote:
      "Also, drivers with probationary and junior licenses who use a hand-held phone or text while driving will receive a 120-day suspension for a first conviction and a revocation of at least one year for subsequent convictions within six months of the time a license is restored after suspension.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Penalties for Texting, Electronic Device Use",
    url: CH8,
  },
  {
    key: "annual-inspection",
    quote:
      "No person shall operate or park a vehicle on public highways unless it has been inspected at least once a year",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Vehicle Condition",
    url: CH8,
  },
  {
    key: "tire-tread-depth",
    quote:
      "The law requires that your tires have at least 2/32nds of an inch (.16 cm) of tread.",
    source: MANUAL,
    section: "Chapter 8: Defensive Driving - Vehicle Condition",
    url: CH8,
  },

  // ------------------------------ Chapter 9: alcohol and other drugs
  {
    key: "bac-thresholds",
    quote:
      "A BAC of more than .05 percent is legal evidence that you are impaired, a BAC of .08 percent or higher is evidence of intoxication, and a BAC of .18 percent or more is evidence of aggravated driving while intoxicated.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Alcohol, Other Drugs and the Law",
    url: CH9,
  },
  {
    key: "zero-tolerance",
    quote:
      "Under the state's \"zero tolerance\" law, it is a violation for a person under 21 to drive with any BAC that can be measured (.02 to .07). After a finding of violation is determined at a DMV hearing, the driver license will be suspended for six months.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Zero Tolerance for Drivers Under Age 21",
    url: CH9,
  },
  {
    key: "zero-tolerance-second",
    quote:
      "For a second Zero Tolerance violation, the driver license will be revoked for at least one year or until the driver reaches 21, whichever is longer.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Zero Tolerance for Drivers Under Age 21",
    url: CH9,
  },
  {
    key: "implied-consent",
    quote:
      "Under New York's \"Implied Consent\" law, when you drive a car in this state you are considered to have already given your consent to take this type of test.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Chemical Tests",
    url: CH9,
  },
  {
    key: "refusal-revocation",
    quote:
      "If a DMV hearing later confirms you refused the test, your driver license will be revoked even if you are found not guilty of the alcohol or other drug-related violation.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Chemical Tests",
    url: CH9,
  },
  {
    key: "conviction-without-test",
    quote:
      "However, the testimony of a police officer about the way you drive, and your appearance and behavior while interacting with the officer can provide enough evidence to convict you, even without a chemical test.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Alcohol, Other Drugs and the Law",
    url: CH9,
  },
  {
    key: "bac-not-drink-type",
    quote:
      "Your BAC does not depend on the type of beverage you drink, how fit you are or how you can \"hold your liquor.\"",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Your BAC",
    url: CH9,
  },
  {
    key: "standard-drink-equivalence",
    quote:
      "These drinks contain about the same amount of alcohol - 1 1/2 ounces of liquor, 5 ounces of wine, 12 ounces of beer and 12 ounces of wine cooler.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Your BAC",
    url: CH9,
  },
  {
    key: "one-hour-per-drink",
    quote:
      "For a 150-pound male, each one of these drinks contains enough alcohol to increase his BAC by about .02 percent. On average, it takes the body approximately one hour to remove that much alcohol.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Your BAC",
    url: CH9,
  },
  {
    key: "only-time-lowers-bac",
    quote:
      "The only method to effectively reduce your BAC is to not drink over a period of time. Coffee, exercise and cold showers cannot reduce your BAC and the effects of alcohol.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Your BAC",
    url: CH9,
  },
  {
    key: "eating-slows-absorption",
    quote:
      "Eating before or while you drink helps slow the absorption of alcohol somewhat, but it can not prevent intoxication or impairment if you have too much to drink.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Your BAC",
    url: CH9,
  },
  {
    key: "alcohol-night-vision",
    quote:
      "Because your vision is normally restricted at night, it is especially dangerous to drink and drive after dark. Alcohol also reduces your ability to recover from the glare of headlights.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - What Alcohol Does",
    url: CH9,
  },
  {
    key: "open-container",
    quote:
      "It is a traffic infraction for a driver or passenger in a motor vehicle on a public highway, street or road to drink a beverage containing alcohol or to possess an open container containing an alcoholic beverage.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Open Container Law",
    url: CH9,
  },
  {
    key: "leandras-law",
    quote:
      "Drivers who commit these alcohol-related offenses with a child under 16 years old in the vehicle may be charged with a class E felony, punishable by up to four years in prison.",
    source: MANUAL,
    section:
      "Chapter 9: Alcohol and Other Drugs - The Ignition Interlock Program and Leandra's Law",
    url: CH9,
  },
  {
    key: "interlock-12-months",
    quote:
      "install and maintain an ignition interlock on any vehicle owned or operated by such driver for at least 12 months",
    source: MANUAL,
    section:
      "Chapter 9: Alcohol and Other Drugs - The Ignition Interlock Program and Leandra's Law",
    url: CH9,
  },
  {
    key: "drug-combination-danger",
    quote:
      "Never drink alcohol while you are taking other drugs. It could be dangerous, often enhancing the effects of the alcohol and the other drug.",
    source: MANUAL,
    section: "Chapter 9: Alcohol and Other Drugs - Other Drugs",
    url: CH9,
  },
  {
    key: "dwi-revocation",
    quote:
      "Driving while intoxicated (DWI), with .08 of one percent blood alcohol content (.08 BAC): minimum six-month revocation",
    source: MANUAL,
    section: "Chapter 2: How to Keep Your License - Mandatory Suspension or Revocation",
    url: CH2,
  },
  {
    key: "dwai-suspension",
    quote: "Driving while ability impaired by alcohol (DWAI): 90-day suspension",
    source: MANUAL,
    section: "Chapter 2: How to Keep Your License - Mandatory Suspension or Revocation",
    url: CH2,
  },
  {
    key: "agg-dwi-revocation",
    quote:
      "Aggravated driving while intoxicated (Agg-DWI), with .18 of one percent blood alcohol content (.18 BAC): minimum one-year revocation",
    source: MANUAL,
    section: "Chapter 2: How to Keep Your License - Mandatory Suspension or Revocation",
    url: CH2,
  },

  // --------------------- Chapter 10: railroads, expressways, weather
  {
    key: "railroad-15-feet",
    quote:
      "Flashing red lights, lowered crossing gates and/or a bell at a railroad crossing indicate that you must stop, at least 15 feet (5 m) from the tracks.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Railroad Crossing Signals",
    url: CH10,
  },
  {
    key: "railroad-gates",
    quote:
      "Do not go across the tracks until the lights and bell have stopped and the crossing gates are completely up. Do not drive around or under a gate that is moving up or down.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Railroad Crossing Signals",
    url: CH10,
  },
  {
    key: "railroad-clear-other-side",
    quote:
      "Do not, under any circumstances, attempt to cross any railroad tracks unless you are certain your entire vehicle will clear all of the tracks at the crossing.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Railroad Crossing Signals",
    url: CH10,
  },
  {
    key: "railroad-buses-must-stop",
    quote:
      "School buses with or without passengers, other buses with passengers on board and vehicles with explosives or flammable cargo must stop at all railroad crossings.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Railroad Crossing Signals",
    url: CH10,
  },
  {
    key: "railroad-crossbuck",
    quote:
      "Yield when you see a crossbuck sign, which is a sign shaped like an \"X\" with \"RAILROAD CROSSING\" printed on it.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Railroad Crossing Signals",
    url: CH10,
  },
  {
    key: "railroad-stall-run-toward-train",
    quote:
      "Run toward the general direction the train is coming from. If a train is approaching, run toward the train but away from the tracks at a 45-degree angle.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Stalling on Railroad Tracks",
    url: CH10,
  },
  {
    key: "expressway-definition",
    quote:
      "\"Expressway\" means any divided highway where traffic moves in one direction on two or more lanes.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Expressway Driving",
    url: CH10,
  },
  {
    key: "expressway-speed",
    quote:
      "The speed limit is normally 55 mph (88 km/h), but can be posted at 65 mph (105 km/h) in some rural areas.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Expressway Driving",
    url: CH10,
  },
  {
    key: "expressway-missed-exit",
    quote:
      "If you enter an expressway going a different direction than you intended, or at the wrong exit, stay on the expressway until the next exit.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Expressway Driving",
    url: CH10,
  },
  {
    key: "expressway-ramp-accelerate",
    quote:
      "Unless there is a STOP or YIELD sign or traffic light on the entrance ramp, use the ramp to accelerate to expressway speed and blend with traffic.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Expressway Driving",
    url: CH10,
  },
  {
    key: "expressway-short-ramp",
    quote:
      "If the entrance lane is too short to allow acceleration to expressway speed, the safest method to enter is to stop and wait for a large space in traffic.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Expressway Driving",
    url: CH10,
  },
  {
    key: "expressway-exit-signal",
    quote:
      "Make sure to signal your exit at least 100 feet (30 m) before you reach the exit ramp.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Expressway Driving",
    url: CH10,
  },
  {
    key: "headlight-range-350",
    quote:
      "Your headlights cover about 350 feet ahead. It is important that you drive at a speed that allows you to stop safely within that distance.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Night Driving",
    url: CH10,
  },
  {
    key: "headlight-law",
    quote:
      "The law requires you to use your headlights from one-half hour after the sun sets to one-half hour before the sun rises, when visibility is less than 1,000 feet (300 m) and when you use your windshield wipers to clear rain, snow or sleet.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Night Driving",
    url: CH10,
  },
  {
    key: "low-beam-500-200",
    quote:
      "Your headlights must be on low beam when you are within 500 feet (150 m) of an oncoming vehicle or within 200 feet (60 m) of a vehicle ahead of you, even if the vehicle ahead is in a different lane.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Night Driving",
    url: CH10,
  },
  {
    key: "glare-look-right",
    quote:
      "To help avoid the glare of approaching high beams, move your eyes to the right. Use the road edge as a guide until the approaching vehicle passes by.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Night Driving",
    url: CH10,
  },
  {
    key: "daytime-running-lights",
    quote: "\"Daytime running lights\" do not qualify as headlights.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Driving in Rain, Fog, or Snow",
    url: CH10,
  },
  {
    key: "fog-low-beam",
    quote:
      "Headlights on high beams reflect rain, fog and snow as it falls. This makes it even harder for you to see. For better visibility during these weather conditions, keep your headlights on low beam.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Driving in Rain, Fog, or Snow",
    url: CH10,
  },
  {
    key: "hydroplaning",
    quote:
      "In heavy rain, your tires can begin to ride on the water that is on top of the road pavement. This is called \"hydroplaning\" and can cause complete loss of traction and control of steering.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Driving in Rain, Fog, or Snow",
    url: CH10,
  },
  {
    key: "studded-tires-dates",
    quote:
      "Tires with metal studs can be used in New York State only from October 16 through April 30.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - How to Drive in Winter",
    url: CH10,
  },
  {
    key: "rear-wheel-skid",
    quote:
      "Turn the steering wheel in the direction the vehicle is trying to go. If your rear wheels slide left, steer left. If they slide right, steer right.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - How to Drive in Winter",
    url: CH10,
  },
  {
    key: "abs-braking",
    quote:
      "If your vehicle has anti-lock brakes (ABS), keep your foot with even pressure on the brake pedal. If your vehicle does not have ABS, pump the pedal carefully.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - How to Drive in Winter",
    url: CH10,
  },
  {
    key: "bridges-freeze-first",
    quote:
      "When sleet, freezing rain or snow begin to fall, remember that bridges, ramps and overpasses will freeze first.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - How to Drive in Winter",
    url: CH10,
  },
  {
    key: "deer-months",
    quote:
      "Two-thirds of all deer-vehicle collisions occur during the months of October, November and December.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - How to Avoid Collisions with Deer",
    url: CH10,
  },
  {
    key: "deer-travel-in-groups",
    quote: "Deer travel in groups - if you see one, expect more.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - How to Avoid Collisions with Deer",
    url: CH10,
  },
  {
    key: "tire-blowout",
    quote:
      "If a tire blows out, hold the steering wheel tightly and slowly take your foot off the gas pedal.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Driving Emergencies",
    url: CH10,
  },
  {
    key: "brake-failure",
    quote:
      "If your brake pedal suddenly goes to the floor, try pumping it to increase pressure.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Driving Emergencies",
    url: CH10,
  },
  {
    key: "stuck-gas-pedal",
    quote:
      "If not, shift into neutral and use the brake to slow your vehicle and get off the road. Do not turn off the ignition as you could lose your steering control or lock your steering wheel.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Driving Emergencies",
    url: CH10,
  },
  {
    key: "off-the-pavement",
    quote:
      "If your wheels move off the pavement, do not suddenly steer or swerve back onto the pavement. Ease your foot off the gas pedal and brake gently.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Driving Emergencies",
    url: CH10,
  },
  {
    key: "head-on-approach",
    quote:
      "Decrease speed, pull over to the right and sound your horn to warn the other driver. Do not turn into the left lane.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Driving Emergencies",
    url: CH10,
  },
  {
    key: "going-into-water",
    quote:
      "Release your seat belt and escape through a window. An open door would cause water to rush in and the car could turn over on top of you.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Driving Emergencies",
    url: CH10,
  },
  {
    key: "steering-failure",
    quote:
      "If your vehicle suddenly will not respond when you steer, slowly take your foot off the gas pedal, turn on your emergency lights and keep your foot off the brake pedal while it is safe to do so.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Driving Emergencies",
    url: CH10,
  },
  {
    key: "vehicle-fire",
    quote:
      "If you see smoke come from under the hood, pull off the road and park your vehicle. Turn off the ignition. Get away from the car and call the fire department.",
    source: MANUAL,
    section: "Chapter 10: Special Driving Conditions - Driving Emergencies",
    url: CH10,
  },

  // ---------------------------------- Chapter 11: sharing the road
  {
    key: "blind-pedestrian-right-of-way",
    quote:
      "A special right-of-way law allows blind pedestrians to go across the road with a guide dog or a white or metal cane. You must always give them the right-of-way when they are trying to cross at a marked or unmarked crosswalk, even if the traffic signals or other right-of-way rules are not in their favor.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Pedestrians",
    url: CH11,
  },
  {
    key: "pedestrian-face-traffic",
    quote:
      "Pedestrians are supposed to walk on the side of the road and face the traffic in the lane nearest them.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Pedestrians",
    url: CH11,
  },
  {
    key: "never-pass-stopped-vehicle",
    quote:
      "Never pass vehicles stopped at a crosswalk. There may be people crossing where you cannot see.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Tips for Drivers",
    url: CH11,
  },
  {
    key: "nyc-left-turn-pedestrian",
    quote:
      "More than 35% of the NYC pedestrian injury crashes occur when a driver is attempting to make a left turn.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Tips for Drivers",
    url: CH11,
  },
  {
    key: "back-up-get-out-and-check",
    quote:
      "Before you back into a driveway, or out of it, get out of the vehicle and check behind your vehicle.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Pedestrians",
    url: CH11,
  },
  {
    key: "bicycle-position",
    quote:
      "Where there is none, they must remain near the right curb or edge of the road or on a right shoulder of the road, to prevent interference with other traffic.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Bicyclists",
    url: CH11,
  },
  {
    key: "bicycle-helmet-1-to-13",
    quote: "Bicyclists and their passengers ages 1 - 13 must wear an approved helmet.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Bicyclists",
    url: CH11,
  },
  {
    key: "bicycle-two-abreast",
    quote: "Never travel with more than two side-by-side in a single lane.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Bicyclists",
    url: CH11,
  },
  {
    key: "bicycle-lights",
    quote:
      "A bicycle used at night must have a headlight visible from at least 500 feet (150 m) ahead and a red taillight visible from at least 300 feet (90 m) behind.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Bicyclists",
    url: CH11,
  },
  {
    key: "bicycle-brakes-and-bell",
    quote:
      "A bicycle driven on public highways must have adequate brakes and a horn or bell that can be heard at least 100 feet (30 m) away.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Bicyclists",
    url: CH11,
  },
  {
    key: "bicycle-infant-passenger",
    quote:
      "Never carry an infant under a year old as a passenger. It is against the law. Child passengers ages 1 - 4 years old must ride in attached bicycle safety seats.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Bicyclists",
    url: CH11,
  },
  {
    key: "right-on-red-check-for-cyclist",
    quote:
      "Drivers turning right on red should look to the right and behind to avoid hitting a bicyclist approaching from the right rear. Stop completely and look left-right-left and behind before turning right on red.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Tips for Drivers",
    url: CH11,
  },
  {
    key: "motorcycle-two-abreast",
    quote:
      "In addition to using the full lane, two motorcyclists are allowed to ride side-by-side in a single lane, but a motorcyclist cannot pass or share a lane with another motor vehicle that is not a motorcycle.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Motorcyclists",
    url: CH11,
  },
  {
    key: "motorcycle-signal-not-self-cancelling",
    quote:
      "Additionally, on most motorcycles, the directional signal does not turn off automatically after a turn, so their turn signal may be on inadvertently when the motorcyclist has no intention of turning.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Motorcyclists",
    url: CH11,
  },
  {
    key: "motorcycle-railroad-crossing",
    quote:
      "When approaching a railroad crossing, a motorcyclist may decrease speed and rise off the seat to cushion the rough crossing and change direction to go across the tracks at a right angle.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Motorcyclists",
    url: CH11,
  },
  {
    key: "moped-class-b-and-c",
    quote:
      "Class B and C mopeds can be driven only in the right lane of traffic, as far to the right as possible. Class A mopeds are allowed to drive in any lane and any section of a lane.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Moped Operators",
    url: CH11,
  },
  {
    key: "moped-not-on-expressway",
    quote:
      "Mopeds are not permitted on expressways or other controlled access highways unless posted signs permit it.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Moped Operators",
    url: CH11,
  },
  {
    key: "truck-front-blind-spot",
    quote:
      "Tractors with long hoods can have a blind spot of 20 feet in front of the vehicle. You should avoid these \"no zones.\"",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Blind Spots",
    url: CH11,
  },
  {
    key: "truck-crash-responsibility",
    quote:
      "In more than 60 percent of all fatal crashes involving cars and big trucks, the car driver, not the truck driver, contributes to the cause of the traffic crash.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Large Vehicles",
    url: CH11,
  },
  {
    key: "truck-wide-right-turn",
    quote:
      "Because trucks make wide right turns, they move to the left before they turn right.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Ability to Maneuver",
    url: CH11,
  },
  {
    key: "truck-pass-see-whole-front",
    quote:
      "Make sure you can see the whole front of the vehicle before you return to your lane after you pass.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - When You Pass",
    url: CH11,
  },
  {
    key: "truck-stop-behind-uphill",
    quote:
      "Always leave space when you stop in back of a truck or bus at a traffic light or stop sign, especially when you face up a hill.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - When You Stop behind a Truck",
    url: CH11,
  },
  {
    key: "slow-moving-vehicle-emblem",
    quote:
      "The \"slow-moving vehicle\" symbol, a reflective orange triangle, must be displayed on the back of vehicles drawn by animals, most farm vehicles, and construction equipment.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Slow Moving Vehicles",
    url: CH11,
  },
  {
    key: "atv-snowmobile-crossing",
    quote:
      "Before they cross, they must come to a stop and yield to traffic. They must go across at a 90-degree angle to the road surface.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - All-Terrain Vehicles and Snowmobiles",
    url: CH11,
  },
  {
    key: "horse-no-horn",
    quote: "It is illegal to sound your horn when you approach or pass a horse.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Horse Riders",
    url: CH11,
  },
  {
    key: "horse-single-file",
    quote:
      "They also must ride single file near the right curb or road edge, or on a right shoulder, lane or path that can be used.",
    source: MANUAL,
    section: "Chapter 11: Sharing the Road - Horse Riders",
    url: CH11,
  },

  // -------------------------------------------- Chapter 12: crashes
  {
    key: "crash-must-stop",
    quote: "If you are in a crash, you must stop. The level of damage does not matter.",
    source: MANUAL,
    section: "Chapter 12: If You Are in a Traffic Crash - At the Scene",
    url: CH12,
  },
  {
    key: "crash-leaving-scene",
    quote:
      "It is a traffic violation to leave the scene of an incident, like a traffic crash that involves property damage. It is a criminal violation to leave the scene of an incident that involves a fatality or personal injury.",
    source: MANUAL,
    section: "Chapter 12: If You Are in a Traffic Crash - At the Scene",
    url: CH12,
  },
  {
    key: "crash-exchange-information",
    quote:
      "Give your name, address, driver license number, vehicle registration, and insurance information.",
    source: MANUAL,
    section: "Chapter 12: If You Are in a Traffic Crash - At the Scene",
    url: CH12,
  },
  {
    key: "crash-parked-vehicle",
    quote:
      "If a parked vehicle or property different from a vehicle is damaged or if a domestic animal is injured, you must try to find the owner or notify the police.",
    source: MANUAL,
    section: "Chapter 12: If You Are in a Traffic Crash - At the Scene",
    url: CH12,
  },
  {
    key: "crash-report-1000-dollars",
    quote:
      "You must also report any traffic incident or crash that involves $1000 or more in damage to the property of any one person.",
    source: MANUAL,
    section: "Chapter 12: If You Are in a Traffic Crash - Reports to DMV",
    url: CH12,
  },
  {
    key: "crash-report-10-days",
    quote:
      "You must file a report with DMV within 10 days of the event. The failure to report a crash is a criminal offense (misdemeanor) and can mean the suspension or revocation of your driver license and/or registrations and those of the vehicle owner.",
    source: MANUAL,
    section: "Chapter 12: If You Are in a Traffic Crash - Reports to DMV",
    url: CH12,
  },
  {
    key: "crash-do-not-move-injured",
    quote:
      "Do not move an injured person unless it becomes necessary because of fire or another life threatening danger.",
    source: MANUAL,
    section: "Chapter 12: If You Are in a Traffic Crash - Emergency First-Aid",
    url: CH12,
  },
  {
    key: "crash-downed-wires",
    quote:
      "If there are wires down, do not go near them. If wires touch the vehicle or lay near it, warn the occupants to remain inside until help arrives.",
    source: MANUAL,
    section: "Chapter 12: If You Are in a Traffic Crash - Emergency First-Aid",
    url: CH12,
  },

  // ----------------------------- Chapters 1-3: licensing, documents
  {
    key: "written-test-pass-mark",
    quote:
      "To pass the written test, you must correctly answer at least 14 of the 20 questions asked, but you must correctly answer two of the four questions about road signs.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - Vision and Knowledge Tests",
    url: CH1,
  },
  {
    key: "vision-test-2040",
    quote:
      "To pass the vision test, you must have 20/40 vision in at least one eye with or without corrective lenses.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - Vision and Knowledge Tests",
    url: CH1,
  },
  {
    key: "permit-supervising-driver",
    quote:
      "When you practice, you must be supervised by a licensed driver who is at least 21 years old, has a license valid for the type of vehicle you are driving, and is seated in the front seat with you when you are driving.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - The Learner Permit",
    url: CH1,
  },
  {
    key: "practice-50-hours",
    quote:
      "Before you take the test, it is important that you have had at least 50 hours of practice, with at least 15 hours after sunset.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - Preparing for the Road Test",
    url: CH1,
  },
  {
    key: "permit-six-months",
    quote:
      "Your permit must be held, in valid status for a minimum of six months in order to take the road test.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - For Junior Drivers with Permits",
    url: CH1,
  },
  {
    key: "junior-passenger-limit",
    quote:
      "You cannot drive with more than one passenger under the age of 21 unless they are members of your immediate family.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - Driving with a Junior License",
    url: CH1,
  },
  {
    key: "junior-permit-front-seat",
    quote:
      "If you hold a junior permit, the only passenger allowed in the front seat is your supervising driver.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - Driving with a Junior Learner Permit",
    url: CH1,
  },
  {
    key: "permit-nyc-parks-bridges",
    quote:
      "On any street within a park in New York City or any bridge or tunnel under the jurisdiction of the Triborough Bridge and Tunnel Authority.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - General Rules for All Drivers with Learner Permits",
    url: CH1,
  },
  {
    key: "permit-westchester-parkways",
    quote:
      "On the Cross County, Hutchinson River, Saw Mill River, or Taconic State parkways in Westchester County.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - General Rules for All Drivers with Learner Permits",
    url: CH1,
  },
  {
    key: "new-resident-30-days",
    quote:
      "Drivers who have moved here must turn in their out-of-state driver license and get a New York license within 30 days of becoming a permanent resident.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses",
    url: CH1,
  },
  {
    key: "under-16-cannot-drive",
    quote:
      "However, even if you are licensed somewhere else, people under age 16 cannot drive in New York State.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses",
    url: CH1,
  },
  {
    key: "senior-license-at-17",
    quote:
      "If you are 17, you are eligible for a senior driver license (Class D or M) if you have a junior driver license and have completed a state-approved high school or college driver education course.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - Driver Education",
    url: CH1,
  },
  {
    key: "pirp-four-points",
    quote:
      "If you are eligible for point reduction, as many as four (4) points can be reduced from your driving record.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - After the Road Test",
    url: CH1,
  },
  {
    key: "points-11-in-24-months",
    quote:
      "If you get 11 or more points within 24 months, you will be notified by mail that your driver license will be suspended.",
    source: MANUAL,
    section: "Chapter 2: How to Keep Your License - The Point System",
    url: CH2,
  },
  {
    key: "points-date-of-violation",
    quote:
      "The point values charged against your record are from the date you commit the violation, not the date you are convicted.",
    source: MANUAL,
    section: "Chapter 2: How to Keep Your License - The Point System",
    url: CH2,
  },
  {
    key: "junior-60-day-suspension",
    quote:
      "For example, your permit, license or privileges will be suspended for 60 days if you are convicted of a serious traffic violation (three points or more) or two other violations.",
    source: MANUAL,
    section:
      "Chapter 2: How to Keep Your License - Special Rules for Drivers with Junior Permits and Licenses",
    url: CH2,
  },
  {
    key: "junior-texting-120-days",
    quote:
      "In addition, your junior permit, license or privileges will be suspended for 120 days when you are convicted of a texting or cell phone violation.",
    source: MANUAL,
    section:
      "Chapter 2: How to Keep Your License - Special Rules for Drivers with Junior Permits and Licenses",
    url: CH2,
  },
  {
    key: "probation-six-months",
    quote:
      "If you are 18 or older when you pass your road test for a driver license, or obtain a license following revocation, you will be on probation for six months.",
    source: MANUAL,
    section: "Chapter 2: How to Keep Your License - Probation Period for All Other Newly Licensed Drivers",
    url: CH2,
  },
  {
    key: "three-speeding-18-months",
    quote:
      "Three speeding and/or misdemeanor traffic violations within 18 months (based on date of violation, not date of conviction).",
    source: MANUAL,
    section: "Chapter 2: How to Keep Your License - Speeding and Other Violations",
    url: CH2,
  },
  {
    key: "no-insurance-revocation",
    quote:
      "Your driver license will be revoked for at least one year if you operate or allow another person to operate your uninsured vehicle, or if the DMV receives evidence that you were involved in a traffic crash without being insured.",
    source: MANUAL,
    section: "Chapter 2: How to Keep Your License - No Insurance",
    url: CH2,
  },
  {
    key: "driver-responsibility-assessment",
    quote:
      "If you are convicted of one or more traffic violations resulting in six points in any 18-month period, you will be required to pay $100 each year for the next three years.",
    source: MANUAL,
    section: "Chapter 2: How to Keep Your License - Driver Responsibility Assessments",
    url: CH2,
  },
  {
    key: "insurance-minimums",
    quote:
      "Minimum liability coverage is required of $50,000 against the death of one person and $100,000 against the death of two or more persons, $25,000 against injury to one person and $50,000 against injury to two or more persons and $10,000 against property damage.",
    source: MANUAL,
    section: "Chapter 3: Owning a Vehicle - Insurance",
    url: CH3,
  },
  {
    key: "insurance-while-registered",
    quote:
      "Your vehicle must be covered by liability insurance as long as it is registered, even if you do not drive it.",
    source: MANUAL,
    section: "Chapter 3: Owning a Vehicle - Insurance",
    url: CH3,
  },
  {
    key: "insurance-90-days",
    quote:
      "If your vehicle is not insured for 90 days, unless you have turned in your vehicle plates, your driver license will also be suspended.",
    source: MANUAL,
    section: "Chapter 3: Owning a Vehicle - Insurance",
    url: CH3,
  },
  {
    key: "insurance-must-be-new-york",
    quote:
      "The New York State DMV does not accept out-of-state insurance.",
    source: INSURANCE,
    section: "Insurance Liability Coverage in New York State",
    url: INSURANCE_URL,
  },
  {
    key: "register-at-16",
    quote: "You must be at least 16 to register a vehicle. You can title a vehicle at any age.",
    source: MANUAL,
    section: "Chapter 3: Owning a Vehicle - Registration and Title",
    url: CH3,
  },
  {
    key: "inspection-10-days-private-sale",
    quote:
      "If you purchase a vehicle from someone who is not a New York State dealer, you must have the vehicle inspected within 10 days after you register it.",
    source: MANUAL,
    section: "Chapter 3: Owning a Vehicle - Inspection",
    url: CH3,
  },

  // --------------------------- Graduated licensing (regional rules)
  {
    key: "gdl-three-regions",
    quote:
      "Upstate New York (which is defined as any county north of the NYC border) New York City (which is defined by the five Boroughs) Long Island (which includes Nassau and Suffolk County)",
    source: GDL,
    section: "The Graduated License Law - About",
    url: GDL_URL,
  },
  {
    key: "gdl-nyc-junior-licence-banned",
    quote:
      "If you have a Class DJ or MJ junior license, you cannot drive within the five boroughs of New York City under any circumstances",
    source: GDL,
    section: "The Graduated License Law - New York City GDL Restrictions",
    url: GDL_URL,
  },
  {
    key: "gdl-nyc-17-exception",
    quote:
      "This prohibition does not apply to 17-year-old drivers who have completed a State Education Department-approved Driver and Traffic Safety Education Course (and submitted to DMV their Student Certificate of Completion (MV-285)) and received their Class D, adult license.",
    source: GDL,
    section: "The Graduated License Law - New York City GDL Restrictions",
    url: GDL_URL,
  },
  {
    key: "gdl-upstate-day",
    quote:
      "you may drive in upstate New York without a supervising driver between the hours of 5 AM and 9 PM",
    source: GDL,
    section: "The Graduated License Law - Upstate New York GDL Restrictions",
    url: GDL_URL,
  },
  {
    key: "gdl-upstate-night",
    quote: "You may drive alone only directly between your home and employment or a school course.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - Regional Restrictions for a Junior License",
    url: CH1,
  },
  {
    key: "gdl-long-island-day",
    quote:
      "You may drive alone only directly between your home and employment, a work-study program, a course at a college, university, or registered evening high school, a driver education course, or while engaged in farm employment.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - Regional Restrictions for a Junior License",
    url: CH1,
  },
  {
    key: "gdl-long-island-night",
    quote:
      "You may drive alone only directly between your home and a work-study program, a course at a college, university, or registered evening high school, a driver education course, or while engaged in farm employment.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - Regional Restrictions for a Junior License",
    url: CH1,
  },
  {
    key: "gdl-employment-certificate",
    quote:
      "You can drive by yourself between home and your employment, which can include farm work, if you carry the correct proof of employment.",
    source: MANUAL,
    section: "Chapter 1: Driver Licenses - Driving Alone with a Junior License",
    url: CH1,
  },
  {
    key: "gdl-serious-violation-definition",
    quote:
      "A \"serious traffic violation\" is normally a violation that carries three or more driver violation points",
    source: GDL,
    section: "The Graduated License Law - Penalties",
    url: GDL_URL,
  },
  {
    key: "permit-supervisor-21",
    quote:
      "No matter what age you are, if you hold a learner permit, you may not drive unless accompanied by a supervising driver age 21 or older who has a valid license to operate the vehicle you are driving.",
    source: PERMITS,
    section: "Learner Permit Restrictions - Restrictions for All Permit Holders",
    url: PERMITS_URL,
  },
  {
    key: "permit-nyc-dual-controls",
    quote: "the vehicle being driven has dual controls (dual brakes)",
    source: PERMITS,
    section: "Learner Permit Restrictions - New York City Permit Restrictions",
    url: PERMITS_URL,
  },
  {
    key: "permit-nyc-night-ban",
    quote:
      "If you have a junior learner permit, you cannot drive in any of the five boroughs in New York City between the hours of 9 PM and 5 AM under any circumstances.",
    source: PERMITS,
    section: "Learner Permit Restrictions - New York City Permit Restrictions",
    url: PERMITS_URL,
  },
  {
    key: "permit-long-island-night-ban",
    quote:
      "You cannot drive in Nassau and Suffolk Counties under any circumstances between the hours of 9 PM and 5 AM.",
    source: PERMITS,
    section: "Learner Permit Restrictions - Long Island (Nassau & Suffolk) Permit Restrictions",
    url: PERMITS_URL,
  },
  {
    key: "permit-long-island-written-designee",
    quote:
      "a person authorized to be your supervising driver by your parent, guardian, or person in a position of \"in loco parentis\" in writing",
    source: PERMITS,
    section: "Learner Permit Restrictions - Long Island (Nassau & Suffolk) Permit Restrictions",
    url: PERMITS_URL,
  },
  {
    key: "permit-motorcycle-quarter-mile",
    quote: "remain within one-quarter mile of you, keeping you in sight at all times",
    source: PERMITS,
    section: "Learner Permit Restrictions - Motorcycle Permits",
    url: PERMITS_URL,
  },
];
