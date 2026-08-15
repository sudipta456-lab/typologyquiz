import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Virginia Driver's Manual (DMV 39), published
// by the Virginia Department of Motor Vehicles - 152 of the 181 below - plus
// six dmv.virginia.gov pages and fifteen sections of the Code of Virginia
// (Title 46.2) carrying rules the manual states only as a table, states out of
// date, or does not state at all: the 70 mph interstate limit, the 45 mph
// truck limit on secondary highways, the current liability minimums, the
// juvenile curfew and passenger caps, the move-over rule's classification as
// reckless driving, and the handheld-device fines.
//
// Every quote below was located mechanically in the fetched source and checked
// as an exact substring before it was written here. Nothing is paraphrased.
// Four normalisations were applied to the extracted text and to nothing else:
// curly quotes, en dashes and em dashes are folded to ASCII; a word split by a
// line break is rejoined; runs of whitespace, including the line breaks the
// PDF's two-column layout inserts mid-sentence, are collapsed to single spaces;
// and the section symbol is spelled out. Where the source states a rule as a
// stem followed by a bulleted list, the items are run together in the order
// they appear - no words are changed, dropped or reordered. The manual's own
// typographical errors are preserved as they stand, because a quote that has
// been tidied up is no longer a quote.
//
// These are quoted rather than summarised because DMV writes its 40-question,
// two-part knowledge exam from this wording and says so on the exam page. Each
// is kept to the operative rule and shown with its source, section and a link
// back to the official page.

const HB = "Virginia Driver's Manual (DMV 39)";
const HB_URL = "https://www.dmv.virginia.gov/sites/default/files/forms/dmv39.pdf";

const KNOW_URL = "https://www.dmv.virginia.gov/licenses-ids/exams/know-exam";
const TEEN_URL = "https://www.dmv.virginia.gov/licenses-ids/learners/restrictions";
const ED_URL = "https://www.dmv.virginia.gov/licenses-ids/learners/ed-reqs";
const PTS_URL = "https://www.dmv.virginia.gov/licenses-ids/improvement/points/system";
const INS_URL = "https://www.dmv.virginia.gov/vehicles/insurance-requirements";
const SPEED_FAQ = "https://www.dmv.virginia.gov/safety/programs/speeding/faqs";

const CODE = "Code of Virginia, Title 46.2";
const code = (s: string) => `https://law.lis.virginia.gov/vacode/title46.2/section${s}/`;

export const virginiaExcerpts: HandbookExcerpt[] = [
  // --- Section 1: Testing -------------------------------------------------
  {
    key: "exam-part-counts",
    quote:
      "The knowledge exam consists of two parts: Part one: 10 road sign " +
      "questions All ten questions must be answered correctly Part two: 30 " +
      "general knowledge questions You must correctly answer 24 questions to pass",
    source: "Virginia DMV - The Knowledge Exam",
    section: "Passing the Knowledge Exam",
    url: KNOW_URL,
  },
  {
    key: "three-failures",
    quote:
      "If you fail the knowledge exam three times, you will not be able to " +
      "take it a fourth time until you complete and pass the classroom " +
      "component of driver education.",
    source: HB,
    section: "Section 1: Testing - Two-Part Knowledge Exam",
    url: HB_URL,
  },

  // --- Section 2: Signals ---------------------------------------------------
  {
    key: "officer-overrides",
    quote:
      "Obey all signs and signals unless directed by a police officer; always " +
      "follow the officer's direction.",
    source: HB,
    section: "Section 2: Signals, Signs and Pavement Markings",
    url: HB_URL,
  },
  {
    key: "red-light-stop",
    quote:
      "At a red light, come to a complete stop at the stop line or, if there " +
      "is no stop line, before entering the intersection or before reaching " +
      "the crosswalk.",
    source: HB,
    section: "Section 2: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "right-turn-on-red",
    quote:
      "You may turn right while the traffic signal displays a red light. " +
      "Before turning, you must come to a complete stop.",
    source: HB,
    section: "Section 2: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "no-turn-on-red-sign",
    quote:
      "You may not turn right on red if signs are posted at the intersection " +
      "that read \"No Turn on Red,\" or if a red arrow pointing to the right " +
      "is displayed.",
    source: HB,
    section: "Section 2: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "left-turn-on-red",
    quote:
      "You may turn left at a red light if you are on a one-way street and " +
      "turning left onto another one-way street while the traffic signal " +
      "displays a red light.",
    source: HB,
    section: "Section 2: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "red-arrow-prohibits",
    quote: "Virginia law prohibits right and left turns at red arrow lights.",
    source: HB,
    section: "Section 2: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "flashing-red",
    quote:
      "At a flashing red light, come to a complete stop and yield to oncoming " +
      "vehicles and pedestrians. You may go when the way is clear.",
    source: HB,
    section: "Section 2: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "code-flashing-red-arrow",
    quote:
      "Flashing red arrow indicates that traffic shall stop before entering " +
      "an intersection. After stopping, traffic may cautiously enter the " +
      "intersection to turn in the direction of the signal.",
    source: CODE,
    section: "§ 46.2-833. Traffic lights",
    url: code("46.2-833"),
  },
  {
    key: "yellow-light",
    quote:
      "A yellow light or arrow are cautions warning that the light is about " +
      "to change. If you have not entered the intersection, stop; or, if " +
      "unsafe to stop, cautiously go through it.",
    source: HB,
    section: "Section 2: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "flashing-yellow",
    quote: "A flashing yellow light means slow down and proceed with caution.",
    source: HB,
    section: "Section 2: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "At a flashing yellow arrow, you may turn in the direction of the " +
      "arrow, if the way is clear.",
    source: HB,
    section: "Section 2: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "green-turn-yield",
    quote:
      "If you are turning without a green arrow, you must yield the " +
      "right-of-way to vehicles coming from the other direction and " +
      "pedestrians in the intersection.",
    source: HB,
    section: "Section 2: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "dark-signal",
    quote:
      "When traffic signals are not working because of a power outage or " +
      "other problem and not displaying any lights, you are required to stop, " +
      "proceeding through the intersection as though it were an all-way stop.",
    source: HB,
    section: "Section 2: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "lane-red-x",
    quote: "Never drive in a lane marked with a red X signal.",
    source: HB,
    section: "Section 2: Lane Use Signals",
    url: HB_URL,
  },
  {
    key: "lane-yellow-x",
    quote:
      "These signals mean that you should move out of the lane as soon as " +
      "safely possible.",
    source: HB,
    section: "Section 2: Lane Use Signals",
    url: HB_URL,
  },
  {
    key: "phb-flashing-red",
    quote:
      "Lastly, while the walk signal counts down for the pedestrians, the " +
      "PHB's two red lights alternate flashing, telling the driver that if " +
      "the crosswalk is now clear, they may proceed with caution.",
    source: HB,
    section: "Section 2: Pedestrian Hybrid Beacons",
    url: HB_URL,
  },

  // --- Section 2: Sign colours and shapes ----------------------------------
  {
    key: "sign-red-white",
    quote: "Red used with white conveys stop, yield, do not, and no.",
    source: HB,
    section: "Section 2: Sign Colors",
    url: HB_URL,
  },
  {
    key: "sign-black-white",
    quote: "Black used with white conveys regulatory information.",
    source: HB,
    section: "Section 2: Sign Colors",
    url: HB_URL,
  },
  {
    key: "sign-yellow-black",
    quote: "Yellow used with black conveys a warning.",
    source: HB,
    section: "Section 2: Sign Colors",
    url: HB_URL,
  },
  {
    key: "sign-yellow-green",
    quote:
      "A specialized class of warning signs uses a strong yellow/green color " +
      "with black to advise of school zone, pedestrian and/or bicyclist " +
      "activities.",
    source: HB,
    section: "Section 2: Sign Colors",
    url: HB_URL,
  },
  {
    key: "sign-green-blue-brown",
    quote:
      "The green sign is used to provide destination types of information, " +
      "while the blue sign is used to inform regarding motorists services. " +
      "The brown sign is used to advise of historical or cultural interests " +
      "that might exist in the area.",
    source: HB,
    section: "Section 2: Sign Colors",
    url: HB_URL,
  },
  {
    key: "sign-orange-pink",
    quote:
      "Orange and black and pink and black signs are used to advise and warn " +
      "in construction (orange) and incident (pink) areas.",
    source: HB,
    section: "Section 2: Sign Colors",
    url: HB_URL,
  },
  {
    key: "shape-octagon",
    quote:
      "Octagon (Stop): This eight-sided shape always means stop. You must " +
      "come to a complete stop at the sign, stop line, pedestrian crosswalk " +
      "or curb.",
    source: HB,
    section: "Section 2: Sign Shapes",
    url: HB_URL,
  },
  {
    key: "octagon-tie",
    quote:
      "If you get to the intersection at the same time as other vehicles, the " +
      "driver on the left must yield to the driver on the right.",
    source: HB,
    section: "Section 2: Sign Shapes",
    url: HB_URL,
  },
  {
    key: "shape-triangle",
    quote:
      "Triangle (Yield): You must slow down as you come to the intersection. " +
      "Be prepared to stop.",
    source: HB,
    section: "Section 2: Sign Shapes",
    url: HB_URL,
  },
  {
    key: "shape-pentagon",
    quote:
      "Pentagon (School Zone/School Crossing): This five-sided shape marks " +
      "school zones and warns you about school crossings.",
    source: HB,
    section: "Section 2: Sign Shapes",
    url: HB_URL,
  },
  {
    key: "shape-diamond",
    quote:
      "Diamond (Warning): These signs warn you of special conditions or " +
      "hazards ahead. Slow down and drive with caution. Be ready to stop.",
    source: HB,
    section: "Section 2: Sign Shapes",
    url: HB_URL,
  },
  {
    key: "too-fast-conditions",
    quote:
      "During rain, snow and ice, you may receive a ticket for driving too " +
      "fast for the conditions even if you are driving at or less than the " +
      "posted speed limit.",
    source: HB,
    section: "Section 2: Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "uturn-two-left-turns",
    quote:
      "In Virginia, U-turns are considered as two left turns and are illegal " +
      "if this sign is posted.",
    source: HB,
    section: "Section 2: Regulatory Signs - No Left Turn",
    url: HB_URL,
  },
  {
    key: "do-not-pass-sign",
    quote:
      "Do Not Pass: This sign marks the beginning of a no passing zone. You " +
      "may not pass cars ahead of you in your lane, even if the way is clear.",
    source: HB,
    section: "Section 2: Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "advisory-speed",
    quote:
      "Advisory Speed: This sign indicates the maximum safe speed for a " +
      "highway exit.",
    source: HB,
    section: "Section 2: Warning Signs",
    url: HB_URL,
  },
  {
    key: "buggy-three-feet",
    quote:
      "Horse-Drawn Buggies: Regularly travel in this area. Slow down and " +
      "don't use the horn. State law requires motorists to pass with at least " +
      "three feet of clearance when the way is clear.",
    source: HB,
    section: "Section 2: Warning Signs",
    url: HB_URL,
  },
  {
    key: "merge-sign",
    quote:
      "Merge: Two lanes of traffic moving in the same direction are about to " +
      "become one. Drivers in both lanes are responsible for merging safely.",
    source: HB,
    section: "Section 2: Warning Signs",
    url: HB_URL,
  },
  {
    key: "divided-hwy-ends",
    quote:
      "Divided Highway Ends: The highway ahead no longer has a median or " +
      "divider. Traffic goes in both directions. Keep right.",
    source: HB,
    section: "Section 2: Warning Signs",
    url: HB_URL,
  },
  {
    key: "t-intersection",
    quote:
      "T Intersection: The roadway you are traveling on ends ahead at a stop " +
      "sign. You must turn right or left after yielding to oncoming traffic " +
      "and pedestrians.",
    source: HB,
    section: "Section 2: Warning Signs",
    url: HB_URL,
  },
  {
    key: "roundabout-sign-yield",
    quote:
      "Entering traffic must yield the right-of-way to traffic already in the " +
      "circle and travel in a counter clockwise direction.",
    source: HB,
    section: "Section 2: Warning Signs - Roundabout",
    url: HB_URL,
  },
  {
    key: "low-clearance",
    quote:
      "Low Clearance Sign: The overpass ahead has a low clearance. Do not " +
      "proceed if your vehicle is taller than the height shown on the sign.",
    source: HB,
    section: "Section 2: Warning Signs",
    url: HB_URL,
  },
  {
    key: "crossbuck",
    quote:
      "Railroad Crossbuck: This sign is a warning of a railroad crossing. " +
      "Look, listen, slow down and be prepared to stop for trains or any " +
      "vehicles using the rails.",
    source: HB,
    section: "Section 2: Warning Signs",
    url: HB_URL,
  },
  {
    key: "school-bus-railroad",
    quote:
      "Note: School buses must always stop at railroad crossings, even when " +
      "the lights are not flashing.",
    source: HB,
    section: "Section 2: Warning Signs",
    url: HB_URL,
  },
  {
    key: "stalled-on-tracks",
    quote:
      "If your car stalls on the tracks, don't hesitate. Get out of the car " +
      "right away and run diagonally away from the tracks in the direction of " +
      "the oncoming train.",
    source: HB,
    section: "Section 2: Warning Signs",
    url: HB_URL,
  },
  {
    key: "workzone-fines",
    quote:
      "If you are convicted of exceeding the speed limit in a highway work " +
      "zone, you may be fined up to $500. If you are convicted of using a " +
      "handheld communications device in a highway work zone, you will be " +
      "fined $250.",
    source: HB,
    section: "Section 2: Work Zones",
    url: HB_URL,
  },
  {
    key: "rumble-strips",
    quote: "Rumble strips should be slowly driven over, not swerved around.",
    source: HB,
    section: "Section 2: Work Zones",
    url: HB_URL,
  },

  // --- Section 2: Pavement markings ----------------------------------------
  {
    key: "broken-solid-yellow",
    quote:
      "A broken yellow line alongside a solid yellow line means that passing " +
      "is allowed from the side of the broken line, but not from the side of " +
      "the solid line.",
    source: HB,
    section: "Section 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "double-solid-yellow",
    quote:
      "Double solid yellow lines mark the center of the road and separate " +
      "traffic traveling in two different directions. Passing is not allowed " +
      "in either direction.",
    source: HB,
    section: "Section 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "cross-yellow-for-bikes",
    quote:
      "You may not cross the lines unless you are making a left turn or " +
      "passing pedestrians, bicyclists, and riders of scooters or " +
      "skateboards, when the opposite lane is clear and you can pass safely.",
    source: HB,
    section: "Section 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "broken-white",
    quote:
      "Broken white lines separate lanes of traffic going in the same " +
      "direction. You may change lanes with caution.",
    source: HB,
    section: "Section 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "unmarked-two-lane",
    quote:
      "On an unmarked two-lane road, you may pass a slow moving vehicle on " +
      "the left side if there are no signs prohibiting passing.",
    source: HB,
    section: "Section 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "double-solid-white",
    quote:
      "Double solid white lines separate lanes of traffic going in the same " +
      "direction. Most often they are used to designate special use lane from " +
      "conventional lanes, as when used to separate a High Occupancy Vehicle " +
      "lanes from the other lanes of an expressway. You may not cross these lines.",
    source: HB,
    section: "Section 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "curved-arrow-only",
    quote:
      "If you are in a lane marked with a curved arrow or a curved arrow and " +
      "the word ONLY, you must turn in the direction of the arrow. If your " +
      "lane is marked with both a curved and straight arrow, you may turn or " +
      "go straight.",
    source: HB,
    section: "Section 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "center-lane-150-feet",
    quote:
      "If both sides of the center lane are marked by a solid yellow line and " +
      "a broken yellow line, drivers traveling in either direction may use " +
      "the lane for making left turns. However, they may not travel further " +
      "than 150 feet in this lane.",
    source: HB,
    section: "Section 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "center-lane-passing",
    quote:
      "If the center lane is marked by a single broken yellow line on both " +
      "sides, drivers traveling in either direction may use the center lane " +
      "for passing.",
    source: HB,
    section: "Section 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "code-three-lane-center",
    quote:
      "on a highway which is divided into three lanes, no vehicle shall be " +
      "driven in the center lane except when overtaking and passing another " +
      "vehicle or in preparation for a left turn",
    source: CODE,
    section: "§ 46.2-804. Special regulations applicable on highways laned for traffic",
    url: code("46.2-804"),
  },
  {
    key: "bike-lane-use",
    quote:
      "Drivers should not drive in the bicycle lane except when necessary to " +
      "turn left or right. Before turning, check your mirrors for bicyclists " +
      "that may be behind you and yield to bicycles in the lane.",
    source: HB,
    section: "Section 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "bike-box",
    quote:
      "Drivers must stop for a red traffic signal behind all bicycle boxes, " +
      "not inside the box. Bicycle riders will move into the box in front of " +
      "drivers at the intersection. Right turns on red are not allowed at " +
      "these intersections.",
    source: HB,
    section: "Section 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "painted-curbs",
    quote:
      "Generally, the colors on the curb mean: White -- Stop only long enough " +
      "to pick up or drop off passengers. Yellow -- Stop only long enough to " +
      "load or unload. Stay with your car. Red -- Do not stop, stand or park.",
    source: HB,
    section: "Section 2: Painted Curbs",
    url: HB_URL,
  },

  // --- Section 3: Speed -----------------------------------------------------
  {
    key: "speed-limit-def",
    quote:
      "A speed limit is the maximum legal speed you can travel on a road " +
      "under ideal conditions. You may drive slower than the speed limit, as " +
      "long as you don't impede the normal movement of traffic, but it is " +
      "illegal to drive any faster.",
    source: HB,
    section: "Section 3: Speed Limits",
    url: HB_URL,
  },
  {
    key: "default-speed-limits",
    quote:
      "Unless there is a speed limit sign stating otherwise, the maximum " +
      "speed limit for passenger vehicles and motorcycles is 25 MPH for " +
      "school, business and residential areas; 35 MPH for unpaved roads and " +
      "55 MPH for all other roads.",
    source: HB,
    section: "Section 3: Speed Limits",
    url: HB_URL,
  },
  {
    key: "reckless-20-over",
    quote:
      "According to Virginia law, if you are driving 20 or more miles per " +
      "hour (MPH) above the speed limit, or over 85 MPH, a law enforcement " +
      "officer may charge you with reckless driving, regardless of the speed " +
      "limit.",
    source: HB,
    section: "Section 3: Speed Limits",
    url: HB_URL,
  },
  {
    key: "code-reckless-speed",
    quote:
      "A person is guilty of reckless driving who drives a motor vehicle on " +
      "the highways in the Commonwealth (i) at a speed of 20 miles per hour " +
      "or more in excess of the applicable maximum speed limit or (ii) in " +
      "excess of 85 miles per hour regardless of the applicable maximum speed " +
      "limit.",
    source: CODE,
    section: "§ 46.2-862. Exceeding speed limit",
    url: code("46.2-862"),
  },
  {
    key: "fine-81-85",
    quote:
      "You are subject to an additional $100 fine if convicted of driving " +
      "between 81 and 85 MPH in a 65-MPH zone.",
    source: HB,
    section: "Section 3: Speed Limits",
    url: HB_URL,
  },
  {
    key: "code-radar-sale",
    quote: "It shall be unlawful to sell any such device or mechanism in the Commonwealth.",
    source: CODE,
    section: "§ 46.2-1079. Radar detectors; demerit points not to be awarded",
    url: code("46.2-1079"),
  },
  {
    key: "code-70-mph",
    quote:
      "the maximum speed limit shall be 70 miles per hour where indicated by " +
      "lawfully placed signs, erected subsequent to a traffic engineering " +
      "study and analysis of available and appropriate accident and " +
      "law-enforcement data, on (i) interstate highways; (ii) multilane, " +
      "divided, limited access highways",
    source: CODE,
    section: "§ 46.2-870. Maximum speed limits generally",
    url: code("46.2-870"),
  },
  {
    key: "code-45-trucks",
    quote:
      "The maximum speed limit on all other highways shall be 55 miles per " +
      "hour if the vehicle is a passenger motor vehicle, bus, pickup or panel " +
      "truck, or a motorcycle, but 45 miles per hour on such highways if the " +
      "vehicle is a truck, tractor truck, or combination of vehicles designed " +
      "to transport property",
    source: CODE,
    section: "§ 46.2-870. Maximum speed limits generally",
    url: code("46.2-870"),
  },
  {
    key: "code-school-crossing-25",
    quote:
      "The maximum speed limit shall be 25 miles per hour between portable " +
      "signs, tilt-over signs, or fixed blinking signs placed in or along any " +
      "highway and bearing the word \"school\" or \"school crossing.\"",
    source: CODE,
    section: "§ 46.2-873. Maximum speed limits at school crossings",
    url: code("46.2-873"),
  },
  {
    key: "code-school-signs-30-min",
    quote:
      "Such portable signs, tilt-over signs, or blinking signs shall be in a " +
      "position, or be turned on, for 30 minutes preceding regular school " +
      "hours, for 30 minutes thereafter",
    source: CODE,
    section: "§ 46.2-873. Maximum speed limits at school crossings",
    url: code("46.2-873"),
  },
  {
    key: "code-residence-200-fine",
    quote:
      "shall be unlawful and constitute a traffic infraction punishable by a " +
      "fine of $200, in addition to other penalties provided by law. No " +
      "portion of the fine shall be suspended unless the court orders 20 " +
      "hours of community service.",
    source: CODE,
    section: "§ 46.2-878.2. Maximum speed limits in certain residence districts",
    url: code("46.2-878.2"),
  },
  {
    key: "no-buffer-zone",
    quote:
      "There is no so-called \"buffer zone\" in Virginia when it comes to " +
      "speeding violations.",
    source: "Virginia DMV - Speeding and Aggressive Driving FAQs",
    section: "Speeding and Aggressive Driving FAQs",
    url: SPEED_FAQ,
  },

  // --- Section 3: Stopping and right of way --------------------------------
  {
    key: "stop-behind-lead-car",
    quote:
      "When approaching a stop sign and the car in front of you proceeds, " +
      "stop at the sign and proceed when the way is clear.",
    source: HB,
    section: "Section 3: Stopping",
    url: HB_URL,
  },
  {
    key: "school-bus-stop",
    quote:
      "You must stop for stopped school buses with flashing red lights and an " +
      "extended stop sign when you approach from any direction on a highway, " +
      "private road or school driveway. Stop and remain stopped until all " +
      "persons are clear and the bus moves again.",
    source: HB,
    section: "Section 3: Stopping for School Buses",
    url: HB_URL,
  },
  {
    key: "school-bus-median",
    quote:
      "You do not have to stop if you are traveling in the opposite direction " +
      "on a roadway with a median or barrier dividing the road and the bus is " +
      "on the opposite side of the median or barrier.",
    source: HB,
    section: "Section 3: Stopping for School Buses",
    url: HB_URL,
  },
  {
    key: "stopping-three-factors",
    quote:
      "Three factors determine the distance that it takes to stop your " +
      "vehicle: perception time, reaction distance and braking distance.",
    source: HB,
    section: "Section 3: Stopping Distance",
    url: HB_URL,
  },
  {
    key: "antilock-brakes",
    quote: "Remember, never pump antilock brakes.",
    source: HB,
    section: "Section 3: Antilock Brakes",
    url: HB_URL,
  },
  {
    key: "yield-first-arrive",
    quote:
      "When vehicles from different directions arrive at an intersection at " +
      "different times, the vehicle that arrives first goes first.",
    source: HB,
    section: "Section 3: Yielding the Right-of-Way",
    url: HB_URL,
  },
  {
    key: "yield-left-yields-right",
    quote:
      "When vehicles from different directions arrive at the same time at an " +
      "intersection with no signs or signals, the driver on the left must " +
      "allow the driver on the right to go first.",
    source: HB,
    section: "Section 3: Yielding the Right-of-Way",
    url: HB_URL,
  },
  {
    key: "yield-entrance-ramp",
    quote:
      "Drivers entering an interstate from an entrance ramp must yield the " +
      "right-of-way to traffic already on the highway.",
    source: HB,
    section: "Section 3: Yielding the Right-of-Way",
    url: HB_URL,
  },
  {
    key: "yield-private-road",
    quote:
      "When entering a roadway from a private road or driveway, you must stop " +
      "and yield to all traffic and pedestrians.",
    source: HB,
    section: "Section 3: Yielding the Right-of-Way",
    url: HB_URL,
  },
  {
    key: "funeral-procession",
    quote:
      "You must yield to funeral processions. Do not cut through, join or " +
      "interfere with a funeral procession. Unless led by a police escort, " +
      "the lead vehicle in a funeral procession must obey all traffic signs " +
      "and signals.",
    source: HB,
    section: "Section 3: Yielding the Right-of-Way",
    url: HB_URL,
  },
  {
    key: "military-convoy",
    quote:
      "You must yield to all military convoys. Never cut through or join a " +
      "military convoy.",
    source: HB,
    section: "Section 3: Yielding the Right-of-Way",
    url: HB_URL,
  },
  {
    key: "move-over-stationary",
    quote:
      "When approaching a stationary emergency vehicle or tow truck with " +
      "flashing lights on a highway, proceed with caution and, if reasonable, " +
      "with due regard for safety and traffic conditions, change to a lane " +
      "not next to the vehicle.",
    source: HB,
    section: "Section 3: Yielding to Vehicles with Flashing Lights",
    url: HB_URL,
  },
  {
    key: "code-move-over-reckless",
    quote: "A violation of any provision of this subsection is reckless driving.",
    source: CODE,
    section:
      "§ 46.2-861.1. Drivers to yield right-of-way or reduce speed when approaching stationary vehicles",
    url: code("46.2-861.1"),
  },
  {
    key: "move-over-trash",
    quote:
      "When passing stationary vehicles in the process of trash collection on " +
      "a highway of at least four lanes, change to a lane not next to the " +
      "vehicle, if you can change lanes safely. If on a highway of fewer than " +
      "four lanes or if you are unable to change lanes, slow down to 10 miles " +
      "per hour below the posted speed limit and pass at least two feet to " +
      "the left of the vehicle.",
    source: HB,
    section: "Section 3: Yielding to Vehicles with Flashing Lights",
    url: HB_URL,
  },
  {
    key: "park-500-fire",
    quote:
      "You may not park within 500 feet of where fire trucks or equipment are " +
      "stopped answering an alarm.",
    source: HB,
    section: "Section 3: Yielding to Vehicles with Flashing Lights",
    url: HB_URL,
  },
  {
    key: "follow-emergency-500",
    quote:
      "Never follow an emergency vehicle closer than 500 feet when its lights " +
      "are flashing.",
    source: HB,
    section: "Section 3: Yielding to Vehicles with Flashing Lights",
    url: HB_URL,
  },
  {
    key: "emergency-behind",
    quote:
      "When police, fire and rescue vehicles or ambulances approach you from " +
      "behind your vehicle using a siren, flashing lights or both, you must " +
      "immediately yield the right-of-way. Safely pull over to the right edge " +
      "of the road and stop until the emergency vehicle has passed.",
    source: HB,
    section: "Section 3: Yielding to Vehicles with Flashing Lights",
    url: HB_URL,
  },
  {
    key: "emergency-opposite",
    quote:
      "When emergency vehicles approach you in the opposite lane on an " +
      "undivided highway, you must pull over to the edge of the road and stop " +
      "until the emergency vehicle passes.",
    source: HB,
    section: "Section 3: Yielding to Vehicles with Flashing Lights",
    url: HB_URL,
  },
  {
    key: "not-in-work-zones",
    quote: "These requirements do not apply in highway work zones.",
    source: HB,
    section: "Section 3: Yielding to Vehicles with Flashing Lights",
    url: HB_URL,
  },

  // --- Section 3: Lane use, passing, turning -------------------------------
  {
    key: "left-lane-passing-only",
    quote: "The left lane is for passing only, not cruising.",
    source: HB,
    section: "Section 3: Changing Lanes",
    url: HB_URL,
  },
  {
    key: "code-slow-right-lane",
    quote:
      "Any vehicle proceeding at less than the normal speed of traffic at the " +
      "time and place and under the conditions existing, shall be driven in " +
      "the lane nearest the right edge or right curb of the highway when such " +
      "lane is available for travel except when overtaking and passing " +
      "another vehicle",
    source: CODE,
    section: "§ 46.2-804. Special regulations applicable on highways laned for traffic",
    url: code("46.2-804"),
  },
  {
    key: "pass-no-speeding",
    quote: "it is against the law to exceed the speed limit as you pass.",
    source: HB,
    section: "Section 3: Passing",
    url: HB_URL,
  },
  {
    key: "pass-complete-before-zone",
    quote:
      "complete the pass before you reach a No Passing zone. If you're still " +
      "in the left lane when you reach the zone, you're breaking the law.",
    source: HB,
    section: "Section 3: Passing",
    url: HB_URL,
  },
  {
    key: "pass-on-right",
    quote:
      "you may pass on the right if the vehicle you are passing has signaled " +
      "and is making a left turn.",
    source: HB,
    section: "Section 3: Passing",
    url: HB_URL,
  },
  {
    key: "pass-not-off-pavement",
    quote:
      "You may not pass on the right if you must drive off the pavement or " +
      "main portion of the roadway to get around the other vehicle.",
    source: HB,
    section: "Section 3: Passing",
    url: HB_URL,
  },
  {
    key: "pass-bike-three-feet",
    quote:
      "when approaching or passing a person riding a bicycle, moped, or " +
      "power-assisted bicycle or other device, reduce speed and pass at least " +
      "three feet to the left.",
    source: HB,
    section: "Section 3: Passing",
    url: HB_URL,
  },
  {
    key: "code-bike-change-lanes",
    quote:
      "If the lane of travel is not wide enough to allow the overtaking motor " +
      "vehicle to pass in the manner required in this section while in the " +
      "same lane as the overtaken vehicle, the overtaking vehicle shall " +
      "change lanes.",
    source: CODE,
    section: "§ 46.2-839. Passing bicycle, moped, animal, or animal-drawn vehicle",
    url: code("46.2-839"),
  },
  {
    key: "being-passed",
    quote:
      "When being passed, don't speed up. Maintain a steady speed or slow down.",
    source: HB,
    section: "Section 3: Passing",
    url: HB_URL,
  },
  {
    key: "pass-crosswalk-stopped",
    quote:
      "when a solid line marks the left side of your lane when approaching a " +
      "crosswalk and the vehicle ahead of you or the lane next to you is stopped",
    source: HB,
    section: "Section 3: Passing",
    url: HB_URL,
  },
  {
    key: "two-lefts-passenger-side",
    quote:
      "When two vehicles are approaching each other and signaling to turn " +
      "left, both vehicles should turn in front of each other so that the " +
      "passenger sides of the vehicles are beside each other.",
    source: HB,
    section: "Section 3: Turning",
    url: HB_URL,
  },
  {
    key: "uturn-business-district",
    quote:
      "In business districts, cities and towns, U-turns are allowed only at " +
      "intersections. Never make a U-turn on a highway.",
    source: HB,
    section: "Section 3: U-Turns",
    url: HB_URL,
  },
  {
    key: "signal-100-feet",
    quote:
      "When you plan to turn, signal three or four seconds, 100 feet, ahead " +
      "of your turn.",
    source: HB,
    section: "Section 3: Turn Signals",
    url: HB_URL,
  },
  {
    key: "hand-signals",
    quote:
      "Left Turn Left hand and arm pointing straight out Right Turn Left hand " +
      "and arm pointing upward Slow or Stop Left hand and arm pointing downward",
    source: HB,
    section: "Section 3: Hand Signals",
    url: HB_URL,
  },
  {
    key: "signal-off-after-turn",
    quote:
      "After you complete the turn or lane change, be sure the turn signal " +
      "stops flashing.",
    source: HB,
    section: "Section 3: Turn Signals",
    url: HB_URL,
  },

  // --- Section 3: Space, searching, sharing --------------------------------
  {
    key: "following-distance-table",
    quote:
      "2 seconds Under 35 MPH 3 seconds 35-45 MPH 4 seconds 46-70 MPH * The " +
      "space cushions above do not work if you're speeding over 70.",
    source: HB,
    section: "Section 3: Following Distance",
    url: HB_URL,
  },
  {
    key: "search-20-30-seconds",
    quote:
      "Expert drivers try to focus their eyes 20 to 30 seconds ahead. In the " +
      "city, that equals approximately one block.",
    source: HB,
    section: "Section 3: Searching",
    url: HB_URL,
  },
  {
    key: "look-left-first",
    quote:
      "At any intersection, look to the left first, since cars coming from " +
      "the left will be closer to you.",
    source: HB,
    section: "Section 3: Searching",
    url: HB_URL,
  },
  {
    key: "mirror-10-seconds",
    quote:
      "Use your rearview mirror to check the traffic behind you frequently, " +
      "about every 10 seconds.",
    source: HB,
    section: "Section 3: Searching",
    url: HB_URL,
  },
  {
    key: "pedestrian-cane-dog",
    quote:
      "Drivers are required to come to a full stop for a pedestrian using a " +
      "cane or guide dog, as this indicates blindness or vision impairment.",
    source: HB,
    section: "Section 3: Sharing the Road - Pedestrians",
    url: HB_URL,
  },
  {
    key: "pedestrian-lawfully-crossing",
    quote:
      "Drivers are required to come to a full stop for pedestrians who are " +
      "lawfully crossing a roadway. Failing to stop and causing serious " +
      "bodily damage or death can result in a Class 1 misdemeanor.",
    source: HB,
    section: "Section 3: Sharing the Road - Pedestrians",
    url: HB_URL,
  },
  {
    key: "code-ped-35-intersection",
    quote:
      "At any intersection when the driver is approaching on a highway where " +
      "the speed limit is not more than 35 miles per hour.",
    source: CODE,
    section: "§ 46.2-924. Drivers to stop for pedestrians",
    url: code("46.2-924"),
  },
  {
    key: "code-ped-no-overtake",
    quote:
      "When a vehicle is stopped pursuant to subsection A, the driver of any " +
      "other vehicle approaching from an adjacent lane or from behind the " +
      "stopped vehicle shall not overtake and pass such stopped vehicle.",
    source: CODE,
    section: "§ 46.2-924. Drivers to stop for pedestrians",
    url: code("46.2-924"),
  },
  {
    key: "bike-center-lane",
    quote:
      "Bicyclists are allowed to ride in the center of the lane, when " +
      "necessary, such as when they are about to turn left or when the lane " +
      "is too narrow to share side-by-side with a car.",
    source: HB,
    section: "Section 3: Sharing the Road - Bicycles",
    url: HB_URL,
  },
  {
    key: "bike-where-allowed",
    quote:
      "Bicyclists are legally allowed on all public roads except interstates " +
      "and most freeways (limited access highways).",
    source: HB,
    section: "Section 3: Sharing the Road - Bicycles",
    url: HB_URL,
  },
  {
    key: "motorcycle-lane-use",
    quote:
      "Although a motorcycle is not as wide as the lane, the rider will use " +
      "the entire lane as traffic situations and road conditions change.",
    source: HB,
    section: "Section 3: Sharing the Road - Motorcycles",
    url: HB_URL,
  },
  {
    key: "motorcycle-never-beside",
    quote: "Never drive beside a motorcycle in the same lane.",
    source: HB,
    section: "Section 3: Sharing the Road - Motorcycles",
    url: HB_URL,
  },
  {
    key: "motorcycle-following",
    quote:
      "Allow yourself plenty of braking distance by adding an extra second to " +
      "the following distance rule. In inclement weather, double this distance.",
    source: HB,
    section: "Section 3: Sharing the Road - Motorcycles",
    url: HB_URL,
  },
  {
    key: "low-speed-vehicles",
    quote:
      "Low speed vehicles may be operated on public roads with speed limits " +
      "of 35 MPH or less by licensed drivers or learner's permit holders " +
      "accompanied by a licensed driver.",
    source: HB,
    section: "Section 3: Sharing the Road - Low Speed Vehicles",
    url: HB_URL,
  },
  {
    key: "truck-mirror-rule",
    quote:
      "If you can't see the driver's face in his side view mirror, then he " +
      "can't see you.",
    source: HB,
    section: "Section 3: Sharing the Road - No-Zones",
    url: HB_URL,
  },
  {
    key: "truck-blind-spots",
    quote:
      "In fact, their blind spots may stretch up to 20 feet in front of the " +
      "cab and approximately 200 feet behind the vehicle.",
    source: HB,
    section: "Section 3: Sharing the Road - No-Zones",
    url: HB_URL,
  },
  {
    key: "light-rail-tracks",
    quote:
      "Don't cross train tracks unless you have enough room to cross without " +
      "stopping and can clear the tracks to a safe distance.",
    source: HB,
    section: "Section 3: Sharing the Road - Light Rail",
    url: HB_URL,
  },

  // --- Section 3: Parking, lights, hazards ---------------------------------
  {
    key: "park-one-foot-curb",
    quote: "You may not park more than one foot from the curb.",
    source: HB,
    section: "Section 3: Parking",
    url: HB_URL,
  },
  {
    key: "park-one-way",
    quote:
      "On a two-way street, park on the right side of the road. On a one-way " +
      "road, park on either side.",
    source: HB,
    section: "Section 3: Parking",
    url: HB_URL,
  },
  {
    key: "no-park-distances",
    quote:
      "within 15 feet of a fire hydrant within 20 feet of an intersection in " +
      "a bike lane within 15 feet of the entrance to a fire, ambulance or " +
      "rescue squad station within 500 feet of where fire trucks or equipment " +
      "are stopped answering an alarm within 50 feet of a railroad crossing",
    source: HB,
    section: "Section 3: Parking",
    url: HB_URL,
  },
  {
    key: "no-park-general",
    quote:
      "You may not park: beside another parked vehicle (double parking) on " +
      "crosswalks or sidewalks in front of driveways within areas where " +
      "parking is prohibited by curbs painted yellow or No Parking signs",
    source: HB,
    section: "Section 3: Parking",
    url: HB_URL,
  },
  {
    key: "park-hill-wheels",
    quote:
      "Parking downhill -- with curb Turn front wheels right Parking uphill " +
      "-- with curb Turn front wheels left",
    source: HB,
    section: "Section 3: Parking on a hill",
    url: HB_URL,
  },
  {
    key: "park-hill-no-curb",
    quote:
      "Without a curb: Turn the front wheels so that if the vehicle rolls, " +
      "the rear of the vehicle will roll away from traffic.",
    source: HB,
    section: "Section 3: Parking on a hill",
    url: HB_URL,
  },
  {
    key: "exit-vehicle-check",
    quote:
      "Be aware of other traffic when exiting your vehicle. Look for other " +
      "cars, bicyclists, and pedestrians before opening the door.",
    source: HB,
    section: "Section 3: Parking",
    url: HB_URL,
  },
  {
    key: "headlights-wipers",
    quote:
      "You must use your headlights whenever you use your windshield wipers " +
      "as a result of bad weather.",
    source: HB,
    section: "Section 3: Lights",
    url: HB_URL,
  },
  {
    key: "low-beam-following-200",
    quote:
      "When following, use low-beams whenever you are within 200 feet of the " +
      "vehicle ahead.",
    source: HB,
    section: "Section 3: Night Driving",
    url: HB_URL,
  },
  {
    key: "high-beam-500",
    quote:
      "Use high-beam headlights on highways, unless another vehicle is within " +
      "500 feet coming toward you.",
    source: HB,
    section: "Section 3: Night Driving",
    url: HB_URL,
  },
  {
    key: "first-half-hour-rain",
    quote:
      "When rain begins, during the first half-hour, roads are more likely to " +
      "be slippery due to oil on the road surface mixing with water.",
    source: HB,
    section: "Section 3: Rain",
    url: HB_URL,
  },
  {
    key: "snow-remove",
    quote:
      "Remove snow and ice from your entire car, including the roof, hood and " +
      "rear of the vehicle, before you start driving.",
    source: HB,
    section: "Section 3: Snow",
    url: HB_URL,
  },
  {
    key: "bridges-freeze",
    quote:
      "Watch for ice on bridges and in shady areas. Bridges freeze before " +
      "other road surfaces.",
    source: HB,
    section: "Section 3: Snow",
    url: HB_URL,
  },

  // --- Section 3: Dangerous behaviour, crashes -----------------------------
  {
    key: "aggressive-driving-penalty",
    quote:
      "Remember, if you are convicted of aggressive driving, your license " +
      "could be suspended for ten days or for as long as six months.",
    source: HB,
    section: "Section 3: Aggressive Driving",
    url: HB_URL,
  },
  {
    key: "code-handheld-fines",
    quote:
      "A violation of this section is a traffic infraction punishable, for a " +
      "first offense, by a fine of $125.",
    source: CODE,
    section: "§ 46.2-818.2. Use of handheld personal communications devices",
    url: code("46.2-818.2"),
  },
  {
    key: "code-handheld-workzone",
    quote:
      "If a violation of this section occurs in a highway work zone, it shall " +
      "be punishable by a mandatory fine of $250.",
    source: CODE,
    section: "§ 46.2-818.2. Use of handheld personal communications devices",
    url: code("46.2-818.2"),
  },
  {
    key: "drowsy-avoid-hours",
    quote: "Avoid driving from 10 p.m. to 6 a.m.",
    source: HB,
    section: "Section 3: Drowsy Driving",
    url: HB_URL,
  },
  {
    key: "drowsy-remedies-fail",
    quote:
      "Rolling down a window, chewing gum, turning up the radio, or consuming " +
      "caffeine, energy drinks or other stimulants do not prevent drowsy " +
      "driving and are not reliable methods for staying awake.",
    source: HB,
    section: "Section 3: Drowsy Driving",
    url: HB_URL,
  },
  {
    key: "dui-08",
    quote:
      "Legally, drivers age 21 or older are considered to be driving under " +
      "the influence (DUI) if your blood alcohol content (BAC) is .08 percent " +
      "or higher. If your driving is impaired, you can be convicted of " +
      "driving under the influence with a BAC lower than .08 percent.",
    source: HB,
    section: "Section 3: Drunk and Drugged Driving",
    url: HB_URL,
  },
  {
    key: "under-21-02",
    quote:
      "If under age 21, you can be convicted of illegal consumption of " +
      "alcohol if your BAC is at least .02 but less than .08.",
    source: HB,
    section: "Section 3: Drunk and Drugged Driving",
    url: HB_URL,
  },
  {
    key: "drink-equivalence",
    quote:
      "Twelve ounces of beer is the same as a shot of liquor or a five-ounce " +
      "glass of wine.",
    source: HB,
    section: "Section 3: Drunk and Drugged Driving",
    url: HB_URL,
  },
  {
    key: "only-time-sobers",
    quote:
      "Only time can decrease intoxication. Coffee, cold showers or exercise " +
      "will not sober you up.",
    source: HB,
    section: "Section 3: Drunk and Drugged Driving",
    url: HB_URL,
  },
  {
    key: "marijuana-dui",
    quote:
      "Although the possession of marijuana and marijuana products (over the " +
      "age of 21) is legal, driving under the influence of marijuana is still " +
      "illegal.",
    source: HB,
    section: "Section 3: Drunk and Drugged Driving",
    url: HB_URL,
  },
  {
    key: "crash-must-stop",
    quote:
      "If you are involved in a traffic crash, you must: stop at the scene of " +
      "the crash or as close to the scene as possible without blocking traffic.",
    source: HB,
    section: "Section 3: Traffic Crashes",
    url: HB_URL,
  },
  {
    key: "crash-do-not-move-injured",
    quote:
      "Do not attempt to move an injured person from a wrecked vehicle unless " +
      "you have the necessary medical training or there is an immediate " +
      "danger such as fire.",
    source: HB,
    section: "Section 3: Traffic Crashes",
    url: HB_URL,
  },
  {
    key: "crash-report-police",
    quote:
      "report the crash to the police as quickly as possible. Motor vehicle " +
      "crashes involving property damage, personal injury or death must be " +
      "reported to the police.",
    source: HB,
    section: "Section 3: Traffic Crashes",
    url: HB_URL,
  },
  {
    key: "crash-report-3000",
    quote:
      "Law enforcement officers are required to forward a written crash " +
      "report to DMV when a traffic crash results in injury or the death of " +
      "any person or total property damage is in excess of $3,000.",
    source: HB,
    section: "Section 3: Traffic Crashes",
    url: HB_URL,
  },
  {
    key: "unattended-property",
    quote:
      "You must make a reasonable effort to find the owner of an unattended " +
      "vehicle or other property damaged in a crash. If you cannot locate " +
      "anyone, leave a note that can be found easily at the scene of the crash.",
    source: HB,
    section: "Section 3: Traffic Crashes",
    url: HB_URL,
  },
  {
    key: "code-hit-and-run",
    quote:
      "Any person convicted of a violation of this section is guilty of (i) a " +
      "Class 5 felony if the accident results in injury to or the death of " +
      "any person, or if the accident results in more than $1000 of damage to " +
      "property",
    source: CODE,
    section: "§ 46.2-894. Duty of driver to stop in event of accident",
    url: code("46.2-894"),
  },
  {
    key: "code-move-vehicle",
    quote:
      "If the driver is capable of safely doing so, the vehicle is movable, " +
      "and there are no injuries or deaths resulting from the emergency, " +
      "accident, or breakdown, the driver shall move the vehicle from the " +
      "roadway to prevent obstructing the regular flow of traffic",
    source: CODE,
    section: "§ 46.2-888. Stopping on highways; removing motor vehicle from roadway",
    url: code("46.2-888"),
  },
  {
    key: "code-stop-impede",
    quote:
      "No person shall stop a vehicle in such manner as to impede or render " +
      "dangerous the use of the highway by others, except in the case of an " +
      "emergency, an accident, or a mechanical breakdown.",
    source: CODE,
    section: "§ 46.2-888. Stopping on highways; removing motor vehicle from roadway",
    url: code("46.2-888"),
  },
  {
    key: "code-evasion",
    quote:
      "It shall be unlawful for the driver of any motor vehicle to drive off " +
      "the roadway and onto or across any public or private property in order " +
      "to evade any stop sign, yield sign, traffic light, or other traffic " +
      "control device.",
    source: CODE,
    section: "§ 46.2-833.1. Evasion of traffic control devices",
    url: code("46.2-833.1"),
  },
  {
    key: "deer-do-not-swerve",
    quote:
      "If a collision with a deer or other animal is unavoidable, do not " +
      "swerve. Brake firmly, stay in your lane, and come to a controlled stop.",
    source: HB,
    section: "Section 3: Deer/Large Animal Hazards",
    url: HB_URL,
  },

  // --- Section 4: Belts, airbags, child seats ------------------------------
  {
    key: "seat-belt-all-occupants",
    quote:
      "Under Virginia law, the driver and all passengers, both front and " +
      "rear, must wear safety belts.",
    source: HB,
    section: "Section 4: Seat Belts",
    url: HB_URL,
  },
  {
    key: "shoulder-belt-position",
    quote: "Never wear your shoulder belt behind your back or under your arm.",
    source: HB,
    section: "Section 4: Seat Belts",
    url: HB_URL,
  },
  {
    key: "airbag-ten-inches",
    quote:
      "Move your seat back so that you are at least ten inches from the " +
      "steering wheel.",
    source: HB,
    section: "Section 4: Air Bags",
    url: HB_URL,
  },
  {
    key: "child-seat-under-8",
    quote:
      "All children under age 8 must be properly secured in a child safety " +
      "seat or booster seat when riding in vehicles manufactured after " +
      "January 1, 1968.",
    source: HB,
    section: "Section 4: Child Safety Seats",
    url: HB_URL,
  },
  {
    key: "child-rear-facing-2",
    quote:
      "Children should ride rear facing from birth to 2 years, or as long as " +
      "the safety seat manufacturer allows.",
    source: HB,
    section: "Section 4: Child Safety Seats",
    url: HB_URL,
  },

  // --- Section 5: Penalties -------------------------------------------------
  {
    key: "revocation-def",
    quote:
      "Revocation means that your privilege to drive has been terminated. " +
      "Your driving privilege may be restored if you re-apply for a driver's " +
      "license and show proof of legal presence after the revocation period " +
      "has passed.",
    source: HB,
    section: "Section 5: Penalties",
    url: HB_URL,
  },
  {
    key: "under-18-second-third",
    quote:
      "After your second conviction for a demerit point traffic violation (or " +
      "safety belt/child restraint violation) committed when you were under " +
      "age 18, DMV will suspend your driving privilege for 90 days. Your " +
      "third conviction will result in a revocation of your driving privilege " +
      "for one year or until you reach age 18, whichever is longer.",
    source: HB,
    section: "Section 5: Driver Improvement Program",
    url: HB_URL,
  },
  {
    key: "adult-18-points",
    quote:
      "If you receive 18 demerit points within 12 months or 24 points within " +
      "24 months, DMV will suspend your driving privilege for 90 days and " +
      "require that you complete a driver improvement clinic.",
    source: HB,
    section: "Section 5: Driver Improvement Program",
    url: HB_URL,
  },
  {
    key: "demerit-two-years",
    quote:
      "The demerit points associated with a conviction remain valid for two " +
      "years from the date you commit the offense.",
    source: "Virginia DMV - The Points System",
    section: "Demerit Points",
    url: PTS_URL,
  },
  {
    key: "safe-points-max-five",
    quote: "A driver may accumulate a maximum of five safe driving points.",
    source: "Virginia DMV - The Points System",
    section: "Safe Points",
    url: PTS_URL,
  },
  {
    key: "open-container",
    quote:
      "You may be charged with drinking while operating a motor vehicle if " +
      "you: are stopped by law enforcement and you have an open container of " +
      "alcohol in the passenger area and the contents have been partially " +
      "removed, and show signs that you have been drinking",
    source: HB,
    section: "Section 5: Open Alcohol Containers in Vehicles",
    url: HB_URL,
  },
  {
    key: "dui-juvenile-passenger",
    quote:
      "Conviction of any DUI offense involving a juvenile passenger (age 17 " +
      "or younger) in the vehicle at the time of the offense carries an " +
      "additional mandatory five-day jail term plus all other fines and jail " +
      "sentences.",
    source: HB,
    section: "Section 5: Transporting Children While Under the Influence",
    url: HB_URL,
  },
  {
    key: "implied-consent",
    quote:
      "Under implied consent laws, if you operate a motor vehicle on " +
      "Virginia's public roads, you agree to take a breath test upon request.",
    source: HB,
    section: "Section 5: Alcohol and the Law",
    url: HB_URL,
  },
  {
    key: "dui-three-hours",
    quote:
      "If you are involved in a motor vehicle crash and a law enforcement " +
      "officer has probable cause, you can be arrested for DUI within three " +
      "hours of the crash without a warrant and at any location.",
    source: HB,
    section: "Section 5: Alcohol and the Law",
    url: HB_URL,
  },
  {
    key: "als-seven-days",
    quote:
      "your driving privilege will be automatically suspended: for seven " +
      "days, for a first offense for 60 days or until you go to trial, " +
      "whichever comes first, for a second offense until the trial, for a " +
      "third DUI offense",
    source: HB,
    section: "Section 5: Administrative License Suspension",
    url: HB_URL,
  },
  {
    key: "impound-30-days",
    quote:
      "Your vehicle will be impounded immediately for 30 days if you are " +
      "caught driving after your license has been suspended for an " +
      "alcohol-related offense.",
    source: HB,
    section: "Section 5: Vehicle Impoundment",
    url: HB_URL,
  },
  {
    key: "restitution-1000",
    quote:
      "you may be responsible for paying the cost (up to $1,000) for law " +
      "enforcement, emergency medical services, fire fighters and rescue " +
      "personnel who respond to a crash or incident resulting from your DUI " +
      "violation.",
    source: HB,
    section: "Section 5: Restitution",
    url: HB_URL,
  },
  {
    key: "under-21-penalty",
    quote:
      "the court penalty will include: a suspension of your driving privilege " +
      "for one year from the date of conviction, and a minimum mandatory fine " +
      "of $500, or the requirement that you complete at least 50 hours of " +
      "community service.",
    source: HB,
    section: "Section 5: Alcohol Related Violations, Persons Under Age 21",
    url: HB_URL,
  },
  {
    key: "providing-alcohol",
    quote:
      "If you provide or sell alcoholic beverages to a person under age 21 or " +
      "someone who is intoxicated or ordered by a court to refrain from " +
      "drinking alcohol, you are subject to a fine up to $2,500, mandatory " +
      "suspension of your driver's license for up to one year, and 12 months " +
      "in jail.",
    source: HB,
    section: "Section 5: Alcohol Related Violations, Persons Under Age 21",
    url: HB_URL,
  },

  // --- Section 6 and 7: Licensing, documents, insurance --------------------
  {
    key: "learners-permit-21",
    quote:
      "A learner's permit allows you to operate a motor vehicle when a " +
      "licensed driver at least 21 years of age is seated in the front " +
      "passenger seat.",
    source: HB,
    section: "Section 6: Learner's Permit",
    url: HB_URL,
  },
  {
    key: "code-permit-accompanied",
    quote:
      "when accompanied by any licensed driver 21 years of age or older or by " +
      "his parent or legal guardian, or by a brother, sister, half-brother, " +
      "half-sister, step-brother, or step-sister 18 years of age or older",
    source: CODE,
    section: "§ 46.2-335. Learner's permits; fees; certification required",
    url: code("46.2-335"),
  },
  {
    key: "under-18-permit-9-months",
    quote:
      "you must hold your Virginia learner's permit for at least nine months " +
      "and complete a Commonwealth of Virginia-approved driver education program",
    source: "Virginia DMV - Driver Education",
    section: "Who Is Required to Take Driver Education?",
    url: ED_URL,
  },
  {
    key: "curfew-web",
    quote:
      "If you are under age 18, Virginia law prohibits you from driving " +
      "midnight to 4 a.m. except when driving: to or from a place of business " +
      "where you are employed; to or from an activity that is supervised by " +
      "an adult and is sponsored by a school or by a civic, religious, or " +
      "public organization",
    source: "Virginia DMV - Teen Driving Restrictions",
    section: "Curfew Restrictions",
    url: TEEN_URL,
  },
  {
    key: "permit-one-passenger",
    quote:
      "Learner's permit holders may not carry more than one passenger under " +
      "age 18.",
    source: "Virginia DMV - Teen Driving Restrictions",
    section: "Restrictions on the Number of Passengers",
    url: TEEN_URL,
  },
  {
    key: "carry-license",
    quote:
      "Whenever you drive, you must carry a valid driver's license or " +
      "learner's permit with you.",
    source: HB,
    section: "Section 6: License Types",
    url: HB_URL,
  },
  {
    key: "address-change-30-days",
    quote: "If you move, you are required to notify DMV within 30 days.",
    source: HB,
    section: "Section 7: Address Changes",
    url: HB_URL,
  },
  {
    key: "new-resident-60-days",
    quote:
      "If you are a new Virginia resident and drive, you must obtain a " +
      "Virginia driver's license within 60 days of moving here.",
    source: HB,
    section: "Section 7: New to Virginia",
    url: HB_URL,
  },
  {
    key: "insurance-min-2025",
    quote: "Policies effective on or after Jan. 1, 2025 | $50,000 | $100,000 | $25,000",
    source: "Virginia DMV - Insurance Requirements",
    section: "Liability Insurance Policy Minimum Limits",
    url: INS_URL,
  },
];
