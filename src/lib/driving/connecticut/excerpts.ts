import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Connecticut bank - 186 of them: 148 from
// the Connecticut Driver's Manual and 38 from the Connecticut General Statutes.
//
// Sources, and why there are two of them:
//
//  - The Connecticut Driver's Manual, Revised March 2023, published by the
//    Connecticut Department of Motor Vehicles and compiled with the assistance
//    of the American Association of Motor Vehicle Administrators. This is the
//    book the DMV writes its 25-question Class D knowledge test from, and it
//    carries most of what is quoted below. It is 60 PDF pages and its own
//    disclaimer says its contents "are not a precise statement of the
//    Connecticut General Statutes", which is exactly why the second source
//    exists.
//  - The Connecticut General Statutes, Title 14, chapters 246, 248 and 249,
//    published by the Connecticut General Assembly at cga.ct.gov. The manual
//    prints no speed limit at all, no signalling distance, no school-bus
//    stopping distance and no BAC number for a driver over 21. Every one of
//    those is a number the test still expects, and every one comes from the
//    statute.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. The same
// four normalisations the sibling banks use were applied to the extracted text
// and to nothing else: curly quotes, en dashes and em dashes fold to ASCII;
// runs of whitespace, including the line breaks the PDF inserts mid-sentence,
// collapse to single spaces; the section symbol is spelled out as "Section";
// and where a source states a rule as a stem followed by a bulleted list, the
// items run together in the order they appear - no words are changed, dropped
// or reordered. The sources' own slips are preserved as they stand, including
// the manual's "behind the-wheel", its "do not stop-continue through the
// intersection" and its "two hundredths of one percent (.02%)" written without
// the "per cent" the statute uses, because a quote that has been tidied up is
// no longer a quote.

const MANUAL =
  "Connecticut Driver's Manual (Connecticut Department of Motor Vehicles, Revised March 2023)";
const MANUAL_URL =
  "https://portal.ct.gov/dmv/-/media/dmv/dmv-pdfs/drivers-manual-english.pdf";
/** PDF page anchor. The book's printed page 1 is PDF page 3. */
const hb = (page: number) => `${MANUAL_URL}#page=${page}`;
const STATUTES = "Connecticut General Statutes (Connecticut General Assembly)";
const stat = (chapter: string, sec: string) =>
  `https://www.cga.ct.gov/current/pub/chap_${chapter}.htm#sec_${sec}`;

export const connecticutExcerpts: HandbookExcerpt[] = [
  // --- Chapter 1: Obtaining a Connecticut Driver's License ----------------
  {
    key: "permit-age-and-test",
    quote:
      "You must be at least 16 years of age.",
    source: MANUAL,
    section: "Chapter 1: Obtaining a Connecticut Driver's License - Obtaining a Learner's Permit",
    url: hb(7),
  },
  {
    key: "knowledge-test-25-20",
    quote:
      "The knowledge test consists of 25 questions and you need 20 correct answers to pass. You must pass a knowledge test before you receive your learner's permit. The test is based on the information contained in this manual.",
    source: MANUAL,
    section: "Chapter 1: Obtaining a Connecticut Driver's License - The Knowledge Test",
    url: hb(7),
  },
  {
    key: "permit-validity-2-years",
    quote:
      "NOTE: The permit will be valid until you obtain a driver's license or 2 years from the date it is issued (whichever comes first).",
    source: MANUAL,
    section: "Chapter 1: Obtaining a Connecticut Driver's License - Obtaining a Learner's Permit",
    url: hb(7),
  },
  {
    key: "permit-must-carry",
    quote:
      "A learner's permit is required before you begin practicing driving. A permit holder must carry a learner's permit whenever he or she is operating a vehicle.",
    source: MANUAL,
    section: "Chapter 1: Obtaining a Connecticut Driver's License - First Time Drivers (All Ages)",
    url: hb(6),
  },
  {
    key: "eight-hour-course-all-ages",
    quote:
      "Connecticut law requires anyone, regardless of age, who has not previously held a license in Connecticut or who does not hold a valid license issued by another state, to take an 8-hour Safe Driving Practices course at a Connecticut Commercial Driving School before he or she can obtain a license.",
    source: MANUAL,
    section: "Chapter 1: Obtaining a Connecticut Driver's License - First Time Drivers (All Ages)",
    url: hb(6),
  },
  {
    key: "trainer-front-seat",
    quote:
      "The person giving instruction to the learner's permit holder must sit in the front passenger seat next to the learner and must be alert and ready to take over control of the vehicle. The safe operation of the vehicle is the responsibility of both the instructor and the driver.",
    source: MANUAL,
    section: "Chapter 1 - Learner's Permit - Qualified Trainer Requirement",
    url: hb(7),
  },
  {
    key: "permit-no-passengers",
    quote:
      "For the entire time a 16- or 17-year-old driver holds a learner's permit, he or she may not have any passengers except for: A licensed driving instructor giving instruction and others accompanying that instructor.",
    source: MANUAL,
    section: "Chapter 1 - Learner's Permit Passenger Restrictions for 16- and 17-Year-Olds",
    url: hb(8),
  },
  {
    key: "permit-instructor-20-four-years",
    quote:
      "One person who is providing instruction and is at least 20 years old, has held a driver's license for four or more consecutive years and whose license has not been suspended during the four years prior to training. Parents or legal guardian may accompany the instructor.",
    source: MANUAL,
    section: "Chapter 1 - Learner's Permit Passenger Restrictions for 16- and 17-Year-Olds",
    url: hb(8),
  },
  {
    key: "permit-rules-suspension",
    quote:
      "Failure to follow the rules pertaining to a learner's permit may result in a permit suspension.",
    source: MANUAL,
    section: "Chapter 1 - Learner's Permit Passenger Restrictions for 16- and 17-Year-Olds",
    url: hb(8),
  },
  {
    key: "vision-20-40",
    quote:
      "The minimum vision requirements for all classes of license are at least 20/40 with or without glasses or contact lenses.",
    source: MANUAL,
    section: "Chapter 1: Obtaining a Connecticut Driver's License - The Vision Test",
    url: hb(7),
  },
  {
    key: "vision-corrective-lens-citation",
    quote:
      "If your driver's license says you must wear corrective lenses and you are stopped by a law enforcement officer while not wearing them, you may be issued a citation.",
    source: MANUAL,
    section: "Chapter 1: Obtaining a Connecticut Driver's License - The Vision Test",
    url: hb(7),
  },
  {
    key: "parent-two-hour-training",
    quote:
      "A parent or legal guardian of a 16- or 17-year-old who obtains a learner's permit is required to complete two hours of instruction with his or her teen concerning the laws governing drivers under age 18 and the dangers of teen driving.",
    source: MANUAL,
    section: "Chapter 1 - Driver Education Requirements - Parent Training Requirements",
    url: hb(8),
  },
  {
    key: "driver-ed-30-and-40-hours",
    quote:
      "Classes offered through a Connecticut commercial or secondary school licensed and approved by DMV consist of 30 hours of classroom instruction and at least 40 hours of behind-the-wheel, on-the-road training for teens with a learner's permit.",
    source: MANUAL,
    section: "Chapter 1 - Commercial Driving School or Secondary School Training",
    url: hb(8),
  },
  {
    key: "wait-120-or-180-days",
    quote:
      "Applicants who successfully complete driver education through a commercial driving school or a secondary school must wait 120 days after the issuance of the learner's permit before taking the road test. All other applicants must wait 180 days after the issuance of the learner's permit before taking the driver's exam.",
    source: MANUAL,
    section: "Chapter 1 - Commercial Driving School or Secondary School Training",
    url: hb(8),
  },
  {
    key: "forty-hours-behind-the-wheel",
    quote:
      "All applicants who are 16 or 17 years of age must have at least 40 hours of behind the-wheel, on-the-road training. This training may be accomplished by any combination of professional (driving school) instruction or home training.",
    source: MANUAL,
    section: "Chapter 1 - Driver Education Requirements",
    url: hb(9),
  },
  {
    key: "adult-90-days",
    quote:
      "A person 18 years of age or older must obtain and hold a learner's permit for at least 90 days prior to taking a road test.",
    source: MANUAL,
    section: "Chapter 1 - Applicants 18 Years of Age or Older",
    url: hb(9),
  },
  {
    key: "license-fee-84",
    quote: "You must pay $84 for a license after you pass the road test.",
    source: MANUAL,
    section: "Chapter 1 - To Begin the Road Test You Will Need",
    url: hb(9),
  },
  {
    key: "gdl-first-six-months",
    quote:
      "During the first six months the newly licensed driver may not have any passengers in the vehicle except for:",
    source: MANUAL,
    section: "Chapter 1 - Restrictions for 16- and 17-Year-Old Drivers - Passenger Restrictions",
    url: hb(10),
  },
  {
    key: "gdl-second-six-months",
    quote:
      "During the second six months (months seven through twelve) the only additional passengers allowed in the vehicle are members of the driver's immediate family.",
    source: MANUAL,
    section: "Chapter 1 - Restrictions for 16- and 17-Year-Old Drivers - Passenger Restrictions",
    url: hb(10),
  },
  {
    key: "gdl-curfew",
    quote:
      "Hour Restrictions (Curfew) 11 p.m. to 5 a.m. - unless the teen is traveling for employment, school, religious activities, medical necessity, or if the individual is an assigned driver in the Safe Ride Program.",
    source: MANUAL,
    section: "Chapter 1 - Restrictions for 16- and 17-Year-Old Drivers - Hour Restrictions (Curfew)",
    url: hb(10),
  },
  {
    key: "gdl-other-restrictions",
    quote:
      "In addition to the laws above, learner's permit holders and 16- and 17-year-old licensed drivers may NOT:",
    source: MANUAL,
    section: "Chapter 1 - Restrictions for 16- and 17-Year-Old Drivers - Other Restrictions",
    url: hb(10),
  },
  {
    key: "gdl-volunteer-exception",
    quote:
      "These passenger and curfew restrictions do not apply to active members of a volunteer fire company or department, a volunteer ambulance service or company, or an emergency medical service organization who are responding to, or returning from, an emergency call",
    source: MANUAL,
    section: "Chapter 1 - Restrictions for 16- and 17-Year-Old Drivers - Hour Restrictions (Curfew)",
    url: hb(10),
  },
  {
    key: "teen-cell-suspension",
    quote:
      "Any 16- or 17-year-old found violating Connecticut's cell phone law will be charged with a moving violation. If an operator is under the age of 18, a conviction for violating the cell phone law will result in a license suspension.",
    source: MANUAL,
    section: "Chapter 2: Before You Get Behind the Wheel - Connecticut Cell Phone Laws",
    url: hb(15),
  },
  {
    key: "retraining-24-and-under",
    quote:
      "The DMV also has a program for repeat offenders who commit moving violations. It is called the Operator Retraining Program and covers the principles of motor vehicle operation, how attitude contributes to the behavior found in aggressive driving, and the need to practice safe driving behavior.",
    source: MANUAL,
    section: "Chapter 3 - Operator Retraining Program for Repeat Offenders",
    url: hb(37),
  },
  {
    key: "retraining-25-and-over",
    quote:
      "A motorist who is 25 years old or older and who has three or more such convictions is required to attend and successfully pass a certified operator retraining program.",
    source: MANUAL,
    section: "Chapter 3 - Operator Retraining Program for Repeat Offenders",
    url: hb(37),
  },
  {
    key: "retraining-after-completion",
    quote:
      "After completing operator retraining, an additional moving violation within three years of the completion date will result in a license suspension of at least 30 days.",
    source: MANUAL,
    section: "Chapter 3 - Operator Retraining Program for Repeat Offenders",
    url: hb(37),
  },
  {
    key: "youthful-offender-excluded",
    quote:
      "Someone under the age of 18 who commits the following cannot be considered a youthful offender: Negligent homicide with a motor vehicle Evading responsibility following an accident that results in a death or serious injury Driving under the influence of alcohol or drugs.",
    source: MANUAL,
    section: "Chapter 3 - Youthful Offender Status",
    url: hb(37),
  },
  {
    key: "police-stop-lights",
    quote:
      "Police vehicles attempting to stop drivers will do so by means of a visual, flashing blue or flashing blue and red lights, or audible signal.",
    source: MANUAL,
    section: "Chapter 3 - Stopping for Police Vehicles",
    url: hb(37),
  },
  {
    key: "police-stop-pull-right",
    quote:
      "Drive as close as is safely practical to the right-hand edge or curb of the road, clear of any intersection, stop, and park. Limit the movements of the driver and/or passengers while stopping your vehicle.",
    source: MANUAL,
    section: "Chapter 3 - Stopping for Police Vehicles",
    url: hb(37),
  },
  {
    key: "police-stop-hands",
    quote:
      "Drivers should keep their hands on the steering wheel and passengers should keep their hands in plain view. Obtain your driver license and/or vehicle registration only when requested.",
    source: MANUAL,
    section: "Chapter 3 - Stopping for Police Vehicles",
    url: hb(37),
  },
  {
    key: "police-stop-interior-light",
    quote:
      "If at night, turn on the vehicle's interior light after stopping and before the officer approaches.",
    source: MANUAL,
    section: "Chapter 3 - Stopping for Police Vehicles",
    url: hb(37),
  },
  {
    key: "police-stop-do-not-argue",
    quote:
      "If enforcement action is taken against you that you disagree with, do not argue with the officer at the scene. Traffic violations and traffic crimes charged against you are decided in court.",
    source: MANUAL,
    section: "Chapter 3 - Stopping for Police Vehicles",
    url: hb(37),
  },

  // --- Chapter 2: Before You Get Behind the Wheel -------------------------
  {
    key: "seatbelt-illegal",
    quote:
      "In Connecticut, it is illegal to drive or to be a passenger without wearing a safety belt.",
    source: MANUAL,
    section: "Chapter 2: Before You Get Behind the Wheel - Connecticut Seat Belt Laws",
    url: hb(14),
  },
  {
    key: "seatbelt-fine-75",
    quote:
      "If either the driver or the passenger fails to wear the seat belt, each could be cited for a seat belt violation and fined $75.",
    source: MANUAL,
    section: "Chapter 2: Before You Get Behind the Wheel - Connecticut Seat Belt Laws",
    url: hb(14),
  },
  {
    key: "seatbelt-with-airbags",
    quote:
      "State law requires that safety belts must be worn even if the vehicle is equipped with airbags.",
    source: MANUAL,
    section: "Chapter 2: Before You Get Behind the Wheel - Connecticut Seat Belt Laws",
    url: hb(14),
  },
  {
    key: "child-restraint-under-16",
    quote:
      "State law requires children under 16 to be secured in proper child restraint and safety systems while riding in a vehicle.",
    source: MANUAL,
    section: "Chapter 2 - Child Safety Requirements",
    url: hb(14),
  },
  {
    key: "child-five-point-harness",
    quote:
      "Under Connecticut law, child restraint systems are required to be equipped with a five-point harness. The law also prohibits the placement of a rear-facing child restraint system in the front seat of a vehicle with functional passenger side airbag.",
    source: MANUAL,
    section: "Chapter 2 - Child Safety Requirements",
    url: hb(14),
  },
  {
    key: "child-more-restrictive-applies",
    quote:
      "If a child's age and weight fall in two different categories (for example, a child is less than two years old but weighs more than 30 pounds) the more restrictive requirement (rear-facing car seat in this instance) applies.",
    source: MANUAL,
    section: "Chapter 2 - Child Safety Requirements",
    url: hb(14),
  },
  {
    key: "child-7-to-16-belted",
    quote:
      "In addition to complying with state laws requiring child restraint systems in vehicles, ALL drivers are obligated to ensure that any passenger between 7 and 16 years old is wearing a seat safety belt.",
    source: MANUAL,
    section: "Chapter 2 - Child Safety Requirements",
    url: hb(15),
  },
  {
    key: "cellphone-handheld-banned",
    quote:
      "Hand-held cell phones or mobile electronic devices may not be used while operating a motor vehicle on any public highway. State law also prohibits using these devices when a vehicle is temporarily stopped because of traffic, road conditions or a traffic control sign or signal.",
    source: MANUAL,
    section: "Chapter 2: Before You Get Behind the Wheel - Connecticut Cell Phone Laws",
    url: hb(15),
  },
  {
    key: "cellphone-parked-shoulder",
    quote:
      "You may use your cell phone or mobile electronic devices if parked safely on the side or shoulder of a highway. Drivers are permitted only to use hands-free mobile telephone accessories.",
    source: MANUAL,
    section: "Chapter 2: Before You Get Behind the Wheel - Connecticut Cell Phone Laws",
    url: hb(15),
  },
  {
    key: "cellphone-teen-total-ban",
    quote:
      "However, drivers who are 16 or 17 years of age are not permitted to use any type of cell phone or mobile electronic device, including a hands-free device.",
    source: MANUAL,
    section: "Chapter 2: Before You Get Behind the Wheel - Connecticut Cell Phone Laws",
    url: hb(15),
  },
  {
    key: "cellphone-emergency-exception",
    quote:
      "The exceptions to this requirement, where a cell phone or mobile electronic device may be used, by a driver of any age, is an emergency situation, when contacting an emergency response operator, a hospital, physician's office, health clinic, ambulance company or fire or police department.",
    source: MANUAL,
    section: "Chapter 2: Before You Get Behind the Wheel - Connecticut Cell Phone Laws",
    url: hb(15),
  },
  {
    key: "insurance-continuous",
    quote:
      "Connecticut law requires continuous insurance coverage on any registered vehicle. If you (or the vehicle owner) fail to maintain insurance, the insurance company will send a report of cancellation to the DMV.",
    source: MANUAL,
    section: "Chapter 2: Before You Get Behind the Wheel - Connecticut Insurance Laws",
    url: hb(15),
  },
  {
    key: "insurance-registration-suspended",
    quote:
      "Failure to respond to your warning notice will result in suspension of the registration. A vehicle cannot be operated legally on any public highway without registration.",
    source: MANUAL,
    section: "Chapter 2: Before You Get Behind the Wheel - Connecticut Insurance Laws",
    url: hb(15),
  },
  {
    key: "tires-worn",
    quote:
      "Worn or bald tires can increase your stopping distance and make turning more difficult when the road is wet.",
    source: MANUAL,
    section: "Chapter 2 - Know Your Vehicle Inside and Out - Exterior Equipment",
    url: hb(13),
  },
  {
    key: "tires-hydroplaning-risk",
    quote:
      "Worn tires increase the effect of \"hydroplaning\" and increase the chance of having a flat tire.",
    source: MANUAL,
    section: "Chapter 2 - Know Your Vehicle Inside and Out - Exterior Equipment",
    url: hb(13),
  },
  {
    key: "penny-test",
    quote:
      "If any part of Lincoln's head is covered by the tread, you're driving with the safe amount of tread.",
    source: MANUAL,
    section: "Chapter 2 - Know Your Vehicle Inside and Out - Exterior Equipment",
    url: hb(13),
  },
  {
    key: "emissions-60-days",
    quote:
      "Your vehicle may be required to have an emissions inspection at an authorized inspection station. If the vehicle does not pass, you will be given 60 days to have the problem fixed and the emissions rechecked.",
    source: MANUAL,
    section: "Chapter 2 - Know Your Vehicle Inside and Out",
    url: hb(13),
  },
  {
    key: "aftermarket-equipment",
    quote:
      "After market, changes to equipment such as tinted windows and lighting may violate legal standards.",
    source: MANUAL,
    section: "Chapter 2 - Interior Equipment",
    url: hb(14),
  },
  {
    key: "exhaust-leak-danger",
    quote:
      "Gases from a leaky exhaust can cause death inside a vehicle in a very short time. Never run the motor in a closed garage.",
    source: MANUAL,
    section: "Chapter 2 - Know Your Vehicle Inside and Out - Exhaust System",
    url: hb(14),
  },
  {
    key: "mirror-adjustment",
    quote:
      "A good adjustment for the side mirrors is to set them so that when you lean forward slightly, you can see the side of your vehicle.",
    source: MANUAL,
    section: "Chapter 2 - Interior Equipment - Mirrors",
    url: hb(14),
  },
  {
    key: "horn-warning-only",
    quote: "Only use your horn as a warning to others.",
    source: MANUAL,
    section: "Chapter 2 - Interior Equipment - Horn",
    url: hb(14),
  },
  {
    key: "loose-objects",
    quote:
      "Make sure there are no objects on the floor that could roll under the brake pedal and prevent you from stopping the vehicle.",
    source: MANUAL,
    section: "Chapter 2 - Interior Equipment - Loose Objects",
    url: hb(14),
  },
  {
    key: "brake-warning-signs",
    quote:
      "If the vehicle pulls to one side when the brake is applied this would indicate a problem in the braking system and that it should be serviced.",
    source: MANUAL,
    section: "Chapter 2 - Exterior Equipment - Braking System",
    url: hb(13),
  },

  // --- Chapter 3: Driving Behaviors ---------------------------------------
  {
    key: "steering-hand-position",
    quote:
      "Both hands should be placed on opposite sides of the steering wheel (i.e., left hand between 8 and 10 o'clock and right hand between 2 and 4 o'clock).",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Good Driving Practices - Steering",
    url: hb(16),
  },
  {
    key: "push-pull-steering",
    quote:
      "If this is done correctly, the two hands will never cross and will remain on the wheel at all times.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Good Driving Practices - Steering",
    url: hb(16),
  },
  {
    key: "look-12-seconds-ahead",
    quote:
      "Safer drivers tend to look at least 12 seconds ahead of their vehicles. This is the distance that your vehicle will travel in 12 seconds.",
    source: MANUAL,
    section: "Chapter 3 - Good Driving Practices - Scanning - Look Ahead",
    url: hb(16),
  },
  {
    key: "twelve-seconds-city-highway",
    quote:
      "In the city, 12 seconds is about one block. When you drive in city traffic, you should try to look at least one block ahead. On the highway, 12 seconds is about four city blocks (or a quarter of a mile).",
    source: MANUAL,
    section: "Chapter 3 - Good Driving Practices - Scanning - Look Ahead",
    url: hb(16),
  },
  {
    key: "look-behind",
    quote:
      "It is very important to look for vehicles behind you when you change lanes, slow down, back up or drive down a long or steep hill.",
    source: MANUAL,
    section: "Chapter 3 - Good Driving Practices - Scanning - Look Behind",
    url: hb(16),
  },
  {
    key: "left-turn-oncoming-row",
    quote:
      "Remember, oncoming traffic, including bicycles, always has the right-of-way.",
    source: MANUAL,
    section: "Chapter 3 - Good Driving Practices - Intersections",
    url: hb(17),
  },
  {
    key: "right-on-red-unless-sign",
    quote:
      "You may turn right at a red light after stopping, unless it is prohibited by a traffic sign.",
    source: MANUAL,
    section: "Chapter 3 - Good Driving Practices - Intersections",
    url: hb(17),
  },
  {
    key: "edge-forward-blocked-view",
    quote:
      "If you are stopped and your view of a cross street is blocked, edge forward slowly until you can see. When you move forward slowly, crossing drivers can see the front of your vehicle before you can see them.",
    source: MANUAL,
    section: "Chapter 3 - Good Driving Practices - Intersections",
    url: hb(17),
  },
  {
    key: "blocking-the-box",
    quote:
      "During heavy traffic, drivers are prohibited from entering any intersection unless there is sufficient space on the opposite side of the intersection to accommodate their vehicle without obstructing the passage of other vehicles or pedestrians. This is commonly known as \"blocking the box\" or causing \"gridlock.\"",
    source: MANUAL,
    section: "Chapter 3 - Good Driving Practices - Intersections",
    url: hb(17),
  },
  {
    key: "inoperative-signal-stop-sign",
    quote:
      "State law requires a driver at an intersection with an inoperative stop light to stop as though the intersection was controlled by a stop sign.",
    source: MANUAL,
    section: "Chapter 3 - Hazardous Conditions - Stop Light Not Working",
    url: hb(27),
  },
  {
    key: "railroad-second-train",
    quote:
      "At crossings with more than one track, wait until the passing train is well down the track before starting to cross. The train that just passed may hide another one that is approaching.",
    source: MANUAL,
    section: "Chapter 3 - Good Driving Practices - Railroad Crossings",
    url: hb(17),
  },
  {
    key: "railroad-room-far-side",
    quote:
      "Make sure there is room for your vehicle on the far side before you cross the tracks.",
    source: MANUAL,
    section: "Chapter 3 - Good Driving Practices - Railroad Crossings",
    url: hb(17),
  },
  {
    key: "railroad-assume-train",
    quote:
      "Even if you have never seen a train at that crossing before, do not assume that none are coming. Assuming that a train is not coming is one of the leading causes of fatalities at railroad crossings.",
    source: MANUAL,
    section: "Chapter 3 - Good Driving Practices - Railroad Crossings",
    url: hb(17),
  },
  {
    key: "workzone-orange-signs",
    quote:
      "All temporary signs in work zones have an orange background and black letters or symbols.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Work Zones",
    url: hb(17),
  },
  {
    key: "workzone-fines-1000",
    quote:
      "In Connecticut, anyone convicted of speeding, disobeying traffic control devices, using an improper lane or endangering a highway worker within a work zone could face fines of up to $1,000, can be assessed points against his or her driver's license and may be required to complete the driver retraining program.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Work Zones",
    url: hb(17),
  },
  {
    key: "workzone-phone-fines-doubled",
    quote:
      "In addition, distracted driving fines are doubled for anyone convicted of illegally using a hand-held cellphone or mobile electronic device while driving in a work zone.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Work Zones",
    url: hb(17),
  },
  {
    key: "workzone-no-posted-reduction",
    quote:
      "The reduced speed limits are clearly posted within the work zone and if there are no reduced speed limit signs, you should obey the normal posted speed limit.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Work Zones",
    url: hb(17),
  },
  {
    key: "workzone-end-road-work",
    quote:
      "Just because you do not see the workers immediately after you see the warning sign does not mean they are not out there.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Work Zones",
    url: hb(18),
  },
  {
    key: "vulnerable-user-law",
    quote:
      "Connecticut has a Vulnerable User's Law which provides for higher penalties for drivers who fail to exercise reasonable care and cause the serious injury or death of a vulnerable user.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Vulnerable Users",
    url: hb(18),
  },
  {
    key: "vulnerable-user-list",
    quote:
      "Vulnerable users include pedestrians, bicyclists, wheelchair users, a person riding or driving an animal, highway workers, garbage trucks, tank vehicles, vehicles authorized by the US Government to carry mail and express delivery carriers. Drivers must allow for three feet of distance when passing.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Vulnerable Users",
    url: hb(18),
  },
  {
    key: "emergency-vehicle-pull-right",
    quote:
      "When you see or hear an emergency vehicle approaching from any direction you must pull over to the right edge of the road, or as near to the right as possible, and stop your vehicle.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Emergency Vehicles",
    url: hb(18),
  },
  {
    key: "emergency-vehicle-remain-stopped",
    quote:
      "You must remain stopped until the emergency vehicle has passed, unless otherwise directed by a state or local police officer or a firefighter.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Emergency Vehicles",
    url: hb(18),
  },
  {
    key: "emergency-vehicle-clear-intersection",
    quote:
      "If you are in an intersection, drive through the intersection before you pull over.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(39),
  },
  {
    key: "move-over-law",
    quote:
      "\"Move Over Law\" When any vehicle is pulled over on any part of a highway or road, drivers must: SLOW DOWN (below the posted speed limit) and... Move their vehicle over one lane whenever it is safe to do so.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - \"Move Over Law\"",
    url: hb(18),
  },
  {
    key: "crosswalk-at-every-intersection",
    quote:
      "Generally, pedestrians have the right of way in crosswalks. There is a crosswalk at every intersection, even if it is not marked by painted lines.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Pedestrians",
    url: hb(18),
  },
  {
    key: "unmarked-crosswalk-imagine",
    quote:
      "To determine where an unmarked crosswalk is, imagine that the sidewalk or shoulder at the corner extends across the road and meets the sidewalk or shoulder on the other side.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Pedestrians",
    url: hb(18),
  },
  {
    key: "pedestrian-intent-hand",
    quote:
      "Steps to the curb at the entrance to the crosswalk and indicates intent to cross the road by raising his or her hand and arm toward oncoming traffic; or",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Pedestrians",
    url: hb(18),
  },
  {
    key: "pedestrian-intent-body-part",
    quote:
      "Indicates intent to cross the road by moving into the crosswalk's entrance any body part or any extension of a body part, including a wheelchair, cane, walking stick, crutch, bicycle, electric bicycle, stroller, carriage, cart, or leashed or harnessed dog.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Pedestrians",
    url: hb(18),
  },
  {
    key: "opening-your-door",
    quote:
      "Do not open a vehicle door if it hits or gets in the way of a pedestrian, bicyclist, or other moving traffic.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Opening Your Vehicle Door",
    url: hb(18),
  },
  {
    key: "school-zone-slower-limit",
    quote:
      "You must obey the slower posted speed limit in school zones or be subject to fines. Stop and yield to students who are crossing or if a crossing guard signals you to do so.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Children at Play and School Zones",
    url: hb(18),
  },
  {
    key: "white-cane-guide-dog",
    quote:
      "You must give the right-of-way to a pedestrian with a guide dog or who is carrying a white cane, with or without a colored tip. Stop and stay stopped if the person is attempting to cross or is in the process of crossing the road.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - White Canes and Guide Dogs",
    url: hb(18),
  },
  {
    key: "white-cane-green-light",
    quote:
      "At regulated intersections, remain stopped until the pedestrian is out of the road, even if you have a green light.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - White Canes and Guide Dogs",
    url: hb(18),
  },
  {
    key: "bicyclists-are-vehicles",
    quote:
      "Bicyclists are considered vehicles when used on roadways. They are expected to follow the same rules of the road as motorized vehicles.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Bicyclists",
    url: hb(19),
  },
  {
    key: "bicyclist-takes-the-lane",
    quote:
      "Additionally, when a lane is too narrow for cars and bikes to drive side-by-side, the bicyclist will \"take the travel lane\" which means driving in or near the center of the lane.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Bicyclists",
    url: hb(19),
  },
  {
    key: "bicycle-helmet-under-16",
    quote:
      "You are required to wear a helmet if you are under 16 years of age. If you are 16 years of age or older you should consider wearing a helmet as a safety precaution.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Bicyclists",
    url: hb(19),
  },
  {
    key: "bicycle-three-feet",
    quote:
      "When approaching or passing a bicyclist slow down and pass only when you are able to give a minimum of three feet distance between your vehicle and the bicycle.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Bicyclists",
    url: hb(19),
  },
  {
    key: "bicycle-fines-doubled",
    quote: "Fines are doubled for failure to yield right-of-way to a bicyclist.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Bicyclists",
    url: hb(19),
  },
  {
    key: "bicycle-no-right-turn-after-passing",
    quote:
      "If you are about to make a right turn, you must not pass a bicyclist immediately before the turn. To avoid a collision, you should slow down and let the cyclist clear the intersection before making your turn.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Bicyclists",
    url: hb(19),
  },
  {
    key: "bicycle-horn",
    quote:
      "Do not sound your horn close to bicyclists, unless you have good cause to warn the bicyclist. Sounding your horn to alert your presence may startle them and cause them to steer into your path and crash.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Bicyclists",
    url: hb(19),
  },
  {
    key: "bike-lane-no-parking",
    quote:
      "Do not stop, park or drive on a designated bicycle path or lane unless you are entering or leaving an alley or driveway, performing official duties, directed by a police officer, or an emergency situation exists.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Bicyclists",
    url: hb(19),
  },
  {
    key: "pass-slow-in-no-passing-zone",
    quote:
      "You may pass slow moving vehicles, including bicyclists, in a no passing zone if you can make the maneuver safely.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Bicyclists",
    url: hb(19),
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Motorcycle operators have the right to use a complete traffic lane and two motorcycles may share a lane. Do not pass a motorcycle in the same lane.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Motorcycles",
    url: hb(20),
  },
  {
    key: "motorcycle-left-turn-crashes",
    quote:
      "Approximately one-half of all motorcycle crashes involve another motor vehicle. Nearly 40 percent were caused by the other vehicle turning left in front of the motorcyclist.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Motorcycles",
    url: hb(20),
  },
  {
    key: "motorcycle-signal-not-cancelled",
    quote:
      "Do not assume a motorcycle is turning when you see its turn signal flashing.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Motorcycles",
    url: hb(20),
  },
  {
    key: "motorcycle-following-3-to-4",
    quote:
      "When following a motorcyclist, allow for a 3 to 4 second following distance or more in wet conditions.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Motorcycles",
    url: hb(20),
  },
  {
    key: "motorcycle-dim-headlights",
    quote:
      "Always dim your headlights when approaching a motorcycle. Because of their vulnerability, the blinding effect of your high beams can be far more dangerous to them than to drivers of motor vehicles.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Motorcycles",
    url: hb(20),
  },
  {
    key: "motorcycle-passing-you",
    quote:
      "When a motorcycle is passing your vehicle, you should maintain your lane position and speed. Allow the motorcyclist to complete the maneuver and assume proper lane position as quickly as possible.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Motorcycles",
    url: hb(20),
  },
  {
    key: "slow-moving-decal",
    quote:
      "Farm tractors, animal-drawn vehicles and roadway maintenance vehicles usually go 25 mph or less. These vehicles should have a slow-moving decal (an orange triangle) on the back.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Slow Moving Vehicles",
    url: hb(20),
  },
  {
    key: "cross-double-yellow-for-slow",
    quote:
      "You may cross over a double yellow line in these instances; however, you must make sure you can see far enough ahead to enable you to safely pass before attempting this passing maneuver.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Slow Moving Vehicles",
    url: hb(20),
  },
  {
    key: "four-second-sight-distance",
    quote:
      "You should also use the \"four-second sight-distance rule\" at night to make sure you are not \"over-driving\" your headlights.",
    source: MANUAL,
    section: "Chapter 3 - Avoiding the Risks - Behaviors That Can Cause Trouble",
    url: hb(28),
  },
  {
    key: "yield-to-bus-signalling",
    quote:
      "Drivers are required to yield the right of way to a bus traveling in the same direction when the bus appropriately signals.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Slow Moving Vehicles",
    url: hb(20),
  },
  {
    key: "ice-cream-truck-10-feet",
    quote:
      "The state law requires drivers when approaching or overtaking an ice cream truck displaying flashing lights and extending its stop signal arm and crossing arm, to stop their vehicles at least 10 feet from the front or back of the truck.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Ice Cream Trucks",
    url: hb(20),
  },
  {
    key: "ice-cream-truck-5-mph",
    quote:
      "After stopping, you may proceed past the truck at a reasonable speed, up to 5 mph, and must yield the right-of-way to any pedestrian crossing the road to or from the truck.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Ice Cream Trucks",
    url: hb(20),
  },
  {
    key: "horses-reduce-speed",
    quote:
      "When you approach a horse on a public highway, you must reduce your speed (or stop, if necessary) to avoid striking, endangering or frightening a horse.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Horses",
    url: hb(20),
  },
  {
    key: "horses-no-horn",
    quote:
      "It is illegal to sound your horn or cause loud or unusual noises when approaching or passing a horse.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Horses",
    url: hb(20),
  },
  {
    key: "no-zone-definition",
    quote:
      "Plus, there are danger areas around these vehicles where crashes are more likely to occur. These areas are called No- Zones.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Trucks - No-Zone",
    url: hb(21),
  },
  {
    key: "truck-mirror-face",
    quote:
      "If you can't see the driver's face in his side view mirror, then he can't see you.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Trucks - No-Zone",
    url: hb(21),
  },
  {
    key: "truck-blind-spots-20-200",
    quote:
      "In fact, their blind spots may stretch up to 20 feet in front of the cab and approximately 200 feet behind the truck.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Trucks - No-Zone",
    url: hb(21),
  },
  {
    key: "truck-65-feet-half-mile",
    quote:
      "A truck and its tow vehicle may be as long as 65 feet and it may take you more than half a mile of clear road to pass.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Trucks - No-Zone",
    url: hb(21),
  },
  {
    key: "truck-three-second-minimum",
    quote:
      "Never follow a truck at a time interval of less than three seconds.",
    source: MANUAL,
    section: "Chapter 3 - Keep a Safe Following Distance Behind Trucks",
    url: hb(22),
  },
  {
    key: "truck-return-to-lane",
    quote:
      "Signal and return to the right lane when you can see the front of the truck in your inside mirror. After passing, keep your speed up.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Trucks - Pass Trucks Safely",
    url: hb(21),
  },
  {
    key: "truck-backing",
    quote:
      "If you see a truck driver attempting to back, stop to give them a chance to do so safely. Never attempt to drive around a backing truck.",
    source: MANUAL,
    section: "Chapter 3 - Trucks Need Space While Backing Up",
    url: hb(22),
  },
  {
    key: "stay-in-right-lane-except-to-pass",
    quote:
      "On a road with two or more lanes traveling in the same direction, except to pass, stay in the right lane.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Trucks - Other Hints",
    url: hb(22),
  },
  {
    key: "truck-no-high-beams",
    quote:
      "Never use your high beams when following a truck at night. The glare in the large side mirrors can blind the truck driver.",
    source: MANUAL,
    section: "Chapter 3 - Keep a Safe Following Distance Behind Trucks",
    url: hb(22),
  },
  {
    key: "truck-off-track-right-turn",
    quote:
      "Resist the temptation to pass on the right of a truck that is approaching an intersection. If the truck driver makes a right turn, you could be caught between the truck and the curb.",
    source: MANUAL,
    section: "Chapter 3 - Trucks Make Wide Right Turns",
    url: hb(22),
  },
  {
    key: "merge-four-second-opening",
    quote:
      "Any time you want to merge with other traffic, you need an opening of about four seconds.",
    source: MANUAL,
    section: "Chapter 3 - Maintaining a Space Cushion - Space to Merge",
    url: hb(22),
  },
  {
    key: "entrance-ramp-speed",
    quote:
      "Use the ramp to reach the speed of other vehicles before you pull onto the road. Do not drive to the end of the ramp and stop or you will not have enough room to get up to the speed of traffic.",
    source: MANUAL,
    section: "Chapter 3 - Maintaining a Space Cushion - Space to Enter",
    url: hb(22),
  },
  {
    key: "three-second-rule",
    quote:
      "There is an easy way to tell if you are following too closely.",
    source: MANUAL,
    section: "Chapter 3 - Maintaining a Space Cushion - Space Ahead",
    url: hb(23),
  },
  {
    key: "four-second-following",
    quote:
      "In the following situations, you may need a four-second following distance to be safe.",
    source: MANUAL,
    section: "Chapter 3 - Maintaining a Space Cushion - Space Ahead",
    url: hb(23),
  },
  {
    key: "being-tailgated",
    quote:
      "If you are being followed too closely and there is a right lane, move over to the right. If there is no right lane, wait until the road ahead is clear, then reduce speed slowly.",
    source: MANUAL,
    section: "Chapter 3 - Maintaining a Space Cushion - Space Behind - Being Tailgated",
    url: hb(24),
  },
  {
    key: "never-brake-at-tailgater",
    quote:
      "Never slow down quickly to discourage a tailgater. It increases your risk of being hit from behind.",
    source: MANUAL,
    section: "Chapter 3 - Maintaining a Space Cushion - Space Behind - Being Tailgated",
    url: hb(24),
  },
  {
    key: "three-feet-from-bicycle",
    quote:
      "You must allow at least three feet of space between your vehicle and the bicycle when passing a bicycle.",
    source: MANUAL,
    section: "Chapter 3 - Maintaining a Space Cushion - Space to the Side",
    url: hb(24),
  },
  {
    key: "blocking-intersection-ticket",
    quote:
      "Even if you have the green light, do not start across the intersection if there are vehicles blocking your way. If you are caught in the intersection when the light changes to red, you will block other traffic. You can get a ticket for blocking an intersection.",
    source: MANUAL,
    section: "Chapter 3 - Maintaining a Space Cushion - Space to Cross",
    url: hb(23),
  },
  {
    key: "do-not-assume-turn-signal",
    quote:
      "For example, do not assume that you can turn just because an approaching vehicle also has a turn signal on. The driver may plan to turn after they pass your vehicle or may have forgotten to turn the signal off from a prior turn.",
    source: MANUAL,
    section: "Chapter 3 - Maintaining a Space Cushion - Space to Cross",
    url: hb(23),
  },
  {
    key: "lane-change-look-over-shoulder",
    quote:
      "Look over your shoulder in the direction you plan to move. Be sure no one is near the rear corners of your vehicle. These areas are called \"blind spots\" because you cannot see them through your mirrors.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Changing Lanes",
    url: hb(25),
  },
  {
    key: "one-lane-at-a-time",
    quote:
      "Take one lane at a time. If you want to change several lanes, take them one at a time.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Changing Lanes",
    url: hb(25),
  },
  {
    key: "pass-ten-second-opening",
    quote:
      "At a speed of 55 mph, you need about 10 seconds to pass. That means you need a 10-second opening in oncoming traffic and sight-distance to pass.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Passing - Rules of Passing",
    url: hb(25),
  },
  {
    key: "pass-1600-feet",
    quote:
      "At 55 mph, you will travel over 800 feet in 10 seconds, so will an oncoming vehicle. That means you need over 1600 feet (about one-third of a mile) to pass safely.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Passing - Rules of Passing",
    url: hb(25),
  },
  {
    key: "pass-both-headlights",
    quote:
      "When you can see both headlights of the vehicle you just passed in your rear-view mirror, it is safe to return to the driving lane.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Passing - Return to your lane",
    url: hb(25),
  },
  {
    key: "never-pass-on-shoulder",
    quote:
      "Never pass on the shoulder, whether it is paved or not. Other drivers will never expect you to be there and may pull off the road without looking.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Passing - When Not to Pass",
    url: hb(25),
  },
  {
    key: "right-lane-law-manual",
    quote:
      "When your direction of travel is less than three lanes, Connecticut law requires you to drive in the right lane, except when passing.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Passing - On Multi-Lane roads",
    url: hb(25),
  },
  {
    key: "turning-lane-choice",
    quote:
      "Where there are no signs or lane markings to control turning, you should turn from the lane that is closest to the direction you want to go and turn into the lane closest to the one you came from. This way, you will cross the fewest lanes of traffic.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Turning",
    url: hb(25),
  },
  {
    key: "right-turn-no-swing-wide",
    quote:
      "On right turns, avoid swinging wide to the left before making the turn. If you swing wide, the driver behind you may think you are changing lanes or going to turn left and may try to pass you on the right.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Turning - Right turns",
    url: hb(26),
  },
  {
    key: "backing-in-travel-lane-illegal",
    quote:
      "Never back a vehicle in any travel lane, it is illegal and unsafe to do so, except to parallel park or to perform a three-point or K turn.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Backing",
    url: hb(26),
  },
  {
    key: "backing-look-over-right-shoulder",
    quote:
      "Turn around and look over your right shoulder so that you can look directly through the rear window. Do not depend on your rearview or side mirrors, as you cannot see directly behind your vehicle with these.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Backing",
    url: hb(26),
  },
  {
    key: "missed-exit-do-not-back",
    quote:
      "If you miss your turn or exit, do not back up but go on to where you can safely turn around. Do not stop in travel lanes for any reason (confusion, breakdown, letting out a passenger).",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Backing",
    url: hb(26),
  },
  {
    key: "hill-curve-third-of-mile",
    quote:
      "You have to be able to see at least one-third of a mile (about 10 seconds) ahead. Any time your view is blocked by a curve or a hill, you should assume that there is an oncoming vehicle just out of sight.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Visibility - Hills and Curves",
    url: hb(26),
  },
  {
    key: "no-pass-within-third-of-mile",
    quote:
      "This means you should not start to pass if you are within one-third of a mile of a hill or curve.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Visibility - Hills and Curves",
    url: hb(26),
  },
  {
    key: "no-headphones",
    quote:
      "Do not drive with head or earphones that cover or go into both ears. These are illegal in many states and make it too hard to hear emergency horns or sirens.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Visibility - Things NOT to do while driving",
    url: hb(26),
  },
  {
    key: "rubbernecking",
    quote:
      "Do not slow down just to look at a crash or someone getting a ticket or other roadside activity. This is called \"rubber necking\" and could cause you to be in a crash.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Visibility - Things NOT to do while driving",
    url: hb(26),
  },
  {
    key: "wet-snow-ice-speeds",
    quote:
      "On a wet road, you should reduce your speed by about 10 mph. On packed snow, you should cut your speed in half. Use snow tires or chains when the road has snow on it. On ice, you must slow to a crawl.",
    source: MANUAL,
    section: "Chapter 3 - Hazardous Conditions - Slippery Roads",
    url: hb(27),
  },
  {
    key: "studded-tires-manual",
    quote:
      "Studded tires are permitted in Connecticut from November 15th through April 30th.",
    source: MANUAL,
    section: "Chapter 3 - Hazardous Conditions - Slippery Roads",
    url: hb(27),
  },
  {
    key: "bridges-freeze-first",
    quote:
      "Overpasses and other types of bridges can have icy spots. The pavement on bridges can be icy even when other pavement is not.",
    source: MANUAL,
    section: "Chapter 3 - Hazardous Conditions - Slippery Roads",
    url: hb(27),
  },
  {
    key: "shady-spots-icy",
    quote: "On cold, wet days, shady spots can be icy.",
    source: MANUAL,
    section: "Chapter 3 - Hazardous Conditions - Slippery Roads",
    url: hb(27),
  },
  {
    key: "rain-on-hot-day",
    quote:
      "When it starts to rain on a hot day, pavement can be more slippery for the first few minutes. Heat causes the oil in the asphalt to come to the surface.",
    source: MANUAL,
    section: "Chapter 3 - Hazardous Conditions - Slippery Roads",
    url: hb(27),
  },
  {
    key: "hydroplaning-35-mph",
    quote:
      "When it is raining or the road is wet, most tires have good traction up to about 35 mph. As you go faster, however, your tires will start to ride up on the water like water skis. This is called \"hydroplaning.\"",
    source: MANUAL,
    section: "Chapter 3 - Hazardous Conditions - Water on the Roadway",
    url: hb(27),
  },
  {
    key: "hydroplaning-response",
    quote:
      "Keep the steering wheel straight. Only try to turn if it's an emergency. If you must turn, do it slowly, or you will cause your vehicle to skid.",
    source: MANUAL,
    section: "Chapter 3 - Hazardous Conditions - Water on the Roadway",
    url: hb(27),
  },
  {
    key: "slow-before-the-curve",
    quote:
      "Always slow down before you enter the curve so you do not have to brake in the curve. Braking in a curve can cause the vehicle to skid.",
    source: MANUAL,
    section: "Chapter 3 - Hazardous Conditions - Curves",
    url: hb(27),
  },
  {
    key: "gravel-traction",
    quote:
      "You do not have as much traction on gravel or dirt roads as you do on concrete or asphalt roads. When driving on gravel or dirt, you must slow down.",
    source: MANUAL,
    section: "Chapter 3 - Hazardous Conditions - Tire Conditions",
    url: hb(27),
  },
  {
    key: "lane-blocking-left-lane",
    quote:
      "Don't block the passing lane. Stay out of the far left lane and yield to the right for any vehicle that wants to pass.",
    source: MANUAL,
    section: "Chapter 3 - Avoiding the Risks - Behaviors That Can Cause Trouble",
    url: hb(28),
  },
  {
    key: "aggressive-driver-do-not-go-home",
    quote:
      "If a motorist pursues you, do not go home.",
    source: MANUAL,
    section: "Chapter 3 - Avoiding the Risks - Behaviors That Can Cause Trouble",
    url: hb(28),
  },
  {
    key: "report-aggressive-driving",
    quote:
      "Call the police to report any instances of aggressive driving when you arrive at your destination.",
    source: MANUAL,
    section: "Chapter 3 - Avoiding the Risks - How to Avoid Conflict on the Road",
    url: hb(28),
  },
  {
    key: "distraction-definition",
    quote:
      "A distraction is anything that takes your attention away from driving. Driver distractions may occur anytime and anywhere.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Driver Distractions",
    url: hb(29),
  },
  {
    key: "distracted-driver-space",
    quote:
      "Give a distracted driver plenty of room and maintain a safe following distance of 3 to 4 seconds.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Driver Distractions",
    url: hb(29),
  },
  {
    key: "responsibility-falls-on-you",
    quote:
      "If you are distracted and you experience a crash, the responsibility falls on you, not the distraction.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Driver Distractions",
    url: hb(29),
  },
  {
    key: "fatigue-impairs-like-alcohol",
    quote:
      "Just like alcohol and drugs, it impairs your vision and judgment.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Fatigue",
    url: hb(29),
  },
  {
    key: "fatigue-young-adults",
    quote:
      "Young Adults - People 16 to 24 years old often need more sleep than an average adult.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Fatigue",
    url: hb(30),
  },
  {
    key: "fatigue-caffeine",
    quote:
      "Consume caffeine - the equivalent of 2 cups of coffee can increase alertness for several hours. Avoid drinking too much caffeine and keep in mind that it will wear off. Do not rely on caffeine to prevent fatigue.",
    source: MANUAL,
    section: "Chapter 3 - Ways to Prevent a Fatigue-Related Crash While Driving",
    url: hb(30),
  },
  {
    key: "fatigue-sleep-is-best",
    quote: "The best way to prevent fatigue is sleep.",
    source: MANUAL,
    section: "Chapter 3 - Ways to Prevent a Fatigue-Related Crash While Driving",
    url: hb(30),
  },
  {
    key: "rumble-strips",
    quote:
      "If you run over a shoulder rumble strip, pull off the road at a safe place immediately and check your alertness level.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Fatigue",
    url: hb(30),
  },
  {
    key: "health-let-someone-else-drive",
    quote:
      "If you are not feeling well and need to go somewhere, let someone else drive.",
    source: MANUAL,
    section: "Chapter 3: Driving Behaviors - Health",
    url: hb(30),
  },

  // --- Drinking and Driving -----------------------------------------------
  {
    key: "alcohol-40-percent",
    quote:
      "Alcohol is involved in more than 40 percent of the traffic crashes in which someone is killed.",
    source: MANUAL,
    section: "Chapter 3 - Drinking and Driving",
    url: hb(35),
  },
  {
    key: "new-drivers-more-affected",
    quote:
      "No one can drink alcohol and drive safely, even if they have been driving for many years. New drivers are more affected by alcohol than experienced drivers because they are still learning to drive.",
    source: MANUAL,
    section: "Chapter 3 - Drinking and Driving",
    url: hb(35),
  },
  {
    key: "under-21-one-drink",
    quote:
      "In Connecticut, people under 21 years old could be considered impaired after having only one drink of alcohol.",
    source: MANUAL,
    section: "Chapter 3 - Drinking and Driving - Alcohol and You",
    url: hb(35),
  },
  {
    key: "standard-drink",
    quote:
      "An alcohol drink is: 1.5 oz. of 80-proof liquor (one shot glass) straight or with a mixer, 12 oz. of beer (a regular size can, bottle, mug, or glass), or a 5 oz. glass of wine.",
    source: MANUAL,
    section: "Chapter 3 - Drinking and Driving - Alcohol and You",
    url: hb(35),
  },
  {
    key: "no-way-to-sober-up",
    quote:
      "There is no way to sober up quickly. Coffee, fresh air, exercise, or cold showers will not help. Time is the only thing that will sober you up.",
    source: MANUAL,
    section: "Chapter 3 - Drinking and Driving - Alcohol and You",
    url: hb(35),
  },
  {
    key: "dui-45-day-suspension",
    quote:
      "If you fail this test, your operator's license will be suspended for at least 45 days. You will be required to install and maintain an ignition interlock device (IID) as a condition of reinstatement.",
    source: MANUAL,
    section: "Chapter 3 - Your License and the Law - Alcohol and the Law",
    url: hb(35),
  },
  {
    key: "zero-tolerance-manual",
    quote:
      "In addition, if you are under 21 years of age, you are subject to \"zero tolerance.\" The law provides penalties for driving with any measurable amount of alcohol in your blood, defined as two hundredths of one percent (.02%) or more on both public roads and private property.",
    source: MANUAL,
    section: "Chapter 3 - Your License and the Law - Alcohol and the Law",
    url: hb(35),
  },
  {
    key: "under-21-iid-one-year",
    quote:
      "If your test results are .02 percent or higher, the police will make a report to the Commissioner and your operator's license will be suspended for at least 45 days.",
    source: MANUAL,
    section: "Chapter 3 - Your License and the Law - Alcohol and the Law",
    url: hb(35),
  },
  {
    key: "refusal-suspension",
    quote:
      "Regardless of age, if you refuse to take a test, your operator's license will be suspended for at least 45 days.",
    source: MANUAL,
    section: "Chapter 3 - Your License and the Law - Alcohol and the Law",
    url: hb(35),
  },
  {
    key: "drugs-prescription-otc",
    quote:
      "Besides alcohol, there are many other drugs that can affect a person's ability to drive safely. These drugs can have effects like those of alcohol, or even worse. This is true of many prescription drugs, and even many over-the-counter drugs.",
    source: MANUAL,
    section: "Chapter 3 - Drinking and Driving - Drugs and Driving",
    url: hb(35),
  },
  {
    key: "never-mix-alcohol-and-drugs",
    quote:
      "Never drink alcohol while you are taking other drugs. These drugs could multiply the effects of alcohol or have additional effects of their own.",
    source: MANUAL,
    section: "Chapter 3 - Drinking and Driving - Drugs and Driving",
    url: hb(35),
  },
  {
    key: "designated-driver",
    quote:
      "Arrange to go with two or more persons and agree which one of you will not drink alcohol. You can rotate among the group to be a \"designated driver.\"",
    source: MANUAL,
    section: "Chapter 3 - Drinking and Driving - Alcohol and You",
    url: hb(35),
  },

  // --- Chapter 4: Road Safety ---------------------------------------------
  {
    key: "speed-limits-ideal-conditions",
    quote:
      "Remember, speed limits are posted for ideal conditions. If the road is wet or icy, if you cannot see well, or if traffic is heavy, you must slow down. Even if you are driving the posted speed limit, you can get a ticket for traveling too fast for road conditions.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Speed Limits",
    url: hb(38),
  },
  {
    key: "stopping-60-vs-30",
    quote:
      "For example, stopping at 60 mph does not take twice the distance it takes at 30 mph, as one might think, but over three times the distance.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Speed Limits",
    url: hb(38),
  },
  {
    key: "driving-too-slow",
    quote:
      "Going much slower than other vehicles can be just as bad as speeding. It tends to make vehicles bunch up behind you and causes the other traffic to pass you.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Speed Limits",
    url: hb(38),
  },
  {
    key: "stopping-distance-400-200",
    quote:
      "At 50 mph, it can take you about 400 feet to react to something you see and bring your vehicle to a stop. That is about the length of a city block.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - How Well Can You See?",
    url: hb(38),
  },
  {
    key: "complete-stop-at-stop-line",
    quote:
      "Remember, you must come to a complete stop at a stop sign or stop line.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Stopping",
    url: hb(38),
  },
  {
    key: "law-does-not-give-row",
    quote:
      "The law says who must yield the right-of-way. It does not give anyone the right-of-way. You must do everything you can to prevent striking a pedestrian or another vehicle, regardless of the circumstances.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(38),
  },
  {
    key: "obey-officer-over-signal",
    quote:
      "You must obey signals given by a law enforcement officer, even if the officer's signals contradict the traffic signal.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(38),
  },
  {
    key: "yield-to-pedestrians-marked-unmarked",
    quote:
      "Drivers must yield the right-of-way at all times to pedestrians who are in a marked or unmarked crosswalk. Additionally, drivers must yield the right-of-way to bicyclists and pedestrians where a bicycle path crosses the roadway.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(38),
  },
  {
    key: "white-cane-absolute-row",
    quote:
      "Pedestrians using a guide dog or carrying a white cane have absolute right-of-way. Do not use your horn because it could confuse or frighten the pedestrian.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(38),
  },
  {
    key: "left-turn-yield-manual",
    quote: "Drivers turning left must yield to oncoming vehicles going straight.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(38),
  },
  {
    key: "rotary-yield-manual",
    quote:
      "Drivers entering a traffic circle or rotary must yield to drivers already in the circle.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(38),
  },
  {
    key: "uncontrolled-intersection-right",
    quote:
      "At an intersection where there is no stop sign, yield sign or oncoming traffic signal, drivers must yield to vehicles coming from the right.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(38),
  },
  {
    key: "four-way-stop-manual",
    quote:
      "At a four-way stop, the driver reaching the intersection first goes first (after coming to a complete stop). If more than one vehicle arrives at the same time, the vehicle on the right goes first.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(38),
  },
  {
    key: "driveway-yield-manual",
    quote:
      "Drivers entering a road from a driveway, alley or roadside must yield to vehicles already on the main road.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(39),
  },
  {
    key: "overtaking-driver-yields",
    quote:
      "Drivers overtaking a vehicle traveling in the same direction must yield to that vehicle, even if the vehicle is slowing or coming to a stop.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(39),
  },
  {
    key: "school-bus-stop-manual",
    quote:
      "You must stop for a school bus that is stopped with its red lights flashing whether it is on your side of the road, the opposite side of the road, or at an intersection you are approaching. You are not required to stop if the bus is traveling towards you and a median or other physical barrier separates the roadway.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(39),
  },
  {
    key: "school-bus-after-lights-off",
    quote:
      "After the school bus red lights have stopped flashing, watch for children along the side of the road and do not proceed until they have completely left the roadway and it is safe to proceed.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(39),
  },
  {
    key: "yield-to-trains",
    quote: "You must yield the right-of-way to trains crossing the roadway.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Right-of-Way",
    url: hb(39),
  },
  {
    key: "roundabout-yield-circulating",
    quote:
      "Entering traffic must yield the right-of-way to circulating traffic. Each road approaching them is marked with a yield sign and may also have yield line markings on the pavement.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Roundabouts",
    url: hb(39),
  },
  {
    key: "roundabout-signal-exit",
    quote:
      "Enter the roundabout when there is a sufficient gap in traffic, use your right turn signal when you are about to reach your intended exit point, and yield to any pedestrians in the crosswalk on the exiting leg.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Roundabouts",
    url: hb(39),
  },
  {
    key: "roundabout-do-not-stop",
    quote:
      "Do not stop within the roundabout to allow traffic to enter the roundabout from another leg.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Roundabouts",
    url: hb(39),
  },
  {
    key: "uturn-never-on-expressway",
    quote:
      "U-turns are not legal everywhere. So before you make a U-turn, check for signs prohibiting them. Never make a U-turn on an expressway.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - U-Turns",
    url: hb(39),
  },
  {
    key: "uturn-into-outside-lane",
    quote:
      "When making a U-turn, give a left turn signal, stop, check for approaching traffic. Proceed into the outside or right hand lane traveling in the opposite direction.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - U-Turns",
    url: hb(39),
  },
  {
    key: "park-on-hill-wheels",
    quote:
      "When you park on a hill, turn your wheels sharply towards the side of the road or curb. This way, if your vehicle starts to roll downhill, it will roll away from traffic.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Parking",
    url: hb(39),
  },
  {
    key: "no-parking-distances",
    quote:
      "Do not park: In an intersection. On a crosswalk or sidewalk. In a construction area if your vehicle will block traffic. Within 25 feet of a stop sign. Within 25 feet of a pedestrian safety zone. Within 10 feet of a fire hydrant. More than one foot from the curb.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - No-Parking Zones",
    url: hb(39),
  },
  {
    key: "no-parking-places",
    quote:
      "On a bridge or overpass or in a tunnel or underpass. On the wrong side of the street.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - No-Parking Zones",
    url: hb(39),
  },
  {
    key: "parking-brake-always",
    quote:
      "Always set your parking brake when you park. Leave the vehicle in gear if it has a manual transmission or in \"park\" if it has an automatic transmission.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Parking",
    url: hb(39),
  },
  {
    key: "park-exit-curbside",
    quote:
      "Check traffic before you open the door. Get out of the vehicle on the curbside if you can.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - Parking",
    url: hb(39),
  },
  {
    key: "headlights-with-wipers",
    quote:
      "Remember, if you turn on your wipers, turn on your headlights. It's the law.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Lights - Use Headlights",
    url: hb(40),
  },
  {
    key: "headlights-when-dark",
    quote:
      "When it begins to get dark. Even if you turn them on a little early, you will help other drivers see you.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Lights - Use Headlights",
    url: hb(40),
  },
  {
    key: "headlights-into-sun",
    quote:
      "When driving away from a rising or setting sun, turn on your headlights. Drivers coming towards you may have trouble seeing your vehicle.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Lights - Use Headlights",
    url: hb(40),
  },
  {
    key: "parking-lights-only",
    quote:
      "Do not drive at any time with only your parking lights on. Parking lights are for parking only.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Lights",
    url: hb(40),
  },
  {
    key: "high-beams-twice-as-far",
    quote:
      "Use your high beams whenever there are no oncoming vehicles. High beams let you see twice as far as low beams.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Lights",
    url: hb(40),
  },
  {
    key: "dim-within-one-block",
    quote:
      "Dim your high beams whenever you come within about a one-block distance of an oncoming vehicle.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Lights",
    url: hb(40),
  },
  {
    key: "low-beams-in-fog",
    quote:
      "Use the low beams in fog or when it is snowing or raining hard. Light from high beams will reflect back, causing glare and making it more difficult to see ahead.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Lights",
    url: hb(40),
  },
  {
    key: "blinded-look-right-edge",
    quote:
      "If a vehicle comes toward you with high beams on, flash your headlights quickly a couple of times. If the driver fails to dim the lights, look toward the right side of the road.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Lights",
    url: hb(40),
  },
  {
    key: "high-beam-400-feet",
    quote:
      "Your high beam headlights will let you see about 400 feet ahead. You should drive at a speed that allows you to stop within this distance, or about 50 mph.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Lights - Darkness",
    url: hb(40),
  },
  {
    key: "heavy-rain-200-feet",
    quote:
      "In a very heavy rain, snowstorm, or thick fog, you may not be able to see much more than 200 feet ahead. In a very heavy downpour, you may not be able to see well enough to drive.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Lights - Rain, Fog, or Snow",
    url: hb(40),
  },
  {
    key: "horn-light-tap",
    quote:
      "If there is no immediate danger, a light tap on the horn should be all you need.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Horn",
    url: hb(40),
  },
  {
    key: "horn-sharp-blast",
    quote:
      "If there is danger, do not be afraid to sound a SHARP BLAST on your horn.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Horn",
    url: hb(40),
  },
  {
    key: "horn-when-not-to-use",
    quote:
      "There are several occasions when you should not use your horn. They include: Encouraging someone to drive faster or get out of the way. Notifying other drivers of an error. Greeting a friend. Around blind pedestrians. When approaching horses.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Horn - When Not to Use Your Horn",
    url: hb(40),
  },
  {
    key: "signal-three-seconds",
    quote: "Try and signal at least three seconds before you make your move.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Turn Signals",
    url: hb(41),
  },
  {
    key: "signal-not-too-early",
    quote:
      "Be careful that you do not signal too early. If there are streets, driveways, intersections, or entrances between you and where you want to turn, wait until you have reached that point before signaling.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Turn Signals",
    url: hb(41),
  },
  {
    key: "signal-turn-it-off",
    quote:
      "After you have made a turn or lane change, make sure your turn signal is off. After small turns, the signals may not turn off by themselves.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Turn Signals",
    url: hb(41),
  },
  {
    key: "tap-brakes-three-or-four",
    quote:
      "If you are going to stop or slow down at a place where another driver does not expect it, tap your brake pedal quickly three or four times to let those behind you know you are about to slow down.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Turn Signals - Signal When You Slow Down",
    url: hb(41),
  },
  {
    key: "breakdown-flashers",
    quote:
      "Get your vehicle off the road and away from traffic if at all possible.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Vehicle Emergencies - Use Emergency Signals",
    url: hb(41),
  },
  {
    key: "breakdown-white-cloth",
    quote:
      "Lift the hood or tie a white cloth to the antenna, side mirror or door handle to signal an emergency.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Vehicle Emergencies - Use Emergency Signals",
    url: hb(41),
  },
  {
    key: "breakdown-never-stand-in-road",
    quote:
      "Never stand in the roadway. Do not try to change a tire if it means you have to be in a traffic lane.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Vehicle Emergencies - Use Emergency Signals",
    url: hb(41),
  },
  {
    key: "brake-failure",
    quote:
      "Pump the brake pedal several times. This will often build up enough brake pressure to allow you to stop.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Equipment Failure - Brake Failure",
    url: hb(41),
  },
  {
    key: "tire-blowout",
    quote:
      "Hold the steering wheel tightly and keep the vehicle going straight. Slow down gradually. Take your foot off the gas pedal and use the brakes lightly.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Equipment Failure - Tire Blowout",
    url: hb(41),
  },
  {
    key: "gas-pedal-sticks",
    quote:
      "Keep your eyes on the road. Quickly shift to neutral. Pull off the road when it is safe to do so. Turn off the engine.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Equipment Failure - Gas Pedal Sticks",
    url: hb(42),
  },
  {
    key: "steering-wheel-locks",
    quote:
      "Never turn your vehicle's ignition to the \"lock\" position while it is still in motion or the steering will lock and you will lose control of your vehicle.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Equipment Failure - Steering Wheel Locks",
    url: hb(42),
  },
  {
    key: "headlight-failure",
    quote:
      "Slow down gradually and pull off the road as soon as possible. Try the headlight switch a few times.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Equipment Failure - Headlight Failure",
    url: hb(42),
  },
  {
    key: "three-collision-options",
    quote:
      "In avoiding a collision, drivers have three options: stop, turn or speed up.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Avoiding Collisions",
    url: hb(42),
  },
  {
    key: "abs-press-and-hold",
    quote:
      "Press on the brake pedal as hard as you can and keep pressing on it.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Avoiding Collisions - Stopping Quickly",
    url: hb(42),
  },
  {
    key: "no-abs-threshold-braking",
    quote:
      "Apply the brakes as hard as you can without locking them.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Avoiding Collisions - Stopping Quickly",
    url: hb(42),
  },
  {
    key: "turn-faster-than-stop",
    quote:
      "In most cases, you can turn the vehicle more quickly than you can stop it. You should consider turning in order to avoid a collision.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Avoiding Collisions - Turning Quickly",
    url: hb(42),
  },
  {
    key: "run-off-road-not-head-on",
    quote:
      "Remember that it is generally better to run off the road than to crash head-on into another vehicle.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Avoiding Collisions - Turning Quickly",
    url: hb(42),
  },
  {
    key: "skid-stay-off-brake",
    quote:
      "Stay off the brake. Until the vehicle slows, your brakes will not work and could cause you to skid more.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Avoiding Collisions - Dealing with Skids",
    url: hb(42),
  },
  {
    key: "skids-too-fast-for-conditions",
    quote:
      "Skids are caused when the tires can no longer grip the road. As you cannot control a vehicle when it is skidding, it is best not to cause your vehicle to skid in the first place. Skids happen when a driver travels too fast for conditions.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Avoiding Collisions - Dealing with Skids",
    url: hb(42),
  },
  {
    key: "crash-you-must-stop",
    quote:
      "If you are involved in an accident, you must stop. If you are involved in an accident with a parked vehicle, you must try and locate the owner. If any person is injured or killed, the police must be notified.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Traffic Crashes",
    url: hb(43),
  },
  {
    key: "crash-leaving-is-a-crime",
    quote:
      "It is a crime for you to leave a crash site in which your vehicle was involved if there is an injury or death before police have talked to you and gotten all the information they need about the crash.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Traffic Crashes",
    url: hb(43),
  },
  {
    key: "crash-leave-a-note",
    quote:
      "Should the accident involve a parked vehicle, try to find the owner. If you cannot, leave a note in a place where it can be seen with the date and time of the accident and information on how the owner can reach you.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Traffic Crashes - Report the Accident",
    url: hb(43),
  },
  {
    key: "crash-report-to-police",
    quote:
      "You must report the accident to police if there is an injury, a death or property damage.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Traffic Crashes - Report the Accident",
    url: hb(43),
  },
  {
    key: "crash-nothing-to-drink",
    quote:
      "Do not give injured persons anything to drink - not even water.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Traffic Crashes - If someone is injured",
    url: hb(43),
  },
  {
    key: "crash-do-not-move-injured",
    quote:
      "Do not move the injured unless they are in a burning vehicle or in other immediate danger of being hit by another vehicle. Moving a person can make their injuries worse.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Traffic Crashes - If someone is injured",
    url: hb(43),
  },
  {
    key: "crash-do-not-stop-to-look",
    quote:
      "Do not stop at an accident unless you are involved or if emergency help has not yet arrived.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Traffic Crashes",
    url: hb(43),
  },
  {
    key: "crash-exchange-information",
    quote:
      "Exchange information with other drivers involved in the crash; name, address, driver's license number, vehicle information (license plate, make, model, and year of vehicle), and insurance company and policy number (if available).",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Traffic Crashes - Report the Accident",
    url: hb(43),
  },
  {
    key: "hit-from-rear",
    quote:
      "If your vehicle is hit from the rear, your body will be thrown backwards. Press yourself against the back of your seat and put your head against the head restraint.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Traffic Crashes - Hit From the Rear",
    url: hb(43),
  },
  {
    key: "hit-from-side-airbags",
    quote:
      "If your vehicle is hit from the side, your body will be thrown towards the side that is hit. Front airbags will not help in this situation.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Traffic Crashes - Hit From the Side",
    url: hb(43),
  },

  // --- Chapter 5: Know the Road -------------------------------------------
  {
    key: "edge-lines",
    quote:
      "Solid White Lines are used on the right of the roadway edge. Solid Yellow Lines are used on the left of the roadway edge of divided streets or roadways.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Edge Lines",
    url: hb(45),
  },
  {
    key: "dashed-white-lines",
    quote:
      "Dashed White Lines are between lanes of traffic moving in the same direction that indicate you may cross to change lanes if it is safe to do so.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Lane Lines",
    url: hb(45),
  },
  {
    key: "solid-white-lines",
    quote:
      "Solid White Lines are between lanes of traffic that indicate you should stay in your lane unless a special situation requires you to change lanes.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Lane Lines",
    url: hb(45),
  },
  {
    key: "dashed-yellow-lines",
    quote:
      "Center lines are yellow lines that separate lanes of traffic moving in opposite directions.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Center Lines",
    url: hb(45),
  },
  {
    key: "dashed-alongside-solid-yellow",
    quote:
      "Dashed Yellow Line Alongside a Solid Yellow Line indicates that passing is permitted on the side of the broken line, but not on the side of the solid line.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Center Lines",
    url: hb(46),
  },
  {
    key: "double-yellow-left-turn",
    quote:
      "Solid yellow lines may be crossed to make a left turn to or from an alley, private road, driveway, or street.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Center Lines",
    url: hb(46),
  },
  {
    key: "stop-before-the-stop-line",
    quote:
      "When required to stop because of a sign or signal, you must stop before your vehicle reaches the stop line.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Crosswalks and Stop Lines",
    url: hb(46),
  },
  {
    key: "double-white-line",
    quote: "A double solid white line prohibits lane changing.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Other Markings",
    url: hb(46),
  },
  {
    key: "hov-lane",
    quote:
      "\"HOV\" stands for \"High Occupancy Vehicles;\" a diamond-shaped marker indicates lanes reserved for vehicles with more than one person in them.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Reserved Lanes",
    url: hb(46),
  },
  {
    key: "shared-center-lane",
    quote:
      "These center lanes are reserved for making left turns (or U-turns when they are permitted), but can be used by vehicles traveling in both directions.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Shared Center Lane",
    url: hb(46),
  },
  {
    key: "reversible-lane-signals",
    quote:
      "A green arrow means you can use the lane beneath it; a red \"X\" means you cannot. A flashing yellow \"X\" means the lane is only for turning. A steady yellow \"X\" means that the use of the lane is changing and you should move out of it as soon as it is safe to do so.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Reversible Lanes",
    url: hb(46),
  },
  {
    key: "bicycle-sharrow",
    quote:
      "A bicycle sharrow, two chevrons painted above a bicycle symbol on the road, indicates the lane is shared.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Other Markings",
    url: hb(46),
  },
  {
    key: "red-light-means-stop",
    quote:
      "Red traffic lights mean stop. You must wait until the traffic light turns green and there is no crossing traffic before you may move ahead.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Lights and Signals",
    url: hb(47),
  },
  {
    key: "right-on-red-full-stop",
    quote:
      "If you are turning right on red, you may turn after coming to a full stop and checking to make sure that there is no oncoming traffic and no sign prohibiting the turn on a red light. Watch out for pedestrians crossing in front of your vehicle.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Lights and Signals",
    url: hb(47),
  },
  {
    key: "yellow-light",
    quote:
      "Yellow traffic lights mean the traffic light is about to change to red. You must stop if it is safe to do so. If you are in the intersection when the yellow light comes on, do not stop-continue through the intersection.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Lights and Signals",
    url: hb(47),
  },
  {
    key: "green-light-clear-intersection",
    quote:
      "If you are stopped and then the light turns green, you must allow crossing traffic to clear the intersection before you go ahead. If you are turning left, a steady green traffic light means you may turn but only when safe to do so.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Lights and Signals",
    url: hb(47),
  },
  {
    key: "flashing-red",
    quote:
      "A flashing red traffic light means the same as a stop sign. You must come to a full stop and you may proceed when it is safe to do so.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Flashing Lights",
    url: hb(47),
  },
  {
    key: "flashing-yellow",
    quote:
      "A flashing yellow traffic light means slow down and proceed with caution.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Flashing Lights",
    url: hb(47),
  },
  {
    key: "red-arrow",
    quote:
      "A red arrow means you must stop and you cannot go in the direction of the arrow. You may proceed when the red arrow goes out and a green arrow or light goes on.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Arrows",
    url: hb(47),
  },
  {
    key: "yellow-arrow",
    quote:
      "A yellow arrow means that the protection of a green arrow is ending; if you are turning in the direction of the arrow, you should prepare to stop.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Arrows",
    url: hb(47),
  },
  {
    key: "green-arrow",
    quote:
      "A green arrow means you can safely turn in the direction of the arrow. There should be no on-coming or crossing traffic while the arrow is green.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Arrows",
    url: hb(47),
  },
  {
    key: "hawk-signal",
    quote:
      "The HAWK is composed of a circular yellow signal centered under two horizontally-aligned circular red signals. When activated, vehicles must come to a complete stop as the pedestrian crosses.",
    source: MANUAL,
    section: "Chapter 5 - High-Intensity Activated CrossWalK (HAWK) Signals",
    url: hb(47),
  },
  {
    key: "hawk-flashing-red",
    quote:
      "Drivers must stop but may proceed when pedestrians have cleared the crosswalk.",
    source: MANUAL,
    section: "Chapter 5 - High-Intensity Activated CrossWalK (HAWK) Signals",
    url: hb(47),
  },
  {
    key: "signal-order-bottom-to-top",
    quote:
      "Traffic lights are usually at intersections and are green, yellow, and red (bottom to top) when together.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signals",
    url: hb(47),
  },
  {
    key: "shape-octagon",
    quote:
      "The octagon (eight-sided) shape always means stop. You must come to a complete stop at the sign, stop line, pedestrian crosswalk or curb. Then, yield the right-of-way to any vehicle or pedestrian approaching from either direction.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Shapes",
    url: hb(48),
  },
  {
    key: "shape-triangle-yield",
    quote:
      "Triangle: Yield Slow down to a speed reasonable for the conditions and yield the right-of-way. Stop if necessary.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Shapes",
    url: hb(48),
  },
  {
    key: "shape-diamond-warning",
    quote:
      "Diamond: Warning These signs warn you of special conditions or hazards ahead. Drive with caution and be ready to slow down or stop.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Shapes",
    url: hb(48),
  },
  {
    key: "shape-pentagon-school",
    quote:
      "The pentagon (five-sided) shape marks school zones and warns you about school crossings.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Shapes",
    url: hb(48),
  },
  {
    key: "shape-circle-railroad",
    quote:
      "A circular sign indicates that you are approaching a railroad crossing. Slow down, look and listen for trains.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Shapes",
    url: hb(48),
  },
  {
    key: "shape-pennant-no-passing",
    quote:
      "This three-sided sign is shaped like a pennant. When used, the sign is on the left side of a two-lane, two-way roadway. It is posted at the beginning of a NO-PASSING ZONE where \"no-passing\" pavement markings are also used.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Shapes",
    url: hb(48),
  },
  {
    key: "shape-rectangle",
    quote:
      "Vertical signs generally give instructions or tell you the law. Horizontal signs may give directions or information.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Shapes",
    url: hb(48),
  },
  {
    key: "color-red",
    quote:
      "All red signs are regulatory signs and must be obeyed. They include STOP, YIELD, DO NOT ENTER or WRONG WAY.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Colors",
    url: hb(49),
  },
  {
    key: "color-yellow",
    quote:
      "Yellow is used for warning signs. These signs tell you of road conditions and dangers ahead.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Colors",
    url: hb(49),
  },
  {
    key: "color-orange",
    quote:
      "Orange is also used for warning signs. They alert you to possible dangers ahead due to construction and maintenance projects.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Colors",
    url: hb(49),
  },
  {
    key: "color-green",
    quote:
      "Green is used for guide signs. They tell you where you are, which way to go and the distance.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Colors",
    url: hb(49),
  },
  {
    key: "color-blue",
    quote:
      "Blue is also used for guide signs. They tell you about services along the roadway.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Colors",
    url: hb(49),
  },
  {
    key: "color-brown",
    quote: "Brown is used for parks and recreation signs.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Colors",
    url: hb(49),
  },
  {
    key: "color-fluorescent-yellow-green",
    quote:
      "Fluorescent Yellow-Green may be used for pedestrian, bicycle, and school warning signs.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Traffic Signs - Colors",
    url: hb(49),
  },
  {
    key: "regulatory-signs",
    quote:
      "These signs are square, rectangular, or have a special shape and are usually white, red, or black with black, red, white, or green letters or symbols. They give you information about rules for traffic direction, lane use, turning, speed, parking, and other special situations.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Regulatory Signs",
    url: hb(49),
  },
  {
    key: "red-circle-slash",
    quote:
      "Some regulatory signs have a red circle with a red slash over a symbol. These signs prohibit certain actions, i.e., \"no left turn,\" \"no right turn,\" \"no U-turn,\" etc.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Regulatory Signs",
    url: hb(49),
  },
  {
    key: "stop-sign-wait-until-clear",
    quote:
      "You must come to a full and complete stop at a stop sign or stop line, if one is present. You must wait until crossing vehicles and pedestrians have cleared. You may pull forward only when it is safe to do so.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Regulatory Signs - Stop Sign",
    url: hb(49),
  },
  {
    key: "yield-sign",
    quote:
      "A yield sign is a downward pointing triangle. It is red and white with red letters. It means you must slow down and yield the right-of-way to traffic in the intersection you are crossing or roadway you are entering.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Regulatory Signs - Yield Sign",
    url: hb(49),
  },
  {
    key: "do-not-enter",
    quote:
      "A square sign with a white horizontal line inside a red ball means you cannot enter.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Regulatory Signs - Do Not Enter Sign",
    url: hb(49),
  },
  {
    key: "wrong-way",
    quote:
      "This sign is used to identify a one-way street, expressway ramp or the wrong direction or wrong side of a divided highway. Do not drive past this sign - turn around.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Regulatory Signs - Wrong Way",
    url: hb(49),
  },
  {
    key: "keep-right-sign",
    quote:
      "This sign tells you where to drive when you approach traffic islands, medians or other obstructions in the middle of the roadway. You must drive to the side indicated by the arrow.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Regulatory Signs - Keep Right",
    url: hb(50),
  },
  {
    key: "one-way-sign",
    quote:
      "These signs are used on one-way streets or driveways. You must always go only in the direction of the arrow.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Regulatory Signs - One Way",
    url: hb(50),
  },
  {
    key: "speed-limit-sign",
    quote:
      "The sign indicates the maximum speed that should be driven on the roadway.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Regulatory Signs - Speed Limit",
    url: hb(50),
  },
  {
    key: "no-passing-signs",
    quote:
      "These signs tell you where passing is not permitted. Passing areas are based on how far you can see ahead.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Regulatory Signs - No Passing Signs",
    url: hb(50),
  },
  {
    key: "disabled-parking-sign",
    quote:
      "Parking spaces marked with these signs are reserved for individuals with disabled parking privileges.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Regulatory Signs - Disabled Parking",
    url: hb(50),
  },
  {
    key: "warning-signs",
    quote:
      "These signs are usually yellow with black lettering or symbols; most are diamond-shaped. These signs warn you to slow down and be prepared to stop if necessary. They warn you that a special situation or a hazard is ahead.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs",
    url: hb(51),
  },
  {
    key: "signal-ahead-sign",
    quote: "Traffic signals are ahead. Slow down and prepare to stop.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs - Signal Ahead",
    url: hb(51),
  },
  {
    key: "reduction-in-lanes-sign",
    quote:
      "This sign is used on multi-lane highways to warn you of a reduction in the number of traffic lanes in the direction you are traveling. Be prepared to change lanes or to allow other vehicles to merge into your lane.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs - Reduction in Lanes",
    url: hb(51),
  },
  {
    key: "pedestrian-crossing-sign",
    quote:
      "Watch for people crossing your path. Be prepared to slow down and stop.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs - Pedestrian Crossing",
    url: hb(51),
  },
  {
    key: "two-way-roadway-sign",
    quote:
      "This sign tells you that you are leaving a divided roadway and will be driving on a two-way highway.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs - Two-Way Road Way",
    url: hb(51),
  },
  {
    key: "school-zone-sign",
    quote:
      "Slow down - School grounds nearby. Watch out for children crossing the street or playing. Be ready to stop. Obey signals from any crossing guards.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs - School Zone",
    url: hb(51),
  },
  {
    key: "slippery-when-wet-sign",
    quote:
      "When pavement is wet, reduce your speed. Do not brake hard or change direction suddenly. Increase the distance between your car and the one ahead.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs - Slippery when Wet",
    url: hb(51),
  },
  {
    key: "stop-ahead-sign",
    quote: "A stop sign is ahead. Slow down and prepare to stop.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs - Stop Ahead",
    url: hb(51),
  },
  {
    key: "merge-sign",
    quote:
      "Two lanes of traffic are about to become one. Drivers in both lanes are responsible for merging smoothly.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs - Merge",
    url: hb(51),
  },
  {
    key: "advisory-speed-plaque",
    quote:
      "Usually installed below another warning sign. This sign is used to indicate the advisory speed for a condition.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs - Advisory Speed Plaque",
    url: hb(51),
  },
  {
    key: "divided-highway-begins",
    quote:
      "The highway ahead is split into two separate roadways by a median or divider and each roadway is one-way. Keep right.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs - Divided Highway Begins",
    url: hb(52),
  },
  {
    key: "change-in-direction-sign",
    quote:
      "This sign warns you of a change in direction or narrowing of the road. You may find several of these signs on the outside of a sharp curve or on approaches to a narrow bridge.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs - Change in Direction",
    url: hb(52),
  },
  {
    key: "turns-and-curves-signs",
    quote:
      "Certain signs are posted before turns and curves. The shape of the arrow tells you what to expect. A small sign showing the maximum safe speed may also be posted below the arrow.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Warning Signs - Turns and Curves",
    url: hb(52),
  },
  {
    key: "guide-signs",
    quote:
      "These are signs that direct a motorist to certain places. They tell you where you are, what road you are on and how to get where you want to go. Most guide signs are rectangular.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Guide Signs",
    url: hb(52),
  },
  {
    key: "service-signs",
    quote:
      "These signs are square or rectangle shaped and are blue with white letters or symbols. They show the locations of various services, such as rest areas, gas stations, campgrounds, or hospitals.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Guide Signs - Service Signs",
    url: hb(53),
  },
  {
    key: "mileposts",
    quote:
      "Mileposts are placed every mile along the freeway from one end of the state to the other. Zero usually starts at the south and west borders of the state.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Guide Signs - Destination and Distance Signs",
    url: hb(53),
  },
  {
    key: "parks-and-recreation-signs",
    quote:
      "These signs are brown. They guide you to recreational areas and parks.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Guide Signs - Parks and Recreation",
    url: hb(53),
  },
  {
    key: "work-area-signs",
    quote:
      "These construction, maintenance, or emergency operations signs are generally diamond or rectangle-shaped and orange with black letters or symbols. These warn you that people are working on or near the roadway.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Work Area Signs",
    url: hb(53),
  },
  {
    key: "flag-person-sign",
    quote:
      "In work areas, a person with a sign or a flag may control traffic. You must obey these persons.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Work Area Signs",
    url: hb(53),
  },
  {
    key: "detour-sign",
    quote:
      "This sign is used at the beginning of an alternate route that has been established because a road has been closed.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Work Area Signs - Detour",
    url: hb(53),
  },
  {
    key: "railroad-never-beat-a-train",
    quote:
      "Never try to beat a train across the tracks. Never start to cross if there is not room for your vehicle on the far side and if you will have to stop on the tracks; wait until there is room for your vehicle on the far side.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Railroad Crossing Signs",
    url: hb(53),
  },
  {
    key: "railroad-round-yellow-sign",
    quote:
      "A round yellow warning sign with an \"X\" symbol and black \"RR\" letters is placed along the road before you get to a railroad crossing.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Railroad Crossing Sign",
    url: hb(54),
  },
  {
    key: "crossbuck-means-yield",
    quote:
      "A white, X-shaped sign or \"crossbuck\" with \"Railroad Crossing\" printed on it is located at the railroad crossing. This sign has the same meaning as a \"Yield\" sign. You must yield to crossing trains.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Railroad Crossbuck",
    url: hb(54),
  },
  {
    key: "railroad-gates",
    quote:
      "Stop when the lights begin to flash and before the gate lowers. Remain stopped until the gates are raised and the lights stop flashing. Do not attempt to drive around the lowered gate.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Railroad Crossbuck, Flashing Lights and Gate",
    url: hb(54),
  },
  {
    key: "message-boards",
    quote:
      "You may see portable or permanent message boards along the highway. They may provide information about traffic, road, weather or other hazardous conditions. Always obey any directions posted on these message boards.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Message Boards",
    url: hb(54),
  },

  // --- Connecticut General Statutes ---------------------------------------
  {
    key: "statute-speed-55",
    quote:
      "at a rate of speed greater than fifty-five miles per hour upon any highway other than a highway specified in subdivision (1) of subsection (b) of section 14-218a for which a speed limit has been established in accordance with the provisions of said subdivision",
    source: STATUTES,
    section: "Chapter 248, Section 14-219 - Speeding",
    url: stat("248", "14-219"),
  },
  {
    key: "statute-speed-65",
    quote:
      "at a rate of speed greater than sixty-five miles per hour upon any highway specified in subdivision (1) of subsection (b) of section 14-218a for which a speed limit has been established in accordance with the provisions of said subdivision",
    source: STATUTES,
    section: "Chapter 248, Section 14-219 - Speeding",
    url: stat("248", "14-219"),
  },
  {
    key: "statute-teen-20-over",
    quote:
      "if such person is under eighteen years of age, upon any highway or road for which a speed limit of less than sixty-five miles per hour has been established in accordance with section 14-218a, or section 14-307a, at a rate of speed more than twenty miles per hour above such speed limit",
    source: STATUTES,
    section: "Chapter 248, Section 14-219 - Speeding",
    url: stat("248", "14-219"),
  },
  {
    key: "statute-reasonable-speed",
    quote:
      "at a rate of speed greater than is reasonable, having regard to the width, traffic and use of highway, road or parking area, the intersection of streets and weather conditions.",
    source: STATUTES,
    section: "Chapter 248, Section 14-218a - Traveling unreasonably fast",
    url: stat("248", "14-218a"),
  },
  {
    key: "statute-school-bus-10-feet",
    quote:
      "shall immediately bring such vehicle to a stop not less than ten feet from the front when approaching and not less than ten feet from the rear when overtaking or following any registered school bus",
    source: STATUTES,
    section: "Chapter 248, Section 14-279 - Vehicles to stop for school bus",
    url: stat("248", "14-279"),
  },
  {
    key: "statute-school-bus-fine",
    quote:
      "Any person who violates any provision of subsection (a) of this section shall be fined four hundred fifty dollars for the first offense and for each subsequent offense, not less than five hundred dollars nor more than one thousand dollars or imprisoned not more than thirty days or both.",
    source: STATUTES,
    section: "Chapter 248, Section 14-279 - Vehicles to stop for school bus. Penalties",
    url: stat("248", "14-279"),
  },
  {
    key: "statute-school-bus-no-turns",
    quote:
      "At the intersection of two or more highways vehicular turns toward a school bus receiving or discharging passengers are prohibited.",
    source: STATUTES,
    section: "Chapter 248, Section 14-279 - Vehicles to stop for school bus",
    url: stat("248", "14-279"),
  },
  {
    key: "statute-school-bus-barrier",
    quote:
      "The operator of a vehicle upon a highway with two or more lanes for traffic separated by a safety island or physical barrier may proceed without stopping upon meeting or passing a school bus which is on the opposite side of such island or barrier.",
    source: STATUTES,
    section: "Chapter 248, Section 14-279 - Vehicles to stop for school bus",
    url: stat("248", "14-279"),
  },
  {
    key: "statute-signal-100-feet",
    quote:
      "A signal of intention to turn right or left shall be given continuously during not less than the last one hundred feet traveled by the vehicle before turning.",
    source: STATUTES,
    section: "Chapter 248, Section 14-242 - Signals to be given before turning or stopping",
    url: stat("248", "14-242"),
  },
  {
    key: "statute-uturn-500-feet",
    quote:
      "No person shall turn a vehicle so as to proceed in the opposite direction upon any curve, or upon the approach to, or near the crest of, a grade, where such vehicle cannot be seen by the driver of any other vehicle approaching from either direction within five hundred feet",
    source: STATUTES,
    section: "Chapter 248, Section 14-242 - Turns restricted. U-turns",
    url: stat("248", "14-242"),
  },
  {
    key: "statute-left-turn-yield",
    quote:
      "The driver of a vehicle intending to turn to the left within an intersection or into an alley, private road or driveway shall yield the right-of-way to any vehicle approaching from the opposite direction which is within the intersection",
    source: STATUTES,
    section: "Chapter 248, Section 14-242 - Left turns",
    url: stat("248", "14-242"),
  },
  {
    key: "statute-hand-signals",
    quote:
      "Hand signals shall be as follows: (1) To stop or decrease speed: Hand and arm extended downward; (2) to turn left or to leave or draw away from a curb or the edge of the highway: Hand and arm extended horizontally with forefinger pointed; (3) to turn right: Hand and arm extended upward.",
    source: STATUTES,
    section: "Chapter 248, Section 14-244 - Signals",
    url: stat("248", "14-244"),
  },
  {
    key: "statute-cancel-signal",
    quote:
      "Each operator of a motor vehicle who makes a turn signal by means of signal lamps or mechanical signal device shall turn in the direction indicated and return such signal to the nonoperating position immediately after completing the movement for which a signal has been given.",
    source: STATUTES,
    section: "Chapter 248, Section 14-244 - Signals",
    url: stat("248", "14-244"),
  },
  {
    key: "statute-following-distance",
    quote:
      "no person operating a motor vehicle shall follow another vehicle more closely than is reasonable and prudent, having regard for the speed of such vehicles, the traffic upon and the condition of the highway and weather conditions.",
    source: STATUTES,
    section: "Chapter 248, Section 14-240 - Vehicles to be driven reasonable distance apart",
    url: stat("248", "14-240"),
  },
  {
    key: "statute-parking-hydrant",
    quote:
      "No vehicle shall be permitted to remain stationary within ten feet of any fire hydrant, or upon the traveled portion of any highway except upon the right-hand side of such highway in the direction in which such vehicle is headed",
    source: STATUTES,
    section: "Chapter 248, Section 14-251 - Parking vehicles",
    url: stat("248", "14-251"),
  },
  {
    key: "statute-parking-25-feet",
    quote:
      "No vehicle shall be permitted to remain parked within twenty-five feet of an intersection or an approach to a marked crosswalk",
    source: STATUTES,
    section: "Chapter 248, Section 14-251 - Parking vehicles",
    url: stat("248", "14-251"),
  },
  {
    key: "statute-parking-stop-sign",
    quote:
      "No vehicle shall be permitted to remain parked within twenty-five feet of a stop sign caused to be erected by the traffic authority in accordance with the provisions of section 14-301",
    source: STATUTES,
    section: "Chapter 248, Section 14-251 - Parking vehicles",
    url: stat("248", "14-251"),
  },
  {
    key: "statute-parking-150-feet",
    quote:
      "No vehicle shall be permitted to remain stationary upon the traveled portion of any highway at any curve or turn or at the top of any grade where a clear view of such vehicle may not be had from a distance of at least one hundred fifty feet in either direction.",
    source: STATUTES,
    section: "Chapter 248, Section 14-251 - Parking vehicles",
    url: stat("248", "14-251"),
  },
  {
    key: "statute-row-from-right",
    quote:
      "Each driver of a vehicle approaching an intersection shall grant the right-of-way at such intersection to any vehicle approaching from his right when such vehicles are arriving at such intersection at approximately the same time, unless otherwise directed by a traffic officer.",
    source: STATUTES,
    section: "Chapter 248, Section 14-245 - Intersection. Right-of-way",
    url: stat("248", "14-245"),
  },
  {
    key: "statute-driveway-yield",
    quote:
      "The driver of a vehicle about to enter or cross a highway from a private road or driveway shall yield the right-of-way to all vehicles approaching on such highway.",
    source: STATUTES,
    section: "Chapter 248, Section 14-247 - Right-of-way at driveway or private road",
    url: stat("248", "14-247"),
  },
  {
    key: "statute-yield-to-bus",
    quote:
      "The driver of a vehicle shall yield the right-of-way to a motor bus traveling in the same direction when such motor bus gives an appropriate signal in the manner provided in section 14-244 to reenter the flow of traffic.",
    source: STATUTES,
    section: "Chapter 248, Section 14-247b - Right-of-way yielded to signaling motor bus",
    url: stat("248", "14-247b"),
  },
  {
    key: "statute-three-feet-safe-distance",
    quote:
      "For the purposes of this subsection, \"safe distance\" means not less than three feet when the driver of a vehicle overtakes and passes (A) a person riding a bicycle, an electric bicycle or an electric foot scooter",
    source: STATUTES,
    section: "Chapter 248, Section 14-232 - Passing",
    url: stat("248", "14-232"),
  },
  {
    key: "statute-passing-on-right",
    quote:
      "The driver of a vehicle may overtake and pass upon the right of another vehicle only when conditions permit such movement in safety and under the following conditions: (1) When the vehicle overtaken is making or has signified the intention to make a left turn;",
    source: STATUTES,
    section: "Chapter 248, Section 14-233 - Passing on right",
    url: stat("248", "14-233"),
  },
  {
    key: "statute-slower-traffic-right",
    quote:
      "any vehicle proceeding at less than the normal speed of traffic shall be driven in the right-hand lane available for traffic, or as close as practicable to the right-hand curb or edge of the highway",
    source: STATUTES,
    section: "Chapter 248, Section 14-230 - Driving in right-hand lane",
    url: stat("248", "14-230"),
  },
  {
    key: "statute-single-lane",
    quote:
      "a vehicle shall be driven as nearly as practicable entirely within a single lane and shall not be moved from such lane until the driver has ascertained that such movement can be made with safety",
    source: STATUTES,
    section: "Chapter 248, Section 14-236 - Multiple-lane highways",
    url: stat("248", "14-236"),
  },
  {
    key: "statute-lights-half-hour",
    quote:
      "Every vehicle upon a highway within this state shall display such lighted lamps and illuminating devices as may be required under the provisions of sections 14-96a to 14-96aa, inclusive, (1) at any time from a half-hour after sunset to a half-hour before sunrise",
    source: STATUTES,
    section: "Chapter 246, Section 14-96a - Lighted lamps and illuminating devices required, when",
    url: stat("246", "14-96a"),
  },
  {
    key: "statute-lights-precipitation",
    quote:
      "(2) at any time when, due to insufficient light or unfavorable atmospheric conditions, persons and vehicles on the highway are not clearly discernible at a distance of five hundred feet ahead, and (3) at any time during periods of precipitation, including, but not limited to, periods of snow, rain or fog.",
    source: STATUTES,
    section: "Chapter 246, Section 14-96a - Lighted lamps and illuminating devices required, when",
    url: stat("246", "14-96a"),
  },
  {
    key: "statute-studded-tires",
    quote:
      "such vehicle may be equipped with tires incorporating a metal nonskid device during the period from November fifteenth to April thirtieth, inclusive",
    source: STATUTES,
    section: "Chapter 246, Section 14-98 - Tires",
    url: stat("246", "14-98"),
  },
  {
    key: "statute-bac-08",
    quote:
      "\"elevated blood alcohol content\" means a ratio of alcohol in the blood of such person that is eight-hundredths of one per cent or more of alcohol, by weight",
    source: STATUTES,
    section: "Chapter 248, Section 14-227a - Operation while under the influence",
    url: stat("248", "14-227a"),
  },
  {
    key: "statute-under-21-02",
    quote:
      "No person who is less than twenty-one years of age shall operate a motor vehicle while the ratio of alcohol in the blood of such person is two-hundredths of one per cent or more of alcohol, by weight.",
    source: STATUTES,
    section: "Chapter 248, Section 14-227g - Operation by person under twenty-one years of age",
    url: stat("248", "14-227g"),
  },
  {
    key: "statute-implied-consent",
    quote:
      "Any person who operates a motor vehicle in this state shall be deemed to have given such person's consent to: (1) A chemical test of such person's blood, breath or urine; and (2) a nontestimonial portion of a drug influence evaluation conducted by a drug recognition expert.",
    source: STATUTES,
    section: "Chapter 248, Section 14-227b - Implied consent",
    url: stat("248", "14-227b"),
  },
  {
    key: "statute-gdl-first-six-months",
    quote:
      "for the period of six months after the date of issuance of such license, such person shall not transport more than (A) such person's parents or legal guardian, at least one of whom holds a motor vehicle operator's license, or (B) one passenger who is a driving instructor licensed by the Department of Motor Vehicles",
    source: STATUTES,
    section: "Chapter 246, Section 14-36g - Restrictions on transportation of passengers",
    url: stat("246", "14-36g"),
  },
  {
    key: "statute-gdl-curfew",
    quote:
      "no such person shall operate a motor vehicle on any highway, as defined in section 14-1, at or after 11:00 p.m. until and including 5:00 a.m. of the following day unless (A) such person is traveling for his or her employment or school or religious activities, or (B) there is a medical necessity for such travel",
    source: STATUTES,
    section: "Chapter 246, Section 14-36g - Hours of operation",
    url: stat("246", "14-36g"),
  },
  {
    key: "statute-gdl-seatbelt-count",
    quote:
      "No such person shall transport more passengers in a motor vehicle than the number of seat safety belts permanently installed in such motor vehicle",
    source: STATUTES,
    section: "Chapter 246, Section 14-36g - Restrictions on transportation of passengers",
    url: stat("246", "14-36g"),
  },
  {
    key: "statute-gdl-30-day-suspension",
    quote:
      "The Commissioner of Motor Vehicles shall suspend the motor vehicle operator's license of any person who violates the provisions of subsection (a) of this section for a period of thirty days for a first violation",
    source: STATUTES,
    section: "Chapter 246, Section 14-36g - Penalties",
    url: stat("246", "14-36g"),
  },
  {
    key: "statute-move-over",
    quote:
      "(A) immediately reduce speed to a reasonable level below the posted speed limit, and (B) if traveling in the lane adjacent to the shoulder, lane or breakdown lane containing such emergency vehicle, move such motor vehicle over one lane, unless such movement would be unreasonable or unsafe.",
    source: STATUTES,
    section: "Chapter 248, Section 14-283b - Motor vehicle operator required to move over or reduce speed",
    url: stat("248", "14-283b"),
  },
  {
    key: "statute-school-zone-fines-doubled",
    quote:
      "The Superior Court shall impose an additional fee equivalent to one hundred per cent of the fine established or imposed for the violation of the provisions of section 14-218a or 14-219, for any such violation committed in a school zone",
    source: STATUTES,
    section: "Chapter 248, Section 14-212b - School zones. Fines doubled",
    url: stat("248", "14-212b"),
  },
  {
    key: "statute-pedestrian-until-opposite-curb",
    quote:
      "A pedestrian started or starting across the highway or on any such crosswalk shall have the right-of-way over all vehicles, including those making turns, until such pedestrian has reached the opposite curb or safety zone.",
    source: STATUTES,
    section: "Chapter 249, Section 14-300 - Crosswalks. Pedestrian-control signals",
    url: stat("249", "14-300"),
  },
  {
    key: "statute-motorcycle-full-lane",
    quote:
      "The operator of a motorcycle shall be entitled to the full use of any single traffic lane, but the operation of more than two motorcycles abreast in any single traffic lane is prohibited.",
    source: STATUTES,
    section: "Chapter 248, Section 14-289b - Operation of motorcycles and autocycles",
    url: stat("248", "14-289b"),
  },
  {
    key: "statute-motorcycle-headlamp",
    quote:
      "Any person operating a motorcycle manufactured after January 1, 1980, on a highway, shall illuminate the head lamp of such motorcycle at all times it is being operated.",
    source: STATUTES,
    section: "Chapter 248, Section 14-289b - Operation of motorcycles and autocycles",
    url: stat("248", "14-289b"),
  },
  {
    key: "statute-no-driving-on-sidewalk",
    quote:
      "No person shall operate any motor vehicle upon, nor shall any motor vehicle be left parked, standing or stopped on or across, any public sidewalk except to cross such sidewalk to enter or leave adjacent areas or to perform necessary sidewalk construction, maintenance or snow removal.",
    source: STATUTES,
    section: "Chapter 248, Section 14-250a - Vehicles prohibited on sidewalks",
    url: stat("248", "14-250a"),
  },
  {
    key: "statute-commercial-railroad-stop",
    quote:
      "shall stop such vehicle not less than fifteen feet or more than fifty feet from the nearest rail of such track",
    source: STATUTES,
    section: "Chapter 248, Section 14-250 - Certain motor vehicles to stop at railroad crossing",
    url: stat("248", "14-250"),
  },
  {
    key: "statute-emerging-from-driveway-stop",
    quote:
      "The driver of a vehicle within a business or residence area, emerging from an alley, driveway or building, shall stop such vehicle immediately prior to driving onto a sidewalk or onto the sidewalk area extending across any alleyway or driveway",
    source: STATUTES,
    section: "Chapter 248, Section 14-247a - Right-of-way yielded by one emerging from alley or driveway",
    url: stat("248", "14-247a"),
  },

  // --- Continuations of rules the manual sets out as bulleted lists -------
  {
    key: "permit-vision-and-knowledge",
    quote: "You must pass both a vision and a 25-question knowledge test.",
    source: MANUAL,
    section: "Chapter 1: Obtaining a Connecticut Driver's License - Obtaining a Learner's Permit",
    url: hb(7),
  },
  {
    key: "gdl-first-six-instructor",
    quote:
      "One person who is at least 20 years old, has held a driver's license for four or more consecutive years and whose license has not been suspended during the four years preceding the time of being transported.",
    source: MANUAL,
    section: "Chapter 1 - Restrictions for 16- and 17-Year-Old Drivers - Passenger Restrictions",
    url: hb(10),
  },
  {
    key: "gdl-no-extra-passengers",
    quote: "Transport more passengers than the number of seatbelts in the vehicle.",
    source: MANUAL,
    section: "Chapter 1 - Restrictions for 16- and 17-Year-Old Drivers - Other Restrictions",
    url: hb(10),
  },
  {
    key: "gdl-no-phone-at-all",
    quote:
      "Use a cell phone (even if it is hands-free) or mobile electronic device while driving.",
    source: MANUAL,
    section: "Chapter 1 - Restrictions for 16- and 17-Year-Old Drivers - Other Restrictions",
    url: hb(10),
  },
  {
    key: "retraining-offenses-teen",
    quote:
      "The following list is some of the offenses that may require a 16-or 17-year-old to take the retraining program: Driving in violation of learner's permit requirements.",
    source: MANUAL,
    section: "Chapter 3 - Operator Retraining Program for Repeat Offenders",
    url: hb(37),
  },
  {
    key: "motorcycle-wait-until-turning",
    quote:
      "Do not pull out in front of a motorcycle until you see that it is actually beginning to turn.",
    source: MANUAL,
    section: "Chapter 3 - Sharing the Road with Others - Motorcycles",
    url: hb(20),
  },
  {
    key: "three-second-count",
    quote:
      "Watch for when the rear of the vehicle ahead passes a sign, pole, or any other stationary point.",
    source: MANUAL,
    section: "Chapter 3 - Maintaining a Space Cushion - Space Ahead",
    url: hb(23),
  },
  {
    key: "hydroplaning-do-not-brake",
    quote: "Do not try to stop or turn until your tires are gripping the road again.",
    source: MANUAL,
    section: "Chapter 3 - Hazardous Conditions - Water on the Roadway",
    url: hb(27),
  },
  {
    key: "stopping-distance-30-mph",
    quote:
      "At 30 mph, it can take about 200 feet to stop. That is almost half a city block in length.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - How Well Can You See?",
    url: hb(38),
  },
  {
    key: "no-parking-handicapped-and-tracks",
    quote:
      "In a space marked for the handicapped, unless you have a handicap license plate or placard. On the roadside of a parked vehicle (double parking). On railroad tracks. Where a sign says you cannot park. In a bike lane.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Rules of the Road - No-Parking Zones",
    url: hb(39),
  },
  {
    key: "low-beams-when-following",
    quote:
      "Use your low beams when following another vehicle or when in heavy traffic.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Lights",
    url: hb(40),
  },
  {
    key: "emergency-flashers",
    quote: "Turn on your emergency flashers to show that you are having trouble.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Vehicle Emergencies - Use Emergency Signals",
    url: hb(41),
  },
  {
    key: "brake-failure-parking-brake",
    quote:
      "If that does not work, use the parking brake. Pull on the parking brake handle slowly so you will not lock the rear wheels and cause a skid.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Equipment Failure - Brake Failure",
    url: hb(41),
  },
  {
    key: "abs-do-not-let-up",
    quote:
      "You might feel the brake pedal pushing back when the ABS is working. Do not let up on the brake pedal. The ABS system will only work with the brake pedal pushed down.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Avoiding Collisions - Stopping Quickly",
    url: hb(42),
  },
  {
    key: "no-abs-release-and-reapply",
    quote:
      "If the brakes lock up, you will feel the vehicle start to skid. Quickly let up on the brake pedal.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Avoiding Collisions - Stopping Quickly",
    url: hb(42),
  },
  {
    key: "skid-steer-where-you-want-to-go",
    quote:
      "Steer. Turn the steering wheel in the direction you want the vehicle to go. As soon as the vehicle begins to straighten out, turn the steering wheel back the other way.",
    source: MANUAL,
    section: "Chapter 4: Road Safety - Avoiding Collisions - Dealing with Skids",
    url: hb(42),
  },
  {
    key: "dashed-yellow-passing-allowed",
    quote:
      "Dashed Yellow Lines separate single lanes of traffic moving in opposite directions. Passing is allowed.",
    source: MANUAL,
    section: "Chapter 5: Know the Road - Pavement Markings - Center Lines",
    url: hb(45),
  },
];
