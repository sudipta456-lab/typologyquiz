import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Delaware bank - 571 of them: 555 from the
// Delaware Driver Manual, 13 from Title 21 of the Delaware Code, and 3
// from dmv.de.gov pages.
//
// Sources, and why there are three of them:
//
//  - The Delaware Driver Manual, July 2026, published by the Delaware Division
//    of Motor Vehicles. This is the book the DMV writes the Class D knowledge
//    test from - its own Rules Of The Road Test section says so - and it carries
//    most of what is quoted below. It is 152 pages and unusually complete for a
//    state manual: it prints the full speed table, the full parking-distance
//    list, the signalling distance and the crash-reporting thresholds, all of
//    which most states leave to their statute.
//  - Title 21 of the Delaware Code, published by the Delaware General Assembly,
//    for the handful of numbers the manual states incompletely. The largest is
//    the Move Over law: the manual tells you to "reduce to a safe speed" and
//    never says how much, while Section 4134(b)(2)b sets it at 20 mph below the
//    posted limit where the limit is 50 or above. The statute also supplies the
//    exact terms of Delaware's bicycle stop-sign yield (Section 4196A), which
//    the manual summarises in one line.
//  - Three dmv.de.gov pages, for the knowledge test's format. The manual
//    describes the four parts of the driver examination but never states how
//    many questions the Rules Of The Road Test has or what score passes; that
//    figure appears only on the Division's own Sample Written Test page.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. The
// normalisations applied to the extracted text, and to nothing else: curly
// quotes and apostrophes, en dashes and em dashes are folded to ASCII; runs of
// whitespace, including the line breaks the PDF inserts mid-sentence, collapse
// to single spaces; the section symbol is spelled out as "Section"; bullet
// glyphs become spaces so a stem and its list run together in the order they
// appear. No words are changed, dropped or reordered, and the sources' own
// slips are preserved - the manual's "Watch for slower speeds limits", its
// "When a sidewalk is provided, you must walk on the sideway", and the stray
// capitals in its Move Over diagram all stand as printed.
//
// A caution about the PDF. Most of the July 2026 manual extracts cleanly, but
// the front matter (pages 2-3), the roundabout and diverging-diamond page
// (86) and a few scattered lines carry an InDesign artefact that inserts a
// space after an fi/fl/ffi ligature and before some full stops - "traffi c",
// "10-15 mph .". No quote below runs through one of those: where a rule sits on
// an affected page the quote stops short of the artefact, and the roundabout
// entry-yield rule is taken from the clean page 85 text and the warning-sign
// caption on page 77 instead.

const MANUAL = "Delaware Driver Manual (Delaware Division of Motor Vehicles, July 2026)";
const MANUAL_URL = "https://dmv.de.gov/forms/driver_serv_forms/pdfs/dr_frm_manual.pdf";
/** Page-anchored deep link - the manual's printed page numbers match the PDF's. */
const p = (n: number) => `${MANUAL_URL}#page=${n}`;

export const delawareExcerpts: HandbookExcerpt[] = [
  {
    key: "signal-four-rules",
    quote:
      "Remember The Four Rules 1. RED - Stop 2. YELLOW - Prepare to stop " +
      "3. GREEN - Proceed with caution 4. Arrows apply to only the " +
      "direction indicated",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Understanding Traffic Signals",
    url: p(69),
  },
  {
    key: "red-where-stop",
    quote:
      "You must stop at the stop line, before the crosswalk, or before " +
      "entering the intersection should no stop line or crosswalk be " +
      "present.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Understanding Traffic Signals - Steady Red Light",
    url: p(69),
  },
  {
    key: "red-right-turn",
    quote:
      "Right turns on red are permissible after full stop, except when " +
      "prohibited by a posted sign or a steady red arrow is displayed.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Understanding Traffic Signals - Steady Red Light",
    url: p(69),
  },
  {
    key: "red-left-turn",
    quote:
      "Left turns on red are permissible after full stop from a one-way " +
      "street to another one-way street unless prohibited by a posted " +
      "sign or a steady red arrow is displayed.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Understanding Traffic Signals - Steady Red Light",
    url: p(69),
  },
  {
    key: "yellow-steady",
    quote:
      "This means that the signal is changing from green to red; prepare " +
      "to stop. If you are too close to stop safely, continue through the " +
      "intersection with care.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Understanding Traffic Signals - Steady Yellow Light",
    url: p(70),
  },
  {
    key: "green-yield",
    quote:
      "You must yield to pedestrians and vehicles already in the " +
      "intersection or adjacent crosswalk.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Understanding Traffic Signals - Steady Green Light",
    url: p(70),
  },
  {
    key: "green-caution",
    quote:
      "Steady Green Light Proceed with caution. When it is safe to " +
      "proceed, you may enter the intersection to go straight ahead or " +
      "turn unless a sign or additional signal prohibits the turn.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Understanding Traffic Signals - Steady Green Light",
    url: p(70),
  },
  {
    key: "flashing-red",
    quote:
      "Flashing red light means the same as a stop sign. You must come to " +
      "a complete stop. Proceed only when safe.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Understanding Traffic Signals - Flashing Red Light",
    url: p(70),
  },
  {
    key: "flashing-yellow",
    quote:
      "Flashing yellow light means slow down, be more aware, and proceed " +
      "with caution. Be careful of crossing intersection traffic, " +
      "controlled by a flashing red.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Understanding Traffic Signals - Flashing Yellow Light",
    url: p(70),
  },
  {
    key: "dark-signal",
    quote:
      "In the event that traffic signals are in place and no lighted " +
      "indication is visible to an approaching driver, the approaching " +
      "driver shall reduce speed and prepare to yield to other vehicles " +
      "that are in or approaching the intersection.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Understanding Traffic Signals - Dark Traffic Signals",
    url: p(70),
  },
  {
    key: "arrows-vs-lenses",
    quote:
      "The difference between round color lenses and arrows is that " +
      "arrows apply only to a specific direction, while round lenses " +
      "apply to all directions.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Arrows",
    url: p(71),
  },
  {
    key: "arrow-red-steady",
    quote:
      "A full stop is required when a steady red arrow is displayed. You " +
      "may not proceed in the direction of a steady red.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Arrows - Steady Red Arrow",
    url: p(71),
  },
  {
    key: "arrow-red-flashing",
    quote:
      "Turns are permitted in the direction of a flashing red arrow after " +
      "coming to a full stop.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Arrows - Flashing Red Arrow",
    url: p(71),
  },
  {
    key: "arrow-yellow-steady",
    quote:
      "A green arrow display has ended. If you are too close to stop " +
      "safely, continue thru the intersection with care.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Arrows - Steady Yellow Arrow",
    url: p(71),
  },
  {
    key: "arrow-yellow-flashing",
    quote:
      "The movement in the indicated direction is permitted after " +
      "yielding to opposing traffic and pedestrians.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Arrows - Flashing Yellow Arrow",
    url: p(71),
  },
  {
    key: "arrow-green-steady",
    quote:
      "Proceed with caution in the direction the arrow points. Remember " +
      "that you must yield to all pedestrians and vehicles already " +
      "lawfully in the intersection.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Arrows - Steady Green Arrow",
    url: p(71),
  },
  {
    key: "ped-signals-obey",
    quote:
      "Drivers must obey the vehicular traffic signals. Pedestrians must " +
      "obey the WALK and DON'T WALK signals or symbols.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Pedestrian Signals",
    url: p(72),
  },
  {
    key: "ped-walk",
    quote:
      "The WALK signal means the pedestrian may proceed but needs to be " +
      "alert for vehicles turning right or left across the crosswalk. " +
      "Drivers are required to yield to pedestrians who have a \"WALK\" " +
      "indicator.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Pedestrian Signals",
    url: p(72),
  },
  {
    key: "ped-flashing-dontwalk",
    quote:
      "The flashing DON'T WALK signal means that if the pedestrian has " +
      "started to cross the street, they should finish crossing as " +
      "rapidly as possible. If they have not started to cross, they " +
      "should not start.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Pedestrian Signals",
    url: p(72),
  },
  {
    key: "ped-steady-dontwalk",
    quote:
      "The steady DON'T WALK signal means that the pedestrian should not " +
      "start to cross the street at all.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Pedestrian Signals",
    url: p(72),
  },
  {
    key: "aps",
    quote:
      "APS lets pedestrians who are blind or visually impaired know when " +
      "the WALK interval begins and terminates.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Accessible Pedestrian Signals (APS)",
    url: p(73),
  },
  {
    key: "hawk",
    quote:
      "The HAWK signal is activated when a pedestrian presses the " +
      "crosswalk button, much like they do at a regular crosswalk, which " +
      "will activate the signal.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - High Intensity Activated Crosswalk (HAWK)",
    url: p(73),
  },
  {
    key: "rrfb",
    quote:
      "As a motorist, when you see these beacons flashing, slow down, " +
      "look for pedestrians and bicyclists, and yield as necessary.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Rectangular Rapid Flashing Beacon",
    url: p(73),
  },
  {
    key: "bike-signals",
    quote:
      "These signals have the same meaning as regular circular or arrow " +
      "indicators, but are applicable only to bicyclists in designated " +
      "bicycle lanes or paths.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycle Signals",
    url: p(74),
  },
  {
    key: "red-light-cameras",
    quote:
      "Drivers who run red lights are photographed, their vehicle tag " +
      "numbers are recorded, and citations are automatically sent via the " +
      "U.S. Postal Service.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Red Light Reinforcement Program",
    url: p(69),
  },
  {
    key: "beacons-supplement",
    quote:
      "The beacons supplementing warning signs and speed limit signs are " +
      "yellow. Those supplementing Stop and Do Not Enter signs are red.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Beacons Supplementing Signs",
    url: p(78),
  },
  {
    key: "overhead-lane-only",
    quote:
      "You must obey the overhead sign in your lane. When the word \"ONLY\" " +
      "is used, you must go in the direction the arrow points; there is " +
      "no option.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Overhead Lane Signals",
    url: p(75),
  },
  {
    key: "sign-shape-color",
    quote:
      "The shape and color of these signs give clues to the type of " +
      "information they provide. You must know highway signs by their " +
      "shape and color, as well as by the words, numbers, or figures on " +
      "them.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs",
    url: p(74),
  },
  {
    key: "sign-regulatory",
    quote:
      "Regulatory signs tell you of laws and regulations for traffic " +
      "direction, lane use, turning, speed, parking and other special " +
      "situations.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Regulatory Signs",
    url: p(74),
  },
  {
    key: "sign-regulatory-shape",
    quote:
      "These signs are square, rectangular, or have a special shape and " +
      "are usually white, red or black with black, red, white or green " +
      "letters or symbols.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Regulatory Signs",
    url: p(74),
  },
  {
    key: "sign-stop-octagon",
    quote:
      "The stop sign is the only 8-sided sign you will see on the " +
      "highway. It's red with white letters.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Regulatory Signs",
    url: p(74),
  },
  {
    key: "sign-stop-where",
    quote:
      "When you come to a stop sign, you must make a complete stop at the " +
      "stop line; or, if none, at the crosswalk; or if none, before " +
      "entering the intersection.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Regulatory Signs",
    url: p(74),
  },
  {
    key: "sign-stop-then-yield",
    quote:
      "Before starting you must yield the right-of-way to any vehicle or " +
      "pedestrian in or approaching the intersection. Be careful to look " +
      "for less visible vehicles such as bicycles, mopeds, and " +
      "motorcycles.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Regulatory Signs",
    url: p(74),
  },
  {
    key: "sign-yield-shape",
    quote:
      "You will see no other sign of this shape on the highway. You must " +
      "yield the right-of-way to any vehicle or pedestrian in or " +
      "approaching the intersection, stopping if necessary.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Regulatory Signs",
    url: p(74),
  },
  {
    key: "sign-yield-approach",
    quote:
      "Slow down as you approach a yield sign. Look to left and right. " +
      "Yield to pedestrians and vehicles performing lawful maneuvers or " +
      "crossing.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Regulatory Signs",
    url: p(74),
  },
  {
    key: "sign-do-not-enter",
    quote:
      "Watch out for and obey this sign. Also look for double solid lines " +
      "on the highway. You must not enter the street so marked.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Regulatory Signs",
    url: p(75),
  },
  {
    key: "sign-warning-shape",
    quote:
      "These signs are usually yellow with black lettering or symbols and " +
      "most are diamond shaped. These signs warn you to slow down and be " +
      "prepared to stop if necessary.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Warning Signs",
    url: p(75),
  },
  {
    key: "sign-school-pentagon",
    quote:
      "Five-sided sign black on yellow is used only to warn of schools " +
      "and school crossings. As you approach this sign, slow down and " +
      "watch out for children, stopping as necessary.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Warning Signs",
    url: p(75),
  },
  {
    key: "sign-rr-advance",
    quote:
      "Round sign black on yellow is used as an advance warning that you " +
      "are approaching a highway-rail intersection.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Warning Signs",
    url: p(75),
  },
  {
    key: "sign-advisory-speed",
    quote:
      "This is an advisory speed sign. It is the recommended speed for " +
      "its stretch of highway. Often posted under other warning signs.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Other Warning Signs",
    url: p(77),
  },
  {
    key: "sign-slippery-when-wet",
    quote: "Roadway slippery when wet. First half hour of rain most hazardous.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Other Warning Signs",
    url: p(76),
  },
  {
    key: "sign-roundabout-warning",
    quote:
      "Roundabout sign; reduce speed and yield to pedestrians and " +
      "vehicles already in the circle.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Other Warning Signs",
    url: p(77),
  },
  {
    key: "sign-deer",
    quote: "Deer crossing, be alert to deer on both sides of the road.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Other Warning Signs",
    url: p(77),
  },
  {
    key: "sign-zipper-merge",
    quote:
      "Drivers in merging lanes are expected to use both lanes to advance " +
      "to the lane reduction point and merge at the location, alternating " +
      "turns.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Other Warning Signs",
    url: p(77),
  },
  {
    key: "sign-guide",
    quote:
      "Most guide signs are rectangular (four-sided) in shape with white " +
      "letters on a green background.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Guide Signs",
    url: p(78),
  },
  {
    key: "sign-interstate",
    quote: "The interstate system has route markers in the shape of a shield.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Guide Signs",
    url: p(78),
  },
  {
    key: "sign-motorist-service",
    quote:
      "Motorist service signs usually have white letters on a rectangular " +
      "blue background.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Information signs",
    url: p(78),
  },
  {
    key: "sign-recreation",
    quote: "Recreation signs usually have white letters on a brown background.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Information signs",
    url: p(78),
  },
  {
    key: "sign-us-route",
    quote:
      "United States numbered routes are marked with a sign having black " +
      "numbers on a white background of the familiar U.S. Shield.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Guide Signs",
    url: p(78),
  },
  {
    key: "sign-state-route",
    quote:
      "State routes are marked with a sign having black letters on a " +
      "white circular background.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Guide Signs",
    url: p(78),
  },
  {
    key: "sign-no-parking",
    quote: "No stopping, standing or parking where posted.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Regulatory Signs",
    url: p(75),
  },
  {
    key: "sign-keep-right",
    quote: "Keep to the right of the traffic island or divider.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Regulatory Signs",
    url: p(75),
  },
  {
    key: "sign-international-turns",
    quote:
      "These are some of the international signs adopted in Delaware and " +
      "the other 49 states. They mean \"No Left Turn\", \"No Right Turn\", " +
      "and \"No U Turn.\"",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway Signs - Regulatory Signs",
    url: p(74),
  },
  {
    key: "sign-slow-moving-emblem",
    quote:
      "A \"Slow-Moving Vehicle\" emblem-a triangular, fluorescent and " +
      "reflective orange sign-is sometimes attached to farm tractors and " +
      "other slow-moving vehicles to warn approaching drivers.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Slow-Moving Vehicles",
    url: p(102),
  },
  {
    key: "sign-slow-moving-action",
    quote:
      "When you see this sign, slow down immediately and proceed with " +
      "caution.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Slow-Moving Vehicles",
    url: p(102),
  },
  {
    key: "sign-speed-limit-white",
    quote:
      "Speed limit signs have black letters and numerals on a white " +
      "rectangular background and are the legal allowable limits.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Speed Signs",
    url: p(94),
  },
  {
    key: "sign-advisory-yellow",
    quote:
      "Advisory speed signs have black letters on a yellow background and " +
      "often are shown under a warning sign.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Speed Signs",
    url: p(94),
  },
  {
    key: "sign-advisory-consequence",
    quote:
      "Although an advisory speed is not a specific speed limit, if you " +
      "exceed it and have a crash, it may be concluded that you violated " +
      "the general speed restriction and you could be subject to arrest.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Speed Signs",
    url: p(94),
  },
  {
    key: "sign-two-speed-signs",
    quote:
      "There are two speed signs: speed limit signs and advisory " +
      "(recommended) speed signs.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Speed Signs",
    url: p(94),
  },
  {
    key: "wz-orange",
    quote: "Traffic warning signs in work zones usually are orange.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Work Zones",
    url: p(79),
  },
  {
    key: "wz-double-fine",
    quote:
      "Watch for slower speeds limits. Fines for exceeding the speed " +
      "limit in a work zone are doubled.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - When Approaching Or Driving Through A Work Zone",
    url: p(79),
  },
  {
    key: "wz-lane-closure",
    quote:
      "When you see signs indicating lane closures ahead, prepare to move " +
      "from the closed lane.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - When Approaching Or Driving Through A Work Zone",
    url: p(79),
  },
  {
    key: "wz-no-weaving",
    quote:
      "Do not weave from lane to lane. Brake gradually to give drivers " +
      "behind you ample time to slow down. Keep up with the flow of " +
      "traffic.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - When Approaching Or Driving Through A Work Zone",
    url: p(79),
  },
  {
    key: "wz-warning-orange-diamond",
    quote:
      "Most signs used in highway and street work areas are orange and " +
      "diamond shaped.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Work Zones - Warning Signs",
    url: p(80),
  },
  {
    key: "wz-flaggers",
    quote:
      "Flaggers wear yellow-green vests, shirts, or jackets and use red " +
      "flags or stop/slow paddles to direct traffic through work zones.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Work Zones - Flaggers",
    url: p(80),
  },
  {
    key: "wz-channelizing",
    quote:
      "Barricades, drums, cones, and tubular markers are the most " +
      "commonly used devices to alert drivers of unusual or potentially " +
      "dangerous conditions on the highway and street work areas and " +
      "serve to guide drivers safely through a work zone.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Work Zones - Guiding Or Channelizing Devices",
    url: p(80),
  },
  {
    key: "wz-arrow-panels",
    quote:
      "Large flashing or sequencing arrow panels may be used in work " +
      "zones both day and night to guide drivers into certain traffic " +
      "lanes and to inform them that part of the road or street ahead of " +
      "them is closed.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Work Zones - Flashing Arrow Panels",
    url: p(80),
  },
  {
    key: "wz-regulatory",
    quote:
      "Speed limits may be reduced in work areas. The fine for violating " +
      "the speed limit in a work zone is much higher than usual speeding " +
      "fines.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Work Zones - Regulatory Signs",
    url: p(79),
  },
  {
    key: "wz-definition",
    quote:
      "A work zone is an area along a highway where construction, " +
      "maintenance or utility work is occurring.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Work Zones",
    url: p(78),
  },
  {
    key: "cell-handheld-ban",
    quote:
      "Delaware's law prohibits the use of hand-held cell phones and " +
      "texting while driving. Those who wish to talk on their cell phone " +
      "while driving must use a hands-free device.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Cell Phone/Hand-Held Electronic Device Use While Driving",
    url: p(81),
  },
  {
    key: "cell-dial-then-down",
    quote:
      "Drivers are permitted to dial a phone number or to " +
      "activate/deactivate their wireless equipment, and then they must " +
      "put the device down.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Cell Phone/Hand-Held Electronic Device Use While Driving",
    url: p(81),
  },
  {
    key: "cell-gdl-total-ban",
    quote:
      "NOTE: All cell phone or electronic device use, including " +
      "hands-free, is prohibited by drivers with a Graduated Driver " +
      "License (GDL).",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Cell Phone/Hand-Held Electronic Device Use While Driving",
    url: p(81),
  },
  {
    key: "cell-exemptions",
    quote:
      "Exemptions: Law enforcement, firefighter, EMS technician, or other " +
      "operators of authorized emergency vehicles in the performance of " +
      "their official duties. Anyone reporting an emergency.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Cell Phone/Hand-Held Electronic Device Use While Driving",
    url: p(81),
  },
  {
    key: "signal-300-feet",
    quote:
      "Delaware law requires drivers to signal by hand or turn-signals " +
      "when they intend to stop, turn, or change lanes.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Signaling",
    url: p(81),
  },
  {
    key: "signal-300-feet-rule",
    quote: "You must signal 300 feet prior to your intended action.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Signaling",
    url: p(81),
  },
  {
    key: "signal-300-and-3-sec",
    quote:
      "Try and signal at least three seconds before you make your move, " +
      "although Delaware law states you must signal for at least 300 feet " +
      "before turning.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Let Others Know What You Are Doing",
    url: p(122),
  },
  {
    key: "signal-hand-or-device",
    quote:
      "You must make a hand and arm signal or use your electrical " +
      "directional (turn) signal or both continuously for at least 300 " +
      "feet before turning.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Let Others Know What You Are Doing",
    url: p(122),
  },
  {
    key: "signal-high-speed-longer",
    quote:
      "You should signal for a much greater distance (longer time " +
      "interval) when traveling at a high speed. This is particularly " +
      "important when changing lanes on all express highways such as the " +
      "interstate system.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Let Others Know What You Are Doing",
    url: p(122),
  },
  {
    key: "signal-not-too-early",
    quote:
      "Be careful that you do not signal too early. If there are streets, " +
      "driveways, or entrances between you and where you want to turn, " +
      "wait until you have passed them to signal.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Let Others Know What You Are Doing",
    url: p(122),
  },
  {
    key: "signal-cancel",
    quote:
      "After you have made a turn or lane change, make sure your turn " +
      "signal is off. After small turns, the signals may not turn off by " +
      "themselves.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Let Others Know What You Are Doing",
    url: p(122),
  },
  {
    key: "signal-slowing-taps",
    quote:
      "If you are going to stop or slow down at a place where another " +
      "driver does not expect it, tap your brake pedal three or four " +
      "times quickly to let those behind you know you are about to slow " +
      "down.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Let Others Know What You Are Doing",
    url: p(122),
  },
  {
    key: "overtake-left-only",
    quote:
      "\"Delaware law states that vehicles shall overtake other vehicles " +
      "on the left only when at a safe distance and then only shall " +
      "return to the right when safely clear.\"",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Overtaking (Passing) Other Vehicles",
    url: p(81),
  },
  {
    key: "overtake-cyclist-3ft",
    quote:
      "When passing a cyclist, the law requires motorists to leave a " +
      "minimum of three feet of clearance at all times, and on multi-lane " +
      "roads to move to the adjacent lane whenever possible.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Overtaking (Passing) Other Vehicles",
    url: p(81),
  },
  {
    key: "overtaken-give-way",
    quote:
      "Vehicles being overtaken shall give way to the right and not " +
      "increase their speed until fully overtaken.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Overtaking (Passing) Other Vehicles",
    url: p(81),
  },
  {
    key: "bus-stop-either-direction",
    quote:
      "You must always stop before reaching any school bus from either " +
      "direction when it is stopped to load or unload school children " +
      "except when you are on the opposite side of a highway having four " +
      "or more lanes, even then proceed slowly.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Overtaking (Passing) Other Vehicles",
    url: p(81),
  },
  {
    key: "moveover-approaching",
    quote:
      "upon the immediate approach of an authorized emergency vehicle " +
      "making use of a siren or displaying alternately flashing red, red " +
      "and white, red and blue, or red, white and blue lights, every " +
      "other vehicle shall yield the right-of-way and shall immediately " +
      "drive to the right-hand edge or curb of the roadway",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Move Over Laws - Responding To Approaching Emergency Vehicles",
    url: p(82),
  },
  {
    key: "moveover-stationary",
    quote:
      "a person who drives an approaching vehicle shall: proceed with " +
      "caution and yield the right-of-way by making appropriate lane " +
      "changes when possible; or proceed with caution and reduce to a " +
      "safe speed if changing lanes would be impossible or unsafe.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Move Over Laws - Approaching Stationary Emergency Vehicles",
    url: p(82),
  },
  {
    key: "moveover-two-lane",
    quote:
      "Two-lane Roadway Slow down below the posted speed Limit until you " +
      "have completely Passed the stopped vehicle(s).",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Move Over Laws",
    url: p(82),
  },
  {
    key: "moveover-multi-lane",
    quote:
      "Multi-Lane Roadway Move over a lane from the stopped vehicle(s) " +
      "until you are safely past.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Move Over Laws",
    url: p(82),
  },
  {
    key: "moveover-20-under",
    quote:
      "Proceed with caution and reduce the speed of the vehicle to a safe " +
      "speed at least 20 miles per hour less than the posted speed limit, " +
      "if the speed limit is 50 miles per hour or above, while passing a " +
      "stationary vehicle described in this subsection, if changing lanes " +
      "would be impossible or unsafe.",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4134(b)(2)b - Operation of vehicles on approach of authorized emergency vehicles; stationary vehicles",
    url: "https://delcode.delaware.gov/title21/c041/sc01/index.html",
  },
  {
    key: "moveover-lane-change-4lane",
    quote:
      "yield the right-of-way by making a lane change into a lane not " +
      "adjacent to that of a stationary vehicle described in this " +
      "subsection, if possible with due regard to safety and traffic " +
      "conditions, if on a roadway having at least 4 lanes",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4134(b)(2)a - Operation of vehicles on approach of authorized emergency vehicles; stationary vehicles",
    url: "https://delcode.delaware.gov/title21/c041/sc01/index.html",
  },
  {
    key: "moveover-fine",
    quote:
      "For a first offense, a fine of up to $250, or community service " +
      "equivalent in value to the fine, to be calculated utilizing the " +
      "Delaware minimum wage.",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4134(e) - Operation of vehicles on approach of authorized emergency vehicles; stationary vehicles",
    url: "https://delcode.delaware.gov/title21/c041/sc01/index.html",
  },
  {
    key: "obey-officer",
    quote:
      "You must obey the instructions of a police officer even though " +
      "they may be contrary to laws, signs, signals, and markings; such " +
      "instructions are occasionally necessary to keep traffic moving " +
      "safely.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Traffic Control Laws - General Laws",
    url: p(83),
  },
  {
    key: "no-evading-signal",
    quote:
      "You must not try to evade a traffic signal or road sign by leaving " +
      "the road and traveling across private property.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Traffic Control Laws - General Laws",
    url: p(83),
  },
  {
    key: "all-users-subject",
    quote:
      "All users of Delaware's highways are subject to Delaware traffic " +
      "laws. Whether you are driving a motor vehicle, riding a bicycle, " +
      "propelling or guiding some other vehicle, riding an animal, or " +
      "walking, you must obey these laws.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Traffic Control Laws",
    url: p(83),
  },
  {
    key: "ens-number",
    quote:
      "Every grade crossing has an emergency dispatch number for " +
      "contacting the railroad to report problems with the crossing, " +
      "tracks or train travel.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Emergency Notification System (ENS)",
    url: p(83),
  },
  {
    key: "ens-blue-sign",
    quote:
      "The ENS number is typically located on a blue sign on the actual " +
      "cross buck or it can be found in the vicinity of the crossing.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Emergency Notification System (ENS)",
    url: p(83),
  },
  {
    key: "rr-never-beat-train",
    quote:
      "Railroad crossings have signs or signals to warn drivers. Never " +
      "try to beat a train across the tracks.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway-Rail Intersection Signs And Signals",
    url: p(83),
  },
  {
    key: "rr-room-far-side",
    quote:
      "Never start to cross if there is not room for your vehicle on the " +
      "far side, or if you will have to stop on the tracks. Do not block " +
      "the crossing.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway-Rail Intersection Signs And Signals",
    url: p(83),
  },
  {
    key: "rr-crossbuck-yield",
    quote:
      "A white, X-shaped sign or \"crossbuck\" with Railroad Crossing on it " +
      "is located at the railroad crossing. This sign has the same " +
      "meaning as a Yield sign. You must yield to crossing trains.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway-Rail Intersection Signs And Signals",
    url: p(84),
  },
  {
    key: "rr-flashing-lights",
    quote:
      "At some crossings, along with the crossbuck sign, you will see " +
      "side-by-side lights that will flash when a train is approaching. " +
      "When the lights are flashing, you must stop.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway-Rail Intersection Signs And Signals",
    url: p(84),
  },
  {
    key: "rr-no-driving-around-gates",
    quote:
      "At some crossings there is also a crossing gate that will lower " +
      "when a train is coming. Do not drive around the gate. Some " +
      "crossings also have a bell that will sound. Do not cross until the " +
      "bell has stopped.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway-Rail Intersection Signs And Signals",
    url: p(84),
  },
  {
    key: "rr-multiple-tracks",
    quote:
      "If you come to a railroad crossing without a number-of-tracks " +
      "sign, it is important that you always check if there is more than " +
      "one track before crossing.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Highway-Rail Intersection Signs And Signals",
    url: p(84),
  },
  {
    key: "rr-second-train",
    quote:
      "At crossings with more than one track, wait until the passing " +
      "train is well down the track before starting to cross. Another " +
      "train may be hidden by the one that just passed.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Scanning - Railroad crossings",
    url: p(118),
  },
  {
    key: "rr-always-expect",
    quote:
      "Do not assume that a train is not coming even if you have never " +
      "seen one at that crossing before. Always expect a train.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Scanning - Railroad crossings",
    url: p(118),
  },
  {
    key: "rr-stalled",
    quote:
      "If there is a train coming, get out and move away from the tracks. " +
      "Get as far away as you can, and run in the general direction the " +
      "train is coming from, so that debris from the collision will not " +
      "hit you.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Stalling On Railroad Tracks",
    url: p(138),
  },
  {
    key: "mark-edge-lines",
    quote:
      "Edge Lines - Solid white lines along the side of the road show you " +
      "where the outside edge of the travel lane is located.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Pavement Markings",
    url: p(84),
  },
  {
    key: "mark-white-lines",
    quote:
      "A broken white line between lanes of traffic means that you may " +
      "cross it to change lanes if it is safe to do so. A solid white " +
      "line between lanes of traffic means that you are discouraged from " +
      "changing lanes. Double solid white lines prohibit lane-changing.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Pavement Markings",
    url: p(84),
  },
  {
    key: "mark-white-same-direction",
    quote:
      "White lane marking - Multiple lanes of travel in the same " +
      "direction are separated by white lane markings.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Pavement Markings",
    url: p(84),
  },
  {
    key: "mark-stop-lines",
    quote:
      "Crosswalks and stop lines - When required to stop because of a " +
      "sign or signal, you must stop before your vehicle reaches the stop " +
      "line or if there is one, a crosswalk.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Pavement Markings",
    url: p(84),
  },
  {
    key: "mark-unmarked-crosswalks",
    quote:
      "Not all crosswalks are marked. Be alert for pedestrians when " +
      "crossing intersections.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Pavement Markings",
    url: p(85),
  },
  {
    key: "mark-yellow-lines",
    quote:
      "Yellow lane markings - Lines separating traffic moving in opposite " +
      "directions are yellow. A broken yellow line between opposing lanes " +
      "of traffic means that you may cross it to pass if it is safe to do " +
      "so.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Pavement Markings",
    url: p(85),
  },
  {
    key: "mark-yellow-solid-broken",
    quote:
      "Where there is both a solid and a broken yellow line between " +
      "opposing lanes of traffic, you may not pass if the solid yellow " +
      "line is on your side. If the broken line is on your side, you may " +
      "pass if it is safe to do so.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Pavement Markings",
    url: p(85),
  },
  {
    key: "mark-double-yellow",
    quote:
      "Two solid yellow lines between lanes of traffic means neither side " +
      "can pass. You may cross a solid yellow line to turn into a " +
      "driveway, if it is safe to do so.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Pavement Markings",
    url: p(85),
  },
  {
    key: "reversible-lanes",
    quote:
      "A green arrow means you can use the lane beneath it; a red \"X\" " +
      "means you cannot. A steady yellow \"X\" means that the use of the " +
      "lane is changing and you should move out of it as soon as it is " +
      "safe to do so.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Reversible Lanes",
    url: p(85),
  },
  {
    key: "reversible-double-broken",
    quote:
      "These lanes are usually marked by double-broken yellow lines. " +
      "Before you start driving in them, check to see which lanes you can " +
      "use at that time.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Reversible Lanes",
    url: p(85),
  },
  {
    key: "reserved-lanes-hov",
    quote:
      "\"HOV\" stands for \"High Occupancy Vehicles\" and indicates lanes " +
      "reserved for vehicles with more than one person in them. Signs say " +
      "how many people must be in the vehicle, as well as the days and " +
      "hours to which it applies. For example, \"HOV 3\" means there must " +
      "be at least three people in the vehicle.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Reserved Lanes",
    url: p(85),
  },
  {
    key: "reserved-lanes-transit",
    quote: "\"Transit\" or \"bus\" means the lane is for bus use only.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Reserved Lanes",
    url: p(85),
  },
  {
    key: "shared-center-lane",
    quote:
      "These center lanes are reserved for making left turns (or U-turns " +
      "when they are permitted) but can be used by vehicles traveling in " +
      "both directions.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Shared Center Lane",
    url: p(87),
  },
  {
    key: "shared-center-markings",
    quote:
      "These lanes are marked on each side by a solid yellow and broken " +
      "yellow lines.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Shared Center Lane",
    url: p(87),
  },
  {
    key: "roundabout-what",
    quote:
      "Roundabouts A roundabout is a circular intersection that moves " +
      "traffic counterclockwise around a central island.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Roundabouts",
    url: p(85),
  },
  {
    key: "roundabout-speed",
    quote:
      "Upon approaching the roundabout, stay to the right of the splitter " +
      "island and slow down to 10-15 mph",
    source: MANUAL,
    section: "Section Four - Rules of the Road - How to Use a Roundabout",
    url: p(86),
  },
  {
    key: "roundabout-exit",
    quote: "Look for your street and exit the roundabout",
    source: MANUAL,
    section: "Section Four - Rules of the Road - How to Use a Roundabout",
    url: p(86),
  },
  {
    key: "roundabout-left-turns",
    quote:
      "The design of a roundabout also reduces the need for direct left " +
      "turns, which are a major reason for intersection crashes, thereby " +
      "increasing the overall safety aspect of the intersection.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Roundabouts",
    url: p(86),
  },
  {
    key: "no-backing-travel-lane",
    quote:
      "General driving - Never back a vehicle in any travel lane except " +
      "to parallel park, or if necessary to exit a driveway. It is unsafe " +
      "to do so.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Rules - General driving",
    url: p(87),
  },
  {
    key: "missed-turn",
    quote:
      "If you miss your turn or exit, do not back up; go on to where you " +
      "can safely turn around.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Rules - General driving",
    url: p(87),
  },
  {
    key: "no-stopping-travel-lanes",
    quote:
      "Do not stop in travel lanes for any reason (confusion, breakdown, " +
      "letting out a passenger, etc.). Keep moving until you can safely " +
      "pull off the road.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Rules - General driving",
    url: p(87),
  },
  {
    key: "keep-right-except-pass",
    quote:
      "On a road with two or more lanes traveling in the same direction, " +
      "stay in the right lane except to pass. On a road with three or " +
      "more lanes traveling in the same direction, if there is a lot of " +
      "entering or exiting traffic, use the center travel lane.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Rules - General driving",
    url: p(87),
  },
  {
    key: "passing-left-lane",
    quote:
      "Passing - On multi-lane roads, the left-most lane is intended to " +
      "be used for passing slower vehicles.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Rules - Passing",
    url: p(87),
  },
  {
    key: "passing-right-left-turners",
    quote:
      "It is legal in Delaware to pass left-turning vehicles on the " +
      "right, however this is a very crash-prone situation and must be " +
      "accomplished with great caution.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Rules - Passing",
    url: p(87),
  },
  {
    key: "turning-lane-choice",
    quote:
      "Turning - Where there are no signs or lane markings to control " +
      "turning, you should turn from the lane that is closest to the " +
      "direction you want to go and turn into the lane closest to the one " +
      "you came from.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Rules - Turning",
    url: p(87),
  },
  {
    key: "turning-right-no-wide",
    quote:
      "On right turns, avoid swinging wide to the left before making the " +
      "turn.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Rules - Turning - Right turns",
    url: p(87),
  },
  {
    key: "turning-left-no-cut",
    quote:
      "When making a left turn, avoid cutting the corner so sharply that " +
      "you run into someone approaching from the left. However, be sure " +
      "to leave room for oncoming vehicles to turn left in front of you.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Rules - Turning - Left turns",
    url: p(88),
  },
  {
    key: "turning-multiple-lanes",
    quote:
      "Multiple lanes turning - If there are signs or lane markings that " +
      "allow for two or more turning lanes, stay in your lane during the " +
      "turn.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Rules - Turning - Multiple lanes turning",
    url: p(88),
  },
  {
    key: "median-crossings",
    quote:
      "Median Crossings - Pay attention to signs; if crossing is marked " +
      "for emergency vehicles only, it is illegal for you to cross there.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Rules - Turning - Median Crossings",
    url: p(88),
  },
  {
    key: "row-law-does-not-give",
    quote:
      "Motor vehicle laws of Delaware and other states do not give anyone " +
      "the right-of-way. The law describes who is to yield the " +
      "right-of-way.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(69),
  },
  {
    key: "row-rules-purpose",
    quote:
      "These rules tell who goes first and who must wait in different " +
      "traffic situations. You must do everything you can to prevent " +
      "striking a pedestrian or another vehicle, regardless of the " +
      "circumstances.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(88),
  },
  {
    key: "row-pedestrians-crossing",
    quote:
      "Drivers must yield where necessary to avoid striking pedestrians " +
      "who are crossing the road.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(88),
  },
  {
    key: "row-sidewalk-driveway",
    quote:
      "Drivers crossing a sidewalk entering or exiting a driveway, alley, " +
      "or parking lot must yield to pedestrians. It is illegal to drive " +
      "on a sidewalk except to cross it.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(88),
  },
  {
    key: "row-white-cane",
    quote:
      "Pedestrians using a guide dog or carrying a white cane have " +
      "absolute right-of-way. Do not use your horn as it could confuse or " +
      "frighten the blind pedestrian.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(88),
  },
  {
    key: "row-left-turn-yield",
    quote:
      "Drivers turning left must yield to oncoming vehicles going " +
      "straight ahead.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(88),
  },
  {
    key: "row-traffic-circle",
    quote:
      "Drivers entering a traffic circle or rotary must yield to drivers " +
      "already in the circle.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(88),
  },
  {
    key: "row-uncontrolled",
    quote:
      "At an intersection where there is no stop sign, yield sign, or " +
      "traffic signal, drivers should yield to vehicles coming from the " +
      "right. However, it would be safest to consider yielding to all " +
      "vehicles before entering.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(88),
  },
  {
    key: "row-four-way-stop",
    quote:
      "At a 4-way stop, the driver reaching the intersection first, goes " +
      "first (after coming to a complete stop). If more than one vehicle " +
      "arrives at the same time, the vehicle on the right goes first.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(88),
  },
  {
    key: "row-driveway-entering",
    quote:
      "Drivers entering a road from a driveway, alley, or roadside must " +
      "yield to vehicles already on the main road. This includes entering " +
      "from turn only lanes, where vehicles must yield, to include " +
      "stopping if necessary.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(88),
  },
  {
    key: "row-no-blocking",
    quote:
      "Drivers may not enter an intersection unless they can get through " +
      "it without having to stop. You should wait until traffic ahead " +
      "clears so that you are not blocking the intersection.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(89),
  },
  {
    key: "row-overtaking-yield",
    quote:
      "Drivers overtaking a vehicle traveling in the same traffic " +
      "direction must yield to that vehicle (even if the vehicle slows " +
      "down or comes to a stop).",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(89),
  },
  {
    key: "row-emergency-vehicle",
    quote:
      "You must yield the right-of-way to a police vehicle, fire engine, " +
      "ambulance, or other emergency vehicle using a siren, air horn, or " +
      "a red or blue flashing light. Pull over to the right edge of the " +
      "road or as near to the right as possible when you see or hear an " +
      "emergency vehicle approaching from any direction.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(89),
  },
  {
    key: "row-emergency-in-intersection",
    quote:
      "If you are in an intersection, drive through the intersection " +
      "before you pull over.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Right-Of-Way",
    url: p(89),
  },
  {
    key: "bus-yellow-lights",
    quote:
      "School buses have two overhead alternately flashing yellow lights " +
      "both front and rear. They will be activated approximately 10 " +
      "seconds prior to the overhead flashing red lights to warn drivers " +
      "of approaching vehicles that a stop to load or unload school " +
      "children is about to be made.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping For School Buses - Yellow Lights",
    url: p(89),
  },
  {
    key: "bus-yellow-anticipate",
    quote:
      "Approach a bus flashing these yellow lights with caution and " +
      "anticipate a stop. Children may be waiting for the bus or may be " +
      "running to board it.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping For School Buses - Yellow Lights",
    url: p(89),
  },
  {
    key: "bus-red-lights",
    quote:
      "The overhead alternately flashing red lights and stop arm will be " +
      "activated when the bus is stopped to pick up and discharge pupils. " +
      "You must not proceed until the red lights have stopped flashing, " +
      "and the stop arm has been retracted, then proceed cautiously.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping For School Buses - Red Lights",
    url: p(89),
  },
  {
    key: "bus-lane-diagram",
    quote:
      "Less Than 4 Roadway Lanes BOTH Directions Must STOP 4 or More " +
      "Roadway Lanes Only Traffic Following Must STOP",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping For School Buses",
    url: p(89),
  },
  {
    key: "bus-registered-owner",
    quote:
      "If any vehicle is witnessed by a police officer, school bus " +
      "operator, or school crossing guard to be in violation of the " +
      "school bus stop law and the operator is not otherwise apparent, it " +
      "shall be assumed that the person in whose name the vehicle is " +
      "registered committed such violation.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Identification of Violators",
    url: p(90),
  },
  {
    key: "bus-first-offence-fine",
    quote:
      "Whoever is convicted of passing a stopped school bus with overhead " +
      "and stop arm red lights flashing shall, for the first offense, be " +
      "fined not less than $115.00 nor more than $230.00, or imprisoned " +
      "not less than 30 days nor more than 60 days, or both.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Penalties and Suspension of License for Passing a Stopped School Bus with Red Lights Flashing",
    url: p(90),
  },
  {
    key: "bus-suspension",
    quote:
      "for a period of one month for a first offense, six months for a " +
      "second offense, or one year for a third or further subsequent " +
      "violation occurring within three years of a prior violation.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Penalties and Suspension of License for Passing a Stopped School Bus with Red Lights Flashing",
    url: p(90),
  },
  {
    key: "bus-first-no-driving",
    quote:
      "No driving authority is permitted during the one month suspension " +
      "for a first offense.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Penalties and Suspension of License for Passing a Stopped School Bus with Red Lights Flashing",
    url: p(90),
  },
  {
    key: "bus-statute-stop",
    quote:
      "the driver of any vehicle approaching the school bus from the " +
      "front or from the rear shall stop before passing the bus and " +
      "remain stopped until such bus begins to move or no longer has the " +
      "red stop lamps activated. On roadway or roadways with 4 or more " +
      "lanes, the driver approaching from the front shall not stop.",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4166(d)(1) - Overtaking and passing school bus; stop signal devices",
    url: "https://delcode.delaware.gov/title21/c041/sc03/index.html",
  },
  {
    key: "bus-statute-amber",
    quote:
      "The amber warning lamps shall be activated approximately 10 " +
      "seconds prior to the red stop lamps to give motorists advance " +
      "notice that the bus is preparing to stop or has stopped to pick up " +
      "and discharge pupils.",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4166(b)(2)a - Overtaking and passing school bus; stop signal devices",
    url: "https://delcode.delaware.gov/title21/c041/sc03/index.html",
  },
  {
    key: "bus-statute-everywhere",
    quote:
      "the provisions of this subsection shall apply upon highways and " +
      "elsewhere throughout the State.",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4166(d)(2) - Overtaking and passing school bus; stop signal devices",
    url: "https://delcode.delaware.gov/title21/c041/sc03/index.html",
  },
  {
    key: "park-leaving-vehicle",
    quote:
      "Parking and leaving your vehicle - When parking and leaving your " +
      "vehicle on a highway or street, you must stop the engine, lock the " +
      "ignition, remove the key, and set the brakes.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - General Parking Rules",
    url: p(91),
  },
  {
    key: "park-parallel-12-inches",
    quote:
      "Parallel Parking - When parking on a two-way highway you must park " +
      "parallel to and within 12 inches of the curb or edge of the " +
      "highway.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - General Parking Rules",
    url: p(91),
  },
  {
    key: "park-parallel-finish",
    quote:
      "Straighten your wheels and pull forward to center the car in the " +
      "parking space. Your car should be no more than 12 inches from the " +
      "curb.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - General Parking Rules",
    url: p(91),
  },
  {
    key: "park-keys-running",
    quote:
      "(It is against the law to leave keys in a running, unattended " +
      "vehicle.)",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - General Parking Rules",
    url: p(91),
  },
  {
    key: "park-one-way-left",
    quote:
      "To park by the left-hand curb on a one-way street, follow the same " +
      "directions but reverse right and left in the instructions.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - General Parking Rules",
    url: p(91),
  },
  {
    key: "park-manual-gear",
    quote:
      "If your car has a manual transmission, leave it in low gear when " +
      "parked and headed uphill. Leave it in reverse when parked and " +
      "headed downhill.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - General Parking Rules",
    url: p(91),
  },
  {
    key: "park-handicapped",
    quote:
      "Handicapped Parking - It is illegal to park in any parking space " +
      "designated for \"Handicapped Parking\" unless your vehicle has a " +
      "handicapped license plate displayed on the rear of the vehicle or " +
      "a handicapped parking ID card displayed hanging from the rearview " +
      "mirror.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - General Parking Rules",
    url: p(91),
  },
  {
    key: "park-lights-1000ft",
    quote:
      "Parking Lights - When you park a vehicle on the shoulder or side " +
      "of any highway from sunset to sunrise or when light is " +
      "insufficient to see persons or objects 1000 feet away, you must " +
      "turn on your parking lights (or 4-way flashers when vehicle is so " +
      "equipped).",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - General Parking Rules",
    url: p(91),
  },
  {
    key: "park-no-one-side-flash",
    quote:
      "Turn signal lights shall not be flashed on one side only of a " +
      "parked vehicle.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - General Parking Rules",
    url: p(91),
  },
  {
    key: "park-on-highway",
    quote:
      "Parking on Highways - You must never park on the paved or traveled " +
      "part of any highway outside of a business or residence unless " +
      "vehicle is disabled and cannot be moved. Pull off to the right as " +
      "far as possible.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - Parking on Highways",
    url: p(92),
  },
  {
    key: "park-hill",
    quote:
      "Parking on Hill - When headed downhill you must turn your front " +
      "wheels toward curb or edge of road. When headed uphill, and there " +
      "is a curb, you must turn your front wheels away from curb and " +
      "bring near-side front wheel into contact with curb.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - Parking on Hill",
    url: p(92),
  },
  {
    key: "park-hill-no-curb",
    quote:
      "When headed uphill and there is no curb, you must turn your front " +
      "wheels toward edge of highway. It is also wise to leave your " +
      "vehicle in gear.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - Parking on Hill",
    url: p(92),
  },
  {
    key: "park-door-opening",
    quote:
      "Opening Door of Parked Vehicle - You must never open the door of a " +
      "vehicle so as to impede the flow of traffic or endanger any person " +
      "or vehicle. Instead, use the door on the curb side.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - Opening Door of Parked Vehicle",
    url: p(92),
  },
  {
    key: "park-door-cyclists",
    quote:
      "Be especially aware of oncoming bicyclists; they may be severely " +
      "injured by a collision with a car door.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Parking - Opening Door of Parked Vehicle",
    url: p(92),
  },
  {
    key: "park-violations-intro",
    quote:
      "Unless otherwise posted, ordered to do so by a police officer, or " +
      "to avoid a crash, you must not stop or park your vehicle in any of " +
      "the following places even if someone is left in the car:",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping And Parking Violations",
    url: p(92),
  },
  {
    key: "park-crosswalk-20",
    quote:
      "In an intersection, on a crosswalk, or within 20 feet of a " +
      "crosswalk at an intersection.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping And Parking Violations",
    url: p(92),
  },
  {
    key: "park-hydrant-15",
    quote: "Within 15 feet of a fire hydrant.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping And Parking Violations",
    url: p(92),
  },
  {
    key: "park-fire-station",
    quote:
      "Within 20 feet of driveway entrance to any fire station or on the " +
      "opposite side of the street within 75 feet of an entrance when " +
      "signs are posted.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping And Parking Violations",
    url: p(92),
  },
  {
    key: "park-stop-sign-30",
    quote:
      "Within 30 feet of any flashing beacon, stop sign, or traffic " +
      "signal.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping And Parking Violations",
    url: p(93),
  },
  {
    key: "park-safety-zone-30",
    quote:
      "Between a safety zone or island and the adjacent curb, or within " +
      "30 feet of end of safety zone or island unless otherwise posted.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping And Parking Violations",
    url: p(93),
  },
  {
    key: "park-railroad-50",
    quote: "Within 50 feet of a railroad crossing unless otherwise posted.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping And Parking Violations",
    url: p(93),
  },
  {
    key: "park-yellow-curb",
    quote:
      "Whenever a curb is painted yellow or a yellow line is placed at " +
      "the edge of a roadway.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping And Parking Violations",
    url: p(92),
  },
  {
    key: "park-sidewalk-driveway",
    quote:
      "On a sidewalk. In front of a public or private road, driveway, or " +
      "alley.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping And Parking Violations",
    url: p(92),
  },
  {
    key: "park-bridge-tunnel",
    quote: "On any bridge or elevated structure on a highway or in a tunnel.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping And Parking Violations",
    url: p(93),
  },
  {
    key: "park-roadway-side",
    quote: "On the roadway side of any vehicle stopped or parked at the curb.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping And Parking Violations",
    url: p(93),
  },
  {
    key: "park-median",
    quote:
      "In the area between roadways of a divided highway, including " +
      "crossovers. In any designated fire lane.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Stopping And Parking Violations",
    url: p(93),
  },
  {
    key: "speed-two-rules",
    quote:
      "Delaware traffic laws provide both a general speed restriction and " +
      "specific speed limits. You must obey both.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Speed",
    url: p(93),
  },
  {
    key: "speed-general-restriction",
    quote:
      "You must not drive on a Delaware highway at a speed greater than " +
      "is reasonable under existing conditions. This means that it is not " +
      "always lawful to drive as fast as the posted speed limit.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Speed Restriction",
    url: p(93),
  },
  {
    key: "speed-always-control",
    quote:
      "Remember that you must always control the speed of your vehicle to " +
      "avoid hitting any person, vehicle, or other conveyance no matter " +
      "what the weather conditions, traffic density or your urgency may " +
      "be.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - General Speed Restriction",
    url: p(93),
  },
  {
    key: "speed-table",
    quote:
      "School zones* 20 miles per hour Business districts 25 miles per " +
      "hour Residential districts 25 miles per hour Two-lane roads 50 " +
      "miles per hour Divided roads & roads having four or more lanes 55 " +
      "miles per hour",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Speed Limits",
    url: p(93),
  },
  {
    key: "speed-never-exceed-posted",
    quote:
      "Under emergency conditions, the speed limits below may be changed. " +
      "The driver must never exceed the posted limit.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Speed Limits",
    url: p(93),
  },
  {
    key: "speed-reduced-conditions",
    quote:
      "Whenever any of the above speed limits are unsafe for conditions, " +
      "they may be reduced to lower speed limits. Signs may be placed " +
      "along the highway showing the speed limit in such conditions.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Speed Limits",
    url: p(94),
  },
  {
    key: "speed-minimum",
    quote:
      "You must not drive a motor vehicle at such a slow speed as to " +
      "impede normal and reasonable movement of traffic, except when " +
      "necessary for safety or compliance with the law.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Minimum Speed",
    url: p(94),
  },
  {
    key: "speed-minimum-posted",
    quote:
      "You must obey posted minimum speed limits, except when weather or " +
      "other conditions make it unsafe to do so.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Minimum Speed",
    url: p(94),
  },
  {
    key: "speed-ideal-conditions",
    quote:
      "Remember, speed limits are posted for ideal conditions. If the " +
      "road is wet or icy, if you cannot see well, or if traffic is " +
      "heavy, then you must slow down.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - How Well Can You See? - Speed Limits",
    url: p(127),
  },
  {
    key: "speed-ticket-under-limit",
    quote:
      "Keep in mind even if you are driving under the posted speed limit, " +
      "you can get a ticket for traveling too fast during unsafe " +
      "conditions.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - How Well Can You See? - Speed Limits",
    url: p(127),
  },
  {
    key: "speed-statute-limits",
    quote:
      "25 miles per hour in any business district; (2) 25 miles per hour " +
      "in any residential district; (3) 20 miles per hour at all school " +
      "zones where 20 mph regulatory signs are posted and state the time " +
      "periods or conditions during which the speed limit is in effect",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4169(a) - Specific speed limits; penalty",
    url: "https://delcode.delaware.gov/title21/c041/sc08/index.html",
  },
  {
    key: "speed-statute-lanes",
    quote:
      "50 miles per hour on 2-lane roadways; (5) 55 miles per hour on " +
      "4-lane roadways and on divided roadways.",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4169(a)(4)-(5) - Specific speed limits; penalty",
    url: "https://delcode.delaware.gov/title21/c041/sc08/index.html",
  },
  {
    key: "speed-statute-general",
    quote:
      "No person shall drive a vehicle on a highway at a speed greater " +
      "than is reasonable and prudent under the conditions and without " +
      "having regard to the actual and potential hazards then existing.",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4168(a) - General speed restrictions",
    url: "https://delcode.delaware.gov/title21/c041/sc08/index.html",
  },
  {
    key: "speed-statute-special",
    quote:
      "drive at an appropriate speed when approaching and crossing an " +
      "intersection or railway grade crossing, when approaching and going " +
      "around a curve, when approaching a hill crest, when traveling upon " +
      "any narrow or winding roadway",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4168(b) - General speed restrictions",
    url: "https://delcode.delaware.gov/title21/c041/sc08/index.html",
  },
  {
    key: "ped-driver-must-stop",
    quote:
      "Please Note: It is imperative to be aware of your surroundings as " +
      "a driver and stop if a pedestrian is actively crossing in a marked " +
      "or unmarked crosswalk.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Other Highway Users - Pedestrians",
    url: p(94),
  },
  {
    key: "ped-standing-sidewalk",
    quote:
      "You may proceed with caution if a pedestrian is standing/stopped " +
      "safely on the sidewalk as required by law.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Other Highway Users - Pedestrians",
    url: p(94),
  },
  {
    key: "ped-horn-not-substitute",
    quote:
      "Be alert for pedestrians walking along or crossing the road; " +
      "lightly tap horn if necessary. Sounding the horn is not considered " +
      "a substitute for yielding to pedestrians.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Your Responsibility As A Driver",
    url: p(94),
  },
  {
    key: "ped-disabilities",
    quote:
      "Drivers should be alert for individuals and must yield the " +
      "right-of-way to pedestrians who are hearing impaired or have " +
      "physical disabilities that require use of canes, crutches, " +
      "walkers, guide dogs/service animals, wheelchairs, or motorized " +
      "scooters.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Your Responsibility As A Driver",
    url: p(94),
  },
  {
    key: "ped-yield-crosswalk",
    quote:
      "You must yield the right-of-way to any pedestrian within a " +
      "crosswalk, stopping if necessary.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Your Responsibility As A Driver",
    url: p(95),
  },
  {
    key: "ped-no-passing-stopped",
    quote:
      "You must not pass a vehicle stopped to allow a pedestrian to cross " +
      "the highway.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Your Responsibility As A Driver",
    url: p(95),
  },
  {
    key: "ped-safety-zone",
    quote:
      "You must not drive through a pedestrian safety zone or block a " +
      "crosswalk.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Your Responsibility As A Driver",
    url: p(94),
  },
  {
    key: "ped-school-residential",
    quote:
      "You should be especially watchful for children near schools and in " +
      "residential districts. Do not speed in school zones.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Your Responsibility As A Driver",
    url: p(95),
  },
  {
    key: "ped-walk-facing-traffic",
    quote:
      "When there is no sidewalk, walk on the shoulder facing oncoming " +
      "traffic as far away from the road as possible.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Your Responsibility As A Pedestrian",
    url: p(95),
  },
  {
    key: "ped-light-at-night",
    quote:
      "It is illegal to walk along any roadway at night without carrying " +
      "a light or reflector. You should wear light-colored clothing if " +
      "possible.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Your Responsibility As A Pedestrian",
    url: p(95),
  },
  {
    key: "ped-no-diagonal",
    quote:
      "You must not cross an intersection diagonally except when " +
      "authorized by traffic-control signals.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Your Responsibility As A Pedestrian",
    url: p(95),
  },
  {
    key: "ped-has-row-when",
    quote:
      "Pedestrians have the right-of-way: When crossing a highway at an " +
      "intersection and the green light or walk signal is in their favor. " +
      "When crossing within a marked or unmarked crosswalk.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Who Must Yield To Pedestrians",
    url: p(95),
  },
  {
    key: "ped-must-yield-when",
    quote:
      "Pedestrians must yield the right-of-way: When crossing a highway " +
      "other than within a marked crosswalk or an unmarked crosswalk at " +
      "an intersection. When crossing the roadway where a pedestrian " +
      "tunnel or overhead crossing is provided.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Who Must Yield To Pedestrians",
    url: p(95),
  },
  {
    key: "ped-fatalities",
    quote: "From 2021-2023, there were 89 pedestrian fatalities.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Other Highway Users - Pedestrians",
    url: p(94),
  },
  {
    key: "bike-all-roads",
    quote:
      "In fact, cyclists have the right to use all Delaware roads except " +
      "limited access highways.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles",
    url: p(96),
  },
  {
    key: "bike-friendly-act-lane-change",
    quote:
      "This law requires drivers to change lanes (including when there is " +
      "a double yellow line) when passing bicycles if the travel lanes " +
      "are too narrow for sharing. Motorists must give bicyclists at " +
      "least three (3) feet of room when passing.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycle Friendly Delaware Act",
    url: p(96),
  },
  {
    key: "bike-friendly-act-horn",
    quote:
      "Motorists are forbidden from honking their horn at bicyclists " +
      "unless there is an imminent danger.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycle Friendly Delaware Act",
    url: p(96),
  },
  {
    key: "bike-friendly-act-yield",
    quote:
      "Bicyclists are now allowed to yield at stop signs, after carefully " +
      "looking for other vehicles and no longer required to stop.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycle Friendly Delaware Act",
    url: p(96),
  },
  {
    key: "bike-friendly-act-right",
    quote:
      "Bicyclists should ride to the right of the roadway as their safety " +
      "allows.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycle Friendly Delaware Act",
    url: p(96),
  },
  {
    key: "bike-box",
    quote:
      "A bike box is a designated area at the head of a traffic lane at " +
      "intersections that provides bicyclists with a safe way to turn and " +
      "a visible way to get ahead of traffic.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bike Box",
    url: p(96),
  },
  {
    key: "bike-pass-double-yellow",
    quote:
      "In order to pass a bicycle safely, the law in Delaware requires " +
      "that you completely change lanes, including crossing a " +
      "double-yellow center line, if the travel lane you are traveling in " +
      "is too narrow for the vehicle you are driving and the bicycle you " +
      "want to pass to travel safely side by side within the lane.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles - Your Responsibility As A Driver",
    url: p(97),
  },
  {
    key: "bike-wide-lane-3ft",
    quote:
      "the law permits you to pass a bicycle without changing lanes but " +
      "requires that you (a) slow down when doing so and (b) leave a " +
      "minimum of three feet of clearance at all times between your " +
      "vehicle and the bicycle.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles - Your Responsibility As A Driver",
    url: p(97),
  },
  {
    key: "bike-two-lane-wait",
    quote:
      "If the road you are driving on has only two lanes and you are " +
      "unable to pass safely because of lack of visibility and/or " +
      "oncoming traffic, follow at a safe distance and wait until it is " +
      "safe before passing.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles - Your Responsibility As A Driver",
    url: p(97),
  },
  {
    key: "bike-horn-illegal",
    quote:
      "It is illegal to blow your horn at a cyclist except in the very " +
      "narrow circumstance when you are warning the cyclist of an " +
      "imminent collision.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles - Your Responsibility As A Driver",
    url: p(97),
  },
  {
    key: "bike-dont-turn-in-front",
    quote:
      "Don't pass a cyclist only to turn directly in front of them. When " +
      "in doubt, wait.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles - Your Responsibility As A Driver",
    url: p(97),
  },
  {
    key: "bike-helmet-under-18",
    quote:
      "All persons under the age of 18 must wear a properly fitted and " +
      "fastened bicycle helmet.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles - Your Responsibility As An Adult Cyclist",
    url: p(99),
  },
  {
    key: "bike-parent-responsible",
    quote:
      "Under the law, the parent (or guardian) can be held responsible if " +
      "a child, while bicycling, violates any traffic law.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Your Responsibility As The Parent of A Youthful Cyclist",
    url: p(98),
  },
  {
    key: "bike-night-lights",
    quote:
      "You must not ride at night unless you have a white headlight " +
      "visible for 500 feet, a red rear reflector visible for 600 feet, " +
      "and either reflective material visible from both sides for 600 " +
      "feet or a lighted lamp visible from both sides for 500 feet.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles - Your Responsibility As An Adult Cyclist",
    url: p(98),
  },
  {
    key: "bike-no-headset",
    quote: "You must not wear a headset covering both ears.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles - Your Responsibility As An Adult Cyclist",
    url: p(98),
  },
  {
    key: "bike-one-hand",
    quote:
      "When riding a bicycle, you must keep at least one hand on the " +
      "handle bars at all times.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles - Your Responsibility As An Adult Cyclist",
    url: p(98),
  },
  {
    key: "bike-no-wrong-way",
    quote: "You must not ride on a highway facing traffic.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles - Your Responsibility As An Adult Cyclist",
    url: p(98),
  },
  {
    key: "bike-stop-signs-major",
    quote:
      "You must stop at all stop signs located at intersections with " +
      "major (3 travel lanes or more) roads; or if a motor vehicle is " +
      "stopped at the stop sign you are approaching; or if required for " +
      "safety because of heavy traffic.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles - Stop Signs",
    url: p(99),
  },
  {
    key: "bike-stop-signs-minor",
    quote:
      "At stop signs controlling the intersection with minor roads and if " +
      "there is no stopped vehicle at the sign you are approaching, " +
      "however, you may treat the stop sign as a yield sign",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Bicycles - Stop Signs",
    url: p(99),
  },
  {
    key: "bike-shared-lane-marking",
    quote:
      "The shared lane marking may be used on some roadways to assist " +
      "bicyclists in lateral positioning, to encourage safe passing of " +
      "cyclists by motorists, to reduce the incidence of wrong way " +
      "bicycling, and as a reminder that the lane may be legally used by " +
      "both cyclists and motor vehicles.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Shared Lane Marking",
    url: p(99),
  },
  {
    key: "bike-statute-3lanes",
    quote:
      "A bicycle operator approaching a stop sign at an intersection with " +
      "a roadway having 3 or more lanes for moving traffic shall come to " +
      "a complete stop before entering the intersection.",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4196A(a) - Bicycle approaching or entering intersection",
    url: "https://delcode.delaware.gov/title21/c041/sc12/index.html",
  },
  {
    key: "bike-statute-2lanes",
    quote:
      "A bicycle operator approaching a stop sign at an intersection with " +
      "a roadway having 2 or fewer lanes for moving traffic shall reduce " +
      "speed and, if required for safety, stop before entering the " +
      "intersection.",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4196A(c) - Bicycle approaching or entering intersection",
    url: "https://delcode.delaware.gov/title21/c041/sc12/index.html",
  },
  {
    key: "bike-statute-vehicle-stopped",
    quote:
      "A bicycle operator approaching a stop sign at an intersection " +
      "where a vehicle is stopped in the roadway at the same stop sign " +
      "shall come to a complete stop before entering the intersection.",
    source: "Delaware Code Title 21 (Delaware General Assembly)",
    section: "Delaware Code Title 21 Section 4196A(b) - Bicycle approaching or entering intersection",
    url: "https://delcode.delaware.gov/title21/c041/sc12/index.html",
  },
  {
    key: "moto-half-crashes",
    quote:
      "Nationally, almost half of all motorcycle crashes involve other " +
      "motor vehicles. In collisions with motorcycles, drivers often say " +
      "they never saw the motorcycle.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With Motorcycles",
    url: p(99),
  },
  {
    key: "moto-width",
    quote:
      "Motorcycles are only about two feet wide compared with the five- " +
      "to six-foot width of an automobile.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With Motorcycles",
    url: p(99),
  },
  {
    key: "moto-left-turns",
    quote:
      "Left turns in front of an oncoming motorcyclist account for a " +
      "large percentage of car/cycle injury-producing crashes.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With Motorcycles",
    url: p(100),
  },
  {
    key: "moto-signals-not-cancel",
    quote:
      "Turn signals are not automatically self-canceling on most " +
      "motorcycles. At times, the rider may forget to turn the signal " +
      "off.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With Motorcycles",
    url: p(100),
  },
  {
    key: "moto-following-2-4",
    quote:
      "Following distance behind the motorcyclist should be at a two " +
      "second count when traveling at speeds under 40 mph and a four " +
      "second count for speeds above 40 mph.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With Motorcycles",
    url: p(100),
  },
  {
    key: "moto-full-lane",
    quote:
      "Motorcycles are entitled to the same full lane width as all other " +
      "vehicles.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With Motorcycles",
    url: p(100),
  },
  {
    key: "moto-never-share-lane",
    quote:
      "Never move into the same lane alongside a motorcycle even if the " +
      "lane is wide and the cyclist is riding far to one side. It is not " +
      "only illegal, it is extremely hazardous.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With Motorcycles",
    url: p(100),
  },
  {
    key: "moto-crosswinds",
    quote:
      "Cross winds can be hazardous to motorcyclists. Windy conditions " +
      "can actually move a motorcycle out of its lane of travel.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With Motorcycles",
    url: p(100),
  },
  {
    key: "moto-road-surfaces",
    quote:
      "Gravel, debris, pavement seams, small animals, and even manhole " +
      "covers may cause the motorcyclist to change speed or direction.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With Motorcycles",
    url: p(100),
  },
  {
    key: "moto-helmet-carry",
    quote:
      "You must always have in your possession approved eye protection " +
      "and an approved helmet for yourself and your passenger when " +
      "operating a motorcycle.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Motorcycle Operation And License Endorsements",
    url: p(101),
  },
  {
    key: "moto-helmet-wear",
    quote:
      "You must wear this equipment if you are operating with a learner's " +
      "permit (including taking the road test), and if you are under 19 " +
      "years of age.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Motorcycle Operation And License Endorsements",
    url: p(101),
  },
  {
    key: "moto-new-endorsement-2yr",
    quote:
      "Any person who obtains a new endorsement for a motorcycle, or " +
      "someone riding with the newly endorsed person, is required by law " +
      "to wear a helmet and eye protection for the first 2 years after " +
      "the newly endorsed person receives the endorsement.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Motorcycle Operation And License Endorsements",
    url: p(101),
  },
  {
    key: "moto-under-18-course",
    quote:
      "If you are less than 18 years old, you must take and pass the " +
      "Delaware Motorcycle Rider Education Program.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Motorcycle Operation And License Endorsements",
    url: p(101),
  },
  {
    key: "moped-license",
    quote:
      "You cannot legally operate a moped and triped upon any public road " +
      "unless you have a valid driver license.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Mopeds And Tripeds",
    url: p(101),
  },
  {
    key: "moped-no-interstate",
    quote:
      "Mopeds and tripeds shall not be operated upon interstate and " +
      "limited access highways, nor shall they be operated on the " +
      "right-of-way of an operating railroad, nor shall they be operated " +
      "on any path set aside for the use of bicycles unless the helper " +
      "motor has been turned off.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Mopeds And Tripeds",
    url: p(101),
  },
  {
    key: "ohv-not-on-highway",
    quote:
      "OHVs may not be operated upon public streets or highways, and you " +
      "must have the permission of the property owner before you may " +
      "operate on private property.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Off Highway Vehicles",
    url: p(101),
  },
  {
    key: "animal-riders",
    quote:
      "As the rider of any animal or the driver of any animal-drawn " +
      "vehicle on the highway, you have all the rights and all the duties " +
      "of the driver of a motor vehicle except where, by their very " +
      "nature, the laws can have no application.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Animal Riders And Animal Drivers",
    url: p(102),
  },
  {
    key: "who-must-not-use",
    quote:
      "You must not drive a minibike, a go-cart, golf cart, dirtbike, " +
      "motorized scooter, snowmobile, or other all-terrain vehicles which " +
      "are not permitted to be registered by the Division upon the " +
      "highway.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Who Must Not Use The Highway",
    url: p(102),
  },
  {
    key: "slow-vehicles-25",
    quote:
      "Farm tractors, animal-drawn vehicles, and roadway maintenance " +
      "vehicles usually go 25 mph or less. These vehicles should have a " +
      "slow-moving vehicle decal (an orange triangle) on the back.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Traffic - Slow moving traffic",
    url: p(125),
  },
  {
    key: "truck-passing-headlights",
    quote:
      "When passing a truck, first check to your front and rear and then " +
      "move into the passing lane only if it is clear and you are in a " +
      "legal passing zone.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With A Truck - Passing",
    url: p(102),
  },
  {
    key: "truck-return-mirror",
    quote:
      "Be sure to move back only when you can see the front of the truck " +
      "in your rear-view mirror. After you pass a truck, maintain your " +
      "speed.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With A Truck",
    url: p(103),
  },
  {
    key: "truck-being-passed",
    quote:
      "When a truck passes you, you can help the truck driver by keeping " +
      "to the far side of your lane. You'll make it easier for the truck " +
      "driver if you reduce speed slightly. In any event, don't speed up " +
      "while the truck is passing.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With A Truck",
    url: p(103),
  },
  {
    key: "truck-turbulence",
    quote:
      "Remember that the turbulence pushes the vehicles apart. It does " +
      "not suck them together.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Sharing The Road With A Truck",
    url: p(103),
  },
  {
    key: "truck-no-zone",
    quote:
      "The No-Zone represents danger areas around trucks where crashes " +
      "are more likely to occur.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Near A Truck - No-Zone",
    url: p(103),
  },
  {
    key: "truck-rear-blindspot-4s",
    quote:
      "Allow at least four seconds between your vehicle and the truck, " +
      "and remember that you too cannot see, and plan ahead if you follow " +
      "too closely.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Near A Truck - No-Zone",
    url: p(103),
  },
  {
    key: "truck-wide-turns",
    quote:
      "Wide Turns - Truck drivers sometimes need to swing wide to the " +
      "left in order to safely negotiate a right turn. They cannot see " +
      "cars directly behind them.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Near A Truck - No-Zone",
    url: p(104),
  },
  {
    key: "truck-backing-66",
    quote:
      "Sixty-six percent of all commercial vehicle crashes are while " +
      "backing; therefore, never try to cross behind a truck which is " +
      "preparing to back up.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Backing Crashes",
    url: p(104),
  },
  {
    key: "truck-stop-longer",
    quote:
      "In general, trucks take slightly longer than cars to stop because " +
      "of their size.",
    source: MANUAL,
    section: "Section Four - Rules of the Road - Near A Truck - No-Zone",
    url: p(103),
  },
  {
    key: "before-tire-penny",
    quote:
      "Check the tread with a penny. Stick the penny into the tread " +
      "\"head\" first. If the tread does not come at least to Abe's head, " +
      "the tire is unsafe and you need to replace it.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Check The Vehicle - Tires",
    url: p(106),
  },
  {
    key: "before-worn-tires",
    quote:
      "Tires - Worn or bald tires can increase your stopping distance and " +
      "make turning more difficult when the road is wet.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Check The Vehicle - Tires",
    url: p(106),
  },
  {
    key: "before-exhaust-danger",
    quote:
      "Gases from a leaky exhaust can cause death inside a vehicle in a " +
      "very short time. Never run the motor in a closed garage.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Check The Vehicle - Exhaust system",
    url: p(106),
  },
  {
    key: "before-loose-objects",
    quote:
      "Make sure there are no objects on the floor that could roll under " +
      "the brake pedal and prevent you from stopping the vehicle.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Check The Vehicle - Loose objects",
    url: p(107),
  },
  {
    key: "before-horn-warning",
    quote: "Only use your horn as a warning to others.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Check The Vehicle - Horn",
    url: p(107),
  },
  {
    key: "secure-load",
    quote:
      "A load must be securely fastened and is only considered secure " +
      "when nothing can slide, fall or shift onto the roadway or become " +
      "airborne.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Secure Your Load",
    url: p(107),
  },
  {
    key: "secure-load-force",
    quote: "A 20 lb. object at 55 mph has a force of 1,000 lbs. at impact!",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Secure Your Load",
    url: p(107),
  },
  {
    key: "glass-clear-snow",
    quote: "Clear snow, ice, or frost from all windows before driving.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Clean Glass Surfaces",
    url: p(107),
  },
  {
    key: "glass-dirty-lenses",
    quote:
      "Keep the headlights, backup, brake, and taillights clean. Dirt on " +
      "the lenses can reduce the light by 50%.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Clean Glass Surfaces",
    url: p(108),
  },
  {
    key: "seat-12-inches",
    quote:
      "Seating should be positioned approximately 12 inches from the " +
      "steering wheel.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjust Seat And Mirrors",
    url: p(108),
  },
  {
    key: "mirror-adjust",
    quote:
      "A good adjustment for the side mirrors is to set them so that when " +
      "you lean forward slightly, you can see just the side of your " +
      "vehicle.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjust Seat And Mirrors",
    url: p(108),
  },
  {
    key: "head-restraint",
    quote:
      "Head restraints are designed to prevent whip lash if you are hit " +
      "from behind. They should be adjusted so the head restraint " +
      "contacts the back of your head.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjust Seat And Mirrors",
    url: p(108),
  },
  {
    key: "belts-all-occupants",
    quote:
      "Delaware law requires all occupants of a motor vehicle to wear " +
      "seatbelts.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Safety Belts",
    url: p(108),
  },
  {
    key: "belts-primary",
    quote:
      "A law enforcement officer may pull a vehicle over if they see an " +
      "unrestrained or improperly restrained occupant inside.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Safety Belts",
    url: p(108),
  },
  {
    key: "belts-under-arm",
    quote:
      "Putting the shoulder belt under your arm or behind you can result " +
      "in serious injury; and, because it is not considered proper safety " +
      "belt use, could result in a ticket being issued.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Safety Belts",
    url: p(108),
  },
  {
    key: "belts-halve-risk",
    quote:
      "Studies have shown that you can cut your chance of dying or being " +
      "seriously injured in a crash nearly in half by simply wearing your " +
      "seatbelt.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Safety Belts",
    url: p(108),
  },
  {
    key: "belts-with-airbags",
    quote:
      "Safety belts must be worn even if the vehicle is equipped with air " +
      "bags.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Safety Belts",
    url: p(109),
  },
  {
    key: "belts-airbag-limits",
    quote:
      "While air bags are good protection against hitting the steering " +
      "wheel, dashboard, or windshield, they do not protect you if you " +
      "are hit from the side or rear, or if the vehicle rolls over.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Safety Belts",
    url: p(109),
  },
  {
    key: "child-rear-facing",
    quote:
      "Children under age 2 AND 30 pounds to ride in a rear-facing car " +
      "seat.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Child Restraints (Car Seats)",
    url: p(109),
  },
  {
    key: "child-harnessed",
    quote:
      "Children under age 4 AND 40 pounds to ride in a harnessed car " +
      "seat.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Child Restraints (Car Seats)",
    url: p(109),
  },
  {
    key: "child-booster",
    quote:
      "Children in belt positioning booster seats to remain in their belt " +
      "positioning booster seat until reaching the height or weight " +
      "maximum listed by the booster seat manufacturer.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Child Restraints (Car Seats)",
    url: p(109),
  },
  {
    key: "child-front-seat",
    quote:
      "A child under the age of 12 or under 5'5\" should not occupy the " +
      "front passenger seat of a vehicle.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Child Restraints (Car Seats)",
    url: p(109),
  },
  {
    key: "child-primary-enforcement",
    quote:
      "This is a primary enforcement law, which means officers can pull a " +
      "vehicle over if they see an unrestrained child inside.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Child Restraints (Car Seats)",
    url: p(109),
  },
  {
    key: "child-airbag-rear-facing",
    quote:
      "Never install a rear-facing car seat in front of an active frontal " +
      "air bag.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Proper Restraint of Child",
    url: p(110),
  },
  {
    key: "child-hot-car",
    quote:
      "Warning! When it's hot outside, do not leave children or animals " +
      "unattended.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Child Restraints (Car Seats)",
    url: p(111),
  },
  {
    key: "child-hot-car-temp",
    quote:
      "One study found that with the windows up and the temperature " +
      "outside at 94 degrees, the inside of a car could be 122 degrees in " +
      "just half an hour or 132 degrees after an hour.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Use Child Restraints (Car Seats)",
    url: p(111),
  },
  {
    key: "belts-myth-25mph",
    quote:
      "\"At slow speeds, I can brace myself.\" Even at 25 mph, the force of " +
      "a head-on",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Bad Information",
    url: p(111),
  },
  {
    key: "belts-myth-near-home",
    quote:
      "Over half of all traffic deaths happen within 25 miles of home. " +
      "Many of them occur on roads posted at less then 45 mph.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Bad Information",
    url: p(111),
  },
  {
    key: "stop-provide-name",
    quote:
      "In accordance with 11 Del. C. Section1902 an individual must " +
      "provide their name, address and an explanation as to why they are " +
      "driving on the roadway and where they are going.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - An individual's constitutional and other legal rights during a traffic stop",
    url: p(112),
  },
  {
    key: "stop-detention-two-hours",
    quote:
      "A detention does not mean a person is under arrest. At the end of " +
      "the detention period, which may not exceed two hours, the person " +
      "will either be released, or arrested and charged with a crime.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Laws regarding questioning and detention by a law-enforcement officer",
    url: p(112),
  },
  {
    key: "stop-what-to-do",
    quote:
      "When you see emergency lights behind you, stay calm, activate your " +
      "turn signal, and pull off or to the side of the roadway as soon " +
      "and safely as possible.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - What to Do and Expect When Stopped by Law Enforcement",
    url: p(112),
  },
  {
    key: "stop-turn-off-stay-in",
    quote:
      "Turn off the ignition and radio and stay in your vehicle unless " +
      "directed by the officer to exit. Keep your hands on the steering " +
      "wheel so they are easily observable.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - What to Do and Expect When Stopped by Law Enforcement",
    url: p(112),
  },
  {
    key: "stop-weapon",
    quote:
      "If you have a weapon(s) in the vehicle, inform the officer upon " +
      "first contact.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - What to Do and Expect When Stopped by Law Enforcement",
    url: p(113),
  },
  {
    key: "stop-no-sudden-moves",
    quote:
      "Do not make sudden moves or search for your driver's license or " +
      "vehicle documents - wait for the officer to give you instructions.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - What to Do and Expect When Stopped by Law Enforcement",
    url: p(113),
  },
  {
    key: "stop-officer-asks",
    quote:
      "The officer will ask for your driver license, proof of insurance, " +
      "and vehicle registration.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - The role and procedures of a law-enforcement officer in general and during a traffic stop",
    url: p(112),
  },
  {
    key: "steering-hand-position",
    quote:
      "Both hands should be placed on opposite sides of the steering " +
      "wheel (e.g., left hand between 8 and 10 o'clock and right hand " +
      "between 2 and 4 o'clock).",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Basic Driving - Steering",
    url: p(113),
  },
  {
    key: "steering-hand-over-hand",
    quote:
      "When turning sharp corners, turn the steering wheel using the " +
      "\"hand-over-hand\" technique. When you complete a turn, straighten " +
      "out the steering wheel by hand.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Basic Driving - Steering",
    url: p(113),
  },
  {
    key: "braking-abs",
    quote:
      "With ABS you should brake as hard as possible and, if necessary, " +
      "steer to avoid crashing. Without ABS, you should brake as hard as " +
      "possible without locking the wheels.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Basic Driving - Braking",
    url: p(115),
  },
  {
    key: "seeing-biggest-contributor",
    quote:
      "The single biggest contributor to crashes is failing to see what " +
      "is happening.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Basic Driving - Seeing Well",
    url: p(115),
  },
  {
    key: "seeing-eyes-off-road",
    quote:
      "Do not take your eyes off the road for more than a few seconds at " +
      "any one time. If you need to look at a map, pull safely off the " +
      "road before you try to look at it.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Basic Driving - Seeing Well",
    url: p(115),
  },
  {
    key: "headphones-illegal",
    quote:
      "Do not drive with head or earphones that cover or go in both ears. " +
      "This is illegal in Delaware and many other states because it makes " +
      "it hard to hear emergency horns or sirens.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Basic Driving - Seeing Well",
    url: p(116),
  },
  {
    key: "rubbernecking",
    quote:
      "Do not slow down just to look at a crash, someone getting a " +
      "ticket, or other roadside activity (rubbernecking). This could " +
      "cause you to be in a crash.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Basic Driving - Seeing Well",
    url: p(116),
  },
  {
    key: "scan-10-seconds",
    quote:
      "Safer drivers tend to look at least 10 seconds ahead of their " +
      "vehicle.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Scanning",
    url: p(116),
  },
  {
    key: "scan-city-block",
    quote:
      "In the city, 10 seconds is about one block. When you drive in city " +
      "traffic, you should try to look at least one block ahead. On the " +
      "highway, 10 seconds is about four city blocks or a quarter of a " +
      "mile.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Scanning",
    url: p(116),
  },
  {
    key: "scan-intersections-look",
    quote:
      "Before you enter an intersection, look to both the left and right " +
      "for approaching vehicles and/or crossing pedestrians. If stopped, " +
      "look to both the left and right just before you start moving.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Scanning - Intersections",
    url: p(117),
  },
  {
    key: "scan-green-light",
    quote:
      "At an intersection, look left and right, even if other traffic has " +
      "a red light or a stop sign. This is especially important just " +
      "after the light has turned green.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Scanning - Intersections",
    url: p(117),
  },
  {
    key: "scan-edge-forward",
    quote:
      "If you were stopped and your view of a cross street is blocked, " +
      "edge forward slowly until you can see.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Scanning - Intersections",
    url: p(117),
  },
  {
    key: "lanechange-blind-spot",
    quote:
      "Look over your shoulder in the direction you plan to move. Be sure " +
      "no one is near the rear corners of your vehicle. These areas are " +
      "called \"blind spots\" because you cannot see them through your " +
      "mirrors.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Scanning - When changing lanes",
    url: p(118),
  },
  {
    key: "lanechange-check-far-lane",
    quote:
      "Check the far lane. Be sure to check the far lane, if there is " +
      "one, as someone in that lane may be planning to move into the same " +
      "lane you want to enter.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Scanning - When changing lanes",
    url: p(118),
  },
  {
    key: "lanechange-includes",
    quote:
      "Changing lanes includes: changing from one lane to another, " +
      "merging onto a roadway from an entrance ramp, and entering the " +
      "roadway from the curb or shoulder.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Scanning - When changing lanes",
    url: p(118),
  },
  {
    key: "backing-look-behind",
    quote:
      "Check behind your vehicle before you get in. Children or small " +
      "objects cannot be seen from the driver's seat.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Scanning - When you back up",
    url: p(119),
  },
  {
    key: "backing-turn-around",
    quote:
      "Place your right arm on the back of the seat and turn around so " +
      "that you can look directly through the rear window. Do not depend " +
      "on your rearview or side mirrors as you cannot see directly behind " +
      "your vehicle.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Scanning - When you back up",
    url: p(119),
  },
  {
    key: "lights-high-beams-twice",
    quote:
      "Use your high beams whenever there are no oncoming vehicles. High " +
      "beams let you see twice as far as low beams.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Using Your Lights",
    url: p(119),
  },
  {
    key: "lights-dim-500",
    quote:
      "Dim your high beams whenever you come within about a one-block " +
      "distance of an oncoming vehicle (within 500 feet by Delaware law).",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Using Your Lights",
    url: p(119),
  },
  {
    key: "lights-low-in-fog",
    quote:
      "Use the low beams in fog or when it is snowing or raining hard. " +
      "Light from high beams will reflect back, causing glare and making " +
      "it more difficult to see ahead.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Using Your Lights",
    url: p(119),
  },
  {
    key: "lights-wipers-law",
    quote:
      "You must turn on your lights in rain, mist, and snow, and at any " +
      "time you have your wipers on. It's the law in Delaware.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Using Your Lights",
    url: p(119),
  },
  {
    key: "lights-parking-only",
    quote:
      "Do not drive at any time with only your parking lights on. Parking " +
      "lights are for parking only.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Using Your Lights",
    url: p(119),
  },
  {
    key: "lights-blinded",
    quote:
      "If the driver fails to dim the lights, look toward the right side " +
      "of the road. This will keep you from being blinded by the other " +
      "vehicle's headlights and allow you to see enough of the edge of " +
      "the road to stay on course.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Using Your Lights",
    url: p(119),
  },
  {
    key: "lights-when-required",
    quote:
      "On when driving after sunset or before sunrise. On any other time " +
      "you cannot see beyond 1000 feet. On any time you use your " +
      "windshield wipers. Switched to low beams 500 feet before meeting " +
      "another vehicle or when within 200 feet of the vehicle you are " +
      "following.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Using Headlights",
    url: p(62),
  },
  {
    key: "horn-light-tap",
    quote:
      "Use it whenever it will help prevent a crash. If there is no " +
      "immediate danger, a light tap on the horn should be all you need.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Communicating - Use your horn",
    url: p(120),
  },
  {
    key: "horn-when-not",
    quote:
      "When not to use your horn - There are several occasions when you " +
      "should not use your horn. They include: Encouraging someone to " +
      "drive faster or get out of the way. Apprising other drivers of an " +
      "error. Greeting a friend. Around blind pedestrians.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Communicating - When not to use your horn",
    url: p(120),
  },
  {
    key: "breakdown-flashers",
    quote:
      "Get your vehicle off the road and away from traffic if at all " +
      "possible. Turn on your emergency flashers to show you are having " +
      "trouble.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Communicating - Use emergency signals",
    url: p(121),
  },
  {
    key: "breakdown-never-stand",
    quote:
      "Never stand in the roadway. Do not try to change a tire if it " +
      "means you have to be in a traffic lane.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Communicating - Use emergency signals",
    url: p(121),
  },
  {
    key: "breakdown-flares",
    quote:
      "Try to warn other road users that your vehicle is there. Place " +
      "emergency flares behind the vehicle. This allows other drivers to " +
      "change lanes if necessary.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Communicating - Use emergency signals",
    url: p(121),
  },
  {
    key: "breakdown-hood",
    quote:
      "Lift the hood or tie a white cloth to the antenna, side mirror or " +
      "door handle to signal an emergency.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Communicating - Use emergency signals",
    url: p(121),
  },
  {
    key: "blindspot-avoid",
    quote:
      "Try to avoid driving on either side and slightly to the rear of " +
      "another vehicle. You will be in their blind spot. Either speed up " +
      "or drop back so the other driver can see your vehicle more easily.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Communicating - Stay out of the blind spot",
    url: p(121),
  },
  {
    key: "headlights-see-you",
    quote:
      "Remember, if you turn on your wipers, turn on your headlights. " +
      "It's the law in Delaware and some other states.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Communicating - Let Others Know You Are There",
    url: p(120),
  },
  {
    key: "headlights-into-sun",
    quote:
      "When driving away from a rising or setting sun, turn on your " +
      "headlights. Drivers coming towards you may have trouble seeing " +
      "your vehicle.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Communicating - Let Others Know You Are There",
    url: p(120),
  },
  {
    key: "stopping-distance-triple",
    quote:
      "For example, stopping at 60 mph does not take twice the distance " +
      "it takes at 30 mph as one might think, but over three times the " +
      "distance.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting Speed",
    url: p(123),
  },
  {
    key: "curves-slow-before",
    quote:
      "Always slow down before you enter the curve so you do not have to " +
      "brake in the curve. Braking in a curve can cause the vehicle to " +
      "skid.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Road Conditions - Curves",
    url: p(123),
  },
  {
    key: "wet-road-10mph",
    quote: "On a wet road you should reduce your speed about 10 mph.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Road Conditions - Slippery roads",
    url: p(123),
  },
  {
    key: "snow-half-speed",
    quote: "On packed snow you should cut your speed in half.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Road Conditions - Slippery roads",
    url: p(123),
  },
  {
    key: "ice-crawl",
    quote:
      "On ice, you must slow to a \"crawl\". It is very dangerous to drive " +
      "on ice.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Road Conditions - Slippery roads",
    url: p(123),
  },
  {
    key: "bridges-freeze",
    quote:
      "Overpasses and other types of bridges can have icy spots. The " +
      "pavement on bridges can be icy even when other pavement is not. " +
      "This is because bridges can be colder than other roadways.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Road Conditions - Slippery roads",
    url: p(123),
  },
  {
    key: "shady-spots-ice",
    quote:
      "On cold, wet days shady spots can be icy. These areas freeze first " +
      "and dry out last.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Road Conditions - Slippery roads",
    url: p(123),
  },
  {
    key: "first-rain-oil",
    quote:
      "If it starts to rain on a hot day, pavement can be very slippery " +
      "for the",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Road Conditions - Slippery roads",
    url: p(123),
  },
  {
    key: "hydroplane-35-50",
    quote:
      "When it is raining or the road is wet, most tires have good " +
      "traction up to about 35 mph. However, as you go faster, your tires " +
      "will start to ride up on the water, like water skis.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Road Conditions - Water on the roadway",
    url: p(124),
  },
  {
    key: "hydroplane-lose-traction",
    quote:
      "In a heavy rain, your tires can lose all traction with the road at " +
      "about 50 mph. Bald or badly worn tires will lose traction at much " +
      "lower speeds.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Road Conditions - Water on the roadway",
    url: p(124),
  },
  {
    key: "hydroplane-response",
    quote:
      "Ease your foot off the gas pedal. Keep the steering wheel " +
      "straight. Only try to turn if it's an emergency.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Road Conditions - Water on the roadway",
    url: p(124),
  },
  {
    key: "gravel-traction",
    quote:
      "You do not have as much traction on gravel or dirt roads as you do " +
      "on concrete or asphalt roads. When driving on gravel or dirt, you " +
      "must slow down.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Road Conditions",
    url: p(123),
  },
  {
    key: "keep-pace",
    quote:
      "Keep pace with traffic - If you are going faster than traffic, you " +
      "will have to keep passing others. Each time you pass someone, " +
      "there is a chance for a collision.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Traffic",
    url: p(124),
  },
  {
    key: "slower-is-bad",
    quote:
      "Going much slower than other vehicles can be just as bad as " +
      "speeding. It tends to make vehicles bunch up behind you and causes " +
      "the other traffic to pass you.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Traffic",
    url: p(124),
  },
  {
    key: "merge-use-ramp",
    quote:
      "Use the ramp to reach the speed of other vehicles before you pull " +
      "onto the road. Do not drive to the end of the ramp and stop or you " +
      "will not have enough room to get up to the speed of traffic.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Traffic - Entering into traffic",
    url: p(124),
  },
  {
    key: "exit-ramp-speed",
    quote:
      "Keep up with the speed of traffic as long as you are on the main " +
      "road. If the road you are traveling has exit ramps, do not slow " +
      "down until you move onto the exit ramp.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Adjusting To Traffic - Leaving traffic",
    url: p(124),
  },
  {
    key: "night-fatal-rate",
    quote:
      "Per mile driven, the fatal crash rate at night throughout the " +
      "nation is two-and-one-half times as high as during the day.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Night Driving",
    url: p(125),
  },
  {
    key: "night-overdrive-headlights",
    quote:
      "Most important of all, don't over drive your headlights. Keep your " +
      "speed low enough to be able to stop in the distance you can see " +
      "ahead.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Night Driving",
    url: p(125),
  },
  {
    key: "night-glare-recovery",
    quote:
      "The glare causes the pupils of the eyes to contract, and it takes " +
      "time for them to readjust to less intense light. During this " +
      "recovery period you may be driving as though blind.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Night Driving",
    url: p(125),
  },
  {
    key: "defensive-dont-trust",
    quote:
      "Don't trust the other driver to do what you think they are going " +
      "to do, or what you would do in his place. For example, when their " +
      "turn signal is flashing, don't assume that they will make a turn.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Drive Defensively",
    url: p(126),
  },
  {
    key: "defensive-escape-route",
    quote:
      "You should constantly be thinking of an \"escape route\" as you " +
      "drive.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Drive Defensively",
    url: p(126),
  },
  {
    key: "see-400-feet-50mph",
    quote:
      "At 50 mph, it can take about 400 feet to react to something you " +
      "see and bring your vehicle to a stop. That is about the length of " +
      "a city block.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - How Well Can You See?",
    url: p(126),
  },
  {
    key: "see-200-feet-30mph",
    quote:
      "At 30 mph, it can take about 200 feet to stop. That is almost half " +
      "a city block in length.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - How Well Can You See?",
    url: p(126),
  },
  {
    key: "see-headlights-350",
    quote:
      "Your headlights will let you see about 350 feet ahead. You should " +
      "drive at a speed that allows you to stop within this distance " +
      "(about 50 mph).",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - How Well Can You See? - Darkness",
    url: p(126),
  },
  {
    key: "see-rain-fog-200",
    quote:
      "In a very heavy rain, snowstorm, or thick fog, you may not be able " +
      "to see much more than 200 feet ahead. When you cannot see any " +
      "farther than that, you cannot safely drive faster than 30 mph.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - How Well Can You See? - Rain, Fog, Or Snow",
    url: p(126),
  },
  {
    key: "see-downpour-pull-off",
    quote:
      "In a very heavy downpour, you may not be able to see well enough " +
      "to drive. If this happens, pull off the road in a safe place and " +
      "wait until the rain clears.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - How Well Can You See? - Rain, Fog, Or Snow",
    url: p(126),
  },
  {
    key: "see-parked-vehicles",
    quote:
      "Vehicles parked along the side of the road may block your view. " +
      "People may be ready to get out of a vehicle or walk out from " +
      "between parked vehicles.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - How Well Can You See? - Parked Vehicles",
    url: p(127),
  },
  {
    key: "sight-distance-rule",
    quote:
      "To tell if you are driving too fast for conditions, use the " +
      "\"Four-Second Sight Distance Rule.\"",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sight Distance Rule",
    url: p(127),
  },
  {
    key: "sight-distance-count",
    quote:
      "If you reach the object before you finish saying " +
      "\"four-one-thousand,\" you need to slow down. You are going too fast " +
      "for your sight distance.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sight Distance Rule",
    url: p(127),
  },
  {
    key: "sight-distance-night",
    quote:
      "You should also use the four-second sight distance rule at night " +
      "to make sure you are not over-driving your headlights.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sight Distance Rule",
    url: p(127),
  },
  {
    key: "space-three-second-rule",
    quote:
      "There is an easy way to tell if you are following too closely. It " +
      "is called the \"three-second rule,\" and it works at any speed.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space Ahead",
    url: p(127),
  },
  {
    key: "space-three-second-how",
    quote:
      "Watch for when the rear of the vehicle ahead passes a sign, pole, " +
      "or any other stationary point. Count the seconds it takes you to " +
      "reach the same spot.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space Ahead",
    url: p(128),
  },
  {
    key: "space-three-second-fail",
    quote:
      "You are following too closely if you pass the mark before you " +
      "finish counting.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space Ahead",
    url: p(128),
  },
  {
    key: "space-four-second-situations",
    quote:
      "In the following situations, you may need a four-second following " +
      "distance to be safe.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space Ahead",
    url: p(128),
  },
  {
    key: "space-four-slippery",
    quote:
      "On slippery roads - Because you need more distance to stop your " +
      "vehicle on slippery roads, you must leave more space in front of " +
      "you.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space Ahead",
    url: p(128),
  },
  {
    key: "space-four-motorcycle",
    quote:
      "When following motorcycles - If the motorcycle should fall over, " +
      "you need extra distance to avoid hitting the rider.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space Ahead",
    url: p(128),
  },
  {
    key: "space-four-cannot-see-you",
    quote:
      "When following drivers who cannot see you - The drivers of trucks, " +
      "buses, vans or vehicles pulling campers or trailers may not be " +
      "able to see you when you are directly behind them.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space Ahead",
    url: p(128),
  },
  {
    key: "space-four-emergency",
    quote:
      "When following emergency vehicles - Police vehicles, ambulances, " +
      "and fire trucks need more room to operate.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space Ahead",
    url: p(128),
  },
  {
    key: "space-tailgated",
    quote:
      "If you are being followed too closely and there is a right lane, " +
      "move over to the right. If there is no right lane, wait until the " +
      "road ahead is clear then reduce speed slowly.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space Behind",
    url: p(129),
  },
  {
    key: "space-tailgated-never",
    quote:
      "Never slow down quickly to discourage a tailgater, all that does " +
      "is increase your risk of being hit from behind.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space Behind",
    url: p(129),
  },
  {
    key: "space-driving-slowly",
    quote:
      "Driving slowly - When you have to drive so slowly that you slow " +
      "down other vehicles, pull to the side of the road when safe to do " +
      "so and let them pass.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space Behind",
    url: p(129),
  },
  {
    key: "space-side-avoid",
    quote:
      "Avoid driving next to other vehicles on multi-lane roads. Someone " +
      "may crowd your lane or try to change lanes and pull into you.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To The Side",
    url: p(129),
  },
  {
    key: "space-side-center-lane",
    quote:
      "Keep as much space as you can between yourself and oncoming " +
      "vehicles. On a two-lane road, this means not crowding the center " +
      "line. In general, it is safest to drive in the center of your " +
      "lane.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To The Side",
    url: p(129),
  },
  {
    key: "space-side-make-room",
    quote:
      "Make room for vehicles entering on a roadway that has two or more " +
      "lanes. If there is no one next to you, move over a lane.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To The Side",
    url: p(129),
  },
  {
    key: "space-split-difference",
    quote:
      "Split the difference between two hazards. For example, steer a " +
      "middle course between oncoming and parked vehicles.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To The Side",
    url: p(130),
  },
  {
    key: "space-one-at-a-time",
    quote:
      "When possible, take potential hazards one at a time. For example, " +
      "if you are overtaking a bicycle and an oncoming vehicle is " +
      "approaching, slow down and let the vehicle pass first so that you " +
      "can give extra room to the bicycle.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To The Side",
    url: p(130),
  },
  {
    key: "space-merge-four-seconds",
    quote:
      "Anytime you want to merge with other traffic, you need a gap of " +
      "about four seconds. If you move into the middle of a four-second " +
      "gap, both you and the vehicle that is now behind you have a " +
      "three-second following distance.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To Merge",
    url: p(130),
  },
  {
    key: "space-cross-lanes-one",
    quote: "If you want to cross several lanes, take them one at a time.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To Merge",
    url: p(130),
  },
  {
    key: "space-cross-all-the-way",
    quote:
      "When you cross traffic, you need room to get all the way across. " +
      "Stopping halfway across is only safe when there is a median " +
      "divider large enough for your vehicle.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To Cross Or Enter",
    url: p(130),
  },
  {
    key: "space-blocking-ticket",
    quote:
      "Even if you have the green light, do not start across the " +
      "intersection if there are vehicles blocking your way. If you are " +
      "caught in the intersection when the light changes to red, you will " +
      "block other traffic. You can get a ticket for blocking an " +
      "intersection.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To Cross Or Enter",
    url: p(131),
  },
  {
    key: "space-never-assume-signal",
    quote:
      "Never assume another driver will share space with you or give you " +
      "space. For example, do not turn just because an approaching " +
      "vehicle has a turn signal on.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To Cross Or Enter",
    url: p(131),
  },
  {
    key: "space-pass-one-at-a-time",
    quote:
      "Do not count on having enough time to pass several vehicles at " +
      "once. Be safe. As a general rule only pass one vehicle at a time.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To Pass",
    url: p(131),
  },
  {
    key: "space-pass-10-seconds",
    quote:
      "Oncoming vehicles - At a speed of 55 mph, you need about 10 " +
      "seconds to pass. That means you need a 10-second gap in oncoming " +
      "traffic and sight distance to pass.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To Pass",
    url: p(131),
  },
  {
    key: "space-pass-1600-feet",
    quote:
      "At 55 mph you will travel over 800 feet in 10 seconds, as will an " +
      "oncoming vehicle. That means you need over 1600 feet or about " +
      "one-third of a mile to pass safely.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To Pass",
    url: p(131),
  },
  {
    key: "space-pass-hills-curves",
    quote:
      "This means you should not start to pass if you are within " +
      "one-third of a mile of a hill or curve.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To Pass",
    url: p(131),
  },
  {
    key: "space-pass-intersections",
    quote:
      "Intersections - It is dangerous to pass where a vehicle is likely " +
      "to enter or cross the road. Such places include intersections, " +
      "railroad crossings, and shopping center entrances.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To Pass",
    url: p(131),
  },
  {
    key: "space-pass-no-rr",
    quote:
      "Railroad grade crossing - Do not pass if there is a railroad grade " +
      "crossing ahead.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To Pass",
    url: p(132),
  },
  {
    key: "space-pass-return",
    quote:
      "When you can see both headlights of the vehicle you just passed in " +
      "your rearview mirror, it is safe to return to the driving lane.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space To Pass",
    url: p(132),
  },
  {
    key: "space-special-cannot-see",
    quote:
      "Those who cannot see you - Anyone who cannot see you may enter " +
      "your path without knowing you are there.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space For Special Situations",
    url: p(132),
  },
  {
    key: "space-drivers-in-trouble",
    quote:
      "Drivers in trouble - If another driver makes a mistake, do not " +
      "make it worse. For example, drivers who pass you when they do not " +
      "have enough room. Slow down and let them return to the drive lane " +
      "safely.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Sharing Space - Space For Special Situations",
    url: p(132),
  },
  {
    key: "vision-2040",
    quote:
      "To pass this screening you must have at least 20/40 vision in at " +
      "least one eye, with or without corrective lenses. Those with 20/50 " +
      "vision are restricted to daylight driving only.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Be In Shape To Drive - Vision",
    url: p(133),
  },
  {
    key: "vision-side",
    quote:
      "Side vision - You need to see \"out the corner of your eye.\" This " +
      "lets you spot vehicles and other potential trouble on either side " +
      "of you while you look ahead.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Be In Shape To Drive - Vision",
    url: p(133),
  },
  {
    key: "vision-glasses-ticket",
    quote:
      "If your driver license says you must wear corrective lenses and " +
      "you do not and you happen to be stopped, you could get a ticket.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Be In Shape To Drive - Vision",
    url: p(134),
  },
  {
    key: "vision-no-dark-glasses",
    quote:
      "Avoid using dark glasses or tinted contact lenses at night, even " +
      "if you think they help with glare. They can cut down the light " +
      "that you need to see clearly.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Be In Shape To Drive - Vision",
    url: p(134),
  },
  {
    key: "hearing-impaired-records",
    quote:
      "Studies have shown that the driving records of hearing-impaired " +
      "drivers are just as good as those drivers with good hearing.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Be In Shape To Drive - Hearing",
    url: p(134),
  },
  {
    key: "fatigue-effects",
    quote:
      "You cannot drive as safely when you are tired as when you are " +
      "rested. You do not see as well, nor are you as alert. It takes you " +
      "more time to make decisions, and you do not always make good " +
      "decisions.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Be In Shape To Drive - Fatigue",
    url: p(134),
  },
  {
    key: "fatigue-breaks",
    quote:
      "Take breaks. Stop every hour or so or when you need to. Walk " +
      "around, get some fresh air, and have some coffee, soda, or juice.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Be In Shape To Drive - Fatigue",
    url: p(134),
  },
  {
    key: "fatigue-never-sleepy",
    quote:
      "Never drive if you are sleepy. It is better to stop and sleep for " +
      "a few hours than to take a chance you can stay awake.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Be In Shape To Drive - Fatigue",
    url: p(134),
  },
  {
    key: "emotions-cool-off",
    quote:
      "If you are angry or excited, give yourself time to cool off. If " +
      "necessary take a short walk, but stay off the road until you have " +
      "calmed down.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Be In Shape To Drive - Emotions",
    url: p(135),
  },
  {
    key: "drowsy-signs",
    quote:
      "Here are some signs of drowsy drivers: Your eyes close or go out " +
      "of focus by themselves. You have trouble keeping your head up. You " +
      "can't stop yawning.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drowsy Driving",
    url: p(53),
  },
  {
    key: "drowsy-hypnosis",
    quote:
      "\"Highway Hypnosis\" commonly refers to the state of being unaware " +
      "of surroundings. It is caused by monotony-the sound of the wind, " +
      "the tires, and the steady hum of the engine.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drowsy Driving",
    url: p(53),
  },
  {
    key: "distracted-football-field",
    quote:
      "If you take your eyes off the road while traveling 55 mph for 3-4 " +
      "seconds, your vehicle travels the length of an entire football " +
      "field.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Distracted Driving",
    url: p(53),
  },
  {
    key: "distracted-list",
    quote:
      "Eating, drinking, or smoking. Changing the radio, CD, or music on " +
      "your electronic device. Shaving, putting on make-up, or other " +
      "personal grooming tasks.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Distracted Driving",
    url: p(53),
  },
  {
    key: "distracted-200-decisions",
    quote:
      "Driving instructors estimate that a driver makes 200 decisions for " +
      "every mile of driving.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Distracted Driving",
    url: p(53),
  },
  {
    key: "emerg-ignition-lock",
    quote:
      "Never turn your vehicle's ignition to the \"lock\" position while it " +
      "is still in motion. This will cause the steering to lock if you " +
      "try to turn the steering wheel, and you will lose control of your " +
      "vehicle.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Vehicle Emergencies - Steering Wheel Locking Device",
    url: p(136),
  },
  {
    key: "emerg-brake-failure",
    quote:
      "Pump the brake pedal several times. This will often build up " +
      "enough brake pressure to allow you to stop.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Vehicle Emergencies - Brake Failure",
    url: p(136),
  },
  {
    key: "emerg-parking-brake",
    quote:
      "If that does not work, use the parking brake. Pull on the parking " +
      "brake handle slowly so you will not lock the rear wheels and cause " +
      "a skid.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Vehicle Emergencies - Brake Failure",
    url: p(136),
  },
  {
    key: "emerg-wet-brakes",
    quote:
      "To dry brakes, put your car in low gear, drive slowly, and " +
      "tap/apply brakes lightly. Test every 200 feet, continuing until " +
      "braking action returns to normal.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Vehicle Emergencies - Brake Failure",
    url: p(136),
  },
  {
    key: "emerg-off-pavement",
    quote:
      "Don't try to get back onto the pavement until you have your " +
      "vehicle under control, your speed is reduced to 15 mph or less, " +
      "and you have looked for traffic behind you. Then turn the front " +
      "wheels sharply toward the pavement.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Vehicle Emergencies - Running Off The Pavement",
    url: p(136),
  },
  {
    key: "emerg-off-pavement-no-brakes",
    quote:
      "Don't panic. Don't jam on the brakes. Brake carefully or not at " +
      "all. Take your foot off the accelerator.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Vehicle Emergencies - Running Off The Pavement",
    url: p(136),
  },
  {
    key: "emerg-blowout",
    quote:
      "Hold the steering wheel tightly and keep the vehicle going " +
      "straight. Slow down gradually. Take your foot off the gas pedal " +
      "and use the brakes lightly.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Vehicle Emergencies - Tire Blowout",
    url: p(137),
  },
  {
    key: "emerg-power-failure",
    quote:
      "Keep a strong grip on the steering wheel. Be aware that the " +
      "steering wheel may be difficult to turn, but you can turn it.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Vehicle Emergencies - Power Failure",
    url: p(137),
  },
  {
    key: "emerg-headlight-failure",
    quote:
      "Try the headlight switch a few times. If that does not work, put " +
      "on the emergency flashers, turn signals, or fog lights if you have " +
      "them.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Vehicle Emergencies - Headlight Failure",
    url: p(137),
  },
  {
    key: "emerg-gas-pedal",
    quote:
      "Keep your eyes on the road. Quickly shift to neutral. Pull off the " +
      "road when safe to do so. Turn off the engine.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Vehicle Emergencies - Gas Pedal Sticks",
    url: p(137),
  },
  {
    key: "emerg-fire",
    quote:
      "If no chemical fire extinguisher is available, use dirt or sand to " +
      "smother the fire. Do not use water - burning gas will float on it " +
      "and spread the fire.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Vehicle Emergencies - Fire",
    url: p(138),
  },
  {
    key: "emerg-fire-100-feet",
    quote:
      "If a fire gets out of control, move at least 100 feet away from " +
      "the vehicle as the gas tank may explode.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Vehicle Emergencies - Fire",
    url: p(138),
  },
  {
    key: "avoid-three-options",
    quote:
      "In avoiding a collision, drivers have three options: stop, turn, " +
      "or speed up.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Avoiding Collisions",
    url: p(138),
  },
  {
    key: "avoid-abs-stop",
    quote:
      "With ABS Press on the brake pedal as hard as you can and keep " +
      "pressing on it. You might feel the brake pedal pushing back when " +
      "the ABS is working. Do not let up on the brake pedal.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Avoiding Collisions - Stopping Quickly",
    url: p(138),
  },
  {
    key: "avoid-no-abs-stop",
    quote:
      "Apply the brakes as hard as you can without locking them. If the " +
      "brakes lock up, you will feel the vehicle start to skid. Quickly " +
      "let up on the brake pedal.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Avoiding Collisions - Stopping Quickly",
    url: p(138),
  },
  {
    key: "avoid-turn-quicker",
    quote:
      "In most cases, you can turn the vehicle quicker than you can stop " +
      "it. You should consider turning in order to avoid a collision.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Avoiding Collisions - Turning Quickly",
    url: p(138),
  },
  {
    key: "avoid-run-off-road",
    quote:
      "Remember that generally it is better to run off the road than to " +
      "crash head-on into another vehicle.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Avoiding Collisions - Turning Quickly",
    url: p(139),
  },
  {
    key: "avoid-speed-up",
    quote:
      "Sometimes it is best or necessary to speed up to avoid a " +
      "collision. This may happen when another vehicle is about to hit " +
      "you from the side or from behind and there is room to the front of " +
      "you to get out of danger.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Avoiding Collisions - Speeding Up",
    url: p(139),
  },
  {
    key: "skid-cause",
    quote:
      "Skids are caused when the tires can no longer grip the road. As " +
      "you cannot control a vehicle when it is skidding, it is best not " +
      "to cause your vehicle to skid in the first place. Skids are caused " +
      "by drivers traveling too fast for conditions.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Avoiding Collisions - Dealing With Skids",
    url: p(139),
  },
  {
    key: "skid-stay-off-brake",
    quote:
      "Stay off the brake. Until the vehicle slows, your brakes will not " +
      "work and could cause you to skid more.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Avoiding Collisions - Dealing With Skids",
    url: p(139),
  },
  {
    key: "skid-steer",
    quote:
      "Steer. Turn the steering wheel in the direction you want the " +
      "vehicle to go. As soon as the vehicle begins to straighten out, " +
      "turn the steering wheel back the other way.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Avoiding Collisions - Dealing With Skids",
    url: p(139),
  },
  {
    key: "collide-rear",
    quote:
      "If your vehicle is hit from the rear, your body will effectively " +
      "be thrown backwards. Press yourself against the back of your seat, " +
      "and put your head against the head restraint.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Protect Yourself In Collisions - Hit From The Rear",
    url: p(140),
  },
  {
    key: "collide-side",
    quote:
      "If your vehicle is hit from the side, your body will effectively " +
      "be thrown towards the side that is hit. Air bags may not help in " +
      "this situation.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Protect Yourself In Collisions - Hit From The Side",
    url: p(140),
  },
  {
    key: "collide-front",
    quote:
      "If your vehicle is about to be hit from the front, it is important " +
      "to try to have a \"glancing blow\" rather than being struck head on.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Protect Yourself In Collisions - Hit From The Front",
    url: p(140),
  },
  {
    key: "crash-dont-stop-to-look",
    quote:
      "Do not stop at a crash unless you are involved or if emergency " +
      "help has not yet arrived. Keep your attention on your driving and " +
      "keep moving, watching for people who might be in or near the road.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Crashes",
    url: p(140),
  },
  {
    key: "crash-must-stop",
    quote:
      "If you are involved in a crash, you must stop. If you are involved " +
      "in a crash with a parked vehicle, you must try to locate the " +
      "owner. If any person is injured or killed, the police must be " +
      "notified.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Crashes",
    url: p(140),
  },
  {
    key: "crash-leaving-is-crime",
    quote:
      "It is a crime for you to leave a crash site where your vehicle was " +
      "involved if there is an injury or death before police have talked " +
      "to you and gotten all the information they need about the crash.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Crashes",
    url: p(140),
  },
  {
    key: "crash-move-vehicle",
    quote:
      "If, after reasonably ascertaining that there are no injuries or " +
      "deaths, and if the damaged vehicle is obstructing traffic, the " +
      "driver of the vehicle must make every reasonable effort to move " +
      "the vehicle or have it moved so as not to obstruct the regular " +
      "flow of traffic more than necessary.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - At The Crash Scene",
    url: p(140),
  },
  {
    key: "crash-turn-off-ignition",
    quote:
      "Turn off the ignition of wrecked vehicles. Do not smoke around " +
      "wrecked vehicles. Fuel could have spilled and fire is a real " +
      "danger.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - At The Crash Scene",
    url: p(140),
  },
  {
    key: "crash-power-lines",
    quote:
      "If there are power lines down with wires in the road, do not go " +
      "near them.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - At The Crash Scene",
    url: p(140),
  },
  {
    key: "crash-dont-move-injured",
    quote:
      "Do not move the injured unless they are in a burning vehicle or in " +
      "other immediate danger of being hit by another vehicle. Moving a " +
      "person can make their injuries worse.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - If Someone Is Injured",
    url: p(141),
  },
  {
    key: "crash-bleeding",
    quote:
      "If there is bleeding, apply pressure directly on the wound with " +
      "your hand or with a cloth. Even severe bleeding can almost always " +
      "be stopped or slowed by putting pressure on the wound.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - If Someone Is Injured",
    url: p(141),
  },
  {
    key: "crash-nothing-to-drink",
    quote: "Do not give injured persons anything to drink, not even water.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - If Someone Is Injured",
    url: p(141),
  },
  {
    key: "crash-shock",
    quote:
      "To help prevent an injured person from going into shock, cover " +
      "them with a blanket or coat to keep them warm.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - If Someone Is Injured",
    url: p(141),
  },
  {
    key: "crash-check-breathing",
    quote:
      "First help anyone who is not already walking and talking. Check " +
      "for breathing then check for bleeding.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - If Someone Is Injured",
    url: p(141),
  },
  {
    key: "crash-report-thresholds",
    quote:
      "When the crash results in injury or death to any person. 2. When " +
      "the crash occurs on a public highway, and it results in property " +
      "damage to an apparent extent of $500.00 or more.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Reporting Crashes",
    url: p(141),
  },
  {
    key: "crash-report-impaired",
    quote:
      "When it appears that a crash involves a driver whose physical " +
      "ability has been impaired as a result of alcohol or drug use, and " +
      "it results in property damage to an apparent extent of $1,000.00 " +
      "or more.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Reporting Crashes",
    url: p(141),
  },
  {
    key: "crash-exchange-info",
    quote:
      "If there is personal property damage, injury, or death, the driver " +
      "shall provide their name, address, vehicle registration number, " +
      "driver license number, and insurance company and the policy " +
      "number.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Reporting Crashes",
    url: p(141),
  },
  {
    key: "crash-parked-vehicle-note",
    quote:
      "Should the crash involve a parked vehicle, try to find the owner. " +
      "If you cannot, leave a note in a place where it can be seen with " +
      "information on how the owner can reach you and the date and time " +
      "of the crash.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Reporting Crashes",
    url: p(141),
  },
  {
    key: "crash-render-aid",
    quote:
      "The driver of any vehicle involved in a crash resulting in injury " +
      "or death to any person shall immediately stop such vehicle at the " +
      "scene of the crash. The driver shall render aid to any person " +
      "injured, including the carrying of the injured person to a " +
      "hospital or physician for medical treatment as needed.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Reporting Crashes",
    url: p(141),
  },
  {
    key: "crash-own-property-only",
    quote:
      "If the damage resulting from such a crash is to the property of " +
      "the driver only, with no damage to the person or property of " +
      "another, the driver need not stay at the scene of the crash but " +
      "shall immediately report the crash.",
    source: MANUAL,
    section: "Section Five - Driving Skills and Safety Tips - Reporting Crashes",
    url: p(141),
  },
  {
    key: "bac-08",
    quote:
      "In Delaware a BAC of .08 or greater or the presence of any illicit " +
      "or recreational drug is conclusive evidence that a driver is under " +
      "the influence.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drinking And Blood Alcohol Concentration",
    url: p(50),
  },
  {
    key: "bac-under-08",
    quote:
      "However, a driver can be charged with driving under the influence " +
      "if the BAC is under .08. If a driver refuses chemical testing, " +
      "their license may be revoked.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drinking And Blood Alcohol Concentration",
    url: p(50),
  },
  {
    key: "bac-zero-tolerance-02",
    quote:
      "Delaware's zero tolerance statute mandates a license revocation " +
      "for underage drivers with a .02 BAC.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drinking And Blood Alcohol Concentration",
    url: p(50),
  },
  {
    key: "bac-minor-until-21",
    quote:
      "If convicted of driving under the influence of alcohol, the " +
      "minor's license may be revoked until they reach the age of 21 " +
      "years.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drinking And Blood Alcohol Concentration",
    url: p(50),
  },
  {
    key: "bac-cdl-04",
    quote:
      "Any driver operating a commercial motor vehicle who refuses to " +
      "submit to a breath or blood test to determine their BAC, or whose " +
      "BAC is .04 or more, will be disqualified from driving a commercial " +
      "vehicle for one year",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drinking And Blood Alcohol Concentration",
    url: p(50),
  },
  {
    key: "drink-equivalence",
    quote:
      "A 12-ounce can of beer, a 5-ounce glass of wine, and a cocktail " +
      "with 1. 5-ounces of 80 proof distilled spirits all contain the " +
      "same amount of alcohol.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drinking And Driving",
    url: p(50),
  },
  {
    key: "drink-weight",
    quote:
      "The lower the weight of the drinker, the lower the amount of " +
      "alcoholic beverage it takes to bring the blood alcohol " +
      "concentration to a specified level.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drinking And Blood Alcohol Concentration",
    url: p(50),
  },
  {
    key: "drink-brain-20-40",
    quote:
      "Alcohol goes from your stomach into your blood and to all parts of " +
      "your body. It reaches your brain in 20 to 40 minutes.",
    source: MANUAL,
    section: "Section Two - Driver License Information - If You Drink, When Can You Drive",
    url: p(51),
  },
  {
    key: "drink-judgment",
    quote:
      "Alcohol slows your reflexes and reaction time, reduces your " +
      "ability to see clearly, and makes you less alert.",
    source: MANUAL,
    section: "Section Two - Driver License Information - If You Drink, When Can You Drive",
    url: p(51),
  },
  {
    key: "drink-time-only",
    quote:
      "There is no way to sober up quickly. Coffee, fresh air, exercise, " +
      "or cold showers will not help. Time is the only thing that will " +
      "sober you up.",
    source: MANUAL,
    section: "Section Two - Driver License Information - If You Drink, When Can You Drive",
    url: p(52),
  },
  {
    key: "drink-designated-driver",
    quote:
      "Arrange to go with two or more persons and agree which one of you " +
      "will not drink alcohol. You can rotate among the group, with one " +
      "person being a \"designated driver.\"",
    source: MANUAL,
    section: "Section Two - Driver License Information - If You Drink, When Can You Drive",
    url: p(52),
  },
  {
    key: "drink-food-slows",
    quote:
      "Remember, food only slows when the alcohol gets into your blood, " +
      "it will not keep you from getting drunk.",
    source: MANUAL,
    section: "Section Two - Driver License Information - If You Drink, When Can You Drive",
    url: p(52),
  },
  {
    key: "drink-new-drivers",
    quote:
      "No one can drink alcohol and drive safely, even if you have been " +
      "driving for many years. New drivers are more affected by alcohol " +
      "than experienced drivers because they are still learning to drive.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drinking And Driving",
    url: p(50),
  },
  {
    key: "drugs-otc",
    quote:
      "Drugs taken for headaches, colds, hay fever or other allergies, or " +
      "those to calm nerves can make a person drowsy and affect their " +
      "driving.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drugs Combined With Alcohol",
    url: p(52),
  },
  {
    key: "drugs-never-mix",
    quote:
      "Never drink alcohol while you are taking other drugs. These drugs " +
      "could intensify the effects of alcohol or have additional effects " +
      "of their own.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drugs Combined With Alcohol",
    url: p(52),
  },
  {
    key: "drugs-check-label",
    quote:
      "If you are driving, check the label for warnings about the drug's " +
      "effect before you take the drug.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drugs Combined With Alcohol",
    url: p(52),
  },
  {
    key: "dui-drinking-while-driving",
    quote:
      "It is unlawful to consume alcoholic beverages while driving a " +
      "motor vehicle upon the highways of this State.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Drinking While Driving Is Prohibited",
    url: p(54),
  },
  {
    key: "dui-applies-everywhere",
    quote:
      "A person is subject to the DUI law both upon highways and " +
      "elsewhere throughout the state.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Driving Under The Influence (DUI)",
    url: p(54),
  },
  {
    key: "dui-moped-ohv",
    quote:
      "It applies to anyone who drives, operates, or has actual physical " +
      "control of a vehicle, off-highway vehicle, or moped while under " +
      "the influence of intoxicating liquor or drugs.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Driving Under The Influence (DUI)",
    url: p(54),
  },
  {
    key: "dui-implied-consent",
    quote:
      "Anyone arrested for driving, operating, or having actual physical " +
      "control of a vehicle, an off-highway vehicle, or a moped, while " +
      "under the influence of intoxicating liquor or of any drug shall be " +
      "deemed to have given consent to submit to a chemical test",
    source: MANUAL,
    section: "Section Two - Driver License Information - Implied Consent Law",
    url: p(54),
  },
  {
    key: "dui-zero-tolerance-penalty",
    quote:
      "anyone under the age of 21 years, who drives, operates, or has " +
      "actual physical control of a vehicle, an off-highway vehicle, or a " +
      "moped while consuming or after having consumed alcoholic " +
      "beverages, shall have their driver license revoked for a period of " +
      "two months for the first offense",
    source: MANUAL,
    section: "Section Two - Driver License Information - Zero Tolerance Law",
    url: p(54),
  },
  {
    key: "dui-underage-possession",
    quote:
      "Anyone under the age of 21 years who has alcoholic liquor in their " +
      "possession at any time, or consumes, or is found to have consumed " +
      "alcoholic liquor, shall be fined $100 for the 1st offense and not " +
      "less than $200 nor more than $500 for each subsequent offense.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Underage Consumption Or Possession",
    url: p(54),
  },
  {
    key: "dui-15-day-temp",
    quote:
      "The officer will then issue a 15-day temporary license. The driver " +
      "will have 15 days to request an administrative hearing.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Delaware Specific Penalties And Procedures",
    url: p(55),
  },
  {
    key: "dui-first-offence-loss",
    quote: "12 months for BAC less than .15 or for drugs.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Driving Under The Influence (DUI) Penalties For A First Offense",
    url: p(56),
  },
  {
    key: "dui-first-offence-fine",
    quote: "Fine: $500.00 to $1,500.00 and/or",
    source: MANUAL,
    section: "Section Two - Driver License Information - Driving Under The Influence (DUI) Penalties For A First Offense",
    url: p(56),
  },
  {
    key: "dui-refusal-revocation",
    quote:
      "Upon such refusal the arresting officer will deliver a report of " +
      "refusal to the Division of Motor Vehicles who may revoke the " +
      "person's driver license and/or driving privilege for one to two " +
      "years depending on the number of previous DUI offenses, probable " +
      "cause, and/or chemical test refusal offenses.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Implied Consent Law",
    url: p(54),
  },
  {
    key: "dui-juvenile-until-21",
    quote:
      "the Family Court must submit an order to the Division of Motor " +
      "Vehicles to revoke the license and/or driving privilege of any " +
      "juvenile until such time as they are legally permitted to drink " +
      "alcoholic beverages (21 years old).",
    source: MANUAL,
    section: "Section Two - Driver License Information - Law Pertaining To Juveniles Driving While Under The Influence",
    url: p(54),
  },
  {
    key: "dui-mandatory-revocation",
    quote:
      "Driving while under the influence of intoxicating liquor or " +
      "narcotic drugs. Hit-and-run driving involving death or injury to " +
      "another person.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Mandatory Revocations",
    url: p(45),
  },
  {
    key: "exam-purpose",
    quote:
      "The purpose of the driver examination is to determine whether you " +
      "have sufficient knowledge and driving skills necessary to drive " +
      "safely on Delaware highways. The examination consists of four " +
      "parts.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination",
    url: p(40),
  },
  {
    key: "exam-vision-2040",
    quote:
      "Minimum acceptable vision for a Delaware driver license is 20/40, " +
      "with or without glasses or contact lenses.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Vision Screening",
    url: p(40),
  },
  {
    key: "exam-vision-daylight",
    quote:
      "Permission for daylight only driving may be granted if your vision " +
      "is between 20/40 and 20/50.",
    source: "Delaware DMV, Drivers License Examination (dmv.de.gov)",
    section: "Drivers License Examination - Vision Screening",
    url: "https://dmv.de.gov/DriverServices/drivers_license/index.shtml?dc=dr_lic_exam",
  },
  {
    key: "exam-sign-test",
    quote:
      "You will be asked to identify certain highway signs only by their " +
      "shape, color, or the symbols appearing on them. You will also have " +
      "to explain the meaning of these and other highway signs, traffic " +
      "signals, and pavement markings.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Highway Sign And Signal Test",
    url: p(41),
  },
  {
    key: "exam-sign-test-source",
    quote:
      "The meanings are explained in the Rules of the Road section of " +
      "this manual.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Highway Sign And Signal Test",
    url: p(41),
  },
  {
    key: "exam-rules-test",
    quote:
      "You will be asked to answer a series of questions based on " +
      "Delaware's rules of the road, motor vehicle laws and safety " +
      "practices.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Rules Of The Road Test",
    url: p(41),
  },
  {
    key: "exam-rules-examples",
    quote:
      "you might be asked what the speed limit is for automobiles on " +
      "two-lane roads; what actions are taken when you see a flashing red " +
      "signal ahead; or under what conditions you should not pass another " +
      "vehicle.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Rules Of The Road Test",
    url: p(41),
  },
  {
    key: "exam-road-30-days",
    quote:
      "You are eligible to take a Class D road exam 30 days after you " +
      "pass the knowledge exam. You are eligible to take a motorcycle " +
      "road exam 10 days after you pass the knowledge exam.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Road Test",
    url: p(41),
  },
  {
    key: "exam-road-weekdays",
    quote: "Road exams are given on every weekday, except Wednesday.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Road Test",
    url: p(41),
  },
  {
    key: "exam-road-bring",
    quote:
      "Valid learner's permit Valid driver license of the accompanying " +
      "driver who is at least 21 years of age (excludes motorcycle skills " +
      "exam).",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Road Test",
    url: p(42),
  },
  {
    key: "exam-road-30-minutes",
    quote:
      "You will be required to drive for approximately 30 minutes and do " +
      "such things as are usual in normal driving.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Road Test",
    url: p(42),
  },
  {
    key: "exam-road-back-50-feet",
    quote:
      "Three point turn Make right and left turns Change lanes Use " +
      "right-of-way rules Maintain proper speed Back 50 feet",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Road Test",
    url: p(42),
  },
  {
    key: "exam-road-no-phone",
    quote:
      "You must refrain from smoking during the exam. No cell phone use " +
      "or playing of music is permitted during the road test.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Motor Vehicle To Be Driven During Road Test",
    url: p(43),
  },
  {
    key: "exam-accompanied",
    quote:
      "If you do not have a valid Class D driver license with a legal " +
      "right to drive alone in Delaware, you must be accompanied by a " +
      "licensed driver over 21 years of age, as described on the " +
      "learner's permit.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - When You Must Be Accompanied By A Licensed Driver",
    url: p(43),
  },
  {
    key: "exam-driver-stays",
    quote:
      "A licensed driver MUST remain on site to drive the vehicle away in " +
      "case the applicant is unsuccessful in passing the exam.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - When You Must Be Accompanied By A Licensed Driver",
    url: p(43),
  },
  {
    key: "exam-study-manual",
    quote:
      "One of the purposes of this manual is to help you prepare to take " +
      "the driver examination. You should study this manual carefully.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Preparation For The Driver Examination",
    url: p(43),
  },
  {
    key: "exam-retest-30-days",
    quote:
      "If you fail any part of the road exam, you should prepare yourself " +
      "thoroughly to take it again at a later date. You must wait at " +
      "least 30 days before taking the exam or exams again.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Preparation For The Driver Examination",
    url: p(43),
  },
  {
    key: "exam-sample-online",
    quote:
      "Sample driver license examinations are available on the DMV " +
      "website, at https://dmv.de.gov/app/dmvexam/homeor on the DelDOT " +
      "mobile app.",
    source: MANUAL,
    section: "Section Two - Driver License Information - The Driver Examination - Preparation For The Driver Examination",
    url: p(43),
  },
  {
    key: "exam-32-questions",
    quote:
      "The actual Class D knowledge test consists of 32 questions of " +
      "which 26 must be answered correctly to pass the test. All of the " +
      "answers are found in the Delaware Driver's Manual.",
    source: "Delaware DMV, Drivers License/Identification Cards - Sample Written Test (dmv.de.gov)",
    section: "Sample Written Test",
    url: "https://dmv.de.gov/DriverServices/drivers_license/index.shtml?dc=dr_lic_written",
  },
  {
    key: "exam-answers-in-manual",
    quote:
      "There are 30 questions on the knowledge test of which at least 24 " +
      "must be answered correctly to pass.",
    source: "Delaware DMV, Frequently Asked Questions (dmv.de.gov)",
    section: "General FAQ's - How many questions are on the driver license knowledge/written test?",
    url: "https://dmv.de.gov/DriverServices/faqs/index.shtml?dc=dr_faq_general",
  },
  {
    key: "gdl-who",
    quote:
      "The Graduated Driver License (GDL) program is available for any " +
      "person seeking a driver license who is at least age 16 or under " +
      "age 18 or who is under age 22 and is receiving special education " +
      "services under an active Individualized Education Program (IEP).",
    source: MANUAL,
    section: "Section Two - Driver License Information - Graduated Driver License",
    url: p(27),
  },
  {
    key: "gdl-why",
    quote:
      "The GDL program was designed to reduce the high crash and fatality " +
      "rate among young drivers. Eligible GDL participants will receive " +
      "additional supervised driving experience and reduced exposure to " +
      "high-risk driving situations.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Graduated Driver License",
    url: p(27),
  },
  {
    key: "gdl-optional-over-18",
    quote:
      "NOTE: Participation in the GDL program is optional for any person " +
      "who is 18 years of age or older. If opting out of the GDL program " +
      "requirements, no sponsor is needed and an eye, knowledge, and road " +
      "skills exam will be required at DMV.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Graduated Driver License",
    url: p(27),
  },
  {
    key: "gdl-age",
    quote:
      "Must be at least 16 years old and less than 18 years old - OR - on " +
      "an active IEP who is at least 16 years old and less than 22 years " +
      "old.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit",
    url: p(28),
  },
  {
    key: "gdl-driver-ed",
    quote:
      "Must present a Delaware Driver Education Certificate (Blue/White " +
      "Certificate) as proof that you passed a certified Delaware Driver " +
      "Education Course.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit",
    url: p(28),
  },
  {
    key: "gdl-sponsor-liable",
    quote:
      "All GDL program applications must be signed by a sponsor. The " +
      "sponsor is held jointly liable with the GDL applicant for any " +
      "damages resulting from the GDL applicant's negligence.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit",
    url: p(28),
  },
  {
    key: "gdl-sponsor-withdraw",
    quote:
      "The sponsor may withdraw their endorsement at any time until the " +
      "minor reaches age 18 or the IEP GDL applicant has completed 12 " +
      "months of the GDL program, thereby cancelling any valid driving " +
      "privileges.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit",
    url: p(28),
  },
  {
    key: "gdl-fee",
    quote:
      "The applicant must pay a $50.00 Class D license fee for an 8-year " +
      "license and pass an eye screen at the time of application.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit",
    url: p(29),
  },
  {
    key: "gdl-permit-possession",
    quote:
      "Permit must be in the possession of the permit holder when driving " +
      "a motor vehicle.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit Restrictions",
    url: p(29),
  },
  {
    key: "gdl-belts",
    quote:
      "The permit holder and all passengers, must wear a safety belt or " +
      "be secured in a child safety seat or booster seat while the " +
      "vehicle is in motion.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit Restrictions",
    url: p(29),
  },
  {
    key: "gdl-no-phone",
    quote:
      "The permit holder shall not operate a motor vehicle while using a " +
      "cellular telephone, text messaging device, or similar electronic " +
      "device.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit Restrictions",
    url: p(29),
  },
  {
    key: "gdl-passengers",
    quote:
      "No passengers other than an adult supervisor and one other " +
      "passenger can be in the vehicle during the entire first 12 months " +
      "of valid driving authority. However, the passenger restrictions of " +
      "this paragraph do not apply to immediate members of the driver's " +
      "family as long as the adult supervisor is in the car.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit Restrictions",
    url: p(29),
  },
  {
    key: "gdl-supervisor",
    quote:
      "the supervisor must be a properly licensed parent, guardian or " +
      "licensed driver (approved by the sponsor) who is at least 25 years " +
      "of age and has held a Class D license for at least 5 years.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit Restrictions",
    url: p(29),
  },
  {
    key: "gdl-supervisor-front-seat",
    quote:
      "The supervising driver must be seated beside the permit holder in " +
      "the front seat of the vehicle when it is in motion. No person " +
      "other than the supervising driver can be in the front seat.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit Restrictions",
    url: p(29),
  },
  {
    key: "gdl-first-six-months",
    quote:
      "For the first six months after issuance of a Level One Learner's " +
      "Permit: a. The permit holder must be supervised at all times.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit Restrictions",
    url: p(29),
  },
  {
    key: "gdl-50-hours",
    quote:
      "The sponsor shall certify that the permit holder has driven for 50 " +
      "hours; 10 of which includes night-time driving.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit Restrictions",
    url: p(29),
  },
  {
    key: "gdl-second-six-months",
    quote:
      "The permit holder may drive unsupervised between the hours of 6:00 " +
      "a. m. and 10:00 p. m.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit Restrictions",
    url: p(30),
  },
  {
    key: "gdl-night-exception",
    quote:
      "Exception: The permit holder may travel without supervision during " +
      "those hours when going directly to and from church activities, " +
      "work activities, and the permit holder's school activities on " +
      "school property.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit Restrictions",
    url: p(30),
  },
  {
    key: "gdl-violation-suspension",
    quote:
      "Persons who violate the Level One Learner's Permit restrictions " +
      "are considered as driving without a license which will result in a " +
      "two-month suspension for the first offense and a four-month " +
      "suspension for subsequent offenses.",
    source: MANUAL,
    section: "Section Two - Driver License Information - GDL: Level One Learner's Permit Restrictions",
    url: p(30),
  },
  {
    key: "gdl-auto-convert",
    quote:
      "NOTE: The GDL Level One Learner's Permit will automatically " +
      "convert to a Class D license once the permit holder has completed " +
      "a full 12 months of valid driving authority.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Eligibility for a Class D Operator's License",
    url: p(30),
  },
  {
    key: "gdl-suspension-extends",
    quote:
      "The time used to compute the 12 months of required driving " +
      "experience shall not include any period of time when the permit " +
      "holder's driving privilege has been suspended, revoked, canceled, " +
      "denied, or surrendered.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Eligibility for a Class D Operator's License",
    url: p(30),
  },
  {
    key: "perm-over-18",
    quote:
      "Payment is due upon application, and you must pass all exams " +
      "within twelve months. The permit is issued after successful " +
      "completion of the eye screening and knowledge exams.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Requirements For First Time Applicants Over Age 18 - Temporary Instruction Permit (Learner's Permit)",
    url: p(30),
  },
  {
    key: "perm-over-18-supervisor",
    quote:
      "While you are learning to drive you must be accompanied by a " +
      "licensed driver who is qualified to drive the class of vehicle in " +
      "which you are training, and they must be at least 21 years of age.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Requirements For First Time Applicants Over Age 18 - Temporary Instruction Permit (Learner's Permit)",
    url: p(30),
  },
  {
    key: "perm-over-18-30-days",
    quote:
      "To obtain your license, you must take a road exam, but not until " +
      "at least 30 days after the knowledge exam is passed.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Requirements For First Time Applicants Over Age 18 - Temporary Instruction Permit (Learner's Permit)",
    url: p(30),
  },
  {
    key: "newres-60-days",
    quote:
      "Drivers From Other States. If you move into Delaware from another " +
      "State, you must apply for a Delaware driver's license within 60 " +
      "days after becoming a resident.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Transfer Of Licenses From Other Jurisdictions Into Delaware (18 Years of Age or Older)",
    url: p(31),
  },
  {
    key: "newres-waived-exams",
    quote:
      "Written and road exams may be given, but they are normally waived " +
      "if your license is valid.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Transfer Of Licenses From Other Jurisdictions Into Delaware (18 Years of Age or Older)",
    url: p(31),
  },
  {
    key: "newres-reciprocity",
    quote:
      "Exception: Delaware has a reciprocity agreement with Germany, " +
      "Taiwan (Republic of China) and France thereby exempting these " +
      "drivers from the knowledge and road exams for a Class D license " +
      "only, as well as U.S. Territories.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Transfer Of Licenses From Other Jurisdictions Into Delaware (18 Years of Age or Older)",
    url: p(31),
  },
  {
    key: "newres-foreign-exams",
    quote:
      "All drivers licensed in other countries must pass the eye, " +
      "knowledge and road exams.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Transfer Of Licenses From Other Jurisdictions Into Delaware (18 Years of Age or Older)",
    url: p(31),
  },
  {
    key: "newres-under-18",
    quote:
      "Those persons who are at least 16 years old but less than 18 years " +
      "old and were issued a driver license by another state must obtain " +
      "a Delaware license within 60 days after becoming a Delaware " +
      "resident.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Transfer Of Licenses From Other Jurisdictions Into Delaware (Under 18 Years of Age)",
    url: p(31),
  },
  {
    key: "class-d-what",
    quote: "Class D Operator's License",
    source: MANUAL,
    section: "Section Two - Driver License Information - Driver License Classifications",
    url: p(37),
  },
  {
    key: "privilege-not-right",
    quote:
      "Driving is a privilege not a right. The State grants you the " +
      "privilege of operating motor vehicles only as long as you drive " +
      "safely and obey the rules and regulations.",
    source: MANUAL,
    section: "Section Two - Driver License Information - License Revocation And Suspension",
    url: p(44),
  },
  {
    key: "suspension-vs-revocation",
    quote:
      "Suspension of a license is a temporary removal of your driving " +
      "privilege. Revocation of a license is a cancellation of your " +
      "driving privilege.",
    source: MANUAL,
    section: "Section Two - Driver License Information - License Revocation And Suspension",
    url: p(44),
  },
  {
    key: "reinstatement-fees",
    quote:
      "A fee of $50.00 must be paid to reinstate a suspended license; a " +
      "$200.00 fee is charged to reinstate a revoked license.",
    source: MANUAL,
    section: "Section Two - Driver License Information - License Revocation And Suspension",
    url: p(44),
  },
  {
    key: "out-of-state-convictions",
    quote:
      "The Division will suspend or revoke the license of any Delaware " +
      "resident who has been convicted of a violation in another state " +
      "which, if committed in Delaware, would be grounds for suspension " +
      "or revocation of a license. The driving record includes all " +
      "convictions, even those committed in other states.",
    source: MANUAL,
    section: "Section Two - Driver License Information - License Revocation And Suspension",
    url: p(44),
  },
  {
    key: "habitual-offender",
    quote:
      "After an accumulation of certain types of traffic violation " +
      "convictions, the driver may be declared a habitual offender and " +
      "their license may be revoked for up to five years.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Habitual Offender Revocation",
    url: p(45),
  },
  {
    key: "habitual-three-offences",
    quote:
      "Any combination of three of the following offenses in a five year " +
      "period may convict you as a habitual offender:",
    source: MANUAL,
    section: "Section Two - Driver License Information - Habitual Offender Revocation",
    url: p(45),
  },
  {
    key: "points-speeding-1-9",
    quote: "Speeding 1-9 miles per hour (mph) over posted limit 2",
    source: MANUAL,
    section: "Section Two - Driver License Information - Delaware Point System",
    url: p(47),
  },
  {
    key: "points-school-bus-6",
    quote: "Passing a Stopped School Bus 6*",
    source: MANUAL,
    section: "Section Two - Driver License Information - Delaware Point System",
    url: p(47),
  },
  {
    key: "points-stop-sign-3",
    quote: "Disregarding Stop Sign or Red Light 3",
    source: MANUAL,
    section: "Section Two - Driver License Information - Delaware Point System",
    url: p(47),
  },
  {
    key: "points-other-moving-2",
    quote:
      "Other Moving Violations (contained in Chapters 27, 41, and 42 of " +
      "Title 21) 2",
    source: MANUAL,
    section: "Section Two - Driver License Information - Delaware Point System",
    url: p(47),
  },
  {
    key: "points-eight-action",
    quote:
      "The Division may take administrative action against a driver who " +
      "acquires 8 or more points within a two year period.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Delaware Point System",
    url: p(47),
  },
  {
    key: "points-half-value",
    quote:
      "full point value for the first 12 months from the date of " +
      "violation and half point value for the second 12 months from date " +
      "of violation.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Delaware Point System",
    url: p(47),
  },
  {
    key: "points-advisory-letter",
    quote:
      "The Division of Motor Vehicles sends the driver an advisory " +
      "letter.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Driver Improvement Problem Driver Program Actions",
    url: p(47),
  },
  {
    key: "points-credit-first",
    quote:
      "A speeding violation of 1 to 14 mph over the posted speed limit " +
      "will not be assessed points, IF: It is the first violation within " +
      "any 3-year period",
    source: MANUAL,
    section: "Section Two - Driver License Information - Point Credit",
    url: p(48),
  },
  {
    key: "speeding-25-over",
    quote:
      "The driver will be suspended for one month when convicted of " +
      "driving 25 mph over the posted speed limit. The length of " +
      "suspension will increase by one month for each additional five mph " +
      "over the initial 25-mph threshold.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Serious Speeding Violations",
    url: p(48),
  },
  {
    key: "speeding-50-over",
    quote:
      "One-year suspension when convicted of driving 50 mph or more over " +
      "the posted speed limit or driving 100 mph on a highway.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Serious Speeding Violations",
    url: p(48),
  },
  {
    key: "speeding-20-24-advisory",
    quote:
      "Advisory letters are sent to the driver when convicted for " +
      "speeding 20-24 mph over the posted speed limit.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Serious Speeding Violations",
    url: p(48),
  },
  {
    key: "aggressive-driving-def",
    quote:
      "Aggressive driving is defined in terms of existing Title 21 " +
      "offenses such as failure to yield, unsafe lane change, disregard " +
      "of a traffic control device, failure to stop at the command of a " +
      "police officer, following too closely, passing on a shoulder, and " +
      "speeding.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Aggressive Driving",
    url: p(49),
  },
  {
    key: "aggressive-driving-three",
    quote:
      "Individuals convicted of three or more of these offenses as a " +
      "result of continuous conduct are guilty of aggressive driving and " +
      "are subject to increased penalties. Offenders will be fined " +
      "between $100.00 and $300.00 for the first offense.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Aggressive Driving",
    url: p(49),
  },
  {
    key: "defensive-course-credit",
    quote:
      "The division may consider the satisfactory completion of an " +
      "approved defensive driving course as a three-point credit that is " +
      "used to calculate driver penalties within the DMV.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Defensive Driving Courses",
    url: p(49),
  },
  {
    key: "defensive-course-3-years",
    quote: "The course remains valid for three years from the completion date.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Defensive Driving Courses",
    url: p(49),
  },
  {
    key: "driving-during-suspension",
    quote:
      "A conviction for driving during suspension or revocation shall " +
      "extend the period of suspension or revocation for a like period, " +
      "up to one year.",
    source: MANUAL,
    section: "Section Two - Driver License Information - Driving During Suspension Or Revocation",
    url: p(49),
  },
  {
    key: "points-aggressive-6",
    quote: "Aggressive Driving 6",
    source: MANUAL,
    section: "Section Two - Driver License Information - Delaware Point System",
    url: p(47),
  },
  {
    key: "points-reckless-6",
    quote: "Reckless Driving 6",
    source: MANUAL,
    section: "Section Two - Driver License Information - Delaware Point System",
    url: p(47),
  },
  {
    key: "equip-headlights-350",
    quote:
      "Headlights - At least two white multiple beam lights are required, " +
      "one on each side in the front. High beams must be aimed and strong " +
      "enough to reveal persons and vehicles at least 350 feet ahead.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Motor Vehicle Equipment - Required Equipment",
    url: p(60),
  },
  {
    key: "equip-lowbeams-100",
    quote:
      "Low beams must reveal people at least 100 feet ahead and must be " +
      "so adjusted as not to strike the eyes of an approaching driver.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Motor Vehicle Equipment - Required Equipment",
    url: p(60),
  },
  {
    key: "equip-wipers-headlights",
    quote:
      "Headlights must be on when windshield wipers are in use due to " +
      "inclement weather.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Motor Vehicle Equipment - Required Equipment",
    url: p(60),
  },
  {
    key: "equip-horn-200",
    quote:
      "Horn - Must be able to make sound that can be heard under normal " +
      "conditions at least 200 feet away.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Motor Vehicle Equipment - Required Equipment",
    url: p(61),
  },
  {
    key: "equip-parking-brake",
    quote:
      "Parking or Emergency Brake - Must stop vehicle within a distance " +
      "of 54 feet from a speed of 20 mph.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Motor Vehicle Equipment - Required Equipment",
    url: p(61),
  },
  {
    key: "equip-mirror",
    quote:
      "Rear Vision Mirror - Must be placed so that the driver can see any " +
      "vehicle traveling in the same direction. If the view from the " +
      "inside mirror to the rear is blocked, the vehicle must have " +
      "outside mirrors on the left and right side of the vehicle.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Motor Vehicle Equipment - Required Equipment",
    url: p(61),
  },
  {
    key: "equip-studded-tires",
    quote:
      "Studded Tires - Are legal from October 15 to April 15 inclusive; " +
      "illegal from April 16 to October 14 inclusive.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Motor Vehicle Equipment - Prohibited Equipment",
    url: p(62),
  },
  {
    key: "equip-red-light-front",
    quote:
      "Red Lights Prohibited in Front - No ordinary motor vehicle can " +
      "show a red light visible to the front of such vehicle. Such lights " +
      "are permitted only on emergency vehicles.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Motor Vehicle Equipment - Prohibited Equipment",
    url: p(62),
  },
  {
    key: "equip-tint",
    quote:
      "Tinted Windows - Window tint is prohibited on the front windshield " +
      "below the top five inches of the windshield (specifically not " +
      "below the AS-1 masking on the windshield), and on the left and " +
      "right driver side windows.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Motor Vehicle Equipment - Prohibited Equipment",
    url: p(62),
  },
  {
    key: "equip-tow-15-feet",
    quote:
      "The draw bar or other connection between any two vehicles, one of " +
      "which is towing the other, must be no more than 15 feet long. If a " +
      "chain, rope or cable is used, a red flag at least 12 inches square " +
      "must be attached to it.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Motor Vehicle Equipment - Prohibited Equipment",
    url: p(62),
  },
  {
    key: "equip-fog-lights",
    quote:
      "Fog Lights - Two (white or yellow) may be mounted on front of " +
      "vehicle at a height of not less than 12 inches nor more than 30 " +
      "inches above the ground.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Motor Vehicle Equipment - Additional Equipment",
    url: p(61),
  },
  {
    key: "equip-tread-depth",
    quote:
      "Tires must have no bulges, no fabric showing, no bald areas, and " +
      "no cuts. Tread depth must be at least 2/32 inch measured in two " +
      "adjacent treads.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Step 2 - Vehicle Inspection",
    url: p(64),
  },
  {
    key: "equip-windshield-cracks",
    quote:
      "Windshield must be free of cracks, holes, or breaks. Cracks over " +
      "five inches or star chips over one inch are mandatory failure " +
      "items.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Step 2 - Vehicle Inspection",
    url: p(65),
  },
  {
    key: "insurance-minimums",
    quote:
      "A PIP (Personal Injury Protection) minimum of $15,000 for any 1 " +
      "person and $30,000 for all persons injured in any 1 crash.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Step 1 - Liability Insurance, Financial Responsibility And Penalty",
    url: p(63),
  },
  {
    key: "insurance-bodily-injury",
    quote:
      "$25,000 for bodily injury or death of one person in any one crash. " +
      "$50,000 for bodily injury or death of two or more persons in any " +
      "one crash. $10,000 for injury to, or destruction of, property of " +
      "others in any one crash.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Step 1 - Liability Insurance, Financial Responsibility And Penalty",
    url: p(63),
  },
  {
    key: "insurance-card-in-vehicle",
    quote:
      "The card must be carried in the vehicle at all times and include " +
      "the period of coverage and the National Association of Insurance " +
      "Commissioners (NAIC) company identification number (NAIC code).",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Step 1 - Liability Insurance, Financial Responsibility And Penalty",
    url: p(63),
  },
  {
    key: "insurance-uninsured-fine",
    quote:
      "The penalty for operating an uninsured vehicle is a fine not less " +
      "than $1,500.00 nor more than $2,000.00.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Step 1 - Liability Insurance, Financial Responsibility And Penalty",
    url: p(63),
  },
  {
    key: "insurance-surrender-plate",
    quote:
      "OWNERS CANCELLING INSURANCE FOR ANY REASON MUST FIRST SURRENDER " +
      "THEIR VALID LICENSE PLATE TO THE DIVISION.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Step 1 - Liability Insurance, Financial Responsibility And Penalty",
    url: p(64),
  },
  {
    key: "registration-60-days",
    quote:
      "New residents must title/register their vehicles within 60 days " +
      "after moving to Delaware.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Vehicle Equipment, Titles, Registration, And Insurance",
    url: p(60),
  },
  {
    key: "address-change-30-days",
    quote:
      "State law requires changes of address to be reported to the " +
      "Division of Motor Vehicles within 30 days.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - How To Title/Register Your Vehicle",
    url: p(63),
  },
  {
    key: "inspection-seven-years",
    quote:
      "Seven-year-old models (and newer) vehicles no longer require " +
      "inspection, except for a VIN inspection on vehicles that have " +
      "never been titled in Delaware.",
    source: MANUAL,
    section: "Section Three - Vehicle Equipment, Titles, Registration, and Insurance - Step 2 - Vehicle Inspection",
    url: p(65),
  },
];
