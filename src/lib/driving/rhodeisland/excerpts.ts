import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Rhode Island bank. Every quote below was
// lifted MECHANICALLY as a contiguous substring of the fetched source, between
// a start phrase and an end phrase (tmp/ri_excerpts.py), rather than retyped.
// Nothing here is a paraphrase that drifted, and nothing was repaired by hand.
//
// Four sources sit behind them:
//
//  - The Rhode Island Driver's Manual, published by the Rhode Island Division
//    of Motor Vehicles (a division of the Department of Revenue) and served
//    from dmv.ri.gov as media item 966. Its cover carries the edition label
//    "April 2024". Note that dmv.ri.gov ALSO still serves an older file,
//    Driver_Manual_FINAL.pdf, whose first page reads "rev. 08/2015"; that is
//    the superseded printing, and the DMV's own Operator Manuals page links
//    only to the April 2024 file. These quotes come from the April 2024 file.
//  - Title 31 of the Rhode Island General Laws, on the Legislature's own
//    server. The manual summarises; the statute carries the numbers the exam
//    still asks about and the book leaves out - the prima facie speed limits
//    including the 45 mph night limit and the 20 mph school zone (31-14-2),
//    the 100-foot signal distance (31-16-6), the 50-to-15-foot railroad stop
//    (31-20-1), the full parking-distance list (31-21-4), the 50-foot gap
//    behind a school bus (31-20-12), and the hands-free law as amended in
//    2025 (31-22-30).
//  - Five dmv.ri.gov pages, for the things the book does not state at all:
//    the 8-day retest wait, the exam languages and hours, the graduated
//    licensing conditions as currently published, the road-test failure
//    ladder, and the permit fees.
//  - Two CCRI pages. CCRI is the state community college that the manual
//    itself names as administering the RI DMV Knowledge examination for its
//    driver-education students, and its FAQ is the only official source that
//    states the exam's pass mark (70%). The DMV publishes the question count
//    and the time limit but never the pass mark.
//
// FETCH METHOD. dmv.ri.gov sits behind a Cloudflare interstitial that refuses
// automated clients, headless Chromium included, so the manual PDF and the
// five DMV pages were read from Internet Archive captures of those same
// official URLs (snapshots 2026-03-08, 2026-04-19, 2026-05-09, 2026-06-07 and
// 2026-07-22). Every `url` below still points at the live official page,
// which is where a learner should read it. The statute and the CCRI pages
// were fetched directly.
//
// PAGE NUMBERS. The manual's printed page numbers and its PDF page numbers
// agree one-for-one, so the "#page=" anchor in each manual url lands on the
// printed page named in the section reference.
//
// Only the normalisations the sibling banks use were applied, and only to the
// extracted text: curly quotes and dashes fold to ASCII, the section symbol is
// spelled out as "Section", bullet glyphs become spaces so a stem and its list
// run together in the printed order, and runs of whitespace collapse to single
// spaces. No word is changed, dropped or reordered, and the sources' own slips
// are preserved exactly as they stand - the manual's "A motorist stopped at
// are red light", its "exempt from being transported in any ear seating
// position", and CCRI's "50 hours of supervised drivin" - because a quote that
// has been tidied up is no longer a quote. The statute's prime marks for feet
// (100', 500') are dropped by the extractor's whitespace folding, which is why
// some statutory quotes read "one hundred feet (100 )".

const MANUAL =
  "Rhode Island Driver's Manual (Rhode Island Division of Motor Vehicles, April 2024)";
const MANUAL_URL = "https://dmv.ri.gov/media/966/download?language=en";


export const rhodeislandExcerpts: HandbookExcerpt[] = [
  {
    key: "abs-definition",
    quote:
      "ABS - Anti-lock Braking System is a computer controlled braking system " +
      "that keeps the wheels rotating (turning) during emergency braking. Thus, " +
      "the vehicle will not skid, and steering is always available to the driver.",
    source: MANUAL,
    section: "V. Driving Emergencies - How to Avoid Skidding",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "abs-no-pump",
    quote:
      "If your vehicle is equipped with anti-lock brakes, do not pump the brake. " +
      "Any pumping of anti-lock brakes could cancel the feature and cause the " +
      "vehicles brakes to lock up and skid.",
    source: MANUAL,
    section: "V. Driving Emergencies - How to Avoid Skidding",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "abs-steer",
    quote:
      "If the driver stomps on the brake and stays on the brake, they will be " +
      "able to steer in the direction they want to travel. The brake (Pedal) will " +
      "pulsate - this is normal for ABS systems.",
    source: MANUAL,
    section: "V. Driving Emergencies - How to Avoid Skidding",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "accel-decel-lanes",
    quote:
      "Acceleration lanes permit motorists entering freeways the opportunity to " +
      "accelerate to the speed of traffic. Deceleration lanes permit motorists " +
      "about to exit a freeway to slow down to the exit ramp speed.",
    source: MANUAL,
    section: "III. Freeway/Highway Driving Limited Access Highway",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "aggressive-behaviors",
    quote:
      "1. Blocking the passing lane (not yielding to someone wishing to pass). 2. " +
      "Tailgating (riding too close to the vehicle in front of you). 3. Making " +
      "angry or obscene gestures. 4. Sounding your horn repeatedly.",
    source: MANUAL,
    section: "VIII. Aggressive Driving",
    url: MANUAL_URL + "#page=56",
  },
  {
    key: "aggressive-driver-response",
    quote:
      "If an aggressive driver challenges you, take a deep breath and get out of " +
      "the aggressive driver's way, even if you THINK you are right.",
    source: MANUAL,
    section: "VIII. Aggressive Driving",
    url: MANUAL_URL + "#page=57",
  },
  {
    key: "aggressive-driving-def",
    quote:
      "Aggressive driving occurs when a driver operates a vehicle in a pushy or " +
      "bold manner. Exceeding the speed limit, following too closely, failing to " +
      "comply with traffic controls devices, and making improper turns and " +
      "maneuvers are all examples of aggressive driving.",
    source: MANUAL,
    section: "II. Aggressive Driving and Road Rage",
    url: MANUAL_URL + "#page=23",
  },
  {
    key: "airbags-supplement",
    quote:
      "Children and infants should always ride in the back seats of vehicles " +
      "equipped with passenger side air bags. Airbags supplement safety belts.",
    source: MANUAL,
    section: "XIII. Equipment You Must Inspect - Airbags",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "alcohol-crash-risk",
    quote:
      "If you drink, even just a little, your chances of a collision are seven " +
      "(7) times greater than if you don't drink.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - A. Effects of Alcohol",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "alcohol-drivers-killed",
    quote:
      "Drunk drivers cause more than half of the collisions in which somebody is " +
      "killed.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - A. Effects of Alcohol",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "alcohol-elimination",
    quote:
      "The three methods by which the body eliminates alcohol: Breathing, " +
      "Perspiring, and Oxidation (removed by the liver).",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - A. Effects of Alcohol",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "alcohol-judgment-first",
    quote:
      "Upon reaching the brain, alcohol first affects the control of your " +
      "judgment and skill. Alcohol will affect your ability to estimate distance " +
      "(depth perception), speeds and the movement of other vehicles",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - A. Effects of Alcohol",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "approach-intersection-caution",
    quote:
      "You should slow down, cover the brake, and proceed with caution when " +
      "approaching all intersections.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "bac-02-under-21",
    quote:
      "Any person under the age of twenty-one (21) with a BAC of .02% but less " +
      "than .08% is impaired and will be charged with Driving While Impaired " +
      "(DWI).",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - B. Blood Alcohol Concentration",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "bac-08-any-age",
    quote:
      "Any person of any age with a BAC of .08% or more is intoxicated and will " +
      "be charged with drunk driving - Driving Under the Influence (DUI).",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - B. Blood Alcohol Concentration",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "bac-definition",
    quote:
      "The blood alcohol concentration (BAC) is the ratio of alcohol to blood (to " +
      "body weight) present in the bloodstream at any given time.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - B. Blood Alcohol Concentration",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "bac-factors",
    quote:
      "1. How much alcohol you have had to drink. 2. How much you weigh. 3. How " +
      "much food you ate before drinking. 4. How much time you have been " +
      "drinking. 5. The speed at which your body processes the alcohol in your " +
      "system, which is different for each person.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - B. Blood Alcohol Concentration",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "backing-30-feet",
    quote:
      "If you are backing up for a distance greater than 30 feet, it is " +
      "recommended that you activate your hazard lights to warn other motorists " +
      "of your maneuvers.",
    source: MANUAL,
    section: "III. Proper Backing Procedures",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "backing-look-right",
    quote:
      "While backing, you should look over your right shoulder, partially turning " +
      "your body, while maintaining proper control of your vehicle.",
    source: MANUAL,
    section: "III. Proper Backing Procedures",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "basic-speed-law",
    quote:
      "The Basic Speed Law in Rhode Island requires motorists to drive only as " +
      "fast as the road conditions dictate.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "being-passed",
    quote:
      "When you are being passed by another vehicle, you should reduce your speed " +
      "a little and keep to the right. This will allow the other driver to pass " +
      "safely.",
    source: MANUAL,
    section: "III. Passing Another Vehicle - Passing a vehicle on the left",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "belt-fit-test",
    quote:
      "Is the child's lower back all the way against the vehicle seat? Do the " +
      "child's knees bend at the edge of the vehicle seat? Does the shoulder belt " +
      "come down over the collar bone and across the center of the chest? Is the " +
      "lap belt on the upper thighs across the hip bones?",
    source: MANUAL,
    section: "III. Booster Seat/Safety Seat/Safety Belt Use Law",
    url: MANUAL_URL + "#page=27",
  },
  {
    key: "bicycle-3-5-feet",
    quote:
      "Allow as much clearance as possible (3-5 feet) when passing to prevent " +
      "contact with a bicyclist and be prepared to stop suddenly if the person " +
      "were to fall into the driver's lane.",
    source: MANUAL,
    section: "VIII. Seven Things to Know When Sharing the Road with Bicyclists",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "bicycle-hazards",
    quote:
      "Road hazards not easily seen by automobile drivers or trucks may hamper a " +
      "bicyclist or cause them to crash. These hazards could include potholes, " +
      "glass, litter, storm grates, and railroad crossings, as well as opened " +
      "doors of parked vehicles.",
    source: MANUAL,
    section: "VIII. Share the Road with Bicyclists",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "bicycle-helmet-15",
    quote:
      "Any person fifteen (15) years of age or younger riding a bicycle or a " +
      "passenger on a bicycle on a public highway, bicycle path, or other public " +
      "right-of-way must wear a certified bicycle helmet.",
    source: MANUAL,
    section: "VIII. Bicycle Riders",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "bicycle-lane-marking",
    quote:
      "In Rhode Island, bicycle lanes on the road are clearly marked with a solid " +
      "white line, with the words \"Bicycle Lane\" and include bicycle symbols.",
    source: MANUAL,
    section: "VIII. Driving on Roads with Bicycle Lanes",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "bicycle-lane-rules",
    quote:
      "Do not drive in a bicycle lane. You may cross a bicycle lane when you are " +
      "turning a Rhode Island Driver's Manual - www.dmv.ri.gov 56 corner or " +
      "entering or leaving an alley, private road, or driveway. Yield to " +
      "bicyclists in a bicycle lane or on a sidewalk before you turn into the " +
      "lane or sidewalk.",
    source: MANUAL,
    section: "VIII. Driving on Roads with Bicycle Lanes",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "bicycle-left-turn-yield",
    quote:
      "When turning left at an intersection, yield to oncoming bicyclists just as " +
      "you would to an on-coming vehicles.",
    source: MANUAL,
    section: "VIII. Seven Things to Know When Sharing the Road with Bicyclists",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "bicycle-no-horn",
    quote:
      "Don't sound your horn as you approach a cyclist as the loud noise can " +
      "startle them and cause them to swerve.",
    source: MANUAL,
    section: "VIII. Seven Things to Know When Sharing the Road with Bicyclists",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "bicycle-no-pass-oncoming",
    quote:
      "Do not pass bicyclists if oncoming traffic is near. Wait until there are " +
      "no oncoming vehicles before you pass. After you have passed a bicyclist, " +
      "do not reduce speed, or stop abruptly in front of them.",
    source: MANUAL,
    section: "VIII. Seven Things to Know When Sharing the Road with Bicyclists",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "bicycle-ride-right",
    quote:
      "Bicycle riders should ride as close to the right of the road as they can " +
      "do safely. They should only cross the lane of vehicle travel to make a " +
      "left turn.",
    source: MANUAL,
    section: "VIII. Bicycle Riders",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "bicycle-right-turn-check",
    quote:
      "Before turning right at an intersection or driveway, check for bicyclists " +
      "on your right or behind you who are continuing straight ahead.",
    source: MANUAL,
    section: "VIII. Seven Things to Know When Sharing the Road with Bicyclists",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "bicycle-same-rights",
    quote:
      "Bicycle riders are given the same rights and must follow the same laws as " +
      "drivers of motor vehicles.",
    source: MANUAL,
    section: "VIII. Bicycle Riders",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "bicycle-takes-lane",
    quote:
      "When a road is too narrow for vehicles and bicycles to travel safely side " +
      "by side, be prepared to reduce speed or stop when the bicyclists ahead of " +
      "you \"takes the travel lane,\" (i.e., proceeds in the center of the road).",
    source: MANUAL,
    section: "VIII. Seven Things to Know When Sharing the Road with Bicyclists",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "bicycle-two-abreast",
    quote:
      "No more than two (2) bicycles may be ridden side by side.",
    source: MANUAL,
    section: "VIII. Bicycle Riders",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "bicycle-vehicle-status",
    quote:
      "Under Rhode Island Law, a bicycle is considered a vehicle with equal " +
      "rights and responsibilities as other vehicles on the road.",
    source: MANUAL,
    section: "VIII. Bicycle Riders",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "black-ice",
    quote:
      "Black ice, also known as invisible ice, can be extremely dangerous. Roads " +
      "that seem dry may be slippery and dangerous.",
    source: MANUAL,
    section: "V. Driving in Inclement Weather - Winter Driving",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "black-ice-where",
    quote:
      "Reduce your speed when approaching intersections, off-ramps, bridges, or " +
      "shady areas - all are increased areas for black ice.",
    source: MANUAL,
    section: "V. Driving in Inclement Weather - Winter Driving",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "blind-spots-def",
    quote:
      "Blind spots are areas that cannot be seen in your rear or side-view " +
      "mirrors. Before making any lane, changes or passing maneuvers, a motorist " +
      "must check over his or her left or right shoulders to view the areas not " +
      "visible in the mirrors.",
    source: MANUAL,
    section: "III. Passing Another Vehicle - Passing a vehicle on the left",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "blowout",
    quote:
      "1. Grip the steering wheel firmly with two (2) hands. 2. Ease up on the " +
      "accelerator to slow the vehicle. Do not brake. Braking can cause the " +
      "vehicle to swerve.",
    source: MANUAL,
    section: "V. Driving Emergencies - Blowout or Flat Tire",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "booster-under-eight",
    quote:
      "3. Children under eight (8) years of age: Less than eighty (80) lbs. " +
      "and/or less than fifty-seven (57) inches. Booster seat or safety harness. " +
      "Back seats use only.",
    source: MANUAL,
    section: "III. Booster Seat/Safety Seat/Safety Belt Use Law",
    url: MANUAL_URL + "#page=27",
  },
  {
    key: "brake-failure-downshift",
    quote:
      "Downshift to a lower gear. This uses the braking power of the engine to " +
      "slow your vehicle. 3. Engage the parking brake. You can quickly release " +
      "the parking brake for a moment if the vehicle begins to skid.",
    source: MANUAL,
    section: "V. Driving Emergencies - Total Brake Failure",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "brake-failure-pump",
    quote:
      "Pump the brake pedal even if your vehicle is equipped with an Anti-lock " +
      "braking system. Pumping might temporarily restore enough brake fluid " +
      "pressure to slow or stop your vehicle. You will know after three (3) or " +
      "four (4) pumps if your brakes are going to hold.",
    source: MANUAL,
    section: "V. Driving Emergencies - Total Brake Failure",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "brake-failure-sideswipe",
    quote:
      "As a last resort, rub the wheels against a curb to reduce speed. If a " +
      "collision is unavoidable, steer for a sideswipe rather than colliding " +
      "head-on into something solid.",
    source: MANUAL,
    section: "V. Driving Emergencies - Total Brake Failure",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "brakes-warning-signs",
    quote:
      "Do not wait for the brake pedal to touch the floor before you schedule " +
      "repairs. If while braking, your vehicle pulls to one side, or, the pedal " +
      "feels spongy, follow the prescribed maintenance checks",
    source: MANUAL,
    section: "XIII. Equipment You Must Inspect - Brakes",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "braking-distance-wet",
    quote:
      "It is important to realize that on wet or icy roads the braking distance " +
      "will be much longer because of reduced traction. Therefore, when driving " +
      "in these conditions, you must drive slower.",
    source: MANUAL,
    section: "III. Stopping Your Vehicle",
    url: MANUAL_URL + "#page=28",
  },
  {
    key: "broken-lines",
    quote:
      "Broken Lines: Broken lines separate lanes of traffic. Motorists are " +
      "permitted to pass other vehicles (yellow or white) and change lanes " +
      "(white).",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "broken-side-may-pass",
    quote:
      "Motorists with the broken line at the drivers' side may pass another " +
      "vehicle with care.",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "broken-white-lines",
    quote:
      "Broken white lines allow motorists the opportunity to pass other vehicles " +
      "and change lanes.",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "broken-yellow",
    quote:
      "Broken yellow lines separate traffic traveling in opposite directions. " +
      "Passing another vehicle is permitted with care.",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "carbon-monoxide",
    quote:
      "If you begin to yawn or feel dizzy or nauseous, you may be experiencing " +
      "the symptoms of the poisoning. A leaking muffler can allow escaping carbon " +
      "monoxide to enter the interior of the vehicle. The fumes are odorless, and " +
      "the only cure is to open your windows and allow fresh air to circulate " +
      "within your vehicle.",
    source: MANUAL,
    section: "V. Carbon Monoxide Poisoning",
    url: MANUAL_URL + "#page=47",
  },
  {
    key: "ccri-course-content",
    quote:
      "The course includes 33 hours of classroom instruction and the Rhode Island " +
      "DMV Knowledge Test (Permit Test).",
    source: "Community College of Rhode Island, Rhode Island Driver Education and Traffic Safety (ccri.edu)",
    section: "Driver Education FAQs - What does the course include?",
    url: "https://www.ccri.edu/workforce/transportation/DriverEd.html",
  },
  {
    key: "ccri-enrolment-age",
    quote:
      "To enroll, students must: Be at least 15 years and 10 months old by the " +
      "first day of class.",
    source: "Community College of Rhode Island, Rhode Island Driver Education and Traffic Safety (ccri.edu)",
    section: "Driver Education FAQs - Who can enroll?",
    url: "https://www.ccri.edu/workforce/transportation/DriverEd.html",
  },
  {
    key: "ccri-pass-mark",
    quote:
      "Yes. The final exam serves as the Rhode Island DMV Knowledge Test. " +
      "Students must earn a passing score of 70%.",
    source: "Community College of Rhode Island, Rhode Island Driver Education and Traffic Safety (ccri.edu)",
    section: "Driver Education FAQs - Is there a final exam?",
    url: "https://www.ccri.edu/workforce/transportation/DriverEd.html",
  },
  {
    key: "ccri-supervised-driving",
    quote:
      "Rhode Island requires students to complete 50 hours of supervised drivin " +
      "with 10 of those hours at night (sunset to sunrise).",
    source: "Community College of Rhode Island, Rhode Island Driver Education and Traffic Safety (ccri.edu)",
    section: "Supervised Driving Requirements",
    url: "https://www.ccri.edu/workforce/transportation/DriverEd.html",
  },
  {
    key: "child-restraint-court",
    quote:
      "A violation for transporting a child not in a child restraint system " +
      "mandates a court appearance.",
    source: MANUAL,
    section: "III. Child Restraint Law - Penalty",
    url: MANUAL_URL + "#page=27",
  },
  {
    key: "child-restraint-exceptions",
    quote:
      "Children under age eight (8) years old are exempt from being transported " +
      "in any ear seating position if: the vehicle has no backseat (i.e., pickup " +
      "truck, sports car, etc.) all rear seating positions are already being " +
      "utilized by other children.",
    source: MANUAL,
    section: "III. Child Restraint Law - R.I.G.L. 31-22-22",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "child-restraint-fine",
    quote:
      "The fine, after a violation is sustained, for a child riding in the front " +
      "seat or for a child over age seven (7) years not in a child restraint " +
      "system is $85.00.",
    source: MANUAL,
    section: "III. Child Restraint Law - Penalty",
    url: MANUAL_URL + "#page=27",
  },
  {
    key: "child-restraint-outgrown",
    quote:
      "If the child is under eight (8) years old but at least fifty-seven (57) " +
      "inches in height, or at least eighty (80) pounds the child shall be " +
      "properly wearing a safety belt",
    source: MANUAL,
    section: "III. Child Restraint Law - R.I.G.L. 31-22-22",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "child-restraint-under-8",
    quote:
      "Any person transporting a child under the age of eight (8), less than " +
      "fifty-seven (57) inches (4 ½ feet tall) in height and less than eighty " +
      "(80) pounds in a motor vehicle operated on the roadways, streets, or " +
      "highways of this state, shall transport the child in any rear seating " +
      "position of the motor vehicle",
    source: MANUAL,
    section: "III. Child Restraint Law - R.I.G.L. 31-22-22",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "child-under-8-back-seat",
    quote:
      "Children who are less than eight (8) years old must be transported in a " +
      "federally approved restraint seat in the back seat of the vehicle.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "children-bicycles",
    quote:
      "Children's visual skills and depth perception may not be as developed as " +
      "well as adults and they may not be able to judge the speed and distance of " +
      "oncoming vehicles.",
    source: MANUAL,
    section: "VIII. Watching for Children on Bicycles",
    url: MANUAL_URL + "#page=56",
  },
  {
    key: "collision-1000-report",
    quote:
      "A collision involving personal injury or property damage in excess of " +
      "$1000.00 must additionally be reported to the police.",
    source: MANUAL,
    section: "XI. In Case of a Collision - What to do After a Collision",
    url: MANUAL_URL + "#page=65",
  },
  {
    key: "collision-common-causes",
    quote:
      "Driver/human error Speeding Driving after drinking and/or ingesting drugs " +
      "Driving too fast for the road conditions - " +
      "rain/snow/sleet/ice/construction",
    source: MANUAL,
    section: "XI. In Case of a Collision - Common Causes of Collisions",
    url: MANUAL_URL + "#page=65",
  },
  {
    key: "collision-information",
    quote:
      "The name, address, license, insurance carrier and policy number, and " +
      "registration state and number of the other driver: It is your right and " +
      "the right of the other driver to get this information.",
    source: MANUAL,
    section: "XI. In Case of a Collision - What to Report if you Have a Collision",
    url: MANUAL_URL + "#page=65",
  },
  {
    key: "collision-minor-move",
    quote:
      "In the event of a minor collision, if possible, drive your vehicle off to " +
      "the side of the roadway and notify the police.",
    source: MANUAL,
    section: "XI. In Case of a Collision - What to do After a Collision",
    url: MANUAL_URL + "#page=65",
  },
  {
    key: "collision-parked-vehicle",
    quote:
      "If you collide with or do damage to a parked vehicle or other property, " +
      "you must leave your name and address in writing attached securely to such " +
      "vehicle or property so that the owner may find it when he/she returns to " +
      "their vehicle or property.",
    source: MANUAL,
    section: "XI. In Case of a Collision - What to do After a Collision",
    url: MANUAL_URL + "#page=65",
  },
  {
    key: "collision-steps",
    quote:
      "1. Try to stay calm. 2. Stop your vehicle immediately. 3. Remain at the " +
      "scene of the collision and make your identity known to any interested " +
      "person.",
    source: MANUAL,
    section: "XI. In Case of a Collision - What to do After a Collision",
    url: MANUAL_URL + "#page=65",
  },
  {
    key: "covering-brake",
    quote:
      "Covering the brake means taking your foot off the accelerator pedal and " +
      "hovering it over the brake pedal without touching it, preparing to push " +
      "the brake pedal if a hazard should arise.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "crosswalk-legal",
    quote:
      "Any intersection of public roads constitutes a legal crosswalk whether it " +
      "is marked or not.",
    source: MANUAL,
    section: "VIII. Pedestrians",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "cruise-control-rain",
    quote:
      "NEVER DRIVE IN THE RAIN OR SNOW WITH YOUR CRUISE CONTROL ON. If the cruise " +
      "control is on when your car begins to hydroplane and your tires lose " +
      "contact with the pavement, your car will accelerate to a higher rate of " +
      "speed making you lose control.",
    source: MANUAL,
    section: "V. Driving in Inclement Weather",
    url: MANUAL_URL + "#page=47",
  },
  {
    key: "defensive-driving-def",
    quote:
      "Defensive driving is the art of protecting yourself and others from " +
      "dangerous and unexpected changes in the driving environment.",
    source: MANUAL,
    section: "VII. Systems for Safe, Courteous, and Defensive Driving",
    url: MANUAL_URL + "#page=50",
  },
  {
    key: "dim-500-200",
    quote:
      "Dim your high beam headlights promptly at a distance of at least 500 feet " +
      "ahead when approaching another vehicle. When following another vehicle at " +
      "a distance of 200 feet or less, dim your high beam headlights so that they " +
      "will not distract or blind the driver ahead.",
    source: MANUAL,
    section: "VIII. Night Driving - Dimming your headlights: 500/200 Rule",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "disabled-on-highway",
    quote:
      "Never stop in the traffic lane. Stop on a highway only if you must. Move " +
      "as far off the traffic lane as you can. If you need help, raise the hood " +
      "of your vehicle, tie a white cloth on the door handle and stay in your " +
      "locked vehicle.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "distraction-four-kinds",
    quote:
      "Distractions can be physical, mental, visual, or auditory in nature and " +
      "are often a combination of all.",
    source: MANUAL,
    section: "II. Distracted Driving - Types of distractions",
    url: MANUAL_URL + "#page=17",
  },
  {
    key: "distraction-vs-inattention",
    quote:
      "Distraction results when a situation, event or person draws a driver's " +
      "focus away from driving. Inattention, on the other hand, occurs when a " +
      "driver's attention drifts away from driving without having been influenced " +
      "by a situation, event, or person.",
    source: MANUAL,
    section: "II. Distracted Driving - Inattention and distraction",
    url: MANUAL_URL + "#page=17",
  },
  {
    key: "dmv-closed-course",
    quote:
      "Beginning in June of 2020 DMV examiners will be proctoring non-commercial " +
      "skills tests on a closed course and from outside the vehicle.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "Road Tests - Closed Course Testing Guide",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/road-tests",
  },
  {
    key: "dmv-exam-hours",
    quote:
      "The computerized knowledge exam is available Monday through Friday from " +
      "8:30 am to 2:45 pm at the DMV Cranston headquarters . A vision test will " +
      "be given at this time. These tests are available by reservation only.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "Permits & Tests",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests",
  },
  {
    key: "dmv-exam-languages",
    quote:
      "Computerized knowledge exams are administered in English, Spanish and " +
      "Portuguese . These tests are available during normal business hours by " +
      "reservation only.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "Knowledge Exams",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/knowledge-exams",
  },
  {
    key: "dmv-exam-retest-8-days",
    quote:
      "Applicants that fail to pass the knowledge exam must wait at least 8 days " +
      "before retaking the exam.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "Knowledge Exams - Failed Exams",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/knowledge-exams",
  },
  {
    key: "dmv-exam-study-manual",
    quote:
      "Be sure to prepare for the exam by studying the entire contents of the " +
      "Rhode Island Driver's Manual and bring a completed License/ID/Permit " +
      "Application as well as all required documents listed in the document " +
      "checklist.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "Knowledge Exams",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/knowledge-exams",
  },
  {
    key: "dmv-exam-where",
    quote:
      "Applicants 18 years of age and older must come to the DMV headquarters, " +
      "600 New London Ave, Cranston to take a computerized knowledge exam prior " +
      "to issuance of a learner's permit.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "Knowledge Exams",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/knowledge-exams",
  },
  {
    key: "dmv-no-online-driver-ed",
    quote:
      "Effective July 1, 2022, No Online Driver Education Courses are accepted, " +
      "nor are they an approved curriculum in the state of Rhode Island.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "Permits & Tests",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests",
  },
  {
    key: "dmv-permit-fees",
    quote:
      "License and ID Permit Instructional (age 18 and older) $8.50 License and " +
      "ID Permit Limited (under age 18) $13.50",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "Permit Fees",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/permit-fees",
  },
  {
    key: "dmv-permit-renewals",
    quote:
      "The learner's permit may be renewed two times and may be renewed by mail, " +
      "by drop box, or in person with a reservation. Learner's permits may not be " +
      "renewed online. If your permit has been renewed two times, you need to " +
      "retake the learner's permit test.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "New License Permits",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/new-license-permits",
  },
  {
    key: "dmv-permit-validity",
    quote:
      "This permit is valid for one year or until the applicant turns 18, " +
      "whichever is greater. A road test may not be given until the permit is " +
      "held for six months",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "New License Permits - Limited Instruction Permit",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/new-license-permits",
  },
  {
    key: "dmv-provisional-50-hours",
    quote:
      "You must also present an affidavit signed by a parent or guardian stating " +
      "that you have completed a minimum of 50 hours of driving experience with a " +
      "supervising driver with 10 of those hours at night.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "New License Permits - Limited Provisional License",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/new-license-permits",
  },
  {
    key: "dmv-provisional-conditions",
    quote:
      "You must have held the Limited Instructional Permit for at least 6 months, " +
      "passed a road test and not been convicted of a motor vehicle violation " +
      "during that period.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "New License Permits - Limited Provisional License",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/new-license-permits",
  },
  {
    key: "dmv-provisional-passengers",
    quote:
      "During the first twelve (12) months of a limited provisional license no " +
      "more than one passenger younger than twenty-one (21) years of age is " +
      "allowed in the vehicle. Immediate family/household members are excepted " +
      "from this subsection.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "New License Permits - Limited Provisional License",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/new-license-permits",
  },
  {
    key: "dmv-road-test-18-plus",
    quote:
      "Individuals 18 years of age or older must hold a Learner's Permit for at " +
      "least 30 days prior to their first scheduled road test.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "Road Tests - Who is Required to Take a Road Test",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/road-tests",
  },
  {
    key: "dmv-road-test-cancellation",
    quote:
      "A road test must be cancelled/ rescheduled at least 48 hours before the " +
      "scheduled test to avoid paying another road test fee.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "Road Tests - Cancellation/Rescheduling Policy",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/road-tests",
  },
  {
    key: "dmv-road-test-failures",
    quote:
      "Subsequent to the 1st Failure Applicant may return in no less than 30 days " +
      "Subsequent to a 2nd Failure Applicant may return in no less than 90 days " +
      "Subsequent to 3 or More Failures Applicant may return in no less than 180 " +
      "days.",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "Road Tests - Scheduling Road Tests After Failures",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/road-tests",
  },
  {
    key: "dmv-road-test-under-18",
    quote:
      "If you are between 16 1/2 and 18 years old, you must hold a Limited " +
      "Instruction Permit for at least six months prior to the first scheduled " +
      "road test (or until your 18th birthday).",
    source: "RI Division of Motor Vehicles, dmv.ri.gov",
    section: "Road Tests - Special Requirements for Individuals Under 18",
    url: "https://dmv.ri.gov/licenses-permits-ids/permits-tests/road-tests",
  },
  {
    key: "dooring",
    quote:
      "Dooring is when the driver or passenger carelessly opens the door of a " +
      "parked or stopped vehicle and collides with a passing cyclist.",
    source: MANUAL,
    section: "VIII. Dooring",
    url: MANUAL_URL + "#page=56",
  },
  {
    key: "drink-equivalence",
    quote:
      "A 12-ounce container of beer, a 4-to-5-ounce glass of wine and a 1 to 1 " +
      "1/2 ounce shot of hard liquor have about the same amount of alcohol per " +
      "serving.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - A. Effects of Alcohol",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "drinking-age-21",
    quote:
      "In Rhode Island, the legal drinking age is twenty-one (21).",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - A. Effects of Alcohol",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "driver-ed-age",
    quote:
      "Although you cannot obtain a Limited Learner Permit from the DMV until you " +
      "are sixteen (16), you are eligible to register for a driver education " +
      "class when you are between fifteen (15) and up to twenty-two (22) years of " +
      "age, provided you will be at least fifteen years and ten (10) months old " +
      "on the first day of class.",
    source: MANUAL,
    section: "I. Applying - Can I take the driver education course before the age of 16?",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "driveway-two-stops",
    quote:
      "When entering the roadway from a private road or driveway, you must stop " +
      "at the sidewalk before continuing to the curb line where you are mandated " +
      "to stop again.",
    source: MANUAL,
    section: "III. Entering the Roadway from a Private Road or Driveway",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "driving-is-a-privilege",
    quote:
      "Driving a motor vehicle is a privilege and not a right. A license to drive " +
      "brings with it a serious responsibility for the safety of others and " +
      "yourself.",
    source: MANUAL,
    section: "XVI. One Final Word",
    url: MANUAL_URL + "#page=71",
  },
  {
    key: "drowsy-20-hours",
    quote:
      "Research shows that being awake for 20 hours produces impairment equal to " +
      "a blood alcohol concentration (BAC) of .05 percent. After 24 hours awake, " +
      "the impairment rises to equal to a BAC of .10 percent.",
    source: MANUAL,
    section: "II. Drowsy Driving - Who is at risk?",
    url: MANUAL_URL + "#page=21",
  },
  {
    key: "drowsy-circadian",
    quote:
      "Most people experience \"lows\" between midnight and 6 a.m. and again " +
      "between approximately 2 p.m. to 5 p.m.",
    source: MANUAL,
    section: "II. Drowsy Driving - Who is at risk?",
    url: MANUAL_URL + "#page=21",
  },
  {
    key: "drowsy-ineffective",
    quote:
      "Trying to tough it out. Playing music at high volume. Driving at a faster " +
      "or slower speed. Chewing gum or eating. Opening the windows/sunroof. " +
      "Products with caffeine Smoking products Turning up the AC",
    source: MANUAL,
    section: "II. Drowsy Driving - Ineffective actions",
    url: MANUAL_URL + "#page=22",
  },
  {
    key: "drowsy-warning-signs",
    quote:
      "Difficulty focusing, frequent blinking or heavy eyelids. Yawning " +
      "repeatedly or rubbing your eyes. Daydreaming; wandering/disconnected " +
      "thoughts. Trouble remembering the last few miles driven; missing exits or " +
      "traffic signs.",
    source: MANUAL,
    section: "II. Drowsy Driving - How can you tell if you are at risk of drowsy driving?",
    url: MANUAL_URL + "#page=21",
  },
  {
    key: "drowsy-young-drivers",
    quote:
      "Drivers under age 30 are involved in over two-thirds of all fall-asleep " +
      "crashes. Additionally, these drivers are four times more likely to " +
      "experience a sleep related crash than drivers aged 30 and older.",
    source: MANUAL,
    section: "II. Drowsy Driving - Who is at risk?",
    url: MANUAL_URL + "#page=21",
  },
  {
    key: "dutch-reach",
    quote:
      "Operators of motor vehicles should practice 'Dutch Reach'. This is the " +
      "practice of opening the driver's door with the right hand, turning your " +
      "head, and looking out the side and rear windows.",
    source: MANUAL,
    section: "VIII. Dooring",
    url: MANUAL_URL + "#page=56",
  },
  {
    key: "dwi-18-21-first",
    quote:
      "Driving while impaired (DWI) 18-21 years of age BAC: 0.02% - 0.08% 1st " +
      "violation 1 - 3 month license suspension",
    source: MANUAL,
    section: "X. Penalties - Driving while impaired (DWI) 18-21 years of age",
    url: MANUAL_URL + "#page=62",
  },
  {
    key: "dwi-under-18-first",
    quote:
      "BAC 0.02% - 0.08% 1st Violation 6 - 12 month license suspension",
    source: MANUAL,
    section: "X. Penalties - Driving While Impaired (DWI) Under 18 years of age",
    url: MANUAL_URL + "#page=62",
  },
  {
    key: "earphones-banned",
    quote:
      "Drivers in Rhode Island are not allowed to operate a motor vehicle upon a " +
      "public highway while wearing earphones or headsets.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "emergency-vehicle-pull-right",
    quote:
      "At all times, give emergency vehicles the right-of-way. If an emergency " +
      "vehicle is approaching, pull over to the right, stop and wait for it to " +
      "pass.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "emergency-vehicle-rejoin",
    quote:
      "Before re-entering the flow of traffic, activate your turn signal, glance " +
      "over your shoulder to ensure another emergency vehicle is not coming, then " +
      "proceed.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "emotions-run-lights",
    quote:
      "The upset or emotionally charged driver may look directly at a traffic " +
      "light or stop sign and drive through it. That same person also may follow " +
      "too closely and pass on hills or curves.",
    source: MANUAL,
    section: "II. Emotions - Effects of emotions",
    url: MANUAL_URL + "#page=23",
  },
  {
    key: "engine-failure",
    quote:
      "If you are driving and the engine suddenly shuts off, sputters or spots, " +
      "shift to NEUTRAL (and try to restart the vehicle) when the engine first " +
      "sputters or stops.",
    source: MANUAL,
    section: "V. Driving Emergencies - Engine Failure",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "engine-failure-steering",
    quote:
      "Steering will be harder when power is lost by engine failure.",
    source: MANUAL,
    section: "V. Driving Emergencies - Engine Failure",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "exam-ccri",
    quote:
      "All applicants who take the thirty-three (33) hour driver education course " +
      "with CCRI take the RI DMV Knowledge examination (Permit test) through " +
      "CCRI. Applicants must successfully complete the course and pass the exam, " +
      "to apply for their Limited Learner Permit.",
    source: MANUAL,
    section: "I. Applying - Before Getting a Limited Learner Permit",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "exam-format",
    quote:
      "First-time applicants (and those who fail the RI DMV knowledge exam " +
      "through CCRI) must take the computerized examination at the main office of " +
      "the DMV in Cranston. The computerized knowledge exam has a 90-minute " +
      "maximum and consist of forty (40) multiple choice questions. An online " +
      "Reservation is required.",
    source: MANUAL,
    section: "I. Applying - Who must take the knowledge exam?",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "exam-prep",
    quote:
      "The computerized knowledge exam questions are based on the motor vehicle " +
      "laws and the rules of the road. Applicants should study this manual to " +
      "prepare for the knowledge exam.",
    source: MANUAL,
    section: "I. Applying - How do I prepare for the knowledge exam?",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "eyes-off-two-seconds",
    quote:
      "Looking away from the path of travel for two or more seconds doubles the " +
      "likelihood of a crash.",
    source: MANUAL,
    section: "II. The Effects of Distractions, Drowsiness, and Emotions on Driving - Distracted Driving",
    url: MANUAL_URL + "#page=17",
  },
  {
    key: "flashing-red",
    quote:
      "FLASHING RED SIGNAL A flashing red signal is treated as a stop sign.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals - signal panel",
    url: MANUAL_URL + "#page=42",
  },
  {
    key: "flashing-yellow",
    quote:
      "Flashing Yellow Light: Slow down, cover the brake, then proceed with " +
      "caution.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "When a flashing yellow arrow is displayed, you may proceed with turning in " +
      "the direction of the arrow only after yielding to oncoming traffic and " +
      "pedestrians. Oncoming traffic has a steady green light.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "flashing-yellow-panel",
    quote:
      "FLASHING YELLOW SIGNAL A flashing yellow will tell motorists to proceed " +
      "with caution.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals - signal panel",
    url: MANUAL_URL + "#page=42",
  },
  {
    key: "follow-500-emergency",
    quote:
      "Always drive 500 feet behind emergency vehicles.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "four-way-stop-order",
    quote:
      "Once stopped, you must yield to all other vehicles that were stopped prior " +
      "to your arrival at the stop sign. Once having stopped, all other vehicles " +
      "arriving at the intersection after you must yield the right of way to you.",
    source: MANUAL,
    section: "III. Stopping and Parking - Four-Way Stops",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "four-way-stop-tie",
    quote:
      "If two vehicles arrive at the intersection at the same time, you must " +
      "yield the right of way to the vehicle on your right.",
    source: MANUAL,
    section: "III. Stopping and Parking - Four-Way Stops",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "freeway-breakdown-lane",
    quote:
      "If you must stop on a freeway because of mechanical or other emergencies, " +
      "signal and move your vehicle into the breakdown lane if possible.",
    source: MANUAL,
    section: "III. Freeway/Highway Driving Limited Access Highway",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "freeway-lane-use",
    quote:
      "The far-left lane is for passing other vehicles. Trucks, buses, and other " +
      "special vehicles are prohibited from traveling in this lane where posted. " +
      "The middle lane(s) is (are) for through traffic. The right lane is for " +
      "slower moving traffic and for motorists entering and exiting the freeway.",
    source: MANUAL,
    section: "III. Freeway/Highway Driving Limited Access Highway",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "freeway-repairs-four-wheels",
    quote:
      "If it becomes necessary to make repairs along any highway, be sure to move " +
      "the vehicle to a place where all four wheels are off the main pavement. Be " +
      "sure to turn on the vehicle's hazard (emergency) flashing lights.",
    source: MANUAL,
    section: "III. Freeway/Highway Driving Limited Access Highway",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "full-licence-requirements",
    quote:
      "To receive a FULL OPERATOR'S LICENSE, you must: 1. Be between seventeen " +
      "(17) years, six (6) months and eighteen (18) years of age. 2. Have held a " +
      "Learner Provisional License for at least twelve (12) months",
    source: MANUAL,
    section: "I. Applying - Summary: Rhode Island's Graduated Licensing System",
    url: MANUAL_URL + "#page=16",
  },
  {
    key: "gdl-three-levels",
    quote:
      "Rhode Island has a graduated licensing system for persons under age " +
      "eighteen (18) wishing to drive a motor vehicle. The three levels of the " +
      "graduated licensing system are: Learner instructional permit, Learner " +
      "provisional license and full operator's license. They are described below.",
    source: MANUAL,
    section: "I. Applying For a Rhode Island Driver's License",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "glare-recovery",
    quote:
      "To avoid being temporarily blinded by approaching headlights, glance at " +
      "the right edge of the roadway (or fog line: the white line on the right " +
      "side of most roadways) until the bright lights have gone by and your " +
      "vision has returned to normal.",
    source: MANUAL,
    section: "VIII. Night Driving - Approaching headlights",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "glare-recovery-time",
    quote:
      "Motorists who stare into oncoming vehicles headlights or rear-view mirror " +
      "light will experience temporary blindness as their body regains sight from " +
      "the glare. This temporary blindness time is known as glare recovery time.",
    source: MANUAL,
    section: "VIII. Night Driving - Approaching headlights",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "green-arrow",
    quote:
      "Vehicles at the light may proceed into the intersection and turn in the " +
      "direction indicated by the green arrow. This is known as a protected turn " +
      "lane.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "hand-signals",
    quote:
      "To turn left: Put left hand and arm straight out, keeping hand and arm " +
      "still. To turn right: Put left hand and arm up, keeping hand and arm " +
      "still. To stop or slow down: Put left hand and arm down, keeping hand and " +
      "arm still.",
    source: MANUAL,
    section: "IV. Signals and Roadway Markings - Signals",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "handsfree-not-safer",
    quote:
      "While a hands-free device may initially appear to be less distracting, " +
      "research indicates no differences in risk between the two modes.",
    source: MANUAL,
    section: "II. Distracted Driving - Hand-held versus hands-free",
    url: MANUAL_URL + "#page=18",
  },
  {
    key: "hawk-crosswalk",
    quote:
      "HAWK: High-Intensity Activated Crosswalk is used to let pedestrians safely " +
      "cross a street.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=42",
  },
  {
    key: "hazard-reduce-speed",
    quote:
      "When you see a potential hazard ahead such as children playing in the " +
      "street, a vehicle parked close Rhode Island Driver's Manual - " +
      "www.dmv.ri.gov 54 to the highway, etc., reduce speed right away. Do not " +
      "wait until you come upon the hazard before acting. Stop if necessary.",
    source: MANUAL,
    section: "VIII. Pedestrians",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "head-on-horn-lights",
    quote:
      "Sound the horn and flash the headlights. These actions might alert an " +
      "impaired (distracted) driver.",
    source: MANUAL,
    section: "V. Driving Emergencies - Threat of a Head-on Collision",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "head-on-steer-right",
    quote:
      "3. Steer right toward the shoulder or curb-line. 4. Do not steer left. The " +
      "other driver likely will try to steer back into the proper lane.",
    source: MANUAL,
    section: "V. Driving Emergencies - Threat of a Head-on Collision",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "headlight-failure",
    quote:
      "1. Turn on your parking lights, fog lights, hazard (emergency) flashers, " +
      "or turn signal. 2. Try the headlight switch a few times. 3. If your " +
      "vehicle is equipped with fog lights, try them. 4. Try the high beam " +
      "switch. It may be on a separate circuit.",
    source: MANUAL,
    section: "V. Driving Emergencies - Headlight Failure",
    url: MANUAL_URL + "#page=45",
  },
  {
    key: "headlights-inclement",
    quote:
      "Headlights must be turned on if it is raining or snowing (inclement " +
      "weather) or in conditions which would reduce visibility to less than 500 " +
      "feet. Headlights must be on anytime windshield wipers are on.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "headlights-when-required",
    quote:
      "The law requires motorists to turn their headlights on when driving from " +
      "sunset to sunrise, any time you cannot see 500 feet ahead of you, and when " +
      "windshield wipers are in use as a result of rain, sleet, snow, etc.",
    source: MANUAL,
    section: "VIII. Night Driving - Using your headlights",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "high-beam-courtesy",
    quote:
      "When using high-beam headlights, return to using low-beam headlights as " +
      "soon as you detect an oncoming vehicle. Do not drive behind another " +
      "vehicle with your high-beam headlights on.",
    source: MANUAL,
    section: "II. Preventing Aggressive Driving and Road Rage",
    url: MANUAL_URL + "#page=24",
  },
  {
    key: "high-beams-reflect",
    quote:
      "In these situations, high beams may reflect off the snow, rain, or fog in " +
      "the air and shorten the distance you can see.",
    source: MANUAL,
    section: "VIII. Night Driving - Using your headlights",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "hill-start",
    quote:
      "When starting your vehicle on the hill, look over your left shoulder to be " +
      "sure that traffic is clear, put the vehicle in gear, signal, release the " +
      "parking brake and drive out carefully.",
    source: MANUAL,
    section: "III. Starting on a Hill",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "hit-and-run-penalties",
    quote:
      "Severe penalties are imposed against drivers who choose to leave the scene " +
      "of a collision ('hit and run') without properly identifying themselves.",
    source: MANUAL,
    section: "XI. In Case of a Collision - What to do After a Collision",
    url: MANUAL_URL + "#page=65",
  },
  {
    key: "horn-sparingly",
    quote:
      "Use your horn sparingly. A couple of short taps may be perceived as less " +
      "aggressive than one long blast.",
    source: MANUAL,
    section: "II. Preventing Aggressive Driving and Road Rage",
    url: MANUAL_URL + "#page=24",
  },
  {
    key: "horses-on-highway",
    quote:
      "You are required by Rhode Island law to reduce your speed and refrain from " +
      "sounding a horn or causing other loud noises when approaching a horse " +
      "being driven or ridden upon a public highway.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "hydroplaning",
    quote:
      "Hydroplaning occurs when the front tires of your vehicle lose contact with " +
      "the road surface on a wet road, and you lose steering capability.",
    source: MANUAL,
    section: "III. Stopping Your Vehicle",
    url: MANUAL_URL + "#page=28",
  },
  {
    key: "hydroplaning-guard",
    quote:
      "Guard against hydroplaning by keeping tire pressure inflated to " +
      "manufacturer's recommended standard, reducing speed, and being careful " +
      "while driving in the rain.",
    source: MANUAL,
    section: "III. Stopping Your Vehicle",
    url: MANUAL_URL + "#page=28",
  },
  {
    key: "implied-consent",
    quote:
      "Implied consent means that any person who operates a motor vehicle within " +
      "this state shall be deemed to have given his or her consent to chemical " +
      "tests of his or her breath, blood, saliva and/or urine for the purpose of " +
      "determining the chemical content of his or her body fluids or breath.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - C. Implied Consent",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "infants-rear-facing",
    quote:
      "Birth to at least a minimum of age two (2) years old or at least 30 lbs. " +
      "Rear-facing only and/or convertible car seat. Back seats use only.",
    source: MANUAL,
    section: "III. Booster Seat/Safety Seat/Safety Belt Use Law",
    url: MANUAL_URL + "#page=27",
  },
  {
    key: "inspection-sticker-exception",
    quote:
      "The vehicle must have a valid inspection sticker that has not expired " +
      "(Exception: Vehicles under two (2) years old or with less than 24,000 " +
      "miles are not required to have an inspection sticker).",
    source: MANUAL,
    section: "XV. Passing Your Driver Skills Test",
    url: MANUAL_URL + "#page=70",
  },
  {
    key: "insurance-proof-fine",
    quote:
      "Proof of insurance ($500 fine for failure to comply) must be carried in " +
      "your vehicle along with the registration at all times.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "insurance-required",
    quote:
      "All persons driving on the state's public roads must carry motor vehicle " +
      "liability insurance.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "ipde",
    quote:
      "Identify: Locate any hazards in the driving scene by getting the big " +
      "picture. THINK! Predict: Judge where possible points of conflict may " +
      "occur. THINK! Decide: Determine the actions to take and when and where to " +
      "take them. THINK! Execute: Act by maneuvering the vehicle to avoid any " +
      "conflict.",
    source: MANUAL,
    section: "VII. Systems for Safe, Courteous, and Defensive Driving",
    url: MANUAL_URL + "#page=50",
  },
  {
    key: "keep-right-unless-passing",
    quote:
      "Drive in the right lane unless otherwise posted or if you are passing " +
      "another vehicle. Making frequent lane changes are unsafe. Slow traffic " +
      "must always keep to the right.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "lane-change-steps",
    quote:
      "1. Is the lane clear? 2. Signal your intent with sufficient time to warn " +
      "other motorists of your (intent). 3. Check your mirrors and look over your " +
      "shoulder to make sure the blind spots of the mirrors are clear and no " +
      "other vehicle has entered your intended path.",
    source: MANUAL,
    section: "III. Starting from the Curb or Making a Safe Lane Change",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "lane-position-1",
    quote:
      "Lane position 1: Vehicle in the middle of the lane. This is the safest " +
      "position to drive under normal driving situations when no potential " +
      "hazards exist to the left and right of the roadway.",
    source: MANUAL,
    section: "VII. Lane Positions",
    url: MANUAL_URL + "#page=51",
  },
  {
    key: "lane-position-2",
    quote:
      "Lane position 2: Vehicle position three (3) to six (6) inches from the " +
      "left line of the lane. This is the position to drive if hazards exist to " +
      "the right of the vehicle or you intend to turn left.",
    source: MANUAL,
    section: "VII. Lane Positions",
    url: MANUAL_URL + "#page=51",
  },
  {
    key: "lane-position-3",
    quote:
      "Lane position 3: Vehicle positions three (3) to six (6) inches from the " +
      "right line or curb of the lane. This is the position to drive if hazards " +
      "exist to the left of your vehicle or you intend to turn right.",
    source: MANUAL,
    section: "VII. Lane Positions",
    url: MANUAL_URL + "#page=51",
  },
  {
    key: "leaving-parked-position",
    quote:
      "Look to the rear. Check the rear view and side view mirrors and look over " +
      "your left shoulder to cover the blind spots. 3. Signal first, then drive " +
      "from the parking spot carefully.",
    source: MANUAL,
    section: "III. Stopping and Parking - To enter a traffic lane from a parked position",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "left-turn-crashes",
    quote:
      "Twenty-two percent of all crashes occur when one vehicle is turning left. " +
      "Most of these would not happen if the driver made the turn properly. " +
      "Studies have shown that a motorist's greatest risk of a motor vehicle " +
      "collision occurs at an intersection.",
    source: MANUAL,
    section: "III. How To Turn",
    url: MANUAL_URL + "#page=29",
  },
  {
    key: "left-turn-next-intersection",
    quote:
      "If you can't work your way to the center early enough, go on to the next " +
      "intersection.",
    source: MANUAL,
    section: "III. How To Turn - Making proper turns from proper lanes",
    url: MANUAL_URL + "#page=29",
  },
  {
    key: "left-turn-signal-early",
    quote:
      "Upon approaching an intersection at which you wish to make a left turn, " +
      "you must give the proper signal in sufficient time to warn the driver of " +
      "any vehicle behind you.",
    source: MANUAL,
    section: "III. How To Turn - Making proper turns from proper lanes",
    url: MANUAL_URL + "#page=29",
  },
  {
    key: "licence-five-years",
    quote:
      "Your license is valid for a maximum of five (5) years.",
    source: MANUAL,
    section: "XVII. Appendices - Renewing your driver's license",
    url: MANUAL_URL + "#page=75",
  },
  {
    key: "licence-suspension-effect",
    quote:
      "You cannot legally drive a motor vehicle in Rhode Island or any other " +
      "state for any reason during the suspension period.",
    source: MANUAL,
    section: "I. Applying - What happens if my license or registration is suspended?",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "limited-access-def",
    quote:
      "The term \"limited access\" means that there are no intersections on these " +
      "roads.",
    source: MANUAL,
    section: "III. Freeway/Highway Driving Limited Access Highway",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "littering-fine",
    quote:
      "Littering: It is a violation of Rhode Island law to litter on public or " +
      "private roadways or property ($85 to $1000 dollar fine).",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "low-beams-weather",
    quote:
      "The law requires that you use your low beam headlights during inclement " +
      "weather conditions such as snow, rain, and fog or whenever there are " +
      "conditions that reduce visibility.",
    source: MANUAL,
    section: "VIII. Night Driving - Using your headlights",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "marijuana-effects",
    quote:
      "Studies have shown that marijuana can have a negative effect on drivers " +
      "through reduced reaction time, altered attention to the road, and " +
      "increased lane weaving.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - A. Effects of Alcohol",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "minor-phone-ban",
    quote:
      "Drivers under the age of 18 are prohibited from using a personal wireless " +
      "communication device commonly call a cell phone while operating a motor " +
      "vehicle, per R.I.G.L. 31-22-11.8, 31-22-11.9, 31-22-30 and 31-22-31. This " +
      "includes a prohibition from using a hands-free device or speakerphone.",
    source: MANUAL,
    section: "III. Cellular Phone Usage - Personal Wireless Communications Devices",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "minor-phone-emergency",
    quote:
      "The only time a minor is permitted to use a cell phone is in an emergency. " +
      "If you are under 18, do not use a cell phone unless you have an emergency. " +
      "If you have an emergency, pull to a safe location, and call 911.",
    source: MANUAL,
    section: "III. Cellular Phone Usage - Personal Wireless Communications Devices",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "minor-phone-penalties",
    quote:
      "First Offense = $100.00 fine Second Offense = $150.00 fine Third and " +
      "subsequent offences = $250.00 fine + lose license until 18 years of age.",
    source: MANUAL,
    section: "III. Cellular Phone Usage - Wireless communication device penalties",
    url: MANUAL_URL + "#page=37",
  },
  {
    key: "missed-exit",
    quote:
      "If you miss your exit ramp, go on to the next exit. Never stop and back up " +
      "to the missed exit.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "motorcycle-eye-protection",
    quote:
      "Eye protection in the form of glasses, goggles or a face shield can reduce " +
      "or prevent eye injuries.",
    source: MANUAL,
    section: "VI. Motorcycles - Use of Protective Equipment",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "motorcycle-four-seconds",
    quote:
      "Keep at least four (4) second space cushion when following a motorcyclist.",
    source: MANUAL,
    section: "VI. Motorcycles",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "motorcycle-helmet-law",
    quote:
      "A helmet properly worn can reduce or prevent head injuries. Rhode Island " +
      "law requires passengers on motorcycles to wear helmets. In addition, any " +
      "operator under twenty-one (21) shall always wear a certified helmet. New " +
      "operators, regardless of age, must wear an approved helmet for the first " +
      "year of their license.",
    source: MANUAL,
    section: "VI. Motorcycles - Use of Protective Equipment",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "motorcycle-hidden",
    quote:
      "Because of its small size, a motorcycle can be easily hidden by objects " +
      "inside or outside a car (door posts, mirrors, passengers, bushes, fences, " +
      "bridges, blind spots, etc.). Take an extra moment to thoroughly check " +
      "traffic, whether you are changing lanes or turning at intersections.",
    source: MANUAL,
    section: "VI. Motorcycles",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "motorcycle-lane-position",
    quote:
      "Motorcyclists often adjust position within a lane to be seen more easily " +
      "and to minimize the effects of wind, road debris, and passing vehicles.",
    source: MANUAL,
    section: "VI. Motorcycles",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "motorcycle-look-twice",
    quote:
      "Look twice to save a life before making lane changes or turning at " +
      "intersections.",
    source: MANUAL,
    section: "VI. Motorcycles",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "motorcycle-looks-farther",
    quote:
      "Because of its small size, a motorcycle may look farther away than it is. " +
      "When checking traffic to turn at an intersection, predict a motorcycle is " +
      "closer than it looks.",
    source: MANUAL,
    section: "VI. Motorcycles",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "motorcycle-no-brake-light",
    quote:
      "Motorcyclists often reduce speed by downshifting or merely rolling off the " +
      "throttle, thus not activating the brake light. Allow for more following " +
      "distance, four (4) seconds.",
    source: MANUAL,
    section: "VI. Motorcycles",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "motorcycle-passenger",
    quote:
      "Carrying a passenger complicates a motorcyclist's task. Balance is more " +
      "difficult, stopping distance is increased, and maneuverability is reduced.",
    source: MANUAL,
    section: "VI. Motorcycles",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "move-over-law",
    quote:
      "Move Over Law. If you are driving on an interstate or roadway with " +
      "multiple lanes of travel in the same direction, you must move over by " +
      "changing lanes away from the designated vehicle as soon as it is safe to " +
      "do so. If you are not able to safely move over, you must slow down.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "no-drinking-while-driving",
    quote:
      "IT IS AGAINST THE LAW FOR A DRIVER OF ANY AGE TO CONSUME AN ALCOHOLIC " +
      "BEVERAGE or DRUG WHILE DRIVING.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - E. Penalties",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "no-hitchhikers",
    quote:
      "Do not stop to pick up hitchhikers at any time.",
    source: MANUAL,
    section: "VIII. Pedestrians",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "no-park-basic-list",
    quote:
      "1. On the travel portion of the highway. 2. Beside a vehicle stopped or " +
      "parked at the side of a street (Double Parking). 3. On a sidewalk. 4. " +
      "Within an intersection. 5. Beside any roadwork so that you block traffic. " +
      "6. On a bridge or in a tunnel. 7. On any railroad tracks.",
    source: MANUAL,
    section: "III. Stopping and Parking - Where you may not park or stop",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "no-park-curb-cut",
    quote:
      "16. At any curb cut or ramp for handicapped persons.",
    source: MANUAL,
    section: "III. Stopping and Parking - Where you may not park or stop",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "no-park-fire-station",
    quote:
      "13. Within 20 feet of the driveway of a fire station or across the street " +
      "within 75 feet of the driveway, where there are signs.",
    source: MANUAL,
    section: "III. Stopping and Parking - Where you may not park or stop",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "no-park-hydrant-crosswalk",
    quote:
      "10. Within 8 feet of a fire hydrant. 11. Within 20 feet of a crosswalk at " +
      "an intersection. 12. Within 30 feet of a flashing red or yellow light, a " +
      "stop sign, or a traffic light.",
    source: MANUAL,
    section: "III. Stopping and Parking - Where you may not park or stop",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "no-park-railroad",
    quote:
      "15. Within 50 feet of the nearest rail or a railroad crossing unless you " +
      "stop for just a short time to load or unload passengers or packages.",
    source: MANUAL,
    section: "III. Stopping and Parking - Where you may not park or stop",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "no-rental-road-test",
    quote:
      "Rental vehicles are not allowed for the driver skills test.",
    source: MANUAL,
    section: "XV. Passing Your Driver Skills Test",
    url: MANUAL_URL + "#page=70",
  },
  {
    key: "noise-limits",
    quote:
      "In speed zones of thirty-five miles per hour (35 mph) or less, not more " +
      "than eighty-six (86) dbA. In speed zones of more than thirty-five miles " +
      "per hour (35 mph), not more than ninety (90) dbA.",
    source: MANUAL,
    section: "XVII. Appendices - Miscellaneous Motor Vehicle Laws (R.I.G.L. 31-45-1)",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "off-road-counter-steer",
    quote:
      "Counter-steer sharply the instant the front tires touch the roadway. You " +
      "counter-steer when you steer in the opposite direction.",
    source: MANUAL,
    section: "V. Driving Emergencies - Off Road Recovery",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "off-road-recovery",
    quote:
      "3. Position your vehicle so it straddles the roadway edge. 4. Select a " +
      "place to return to the roadway, where the shoulder is nearest the level of " +
      "the roadway.",
    source: MANUAL,
    section: "V. Driving Emergencies - Off Road Recovery",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "only-time-sobers",
    quote:
      "After drinking, there is nothing that will reduce the effects of alcohol " +
      "except time. Coffee, food, fresh air, or exercise might wake an " +
      "intoxicated person up, but it will not sober them up.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - A. Effects of Alcohol",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "open-zone",
    quote:
      "Open zone: A area you can drive without restrictions to your line of sight " +
      "or intended path of travel.",
    source: MANUAL,
    section: "VII. Systems for Safe, Courteous, and Defensive Driving - ZONES",
    url: MANUAL_URL + "#page=50",
  },
  {
    key: "otc-drugs",
    quote:
      "Most drugs taken for headaches, colds, hay fever, allergy, or to calm " +
      "nerves can make you drowsy and can affect your control of a motor vehicle.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - A. Effects of Alcohol",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "out-of-state-transfer",
    quote:
      "If your out-of-state license is currently valid or has not been expired " +
      "for more than five (5) years, you will not be required to take a " +
      "computerized knowledge exam or a driving skills test.",
    source: MANUAL,
    section: "I. Applying - Out-of-State Drivers",
    url: MANUAL_URL + "#page=16",
  },
  {
    key: "park-12-inches",
    quote:
      "Unless a law prohibits parking, a vehicle parked on a two-lane road must " +
      "have the right wheels a maximum of twelve (12) inches from the right side " +
      "of the road or curb.",
    source: MANUAL,
    section: "III. Stopping and Parking - Where you may not park or stop",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "park-one-way",
    quote:
      "On a one-way road, a parked vehicle may have either wheel a maximum of " +
      "twelve (12) inches from the side of the road and headed in the same way " +
      "the traffic goes.",
    source: MANUAL,
    section: "III. Stopping and Parking - Where you may not park or stop",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "parking-brake-equipment",
    quote:
      "Note, the parking brake serves as a means of stopping a vehicle's movement " +
      "and therefore, it too must be in proper working order.",
    source: MANUAL,
    section: "XIII. Equipment You Must Inspect - Brakes",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "parking-secure-vehicle",
    quote:
      "Stop the engine, lock the ignition switch, remove the key, and set the " +
      "parking brake.",
    source: MANUAL,
    section: "III. Stopping and Parking",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "passing-lane-law",
    quote:
      "On multiple lane highways, the law requires you to use the left lane to " +
      "pass and the right lane for through traffic or normal driving.",
    source: MANUAL,
    section: "III. Passing Another Vehicle - Passing a vehicle on the left",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "passing-limits",
    quote:
      "7. In general, pass vehicles only on the left. 8. Never pass more than one " +
      "(1) vehicle. 9. Never travel over the posted speed to pass a vehicle.",
    source: MANUAL,
    section: "III. Passing Another Vehicle - Passing a vehicle on the left",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "passing-off-pavement",
    quote:
      "Under no conditions can you drive off the pavement or main traveled " +
      "portion of the road to pass a motor vehicle.",
    source: MANUAL,
    section: "III. Passing Another Vehicle - Passing a vehicle on the right",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "passing-return-mirror",
    quote:
      "You should go far enough past the vehicle you are passing so that you are " +
      "able to see the tires on the pavement of the vehicle you passed in your " +
      "inside rear-view mirror.",
    source: MANUAL,
    section: "III. Passing Another Vehicle - Passing a vehicle on the left",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "passing-right-conditions",
    quote:
      "A driver may pass on the right of another vehicle only as follows: 1. When " +
      "the motor vehicle ahead is making or about to make a left turn 2. On a " +
      "street or highway that is wide enough for two or more lanes of traffic " +
      "with no obstructions and not occupied by parked vehicles.",
    source: MANUAL,
    section: "III. Passing Another Vehicle - Passing a vehicle on the right",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "passing-three-questions",
    quote:
      "All three (3) questions must be YES for you to justify passing: 1. Is " +
      "Passing Legal? 2. Is Passing Safe? 3. Is Passing Worth it?",
    source: MANUAL,
    section: "III. Passing Another Vehicle",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "passing-where-dangerous",
    quote:
      "Passing on a hill, curve, railroad crossing, at an intersection, where " +
      "signs prohibit, over solid lines, entering a tunnel or bridge, or over the " +
      "posted speed limit is dangerous and may be the last mistake you make.",
    source: MANUAL,
    section: "III. Passing Another Vehicle - Passing a vehicle on the right",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "pedestrian-always-yield",
    quote:
      "Even in situations where pedestrians cross the street carelessly, the " +
      "driver must always yield.",
    source: MANUAL,
    section: "VIII. Pedestrians",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "pedestrian-children",
    quote:
      "Use caution when children are playing in or near the street. Children " +
      "often move quickly and may not check for traffic.",
    source: MANUAL,
    section: "VIII. Pedestrians",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "pedestrian-facing-traffic",
    quote:
      "When there are sidewalks, pedestrians should not walk on or along the " +
      "highway. If there are no sidewalks, pedestrians should walk on the left " +
      "side of the road facing traffic.",
    source: MANUAL,
    section: "VIII. Pedestrians",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "permit-definition",
    quote:
      "The Limited (Learner) Instructional Permit is a preliminary license for " +
      "persons learning to drive and who have passed the computerized knowledge " +
      "exam and who are under the age of eighteen (18).",
    source: MANUAL,
    section: "I. Applying - Limited Learner Permit",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "permit-front-seat",
    quote:
      "No person other than the supervising driver is located in the front seat " +
      "of automobile. 4. Every person occupying the vehicle is properly fastened " +
      "by a seat belt or child restraint system.",
    source: MANUAL,
    section: "I. Applying - Summary: Rhode Island's Graduated Licensing System",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "permit-hold-six-months",
    quote:
      "You must hold a Learner Instructional Permit for at least six (6) months " +
      "before you can take a Rhode Island DMV driving skills test.",
    source: MANUAL,
    section: "I. Applying - How long must I drive with a Limited Instructional Permit?",
    url: MANUAL_URL + "#page=12",
  },
  {
    key: "permit-liability",
    quote:
      "The licensed driver is legally responsible for any driving violation you " +
      "may commit.",
    source: MANUAL,
    section: "I. Applying - What does a Limited Learner Permit allow me to do?",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "permit-over-18",
    quote:
      "If you are over the age of eighteen (18), you are not required to attend " +
      "the classroom course, but you must take the computerized knowledge exam.",
    source: MANUAL,
    section: "I. Applying - Before Getting a Limited Learner Permit",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "permit-supervision",
    quote:
      "With a Limited Learner Permit, you can practice driving under the " +
      "supervision of a properly licensed driver who has held a license for at " +
      "least five (5) years and is twenty-one (21) years of age or older. The " +
      "licensed driver must be seated beside you at all times",
    source: MANUAL,
    section: "I. Applying - What does a Limited Learner Permit allow me to do?",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "permit-two-requirements",
    quote:
      "First: You must pass an accredited thirty-three (33) hour classroom driver " +
      "education class. Second: You must pass a computerized knowledge exam " +
      "administered by the Division of Motor Vehicles (\"DMV\").",
    source: MANUAL,
    section: "I. Applying - Before Getting a Limited Learner Permit",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "permit-validity",
    quote:
      "The permit is valid until the permit holder turns 18 years of age. This " +
      "permit can be renewed a maximum of two (2) times.",
    source: MANUAL,
    section: "I. Applying - How long is a Limited Learner Permit valid?",
    url: MANUAL_URL + "#page=12",
  },
  {
    key: "plate-light-60",
    quote:
      "The rear license plate on your vehicle must be lit so it can be seen and " +
      "read at least 60 feet from the back of the vehicle.",
    source: MANUAL,
    section: "VIII. Night Driving - Using your headlights",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "point-of-no-return",
    quote:
      "The point of no return is described as the distance needed to bring your " +
      "vehicle to a complete stop so as not to enter the intersection, taking " +
      "into consideration your speed and condition of the roadway.",
    source: MANUAL,
    section: "VII. Point of no Return",
    url: MANUAL_URL + "#page=51",
  },
  {
    key: "police-exit-vehicle",
    quote:
      "If a law enforcement officer requests you exit your vehicle, you must do " +
      "so.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "police-report-when",
    quote:
      "A police report is required if: Someone is injured in the collision. " +
      "Property damage is over $1,000. You hit an unattended vehicle. You hit a " +
      "domesticated animal.",
    source: MANUAL,
    section: "XI. In Case of a Collision - What to do After a Collision",
    url: MANUAL_URL + "#page=65",
  },
  {
    key: "police-stop-documents",
    quote:
      "If stopped by a law enforcement officer, you are required upon request to " +
      "display your driver's license and vehicle registration card, and proof of " +
      "insurance.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "police-stop-hands",
    quote:
      "Keep both hands visible on the steering wheel. Tell any passengers to put " +
      "their hands where they can be seen by the officer.",
    source: MANUAL,
    section: "XII. When Stopped by a Law Enforcement Officer",
    url: MANUAL_URL + "#page=67",
  },
  {
    key: "police-stop-interior-lights",
    quote:
      "If stopped by a law enforcement officer at night, a motorist is required " +
      "to turn on the vehicle's interior lights and leave them on until the " +
      "officer allows the driver to drive off.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "police-stop-no-belt-off",
    quote:
      "Do not take your safety belt off until you are directed to do so by the " +
      "officer.",
    source: MANUAL,
    section: "XII. When Stopped by a Law Enforcement Officer",
    url: MANUAL_URL + "#page=67",
  },
  {
    key: "police-stop-pull-right",
    quote:
      "When a motorist observes flashing emergency lights or hears sirens, pull " +
      "over to a safe location, to the right and stop.",
    source: MANUAL,
    section: "XII. When Stopped by a Law Enforcement Officer",
    url: MANUAL_URL + "#page=67",
  },
  {
    key: "police-stop-signature",
    quote:
      "Further, upon request by a law enforcement officer, you are required to " +
      "write your name in the presence of that officer for the purpose of being " +
      "identified.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "police-stop-signing",
    quote:
      "If you are being issued a citation, the officer will ask if you want to " +
      "sign for it. By signing, you are not admitting to the violation, only " +
      "acknowledging that you have received it.",
    source: MANUAL,
    section: "XII. When Stopped by a Law Enforcement Officer",
    url: MANUAL_URL + "#page=67",
  },
  {
    key: "pre-drive-checks",
    quote:
      "1. Lock the doors 2. Key in ignition/key fob in vehicle 3. Adjust the seat " +
      "4. Adjust the inside and outside mirrors 5. Adjust ventilation 6. Fasten " +
      "and adjust your seat belts 7. Ask passengers to fasten their seat belts 8. " +
      "Adjust your feet to the pedals 9. Adjust the steering wheel 10. Adjust the " +
      "head restraint",
    source: MANUAL,
    section: "III. Basic Driving Skills and Safety Rules - Before Starting The Engine",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "provisional-50-hours",
    quote:
      "4. Present a statement signed by a parent or guardian stating that you " +
      "have completed a minimum of fifty (50) hours of driving experience with a " +
      "supervising driver with ten (10) of those hours at night.",
    source: MANUAL,
    section: "I. Applying - Learner Provisional License",
    url: MANUAL_URL + "#page=12",
  },
  {
    key: "provisional-athletics",
    quote:
      "From 4:00 a.m. to 5:00 a.m. when driving between license holder's home and " +
      "a school sponsored athletic activity for which no transportation is " +
      "provided by the school.",
    source: MANUAL,
    section: "I. Applying - What are the conditions of a Learner's Provisional License?",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "provisional-expiry",
    quote:
      "This license expires on your eighteenth (18th) birthday.",
    source: MANUAL,
    section: "I. Applying - What are the conditions of a Learner's Provisional License?",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "provisional-night-rule",
    quote:
      "A PERSON WITH A LEARNER PROVISIONAL LICENSE CANNOT DRIVE BY THEMSELVES " +
      "BETWEEN THE HOURS OF 1:00 A.M. AND 5:00 A.M.",
    source: MANUAL,
    section: "I. Applying - What are the conditions of a Learner's Provisional License?",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "provisional-passengers",
    quote:
      "During the first twelve (12) months of a learner's provisional license no " +
      "more than one (1) passenger younger than twenty-one (21) years of age is " +
      "allowed in the vehicle. Immediate family and household members are exempt " +
      "from this rule.",
    source: MANUAL,
    section: "I. Applying - What are the conditions of a Learner's Provisional License?",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "provisional-requirements",
    quote:
      "1. Have held for at least six (6) months a Limited Learner Permit issued " +
      "by the DMV. 2. Not have been convicted of a motor vehicle moving violation " +
      "or a safety belt infraction during the previous six (6) months. 3. Have " +
      "passed the driving skills test administered by the DMV.",
    source: MANUAL,
    section: "I. Applying - Learner Provisional License",
    url: MANUAL_URL + "#page=12",
  },
  {
    key: "provisional-unsupervised",
    quote:
      "Without supervision in any of the following circumstances: 1. Between 5:00 " +
      "a.m. and 1:00 a.m. 2. When driving to or from work. 3. When driving to or " +
      "from any activity of a volunteer fire department, volunteer rescue squad, " +
      "or volunteer emergency medical service if the driver is a member of such " +
      "organization.",
    source: MANUAL,
    section: "I. Applying - What are the conditions of a Learner's Provisional License?",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "quiet-vehicles",
    quote:
      "Always be alert for pedestrians who are visually impaired, particularly if " +
      "you are driving an electric or hybrid vehicle that is quieter than most " +
      "other vehicles on the road.",
    source: MANUAL,
    section: "VIII. Pedestrians with a Visual Impairment",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "railroad-abandoned",
    quote:
      "Although some railroad tracks appear abandoned, never assume a train " +
      "cannot be present. Assume a train will travel on the tracks, even if the " +
      "tracks appear to be abandoned.",
    source: MANUAL,
    section: "V. Driving Emergencies - Railroad crossing information for the motorist",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "railroad-buses-stop",
    quote:
      "All buses, trucks transporting hazardous material, and certain other " +
      "vehicles must always stop prior to crossing railroad tracks. Be patient " +
      "and wait for these vehicles to cross.",
    source: MANUAL,
    section: "V. Driving Emergencies - Railroad crossing information for the motorist",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "railroad-signals",
    quote:
      "When red signals begin to flash or gates are being lowered, stop, look, " +
      "and listen. Never attempt to beat the train to the crossing or go around " +
      "gates that are down.",
    source: MANUAL,
    section: "V. Driving Emergencies - Railroad crossing information for the motorist",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "reaction-time",
    quote:
      "After seeing danger, it takes the average driver about ¾ of a second to " +
      "apply the brake.",
    source: MANUAL,
    section: "III. Stopping Your Vehicle",
    url: MANUAL_URL + "#page=28",
  },
  {
    key: "rear-end-release-brakes",
    quote:
      "If a collision is unavoidable, release your brakes just before the " +
      "collision occurs. This helps soften the impact. Brake immediately after " +
      "the collision to avoid sliding into another traffic lane.",
    source: MANUAL,
    section: "V. Driving Emergencies - Threat of a Rear-End Collision",
    url: MANUAL_URL + "#page=45",
  },
  {
    key: "rear-end-threat",
    quote:
      "1. Flash your brake lights early to alert the driver behind you. 2. As the " +
      "vehicle nears, check your front zones for open space and move forward, if " +
      "possible. This precaution gives the driver approaching from the rear more " +
      "time and space to stop safely.",
    source: MANUAL,
    section: "V. Driving Emergencies - Threat of a Rear-End Collision",
    url: MANUAL_URL + "#page=45",
  },
  {
    key: "red-arrow",
    quote:
      "Traffic Light with a Red Arrow: Red arrows are usually used on " +
      "left/right-hand turns. When a red arrow is displayed, you must stop and " +
      "may not proceed in the direction of the arrow.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "red-light-violators",
    quote:
      "Motorists should be alert for possible violators of the law and prepare to " +
      "stop to avoid a collision.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "refusal-other-penalties",
    quote:
      "You are also subject to a fine, a highway safety assessment, public " +
      "community service, a course on driving while intoxicated and/or referral " +
      "to an alcohol treatment program.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - D. Refusal to Take the Breathalyzer Test",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "refusal-six-months",
    quote:
      "If you refuse to take a chemical test, your license will be suspended for " +
      "a minimum of six months.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - D. Refusal to Take the Breathalyzer Test",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "renew-90-days",
    quote:
      "You can renew your driver's license up to 90 days before its expiration " +
      "date.",
    source: MANUAL,
    section: "XVII. Appendices - Renewing your driver's license",
    url: MANUAL_URL + "#page=75",
  },
  {
    key: "rest-every-100-miles",
    quote:
      "Take periodic breaks. A good rule of thumb is to stop every 100 miles or " +
      "every two hours.",
    source: MANUAL,
    section: "II. Drowsy Driving - Once you are on the road",
    url: MANUAL_URL + "#page=22",
  },
  {
    key: "rest-is-key",
    quote:
      "Remember, resting is by far the most effective way, and the only recovery " +
      "strategy to counter drowsiness.",
    source: MANUAL,
    section: "II. Drowsy Driving - Rest is the key",
    url: MANUAL_URL + "#page=22",
  },
  {
    key: "reversible-lanes",
    quote:
      "Reversible Lanes: Motorist may travel in lane with green arrow.",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=39",
  },
  {
    key: "right-of-way-definition",
    quote:
      "Right-of-way is the privilege of having or giving other motorists " +
      "immediate use of a certain roadway.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "right-of-way-never-assume",
    quote:
      "Never take the right-of-way for granted. The law grants right-of-way, but " +
      "the other driver may not. Yield to the other driver in these cases; it may " +
      "save a life.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "right-on-red",
    quote:
      "Right Turn on Red: Except when a sign is placed prohibiting a right turn " +
      "on red, vehicles may turn right on a steady red light after the driver has " +
      "stopped completely and yielded the right-of-way to pedestrians and other " +
      "vehicles.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "right-on-red-law",
    quote:
      "Drivers of motor vehicles in Rhode Island are permitted, but not required, " +
      "to turn right at a red light after a full stop unless there is a \"no turn " +
      "on red\" sign posted. Drivers must first yield to all oncoming traffic and " +
      "pedestrians before making their turn.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "right-on-red-optional",
    quote:
      "A motorist stopped at are red light does not have to turn right on red if " +
      "they do not desire to do so.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "right-turn-extreme-right",
    quote:
      "Right turns must be taken from the extreme right-hand side of the road.",
    source: MANUAL,
    section: "III. How To Turn - Lane positioning for a right/left turn",
    url: MANUAL_URL + "#page=29",
  },
  {
    key: "right-turn-no-swing",
    quote:
      "Do not develop the dangerous habit of swinging to the left before turning " +
      "right. This is likely to make the driver of the vehicle following you " +
      "assume you are going to turn left.",
    source: MANUAL,
    section: "III. How To Turn - Lane positioning for a right/left turn",
    url: MANUAL_URL + "#page=29",
  },
  {
    key: "right-turn-oncoming",
    quote:
      "5. The motor vehicle directly approaching you has the right-of-way.",
    source: MANUAL,
    section: "III. How To Turn - Lane positioning for a right/left turn",
    url: MANUAL_URL + "#page=30",
  },
  {
    key: "rigl-aggressive-driving-def",
    quote:
      "\"Aggressive driving\" means that an individual, coincident to operating a " +
      "motor vehicle in violation of chapter 14 of this title, engages in conduct " +
      "which violates two (2) or more of the following sections of law:",
    source: "Rhode Island General Laws Section 31-27.1-3 (Rhode Island General Assembly)",
    section: "Section 31-27.1-3 - \"Aggressive driving\" defined",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-27.1/31-27.1-3.htm",
  },
  {
    key: "rigl-bicycle-helmet",
    quote:
      "Any person fifteen (15) years of age or younger who is operating or who is " +
      "a passenger on a bicycle or who is using or operating a skateboard, " +
      "rollerskates, scooter or inline skates on a public highway, bicycle trail " +
      "or path",
    source: "Rhode Island General Laws Section 31-19-2.1 (Rhode Island General Assembly)",
    section: "Section 31-19-2.1 - Helmets required on bicycle operators, bicycle passengers, skateboarders, rollerskaters, inline skaters, and scooter riders ages fifteen (15) and younger",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-19/31-19-2.1.htm",
  },
  {
    key: "rigl-bicycle-lane-yield",
    quote:
      "The driver of a vehicle about to cross or to turn left or right across a " +
      "bicycle lane shall yield the right-of-way to any person operating a " +
      "bicycle or motorized wheelchair upon the bicycle lane.",
    source: "Rhode Island General Laws Section 31-17-9 (Rhode Island General Assembly)",
    section: "Section 31-17-9 - Yielding to riders on bicycle lane",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-17/31-17-9.htm",
  },
  {
    key: "rigl-bicycle-right-side",
    quote:
      "Every person operating a bicycle upon a roadway shall ride as near to the " +
      "right side of the roadway as practicable, exercising due care when passing " +
      "a standing vehicle or one proceeding in the same direction",
    source: "Rhode Island General Laws Section 31-19-6 (Rhode Island General Assembly)",
    section: "Section 31-19-6 - Bicycles to right of road",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-19/31-19-6.htm",
  },
  {
    key: "rigl-bicycle-rights",
    quote:
      "Every person riding an electric personal assistive mobility device " +
      "(\"EPAMD\"), riding an electric motorized bicycle, or propelling a vehicle " +
      "by human power shall be granted all of the rights and shall be subject to " +
      "all of the duties applicable to the driver of any other vehicle",
    source: "Rhode Island General Laws Section 31-19-3 (Rhode Island General Assembly)",
    section: "Section 31-19-3 - Applicability of traffic laws",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-19/31-19-3.htm",
  },
  {
    key: "rigl-bicycle-signal-100",
    quote:
      "(b) A signal of intention to turn right or left when required shall be " +
      "given continuously during not less than the last one hundred feet (100′) " +
      "traveled by the bicycle before turning, and shall be given while the " +
      "bicycle is stopped waiting to turn.",
    source: "Rhode Island General Laws Section 31-19-14 (Rhode Island General Assembly)",
    section: "Section 31-19-14 - Turn and stop signals",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-19/31-19-14.htm",
  },
  {
    key: "rigl-bicycle-two-abreast",
    quote:
      "Persons riding bicycles upon a roadway shall not ride more than two (2) " +
      "abreast except on bicycle trails or paths or parts of roadways set aside " +
      "for the exclusive use of bicycles. Persons riding two (2) abreast shall " +
      "not unduly impede traffic and, on a laned roadway, shall ride within a " +
      "single lane.",
    source: "Rhode Island General Laws Section 31-19-7 (Rhode Island General Assembly)",
    section: "Section 31-19-7 - Number of bicycles abreast",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-19/31-19-7.htm",
  },
  {
    key: "rigl-breakdown-lane",
    quote:
      "No person shall operate a motor vehicle for travel on the emergency " +
      "break-down lane of any highway.",
    source: "Rhode Island General Laws Section 31-15-16 (Rhode Island General Assembly)",
    section: "Section 31-15-16 - Use of emergency break-down lane for travel",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-15/31-15-16.htm",
  },
  {
    key: "rigl-bridle-path",
    quote:
      "Every operator of a motor vehicle shall bring his or her motor vehicle to " +
      "a complete stop in parks and reservations and on state highways where the " +
      "department of revenue or state traffic commission has posted signs of " +
      "bridle paths where saddle horses may cross the roads in the parks and " +
      "reservations and/or highways.",
    source: "Rhode Island General Laws Section 31-20-16 (Rhode Island General Assembly)",
    section: "Section 31-20-16 - Stops at bridle path crossings",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-20/31-20-16.htm",
  },
  {
    key: "rigl-child-front-seat",
    quote:
      "Under this subsection, a child must be properly restrained in the front " +
      "seat if: (i) The vehicle is not equipped with a back seat; or (ii) All " +
      "rear seating positions are being utilized by other children.",
    source: "Rhode Island General Laws Section 31-22-22 (Rhode Island General Assembly)",
    section: "Section 31-22-22 - Safety belt use - Child restraint",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-22/31-22-22.htm",
  },
  {
    key: "rigl-crosswalk-yield",
    quote:
      "When traffic control signals are not in place or not in operation, the " +
      "driver of a vehicle shall yield the right of way, slowing down or stopping " +
      "if need be to so yield, to a pedestrian crossing the roadway within a " +
      "crosswalk when the pedestrian is upon the half of the roadway upon which " +
      "the vehicle is traveling",
    source: "Rhode Island General Laws Section 31-18-3 (Rhode Island General Assembly)",
    section: "Section 31-18-3 - Right-of-way in crosswalk",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-18/31-18-3.htm",
  },
  {
    key: "rigl-daytime-nighttime",
    quote:
      "Daytime means from a half hour before sunrise to a half hour after sunset. " +
      "Nighttime means at any other hour.",
    source: "Rhode Island General Laws Section 31-14-2 (Rhode Island General Assembly)",
    section: "Section 31-14-2 - Prima facie limits",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-14/31-14-2.htm",
  },
  {
    key: "rigl-distracted-fines",
    quote:
      "Any person who violates any of the provisions of this section shall, upon " +
      "conviction, be subject to a fine of one hundred dollars ($100); for a " +
      "second conviction a person shall be subject to a fine of one hundred fifty " +
      "dollars ($150)",
    source: "Rhode Island General Laws Section 31-22-30 (Rhode Island General Assembly)",
    section: "Section 31-22-30 - Distracted driving prohibited while operating a motor vehicle",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-22/31-22-30.htm",
  },
  {
    key: "rigl-driveway-yield",
    quote:
      "The driver of a vehicle about to enter or cross a highway from a private " +
      "road or driveway shall yield the right-of-way to all vehicles approaching " +
      "on the highway and to all pedestrians attempting to cross the private road " +
      "driveway or highway.",
    source: "Rhode Island General Laws Section 31-17-5 (Rhode Island General Assembly)",
    section: "Section 31-17-5 - Entering from private road or driveway",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-17/31-17-5.htm",
  },
  {
    key: "rigl-driving-includes-stopped",
    quote:
      "\"Driving\" means operating a motor vehicle on a public road, including " +
      "operation while temporarily stationary because of traffic, a traffic light " +
      "or stop sign, or otherwise",
    source: "Rhode Island General Laws Section 31-22-30 (Rhode Island General Assembly)",
    section: "Section 31-22-30 - Distracted driving prohibited while operating a motor vehicle",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-22/31-22-30.htm",
  },
  {
    key: "rigl-due-care-pedestrians",
    quote:
      "every driver of a vehicle shall exercise due care to avoid colliding with " +
      "any pedestrian or any person propelling a human-powered vehicle upon any " +
      "roadway, shall give an audible signal when necessary",
    source: "Rhode Island General Laws Section 31-18-8 (Rhode Island General Assembly)",
    section: "Section 31-18-8 - Due care by drivers",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-18/31-18-8.htm",
  },
  {
    key: "rigl-dui-08",
    quote:
      "Any person charged under subsection (a), whose blood alcohol concentration " +
      "is eight one-hundredths of one percent (.08%) or more by weight, as shown " +
      "by a chemical analysis of a blood, breath, or urine sample, shall be " +
      "guilty of violating subsection (a).",
    source: "Rhode Island General Laws Section 31-27-2 (Rhode Island General Assembly)",
    section: "Section 31-27-2 - Driving under influence of liquor or drugs",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-27/31-27-2.htm",
  },
  {
    key: "rigl-duty-give-information",
    quote:
      "shall, upon request, give his or her name, address, and the registration " +
      "number of the vehicle the driver is driving and shall exhibit his or her " +
      "operator's or chauffeur's license to the person struck, or to the driver " +
      "or occupant, or to the person attending any vehicle collided with.",
    source: "Rhode Island General Laws Section 31-26-3 (Rhode Island General Assembly)",
    section: "Section 31-26-3 - Duty to give information and render aid",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-26/31-26-3.htm",
  },
  {
    key: "rigl-duty-to-stop",
    quote:
      "The driver of any vehicle knowingly involved in an accident resulting in " +
      "injury to, serious bodily injury to, or death of any person shall " +
      "immediately stop the vehicle at the scene of the accident or as close to " +
      "it as possible",
    source: "Rhode Island General Laws Section 31-26-1 (Rhode Island General Assembly)",
    section: "Section 31-26-1 - Duty to stop in accidents resulting in personal injury",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-26/31-26-1.htm",
  },
  {
    key: "rigl-dwi-02",
    quote:
      "shall be determined to have been driving while impaired if the test " +
      "determines the person's blood alcohol concentration to be at least " +
      "two-hundredths of one percent (.02%) but less than eight one hundredths of " +
      "one percent (.08%) by weight.",
    source: "Rhode Island General Laws Section 31-27-2.7 (Rhode Island General Assembly)",
    section: "Section 31-27-2.7 - Driving while impaired",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-27/31-27-2.7.htm",
  },
  {
    key: "rigl-earphones",
    quote:
      "No person shall operate a bicycle or motor vehicle upon any highway while " +
      "wearing earphones, a headset, headphone, or other listening device.",
    source: "Rhode Island General Laws Section 31-23-51 (Rhode Island General Assembly)",
    section: "Section 31-23-51 - Earphones and headsets prohibited",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-23/31-23-51.htm",
  },
  {
    key: "rigl-emergency-vehicle",
    quote:
      "the driver of every other vehicle shall yield the right-of-way and shall " +
      "immediately drive to a position parallel to, and as close as possible to, " +
      "the right-hand edge or curb of the roadway clear of any intersection and " +
      "shall stop and remain in that position until the authorized emergency " +
      "vehicle has passed",
    source: "Rhode Island General Laws Section 31-17-6 (Rhode Island General Assembly)",
    section: "Section 31-17-6 - Yielding to emergency vehicle",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-17/31-17-6.htm",
  },
  {
    key: "rigl-following-too-closely",
    quote:
      "The driver of a motor vehicle shall not follow another vehicle more " +
      "closely than is reasonable and prudent, having due regard for the speed of " +
      "the vehicles and the traffic upon and the condition of the highway",
    source: "Rhode Island General Laws Section 31-15-12 (Rhode Island General Assembly)",
    section: "Section 31-15-12 - Interval between vehicles",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-15/31-15-12.htm",
  },
  {
    key: "rigl-green-left-turn-yield",
    quote:
      "Vehicular traffic turning left or making a U-turn movement to the left " +
      "shall yield the right-of-way to other vehicles approaching from the " +
      "opposite direction so closely as to constitute an immediate hazard",
    source: "Rhode Island General Laws Section 31-13-6 (Rhode Island General Assembly)",
    section: "Section 31-13-6 - Meaning of traffic control signals",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-13/31-13-6.htm",
  },
  {
    key: "rigl-green-signal",
    quote:
      "Vehicular traffic facing a circular green signal is permitted to proceed " +
      "straight through or turn right or left or make a U-turn movement, except " +
      "as such movement is prohibited by lane-use signs, turn prohibition signs, " +
      "lane markings, separate turn signal, or other traffic control devices.",
    source: "Rhode Island General Laws Section 31-13-6 (Rhode Island General Assembly)",
    section: "Section 31-13-6 - Meaning of traffic control signals",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-13/31-13-6.htm",
  },
  {
    key: "rigl-handsfree-2025",
    quote:
      "No person shall use a wireless handset or personal wireless communication " +
      "device to compose, read, or send text messages, or for any other purpose " +
      "while driving a motor vehicle on any public street or public highway " +
      "within the state of Rhode Island except for:",
    source: "Rhode Island General Laws Section 31-22-30 (Rhode Island General Assembly)",
    section: "Section 31-22-30 - Distracted driving prohibited while operating a motor vehicle",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-22/31-22-30.htm",
  },
  {
    key: "rigl-handsfree-exception",
    quote:
      "The use of a personal wireless communication device in a hands-free " +
      "manner, with a hands-free accessory, or with the activation or " +
      "deactivation of a feature or function of the personal wireless " +
      "communication device with the motion of a single swipe or tap of the " +
      "finger of the driver.",
    source: "Rhode Island General Laws Section 31-22-30 (Rhode Island General Assembly)",
    section: "Section 31-22-30 - Distracted driving prohibited while operating a motor vehicle",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-22/31-22-30.htm",
  },
  {
    key: "rigl-implied-consent",
    quote:
      "Any person who operates a motor vehicle within this state shall be deemed " +
      "to have given his or her consent to chemical tests of his or her breath, " +
      "blood, saliva and/or urine for the purpose of determining the chemical " +
      "content of his or her body fluids or breath.",
    source: "Rhode Island General Laws Section 31-27-2.1 (Rhode Island General Assembly)",
    section: "Section 31-27-2.1 - Refusal to submit to chemical test",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-27/31-27-2.1.htm",
  },
  {
    key: "rigl-interior-lights",
    quote:
      "The operator of any vehicle upon a highway within this state, upon the " +
      "stopping of the vehicle by any law enforcement or police officer, shall, " +
      "at any time from a half-hour after sunset to a half-hour before sunrise, " +
      "display and operate its interior lights",
    source: "Rhode Island General Laws Section 31-22-24 (Rhode Island General Assembly)",
    section: "Section 31-22-24 - Interior lights to be operated before dawn and after dusk during police stop",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-22/31-22-24.htm",
  },
  {
    key: "rigl-jaywalking",
    quote:
      "Every pedestrian crossing a roadway at any point other than within a " +
      "marked crosswalk or within an unmarked crosswalk at an intersection shall " +
      "yield the right-of-way to all vehicles upon the roadway.",
    source: "Rhode Island General Laws Section 31-18-5 (Rhode Island General Assembly)",
    section: "Section 31-18-5 - Crossing other than at crosswalks",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-18/31-18-5.htm",
  },
  {
    key: "rigl-laned-roadway",
    quote:
      "A vehicle shall be driven as nearly as practical entirely within a single " +
      "lane and shall not be moved from the lane until the driver has first " +
      "ascertained that the movement can be made with safety.",
    source: "Rhode Island General Laws Section 31-15-11 (Rhode Island General Assembly)",
    section: "Section 31-15-11 - Laned roadways",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-15/31-15-11.htm",
  },
  {
    key: "rigl-left-turn-yield",
    quote:
      "The driver of a vehicle within an intersection intended to turn to the " +
      "left or right shall yield the right-of-way to any vehicle approaching from " +
      "the opposite direction which is within the intersection or so close to it " +
      "as to constitute an immediate hazard",
    source: "Rhode Island General Laws Section 31-17-2 (Rhode Island General Assembly)",
    section: "Section 31-17-2 - Vehicle turning left or right",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-17/31-17-2.htm",
  },
  {
    key: "rigl-lights-500-feet",
    quote:
      "or at any other time when there is not sufficient light or visibility, " +
      "because of severe rain or any other condition, to clearly see persons and " +
      "vehicles on the highway at a distance of five hundred feet (500′) ahead, " +
      "shall display lighted lamps",
    source: "Rhode Island General Laws Section 31-24-1 (Rhode Island General Assembly)",
    section: "Section 31-24-1 - Times when lights required",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-24/31-24-1.htm",
  },
  {
    key: "rigl-lights-required",
    quote:
      "Every vehicle upon a highway within this state at any time from sunset to " +
      "sunrise and at any other time when windshield wipers are in use, as a " +
      "result of rain, sleet, snow, hail or other unfavorable atmospheric " +
      "condition",
    source: "Rhode Island General Laws Section 31-24-1 (Rhode Island General Assembly)",
    section: "Section 31-24-1 - Times when lights required",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-24/31-24-1.htm",
  },
  {
    key: "rigl-minimum-speed",
    quote:
      "No person shall drive a motor vehicle at such a slow speed as to impede or " +
      "block the normal and reasonable movement of traffic except when reduced " +
      "speed is necessary for safe operation or in compliance with law.",
    source: "Rhode Island General Laws Section 31-14-9 (Rhode Island General Assembly)",
    section: "Section 31-14-9 - Minimum speed",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-14/31-14-9.htm",
  },
  {
    key: "rigl-minor-phone-ban",
    quote:
      "The use of a personal wireless communication device by a minor, while the " +
      "minor is operating a motor vehicle shall be prohibited, except in the case " +
      "of an emergency. For purposes of this section, the term \"minor\" shall " +
      "include any person less than eighteen (18) years of age.",
    source: "Rhode Island General Laws Section 31-22-11.9 (Rhode Island General Assembly)",
    section: "Section 31-22-11.9 - Use of personal wireless communications devices by minors while operating motor vehicles is prohibited",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-22/31-22-11.9.htm",
  },
  {
    key: "rigl-minor-phone-third",
    quote:
      "For a third or subsequent conviction, a person shall be punished by a fine " +
      "of two hundred and fifty dollars ($250) and/or loss of license until the " +
      "user reaches his/her eighteenth (18th) birthday.",
    source: "Rhode Island General Laws Section 31-22-11.9 (Rhode Island General Assembly)",
    section: "Section 31-22-11.9 - Use of personal wireless communications devices by minors while operating motor vehicles is prohibited",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-22/31-22-11.9.htm",
  },
  {
    key: "rigl-muffler",
    quote:
      "Every motor vehicle shall at all times be equipped with a muffler in good " +
      "working order and in constant operation to prevent excessive or unusual " +
      "noise and annoying smoke. No person shall use a muffler cutout, bypass, or " +
      "similar device upon a motor vehicle on a highway.",
    source: "Rhode Island General Laws Section 31-23-13 (Rhode Island General Assembly)",
    section: "Section 31-23-13 - Muffler",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-23/31-23-13.htm",
  },
  {
    key: "rigl-no-parking-30-feet",
    quote:
      "(7) Within thirty feet (30′) upon the approach to any flashing beacon, " +
      "stop sign, or traffic control signal located at the side of a roadway;",
    source: "Rhode Island General Laws Section 31-21-4 (Rhode Island General Assembly)",
    section: "Section 31-21-4 - Places where parking or stopping prohibited",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-21/31-21-4.htm",
  },
  {
    key: "rigl-no-parking-bike-lane",
    quote:
      "(16) On any bicycle lane, trail, or path; or (17) Upon any crosshatched " +
      "access aisle adjacent to disability parking spaces.",
    source: "Rhode Island General Laws Section 31-21-4 (Rhode Island General Assembly)",
    section: "Section 31-21-4 - Places where parking or stopping prohibited",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-21/31-21-4.htm",
  },
  {
    key: "rigl-no-parking-list",
    quote:
      "(1) On a sidewalk; (2) In front of a public or private driveway; (3) " +
      "Within an intersection; (4) Within eight feet (8′) of a fire hydrant; (5) " +
      "On a crosswalk; (6) Within twenty feet (20′) of a crosswalk at an " +
      "intersection;",
    source: "Rhode Island General Laws Section 31-21-4 (Rhode Island General Assembly)",
    section: "Section 31-21-4 - Places where parking or stopping prohibited",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-21/31-21-4.htm",
  },
  {
    key: "rigl-no-parking-railroad",
    quote:
      "(9) Within fifty feet (50′) of the nearest rail of a railroad crossing; " +
      "(10) Within twenty feet (20′) of the driveway entrance to any fire " +
      "station, and on the side of a street opposite the entrance to any fire " +
      "station within seventy-five feet (75′) of the entrance (when properly " +
      "sign-posted);",
    source: "Rhode Island General Laws Section 31-21-4 (Rhode Island General Assembly)",
    section: "Section 31-21-4 - Places where parking or stopping prohibited",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-21/31-21-4.htm",
  },
  {
    key: "rigl-no-passing-crest",
    quote:
      "(1) When approaching the crest of a grade or upon a curve in the highway " +
      "where the driver's view is obstructed within such distance as to create a " +
      "hazard in the event another vehicle might approach from the opposite " +
      "direction;",
    source: "Rhode Island General Laws Section 31-15-7 (Rhode Island General Assembly)",
    section: "Section 31-15-7 - Places where overtaking prohibited",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-15/31-15-7.htm",
  },
  {
    key: "rigl-no-passing-off-pavement",
    quote:
      "In no event shall the movement be made by driving off the pavement or " +
      "main-traveled portion of the roadway.",
    source: "Rhode Island General Laws Section 31-15-5 (Rhode Island General Assembly)",
    section: "Section 31-15-5 - Overtaking on the right",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-15/31-15-5.htm",
  },
  {
    key: "rigl-no-passing-places",
    quote:
      "(2) When approaching within one hundred feet (100′) of or traversing any " +
      "intersection or railroad grade crossing; (3) When the view is obstructed " +
      "upon approaching within one hundred feet (100′) of any bridge, viaduct, or " +
      "tunnel.",
    source: "Rhode Island General Laws Section 31-15-7 (Rhode Island General Assembly)",
    section: "Section 31-15-7 - Places where overtaking prohibited",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-15/31-15-7.htm",
  },
  {
    key: "rigl-obedience-devices",
    quote:
      "The driver of any vehicle shall obey the instructions of any official " +
      "traffic control device applicable to him or her placed in accordance with " +
      "the provisions of chapters 12 - 27 of this title, unless otherwise " +
      "directed by a traffic or police officer",
    source: "Rhode Island General Laws Section 31-13-4 (Rhode Island General Assembly)",
    section: "Section 31-13-4 - Obedience to devices",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-13/31-13-4.htm",
  },
  {
    key: "rigl-open-highway-200-feet",
    quote:
      "a clear view of the stopped vehicle shall be available from a distance of " +
      "two hundred feet (200′) in each direction upon the highway.",
    source: "Rhode Island General Laws Section 31-21-1 (Rhode Island General Assembly)",
    section: "Section 31-21-1 - Stopping on traveled portion of open highway prohibited",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-21/31-21-1.htm",
  },
  {
    key: "rigl-open-highway-parking",
    quote:
      "Upon any highway outside of a business or residence district, no person " +
      "shall stop, park, or leave standing any vehicle, whether attended or " +
      "unattended, upon the paved or main traveled part of the highway when it is " +
      "practical to stop, park, or leave the vehicle off that part of the " +
      "highway.",
    source: "Rhode Island General Laws Section 31-21-1 (Rhode Island General Assembly)",
    section: "Section 31-21-1 - Stopping on traveled portion of open highway prohibited",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-21/31-21-1.htm",
  },
  {
    key: "rigl-opening-doors",
    quote:
      "No person shall open the door of a motor vehicle on the roadways, streets, " +
      "or highways of this state, available to moving traffic, unless and until " +
      "it is reasonably safe to do so, and can be done without interfering with " +
      "the movement of other traffic",
    source: "Rhode Island General Laws Section 31-21-14 (Rhode Island General Assembly)",
    section: "Section 31-21-14 - Opening vehicle doors",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-21/31-21-14.htm",
  },
  {
    key: "rigl-overtaking-right",
    quote:
      "The driver of a vehicle may overtake and pass upon the right of another " +
      "vehicle only under the following conditions: (1) When the vehicle " +
      "overtaken is making or about to make a left turn;",
    source: "Rhode Island General Laws Section 31-15-5 (Rhode Island General Assembly)",
    section: "Section 31-15-5 - Overtaking on the right",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-15/31-15-5.htm",
  },
  {
    key: "rigl-passing-return-100",
    quote:
      "In every event the overtaking vehicle must return to the right-hand side " +
      "of the roadway before coming within one hundred feet (100′) of any vehicle " +
      "approaching from the opposite direction.",
    source: "Rhode Island General Laws Section 31-15-6 (Rhode Island General Assembly)",
    section: "Section 31-15-6 - Clearance for overtaking",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-15/31-15-6.htm",
  },
  {
    key: "rigl-prima-facie-limits",
    quote:
      "(1) Twenty-five miles per hour (25 mph) in any business or residence " +
      "district; (2) Fifty miles per hour (50 mph) in other locations during the " +
      "daytime; (3) Forty-five miles per hour (45 mph) in such other locations " +
      "during the nighttime;",
    source: "Rhode Island General Laws Section 31-14-2 (Rhode Island General Assembly)",
    section: "Section 31-14-2 - Prima facie limits",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-14/31-14-2.htm",
  },
  {
    key: "rigl-railroad-50-15",
    quote:
      "the driver of the vehicle shall stop within fifty feet (50′) but not less " +
      "than fifteen feet (15′) from the nearest rail of the railroad, and shall " +
      "not proceed until he or she can do so safely.",
    source: "Rhode Island General Laws Section 31-20-1 (Rhode Island General Assembly)",
    section: "Section 31-20-1 - When railroad crossing stops required of all vehicles",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-20/31-20-1.htm",
  },
  {
    key: "rigl-railroad-gate",
    quote:
      "No person shall drive any vehicle through, around, or under any crossing " +
      "gate or barrier at a railroad grade crossing while the gate or barrier is " +
      "closed or is being opened or closed.",
    source: "Rhode Island General Laws Section 31-20-2 (Rhode Island General Assembly)",
    section: "Section 31-20-2 - Driving through railroad gate or barrier",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-20/31-20-2.htm",
  },
  {
    key: "rigl-railroad-when",
    quote:
      "(1) A clearly visible electric or mechanical signal device gives warning " +
      "of the immediate approach of a railroad train; (2) A crossing gate is " +
      "lowered or when a human flagman gives or continues to give a signal of the " +
      "approach or passage of a railroad train;",
    source: "Rhode Island General Laws Section 31-20-1 (Rhode Island General Assembly)",
    section: "Section 31-20-1 - When railroad crossing stops required of all vehicles",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-20/31-20-1.htm",
  },
  {
    key: "rigl-rear-facing",
    quote:
      "All infants and toddlers under the age of two (2) years or weighing less " +
      "than thirty pounds (30 lbs.) shall be restrained in a rear-facing car " +
      "seat.",
    source: "Rhode Island General Laws Section 31-22-22 (Rhode Island General Assembly)",
    section: "Section 31-22-22 - Safety belt use - Child restraint",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-22/31-22-22.htm",
  },
  {
    key: "rigl-reasonable-speed",
    quote:
      "No person shall drive a vehicle on a highway at a speed greater than is " +
      "reasonable and prudent under the conditions and having regard to the " +
      "actual and potential hazards then existing.",
    source: "Rhode Island General Laws Section 31-14-1 (Rhode Island General Assembly)",
    section: "Section 31-14-1 - Reasonable and prudent speeds",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-14/31-14-1.htm",
  },
  {
    key: "rigl-red-arrow",
    quote:
      "Vehicular traffic facing a steady red arrow signal shall not enter the " +
      "intersection to make the movement indicated by the arrow, unless entering " +
      "the intersection to make another movement permitted by another signal",
    source: "Rhode Island General Laws Section 31-13-6 (Rhode Island General Assembly)",
    section: "Section 31-13-6 - Meaning of traffic control signals",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-13/31-13-6.htm",
  },
  {
    key: "rigl-red-signal",
    quote:
      "Vehicular traffic facing a steady circular red signal, unless entering the " +
      "intersection to make another movement permitted by another signal, shall " +
      "stop at a clearly marked stop line; but if there is no stop line, traffic " +
      "shall stop before entering the crosswalk on the near side of the " +
      "intersection",
    source: "Rhode Island General Laws Section 31-13-6 (Rhode Island General Assembly)",
    section: "Section 31-13-6 - Meaning of traffic control signals",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-13/31-13-6.htm",
  },
  {
    key: "rigl-reduced-speed",
    quote:
      "The driver of every vehicle shall, consistent with the requirements of " +
      "Section 31-14-1, drive at an appropriate reduced speed when approaching " +
      "and crossing an intersection or railroad grade crossing; when approaching " +
      "and going around a curve; when approaching a hill crest;",
    source: "Rhode Island General Laws Section 31-14-3 (Rhode Island General Assembly)",
    section: "Section 31-14-3 - Conditions requiring reduced speed",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-14/31-14-3.htm",
  },
  {
    key: "rigl-right-half",
    quote:
      "Upon all roadways of sufficient width a vehicle shall be driven upon the " +
      "right half of the roadway, except as follows: (1) When overtaking and " +
      "passing another vehicle proceeding in the same direction under the rules " +
      "governing the movement;",
    source: "Rhode Island General Laws Section 31-15-1 (Rhode Island General Assembly)",
    section: "Section 31-15-1 - Right half of road",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-15/31-15-1.htm",
  },
  {
    key: "rigl-right-on-red",
    quote:
      "Except when a traffic control device is in a place prohibiting a turn on " +
      "red or a steady red arrow signal is displayed, vehicular traffic facing a " +
      "steady circular red signal is permitted to enter the intersection to turn " +
      "right.",
    source: "Rhode Island General Laws Section 31-13-6 (Rhode Island General Assembly)",
    section: "Section 31-13-6 - Meaning of traffic control signals",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-13/31-13-6.htm",
  },
  {
    key: "rigl-right-turn-position",
    quote:
      "Both the approach for a right turn and a right turn shall be made as close " +
      "as practicable to the right-hand curb or edge of the roadway.",
    source: "Rhode Island General Laws Section 31-16-2 (Rhode Island General Assembly)",
    section: "Section 31-16-2 - Manner of turning at intersection",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-16/31-16-2.htm",
  },
  {
    key: "rigl-row-already-entered",
    quote:
      "The driver of a vehicle approaching an intersection shall yield the " +
      "right-of-way to a vehicle which has entered the intersection from a " +
      "different highway.",
    source: "Rhode Island General Laws Section 31-17-1 (Rhode Island General Assembly)",
    section: "Section 31-17-1 - Right-of-way in absence of signs or signals",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-17/31-17-1.htm",
  },
  {
    key: "rigl-row-vehicle-on-right",
    quote:
      "When two vehicles enter an intersection from different highways at " +
      "approximately the same time, the driver of the vehicle on the left shall " +
      "yield the right-of-way to the vehicle on the right.",
    source: "Rhode Island General Laws Section 31-17-1 (Rhode Island General Assembly)",
    section: "Section 31-17-1 - Right-of-way in absence of signs or signals",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-17/31-17-1.htm",
  },
  {
    key: "rigl-school-bus-50-feet",
    quote:
      "No driver of any motor vehicle, except emergency vehicles on official " +
      "business, shall travel in the same lane of traffic behind a school bus at " +
      "a distance of less than fifty feet (50′).",
    source: "Rhode Island General Laws Section 31-20-12 (Rhode Island General Assembly)",
    section: "Section 31-20-12 - Stopping for school bus required",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-20/31-20-12.htm",
  },
  {
    key: "rigl-school-bus-divided",
    quote:
      "When a highway is a divided highway and the bus is stopped in the roadway " +
      "on one side of the divided highway and the driver is operating on the " +
      "other side of it.",
    source: "Rhode Island General Laws Section 31-20-13 (Rhode Island General Assembly)",
    section: "Section 31-20-13 - School buses stopped on divided highway or in loading zone",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-20/31-20-13.htm",
  },
  {
    key: "rigl-school-bus-proceed",
    quote:
      "The driver shall not proceed until the bus resumes motion or until the " +
      "flashing lights are no longer actuated.",
    source: "Rhode Island General Laws Section 31-20-12 (Rhode Island General Assembly)",
    section: "Section 31-20-12 - Stopping for school bus required",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-20/31-20-12.htm",
  },
  {
    key: "rigl-school-bus-sign",
    quote:
      "Every school bus shall display a sign located below the rear window of the " +
      "bus which reads \"unlawful to pass when red lights are flashing\".",
    source: "Rhode Island General Laws Section 31-20-11 (Rhode Island General Assembly)",
    section: "Section 31-20-11 - Marking of school buses",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-20/31-20-11.htm",
  },
  {
    key: "rigl-school-bus-stop",
    quote:
      "The driver of a vehicle upon a street, highway, private way, private or " +
      "public parking area upon meeting or overtaking from any direction any bus " +
      "marked as \"school bus\" whenever the bus is being operated in accordance " +
      "with Section 31-20-11 and on which there is in operation flashing red " +
      "lights, shall stop the vehicle before reaching the bus.",
    source: "Rhode Island General Laws Section 31-20-12 (Rhode Island General Assembly)",
    section: "Section 31-20-12 - Stopping for school bus required",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-20/31-20-12.htm",
  },
  {
    key: "rigl-school-zone-20",
    quote:
      "(4) Twenty miles per hour (20 mph) in the area within three hundred feet " +
      "(300′) of any school house grounds' entrances and exits during the daytime " +
      "during the days when schools shall be open.",
    source: "Rhode Island General Laws Section 31-14-2 (Rhode Island General Assembly)",
    section: "Section 31-14-2 - Prima facie limits",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-14/31-14-2.htm",
  },
  {
    key: "rigl-school-zone-signs",
    quote:
      "The provisions of subdivision (4) of this subsection shall not apply " +
      "except when appropriate warning signs are posted in proximity with the " +
      "boundaries of the area within three hundred feet (300′) of the school " +
      "house grounds, entrances, and exits.",
    source: "Rhode Island General Laws Section 31-14-2 (Rhode Island General Assembly)",
    section: "Section 31-14-2 - Prima facie limits",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-14/31-14-2.htm",
  },
  {
    key: "rigl-sidewalk-yield",
    quote:
      "The driver of a vehicle crossing a sidewalk shall yield the right-of-way " +
      "to all traffic proceeding along and upon the sidewalk.",
    source: "Rhode Island General Laws Section 31-18-18 (Rhode Island General Assembly)",
    section: "Section 31-18-18 - Right-of-way on sidewalks",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-18/31-18-18.htm",
  },
  {
    key: "rigl-signal-100-feet",
    quote:
      "A signal of intention to turn right or left when required shall be given " +
      "continuously during not less than the last one hundred feet (100′) " +
      "traveled by the vehicle before turning.",
    source: "Rhode Island General Laws Section 31-16-6 (Rhode Island General Assembly)",
    section: "Section 31-16-6 - Time of signaling turn",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-16/31-16-6.htm",
  },
  {
    key: "rigl-signal-stops",
    quote:
      "No person shall stop or suddenly decrease the speed of a vehicle without " +
      "first giving an appropriate signal in the manner described in this chapter " +
      "to the driver of any vehicle immediately to the rear when there is " +
      "opportunity to give the signal.",
    source: "Rhode Island General Laws Section 31-16-7 (Rhode Island General Assembly)",
    section: "Section 31-16-7 - Signaling of stops",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-16/31-16-7.htm",
  },
  {
    key: "rigl-slow-traffic-right",
    quote:
      "Upon all roadways any vehicle proceeding at less than the normal speed of " +
      "traffic at the time and place and under the conditions then existing shall " +
      "be driven in the right-hand lane then available for traffic, or as close " +
      "as practicable to the right-hand curb or edge of the roadway",
    source: "Rhode Island General Laws Section 31-15-2 (Rhode Island General Assembly)",
    section: "Section 31-15-2 - Slow traffic to right",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-15/31-15-2.htm",
  },
  {
    key: "rigl-snow-hazard",
    quote:
      "nor shall any person in removing snow from any driveway, public or " +
      "private, leave the snow in any condition so as to constitute a hazard on " +
      "the highway.",
    source: "Rhode Island General Laws Section 31-22-9 (Rhode Island General Assembly)",
    section: "Section 31-22-9 - Throwing debris on highway - Snow removal",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-22/31-22-9.htm",
  },
  {
    key: "rigl-stop-sign-obedience",
    quote:
      "Every driver of a vehicle approaching a stop sign shall stop before " +
      "entering the crosswalk on the near side of the intersection. In the event " +
      "there is no crosswalk, the driver shall stop at a clearly marked stop line",
    source: "Rhode Island General Laws Section 31-20-9 (Rhode Island General Assembly)",
    section: "Section 31-20-9 - Obedience to stop signs",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-20/31-20-9.htm",
  },
  {
    key: "rigl-stop-sign-yield",
    quote:
      "every driver of a vehicle approaching a stop intersection indicated by a " +
      "stop sign shall stop at a clearly marked stop line, but if none, before " +
      "entering the crosswalk on the near side of the intersection",
    source: "Rhode Island General Laws Section 31-17-4 (Rhode Island General Assembly)",
    section: "Section 31-17-4 - Vehicle entering stop or yield intersection",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-17/31-17-4.htm",
  },
  {
    key: "rigl-supervising-driver",
    quote:
      "A supervising driver must be the parent, guardian, licensed foster parent " +
      "or adult or a certified driver education instructor. A supervising driver " +
      "must be a licensed driver who has been licensed to drive for five (5) " +
      "years.",
    source: "Rhode Island General Laws Section 31-10-6.1 (Rhode Island General Assembly)",
    section: "Section 31-10-6.1 - Supervising driver",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-10/31-10-6.1.htm",
  },
  {
    key: "rigl-tail-lamps",
    quote:
      "shall be equipped with at least one tail lamp mounted on the rear, which " +
      "when lighted as required in this chapter, shall emit a red light plainly " +
      "visible from a distance of five hundred feet (500′) to the rear",
    source: "Rhode Island General Laws Section 31-24-7 (Rhode Island General Assembly)",
    section: "Section 31-24-7 - Tail lamps required",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-24/31-24-7.htm",
  },
  {
    key: "rigl-tire-tread",
    quote:
      "No tire on a vehicle moved on a highway shall have on its periphery less " +
      "than two thirty-seconds (2/32) of an inch of tread depth.",
    source: "Rhode Island General Laws Section 31-23-45 (Rhode Island General Assembly)",
    section: "Section 31-23-45 - Tire treads",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-23/31-23-45.htm",
  },
  {
    key: "rigl-unattended-vehicle",
    quote:
      "The driver of any vehicle which collides with another vehicle which is " +
      "unattended and damage results to either vehicle shall immediately stop and " +
      "shall then and there either locate and notify the operator or owner of the " +
      "unattended vehicle of the name and address of the driver and owner of the " +
      "vehicle striking the unattended vehicle or shall leave in a conspicuous " +
      "place in or upon the unattended vehicle a notice written in the English " +
      "language",
    source: "Rhode Island General Laws Section 31-26-4 (Rhode Island General Assembly)",
    section: "Section 31-26-4 - Duty on collision with unattended vehicle",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-26/31-26-4.htm",
  },
  {
    key: "rigl-work-zone-doubled",
    quote:
      "the department of transportation or local governing unit with jurisdiction " +
      "over the street or highway shall erect signs declaring that the fine for a " +
      "conviction of a traffic violation, as defined by Section 31-41.1-4, " +
      "through the \"temporary traffic control zone\" shall be doubled.",
    source: "Rhode Island General Laws Section 31-14-12.1 (Rhode Island General Assembly)",
    section: "Section 31-14-12.1 - Special speed limits in highway construction and maintenance operations",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-14/31-14-12.1.htm",
  },
  {
    key: "rigl-yellow-signal",
    quote:
      "Vehicular traffic facing a steady circular yellow signal is warned that " +
      "the related green movement is being terminated and that a steady red " +
      "signal will be displayed immediately thereafter when vehicular traffic " +
      "shall not enter the intersection.",
    source: "Rhode Island General Laws Section 31-13-6 (Rhode Island General Assembly)",
    section: "Section 31-13-6 - Meaning of traffic control signals",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-13/31-13-6.htm",
  },
  {
    key: "rigl-yield-sign",
    quote:
      "The driver of a vehicle approaching a yield sign shall, in obedience to " +
      "the sign, slow down to a speed reasonable for the existing conditions and, " +
      "if required for safety to stop, shall stop at a clearly marked stop line",
    source: "Rhode Island General Laws Section 31-17-4 (Rhode Island General Assembly)",
    section: "Section 31-17-4 - Vehicle entering stop or yield intersection",
    url: "https://webserver.rilegislature.gov/Statutes/TITLE31/31-17/31-17-4.htm",
  },
  {
    key: "road-rage-def",
    quote:
      "Road rage occurs when a driver uses the vehicle or some other weapon to " +
      "threaten or cause harm to another roadway user in response to a traffic " +
      "incident.",
    source: MANUAL,
    section: "II. Aggressive Driving and Road Rage",
    url: MANUAL_URL + "#page=23",
  },
  {
    key: "road-rage-stay-in-car",
    quote:
      "Do not get out of your vehicle - it offers protection.",
    source: MANUAL,
    section: "II. Responding to Aggressive Driving and Road Rage",
    url: MANUAL_URL + "#page=24",
  },
  {
    key: "rotary-right-of-way",
    quote:
      "In the absence of any traffic control device or sign, the driver of a " +
      "vehicle about to enter a rotary, regardless of the direction from which " +
      "the vehicle is approaching, shall yield the right-of-way to all vehicles " +
      "already in the rotary.",
    source: MANUAL,
    section: "IV. R.I.G.L. 31-17-8, Right-of-Way at Rotary",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "roundabout-cyclists",
    quote:
      "Generally, cyclists should walk their bicycles across the pedestrian " +
      "crosswalk. Experienced cyclists may navigate roundabouts like motorists. " +
      "Bicyclists should ride in the middle of the lane, not near the curb line, " +
      "to prevent vehicles from passing them.",
    source: MANUAL,
    section: "IV. Rotary/Roundabout - Cyclists' duties",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "roundabout-def",
    quote:
      "Roundabouts are intersections that direct traffic in a counterclockwise " +
      "direction around a center island. The purpose of this circular " +
      "intersection is to slow traffic while reducing delays in traffic movement.",
    source: MANUAL,
    section: "IV. Rotary/Roundabout Diagram",
    url: MANUAL_URL + "#page=40",
  },
  {
    key: "roundabout-enter",
    quote:
      "ENTER: Yield to vehicles in the roundabout. Wait for a gap in traffic, and " +
      "then merge into traffic in the roundabout in a counterclockwise direction.",
    source: MANUAL,
    section: "IV. Rotary/Roundabout - Motorists' duties",
    url: MANUAL_URL + "#page=40",
  },
  {
    key: "roundabout-exit",
    quote:
      "EXIT: Signal, then exit the roundabout to the right. Yield to pedestrians.",
    source: MANUAL,
    section: "IV. Rotary/Roundabout - Motorists' duties",
    url: MANUAL_URL + "#page=40",
  },
  {
    key: "roundabout-no-signals",
    quote:
      "This type of traffic control does not have stop signs or traffic signals; " +
      "instead, it utilizes yield signs, directional signs, and pavement markings " +
      "to guide traffic through the intersection.",
    source: MANUAL,
    section: "IV. Rotary/Roundabout Diagram",
    url: MANUAL_URL + "#page=40",
  },
  {
    key: "roundabout-pedestrians",
    quote:
      "Pedestrians should never walk through a roundabout or cross the center " +
      "island.",
    source: MANUAL,
    section: "IV. Rotary/Roundabout - Pedestrians' duties",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "roundabout-proceed",
    quote:
      "PROCEED: Continue through the roundabout until you reach your street. " +
      "Never stop in a roundabout unless it is an emergency.",
    source: MANUAL,
    section: "IV. Rotary/Roundabout - Motorists' duties",
    url: MANUAL_URL + "#page=40",
  },
  {
    key: "safety-sensors-winter",
    quote:
      "As snow, ice, or salt grime gathers on cars in winter, many of the sensors " +
      "that are key to the operation of advanced safety systems can become " +
      "blocked and shut down.",
    source: MANUAL,
    section: "XIII. Equipment You Must Inspect - Safety Sensors",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "school-bus-divided",
    quote:
      "Motorists do not have to stop for the flashing red lights of the school " +
      "bus when the bus is opposite your vehicle on a divided highway. A divided " +
      "highway is any roadway with a Jersey barrier, guardrail, grass or cement " +
      "median, trees, water, etc. between the lanes of travel in opposite " +
      "directions.",
    source: MANUAL,
    section: "VIII. School Buses",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "school-bus-penalty-manual",
    quote:
      "A fine between $250 to $500 and/or suspension of your driver's license for " +
      "a period up to thirty (30) days will be imposed for the first violation of " +
      "this law. Penalties increase for subsequent violations.",
    source: MANUAL,
    section: "VIII. School Buses",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "school-bus-stop",
    quote:
      "If red lights are flashing on the school bus, Rhode Island requires that " +
      "motorists approaching from either direction come to a full stop and remain " +
      "stopped until the bus's red lights no longer flash. This requirement " +
      "applies not only on public highways but also on private roads and in " +
      "parking lots.",
    source: MANUAL,
    section: "VIII. School Buses",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "school-zone-caution",
    quote:
      "Always reduce speed and use extra caution when children are in the " +
      "vicinity, especially in school zones.",
    source: MANUAL,
    section: "VIII. Watching for Children on Bicycles",
    url: MANUAL_URL + "#page=56",
  },
  {
    key: "seatbelt-adult-passengers",
    quote:
      "Any operator of a motor vehicle transporting a person eighteen (18) years " +
      "of age and older in any seating position of a motor vehicle operated on " +
      "the roadways, streets or highways of this state shall ensure that the " +
      "person be properly wearing a safety belt and/or shoulder harness system",
    source: MANUAL,
    section: "III. Rhode Island Safety Belt/Child Restraint Law",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "seatbelt-fine",
    quote:
      "Vehicle operator is responsible for compliance of sections (f) and (g). " +
      "The fine for violation of this section is $40.00 per occupant.",
    source: MANUAL,
    section: "III. Rhode Island Safety Belt/Child Restraint Law",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "seatbelt-primary-law",
    quote:
      "The Seat Belt Use Law is a primary law for all ages, meaning you can be " +
      "pulled over if anyone is unbuckled.",
    source: MANUAL,
    section: "III. Rhode Island Safety Belt/Child Restraint Law",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "seatbelt-reduces-risk",
    quote:
      "Lap and shoulder belts working together reduce the risk of death and " +
      "serious injury by almost 50%.",
    source: MANUAL,
    section: "XIII. Equipment You Must Inspect - Seat Belts",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "senior-renewal-schedule",
    quote:
      "1. Age 71, every (4) years 2. Age 72, every (3) years 3. Age 73 and older, " +
      "every (2) years.",
    source: MANUAL,
    section: "XVII. Appendices - Renewing your driver's license",
    url: MANUAL_URL + "#page=76",
  },
  {
    key: "shared-lane-marking",
    quote:
      "A shared-lane marking, installed in the center of a travel lane to " +
      "indicate that a bicyclist may use the full lane. It is to alert motorists " +
      "of the lateral location bicyclists are likely to occupy within the " +
      "traveled way",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "shared-left-turn-lane-diagram",
    quote:
      "Shared Left Turn Lane: All vehicles use the center lane for left turns in " +
      "and out of left side streets/driveways.",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=39",
  },
  {
    key: "shared-turn-lane",
    quote:
      "A shared turn lane is the center lane of traffic set apart from the travel " +
      "lanes by solid single yellow lines on the outside and broken yellow lines " +
      "inside the shared turn lane.",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "shared-turn-lane-100",
    quote:
      "Motorists wishing to turn shall not enter the lane unless they intend to " +
      "turn within 100 feet (minimum).",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "side-impact",
    quote:
      "1. Brake or accelerate quickly. Do whichever seems more likely to reduce " +
      "the impact of the collision. 2. Sound the horn to alert the other driver. " +
      "3. Change lanes or swerve away from the impact.",
    source: MANUAL,
    section: "V. Driving Emergencies - Threat of a Side-Impact Collision",
    url: MANUAL_URL + "#page=45",
  },
  {
    key: "signal-100-feet",
    quote:
      "The Rhode Island law states that a driver must make a signal by hand or by " +
      "using directional lights when driving out of a parking space and at least " +
      "100 feet at a minimum before making a turn.",
    source: MANUAL,
    section: "IV. Signals and Roadway Markings - Signals",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "signal-100-turns-lanes",
    quote:
      "You must begin to use your directional signals a minimum distance of at " +
      "least 100 feet before making turns or changing lanes. Slow down gradually " +
      "before turning to avoid being hit from the rear.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "signal-lane-change-100",
    quote:
      "Always signal before changing lanes. Do this soon enough to let other " +
      "drivers know what you are going to do, within 100 feet.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "signals-timing",
    quote:
      "All signals should be given in time to let drivers in back of you know " +
      "what you are going to do.",
    source: MANUAL,
    section: "IV. Signals and Roadway Markings - Signals",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "signs-regulatory-list",
    quote:
      "SIGNS Regulatory Signs Stop Yield Do Not Enter No Left Turn No Parking No " +
      "Trucks No U-Turn Wrong Way No Parking No Passing Zone One Way One Way " +
      "Speed Limit Keep Right No Right Turn On Red Right Turn Only Restricted " +
      "Lane Right or Straight Left or Straight Lane Restrictions",
    source: MANUAL,
    section: "SIGNS - Regulatory Signs (inside back cover)",
    url: MANUAL_URL + "#page=85",
  },
  {
    key: "signs-warning-list",
    quote:
      "SIGNS Warning Signs Yield Sign Ahead Railroad Crossing Here Traffic Signal " +
      "Ahead Road Alignment (curve) Stop Sign Ahead School Crossing No Passing " +
      "Zone Detour Slow Moving Vehicle Entering Divided Highway Railroad Crossing " +
      "Ahead",
    source: MANUAL,
    section: "SIGNS - Warning Signs (inside back cover)",
    url: MANUAL_URL + "#page=86",
  },
  {
    key: "skid-cause",
    quote:
      "Most skids are caused by the driver's failure to react in time to adjust " +
      "the vehicle's speed to road and traffic conditions.",
    source: MANUAL,
    section: "V. Driving Emergencies - How to Avoid Skidding",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "skid-control",
    quote:
      "To control a vehicle as it begins to skid: 1. Let off the gas. 2. Keep " +
      "your foot away from the brake pedal and the clutch (if applicable). 3. Let " +
      "the vehicle slow gradually. 4. Look and turn the steering wheel in the " +
      "direction you want the vehicle to go.",
    source: MANUAL,
    section: "V. Driving Emergencies - How to Control a Vehicle in a Skid",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "skills-test-30-days",
    quote:
      "Failures must wait at least thirty (30) days before re-taking the driver " +
      "skills test.",
    source: MANUAL,
    section: "XV. Passing Your Driver Skills Test",
    url: MANUAL_URL + "#page=70",
  },
  {
    key: "skills-test-content",
    quote:
      "The test includes pre-driving procedures, maneuverability test, parallel " +
      "parking, three-point turnabout, backing maneuver, and other common driving " +
      "experiences.",
    source: MANUAL,
    section: "I. Applying - What is covered on the driving skills test?",
    url: MANUAL_URL + "#page=12",
  },
  {
    key: "skills-test-immediate-failure",
    quote:
      "The following are reasons for immediate failure of a driving test: Seat " +
      "belt violation (driver and/or passenger) Stop Sign Violation Running over " +
      "curb or cone with one or more wheels Intervention by passenger (verbal or " +
      "Physical Intervention) Collision with barrier Any dangerous action",
    source: MANUAL,
    section: "I. Applying - What is covered on the driving skills test?",
    url: MANUAL_URL + "#page=12",
  },
  {
    key: "skills-test-termination",
    quote:
      "Lack of or violation of any requirement mentioned above; collision; any " +
      "motor vehicle violation as defined in Title 31 of the Motor Vehicle Code, " +
      "1956 as amended; dangerous actions; leaving the designated roadway; " +
      "dangerously inexperienced driver",
    source: MANUAL,
    section: "XV. Passing Your Driver Skills Test - Grounds for immediate termination",
    url: MANUAL_URL + "#page=70",
  },
  {
    key: "skills-test-wait-30",
    quote:
      "You will not be allowed to retake the test immediately. You must wait at " +
      "least 30 days before your next appointment.",
    source: MANUAL,
    section: "I. Applying - What if I fail the driving skills test?",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "slippery-first-rain",
    quote:
      "Oil, rubber, dirt, and water combine to make roads especially slippery " +
      "when it first starts to rain.",
    source: MANUAL,
    section: "III. Stopping Your Vehicle",
    url: MANUAL_URL + "#page=28",
  },
  {
    key: "slippery-road-braking",
    quote:
      "When you are driving on a slippery road, you should apply the brakes by " +
      "very gently pumping them and maintaining the proper speed for the road " +
      "conditions (this procedure is for vehicles with conventional brakes only).",
    source: MANUAL,
    section: "V. Driving Emergencies - How to Avoid Skidding",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "smith-aim-high",
    quote:
      "Aim High In Steering: Don't look down at your fender or hood but ahead 4 " +
      "to 6 seconds (the space you will travel in 4-6 seconds) and 12 to 15 " +
      "seconds ahead at the middle of your driving lane.",
    source: MANUAL,
    section: "VII. MR. SMITH",
    url: MANUAL_URL + "#page=50",
  },
  {
    key: "smith-leave-an-out",
    quote:
      "Leave Yourself an Out: Situations may occur that you don't plan on. Keep " +
      "plenty of space between you and the next vehicle.",
    source: MANUAL,
    section: "VII. MR. SMITH",
    url: MANUAL_URL + "#page=50",
  },
  {
    key: "smith-overall-picture",
    quote:
      "Get The Overall Picture: Look ahead a full block in cities/towns and half " +
      "a mile ahead on highways.",
    source: MANUAL,
    section: "VII. MR. SMITH",
    url: MANUAL_URL + "#page=50",
  },
  {
    key: "smith-system",
    quote:
      "The Smith System has five (5) keys to collision free driving.",
    source: MANUAL,
    section: "VII. MR. SMITH",
    url: MANUAL_URL + "#page=50",
  },
  {
    key: "snow-removal-law",
    quote:
      "Rhode Island law makes the motorist responsible for removing from the " +
      "vehicle snow and ice that limit vision and for clearing away from the roof " +
      "of the vehicle any snow that might blow down on the windshield or windows " +
      "of other vehicles.",
    source: MANUAL,
    section: "IX. Laws You Must Know",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "solid-lines",
    quote:
      "Solid Lines: Solid lines separate lanes of traffic. Motorists are not " +
      "permitted to pass other vehicles nor change lanes. You may cross the solid " +
      "lines in an emergency (turns, breakdown, object in road, parking, etc).",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "solid-with-broken",
    quote:
      "A solid line with a broken line is usually painted on two-lane roadways. " +
      "Motorists with the solid line on their side of the roadway should not pass " +
      "another vehicle nor cross the solid line.",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "speed-ideal-conditions",
    quote:
      "Be it snow, rain, sleet, ice, or road construction, motorists must realize " +
      "the speed limit sign is the maximum speed for ideal conditions and " +
      "therefore, they must adjust their speed to the conditions.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "speeding-fine-1-10",
    quote:
      "1-10 miles per hour (mph) in excess of posted speed limit 95.00 11 mph in " +
      "excess of posted speed limit with a fine of 200.00 minimum",
    source: MANUAL,
    section: "IX. Common Motor Vehicle Violations - Fine Schedule",
    url: MANUAL_URL + "#page=59",
  },
  {
    key: "speeding-per-mile",
    quote:
      "$10.00 per mile in excess of speed limit",
    source: MANUAL,
    section: "IX. Common Motor Vehicle Violations - Fine Schedule",
    url: MANUAL_URL + "#page=59",
  },
  {
    key: "speeds-25-50-65",
    quote:
      "Rhode Island law sets speed limits as follows: 25 miles per hour (mph) in " +
      "residential areas and 50-65 mph on most highways.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "stale-fresh-green",
    quote:
      "Stale green light is a light that has been green for a while. Fresh green " +
      "light is a light that has just turned green.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=42",
  },
  {
    key: "stalled-on-tracks",
    quote:
      "To avoid being hit by debris from the collision, exit your vehicle and " +
      "run, far away from the tracks, in a parallel line in the opposite " +
      "direction from which the train is moving.",
    source: MANUAL,
    section: "V. Driving Emergencies - Vehicle Stalls on Railroad Tracks",
    url: MANUAL_URL + "#page=45",
  },
  {
    key: "steady-green",
    quote:
      "Steady Green Light: You may proceed with caution to avoid colliding with " +
      "another vehicle or pedestrian.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "steady-red",
    quote:
      "Steady Red Light: Stop before reaching the crosswalk and wait until the " +
      "light is green (unless another light such as a green arrow directs you " +
      "otherwise).",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "steady-yellow",
    quote:
      "Steady Yellow Light: A yellow light tells a driver that a red light is " +
      "next. Slow down and proceed with caution if a stop cannot be made safely.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "stop-sign-position",
    quote:
      "Every driver of a vehicle approaching a stop sign shall stop before " +
      "entering the crosswalk on the near side of the intersection. In the event " +
      "there is no crosswalk, the driver shall stop at a clearly marked stop " +
      "line.",
    source: MANUAL,
    section: "III. Stopping and Parking - RIGL 31-20-9 Obedience to stop signs",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "stop-three-seconds",
    quote:
      "When stopping, drivers should completely cease all forward motion for a " +
      "minimum of three seconds. This gives the driver time to look left, look " +
      "right, look center, look left again, and proceed with caution.",
    source: MANUAL,
    section: "III. Stopping and Parking - Stopping",
    url: MANUAL_URL + "#page=31",
  },
  {
    key: "stopping-three-steps",
    quote:
      "1. You must perceive (recognize) the danger and the need to stop. 2. Your " +
      "brain must react to the hazard and tell your foot to step on the brake. 3. " +
      "Your foot must move to the brake pedal and operate the brake (braking).",
    source: MANUAL,
    section: "III. Stopping Your Vehicle",
    url: MANUAL_URL + "#page=28",
  },
  {
    key: "stuck-accelerator",
    quote:
      "1. Kick the side of the accelerator once or twice to try to jar it free. " +
      "2. Shift the car to NEUTRAL at the same time you apply the brake.",
    source: MANUAL,
    section: "V. Driving Emergencies - Stuck Accelerator Pedal",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "supervising-driver",
    quote:
      "A supervising driver must be a licensed driver who has been licensed to " +
      "drive for at least five (5) years and must be twenty-one (21) years of age " +
      "or older.",
    source: MANUAL,
    section: "I. Applying - Limited Learner Permit",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "synergistic-effect",
    quote:
      "Combining alcohol with another drug can cause a synergistic effect, " +
      "whereby the effects are multiplied.",
    source: MANUAL,
    section: "X. Drinking / Drugs and Driving - A. Effects of Alcohol",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "tailgated-response",
    quote:
      "If you are being tailgated, to avoid the risk of aggressive driving or " +
      "road rage, get out of the aggressive driver's way. Change lanes or allow " +
      "the driver to pass you. Never speed up because the tailgater may continue " +
      "to tailgate you at the higher speed. Never slam on your brakes.",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "teen-passenger-risk",
    quote:
      "Specifically, for teen drivers, the addition of just one teen passenger " +
      "doubles the likelihood of experiencing a fatal crash. With two or more " +
      "teen passengers, the risk of a fatal crash jumps by 300 percent.",
    source: MANUAL,
    section: "II. Distracted Driving - Distractions inside the vehicle",
    url: MANUAL_URL + "#page=18",
  },
  {
    key: "texting-any-age",
    quote:
      "No matter the age, you are NOT allowed to use a wireless handset to " +
      "compose, read or send text message while operating a motor vehicle, as " +
      "stated by Rhode Island General Law Section 31-22-30.",
    source: MANUAL,
    section: "III. Cellular Phone Usage - TEXTING PENALTIES",
    url: MANUAL_URL + "#page=37",
  },
  {
    key: "texting-forbidden",
    quote:
      "TEXTING WHILE DRIVING IS FORBIDDEN IN THE STATE OF RHODE ISLAND!",
    source: MANUAL,
    section: "III. Cellular Phone Usage - Personal Wireless Communications Devices",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "texting-penalties",
    quote:
      "First offense = $100 fine Second offense = $150 fine Third and subsequent " +
      "offences = $250 fine",
    source: MANUAL,
    section: "III. Cellular Phone Usage - TEXTING PENALTIES",
    url: MANUAL_URL + "#page=37",
  },
  {
    key: "texting-riskier",
    quote:
      "Evidence suggests that text messaging is even riskier than talking on a " +
      "cell phone, as text messaging often requires the driver to both look at " +
      "the phone and manipulate the keypad with one's hands.",
    source: MANUAL,
    section: "II. Distracted Driving - Text messaging",
    url: MANUAL_URL + "#page=18",
  },
  {
    key: "three-point-turn",
    quote:
      "Unless prohibited, you may use the three-point turn to turn around on a " +
      "narrow street, Select a safe location to make this maneuver, Signal your " +
      "intent to pull to the right side of the street,",
    source: MANUAL,
    section: "III. Turnabouts - The three-point turn",
    url: MANUAL_URL + "#page=31",
  },
  {
    key: "three-second-adverse",
    quote:
      "When driving under adverse weather/road conditions, be sure to increase " +
      "your following distance an additional second for EACH imperfect condition.",
    source: MANUAL,
    section: "VII. The Three (3) Second Rule - Following Distance",
    url: MANUAL_URL + "#page=51",
  },
  {
    key: "three-second-count",
    quote:
      "If your vehicle's front bumper passes the point before you finish counting " +
      "to three, you are following too close to the vehicle in front of you. " +
      "Reduce your speed, and count to three again.",
    source: MANUAL,
    section: "VII. The Three (3) Second Rule - Following Distance",
    url: MANUAL_URL + "#page=51",
  },
  {
    key: "three-second-highway",
    quote:
      "If the roadway is wet or slippery, you will need additional distance " +
      "(seconds).",
    source: MANUAL,
    section: "III. Safe Driving on the Highway",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "three-second-not-guarantee",
    quote:
      "The following three-second rule cannot always guarantee you time to stop " +
      "to avoid a collision, but it works in most situations.",
    source: MANUAL,
    section: "VII. The Three (3) Second Rule - Following Distance",
    url: MANUAL_URL + "#page=50",
  },
  {
    key: "tire-pressure-cold",
    quote:
      "In order to receive an accurate reading, measure your tire pressure while " +
      "your tire is cold.",
    source: MANUAL,
    section: "XIII. Equipment You Must Inspect - Tires",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "tire-tread-manual",
    quote:
      "You may not drive on a tire that has less than 2/32 of an inch of tread " +
      "(measure the depth of the tread with a quarter).",
    source: MANUAL,
    section: "XIII. Equipment You Must Inspect - Tires",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "total-stopping-distance",
    quote:
      "The perception distance plus the reaction distance plus the braking " +
      "distance equals the total stopping distance.",
    source: MANUAL,
    section: "III. Stopping Your Vehicle",
    url: MANUAL_URL + "#page=28",
  },
  {
    key: "train-stopping-distance",
    quote:
      "It may take a train a mile and a half to come to a complete stop after " +
      "applying the brake.",
    source: MANUAL,
    section: "V. Driving Emergencies - Railroad crossing information for the motorist",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "truck-50-feet",
    quote:
      "Stay at least 50 feet back if you expect the driver to see you. You know " +
      "you have enough distance behind a truck or semi-tractor-trailer when you " +
      "can see the side-view mirrors of the truck you are following.",
    source: MANUAL,
    section: "VIII. Sharing The Road With Large Trucks",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "truck-blind-spots",
    quote:
      "The following are three major blind spots for truck drivers: 1. The front " +
      "of the truck. 2. The left and right front sides. 3. Behind the truck (if " +
      "the truck is pulling a trailer, the blind spot is over 50 feet long).",
    source: MANUAL,
    section: "VIII. Sharing The Road With Large Trucks",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "truck-collision-risk",
    quote:
      "The National Highway Traffic Safety Administration (NHTSA) warns that big " +
      "trucks are four (4) times more likely than vehicles to get into " +
      "collisions.",
    source: MANUAL,
    section: "VIII. Sharing The Road With Large Trucks",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "truck-mirror-rule",
    quote:
      "If you cannot see the operator of the larger vehicle in their side-view " +
      "mirror, then that operator cannot see you.",
    source: MANUAL,
    section: "VIII. Sharing The Road With Large Trucks",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "truck-no-zones",
    quote:
      "It is up to you to avoid the blind spots, also known as 'no zones'. Be " +
      "sure not to cruise into a truck's right side. If you find yourself in that " +
      "position, pull ahead or fall back quickly.",
    source: MANUAL,
    section: "VIII. Sharing The Road With Large Trucks",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "turn-abcd",
    quote:
      "\"A\" Approach the turn; plan your path through the turn. \"B\" Brake prior to " +
      "the turn to reduce speed to a safe level. \"C\" Continue into the first half " +
      "of the turn, covering the brake (gentle pressure on the brake pedal) in " +
      "case the need to apply the brakes arises. \"D\" Drive out of the turn by " +
      "accelerating at a safe, comfortable rate of speed.",
    source: MANUAL,
    section: "III. How To Turn - The Basics of making a turn",
    url: MANUAL_URL + "#page=30",
  },
  {
    key: "turn-wheels-straight",
    quote:
      "4. When you reach the intersection, wait until the way is clear. Do not " +
      "turn your wheels in your intended path of travel until you are clear to " +
      "make your turn.",
    source: MANUAL,
    section: "III. How To Turn - Making proper turns from proper lanes",
    url: MANUAL_URL + "#page=29",
  },
  {
    key: "turnabout-solid-yellow",
    quote:
      "You cannot cross a solid yellow line at any time. Local statutes may " +
      "prohibit turnabouts; you should be familiar with local traffic " +
      "regulations.",
    source: MANUAL,
    section: "III. Turnabouts",
    url: MANUAL_URL + "#page=30",
  },
  {
    key: "turnabout-visibility",
    quote:
      "You have clear visibility in each direction for a distance of five hundred " +
      "(500) feet. There are no hills or curves nearby which could obstruct your " +
      "view of on-coming traffic. You are at least two hundred (200) feet from an " +
      "intersection.",
    source: MANUAL,
    section: "III. Turnabouts",
    url: MANUAL_URL + "#page=30",
  },
  {
    key: "u-turn-rule",
    quote:
      "In Rhode Island, you may make a \"U\" turn only when it is allowed and does " +
      "not interfere with the free flow of traffic in either direction.",
    source: MANUAL,
    section: "III. Turnabouts - \"U\" turn",
    url: MANUAL_URL + "#page=30",
  },
  {
    key: "uncontrolled-intersection",
    quote:
      "Intersections without signs or signals are known as uncontrolled " +
      "intersections. When approaching uncontrolled intersections, motorists must " +
      "treat the intersection as if there were a yield sign present.",
    source: MANUAL,
    section: "IV. Traffic Lights/Signals",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "underage-possession-suspension",
    quote:
      "In addition, any person who violates this section may be required to " +
      "perform community service and shall be subject to a minimum sixty (60) day " +
      "suspension of his or her driver's license",
    source: MANUAL,
    section: "X. R.I.G.L. 3-8-10, Possession of beverage by underage persons",
    url: MANUAL_URL + "#page=64",
  },
  {
    key: "underage-transport-alcohol",
    quote:
      "Any person who has not reached his or her twenty-first (21st) birthday and " +
      "who operates a motor vehicle upon the public highways, except when " +
      "accompanied by a parent or legal guardian, and, knowingly having liquor or " +
      "intoxicating beverages in any form in containers, opened or unopened, in " +
      "any part of the vehicle, shall have his/her license suspended or his/her " +
      "right to operate a motor vehicle denied for a period of not more than " +
      "thirty (30) days by the administrator of the division of motor vehicles.",
    source: MANUAL,
    section: "X. R.I.G.L. 3-8-9, Transportation of alcoholic beverages by underage persons",
    url: MANUAL_URL + "#page=64",
  },
  {
    key: "vehicle-fire-hood",
    quote:
      "If the fire is under the hood and flames are shooting, DO NOT open the " +
      "hood of the vehicle. 4. If the fire is out of control move at least 100 " +
      "feet away, as a fuel fire can cause the fuel tank to explode.",
    source: MANUAL,
    section: "V. Driving Emergencies - Vehicle Catches Fire",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "vehicle-height-four-inches",
    quote:
      "No person shall alter the height of or operate a motor vehicle with an " +
      "altered height that has an original manufacturer's gross vehicle weight " +
      "rating of up to and including ten thousand pounds (10,000 lbs.), by " +
      "elevating or lowering the chassis or body by more than four inches (4\") " +
      "from the original manufacturer's specified height",
    source: MANUAL,
    section: "XVII. Appendices - Miscellaneous Motor Vehicle Laws (R.I.G.L. 31-23-13.1)",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "vehicle-in-water",
    quote:
      "1. Immediately remove your seat belt. 2. Open a window. If your vehicle is " +
      "equipped with power windows, open the window before the water damages the " +
      "electrical system.",
    source: MANUAL,
    section: "V. Driving Emergencies - Vehicle in Water",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "vehicle-in-water-roof",
    quote:
      "Exit the vehicle and move to the roof. This will keep you as dry as " +
      "possible and even in moving water, you can ride the vehicle like a boat " +
      "for a short time. Once on the roof, call 911 and locate the nearest dry " +
      "land.",
    source: MANUAL,
    section: "V. Driving Emergencies - Vehicle in Water",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "velocitizing",
    quote:
      "Velocitizing occurs when you begin to feel that you are going slower than " +
      "your actual speed. You can avoid this by varying your speed slightly when " +
      "driving long distances on the highway.",
    source: MANUAL,
    section: "III. Stopping Your Vehicle",
    url: MANUAL_URL + "#page=28",
  },
  {
    key: "vision-standard",
    quote:
      "If you normally wear contact lenses or corrective lenses to see at a " +
      "distance, you must wear them at the time of your vision test. Your vision " +
      "must be at least 20/40 with corrected lenses.",
    source: MANUAL,
    section: "I. Applying - Limited Learner Permit",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "visual-search-12-15",
    quote:
      "Evaluate your front zones in the 12-15 second target area (this refers to " +
      "the area you will be in after you have traveled for 12-15 seconds) by " +
      "searching intersections, driveways, and parked vehicles for possible " +
      "changes in your line of sight and path of travel.",
    source: MANUAL,
    section: "VII. ORDERLY VISUAL SEARCH PATTERN",
    url: MANUAL_URL + "#page=50",
  },
  {
    key: "visually-impaired-fine",
    quote:
      "Fines for failing to yield to pedestrians with a visual impairment may " +
      "result in a fine up to $1,000.",
    source: MANUAL,
    section: "VIII. Pedestrians with a Visual Impairment",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "visually-impaired-sound",
    quote:
      "Pedestrians who are visually impaired use the sound of traffic (including " +
      "your engine) as a guide in determining when it is safe to cross a street, " +
      "so never assume they will expect you to make a right turn on a red light " +
      "at an intersection after stopping.",
    source: MANUAL,
    section: "VIII. Pedestrians with a Visual Impairment",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "visually-impaired-stop",
    quote:
      "When a pedestrian is using a white cane or a guide dog while crossing or " +
      "attempting to cross the street ahead of you, you must bring your vehicle " +
      "to a complete stop before arriving at the intersection and yield the " +
      "right-of-way to the pedestrian.",
    source: MANUAL,
    section: "VIII. Pedestrians with a Visual Impairment",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "white-lines",
    quote:
      "White Lines: White lines are painted upon the highways to separate traffic " +
      "moving in the same direction.",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "window-tint-70",
    quote:
      "Rhode Island follows the Federal Motor Vehicle Safety Standards of a total " +
      "visible light transmittance of not less than seventy percent (70%).",
    source: MANUAL,
    section: "XVII. Appendices - Miscellaneous Motor Vehicle Laws (R.I.G.L. 31-23.3-2)",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "window-tint-fine",
    quote:
      "The fine for a violation of this law is $250.00.",
    source: MANUAL,
    section: "XVII. Appendices - Miscellaneous Motor Vehicle Laws (R.I.G.L. 31-23.3-2)",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "winter-braking",
    quote:
      "Brake - Brake early, brake slowly, brake correctly, and never slam on the " +
      "brakes. If you have anti-lock brakes, press the pedal down firmly and hold " +
      "it. If you don't have anti-lock brakes, gently pump the pedal.",
    source: MANUAL,
    section: "V. Driving in Inclement Weather - Winter Driving",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "winter-driving",
    quote:
      "Drivers may not be prepared for driving on ice or snow and should take it " +
      "slow. Remember to drive well below the posted speed limit and increase " +
      "your following distance between other vehicles",
    source: MANUAL,
    section: "V. Driving in Inclement Weather - Winter Driving",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "wireless-risk-400",
    quote:
      "Overall risk of a collision while using a wireless communication device " +
      "increases by 400 percent.",
    source: MANUAL,
    section: "II. Distracted Driving - Distractions inside the vehicle",
    url: MANUAL_URL + "#page=18",
  },
  {
    key: "work-zone-devices",
    quote:
      "Motorists should be aware of other warning devices used in the work zone " +
      "such as cones, barrels, tubes, panels, barricades, flashing arrow boards, " +
      "and temporary roadway markings.",
    source: MANUAL,
    section: "XVII. Appendices - Construction and Work Zone Safety Requirements",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "work-zone-fines-doubled",
    quote:
      "Drive within the posted construction speed limits. Note: Fines are doubled " +
      "for speeding tickets issued within these designated areas twenty-four (24) " +
      "hours a day.",
    source: MANUAL,
    section: "XVII. Appendices - Construction and Work Zone Safety Requirements",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "work-zone-flaggers",
    quote:
      "Pay attention to the directions given by law enforcement officers and " +
      "flaggers and do not change lanes within the work zone. Flaggers or law " +
      "enforcement officers use hand signals or signs to instruct motorists to " +
      "slow down or stop, as required. Flaggers have the legal authority to " +
      "control traffic.",
    source: MANUAL,
    section: "XVII. Appendices - Construction and Work Zone Safety Requirements",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "work-zone-merge-early",
    quote:
      "Merge early and when it is safe; motorists can help maintain traffic flow " +
      "by moving to the appropriate lane at first notice.",
    source: MANUAL,
    section: "XVII. Appendices - Construction and Work Zone Safety Requirements",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "work-zone-rear-end",
    quote:
      "Do not tailgate; most work zone crashes are rear-end collisions.",
    source: MANUAL,
    section: "XVII. Appendices - Construction and Work Zone Safety Requirements",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "work-zone-sign-colors",
    quote:
      "Construction signs are in high visibility colors (fluorescent " +
      "yellow-green, orange, or pink) diamond or rectangular I shape, and posted " +
      "prior to, within, and after the work zones.",
    source: MANUAL,
    section: "XVII. Appendices - Construction and Work Zone Safety Requirements",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "yellow-lines",
    quote:
      "Yellow Lines: Yellow lines separate traffic traveling in opposite " +
      "directions. Single or double solid yellow lines separate traffic traveling " +
      "in opposite directions. They prohibit motorists from passing other " +
      "vehicles.",
    source: MANUAL,
    section: "IV. Roadway Markings",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "zone-system",
    quote:
      "The zone system consists of six (6) zones (areas of space) around your " +
      "vehicle, that is the width of a lane extending as far as the driver can " +
      "see.",
    source: MANUAL,
    section: "VII. Systems for Safe, Courteous, and Defensive Driving - ZONES",
    url: MANUAL_URL + "#page=50",
  },
];
