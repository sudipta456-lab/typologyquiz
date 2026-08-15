import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Massachusetts Driver's Manual (Revised
// April 2026), published by the MassDOT Registry of Motor Vehicles - 179 of the
// 189 below - plus two mass.gov RMV pages for the learner's permit exam format,
// and five sections of the Massachusetts General Laws (Chapters 89 and 90)
// carrying rules the manual states only as a chart, states in a simplified
// form, or does not state at all: the 100-foot minimum following distance
// behind a school bus, the escalating school-bus-passing fines, the "green
// light is no defense" rule for blocking an intersection, the single-file
// passing rule for motorcycles, the prima facie speed thresholds with their
// distance qualifiers, the 40 mph cap on a loaded school bus, the 15 mph limit
// near a peddler's vehicle, and the point at which a handheld-device offence
// becomes surchargeable.
//
// Every quote below was located mechanically in the fetched source and checked
// as an exact substring before it was written here. Nothing is paraphrased.
// Four normalisations were applied to the extracted text and to nothing else:
// curly quotes, en dashes and em dashes are folded to ASCII; a word split by a
// line break is rejoined; runs of whitespace - including the line breaks the
// PDF's layout inserts mid-sentence - are collapsed to single spaces; and the
// section symbol is spelled out. The manual's own typographical quirks,
// including the stray spaces it puts before full stops inside sidebars, are
// preserved as they stand, because a quote that has been tidied up is no longer
// a quote.
//
// These are quoted rather than summarised because the RMV writes its 25-question
// learner's permit exam from this manual and says so on the exam page. Each is
// kept to the operative rule and shown with its source, section and a link back
// to the official page.

const HB = "Massachusetts Driver's Manual (Revised April 2026)";
const HB_URL = "https://www.mass.gov/doc/english-drivers-manual/download";

const PERMIT_URL = "https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit";
const EXAM_URL = "https://www.mass.gov/doc/learners-permit-exam-overview/download";
const MGL90 = "Massachusetts General Laws, Chapter 90";
const MGL89 = "Massachusetts General Laws, Chapter 89";
const mgl = (ch: string, s: string) =>
  `https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXIV/Chapter${ch}/Section${s}`;

export const massachusettsExcerpts: HandbookExcerpt[] = [
  // --- Chapter 1: the exam and the permit ---------------------------------
  {
    key: "exam-pass-mark-rmv",
    quote:
      "You will be given 25 minutes to complete the exam. The exam consists " +
      "of 25 questions. You must answer 18 questions correctly to pass.",
    source: "Massachusetts RMV - Apply for a passenger (Class D) learner's permit",
    section: "Learner's permit exam",
    url: PERMIT_URL,
  },
  {
    key: "exam-cheating",
    quote:
      "If you are found responsible for cheating, you will not be allowed to " +
      "hold any type of driver's license or permit for 60 days.",
    source: HB,
    section: "Chapter 1 - Learner's Permit Exam Procedures",
    url: HB_URL,
  },
  {
    key: "exam-auto-fail",
    quote:
      "Inactivity: If you have not clicked a button on a question for more " +
      "than 2 minutes.",
    source: "Massachusetts RMV - Learner's Permit Exam Overview",
    section: "Taking the Exam - What You Need To Know",
    url: EXAM_URL,
  },
  {
    key: "permit-age",
    quote:
      "You must be at least 16 years old to apply for a Class D or M " +
      "learner's permit.",
    source: HB,
    section: "Chapter 1 - Getting a Learner's Permit",
    url: HB_URL,
  },
  {
    key: "permit-validity",
    quote: "A permit is valid up to two years.",
    source: HB,
    section: "Chapter 1 - Getting a Learner's Permit",
    url: HB_URL,
  },
  {
    key: "permit-supervisor",
    quote:
      "You must be accompanied by a licensed operator who occupies the " +
      "passenger seat next to you and is at least 21 years old, holds a valid " +
      "driver's license from Massachusetts or another state, and has at least " +
      "one year of driving experience.",
    source: HB,
    section: "Chapter 1 - Driving With Your Permit",
    url: HB_URL,
  },
  {
    key: "permit-curfew",
    quote:
      "If you are under 18, you may not drive between 12:00 a.m. and 5:00 " +
      "a.m. unless accompanied by a parent or legal guardian who is a validly " +
      "licensed operator with at least one year of driving experience.",
    source: HB,
    section: "Chapter 1 - Driving With Your Permit",
    url: HB_URL,
  },
  {
    key: "vision-standard",
    quote:
      "To be eligible for a Class D or M license, your vision must be at " +
      "least 20/40 visual acuity in your better eye (corrected) and at least " +
      "120 degrees of horizontal peripheral vision (both eyes together) for a " +
      "full license.",
    source: HB,
    section: "Chapter 1 - Vision Screening Requirements",
    url: HB_URL,
  },
  {
    key: "road-test-retry",
    quote:
      "If you fail a road test or do not appear for your scheduled test, you " +
      "must wait at least 14 days before taking another test.",
    source: HB,
    section: "Chapter 1 - Scheduling a Road Test",
    url: HB_URL,
  },
  {
    key: "road-test-sponsor",
    quote:
      "Is at least 21 years old Has had at least one year of driving " +
      "experience Has a valid driver's license issued by their home state. " +
      "Holders of foreign driver's licenses are not eligible to be sponsors.",
    source: HB,
    section: "Chapter 1 - Sponsor Requirements",
    url: HB_URL,
  },
  {
    key: "temp-licence",
    quote:
      "the examiner will validate your learner's permit and it will become a " +
      "temporary license, valid up to 60 days (unless the permit expires " +
      "before that).",
    source: HB,
    section: "Chapter 1 - Receiving Your New License",
    url: HB_URL,
  },
  {
    key: "no-grace-period",
    quote:
      "Moving to Massachusetts: If you become a resident of Massachusetts, " +
      "you must obtain a Massachusetts driver's license to retain your " +
      "driving privileges. There is no grace period.",
    source: HB,
    section: "Chapter 1 - Who Needs a Massachusetts License?",
    url: HB_URL,
  },

  // --- Chapter 1: the Junior Operator Law ---------------------------------
  {
    key: "jol-definition",
    quote:
      "Any motor vehicle operator or motorcyclist between the ages of 16 1/2 " +
      "and 18 is considered a Junior Operator.",
    source: HB,
    section: "Chapter 1 - The Junior Operator License Law",
    url: HB_URL,
  },
  {
    key: "jol-passenger-restriction",
    quote:
      "You may not operate a motor vehicle within the first six months after " +
      "receiving your JOL while any person under age 18 is in the vehicle " +
      "(other than you or an immediate family member), unless you are " +
      "accompanied by a person who is at least 21 years old, has at least one " +
      "year of driving experience, holds a valid driver's license from " +
      "Massachusetts or another state, and is occupying a seat beside you.",
    source: HB,
    section: "Chapter 1 - JOL License Restrictions",
    url: HB_URL,
  },
  {
    key: "jol-curfew-criminal",
    quote:
      "If you are found operating a motor vehicle in violation of this " +
      "restriction, you may be charged with operating a motor vehicle without " +
      "being licensed. This is a criminal violation.",
    source: HB,
    section: "Chapter 1 - JOL License Restrictions",
    url: HB_URL,
  },
  {
    key: "jol-24p",
    quote:
      "Massachusetts General Laws chapter 90, section 24p requires that any " +
      "Junior Operator who is convicted of Operating Under the Influence " +
      "(OUI), Operating to Endanger, Leaving the Scene of a Crash, Drinking " +
      "from an Open Alcohol Container, OUI with Serious Bodily Injury, " +
      "Unauthorized Use of a Motor Vehicle, Reckless/ Negligent Operation, " +
      "Loaning/ Allowing Another to Use Your License or Learner's Permit, or " +
      "Motor Vehicle Homicide will face a 180 day suspension",
    source: HB,
    section: "Chapter 3 - Mandatory LICENSE Suspensions (Junior Operators)",
    url: HB_URL,
  },
  {
    key: "jol-speeding-reinstate",
    quote:
      "All offenses require a new learner's permit exam, a Driver Attitudinal " +
      "Retraining course, and a new road test.",
    source: HB,
    section: "Chapter 3 - Mandatory LICENSE Suspensions (Junior Operators)",
    url: HB_URL,
  },

  // --- Chapter 2: safety equipment and belts ------------------------------
  {
    key: "seat-belt-law",
    quote:
      "Massachusetts law requires every person in a passenger motor vehicle " +
      "(including vans and small trucks under 18,000 lbs .) to wear a safety " +
      "belt or sit in a child passenger restraint .",
    source: HB,
    section: "Chapter 2 - Safety/Seat Belt Law",
    url: HB_URL,
  },
  {
    key: "child-restraint",
    quote:
      "Infants and small children must sit in federally approved child " +
      "passenger restraints until they... 1. Are at least eight years old or " +
      "2. At least fifty-seven inches tall",
    source: HB,
    section: "Chapter 2 - Child Passenger Restraints",
    url: HB_URL,
  },
  {
    key: "headphones-illegal",
    quote:
      "It is illegal to wear a radio headset, headphones, or any other wired " +
      "or wireless device that restricts your attention to the environment " +
      "while driving. If you are 18 or older, you can use one earplug for use " +
      "with a cell phone.",
    source: HB,
    section: "Chapter 2 - Headphones",
    url: HB_URL,
  },
  {
    key: "window-tint",
    quote:
      "Glass tinting is allowed on passenger vehicles, but there are " +
      "restrictions. You can darken your side and rear windows up to 35 " +
      "percent. It is illegal to tint your windshield.",
    source: HB,
    section: "Chapter 2 - Passenger Vehicle Safety",
    url: HB_URL,
  },
  {
    key: "tire-tread",
    quote:
      "Tires must have at least 2/32 inches of tread depth in the proper " +
      "grooves and no fabric breaks or exposed cords.",
    source: HB,
    section: "Chapter 2 - Brakes and Tires",
    url: HB_URL,
  },
  {
    key: "plate-visibility",
    quote:
      "You must keep your license plates clean and they cannot be blocked by " +
      "anything. Your plate number must be visible from 60 feet at night. " +
      "Registration stickers must only be placed in the upper right corner of " +
      "the plate.",
    source: HB,
    section: "Chapter 2 - License Plates",
    url: HB_URL,
  },

  // --- Chapter 2: distracted driving --------------------------------------
  {
    key: "hands-free-stationary",
    quote:
      "Handheld device use is only allowed if the vehicle is stationary and " +
      "is not located in a public travel lane. It is not allowed at red " +
      "lights or stop signs.",
    source: HB,
    section: "Chapter 2 - Distracted Driving Law",
    url: HB_URL,
  },
  {
    key: "hands-free-gps",
    quote:
      "GPS devices (including cell phones) can be used if the device is " +
      "affixed, either temporarily or permanently, in the motor vehicle for " +
      "the purpose of providing navigation assistance.",
    source: HB,
    section: "Chapter 2 - Distracted Driving Law",
    url: HB_URL,
  },
  {
    key: "hands-free-surcharge",
    quote:
      "A first or second offense under this section or section 8M shall not " +
      "be a surchargeable incident",
    source: MGL90 + ", Section 13B",
    section: "Section 13B(e)",
    url: mgl("90", "13B"),
  },
  {
    key: "negligent-phone",
    quote:
      "It is a crime to injure a person or damage property because of " +
      "negligent driving. If you crash because you were using a mobile " +
      "electronic device, you will face criminal charges and lose your license.",
    source: HB,
    section: "Chapter 2 - Negligent Operation and Injury from Mobile Phone Use",
    url: HB_URL,
  },

  // --- Chapter 2: following distance, braking, lights ---------------------
  {
    key: "three-second-rule",
    quote:
      "Use the \"three-second\" rule to keep a safe distance from the vehicle " +
      "in front of you.",
    source: HB,
    section: "Chapter 2 - Safe Distances Around Your Car",
    url: HB_URL,
  },
  {
    key: "four-second-motorcycle",
    quote:
      "Keep more space (at least four seconds) behind a motorcycle than you " +
      "would for another vehicle.",
    source: HB,
    section: "Chapter 2 - Safe Distances Around Your Car",
    url: HB_URL,
  },
  {
    key: "ten-second-heavy",
    quote:
      "Keep more space (at least ten seconds) between your vehicle and heavy " +
      "equipment (for example, dump trucks, tractors).",
    source: HB,
    section: "Chapter 2 - Safe Distances Around Your Car",
    url: HB_URL,
  },
  {
    key: "tailgating-fine",
    quote:
      "Never tailgate a vehicle in front of you. Tailgating is illegal and " +
      "the main cause of rear-end crashes. The fine for tailgating can be as " +
      "high as $100.",
    source: HB,
    section: "Chapter 2 - Safe Distances Around Your Car",
    url: HB_URL,
  },
  {
    key: "reaction-time",
    quote:
      "The time it takes you to react, think, and hit the brakes is called " +
      "reaction time. It takes about three-quarters of a second to react to a " +
      "situation and step on the brake pedal.",
    source: HB,
    section: "Chapter 2 - Braking and Stopping",
    url: HB_URL,
  },
  {
    key: "stopping-distance-60",
    quote:
      "At 60 mph, it takes about 292 feet (almost a whole football field) to " +
      "react to a hazard, step on the brake, and safely stop. At just 30 mph, " +
      "your total stopping distance will be about 104 feet.",
    source: HB,
    section: "Chapter 2 - Braking and Stopping",
    url: HB_URL,
  },
  {
    key: "headlight-rule",
    quote:
      "From one-half hour after sunset until one-half hour before sunrise " +
      "When you cannot clearly see people or vehicles 500 feet ahead due to " +
      "insufficient light or weather conditions Whenever you use your " +
      "windshield wipers (daytime running lights are not sufficient)",
    source: HB,
    section: "Chapter 2 - Using Your Horn, Headlights, and Emergency Signals",
    url: HB_URL,
  },
  {
    key: "wipers-headlights",
    quote:
      "The law requires you to use your headlights and taillights whenever " +
      "you use your windshield wipers . Daytime running lights are not sufficient .",
    source: HB,
    section: "Chapter 2 - Driving in Rain or Fog",
    url: HB_URL,
  },
  {
    key: "high-beam-dim",
    quote:
      "You must lower your high beam headlights to low beam when you are " +
      "within 500 feet of an oncoming vehicle or within 200 feet of a vehicle " +
      "traveling ahead of you.",
    source: HB,
    section: "Chapter 2 - High Beam Headlights",
    url: HB_URL,
  },
  {
    key: "clear-snow",
    quote:
      "Remove ALL ice and snow from your vehicle before driving. Clear all " +
      "windows, windshield wipers, headlights, and brake lights. It is very " +
      "important that you clear the roof, hood, and trunk so ice and snow " +
      "does not blow into vehicles behind you. If you do not, you can be " +
      "charged with negligent operation.",
    source: HB,
    section: "Chapter 2 - Winter Driving",
    url: HB_URL,
  },

  // --- Chapter 2: sharing the road ----------------------------------------
  {
    key: "vulnerable-road-users",
    quote:
      "When you pass a vulnerable road user, you must leave a safe passing " +
      "distance of at least four feet between your vehicle and the road user. " +
      "If it is safe, you may use all or part of the lane next to you and you " +
      "may cross the center line if necessary. You must obey the speed limit " +
      "while passing.",
    source: HB,
    section: "Chapter 2 - Vulnerable Road Users Law",
    url: HB_URL,
  },
  {
    key: "white-cane-law",
    quote:
      "The White Cane Law requires you to stop completely for a blind " +
      "pedestrian crossing a street.",
    source: HB,
    section: "Chapter 2 - Pedestrians",
    url: HB_URL,
  },
  {
    key: "motorcycle-lane-share",
    quote:
      "Motorcycles have the same right to use the full width of a lane. Even " +
      "though a motorcycle may use a smaller part of the lane, you must never " +
      "share a lane.",
    source: HB,
    section: "Chapter 2 - Motorcycles",
    url: HB_URL,
  },
  {
    key: "motorcycle-no-weave",
    quote:
      "It is illegal for a motorcycle operator to weave between lanes at any time .",
    source: HB,
    section: "Chapter 2 - Motorcycles",
    url: HB_URL,
  },
  {
    key: "motorcycle-single-file",
    quote:
      "The operators of motorcycles shall not ride abreast of more than one " +
      "other motorcycle, shall ride single file when passing, and shall not " +
      "pass any other motor vehicle within the same lane, except another motorcycle.",
    source: MGL89 + ", Section 4A",
    section: "Section 4A - Driving vehicles in a single lane; motorcycles",
    url: mgl("89", "4A"),
  },
  {
    key: "moped-rules",
    quote:
      "Do not drive faster than 25 mph. Do not ride on limited-access or " +
      "express state highways with signs saying that bicycles are not allowed.",
    source: HB,
    section: "Chapter 2 - Motorized Bicycle (Moped) Safety",
    url: HB_URL,
  },
  {
    key: "scooter-night",
    quote: "Do not drive after sunset or before sunrise. Do not carry any passengers.",
    source: HB,
    section: "Chapter 2 - Motorized Scooter Safety",
    url: HB_URL,
  },

  // --- Chapter 3: violations, records and suspensions ---------------------
  {
    key: "speeding-fine-base",
    quote:
      "The lowest penalty for driving above the speed limit is a $100 fine, " +
      "plus an additional $5 public safety surcharge which is added to all " +
      "speeding violations.",
    source: HB,
    section: "Chapter 3 - Speeding Violations",
    url: HB_URL,
  },
  {
    key: "speeding-fine-per-mph",
    quote:
      "If you drive more than ten miles per hour (mph) over the speed limit, " +
      "you must pay an extra $10 for each mph you were traveling above the " +
      "first ten.",
    source: HB,
    section: "Chapter 3 - Speeding Violations",
    url: HB_URL,
  },
  {
    key: "head-injury-surcharge",
    quote:
      "By law, all fines for speeding violations include a $50 surcharge. The " +
      "entire surcharge goes to the Head Injury Treatment Services Trust Fund.",
    source: HB,
    section: "Chapter 3 - Speeding Violations",
    url: HB_URL,
  },
  {
    key: "work-zone-double",
    quote:
      "If you are caught speeding in a posted work zone, the speeding fine is doubled.",
    source: HB,
    section: "Chapter 3 - Work Zones",
    url: HB_URL,
  },
  {
    key: "three-speeding",
    quote:
      "If you are found guilty for three speeding violations within a " +
      "12-month period, your license will be suspended automatically for 30 days .",
    source: HB,
    section: "Chapter 3 - Surchargeable Events",
    url: HB_URL,
  },
  {
    key: "three-surchargeable",
    quote:
      "If you have three surchargeable events within a two-year period, your " +
      "license may be suspended . The RMV will send you a letter telling you " +
      "to complete a Driver Retraining course",
    source: HB,
    section: "Chapter 3 - Surchargeable Events",
    url: HB_URL,
  },
  {
    key: "habitual-offender",
    quote:
      "A total of three major moving violations or any combination of twelve " +
      "major or minor moving violations within a five-year period. Four years $500",
    source: HB,
    section: "Chapter 3 - Mandatory License Suspensions (18 Years and Older)",
    url: HB_URL,
  },
  {
    key: "long-suspension-retest",
    quote:
      "For license suspensions of two years or more, you must also pass a " +
      "learner's permit exam and road test to reinstate your license .",
    source: HB,
    section: "Chapter 3 - License Reinstatement",
    url: HB_URL,
  },

  // --- Chapter 3: alcohol and drugs ---------------------------------------
  {
    key: "legal-limit",
    quote:
      "You are operating above the legal limit if you have a BAC of 0 .08 or higher .",
    source: HB,
    section: "Chapter 3 - Alcohol Tests",
    url: HB_URL,
  },
  {
    key: "zero-tolerance",
    quote:
      "Massachusetts has a \"zero-tolerance\" law for drivers under 21 . Any " +
      "driver under 21 will face penalties for having a BAC of 0 .02 or higher .",
    source: HB,
    section: "Chapter 3 - Alcohol Tests",
    url: HB_URL,
  },
  {
    key: "failed-test-standard",
    quote:
      "All drivers will fail a chemical test if they have a Blood Alcohol " +
      "Content (BAC) of 0.08 or greater. Drivers under 21 have the same " +
      "standard for criminal purposes, but will face administrative sanctions " +
      "for tests with a BAC as low as 0.02.",
    source: HB,
    section: "Chapter 3 - License Suspension Periods for Failed Chemical Tests",
    url: HB_URL,
  },
  {
    key: "failed-test-under-18",
    quote:
      "License is suspended for 30 days, plus an additional one year, " +
      "pursuant to MGL c.90, s. 24P. If this is your first operating under " +
      "the influence case, the one-year suspension can be reduced to 180 days " +
      "upon entry into a Department of Public Health (DPH) approved alcohol " +
      "education program.",
    source: HB,
    section: "Chapter 3 - License Suspension Periods for Failed Chemical Tests",
    url: HB_URL,
  },
  {
    key: "under-21-court-irrelevant",
    quote:
      "It does not matter what happens with your court case . Even if you win " +
      "the case, it will not change the requirement for you to take the " +
      "alcohol education course .",
    source: HB,
    section: "Chapter 3 - License Suspension Periods for Failed Chemical Tests",
    url: HB_URL,
  },
  {
    key: "refusal-over-21",
    quote: "Drivers over age 21 No Prior OUI Offenses 180 days One Prior OUI Offense Three years",
    source: HB,
    section: "Chapter 3 - License Suspension Periods for Refusing a Chemical Test",
    url: HB_URL,
  },
  {
    key: "refusal-not-prior",
    quote: "Chemical test refusals do not count as prior OUI offenses.",
    source: HB,
    section: "Chapter 3 - License Suspension Periods for Refusing a Chemical Test",
    url: HB_URL,
  },
  {
    key: "implied-consent",
    quote:
      "Massachusetts has an Implied Consent Law. Every licensed driver in the " +
      "state must agree to consent to a breathalyzer or blood test in certain cases.",
    source: HB,
    section: "Chapter 3 - Alcohol Tests",
    url: HB_URL,
  },
  {
    key: "oui-first-offense",
    quote: "First Offense $500-$5,000 Maximum 2 1/2 years One Year",
    source: HB,
    section: "Chapter 3 - Penalties for Operating Under the Influence",
    url: HB_URL,
  },
  {
    key: "oui-escalation",
    quote:
      "Operating under the influence of alcohol or drugs One year (first) Two " +
      "years (second) Eight years (third) Ten years (fourth) Lifetime (fifth)",
    source: HB,
    section: "Chapter 3 - Criminal Offenses and Suspensions",
    url: HB_URL,
  },
  {
    key: "interlock-duration",
    quote:
      "You must keep using the device for two more years after your license " +
      "has been reinstated.",
    source: HB,
    section: "Chapter 3 - Ignition Interlock Devices",
    url: HB_URL,
  },
  {
    key: "open-container",
    quote:
      "You may not drink alcohol while driving. You may not have an open " +
      "alcoholic drink inside your vehicle, even if someone else is holding " +
      "it. If you are convicted of this offense, you will be fined $100 to $500.",
    source: HB,
    section: "Chapter 3 - Open Container Law",
    url: HB_URL,
  },
  {
    key: "under-21-buying",
    quote:
      "If you are under 21 and you buy, or try to buy, alcohol, your license " +
      "will be suspended for 180 days .",
    source: HB,
    section: "Chapter 3 - Buying, Possessing, or Transporting Alcohol",
    url: HB_URL,
  },
  {
    key: "no-sobering-up",
    quote:
      "There is no quick way to sober up or to get the alcohol out of your " +
      "body. Drinking black coffee, taking a cold shower, exercising, or " +
      "eating might make you feel more alert after drinking alcohol. However, " +
      "none of these actions affect how quickly alcohol leaves your body.",
    source: HB,
    section: "Chapter 3 - Blood Alcohol Content",
    url: HB_URL,
  },
  {
    key: "standard-drink",
    quote:
      "12 ounce beer Five ounce glass of wine One and a half ounce serving of " +
      "80-proof liquor (even if mixed with a soft drink)",
    source: HB,
    section: "Chapter 3 - Blood Alcohol Content",
    url: HB_URL,
  },
  {
    key: "marijuana-still-illegal",
    quote:
      "Massachusetts law has decriminalized certain aspects of possession " +
      "and/or use of marijuana . However, operating a motor vehicle while " +
      "under the influence of marijuana is still illegal!",
    source: HB,
    section: "Chapter 3 - Marijuana",
    url: HB_URL,
  },
  {
    key: "prescription-oui",
    quote:
      "You can be considered OUI with prescription drugs . It is illegal to " +
      "operate a motor vehicle while impaired by any substance .",
    source: HB,
    section: "Chapter 3 - Other Drugs",
    url: HB_URL,
  },

  // --- Chapter 4: speed ---------------------------------------------------
  {
    key: "default-speed-limits",
    quote:
      "Unless posted otherwise, your speed would not be reasonable and proper " +
      "if you drive over . . . 20 mph in a school zone 30 mph in a thickly " +
      "settled or business district (unless there are signs showing a 25 mph " +
      "limit) 40 mph outside a thickly settled or business district 50 mph on " +
      "a highway outside a thickly settled or business district",
    source: HB,
    section: "Chapter 4 - Speed Limits",
    url: HB_URL,
  },
  {
    key: "thickly-settled-definition",
    quote:
      "A \"thickly settled district\" is an area where buildings are fewer " +
      "than 200 feet apart for a distance of 1/4 mile or more .",
    source: HB,
    section: "Chapter 4 - Speed Limits",
    url: HB_URL,
  },
  {
    key: "thickly-settled-25",
    quote:
      "Some communities have a thickly settled speed limit of 25 mph unless " +
      "posted otherwise (per M.G.L. c90, Section 17c). Signs are posted at " +
      "all entrances to these cities and towns.",
    source: HB,
    section: "Chapter 4 - Speed Limits",
    url: HB_URL,
  },
  {
    key: "school-zone-speed",
    quote: "The speed limit on roads near schools is 20 mph.",
    source: HB,
    section: "Chapter 4 - School Zones",
    url: HB_URL,
  },
  {
    key: "prima-facie-statute",
    quote:
      "(1) if a motor vehicle is operated on a divided highway outside a " +
      "thickly settled or business district at a rate of speed exceeding " +
      "fifty miles per hour for a distance of a quarter of a mile, or (2) on " +
      "any other way outside a thickly settled or business district at a rate " +
      "of speed exceeding forty miles per hour for a distance of a quarter of a mile",
    source: MGL90 + ", Section 17",
    section: "Section 17 - Speed limits",
    url: mgl("90", "17"),
  },
  {
    key: "peddler-speed",
    quote:
      "Operation of a motor vehicle at a speed in excess of fifteen miles per " +
      "hour within one-tenth of a mile of a vehicle used in hawking or " +
      "peddling merchandise and which displays flashing amber lights shall " +
      "likewise be prima facie evidence of a rate of speed greater than is " +
      "reasonable and proper.",
    source: MGL90 + ", Section 17",
    section: "Section 17 - Speed limits",
    url: mgl("90", "17"),
  },
  {
    key: "school-bus-speed",
    quote:
      "Except on a limited access highway, no person shall operate a school " +
      "bus at a rate of speed exceeding forty miles per hour, while actually " +
      "engaged in carrying school children.",
    source: MGL90 + ", Section 17",
    section: "Section 17 - Speed limits",
    url: mgl("90", "17"),
  },
  {
    key: "highway-speed-range",
    quote:
      "Limited-access highways, like interstate routes, have speed limits " +
      "from 50 to 65 mph. Smaller highways have speed limits of 55 mph or lower.",
    source: HB,
    section: "Chapter 4 - Speed Limits",
    url: HB_URL,
  },
  {
    key: "minimum-speeds",
    quote:
      "There is a minimum speed of 40 mph on the Massachusetts Turnpike. " +
      "There is a minimum speed of 20 mph in the Boston Harbor tunnels " +
      "(Callahan, Sumner, and Ted Williams).",
    source: HB,
    section: "Chapter 4 - Speed Limits",
    url: HB_URL,
  },
  {
    key: "ticket-under-limit",
    quote:
      "If you drive 40 mph in a heavy rainstorm on a highway with a speed " +
      "limit of 50 mph, you can get a ticket for driving too fast .",
    source: HB,
    section: "Chapter 4 - Speed Limits",
    url: HB_URL,
  },
  {
    key: "pedestrian-speed-risk",
    quote:
      "At a speed of 20 mph, 13% of pedestrians are seriously injured or " +
      "killed in a crash. At 30 mph, that increases to 40% and at 40 mph it " +
      "increases to 73%.",
    source: HB,
    section: "Chapter 4 - Dangers of Speeding",
    url: HB_URL,
  },

  // --- Chapter 4: signals -------------------------------------------------
  {
    key: "red-light",
    quote:
      "A steady red circle means \"stop.\" Do not go until the light turns " +
      "green. You can make a right turn on a red light only after you come to " +
      "a complete stop and yield to pedestrians or other vehicles in your path.",
    source: HB,
    section: "Chapter 4 - Steady Red Circle",
    url: HB_URL,
  },
  {
    key: "left-on-red",
    quote:
      "You can turn left on a red light when driving on a one-way street and " +
      "turning left onto another one-way street. Stop and yield to " +
      "pedestrians and other vehicles before turning.",
    source: HB,
    section: "Chapter 4 - Steady Red Circle",
    url: HB_URL,
  },
  {
    key: "red-arrow",
    quote:
      "A steady red arrow means the same as a steady red, circular signal " +
      "(see the preceding Steady Red section). However, it only applies to " +
      "vehicles going in the direction of the arrow.",
    source: HB,
    section: "Chapter 4 - Steady Red Arrow",
    url: HB_URL,
  },
  {
    key: "flashing-red",
    quote:
      "A flashing red circle means the same as a STOP sign. Come to a " +
      "complete stop. Obey the right-of-way laws and proceed when it is safe.",
    source: HB,
    section: "Chapter 4 - Flashing Red Circle",
    url: HB_URL,
  },
  {
    key: "steady-yellow",
    quote:
      "A steady yellow circle means the traffic signal is changing from green " +
      "to red. You must stop if it is safe. If you are already stopped at an " +
      "intersection or a stop line, you may not proceed.",
    source: HB,
    section: "Chapter 4 - Steady Yellow Circle",
    url: HB_URL,
  },
  {
    key: "flashing-yellow",
    quote:
      "A flashing yellow circle is a warning. Proceed with caution, and stay " +
      "alert. Look both ways when crossing an intersection.",
    source: HB,
    section: "Chapter 4 - Flashing Yellow Circle",
    url: HB_URL,
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "A flashing yellow arrow allows you to turn left or right in the " +
      "direction of the arrow when oncoming traffic has a green light but " +
      "there is a break in traffic.",
    source: HB,
    section: "Chapter 4 - Flashing Yellow Arrow",
    url: HB_URL,
  },
  {
    key: "green-arrow",
    quote:
      "A green arrow means you can make a \"protected\" turn in the direction " +
      "of the arrow. When a green arrow displays for your turn, pedestrians " +
      "and oncoming vehicles should be stopped for red lights.",
    source: HB,
    section: "Chapter 4 - Green Arrow",
    url: HB_URL,
  },
  {
    key: "bicycle-signals",
    quote:
      "Bicycle signals are lights specifically meant for bicyclists. They " +
      "display as steady red, yellow, and green bicycle symbols. When the " +
      "signal is green, bicyclists can go through busy intersections while " +
      "motor vehicles are stopped, protecting them from turning vehicles.",
    source: HB,
    section: "Chapter 4 - Bicycle Signals",
    url: HB_URL,
  },
  {
    key: "signals-dark",
    quote:
      "If signals are blacked out and not functioning, be cautious and " +
      "proceed as though there is a stop sign in all directions. Go when it is safe.",
    source: HB,
    section: "Chapter 4 - Traffic Signals Not Working",
    url: HB_URL,
  },
  {
    key: "rrfb",
    quote:
      "When activated, amber lights flash in an irregular pattern. You must " +
      "stop for pedestrians when the beacon is flashing.",
    source: HB,
    section: "Chapter 4 - Rectangular Rapid Flashing Beacon",
    url: HB_URL,
  },
  {
    key: "pedestrian-hybrid-beacon",
    quote:
      "When all lights are dark, you can proceed with caution. When the " +
      "bottom yellow light is flashing, you must slow down. When the bottom " +
      "yellow light is solid, you must prepare to stop. When the top two red " +
      "lights are solid, you must stop for pedestrians. When the top two red " +
      "lights are flashing, you must stop and proceed with caution if clear.",
    source: HB,
    section: "Chapter 4 - Pedestrian Hybrid Beacon",
    url: HB_URL,
  },
  {
    key: "countdown-timer",
    quote:
      "Pedestrians who are already in the crosswalk when the countdown " +
      "reaches zero have the right-of-way.",
    source: HB,
    section: "Chapter 4 - Pedestrian Signals",
    url: HB_URL,
  },
  {
    key: "yield-red-and-yellow",
    quote:
      "You must yield to pedestrians if your traffic signal is red or if it " +
      "is red and yellow. Never pass a vehicle that is stopped or slowing for " +
      "a pedestrian.",
    source: HB,
    section: "Chapter 4 - Laws for Drivers",
    url: HB_URL,
  },
  {
    key: "officer-overrides",
    quote:
      "You must always obey directions of a traffic officer, even when they " +
      "overrule signs, signals, or pavement markings.",
    source: HB,
    section: "Chapter 4 - Roadway Construction/ Maintenance (Work Zones)",
    url: HB_URL,
  },

  // --- Chapter 4: signs ---------------------------------------------------
  {
    key: "sign-colours",
    quote:
      "RED-stop or prohibition GREEN-direction, shows where you can go " +
      "YELLOW-general warning BLACK/WHITE-regulation BLUE-motorist service " +
      "(e.g., gas, food, hotels), evacuation route BROWN-recreational, " +
      "historic, or scenic site ORANGE-construction or maintenance warning",
    source: HB,
    section: "Chapter 4 - Traffic Signs",
    url: HB_URL,
  },
  {
    key: "sign-colours-2",
    quote:
      "FLUORESCENT YELLOW-GREEN-school zone, bicycle, pedestrian, and curve " +
      "warning FLUORESCENT PINK-incident management signs PURPLE-electronic " +
      "toll collection signs",
    source: HB,
    section: "Chapter 4 - Traffic Signs",
    url: HB_URL,
  },
  {
    key: "stop-sign",
    quote:
      "A STOP sign always means \"come to a complete halt\" and applies to " +
      "each vehicle that comes to the sign. When approaching a stop sign, you " +
      "must stop before any crosswalk or stop line painted on the pavement.",
    source: HB,
    section: "Chapter 4 - Stop and Yield Signs",
    url: HB_URL,
  },
  {
    key: "all-way-stop-sign",
    quote:
      "If a 4-WAY or ALL WAY sign is added to a STOP sign at an intersection, " +
      "all traffic coming to the intersection must stop. The first vehicle in " +
      "the intersection or four-way stop has the right of way.",
    source: HB,
    section: "Chapter 4 - Stop and Yield Signs",
    url: HB_URL,
  },
  {
    key: "yield-sign",
    quote:
      "When you see a YIELD sign, slow down and be prepared to stop. Let " +
      "vehicles, bicyclists, and pedestrians go before you proceed. You must " +
      "come to a complete stop if traffic conditions require it.",
    source: HB,
    section: "Chapter 4 - Stop and Yield Signs",
    url: HB_URL,
  },
  {
    key: "state-route-marker",
    quote:
      "In Massachusetts, numbered state highway routes are posted on white, " +
      "rectangular signs with black letters and borders. Interstate highway " +
      "signs are blue, red, and white shields.",
    source: HB,
    section: "Chapter 4 - Guide Signs",
    url: HB_URL,
  },
  {
    key: "regulatory-signs",
    quote:
      "Signs that use a red circle with a diagonal slash mean that something " +
      "is prohibited.",
    source: HB,
    section: "Chapter 4 - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "railroad-stop-15",
    quote:
      "If the lights begin to flash, you must stop at least 15 feet before " +
      "the light post or gate. You must then remain stopped until the gate " +
      "raises and the lights stop flashing.",
    source: HB,
    section: "Chapter 4 - Railroad Crossings",
    url: HB_URL,
  },
  {
    key: "crossbuck",
    quote:
      "The point at which train tracks cross a road is marked with a white " +
      "crossbuck sign. If more than one track crosses a road, the number of " +
      "tracks is posted below the crossbuck.",
    source: HB,
    section: "Chapter 4 - Railroad Crossings",
    url: HB_URL,
  },
  {
    key: "work-zone-first-thing",
    quote:
      "When approaching a work zone, the FIRST thing you must do is SLOW DOWN " +
      "and look for guidance on how to safely travel through the area.",
    source: HB,
    section: "Chapter 4 - Roadway Construction/ Maintenance (Work Zones)",
    url: HB_URL,
  },

  // --- Chapter 4: pavement markings ---------------------------------------
  {
    key: "solid-white",
    quote:
      "A solid white line marks the right edge of the roadway or separates " +
      "lanes of traffic traveling in the same direction, including bicycle lanes.",
    source: HB,
    section: "Chapter 4 - Solid White Line",
    url: HB_URL,
  },
  {
    key: "double-white",
    quote:
      "A double solid white line separates two lanes of traffic going in the " +
      "same direction. Crossing a double solid white line is not allowed.",
    source: HB,
    section: "Chapter 4 - Double Solid White Line",
    url: HB_URL,
  },
  {
    key: "double-yellow",
    quote:
      "Two solid yellow lines prohibit vehicles from crossing them to pass " +
      "another vehicle. You may not cross these lines unless turning left " +
      "when it is safe to do so.",
    source: HB,
    section: "Chapter 4 - Double Yellow Lines: Both Solid",
    url: HB_URL,
  },
  {
    key: "sharrows",
    quote:
      "When you see a Shared Lane Marking, you must look out for the presence " +
      "of bicyclists and make sure that you leave them enough space when passing.",
    source: HB,
    section: "Chapter 4 - Shared Lane Markings (Sharrows)",
    url: HB_URL,
  },
  {
    key: "advisory-bike-lane",
    quote:
      "They are dashed on one or both sides to indicate that motor vehicles " +
      "may use the lane space when necessary, but they must always yield to " +
      "bicyclists first.",
    source: HB,
    section: "Chapter 4 - Advisory Bicycle Lanes",
    url: HB_URL,
  },
  {
    key: "green-pavement",
    quote:
      "Green pavement is used in areas where there could be road sharing " +
      "conflicts between motor vehicles and bicycles. You should pay close " +
      "attention and look for bicyclists before crossing green pavement. At a " +
      "red light, you should not stop on green pavement.",
    source: HB,
    section: "Chapter 4 - Green Pavement",
    url: HB_URL,
  },
  {
    key: "channelizing-island",
    quote:
      "You cannot drive over or park a motor vehicle upon any channelizing " +
      "island, unless directed to do so by a police officer.",
    source: HB,
    section: "Chapter 4 - Channelizing Islands",
    url: HB_URL,
  },
  {
    key: "bicycle-box",
    quote:
      "Drivers must stop behind the bicycle box (even when it's empty) and " +
      "wait for a green light.",
    source: HB,
    section: "Chapter 4 - Bicycle Boxes",
    url: HB_URL,
  },

  // --- Chapter 4: lanes, turns, intersections -----------------------------
  {
    key: "signal-distance",
    quote:
      "Signal your turn at least 100 feet before making the turn. On a " +
      "highway, signal at least 500 feet before a turn.",
    source: HB,
    section: "Chapter 4 - Turns",
    url: HB_URL,
  },
  {
    key: "right-lane-rule",
    quote:
      "On roadways with two or more lanes in your travel direction, use the " +
      "right lane for driving unless... You are passing another vehicle. You " +
      "are making a left turn. The right lane is blocked.",
    source: HB,
    section: "Chapter 4 - Using Lanes",
    url: HB_URL,
  },
  {
    key: "no-lane-change-intersection",
    quote:
      "Never change lanes in the middle of an intersection. It is illegal and dangerous.",
    source: HB,
    section: "Chapter 4 - Using Lanes",
    url: HB_URL,
  },
  {
    key: "motorcycle-two-abreast",
    quote:
      "Special rules for motorcycles: Do not ride along pavement lines, " +
      "between lanes of traffic. Ride no more than two abreast (side-by-side).",
    source: HB,
    section: "Chapter 4 - Using Lanes",
    url: HB_URL,
  },
  {
    key: "breakdown-lane",
    quote:
      "As a general rule, do not use a highway breakdown lane for travel or " +
      "passing. On some highways, however, you may use the breakdown lane for " +
      "travel during specific times.",
    source: HB,
    section: "Chapter 4 - Using Lanes",
    url: HB_URL,
  },
  {
    key: "exit-signal-500",
    quote:
      "Be sure to signal your exit at least 500 feet before you reach the exit ramp.",
    source: HB,
    section: "Chapter 4 - Entering and Exiting the Highway",
    url: HB_URL,
  },
  {
    key: "u-turn-lane",
    quote:
      "You may only make a U-turn from the lane closest to the center line.",
    source: HB,
    section: "Chapter 4 - U-Turns",
    url: HB_URL,
  },
  {
    key: "u-turn-visibility",
    quote:
      "Do not make a U-turn at the crest of a hill, near a curve, or anyplace " +
      "where you or other drivers cannot see 500 feet away.",
    source: HB,
    section: "Chapter 4 - U-Turns",
    url: HB_URL,
  },
  {
    key: "centre-turn-lane",
    quote:
      "On some two-way roads, a center lane may be marked as a common " +
      "left-turn lane to be used by vehicles in both directions. You may not " +
      "travel in a center turning lane.",
    source: HB,
    section: "Chapter 4 - Left Turns from Center Lanes",
    url: HB_URL,
  },
  {
    key: "three-point-turn",
    quote:
      "The street is narrow There is good visibility There are no public " +
      "driveways to turn into The traffic is light The turn is legal There is " +
      "no other option",
    source: HB,
    section: "Chapter 4 - Three-Point Turns",
    url: HB_URL,
  },
  {
    key: "green-no-defense",
    quote:
      "A green light is no defense to blocking the intersection. The driver " +
      "must wait another cycle of the signal light, if necessary.",
    source: MGL89 + ", Section 9",
    section: "Section 9 - Through ways; traffic control signs and devices",
    url: mgl("89", "9"),
  },
  {
    key: "turning-yield-bicycle",
    quote:
      "If you're turning, you must yield to bicyclists going straight through " +
      "an intersection. Never cut in front of a bicyclist.",
    source: HB,
    section: "Chapter 4 - Intersections",
    url: HB_URL,
  },

  // --- Chapter 4: right of way --------------------------------------------
  {
    key: "right-of-way-given",
    quote:
      "Remember, the right-of-way is something you give, not take. If another " +
      "driver does not follow these rules, you should always give the right-of-way.",
    source: HB,
    section: "Chapter 4 - Right-of-Way Rules",
    url: HB_URL,
  },
  {
    key: "uncontrolled-intersection",
    quote:
      "You must yield the right-of-way to any vehicle that has entered the " +
      "intersection from your right or is coming from your right.",
    source: HB,
    section: "Chapter 4 - Intersections Not Controlled by Signs or Signals",
    url: HB_URL,
  },
  {
    key: "four-way-stop",
    quote:
      "Another vehicle that has already come to a full stop A vehicle " +
      "directly to your right that has stopped at the same time as you",
    source: HB,
    section: "Chapter 4 - Four-Way Stop",
    url: HB_URL,
  },
  {
    key: "four-way-order",
    quote:
      "At a four-way stop, vehicles must go in the order they stopped . The " +
      "first to stop is the next to go . If in doubt, give the right-of-way " +
      "to the driver on your right .",
    source: HB,
    section: "Chapter 4 - Four-Way Stop",
    url: HB_URL,
  },
  {
    key: "left-turn-yield",
    quote:
      "When making any left turn, you must first yield the right-of-way to " +
      "any... Oncoming vehicle Vehicle already in the intersection Pedestrians " +
      "or bicyclists crossing your intended path of travel",
    source: HB,
    section: "Chapter 4 - Turning Left",
    url: HB_URL,
  },
  {
    key: "driveway-stop",
    quote:
      "When entering a paved thoroughfare from a private road, a driveway, or " +
      "an unpaved road, you must stop. You must then give the right-of-way to " +
      "pedestrians, bicyclists, or vehicles on the road you are entering.",
    source: HB,
    section: "Chapter 4 - Private Roads, Driveways, and Unpaved Roads",
    url: HB_URL,
  },
  {
    key: "throughway-yield",
    quote:
      "On a designated throughway, you must yield the right-of-way to traffic " +
      "on the throughway before you turn.",
    source: HB,
    section: "Chapter 4 - Throughways",
    url: HB_URL,
  },
  {
    key: "narrow-road-yield",
    quote:
      "If you are on a single or two-lane road and come to an intersection " +
      "with a divided highway or a roadway with three or more lanes, you must " +
      "yield the right-of-way.",
    source: HB,
    section: "Chapter 4 - Intersection of Single or Two-Lane Road and Multiple-Lane Road",
    url: HB_URL,
  },
  {
    key: "green-light-pedestrians",
    quote:
      "If you are stopped at a traffic light that turns green, you must yield " +
      "to pedestrians already in the crosswalk.",
    source: HB,
    section: "Chapter 4 - Pedestrians",
    url: HB_URL,
  },
  {
    key: "pedestrian-sidewalk-driveway",
    quote:
      "Pedestrians have the right-of-way if using a sidewalk or crossing a " +
      "driveway or an alley.",
    source: HB,
    section: "Chapter 4 - Pedestrians",
    url: HB_URL,
  },
  {
    key: "courtesy-crashes",
    quote:
      "Keep in mind that oncoming traffic has the right-of-way, regardless of " +
      "whether someone is waving at you.",
    source: HB,
    section: "Chapter 4 - Courtesy Crashes",
    url: HB_URL,
  },
  {
    key: "animals-stop-signal",
    quote:
      "If the animal you are passing looks scared, you must pull your vehicle " +
      "to the side and stop. Proceed only when it is safe. You must stop if a " +
      "rider or driver signals you to do so.",
    source: HB,
    section: "Chapter 4 - Animals and Horse-Drawn Vehicles",
    url: HB_URL,
  },

  // --- Chapter 4: rotaries ------------------------------------------------
  {
    key: "rotary-yield",
    quote:
      "Always yield the right-of-way to vehicles already in the rotary " +
      "(unless told differently by signs or police officers) and to pedestrians.",
    source: HB,
    section: "Chapter 4 - Rotary Traffic Rules",
    url: HB_URL,
  },
  {
    key: "rotary-lane-choice",
    quote:
      "For a three-quarter-turn, or a U-turn, enter the rotary from the left " +
      "lane. Travel through the middle or inner lane. Exit onto the right lane.",
    source: HB,
    section: "Chapter 4 - Choosing a Lane",
    url: HB_URL,
  },

  // --- Chapter 4: passing -------------------------------------------------
  {
    key: "no-shoulder-passing",
    quote:
      "Never use a breakdown lane, the shoulder of a road, or a sidewalk for " +
      "passing another vehicle.",
    source: HB,
    section: "Chapter 4 - Rules for Passing",
    url: HB_URL,
  },
  {
    key: "passing-400-feet",
    quote:
      "If you are crossing a broken yellow line to pass, you must be able to " +
      "see clearly at least 400 feet in front of you.",
    source: HB,
    section: "Chapter 4 - Passing on the Left",
    url: HB_URL,
  },
  {
    key: "passing-return-200",
    quote:
      "You must return to the right lane before any oncoming vehicle comes " +
      "within 200 feet of you.",
    source: HB,
    section: "Chapter 4 - Passing on the Left",
    url: HB_URL,
  },
  {
    key: "passing-on-right",
    quote:
      "The vehicle you are passing is making, or is about to make, a left " +
      "turn. You are driving on a one-way street. You are driving on a road " +
      "where traffic moves in one direction (such as a multiple lane highway).",
    source: HB,
    section: "Chapter 4 - Passing on the Right",
    url: HB_URL,
  },
  {
    key: "being-passed",
    quote:
      "If you are being passed by another vehicle, you must slow down and " +
      "stay to the right. Allow the other driver to pass safely. Do not speed up.",
    source: HB,
    section: "Chapter 4 - Being Passed",
    url: HB_URL,
  },
  {
    key: "passing-stopped-vehicles",
    quote:
      "Do not pass vehicles that are stopped or are turning (both at " +
      "intersections and at non-intersections). They may be stopped for " +
      "another vehicle, a person, or an animal that you cannot see.",
    source: HB,
    section: "Chapter 4 - Passing Stopped Vehicles",
    url: HB_URL,
  },

  // --- Chapter 4: school buses, trucks, trolleys --------------------------
  {
    key: "school-bus-stop",
    quote:
      "If a school bus or a school pupil transport vehicle has its lights " +
      "flashing and a stop sign extended, you must stop . It is the law . It " +
      "does not matter which side of the road you are traveling on . Remain " +
      "stopped until the lights stop flashing or the stop sign folds back .",
    source: HB,
    section: "Chapter 4 - School Buses",
    url: HB_URL,
  },
  {
    key: "school-bus-exception",
    quote:
      "The only exception to this law is if a school bus has stopped on the " +
      "other side of a divided highway with a barrier between travel " +
      "directions. In this case, you do not have to stop.",
    source: HB,
    section: "Chapter 4 - School Buses",
    url: HB_URL,
  },
  {
    key: "school-bus-fine-escalation",
    quote:
      "shall be punished by a fine of not less than $250; and for a second " +
      "offense by a fine of not less than $500 nor more than $1,000; and for " +
      "a third or subsequent offense by a fine of not less than $1,000 nor " +
      "more than $2,000.",
    source: MGL90 + ", Section 14",
    section: "Section 14 - Precautions for safety of other travelers",
    url: mgl("90", "14"),
  },
  {
    key: "school-bus-100-feet",
    quote:
      "No person shall operate a motor vehicle within a distance of 100 feet " +
      "behind a school bus.",
    source: MGL90 + ", Section 14",
    section: "Section 14 - Precautions for safety of other travelers",
    url: mgl("90", "14"),
  },
  {
    key: "trolley-eight-feet",
    quote:
      "You must not drive closer than eight feet of a trolley passenger step " +
      "when the trolley is letting passengers on or off.",
    source: HB,
    section: "Chapter 4 - Buses and Trolleys",
    url: HB_URL,
  },
  {
    key: "trolley-cannot-swerve",
    quote:
      "Remember, a trolley's path is limited to the tracks. A trolley driver " +
      "cannot swerve to avoid you.",
    source: HB,
    section: "Chapter 4 - Buses and Trolleys",
    url: HB_URL,
  },
  {
    key: "truck-lanes",
    quote:
      "On a multiple-lane highway, trucks and buses can only drive in the two " +
      "right-hand lanes. They use the far right lane for normal travel and " +
      "the second lane for passing.",
    source: HB,
    section: "Chapter 4 - Driving Too Slowly",
    url: HB_URL,
  },
  {
    key: "truck-right-turn",
    quote:
      "If you are next to a truck or bus, you are probably in a blind spot. " +
      "Watch for possible right-hand turns and stay safely behind until you " +
      "know what the driver is doing.",
    source: HB,
    section: "Chapter 4 - Passing on the Right",
    url: HB_URL,
  },
  {
    key: "slow-moving-vehicle",
    quote:
      "Most farm vehicles, construction rigs, and other slow-moving vehicles " +
      "have orange warning signs attached to the back. If you approach one, " +
      "reduce your speed and use caution.",
    source: HB,
    section: "Chapter 4 - Slow-Moving Vehicles",
    url: HB_URL,
  },

  // --- Chapter 4: funeral processions -------------------------------------
  {
    key: "funeral-right-of-way",
    quote:
      "Funeral processions have the right-of-way at intersections, with the " +
      "EXCEPTION that they must yield to emergency vehicles with flashing " +
      "lights or sirens or when directed by law enforcement.",
    source: HB,
    section: "Chapter 4 - Funeral Processions",
    url: HB_URL,
  },
  {
    key: "funeral-speed",
    quote:
      "Not drive faster than 55 MPH on a highway with a speed limit of 55 MPH " +
      "or higher. You must also not go more than 5 MPH slower than the speed " +
      "limit on any other public way.",
    source: HB,
    section: "Chapter 4 - Funeral Processions",
    url: HB_URL,
  },

  // --- Chapter 4: parking -------------------------------------------------
  {
    key: "parking-12-feet",
    quote:
      "You must always make sure that you leave at least a 12-foot wide, " +
      "clear roadway for traffic to pass.",
    source: HB,
    section: "Chapter 4 - Parking",
    url: HB_URL,
  },
  {
    key: "parking-12-inches",
    quote:
      "If you park in a business or residential district, your vehicle must " +
      "be no more than 12 inches from the curb.",
    source: HB,
    section: "Chapter 4 - Parking",
    url: HB_URL,
  },
  {
    key: "leaving-vehicle",
    quote:
      "When you leave your vehicle by itself, state law requires you to stop " +
      "the motor, set the parking brake, make sure the ignition is locked, " +
      "remove your key, and lock the door.",
    source: HB,
    section: "Chapter 4 - Parking",
    url: HB_URL,
  },
  {
    key: "parking-prohibited-distances",
    quote:
      "Within 20 feet of an intersection In a crosswalk, in front of a " +
      "driveway, or in front of a handicap-access ramp",
    source: HB,
    section: "Chapter 4 - Parking Regulations",
    url: HB_URL,
  },
  {
    key: "parking-hydrant",
    quote: "Within ten feet of a fire hydrant or fire lane",
    source: HB,
    section: "Chapter 4 - Parking Regulations",
    url: HB_URL,
  },
  {
    key: "parking-bus-stop-fine",
    quote: "In a bus stop (the penalty for parking in a posted bus stop is $100)",
    source: HB,
    section: "Chapter 4 - Parking Regulations",
    url: HB_URL,
  },
  {
    key: "parking-hp-dv",
    quote:
      "The fine for a first offense is $300. The fine for wrongful use of a " +
      "disabled person or",
    source: HB,
    section: "Chapter 4 - Parking Regulations",
    url: HB_URL,
  },
  {
    key: "parking-crosshatch",
    quote:
      "In a striped crosshatch area next to an HP-DV space, even if you have " +
      "disability plates or a placard",
    source: HB,
    section: "Chapter 4 - Parking Regulations",
    url: HB_URL,
  },
  {
    key: "parking-bike-lane",
    quote:
      "In a zone posted with a NO PARKING, NO STANDING, or NO STOPPING sign " +
      "In a bicycle lane",
    source: HB,
    section: "Chapter 4 - Parking Regulations",
    url: HB_URL,
  },
  {
    key: "parking-rural",
    quote:
      "On the Massachusetts Turnpike (fines range from $15 - $100) On a " +
      "roadway in a rural area or outside a thickly settled district",
    source: HB,
    section: "Chapter 4 - Parking Regulations",
    url: HB_URL,
  },
  {
    key: "parking-misc-prohibited",
    quote:
      "On a sidewalk, curb, center traffic island, or median During a weather " +
      "or roadway emergency Facing the wrong way against traffic",
    source: HB,
    section: "Chapter 4 - Parking Regulations",
    url: HB_URL,
  },
  {
    key: "parking-hills-downhill",
    quote: "Downhill Against a Curb - Turn your wheels inward, toward the curb.",
    source: HB,
    section: "Chapter 4 - Parking on Hills",
    url: HB_URL,
  },
  {
    key: "unpaid-parking-tickets",
    quote:
      "Unpaid parking tickets can stop you from renewing your license or " +
      "vehicle registration.",
    source: HB,
    section: "Chapter 4 - Parking Regulations",
    url: HB_URL,
  },

  // --- Chapter 4: bicycles ------------------------------------------------
  {
    key: "bicycle-full-lane",
    quote:
      "You can use the full lane anywhere, anytime, and on any street (except " +
      "limited access or express state highways where signs specifically " +
      "prohibiting bicycles have been posted), even if there is a bike lane.",
    source: HB,
    section: "Chapter 4 - Laws for Bicyclists",
    url: HB_URL,
  },
  {
    key: "bicycle-helmet",
    quote:
      "A bicycle helmet approved by the U.S. Consumer Product Safety " +
      "Commission must be worn by a bicycle operator or passenger under 16 " +
      "years old.",
    source: HB,
    section: "Chapter 4 - Laws for Bicyclists",
    url: HB_URL,
  },
  {
    key: "dooring-fine",
    quote:
      "Drivers and passengers can be fined up to $100 for opening a vehicle " +
      "door into an oncoming bicycle.",
    source: HB,
    section: "Chapter 4 - As a motorist in the presence of bicycles",
    url: HB_URL,
  },
  {
    key: "separated-bike-lane",
    quote:
      "Drivers must always check for oncoming bicyclists when turning across " +
      "a bike lane. This may require looking to the side and behind the vehicle.",
    source: HB,
    section: "Chapter 4 - Separated Bicycle Lanes",
    url: HB_URL,
  },

  // --- Chapter 5: emergency vehicles and stops ----------------------------
  {
    key: "moving-emergency-vehicle",
    quote:
      "If an emergency vehicle is coming from any direction, you must pull as " +
      "close as possible to the right side of the road. Stop until the " +
      "vehicle has passed. Slowly rolling is not acceptable.",
    source: HB,
    section: "Chapter 5 - Moving Emergency Vehicle",
    url: HB_URL,
  },
  {
    key: "follow-300-feet",
    quote:
      "It is illegal to follow closer than 300 feet behind an emergency " +
      "vehicle responding to an alarm.",
    source: HB,
    section: "Chapter 5 - Moving Emergency Vehicle",
    url: HB_URL,
  },
  {
    key: "move-over-law",
    quote:
      "The \"move-over law\" (Chapter 418 of the Acts of 2008) requires you to " +
      "be cautious and reduce your speed to a speed that is reasonable and " +
      "safe for the road conditions when you approach a stationary emergency " +
      "vehicle with flashing lights.",
    source: HB,
    section: "Chapter 5 - Stationary Emergency and Maintenance Vehicles",
    url: HB_URL,
  },
  {
    key: "fire-800-feet",
    quote:
      "It is illegal to drive by or park within 800 feet of a fire. Do not " +
      "drive over an unprotected fire hose unless directed to by a " +
      "firefighter or public safety official.",
    source: HB,
    section: "Chapter 5 - Stationary Emergency and Maintenance Vehicles",
    url: HB_URL,
  },

  // --- Chapter 5: driving emergencies -------------------------------------
  {
    key: "skid-recovery",
    quote:
      "Slowly remove your foot from the gas pedal and shift into neutral. " +
      "Don't hit the brakes. You will make the skid worse. Turn your steering " +
      "wheel in the direction of the skid.",
    source: HB,
    section: "Chapter 5 - Skidding",
    url: HB_URL,
  },
  {
    key: "brake-failure",
    quote:
      "If your vehicle does not have antilock brakes, you should pump the " +
      "brake pedal several times rapidly to build up brake fluid pressure. Do " +
      "not pump antilock brakes.",
    source: HB,
    section: "Chapter 5 - Brake Failure",
    url: HB_URL,
  },
  {
    key: "stalled-on-tracks",
    quote:
      "Get everyone out of the vehicle IMMEDIATELY and move as far from the " +
      "tracks as you can. To avoid being hit by wreckage, run in a 45 degree " +
      "angle away from the tracks in the direction that the train is coming, " +
      "then immediately call 911.",
    source: HB,
    section: "Chapter 5 - Stalling on Railroad Tracks",
    url: HB_URL,
  },
  {
    key: "breakdown-stay-inside",
    quote:
      "On a highway with a breakdown lane or shoulder, move your vehicle as " +
      "far from the travel lane as you can. Stay in your vehicle. To avoid " +
      "serious injury, do not stand near the travel lane or in the breakdown lane.",
    source: HB,
    section: "Chapter 5 - Breakdowns",
    url: HB_URL,
  },
  {
    key: "warning-triangles",
    quote:
      "If you stop on a two-lane road carrying traffic in both directions or " +
      "on an undivided highway, place your warning triangles or LED flares: " +
      "10 feet behind your vehicle 100 feet behind your vehicle 100 feet in " +
      "front of your vehicle",
    source: HB,
    section: "Chapter 5 - Breakdowns",
    url: HB_URL,
  },
  {
    key: "vehicle-in-water",
    quote:
      "Unfasten your safety belt and escape through a window. If you have " +
      "power windows, open them quickly before the water causes them to stop " +
      "working. Do not open a door.",
    source: HB,
    section: "Chapter 5 - Vehicle Drives into Water",
    url: HB_URL,
  },

  // --- Chapter 5: crashes -------------------------------------------------
  {
    key: "driver-removal-law",
    quote:
      "If there are no injuries, the Driver Removal Law requires that " +
      "vehicles be moved out of travel lanes to a safe location.",
    source: HB,
    section: "Chapter 5 - If You Are Involved in a Crash",
    url: HB_URL,
  },
  {
    key: "crash-report-threshold",
    quote:
      "You must report any motor vehicle crash you are in that causes someone " +
      "to be killed or hurt, or that causes $1,000 or more in property " +
      "damage. You must file a written report with the RMV within five days " +
      "of the crash.",
    source: HB,
    section: "Chapter 5 - Reporting a Crash",
    url: HB_URL,
  },
  {
    key: "crash-report-copies",
    quote:
      "1. Mail or deliver one copy to the local police department in the city " +
      "or town where the crash happened. 2. Mail one copy to your Insurance " +
      "Company. 3. Mail one copy to the RMV at the address below.",
    source: HB,
    section: "Chapter 5 - Reporting a Crash",
    url: HB_URL,
  },
  {
    key: "leaving-scene-penalties",
    quote:
      "Up to $200 or up to two years imprisonment, or both, for leaving the " +
      "scene after a crash causing damage to another vehicle or other property",
    source: HB,
    section: "Chapter 5 - Hit and Run Crashes",
    url: HB_URL,
  },
  {
    key: "leaving-scene-duty",
    quote:
      "You must stay on the scene, properly identify yourself, give aid if " +
      "possible, and call for emergency assistance if needed .",
    source: HB,
    section: "Chapter 5 - Hit and Run Crashes",
    url: HB_URL,
  },
  {
    key: "witness-crash",
    quote:
      "If anyone has flares, emergency triangles, or reflectors, put them 200 " +
      "feet or more in front of and behind the crash to warn other drivers.",
    source: HB,
    section: "Chapter 5 - If You Witness a Crash",
    url: HB_URL,
  },
];
