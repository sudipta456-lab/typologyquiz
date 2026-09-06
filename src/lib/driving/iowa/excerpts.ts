import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Iowa bank. Four sources sit behind them,
// and each is here for a reason:
//
//  - The Iowa Driver's License Manual, published by the Iowa Department of
//    Transportation. Its own back cover is the only edition label the book
//    carries: "MM1170 07/23/2026". It runs 68 PDF pages, the printed page
//    number matches the PDF page number throughout, and it is organised into
//    five numbered chapters whose subsections (2.24, 4.5, 5.13) are what the
//    `section` field below names. Most of what is quoted here comes from it.
//  - Iowa Code chapter 321, Motor Vehicles and Law of the Road, published by
//    the Iowa Legislature. The manual states several rules loosely - what the
//    unposted speed limit is off the four districts it lists, how far ahead a
//    signal must be given, what "no closer than 15 feet" behind a school bus
//    actually reads like in the statute, what the graduated licence requires
//    in hours. The statute is where the operative wording lives.
//  - Iowa Administrative Code 761 chapter 604, License Examination. The
//    manual never describes the knowledge test at all. The rule does: it is
//    the department that declares the passing score, the score is good for
//    180 days, an oral test is available on request, and a retest is at the
//    examiner's discretion.
//  - Five iowadot.gov pages: Instruction Permit for Under Age 18,
//    Intermediate License, Full License, Special Minor's Restricted License,
//    Online Permit Test (Skip the Trip), and Prepare for Your Driving Test.
//    The whole graduated licensing system is on those pages and nowhere in
//    the book, and they are revised far more often than the manual is.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Only the
// four normalisations the sibling banks use were applied, to the extracted text
// and to nothing else: curly quotes, en dashes and em dashes fold to ASCII;
// runs of whitespace, including the line breaks the PDF inserts mid-sentence,
// collapse to single spaces; the section symbol is spelled out as "Section";
// and where a source states a rule as a stem followed by a bulleted list, the
// items run together in the order they appear - no words are changed, dropped
// or reordered.
//
// The sources' own slips are preserved exactly as they stand, because a quote
// that has been tidied up is no longer a quote. Among them: the manual's
// "horsedrawn wagons" on page 11 and its "hand-overhand" on page 42, both
// artefacts of a line break the publisher set inside a hyphenated word; its
// "bicyclists appears" on page 49; the missing full stop after "On interstates
// and highways" that ends the page 21 no-parking list; the stray space in the
// DOT's "special minor's restricted license )" link text; and the DOT's "a
// Iowa county treasurer" on the instruction-permit page.
//
// One real conflict is recorded rather than smoothed over. The manual's page
// 42 list of unposted limits prints "60 mph on all primary roads, urban
// interstate highways, and secondary roads, including unpaved roads from
// sunrise to sunset" and "70 mph on rural interstate highways". Iowa Code
// Section 321.285(3) sets the fall-back limit at fifty-five, Section
// 321.285(5)(a) sets sixty-five on fully controlled-access divided multilane
// highways and seventy on the interstate system with no urban/rural split, and
// Section 321.285(4) caps unsurfaced secondary roads at fifty-five by day.
// Both readings are quoted below; no question in this bank turns on the
// figures where they disagree. See the research note.

export const iowaExcerpts: HandbookExcerpt[] = [
  {
    key: "licence-required",
    quote:
      "In Iowa, anyone operating a motor vehicle, motorcycle, or " +
      "moped on public roads is required to have a permit or " +
      "license.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 1 - 1.1 Who Needs an Iowa Driver's License? (page 4)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=4",
  },
  {
    key: "residency-30-days",
    quote:
      "You are considered an Iowa resident for purposes of " +
      "driver's licensing if you have done at least one of the " +
      "following: Registered to vote in this state. Enrolled your" +
      " child in an Iowa public school. Accepted a permanent job " +
      "in Iowa. Lived in Iowa continuously for 30 days.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 1 - 1.1 Who Needs an Iowa Driver's License? (page 4)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=4",
  },
  {
    key: "licence-not-needed",
    quote:
      "You do NOT need a driver's license if you are: Driving a " +
      "military vehicle while on duty with the U.S. Armed Forces." +
      " Driving farm equipment between the home farm and any " +
      "nearby farmland or farm operation within two miles.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 1 - 1.1 Who Needs an Iowa Driver's License? (page 4)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=4",
  },
  {
    key: "carry-licence-insurance",
    quote:
      "You should always have your license or permit with you " +
      "while driving. Drivers of vehicles in Iowa must also carry" +
      " current proof of registration and an insurance card " +
      "(printed or electronic) to verify proof of liability " +
      "insurance.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 1 - 1.2 Carrying your License, Insurance, & " +
      "Registration (page 5)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=5",
  },
  {
    key: "carry-failure-penalty",
    quote:
      "Failure to do so could result in fines and possible " +
      "impoundment of the vehicle.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 1 - 1.2 Carrying your License, Insurance, & " +
      "Registration (page 5)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=5",
  },
  {
    key: "apply-requirements",
    quote:
      "When you apply for your license, you will be required to " +
      "do the following: Complete a vision screening. Pass the " +
      "knowledge test. Show that you've successfully completed an" +
      " Iowa-approved driver's education course (if you are under" +
      " 18).",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 1 - 1.3 Required Health Screenings and Tests (page 5)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=5",
  },
  {
    key: "sign-shape-colour-clues",
    quote:
      "Traffic signs advise of traffic laws, hazards, location, " +
      "directions, and where services are located. The shape and " +
      "color of traffic signs give clues to the type of " +
      "information they provide.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs (page 6)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=6",
  },
  {
    key: "colour-red",
    quote:
      "RED Stop, yield, or do what is shown on the sign.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Colors (page 6)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=6",
  },
  {
    key: "colour-green",
    quote:
      "GREEN Direction. Indicates where a place is, or how far a " +
      "place is from where you are.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Colors (page 6)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=6",
  },
  {
    key: "colour-blue",
    quote:
      "BLUE Services for travelers. Directs you to places such as" +
      " rest areas, tourist sites, hospitals, lodging, fuel " +
      "stations, restaurants, and tourist attractions.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Colors (page 6)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=6",
  },
  {
    key: "colour-yellow-green",
    quote:
      "FLUORESCENT YELLOW-GREEN Pedestrian, bicycle, and school " +
      "warning signs.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Colors (page 6)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=6",
  },
  {
    key: "colour-white",
    quote:
      "WHITE Regulatory. Provides information regarding " +
      "enforceable laws and ordinances.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Colors (page 6)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=6",
  },
  {
    key: "colour-orange",
    quote:
      "ORANGE Road work, temporary traffic control, and " +
      "maintenance warnings. Be sure to watch for changing speed " +
      "limits and workers on the road.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Colors (page 6)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=6",
  },
  {
    key: "colour-brown",
    quote:
      "BROWN Recreation and cultural points of interest. Provides" +
      " direction to historical sites, parks, or recreational " +
      "areas.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Colors (page 6)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=6",
  },
  {
    key: "colour-pink",
    quote:
      "FLUORESCENT PINK Warning and guide signs for incident " +
      "management such as crash clean up, debris removal, " +
      "traffic, etc.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Colors (page 6)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=6",
  },
  {
    key: "shape-octagon",
    quote:
      "OCTAGON Shape is reserved for a stop sign only. Come to a " +
      "full stop at an intersection controlled by this sign.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Shapes (page 7)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=7",
  },
  {
    key: "shape-triangle",
    quote:
      "EQUILATERAL TRIANGLE Yield the right of way.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Shapes (page 7)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=7",
  },
  {
    key: "shape-pennant",
    quote:
      "PENNANT This sign will be on the left side of the road. It" +
      " warns you of a no passing zone.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Shapes (page 7)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=7",
  },
  {
    key: "shape-diamond",
    quote:
      "DIAMOND Warning. Alerts you to special road hazards. Words" +
      " or pictures on the sign will show you why you need to " +
      "slow down or use extra caution.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Shapes (page 7)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=7",
  },
  {
    key: "shape-circle",
    quote:
      "CIRCLE Railroad crossing ahead.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Shapes (page 7)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=7",
  },
  {
    key: "shape-pentagon",
    quote:
      "PENTAGON School crossing. Signs mark school areas and " +
      "school crossings.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Shapes (page 7)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=7",
  },
  {
    key: "shape-crossbuck",
    quote:
      "CROSSBUCK Railroad crossing signs are placed at each " +
      "crossing. A number sign under the crossbucks shows how " +
      "many sets of train tracks you must cross.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.1 Traffic Signs, Standard Shapes (page 7)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=7",
  },
  {
    key: "regulatory-red-slash",
    quote:
      "Some regulatory signs have a red circle with a red slash " +
      "over a symbol. These indicate you cannot do something; for" +
      " example, no left turn, no right turn, or no U-turn.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.2 Regulatory Signs (page 8)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=8",
  },
  {
    key: "speed-signs-maximum",
    quote:
      "Speed limit signs indicate the maximum or minimum safe " +
      "speed that is allowed. Maximum speed limits are for ideal " +
      "driving conditions.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.2 Regulatory Signs, Speed Limit Signs (page 8)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=8",
  },
  {
    key: "speed-signs-reduce",
    quote:
      "Sometimes you must reduce your speed when conditions " +
      "require it, such as when the roadway is slippery (during " +
      "rain or snow) or it is difficult to see clearly down the " +
      "road (during fog).",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.2 Regulatory Signs, Speed Limit Signs (page 8)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=8",
  },
  {
    key: "speed-minimum-route",
    quote:
      "Some high-speed roads have minimum speed limits. If this " +
      "minimum speed is too fast for you, then you should use " +
      "another route.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.2 Regulatory Signs, Speed Limit Signs (page 8)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=8",
  },
  {
    key: "no-passing-signs",
    quote:
      "The no passing zone sign is located at the beginning of " +
      "the no passing zone. Passing areas are based on how far " +
      "you can see ahead. Where passing is allowed, you may do so" +
      " only if it is safe.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.2 Regulatory Signs, No Passing Signs (page 8)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=8",
  },
  {
    key: "ens-sign",
    quote:
      "This blue sign is posted on both sides at each railroad " +
      "crossings and provides critical information for reporting " +
      "a problem or emergency on or near the tracks. It includes " +
      "a phone number to contact the railroad and a unique " +
      "crossing identification number.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.2 Regulatory Signs, Emergency Notification " +
      "System (ENS) Sign (page 8)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=8",
  },
  {
    key: "stop-sign-full-stop",
    quote:
      "A stop sign means you must come to a full stop and wait " +
      "until crossing vehicles and the cross-walk are clear " +
      "before proceeding. Stop at the stop line if one is " +
      "present.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.2 Regulatory Signs, Stop Sign (page 8)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=8",
  },
  {
    key: "stop-sign-pull-forward",
    quote:
      "If necessary, you may then pull forward to the stop sign " +
      "or the edge of the intersection and then proceed when it " +
      "is safe to do so.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.2 Regulatory Signs, Stop Sign (page 8)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=8",
  },
  {
    key: "yield-sign-meaning",
    quote:
      "A yield sign means you must slow down and yield the right " +
      "of way to traffic in the intersection you are crossing or " +
      "roadway you are entering.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.2 Regulatory Signs, Yield Sign (page 8)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=8",
  },
  {
    key: "do-not-enter",
    quote:
      "You will see this sign at roadway openings you are not to " +
      "enter. You will see them at exit ramps, in crossovers on " +
      "divided roadways, and at numerous locations on one-way " +
      "roads.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.2 Regulatory Signs, Do Not Enter Sign (page 8)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=8",
  },
  {
    key: "wrong-way",
    quote:
      "You made a wrong turn and have entered a lane of oncoming " +
      "traffic. Remove your vehicle from the traveled portion of " +
      "the road and get stopped and turned around as quickly and " +
      "safely as possible.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.2 Regulatory Signs, Wrong Way (page 8)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=8",
  },
  {
    key: "one-way-sign",
    quote:
      "ONE-WAY Traffic moves only in the direction of the arrow.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.2 Regulatory Signs, One-Way (page 8)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=8",
  },
  {
    key: "warning-signs-yellow",
    quote:
      "Warning signs are yellow with black lettering or symbols " +
      "and most are diamond-shaped. These signs warn you to slow " +
      "down and be prepared to stop if necessary; a special " +
      "situation or hazard is ahead.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "warning-merging",
    quote:
      "MERGING TRAFFIC If you are on the main road and see this " +
      "sign, be prepared for other vehicles blending into your " +
      "lane.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "warning-two-way",
    quote:
      "TWO-WAY TRAFFIC Keep to the right because you are leaving " +
      "a one-way road and entering a two-way road.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "warning-divided-ends",
    quote:
      "DIVIDED HIGHWAY ENDS Two-way traffic will no longer be " +
      "divided by a center strip. Watch out for oncoming " +
      "vehicles.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "warning-lane-ends",
    quote:
      "LANE ENDS Two lanes of traffic will soon become one lane " +
      "of traffic. Traffic must yield when merging.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "warning-hill",
    quote:
      "HILL This sign is a warning to all vehicles that the road " +
      "ahead goes down a hill. You should check your brakes " +
      "before going down the hill.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "warning-t-intersection",
    quote:
      "T-INTERSECTION AHEAD The road you are on does not go " +
      "straight ahead. Prepare to turn right or left.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "warning-bus-stop-ahead",
    quote:
      "SCHOOL BUS STOP AHEAD You are nearing an area where a " +
      "stopped school bus will pick up or drop off passengers. " +
      "Watch for children. Be prepared to stop.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "warning-ramp-speed",
    quote:
      "RAMP SPEED The recommended speed on an exit ramp.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "warning-chevron",
    quote:
      "CHEVRON SIGN Used in addition to the curve signs when " +
      "there is a need to draw added attention to a change in the" +
      " road's direction.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "warning-slippery",
    quote:
      "SLIPPERY WHEN WET Road ahead becomes slippery in wet " +
      "weather. Slow down under these conditions.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "warning-deer",
    quote:
      "DEER CROSSING There may be deer trying to cross the " +
      "roadway in the area. Slow down and watch carefully.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "warning-farm-machinery",
    quote:
      "FARM MACHINERY Be alert for slow-moving, farm equipment on" +
      " the roadways. Reduce your speed and pass slowly.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.3 Warning Signs (page 9)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=9",
  },
  {
    key: "ped-conveyance-law",
    quote:
      "The new law states that vehicles must yield the right of " +
      "way to pedestrians on foot and those using any human " +
      "powered device, also known as a pedestrian conveyance.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.4 Pedestrian Conveyance (page 10)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=10",
  },
  {
    key: "ped-conveyance-defined",
    quote:
      "Pedestrian conveyances are defined as any human-powered " +
      "device by which a pedestrian may move other than by " +
      "walking or by which a pedestrian may move another person. " +
      "Pedestrian conveyances include, but are not limited to: " +
      "Wheelchairs Strollers Skateboards Scooters Electric " +
      "personal assistive mobility devices",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.4 Pedestrian Conveyance (page 10)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=10",
  },
  {
    key: "ped-conveyance-note",
    quote:
      "NOTE: Any time we refer to \"pedestrian(s)\" in this manual," +
      " we are referring to pedestrians AND pedestrian " +
      "conveyances.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.4 Pedestrian Conveyance (page 10)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=10",
  },
  {
    key: "smv-sign-35",
    quote:
      "A reflective orange triangle on the rear of a vehicle " +
      "means it is traveling 35 mph or less. You may see this " +
      "sign on road maintenance equipment, farm vehicles, or " +
      "horsedrawn wagons.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.5 Slow-Moving Vehicle Sign (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "mile-markers",
    quote:
      "Mile markers show the number of miles from where the " +
      "Interstate route entered the state you are traveling in. " +
      "They can be used to calculate how far you are from your " +
      "exit or destination and give your exact location in an " +
      "emergency.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.6 Guide Signs (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "route-sign-shape",
    quote:
      "The shape of a route sign indicates the type of roadway it" +
      " is - interstate, U.S. highway, Iowa route, county road, " +
      "etc.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.8 Route Signs (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "signals-follow-persons",
    quote:
      "In addition to traffic signals, traffic control can be " +
      "provided by law enforcement, highway personnel, or school " +
      "crossing guards. You must follow directions from these " +
      "persons.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.9 Traffic Signals (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "signal-solid-red",
    quote:
      "Solid red Come to a complete stop.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.9 Traffic Signals (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "signal-flashing-red",
    quote:
      "Flashing red Treat it the same as a stop sign.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.9 Traffic Signals (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "signal-solid-yellow",
    quote:
      "Solid yellow Do not enter the intersection if you can stop" +
      " safely. If you cannot stop safely, proceed through the " +
      "intersection with caution.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.9 Traffic Signals (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "signal-flashing-yellow",
    quote:
      "Flashing yellow Proceed with caution. Yield to vehicles " +
      "and pedestrians and proceed when it is safe.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.9 Traffic Signals (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "signal-solid-green",
    quote:
      "Solid green Go, but only when the intersection is clear. " +
      "Yield to vehicles and pedestrians in the intersection. " +
      "When the light changes, traffic may be caught in the " +
      "intersection, and you must give them time to clear.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.9 Traffic Signals (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "signal-steady-red-arrow",
    quote:
      "Steady red arrow Drivers turning left or right must stop.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.9 Traffic Signals (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "signal-steady-yellow-arrow",
    quote:
      "Steady yellow arrow The left or right turn signal is about" +
      " to turn red. Do not enter the intersection if you can " +
      "stop safely. Complete your left or right turn if you are " +
      "already within the intersection.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.9 Traffic Signals (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "signal-flashing-yellow-arrow",
    quote:
      "Flashing yellow arrow Yield to oncoming traffic and " +
      "pedestrians; then turn left proceeding with caution. " +
      "Oncoming traffic has a green light.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.9 Traffic Signals (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "signal-steady-green-arrow",
    quote:
      "Steady green arrow Drivers can proceed with the left or " +
      "right turn. Oncoming traffic must stop. Do not go " +
      "straight. Drive only in the direction of the arrow.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.9 Traffic Signals (page 11)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=11",
  },
  {
    key: "rr-never-stop-on-tracks",
    quote:
      "Use extra caution at railroad crossings and never stop " +
      "your vehicle on the railroad tracks. Trains cannot stop " +
      "quickly.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.10 Railroad Crossings (page 12)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=12",
  },
  {
    key: "rr-approach-prepare",
    quote:
      "As you're approaching tracks, eliminate distractions, put " +
      "your windows down, and turn off your music.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.10 Railroad Crossings (page 12)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=12",
  },
  {
    key: "rr-active-crossings",
    quote:
      "Actively protected railroad crossings are equipped with " +
      "lights and/or gates. If the lights are flashing or gates " +
      "are down, it means a train is approaching. Always obey " +
      "these warning signals. Do not cross when lights are " +
      "flashing or try to go around the gate.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.10 Railroad Crossings (page 12)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=12",
  },
  {
    key: "rr-passive-crossings",
    quote:
      "Passively protected railroad crossings do not have lights " +
      "or gates. They will only be marked with a crossbuck and a " +
      "stop or yield sign. At this type of crossing, slow down " +
      "and look for an oncoming train. Do not rely on any lights " +
      "or gates, and always expect a train.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.10 Railroad Crossings (page 12)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=12",
  },
  {
    key: "rr-required-to-stop",
    quote:
      "All school buses, charter buses, drivers carrying " +
      "passengers for hire (such as Uber or Lyft), and all " +
      "vehicles required to be placarded for hazardous materials," +
      " must stop within 15 to 50 feet of railroad tracks before " +
      "crossing.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.10 Railroad Crossings, Required to Stop " +
      "(page 12)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=12",
  },
  {
    key: "rr-stop-exemptions",
    quote:
      "If a police officer or highway traffic signal directs " +
      "highway traffic to proceed, you do not have to stop. You " +
      "also do not have to stop if the crossing is marked with an" +
      " \"EXEMPT\" sign.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.10 Railroad Crossings, Required to Stop " +
      "(page 12)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=12",
  },
  {
    key: "rr-stalled-on-tracks",
    quote:
      "Get everyone out of the car IMMEDIATELY, move away from " +
      "the tracks at a 45-degree angle, in the direction of the " +
      "approaching train",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.10 Railroad Crossings, If Your Vehicle " +
      "Stalls (page 12)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=12",
  },
  {
    key: "rr-15-feet-clear",
    quote:
      "When stopped, leave at least 15 feet between the front and" +
      " rear of your vehicle and the nearest rail.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.10 Railroad Crossings, Avoid Getting Stuck " +
      "(page 12)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=12",
  },
  {
    key: "workzone-orange",
    quote:
      "Most signs in work areas are diamond-shaped, although a " +
      "few signs are rectangular. Orange is the basic color of " +
      "these signs and warning devices.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.11 Work Zones (page 14)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=14",
  },
  {
    key: "workzone-fines-double",
    quote:
      "Stay alert and drive cautiously as fines may double in " +
      "work area zones.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.11 Work Zones (page 14)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=14",
  },
  {
    key: "workzone-flaggers",
    quote:
      "FLAGGERS People with stop/slow paddles help control " +
      "traffic in work zones. Follow their instructions.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.11 Work Zones (page 14)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=14",
  },
  {
    key: "workzone-arrow-boards",
    quote:
      "ARROW BOARDS Large flashing arrow panels are typically " +
      "used when a lane or shoulder is closed.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.11 Work Zones (page 14)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=14",
  },
  {
    key: "markings-white-yellow",
    quote:
      "White lines separate traffic moving in the same direction." +
      " Yellow lines separate traffic moving in opposite " +
      "directions.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.12 Pavement Markings and Other Lane Controls" +
      " (page 15)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=15",
  },
  {
    key: "markings-solid-dashed",
    quote:
      "On two-way roads you will see a solid yellow line with a " +
      "dashed line beside it in some places. Passing is not " +
      "allowed on the side with the solid yellow line. Vehicles " +
      "on the side with the dashed line may pass when safe to do " +
      "so.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.12 Pavement Markings and Other Lane Controls" +
      " (page 15)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=15",
  },
  {
    key: "yield-lines",
    quote:
      "Yield lines consist of a row of solid white triangles " +
      "pointing toward approaching vehicles. These lines extend " +
      "across a travel lane to indicate the point where vehicles " +
      "should yield",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.13 Yield Lines (page 15)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=15",
  },
  {
    key: "stop-before-line",
    quote:
      "When required to stop because of a sign or signal, you " +
      "must stop before your vehicle reaches the stop line, or a " +
      "crosswalk if there is one.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.14 Crosswalks, Stop Lines, and Directional " +
      "Arrow Markings (page 15)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=15",
  },
  {
    key: "crosswalk-yield-unmarked",
    quote:
      "You must yield to anyone in or about to enter a crosswalk." +
      " Not all crosswalks are marked. Be alert for pedestrians " +
      "when crossing intersections that do not have defined " +
      "crosswalks.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.14 Crosswalks, Stop Lines, and Directional " +
      "Arrow Markings (page 15)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=15",
  },
  {
    key: "reversible-lanes",
    quote:
      "A green arrow means you can use the lane beneath it; a red" +
      " \"X\" means you may not. A flashing yellow \"X\" means the " +
      "lane is only for turning. A steady yellow \"X\" means that " +
      "the use of the lane is changing and you should move out of" +
      " it as soon as it is safe to do so.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.15 Reversible Lanes (page 15)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=15",
  },
  {
    key: "shared-left-turn",
    quote:
      "Shared left-turn lanes are reserved for vehicles making " +
      "left turns from either direction. On the pavement, left-" +
      "turn arrows for traffic in one direction alternate with " +
      "left-hand arrows for traffic coming from the other " +
      "direction.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.16 Shared Left-Turn Lane (page 16)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=16",
  },
  {
    key: "reserved-lanes",
    quote:
      "Reserved lanes are marked by signs stating that the lane " +
      "is reserved for special use, and often have a white " +
      "diamond posted at the side of the road and/or painted on " +
      "the road surface. Do not travel in one of these lanes " +
      "unless operating that type of vehicle.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.17 Reserved Lanes (page 16)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=16",
  },
  {
    key: "lane-use-left-passing",
    quote:
      "On a road with two or more lanes traveling in the same " +
      "direction, the left lane is generally used for passing. On" +
      " a road with three or more lanes stay in the right or " +
      "center lane except to pass.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.18 General Lane Use (page 16)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=16",
  },
  {
    key: "lane-use-shoulder",
    quote:
      "Unless instructed to do so by a traffic control device or " +
      "an official, never drive on the shoulder of the road. " +
      "Never pass on the shoulder, whether it is paved or not.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.18 General Lane Use (page 16)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=16",
  },
  {
    key: "turn-lane-closest",
    quote:
      "Where there are no signs or lane markings to control " +
      "turning, you should turn from the lane that is closest to " +
      "the direction you want to go, and turn into the lane " +
      "closest to the one you came from.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.18 General Lane Use (page 16)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=16",
  },
  {
    key: "bike-lane-driving",
    quote:
      "Motorists may only drive in bicycle lanes when making " +
      "turning movements and must look carefully beside and " +
      "behind their vehicle for bicyclists and cross with care.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.19 Bicycle Lanes and Pavement Markings (page 17)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=17",
  },
  {
    key: "bike-lane-green-paint",
    quote:
      "Bicycle lanes may be filled with green paint and motorists" +
      " should pay close attention and look for bicyclists before" +
      " crossing green pavement. Motorists should not stop on " +
      "green pavement.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.19 Bicycle Lanes and Pavement Markings (page 17)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=17",
  },
  {
    key: "sharrows",
    quote:
      "Shared lane pavement markings, also called \"sharrows\" " +
      "alert motorists of the presence of bicyclists, encourage " +
      "safe passing of bicyclists by motorists, and reduce " +
      "incidences of wrong-way bicycling and the potential for " +
      "door crashes.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.19 Bicycle Lanes and Pavement Markings (page 17)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=17",
  },
  {
    key: "rrfb",
    quote:
      "Motorists must stop for anyone within the crosswalk and be" +
      " alert for anyone about to enter the crosswalk when the " +
      "beacon is flashing.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.20 Bicycle and Pedestrian Signals (page 18)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=18",
  },
  {
    key: "phb-sequence",
    quote:
      "Once activated, the bottom yellow light flashes, and " +
      "motorists must slow down. Then the bottom yellow light " +
      "becomes solid, and motorists must prepare to stop. Then " +
      "the top two red lights become solid, and motorists must " +
      "stop for pedestrians.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.20 Bicycle and Pedestrian Signals (page 18)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=18",
  },
  {
    key: "phb-flashing-red",
    quote:
      "After a short time, the top two red lights will begin " +
      "flashing. Motorists must stop if they haven't already done" +
      " so, and may then proceed with caution if the crosswalk is" +
      " clear.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.20 Bicycle and Pedestrian Signals (page 18)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=18",
  },
  {
    key: "white-cane",
    quote:
      "If your vehicle is approaching a person being led by a " +
      "harnessed service animal, walking with a cane that is " +
      "white or white with a red tip, the person is likely " +
      "visually impaired. Use extra caution to prevent injury to " +
      "that person.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.21 Sight-Impaired Pedestrians (page 18)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=18",
  },
  {
    key: "row-law-says-who-yields",
    quote:
      "The law says who must yield the right-of-way; it does not " +
      "give anyone the right-ofway. Regardless of who has the " +
      "right-of-way, you should do everything you can to prevent " +
      "striking a pedestrian or another vehicle.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.22 Intersections, When to Yield the Right-" +
      "of-Way (page 18)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=18",
  },
  {
    key: "row-failure-number-one",
    quote:
      "FAILURE TO YIELD THE RIGHT-OF-WAY IS THE #1 CAUSE OF " +
      "TRAFFIC-RELATED FATALITIES IN IOWA.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.22 Intersections (page 18)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=18",
  },
  {
    key: "row-bicyclists-defensive",
    quote:
      "Be ready to yield the right-of-way, even at times the " +
      "bicyclists should yield to you. They have no defense " +
      "against a vehicle, so it is your responsibility as a " +
      "driver to watch out for them.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.22 Intersections (page 18)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=18",
  },
  {
    key: "right-on-red-yield",
    quote:
      "You must yield when you want to make a right turn after " +
      "stopping at a red light. Right turns on red are permitted " +
      "unless there is a sign prohibiting them.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.22 Intersections, Controlled Intersections " +
      "(page 19)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=19",
  },
  {
    key: "sidewalk-yield",
    quote:
      "Drivers crossing a sidewalk, entering or exiting a " +
      "driveway, alley, or parking lot must yield to pedestrians." +
      " It is illegal to drive on a sidewalk except to cross it.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.22 Intersections, Controlled Intersections " +
      "(page 19)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=19",
  },
  {
    key: "left-turn-yield",
    quote:
      "Drivers turning left must yield to oncoming cars that are " +
      "going straight ahead.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.22 Intersections, Controlled Intersections " +
      "(page 19)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=19",
  },
  {
    key: "all-way-stop-order",
    quote:
      "At an all-way stop, the driver reaching the intersection " +
      "first gets to go first (after coming to a complete stop). " +
      "For vehicles arriving at the same time, the vehicle to the" +
      " right gets to go first.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.22 Intersections, Controlled Intersections " +
      "(page 19)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=19",
  },
  {
    key: "driveway-yield",
    quote:
      "Drivers entering a road from a driveway, alley, or " +
      "roadside must yield to vehicles already on the main road.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.22 Intersections, Controlled Intersections " +
      "(page 19)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=19",
  },
  {
    key: "crosswalk-marked-unmarked",
    quote:
      "You must yield or stop for pedestrians in marked or " +
      "unmarked crosswalks.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.22 Intersections, Controlled Intersections " +
      "(page 19)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=19",
  },
  {
    key: "uncontrolled-intersection",
    quote:
      "At an intersection where there is no stop sign or traffic " +
      "signal, it's the responsibility of all drivers to slow " +
      "down and approach carefully. All of the rules listed above" +
      " that apply at a controlled intersection also apply at an " +
      "uncontrolled intersection. Extra caution should be used at" +
      " uncontrolled intersections.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.22 Intersections, Uncontrolled (Unmarked) " +
      "Intersections (page 19)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=19",
  },
  {
    key: "emergency-pull-right",
    quote:
      "Pull over to the right edge of the road, or as near to the" +
      " right as possible, when you see or hear an emergency " +
      "vehicle approaching from any direction.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.23 Emergency Vehicles (page 19)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=19",
  },
  {
    key: "emergency-in-intersection",
    quote:
      "If you are in an intersection (including roundabouts), " +
      "drive through the intersection before you pull over.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.23 Emergency Vehicles (page 19)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=19",
  },
  {
    key: "emergency-median",
    quote:
      "However, if you are on a street or highway separated by a " +
      "median, and the emergency vehicle is on the other side, " +
      "you do not have to stop.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.23 Emergency Vehicles (page 19)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=19",
  },
  {
    key: "emergency-500-feet",
    quote:
      "Stay at least 500 feet behind any emergency vehicle using " +
      "lights and sirens.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.23 Emergency Vehicles (page 19)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=19",
  },
  {
    key: "bus-rear-15-feet",
    quote:
      "Stop behind the school bus when the school bus stops and " +
      "the stop arm is extended. Stop no closer than 15 feet from" +
      " the rear of the bus, and remain stopped until the stop " +
      "arm is retracted and the school bus starts moving again.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.24 School Buses, Scenario 1 (page 20)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=20",
  },
  {
    key: "bus-no-passing-lights",
    quote:
      "When you see flashing red or amber warning lights, you are" +
      " not permitted to pass the school bus and should be " +
      "prepared to stop.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.24 School Buses, Scenario 1 (page 20)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=20",
  },
  {
    key: "bus-meeting-20-mph",
    quote:
      "When you see amber warning lights flashing, you must slow " +
      "your vehicle to no more than 20 mph and be prepared to " +
      "stop.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.24 School Buses, Scenario 1 (page 20)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=20",
  },
  {
    key: "bus-meeting-stop",
    quote:
      "Stop in front of the school bus when the school bus stops " +
      "and its stop arm is extended. Remain stopped until the " +
      "stop arm is retracted.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.24 School Buses, Scenario 1 (page 20)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=20",
  },
  {
    key: "bus-four-lane-exception",
    quote:
      "When meeting the bus in one of the opposite two lanes (or " +
      "more), you do not need to stop, even if the bus has " +
      "stopped with lights flashing and stop arm out. This is the" +
      " only time you may pass a school bus that is stopped and " +
      "has its stop arm extended.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.24 School Buses, Scenario 2 (page 20)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=20",
  },
  {
    key: "bus-suspension-180",
    quote:
      "Violating this law may result in your license being " +
      "suspended for up to 180 days.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.24 School Buses (page 20)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=20",
  },
  {
    key: "park-18-inches",
    quote:
      "If there is a curb, park within 18 inches of the curb or " +
      "closer.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.25 Parking (page 21)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=21",
  },
  {
    key: "park-responsibility",
    quote:
      "Drivers are responsible for making sure their vehicles do " +
      "not become a hazard after they have been parked.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.25 Parking (page 21)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=21",
  },
  {
    key: "park-check-door",
    quote:
      "Check traffic before you open the door. Get out of the " +
      "vehicle on the curb side if necessary.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.25 Parking (page 21)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=21",
  },
  {
    key: "no-park-list",
    quote:
      "Do not park: On a crosswalk. In front of a public or " +
      "private driveway. On any bridge outside city limits or in " +
      "highway tunnels. Alongside another stopped or parked car " +
      "(double parking).",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.26 Parking Not Allowed (page 21)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=21",
  },
  {
    key: "no-park-hydrant-5",
    quote:
      "Closer than five feet from a fire hydrant; or in a " +
      "designated hydrant red zone.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.26 Parking Not Allowed (page 21)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=21",
  },
  {
    key: "no-park-tail",
    quote:
      "In \"NO PARKING ZONES\" which are usually marked with signs," +
      " yellow painted curbs, or pavement markings/lines. In an " +
      "intersection. On a sidewalk. On interstates and highways",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.26 Parking Not Allowed (page 21)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=21",
  },
  {
    key: "disability-parking",
    quote:
      "Only park in a space reserved for persons with " +
      "disabilities if you have a Persons with Disabilities " +
      "Parking Permit.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.25 Parking, Parking for Persons with " +
      "Disabilities (page 21)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=21",
  },
  {
    key: "move-over-list",
    quote:
      "Iowa's Move Over or Slow Down Law requires motorists to " +
      "change lanes when approaching any of the following stopped" +
      " vehicles displaying flashing lights: Any stopped " +
      "emergency, tow, recovery, maintenance, construction, solid" +
      " waste, or recycling collection vehicle that has its " +
      "flashing lights activated.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.27 Approaching Stopped Vehicles (page 22)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=22",
  },
  {
    key: "move-over-slow-down",
    quote:
      "If a lane change is not possible, prohibited by law, or " +
      "unsafe, you must slow down and be prepared to stop. While " +
      "no speed is specified, it must be reasonable and proper " +
      "for the existing conditions.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.27 Approaching Stopped Vehicles (page 22)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=22",
  },
  {
    key: "move-over-suspension",
    quote:
      "Violating this law may result in your license being " +
      "suspended for up to one year.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.27 Approaching Stopped Vehicles (page 22)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=22",
  },
  {
    key: "steer-it-clear-it",
    quote:
      "If you are involved in a crash with no injuries, Iowa law " +
      "requires that you move your vehicle out of the driving " +
      "lanes of traffic if the vehicle is operable and can be " +
      "safely moved.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 2 - 2.28 Steer It-Clear It (page 22)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=22",
  },
  {
    key: "two-braking-systems",
    quote:
      "Cars, trucks, and ATVs/UTVs need two separate braking " +
      "systems, a foot brake and a parking brake. Motorcycles and" +
      " mopeds need at least one.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.1 Maintaining Your Vehicle, Braking System " +
      "(page 23)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=23",
  },
  {
    key: "lights-required",
    quote:
      "All cars, trucks, and ATVs/UTVs need two headlights on the" +
      " front of the vehicle: one on the right and one on the " +
      "left. You also need at least one red light on the back of " +
      "the vehicle, and it should be visible for at least 500 " +
      "feet.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.1 Maintaining Your Vehicle, Lights (page 24)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=24",
  },
  {
    key: "turn-signals-required",
    quote:
      "Turn signals are required for all cars, trucks, and " +
      "trailers wider than 40 inches.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.1 Maintaining Your Vehicle, Lights (page 24)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=24",
  },
  {
    key: "dirty-lenses",
    quote:
      "Keep the headlights, backup, brake, and taillights clean. " +
      "Dirt on the lenses can cut the light's effectiveness by 50" +
      " percent.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.1 Maintaining Your Vehicle, Lights (page 24)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=24",
  },
  {
    key: "window-tint-70",
    quote:
      "Iowa law requires tinted windshields and windows to the " +
      "immediate right or left of the driver to allow at least 70" +
      " percent of the light through. Iowa does not have a " +
      "medical exemption for tinted windows.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.1 Maintaining Your Vehicle, Windshield, " +
      "Windshield Wipers, and Glass Surfaces (page 24)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=24",
  },
  {
    key: "tire-penny-test",
    quote:
      "Check tire tread with a penny. Stick the penny into the " +
      "tread \"head\" first. If the tread does not come at least to" +
      " the top of Lincoln's head, the tire is unsafe and should " +
      "be replaced.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.1 Maintaining Your Vehicle, Tires (page 24)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=24",
  },
  {
    key: "mirror-200-feet",
    quote:
      "You must be able to see at least 200 feet behind you in " +
      "your rearview mirror. If your view is blocked by a load, " +
      "you must have an outside mirror.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.1 Maintaining Your Vehicle, Mirrors (page 25)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=25",
  },
  {
    key: "seat-10-inches",
    quote:
      "There should be at least 10 inches between the steering " +
      "wheel and your chest, with the air bag pointing at your " +
      "chest.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.2 Adjusting Seats and Mirrors, Seat Position" +
      " (page 25)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=25",
  },
  {
    key: "mirror-left-side",
    quote:
      "Left-side mirror: Lean your head toward the left-side " +
      "window, and set the left mirror so you can barely see the " +
      "side of the car. When sitting up straight, the car should " +
      "no longer be visible in the mirror.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.2 Adjusting Seats and Mirrors, Mirrors (page 25)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=25",
  },
  {
    key: "mirror-inside",
    quote:
      "Inside mirror: Sit up straight in the driver's seat and " +
      "adjust the inside mirror so that it frames the entire rear" +
      " window. This is the main mirror for viewing what is " +
      "behind the vehicle.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.2 Adjusting Seats and Mirrors, Mirrors (page 25)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=25",
  },
  {
    key: "adas-test-tech",
    quote:
      "During a driving test, you may be assisted by vehicle " +
      "safety technologies such as back-up cameras but should not" +
      " be assisted by vehicle convenience technologies like " +
      "adaptive cruise control.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.3 Advanced Driver-Assistance Systems (page 26)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=26",
  },
  {
    key: "adas-not-a-substitute",
    quote:
      "Even though a vehicle has technological features, you must" +
      " demonstrate the ability to operate the vehicle in case " +
      "the technologies require the driver to disengage them " +
      "manually, they become inoperable, or the driver operates " +
      "another vehicle without the technology.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.3 Advanced Driver-Assistance Systems (page 26)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=26",
  },
  {
    key: "acc-bad-weather",
    quote:
      "In bad weather and other unsafe driving conditions, it is " +
      "advised not to use any cruise control, including ACC.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.3 Advanced Driver-Assistance Systems, " +
      "Adaptive Cruise Control (page 33)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=33",
  },
  {
    key: "blind-spot-definition",
    quote:
      "Blind spots are areas outside your vehicle that cannot be " +
      "seen using mirrors.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.4 Being Aware of Blind Spots (page 34)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=34",
  },
  {
    key: "blind-spot-large-vehicle",
    quote:
      "Never stay alongside a large vehicle such as a truck or " +
      "bus. These vehicles have large blind spots and it is hard " +
      "for them to see you.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.4 Being Aware of Blind Spots (page 34)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=34",
  },
  {
    key: "seatbelt-primary-offense",
    quote:
      "Not wearing a seat belt is considered a primary offense, " +
      "meaning that you can be stopped for the sole purpose of " +
      "non-compliance with the seat belt law. The violation of " +
      "this law is punishable with up to a $50 fine per passenger" +
      " and $100 per passenger under 18.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.5 Seat Belts and Child Restraints, Seat " +
      "Belts (page 34)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=34",
  },
  {
    key: "seatbelt-back-under-18",
    quote:
      "IOWA REQUIRES ALL PASSENGERS IN THE FRONT SEATS OF A " +
      "VEHICLE TO WEAR SEAT BELTS. THE LAW ALSO APPLIES TO " +
      "PASSENGERS IN THE BACKSEATS WHO ARE UNDER AGE 18.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.5 Seat Belts and Child Restraints (page 34)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=34",
  },
  {
    key: "child-rear-facing",
    quote:
      "A child under one year old and weighing less than 20 " +
      "pounds must be secured in a rear-facing child restraint " +
      "system.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.5 Seat Belts and Iowa Law (page 35)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=35",
  },
  {
    key: "child-under-six",
    quote:
      "A child under six years old must be secured in a child " +
      "restraint system (a safety seat or booster seat, not a " +
      "seat belt).",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.5 Seat Belts and Iowa Law (page 35)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=35",
  },
  {
    key: "child-six-to-18",
    quote:
      "A child from the age of six up to the age of 18 must be " +
      "secured in a child restraint system or by a seat belt, in " +
      "all seating positions (front and back).",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.5 Seat Belts and Iowa Law (page 35)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=35",
  },
  {
    key: "pickup-bed-minors",
    quote:
      "A child under the age of 18 cannot ride in the rear of a " +
      "moving pickup truck.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.5 Seat Belts and Iowa Law (page 35)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=35",
  },
  {
    key: "loose-objects",
    quote:
      "At 60 miles per hour, a 20-pound object has the potential " +
      "to exert well over 1,000 pounds of force in a sudden stop.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.6 Securing Loose Objects (page 35)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=35",
  },
  {
    key: "distraction-three-kinds",
    quote:
      "There are three kinds of distractions: Visual - doing " +
      "something that requires the driver to look away from the " +
      "driving task. (E.g., looking at a GPS). Manual - doing " +
      "something that requires the driver to take one or both " +
      "hands off the wheel. (E.g., eating or putting on makeup).",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.7 Eliminating Distractions (page 36)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=36",
  },
  {
    key: "texting-law",
    quote:
      "Iowa's distracted driving law prohibits the use of mobile " +
      "phones and other hand-held electronic communication " +
      "devices to write, send, or view an electronic message " +
      "while driving.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.7 Eliminating Distractions, Mobile Devices " +
      "and Texting While Driving (page 36)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=36",
  },
  {
    key: "under-18-no-calls",
    quote:
      "Drivers under the age of 18 with an instruction permit, " +
      "intermediate license, or special minor restricted license " +
      "are prohibited from making and receiving calls and talking" +
      " on the phone while driving unless their vehicle is at a " +
      "complete stop off the traveled portion of the roadway.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.7 Eliminating Distractions, Talking on the " +
      "Phone (page 36)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=36",
  },
  {
    key: "distracted-primary",
    quote:
      "Distracted driving is considered a \"primary\" traffic " +
      "offense-meaning an officer can pull you over for a " +
      "violation.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.7 Eliminating Distractions, Enforcement and " +
      "Penalties (page 36)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=36",
  },
  {
    key: "hands-free-means",
    quote:
      "Hands Free Means: You can't hold your phone in any way. " +
      "You can't manually scroll, type, or interact with your " +
      "phone in any way. You can't enter in an address to GPS " +
      "while driving. You can't stream videos or make video " +
      "calls, even with voice commands. You can't view texts, " +
      "videos, or social media. You can't call, text, or dial " +
      "unless using hands-free or voice activation.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.7 Eliminating Distractions, Iowa's Hands-" +
      "Free Law (page 36)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=36",
  },
  {
    key: "owi-definition",
    quote:
      "The official name for the offense of drunk driving is " +
      "\"Operating While Intoxicated\" and is defined as having a " +
      "blood alcohol concentration (BAC) of .08 or higher or " +
      "operating with any amount of controlled substance in your " +
      "system.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.8 Alcohol and Drugs, Operating While " +
      "Intoxicated (page 37)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=37",
  },
  {
    key: "owi-revocation-180",
    quote:
      "Even if you are not convicted of an OWI offense in " +
      "criminal court, your driving privileges will still be " +
      "revoked for a minimum of 180 days if you operate while " +
      "intoxicated.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.8 Alcohol and Drugs, Operating While " +
      "Intoxicated (page 37)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=37",
  },
  {
    key: "implied-consent",
    quote:
      "As a holder of an Iowa driver's license, you are " +
      "contractually agreeing to consent to a field sobriety test" +
      " upon demand by law enforcement (Iowa Code Section321J.6)." +
      " This law also applies to any non-resident drivers " +
      "traveling in the state.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.8 Alcohol and Drugs, Implied Consent to " +
      "Testing (page 37)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=37",
  },
  {
    key: "test-refusal",
    quote:
      "The consequences for refusing a breathalyzer test are more" +
      " severe than failing a test, with an automatic one year " +
      "revocation of your license and a minimum $1,250 fine.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.8 Alcohol and Drugs, Test Refusal (page 37)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=37",
  },
  {
    key: "under-21-02",
    quote:
      "An underage driver is considered to be operating while " +
      "intoxicated with a BAC of .02 or more. An underage driver " +
      "will have their driving privileges revoked for a minimum " +
      "of 60 days and for a minimum of 180 days if the BAC is .08" +
      " or more.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.8 Alcohol and Drugs, Drivers Under 21 (page 37)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=37",
  },
  {
    key: "under-18-no-trl",
    quote:
      "Offenders under age 18 are not eligible for a temporary " +
      "restricted license while their license is revoked for OWI.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.8 Alcohol and Drugs, Drivers Under 21 (page 37)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=37",
  },
  {
    key: "open-container",
    quote:
      "It is illegal to transport any open, unsealed container of" +
      " alcohol by any person or passenger in a motor vehicle. " +
      "Open containers of alcoholic beverages may be transported " +
      "in the trunk of a vehicle.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.8 Alcohol and Drugs, Open Container Law " +
      "(page 37)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=37",
  },
  {
    key: "open-container-fine",
    quote:
      "The violation of this law is punishable as a simple " +
      "misdemeanor with up to a $200 fine for each driver and " +
      "passenger in the vehicle.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.8 Alcohol and Drugs, Open Container Law " +
      "(page 37)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=37",
  },
  {
    key: "drowsy-18-hours",
    quote:
      "Being awake for 18 hours straight is as impairing as a " +
      "blood alcohol concentration (BAC) of 0.08 percent, which " +
      "is legally drunk and leaves you at equal risk for a crash.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.9 Drowsy Driving (page 37)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=37",
  },
  {
    key: "drowsy-signs",
    quote:
      "You should take a break, pull over to a safe spot, or " +
      "switch drivers if you notice any of the following: " +
      "Daydreaming or wandering thoughts. Trouble remembering the" +
      " last few miles driven.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 3 - 3.9 Drowsy Driving (page 37)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=37",
  },
  {
    key: "stopping-distance-table",
    quote:
      "REACTION DISTANCE + BRAKING DISTANCE = STOPPING DISTANCE " +
      "STOPPING DISTANCE mph 20 44ft + 25ft = 69ft 30 66ft + 57ft" +
      " = 123ft 40 88ft + 101ft = 189ft 50 110ft + 158ft = 268ft " +
      "60 132ft + 227ft = 359ft 70 154ft + 310ft = 464ft",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.4 Braking and Stopping, Figure 4.1 (page 40)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=40",
  },
  {
    key: "braking-surfaces",
    quote:
      "Loose gravel roads, snow and ice, or even dry pavement may" +
      " cause your vehicle to skid if the brakes are applied too " +
      "hard.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.4 Braking and Stopping (page 40)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=40",
  },
  {
    key: "following-3-4-second",
    quote:
      "Since the greatest chance of a collision is in front of " +
      "you, using the 3- to 4-second rule will help you establish" +
      " and maintain a safe following distance and provide " +
      "adequate time for you to brake to a stop if necessary.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.4 Braking and Stopping, Safe Following " +
      "Distance (page 41)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=41",
  },
  {
    key: "following-beginner-three",
    quote:
      "An inexperienced or beginning driver should maintain at " +
      "least a three-second following distance under normal " +
      "driving conditions. A two-second following distance may be" +
      " sufficient in normal conditions for an experienced " +
      "driver.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.4 Braking and Stopping, Safe Following " +
      "Distance (page 41)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=41",
  },
  {
    key: "following-40mph",
    quote:
      "At speeds of 40 mph, a four- to five-second following " +
      "distance is recommended. When road conditions are slippery" +
      " or the vehicle in front of you blocks your view, a " +
      "following distance of six or more seconds is recommended.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.4 Braking and Stopping, Safe Following " +
      "Distance (page 41)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=41",
  },
  {
    key: "abs-press-hard",
    quote:
      "If your vehicle has ABS and you need to stop quickly: " +
      "Press on the brake pedal as hard as you can and keep " +
      "pressing. You might feel the brake pedal pushing back when" +
      " the ABS is working. Do not let up on the brake pedal. The" +
      " ABS will only work with the brake pedal pushed down.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.4 Braking and Stopping, ABS (page 41)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=41",
  },
  {
    key: "brake-lights-warn",
    quote:
      "If you are going to stop or slow down at a place where " +
      "another driver does not expect it, or if the vehicle " +
      "behind you is following too closely, tap your brake pedal " +
      "three or four times quickly.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.4 Braking and Stopping, Using Brake Lights " +
      "to Communicate (page 41)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=41",
  },
  {
    key: "required-stops",
    quote:
      "You must always stop: At all stop signs. Before crossing a" +
      " sidewalk when exiting a private roadway, driveway, " +
      "alleyway, etc. When entering a public road from a private " +
      "drive including, but not limited to, parking lots, " +
      "businesses, schools, gas stations.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.4 Braking and Stopping, Required Stops (page 41)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=41",
  },
  {
    key: "required-stop-blind",
    quote:
      "When a visually impaired person with a cane (often white " +
      "or red-tipped) or guide dog is walking in front of you or " +
      "close enough to you that the person could be in danger.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.4 Braking and Stopping, Required Stops (page 41)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=41",
  },
  {
    key: "counting-following",
    quote:
      "Watch the vehicle ahead of you pass a landmark, such as a " +
      "sign, and begin slowly counting. In order to achieve a " +
      "safe following distance, your front bumper should not pass" +
      " the landmark before you've counted to three.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - Figure 4.2: 3- to 4- second rule (page 41)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=41",
  },
  {
    key: "posted-is-maximum",
    quote:
      "The posted speed limit is the MAXIMUM speed you can " +
      "legally drive under ideal driving conditions. Your speed " +
      "should depend on the posted speed limit, road conditions, " +
      "and weather.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.5 Appropriate Speed (page 42)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=42",
  },
  {
    key: "speed-unposted-list",
    quote:
      "In the event the speed limit is not posted, the following " +
      "general limits have been set: 20 mph in any business " +
      "district 25 mph in a residential district or school " +
      "district 45 mph in any suburban district 45 mph for any " +
      "vehicle pulling another vehicle",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.5 Appropriate Speed (page 42)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=42",
  },
  {
    key: "speed-interstate-min-40",
    quote:
      "On the interstate system there is a minimum speed of 40 " +
      "mph. Vehicles that cannot go at least that fast under " +
      "normal conditions are not allowed on the interstate.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.5 Appropriate Speed (page 42)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=42",
  },
  {
    key: "speed-too-slow",
    quote:
      "While driving too fast is a major cause of crashes, " +
      "driving too slow may also cause a crash. Try to drive with" +
      " the general traffic flow on any road.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.5 Appropriate Speed (page 42)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=42",
  },
  {
    key: "speed-60-vs-30",
    quote:
      "For example, a vehicle traveling 60 mph will travel 3 " +
      "times further than a vehicle traveling 30 mph before " +
      "coming to a stop.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.5 Appropriate Speed (page 42)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=42",
  },
  {
    key: "hand-position",
    quote:
      "Your hands should be placed on opposite sides of the " +
      "steering wheel at 9 and 3 o'clock or slightly lower at 7 " +
      "and 5 o'clock.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.6 Steering, Gripping the Wheel (page 42)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=42",
  },
  {
    key: "turn-hand-over-hand",
    quote:
      "When turning corners, turn the steering wheel using the " +
      "\"hand-overhand\" or the \"push-pull\" technique. Do not turn " +
      "the wheel with just the palm of one hand; you could lose " +
      "control.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.6 Steering (page 42)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=42",
  },
  {
    key: "backing-turn-head",
    quote:
      "Backing up requires you to turn your head to see beyond " +
      "the head restraint. Do not depend on mirrors or backup " +
      "cameras alone as they don't provide a full view and can be" +
      " misleading in depth perception.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.7 Backing (page 43)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=43",
  },
  {
    key: "signal-100-300",
    quote:
      "Iowa law requires you to signal at least 100 feet before a" +
      " turn if the speed limit is 45 mph or less and if the " +
      "speed limit is faster than 45 mph, you must signal at " +
      "least 300 feet before you turn.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.8 Proper Turning Techniques, Turn Signals " +
      "(page 43)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=43",
  },
  {
    key: "signal-not-too-early",
    quote:
      "Be careful that you do not signal too early. If there are " +
      "streets, driveways, or entrances between you and where you" +
      " want to turn, wait until you have passed them to signal.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.8 Proper Turning Techniques, Turn Signals " +
      "(page 43)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=43",
  },
  {
    key: "signal-every-time",
    quote:
      "Signal every time you change direction. Signal even when " +
      "you do not see anyone else around. There may be vehicles, " +
      "pedestrians, or cyclists in your blind spot.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.8 Proper Turning Techniques, Turn Signals " +
      "(page 43)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=43",
  },
  {
    key: "turn-on-red",
    quote:
      "At a traffic signal, you may make a right turn at a red " +
      "light unless there is a \"NO TURN ON RED\" sign. Prior to " +
      "safely turning, you must come to a complete stop and yield" +
      " to all other traffic.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.8 Proper Turning Techniques, Turns on Red, " +
      "After a Stop (page 43)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=43",
  },
  {
    key: "left-on-red-one-way",
    quote:
      "You may also make a left turn at a red light if you are " +
      "turning from the left lane of a one-way street onto " +
      "another one-way street.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.8 Proper Turning Techniques, Turns on Red, " +
      "After a Stop (page 43)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=43",
  },
  {
    key: "three-point-turn",
    quote:
      "Three-point turns are generally not a safe maneuver and " +
      "can increase your risk and exposure to collisions. It is " +
      "better to proceed to the nearest intersection.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.8 Proper Turning Techniques, Turning " +
      "Maneuvers (page 43)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=43",
  },
  {
    key: "lane-change-one-at-a-time",
    quote:
      "Only change lanes one lane at a time. Before changing " +
      "lanes, check traffic around you and confirm there is space" +
      " to safely enter the lane and yield to any vehicles " +
      "already in that lane",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.9 Changing Lanes (page 44)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=44",
  },
  {
    key: "lane-change-blind-spot",
    quote:
      "Check your blind spots: Look over your shoulder in the " +
      "direction you plan to move. Be sure no one is near the " +
      "rear corners of your vehicle.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.9 Changing Lanes (page 44)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=44",
  },
  {
    key: "passing-one-at-a-time",
    quote:
      "Only pass when it is necessary. As a rule, only pass one " +
      "vehicle at a time. Avoid passing in places where a vehicle" +
      " may enter the roadway ahead of you such as intersections " +
      "and driveways.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.10 Passing (page 45)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=45",
  },
  {
    key: "passing-return",
    quote:
      "When you see the front of the passed car in the rearview " +
      "mirror and your vehicle is well clear, signal intent, " +
      "gently and slowly move back to the original lane, cancel " +
      "the signal, and return to a safe speed.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.10 Passing (page 45)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=45",
  },
  {
    key: "passing-illegal-list",
    quote:
      "Do not pass within 100 feet of a narrow bridge, viaduct, " +
      "or tunnel that has a sign posted to let you know it is " +
      "there. Do not pass within 100 feet of a railroad crossing." +
      " Do not pass within 100 feet of an intersection.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.10 Passing, Passing Is Illegal in the " +
      "Following Situations (page 46)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=46",
  },
  {
    key: "passing-no-right",
    quote:
      "Do not pass on the right. Do not pass when oncoming " +
      "traffic is so close it would be dangerous to try to make " +
      "it around the vehicle you are passing.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.10 Passing, Passing Is Illegal in the " +
      "Following Situations (page 46)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=46",
  },
  {
    key: "defensive-scan-20-30",
    quote:
      "Be aware of your surroundings - pay attention. Check your " +
      "mirrors frequently and scan conditions 20 to 30 seconds " +
      "ahead of you. Keep your eyes moving.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.11 Defensive Driving (page 47)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=47",
  },
  {
    key: "defensive-94-percent",
    quote:
      "94 percent of serious crashes are due to dangerous choices" +
      " or errors people make behind the wheel.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.11 Defensive Driving (page 47)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=47",
  },
  {
    key: "defensive-assume-worst",
    quote:
      "Assume that drivers will run through red lights or stop " +
      "signs and be prepared to react. Plan your movements " +
      "anticipating the worst-case scenario.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.11 Defensive Driving (page 47)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=47",
  },
  {
    key: "defensive-escape-route",
    quote:
      "Having an alternate path of travel also is essential, so " +
      "always leave yourself an out - a place to move your " +
      "vehicle if your immediate path of travel is suddenly " +
      "blocked.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.11 Defensive Driving (page 47)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=47",
  },
  {
    key: "tailgated-response",
    quote:
      "If you are being tailgated, move slightly to the right and" +
      " give the tailgater a better view of what is ahead and " +
      "signal early for turns, stops, or lane changes.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.12 Driving Safely in Traffic, Tailgating " +
      "(page 48)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=48",
  },
  {
    key: "keep-pace",
    quote:
      "The safest roadways are when all vehicles travel the same " +
      "speed but do not exceed the speed limit.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.12 Driving Safely in Traffic, Keep Pace with" +
      " Traffic (page 48)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=48",
  },
  {
    key: "headlight-law-500",
    quote:
      "Iowa law requires the use of both headlights from sunset " +
      "to sunrise or whenever visibility is 500 feet or less, " +
      "(fog, heavy rain, snow, etc.).",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.13 Communicating, Headlights (page 49)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=49",
  },
  {
    key: "headlight-wipers-rule",
    quote:
      "A good rule of thumb is to turn your headlights on " +
      "whenever you turn your windshield wipers on.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.13 Communicating, Headlights (page 49)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=49",
  },
  {
    key: "headlights-automatic",
    quote:
      "Many vehicles are equipped with headlights that turn on " +
      "automatically, but in some conditions, such as daytime " +
      "snowstorms, the ambient light is bright enough your " +
      "automatic headlights must be turned on manually.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.13 Communicating, Headlights (page 49)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=49",
  },
  {
    key: "horn-use",
    quote:
      "Use your horn when: A pedestrian or bicyclists appears to " +
      "be moving into your lane of travel. You are passing a " +
      "driver who starts to turn into your lane.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.13 Communicating, Horn (page 49)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=49",
  },
  {
    key: "breakdown-hazard",
    quote:
      "If possible, safely move your vehicle off the road and " +
      "away from traffic. Turn on your emergency hazard lights to" +
      " show you are having trouble.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.13 Communicating, Hazard Lights (page 49)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=49",
  },
  {
    key: "breakdown-exit-vehicle",
    quote:
      "If you are stalled in a traveled lane, you and your " +
      "passengers should exit the vehicle quickly and stand in a " +
      "safe area; when possible, away from the shoulder of the " +
      "road and far from moving vehicles.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.13 Communicating, Hazard Lights (page 49)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=49",
  },
  {
    key: "breakdown-not-over-hill",
    quote:
      "If you cannot get your vehicle off the roadway, try to " +
      "stop where other drivers have a clear view of your " +
      "vehicle. Do not stop just over a hill or just around a " +
      "curve.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 4 - 4.13 Communicating, Hazard Lights (page 49)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=49",
  },
  {
    key: "intersection-look-left-right",
    quote:
      "Step 3: Look left, right, and left again for approaching " +
      "vehicles and pedestrians. Never assume another driver will" +
      " share space with you or give you space.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.1 Intersections (page 50)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=50",
  },
  {
    key: "false-turn-signal",
    quote:
      "Beware of the \"false\" turn signal. Do not turn just " +
      "because an approaching vehicle has a turn signal on. The " +
      "driver may plan to turn beyond you or has forgotten to " +
      "turn the signal off from a prior turn.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.1 Intersections (page 50)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=50",
  },
  {
    key: "rural-four-lane-median",
    quote:
      "Do not try to cross both directions of traffic at one time" +
      " to avoid stopping in the median. Safely cross this " +
      "intersection by taking the following steps: 1. Stop at the" +
      " stop sign, look left and proceed into the median when " +
      "safe to do so.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.2 Crossing or Turning Left onto a Rural " +
      "Four-Lane Road (page 51)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=51",
  },
  {
    key: "on-ramp-segments",
    quote:
      "Acceleration and merge area: Use this area to bring your " +
      "vehicle up to the speed of traffic and merge when safe to " +
      "do so. Do not completely stop on the ramp unless " +
      "absolutely necessary.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.2 Interstate and Highway Driving, On-Ramps " +
      "(page 51)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=51",
  },
  {
    key: "on-ramp-main-road",
    quote:
      "Travel portion of interstate: Traffic already on an " +
      "interstate or highway should move over, slow down, or " +
      "speed up to allow ramp traffic to enter.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.2 Interstate and Highway Driving, On-Ramps " +
      "(page 51)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=51",
  },
  {
    key: "reduced-conflict",
    quote:
      "Drivers on the side road wanting to turn left or cross the" +
      " four-lane highway will turn right onto the highway, merge" +
      " into the left lane and then make a U-turn at a designated" +
      " median opening.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.3 Reduced-Conflict Intersection (page 52)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=52",
  },
  {
    key: "ddi",
    quote:
      "The unique design is unusual because it directs drivers on" +
      " the opposite side of the road briefly before diverging " +
      "back into the correct direction.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.4 Diverging Diamond Interchange (page 53)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=53",
  },
  {
    key: "roundabout-counterclockwise",
    quote:
      "Roundabouts are intersections that direct traffic in a " +
      "counterclockwise direction around a center island. They " +
      "have no stop signs or traffic signals.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.5 Roundabouts (page 54)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=54",
  },
  {
    key: "roundabout-enter",
    quote:
      "Enter: As you approach the yield line markings, yield to " +
      "vehicles in the roundabout. Wait for a gap in traffic, " +
      "then merge into traffic in the roundabout in a " +
      "counterclockwise direction.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.5 Roundabouts, Single-Lane Roundabout (page 54)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=54",
  },
  {
    key: "roundabout-exit",
    quote:
      "Exit: Signal, then exit the roundabout to your right. " +
      "Yield to anyone in the crosswalk.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.5 Roundabouts, Single-Lane Roundabout (page 54)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=54",
  },
  {
    key: "roundabout-multilane-dont",
    quote:
      "Do not change lanes in the roundabout. Do not pass or " +
      "drive beside trucks or buses.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.5 Roundabouts, Multi-Lane Roundabout (page 54)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=54",
  },
  {
    key: "roundabout-lane-choice",
    quote:
      "As you approach the roundabout, and in advance of the " +
      "yield line, select the appropriate lane according to the " +
      "lane control signs and pavement markings.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.5 Roundabouts, Multi-Lane Roundabout (page 54)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=54",
  },
  {
    key: "roundabout-cyclists",
    quote:
      "Generally, cyclists should walk their bicycles across the " +
      "crosswalk using the same rules as pedestrians. Experienced" +
      " cyclists may navigate roundabouts like motorists.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.5 Roundabouts, Cyclists (page 54)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=54",
  },
  {
    key: "gravel-traction",
    quote:
      "Driving on loose gravel is harder than driving on pavement" +
      " because your tires don't have the traction needed to give" +
      " you stable control. Slow down, avoid sudden turning, " +
      "accelerate and brake slowly, and increase your following " +
      "distance.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.6 Rural/Gravel Road Driving, Reduced " +
      "Traction (page 55)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=55",
  },
  {
    key: "gravel-left-yields",
    quote:
      "AT AN UNCONTROLLED INTERSECTION, THE VEHICLE ON THE LEFT " +
      "SHOULD YIELD. NEVER ASSUME THE INTERSECTION IS CLEAR, OR " +
      "THAT THE OTHER VEHICLE WILL STOP.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.6 Rural/Gravel Road Driving, Uncontrolled " +
      "Intersections (page 55)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=55",
  },
  {
    key: "gravel-shoulders",
    quote:
      "Shoulders with loose gravel/debris make vehicles more " +
      "difficult to control and will pull your vehicle toward the" +
      " ditch.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.6 Rural/Gravel Road Driving, Soft Shoulders " +
      "(page 55)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=55",
  },
  {
    key: "gravel-dust-lowbeam",
    quote:
      "DUST Use low beam headlights to make your vehicle more " +
      "visible to others during extremely dusty conditions",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.6 Rural/Gravel Road Driving, Dust (page 55)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=55",
  },
  {
    key: "gravel-rr-crossings",
    quote:
      "Unlike most railroad crossings on major roads, there are " +
      "typically no red flashing lights, warning bells, crossing " +
      "gates or pavement markings at rural road railroad " +
      "crossings.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.6 Rural/Gravel Road Driving, Railroad " +
      "Crossings (page 56)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=56",
  },
  {
    key: "gravel-hills-curves",
    quote:
      "Before reaching the crest of a hill or before entering a " +
      "curve, slow down, move to the right side of the road and " +
      "watch for oncoming vehicles.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.6 Rural/Gravel Road Driving, Steep Hills and" +
      " Curves (page 56)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=56",
  },
  {
    key: "night-high-beams",
    quote:
      "High beams should only be used when other drivers won't " +
      "see them, such as isolated roadways with little traffic.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.7 Night Driving (page 56)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=56",
  },
  {
    key: "night-glare",
    quote:
      "If you are blinded by another vehicle's headlights, slow " +
      "down and watch the white stripe at the right edge of the " +
      "pavement.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.7 Night Driving (page 56)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=56",
  },
  {
    key: "night-lower-speed",
    quote:
      "To compensate for reduced visibility, lower your speed and" +
      " increase your following distance.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.7 Night Driving (page 56)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=56",
  },
  {
    key: "deer-do-not-swerve",
    quote:
      "If an animal is encountered, and there isn't time to stop," +
      " don't swerve or veer as this will likely result in a more" +
      " severe crash.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.8 Deer and Other Animals (page 57)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=57",
  },
  {
    key: "deer-peak-months",
    quote:
      "October, November and May are the peak months for deer " +
      "collisions; however, they can occur at any time of the " +
      "year. Deer travel in groups, so always look for more " +
      "animals if one is seen.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.8 Deer and Other Animals (page 57)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=57",
  },
  {
    key: "truck-no-zones",
    quote:
      "If you can't see the truck driver in the truck's mirror, " +
      "the truck driver can't see you.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.9 Sharing the Road with Large Trucks (page 57)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=57",
  },
  {
    key: "truck-wide-right",
    quote:
      "Truck drivers sometimes need to swing widely to the left " +
      "in order to safely negotiate a right turn. They can't see " +
      "cars directly behind or beside them. Cutting in between " +
      "the truck and the curb increase the possibility of a " +
      "crash.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.9 Sharing the Road with Large Trucks (page 57)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=57",
  },
  {
    key: "truck-fatalities-78",
    quote:
      "In crashes involving large trucks, the occupants of a car " +
      "- usually the driver - sustain 78 percent of fatalities.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.9 Sharing the Road with Large Trucks (page 57)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=57",
  },
  {
    key: "motorcycle-following",
    quote:
      "When driving behind a motorcycle, allow at least a 3-4 " +
      "second following distance. This provides the cyclist " +
      "enough room to maneuver or stop in an emergency.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.10 Sharing the Road with Motorcycles (page 58)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=58",
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "When passing a motorcycle, allow a full lane for the " +
      "motorcycle; never crowd into the same lane as the cycle.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.10 Sharing the Road with Motorcycles (page 58)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=58",
  },
  {
    key: "motorcycle-signals",
    quote:
      "Turn signals do not automatically shut off on a motorcycle" +
      " and riders occasionally forget to cancel them after a " +
      "turn is completed.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.10 Sharing the Road with Motorcycles (page 58)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=58",
  },
  {
    key: "bicycle-change-lanes",
    quote:
      "When passing bicyclists, you must completely change lanes," +
      " giving the bicyclist the entire lane like you would with " +
      "any other vehicle.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.11 Sharing the Road with Bicyclists and " +
      "Pedestrians, Passing Safely (page 58)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=58",
  },
  {
    key: "bicycle-return",
    quote:
      "Do not return to the right until you can see the " +
      "bicyclist(s) in your rearview mirror.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.11 Sharing the Road with Bicyclists and " +
      "Pedestrians, Passing Safely (page 58)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=58",
  },
  {
    key: "never-pass-stopped-for-ped",
    quote:
      "Never pass another vehicle that has stopped or is slowing " +
      "down for a pedestrian. Remember, you might not be able to " +
      "see the pedestrian when you approach a stopped vehicle, so" +
      " be aware.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.11 Sharing the Road with Bicyclists and " +
      "Pedestrians, Use Caution When Passing Stopped Vehicles " +
      "(page 58)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=58",
  },
  {
    key: "bicyclists-sidewalks",
    quote:
      "People riding bicycles have the right to be on the road " +
      "and are often prohibited from riding on sidewalks, so " +
      "respect their right to be there.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.11 Sharing the Road with Bicyclists and " +
      "Pedestrians, Watch for Bikes (page 58)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=58",
  },
  {
    key: "hot-car",
    quote:
      "Depending on the temperature and humidity, the inside of a" +
      " vehicle can soar above 160 degrees in less than 10 " +
      "minutes. Even on a mild, 78 degree day, the inside of a " +
      "parked vehicle can reach 100 degrees in minutes.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.12 Closed Vehicles on a Hot Day (page 59)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=59",
  },
  {
    key: "hot-car-break-window",
    quote:
      "In Iowa it is legal for you to break a vehicle's window in" +
      " order to provide medical attention to a person or animal " +
      "trapped inside.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.12 Closed Vehicles on a Hot Day (page 59)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=59",
  },
  {
    key: "inclement-no-cruise",
    quote:
      "IF YOU MUST DRIVE IN INCLEMENT WEATHER, SLOW DOWN AND " +
      "INCREASE YOUR FOLLOWING DISTANCE, GIVING YOU MORE TIME TO " +
      "STOP. DO NOT USE CRUISE CONTROL DURING INCLEMENT WEATHER.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Inclement Weather Driving (page 59)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=59",
  },
  {
    key: "wet-road-steps",
    quote:
      "Turn on the wipers as soon as the windshield becomes wet. " +
      "Turn on the low-beam headlights; this helps others see " +
      "you. Drive slower than normal and increase your following " +
      "distance to five or six seconds.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Inclement Weather Driving, Wet/Slippery " +
      "Roads (page 60)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=60",
  },
  {
    key: "hydroplaning",
    quote:
      "Hydroplaning occurs as a result of water on the road that " +
      "is deeper than the tire tread. This layer of water reduces" +
      " friction with the tires and can result in the loss of " +
      "control.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Inclement Weather Driving, Hydroplaning " +
      "(page 60)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=60",
  },
  {
    key: "hydroplane-signs",
    quote:
      "If you can see deep water on the road, reflections on the " +
      "pavement, or if the car ahead leaves no tracks on the " +
      "water, your car could hydroplane. Slow down.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Inclement Weather Driving, Hydroplaning " +
      "(page 60)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=60",
  },
  {
    key: "flood-six-inches",
    quote:
      "As little as 6 inches of water may sweep away a vehicle, " +
      "including SUVs and pickups. Never drive through a flooded " +
      "road or bridge. The road surface beneath the water could " +
      "be entirely washed out. Turn around and find a different " +
      "route.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Inclement Weather Driving, Flooded " +
      "Roadways (page 60)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=60",
  },
  {
    key: "flood-submerged",
    quote:
      "If your car is swept into the water and submerged, remain " +
      "calm. Wait for the vehicle to fill with water. Once the " +
      "vehicle is full, the doors are easier to open. Hold your " +
      "breath and swim to the surface.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Inclement Weather Driving, Flooded " +
      "Roadways (page 60)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=60",
  },
  {
    key: "fog-low-beam",
    quote:
      "Use low-beam lights or fog lights if your vehicle has " +
      "them. Don't use high beams - they reflect off the fog, " +
      "causing glare and reduced visibility.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Inclement Weather Driving, Fog (page 60)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=60",
  },
  {
    key: "tornado-driving",
    quote:
      "If you are unable to make it to a shelter, pull over, duck" +
      " down below the windows in the vehicle, keep your seat " +
      "belt fastened, and cover your head with your hands or an " +
      "object such as a blanket or cushion.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Inclement Weather Driving, Tornadoes " +
      "(page 60)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=60",
  },
  {
    key: "black-ice-bridges",
    quote:
      "Black ice can occur anywhere, but is common on bridges and" +
      " overpasses, where moisture freezes quickly due to " +
      "circulating air both above and below the road surface. " +
      "Because of this, bridges and overpasses may be slippery " +
      "even when other road surfaces are not.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Inclement Weather Driving, Ice and Snow " +
      "(page 61)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=61",
  },
  {
    key: "ice-stopping-10x",
    quote:
      "Stopping distances can be 10 times greater in ice and " +
      "snow. Stay far behind the vehicle ahead so you will not " +
      "need to come to a sudden stop, which can cause skidding.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Inclement Weather Driving, Ice and Snow " +
      "(page 61)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=61",
  },
  {
    key: "clear-entire-vehicle",
    quote:
      "Make sure your ENTIRE vehicle is clear of snow and ice " +
      "before driving, this includes windows, headlights, turn " +
      "signals, and taillights.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Inclement Weather Driving, Ice and Snow " +
      "(page 61)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=61",
  },
  {
    key: "snowplow-speed",
    quote:
      "Snowplows typically operate at 25-35 mph. Many drivers " +
      "fail to realize this and hit them from behind.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Sharing the road with snowplows (page 61)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=61",
  },
  {
    key: "snowplow-shoulder",
    quote:
      "Never pass on the shoulder side of a plow. Plows will move" +
      " snow to the shoulders. Give them room to work.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Sharing the road with snowplows (page 61)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=61",
  },
  {
    key: "stranded-stay-inside",
    quote:
      "The safest location is to remain inside your vehicle with " +
      "your seat belt on. Your vehicle is the shelter you may " +
      "need to survive and allows you to be found by rescue " +
      "personnel.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.13 Stranded in the snow (page 61)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=61",
  },
  {
    key: "flat-tire",
    quote:
      "If your tire suddenly goes flat: Hold the steering wheel " +
      "tightly and keep the vehicle going straight. Slow down " +
      "gradually. Take your foot off the gas pedal and use the " +
      "brakes lightly. Do not stop on the road if at all " +
      "possible.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.14 Equipment Failure Emergencies, Flat Tire " +
      "(page 62)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=62",
  },
  {
    key: "front-blowout",
    quote:
      "A front tire blowout will jerk the car violently towards " +
      "the side of the car with the flat. Be careful not to " +
      "overcorrect when steering after a front tire blowout.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.14 Equipment Failure Emergencies, Flat Tire " +
      "(page 62)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=62",
  },
  {
    key: "stuck-gas-pedal",
    quote:
      "If the motor does not slow down, or speeds up when you " +
      "take your foot off the accelerator: Keep your eyes on the " +
      "road. Quickly shift to neutral. Pull off the road when " +
      "safe to do so. Turn off the engine after stopping.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.14 Equipment Failure Emergencies, Stuck Gas " +
      "Pedal (page 62)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=62",
  },
  {
    key: "brake-failure",
    quote:
      "If your brakes stop working: Pump the brake pedal several " +
      "times. This will often build up enough brake pressure to " +
      "allow you to stop. If that does not work, use the parking " +
      "brake.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.14 Equipment Failure Emergencies, Brake " +
      "Failure (page 62)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=62",
  },
  {
    key: "steering-lock-key",
    quote:
      "Never remove the key or allow passengers to touch the key " +
      "while driving. If the key is removed, the steering wheel " +
      "will lock.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.14 Equipment Failure Emergencies, Steering " +
      "Lock Systems (page 62)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=62",
  },
  {
    key: "engine-stalls",
    quote:
      "If the engine stalls while driving: Keep a strong grip on " +
      "the steering wheel. The steering wheel will be difficult " +
      "to turn, but you can turn it. Pull off the roadway. The " +
      "brakes will still work, but you will have to push very " +
      "hard on the brake pedal.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.14 Equipment Failure Emergencies, Engine " +
      "Stalls (page 62)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=62",
  },
  {
    key: "headlights-fail",
    quote:
      "If your headlights suddenly go out: Try the headlight " +
      "switch a few times. Try turning on your high beams. Turn " +
      "on the emergency flashers, turn signals, or fog lights if " +
      "the headlights do not come back on when you try the " +
      "headlight switch. Pull off the road as soon as possible.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.14 Equipment Failure Emergencies, Lights " +
      "(page 62)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=62",
  },
  {
    key: "crash-report-1500",
    quote:
      "It is state law to report a crash to the police involving " +
      "injury or death to another person, or property damage of " +
      "more than $1,500. Failure to do so within 72 hours of the " +
      "incident will result in the loss of your driving " +
      "privileges and further penalties.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.15 Involvement in a Crash (page 63)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=63",
  },
  {
    key: "crash-step-one",
    quote:
      "Step 1: Steer It-Clear It If possible, ensure your vehicle" +
      " is out of the path of traffic, is turned off, and no " +
      "longer moving.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.15 Involvement in a Crash (page 63)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=63",
  },
  {
    key: "crash-provide",
    quote:
      "Be ready to provide a law enforcement officer with: " +
      "Vehicle insurance information Vehicle registration " +
      "Driver's license",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.15 Involvement in a Crash (page 63)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=63",
  },
  {
    key: "traffic-stop",
    quote:
      "If you see an official law enforcement vehicle signaling " +
      "you to stop, carefully pull over to a clear area when it " +
      "is safe. Do not stop in the travel lane.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.16 Law Enforcement Interactions, Traffic " +
      "Stop (page 64)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=64",
  },
  {
    key: "traffic-stop-hands",
    quote:
      "Turn off your vehicle, keep your hands visible " +
      "(recommended on the steering wheel), remain calm, and " +
      "follow the officer's instructions.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.16 Law Enforcement Interactions, Traffic " +
      "Stop (page 64)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=64",
  },
  {
    key: "autism-deaf-indicator",
    quote:
      "If you have autism and/or are deaf or hard of hearing, you" +
      " may choose to have an indicator added to your license or " +
      "ID.",
    source:
      "Iowa Driver's License Manual (Iowa DOT, form MM1170, " +
      "07/23/2026)",
    section:
      "Chapter 5 - 5.16 Law Enforcement Interactions (page 64)",
    url:
      "https://iowadot.gov/media/7308/download?inline=#page=64",
  },
  {
    key: "code-speed-unposted",
    quote:
      "Twenty miles per hour in any business district. (2) " +
      "Twenty-five miles per hour in any residence or school " +
      "district. (3) Forty-five miles per hour in any suburban " +
      "district.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.285(2)(a) - Speed restrictions",
    url:
      "https://www.legis.iowa.gov/docs/code/321.285.pdf",
  },
  {
    key: "code-speed-default-55",
    quote:
      "Unless otherwise provided in this section or by other " +
      "speed restrictions, the speed limit for all vehicular " +
      "traffic shall be fifty-five miles per hour.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.285(3) - Speed restrictions",
    url:
      "https://www.legis.iowa.gov/docs/code/321.285.pdf",
  },
  {
    key: "code-speed-secondary",
    quote:
      "A reasonable and proper speed is required, but not greater" +
      " than fifty-five miles per hour at any time between " +
      "sunrise and sunset, and not greater than fifty miles per " +
      "hour at any time between sunset and sunrise, on secondary " +
      "roads",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.285(4) - Speed restrictions",
    url:
      "https://www.legis.iowa.gov/docs/code/321.285.pdf",
  },
  {
    key: "code-speed-interstate-70",
    quote:
      "However, the speed limit for all vehicular traffic on " +
      "highways that are part of the interstate road system, as " +
      "defined in section 306.3, is seventy miles per hour.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.285(5)(a) - Speed restrictions",
    url:
      "https://www.legis.iowa.gov/docs/code/321.285.pdf",
  },
  {
    key: "code-interstate-40-min",
    quote:
      "A vehicle, device, implement, or conveyance incapable of " +
      "attaining and maintaining a speed of forty miles per hour " +
      "shall be prohibited from using the interstate road system.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.285(5)(e)(1) - Speed restrictions",
    url:
      "https://www.legis.iowa.gov/docs/code/321.285.pdf",
  },
  {
    key: "code-assured-clear-distance",
    quote:
      "no person shall drive any vehicle upon a highway at a " +
      "speed greater than will permit the person to bring it to a" +
      " stop within the assured clear distance ahead,",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.285(1) - Speed restrictions",
    url:
      "https://www.legis.iowa.gov/docs/code/321.285.pdf",
  },
  {
    key: "code-parking-list",
    quote:
      "No person shall stop, stand, or park a vehicle, except " +
      "when necessary to avoid conflict with other traffic or in " +
      "compliance with the directions of a police officer or " +
      "traffic-control device, in any of the following places: 1." +
      " On a sidewalk, except a bicycle may stop, stand, or park " +
      "on a sidewalk if not prohibited by a local jurisdiction. " +
      "2. In front of a public or private driveway. 3. Within an " +
      "intersection. 4. Within five feet of a fire hydrant. 5. On" +
      " a crosswalk.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.358 - Stopping, standing, or parking",
    url:
      "https://www.legis.iowa.gov/docs/code/321.358.pdf",
  },
  {
    key: "code-parking-stop-sign-10",
    quote:
      "Within ten feet upon the approach to any flashing beacon, " +
      "stop sign, or traffic-control signal located at the side " +
      "of a roadway.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.358(6) - Stopping, standing, or parking",
    url:
      "https://www.legis.iowa.gov/docs/code/321.358.pdf",
  },
  {
    key: "code-parking-railroad-50",
    quote:
      "Within fifty feet of the nearest rail of a railroad " +
      "crossing, except when parked parallel with such rail and " +
      "not exhibiting a red light.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.358(8) - Stopping, standing, or parking",
    url:
      "https://www.legis.iowa.gov/docs/code/321.358.pdf",
  },
  {
    key: "code-parking-fire-station",
    quote:
      "Within twenty feet of the driveway entrance to any fire " +
      "station and on the side of a street opposite the entrance " +
      "to any fire station within seventy-five feet of said " +
      "entrance when properly signposted.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.358(9) - Stopping, standing, or parking",
    url:
      "https://www.legis.iowa.gov/docs/code/321.358.pdf",
  },
  {
    key: "code-signal-100-300",
    quote:
      "A signal of intention to turn right or left shall be given" +
      " continuously during not less than the last one hundred " +
      "feet traveled by the vehicle before turning when the speed" +
      " limit is forty-five miles per hour or less",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.315 - Signal continuous",
    url:
      "https://www.legis.iowa.gov/docs/code/321.315.pdf",
  },
  {
    key: "code-row-right",
    quote:
      "When two vehicles enter an intersection from different " +
      "highways or public streets at approximately the same time," +
      " the driver of the vehicle on the left shall yield the " +
      "right-of-way to the vehicle on the right.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.319 - Entering intersections from " +
      "different highways",
    url:
      "https://www.legis.iowa.gov/docs/code/321.319.pdf",
  },
  {
    key: "code-left-turn-yield",
    quote:
      "The driver of a vehicle who intends to turn to the left " +
      "within an intersection or into an alley, private road, or " +
      "driveway shall yield the right-of-way to all vehicles " +
      "approaching from the opposite direction which are within " +
      "the intersection or so close as to constitute an immediate" +
      " hazard.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.320 - Left turns - yielding",
    url:
      "https://www.legis.iowa.gov/docs/code/321.320.pdf",
  },
  {
    key: "code-stop-sign-where",
    quote:
      "The driver of a vehicle approaching a stop intersection " +
      "indicated by a stop sign shall stop at the first " +
      "opportunity at either the clearly marked stop line or " +
      "before entering the crosswalk or before entering the " +
      "intersection",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.322(1) - Vehicles entering stop or " +
      "yield intersection",
    url:
      "https://www.legis.iowa.gov/docs/code/321.322.pdf",
  },
  {
    key: "code-emergency-pull-over",
    quote:
      "the driver of every other vehicle shall yield the right-" +
      "of-way and shall immediately drive to a position parallel " +
      "to, and as close as possible to, the right-hand edge or " +
      "curb of the highway clear of any intersection and shall " +
      "stop and remain in such position until the authorized " +
      "emergency vehicle has passed,",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.324(2) - Operation on approach of " +
      "emergency vehicles",
    url:
      "https://www.legis.iowa.gov/docs/code/321.324.pdf",
  },
  {
    key: "code-move-over",
    quote:
      "Make a lane change into a lane not adjacent to the " +
      "authorized emergency vehicle if possible in the existing " +
      "safety and traffic conditions. b. If a lane change under " +
      "paragraph \"a\" would be impossible, prohibited by law, or " +
      "unsafe, reduce the speed of the motor vehicle to a " +
      "reasonable and proper speed for the existing road and " +
      "traffic conditions, which speed shall be less than the " +
      "posted speed limit, and be prepared to stop.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.323A(1) - Approaching certain " +
      "stationary vehicles",
    url:
      "https://www.legis.iowa.gov/docs/code/321.323A.pdf",
  },
  {
    key: "code-lighted-lamps",
    quote:
      "Every motor vehicle upon a highway within the state, at " +
      "any time from sunset to sunrise, and at such other times " +
      "when conditions such as fog, snow, sleet, or rain provide " +
      "insufficient lighting to render clearly discernible " +
      "persons and vehicles on the highway at a distance of five " +
      "hundred feet ahead, shall display lighted headlamps",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.384(1) - When lighted lamps required",
    url:
      "https://www.legis.iowa.gov/docs/code/321.384.pdf",
  },
  {
    key: "code-electronic-device",
    quote:
      "A person shall not use an electronic device while driving " +
      "a motor vehicle unless the motor vehicle is at a complete " +
      "stop off the traveled portion of the roadway, or as far " +
      "away from the center of the roadway as is practicable if " +
      "the vehicle cannot be entirely removed from the traveled " +
      "portion of the roadway.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.276(2) - Use of electronic device " +
      "while driving",
    url:
      "https://www.legis.iowa.gov/docs/code/321.276.pdf",
  },
  {
    key: "code-hands-free-exception",
    quote:
      "A person does not violate this section by using an " +
      "electronic device in a voice-activated or hands-free mode.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.276(2)(a) - Use of electronic device" +
      " while driving",
    url:
      "https://www.legis.iowa.gov/docs/code/321.276.pdf",
  },
  {
    key: "code-hands-free-not",
    quote:
      "\"Voice-activated or hands-free mode\" does not include " +
      "accessing nonnavigation video content, engaging in a video" +
      " call, accessing or engaging in video streaming, accessing" +
      " gaming data, or reading an electronic message or " +
      "notification.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.276(1)(c) - Use of electronic device" +
      " while driving",
    url:
      "https://www.legis.iowa.gov/docs/code/321.276.pdf",
  },
  {
    key: "code-signal-red-turn",
    quote:
      "A \"steady circular red\" light means vehicular traffic " +
      "shall stop. Vehicular traffic shall remain standing until " +
      "a signal to proceed is shown, or vehicular traffic, unless" +
      " prohibited by a sign, may cautiously enter the " +
      "intersection to make a right turn from the right lane of " +
      "traffic or another lane designated for right turns,",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.257(2)(a) - Official traffic-control" +
      " signal",
    url:
      "https://www.legis.iowa.gov/docs/code/321.257.pdf",
  },
  {
    key: "code-signal-yellow",
    quote:
      "A \"steady circular yellow\" or \"steady yellow arrow\" light " +
      "means vehicular traffic is warned that the related green " +
      "movement is being terminated and vehicular traffic shall " +
      "no longer proceed into the intersection and shall stop. If" +
      " the stop cannot be made in safety, a vehicle may be " +
      "driven cautiously through the intersection.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.257(2)(b) - Official traffic-control" +
      " signal",
    url:
      "https://www.legis.iowa.gov/docs/code/321.257.pdf",
  },
  {
    key: "code-signal-flashing-red",
    quote:
      "A \"flashing circular red\" light means vehicular traffic " +
      "shall stop and after stopping may proceed cautiously " +
      "through the intersection",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.257(2)(e) - Official traffic-control" +
      " signal",
    url:
      "https://www.legis.iowa.gov/docs/code/321.257.pdf",
  },
  {
    key: "code-bus-meeting-20",
    quote:
      "when meeting a school bus with flashing amber warning " +
      "lamps shall reduce the vehicle's speed to not more than " +
      "twenty miles per hour, and shall bring the vehicle to a " +
      "complete stop when the school bus stops and the stop " +
      "signal arm is extended.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.372(3)(a) - Discharging pupils",
    url:
      "https://www.legis.iowa.gov/docs/code/321.372.pdf",
  },
  {
    key: "code-bus-overtaking-15",
    quote:
      "The driver shall bring the vehicle to a complete stop no " +
      "closer than fifteen feet from the school bus when it is " +
      "stopped and the stop arm is extended, and the vehicle " +
      "shall remain stopped until the stop arm is retracted and " +
      "the school bus resumes motion.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.372(3)(b) - Discharging pupils",
    url:
      "https://www.legis.iowa.gov/docs/code/321.372.pdf",
  },
  {
    key: "code-bus-divided-exception",
    quote:
      "providing two or more lanes in each direction need not " +
      "stop upon meeting a school bus which is traveling in the " +
      "opposite direction even though the school bus is stopped.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.372(4) - Discharging pupils",
    url:
      "https://www.legis.iowa.gov/docs/code/321.372.pdf",
  },
  {
    key: "code-bus-fine",
    quote:
      "For a first offense under subsection 3, the person is " +
      "guilty of a simple misdemeanor punishable by a fine of at " +
      "least three hundred forty-five dollars but not more than " +
      "nine hundred thirty dollars or by imprisonment for not " +
      "more than thirty days, or by both.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.372(5)(b)(1) - Discharging pupils",
    url:
      "https://www.legis.iowa.gov/docs/code/321.372.pdf",
  },
  {
    key: "code-bus-reported",
    quote:
      "The driver of a school bus who observes a violation of " +
      "section 321.372, subsection 3, may prepare a written " +
      "report on a form provided by the department of public " +
      "safety indicating that a violation has occurred.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.372A(1) - Prompt investigation of " +
      "reported violation",
    url:
      "https://www.legis.iowa.gov/docs/code/321.372A.pdf",
  },
  {
    key: "code-permit-age-14",
    quote:
      "The department may issue an instruction permit to an " +
      "applicant between the ages of fourteen and eighteen years " +
      "if the applicant meets the requirements of sections " +
      "321.184 and",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.180B(1)(a) - Graduated driver's licenses",
    url:
      "https://www.legis.iowa.gov/docs/code/321.180B.pdf",
  },
  {
    key: "code-permit-supervision",
    quote:
      "a permittee who is less than eighteen years of age and who" +
      " is operating a motor vehicle must be accompanied by a " +
      "person issued a driver's license valid for the vehicle " +
      "operated who is the parent, guardian, or custodian of the " +
      "permittee, a member of the permittee's immediate family if" +
      " the family member is at least twenty-one years of age,",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.180B(1)(c)(1) - Graduated driver's " +
      "licenses",
    url:
      "https://www.legis.iowa.gov/docs/code/321.180B.pdf",
  },
  {
    key: "code-permit-seatbelt-count",
    quote:
      "A permittee shall not operate a motor vehicle if the " +
      "number of passengers in the motor vehicle exceeds the " +
      "number of passenger safety belts in the motor vehicle.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.180B(1)(c)(1) - Graduated driver's " +
      "licenses",
    url:
      "https://www.legis.iowa.gov/docs/code/321.180B.pdf",
  },
  {
    key: "code-intermediate-20-hours",
    quote:
      "the permittee has accumulated a total of twenty hours of " +
      "street or highway driving of which two hours were " +
      "conducted after sunset and before sunrise",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.180B(2)(a) - Graduated driver's licenses",
    url:
      "https://www.legis.iowa.gov/docs/code/321.180B.pdf",
  },
  {
    key: "code-intermediate-12-months",
    quote:
      "The department may issue an intermediate driver's license " +
      "to a person sixteen or seventeen years of age who " +
      "possesses an instruction permit issued under subsection 1 " +
      "or a comparable instruction permit issued by another state" +
      " for a minimum of twelve months immediately preceding " +
      "application,",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.180B(2)(a) - Graduated driver's licenses",
    url:
      "https://www.legis.iowa.gov/docs/code/321.180B.pdf",
  },
  {
    key: "code-intermediate-curfew",
    quote:
      "However, a licensee may operate a vehicle to and from " +
      "school-related extracurricular activities and work without" +
      " an accompanying driver between the hours of 12:30 a.m. " +
      "and 5:00 a.m. if the licensee possesses a waiver on a form" +
      " to be provided by the department.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.180B(2)(b) - Graduated driver's licenses",
    url:
      "https://www.legis.iowa.gov/docs/code/321.180B.pdf",
  },
  {
    key: "code-intermediate-passenger",
    quote:
      "for the first six months following issuance of the " +
      "license, a person issued an intermediate license must " +
      "limit the number of unrelated minor passengers in the " +
      "motor vehicle when the intermediate licensee is operating " +
      "the motor vehicle to one,",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.180B(2)(a) - Graduated driver's licenses",
    url:
      "https://www.legis.iowa.gov/docs/code/321.180B.pdf",
  },
  {
    key: "code-full-licence-10-hours",
    quote:
      "the intermediate licensee has accumulated a total of ten " +
      "hours of street or highway driving of which two hours were" +
      " conducted after sunset and before sunrise",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.180B(4) - Graduated driver's licenses",
    url:
      "https://www.legis.iowa.gov/docs/code/321.180B.pdf",
  },
  {
    key: "code-remedial-six-months",
    quote:
      "shall not be issued an intermediate license until the " +
      "person has completed the remedial driver improvement " +
      "action and has been accident and violation free " +
      "continuously for the six-month period immediately " +
      "preceding the application for the intermediate license.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.180B(3)(a) - Graduated driver's licenses",
    url:
      "https://www.legis.iowa.gov/docs/code/321.180B.pdf",
  },
  {
    key: "code-open-container-passenger",
    quote:
      "A passenger in a motor vehicle upon a public street or " +
      "highway shall not possess in the passenger area of the " +
      "motor vehicle an open or unsealed bottle, can, jar, or " +
      "other receptacle containing an alcoholic beverage or a " +
      "beverage containing any amount of tetrahydrocannabinol.",
    source:
      "Iowa Code 2026, Chapter 321 - Motor Vehicles and Law of " +
      "the Road",
    section:
      "Iowa Code Section 321.284A(1) - Open containers in motor " +
      "vehicles",
    url:
      "https://www.legis.iowa.gov/docs/code/321.284A.pdf",
  },
  {
    key: "iac-knowledge-test",
    quote:
      "A knowledge test is used to determine an applicant's " +
      "ability to read and understand Iowa traffic laws and the " +
      "highway signs that regulate, warn and direct traffic. The " +
      "department reserves the right to revise a test at any time" +
      " and will declare the minimum passing score for each test.",
    source:
      "Iowa Administrative Code 761 Chapter 604 - License " +
      "Examination (IAC 10/1/25)",
    section:
      "761 IAC 604.9(1) - Knowledge test",
    url:
      "https://www.legis.iowa.gov/docs/iac/chapter/761.604.pdf",
  },
  {
    key: "iac-test-score-180",
    quote:
      "Test score. The test score result is valid for 180 days.",
    source:
      "Iowa Administrative Code 761 Chapter 604 - License " +
      "Examination (IAC 10/1/25)",
    section:
      "761 IAC 604.9(3) - Knowledge test",
    url:
      "https://www.legis.iowa.gov/docs/iac/chapter/761.604.pdf",
  },
  {
    key: "iac-retesting",
    quote:
      "Retesting. An applicant who fails a knowledge test may " +
      "repeat the test at the discretion of the examiner.",
    source:
      "Iowa Administrative Code 761 Chapter 604 - License " +
      "Examination (IAC 10/1/25)",
    section:
      "761 IAC 604.9(4) - Knowledge test",
    url:
      "https://www.legis.iowa.gov/docs/iac/chapter/761.604.pdf",
  },
  {
    key: "iac-oral-test",
    quote:
      "Oral test. An applicant who is unable to read or " +
      "understand a written test may request an oral test. The " +
      "oral test may be administered by an examiner or by an " +
      "automated testing device.",
    source:
      "Iowa Administrative Code 761 Chapter 604 - License " +
      "Examination (IAC 10/1/25)",
    section:
      "761 IAC 604.9(2) - Knowledge test",
    url:
      "https://www.legis.iowa.gov/docs/iac/chapter/761.604.pdf",
  },
  {
    key: "iac-examination-parts",
    quote:
      "An examination is to include: a. A vision screening if the" +
      " person has not filed a vision report. b. A knowledge test" +
      " of Iowa traffic laws and highway signs. c. A driving test" +
      " of the person's ability to operate a motor vehicle.",
    source:
      "Iowa Administrative Code 761 Chapter 604 - License " +
      "Examination (IAC 10/1/25)",
    section:
      "761 IAC 604.4(1) - Examination",
    url:
      "https://www.legis.iowa.gov/docs/iac/chapter/761.604.pdf",
  },
  {
    key: "iac-waiver-out-of-state",
    quote:
      "The applicant has passed the same type of test for another" +
      " Iowa driver's license or an equivalent out-of-state " +
      "license that is still valid or has expired within the past" +
      " year.",
    source:
      "Iowa Administrative Code 761 Chapter 604 - License " +
      "Examination (IAC 10/1/25)",
    section:
      "761 IAC 604.10(2)(a) - Knowledge test requirements and waivers",
    url:
      "https://www.legis.iowa.gov/docs/iac/chapter/761.604.pdf",
  },
  {
    key: "iac-operator-test-required",
    quote:
      "An operator's knowledge test is required for all classes " +
      "of noncommercial driver's licenses and all types of " +
      "special driver's licenses and permits.",
    source:
      "Iowa Administrative Code 761 Chapter 604 - License " +
      "Examination (IAC 10/1/25)",
    section:
      "761 IAC 604.10(1)(a) - Knowledge test requirements and waivers",
    url:
      "https://www.legis.iowa.gov/docs/iac/chapter/761.604.pdf",
  },
  {
    key: "dot-permit-requirements",
    quote:
      "Be at least 14 years old. Pass the knowledge and vision test.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Instruction Permit for Under Age 18 - How Do I Get an " +
      "Instruction Permit?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18",
  },
  {
    key: "dot-gdl-three-steps",
    quote:
      "Iowa has a graduated driver's license (GDL) system for " +
      "drivers under age 18. GDL includes three steps that " +
      "provide experience to improve driving skills.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Instruction Permit for Under Age 18",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18",
  },
  {
    key: "dot-permit-can-do",
    quote:
      "Drive at any time with adult supervision. The supervising " +
      "adult must possess a valid driver's license. Adult " +
      "supervision means: Your parent. Your guardian. Your " +
      "custodian. An immediate family member at least 21 years of" +
      " age.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Instruction Permit for Under Age 18 - What Can I Do With " +
      "This Permit?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18",
  },
  {
    key: "dot-permit-cannot",
    quote:
      "Drive without adult supervision. Drive unsupervised to " +
      "school or work. This requires a special minor's restricted" +
      " license.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Instruction Permit for Under Age 18 - What Can't I Do With" +
      " This Permit?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18",
  },
  {
    key: "dot-permit-no-phone",
    quote:
      "Use a cell phone, smartphone, tablet, or other electronic " +
      "communication or entertainment device while driving. This " +
      "doesn't apply to equipment permanently installed in your " +
      "vehicle.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Instruction Permit for Under Age 18 - What Can't I Do With" +
      " This Permit?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18",
  },
  {
    key: "dot-permit-belts",
    quote:
      "Carry more passengers than the number of seat belts in " +
      "your vehicle.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Instruction Permit for Under Age 18 - What Can't I Do With" +
      " This Permit?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18",
  },
  {
    key: "dot-permit-consequences",
    quote:
      "If you get a moving traffic conviction, cause a crash, or " +
      "violate a restriction on your permit, there are " +
      "consequences. First offense: You'll get a warning letter " +
      "and your permit may be suspended. Second offense: Your " +
      "permit will be suspended for 30 days.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Instruction Permit for Under Age 18 - What if I Mess Up?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18",
  },
  {
    key: "dot-permit-delay-6-months",
    quote:
      "Every time you get a conviction, cause a crash, or violate" +
      " a restriction, it delays your ability to upgrade to the " +
      "next phase of license by 6 months.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Instruction Permit for Under Age 18 - What if I Mess Up?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18",
  },
  {
    key: "dot-test-three-options",
    quote:
      "You have three options for taking the knowledge test. Take" +
      " the knowledge test at a DMV or an Iowa County Treasurer " +
      "location. Schedule an appointment to take the knowledge " +
      "test at a DMV or contact a Iowa county treasurer to take a" +
      " test at one of their locations.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Instruction Permit for Under Age 18 - Taking the Knowledge" +
      " Test",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18",
  },
  {
    key: "dot-test-at-home",
    quote:
      "Take the knowledge test at home. A parent will be required" +
      " to administer the test and the student will need an " +
      "electronic device (not a phone or tablet) connected to the" +
      " Internet.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Instruction Permit for Under Age 18 - Taking the Knowledge" +
      " Test",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18",
  },
  {
    key: "dot-practice-test-80",
    quote:
      "This practice test generates 25 questions, randomly chosen" +
      " from a larger group of sample questions that includes " +
      "questions from the real knowledge test given at any Iowa " +
      "driver's license station or county treasurer's office.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Iowa Driver's License Practice Test",
    url:
      "https://iowadot.gov/drivers-licenses-ids/driver-education/manuals-practice-tests/take-practice-test",
  },
  {
    key: "dot-intermediate-requirements",
    quote:
      "Be at least 16 years old. Complete an Iowa-approved driver" +
      " education course. Have a valid instruction permit (or " +
      "instruction permit and special minor's restricted license " +
      ") for a total of 12 months.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Intermediate License - How Do I Get an Intermediate License?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/intermediate-license",
  },
  {
    key: "dot-intermediate-hours",
    quote:
      "Drive without adult supervision between 5 a.m. and 12:30 a.m.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Intermediate License - What Can I Do With This License?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/intermediate-license",
  },
  {
    key: "dot-intermediate-waiver",
    quote:
      "Your parent, guardian, or custodian can complete a Waiver " +
      "of Intermediate Driver's License Hour Restriction form " +
      "(form 431170) to waive this restriction for school or work" +
      " purposes. Once completed, the form needs to be carried in" +
      " the vehicle when driving after hours.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Intermediate License - What Can't I Do With This License",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/intermediate-license",
  },
  {
    key: "dot-intermediate-delay-12-months",
    quote:
      "delays your ability to upgrade to the next phase of " +
      "license by 12 months.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Intermediate License - What if I Mess Up?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/intermediate-license",
  },
  {
    key: "dot-intermediate-passengers",
    quote:
      "If the back of your license says you have a passenger " +
      "restriction , for the first six months you have your " +
      "intermediate license, you cannot carry more than one minor" +
      " passenger that is not a relative when driving without " +
      "adult supervision.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Intermediate License - What Can't I Do With This License",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/intermediate-license",
  },
  {
    key: "dot-full-licence",
    quote:
      "Complete 10 hours of supervised driving while holding your" +
      " intermediate license. At least two of those hours must be" +
      " between sunset and sunrise.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Full License - How Do I Get a Full License?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/full-license",
  },
  {
    key: "dot-smrl-requirements",
    quote:
      "Be at least 14 1/2 years old. Complete an Iowa-approved " +
      "driver education course. Hold a valid instruction permit " +
      "and a clean driving record for at least six consecutive " +
      "months immediately before applying for your special " +
      "minor's restricted license.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Special Minor's Restricted License - How Do I Get a " +
      "Special Minor's Restricted License?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/special-minors-restricted-license",
  },
  {
    key: "dot-smrl-what",
    quote:
      "This license allows you to drive without adult supervision" +
      " in the hour before and after the beginning and ending of " +
      "the following: Drive from your home to your school(s) of " +
      "enrollment for class or school sponsored activities using " +
      "the most direct and accessible route.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Special Minor's Restricted License - What Can I Do With " +
      "This License?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/special-minors-restricted-license",
  },
  {
    key: "dot-smrl-work-25",
    quote:
      "Drive for work. The driving distance between the origin " +
      "and destination must be 25 miles or less.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Special Minor's Restricted License - What Can I Do With " +
      "This License?",
    url:
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/special-minors-restricted-license",
  },
  {
    key: "dot-drive-test-vehicle",
    quote:
      "Before you begin the drive test, the vehicle you bring " +
      "must pass an inspection to ensure it is safe and can be " +
      "legally operated on public roadways.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Prepare for Your Driving Test - Prepare Your Vehicle",
    url:
      "https://iowadot.gov/drivers-licenses-ids/driver-education/manuals-practice-tests/prepare-your-driving-test",
  },
  {
    key: "dot-no-parallel-park",
    quote:
      "A common concern we hear is, \"Will I have to parallel " +
      "park?\" No. Although a useful skill to master, we currently" +
      " do not require parallel parking as part of the drive " +
      "test.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Prepare for Your Driving Test - What to Expect During the " +
      "Drive Test",
    url:
      "https://iowadot.gov/drivers-licenses-ids/driver-education/manuals-practice-tests/prepare-your-driving-test",
  },
  {
    key: "dot-drive-test-two-second",
    quote:
      "Use the two-second rule to ensure you are following at a " +
      "safe distance. Increase the following distance for poor " +
      "weather, road, or traffic conditions.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Prepare for Your Driving Test - What to Expect During the " +
      "Drive Test",
    url:
      "https://iowadot.gov/drivers-licenses-ids/driver-education/manuals-practice-tests/prepare-your-driving-test",
  },
  {
    key: "dot-drive-test-signal-100",
    quote:
      "Put your signal on 100 feet before turning or changing lanes.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Prepare for Your Driving Test - What to Expect During the " +
      "Drive Test",
    url:
      "https://iowadot.gov/drivers-licenses-ids/driver-education/manuals-practice-tests/prepare-your-driving-test",
  },
  {
    key: "dot-drive-test-blocked-view",
    quote:
      "Be aware of where you must stop when approaching an " +
      "intersection. If your view is blocked, stop then move " +
      "forward carefully. Look both ways before continuing into " +
      "the intersection. Do not roll through stop signs or red " +
      "lights.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Prepare for Your Driving Test - What to Expect During the " +
      "Drive Test",
    url:
      "https://iowadot.gov/drivers-licenses-ids/driver-education/manuals-practice-tests/prepare-your-driving-test",
  },
  {
    key: "dot-online-test-age",
    quote:
      "The student must be within 30 days of their 14th birthday " +
      "and younger than 18. The student will need an electronic " +
      "device (not a phone or tablet) connected to the Internet. " +
      "The parent/guardian administering the test must have a " +
      "valid Iowa driver's license.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Online Permit Test (Skip the Trip) - Requirements",
    url:
      "https://iowadot.gov/drivers-licenses-ids/driver-education/online-permit-test-skip-trip",
  },
  {
    key: "dot-online-test-link",
    quote:
      "The parent/guardian and student will receive an email with" +
      " instructions for taking and administering the test. The " +
      "link sent in the email will expire after 72 hours.",
    source:
      "Iowa DOT, Driver's Licenses & IDs (iowadot.gov)",
    section:
      "Online Permit Test (Skip the Trip) - How to Take the Test",
    url:
      "https://iowadot.gov/drivers-licenses-ids/driver-education/online-permit-test-skip-trip",
  },
];
