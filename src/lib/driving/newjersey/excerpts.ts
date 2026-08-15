import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the New Jersey Driver Manual (2025 edition),
// published by the New Jersey Motor Vehicle Commission, plus two njmvc.gov
// pages and the Department of Banking and Insurance's Auto Insurance Buyer's
// Guide for the three rules the manual states only in general terms - the GDL
// restrictions as MVC itself publishes them, the surcharge thresholds, and the
// liability minimums, which the manual leaves entirely to DOBI.
//
// Every quote below was located mechanically in the official source and
// checked as an exact substring before it was written here. Nothing is
// paraphrased. Three normalisations were applied to the extracted text and to
// nothing else: the soft hyphens Adobe InDesign leaves behind when it breaks a
// word across a line are removed and the word rejoined; curly quotes, en
// dashes and em dashes are folded to ASCII; and runs of whitespace, including
// the line breaks the manual's two-column layout inserts mid-sentence, are
// collapsed to single spaces. Where the source states a rule as a stem
// followed by a bulleted list or a table row, the items are run together in
// the order they appear - no words are changed, dropped or reordered. The
// manual's own typographical slips ("A motorist needs not stop", "he/ she")
// are preserved, because a quote that has been tidied up is no longer a quote.
//
// These are quoted rather than summarised because the MVC's 50-question
// knowledge test is written from this wording. Each is kept to the operative
// rule and shown with its source, section and a link back to the official page.

const HB = "New Jersey Driver Manual (2025)";
const HB_URL = "https://www.nj.gov/mvc/pdf/license/drivermanual.pdf";

const GDL = "New Jersey MVC - Graduated Driver License";
const GDL_URL = "https://www.nj.gov/mvc/about/gdlsafety.htm";


const SUR = "New Jersey MVC - Surcharges";
const SUR_URL = "https://www.nj.gov/mvc/license/surcharge.htm";

const INS = "Auto Insurance New Jersey Buyer's Guide (NJ Dept. of Banking and Insurance)";
const INS_URL = "https://www.nj.gov/dobi/division_consumers/pdf/autoguide2026.pdf";

export const newjerseyExcerpts: HandbookExcerpt[] = [
  {
    key: "knowledge-test-pass",
    quote: "80 percent, or 40 of the 50 questions, must have correct answers.",
    source: HB,
    section: "Chapter 2: Test Requirements",
    url: HB_URL,
  },
  {
    key: "vision-20-50",
    quote:
      "Basic License Applicants: 20/50 vision with or without corrective lenses.",
    source: HB,
    section: "Chapter 2: Test Requirements",
    url: HB_URL,
  },
  {
    key: "practice-hours-under-21",
    quote:
      "GDL permit holders under 21 years of age must have a minimum of six " +
      "months supervised practice driving which must include a minimum of 50 " +
      "practice driving hours, including 10 during darkness prior to a road " +
      "test appointment.",
    source: HB,
    section: "Chapter 2: Road Test",
    url: HB_URL,
  },

  // --- Chapter 1: licensing ----------------------------------------------
  {
    key: "license-carry",
    quote:
      "A motorist who operates a motor vehicle in the State of New Jersey " +
      "must carry a valid driver license, a valid probationary license, or a " +
      "validated New Jersey permit.",
    source: HB,
    section: "Chapter 1: Laws Governing Driver Licenses",
    url: HB_URL,
  },
  {
    key: "new-resident-60-days",
    quote:
      "A motorist with a valid out-of-state license who moves to New Jersey " +
      "must apply for a New Jersey license within 60 days (commercial driver " +
      "license (CDL) within 30 days) or before the current license expires, " +
      "whichever is sooner.",
    source: HB,
    section: "Chapter 1: Laws Governing Driver Licenses",
    url: HB_URL,
  },
  {
    key: "license-alteration",
    quote:
      "Altering a driver license or presenting an altered driver license may " +
      "result in the loss of a motorist's driving privilege, a fine up to " +
      "$1,000, and/ or imprisonment.",
    source: HB,
    section: "Chapter 1: Digital Driver License",
    url: HB_URL,
  },
  {
    key: "gdl-curfew",
    quote: "May not operate a motor vehicle after 11:01 p.m. and before 5:00 a.m.",
    source: GDL,
    section: "Graduated Driver License restrictions",
    url: GDL_URL,
  },
  {
    key: "gdl-decal-placement",
    quote:
      "One decal is to be displayed on the top left corner of the rear " +
      "license plate and the other on the top left corner of the front " +
      "license plate.",
    source: HB,
    section: "Chapter 1: GDL Decal",
    url: HB_URL,
  },

  // --- Chapter 3: driver responsibility ----------------------------------
  {
    key: "seat-belt-secondary-rear",
    quote:
      "Under a secondary law, all unbuckled back seat occupants 18 years of " +
      "age and older may be issued a summons if the vehicle is stopped for " +
      "another reason.",
    source: HB,
    section: "Chapter 3: Buckle up - New Jersey's Seat Belt Law",
    url: HB_URL,
  },
  {
    key: "seat-belt-gdl",
    quote:
      "Motorists with GDL permits or probationary licenses must use seat " +
      "belts. Additionally, they must require all passengers seated anywhere " +
      "in the vehicle to use seat belts.",
    source: HB,
    section: "Chapter 3: Buckle up - New Jersey's Seat Belt Law",
    url: HB_URL,
  },
  {
    key: "child-under-two",
    quote:
      "Children under age two and those who weigh less than 30 pounds must " +
      "ride in a federally approved rear-facing child passenger restraint " +
      "system that is equipped with a five-point harness.",
    source: HB,
    section: "Chapter 3: Child Passenger Safety Law",
    url: HB_URL,
  },
  {
    key: "child-under-eight-rear",
    quote: "All children under age eight must be seated in a rear seat.",
    source: HB,
    section: "Chapter 3: Child Passenger Safety Law",
    url: HB_URL,
  },
  {
    key: "children-12-back-seat",
    quote:
      "Always be sure that children 12 years old and younger ride in the " +
      "backseat of the vehicle.",
    source: HB,
    section: "Chapter 3: Air Bags",
    url: HB_URL,
  },
  {
    key: "backup-lights",
    quote:
      "Note: It is against New Jersey law (N.J.S.A. 39:3-52) to have any " +
      "backup lights on while a vehicle is moving forward.",
    source: HB,
    section: "Chapter 3: Car Condition",
    url: HB_URL,
  },
  {
    key: "tire-tread",
    quote:
      "A vehicle should not be driven with tires that have less than 1/16 " +
      "inch of tread (about the edge of a penny).",
    source: HB,
    section: "Chapter 3: Car Condition",
    url: HB_URL,
  },
  {
    key: "snow-ice-fine",
    quote:
      "Any person who violates this law is subject to fines of $25 to $75, " +
      "regardless of whether any snow or ice is dislodged from the vehicle. " +
      "If dislodged snow or ice causes injury or property damage, fines up to " +
      "$1,500 may be assessed.",
    source: HB,
    section: "Chapter 3: Snow and Ice",
    url: HB_URL,
  },
  {
    key: "carbon-monoxide",
    quote:
      "Carbon monoxide (CO) is an odorless, colorless gas that is present in " +
      "a vehicle's exhaust.",
    source: HB,
    section: "Chapter 3: Carbon Monoxide Poisoning",
    url: HB_URL,
  },
  {
    key: "idling-three-minutes",
    quote:
      "New Jersey law requires all motorists to restrict vehicle idling to " +
      "three minutes or less.",
    source: HB,
    section: "Chapter 3: Idling Your Vehicle",
    url: HB_URL,
  },
  {
    key: "steering-9-and-3",
    quote:
      "For normal driving, a motorist should grip the steering wheel by the " +
      "outside rim at the 9 and 3 o'clock positions, keeping his/her thumbs " +
      "along the face of the wheel.",
    source: HB,
    section: "Chapter 3: Steering",
    url: HB_URL,
  },
  {
    key: "mirror-adjustment",
    quote:
      "The outside mirror should be adjusted so that the motorist can see the " +
      "tip of the driver-side front door handle in the lower right of the mirror.",
    source: HB,
    section: "Chapter 3: Starting a Parked Car",
    url: HB_URL,
  },
  {
    key: "reaction-time",
    quote:
      "A vehicle travels 88 feet per second at 60 mph. Most motorists under " +
      "most traffic conditions have a typical reaction time of 3/4 second.",
    source: HB,
    section: "Chapter 3: Stopping Distances",
    url: HB_URL,
  },
  {
    key: "signal-100-feet",
    quote:
      "A motorist should put on the turn signal at least 100 feet before " +
      "turning and be sure to cancel the signal after making a turn.",
    source: HB,
    section: "Chapter 3: Driving Signals",
    url: HB_URL,
  },
  {
    key: "hand-signals",
    quote:
      "Stop or slowing down: hand and arm downward, palm facing to the rear. " +
      "Right turn: hand and arm upward. Left turn: hand and arm straight out.",
    source: HB,
    section: "Chapter 3: Driving Signals",
    url: HB_URL,
  },
  {
    key: "reverse-walking-speed",
    quote:
      "A vehicle should be driven slowly in reverse - typically, walking " +
      "speed (2 to 4 mph).",
    source: HB,
    section: "Chapter 3: Driving in Reverse",
    url: HB_URL,
  },
  {
    key: "park-downhill",
    quote:
      "When parking a vehicle facing downhill: The hand brake should be set, " +
      "and the vehicle's wheels should be turned toward the curb. The vehicle " +
      "should be in park or, with a manual transmission, in reverse.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "parallel-six-inches",
    quote: "The vehicle's tires should be no more than six inches from the curb.",
    source: HB,
    section: "Chapter 3: Parallel Parking",
    url: HB_URL,
  },
  {
    key: "angle-parking-horn",
    quote: "Tap the horn to warn nearby pedestrians.",
    source: HB,
    section: "Chapter 3: Angle Parking",
    url: HB_URL,
  },

  // --- Chapter 4: safe driving rules -------------------------------------
  {
    key: "speed-limits-table",
    quote:
      "25 mph School zones, business, or residential districts 35 mph " +
      "Suburban business and residential districts 50 mph Non-posted rural " +
      "roadways 55 mph Certain state highways (as posted) and interstates 65 " +
      "mph Certain interstate highways (as posted)",
    source: HB,
    section: "Chapter 4: Speed Control",
    url: HB_URL,
  },
  {
    key: "speed-conditions",
    quote:
      "Never drive faster than weather, road, or other conditions safely " +
      "allow, regardless of the posted speed limit.",
    source: HB,
    section: "Chapter 4: Speed Control",
    url: HB_URL,
  },
  {
    key: "double-fines-65",
    quote:
      "Motorists pay double fines for exceeding the 65 mph limit by 10 miles " +
      "per hour or more. Double fines also apply to most other moving " +
      "violations committed in a 65 mph zone.",
    source: HB,
    section: "Chapter 4: Speed Control",
    url: HB_URL,
  },
  {
    key: "slow-driving-illegal",
    quote:
      "When road surfaces and traffic are normal, New Jersey law prohibits " +
      "blocking traffic through slow driving.",
    source: HB,
    section: "Chapter 4: Driving Too Slowly",
    url: HB_URL,
  },
  {
    key: "safe-corridors",
    quote:
      "The Safe Corridors law doubles fines on various state highways for a " +
      "variety of driving offenses, including speeding and aggressive driving.",
    source: HB,
    section: "Chapter 4: Safe Corridors",
    url: HB_URL,
  },
  {
    key: "center-lines",
    quote:
      "Both center lines are solid: No passing allowed. One center line is " +
      "broken: Passing is allowed only on the side with the broken line. Both " +
      "center lines are broken: Passing is allowed on both sides.",
    source: HB,
    section: "Chapter 4: Passing",
    url: HB_URL,
  },
  {
    key: "passing-complete-before-solid",
    quote:
      "Note: All passing must be completed before the center lines are solid " +
      "again.",
    source: HB,
    section: "Chapter 4: Passing",
    url: HB_URL,
  },
  {
    key: "passing-on-right",
    quote:
      "Passing on the right is allowed only on roads with more than one lane " +
      "going in the same direction, if vehicles on the roadway are moving in " +
      "two or more substantially continuous lines or when the motorist ahead " +
      "is making a left turn and there is room to pass.",
    source: HB,
    section: "Chapter 4: Passing",
    url: HB_URL,
  },
  {
    key: "no-pass-situations",
    quote:
      "A motorist should not pass: On a hill or curve or at any time he/she " +
      "cannot see far enough ahead. At a street crossing or intersection. At " +
      "a railroad crossing. On narrow bridges or in underpasses or tunnels.",
    source: HB,
    section: "Chapter 4: Passing",
    url: HB_URL,
  },
  {
    key: "keep-right",
    quote:
      "New Jersey law requires motorists to keep to the right, except when " +
      "passing. Motorists must drive on the right half of the roadway unless " +
      "driving on a one-way street.",
    source: HB,
    section: "Chapter 4: Keeping to the Right",
    url: HB_URL,
  },
  {
    key: "keep-right-multi-lane",
    quote:
      "On a multi-lane roadway, motorists must drive in the lane nearest to " +
      "the right-hand edge or curb of the roadway when the lane is available " +
      "for travel, except when overtaking another vehicle or in preparation " +
      "for a left turn.",
    source: HB,
    section: "Chapter 4: Keeping to the Right",
    url: HB_URL,
  },
  {
    key: "never-pass-stopped-vehicle",
    quote: "Never pass another vehicle that has stopped for a pedestrian.",
    source: HB,
    section: "Chapter 4: Pedestrians in a Crosswalk",
    url: HB_URL,
  },
  {
    key: "multiway-stop-right",
    quote:
      "At a multi-way stop or stop intersection, a motorist must yield to the " +
      "motorist on the right if both motorists get there at the same time.",
    source: HB,
    section: "Chapter 4: Intersections",
    url: HB_URL,
  },
  {
    key: "yield-already-stopped",
    quote:
      "A motorist should also yield to another motorist already stopped at " +
      "the intersection.",
    source: HB,
    section: "Chapter 4: Intersections",
    url: HB_URL,
  },
  {
    key: "left-turn-yield",
    quote:
      "When making a left turn at an intersection, a motorist must yield to " +
      "oncoming traffic and stop for pedestrians within the crosswalk.",
    source: HB,
    section: "Chapter 4: Intersections",
    url: HB_URL,
  },
  {
    key: "stop-within-five-feet",
    quote:
      "A motorist is prohibited from entering or crossing an intersecting " +
      "street marked with a stop sign unless he or she first brings the " +
      "vehicle to a complete stop at a point within five feet of the nearest " +
      "crosswalk or stop line marked upon the pavement at the near side of " +
      "the intersection street.",
    source: HB,
    section: "Chapter 4: Intersections",
    url: HB_URL,
  },
  {
    key: "uncontrolled-left-yields",
    quote:
      "As a rule, the vehicle on the left should yield to the vehicle on the " +
      "right.",
    source: HB,
    section: "Chapter 4: Uncontrolled Intersections",
    url: HB_URL,
  },
  {
    key: "driveway-yield",
    quote:
      "A motorist coming from a private road or driveway must yield to all " +
      "traffic on the main road.",
    source: HB,
    section: "Chapter 4: Uncontrolled Intersections",
    url: HB_URL,
  },
  {
    key: "traffic-circle-no-rules",
    quote:
      "There are no set rules for driving into, around and out of a traffic " +
      "circle in New Jersey. Common sense and caution must always prevail.",
    source: HB,
    section: "Chapter 4: Traffic Circle",
    url: HB_URL,
  },
  {
    key: "traffic-circle-flow",
    quote:
      "In most cases, the circle's historically established traffic flow " +
      "pattern dictates who has the right-of-way. If a major highway flows " +
      "into and through the circle, it usually dominates the traffic flow " +
      "pattern and commands the right-of-way.",
    source: HB,
    section: "Chapter 4: Traffic Circle",
    url: HB_URL,
  },
  {
    key: "acceleration-lane-yield",
    quote:
      "A motorist must yield to traffic already traveling on the main road " +
      "before moving into the proper lane.",
    source: HB,
    section: "Chapter 4: Entering Highways, Parkways, and Turnpikes",
    url: HB_URL,
  },
  {
    key: "missed-exit",
    quote:
      "If a motorist misses an exit ramp on a highway, parkway, or turnpike, " +
      "he/she should go to the next exit.",
    source: HB,
    section: "Chapter 4: Leaving Highways, Parkways, and Turnpikes",
    url: HB_URL,
  },
  {
    key: "no-backing-on-ramp",
    quote: "Never back up on an exit ramp or deceleration lane.",
    source: HB,
    section: "Chapter 4: Leaving Highways, Parkways, and Turnpikes",
    url: HB_URL,
  },
  {
    key: "weave-lane",
    quote:
      "The motorist entering from the entrance ramp must yield the " +
      "right-of-way to the motorist leaving the expressway.",
    source: HB,
    section: "Chapter 4: Weave Lane",
    url: HB_URL,
  },
  {
    key: "disabled-vehicle-actions",
    quote:
      "Pull off as far as possible onto the shoulder or median. Turn on " +
      "emergency flashers. Raise the hood to signal for assistance. Stay in " +
      "the vehicle, keep your seatbelt on and lock the doors.",
    source: HB,
    section: "Chapter 4: Disabled Vehicles",
    url: HB_URL,
  },
  {
    key: "right-on-red",
    quote:
      "Unless a No Turn on Red sign is posted, New Jersey law authorizes a " +
      "right turn on a red light after a motorist comes to a full stop and " +
      "checks for traffic. A motorist must yield to all oncoming traffic and " +
      "pedestrians before turning right at a red light.",
    source: HB,
    section: "Chapter 4: Right Turn on Red",
    url: HB_URL,
  },
  {
    key: "right-turn-position",
    quote:
      "To make a safe right turn, a motorist should approach the intersection " +
      "as far to the right as possible, keeping near to the curb or parked " +
      "vehicles. The motorist should not swing outward or into another lane " +
      "while making the right turn.",
    source: HB,
    section: "Chapter 4: Right Turns",
    url: HB_URL,
  },
  {
    key: "left-turn-one-way",
    quote:
      "Left turn from a one-way road on to a one-way road: Approaching the " +
      "turn in the left lane, the motorist should turn into the left lane of " +
      "the road he/she is entering.",
    source: HB,
    section: "Chapter 4: Left Turns",
    url: HB_URL,
  },
  {
    key: "yellow-after-green",
    quote:
      "When a yellow light follows a green light, a motorist must stop before " +
      "entering the intersection, unless yellow appears when the vehicle is " +
      "too close to stop safely.",
    source: HB,
    section: "Chapter 4: Stopping Regulations",
    url: HB_URL,
  },
  {
    key: "stale-green",
    quote:
      "Be alert for a stale green light; this is a light that has been green " +
      "for some time.",
    source: HB,
    section: "Chapter 4: Stopping Regulations",
    url: HB_URL,
  },
  {
    key: "railroad-15-feet",
    quote:
      "A motorist must stop at least 15 feet from a railroad crossing when " +
      "there are flashing red lights, ringing bells, descending or lowered " +
      "gates, or flag signals.",
    source: HB,
    section: "Chapter 4: Stop at Railroad Crossings",
    url: HB_URL,
  },
  {
    key: "railroad-wait-for-gates",
    quote:
      "A motorist should never cross until the gates have been raised, the " +
      "bells have stopped ringing and the red lights have stopped flashing.",
    source: HB,
    section: "Chapter 4: Stop at Railroad Crossings",
    url: HB_URL,
  },
  {
    key: "school-bus-25-feet",
    quote:
      "State law requires a motorist to stop at least 25 feet away if he/she " +
      "is traveling on a two-lane road or on a multi-lane highway where lanes " +
      "are only separated by lines, or on a privately maintained road.",
    source: HB,
    section: "Chapter 4: Stop for School Buses",
    url: HB_URL,
  },
  {
    key: "school-bus-divided-10",
    quote:
      "When traveling on a dual-lane highway, a motorist should slow to 10 " +
      "mph if on the other side of a safety island or raised median.",
    source: HB,
    section: "Chapter 4: Stop for School Buses",
    url: HB_URL,
  },
  {
    key: "school-bus-in-front-of-school",
    quote:
      "If a school bus has stopped directly in front of a school to pick up " +
      "or let off children or persons with developmental disabilities, a " +
      "motorist may pass from either direction at a speed of no more than 10 " +
      "mph.",
    source: HB,
    section: "Chapter 4: Stop for School Buses",
    url: HB_URL,
  },
  {
    key: "frozen-dessert-15-mph",
    quote: "Stop, and then drive past the truck at a speed of no more than 15 mph.",
    source: HB,
    section: "Chapter 4: Stop for Frozen Dessert Trucks",
    url: HB_URL,
  },
  {
    key: "frozen-dessert-exception",
    quote:
      "A motorist needs not stop on a dual highway if he/she is on the other " +
      "side of a safety island or raised median.",
    source: HB,
    section: "Chapter 4: Stop for Frozen Dessert Trucks",
    url: HB_URL,
  },
  {
    key: "emergency-vehicle-300-feet",
    quote:
      "A motorist should steer to the extreme right of the roadway, stop, and " +
      "wait for the emergency vehicle to pass. Afterward, the motorist should " +
      "keep at least 300 feet behind a signaling emergency vehicle.",
    source: HB,
    section: "Chapter 4: Pull Over and Stop for Emergency Vehicles",
    url: HB_URL,
  },
  {
    key: "fire-vehicle-200-feet",
    quote:
      "A motorist should never park within 200 feet of a fire department " +
      "vehicle in service or drive over a fire hose unless directed to do so " +
      "by a fire, emergency rescue or police official.",
    source: HB,
    section: "Chapter 4: Pull Over and Stop for Emergency Vehicles",
    url: HB_URL,
  },
  {
    key: "move-over-slow-down",
    quote:
      "If a lane change is impossible, prohibited by law or unsafe, the " +
      "motorist must reduce the speed of his/her vehicle to a reasonable and " +
      "proper speed that is lower than the posted speed limit and be prepared " +
      "to stop, if necessary.",
    source: HB,
    section: "Chapter 4: Move Over Law",
    url: HB_URL,
  },
  {
    key: "move-over-penalty",
    quote:
      "Motorists who violate this law face a fine of not less than $100 and " +
      "not more than $500. Additionally, motorists convicted of three or more " +
      "offenses may be subject to motor vehicle penalty points.",
    source: HB,
    section: "Chapter 4: Move Over Law",
    url: HB_URL,
  },
  {
    key: "headlights-when-required",
    quote:
      "Headlights must be used between one-half hour after sunset and " +
      "one-half hour before sunrise. Headlights must also be used when " +
      "visibility is 500 feet or less, when using windshield wipers (during " +
      "rain, snow, and ice) or when encountering fog, mist, smoke, or other " +
      "factors that reduce visibility.",
    source: HB,
    section: "Chapter 4: Using Headlights",
    url: HB_URL,
  },
  {
    key: "high-beam-recovery",
    quote:
      "It can take three to five seconds for a motorist to recover from the " +
      "glare of approaching high-beam headlights. At a speed of 50 mph, a " +
      "motorist will have traveled the length of a football field while being " +
      "unable to see.",
    source: HB,
    section: "Chapter 4: Bright and Dim",
    url: HB_URL,
  },
  {
    key: "parking-lights-zones",
    quote:
      "Parking lights are required on vehicles parked in areas other than " +
      "business or residential zones.",
    source: HB,
    section: "Chapter 4: Other Types of Lights",
    url: HB_URL,
  },
  {
    key: "park-six-inches-curb",
    quote:
      "It is illegal for a vehicle to be parked more than six inches from the " +
      "curb.",
    source: HB,
    section: "Chapter 4: Parking Regulations",
    url: HB_URL,
  },
  {
    key: "no-park-hydrant",
    quote: "Within 10 feet of a fire hydrant.",
    source: HB,
    section: "Chapter 4: Do Not Park",
    url: HB_URL,
  },
  {
    key: "no-park-crosswalk-25",
    quote:
      "Within 25 feet of a crosswalk at an intersection or sideline of a " +
      "street or intersection highway, except at alleys.",
    source: HB,
    section: "Chapter 4: Do Not Park",
    url: HB_URL,
  },
  {
    key: "no-park-railroad-50",
    quote: "Within 50 feet of a railroad crossing. Within 50 feet of a stop sign.",
    source: HB,
    section: "Chapter 4: Do Not Park",
    url: HB_URL,
  },
  {
    key: "no-park-fire-station",
    quote:
      "Within 20 feet of the driveway entrance to any fire station and within " +
      "75 feet on the street opposite a fire station entrance.",
    source: HB,
    section: "Chapter 4: Do Not Park",
    url: HB_URL,
  },
  {
    key: "no-park-safety-zone",
    quote:
      "Between a safety zone for pedestrians and the adjacent curb or within " +
      "20 feet of the end of the safety zone.",
    source: HB,
    section: "Chapter 4: Do Not Park",
    url: HB_URL,
  },
  {
    key: "no-park-interstate",
    quote: "On an interstate highway. In a sidewalk. In a bus stop zone.",
    source: HB,
    section: "Chapter 4: Do Not Park",
    url: HB_URL,
  },
  {
    key: "no-double-parking",
    quote: "Next to another vehicle parked at the curb (double parking).",
    source: HB,
    section: "Chapter 4: Do Not Park",
    url: HB_URL,
  },
  {
    key: "opening-door",
    quote:
      "A motorist opening a door into traffic may be liable for any crash " +
      "with a moving vehicle. It is safer for passengers to exit a parked " +
      "vehicle from the curbside.",
    source: HB,
    section: "Chapter 4: Parking Regulations",
    url: HB_URL,
  },
  {
    key: "cell-phone-primary",
    quote:
      "Using a handheld cellular telephone or texting device is a primary " +
      "offense. Law enforcement may stop and cite a motorist specifically for " +
      "these actions.",
    source: HB,
    section: "Chapter 4: Cellular Telephones",
    url: HB_URL,
  },
  {
    key: "cell-phone-gdl",
    quote:
      "A graduated driver license (GDL) holder may not use a handheld or " +
      "hands-free cellular telephone, or any other handheld electronic " +
      "device, when behind the wheel.",
    source: HB,
    section: "Chapter 4: Cellular Telephones",
    url: HB_URL,
  },
  {
    key: "littering-fine",
    quote:
      "Fines of up to $1,000 may be imposed on motorists found throwing " +
      "\"dangerous objects\" from a vehicle onto a roadway. If the vehicle is " +
      "moving when litter is thrown, the motorist may lose his/her license.",
    source: HB,
    section: "Chapter 4: Littering",
    url: HB_URL,
  },

  // --- Chapter 5: defensive driving --------------------------------------
  {
    key: "one-car-length-rule",
    quote:
      "Although there is no perfect rule for following distance, the rule of " +
      "thumb most often used is to keep one car length back (about 20 feet) " +
      "for each 10 miles per hour of speed.",
    source: HB,
    section: "Chapter 5: One Car Length",
    url: HB_URL,
  },
  {
    key: "three-second-rule",
    quote:
      "If it takes at least three seconds before your vehicle passes the " +
      "object, a motorist should have enough distance for a sudden stop.",
    source: HB,
    section: "Chapter 5: Three Seconds-Plus Rule",
    url: HB_URL,
  },
  {
    key: "bad-weather-four-seconds",
    quote:
      "During bad weather, the time interval should be increased to four or " +
      "more seconds.",
    source: HB,
    section: "Chapter 5: Three Seconds-Plus Rule",
    url: HB_URL,
  },
  {
    key: "snow-six-seconds",
    quote:
      "A good rule on snow-covered roads is to maintain a following distance " +
      "of six seconds or more.",
    source: HB,
    section: "Chapter 5: Reduced Visibility",
    url: HB_URL,
  },
  {
    key: "hydroplaning-35",
    quote:
      "Wet road surfaces can cause tires to hydroplane, or ride up on a film " +
      "of water, starting at about 35 mph, which could cause a motorist to " +
      "lose control of his/her vehicle.",
    source: HB,
    section: "Chapter 5: Hydroplaning",
    url: HB_URL,
  },
  {
    key: "hydroplaning-55",
    quote:
      "After 55 mph, tires may totally leave the road surface. If tires " +
      "totally leave the road surface, braking is virtually impossible, and " +
      "turning is not possible.",
    source: HB,
    section: "Chapter 5: Hydroplaning",
    url: HB_URL,
  },
  {
    key: "studded-tires-dates",
    quote:
      "In New Jersey, motorists may use studded snow tires between November " +
      "15 and April 1.",
    source: HB,
    section: "Chapter 5: Snow and Ice",
    url: HB_URL,
  },
  {
    key: "look-12-seconds",
    quote:
      "A motorist should look at least 12 seconds ahead. This means that " +
      "he/she should be able to see an object far enough ahead so that it " +
      "takes at least 12 seconds to get to it.",
    source: HB,
    section: "Chapter 5: City Driving",
    url: HB_URL,
  },
  {
    key: "work-zone-double-fines",
    quote:
      "In New Jersey, traffic fines are doubled for motor vehicle violations " +
      "committed in roadway construction zones.",
    source: HB,
    section: "Chapter 5: Construction Zones/Work Zones",
    url: HB_URL,
  },
  {
    key: "work-zone-warning",
    quote:
      "These work zones are identified by an advance warning sign or flashing " +
      "lights on a vehicle up to one-half mile before the work area.",
    source: HB,
    section: "Chapter 5: Construction Zones/Work Zones",
    url: HB_URL,
  },
  {
    key: "skid-steer-into",
    quote:
      "To avoid a spin, the motorist should turn in the direction the rear of " +
      "the vehicle is skidding, without over steering. When skidding, a " +
      "motorist should look in the direction that he/she wants to go.",
    source: HB,
    section: "Chapter 5: Skids",
    url: HB_URL,
  },
  {
    key: "emergency-stop-300-feet",
    quote:
      "Day or night put a flare or other warning sign just behind the " +
      "vehicle. Put another warning device at least 300 feet back (about 120 " +
      "paces).",
    source: HB,
    section: "Chapter 5: Emergency Stops",
    url: HB_URL,
  },
  {
    key: "car-fire",
    quote:
      "In case of fire, do not waste time. Get passengers out and away from " +
      "the vehicle at once and call for help. A motorist should never attempt " +
      "to put out a fire.",
    source: HB,
    section: "Chapter 5: Car Fires",
    url: HB_URL,
  },
  {
    key: "plunging-into-water",
    quote:
      "A vehicle with windows and doors closed will float for about three to " +
      "ten minutes.",
    source: HB,
    section: "Chapter 5: Plunging Into Water",
    url: HB_URL,
  },
  {
    key: "escape-through-window",
    quote:
      "It is hard to open a door against water pressure, but a window can be " +
      "rolled down easily. Power windows may short out, so try to open them " +
      "at once.",
    source: HB,
    section: "Chapter 5: Plunging Into Water",
    url: HB_URL,
  },
  {
    key: "stalled-tracks-45-degrees",
    quote:
      "If a train is approaching, run at a 45-degree angle away from the " +
      "vehicle and tracks but in the direction of the train to avoid being " +
      "injured by flying debris.",
    source: HB,
    section: "Chapter 5: Stalling on Railroad Tracks",
    url: HB_URL,
  },
  {
    key: "brake-failure",
    quote:
      "If a vehicle's conventional disc and drum brakes suddenly fail, a " +
      "motorist should shift to a lower gear and pump the brake pedal fast " +
      "and hard several times.",
    source: HB,
    section: "Chapter 5: Brake Failure",
    url: HB_URL,
  },
  {
    key: "tire-blowout",
    quote:
      "The motorist should remove his/her foot from the gas pedal but not use " +
      "the brakes. The vehicle should coast to a stop on its own as the " +
      "motorist pulls to a safe area off the roadway.",
    source: HB,
    section: "Chapter 5: Tire Blowout",
    url: HB_URL,
  },
  {
    key: "choose-what-to-hit",
    quote:
      "Choose to hit something moving in the same direction, rather than " +
      "something that is not moving. Choose to hit something not moving, " +
      "rather than something coming straight on.",
    source: HB,
    section: "Chapter 5: Last-Minute Choices",
    url: HB_URL,
  },
  {
    key: "crash-parked-vehicle",
    quote:
      "If a motorist hits a parked vehicle, the police must be notified. The " +
      "driver should also try to find the owner of the vehicle.",
    source: HB,
    section: "Chapter 5: Parked Vehicle Crash",
    url: HB_URL,
  },
  {
    key: "crash-notify-police",
    quote:
      "New Jersey law requires motorists to notify the police of crashes " +
      "where there is injury, death, or vehicle or property damage.",
    source: HB,
    section: "Chapter 5: Reporting Crashes",
    url: HB_URL,
  },
  {
    key: "crash-report-10-days",
    quote:
      "Send a written report to the MVC within 10 days if no police report is " +
      "filed. A written report is not required if a report is filed by the " +
      "police.",
    source: HB,
    section: "Chapter 5: Reporting Crashes",
    url: HB_URL,
  },

  // --- Chapter 6: drinking, drugs and health -----------------------------
  {
    key: "bac-08",
    quote:
      "In New Jersey, it is illegal for an individual to drive while under " +
      "the influence of intoxicating liquor, narcotic, hallucinogenic or " +
      "habit-producing drugs, or with a BAC of 0.08 percent or higher.",
    source: HB,
    section: "Chapter 6: How Much is Too Much",
    url: HB_URL,
  },
  {
    key: "bac-under-21",
    quote:
      "For individuals younger than 21, it is illegal to drive with a BAC of " +
      "0.01 percent or higher.",
    source: HB,
    section: "Chapter 6: How Much is Too Much",
    url: HB_URL,
  },
  {
    key: "bac-risk-multiples",
    quote:
      "If a motorist has reached a BAC of slightly above 0.05 percent after " +
      "drinking, the risk for causing a motor vehicle crash doubles. The risk " +
      "is six times as great when driving with a BAC of 0.10 percent.",
    source: HB,
    section: "Chapter 6: How Much is Too Much",
    url: HB_URL,
  },
  {
    key: "only-time-sobers",
    quote:
      "The only thing that can make a person sober is time. Alcohol is " +
      "removed slowly by the body.",
    source: HB,
    section: "Chapter 6: Effects of Alcohol",
    url: HB_URL,
  },
  {
    key: "implied-consent",
    quote:
      "New Jersey has an implied consent law. This means that motorists on " +
      "New Jersey roadways have agreed, simply by using New Jersey roadways, " +
      "to submit to a breath test given by law enforcement or hospital staff " +
      "following an arrest for an intoxicated driving offense.",
    source: HB,
    section: "Chapter 7: Breath Test",
    url: HB_URL,
  },
  {
    key: "idrc-detention",
    quote:
      "State law requires that any motorist charged with an alcohol-related " +
      "traffic offense must be detained at an IDRC.",
    source: HB,
    section: "Chapter 7: Intoxicated Driver Resource Center (IDRC)",
    url: HB_URL,
  },
  {
    key: "refusal-surcharge",
    quote:
      "Motorists who refuse to take a breath test in New Jersey are subject " +
      "to a violation surcharge of $1,000 per year for three years.",
    source: HB,
    section: "Chapter 7: Breath Test",
    url: HB_URL,
  },
  {
    key: "interlock-0-05",
    quote:
      "An ignition interlock device has a built-in breathalyzer and prevents " +
      "the vehicle from starting if the motorist's BAC exceeds 0.05%.",
    source: HB,
    section: "Chapter 7: Ignition Interlock Device",
    url: HB_URL,
  },
  {
    key: "drugs-prescription-proof",
    quote:
      "If asked, motorists using prescription drugs must show proof of the " +
      "prescription to law enforcement.",
    source: HB,
    section: "Chapter 6: Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "marijuana-second-most",
    quote:
      "After alcohol, marijuana is the drug most often found with drivers " +
      "involved in crashes.",
    source: HB,
    section: "Chapter 6: Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "eye-check-over-40",
    quote:
      "A motorist should have his/her eyes tested every year or two. If over " +
      "age 40, a motorist should have his/her eyes checked every year.",
    source: HB,
    section: "Chapter 6: Healthy Driving",
    url: HB_URL,
  },
  {
    key: "drinking-while-driving-fine",
    quote:
      "Drinking alcoholic beverages while driving or riding N/A $200 fine, " +
      "first offense; $250 fine, second offense",
    source: HB,
    section: "Chapter 7: Mandatory Penalties",
    url: HB_URL,
  },

  // --- Chapter 7: privileges and penalties -------------------------------
  {
    key: "habitual-offender",
    quote:
      "A habitual offender is a motorist whose driver license has been " +
      "suspended three times in three years.",
    source: HB,
    section: "Chapter 7: The Driving Privilege",
    url: HB_URL,
  },
  {
    key: "surcharge-from-last-violation",
    quote:
      "If you accumulate six or more points within three years from your last " +
      "posted violation, you will receive a $150 surcharge plus $25 for each " +
      "additional point over six.",
    source: SUR,
    section: "Why am I being surcharged?",
    url: SUR_URL,
  },
  {
    key: "points-12-notice",
    quote:
      "Motorists who accumulate between 12 and 14 points in a 24-month period " +
      "or more will receive a Notice of Scheduled Suspension by mail from the " +
      "MVC.",
    source: HB,
    section: "Chapter 7: Driver Improvement Program",
    url: HB_URL,
  },
  {
    key: "points-annual-reduction",
    quote:
      "Up to three points will be subtracted from a motorist's point total " +
      "every year that the motorist goes without a violation or suspension, " +
      "and the motorist's driving privileges remain in good standing, but the " +
      "point total will never be reduced below zero.",
    source: HB,
    section: "Chapter 7: Point System",
    url: HB_URL,
  },
  {
    key: "defensive-driving-five-years",
    quote:
      "The MVC will only recognize a defensive driving course once every five " +
      "years for point reduction.",
    source: HB,
    section: "Chapter 7: Defensive Driving Courses",
    url: HB_URL,
  },
  {
    key: "out-of-state-two-points",
    quote:
      "Two points will be added to a driving record for traffic violations " +
      "committed in other states.",
    source: HB,
    section: "Chapter 7: Point System",
    url: HB_URL,
  },
  {
    key: "probationary-driver-program",
    quote:
      "A motorist begins a two-year probationary driver period after " +
      "receiving a special learner or examination permit. During this " +
      "probationary period, a motorist convicted of two or more moving " +
      "violations totaling four or more points must enroll in the " +
      "Probationary Driver Program",
    source: HB,
    section: "Chapter 7: Probationary Driver Program",
    url: HB_URL,
  },
  {
    key: "points-improper-passing",
    quote: "N.J.S.A. 39:4-86 Improper passing in a no passing zone 4",
    source: HB,
    section: "Chapter 7: Moving Violation Point Chart",
    url: HB_URL,
  },
  {
    key: "points-speeding",
    quote:
      "Exceeding maximum speed 1-14 mph over the limit 2 Exceeding maximum " +
      "speed 15-29 mph over the limit 4 Exceeding maximum speed 30 mph or " +
      "more over the limit 5",
    source: HB,
    section: "Chapter 7: Moving Violation Point Chart",
    url: HB_URL,
  },
  {
    key: "open-container",
    quote:
      "Motorists who carry open or unsealed alcoholic beverage containers or " +
      "unsealed cannabis items in passenger areas of motor vehicles are " +
      "subject to a fine of $200 for a first offense and $250 or 10 days of " +
      "community service for all subsequent offenses.",
    source: HB,
    section: "Chapter 7: Motor Vehicle Violations",
    url: HB_URL,
  },
  {
    key: "hit-and-run",
    quote:
      "A hit-and-run involving bodily injury or death may result in a fine of " +
      "$2,500 to $5,000 and/or 180 days in jail for the motorist. In " +
      "addition, for a first offense, the motorist loses his/her license for " +
      "one year.",
    source: HB,
    section: "Chapter 7: Motor Vehicle Violations",
    url: HB_URL,
  },
  {
    key: "driving-while-suspended",
    quote:
      "First offense: Fine of $500 and up to six months additional license " +
      "and/or registration suspension.",
    source: HB,
    section: "Chapter 7: Driving While Suspended",
    url: HB_URL,
  },
  {
    key: "dui-with-minor",
    quote:
      "A parent or guardian who is convicted of DUI and who, at the time of " +
      "the violation, has a minor (under 18 years old) as a passenger in the " +
      "motor vehicle is guilty of a disorderly person's offense.",
    source: HB,
    section: "Chapter 7: Driving Under the Influence with a Minor",
    url: HB_URL,
  },
  {
    key: "underage-first-offense",
    quote:
      "Underage first offense/BAC 0.01% or more but less than 0.08%. " +
      "(N.J.S.A. 39:4-50.14) 30- to 90-day suspension of driving privilege",
    source: HB,
    section: "Chapter 7: Underage Offense",
    url: HB_URL,
  },

  // --- Chapter 8: sharing the road ---------------------------------------
  {
    key: "unmarked-crosswalk",
    quote:
      "In most cases, pedestrians have the right of way at all intersections. " +
      "There is a crosswalk at every intersection, even if it is not marked " +
      "as such. This is known as an \"unmarked crosswalk.\"",
    source: HB,
    section: "Chapter 8: Pedestrians",
    url: HB_URL,
  },
  {
    key: "stop-and-remain-stopped",
    quote:
      "The driver of a vehicle shall stop and remain stopped to allow a " +
      "pedestrian to cross the roadway within a marked crosswalk, and shall " +
      "yield the right-of-way to a pedestrian crossing the roadway within any " +
      "unmarked crosswalk at an intersection",
    source: HB,
    section: "Chapter 8: Pedestrians",
    url: HB_URL,
  },
  {
    key: "safe-passing-four-feet",
    quote:
      "On a single-lane road, drivers must allow at least a 4-foot safety " +
      "zone when they pass, and (3) If 4 feet is not possible on a section of " +
      "road, drivers must slow to 25 mph and be prepared to stop until they " +
      "can pass safely without endangering those sharing the road.",
    source: HB,
    section: "Chapter 8: Pedestrians",
    url: HB_URL,
  },
  {
    key: "safe-passing-penalty",
    quote:
      "Drivers who do not follow the Safe Passing Law and cause bodily injury " +
      "as defined in N.J.S.A. 2C:11-1 shall be fined $500 and assessed two " +
      "motor vehicle penalty points; if no bodily injury results, the " +
      "violator shall be fined $100 and shall not be assessed any penalty " +
      "points.",
    source: HB,
    section: "Chapter 8: Pedestrians",
    url: HB_URL,
  },
  {
    key: "white-cane-stop",
    quote:
      "A motorist must stop when he/she sees a person with a white or " +
      "metallic \"colored\" cane, or a blind person or instructor with a " +
      "guide dog.",
    source: HB,
    section: "Chapter 8: Visually Challenged Persons",
    url: HB_URL,
  },
  {
    key: "motorcycle-detection",
    quote:
      "A motorist's failure to detect and recognize motorcycles in traffic is " +
      "the most common cause of motorcycle crashes.",
    source: HB,
    section: "Chapter 8: Motorcycles",
    url: HB_URL,
  },
  {
    key: "truck-stopping-bad-weather",
    quote:
      "during bad weather, a truck, or tractor-trailer, or bus can take as " +
      "much as 25 percent longer to stop.",
    source: HB,
    section: "Chapter 8: Trucks, Tractor-Trailers, and Buses",
    url: HB_URL,
  },
  {
    key: "truck-front-no-zone",
    quote:
      "Do not pull in front of a truck when passing until the whole front of " +
      "the truck can be seen in the rearview mirror. Always signal before " +
      "changing lanes. Never pass a truck on the right.",
    source: HB,
    section: "Chapter 8: Front No-Zone",
    url: HB_URL,
  },
  {
    key: "yield-to-buses",
    quote:
      "State law requires all non-emergency vehicles to yield the " +
      "right-of-way to buses re-entering traffic after dropping off or " +
      "picking up bus passengers.",
    source: HB,
    section: "Chapter 8: Yielding to School and Commercial Buses",
    url: HB_URL,
  },
  {
    key: "bus-lane-change-exception",
    quote:
      "However, once the bus is back in the normal flow of traffic, motorists " +
      "are not required to yield the right-of-way to buses changing lanes.",
    source: HB,
    section: "Chapter 8: Yielding to School and Commercial Buses",
    url: HB_URL,
  },
  {
    key: "moped-25-mph",
    quote:
      "Moped drivers may not exceed 25 mph, must follow all traffic signs and " +
      "signals, and drive on the right side of the road with the flow of " +
      "traffic.",
    source: HB,
    section: "Chapter 8: Mopeds",
    url: HB_URL,
  },
  {
    key: "bicycles-same-rights",
    quote:
      "Under New Jersey law, bicyclists, skateboarders, and inline skaters " +
      "have the same rights and responsibilities as motor vehicles.",
    source: HB,
    section: "Chapter 8: Bicycles, Skateboards, and Inline Skates",
    url: HB_URL,
  },
  {
    key: "bicycle-right-turn-yield",
    quote:
      "Motorists signaling a right turn must yield to bicyclists, " +
      "skateboarders, or inline skaters moving through an intersection.",
    source: HB,
    section: "Chapter 8: Bicycles, Skateboards, and Inline Skates",
    url: HB_URL,
  },
  {
    key: "motorized-scooter-illegal",
    quote:
      "Although it is illegal for these vehicles to be driven on any public " +
      "road or sidewalk, except on designated municipal or county property, " +
      "motorists must be especially alert if these types of vehicles are " +
      "present.",
    source: HB,
    section: "Chapter 8: Motorized Scooters",
    url: HB_URL,
  },
  {
    key: "low-speed-vehicle",
    quote:
      "A low-speed vehicle (LSV) is a four-wheeled vehicle with an attainable " +
      "speed of more than 20 mph, but no more than 25 mph on a paved surface.",
    source: HB,
    section: "Chapter 8: Low-Speed Vehicles",
    url: HB_URL,
  },
  {
    key: "trains-right-of-way",
    quote:
      "Trains always have the right of way. Motorists must yield to " +
      "approaching trains.",
    source: HB,
    section: "Chapter 8: Trains",
    url: HB_URL,
  },
  {
    key: "horse-25-mph",
    quote:
      "When approaching or passing a person riding or driving a horse-drawn " +
      "vehicle, motorists are required to reduce their speed to 25 mph or " +
      "less and proceed with caution.",
    source: HB,
    section: "Chapter 8: Horseback Riders & Horse-Drawn Vehicles",
    url: HB_URL,
  },

  // --- Chapter 9: vehicle information ------------------------------------
  {
    key: "register-within-60-days",
    quote:
      "If a motorist moves into this State, the law requires his/her vehicle " +
      "to be titled and registered within 60 days; sooner, if the " +
      "out-of-state registration expires before then.",
    source: HB,
    section: "Chapter 9: Vehicle Title and Registration",
    url: HB_URL,
  },
  {
    key: "inspection-two-years",
    quote:
      "All gasoline-fueled, passenger-registered vehicles, model year 1996 " +
      "and newer, more than five model years old, registered in New Jersey, " +
      "must pass State inspections every two years at a State inspection " +
      "station or a State-licensed private inspection facility (PIF).",
    source: HB,
    section: "Chapter 9: Vehicle Inspection",
    url: HB_URL,
  },

  // --- Chapter 11: signs, signals and markings ---------------------------
  {
    key: "signal-order",
    quote:
      "When traffic signals are hung vertically, the red light is always on " +
      "top. The yellow is in the center. The green light is third in line. If " +
      "there is a green arrow, it is always on the bottom. When the lights " +
      "are horizontal, red is always on the left.",
    source: HB,
    section: "Chapter 11: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "red-light-remain-stopped",
    quote:
      "A motorist must stop before the intersection or crosswalk and remain " +
      "stopped until the light changes to green.",
    source: HB,
    section: "Chapter 11: Red Light",
    url: HB_URL,
  },
  {
    key: "yellow-arrow",
    quote:
      "A yellow arrow means the signal is changing from green to red and " +
      "gives the motorist a chance to stop safely.",
    source: HB,
    section: "Chapter 11: Yellow Light",
    url: HB_URL,
  },
  {
    key: "flashing-yellow",
    quote: "FLASHING YELLOW LIGHT Slow down and proceed with care.",
    source: HB,
    section: "Chapter 11: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "flashing-red",
    quote:
      "FLASHING RED LIGHT Stop. Yield to traffic and pedestrians. Go only " +
      "when safe. Flashing red lights at railroad crossings indicate an " +
      "approaching train.",
    source: HB,
    section: "Chapter 11: Traffic Signals",
    url: HB_URL,
  },
  {
    key: "unlit-signal",
    quote:
      "Stop if a signal does not have any of its bulbs working and no one is " +
      "directing traffic. It is considered a four-way stop sign. Look left " +
      "and right. Yield to traffic coming from the right or left.",
    source: HB,
    section: "Chapter 11: Unlit Signal",
    url: HB_URL,
  },
  {
    key: "green-arrow",
    quote:
      "When shown alone or in combination with the red signal, proceed only " +
      "as shown by the arrow. Be cautious and yield to pedestrians.",
    source: HB,
    section: "Chapter 11: Green Arrow",
    url: HB_URL,
  },
  {
    key: "green-light-yield",
    quote:
      "A motorist should proceed through the intersection. Yield to " +
      "pedestrians and vehicles still in the intersection and when turning " +
      "left or right. Before making a left turn, yield to approaching vehicles.",
    source: HB,
    section: "Chapter 11: Green Light",
    url: HB_URL,
  },
  {
    key: "police-overrule-signals",
    quote:
      "A police officer can overrule traffic signals. Law enforcement orders " +
      "or directions must always be obeyed.",
    source: HB,
    section: "Chapter 11: Driver Safety",
    url: HB_URL,
  },
  {
    key: "sign-shapes-red-yellow",
    quote:
      "Red Octagon 8 STOP signs only Red Triangle 3 YIELD signs Yellow " +
      "Pennant 3 No-passing warning signs Yellow Pentagon 5 School signs",
    source: HB,
    section: "Chapter 11: Sign Colors and Shapes",
    url: HB_URL,
  },
  {
    key: "sign-colors-orange-brown",
    quote:
      "Brown Rectangle 4 Public recreation and scenic guidance Green " +
      "Rectangle 4 Direction guidance Orange Diamond 4 Construction and " +
      "maintenance warning",
    source: HB,
    section: "Chapter 11: Sign Colors and Shapes",
    url: HB_URL,
  },
  {
    key: "sign-colors-blue",
    quote: "Blue Rectangle, square 4 Motorists services and information",
    source: HB,
    section: "Chapter 11: Sign Colors and Shapes",
    url: HB_URL,
  },
  {
    key: "sign-railroad-round",
    quote:
      "White X (NONE) Railroad crossing signs Yellow Round (NONE) Railroad " +
      "crossing advance warning signs Yellow Diamond 4 Roadway hazard and " +
      "railroad crossing warning signs",
    source: HB,
    section: "Chapter 11: Sign Colors and Shapes",
    url: HB_URL,
  },
  {
    key: "advisory-speed-sign",
    quote:
      "When the maximum safe speed around a curve or turn is lower than the " +
      "posted speed limit, an advisory speed sign is used with the proper " +
      "warning sign.",
    source: HB,
    section: "Chapter 11: Sign Colors and Shapes",
    url: HB_URL,
  },
  {
    key: "warning-signs-yellow",
    quote:
      "The signs are yellow and diamond-shaped with a black symbol or word " +
      "message.",
    source: HB,
    section: "Chapter 11: Warning Signs",
    url: HB_URL,
  },
  {
    key: "sign-categories",
    quote:
      "Warning: Warn motorists of hazards ahead that are difficult to see. " +
      "Guidance: Guide motorists to a destination by clearly identifying the " +
      "route. Regulatory: Regulate traffic speed and movement.",
    source: HB,
    section: "Chapter 11: Driver Safety",
    url: HB_URL,
  },
  {
    key: "crossbuck-yield",
    quote:
      "X-shaped railroad crossing sign with black wording on a white " +
      "background means the same as a Yield sign. Motorists must always yield " +
      "the right-of-way to trains.",
    source: HB,
    section: "Chapter 11: Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "road-markings-force-of-law",
    quote: "Road markings have the same force of law as signs or traffic signals.",
    source: HB,
    section: "Chapter 11: Road Markings",
    url: HB_URL,
  },
  {
    key: "yellow-solid-and-dashed",
    quote:
      "Yellow solid and dashed lines Control passing. If the solid yellow " +
      "line is on the motorist's side of the road, do not pass. Pass only if " +
      "the dashed line is on the motorist's side of the road.",
    source: HB,
    section: "Chapter 11: Road Markings",
    url: HB_URL,
  },
  {
    key: "hov-diamonds",
    quote:
      "White diamonds Indicate high occupancy vehicle (HOV) lanes reserved " +
      "for a particular vehicle type or vehicles carrying multiple riders, as " +
      "identified by posted regulatory signs.",
    source: HB,
    section: "Chapter 11: Road Markings",
    url: HB_URL,
  },
  {
    key: "active-passive-warning-devices",
    quote:
      "Pavement markings, signs, and crossbucks are passive warning devices; " +
      "flashing red lights, ringing bells, and lowered gates are active " +
      "warning signs.",
    source: HB,
    section: "Chapter 11: Road Markings",
    url: HB_URL,
  },
  {
    key: "slow-moving-vehicle-sign",
    quote:
      "A fluorescent and reflective orange triangular sign indicates " +
      "slow-moving vehicles, such as farm and construction equipment " +
      "operating on public highways.",
    source: HB,
    section: "Chapter 11: Special Warning Signs",
    url: HB_URL,
  },
  {
    key: "rumble-strips",
    quote:
      "They are meant to get a motorist to drive more slowly. They are almost " +
      "always used with a cautionary sign.",
    source: HB,
    section: "Chapter 11: Rumble Strips",
    url: HB_URL,
  },
  {
    key: "single-white-stop-line",
    quote:
      "A single solid white line across a road at an intersection means that " +
      "a motorist must stop behind the line for a traffic signal or sign.",
    source: HB,
    section: "Chapter 4: Intersections",
    url: HB_URL,
  },
  {
    key: "pedestrian-signal-white",
    quote:
      "Pedestrians facing the signal may cross the roadway in the direction " +
      "of the signal. New Jersey law requires turning motorists to yield to " +
      "pedestrians crossing on this signal and to pedestrians in the crosswalk.",
    source: HB,
    section: "Chapter 11: White, Steady Pedestrian Silhouette/Countdown",
    url: HB_URL,
  },
  {
    key: "pedestrian-signal-raised-palm",
    quote:
      "Pedestrians must not leave the sidewalk or enter the roadway when " +
      "facing the light. Those already in the roadway should quickly go to a " +
      "safe spot.",
    source: HB,
    section: "Chapter 11: Orange, Steady Raised-Palm Symbol",
    url: HB_URL,
  },
  {
    key: "truck-route-signs",
    quote:
      "Green Marks the routes and ramps where trucks are permitted; also " +
      "marks the travel route to services and terminals. Red Marks the routes " +
      "and ramps where trucks are prohibited; also marks the end of " +
      "designated routes.",
    source: HB,
    section: "Chapter 11: Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "insurance-standard-minimums",
    quote:
      "BODILY INJURY LIABILITY As low as: $35,000 per person, $70,000 per " +
      "accident As high as: $250,000 per person, $500,000 per accident",
    source: INS,
    section: "Understanding Your Policy - Standard and Basic Policies",
    url: INS_URL,
  },
];
