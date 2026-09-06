import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Oregon bank - 387 of them: 351 from the
// Oregon Driver Manual and 36 from the Oregon Revised Statutes.
//
// Sources, and why there are two of them:
//
//  - The Oregon Driver Manual, 2026-2027 edition, form 735-37 (1-26), published
//    by the Oregon Department of Transportation, Driver and Motor Vehicle
//    Services, Salem. This is the book DMV writes the 35-question Class C
//    knowledge test from, and it carries most of what is quoted below. The
//    manual itself says it "condenses and paraphrases selected language in the
//    Oregon Revised Statutes" and "is not a source of law", which is the reason
//    for the second source.
//  - Oregon Revised Statutes chapters 807, 811 and 813, published by the Oregon
//    Legislature at oregonlegislature.gov. The manual runs 112 pages and is
//    unusually complete on parking distances and speed defaults, but it still
//    leaves out numbers a learner is tested on or asked about: it never gives an
//    interstate speed limit ("Speed limits will vary on interstate highways"),
//    never states the provisional licence passenger and midnight-to-5am
//    restrictions that begin the day the licence is issued, never gives the
//    supervising-driver rule in its own words, and never states what a refusal
//    to take a breath test costs. Those come from the statute.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. The same
// four normalisations the sibling banks use were applied to the extracted text
// and to nothing else: curly quotes, en dashes and em dashes fold to ASCII; runs
// of whitespace, including the line breaks the PDF inserts mid-sentence,
// collapse to single spaces; the section symbol is spelled out as "Section"; and
// where a source states a rule as a stem followed by a bulleted list, the items
// run together in the order they appear - no words are changed, dropped or
// reordered. The sources' own wording is preserved as it stands, including the
// statute's lower-case paragraph openings and its "(A)" and "(B)" paragraph
// letters where a quote spans them, because a quote that has been tidied up is
// no longer a quote.
//
// Page numbers in `section` are the manual's own printed page numbers, which run
// eight behind the PDF's page count; the #page= anchors in the URLs are the PDF
// pages, so the link lands on the passage.

const HANDBOOK =
  "Oregon Driver Manual (Oregon DMV, 2026-2027 edition, form 735-37)";
const HANDBOOK_URL = "https://www.oregon.gov/odot/Forms/DMV/37.pdf";
const STATUTES = "Oregon Revised Statutes (Oregon Legislature)";
const ors = (chapter: string) =>
  `https://www.oregonlegislature.gov/bills_laws/ors/ors${chapter}.html`;

export const oregonExcerpts: HandbookExcerpt[] = [
  {
    key: "accelerator-sticks",
    quote:
      "Shift the vehicle to neutral. Use an open palm to avoid " +
      "shifting into another gear.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Vehicle Equipment Failures (page 85)",
    url: HANDBOOK_URL + "#page=93",
  },
  {
    key: "add-lane-sign",
    quote:
      "Add Lane: Two roadways join together. You do not need to " +
      "merge.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 11)",
    url: HANDBOOK_URL + "#page=19",
  },
  {
    key: "advisory-not-limits",
    quote:
      "These are not speed limits, but police may enforce them " +
      "through the basic rule law.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 20)",
    url: HANDBOOK_URL + "#page=28",
  },
  {
    key: "advisory-speed-sign",
    quote:
      "Advisory Speed: Advises the safe speed for freeway ramps and " +
      "curves. This sign may be used with other signs.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 12)",
    url: HANDBOOK_URL + "#page=20",
  },
  {
    key: "animals-horseback",
    quote:
      "Stop your vehicle if a person riding on horseback or leading " +
      "an animal raises a hand or it is obvious the animal is " +
      "frightened, unless stopping would cause a collision. A " +
      "raised hand means the animal is frightened. Do not use your " +
      "horn or make other loud, sudden noises near the animal.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Defensive Driving (page 75)",
    url: HANDBOOK_URL + "#page=83",
  },
  {
    key: "apply-ages",
    quote:
      "Be at least 15 years of age to apply for an instruction " +
      "permit. Be at least 16 years of age to apply for a license.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 89)",
    url: HANDBOOK_URL + "#page=97",
  },
  {
    key: "approaching-stopped-slow-5",
    quote:
      "You may also slow down by at least 5 miles per hour under " +
      "the posted speed limit. Allow the stopped vehicle as much " +
      "room as safely possible.",
    source: HANDBOOK,
    section: "Sharing the Road - Approaching Stopped Vehicles (page 57)",
    url: HANDBOOK_URL + "#page=65",
  },
  {
    key: "approaching-stopped-vehicles",
    quote:
      "If you are on a road with two or more lanes of traffic going " +
      "the same direction and you approach any motor vehicle that " +
      "is stopped with lights flashing, you must change lanes so " +
      "you do not drive next to the stopped vehicle.",
    source: HANDBOOK,
    section: "Sharing the Road - Approaching Stopped Vehicles (page 57)",
    url: HANDBOOK_URL + "#page=65",
  },
  {
    key: "avoiding-collision-three",
    quote:
      "There are three things you can do to avoid or minimize the " +
      "impact of a collision-stopping quickly, turning quickly, and " +
      "speeding up.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Defensive Driving (page 74)",
    url: HANDBOOK_URL + "#page=82",
  },
  {
    key: "backing-up",
    quote:
      "To see as much as possible, turn your body and head to the " +
      "right and look out through the rear window. Check for " +
      "pedestrians and approaching traffic by glancing to either " +
      "side, then back up slowly.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 29)",
    url: HANDBOOK_URL + "#page=37",
  },
  {
    key: "basic-rule",
    quote:
      "The basic rule states you must drive at a speed that is " +
      "reasonable and cautious for existing conditions. The basic " +
      "rule applies on all roads at all times.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 20)",
    url: HANDBOOK_URL + "#page=28",
  },
  {
    key: "basic-rule-not-over-limit",
    quote:
      "The basic rule does not allow you to drive over the speed " +
      "limit.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 21)",
    url: HANDBOOK_URL + "#page=29",
  },
  {
    key: "basic-rule-slower",
    quote:
      "If you drive at a speed that is unsafe for existing " +
      "conditions in any area, at any time, even if it is slower " +
      "than the speed limit, you are violating the basic rule.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 21)",
    url: HANDBOOK_URL + "#page=29",
  },
  {
    key: "being-passed",
    quote:
      "When another driver starts to pass, stay to the right. You " +
      "can help the other driver pass you safely by checking " +
      "oncoming traffic and adjusting your speed to let the vehicle " +
      "move back into the right lane as soon as possible.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 33)",
    url: HANDBOOK_URL + "#page=41",
  },
  {
    key: "bike-box",
    quote:
      "As a driver, you must stop for a traffic signal behind the " +
      "bike box. Do not stop in the box. People riding bicycles " +
      "will move into the box in front of you at the intersection.",
    source: HANDBOOK,
    section: "Sharing the Road - Bicycles (page 51)",
    url: HANDBOOK_URL + "#page=59",
  },
  {
    key: "bike-box-no-right-on-red",
    quote:
      "No right turns are allowed at these intersections when the " +
      "traffic signal is red. If turning right on a green light, " +
      "you must signal and yield to people riding bicycles on the " +
      "right.",
    source: HANDBOOK,
    section: "Sharing the Road - Bicycles (page 51)",
    url: HANDBOOK_URL + "#page=59",
  },
  {
    key: "bike-lane-marking",
    quote:
      "Bike lane: Identified by a wide white line with a bicycle " +
      "symbol or a bike lane sign. Bike lanes may be painted green.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 25)",
    url: HANDBOOK_URL + "#page=33",
  },
  {
    key: "bike-lane-no-drive",
    quote:
      "Do not drive or park in a bike lane. You may cross a bike " +
      "lane when turning or when entering or leaving an alley, " +
      "driveway, or private road.",
    source: HANDBOOK,
    section: "Sharing the Road - Bicycles (page 50)",
    url: HANDBOOK_URL + "#page=58",
  },
  {
    key: "bike-lane-not-for-turn-prep",
    quote:
      "Do not move into or travel in a bike lane in preparation for " +
      "a turn.",
    source: HANDBOOK,
    section: "Sharing the Road - Bicycles (page 50)",
    url: HANDBOOK_URL + "#page=58",
  },
  {
    key: "bike-pass-over-35",
    quote:
      "At speeds greater than 35 mph, you may only pass a person on " +
      "a bicycle traveling in your lane if you leave enough " +
      "distance to prevent contact with the person riding a bicycle " +
      "if they were to fall.",
    source: HANDBOOK,
    section: "Sharing the Road - Bicycles (page 50)",
    url: HANDBOOK_URL + "#page=58",
  },
  {
    key: "bike-pass-same-rules",
    quote:
      "The same rules for passing other vehicles apply to passing " +
      "people riding bicycles. If you cannot pass safely, you must " +
      "slow down and remain behind the bicycle until it is safe to " +
      "pass.",
    source: HANDBOOK,
    section: "Sharing the Road - Bicycles (page 51)",
    url: HANDBOOK_URL + "#page=59",
  },
  {
    key: "bikes-hidden-blind-spot",
    quote:
      "People riding bicycles are more difficult to see than other " +
      "vehicles. They can be hidden in your blind spot and easily " +
      "missed.",
    source: HANDBOOK,
    section: "Sharing the Road - Bicycles (page 50)",
    url: HANDBOOK_URL + "#page=58",
  },
  {
    key: "blind-spot",
    quote:
      "Your \"blind spot\" is the area around your vehicle that you " +
      "cannot see from the driver's seat even with the use of your " +
      "mirrors. Avoid driving in another driver's blind spot, if " +
      "possible.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 30)",
    url: HANDBOOK_URL + "#page=38",
  },
  {
    key: "blowout",
    quote:
      "If a front tire blows, steering will be difficult and there " +
      "may be a strong pull to the side. A rear blowout causes the " +
      "back of the vehicle to weave or sway.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Vehicle Equipment Failures (page 84)",
    url: HANDBOOK_URL + "#page=92",
  },
  {
    key: "blowout-actions",
    quote:
      "Grip the steering wheel firmly. Slow down gradually. Pull " +
      "off the road.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Vehicle Equipment Failures (page 84)",
    url: HANDBOOK_URL + "#page=92",
  },
  {
    key: "brakes-fail",
    quote:
      "Pump the brakes. This may build up enough pressure to get " +
      "them working again. Shift to a lower gear so the engine can " +
      "help slow you down. Slowly apply the parking brake. Use your " +
      "horn or lights to warn others that you are out of control. " +
      "Once you have slowed, ease onto the shoulder.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Vehicle Equipment Failures (page 85)",
    url: HANDBOOK_URL + "#page=93",
  },
  {
    key: "bridges-freeze-first",
    quote:
      "A bridge or shaded area freezes first and may be icy when " +
      "the rest of the road is free of ice.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 78)",
    url: HANDBOOK_URL + "#page=86",
  },
  {
    key: "broken-white-line",
    quote:
      "Broken white line: Separates lanes of traffic going in the " +
      "same direction. Crossing a broken white line is permitted " +
      "with caution.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 24)",
    url: HANDBOOK_URL + "#page=32",
  },
  {
    key: "broken-yellow-center",
    quote:
      "Broken yellow center line: Indicates a two-way road used for " +
      "traffic traveling in opposite directions. Passing is allowed " +
      "for both directions of travel.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 22)",
    url: HANDBOOK_URL + "#page=30",
  },
  {
    key: "brown-signs",
    quote:
      "These brown signs point to historic and cultural locations. " +
      "They also point to scenic areas, picnic grounds, and parks.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 13)",
    url: HANDBOOK_URL + "#page=21",
  },
  {
    key: "bus-amber-lights",
    quote:
      "Flashing amber lights warn traffic that the bus is about to " +
      "stop on the road to load or unload children. Prepare to " +
      "stop. When the red lights flash, stop before reaching the " +
      "bus and remain stopped until the driver turns off the " +
      "flashing red lights.",
    source: HANDBOOK,
    section: "Sharing the Road - School, Places of Worship or Worker and Public Transit Buses (page 55)",
    url: HANDBOOK_URL + "#page=63",
  },
  {
    key: "bus-divided-highway",
    quote:
      "If you are on a divided highway with two roads separated by " +
      "an unpaved median strip or barrier, you must stop only if " +
      "you are on the same side of the road as the bus.",
    source: HANDBOOK,
    section: "Sharing the Road - School, Places of Worship or Worker and Public Transit Buses (page 55)",
    url: HANDBOOK_URL + "#page=63",
  },
  {
    key: "bus-painted-median",
    quote:
      "A painted median strip or turn lane does not create two " +
      "separate roads. In this case, all lanes of traffic must " +
      "stop.",
    source: HANDBOOK,
    section: "Sharing the Road - School, Places of Worship or Worker and Public Transit Buses (page 55)",
    url: HANDBOOK_URL + "#page=63",
  },
  {
    key: "cell-phone-over-18",
    quote:
      "Drivers 18 years of age or older must use a hands-free " +
      "accessory to use a cell phone or other mobile electronic " +
      "device. The hands-free accessory must only require minimal " +
      "use of a finger to activate or deactivate the device.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 80)",
    url: HANDBOOK_URL + "#page=88",
  },
  {
    key: "cell-phone-under-18",
    quote:
      "It is illegal for drivers under 18 years of age to use a " +
      "cell phone or other mobile electronic device while operating " +
      "a vehicle. Turn it off or put it in the back seat and ignore " +
      "it.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 80)",
    url: HANDBOOK_URL + "#page=88",
  },
  {
    key: "center-lane-turn-only-sign",
    quote:
      "Center Lane Turn Only: Share the center lane for left turns " +
      "from both directions.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 9)",
    url: HANDBOOK_URL + "#page=17",
  },
  {
    key: "chains-definition",
    quote:
      "\"Chains\" include link chains, cable chains or any other " +
      "device that attaches to the wheel, vehicle, or outside of " +
      "the tire, specifically designed to increase traction on snow " +
      "and ice.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 79)",
    url: HANDBOOK_URL + "#page=87",
  },
  {
    key: "change-lanes-safely",
    quote:
      "Change lanes only when you can do so safely. Avoid frequent " +
      "lane changes.",
    source: HANDBOOK,
    section: "Lane Travel (page 18)",
    url: HANDBOOK_URL + "#page=26",
  },
  {
    key: "changing-lanes-shoulder",
    quote:
      "Glance over your left shoulder if you are moving left. " +
      "Glance over your right shoulder if you are moving right so " +
      "you can see if there are any vehicles.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 30)",
    url: HANDBOOK_URL + "#page=38",
  },
  {
    key: "chevron-sign",
    quote:
      "Chevron: A sharp curve or change in the direction of the " +
      "road is at the sign.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 10)",
    url: HANDBOOK_URL + "#page=18",
  },
  {
    key: "child-seats",
    quote:
      "Child passengers must be restrained in approved child safety " +
      "seats until they are 8 years of age or at least 4 feet 9 " +
      "inches in height, and the adult lap and shoulder belt fits " +
      "them correctly. Infants must ride rear-facing until they " +
      "reach two years of age.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Defensive Driving (page 74)",
    url: HANDBOOK_URL + "#page=82",
  },
  {
    key: "children-at-play",
    quote:
      "Be extra careful in residential areas and places where " +
      "children are likely to be, such as a park. Do not drive too " +
      "close to parked cars that may block your view. Be watchful " +
      "when backing in or out of a driveway. Children are " +
      "unpredictable and may run or be playing behind your vehicle.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 48)",
    url: HANDBOOK_URL + "#page=56",
  },
  {
    key: "children-present-definition",
    quote:
      "Children are present means: children are waiting at a " +
      "crosswalk. children are occupying or walking within a " +
      "crosswalk. a traffic patrol member is present to assist " +
      "children at a crosswalk.",
    source: HANDBOOK,
    section: "Sharing the Road - School Zones (page 49)",
    url: HANDBOOK_URL + "#page=57",
  },
  {
    key: "collision-assistance",
    quote:
      "Give reasonable assistance to injured persons. Injured " +
      "people should never be moved carelessly.",
    source: HANDBOOK,
    section: "Other Important Information - Traffic Collisions (page 93)",
    url: HANDBOOK_URL + "#page=101",
  },
  {
    key: "collision-exchange",
    quote:
      "Exchange information. Provide your name, address, driver " +
      "license number, license plate number of your vehicle, and " +
      "your insurance information to the other driver, passengers, " +
      "or any injured pedestrian involved. If a person is killed or " +
      "unconscious, remain at the scene of the collision until " +
      "police arrive.",
    source: HANDBOOK,
    section: "Other Important Information - Traffic Collisions (page 94)",
    url: HANDBOOK_URL + "#page=102",
  },
  {
    key: "collision-report-72-hours",
    quote:
      "File a collision report within 72 hours, Form 735-32, if: » " +
      "Damage to the vehicle you were driving is over $2,500;",
    source: HANDBOOK,
    section: "Other Important Information - Traffic Collisions (page 94)",
    url: HANDBOOK_URL + "#page=102",
  },
  {
    key: "collision-report-injury",
    quote:
      "There is injury or death resulting from the collision; » You " +
      "are the owner of a vehicle involved in a reportable " +
      "collision and the driver fails to report the collision.",
    source: HANDBOOK,
    section: "Other Important Information - Traffic Collisions (page 94)",
    url: HANDBOOK_URL + "#page=102",
  },
  {
    key: "collision-stop",
    quote:
      "Stop. If there are no injuries and vehicles can be safely " +
      "moved, move them out of travel lanes as soon as possible. " +
      "Information can be exchanged away from the scene of the " +
      "collision.",
    source: HANDBOOK,
    section: "Other Important Information - Traffic Collisions (page 93)",
    url: HANDBOOK_URL + "#page=101",
  },
  {
    key: "communicating-with-drivers",
    quote:
      "You can let other drivers know what you plan to do or where " +
      "you are by: Signaling before changing direction or lanes. " +
      "Using your brake lights to indicate you are slowing or " +
      "stopping. Turning on your headlights. Using your horn as a " +
      "reasonable warning. Using your hazard lights when needed.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Defensive Driving (page 74)",
    url: HANDBOOK_URL + "#page=82",
  },
  {
    key: "cross-center-exception",
    quote:
      "You may cross the center line in a no-passing zone only if " +
      "the right side of the road is blocked or if you are turning " +
      "left.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 32)",
    url: HANDBOOK_URL + "#page=40",
  },
  {
    key: "crossroad-sign",
    quote:
      "Crossroad: A four-way intersection is ahead. Crosstraffic " +
      "may enter the road.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 11)",
    url: HANDBOOK_URL + "#page=19",
  },
  {
    key: "curves",
    quote:
      "Slow down before you enter a curve. Use the speed shown " +
      "below a curve sign as a guide, if posted. Look through the " +
      "curve to where you want to go and then check the lane " +
      "position of approaching vehicles. Stay to the right of the " +
      "center line and in the middle of your lane.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 30)",
    url: HANDBOOK_URL + "#page=38",
  },
  {
    key: "curves-hidden-hazards",
    quote:
      "Be alert for people riding bicycles, pedestrians, or " +
      "slow-moving vehicles hidden around the curve. As you come " +
      "out of a curve, increase your speed gradually.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 30)",
    url: HANDBOOK_URL + "#page=38",
  },
  {
    key: "dark-signal",
    quote:
      "If a signal appears dark, such as during a power failure, " +
      "you should stop as if there are stop signs in all " +
      "directions.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Traffic Signals (page 15)",
    url: HANDBOOK_URL + "#page=23",
  },
  {
    key: "deer-sign",
    quote:
      "Deer: Deer often cross the road in this area. Be alert. Slow " +
      "down if you see deer or other wildlife.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 12)",
    url: HANDBOOK_URL + "#page=20",
  },
  {
    key: "defensive-at-intersections",
    quote:
      "A defensive driver never assumes a stop sign or a traffic " +
      "signal will stop approaching traffic.",
    source: HANDBOOK,
    section: "Turns & Intersections - Intersections (page 42)",
    url: HANDBOOK_URL + "#page=50",
  },
  {
    key: "defensive-driving-view",
    quote:
      "You must be able to see what is to the front, sides, and " +
      "rear of your vehicle. Do not load or equip your vehicle in " +
      "any way that blocks what you can see. Placing stickers or " +
      "other objects on your vehicle's windows can limit your view " +
      "of the road.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Defensive Driving (page 73)",
    url: HANDBOOK_URL + "#page=81",
  },
  {
    key: "dim-high-beams",
    quote:
      "If using your high beams, you must dim your lights when an " +
      "oncoming vehicle is within 500 feet. Dim your lights when " +
      "following another vehicle within 350 feet.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 76)",
    url: HANDBOOK_URL + "#page=84",
  },
  {
    key: "disabled-parking",
    quote:
      "It is illegal to park in a space marked for persons with " +
      "disabilities unless you have a valid disabled parking " +
      "permit.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 69)",
    url: HANDBOOK_URL + "#page=77",
  },
  {
    key: "disabled-parking-fine",
    quote:
      "Fines begin at $165 and go up to $1,000 if you are not a " +
      "Disabled Person Parking Permit holder. This includes parking " +
      "even for \"just a few minutes\".",
    source: HANDBOOK,
    section: "Parking & Stopping (page 70)",
    url: HANDBOOK_URL + "#page=78",
  },
  {
    key: "divided-highway-sign",
    quote:
      "Divided Highway Begins or Ends: These signs indicate the " +
      "beginning or end of a divided highway. Keep to the right.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 11)",
    url: HANDBOOK_URL + "#page=19",
  },
  {
    key: "do-not-enter-sign",
    quote:
      "Do Not Enter - Square: This sign warns you not to enter a " +
      "road or freeway. You will see this sign if you are going the " +
      "wrong way.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 7)",
    url: HANDBOOK_URL + "#page=15",
  },
  {
    key: "do-not-pass-sign",
    quote: "Do Not Pass: This sign indicates that you may not pass.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 9)",
    url: HANDBOOK_URL + "#page=17",
  },
  {
    key: "dog-in-pickup-bed",
    quote:
      "You cannot carry a dog on an external part of a vehicle, " +
      "including a pickup bed, unless the dog is protected by a " +
      "framework, carrier, or other device to keep it from falling " +
      "from the vehicle.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 84)",
    url: HANDBOOK_URL + "#page=92",
  },
  {
    key: "dont-block-crosswalk",
    quote:
      "Do not stop with any portion of your vehicle overhanging the " +
      "crosswalk area. Blocking a crosswalk forces pedestrians to " +
      "go around your vehicle and puts them in a dangerous " +
      "situation.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 47)",
    url: HANDBOOK_URL + "#page=55",
  },
  {
    key: "dont-block-intersection",
    quote:
      "Even if you have a green light, do not enter an intersection " +
      "unless there is room for your vehicle on the other side.",
    source: HANDBOOK,
    section: "Turns & Intersections - Intersections (page 42)",
    url: HANDBOOK_URL + "#page=50",
  },
  {
    key: "dont-rely-on-signals",
    quote:
      "Do not rely solely on the turn signal of another driver. The " +
      "driver may signal to turn right and instead turn left, or " +
      "may turn without signaling.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turn Signals (page 38)",
    url: HANDBOOK_URL + "#page=46",
  },
  {
    key: "dotted-white-exit",
    quote:
      "When used prior to an exit ramp or intersection, it informs " +
      "you that the lane you are traveling in will not continue on " +
      "the same route, such as a right-turn only lane or an exit " +
      "only lane on the freeway.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 24)",
    url: HANDBOOK_URL + "#page=32",
  },
  {
    key: "dotted-white-line",
    quote:
      "Dotted white line: Short dotted lines placed closer together " +
      "than a broken line. Crossing a dotted line is permitted with " +
      "caution.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 24)",
    url: HANDBOOK_URL + "#page=32",
  },
  {
    key: "double-center-line",
    quote:
      "A broken yellow line on your side of the lane indicates you " +
      "are allowed to pass. A solid yellow line on your side of the " +
      "lane indicates you are not allowed to pass.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 22)",
    url: HANDBOOK_URL + "#page=30",
  },
  {
    key: "double-solid-white",
    quote:
      "Double solid white line: Usually accompanied by a sign " +
      "prohibiting lane changes for a certain distance. Means you " +
      "are not allowed to change lanes. Stay in your lane.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 24)",
    url: HANDBOOK_URL + "#page=32",
  },
  {
    key: "double-solid-yellow",
    quote:
      "Double solid yellow line: Indicates passing is not allowed " +
      "for both directions of traffic. You may turn left, to enter " +
      "or exit a roadway, across double solid yellow lines after " +
      "waiting for oncoming traffic to clear.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 22)",
    url: HANDBOOK_URL + "#page=30",
  },
  {
    key: "drive-right-exceptions",
    quote:
      "Drive on the right side of the road except when: Passing " +
      "another vehicle going in the same direction as you. Driving " +
      "to the left of center to pass an obstruction. A road is " +
      "marked for one-way traffic.",
    source: HANDBOOK,
    section: "Lane Travel (page 18)",
    url: HANDBOOK_URL + "#page=26",
  },
  {
    key: "drive-right-three-lane",
    quote:
      "A road has three marked lanes and the center lane is a " +
      "passing lane. Directed by emergency personnel or other " +
      "persons directing traffic.",
    source: HANDBOOK,
    section: "Lane Travel (page 18)",
    url: HANDBOOK_URL + "#page=26",
  },
  {
    key: "drive-test-waiver",
    quote:
      "DMV may waive the drive test if: You are a new resident " +
      "surrendering an out-of-state license that is valid or " +
      "expired less than one year. DMV receives proof you completed " +
      "an ODOT-Approved Driver Education Course within the past two " +
      "years.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 3)",
    url: HANDBOOK_URL + "#page=11",
  },
  {
    key: "driving-off-road",
    quote:
      "Don't panic or brake hard. Slow down until you can get back " +
      "on the road safely. Grip the steering wheel firmly and keep " +
      "your vehicle on a straight course. Turn the front wheels " +
      "just enough to get you back on the road. Do not turn sharply " +
      "or you might go across the road into oncoming traffic.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Defensive Driving (page 75)",
    url: HANDBOOK_URL + "#page=83",
  },
  {
    key: "drowsy-driving-signs",
    quote:
      "A lot of yawning, head nodding, heavy eyelids, blurred " +
      "vision and not staying in your lane while driving can mean " +
      "you may be falling asleep at the wheel.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 81)",
    url: HANDBOOK_URL + "#page=89",
  },
  {
    key: "duii-any-substance",
    quote:
      "Oregon's DUII law applies to any substance that impairs your " +
      "mental or physical ability to drive.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 83)",
    url: HANDBOOK_URL + "#page=91",
  },
  {
    key: "emergency-500-feet",
    quote:
      "After the emergency vehicle passes, you must stay at least " +
      "500 feet behind the vehicle.",
    source: HANDBOOK,
    section: "Sharing the Road - Emergency Vehicles (page 58)",
    url: HANDBOOK_URL + "#page=66",
  },
  {
    key: "emergency-parking-200-feet",
    quote:
      "If your vehicle cannot be seen from 200 feet in each " +
      "direction, you need to warn approaching traffic. This can be " +
      "done with flags, flares, signs, signals or flaggers placed " +
      "at least 200 feet from your vehicle in each direction.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 71)",
    url: HANDBOOK_URL + "#page=79",
  },
  {
    key: "emergency-pull-right",
    quote:
      "When you see or hear an emergency vehicle warning, you must " +
      "immediately drive as close as you safely can to the right " +
      "side of the road and stop. Do not stop in an intersection. " +
      "Do not drive or stop in a way that interferes with these " +
      "vehicles.",
    source: HANDBOOK,
    section: "Sharing the Road - Emergency Vehicles (page 58)",
    url: HANDBOOK_URL + "#page=66",
  },
  {
    key: "emergency-scene-hoses",
    quote:
      "When you approach emergency scenes, slow down and be " +
      "prepared to stop. Do not drive over fire hoses unless told " +
      "to do so by officials at the scene.",
    source: HANDBOOK,
    section: "Sharing the Road - Approaching Stopped Vehicles (page 57)",
    url: HANDBOOK_URL + "#page=65",
  },
  {
    key: "emergency-stay-stopped",
    quote:
      "Stay stopped until the emergency vehicle has passed or until " +
      "an officer tells you to move.",
    source: HANDBOOK,
    section: "Sharing the Road - Emergency Vehicles (page 58)",
    url: HANDBOOK_URL + "#page=66",
  },
  {
    key: "external-passengers",
    quote:
      "Oregon law prohibits anyone under 18 years of age from " +
      "riding on the hood, fender, running board, or other external " +
      "part of a vehicle, including a pickup bed.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 84)",
    url: HANDBOOK_URL + "#page=92",
  },
  {
    key: "flashing-red-signal",
    quote:
      "Flashing Red or Dark Signal: A flashing red or a dark signal " +
      "is treated the same as a stop sign.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Traffic Signals (page 15)",
    url: HANDBOOK_URL + "#page=23",
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "Flashing Yellow Arrow: A flashing yellow arrow means that " +
      "you may make the movement indicated by the arrow, but first " +
      "you must yield to pedestrians and oncoming traffic. Oncoming " +
      "traffic has a steady green signal.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Traffic Signals (page 16)",
    url: HANDBOOK_URL + "#page=24",
  },
  {
    key: "flashing-yellow-signal",
    quote:
      "Flashing Yellow: A flashing yellow signal means slow down " +
      "and proceed with caution.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Traffic Signals (page 16)",
    url: HANDBOOK_URL + "#page=24",
  },
  {
    key: "flooded-areas",
    quote:
      "Do not drive through flooded areas. High water may cause " +
      "loss of control or engine stalling.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 78)",
    url: HANDBOOK_URL + "#page=86",
  },
  {
    key: "fog-lights-off",
    quote:
      "When you are required to dim your headlights, other " +
      "auxiliary lights such as fog lights, must be off. These " +
      "extra lights make it difficult for oncoming drivers to see.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 76)",
    url: HANDBOOK_URL + "#page=84",
  },
  {
    key: "fog-low-beam",
    quote:
      "If you drive into fog, dust, smoke, or any area of low " +
      "visibility, use headlights on low beam. Light from high " +
      "beams will reflect back, causing glare, making it more " +
      "difficult to see ahead.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 77)",
    url: HANDBOOK_URL + "#page=85",
  },
  {
    key: "following-2-4-seconds",
    quote:
      "A safe following distance is defined as 2-4 seconds. For " +
      "speeds greater than 30 mph, a safe following distance should " +
      "be 4 seconds or more to allow you time to make a decision " +
      "and take action.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 26)",
    url: HANDBOOK_URL + "#page=34",
  },
  {
    key: "following-count-method",
    quote:
      "Watch for when the rear of the vehicle ahead passes " +
      "something like a sign or pole. Count the seconds it takes " +
      "you to reach the same spot. You are following too closely if " +
      "you pass the mark before you finish counting at least two " +
      "seconds.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 27)",
    url: HANDBOOK_URL + "#page=35",
  },
  {
    key: "four-way-stop-courtesy",
    quote:
      "At intersections with stop signs in all four directions, it " +
      "is common courtesy to allow the driver who stops first to go " +
      "first. When in doubt, yield to the driver on your right. " +
      "Never assume another driver will yield the right of way to " +
      "you.",
    source: HANDBOOK,
    section: "Turns & Intersections - Intersections (page 42)",
    url: HANDBOOK_URL + "#page=50",
  },
  {
    key: "freeway-entering",
    quote:
      "Use the freeway on-ramp to speed up and merge with " +
      "fast-moving traffic already on the road.",
    source: HANDBOOK,
    section: "Lane Travel - Freeway Driving (page 34)",
    url: HANDBOOK_URL + "#page=42",
  },
  {
    key: "freeway-flow-of-traffic",
    quote:
      "Try to keep pace with traffic on the road, but do not be " +
      "lured into exceeding the posted speed to stay with the flow " +
      "of traffic. If you drive at a speed below the flow of " +
      "traffic, you must use the right lane.",
    source: HANDBOOK,
    section: "Lane Travel - Freeway Driving (page 34)",
    url: HANDBOOK_URL + "#page=42",
  },
  {
    key: "freeway-steady-speed",
    quote:
      "Drive at a steady speed; you will have less need to change " +
      "lanes. Weaving through traffic increases the risk of a " +
      "collision and seldom saves time.",
    source: HANDBOOK,
    section: "Lane Travel - Freeway Driving (page 34)",
    url: HANDBOOK_URL + "#page=42",
  },
  {
    key: "freeway-vehicle-trouble",
    quote:
      "If you have vehicle trouble on a freeway, move to the right " +
      "shoulder or emergency stopping area. Turn on your hazard " +
      "lights to warn other drivers. If possible, it is better to " +
      "stay in or near your vehicle on the side away from traffic. " +
      "Walking along a freeway is dangerous.",
    source: HANDBOOK,
    section: "Lane Travel - Freeway Driving (page 35)",
    url: HANDBOOK_URL + "#page=43",
  },
  {
    key: "freeway-yield-merge",
    quote:
      "You must yield to traffic already on the freeway. Use your " +
      "mirrors and check your blind spots before merging. Adjust " +
      "your speed to match traffic already on the freeway. Keep " +
      "moving if at all possible. Drivers behind you expect you to " +
      "speed up rather than slow down.",
    source: HANDBOOK,
    section: "Lane Travel - Freeway Driving (page 34)",
    url: HANDBOOK_URL + "#page=42",
  },
  {
    key: "funeral-no-joining",
    quote:
      "If you are not a member of the funeral procession, it is " +
      "against the law for you to join or drive between vehicles in " +
      "the procession.",
    source: HANDBOOK,
    section: "Sharing the Road - Other Vehicles (page 57)",
    url: HANDBOOK_URL + "#page=65",
  },
  {
    key: "funeral-procession",
    quote:
      "Vehicles in a funeral procession may enter an intersection " +
      "without stopping and do not have to obey traffic control " +
      "devices. Other vehicles must yield right of way to funeral " +
      "processions.",
    source: HANDBOOK,
    section: "Sharing the Road - Other Vehicles (page 57)",
    url: HANDBOOK_URL + "#page=65",
  },
  {
    key: "green-arrow",
    quote:
      "Green Arrow: A steady green arrow means you have the right " +
      "of way and may make the movement indicated by the arrow.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Traffic Signals (page 16)",
    url: HANDBOOK_URL + "#page=24",
  },
  {
    key: "guide-signs-green",
    quote:
      "Guide or information signs are green. They give exit " +
      "information or show the direction of roads or cities.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 13)",
    url: HANDBOOK_URL + "#page=21",
  },
  {
    key: "half-road-no-center-line",
    quote:
      "When a road has no center line and traffic moves in opposite " +
      "directions, drivers must give at least half the road to " +
      "oncoming traffic.",
    source: HANDBOOK,
    section: "Lane Travel (page 18)",
    url: HANDBOOK_URL + "#page=26",
  },
  {
    key: "hand-signals-1000-feet",
    quote:
      "Only use hand-and-arm signals in daylight and when you can " +
      "clearly see people and vehicles at a distance of 1,000 feet. " +
      "You must use turn signal lights at night or when visibility " +
      "is poor. Hand-and-arm signals should not be used any time " +
      "you are driving a wide or long vehicle.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turn Signals (page 38)",
    url: HANDBOOK_URL + "#page=46",
  },
  {
    key: "headlights-out",
    quote:
      "Turn the headlight switch off and on. Try other lights such " +
      "as high beams, driving lights or hazard lights. This may " +
      "give you enough light to guide you off the road. Slow down " +
      "and ease onto the shoulder.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Vehicle Equipment Failures (page 85)",
    url: HANDBOOK_URL + "#page=93",
  },
  {
    key: "headlights-sunset-sunrise",
    quote:
      "Headlights must be turned on from sunset to sunrise. Lights " +
      "also must be on at any time conditions make it difficult to " +
      "see people or vehicles 1,000 feet ahead.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 76)",
    url: HANDBOOK_URL + "#page=84",
  },
  {
    key: "hov-sign",
    quote:
      "High Occupancy Vehicle: This lane is reserved for vehicles " +
      "carrying at least two or more persons, as noted on the sign. " +
      "A white diamond may be painted on the lane.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 9)",
    url: HANDBOOK_URL + "#page=17",
  },
  {
    key: "hydroplane",
    quote:
      "Vehicle tires sometimes hydroplane (skim or float) over a " +
      "wet road surface. The ability to steer and stop can be " +
      "reduced or lost. Slow down when roads are wet.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 78)",
    url: HANDBOOK_URL + "#page=86",
  },
  {
    key: "impaired-bac-008",
    quote:
      "If your blood alcohol concentration is 0.08% or more, Oregon " +
      "law presumes you are impaired, but you can still be arrested " +
      "even if your BAC is lower than 0.08%.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 82)",
    url: HANDBOOK_URL + "#page=90",
  },
  {
    key: "implied-consent",
    quote:
      "Oregon's Implied Consent law means that by driving a motor " +
      "vehicle, you have agreed that you will take a breath, blood, " +
      "or urine test when asked by a police officer. If you refuse " +
      "to take a test, you may receive a fine, and/or your driving " +
      "privileges could be suspended.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 83)",
    url: HANDBOOK_URL + "#page=91",
  },
  {
    key: "in-street-ped-sign",
    quote:
      "In-Street Pedestrian Crossing: This sign may appear at a " +
      "crosswalk. Stop when a pedestrian is in the crosswalk.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 10)",
    url: HANDBOOK_URL + "#page=18",
  },
  {
    key: "increase-following-bikes",
    quote:
      "When following people riding bicycles or motorcycles. You " +
      "need extra room in case the rider loses control or stops " +
      "suddenly.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 27)",
    url: HANDBOOK_URL + "#page=35",
  },
  {
    key: "increase-following-hill",
    quote:
      "When stopped on a hill. The vehicle ahead may roll back when " +
      "it starts to move.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 28)",
    url: HANDBOOK_URL + "#page=36",
  },
  {
    key: "increase-following-wet",
    quote:
      "On wet or slippery roads. You need more distance to stop " +
      "your vehicle.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 27)",
    url: HANDBOOK_URL + "#page=35",
  },
  {
    key: "injured-animal",
    quote:
      "If you hit and injure a domestic animal, stop and make a " +
      "reasonable effort to check injuries. What you can do may " +
      "depend on traffic hazards or the animal's behavior. " +
      "Immediately report the injury to the animal's owner. If you " +
      "are unable to locate the owner you must report the incident " +
      "to local law enforcement.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Defensive Driving (page 75)",
    url: HANDBOOK_URL + "#page=83",
  },
  {
    key: "insurance-minimums",
    quote:
      "Bodily Injury and Property Damage: $25,000 per collision for " +
      "one person; $50,000 per collision for bodily injury to or " +
      "death of two or more persons; and $20,000 per collision for " +
      "damage to the property of others.",
    source: HANDBOOK,
    section: "Other Important Information - Mandatory Insurance (page 93)",
    url: HANDBOOK_URL + "#page=101",
  },
  {
    key: "interstate-speed-vary",
    quote:
      "Interstate Speed Limits Speed limits will vary on interstate " +
      "highways.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 19)",
    url: HANDBOOK_URL + "#page=27",
  },
  {
    key: "keep-right-sign",
    quote:
      "Keep Right: A traffic island, median or obstruction divides " +
      "the road ahead. Keep to the right.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 9)",
    url: HANDBOOK_URL + "#page=17",
  },
  {
    key: "knowledge-test-35",
    quote:
      "You must answer 28 questions correctly to receive a passing " +
      "score.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 2)",
    url: HANDBOOK_URL + "#page=10",
  },
  {
    key: "knowledge-test-content",
    quote:
      "The test includes questions about road signs, traffic laws, " +
      "and other information a driver needs to know.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 2)",
    url: HANDBOOK_URL + "#page=10",
  },
  {
    key: "lane-reduction-sign",
    quote:
      "Lane Reduction: The indicated lane ends soon. Vehicles in " +
      "that lane must merge into the through lane.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 11)",
    url: HANDBOOK_URL + "#page=19",
  },
  {
    key: "large-vehicle-backing",
    quote:
      "Backing: When a large vehicle is backing, it may need to " +
      "block the street to maneuver. Never cross behind a large " +
      "vehicle that is preparing to back up or is in the process of " +
      "backing.",
    source: HANDBOOK,
    section: "Sharing the Road - Large Vehicles (page 54)",
    url: HANDBOOK_URL + "#page=62",
  },
  {
    key: "large-vehicle-crowd",
    quote:
      "When you see a large vehicle making a turn, do not crowd the " +
      "intersection; allow it to complete the turn.",
    source: HANDBOOK,
    section: "Sharing the Road - Large Vehicles (page 53)",
    url: HANDBOOK_URL + "#page=61",
  },
  {
    key: "large-vehicle-passing",
    quote:
      "Unsafe passing: It takes longer to pass a large vehicle. " +
      "Complete your pass as quickly as possible and don't stay " +
      "alongside the vehicle. It is dangerous to stay in a blind " +
      "spot too long because the driver doesn't know you're there.",
    source: HANDBOOK,
    section: "Sharing the Road - Large Vehicles (page 53)",
    url: HANDBOOK_URL + "#page=61",
  },
  {
    key: "large-vehicle-pull-in",
    quote:
      "Look for the entire front of the vehicle in your rearview " +
      "mirror before pulling in front.",
    source: HANDBOOK,
    section: "Sharing the Road - Large Vehicles (page 53)",
    url: HANDBOOK_URL + "#page=61",
  },
  {
    key: "large-vehicle-rear-blind",
    quote:
      "Rear blind spot: Large vehicles have a deep blind spot " +
      "directly behind them where the driver cannot see your " +
      "vehicle. You also severely reduce your own view when " +
      "following too closely. Do not pull up too close behind a " +
      "stopped large vehicle as it may roll back slightly when " +
      "starting forward.",
    source: HANDBOOK,
    section: "Sharing the Road - Large Vehicles (page 53)",
    url: HANDBOOK_URL + "#page=61",
  },
  {
    key: "large-vehicle-side-blind",
    quote:
      "Side blind spots: Large vehicles have larger blind spots on " +
      "both sides of their vehicles than smaller vehicles. If you " +
      "can't see the driver in the side mirror of the large " +
      "vehicle, the driver can't see you.",
    source: HANDBOOK,
    section: "Sharing the Road - Large Vehicles (page 53)",
    url: HANDBOOK_URL + "#page=61",
  },
  {
    key: "large-vehicle-stopping",
    quote:
      "These vehicles take about three times the distance to stop " +
      "than smaller vehicles traveling at the same speed.",
    source: HANDBOOK,
    section: "Sharing the Road - Large Vehicles (page 53)",
    url: HANDBOOK_URL + "#page=61",
  },
  {
    key: "large-vehicle-turns",
    quote:
      "Do not cut in between a large vehicle and the curb or " +
      "shoulder. Large vehicles may need to swing wide and use more " +
      "than one lane to start or finish a turn.",
    source: HANDBOOK,
    section: "Sharing the Road - Large Vehicles (page 53)",
    url: HANDBOOK_URL + "#page=61",
  },
  {
    key: "leaving-freeway",
    quote:
      "When you leave a freeway, turn on your signal well ahead of " +
      "time. Maintain your speed until you are off the freeway. " +
      "Once on the exit ramp, begin slowing to the posted advisory " +
      "speed.",
    source: HANDBOOK,
    section: "Lane Travel - Freeway Driving (page 35)",
    url: HANDBOOK_URL + "#page=43",
  },
  {
    key: "left-of-center-yield",
    quote:
      "If you must drive to the left of the center line to go " +
      "around a road hazard or for any other reason, you must yield " +
      "to oncoming traffic.",
    source: HANDBOOK,
    section: "Lane Travel (page 18)",
    url: HANDBOOK_URL + "#page=26",
  },
  {
    key: "left-one-way-to-one-way",
    quote:
      "Left Turn: One-Way Road to One-Way Road: Approach the turn " +
      "in the traffic lane that is nearest the left curb. Turn into " +
      "the nearest left lane for traffic on the road you are " +
      "entering. You may make this turn against a red light after " +
      "stopping and yielding to traffic and pedestrians.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 40)",
    url: HANDBOOK_URL + "#page=48",
  },
  {
    key: "left-one-way-to-two-way",
    quote:
      "Left Turn: One-Way Road to Two-Way Road: Approach the turn " +
      "in the traffic lane nearest the left curb. Turn into the " +
      "lane just to the right of the center line. You cannot make " +
      "this turn against a red light.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 40)",
    url: HANDBOOK_URL + "#page=48",
  },
  {
    key: "left-turn-red-two-way",
    quote:
      "It is illegal to execute a left turn onto a two-way road " +
      "against a red light. If a left turn lane is provided, you " +
      "must turn from that lane.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 39)",
    url: HANDBOOK_URL + "#page=47",
  },
  {
    key: "left-turn-yield-on-green-sign",
    quote:
      "Left Turn Yield on Green: On a green circular signal, yield " +
      "the right-of-way to oncoming traffic and pedestrians until " +
      "it is safe to turn.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 9)",
    url: HANDBOOK_URL + "#page=17",
  },
  {
    key: "left-turn-yield-oncoming",
    quote:
      "Oregon law requires a driver to yield the right of way to " +
      "oncoming traffic until it is safe to turn.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 39)",
    url: HANDBOOK_URL + "#page=47",
  },
  {
    key: "left-turns-two-way",
    quote:
      "Left Turns: On a two-way road, approach the turn with your " +
      "vehicle in the lane just to the right of the center line. " +
      "Just before entering the intersection, look to the left, to " +
      "the front, to the right and to the left again for oncoming " +
      "traffic and cross traffic.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 39)",
    url: HANDBOOK_URL + "#page=47",
  },
  {
    key: "load-limits",
    quote:
      "Passenger vehicles must not carry loads that extend beyond " +
      "the sides of the fenders on the left side. Loads may not " +
      "extend more than 6 inches beyond the sides of the right " +
      "fenders. Loads may not extend more than 4 feet in front of " +
      "any vehicle.",
    source: HANDBOOK,
    section: "Sharing the Road - Other Vehicles (page 56)",
    url: HANDBOOK_URL + "#page=64",
  },
  {
    key: "loss-of-privileges",
    quote:
      "Driving under the influence of alcohol, drugs or inhalants. " +
      "Failing to report a vehicle collision. Driving uninsured. " +
      "Too many traffic convictions (Driver Improvement Program). " +
      "Failure to comply with court fines.",
    source: HANDBOOK,
    section: "Other Important Information - Loss of Driving Privileges (page 95)",
    url: HANDBOOK_URL + "#page=103",
  },
  {
    key: "loud-radio-50-feet",
    quote:
      "It is illegal to play a radio or other sound system so loud " +
      "it can be heard 50 feet away from your vehicle. It is " +
      "important to be able to hear horns, screeching tires and " +
      "sirens.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 80)",
    url: HANDBOOK_URL + "#page=88",
  },
  {
    key: "low-clearance-sign",
    quote:
      "Low Clearance: The overpass ahead has low clearance. Do not " +
      "proceed if your vehicle is too tall to pass under it.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 12)",
    url: HANDBOOK_URL + "#page=20",
  },
  {
    key: "marijuana-impairment",
    quote:
      "The use of alcohol and marijuana together can reduce a " +
      "person's ability to drive safely. The safest choice is to " +
      "not drive after using any drug that affects your reaction " +
      "time or physical abilities.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 82)",
    url: HANDBOOK_URL + "#page=90",
  },
  {
    key: "marked-crosswalk",
    quote:
      "Marked crosswalk: Noted by white lines in an area where " +
      "pedestrians cross the road. Stop when a pedestrian is in the " +
      "crosswalk.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 24)",
    url: HANDBOOK_URL + "#page=32",
  },
  {
    key: "medications",
    quote:
      "Over the counter and prescription medications can also " +
      "impair your driving ability. Ask your doctor or pharmacist " +
      "about the side effects of any medication. If you are not " +
      "sure if it is safe to drive after taking a new medication, " +
      "it is best to find different transportation.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 83)",
    url: HANDBOOK_URL + "#page=91",
  },
  {
    key: "mobility-devices",
    quote:
      "Operators of motorized wheelchairs, scooters, and personal " +
      "assistive mobility devices are permitted to use bike lanes " +
      "and paths. You must yield to these operators as you would a " +
      "person riding a bicycle.",
    source: HANDBOOK,
    section: "Sharing the Road - Bicycles (page 51)",
    url: HANDBOOK_URL + "#page=59",
  },
  {
    key: "motorcycle-following",
    quote:
      "When following a person riding a motorcycle, allow more " +
      "distance between your vehicle and the person riding a " +
      "motorcycle than you would another car.",
    source: HANDBOOK,
    section: "Sharing the Road - Motorcycles and Mopeds (page 52)",
    url: HANDBOOK_URL + "#page=60",
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "It is against the law to share a lane with a person riding a " +
      "motorcycle or moped. When passing, you must allow them a " +
      "full lane.",
    source: HANDBOOK,
    section: "Sharing the Road - Motorcycles and Mopeds (page 52)",
    url: HANDBOOK_URL + "#page=60",
  },
  {
    key: "motorcycle-signals",
    quote:
      "Turn signals do not automatically cancel on some motorcycles " +
      "and the rider may forget to turn the signal off. Before you " +
      "make a turn in front of an oncoming motorcycle that has its " +
      "turn signal on, be sure the rider is actually slowing to " +
      "turn rather than riding with their signal on by mistake.",
    source: HANDBOOK,
    section: "Sharing the Road - Motorcycles and Mopeds (page 52)",
    url: HANDBOOK_URL + "#page=60",
  },
  {
    key: "motorcycle-yield-oncoming",
    quote:
      "You must yield to an oncoming person riding a motorcycle " +
      "just as you would any other type of vehicle. It is safest to " +
      "wait until they pass to make a turn.",
    source: HANDBOOK,
    section: "Sharing the Road - Motorcycles and Mopeds (page 52)",
    url: HANDBOOK_URL + "#page=60",
  },
  {
    key: "motorist-service-signs",
    quote:
      "Motorist Service Signs: These blue signs tell you about " +
      "services or facilities along the highway.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 14)",
    url: HANDBOOK_URL + "#page=22",
  },
  {
    key: "multiuse-path-sign",
    quote:
      "Multiuse Path Crossing: People riding bicycles and " +
      "pedestrians regularly cross the road in the area.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 10)",
    url: HANDBOOK_URL + "#page=18",
  },
  {
    key: "near-freezing-slippery",
    quote:
      "Be aware that the road is likely to be the most slippery " +
      "when the temperature is near the freezing point rather than " +
      "below freezing.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 78)",
    url: HANDBOOK_URL + "#page=86",
  },
  {
    key: "never-back-up-freeway",
    quote:
      "If you miss your exit, go to the next one. Never stop or " +
      "back up on a freeway. The shoulder should only be used in an " +
      "emergency.",
    source: HANDBOOK,
    section: "Lane Travel - Freeway Driving (page 35)",
    url: HANDBOOK_URL + "#page=43",
  },
  {
    key: "night-driving-look-right",
    quote:
      "Look a little to the right of oncoming lights and watch the " +
      "road edge or fog line. This helps you be less blinded by " +
      "headlight glare.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 77)",
    url: HANDBOOK_URL + "#page=85",
  },
  {
    key: "night-passing-dawn-dusk",
    quote:
      "Be careful when passing at dawn or dusk. Oncoming vehicles " +
      "may not have their headlights on, and you may not see it " +
      "until it is too late.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 77)",
    url: HANDBOOK_URL + "#page=85",
  },
  {
    key: "no-flash-to-pass",
    quote:
      "Do not use your hands or lights to signal other drivers when " +
      "to pass. The law prohibits flashing any of your signals at " +
      "drivers to let them know when to pass.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 33)",
    url: HANDBOOK_URL + "#page=41",
  },
  {
    key: "no-lap-passengers",
    quote: "Do not hold a person, pet, or package in your lap or arms.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 80)",
    url: HANDBOOK_URL + "#page=88",
  },
  {
    key: "no-parking-bridge",
    quote:
      "On a bridge, overpass, or in a tunnel. Between separate " +
      "roads of a divided highway.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 70)",
    url: HANDBOOK_URL + "#page=78",
  },
  {
    key: "no-parking-crosswalk",
    quote:
      "Within 20 feet of a marked or unmarked crosswalk at an " +
      "intersection.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 71)",
    url: HANDBOOK_URL + "#page=79",
  },
  {
    key: "no-parking-driveway",
    quote: "In front of a public or private driveway.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 70)",
    url: HANDBOOK_URL + "#page=78",
  },
  {
    key: "no-parking-fire-station",
    quote:
      "Within 15 feet of the driveway entrance to a fire station on " +
      "the same side of the street or within 75 feet on the " +
      "opposite side of the street.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 71)",
    url: HANDBOOK_URL + "#page=79",
  },
  {
    key: "no-parking-hydrant",
    quote: "Within 10 feet of a fire hydrant.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 70)",
    url: HANDBOOK_URL + "#page=78",
  },
  {
    key: "no-parking-list",
    quote:
      "In a traffic lane, on a highway, street or road. Within an " +
      "intersection. On the road side of any parked vehicle (double " +
      "parking). On a sidewalk, crosswalk, bicycle lane or path. On " +
      "any railroad or light rail tracks.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 70)",
    url: HANDBOOK_URL + "#page=78",
  },
  {
    key: "no-parking-railroad",
    quote:
      "Within 50 feet of the nearest rail of a railroad or light " +
      "rail crossing.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 71)",
    url: HANDBOOK_URL + "#page=79",
  },
  {
    key: "no-parking-signal",
    quote:
      "Within 50 feet of a traffic signal or sign if your vehicle " +
      "hides the signal or sign from view.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 71)",
    url: HANDBOOK_URL + "#page=79",
  },
  {
    key: "no-pass-stopped-at-crosswalk",
    quote:
      "Do not pass a vehicle stopped at a crosswalk, it is against " +
      "the law. The driver may be waiting for a pedestrian to cross " +
      "the road.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 47)",
    url: HANDBOOK_URL + "#page=55",
  },
  {
    key: "no-passing-crosswalk",
    quote:
      "Crosswalks: The vehicle ahead is stopped at a crosswalk to " +
      "permit a pedestrian to cross.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 32)",
    url: HANDBOOK_URL + "#page=40",
  },
  {
    key: "no-passing-intersections",
    quote:
      "Intersections and Railroads: You are approaching, at or in " +
      "an intersection or railroad crossing.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 32)",
    url: HANDBOOK_URL + "#page=40",
  },
  {
    key: "no-passing-view-limited",
    quote:
      "Do not pass in any area where your view of oncoming traffic " +
      "is limited.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 32)",
    url: HANDBOOK_URL + "#page=40",
  },
  {
    key: "no-passing-zone",
    quote:
      "Do not attempt to pass a vehicle if you cannot safely return " +
      "to your lane before entering a no-passing zone.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 32)",
    url: HANDBOOK_URL + "#page=40",
  },
  {
    key: "no-turn-on-red-sign",
    quote:
      "No Turn on Red: You may not turn during the red light. You " +
      "must wait for the signal to turn green.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 9)",
    url: HANDBOOK_URL + "#page=17",
  },
  {
    key: "no-video-display",
    quote:
      "It is illegal to have a TV, tablet or other video display " +
      "visible to the driver.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 80)",
    url: HANDBOOK_URL + "#page=88",
  },
  {
    key: "obey-all-signs",
    quote:
      "You must obey all official signs, signals, and markings " +
      "unless you see a police officer or road worker redirecting " +
      "traffic.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 7)",
    url: HANDBOOK_URL + "#page=15",
  },
  {
    key: "obey-pavement-markings",
    quote:
      "You must obey all pavement markings unless you see a police " +
      "officer or road worker redirecting traffic.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 22)",
    url: HANDBOOK_URL + "#page=30",
  },
  {
    key: "oncoming-drifting",
    quote:
      "If an oncoming vehicle is drifting into your lane, pull to " +
      "the right as far as possible, slow down, and warn the other " +
      "driver with your horn or lights. Never pull into the " +
      "opposing lane; the oncoming driver may turn back sharply " +
      "into that lane.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Defensive Driving (page 75)",
    url: HANDBOOK_URL + "#page=83",
  },
  {
    key: "one-way-sign",
    quote: "One Way: Traffic flows only in the direction of the arrow.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 8)",
    url: HANDBOOK_URL + "#page=16",
  },
  {
    key: "online-test-attempts",
    quote:
      "You may take the test online four times total. After four " +
      "attempts you must test at a DMV office.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 3)",
    url: HANDBOOK_URL + "#page=11",
  },
  {
    key: "online-test-rules",
    quote:
      "If under 18 years of age, a Proctor over 21 years of age " +
      "must supervise the test. » A Proctor can only supervise two " +
      "tests in a 24-hour period.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 3)",
    url: HANDBOOK_URL + "#page=11",
  },
  {
    key: "open-container",
    quote:
      "Oregon's Open Container law says it is illegal to have an " +
      "open bottle or other container with alcohol in it while you " +
      "are in a vehicle on any road. A container is considered to " +
      "be open if its seal is broken, even if it has been reclosed. " +
      "Any open bottles or containers should be in the trunk.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 83)",
    url: HANDBOOK_URL + "#page=91",
  },
  {
    key: "ors-100-mph",
    quote:
      "if a person drives 100 miles per hour or greater when the " +
      "person commits a violation described in this section, the " +
      "person commits a specific fine traffic violation. The " +
      "presumptive fine for a violation under this subsection is " +
      "$1,150,",
    source: STATUTES,
    section: "ORS 811.109",
    url: ors("811"),
  },
  {
    key: "ors-duii-008",
    quote:
      "Has 0.08 percent or more by weight of alcohol in the blood " +
      "of the person as shown by chemical analysis of the breath or " +
      "blood of the person made under ORS 813.100, 813.140 or " +
      "813.150;",
    source: STATUTES,
    section: "ORS 813.010",
    url: ors("813"),
  },
  {
    key: "ors-duii-class-a",
    quote:
      "the offense described in this section, driving while under " +
      "the influence of intoxicants, is a Class A misdemeanor and " +
      "is applicable upon any premises open to the public.",
    source: STATUTES,
    section: "ORS 813.010",
    url: ors("813"),
  },
  {
    key: "ors-emergency-500",
    quote:
      "Drives a vehicle following at a distance closer than 500 " +
      "feet any emergency vehicle or ambulance that is traveling in " +
      "response to a fire alarm or emergency.",
    source: STATUTES,
    section: "ORS 811.150",
    url: ors("811"),
  },
  {
    key: "ors-fail-test-90-days",
    quote:
      "under the influence of intoxicating liquor under ORS 813.300 " +
      "and the person is not subject to an increase in the " +
      "suspension time for reasons described in ORS 813.430, the " +
      "suspension shall be for a period of 90 days.",
    source: STATUTES,
    section: "ORS 813.420",
    url: ors("813"),
  },
  {
    key: "ors-hands-free-definition",
    quote:
      "\"Hands-free accessory\" means an attachment or built-in " +
      "feature for or an addition to a mobile electronic device " +
      "that gives a person the ability to keep both hands on the " +
      "steering wheel at all times while using the device",
    source: STATUTES,
    section: "ORS 811.507",
    url: ors("811"),
  },
  {
    key: "ors-implied-consent",
    quote:
      "Any person who operates a motor vehicle upon premises open " +
      "to the public or the highways of this state shall be deemed " +
      "to have given consent, subject to the implied consent law, " +
      "to a chemical test of the person's breath,",
    source: STATUTES,
    section: "ORS 813.100",
    url: ors("813"),
  },
  {
    key: "ors-interstate-65",
    quote: "Sixty-five miles per hour on an interstate highway.",
    source: STATUTES,
    section: "ORS 811.111",
    url: ors("811"),
  },
  {
    key: "ors-mobile-device",
    quote:
      "A person commits the offense of driving a motor vehicle " +
      "while using a mobile electronic device if the person, while " +
      "driving a motor vehicle on a highway or premises open to the " +
      "public: (a) Holds a mobile electronic device in the person's " +
      "hand; or (b) Uses a mobile electronic device for any " +
      "purpose.",
    source: STATUTES,
    section: "ORS 811.507",
    url: ors("811"),
  },
  {
    key: "ors-move-over",
    quote:
      "Make a lane change to a lane not adjacent to that of the " +
      "stopped motor vehicle; or (B) Reduce the speed of the motor " +
      "vehicle to a speed that is at least five miles per hour " +
      "under the speed limit established in ORS 811.111 or a " +
      "designated speed posted under ORS 810.180.",
    source: STATUTES,
    section: "ORS 811.147",
    url: ors("811"),
  },
  {
    key: "ors-move-over-parking",
    quote:
      "A person is not in violation of the offense described in " +
      "this section if the stopped motor vehicle is in a designated " +
      "parking area.",
    source: STATUTES,
    section: "ORS 811.147",
    url: ors("811"),
  },
  {
    key: "ors-pedestrian-class-b",
    quote:
      "The offense described in this section, failure to stop and " +
      "remain stopped for a pedestrian, is a Class B traffic " +
      "violation.",
    source: STATUTES,
    section: "ORS 811.028",
    url: ors("811"),
  },
  {
    key: "ors-pedestrian-crossing",
    quote:
      "a pedestrian is crossing the roadway in a crosswalk when any " +
      "part or extension of the pedestrian, including but not " +
      "limited to any part of the pedestrian's body, wheelchair, " +
      "cane, crutch or bicycle, moves onto the roadway in a " +
      "crosswalk with the intent to proceed.",
    source: STATUTES,
    section: "ORS 811.028",
    url: ors("811"),
  },
  {
    key: "ors-permit-24-months",
    quote:
      "A Class C instruction driver permit shall be valid for 24 " +
      "months from the date of issuance.",
    source: STATUTES,
    section: "ORS 807.280",
    url: ors("807"),
  },
  {
    key: "ors-permit-age-15",
    quote:
      "An applicant must be 15 years of age or older to receive the " +
      "same driving privileges as are granted under a Class C " +
      "license.",
    source: STATUTES,
    section: "ORS 807.280",
    url: ors("807"),
  },
  {
    key: "ors-permit-seat-beside",
    quote:
      "The accompanying person must be occupying a seat beside the " +
      "holder of the instruction driver permit unless the " +
      "instruction driver permit is for motorcycle driving " +
      "privileges.",
    source: STATUTES,
    section: "ORS 807.280",
    url: ors("807"),
  },
  {
    key: "ors-provisional-18",
    quote:
      "Subsection (1) of this section does not apply to the holder " +
      "of a provisional driver license who is 18 years of age or " +
      "older.",
    source: STATUTES,
    section: "ORS 807.122",
    url: ors("807"),
  },
  {
    key: "ors-provisional-50-hours",
    quote:
      "Certifies to the department that the person has had at least " +
      "50 hours of driving experience during which the person was " +
      "supervised by a person at least 21 years of age who has had " +
      "a valid driver license for at least three years; and",
    source: STATUTES,
    section: "ORS 807.065",
    url: ors("807"),
  },
  {
    key: "ors-provisional-night",
    quote:
      "For the first year after issuance of the license, the holder " +
      "of the license may not operate a motor vehicle between the " +
      "hours of 12 midnight and 5 a.m. except when:",
    source: STATUTES,
    section: "ORS 807.122",
    url: ors("807"),
  },
  {
    key: "ors-provisional-night-25",
    quote:
      "The holder is accompanied by a licensed driver who is at " +
      "least 25 years of age.",
    source: STATUTES,
    section: "ORS 807.122",
    url: ors("807"),
  },
  {
    key: "ors-provisional-night-exceptions",
    quote:
      "The holder is driving between the holder's home and place of " +
      "employment; (B) The holder is driving between the holder's " +
      "home and a school event for which no other transportation is " +
      "available; (C) The holder is driving for employment " +
      "purposes; or",
    source: STATUTES,
    section: "ORS 807.122",
    url: ors("807"),
  },
  {
    key: "ors-provisional-passengers",
    quote:
      "for the first six months after issuance of the license, the " +
      "holder of the license may not operate a motor vehicle that " +
      "is carrying a passenger under 20 years of age who is not a " +
      "member of the holder's immediate family.",
    source: STATUTES,
    section: "ORS 807.122",
    url: ors("807"),
  },
  {
    key: "ors-provisional-second-six",
    quote:
      "For the second six months, the holder of the license may not " +
      "operate a motor vehicle that is carrying more than three " +
      "passengers who are under 20 years of age and who are not " +
      "members of the holder's immediate family.",
    source: STATUTES,
    section: "ORS 807.122",
    url: ors("807"),
  },
  {
    key: "ors-provisional-six-months",
    quote:
      "Has had, for at least six months prior to application for " +
      "the license, an instruction driver permit issued under ORS " +
      "807.280 or the equivalent of an instruction driver permit " +
      "issued by another state of the United States or by the " +
      "District of Columbia;",
    source: STATUTES,
    section: "ORS 807.065",
    url: ors("807"),
  },
  {
    key: "ors-refusal-fine",
    quote:
      "The presumptive fine for refusal to take a test for " +
      "intoxicants is $650.",
    source: STATUTES,
    section: "ORS 813.095",
    url: ors("813"),
  },
  {
    key: "ors-refusal-one-year",
    quote:
      "If the suspension is for refusal of a test under ORS 813.100 " +
      "and the person is not subject to an increase in the " +
      "suspension time for reasons described in ORS 813.430, the " +
      "suspension shall be for a period of one year.",
    source: STATUTES,
    section: "ORS 813.420",
    url: ors("813"),
  },
  {
    key: "ors-school-bus-class-a",
    quote:
      "The offense described in this section, failure to stop for " +
      "bus safety lights, is a Class A traffic violation.",
    source: STATUTES,
    section: "ORS 811.155",
    url: ors("811"),
  },
  {
    key: "ors-school-bus-different-roadway",
    quote:
      "A driver need not comply with this section if the vehicle " +
      "operating red bus safety lights is stopped on a different " +
      "roadway.",
    source: STATUTES,
    section: "ORS 811.155",
    url: ors("811"),
  },
  {
    key: "ors-school-zone-20",
    quote:
      "Drives a vehicle in a school zone at a speed greater than 20 " +
      "miles per hour if the school zone is:",
    source: STATUTES,
    section: "ORS 811.111",
    url: ors("811"),
  },
  {
    key: "ors-speed-default-55",
    quote:
      "Fifty-five miles per hour in locations not otherwise " +
      "described in this paragraph.",
    source: STATUTES,
    section: "ORS 811.111",
    url: ors("811"),
  },
  {
    key: "ors-speed-penalties",
    quote:
      "One to 10 miles per hour in excess of the speed limit is a " +
      "Class D traffic violation. (b) 11 to 20 miles per hour in " +
      "excess of the speed limit is a Class C traffic violation. " +
      "(c) 21 to 30 miles per hour in excess of the speed limit is " +
      "a Class B traffic violation.",
    source: STATUTES,
    section: "ORS 811.109",
    url: ors("811"),
  },
  {
    key: "ors-speed-penalty-class-a",
    quote:
      "Over 30 miles per hour in excess of the speed limit is a " +
      "Class A traffic violation.",
    source: STATUTES,
    section: "ORS 811.109",
    url: ors("811"),
  },
  {
    key: "ors-speed-residence-25",
    quote:
      "Twenty-five miles per hour on a highway in a residence " +
      "district if the highway is not an arterial highway.",
    source: STATUTES,
    section: "ORS 811.111",
    url: ors("811"),
  },
  {
    key: "ors-statutory-defaults",
    quote:
      "if no designated speed is posted, the following: (A) Fifteen " +
      "miles per hour when driving on an alley or a narrow " +
      "residential roadway. (B) Twenty miles per hour in a business " +
      "district. (C) Twenty-five miles per hour in a public park.",
    source: STATUTES,
    section: "ORS 811.111",
    url: ors("811"),
  },
  {
    key: "ors-under-21-any-alcohol",
    quote:
      "for a person who is under 21 years of age, any amount of " +
      "alcohol in the blood constitutes being under the influence " +
      "of intoxicating liquor.",
    source: STATUTES,
    section: "ORS 813.300",
    url: ors("813"),
  },
  {
    key: "ors-white-cane",
    quote:
      "A driver approaching a pedestrian who has limited vision or " +
      "a pedestrian who is blind or deaf-blind, who is carrying a " +
      "white cane or accompanied by a dog guide, and who is " +
      "crossing or about to cross a roadway, shall stop and remain " +
      "stopped until the pedestrian has crossed the roadway.",
    source: STATUTES,
    section: "ORS 811.035",
    url: ors("811"),
  },
  {
    key: "out-of-order-signal",
    quote:
      "When a traffic signal is out of order and flashes yellow or " +
      "red, you must obey that signal as defined below.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Traffic Signals (page 15)",
    url: HANDBOOK_URL + "#page=23",
  },
  {
    key: "over-21-fail-008",
    quote:
      "If you are 21 or over, you will fail the test if your blood " +
      "alcohol concentration is 0.08 percent or more.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 83)",
    url: HANDBOOK_URL + "#page=91",
  },
  {
    key: "over-length-red-flag",
    quote:
      "A red flag, at least 12 inches square, must be shown at the " +
      "end of any load that extends 4 feet or more beyond the rear " +
      "of the vehicle. A red light, visible for 500 feet to the " +
      "rear and sides, must replace the red flag when limited " +
      "visibility conditions exist.",
    source: HANDBOOK,
    section: "Sharing the Road - Other Vehicles (page 56)",
    url: HANDBOOK_URL + "#page=64",
  },
  {
    key: "painted-median",
    quote:
      "You may make a left turn across a painted median after " +
      "waiting for oncoming traffic to clear. You may not use a " +
      "painted median as a turn lane. It is illegal to travel in a " +
      "median with double yellow lines.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 23)",
    url: HANDBOOK_URL + "#page=31",
  },
  {
    key: "parallel-parking-12-inches",
    quote:
      "Park in the direction vehicles are moving in the lane. Park " +
      "parallel to and no more than 12 inches from the curb. If " +
      "there is no curb, park as close as possible to the edge of " +
      "the shoulder. If parking areas are marked, your wheels must " +
      "be within the marked space.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 68)",
    url: HANDBOOK_URL + "#page=76",
  },
  {
    key: "parking-downhill",
    quote: "Downhill Against a Curb: Turn your wheels toward the curb.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 69)",
    url: HANDBOOK_URL + "#page=77",
  },
  {
    key: "parking-hills-brake",
    quote:
      "Always set your parking brake. Leave your vehicle in gear if " +
      "it has a manual transmission or in park for an automatic " +
      "transmission. Turn your front wheels as indicated below to " +
      "prevent your vehicle from rolling downhill in case the brake " +
      "fails.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 69)",
    url: HANDBOOK_URL + "#page=77",
  },
  {
    key: "parking-leaving-space",
    quote:
      "When leaving a parked or stopped position, check your blind " +
      "spots and mirrors, and yield to all other traffic.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 68)",
    url: HANDBOOK_URL + "#page=76",
  },
  {
    key: "parking-lights-illegal",
    quote:
      "It is illegal to drive a vehicle at night or in bad weather " +
      "with only the parking lights on. A vehicle stopped or parked " +
      "on a road or shoulder must have parking lights on in limited " +
      "visibility conditions.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 76)",
    url: HANDBOOK_URL + "#page=84",
  },
  {
    key: "parking-no-curb",
    quote: "No Curb: Turn your wheels toward the edge of the road.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 69)",
    url: HANDBOOK_URL + "#page=77",
  },
  {
    key: "parking-rules-apply",
    quote:
      "The rules about parking and stopping apply whether you are " +
      "in your vehicle or not.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 70)",
    url: HANDBOOK_URL + "#page=78",
  },
  {
    key: "parking-uphill",
    quote:
      "Uphill Against a Curb: Turn your wheels toward the travel " +
      "lane.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 69)",
    url: HANDBOOK_URL + "#page=77",
  },
  {
    key: "passing-check-blind-spot",
    quote:
      "Before you start to pass, check your mirrors and your " +
      "vehicle's blind spot by glancing over your shoulder to the " +
      "rear in the direction of the lane change. Turn on your " +
      "signal, increase your speed and complete your pass as soon " +
      "as possible.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 31)",
    url: HANDBOOK_URL + "#page=39",
  },
  {
    key: "passing-left-only",
    quote:
      "When passing another vehicle on a two-lane road, you should " +
      "pass only to the left of the vehicle. Your pass may not " +
      "begin before the start of a passing zone and must be " +
      "completed before you enter a no-passing zone. Do not exceed " +
      "the speed limit when passing; it is against the law to " +
      "exceed speed limits at any time.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 31)",
    url: HANDBOOK_URL + "#page=39",
  },
  {
    key: "passing-on-right",
    quote:
      "You may pass on the right only under one of the following " +
      "conditions: The vehicle you are passing is making or has " +
      "signaled for a left turn. There must be sufficient space to " +
      "the right for you to pass without leaving the paved portion " +
      "of the road or driving in a bike lane.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 33)",
    url: HANDBOOK_URL + "#page=41",
  },
  {
    key: "passing-return-to-lane",
    quote:
      "When you can see the vehicle you passed in your rearview " +
      "mirror, signal and return to your lane.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 31)",
    url: HANDBOOK_URL + "#page=39",
  },
  {
    key: "passing-right-caution",
    quote:
      "Use extra care when you pass on the right. Other drivers do " +
      "not expect to be passed on the right. Do not exceed the " +
      "speed limit to pass.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 33)",
    url: HANDBOOK_URL + "#page=41",
  },
  {
    key: "passing-right-multilane",
    quote:
      "You are traveling on a road with two or more lanes traveling " +
      "in the same direction and the vehicle you are passing is in " +
      "the left lane. You may pass the vehicle using the right " +
      "lane.",
    source: HANDBOOK,
    section: "Lane Travel - Passing (page 33)",
    url: HANDBOOK_URL + "#page=41",
  },
  {
    key: "ped-crossing-sign",
    quote:
      "Pedestrian Crossing: Be alert for people crossing your path. " +
      "These signs may include a flashing yellow beacon that " +
      "indicates a pedestrian is crossing, has recently crossed or " +
      "is about to cross.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 10)",
    url: HANDBOOK_URL + "#page=18",
  },
  {
    key: "ped-lanes-list",
    quote:
      "Stop and remain stopped for a pedestrian crossing in a " +
      "crosswalk when the pedestrian is: In your lane of travel, In " +
      "a lane next to your lane of travel, including a bike lane, " +
      "or In the lane you are turning into.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 46)",
    url: HANDBOOK_URL + "#page=54",
  },
  {
    key: "ped-no-signal-turn",
    quote:
      "If you are turning at an intersection that doesn't have a " +
      "traffic signal, before you begin to turn, the pedestrian " +
      "must be past the lane you are turning into, plus the next " +
      "lane.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 47)",
    url: HANDBOOK_URL + "#page=55",
  },
  {
    key: "ped-six-feet-signal",
    quote:
      "If you are turning at an intersection that has a traffic " +
      "signal, before you begin to turn, the pedestrian must be six " +
      "feet or more from the lane you are turning into.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 47)",
    url: HANDBOOK_URL + "#page=55",
  },
  {
    key: "permit-held-six-months",
    quote:
      "You must have held a permit for at least 6 months if you are " +
      "under 18 years of age and applying for a driver license.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 5)",
    url: HANDBOOK_URL + "#page=13",
  },
  {
    key: "permit-six-months",
    quote:
      "You must have had an instruction permit for at least 6 " +
      "months. Holding an out-of-state permit does count towards " +
      "this requirement.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 90)",
    url: HANDBOOK_URL + "#page=98",
  },
  {
    key: "pilot-vehicles",
    quote:
      "Pilot vehicles are specially marked vehicles that lead or " +
      "follow a vehicle carrying an especially large load.",
    source: HANDBOOK,
    section: "Sharing the Road - Large Vehicles (page 54)",
    url: HANDBOOK_URL + "#page=62",
  },
  {
    key: "pip-coverage",
    quote:
      "Personal Injury Protection: $15,000 per person for " +
      "reasonable and necessary expenses within two years after the " +
      "date of the person's injury.",
    source: HANDBOOK,
    section: "Other Important Information - Mandatory Insurance (page 93)",
    url: HANDBOOK_URL + "#page=101",
  },
  {
    key: "police-report-not-enough",
    quote:
      "A police report does not replace your requirement to file a " +
      "report with DMV.",
    source: HANDBOOK,
    section: "Other Important Information - Traffic Collisions (page 94)",
    url: HANDBOOK_URL + "#page=102",
  },
  {
    key: "police-stop",
    quote:
      "Drive as close as you safely can to the right side of the " +
      "road, stop and turn off the engine. Do not stop in an " +
      "intersection or pull into the center median of a highway.",
    source: HANDBOOK,
    section: "Sharing the Road - Emergency Vehicles (page 58)",
    url: HANDBOOK_URL + "#page=66",
  },
  {
    key: "police-stop-hands",
    quote:
      "Keep your hands on the steering wheel. Passengers should " +
      "keep their hands in plain view.",
    source: HANDBOOK,
    section: "Sharing the Road - Emergency Vehicles (page 58)",
    url: HANDBOOK_URL + "#page=66",
  },
  {
    key: "police-stop-stay-in-vehicle",
    quote:
      "Stay in your vehicle. Do not get out unless requested. If it " +
      "is dark, turn on the vehicle's interior light after stopping " +
      "and before the officer approaches.",
    source: HANDBOOK,
    section: "Sharing the Road - Emergency Vehicles (page 58)",
    url: HANDBOOK_URL + "#page=66",
  },
  {
    key: "racing-illegal",
    quote:
      "It is illegal to race on any road. Racing can be any " +
      "acceleration or speed contest or the making of a speed " +
      "record.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 21)",
    url: HANDBOOK_URL + "#page=29",
  },
  {
    key: "railroad-15-feet",
    quote:
      "When required to stop, do so at the stop line. If there is " +
      "no stop line, stop at least 15 feet from the nearest rail.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 64)",
    url: HANDBOOK_URL + "#page=72",
  },
  {
    key: "railroad-advance-sign",
    quote:
      "Railroad Advance: A railroad crossing is ahead. You may have " +
      "to stop.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 12)",
    url: HANDBOOK_URL + "#page=20",
  },
  {
    key: "railroad-buses-stop",
    quote:
      "All school buses, hazmat vehicles and some school activity " +
      "vehicles must stop at railroad tracks. Be prepared to stop " +
      "when following these vehicles.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 63)",
    url: HANDBOOK_URL + "#page=71",
  },
  {
    key: "railroad-clear-crossing",
    quote:
      "Only cross the tracks if you are sure you can completely " +
      "clear the crossing. Be aware that one train may be blocking " +
      "the view of another one.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 63)",
    url: HANDBOOK_URL + "#page=71",
  },
  {
    key: "railroad-crossbuck",
    quote:
      "A railroad crossbuck assembly will include a yield or stop " +
      "sign. Obey the posted sign. If there is more than one track, " +
      "a sign below the crossbuck indicates the number of tracks.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 63)",
    url: HANDBOOK_URL + "#page=71",
  },
  {
    key: "railroad-gates",
    quote:
      "It is against the law to drive around or under a crossing " +
      "gate - while down or while being raised or lowered - and it " +
      "is extremely dangerous.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 64)",
    url: HANDBOOK_URL + "#page=72",
  },
  {
    key: "railroad-multiple-tracks",
    quote:
      "At crossings with multiple tracks, look carefully to see if " +
      "a second train is coming on another track from either " +
      "direction.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 64)",
    url: HANDBOOK_URL + "#page=72",
  },
  {
    key: "railroad-never-stop-tracks",
    quote:
      "Never stop on the tracks. Never try to beat a train at a " +
      "crossing. The train you see is closer than it seems. Trains " +
      "cannot stop quickly.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 63)",
    url: HANDBOOK_URL + "#page=71",
  },
  {
    key: "railroad-stop-when",
    quote:
      "Stop before railroad tracks when: Flashing red lights are " +
      "activated. An approaching train is clearly visible or is so " +
      "close to the crossing that it would be hazardous for you to " +
      "try to cross. A stop sign is posted, even if you do not see " +
      "a train coming. A flagger signals you to stop.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 64)",
    url: HANDBOOK_URL + "#page=72",
  },
  {
    key: "railroad-stuck-vehicle",
    quote:
      "If a train approaches, move at a 45 degree angle from the " +
      "tracks in the direction of the train so you are not hit with " +
      "debris.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 64)",
    url: HANDBOOK_URL + "#page=72",
  },
  {
    key: "rain-wipers-headlights",
    quote:
      "Increase your visibility to other motorists by turning on " +
      "your headlights when your windshield wipers are on. Do not " +
      "use cruise control in wet conditions. Keep windows clear of " +
      "moisture.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 77)",
    url: HANDBOOK_URL + "#page=85",
  },
  {
    key: "ramp-meters",
    quote:
      "Only one vehicle can proceed each time the green light comes " +
      "on. When your light turns green, speed up to merge with " +
      "traffic on the freeway. Ramp meters will appear dark when " +
      "not in use. Do not stop at a dark ramp meter.",
    source: HANDBOOK,
    section: "Lane Travel - Freeway Driving (page 35)",
    url: HANDBOOK_URL + "#page=43",
  },
  {
    key: "red-arrow",
    quote:
      "Red Arrow: A steady red arrow means stop and remain stopped " +
      "until the signal changes, except for allowed turns on red. " +
      "The same turns allowed for a steady red signal are allowed " +
      "for a red arrow.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Traffic Signals (page 15)",
    url: HANDBOOK_URL + "#page=23",
  },
  {
    key: "red-circle-slash",
    quote:
      "When you see a sign with a red circle and a slash mark, it " +
      "means do not make the turn shown.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 7)",
    url: HANDBOOK_URL + "#page=15",
  },
  {
    key: "red-markings",
    quote:
      "Red markings are used to designate where transit only " +
      "vehicles may travel continuously - like buses, light rail " +
      "trains (LRT) or bikes. Not all Transit Only lanes are red, " +
      "so always look for signs or other markings on the road.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 25)",
    url: HANDBOOK_URL + "#page=33",
  },
  {
    key: "regulatory-other-white",
    quote:
      "Regulatory signs are rectangular with black words or symbols " +
      "on a white background and tell you what to do. They are " +
      "posted at or near where the requirement applies.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 8)",
    url: HANDBOOK_URL + "#page=16",
  },
  {
    key: "regulatory-prohibitive-red",
    quote:
      "Traffic signs that prohibit certain actions or movements are " +
      "red in color and increase safety by controlling the flow of " +
      "traffic through intersections.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 7)",
    url: HANDBOOK_URL + "#page=15",
  },
  {
    key: "reversing-curves-sign",
    quote:
      "Reversing Curves: The road ahead curves to the right, then " +
      "left.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 11)",
    url: HANDBOOK_URL + "#page=19",
  },
  {
    key: "right-turn-without-stopping",
    quote:
      "Right Turn Permitted Without Stopping: This sign may appear " +
      "below a stop sign. Traffic turning right may turn without " +
      "stopping. Other traffic must stop and yield right of way.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 8)",
    url: HANDBOOK_URL + "#page=16",
  },
  {
    key: "right-turns",
    quote:
      "Right Turns: Get as near as you can to the right curb or " +
      "edge of the road. Just before entering the intersection, " +
      "look to the left, to the front, to the right and to the left " +
      "again for traffic.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 39)",
    url: HANDBOOK_URL + "#page=47",
  },
  {
    key: "road-rage",
    quote:
      "If you see an aggressive driver, stay out of the way. Do not " +
      "challenge them by going faster or trying to out-drive them.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 81)",
    url: HANDBOOK_URL + "#page=89",
  },
  {
    key: "roundabout-ahead-sign",
    quote: "Roundabout Ahead: There is a roundabout intersection ahead.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 12)",
    url: HANDBOOK_URL + "#page=20",
  },
  {
    key: "roundabout-approach",
    quote:
      "Approach: Slow down as you approach the roundabout. Look for " +
      "signs to determine where your exit is located.",
    source: HANDBOOK,
    section: "Turns & Intersections - Roundabouts (page 43)",
    url: HANDBOOK_URL + "#page=51",
  },
  {
    key: "roundabout-direction",
    quote:
      "Traffic moves in one direction, counterclockwise, around the " +
      "center island.",
    source: HANDBOOK,
    section: "Turns & Intersections - Roundabouts (page 43)",
    url: HANDBOOK_URL + "#page=51",
  },
  {
    key: "roundabout-do-not-pass",
    quote:
      "Do Not Pass: Do not attempt to overtake or pass any " +
      "vehicles, especially large trucks and trailers within the " +
      "roundabout. Trucks may need to straddle both lanes. It is " +
      "illegal to pass or drive beside a truck within the " +
      "roundabout.",
    source: HANDBOOK,
    section: "Turns & Intersections - Roundabouts (page 44)",
    url: HANDBOOK_URL + "#page=52",
  },
  {
    key: "roundabout-emergency",
    quote:
      "Do not enter a roundabout when emergency vehicles are " +
      "approaching. Pull over to the right. Allow other vehicles to " +
      "clear the intersection so the emergency vehicles can move " +
      "through the roundabout.",
    source: HANDBOOK,
    section: "Turns & Intersections - Roundabouts (page 44)",
    url: HANDBOOK_URL + "#page=52",
  },
  {
    key: "roundabout-emergency-exit",
    quote:
      "Never stop while inside the roundabout. Instead, move " +
      "through and exit the roundabout. Once you exit, pull over to " +
      "the right shoulder and allow emergency vehicles to pass.",
    source: HANDBOOK,
    section: "Turns & Intersections - Roundabouts (page 44)",
    url: HANDBOOK_URL + "#page=52",
  },
  {
    key: "roundabout-enter-yield",
    quote:
      "Enter: Before you enter the roundabout, you must yield to " +
      "traffic inside as well as exiting the roundabout. Wait for a " +
      "gap and merge into traffic. Be prepared to stop if " +
      "necessary.",
    source: HANDBOOK,
    section: "Turns & Intersections - Roundabouts (page 43)",
    url: HANDBOOK_URL + "#page=51",
  },
  {
    key: "roundabout-exit-signal",
    quote:
      "Exit: Indicate your plan to exit using your right turn " +
      "signal. Watch for pedestrians in the crosswalk and be " +
      "prepared to stop.",
    source: HANDBOOK,
    section: "Turns & Intersections - Roundabouts (page 43)",
    url: HANDBOOK_URL + "#page=51",
  },
  {
    key: "roundabout-lane-choice",
    quote:
      "Lane Choice: Prior to entering the roundabout, pay close " +
      "attention to exit and lane use signs, along with pavement " +
      "markings. Enter the roundabout using the appropriate lane " +
      "for your exit. Maintain your lane position until you exit. " +
      "Avoid lane changes while inside the roundabout, if possible.",
    source: HANDBOOK,
    section: "Turns & Intersections - Roundabouts (page 44)",
    url: HANDBOOK_URL + "#page=52",
  },
  {
    key: "roundabout-no-pass-bike",
    quote:
      "Allow people riding bicycles that have merged into traffic " +
      "the full travel lane. Do not pass a person riding a bicycle " +
      "within the roundabout.",
    source: HANDBOOK,
    section: "Turns & Intersections - Roundabouts (page 43)",
    url: HANDBOOK_URL + "#page=51",
  },
  {
    key: "route-signs",
    quote:
      "Route signs show you which route you are on and if the road " +
      "is an interstate, U.S. route, or state highway.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 13)",
    url: HANDBOOK_URL + "#page=21",
  },
  {
    key: "safety-belts",
    quote:
      "Safety belt use is mandatory in Oregon for all drivers and " +
      "passengers in all available seating positions. A properly " +
      "worn safety belt reduces the chance of injury in a " +
      "collision. Do not leave slack in the lap or shoulder portion " +
      "of the belt. Never put the shoulder strap under your arm or " +
      "behind your back.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Defensive Driving (page 73)",
    url: HANDBOOK_URL + "#page=81",
  },
  {
    key: "safety-corridor-sign",
    quote:
      "Safety corridors are designated stretches of highway with " +
      "more fatal and serious injury collisions than the statewide " +
      "average. Turn on your lights for safety.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 13)",
    url: HANDBOOK_URL + "#page=21",
  },
  {
    key: "safety-island-exception",
    quote:
      "You are not required to stop if the pedestrian is in a " +
      "crosswalk on the other side of a safety island.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 47)",
    url: HANDBOOK_URL + "#page=55",
  },
  {
    key: "scanning-ahead",
    quote:
      "Scanning means taking in the entire scene, including the " +
      "sides of the road. Scanning the road ahead and to the sides " +
      "helps you see pedestrians ahead, potential hazards, vehicles " +
      "that may enter your path, or signs routing you to another " +
      "street or road.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 30)",
    url: HANDBOOK_URL + "#page=38",
  },
  {
    key: "school-crossing-guard",
    quote:
      "Stop and yield to children when they enter the crosswalk or " +
      "if a school crossing guard signals you to do so. Remain " +
      "stopped until the children clear the crosswalk.",
    source: HANDBOOK,
    section: "Sharing the Road - School Zones (page 50)",
    url: HANDBOOK_URL + "#page=58",
  },
  {
    key: "school-enrollment",
    quote:
      "If you are under 18 years of age and applying for a " +
      "first-time Oregon driving privilege, a parent or legal " +
      "guardian must certify that you are enrolled or attending " +
      "school. If you are no longer in school, you must present a " +
      "high school diploma or General Education Development (GED) " +
      "certificate.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 89)",
    url: HANDBOOK_URL + "#page=97",
  },
  {
    key: "school-flashing-sign",
    quote:
      "Flashing School Speed Limit Sign: Any time a yellow light on " +
      "a school speed sign is flashing indicates that children are " +
      "arriving at or leaving school.",
    source: HANDBOOK,
    section: "Sharing the Road - School Zones (page 49)",
    url: HANDBOOK_URL + "#page=57",
  },
  {
    key: "school-hours-sign",
    quote:
      "School Hours Speed Limit Sign: Between the hours of 7 a.m. " +
      "and 5 p.m. on a day school is in session. If you are unsure " +
      "whether or not it is a school day, slow down to 20 mph.",
    source: HANDBOOK,
    section: "Sharing the Road - School Zones (page 49)",
    url: HANDBOOK_URL + "#page=57",
  },
  {
    key: "school-speed-zone-20",
    quote:
      "A school speed zone is an area where a reduced speed of 20 " +
      "mph applies and is defined by school speed signs. The school " +
      "speed zone begins at the SCHOOL SPEED LIMIT 20 sign and ends " +
      "at the END SCHOOL ZONE sign or at another posted speed sign.",
    source: HANDBOOK,
    section: "Sharing the Road - School Zones (page 49)",
    url: HANDBOOK_URL + "#page=57",
  },
  {
    key: "school-zone-definition",
    quote:
      "A school zone is a section of road adjacent to a school or a " +
      "school crosswalk where signs designate a school zone.",
    source: HANDBOOK,
    section: "Sharing the Road - School Zones (page 49)",
    url: HANDBOOK_URL + "#page=57",
  },
  {
    key: "school-zone-sign-five-sided",
    quote:
      "This five-sided sign marks the beginning of school zones and " +
      "warns you about school crossings. These signs will be a " +
      "yellow color. Actively look for children and be ready to " +
      "stop.",
    source: HANDBOOK,
    section: "Sharing the Road - School Zones (page 49)",
    url: HANDBOOK_URL + "#page=57",
  },
  {
    key: "sharrow",
    quote:
      "A sharrow indicates that the lane is shared and people " +
      "riding bicycles may be in the road. It is indicated by two " +
      "chevrons above a bicycle symbol painted on the road.",
    source: HANDBOOK,
    section: "Sharing the Road - Bicycles (page 51)",
    url: HANDBOOK_URL + "#page=59",
  },
  {
    key: "side-cushion-parked-cars",
    quote:
      "Keep extra space between your vehicle and parked cars by " +
      "moving away from them without leaving your lane. A vehicle " +
      "door may open in your path or someone may step out of a " +
      "vehicle or from between parked vehicles.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 28)",
    url: HANDBOOK_URL + "#page=36",
  },
  {
    key: "side-road-sign",
    quote:
      "Side Road: A \"T\" intersection is ahead. Traffic may enter " +
      "the road from the left or right.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 11)",
    url: HANDBOOK_URL + "#page=19",
  },
  {
    key: "sidewalk-stop",
    quote:
      "If you cross a sidewalk, such as when entering or leaving a " +
      "parking lot, alley or driveway, stop before reaching the " +
      "sidewalk and yield to pedestrians and people riding " +
      "bicycles.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 47)",
    url: HANDBOOK_URL + "#page=55",
  },
  {
    key: "signal-100-feet",
    quote:
      "If your vehicle is moving in traffic, use your turn signal " +
      "at least 100 feet before the turn or lane change. When you " +
      "are parked at a curb and about to reenter traffic, use a " +
      "signal long enough to alert traffic that you are moving into " +
      "the lane.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turn Signals (page 38)",
    url: HANDBOOK_URL + "#page=46",
  },
  {
    key: "signal-ahead-sign",
    quote:
      "Signal Ahead: A traffic signal is ahead. Slow down and be " +
      "ready to stop.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 12)",
    url: HANDBOOK_URL + "#page=20",
  },
  {
    key: "signal-required-moves",
    quote:
      "You must signal before you turn, change lanes, exit a " +
      "roundabout, or pull away from a curb.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turn Signals (page 38)",
    url: HANDBOOK_URL + "#page=46",
  },
  {
    key: "signs-color-shape",
    quote:
      "Signs often use symbols or pictures rather than words. Each " +
      "type of sign has a special color and shape to help you " +
      "easily recognize the sign at a glance.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 7)",
    url: HANDBOOK_URL + "#page=15",
  },
  {
    key: "skid-steer",
    quote:
      "Steer in the direction you want the vehicle to go. As soon " +
      "as the vehicle begins to straighten out, turn the steering " +
      "wheel back the other way. If you do not do this, your " +
      "vehicle may swing around in the other direction and you " +
      "could start a new skid.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 79)",
    url: HANDBOOK_URL + "#page=87",
  },
  {
    key: "skidding",
    quote:
      "Stay off the brakes. Until the vehicle slows, your brakes " +
      "will not be effective.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 79)",
    url: HANDBOOK_URL + "#page=87",
  },
  {
    key: "slippery-when-wet-sign",
    quote: "Slippery When Wet: The pavement is unusually slick when wet.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 12)",
    url: HANDBOOK_URL + "#page=20",
  },
  {
    key: "slow-drivers-pull-off",
    quote:
      "Watch for congestion behind you if you drive slower than the " +
      "designated speed. Pull off the road at the first safe area " +
      "and let the traffic behind you pass.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 21)",
    url: HANDBOOK_URL + "#page=29",
  },
  {
    key: "slow-drivers-right",
    quote:
      "If you drive slower than the normal speed of traffic, you " +
      "must use the right lane or drive as closely as possible to " +
      "the right curb or edge of the road, unless you are preparing " +
      "to make a left turn.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 21)",
    url: HANDBOOK_URL + "#page=29",
  },
  {
    key: "slow-moving-emblem",
    quote:
      "Slow moving vehicles, such as farm equipment, must display " +
      "the SLOW MOVING VEHICLE emblem when using a public highway. " +
      "The emblem contains a reflective, red border and a " +
      "fluorescent orange center. Be prepared to slow down or " +
      "adjust your position when you see this sign.",
    source: HANDBOOK,
    section: "Sharing the Road - Other Vehicles (page 56)",
    url: HANDBOOK_URL + "#page=64",
  },
  {
    key: "snow-ice-cruise",
    quote:
      "Drive at slower speeds and leave more room between your " +
      "vehicle and the vehicle ahead. Keep windows clear of snow, " +
      "ice and fog, and do not use cruise control.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 78)",
    url: HANDBOOK_URL + "#page=86",
  },
  {
    key: "solid-white-line",
    quote:
      "Solid white line: Used for an edge or fog line to help " +
      "drivers to stay on the road.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 23)",
    url: HANDBOOK_URL + "#page=31",
  },
  {
    key: "solid-yellow-edge",
    quote:
      "Solid yellow line: Marks the left edge of one-way roads and " +
      "ramps.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 22)",
    url: HANDBOOK_URL + "#page=30",
  },
  {
    key: "space-behind-tailgating",
    quote:
      "If a vehicle behind you is following too closely and there " +
      "is a right lane, move over to the right. If you can't move " +
      "over, 2026-2027 Oregon Driver Manual | 29 slowly reduce your " +
      "speed. This may encourage the vehicle to pass you or to stop " +
      "tailgating.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 28)",
    url: HANDBOOK_URL + "#page=36",
  },
  {
    key: "space-cushion",
    quote:
      "The only way you can be sure you have enough time to react " +
      "is by leaving plenty of space between your vehicle and the " +
      "vehicles around you. That space becomes a \"space cushion.\" " +
      "You should try to keep a cushion of space ahead, to each " +
      "side and behind you.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 26)",
    url: HANDBOOK_URL + "#page=34",
  },
  {
    key: "speed-limit-definition",
    quote:
      "A speed limit is the maximum speed considered safe for the " +
      "area under ideal driving conditions.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 19)",
    url: HANDBOOK_URL + "#page=27",
  },
  {
    key: "speed-limit-sign",
    quote:
      "Speed Limit: This indicates the maximum speed in miles per " +
      "hour. Signs may be electronic and may change based on " +
      "current conditions.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 8)",
    url: HANDBOOK_URL + "#page=16",
  },
  {
    key: "speeding-up-to-avoid",
    quote:
      "Speeding up: Sometimes it is best to speed up to avoid a " +
      "collision. This may happen when another vehicle is about to " +
      "hit you from the side or from behind and there is room ahead " +
      "of you to get out of danger.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Defensive Driving (page 74)",
    url: HANDBOOK_URL + "#page=82",
  },
  {
    key: "statutory-speed-25-55",
    quote:
      "25 Miles Per Hour In residential districts. In public parks. " +
      "On ocean shores, if vehicles are permitted. 55 Miles Per " +
      "Hour On all roads and highways not meeting any other " +
      "definition unless otherwise posted.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 19)",
    url: HANDBOOK_URL + "#page=27",
  },
  {
    key: "statutory-speed-limits",
    quote:
      "The following speed limits are set in law for the specified " +
      "areas, whether posted or not. They apply unless a different " +
      "speed is posted. 15 Miles Per Hour When driving in alleys. " +
      "Narrow residential areas. 20 Miles Per Hour In any business " +
      "district. Within a school speed zone.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 19)",
    url: HANDBOOK_URL + "#page=27",
  },
  {
    key: "steady-green",
    quote:
      "Steady Circular Green: A green signal means all " +
      "movements-straight ahead, left or right turns-are permitted, " +
      "unless prohibited by a sign. Left turns must first yield to " +
      "pedestrians and oncoming traffic. Right turns must first " +
      "yield to pedestrians.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Traffic Signals (page 16)",
    url: HANDBOOK_URL + "#page=24",
  },
  {
    key: "steady-red",
    quote:
      "Steady Circular Red: A steady red signal means stop and " +
      "remain stopped until the signal changes.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Traffic Signals (page 15)",
    url: HANDBOOK_URL + "#page=23",
  },
  {
    key: "steady-yellow",
    quote:
      "Steady Circular Yellow: A steady yellow signal warns you " +
      "that the signal is about to turn red. Stop before entering " +
      "the intersection. If you cannot stop safely, drive carefully " +
      "through it.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Traffic Signals (page 15)",
    url: HANDBOOK_URL + "#page=23",
  },
  {
    key: "stop-ahead-sign",
    quote:
      "Stop Ahead: There is a stop sign ahead. Slow down and " +
      "prepare to stop.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 11)",
    url: HANDBOOK_URL + "#page=19",
  },
  {
    key: "stop-behind-see-tires",
    quote:
      "When stopping behind another vehicle, make sure you can see " +
      "where the rear tires of the vehicle in front meet the road. " +
      "After traffic starts to move, return to a safe following " +
      "distance.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 27)",
    url: HANDBOOK_URL + "#page=35",
  },
  {
    key: "stop-for-pedestrians",
    quote:
      "You must stop for pedestrians crossing the road at any " +
      "marked or unmarked crosswalk. A pedestrian is crossing the " +
      "road when any part or extension (cane, wheelchair, bicycle, " +
      "etc.) of the pedestrian moves onto the road.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 46)",
    url: HANDBOOK_URL + "#page=54",
  },
  {
    key: "stop-from-driveway",
    quote:
      "Stop before you enter or cross a road from an alley, " +
      "driveway or parking lot not controlled by signs or signals. " +
      "Yield to approaching vehicles and pedestrians.",
    source: HANDBOOK,
    section: "Lane Travel (page 18)",
    url: HANDBOOK_URL + "#page=26",
  },
  {
    key: "stop-here-for-pedestrians-sign",
    quote:
      "Stop Here for Pedestrians: This sign may appear near a " +
      "crosswalk. Stop at the stop line when a pedestrian is in the " +
      "crosswalk.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 9)",
    url: HANDBOOK_URL + "#page=17",
  },
  {
    key: "stop-line-marking",
    quote:
      "Stop line: A solid white line across your lane to show the " +
      "point at which you are required to stop.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 25)",
    url: HANDBOOK_URL + "#page=33",
  },
  {
    key: "stop-position-intersection",
    quote:
      "At an intersection with a stop sign, steady red signal or " +
      "flashing red signal, you must stop before the marked stop " +
      "line or crosswalk, if there is one. If there is no stop line " +
      "or crosswalk, stop before the unmarked crossing area before " +
      "entering the intersection",
    source: HANDBOOK,
    section: "Turns & Intersections - Intersections (page 42)",
    url: HANDBOOK_URL + "#page=50",
  },
  {
    key: "stop-sign-octagon",
    quote:
      "Stop - Octagon: This sign means you must come to a complete " +
      "stop. Yield to other vehicles and stop and stay stopped for " +
      "pedestrians crossing in marked or unmarked crosswalks. When " +
      "it is safe, you may enter the intersection.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 7)",
    url: HANDBOOK_URL + "#page=15",
  },
  {
    key: "stopping-distance-60",
    quote:
      "At 60 mph, the distance traveled from the point you " +
      "recognize a hazard ahead and apply the brakes, to where your " +
      "vehicle comes to a stop is greater than the length of a " +
      "football field.",
    source: HANDBOOK,
    section: "Lane Travel - Maintaining a Space Cushion (page 29)",
    url: HANDBOOK_URL + "#page=37",
  },
  {
    key: "streetcar-braking",
    quote:
      "Streetcars and trains cannot stop quickly. Avoid braking " +
      "suddenly or performing unpredictable moves in front of or " +
      "around them.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 66)",
    url: HANDBOOK_URL + "#page=74",
  },
  {
    key: "streetcar-go-first",
    quote:
      "Always let streetcars and trains go first. Do not try to " +
      "pass a streetcar or train, unless it is safe to do so.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 65)",
    url: HANDBOOK_URL + "#page=73",
  },
  {
    key: "streetcar-parking",
    quote:
      "Never park on streetcar or train tracks. Park behind the " +
      "solid white line separating the parking area from the track. " +
      "If there is no white line, park as close to the curb as " +
      "possible away from the rails.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 65)",
    url: HANDBOOK_URL + "#page=73",
  },
  {
    key: "streetcar-stopped",
    quote:
      "If a streetcar or train stops to pick up or drop off people, " +
      "stay behind it until it moves again or the people are safely " +
      "away.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 65)",
    url: HANDBOOK_URL + "#page=73",
  },
  {
    key: "streetcar-turn",
    quote:
      "Never turn in front of a streetcar or train traveling in the " +
      "same direction as you from an adjacent lane, even if the " +
      "streetcar or train is stopped.",
    source: HANDBOOK,
    section: "Railroad Crossings, Light Rail & Street Cars (page 66)",
    url: HANDBOOK_URL + "#page=74",
  },
  {
    key: "studded-tires-season",
    quote:
      "Studded tires are generally allowed only from November 1 " +
      "through March 31 in Oregon. Because of the damage caused by " +
      "studded tires, drivers are encouraged to use alternates such " +
      "as chains or other traction tires.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 79)",
    url: HANDBOOK_URL + "#page=87",
  },
  {
    key: "supervised-hours",
    quote:
      "You must have 100 hours of supervised driving experience or " +
      "50 hours of supervised driving experience and have taken an " +
      "ODOT-approved traffic safety education course. DMV must " +
      "receive proof of course completion.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 90)",
    url: HANDBOOK_URL + "#page=98",
  },
  {
    key: "supervised-hours-who",
    quote:
      "Your driving experience only counts if supervised by someone " +
      "at least 21 years of age who has had valid driving " +
      "privileges for at least 3 years.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 90)",
    url: HANDBOOK_URL + "#page=98",
  },
  {
    key: "t-intersection-yield",
    quote:
      "If you are the driver on a road that ends at a \"T\" " +
      "intersection with no signs or signals, you must yield to " +
      "drivers on the through road.",
    source: HANDBOOK,
    section: "Turns & Intersections - Intersections (page 42)",
    url: HANDBOOK_URL + "#page=50",
  },
  {
    key: "test-cheating",
    quote:
      "If it is determined that you are cheating, you will fail " +
      "your test. You will not be allowed to test again for 90 " +
      "days. The following is considered cheating: talking, writing " +
      "or note taking, cell phone use, operation of any electronic " +
      "devices, or allowing someone else to take a test for you.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 2)",
    url: HANDBOOK_URL + "#page=10",
  },
  {
    key: "test-retake-same-day",
    quote:
      "If you fail a knowledge test, you may test again the same " +
      "day, depending on the DMV office testing resource " +
      "availability.",
    source: HANDBOOK,
    section: "Other Important Information - How to Apply (page 2)",
    url: HANDBOOK_URL + "#page=10",
  },
  {
    key: "tow-one-trailer",
    quote:
      "Oregon law allows you to tow a maximum of one boat, general " +
      "utility trailer, or other vehicle behind a passenger or " +
      "recreational vehicle. You cannot tow a second trailer or " +
      "vehicle.",
    source: HANDBOOK,
    section: "Lane Travel - Freeway Driving (page 36)",
    url: HANDBOOK_URL + "#page=44",
  },
  {
    key: "towing-pull-off",
    quote:
      "If traffic is stacking up behind you, pull off at the first " +
      "safe turnout to let the traffic pass. Use the right lane on " +
      "roads with two or more lanes of traffic going in the same " +
      "direction.",
    source: HANDBOOK,
    section: "Lane Travel - Freeway Driving (page 35)",
    url: HANDBOOK_URL + "#page=43",
  },
  {
    key: "traction-tires",
    quote:
      "\"Traction tires\" are studded tires, retractable studded " +
      "tires or other tires that meet the tire industry definition " +
      "as suitable for use in severe snow conditions. Tires " +
      "designated by the tire industry display a mountain/snowflake " +
      "emblem on the tire sidewall",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 79)",
    url: HANDBOOK_URL + "#page=87",
  },
  {
    key: "trailer-passengers",
    quote:
      "It is against the law to allow passengers to ride in any " +
      "type of trailer, except a commercial bus trailer, an " +
      "independentlysteered trailer, or a trailer towed with a " +
      "fifth-wheel device.",
    source: HANDBOOK,
    section: "Lane Travel - Freeway Driving (page 36)",
    url: HANDBOOK_URL + "#page=44",
  },
  {
    key: "transit-bus-yield",
    quote:
      "Vehicles approaching from the rear must yield when a bus " +
      "driver signals to re-enter a traffic lane and there is an " +
      "electric sign flashing \"yield\" on the back of the bus.",
    source: HANDBOOK,
    section: "Sharing the Road - School, Places of Worship or Worker and Public Transit Buses (page 56)",
    url: HANDBOOK_URL + "#page=64",
  },
  {
    key: "transit-only-lane-sign",
    quote:
      "Right Lane Transit Only: These signs are used in Transit " +
      "Only lanes. Only transit vehicles (or people biking, if " +
      "indicated on the sign) may continue straight through an " +
      "intersection.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 8)",
    url: HANDBOOK_URL + "#page=16",
  },
  {
    key: "transit-right-turns-permitted",
    quote:
      "Right Turns Permitted: This sign indicates you can briefly " +
      "use the transit lane to turn into a driveway, turn at the " +
      "next intersection, or pull over to park along the curb where " +
      "allowed. Always yield to transit vehicles and people riding " +
      "bicycles in transit lanes. Merge into the lane behind them " +
      "after they pass.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 8)",
    url: HANDBOOK_URL + "#page=16",
  },
  {
    key: "turn-across-bike-lane",
    quote:
      "You may turn across a bicycle lane, but do not move into a " +
      "bicycle lane in preparation for a turn.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 39)",
    url: HANDBOOK_URL + "#page=47",
  },
  {
    key: "turn-rules-everywhere",
    quote:
      "Rules for turning apply at all locations, such as driveways " +
      "and alleys, not just at intersections. Check for traffic " +
      "behind and beside you well before you turn. Turn smoothly " +
      "and at a lower speed.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 39)",
    url: HANDBOOK_URL + "#page=47",
  },
  {
    key: "turning-general-rule",
    quote:
      "The general rule for turning is to turn from the nearest " +
      "lane in the direction you are traveling to the nearest lane " +
      "in the direction you want to go. Avoid swinging wide or " +
      "changing lanes while turning.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 41)",
    url: HANDBOOK_URL + "#page=49",
  },
  {
    key: "turning-quickly",
    quote:
      "Turning quickly: In most cases, you can turn the vehicle " +
      "more quickly than you can stop it. Scanning the area ahead " +
      "will help you identify potential escape routes. If you will " +
      "not stop in time to avoid a collision, turn away from it.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Defensive Driving (page 74)",
    url: HANDBOOK_URL + "#page=82",
  },
  {
    key: "turns-on-red",
    quote:
      "You are allowed to make the following turns on red after " +
      "coming to a complete stop unless a sign or police officer " +
      "states otherwise. When entering a two-way road, you may turn " +
      "right. When entering a one-way road, you may turn right or " +
      "left in the direction of the one-way road.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Traffic Signals (page 15)",
    url: HANDBOOK_URL + "#page=23",
  },
  {
    key: "two-way-left-turn-lane",
    quote:
      "If a two-way left turn lane has been provided, do not make a " +
      "left turn from any other lane. It is illegal to travel in a " +
      "two-way left turn lane, so enter the lane just before you " +
      "want to make the turn. Wait in the left turn lane until " +
      "traffic clears and you can complete the turn.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 23)",
    url: HANDBOOK_URL + "#page=31",
  },
  {
    key: "two-way-stop-left-turn",
    quote:
      "At intersections with two-way stop signs across from each " +
      "other, the driver turning left should yield the right of way " +
      "to approaching or oncoming traffic going straight.",
    source: HANDBOOK,
    section: "Turns & Intersections - Intersections (page 42)",
    url: HANDBOOK_URL + "#page=50",
  },
  {
    key: "two-way-to-one-way",
    quote:
      "Left or Right Turn: Two-Way Road to One-Way Road: Approach " +
      "the turn in the traffic lane that is nearest to the " +
      "direction of the turn. Turn into the nearest lane for " +
      "traffic on the road you are entering. You may make this turn " +
      "against a red light after stopping and yielding to traffic " +
      "and pedestrians.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 40)",
    url: HANDBOOK_URL + "#page=48",
  },
  {
    key: "two-way-traffic-sign",
    quote:
      "Two-Way Traffic Ahead: The one-way road joins a two-way road " +
      "ahead. You will be facing oncoming traffic.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 11)",
    url: HANDBOOK_URL + "#page=19",
  },
  {
    key: "u-turn-visibility",
    quote:
      "Any location within city limits where your vehicle cannot be " +
      "seen by traffic coming from either direction within 500 " +
      "feet. Any location outside city limits where your vehicle " +
      "cannot be seen by traffic coming from either direction " +
      "within 1,000 feet.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 41)",
    url: HANDBOOK_URL + "#page=49",
  },
  {
    key: "u-turns-prohibited",
    quote:
      "U-turns are prohibited in these locations: Intersections " +
      "controlled by a traffic signal, unless a sign permits the " +
      "turn. Between intersections in a city.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 41)",
    url: HANDBOOK_URL + "#page=49",
  },
  {
    key: "unattended-vehicle",
    quote:
      "If you must leave your vehicle unattended, turn off the " +
      "engine, remove the key, set the brakes, and turn on your " +
      "hazard lights.",
    source: HANDBOOK,
    section: "Parking & Stopping (page 71)",
    url: HANDBOOK_URL + "#page=79",
  },
  {
    key: "unattended-vehicle-note",
    quote:
      "If you hit an unoccupied vehicle, try to find the owner. If " +
      "you cannot find the owner, leave a note with your name and " +
      "address, along with a brief description of what happened.",
    source: HANDBOOK,
    section: "Other Important Information - Traffic Collisions (page 94)",
    url: HANDBOOK_URL + "#page=102",
  },
  {
    key: "uncontrolled-intersection",
    quote:
      "As you approach an intersection with no signs or signals, " +
      "first look to the left to make sure cross traffic is " +
      "yielding right of way, then look to the front and to the " +
      "right. Be prepared to stop. Yield the right of way to any " +
      "vehicle in the intersection or approaching from your right.",
    source: HANDBOOK,
    section: "Turns & Intersections - Intersections (page 42)",
    url: HANDBOOK_URL + "#page=50",
  },
  {
    key: "under-21-zero-tolerance",
    quote:
      "If you are under 21, you will fail the test if you have a " +
      "blood alcohol concentration of any amount. Oregon has a zero " +
      "tolerance law.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Dangerous Driving Behaviors (page 83)",
    url: HANDBOOK_URL + "#page=91",
  },
  {
    key: "uninsured-motorist",
    quote:
      "Uninsured Motorist Coverage: $25,000 per person; $50,000 per " +
      "collision for bodily injury.",
    source: HANDBOOK,
    section: "Other Important Information - Mandatory Insurance (page 93)",
    url: HANDBOOK_URL + "#page=101",
  },
  {
    key: "unmarked-crosswalk",
    quote:
      "There is a crosswalk at every intersection, even if it is " +
      "not marked by painted lines. To determine where an unmarked " +
      "crosswalk is, imagine that a sidewalk or shoulder at the " +
      "corner extends to the other side. An unmarked crosswalk is " +
      "at least six feet wide and exists even if there is no " +
      "sidewalk or shoulder.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 47)",
    url: HANDBOOK_URL + "#page=55",
  },
  {
    key: "variable-advisory-speed",
    quote:
      "Variable Advisory Speed: Variable advisory speed signs are " +
      "yellow and say, \"advisory speed.\" These signs recommend a " +
      "speed based on driving conditions like heavy traffic, poor " +
      "weather or a slippery road (such as heavy rain, fog, ice or " +
      "snow). These signs are turned on and off as needed.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 20)",
    url: HANDBOOK_URL + "#page=28",
  },
  {
    key: "variable-speed-limit",
    quote:
      "Variable Speed Limit: Variable speed limit signs are black " +
      "and white and say, \"speed limit.\" These signs change the " +
      "speed limit based on driving conditions like heavy traffic, " +
      "poor weather or a slippery road (such as heavy rain, fog, " +
      "ice or snow). Police may enforce these signs like any other " +
      "speed limit sign.",
    source: HANDBOOK,
    section: "Lane Travel - Speed Regulations (page 20)",
    url: HANDBOOK_URL + "#page=28",
  },
  {
    key: "vulnerable-users",
    quote:
      "Pedestrians, people riding bicycles and motorcycles, highway " +
      "workers and persons using a mode of transportation such as a " +
      "skateboard or scooter in a public way, crosswalk or shoulder " +
      "of the highway are all vulnerable users of the road.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 46)",
    url: HANDBOOK_URL + "#page=54",
  },
  {
    key: "vulnerable-why",
    quote:
      "These users of the road are vulnerable because they can be " +
      "hard to see and may not have protection against injury in a " +
      "collision.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 46)",
    url: HANDBOOK_URL + "#page=54",
  },
  {
    key: "warning-signs-yellow",
    quote:
      "Warning signs are yellow and alert you to known possible " +
      "hazards or a change in road conditions ahead. As a driver, " +
      "you are ultimately responsible for recognizing and reacting " +
      "correctly to changing conditions, signed or not.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 10)",
    url: HANDBOOK_URL + "#page=18",
  },
  {
    key: "wet-brakes",
    quote:
      "If you drive through water and the brakes get wet, gently " +
      "apply the brakes while driving slowly until they begin to " +
      "respond. It is best to do this as soon as you can after " +
      "driving through water.",
    source: HANDBOOK,
    section: "Safe & Responsible Driving - Hazardous Conditions (page 78)",
    url: HANDBOOK_URL + "#page=86",
  },
  {
    key: "white-cane-guide-dog",
    quote:
      "You must give the right of way to a pedestrian with limited " +
      "vision or any pedestrian who is blind or deaf and blind " +
      "carrying a white cane or using a guide dog. Stop if the " +
      "person is about to cross or is crossing the road. Remain " +
      "stopped until the person has crossed the entire road, even " +
      "if you have a green light.",
    source: HANDBOOK,
    section: "Sharing the Road - Pedestrians (page 48)",
    url: HANDBOOK_URL + "#page=56",
  },
  {
    key: "white-markings",
    quote:
      "White Markings are used to separate lanes of traffic flowing " +
      "in the same direction and mark the right edge of travel " +
      "lanes. These are also used for crosswalks, stop lines, " +
      "symbols, and words.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 23)",
    url: HANDBOOK_URL + "#page=31",
  },
  {
    key: "wide-solid-white",
    quote:
      "Wide solid white line: Used to direct traffic into specific " +
      "lanes, such as turn lanes, and to separate bike lanes from " +
      "other traffic lanes. Crossing a wide solid white line is " +
      "permitted but discouraged.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 24)",
    url: HANDBOOK_URL + "#page=32",
  },
  {
    key: "winding-road-sign",
    quote: "Winding Road: The road contains a series of turns or curves.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 11)",
    url: HANDBOOK_URL + "#page=19",
  },
  {
    key: "work-zone-construction-vehicles",
    quote:
      "Do not follow construction vehicles when in a work zone. " +
      "Construction vehicles may enter the road and cause slowing " +
      "in a work zone.",
    source: HANDBOOK,
    section: "Sharing the Road - Work Zones (page 60)",
    url: HANDBOOK_URL + "#page=68",
  },
  {
    key: "work-zone-flaggers",
    quote:
      "Automated flagger devices have red and yellow lights and a " +
      "stop arm. Stop when the red light is on and the arm is down. " +
      "Proceed when the yellow light is flashing and the arm is up.",
    source: HANDBOOK,
    section: "Sharing the Road - Work Zones (page 59)",
    url: HANDBOOK_URL + "#page=67",
  },
  {
    key: "work-zone-orange",
    quote:
      "Work Zones are defined by orange traffic control devices. " +
      "When entering a work zone you need to be alert to changes in " +
      "the roadway. Workers and construction equipment may be close " +
      "to traffic. Traffic fines are doubled in all work zones. You " +
      "are expected to yield to workers.",
    source: HANDBOOK,
    section: "Sharing the Road - Work Zones (page 59)",
    url: HANDBOOK_URL + "#page=67",
  },
  {
    key: "work-zone-speed",
    quote:
      "The temporary speed posted in a work zone applies at all " +
      "times, even if workers are not visible. The reduced speed " +
      "limit applies until you see an End Work Zone Speed Limit " +
      "sign or another posted speed limit sign.",
    source: HANDBOOK,
    section: "Sharing the Road - Work Zones (page 59)",
    url: HANDBOOK_URL + "#page=67",
  },
  {
    key: "worship-worker-buses",
    quote:
      "Flashing amber and red lights are permitted on places of " +
      "worship and worker transport buses. If the bus turns on " +
      "flashing amber or red lights, you must treat these lights " +
      "the same as you would a school bus.",
    source: HANDBOOK,
    section: "Sharing the Road - School, Places of Worship or Worker and Public Transit Buses (page 56)",
    url: HANDBOOK_URL + "#page=64",
  },
  {
    key: "wrong-lane-to-turn",
    quote:
      "If you are at an intersection and in the wrong lane to turn, " +
      "go to the next intersection. It is safer to drive around the " +
      "block than it is to risk a collision due to a last-minute " +
      "lane or direction change.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 39)",
    url: HANDBOOK_URL + "#page=47",
  },
  {
    key: "wrong-way-ramp",
    quote:
      "Immediately pull off to the side of the ramp and stop. Turn " +
      "on your hazard lights to warn other vehicles. Cautiously " +
      "turn around or back off the ramp.",
    source: HANDBOOK,
    section: "Lane Travel - Freeway Driving (page 34)",
    url: HANDBOOK_URL + "#page=42",
  },
  {
    key: "yellow-arrow",
    quote:
      "Yellow Arrow: A steady yellow arrow warns you that the " +
      "signal is about to turn red. Stop before entering the " +
      "intersection, or if you cannot stop safely, drive carefully " +
      "through it.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Traffic Signals (page 16)",
    url: HANDBOOK_URL + "#page=24",
  },
  {
    key: "yellow-diagonal-stripes",
    quote:
      "Yellow diagonal stripes: Used within a painted median to " +
      "inform you of fixed objects in the road ahead or areas where " +
      "vehicle use is not allowed. It is illegal to drive in or " +
      "make a turn across these stripes.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 23)",
    url: HANDBOOK_URL + "#page=31",
  },
  {
    key: "yellow-markings",
    quote:
      "Yellow Markings are used to separate traffic moving in " +
      "opposite directions (center line) and to mark the left edge " +
      "of one-way roads and ramps, two-way left turn lanes, and " +
      "painted medians.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 22)",
    url: HANDBOOK_URL + "#page=30",
  },
  {
    key: "yield-bikes-before-turn",
    quote:
      "You must yield to people riding bicycles in a bicycle lane " +
      "or on a sidewalk. Check the crosswalk and stop for " +
      "pedestrians.",
    source: HANDBOOK,
    section: "Turns & Intersections - Turns (page 39)",
    url: HANDBOOK_URL + "#page=47",
  },
  {
    key: "yield-bikes-sidewalk",
    quote:
      "You must yield to people riding bicycles in a bike lane or " +
      "on a sidewalk before you turn across the lane or sidewalk.",
    source: HANDBOOK,
    section: "Sharing the Road - Bicycles (page 50)",
    url: HANDBOOK_URL + "#page=58",
  },
  {
    key: "yield-emergency-vehicles",
    quote:
      "You must yield right of way to emergency vehicles, such as " +
      "fire trucks, police vehicles, and ambulances, when they " +
      "approach from any direction using a light or siren.",
    source: HANDBOOK,
    section: "Sharing the Road - Emergency Vehicles (page 58)",
    url: HANDBOOK_URL + "#page=66",
  },
  {
    key: "yield-line-marking",
    quote:
      "Yield line: A row of triangles in your lane, pointing toward " +
      "your vehicle to indicate the point at which you are required " +
      "to yield.",
    source: HANDBOOK,
    section: "Lane Travel - Pavement Markings (page 25)",
    url: HANDBOOK_URL + "#page=33",
  },
  {
    key: "yield-sign-triangle",
    quote:
      "Yield - Triangle: This sign means you should reduce speed " +
      "and yield right of way. If needed, stop the same as you " +
      "would for a stop sign.",
    source: HANDBOOK,
    section: "Signs & Traffic Signals - Signs (page 7)",
    url: HANDBOOK_URL + "#page=15",
  },
  {
    key: "yield-vulnerable-users",
    quote:
      "Always yield to vulnerable road users, such as pedestrians " +
      "and people riding bicycles, as well as traffic in the " +
      "intersection when making an allowed turn.",
    source: HANDBOOK,
    section: "Turns & Intersections - Intersections (page 42)",
    url: HANDBOOK_URL + "#page=50",
  },
  {
    key: "yielding-definition",
    quote:
      "Yielding means you must slow down or stop to allow another " +
      "vehicle or pedestrian to continue safely.",
    source: HANDBOOK,
    section: "Lane Travel (page 18)",
    url: HANDBOOK_URL + "#page=26",
  },
];
