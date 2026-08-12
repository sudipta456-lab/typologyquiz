import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Texas Driver Handbook (DL-7), revised
// January 2026, published by the Texas Department of Public Safety.
//
// Every `quote` below was read out of the official PDF (or, where the handbook
// is silent on the operative number, out of the Texas Transportation Code on
// the Legislature's own site). Nothing here is paraphrased. Where the source
// states a rule as a stem sentence followed by a bulleted or numbered list, the
// list items are run together with semicolons - no words are changed, dropped
// or reordered. Curly quotes and dashes are folded to ASCII.
//
// These are quoted, not summarised, because the exam is written from this
// wording. Each one is kept to the operative rule and shown with its source,
// section and a link back to DPS so the learner reads the real thing.

const DL7 = "Texas Driver Handbook DL-7 (January 2026)";
const DL7_URL = "https://www.dps.texas.gov/internetforms/forms/dl-7.pdf";
const CODE = "Texas Transportation Code, Chapter 545 (Texas Legislature Online)";
const CODE_351 = "https://statutes.capitol.texas.gov/Docs/TN/htm/TN.545.htm#545.351";
const CODE_352 = "https://statutes.capitol.texas.gov/Docs/TN/htm/TN.545.htm#545.352";

export const texasExcerpts: HandbookExcerpt[] = [
  // ---------------------------------------------------------------- signs
  {
    key: "sign-shape-octagon-stop",
    quote: "Octagon: Exclusively for stop signs",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Table 17: Signs by Shape",
    url: DL7_URL,
  },
  {
    key: "sign-shape-yield-triangle",
    quote: "Equilateral Triangle: Exclusively for yield signs",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Table 17: Signs by Shape",
    url: DL7_URL,
  },
  {
    key: "sign-shape-diamond",
    quote:
      "Diamond: Exclusively to warn of existing or possible hazards on roads or adjacent areas.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Table 17: Signs by Shape",
    url: DL7_URL,
  },
  {
    key: "sign-shape-pentagon-school",
    quote: "Pentagon: School advance and school crossing signs.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Table 17: Signs by Shape",
    url: DL7_URL,
  },
  {
    key: "sign-shape-round-railroad",
    quote: "Round: Railroad advance warning signs.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Table 17: Signs by Shape",
    url: DL7_URL,
  },
  {
    key: "sign-shape-pennant-no-passing",
    quote: "Pennant: Advance warning of no pass zones",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Table 17: Signs by Shape",
    url: DL7_URL,
  },
  {
    key: "regulatory-signs-must-obey",
    quote:
      "Regulatory traffic signs instruct drivers what they should, or should not do, in certain circumstances. Drivers must obey all regulatory signs in the same manner as traffic laws.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "warning-signs-purpose",
    quote:
      "Warning signs alert drivers to conditions that are immediately ahead and tell them what to look for.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Warning Signs",
    url: DL7_URL,
  },
  {
    key: "yield-sign-meaning",
    quote:
      "You should slow down or stop if necessary so you can yield the right-of-way to vehicles, pedestrians, or bicycles on the other road.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "keep-right-of-sign",
    quote: "Drive to the right of this sign. This sign is used in advance of islands and medians.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "added-lane-sign",
    quote:
      "You are approaching a point where two roads come together and an additional lane begins. You are not required to merge.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Table 18: Warning Signs",
    url: DL7_URL,
  },
  {
    key: "divided-highway-ends-sign",
    quote:
      "The divided highway you are traveling ends ahead. Be careful as you approach the point where two-way traffic begins again.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Table 18: Warning Signs",
    url: DL7_URL,
  },
  {
    key: "railroad-crossbuck",
    quote:
      "Railroad crossbuck signs are posted at every railroad, highway, road, or street grade crossing and show the location of the train tracks. If more than one track is to be crossed, the sign will show the number of tracks.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Railroad Warning Signs",
    url: DL7_URL,
  },
  {
    key: "work-zone-orange-devices",
    quote: "Orange is the basic color for these devices.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Construction and Maintenance Devices",
    url: DL7_URL,
  },
  {
    key: "school-zone-speed-when-flashing",
    quote: "School Zone: The speed shown is in effect when the yellow light is flashing.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },

  // -------------------------------------------------------------- signals
  {
    key: "signal-steady-red",
    quote:
      "Stop before entering the crosswalk or intersection. You may turn right unless prohibited by law.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Traffic Signals",
    url: DL7_URL,
  },
  {
    key: "red-light-left-turn-one-way",
    quote: "You may also turn left if both streets are one way, unless prohibited by law.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Traffic Signals",
    url: DL7_URL,
  },
  {
    key: "signal-flashing-red",
    quote:
      "Stop completely before entering the crosswalk or intersection, then proceed when you can do so safely. Vehicles on the intersecting road may not have to stop.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - A Flashing Red Light",
    url: DL7_URL,
  },
  {
    key: "signal-steady-yellow",
    quote:
      "You must STOP before entering the nearest crosswalk at the intersection if you can do so safely. If a stop cannot be made safely, then you may proceed cautiously through the intersection before the light changes to red.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Steady Yellow Light (Caution)",
    url: DL7_URL,
  },
  {
    key: "signal-flashing-yellow",
    quote: "A flashing yellow light warns drivers to slow down and proceed with caution.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - A Flashing Yellow Light",
    url: DL7_URL,
  },
  {
    key: "signal-flashing-yellow-arrow",
    quote:
      "A flashing yellow arrow allows a driver to turn left, but the driver must yield the right-of-way to oncoming traffic.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - A Flashing Yellow Arrow For Left-Turns",
    url: DL7_URL,
  },
  {
    key: "signal-green-arrow-with-red",
    quote:
      "A green arrow displayed at the same time as a red light means the driver can proceed carefully in the direction of the arrow after yielding the right-of-way to other vehicles and pedestrians.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Traffic Signals",
    url: DL7_URL,
  },
  {
    key: "left-turn-on-green-yield",
    quote:
      "You can turn left on a green light. However, you must yield the right-of-way to all traffic that is approaching from the opposite direction before turning.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Left Turn on Green",
    url: DL7_URL,
  },
  {
    key: "lane-use-control-signals",
    quote:
      "If a red X appears above a lane, a driver should not drive in that lane. A steady yellow X means a driver should prepare to safely vacate the lane over which the signal is located because a lane control change is being made.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Table 20: Guide Signs",
    url: DL7_URL,
  },
  {
    key: "stop-sign-complete-stop",
    quote:
      "The stop sign means come to a complete stop, yield to pedestrians or other vehicles, and then proceed carefully. Stop before the crosswalk, intersection, or stop sign.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "four-way-stop-order",
    quote:
      "These signs are added to a stop sign advising that all approaching traffic to this intersection must stop before proceeding in the order you arrived. If two vehicles arrive at the same time, yield to the vehicle on your right.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },

  // --------------------------------------------------------- right-of-way
  {
    key: "yield-single-lane-to-multilane",
    quote:
      "If you are driving on a single or two lane road that intersects with a divided road or road with three (3) or more lanes, you must yield the right-of-way to vehicles traveling on the divided or three (3) or more lane road.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Single or Two-Lane Road Intersecting a Multi-Lane Road",
    url: DL7_URL,
  },
  {
    key: "yield-unpaved-to-paved",
    quote:
      "If you are driving on an unpaved road that intersects with a paved road, you must yield the right-of-way to vehicles traveling on the paved road.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Unpaved Road Intersecting a Paved Road",
    url: DL7_URL,
  },
  {
    key: "uncontrolled-intersection-yield-right",
    quote:
      "When approaching this type of intersection, yield the right-of-way to any vehicle that has entered or is approaching the intersection on your right.",
    source: DL7,
    section:
      "Chapter 4: Right-of-Way - Intersections Not Controlled by Signs, Signals, Multi-Lanes, or Pavement",
    url: DL7_URL,
  },
  {
    key: "turning-left-yield-oncoming",
    quote:
      "When turning left, always yield the right-of-way to any vehicle coming straight through from the other direction.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Turning Left",
    url: DL7_URL,
  },
  {
    key: "yield-from-private-drive",
    quote:
      "When entering or crossing a road, street, or highway from a private road, alley, building, or driveway, you must stop prior to the sidewalk and yield the right-of-way to all approaching vehicles and pedestrians.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Private Roads and Driveways",
    url: DL7_URL,
  },
  {
    key: "t-intersection-stop",
    quote:
      "When approaching an intersection of a through street traveling from a street that ends at the intersection, you must stop and yield the right-of-way to vehicles on the through street.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - T-Intersection",
    url: DL7_URL,
  },
  {
    key: "frontage-road-yield",
    quote:
      "The driver traveling on a frontage road of a controlled-access highway must yield the right-of-way to a vehicle: Entering or about to enter the frontage road from the highway; and Leaving or about to leave the frontage road to enter the highway.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Enter or Leave Controlled-Access Highway",
    url: DL7_URL,
  },
  {
    key: "lane-entry-right-yields-to-left",
    quote:
      "On a road divided into three or more lanes with traffic moving in the same direction, a vehicle entering a lane of traffic from the right must yield the right-of-way to a vehicle entering the same lane of traffic from the left.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Driving on Multiple-Lane Roads",
    url: DL7_URL,
  },
  {
    key: "railroad-stop-15-to-50-feet",
    quote:
      "When approaching a railroad grade crossing, stop between 15 and 50 feet from the nearest rail if: A clearly visible railroad signal warns of an approaching train",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Railroad Grade Crossings",
    url: DL7_URL,
  },
  {
    key: "yield-to-emergency-vehicles",
    quote:
      "If traffic allows, pull to the right edge of the road and stop. If you are unable to pull over to the right, slow down and leave a clear path for the emergency vehicle.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Yield Right-of-Way to Emergency Vehicles",
    url: DL7_URL,
  },
  {
    key: "follow-fire-truck-500-feet",
    quote:
      "You are not allowed to follow within 500 feet of a fire truck answering an alarm or an ambulance when the flashing red lights are on.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Yield Right-of-Way to Emergency Vehicles",
    url: DL7_URL,
  },
  {
    key: "school-bus-flashing-red-stop",
    quote:
      "If you approach a school bus from either direction and the bus is displaying alternately flashing red lights, you must stop.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Yield Right-of-Way to School Buses",
    url: DL7_URL,
  },
  {
    key: "school-bus-stop-exceptions",
    quote:
      "It is not necessary to stop when passing a school bus on a different road or when on a controlled-access highway where the bus is stopped in a loading zone and pedestrians aren't permitted to cross.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Yield Right-of-Way to School Buses",
    url: DL7_URL,
  },
  {
    key: "pedestrian-right-of-way",
    quote:
      "Drivers must give the right-of-way to pedestrians: At an uncontrolled intersection (there are not any traffic signs or signals for the pedestrian to enter the crosswalk)",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Yield the Right-of-Way to Pedestrians",
    url: DL7_URL,
  },
  {
    key: "pedestrian-already-in-crosswalk",
    quote:
      "If the light changes after the pedestrian has entered the crosswalk, still give the pedestrian the right-of-way.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Yield the Right-of-Way to Pedestrians",
    url: DL7_URL,
  },
  {
    key: "roundabout-yield-on-entry",
    quote:
      "To drive in a modern roundabout, follow these simple steps: slow down as you approach the intersection, yield to traffic already in the circle, enter the circle and follow the loop in a counter clockwise direction, and then make a right turn to exit the roundabout.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Driving in a Modern Roundabout",
    url: DL7_URL,
  },
  {
    key: "roundabout-emergency-vehicles",
    quote:
      "Also, pull over for emergency vehicles on the roundabout approaches and exits. However, do not stop for emergency vehicles in the roundabout circle.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Driving in a Modern Roundabout",
    url: DL7_URL,
  },
  {
    key: "entering-highway-yield",
    quote: "You must yield the right-of-way to vehicles already on the highway.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Entering the Highway",
    url: DL7_URL,
  },

  // ----------------------------------------------------- pavement markings
  {
    key: "solid-and-broken-yellow-lines",
    quote:
      "A solid yellow line on your side of the road marks a \"no-passing zone.\" Broken or dashed lines permit you to pass or change lanes, if safe.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Solid and Broken Lines",
    url: DL7_URL,
  },
  {
    key: "double-solid-white-lines",
    quote:
      "Crossing is prohibited where there is a pavement marking of double solid white lines.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Solid Lines",
    url: DL7_URL,
  },
  {
    key: "center-left-turn-lane",
    quote:
      "The only time a vehicle should enter the center lane is at a point where the vehicle will have time to slow down or stop in order to make a safe left turn maneuver.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Left Turn Lane Only",
    url: DL7_URL,
  },

  // ------------------------------------------ signaling, passing, turning
  {
    key: "signal-100-feet",
    quote:
      "Signal continuously for at least 100 feet before turning or stopping, and be sure to turn off your signal lights once your turn is complete.",
    source: DL7,
    section: "Chapter 6: Signaling, Passing, and Turning - How to Signal",
    url: DL7_URL,
  },
  {
    key: "no-driving-left-side",
    quote:
      "Never drive on the left side of the road when: Pavement markings or signs prohibit driving on the left (a \"No Passing Zone\" or solid lane lines); There are two or more traffic lanes in each direction; Within 100 feet of or crossing an intersection or railroad crossing; On a hill, curve, or any other place where vision is limited; Within 100 feet of a bridge, viaduct, or tunnel",
    source: DL7,
    section: "Chapter 6: Signaling, Passing, and Turning - Keep to the Right",
    url: DL7_URL,
  },
  {
    key: "passing-return-200-feet",
    quote:
      "Be sure you have enough time and space to overtake the car ahead and return to the right lane before an approaching car comes within 200 feet of you.",
    source: DL7,
    section: "Chapter 6: Signaling, Passing, and Turning - How to Pass on a Two-Lane Road",
    url: DL7_URL,
  },
  {
    key: "pass-on-paved-shoulder",
    quote:
      "You may pass on a paved shoulder when the vehicle you are passing is slowing or stopped on the main traveled portion of the highway, disabled, or preparing to make a left turn.",
    source: DL7,
    section: "Chapter 6: Signaling, Passing, and Turning - Passing on the Right",
    url: DL7_URL,
  },
  {
    key: "left-lane-for-passing-only",
    quote:
      "On roadways with more than one lane with vehicles traveling in the same direction, slower traffic should travel in a lane other than the farthest left lane. The farthest left lane is for passing only.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "left-turn-onto-one-way",
    quote:
      "If you are turning left onto a one-way street, enter the street in the lane in which you will interfere the least with other traffic.",
    source: DL7,
    section:
      "Chapter 6: Signaling, Passing, and Turning - Making a Left Turn From a Two-Way Onto a One-Way Street",
    url: DL7_URL,
  },
  {
    key: "right-turn-keep-right",
    quote: "Keep as close as possible to the right edge of the road.",
    source: DL7,
    section: "Chapter 6: Signaling, Passing, and Turning - How to Make a Right Turn",
    url: DL7_URL,
  },

  // -------------------------------------------------------------- parking
  {
    key: "no-parking-distances",
    quote:
      "Whether occupied or not, do not park or allow a vehicle to stand idling: In front of a public or private driveway; Within 15 feet of a fire hydrant; Within 20 feet of a crosswalk at an intersection; Within 30 feet upon the approach to any flashing signal, stop sign, yield sign, or other traffic control signal located at the side of a road; Within 20 feet of the driveway entrance to any fire station and on the side of a street opposite the entrance to any fire station within 75 feet of entrance",
    source: DL7,
    section: "Chapter 7: Parking, Stopping, or Standing - Do Not Park or Stand a Vehicle",
    url: DL7_URL,
  },
  {
    key: "no-park-50-feet-railroad",
    quote:
      "Do not park a vehicle, occupied or not, within 50 feet of the nearest rail of a railroad crossing.",
    source: DL7,
    section: "Chapter 7: Parking, Stopping, or Standing - Do Not Park a Vehicle",
    url: DL7_URL,
  },
  {
    key: "parallel-park-18-inches",
    quote: "Do not park more than 18 inches from the curb or edge of the road.",
    source: DL7,
    section: "Chapter 7: Parking, Stopping, or Standing - Parallel Parking",
    url: DL7_URL,
  },
  {
    key: "unattended-vehicle-wheels-to-curb",
    quote:
      "It is illegal for any driver to permit their car to stand idling unattended without turning off the engine, locking the ignition, removing the key from the ignition, and setting the brake; and when standing on any grade, without turning the front wheels to the curb or side of the road.",
    source: DL7,
    section: "Chapter 7: Parking, Stopping, or Standing - Unattended Motor Vehicle",
    url: DL7_URL,
  },
  {
    key: "coasting-in-neutral-illegal",
    quote: "It is illegal to coast on a downgrade with the gears or transmission in neutral.",
    source: DL7,
    section: "Chapter 7: Parking, Stopping, or Standing - Coasting",
    url: DL7_URL,
  },

  // ---------------------------------------------------------------- speed
  {
    key: "speed-prima-facie-urban-alley",
    quote:
      "30 miles per hour in an urban district on a street other than an alley and 15 miles per hour in an alley;",
    source: CODE,
    section: "Sec. 545.352, PRIMA FACIE SPEED LIMITS, subsection (b)(1)",
    url: CODE_352,
  },
  {
    key: "speed-prima-facie-numbered-highway",
    quote:
      "except as provided by Subdivision (4), 70 miles per hour on a highway numbered by this state or the United States outside an urban district, including a farm-to-market or ranch-to-market road;",
    source: CODE,
    section: "Sec. 545.352, PRIMA FACIE SPEED LIMITS, subsection (b)(2)",
    url: CODE_352,
  },
  {
    key: "speed-prima-facie-unnumbered-highway",
    quote:
      "except as provided by Subdivision (4), 60 miles per hour on a highway that is outside an urban district and not a highway numbered by this state or the United States;",
    source: CODE,
    section: "Sec. 545.352, PRIMA FACIE SPEED LIMITS, subsection (b)(3)",
    url: CODE_352,
  },
  {
    key: "speed-prima-facie-beach-county-road",
    quote:
      "on a county road adjacent to a public beach, 15 miles per hour, if declared by the commissioners court of the county.",
    source: CODE,
    section: "Sec. 545.352, PRIMA FACIE SPEED LIMITS, subsection (b)(6)",
    url: CODE_352,
  },
  {
    key: "speed-prima-facie-school-bus-inspected",
    quote:
      "60 miles per hour if the vehicle is a school bus that has passed a commercial motor vehicle inspection under Section 548.201 and is on a highway numbered by the United States or this state, including a farm-to-market road;",
    source: CODE,
    section: "Sec. 545.352, PRIMA FACIE SPEED LIMITS, subsection (b)(4)(A)",
    url: CODE_352,
  },
  {
    key: "speed-prima-facie-school-bus-uninspected",
    quote:
      "50 miles per hour if the vehicle is a school bus that: (i) has not passed a commercial motor vehicle inspection under Section 548.201; or (ii) is traveling on a highway not numbered by the United States or this state;",
    source: CODE,
    section: "Sec. 545.352, PRIMA FACIE SPEED LIMITS, subsection (b)(4)(B)",
    url: CODE_352,
  },
  {
    key: "reasonable-and-prudent-speed",
    quote:
      "An operator may not drive at a speed greater than is reasonable and prudent under the circumstances then existing.",
    source: CODE,
    section: "Sec. 545.351, MAXIMUM SPEED REQUIREMENT, subsection (a)",
    url: CODE_351,
  },
  {
    key: "basic-speed-law",
    quote:
      "basic speed law - you may not drive faster than is safe and prudent for existing conditions, regardless of posted speed limits",
    source: DL7,
    section: "Appendix A: Glossary of Terms",
    url: DL7_URL,
  },
  {
    key: "adjust-speed-poor-conditions",
    quote:
      "During periods of heavy traffic, bad weather, low visibility, or other poor driving conditions, you must adjust your speed and following distance to help avoid crashes.",
    source: DL7,
    section: "Chapter 8: Speed and Speed Limits - Speed Limits",
    url: DL7_URL,
  },
  {
    key: "move-over-slow-down",
    quote:
      "If an emergency medical vehicle, law enforcement vehicle, fire truck, tow truck, utility service vehicle, Texas Department of Transportation vehicle (TxDOT, or other highway construction or maintenance vehicle) is stopped on the road with its lights activated (the lights are on or flashing), then the driver is required: To reduce his/her speed to 20 mph below the speed limit; or Move out of the lane closest to the emergency medical vehicle, law enforcement vehicle, fire truck, tow truck or a TxDOT vehicle if the road has multiple lanes traveling in the same direction.",
    source: DL7,
    section: "Chapter 8: Speed and Speed Limits - Slow Down or Move Over",
    url: DL7_URL,
  },
  {
    key: "move-over-below-25-mph",
    quote:
      "Slow to a speed not more than 20 mph less than the posted speed limit when the posted speed limit is 25 mph or more; or Slow to a speed less than 5 mph when the posted speed limit is less than 25 mph.",
    source: DL7,
    section: "Chapter 4: Right-of-Way - Yield Right-of-Way to Emergency Vehicles",
    url: DL7_URL,
  },
  {
    key: "advisory-speed-sign",
    quote:
      "Advisory Speed Sign: This sign gives the highest speed which you can safely travel around the curve ahead.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "exit-ramp-advisory-speed",
    quote: "Indicates the speed at which the exit ramp from a highway may be traveled safely.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "minimum-speed-freeway",
    quote:
      "If you cannot or do not want to drive at or above the minimum speed limit, do not use the highway.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Before Using a Highway",
    url: DL7_URL,
  },

  // --------------------------------------------------------------- safety
  {
    key: "following-distance-2-and-4-seconds",
    quote:
      "For speeds 30 mph or less, the minimum time between your car and the one in front of you is 2 seconds with good road conditions. For speeds above 30 mph, maintain a 4 second gap between cars during good road conditions.",
    source: DL7,
    section: "Chapter 8: Speed and Speed Limits - Speed",
    url: DL7_URL,
  },
  {
    key: "reaction-time-one-and-a-half-seconds",
    quote: "It takes the average person 1-1/2 seconds to think, react and apply the brakes.",
    source: DL7,
    section: "Chapter 8: Speed and Speed Limits - Speed",
    url: DL7_URL,
  },
  {
    key: "headlights-30-minutes-1000-feet",
    quote:
      "You must use your headlights beginning 30 minutes after sunset and ending 30 minutes before sunrise, or anytime when individuals or vehicles cannot be seen clearly for at least 1,000 feet.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Headlights",
    url: DL7_URL,
  },
  {
    key: "low-beam-headlights",
    quote:
      "Use your low beam headlights when: Within 500 feet of an approaching vehicle; Following closely (within 300 feet) behind another vehicle; Driving on lighted roads; Driving in fog, heavy rain, sleet, snow, or dust",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Headlights",
    url: DL7_URL,
  },
  {
    key: "steering-out-of-skid",
    quote:
      "Turn your steering wheel in the direction of the skid. As you recover control, gently straighten the wheels.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Steering Out of a Skid",
    url: DL7_URL,
  },
  {
    key: "brake-failure",
    quote:
      "If your car brakes fail, do not panic. Remember you can use your parking brake and shift to a lower gear.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Brake Failure",
    url: DL7_URL,
  },
  {
    key: "flat-tire-or-blowout",
    quote:
      "If you have a flat tire or a blowout: Do not hit the brakes suddenly and hard; Take your foot off the gas pedal and gently apply the brakes; Steer straight ahead to a stop",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Flat Tire or Blowout",
    url: DL7_URL,
  },
  {
    key: "running-off-pavement",
    quote:
      "Do not hit the brakes suddenly and hard. Grip the steering wheel tightly and take your foot off the gas pedal.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Running Off the Pavement",
    url: DL7_URL,
  },
  {
    key: "hydroplaning",
    quote:
      "hydroplaning - occurs when a tire patch loses contact with the road by rising up on top of water",
    source: DL7,
    section: "Appendix A: Glossary of Terms",
    url: DL7_URL,
  },
  {
    key: "flood-water-depths",
    quote:
      "Six inches of water will reach the bottom of most passenger cars, causing loss of control and possible stalling. Twelve inches of water will float many cars.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Floods",
    url: DL7_URL,
  },
  {
    key: "ice-on-bridges",
    quote: "There may be ice on bridges when the rest of the pavement is clear.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Table 23: Winter Driving Safety Tips",
    url: DL7_URL,
  },
  {
    key: "highway-hypnosis",
    quote:
      "Stop often. Even if you are feeling well, you should stop at least every two hours or every 100 miles.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Fight Highway Hypnosis",
    url: DL7_URL,
  },
  {
    key: "blind-spot-when-passing",
    quote:
      "When you are passing, do not drive or linger in the other driver's blind spot. Either pass the other driver or slow down so you are not in another driver's blind spot.",
    source: DL7,
    section: "Chapter 6: Signaling, Passing, and Turning - Blind Spot Driving",
    url: DL7_URL,
  },
  {
    key: "vehicle-breakdown-get-clear",
    quote:
      "If you can't get the car off the road, get everyone out of the car and off the road.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Vehicle Breakdown",
    url: DL7_URL,
  },
  {
    key: "safety-belts-all-occupants",
    quote:
      "The driver and all passengers, regardless of age, in a passenger vehicle are required to use safety belts if occupying a seat in a vehicle equipped with a safety belt.",
    source: DL7,
    section: "Chapter 14: Additional Safety Tips - Safety Belts",
    url: DL7_URL,
  },
  {
    key: "child-passenger-safety-seat",
    quote:
      "Any child under 8 years old must be secured in a federally approved child car seat if occupying a seat in a vehicle equipped with a safety belt, unless the child is more than 4'9\" tall.",
    source: DL7,
    section: "Chapter 14: Additional Safety Tips - Safety Belts",
    url: DL7_URL,
  },

  // ----------------------------------------------------------- impairment
  {
    key: "bac-008-adults",
    quote:
      "In Texas, a person, age 21 and over, is considered legally intoxicated if the person has a BAC of 0.08 or more.",
    source: DL7,
    section: "Chapter 10: Alcohol and Drug Impact - The Number One Killer is Alcohol",
    url: DL7_URL,
  },
  {
    key: "zero-tolerance-minors",
    quote:
      "Zero tolerance means just that. Even if a minor is not intoxicated as defined under the DWI statute, but has any detectable amount of alcohol in his/her system while operating a motor vehicle in a public place or while operating a watercraft, the minor committed the criminal offense of Driving Under the Influence of Alcohol by a Minor (see Table 31).",
    source: DL7,
    section: "Chapter 10: Alcohol and Drug Impact - Zero Tolerance for Minors",
    url: DL7_URL,
  },
  {
    key: "open-container",
    quote:
      "It is illegal to possess an open container of alcohol in a motor vehicle passenger area located on a public highway, regardless of whether the vehicle is being operated, stopped, or parked.",
    source: DL7,
    section: "Chapter 10: Alcohol and Drug Impact - Open Container",
    url: DL7_URL,
  },
  {
    key: "sobering-up-myths",
    quote:
      "Taking cold showers, drinking black coffee, or exercising will not make a person sober. Only time, based on body weight, number of drinks, and food intake can minimize the effects of alcohol.",
    source: DL7,
    section: "Chapter 10: Alcohol and Drug Impact - Myths about Drinking Alcohol",
    url: DL7_URL,
  },
  {
    key: "specimen-refusal-suspension-adult",
    quote:
      "A person who refuses to give a blood or breath specimen for analysis will have their driver license suspended for 180 days or up to 730 days for subsequent offenses.",
    source: DL7,
    section: "Chapter 10: Alcohol and Drug Impact - Implied Consent Laws for Adults",
    url: DL7_URL,
  },
  {
    key: "bac-failure-suspension-adult",
    quote:
      "If a person submits to a blood or breath specimen and the results show a BAC of 0.08 or greater, their driver license may be suspended for 90 days or up to 365 days for subsequent offenses.",
    source: DL7,
    section: "Chapter 10: Alcohol and Drug Impact - Implied Consent Laws for Adults",
    url: DL7_URL,
  },
  {
    key: "over-the-counter-drugs",
    quote:
      "Many over-the-counter drugs cause drowsiness in some people, which can affect their driving. Read the labels and be careful with antihistamines, other cold preparations, or any medicine that relaxes or promotes sleep.",
    source: DL7,
    section: "Chapter 10: Alcohol and Drug Impact - Table 25: Alcohol and Other Types of Drugs",
    url: DL7_URL,
  },
  {
    key: "alcohol-masks-other-drugs",
    quote:
      "Besides escalating the overall effects of the other drugs, alcohol can also mask the effects of those drugs, increasing a person's risk of poor decision making and/or slowing responsive reactions to situations.",
    source: DL7,
    section: "Chapter 10: Alcohol and Drug Impact on the Driving Ability",
    url: DL7_URL,
  },
  {
    key: "standard-drink-equivalents",
    quote:
      "A drink may include a 12 ounce can of beer, a mixed drink with 1.5 ounces of liquor or a 5 ounce glass of wine. They all contain approximately the same amount of alcohol.",
    source: DL7,
    section: "Chapter 10: Alcohol and Drug Impact - Table 32: Alcohol and Driving",
    url: DL7_URL,
  },

  // ------------------------------------------------------ sharing the road
  {
    key: "bicycle-is-a-vehicle",
    quote:
      "A bicycle is a vehicle. Any person riding a bicycle has all of the rights and responsibilities as a driver of a vehicle.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Share the Road with Bicycles",
    url: DL7_URL,
  },
  {
    key: "bicycle-may-take-full-lane",
    quote:
      "The lane is of substandard width, making it unsafe for a car and a bicycle to safely share the lane side-by-side. When this is the case, it is best for the cyclist to take the full lane, whether riding single file or two abreast.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Rules for Motorists and Bicyclists",
    url: DL7_URL,
  },
  {
    key: "bicycle-one-way-ride-left",
    quote:
      "When operating a bicycle on a one-way road with two or more marked traffic lanes, ride as near as possible to the left curb or edge of the road.",
    source: DL7,
    section: "Chapter 13: Bicycle Laws and Safety - Bicycle Traffic Laws",
    url: DL7_URL,
  },
  {
    key: "bicycle-night-equipment",
    quote:
      "Every bicycle used at nighttime must be equipped with: A lamp on the front emits a white light visible from a distance of at least 500 feet in front of the bicycle, and A red, DPS-approved reflector on the rear visible from distances of 50 feet to 300 feet.",
    source: DL7,
    section: "Chapter 13: Bicycle Laws and Safety - Bicycles Must Be Properly Equipped",
    url: DL7_URL,
  },
  {
    key: "merge-right-before-right-turn",
    quote:
      "A motorist should merge with bicycle traffic when preparing for a right turn. Avoid turning directly across the path of bicycle traffic.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Rules for Motorists and Bicyclists",
    url: DL7_URL,
  },
  {
    key: "motorcycle-entitled-to-full-lane",
    quote:
      "Although it may seem as though there is enough room in the traffic lane for an automobile and a motorcycle, the motorcycle is entitled to a full lane and may need the room to maneuver safely.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Respect a Motorcycle",
    url: DL7_URL,
  },
  {
    key: "motorcycle-following-distance",
    quote:
      "Allow more following distance, at least four to six seconds, when following a motorcycle so the motorcyclist has enough time to maneuver or stop in an emergency.",
    source: DL7,
    section:
      "Chapter 9: Some Special Driving Situations - Allow Plenty of Space When Following a Motorcycle",
    url: DL7_URL,
  },
  {
    key: "motorcycle-signals-not-self-canceling",
    quote:
      "Don't be fooled by a flashing turn signal. Motorcycle signals usually are not self-canceling and riders sometimes forget to turn them off.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Signal Your Intentions",
    url: DL7_URL,
  },
  {
    key: "truck-side-mirror-rule",
    quote:
      "An excellent rule of thumb for motorists sharing the road with a tractor-trailer is, \"If you can't see the truck driver in his side mirror, he can't see you.\"",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Following a Truck",
    url: DL7_URL,
  },
  {
    key: "truck-stopping-distance",
    quote:
      "The average passenger car traveling at 55 mph can stop in approximately 240 feet, which is about three-fourths the length of a football field. A fully loaded tractor-trailer may take more than 400 feet to completely stop, well over the length of a football field.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Following a Truck",
    url: DL7_URL,
  },
  {
    key: "truck-wide-right-turns",
    quote:
      "Trucks make wide, right turns and sometimes leave an open space to the right just before the turn. To avoid a crash, don't pass a truck on the right if there is a possibility the truck might make a right turn.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Right Turns",
    url: DL7_URL,
  },
  {
    key: "truck-passing-time",
    quote: "On a level highway, it takes three to five seconds longer to pass a truck than a car.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Passing",
    url: DL7_URL,
  },
  {
    key: "truck-passing-signal-headlights",
    quote:
      "When passing a truck, first check to your front and rear, check mirrors and blind spots, then move into the passing lane only if it is clear and you are in a legal passing zone. Let the truck driver know you are passing by flashing your headlights, especially at night.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Passing",
    url: DL7_URL,
  },
  {
    key: "dim-headlights-behind-truck",
    quote:
      "When you follow a truck at night always dim your headlights. Bright lights from a vehicle behind will blind the truck driver when the lights reflect off the truck's large side mirrors.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Following a Truck",
    url: DL7_URL,
  },
  {
    key: "light-rail-never-drive-around-gates",
    quote: "Never drive around crossing gate arms.",
    source: DL7,
    section:
      "Chapter 9: Some Special Driving Situations - Table 24: Safety Rules for Light Rail",
    url: DL7_URL,
  },

  // -------------------------------------------------------------- crashes
  {
    key: "crash-injury-stop-immediately",
    quote:
      "If you are operating a motor vehicle involved in a crash resulting in injury to or death of a person, you must immediately stop your vehicle at the scene of the crash (or as close as possible to the scene of the crash) without obstructing traffic more than necessary.",
    source: DL7,
    section: "Chapter 11: Motor Vehicle Crashes - Crash Resulting in Injury to, or Death of a person",
    url: DL7_URL,
  },
  {
    key: "crash-provide-information",
    quote:
      "Provide your name and address, the registration number of the vehicle you were driving, and the name of your motor vehicle liability insurer to any person injured, or to the operator or occupant of, or person attending a vehicle involved in the collision",
    source: DL7,
    section: "Chapter 11: Motor Vehicle Crashes - Crash Resulting in Injury to, or Death of a person",
    url: DL7_URL,
  },
  {
    key: "crash-show-driver-license",
    quote:
      "Show your driver license (if requested and available) to any person injured, or to the operator or occupant of, or person attending a vehicle involved in the collision",
    source: DL7,
    section: "Chapter 11: Motor Vehicle Crashes - Crash Resulting in Injury to, or Death of a person",
    url: DL7_URL,
  },
  {
    key: "crash-written-report-10-days",
    quote:
      "If you are involved in a crash that is not investigated by a law enforcement officer and the crash has not resulted in injury or death of a person or damage to property of $1,000 or more, you must make a written report of the crash and file it with the Texas Department of Transportation (TxDOT) no later than the 10th day after the date of the crash.",
    source: DL7,
    section: "Chapter 11: Motor Vehicle Crashes",
    url: DL7_URL,
  },
  {
    key: "crash-unattended-vehicle",
    quote:
      "If you are operating a motor vehicle that collides with and damages an unattended vehicle, you must immediately stop and either: Locate the operator or owner of the unattended vehicle and give your name and address; Securely attach a written notice in a visible way to the unattended vehicle providing: Your name and address; A statement of the circumstances of the collision.",
    source: DL7,
    section: "Chapter 11: Motor Vehicle Crashes - Crash Involving an Unattended Vehicle",
    url: DL7_URL,
  },
  {
    key: "failure-to-stop-penalty",
    quote:
      "Class B misdemeanor and is punishable by a fine not to exceed $2,000, confinement in jail for up to 180 days, or both.",
    source: DL7,
    section: "Chapter 11: Motor Vehicle Crashes - Table 34: Penalties for Failure to Stop",
    url: DL7_URL,
  },

  // -------------------------------------------------- licensing and GDL
  {
    key: "learner-license-requirements",
    quote:
      "A person applying for a learner license must: Be at least 15 but no more than 18 years of age; Complete the classroom portion of a driver education course, vision exam, and knowledge exam",
    source: DL7,
    section: "Chapter 1: Your License to Drive - Learner License (Instruction Permit)",
    url: DL7_URL,
  },
  {
    key: "gdl-phase-one",
    quote:
      "Phase One: This phase requires applicants under 18 years of age to hold a valid learner, hardship, or combination of learner and hardship license for a minimum of six months prior to the issuance of a provisional license.",
    source: DL7,
    section: "Chapter 1: Your License to Drive - Graduated Driver License (GDL)",
    url: DL7_URL,
  },
  {
    key: "gdl-phase-two-restrictions",
    quote:
      "During Phase, Two these individuals may not drive a motor vehicle: With more than one passenger in the vehicle under the age of 21 who is not a family member; Between midnight and 5:00 a.m. unless the operation of the vehicle is necessary for the driver to work, to attend or participate in a school-related activity, or due to a medical emergency",
    source: DL7,
    section: "Chapter 1: Your License to Drive - Graduated Driver License (GDL), Phase Two",
    url: DL7_URL,
  },
  {
    key: "under-18-wireless-device-ban",
    quote:
      "All drivers who are under 18 years of age are restricted from using a wireless communication device, including a hands-free device, except in case of an emergency.",
    source: DL7,
    section: "Chapter 1: Your License to Drive - Graduated Driver License (GDL)",
    url: DL7_URL,
  },
  {
    key: "texting-while-driving-illegal",
    quote:
      "It is against the law to read, write, or send messages on a cell phone or other portable wireless device.",
    source: DL7,
    section: "Chapter 9: Some Special Driving Situations - Texting While Driving",
    url: DL7_URL,
  },
  {
    key: "school-zone-wireless-prohibited",
    quote: "The use of a wireless communication device is prohibited in the school zone.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "knowledge-exam-70-percent",
    quote: "You must score a grade of 70 percent or better to pass any knowledge exam.",
    source: DL7,
    section: "Chapter 1: Your License to Drive - How to Obtain a Texas Driver License",
    url: DL7_URL,
  },
  {
    key: "address-change-30-days",
    quote: "A change of address must be reported to DPS within 30 days.",
    source: DL7,
    section:
      "Chapter 1: Your License to Drive - Replacement (Duplicate) or Change of Information",
    url: DL7_URL,
  },
  {
    key: "suspension-repeated-convictions",
    quote:
      "Repeated violations of traffic laws, including: Four or more traffic convictions occurring separately within any 12-month period or Seven or more traffic convictions within any 24-month period",
    source: DL7,
    section: "Chapter 1: Your License to Drive - Administrative Suspensions and Revocations",
    url: DL7_URL,
  },
  {
    key: "liability-insurance-minimums",
    quote:
      "As of January 1, 2011, the minimum amount of liability insurance is: $30,000 against injury or death of one person; $60,000 against injury or death of two or more individuals; $25,000 against property damage",
    source: DL7,
    section: "Chapter 3: Safety Responsibility - The Liability Insurance Law",
    url: DL7_URL,
  },
  {
    key: "foot-brake-25-feet",
    quote: "Foot Brake - Must stop car within a distance of 25 feet at a speed of 20 mph.",
    source: DL7,
    section:
      "Chapter 2: Vehicle Inspection and Registration - Table 11: Required Equipment for Motor Vehicles",
    url: DL7_URL,
  },
  {
    key: "horn-audible-200-feet",
    quote: "Horns must be heard for a minimum distance of 200 feet.",
    source: DL7,
    section: "Chapter 2: Vehicle Inspection and Registration - Horns",
    url: DL7_URL,
  },

  // ------------------------------------------------------------ work zones
  {
    key: "work-zone-fines-double",
    quote:
      "Fines double in a construction or maintenance work zone when workers are present anywhere in the construction zone.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Obey Warning Signs and Barricades",
    url: DL7_URL,
  },
  {
    key: "barricade-over-water-offense",
    quote:
      "The offense is a Class B misdemeanor punishable by a fine of up to $2,000 and/or up to 180 days in jail when a warning sign or barricade has been placed at a location where water is over any portion of a road, street, or highway.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Obey Warning Signs and Barricades",
    url: DL7_URL,
  },
  {
    key: "flag-person-instructions",
    quote:
      "A flag person's instructions must be obeyed. When instructed to stop, do so in your lane and do not veer right or left.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Flag Person",
    url: DL7_URL,
  },
  {
    key: "barricade-stripes-direction",
    quote: "Stripes sloping downward to the right means the driver should bear to the right.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Pass to the Right",
    url: DL7_URL,
  },
  {
    key: "slow-moving-vehicle-emblem",
    quote:
      "This emblem is required for all slow-moving vehicles. Slow-moving vehicles are those designed to operate at a maximum speed of 25 mph or less, and the term includes all vehicles, farm and other machinery, and any other road machinery drawn by either animals or slow moving motor vehicles.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Slow-Moving Vehicle Emblem",
    url: DL7_URL,
  },
  {
    key: "shoulder-use-restricted",
    quote:
      "This designates the shoulder of the road should only be used by vehicles required to stop because of mechanical breakdown, tire trouble, lack of fuel, or other emergencies.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "no-trucks-sign",
    quote:
      "Trucks are prohibited from using or entering the roadway where this sign is displayed.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "right-lane-must-turn-right",
    quote:
      "Vehicles driving in the right lane must turn right at the next intersection unless the sign indicates a different turning point.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "no-left-turn-sign",
    quote: "Turning left at an intersection where this sign is posted is prohibited.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "wrong-way-sign",
    quote:
      "If you see this sign facing you, you are driving the wrong way on a one-way street and you are directly opposing the flow of traffic.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "hov-lane-sign",
    quote:
      "High Occupancy Vehicle (HOV) Preferential Lane: Buses and vehicles used for carpools may use this lane only between the hours of 6 a.m. to 9 a.m., Monday through Friday.",
    source: DL7,
    section:
      "Chapter 5: Signals, Signs, and Markers - Table 19: Regulatory and Warning Signs",
    url: DL7_URL,
  },
  {
    key: "mileposts",
    quote:
      "Mileposts provide a means of identifying the location of crashes, breakdowns, or other emergencies. Mileposts are erected every mile on interstate highways.",
    source: DL7,
    section: "Chapter 5: Signals, Signs, and Markers - Table 20: Guide Signs",
    url: DL7_URL,
  },
  {
    key: "mail-and-delivery-vehicles",
    quote:
      "Drivers must proceed with caution, and, if possible, change lanes before safely passing one of these vehicles on the road.",
    source: DL7,
    section: "Chapter 8: Speed and Speed Limits - Slow Down or Move Over",
    url: DL7_URL,
  },
];
