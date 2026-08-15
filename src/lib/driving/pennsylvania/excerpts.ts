import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Pennsylvania Driver's Manual (PUB 95, 4-21),
// published by PennDOT's Bureau of Driver Licensing, plus three PennDOT web
// pages, one Pennsylvania Insurance Department page and four sections of the
// Pennsylvania Vehicle Code for rules the 2021 manual does not state or states
// out of date.
//
// Every quote below was located mechanically in the official source and checked
// as an exact substring before it was written here. Nothing is paraphrased.
// Three normalisations were applied to the extracted text and to nothing else:
// curly quotes, en dashes and em dashes are folded to ASCII; a word split by a
// line break is rejoined; and runs of whitespace, including the line breaks the
// PDF's two-column layout inserts mid-sentence, are collapsed to single spaces.
// Where the source states a rule as a stem followed by a bulleted list, the
// items are run together in the order they appear - no words are changed,
// dropped or reordered. Manual typographical errors are preserved as they
// stand, because a quote that has been tidied up is no longer a quote.
//
// These are quoted rather than summarised because PennDOT's 18-question
// knowledge test is written from this wording. Each is kept to the operative
// rule and shown with its source, section and a link back to the official page.

const HB = "Pennsylvania Driver's Manual (PUB 95, 4-21)";
const HB_URL =
  "https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/dvspubsforms/bdl/bdl-manuals/pa-drivers-manual-non-commercial/english/pub%2095.pdf";

export const pennsylvaniaExcerpts: HandbookExcerpt[] = [
  {
    key: "stop-sign-complete-stop",
    quote:
      "At an intersection with a STOP sign, you must stop completely, check " +
      "for pedestrians and cross traffic to clear the intersection before you " +
      "go again. Slowing down without coming to a full stop is illegal.",
    source: HB,
    section: "Chapter 2: Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "steady-red-light",
    quote:
      "When there is a STEADY RED LIGHT, you must stop before crossing the " +
      "marked stop line or crosswalk. If you do not see any lines, stop " +
      "before entering the intersection.",
    source: HB,
    section: "Chapter 2: Red, Yellow and Green Traffic Lights and Arrows",
    url: HB_URL,
  },
  {
    key: "school-zone-15-mph",
    quote:
      "In school zones, the speed limit is 15 mph when the lights on the " +
      "school zone sign are flashing or during the time period indicated on " +
      "signs.",
    source: HB,
    section: "Chapter 3: Managing Speed",
    url: HB_URL,
  },
  {
    key: "four-way-stop-tie",
    quote:
      "If two vehicles reach the intersection at the same time, the driver on " +
      "the left yields to the driver on the right.",
    source: HB,
    section: "Chapter 2: Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "seat-belt-8-to-18",
    quote:
      "If you are transporting passengers age eight (8) or older but less " +
      "than age 18, they must wear seat belts, no matter where they are " +
      "riding in the vehicle.",
    source: HB,
    section: "Chapter 5: Seat Belt Law",
    url: HB_URL,
  },
  {
    key: "flashing-red-light",
    quote:
      "A flashing red light has the same meaning as a STOP sign. You must " +
      "come to a complete stop.",
    source: HB,
    section: "Chapter 2: Lane Use Control Signals",
    url: HB_URL,
  },
  {
    key: "yield-sign",
    quote:
      "YIELD signs are triangular (3-sided) in shape. When you see this sign, " +
      "you must slow down and check for traffic and give the right-of-way to " +
      "pedestrians and approaching cross traffic. You stop only when it is " +
      "necessary.",
    source: HB,
    section: "Chapter 2: Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "right-turn-on-red",
    quote:
      "You may turn right while the light is red, unless a NO TURN ON RED " +
      "sign is posted at the intersection. You must first stop, check for and " +
      "yield to pedestrians and other traffic.",
    source: HB,
    section: "Chapter 2: Red, Yellow and Green Traffic Lights and Arrows",
    url: HB_URL,
  },
  {
    key: "school-bus-10-feet",
    quote:
      "When the bus stops with its red lights flashing and its stop arm " +
      "extended, you must stop at least 10 feet away from the bus whether you " +
      "are behind it or coming toward it on the same roadway or approaching " +
      "an intersection at which the school bus is stopped.",
    source: HB,
    section: "Chapter 3: School Buses",
    url: HB_URL,
  },
  {
    key: "knowledge-test-18-questions",
    quote:
      "The knowledge test consists of 18 multiple-choice questions. You must " +
      "answer 15 questions correctly to pass the test.",
    source: "PennDOT - Pennsylvania Driver's Manual (online edition)",
    section: "Chapter 1: Testing - Knowledge Test",
    url: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/testing",
  },
  {
    key: "warning-signs-shape",
    quote:
      "Warning signs are usually diamond shaped with black symbols or words " +
      "on a yellow background.",
    source: HB,
    section: "Chapter 2: Warning Signs",
    url: HB_URL,
  },
  {
    key: "four-second-following",
    quote:
      "A 4-second following distance, as shown above in Area 1 of the space " +
      "management diagram, will allow you to steer or brake to avoid a hazard " +
      "safely on the highway, if the pavement is dry.",
    source: HB,
    section: "Chapter 3: Managing Space",
    url: HB_URL,
  },
  {
    key: "under-21-bac-02",
    quote:
      "If you are a driver under age 21 and your blood alcohol concentration " +
      "(BAC) is .02 percent or more, you are considered to be driving under " +
      "the influence (DUI).",
    source: HB,
    section: "Chapter 3: Alcohol and Driving",
    url: HB_URL,
  },
  {
    key: "flashing-yellow-light",
    quote:
      "A flashing yellow light means CAUTION. Slow down, look and proceed " +
      "with care.",
    source: HB,
    section: "Chapter 2: Lane Use Control Signals",
    url: HB_URL,
  },
  {
    key: "no-parking-fire-hydrant",
    quote: "Within 15 feet of a fire hydrant.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "non-functioning-signal",
    quote:
      "A non-functioning traffic signal should be treated as though it were a " +
      "four-way STOP sign.",
    source: HB,
    section: "Chapter 2: Non-functioning Traffic Lights",
    url: HB_URL,
  },
  {
    key: "max-speed-70",
    quote: "The maximum speed limit in Pennsylvania is 70.",
    source: HB,
    section: "Chapter 3: Managing Speed",
    url: HB_URL,
  },
  {
    key: "work-zone-sign-color",
    quote:
      "Work Zone Signs are normally diamond shaped, like warning signs, but " +
      "they are orange with black lettering instead of yellow with black " +
      "lettering.",
    source: HB,
    section: "Chapter 2: Work Zone Signs (work Area and Construction Zone Signs)",
    url: HB_URL,
  },
  {
    key: "yield-left-turn",
    quote:
      "Drivers turning left must yield to oncoming vehicles going straight " +
      "ahead.",
    source: HB,
    section: "Chapter 3: Negotiating Intersections",
    url: HB_URL,
  },
  {
    key: "headlights-with-wipers",
    quote:
      "Anytime your vehicle's wipers are in continuous or intermittent use " +
      "due to weather conditions.",
    source: HB,
    section: "Chapter 3: Driving at Night",
    url: HB_URL,
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "According to the law, you must allow the motorcyclist/moped driver to " +
      "use one (1) complete lane.",
    source: HB,
    section: "Chapter 3: Motorcyclists and Moped Drivers",
    url: HB_URL,
  },
  {
    key: "steady-green-arrow",
    quote:
      "A STEADY GREEN ARROW means you may turn the way the arrow points. When " +
      "you turn during the green arrow phase, your turn is \"protected\" " +
      "because oncoming traffic is stopped by a red light.",
    source: HB,
    section: "Chapter 2: Red, Yellow and Green Traffic Lights and Arrows",
    url: HB_URL,
  },
  {
    key: "pavement-yellow-lines",
    quote: "Yellow lines divide traffic traveling in opposite directions.",
    source: HB,
    section: "Chapter 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "emergency-vehicle-pull-over",
    quote: "Pull over to the curb or side of the road and stop.",
    source: HB,
    section: "Chapter 3: Passengers in an Open-bed Truck",
    url: HB_URL,
  },
  {
    key: "permit-age-16",
    quote: "You cannot apply for your permit before your 16th birthday.",
    source: HB,
    section: "Chapter 1: Applying for a Learner's Permit",
    url: HB_URL,
  },
  {
    key: "school-pentagon-sign",
    quote:
      "This is the only pentagon-shaped sign used on the roadway. It means " +
      "you are approaching a school zone.",
    source: HB,
    section: "Chapter 2: Warning Signs",
    url: HB_URL,
  },
  {
    key: "yield-roundabout",
    quote:
      "Drivers entering a circular intersection (or roundabout) must yield " +
      "the right-of-way to drivers already in the circle.",
    source: HB,
    section: "Chapter 3: Negotiating Intersections",
    url: HB_URL,
  },
  {
    key: "speed-limit-sign",
    quote:
      "A SPEED LIMIT sign indicates the maximum legal speed under ideal " +
      "conditions for the stretch of highway where it is posted.",
    source: HB,
    section: "Chapter 2: Keep Right",
    url: HB_URL,
  },
  {
    key: "parking-12-inches",
    quote:
      "If the street you are on has a curb, park as close to it as you can, " +
      "but no more than 12 inches away. If it has no curb, pull as far off of " +
      "the roadway as possible.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "dui-08-adult",
    quote:
      "In Pennsylvania, if you are of legal drinking age (21 or older), you " +
      "are considered to be driving \"while under the influence\" if your blood " +
      "alcohol level is .08 or higher.",
    source: HB,
    section: "Chapter 4: Crashes",
    url: HB_URL,
  },
  {
    key: "no-passing-pennant",
    quote:
      "This is the only pennant-shaped warning sign. This sign marks the " +
      "beginning of a no passing zone and is placed on the left side of the " +
      "road facing the driver.",
    source: HB,
    section: "Chapter 2: No Passing Zone",
    url: HB_URL,
  },
  {
    key: "yellow-light-already-in-intersection",
    quote:
      "If you are within the intersection or cannot stop safely before " +
      "entering the intersection, continue through carefully.",
    source: HB,
    section: "Chapter 2: Red, Yellow and Green Traffic Lights and Arrows",
    url: HB_URL,
  },
  {
    key: "left-turn-on-red-one-way",
    quote:
      "You may also turn left after you stop at a red light, if you are in " +
      "the left lane and are turning left from a one-way street onto another " +
      "one-way street, unless a sign tells you not to turn.",
    source: HB,
    section: "Chapter 2: Red, Yellow and Green Traffic Lights and Arrows",
    url: HB_URL,
  },
  {
    key: "yield-from-driveway",
    quote:
      "A vehicle entering a public highway from an alley, private road or " +
      "driveway must wait until the main road is clear.",
    source: HB,
    section: "Chapter 3: Negotiating Intersections",
    url: HB_URL,
  },
  {
    key: "school-zone-points",
    quote:
      "Exceeding the speed limit in a school zone will result in three (3) " +
      "points on your driving record, and you will also be fined.",
    source: HB,
    section: "Chapter 2: School Zone Signals",
    url: HB_URL,
  },
  {
    key: "no-parking-crosswalk",
    quote: "Within 20 feet of a crosswalk at an intersection.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "blind-spot-turn-head",
    quote:
      "These areas are blind spots, always check them by turning your head " +
      "before changing lanes.",
    source: HB,
    section: "Chapter 3: Keep a Space Cushion Behind",
    url: HB_URL,
  },
  {
    key: "bicycle-four-feet",
    quote:
      "When passing, you must allow at least four (4) feet between your " +
      "vehicle and a bicycle in order to pass safely.",
    source: HB,
    section: "Chapter 5: Safe Passing Is the Law",
    url: HB_URL,
  },
  {
    key: "steady-red-arrow",
    quote:
      "A STEADY RED ARROW means you must stop and may not turn in the " +
      "direction the arrow points. Wait for a Green Arrow or a Flashing " +
      "Yellow Arrow before you start.",
    source: HB,
    section: "Chapter 2: Red, Yellow and Green Traffic Lights and Arrows",
    url: HB_URL,
  },
  {
    key: "implied-consent",
    quote:
      "If the police arrest you for driving while under the influence of " +
      "alcohol or drugs and you refuse to take one (1) or more chemical tests " +
      "of breath or blood, your driving privilege will be automatically " +
      "suspended for one (1) year.",
    source: HB,
    section: "Chapter 4: Driving Under the Influence of Alcohol or a Controlled Substance",
    url: HB_URL,
  },
  {
    key: "guide-signs",
    quote:
      "Guide signs provide information about intersecting roads, help direct " +
      "you to cities and towns, and show points of interest along the " +
      "highway.",
    source: HB,
    section: "Chapter 2: Guide Signs",
    url: HB_URL,
  },
  {
    key: "broken-vs-solid-lines",
    quote:
      "As a general rule, broken traffic lines can be crossed and solid lines " +
      "cannot, except when making a turn.",
    source: HB,
    section: "Chapter 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "junior-curfew",
    quote:
      "You may not drive between the hours of 11 p.m. and 5 a.m., unless your " +
      "parent, guardian, person in loco parentis, or spouse who is 18 years " +
      "of age or older is with you.",
    source: HB,
    section: "Chapter 1: Pennsylvania Vision Standards",
    url: HB_URL,
  },
  {
    key: "skid-steer-direction",
    quote:
      "If your vehicle starts to skid on a wet or icy road, look and steer in " +
      "the direction you want to go.",
    source: HB,
    section: "Chapter 3: If Your Vehicle Starts to Skid",
    url: HB_URL,
  },
  {
    key: "wet-road-speed-reduction",
    quote:
      "Reduce your speed by 5 to 10 mph on wet roads and increase your " +
      "following distance to five (5) or six (6) seconds.",
    source: HB,
    section: "Chapter 3: Road Conditions",
    url: HB_URL,
  },
  {
    key: "crossbuck-yield",
    quote:
      "You should treat the crossbuck sign as a YIELD sign; slow down and " +
      "prepare to stop, if you see or hear a train approaching.",
    source: HB,
    section: "Chapter 2: Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "snow-plow-no-passing",
    quote:
      "To be safe, you should not attempt to pass a plow, either on the left " +
      "or on the right.",
    source: HB,
    section: "Chapter 3: Snow Plows",
    url: HB_URL,
  },
  {
    key: "no-parking-traffic-control",
    quote:
      "Within 30 feet of any flashing signal, stop sign, yield sign or " +
      "traffic control device located at the side of a roadway.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "turn-signal-distance",
    quote:
      "Under Pennsylvania law, you must always use your turn signals at least " +
      "100 feet before turning, if you are driving less than 35 mph. If you " +
      "are driving 35 mph or more, you must signal at least 300 feet before " +
      "turning.",
    source: HB,
    section: "Chapter 3: Communicating Your Intentions to Other Drivers",
    url: HB_URL,
  },
  {
    key: "yield-blind-pedestrian-always",
    quote:
      "Drivers must always yield to any blind pedestrian carrying a white " +
      "cane or being led by a guide dog.",
    source: HB,
    section: "Chapter 3: Negotiating Intersections",
    url: HB_URL,
  },
  {
    key: "head-restraint-adjust",
    quote:
      "Adjust your head restraint so the top of the head restraint is at " +
      "least as high as the top of your ears.",
    source: HB,
    section: "Chapter 3: Vehicle Checks: Preparing to Drive",
    url: HB_URL,
  },
  {
    key: "lane-red-x",
    quote:
      "A steady red \"X\" over a lane means you are not allowed to use the " +
      "traffic lane.",
    source: HB,
    section: "Chapter 2: Lane Use Control Signals",
    url: HB_URL,
  },
  {
    key: "underage-possession",
    quote:
      "If you are under age 21, it is against the law to buy alcohol, consume " +
      "alcohol, have alcohol in your possession or have alcohol in the " +
      "vehicle you are driving.",
    source: HB,
    section: "Chapter 4: Zero Tolerance Law (under 21 Dui)",
    url: HB_URL,
  },
  {
    key: "divided-highway-sign",
    quote:
      "The divided highway is really two (2), one-way roadways that are " +
      "separated by a median or a guide rail. At the first roadway, you can " +
      "only turn right, and at the second roadway, you can only turn left.",
    source: HB,
    section: "Chapter 2: Divided Highway",
    url: HB_URL,
  },
  {
    key: "skill-building-65-hours",
    quote:
      "If you are under the age of 18, you are required to complete at least " +
      "65 hours of behind-the-wheel skill-building including no less than 10 " +
      "hours of nighttime driving and five (5) hours of bad weather driving " +
      "before taking your Road Test.",
    source: HB,
    section: "Chapter 1: Applying for a Learner's Permit",
    url: HB_URL,
  },
  {
    key: "hydroplaning-35-mph",
    quote:
      "You can hydroplane at speeds as low as 35 mph, when water is only 1/10 " +
      "of an inch deep.",
    source: HB,
    section: "Chapter 3: Road Conditions",
    url: HB_URL,
  },
  {
    key: "crash-call-police-tow",
    quote: "Call the police, if any vehicle needs to be towed.",
    source: HB,
    section: "Chapter 4: Crashes",
    url: HB_URL,
  },
  {
    key: "u-turn-500-feet",
    quote:
      "In choosing a place to make a U-turn, make sure drivers coming from " +
      "all directions are at least 500 feet away from you, and they can see " +
      "you clearly.",
    source: HB,
    section: "Chapter 3: U-turns",
    url: HB_URL,
  },
  {
    key: "truck-mirrors-blind-spot",
    quote:
      "When following a truck or bus, if you cannot see the side mirrors of " +
      "the vehicle in front of you, the driver of the large vehicle cannot " +
      "see you.",
    source: HB,
    section: "Chapter 3: Following a Truck",
    url: HB_URL,
  },
  {
    key: "parking-downhill-wheels",
    quote:
      "When parking your vehicle on a downhill with or without a curb, you " +
      "should turn your steering wheel so your wheels are completely to the " +
      "right.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "A FLASHING YELLOW ARROW means you may turn in the direction of the " +
      "arrow with caution, however, you must first yield to oncoming traffic " +
      "and pedestrians.",
    source: HB,
    section: "Chapter 2: Lane Use Control Signals",
    url: HB_URL,
  },
  {
    key: "junior-passengers-first-six-months",
    quote:
      "You may not carry more than one (1) passenger under the age of 18 who " +
      "is not an immediate family member unless a parent, guardian, person in " +
      "loco parentis, or spouse who is 18 years of age or older is in the " +
      "vehicle with you.",
    source: HB,
    section: "Chapter 1: Junior Driver's License Information",
    url: HB_URL,
  },
  {
    key: "move-over-slow-20-below",
    quote:
      "If drivers cannot move over because of traffic or other conditions, " +
      "they must reduce their speed to at least 20 miles per hour below the " +
      "posted speed limit.",
    source: HB,
    section: "Chapter 3: Move Over Law",
    url: HB_URL,
  },
  {
    key: "school-bus-divided-highway",
    quote:
      "If you are approaching a school bus that is stopped with its red " +
      "lights flashing and stop arm extended and you are driving on the " +
      "opposite side of a divided highway, (i.e. concrete/metal barriers, " +
      "guide rails or trees/rocks/streams/grass median), you do not have to " +
      "stop.",
    source: HB,
    section: "Chapter 3: School Buses",
    url: HB_URL,
  },
  {
    key: "work-zone-headlights-all-posted",
    quote:
      "All motorists are required to travel with their headlights turned on " +
      "in all posted work zones, not just active work zones.",
    source: "PennDOT - Work Zone Safety",
    section: "Laws - Posted and Active Work Zones",
    url: "https://www.pa.gov/agencies/penndot/traveling-in-pa/safety/traffic-safety-driver-topics/work-zone-safety",
  },
  {
    key: "advisory-speed-sign",
    quote: "This sign may be used with any diamond-shaped warning sign.",
    source: HB,
    section: "Chapter 2: Advisory Speed Signs",
    url: HB_URL,
  },
  {
    key: "fatigue-24-hours",
    quote:
      "Being awake for 24 hours in a row impairs your driving as much as " +
      "having a blood alcohol level of .10 percent.",
    source: HB,
    section: "Chapter 3: Lack of Sleep",
    url: HB_URL,
  },
  {
    key: "no-parking-railroad",
    quote: "Within 50 feet of the nearest rail at a railroad crossing.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "weaving-lane-yield",
    quote:
      "If you are the driver entering the highway, you must yield to the " +
      "exiting driver.",
    source: HB,
    section: "Chapter 3: Entering Highways",
    url: HB_URL,
  },
  {
    key: "look-ahead-12-15-seconds",
    quote:
      "You should be able to identify problem situations 12 to 15 seconds " +
      "ahead - about one block in the city, or a quarter of a mile at highway " +
      "speeds.",
    source: HB,
    section: "Chapter 3: Looking Ahead",
    url: HB_URL,
  },
  {
    key: "no-passing-100-feet-intersection",
    quote:
      "You are within 100 feet of or are crossing any intersection or " +
      "railroad grade crossing, unless an official traffic control device " +
      "says you may.",
    source: HB,
    section: "Chapter 3: You May Not Pass If:",
    url: HB_URL,
  },
  {
    key: "points-six-first-exam",
    quote:
      "When any driving record reaches 6 or more points for the first time, " +
      "the driver will receive a written notice to take a special written " +
      "point examination or attend a Driver Improvement School.",
    source: "PennDOT - The Pennsylvania Point System (fact sheet, March 2024)",
    section: "Corrective Action and Suspension",
    url: "https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/dvspubsforms/bdl/bdl-fact-sheets/fs-ps.pdf",
  },
  {
    key: "abs-braking",
    quote:
      "With ABS, maintain firm and continuous pressure on the brake - your " +
      "vehicle will not skid. Do not pump the brake pedal.",
    source: HB,
    section: "Chapter 3: If You Have to Brake Suddenly",
    url: HB_URL,
  },
  {
    key: "ramp-meter-not-protected",
    quote:
      "The green light does not protect your entrance onto the highway - you " +
      "must still look for a safe gap in traffic to enter the highway.",
    source: HB,
    section: "Chapter 2: Ramp-metering Signals",
    url: HB_URL,
  },
  {
    key: "low-shoulder-sign",
    quote:
      "The LOW SHOULDER sign is used where the shoulder is as much as three " +
      "(3) inches below the level of the road.",
    source: HB,
    section: "Chapter 2: Shoulder Signs",
    url: HB_URL,
  },
  {
    key: "slow-moving-vehicle-emblem",
    quote:
      "In rural areas, an orange triangle is displayed on the back of farm " +
      "tractors and horse-drawn vehicles designed to operate at 25 mph or " +
      "less; this is a slower speed than traffic normally travels.",
    source: HB,
    section: "Chapter 3: Reactions to Slow Moving Traffic",
    url: HB_URL,
  },
  {
    key: "too-fast-for-conditions",
    quote:
      "Even if you are driving within the posted speed limit, you can still " +
      "be ticketed for driving too fast for conditions.",
    source: HB,
    section: "Chapter 3: Managing Speed",
    url: HB_URL,
  },
  {
    key: "no-parking-fire-station",
    quote: "Within 20 feet of a driveway entrance to a fire station.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "center-turn-lane-both-directions",
    quote:
      "Drivers traveling in either direction must use this lane to begin " +
      "their left turns, and drivers entering the road may also use this lane " +
      "to end their left turn from a cross street before entering the traffic " +
      "stream.",
    source: HB,
    section: "Chapter 3: Turning from or into a Center Turn Lane",
    url: HB_URL,
  },
  {
    key: "dui-commercial-04",
    quote:
      "0.04% or greater within two hours after the individual has driven, " +
      "operated or been in actual physical control of the movement of a " +
      "commercial vehicle other than a school bus or a school vehicle.",
    source: "75 Pa.C.S. (Pennsylvania Vehicle Code)",
    section: "Section 3802 - Driving under influence of alcohol or controlled substance",
    url: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/75/00.038.002.000..HTM",
  },
  {
    key: "funeral-procession-yield",
    quote:
      "Once the lead vehicle has cleared an intersection, the rest of the " +
      "procession may proceed through the intersection, other traffic must " +
      "yield.",
    source: HB,
    section: "Chapter 3: Funeral Procession",
    url: HB_URL,
  },
  {
    key: "low-beams-500-300",
    quote:
      "Pennsylvania law requires you use low beams whenever you are within " +
      "500 feet of an oncoming vehicle and when you are following a vehicle " +
      "within 300 feet.",
    source: HB,
    section: "Chapter 3: Driving at Night",
    url: HB_URL,
  },
  {
    key: "insurance-bodily-injury",
    quote:
      "If you injure someone in an auto accident, this coverage pays damages " +
      "for which you are liable, such as medical and rehabilitation expenses. " +
      "The minimum limit is $15,000/$30,000.",
    source: "Pennsylvania Insurance Department - Auto Insurance",
    section: "Required Coverages",
    url: "https://www.pa.gov/agencies/insurance/consumer-help-center/learn-about-insurance/auto-insurance",
  },
  {
    key: "pedestrian-flashing-dont-walk",
    quote: "When the flashing DON'T WALK or flashing upraised hand begins:",
    source: HB,
    section: "Chapter 2: Railroad Crossing Signals",
    url: HB_URL,
  },
  {
    key: "tire-blowout",
    quote:
      "Stay off of your brake! Braking after a blowout will cause you to skid " +
      "and lose control of your vehicle.",
    source: HB,
    section: "Chapter 3: If You Have a Tire Blowout",
    url: HB_URL,
  },
  {
    key: "object-markers",
    quote:
      "Such roadside objects and conditions are indicated by the following " +
      "markers, where the stripes are angled down in the direction you need " +
      "to move to avoid the hazard:",
    source: HB,
    section: "Chapter 2: Objects Adjacent to the Roadway",
    url: HB_URL,
  },
  {
    key: "truck-stopping-distance",
    quote:
      "A loaded truck with good tires and properly adjusted brakes, traveling " +
      "at 65 mph on a clear, dry roadway, requires a minimum of 600 feet to " +
      "come to a complete stop (compared to the stopping distance of 400 feet " +
      "for a passenger vehicle).",
    source: HB,
    section: "Chapter 3: Braking",
    url: HB_URL,
  },
  {
    key: "passing-on-right-left-turn",
    quote:
      "When the driver you are passing is making or signaling a left turn, " +
      "the driver of the passing vehicle must stay on the berm or shoulder.",
    source: HB,
    section: "Chapter 3: Passing on the Right",
    url: HB_URL,
  },
  {
    key: "passing-quarter-mile",
    quote:
      "At 45 mph, this translates into 1/4 mile of clear roadway you need to " +
      "safely pass a slower vehicle.",
    source: HB,
    section: "Chapter 3: On a Two-lane Road",
    url: HB_URL,
  },
  {
    key: "parking-visible-500-feet",
    quote:
      "Make sure your vehicle can be seen at least 500 feet in both " +
      "directions.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "name-address-change-15-days",
    quote:
      "if your name or address is changed, you must notify PennDOT within 15 " +
      "days of that change even if moving out of state.",
    source: HB,
    section: "Chapter 5: Required Notification for Change in Name or Address",
    url: HB_URL,
  },
  {
    key: "hazard-flashers-below-40",
    quote:
      "If you must drive below 40 mph on a limited access highway, use your " +
      "hazard (four-way) flashers to warn the drivers behind you.",
    source: HB,
    section: "Chapter 3: Communicating Your Intentions to Other Drivers",
    url: HB_URL,
  },
  {
    key: "refusal-even-if-not-guilty",
    quote:
      "Even if you are found not guilty of driving while under the influence, " +
      "your driving privilege will be suspended for one (1) year for a " +
      "first-time refusal to take a breath or blood test.",
    source: HB,
    section: "Chapter 4: Driving Under the Influence of Alcohol or a Controlled Substance",
    url: HB_URL,
  },
  {
    key: "flood-six-inches",
    quote:
      "On flooded roadways, even at low speeds, as little as six (6) inches " +
      "of water can cause you to lose control of your vehicle or truck and " +
      "can float some small vehicles.",
    source: HB,
    section: "Chapter 3: Flooded Roadways",
    url: HB_URL,
  },
  {
    key: "turn-into-closest-lane",
    quote:
      "Turn into the left lane when making a left turn, and turn into the " +
      "right lane when making a right turn.",
    source: HB,
    section: "Chapter 3: Left and Right Turns",
    url: HB_URL,
  },
  {
    key: "work-zone-no-solid-white",
    quote: "DO NOT CROSS a solid white line in a work zone; stay in your lane.",
    source: HB,
    section: "Chapter 3: Work Zones",
    url: HB_URL,
  },
  {
    key: "do-not-enter-wrong-way",
    quote:
      "The DO NOT ENTER sign is put at the beginning of one-way streets and " +
      "ramps. When you see this sign, do not drive onto that street or ramp " +
      "in the direction you are heading.",
    source: HB,
    section: "Chapter 2: Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "lane-yellow-x",
    quote:
      "A steady yellow \"X\" over a traffic lane means you must change lanes " +
      "because the direction of travel for that lane is about to be reversed.",
    source: HB,
    section: "Chapter 2: Lane Use Control Signals",
    url: HB_URL,
  },
  {
    key: "truck-wide-turns",
    quote:
      "Truck drivers must make wide turns so the rear of the truck or the " +
      "rear of a tractor trailer can clear the corner or any other standing " +
      "obstructions.",
    source: HB,
    section: "Chapter 3: Turns",
    url: HB_URL,
  },
  {
    key: "junior-90-day-suspension",
    quote:
      "You will receive a mandatory 90-day suspension if you accumulate six " +
      "(6) or more points or are convicted of driving 26 miles per hour (mph) " +
      "or more over the posted speed limit.",
    source: HB,
    section: "Chapter 1: Junior Driver's License Information",
    url: HB_URL,
  },
  {
    key: "passing-10-mph-faster",
    quote:
      "You need to be going about 10 mph faster than the vehicle(s) you are " +
      "passing.",
    source: HB,
    section: "Chapter 3: On a Two-lane Road",
    url: HB_URL,
  },
  {
    key: "disabled-parking-conditions",
    quote:
      "The vehicle being parked must display a disabled person or disabled " +
      "veteran registration plate/parking placard.",
    source: HB,
    section: "Chapter 5: Parking Areas for Persons with Disabilities",
    url: HB_URL,
  },
  {
    key: "one-drink-definition",
    quote:
      "You should consider one (1) drink to be 1.5 oz. of 80 proof liquor, 12 " +
      "oz. of regular beer, or 5 oz. of wine.",
    source: HB,
    section: "Chapter 3: Alcohol and Driving",
    url: HB_URL,
  },
  {
    key: "escape-path-eight-feet",
    quote:
      "If you do not have at least eight (8) feet of space on at least one " +
      "side of your vehicle to use as an escape path, you will need to allow " +
      "more space to the front by increasing your following distance.",
    source: HB,
    section: "Chapter 3: Keep a Space Cushion to the Sides",
    url: HB_URL,
  },
  {
    key: "stuck-accelerator",
    quote:
      "Shift to neutral immediately and use the brakes, if the pedal remains " +
      "stuck.",
    source: HB,
    section: "Chapter 3: If Your Accelerator Sticks",
    url: HB_URL,
  },
  {
    key: "roundabout-never-stop",
    quote:
      "If in the roundabout, immediately exit the roundabout and pull to the " +
      "side. NEVER STOP IN THE ROUNDABOUT.",
    source: HB,
    section: "Chapter 3: How to Use a Circular Intersection",
    url: HB_URL,
  },
  {
    key: "interstate-even-numbers",
    quote:
      "One or two-digit, even-numbered interstates are generally east-west " +
      "routes.",
    source: HB,
    section: "Chapter 2: Interstate Numbering System",
    url: HB_URL,
  },
  {
    key: "lane-marked-turn-only-must-turn",
    quote:
      "If you end up in a lane marked for turns only when you want to go " +
      "straight through the intersection, you must make the turn.",
    source: HB,
    section: "Chapter 3: Approaching Intersections",
    url: HB_URL,
  },
  {
    key: "steady-yellow-arrow",
    quote:
      "A STEADY YELLOW ARROW means the movement permitted by the green arrow " +
      "or the flashing yellow arrow is about to end and the signal will soon " +
      "turn red.",
    source: HB,
    section: "Chapter 2: Red, Yellow and Green Traffic Lights and Arrows",
    url: HB_URL,
  },
  {
    key: "overdrive-headlights-45",
    quote:
      "To avoid overdriving your headlights on a dark road at night, you " +
      "should not drive faster than 45 mph.",
    source: HB,
    section: "Chapter 3: Driving at Night",
    url: HB_URL,
  },
  {
    key: "knowledge-test-retake-next-day",
    quote:
      "If you fail the knowledge test, you will be permitted to retake the " +
      "test the following business day.",
    source: "PennDOT - Pennsylvania Driver's Manual (online edition)",
    section: "Chapter 1: Testing - Knowledge Test",
    url: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/testing",
  },
  {
    key: "open-bed-truck",
    quote:
      "An open-bed pickup truck or open flatbed truck may not be driven at a " +
      "speed of more than 35 mph, if any person is occupying the bed of the " +
      "truck. Such a truck may not be driven when a child under 18 years of " +
      "age is occupying the bed of the truck.",
    source: HB,
    section: "Chapter 3: Passengers in an Open-bed Truck",
    url: HB_URL,
  },
  {
    key: "parking-direction-of-traffic",
    quote: "Always park in the direction traffic moves.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "rearview-mirror-objects",
    quote:
      "It is against the law to have any object or material hanging from the " +
      "rearview mirror while moving.",
    source: HB,
    section: "Chapter 3: Vehicle Checks: Preparing to Drive",
    url: HB_URL,
  },
  {
    key: "only-time-sobers-you",
    quote:
      "You cannot reduce your blood alcohol concentration level by drinking " +
      "coffee or other caffeinated beverages, or by taking a cold shower.",
    source: HB,
    section: "Chapter 3: Alcohol and Driving",
    url: HB_URL,
  },
  {
    key: "steer-vs-brake",
    quote:
      "When you have a choice of either braking or steering to avoid a " +
      "collision, it is usually better if you can steer to avoid the hazard " +
      "than to brake, particularly at speeds above 25 mph.",
    source: HB,
    section: "Chapter 3: Steering Your Way Out of an Emergency",
    url: HB_URL,
  },
  {
    key: "acceleration-lane-no-passing",
    quote: "It is illegal to pass a vehicle ahead of you in an acceleration lane.",
    source: HB,
    section: "Chapter 3: Merging with Traffic",
    url: HB_URL,
  },
  {
    key: "merging-traffic-yield",
    quote: "Entering traffic must yield to traffic already on the major roadway.",
    source: HB,
    section: "Chapter 2: Merging Traffic",
    url: HB_URL,
  },
  {
    key: "stopped-vehicle-pedestrians",
    quote:
      "When approaching a stopped vehicle from behind, slow down and do not " +
      "pass until you are sure there are no pedestrians crossing in front of " +
      "it.",
    source: HB,
    section: "Chapter 3: Pedestrians",
    url: HB_URL,
  },
  {
    key: "snow-ice-speed-reduction",
    quote:
      "On packed snow, decrease your speed by half; on ice, slow to a crawl. " +
      "Leave about 10 times more space than normal between you and the " +
      "vehicle ahead.",
    source: HB,
    section: "Chapter 3: Road Conditions",
    url: HB_URL,
  },
  {
    key: "safety-inspection-12-months",
    quote:
      "Your vehicle must have a safety inspection at an authorized inspection " +
      "station every 12 months.",
    source: HB,
    section: "Chapter 5: Vehicle Safety and Emissions Inspection",
    url: HB_URL,
  },
  {
    key: "bicycle-no-turn-into-path",
    quote:
      "Drivers cannot turn into the path of a bicyclist who is riding " +
      "straight ahead on a roadway or shoulder.",
    source: HB,
    section: "Chapter 5: Safe Passing Is the Law",
    url: HB_URL,
  },
  {
    key: "railroad-signal-types",
    quote:
      "These signals include flashing red lights, a lowered crossing gate, a " +
      "flagger signaling or a train's audible signal of warning.",
    source: HB,
    section: "Chapter 2: Railroad Crossing Signals",
    url: HB_URL,
  },
  {
    key: "no-parking-double-park",
    quote:
      "On the roadway side of a vehicle already stopped or parked along the " +
      "edge or curb of the street (double parking).",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "return-after-passing",
    quote:
      "Before you move back into the lane, make sure you can see both " +
      "headlights on the front of the vehicle you passed in your rearview " +
      "mirror.",
    source: HB,
    section: "Chapter 3: You May Not Pass If:",
    url: HB_URL,
  },
  {
    key: "road-closure-penalty",
    quote:
      "A conviction for violation of this law results in 2 points added to " +
      "your driving record and a fine of up to $250.",
    source: HB,
    section: "Chapter 5: Obedience to Traffic-Control Devices Warning of Hazardous Conditions Law",
    url: HB_URL,
  },
  {
    key: "airbag-10-inches",
    quote:
      "To be safe, in case the air bag deploys, you should be at least 10 " +
      "inches away from the steering wheel.",
    source: HB,
    section: "Chapter 5: Air Bag Safety Information",
    url: HB_URL,
  },
  {
    key: "exit-only-panel",
    quote:
      "If you are in a lane posted with an EXIT ONLY, you may change lanes, " +
      "or you must exit the highway if you stay in this lane.",
    source: HB,
    section: "Chapter 2: Exit Numbers",
    url: HB_URL,
  },
  {
    key: "texting-law",
    quote:
      "The law went into effect March 8, 2012, and violating the law is a " +
      "primary, summary offense with convictions carrying a $50 fine.",
    source: HB,
    section: "Chapter 5: Anti-texting Law",
    url: HB_URL,
  },
  {
    key: "snow-squall-caution",
    quote:
      "If you encounter a snow squall, exercise extreme caution by gradually " +
      "slowing and activating your hazard lights for increased visibility.",
    source: HB,
    section: "Chapter 3: Snow Squalls",
    url: HB_URL,
  },
  {
    key: "snow-ice-remove-24-hours",
    quote:
      "a driver of a motor vehicle or motor carrier vehicle being operated on " +
      "a highway of this Commonwealth shall make reasonable efforts to remove " +
      "accumulated ice or snow from the motor vehicle or motor carrier " +
      "vehicle, including the hood, trunk and roof of the motor vehicle or " +
      "motor carrier vehicle, within 24 hours after the cessation of the " +
      "falling snow or ice.",
    source: "75 Pa.C.S. (Pennsylvania Vehicle Code)",
    section: "Section 3721 - Snow and ice",
    url: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/75/00.037.021.000..HTM",
  },
  {
    key: "point-removal-12-months",
    quote:
      "Three (3) points are removed from a driving record for every 12 " +
      "consecutive months in which a person is not under suspension or " +
      "revocation or has not committed any violation, which results in the " +
      "assignment of points or the suspension or revocation of the driving " +
      "privilege.",
    source: HB,
    section: "Chapter 4: Point Removal for Safe Driving",
    url: HB_URL,
  },
  {
    key: "school-bus-penalty",
    quote:
      "Failure to stop for a school bus with a flashing red light and " +
      "extended stop arm will result in a 60-day suspension of your driver's " +
      "license, five (5) points on your driving record and a fine.",
    source: HB,
    section: "Chapter 3: School Buses",
    url: HB_URL,
  },
  {
    key: "under-21-high-rate-penalties",
    quote:
      "If you are under 21 years of age and you are convicted of driving " +
      "under the influence (your BAC is .02 or higher), you will be subject " +
      "to the penalties listed in Table 2, \"High Rate,\" even if your BAC is " +
      "less than the levels specified for those penalties.",
    source: HB,
    section: "Chapter 4: Driving Under the Influence of Alcohol or a Controlled Substance",
    url: HB_URL,
  },
  {
    key: "two-way-left-turn-arrow",
    quote:
      "A white steady, two-way left-turn arrow over a lane means you may only " +
      "turn left, if you are in that lane, but the lane is shared by " +
      "left-turning drivers approaching from the opposite direction.",
    source: HB,
    section: "Chapter 2: Lane Use Control Signals",
    url: HB_URL,
  },
  {
    key: "work-zone-15-day-suspension",
    quote:
      "Motorists caught driving 11 miles per hour or more above the posted " +
      "speed limit in an active work zone, or who are involved in a crash in " +
      "an active work zone and are convicted for failing to drive at a safe " +
      "speed, automatically will lose their license for 15 days.",
    source: "PennDOT - Work Zone Safety",
    section: "Laws - Posted and Active Work Zones",
    url: "https://www.pa.gov/agencies/penndot/traveling-in-pa/safety/traffic-safety-driver-topics/work-zone-safety",
  },
  {
    key: "gap-left-turn",
    quote:
      "If you are turning from a minor onto a major street, allow a 9-second " +
      "gap between you and any vehicle approaching from the right.",
    source: HB,
    section: "Chapter 3: Moving Into and Through Intersections Safely",
    url: HB_URL,
  },
  {
    key: "no-parking-divided-highway",
    quote: "Between roadways of a divided highway, including crossovers.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "children-12-and-under-rear",
    quote:
      "It is recommended that all children ages 12 and under ride in the rear " +
      "seat.",
    source: HB,
    section: "Chapter 5: Air Bag Safety Information",
    url: HB_URL,
  },
  {
    key: "snow-ice-dislodged-fine",
    quote:
      "When snow or ice is dislodged or falls from a moving vehicle or motor " +
      "carrier vehicle and strikes another vehicle or pedestrian causing " +
      "death or serious bodily injury, the operator of the vehicle from which " +
      "the snow or ice is dislodged or falls shall be subject to a fine of " +
      "not less than $200 nor more than $1,500 for each offense.",
    source: "75 Pa.C.S. (Pennsylvania Vehicle Code)",
    section: "Section 3721 - Snow and ice",
    url: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/75/00.037.021.000..HTM",
  },
  {
    key: "interstate-three-digit-odd",
    quote:
      "When the first of the three (3) digits is an odd number, the highway " +
      "is usually a \"spur\" route connecting with another interstate at only " +
      "one (1) end",
    source: HB,
    section: "Chapter 2: Interstate Numbering System",
    url: HB_URL,
  },
  {
    key: "junior-to-regular-licence",
    quote:
      "Your junior driver's license will automatically become a regular " +
      "driver's license when you turn 18 years of age.",
    source: HB,
    section: "Chapter 1: Junior Driver's License Information",
    url: HB_URL,
  },
  {
    key: "no-passing-bridge-tunnel",
    quote: "You are within 100 feet of any bridge, elevated structure or tunnel.",
    source: HB,
    section: "Chapter 3: You May Not Pass If:",
    url: HB_URL,
  },
  {
    key: "truck-passing-time",
    quote:
      "At highway speeds, it can take up to 30 seconds to safely pass a " +
      "truck.",
    source: HB,
    section: "Chapter 3: Passing a Truck",
    url: HB_URL,
  },
  {
    key: "highest-rate-tier",
    quote: "TABLE 3 - HIGHEST RATE: .16 BLOOD ALCOHOL CONCENTRATION AND UP",
    source: HB,
    section: "Chapter 4: Severe Penalties",
    url: HB_URL,
  },
  {
    key: "no-cruise-control-slippery",
    quote: "Do not use your cruise control when driving on slippery roads.",
    source: HB,
    section: "Chapter 3: Road Conditions",
    url: HB_URL,
  },
  {
    key: "dutch-reach",
    quote: "Open the door with your far hand (the hand farther from the door)",
    source: HB,
    section: "Chapter 5: The Danger of Open Doors to Bicyclists",
    url: HB_URL,
  },
  {
    key: "disabled-parking-fine",
    quote:
      "Individuals convicted of this offense will be fined between $50 and " +
      "$200.",
    source: HB,
    section: "Chapter 5: Parking Areas for Persons with Disabilities",
    url: HB_URL,
  },
  {
    key: "points-eleven-suspension",
    quote:
      "When any driving record reaches 11 or more points, the driver's " +
      "license will automatically be suspended.",
    source: "PennDOT - The Pennsylvania Point System (fact sheet, March 2024)",
    section: "Corrective Action and Suspension",
    url: "https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/dvspubsforms/bdl/bdl-fact-sheets/fs-ps.pdf",
  },
  {
    key: "crash-report-five-days",
    quote:
      "If the police do not investigate a crash and someone has died or been " +
      "injured, or if a vehicle must be towed, send a Driver's Accident " +
      "Report Form (AA-600) within five (5) days",
    source: HB,
    section: "Chapter 4: Crashes",
    url: HB_URL,
  },
  {
    key: "gap-two-way-stop",
    quote:
      "You need about a 6-second gap in both directions to cross a 30 mph " +
      "street or about a block of clear space to the right and left.",
    source: HB,
    section: "Chapter 3: Moving into and Through Intersections Safely",
    url: HB_URL,
  },
  {
    key: "no-passing-curve-hill",
    quote:
      "You are approaching or are on a curve or a hill crest (top) " +
      "restricting your view of oncoming traffic.",
    source: HB,
    section: "Chapter 3: You May Not Pass If:",
    url: HB_URL,
  },
  {
    key: "chevron-signs",
    quote:
      "There is a sharp change in the direction of the road, such as a curve " +
      "to the left or right. The road bends in the direction the chevron " +
      "points.",
    source: HB,
    section: "Chapter 2: Chevron Signs",
    url: HB_URL,
  },
  {
    key: "motorcycle-turn-signal",
    quote:
      "Do not assume a motorcycle/moped is turning when you see its turn " +
      "signal flashing.",
    source: HB,
    section: "Chapter 3: Motorcyclists and Moped Drivers",
    url: HB_URL,
  },
  {
    key: "speed-limit-posting-interval",
    quote:
      "On other highways the maximum speed limit would be posted at " +
      "approximately ½ mile intervals.",
    source: HB,
    section: "Chapter 3: Managing Speed",
    url: HB_URL,
  },
  {
    key: "refusal-restoration-fee",
    quote:
      "First offense is $500, second offense is $1,000, and third or " +
      "subsequent offense is $2,000.",
    source: HB,
    section: "Chapter 4: Chemical Test Refusal Restoration Fee",
    url: HB_URL,
  },
  {
    key: "seat-belt-statute-driver-under-18",
    quote:
      "if under 18 years of age, be secured in a properly adjusted and " +
      "fastened safety seat belt system",
    source: "75 Pa.C.S. (Pennsylvania Vehicle Code)",
    section: "Section 4581 - Restraint systems",
    url: "https://www.legis.state.pa.us/wu01/li/li/ct/htm/75/00.045.081.000..htm",
  },
  {
    key: "permit-validity",
    quote:
      "After passing the Knowledge Test, the examiner will give you a " +
      "learner's permit, which is valid for one (1) year.",
    source: HB,
    section: "Chapter 1: Applying for a Learner's Permit",
    url: HB_URL,
  },
  {
    key: "head-on-collision",
    quote:
      "First, honk your horn to attract attention. If the other driver does " +
      "not move over, try to escape to the right, if possible.",
    source: HB,
    section: "Chapter 3: If Another Vehicle Is Approaching Head-on in Your Lane",
    url: HB_URL,
  },
  {
    key: "littering-fine",
    quote:
      "A violation of this law, including any violation resulting from the " +
      "conduct of any other persons present within any vehicle of which you " +
      "are the driver, may result in a fine of up to $300 upon conviction.",
    source: HB,
    section: "Chapter 5: Anti-littering Law",
    url: HB_URL,
  },
  {
    key: "added-lane-sign",
    quote:
      "It means merging is not necessary because the entering traffic uses a " +
      "new lane that has been added to the roadway.",
    source: HB,
    section: "Chapter 2: Added Lane",
    url: HB_URL,
  },
  {
    key: "blocked-intersection",
    quote:
      "Even if you have a green light, do not enter an intersection if there " +
      "are vehicles blocking your way. Wait until you are sure you can clear " +
      "the intersection before starting to cross it.",
    source: HB,
    section: "Chapter 3: Crossing Traffic",
    url: HB_URL,
  },
  {
    key: "no-parking-limited-access",
    quote:
      "On a limited access highway, unless official traffic control devices " +
      "indicate you are allowed.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "blind-spot-definition",
    quote:
      "A blind spot is any place around a vehicle a driver cannot see without " +
      "moving their head.",
    source: HB,
    section: "Chapter 3: Keep Your Vehicle Where It Can Be Seen",
    url: HB_URL,
  },
  {
    key: "regulatory-signs",
    quote:
      "Regulatory signs tell you what you must do, or must not do, according " +
      "to the law.",
    source: HB,
    section: "Chapter 2: Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "broken-white-lines-passing",
    quote:
      "Broken white lines show which lanes can be used by vehicles traveling " +
      "the same way. You may cross the broken white lines to pass, (be sure " +
      "the passing lane is clear) but you may not cross the double yellow " +
      "centerlines to pass.",
    source: HB,
    section: "Chapter 2: Pavement Markings",
    url: HB_URL,
  },
  {
    key: "right-of-way-not-given",
    quote:
      "The law does not give anyone the right-of-way at intersections; it " +
      "only says who must yield.",
    source: HB,
    section: "Chapter 3: Negotiating Intersections",
    url: HB_URL,
  },
  {
    key: "interstate-speed-posting",
    quote:
      "The maximum speed limit on interstate highways is posted after each " +
      "interchange.",
    source: HB,
    section: "Chapter 3: Managing Speed",
    url: HB_URL,
  },
  {
    key: "class-c-licence",
    quote:
      "A Class C driver's license will be issued to persons 16 years of age " +
      "or older, who have demonstrated their qualifications to operate any " +
      "vehicles, except those requiring a Class M qualification",
    source: HB,
    section: "Chapter 1: Classes of Driver's Licenses",
    url: HB_URL,
  },
  {
    key: "crash-bumps-to-high-rate",
    quote:
      "If you are involved in a crash resulting in bodily injury, death or " +
      "property damage, you are subject to the penalties listed in Table 2, " +
      "\"High Rate,\" rather than those listed in Table 1, \"General " +
      "Impairment,\" even if your BAC is lower than the levels listed in Table " +
      "2, \"High Rate.\"",
    source: HB,
    section: "Chapter 4: Driving Under the Influence of Alcohol or a Controlled Substance",
    url: HB_URL,
  },
  {
    key: "left-right-left",
    quote:
      "Look to the left first, because vehicles coming from the left are " +
      "closer to you.",
    source: HB,
    section: "Chapter 3: Looking to the Sides",
    url: HB_URL,
  },
  {
    key: "never-wave-pedestrian",
    quote:
      "When pedestrians do see you, it is never safe to wave a pedestrian " +
      "into the line of traffic at any time and especially at unmarked or " +
      "mid-block locations.",
    source: HB,
    section: "Chapter 3: Pedestrians",
    url: HB_URL,
  },
  {
    key: "leaving-vehicle",
    quote:
      "Before leaving your vehicle, turn off the engine, remove the key and " +
      "lock all doors. Check for traffic behind you before you get out.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "police-blue-only-not-police",
    quote:
      "If the vehicle is flashing only blue lights, then it is not a police " +
      "officer.",
    source: HB,
    section: "Chapter 4: If You Are Stopped by the Police",
    url: HB_URL,
  },
  {
    key: "lane-green-arrow",
    quote:
      "A steady downward green arrow over a traffic lane means you may use " +
      "the lane.",
    source: HB,
    section: "Chapter 2: Lane Use Control Signals",
    url: HB_URL,
  },
  {
    key: "no-u-turn-sign",
    quote:
      "This sign prohibits U-turns. Do not make a complete turn to go in the " +
      "opposite direction.",
    source: HB,
    section: "Chapter 2: Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "headlights-sunset-sunrise",
    quote: "Between sunset and sunrise.",
    source: HB,
    section: "Chapter 3: Driving at Night",
    url: HB_URL,
  },
  {
    key: "four-way-stop",
    quote:
      "A FOUR-WAY STOP sign means there are four stop signs at this " +
      "intersection. Traffic from all four directions must stop. The first " +
      "vehicle to reach the intersection should move forward first.",
    source: HB,
    section: "Chapter 2: Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "highway-speed-feet-per-second",
    quote:
      "65 mph is almost 100 feet per second - it takes less than one (1) " +
      "second to run off of the road.",
    source: HB,
    section: "Chapter 3: Traveling on Highways",
    url: HB_URL,
  },
  {
    key: "junior-curfew-exception",
    quote:
      "However, you may drive between 11 p.m. and 5 a.m., if you are involved " +
      "in public or charitable service, a member of a volunteer fire company " +
      "or employed during those hours.",
    source: HB,
    section: "Chapter 1: Pennsylvania Vision Standards",
    url: HB_URL,
  },
  {
    key: "fatigue-18-hours",
    quote:
      "Being awake for 18 hours impairs your driving about as much as a blood " +
      "alcohol level of .05 percent.",
    source: HB,
    section: "Chapter 3: Lack of Sleep",
    url: HB_URL,
  },
  {
    key: "bicycle-vehicle-operators",
    quote:
      "Bicyclists are considered to be vehicle operators and are expected to " +
      "obey all traffic laws; however, they may travel at less than the " +
      "posted minimum speed and may not be cited for impeding traffic.",
    source: HB,
    section: "Chapter 5: Safe Passing Is the Law",
    url: HB_URL,
  },
  {
    key: "loose-items-projectiles",
    quote:
      "In a crash, loose items in your vehicle become projectiles that " +
      "continue to travel the same speed your vehicle was moving before the " +
      "impact.",
    source: HB,
    section: "Chapter 3: Vehicle Checks: Preparing to Drive",
    url: HB_URL,
  },
  {
    key: "no-parking-bridge-tunnel",
    quote: "On any bridge or other elevated structure, or in a highway tunnel.",
    source: HB,
    section: "Chapter 3: Parking",
    url: HB_URL,
  },
  {
    key: "brake-warning-light",
    quote:
      "If your brake system warning light comes on, you may have braking in " +
      "two (2) of the four (4) wheels, probably one (1) front wheel and one " +
      "(1) rear wheel.",
    source: HB,
    section: "Chapter 3: If Your Vehicle Has Brake Failure",
    url: HB_URL,
  },
  {
    key: "keep-right-sign",
    quote:
      "These signs direct drivers to keep to the right of the traffic island " +
      "or divider.",
    source: HB,
    section: "Chapter 2: Keep Right",
    url: HB_URL,
  },
  {
    key: "u-turn-prohibited-places",
    quote:
      "U-turns are not allowed on curves or when you are approaching or " +
      "nearing the crest of a hill.",
    source: HB,
    section: "Chapter 3: U-turns",
    url: HB_URL,
  },
  {
    key: "pedestrian-steady-dont-walk",
    quote:
      "When the steady DON'T WALK message or steady upraised hand is " +
      "displayed, do not cross.",
    source: HB,
    section: "Chapter 2: Railroad Crossing Signals",
    url: HB_URL,
  },
  {
    key: "road-test-documents",
    quote:
      "The valid registration card for the vehicle you plan to drive for the " +
      "Road Test.",
    source: HB,
    section: "Chapter 1: Road Test",
    url: HB_URL,
  },
  {
    key: "roundabout-pedestrians",
    quote:
      "Motorists must yield to pedestrians when entering and exiting a " +
      "roundabout.",
    source: HB,
    section: "Chapter 3: How to Use a Circular Intersection",
    url: HB_URL,
  },
  {
    key: "otc-drugs-driving",
    quote:
      "Prescription and over-the-counter drugs such as sleeping pills, cough " +
      "medicines, antihistamines and decongestants can affect your driving " +
      "skills in a variety of ways.",
    source: HB,
    section: "Chapter 3: Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "thrown-from-vehicle",
    quote:
      "Seat belts also keep you inside of your vehicle. Your chances of being " +
      "killed are almost 25 times greater if you are thrown from your " +
      "vehicle.",
    source: HB,
    section: "Chapter 5: Seat Belt Law",
    url: HB_URL,
  },
  {
    key: "work-zone-doubled-fines-list",
    quote:
      "Fines for certain traffic violations - including speeding, driving " +
      "under the influence, and failure to obey traffic devices - are doubled " +
      "for active work zones.",
    source: "PennDOT - Work Zone Safety",
    section: "Laws - Posted and Active Work Zones",
    url: "https://www.pa.gov/agencies/penndot/traveling-in-pa/safety/traffic-safety-driver-topics/work-zone-safety",
  },
  {
    key: "truck-backing",
    quote: "Never try to cross behind a truck preparing to back up.",
    source: HB,
    section: "Chapter 3: Backing Crashes",
    url: HB_URL,
  },
];
