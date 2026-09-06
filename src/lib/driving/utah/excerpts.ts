import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Utah bank. Three kinds of source sit
// behind them, and each is here for a reason:
//
//  - The Utah Driver Handbook, published by the Driver License Division of the
//    Utah Department of Public Safety. The cover reads "Driver Handbook
//    2026-2027" and there is no other edition label on the book; its page 4
//    lists the laws that took effect on May 6, 2026. It runs 115 PDF pages and
//    is titled an AAMVA Model Non-Commercial handbook, which shows: it is
//    unusually complete for a state manual, printing the statutory speed table,
//    the whole fourteen-item no-parking list, the point schedule and the
//    five-way school-bus matrix that many states leave to the statute. Most of
//    what is quoted below comes from it. The page number in each `section` is
//    the PRINTED page; the PDF page is ten higher, and that is what the
//    #page= anchor in each `url` uses.
//  - Title 41, Chapter 6a of the Utah Code (the Traffic Code), published on the
//    Legislature's own site. The handbook states several rules in everyday
//    language and stops short of the operative wording - what a signal must be
//    given before, how far back a vehicle may follow a fire engine, what the
//    speed is where nothing is posted, exactly which vehicles the three-foot
//    passing rule protects. Where both say the same thing, the handbook is
//    quoted; where only the statute states the number, the statute is. Two 2026
//    amendments matter here and are quoted from the statute because the
//    handbook has not caught up: 41-6a-804(5) now says no signal is required
//    entering or leaving a roundabout, and 41-6a-706.5 was re-enacted in the
//    2026 session.
//  - Five Driver License Division web pages: Learner Permit, Teen Driver
//    Restrictions, Traffic Safety and Trends Exam, Written Knowledge Practice
//    Test and Points System. The handbook never states the written test's
//    LENGTH - it gives the 80 percent pass mark and nothing else - and it never
//    prints the midnight-to-5am and immediate-family restrictions that apply
//    after licensing. Those pages carry all of it, and they are revised far
//    more often than the book.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased and
// nothing was retyped: each entry names an opening and a closing phrase, and a
// script lifted the text between them straight out of the same normalized
// stream the verifier reads. Only the four normalizations the sibling banks use
// were applied, to the extracted text and to nothing else: curly quotes, en
// dashes and em dashes fold to ASCII; runs of whitespace, including the line
// breaks the PDF inserts mid-sentence, collapse to single spaces; the section
// symbol is spelled out as "Section"; and where a source states a rule as a
// stem followed by a bulleted list, the items run together in the order they
// appear - no words are changed, dropped or reordered.
//
// The sources' own slips are preserved exactly as they stand, because a quote
// that has been tidied up is no longer a quote. The handbook sets a great deal
// of its body text with discretionary hyphens, and when the PDF's text is
// extracted those words come apart at the break: "infor mation", "vehic ular",
// "dis tances", "corre sponds", "in creased", "com mits", "me ter on", "ve
// hicle". They are the book's own line breaks, not our typing, and they are
// left alone. Among the substantive slips left as they stand: page 36's
// "Traveling on a highway with five or more lanes and a shared center turn lane
// is only required for the vehicle's in both lanes behind the school bus to
// come to a complete stop", and page 82's "Rules for motorcycles, e-bikes,
// mopes, scooters vary from city to city".

export const utahExcerpts: HandbookExcerpt[] = [
  {
    key: "abs-use",
    quote:
      "To use ABS, press the brake pedal as hard as possible and " +
      "apply pressure. ABS only works if you stay on the brake " +
      "pedal.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance - B. Emergencies and " +
      "Avoiding Crashes (page 67)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=77",
  },
  {
    key: "acceleration-lane",
    quote:
      "When on a multi-lane highway, you should use the " +
      "acceleration lane to match your speed with other vehicles " +
      "before pulling onto the roadway.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Entering a Multi-Lane Highway " +
      "(page 40)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=50",
  },
  {
    key: "adas-not-driving",
    quote:
      "Safety features are meant to assist you in driving; they are " +
      "not there to drive the vehicle. You must remain engaged and " +
      "focused on the driving task at all times.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 15: Vehicle Equipment - Advanced Driver Assistance " +
      "Systems (ADAS) (page 90)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=100",
  },
  {
    key: "adas-skills-test",
    quote:
      "When taking your driving skills test, you cannot use certain " +
      "safety features, such as parking assist and cruise control.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 15: Vehicle Equipment - Advanced Driver Assistance " +
      "Systems (ADAS) (page 90)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=100",
  },
  {
    key: "address-change-10-days",
    quote:
      "Class D: If you have a change of address, you are required " +
      "by law to notify the division of the new address within 10 " +
      "DAYS of moving.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 4: Driver License Types - H. Address Change (page " +
      "19)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=29",
  },
  {
    key: "age-19-no-driver-ed",
    quote:
      "Applicants 19 years of age or older who have never been " +
      "licensed to drive a motor vehicle may be licensed without " +
      "completing a driver education course if they hold a learner " +
      "permit for 90 days and complete at least 40 hours of driving " +
      "(10 hours after sunset.)",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 3: Driver Education/Permits - Completion of Driver " +
      "Education Age 19+ (page 6)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=16",
  },
  {
    key: "air-bag-speed",
    quote:
      "An air bag is not a soft, billowy pillow. To do its " +
      "important job, an air bag comes out of the dashboard at up " +
      "to 200 mph-faster than the blink of an eye.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 7: Preparing Your Vehicle - E. Air Bags (page 29)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=39",
  },
  {
    key: "alcohol-vision-002",
    quote:
      "Vision is impacted at 0.02 blood alcohol content (BAC) for " +
      "all drivers. The most important sense you use in driving is " +
      "vision.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 10: Alcohol/Drugs & Driving - A. Effects of Alcohol " +
      "and Drugs (page 51)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=61",
  },
  {
    key: "animals-do-not-swerve",
    quote:
      "Do not swerve to avoid the animal; your risk of personal " +
      "injury may be greater if you do. Keep your vehicle under " +
      "control and in the travel lane.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - B. " +
      "Avoiding Collisions with Animals (page 57)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=67",
  },
  {
    key: "atv-speed-50",
    quote:
      "The street-legal ATV/UTV or FSV operating on a highway may " +
      "not exceed the lesser of the posted speed limit or 50 miles " +
      "per hour.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - K. Street Legal All-Terrain " +
      "(page 86)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=96",
  },
  {
    key: "automatic-fail-pedestrian",
    quote:
      "If you do not yield to pedestrians or other roadway users.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 6: Examinations - Dangerous Actions/Automatic " +
      "Failures (page 25)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=35",
  },
  {
    key: "automatic-failures",
    quote:
      "If you receive a traffic citation for a moving violation, " +
      "disobey signs or signals, speed, roll through stops, or " +
      "ignore traffic laws.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 6: Examinations - Dangerous Actions/Automatic " +
      "Failures (page 25)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=35",
  },
  {
    key: "bac-005",
    quote:
      "If you are over 0.05 BAC (0.04 for CDL), you violate the " +
      "law. Utah law also states that driving is a violation if you " +
      "are impaired to the degree that it is unsafe to operate a " +
      "vehicle, even if you are under the legal limit.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 10: Alcohol/Drugs & Driving - C. Alcohol and the Law " +
      "(page 52)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=62",
  },
  {
    key: "backing-no-freeway",
    quote:
      "Do not back up on a freeway or interstate. Keep your vehicle " +
      "on the right-hand side of the road, and do not back " +
      "unnecessarily long dis tances.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - B. Backing (Reverse) (page 30)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=40",
  },
  {
    key: "basic-speed-law",
    quote:
      "In Utah, the basic speed law states that you may never drive " +
      "faster than is reasonable and prudent under the existing " +
      "conditions.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - E. Speed (page 44)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=54",
  },
  {
    key: "bicycle-check-door",
    quote:
      "When parking on the street, check to the sides and rear for " +
      "bicyclists before opening your vehi cle door.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - A. Bicycles (page 75)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=85",
  },
  {
    key: "bicycle-dim-500",
    quote:
      "Dim your headlights within 500 feet when approaching or " +
      "overtaking bicyclists at night.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - A. Bicycles (page 75)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=85",
  },
  {
    key: "bicycle-is-vehicle",
    quote:
      "Bicycles are considered vehicles when on roadways. " +
      "Bicyclists are required and expected to follow the same " +
      "rules of the road as motorized vehicles.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - A. Bicycles (page 74)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=84",
  },
  {
    key: "bicycle-lane-no-park",
    quote:
      "Do not stop, park, or drive on a designated bicycle path or " +
      "lane unless you are entering or leaving an alley or drive " +
      "way, performing official duties directed by a police " +
      "officer, or an emergency exists. Dedicated bicycle lanes are " +
      "marked with solid white lines.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - A. Bicycles (page 74)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=84",
  },
  {
    key: "bicycle-lights",
    quote:
      "You are required to have a white headlight, red taillight or " +
      "reflector, and side reflectors, all vis ible for at least " +
      "500 feet any time you ride earlier than a half-hour before " +
      "sunrise, later than a half-hour after sunset, or whenever it " +
      "is otherwise difficult to make out vehicles 1000 feet away.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - A. Bicycles (page 76)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=86",
  },
  {
    key: "bicycle-no-pass-intersection",
    quote:
      "When approaching within 100 feet of, or traversing, any " +
      "intersection or railroad grade crossing unless otherwise " +
      "indicated by an official traffic control device.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - A. Bicycles (page 75)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=85",
  },
  {
    key: "bicycle-three-feet",
    quote:
      "Utah law requires a minimum of three feet of distance from " +
      "any bicyclist or vulnerable user of the highway you are " +
      "passing.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - A. Bicycles (page 75)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=85",
  },
  {
    key: "bicycle-two-abreast",
    quote:
      "Ride no more than two abreast and only if you would not " +
      "impede traffic.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - A. Bicycles (page 76)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=86",
  },
  {
    key: "black-ice",
    quote:
      "In Utah, we also have a particular problem with black ice. " +
      "Black ice is difficult to see on the roadway and appears " +
      "more like a wet spot than a patch of ice.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - L. " +
      "Skidding (page 61)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=71",
  },
  {
    key: "brake-failure",
    quote:
      "If your brakes stop working while driving, use the parking " +
      "brake. Apply the parking brake slowly to avoid locking the " +
      "rear wheels. Be ready to release the brake if you start to " +
      "skid.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance - B. Emergencies and " +
      "Avoiding Crashes (page 66)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=76",
  },
  {
    key: "breakdown-flares",
    quote:
      "Put emergency flares or triangles 200 to 300 feet behind " +
      "your vehicle, giving other drivers time to change lanes or " +
      "slow down.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance - Breakdowns (page 67)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=77",
  },
  {
    key: "breakdown-stay-in-vehicle",
    quote:
      "If you are off to the side of the road and need help, stay " +
      "in your vehicle as much as possible and keep walking on the " +
      "road to a minimum.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance - B. Emergencies and " +
      "Avoiding Crashes (page 66)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=76",
  },
  {
    key: "bridges-freeze-first",
    quote:
      "When sleet, freez ing rain or snow starts to fall, remember " +
      "that bridges, ramps, and overpasses are likely to freeze " +
      "first.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - O. Weather " +
      "(page 63)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=73",
  },
  {
    key: "car-seat-back-seat",
    quote:
      "Children 12 years of age and younger should continue to ride " +
      "in the back seat.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 7: Preparing Your Vehicle - D. Car Seats (page 28)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=38",
  },
  {
    key: "car-seat-eight-and-under",
    quote:
      "All children aged eight and under must be properly secured " +
      "in an approved child safety seat unless they are 57 inches " +
      "tall.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 7: Preparing Your Vehicle - D. Car Seats (page 28)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=38",
  },
  {
    key: "car-seat-rear-facing",
    quote:
      "Children must be rear-facing in the back seat until at least " +
      "two years of age and 30 pounds or longer if the car seat " +
      "allows.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 7: Preparing Your Vehicle - D. Car Seats (page 28)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=38",
  },
  {
    key: "class-d-age-16",
    quote:
      "To obtain an original regular Class D license, you must be " +
      "at least 16 years of age.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 4: Driver License Types - A. License Types (page 10)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=20",
  },
  {
    key: "complete-stop-situations",
    quote:
      "Many people seem to feel that a rolling stop is adequate " +
      "when required to stop. The following situa tions are times " +
      "when you must make a complete stop: Steady (non-flashing) " +
      "red light or at a flashing red light. All stop signs.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - H. Stopping (page 35)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=45",
  },
  {
    key: "crash-exchange",
    quote:
      "Your name and address. Vehicle registration number. Your " +
      "insurance information, including the agent or provider's " +
      "name and phone number.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance (page 65)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=75",
  },
  {
    key: "crash-hit-and-run-felony",
    quote:
      "It is a third-degree felony for a person to fail to stop at " +
      "the scene of an injury crash.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance (page 65)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=75",
  },
  {
    key: "crash-render-aid",
    quote:
      "You are required to render reasonable assistance to any " +
      "person injured in the crash, including trans porting or " +
      "making arrangements for transporting the injured person to a " +
      "physician or hospital for medical treatment if it is " +
      "apparent that treatment is necessary or the injured person " +
      "requests transpor tation.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance (page 65)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=75",
  },
  {
    key: "crash-report-2500",
    quote:
      "If the crash results in injuries, death, or at least $2500 " +
      "in total property damage, you must notify law enforcement " +
      "(911) immediately.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance (page 65)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=75",
  },
  {
    key: "crash-stop-immediately",
    quote:
      "If you are involved in a crash-stop immediately. You may be " +
      "penalized severely for not remaining at the scene of a crash " +
      "in which you are involved. Your driver license may be " +
      "suspended or revoked for up to one year.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance (page 65)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=75",
  },
  {
    key: "crosswalk-stop-line",
    quote:
      "At a stop sign or signal, you must stop be hind the stop " +
      "line or crosswalk. If crosswalks are not marked, you must " +
      "stop before the intersection or stop sign. You must yield to " +
      "pedestrians entering or in a crosswalk, even if it is not " +
      "marked.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Crosswalks and Stop Lines " +
      "(page 44)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=54",
  },
  {
    key: "dead-red-90-seconds",
    quote:
      "An operator of a motorcycle, moped, or bicycle who is 16 " +
      "years of age or older may proceed through an intersection " +
      "after coming to a complete stop at a stop line or " +
      "intersection and waiting at least 90 seconds,",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Lane Filtering/Splitting " +
      "(page 82)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=92",
  },
  {
    key: "dead-signal-yield-right",
    quote:
      "If you approach an intersection where the traffic lights are " +
      "not working, you must first come to a com plete stop before " +
      "entering the intersection and yield the right-of-way to any " +
      "vehicle on the right unless otherwise directed by a peace " +
      "officer.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - I. Traffic Signs (page 46)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=56",
  },
  {
    key: "def-alcohol-restricted",
    quote:
      "Alcohol Restricted Driver (ARD)-a person prohibited from " +
      "operating a vehicle with any alcohol in their body. Occurs " +
      "after a conviction, license suspension, or revocations for " +
      "alcohol-related offenses.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 1)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=11",
  },
  {
    key: "def-bicycle",
    quote:
      "Bicycle-a wheeled vehicle propelled by human power by feet " +
      "or hands acting upon pedals or cranks, with a seat or saddle " +
      "designed to be operated on the ground. Wheels are not less " +
      "than 14 inches in diameter.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 1)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=11",
  },
  {
    key: "def-blind-spots",
    quote:
      "Blind Spots-the area of roadway that can't be seen with " +
      "mirrors while operating a vehicle.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 1)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=11",
  },
  {
    key: "def-cancellation",
    quote:
      "Cancellation-termination of a driver license issued through " +
      "error, fraud, or upon application for a state-issued driver " +
      "license or ID card, or for which necessary consent has been " +
      "withdrawn.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 1)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=11",
  },
  {
    key: "def-careless-driving",
    quote:
      "Careless Driving-a person operating a motor vehicle is " +
      "guilty of careless driving if the person com mits two or " +
      "more moving traffic violations within a single continuous " +
      "period of driving",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 1)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=11",
  },
  {
    key: "def-denied",
    quote:
      "Denied-withdrawal of driving privilege.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 1)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=11",
  },
  {
    key: "def-extreme-dui",
    quote:
      "Extreme DUI-an offense of driving under the influence where " +
      "there is admissible evidence that the individual: i) had a " +
      "blood breath alcohol level of .16 or higher; or (ii) had a " +
      "blood or breath alcohol level of .05 or higher in addition " +
      "to any measurable controlled substance;",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 1)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=11",
  },
  {
    key: "def-head-checks",
    quote:
      "Head Checks-checking your blind spot by turning your head " +
      "and looking over your shoulder in the direction you plan on " +
      "moving.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 2)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=12",
  },
  {
    key: "def-highway",
    quote:
      "Highway-the entire width between property lines of every way " +
      "or place as a matter of right for vehic ular travel.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 2)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=12",
  },
  {
    key: "def-iid",
    quote:
      "Ignition Interlock Device (IID)-a constant monitoring device " +
      "that requires a breath alcohol sample to start and operate a " +
      "vehicle.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 2)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=12",
  },
  {
    key: "def-low-speed-vehicle",
    quote:
      "Low-Speed Vehicle-a four-wheeled electric motor vehicle " +
      "designed to be operated at speeds of not more than 25 miles " +
      "per hour and that has a capacity of not more than four " +
      "passengers, including the driver.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 2)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=12",
  },
  {
    key: "def-motorcycle",
    quote:
      "Motorcycle-a motor vehicle, except farm tractors, that has a " +
      "saddle for the rider and is designed to travel with not more " +
      "than three wheels in contact with the ground.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 2)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=12",
  },
  {
    key: "def-operator",
    quote:
      "Operator-a person in actual physical control of a motor " +
      "vehicle.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 2)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=12",
  },
  {
    key: "def-provisional",
    quote:
      "Provisional License-a Utah license issued to any person " +
      "under 21 years of age.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 3)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=13",
  },
  {
    key: "def-revocation",
    quote:
      "Revocation-termination of the privilege to drive a motor " +
      "vehicle.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 3)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=13",
  },
  {
    key: "def-roundabout",
    quote:
      "Roundabout-a traffic roundabout is a circular intersection " +
      "that flows counterclockwise.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 3)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=13",
  },
  {
    key: "def-suspension",
    quote:
      "Suspension-temporary withdrawal of the privilege to drive.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 3)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=13",
  },
  {
    key: "def-traffic-check",
    quote:
      "Traffic Check-a defensive driving scan for other traffic, " +
      "pedestrians, or any other obstacles you may encounter while " +
      "driving.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 3)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=13",
  },
  {
    key: "dim-500-feet",
    quote:
      "If your vehicle's high beam lights are on and a car is " +
      "coming toward you, dim your lights before you get within 500 " +
      "feet of the oncoming car.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - J. Night " +
      "Driving (page 60)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=70",
  },
  {
    key: "dim-following-300",
    quote:
      "If you are following a car, dim your lights when you are " +
      "within 300 feet of the vehicle ahead of you.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - J. Night " +
      "Driving (page 60)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=70",
  },
  {
    key: "distraction-definition",
    quote:
      "A distraction is anything that takes your mind or body away " +
      "from driving. Distractions can cause crashes, injuries, and " +
      "deaths.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges (page 56)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=66",
  },
  {
    key: "dld-50-question-closed-book",
    quote:
      "Required to pass a 50-question closed-book test.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Learner Permit - Written Knowledge Test",
    url:
      "https://dld.utah.gov/learner-permit/",
  },
  {
    key: "dld-ddc-reduction",
    quote:
      "This DDC may only be used once every three years and will " +
      "reduce the points on a record by a maximum of 50 points.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Utah Points System - Defensive Driving Course",
    url:
      "https://dld.utah.gov/points-system/",
  },
  {
    key: "dld-night-restriction",
    quote:
      "No driving between the hours of midnight and 5 am unless " +
      "accompanied by a licensed driver (21 or older), traveling " +
      "to/from work, an emergency situation, agricultural " +
      "operations, or school-sponsored activities.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Teen Driver Restrictions - Nighttime Driving Restrictions",
    url:
      "https://dld.utah.gov/teen-driver-restrictions/",
  },
  {
    key: "dld-out-of-state-permit",
    quote:
      "We will accept your out-of-state learner permit to count " +
      "towards the 6-month holding period requirement.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Learner Permit - Other States",
    url:
      "https://dld.utah.gov/learner-permit/",
  },
  {
    key: "dld-passenger-restriction",
    quote:
      "For the first six months or until age 18, you cannot drive " +
      "with non-immediate family members (no friends), unless a " +
      "licensed driver at least 21 is sitting in the passenger " +
      "seat, for agricultural operations, or responding to an " +
      "emergency.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Teen Driver Restrictions - Passenger Restrictions",
    url:
      "https://dld.utah.gov/teen-driver-restrictions/",
  },
  {
    key: "dld-permit-18-months",
    quote:
      "Written knowledge test scores and permits are valid for 18 " +
      "months.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Learner Permit - Validity Period",
    url:
      "https://dld.utah.gov/learner-permit/",
  },
  {
    key: "dld-permit-age-15",
    quote:
      "To apply for a learner permit, you must be at least 15 years " +
      "of age.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Learner Permit - Age Requirements",
    url:
      "https://dld.utah.gov/learner-permit/",
  },
  {
    key: "dld-points-adult",
    quote:
      "If you accumulate 200 or more points in three years, you may " +
      "be suspended for three months to a year.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Utah Points System - Adult Points",
    url:
      "https://dld.utah.gov/points-system/",
  },
  {
    key: "dld-points-minor",
    quote:
      "If you accumulate 70 or more points in three years, you may " +
      "be suspended or denied for 30 days to a year.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Utah Points System - Minor Points (20 and under)",
    url:
      "https://dld.utah.gov/points-system/",
  },
  {
    key: "dld-practice-30",
    quote:
      "This 30-question resource is provided solely to familiarize " +
      "you with the format and style of questions on the official " +
      "written knowledge test.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Written Knowledge Practice Test",
    url:
      "https://dld.utah.gov/practice-test/",
  },
  {
    key: "dld-trends-100-percent",
    quote:
      "This online training/exam is required for all first-time " +
      "drivers and requires 100% to pass.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Traffic Safety and Trends Exam - Required Training",
    url:
      "https://dld.utah.gov/traffic-safety-and-trends-exam/",
  },
  {
    key: "dld-trends-before-license",
    quote:
      "you must complete this exam online before you will be issued " +
      "your permanent license.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Traffic Safety and Trends Exam - FAQ",
    url:
      "https://dld.utah.gov/traffic-safety-and-trends-exam/",
  },
  {
    key: "dld-trends-content",
    quote:
      "This training consists of four short educational videos and " +
      "40 exam questions.",
    source:
      "Utah Driver License Division (dld.utah.gov)",
    section:
      "Traffic Safety and Trends Exam - Educational Videos",
    url:
      "https://dld.utah.gov/traffic-safety-and-trends-exam/",
  },
  {
    key: "do-not-trust-signal",
    quote:
      "Driving through an intersection-check traffic thoroughly in " +
      "all directions. Keep both hands on the wheel, slow down, and " +
      "yield to any pedestrians or traffic in the intersection. Do " +
      "not change lanes while proceeding through the intersection.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - C. Intersections (page 42)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=52",
  },
  {
    key: "driver-ed-hours",
    quote:
      "27 hours of high school classroom instruction, or 18 hours " +
      "of commercial/private school, or 30 hours of Utah-approved " +
      "online/home study; and 6 hours behind the wheel instruction; " +
      "and 6 hours of observation by a licensed instructor",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 3: Driver Education/Permits - Required Driver " +
      "Education Hours (page 6)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=16",
  },
  {
    key: "driving-while-suspended",
    quote:
      "If you drive while your driver license is denied, suspended, " +
      "or revoked, you may be sentenced to jail for 90 days and be " +
      "required to pay a fine.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 13: Suspensions and Your Record - C. Driving While " +
      "Denied, Suspended, or Revoked (page 70)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=80",
  },
  {
    key: "dui-abeyance",
    quote:
      "A plea of \"guilty\" or \"no contest\" for a criminal charge of " +
      "DUI that is held in abeyance by the court will not appear on " +
      "the Motor Vehicle Report (MVR) unless you hold a CDL license " +
      "or were operating a commercial motor vehicle at the time you " +
      "were cited.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 10: Alcohol/Drugs & Driving - C. Alcohol and the Law " +
      "(page 52)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=62",
  },
  {
    key: "dui-first-suspension",
    quote:
      "On the first conviction of a DUI for a driver 21 and older, " +
      "the driver license will be suspended for 120 days and two " +
      "years for a second or subsequent offense.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 10: Alcohol/Drugs & Driving - C. Alcohol and the Law " +
      "(page 52)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=62",
  },
  {
    key: "ebike-age-limits",
    quote:
      "An individual under eight years old may not operate an " +
      "electric-assisted bicycle on any public property, highway, " +
      "path, or sidewalk.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Electric-Assisted Bicycle " +
      "(page 77)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=87",
  },
  {
    key: "ebike-class-1",
    quote:
      "CLASS 1-equipped with a motor or electronics that provides " +
      "assistance only when the rider is pedaling and ceases to " +
      "provide assistance when the bicycle reaches the speed of 20 " +
      "MPH.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Electric-Assisted Bicycle " +
      "(page 76)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=86",
  },
  {
    key: "ebike-class-3-age",
    quote:
      "An individual under 16 years old may not operate a Class 3 " +
      "electric-assisted bicycle.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Electric-Assisted Bicycle " +
      "(page 77)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=87",
  },
  {
    key: "emergency-lane",
    quote:
      "Do not drive in the emergency lane-the area of the freeway " +
      "on the outside of the solid white line is for emergency use " +
      "only. Passing another vehicle or stopping to pick up " +
      "passengers in this lane is illegal.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - B. Freeway Driving (page 39)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=49",
  },
  {
    key: "emergency-vehicle-yield",
    quote:
      "When police cars, fire engines, ambu lances, or other " +
      "emergency vehicles approach using sirens, emergency lights, " +
      "or other warning devices, you MUST YIELD the right-of-way. " +
      "DRIVE AT ONCE TO THE RIGHT SIDE OF THE ROAD AND STOP until " +
      "the emergency vehicle has passed.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - B. Emergency Vehicles (page " +
      "77)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=87",
  },
  {
    key: "entrance-ramp-exit",
    quote:
      "Do not use an entrance ramp to exit the freeway-it is " +
      "illegal, even in a traffic jam.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - B. Freeway Driving (page 39)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=49",
  },
  {
    key: "entry-permit-age-15",
    quote:
      "The entry-level learner permit is valid for 18 months and " +
      "entitles you to drive a regular motor vehicle if: You have " +
      "reached a minimum age of 15.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 3: Driver Education/Permits - Entry-Level Learner " +
      "Permit (page 7)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=17",
  },
  {
    key: "express-lane-double-white",
    quote:
      "It is illegal to cross a double white line. Moving in and " +
      "out of the carpool lane is not allowed except in specific " +
      "locations (called access points) with white dotted striping " +
      "rather than solid lines.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Carpool (Express) Lane (page " +
      "40)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=50",
  },
  {
    key: "express-lane-free",
    quote:
      "The express lanes may be used as a carpool lane for those " +
      "vehicles with two or more persons for free. Motorcycles, " +
      "buses, and vehicles with registered clean fuel vehicle decal " +
      "(C decal) may also use the express lane free of charge.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Carpool (Express) Lane (page " +
      "40)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=50",
  },
  {
    key: "fatigue-sleep",
    quote:
      "Get enough sleep-most people need 7 to 9 hours to stay awake " +
      "during the day. Plan to stop every two hours during long " +
      "trips to take a break from driving.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - D. Fatigue " +
      "(page 57)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=67",
  },
  {
    key: "financial-responsibility",
    quote:
      "Anyone who knowingly operates a motor vehicle or permits one " +
      "to be operated without owner's security is guilty of a class " +
      "B misdemeanor, which may result in losing your driver " +
      "license, motor vehicle registration, and license plates.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance - C. Financial " +
      "Responsibility (page 68)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=78",
  },
  {
    key: "fire-vehicle-500",
    quote:
      "Unless you are on official business, do not follow within " +
      "500 feet of any fire vehicle responding to an alarm. You may " +
      "not drive or park on the same block where the fire vehicle " +
      "has stopped to answer an alarm.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - B. Emergency Vehicles (page " +
      "77)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=87",
  },
  {
    key: "flagger",
    quote:
      "A flagger may direct traffic in a work zone. You must do as " +
      "the flagger directs.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Work Zone Signs (page 49)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=59",
  },
  {
    key: "flares-explosives",
    quote:
      "REMEMBER, FLARES AND FUSES MAY NOT BE CARRIED IN VEHICLES " +
      "TRANSPORTING EX PLOSIVES, FLAMMABLE LIQUIDS OR COMPRESSED " +
      "GAS.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 16: Towing - Placement of Warning Devices (page 93)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=103",
  },
  {
    key: "flex-lane",
    quote:
      "A green arrow means you can use the lane. A red X means you " +
      "cannot use the lane.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - A. Flex Lanes (page 39)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=49",
  },
  {
    key: "flooding-six-inches",
    quote:
      "Six inches of water will reach the bottom of most passenger " +
      "cars, causing loss of control or possible stalling.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - E. " +
      "Flooding (page 58)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=68",
  },
  {
    key: "flooding-two-feet",
    quote:
      "Two feet of moving water can carry away most vehicles, " +
      "including sport utility vehicles and pick-up trucks.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - E. " +
      "Flooding (page 58)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=68",
  },
  {
    key: "freeway-no-uturn",
    quote:
      "Do not make U-turns on the freeway-it is illegal.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - B. Freeway Driving (page 39)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=49",
  },
  {
    key: "freeway-speed-limit",
    quote:
      "You should generally drive at a speed similar to that of " +
      "other cars around you. However, you may not legally drive " +
      "faster than the posted speed limit. This also applies to " +
      "getting off of the freeway.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - B. Freeway Driving (page 39)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=49",
  },
  {
    key: "freeway-two-seconds",
    quote:
      "You should always maintain at least two seconds following " +
      "distance behind the vehicle ahead of you. Under adverse " +
      "conditions, the time needs to be increased.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - B. Freeway Driving (page 39)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=49",
  },
  {
    key: "gore-area",
    quote:
      "It is against the law to cross over or to drive in the \"gore " +
      "area.\" The gore area is between the solid white lines of a " +
      "lane of traffic and a lane used to either enter or exit from " +
      "that traffic lane.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Merging and Gore Area (page 31)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=41",
  },
  {
    key: "guide-signs",
    quote:
      "Square or rectangular and are green, brown, or blue. They " +
      "advise you about intersecting roads and direct you to cities " +
      "and towns.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Guide Signs (page 46)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=56",
  },
  {
    key: "handbook-condenses-code",
    quote:
      "This handbook condenses or paraphrases the actual language " +
      "of the Utah Code. Officers of the courts are guided by the " +
      "full text and exact language of the law rather than the Utah " +
      "driver handbook.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 1: Definitions (page 1)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=11",
  },
  {
    key: "headlight-distance",
    quote:
      "All vehicles, except motorcycles, must have at least two " +
      "operational headlights (one on each side), that are white in " +
      "color and can shine 350 feet on high and 100 feet on low " +
      "beams.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 15: Vehicle Equipment (page 91)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=101",
  },
  {
    key: "headlights-when",
    quote:
      "If your vehicle is being operated on a highway at any time " +
      "from sunset to sunrise, or when per sons and vehicles on the " +
      "highway are not clearly discernible at a distance of 1,000 " +
      "feet ahead due to insufficient light or unfavorable " +
      "atmospheric conditions.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - J. Night " +
      "Driving (page 60)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=70",
  },
  {
    key: "hill-park-downhill",
    quote:
      "To downhill park: Signal to the right as you approach the " +
      "curb. Perform a head check over your right shoulder and pull " +
      "parallel to the curb. Turn your wheel toward the curb, " +
      "ensuring your front tire touches the curb to secure the vehi " +
      "cle's position.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Hill Parking (page 32)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=42",
  },
  {
    key: "hill-park-uphill",
    quote:
      "To uphill park: Signal to the right as you approach the " +
      "curb. Perform a head check over your right shoulder and pull " +
      "parallel to the curb.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Hill Parking (page 32)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=42",
  },
  {
    key: "horn-200-feet",
    quote:
      "All motor vehicles must have one functioning horn which must " +
      "be heard under normal condi tions from a distance of no less " +
      "than 200 feet.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 15: Vehicle Equipment (page 91)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=101",
  },
  {
    key: "horse-drawn",
    quote:
      "You may share the road with horse-drawn vehicles or " +
      "horseback riders. They have the same right to the road as a " +
      "motor vehicle. They must follow the same rules you do. Pass " +
      "with care. Do not use your horn or \"rev\" the engine.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Animal-Drawn Vehicles and " +
      "Horseback Riders (page 84)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=94",
  },
  {
    key: "hwc-over-18",
    quote:
      "Utah law allows drivers over 18 years of age to talk on an " +
      "HWC device while driving as long as voice commands are used " +
      "to connect to a call.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - F. " +
      "Handheld Wireless Communication Device (HWC) (page 59)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=69",
  },
  {
    key: "hwc-prohibited",
    quote:
      "A person may not use an HWC device while operating a moving " +
      "motor vehicle on a highway in this state to manually write, " +
      "send, or read a written communication, including: a text " +
      "message, instant messenger, electronic email, dial a phone " +
      "number,",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - F. " +
      "Handheld Wireless Communication Device (HWC) (page 58)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=68",
  },
  {
    key: "hwc-under-18",
    quote:
      "Drivers under the age of 18 may only use an HWC device while " +
      "operating a motor vehicle during a medical emergency, " +
      "reporting a safety hazard, reporting criminal activity, or " +
      "communicating with a parent or legal guardian.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - F. " +
      "Handheld Wireless Communication Device (HWC) (page 59)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=69",
  },
  {
    key: "hydroplane-35",
    quote:
      "Your car may start to hydroplane at speeds over 35 mph. " +
      "Hydroplaning occurs when your front tires ride on water " +
      "instead of the road.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - L. " +
      "Skidding (page 61)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=71",
  },
  {
    key: "iid-first-dui",
    quote:
      "When an individual has been convicted of a first DUI, they " +
      "are automatically restricted to driving a vehicle that has " +
      "an IID installed for 18 months from the date of conviction " +
      "or the effective date of the license suspension or three " +
      "years if they are under the age of 21 when they are " +
      "arrested.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 10: Alcohol/Drugs & Driving - F. Ignition Interlock " +
      "Restricted Driver (page 54)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=64",
  },
  {
    key: "impairment-first-drink",
    quote:
      "Impairment starts with the first drink. Even one drink of " +
      "alcohol can affect a person's ability to operate a motor " +
      "vehicle.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 10: Alcohol/Drugs & Driving - A. Effects of Alcohol " +
      "and Drugs (page 51)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=61",
  },
  {
    key: "impeding-citation",
    quote:
      "You can be issued a citation for impeding traffic if a " +
      "vehicle is following behind you in the left lane of travel " +
      "on a multi-lane highway and you do not change lanes and " +
      "allow the other vehicle to pass.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - B. Freeway Driving (page 39)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=49",
  },
  {
    key: "implied-consent",
    quote:
      "When you drive a vehicle or a motorboat in Utah, it is " +
      "implied that you will submit to a chemical test of your " +
      "breath, blood, urine, or oral fluids to determine the " +
      "alcohol or drug content if asked to do so by a peace " +
      "officer.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 10: Alcohol/Drugs & Driving - Implied Consent Law " +
      "(page 53)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=63",
  },
  {
    key: "intersection-look-left",
    quote:
      "Before moving after a stop, check for traffic and " +
      "bicyclists. Look left, right, and then left again before " +
      "entering the intersection. When a light turns green, make " +
      "sure your path of travel is clear and there is no cross " +
      "traffic.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - C. Intersections (page 41)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=51",
  },
  {
    key: "keep-right-lane",
    quote:
      "On multi-lane roads, always move to or remain in the " +
      "far-right lane unless you are passing another vehicle or the " +
      "lane is blocked.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Proper Lane Usage (page 31)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=41",
  },
  {
    key: "lane-change-steps",
    quote:
      "Checking your mirrors. Signal for at least two seconds in " +
      "the direction you intend to move. Check your \"blind spot\" by " +
      "turning your head and looking over your shoulder in the same " +
      "direc tion.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - C. Lane Changes (page 30)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=40",
  },
  {
    key: "lane-filtering",
    quote:
      "Lane splitting is riding between cars moving at higher " +
      "speeds and is illegal in Utah and considered dangerous. " +
      "However, lane filtering in Utah is legal under specific " +
      "conditions",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Lane Filtering/Splitting " +
      "(page 82)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=92",
  },
  {
    key: "lane-filtering-45",
    quote:
      "The individual is on a roadway with a speed limit of 45 " +
      "miles per hour or less or an off-ramp. Lane filtering is not " +
      "permitted on an on-ramp. The motorcycle is traveling at a " +
      "speed of 15 miles per hour or less. The vehicle being " +
      "overtaken in the same lane is stopped.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Lane Filtering/Splitting " +
      "(page 82)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=92",
  },
  {
    key: "left-lane-move-over",
    quote:
      "A vehicle traveling in the left lane must move safely to the " +
      "right when approached from behind to prevent impeding " +
      "traffic.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - B. Freeway Driving (page 39)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=49",
  },
  {
    key: "left-turn-three-indications",
    quote:
      "A driver turning left may see either the green arrow " +
      "(protected), the solid green light (permitted), or a " +
      "flashing yellow arrow (permitted) signal.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - I. Traffic Signs (page 46)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=56",
  },
  {
    key: "license-required",
    quote:
      "Every resident of Utah who drives a motor vehicle on the " +
      "highways (any public roadway) must have a valid Utah driver " +
      "license, learner permit, or temporary driver license.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 2: Licensing Requirements (page 4)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=14",
  },
  {
    key: "lightning-hardtop",
    quote:
      "Only a hard-topped vehicle will protect you in a lightning " +
      "storm. Make sure all doors are closed and windows are up. Do " +
      "not touch any metal surfaces.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - H. " +
      "Lightning (page 60)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=70",
  },
  {
    key: "merge-yield",
    quote:
      "If you are merging into a lane of traffic, you must yield " +
      "the right-of-way to all vehicles traveling the continuing " +
      "traffic lane that are close enough to be an immediate " +
      "threat.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Merging and Gore Area (page 31)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=41",
  },
  {
    key: "mirrors-adjust",
    quote:
      "Adjust outside mirrors to minimize blind spots by setting " +
      "your mirrors so you can barely see the left and right side " +
      "of your vehicle, ensuring a wide view of adjacent lanes.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 7: Preparing Your Vehicle - B. Adjusting Your " +
      "Mirrors (page 27)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=37",
  },
  {
    key: "motorcycle-follow-two",
    quote:
      "When following a motorcycle, stay at least two seconds back. " +
      "When it is wet on the roadway increase this distance.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - F. Motorcycles (page 81)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=91",
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Give motorcycles an entire lane. Do not share the lane. " +
      "Motorcycles need space to react to other traffic.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - F. Motorcycles (page 81)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=91",
  },
  {
    key: "motorcycle-helmet-21",
    quote:
      "Any motorcycle operator or passenger who is under 21 years " +
      "of age must wear an approved DOT helmet.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - F. Motorcycles (page 81)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=91",
  },
  {
    key: "motorcycle-signal-cancel",
    quote:
      "Do not believe a motorcycle is turning when it has a turn " +
      "signal flashing. Many motorcycle turn signals do not " +
      "self-cancel. The rider may have forgotten to cancel the " +
      "signal.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - F. Motorcycles (page 81)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=91",
  },
  {
    key: "mountain-no-coast",
    quote:
      "Do not coast downhill by shifting into neutral or " +
      "disengaging the clutch.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - I. " +
      "Mountain Driving (page 60)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=70",
  },
  {
    key: "mountain-yield-uphill",
    quote:
      "You must yield to vehicles going uphill if traveling " +
      "downhill on a narrow road.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - I. " +
      "Mountain Driving (page 60)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=70",
  },
  {
    key: "move-over-law",
    quote:
      "When approaching a stationary vehicle adjacent to a highway " +
      "that is not parked in an apparent legal parking area that " +
      "has flashing hazard lights illuminated, the driver shall " +
      "reduce the speed of the ve hicle, provide as much space as " +
      "practical to the stationary vehicle,",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Move Over Law (page 77)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=87",
  },
  {
    key: "move-over-penalty",
    quote:
      "If you are convicted for NOT following the move over law, " +
      "you must attend a four hour live classroom defensive driving " +
      "course within 90 days of conviction. If you fail to attend " +
      "the defensive driving class, your license will be suspended " +
      "for 90 days.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Move Over Law (page 77)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=87",
  },
  {
    key: "mvr-record-years",
    quote:
      "It contains a record of convictions for moving traffic " +
      "violations and suspensions within the past three years. All " +
      "alcohol/drug-related violations, suspensions, and " +
      "revocations remain on the record for 10 years.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 13: Suspensions and Your Record - B. Driving Record " +
      "(MVR) (page 70)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=80",
  },
  {
    key: "narrow-bridge",
    quote:
      "NARROW BRIDGES AND SINGLE-LANE BRIDGES-the first driver to " +
      "the bridge has the rightof-way. Take turns crossing the " +
      "bridge.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - K. Rural " +
      "Roads (page 61)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=71",
  },
  {
    key: "never-assume-row",
    quote:
      "Never think that you have the right of way. Always look at " +
      "the situation and think about safety.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - J. Yielding Right-of-Way " +
      "(page 50)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=60",
  },
  {
    key: "never-pass-list",
    quote:
      "Never pass: If there is an oncoming vehicle. If a curve or " +
      "hill blocks your view. At intersections, or another car when " +
      "stopped at a crosswalk. Before a railroad crossing or " +
      "bridge. In a no-passing zone.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - E. Passing (page 34)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=44",
  },
  {
    key: "night-following-distance",
    quote:
      "Increase your following distance at night by at least two " +
      "seconds.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - J. Night " +
      "Driving (page 61)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=71",
  },
  {
    key: "night-no-sunglasses",
    quote:
      "Do not wear sunglasses or colored lenses at night. Tinted or " +
      "colored lenses reduce the light you need for good vision.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - J. Night " +
      "Driving (page 61)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=71",
  },
  {
    key: "no-lane-change-in-intersection",
    quote:
      "Never attempt to change lanes while driving through an " +
      "intersection. Wait until you have completely cleared the " +
      "intersection before moving to a differ ent lane.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Proper Lane Usage (page 31)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=41",
  },
  {
    key: "no-license-if",
    quote:
      "If you are under the required age of 16. If your driving " +
      "privilege is denied, suspended, revoked, or disqualified in " +
      "Utah or any other state. If you are physically or mentally " +
      "unable to drive safely. If you have not passed the required " +
      "examinations.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 2: Licensing Requirements - Persons Who May Not Have " +
      "a Utah Driver License (page 4)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=14",
  },
  {
    key: "not-a-drop",
    quote:
      "Not-a-Drop Act provides that a person under 21 years of age " +
      "driving with any measurable amount of alcohol in their body " +
      "will have all driving privileges denied for six months for a " +
      "first offense.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 10: Alcohol/Drugs & Driving - B. 21 and Under (page " +
      "52)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=62",
  },
  {
    key: "not-a-drop-second",
    quote:
      "A second or subsequent offense within 10 years of a prior " +
      "denial will result in losing driving privileges for two " +
      "years or until they reach 21, whichever is longer.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 10: Alcohol/Drugs & Driving - B. 21 and Under (page " +
      "52)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=62",
  },
  {
    key: "officer-overrides",
    quote:
      "Regardless of what the traffic lights may indicate, always " +
      "obey the instructions of a police officer at an " +
      "intersection. For example, if the light is green and an " +
      "officer tells you to stop, YOU MUST STOP.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - I. Traffic Signs (page 46)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=56",
  },
  {
    key: "one-way-arrow",
    quote:
      "Traffic moves only in the direction of the arrow. Do not " +
      "turn in the opposite direction of the arrow. Never drive the " +
      "wrong way on a one-way street.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Warning Signs (page 49)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=59",
  },
  {
    key: "park-12-inches",
    quote:
      "If parking next to a curb, the back wheel of your car must " +
      "be no further than 12 inches away from the curb.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Hill Parking (page 33)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=43",
  },
  {
    key: "parking-crosswalk",
    quote:
      "On a crosswalk, or within 20 feet of a crosswalk.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - D. Parking (page 32)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=42",
  },
  {
    key: "parking-fire-station",
    quote:
      "Within 20 feet of the driveway entrance to any fire station, " +
      "if signs are posted, you may not park on the opposite side " +
      "of the road if you are within 75 feet of the fire station " +
      "entrance.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - D. Parking (page 32)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=42",
  },
  {
    key: "parking-prohibited-list",
    quote:
      "On a sidewalk. In front of a public or private driveway. In " +
      "an intersection. Within 15 feet of a fire hydrant.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - D. Parking (page 32)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=42",
  },
  {
    key: "parking-railroad-50",
    quote:
      "On any railroad track or within 50 feet of the nearest rail " +
      "of a railroad crossing.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - D. Parking (page 32)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=42",
  },
  {
    key: "parking-shoulder-interstate",
    quote:
      "On the shoulder of any interstate highway-these areas may be " +
      "used only if your vehicle breaks down or you are in physical " +
      "distress.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - D. Parking (page 32)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=42",
  },
  {
    key: "parking-stop-sign-30",
    quote:
      "Within 30 feet of any flashing beacon, stop sign, yield " +
      "sign, or traffic control signal.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - D. Parking (page 32)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=42",
  },
  {
    key: "passing-left-lane",
    quote:
      "On multi-lane roads, the left lane is for passing slower " +
      "vehicles. Never pass on the shoulder.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - E. Passing (page 34)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=44",
  },
  {
    key: "passing-on-right-roadway",
    quote:
      "When passing on the right, it is illegal to leave the " +
      "roadway.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - E. Passing (page 34)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=44",
  },
  {
    key: "passing-return-200",
    quote:
      "Return to the right-hand lane no less than 200 feet from on " +
      "coming vehicles.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - E. Passing (page 34)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=44",
  },
  {
    key: "pedestrian-no-pass-stopped",
    quote:
      "Never pass vehicles stopped at a crosswalk; there may be " +
      "people crossing that you can't see.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Slow Down, Be Aware, and " +
      "Alert (page 83)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=93",
  },
  {
    key: "pedestrian-stop",
    quote:
      "The driver must stop, particularly when the pedestrian is on " +
      "the same half of the roadway or approaching closely. " +
      "Vehicles must remain stopped until the pedes trian has " +
      "crossed at least the driver's half of the road even if they " +
      "are not in a marked or unmarked crosswalk.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - G. Pedestrians (page 82)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=92",
  },
  {
    key: "permit-holding-periods",
    quote:
      "Age 16 and 17-6 months Age 18-no holding period, but " +
      "applicant must complete an approved driver education course " +
      "Age 19+-90 days (unless applicant completes an approved " +
      "driver education course)",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 3: Driver Education/Permits - Learner Permit Holding " +
      "Periods (page 7)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=17",
  },
  {
    key: "permit-in-possession",
    quote:
      "You have completed driver education and held a learner " +
      "permit for at least six months if you are 16 or 17 years of " +
      "age. If you are 19 years or older, you must hold the learner " +
      "permit for 90 days. Learner permit must be in your immediate " +
      "possession.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 3: Driver Education/Permits - 6-Month Learner Permit " +
      "(page 7)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=17",
  },
  {
    key: "permit-scores-18-months",
    quote:
      "The written knowledge test scores for an entry-level learner " +
      "permit are valid for 18 months. If you renew or let your " +
      "permit expire, you must retake the written knowledge test.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 3: Driver Education/Permits - Entry-Level Learner " +
      "Permit (page 7)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=17",
  },
  {
    key: "permit-supervisor",
    quote:
      "The learner permit entitles an applicant that is younger " +
      "than 18 years old to operate a Class D motor vehicle only " +
      "if: An approved driving instructor is in the seat next to " +
      "the applicant; or",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 3: Driver Education/Permits - Learner Permit (page " +
      "6)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=16",
  },
  {
    key: "points-clearing",
    quote:
      "The point system provides that half of the total points on " +
      "your record will be removed when you drive one full year " +
      "without being convicted of a moving traffic violation. If " +
      "you drive two successive years without a conviction, all " +
      "points will be removed from your record.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 13: Suspensions and Your Record - Clear Points From " +
      "Record (page 73)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=83",
  },
  {
    key: "points-over-21",
    quote:
      "OVER 21 YEARS OF AGE-if you acquire 200 or more points " +
      "within a three year period, you will be asked to appear for " +
      "a hearing.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 13: Suspensions and Your Record - Point Distribution " +
      "(page 72)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=82",
  },
  {
    key: "points-schedule",
    quote:
      "Reckless Driving 80 Speeding (depending on severity) 35-75 " +
      "Failure to yield right-of-way 60 Following to closely " +
      "(tailgating) 60 Wrong side of road 60 Wrong way on one-way " +
      "street 60 Red light 50 Stop sign 50",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 13: Suspensions and Your Record - F. Point System " +
      "(page 72)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=82",
  },
  {
    key: "points-three-years",
    quote:
      "Points for individual convictions are automatically removed " +
      "from your record three years after the date of the " +
      "violation.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 13: Suspensions and Your Record - Clear Points From " +
      "Record (page 73)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=83",
  },
  {
    key: "points-under-21",
    quote:
      "UNDER 21 YEARS OF AGE-if you acquire 70 points or more " +
      "within a three year period, you will be asked to appear for " +
      "a hearing.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 13: Suspensions and Your Record - Point Distribution " +
      "(page 72)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=82",
  },
  {
    key: "police-stop",
    quote:
      "Put your vehicle in park and turn off your engine. Stay in " +
      "the vehicle unless asked to get out. Roll down your window " +
      "so that you and the officer can talk. Remain calm and keep " +
      "your safety belt fastened. Ask your passenger(s) to do the " +
      "same. Keep your hands on the steering wheel.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - I. Police/Traffic Stops (page " +
      "84)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=94",
  },
  {
    key: "power-failure",
    quote:
      "Keep a firm grip on the steering wheel if the engine shuts " +
      "off while driving. The steering wheel may be hard to turn, " +
      "but you can turn it. Look for a safe place to pull off, " +
      "brake gently, and use steady pressure on the pedal.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance - B. Power Failure (page " +
      "67)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=77",
  },
  {
    key: "power-nap",
    quote:
      "If you start to feel tired, stop driving, pull off at an " +
      "exit or rest area and take a 20-minute power nap, or find a " +
      "place to sleep for the night.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - D. Fatigue " +
      "(page 58)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=68",
  },
  {
    key: "practice-40-hours",
    quote:
      "A student must also complete 40 hours of driving (10 hours " +
      "after sunset) with a parent or legal guardian.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 3: Driver Education/Permits - Completion of Driver " +
      "Education for Ages 15-18 (page 6)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=16",
  },
  {
    key: "proof-of-insurance",
    quote:
      "The law states that any time anyone drives a motor vehicle, " +
      "proof of insurance for the vehicle and/or the operator must " +
      "be in the vehicle and shown to any peace officer asking to " +
      "see it.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance - Uninsured Motorist (page " +
      "69)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=79",
  },
  {
    key: "railroad-15-to-50",
    quote:
      "Stop more than 15 feet (but not more than 50 feet) away from " +
      "the nearest rail until it is safe to con tinue. If there is " +
      "a gate, wait for it to be raised.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - H. Stopping (page 35)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=45",
  },
  {
    key: "railroad-advance-sign",
    quote:
      "A round yellow warning sign with an \"X\" symbol and black " +
      "\"RR\" cautions you to slow down, look, and listen for a train " +
      "or railroad vehicle.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Railroad Crossing Signs (page " +
      "47)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=57",
  },
  {
    key: "railroad-clear-line-of-sight",
    quote:
      "After coming to a complete stop, if you suspect the flashing " +
      "lights are not working properly, you may drive through the " +
      "railroad crossing only if you have a clear line of sight of " +
      "at least one mile down the tracks in both directions, there " +
      "is not evidence of an approaching train, and you can cross " +
      "the tracks safely.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - L. Trains and Railroad " +
      "Crossings (page 86)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=96",
  },
  {
    key: "railroad-cross-quickly",
    quote:
      "When crossing railroad tracks, look both ways and cross the " +
      "tracks quickly. Do not stop on the rail road tracks.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Railroad Crossing Signs (page " +
      "47)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=57",
  },
  {
    key: "railroad-flashing-lights",
    quote:
      "If lights are flashing, you must come to a complete stop. " +
      "You may not proceed while the lights are flashing.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - L. Trains and Railroad " +
      "Crossings (page 86)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=96",
  },
  {
    key: "railroad-gates-remain",
    quote:
      "Stop when the lights flash and before the gates begin to " +
      "lower across your traffic lane. Remain stopped until the " +
      "gates are raised and the lights stop flashing. DO NOT DRIVE " +
      "AROUND THE GATES.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Gates (page 87)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=97",
  },
  {
    key: "railroad-no-gate",
    quote:
      "You may not drive through, around, or under any crossing " +
      "gate or barrier at a railroad crossing while they are down " +
      "or being opened or closed.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - L. Trains and Railroad " +
      "Crossings (page 86)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=96",
  },
  {
    key: "railroad-no-pass",
    quote:
      "Use extreme caution at all railroad crossings, and always " +
      "slow down. Never pass a car that is going your direction at " +
      "a railroad crossing.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - L. Trains and Railroad " +
      "Crossings (page 86)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=96",
  },
  {
    key: "railroad-park-50",
    quote:
      "Do not park closer than 50 feet from a railroad crossing " +
      "unless signs indicate that you may or it is allowed by local " +
      "law.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - L. Trains and Railroad " +
      "Crossings (page 86)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=96",
  },
  {
    key: "railroad-pavement-markings",
    quote:
      "A stop line, an \"X\" and the letters \"RR\" may be painted on " +
      "the pavement in front of railroad crossings. These markings " +
      "warn you to be aware of the crossing ahead and to pay partic " +
      "ular attention to the possible approach of a train.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - L. Pavement Markings (page " +
      "87)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=97",
  },
  {
    key: "railroad-stop-15-50",
    quote:
      "When you stop at a railroad crossing, you must be between 15 " +
      "and 50 feet from the nearest rail.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - L. Trains and Railroad " +
      "Crossings (page 86)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=96",
  },
  {
    key: "ramp-meter",
    quote:
      "A lighted \"me ter on\" sign at the entrance to an on-ramp " +
      "will indicate when ramp metering is in effect.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Ramp Meters (page 41)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=51",
  },
  {
    key: "reckless-definition",
    quote:
      "Reckless driving is defined as operating a vehicle in a " +
      "willful and/or wanton disregard for the safety of persons or " +
      "property.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 13: Suspensions and Your Record - E. License " +
      "Revocations (page 71)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=81",
  },
  {
    key: "red-blue-lights",
    quote:
      "Red or blue lights visible from the front of a vehicle may " +
      "not be used except by emergency, school, snow removal, or " +
      "other authorized vehicles.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 15: Vehicle Equipment (page 92)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=102",
  },
  {
    key: "refusal-revocation",
    quote:
      "If you refuse to do so, your driver license would be revoked " +
      "for 18 months for the first offense and 36 months for the " +
      "second or subsequent offenses.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 10: Alcohol/Drugs & Driving - Implied Consent Law " +
      "(page 53)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=63",
  },
  {
    key: "regulatory-signs",
    quote:
      "Square, rectangular, or may have a unique shape. They are " +
      "white with black, red, or green letters or symbols. These " +
      "signs tell you about traffic directions, lane use, turning, " +
      "speed, parking, and other special situations.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Regulatory Signs (page 47)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=57",
  },
  {
    key: "revocation-list",
    quote:
      "A second or subsequent conviction for driving or being in " +
      "actual physical control of a motor ve hicle or a motorboat " +
      "while intoxicated or while any measurable controlled " +
      "substance or metab olite of a controlled substance is in " +
      "your body (including prescribed medications.)",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 13: Suspensions and Your Record - E. License " +
      "Revocations (page 71)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=81",
  },
  {
    key: "right-on-red",
    quote:
      "You may turn right on a red light after coming to a complete " +
      "stop unless posted otherwise.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - H. Traffic Signals (page 46)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=56",
  },
  {
    key: "road-rage-definition",
    quote:
      "Utah law defines road rage as the commission of a criminal " +
      "offense by: An operator of a vehicle; In response to an " +
      "incident that occurs or escalates upon a roadway; and With " +
      "the intent to endanger or intimidate an individual in " +
      "another vehicle",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - A. " +
      "Aggressive/Road Rage Driving (page 56)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=66",
  },
  {
    key: "road-rage-suspension",
    quote:
      "The court may order that your license be suspended for one " +
      "year on the first conviction.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - A. " +
      "Aggressive/Road Rage Driving (page 56)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=66",
  },
  {
    key: "roundabout-yield",
    quote:
      "Slow down as you approach the roundabout. Yield to oncoming " +
      "traffic, and pedestrians enter when it is clear. Proceed " +
      "through the roundabout and exit at the desired street.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - F. Roundabouts (page 45)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=55",
  },
  {
    key: "runaway-ramp",
    quote:
      "You may NOT use a runaway vehicle ramp unless you are in an " +
      "emergency requiring the use of the ramp to stop your " +
      "vehicle. You are prohibited from stopping, standing, or " +
      "parking on a runaway vehi cle ramp or in the pathway of a " +
      "runaway vehicle ramp.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Runaway Vehicle Ramps (page " +
      "41)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=51",
  },
  {
    key: "safety-belt-citation",
    quote:
      "You may be stopped and cited if anyone under 16 years of age " +
      "is unrestrained, and occupants of the vehicle 16 years and " +
      "older may be cited for a safety belt violation if stopped " +
      "for another reason.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 7: Preparing Your Vehicle - Safety Belt Violations " +
      "(page 28)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=38",
  },
  {
    key: "safety-belt-everyone",
    quote:
      "Always fasten your safety belt. Everyone in your vehicle " +
      "must have a fastened safety belt or child seat.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 7: Preparing Your Vehicle - C. Safety Belts (page " +
      "27)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=37",
  },
  {
    key: "safety-belt-fit",
    quote:
      "Pull the shoulder harness across your shoulder and chest " +
      "until it is snug; the lap belt should fit across the hips, " +
      "not your stomach. The shoulder harness should not be under " +
      "your arm or behind your back.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 7: Preparing Your Vehicle - C. Safety Belts (page " +
      "27)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=37",
  },
  {
    key: "safety-belt-force",
    quote:
      "In a crash, the forces exerted on your body equal your " +
      "weight multiplied by the car's speed. For example, if you " +
      "weigh 150 pounds and crash while traveling 30 mph, there " +
      "would be 4,500 pounds of force on your body.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 7: Preparing Your Vehicle - Safety Belt Facts (page " +
      "28)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=38",
  },
  {
    key: "school-bus-fine",
    quote:
      "Fines can run up to $3000; remember, a conviction for " +
      "passing a school bus illegally usually means an increase in " +
      "insurance rates.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - School Bus Stopping (page 36)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=46",
  },
  {
    key: "school-bus-five-lane",
    quote:
      "Traveling on a highway with five or more lanes and a shared " +
      "center turn lane is only required for the vehicle's in both " +
      "lanes behind the school bus to come to a complete stop. " +
      "Vehicles traveling in the opposite direction are not legally " +
      "required to stop.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - School Bus Stopping (page 36)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=46",
  },
  {
    key: "school-bus-four-lane",
    quote:
      "Traveling on a four-lane roadway without a median, traffic " +
      "in both directions is required to stop.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - School Bus Stopping (page 36)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=46",
  },
  {
    key: "school-bus-stop",
    quote:
      "If a school bus displays alternating flashing red light " +
      "signals visible from the front or rear. Stop immediately " +
      "before reaching the bus. Do not proceed until the flashing " +
      "red light or signal has stopped.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - School Bus Stopping (page 36)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=46",
  },
  {
    key: "school-bus-two-lane",
    quote:
      "Traveling on a two-lane roadway, traffic in both directions " +
      "must stop. If traveling on a divided highway with four or " +
      "more lanes with a median separating the traffic, it is only " +
      "necessary for the vehicles in both lanes behind the school " +
      "bus to stop, not the traffic traveling in the opposite " +
      "direction.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - School Bus Stopping (page 36)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=46",
  },
  {
    key: "school-zone-flashing",
    quote:
      "Children are present when lights are flashing in a school " +
      "zone; you must obey a slower speed limit.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - G. Pedestrians (page 82)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=92",
  },
  {
    key: "scooter-limits",
    quote:
      "A person of any age may not operate a motor-assisted " +
      "scooter: In a public parking structure. On public property " +
      "posted as an area prohibiting skateboards. On a highway with " +
      "four or more lanes. On a highway with a posted speed limit " +
      "greater than 15 mph.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - E. Motor-Assisted Scooters " +
      "(page 81)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=91",
  },
  {
    key: "see-rear-wheels",
    quote:
      "When stopping behind an other vehicle, ensure you can see " +
      "the rear wheels of the vehicle in front of you.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Stopping at Stop Line, Crosswalk, " +
      "or Gap (page 31)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=41",
  },
  {
    key: "shared-left-turn-500",
    quote:
      "When making a left turn from a shared turn lane, you may not " +
      "enter the lane more than 500 feet before making the turn " +
      "unless the last car is more than 500 feet from the " +
      "intersection.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Shared Center Left Turn Lane " +
      "(page 44)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=54",
  },
  {
    key: "signal-flashing-red",
    quote:
      "FLASHING RED TRAFFIC LIGHT-stop and look both ways before " +
      "entering the intersection.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - H. Traffic Signals (page 46)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=56",
  },
  {
    key: "signal-flashing-yellow",
    quote:
      "FLASHING YELLOW TRAFFIC LIGHT-slow down and proceed with " +
      "caution. Be prepared to stop for any traffic.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - H. Traffic Signals (page 45)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=55",
  },
  {
    key: "signal-flashing-yellow-arrow",
    quote:
      "FLASHING YELLOW ARROW LIGHT-turns are permitted, but first " +
      "you must yield to oncoming traffic and pedestrians. Oncoming " +
      "traffic has a green light.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - H. Traffic Signals (page 46)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=56",
  },
  {
    key: "signal-green",
    quote:
      "GREEN TRAFFIC LIGHT-you may go through with caution if the " +
      "way is clear.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - H. Traffic Signals (page 45)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=55",
  },
  {
    key: "signal-green-arrow",
    quote:
      "GREEN ARROW LIGHT-vehicles may proceed only in the direction " +
      "of the arrow after yielding to vehicles and pedestrians " +
      "still in the intersection at the time of the light change.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - H. Traffic Signals (page 45)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=55",
  },
  {
    key: "signal-lane-change-curb",
    quote:
      "For two seconds before beginning any lane change. Any time " +
      "you pull to or from a curb.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - F. Signaling (page 35)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=45",
  },
  {
    key: "signal-red",
    quote:
      "RED TRAFFIC LIGHT-you must stop before entering the " +
      "intersection. You must wait behind the stop line, crosswalk, " +
      "or intersection until the light turns green.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - H. Traffic Signals (page 46)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=56",
  },
  {
    key: "signal-red-arrow",
    quote:
      "RED ARROW LIGHT (LEFT TURN)-left turns are prohibited. Stop " +
      "and remain stopped until an indication to proceed is shown.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - H. Traffic Signals (page 46)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=56",
  },
  {
    key: "signal-two-seconds",
    quote:
      "Signals are required: For two seconds before turning.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - F. Signaling (page 34)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=44",
  },
  {
    key: "skid-no-slam-brakes",
    quote:
      "Do not slam on your brakes. Once your car regains traction, " +
      "straighten out your wheels.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - L. " +
      "Skidding (page 62)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=72",
  },
  {
    key: "skid-recovery",
    quote:
      "If you do skid, slowly take your foot off the gas pedal. If " +
      "your rear wheels skid to the right, turn your front wheels " +
      "to the right. If your rear wheels skid to the left, turn " +
      "your front wheels to the left.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - L. " +
      "Skidding (page 62)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=72",
  },
  {
    key: "skills-test-age",
    quote:
      "Be at least 16 years of age to take a driving skills test at " +
      "the DLD.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 6: Examinations - C. Driving Skills Test (page 23)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=33",
  },
  {
    key: "skills-test-occupants",
    quote:
      "The applicant and the examiner are the only occupants " +
      "allowed in the vehicle during the driving skills test.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 6: Examinations - C. Driving Skills Test (page 23)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=33",
  },
  {
    key: "skills-test-one-per-day",
    quote:
      "You may only take one driving skills test daily and may have " +
      "to wait several days or weeks before attempting additional " +
      "tests.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 6: Examinations - C. Driving Skills Test (page 24)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=34",
  },
  {
    key: "slow-moving-triangle",
    quote:
      "A fluorescent or reflective orange and red triangle " +
      "displayed on the rear means the vehicle is moving less than " +
      "25 mph.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - J. Slow Moving Vehicles (page " +
      "84)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=94",
  },
  {
    key: "smoking-with-children",
    quote:
      "It is an infraction to be stopped for smoking in a vehicle " +
      "while transporting children 15 years of age or younger.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 7: Preparing Your Vehicle - Protection of Children " +
      "(page 29)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=39",
  },
  {
    key: "snowplow-no-pass",
    quote:
      "If a snowplow displays flashing yellow lights, an individual " +
      "operating a vehicle near the snowplow may not pass or " +
      "overtake a snowplow on the side of the snowplow where a plow " +
      "blade is deployed.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - E. Passing (page 34)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=44",
  },
  {
    key: "speed-25-business",
    quote:
      "25 miles per hour: In any business or residential area.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - E. Speed (page 44)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=54",
  },
  {
    key: "speed-55-highways",
    quote:
      "55 miles per hour: On major highways, as posted. 65/70/75/80 " +
      "miles per hour: On rural interstate highways.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - E. Speed (page 44)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=54",
  },
  {
    key: "speed-school-20",
    quote:
      "20 miles per hour: When passing a school building or grounds " +
      "during school recess. While children are going to or leaving " +
      "school during opening or closing hours or when flashing " +
      "lights are operating.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - E. Speed (page 44)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=54",
  },
  {
    key: "speed-slow-down-when",
    quote:
      "When approaching and crossing an intersection or railroad " +
      "crossing. When approaching and going around a curve. When " +
      "approaching the top of a hill.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - E. Speed (page 45)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=55",
  },
  {
    key: "speed-too-slow",
    quote:
      "On the other hand, do not drive so slowly that you become a " +
      "source of danger on the road. Peace officers are allowed to " +
      "issue you a citation if you are impeding the normal flow of " +
      "traffic.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - E. Speed (page 45)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=55",
  },
  {
    key: "spui-power-outage",
    quote:
      "If a power outage occurs, the single-point urban interchange " +
      "is not handled like a four-way stop. It is important to " +
      "proceed with extreme caution and courtesy.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Single-Point Urban " +
      "Interchange (page 41)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=51",
  },
  {
    key: "spui-uturn",
    quote:
      "It is legal to make a U-turn from the off-ramp at a " +
      "single-point urban interchange and re-enter the freeway as " +
      "long as you face a green arrow when you begin the maneuver.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Single-Point Urban " +
      "Interchange (page 41)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=51",
  },
  {
    key: "sr22-three-years",
    quote:
      "If you are convicted in a court of law of a violation for " +
      "driving without insurance or driving with out proof of " +
      "insurance, you will be required to carry an SR22 for three " +
      "years and pay a $40 reinstate ment fee.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance - Insurance Coverage (page " +
      "69)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=79",
  },
  {
    key: "stalled-on-tracks",
    quote:
      "If your vehicle stalls on a crossing, immediately get " +
      "everyone out of the car and off the tracks.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - General Railroad Safety " +
      "Information (page 88)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=98",
  },
  {
    key: "steering-both-hands",
    quote:
      "Keep both hands on the outside of the steering wheel at all " +
      "times unless using other controls. Once you have completed " +
      "using other controls, return both hands to the steering " +
      "wheel.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - G. Steering (page 35)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=45",
  },
  {
    key: "stop-line-rule",
    quote:
      "Do not stop over a marked stop line, pedestrian crosswalk, " +
      "sidewalk, or other markers when stopping at a stop sign or " +
      "traffic signal. Do not stop the vehicle in the intersection.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Stopping at Stop Line, Crosswalk, " +
      "or Gap (page 31)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=41",
  },
  {
    key: "stranded-stay-with-vehicle",
    quote:
      "If you become stranded while traveling in cold weather, stay " +
      "with your vehicle. Do not leave your vehicle unless you know " +
      "exactly where you are and how far it is to help.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - O. Weather " +
      "(page 63)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=73",
  },
  {
    key: "stuck-gas-pedal",
    quote:
      "If your vehicle is speeding out of control, shift to neutral " +
      "and look for a safe place to pull off, steer smoothly, brake " +
      "gently, and pull off the road.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance - Stuck Gas Pedal (page " +
      "67)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=77",
  },
  {
    key: "studded-tires",
    quote:
      "Snow tires with metal studs may be used from October 15 " +
      "through March 31 of each year.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - O. Weather " +
      "(page 63)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=73",
  },
  {
    key: "submerged-30-60",
    quote:
      "If your vehicle enters water, it will only float on the " +
      "surface for 30 to 60 seconds so immediately attempt to get " +
      "out of the vehicle.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - N. Vehicle " +
      "Submerged Underwater (page 62)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=72",
  },
  {
    key: "suspension-doubled",
    quote:
      "the length of time your driver license was originally " +
      "denied, suspended, or revoked will be in creased by the " +
      "amount of the original time period.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 13: Suspensions and Your Record - C. Driving While " +
      "Denied, Suspended, or Revoked (page 70)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=80",
  },
  {
    key: "tail-lights-500",
    quote:
      "Vehicles must have two red tail/stop lights mounted on the " +
      "rear. The lights must be visible from 500 feet to the rear " +
      "in regular sunlight.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 15: Vehicle Equipment (page 92)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=102",
  },
  {
    key: "texting-penalty",
    quote:
      "A person convicted of a texting violation is guilty of a " +
      "Class C misdemeanor with a maximum fine of $100",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - F. " +
      "Handheld Wireless Communication Device (HWC) (page 59)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=69",
  },
  {
    key: "three-point-turn-when",
    quote:
      "Use this only if the road is too narrow for a U-turn. It's " +
      "best to go around the block if you can. This should only be " +
      "used on a two-lane road.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Three-Point Turn (page 38)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=48",
  },
  {
    key: "tire-blowout",
    quote:
      "If a tire goes flat, grip the steering wheel firmly, steer " +
      "straight, slow gradually, and take your foot off the gas " +
      "pedal; do not brake.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 12: Crashes and Insurance - Tire Blowout (page 67)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=77",
  },
  {
    key: "tow-connection-15-feet",
    quote:
      "The drawbar or other connections between any tow ve hicles " +
      "may not exceed 15 feet in length from one vehicle to the " +
      "other.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 16: Towing (page 93)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=103",
  },
  {
    key: "tow-red-flag",
    quote:
      "When a connection consists of a chain, rope, or cable, a red " +
      "flag or other signal shall be attached to the con necting " +
      "device. The flag shall be no smaller than 12 inches square " +
      "(one-foot square.)",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 16: Towing (page 93)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=103",
  },
  {
    key: "train-stopping-distance",
    quote:
      "Once the train is set into emergency braking, a 100-car " +
      "freight train traveling at 55 mph will need more than a mile " +
      "to stop-that's approximately 18 football fields.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - General Railroad Safety " +
      "Information (page 88)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=98",
  },
  {
    key: "trains-right-of-way",
    quote:
      "Trains have the right-of-way 100% of the time-over " +
      "ambulances, fire engines, cars, the police, and pedestrians.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - General Railroad Safety " +
      "Information (page 88)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=98",
  },
  {
    key: "trax-light-rail",
    quote:
      "Light rail grade crossings must be treated in the same " +
      "manner as all train crossings. Motorists must wait until the " +
      "gates have entirely raised and the red lights have stopped " +
      "flashing before entering the crossing.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - TRAX Light Rail and " +
      "Streetcars (page 88)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=98",
  },
  {
    key: "trends-exam",
    quote:
      "All first-time applicants (learner permit holder) obtaining " +
      "a Class D license will be required to pass an additional " +
      "test and receive 100% score on this test.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 6: Examinations - B. Traffic Safety and Trends Exam " +
      "(page 23)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=33",
  },
  {
    key: "trends-exam-online",
    quote:
      "This exam is only offered on the Driver License Division " +
      "website and may be taken as often as necessary before " +
      "licensing.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 6: Examinations - B. Traffic Safety and Trends Exam " +
      "(page 23)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=33",
  },
  {
    key: "truck-blind-spot-rule",
    quote:
      "An excellent rule of thumb for motorists sharing the road " +
      "with a tractor-trailer is, \"if you can't see the truck " +
      "driver in their side mirror, they can't see you.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - A Trucker's Blind Spot (page " +
      "80)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=90",
  },
  {
    key: "truck-front-no-zone",
    quote:
      "A loaded truck at 55 mph takes at least 335 feet to stop. " +
      "That's more than 1.5 times the distance a car takes. Never " +
      "pull out in front of a large vehicle or change lanes in " +
      "front of them.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Front No-Zone (page 80)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=90",
  },
  {
    key: "truck-height",
    quote:
      "No vehicle shall exceed a height of 14 feet, including any " +
      "load that may be carried.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - C. Large Trucks (page 78)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=88",
  },
  {
    key: "truck-rear-no-zone",
    quote:
      "Large vehicles have huge blind spots up to 200 feet behind " +
      "them. If you are too close, the driver cannot see your " +
      "vehicle, and you cannot see what is ahead of you.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Rear No-Zone (page 80)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=90",
  },
  {
    key: "truck-stopping-400",
    quote:
      "A fully loaded tractor-trailer may take more than 400 feet " +
      "to come to a complete stop or one-third more than the length " +
      "of a football field.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Braking (page 79)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=89",
  },
  {
    key: "truck-swing-wide",
    quote:
      "Large vehicles sometimes swing wide to the left to clear a " +
      "curb on a right turn. Avoid a crash by not turning until the " +
      "vehicle has fin ished its turn.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Turning and Oncoming Large " +
      "Vehicles (page 79)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=89",
  },
  {
    key: "turn-finish-lane",
    quote:
      "When turning onto a road with multiple lanes, you must " +
      "finish your turn in the lane that corre sponds to the one " +
      "you started from.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Proper Lane Usage (page 31)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=41",
  },
  {
    key: "turn-front-wheels-straight",
    quote:
      "Keep the front wheels aimed straight ahead.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - I. Turns (page 36)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=46",
  },
  {
    key: "turn-multiple-lanes",
    quote:
      "Identify and enter the lane from which you will turn. Stay " +
      "in that lane until the turn is completed. A person may not " +
      "operate a vehicle over, across, or within any part of an " +
      "island.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Multiple Lanes (page 37)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=47",
  },
  {
    key: "turn-stop-behind-line",
    quote:
      "If you must stop before turning because of traffic, signal, " +
      "or signs, smoothly come to a complete stop without skidding " +
      "behind the stop line, crosswalk, or stop sign (whichever " +
      "comes first.)",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - I. Turns (page 36)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=46",
  },
  {
    key: "two-second-rule",
    quote:
      "Follow at a safe distance. Use the two-second rule. Increase " +
      "your following distance in bad weather or poor visibility.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 6: Examinations - Safe Driving Tips (page 26)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=36",
  },
  {
    key: "u-turn-city-law",
    quote:
      "Each city has its laws concerning U-turns. Be sure you know " +
      "the specific law of the city in which you are driving.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - U-Turns (page 38)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=48",
  },
  {
    key: "u-turn-prohibited",
    quote:
      "Never make a U-turn on any curve near the top of a hill " +
      "where you cannot see or be seen from both directions for 500 " +
      "feet, where prohibited by an official traffic control " +
      "device, on a railroad track, railroad grade crossing, or a " +
      "freeway.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - U-Turns (page 38)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=48",
  },
  {
    key: "uca-basic-speed",
    quote:
      "A person may not operate a vehicle at a speed greater than " +
      "is reasonable and prudent under the existing conditions, " +
      "giving regard to the actual and potential hazards then " +
      "existing, including when: (a) approaching and crossing an " +
      "intersection or railroad grade crossing;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-601 - Speed regulations",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S601.html",
  },
  {
    key: "uca-bicycle-one-hand",
    quote:
      "A person operating a bicycle or moped shall keep at least " +
      "one hand on the handlebars at all times.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1112 - Bicycles and mopeds - One hand on " +
      "handlebars",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1112.html",
  },
  {
    key: "uca-bicycle-right-edge",
    quote:
      "shall ride as near as practicable to the right-hand edge of " +
      "the roadway except when: (a) overtaking and passing another " +
      "bicycle or vehicle proceeding in the same direction; (b) " +
      "preparing to make a left turn at an intersection or into a " +
      "private road or driveway;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1105 - Operation of bicycle or moped on and " +
      "use of roadway",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1105.html",
  },
  {
    key: "uca-bicycle-stop-sign",
    quote:
      "an individual operating a bicycle approaching a stop sign " +
      "may proceed through the intersection without stopping at the " +
      "stop sign if: (i) the individual slows to a reasonable " +
      "speed; and",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1105 - Operation of bicycle or moped on and " +
      "use of roadway",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1105.html",
  },
  {
    key: "uca-dead-red-90",
    quote:
      "the traffic-control signal has not detected the operator's " +
      "presence by waiting a reasonable period of time of not less " +
      "than 90 seconds at the intersection or stop line before " +
      "entering the intersection;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-305 - Affirmative defense - Motorcycle, moped " +
      "or bicycle",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S305.html",
  },
  {
    key: "uca-driveway-yield",
    quote:
      "about to enter or cross a highway from any place other than " +
      "another highway shall yield the right-of-way to all vehicles " +
      "approaching on the highway to be entered or crossed;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-903 - Yield right-of-way - Entering or " +
      "crossing highway",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S903.html",
  },
  {
    key: "uca-dui-005",
    quote:
      "has sufficient alcohol in the actor's body that a subsequent " +
      "chemical test shows that the actor has a blood or breath " +
      "alcohol concentration of .05 grams or greater at the time of " +
      "the test;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-502 - Driving under the influence",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S502.html",
  },
  {
    key: "uca-dui-incapable",
    quote:
      "is under the influence of alcohol, any drug, or the combined " +
      "influence of alcohol and any drug to a degree that renders " +
      "the actor incapable of safely operating a vehicle;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-502 - Driving under the influence",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S502.html",
  },
  {
    key: "uca-dui-passenger-under-16",
    quote:
      "a violation of Subsection (1) is a class A misdemeanor if " +
      "the actor: (i) has a passenger younger than 16 years old in " +
      "the vehicle at the time of the offense;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-502 - Driving under the influence - Penalties",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S502.html",
  },
  {
    key: "uca-emergency-pull-right",
    quote:
      "yield the right-of-way and immediately move to a position " +
      "parallel to, and as close as possible to, the right-hand " +
      "edge or curb of the highway, clear of any intersection; and " +
      "(b) then stop and remain stopped until the authorized " +
      "emergency vehicle has passed.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-904 - Approaching emergency vehicle",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S904.html",
  },
  {
    key: "uca-follow-emergency-500",
    quote:
      "follow closer than 500 feet behind the authorized emergency " +
      "vehicle; (b) pass the authorized emergency vehicle, if the " +
      "authorized emergency vehicle is moving; or (c) stop the " +
      "vehicle within 500 feet of a fire apparatus which has " +
      "stopped in answer to a fire alarm.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-904 - Approaching emergency vehicle",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S904.html",
  },
  {
    key: "uca-following-exception",
    quote:
      "funeral processions or to congested traffic conditions " +
      "resulting in prevailing vehicle speeds of less than 35 miles " +
      "per hour;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-711 - Following another vehicle - Safe " +
      "distance",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S711.html",
  },
  {
    key: "uca-following-two-seconds",
    quote:
      "shall follow at a distance so that at least two seconds " +
      "elapse before reaching the location of the vehicle directly " +
      "in front of the operator's vehicle.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-711 - Following another vehicle - Safe " +
      "distance",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S711.html",
  },
  {
    key: "uca-hand-signals",
    quote:
      "left turn: hand and arm extended horizontally; (ii) right " +
      "turn: hand and arm extended upward; and (iii) stop or " +
      "decrease speed: hand and arm extended downward.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-804 - Turning or changing lanes - Signals",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S804.html",
  },
  {
    key: "uca-inoperative-signal",
    quote:
      "The operator of a vehicle approaching an intersection that " +
      "has an inoperative traffic-control signal shall: (a) stop " +
      "before entering the intersection; and (b) yield the " +
      "right-of-way to any vehicle as required under Section " +
      "41-6a-901.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-305 - Inoperative traffic-control signals",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S305.html",
  },
  {
    key: "uca-left-lane-yield",
    quote:
      "the operator of a vehicle traveling in the left general " +
      "purpose lane: (a) shall, upon being overtaken by another " +
      "vehicle in the same lane, yield to the overtaking vehicle by " +
      "moving safely to a lane to the right; and (b) may not impede " +
      "the movement or free flow of traffic in the left general " +
      "purpose lane.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-704 - Overtaking and passing vehicles " +
      "proceeding in same direction",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S704.html",
  },
  {
    key: "uca-left-turn-yield",
    quote:
      "intending to turn to the left shall yield the right-of-way " +
      "to any vehicle approaching from the opposite direction which " +
      "is so close to the turning vehicle as to constitute an " +
      "immediate hazard;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-903 - Yield right-of-way - Vehicle turning " +
      "left",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S903.html",
  },
  {
    key: "uca-minimum-speed",
    quote:
      "A person may not operate a motor vehicle at a speed so slow " +
      "as to impede or block the normal and reasonable movement of " +
      "traffic except when: (a) a reduced speed is necessary for " +
      "safe operation; (b) upon a grade; or (c) in compliance with " +
      "a traffic-control device.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-605 - Minimum speed regulations",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S605.html",
  },
  {
    key: "uca-move-over-course",
    quote:
      "a person who violates this section shall attend a four hour " +
      "live classroom defensive driving course approved by:",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-904 - Approaching emergency vehicle - " +
      "Penalties",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S904.html",
  },
  {
    key: "uca-move-over-emergency",
    quote:
      "The operator of a vehicle, upon approaching a stationary " +
      "authorized emergency vehicle that is displaying alternately " +
      "flashing red, red and white, or red and blue lights, shall: " +
      "(i) reduce the speed of the vehicle;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-904 - Stationary emergency vehicle - Duties of " +
      "respective operators",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S904.html",
  },
  {
    key: "uca-move-over-tow",
    quote:
      "The operator of a vehicle, upon approaching a stationary tow " +
      "truck or highway maintenance vehicle that is displaying " +
      "flashing amber lights, shall: (i) reduce the speed of the " +
      "vehicle; (ii) provide as much space as practical to the " +
      "stationary tow truck",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-904 - Stationary tow truck or highway " +
      "maintenance vehicle",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S904.html",
  },
  {
    key: "uca-no-pass-stopped-crosswalk",
    quote:
      "If a vehicle is stopped at a marked crosswalk or at any " +
      "unmarked crosswalk at an intersection to permit a pedestrian " +
      "to cross the roadway, the operator of any other vehicle " +
      "approaching from the rear may not overtake and pass the " +
      "stopped vehicle.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1002 - Pedestrians' right-of-way - Duty of " +
      "pedestrian",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1002.html",
  },
  {
    key: "uca-park-12-inches",
    quote:
      "a vehicle stopped or parked on a two-way roadway shall be " +
      "stopped or parked with the right-hand wheels: (a) parallel " +
      "to and within 12 inches of the right-hand curb; or (b) as " +
      "close as practicable to the right edge of the right-hand " +
      "shoulder.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1402 - Stopping or parking on roadways",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1402.html",
  },
  {
    key: "uca-parking-hydrant-crosswalk",
    quote:
      "in front of a public or private driveway; (ii) within 15 " +
      "feet of a fire hydrant; (iii) within 20 feet of a crosswalk; " +
      "(iv) within 30 feet upon the approach to any flashing " +
      "signal, stop sign, yield sign, or traffic-control signal " +
      "located at the side of a roadway;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1401 - Standing or parking vehicles - " +
      "Restrictions and exceptions",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1401.html",
  },
  {
    key: "uca-parking-prohibited",
    quote:
      "on the roadway side of any vehicle stopped or parked at the " +
      "edge or curb of a street; (ii) on a sidewalk; (iii) within " +
      "an intersection; (iv) on a crosswalk;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1401 - Standing or parking vehicles - " +
      "Restrictions and exceptions",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1401.html",
  },
  {
    key: "uca-parking-railroad-50",
    quote:
      "within 50 feet of the nearest rail of a railroad crossing;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1401 - Standing or parking vehicles - " +
      "Restrictions and exceptions",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1401.html",
  },
  {
    key: "uca-pass-on-right",
    quote:
      "the operator of a vehicle may overtake and pass on the right " +
      "of another vehicle only: (a) when the vehicle overtaken is " +
      "making or preparing to make a left turn; or",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-705 - Passing on right - When permissible",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S705.html",
  },
  {
    key: "uca-pass-return-200",
    quote:
      "before coming within 200 feet of any vehicle approaching " +
      "from the opposite direction.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-706 - Limitation on passing - Prohibitions",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S706.html",
  },
  {
    key: "uca-pedestrian-crosswalk",
    quote:
      "the operator of a vehicle shall yield the right-of-way by " +
      "slowing down or stopping if necessary: (i) to a pedestrian " +
      "crossing the roadway within a crosswalk when the pedestrian " +
      "is on the half of the roadway upon which the vehicle is " +
      "traveling; or",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1002 - Pedestrians' right-of-way - Duty of " +
      "pedestrian",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1002.html",
  },
  {
    key: "uca-pedestrian-yield-midblock",
    quote:
      "A pedestrian crossing a roadway at any point other than " +
      "within a marked crosswalk or within an unmarked crosswalk at " +
      "an intersection shall yield the right-of-way to all vehicles " +
      "on the roadway.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1003 - Pedestrians yielding right-of-way - " +
      "Limits on pedestrians",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1003.html",
  },
  {
    key: "uca-right-on-red",
    quote:
      "The operator of a vehicle facing a steady circular red " +
      "signal may cautiously enter the intersection to turn right, " +
      "or may turn left from a one-way street into a one-way " +
      "street, after stopping as required by Subsection (4)(a).",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-305 - Traffic-control signal - Color of light " +
      "signal",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S305.html",
  },
  {
    key: "uca-roundabout-no-signal",
    quote:
      "an individual is not required to make a signal of intention " +
      "to turn when entering or exiting a roundabout.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-804 - Turning or changing lanes - Signals",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S804.html",
  },
  {
    key: "uca-school-bus-amber",
    quote:
      "amber warning light signals, shall slow the vehicle, but may " +
      "proceed past the school bus using due care and caution at a " +
      "speed not greater than specified in Subsection 41-6a-601(2) " +
      "for school zones for the safety of the school children that " +
      "may be in the vicinity; or",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1302 - School bus - Flashing amber lights",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1302.html",
  },
  {
    key: "uca-school-bus-amber-100",
    quote:
      "A school bus driver shall activate the yellow signal lamps " +
      "at least 100 feet, but not more than 500 feet, before every " +
      "stop at which the alternately flashing red lights are " +
      "activated.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1301 - Standards and specifications for " +
      "lighting on school buses",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1301.html",
  },
  {
    key: "uca-school-bus-exceptions",
    quote:
      "The operator of a vehicle need not stop upon meeting or " +
      "passing a school bus displaying alternating flashing red " +
      "light signals if the school bus is traveling in the opposite " +
      "direction when: (a) traveling on a divided highway;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1302 - School bus - Travel in opposite " +
      "direction",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1302.html",
  },
  {
    key: "uca-school-bus-penalty",
    quote:
      "A violation of Subsection (2) or (3) is a class C " +
      "misdemeanor and the minimum penalty is: (i) for a first " +
      "offense: (A) $1,000; and (B) 10 hours of compensatory " +
      "service;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1302 - School bus - Penalties",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1302.html",
  },
  {
    key: "uca-school-bus-red",
    quote:
      "red light signals visible from the front or rear, shall stop " +
      "immediately before reaching the bus and may not proceed " +
      "until the flashing red light signals cease operation.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1302 - School bus - Flashing red lights - Duty " +
      "to stop",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1302.html",
  },
  {
    key: "uca-school-crosswalk",
    quote:
      "The operator of a vehicle approaching a school crosswalk " +
      "shall come to a complete stop at the school crosswalk if the " +
      "crosswalk is occupied by a person.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1002 - Pedestrians' right-of-way - Duty of " +
      "pedestrian",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1002.html",
  },
  {
    key: "uca-seat-belt-57-inches",
    quote:
      "a child under eight years old who is 57 inches tall or " +
      "taller: (i) is exempt from the requirement in Subsection " +
      "(1)(a)(ii) to be in a child restraint device; and (ii) shall " +
      "use a properly adjusted and fastened safety belt as required " +
      "in Subsection (1)(a)(iii).",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1803 - Driver and passengers - Seat belt or " +
      "child restraint device required",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1803.html",
  },
  {
    key: "uca-seat-belt-driver",
    quote:
      "the operator of a motor vehicle operated on a highway shall: " +
      "(i) wear a properly adjusted and fastened safety belt; (ii) " +
      "provide for the protection of each person younger than eight " +
      "years old by using a child restraint device to restrain each " +
      "person in the manner prescribed by the manufacturer of the " +
      "device;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1803 - Driver and passengers - Seat belt or " +
      "child restraint device required",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1803.html",
  },
  {
    key: "uca-seat-belt-passenger",
    quote:
      "A person 16 years old or older who is a passenger in a motor " +
      "vehicle operated on a highway shall wear a properly adjusted " +
      "and fastened safety belt.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1803 - Driver and passengers - Seat belt or " +
      "child restraint device required",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1803.html",
  },
  {
    key: "uca-signal-green",
    quote:
      "The operator of a vehicle facing a circular green signal, " +
      "including an operator turning right or left: (A) shall yield " +
      "the right-of-way to other vehicles and to pedestrians " +
      "lawfully within the intersection or an adjacent crosswalk at " +
      "the time the signal is exhibited; and",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-305 - Traffic-control signal - Color of light " +
      "signal",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S305.html",
  },
  {
    key: "uca-signal-red-stop",
    quote:
      "shall stop at a clearly marked stop line, but if none, " +
      "before entering the marked or unmarked crosswalk on the near " +
      "side of the intersection and shall remain stopped until an " +
      "indication to proceed is shown.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-305 - Traffic-control signal - Color of light " +
      "signal",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S305.html",
  },
  {
    key: "uca-signal-two-seconds",
    quote:
      "An individual shall give a signal of intention to turn right " +
      "or left or to change lanes continuously for at least the " +
      "last two seconds before the beginning of the movement.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-804 - Turning or changing lanes - Signals",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S804.html",
  },
  {
    key: "uca-speed-defaults",
    quote:
      "the following speeds are lawful: (a) 20 miles per hour in a " +
      "reduced speed school zone as defined in Section 41-6a-303; " +
      "(b) 25 miles per hour in any urban district; and (c) 55 " +
      "miles per hour in other locations.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-601 - Speed regulations",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S601.html",
  },
  {
    key: "uca-stop-sign-where",
    quote:
      "every operator of a vehicle approaching a stop sign shall " +
      "stop: (i) at a clearly marked stop line; (ii) before " +
      "entering the crosswalk on the near side of the intersection " +
      "if there is not a clearly marked stop line;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-902 - Right-of-way - Stop or yield signals",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S902.html",
  },
  {
    key: "uca-stop-then-yield",
    quote:
      "After having stopped at a stop sign, the operator of a " +
      "vehicle shall yield the right-of-way to any vehicle in the " +
      "intersection or approaching on another roadway so closely as " +
      "to constitute an immediate hazard.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-902 - Right-of-way - Stop or yield signals",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S902.html",
  },
  {
    key: "uca-three-feet",
    quote:
      "An operator of a motor vehicle may not knowingly, " +
      "intentionally, or recklessly: (a) operate a motor vehicle " +
      "within three feet of a vulnerable user of a highway;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-706.5 - Operation of motor vehicle near a " +
      "vulnerable user of a highway prohibited",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S706.5.html",
  },
  {
    key: "uca-unattended-vehicle",
    quote:
      "A person operating or in charge of a motor vehicle may not " +
      "permit the vehicle to stand unattended without: (a) stopping " +
      "the engine; (b) locking the ignition and removing the key;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1403 - Motor vehicle left unattended - " +
      "Requirements",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1403.html",
  },
  {
    key: "uca-uturn-500",
    quote:
      "on any curve, or upon the approach to, or near the crest of " +
      "a grade, if the vehicle is not visible at a distance of 500 " +
      "feet by the operator of any other vehicle approaching from " +
      "either direction;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-802 - Turning around - Where prohibited - " +
      "Visibility",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S802.html",
  },
  {
    key: "uca-wheels-to-curb",
    quote:
      "A person shall turn the front wheels to the curb or side of " +
      "the highway when standing a vehicle on any perceptible " +
      "grade.",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1403 - Motor vehicle left unattended - " +
      "Requirements",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1403.html",
  },
  {
    key: "uca-wireless-exceptions",
    quote:
      "when using a wireless communication device for voice " +
      "communication; (b) to view a global positioning or " +
      "navigation device or a global positioning or navigation " +
      "application; (c) during a medical emergency;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1716 - Prohibition on using a wireless " +
      "communication device - Exceptions",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1716.html",
  },
  {
    key: "uca-wireless-prohibited",
    quote:
      "an individual may not use a wireless communication device " +
      "while operating a moving motor vehicle on a highway in this " +
      "state to manually: (a) (i) write or send a written " +
      "communication, including: (A) a text message; (B) an instant " +
      "message; or (C) electronic mail; (ii) dial a phone number;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-1716 - Prohibition on using a wireless " +
      "communication device while operating a motor vehicle",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S1716.html",
  },
  {
    key: "uca-work-zone-yield",
    quote:
      "The operator of a vehicle shall yield the right-of-way to " +
      "an: (1) authorized vehicle or pedestrian actually engaged in " +
      "work on a highway within a highway construction or " +
      "maintenance area indicated by a traffic-control device;",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-905 - Vehicle or pedestrian working upon " +
      "highway - Right-of-way",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S905.html",
  },
  {
    key: "uca-yield-sign",
    quote:
      "The operator of a vehicle approaching a yield sign shall: " +
      "(i) slow down to a speed reasonable for the existing " +
      "conditions; and (ii) if required for safety, stop as " +
      "provided under Subsection (2).",
    source:
      "Utah Code Title 41, Chapter 6a (Traffic Code)",
    section:
      "Section 41-6a-902 - Right-of-way - Stop or yield signals",
    url:
      "https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S902.html",
  },
  {
    key: "under-21-illegal",
    quote:
      "If you are under the age of 21, it is illegal to purchase, " +
      "possess, and drink alcoholic beverages.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 10: Alcohol/Drugs & Driving - B. 21 and Under (page " +
      "52)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=62",
  },
  {
    key: "visitor-six-months",
    quote:
      "Visitors with a valid out-of-state or out-of-country driver " +
      "license may drive in Utah for up to six months.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 2: Licensing Requirements (page 4)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=14",
  },
  {
    key: "vulnerable-user",
    quote:
      "Utah law defines a vulnerable user of the highway as a " +
      "pedestrian, including a person engaged in work upon a " +
      "highway or utilities facilities along a highway or providing " +
      "emergency services within the right-of-way of a highway, a " +
      "person riding an animal,",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - Vulnerable Users of the " +
      "Highway (page 74)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=84",
  },
  {
    key: "warning-device-placement",
    quote:
      "Next, place flares, electric lights, or reflectors 100 feet " +
      "to the front and rear of the vehicle. Also, place a warning " +
      "device on the traffic side of, and not less than 10 feet " +
      "from, the rear of your vehicle.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 16: Towing - Placement of Warning Devices (page 93)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=103",
  },
  {
    key: "warning-signs",
    quote:
      "These signs warn of possible danger ahead. They are usually " +
      "diamond shaped and yellow with black lettering or symbols.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Warning Signs (page 48)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=58",
  },
  {
    key: "white-cane",
    quote:
      "When a pedestrian is crossing a street with a guide dog or " +
      "carrying a white cane, you must come to a complete stop.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 14: Sharing the Road - G. Pedestrians (page 82)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=92",
  },
  {
    key: "windshield-clear",
    quote:
      "Your windshield must be clean of dirt, frost, or anything " +
      "else that might obstruct your vision while driving (such as " +
      "something hanging from the rearview mirror.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 15: Vehicle Equipment (page 92)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=102",
  },
  {
    key: "work-zone-double-fine",
    quote:
      "The courts are required to fine a driver who speeds in a " +
      "highway construction zone at least twice the amount of the " +
      "regular fine for speeding.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - G. Highway " +
      "Work Zones (page 59)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=69",
  },
  {
    key: "work-zone-fines-doubled",
    quote:
      "Slow down in work zones and be ready to stop quickly. Do not " +
      "tailgate. Fines for speeding in a work zone are doubled.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Work Zone Signs (page 49)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=59",
  },
  {
    key: "work-zone-signs",
    quote:
      "Diamond or rectangular and orange with black letters or " +
      "symbols. These signs warn you of work zones and people " +
      "working on or near the road. The warnings include: workers " +
      "ahead, reduced speed, detours, slow-moving road machinery, " +
      "or surface changes.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Work Zone Signs (page 49)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=59",
  },
  {
    key: "work-zone-slow-always",
    quote:
      "Always slow down even if there are no workers. Narrow lanes " +
      "and rough pavement can be dangerous.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 11: Distractions and Driving Challenges - G. Highway " +
      "Work Zones (page 59)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=69",
  },
  {
    key: "written-test-attempts",
    quote:
      "You can take two written knowledge tests per day, provided " +
      "the division can facilitate the testing. If you need to " +
      "return to the office after a failed attempt, a written " +
      "retest appointment will need to be scheduled.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 6: Examinations - A. Written Knowledge Test (page " +
      "23)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=33",
  },
  {
    key: "written-test-fee-attempts",
    quote:
      "The fee allows for not more than three attempts to pass the " +
      "written knowledge test within 12 months.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 6: Examinations - A. Written Knowledge Test (page " +
      "23)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=33",
  },
  {
    key: "written-test-format",
    quote:
      "The written knowledge test is not timed, but it generally " +
      "takes 30 to 45 minutes to finish, and you must pass with a " +
      "score of 80% or better.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 6: Examinations - A. Written Knowledge Test (page " +
      "23)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=33",
  },
  {
    key: "written-test-from-handbook",
    quote:
      "The questions are based on the infor mation provided in this " +
      "handbook.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 6: Examinations - A. Written Knowledge Test (page " +
      "23)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=33",
  },
  {
    key: "yield-driveway",
    quote:
      "Drivers on a public road if you are coming from a driveway " +
      "or a private road. Drivers already on an interstate highway " +
      "if you are on the entrance ramp.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - J. Yielding Right-of-Way " +
      "(page 50)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=60",
  },
  {
    key: "yield-list",
    quote:
      "A driver who is at the intersection before you. Drivers in " +
      "the opposite lane when you are making a left turn. The " +
      "driver on your right at a four-way stop if both of you " +
      "arrive at the same time.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - J. Yielding Right-of-Way " +
      "(page 50)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=60",
  },
  {
    key: "yield-sign-meaning",
    quote:
      "A yield sign means you must slow down and yield to traffic " +
      "that has the right-of-way.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 9: Rules of the Road - Warning Signs (page 48)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=58",
  },
  {
    key: "zero-tolerance",
    quote:
      "All states have \"zero tolerance\" laws (no alcohol in the " +
      "circulatory system) or similar laws for drivers under the " +
      "age of 21.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 10: Alcohol/Drugs & Driving - B. 21 and Under (page " +
      "52)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=62",
  },
  {
    key: "zipper-method",
    quote:
      "The ZIPPER METHOD is the idea of alternating when merging at " +
      "a congested merge point (i.e., construction zone.) Use both " +
      "lanes of traffic until the vehicles reach the merge point, " +
      "and once the vehicles reach the merge point, alternate, " +
      "yielding the right-of-way into the sin gle-traffic lane.",
    source:
      "Utah Driver Handbook (Utah Driver License Division, " +
      "2026-2027)",
    section:
      "Section 8: Basic Driving - Merging and Gore Area (page 31)",
    url:
      "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf#page=41",
  },
];
