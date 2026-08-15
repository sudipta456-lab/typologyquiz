import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Tennessee Comprehensive Driver License
// Manual, published by the Tennessee Department of Safety and Homeland
// Security - 187 of the 191 below - plus 4 passages from other tn.gov
// pages, carrying rules the manual buries or does not state at all: the Level
// 1 and Level 2 graduated licence restrictions, which the department's own
// teen GDL page omits and its driver licence information page states plainly;
// the Level 3 requirement; and the liability insurance minimums, which appear
// nowhere in the manual's 135 pages and only on the Department of Revenue's
// Financial Responsibility Law page.
//
// Every quote below was located mechanically in the fetched source and checked
// as an exact substring before it was written here. Nothing is paraphrased.
// Four normalisations were applied to the extracted text and to nothing else:
// curly quotes, en dashes and em dashes are folded to ASCII; ligatures are
// expanded; the bullet glyph the PDF encodes as a control character is dropped;
// and runs of whitespace, including the line breaks the manual's two-column
// layout inserts mid-sentence, are collapsed to single spaces. Where the source
// states a rule as a stem followed by a bulleted list, the items are run
// together in the order they appear - no words are changed, dropped or
// reordered. The manual's own typographical errors are preserved as they stand
// ("a ll-way stop", 'DON"T WALK', "the meet one of the following"), because a
// quote that has been tidied up is no longer a quote.
//
// These are quoted rather than summarised because the department writes its
// knowledge test from this wording, and because the manual carries its own
// notice that "The information in this manual is not copyrighted and may be
// reproduced or translated by the user as needed." Each is kept to the
// operative rule and shown with its source, section and a link back to the
// official page.

const HB = "Tennessee Comprehensive Driver License Manual";
const HB_URL = "https://www.tn.gov/content/dam/tn/safety/documents/DL_Manual.pdf";

export const tennesseeExcerpts: HandbookExcerpt[] = [
  // --- Section B-3: Traffic Signs and Signals ---
  {
    key: "sign-octagon-stop",
    quote:
      "This sign is the only eight-sided sign on the roadway. It always means " +
      "that there is danger. It will always be red with white lettering.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "sign-yield-triangle",
    quote:
      "This three-sided sign means that you are approaching an intersection " +
      "and must stop and wait when other vehicles are approaching from the " +
      "right or left on the other roadway.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "sign-round-railroad",
    quote:
      "This circular sign always means that you are approaching a railroad " +
      "grade crossing. You must slow down and be ready to stop.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "sign-crossbuck",
    quote:
      "This is known as a crossbuck sign. It is placed at all railroad grade " +
      "crossings and shows exactly where the tracks are located.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "color-red-use",
    quote:
      "RED is used only as a background color for STOP signs, multiple " +
      "supplemental plates (FOUR-WAY or ALL WAY), DO-NOT-ENTER messages, " +
      "WRONG WAY signs and on Interstate route markers.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "color-orange",
    quote:
      "ORANGE is used as a background color for construction and maintenance " +
      "signs and shall not be used for any other purpose.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "color-blue",
    quote:
      "BLUE is used as a background color for information signs related to " +
      "motorist services (including police services and rest areas) and the " +
      "Emergency Route Marker.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "color-yellow-green",
    quote:
      "FLUORESCENT YELLOW-GREEN is now in use for signage in school zones and " +
      "other pedestrian traffic areas such as crosswalks.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "color-pink",
    quote:
      "FLUORESCENT PINK (sometimes called \"coral\") is used for incident " +
      "management traffic control signage",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "signs-obey",
    quote:
      "Traffic signs are placed to help you and to instruct you in the best " +
      "and safest use of the highway. All signs must be obeyed at all times, " +
      "unless a policeman or other traffic officer directs you to do " +
      "otherwise.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "sign-reverse-turn",
    quote:
      "The reverse turn sign is used to mark two turns in opposite directions " +
      "that are less than 600 feet apart.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "sign-advisory-plate",
    quote:
      "The smaller sign on the post beneath this sign is used to supplement " +
      "warning signs. It gives you the recommended maximum safe speed.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "sign-keep-right-lane",
    quote:
      "It means that you must drive in the extreme right lane unless you want " +
      "to pass a slower moving car or make a left turn.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "smv-emblem",
    quote:
      "You may see this emblem on slow-moving vehicles, such as farm " +
      "tractors, machinery, construction equipment or horse- drawn vehicles.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "reference-markers",
    quote:
      "In order to help motorists better identify their location on urban " +
      "interstates, the state has installed interstate reference markers " +
      "every 1,000 feet along heavily traveled sections.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "signal-red-right-turn",
    quote:
      "Unless otherwise posted, you may turn right on red after coming to a " +
      "complete stop and when no pedestrians or cross traffic are present.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "signal-yellow-three-seconds",
    quote:
      "Tennessee law only requires the yellow light to be exhibited for a " +
      "minimum of three seconds before the red light.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "signal-green-yield",
    quote:
      "The green signal gives permission to proceed, BUT you must still " +
      "observe the laws of the right-of-way. Yield to oncoming vehicles if " +
      "you are turning left.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "signal-protected-arrow",
    quote:
      "When the arrow is green, you have the right-of-way and may drive the " +
      "vehicle only in the direction of the arrow, after yielding to vehicles " +
      "and pedestrians already in the intersection.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "signal-red-arrow",
    quote:
      "When the arrow is red or your lane has the red light, all turns are " +
      "prohibited. This is true even if other lanes of traffic have a green " +
      "signal and your path through the intersection appears to be clear.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "signal-flashing-red",
    quote:
      "FLASHING RED Complete stop. Same as stop sign. Look both ways, yield " +
      "to traffic and pedestrians and proceed when it is safe to do so.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "signal-flashing-yellow",
    quote:
      "FLASHING YELLOW Slow down and proceed with caution at the " +
      "intersection.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "signal-malfunction",
    quote:
      "Tennessee state law requires that if a signal is not working, the " +
      "intersection is to be treated as if it were a ll-way stop " +
      "intersection.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "marking-wrong-way",
    quote:
      "If you ever find yourself with yellow to your right and white to your " +
      "left, you are going the wrong way.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "marking-crosswalk",
    quote:
      "You must yield the right-of-way to pedestrians who are in or are about " +
      "to enter the crosswalk or street.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  // --- Section B-4: Rules of the Road ---
  {
    key: "lane-control-signals",
    quote:
      "A green arrow means you can drive in the lane beneath it. A red \"X\" " +
      "means you CANNOT drive in the lane below.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "lane-reversible",
    quote:
      "A flashing yellow \"X\" means the lane is only for turning. A steady " +
      "yellow \"X\" means that the use/direction of the lane is changing and " +
      "you should move out of it as soon as it is safe to do so.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  // --- Section B-3: Traffic Signs and Signals ---
  {
    key: "work-zone-flaggers",
    quote:
      "In work areas, a person with a sign or flag may control traffic. You " +
      "must obey the directions of these persons.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "marking-passing-zone",
    quote:
      "If the broken yellow line is on your side, you are in the \"passing " +
      "zone\" and may pass if it is safe to do so. You must safely return to " +
      "your side of the roadway before the passing zone ends.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  // --- Section B-4: Rules of the Road ---
  {
    key: "headlights-night",
    quote:
      "Your car headlights must be turned on 30 minutes after sunset until 30 " +
      "minutes before sunrise.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "headlights-wipers-law",
    quote:
      "Remember, using headlights when wipers are in use is not just a good " +
      "safety precaution - it's Tennessee law!",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "headlights-dim-500",
    quote:
      "When your vehicle's high beam headlights are on, you must dim or lower " +
      "the beam when an oncoming vehicle is within 500 feet (approximately " +
      "the distance of one city block) or when you are following another " +
      "vehicle within 500 feet.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "coasting-prohibited",
    quote:
      "While traveling on a downgrade, NEVER coast with the transmission of " +
      "the vehicle in neutral. Also, drivers of manual transmission vehicles " +
      "must not coast with the clutch depressed.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "obey-officers",
    quote: "You must obey traffic officers at all times.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "littering-fines",
    quote:
      "Littering is against state law. Fines start at $50 and can be up to " +
      "$3,000 based upon the amount of litter.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "litter-cover-load",
    quote:
      "Tennessee law requires any motor vehicle transporting litter or any " +
      "material, likely to fall or be blown off onto the highway, to be in an " +
      "enclosed space or fully covered by a tarpaulin.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "slow-definition",
    quote:
      "You are considered to be driving a slow-moving vehicle if you are " +
      "traveling at a rate of speed that is 10 miles per hour or more below " +
      "the lawful maximum speed.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "slow-five-vehicles",
    quote:
      "If five or more vehicles are lined up behind you, turn or pull off the " +
      "roadway as soon as you can do so safely.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "funeral-no-pass",
    quote:
      "Vehicles following a funeral procession on a two-lane roadway may not " +
      "attempt to pass such procession; and No operator of a vehicle shall " +
      "drive between vehicles in a properly identified funeral procession " +
      "except when directed to do so by a traffic officer.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "bsr-not-law",
    quote:
      "The Basic Speed Rule (BSR) is not a Tennessee law, but it is a general " +
      "safety principle.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "speed-default-55",
    quote:
      "Unless otherwise posted, the speed limit on primary and secondary " +
      "state and federal highways is 55 m.p.h.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "speed-interstate-70",
    quote:
      "The maximum speed set by Tennessee law for interstate highways is 70 " +
      "m.p.h.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "speed-urban-55",
    quote:
      "In the more congested urban or metropolitan areas of Tennessee " +
      "interstates, the limit is typically 55 m.p.h.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "speed-left-lane-55",
    quote:
      "It is unlawful for any person to drive a vehicle less than 55 m.p.h. " +
      "in the left most lane of any Interstate highway, unless traffic " +
      "congestion and flow prevent safe driving at such speed.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "speed-minimum-45",
    quote:
      "On the interstates, the minimum speed limit in the right lane(s) is 45 " +
      "m.p.h., and under normal driving conditions, all vehicles must travel " +
      "at least this fast so they are not a hazard to other drivers.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "school-zone-reckless",
    quote:
      "Exceeding the school zone speed limit is by law considered to be " +
      "reckless driving. The penalty includes an automatic six points added " +
      "to your driving record",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "school-zone-when",
    quote:
      "Speed limits in all school zones are regulated when children are going " +
      "to or from the school or during a school recess hour.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "work-zone-fine",
    quote:
      "TENNESSEE LAW MANDATES A MINIMUM FINE OF $250 DOLLARS AND UP TO A " +
      "MAXIMUM FINE OF $500 DOLLARS FOR VIOLATIONS OF THE SPEED LIMIT POSTED " +
      "IN ACTIVE WORK ZONES.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "two-brakes",
    quote:
      "By law, all automobiles must have two separate methods of applying " +
      "brakes.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "abs-no-pump",
    quote:
      "When slowing or stopping, apply firm, steady pressure to the brake " +
      "pedal. Never pump the pedal with ABS.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "two-second-rule",
    quote:
      "You should NOT reach the same point on the road before you finish " +
      "counting to at least \"one- thousand-two.\" If you do, you are following " +
      "too closely.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "four-second-rule",
    quote:
      "A minimum of four seconds should allow for better reaction time and a " +
      "safer space cushion under these conditions including following a " +
      "motorcycle.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "stopping-70",
    quote:
      "If you're on a good road in good weather, the braking distance at 70 " +
      "m.p.h. will be 290 feet.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "stop-sign-law",
    quote:
      "Every driver approaching a stop sign shall stop before entering the " +
      "nearest side of a crosswalk, or stop at a clearly marked stop line.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "stop-definition",
    quote: "Tennessee Code defines \"stop\" as \"complete cessation of movement.\"",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "stop-gap-plate",
    quote:
      "A basic rule of thumb is that you should be able to see the license " +
      "plate and/or the other vehicle's back tire where it meets the " +
      "pavement.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "rr-required-stops",
    quote:
      "Church or school buses, regardless of whether such buses are carrying " +
      "any passengers at the time of crossing; Common carriers, such as taxis " +
      "or other vehicles transporting passengers for hire; Vehicles " +
      "transporting flammables, explosives or other dangerous articles as " +
      "cargo or part of a cargo.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  // --- Chapter C-3: Sharing the Road Safely ---
  {
    key: "rr-stalled-45",
    quote: "If a train is approaching, run toward the train at a 45 degree angle.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  // --- Section B-4: Rules of the Road ---
  {
    key: "bus-overtaking",
    quote:
      "Any driver approaching a school bus or church bus from the rear shall " +
      "not pass the bus when red stop warning signal lights are flashing.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "bus-turn-lane-not-barrier",
    quote:
      "A turn lane in the middle of a four-lane highway is NOT considered a " +
      "barrier, but a fifth lane that is suitable for vehicular traffic.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-law-yield",
    quote:
      "The law does not really give anyone the right-of-way. It only says who " +
      "must yield the right-of-way.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-school-flasher",
    quote:
      "When in a marked school zone when a warning flasher or flashers are in " +
      "operation, the driver of a vehicle shall stop to yield the " +
      "right-of-way to a pedestrian crossing the roadway within a marked or " +
      "unmarked crosswalk.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-blind-pedestrian",
    quote:
      "Stop at least 10 feet away until the person is off the roadway. Do not " +
      "use your horn, as it could startle the blind pedestrian",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-parked-position",
    quote:
      "When starting from a parked position, wait for all moving traffic to " +
      "pass.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-driveway",
    quote:
      "When entering a main road from a driveway, alley, parking lot or " +
      "roadside, you must yield to all vehicles already on the main road.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-roundabout-yield",
    quote:
      "When entering a roundabout, traffic circle or rotary (also known as " +
      "\"town squares\"), you must yield to traffic already in the roundabout.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-fire-station",
    quote:
      "When approaching a fire station, you should yield to any emergency " +
      "vehicle that is about to back into, or is already in the process of " +
      "backing into, the driveway entrance to the station.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-in-intersection",
    quote:
      "To any vehicles already in the intersection, even if you have the " +
      "green traffic light",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-t-intersection",
    quote:
      "At \"T\" intersections where one road dead-ends into another main " +
      "crossing roadway, the vehicles on the road ending must yield to " +
      "oncoming traffic from both directions on the main road",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-all-way-stop",
    quote:
      "At intersections marked as ALL-WAY stops, the vehicle reaching the " +
      "intersection first gets to go first (of course, ALL vehicles must " +
      "stop). If more than one vehicle arrives at the same time, yield the " +
      "right of way to the vehicle on the right",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-blue-light-illegal",
    quote:
      "It is against the law for an unauthorized private vehicle to have a " +
      "blue flashing emergency light or combination of blue and red flashing " +
      "emergency lights installed, maintained or visibly shown on the vehicle " +
      "in any manner.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-emergency-pull-right",
    quote:
      "Tennessee law requires that when an emergency vehicle is approaching, " +
      "all traffic meeting or being overtaken must yield the right-of-way and " +
      "immediately drive to a position parallel to, and as close as possible " +
      "to the right hand edge or curb of the roadway stop.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-emergency-red-light",
    quote:
      "If the traffic light is red, stay where you are. If the light turns " +
      "green before the emergency vehicle has passed, do NOT proceed on " +
      "green.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "row-transit-bus",
    quote:
      "You must yield the right-of-way to any transit vehicle (metro bus) " +
      "that has signaled and is pulling back onto the roadway from a bus " +
      "stop.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "move-over-basic",
    quote:
      "Tennessee's Move Over Law requires that when approaching any " +
      "stationary emergency vehicle with lights flashing, you must make a " +
      "lane change into a lane not adjacent to that of the vehicle, or " +
      "proceed with caution by reducing the speed of the vehicle and " +
      "maintaining a safe speed for the current road conditions.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  // --- Section B-5: Interstate Driving ---
  {
    key: "move-over-four-lanes",
    quote:
      "This applies to interstates and any multi-lane highway (with four or " +
      "more lanes) that has at least two lanes of traffic traveling in the " +
      "same direction.",
    source: HB,
    section: "Section B-5: Interstate Driving",
    url: HB_URL,
  },
  {
    key: "move-over-civilian",
    quote:
      "In addition to above mentioned stationary emergency vehicles with " +
      "lights flashing, this law now applies to all stationary motor " +
      "vehicles, such as your car or truck, with their emergency flasher " +
      "lights on.",
    source: HB,
    section: "Section B-5: Interstate Driving",
    url: HB_URL,
  },
  // --- Section B-4: Rules of the Road ---
  {
    key: "turn-signal-50-feet",
    quote:
      "At least 50 feet before the turn, you must turn on your turn signal " +
      "lights.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "turn-signal-beyond-intersection",
    quote:
      "If you plan to turn beyond an intersection, do not signal until you " +
      "are in the intersection.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "turn-left-yellow-light",
    quote:
      "If the light turns yellow while you are waiting for oncoming vehicles " +
      "to clear the intersection, DO NOT proceed into the intersection.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "turn-right-on-red",
    quote:
      "When making a right turn at a red light, you must first come to a " +
      "complete stop before reaching the marked or unmarked crosswalk or stop " +
      "line.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "uturn-500-feet",
    quote:
      "At any rural or urban location where you cannot see traffic coming " +
      "from both directions for at least 500 feet in each direction.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "uturn-interstate",
    quote:
      "It is illegal in Tennessee for any driver to make a U-turn on an " +
      "interstate highway. Emergency crossovers are for the use of emergency " +
      "vehicles and highway maintenance crews only.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "lane-center-300-feet",
    quote:
      "These lanes cannot be used for passing and cannot be used for travel " +
      "farther than 300 feet.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "lane-center-first-vehicle",
    quote:
      "When vehicles enter the turn lane from opposite directions, the first " +
      "vehicle to enter the lane has the right-of-way.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "pass-left-rule",
    quote:
      "When overtaking and passing another vehicle traveling in the same " +
      "direction on a two-lane road in the USA, you should pass only to the " +
      "left of the vehicle.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "pass-multiple-legal",
    quote:
      "As a general rule, it is NOT SAFE to pass more than one vehicle at a " +
      "time, although it is not illegal in Tennessee to pass multiple " +
      "vehicles.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "pass-right-conditions",
    quote:
      "When the vehicle overtaken has signaled to make or is about to make a " +
      "left turn.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "pass-where-prohibited",
    quote:
      "Do not pass when approaching any road-way intersection, railroad " +
      "crossing, narrow bridge, viaduct or tunnel.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "pass-end-of-zone",
    quote:
      "The end of a \"no-passing zone\" does not mean it is safe to pass. It " +
      "means there is increased visibility ahead.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "pass-bicycle-3-feet",
    quote:
      "When passing and overtaking a bicyclist proceeding in the same " +
      "direction, do so slowly and leave at least a distance between you and " +
      "the bicycle of not less than 3 feet. It's the law!",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "backing-intersection",
    quote: "It is illegal to back into an intersection from a driveway.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "park-18-feet",
    quote:
      "No matter what, you must ensure that you leave at least 18 feet of " +
      "road width for other traffic to pass your parked vehicle. Plus, your " +
      "vehicle must be visible for at least 200 feet in either direction",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "park-engine-running",
    quote:
      "It is against the law to leave the engine running in a parked " +
      "unattended vehicle. Remove ignition keys from a parked and unattended " +
      "vehicle.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "park-double-parking",
    quote: "Double parking is prohibited by law.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "park-downhill-curb",
    quote:
      "On a downhill with a curb: Turn the front wheels toward the curb " +
      "(right) and set the parking brake.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "park-hydrant-15",
    quote: "Within 15 feet of a fire hydrant",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "park-signal-30",
    quote:
      "Within 30 feet of a traffic signal, stop sign or any other traffic " +
      "control device",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "park-railroad-50",
    quote: "Within 50 feet of a railroad crossing",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "park-fire-station",
    quote:
      "Within 20 feet of a fire station driveway on the same side of the " +
      "street or on the other side of the street within 75 feet of the fire " +
      "station driveway",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "park-curb-colors",
    quote:
      "1. Stop only long enough to pick up or drop off passengers. 2. Stop " +
      "only long enough to load or unload. Stay with your car. 3. Do not " +
      "stop, stand or park in this space under any condition.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "park-parallel-18-inches",
    quote:
      "Upon completion of your parallel parking maneuver, the vehicle should " +
      "be no farther away from the curb than 18 inches.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "park-handicap-fine",
    quote:
      "If you improperly park in these designated spaces, you will be " +
      "committing a misdemeanor punishable by a $100 dollar fine, and your " +
      "vehicle could be subject to being towed.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  {
    key: "park-stay-with-vehicle",
    quote:
      "Except for extreme emergency cases, remain in your disabled vehicle " +
      "until a State Trooper, other police officer, emergency service vehicle " +
      "or a good Samaritan stops to offer assistance.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  // --- Section B-5: Interstate Driving ---
  {
    key: "interstate-lane-added",
    quote:
      "The \"lane added\" sign means that there is a new right lane added to " +
      "the interstate/roadway for the incoming traffic.",
    source: HB,
    section: "Section B-5: Interstate Driving",
    url: HB_URL,
  },
  {
    key: "interstate-scan-ahead",
    quote:
      "Scan the roadway ahead and try to watch 15-20 seconds in front of your " +
      "vehicle for cars braking, entering or exiting.",
    source: HB,
    section: "Section B-5: Interstate Driving",
    url: HB_URL,
  },
  {
    key: "interstate-hov-hours",
    quote:
      "During high inbound traffic hours (7-9 a.m.) and high outbound traffic " +
      "(4-6 p.m.), the HOV lane is reserved for the exclusive use of:",
    source: HB,
    section: "Section B-5: Interstate Driving",
    url: HB_URL,
  },
  {
    key: "interstate-thp-star",
    quote:
      "Dial: * T H P (*847) and you will be connected to the nearest " +
      "Tennessee Highway Patrol Dispatcher for assistance.",
    source: HB,
    section: "Section B-5: Interstate Driving",
    url: HB_URL,
  },
  // --- Section B-6: Driving at Night and in Inclement Weather Conditions ---
  {
    key: "night-outrun-headlights",
    quote:
      "The basic rule for safe night driving is this: NEVER OUTRUN YOUR " +
      "HEADLIGHTS.",
    source: HB,
    section: "Section B-6: Driving at Night and in Inclement Weather Conditions",
    url: HB_URL,
  },
  {
    key: "fog-low-beam",
    quote:
      "In fog or mist, never put your headlights on high beam because the " +
      "light will be reflected back into your eyes.",
    source: HB,
    section: "Section B-6: Driving at Night and in Inclement Weather Conditions",
    url: HB_URL,
  },
  {
    key: "hydroplane-response",
    quote:
      "If you vehicle starts to hydroplane, slow down gradually by letting up " +
      "on the gas.",
    source: HB,
    section: "Section B-6: Driving at Night and in Inclement Weather Conditions",
    url: HB_URL,
  },
  {
    key: "skid-steer",
    quote:
      "Steer. Turn the steering wheel in the direction you want your car to " +
      "go.",
    source: HB,
    section: "Section B-6: Driving at Night and in Inclement Weather Conditions",
    url: HB_URL,
  },
  {
    key: "flood-reckless",
    quote:
      "If a driver knowingly ignores clearly visible and adequate flood " +
      "warning signs or barricades and drives into a road area that is " +
      "actually flooded, the driver can be charged with reckless driving.",
    source: HB,
    section: "Section B-6: Driving at Night and in Inclement Weather Conditions",
    url: HB_URL,
  },
  {
    key: "tornado-shelter",
    quote:
      "If you spot a tornado, DON'T try to outrun it. Get out of the car, " +
      "find shelter in a ditch or low-lying area and lie face down to protect " +
      "yourself from flying debris.",
    source: HB,
    section: "Section B-6: Driving at Night and in Inclement Weather Conditions",
    url: HB_URL,
  },
  // --- Section B-7: Alcohol, Other Drugs and Driving ---
  {
    key: "dui-25-percent",
    quote:
      "by law, at least 25 percent of the questions on the knowledge test " +
      "must consist of questions dealing with this topic.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "alcohol-liver-rate",
    quote: "However, the liver can only oxidize about one drink per hour.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "alcohol-only-time",
    quote:
      "Contrary to popular belief, this rate cannot be increased by drinking " +
      "coffee, exercising, taking a cold shower or anything else. Only time " +
      "can sober a person who's been drinking.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "bac-08",
    quote:
      "In most states, including Tennessee, .08 is the level of intoxication " +
      "which is always illegal.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "dui-law-text",
    quote:
      "While the alcohol concentration of the operator's blood or breath is " +
      ".08 percent or higher.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "dui-zero-bac",
    quote:
      "A driver can register a BAC of .00 percent and still be convicted of a " +
      "DUI. The level of BAC does not clear a driver when it is below .08 " +
      "percent.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "dui-same-penalties",
    quote:
      "The penalties for a DUI arrest are the same whether the driver was " +
      "drinking alcohol or taking drugs (even prescription or " +
      "over-the-counter drugs).",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "implied-consent-refusal",
    quote:
      "If you are placed under arrest and a law enforcement officer asks you " +
      "to take the test and you refuse, it will likely result in the " +
      "suspension by the court of your driving privileges for twelve (12) " +
      "months.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "no-refusal-law",
    quote:
      "The No Refusal law was passed in 2012 and allows law enforcement " +
      "officials to seek search warrants for blood samples in cases involving " +
      "suspected impaired drivers.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "dui-litter-pickup",
    quote:
      "A DUI conviction also requires as a condition of probation, litter " +
      "pick-up for three eight-hour shifts. While removing litter, the " +
      "offender has to wear a vest or other clothing displaying the message, " +
      "\"I am a DRUNK DRIVER.\"",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "dui-child-endangerment",
    quote:
      "There is a mandatory minimum jail sentence of 30 days, and a mandatory " +
      "minimum fine of $1,000.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "dui-vehicular-homicide",
    quote:
      "If you are operating a motor vehicle under the influence of a drug or " +
      "alcohol, and you are involved in a crash resulting in the death of " +
      "another person(s), you may be charged with vehicular homicide.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "dui-interlock-six-months",
    quote:
      "Please note that a person with 2 DUIs in a five year period MUST " +
      "operate a motor vehicle with the ignition interlock device for six " +
      "months after reinstatement of driving privileges.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "dui-first-jail",
    quote: "48 hours (7 days if BAC is 0.20% or more)",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "under21-bac-02",
    quote:
      "A person who is at least 16, but is not yet 21 years old, and who is " +
      "found: (1) driving with a BAC of .02 percent; (2) under the influence " +
      "of alcohol; or (3) under the influence of any other intoxicant, will " +
      "be convicted of underage driving while impaired.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "under21-penalty",
    quote:
      "Penalties for this conviction are: losing your license for one year, a " +
      "fine of $250 and sometimes, includes public service work.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "alcohol-18-20",
    quote:
      "If you are 18, 19 or 20 years old and are convicted of purchasing, " +
      "attempting to purchase, or possessing any alcoholic beverage, you will " +
      "lose your privilege to drive for one year.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "alcohol-juvenile",
    quote:
      "If you are between the ages of 13 and 17 and are found to have " +
      "possessed, consumed or sold either alcohol or drugs, your driving " +
      "privilege will be suspended for one year or until age 17, whichever is " +
      "longer.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "alcohol-depressant",
    quote:
      "Alcohol, in any concentration, is a depressant, not a stimulant. " +
      "Alcohol slows all nerve impulses and body functions.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "alcohol-side-vision",
    quote: "Side vision is reduced by about 30 percent at .05 percent BAC.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "alcohol-reaction-02",
    quote:
      "Reaction and coordination are impaired by alcohol consumption as low " +
      "as .02 percent BAC.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "alcohol-judgment-first",
    quote:
      "The first thing affected after drinking alcohol is a person's " +
      "judgment.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "alcohol-one-hour",
    quote:
      "It takes about one hour to cancel the effects of one drink. It takes " +
      "about three hours to cancel the intoxicating effects of three drinks.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "alcohol-mixing-drugs",
    quote:
      "For example, when alcohol is combined with another depressant, like " +
      "tranquilizers or sedatives, the results are not just added together; " +
      "they are multiplied.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  // --- Section A-1: Your License ---
  {
    key: "license-new-resident",
    quote:
      "live in Tennessee longer than 30 days OR are working in Tennessee OR " +
      "would otherwise qualify as a registered Tennessee voter.",
    source: HB,
    section: "Section A-1: Your License",
    url: HB_URL,
  },
  {
    key: "license-class-pd",
    quote:
      "To obtain a Class PD license, you must have reached the age of 15 and " +
      "pass the written knowledge test and vision screening for a class D " +
      "license.",
    source: HB,
    section: "Section A-1: Your License",
    url: HB_URL,
  },
  {
    key: "license-hardship-daylight",
    quote:
      "The Class H license is valid only for daylight hours and for travel to " +
      "authorized locations as specified in the approval letter.",
    source: HB,
    section: "Section A-1: Your License",
    url: HB_URL,
  },
  {
    key: "license-no-possession-fine",
    quote:
      "If you do not have your license with you, you may be fined not less " +
      "than two dollars ($2.00) and no more than fifty dollars ($50.00).",
    source: HB,
    section: "Section A-1: Your License",
    url: HB_URL,
  },
  // --- Section A-4: The Examinations ---
  {
    key: "exam-four-areas",
    quote:
      "You can expect the test to approximately consist of the following four " +
      "areas:",
    source: HB,
    section: "Section A-4: The Examinations",
    url: HB_URL,
  },
  {
    key: "exam-no-same-day",
    quote:
      "No test may be repeated on the same day. Mandatory 1-day waiting " +
      "period is required after failing the knowledge test.",
    source: HB,
    section: "Section A-4: The Examinations",
    url: HB_URL,
  },
  {
    key: "road-test-immediate-fail",
    quote:
      "Violation of any traffic law Lack of cooperation or refusal to follow " +
      "directions Any dangerous action Contributing to an accident",
    source: HB,
    section: "Section A-4: The Examinations",
    url: HB_URL,
  },
  {
    key: "vehicle-tint",
    quote:
      "No tinting material may be affixed to the windshield of any motor " +
      "vehicle.",
    source: HB,
    section: "Section A-4: The Examinations",
    url: HB_URL,
  },
  // --- Chapter C-2: Special Driving Conditions and Your Vehicle ---
  {
    key: "vehicle-tread",
    quote:
      "Stick the penny into the thread head first. If the tread does not come " +
      "at least to Lincoln's head (2/32 inch), the tire is illegal and unsafe " +
      "and you need it replaced.",
    source: HB,
    section: "Chapter C-2: Special Driving Conditions and Your Vehicle",
    url: HB_URL,
  },
  // --- Section A-3: Intermediate Licenses for Drivers Under 18 ---
  {
    key: "gdl-forged-letter",
    quote:
      "A driver with an Intermediate Restricted License who is convicted of " +
      "having a forged or fraudulent letter or statement will have his/her " +
      "Intermediate Restricted License revoked and will only be reissued a " +
      "learner permit until he/ she reaches the age of 18.",
    source: HB,
    section: "Section A-3: Intermediate Licenses for Drivers Under 18",
    url: HB_URL,
  },
  {
    key: "gdl-dropout",
    quote:
      "If a student fifteen years old or older drops out of school, the " +
      "school is required to notify the Department of Safety which suspends " +
      "the student's driving privileges.",
    source: HB,
    section: "Section A-3: Intermediate Licenses for Drivers Under 18",
    url: HB_URL,
  },
  // --- Section B-2: Tennessee Safety Belt Laws ---
  {
    key: "belt-front-seat",
    quote:
      "Safety belts are required for ALL drivers and all passengers in the " +
      "FRONT seat, any time the vehicle is in motion.",
    source: HB,
    section: "Section B-2: Tennessee Safety Belt Laws",
    url: HB_URL,
  },
  {
    key: "crd-rear-facing",
    quote:
      "A child under one year old, or any child weighing less than 20 pounds, " +
      "must be in a child passenger restraint system (car seat) that is " +
      "facing the rear of the car.",
    source: HB,
    section: "Section B-2: Tennessee Safety Belt Laws",
    url: HB_URL,
  },
  {
    key: "crd-booster",
    quote:
      "Children who are four through eight years old and whose height is " +
      "under four feet, nine inches, must be in a belt positioning booster " +
      "seat system (child booster car seat) and wearing a seatbelt.",
    source: HB,
    section: "Section B-2: Tennessee Safety Belt Laws",
    url: HB_URL,
  },
  {
    key: "airbag-back-seat",
    quote: "CHILDREN ages 12 and under are safer in the back seat of a vehicle.",
    source: HB,
    section: "Section B-2: Tennessee Safety Belt Laws",
    url: HB_URL,
  },
  {
    key: "pickup-bed-under-6",
    quote:
      "It is illegal in Tennessee to allow any child under the age of 6 to " +
      "ride in the bed of a pickup truck.",
    source: HB,
    section: "Section B-2: Tennessee Safety Belt Laws",
    url: HB_URL,
  },
  // --- Chapter C-1: Defensive Driving and Other Precautions ---
  {
    key: "defensive-merge-gap",
    quote:
      "A minimum four-second gap is needed whenever you change lanes, enter a " +
      "roadway or when your lane merges with another traffic lane.",
    source: HB,
    section: "Chapter C-1: Defensive Driving and Other Precautions",
    url: HB_URL,
  },
  // --- Chapter C-2: Special Driving Conditions and Your Vehicle ---
  {
    key: "deer-dont-swerve",
    quote:
      "If a collision seems inevitable, don't swerve to avoid the animal; " +
      "your risk of personal injury may be greater if you do.",
    source: HB,
    section: "Chapter C-2: Special Driving Conditions and Your Vehicle",
    url: HB_URL,
  },
  {
    key: "epilepsy-six-months",
    quote:
      "In Tennessee, you may drive if you are under the care of a doctor and " +
      "have been seizure free for a minimum of six months.",
    source: HB,
    section: "Chapter C-2: Special Driving Conditions and Your Vehicle",
    url: HB_URL,
  },
  // --- Chapter C-3: Sharing the Road Safely ---
  {
    key: "ped-crosswalk-every-intersection",
    quote:
      "There is a crosswalk at every intersection, even if painted lines and " +
      "boundaries do not mark the crossing.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  {
    key: "ped-dont-walk-flashing",
    quote:
      "If you are in the middle of the street and the DON\"T WALK signal " +
      "starts flashing, continue walking. You will have time to complete the " +
      "crossing.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  {
    key: "bike-full-lane",
    quote:
      "The lane is too narrow for both a vehicle and a bicycle to safely " +
      "share the lane. In this case it is safest to let the bicycle take the " +
      "full lane.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  {
    key: "bike-lights-500",
    quote:
      "Tennessee law requires that a bicycle used at night must be equipped " +
      "with a lamp on the front that emits a white light visible from a " +
      "distance of at least 500 feet to the front",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  {
    key: "bike-lane-no-drive",
    quote:
      "If the lane is marked and signed (as shown at right) for bicycle use " +
      "only, drivers must NEVER use this lane as a turning lane, passing lane " +
      "or for parking.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  {
    key: "moto-full-lane",
    quote: "Motorcycles have the right to the use of the full lane.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  {
    key: "moto-grated-bridge",
    quote: "Metal or grated bridges cause a cycle to wobble much more than a car.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  {
    key: "truck-stopping-450",
    quote:
      "A car traveling at 55 MPH can stop in 240 feet however a truck " +
      "traveling at the same speed of 55 MPH, takes about 450+ feet to stop.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  // --- Section B-4: Rules of the Road ---
  {
    key: "truck-mirror-rule",
    quote:
      "An excellent point to remember is that if you cannot see the side " +
      "mirrors on the truck or bus you are following, then the truck or bus " +
      "driver CANNOT SEE YOU.",
    source: HB,
    section: "Section B-4: Rules of the Road",
    url: HB_URL,
  },
  // --- Chapter C-3: Sharing the Road Safely ---
  {
    key: "truck-no-zone-front",
    quote:
      "The area approximately up to 20 feet directly in front of a large " +
      "vehicle is considered a NO-ZONE.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  {
    key: "farm-wide-right",
    quote:
      "Farm machinery usually does not have turn signals and to make a right " +
      "turn, operators of farm machinery may first pull wide to the left, " +
      "then turn to the right.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  {
    key: "horseback-riders",
    quote:
      "You must drive at a reasonable speed, and at a reasonable distance " +
      "away from the horse. Do NOT sound your horn or \"rev\" your engine " +
      "loudly when approaching or passing a horse.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  {
    key: "work-zone-no-posting",
    quote:
      "The reduced speed limits are clearly posted within the work zone and " +
      "if there are no reduced speed limit postings, drivers should obey the " +
      "normal posted speed limit.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  // --- Section B-8: Driving Responsibilities ---
  {
    key: "points-adult-12",
    quote:
      "Adult drivers (18 years of age or older) who accumulate 12 or more " +
      "points within a 12-month period receive a notice of proposed " +
      "suspension.",
    source: HB,
    section: "Section B-8: Driving Responsibilities",
    url: HB_URL,
  },
  {
    key: "crash-notify-50",
    quote:
      "Drivers must immediately notify the local police department if the " +
      "crash occurs within a municipality, otherwise to the County Sheriff's " +
      "office or the nearest Tennessee Highway Patrol, of any crash involving " +
      "death, injury or property damage over fifty dollars ($50).",
    source: HB,
    section: "Section B-8: Driving Responsibilities",
    url: HB_URL,
  },
  {
    key: "crash-reportable-400",
    quote:
      "These include any crash within this state in which any person is " +
      "killed or injured, or in which damage to the property of any one " +
      "person, including oneself, is in excess of four hundred dollars " +
      "($400).",
    source: HB,
    section: "Section B-8: Driving Responsibilities",
    url: HB_URL,
  },
  {
    key: "crash-stop-immediately",
    quote:
      "The law requires drivers of vehicles involved in a crash to stop " +
      "immediately at the scene, or as close to the scene as possible without " +
      "obstructing traffic.",
    source: HB,
    section: "Section B-8: Driving Responsibilities",
    url: HB_URL,
  },
  {
    key: "crash-arrive-first",
    quote:
      "If you are not professionally trained to render aid, slowly continue " +
      "on in your vehicle so not to interfere with the arrival of police and " +
      "emergency medical and fire/rescue services.",
    source: HB,
    section: "Section B-8: Driving Responsibilities",
    url: HB_URL,
  },
  {
    key: "points-speeding-16-25",
    quote: "4 16 thru 25 m.p.h. in excess of speed zone Construction Zone: 5 pts",
    source: HB,
    section: "Section B-8: Driving Responsibilities",
    url: HB_URL,
  },
  {
    key: "points-speeding-46",
    quote: "8 46 m.p.h. and above in excess of speed zone Construction Zone: 8 pts",
    source: HB,
    section: "Section B-8: Driving Responsibilities",
    url: HB_URL,
  },
  {
    key: "points-speeding-1-5",
    quote: "1 1 thru 5 m.p.h. in excess of speed zone Construction Zone: 2 pts",
    source: HB,
    section: "Section B-8: Driving Responsibilities",
    url: HB_URL,
  },
  // --- Section B-7: Alcohol, Other Drugs and Driving ---
  {
    key: "dui-offender-id",
    quote:
      "If a person with a license revoked for DUI applies for a photo " +
      "identification license to carry during the period before his or her " +
      "license can be restored, the department is required to indicate on the " +
      "ID that the person is a DUI offender.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  {
    key: "dui-vehicle-seizure",
    quote:
      "The driver's vehicle will be seized if he/she has two DUI convictions " +
      "within five years AND both events happened after January 1997.",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  // --- Section B-8: Driving Responsibilities ---
  {
    key: "dui-restricted-bar",
    quote:
      "This restricted license is not an option for drivers who have a prior " +
      "conviction of: DUI or adult driving while impaired within 10 years; " +
      "Vehicular Homicide as the latest result of intoxication; Aggravated " +
      "Vehicular Homicide; Vehicular Assault.",
    source: HB,
    section: "Section B-8: Driving Responsibilities",
    url: HB_URL,
  },
  // --- Section B-7: Alcohol, Other Drugs and Driving ---
  {
    key: "dui-fourth-felony",
    quote: "4th or subsequent Conviction (is a Class E felony)",
    source: HB,
    section: "Section B-7: Alcohol, Other Drugs and Driving",
    url: HB_URL,
  },
  // --- Section B-3: Traffic Signs and Signals ---
  {
    key: "sign-low-clearance",
    quote:
      "LOW CLEARANCE Shows the distance from road surface to the bottom of a " +
      "bridge or overpass",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "sign-no-passing-triangle",
    quote:
      "A triangular No Passing Zone sign can also be used. These signs are " +
      "yellow or orange and placed on the left side of the roadway.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  {
    key: "sign-us-route",
    quote:
      "U.S. Route signs consists of black numerals on a white shield " +
      "surrounded by a black background without a border.",
    source: HB,
    section: "Section B-3: Traffic Signs and Signals",
    url: HB_URL,
  },
  // --- Section B-5: Interstate Driving ---
  {
    key: "park-interstate-shoulder",
    quote:
      "Parking on the shoulder of the interstate is prohibited except in " +
      "cases of emergency. You also cannot park any motor vehicle on the " +
      "paved and unpaved portions of the entrance and exit ramps, unless the " +
      "vehicle is disabled.",
    source: HB,
    section: "Section B-5: Interstate Driving",
    url: HB_URL,
  },
  // --- Chapter C-3: Sharing the Road Safely ---
  {
    key: "ped-walk-not-safe",
    quote:
      "The WALK signal and the green traffic light indicate that it's your " +
      "turn to cross the street, but they do NOT mean it is SAFE to cross.",
    source: HB,
    section: "Chapter C-3: Sharing the Road Safely",
    url: HB_URL,
  },
  // --- Types of Issued Licenses: Teen/Graduated Driver License ---
  {
    key: "gdl-level1-web",
    quote:
      "To drive with a GDL Level 1 - Learner Permit, you must have a licensed " +
      "driver 21 years of age or older in the front seat and you may not " +
      "drive between the hours of 10 p.m. and 6 a.m.",
    source: "Tennessee Department of Safety - Driver License Information",
    section: "Types of Issued Licenses: Teen/Graduated Driver License",
    url: "https://www.tn.gov/safety/driver-services/helpful-information/dlinfo.html",
  },
  {
    key: "gdl-level2-web",
    quote:
      "To drive with a GDL Level 2 - Intermediate Restricted License, you may " +
      "only have one passenger in the car with you and you may not drive " +
      "between the hours of 11 p.m. and 6 a.m.",
    source: "Tennessee Department of Safety - Driver License Information",
    section: "Types of Issued Licenses: Teen/Graduated Driver License",
    url: "https://www.tn.gov/safety/driver-services/helpful-information/dlinfo.html",
  },
  {
    key: "gdl-level3-web",
    quote:
      "To earn the GDL Level 3 - Intermediate Unrestricted License, drivers " +
      "must be 17 years old and must have held a GDL Level 2 - Intermediate " +
      "Restricted License for one year.",
    source: "Tennessee Department of Safety - Driver License Information",
    section: "Types of Issued Licenses: Teen/Graduated Driver License",
    url: "https://www.tn.gov/safety/driver-services/helpful-information/dlinfo.html",
  },
  // --- Drive Insured TN ---
  {
    key: "insurance-minimums",
    quote:
      "The required minimum limits of your liability car insurance are: " +
      "$25,000 for each injury or death per accident. $50,000 for total " +
      "injuries or deaths per accident. $25,000 for property damage per " +
      "accident.",
    source: "Tennessee Department of Revenue - Financial Responsibility Law",
    section: "Drive Insured TN",
    url: "https://www.tn.gov/revenue/title-and-registration/drive-insured-tennessee/why-you-should-have-insurance.html",
  },
];
