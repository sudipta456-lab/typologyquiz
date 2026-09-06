import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Colorado bank: most from the Colorado
// Driver Handbook, a dozen from Title 42 of the Colorado Revised Statutes, and
// a handful from dmv.colorado.gov pages.
//
// Sources, and why there are three of them:
//
//  - The Colorado Driver Handbook, form DR 2337 (12/05/24), the January 2025
//    edition published by the Colorado Department of Revenue, Division of
//    Motor Vehicles. It is 27 printed pages plus covers, and the written test
//    is written from it. Page numbers below are the handbook's own printed
//    numbers; the PDF page is three higher, and the #page anchors on the
//    links use the PDF numbering.
//  - Title 42 of the Colorado Revised Statutes (2024 edition), published by
//    the Office of Legislative Legal Services of the Colorado General
//    Assembly. The handbook prints most of the numbers the test asks, but not
//    all: it never gives the crosswalk, driveway or railroad parking
//    distances, it states the school-bus "median" exception more narrowly
//    than the statute does, and it does not state the 75 mph absolute maximum
//    or the under-21 0.02 offense as the statute frames them.
//  - Five dmv.colorado.gov pages, for the test's time limit and retest rules
//    and for the permit ages, courses and holding periods that the handbook
//    only summarises with "vary by age".
//
// dmv.colorado.gov serves its PDF and most of its pages to automated clients,
// but the Minor Permit page returned a 403, so that one page was read from an
// Internet Archive capture of the same official URL dated 2026-01-04. Every
// `url` below still points at the live official page.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Four
// normalisations were applied to the extracted text and to nothing else: curly
// quotes, en dashes and em dashes are folded to ASCII; runs of whitespace,
// including the line breaks the PDF inserts mid-sentence, collapse to single
// spaces; the section symbol is spelled out as "Section"; and where a source
// states a rule as a stem followed by a bulleted list, the items are run
// together in the order they appear - no words are changed, dropped or
// reordered. The handbook's own slips stay as printed ("will make person
// sober", "driving to fast", "Anyone younger than 21 is convicted"), because
// a quote that has been tidied up is no longer a quote.

const HANDBOOK = "Colorado Driver Handbook, DR 2337 (12/05/24), January 2025 edition (Colorado Division of Motor Vehicles)";
const HB = "https://dmv.colorado.gov/sites/dmv/files/documents/DR_2337_Jan2025.pdf";
const hb = (printedPage: number) => `${HB}#page=${printedPage + 3}`;
const CRS = "Colorado Revised Statutes 2024, Title 42 (Colorado General Assembly, Office of Legislative Legal Services)";
const crs = (pdfPage: number) =>
  `https://content.leg.colorado.gov/sites/default/files/images/olls/crs2024-title-42.pdf#page=${pdfPage}`;
const DMV = "dmv.colorado.gov (Colorado Division of Motor Vehicles)";

export const coloradoExcerpts: HandbookExcerpt[] = [
  // ---------------------------------------------------------------- licensing
  {
    key: "license-age-16",
    quote:
      "Anyone who operates a motor vehicle, motor-driven cycle or moped on Colorado's " +
      "public streets and highways must be 16 or older and have a valid driver license.",
    source: HANDBOOK,
    section: "Getting a Driver License (p. 1)",
    url: hb(1),
  },
  {
    key: "address-change-30-days",
    quote:
      "If you have a change to your address or name you must notify the Division of " +
      "Motor Vehicles within 30 days.",
    source: HANDBOOK,
    section: "Getting a Driver License (p. 1)",
    url: hb(1),
  },
  {
    key: "test-content",
    quote:
      "The test questions cover the contents of this handbook including road signs, " +
      "driving under the influence, driving rules, safety rules and legal items.",
    source: HANDBOOK,
    section: "Getting a Driver License - Driving Knowledge Tests (p. 1)",
    url: hb(1),
  },
  {
    key: "test-30-min-closing",
    quote: "Written tests are not given within 30 minutes of an office's scheduled closing time.",
    source: HANDBOOK,
    section: "Getting a Driver License - Driving Knowledge Tests (p. 1)",
    url: hb(1),
  },
  {
    key: "permit-supervisor-21",
    quote:
      "When you are driving with an instruction permit, you must have a person who is 21 " +
      "years or older who has a valid Colorado license in the front passenger seat.",
    source: HANDBOOK,
    section: "Getting a Driver License - Instruction permits (p. 1)",
    url: hb(1),
  },
  {
    key: "drive-test-retake",
    quote: "If you fail the drive test, you must wait until the next business day before retaking the test.",
    source: HANDBOOK,
    section: "Getting a Driver License - Driving Skills Test (p. 1)",
    url: hb(1),
  },
  {
    key: "drive-test-following-wheels",
    quote:
      "(If you can see the rear wheels touching the ground of the vehicle in front of you, " +
      "you are at an adequate distance).",
    source: HANDBOOK,
    section: "Getting a Driver License - Stopping (p. 2)",
    url: hb(2),
  },
  {
    key: "affidavit-liability",
    quote:
      "If you are under 18, your application must be accompanied by an Affidavit of " +
      "Liability (DR2460) signed and verified by your parent, stepparent, grandparent with " +
      "power of attorney, legal guardian, spouse older than 18, or any other responsible " +
      "adult willing to accept legal liability.",
    source: HANDBOOK,
    section: "Minor Drivers - Affidavit of Liability and Guardianship (p. 2)",
    url: hb(2),
  },
  {
    key: "affidavit-withdraw",
    quote:
      "If the signer decides to no longer accept responsibility for your driving, that " +
      "person may withdraw their signature and your permit/license will be canceled.",
    source: HANDBOOK,
    section: "Minor Drivers - Affidavit of Liability and Guardianship (p. 2)",
    url: hb(2),
  },
  {
    key: "permit-12-months-50-hours",
    quote:
      "Colorado law requires minors to have an instruction permit for 12 months before " +
      "applying for a driver license and to submit a completed and signed driving log " +
      "showing 50 hours of driving experience (10 of which must have been at night).",
    source: HANDBOOK,
    section: "Minor Drivers - Application for driver license (p. 2)",
    url: hb(2),
  },
  {
    key: "btw-6-hours",
    quote:
      "If younger than 16 and 6 months, you must also complete 6 hours of behind-the-wheel " +
      "training with an approved driver education instructor.",
    source: HANDBOOK,
    section: "Minor Drivers - Application for driver license (p. 2)",
    url: hb(2),
  },
  {
    key: "btw-exemption-12-hours",
    quote:
      "If you live more than 30 miles from an approved full-time driving school, 12 hours " +
      "of in the car driving with a driving supervisor will substitute the 6 hours of in " +
      "the car driving school. This means the permit holder will need a total of 62 hours " +
      "of driving logged.",
    source: DMV,
    section: "Colorado Permits and First-Time Driver License - Behind-the-Wheel (BTW) Training Exemption",
    url: "https://dmv.colorado.gov/permits-first-time-driver-license",
  },
  {
    key: "passengers-first-6-months",
    quote:
      "For the first six months after your license is issued, you cannot have any " +
      "passengers under 21, unless a parent or another licensed adult driver is in the vehicle.",
    source: HANDBOOK,
    section: "Minor Drivers - Passenger restrictions (p. 2)",
    url: hb(2),
  },
  {
    key: "passengers-after-6-months",
    quote:
      "After 6 months, you may have one passenger younger than 21. Siblings and passengers " +
      "with medical emergencies are exceptions.",
    source: HANDBOOK,
    section: "Minor Drivers - Passenger restrictions (p. 2)",
    url: hb(2),
  },
  {
    key: "passengers-after-1-year",
    quote: "After 1 year, you may carry as many passengers as there are seat belts in the vehicle.",
    source: HANDBOOK,
    section: "Minor Drivers - Passenger restrictions (p. 2)",
    url: hb(2),
  },
  {
    key: "curfew-midnight-5",
    quote:
      "For your first year as a licensed driver, driving between midnight and 5 a.m. is " +
      "not allowed unless you are accompanied by an instructor, parent or legal guardian.",
    source: HANDBOOK,
    section: "Minor Drivers - Curfew (p. 2)",
    url: hb(2),
  },
  {
    key: "curfew-exceptions",
    quote:
      "Exceptions include driving to and from school or work (with a signed statement from " +
      "school or work), medical emergencies and emancipated minors.",
    source: HANDBOOK,
    section: "Minor Drivers - Curfew (p. 2)",
    url: hb(2),
  },
  {
    key: "lose-license-insurance",
    quote:
      "Fail to provide valid evidence of insurance when requested by a law enforcement " +
      "officer. Drivers are required to have proof of insurance while operating a vehicle.",
    source: HANDBOOK,
    section: "How You Can Lose Your License (p. 3)",
    url: hb(3),
  },
  // --------------------------------------------------------------- seat belts
  {
    key: "seatbelt-who",
    quote:
      "Colorado law requires a fastened seat belt to be worn in all motor vehicles with a " +
      "factory-equipped seat belt system while in operation on public roadways by: The " +
      "driver Front seat passengers Children under 16",
    source: HANDBOOK,
    section: "Seat Belt Laws (p. 3)",
    url: hb(3),
  },
  {
    key: "seatbelt-exceptions",
    quote:
      "The only exceptions are: Emergency personnel Passenger buses and school buses Farm " +
      "equipment The driver of delivery vans while on the job",
    source: HANDBOOK,
    section: "Seat Belt Laws (p. 3)",
    url: hb(3),
  },
  {
    key: "child-driver-responsibility",
    quote:
      "If a parent is not in the motor vehicle, it is the driver's responsibility to ensure " +
      "that each child is properly fastened into one of the following",
    source: HANDBOOK,
    section: "Seat Belt Laws - child passenger protection law (p. 3)",
    url: hb(3),
  },
  {
    key: "child-under-2-rear-facing",
    quote:
      "Children less than 2 years old and weighing less than 40 pounds: must be properly " +
      "secured in the rear seat of the vehicle in a rear-facing child restraint system.",
    source: HANDBOOK,
    section: "Seat Belt Laws - child passenger protection law (p. 3)",
    url: hb(3),
  },
  {
    key: "child-2-to-4",
    quote:
      "Children 2 years of age, but less than 4 years of age and weighing at least 20 " +
      "pounds: must be properly secured in a rear-facing or forward-facing child restraint " +
      "system in the rear seat of a vehicle if one is available.",
    source: HANDBOOK,
    section: "Seat Belt Laws - child passenger protection law (p. 3)",
    url: hb(3),
  },
  {
    key: "child-4-to-9-booster",
    quote:
      "Children 4 years of age or older, but less than 9 years of age and weighing at least " +
      "40 pounds: must be properly secured in a child restraint system or booster seat in " +
      "the rear seat of a vehicle, if a rear seat is available.",
    source: HANDBOOK,
    section: "Seat Belt Laws - child passenger protection law (p. 3)",
    url: hb(3),
  },
  {
    key: "child-9-to-18",
    quote:
      "Children between 9 and 18 years old: must be properly restrained in a seat belt or " +
      "child restraint system according to the manufacturer's instructions.",
    source: HANDBOOK,
    section: "Seat Belt Laws - child passenger protection law (p. 3)",
    url: hb(3),
  },
  {
    key: "minor-driver-passengers-belts",
    quote:
      "Passengers in motor vehicles driven by anyone younger than 18 must be properly " +
      "restrained or wear seat belts. The number of passengers in vehicles driven by " +
      "persons younger than 18 must not exceed the number of seat belts.",
    source: HANDBOOK,
    section: "Seat Belt Laws (p. 3)",
    url: hb(3),
  },
  // ------------------------------------------------------------- impairment
  {
    key: "open-container",
    quote:
      "It is unlawful for someone to either possess an open container of alcohol or " +
      "possess an open container of marijuana while in the passenger area of a motor " +
      "vehicle that is on a public road.",
    source: HANDBOOK,
    section: "Driving Under the Influence (p. 3)",
    url: hb(3),
  },
  {
    key: "dwai-vs-dui",
    quote:
      "DWAI means the driver is impaired to the slightest degree. DUI means the driver is " +
      "substantially incapable of safe driving.",
    source: HANDBOOK,
    section: "Driving Under the Influence (p. 3)",
    url: hb(3),
  },
  {
    key: "dui-per-se-08",
    quote: "A driver may also be convicted of DUI per se if the driver's BAC is greater than 0.08%.",
    source: HANDBOOK,
    section: "Driving Under the Influence (p. 3)",
    url: hb(3),
  },
  {
    key: "bac-revocation-levels",
    quote:
      "Licenses may be revoked if the driver refuses a toxicological test, set forth in " +
      "Colorado Statute, or based on a BAC over .08 or over .02 if the driver is under 21, " +
      "or over .04 for a CDL driver.",
    source: HANDBOOK,
    section: "Driving Under the Influence (p. 3)",
    url: hb(3),
  },
  {
    key: "standard-drink",
    quote:
      "A standard drink is defined as 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of " +
      "distilled spirits, all of which contain the same amount of alcohol.",
    source: HANDBOOK,
    section: "Driving Under the Influence (p. 3)",
    url: hb(3),
  },
  {
    key: "only-time-sobers",
    quote:
      "Once alcohol is in the bloodstream, only the passage of time will make person sober " +
      "as the body eliminates it through normal bodily processes. On average, a person's " +
      "BAC will drop by 0.015% per hour.",
    source: HANDBOOK,
    section: "Driving Under the Influence (p. 3)",
    url: hb(3),
  },
  {
    key: "dwai-first-penalty",
    quote: "1st Driving While Ability Impaired (DWAI) 0.05% 8 $200-$500 2-180 days 24-48 hours",
    source: HANDBOOK,
    section: "Driving Under the Influence - Table 1: Possible Penalties for Impaired Driving (p. 4)",
    url: hb(4),
  },
  {
    key: "dui-first-penalty",
    quote:
      "1st Driving Under the Influence (DUI) 0.08% Revocation: 9 months $600-$1,000 " +
      "5-365 days 48-96 hours",
    source: HANDBOOK,
    section: "Driving Under the Influence - Table 1: Possible Penalties for Impaired Driving (p. 4)",
    url: hb(4),
  },
  {
    key: "under-21-dui-revocation",
    quote:
      "Any driver younger than 21, convicted of DUI or DWAI, is subject to revocation of " +
      "their driver license for the first conviction if they fail to complete a " +
      "court-ordered evaluation or program. A second or third conviction is a mandatory " +
      "revocation of their license.",
    source: HANDBOOK,
    section: "Driving Under the Influence - younger than 21 (p. 4)",
    url: hb(4),
  },
  {
    key: "under-21-possession",
    quote:
      "Anyone younger than 21 is convicted of buying or possessing alcohol is subject to " +
      "revocation of their driving privilege even if driving is not a factor.",
    source: HANDBOOK,
    section: "Driving Under the Influence - younger than 21 (p. 4)",
    url: hb(4),
  },
  {
    key: "drugs-same-penalties",
    quote:
      "Driving while impaired by drugs, including illicit drugs, marijuana, prescription " +
      "medications and over the counter medications, is illegal and subject to the same " +
      "penalties as driving while impaired by alcohol.",
    source: HANDBOOK,
    section: "Driving Under the Influence - Drugs and driving (p. 4)",
    url: hb(4),
  },
  {
    key: "medical-marijuana-no-defense",
    quote:
      "The fact that marijuana or other drugs were used for medicinal purposes is not a " +
      "defense for DUI or DWAI.",
    source: HANDBOOK,
    section: "Driving Under the Influence - Drugs and driving (p. 4)",
    url: hb(4),
  },
  {
    key: "medication-labels",
    quote:
      "Drivers must check medication labels for warnings about the medication's effects " +
      "before driving. If the label is missing or unclear, check with your doctor or " +
      "pharmacist about any possible side effects.",
    source: HANDBOOK,
    section: "Driving Under the Influence - Drugs and driving (p. 4)",
    url: hb(4),
  },
  {
    key: "thc-5ng",
    quote:
      "There is a permissible inference that a driver was DUI if the driver's blood " +
      "contained 5 nanograms of THC per milliliter (ng/ml) of blood. There is no THC " +
      "permissible inference level for DWAI.",
    source: HANDBOOK,
    section: "Driving Under the Influence - marijuana (p. 5)",
    url: hb(5),
  },
  {
    key: "polydrug",
    quote:
      "Polydrug impairment is caused by using two or more drugs simultaneously, including " +
      "using alcohol, marijuana, prescription medications, over-the-counter medications or " +
      "any other drugs in any combination. Mixing drugs can increase the substance's effects.",
    source: HANDBOOK,
    section: "Driving Under the Influence - Polydrug Impairment (p. 5)",
    url: hb(5),
  },
  {
    key: "express-consent",
    quote:
      "Colorado has an express consent law, which means when you operate a motor vehicle " +
      "in the Centennial State, you agree to take a chemical test to determine the presence " +
      "of alcohol and/or drugs in your blood.",
    source: HANDBOOK,
    section: "Driving Under the Influence - Express Consent Law (C.R.S. 42-4-1301.1) (p. 5)",
    url: hb(5),
  },
  {
    key: "refusal-penalty",
    quote:
      "If you refuse to take the test or do not comply with being tested, your driver " +
      "license will be revoked for one year and you will be required to install an ignition " +
      "interlock device on any motor vehicle you drive for two years.",
    source: HANDBOOK,
    section: "Driving Under the Influence - Express Consent Law (C.R.S. 42-4-1301.1) (p. 5)",
    url: hb(5),
  },
  {
    key: "interlock-how",
    quote:
      "It requires your breath sample before the engine will start, and you are " +
      "periodically required to provide breath samples while driving. If the device detects " +
      "an elevated alcohol concentration level, the vehicle will not start.",
    source: HANDBOOK,
    section: "Driving Under the Influence - Express Consent Law (C.R.S. 42-4-1301.1) (p. 5)",
    url: hb(5),
  },
  {
    key: "no-plea-bargain",
    quote: "Colorado law does not allow you to plea bargain out of an alcohol or drug related driving offense.",
    source: HANDBOOK,
    section: "Driving Under the Influence (p. 5)",
    url: hb(5),
  },
  // ----------------------------------------------------------- before you drive
  {
    key: "corrective-lens",
    quote:
      "If you have a corrective lens restriction on your license, you need to wear glasses " +
      "or contact lenses while driving.",
    source: HANDBOOK,
    section: "Before You Drive - Vision (p. 5)",
    url: hb(5),
  },
  {
    key: "earphones",
    quote:
      "You may not operate a motor vehicle while wearing earphones. The definition of " +
      "earphones include any device or headset which covers all or a portion of both ears.",
    source: HANDBOOK,
    section: "Before You Drive - Hearing (p. 5)",
    url: hb(5),
  },
  {
    key: "fatigue-two-hours",
    quote:
      "Break long driving periods into two-hour segments. If you become drowsy, pull off " +
      "the road and rest.",
    source: HANDBOOK,
    section: "Before You Drive - Fatigue (p. 5)",
    url: hb(5),
  },
  {
    key: "distractions-leading-cause",
    quote:
      "Distractions are the leading cause of driver error. A distraction is anything that " +
      "takes away your attention, even momentarily, from the task of driving.",
    source: HANDBOOK,
    section: "Before You Drive - Distractions (p. 6)",
    url: hb(6),
  },
  {
    key: "exhaust-fumes",
    quote:
      "Fumes from a leaky exhaust system can cause death in a very short time. Never run " +
      "the motor in your garage or sit in the car with the motor running without opening a " +
      "window.",
    source: HANDBOOK,
    section: "Before You Drive - Vehicle (p. 6)",
    url: hb(6),
  },
  {
    key: "tires-worn",
    quote:
      "Worn or bald tires can increase your stopping distance, make turning more " +
      "difficult, can cause hydroplaning when the road is wet, and increase the chance of " +
      "having a flat tire.",
    source: HANDBOOK,
    section: "Before You Drive - Vehicle (p. 6)",
    url: hb(6),
  },
  {
    key: "head-rests",
    quote: "Head rests: They should be adjusted so the head restraint touches the back of your head.",
    source: HANDBOOK,
    section: "Before You Drive - Vehicle (p. 6)",
    url: hb(6),
  },
  // --------------------------------------------------------------- basic driving
  {
    key: "steering-direction",
    quote:
      "The steering wheel is always turned in the direction you want the vehicle to move, " +
      "whether moving forward or in reverse.",
    source: HANDBOOK,
    section: "Basic Driving - Steering (p. 6)",
    url: hb(6),
  },
  {
    key: "hand-position",
    quote:
      "You have better vehicle control when you place both hands on the outside of the " +
      "steering wheel, on opposite sides, at the 3 and 9 o'clock positions or the 4 and 8 " +
      "o'clock positions.",
    source: HANDBOOK,
    section: "Basic Driving - Hand position (p. 6)",
    url: hb(6),
  },
  {
    key: "backing-check-behind",
    quote:
      "Check behind your vehicle before you get in. Children and small objects cannot be " +
      "seen from the driver's seat.",
    source: HANDBOOK,
    section: "Basic Driving - Backing up (p. 7)",
    url: hb(7),
  },
  {
    key: "backing-look-over-shoulder",
    quote:
      "Grasp the steering wheel at the 12 o'clock position with your left hand. Place your " +
      "right arm on the back of the passenger seat and look directly over your shoulder " +
      "through the rear window.",
    source: HANDBOOK,
    section: "Basic Driving - Backing up (p. 7)",
    url: hb(7),
  },
  // ------------------------------------------------------------------ signals
  {
    key: "obey-persons-directing",
    quote:
      "Traffic control also can be provided by law enforcement, highway personnel, or " +
      "school crossing guards. You must obey directions from these persons.",
    source: HANDBOOK,
    section: "Traffic Controls (p. 7)",
    url: hb(7),
  },
  {
    key: "signal-malfunction-four-way",
    quote:
      "If the traffic signal is not operating or is malfunctioning, treat the intersection " +
      "as a four way stop.",
    source: HANDBOOK,
    section: "Traffic Signals (p. 7)",
    url: hb(7),
  },
  {
    key: "red-right-turn",
    quote:
      "After stopping and yielding to pedestrians and other traffic, and if not prohibited " +
      "by a traffic sign, you may turn right while the light is red.",
    source: HANDBOOK,
    section: "Traffic Signals - Steady red light (p. 7)",
    url: hb(7),
  },
  {
    key: "steady-yellow",
    quote: "Steady yellow light: A red light is about to appear. Stop unless you are already in the intersection.",
    source: HANDBOOK,
    section: "Traffic Signals - Steady yellow light (p. 7)",
    url: hb(7),
  },
  {
    key: "steady-green",
    quote:
      "Steady green light: After yielding to any vehicle or pedestrian within the " +
      "intersection or adjacent crosswalk, you may proceed straight through or turn right " +
      "or left unless a sign prohibits such turns.",
    source: HANDBOOK,
    section: "Traffic Signals - Steady green light (p. 7)",
    url: hb(7),
  },
  {
    key: "red-arrow",
    quote: "Red Arrow: A lighted red arrow means you must stop and may not turn in the direction shown.",
    source: HANDBOOK,
    section: "Traffic Signals - Red Arrow (p. 7)",
    url: hb(7),
  },
  {
    key: "green-arrow",
    quote:
      "A lighted green arrow, by itself or along with a red, green or yellow light means " +
      "you may turn in the direction shown by the arrow.",
    source: HANDBOOK,
    section: "Traffic Signals - Green arrow (p. 7)",
    url: hb(7),
  },
  {
    key: "green-arrow-off",
    quote:
      "If the green arrow goes off, but the circular green is on, you may still turn after " +
      "yielding to through vehicles and pedestrians, unless prohibited by a sign or red arrow.",
    source: HANDBOOK,
    section: "Traffic Signals - Green arrow (p. 7)",
    url: hb(7),
  },
  {
    key: "yellow-arrow",
    quote: "Yellow arrow: A lighted red arrow is about to appear. Stop if you are not already in the intersection.",
    source: HANDBOOK,
    section: "Traffic Signals - Yellow arrow (p. 7)",
    url: hb(7),
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "A flashing yellow arrow means the driver turning left should proceed with caution " +
      "and must yield to oncoming traffic and pedestrians.",
    source: HANDBOOK,
    section: "Traffic Signals - Flashing yellow arrow (p. 7)",
    url: hb(7),
  },
  {
    key: "flashing-red",
    quote:
      "A flashing red light means the same as a STOP sign. Stop; then go only after " +
      "yielding to pedestrians and other traffic.",
    source: HANDBOOK,
    section: "Traffic Signals - Flashing red light (p. 7)",
    url: hb(7),
  },
  {
    key: "flashing-yellow",
    quote: "A flashing yellow light is a warning of a hazard. Slow down and proceed with caution.",
    source: HANDBOOK,
    section: "Traffic Signals - Flashing yellow light (p. 7)",
    url: hb(7),
  },
  {
    key: "hawk-signal",
    quote:
      "HAWK signals are traffic signals that allow pedestrians to cross the road safely. " +
      "HAWK signals operate in a yellow red flashing sequence to alert motorists that " +
      "pedestrians need to cross the road.",
    source: HANDBOOK,
    section: "Traffic Signals - HAWK signals (p. 7)",
    url: hb(7),
  },
  // -------------------------------------------------------------------- signs
  {
    key: "regulatory-signs",
    quote:
      "Regulatory signs: These signs tell you of laws and regulations that apply at a " +
      "location. They are black or red on a white background. Failure to obey these signs " +
      "is a traffic violation.",
    source: HANDBOOK,
    section: "Traffic Signs - Regulatory signs (p. 7)",
    url: hb(7),
  },
  {
    key: "speed-limit-signs",
    quote:
      "Speed limit signs: These signs show the maximum or minimum speed that is allowed. " +
      "The maximum limits are for ideal conditions and you must reduce your speed when " +
      "conditions require it.",
    source: HANDBOOK,
    section: "Traffic Signs - Speed limit signs (p. 7)",
    url: hb(7),
  },
  {
    key: "stop-sign-where",
    quote:
      "You must stop at a clearly marked stop line, but if none, before entering the " +
      "crosswalk on the near side of the intersection, or if none, then at the point nearest " +
      "the intersecting roadway where the driver has a view of approaching traffic.",
    source: HANDBOOK,
    section: "Traffic Signs - Stop signs (p. 7)",
    url: hb(7),
  },
  {
    key: "yield-sign",
    quote:
      "Yield signs: These signs indicate you must slow or stop to yield to all pedestrians " +
      "and any vehicle with right of way.",
    source: HANDBOOK,
    section: "Traffic Signs - Yield signs (p. 7)",
    url: hb(7),
  },
  {
    key: "do-not-enter",
    quote:
      "Do Not Enter/Wrong Way signs: These signs warn and redirect drivers who are heading " +
      "the wrong way on streets or freeway ramps. Do not proceed past one of these signs.",
    source: HANDBOOK,
    section: "Traffic Signs - Do Not Enter/Wrong Way signs (p. 8)",
    url: hb(8),
  },
  {
    key: "warning-signs",
    quote:
      "Warning signs: These signs are yellow or fluorescent green with black symbols, " +
      "school zone, curves, slippery surfaces, merging traffic, or pedestrian-dense areas.",
    source: HANDBOOK,
    section: "Traffic Signs - Warning signs (p. 8)",
    url: hb(8),
  },
  {
    key: "advisory-speed-signs",
    quote:
      "Advisory speed signs: These cautionary signs show the safe speed around curves, " +
      "corners and off-ramps in ideal conditions.",
    source: HANDBOOK,
    section: "Traffic Signs - Advisory speed signs (p. 8)",
    url: hb(8),
  },
  {
    key: "railroad-no-shift",
    quote:
      "Never start to cross the tracks until there is enough room for your vehicle to " +
      "clear the tracks on the other side. Do not shift gears when crossing the railroad " +
      "tracks in case your vehicle stalls.",
    source: HANDBOOK,
    section: "Traffic Signs - Railroad crossings (p. 8)",
    url: hb(8),
  },
  {
    key: "ens-blue-sign",
    quote:
      "These blue signs are at every highway-rail grade crossing and provide the public " +
      "with a telephone number to report problems or emergencies at these railroad locations.",
    source: HANDBOOK,
    section: "Traffic Signs - Railroad emergency notification system (ENS) Signs (p. 8)",
    url: hb(8),
  },
  {
    key: "work-zone-signs",
    quote: "Work zone signs: These signs have an orange background with black letters or symbols.",
    source: HANDBOOK,
    section: "Traffic Signs - Work zone signs (p. 8)",
    url: hb(8),
  },
  {
    key: "guide-signs",
    quote:
      "Guide signs: These signs have a green background and provide directional and " +
      "mileage information to specific destinations.",
    source: HANDBOOK,
    section: "Traffic Signs - Guide signs (p. 8)",
    url: hb(8),
  },
  {
    key: "service-recreation-signs",
    quote:
      "Signs with blue backgrounds provide directions to service facilities. Signs with " +
      "brown backgrounds indicate recreational, historic or cultural areas.",
    source: HANDBOOK,
    section: "Traffic Signs - Service/recreation signs (p. 8)",
    url: hb(8),
  },
  {
    key: "pass-3ft-sign",
    quote:
      "Motorists, when passing or overtaking bicyclists, must allow for clearance of 3 feet " +
      "to avoid sideswiping on all roadways even if a sign is not posted.",
    source: HANDBOOK,
    section: "Traffic Signs - Pass 3 ft min signs (p. 9)",
    url: hb(9),
  },
  {
    key: "slow-moving-vehicle",
    quote:
      "Slow moving vehicle marker: A reflective orange triangle on the rear of a vehicle " +
      "means it is designed to travel at speeds slower than 25 miles per hour.",
    source: HANDBOOK,
    section: "Traffic Signs - Slow moving vehicle marker (p. 9)",
    url: hb(9),
  },
  {
    key: "disabled-parking-crosshatch",
    quote:
      "Crosshatched sections are for van access only and parking is not allowed at any " +
      "time. In order to park in a disabled parking space, the person who owns the disabled " +
      "placard must be entering or exiting the vehicle.",
    source: HANDBOOK,
    section: "Traffic Signs - Disabled parking signs (p. 9)",
    url: hb(9),
  },
  {
    key: "disabled-parking-fine",
    quote:
      "If you park illegally in a designated disabled parking spot without a placard or " +
      "plate, you could be charged with a misdemeanor, and if convicted, subject to a " +
      "$350-$5,000 fine, possible jail time, loss of driving privileges",
    source: HANDBOOK,
    section: "Traffic Signs - Disabled parking signs (p. 9)",
    url: hb(9),
  },
  // ------------------------------------------------------------ pavement marks
  {
    key: "yellow-lines-broken",
    quote: "Yellow lines: Separate traffic moving in opposite directions. Broken yellow line: Passing is permitted.",
    source: HANDBOOK,
    section: "Pavement Markings - Yellow lines (p. 9)",
    url: hb(9),
  },
  {
    key: "solid-and-broken-yellow",
    quote:
      "Solid and broken yellow lines: You may not pass if the solid yellow line is on your " +
      "side. If the broken yellow line is on your side, you may pass if it is safe to do so.",
    source: HANDBOOK,
    section: "Pavement Markings - Yellow lines (p. 9)",
    url: hb(9),
  },
  {
    key: "cross-solid-yellow-driveway",
    quote:
      "You may cross a solid yellow line for a left turn into an alley, private road or " +
      "driveway or to pass a bicyclist with a minimum of three feet of space when such " +
      "movement can be made safely.",
    source: HANDBOOK,
    section: "Pavement Markings - Yellow lines (p. 9)",
    url: hb(9),
  },
  {
    key: "solid-white-line",
    quote: "Solid white line: Requires you to stay within the lane and also marks the shoulder of the roadway.",
    source: HANDBOOK,
    section: "Pavement Markings - White lines (p. 9)",
    url: hb(9),
  },
  {
    key: "green-paint",
    quote: "Green Paint: A lane or area on the roadway designated for bicyclists, and increases visibility of bicyclists.",
    source: HANDBOOK,
    section: "Pavement Markings - White lines (p. 9)",
    url: hb(9),
  },
  {
    key: "crosswalk-stopped-vehicle",
    quote:
      "Whenever you approach a vehicle from the rear that is stopped at a crosswalk, you " +
      "must not pass and must stop behind the vehicle or behind the crosswalk in the " +
      "adjacent lane if a multi-lane roadway.",
    source: HANDBOOK,
    section: "Pavement Markings - Crosswalks (p. 9)",
    url: hb(9),
  },
  // ------------------------------------------------------------ lane controls
  {
    key: "drive-right-half",
    quote:
      "As a general rule, you must drive your vehicle on the right half of the road. Use " +
      "only one lane, do not straddle lanes.",
    source: HANDBOOK,
    section: "Lane Controls (p. 9)",
    url: hb(9),
  },
  {
    key: "bike-lane-no-driving",
    quote:
      "drivers are prohibited from " +
      "driving, idling or parking in or otherwise obstructing a bike lane. A bike lane " +
      "extends through an intersection regardless of whether paint connects the bike lane " +
      "on either side.",
    source: HANDBOOK,
    section: "Lane Controls - Bike lanes (p. 10)",
    url: hb(10),
  },
  {
    key: "hov-diamond",
    quote: "High Occupancy Vehicle (HOV) lanes: These lanes are identified by a white diamond painted on the roadway.",
    source: HANDBOOK,
    section: "Lane Controls - High Occupancy Vehicle (HOV) lanes (p. 10)",
    url: hb(10),
  },
  {
    key: "center-turn-lane",
    quote:
      "It shall not be used for passing or travel by a driver except to make a left turn. " +
      "You may stop in this lane until it is safe to complete the turn.",
    source: HANDBOOK,
    section: "Lane Controls - Two-way left-turn lane (p. 10)",
    url: hb(10),
  },
  {
    key: "center-turn-lane-only",
    quote:
      "When a street has a shared center turn lane, you may not turn left from any other " +
      "lane and you may not drive in this lane.",
    source: HANDBOOK,
    section: "Lane Controls - Two-way left-turn lane (p. 10)",
    url: hb(10),
  },
  {
    key: "unmarked-lane",
    quote:
      "When there are no signs or pavement markings to control the use of lanes, drive just " +
      "to the right of the center of the road. Do not drive on the shoulder of the road.",
    source: HANDBOOK,
    section: "Lane Controls - Unmarked lane (p. 10)",
    url: hb(10),
  },
  {
    key: "roundabout-large-vehicle",
    quote:
      "Before entering the roundabout, Colorado law requires drivers to yield the " +
      "right-of-way to the driver of a truck, bus, emergency vehicle or recreational vehicle " +
      "(large vehicle) when entering, exiting or driving in a roundabout.",
    source: HANDBOOK,
    section: "Lane Controls - Roundabout lane (p. 10)",
    url: hb(10),
  },
  {
    key: "roundabout-yield-left",
    quote:
      "As you approach a roundabout, if no large trucks are present, you must yield to " +
      "approaching traffic on the left. Do not stop completely unless existing traffic " +
      "prevents you from merging.",
    source: HANDBOOK,
    section: "Lane Controls - Roundabout lane (p. 10)",
    url: hb(10),
  },
  {
    key: "reversible-lanes",
    quote: "These lanes are separated by a barrier or marked by double-broken yellow lines.",
    source: HANDBOOK,
    section: "Lane Controls - Reversible lanes (p. 10)",
    url: hb(10),
  },
  // ------------------------------------------------------------- right of way
  {
    key: "row-nobody-has-it",
    quote:
      "The law states who must yield the right-of-way, but it does not give anyone the " +
      "right-of-way, even if your traffic signal is green.",
    source: HANDBOOK,
    section: "Right-of-Way (p. 11)",
    url: hb(11),
  },
  {
    key: "row-pedestrians",
    quote:
      "Pedestrians have the right-of-way at all intersections and crosswalks. You must " +
      "come to a complete stop and let the person pass safely.",
    source: HANDBOOK,
    section: "Right-of-Way - Pedestrians (p. 11)",
    url: hb(11),
  },
  {
    key: "row-bike-lane-turn",
    quote:
      "Drivers must yield the right-of-way to bicyclists in a designated bike lane when " +
      "merging with or crossing a bike lane to turn.",
    source: HANDBOOK,
    section: "Right-of-Way - Bicycles (p. 11)",
    url: hb(11),
  },
  {
    key: "bike-sidewalk-pedestrian",
    quote:
      "Bicyclists riding on a sidewalk or crosswalk have the same rights and " +
      "responsibilities as pedestrians.",
    source: HANDBOOK,
    section: "Right-of-Way - Bicycles (p. 11)",
    url: hb(11),
  },
  {
    key: "four-way-stop",
    quote:
      "When more than one vehicle reaches the intersection at the same " +
      "time, the vehicle on the left must yield the right-of-way and allow the vehicle on " +
      "the right to go first.",
    source: HANDBOOK,
    section: "Right-of-Way - Four-way stop (p. 11)",
    url: hb(11),
  },
  {
    key: "always-avoid-crash",
    quote: "Regardless of who has the right-of-way, you are always responsible for avoiding a crash.",
    source: HANDBOOK,
    section: "Right-of-Way - Four-way stop (p. 11)",
    url: hb(11),
  },
  {
    key: "uncontrolled-intersection",
    quote:
      "When more than one vehicle reaches an uncontrolled intersection at the same time, " +
      "the vehicle on the left must yield the right-of-way to the vehicle on the right and " +
      "allow the vehicle on the right to go first.",
    source: HANDBOOK,
    section: "Right-of-Way - Uncontrolled intersection (p. 11)",
    url: hb(11),
  },
  {
    key: "left-turn-yield-oncoming",
    quote:
      "You must yield to all oncoming traffic, unless you have a green arrow or arrived " +
      "first at a four-way stop.",
    source: HANDBOOK,
    section: "Right-of-Way - Turning left (p. 11)",
    url: hb(11),
  },
  {
    key: "lane-change-yield",
    quote: "Do not change lanes if another vehicle must slow down for you.",
    source: HANDBOOK,
    section: "Right-of-Way - Changing lanes and passing (p. 11)",
    url: hb(11),
  },
  {
    key: "reversing-yield",
    quote: "Reversing: You must yield the right-of-way to all vehicles close enough to be a hazard.",
    source: HANDBOOK,
    section: "Right-of-Way - Reversing (p. 11)",
    url: hb(11),
  },
  {
    key: "mountain-road-downhill-yields",
    quote:
      "When vehicles meet on a steep, narrow road that is not wide enough for two vehicles, " +
      "the vehicle going downhill must yield the right-of-way by backing up to a wider place " +
      "or by stopping, then leaving enough space for the vehicle going uphill, except where " +
      "it is more practicable for the vehicle going uphill to return to a wider space or " +
      "turnout.",
    source: HANDBOOK,
    section: "Right-of-Way - Narrow mountain road (p. 11)",
    url: hb(11),
  },
  {
    key: "emergency-vehicle-pull-right",
    quote:
      "Where possible, you must pull to the right edge of the road and come to a stop. If " +
      "you are in an intersection, drive through the intersection, then pull over.",
    source: HANDBOOK,
    section: "Right-of-Way - Emergency vehicles (p. 11)",
    url: hb(11),
  },
  {
    key: "emergency-stopped-slow-down",
    quote:
      "Unless directed otherwise by emergency personnel or conditions prohibit the lane " +
      "change, you should slow down to: 25 MPH if the posted speed limit is 45 MPH or less " +
      "Or 20 MPH under the posted speed limit if the posted speed limit is above 45 MPH",
    source: HANDBOOK,
    section: "Right-of-Way - Emergency vehicles (p. 11)",
    url: hb(11),
  },
  {
    key: "maintenance-vehicles",
    quote:
      "You must yield right of way to service vehicles and maintenance equipment when in " +
      "use and flashing yellow and blue warning lights.",
    source: HANDBOOK,
    section: "Right-of-Way - Maintenance vehicles (p. 11)",
    url: hb(11),
  },
  {
    key: "snow-plow-formation",
    quote:
      "It is illegal to pass an authorized snow plow when it is working in a formation in " +
      "which the plows are staggered diagonally.",
    source: HANDBOOK,
    section: "Right-of-Way - Snow plows (p. 11)",
    url: hb(11),
  },
  {
    key: "school-bus-20-feet",
    quote:
      "You must stop your vehicle at least 20 feet before reaching a school bus that is " +
      "stopped with its red lights flashing, and you must stop until the lights stop flashing.",
    source: HANDBOOK,
    section: "Right-of-Way - School bus (p. 11)",
    url: hb(11),
  },
  {
    key: "transit-bus-yield",
    quote:
      "You must yield right-of-way to a transit bus if it is signaling to enter a traffic " +
      "lane and the yield sign on the rear of the bus is illuminated.",
    source: HANDBOOK,
    section: "Right-of-Way - Transit buses (p. 11)",
    url: hb(11),
  },
  // -------------------------------------------------------------------- speed
  {
    key: "speed-severity",
    quote: "Speed is the greatest factor influencing the severity of a crash.",
    source: HANDBOOK,
    section: "Speed (p. 12)",
    url: hb(12),
  },
  {
    key: "minimum-speed",
    quote:
      "Driving slower than the minimum speed limit is a traffic violation, unless due to " +
      "road or weather conditions.",
    source: HANDBOOK,
    section: "Speed - Limits (p. 12)",
    url: hb(12),
  },
  {
    key: "speed-defaults-low",
    quote:
      "Unless otherwise posted, Colorado speed limits are as follows: 20 mph on narrow, " +
      "winding mountain highways and blind curves 25 mph in any business district 30 mph in " +
      "any residence district 40 mph on open mountain highways",
    source: HANDBOOK,
    section: "Speed - Reduced speed zones (p. 12)",
    url: hb(12),
  },
  {
    key: "speed-defaults-high",
    quote:
      "55 mph on urban interstate and highways 65-75 mph on designated rural interstate " +
      "and highways City or towns may by ordinance adopt lower speed limits in their " +
      "jurisdictions.",
    source: HANDBOOK,
    section: "Speed - Reduced speed zones (p. 12)",
    url: hb(12),
  },
  {
    key: "stopping-55-200-feet",
    quote:
      "According to the National Safety Council, a lightweight passenger car traveling 55 " +
      "mph can stop in about 200 feet.",
    source: HANDBOOK,
    section: "Speed - Stopping distance (p. 12)",
    url: hb(12),
  },
  // ------------------------------------------------------------------ turning
  {
    key: "signal-100-200-feet",
    quote:
      "In urban areas, you must signal continuously for 100 feet before making a turn or " +
      "lane change. On four lane highways where the posted speed limit is faster than 40 " +
      "mph, you must signal for 200 feet before making a turn or lane change.",
    source: HANDBOOK,
    section: "Turning - Signaling (p. 12)",
    url: hb(12),
  },
  {
    key: "hand-signal-end",
    quote:
      "End your hand signal before starting to turn so that you can complete the turn with " +
      "both hands on the wheel.",
    source: HANDBOOK,
    section: "Turning - Signaling (p. 12)",
    url: hb(12),
  },
  {
    key: "turn-from-proper-lane",
    quote:
      "When turning right you should turn from the right most part of your lane and as " +
      "close to the curb as possible. When turning left you should be in the left side of " +
      "your lane.",
    source: HANDBOOK,
    section: "Turning - Turning from the proper lane (p. 12)",
    url: hb(12),
  },
  {
    key: "left-turn-wheels-straight",
    quote:
      "Never turn the front wheels toward the left while you are waiting to turn. If you " +
      "are rear ended, you would be pushed into oncoming traffic.",
    source: HANDBOOK,
    section: "Turning - Left turns (p. 13)",
    url: hb(13),
  },
  {
    key: "u-turns",
    quote:
      "U-turns are forbidden unless they can be made without endangering other motorists " +
      "and their passengers, and are not allowed in locations marked by No U-turn signs.",
    source: HANDBOOK,
    section: "Turning - U-turns (p. 13)",
    url: hb(13),
  },
  // ------------------------------------------------------------------ parking
  {
    key: "parking-gear-and-key",
    quote:
      "If it's a standard transmission, leave the vehicle in low gear when headed uphill " +
      "and in reverse gear when headed downhill. Set the emergency brake and remember to " +
      "remove the ignition key when leaving the vehicle.",
    source: HANDBOOK,
    section: "Parking (p. 13)",
    url: hb(13),
  },
  {
    key: "no-parking-places",
    quote: "On a crosswalk, sidewalk, bridge, elevated structure, railroad tracks or any controlled access highway",
    source: HANDBOOK,
    section: "Parking (p. 13)",
    url: hb(13),
  },
  {
    key: "no-parking-30-15-feet",
    quote: "Within 30 feet of a traffic signal, stop sign, railroad crossing or within 15 feet of a fire hydrant",
    source: HANDBOOK,
    section: "Parking (p. 13)",
    url: hb(13),
  },
  {
    key: "parallel-12-inches",
    quote:
      "Where parallel parking is permitted, your vehicle must be within 12 inches of the " +
      "curb or as close as possible to the outside edge of the shoulder, so traffic will not " +
      "be blocked or slowed.",
    source: HANDBOOK,
    section: "Parking (p. 14)",
    url: hb(14),
  },
  {
    key: "parking-downhill-curb",
    quote: "When you stop your vehicle while headed downhill, turn your front wheels toward the curb.",
    source: HANDBOOK,
    section: "Parking - Downhill (p. 14)",
    url: hb(14),
  },
  {
    key: "parking-uphill-curb",
    quote:
      "When headed uphill where there is a curb, turn the front wheels away from the curb " +
      "and let your vehicle roll backwards slowly until the rear part of the front wheel " +
      "rests against the curb using it as a block.",
    source: HANDBOOK,
    section: "Parking - Uphill (p. 14)",
    url: hb(14),
  },
  {
    key: "parking-no-curb",
    quote:
      "When headed uphill without a curb, turn your front wheels to the right so that if " +
      "your vehicle moves, it will roll off the highway, not into the roadway. When headed " +
      "downhill with no curb, also turn your wheels to the right.",
    source: HANDBOOK,
    section: "Parking - No curb (p. 14)",
    url: hb(14),
  },
  // ------------------------------------------------------------------ freeway
  {
    key: "freeway-merge-solid-line",
    quote:
      "Do not merge into traffic until the solid white line has ended. Do not stop in the " +
      "acceleration lane unless absolutely necessary. Remember, you must yield the " +
      "right-of-way to freeway traffic.",
    source: HANDBOOK,
    section: "Freeway Driving - Entering the freeway (p. 14)",
    url: hb(14),
  },
  {
    key: "metered-ramp",
    quote: "On metered ramps, you must stop and wait to be released on a green light to enter the freeway.",
    source: HANDBOOK,
    section: "Freeway Driving - Entering the freeway (p. 14)",
    url: hb(14),
  },
  {
    key: "freeway-right-lane-slower",
    quote: "Drive in the rightmost lane when you are driving slower than the normal speed.",
    source: HANDBOOK,
    section: "Freeway Driving - Freeway driving (p. 14)",
    url: hb(14),
  },
  {
    key: "freeway-median",
    quote: "Do not drive across, over or within any median or island.",
    source: HANDBOOK,
    section: "Freeway Driving - Freeway driving (p. 14)",
    url: hb(14),
  },
  {
    key: "exit-signal-200-feet",
    quote:
      "Activate your turn signal 200 feet before the beginning of the deceleration lane. " +
      "Maintain your speed until you enter the deceleration lane, then slow down to the " +
      "speed advised for the exit ramp.",
    source: HANDBOOK,
    section: "Freeway Driving - Leaving the freeway (p. 15)",
    url: hb(15),
  },
  // ------------------------------------------------------ lane changes, passing
  {
    key: "lane-change-signal-3s-200ft",
    quote: "Activate your turn signal. Leave it active for a minimum of 3 seconds or 200 feet before leaving your lane.",
    source: HANDBOOK,
    section: "Changing Lanes (p. 15)",
    url: hb(15),
  },
  {
    key: "blind-spot",
    quote:
      "Look over your shoulder to check your blind spot, which is the area slightly to the " +
      "rear and side of your vehicle that you cannot see in your mirrors.",
    source: HANDBOOK,
    section: "Changing Lanes (p. 15)",
    url: hb(15),
  },
  {
    key: "pass-on-right-when",
    quote:
      "You are only allowed to pass on the right on one way streets and on roadways with " +
      "two or more lanes of travel in each direction. You are not allowed to pass another " +
      "vehicle by driving off of the pavement or on the shoulder of a roadway.",
    source: HANDBOOK,
    section: "Passing (p. 15)",
    url: hb(15),
  },
  {
    key: "return-both-headlights",
    quote:
      "When you can see both headlights of the vehicle you passed in the rearview mirror, " +
      "change one lane to get back into your previous lane.",
    source: HANDBOOK,
    section: "Passing (p. 15)",
    url: hb(15),
  },
  {
    key: "pass-bicyclist-3-feet",
    quote:
      "If passing a bicyclist, you must have a minimum of three feet of space between the " +
      "outermost part of your vehicle, including any projections such as mirrors or " +
      "trailers, and the bicyclist.",
    source: HANDBOOK,
    section: "Passing (p. 15)",
    url: hb(15),
  },
  {
    key: "pass-one-at-a-time",
    quote:
      "Do not count on being able to pass several vehicles at once. To be safe, only pass " +
      "one vehicle at a time.",
    source: HANDBOOK,
    section: "Passing (p. 15)",
    url: hb(15),
  },
  {
    key: "no-pass-200-feet-oncoming",
    quote:
      "If you cannot safely return to the right-hand side before coming within 200 feet of " +
      "an oncoming vehicle, including a bicyclist in the oncoming lane or shoulder.",
    source: HANDBOOK,
    section: "Passing - Do not pass (p. 15)",
    url: hb(15),
  },
  {
    key: "no-pass-100-feet",
    quote:
      "Within 100 feet of an intersection or railroad crossing. Within 100 feet of any " +
      "bridge, viaduct or tunnel when your view is obstructed.",
    source: HANDBOOK,
    section: "Passing - Do not pass (p. 16)",
    url: hb(16),
  },
  {
    key: "illegal-passing-list",
    quote:
      "Please note, the following behaviors are illegal when passing: Pass in any marked " +
      "no-passing zones. Exceed the posted speed limit when passing. Pass a school bus with " +
      "flashing red lights and its stop arm extended.",
    source: HANDBOOK,
    section: "Passing (p. 16)",
    url: hb(16),
  },
  // ------------------------------------------------ hills, night, weather, snow
  {
    key: "curve-slow-before",
    quote:
      "Always slow down before entering a curve. If you go through a curve too fast, your " +
      "tires will not be able to grip the road and your vehicle will skid. Begin your " +
      "acceleration only after reaching the middle of the curve.",
    source: HANDBOOK,
    section: "Hills and Curves (p. 16)",
    url: hb(16),
  },
  {
    key: "headlights-1000-feet",
    quote:
      "Colorado law requires you to drive with your headlights on from sunset to sunrise " +
      "or when visibility is less than 1,000 feet.",
    source: HANDBOOK,
    section: "Night Driving (p. 16)",
    url: hb(16),
  },
  {
    key: "parking-lights-only",
    quote:
      "Any vehicle parked alongside the roadway, whether attended or not, must have parking " +
      "lights turned on from sunset to sunrise or whenever visibility is less than 1,000 " +
      "feet. Do not drive with only your parking lights on.",
    source: HANDBOOK,
    section: "Night Driving (p. 16)",
    url: hb(16),
  },
  {
    key: "dim-500-feet",
    quote:
      "If you are driving with your high beam lights on or your low beam lights with fog " +
      "lights on, you must dim them before coming within 500 feet of any oncoming vehicle " +
      "so the oncoming driver is not blinded by the glare.",
    source: HANDBOOK,
    section: "Night Driving - Tips for driving at night (p. 16)",
    url: hb(16),
  },
  {
    key: "dim-following-200-feet",
    quote:
      "When following another vehicle, you must use your low beam lights, with your fog " +
      "lights off, if you are within 200 feet of the vehicle ahead of you.",
    source: HANDBOOK,
    section: "Night Driving - Tips for driving at night (p. 16)",
    url: hb(16),
  },
  {
    key: "glare-edge-lines",
    quote:
      "Never look directly into an approaching car's headlights. As the vehicle draws near, " +
      "drop your sight below the glare and use the painted edge lines to guide your vehicle.",
    source: HANDBOOK,
    section: "Night Driving - Tips for driving at night (p. 16)",
    url: hb(16),
  },
  {
    key: "fog-low-beams",
    quote:
      "Use your low beam lights and/or fog lights when driving through fog at night for " +
      "better visibility. Using high beam lights in these conditions is like shining your " +
      "lights on a mirror.",
    source: HANDBOOK,
    section: "Night Driving - Tips for driving at night (p. 16)",
    url: hb(16),
  },
  {
    key: "weather-two-actions",
    quote:
      "In weather conditions such as rain, fog, ice, high winds and dust, the two most " +
      "important actions you can take are to slow your speed and increase your following " +
      "distance.",
    source: HANDBOOK,
    section: "Weather (p. 16)",
    url: hb(16),
  },
  {
    key: "no-cruise-control-wet",
    quote: "If the highway is wet or icy, do not use cruise control.",
    source: HANDBOOK,
    section: "Weather (p. 16)",
    url: hb(16),
  },
  {
    key: "flooded-road",
    quote:
      "Do not drive through large bodies of standing water on the road. If you see a " +
      "flooded roadway, find another route to get to your destination.",
    source: HANDBOOK,
    section: "Weather (p. 16)",
    url: hb(16),
  },
  {
    key: "hydroplaning-response",
    quote:
      "Take your foot off the gas pedal to allow the vehicle to slow down. Slowly begin " +
      "steering in the direction you are hydroplaning until you have control.",
    source: HANDBOOK,
    section: "Weather - hydroplaning (p. 16)",
    url: hb(16),
  },
  {
    key: "ice-most-hazardous-melting",
    quote: "Streets and highways covered with snow, snowpack or ice are extremely hazardous.",
    source: HANDBOOK,
    section: "Snow and Ice (p. 16)",
    url: hb(16),
  },
  {
    key: "icy-spots-skid",
    quote:
      "Overpasses, bridges, shaded areas and snow packed portions of the road can be icy " +
      "even when other pavement is not. If you lose traction take your foot off both the " +
      "brake and the accelerator pedal and then turn the front wheels in the direction you " +
      "want the car to go.",
    source: HANDBOOK,
    section: "Snow and Ice (p. 17)",
    url: hb(17),
  },
  {
    key: "four-wheel-drive-stopping",
    quote:
      "Vehicles with 4-wheel drive have increased traction, but they cannot stop any sooner " +
      "than a conventional car.",
    source: HANDBOOK,
    section: "Seasonal Driving (p. 17)",
    url: hb(17),
  },
  {
    key: "threshold-braking",
    quote:
      "If you don't have anti-lock, use threshold braking when skidding or in slippery " +
      "conditions. Apply brake pressure to a point just short of locking up the brakes.",
    source: HANDBOOK,
    section: "Seasonal Driving (p. 17)",
    url: hb(17),
  },
  {
    key: "mountain-lower-gears",
    quote: "Shift to lower gears to control speeds when driving down steep hills or mountains.",
    source: HANDBOOK,
    section: "Mountain Driving (p. 17)",
    url: hb(17),
  },
  {
    key: "rural-most-dangerous",
    quote:
      "Rural highways are the most dangerous roads and have the highest fatality rate per " +
      "mile driven of any roads in the U.S.",
    source: HANDBOOK,
    section: "Rural Driving (p. 17)",
    url: hb(17),
  },
  {
    key: "work-zone-rear-end",
    quote:
      "Watch the vehicle in front of you - most work zone crashes are rear-end collisions " +
      "due to an inattentive driver.",
    source: HANDBOOK,
    section: "Construction Zones (p. 18)",
    url: hb(18),
  },
  {
    key: "work-zone-fines-doubled",
    quote: "Like school zones, the fines are doubled in work zones.",
    source: HANDBOOK,
    section: "Construction Zones (p. 18)",
    url: hb(18),
  },
  // --------------------------------------------------------- safe driving tips
  {
    key: "cell-phone-hands-free",
    quote:
      "Colorado law prohibits drivers from using a mobile device while driving, unless it " +
      "is to contact law enforcement, the fire department, if it is an emergency or they are " +
      "doing so with the use of a hands-free accessory.",
    source: HANDBOOK,
    section: "Safe Driving Tips - Using a cell phone while driving (p. 18)",
    url: hb(18),
  },
  {
    key: "scan-left-right-left",
    quote:
      "Always look left, right and then left again when turning, driving through or " +
      "entering an intersection.",
    source: HANDBOOK,
    section: "Safe Driving Tips - Scanning (p. 18)",
    url: hb(18),
  },
  {
    key: "look-ahead-10-seconds",
    quote:
      "In order to avoid last-minute braking or the need to turn abruptly, you should look " +
      "down the road at least 10 seconds ahead of your vehicle (city - one block, open road " +
      "- half a mile).",
    source: HANDBOOK,
    section: "Safe Driving Tips - Look ahead (p. 18)",
    url: hb(18),
  },
  {
    key: "look-behind-5-8-seconds",
    quote: "You must check traffic behind you in your rear view mirror every 5 to 8 seconds.",
    source: HANDBOOK,
    section: "Safe Driving Tips - Look behind (p. 18)",
    url: hb(18),
  },
  {
    key: "three-second-rule",
    quote:
      "Under normal conditions, use the three-second rule to gauge how much space you " +
      "should leave between your vehicle and the vehicle in front of you.",
    source: HANDBOOK,
    section: "Safe Driving Tips - Three-second rule (p. 18)",
    url: hb(18),
  },
  {
    key: "zipper-merge",
    quote:
      "When there is a lane closure ahead, drivers should continue to drive in both lanes " +
      "equally. Just before the lane ends, cars should take turns filling in the open lane " +
      "carefully and resume full speed.",
    source: HANDBOOK,
    section: "Safe Driving Tips - Zipper Merge (p. 19)",
    url: hb(19),
  },
  {
    key: "traffic-stop-hands",
    quote: "Keep your hands on the steering wheel or in a visible location so they are easily observable.",
    source: HANDBOOK,
    section: "Safe Driving Tips - What to Do and Expect When Pulled Over (p. 19)",
    url: hb(19),
  },
  {
    key: "traffic-stop-weapon",
    quote:
      "Let the officer know if you have a weapon in the vehicle upon first contact, but do " +
      "not reach for it or attempt to hand it to the officer.",
    source: HANDBOOK,
    section: "Safe Driving Tips - What to Do and Expect When Pulled Over (p. 19)",
    url: hb(19),
  },
  {
    key: "ticket-signature",
    quote:
      "Your acceptance and signature on a traffic ticket is not an admission of guilt. " +
      "However, the refusal to sign a traffic ticket may result in your arrest.",
    source: HANDBOOK,
    section: "Safe Driving Tips - What to Do and Expect When Pulled Over (p. 19)",
    url: hb(19),
  },
  // --------------------------------------------------------- sharing the road
  {
    key: "lane-filtering-15-mph",
    quote:
      "An operator of a two-wheeled motorcycle can pass other motor vehicles in the same " +
      "lane as long as the other vehicles are stopped, motor vehicles in lanes next to the " +
      "lane occupied by the two-wheeled motorcycle are stopped, and there is enough room for " +
      "the two-wheeled motorcycle to pass safely at a speed no greater than 15 miles per hour.",
    source: HANDBOOK,
    section: "Sharing the Road - Motorcycles (p. 19)",
    url: hb(19),
  },
  {
    key: "stop-bars-trucks",
    quote:
      "Stay behind white-painted stop bars at stop signs and traffic lights because many " +
      "are carefully measured to give trucks the room they need for turns.",
    source: HANDBOOK,
    section: "Sharing the Road - Large trucks and buses (p. 20)",
    url: hb(20),
  },
  {
    key: "no-zones",
    quote:
      "Trucks and buses have blind spots called \"No Zones,\" which are areas around " +
      "trucks/buses where cars disappear into blind spots or are so close that they restrict " +
      "the truck or bus driver's ability to stop or maneuver safely.",
    source: HANDBOOK,
    section: "Sharing the Road - Large trucks and buses (p. 20)",
    url: hb(20),
  },
  {
    key: "truck-wide-turns",
    quote:
      "Because of their size, trucks and buses often need to move to the left lane to make " +
      "right turns. Cutting in between the truck or bus and the curb or shoulder increases " +
      "the possibility of a collision.",
    source: HANDBOOK,
    section: "Sharing the Road - Large trucks and buses (p. 20)",
    url: hb(20),
  },
  {
    key: "runaway-ramp",
    quote: "Never chain up, change a tire or park on the ramp or the entrance -- it's both illegal and unsafe.",
    source: HANDBOOK,
    section: "Sharing the Road - Runaway truck ramps (p. 20)",
    url: hb(20),
  },
  {
    key: "bus-row-leaving-stop",
    quote: "Buses have the right-of-way when leaving a drop-off location and merging into traffic.",
    source: HANDBOOK,
    section: "Sharing the Road - Bus-related tips (p. 20)",
    url: hb(20),
  },
  {
    key: "school-bus-yellow-lights",
    quote:
      "When a school bus is about to stop and load or unload children, the bus driver " +
      "activates amber warning lights. The yellow warning lights will stay on until the bus " +
      "door opens.",
    source: HANDBOOK,
    section: "Sharing the Road - School Buses (p. 20)",
    url: hb(20),
  },
  {
    key: "school-bus-red-door",
    quote: "When the bus driver opens the bus door, the red STOP lights and STOP arm activates.",
    source: HANDBOOK,
    section: "Sharing the Road - School Buses (p. 20)",
    url: hb(20),
  },
  {
    key: "school-bus-divided-highway",
    quote:
      "If you are traveling on a divided highway that has four or more lanes with a median " +
      "separating the traffic, only the vehicles traveling in both lanes behind the school " +
      "bus must stop, and not the traffic traveling in the opposite direction.",
    source: HANDBOOK,
    section: "Sharing the Road - School Buses (p. 20)",
    url: hb(20),
  },
  {
    key: "school-bus-four-lane-no-median",
    quote:
      "If you are traveling on a two-lane roadway, traffic in both directions are required " +
      "to stop. If you are traveling on a four-lane road without a median, traffic in both " +
      "directions must stop.",
    source: HANDBOOK,
    section: "Sharing the Road - School Buses (p. 20)",
    url: hb(20),
  },
  // ----------------------------------------------------------------- railroad
  {
    key: "railroad-stalled",
    quote:
      "If your vehicle stalls on a crossing, get everyone out and immediately move as far " +
      "away as possible, even if you do not see a train approaching.",
    source: HANDBOOK,
    section: "Railroad Crossing (p. 21)",
    url: hb(21),
  },
  {
    key: "train-one-mile",
    quote: "The average freight train traveling at 55 mph requires about one mile to stop.",
    source: HANDBOOK,
    section: "Railroad Crossing (p. 21)",
    url: hb(21),
  },
  {
    key: "railroad-round-sign",
    quote:
      "Advance warning signs: A railroad crossing is ahead. The warning sign is at a " +
      "sufficient distance to allow you to stop (if necessary) before reaching the " +
      "crossing. It is the only round traffic sign.",
    source: HANDBOOK,
    section: "Railroad Crossing - Advance warning signs (p. 21)",
    url: hb(21),
  },
  {
    key: "railroad-10-feet",
    quote:
      "Always stay behind the painted stop line while waiting for a passing train. If no " +
      "line is visible, you must be at least 10 feet from the tracks. Trains overhang the " +
      "tracks by 3 feet.",
    source: HANDBOOK,
    section: "Railroad Crossing - Pavement markings (p. 21)",
    url: hb(21),
  },
  {
    key: "quiet-zone",
    quote:
      "Crossings in designated quiet zones will have a \"No Train Horn\" sign posted below " +
      "the Advance Warning signs. Train horns do not blow at these crossings.",
    source: HANDBOOK,
    section: "Railroad Crossing - Quiet Zone signs (p. 21)",
    url: hb(21),
  },
  {
    key: "crossbuck-yield",
    quote:
      "Crossbuck signs: These signs should be treated the same as a yield sign. If there is " +
      "more than one track, a sign below the Crossbuck indicates the number of tracks at " +
      "this crossing.",
    source: HANDBOOK,
    section: "Railroad Crossing - Crossbuck signs (p. 21)",
    url: hb(21),
  },
  {
    key: "hazmat-trucks-stop",
    quote:
      "Commercial buses and trucks carrying hazardous materials must stop at most railroad " +
      "crossings. Be prepared to stop if you are following one of these vehicles approaching " +
      "a crossing.",
    source: HANDBOOK,
    section: "Railroad Crossing (p. 21)",
    url: hb(21),
  },
  {
    key: "gates-down-road-closed",
    quote:
      "Do not cross until the gates are raised and the lights have stopped flashing. While " +
      "the gates are down, the road is closed.",
    source: HANDBOOK,
    section: "Railroad Crossing - Gates (p. 21)",
    url: hb(21),
  },
  {
    key: "light-rail-never-turn-in-front",
    quote: "Each light rail car weighs up to 40 tons and can't stop quickly.",
    source: HANDBOOK,
    section: "Light Rail - Driver safety tips (p. 21)",
    url: hb(21),
  },
  {
    key: "light-rail-gates",
    quote:
      "Never drive around traffic gates, even if an LRV has just passed. Another vehicle " +
      "might be coming from the other direction.",
    source: HANDBOOK,
    section: "Light Rail - Driver safety tips (p. 22)",
    url: hb(22),
  },
  // ---------------------------------------------------------------- bicyclists
  {
    key: "bikes-are-vehicles",
    quote:
      "Bicycles are considered vehicles on the roadway. People on bikes have many of the " +
      "same rights, privileges and responsibilities as motorists, and they are generally " +
      "required to follow the same rules of the road",
    source: HANDBOOK,
    section: "Bicyclists (p. 22)",
    url: hb(22),
  },
  {
    key: "bike-center-of-lane",
    quote:
      "Bicyclists may choose to ride in the center of the travel lane on narrow roads or to " +
      "avoid obstacles such as the door zone of parked cars, broken glass or drainage grates.",
    source: HANDBOOK,
    section: "Bicyclists - Colorado laws regarding motorists and bicyclists (p. 22)",
    url: hb(22),
  },
  {
    key: "bike-3-feet-double-yellow",
    quote:
      "It is legal to cross a double yellow line with no oncoming traffic if necessary to " +
      "provide a minimum of three feet of passing distance. If you are unable to give three " +
      "feet, slow down and remain behind the bicyclist until it is safe to pass.",
    source: HANDBOOK,
    section: "Bicyclists - Colorado laws regarding motorists and bicyclists (p. 22)",
    url: hb(22),
  },
  {
    key: "bike-side-by-side",
    quote:
      "Bicyclists may ride side-by-side if they are not impeding the normal and reasonable " +
      "movement of traffic.",
    source: HANDBOOK,
    section: "Bicyclists - Colorado laws regarding motorists and bicyclists (p. 22)",
    url: hb(22),
  },
  {
    key: "bike-one-way-either-side",
    quote:
      "On a multi-lane, one-way street, know that a bicyclist can ride on the right or " +
      "left side of the roadway.",
    source: HANDBOOK,
    section: "Bicyclists - Colorado laws regarding motorists and bicyclists (p. 23)",
    url: hb(23),
  },
  {
    key: "bike-stop-as-yield",
    quote:
      "A new law was passed in 2022 which states when an intersection is clear and a " +
      "bicyclist already has the right-of-way, bicyclists ages 15 and older may now treat " +
      "stop signs as yield signs and treat stop lights as stop signs.",
    source: HANDBOOK,
    section: "Bicyclists - Colorado laws regarding motorists and bicyclists (p. 23)",
    url: hb(23),
  },
  {
    key: "dutch-reach",
    quote:
      "Use your hand closest to the center of the vehicle to open your door, a behavior " +
      "commonly known as the \"Dutch Reach.\"",
    source: HANDBOOK,
    section: "Bicyclists - Additional practices (p. 23)",
    url: hb(23),
  },
  {
    key: "horn-near-bicyclists",
    quote:
      "Avoid sounding your horn close to bicyclists unless there is an immediate risk of a " +
      "crash. Using your horn may startle a bicyclist and cause them to crash.",
    source: HANDBOOK,
    section: "Bicyclists - Additional practices (p. 23)",
    url: hb(23),
  },
  {
    key: "bike-hand-signals",
    quote:
      "For a right turn, extend the right arm straight out or left arm upward at a right " +
      "angle. For a left turn, extend the left arm directly out to the left.",
    source: HANDBOOK,
    section: "Bicyclists - Hand signals for bicyclists (p. 23)",
    url: hb(23),
  },
  {
    key: "bike-stop-signal",
    quote: "If slowing or stopping, drop the left arm down at the elbow.",
    source: HANDBOOK,
    section: "Bicyclists - Hand signals for bicyclists (p. 23)",
    url: hb(23),
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Motorcyclists are entitled to the same full lane width as other vehicles. " +
      "Motorcyclists frequently move around in their lane so they can see, be seen and " +
      "avoid road hazards.",
    source: HANDBOOK,
    section: "Motorcycles (p. 23)",
    url: hb(23),
  },
  // -------------------------------------------------------------- pedestrians
  {
    key: "pedestrians-unmarked-crosswalk",
    quote:
      "Pedestrians have the right-of-way at all intersections and crosswalks, even if the " +
      "lines are not marked or painted. Drivers must yield or come to a complete stop to let " +
      "pedestrians pass safely.",
    source: HANDBOOK,
    section: "Pedestrians (p. 24)",
    url: hb(24),
  },
  {
    key: "no-stop-on-crosswalk",
    quote: "Do not stop with any portion of your vehicle covering the crosswalk area.",
    source: HANDBOOK,
    section: "Pedestrians (p. 24)",
    url: hb(24),
  },
  // ------------------------------------------------------ careless / reckless
  {
    key: "texting-misdemeanor",
    quote:
      "If you drive carelessly because you were texting, or any manual use of a mobile " +
      "device, you could be fined or charged with a misdemeanor.",
    source: HANDBOOK,
    section: "Careless/Reckless Driving - Distracted Driving (p. 24)",
    url: hb(24),
  },
  {
    key: "reckless-driving-definition",
    quote:
      "Reckless driving is operating a vehicle in such a way that puts either people or " +
      "property in danger, whether intentional or not.",
    source: HANDBOOK,
    section: "Careless/Reckless Driving - Reckless driving (p. 25)",
    url: hb(25),
  },
  {
    key: "reckless-eight-points",
    quote:
      "If a law enforcement officer notes your actions as endangering another person or " +
      "property (including the other motorist's vehicle) you can be charged under " +
      "Colorado's reckless driving statute and if convicted, up to eight points can be " +
      "assessed against your driving record.",
    source: HANDBOOK,
    section: "Careless/Reckless Driving - Reckless driving (p. 25)",
    url: hb(25),
  },
  {
    key: "aggressive-driver-avoid",
    quote:
      "To protect yourself from an aggressive driver, don't engage with that driver. Avoid " +
      "eye contact and don't attempt to match an aggressive act.",
    source: HANDBOOK,
    section: "Careless/Reckless Driving - Protecting yourself from aggressive drivers (p. 25)",
    url: hb(25),
  },
  {
    key: "csp-277",
    quote: "Dial *CSP (*277) to report aggressive drivers.",
    source: HANDBOOK,
    section: "Careless/Reckless Driving - Reporting aggressive or impaired drivers (p. 25)",
    url: hb(25),
  },
  // -------------------------------------------------------------- emergencies
  {
    key: "collision-three-options",
    quote: "To avoid a collision, drivers have three options: Slow down or stop Turn Speed up",
    source: HANDBOOK,
    section: "Emergencies - Avoiding collisions (p. 25)",
    url: hb(25),
  },
  {
    key: "abs-hard-pressure",
    quote:
      "With ABS: Apply the brakes with hard, firm pressure. You might feel the brake pedal " +
      "pushing back when the ABS is working. Do not let up on the brake pedal.",
    source: HANDBOOK,
    section: "Emergencies - Stopping quickly (p. 25)",
    url: hb(25),
  },
  {
    key: "turn-quicker-than-stop",
    quote: "In most cases, you can turn the vehicle quicker than you can stop it.",
    source: HANDBOOK,
    section: "Emergencies - Turning quickly (p. 25)",
    url: hb(25),
  },
  {
    key: "run-off-road-not-head-on",
    quote:
      "Another consideration is that generally it is better to run off the road than to " +
      "crash head-on into another vehicle.",
    source: HANDBOOK,
    section: "Emergencies - Turning quickly (p. 26)",
    url: hb(26),
  },
  {
    key: "animals-dusk-dawn",
    quote:
      "Always stay alert for animals in or near the roadway, particularly in rural and " +
      "mountainous regions and between dusk and dawn when approximately 90% of crashes with " +
      "deer and elk occur.",
    source: HANDBOOK,
    section: "Emergencies - Animals (p. 26)",
    url: hb(26),
  },
  {
    key: "animals-hit-rather-than-swerve",
    quote:
      "Regretfully, the safest alternative for passengers may be hitting the animal. " +
      "Concentrate on retaining control of the vehicle before, during, and after the " +
      "collision with the animal.",
    source: HANDBOOK,
    section: "Emergencies - Animals (p. 26)",
    url: hb(26),
  },
  {
    key: "brake-failure",
    quote:
      "Brake failure: Take your foot off the accelerator. Pump the brake pedal several " +
      "times. This will often build up enough brake pressure to allow you to stop. If that " +
      "does not work, use the parking brake.",
    source: HANDBOOK,
    section: "Vehicle Emergencies - Brake failure (p. 26)",
    url: hb(26),
  },
  {
    key: "tire-blowout",
    quote:
      "Tire blowout: Hold the steering wheel tightly, and keep the vehicle going straight " +
      "as you slow down gradually. Take your foot off the gas pedal and use the brakes " +
      "lightly.",
    source: HANDBOOK,
    section: "Vehicle Emergencies - Tire blowout (p. 26)",
    url: hb(26),
  },
  {
    key: "headlight-failure",
    quote:
      "Headlight failure: Pull off the road as soon as possible. Try the headlight switch a " +
      "few times. If that does not work, put on the emergency flashers, turn signals or fog " +
      "lights, if you have them.",
    source: HANDBOOK,
    section: "Vehicle Emergencies - Headlight failure (p. 26)",
    url: hb(26),
  },
  {
    key: "jammed-gas-pedal",
    quote:
      "Jammed gas pedal: Keep your eyes on the road. Quickly shift to neutral. Pull off the " +
      "road when safe to do so. Turn off the engine.",
    source: HANDBOOK,
    section: "Vehicle Emergencies - Jammed gas pedal (p. 26)",
    url: hb(26),
  },
  {
    key: "crash-proof-of-insurance",
    quote:
      "If you are involved in a crash, you must provide proof of insurance to law " +
      "enforcement at the scene of the crash, or at the police station.",
    source: HANDBOOK,
    section: "Crash Tips (p. 26)",
    url: hb(26),
  },
  {
    key: "crash-steps",
    quote:
      "In the event of a crash you should: Stop immediately and never leave the scene. " +
      "Check for injuries and where practical render reasonable assistance. Call law " +
      "enforcement and emergency personnel.",
    source: HANDBOOK,
    section: "Crash Tips (p. 26)",
    url: hb(26),
  },
  {
    key: "accident-alert-24-hours",
    quote:
      "If alcohol and drugs are not involved, there are no injuries and all vehicles are " +
      "still drivable, exchange name, address, phone numbers, registration and insurance " +
      "information. You must file an accident report with law enforcement within 24 hours.",
    source: HANDBOOK,
    section: "Crash Tips - Accident Alert Status (p. 26)",
    url: hb(26),
  },
  {
    key: "parked-car-note",
    quote:
      "If a crash involves a parked car and you cannot find the owner, call law enforcement " +
      "and leave a note in a place where the owner of the car can find it.",
    source: HANDBOOK,
    section: "Crash Tips - Involving a parked car (p. 26)",
    url: hb(26),
  },
  {
    key: "move-it-law",
    quote:
      "State law requires motorists involved in a minor crash on a divided highway to move " +
      "their vehicles off the highway when: The vehicle is drivable. No drugs or alcohol " +
      "are involved. There are no injuries.",
    source: HANDBOOK,
    section: "Crash Tips - Move It Law (p. 26)",
    url: hb(26),
  },
  {
    key: "move-over-law",
    quote:
      "When you encounter any stationary vehicle on a highway with its hazards flashing, " +
      "you must move over one lane if you can do so safely. If it is not safe or you are " +
      "traveling on a road that is one lane in each direction, you must slow down to at " +
      "least 20 mph below the posted speed limit.",
    source: HANDBOOK,
    section: "Crash Tips - Move Over Law (p. 27)",
    url: hb(27),
  },
  {
    key: "good-samaritan",
    quote: "Move a victim only if the victim's life is in danger. Ask a conscious victim for permission before giving care.",
    source: HANDBOOK,
    section: "Crash Tips - First aid (p. 27)",
    url: hb(27),
  },
  // ------------------------------------------------------------------ statute
  {
    key: "crs-speed-75-maximum",
    quote:
      "Notwithstanding any other provisions of this section, no person shall drive a " +
      "vehicle on a highway at a speed in excess of a maximum lawful speed limit of " +
      "seventy-five miles per hour.",
    source: CRS,
    section: "Section 42-4-1101(8)(b) - Speed limits",
    url: crs(536),
  },
  {
    key: "crs-parking-driveway-5-feet",
    quote: "Within five feet of a public or private driveway",
    source: CRS,
    section: "Section 42-4-1204(2)(a) - Stopping, standing, or parking prohibited in specified places",
    url: crs(545),
  },
  {
    key: "crs-parking-crosswalk-20-feet",
    quote: "Within twenty feet of a crosswalk at an intersection",
    source: CRS,
    section: "Section 42-4-1204(2)(c) - Stopping, standing, or parking prohibited in specified places",
    url: crs(545),
  },
  {
    key: "crs-parking-railroad-50-feet",
    quote: "Within fifty feet of the nearest rail of a railroad crossing",
    source: CRS,
    section: "Section 42-4-1204(3)(a) - Stopping, standing, or parking prohibited in specified places",
    url: crs(546),
  },
  {
    key: "crs-signal-distance",
    quote:
      "A signal of intention to turn right or left shall be given continuously during not " +
      "less than the last one hundred feet traveled by the vehicle before turning in urban " +
      "or metropolitan areas and shall be given continuously for at least two hundred feet " +
      "on all four-lane highways and other highways where the prima facie or posted speed " +
      "limit is more than forty miles per hour.",
    source: CRS,
    section: "Section 42-4-903(2) - Turning movements and required signals",
    url: crs(523),
  },
  {
    key: "crs-school-bus-separate-roadways",
    quote:
      "The driver of a vehicle upon a highway with separate roadways need not stop upon " +
      "meeting or passing a school bus which is on a different roadway. For the purposes of " +
      "this section, \"highway with separate roadways\" means a highway that is divided into " +
      "two or more roadways by a depressed, raised, or painted median or other intervening " +
      "space serving as a clearly indicated dividing section or island.",
    source: CRS,
    section: "Section 42-4-1903(4) - School buses - stops - signs - passing",
    url: crs(658),
  },
  {
    key: "crs-udd-02-05",
    quote:
      "It is a class A traffic infraction for any person under twenty-one years of age to " +
      "drive a motor vehicle or vehicle when the person's BAC, as shown by analysis of the " +
      "person's breath, is at least 0.02 but not more than 0.05 at the time of driving or " +
      "within two hours after driving.",
    source: CRS,
    section: "Section 42-4-1301(2)(d)(I) - Driving under the influence",
    url: crs(558),
  },
  {
    key: "crs-railroad-stop-15-50-feet",
    quote:
      "Stop not less than fifteen feet nor more than fifty feet from the nearest rail of " +
      "the railroad grade crossing and shall not proceed until the railroad grade can be " +
      "crossed safely",
    source: CRS,
    section: "Section 42-4-706(1)(a) - Obedience to railroad signal",
    url: crs(512),
  },
  {
    key: "crs-lamps-1000-feet",
    quote:
      "Every vehicle upon a highway within this state, between sunset and sunrise and at " +
      "any other time when, due to insufficient light or unfavorable atmospheric conditions, " +
      "persons and vehicles on the highway are not clearly discernible at a distance of one " +
      "thousand feet ahead, shall display lighted lamps and illuminating devices as required " +
      "by this article for different classes of vehicles, subject to exceptions with " +
      "respect to parked vehicles.",
    source: CRS,
    section: "Section 42-4-204(1) - When lighted lamps are required",
    url: crs(377),
  },
  // ------------------------------------------------------------- dmv web pages
  {
    key: "web-test-60-minutes",
    quote: "Test takers will have 60 minutes to complete the test.",
    source: DMV,
    section: "@Home Driving Knowledge Tests - How long does the @Home Driving Knowledge Test take?",
    url: "https://dmv.colorado.gov/home-driving-knowledge-tests",
  },
  {
    key: "web-test-twice-a-day",
    quote: "You can take it as many times as needed, but only twice in one day.",
    source: DMV,
    section: "@Home Driving Knowledge Tests - How many times can I take the @Home Driving Knowledge Test?",
    url: "https://dmv.colorado.gov/home-driving-knowledge-tests",
  },
  {
    key: "web-test-proxy-19",
    quote:
      "Additionally, test-takers younger than 19 will need an adult older than 19 to be a " +
      "proxy for the test. Test results will also be emailed to the proxy.",
    source: DMV,
    section: "@Home Driving Knowledge Tests - precautions",
    url: "https://dmv.colorado.gov/home-driving-knowledge-tests",
  },
  {
    key: "web-retest-fee",
    quote:
      "If you failed the written permit test before passing, you will be required to pay " +
      "an additional state fee for each retest when you come to your appointment. The " +
      "retest fee is $11.50 and may be paid online or in person at your appointment.",
    source: DMV,
    section: "Colorado Permits and First-Time Driver License - Step 4: Pass the Written Test",
    url: "https://dmv.colorado.gov/permits-first-time-driver-license",
  },
  {
    key: "web-permit-minimum-age",
    quote: "You must be at least 15 years old to get a Colorado learner's permit.",
    source: DMV,
    section: "Colorado Permits and First-Time Driver License - General Permit and License Requirements",
    url: "https://dmv.colorado.gov/permits-first-time-driver-license",
  },
  {
    key: "web-permit-hold-12-months",
    quote:
      "You must hold your permit for a full 12 months OR until your 18th birthday, " +
      "whichever comes first, before applying for a license.",
    source: DMV,
    section: "Colorado Permits and First-Time Driver License - General Permit and License Requirements",
    url: "https://dmv.colorado.gov/permits-first-time-driver-license",
  },
  {
    key: "web-permit-valid-3-years",
    quote: "Your permit is valid for three years or until your 21st birthday, whichever comes first.",
    source: DMV,
    section: "Colorado Permits and First-Time Driver License - General Permit and License Requirements",
    url: "https://dmv.colorado.gov/permits-first-time-driver-license",
  },
  {
    key: "web-driver-ed-by-age",
    quote:
      "Age 15 years to 15 years and 6 months: Complete a 30-hour driver education course. " +
      "Click here for a list of schools. Age 15 years and 6 months to 16 years: Complete " +
      "either a 4-hour driver awareness program OR a 30-hour driver education course.",
    source: DMV,
    section: "Colorado Permits and First-Time Driver License - Guide to Getting Your Permit (Ages 15 to 16)",
    url: "https://dmv.colorado.gov/permits-first-time-driver-license",
  },
  {
    key: "web-btw-waived-16-6",
    quote:
      "If the permit holder is 16 years and 6 months old or older, the 6 hours of in the " +
      "car driving with an approved 3rd party driving school is waved.",
    source: DMV,
    section: "Colorado Permits and First-Time Driver License - Guide to Getting Your Permit (Ages 16 to 18)",
    url: "https://dmv.colorado.gov/permits-first-time-driver-license",
  },
  {
    key: "web-adult-permit-no-hold",
    quote:
      "There is no minimum time for holding an adult permit. Adults are eligable to take " +
      "the driving test immediately after receiving their permit.",
    source: DMV,
    section: "Adult Permit - Phase 3: Practicing with a Permit",
    url: "https://dmv.colorado.gov/adult-permit",
  },
  {
    key: "web-hb1021-2027",
    quote:
      "Ages 15 through 17: Will be required to complete a 30-hour driver education course " +
      "before obtaining an instruction permit.",
    source: DMV,
    section: "HB24-1021: Motor Vehicle Minor Driver Education - Important Changes Starting Jan. 1, 2027",
    url: "https://dmv.colorado.gov/hb24-1021-motor-vehicle-minor-driver-education",
  },
];
