import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Oklahoma bank. Three kinds of source sit
// behind them, and each is here for a reason:
//
//  - The Oklahoma Driver Manual, published by Service Oklahoma. The PDF's own
//    last page reads "Updated 11/24/25" and page 73 carries a 2025 Service
//    Oklahoma copyright line; there is no other edition label on the book. It
//    runs 74 pages and is unusually complete for a state handbook - it prints
//    the statutory speed table, the whole thirteen-item unlawful-parking list
//    and the point schedule, which many states leave to the statute. Most of
//    what is quoted below comes from it, and the page number in each `section`
//    is the printed page, which in this PDF is also the PDF page.
//  - Title 47 of the Oklahoma Statutes, Chapter 11 (Rules of the Road),
//    published by the Oklahoma State Courts Network. The manual states several
//    rules in loose everyday language - what a signal must be given before,
//    what a two-way left-turn lane may be used for, how far a caravan spaces
//    itself, what "left lane" actually forbids - and the statute is where the
//    operative wording lives. Where both say the same thing, the manual is
//    quoted; where only the statute states the number, the statute is.
//  - Three Service Oklahoma web pages: Learner Permit, Intermediate License
//    and Written Knowledge Test. The manual never states the written test's
//    length, pass mark or time limit, and it describes the graduated licence
//    in prose without ever printing the 180-day permit hold or the 50 hours of
//    supervised driving. Those pages carry all of it, and they are revised far
//    more often than the book.
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
// "PENALTIES FOR DRIVING WITH OUT A VALID LICENSE", its "con struction zones"
// in the speeding penalty, its "A child, at least four 4 years of age", and
// its "TRANSISTION AREA" on the work-zone diagram. Separately, page 16's
// liability box prints "$25,000 for injury or death of two or more persons"
// where page 72 correctly prints "$25,000 for injury or death of one person";
// the page 72 wording is the one quoted here and the one the questions use.

export const oklahomaExcerpts: HandbookExcerpt[] = [
  {
    key: "address-change-10-days",
    quote:
      "Required by Law-When you move, you must notify Service " +
      "Oklahoma within 10 days, either by reporting to your local " +
      "licensed operator, online at our website or by writing to:",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 2: Your Driver License Restrictions and Renewals - " +
      "Changing Your Name and Address (page 13)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=13",
  },
  {
    key: "address-suspension-notice",
    quote:
      "Failure to notify Service Oklahoma when you change your " +
      "name or address can result in the suspension of your " +
      "license without your receiving notice of the suspension.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 2: Your Driver License Restrictions and Renewals - " +
      "Changing Your Name and Address - The Law Says (page 13)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=13",
  },
  {
    key: "after-crash-steps",
    quote:
      "If you are involved in a collision that results in death, " +
      "injury or property damage, you must - Remain Calm. 1. Stop " +
      "and call 911 or local law enforcement. 2. Turn on hazard " +
      "lights.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Your Responsibilities after a " +
      "Crash (page 63)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=63",
  },
  {
    key: "alcohol-judgment",
    quote:
      "Alcohol puts good judgment on hold-you don't know when " +
      "you've had too much to drink until it's too late. By the " +
      "time you feel it, your judgment and coordination are " +
      "already impaired.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Alcohol - Why Drinking and Driving Is So " +
      "Dangerous (page 64)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=64",
  },
  {
    key: "all-way-plaque",
    quote:
      "Added below a stop sign, means all traffic approaching " +
      "this intersection must stop.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Regulatory Signs " +
      "- 4-Way or All-Way (page 19)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=19",
  },
  {
    key: "angle-parking-blocked-view",
    quote:
      "Look both ways and double-check because it's hard to see " +
      "oncoming traffic. Be especially careful if a truck or van " +
      "is parked beside you, blocking your view.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Angle Parking (page 46)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=46",
  },
  {
    key: "angle-parking-horn",
    quote:
      "Move back slowly. Be sure traffic is clear in the lane " +
      "where you're backing. ▶ Tap the horn to warn pedestrians " +
      "nearby.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Angle Parking (page 46)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=46",
  },
  {
    key: "animal-drawn",
    quote:
      "In some areas of Oklahoma, you may be sharing the road " +
      "with animal-drawn vehicles. They have the same rights to " +
      "use the road as a motor vehicle and must follow the same " +
      "rules of the road.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Slow-Moving Vehicles (page " +
      "58)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=58",
  },
  {
    key: "animals-dawn-dusk",
    quote:
      "Use caution when driving at dawn or dusk; this is when " +
      "animals are most active.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Animals (page 61)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=61",
  },
  {
    key: "animals-do-not-swerve",
    quote:
      "There may be a time when an animal suddenly runs in front " +
      "of your vehicle. DO NOT swerve to avoid hitting the " +
      "animal. This may result in a more serious crash than if " +
      "your vehicle collided with the animal.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Animals (page 61)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=61",
  },
  {
    key: "approach-speed-signals",
    quote:
      "Adjust your speed as you approach an intersection so that " +
      "you can slow down or stop if the light changes. Even " +
      "though you may have the green light, always put safety " +
      "first and yield the right-of-way if yielding will prevent " +
      "a collision, even if the other person is wrong.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signals " +
      "(page 26)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=26",
  },
  {
    key: "arm-signals",
    quote:
      "LEFT TURN Arm and hand extended straight out RIGHT TURN " +
      "Arm and hand pointed upward Extend your arm well out of " +
      "the window and make your signal clear. SLOW OR STOP Arm " +
      "and hand pointed down with palm to the rear",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Turning - Arm " +
      "Signals (page 36)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=36",
  },
  {
    key: "assured-clear-distance",
    quote:
      "No person shall drive any vehicle upon a highway at a " +
      "speed greater than will permit him to stop within the " +
      "assured clear distance ahead.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - The Basic Speed Rule - " +
      "The Law Says (page 40)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=40",
  },
  {
    key: "bac-005-evidence",
    quote:
      "An alcohol concentration more than 0.05 is relevant " +
      "evidence that the driver's ability to drive was impaired.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Criminal Evidence and Penalties (page 65)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=65",
  },
  {
    key: "bac-005-penalty",
    quote:
      "BAC OVER 0.05 BUT LESS THAN 0.08 On conviction, a fine of " +
      "$100-$500, up to 6 months in jail or both",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Penalties for Impaired Driving (page 65)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=65",
  },
  {
    key: "bac-08-revocation",
    quote:
      "If the BAC level is 0.08 or more (or any measurable amount " +
      "if you are under 21 years old), your driver license will " +
      "be revoked-even if you are not convicted in court of " +
      "driving under the influence (DUI).",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Oklahoma Implied Consent Laws (page 65)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=65",
  },
  {
    key: "backing-check-behind",
    quote:
      "Always check behind your car for bikes, tricycles and even " +
      "small children BEFORE you get into your car.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Backing - Safety Tip " +
      "(page 39)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=39",
  },
  {
    key: "backing-never-intersection",
    quote:
      "Never back into an intersection to turn around. It's much " +
      "safer to drive around the block.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Backing (page 39)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=39",
  },
  {
    key: "backing-rear-window",
    quote:
      "Place your right arm on the back of the seat and look " +
      "directly through the rear window. Never use your rearview " +
      "mirror for backing up.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Backing (page 39)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=39",
  },
  {
    key: "backing-slowly",
    quote:
      "Accelerate gently and smoothly, keeping your speed slow. " +
      "Your vehicle is much harder to steer while you are backing " +
      "up.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Backing (page 39)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=39",
  },
  {
    key: "basic-speed-not-a-limit",
    quote:
      "The Basic Speed Rule does not set an exact speed limit but " +
      "means that the speed you may drive is limited by the " +
      "current conditions.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - The Basic Speed Rule " +
      "(page 40)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=40",
  },
  {
    key: "basic-speed-rule",
    quote:
      "Consider all the conditions that affect your driving, " +
      "drive at a speed that is safe for those conditions and be " +
      "able to stop without hitting anyone.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - The Basic Speed Rule " +
      "(page 40)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=40",
  },
  {
    key: "being-passed",
    quote:
      "Stay in your lane and move right if being passed on the " +
      "left. 3. Don't increase your speed.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Passing - When " +
      "Someone Is Passing You (page 35)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=35",
  },
  {
    key: "bicycle-full-lane",
    quote:
      "Bicycle riders are required to ride as far right in the " +
      "lane as possible only when the lane can be safely shared " +
      "by a car and a bicycle, side by side. Even then, there are " +
      "certain times when a bike can take the full lane.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Bicycles (page 52)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=52",
  },
  {
    key: "bicycle-narrow-street",
    quote:
      "NEVER pass a bicycle if the street is too narrow. Wait " +
      "until there is enough room to let you pass safely.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Bicycles (page 51)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=51",
  },
  {
    key: "bicycle-no-pass-between",
    quote:
      "Avoid passing between a bicyclist and oncoming vehicles on " +
      "a two-lane road. Slow down and allow vehicles to pass.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Bicycles (page 51)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=51",
  },
  {
    key: "bicycle-red-light",
    quote:
      "Cyclists must stop at a red light before entering the " +
      "intersection. ▶ They must yield to any oncoming traffic " +
      "that poses an immediate hazard. ▶ If it's safe, cyclists " +
      "can proceed through the red light.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Bicycle Safety Rules for " +
      "Stop Signs and Red Traffic Signals (page 52)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=52",
  },
  {
    key: "bicycle-right-turn-merge",
    quote:
      "Merge with bicycle traffic when preparing for a right " +
      "turn. Don't turn directly across the path of a bicyclist.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Bicycles (page 51)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=51",
  },
  {
    key: "bicycle-same-rights",
    quote:
      "Bicyclists have the same rights and responsibilities on " +
      "the streets that you do and in most cases, they must share " +
      "the lane.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Bicycles (page 51)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=51",
  },
  {
    key: "bicycle-stop-sign",
    quote:
      "Cyclists must slow down when approaching a stop sign. ▶ If " +
      "there's a risk of danger, cyclists must stop before " +
      "entering the intersection.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Bicycle Safety Rules for " +
      "Stop Signs and Red Traffic Signals (page 52)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=52",
  },
  {
    key: "bicycle-three-feet",
    quote:
      "When overtaking and passing a bicycle proceeding in the " +
      "same direction, the person driving a motor vehicle shall " +
      "exercise due care by leaving a safe distance between the " +
      "motor vehicle and the bicycle of not less than 3 feet " +
      "until the motor vehicle is safely past the overtaken " +
      "bicycle",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Bicycles (page 51)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=51",
  },
  {
    key: "black-ice",
    quote:
      "You must be extremely careful on ice, especially on \"black " +
      "ice,\" a clear icy coating on the road surface that you " +
      "can't see.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Stopping in Icy and " +
      "Rainy Conditions (page 43)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=43",
  },
  {
    key: "blind-cane",
    quote:
      "Blind pedestrians will normally have a guide dog or will " +
      "be using a cane. The cane may be all white, white with a " +
      "red tip or chrome.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - You Must Yield " +
      "to Blind Persons (page 28)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=28",
  },
  {
    key: "blowout-braking",
    quote:
      "Flat tire or blowout-Take your foot off the gas pedal and " +
      "apply your brakes cautiously. NEVER brake suddenly.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Braking Under " +
      "Emergency Conditions (page 43)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=43",
  },
  {
    key: "braking-loose-surfaces",
    quote:
      "On ice, snow, sleet, gravel, sand and other loose " +
      "surfaces-Tap the brakes slightly, about one second apart. " +
      "Braking suddenly can make the car skid. (CAUTION: Never " +
      "tap antilock brakes.)",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Braking Under " +
      "Emergency Conditions (page 43)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=43",
  },
  {
    key: "cannabis-detectable",
    quote:
      "Although the state has legalized cannabis for some medical " +
      "purposes, it impairs driving performance, and it is " +
      "illegal for anyone to drive with any detectable level of " +
      "cannabis in their system.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Other Drugs and Driving (page 66)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=66",
  },
  {
    key: "car-ahead-signals-left",
    quote:
      "If the car ahead of you signals for a left turn, slow down " +
      "and prepare to stop.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - How to Avoid Rear-End " +
      "Collisions (page 45)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=45",
  },
  {
    key: "caravan-200-feet",
    quote:
      "If you are traveling in a caravan or motorcade (such as a " +
      "funeral procession) outside of a business or residential " +
      "area, leave at least 200 feet between each vehicle so " +
      "other cars or trucks can enter the line safely.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Following (page 44)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=44",
  },
  {
    key: "carbon-monoxide",
    quote:
      "Carbon monoxide is most likely to leak into your car when " +
      "the heater is running, when your exhaust system is not " +
      "working properly or when you're in heavy traffic and " +
      "breathing exhaust fumes from other cars.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Avoid Carbon Monoxide Poisoning " +
      "(page 60)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=60",
  },
  {
    key: "carbon-monoxide-symptoms",
    quote:
      "Symptoms of carbon monoxide poisoning: You feel drowsy " +
      "and/or dizzy. Lights seem brighter. The skin has a blue " +
      "color; lips turn blue. Your forehead tightens.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Avoid Carbon Monoxide Poisoning " +
      "(page 60)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=60",
  },
  {
    key: "careful-and-prudent",
    quote:
      "No motor vehicle shall be driven at a speed greater than " +
      "is careful and prudent and not greater than or less than " +
      "is reasonable and proper, having due regard to the " +
      "traffic, surface and width of the highway and of any other " +
      "conditions then existing.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - The Basic Speed Rule - " +
      "The Law Says (page 40)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=40",
  },
  {
    key: "center-turn-lane",
    quote:
      "Drivers from either direction may use the center lane for " +
      "left turns. Enter this center lane only to make a left " +
      "turn. You must not pass in this lane.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Lane Usage and " +
      "Maneuvers - 3 Lanes (page 32)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=32",
  },
  {
    key: "changing-lanes",
    quote:
      "Never change lanes until you are sure it's safe. ▶ Watch " +
      "for clearance ahead and behind. ▶ Check your rearview " +
      "mirrors. ▶ Signal your intention to change lanes. ▶ Look " +
      "over your shoulder in the direction you will be moving. ▶ " +
      "Look behind you to both sides again. ▶ Check your blind " +
      "spots.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Changing Lanes (page " +
      "33)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=33",
  },
  {
    key: "child-4-to-8",
    quote:
      "A child at least four 4 years of age but younger than 8 " +
      "years of age, if not taller than 4 feet 9 inches in " +
      "height, shall be properly secured by use of a child " +
      "passenger restraint system or a seat belt.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 3: Requirements for Oklahoma Drivers - Child " +
      "Passenger Restraint System (page 17)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=17",
  },
  {
    key: "child-back-seat",
    quote:
      "If your car is equipped with an airbag on the passenger " +
      "side, the Highway Safety Administration recommends putting " +
      "children under 12 in the back seat.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 3: Requirements for Oklahoma Drivers - Child " +
      "Passenger Restraint System (page 17)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=17",
  },
  {
    key: "child-rear-facing",
    quote:
      "The child passenger restraint system must be rear-facing " +
      "until the child reaches 2 years of age or until the child " +
      "reaches the weight or height limit of the system as " +
      "allowed by the manufacturer.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 3: Requirements for Oklahoma Drivers - Child " +
      "Passenger Restraint System (page 17)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=17",
  },
  {
    key: "child-restraint-under-8",
    quote:
      "Every driver, when transporting a child under 8 years of " +
      "age in a motor vehicle operated on the roadways, streets " +
      "or highways of this state, must provide for the protection " +
      "of said child by properly using a child passenger " +
      "restraint system.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 3: Requirements for Oklahoma Drivers - Child " +
      "Passenger Restraint System (page 17)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=17",
  },
  {
    key: "cities-set-limits",
    quote:
      "Under state law, cities and towns can set their own speed " +
      "limits. These limits will change according to the zones. " +
      "Watch carefully and obey speed limit signs in business, " +
      "residential and school zones.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - Speed Limits (page 41)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=41",
  },
  {
    key: "coasting-illegal",
    quote:
      "Coasting on a downgrade with the clutch engaged or the " +
      "vehicle in neutral is a violation",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Using a Standard Transmission " +
      "(page 59)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=59",
  },
  {
    key: "conviction-without-test",
    quote:
      "Observations and information gathered by the arresting " +
      "officer are also evidence that may be used in court and " +
      "can result in a conviction without a BAC test.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Criminal Evidence and Penalties (page 65)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=65",
  },
  {
    key: "crash-do-not-blame",
    quote:
      "DO NOT blame other people or accept blame, and DO NOT " +
      "discuss the accident.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Your Responsibilities after a " +
      "Crash (page 63)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=63",
  },
  {
    key: "crash-injured-person",
    quote:
      "If anyone is hurt, you must get help immediately but DO " +
      "NOT try to move an injured person unless it is a " +
      "life-or-death necessity.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Your Responsibilities after a " +
      "Crash (page 63)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=63",
  },
  {
    key: "crash-move-vehicle",
    quote:
      "If the crash is minor and your vehicle is blocking the " +
      "flow of traffic, you must move it or have it moved.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Your Responsibilities after a " +
      "Crash (page 63)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=63",
  },
  {
    key: "crash-parked-car",
    quote:
      "If the collision involves a parked car or property and you " +
      "can't locate the owner, leave the driver's and vehicle " +
      "owner's name and address, and provide the information from " +
      "the insurance verification form on the damaged property " +
      "where the owner will find it.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Your Responsibilities after a " +
      "Crash (page 63)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=63",
  },
  {
    key: "crossbuck-yield",
    quote:
      "Crossbuck signs are posted at most crossings. Always slow " +
      "down, look, listen and be prepared to yield the " +
      "right-of-way to an oncoming train.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Railroad Warning " +
      "Signs - Railroad Crossbucks (page 22)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=22",
  },
  {
    key: "crossing-intersection-slow",
    quote:
      "Always slow down, look both ways and look left again " +
      "before you enter an intersection. Slow down before you " +
      "enter, then increase your speed until you've cleared the " +
      "intersection. DO NOT slow down while you're turning or " +
      "crossing!",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Crossing an " +
      "Intersection (page 30)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=30",
  },
  {
    key: "cushion-of-safety",
    quote:
      "You should always give yourself a \"cushion of safety,\" " +
      "having open space in front, behind and on the sides. Avoid " +
      "following too closely. Stay far enough behind the next " +
      "vehicle that, if it should stop suddenly, you can stop " +
      "safely.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Following (page 44)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=44",
  },
  {
    key: "defensive-driving-points",
    quote:
      "Two (2) points are deducted for successful completion of a " +
      "Service Oklahoma-approved Driver Compliance or Defensive " +
      "Driving Course. Credit for completing the course can be " +
      "given once every 24 months. The point total cannot go " +
      "below zero.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 13: Violations and Penalties - Point Reduction " +
      "(page 72)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=72",
  },
  {
    key: "diagonal-stripes",
    quote:
      "Stripes sloping downward to the right mean bear to the " +
      "right. Stripes sloping downward to the left mean bear to " +
      "the left. The diagonal stripes on a warning sign or " +
      "barricade show the direction in which the traffic is to " +
      "pass.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Warning Signs - " +
      "Black on a Yellow Background (page 22)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=22",
  },
  {
    key: "disabled-parking-space",
    quote:
      "Do not park or stop your vehicle in a parking space " +
      "reserved for disabled people unless you have a disabled " +
      "license plate or disability placard.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Regulatory Signs " +
      "- International Symbols for the Disabled (page 20)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=20",
  },
  {
    key: "disabled-placard",
    quote:
      "A car displaying the physically disabled parking permit " +
      "has special parking privileges throughout the state and " +
      "may park in spaces reserved for disabled parking.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Disabled Parking Placard (page 49)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=49",
  },
  {
    key: "distraction-categories",
    quote:
      "There are three main categories of driver distraction: " +
      "Visual: Taking your eyes off the road Manual: Taking your " +
      "hands off the steering wheel Cognitive: Thinking about " +
      "anything other than driving",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Car Phone Safety (page 61)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=61",
  },
  {
    key: "divided-highway-ends",
    quote:
      "Divided highway ends ahead. Be careful as you approach the " +
      "point where two-way begins again.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Warning Signs - " +
      "Black on a Yellow Background (page 21)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=21",
  },
  {
    key: "dont-block-intersection",
    quote:
      "If traffic is stopped and is blocking an intersection, " +
      "stop before reaching the crosswalk and wait for the " +
      "traffic to move.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Crossing an " +
      "Intersection (page 30)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=30",
  },
  {
    key: "drive-test-no-pets",
    quote:
      "No pets or additional people can be in the car with you " +
      "and the examiner.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "What to Expect - Driving Test (page 9)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=9",
  },
  {
    key: "drive-test-retake",
    quote:
      "You can re-take the drive test up to three times, each " +
      "time at least one day apart or as instructed by the " +
      "examiner.<br>\\n<br>\\nIf you fail the third drive test, you " +
      "will have to wait 30 days before taking the test a fourth " +
      "time.",
    source:
      "Service Oklahoma - Learner Permit (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Learner Permit - Frequently Asked Questions",
    url:
      "https://oklahoma.gov/service/all-pages/learner-permit.html",
  },
  {
    key: "drive-test-skills",
    quote:
      "Properly perform basic maneuvers such as turning right and " +
      "left, backing, parking on a hill, parallel parking, etc. " +
      "Use signals and drive in the proper lane. Understand and " +
      "obey traffic signs, markings and signals. Properly apply " +
      "the rules of right-of-way.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "What to Expect - Driving Test (page 9)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=9",
  },
  {
    key: "drive-test-slick-roads",
    quote:
      "Skills tests will not be conducted when roads are " +
      "considered by the examiner to be slick or hazardous.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "What to Expect - Driving Test (page 9)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=9",
  },
  {
    key: "driving-record",
    quote:
      "Some collisions, any Oklahoma court conviction for a " +
      "traffic violation or any out-of-state court conviction " +
      "will be put on your driving record.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 13: Violations and Penalties - Driver's Record " +
      "(page 70)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=70",
  },
  {
    key: "dui-extra-costs",
    quote:
      "Additional costs commonly associated with an " +
      "alcohol-related arrest include: Lawyer's fees Lost time " +
      "off work for court and alcohol education programs " +
      "Alternative transportation costs while your license is " +
      "suspended",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Criminal Evidence and Penalties (page 66)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=66",
  },
  {
    key: "dui-first-offense",
    quote:
      "First offense a misdemeanor imprisonment in jail for not " +
      "less than ten days nor more than 1 year and a fine of not " +
      "more than $1,000",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Penalties for DUI - BAC .08 or More (page 65)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=65",
  },
  {
    key: "dui-revocation-lengths",
    quote:
      "For 180 days on the first revocation For 1 year, if there " +
      "was a prior DUI or drug-related revocation within 10 years " +
      "For 2 years, if there were two or more DUI or drug-related " +
      "revocations within 10 years",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Criminal Evidence and Penalties (page 66)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=66",
  },
  {
    key: "dui-second-offense",
    quote:
      "Second offense within 10 years a felony imprisonment for " +
      "not less than 1 year, not to exceed 5 years and a fine of " +
      "not more than $2,500",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Penalties for DUI - BAC .08 or More (page 65)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=65",
  },
  {
    key: "expressway-breakdown",
    quote:
      "If you have a breakdown, an emergency or must stop for " +
      "some reason, signal, then pull off to the extreme right " +
      "shoulder away from moving traffic where it's safe. Turn on " +
      "your emergency flashers.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Expressway Driving - " +
      "Stopping (page 34)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=34",
  },
  {
    key: "expressway-exit-signal",
    quote:
      "Signal right at least 100 feet before the exit. ▶ Slow " +
      "down in the deceleration lane or exit ramp and keep " +
      "slowing down until you reach the posted speed limit.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Leaving the " +
      "Expressway (page 34)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=34",
  },
  {
    key: "expressway-follow-3s",
    quote:
      "Stay 3 seconds behind the vehicle in front of you. Allow 4 " +
      "seconds in bad weather. ▶ Watch 15-20 seconds ahead for " +
      "cars braking, entering and exiting.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Expressway Driving - " +
      "Avoid Collisions (page 34)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=34",
  },
  {
    key: "expressway-lane-use",
    quote:
      "Use the right-hand lane when you're driving slower than " +
      "the other traffic. ▶ Use the middle or left-hand lane if " +
      "you are traveling faster than the other traffic.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Expressway Driving - " +
      "Use the Proper Lane (page 33)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=33",
  },
  {
    key: "expressway-limited-access",
    quote:
      "\"Limited access\" means that you enter or leave the roadway " +
      "only at entrances and exits, called interchanges, without " +
      "ever crossing the path of other traffic.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Expressway Driving " +
      "(page 33)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=33",
  },
  {
    key: "expressway-no-packs",
    quote:
      "Do not travel alongside other vehicles at the same speed. " +
      "Avoid cars moving in packs. Stay out of other drivers' " +
      "blind spots.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Expressway Driving - " +
      "Use the Proper Lane (page 33)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=33",
  },
  {
    key: "expressway-no-uturn",
    quote:
      "Never turn around on the expressway. Do not, under any " +
      "conditions, cross the median or divider to turn your car " +
      "around on a controlled-access highway.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Expressway Driving - " +
      "Avoid Collisions (page 34)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=34",
  },
  {
    key: "expressway-speed-range",
    quote:
      "Drive between the minimum (usually 40 mph) and maximum " +
      "(55-75 mph) speed limits. Driving too slowly is against " +
      "the law because it's dangerous.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Expressway Driving - " +
      "Speed (page 33)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=33",
  },
  {
    key: "expressway-yield-entering",
    quote:
      "You must yield to vehicles already on the expressway. ▶ " +
      "Enter in the acceleration lane and stay to the right.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Entering the " +
      "Expressway (page 34)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=34",
  },
  {
    key: "failing-drive-test",
    quote:
      "You can fail the driving test for too many errors, " +
      "dangerous driving, law violations, traffic collisions or " +
      "refusing to perform a maneuver.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "Table 2 - Testing Requirements for Class D Licenses (page " +
      "10)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=10",
  },
  {
    key: "fake-id-felony",
    quote:
      "EVERY TIME YOU USE, CARRY, BORROW OR BUY A FAKE ID: It's a " +
      "felony You could spend 7 years in prison You could face a " +
      "$10,000 fine",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 13: Violations and Penalties - Unlawful Use of " +
      "License and/or Identification Card (page 69)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=69",
  },
  {
    key: "farm-driving-permit",
    quote:
      "Effective November 1, 2023, teens aged 14 to 17 years old, " +
      "living or employed for compensation on a farm in the state " +
      "of Oklahoma, will be eligible to apply for a Farm Driving " +
      "Permit which allows them to operate any Class D motor " +
      "vehicle with restrictions.",
    source:
      "Service Oklahoma - Teen Driving (service.ok.gov, retrieved " +
      "2026-09-06)",
    section:
      "Teen Driving - Did You Know?",
    url:
      "https://oklahoma.gov/service/popular-services/teen-driving.html",
  },
  {
    key: "flagperson",
    quote:
      "FLAGPERSONS are used in cases of extreme hazards. They " +
      "stand in the road and wear orange hats and orange vests, " +
      "shirts or jackets. They hold red signs or flags to direct " +
      "traffic. The law demands that you obey them.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Construction and " +
      "Maintenance Signs - Flagpersons (page 24)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=24",
  },
  {
    key: "flashing-red-light",
    quote:
      "Used at dangerous intersections where the crossing traffic " +
      "may or may not stop. A flashing red light means the same " +
      "as a stop sign: You may go when it's safe to cross the " +
      "intersection.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signals - " +
      "Flashing Red Light (page 26)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=26",
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "Reduce speed and cautiously proceed with left turn after " +
      "yielding to oncoming traffic and pedestrians. Oncoming " +
      "traffic has the right-of-way.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signals - " +
      "Flashing Yellow Arrow (page 26)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=26",
  },
  {
    key: "flashing-yellow-light",
    quote:
      "Caution!-Slow down, look in both directions and drive " +
      "slowly and carefully through the intersection. Be prepared " +
      "to stop.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signals - " +
      "Flashing Yellow Light (page 26)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=26",
  },
  {
    key: "flood-buoyant",
    quote:
      "Most vehicles will float in just 2 feet (24 inches) of " +
      "water, even SUVs!",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Flood Dynamics (page 62)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=62",
  },
  {
    key: "flood-six-inches-feet",
    quote:
      "You can be knocked off your feet by 6 inches of " +
      "fast-moving water If you encounter a flooded roadway, TURN " +
      "AROUND, DON'T DROWN.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Flood Dynamics (page 63)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=63",
  },
  {
    key: "flood-swept-away",
    quote:
      "Cars can easily stall in the water and be carried away in " +
      "any current. Most vehicles will be swept away by less than " +
      "2 feet (24 inches) of running water. Do not try to cross a " +
      "flooded road or stream in your vehicle.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Flood Dynamics - Flood Safety " +
      "Rules (page 62)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=62",
  },
  {
    key: "flood-turn-around",
    quote:
      "Do not drive into or attempt to drive across flowing " +
      "water. Observe any water level indicators at low-water " +
      "crossings, remembering that 6 inches of water may be " +
      "enough to cause you to lose control of your vehicle.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Flood Dynamics (page 63)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=63",
  },
  {
    key: "following-a-truck",
    quote:
      "Following a truck-Trucks take longer to stop than cars " +
      "because of their size. But at higher speeds or on wet " +
      "pavement, they may have better traction and be able to " +
      "stop more quickly than a car.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Following (page 44)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=44",
  },
  {
    key: "following-four-seconds",
    quote:
      "In bad weather or poor road conditions, increase your " +
      "count to four seconds (one thousand four).",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Following (page 44)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=44",
  },
  {
    key: "following-three-second",
    quote:
      "Allow one car length for every 10 miles per hour of speed " +
      "OR ▶ Use the \"three-second rule\"-Select a fixed object, " +
      "such as a tree, roadside sign or utility pole, ahead of " +
      "the car in front of you.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Following (page 44)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=44",
  },
  {
    key: "four-second-count",
    quote:
      "You are too close if you pass the point before counting " +
      "four seconds. Always increase your distance on slick " +
      "roads, following large vehicles, motorcycles, night, fog " +
      "or bad weather.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Stopping Distances - " +
      "Safety Tip (page 42)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=42",
  },
  {
    key: "funeral-procession",
    quote:
      "Motorists must yield the right-of-way to a funeral " +
      "procession. When the funeral lead vehicle enters an " +
      "intersection, the remaining vehicles in the procession may " +
      "follow through the intersection regardless of any traffic " +
      "control devices.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - You Must Yield " +
      "to a Funeral Procession (page 28)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=28",
  },
  {
    key: "gdl-conviction-hold",
    quote:
      "You will remain at your current GDL level (learner or " +
      "intermediate) until 6 months from the date of conviction " +
      "has elapsed.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "New Graduated Driver License (GDL) (page 8)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=8",
  },
  {
    key: "gdl-four-phases",
    quote:
      "The Graduated Driver License (GDL) program gradually " +
      "phases in driving privileges for new teen drivers as they " +
      "gain experience behind the wheel. Learn about the four " +
      "levels of driving privileges.",
    source:
      "Service Oklahoma - Teen Driving (service.ok.gov, retrieved " +
      "2026-09-06)",
    section:
      "Teen Driving - The 4 Phases of the GDL Program",
    url:
      "https://oklahoma.gov/service/popular-services/teen-driving.html",
  },
  {
    key: "gdl-hours-restriction",
    quote:
      "House Bill 1599 requires teens to apply for the license " +
      "which restricts their driving time to the hours of 5 a.m. " +
      "to 10 p.m. with the exceptions for driving to work, " +
      "school, church or related activities or if a licensed " +
      "driver over 21 years of age is seated next to the " +
      "teenager.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "New Graduated Driver License (GDL) (page 8)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=8",
  },
  {
    key: "gdl-passenger-limit",
    quote:
      "The bill also prevents teenage drivers from chauffeuring " +
      "their friends around town, limiting teens with a " +
      "restricted license to one passenger unless all passengers " +
      "live in the same household",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "New Graduated Driver License (GDL) (page 8)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=8",
  },
  {
    key: "gdl-restriction-t",
    quote:
      "Restriction \"T\" = Graduated driver license Driving allowed " +
      "from 5 a.m. to 10 p.m. Unless for activities related to " +
      "school, church or work or any time accompanied by licensed " +
      "driver at least 21 years old.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 2: Your Driver License Restrictions and Renewals - " +
      "Restriction Codes (page 14)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=14",
  },
  {
    key: "green-arrow",
    quote:
      "When the green arrow is lit, you may turn in the direction " +
      "of the arrow, even when the red light is still on. If you " +
      "are in a turning-only lane, you must wait for the arrow.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signals - " +
      "Green Arrows (page 26)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=26",
  },
  {
    key: "green-light",
    quote:
      "Go-You can cross the intersection or turn except where " +
      "turns are not allowed. Be sure the intersection is clear " +
      "before you start and watch out for drivers who try to race " +
      "through the intersection to beat a red light.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signals - " +
      "Green Light (page 26)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=26",
  },
  {
    key: "guide-signs",
    quote:
      "GUIDE SIGNS give you travel information. They identify " +
      "highways, show distances, mark exits, point to parks and " +
      "recreation areas and more.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Guide Signs - " +
      "Green, White or Brown (page 25)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=25",
  },
  {
    key: "headlight-times",
    quote:
      "Use your headlights: When a road sign states that " +
      "headlights must be used. Beginning 30 minutes after sunset " +
      "and 30 minutes before sunrise.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Using High and Low Headlight " +
      "Beams Properly (page 59)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=59",
  },
  {
    key: "high-beam-distances",
    quote:
      "Dim your high beam headlights to low beams within 1000 " +
      "feet of an oncoming vehicle or within 600 feet of the " +
      "vehicle you are following.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Using High and Low Headlight " +
      "Beams Properly (page 59)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=59",
  },
  {
    key: "hill-park-six-inches",
    quote:
      "Parallel park as in the previous section, but stop within " +
      "six inches of the curb. ▶ Brace the wheels against the " +
      "curb, as described in graphic on the next page. ▶ Set the " +
      "parking brake. ▶ Put the car in the proper gear, reverse, " +
      "low gear or \"park.\" ▶ Turn off the switch.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Parking and Starting on a Hill - To " +
      "Park on a Hill (page 47)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=47",
  },
  {
    key: "hill-parking-downhill",
    quote:
      "Facing downhill-To brace your car when parking downhill, " +
      "turn your wheels toward the curb and drive forward slowly " +
      "until the wheel is against the curb (see diagram). Shift " +
      "into reverse or \"park.\"",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Parking and Starting on a Hill (page " +
      "48)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=48",
  },
  {
    key: "hill-parking-no-curb",
    quote:
      "Facing uphill, without a curb-Turn your wheels sharply to " +
      "the right. Shift as above. If the car should roll, it will " +
      "roll away from the traffic flow.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Parking and Starting on a Hill (page " +
      "48)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=48",
  },
  {
    key: "hill-parking-uphill-curb",
    quote:
      "Facing uphill, against a curb-Turn your wheels sharply, " +
      "away from the curb and back up slowly until the rear of " +
      "the tire is against the curb. Shift into low gear or " +
      "\"park.\"",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Parking and Starting on a Hill (page " +
      "48)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=48",
  },
  {
    key: "hill-start",
    quote:
      "It will be your responsibility to wait for an opening and " +
      "move safely into the proper lane, as the drivers already " +
      "traveling have the right-of-way.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Parking and Starting on a Hill - To " +
      "Start on a Hill (page 48)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=48",
  },
  {
    key: "hydroplaning",
    quote:
      "Hydroplaning means that your tires lose contact with the " +
      "road surface and ride on the film of water. Hydroplaning " +
      "reduces traction and increases stopping distance. Turning " +
      "is more hazardous. Wide tires can hydroplane even at " +
      "reduced speeds.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Following - " +
      "Hydroplaning (page 44)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=44",
  },
  {
    key: "implied-consent-agreed",
    quote:
      "The very act of driving or being in actual physical " +
      "control of a motor vehicle means that you have agreed to " +
      "take one or more tests to determine your blood alcohol " +
      "content (BAC). This law applies to everyone, residents and " +
      "non-residents alike.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Oklahoma Implied Consent Laws (page 65)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=65",
  },
  {
    key: "implied-consent-period",
    quote:
      "If your license is revoked under the Oklahoma Implied " +
      "Consent Law, the revocation period will be from 180 days " +
      "to 2 years, depending on your previous driving record.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Oklahoma Implied Consent Laws - The Law Says " +
      "(page 65)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=65",
  },
  {
    key: "implied-consent-refusal",
    quote:
      "Refusal to take the test upon request by a law enforcement " +
      "officer will result in an automatic revocation of your " +
      "driving privilege, even if you have not been drinking.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Oklahoma Implied Consent Laws (page 65)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=65",
  },
  {
    key: "insurance-minimums",
    quote:
      "$25,000 for injury or death of one person $50,000 for " +
      "injury or death of two or more persons $25,000 for " +
      "property damage All the minimum liability limits are per " +
      "accident.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 13: Violations and Penalties - Financial " +
      "Responsibility - Liability Insurance Requirements (page " +
      "72)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=72",
  },
  {
    key: "insurance-penalty",
    quote:
      "A fine of up to $250, 30 days in jail or both, PLUS " +
      "suspension of license and registration upon conviction of " +
      "failure to comply with the Compulsory Insurance Law or " +
      "failure to produce proof of insur ance to a law " +
      "enforcement officer upon request.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 13: Violations and Penalties - Financial " +
      "Responsibility - Penalty for Not Having Insurance (page " +
      "72)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=72",
  },
  {
    key: "insurance-penalty-ch3",
    quote:
      "A conviction of failure to comply with the Compulsory " +
      "Insurance Law or failure to produce proof of insurance to " +
      "a law enforcement officer or Service Oklahoma " +
      "representative upon request can result in- A fine of up to " +
      "$250.00, 30 days in jail or both Suspension of license and " +
      "registration.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 3: Requirements for Oklahoma Drivers - Financial " +
      "Responsibility - Penalty for Not Having Liability " +
      "Insurance (page 16)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=16",
  },
  {
    key: "insurance-show-officer",
    quote:
      "At the time of a collision or a traffic stop, the driver " +
      "must show a current security verification form (proof of " +
      "liability insurance) to the law enforcement officer.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 3: Requirements for Oklahoma Drivers - Financial " +
      "Responsibility and Compulsory Liability Insurance (page " +
      "16)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=16",
  },
  {
    key: "insurance-uninsured-collision",
    quote:
      "Service Oklahoma will suspend the driver license of the " +
      "uninsured driver and/ or owner of a vehicle involved in a " +
      "collision where there is any injury or property damage of " +
      "$500 or more.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 3: Requirements for Oklahoma Drivers - Financial " +
      "Responsibility and Compulsory Liability Insurance (page " +
      "16)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=16",
  },
  {
    key: "intermediate-eligibility",
    quote:
      "With Driver Education Completion: Must have held a Learner " +
      "Permit for 180 days and be at least 16 years old Without " +
      "Driver Education Completion: Must have held a Learner " +
      "Permit for 180 days and be at least 16 1/2 years old",
    source:
      "Service Oklahoma - Intermediate License (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Intermediate License - Eligibility",
    url:
      "https://oklahoma.gov/service/all-pages/intermediate-license.html",
  },
  {
    key: "intermediate-hours-50",
    quote:
      "Must have had at least 50 hours (10 hours at night) of " +
      "behind-the-wheel training from a licensed driver at least " +
      "21 years old and licensed for at least 2 years",
    source:
      "Service Oklahoma - Intermediate License (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Intermediate License - Eligibility",
    url:
      "https://oklahoma.gov/service/all-pages/intermediate-license.html",
  },
  {
    key: "intermediate-hours-limits",
    quote:
      "You can drive from 5:00 a.m. to 10:00 p.m. There are no " +
      "restrictions if: You are driving to and from activities " +
      "related to school, church, or work You are accompanied by " +
      "a licensed driver at least 21 years old sitting in the " +
      "front seat",
    source:
      "Service Oklahoma - Intermediate License (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Intermediate License - Driving Privileges",
    url:
      "https://oklahoma.gov/service/all-pages/intermediate-license.html",
  },
  {
    key: "intermediate-no-convictions",
    quote:
      "Must have no traffic convictions on driving record for 180 " +
      "days immediately preceding the drive test",
    source:
      "Service Oklahoma - Intermediate License (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Intermediate License - Eligibility",
    url:
      "https://oklahoma.gov/service/all-pages/intermediate-license.html",
  },
  {
    key: "intermediate-passengers",
    quote:
      "You can drive with: 1 passenger OR only household members " +
      "OR any passenger if accompanied by a licensed driver at " +
      "least 21 years old sitting in the front seat",
    source:
      "Service Oklahoma - Intermediate License (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Intermediate License - Passenger Limitations",
    url:
      "https://oklahoma.gov/service/all-pages/intermediate-license.html",
  },
  {
    key: "lane-control-signals",
    quote:
      "Yellow Clear the lane. If flashing, left turn permitted.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Lane Control " +
      "Signals (page 27)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=27",
  },
  {
    key: "lanes-unmarked",
    quote:
      "On dirt or gravel roads, some rural roads, private drives " +
      "and other roadways, the lanes may not be marked, but they " +
      "are there anyway. You are expected to always drive in the " +
      "proper lane, whether the lane is marked or not.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Lane Usage and " +
      "Maneuvers (page 32)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=32",
  },
  {
    key: "leave-space-for-lane-change",
    quote:
      "When a driver ahead of you signals a lane change, slow " +
      "down and leave space for the change.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Changing Lanes (page " +
      "33)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=33",
  },
  {
    key: "left-lane-passing",
    quote:
      "On a roadway that is divided into four or more lanes, a " +
      "vehicle cannot impede the normal flow of traffic by " +
      "driving in the left lane.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Passing (page 35)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=35",
  },
  {
    key: "left-turn-wheels-straight",
    quote:
      "Left turns-Don't turn the steering wheel to the left while " +
      "waiting for oncoming traffic to pass. If you are hit from " +
      "the rear while your wheels are turned, the impact can push " +
      "you right into oncoming cars.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Turning - Don't " +
      "(page 36)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=36",
  },
  {
    key: "licence-cancel-loan",
    quote:
      "Your ID card or driver license may be canceled if you: " +
      "Loan your license or identification card to any other " +
      "person or knowingly permit another to use it.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 13: Violations and Penalties - Unlawful Use of " +
      "License and/or Identification Card (page 69)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=69",
  },
  {
    key: "licence-expiration",
    quote:
      "Your license can be issued for either 4 or 8 years from " +
      "the month in which you paid your fee for your license. It " +
      "expires on the last day of the month.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 2: Your Driver License Restrictions and Renewals - " +
      "License Expiration and Renewal (page 13)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=13",
  },
  {
    key: "litter-barrel",
    quote:
      "Watch for the litter barrel sign. It's the only lawful " +
      "place on the highway where you can throw trash.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Service Signs - " +
      "Blue (page 25)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=25",
  },
  {
    key: "low-beams-fog",
    quote:
      "Use low beams where there are streetlights, fog, rain, " +
      "snow or adverse weather conditions.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Using High and Low Headlight " +
      "Beams Properly (page 59)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=59",
  },
  {
    key: "mandatory-revocation",
    quote:
      "State law requires that the driving privilege be revoked " +
      "(withdrawn) for 6 months to 3 years for a conviction of " +
      "any of the following: Manslaughter or negligent homicide " +
      "resulting from operating a motor vehicle.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 13: Violations and Penalties - Mandatory " +
      "Revocation of Your License (page 71)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=71",
  },
  {
    key: "merge-sign",
    quote:
      "Merge. Other traffic may be moving into your lane. Be " +
      "ready to change your speed and lane so other drivers can " +
      "merge safely.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Warning Signs - " +
      "Black on a Yellow Background (page 21)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=21",
  },
  {
    key: "mileposts",
    quote:
      "MILEPOSTS provide a means of identifying the location of " +
      "accidents, breakdowns or other emergencies. Mileposts mark " +
      "every mile on interstate highways starting at the state " +
      "line.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Guide Signs - " +
      "Mileposts (page 25)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=25",
  },
  {
    key: "mixing-drugs",
    quote:
      "Mixing drugs can be especially dangerous, because they " +
      "react with each other and multiply the harmful effects on " +
      "your concentration and coordination.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Drugs Affect Your Driving (page 64)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=64",
  },
  {
    key: "motorcycle-endorsement",
    quote:
      "All operators of motorcycles must have an M endorsement on " +
      "their driver license.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Motorcycles (page 53)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=53",
  },
  {
    key: "motorcycle-following",
    quote:
      "Follow at a distance-Allow at least a three-second " +
      "following distance so the cyclist has enough time to " +
      "maneuver or stop in an emergency.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Techniques for Sharing the " +
      "Road with Motorcycles (page 53)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=53",
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Motorcycles have the right to use the lane. Riders need " +
      "the lane's full width to respond to and handle hazards " +
      "such as potholes, shifting traffic blocking their view or " +
      "blocking them from being seen and strong winds or blasts " +
      "of air from passing vehicles.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Motorcycles (page 53)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=53",
  },
  {
    key: "motorcycle-hard-to-see",
    quote:
      "The profile of a motorcycle is narrow and the body is " +
      "short, making it harder to see and making it harder for a " +
      "driver to estimate its distance and speed.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Why Drivers Don't See " +
      "Motorcyclists (page 53)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=53",
  },
  {
    key: "motorcycle-intersections",
    quote:
      "At intersections, where most collisions and injuries " +
      "occur, wait until the rider's intentions are absolutely " +
      "clear (turning or going straight) before you move into the " +
      "path of travel.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Techniques for Sharing the " +
      "Road with Motorcycles (page 53)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=53",
  },
  {
    key: "motorcycle-turned-in-front",
    quote:
      "Research shows that two-thirds of car/motorcycle " +
      "collisions are caused not by the motorcyclist but by the " +
      "driver who turned in front of the motorcycle.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Motorcycles (page 53)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=53",
  },
  {
    key: "move-over-any-vehicle",
    quote:
      "You must move to the left lane or slow down for any " +
      "vehicle on the side of the highway. This includes " +
      "emergency vehicles, law enforcement, maintenance workers " +
      "or cars with their hazard lights flashing.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - You Must Always " +
      "Yield (page 29)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=29",
  },
  {
    key: "move-over-fine",
    quote:
      "the person shall be subject to a fine of: 1. One Thousand " +
      "Dollars ($1,000.00) for a first offense; and 2. Two " +
      "Thousand Five Hundred Dollars ($2,500.00) for a second " +
      "offense.",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Section 11-314 - " +
      "Bernardo-Mills Law",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=391386",
  },
  {
    key: "move-over-law",
    quote:
      "When approaching any stationary vehicles with FLASHING " +
      "LIGHTS pulled to the side of the road, drivers are " +
      "REQUIRED to move over a lane, if safe to do so, or slow " +
      "down and use caution.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Move Over Law or " +
      "Bernardo-Mills Law (page 30)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=30",
  },
  {
    key: "move-over-multilane",
    quote:
      "On a multi-lane road going in your direction: Move over to " +
      "a lane that isn't next to the stopped vehicle if it's safe " +
      "to do so. If you can't safely change lanes, slow down and " +
      "drive carefully.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Move Over Law or " +
      "Bernardo-Mills Law (page 30)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=30",
  },
  {
    key: "never-drive-into-water",
    quote:
      "Never drive into water crossing the roadway. You can't " +
      "judge the depth of the water or force and pull of the " +
      "flow.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Following - " +
      "Hydroplaning (page 44)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=44",
  },
  {
    key: "new-driver-probationary",
    quote:
      "A license issued to a person under 18 is considered " +
      "probationary.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "Table 2 - Testing Requirements for Class D Licenses (page " +
      "10)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=10",
  },
  {
    key: "night-no-sunglasses",
    quote:
      "Don't wear sunglasses or colored glasses when driving at " +
      "night or on dark days.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - Night Driving (page 41)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=41",
  },
  {
    key: "night-overdrive-lights",
    quote:
      "Don't overdrive your lights-adjust your speed so you can " +
      "stop within the distance you can see.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - Night Driving (page 41)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=41",
  },
  {
    key: "night-reduce-speed",
    quote:
      "You should reduce your speed at night and adjust to the " +
      "road and weather conditions.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - Night Driving (page 41)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=41",
  },
  {
    key: "no-licence-penalty",
    quote:
      "PENALTIES FOR DRIVING WITH OUT A VALID LICENSE On " +
      "conviction, a fine of up to $500 or 6 months in jail or " +
      "both.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 2: Your Driver License Restrictions and Renewals - " +
      "Penalties for Driving With out a Valid License (page 14)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=14",
  },
  {
    key: "no-pass-hills-curves",
    quote:
      "When the solid yellow line is in your lane, whether there " +
      "are two yellow lines or a single solid line and a dashed " +
      "line. ▶ On hills or curves, even if the road is not " +
      "marked.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Passing - No Passing " +
      "Zones (page 35)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=35",
  },
  {
    key: "no-speeding-to-pass",
    quote:
      "You may not exceed the speed limit to pass another " +
      "vehicle.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Passing (page 35)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=35",
  },
  {
    key: "obey-officer",
    quote:
      "You must obey traffic signals, except when an officer is " +
      "directing traffic. Then you must obey the traffic officer " +
      "at all times.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signals " +
      "(page 26)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=26",
  },
  {
    key: "one-way-turns",
    quote:
      "When you are turning on one-way or divided streets, always " +
      "turn from the lane nearest the curb. When driving " +
      "straight, you may drive in any lane, but the extreme right " +
      "or left lanes should be used for turning.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Turning on One-Way " +
      "Streets (page 38)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=38",
  },
  {
    key: "orange-work-zone",
    quote:
      "THE COLOR ORANGE tells you that you are nearing or in a " +
      "work zone. Signs, barricades and lanechanneling " +
      "devices-such as cones and barrels-are placed to direct you " +
      "through the work zone safely and protect workers and " +
      "flagpersons.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Construction and " +
      "Maintenance Signs - Orange (page 23)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=23",
  },
  {
    key: "otc-drugs-impair",
    quote:
      "But not everyone realizes that many prescription drugs and " +
      "even over-the-counter drugs (such as cold, hay fever, pain " +
      "medications and diet pills) can slow your reaction time, " +
      "make you dizzy or nervous and impair (damage, weaken or " +
      "worsen) your concentration and vision.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Drugs Affect Your Driving (page 64)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=64",
  },
  {
    key: "parallel-18-inches",
    quote:
      "Unless there are signs that prohibit parking or a " +
      "yellow-painted curb, you may park parallel to any curb and " +
      "within 18 inches of the curb.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Parallel Parking (page 47)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=47",
  },
  {
    key: "parallel-two-feet-out",
    quote:
      "Signal, then drive up even with the car in front and about " +
      "2 feet out from it. When your front wheels are opposite " +
      "the rear bumper of the car in front, quickly turn your " +
      "steering wheel all the way to the left.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Parallel Parking (page 47)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=47",
  },
  {
    key: "parent-taught-hours",
    quote:
      "Students are required to complete 30 hours of classroom " +
      "training and 55 hours of actual behind-the-wheel training, " +
      "which is all programmed into the curriculum of approved " +
      "providers.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "Parent-Taught Driver Education (page 8)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=8",
  },
  {
    key: "parking-30-stop-sign",
    quote:
      "7. Within 30 feet upon approaching any flashing beacon, " +
      "stop sign or traffic control signal located at the side of " +
      "the roadway.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Unlawful Parking (page 49)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=49",
  },
  {
    key: "parking-50-railroad",
    quote:
      "8. Within 50 feet of the nearest rail of a railroad " +
      "crossing.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Unlawful Parking (page 49)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=49",
  },
  {
    key: "parking-double-bridge",
    quote:
      "11. On the roadway side of any vehicle stopped or parked " +
      "at the edge or curb of a street (double parking). 12. On " +
      "any bridge or other elevated structure on a highway or " +
      "within a highway underpass.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Unlawful Parking (page 49)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=49",
  },
  {
    key: "parking-fire-station",
    quote:
      "9. Within 20 feet of the driveway entrance to any fire " +
      "station or within 75 feet on the side of a street opposite " +
      "the entrance (when properly signposted).",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Unlawful Parking (page 49)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=49",
  },
  {
    key: "parking-highway",
    quote:
      "Where parking is permitted, signal, slow down and drive " +
      "completely off the pavement or the main traveled part of " +
      "the roadway. If your vehicle breaks down, move it " +
      "completely off the highway.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Parking on a Highway (page 46)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=46",
  },
  {
    key: "parking-hydrant-15",
    quote:
      "4. Within 15 feet of a fire hydrant. 5. On a crosswalk. 6. " +
      "Within 20 feet of a crosswalk at an intersection.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Unlawful Parking (page 49)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=49",
  },
  {
    key: "parking-law-says",
    quote:
      "No person shall stop, park or leave a vehicle unattended " +
      "except when necessary to avoid conflict with other traffic " +
      "or in compliance of law or the directions of a police " +
      "officer or traffic-controlled device in any of the places.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Unlawful Parking - The Law Says (page " +
      "49)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=49",
  },
  {
    key: "parking-leaving-car",
    quote:
      "When you leave your car, truck or van: ▶ Set the parking " +
      "brake. ▶ Put the gear in low, reverse or \"park.\" ▶ Turn " +
      "off the motor. ▶ Lock the ignition and remove the key.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Parking (page 46)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=46",
  },
  {
    key: "parking-unlawful-list",
    quote:
      "It is illegal to park in these places: 1. On a sidewalk. " +
      "2. In front of a public or private driveway. 3. Within an " +
      "intersection. 4. Within 15 feet of a fire hydrant. 5. On a " +
      "crosswalk.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 9: Parking - Unlawful Parking (page 49)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=49",
  },
  {
    key: "passing-100-feet-obstructed",
    quote:
      "DO NOT PASS within 100 feet of an obstructed view or if " +
      "vehicles or pedestrians might cross your path. Watch for " +
      "bridges, viaducts, tunnels, overpasses, railroad " +
      "crossings, intersections and crosswalks.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Passing - No Passing " +
      "Zones (page 35)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=35",
  },
  {
    key: "passing-200-feet",
    quote:
      "Do not move to the left until you are sure you can do it " +
      "safely. Check ahead for at least 200 feet of clear roadway " +
      "without a \"No Passing Zone.\"",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Passing - Passing on " +
      "the Left (page 35)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=35",
  },
  {
    key: "passing-off-pavement",
    quote:
      "You can never legally pass on the right by driving off the " +
      "pavement or main portion of the highway.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Passing - Passing on " +
      "the Right (page 35)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=35",
  },
  {
    key: "passing-on-right",
    quote:
      "You may overtake and pass on the right when: ▶ The road is " +
      "wide enough for two or more lanes in each direction and " +
      "there are no parked cars or other obstructions on the " +
      "roadway. ▶ You are on a one-way road. ▶ The vehicle in " +
      "front of you is making or about to make a left turn.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Passing - Passing on " +
      "the Right (page 35)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=35",
  },
  {
    key: "passing-return-mirror",
    quote:
      "Pass the car ahead and don't return to the right lane " +
      "until you can see that car in the rearview mirror.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Passing - Passing on " +
      "the Left (page 35)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=35",
  },
  {
    key: "pavement-markings",
    quote:
      "Pavement markings regulate traffic. Yellow and white " +
      "pavement markings show you: Which lane you should be " +
      "using. Where visibility is limited and passing is " +
      "dangerous. Where traffic is traveling toward you in the " +
      "next lane. Where you may safely wait for an opportunity to " +
      "make a left turn.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Pavement Markings " +
      "(page 27)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=27",
  },
  {
    key: "ped-crossing-sign",
    quote:
      "Pedestrian Crossing. Slow down and prepare to stop. Watch " +
      "both sides of the street. You must yield.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Warning Signs - " +
      "Black on a Yellow Background (page 21)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=21",
  },
  {
    key: "ped-crosswalk-right",
    quote:
      "Pedestrians in a crosswalk have the right-of-way over most " +
      "vehicles, whether the crosswalk is marked or not.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Pedestrians (page 50)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=50",
  },
  {
    key: "ped-dont-honk",
    quote:
      "Don't honk, gun your engine or do anything to rush or " +
      "scare a pedestrian crossing in front of your car, even if " +
      "you have the legal right-of-way.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Pedestrians (page 50)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=50",
  },
  {
    key: "ped-signal-flashing",
    quote:
      "\"Flashing\"-Don't leave the curb, but continue if already " +
      "in the intersection.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Pedestrian " +
      "Signals (page 27)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=27",
  },
  {
    key: "ped-signal-obey",
    quote:
      "Pedestrians should obey these signs, if present, instead " +
      "of the traffic signal.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Pedestrian " +
      "Signals (page 27)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=27",
  },
  {
    key: "ped-yield-driveway",
    quote:
      "Yield to pedestrians using the sidewalk when you're " +
      "entering or leaving a driveway or alley.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Pedestrians (page 50)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=50",
  },
  {
    key: "pedestrian-definition",
    quote:
      "\"Pedestrians\" include people walking, skateboarders, " +
      "in-line or roller skaters and people with disabilities who " +
      "use wheelchairs, walkers, tricycles or similar supports.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Pedestrians (page 50)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=50",
  },
  {
    key: "perception-reaction",
    quote:
      "Perception About .5 seconds See/hear danger Reaction About " +
      ".66 seconds Brain tells foot to brake",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Perception, Reaction " +
      "and Braking Time (page 42)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=42",
  },
  {
    key: "permit-18-plus",
    quote:
      "If you are 18+ years old, you do not need to receive a " +
      "Learner Permit in order to take the drive test. However, " +
      "if you choose to get a driving permit for driving " +
      "practice, you will need to hold it for at least 30 days " +
      "before applying for an unrestricted license.",
    source:
      "Service Oklahoma - Learner Permit (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Learner Permit - Frequently Asked Questions",
    url:
      "https://oklahoma.gov/service/all-pages/learner-permit.html",
  },
  {
    key: "permit-eligibility-15",
    quote:
      "You must be enrolled and receiving instruction in an " +
      "approved Service Oklahoma Driver Education course and pass " +
      "the Oklahoma Written Exam .",
    source:
      "Service Oklahoma - Learner Permit (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Learner Permit - Eligibility",
    url:
      "https://oklahoma.gov/service/all-pages/learner-permit.html",
  },
  {
    key: "permit-handheld-suspension",
    quote:
      "Learner's Permit or Intermediate License holders can be " +
      "suspended or have their license canceled for using a " +
      "hand-held electronic device while operating a motor " +
      "vehicle for non-life-threatening emergency purposes.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Pay Attention - Be Alert (page " +
      "61)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=61",
  },
  {
    key: "permit-privileges",
    quote:
      "You can drive between 5:00 a.m. and 10:00 p.m. while " +
      "accompanied by a licensed driver at least 21 years old",
    source:
      "Service Oklahoma - Learner Permit (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Learner Permit - Driving Privileges",
    url:
      "https://oklahoma.gov/service/all-pages/learner-permit.html",
  },
  {
    key: "permit-supervision",
    quote:
      "A Learner Permit is valid only while a licensed driver, 21 " +
      "or older, sits beside the driver.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "Table 1 - Types of Licenses (page 6)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=6",
  },
  {
    key: "permit-to-intermediate",
    quote:
      "Be at least 16 years old If under 16 1/2 years old , proof " +
      "of drivers education completion is required",
    source:
      "Service Oklahoma - Learner Permit (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Learner Permit - After Your Visit",
    url:
      "https://oklahoma.gov/service/all-pages/learner-permit.html",
  },
  {
    key: "point-reduction",
    quote:
      "Two (2) points are deducted for each 12-month period in " +
      "which there are no convictions of any pointable traffic " +
      "violations. Points are reduced to zero if there are no " +
      "traffic violation convictions for three consecutive years.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 13: Violations and Penalties - Point Reduction " +
      "(page 72)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=72",
  },
  {
    key: "point-system",
    quote:
      "Each time you are convicted of a pointable traffic " +
      "violation, you are assessed one or more points on your " +
      "driving record. If you accumulate 10 or more points within " +
      "5 years, your license will be suspended.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 13: Violations and Penalties - Oklahoma Mandatory " +
      "Point System (page 71)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=71",
  },
  {
    key: "prescription-labels",
    quote:
      "Prescription and Over-the-Counter Drugs-Before you take a " +
      "drug, check the label for warnings about side effects such " +
      "as drowsiness or nervousness.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Other Drugs and Driving (page 66)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=66",
  },
  {
    key: "probationary-licence",
    quote:
      "A license issued to drivers under 18 is considered " +
      "probationary: You are on a trial period to show you can " +
      "drive safely and legally. Service Oklahoma can, at its " +
      "discretion, cancel or suspend your license for any moving " +
      "traffic violation.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 13: Violations and Penalties - Probationary " +
      "License (page 71)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=71",
  },
  {
    key: "probationary-period",
    quote:
      "Until you are 18, your license is probationary (you are in " +
      "a trial period to show you can drive safely and legally). " +
      "Service Oklahoma may cancel or suspend your license for " +
      "any unlawful act, negligence or misconduct while driving.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 2: Your Driver License Restrictions and Renewals - " +
      "Probationary Period (page 13)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=13",
  },
  {
    key: "pull-right-left-lane",
    quote:
      "If an officer signals you to stop while you're driving in " +
      "the left lane, you must still pull over to the right " +
      "shoulder, even if that means crossing several lanes of " +
      "traffic.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - You Must Always " +
      "Yield (page 29)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=29",
  },
  {
    key: "quiet-zone",
    quote:
      "Quiet Zones are areas where trains do not blow their horn " +
      "during normal operation.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Construction and " +
      "Maintenance Signs - Quiet Zones (page 23)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=23",
  },
  {
    key: "rain-first-drops",
    quote:
      "The roads are likely to be very slick just after it begins " +
      "to rain or drizzle. The first few drops loosen built-up " +
      "grease and dirt on the road surface, covering it with a " +
      "slippery film that makes driving very dangerous.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Following - Rain (page " +
      "44)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=44",
  },
  {
    key: "rear-end-brake-lights",
    quote:
      "Watch for brake lights on the four or five cars down the " +
      "line. It will increase your response time. Shift your foot " +
      "to the brake pedal as soon as you see brake lights go on " +
      "ahead, so you can stop if needed.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - How to Avoid Rear-End " +
      "Collisions (page 45)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=45",
  },
  {
    key: "red-arrow",
    quote:
      "In general, the red arrow means that all turns in the " +
      "direction of the arrow are prohibited. You must wait for a " +
      "green signal before turning.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signals - " +
      "Flashing Red Arrow (page 26)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=26",
  },
  {
    key: "red-light-yield-turn",
    quote:
      "When you turn, you must yield to all pedestrians and " +
      "vehicles using the intersection, including bicycles.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signals - " +
      "Red Light (page 26)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=26",
  },
  {
    key: "regulatory-rectangle",
    quote:
      "For example, a rectangle is always a regulatory sign, " +
      "telling you about laws and regulations or giving you " +
      "instructions. Speed limit signs are regulatory.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signs " +
      "(page 19)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=19",
  },
  {
    key: "regulatory-signs",
    quote:
      "REGULATORY SIGNS tell you what you must do and what you " +
      "must not do. They direct and control or \"regulate\" traffic " +
      "for everyone's safety.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Regulatory Signs " +
      "- Black and White Rectangles (page 20)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=20",
  },
  {
    key: "restriction-9",
    quote:
      "9 = Accompanied by licensed driver 21 years of age or " +
      "older in the front seat. For people learning to drive.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 2: Your Driver License Restrictions and Renewals - " +
      "Restriction Codes (page 14)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=14",
  },
  {
    key: "restriction-penalty",
    quote:
      "PENALTIES FOR VIOLATING A RESTRICTION On conviction, a " +
      "fine of up to $500, 6 months in jail or both.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 2: Your Driver License Restrictions and Renewals - " +
      "Penalties for Violating a Restriction (page 14)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=14",
  },
  {
    key: "revocation-hit-and-run",
    quote:
      "Failure to stop and render aid if you are a driver " +
      "involved in a collision resulting in death or personal " +
      "injury (leaving the scene of a collision/hit-and-run).",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 13: Violations and Penalties - Mandatory " +
      "Revocation of Your License (page 71)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=71",
  },
  {
    key: "road-rage",
    quote:
      "Examples of road rage include tailgating, cutting off " +
      "other vehicles, careless lane changes, speeding and " +
      "running red lights.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - Road Rage (page 41)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=41",
  },
  {
    key: "road-rage-safe-place",
    quote:
      "If you suspect another driver is targeting you, go to a " +
      "safe place such as a police, fire or gas station, where " +
      "there are people. If necessary, call 911 immediately. DO " +
      "NOT drive home.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - Road Rage (page 41)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=41",
  },
  {
    key: "row-applies-to-bicycles",
    quote:
      "The right-of-way laws apply to all people and all " +
      "vehicles, including bicyclists.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Right-of-Way - " +
      "When to Yield (page 28)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=28",
  },
  {
    key: "row-intersections",
    quote:
      "At four-way-stop intersections and at intersections " +
      "without stop signs or signals, the car or truck that " +
      "entered the intersection first has the right-of-way. When " +
      "two vehicles approach at the same time, the driver on the " +
      "left yields to the driver on the right",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Right-of-Way at " +
      "Intersections (page 29)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=29",
  },
  {
    key: "row-purpose",
    quote:
      "\"Right-of-way\" laws help create a safe, smooth traffic " +
      "flow. In intersections and other places where vehicles and " +
      "pedestrians can't all cross at the same time, right-of-way " +
      "laws control who can go forward and who must yield or " +
      "wait.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Right-of-Way - " +
      "When to Yield (page 28)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=28",
  },
  {
    key: "rr-advance-warning",
    quote:
      "This advance warning sign lets you know you are " +
      "approaching railroad tracks. Slow down and be prepared to " +
      "stop within 15-50 feet of the first track. If your view is " +
      "blocked in either direction, drive very slowly until you " +
      "can see down the track.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Railroad Warning " +
      "Signs (page 22)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=22",
  },
  {
    key: "rr-flashing-lights",
    quote:
      "FLASHING LIGHTS on a crossbuck mean that a train is " +
      "coming. Always stop when the lights are flashing. Remain " +
      "stopped until the train has passed.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Railroad Warning " +
      "Signs - Flashing Lights (page 23)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=23",
  },
  {
    key: "rr-gate",
    quote:
      "Stop when the lights begin flashing and before the gate " +
      "comes down. Remain stopped until the gates are raised and " +
      "the lights stop flashing.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Railroad Warning " +
      "Signs - Crossbuck with Flashing Lights and Gate (page 23)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=23",
  },
  {
    key: "rr-keep-moving",
    quote:
      "If you are crossing the tracks and the warning lights " +
      "begin flashing or the gates start coming down, don't stop. " +
      "KEEP MOVING! The warning signals will allow enough time " +
      "for you to finish driving through the crossing before the " +
      "train arrives.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Safety Rules for " +
      "Highway-Railway Crossings (page 57)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=57",
  },
  {
    key: "rr-must-stop-vehicles",
    quote:
      "SCHOOL BUSES, CHURCH BUSES, MOTOR COACHES and any vehicles " +
      "hauling explosives or flammable liquids are required by " +
      "law to stop. Do not pass a vehicle that is required to " +
      "stop at a railroad crossing except when driving on a " +
      "multi-lane highway.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Railroad Warning " +
      "Signs (page 22)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=22",
  },
  {
    key: "rr-never-around-gates",
    quote:
      "Never drive around the gates. If the gates are down, stop " +
      "behind the gate. It's against the law to drive through " +
      "lowered gates. Don't cross the tracks until the gates are " +
      "raised and the lights have stopped flashing.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Safety Rules for " +
      "Highway-Railway Crossings (page 57)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=57",
  },
  {
    key: "rr-no-passing",
    quote:
      "Never pass at a highway-rail crossing. Don't pass cars or " +
      "bicyclists. The bicycle tires can get caught on the tracks " +
      "and the rider can be thrown across your path.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Safety Rules for " +
      "Highway-Railway Crossings (page 57)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=57",
  },
  {
    key: "rr-second-train",
    quote:
      "Watch out for the second train. When you are at a " +
      "multiple-track crossing and the last car of the train " +
      "passes by, don't go until you're sure that no other train " +
      "is coming on another track from either direction.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Safety Rules for " +
      "Highway-Railway Crossings (page 57)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=57",
  },
  {
    key: "rr-stop-line",
    quote:
      "An R X R and a stop line may be painted on the pavement in " +
      "front of a crossing. Always stay behind the painted stop " +
      "line while waiting for a passing train.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Warning Devices for " +
      "Highway-Rail Crossings (page 56)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=56",
  },
  {
    key: "run-off-pavement",
    quote:
      "If you run off the pavement-Hold the steering wheel " +
      "firmly. Apply your brakes lightly and reduce your speed " +
      "until you can safely return to the pavement.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Braking Under " +
      "Emergency Conditions (page 43)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=43",
  },
  {
    key: "school-zone-flashing",
    quote:
      "When you see the \"School Zone\" sign, you must reduce your " +
      "speed to the limit shown when the yellow light is " +
      "flashing. Watch carefully for children and be ready to " +
      "stop.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Regulatory Signs " +
      "- Black and White Rectangles (page 20)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=20",
  },
  {
    key: "schoolbus-exceptions",
    quote:
      "You DON'T have to stop for a school bus when- ▶ the bus is " +
      "on a different roadway, OR ▶ the bus is stopped in a " +
      "loading zone by a controlled-access highway where " +
      "pedestrians are not allowed to cross.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Yield " +
      "Right-of-Way to a School or Church Bus (page 30)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=30",
  },
  {
    key: "schoolbus-must-stop",
    quote:
      "If you approach a bus with flashing red lights and/or " +
      "showing a red \"STOP\" sign, it means that children are " +
      "getting on or off the bus and you must stop.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Yield " +
      "Right-of-Way to a School or Church Bus (page 30)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=30",
  },
  {
    key: "schoolbus-remain-stopped",
    quote:
      "You must stop and remain stopped until- ▶ the bus has " +
      "started moving, OR ▶ the driver motions for you to " +
      "proceed, OR ▶ the red flashing lights go off and/or the " +
      "sign is pulled back.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Yield " +
      "Right-of-Way to a School or Church Bus (page 30)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=30",
  },
  {
    key: "schoolbus-revocation",
    quote:
      "It is mandatory revocation of driver license for one year " +
      "for failing to stop for a school bus with red " +
      "loading/unloading lights flashing.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Yield " +
      "Right-of-Way to a School or Church Bus (page 30)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=30",
  },
  {
    key: "seat-belt-front",
    quote:
      "Every driver and front-seat passenger must wear a properly " +
      "adjusted and fastened safety seat belt system. The seat " +
      "belt must be factory-installed and meet federal safety " +
      "standards.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 3: Requirements for Oklahoma Drivers - Mandatory " +
      "Safety Requirements - Seat Belts and Child Passenger " +
      "Restraints (page 17)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=17",
  },
  {
    key: "secondary-crash",
    quote:
      "A Secondary Crash is any crash that occurs because of " +
      "another crash or incident.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Move Over Law or " +
      "Bernardo-Mills Law (page 30)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=30",
  },
  {
    key: "service-signs",
    quote:
      "SERVICE SIGNS give information and directions about " +
      "facilities. They show where service stations, restaurants " +
      "and motels are available.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Service Signs - " +
      "Blue (page 25)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=25",
  },
  {
    key: "show-licence-collision",
    quote:
      "You are required by law to show it to a trooper, police " +
      "officer, sheriff or judge when asked. You must show your " +
      "license to anyone with whom you are involved in a " +
      "collision.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "License Responsibilities (page 11)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=11",
  },
  {
    key: "sign-color-key",
    quote:
      "The shapes and colors of traffic signs have specific " +
      "meanings and you should be able to recognize them " +
      "immediately. Even if a stop sign is damaged or blocked by " +
      "dirt or snow, you know by the octagonal shape and red " +
      "color that you must stop.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signs " +
      "(page 19)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=19",
  },
  {
    key: "sign-damage-penalty",
    quote:
      "obstructing or damaging roads, defacing, damaging, " +
      "destroying or removing any traffic control device, road " +
      "sign board, guide sign or signpost is a misdemeanor.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signs " +
      "(page 19)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=19",
  },
  {
    key: "signal-100-feet",
    quote:
      "It is illegal to turn without signaling. You should signal " +
      "for at least 100 feet or 1/3 of a block before you turn, " +
      "slow down or stop.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Turning - Turn " +
      "Signals (page 36)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=36",
  },
  {
    key: "skid-steer-into",
    quote:
      "As a general rule, if the car starts to skid, take your " +
      "foot off the brake and turn the steering wheel in the " +
      "direction of the skid if you can do so without running off " +
      "the road, hitting something or steering into oncoming " +
      "traffic.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Stopping in Icy and " +
      "Rainy Conditions (page 43)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=43",
  },
  {
    key: "slow-moving-rural",
    quote:
      "Watch for tractors, combines and other farm equipment " +
      "moving from one field to another and traveling on state " +
      "highways. The equipment can be very large and use more " +
      "than one traffic lane. In most cases, these vehicles will " +
      "be traveling at less than 25 mph.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Slow-Moving Vehicles (page " +
      "58)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=58",
  },
  {
    key: "smv-emblem",
    quote:
      "This emblem is used on Slow Moving Vehicles (SMVs) such as " +
      "agricultural equipment, highway and roadside construction " +
      "equipment and highway maintenance equipment traveling on " +
      "public highways at speeds of 25 MPH or less.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Construction and " +
      "Maintenance Signs - Slow Moving Vehicle Emblem (page 24)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=24",
  },
  {
    key: "solid-yellow-no-pass",
    quote:
      "Single or double solid yellow lines mean DO NOT PASS. You " +
      "may cross the line to turn left.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Lane Usage and " +
      "Maneuvers (page 32)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=32",
  },
  {
    key: "speed-limit-ideal",
    quote:
      "Speed limit sign. This is the highest speed you can travel " +
      "under ideal conditions.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Regulatory Signs " +
      "- Black and White Rectangles (page 20)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=20",
  },
  {
    key: "speed-table",
    quote:
      "Controlled access highways 75 mph Turnpikes 80 mph " +
      "Undivided State Highways 65 mph County roads 55 mph " +
      "Highways within state parks or wildlife refuges 35 mph " +
      "School zones on any highway outside of a municipality in a " +
      "properly marked zone 25 mph",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - Speed Limits - State " +
      "Speed Limits Unless Otherwise Posted (page 41)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=41",
  },
  {
    key: "speeding-penalty",
    quote:
      "Upon conviction of speeding, you may be fined up to " +
      "$654.00 and sentenced to 30 days in jail. Fines double in " +
      "school and con struction zones when workers or equipment " +
      "are present.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - Maximum Penalty for " +
      "Violating the Basic Speed Rule (page 40)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=40",
  },
  {
    key: "stalled-on-tracks",
    quote:
      "Get out of your vehicle if it stalls on the tracks. If " +
      "your vehicle is physically on the train tracks at a grade " +
      "crossing and the lights begin to flash, you may only have " +
      "20 seconds to escape before the train makes it to your " +
      "location.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Safety Rules for " +
      "Highway-Railway Crossings (page 57)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=57",
  },
  {
    key: "stalled-run-45-degrees",
    quote:
      "Once outside, run at a 45-degree angle away from the " +
      "tracks in the direction that the train is coming, as shown " +
      "in the picture to the right, then immediately dial 911",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Safety Rules for " +
      "Highway-Railway Crossings (page 57)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=57",
  },
  {
    key: "standard-brakes-lock",
    quote:
      "Maximum braking comes just before the wheels lock and stop " +
      "rotating. Too much pressure on the brake pedal will lock " +
      "the wheels and the vehicle will skid.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Braking Under " +
      "Emergency Conditions - Standard Brakes (page 43)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=43",
  },
  {
    key: "standard-drink",
    quote:
      "A 12-ounce can of beer, a 5-ounce glass of wine and a " +
      "cocktail with 1.5 ounces of 80-proof distilled spirits all " +
      "contain the same amount of alcohol.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - DUI - If You Drink, Don't Drive (page 64)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=64",
  },
  {
    key: "stat-caravan-200",
    quote:
      "The distance between such vehicles shall be a minimum of " +
      "two hundred (200) feet under all conditions. This " +
      "provision shall not apply to funeral processions.",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Section 11-310 - " +
      "Following Too Closely",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82288",
  },
  {
    key: "stat-county-road-yield",
    quote:
      "Whether a stop sign or yield sign is present, visible or " +
      "not, the driver of a vehicle shall yield the right-of-way " +
      "and shall not proceed until it is safe to do so, when the " +
      "driver is: 1. On a county road upon approaching an " +
      "intersection with a state or federal highway;",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 4 - " +
      "Right Of Way, Section 11-401 - Vehicle Approaching or " +
      "Entering Intersection",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82292",
  },
  {
    key: "stat-crest-curve",
    quote:
      "When approaching or upon the crest of a grade or a curve " +
      "in the highway where the driver's view is obstructed " +
      "within such distance as to create a hazard in the event " +
      "another vehicle might approach from the opposite " +
      "direction;",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Section 11-306 - " +
      "Further Limitations on Driving to Left of Center of " +
      "Roadway",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82282",
  },
  {
    key: "stat-divided-highway",
    quote:
      "No vehicle shall be driven over, across or within any such " +
      "dividing space, barrier or section, except through a " +
      "permanent opening in the dividing space, barrier or " +
      "section or at a permanent cross-over or intersection as " +
      "established unless specifically prohibited by public " +
      "authority.",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Section 11-311 - " +
      "Driving on Divided Highways",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82289",
  },
  {
    key: "stat-drive-right-half",
    quote:
      "Upon all roadways of sufficient width a vehicle shall be " +
      "driven upon the right half of the roadway, except as " +
      "follows: 1. When overtaking and passing another vehicle " +
      "proceeding in the same direction under the laws governing " +
      "such movement;",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 3 - " +
      "Miscellaneous Rules of Driving on Roadway, Section 11-301 " +
      "- Drive on Right Side of Roadway - Exceptions",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82277",
  },
  {
    key: "stat-following-too-closely",
    quote:
      "The driver of a motor vehicle shall not follow another " +
      "vehicle more closely than is reasonable and prudent, " +
      "having due regard for the speed of such vehicles and the " +
      "traffic upon and the condition of the highway.",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Section 11-310 - " +
      "Following Too Closely",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82288",
  },
  {
    key: "stat-green-arrow",
    quote:
      "vehicular traffic facing a green arrow signal, shown alone " +
      "or in combination with another indication, may cautiously " +
      "enter the intersection only to make the movement indicated " +
      "by such arrow",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 2 - " +
      "Traffic Signs, Signals, and Markings, Section 11-202 - " +
      "Traffic-Control Signal Legend - Motorcycle and Bicycle",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82270",
  },
  {
    key: "stat-green-yield",
    quote:
      "But vehicular traffic, including vehicles turning right or " +
      "left, shall yield the right-of-way to other vehicles and " +
      "to pedestrians lawfully within the intersection or an " +
      "adjacent crosswalk at the time such signal is exhibited",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 2 - " +
      "Traffic Signs, Signals, and Markings, Section 11-202 - " +
      "Traffic-Control Signal Legend - Motorcycle and Bicycle",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82270",
  },
  {
    key: "stat-lane-change-signal",
    quote:
      "A vehicle shall not be moved from the lane until the " +
      "driver has first ascertained that the movement can be made " +
      "with safety and then given a signal, not less than the " +
      "last one hundred (100) feet traveled by the vehicle, of " +
      "his or her intention to change lanes;",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 3 - " +
      "Miscellaneous Rules of Driving on Roadway, Section 11-309 " +
      "- Additional Rules for Driving on Roadways Laned for " +
      "Traffic",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82287",
  },
  {
    key: "stat-left-lane",
    quote:
      "A vehicle shall not be driven in the left lane of a " +
      "roadway except when overtaking and passing another " +
      "vehicle;",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 3 - " +
      "Miscellaneous Rules of Driving on Roadway, Section 11-309 " +
      "- Additional Rules for Driving on Roadways Laned for " +
      "Traffic",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82287",
  },
  {
    key: "stat-left-of-center-100",
    quote:
      "When approaching within one hundred (100) feet of or " +
      "traversing any intersection or railroad grade crossing " +
      "unless otherwise indicated by official traffic control " +
      "devices;",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Section 11-306 - " +
      "Further Limitations on Driving to Left of Center of " +
      "Roadway",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82282",
  },
  {
    key: "stat-left-turn-yield",
    quote:
      "The driver of a vehicle intending to turn to the left " +
      "shall yield the right-of-way to any vehicle approaching " +
      "from the opposite direction which is so close thereto when " +
      "initiating such turn as to constitute an immediate hazard.",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 4 - " +
      "Right Of Way, Section 11-402 - Vehicle Turning Left",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82293",
  },
  {
    key: "stat-motorcycle-dead-red",
    quote:
      "the driver of a motorcycle facing any steady red signal " +
      "may cautiously proceed through the intersection only if: " +
      "(1) the motorcycle has been brought to a complete stop as " +
      "required by subparagraph a of this paragraph,",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 2 - " +
      "Traffic Signs, Signals, and Markings, Section 11-202 - " +
      "Traffic-Control Signal Legend - Motorcycle and Bicycle",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82270",
  },
  {
    key: "stat-move-over-lanes",
    quote:
      "the driver shall proceed with due caution and shall, if " +
      "possible and with due regard to the road, weather, and " +
      "traffic conditions, change lanes into a lane that is not " +
      "adjacent to the stationary authorized emergency vehicle",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Section 11-314 - " +
      "Bernardo-Mills Law",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=391386",
  },
  {
    key: "stat-move-over-two-lane",
    quote:
      "If traveling on a highway other than a highway described " +
      "in paragraph 1 of this subsection, the driver shall " +
      "proceed with due caution and reduce the speed of the motor " +
      "vehicle to a safe speed.",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Section 11-314 - " +
      "Bernardo-Mills Law",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=391386",
  },
  {
    key: "stat-no-passing-zone",
    quote:
      "Where signs or markings are in place to define a " +
      "no-passing zone as set forth in paragraph (a) no driver " +
      "shall at any time drive to the left side of the roadway " +
      "within such no-passing zone",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Section 11-307 - " +
      "No-Passing Zones",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82283",
  },
  {
    key: "stat-overtake-right",
    quote:
      "The driver of a vehicle may overtake and pass another " +
      "vehicle upon the right only under conditions permitting " +
      "such movement in safety. In no event shall such movement " +
      "be made by driving off the pavement or main traveled " +
      "portion of the roadway.",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Section 11-304 - " +
      "When Overtaking on the Right is Permitted",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82280",
  },
  {
    key: "stat-red-light-stop",
    quote:
      "vehicular traffic facing a steady circular red signal " +
      "alone shall stop at a clearly marked stop line, but if " +
      "none, before entering the crosswalk on the near side of " +
      "the intersection or, if none, then before entering the " +
      "intersection and shall remain standing until an indication " +
      "to proceed is shown",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 2 - " +
      "Traffic Signs, Signals, and Markings, Section 11-202 - " +
      "Traffic-Control Signal Legend - Motorcycle and Bicycle",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82270",
  },
  {
    key: "stat-restricted-access",
    quote:
      "No person shall drive a vehicle onto or from any " +
      "controlled-access roadway except at such entrances and " +
      "exits as are established by public authority.",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Section 11-312 - " +
      "Restricted Access",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82290",
  },
  {
    key: "stat-right-on-red",
    quote:
      "except when a sign is in place prohibiting a turn, " +
      "vehicular traffic facing any steady red signal may " +
      "cautiously enter the intersection to turn right or to turn " +
      "left from a one-way street into a one-way street",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 2 - " +
      "Traffic Signs, Signals, and Markings, Section 11-202 - " +
      "Traffic-Control Signal Legend - Motorcycle and Bicycle",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82270",
  },
  {
    key: "stat-single-lane",
    quote:
      "A vehicle shall be driven as nearly as practicable " +
      "entirely within a single lane;",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 3 - " +
      "Miscellaneous Rules of Driving on Roadway, Section 11-309 " +
      "- Additional Rules for Driving on Roadways Laned for " +
      "Traffic",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82287",
  },
  {
    key: "stat-slow-right-lane",
    quote:
      "Upon all roadways any vehicle proceeding at less than the " +
      "normal speed of traffic at the time and place and under " +
      "the conditions then existing shall be driven in the " +
      "right-hand lane when available for traffic, or as close as " +
      "practicable to the right-hand curb or edge of the roadway",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 3 - " +
      "Miscellaneous Rules of Driving on Roadway, Section 11-301 " +
      "- Drive on Right Side of Roadway - Exceptions",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82277",
  },
  {
    key: "stat-two-way-left-turn",
    quote:
      "A vehicle shall not be driven in a designated two-way " +
      "left-turn lane except when preparing for or making a left " +
      "turn from or into a roadway. Vehicles turning left from " +
      "the roadway shall not be driven in the two-way left-turn " +
      "lane for more than two hundred (200) feet while preparing " +
      "for and making the turn.",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 3 - " +
      "Miscellaneous Rules of Driving on Roadway, Section 11-309 " +
      "- Additional Rules for Driving on Roadways Laned for " +
      "Traffic",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82287",
  },
  {
    key: "stat-unpaved-county-road",
    quote:
      "On an unpaved county road upon approaching an intersection " +
      "with a paved county road;",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 4 - " +
      "Right Of Way, Section 11-401 - Vehicle Approaching or " +
      "Entering Intersection",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82292",
  },
  {
    key: "stat-yield-right",
    quote:
      "When two vehicles enter or approach an intersection from " +
      "different highways at approximately the same time, except " +
      "as provided in subsection A of this section, the driver of " +
      "the vehicle on the left shall yield the right-of-way to " +
      "the vehicle on the right.",
    source:
      "Oklahoma Statutes Title 47 - Motor Vehicles (Oklahoma " +
      "State Courts Network, OSCN 2026)",
    section:
      "Title 47, Chapter 11 - Rules of the Road, Article 4 - " +
      "Right Of Way, Section 11-401 - Vehicle Approaching or " +
      "Entering Intersection",
    url:
      "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82292",
  },
  {
    key: "steering-grip",
    quote:
      "Generally, your left hand should be between 9:00 and 10:30 " +
      "and your right hand between 2:00 and 4:00.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Good Driving Posture (page 60)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=60",
  },
  {
    key: "stop-sign-octagon",
    quote:
      "Come to a complete stop at the intersection. You must stop " +
      "before the pedestrian crosswalk, even if it isn't marked. " +
      "Stay stopped until the way is clear in all directions.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Regulatory Signs " +
      "- Stop: Red Octagon (page 19)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=19",
  },
  {
    key: "stopping-distance-factors",
    quote:
      "Your stopping distance depends on: ▶ Your own reaction " +
      "time. ▶ Weather and road conditions. ▶ The weight of your " +
      "vehicle. ▶ The condition of your brakes.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - Stopping Distances " +
      "(page 42)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=42",
  },
  {
    key: "supervised-hours-affidavit",
    quote:
      "the permit holder has completed fifty (50) hours of " +
      "driving including a minimum of ten (10) hours of driving " +
      "at night",
    source:
      "Service Oklahoma - Learner Permit (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Learner Permit - Frequently Asked Questions",
    url:
      "https://oklahoma.gov/service/all-pages/learner-permit.html",
  },
  {
    key: "suspended-licence",
    quote:
      "If your license is suspended or revoked, you can't apply " +
      "for a new license until you are reinstated and you can't " +
      "legally drive until your license is restored.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 13: Violations and Penalties - Violations and " +
      "Penalties (page 69)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=69",
  },
  {
    key: "t-intersection-sign",
    quote:
      "\"T\" intersection ahead. You must turn right or left. Be " +
      "prepared to yield.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Warning Signs - " +
      "Black on a Yellow Background (page 22)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=22",
  },
  {
    key: "tailgater-response",
    quote:
      "If someone is following you too closely (tailgating): ▶ " +
      "Flash your brake lights if braking will not cause a " +
      "collision. ▶ Slow down and encourage the driver behind you " +
      "to pass.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 8: Stopping and Following - How to Avoid Rear-End " +
      "Collisions (page 45)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=45",
  },
  {
    key: "teen-crash-rate",
    quote:
      "Oklahoma's teenage drivers have more crashes than any " +
      "other age group, which causes their insurance premiums to " +
      "be exceptionally high. During their first year of driving, " +
      "25% of 16-year-olds either receive a ticket or are " +
      "involved in a crash.",
    source:
      "Service Oklahoma - Teen Driving (service.ok.gov, retrieved " +
      "2026-09-06)",
    section:
      "Teen Driving - Teen Road Safety",
    url:
      "https://oklahoma.gov/service/popular-services/teen-driving.html",
  },
  {
    key: "texting-illegal",
    quote:
      "As of 2015, it is illegal to text while driving in " +
      "Oklahoma. Commercial drivers or public transit drivers are " +
      "also prohibited from making hand-held phone calls while " +
      "driving.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 11: Driving Tips - Car Phone Safety (page 61)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=61",
  },
  {
    key: "tim-scene",
    quote:
      "A driver should approach a TIM scene with caution, " +
      "awareness, and responsibility to ensure the safety of " +
      "responders, other drivers, and themselves.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Yield Traffic " +
      "Incident Management (TIM) Scene (page 31)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=31",
  },
  {
    key: "too-slow-illegal",
    quote:
      "You must not drive so slowly that you block, hinder or " +
      "interfere with other vehicles moving at normal speeds. " +
      "Your speed must be adjusted to conditions so you can stop " +
      "within a clear distance ahead.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 7: The Basic Speed Rule - The Basic Speed Rule " +
      "(page 40)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=40",
  },
  {
    key: "train-appears-slow",
    quote:
      "Because of the large size of a train, it appears to be " +
      "moving much slower than you think. If you see or hear a " +
      "train, STOP and WAIT for the train to pass.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Safety Rules for " +
      "Highway-Railway Crossings (page 57)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=57",
  },
  {
    key: "train-stop-distance",
    quote:
      "the driver of such vehicle shall stop within 50 feet but " +
      "not less than 15 feet from the nearest rail of such " +
      "railroad and shall not proceed until they can do so safely " +
      "when:",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Trains - The Law Says (page 56)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=56",
  },
  {
    key: "train-stopping-distance",
    quote:
      "A train traveling at 55 mph takes a mile or more to stop. " +
      "A train collision is always the fault of the car driver.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Sharing the Road with " +
      "Trains (page 55)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=55",
  },
  {
    key: "truck-backing",
    quote:
      "Never try to cross behind a truck when it's preparing to " +
      "back up. This is a high-collision situation because you " +
      "will be in the driver's blind spot.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Risky Situations with " +
      "Trucks (page 55)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=55",
  },
  {
    key: "truck-blind-spots",
    quote:
      "A truck's blind spots are immediately in front on either " +
      "side of the cab and up to 200 feet in the rear.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Safety Rules for Following " +
      "a Truck (page 54)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=54",
  },
  {
    key: "truck-meeting",
    quote:
      "When you meet a truck coming from the opposite direction, " +
      "keep as far as possible to the right side of the road to " +
      "avoid being sideswiped and to reduce the wind turbulence " +
      "between you and the truck.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Passing a Truck (page 54)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=54",
  },
  {
    key: "truck-mirror-rule",
    quote:
      "Position your vehicle outside the truck's \"blind spot,\" " +
      "and be sure the truck driver can see you in the rearview " +
      "mirror. If you can't see the truck's mirror, the driver " +
      "can't see you.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Safety Rules for Following " +
      "a Truck (page 54)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=54",
  },
  {
    key: "truck-passing",
    quote:
      "Because of their weight, trucks travel faster downhill and " +
      "slower uphill. You may have to increase your speed to pass " +
      "a truck on a downhill grade. Complete your pass as quickly " +
      "as possible and don't stay alongside the truck.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Passing a Truck (page 54)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=54",
  },
  {
    key: "truck-right-turn",
    quote:
      "A truck making a right turn-Watch for turn signals. Trucks " +
      "make wide right turns and often must leave an open space " +
      "on the right side. Do not move into that space or try to " +
      "pass a truck if it might be making a right turn.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Risky Situations with " +
      "Trucks (page 55)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=55",
  },
  {
    key: "truck-uphill-stop",
    quote:
      "If you're stopped behind a truck on an uphill grade, stay " +
      "to the left in your lane so the driver can see you. When " +
      "stopped in a traffic lane, leave extra space in front of " +
      "your car in case the truck rolls back slightly when it " +
      "starts to move.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Safety Rules for Following " +
      "a Truck (page 54)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=54",
  },
  {
    key: "turn-on-red",
    quote:
      "After coming to a complete stop, you may turn right on red " +
      "and you may turn left from a one-way street into a one-way " +
      "street unless there are signs forbidding the turn.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signals - " +
      "Red Light (page 26)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=26",
  },
  {
    key: "turn-recommended-speed",
    quote:
      "Recommended speed when turning 10 mph or less.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Turning (page 37)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=37",
  },
  {
    key: "turn-signal-100-feet-corner",
    quote:
      "Begin turn signal and start slowing down at least 100 feet " +
      "from corner.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - How to Make a Right " +
      "Turn (page 37)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=37",
  },
  {
    key: "turn-wrong-lane",
    quote:
      "Don't try to turn from the wrong lane. If you aren't in " +
      "the proper lane, drive to the next intersection and make " +
      "the turn from the proper lane there.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Turning - Don't " +
      "(page 36)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=36",
  },
  {
    key: "two-left-turns",
    quote:
      "When you are meeting another driver at an intersection and " +
      "both of you want to turn left, each will turn to the left " +
      "of the other. Leave from the left lane and enter in the " +
      "left lane.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - When to Turn Left of " +
      "Center: Left Turns - Two Vehicles (page 37)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=37",
  },
  {
    key: "two-way-traffic-sign",
    quote:
      "Two-way traffic ahead. Drive in the right-hand lane and " +
      "expect oncoming traffic in the left-hand lane.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Warning Signs - " +
      "Black on a Yellow Background (page 21)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=21",
  },
  {
    key: "unauthorized-driving",
    quote:
      "It is illegal to drive without a license. Even if you have " +
      "a licensed driver with you, you are breaking the law if " +
      "you don't have a license or Learner Permit. Both you and " +
      "the person who lets you drive the car can be arrested.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 2: Your Driver License Restrictions and Renewals - " +
      "Unauthorized Driving (page 13)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=13",
  },
  {
    key: "under-18-court-notice",
    quote:
      "If you are under the age of 18, a court is required to " +
      "notify Service Oklahoma of any offense that you commit, " +
      "including any crime, violation, infraction, traffic " +
      "offense or other offense involving or relating to the " +
      "possession, use, sale",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Additional Penalties for Persons Under 18 (page " +
      "67)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=67",
  },
  {
    key: "under-18-penalties",
    quote:
      "At the discretion of the court, a period of: 6 months 1 " +
      "year 2 years or until the person attains the age of 21 " +
      "years, whichever period of time is longer",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Penalties for Persons Under 18 (page 67)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=67",
  },
  {
    key: "unrestricted-eligibility",
    quote:
      "Must have an Intermediate License for at least 6 months " +
      "Must have no traffic convictions on driving record for 180 " +
      "days immediately preceding issuance of the unrestricted " +
      "license",
    source:
      "Service Oklahoma - Intermediate License (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Intermediate License - After Your Visit",
    url:
      "https://oklahoma.gov/service/all-pages/intermediate-license.html",
  },
  {
    key: "unrestricted-no-drivered",
    quote:
      "Must have held an Intermediate License for at least 12 " +
      "months Must have no traffic convictions on driving record " +
      "for 12 months immediately preceding issuance of the " +
      "unrestricted license",
    source:
      "Service Oklahoma - Intermediate License (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Intermediate License - After Your Visit",
    url:
      "https://oklahoma.gov/service/all-pages/intermediate-license.html",
  },
  {
    key: "unseen-pedestrian",
    quote:
      "If you see the car in the lane next to you, stop suddenly " +
      "for no apparent reason, slow down and look out. That " +
      "driver may be stopped for a pedestrian.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 10: Sharing the Road - Help the Unseen Pedestrian " +
      "(page 50)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=50",
  },
  {
    key: "vehicle-inspection-horn",
    quote:
      "Horn - Must be audible at 200 feet.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "Vehicle Inspection (page 12)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=12",
  },
  {
    key: "vehicle-inspection-mirrors",
    quote:
      "Mirrors - Must have left outside AND either center inside " +
      "or right outside mirrors.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "Vehicle Inspection (page 12)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=12",
  },
  {
    key: "vehicle-inspection-tires",
    quote:
      "Tires - Must have a minimum tread depth 2/32\", no ply or " +
      "cord exposed in the tread. No bulges/bumps.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "Vehicle Inspection (page 12)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=12",
  },
  {
    key: "view-blocked-intersection",
    quote:
      "If your view is blocked so that you can't see traffic on " +
      "the side street, slow down so that you can stop if a car " +
      "is coming.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - Crossing an " +
      "Intersection (page 30)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=30",
  },
  {
    key: "warning-signs-diamond",
    quote:
      "WARNING SIGNS are diamond-shaped, with a yellow background " +
      "and black letters. They signal conditions immediately " +
      "ahead, such as road hazards, changes in direction or other " +
      "situations.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Warning Signs - " +
      "Black on a Yellow Background (page 21)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=21",
  },
  {
    key: "what-to-expect-tests",
    quote:
      "For the Class D license, there are three tests: the vision " +
      "screening, the written test and the driving test for cars " +
      "and motorcycles.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "What to Expect (page 9)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=9",
  },
  {
    key: "white-solid-line",
    quote:
      "Solid White Line-Traffic moves in the same direction on " +
      "each side of the line, but passing is hazardous, as when " +
      "you're approaching an intersection or merge area.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Lane Usage and " +
      "Maneuvers (page 32)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=32",
  },
  {
    key: "work-zone-fines-doubled",
    quote:
      "CONSTRUCTION SITES can be hazardous. You must slow down to " +
      "the posted speed. Speeding fines are doubled in a " +
      "construction or maintenance zone when workers or equipment " +
      "are present.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Construction and " +
      "Maintenance Signs - Construction Sites (page 23)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=23",
  },
  {
    key: "work-zone-penalty",
    quote:
      "On conviction-misdemeanor punishable by a fine between " +
      "$100.00 to $1,000.00 and/or up to 30 days in jail plus " +
      "liability for damage to property and injury or death of " +
      "another person.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Penalty for " +
      "Failing to Obey Construction and Maintenance Signs, " +
      "Signals and Markings (page 24)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=24",
  },
  {
    key: "work-zone-safe-course",
    quote:
      "If you are under 18, you must complete the free online " +
      "Oklahoma Work Zone Safe Course and bring the certificate " +
      "of completion to your drive test",
    source:
      "Service Oklahoma - Intermediate License (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Intermediate License - Eligibility",
    url:
      "https://oklahoma.gov/service/all-pages/intermediate-license.html",
  },
  {
    key: "written-retest-wait",
    quote:
      "If you fail the written test, by law you must wait at " +
      "least one day before retesting.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "What to Expect - Written Test (page 9)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=9",
  },
  {
    key: "written-test-content",
    quote:
      "The written exam is a 20-question test that will test you " +
      "on Oklahoma traffic laws, road rules, road signs, and safe " +
      "driving practices.",
    source:
      "Service Oklahoma - Learner Permit (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Learner Permit - Plan Ahead",
    url:
      "https://oklahoma.gov/service/all-pages/learner-permit.html",
  },
  {
    key: "written-test-eligibility",
    quote:
      "Be at least 14 years old Must not have a suspended license " +
      "in Oklahoma or any other state",
    source:
      "Service Oklahoma - Written Knowledge Test (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Written Knowledge Test - Requirements",
    url:
      "https://oklahoma.gov/service/popular-services/written-test.html",
  },
  {
    key: "written-test-format",
    quote:
      "You will have 60 minutes to complete the test. To pass, " +
      "you must correctly answer 15 out of 20 questions.",
    source:
      "Service Oklahoma - Written Knowledge Test (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Written Knowledge Test - Frequently Asked Questions",
    url:
      "https://oklahoma.gov/service/popular-services/written-test.html",
  },
  {
    key: "written-test-online-attempts",
    quote:
      "You have two attempts to pass online before needing to " +
      "visit a Service Oklahoma location.",
    source:
      "Service Oklahoma - Written Knowledge Test (service.ok.gov, " +
      "retrieved 2026-09-06)",
    section:
      "Written Knowledge Test - More Information",
    url:
      "https://oklahoma.gov/service/popular-services/written-test.html",
  },
  {
    key: "written-test-source",
    quote:
      "The questions for a Class D license test will be taken " +
      "from this manual. You will be asked questions about " +
      "Oklahoma traffic laws, safe driving practices and drug and " +
      "alcohol laws/effects.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 1: How to Apply for Your Oklahoma Driver License - " +
      "What to Expect - Written Test (page 9)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=9",
  },
  {
    key: "yellow-dashes",
    quote:
      "Yellow Dashes-Traffic moves in opposite directions on each " +
      "side of the line. Passing is permitted when it's safe.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 6: Lane Usage and Maneuvers - Lane Usage and " +
      "Maneuvers (page 32)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=32",
  },
  {
    key: "yellow-light",
    quote:
      "You must stop if you can stop safely before entering the " +
      "crosswalk at the intersection. Adjust your speed as you " +
      "approach so that you can come to a smooth stop if needed. " +
      "Don't speed up to beat the light.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Traffic Signals - " +
      "Yellow Light (page 26)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=26",
  },
  {
    key: "yield-blind-15-feet",
    quote:
      "The law says you should: ▶ Stop immediately and let the " +
      "person pass. ▶ Stop outside the crosswalk, not in the " +
      "crosswalk. ▶ A vehicle must stop 15 feet from a blind " +
      "person in the roadway or at an intersection.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - You Must Yield " +
      "to Blind Persons (page 28)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=28",
  },
  {
    key: "yield-children-playing",
    quote:
      "You are responsible for driving with extreme caution when " +
      "children are present. Slow down near schools and " +
      "playgrounds and in residential areas.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - You Must Yield " +
      "to Children Playing in the Streets (page 28)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=28",
  },
  {
    key: "yield-emergency",
    quote:
      "To emergency vehicles-Yield to police cars, fire engines " +
      "and ambulances when they are sounding a siren and/or " +
      "flashing warning lights. Pull over to the right edge of " +
      "the roadway, clear of intersections and stop until the " +
      "emergency vehicle has passed.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - You Must Always " +
      "Yield (page 29)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=29",
  },
  {
    key: "yield-left-turn",
    quote:
      "When making a left turn-Yield to all oncoming traffic. " +
      "Slow down and stop if you have to. Go only when there is " +
      "enough clear distance for you to turn without interfering " +
      "with oncoming traffic.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - You Must Always " +
      "Yield (page 29)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=29",
  },
  {
    key: "yield-no-signs",
    quote:
      "When entering or crossing highways without traffic signs " +
      "or signals-Stop and yield to approaching traffic and go " +
      "only when it's safe to do so.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - You Must Always " +
      "Yield (page 29)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=29",
  },
  {
    key: "yield-private-road",
    quote:
      "When entering or crossing a public road from a private " +
      "road, alley, driveway or building- stop before the " +
      "sidewalk or crosswalk, then go when it's safe to do so.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - You Must Always " +
      "Yield (page 29)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=29",
  },
  {
    key: "yield-sign-slow",
    quote:
      "At intersections with yield signs-Slow down to a " +
      "reasonable speed and be ready to stop if other vehicles or " +
      "pedestrians are approaching the intersection. Cross or " +
      "enter the flow of traffic when it's safe to do so.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - You Must Always " +
      "Yield (page 29)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=29",
  },
  {
    key: "yield-stop-sign",
    quote:
      "When you have a stop sign-Stop before the crosswalk. Yield " +
      "to pedestrians and to vehicles in or approaching the " +
      "intersection.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 5: Right-of-Way - When to Yield - You Must Always " +
      "Yield (page 29)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=29",
  },
  {
    key: "yield-triangle",
    quote:
      "Slow down and be ready to stop if needed. Let oncoming " +
      "vehicles pass before crossing or entering the flow of " +
      "traffic.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 4: Signs, Signals and Markings - Regulatory Signs " +
      "- Yield: Red and White Triangle (page 19)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=19",
  },
  {
    key: "zero-tolerance-fines",
    quote:
      "First conviction-Fine of $100-$500 or community service or " +
      "treatment program or any combination of fine, community " +
      "service or treatment program.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Zero Tolerance for Drivers under 21 - Fines and " +
      "Penalties (page 67)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=67",
  },
  {
    key: "zero-tolerance-revocations",
    quote:
      "First conviction or offense for driving under the " +
      "influence (DUI), actual physical control (APC), refusal of " +
      "the breath or blood test or a measurable amount of BAC, " +
      "the revocation would be for a period of SIX MONTHS.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Zero Tolerance for Drivers under 21 - Lengths of " +
      "License Revocation (page 67)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=67",
  },
  {
    key: "zero-tolerance-second",
    quote:
      "Second conviction or offense for DUI, APC or refusal of " +
      "the breath or blood test or a measurable amount of BAC, " +
      "the second revocation would be for a period of 12 MONTHS.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Zero Tolerance for Drivers under 21 - Lengths of " +
      "License Revocation (page 67)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=67",
  },
  {
    key: "zero-tolerance-under-16",
    quote:
      "If you are less than 16 years of age at the time or will " +
      "be less than 16 at the end of the cancellation, Service " +
      "Oklahoma shall extend the cancellation until you are 16 " +
      "years of age.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Zero Tolerance for Drivers under 21 - Lengths of " +
      "License Revocation (page 67)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=67",
  },
  {
    key: "zero-tolerance-under-21",
    quote:
      "It is unlawful and punishable, as stated below, for any " +
      "person under 21 years of age to drive, operate or be in " +
      "actual physical control (APC) of a motor vehicle within " +
      "our state who: Has ANY measurable quantity of alcohol in " +
      "the person's blood or breath at the time a test is " +
      "administered.",
    source:
      "Oklahoma Driver Manual (Service Oklahoma, updated " +
      "11/24/25)",
    section:
      "Chapter 12: Alcohol, Drugs and Driving - Oklahoma Is Tough " +
      "on DUIs - Zero Tolerance for Drivers under 21 - The Law " +
      "Says (page 67)",
    url:
      "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf#page=67",
  },
];
