import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Maryland bank - 188 of them: 162 from the
// Maryland Driver's Manual, 21 from the Maryland Transportation Article, and 5
// from mva.maryland.gov.
//
// Sources, and why there are three of them:
//
//  - The Maryland Driver's Manual, DL-002 (10-25), October 2025 Edition,
//    published by the MDOT Motor Vehicle Administration. This is the book the
//    MVA writes the 25-question knowledge test from, and it carries most of
//    what is quoted below.
//  - The Maryland Transportation Article, published by the Maryland General
//    Assembly. The manual is unusually short - 56 pages - and it leaves out
//    numbers the test still expects: it never states a single speed limit, never
//    gives a parking distance, and never says how far ahead you must signal.
//    Those come from the statute.
//  - Three mva.maryland.gov pages, for the knowledge test's format and the
//    Rookie Driver stages. The manual gives the question count and the time
//    limit but not the pass mark, and the licensing pages carry restrictions the
//    manual omits entirely.
//
// mva.maryland.gov refuses automated clients outright - a Cloudflare block, in
// a browser as well as on the command line - so the three MVA web pages were
// read from Internet Archive captures of those same official URLs (snapshots
// 2026-05-14, 2026-06-07 and 2026-07-30). Every `url` below still points at the
// live official page, which is where the learner should read it. The manual
// itself did not need the archive: the identical DL-002 PDF is served
// unblocked from MDOT MVA's own stg-mva.maryland.gov host, and that is the copy
// these quotes were extracted and verified from.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Four
// normalisations were applied to the extracted text and to nothing else: curly
// quotes, en dashes and em dashes are folded to ASCII; runs of whitespace,
// including the line breaks the PDF inserts mid-sentence, collapse to single
// spaces; the section symbol is spelled out as "Section"; and where a source
// states a rule as a stem followed by a bulleted list, the items are run
// together in the order they appear - no words are changed, dropped or
// reordered. The sources' own slips are preserved as they stand, including the
// manual's "before the you are eligible" and "funeral possession", because a
// quote that has been tidied up is no longer a quote.

const MANUAL = "Maryland Driver's Manual (MDOT Motor Vehicle Administration, October 2025 Edition)";
const MANUAL_URL = "https://mva.maryland.gov/Documents/DL-002.pdf";
const gtr = (s: string) =>
  `https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gtr&section=${s}&enactments=false`;
const TA = (s: string) => `Maryland Transportation Article Section ${s} (Maryland General Assembly)`;

export const marylandExcerpts: HandbookExcerpt[] = [
  {
    key: "abs-how",
    quote:
      "Anti-Lock Braking Systems (ABS) help prevent your wheels from locking up " +
      "so you can control your car.",
    source: MANUAL,
    section: "Section 10: Other Important Information - I. Braking with Anti-lock Braking System (ABS)",
    url: MANUAL_URL,
  },
  {
    key: "adas-not-autonomous",
    quote:
      "Do not rely on ADAS to fully operate your vehicle. You are responsible " +
      "for the safe operation of your vehicle at all times!",
    source: MANUAL,
    section: "Section 7: Sharing the Road - H. Understanding Vehicle Technologies",
    url: MANUAL_URL,
  },
  {
    key: "aggressive-examples",
    quote:
      "Examples of aggressive driving include: speeding, tailgating, ignoring " +
      "traffic signals and devices, making unsafe lane changes, not yielding the " +
      "right-of-way, and unsafe or illegal passing.",
    source: MANUAL,
    section: "Section 6: Dangerous Driving Behaviors - B. Aggressive Driving and Road Rage",
    url: MANUAL_URL,
  },
  {
    key: "airbag-rear-facing",
    quote:
      "Children in a rear-facing car seat should never ride in the front seat " +
      "of a vehicle with a passenger air bag.",
    source: MANUAL,
    section: "Section 10: Other Important Information - H. Air Bags",
    url: MANUAL_URL,
  },
  {
    key: "any-alcohol",
    quote:
      "Even though Maryland's limit for drunk driving is .08, any amount of " +
      "alcohol can affect your ability to safely drive a vehicle.",
    source: MANUAL,
    section: "Section 6: Dangerous Driving Behaviors - A. Alcohol, Drugs and Driving",
    url: MANUAL_URL,
  },
  {
    key: "bac-08",
    quote:
      "Maryland considers drivers to be driving under the influence of alcohol " +
      "when their blood alcohol concentration is .08 or higher.",
    source: MANUAL,
    section: "Section 6: Dangerous Driving Behaviors - A. Alcohol, Drugs and Driving",
    url: MANUAL_URL,
  },
  {
    key: "bac-suspension",
    quote:
      "The MVA will also suspend your license if you are impaired with drugs " +
      "in your system.",
    source: MANUAL,
    section: "Section 9: Other Restrictions, Violations and Penalties - B. Drug and Alcohol Test - Implied Consent",
    url: MANUAL_URL,
  },
  {
    key: "bicycle-3-feet",
    quote:
      "Then leave at least 3 feet between your vehicle and the bicycle when " +
      "passing.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - F. Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bicycle-3ft-statute",
    quote:
      "When overtaking a bicycle, an EPAMD, or a motor scooter, pass safely at " +
      "a distance of not less than 3 feet",
    source: TA("21-1209"),
    section: "Title 21, Subtitle 12 - Section 21-1209 (Bicycles, EPAMDs, and motor scooters)",
    url: gtr("21-1209"),
  },
  {
    key: "bicycle-bike-lane-yield",
    quote:
      "When you enter or cross a bike lane or shoulder, you must yield the " +
      "right-of-way to bicyclists riding in them.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - F. Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bicycle-crosswalk",
    quote: "Bicycles have the same right of way as pedestrians in a crosswalk.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - F. Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bicycle-full-lane",
    quote:
      "In Maryland, a bicyclist may use the full lane even while traveling " +
      "significantly below the speed of traffic",
    source: MANUAL,
    section: "Section 7: Sharing the Road - F. Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bicycle-helmet-16",
    quote: "Helmets are required for anyone under age 16 riding on a bike.",
    source: MANUAL,
    section: "Section 10: Other Important Information - M. Rules and Tips for Bicyclists",
    url: MANUAL_URL,
  },
  {
    key: "bicycle-lights-law",
    quote:
      "When riding at night, Maryland State Law requires a white headlight on " +
      "the front of your bicycle, and a red reflector on the back.",
    source: MANUAL,
    section: "Section 10: Other Important Information - M. Rules and Tips for Bicyclists",
    url: MANUAL_URL,
  },
  {
    key: "bicycle-row-turn",
    quote:
      "Bicyclists have the right-of-way when a motor vehicle is making a turn, " +
      "so you must yield to bicyclists.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - F. Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bicycle-sidewalks",
    quote: "Bicycles are allowed on sidewalks throughout the state.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - F. Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "bicycles-vehicles",
    quote: "Bicycles are vehicles, according to Maryland law.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - F. Bicycles",
    url: MANUAL_URL,
  },
  {
    key: "black-ice",
    quote:
      "It can be very hard or impossible to see a thin layer of ice on " +
      "blacktop (asphalt) roads. This is sometimes called black ice.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - D. Driving in Inclement Weather",
    url: MANUAL_URL,
  },
  {
    key: "broken-white",
    quote:
      "Separates lanes where all traffic is going in the same direction, and " +
      "crossing from one lane to the other is permitted.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - C. Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "broken-yellow",
    quote:
      "Separates lanes where vehicles are traveling in opposite directions, " +
      "and passing with care is permitted in either direction.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - C. Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "child-in-vehicle-dui",
    quote:
      "If you are convicted of a drunk or drugged driving offense with a child " +
      "in your vehicle, the judge can double your fine and jail time.",
    source: MANUAL,
    section: "Section 6: Dangerous Driving Behaviors - A. Alcohol, Drugs and Driving",
    url: MANUAL_URL,
  },
  {
    key: "child-seat-8",
    quote:
      "All children under age 8 must ride in a child safety seat, unless the " +
      "child is 4'9\" or taller.",
    source: MANUAL,
    section: "Section 10: Other Important Information - G. Child Safety Seats",
    url: MANUAL_URL,
  },
  {
    key: "crash-animal",
    quote:
      "If you hit and injure a domestic animal with your vehicle, you must " +
      "immediately call the police.",
    source: MANUAL,
    section: "Section 8: Crashes and Traffic Stops - A. Crashes",
    url: MANUAL_URL,
  },
  {
    key: "crash-flashers",
    quote:
      "Whenever you are in a crash, put on your emergency flashers or flares " +
      "to warn other drivers.",
    source: MANUAL,
    section: "Section 8: Crashes and Traffic Stops - A. Crashes",
    url: MANUAL_URL,
  },
  {
    key: "crash-injury-actions",
    quote:
      "Call 911 immediately to get help from police, fire, and ambulance. " +
      "Report the number of people involved, the type of injury, and the " +
      "location of the crash. Do not move the vehicles.",
    source: MANUAL,
    section: "Section 8: Crashes and Traffic Stops - A. Crashes",
    url: MANUAL_URL,
  },
  {
    key: "crash-leaving-injury",
    quote:
      "Your license will be revoked (you will not be allowed to drive). You " +
      "could go to prison for up to 5 years and a be fined up to $5,000.",
    source: MANUAL,
    section: "Section 8: Crashes and Traffic Stops - A. Crashes",
    url: MANUAL_URL,
  },
  {
    key: "crosswalk-unmarked",
    quote: "Most intersections have a crosswalk even if it is not marked.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - A. Pedestrian Right-of-Way",
    url: MANUAL_URL,
  },
  {
    key: "disability-access-aisle",
    quote:
      "Parking on any part of an access aisle next to a disability parking " +
      "space (even if you have a disability license plate or placard).",
    source: MANUAL,
    section: "Section 9: Other Restrictions, Violations and Penalties - F. Use of Disability Parking Spaces",
    url: MANUAL_URL,
  },
  {
    key: "disability-curb-cut",
    quote:
      "Parking in front of or blocking any part of a curb cut (even if you " +
      "have a disability license plate or placard).",
    source: MANUAL,
    section: "Section 9: Other Restrictions, Violations and Penalties - F. Use of Disability Parking Spaces",
    url: MANUAL_URL,
  },
  {
    key: "distracted-def",
    quote:
      "\"Distracted driving\" is when you take your eyes, hands or especially " +
      "your mind, away from driving.",
    source: MANUAL,
    section: "Section 6: Dangerous Driving Behaviors - C. Distracted Driving",
    url: MANUAL_URL,
  },
  {
    key: "divided-highway-def",
    quote:
      "A divided highway has a guardrail, strip of land, or other barrier " +
      "between traffic traveling in each direction.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - C. Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "double-solid-white",
    quote:
      "Separates lanes where all traffic is going in the same direction and " +
      "you are not allowed to change lanes.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - C. Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "double-solid-yellow",
    quote:
      "Separates lanes where traffic is going in opposite directions and " +
      "passing is not allowed in either direction. You may make a left turn " +
      "across a double solid yellow line.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - C. Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "drowsy-impairs",
    quote:
      "Sleepiness slows reaction time, decreases awareness, and impairs " +
      "judgment, just like drugs or alcohol.",
    source: MANUAL,
    section: "Section 6: Dangerous Driving Behaviors - D. Drowsy Driving",
    url: MANUAL_URL,
  },
  {
    key: "ebike-class1",
    quote:
      "Class 1: Have a motor that provides assistance only when the rider is " +
      "pedaling, and stops providing assistance when the bicycle reaches a speed " +
      "of 20 miles per hour.",
    source: MANUAL,
    section: "Section 10: Other Important Information - N. Electric Low Speed Vehicles",
    url: MANUAL_URL,
  },
  {
    key: "emergency-no-pass",
    quote:
      "If you are going in the same direction as an emergency vehicle using " +
      "its signals, you may not pass it unless it stops or a police officer " +
      "tells you to pass it.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - B. Emergency Vehicles",
    url: MANUAL_URL,
  },
  {
    key: "emergency-vehicle-actions",
    quote:
      "Move as close as possible to the edge of the road. Stay out of " +
      "intersections, and Remain stopped until the emergency vehicle has passed.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - B. Emergency Vehicles",
    url: MANUAL_URL,
  },
  {
    key: "entering-highway",
    quote:
      "When entering an interstate or other limited access highway, you should " +
      "not cross the solid lines that divide the entrance and the highway.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - J. Interstate Driving and Limited Access Highways",
    url: MANUAL_URL,
  },
  {
    key: "exception-officer",
    quote:
      "The only time you do not have to obey all traffic control devices is " +
      "when one of the following tells you to do something different: A police " +
      "officer or other emergency personnel. A school crossing guard in uniform " +
      "directing traffic near a school.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "flashing-red",
    quote:
      "Yield to all other traffic and pedestrians. Proceed when the way is " +
      "clear.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "flashing-red-railroad",
    quote:
      "If a flashing red signal is located at a railroad crossing, you must " +
      "come to a complete stop, even if you do not see a train.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "flashing-yellow",
    quote: "You must slow down and proceed with caution.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "flashing-yellow-x",
    quote:
      "A flashing yellow \"X\" signal or two-way left-turn arrows mean you can " +
      "use the lane for a left turn.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "fog-lowbeam",
    quote: "Use low beam headlights only. Also use fog lights if you have them.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - C. Driving in Fog",
    url: MANUAL_URL,
  },
  {
    key: "fog-pull-off",
    quote:
      "If the fog is so thick that you cannot safely drive your vehicle, pull " +
      "completely off the road to a safe location and turn on your emergency " +
      "flashers.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - C. Driving in Fog",
    url: MANUAL_URL,
  },
  {
    key: "following-3-4",
    quote:
      "The MVA recommends a minimum following distance of 3 to 4 seconds under " +
      "ideal driving conditions.",
    source: MANUAL,
    section: "Section 3: Basic Driving - D. Following Distance",
    url: MANUAL_URL,
  },
  {
    key: "following-buses",
    quote:
      "When following vehicles that stop often (buses, delivery vans), you " +
      "should increase the distance between your vehicle and the one ahead of " +
      "you to four or five seconds, and possibly more if needed.",
    source: MANUAL,
    section: "Section 3: Basic Driving - D. Following Distance",
    url: MANUAL_URL,
  },
  {
    key: "follow-reasonable",
    quote:
      "The driver of a motor vehicle may not follow another vehicle more " +
      "closely than is reasonable and prudent, having due regard for the speed " +
      "of the other vehicle and of the traffic on and the condition of the " +
      "highway.",
    source: TA("21-310"),
    section: "Title 21, Subtitle 3 - Section 21-310 (Following too closely)",
    url: gtr("21-310"),
  },
  {
    key: "funeral-lights",
    quote:
      "When you drive in a funeral procession you must turn on your headlights " +
      "and flashing hazard lights so other vehicles give you the right-of-way.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - K. Funeral Processions",
    url: MANUAL_URL,
  },
  {
    key: "funeral-red-light",
    quote:
      "You may go through a red traffic signal if you are part of a funeral " +
      "possession and have your lights on.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - K. Funeral Processions",
    url: MANUAL_URL,
  },
  {
    key: "gls-overview",
    quote:
      "The process you go through to get a noncommercial driver's license is " +
      "called the Rookie Driver/Graduated Driver Licensing System (GLS).",
    source: MANUAL,
    section: "Section 2: Licensing Requirements and Process - A. Rookie Driver/Graduated Licensing System",
    url: MANUAL_URL,
  },
  {
    key: "green-arrow",
    quote: "Proceed with caution in the direction the arrow points.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "green-yield",
    quote:
      "You must yield to pedestrians and vehicles already in the intersection.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "handheld-ban",
    quote:
      "It is illegal to use a hand-held cell phone, including texting, while " +
      "driving. This means you cannot use your phone while holding it.",
    source: MANUAL,
    section: "Section 6: Dangerous Driving Behaviors - C. Distracted Driving",
    url: MANUAL_URL,
  },
  {
    key: "handheld-permit-18plus",
    quote:
      "The following individuals may not use a handheld telephone while " +
      "operating a motor vehicle: (1) A driver of a Class H (school) vehicle " +
      "that is carrying passengers and in motion; and (2) A holder of a " +
      "learner's instructional permit or a provisional driver's license who is " +
      "18 years of age or older.",
    source: TA("21-1124.2"),
    section: "Title 21, Subtitle 11 - Section 21-1124.2 (Use of handheld telephone)",
    url: gtr("21-1124.2"),
  },
  {
    key: "headlights-1000",
    quote:
      "When driving, you must turn on your headlights anytime there is not " +
      "enough light to clearly see at least 1,000 feet in front of your vehicle.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - A. Driving in Reduced Visibility",
    url: MANUAL_URL,
  },
  {
    key: "headsets-both-ears",
    quote:
      "You may not drive with earplugs, headsets, or earphones in both ears. " +
      "Hearing aid devices are allowed.",
    source: MANUAL,
    section: "Section 10: Other Important Information - J. Wearing of Headsets, Earphones and Earplugs Prohibited",
    url: MANUAL_URL,
  },
  {
    key: "helmet-ocean-city",
    quote:
      "This section does not apply in the town of Ocean City, Maryland, on the " +
      "boardwalk between the Ocean City inlet and 27th Street",
    source: TA("21-1207.1"),
    section: "Title 21, Subtitle 12 - Section 21-1207.1 (Bicycle helmets)",
    url: gtr("21-1207.1"),
  },
  {
    key: "highway-stopping",
    quote:
      "You are not allowed to stop in the lanes where traffic is moving on an " +
      "interstate or other highway. You may stop on the shoulder, but only when " +
      "your vehicle is disabled (stops running) or you have another emergency.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - J. Interstate Driving and Limited Access Highways",
    url: MANUAL_URL,
  },
  {
    key: "hydroplaning-response",
    quote:
      "Take your foot off the gas. Do not apply your brakes. Keep your vehicle " +
      "going straight. Slow down until you get control back.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - F. Hydroplaning",
    url: MANUAL_URL,
  },
  {
    key: "implied-consent",
    quote:
      "In Maryland, if you drive or attempt to drive a motor vehicle on a road " +
      "or private property used by the public, you consent (agree) to take a " +
      "drug or alcohol test if a law enforcement officer asks you to.",
    source: MANUAL,
    section: "Section 9: Other Restrictions, Violations and Penalties - B. Drug and Alcohol Test - Implied Consent",
    url: MANUAL_URL,
  },
  {
    key: "insurance-card",
    quote:
      "You must always have a valid insurance identification card with you " +
      "when driving a motor vehicle. This card may be in electronic format.",
    source: MANUAL,
    section: "Section 10: Other Important Information - E. Insurance Requirements",
    url: MANUAL_URL,
  },
  {
    key: "knowledge-test-length",
    quote:
      "There are 25 questions on the test. You will have 20 minutes to take " +
      "the test.",
    source: MANUAL,
    section: "Section 1: Driving Tests Requirements - B. Knowledge Test",
    url: MANUAL_URL,
  },
  {
    key: "lane-single",
    quote:
      "You should drive your vehicle in a single lane. Do not switch lanes " +
      "until you determine it is safe to do so.",
    source: MANUAL,
    section: "Section 3: Basic Driving - F. Lane Driving",
    url: MANUAL_URL,
  },
  {
    key: "lowbeam-300",
    quote:
      "Change to low beams when following a vehicle that is 300 feet or less " +
      "in front of you.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - A. Driving in Reduced Visibility",
    url: MANUAL_URL,
  },
  {
    key: "lowbeam-500",
    quote:
      "Change to low beams at least 500 feet before reaching vehicles coming " +
      "toward you.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - A. Driving in Reduced Visibility",
    url: MANUAL_URL,
  },
  {
    key: "medical-report",
    quote:
      "You must let the MVA know if you have a medical condition that could " +
      "affect your ability to drive. State law requires this.",
    source: MANUAL,
    section: "Section 1: Driving Tests Requirements - D. Reportable Medical Conditions",
    url: MANUAL_URL,
  },
  {
    key: "moped-50mph",
    quote:
      "Mopeds and scooters may be ridden on any road with a posted maximum " +
      "speed limit of 50 miles per hour or less.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - G. Mopeds and Scooters",
    url: MANUAL_URL,
  },
  {
    key: "motorcycle-following",
    quote:
      "Leave at least a 3 to 4-second following distance between your vehicle " +
      "and the motorcycle in front of you.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - E. Motorcycles",
    url: MANUAL_URL,
  },
  {
    key: "motorcycle-lane",
    quote:
      "Do not share a lane with a motorcycle.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - E. Motorcycles",
    url: MANUAL_URL,
  },
  {
    key: "motorcycle-left-turn",
    quote: "Yield right-of-way to an oncoming motorcycle when turning left.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - E. Motorcycles",
    url: MANUAL_URL,
  },
  {
    key: "motorcycle-rights",
    quote:
      "Motorcyclists have the same rights and privileges as any other driver " +
      "on the road.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - E. Motorcycles",
    url: MANUAL_URL,
  },
  {
    key: "moveover-md",
    quote:
      "In Maryland, you must move over when approaching any vehicles while " +
      "they are stopped, standing, or parked on a road with its lights flashing.",
    source: MANUAL,
    section: "Section 8: Crashes and Traffic Stops - D. Move Over Law",
    url: MANUAL_URL,
  },
  {
    key: "moveover-penalty",
    quote: "A $110 fine and one point on your license.",
    source: MANUAL,
    section: "Section 8: Crashes and Traffic Stops - D. Move Over Law",
    url: MANUAL_URL,
  },
  {
    key: "moveover-slow",
    quote:
      "If it is not safe or possible to move over, you must slow down to a " +
      "safe speed.",
    source: MANUAL,
    section: "Section 8: Crashes and Traffic Stops - D. Move Over Law",
    url: MANUAL_URL,
  },
  {
    key: "no-pass-stopped-crosswalk",
    quote: "You may not pass any vehicle that is stopped at a crosswalk.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - A. Pedestrian Right-of-Way",
    url: MANUAL_URL,
  },
  {
    key: "no-passing-100-feet",
    quote:
      "When crossing or within 100 feet of an intersection or railroad grade " +
      "crossing.",
    source: MANUAL,
    section: "Section 3: Basic Driving - I. Passing",
    url: MANUAL_URL,
  },
  {
    key: "no-passing-bridge",
    quote:
      "When your view is obstructed as you come within 100 feet of a bridge, " +
      "elevated road, or tunnel.",
    source: MANUAL,
    section: "Section 3: Basic Driving - I. Passing",
    url: MANUAL_URL,
  },
  {
    key: "no-passing-shoulder",
    quote: "On the shoulder of the road, either to the right or to the left.",
    source: MANUAL,
    section: "Section 3: Basic Driving - I. Passing",
    url: MANUAL_URL,
  },
  {
    key: "obey-traffic-devices",
    quote: "Everyone must obey traffic control devices.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "open-container",
    quote:
      "It is against the law to drive with an open container of alcohol in the " +
      "passenger area of the vehicle.",
    source: MANUAL,
    section: "Section 6: Dangerous Driving Behaviors - A. Alcohol, Drugs and Driving",
    url: MANUAL_URL,
  },
  {
    key: "parallel-parking-not-required",
    quote: "Parallel parking is no longer required when you take your driving test.",
    source: MANUAL,
    section: "Section 10: Other Important Information - K. Parallel Parking",
    url: MANUAL_URL,
  },
  {
    key: "park-crosswalk-20",
    quote:
      "This subsection does not apply in Baltimore City. (2) A person may not " +
      "stand or park a vehicle within 20 feet of a crosswalk at an intersection.",
    source: TA("21-1003"),
    section: "Title 21, Subtitle 10 - Section 21-1003 (Stopping, standing, or parking prohibited)",
    url: gtr("21-1003"),
  },
  {
    key: "park-hydrant-15",
    quote: "A person may not stand or park a vehicle within 15 feet of a fire hydrant.",
    source: TA("21-1003"),
    section: "Title 21, Subtitle 10 - Section 21-1003 (Stopping, standing, or parking prohibited)",
    url: gtr("21-1003"),
  },
  {
    key: "park-railroad-50",
    quote:
      "A person may not park a vehicle within 50 feet of the nearest rail in a " +
      "railroad grade crossing.",
    source: TA("21-1003"),
    section: "Title 21, Subtitle 10 - Section 21-1003 (Stopping, standing, or parking prohibited)",
    url: gtr("21-1003"),
  },
  {
    key: "park-stop-sign-30",
    quote:
      "A person may not stand or park a vehicle within 30 feet on the approach " +
      "to any flashing signal, stop sign, yield sign, or traffic control signal " +
      "located at the side of a roadway.",
    source: TA("21-1003"),
    section: "Title 21, Subtitle 10 - Section 21-1003 (Stopping, standing, or parking prohibited)",
    url: gtr("21-1003"),
  },
  {
    key: "park-unattended",
    quote:
      "a person driving or otherwise in charge of a motor vehicle may not " +
      "leave it unattended until the engine is stopped, the ignition locked, the " +
      "key removed, and the brake effectively set",
    source: TA("21-1101"),
    section: "Title 21, Subtitle 11 - Section 21-1101 (Unattended motor vehicles)",
    url: gtr("21-1101"),
  },
  {
    key: "parking-brake",
    quote: "Set your parking brake when you park.",
    source: MANUAL,
    section: "Section 3: Basic Driving - J. General Parking Rules",
    url: MANUAL_URL,
  },
  {
    key: "parking-curb",
    quote:
      "When parking along the road, park your vehicle as far away from traffic " +
      "as possible. If there is a curb, park as close to it as possible.",
    source: MANUAL,
    section: "Section 3: Basic Driving - J. General Parking Rules",
    url: MANUAL_URL,
  },
  {
    key: "passing-being-passed",
    quote:
      "When being passed by another vehicle, you must yield to the other " +
      "vehicle and not increase your speed.",
    source: MANUAL,
    section: "Section 3: Basic Driving - I. Passing",
    url: MANUAL_URL,
  },
  {
    key: "passing-right-unobstructed",
    quote:
      "You are on an unobstructed road with two or more lanes moving in the " +
      "same direction. Unobstructed means there are no median strips, signs, or " +
      "other things in the way.",
    source: MANUAL,
    section: "Section 3: Basic Driving - I. Passing",
    url: MANUAL_URL,
  },
  {
    key: "ped-must-stop",
    quote:
      "The driver of a vehicle shall come to a stop when a pedestrian crossing " +
      "the roadway in a crosswalk is: (i) On the half of the roadway on which " +
      "the vehicle is traveling; or (ii) Approaching from an adjacent lane on " +
      "the other half of the roadway.",
    source: TA("21-502"),
    section: "Title 21, Subtitle 5 - Section 21-502 (Pedestrians' right-of-way in crosswalks)",
    url: gtr("21-502"),
  },
  {
    key: "ped-no-overtake",
    quote:
      "If, at a marked crosswalk or at an unmarked crosswalk at an " +
      "intersection, a vehicle is stopped to let a pedestrian cross the roadway, " +
      "the driver of any other vehicle approaching from the rear may not " +
      "overtake and pass the stopped vehicle.",
    source: TA("21-502"),
    section: "Title 21, Subtitle 5 - Section 21-502 (Pedestrians' right-of-way in crosswalks)",
    url: gtr("21-502"),
  },
  {
    key: "ped-row",
    quote:
      "Pedestrians have the right-of-way at street crossings but must obey " +
      "traffic control signals.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - A. Pedestrian Right-of-Way",
    url: MANUAL_URL,
  },
  {
    key: "ped-stop-no-signal",
    quote:
      "When there is no traffic signal, you must stop for pedestrians in a " +
      "marked or unmarked crosswalk.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - A. Pedestrian Right-of-Way",
    url: MANUAL_URL,
  },
  {
    key: "permit-3-months",
    quote:
      "If you are age 18 with a high school diploma or GED, or age 19 to 24, " +
      "you must hold the Permit for at least 3 months without a violation before " +
      "being eligible for a Provisional License.",
    source: MANUAL,
    section: "Section 2: Licensing Requirements and Process - B. Learner's Instructional Permit",
    url: MANUAL_URL,
  },
  {
    key: "permit-45-days",
    quote:
      "You must have your permit for at least 45 days before the you are " +
      "eligible for a Provisional License.",
    source: MANUAL,
    section: "Section 2: Licensing Requirements and Process - B. Learner's Instructional Permit",
    url: MANUAL_URL,
  },
  {
    key: "permit-9-months",
    quote:
      "If you are under age 18, you must hold the Permit for at least 9 months " +
      "without a violation before being eligible for a Provisional License.",
    source: MANUAL,
    section: "Section 2: Licensing Requirements and Process - B. Learner's Instructional Permit",
    url: MANUAL_URL,
  },
  {
    key: "permit-min-age",
    quote:
      "You must be at least 15 years and 9 months old to apply for a Maryland " +
      "learner's permit.",
    source: "MDOT MVA - Learner's Permit",
    section: "Learner's Permit",
    url: "https://mva.maryland.gov/your-mva-guide/teens-new-drivers/learners-permit",
  },
  {
    key: "permit-supervisor-front",
    quote:
      "Have your supervising driver sit in the front passenger seat - no other " +
      "front-seat passengers are allowed",
    source: "MDOT MVA - Learner's Permit",
    section: "Rules for driving with a learner's permit",
    url: "https://mva.maryland.gov/your-mva-guide/teens-new-drivers/learners-permit",
  },
  {
    key: "permit-type1",
    quote:
      "If you have never had a noncommercial, driver's license you must get a " +
      "Type 1 Learner's Instructional Permit. The Permit lasts up to 2 years.",
    source: MANUAL,
    section: "Section 2: Licensing Requirements and Process - B. Learner's Instructional Permit",
    url: MANUAL_URL,
  },
  {
    key: "points-8-12",
    quote:
      "Suspend the license of each individual who accumulates 8 points; and " +
      "(ii) Revoke the license of each individual who accumulates 12 points.",
    source: TA("16-404"),
    section: "Title 16, Subtitle 4 - Section 16-404 (Action on accumulation of points)",
    url: gtr("16-404"),
  },
  {
    key: "practice-hours-60",
    quote:
      "Practice driving at least 60 hours with a supervising driver. These are " +
      "called practice hours. At least 10 practice hours must occur during the " +
      "period beginning 30 minutes before sunset and ending 30 minutes after " +
      "sunrise.",
    source: MANUAL,
    section: "Section 2: Licensing Requirements and Process - B. Learner's Instructional Permit",
    url: MANUAL_URL,
  },
  {
    key: "provisional-18-months",
    quote:
      "You have a Provisional Driver's License for at least 18 months before " +
      "being eligible for a regular Driver's License.",
    source: MANUAL,
    section: "Section 2: Licensing Requirements and Process - C. Provisional License",
    url: MANUAL_URL,
  },
  {
    key: "provisional-night",
    quote:
      "If you have a Provisional License, you are allowed to drive " +
      "unsupervised between 12:00 midnight and 5:00 a.m., ONLY if you are: " +
      "Driving to, from, or during your job.",
    source: MANUAL,
    section: "Section 9: Other Restrictions, Violations and Penalties - A. Restrictions",
    url: MANUAL_URL,
  },
  {
    key: "provisional-passenger-151",
    quote:
      "If you have a Provisional License and are under the age of 18, you may " +
      "not drive unsupervised with passengers under the age of 18 for the first " +
      "151 days unless they are immediate family members.",
    source: MANUAL,
    section: "Section 9: Other Restrictions, Violations and Penalties - A. Restrictions",
    url: MANUAL_URL,
  },
  {
    key: "provisional-phone-penalty",
    quote: "Phone and device use: Your license can be suspended for 90 days.",
    source: "MDOT MVA - Provisional Driver's License",
    section: "Penalties for breaking provisional license restrictions",
    url: "https://mva.maryland.gov/your-mva-guide/teens-new-drivers/provisional-license",
  },
  {
    key: "provisional-seatbelt",
    quote:
      "You must always use a safety belt if you have a Provisional License. " +
      "All passengers must use safety belts or child safety seats.",
    source: MANUAL,
    section: "Section 9: Other Restrictions, Violations and Penalties - A. Restrictions",
    url: MANUAL_URL,
  },
  {
    key: "provisional-wireless",
    quote:
      "If you have a Provisional License or a Learner's Permit, you may not " +
      "use any wireless communication device (including a hands-free phone) " +
      "while driving. The only exception is a 911 emergency call.",
    source: MANUAL,
    section: "Section 9: Other Restrictions, Violations and Penalties - A. Restrictions",
    url: MANUAL_URL,
  },
  {
    key: "railroad-buses-stop",
    quote:
      "Buses, school buses, and trucks carrying hazardous materials must stop " +
      "before every railroad crossing.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - G. Highway-Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "railroad-gates",
    quote:
      "The road is temporarily closed if gates are down or warning lights are " +
      "flashing. Stop and wait until the gates go up and the warning lights stop " +
      "flashing.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - G. Highway-Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "railroad-second-train",
    quote:
      "After a train passes, look both ways before starting over the tracks. " +
      "Always make sure the tracks are clear before crossing. Another train may " +
      "be coming on another track.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - G. Highway-Railroad Crossings",
    url: MANUAL_URL,
  },
  {
    key: "red-arrow",
    quote:
      "If you want to go in the direction the arrow is pointing to, come to a " +
      "complete stop before reaching the stop line, crosswalk, or intersection. " +
      "Remain stopped as long as the arrow signal is red.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "red-turn-yield",
    quote:
      "When turning on a red signal, you must yield the right-of-way to " +
      "pedestrians and all other traffic.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "red-turns",
    quote:
      "Unless a sign prohibits turning on red, after coming to a complete " +
      "stop, you may: Turn right, or Turn left from a one-way street to another " +
      "one-way street.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "red-x",
    quote: "You must never drive in a lane under a red \"X\" signal.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "refusal-suspension",
    quote:
      "If a police officer submits a certified statement that you refused a " +
      "test, the MVA will suspend your license.",
    source: MANUAL,
    section: "Section 9: Other Restrictions, Violations and Penalties - B. Drug and Alcohol Test - Implied Consent",
    url: MANUAL_URL,
  },
  {
    key: "restrictions-privilege",
    quote: "Remember that driving is a privilege, not a right.",
    source: MANUAL,
    section: "Section 9: Other Restrictions, Violations and Penalties - A. Restrictions",
    url: MANUAL_URL,
  },
  {
    key: "revocation-def",
    quote:
      "If your license is revoked, you may not drive a motor vehicle until the " +
      "MVA determines that you can safely drive again.",
    source: MANUAL,
    section: "Section 9: Other Restrictions, Violations and Penalties - D. Administrative Actions",
    url: MANUAL_URL,
  },
  {
    key: "roadside-gore",
    quote:
      "Never stop or park in the triangular shaped painted zones where a ramp " +
      "exits the road.",
    source: MANUAL,
    section: "Section 8: Crashes and Traffic Stops - B. Roadside Emergencies",
    url: MANUAL_URL,
  },
  {
    key: "roundabout-exit",
    quote:
      "When preparing to exit, turn on your right turn signal and move to the " +
      "outside lane after you pass the exit before the one you plan to take.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - I. Traffic Circles (Roundabouts)",
    url: MANUAL_URL,
  },
  {
    key: "roundabout-yield",
    quote:
      "Roads that lead to traffic circles have yield signs. When you come to a " +
      "traffic circle, you must always yield to traffic already in the circle.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - I. Traffic Circles (Roundabouts)",
    url: MANUAL_URL,
  },
  {
    key: "row-arrives-first",
    quote:
      "You should yield the right-of-way to: The driver who is at or arrives " +
      "before you at an intersection.",
    source: MANUAL,
    section: "Section 3: Basic Driving - B. Right-of-Way",
    url: MANUAL_URL,
  },
  {
    key: "row-driver-right",
    quote:
      "The driver on your right, if both of you arrive at an intersection at " +
      "the same time.",
    source: MANUAL,
    section: "Section 3: Basic Driving - B. Right-of-Way",
    url: MANUAL_URL,
  },
  {
    key: "row-four-way",
    quote:
      "The driver on your right at a four-way intersection with stop signs.",
    source: MANUAL,
    section: "Section 3: Basic Driving - B. Right-of-Way",
    url: MANUAL_URL,
  },
  {
    key: "row-left-turn",
    quote:
      "Drivers in the opposing traffic lane, when you are making a left turn.",
    source: MANUAL,
    section: "Section 3: Basic Driving - B. Right-of-Way",
    url: MANUAL_URL,
  },
  {
    key: "row-never-assume",
    quote:
      "Although the rules state who should yield the right-of-way in different " +
      "situations, never assume you automatically have the right-of-way (the " +
      "right to go first).",
    source: MANUAL,
    section: "Section 3: Basic Driving - B. Right-of-Way",
    url: MANUAL_URL,
  },
  {
    key: "row-t-intersection",
    quote:
      "Drivers already on the road as you stop at a \"T\" intersection.",
    source: MANUAL,
    section: "Section 3: Basic Driving - B. Right-of-Way",
    url: MANUAL_URL,
  },
  {
    key: "schoolbus-20",
    quote:
      "Stop at least 20 feet from the back of the school bus, if you are " +
      "behind it. Stop at least 20 feet from the front of the school bus, if you " +
      "are in front of it.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - D. School Buses",
    url: MANUAL_URL,
  },
  {
    key: "schoolbus-barrier",
    quote:
      "If you are on a multiple lane road divided by a physical barrier, do " +
      "not stop if the bus is on the other side of the barrier.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - D. School Buses",
    url: MANUAL_URL,
  },
  {
    key: "schoolbus-divided-statute",
    quote:
      "This section does not apply to the driver of a vehicle on a divided " +
      "highway, if the school vehicle is on a different roadway.",
    source: TA("21-706"),
    section: "Title 21, Subtitle 7 - Section 21-706 (Overtaking and passing school vehicles)",
    url: gtr("21-706"),
  },
  {
    key: "schoolbus-resume",
    quote:
      "You may not start moving again until the school bus starts moving or " +
      "turns off its flashing red lights.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - D. School Buses",
    url: MANUAL_URL,
  },
  {
    key: "seatbelt-law",
    quote:
      "By law, the driver and all passengers of a motor vehicle must wear a " +
      "safety belt or be buckled in a child safety seat.",
    source: MANUAL,
    section: "Section 10: Other Important Information - F. Seat Belt Law",
    url: MANUAL_URL,
  },
  {
    key: "shape-diamond",
    quote: "These signs warn you of special conditions or hazards ahead.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Colors & Shapes)",
    url: MANUAL_URL,
  },
  {
    key: "shape-octagon",
    quote:
      "The octagonal (eight-sided) shape always means stop. You must come to a " +
      "complete stop.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Colors & Shapes)",
    url: MANUAL_URL,
  },
  {
    key: "shape-pennant",
    quote: "Marks the start of a no passing zone. Do not pass other vehicles.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Colors & Shapes)",
    url: MANUAL_URL,
  },
  {
    key: "shape-pentagon",
    quote:
      "The pentagon (five-sided) shape warns you of school zones and marks " +
      "school crossings.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Colors & Shapes)",
    url: MANUAL_URL,
  },
  {
    key: "shape-round-railroad",
    quote: "Used to warn that there is a railroad crossing ahead.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Colors & Shapes)",
    url: MANUAL_URL,
  },
  {
    key: "sign-color-blue",
    quote: "Blue - Services like food, gas, and rest area signs.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Colors & Shapes)",
    url: MANUAL_URL,
  },
  {
    key: "sign-color-green",
    quote: "Green - Destinations, distances, and directions.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Colors & Shapes)",
    url: MANUAL_URL,
  },
  {
    key: "sign-color-orange",
    quote: "Orange - Construction and maintenance work area warning.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Colors & Shapes)",
    url: MANUAL_URL,
  },
  {
    key: "sign-color-red",
    quote: "Red - Stop, yield, do not enter, or wrong way.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Colors & Shapes)",
    url: MANUAL_URL,
  },
  {
    key: "sign-color-yellow",
    quote: "Yellow - General warning of what to expect ahead.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Colors & Shapes)",
    url: MANUAL_URL,
  },
  {
    key: "sign-color-yellowgreen",
    quote: "Fluorescent Yellow-Green - School, pedestrian and bicycle signs.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Colors & Shapes)",
    url: MANUAL_URL,
  },
  {
    key: "signal-100-feet",
    quote:
      "When required, a signal of intention to turn right or left shall be " +
      "given continuously during at least the last 100 feet traveled by the " +
      "vehicle before turning",
    source: TA("21-604"),
    section: "Title 21, Subtitle 6 - Section 21-604 (Turning movements and required signals)",
    url: gtr("21-604"),
  },
  {
    key: "signal-not-working",
    quote:
      "When a traffic signal is not working: You must stop at a clearly marked " +
      "stop line.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "skid-steer",
    quote:
      "Release the accelerator (gas pedal) or brake pedal, whichever one you " +
      "are using, to regain control of your vehicle. Steer in the direction you " +
      "are skidding.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - E. Skidding",
    url: MANUAL_URL,
  },
  {
    key: "skills-test-maneuvers",
    quote:
      "You must be able to successfully perform pull-in parking, back-in " +
      "parking, and a three-point turn during your driving test.",
    source: MANUAL,
    section: "Section 10: Other Important Information - L. Pull-In Parking, Back-In Parking, and Three-Point Turn",
    url: MANUAL_URL,
  },
  {
    key: "slow-right-lane",
    quote:
      "If you are driving slower than the speed of traffic on the highway, you " +
      "must drive in the right lane whenever possible.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - J. Interstate Driving and Limited Access Highways",
    url: MANUAL_URL,
  },
  {
    key: "solid-white",
    quote:
      "Marks the right edge of the road. Also separates lanes where all " +
      "vehicles are going in the same direction, but lane changing is " +
      "discouraged.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - C. Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "speed-15-alley",
    quote: "15 miles per hour in alleys in Baltimore County;",
    source: TA("21-801.1"),
    section: "Title 21, Subtitle 8 - Section 21-801.1 (Maximum lawful speeds)",
    url: gtr("21-801.1"),
  },
  {
    key: "speed-30-business",
    quote:
      "30 miles per hour on: (i) All highways in a business district; and (ii) " +
      "Undivided highways in a residential district;",
    source: TA("21-801.1"),
    section: "Title 21, Subtitle 8 - Section 21-801.1 (Maximum lawful speeds)",
    url: gtr("21-801.1"),
  },
  {
    key: "speed-35-divided-residential",
    quote: "35 miles per hour on divided highways in a residential district;",
    source: TA("21-801.1"),
    section: "Title 21, Subtitle 8 - Section 21-801.1 (Maximum lawful speeds)",
    url: gtr("21-801.1"),
  },
  {
    key: "speed-50-undivided",
    quote: "50 miles per hour on undivided highways in other locations; and",
    source: TA("21-801.1"),
    section: "Title 21, Subtitle 8 - Section 21-801.1 (Maximum lawful speeds)",
    url: gtr("21-801.1"),
  },
  {
    key: "speed-55-divided",
    quote: "55 miles per hour on divided highways in other locations.",
    source: TA("21-801.1"),
    section: "Title 21, Subtitle 8 - Section 21-801.1 (Maximum lawful speeds)",
    url: gtr("21-801.1"),
  },
  {
    key: "speed-adjust",
    quote:
      "You may drive slower than the posted speed limit, based on road " +
      "conditions, but it is illegal to drive any faster than the posted speed " +
      "limit.",
    source: MANUAL,
    section: "Section 3: Basic Driving - C. Understanding Vehicle Speed",
    url: MANUAL_URL,
  },
  {
    key: "speed-max-70",
    quote:
      "a maximum speed limit of more than 70 miles per hour may not be " +
      "established on any highway in the State",
    source: TA("21-801.1"),
    section: "Title 21, Subtitle 8 - Section 21-801.1 (Maximum lawful speeds)",
    url: gtr("21-801.1"),
  },
  {
    key: "speed-posted-max",
    quote:
      "The posted speed limit is the maximum legal speed you can travel on a " +
      "road under ideal (perfect) conditions.",
    source: MANUAL,
    section: "Section 3: Basic Driving - C. Understanding Vehicle Speed",
    url: MANUAL_URL,
  },
  {
    key: "speed-school-zone-15",
    quote:
      "The county may decrease the maximum speed limit to 15 miles per hour " +
      "during school hours",
    source: TA("21-803"),
    section: "Title 21, Subtitle 8 - Section 21-803 (Establishment of speed limits by local authorities)",
    url: gtr("21-803"),
  },
  {
    key: "steady-green",
    quote:
      "Proceed with caution after you have checked first to see that no other " +
      "vehicles are in the intersection.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "steady-red",
    quote:
      "Come to a complete stop at the stop line. If there is no stop line, " +
      "stop before the crosswalk and before entering the intersection. Remain " +
      "stopped as long as the signal is red.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "steady-yellow",
    quote:
      "This means that the signal is changing from green to red. It gives you " +
      "time to stop safely.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "stop-line-def",
    quote:
      "White, solid line that shows where a vehicle must stop for a STOP sign " +
      "or red traffic signal.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - C. Pavement Markings",
    url: MANUAL_URL,
  },
  {
    key: "stop-sign-only-octagon",
    quote: "The stop sign is the only 8-sided sign you will see on the road.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Regulatory Signs)",
    url: MANUAL_URL,
  },
  {
    key: "stop-sign-where",
    quote:
      "You must make a complete stop at the stop line. If there is no stop " +
      "line, stop before entering a crosswalk. If there is no stop line or " +
      "crosswalk, stop before entering the intersection.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Regulatory Signs)",
    url: MANUAL_URL,
  },
  {
    key: "supervising-driver",
    quote:
      "A supervising driver is: At least 21 years old. Currently licensed for " +
      "at least three years in Maryland or another state to drive the same class " +
      "of vehicles that you are driving. Seated beside you, unless the vehicle " +
      "is a motorcycle.",
    source: MANUAL,
    section: "Section 10: Other Important Information - B. Supervising Driver",
    url: MANUAL_URL,
  },
  {
    key: "test-pass-mark",
    quote:
      "You have 20 minutes to complete the test You must score 88% or higher " +
      "to pass",
    source: "MDOT MVA - Knowledge Tests",
    section: "Knowledge Tests FAQ - How does the knowledge test for a noncommercial driver's license work?",
    url: "https://mva.maryland.gov/licenses-ids/prepare-drivers-license-test/knowledge-tests",
  },
  {
    key: "test-questions-25",
    quote: "Class C, Class M, and Moped Permit: 25 questions",
    source: "MDOT MVA - Knowledge Tests",
    section: "Knowledge Tests FAQ - How does the knowledge test for a noncommercial driver's license work?",
    url: "https://mva.maryland.gov/licenses-ids/prepare-drivers-license-test/knowledge-tests",
  },
  {
    key: "traction-def",
    quote:
      "Traction is the grip between your tires and the road that makes it " +
      "possible for your vehicle to start, stop, and change direction.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - D. Driving in Inclement Weather",
    url: MANUAL_URL,
  },
  {
    key: "traffic-stop-hands",
    quote:
      "Keep your hands in plain view - on the steering wheel is best.",
    source: MANUAL,
    section: "Section 8: Crashes and Traffic Stops - C. Traffic Stops",
    url: MANUAL_URL,
  },
  {
    key: "truck-mirrors",
    quote:
      "If you cannot see the driver's face in their side-view mirror, they " +
      "cannot see you.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - C. Large Trucks and Buses",
    url: MANUAL_URL,
  },
  {
    key: "truck-weight",
    quote:
      "Fully loaded trucks can weigh more than 80,000 pounds and take the " +
      "length of a football field to stop.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - C. Large Trucks and Buses",
    url: MANUAL_URL,
  },
  {
    key: "truck-wide-turns",
    quote:
      "Trucks make wide turns at intersections and need more space than cars.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - C. Large Trucks and Buses",
    url: MANUAL_URL,
  },
  {
    key: "turn-signal-before",
    quote:
      "Switch on your turn signal before you get to the turn to let other " +
      "drivers know what you plan to do.",
    source: MANUAL,
    section: "Section 3: Basic Driving - G. Turning",
    url: MANUAL_URL,
  },
  {
    key: "under-21-alcohol",
    quote:
      "If you are not yet 21 years old, it is against the law for you to drink " +
      "any alcohol.",
    source: MANUAL,
    section: "Section 6: Dangerous Driving Behaviors - A. Alcohol, Drugs and Driving",
    url: MANUAL_URL,
  },
  {
    key: "under18-phone",
    quote:
      "If you are under 18 years old, you may not use a cell phone while " +
      "driving, even hands-free. The only exception is that you may use it to " +
      "make a 911 emergency call.",
    source: MANUAL,
    section: "Section 6: Dangerous Driving Behaviors - C. Distracted Driving",
    url: MANUAL_URL,
  },
  {
    key: "uturn-rule",
    quote:
      "If they are, turn on your left turn signal and stop and yield for " +
      "traffic coming toward you. When the way is clear, turn into the outside " +
      "or right-hand lane traveling in the opposite direction.",
    source: MANUAL,
    section: "Section 3: Basic Driving - H. U-turn",
    url: MANUAL_URL,
  },
  {
    key: "visibility-yellow-left",
    quote:
      "Yellow pavement markings should never be on your right side. They " +
      "should always be on your left side.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - A. Driving in Reduced Visibility",
    url: MANUAL_URL,
  },
  {
    key: "wipers-headlights",
    quote:
      "Maryland law requires that you turn on your headlights when using your " +
      "windshield wipers in inclement weather.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - A. Driving in Reduced Visibility",
    url: MANUAL_URL,
  },
  {
    key: "workzone-blue-lights",
    quote: "Flashing blue lights mean the speed cameras are active.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - H. Work Zone Safety",
    url: MANUAL_URL,
  },
  {
    key: "workzone-flashing-lights",
    quote: "Flashing lights in a work zone means there are workers present.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - H. Work Zone Safety",
    url: MANUAL_URL,
  },
  {
    key: "workzone-green-lights",
    quote:
      "Flashing green lights may also be found on highway maintenance vehicles " +
      "or service equipment in and before work zones.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - H. Work Zone Safety",
    url: MANUAL_URL,
  },
  {
    key: "workzone-orange",
    quote: "Orange is the color for work zones.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - H. Work Zone Safety",
    url: MANUAL_URL,
  },
  {
    key: "wrong-exit",
    quote:
      "If you exit at the wrong place, continue until you are off the exit " +
      "ramp. Then look for a way to re-enter the road. Never stop and back up on " +
      "any part of the highway.",
    source: MANUAL,
    section: "Section 5: Driving Situations and Conditions - J. Interstate Driving and Limited Access Highways",
    url: MANUAL_URL,
  },
  {
    key: "yellow-x",
    quote:
      "A steady yellow \"X\" signal means you should move out of the lane as " +
      "soon as you safely can.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - A. Traffic Signals",
    url: MANUAL_URL,
  },
  {
    key: "yield-sign-actions",
    quote:
      "Slow down as you come to a yield sign. Look to the left and the right. " +
      "Yield to pedestrians, bicycles, and vehicles.",
    source: MANUAL,
    section: "Section 4: Signs, Signals and Pavement Markings - B. Traffic Signs (Regulatory Signs)",
    url: MANUAL_URL,
  },
  {
    key: "yield-turning-green",
    quote: "You must yield to pedestrians when turning on a green signal.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - A. Pedestrian Right-of-Way",
    url: MANUAL_URL,
  },
  {
    key: "yield-turning-red",
    quote:
      "You must yield to pedestrians when turning on a red signal is permitted " +
      "after stopping.",
    source: MANUAL,
    section: "Section 7: Sharing the Road - A. Pedestrian Right-of-Way",
    url: MANUAL_URL,
  },
];
