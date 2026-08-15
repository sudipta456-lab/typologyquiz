import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Illinois Rules of the Road (2026 edition,
// DSD A 112.47), published by the Illinois Secretary of State, plus sections of
// the Illinois Vehicle Code (625 ILCS 5) and of 92 Ill. Adm. Code 1030 for the
// rules the handbook does not state.
//
// Every `quote` below was produced by SLICING the official source text between
// two anchors rather than being retyped, so each one is an exact substring of
// the source by construction. Four mechanical normalisations were applied to
// the extracted text, and to nothing else: curly quotes and en/em dashes are
// folded to ASCII; a word split across a line break is rejoined, keeping the
// hyphen where the hyphenated form is attested elsewhere in the book; a slash
// split across a line break is closed up; and the running page number that
// interrupts a sentence across a page turn is removed. Where the source states
// a rule as a stem followed by a bulleted list, the bullets are run together in
// the order they appear and rendered as "*" - no words are changed, dropped or
// reordered. Source typographical errors are preserved as they stand, because a
// quote that has been tidied up is no longer a quote.
//
// These are quoted, not summarised, because the Class D written exam is written
// from this wording. Each one is kept to the operative rule and shown with its
// source, section and a link back to the Secretary of State so the learner
// reads the real thing.

const HB = "Illinois Rules of the Road (2026), Illinois Secretary of State";
const HB_URL =
  "https://www.ilsos.gov/content/dam/publications/pdf_publications/dsd_a112.pdf";
const IVC = "Illinois Vehicle Code, 625 ILCS 5 (Illinois General Assembly)";
const IAC = "92 Ill. Adm. Code 1030 (Illinois Secretary of State rules)";

export const illinoisExcerpts: HandbookExcerpt[] = [
  {
    key: "sign-stop-octagon",
    quote:
      "An eight-sided (octagon) sign tells you to always make a full stop at the " +
      "stop line. If there is no stop line, stop before entering the crosswalk. " +
      "If there is no crosswalk, stop before entering the intersection. Yield the " +
      "right of way to pedestrians and approaching traffic.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "signal-red-stop-position",
    quote:
      "Red Light - Stop at the marked stop line. If there is no marked stop line, " +
      "stop before entering the crosswalk. If there is no crosswalk, stop before " +
      "entering the intersection.",
    source: HB,
    section: "Chapter 10: Traffic Signals - Steady Lights",
    url: HB_URL,
  },
  {
    key: "speed-standard-limits",
    quote:
      "The following speed limits apply, unless otherwise posted: * Interstates " +
      "and tollways - 70 mph. * Highways with four lanes - 65 mph. * Other " +
      "highways and rural areas - 55 mph. * City/town areas - 30 mph. * Alleys - " +
      "15 mph. * School zones - 20 mph (on school days between 6:30 a.m. and 4 " +
      "p.m. when children are present and signs are posted).",
    source: HB,
    section: "Chapter 4: Traffic Laws - Speed Limits",
    url: HB_URL,
  },
  {
    key: "bus-must-stop",
    quote:
      "Any other time, you must stop before meeting or overtaking (passing) a " +
      "school bus that is stopped and loading or unloading passengers. This " +
      "includes: * Any two-lane roadway in rural areas and within city limits. * " +
      "Any roadway, highway, or private road. * Any parking lot located on school " +
      "property.",
    source: HB,
    section: "Chapter 4: Traffic Laws - School Buses",
    url: HB_URL,
  },
  {
    key: "belt-law",
    quote:
      "Illinois law requires all drivers and passengers (front and back seats) " +
      "age 8 and older to wear safety belts, even if the vehicle is equipped with " +
      "air bags.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Safety Belt Law",
    url: HB_URL,
  },
  {
    key: "sign-yield-triangle",
    quote:
      "The three-sided (triangle) sign tells you to give the right of way to all " +
      "vehicles and pedestrians before proceeding. Slow down to a safe speed and " +
      "stop if necessary.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "signal-right-on-red",
    quote:
      "You may turn right at a red light unless there is a sign prohibiting it. " +
      "You also may turn left at a red light when turning from a one-way street " +
      "onto another one-way street that has traffic moving to the left. In both " +
      "instances, come to a complete stop and yield the right of way to oncoming " +
      "traffic and pedestrians before turning.",
    source: HB,
    section: "Chapter 10: Traffic Signals - Steady Lights",
    url: HB_URL,
  },
  {
    key: "licence-min-age",
    quote: "You must be at least age 16 to obtain an Illinois driver's license.",
    source: HB,
    section: "Chapter 1: Illinois Driver's License - Age Restrictions",
    url: HB_URL,
  },
  {
    key: "mark-broken-yellow",
    quote:
      "Broken yellow lines separate single lanes of traffic moving in opposite " +
      "directions. Passing is allowed.",
    source: HB,
    section: "Chapter 10: Pavement Markings - Yellow Center Lines",
    url: HB_URL,
  },
  {
    key: "bike-pass-3-feet",
    quote:
      "When passing a bicyclist, motorists must do so slowly and leave at least 3 " +
      "feet of passing space from the edge of the vehicle's side mirror. If there " +
      "is not 3 feet of passing space, drivers must wait to pass until they can " +
      "do so safely.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Bicycles",
    url: HB_URL,
  },
  {
    key: "bac-limit",
    quote:
      "It is illegal to drive if your BAC is .08% or more. However, you can be " +
      "convicted of Driving Under the Influence (DUI) if your BAC is less than " +
      ".08% but your driving ability is impaired.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - BAC",
    url: HB_URL,
  },
  {
    key: "park-hydrant-15",
    quote:
      "Standing or parking a vehicle, whether occupied or not, is prohibited: * " +
      "In front of a public or private driveway. * Within 15 feet of a fire " +
      "hydrant.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Prohibited Stopping, Standing or Parking",
    url: HB_URL,
  },
  {
    key: "sign-diamond-warning",
    quote:
      "This diamond-shaped sign means WARNING. It may be yellow, yellow-green, or " +
      "orange with black wording or symbols. This sign warns you about hazards or " +
      "possible hazards on or near the roadway.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Shapes of Signs",
    url: HB_URL,
  },
  {
    key: "emergency-approaching",
    quote:
      "When being approached by an emergency vehicle using audible and visual " +
      "signals (lights and/or sirens), Illinois law requires motorists to " +
      "immediately pull to the right side of the road and allow the emergency " +
      "vehicle to pass.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Emergency/Maintenance Vehicles",
    url: HB_URL,
  },
  {
    key: "row-four-way-stop",
    quote:
      "When more than one driver reaches a four-way stop intersection. The first " +
      "driver to stop should be the first to go. When two vehicles on different " +
      "roadways arrive at a four-way stop intersection at the same time, the " +
      "vehicle on the left should yield to the vehicle on the right.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Right of Way",
    url: HB_URL,
  },
  {
    key: "rain-headlights-wipers",
    quote:
      "Illinois law requires you to use your headlights when operating your " +
      "windshield wipers.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Rain",
    url: HB_URL,
  },
  {
    key: "sign-color-orange",
    quote:
      "ORANGE is used for warning signs, usually found in construction or " +
      "maintenance zones along streets and highways. These signs alert you to " +
      "possible dangers ahead due to construction and maintenance projects.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Colors of Signs",
    url: HB_URL,
  },
  {
    key: "three-second-rule",
    quote:
      "Use the three-second rule to determine a safe following distance. To use " +
      "the three-second rule, select a fixed object on the road ahead, such as a " +
      "sign, tree, or overpass. When the vehicle in front of you passes the " +
      "object, count \"one-thousand-one, one-thousand-two, etc.\" Your vehicle " +
      "should not reach the object before the count of one-thousand-three.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Following Distances",
    url: HB_URL,
  },
  {
    key: "insurance-minimums",
    quote:
      "The following are minimum liability insurance limits in Illinois: * " +
      "$25,000 for injury or death of one person in a crash. * $50,000 for injury " +
      "or death of more than one person in a crash. * $20,000 for damage to " +
      "property of another person.",
    source: HB,
    section: "Chapter 13: Owning a Vehicle - Mandatory Insurance",
    url: HB_URL,
  },
  {
    key: "signal-flashing-red",
    quote:
      "Flashing Red - You must stop, yield the right of way to traffic within the " +
      "intersection or crosswalk, and proceed when safe.",
    source: HB,
    section: "Chapter 10: Traffic Signals - Flashing Lights",
    url: HB_URL,
  },
  {
    key: "moto-full-lane",
    quote:
      "Although there may be enough room in the traffic lane for an automobile " +
      "and a motorcyclist, remember that the motorcyclist needs the room to " +
      "maneuver safely and is entitled to the entire lane. Do not share the lane.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Lane Sharing",
    url: HB_URL,
  },
  {
    key: "park-hill-downhill",
    quote:
      "If you park on a street with curbing and your vehicle is facing downhill, " +
      "turn the front wheels toward the curb so your vehicle will roll toward the " +
      "curb.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Hill Parking",
    url: HB_URL,
  },
  {
    key: "signal-distance",
    quote:
      "In a business or residential area, you must give a continuous turn signal " +
      "for at least 100 feet before turning.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Signaling",
    url: HB_URL,
  },
  {
    key: "zero-tolerance",
    quote:
      "If you are under age 21 and found to have any trace of alcohol in your " +
      "system while operating a motor vehicle, you will have your driving " +
      "privileges suspended for a minimum of three months.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - Drivers Under Age 21",
    url: HB_URL,
  },
  {
    key: "sign-pentagon-school",
    quote:
      "This five-sided sign is yellow or yellow-green with black symbols. It " +
      "means either SCHOOL ZONE or SCHOOL CROSSING. If the sign shows two " +
      "children walking, a school is nearby. If the sign shows two children " +
      "walking with a downward pointing arrow, you are at a school crossing.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Shapes of Signs",
    url: HB_URL,
  },
  {
    key: "ped-marked-crosswalk",
    quote:
      "A driver must come to a complete stop (and yield): * When a pedestrian is " +
      "in a marked crosswalk.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Pedestrian Right of Way",
    url: HB_URL,
  },
  {
    key: "crash-report-threshold",
    quote:
      "Regardless of fault, a crash report must be filed by the driver of a " +
      "vehicle if the crash involves death, bodily injury, or property damage of " +
      "more than $1,500. If any vehicle involved in the crash is uninsured, a " +
      "report must be filed if property damage is more than $500 or more.",
    source: HB,
    section: "Chapter 7: Traffic Violations/Crashes - Crash Reports",
    url: HB_URL,
  },
  {
    key: "lane-left-lane-interstate",
    quote:
      "When driving on an interstate highway or full access controlled freeway, " +
      "you may not drive in the left lane(s) except when passing another vehicle.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Lane Usage",
    url: HB_URL,
  },
  {
    key: "sign-no-passing-pennant",
    quote:
      "This three-sided sign is yellow with black letters and indicates a NO " +
      "PASSING ZONE. The sign will appear on the left side of a two-lane, two-way " +
      "roadway at the beginning of the area where \"no passing\" pavement markings " +
      "are also used.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Colors of Signs",
    url: HB_URL,
  },
  {
    key: "pass-return-200-feet",
    quote:
      "You must return to your lane before getting within 200 feet of an oncoming " +
      "vehicle.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Passing",
    url: HB_URL,
  },
  {
    key: "row-uncontrolled",
    quote:
      "When two vehicles on different roadways reach an uncontrolled intersection " +
      "at the same time. The vehicle on the left should yield to the vehicle on " +
      "the right.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Right of Way",
    url: HB_URL,
  },
  {
    key: "mark-double-white",
    quote:
      "Solid double white lines separate lanes of traffic moving in the same " +
      "direction. Crossing a double solid white line is prohibited.",
    source: HB,
    section: "Chapter 10: Pavement Markings - White Lane Lines",
    url: HB_URL,
  },
  {
    key: "gdl-night-permit",
    quote:
      "* Nighttime driving restrictions - Sun.-Thurs., 10 p.m.-6 a.m.; Fri.-Sat., " +
      "11 p.m.-6 a.m. (local curfews may differ). * Permit must be held for a " +
      "minimum of nine months.",
    source: HB,
    section: "Chapter 3: Graduated Driver Licensing Program - Permit Phase",
    url: HB_URL,
  },
  {
    key: "park-20-30-feet",
    quote:
      "Within 20 feet of a fire station driveway or crosswalk at an intersection. " +
      "* Within 30 feet of a STOP sign, YIELD sign, or traffic control signal.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Prohibited Stopping, Standing or Parking",
    url: HB_URL,
  },
  {
    key: "child-restraint-under-8",
    quote:
      "The Child Passenger Protection Act requires all children under age 8 to be " +
      "properly secured in an appropriate child safety restraint system.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Child Passenger Protection Act",
    url: HB_URL,
  },
  {
    key: "bike-lane-no-vehicles",
    quote:
      "Vehicles are not allowed to drive, park, idle, or drop off or pick up " +
      "passengers in these bike lanes even if bicyclists are not present.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Bicycles",
    url: HB_URL,
  },
  {
    key: "summary-suspension-refuse",
    quote:
      "If you refuse to submit to chemical testing, your driving privileges will " +
      "be suspended for one year.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - Statutory Summary Suspension",
    url: HB_URL,
  },
  {
    key: "move-over-stationary",
    quote:
      "When approaching a stationary (non-moving) emergency/maintenance vehicle " +
      "using visual signals-by displaying blue, red, amber, white, or green " +
      "oscillating, rotating or flashing lights- or an emergency scene where " +
      "those lights are in use, Illinois law requires motorists to yield, change " +
      "to a lane away from the emergency workers when possible",
    source: HB,
    section: "Chapter 4: Traffic Laws - Emergency/Maintenance Vehicles",
    url: HB_URL,
  },
  {
    key: "rail-crossbuck-yield",
    quote:
      "Railroad Crossbuck Sign - If a railroad crossing has more than one track, " +
      "the number of tracks is on the sign below the crossbuck. This is " +
      "considered a yield sign, and you must yield the right of way to any " +
      "oncoming trains and railroad equipment.",
    source: HB,
    section: "Chapter 10: Railroad Crossings",
    url: HB_URL,
  },
  {
    key: "u-turn-500-feet",
    quote:
      "You must not turn around on curves and hills unless you can see for at " +
      "least 500 feet in all directions.",
    source: HB,
    section: "Chapter 4: Traffic Laws - U-Turns",
    url: HB_URL,
  },
  {
    key: "signal-flashing-yellow",
    quote: "Flashing Yellow - Proceed into the intersection with caution.",
    source: HB,
    section: "Chapter 10: Traffic Signals - Flashing Lights",
    url: HB_URL,
  },
  {
    key: "row-left-turn-finish",
    quote:
      "If you enter an intersection while the light is green, you may finish the " +
      "turn even though the light turns red.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Right of Way",
    url: HB_URL,
  },
  {
    key: "work-zone-24-7",
    quote:
      "Motorists must obey the posted construction zone speed limit 24 hours a " +
      "day, seven days a week, regardless of the presence of workers.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Construction Zones",
    url: HB_URL,
  },
  {
    key: "sign-color-green",
    quote:
      "GREEN is used for guide signs. These signs tell you where you are, which " +
      "way to go, and the distance to upcoming destinations.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Colors of Signs",
    url: HB_URL,
  },
  {
    key: "gdl-permit-hold",
    quote:
      "The instruction permit is valid for 24 months and must be held for at " +
      "least nine consecutive months before obtaining a driver's license if you " +
      "are age 15-17.",
    source: HB,
    section: "Chapter 3: Drivers Under Age 21 - Obtaining an Instruction Permit",
    url: HB_URL,
  },
  {
    key: "fog-driving",
    quote:
      "Drive with your headlights set on dim or use fog lights. * Do not " +
      "overdrive your headlights. Stay within the limits of your vision in case " +
      "it is necessary to stop suddenly.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Fog",
    url: HB_URL,
  },
  {
    key: "park-parallel-12-inches",
    quote:
      "When parking on streets with two-way traffic, park so the right-hand " +
      "wheels are parallel to and within 12 inches of the curb.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Parallel Parking",
    url: HB_URL,
  },
  {
    key: "bus-four-lane-exception",
    quote:
      "A vehicle is not required to stop for a school bus when both vehicles are " +
      "on a four-lane roadway and the bus is stopped in the opposite direction " +
      "from which a driver is traveling.",
    source: HB,
    section: "Chapter 4: Traffic Laws - School Buses",
    url: HB_URL,
  },
  {
    key: "signal-dark-all-way-stop",
    quote:
      "When traffic control signals are not working, you must always treat the " +
      "intersection as an all-way stop by coming to a complete stop, unless " +
      "directed otherwise by law enforcement.",
    source: HB,
    section: "Chapter 10: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "cannabis-container",
    quote:
      "Cannabis may only be transported in a vehicle in a sealed, odor-proof, and " +
      "child-resistant container. No driver or passenger may use cannabis in a " +
      "motor vehicle.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - Medical and Recreational Cannabis",
    url: HB_URL,
  },
  {
    key: "sign-wrong-way",
    quote:
      "This sign tells you that your vehicle is traveling in the wrong direction. " +
      "You will see this sign on expressway ramps a short distance past the DO " +
      "NOT ENTER sign.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "rail-stop-15-50",
    quote:
      "When approaching a railroad crossing, you must stop within 15-50 feet if " +
      "there is a posted stop sign, if the electric signal is flashing, or if the " +
      "crossing gate is lowered.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Railroad Crossing",
    url: HB_URL,
  },
  {
    key: "signal-red-arrow",
    quote:
      "Red Arrow (constantly lit) - The constantly lit red arrow means you cannot " +
      "make the movement shown by the arrow until a green arrow appears. There " +
      "are two exceptions. You may make a right turn at a red arrow.",
    source: HB,
    section: "Chapter 10: Traffic Signals - Arrows",
    url: HB_URL,
  },
  {
    key: "lane-door-opening",
    quote:
      "You or your passenger may not open doors on the side of a vehicle where " +
      "traffic is moving unless it can be done safely and without interfering " +
      "with vehicle or bicycle traffic.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Lane Usage",
    url: HB_URL,
  },
  {
    key: "alley-stop-sidewalk",
    quote:
      "In urban areas, you must come to a complete stop when moving out of an " +
      "alley, building, private road, or driveway and before entering the " +
      "sidewalk area.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Alleys/Driveways",
    url: HB_URL,
  },
  {
    key: "moto-following-distance",
    quote:
      "Allow at least three to four seconds following distance when behind a " +
      "motorcycle so the motorcyclist has enough time to maneuver in an " +
      "emergency.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Following and Stopping Distance",
    url: HB_URL,
  },
  {
    key: "smv-emblem",
    quote:
      "An orange slow-moving vehicle emblem must be on the rear of certain " +
      "slow-moving vehicles.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Slow-Moving Vehicles",
    url: HB_URL,
  },
  {
    key: "ilcs-school-day-hours",
    quote:
      "For the purpose of this Section, a school day begins at 6:30 a.m. and " +
      "concludes at 4 p.m.",
    source: IVC,
    section: "625 ILCS 5/11-605(a)",
    url: "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=062500050K11-605",
  },
  {
    key: "row-t-intersection",
    quote:
      "To cross traffic when on the terminating highway of a \"T\" intersection " +
      "with no traffic control signs or signals.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Right of Way",
    url: HB_URL,
  },
  {
    key: "park-rail-50-feet",
    quote: "Within 50 feet of the nearest rail of a railroad crossing.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Prohibited Stopping, Standing or Parking",
    url: HB_URL,
  },
  {
    key: "mark-solid-and-broken",
    quote:
      "When there is a solid and a broken yellow line separating two lanes of " +
      "traffic moving in opposite directions, you may pass only when the broken " +
      "yellow line is nearest your lane.",
    source: HB,
    section: "Chapter 10: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "gdl-initial-passengers",
    quote:
      "For the first 12 months of licensing, or until the driver turns 18, " +
      "whichever occurs first, the number of passengers is limited to one person " +
      "under age 20, unless the passenger(s) is a sibling, stepsibling, child, or " +
      "stepchild of the driver.",
    source: HB,
    section: "Chapter 3: Graduated Driver Licensing Program - Initial Licensing Phase",
    url: HB_URL,
  },
  {
    key: "summary-suspension-fail",
    quote:
      "If a chemical test discloses a BAC of .08% or more or a THC level of " +
      "either 5 nanograms or more per milliliter of whole blood or 10 nanograms " +
      "or more per milliliter of other bodily substance, your driving privileges " +
      "will be suspended for six months.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - Statutory Summary Suspension",
    url: HB_URL,
  },
  {
    key: "skid-recovery",
    quote:
      "If your vehicle starts to skid, ease off the gas pedal or brakes, steer " +
      "into the direction of the skid until regaining traction, and then " +
      "straighten the vehicle.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Skidding",
    url: HB_URL,
  },
  {
    key: "disabled-vehicle-lane",
    quote:
      "When drivers approach any disabled vehicle using hazard lights on a " +
      "four-lane highway, Illinois law requires drivers to change lanes away from " +
      "the disabled vehicle if it is safe to do so. If it is not safe to change " +
      "lanes, the driver should reduce speed when approaching and passing the " +
      "disabled vehicle.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Disabled Vehicles",
    url: HB_URL,
  },
  {
    key: "crash-report-30-minutes",
    quote: "A driver has 30 minutes to report a crash after it occurs.",
    source: HB,
    section: "Chapter 7: Traffic Violations/Crashes - Crash Reports",
    url: HB_URL,
  },
  {
    key: "sign-color-yellow-green",
    quote:
      "YELLOW-GREEN can also be used for warning signs. These signs alert you to " +
      "pedestrian and bicycle crossings, playground areas, school bus stops, and " +
      "school zones.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Colors of Signs",
    url: HB_URL,
  },
  {
    key: "pass-prohibited-where",
    quote:
      "Passing on a two-lane, two-way roadway is not allowed: * In an area marked " +
      "for no passing by a solid yellow line or with a DO NOT PASS or NO PASSING " +
      "ZONE sign. * On a hill or curve where it is not possible to see oncoming " +
      "vehicles. * Within 100 feet of an intersection or railroad crossing.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Passing",
    url: HB_URL,
  },
  {
    key: "signal-green",
    quote:
      "Green Light - You may go after yielding the right of way to any " +
      "pedestrians and vehicles in the intersection or crosswalk.",
    source: HB,
    section: "Chapter 10: Traffic Signals - Steady Lights",
    url: HB_URL,
  },
  {
    key: "speed-minimum",
    quote:
      "When minimum limits are not posted, you should not drive so slowly as to " +
      "create interference with the normal movement of traffic.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Speed Limits",
    url: HB_URL,
  },
  {
    key: "funeral-yield",
    quote:
      "Motorists encountering a funeral procession must yield the right of way to " +
      "all vehicles in the procession.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Funeral Processions",
    url: HB_URL,
  },
  {
    key: "park-prohibited-list",
    quote:
      "Stopping, standing, or parking is prohibited: * On the roadway side of any " +
      "parked vehicle (also known as double parking). * On a sidewalk, crosswalk, " +
      "or within an intersection.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Prohibited Stopping, Standing or Parking",
    url: HB_URL,
  },
  {
    key: "ilcs-under-19-wireless",
    quote:
      "A person under the age of 19 years who holds an instruction permit issued " +
      "under Section 6-105 or 6-107.1, or a person under the age of 19 years who " +
      "holds a graduated license issued under Section 6-107, may not drive a " +
      "vehicle on a roadway while using a wireless phone.",
    source: IVC,
    section: "625 ILCS 5/12-610.1(b)",
    url: "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=062500050K12-610.1",
  },
  {
    key: "winter-bridges-ice",
    quote:
      "Approach bridges, shaded spots, overpasses and turns slowly. They may " +
      "remain icy after the rest of the roadway is clear and dry.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Winter Driving",
    url: HB_URL,
  },
  {
    key: "bike-low-speed-electric",
    quote:
      "A low-speed electric bicycle is a bicycle equipped with fully operable " +
      "pedals and an electric motor of less than 750 watts.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Bicycles",
    url: HB_URL,
  },
  {
    key: "open-container",
    quote:
      "It is illegal for anyone to drink alcoholic beverages in a vehicle. The " +
      "driver and passengers may be issued a traffic citation. Passengers on " +
      "chartered buses used for nonschool purposes, motor homes, mini motor " +
      "homes, and limousines are exempt.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - Illegal Transportation",
    url: HB_URL,
  },
  {
    key: "rail-stalled-45-degrees",
    quote:
      "If your vehicle becomes disabled and is stuck or stalls on railroad " +
      "tracks, everyone in the vehicle should get out immediately, call 911, and " +
      "move away from the tracks at a 45-degree angle in the direction of the " +
      "train.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Railroad Crossing",
    url: HB_URL,
  },
  {
    key: "sign-no-turn-on-red",
    quote:
      "It tells you that a right turn on a red light or a left turn on a red " +
      "light at intersecting one-way streets is prohibited.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "signal-hand-arm",
    quote:
      "Hand and arm signals - Should give the signal using the left arm. For a " +
      "right turn, the hand and arm are extended straight up. For a left turn, " +
      "the hand and arm are extended straight out to the left. To slow down or " +
      "stop, the hand and arm are extended down.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Signaling",
    url: HB_URL,
  },
  {
    key: "signal-lane-red-x",
    quote:
      "Red \"X\" - Never drive in this lane when the red \"X\" is displayed. Yellow " +
      "\"X\" - This indicates the lane signal is going to change to red. Leave this " +
      "lane safely before the red \"X\" appears.",
    source: HB,
    section: "Chapter 10: Traffic Signals - Lane Signals",
    url: HB_URL,
  },
  {
    key: "speed-doubling",
    quote: "Doubling your speed quadruples your vehicle's stopping distance.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Vehicle Speed",
    url: HB_URL,
  },
  {
    key: "row-merge-sign",
    quote:
      "When approaching a MERGE sign with through traffic. You must increase or " +
      "decrease speed to avoid a crash.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Right of Way",
    url: HB_URL,
  },
  {
    key: "park-hill-uphill",
    quote:
      "If you park facing uphill and there is a curb, turn the front wheels away " +
      "from the curb.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Hill Parking",
    url: HB_URL,
  },
  {
    key: "exam-three-attempts",
    quote:
      "You are allowed three attempts to pass each exam within one year from the " +
      "date you paid your application fee.",
    source: HB,
    section: "Chapter 2: Driver's License Exams",
    url: HB_URL,
  },
  {
    key: "aggressive-response",
    quote:
      "If you encounter an angry or aggressive motorist: * Do not retaliate or in " +
      "any way engage the other driver. * Do not make eye contact.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Aggressive Driving",
    url: HB_URL,
  },
  {
    key: "horse-horn",
    quote:
      "Never sound a horn when near a horse or other livestock, as the sound may " +
      "frighten it and cause a crash.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Horseback Riders",
    url: HB_URL,
  },
  {
    key: "dui-under-21",
    quote:
      "If you are under age 21 and convicted of DUI, you face the revocation of " +
      "your driving privileges for a minimum of two years for a first conviction.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - Drivers Under Age 21",
    url: HB_URL,
  },
  {
    key: "crash-unattended-vehicle",
    quote:
      "If you are involved in a crash that causes damage to an unattended vehicle " +
      "(no driver or passenger present) or other property: * Stop your vehicle in " +
      "an area away from traffic. * Leave your name, address, phone number and " +
      "license plate number on the vehicle or property if the owner cannot be " +
      "found.",
    source: HB,
    section: "Chapter 7: Traffic Violations/Crashes - Unattended Vehicles",
    url: HB_URL,
  },
  {
    key: "sign-color-blue",
    quote:
      "BLUE is also used for guide signs. These signs tell you about services " +
      "along the roadway.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Colors of Signs",
    url: HB_URL,
  },
  {
    key: "law-sound-system-75",
    quote:
      "Operate or permit to be operated any sound system (radio, tape player or " +
      "disc player) at a volume that can be heard 75 feet or more from a vehicle " +
      "being driven on a highway.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Additional Laws",
    url: HB_URL,
  },
  {
    key: "signal-yellow",
    quote:
      "Yellow Light - The yellow light warns that the signal is changing from " +
      "green to red. When the red light appears, do not enter the intersection.",
    source: HB,
    section: "Chapter 10: Traffic Signals - Steady Lights",
    url: HB_URL,
  },
  {
    key: "roundabout-yield",
    quote:
      "Vehicles entering or exiting a roundabout must yield to all traffic, " +
      "including pedestrians and bicycles.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Rotary and Roundabout",
    url: HB_URL,
  },
  {
    key: "licence-address-change",
    quote:
      "You must notify the Secretary of State's office of an address change " +
      "within 10 days of any move",
    source: HB,
    section: "Chapter 1: Illinois Driver's License - Changing the Name/Address",
    url: HB_URL,
  },
  {
    key: "truck-blind-spots",
    quote:
      "Stay out of blind spots and maintain a visible position when following a " +
      "large vehicle. Drivers of large vehicles should be able to see surrounding " +
      "vehicles in their side mirrors.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Large Vehicles",
    url: HB_URL,
  },
  {
    key: "ped-unmarked-crosswalk",
    quote:
      "When a pedestrian is in an unmarked crosswalk on the driver's side of the " +
      "roadway, and there are no traffic control signals.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Pedestrian Right of Way",
    url: HB_URL,
  },
  {
    key: "speed-slow-down-when",
    quote:
      "You must slow down when approaching and crossing an intersection, going " +
      "around a curve, approaching the top of a hill, or traveling on a narrow " +
      "and winding roadway.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Speed Limits",
    url: HB_URL,
  },
  {
    key: "park-ev-spaces",
    quote: "Only electric vehicles are allowed to park in these designated spaces.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Parking for Electric Vehicles",
    url: HB_URL,
  },
  {
    key: "fire-hoses",
    quote:
      "A driver is prohibited from driving over fire hoses unless permitted by a " +
      "fire official in command of the scene.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Emergency/Maintenance Vehicles",
    url: HB_URL,
  },
  {
    key: "aggravated-dui-list",
    quote:
      "You may be charged with Aggravated DUI if you: * Are involved in a death " +
      "or personal injury crash while driving under the influence. * Have " +
      "received a third or subsequent DUI. * Committed DUI while driving a school " +
      "bus with children or operating a vehicle for hire, such as a limousine.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - Aggravated DUI",
    url: HB_URL,
  },
  {
    key: "sign-keep-right",
    quote:
      "This sign tells you where to drive when approaching traffic islands, " +
      "medians, or other obstructions in the middle of the roadway. You must " +
      "drive to the side indicated by the arrow.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "airbag-distance",
    quote:
      "A distance of 10-12 inches between the driver and the air bag is " +
      "desirable, especially for short, elderly, or pregnant drivers.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Air Bag Safety",
    url: HB_URL,
  },
  {
    key: "mark-two-way-left-turn",
    quote:
      "A left turn may not be made from any other lane when a turn lane is " +
      "provided. A vehicle may not be driven in the lane except when preparing " +
      "for or making a left turn from or into the roadway or when preparing for " +
      "or making a U-turn when permitted by law.",
    source: HB,
    section: "Chapter 10: Pavement Markings - Two-Way Left Turn Lanes",
    url: HB_URL,
  },
  {
    key: "ped-signal-flashing-hand",
    quote:
      "Don't Walk (flashing orange upraised hand) - Do not start to enter the " +
      "roadway. If you have partially completed crossing during the constantly " +
      "lit walk signal, you may continue to a sidewalk or safety island.",
    source: HB,
    section: "Chapter 10: Traffic Signals - Pedestrian Traffic Signals",
    url: HB_URL,
  },
  {
    key: "licence-new-resident",
    quote:
      "You must obtain an Illinois license within 90 days or before your driver's " +
      "license expires, whichever comes first.",
    source: HB,
    section: "Chapter 1: Illinois Driver's License - Exemptions",
    url: HB_URL,
  },
  {
    key: "sign-advance-warning",
    quote:
      "These signs warn you of approaching traffic control signals. Although the " +
      "traffic signal may not yet be visible, the traffic signs are close enough " +
      "to require you to start slowing down.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Warning Signs",
    url: HB_URL,
  },
  {
    key: "scooter-licence-class",
    quote:
      "If the scooter has an engine with less than 150cc displacement, it is a " +
      "motor-driven cycle, and a Class L motorcycle license is required.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Scooters and Mopeds",
    url: HB_URL,
  },
  {
    key: "work-zone-duties",
    quote:
      "When approaching or entering a highway construction or maintenance area " +
      "(also known as work zones), Illinois law requires motorists to slow down, " +
      "discontinue wireless/cellphone use (unless using a hands-free device that " +
      "may include the use of a single-sided headset), yield to any authorized " +
      "vehicles or workers in the area",
    source: HB,
    section: "Chapter 4: Traffic Laws - Construction Zones",
    url: HB_URL,
  },
  {
    key: "ped-yield-when-turning",
    quote:
      "A driver must yield: * When a pedestrian is in an unmarked crosswalk on " +
      "the driver's side of the roadway, and there are no traffic control " +
      "signals. * When making a turn at any intersection.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Pedestrian Right of Way",
    url: HB_URL,
  },
  {
    key: "park-direction-of-traffic",
    quote: "Vehicles must be parked in the direction in which traffic is moving.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Parallel Parking",
    url: HB_URL,
  },
  {
    key: "stranded-high-capacity",
    quote:
      "For higher-capacity roads, follow these steps if your vehicle breaks down " +
      "or you have an emergency: * If possible, pull over to the right shoulder " +
      "or a safe location as far as possible to avoid passing traffic. * Remain " +
      "in your vehicle and keep your seatbelt on * Activate your hazard lights.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Stranded Motorists' Safety Protocols",
    url: HB_URL,
  },
  {
    key: "dui-revocation-ladder",
    quote:
      "A DUI conviction results in a revocation of driving privileges: * A first " +
      "conviction results in a minimum one-year revocation. * A second conviction " +
      "within 20 years results in a minimum five-year revocation. * A third " +
      "conviction results in a minimum 10-year revocation. * A fourth and " +
      "subsequent conviction results in a lifetime revocation.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - DUI Conviction",
    url: HB_URL,
  },
  {
    key: "rain-hydroplane",
    quote:
      "Slow down to avoid hydroplaning. If your vehicle skids while hydroplaning, " +
      "try to regain control of the vehicle. If that is not possible, release the " +
      "accelerator and ride out the skid.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Rain",
    url: HB_URL,
  },
  {
    key: "sign-exit-ramp",
    quote:
      "Exit Ramp These signs are posted at freeway and interstate exit ramps. " +
      "This sign shows the maximum safe speed at which a vehicle can be driven on " +
      "the ramp.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Warning Signs",
    url: HB_URL,
  },
  {
    key: "lane-no-backing-controlled",
    quote:
      "You may not back up on any shoulder or roadway of any controlled-access " +
      "roadway.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Lane Usage",
    url: HB_URL,
  },
  {
    key: "licence-medical-notify",
    quote:
      "If you develop a medical condition that is likely to cause a loss of " +
      "consciousness or any loss of ability to operate a vehicle safely, you must " +
      "notify the Secretary of State's office within 10 days of becoming aware of " +
      "the condition.",
    source: HB,
    section: "Chapter 1: Illinois Driver's License - Medical Report",
    url: HB_URL,
  },
  {
    key: "lsv-speed",
    quote: "Low-speed vehicles can have a maximum speed of 25 mph.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Low-Speed Vehicles",
    url: HB_URL,
  },
  {
    key: "mark-stop-line",
    quote:
      "A white stop line is painted across a lane at an intersection. The line is " +
      "usually 4 feet before the crosswalk in an urban area. It shows where you " +
      "must stop your vehicle for a stop sign or red light. You must stop your " +
      "vehicle before any part of it crosses the line.",
    source: HB,
    section: "Chapter 10: Pavement Markings - White Stop Line",
    url: HB_URL,
  },
  {
    key: "school-zone-duties",
    quote:
      "When approaching a marked school zone between 6:30 a.m. and 4 p.m., on " +
      "days when school is in operation, and children are present, a driver must " +
      "discontinue wireless/cellphone use (unless using a hands-free device that " +
      "may include the use of a single-sided headset), reduce speed to 20 mph, " +
      "and stop and yield the right of way to any children or adults in the " +
      "crosswalk area.",
    source: HB,
    section: "Chapter 4: Traffic Laws - School Zones",
    url: HB_URL,
  },
  {
    key: "brake-failure",
    quote:
      "Brake Failure - If the brake pedal suddenly sinks to the floor, pump it to " +
      "build pressure. If that does not work, use the emergency or parking brake. " +
      "To slow down, shift your vehicle into a lower gear.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Equipment Failure",
    url: HB_URL,
  },
  {
    key: "power-lines",
    quote:
      "You and your passengers should remain in the vehicle until help arrives. " +
      "If fire is an immediate danger, you must jump clear of the vehicle. When " +
      "jumping clear, do not allow any part of your body to touch the vehicle and " +
      "the ground at the same time.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Electricity",
    url: HB_URL,
  },
  {
    key: "contributing-to-dui",
    quote:
      "It is illegal to allow someone to drive your vehicle if you know that " +
      "person is under the influence.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - Contributing to a DUI",
    url: HB_URL,
  },
  {
    key: "park-disability-striped",
    quote:
      "A striped area on the pavement next to an accessible parking space is part " +
      "of the reserved space. Vehicles may not use this striped area for parking, " +
      "even if they have a parking placard or disability license plates.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Parking for Persons with Disabilities",
    url: HB_URL,
  },
  {
    key: "lane-weaving",
    quote:
      "Weaving from lane to lane to move faster than the traffic flow is " +
      "unlawful.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Lane Usage",
    url: HB_URL,
  },
  {
    key: "speed-max-safe-only",
    quote: "You may drive at the maximum allowable speed only under safe conditions.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Speed Limits",
    url: HB_URL,
  },
  {
    key: "sign-hazmat-placard",
    quote:
      "Hazardous materials placard is a sign that indicates the presence and type " +
      "of hazardous material being transported on roadways.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Hazardous Materials Signs",
    url: HB_URL,
  },
  {
    key: "move-over-no-lane",
    quote: "If a lane change is not possible, reduce speed and proceed with caution.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Emergency/Maintenance Vehicles",
    url: HB_URL,
  },
  {
    key: "suspension-three-violations",
    quote:
      "Traffic Violations - Three traffic violation convictions during a 12-month " +
      "period. (If you are under age 21 at the time of arrest, two traffic " +
      "violations within any 24-month period.)",
    source: HB,
    section: "Chapter 8: Revocation, Suspension, Denial and Cancellation - Suspension",
    url: HB_URL,
  },
  {
    key: "mark-double-yellow",
    quote:
      "Solid double yellow lines are used where traffic is moving in opposite " +
      "directions. Two solid lines mark the center of the roadway and may be " +
      "crossed to make a left turn to or from an alley, private road, driveway, " +
      "or street.",
    source: HB,
    section: "Chapter 10: Pavement Markings - Yellow Center Lines",
    url: HB_URL,
  },
  {
    key: "sign-school-zone-hours",
    quote:
      "The posted speed applies only on school days when children are present " +
      "(usual school hours are from 6:30 a.m. to 4 p.m., but hours may vary), " +
      "where a potential hazard exists because of the children's close proximity " +
      "to traffic, or when a light is flashing.",
    source: HB,
    section: "Chapter 9: Roadway Signs - School Signs",
    url: HB_URL,
  },
  {
    key: "bus-warning-distance",
    quote:
      "A warning will be given by the school bus at least 100 feet (200 feet in " +
      "rural areas) in advance of a stop.",
    source: HB,
    section: "Chapter 4: Traffic Laws - School Buses",
    url: HB_URL,
  },
  {
    key: "park-emergency-200-feet",
    quote:
      "In an emergency, drivers may stop their vehicle and park only if there is " +
      "a clear view of 200 feet in each direction.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Prohibited Stopping, Standing or Parking",
    url: HB_URL,
  },
  {
    key: "distracted-single-earpiece",
    quote:
      "Using a single-sided headset or earpiece with a wireless/cellphone device " +
      "is permitted while driving.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Distracted Driving",
    url: HB_URL,
  },
  {
    key: "row-block-intersection",
    quote:
      "Enter an intersection or drive within a marked crosswalk unless there is " +
      "enough space to allow passage of other vehicles and/or pedestrians.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Right of Way",
    url: HB_URL,
  },
  {
    key: "sign-color-pink",
    quote:
      "PINK may be used for traffic incident signing. These signs alert you to " +
      "possible dangers ahead due to unplanned traffic incidents, such as traffic " +
      "crashes and natural disasters.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Colors of Signs",
    url: HB_URL,
  },
  {
    key: "ilcs-under-19-emergency",
    quote:
      "This Section does not apply to a person under the age of 19 years using a " +
      "wireless telephone for emergency purposes, including, but not limited to, " +
      "an emergency call to a law enforcement agency, health care provider, fire " +
      "department, or other emergency services agency or entity.",
    source: IVC,
    section: "625 ILCS 5/12-610.1(c)",
    url: "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=062500050K12-610.1",
  },
  {
    key: "pass-do-pass-signal",
    quote:
      "It is against the law to flash turn signals as a courtesy or \"do pass\" " +
      "signal to other drivers.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Passing",
    url: HB_URL,
  },
  {
    key: "mark-no-passing-lines",
    quote:
      "When the solid yellow line is on your side of the center line, you may " +
      "cross it to finish passing a vehicle you already started to pass before " +
      "the beginning of the no passing zone.",
    source: HB,
    section: "Chapter 10: Pavement Markings - Yellow No Passing Lines",
    url: HB_URL,
  },
  {
    key: "moto-red-light-120",
    quote:
      "If a red light fails to turn green after 120 seconds, a motorcyclist may " +
      "proceed through an intersection after yielding the right of way to " +
      "oncoming traffic.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Stoplights",
    url: HB_URL,
  },
  {
    key: "suspension-work-zone-crash",
    quote:
      "Causing a Crash in a Construction Zone - Failure to reduce speed or change " +
      "lanes in a construction zone that results in property damage or injury to " +
      "another.",
    source: HB,
    section: "Chapter 8: Revocation, Suspension, Denial and Cancellation - Suspension",
    url: HB_URL,
  },
  {
    key: "being-tailgated",
    quote:
      "If you are being tailgated, move to another lane or slowly pull off the " +
      "road and allow the vehicle to pass.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Following Distances",
    url: HB_URL,
  },
  {
    key: "park-night-lights",
    quote:
      "On a highway between sunset and sunrise unless the front and rear parking " +
      "lights are displayed or the vehicle is within an urban district where " +
      "lights are not required.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Prohibited Stopping, Standing or Parking",
    url: HB_URL,
  },
  {
    key: "mddp-baiid",
    quote:
      "Any eligible Illinois driver who is a first-time DUI offender may apply " +
      "for a Monitoring Device Driving Permit (MDDP). An MDDP requires a Breath " +
      "Alcohol Ignition Interlock Device (BAIID) to be installed on their " +
      "vehicle(s) at an approved installation site as a condition of driving " +
      "relief during a statutory summary suspension period.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - BAIID",
    url: HB_URL,
  },
  {
    key: "funeral-no-cutting",
    quote:
      "Motorists should NOT drive between vehicles in an organized funeral " +
      "procession except when directed by a law enforcement officer.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Funeral Processions",
    url: HB_URL,
  },
  {
    key: "sign-slower-traffic-right",
    quote:
      "This sign is posted for those driving slower than the normal speed of " +
      "traffic on some multilane highways. It tells the slow driver to drive in " +
      "the right lane.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "probationary-licence",
    quote:
      "Probationary License - Allows a driver age 21 and over whose license has " +
      "been suspended for three moving violations in a 12-month period to operate " +
      "a vehicle during the period of suspension.",
    source: HB,
    section: "Chapter 8: Revocation, Suspension, Denial and Cancellation - Special Driving Permits",
    url: HB_URL,
  },
  {
    key: "pass-on-right",
    quote:
      "You may pass on the right (but not on the shoulder except for authorized " +
      "vehicles): * When you have enough room on a two-lane roadway, and when the " +
      "vehicle you are passing is making or is about to make a left turn. * On a " +
      "one-way street or on a roadway with two or more clear lanes in each " +
      "direction. * At an intersection widened for this purpose.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Passing",
    url: HB_URL,
  },
  {
    key: "escooter-rules",
    quote:
      "You must be 18 years of age or older to operate a low-speed electric " +
      "scooter.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Scooters and Mopeds",
    url: HB_URL,
  },
  {
    key: "ilcs-school-zone-phone",
    quote:
      "A person, regardless of age, may not use a wireless telephone at any time " +
      "while operating a motor vehicle on a roadway in a school speed zone " +
      "established under Section 11-605, on a highway in a construction or " +
      "maintenance speed zone established under Section 11-605.1, or within 500 " +
      "feet of an emergency scene.",
    source: IVC,
    section: "625 ILCS 5/12-610.1(e)",
    url: "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=062500050K12-610.1",
  },
  {
    key: "water-crash",
    quote:
      "If your vehicle runs off the roadway into water but does not sink right " +
      "away, try to escape through a window. Because of differences in water " +
      "pressure, you or your passengers may not be able to open the car doors.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Water Crashes",
    url: HB_URL,
  },
  {
    key: "sign-minimum-speed",
    quote:
      "Driving slower than the minimum speed limit is illegal unless necessary " +
      "for safety.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "blood-test-cost",
    quote:
      "If you refuse to take a breath test or if an officer believes that a blood " +
      "test may disclose the presence of drugs, you may be held financially " +
      "liable up to $500 for the costs of the blood tests if found guilty of DUI.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - Implied Consent Law",
    url: HB_URL,
  },
  {
    key: "sign-no-u-turn",
    quote:
      "These openings are only for authorized vehicles, such as police cars, " +
      "ambulances, snow plows, construction/maintenance equipment, and other " +
      "emergency vehicles. Other types of vehicles may not use this opening.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "tow-drawbar",
    quote:
      "Tow one vehicle with another except by a drawbar. In most cases, the " +
      "distance between the two cars should not exceed 15 feet.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Disabled Vehicles",
    url: HB_URL,
  },
  {
    key: "ped-entered-before-change",
    quote: "When a pedestrian enters a crosswalk before the traffic light changes.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Pedestrian Right of Way",
    url: HB_URL,
  },
  {
    key: "insurance-violation-penalty",
    quote:
      "Individuals convicted of mandatory insurance violations will lose their " +
      "driving privileges for a minimum of three months and be required to pay a " +
      "$100 reinstatement fee, with no driving permit available.",
    source: HB,
    section: "Chapter 7: Traffic Violations/Crashes - Safety Responsibility Law",
    url: HB_URL,
  },
  {
    key: "mark-broken-white",
    quote:
      "Broken white lines separate lanes of traffic moving in the same direction. " +
      "Crossing the line is only allowed when changing lanes or turning.",
    source: HB,
    section: "Chapter 10: Pavement Markings - White Lane Lines",
    url: HB_URL,
  },
  {
    key: "licence-validity",
    quote:
      "A driver's license is valid for four years and expires on the driver's " +
      "birthday except in the following cases:",
    source: HB,
    section: "Chapter 1: Illinois Driver's License - Renewal",
    url: HB_URL,
  },
  {
    key: "belt-fitting",
    quote:
      "The lap belt should be worn across the hip bones and should never be " +
      "positioned across the stomach or soft part of the abdomen.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Safety Belt Fitting",
    url: HB_URL,
  },
  {
    key: "thc-limit",
    quote:
      "It is illegal to operate a motor vehicle on Illinois highways with a " +
      "cannabis tetrahydrocannabinol concentration (THC) of either 5 nanograms or " +
      "more per milliliter of whole blood or 10 nanograms or more per milliliter " +
      "of other bodily substance.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - BAC",
    url: HB_URL,
  },
  {
    key: "truck-wide-right",
    quote:
      "Large vehicles make wide right turns and sometimes leave an open space to " +
      "the right just before the turn.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Large Vehicles",
    url: HB_URL,
  },
  {
    key: "crash-first-steps",
    quote:
      "If you are involved in or come upon a traffic crash: * Stop your vehicle " +
      "in a safe, well-lit public place that does not obstruct traffic, if able " +
      "to do so. * Help any injured person if necessary or requested. * Call 911 " +
      "immediately. * Warn other drivers by using emergency flashers and flares " +
      "if available.",
    source: HB,
    section: "Chapter 7: Traffic Violations/Crashes",
    url: HB_URL,
  },
  {
    key: "roundabout-exit-signal",
    quote:
      "Use your vehicle's right turn signal to let other drivers know you are " +
      "exiting the roundabout.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Rotary and Roundabout",
    url: HB_URL,
  },
  {
    key: "row-stop-sign-position",
    quote:
      "After coming to a complete stop at an intersection with a stop sign or " +
      "flashing red signal. If there is no stop line, stop before the crosswalk. " +
      "If there is no crosswalk or stop line, stop at a place where all " +
      "approaching traffic can be seen.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Right of Way",
    url: HB_URL,
  },
  {
    key: "gdl-permit-passengers",
    quote:
      "* Number of passengers is limited to one in the front seat and the number " +
      "of safety belts in the back seat.",
    source: HB,
    section: "Chapter 3: Graduated Driver Licensing Program - Permit Phase",
    url: HB_URL,
  },
  {
    key: "park-hill-no-curb",
    quote:
      "If you park on a street without curbing, turn the wheels toward the side " +
      "of the road on which your vehicle is parked.",
    source: HB,
    section: "Chapter 4: Traffic Laws - Hill Parking",
    url: HB_URL,
  },
  {
    key: "drowsy-driving",
    quote:
      "Drowsy driving can impair your ability to drive safely, even if you do not " +
      "fall asleep.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Drowsy Driving",
    url: HB_URL,
  },
  {
    key: "implied-consent",
    quote:
      "When operating on Illinois roadways, you automatically consent to submit " +
      "to certain tests. These can include breath, blood, urine, or other bodily " +
      "substance tests to determine if you were under the influence.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - Implied Consent Law",
    url: HB_URL,
  },
  {
    key: "bike-two-abreast",
    quote:
      "Bicyclists may ride side by side on the roadway as long as the normal and " +
      "reasonable movement of traffic is not impeded. Riding more than two " +
      "abreast is prohibited except on paths or parts of roadways set aside for " +
      "the exclusive use of bicycles.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Bicycles",
    url: HB_URL,
  },
  {
    key: "crash-leaving-scene",
    quote:
      "In cases where a death or personal injury has occurred, the Secretary of " +
      "State's office is required to revoke the individual's driver's license. In " +
      "cases where damage is more than $1,000, driving privileges will be " +
      "suspended.",
    source: HB,
    section: "Chapter 7: Traffic Violations/Crashes - Leaving the Scene",
    url: HB_URL,
  },
  {
    key: "sign-zipper-merge",
    quote:
      "During times of congestion, it is advised that you use both lanes to " +
      "advance to the lane reduction point and merge at that location, " +
      "alternating turns.",
    source: HB,
    section: "Chapter 9: Roadway Signs - Warning Signs",
    url: HB_URL,
  },
  {
    key: "night-dim-distances",
    quote:
      "Bright lights must be dimmed 500 feet before meeting an oncoming vehicle " +
      "or 300 feet before passing a vehicle.",
    source: HB,
    section: "Chapter 11: Safe Driving Tips - Night Driving",
    url: HB_URL,
  },
  {
    key: "mark-crosswalk-row",
    quote: "Pedestrians in crosswalks have the right of way over vehicles.",
    source: HB,
    section: "Chapter 10: Pavement Markings - White Crosswalk Lines",
    url: HB_URL,
  },
  {
    key: "plates-two-required",
    quote:
      "Illinois law requires all passenger vehicles, trucks, and vans to display " +
      "two plates, one on the front and one on the rear. License plate frames " +
      "should not cover any of the information on the license plates. License " +
      "plate covers are not allowed.",
    source: HB,
    section: "Chapter 13: Owning a Vehicle - License Plate Requirements",
    url: HB_URL,
  },
  {
    key: "equip-horn",
    quote:
      "Horn - Vehicles must have a horn that can be heard from 200 feet. Sirens, " +
      "whistles and bells are allowed only on authorized emergency vehicles.",
    source: HB,
    section: "Chapter 12: Equipment For Safe Driving - Required Equipment",
    url: HB_URL,
  },
  {
    key: "time-only-cure",
    quote:
      "Time is the only way to remove the effects of alcohol. Food, coffee, and " +
      "showers do not speed up the elimination of alcohol from your body.",
    source: HB,
    section: "Chapter 6: Driving Under the Influence - BAC",
    url: HB_URL,
  },
  {
    key: "abandoned-removal",
    quote:
      "Illinois law requires a disabled, unattended, or abandoned vehicle to be " +
      "removed from the roadway as soon as possible.",
    source: HB,
    section: "Chapter 5: Sharing the Road - Disabled Vehicles",
    url: HB_URL,
  },
  {
    key: "crash-school-bus-report",
    quote:
      "A report must be filed if the crash involves a school bus and results in " +
      "any property damage, personal injury, or crash.",
    source: HB,
    section: "Chapter 7: Traffic Violations/Crashes - Crash Reports",
    url: HB_URL,
  },
];
