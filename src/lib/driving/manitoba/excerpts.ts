import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from Manitoba's official driver material.
//
// Two sources, and only two, because both can be verified mechanically:
//
//  1. The Manitoba Driver's Handbook, published by Manitoba Public Insurance.
//     The copy read here is the PDF the province itself links to from the
//     Learner's Permit page on residents.gov.mb.ca, whose back cover carries
//     MPI's own edition marks: DVL0019, dated 02/02/2026. The Class 5
//     knowledge test is written from this book.
//  2. The Highway Traffic Act, C.C.S.M. c. H60, on the Manitoba Laws site, for
//     rules the handbook states only as a caption, only in part, or in more
//     general terms than the test expects: the statutory speed defaults, the
//     parking setbacks, the school bus duty and its divided-highway exception,
//     the move-over speeds, stopping position at a stop sign, right-of-way,
//     and the pedestrian right-of-way in a crosswalk.
//
// Every quote below was located mechanically in the fetched source and checked
// as an exact substring before it was written here. Nothing is paraphrased.
// Four normalisations were applied to the extracted text and to nothing else:
// curly quotes and apostrophes are folded to ASCII; en dashes and em dashes
// become a plain hyphen; runs of whitespace, including the line breaks the PDF
// inserts mid-sentence, collapse to single spaces; and where the source states
// a rule as a stem followed by a bulleted list, the items run together in the
// order they appear - no words are changed, dropped or reordered.
//
// The sources' own inconsistencies are preserved rather than tidied. The
// handbook spells the parallel-parking gap "45 centimeters" on one page and
// "45 centimetres" on the next; it writes "80km/h" without a space in the
// school-zone passage; the Act still uses "kerb" and the masculine "he"
// throughout Part 7. A quote that has been corrected is no longer a quote.
//
// These are quoted rather than summarised because MPI writes the knowledge
// test from this material. Each is kept to the operative rule and shown with
// its source, section and a link back to the official page.

const HB = "https://www.mpi.mb.ca/en/PDFs/CompleteHandbook.pdf";
/** PDF page anchor. The printed page number is two lower than the PDF page. */
const hb = (page: number) => `${HB}#page=${page}`;
const HTA = "https://web2.gov.mb.ca/laws/statutes/ccsm/h060.php";

const HB_SRC = "Manitoba Driver's Handbook (Manitoba Public Insurance, DVL0019, 02/02/2026)";
const HTA_SRC = "The Highway Traffic Act, C.C.S.M. c. H60 (Manitoba Laws, consolidated version current to 21 August 2026)";

export const manitobaExcerpts: HandbookExcerpt[] = [
  // --- Signs and signals -------------------------------------------------
  {
    key: "sign-shapes-purpose",
    quote:
      "As a driver, you're required to know them. The shapes of signs enable you to identify them in darkness, fading light, fog, rain or snow.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals (page 22)",
    url: hb(24),
  },
  {
    key: "sign-octagon",
    quote: "Octagon is used only for stop signs. Always come to a complete stop.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Sign shapes and colours (page 22)",
    url: hb(24),
  },
  {
    key: "sign-yield-triangle",
    quote:
      "Triangle with the tip pointing down means you must yield the right-of-way. Slow down and, if necessary, stop.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Sign shapes and colours (page 22)",
    url: hb(24),
  },
  {
    key: "sign-diamond",
    quote:
      "Diamond warns you of possible dangerous conditions, either on or near the roadway (e.g., a sharp curve, turn, side road, intersection, narrow bridge). Slow down to keep full control of your vehicle.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Sign shapes and colours (page 22)",
    url: hb(24),
  },
  {
    key: "sign-school-pentagon",
    quote:
      "Fluorescent yellow-green pentagon indicates school area. Drive cautiously. Children could be crossing the street.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Sign shapes and colours (page 22)",
    url: hb(24),
  },
  {
    key: "sign-slow-moving-vehicle",
    quote: "Triangle with each tip cut off indicates a slow-moving vehicle.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Sign shapes and colours (page 22)",
    url: hb(24),
  },
  {
    key: "sign-crossbuck",
    quote:
      "Crossbuck indicates a railway crossing. Always slow down and look both ways for trains before crossing the tracks. You must yield the right-of-way to trains.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Sign shapes and colours (page 22)",
    url: hb(24),
  },
  {
    key: "sign-rectangle-regulates",
    quote: "Square or Rectangular signs regulate traffic and direct the driver.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Sign shapes and colours (page 22)",
    url: hb(24),
  },
  {
    key: "sign-warning-purpose",
    quote: "These signs warn of possible dangerous conditions immediately ahead.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Warning signs (page 23)",
    url: hb(25),
  },
  {
    key: "sign-construction-purpose",
    quote:
      "These signs warn you of road construction and maintenance areas ahead. Slow down to a safe speed. At some locations maximum speed limits are posted. Drivers must watch for and obey the instructions of flag persons.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Construction and maintenance signs (page 26)",
    url: hb(28),
  },
  {
    key: "sign-regulatory-purpose",
    quote:
      "These signs regulate your driving, informing you about speed limits, permitted turns, stopping and parking rules.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Regulatory signs (page 27)",
    url: hb(29),
  },
  {
    key: "sign-guide-purpose",
    quote: "These tell you where you are, what road you're on or how to get to certain places.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Guide and information signs (page 29)",
    url: hb(31),
  },
  {
    key: "sign-prepare-to-stop",
    quote:
      "Prepare to stop. When the amber lights on the sign are flashing, approaching drivers should be prepared to stop, as the traffic signal ahead is red or about to turn red.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Warning signs (page 25)",
    url: hb(27),
  },
  {
    key: "sign-railway-lights-bells",
    quote:
      "This railway crossing sign is equipped with warning lights and bells. When the lights are flashing and the bells are ringing, be prepared to stop as they warn you of an approaching train.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Warning signs (page 25)",
    url: hb(27),
  },
  {
    key: "sign-railway-track-count",
    quote:
      "The number on the square sign under the railway crossing sign indicates the number of train tracks.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Warning signs (page 25)",
    url: hb(27),
  },
  {
    key: "sign-snow-route",
    quote: "Snow Route: No stopping during a declared \"snow emergency\"",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Regulatory signs (page 28)",
    url: hb(30),
  },
  {
    key: "sign-reserved-lane-cross-street",
    quote:
      "Reserved Lane located in curb lane of cross-street, if turning right, enter the second lane from the curb",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Warning signs (page 25)",
    url: hb(27),
  },
  {
    key: "sign-low-clearance",
    quote: "Low structure clearance 4.1 metres",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Warning signs (page 24)",
    url: hb(26),
  },

  // --- Stop signs, yield signs, signals -----------------------------------
  {
    key: "stop-sign-duty",
    quote:
      "At a stop sign, you must come to a complete stop at the appropriate places illustrated below. Before proceeding from a stopped position, you must check and yield the right-of-way to pedestrians wanting to cross the street.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Stop signs (page 30)",
    url: hb(32),
  },
  {
    key: "stop-sign-where-to-stop",
    quote:
      "Stop before the stop line. Where there's no stop line, stop just before the sidewalk. If there's no stop line or sidewalk at the intersection, stop just before the intersecting highway.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Stop signs (page 30)",
    url: hb(32),
  },
  {
    key: "four-way-stop-first",
    quote:
      "At an intersection controlled by a four-way stop sign, the vehicle that stops first should go first.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Four-way stop signs (page 30)",
    url: hb(32),
  },
  {
    key: "four-way-stop-tie",
    quote:
      "If two or more vehicles stop at the same time, the vehicle on the left should yield to the vehicle on the right.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Four-way stop signs (page 30)",
    url: hb(32),
  },
  {
    key: "yield-sign-meaning",
    quote:
      "A yield sign means slow down as you near an intersection. Check for pedestrians and traffic. If there's traffic or pedestrians, stop and yield right-of-way.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Yield right-of-way signs (page 31)",
    url: hb(33),
  },
  {
    key: "yield-sign-where",
    quote:
      "Yield signs are usually located where a lane or road merges with another lane or road. You must slow down and be prepared to stop.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Yield right-of-way signs (page 31)",
    url: hb(33),
  },
  {
    key: "signal-red",
    quote:
      "Red - Stop in front of the marked crosswalk or, if there's no marked crosswalk, before the sidewalk out of the way of pedestrians and vehicles.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 31)",
    url: hb(33),
  },
  {
    key: "signal-red-turns",
    quote:
      "Unless a sign shows otherwise or vehicle/pedestrian traffic does not permit, you may, after stopping completely, turn right. You may also turn right or left from a one-way street to another one-way street.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 31)",
    url: hb(33),
  },
  {
    key: "signal-amber",
    quote:
      "Amber - An amber light is a warning that the light is going to turn red. Slow down and stop - never accelerate to \"make the light.\" If you're already in the intersection when the light turns amber, continue through.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 31)",
    url: hb(33),
  },
  {
    key: "signal-green",
    quote:
      "Green - You may proceed, but you must yield the right-of-way to pedestrians in the crosswalk and to other vehicles already in the intersection.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 31)",
    url: hb(33),
  },
  {
    key: "signal-green-left-turn",
    quote:
      "To turn left, you may enter the intersection on a green light, but you must yield to pedestrians and oncoming traffic. You may have to complete the turn during an amber or red light.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 31)",
    url: hb(33),
  },
  {
    key: "signal-flashing-red",
    quote: "Flashing Red - Come to a complete stop, proceeding only when safe.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 32)",
    url: hb(34),
  },
  {
    key: "signal-flashing-amber",
    quote:
      "Flashing Amber - Slow down and be prepared to stop. You must yield the right-of-way to pedestrians.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 32)",
    url: hb(34),
  },
  {
    key: "signal-amber-arrow",
    quote:
      "Amber Arrow - A steady amber arrow may be shown after a green arrow. The amber arrow is a warning that oncoming traffic may next receive a green signal. Slow down and stop.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 32)",
    url: hb(34),
  },
  {
    key: "signal-green-arrow",
    quote:
      "Green Arrow - You may proceed only in the direction of the arrow, either steady or flashing, providing you're in the proper lane.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 32)",
    url: hb(34),
  },
  {
    key: "signal-flashing-green-arrow",
    quote:
      "Flashing Green Left-Arrow - You may proceed only to make a left turn, unless facing another signal that indicates other movements are allowed.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 32)",
    url: hb(34),
  },
  {
    key: "signal-green-u-turn-arrow",
    quote:
      "Green U-Turn Arrow - You may proceed to make a U-turn after yielding to pedestrians and other vehicles already in the intersection.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 32)",
    url: hb(34),
  },
  {
    key: "signal-green-arrow-with-red",
    quote:
      "When a green left-arrow is shown with a red light together you may proceed and make a left turn only. It's illegal to make a right turn at an intersection when a green left-arrow is shown with a red light, even if there's no sign indicating a right turn is prohibited on a red light.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 32)",
    url: hb(34),
  },
  {
    key: "signal-green-arrow-alone",
    quote:
      "If a green left-arrow is illuminated alone (the red light is not on) you may turn right if it's safe to do so and no sign prohibits it.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Traffic control signals (page 32)",
    url: hb(34),
  },
  {
    key: "transit-priority-signal",
    quote:
      "A signal light with a white vertical bar on a black background allows transit buses to proceed before other traffic. Only public-transit vehicles (buses) may proceed when the Transit Priority Signal is shown, while other vehicles must remain stopped.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Transit priority signal (page 33)",
    url: hb(35),
  },

  // --- Pavement markings and reserved lanes -------------------------------
  {
    key: "markings-white-lines",
    quote: "White lines indicate traffic moving in the same direction.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Pavement markings (page 34)",
    url: hb(36),
  },
  {
    key: "markings-yellow-lines",
    quote: "Yellow lines indicate traffic moving in opposite directions.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Pavement markings (page 34)",
    url: hb(36),
  },
  {
    key: "markings-solid-line-left",
    quote: "A solid line on the left of your lane means you must not pass or change lanes.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Pavement markings (page 34)",
    url: hb(36),
  },
  {
    key: "markings-broken-line",
    quote:
      "A broken line means you may pass or change lanes if safe from both front and rear to do so. It's permissible to turn left over a single or double solid line onto a private road or driveway.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Pavement markings (page 34)",
    url: hb(36),
  },
  {
    key: "markings-double-solid",
    quote: "Double solid line - Passing is prohibited for traffic going either way.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Pavement markings (page 34)",
    url: hb(36),
  },
  {
    key: "markings-solid-and-broken",
    quote:
      "Solid and broken line together - Passing is not permitted if the solid line is on your side of the highway.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Pavement markings (page 34)",
    url: hb(36),
  },
  {
    key: "markings-stop-line",
    quote: "Stop line - You must stop before this line.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Pavement markings (page 34)",
    url: hb(36),
  },
  {
    key: "reserved-lane-markings",
    quote: "The reserved lanes are marked by double broken lines and white diamond patterns.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Reserved lanes (page 35)",
    url: hb(37),
  },
  {
    key: "reserved-lane-right-turn",
    quote:
      "If you're turning right onto a street with a Diamond Lane in the curb lane, you must turn as close as practicable to the curb and into the first lane.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Reserved lanes (page 35)",
    url: hb(37),
  },
  {
    key: "painted-left-turn-island",
    quote:
      "No traffic is permitted within Painted Left-Turn Islands, which are commonly used in rural areas to channel traffic into turning lanes.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Reserved lanes (page 35)",
    url: hb(37),
  },
  {
    key: "contra-flow-lane",
    quote:
      "A curb lane on a one-way street is reserved for use by designated vehicles only. Designated vehicles travel in the opposite direction of traffic.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Reserved lanes (page 36)",
    url: hb(38),
  },
  {
    key: "bike-lane-not-limited",
    quote: "Cyclists are not limited to the use of a bike lane when it's provided.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Cycling pavement markings (page 37)",
    url: hb(39),
  },
  {
    key: "sharrows",
    quote:
      "Sharrows are pavement markings painted on a roadway to encourage cyclists and motorists to share the road.",
    source: HB_SRC,
    section: "Section 1, 1. Signs and signals - Cycling pavement markings (page 38)",
    url: hb(40),
  },

  // --- Starting, lane changing, turning -----------------------------------
  {
    key: "steering-hand-position",
    quote:
      "It's recommended that the steering wheel be held with your hands at the 9 o'clock and 3 o'clock positions.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Starting Out (page 39)",
    url: hb(41),
  },
  {
    key: "starting-from-parked",
    quote:
      "Before starting out from a parked position on a street, the driver must first turn on the signal furthest from the curb or use the appropriate hand signal and then shoulder check before moving.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Starting (page 42)",
    url: hb(44),
  },
  {
    key: "lane-change-procedure",
    quote:
      "Before changing lanes, check your rearview mirror for traffic and signal your intention to move to the right or left. Check blind spots by shoulder checking before changing lanes.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Lane changing (page 42)",
    url: hb(44),
  },
  {
    key: "lane-change-multiple",
    quote:
      "When changing across multiple lanes, it's acceptable to make one shoulder check and signal to change over a number of lanes at one time, as long as the movement can be completed safely.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Lane changing (page 42)",
    url: hb(44),
  },
  {
    key: "lane-change-mirrors-only",
    quote:
      "If you must use mirrors only to check to the side and rear (unable to shoulder check), you can only change one lane at a time.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Lane changing (page 42)",
    url: hb(44),
  },
  {
    key: "never-change-lanes-at-intersections",
    quote: "Never change lanes at intersections.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Lane changing (page 42)",
    url: hb(44),
  },
  {
    key: "hand-signals",
    quote:
      "Left Turn: left arm extended straight out Right Turn: left arm out and bent upwards Stop: left arm extended out and bent downwards",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Hand signals (page 43)",
    url: hb(45),
  },
  {
    key: "curves-slow-before",
    quote:
      "Slow down before entering a curve and avoid braking in the curve. If you do enter a curve too fast, don't jam on the brakes. Instead, apply them carefully to keep control.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Curves (page 43)",
    url: hb(45),
  },
  {
    key: "curves-steering",
    quote:
      "When entering a left-hand curve, steer toward, but not over, the centre of the road. When entering a right-hand curve, steer toward the right side of the road.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Curves (page 43)",
    url: hb(45),
  },
  {
    key: "signal-distance",
    quote:
      "Once you are in the proper lane, signal at least 30 metres before the turn. Outside cities, towns or villages, signal at least 150 metres before turning.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - General rules of turning (page 43)",
    url: hb(45),
  },
  {
    key: "right-turn-lane",
    quote:
      "Right turns must be made from the right lane nearest the curb into the right lane nearest the curb of the other road, unless it's blocked within 30 metres of the intersection.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Right turns (page 44)",
    url: hb(46),
  },
  {
    key: "right-turn-yield-pedestrians",
    quote:
      "Before making a right turn, watch and yield the right-of-way to pedestrians crossing the street.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Right turns (page 44)",
    url: hb(46),
  },
  {
    key: "shoulder-not-a-lane",
    quote:
      "Don't drive on shoulders as they're intended as a safe place for stopped or disabled vehicles.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Right turns (page 46)",
    url: hb(48),
  },
  {
    key: "left-turns-more-dangerous",
    quote: "Left turns are more dangerous than right turns because of oncoming traffic.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Left turns (page 47)",
    url: hb(49),
  },
  {
    key: "never-enter-blocked-intersection",
    quote:
      "if you will not be able to clear the intersection because traffic is backed up in the lane you wish to enter if the intersection is blocked",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Left turns (page 47)",
    url: hb(49),
  },
  {
    key: "left-turn-established",
    quote:
      "If the light turns yellow or red while you are established in the intersection, watch for traffic slowing down to stop and complete your turn when it's safe.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Making left turns on a green light (page 48)",
    url: hb(50),
  },
  {
    key: "left-turn-not-established",
    quote:
      "(If you are not already established in the intersection, you must not attempt the left turn when the light changes from green.)",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Making left turns on a green light (page 48)",
    url: hb(50),
  },
  {
    key: "left-turn-two-way-approach",
    quote:
      "Well ahead of the turn, look for any following vehicles, signal and move close to the centre line.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Making left turns from two-way onto another two-way street (page 49)",
    url: hb(51),
  },
  {
    key: "left-turn-two-lanes",
    quote:
      "The vehicle closest to the median must complete the turn and stay in the lane closest to the median on the street being turned onto. The vehicle second from the median must turn into the second lane from the median on the street being turned onto.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Making left turns when two lanes can turn (page 50)",
    url: hb(52),
  },
  {
    key: "left-on-red-one-way",
    quote:
      "Unless otherwise indicated, you may turn left from a one-way street to a one-way street on a red traffic light, after stopping and yielding the right-of-way to pedestrians and other traffic.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Making left turns from one-way onto another one-way street (page 52)",
    url: hb(54),
  },
  {
    key: "left-turn-one-way-to-two-way",
    quote:
      "When entering the two-way street, turn into the lane immediately to the right of the centre line.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Making left turns from one-way onto two-way street (page 53)",
    url: hb(55),
  },
  {
    key: "u-turn-advice",
    quote:
      "Although under certain situations it's legal to make a U-turn, we advise against it unless it's at an intersection controlled by a U-turn traffic signal.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - U-turns (page 55)",
    url: hb(57),
  },
  {
    key: "u-turn-prohibited",
    quote:
      "approaches to or near the crest of a hill where there's not at least 150 metres of clear view of oncoming traffic",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - U-turns (page 55)",
    url: hb(57),
  },
  {
    key: "roundabout-approach",
    quote:
      "Reduce your speed to the posted speed limit or slower and be prepared to yield to pedestrians, cyclists and vehicles in the roundabout. When no traffic is approaching from the left you may proceed into the roundabout.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Roundabouts (page 56)",
    url: hb(58),
  },
  {
    key: "roundabout-priority",
    quote:
      "If two vehicles arrive at the same time, the vehicle on the right should enter the roundabout first. When on the roundabout, you have the right-of-way over vehicles entering.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Roundabouts (page 56)",
    url: hb(58),
  },
  {
    key: "roundabout-exit",
    quote:
      "Continue until you reach the street you wish to exit on, signaling your intention to exit in advance. As you exit, watch for pedestrians within the pedestrian corridor and yield the right-of-way to pedestrians and cyclists.",
    source: HB_SRC,
    section: "Section 1, 2. Starting from a parked position - Roundabouts (page 56)",
    url: hb(58),
  },

  // --- Speed, following, passing -----------------------------------------
  {
    key: "default-speed-limits",
    quote:
      "Unless otherwise posted, the maximum speed limit is 90 km/h in rural areas and 50 km/h in urban areas.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Speed (page 57)",
    url: hb(59),
  },
  {
    key: "speed-poor-conditions",
    quote:
      "Poor driving conditions will require you to drive more slowly. At no time should you exceed the posted maximum speed limit.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Speed (page 57)",
    url: hb(59),
  },
  {
    key: "speed-too-slow",
    quote:
      "You should not drive at such a slow speed that you hold back or block the normal and reasonable flow of traffic.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Speed (page 57)",
    url: hb(59),
  },
  {
    key: "following-four-seconds",
    quote:
      "Use a four-second following distance when following under ideal driving conditions - allow more time under adverse conditions.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Following safely (page 57)",
    url: hb(59),
  },
  {
    key: "following-count-method",
    quote:
      "If it takes less than four seconds for the front of your vehicle to reach the marker, you are too close. Four seconds is correct.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Following safely (page 57)",
    url: hb(59),
  },
  {
    key: "being-tailgated",
    quote:
      "If you are being followed too closely, slow down gradually to give the driver behind you time to react.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Following safely (page 57)",
    url: hb(59),
  },
  {
    key: "passing-no-speeding",
    quote: "It's illegal to exceed the speed limit when passing.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Passing (page 58)",
    url: hb(60),
  },
  {
    key: "passing-closing-speed",
    quote:
      "You might think you have plenty of time and distance to pass, but don't forget you are closing the gap between you and the approaching vehicle at twice your own rate of speed - and sometimes by more than that.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Passing (page 58)",
    url: hb(60),
  },
  {
    key: "passing-never",
    quote:
      "in a school area within 15 minutes of the opening or closing of morning and afternoon classes, or while children are near a school or playground",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Passing (page 58)",
    url: hb(60),
  },
  {
    key: "passing-on-right",
    quote:
      "A driver shall not overtake and pass upon the right of another vehicle, except (a) when the vehicle overtaken is making a left turn or its driver has signalled his intention to make a left turn; or (b) when on a laned roadway there are two or more unobstructed lanes available to traffic moving in the direction of travel of the vehicle;",
    source: HTA_SRC,
    section: "Part 7, Division III - Section 115(1), Overtaking on right prohibited with exceptions",
    url: HTA,
  },
  {
    key: "being-passed",
    quote:
      "When being passed, slow down and move as close as possible to the right side of the road.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Passing (page 58)",
    url: hb(60),
  },
  {
    key: "passing-return-to-lane",
    quote:
      "Once the vehicle you have passed is visible in your rearview mirror, check your blind spot on the right, signal to the right and return to the proper lane.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Passing (page 58)",
    url: hb(60),
  },
  {
    key: "no-zone-rear",
    quote:
      "Trucks have deep rear blind spots. A truck driver can't see you if you're in this No-Zone - especially if you're tailgating. If you can't see the truck's mirrors, the driver can't see you.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - No-zone around large vehicles (page 59)",
    url: hb(61),
  },
  {
    key: "no-zone-front",
    quote:
      "When you pass a big truck, make sure you can see the entire truck cab in your rear-view mirror before pulling in front.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - No-zone around large vehicles (page 59)",
    url: hb(61),
  },
  {
    key: "no-zone-wide-turns",
    quote:
      "Truck drivers must sometimes swing wide to the left in order to make a right turn. They can't see cars directly behind or beside them.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - No-zone around large vehicles (page 59)",
    url: hb(61),
  },
  {
    key: "expressway-entering",
    quote:
      "Use the merge lane to match your speed with expressway traffic, so as to merge without having to stop. If you stop at the end of the entrance lane, you sharply increase the risk of being struck from behind.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Entering and leaving an expressway (page 60)",
    url: hb(62),
  },
  {
    key: "expressway-leaving",
    quote:
      "Maintain your speed until you are completely in the exit ramp, and then slow down smoothly to whatever speed is posted or to the prevailing speed in the exit ramp (whichever is slower).",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Entering and leaving an expressway (page 61)",
    url: hb(63),
  },
  {
    key: "expressway-missed-exit",
    quote:
      "If you pass your exit on an expressway, never stop to back up. Continue on to the next exit.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Entering and leaving an expressway (page 61)",
    url: hb(63),
  },

  // --- Right of way, emergency vehicles, buses ----------------------------
  {
    key: "uncontrolled-intersection",
    quote:
      "When two vehicles approach an intersection with no traffic signals or signs, both must slow down. The vehicle on the left must always yield the right-of-way to the vehicle on the right.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Right-of-way (page 61)",
    url: hb(63),
  },
  {
    key: "private-entrance-stop",
    quote:
      "When entering a street, Provincial Road or Provincial Trunk Highway from a private road, lane, driveway or parking lot, you must stop before crossing the sidewalk and yield the right-of-way to all pedestrians and traffic.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Right-of-way (page 61)",
    url: hb(63),
  },
  {
    key: "funeral-procession",
    quote:
      "Drivers of vehicles in a funeral procession with lighted headlights and following a lead car may, if traffic conditions and local bylaws permit, go through a red light or stop sign with caution.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Funeral processions (page 61)",
    url: hb(63),
  },
  {
    key: "funeral-purple-light",
    quote: "The lead car in the funeral procession may be equipped with a flashing purple light.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Funeral processions (page 61)",
    url: hb(63),
  },
  {
    key: "emergency-vehicle-alarm",
    quote:
      "An emergency vehicle, when responding to an emergency call, will sound an alarm and use flashing lights. The alarm may be a horn, gong, bell or siren.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Emergency vehicles (page 62)",
    url: hb(64),
  },
  {
    key: "emergency-vehicle-yield",
    quote:
      "immediately moving clear of an intersection if you are stopped for a red light or stop sign (If blocking the path of an emergency vehicle, you must proceed through a red light or stop sign with caution, to clear the way.)",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Emergency vehicles (page 62)",
    url: hb(64),
  },
  {
    key: "emergency-vehicle-remain-stopped",
    quote:
      "remaining stopped at the edge of the road until the emergency vehicles have passed Note: On one-way streets, pull right or left to the nearest curb so as not to block the emergency vehicle.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Emergency vehicles (page 62)",
    url: hb(64),
  },
  {
    key: "emergency-vehicle-one-way",
    quote:
      "Note: On one-way streets, pull right or left to the nearest curb so as not to block the emergency vehicle.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Emergency vehicles (page 62)",
    url: hb(64),
  },
  {
    key: "school-bus-amber",
    quote:
      "When a bus displays flashing overhead amber lights, it is about to stop to load or unload students. You must slow down and prepare to stop.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - School buses (page 63)",
    url: hb(65),
  },
  {
    key: "school-bus-five-metres",
    quote:
      "It is illegal to pass from either direction when the bus displays flashing red lights and the stop arm extends from the left side. You must stop at least five metres from the bus.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - School buses (page 63)",
    url: hb(65),
  },
  {
    key: "school-bus-remain-stopped",
    quote:
      "You must remain stopped until the flashing overhead red lights are turned off and the stop arm is folded in.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - School buses (page 63)",
    url: hb(65),
  },
  {
    key: "school-bus-divided-road",
    quote:
      "You are not required to stop if travelling in the opposite direction on a divided roadway separated by a physical median or ditch. A double solid line is not considered a physical separation.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - School buses (page 63)",
    url: hb(65),
  },
  {
    key: "move-over-lane-change",
    quote:
      "When two or more lanes of traffic in the same direction are available, you must move to the lane farthest from the emergency or designated vehicle, provided it's safe to do so.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - School buses (page 63)",
    url: hb(65),
  },
  {
    key: "transit-bus-yield-decal",
    quote:
      "Transit buses display a decal on the rear of the buses requesting motorists to \"Please Yield.\"",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Transit buses (page 64)",
    url: hb(66),
  },
  {
    key: "transit-bus-right-turn",
    quote:
      "When making a right turn, it must be done in the extreme right lane. Making a right turn from the second lane in front of a transit bus not only places you at risk of being struck if the bus pulls away, but is also illegal.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Transit bus situation #1 (page 64)",
    url: hb(66),
  },
  {
    key: "transit-bus-blind-spot",
    quote:
      "The blind spot of a 12.2 metre transit bus is 4.3 metres on the right side and 1.5 metres on the left, as well as 12.2 metres to the rear.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Transit bus situation #4 (page 66)",
    url: hb(68),
  },
  {
    key: "construction-flagperson",
    quote:
      "A flagperson may also be in the construction zone to help direct the flow of traffic. You must obey the directions of the flagperson, including slowing down or stopping.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Construction zones (page 67)",
    url: hb(69),
  },
  {
    key: "construction-double-fines",
    quote:
      "In a designated construction zone, identified at the start and the end by a special sign, the set fines for speeding over the posted speed limit will be doubled, regardless of whether workers or equipment are present, and regardless of whether the speed limit has been reduced.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Construction zones (page 67)",
    url: hb(69),
  },
  {
    key: "zipper-merge",
    quote:
      "A zipper merge has drivers use both lanes until reaching a defined merge point. Drivers then take turns merging into the open lane in a zipper like fashion.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - The Zipper Merge (page 68)",
    url: hb(70),
  },
  {
    key: "zipper-merge-duty",
    quote:
      "Remember, drivers who are changing lanes must signal, while drivers who are remaining in the through lane must let in one vehicle.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - The Zipper Merge (page 68)",
    url: hb(70),
  },

  // --- Railway crossings --------------------------------------------------
  {
    key: "railway-stop-distances",
    quote:
      "When stopping at a crossing, keep at least five metres away from the nearest rail in a restricted speed area and at least 15 metres away in a non-restricted speed area.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Railway crossings (page 69)",
    url: hb(71),
  },
  {
    key: "restricted-speed-area",
    quote:
      "A restricted speed area means any area within Winnipeg, an urban municipality, a local urban district under the Municipal Act or any other area, highway or portion of highway designated by regulation.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Railway crossings (page 69)",
    url: hb(71),
  },
  {
    key: "trains-right-of-way",
    quote:
      "Since most railway crossings don't have electronic signals warning you when to stop, the most important rule to recognize is that trains automatically have the right-of-way at all railway crossings.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Railway crossings (page 69)",
    url: hb(71),
  },
  {
    key: "railway-multiple-tracks",
    quote:
      "When there's more than one set of tracks, don't start across when the train passes. Make sure there isn't another train coming on the other track.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Railway crossings (page 69)",
    url: hb(71),
  },
  {
    key: "railway-illegal-acts",
    quote:
      "The driver of a vehicle approaching a railway crossing shall stop the vehicle before proceeding across the crossing if (a) a \"stop\" or \"arrêt stop\" sign is erected at the crossing;",
    source: HTA_SRC,
    section: "Part 7, Division III - Section 134(2), Stopping at railway crossings",
    url: HTA,
  },
  {
    key: "railway-park-30-metres",
    quote:
      "park within 30 metres of the nearest rail of a railway crossing unless otherwise posted",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Railway crossings (page 70)",
    url: hb(72),
  },
  {
    key: "railway-cross-while-flashing",
    quote:
      "Drivers may cross a railway crossing when the warning lights are flashing if: the vehicle is brought to a complete stop prior to crossing the crossing is not protected by gates or barriers the crossing is within a restricted speed area the train is stopped or is a safe distance away the crossing may be done safely",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Railway crossings (page 70)",
    url: hb(72),
  },
  {
    key: "railway-traffic-backed-up",
    quote:
      "If traffic is backed up so that you can't get across the tracks, stop and wait at least five metres from the crossing, until the traffic jam clears and it's safe to cross.",
    source: HB_SRC,
    section: "Section 1, 3. Driving responsibly - Railway crossings (page 69)",
    url: hb(71),
  },

  // --- Pedestrians --------------------------------------------------------
  {
    key: "crosswalk-right-of-way",
    quote: "Pedestrians have the right-of-way at both marked and unmarked crosswalks.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - Crosswalks (page 71)",
    url: hb(73),
  },
  {
    key: "unmarked-crosswalks",
    quote:
      "Unmarked crosswalks - These are extensions of sidewalks across a road at an intersection. No markings or signs are required.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - Crosswalks (page 71)",
    url: hb(73),
  },
  {
    key: "crosswalk-driver-duty",
    quote:
      "You must stop and yield the right-of-way to pedestrians who are crossing the roadway, unless they're on the opposite side of a divided highway separated by a median. A double solid line is not a physical separation.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - Crosswalks (page 71)",
    url: hb(73),
  },
  {
    key: "crosswalk-no-passing",
    quote:
      "It's illegal to pass traffic ahead of you that is slowing down or stopped for pedestrians.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - Crosswalks (page 71)",
    url: hb(73),
  },
  {
    key: "crosswalk-parking-three-metres",
    quote: "No parking or stopping is allowed within three metres of a crosswalk.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - Crosswalks (page 71)",
    url: hb(73),
  },
  {
    key: "school-crosswalk-open-to-all",
    quote: "All pedestrians have the right to use school crosswalks.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - Crosswalks (page 71)",
    url: hb(73),
  },
  {
    key: "pedestrian-walking-figure",
    quote: "This indication permits you to leave the curb and enter the roadway.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - The Walking Figure (page 72)",
    url: hb(74),
  },
  {
    key: "pedestrian-orange-hand",
    quote:
      "Pedestrians facing the Orange Hand indication must not begin to cross the roadway, as there may not be sufficient time to do so safely.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - The Orange Hand (page 72)",
    url: hb(74),
  },
  {
    key: "pedestrian-check-turning-vehicles",
    quote:
      "In particular, even if cross-street traffic is stopped, pedestrians should check for turning vehicles.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - The Orange Hand (page 72)",
    url: hb(74),
  },
  {
    key: "pedestrian-corridor-description",
    quote:
      "These feature large, illuminated overhead signs, with alternating flashing amber lights on top. Large rectangular bars are painted on the crossing.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - Pedestrian corridors (page 73)",
    url: hb(75),
  },
  {
    key: "pedestrian-corridor-parking",
    quote: "No parking or stopping is allowed within 15 metres of a pedestrian corridor.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - Pedestrian corridors (page 73)",
    url: hb(75),
  },
  {
    key: "blind-pedestrian-cane",
    quote:
      "Often, a blind or partially blind person will raise their cane when uncertain of crossing the street safely. That is your signal to stop and give them the right-of-way.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - People who are blind (page 74)",
    url: hb(76),
  },
  {
    key: "hybrid-vehicle-quiet",
    quote:
      "If you drive a hybrid vehicle there may be no sound from your engine to let a blind person know that you are nearby. Exercise extreme caution in this situation.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - People who are blind (page 74)",
    url: hb(76),
  },
  {
    key: "school-area-drive-slowly",
    quote:
      "You must drive slowly and be prepared to stop suddenly when a child is on or near a road, or close to a school or playground.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - School and playground areas (page 75)",
    url: hb(77),
  },
  {
    key: "school-area-no-passing",
    quote:
      "It's illegal to pass another moving vehicle in a school area, within 15 minutes of either the opening or closing of classes or at any time when children are on the school grounds or near the road.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - School and playground areas (page 75)",
    url: hb(77),
  },
  {
    key: "school-zone-speed",
    quote:
      "The maximum speed may be as low as 30 km/h where the regularly-posted speed is less than 80km/h, and as low as 50 km/h where the regularly-posted speed is 80 km/h or above.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - School and playground areas (page 75)",
    url: hb(77),
  },
  {
    key: "school-safety-patrol",
    quote:
      "Watch for school safety patrols because they indicate that children are nearby. The patrols are easily recognized by their high visibility vests and flags.",
    source: HB_SRC,
    section: "Section 1, 4. Pedestrian safety - School and playground areas (page 75)",
    url: hb(77),
  },

  // --- Cyclists -----------------------------------------------------------
  {
    key: "cyclists-three-rs",
    quote:
      "Same Rights: When on the road, cyclists have the same rights and duties as a driver, and must obey all signs and traffic control devices.",
    source: HB_SRC,
    section: "Section 1, 5. Sharing the road - motorists and cyclists (page 76)",
    url: hb(78),
  },
  {
    key: "passing-cyclist-one-metre",
    quote:
      "A driver overtaking and passing a cyclist or power-assisted bicycle proceeding in the same direction must keep a distance of at least one metre between the driver's vehicle and the cyclist or power-assisted bicycle.",
    source: HB_SRC,
    section: "Section 1, 5. Sharing the road - Passing a cyclist (page 78)",
    url: hb(80),
  },
  {
    key: "cyclist-left-turn-yield",
    quote:
      "When turning left, watch for and yield to oncoming cyclists, just as you would to oncoming drivers.",
    source: HB_SRC,
    section: "Section 1, 5. Sharing the road - Your responsibilities as a driver (page 76)",
    url: hb(78),
  },
  {
    key: "cyclist-right-turn-yield",
    quote:
      "When turning right, yield to any cyclist travelling on your right. Don't try to pass a cyclist if you are planning to turn right at the next intersection or driveway.",
    source: HB_SRC,
    section: "Section 1, 5. Sharing the road - Your responsibilities as a driver (page 76)",
    url: hb(78),
  },
  {
    key: "cyclist-position-practicable",
    quote:
      "The Highway Traffic Act indicates that cyclists should position themselves \"as close as is practicable\" to the right side of the roadway.",
    source: HB_SRC,
    section: "Section 1, 5. Sharing the road - Understanding a cyclist's position on the road (page 77)",
    url: hb(79),
  },
  {
    key: "cyclist-no-pass-situations",
    quote:
      "There are some situations where it's not safe to pass a cyclist including: in construction zones where traffic is reduced to one narrow lane",
    source: HB_SRC,
    section: "Section 1, 5. Sharing the road - Passing a cyclist (page 78)",
    url: hb(80),
  },
  {
    key: "cyclists-expected-behaviour",
    quote:
      "Ride as closely as practicable to the right hand boundary of the road.",
    source: HB_SRC,
    section: "Section 1, 5. Sharing the road - Cyclists are expected to (page 77)",
    url: hb(79),
  },
  {
    key: "cyclist-lights",
    quote: "Use a white front light and a red rear light in low light conditions.",
    source: HB_SRC,
    section: "Section 1, 5. Sharing the road - Cyclists are expected to (page 77)",
    url: hb(79),
  },
  {
    key: "cyclist-door-zone",
    quote: "Look for cyclists before opening your car doors.",
    source: HB_SRC,
    section: "Section 1, 5. Sharing the road - Your responsibilities as a driver (page 76)",
    url: hb(78),
  },
  {
    key: "hta-no-clearance-specified",
    quote:
      "The Highway Traffic Act does not specify how close cyclists should ride near the right edge of the roadway or the clearance drivers must give a cyclist when travelling alongside or passing them.",
    source: HB_SRC,
    section: "Section 1, 5. Sharing the road - Cyclist signals (page 79)",
    url: hb(81),
  },

  // --- Backing up and parking --------------------------------------------
  {
    key: "backing-up-check",
    quote:
      "Before backing up, check for anyone or anything behind you, both by looking in your mirrors and over your shoulder. This includes checking carefully for children who may be too small to be in your direct line of vision.",
    source: HB_SRC,
    section: "Section 1, 6. Backing up (page 80)",
    url: hb(82),
  },
  {
    key: "backing-shoulder-choice",
    quote:
      "If you are reversing straight back or to the right, check your mirrors and look over your right shoulder. If reversing to the left, use your mirrors and look over your left shoulder.",
    source: HB_SRC,
    section: "Section 1, 6. Backing up (page 80)",
    url: hb(82),
  },
  {
    key: "parallel-park-start",
    quote:
      "Drive alongside Vehicle B about one metre away. Stop when your vehicle's (Vehicle A) rear bumper is even with the rear bumper of Vehicle B.",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Parallel parking (page 83)",
    url: hb(85),
  },
  {
    key: "parallel-park-45-cm",
    quote:
      "This should bring your vehicle parallel to and not more than 45 centimetres away from the curb.",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Parallel parking (page 84)",
    url: hb(86),
  },
  {
    key: "parallel-park-angle",
    quote:
      "As you reverse, you should steer sharply to the right until your vehicle is at a 45 degree angle from the curb.",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Parallel parking (page 83)",
    url: hb(85),
  },
  {
    key: "backing-skill-test-space",
    quote:
      "This will be done by successfully backing a vehicle within a space measuring approximately 1.85 metres by 7.5 metres as outlined by testing poles.",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Backing skill test (page 85)",
    url: hb(87),
  },
  {
    key: "backing-skill-test-attempts",
    quote:
      "You will have three attempts or four minutes, whichever comes first, to complete this portion of the test.",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Backing skill test (page 85)",
    url: hb(87),
  },
  {
    key: "hill-park-uphill",
    quote: "Uphill parking - turn the wheels away from the curb.",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Parking on a hill or incline (page 88)",
    url: hb(90),
  },
  {
    key: "hill-park-downhill",
    quote:
      "Downhill parking - turn the wheels toward the curb so the position of the wheel will help hold the car.",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Parking on a hill or incline (page 88)",
    url: hb(90),
  },
  {
    key: "hill-park-no-curb",
    quote:
      "If there's no curb, whether you are parking up or downhill, turn wheels slightly to the right so that if the car begins rolling, it will move off the roadway.",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Parking on a hill or incline (page 88)",
    url: hb(90),
  },
  {
    key: "hill-park-gear",
    quote:
      "Vehicles with automatic transmission should be placed in the Park position. Vehicles with manual transmission should be placed in reverse or low gear. In both cases, always set your parking brake firmly.",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Parking on a hill or incline (page 88)",
    url: hb(90),
  },
  {
    key: "parking-hydrant-three-metres",
    quote:
      "within three metres from the point on the curb or edge of the roadway immediately opposite a fire hydrant",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Illegal parking (page 89)",
    url: hb(91),
  },
  {
    key: "parking-stop-sign-nine-metres",
    quote:
      "within nine metres of a stop sign or other traffic sign or signal posted at an intersection",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Illegal parking (page 89)",
    url: hb(91),
  },
  {
    key: "parking-fire-station-six-metres",
    quote: "within six metres of a driveway entrance to a fire station, unless otherwise posted",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Illegal parking (page 89)",
    url: hb(91),
  },
  {
    key: "parking-curve-60-metres",
    quote:
      "at a curve on the highway outside a city, town or village, when the vehicle cannot be clearly seen from at least 60 metres in each direction upon the highway",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Illegal parking (page 89)",
    url: hb(91),
  },
  {
    key: "parking-double-park",
    quote: "on a roadway beside another vehicle that is already parked",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Illegal parking (page 89)",
    url: hb(91),
  },
  {
    key: "parking-sidewalk-driveway",
    quote:
      "no person shall stop, stand, or park a vehicle (a) on a sidewalk; (b) in front of a driveway; (c) within an intersection or within 3 metres thereof or such greater distance as may be prescribed by the appropriate traffic authority;",
    source: HTA_SRC,
    section: "Part 7, Division III - Section 122(1), Where stopping, standing, parking prohibited",
    url: HTA,
  },
  {
    key: "engine-running-unattended",
    quote:
      "By law you may leave your vehicle unattended when the motor is running only for reasons such as warming the vehicle and defrosting the windshield.",
    source: HB_SRC,
    section: "Section 1, 7. Parking - Parking pointers (page 89)",
    url: hb(91),
  },
  {
    key: "disabled-parking-illegal",
    quote:
      "It's illegal to park in a space designated for people with disabilities unless you are disabled or you are transporting a person with a disability and a valid parking permit is prominently displayed in your vehicle.",
    source: HB_SRC,
    section: "Section 3, 2. Safe driving programs - Parking entitlement for people with physical disabilities (page 124)",
    url: hb(126),
  },
  {
    key: "disabled-permit-display",
    quote:
      "Parking permits are to be displayed only when the vehicle is parked in specially designated parking, not while the vehicle is being driven.",
    source: HB_SRC,
    section: "Section 3, 2. Safe driving programs - Parking entitlement for people with physical disabilities (page 124)",
    url: hb(126),
  },

  // --- Vehicle equipment --------------------------------------------------
  {
    key: "brakes-stopping-distance",
    quote: "Brakes must be able to stop passenger vehicles travelling at 30 km/h within 7.6 metres.",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment - Required equipment (page 90)",
    url: hb(92),
  },
  {
    key: "headlight-hours",
    quote:
      "When operating your vehicle, headlights must be switched on a half hour before sunset until a half hour after sunrise and when visibility is reduced to 60 metres.",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment - Lights (page 91)",
    url: hb(93),
  },
  {
    key: "load-overhang-flag",
    quote:
      "a red flag clearly visible at the end of a load during daylight and a red light or reflector at the end of a load at night, if the load extends one metre or more past the rear of the vehicle",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment - Lights (page 91)",
    url: hb(93),
  },
  {
    key: "tire-tread-1-6-mm",
    quote: "Always replace tires when the tread is less than 1.6 millimetres.",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment - Tires (page 92)",
    url: hb(94),
  },
  {
    key: "studded-tires-dates",
    quote: "Studded tires are illegal between April 30 and Oct. 1.",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment - Tires (page 92)",
    url: hb(94),
  },
  {
    key: "tire-pressure-monthly",
    quote:
      "Using an accurate tire pressure gauge, check the air pressure of your tires at least once a month and after long trips.",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment - Tires (page 91)",
    url: hb(93),
  },
  {
    key: "horn-60-metres",
    quote: "All motor vehicles must have a horn that can be heard for at least 60 metres.",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment - Horn (page 92)",
    url: hb(94),
  },
  {
    key: "windows-frost-free-dates",
    quote:
      "From Nov. 1 to March 31 inclusive, your vehicle must be capable of keeping the windshield, the rear window and the windows at both sides free from frost.",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment - Windshield and windows (page 92)",
    url: hb(94),
  },
  {
    key: "suspension-illegal",
    quote: "It's illegal to raise or lower the original suspension of a passenger car.",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment - Suspension (page 93)",
    url: hb(95),
  },
  {
    key: "odometer-illegal",
    quote:
      "A motor vehicle must have a speedometer and odometer in good working order. It's illegal to alter the distance shown on an odometer.",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment - Speedometer and odometer (page 93)",
    url: hb(95),
  },
  {
    key: "muffler-required",
    quote: "All motor vehicles must have a muffler capable of preventing excessive noise.",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment - Muffler (page 93)",
    url: hb(95),
  },
  {
    key: "bumper-required",
    quote: "Every passenger car must have a bumper at the front and rear.",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment - Bumper (page 93)",
    url: hb(95),
  },
  {
    key: "defective-equipment-order",
    quote:
      "A police officer can order you to have defective equipment repaired immediately. If you fail to comply, your vehicle registration may be suspended until a qualified mechanic certifies the defects have been repaired.",
    source: HB_SRC,
    section: "Section 1, 8. Vehicle equipment (page 90)",
    url: hb(92),
  },

  // --- Poor driving conditions -------------------------------------------
  {
    key: "ice-snow-start-slowly",
    quote: "Start out slowly and gently test steering and braking conditions.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Ice, sleet or snow (page 94)",
    url: hb(96),
  },
  {
    key: "no-abs-threshold",
    quote:
      "If your vehicle does not have anti-lock brakes, apply steady brake pressure without locking the wheels and losing steering control.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Ice, sleet or snow (page 94)",
    url: hb(96),
  },
  {
    key: "abs-full-pressure",
    quote:
      "If your vehicle does have anti-lock brakes, apply full brake pressure and hold. You will still have some steering control.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Ice, sleet or snow (page 94)",
    url: hb(96),
  },
  {
    key: "night-see-distance",
    quote:
      "under normal conditions you can see only 30 metres ahead on low beam and 110 metres ahead on high beam.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Night driving (page 95)",
    url: hb(97),
  },
  {
    key: "night-overdriving-headlights",
    quote:
      "Never drive so fast that you can't stop within the distance you can see in front of you with your lights.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Night driving (page 95)",
    url: hb(97),
  },
  {
    key: "dimming-distances",
    quote:
      "dimming your lights at least 450 metres from oncoming vehicles, and 60 metres when following vehicles",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Night driving (page 95)",
    url: hb(97),
  },
  {
    key: "glare-look-right",
    quote:
      "To reduce glare, don't look directly at the headlights of oncoming traffic; instead, look to the right edge of the roadway.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Night driving (page 95)",
    url: hb(97),
  },
  {
    key: "low-beams-when",
    quote:
      "Use low beams when driving by street light, in fog and when following another vehicle closely.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Night driving (page 96)",
    url: hb(98),
  },
  {
    key: "fog-low-beam",
    quote:
      "turning your headlights on low beam to reduce the glaring reflection from dense fog or snow (Fog lamps are even better.)",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Reduced visibility (page 94)",
    url: hb(96),
  },
  {
    key: "drowsiness",
    quote:
      "If you start to feel sleepy, stop your vehicle and rest. If you must park by the side of the road, pull well over and put on your four-way flashers to prevent being struck.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Drowsiness or fatigue (page 96)",
    url: hb(98),
  },
  {
    key: "distraction-definition",
    quote: "Distracted driving means any activity that diverts your attention from the road.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Distractions (page 96)",
    url: hb(98),
  },
  {
    key: "handheld-device-suspension",
    quote:
      "In Manitoba, it's against the law and being caught using a hand-operated electronic device behind the wheel will result in a three-day licence suspension for a first offence and a seven-day suspension for each subsequent offence.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Distractions (page 97)",
    url: hb(99),
  },
  {
    key: "handheld-device-fine",
    quote:
      "Upon conviction, it will also result in a $672 fine and moving five levels down the Driver Safety Rating scale.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Distractions (page 97)",
    url: hb(99),
  },
  {
    key: "gravel-six-seconds",
    quote:
      "Following distance is very important. You should stay a minimum of six seconds behind other vehicles.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Gravel road driving (page 97)",
    url: hb(99),
  },
  {
    key: "gravel-slow-down",
    quote: "When driving onto a gravel surface, slow down and drive carefully.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Gravel road driving (page 97)",
    url: hb(99),
  },
  {
    key: "rollover-recovery",
    quote:
      "To avoid a rollover take your foot off the gas and steer the vehicle so it follows the edge of the roadway, slowly turn the steering wheel to gradually guide the vehicle back onto the road.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Gravel road driving (page 98)",
    url: hb(100),
  },
  {
    key: "winter-road-speed",
    quote:
      "There are no posted speed limit signs and the recommended speed limit for vehicles with a maximum gross vehicle weight of seven tonnes or greater is 15 km/h on all ice roads.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Winter road driving (page 98)",
    url: hb(100),
  },
  {
    key: "hills-no-passing-crest",
    quote: "Don't pass near the crest of a hill because your sight distance ends at the hilltop.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Hills (page 99)",
    url: hb(101),
  },
  {
    key: "hills-lower-gear",
    quote:
      "Before starting down a steep hill, shift to a lower gear to let your engine assist you as a braking force. Never coast down hills in neutral or with the clutch disengaged because you'll be relying too much on your brakes and they may not hold.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Hills (page 99)",
    url: hb(101),
  },
  {
    key: "farm-equipment-speed",
    quote:
      "farm tractors, combines and other equipment move very slowly, with a maximum speed of 40 km/h.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Farm equipment on roads (page 99)",
    url: hb(101),
  },
  {
    key: "deer-peak-times",
    quote:
      "Deer are particularly active in the fall with peak danger times from sunset to midnight and just after sunrise.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Animals on the road (page 100)",
    url: hb(102),
  },
  {
    key: "animal-brake-not-swerve",
    quote:
      "If an animal crosses your path, brake firmly. Avoid swerving, as that may cause a worse collision.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Animals on the road (page 100)",
    url: hb(102),
  },
  {
    key: "horses-pass-slow-wide",
    quote:
      "Don't sound your horn and be ready to stop if the rider indicates for you to do so. When you're ready to pass, slow down and leave plenty of distance between you and the horse.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Animals on the road (page 101)",
    url: hb(103),
  },
  {
    key: "pilot-vehicle-distance",
    quote:
      "The pilot vehicle shall precede and follow the oversize vehicle or load at a distance of not less than 100 metres and not more than 500 metres.",
    source: HB_SRC,
    section: "Section 1, 9. Poor driving conditions - Pilot vehicles (page 101)",
    url: hb(103),
  },

  // --- Driving emergencies and collisions ---------------------------------
  {
    key: "running-off-pavement",
    quote:
      "Stay on the shoulder and steer in a straight line. 2. Take your foot off the accelerator. 3. Apply the brakes very gently.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Running off the pavement (page 102)",
    url: hb(104),
  },
  {
    key: "blowout-response",
    quote:
      "Hold the steering wheel firmly and take your foot off the accelerator, allowing your vehicle to slow down gradually.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Blowouts (page 102)",
    url: hb(104),
  },
  {
    key: "blowout-front-vs-rear",
    quote:
      "A front-tire blowout tends to cause the vehicle to swerve to the side of the blowout, making steering very difficult. In the case of a rear-tire blowout, the rear end of the vehicle sways from side to side.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Blowouts (page 102)",
    url: hb(104),
  },
  {
    key: "skid-control",
    quote:
      "Look and steer in the direction you would like to go. As the vehicle straightens out (assuming the brakes haven't locked), the front wheels should also be straightened out to prevent a skid in the opposite direction.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Skid control (page 103)",
    url: hb(105),
  },
  {
    key: "skid-dry-surface",
    quote:
      "Driving too fast often results in skidding, regardless of weather conditions. In fact, more people are killed or injured in dry-surface skids than in wet-surface skids.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Skid control (page 103)",
    url: hb(105),
  },
  {
    key: "threshold-braking",
    quote:
      "An alternative method is to apply steady brake pressure without locking up the wheels. This is called threshold braking and requires practice and skill in order to perform properly.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Emergency braking (page 104)",
    url: hb(106),
  },
  {
    key: "wet-brakes",
    quote:
      "Always test the brakes lightly after driving through deep water. They may pull to one side or may not work at all.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Wet brakes (page 104)",
    url: hb(106),
  },
  {
    key: "disabled-vehicle-flares",
    quote:
      "If you have reflectorized signs and/or flares, place them 60 metres in front and behind the vehicle, so that the danger may be seen by approaching drivers.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Disabled vehicle (page 105)",
    url: hb(107),
  },
  {
    key: "disabled-vehicle-hood",
    quote: "If you cannot move your vehicle off the road, raise the hood to warn other motorists.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Disabled vehicle (page 105)",
    url: hb(107),
  },
  {
    key: "head-on-avoidance",
    quote:
      "Move as quickly and safely as you can onto the shoulder on the right-hand side of the road, and sound the horn.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Direct collision course (page 105)",
    url: hb(107),
  },
  {
    key: "never-swerve-left",
    quote:
      "Never swerve to the left to avoid a collision as you may then be in the path of oncoming traffic.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Direct collision course (page 105)",
    url: hb(107),
  },
  {
    key: "vehicle-in-water",
    quote:
      "If a vehicle ends up in water with the windows closed and intact (not broken), it will float for between 30 seconds and a few minutes. Vehicle occupants have only about one minute to exit before escape becomes impossible.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Vehicle plunging into water (page 106)",
    url: hb(108),
  },
  {
    key: "vehicle-fire-ignition",
    quote: "Since this usually results from an electrical short circuit, turn off the ignition immediately.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Vehicle on fire (page 106)",
    url: hb(108),
  },
  {
    key: "electrical-wires-stay-inside",
    quote: "Stay inside and try to drive away from the wires.",
    source: HB_SRC,
    section: "Section 1, 10. Driving emergencies - Vehicle in contact with electrical wires (page 107)",
    url: hb(109),
  },
  {
    key: "collision-scene-arrive",
    quote:
      "In case of serious injury, call 911 or the nearest police station and ambulance.",
    source: HB_SRC,
    section: "Section 1, 11. Collisions - Upon arriving at the scene of a collision (page 108)",
    url: hb(110),
  },
  {
    key: "collision-do-not-move-injured",
    quote: "If an individual is hurt, however, don't attempt to move them unless the vehicle is on fire.",
    source: HB_SRC,
    section: "Section 1, 11. Collisions - Upon arriving at the scene of a collision (page 108)",
    url: hb(110),
  },
  {
    key: "collision-stop-immediately",
    quote: "Stop your vehicle immediately.",
    source: HB_SRC,
    section: "Section 1, 11. Collisions - If you're involved in a collision (page 109)",
    url: hb(111),
  },
  {
    key: "collision-report-seven-days",
    quote:
      "If anyone is seriously injured (meaning someone was hospitalized) or if a fatality occurs, you must report the collision to the police within seven days, if you don't make a report to an officer at the scene.",
    source: HB_SRC,
    section: "Section 1, 11. Collisions - If you're involved in a collision (page 109)",
    url: hb(111),
  },
  {
    key: "collision-property-damage-only",
    quote:
      "You don't have to report to the police if only property damage is sustained in a collision, no matter what the value of the damage.",
    source: HB_SRC,
    section: "Section 1, 11. Collisions - If you're involved in a collision (page 109)",
    url: hb(111),
  },
  {
    key: "collision-exchange-details",
    quote: "Give your name and address to anyone whose vehicle or property is damaged.",
    source: HB_SRC,
    section: "Section 1, 11. Collisions - If you're involved in a collision (page 109)",
    url: hb(111),
  },
  {
    key: "collision-unattended-vehicle",
    quote:
      "If you collide with and damage an unattended vehicle or other property, you must take reasonable steps to find and notify the owner of the unattended vehicle or property.",
    source: HB_SRC,
    section: "Section 1, 11. Collisions - If you're involved in a collision (page 110)",
    url: hb(112),
  },

  // --- Impaired driving ---------------------------------------------------
  {
    key: "alcohol-depressant",
    quote:
      "Alcohol is a depressant, not a stimulant. It reduces alertness and slows normal reflexes. If you've had too much to drink, black coffee, food, a cold shower or fresh air won't sober you up - only time will eliminate alcohol from your body.",
    source: HB_SRC,
    section: "Section 2, 1. Driving while impaired - Alcohol (page 112)",
    url: hb(114),
  },
  {
    key: "impaired-any-level",
    quote:
      "If your ability to drive is impaired, a charge of impaired driving can be laid regardless of what level of alcohol is found in your blood.",
    source: HB_SRC,
    section: "Section 2, 1. Driving while impaired - Alcohol (page 112)",
    url: hb(114),
  },
  {
    key: "prescription-drugs",
    quote:
      "Tranquilizers, antidepressants, sleeping pills and similar drugs can affect your driving ability even if taken in the prescribed dosage.",
    source: HB_SRC,
    section: "Section 2, 1. Driving while impaired - Prescription drugs (page 112)",
    url: hb(114),
  },
  {
    key: "cannabis-in-vehicle",
    quote:
      "Transport cannabis in or on a vehicle, unless stored in a secure compartment such as your vehicle's trunk. Drivers convicted of these offences will move down on the DSR scale.",
    source: HB_SRC,
    section: "Section 2, 1. Driving while impaired - Cannabis (page 112)",
    url: hb(114),
  },
  {
    key: "drug-24-hour-suspension",
    quote:
      "Drivers suspected by police of being under the influence of any drug can receive an immediate 24-hour roadside license suspension.",
    source: HB_SRC,
    section: "Section 2, 1. Driving while impaired - Drug impairment (page 115)",
    url: hb(117),
  },
  {
    key: "novice-zero-tolerance",
    quote:
      "Novice drivers cannot have drugs or alcohol in their system. Anyone who violates this restriction will: receive an immediate 24-hour roadside suspension",
    source: HB_SRC,
    section: "Section 2, 1. Driving while impaired - Drug and alcohol restriction (page 115)",
    url: hb(117),
  },
  {
    key: "tiered-suspension-trigger",
    quote:
      "Anyone who operates a motor vehicle with a blood alcohol concentration between .05 and .079, registers a \"warn\" on an ASD, or fails a drug screening test, physical coordination test or drug recognition evaluation is subject to an immediate Tiered Administrative Licence Suspension.",
    source: HB_SRC,
    section: "Section 2, 1. Driving while impaired - Tiered Administrative Licence Suspensions (page 115)",
    url: hb(117),
  },
  {
    key: "tiered-suspension-ladder",
    quote:
      "Tiered Administrative Licence Suspensions are progressively longer suspensions ranging from 72 hours to 60 days depending on how many previous suspensions have been issued to the driver within a 10-year period",
    source: HB_SRC,
    section: "Section 2, 1. Driving while impaired - Tiered Administrative Licence Suspensions (page 115)",
    url: hb(117),
  },
  {
    key: "three-month-suspension",
    quote:
      "You will receive an immediate three-month Administrative Licence Suspension if:",
    source: HB_SRC,
    section: "Section 2, 1. Driving while impaired - Three-month Administrative Licence Suspension (page 116)",
    url: hb(118),
  },
  {
    key: "driving-suspended-impound",
    quote:
      "Vehicles and off-road vehicles (ORVs) will be immediately impounded for a minimum of 30 days for driving while the person is suspended or prohibited from driving, or if the person is disqualified from operating an ORV.",
    source: HB_SRC,
    section: "Section 2, 3. Driving while suspended - the consequences (page 118)",
    url: hb(120),
  },
  {
    key: "driving-suspended-penalty",
    quote: "imprisonment for up to one year and/or a fine up to $5,000",
    source: HB_SRC,
    section: "Section 2, 3. Driving while suspended - the consequences (page 118)",
    url: hb(120),
  },
  {
    key: "novice-driver-definition",
    quote:
      "A novice driver is a driver who has not held a Full Stage driver's licence for more than one year.",
    source: HB_SRC,
    section: "Section 2, 4. Driver Improvement and Control Program - How it works (page 120)",
    url: hb(122),
  },
  {
    key: "dsr-scale",
    quote:
      "Your position on the Driver Safety Rating (DSR) scale depends on your driving record. High-risk driving moves you down the scale, which means you pay more for your driver's licence and vehicle premiums.",
    source: HB_SRC,
    section: "Section 3, 1. Driver Safety Rating (page 122)",
    url: hb(124),
  },
  {
    key: "criminal-code-suspension-range",
    quote:
      "Anyone convicted of any such offence faces a driver's licence suspension ranging from one year to life.",
    source: HB_SRC,
    section: "Section 2, 2. Licence suspension for other Criminal Code convictions (page 117)",
    url: hb(119),
  },

  // --- Occupant restraints ------------------------------------------------
  {
    key: "seatbelt-required",
    quote:
      "All drivers and passengers must wear the complete seatbelt assembly, where a seatbelt assembly is provided, unless exempted by law.",
    source: HB_SRC,
    section: "Occupant restraints - Seatbelts (page 17)",
    url: hb(19),
  },
  {
    key: "seatbelt-driver-responsibility",
    quote: "It's the driver's responsibility to ensure that every minor in the vehicle is properly secured.",
    source: HB_SRC,
    section: "Occupant restraints - Seatbelts (page 17)",
    url: hb(19),
  },
  {
    key: "seatbelt-worn-properly",
    quote:
      "The seatbelt must be kept over the shoulder and not under the arm as this could cause serious injury in a collision.",
    source: HB_SRC,
    section: "Occupant restraints - Seatbelts (page 17)",
    url: hb(19),
  },
  {
    key: "booster-seat-law",
    quote:
      "Provincial law requires children to remain in booster seats until they're at least 145 cm (4'9\"), 36 kg (80 lb.) or nine years old.",
    source: HB_SRC,
    section: "Occupant restraints - Booster seats (page 19)",
    url: hb(21),
  },
  {
    key: "car-seat-rear-middle",
    quote: "The safest position for a car seat is the vehicle's rear middle seat.",
    source: HB_SRC,
    section: "Occupant restraints - Rear-facing infant car seats (page 17)",
    url: hb(19),
  },
  {
    key: "car-seat-not-both-anchors",
    quote: "Use a seatbelt or Universal Anchorage System (UAS) to install the seat. Don't use both.",
    source: HB_SRC,
    section: "Occupant restraints - Rear-facing infant car seats (page 17)",
    url: hb(19),
  },
  {
    key: "seatbelt-fatality-reduction",
    quote:
      "The chances of being fatally injured in a collision can be decreased by as much as 70 per cent if you wear a seatbelt.",
    source: HB_SRC,
    section: "Occupant restraints - Seatbelts (page 20)",
    url: hb(22),
  },

  // --- Licensing and testing ---------------------------------------------
  {
    key: "gdl-three-stages",
    quote:
      "The three stages of GDL are the Learner Stage, the Intermediate Stage and the Full Stage. Each stage has specific restrictions for new drivers that reduce the opportunity and likelihood for risky driving behaviour.",
    source: HB_SRC,
    section: "Graduated Driver Licensing (page 11)",
    url: hb(13),
  },
  {
    key: "gdl-learner-age",
    quote:
      "To be eligible to apply for a Learner licence, you must be at least 16 years of age, or a minimum of 15 1/2 years of age and enrolled in a high school driver education course that is currently in progress. Parental consent is required if you're under 18 years of age.",
    source: HB_SRC,
    section: "Graduated Driver Licensing - Class 5L Licence (Learner Stage) (page 11)",
    url: hb(13),
  },
  {
    key: "gdl-learner-nine-months",
    quote: "Class 5L Licence (Learner Stage) (minimum 9 months)",
    source: HB_SRC,
    section: "Graduated Driver Licensing - Class 5L Licence (Learner Stage) (page 11)",
    url: hb(13),
  },
  {
    key: "gdl-learner-front-seat",
    quote:
      "be accompanied by a qualified supervising driver as the only front seat passenger (The supervising driver must hold a valid licence and have held a Class 5F licence for at least three years. The supervising driver must have less than .05 blood alcohol concentration and must not fail a drug screening test.)",
    source: HB_SRC,
    section: "Graduated Driver Licensing - Class 5L Licence (Learner Stage) (page 11)",
    url: hb(13),
  },
  {
    key: "gdl-supervising-driver",
    quote:
      "The supervising driver must hold a valid licence and have held a Class 5F licence for at least three years. The supervising driver must have less than .05 blood alcohol concentration and must not fail a drug screening test.",
    source: HB_SRC,
    section: "Graduated Driver Licensing - Class 5L Licence (Learner Stage) (page 11)",
    url: hb(13),
  },
  {
    key: "gdl-learner-back-seat",
    quote:
      "restrict other passengers to the back seat(s) up to the number of functioning seatbelts in the back seat of the vehicle",
    source: HB_SRC,
    section: "Graduated Driver Licensing - Class 5L Licence (Learner Stage) (page 11)",
    url: hb(13),
  },
  {
    key: "gdl-learner-prohibitions",
    quote:
      "no towing of vehicles no operating of Class 3 motor vehicles registered as a farm truck no operating of off-road vehicles (ORVs) along or across highways",
    source: HB_SRC,
    section: "Graduated Driver Licensing - Class 5L Licence (Learner Stage) (page 11)",
    url: hb(13),
  },
  {
    key: "gdl-intermediate-road-test",
    quote: "To graduate to this stage, you must pass a road test.",
    source: HB_SRC,
    section: "Graduated Driver Licensing - Class 5I Licence (Intermediate Stage) (page 11)",
    url: hb(13),
  },
  {
    key: "gdl-intermediate-night-passengers",
    quote:
      "restrict passengers between midnight to 5 a.m. to either one passenger or a qualified supervising driver in the front seat and passengers in the back seat(s) up to the number of functioning seatbelts in the back seat of the vehicle",
    source: HB_SRC,
    section: "Graduated Driver Licensing - Class 5I Licence (Intermediate Stage) (page 11)",
    url: hb(13),
  },
  {
    key: "gdl-full-stage",
    quote:
      "After spending a minimum of 15 months in the Intermediate Stage, you will graduate to the Full Stage. For the first 36 months you must continue to have no drugs or alcohol in your system.",
    source: HB_SRC,
    section: "Graduated Driver Licensing - Class 5F Licence (Full Stage) (page 11)",
    url: hb(13),
  },
  {
    key: "gdl-supervise-after-three-years",
    quote: "You may supervise novice drivers after three years in the Full Stage.",
    source: HB_SRC,
    section: "Graduated Driver Licensing - Class 5F Licence (Full Stage) (page 11)",
    url: hb(13),
  },
  {
    key: "knowledge-test-content",
    quote:
      "The test assesses your knowledge of traffic laws, safe driving practices and recognition of road signs.",
    source: HB_SRC,
    section: "Basic Class 5 licensing requirements - A) Knowledge test (page 8)",
    url: hb(10),
  },
  {
    key: "knowledge-test-closed-book",
    quote:
      "(It's not an open book test and cellular phones or electronic devices cannot be used during the test.)",
    source: HB_SRC,
    section: "Basic Class 5 licensing requirements - A) Knowledge test (page 8)",
    url: hb(10),
  },
  {
    key: "knowledge-test-time-limit",
    quote: "There's a 30-minute time limit to complete a knowledge test.",
    source: HB_SRC,
    section: "Test appointments - General testing information (page 10)",
    url: hb(12),
  },
  {
    key: "knowledge-test-retest-wait",
    quote:
      "If you're in the Graduated Driver Licensing (GDL) Program and are not successful on your knowledge test, there's a seven-day waiting period before you may take the test again.",
    source: HB_SRC,
    section: "Test appointments - General testing information (page 10)",
    url: hb(12),
  },
  {
    key: "road-test-retest-wait",
    quote:
      "If you aren't successful on your road test, there's a 14-day waiting period before you may take the test again.",
    source: HB_SRC,
    section: "Test appointments - General testing information (page 10)",
    url: hb(12),
  },
  {
    key: "road-test-fifth-attempt",
    quote:
      "After four unsuccessful Class 5 road test attempts, you are required to take a minimum of two hours of professional instruction from a driving school with a permit from Manitoba Public Insurance before booking a fifth road test.",
    source: HB_SRC,
    section: "Test appointments - General testing information (page 10)",
    url: hb(12),
  },
  {
    key: "one-test-per-day",
    quote: "Only one knowledge or road test of the same class may be completed per day.",
    source: HB_SRC,
    section: "Test appointments - General testing information (page 10)",
    url: hb(12),
  },
  {
    key: "licence-in-possession",
    quote:
      "Your driver's licence must be in your possession at all times while driving and must be produced, along with the vehicle registration certificate, when requested by a peace officer.",
    source: HB_SRC,
    section: "Manitoba's one-piece driver's licence (page 14)",
    url: hb(16),
  },
  {
    key: "licence-not-border-document",
    quote:
      "Please be aware that the Manitoba driver's licence cannot be used to cross the United States border.",
    source: HB_SRC,
    section: "Manitoba's one-piece driver's licence (page 14)",
    url: hb(16),
  },
  {
    key: "temporary-licence-45-days",
    quote:
      "When you're issued a new Manitoba driver's licence, you will be provided with a temporary driver's licence certificate (valid for up to 45 days).",
    source: HB_SRC,
    section: "Manitoba's one-piece driver's licence (page 14)",
    url: hb(16),
  },
  {
    key: "only-one-licence",
    quote: "holding, at any time, more than one valid driver's licence from Canada or the United States",
    source: HB_SRC,
    section: "Illegal use of driver's licence (page 15)",
    url: hb(17),
  },
  {
    key: "change-of-address-15-days",
    quote:
      "You're required to notify your Autopac agent or Manitoba Public Insurance within 15 days of any change in your name or address.",
    source: HB_SRC,
    section: "Basic Class 5 licensing requirements - Change of name or address (page 8)",
    url: hb(10),
  },
  {
    key: "heavy-equipment-licence",
    quote:
      "A valid Class 5I licence (Intermediate Stage) or higher is required to operate heavy and agricultural equipment on provincial highways and roads in urban areas.",
    source: HB_SRC,
    section: "Operating heavy and agricultural equipment (page 16)",
    url: hb(18),
  },
  {
    key: "licence-valid-five-years",
    quote: "The Manitoba driver's licence is valid for up to five years.",
    source: HB_SRC,
    section: "Keep your licence valid (page 12)",
    url: hb(14),
  },
  {
    key: "under-18-shows-birthday",
    quote:
      "Drivers under the age of 18 years are issued driver's licences that show the exact date of the driver's 18th birthday.",
    source: HB_SRC,
    section: "Manitoba's one-piece driver's licence (page 14)",
    url: hb(16),
  },

  // --- The Highway Traffic Act -------------------------------------------
  {
    key: "hta-speed-defaults",
    quote:
      "The speed limit on any portion of a highway is 50 km/h within a restricted speed area and 90 km/h outside a restricted speed area",
    source: HTA_SRC,
    section: "Part 7, Speed limits - general rule, s. 94.2",
    url: HTA,
  },
  {
    key: "hta-speeding-offence",
    quote:
      "at a speed greater than 90 km/h if no speed limit has been indicated by a traffic control device",
    source: HTA_SRC,
    section: "Part 7, Speeding offences, s. 95(1)(a)",
    url: HTA,
  },
  {
    key: "hta-reasonable-and-prudent",
    quote:
      "Despite driving at a speed less than or equal to the speed limit, a person is guilty of an offence if the person drives a vehicle on any portion of a highway at a speed or in a manner that (a) is not reasonable and prudent having regard to all circumstances",
    source: HTA_SRC,
    section: "Part 7, Duty to keep reasonable and prudent speed, s. 95(2)",
    url: HTA,
  },
  {
    key: "hta-right-of-way-general",
    quote:
      "where two vehicles enter an intersection from different highways at approximately the same time and there is at the intersection no traffic control device directing the driver of one of the vehicles to yield the right-of-way, the driver of the vehicle on the left shall yield the right-of-way to the vehicle on the right",
    source: HTA_SRC,
    section: "Part 7, General right-of-way rule, s. 128",
    url: HTA,
  },
  {
    key: "hta-left-turn-yield",
    quote:
      "When a driver is within an intersection and intends to turn left he shall yield the right-of-way to traffic that is approaching from the opposite direction and is within the intersection or so close that it constitutes an immediate hazard",
    source: HTA_SRC,
    section: "Part 7, Right-of-way on left turn, s. 129",
    url: HTA,
  },
  {
    key: "hta-yield-after-stop",
    quote:
      "he shall yield the right-of-way to traffic that has entered the intersection upon the other highway or that is approaching thereon and is so close that it constitutes an immediate hazard",
    source: HTA_SRC,
    section: "Part 7, Right-of-way after a required stop, s. 130(a)",
    url: HTA,
  },
  {
    key: "hta-following-too-closely",
    quote:
      "No driver shall follow another vehicle more closely than is reasonable and prudent, having due regard for the speed of the vehicles, and the amount and nature of traffic upon, and the condition of, the highway.",
    source: HTA_SRC,
    section: "Part 7, Following too closely prohibited, s. 117(1)",
    url: HTA,
  },
  {
    key: "hta-move-over-speeds",
    quote:
      "slow the approaching vehicle to not more than (i) 40 km/h if the speed limit in the location of the emergency vehicle or designated vehicle is more than 40 km/h but not more than 79 km/h, and (ii) 60 km/h if the speed limit in the location of the emergency vehicle or designated vehicle is 80 km/h or more",
    source: HTA_SRC,
    section: "Part 7, Basic safety precautions and maximum speed, s. 109.1(2.1)(a)",
    url: HTA,
  },
  {
    key: "hta-school-bus-stop",
    quote:
      "the driver of a vehicle approaching a school bus from the front or the rear must bring the vehicle to a stop not less than five m from the school bus and must not pass the school bus if any of the following equipment on the school bus required under the regulations is operating",
    source: HTA_SRC,
    section: "Part 7, Prohibition on passing school bus, s. 137(2)",
    url: HTA,
  },
  {
    key: "hta-school-bus-divided",
    quote:
      "Subsection (2) does not apply to the driver of a vehicle on a roadway that forms part of a divided highway if the school bus is located on a different roadway of the same highway.",
    source: HTA_SRC,
    section: "Part 7, Passing school bus on divided highway, s. 137(3)",
    url: HTA,
  },
  {
    key: "hta-parking-basics",
    quote:
      "no person shall stop, stand, or park a vehicle (a) on a sidewalk; (b) in front of a driveway; (c) within an intersection or within 3 metres thereof",
    source: HTA_SRC,
    section: "Part 7, Where stopping, standing, parking prohibited, s. 122(1)",
    url: HTA,
  },
  {
    key: "hta-parking-crosswalk",
    quote: "within 3 metres of the approach side of a crosswalk",
    source: HTA_SRC,
    section: "Part 7, Where stopping, standing, parking prohibited, s. 122(1)(f)",
    url: HTA,
  },
  {
    key: "hta-parking-stop-sign",
    quote:
      "within 9 metres upon the approach to any flashing beacon, \"stop\" or \"arrêt stop\" sign, or traffic control signal situated at the side of a roadway",
    source: HTA_SRC,
    section: "Part 7, Where stopping, standing, parking prohibited, s. 122(1)(g)",
    url: HTA,
  },
  {
    key: "hta-parking-bridge",
    quote: "upon a bridge or other elevated structure upon a highway or within a highway tunnel",
    source: HTA_SRC,
    section: "Part 7, Where stopping, standing, parking prohibited, s. 122(1)(l)",
    url: HTA,
  },
  {
    key: "hta-turning-right",
    quote:
      "Where a driver intends to turn right at an intersection he shall approach the intersection and make the turn as close as practicable to the right-hand kerb or edge of the roadway.",
    source: HTA_SRC,
    section: "Part 7, Turning right, s. 121(2)",
    url: HTA,
  },
  {
    key: "hta-turn-safety",
    quote:
      "No person shall turn a vehicle to enter a private road or driveway or otherwise turn a vehicle from a direct course, or move right or left upon a highway, unless the movement can be made with safety.",
    source: HTA_SRC,
    section: "Part 7, Safety requirement, s. 121(8)",
    url: HTA,
  },
  {
    key: "hta-passing-sight-distance",
    quote:
      "where the driver has not a clear view of the highway for a distance of at least 150 metres or his view is obstructed within such distance greater than 150 metres as to create a hazard",
    source: HTA_SRC,
    section: "Part 7, Passing prohibited, s. 116(3)(a)",
    url: HTA,
  },
  {
    key: "hta-stop-position",
    quote:
      "when there is no crosswalk, at a clearly marked stop line; or (b) before entering the crosswalk marked out by lines, on the near side of the intersection",
    source: HTA_SRC,
    section: "Part 7, Stopping when required by traffic control device, s. 136(1)",
    url: HTA,
  },
  {
    key: "hta-slow-driver-right-lane",
    quote:
      "A driver shall, prima facie, be deemed to be a driver to whom subsection (2) applies if the vehicle that he is driving is being driven at a rate of speed less than 30 kilometres per hour",
    source: HTA_SRC,
    section: "Part 7, Application of subsection (2), s. 109(3)",
    url: HTA,
  },
  {
    key: "hta-rotary-island",
    quote: "A driver when passing around a rotary traffic island shall drive to the right of the island.",
    source: HTA_SRC,
    section: "Part 7, Driving around rotary traffic island, s. 109(4)",
    url: HTA,
  },
  {
    key: "hta-pedestrian-right-of-way",
    quote:
      "and the pedestrian is upon the half of the highway upon which a vehicle is travelling, or he is approaching from the other half of the highway and is so close that he is in danger, the driver of the vehicle shall yield the right-of-way to the pedestrian.",
    source: HTA_SRC,
    section: "Part 7, Right-of-way of pedestrian, s. 139(1)",
    url: HTA,
  },
  {
    key: "hta-private-road-stop",
    quote:
      "he shall stop the vehicle immediately before driving onto the sidewalk or onto the sidewalk area extending across the private road, alley, lane, or driveway and he shall yield the right-of-way to traffic that is approaching on the highway and is so close that it constitutes an immediate hazard",
    source: HTA_SRC,
    section: "Part 7, Right-of-way in restricted speed areas, s. 131(1)",
    url: HTA,
  },
  {
    key: "hta-no-stopping-on-crossing",
    quote:
      "No person shall stop a vehicle (a) within a railway crossing; or (b) in a location where any part of the vehicle is over a track in a railway crossing.",
    source: HTA_SRC,
    section: "Part 7, Stopping vehicle within railway crossing prohibited, s. 135.1",
    url: HTA,
  },
  {
    key: "hta-school-bus-railway",
    quote:
      "a controlled or uncontrolled railway crossing if the driver is driving a school bus, whether or not it is carrying passengers",
    source: HTA_SRC,
    section: "Part 7, Stopping at uncontrolled railway crossings, s. 134(3)(a)",
    url: HTA,
  },
  {
    key: "hta-railway-stop-distance",
    quote:
      "not less than 5 m from the rail of the crossing nearest the vehicle's front if the crossing is in a restricted speed area",
    source: HTA_SRC,
    section: "Part 7, Required stopping distances - certain vehicles, s. 134(5)(a)",
    url: HTA,
  },
];
