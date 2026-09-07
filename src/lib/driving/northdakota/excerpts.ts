import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the North Dakota bank - 470 of them: 403 from
// the state's own driver manual, 48 from the North Dakota Century Code, 19 from
// NDDOT web pages and from KnowTo Drive, the online exam NDDOT names as its own.
//
// Sources, and why there are four of them:
//
//  - The 2025-2027 Noncommercial Driver License Manual, Class D, published by
//    the Driver License Division of the North Dakota Department of
//    Transportation and carrying the running footer "Revised 2025" on every
//    page and the publication code DL0126. NDDOT's learner-permit page links to
//    this exact PDF under the label "Online Study Guide", so it is both the
//    handbook and the study guide. It is 56 pages and carries most of what is
//    quoted below.
//  - North Dakota Century Code Title 39, published by the North Dakota
//    Legislative Branch. The manual is better than most at printing its
//    numbers - it gives every speed limit, every parking distance and the
//    100-foot signalling rule - but it still leaves gaps the test can reach:
//    the school-bus exception on a divided highway, the 20 mph limit when the
//    view ahead is blocked inside 100 feet, what the texting ban actually
//    covers, and the fact that the seat belt law became primary enforcement
//    when section 39-21-41.5 was repealed in 2023.
//  - Four dot.nd.gov pages, for the graduated licensing stages, the fees and
//    the point schedule. The most important thing on them is absent from the
//    manual entirely: a driver under 18 is cancelled at six points, not the
//    twelve the manual's table shows.
//  - KnowTo Drive's North Dakota FAQ. NDDOT's own Driver Education page calls
//    KnowTo Drive "the only official online knowledge testing platform, brought
//    to you by the North Dakota Department of Transportation", and its FAQ is
//    the only published source for the exam's 60-minute limit and its retake
//    rules. Five excerpts are taken from it and nothing else.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. The same
// four normalisations the other banks use were applied to the extracted text
// and to nothing else: curly quotes, en dashes and em dashes fold to ASCII;
// runs of whitespace, including the line breaks the PDF inserts mid-sentence,
// collapse to single spaces; the section symbol is spelled out; and where a
// source states a rule as a stem followed by a bulleted list, the items run
// together in the order they appear. No words are changed, dropped or
// reordered.
//
// The manual's own slips are preserved exactly as they stand, because a quote
// that has been tidied up is no longer a quote: "45 dregree angle",
// "Emercency Notification System", "When approching multiple tracks", "the
// driver shouldkeep to the right", "before moving back t normal position",
// "May also operated a Class D vehicle", and the two-column break that runs
// "Doors - function from inside and outside of vehicle" straight into "A horn
// clearly audible for 200 feet".

const MANUAL =
  "North Dakota Noncommercial Driver License Manual, Class D (NDDOT Driver License Division, 2025-2027, Revised 2025)";
const MANUAL_URL =
  "https://www.dot.nd.gov/sites/www/files/documents/Drivers%20-%20documents/noncommercial-manual.pdf";

const ndcc = (s: string) =>
  `North Dakota Century Code Section ${s} (North Dakota Legislative Branch)`;
const ndccUrl = (chapter: string) => `https://ndlegis.gov/cencode/t39c${chapter}.pdf`;

const NDDOT = "North Dakota Department of Transportation, Driver License Division";
const PERMIT_URL = "https://www.dot.nd.gov/driver/how-apply-learners-permit";
const POINTS_URL =
  "https://www.dot.nd.gov/driver/driver-education/driver-license-points-reduction-and-points-schedule";
const REQ_URL =
  "https://www.dot.nd.gov/driver/driver-education/driver-license-requirements";
const DRIVERED_URL = "https://www.dot.nd.gov/driver/driver-education";

const K2D =
  "KnowTo Drive North Dakota, the online knowledge exam NDDOT publishes as its own";
const K2D_URL = "https://knowtodrive.com/northdakota-faq/";

export const northdakotaExcerpts: HandbookExcerpt[] = [
  {
    key: "sign-stop-octagon",
    quote:
      "The Stop sign is the only eightsided sign. The Stop sign tells you " +
      "that you must come to a complete stop before the stop line or " +
      "crosswalk area.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-stop-where",
    quote:
      "If there is no stop line or crosswalk, stop as near as possible " +
      "before the intersection where you can safely see traffic " +
      "approaching from all directions.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-yield",
    quote:
      "The Yield sign means that you must yield the right of way. The " +
      "sign tells you to slow down and stop if necessary so you can yield " +
      "the right of way.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-speed-limit",
    quote:
      "The Speed Limit sign is an example of a regulatory sign showing " +
      "the maximum speed permitted under ideal conditions.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-speed-limit-side",
    quote:
      "These signs will normally be found on the right-hand side of " +
      "streets and highways.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-regulatory-what",
    quote:
      "Regulatory signs control and regulate traffic. They give mandatory " +
      "instructions to the driver.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-regulatory-colour",
    quote:
      "Most are white with black letters or red with white letters.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-three-kinds",
    quote:
      "We use three basic kinds of signs on our streets and highways: " +
      "Regulatory signs, Warning signs, and Guide signs.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-one-way",
    quote:
      "The One Way sign tells you that traffic on that particular road " +
      "flows in the direction of the arrow only.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-wrong-way",
    quote:
      "The Wrong Way sign tells you that you are going the wrong way on a " +
      "street, freeway, or ramp.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-do-not-enter",
    quote:
      "The Do Not Enter sign prohibits the driver from entering a " +
      "restricted road section.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-prohibition-circle",
    quote:
      "These signs are square with black lettering on a white background. " +
      "A red circle with a red slash indicates the action that is " +
      "forbidden.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-do-not-pass-pennant",
    quote:
      "The rectangular \"Do Not Pass\" sign is placed on the right side " +
      "of the road while the pennant-shaped sign is found on the " +
      "left-hand side.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-no-turn-on-red",
    quote:
      "This sign prohibits a right turn on a red light at selected " +
      "intersections. Some intersections display this sign " +
      "electronically.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-two-way-left-turn",
    quote:
      "Two-way Left Turn Only signs are used when a lane in the center of " +
      "the roadway is to be used only by left turning vehicles in either " +
      "direction.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-two-way-left-not-passing",
    quote:
      "The center lane is not intended to be used for passing or " +
      "overtaking.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Regulatory Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-warning-purpose",
    quote:
      "Warning signs are used to warn you of potentially hazardous " +
      "conditions ahead so that you will proceed with extra caution.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Warning Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-warning-colour",
    quote:
      "These signs are yellow with a black legend.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Warning Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-curve-advisory",
    quote:
      "They are often supplemented with an advisory speed sign showing " +
      "the maximum recommended speed to negotiate the curve or turn.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Warning Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-lane-reduction",
    quote:
      "These signs warn you of a reduction in the number of traffic lanes " +
      "ahead. Be sure to move safely into the proper lane.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Warning Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-added-lane",
    quote:
      "The roadway will gain an additional lane of traffic. New traffic " +
      "will not have to merge.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Warning Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-rr-advance",
    quote:
      "The Railroad Advance Warning sign is round with black lettering on " +
      "a yellow background.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Warning Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-rr-advance-means",
    quote:
      "The sign indicates that you are nearing a railroad crossing. You " +
      "should slow down so that you can safely stop if a train is coming.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Warning Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-slow-moving",
    quote:
      "Slow-moving vehicle signs are shaped like a triangle. They are " +
      "orange with a red, reflective border.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Warning Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-slow-moving-speed",
    quote:
      "This sign is mounted on the rear of vehicles or equipment being " +
      "towed at a speed of 25 miles per hour or less.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Warning Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-school-pedestrian-colour",
    quote:
      "Pedestrian Signs May be fluorescent yellow-green or standard " +
      "yellow in color.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Warning Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-slippery-when-wet",
    quote:
      "Slow down because this road is slippery when wet.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Special Warning Signs",
    url: MANUAL_URL,
  },
  {
    key: "wz-channelizing",
    quote:
      "Barricades, vertical panels, drums, cones, and tubes are the most " +
      "commonly used devices to alert drivers of conditions in highway " +
      "and street work areas and to guide drivers safely through the work " +
      "zone.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Channelizing Devices",
    url: MANUAL_URL,
  },
  {
    key: "wz-stripes",
    quote:
      "Stripes sloping downward to the right mean the driver shouldkeep " +
      "to the right. Conversely, stripes sloping downward to the left " +
      "mean keep to the left.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Channelizing Devices",
    url: MANUAL_URL,
  },
  {
    key: "wz-arrow-panels",
    quote:
      "Large flashing or sequencing arrow panels may be used in work " +
      "zones both day and night to direct drivers into certain traffic " +
      "lanes and to inform them that part of the road or street ahead of " +
      "them is closed.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Flashing Arrow Panels",
    url: MANUAL_URL,
  },
  {
    key: "wz-signs-orange",
    quote:
      "Most signs in work areas are diamond shaped. A few signs are " +
      "rectangular. These signs are orange with a black legend.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Construction and Maintenance Devices",
    url: MANUAL_URL,
  },
  {
    key: "wz-fine",
    quote:
      "Failure to comply with work zone speed limits carries an $80 " +
      "minimum fee when work is in progress and workers are present.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Construction and Maintenance Devices",
    url: MANUAL_URL,
  },
  {
    key: "wz-flagpersons",
    quote:
      "Flagpersons are often provided in highway and street work zones to " +
      "stop, slow, or guide traffic safely through the area.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Flagpersons",
    url: MANUAL_URL,
  },
  {
    key: "wz-flagperson-gear",
    quote:
      "Flagpersons wear orange, yellow, strong yellow-green, or " +
      "fluorescent vests, shirts, or jackets and use red flags or " +
      "stop/slow paddles to direct traffic through work zones.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Flagpersons",
    url: MANUAL_URL,
  },
  {
    key: "wz-fatalities",
    quote:
      "98 percent of Work Zone fatalities are travelers. Motorists and " +
      "passengers suffer most of the traffic casualties in work zones.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Work Zone Safety Tips",
    url: MANUAL_URL,
  },
  {
    key: "wz-hazards",
    quote:
      "Work Zones contain many hazards such as uneven pavement, narrow " +
      "lanes, heavy equipment, and loose gravel.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Work Zone Safety Tips",
    url: MANUAL_URL,
  },
  {
    key: "sign-guide-purpose",
    quote:
      "Guide signs provide information about directions, distances, " +
      "available services, points of interest, and other geographical, " +
      "recreational, or cultural information.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Guide Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-guide-shape",
    quote:
      "Guide signs are rectangular in shape, though their colors vary " +
      "according to their message.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Guide Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-milepost",
    quote:
      "The numbers on these signs tell you how many miles you are from " +
      "the south or west border of the state or origin of the route " +
      "within the state.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Guide Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-service-blue",
    quote:
      "Service signs are rectangular. The symbols are white on a blue " +
      "background.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Guide Signs",
    url: MANUAL_URL,
  },
  {
    key: "sign-recreation-brown",
    quote:
      "Recreational area signs are rectangular. The symbols are white on " +
      "a brown background.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Guide Signs",
    url: MANUAL_URL,
  },
  {
    key: "signal-red",
    quote:
      "As with the stop sign, you must stop at a marked stop line or " +
      "before a crosswalk. Remain stopped until the light changes and the " +
      "intersection is clear of pedestrians and vehicles.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "signal-yellow",
    quote:
      "A yellow indication means WARNING or CAUTION. The light is " +
      "changing from green to red.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "signal-green",
    quote:
      "Green means GO-but only if the intersection is clear.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "signal-green-arrow",
    quote:
      "A green arrow means you may enter the intersection to make the " +
      "movement indicated by the arrow. If the green arrow comes on at a " +
      "red light, you may turn in the direction of the arrow.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "signal-green-arrow-yield",
    quote:
      "You must yield the right of way to all pedestrians and vehicles " +
      "already in the intersection.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "signal-right-on-red",
    quote:
      "Note: You may turn right on a red light after stopping when the " +
      "intersection is clear of both pedestrians and vehicles, unless " +
      "there is a sign prohibiting a right turn on a red light.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "signal-left-on-red",
    quote:
      "You may turn left on a red light from a oneway street onto a " +
      "one-way street, unless there is a sign prohibiting this.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "signal-dark",
    quote:
      "If the traffic signals are dark, for example in the event of a " +
      "power outage, the driver of a vehicle shall stop and yield the " +
      "right of way to any vehicle in the intersection.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "signal-flashing-red",
    quote:
      "Flashing red means the same thing as a stop sign-STOP. Proceed " +
      "when the intersection is clear of pedestrians and vehicles.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Flashing Indications",
    url: MANUAL_URL,
  },
  {
    key: "signal-flashing-yellow",
    quote:
      "Flashing yellow at an intersection means proceed with CAUTION.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Flashing Indications",
    url: MANUAL_URL,
  },
  {
    key: "signal-flashing-when",
    quote:
      "Some traffic signals are operated like flashing beacons late at " +
      "night or when traffic volumes are light.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Flashing Indications",
    url: MANUAL_URL,
  },
  {
    key: "signal-fya",
    quote:
      "You may cautiously turn left after yielding to oncoming traffic " +
      "and to pedestrians. Oncoming traffic will typically have a green " +
      "light.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Turn Indications",
    url: MANUAL_URL,
  },
  {
    key: "signal-steady-green-left",
    quote:
      "Left-turning drivers have the right-of-way.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Turn Indications",
    url: MANUAL_URL,
  },
  {
    key: "signal-steady-red-left",
    quote:
      "Left-turning drivers must stop and wait.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Turn Indications",
    url: MANUAL_URL,
  },
  {
    key: "signal-yellow-arrow-left",
    quote:
      "WARNING CAUTION. The left turn signal is changing to red.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Turn Indications",
    url: MANUAL_URL,
  },
  {
    key: "marking-purpose",
    quote:
      "Pavement markings are like traffic signs and signals. They direct " +
      "and control the smooth and orderly movement of traffic.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "marking-broken-yellow",
    quote:
      "Broken yellow center lines are used on two-lane, two-way roads. " +
      "You may cross them only to turn left or to pass another vehicle.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "marking-solid-broken",
    quote:
      "One solid line with one broken line means no passing when you are " +
      "in the lane with the solid line. The solid line may be crossed " +
      "only to turn left.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "marking-double-solid",
    quote:
      "Two solid yellow lines on a two-lane road means no passing in " +
      "either direction. Crossing the centerline is permitted only as " +
      "part of a left-turn maneuver.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "marking-divided",
    quote:
      "Divided Roadways This is a multi-lane roadway with a divider " +
      "separating the traffic flow.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "marking-twltl",
    quote:
      "The center lane is reserved only for left-turning vehicles in " +
      "either direction. Passing or overtaking is not permitted in the " +
      "center lane.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "marking-turn-lanes",
    quote:
      "At many busy intersections there are specially designated left- " +
      "and right-turn lanes. If you wish to turn left, you must use the " +
      "special leftturn lane. If you wish to turn right, you must use the " +
      "special right-turn lane.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "marking-stop-line",
    quote:
      "STOP LINES are wide, white lines that show you where to stop your " +
      "vehicle before entering an intersection.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Stop Intersections",
    url: MANUAL_URL,
  },
  {
    key: "marking-stop-line-crosswalk",
    quote:
      "When stop lines and crosswalk lines are used together, you must " +
      "stop your vehicle before crossing the stop line.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Stop Intersections",
    url: MANUAL_URL,
  },
  {
    key: "marking-unmarked-crosswalk",
    quote:
      "UNMARKED CROSSWALK: Where there are no lines at an intersection, " +
      "you must stop your vehicle before entering the crosswalk (sidewalk " +
      "area) or, if there is no crosswalk, you must stop before your " +
      "vehicle enters the intersection.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Stop Intersections",
    url: MANUAL_URL,
  },
  {
    key: "marking-crosswalk-lines",
    quote:
      "CROSSWALK LINES are a pair of white lines or longitudinal lines " +
      "that mark where pedestrians will walk. Do not block the crosswalk " +
      "with your vehicle.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Stop Intersections",
    url: MANUAL_URL,
  },
  {
    key: "rr-devices",
    quote:
      "Railroad crossings can be marked with several different types of " +
      "devices: warning signs, pavement markings, crossbucks, and signal " +
      "lights.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-look-listen",
    quote:
      "Watch for these warning devices. And when you see them, look, " +
      "listen, and slow down.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-crossbuck",
    quote:
      "If there is more than one track, the sign below tells you the " +
      "number of tracks. Make sure all the tracks are clear and no trains " +
      "are approaching before you cross.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-never-park",
    quote:
      "For safety, never stop or park on railroad tracks for any reason.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-second-train",
    quote:
      "When approching multiple tracks please remember that an additional " +
      "train can be approaching from the opposite direction that the " +
      "previous train has cleared.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-stop-15-feet",
    quote:
      "When a train is crossing, stop at least 15 feet before the " +
      "crossing.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-no-gates",
    quote:
      "not cross the tracks when the red lights are flashing. And never " +
      "drive around the gates when they are down.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-buses-must-stop",
    quote:
      "School buses, vehicles carrying explosives or flammable liquids " +
      "such as gasoline trucks, and buses carrying passengers must stop " +
      "at railroad crossings. These vehicles must stop within 50 feet and " +
      "not less than 15 feet from the tracks.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-dont-pass-stopped",
    quote:
      "Watch out for them and do not pass them when they are stopped at " +
      "the crossing.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-expect-a-train",
    quote:
      "Remember, railroad crossings are always dangerous. Every crossing " +
      "must be approached with the expectation that a train is coming.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-passive",
    quote:
      "Passive Crossings. This type of crossing does not have any type of " +
      "traffic control device. The decision to stop or proceed rests " +
      "entirely in your hands.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Types of Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-active",
    quote:
      "Active Crossings. This type of crossing has a traffic control " +
      "device installed at the crossing to regulate traffic at the " +
      "crossing.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Types of Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-stuck-45-degrees",
    quote:
      "If your vehicle is trapped or stuck on the tracks, evacuate your " +
      "vehicle and walk in the direction of the oncoming train and away " +
      "from the tracks at a 45 dregree angle.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "rr-ens",
    quote:
      "The Federal Railroad Administration posts emergency phone numbers " +
      "on railroad crossing posts or the metal control boxes near the " +
      "tracks.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Emergency Notification System (ENS)",
    url: MANUAL_URL,
  },
  {
    key: "hand-signals-know",
    quote:
      "Even though vehicles are equipped with electrical turn and brake " +
      "lights, you should know the basic hand signals as well.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Hand Signals",
    url: MANUAL_URL,
  },
  {
    key: "signal-100-feet",
    quote:
      "All turn signals of intention to turn must be given continuously " +
      "during the last 100 feet before the turn.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Hand Signals",
    url: MANUAL_URL,
  },
  {
    key: "hand-signals-cyclists",
    quote:
      "Motorists must also be able to recognize hand signals given by " +
      "motorcyclists and bicyclists and give them sufficient space to " +
      "execute their signaled maneuvers as they would another vehicle.",
    source: MANUAL,
    section: "Signs, Signals, and Road Markings - Hand Signals",
    url: MANUAL_URL,
  },
  {
    key: "row-purpose",
    quote:
      "Right-of-way rules are a means of establishing orderly traffic " +
      "movement. If everyone follows these rules, crashes can be reduced.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-defensive",
    quote:
      "For this reason, you must drive defensively. Always be ready to " +
      "yield to those who do not follow the right-of-way rules.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-yield-to-right",
    quote:
      "When two vehicles approach an unsigned intersection at " +
      "approximately the same time, the vehicle on the left side must " +
      "yield to the vehicle on the right.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-look-left-right-left",
    quote:
      "it is recommended to look first to your left, then to your right " +
      "and then left again. Be prepared to yield.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-t-intersection",
    quote:
      "At an uncontrolled T-intersection, the vehicle on the terminating " +
      "street must yield to vehicles on the continuing street.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-left-turn-yield",
    quote:
      "Vehicles turning left must yield to oncoming traffic. Watch for " +
      "vehicles passing on the right side of a vehicle turning left.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-four-way-stop",
    quote:
      "At a four-way stop, the vehicle that stops first goes first. If " +
      "one vehicle goes out of turn, yield to that vehicle so that you do " +
      "not cause a crash.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-pedestrians",
    quote:
      "Pedestrians in marked or unmarked crosswalks have the right of " +
      "way. Drivers must yield when pedestrians are in the driver's lane " +
      "of travel.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-white-cane",
    quote:
      "Pedestrians carrying white canes or with guide dogs are blind or " +
      "have greatly reduced vision. Just as in other pedestrian " +
      "situations, motorists are required to yield or stop for anyone who " +
      "may have begun crossing a street.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-blind-stop-behind",
    quote:
      "When stopping at an intersection, be sure to stop behind the " +
      "crosswalk to allow the visually-impaired traveler an unobstructed " +
      "path.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-guide-dog",
    quote:
      "Motorists and pedestrians should not distract a guide dog in any " +
      "way.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-private-drive",
    quote:
      "Vehicles entering or crossing a roadway from a private drive must " +
      "yield to all oncoming traffic.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-emerging-stop",
    quote:
      "Vehicles emerging from a driveway, alley, private road, or " +
      "building within a business or residential district must come to a " +
      "complete stop immediately prior to crossing a sidewalk area and, " +
      "if no sidewalk, vehicles must stop before entering the roadway.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "uturn-500-feet",
    quote:
      "You may not make a U-turn near the crest of a hill or any curve " +
      "where the driver cannot see 500 feet or more.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "row-emergency-vehicles",
    quote:
      "Emergency vehicles always have the right of way.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "emergency-pull-right",
    quote:
      "When an emergency or law enforcement vehicle is flashing its red, " +
      "white, or blue lights or using its siren, you must immediately " +
      "come to a stop along the right-hand curb or edge of the road.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "emergency-stay-stopped",
    quote:
      "You must remain stopped until the emergency or law enforcement " +
      "vehicle has passed. Do not stop in the middle of the intersection.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "emergency-scene-stop",
    quote:
      "When an emergency or law enforcement vehicle is parked at the " +
      "scene of a crash with its emergency lights flashing, you must " +
      "drive to the right-hand side of the roadway and stop.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "emergency-scene-pass",
    quote:
      "Once stopped, you may pass at your risk when the roadway is clear. " +
      "If there is a police officer directing traffic at the scene, you " +
      "must obey the officer's instructions.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "move-over-interstate",
    quote:
      "If an emergency vehicle, law enforcement vehicle, or North Dakota " +
      "Department of Transportation maintenance vehicle is parked on the " +
      "Interstate system or a multilane highway with its emergency or " +
      "work lights flashing, move over to the opposite lane and proceed " +
      "with due caution.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "yellow-flashing-light",
    quote:
      "The yellow-flashing light is used mostly on tow trucks and slow " +
      "moving vehicles. These lights warn you to slow down.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "schoolbus-both-directions",
    quote:
      "When a school bus is stopped and flashing its red lights, drivers " +
      "approaching from both directions must stop.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "schoolbus-when-proceed",
    quote:
      "The drivers cannot proceed until 1) the bus begins moving; or 2) " +
      "the bus driver signals to let vehicles pass; or 3) the red lights " +
      "are no longer flashing.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "schoolbus-yellow-lights",
    quote:
      "When a school bus is equipped with yellow caution lights, these " +
      "lights may be used as a warning that the school bus is about to " +
      "stop and that the red flashing lights will soon come on.",
    source: MANUAL,
    section: "Rules of the Road - Right of Way",
    url: MANUAL_URL,
  },
  {
    key: "speed-ideal-conditions",
    quote:
      "Speed limits are maximum limits to be traveled only when driving " +
      "conditions are ideal. Sometimes conditions may require you to " +
      "drive slower than the posted speed limit allows.",
    source: MANUAL,
    section: "Rules of the Road - Speed Limits",
    url: MANUAL_URL,
  },
  {
    key: "speed-never-faster",
    quote:
      "Never drive faster than the posted speed limit or conditions " +
      "allow. Authorities may also post minimum speed limits if deemed " +
      "necessary for the safe movement of traffic.",
    source: MANUAL,
    section: "Rules of the Road - Speed Limits",
    url: MANUAL_URL,
  },
  {
    key: "speed-rr-obstructed",
    quote:
      "20 miles per hour when approaching any railway crossing when your " +
      "view of the track is obstructed, unless otherwise posted.",
    source: MANUAL,
    section: "Rules of the Road - Speed Limits",
    url: MANUAL_URL,
  },
  {
    key: "speed-intersection-obstructed",
    quote:
      "20 miles per hour when approaching an intersection when your view " +
      "of the intersection is in any way obstructed, unless otherwise " +
      "posted.",
    source: MANUAL,
    section: "Rules of the Road - Speed Limits",
    url: MANUAL_URL,
  },
  {
    key: "speed-school",
    quote:
      "20 miles per hour when you pass by a school during school recess " +
      "or while children are going to or leaving school during opening or " +
      "closing hours of school, unless otherwise posted.",
    source: MANUAL,
    section: "Rules of the Road - Speed Limits",
    url: MANUAL_URL,
  },
  {
    key: "speed-business-residential",
    quote:
      "25 miles per hour in a business or residential district, unless " +
      "otherwise posted.",
    source: MANUAL,
    section: "Rules of the Road - Speed Limits",
    url: MANUAL_URL,
  },
  {
    key: "speed-gravel",
    quote:
      "55 miles per hour on gravel, dirt, or loose surface roads unless " +
      "otherwise posted, and on paved two-lane county and township " +
      "highways if there is no speed limit posted.",
    source: MANUAL,
    section: "Rules of the Road - Speed Limits",
    url: MANUAL_URL,
  },
  {
    key: "speed-rural-two-lane",
    quote:
      "65 miles per hour on rural paved 2-lane highways if posted for " +
      "that speed.",
    source: MANUAL,
    section: "Rules of the Road - Speed Limits",
    url: MANUAL_URL,
  },
  {
    key: "speed-multilane",
    quote:
      "70 miles per hour on paved and divided multi-lane highways, unless " +
      "otherwise posted.",
    source: MANUAL,
    section: "Rules of the Road - Speed Limits",
    url: MANUAL_URL,
  },
  {
    key: "speed-interstate",
    quote:
      "80 miles per hour on rural Interstate highways, unless otherwise " +
      "posted.",
    source: MANUAL,
    section: "Rules of the Road - Speed Limits",
    url: MANUAL_URL,
  },
  {
    key: "pass-right-side",
    quote:
      "On two-way roads you must drive on the righthand side of the " +
      "roadway; when you pass you are driving against the flow of the " +
      "oncoming traffic.",
    source: MANUAL,
    section: "Rules of the Road - Passing",
    url: MANUAL_URL,
  },
  {
    key: "pass-questions",
    quote:
      "Before you pass another vehicle, ask yourself these questions: Is " +
      "the pass necessary? Am I in or approaching a no passing zone? " +
      "(Whenever there is a hill or a curve ahead, you must treat it as " +
      "if there is oncoming traffic just beyond it.) Can I return to my " +
      "lane before meeting an approaching vehicle?",
    source: MANUAL,
    section: "Rules of the Road - Passing",
    url: MANUAL_URL,
  },
  {
    key: "pass-hill-curve-assume",
    quote:
      "Whenever there is a hill or a curve ahead, you must treat it as if " +
      "there is oncoming traffic just beyond it.",
    source: MANUAL,
    section: "Rules of the Road - Passing",
    url: MANUAL_URL,
  },
  {
    key: "pass-200-feet",
    quote:
      "Give yourself enough time to get completely beyond the vehicle " +
      "that you are passing, and return to your proper lane at least 200 " +
      "feet before meeting an approaching vehicle.",
    source: MANUAL,
    section: "Rules of the Road - Passing",
    url: MANUAL_URL,
  },
  {
    key: "pass-mirror",
    quote:
      "Do not return to your lane until you can see the image of the " +
      "entire front of the vehicle you passed within the inside rear-view " +
      "mirror.",
    source: MANUAL,
    section: "Rules of the Road - Passing",
    url: MANUAL_URL,
  },
  {
    key: "pass-never-leave-roadway",
    quote:
      "When passing, never leave the main-traveled roadway.",
    source: MANUAL,
    section: "Rules of the Road - Passing",
    url: MANUAL_URL,
  },
  {
    key: "pass-being-passed",
    quote:
      "When being passed, do not speed up.",
    source: MANUAL,
    section: "Rules of the Road - Passing",
    url: MANUAL_URL,
  },
  {
    key: "pass-never-100-feet",
    quote:
      "Never Pass: While approaching the top of a hill or a curve. Within " +
      "100 feet of an intersection, a railroad crossing, or a tunnel.",
    source: MANUAL,
    section: "Rules of the Road - Passing",
    url: MANUAL_URL,
  },
  {
    key: "pass-never-obstructed",
    quote:
      "When your view of the road is reduced or obstructed by fog, snow, " +
      "or rain.",
    source: MANUAL,
    section: "Rules of the Road - Passing",
    url: MANUAL_URL,
  },
  {
    key: "pass-head-on",
    quote:
      "Many head-on collisions occur while one vehicle is passing " +
      "another. Even while driving in the left lane of a four-lane " +
      "highway, be aware that you might collide with a vehicle going the " +
      "wrong way.",
    source: MANUAL,
    section: "Rules of the Road - Passing",
    url: MANUAL_URL,
  },
  {
    key: "lane-change-signal",
    quote:
      "If you must change lanes, make sure the lane is clear and signal " +
      "your movement. If possible, avoid changing lanes within an " +
      "intersection.",
    source: MANUAL,
    section: "Rules of the Road - Lane Changes",
    url: MANUAL_URL,
  },
  {
    key: "lane-change-shoulder-check",
    quote:
      "Check your mirrors and look over your shoulder for vehicles behind " +
      "you and already in the other lane. Be aware of \"blind spots\" or " +
      "areas where mirrors fail to pick up approaching traffic.",
    source: MANUAL,
    section: "Rules of the Road - Lane Changes",
    url: MANUAL_URL,
  },
  {
    key: "lane-change-one-at-a-time",
    quote:
      "Change only one lane at a time and be sure to cancel your signal " +
      "when you complete the lane change.",
    source: MANUAL,
    section: "Rules of the Road - Lane Changes",
    url: MANUAL_URL,
  },
  {
    key: "lane-change-responsible",
    quote:
      "Remember: The driver of the vehicle making the lane change is " +
      "responsible for safely changing lanes.",
    source: MANUAL,
    section: "Rules of the Road - Lane Changes",
    url: MANUAL_URL,
  },
  {
    key: "stopping-300-feet",
    quote:
      "At 55 miles per hour, it takes approximately 300 feet or one city " +
      "block on dry pavement to stop.",
    source: MANUAL,
    section: "Rules of the Road - Following and Stopping Distances",
    url: MANUAL_URL,
  },
  {
    key: "following-space-for-passer",
    quote:
      "When one vehicle follows another, there must be enough distance " +
      "between them to allow for a passing vehicle to come into that " +
      "space without any danger.",
    source: MANUAL,
    section: "Rules of the Road - Following and Stopping Distances",
    url: MANUAL_URL,
  },
  {
    key: "following-three-second",
    quote:
      "The \"three-second rule\" is a way to measure the distance that " +
      "you should use as a cushion when following another vehicle.",
    source: MANUAL,
    section: "Rules of the Road - Following and Stopping Distances",
    url: MANUAL_URL,
  },
  {
    key: "following-count",
    quote:
      "When the rear bumper of the vehicle ahead of you passes the mark, " +
      "start counting the seconds it takes you to reach the same spot.",
    source: MANUAL,
    section: "Rules of the Road - Following and Stopping Distances",
    url: MANUAL_URL,
  },
  {
    key: "following-too-close",
    quote:
      "If you reach the spot before you count \"onethousand-and-three,\" " +
      "you are following too closely.",
    source: MANUAL,
    section: "Rules of the Road - Following and Stopping Distances",
    url: MANUAL_URL,
  },
  {
    key: "following-four-seconds",
    quote:
      "Sometimes you need even more following distance, as much as four " +
      "or more seconds.",
    source: MANUAL,
    section: "Rules of the Road - Following and Stopping Distances",
    url: MANUAL_URL,
  },
  {
    key: "following-when-more",
    quote:
      "This is especially true when: The roads are slippery. Following " +
      "motorcycles.",
    source: MANUAL,
    section: "Rules of the Road - Following and Stopping Distances",
    url: MANUAL_URL,
  },
  {
    key: "practice-3-4-second",
    quote:
      "Keep at least a 3-4 second space between your vehicle and others " +
      "in traffic flow. Try to stay centered in your lane of travel.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - Do These Each Time You Practice",
    url: MANUAL_URL,
  },
  {
    key: "turn-check-both-ways",
    quote:
      "When making any turn, you should check both ways for traffic and " +
      "pedestrians. You must also signal continuously for the last 100 " +
      "feet before the turn.",
    source: MANUAL,
    section: "Rules of the Road - Turning",
    url: MANUAL_URL,
  },
  {
    key: "turn-right-close-curb",
    quote:
      "When approaching an intersection to make a right turn, stay as far " +
      "to the right as possible. Make the turn close to the right curb.",
    source: MANUAL,
    section: "Rules of the Road - Turning",
    url: MANUAL_URL,
  },
  {
    key: "turn-left-two-to-two",
    quote:
      "When turning left from a two-way road onto a two-way road, begin " +
      "as close to the centerline as possible and complete the turn as " +
      "indicated in the picture.",
    source: MANUAL,
    section: "Rules of the Road - Turning",
    url: MANUAL_URL,
  },
  {
    key: "turn-left-one-to-one",
    quote:
      "To turn left from a one-way to a one-way, begin the turn from the " +
      "left lane. Make the turn close to the left curb.",
    source: MANUAL,
    section: "Rules of the Road - Turning",
    url: MANUAL_URL,
  },
  {
    key: "turn-left-two-to-one",
    quote:
      "To turn left from a two-way road onto a oneway road, approach the " +
      "turn with your left wheels close to the centerline of the road. " +
      "Make the turn before reaching the center of the intersection, and " +
      "enter the left lane of the one-way road.",
    source: MANUAL,
    section: "Rules of the Road - Turning",
    url: MANUAL_URL,
  },
  {
    key: "turn-left-onto-four-lane",
    quote:
      "Make the turn so that you enter the passing lane of the four-lane " +
      "highway. When traffic permits, move to the right, out of the " +
      "passing lane.",
    source: MANUAL,
    section: "Rules of the Road - Turning",
    url: MANUAL_URL,
  },
  {
    key: "roundabout-what",
    quote:
      "A roundabout is a circular intersection where vehicles travel " +
      "around a center island in a counter-clockwise direction.",
    source: MANUAL,
    section: "Rules of the Road - Roundabouts",
    url: MANUAL_URL,
  },
  {
    key: "roundabout-lane-choice",
    quote:
      "If more than one lane exists, use the left lane to turn left, the " +
      "right lane to turn right, and all lanes to go through unless " +
      "directed otherwise by signs and pavement markings.",
    source: MANUAL,
    section: "Rules of the Road - Roundabouts",
    url: MANUAL_URL,
  },
  {
    key: "roundabout-yield-circulating",
    quote:
      "Yield to circulating traffic when entering the roundabout. 5. Stay " +
      "in your lane within the roundabout.",
    source: MANUAL,
    section: "Rules of the Road - Roundabouts",
    url: MANUAL_URL,
  },
  {
    key: "roundabout-trucks",
    quote:
      "Always assume trucks need all available space-do not pass them!",
    source: MANUAL,
    section: "Rules of the Road - Roundabouts",
    url: MANUAL_URL,
  },
  {
    key: "roundabout-emergency",
    quote:
      "Clear the roundabout to allow emergency vehicles to pass and do " +
      "not enter the roundabout if one is approaching.",
    source: MANUAL,
    section: "Rules of the Road - Roundabouts",
    url: MANUAL_URL,
  },
  {
    key: "roundabout-apron",
    quote:
      "To assist large trucks, the center island includes an apron to " +
      "accommodate the rear wheels of the vehicle.",
    source: MANUAL,
    section: "Rules of the Road - Roundabouts",
    url: MANUAL_URL,
  },
  {
    key: "interstate-reaction",
    quote:
      "Speeds are higher on the Interstate than on city streets. Because " +
      "of this, your vehicle will travel further during your reaction " +
      "time.",
    source: MANUAL,
    section: "Rules of the Road - Interstate Driving",
    url: MANUAL_URL,
  },
  {
    key: "interstate-keep-right",
    quote:
      "Keep to the right if you are traveling slowly.",
    source: MANUAL,
    section: "Rules of the Road - Interstate Driving",
    url: MANUAL_URL,
  },
  {
    key: "interstate-never-stop",
    quote:
      "Never stop on the traveled part of the roadway. In an emergency, " +
      "stop on the shoulder, and raise your hood to show difficulty.",
    source: MANUAL,
    section: "Rules of the Road - Interstate Driving",
    url: MANUAL_URL,
  },
  {
    key: "interstate-no-backing",
    quote:
      "Never back up on the Interstate. If you miss your interchange, go " +
      "on to the next one. Do not use median crossovers. These are for " +
      "authorized vehicles only such as emergency and maintenance " +
      "vehicles.",
    source: MANUAL,
    section: "Rules of the Road - Interchanges",
    url: MANUAL_URL,
  },
  {
    key: "ramp-no-backing",
    quote:
      "Never back up on a ramp. If you exit at the wrong interchange, you " +
      "must follow it out. Return to the highway by the \"on\" ramp.",
    source: MANUAL,
    section: "Rules of the Road - Interchanges",
    url: MANUAL_URL,
  },
  {
    key: "ramp-entrance-merge",
    quote:
      "Entrance ramps allow you to adjust your speed to merge safely with " +
      "the flow of traffic on the highway. Stopping on these ramps should " +
      "be avoided.",
    source: MANUAL,
    section: "Rules of the Road - Interchanges",
    url: MANUAL_URL,
  },
  {
    key: "freeway-yield",
    quote:
      "Unless posted signs indicate otherwise, any vehicle entering a " +
      "freeway from an entrance ramp must yield the right of way to " +
      "vehicles on the main roadway.",
    source: MANUAL,
    section: "Rules of the Road - Interchanges",
    url: MANUAL_URL,
  },
  {
    key: "night-overdrive",
    quote:
      "You can only see as far as your headlights, and this cuts down on " +
      "your time to react. Be mindful not to overdrive your headlights.",
    source: MANUAL,
    section: "Rules of the Road - Night Driving",
    url: MANUAL_URL,
  },
  {
    key: "night-headlights-sunset",
    quote:
      "Use your headlights from sunset to sunrise, and at any other time " +
      "necessary for safe driving.",
    source: MANUAL,
    section: "Rules of the Road - Night Driving",
    url: MANUAL_URL,
  },
  {
    key: "night-headlights-weather",
    quote:
      "Use your headlights during inclement weather when visibility is " +
      "less than 1,000 feet due to rain, snow, sleet, hail, smoke, or " +
      "fog.",
    source: MANUAL,
    section: "Rules of the Road - Night Driving",
    url: MANUAL_URL,
  },
  {
    key: "night-dim-500-300",
    quote:
      "Dim your headlights at least 500 feet before meeting traffic and " +
      "within 300 feet when following another vehicle.",
    source: MANUAL,
    section: "Rules of the Road - Night Driving",
    url: MANUAL_URL,
  },
  {
    key: "night-blinded",
    quote:
      "If you meet a vehicle that does not dim its lights, look to the " +
      "right edge of the road to avoid being blinded.",
    source: MANUAL,
    section: "Rules of the Road - Night Driving",
    url: MANUAL_URL,
  },
  {
    key: "night-deer",
    quote:
      "Pay close attention at dawn and dusk for animals, especially for " +
      "deer. Drive at slower speeds in areas where deer crossing signs " +
      "are posted.",
    source: MANUAL,
    section: "Rules of the Road - Night Driving",
    url: MANUAL_URL,
  },
  {
    key: "night-do-not-swerve",
    quote:
      "Do not swerve to avoid an animal because this could result in a " +
      "more serious crash like hitting a tree or another vehicle, or " +
      "possibly rolling over.",
    source: MANUAL,
    section: "Rules of the Road - Night Driving",
    url: MANUAL_URL,
  },
  {
    key: "night-clean-windshield",
    quote:
      "Clean your windshield inside and out; this will reduce the amount " +
      "of glare from oncoming vehicles.",
    source: MANUAL,
    section: "Rules of the Road - Night Driving",
    url: MANUAL_URL,
  },
  {
    key: "park-hill-signs",
    quote:
      "DOWNHILL TURN WHEELS TOWARD CURB UPHILL TURN WHEELS AWAY FROM CURB " +
      "UPHILL NO CURB TURN WHEELS TOWARD SHOULDER",
    source: MANUAL,
    section: "Rules of the Road - Parking on a Hill",
    url: MANUAL_URL,
  },
  {
    key: "park-parallel-one-foot",
    quote:
      "When parallel parking your vehicle, your wheels should be parallel " +
      "to the right-hand curb and within one foot of the right-hand curb.",
    source: MANUAL,
    section: "Rules of the Road - Parallel Parking",
    url: MANUAL_URL,
  },
  {
    key: "park-parallel-first-step",
    quote:
      "Signal your movement and stop even with the vehicle ahead and " +
      "about two feet away from it.",
    source: MANUAL,
    section: "Rules of the Road - Parallel Parking",
    url: MANUAL_URL,
  },
  {
    key: "park-leaving-space",
    quote:
      "Look to the rear over your shoulder as well as in the rear-view " +
      "mirror. 2. Signal before you start to move.",
    source: MANUAL,
    section: "Rules of the Road - Leaving a Parking Space",
    url: MANUAL_URL,
  },
  {
    key: "park-leaving-yield",
    quote:
      "Yield the right of way to oncoming vehicles. 4. Enter traffic in " +
      "the nearest lane, and remain in that lane until safe to change to " +
      "another lane.",
    source: MANUAL,
    section: "Rules of the Road - Leaving a Parking Space",
    url: MANUAL_URL,
  },
  {
    key: "park-emergency-off-pavement",
    quote:
      "When you have to make an emergency stop, park with all four wheels " +
      "off the traveled pavement, if possible.",
    source: MANUAL,
    section: "Rules of the Road - Emergency Parking",
    url: MANUAL_URL,
  },
  {
    key: "park-lamps-at-night",
    quote:
      "Between one-half hour after sunset and onehalf hour before " +
      "sunrise, your vehicle must display at least one white or amber " +
      "lamp in front and a red light on the rear, both visible for a " +
      "distance of 1,000 feet when parked on a public highway.",
    source: MANUAL,
    section: "Rules of the Road - Emergency Parking",
    url: MANUAL_URL,
  },
  {
    key: "park-no-sidewalk-driveway",
    quote:
      "Do Not Park: On a sidewalk or in front of a driveway. On or within " +
      "10 feet of a crosswalk at an intersection.",
    source: MANUAL,
    section: "Rules of the Road - Do Not Park",
    url: MANUAL_URL,
  },
  {
    key: "park-hydrant-10",
    quote:
      "Within 10 feet of a fire hydrant. Within an intersection.",
    source: MANUAL,
    section: "Rules of the Road - Do Not Park",
    url: MANUAL_URL,
  },
  {
    key: "park-double-parking",
    quote:
      "On the street side of a parked vehicle. This violation is called " +
      "double parking.",
    source: MANUAL,
    section: "Rules of the Road - Do Not Park",
    url: MANUAL_URL,
  },
  {
    key: "park-bridge-tunnel",
    quote:
      "On a bridge, overpass, or in a tunnel or underpass.",
    source: MANUAL,
    section: "Rules of the Road - Do Not Park",
    url: MANUAL_URL,
  },
  {
    key: "park-15-feet-signal",
    quote:
      "Within 15 feet of a flashing beacon, a stop sign, or a traffic " +
      "control signal placed on the side of the roadway.",
    source: MANUAL,
    section: "Rules of the Road - Do Not Park",
    url: MANUAL_URL,
  },
  {
    key: "park-safety-zone",
    quote:
      "Between a safety zone and the curb next to it or within 15 feet of " +
      "points on the curb immediately opposite the ends of a safety zone. " +
      "Safety zones are marked areas set aside for pedestrians.",
    source: MANUAL,
    section: "Rules of the Road - Do Not Park",
    url: MANUAL_URL,
  },
  {
    key: "park-accessible",
    quote:
      "In a designated Accessible Parking space unless in possession of " +
      "the appropriate placard or 'Accessible' license plate. Do not park " +
      "on the diagonal lines next to the space.",
    source: MANUAL,
    section: "Rules of the Road - Do Not Park",
    url: MANUAL_URL,
  },
  {
    key: "tow-chains-25",
    quote:
      "When traveling faster than 25 miles per hour, you need safety " +
      "chains or brakes capable of holding the trailer if the coupling " +
      "breaks.",
    source: MANUAL,
    section: "Rules of the Road - Towing",
    url: MANUAL_URL,
  },
  {
    key: "tow-lights",
    quote:
      "You need turn signals, stop lights, two red reflectors, and two " +
      "red taillights mounted on the rear of the trailer and visible for " +
      "a distance of 1,000 feet.",
    source: MANUAL,
    section: "Rules of the Road - Towing",
    url: MANUAL_URL,
  },
  {
    key: "tow-mirror-200",
    quote:
      "Every vehicle must have a mirror allowing you to see at least 200 " +
      "feet to the rear.",
    source: MANUAL,
    section: "Rules of the Road - Towing",
    url: MANUAL_URL,
  },
  {
    key: "tow-wind",
    quote:
      "For your safety, it is better to slow down when you are towing a " +
      "trailer in a strong wind.",
    source: MANUAL,
    section: "Rules of the Road - Towing",
    url: MANUAL_URL,
  },
  {
    key: "coasting-neutral",
    quote:
      "The driver of any motor vehicle, when traveling upon a downgrade, " +
      "may not coast with the gears or transmission of such vehicle in " +
      "neutral.",
    source: MANUAL,
    section: "Rules of the Road - Coasting Prohibited",
    url: MANUAL_URL,
  },
  {
    key: "backing-responsible",
    quote:
      "When backing your vehicle is necessary, it must be done without " +
      "interfering with other traffic. You are responsible for backing " +
      "onto a lane of traffic safely.",
    source: MANUAL,
    section: "Rules of the Road - Backing",
    url: MANUAL_URL,
  },
  {
    key: "backing-walk-around",
    quote:
      "To be safe, before backing you should walk around your vehicle to " +
      "check for clearance.",
    source: MANUAL,
    section: "Rules of the Road - Backing",
    url: MANUAL_URL,
  },
  {
    key: "litter-500",
    quote:
      "If you throw or deposit any litter on any public highway, you are " +
      "subject to a $500 fine.",
    source: MANUAL,
    section: "Rules of the Road - Littering",
    url: MANUAL_URL,
  },
  {
    key: "crash-report-4000",
    quote:
      "If you are involved in a crash that results in the combined damage " +
      "of $4,000 or more, or results in personal injury or death, you " +
      "must: Immediately report it to the local police if you are in a " +
      "city.",
    source: MANUAL,
    section: "Rules of the Road - Crash Reports",
    url: MANUAL_URL,
  },
  {
    key: "crash-report-outside-city",
    quote:
      "Immediately report it to the Highway Patrol or the County " +
      "Sheriff's Office if you are outside city limits.",
    source: MANUAL,
    section: "Rules of the Road - Crash Reports",
    url: MANUAL_URL,
  },
  {
    key: "crash-exchange",
    quote:
      "In all crashes involving injury or damage, the drivers must " +
      "exchange the following information: driver's name, address, motor " +
      "vehicle insurance company, and policy number.",
    source: MANUAL,
    section: "Rules of the Road - Crash Reports",
    url: MANUAL_URL,
  },
  {
    key: "crash-unattended",
    quote:
      "Any driver who hits an unattended vehicle must immediately locate " +
      "and notify the owner. If the owner cannot be found, the driver " +
      "must leave a note at a conspicuous place on the unattended " +
      "vehicle.",
    source: MANUAL,
    section: "Rules of the Road - Crash Reports",
    url: MANUAL_URL,
  },
  {
    key: "crash-note-contents",
    quote:
      "The note must list the driver's name, address, and motor vehicle " +
      "insurance company.",
    source: MANUAL,
    section: "Rules of the Road - Crash Reports",
    url: MANUAL_URL,
  },
  {
    key: "crash-owner-five-days",
    quote:
      "Whenever the driver is physically incapable of giving notice of a " +
      "crash and also is not the owner of the vehicle, then the owner of " +
      "the vehicle involved shall, within five days after learning of the " +
      "crash, give notice and insurance information not given by the " +
      "driver.",
    source: MANUAL,
    section: "Rules of the Road - Crash Reports",
    url: MANUAL_URL,
  },
  {
    key: "insurance-required",
    quote:
      "No person shall drive a motor vehicle in the state of North Dakota " +
      "without a valid policy of liability insurance in effect.",
    source: MANUAL,
    section: "Rules of the Road - Liability Insurance",
    url: MANUAL_URL,
  },
  {
    key: "insurance-fine",
    quote:
      "The fine for operating an uninsured motor vehicle is $150 for a " +
      "first violation and $300 for a second or subsequent violation in " +
      "three years and may result in a license suspension.",
    source: MANUAL,
    section: "Rules of the Road - Liability Insurance",
    url: MANUAL_URL,
  },
  {
    key: "insurance-produce",
    quote:
      "The name of the motor vehicle insurance policy carrier and the " +
      "policy number of the driver must be furnished to a law enforcement " +
      "officer upon request.",
    source: MANUAL,
    section: "Rules of the Road - Liability Insurance",
    url: MANUAL_URL,
  },
  {
    key: "emergency-511",
    quote:
      "FOR EMERGENCY HIGHWAY ASSISTANCE DIAL 911 FOR WEATHER AND ROAD " +
      "CONDITIONS DIAL 511",
    source: MANUAL,
    section: "Rules of the Road - Liability Insurance",
    url: MANUAL_URL,
  },
  {
    key: "winter-closed-road",
    quote:
      "It is not legal to enter a road that is officially closed due to " +
      "hazardous conditions. The penalty for doing this is a $250 fine.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Winter Driving",
    url: MANUAL_URL,
  },
  {
    key: "winter-double-distance",
    quote:
      "Snow tires or tire chains are helpful, but you should still double " +
      "your distance for following other vehicles.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Winter Driving",
    url: MANUAL_URL,
  },
  {
    key: "winter-studded-tires",
    quote:
      "Studded snow tires may be used from October 15 to April 15.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Winter Driving",
    url: MANUAL_URL,
  },
  {
    key: "winter-bridges-ice",
    quote:
      "Remember that on bridges and shaded spots, frost and ice form " +
      "quicker and are retained longer than on the rest of the roadway.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Winter Driving",
    url: MANUAL_URL,
  },
  {
    key: "winter-abs",
    quote:
      "Keep firm and continuous pressure on antilock brakes (ABS). " +
      "Manually pumping antilock brakes, or letting up on them, decreases " +
      "their effectiveness because it turns the system off and on.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Winter Driving",
    url: MANUAL_URL,
  },
  {
    key: "winter-drum-brakes",
    quote:
      "To stop on ice, you should pump the brakes when driving vehicles " +
      "equipped with drumtype brakes on all four wheels.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Winter Driving",
    url: MANUAL_URL,
  },
  {
    key: "winter-survival-kit",
    quote:
      "Carry a winter survival kit in your vehicle: warm clothing, " +
      "footwear, shovel, energy food, etc.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Winter Driving",
    url: MANUAL_URL,
  },
  {
    key: "winter-stay-with-vehicle",
    quote:
      "If your vehicle becomes stuck in a snowstorm, stay with the " +
      "vehicle! Most deaths occur when people leave their vehicles and " +
      "get lost.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Winter Driving",
    url: MANUAL_URL,
  },
  {
    key: "winter-carbon-monoxide",
    quote:
      "Open your windows slightly and run the vehicle and heater for only " +
      "short periods of time to avoid carbon monoxide poisoning.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Winter Driving",
    url: MANUAL_URL,
  },
  {
    key: "winter-feel-roadway",
    quote:
      "Try your brakes while driving slowly and adjust your speed to how " +
      "much traction you have.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Winter Driving",
    url: MANUAL_URL,
  },
  {
    key: "plow-stay-back",
    quote:
      "Stay well back from snowplows. Sometimes they have to stop and " +
      "back up. Plow drivers can't see directly behind themselves, and " +
      "plows also throw sanding material.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Meeting Snow Removal Equipment",
    url: MANUAL_URL,
  },
  {
    key: "plow-whiteout",
    quote:
      "Never drive through \"whiteouts\" caused by crosswinds or plowing " +
      "light snow. Snowplows pull over and stop frequently to allow " +
      "traffic to pass. Be patient and wait until you can see.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Meeting Snow Removal Equipment",
    url: MANUAL_URL,
  },
  {
    key: "plow-sanded-look",
    quote:
      "Don't assume you'll have good traction because the road \"looks\" " +
      "sanded. The sand can sink into the snow-pack, leaving a slick " +
      "surface.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Meeting Snow Removal Equipment",
    url: MANUAL_URL,
  },
  {
    key: "winter-crashes-too-fast",
    quote:
      "Slow down and drive according to the conditions. Most winter " +
      "crashes are caused by driving too fast for conditions.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Meeting Snow Removal Equipment",
    url: MANUAL_URL,
  },
  {
    key: "skid-cause",
    quote:
      "Most skids are the result of driving too fast for the road " +
      "conditions on slippery roadways. The key to safe vehicle operation " +
      "is slower speeds.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Skids",
    url: MANUAL_URL,
  },
  {
    key: "skid-rwd",
    quote:
      "In rear-wheel drive automobiles, you should stay off the brakes " +
      "and gradually ease off the accelerator. Turn your wheels in the " +
      "direction the rear end of your vehicle is skidding.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Skids",
    url: MANUAL_URL,
  },
  {
    key: "skid-rwd-direction",
    quote:
      "If the rear end of the vehicle skids right, steer right. If the " +
      "rear end of the vehicle skids left, steer left.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Skids",
    url: MANUAL_URL,
  },
  {
    key: "skid-fwd",
    quote:
      "When front-wheel drive vehicles start to skid when traveling at " +
      "moderate speeds, you should accelerate slightly and steer in the " +
      "direction you want to go.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Skids",
    url: MANUAL_URL,
  },
  {
    key: "skid-4wd",
    quote:
      "Four-wheel drive vehicles have a tendency of giving the driver a " +
      "false sense of security. Therefore, slower speeds on slippery " +
      "surfaces are extremely important.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Skids",
    url: MANUAL_URL,
  },
  {
    key: "rain-slippery-start",
    quote:
      "Water combines with the road dirt and oil to form a slick film " +
      "between your tires and the roadway surface.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Rain",
    url: MANUAL_URL,
  },
  {
    key: "rain-hydroplaning",
    quote:
      "When the water on the roadway becomes deeper, another hazardous " +
      "situation occurs: hydroplaning. This occurs when your tires ride " +
      "on the water and not on roadway surface.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Rain",
    url: MANUAL_URL,
  },
  {
    key: "flood-six-inches",
    quote:
      "Remember, six inches of water will reach the bottom of most " +
      "passenger cars, causing loss of control or possible stalling.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Flooding",
    url: MANUAL_URL,
  },
  {
    key: "flood-two-feet",
    quote:
      "Two feet of moving water can carry away most vehicles including " +
      "sport utility vehicles and pick-up trucks.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Flooding",
    url: MANUAL_URL,
  },
  {
    key: "flood-turn-around",
    quote:
      "Do not drive through flooded areas. If you see a flooded roadway " +
      "ahead, turn around and find another route to get to your " +
      "destination.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Flooding",
    url: MANUAL_URL,
  },
  {
    key: "flood-never-cross",
    quote:
      "Even if the water appears shallow enough to cross, do not attempt " +
      "to cross a flooded road.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Flooding",
    url: MANUAL_URL,
  },
  {
    key: "blowout-symptoms",
    quote:
      "If a front tire blows out, your vehicle will pull in the direction " +
      "of the blown tire. A flat rear tire will cause the vehicle to sway " +
      "back and forth.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Flat Tire or Blowouts",
    url: MANUAL_URL,
  },
  {
    key: "blowout-response",
    quote:
      "To regain control, grasp the steering wheel tightly and steer " +
      "straight ahead. Ease up on the accelerator, but do not brake until " +
      "you have regained full control.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Flat Tire or Blowouts",
    url: MANUAL_URL,
  },
  {
    key: "offpavement-no-swerve",
    quote:
      "If your tire drops off the edge of the pavement onto the shoulder, " +
      "do not try to swerve back onto the pavement because you may lose " +
      "control of your vehicle.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Running off the Pavement",
    url: MANUAL_URL,
  },
  {
    key: "offpavement-recover",
    quote:
      "After you have slowed down and are in complete control, look for " +
      "traffic behind you, signal, and turn gently back onto the " +
      "pavement.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Running off the Pavement",
    url: MANUAL_URL,
  },
  {
    key: "failure-headlights",
    quote:
      "If your headlights suddenly fail, try your parking lights and turn " +
      "signals and leave the roadway as soon as you have slowed down.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Equipment Failure",
    url: MANUAL_URL,
  },
  {
    key: "failure-wipers",
    quote:
      "If your windshield wipers fail in rain or snow, slow down and " +
      "stick your head out your side window in order to see as you leave " +
      "the roadway.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Equipment Failure",
    url: MANUAL_URL,
  },
  {
    key: "failure-accelerator",
    quote:
      "If your accelerator pedal sticks, depress the clutch or shift it " +
      "into neutral. You may also turn the engine off; however, this may " +
      "result in the loss of power steering and power brakes.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Equipment Failure",
    url: MANUAL_URL,
  },
  {
    key: "failure-ignition-lock",
    quote:
      "Never turn your vehicle's ignition to the \"lock\" position while " +
      "it is still in motion. This will cause the steering to lock if you " +
      "try to turn the steering wheel.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Equipment Failure",
    url: MANUAL_URL,
  },
  {
    key: "brakes-best-before-skid",
    quote:
      "Remember: Brakes work best just before your tires start to skid or " +
      "slide on the road surface.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations",
    url: MANUAL_URL,
  },
  {
    key: "gravel-traction",
    quote:
      "Driving on loose gravel is harder than driving on pavement because " +
      "your tires don't have the traction needed to give you stable " +
      "control. Slow down and avoid sudden changes in direction.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Reading the Road",
    url: MANUAL_URL,
  },
  {
    key: "oncoming-in-your-lane",
    quote:
      "Should an oncoming vehicle cross into your lane, slow down and try " +
      "to warn the oncoming driver by flashing your headlights. If the " +
      "vehicle keeps coming, pull as far to the right as possible.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Reading the Road",
    url: MANUAL_URL,
  },
  {
    key: "oncoming-steer-right",
    quote:
      "If there could be a collision, steer off the road to the right " +
      "when conditions permit, or stop on the far right shoulder of the " +
      "road.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Reading the Road",
    url: MANUAL_URL,
  },
  {
    key: "road-adjust-speed",
    quote:
      "As an operator, you must adjust your speed to fit the weather, " +
      "traffic conditions, and the condition of the road.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Reading the Road",
    url: MANUAL_URL,
  },
  {
    key: "texting-illegal",
    quote:
      "It is not legal for anyone to text (composing, reading, or sending " +
      "an electronic message) while driving",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Distracted Driving",
    url: MANUAL_URL,
  },
  {
    key: "texting-fine",
    quote:
      "Driving requires your full attention.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Distracted Driving",
    url: MANUAL_URL,
  },
  {
    key: "posture-both-hands",
    quote:
      "Drive with both hands holding the steering wheel. You never know " +
      "when evasive action may be needed.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Driving Posture",
    url: MANUAL_URL,
  },
  {
    key: "posture-one-foot",
    quote:
      "Use one foot to operate both the gas pedal and brake pedal to " +
      "avoid riding the brakes which can cause them to overheat.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Driving Posture",
    url: MANUAL_URL,
  },
  {
    key: "fatigue-only-cure",
    quote:
      "Fatigue (being tired) increases the chance of a crash. If you are " +
      "sleepy, the only safe cure is to get some sleep.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Fatigue",
    url: MANUAL_URL,
  },
  {
    key: "fatigue-danger-signs",
    quote:
      "of fatigue are: difficulty in focusing or keeping eyes open, " +
      "inability to recall the last few miles driven",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Fatigue",
    url: MANUAL_URL,
  },
  {
    key: "truck-braking-400",
    quote:
      "A fully-loaded tractor-trailer may take more than 400 feet on dry " +
      "pavement to come to a complete stop, or more than the length of a " +
      "football field.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Trucks - Braking",
    url: MANUAL_URL,
  },
  {
    key: "truck-right-turn-swing",
    quote:
      "That's why the drivers of tractor-trailers must often swing out to " +
      "the left as the first step in making a right turn.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Trucks - Turning",
    url: MANUAL_URL,
  },
  {
    key: "truck-rear-wheels",
    quote:
      "With any turning vehicle, the rear wheels follow a shorter path " +
      "than the front wheels. The longer the vehicle, the greater the " +
      "difference.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Trucks - Turning",
    url: MANUAL_URL,
  },
  {
    key: "truck-nozone",
    quote:
      "they still have serious blind spots or no-zones into which a car " +
      "can disappear from view-up to 20 feet in front of the cab, on " +
      "either side of the tractor-trailer, particularly alongside the " +
      "cab, and up to 200 feet in the rear.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Trucks",
    url: MANUAL_URL,
  },
  {
    key: "truck-mirror-rule",
    quote:
      "An excellent rule of thumb for drivers sharing the road with a " +
      "tractor-trailer is, \"If you can't see the truck driver in his or " +
      "her side mirror, he or she can't see you.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Trucks",
    url: MANUAL_URL,
  },
  {
    key: "truck-pass-left",
    quote:
      "Don't linger alongside a truck when passing. Always pass a " +
      "tractor-trailer completely and always on the left side.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Trucks",
    url: MANUAL_URL,
  },
  {
    key: "truck-cutting-off",
    quote:
      "Cutting into the open space in front of a truck removes the truck " +
      "driver's cushion of safety.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Trucks",
    url: MANUAL_URL,
  },
  {
    key: "truck-speed-illusion",
    quote:
      "Because of its large size, a tractor-trailer often appears to be " +
      "traveling at a slower speed than it is.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Trucks",
    url: MANUAL_URL,
  },
  {
    key: "truck-center-lane",
    quote:
      "On multi-lane highways, tractor-trailers stay in the center lane " +
      "to help the flow of local traffic on and off the highway.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Trucks - Maneuverability",
    url: MANUAL_URL,
  },
  {
    key: "nozone-15-feet",
    quote:
      "Avoid the \"No-Zone\" with trucks or buses. This is about 15 feet " +
      "on all sides of the truck.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - Do These Each Time You Practice",
    url: MANUAL_URL,
  },
  {
    key: "moveover-stranded",
    quote:
      "If a motor vehicle is stranded along the interstate or multilane " +
      "highway outside city limits, with flashing hazard lights, a driver " +
      "approaching or passing this vehicle should yield the right of way " +
      "and move safely to the lane not adjacent to the stranded vehicle.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Move Over",
    url: MANUAL_URL,
  },
  {
    key: "moveover-no-lane",
    quote:
      "If only lane available to move safely to is the adjacent lane to " +
      "the stranded vehicle, proceed with caution and reduce speed.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Move Over",
    url: MANUAL_URL,
  },
  {
    key: "moto-same-rights",
    quote:
      "Motorcyclists have the same rights and responsibilities on public " +
      "roadways as other drivers.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Motorcycles",
    url: MANUAL_URL,
  },
  {
    key: "moto-full-lane",
    quote:
      "Allow the motorcyclist a full lane width. Although it may seem as " +
      "though there is enough room in the traffic lane for an automobile " +
      "and a motorcycle, remember the motorcycle needs the room to " +
      "maneuver safely. Do not share the lane.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Motorcycles",
    url: MANUAL_URL,
  },
  {
    key: "moto-left-turn-crashes",
    quote:
      "Approximately one-half of all motorcycle crashes involve another " +
      "motor vehicle. Nearly 40 percent were caused by the other vehicle " +
      "turning left in front of the motorcyclist.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Motorcycles",
    url: MANUAL_URL,
  },
  {
    key: "moto-signal-not-cancelling",
    quote:
      "Don't be fooled by a flashing turn signal on a " +
      "motorcycle-motorcycle signals usually are not self cancelling and " +
      "riders sometimes forget to turn them off. Wait to be sure the " +
      "motorcycle is going to turn before you proceed.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Motorcycles",
    url: MANUAL_URL,
  },
  {
    key: "moto-following-3-4",
    quote:
      "Allow more following distance, three or four seconds, following a " +
      "motorcycle so the motorcyclist has enough time to maneuver or stop " +
      "in an emergency.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Motorcycles",
    url: MANUAL_URL,
  },
  {
    key: "moto-stops-quicker",
    quote:
      "In dry conditions, motorcycles can stop more quickly than a car.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Motorcycles",
    url: MANUAL_URL,
  },
  {
    key: "moto-road-hazards",
    quote:
      "Motorcyclists may change speed or adjust their position within a " +
      "lane suddenly in reaction to road and traffic conditions such as " +
      "potholes, gravel, wet or slippery surfaces, pavement seams, " +
      "railroad crossings, and grooved pavement.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Motorcycles",
    url: MANUAL_URL,
  },
  {
    key: "moto-hard-to-see",
    quote:
      "Motorcycles have a much smaller profile than other vehicles, which " +
      "can make it more difficult to judge the speed and distance of an " +
      "approaching motorcycle.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Motorcycles",
    url: MANUAL_URL,
  },
  {
    key: "bike-three-feet",
    quote:
      "The individual operating the motor vehicle is required to leave a " +
      "minimum of three feet of passing space between the vehicle and " +
      "bicycle.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bike-check-shoulder",
    quote:
      "Check over your shoulder after passing a bicyclist and before " +
      "moving back t normal position. In inclement weather, give " +
      "bicyclists extra room.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bike-intersections",
    quote:
      "Scan for bicyclists in traffic, particularly at intersections. " +
      "Most crashes involving a motor vehicle and a bicyclist occur at " +
      "intersections.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bike-lane-right-turn",
    quote:
      "Avoid driving in designated bicycle lanes other than to make a " +
      "right turn. Do so safely; signal and look before moving into the " +
      "bicycle lane on approach to your turn.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bike-turn-right-blind-spot",
    quote:
      "When turning right, check your blind spot for bicyclists before " +
      "initiating the turn.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bike-children",
    quote:
      "Children on bicycles are often unpredictable and may not have " +
      "adequate knowledge of traffic laws. Children may be harder to see " +
      "because they are typically smaller than adults. So, expect the " +
      "unexpected and slow down!",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Sharing the Road with Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "belt-all-positions",
    quote:
      "North Dakota's seat belt law requires all occupants to wear seat " +
      "belts in all seating positions.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Seat Belts",
    url: MANUAL_URL,
  },
  {
    key: "belt-worn-correctly",
    quote:
      "Lap belts should lie snug and low across the hips, not across the " +
      "abdomen. Shoulder belts should lie across the chest and over the " +
      "collarbone with minimal, if any, slack.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Seat Belts",
    url: MANUAL_URL,
  },
  {
    key: "belt-ejection",
    quote:
      "Your chances of being killed are four times greater if you are " +
      "thrown from the vehicle.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Seat Belts",
    url: MANUAL_URL,
  },
  {
    key: "belt-crash-speeds",
    quote:
      "In fact, crashes causing injury are most likely to occur at speeds " +
      "less than 40 miles per hour and within 25 miles of home.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Seat Belts",
    url: MANUAL_URL,
  },
  {
    key: "belt-30mph-force",
    quote:
      "At 30 miles per hour, the force is like hitting the ground from " +
      "the top of a three-story building.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Seat Belts",
    url: MANUAL_URL,
  },
  {
    key: "airbag-supplemental",
    quote:
      "Air bags are designed to provide supplemental protection for " +
      "belted front-seat occupants in a frontal crash.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Air Bags",
    url: MANUAL_URL,
  },
  {
    key: "airbag-with-belts",
    quote:
      "Lap/shoulder belts must always be used in conjunction with an " +
      "airbag to protect occupants in side-impact and roll-over crashes.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Air Bags",
    url: MANUAL_URL,
  },
  {
    key: "child-under-eight",
    quote:
      "Children under eight years of age must be properly secured in a " +
      "child restraint (car seat or booster seat). A seat belt may be " +
      "substituted for children who are at least 57 inches tall.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Child Restraints (Car Safety Seats)",
    url: MANUAL_URL,
  },
  {
    key: "child-eight-to-seventeen",
    quote:
      "Children ages eight through seventeen must be properly secured in " +
      "a seat belt or child restraint.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Child Restraints (Car Safety Seats)",
    url: MANUAL_URL,
  },
  {
    key: "child-penalty",
    quote:
      "The penalty for violation is $25 and one point against the license " +
      "of the driver.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Child Restraints (Car Safety Seats)",
    url: MANUAL_URL,
  },
  {
    key: "child-back-seat-13",
    quote:
      "Children under age 13 should ride in the back seat -even if the " +
      "vehicle does not have an airbag.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Child Restraints (Car Safety Seats)",
    url: MANUAL_URL,
  },
  {
    key: "child-rear-facing-airbag",
    quote:
      "Never place a rear-facing infant car seat in front of an airbag.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Child Restraints (Car Safety Seats)",
    url: MANUAL_URL,
  },
  {
    key: "child-booster-40lb",
    quote:
      "Children should be at least 40 pounds and at least 4 years of age " +
      "to move from a car seat to a booster seat.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Child Restraints (Car Safety Seats)",
    url: MANUAL_URL,
  },
  {
    key: "child-never-cargo-area",
    quote:
      "Never allow children to ride in the cargo area of a pickup truck. " +
      "Never buckle two children into one seat belt.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Child Restraints (Car Safety Seats)",
    url: MANUAL_URL,
  },
  {
    key: "heatstroke-temp",
    quote:
      "An outside temperature in the mid- 60s can cause a vehicle's " +
      "inside temperature to rise above 110 degrees Fahrenheit.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Heatstroke",
    url: MANUAL_URL,
  },
  {
    key: "heatstroke-ten-minutes",
    quote:
      "The inside temperature of a vehicle can rise almost 20 degrees " +
      "Fahrenheit within the first 10 minutes.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Heatstroke",
    url: MANUAL_URL,
  },
  {
    key: "heatstroke-never-ok",
    quote:
      "It is never okay to leave a child alone in a vehicle for any " +
      "amount of time, as it can lead to tragedy.",
    source: MANUAL,
    section: "Driving Skills and Emergency Situations - Heatstroke",
    url: MANUAL_URL,
  },
  {
    key: "alcohol-half-deaths",
    quote:
      "In North Dakota, nearly half of the traffic deaths involve drivers " +
      "who have been drinking prior to the crash.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Alcohol",
    url: MANUAL_URL,
  },
  {
    key: "alcohol-seven-times",
    quote:
      "There is evidence proving that if you drink-even just a little- " +
      "your chances of a crash are seven times greater than if you were " +
      "completely sober.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Alcohol",
    url: MANUAL_URL,
  },
  {
    key: "alcohol-ac-factors",
    quote:
      "The amount or concentration of alcohol in the blood or breath is " +
      "known as Alcohol Concentration or AC.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Alcohol",
    url: MANUAL_URL,
  },
  {
    key: "alcohol-average-drink",
    quote:
      "In the \"average drink\" the alcohol content is about the same " +
      "whether it's a 12-ounce can of beer, a 4-ounce glass of wine, or a " +
      "1-ounce glass of scotch or whiskey.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Alcohol",
    url: MANUAL_URL,
  },
  {
    key: "alcohol-time-only",
    quote:
      "Time is the only way to eliminate alcohol from the blood stream. " +
      "This process is relatively slow and will not be quickened by " +
      "drinking coffee, taking cold showers, or exercising.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Alcohol",
    url: MANUAL_URL,
  },
  {
    key: "alcohol-body-weight",
    quote:
      "Larger people have more blood and fluids which will dilute the " +
      "alcohol consumed more than in a smaller person.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Alcohol",
    url: MANUAL_URL,
  },
  {
    key: "alcohol-effects",
    quote:
      "Alcohol in the bloodstream slows reaction time, interferes with " +
      "the driver's vision, and causes dangerous situations to appear " +
      "\"not so dangerous.\"",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Effects of Alcohol",
    url: MANUAL_URL,
  },
  {
    key: "implied-consent",
    quote:
      "Upon receiving your license to operate a motor vehicle in North " +
      "Dakota, you have given your consent to a chemical test to " +
      "determine the level of alcohol and/or drug content in your blood, " +
      "breath, urine, or saliva.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Implied Consent",
    url: MANUAL_URL,
  },
  {
    key: "implied-consent-refusal",
    quote:
      "If you refuse to take the test, your license will be revoked for " +
      "180 days to three years.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Implied Consent",
    url: MANUAL_URL,
  },
  {
    key: "dui-08-02",
    quote:
      "If a chemical test reveals that you have eight one-hundredths of " +
      "one percent (.08%) or greater of alcohol in your blood, or .02% if " +
      "under the age of 21, you are considered legally to be under the " +
      "influence of alcohol.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "dui-two-penalties",
    quote:
      "There are two separate penalties involved under the DUI law. One " +
      "is an administrative license penalty, the other is a court " +
      "conviction penalty. Your driving privileges may be suspended " +
      "through either or both processes.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "dui-first-conviction",
    quote:
      "First conviction if the AC is .16% or greater -at least $750 fine " +
      "and two days imprisonment.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "dui-first-500",
    quote:
      "If convicted through the court process, in addition to losing your " +
      "driving privilege, you also face mandatory fines and jail " +
      "sentences. First conviction-$500 fine.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "dui-suspension-91",
    quote:
      "91 days, first offense in seven years",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "dui-second-conviction",
    quote:
      "Second conviction within seven years -$1,000 fine and 10 days in " +
      "jail and at least 12 months in the 24/7 Sobriety Program as a " +
      "mandatory condition of probation.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "dui-serious-injury",
    quote:
      "In addition to the minimum penalties for DUI, if you are involved " +
      "in a crash and cause a serious injury to another, you will spend " +
      "an additional 90 days in jail.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "dui-death",
    quote:
      "If you cause the death of another, your time in jail is extended " +
      "by one year.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "dui-suspended-driving",
    quote:
      "There are also harsh penalties for driving while your license is " +
      "suspended or revoked after an alcohol-related violation-four days " +
      "mandatory minimum jail sentence and a fine of up to $1,000.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "dui-trl",
    quote:
      "Temporary restricted license can be issued after serving at least " +
      "30 days of suspension or after serving at least 14 days if " +
      "participating in the 24/7 Sobriety Program.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "dui-sr22",
    quote:
      "If you refuse to take an AC test, or if convicted of a DUI, the " +
      "law requires you to show proof of financial responsibility (SR 22 " +
      "insurance coverage).",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "dui-plates-impounded",
    quote:
      "The license plates and registration card for your vehicle may be " +
      "impounded for the length of the suspension/revocation.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "dui-evaluation",
    quote:
      "In addition, all convicted offenders are required to submit to a " +
      "mandatory alcohol addiction evaluation and complete any " +
      "recommended treatment.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Driving While Under the Influence",
    url: MANUAL_URL,
  },
  {
    key: "open-container",
    quote:
      "It is illegal for anyone, driver or passenger, to drink alcoholic " +
      "beverages in or on a motor vehicle. You cannot legally have an " +
      "open container in your vehicle.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Open Container Law",
    url: MANUAL_URL,
  },
  {
    key: "open-container-trunk",
    quote:
      "Any open containers must be placed in the trunk of the vehicle.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Open Container Law",
    url: MANUAL_URL,
  },
  {
    key: "minor-possession",
    quote:
      "Persons under 21 years of age are prohibited from purchasing, " +
      "consuming, or possessing alcoholic beverages.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Minor in Possession/Consumption Law",
    url: MANUAL_URL,
  },
  {
    key: "drugs-cold-tablets",
    quote:
      "Even certain cold tablets and capsules can affect your driving " +
      "ability by making you drowsy at the wheel. Read all directions " +
      "carefully.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Drugs",
    url: MANUAL_URL,
  },
  {
    key: "drugs-same-penalties",
    quote:
      "The harsh penalties that deal with operating under the influence " +
      "of alcohol also apply to narcotic drugs.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Drugs",
    url: MANUAL_URL,
  },
  {
    key: "report-impaired-911",
    quote:
      "If you exhibit or encounter out-of-the-ordinary driving that would " +
      "indicate alcohol impairment, anyone can report this to law " +
      "enforcement by dialing 911.",
    source: MANUAL,
    section: "Drinking, Drugs, and Driving - Reporting Impaired Driving",
    url: MANUAL_URL,
  },
  {
    key: "ped-joggers",
    quote:
      "Remember: Joggers are considered pedestrians and must also obey " +
      "these rules.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Pedestrians",
    url: MANUAL_URL,
  },
  {
    key: "ped-dont-walk",
    quote:
      "Do not start to cross the roadway on a flashing \"Don't Walk\" " +
      "signal. If you are already in the intersection, move to the other " +
      "side at a normal pace.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Pedestrians",
    url: MANUAL_URL,
  },
  {
    key: "ped-no-crosswalk",
    quote:
      "If you cross a road where there is no crosswalk, you must yield " +
      "the right of way to all vehicles on the roadway.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Pedestrians",
    url: MANUAL_URL,
  },
  {
    key: "ped-diagonal",
    quote:
      "Do not cross intersections diagonally unless an official traffic " +
      "control device says you may.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Pedestrians",
    url: MANUAL_URL,
  },
  {
    key: "ped-walk-facing",
    quote:
      "Use sidewalks when you can; if there are no sidewalks, get as far " +
      "off the road as possible.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Pedestrians",
    url: MANUAL_URL,
  },
  {
    key: "ped-night-clothing",
    quote:
      "When you walk at night, walk facing traffic and wear light or " +
      "white clothing. Make sure drivers can see you.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Pedestrians",
    url: MANUAL_URL,
  },
  {
    key: "ped-hitchhiking",
    quote:
      "You are not allowed to stand on the traveled portion of the street " +
      "or highway for the purpose of hitchhiking.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Pedestrians",
    url: MANUAL_URL,
  },
  {
    key: "ped-ball-rolling",
    quote:
      "For instance, a ball rolling onto the street tells you a child " +
      "might be chasing it. Your reactions might save a life.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Pedestrians",
    url: MANUAL_URL,
  },
  {
    key: "bike-two-abreast",
    quote:
      "Ride not more than two abreast (single file is safest). Keep to " +
      "the right side of the roadway.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Bicycles and Motorized Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bike-headlight-500",
    quote:
      "At night, all bicycles must be equipped with a headlight visible " +
      "from a distance of 500 feet. The bicycle must also have a red " +
      "reflector on the rear.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Bicycles and Motorized Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bike-brake-required",
    quote:
      "All bicycles and motorized bicycles must be equipped with a brake.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Bicycles and Motorized Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "moped-helmet-under-18",
    quote:
      "If under 18, an approved safety helmet is required to operate a " +
      "motorized bicycle.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Bicycles and Motorized Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "moped-definition",
    quote:
      "A motorized bicycle is a two- or three-wheeled vehicle no more " +
      "than 32 inches wide.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Bicycles and Motorized Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "moped-age-14",
    quote:
      "To operate a motorized bicycle, you must be at least 14 years of " +
      "age or older and have in your immediate possession a valid " +
      "operator's license, motorized bicycle permit, temporary permit, " +
      "instruction permit, or motorcycle permit.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Bicycles and Motorized Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "ohv-licence-or-cert",
    quote:
      "The operator of an off-highway vehicle must be in possession of a " +
      "valid driver's license, permit, or an off-highway vehicle safety " +
      "certificate issued by the North Dakota Parks and Recreation " +
      "Department.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Off-Highway Vehicles",
    url: MANUAL_URL,
  },
  {
    key: "ohv-helmet-under-18",
    quote:
      "Here are some of them: Persons under the age of 18 must wear a " +
      "safety helmet that meets United States Department of " +
      "Transportation standards.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Off-Highway Vehicles Rules",
    url: MANUAL_URL,
  },
  {
    key: "ohv-crossing",
    quote:
      "Cross streets or highways at an angle of approximately 90 degrees " +
      "to the direction of the highway and at a place where no " +
      "obstruction prevents a quick and safe crossing. Come to a complete " +
      "stop before crossing the shoulder or main-traveled roadway.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Off-Highway Vehicles Rules",
    url: MANUAL_URL,
  },
  {
    key: "ohv-paved-55",
    quote:
      "A licensed driver may operate a registered off-highway vehicle: » " +
      "On a gravel, dirt, or loose surface roadway. » On a paved highway " +
      "designated and posted at a speed not exceeding 55 mph.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Off-Highway Vehicles Rules",
    url: MANUAL_URL,
  },
  {
    key: "snowmobile-licence",
    quote:
      "In order to operate a snowmobile on a highway right of way, you " +
      "must have in your possession a valid driver's license or a " +
      "snowmobile safety certificate",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Snowmobiles",
    url: MANUAL_URL,
  },
  {
    key: "snowmobile-never-roadway",
    quote:
      "Never operate a snowmobile on the roadway, shoulder, or inside " +
      "bank of any road in North Dakota.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Snowmobiles",
    url: MANUAL_URL,
  },
  {
    key: "snowmobile-ditch-direction",
    quote:
      "If you operate in any ditch alongside the roadway, move in the " +
      "same direction as roadway traffic.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Snowmobiles",
    url: MANUAL_URL,
  },
  {
    key: "snowmobile-right-of-way-dates",
    quote:
      "Never operate on any right of way from April 1 to November 1 of " +
      "any year.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Snowmobiles",
    url: MANUAL_URL,
  },
  {
    key: "snowmobile-crossing",
    quote:
      "If you must cross a roadway, yield the right of way to all roadway " +
      "traffic. Come to a complete stop before reaching the shoulder of " +
      "the road; proceed at right angles to the road when it is clear.",
    source: MANUAL,
    section: "Pedestrian Traffic and Recreational Vehicles - Snowmobiles",
    url: MANUAL_URL,
  },
  {
    key: "points-12",
    quote:
      "When the record reveals a total of 12 or more points, the driver " +
      "will be informed that the authorities intend to suspend his or her " +
      "license.",
    source: MANUAL,
    section: "Point System",
    url: MANUAL_URL,
  },
  {
    key: "points-table",
    quote:
      "Accumulated Point Total Period of Suspension 12 7 days 13 and " +
      "above 7 days for each point over 11",
    source: MANUAL,
    section: "Point System",
    url: MANUAL_URL,
  },
  {
    key: "points-recorded",
    quote:
      "After each violation, the corresponding amount of points are added " +
      "to the driver's record. This normally occurs within 10 days of " +
      "conviction.",
    source: MANUAL,
    section: "Point System",
    url: MANUAL_URL,
  },
  {
    key: "points-reduce-one",
    quote:
      "ONE POINT-for every three-month period during which the driver has " +
      "not had any points recorded against his/her record.",
    source: MANUAL,
    section: "Point System",
    url: MANUAL_URL,
  },
  {
    key: "points-reduce-three",
    quote:
      "THREE POINTS-if the driver completes an approved driver " +
      "improvement course such as a defensive driving course.",
    source: MANUAL,
    section: "Point System",
    url: MANUAL_URL,
  },
  {
    key: "points-in-lieu",
    quote:
      "A person may elect to attend a driver improvement course in lieu " +
      "of points on the driving record for violations assigned five or " +
      "less points. This option is valid once every 12 months and may not " +
      "be used in conjunction with item 2 above.",
    source: MANUAL,
    section: "Point System",
    url: MANUAL_URL,
  },
  {
    key: "permit-violation-two-points",
    quote:
      "It is a two-point penalty on your driving record for driving in " +
      "violation of the conditions of an instruction permit.",
    source: MANUAL,
    section: "Your Operator's License - Road Test Waiver",
    url: MANUAL_URL,
  },
  {
    key: "permit-supervisor",
    quote:
      "Any time you operate with an instruction permit, a person with a " +
      "valid license for the class of vehicle being driven, who is at " +
      "least 18 years of age and has had at least three years of driving " +
      "experience, must ride in the seat beside you.",
    source: MANUAL,
    section: "Your Operator's License - Permits",
    url: MANUAL_URL,
  },
  {
    key: "permit-front-seat",
    quote:
      "An individual other than the supervising driver and the permit " +
      "holder may not be in the front seat unless the vehicle has only a " +
      "front seat, in which case, the supervising driver must be seated " +
      "next to the permit holder.",
    source: MANUAL,
    section: "Your Operator's License - Permits",
    url: MANUAL_URL,
  },
  {
    key: "permit-how-to-get",
    quote:
      "To receive a permit you must first pass the knowledge examination " +
      "at a Driver License office or at nd.knowtodrive.com and the visual " +
      "screen test.",
    source: MANUAL,
    section: "Your Operator's License - Permits",
    url: MANUAL_URL,
  },
  {
    key: "permit-age-14",
    quote:
      "All applicants must be at least 14 years of age. Applicants under " +
      "18 years of age must have parent or legal guardian approval and " +
      "sponsorship.",
    source: MANUAL,
    section: "Your Operator's License - Permits",
    url: MANUAL_URL,
  },
  {
    key: "permit-online-then-office",
    quote:
      "Please note if you passed the permit test online you must make an " +
      "appointment to visit a ND Driver License office to obtain your " +
      "permit.",
    source: MANUAL,
    section: "Your Operator's License - Permits",
    url: MANUAL_URL,
  },
  {
    key: "permit-hold-14-15",
    quote:
      "Individuals who are 14 or 15 years old must hold the instruction " +
      "permit for 12 months or to the age of 16, whichever comes first, " +
      "but no less than six months, prior to completing the road test or " +
      "waiving the road test for an operator's license.",
    source: MANUAL,
    section: "Your Operator's License - Permits",
    url: MANUAL_URL,
  },
  {
    key: "permit-hold-16-17",
    quote:
      "Individuals who are 16 or 17 must hold the instruction permit for " +
      "six months or to the age of 18, whichever comes first, prior to " +
      "completing the road test or waiving the road test for an " +
      "operator's license.",
    source: MANUAL,
    section: "Your Operator's License - Permits",
    url: MANUAL_URL,
  },
  {
    key: "permit-50-hours",
    quote:
      "Individuals under 16 must complete a minimum of 50 hours of " +
      "supervised practice driving in variable conditions. Your " +
      "parent/legal guardian must then accompany you to the test site on " +
      "the day of your road test and sign that you have completed this " +
      "requirement.",
    source: MANUAL,
    section: "Your Operator's License - Permits",
    url: MANUAL_URL,
  },
  {
    key: "permit-50-hours-extra",
    quote:
      "NOTE: This is in addition to the formal driver's education " +
      "requirement.",
    source: MANUAL,
    section: "Your Operator's License - Permits",
    url: MANUAL_URL,
  },
  {
    key: "log-conditions",
    quote:
      "Instruction permit holders under the age of 16 must complete a " +
      "minimum of 50 hours of supervised, behind-the-wheel driving " +
      "experience in various driving conditions that include: Driving in " +
      "rural areas.",
    source: MANUAL,
    section: "Supervised Driving Log",
    url: MANUAL_URL,
  },
  {
    key: "road-test-waiver",
    quote:
      "The Class D road test may be waived by presenting a North Dakota " +
      "Driving School Certificate of Course Completion certifying you " +
      "have completed a minimum of 30 hours of classroom driver training " +
      "and a minimum of six hours of actual behind the wheel driver " +
      "training",
    source: MANUAL,
    section: "Your Operator's License - Road Test Waiver",
    url: MANUAL_URL,
  },
  {
    key: "minor-restricted-15",
    quote:
      "Upon successful completion of the road test, a 15 year old will be " +
      "issued a restricted Class D operator's license. While in " +
      "possession of a restricted Class D operator's license, the driver " +
      "is restricted to operating his or her parent's, guardian's, " +
      "grandparent's, sibling's, aunt's or uncle's vehicles.",
    source: MANUAL,
    section: "Your Operator's License - Minors Driver License",
    url: MANUAL_URL,
  },
  {
    key: "minor-curfew",
    quote:
      "At age 15, when in possession of a restricted Class D operator's " +
      "license, the individual is not allowed to operate a vehicle " +
      "without his or her parent, legal guardian, or an individual at " +
      "least 18 years of age between the later of sunset or 9:00 p.m. and " +
      "5:00 a.m.",
    source: MANUAL,
    section: "Your Operator's License - Minors Driver License",
    url: MANUAL_URL,
  },
  {
    key: "minor-curfew-exception",
    quote:
      "The only exception to this is driving directly to or from work, an " +
      "official school activity or a religious activity.",
    source: MANUAL,
    section: "Your Operator's License - Minors Driver License",
    url: MANUAL_URL,
  },
  {
    key: "minor-16-unrestricted",
    quote:
      "At age 16 the restricted Class D Operator's License transitions to " +
      "an unrestricted license.",
    source: MANUAL,
    section: "Your Operator's License - Minors Driver License",
    url: MANUAL_URL,
  },
  {
    key: "phone-permit-and-minors",
    quote:
      "Anyone, regardless of age who is operating a vehicle with an " +
      "instruction permit and licensed drivers under the age of 18 are " +
      "prohibited from using electronic communication devices while " +
      "driving.",
    source: MANUAL,
    section: "Your Operator's License - Minors Driver License",
    url: MANUAL_URL,
  },
  {
    key: "phone-exception",
    quote:
      "The only exception is to obtain emergency assistance, to prevent a " +
      "crime that appears about to be committed, or in the reasonable " +
      "belief that an individual's life or safety is in danger.",
    source: MANUAL,
    section: "Your Operator's License - Minors Driver License",
    url: MANUAL_URL,
  },
  {
    key: "licence-carry",
    quote:
      "For your operator's license or permit to be valid, it must be " +
      "signed by you. You must have this license or permit in your " +
      "possession every time you drive.",
    source: MANUAL,
    section: "Your Operator's License",
    url: MANUAL_URL,
  },
  {
    key: "new-resident-60-days",
    quote:
      "You may operate a Class D or M vehicle with an operator's license " +
      "from another state for a period of 60 days after you become a " +
      "resident of North Dakota.",
    source: MANUAL,
    section: "Your Operator's License",
    url: MANUAL_URL,
  },
  {
    key: "resident-90-days",
    quote:
      "Any person other than a nonresident student, a tourist, or a " +
      "nonresident member of the Armed Forces who has lived in this state " +
      "for 90 consecutive days, shall be deemed a resident of North " +
      "Dakota for the purpose of driver licensing.",
    source: MANUAL,
    section: "Your Operator's License",
    url: MANUAL_URL,
  },
  {
    key: "nonresident-16",
    quote:
      "A non-resident must be at least 16 years of age to drive in North " +
      "Dakota.",
    source: MANUAL,
    section: "Your Operator's License - Exemptions",
    url: MANUAL_URL,
  },
  {
    key: "no-licence-seizures",
    quote:
      "Persons who have a history of epilepsy, blackouts, seizures, " +
      "fainting spells, or other lapse of consciousness.",
    source: MANUAL,
    section: "Your Operator's License - People Who Cannot Get a License",
    url: MANUAL_URL,
  },
  {
    key: "no-licence-seizures-exception",
    quote:
      "Exception to #4: The person in question has had no seizures for at " +
      "least six consecutive months, and is willing to submit to the " +
      "required medical examination.",
    source: MANUAL,
    section: "Your Operator's License - People Who Cannot Get a License",
    url: MANUAL_URL,
  },
  {
    key: "change-address-10-days",
    quote:
      "If you change your name or address, you must notify the Driver " +
      "License Division within 10 days. You must provide documentary " +
      "evidence of the change.",
    source: MANUAL,
    section: "Your Operator's License - Change of Name or Address",
    url: MANUAL_URL,
  },
  {
    key: "renew-10-months",
    quote:
      "You may renew your license 10 months prior to expiration without " +
      "losing any time remaining on the old license.",
    source: MANUAL,
    section: "Your Operator's License - Renewals",
    url: MANUAL_URL,
  },
  {
    key: "renew-vision",
    quote:
      "All renewal applicants must submit to a vision test at the time of " +
      "renewal or present a certificate of vision obtained from a " +
      "physician or optometrist. The certificate must not be more than " +
      "six months old.",
    source: MANUAL,
    section: "Your Operator's License - Renewals",
    url: MANUAL_URL,
  },
  {
    key: "licence-expiry",
    quote:
      "The license expires on midnight of your birthday or the \"duration " +
      "of stay\" date if an immigration document is presented for proof " +
      "of identity, not to exceed the usual licensing cycle period.",
    source: MANUAL,
    section: "Your Operator's License - Renewals",
    url: MANUAL_URL,
  },
  {
    key: "restrictions-list",
    quote:
      "Standard Restrictions: 1 Corrective Lenses 2 Outside Mirrors 3 " +
      "Automatic Transmission 4 Special Hand Controls 5 Daylight Driving " +
      "Only 6 Proof of Financial Responsibility",
    source: MANUAL,
    section: "Your Operator's License - Restrictions",
    url: MANUAL_URL,
  },
  {
    key: "report-lost-limb",
    quote:
      "If you permanently lose the use of a hand, arm, foot, leg, or eye, " +
      "you must report it to: Driver License Division, North Dakota " +
      "Department of Transportation, 608 East Boulevard Avenue, Bismarck, " +
      "North Dakota 58505-0750 (NDCC 39-06-14).",
    source: MANUAL,
    section: "Your Operator's License - Restrictions",
    url: MANUAL_URL,
  },
  {
    key: "test-no-devices",
    quote:
      "Children, pets (except medical alert/ service animals), backpacks, " +
      "purses, paper, pen, pencil, markers, cell phones, notebooks and " +
      "any other electronic devices are not allowed in the knowledge " +
      "testing area.",
    source: MANUAL,
    section: "Your Operator's License - Check List for Testing",
    url: MANUAL_URL,
  },
  {
    key: "test-leave-area-fail",
    quote:
      "You will also receive a failed test score if you leave the " +
      "knowledge testing area before your test is completed.",
    source: MANUAL,
    section: "Your Operator's License - Check List for Testing",
    url: MANUAL_URL,
  },
  {
    key: "test-items-fail",
    quote:
      "IMPORTANT: You will receive a failed test score if you bring any " +
      "of these items into the testing area.",
    source: MANUAL,
    section: "Your Operator's License - Check List for Testing",
    url: MANUAL_URL,
  },
  {
    key: "test-arrive-one-hour",
    quote:
      "Arrive no later than one hour prior to noon, if testing at an " +
      "office that closes for lunch, and no later than one hour prior to " +
      "closing.",
    source: MANUAL,
    section: "Your Operator's License - Check List for Testing",
    url: MANUAL_URL,
  },
  {
    key: "test-languages",
    quote:
      "The noncommercial (Class D) knowledge test is offered in English, " +
      "Arabic, Spanish, Somali, Russian, Vietnamese, Turkish, Swahili, " +
      "Nepali, Serbo-Croatian, French, Pashto, Dari and Chinese.",
    source: MANUAL,
    section: "Your Operator's License - General Information",
    url: MANUAL_URL,
  },
  {
    key: "test-asl-audio",
    quote:
      "Automated American Sign Language and Audio testing is available at " +
      "the Fargo, Jamestown, Bismarck, Dickinson, Williston, Minot, " +
      "Devils Lake, and Grand Forks driver license offices.",
    source: MANUAL,
    section: "Your Operator's License - General Information",
    url: MANUAL_URL,
  },
  {
    key: "road-test-pass-criteria",
    quote:
      "In order to pass, you must: follow instructions, keep in the " +
      "proper lane, give the proper signals, parallel park your vehicle, " +
      "demonstrate good driving posture, and obey all traffic signs and " +
      "traffic laws.",
    source: MANUAL,
    section: "Your Operator's License - Examinations",
    url: MANUAL_URL,
  },
  {
    key: "road-test-no-retake",
    quote:
      "If you fail any of the tests, you will not be allowed to retake " +
      "the examination the same day.",
    source: MANUAL,
    section: "Your Operator's License - Examinations",
    url: MANUAL_URL,
  },
  {
    key: "road-test-own-vehicle",
    quote:
      "License applicants must furnish their own vehicle for the road " +
      "test. The vehicle equipment will be inspected. All equipment must " +
      "be in good working order and display current registration.",
    source: MANUAL,
    section: "Your Operator's License - Examinations",
    url: MANUAL_URL,
  },
  {
    key: "road-test-no-passengers",
    quote:
      "Pets (except medical alert/service animals), passengers, and " +
      "electronic devices will not be allowed in the vehicle during the " +
      "road test.",
    source: MANUAL,
    section: "Your Operator's License - Examinations",
    url: MANUAL_URL,
  },
  {
    key: "vehicle-inspection-horn",
    quote:
      "Doors - function from inside and outside of vehicle A horn clearly " +
      "audible for 200 feet.",
    source: MANUAL,
    section: "Your Operator's License - Vehicle Inspection",
    url: MANUAL_URL,
  },
  {
    key: "vehicle-inspection-mirrors",
    quote:
      "Mirrors-one or more so that you can see the road 200 feet behind " +
      "you.",
    source: MANUAL,
    section: "Your Operator's License - Vehicle Inspection",
    url: MANUAL_URL,
  },
  {
    key: "self-parking-not-allowed",
    quote:
      "Self-parking vehicles are not allowed. The applicant must test in " +
      "a different vehicle or deactivate the self-parking feature.",
    source: MANUAL,
    section: "Your Operator's License - Road Test Items",
    url: MANUAL_URL,
  },
  {
    key: "classes-five",
    quote:
      "North Dakota has five classes of operator's licenses. Each class " +
      "requires its own written exam and a demonstration of driving skill " +
      "for that class of license.",
    source: MANUAL,
    section: "Your Operator's License - Classes of Licenses",
    url: MANUAL_URL,
  },
  {
    key: "class-d-definition",
    quote:
      "Class D: Any single vehicle less than 26,001 pounds GVWR may tow " +
      "trailers not over 10,000 pounds GVWR.",
    source: MANUAL,
    section: "Your Operator's License - Classes of Licenses",
    url: MANUAL_URL,
  },
  {
    key: "class-m-definition",
    quote:
      "Class M: Any two- or three-wheeled motorcycle.",
    source: MANUAL,
    section: "Your Operator's License - Classes of Licenses",
    url: MANUAL_URL,
  },
  {
    key: "farm-15-year-old",
    quote:
      "Age 15 may drive a farm vehicle within 150 miles of driver's farm, " +
      "having a gross weight of not more than 50,000 pounds, when " +
      "transporting agricultural products or farm supplies.",
    source: MANUAL,
    section: "Your Operator's License - Classes of Licenses",
    url: MANUAL_URL,
  },
  {
    key: "organ-donor-14",
    quote:
      "Licensed drivers, or those at least 14 years of age and applying " +
      "for their driver license permit in the state of North Dakota, can " +
      "make a personal commitment to organ, tissue and eye donation by " +
      "checking the \"Yes\" box on the application form.",
    source: MANUAL,
    section: "Your Operator's License - Organ, Tissue, and Eye Donation",
    url: MANUAL_URL,
  },
  {
    key: "parental-consent-withdraw",
    quote:
      "Consent of a parent or legal guardian is required for a minor to " +
      "get a permit or a license. The person who consented can withdraw " +
      "the consent at any time and the permit or license will be " +
      "cancelled.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - Withdrawal of Parental Consent",
    url: MANUAL_URL,
  },
  {
    key: "parental-consent-regain",
    quote:
      "A teen can regain their permit or license with parental consent or " +
      "when they reach the age of 18.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - Withdrawal of Parental Consent",
    url: MANUAL_URL,
  },
  {
    key: "teen-fatal-crashes",
    quote:
      "In North Dakota, teen drivers account for about 20 percent of " +
      "fatal crashes.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - Teen-Driver Training Orientation",
    url: MANUAL_URL,
  },
  {
    key: "teen-errors",
    quote:
      "Top 11 Driving Errors 1. Not attending to the path of travel. 2. " +
      "Driving five or more miles per hour too fast for conditions.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - Top 11 Driving Errors",
    url: MANUAL_URL,
  },
  {
    key: "aggressive-behaviours",
    quote:
      "Drivers who routinely speed, run red lights and stop signs, " +
      "tailgate, and otherwise disregard the safety of other motorists " +
      "are turning streets and highways into high-risk arenas.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - Aggressive Driving",
    url: MANUAL_URL,
  },
  {
    key: "aggressive-get-out-of-way",
    quote:
      "First and foremost, make every attempt to get out of their way. " +
      "Put your pride in the back seat. Do not challenge them by speeding " +
      "up or attempting to \"hold-your-own\" in your travel lane.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - When Confronted by Aggressive Drivers",
    url: MANUAL_URL,
  },
  {
    key: "aggressive-report",
    quote:
      "Report aggressive drivers to the appropriate authorities by " +
      "providing a vehicle description, license number, location, and if " +
      "possible, direction of travel.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - When Confronted by Aggressive Drivers",
    url: MANUAL_URL,
  },
  {
    key: "practice-mirrors-6-8",
    quote:
      "Use your mirrors to check around and behind the vehicle every 6-8 " +
      "seconds.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - Do These Each Time You Practice",
    url: MANUAL_URL,
  },
  {
    key: "practice-complete-stop",
    quote:
      "Come to a complete stop at stop signs and for right turns at red " +
      "lights. When proceeding from a stop look left, then front " +
      "(straight ahead), then right before proceeding.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - Do These Each Time You Practice",
    url: MANUAL_URL,
  },
  {
    key: "practice-speed-braking",
    quote:
      "Be aware-Speed increases braking distance. Doubling your speed " +
      "will quadruple your braking distance.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - Do These Each Time You Practice",
    url: MANUAL_URL,
  },
  {
    key: "practice-weight-braking",
    quote:
      "Be aware-Vehicle weight increases braking distance. Doubling your " +
      "vehicle weight will double your braking distance.",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - Do These Each Time You Practice",
    url: MANUAL_URL,
  },
  {
    key: "practice-headlights-day",
    quote:
      "Always wear your seat belts and use your headlights day and night!",
    source: MANUAL,
    section: "Parent/Guardian Driver Coaching Tips - Do These Each Time You Practice",
    url: MANUAL_URL,
  },
  {
    key: "statute-speed-view-100",
    quote:
      "Twenty miles [32.19 kilometers] an hour when the driver's view of " +
      "the highway ahead is obstructed within a distance of one hundred " +
      "feet [30.48 meters].",
    source: ndcc("39-09-02"),
    section: "Chapter 39-09 - Section 39-09-02",
    url: ndccUrl("09"),
  },
  {
    key: "statute-speed-school",
    quote:
      "Twenty miles [32.19 kilometers] an hour when passing a school " +
      "during school recess or while children are going to or leaving " +
      "school during opening or closing hours, unless a lower speed is " +
      "designated or posted by local authorities.",
    source: ndcc("39-09-02"),
    section: "Chapter 39-09 - Section 39-09-02",
    url: ndccUrl("09"),
  },
  {
    key: "statute-speed-basic",
    quote:
      "An individual may not drive a vehicle at a speed greater than is " +
      "reasonable and prudent under the conditions and shall drive with " +
      "regard to existing actual and potential hazards.",
    source: ndcc("39-09-01"),
    section: "Chapter 39-09 - Section 39-09-01",
    url: ndccUrl("09"),
  },
  {
    key: "statute-speed-25",
    quote:
      "Twenty-five miles [40.23 kilometers] an hour on any highway in a " +
      "business district or in a residence district or in a public park, " +
      "unless a different speed is designated and posted by local " +
      "authorities.",
    source: ndcc("39-09-02"),
    section: "Chapter 39-09 - Section 39-09-02",
    url: ndccUrl("09"),
  },
  {
    key: "statute-speed-80",
    quote:
      "Eighty miles [128.75 kilometers] an hour on access-controlled, " +
      "paved and divided, multilane interstate highways, unless otherwise " +
      "permitted, restricted, or required by conditions.",
    source: ndcc("39-09-02"),
    section: "Chapter 39-09 - Section 39-09-02",
    url: ndccUrl("09"),
  },
  {
    key: "statute-schoolbus-stop",
    quote:
      "The driver of a vehicle meeting or overtaking from either " +
      "direction any schoolbus stopped on the highway shall stop the " +
      "vehicle before reaching the schoolbus",
    source: ndcc("39-10-46"),
    section: "Chapter 39-10 - Section 39-10-46",
    url: ndccUrl("10"),
  },
  {
    key: "statute-schoolbus-divided",
    quote:
      "The driver of a vehicle upon a highway with separate roadways need " +
      "not stop upon meeting or passing a schoolbus which is on a " +
      "different roadway",
    source: ndcc("39-10-46"),
    section: "Chapter 39-10 - Section 39-10-46",
    url: ndccUrl("10"),
  },
  {
    key: "statute-schoolbus-amber",
    quote:
      "The operator of a schoolbus equipped with amber caution lights may " +
      "activate those lights at a distance of not less than three hundred " +
      "feet [91.44 meters] nor more than five hundred feet [152.4 meters] " +
      "from the point where schoolchildren are to be received or " +
      "discharged from the bus.",
    source: ndcc("39-10-46"),
    section: "Chapter 39-10 - Section 39-10-46",
    url: ndccUrl("10"),
  },
  {
    key: "statute-schoolbus-railroad-sign",
    quote:
      "Every schoolbus must bear on the rear of the bus a plainly visible " +
      "sign containing the words \"THIS SCHOOLBUS STOPS AT ALL RAILROAD " +
      "CROSSINGS\".",
    source: ndcc("39-10-46"),
    section: "Chapter 39-10 - Section 39-10-46",
    url: ndccUrl("10"),
  },
  {
    key: "statute-signal-100",
    quote:
      "A signal of intention to turn, move right or left, or merge into " +
      "or from traffic must be given continuously during not less than " +
      "the last one hundred feet [30.48 meters] traveled by the vehicle " +
      "before turning, moving right or left, or changing lanes.",
    source: ndcc("39-10-38"),
    section: "Chapter 39-10 - Section 39-10-38",
    url: ndccUrl("10"),
  },
  {
    key: "statute-signal-stopping",
    quote:
      "No person may stop or suddenly decrease the speed of a vehicle " +
      "without first giving an appropriate signal in the manner provided " +
      "herein to the driver of any vehicle immediately to the rear when " +
      "there is opportunity to give such signal.",
    source: ndcc("39-10-38"),
    section: "Chapter 39-10 - Section 39-10-38",
    url: ndccUrl("10"),
  },
  {
    key: "statute-park-hydrant",
    quote:
      "Within ten feet [3.05 meters] of a fire hydrant.",
    source: ndcc("39-10-49"),
    section: "Chapter 39-10 - Section 39-10-49",
    url: ndccUrl("10"),
  },
  {
    key: "statute-park-crosswalk",
    quote:
      "On a crosswalk. 6. Within ten feet [3.05 meters] of a crosswalk at " +
      "an intersection.",
    source: ndcc("39-10-49"),
    section: "Chapter 39-10 - Section 39-10-49",
    url: ndccUrl("10"),
  },
  {
    key: "statute-park-railroad-15",
    quote:
      "Within fifteen feet [4.57 meters] of the nearest rail of a " +
      "railroad crossing.",
    source: ndcc("39-10-49"),
    section: "Chapter 39-10 - Section 39-10-49",
    url: ndccUrl("10"),
  },
  {
    key: "statute-park-fire-station",
    quote:
      "Within twenty feet [6.10 meters] of the driveway entrance to any " +
      "fire station and on the side of a street opposite the entrance to " +
      "any fire station within seventy-five feet [22.86 meters] of said " +
      "entrance when properly signposted.",
    source: ndcc("39-10-49"),
    section: "Chapter 39-10 - Section 39-10-49",
    url: ndccUrl("10"),
  },
  {
    key: "statute-park-signal-15",
    quote:
      "Within fifteen feet [4.57 meters] upon the approach to any " +
      "flashing beacon, stop sign, or traffic-control signal located at " +
      "the side of a roadway.",
    source: ndcc("39-10-49"),
    section: "Chapter 39-10 - Section 39-10-49",
    url: ndccUrl("10"),
  },
  {
    key: "statute-uturn-500",
    quote:
      "No vehicle may be turned so as to proceed in the opposite " +
      "direction upon any curve, or upon the approach to or near the " +
      "crest of a grade, where such vehicle cannot be seen by the driver " +
      "of any other vehicle approaching from either direction within five " +
      "hundred feet [152.4 meters].",
    source: ndcc("39-10-36"),
    section: "Chapter 39-10 - Section 39-10-36",
    url: ndccUrl("10"),
  },
  {
    key: "statute-pass-200",
    quote:
      "In every event the overtaking vehicle must return to an authorized " +
      "lane of travel as soon as practicable, and in the event the " +
      "passing movement involves the use of a lane authorized for " +
      "vehicles approaching from the opposite direction, before coming " +
      "within two hundred feet [60.96 meters] of any approaching vehicle.",
    source: ndcc("39-10-13"),
    section: "Chapter 39-10 - Section 39-10-13",
    url: ndccUrl("10"),
  },
  {
    key: "statute-bike-three-feet",
    quote:
      "The driver of a vehicle shall leave a safe distance when " +
      "overtaking and passing a bicycle proceeding in the same direction " +
      "on a roadway and shall maintain clearance until safely clear of " +
      "the overtaken bicycle. \"Safe distance\" as used in this section " +
      "means no less than three feet [0.91 meters] clearance.",
    source: ndcc("39-10-11.1"),
    section: "Chapter 39-10 - Section 39-10-11.1",
    url: ndccUrl("10"),
  },
  {
    key: "statute-following-close",
    quote:
      "The driver of a motor vehicle may not follow another vehicle more " +
      "closely than is reasonable and prudent, having due regard for the " +
      "speed of such vehicles and the traffic upon and the condition of " +
      "the highway.",
    source: ndcc("39-10-18"),
    section: "Chapter 39-10 - Section 39-10-18",
    url: ndccUrl("10"),
  },
  {
    key: "statute-move-over-hazard",
    quote:
      "the driver of an approaching or passing vehicle shall proceed with " +
      "caution and yield the right of way by moving to a lane not " +
      "adjacent to the stationary motor vehicle",
    source: ndcc("39-10-26.3"),
    section: "Chapter 39-10 - Section 39-10-26.3",
    url: ndccUrl("10"),
  },
  {
    key: "statute-emergency-yield",
    quote:
      "the driver of every other vehicle shall yield the right of way and " +
      "shall immediately drive to a position parallel to, and as close as " +
      "possible to, the right-hand edge or curb of the roadway clear of " +
      "any",
    source: ndcc("39-10-26"),
    section: "Chapter 39-10 - Section 39-10-26",
    url: ndccUrl("10"),
  },
  {
    key: "statute-lamps-required",
    quote:
      "At any time when it is raining, snowing, sleeting, or hailing or " +
      "during other adverse driving conditions and these conditions do " +
      "not render a person or vehicle on the highway clearly discernible " +
      "at a distance of one thousand feet [304.8 meters] ahead",
    source: ndcc("39-21-01"),
    section: "Chapter 39-21 - Section 39-21-01",
    url: ndccUrl("21"),
  },
  {
    key: "statute-lamps-sunset",
    quote:
      "At any time from sunset to sunrise, and every farm tractor upon a " +
      "highway within this state at any time from a half hour after " +
      "sunset to a half hour before sunrise",
    source: ndcc("39-21-01"),
    section: "Chapter 39-21 - Section 39-21-01",
    url: ndccUrl("21"),
  },
  {
    key: "statute-dim-500",
    quote:
      "Whenever a driver of a vehicle approaches an oncoming vehicle " +
      "within five hundred feet [152.4 meters], such driver shall use a " +
      "distribution of light, or composite beam, so aimed that the " +
      "glaring rays are not projected into the eyes of the oncoming " +
      "driver.",
    source: ndcc("39-21-21"),
    section: "Chapter 39-21 - Section 39-21-21",
    url: ndccUrl("21"),
  },
  {
    key: "statute-dim-300",
    quote:
      "Whenever the driver of a vehicle follows another vehicle within " +
      "three hundred feet [91.44 meters] to the rear, the driver shall " +
      "use a distribution of light permissible under this chapter other " +
      "than the uppermost distribution of light specified in subsection 1 " +
      "of section 39-21-20.",
    source: ndcc("39-21-21"),
    section: "Chapter 39-21 - Section 39-21-21",
    url: ndccUrl("21"),
  },
  {
    key: "statute-belt-required",
    quote:
      "A driver may not operate upon a highway a motor vehicle designed " +
      "for carrying fewer than eleven passengers, which was originally " +
      "manufactured with safety belts unless each occupant is wearing a " +
      "properly adjusted and fastened safety belt.",
    source: ndcc("39-21-41.4"),
    section: "Chapter 39-21 - Section 39-21-41.4",
    url: ndccUrl("21"),
  },
  {
    key: "statute-belt-secondary-repealed",
    quote:
      "39-21-41.5. Secondary enforcement. Repealed by S.L. 2023, ch. 362",
    source: ndcc("39-21-41.5"),
    section: "Chapter 39-21 - Section 39-21-41.5",
    url: ndccUrl("21"),
  },
  {
    key: "statute-child-57-inches",
    quote:
      "However, a child under the age of eight who is at least " +
      "fifty-seven inches [1.45 meters] tall is not required to use a " +
      "child restraint system, but must be correctly buckled in a safety " +
      "belt.",
    source: ndcc("39-21-41.2"),
    section: "Chapter 39-21 - Section 39-21-41.2",
    url: ndccUrl("21"),
  },
  {
    key: "statute-studded-tires",
    quote:
      "It is also permissible to use, from October fifteenth to April " +
      "fifteenth, pneumatic tires which have metal studs which do not " +
      "project more than one-sixteenth of an inch [1.59 millimeters] " +
      "beyond the tread of the traction surface of the tire",
    source: ndcc("39-21-40"),
    section: "Chapter 39-21 - Section 39-21-40",
    url: ndccUrl("21"),
  },
  {
    key: "statute-texting",
    quote:
      "The operator of a motor vehicle that is part of traffic may not " +
      "use a wireless communications device to compose, read, or send an " +
      "electronic message.",
    source: ndcc("39-08-23"),
    section: "Chapter 39-08 - Section 39-08-23",
    url: ndccUrl("08"),
  },
  {
    key: "statute-texting-handsfree",
    quote:
      "A wireless communications device used in a voice-activated, " +
      "voice-operated, or any other hands-free manner.",
    source: ndcc("39-08-23"),
    section: "Chapter 39-08 - Section 39-08-23",
    url: ndccUrl("08"),
  },
  {
    key: "statute-texting-traffic",
    quote:
      "\"Traffic\" means operation of a motor vehicle while in motion or " +
      "for the purposes of travel on any street or highway and includes a " +
      "temporary stop or halt of motion, such as at an official " +
      "traffic-control signal or sign. The term does not include a motor " +
      "vehicle that is lawfully parked.",
    source: ndcc("39-08-23"),
    section: "Chapter 39-08 - Section 39-08-23",
    url: ndccUrl("08"),
  },
  {
    key: "statute-minor-phone",
    quote:
      "An individual at least sixteen and under eighteen years of age who " +
      "has been issued a class D license may not operate an electronic " +
      "communication device to talk, compose, read, or send an electronic " +
      "message while operating a motor vehicle that is in motion",
    source: ndcc("39-08-24"),
    section: "Chapter 39-08 - Section 39-08-24",
    url: ndccUrl("08"),
  },
  {
    key: "statute-open-container-fee",
    quote:
      "Any person violating this subsection must be assessed a fee of " +
      "fifty dollars",
    source: ndcc("39-08-18"),
    section: "Chapter 39-08 - Section 39-08-18",
    url: ndccUrl("08"),
  },
  {
    key: "statute-failure-to-control",
    quote:
      "An operator of a motor vehicle may not fail to maintain control of " +
      "that motor vehicle.",
    source: ndcc("39-08-25"),
    section: "Chapter 39-08 - Section 39-08-25",
    url: ndccUrl("08"),
  },
  {
    key: "statute-permit-age",
    quote:
      "Any resident of this state who is at least fourteen years of age " +
      "may apply to the director for a class D instruction permit.",
    source: ndcc("39-06-04"),
    section: "Chapter 39-06 - Section 39-06-04",
    url: ndccUrl("06"),
  },
  {
    key: "statute-permit-supervisor",
    quote:
      "The permittee must be accompanied by an individual with a class A, " +
      "B, C, or D license in a vehicle allowed to be operated with a " +
      "class D license, who is at least eighteen years of age, who has " +
      "had at least three years of driving experience, and who is " +
      "occupying a seat beside the driver.",
    source: ndcc("39-06-04"),
    section: "Chapter 39-06 - Section 39-06-04",
    url: ndccUrl("06"),
  },
  {
    key: "statute-permit-hold",
    quote:
      "An individual who is not yet eighteen years of age is not eligible " +
      "for a class D license until that individual has had an instruction " +
      "permit issued for at least six months or at least twelve months if " +
      "under the age of sixteen.",
    source: ndcc("39-06-04"),
    section: "Chapter 39-06 - Section 39-06-04",
    url: ndccUrl("06"),
  },
  {
    key: "statute-permit-phone",
    quote:
      "The permittee may not operate an electronic communication device " +
      "to talk, compose, read, or send an electronic message while " +
      "operating a motor vehicle that is in motion",
    source: ndcc("39-06-04"),
    section: "Chapter 39-06 - Section 39-06-04",
    url: ndccUrl("06"),
  },
  {
    key: "statute-minor-cancel-points",
    quote:
      "The director shall cancel the operator's license of an individual " +
      "who has committed acts resulting in an accumulated point total in " +
      "excess of five points",
    source: ndcc("39-06-01.1"),
    section: "Chapter 39-06 - Section 39-06-01.1",
    url: ndccUrl("06"),
  },
  {
    key: "statute-restricted-15-50-hours",
    quote:
      "The minor has accumulated a minimum of fifty hours of supervised, " +
      "behind-the-wheel driving experience in various driving conditions " +
      "and situations that include night driving; driving on gravel, " +
      "dirt, or aggregate surface road; driving in both rural and urban " +
      "conditions; and winter driving conditions.",
    source: ndcc("39-06-17"),
    section: "Chapter 39-06 - Section 39-06-17",
    url: ndccUrl("06"),
  },
  {
    key: "statute-restricted-passengers",
    quote:
      "An individual holding a restricted class D license driving a motor " +
      "vehicle may not carry more passengers than the vehicle " +
      "manufacturer's suggested passenger capacity.",
    source: ndcc("39-06-17"),
    section: "Chapter 39-06 - Section 39-06-17",
    url: ndccUrl("06"),
  },
  {
    key: "statute-exam-contents",
    quote:
      "The examination must include a test of the applicant's eyesight; " +
      "ability to read and understand highway signs regulating, warning, " +
      "and directing traffic; and knowledge of the traffic laws of this " +
      "state.",
    source: ndcc("39-06-13"),
    section: "Chapter 39-06 - Section 39-06-13",
    url: ndccUrl("06"),
  },
  {
    key: "statute-exam-online-fee",
    quote:
      "The director shall charge an applicant a fee of ten dollars to " +
      "access the online written examination.",
    source: ndcc("39-06-13"),
    section: "Chapter 39-06 - Section 39-06-13",
    url: ndccUrl("06"),
  },
  {
    key: "statute-exam-online-parent",
    quote:
      "Require the applicant's parent or legal guardian to certify to the " +
      "department the parent or legal guardian monitored the applicant " +
      "during the online written examination",
    source: ndcc("39-06-13"),
    section: "Chapter 39-06 - Section 39-06-13",
    url: ndccUrl("06"),
  },
  {
    key: "statute-schoolbus-points",
    quote:
      "Overtaking and passing a schoolbus in violation of 6 points",
    source: ndcc("39-06.1-10"),
    section: "Chapter 39-06-1 - Section 39-06.1-10",
    url: ndccUrl("06-1"),
  },
  {
    key: "statute-licence-carry",
    quote:
      "An individual licensed to operate a motor vehicle shall have a " +
      "physical or electronic operator's license in the individual's " +
      "immediate possession at all times when operating a motor vehicle",
    source: ndcc("39-06-16"),
    section: "Chapter 39-06 - Section 39-06-16",
    url: ndccUrl("06"),
  },
  {
    key: "web-minor-six-points",
    quote:
      "For drivers under the age of 18, driving license or privileges " +
      "will be canceled upon an accumulation of 6 or more points.",
    source: NDDOT,
    section: "NDDOT - Driver License Points Reduction and Points Schedule",
    url: POINTS_URL,
  },
  {
    key: "web-points-suspension",
    quote:
      "When a driver accumulates 12 or more points on their driving " +
      "record, their driving privileges are suspended for 7 days for each " +
      "point over 11.",
    source: NDDOT,
    section: "NDDOT - Driver License Points Reduction and Points Schedule",
    url: POINTS_URL,
  },
  {
    key: "web-defensive-driving",
    quote:
      "Drivers are eligible to take a defensive driving course to reduce " +
      "their total points by 3, once every 12 months.",
    source: NDDOT,
    section: "NDDOT - Driver License Points Reduction and Points Schedule",
    url: POINTS_URL,
  },
  {
    key: "web-speed-points-under-70",
    quote:
      "Speed Zones 65 MPH or Less The following are the points associated " +
      "with value over the limit, in speed zones that are under 70 mph. 1 " +
      "- 5 mph over limit - 0 points 6 - 10 mph over limit - 0 points 11 " +
      "- 15 mph over limit - 1 point",
    source: NDDOT,
    section: "NDDOT - Driver License Points Reduction and Points Schedule",
    url: POINTS_URL,
  },
  {
    key: "web-permit-fees",
    quote:
      "Knowledge Test: $5 per attempt (one attempt allowed per day) " +
      "Permit: $15 Road Test: $5",
    source: NDDOT,
    section: "NDDOT - How to Apply for a Learner's Permit",
    url: PERMIT_URL,
  },
  {
    key: "web-permit-steps",
    quote:
      "Successfully complete the Rules of the Road knowledge test. Refer " +
      "to the Online Study Guide . Successfully complete a vision " +
      "screening.",
    source: NDDOT,
    section: "NDDOT - How to Apply for a Learner's Permit",
    url: PERMIT_URL,
  },
  {
    key: "web-permit-sponsor",
    quote:
      "If you are under the age of 18, you will need a sponsor's " +
      "signature for approval and financial liability before a learner's " +
      "permit will be issued to you.",
    source: NDDOT,
    section: "NDDOT - How to Apply for a Learner's Permit",
    url: PERMIT_URL,
  },
  {
    key: "web-14-15-steps",
    quote:
      "Must hold a valid learner's permit for at least one year (six " +
      "months if you received a permit prior to January 1, 2012). Must " +
      "complete an acceptable formal driver's education course . Must " +
      "complete 50 hours of practice driving in variable conditions.",
    source: NDDOT,
    section: "NDDOT - How to Apply for a Learner's Permit",
    url: PERMIT_URL,
  },
  {
    key: "web-14-15-restrictions",
    quote:
      "Must be accompanied by a supervisor driver in the front seat. May " +
      "not operate an electronic communication device while operating a " +
      "motor vehicle.",
    source: NDDOT,
    section: "NDDOT - How to Apply for a Learner's Permit",
    url: PERMIT_URL,
  },
  {
    key: "web-restricted-curfew",
    quote:
      "May not operate a motor vehicle between sunset or 9 p.m. " +
      "(whichever is later) and 5 a.m. unless a licensed driver is in the " +
      "front seat or the vehicle is being driven directly to or from " +
      "work, an official school activity or a religious activity.",
    source: NDDOT,
    section: "NDDOT - How to Apply for a Learner's Permit",
    url: PERMIT_URL,
  },
  {
    key: "web-16-17-steps",
    quote:
      "Must hold a valid learner's permit for at least six months. Must " +
      "complete a road test through the state to become fully licensed.",
    source: NDDOT,
    section: "NDDOT - How to Apply for a Learner's Permit",
    url: PERMIT_URL,
  },
  {
    key: "web-minimum-age-16",
    quote:
      "The minimum driving age in North Dakota is 16. You may not drive " +
      "in North Dakota if you are under 16, even if you are licensed in " +
      "another state. However, a North Dakota resident can obtain a " +
      "restricted license at the age of 15.",
    source: NDDOT,
    section: "NDDOT - Driver License Requirements",
    url: REQ_URL,
  },
  {
    key: "web-retest-expired",
    quote:
      "You must retest if your license is expired more than one year.",
    source: NDDOT,
    section: "NDDOT - Driver License Requirements",
    url: REQ_URL,
  },
  {
    key: "web-online-test-official",
    quote:
      "KnowTo Drive is the only official online knowledge testing " +
      "platform, brought to you by the North Dakota Department of " +
      "Transportation",
    source: NDDOT,
    section: "NDDOT - Driver Education",
    url: DRIVERED_URL,
  },
  {
    key: "k2d-60-minutes",
    quote:
      "How long does the test take? There is a 60-minute time limit to " +
      "complete the test.",
    source: K2D,
    section: "KnowTo Drive North Dakota FAQ - Rules and Regulations",
    url: K2D_URL,
  },
  {
    key: "k2d-retake",
    quote:
      "If you fail, you can retake the test after 24 hours. If you fail " +
      "five times, you can retake the test after a year.",
    source: K2D,
    section: "KnowTo Drive North Dakota FAQ - Registration",
    url: K2D_URL,
  },
  {
    key: "k2d-who-can-test",
    quote:
      "Any North Dakota resident who's at least 14 years old. Residents " +
      "under 18 must have a parent or guardian register with them. The " +
      "parent or guardian must be a North Dakota resident and at least 18 " +
      "years old.",
    source: K2D,
    section: "KnowTo Drive North Dakota FAQ - Rules and Regulations",
    url: K2D_URL,
  },
  {
    key: "k2d-cost",
    quote:
      "How much does the test cost? Each test attempt costs $10.00.",
    source: K2D,
    section: "KnowTo Drive North Dakota FAQ - Payment",
    url: K2D_URL,
  },
  {
    key: "k2d-disqualified",
    quote:
      "Disqualifications happen when: Your mouse cursor leaves the test " +
      "session's red border. Photos captured during the test don't match " +
      "the initial photo you submitted. A photo is captured that " +
      "identifies additional people.",
    source: K2D,
    section: "KnowTo Drive North Dakota FAQ - Disqualification",
    url: K2D_URL,
  },
];
