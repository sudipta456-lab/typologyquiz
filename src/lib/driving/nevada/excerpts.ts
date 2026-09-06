import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Nevada bank. Three sources sit behind
// them, and each is here for a reason:
//
//  - The Nevada Driver's Handbook, published by the Nevada Department of Motor
//    Vehicles. The cover carries the publisher's only edition label, "DMV 700 /
//    March 2024", and the copyright line on the inside cover reads 2024. It runs
//    86 pages, and its printed page numbers happen to line up exactly with the
//    PDF's own page numbers, so the page in each `section` below is both. The
//    handbook is the book the knowledge test is written from - it says so on
//    page 3 - and most of what is quoted here comes from it.
//  - The Nevada Revised Statutes, chapters 483, 484B, 484C, 484D and 484E,
//    published by the Legislative Counsel Bureau. The handbook is explicit that
//    it "does not give the exact wording of traffic laws and it does not discuss
//    all of them", and it leaves out numbers the test still expects: the 80 mph
//    ceiling on any Nevada speed limit, the two-cycle rule that lets a stranded
//    motorcyclist through a dead red, the fact that the seat belt law is
//    enforced only as a secondary offence. Those come from the statute.
//  - Two Nevada DMV web pages, Driver License Testing and Get a Teen Instruction
//    Permit. The handbook never states the knowledge test's length, its pass
//    mark, or the rule that ends the test early; the DMV's own pages carry all
//    of it, and they are revised far more often than the book.
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
// that has been tidied up is no longer a quote. Among them: the handbook's
// "must be in an approved child restraint system pursuant per NRS 484B.157",
// its "Nevada teens within a 30 miles of a DMV-approved driver's education
// school", and its "Nevada defines these difference based on motor size".
//
// Two statutes carry more than one version of the same section in the published
// chapter, one marked "[Effective through June 30, 2026]" and one "[Effective
// July 1, 2026]". The operative text on the date this bank was checked is the
// July 1, 2026 reading, and where the two differ the quote below is taken from
// it. For NRS 484C.110 the published chapter also carries conditional versions
// keyed to a repeal of the federal 0.08 mandate that has not happened; the 0.08
// reading quoted here is the one in force.
//
// The statute quotes were read from an Internet Archive capture of the
// legislature's own URL, because leg.state.nv.us returns a Cloudflare block
// page to every automated client from this machine. The `url` on each is the
// live official one. See docs/driving/research/nevada.md.

export const nevadaExcerpts: HandbookExcerpt[] = [
  {
    key: "lic-30-days",
    quote:
      "Drivers moving into Nevada from another state must apply " +
      "for a license within 30 days after becoming a resident.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Getting Your Nevada Driver's License (page 6)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=6",
  },
  {
    key: "lic-age-16",
    quote:
      "You must also be at least 16 years old and provide proof " +
      "of your full legal name, age, Social Security Number if " +
      "one has been issued to you, and Nevada residency.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Getting Your Nevada Driver's License (page 6)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=6",
  },
  {
    key: "lic-eight-years",
    quote:
      "A first-time Nevada driver license issued to persons under " +
      "age 65 will be valid for eight years and expires on your " +
      "birthday unless limited-term immigration documents are " +
      "presented as evidence of your name and date of birth.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Getting Your Nevada Driver's License (page 6)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=6",
  },
  {
    key: "lic-65-four-years",
    quote:
      "Driver licenses for individuals aged 65 and older are " +
      "valid for four years. Identification Cards are valid for " +
      "eight years.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Getting Your Nevada Driver's License (page 6)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=6",
  },
  {
    key: "lic-cosigner",
    quote:
      "If you are under 18 years old, a parent who has custody, a " +
      "legal guardian, or other person authorized by NRS 483.300 " +
      "must co-sign your application.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Getting Your Nevada Driver's License (page 6)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=6",
  },
  {
    key: "lic-cosigner-liability",
    quote:
      "The co-signer shares liability for any damages caused by " +
      "the minor's negligence or willful misconduct while " +
      "driving.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Getting Your Nevada Driver's License (page 6)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=6",
  },
  {
    key: "lic-one-license",
    quote: "A resident of Nevada may hold only one driver's license or identification card.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - New Nevada Residents (page 7)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=7",
  },
  {
    key: "lic-surrender-other",
    quote:
      "If you have a license or identification card from another " +
      "jurisdiction (this includes the 50 United States and its " +
      "territories and foreign countries), you must surrender it " +
      "to get a Nevada license or identification card.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - New Nevada Residents (page 7)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=7",
  },
  {
    key: "test-based-on-manual",
    quote:
      "The knowledge test for your Nevada license is based on the " +
      "information in this manual.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Front matter - About This Handbook (page 3)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=3",
  },
  {
    key: "test-knowledge-subject",
    quote:
      "Your understanding of highway signs and markings, traffic " +
      "laws and safe driving practices will be tested.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Testing (page 12)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=12",
  },
  {
    key: "test-oral",
    quote:
      "If you have problems reading or understanding the written " +
      "test, you may request an oral examination.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Testing (page 12)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=12",
  },
  {
    key: "test-fees",
    quote:
      "A $25.00 fee is charged for all initial knowledge and/or " +
      "skills tests administered. A $10 fee is charged for any " +
      "retests needed before you can get your license.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Testing (page 12)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=12",
  },
  {
    key: "test-vehicle-condition",
    quote:
      "The vehicle must be in safe operating condition and all " +
      "equipment must be in good working order, including your " +
      "brakes, speedometer, and muffler.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Testing (page 12)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=12",
  },
  {
    key: "test-no-passengers",
    quote: "Passengers and animals are not allowed in the vehicle during the road test.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Testing (page 12)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=12",
  },
  {
    key: "test-cell-fail",
    quote: "The use of a cellular phone during a drive test will result in automatic failure.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Testing (page 12)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=12",
  },
  {
    key: "test-no-assist",
    quote:
      "When taking your driving test, you will not be allowed to " +
      "use certain safety features such as parking assist, cruise " +
      "control, etc.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Testing (page 12)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=12",
  },
  {
    key: "young-002-revoked",
    quote:
      "Revoked for 185 days if a blood, breath or urine test " +
      "indicates at least 0.02% but less than 0.08% by weight of " +
      "alcohol in your blood.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Young Drivers (page 13)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=13",
  },
  {
    key: "young-alcohol-drugs",
    quote:
      "Suspended or issuance delayed for up to two years for: - " +
      "Placing graffiti on or defacing public or private " +
      "property. - Any criminal activity involving alcohol or a " +
      "controlled substance. - Using, possessing, selling or " +
      "distributing a controlled substance. - Purchasing, " +
      "consuming, or possessing an alcoholic beverage.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Young Drivers (page 13)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=13",
  },
  {
    key: "young-firearm",
    quote:
      "Suspended or issuance delayed for up to one year for " +
      "handling or possessing a firearm or having a firearm under " +
      "your control in violation of NRS 202.300.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Young Drivers (page 13)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=13",
  },
  {
    key: "young-truancy",
    quote:
      "Suspended for at least 30 days but not more than 6 months " +
      "or have issuance delayed for 30 days for a first offense " +
      "of habitual truancy.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Young Drivers (page 13)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=13",
  },
  {
    key: "young-speed-contest",
    quote:
      "Suspended for a period of not less than six months but not " +
      "more than two years if found guilty of participating in, " +
      "or organizing, an unauthorized speed contest.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Young Drivers (page 13)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=13",
  },
  {
    key: "young-log",
    quote:
      "you will be required to present a Certificate of " +
      "Completion of a course in driver's education and a " +
      "Beginning Driver Experience Log, DMV Form DLD-130.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Young Drivers (page 13)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=13",
  },
  {
    key: "driver-ed-100-hours",
    quote:
      "If you are not within 30 miles of a DMV-approved school " +
      "and it is not possible for you to access the internet for " +
      "a driver's education class, you need to complete 100 hours " +
      "of behind-the-wheel driving experience, 10 hours of which " +
      "must be completed in the dark.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Driver Education and Behind the Wheel Experience (page 14)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=14",
  },
  {
    key: "driver-ed-clean-6-months",
    quote:
      "Minors must also remain free of any at-fault crashes, " +
      "moving violation convictions and any type of alcohol or " +
      "drug conviction for six months prior to receiving a " +
      "driver's license.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Driver Education and Behind the Wheel Experience (page 14)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=14",
  },
  {
    key: "bhw-50-hours",
    quote:
      "Nevada teens within a 30 miles of a DMV-approved driver's " +
      "education school are required to complete 50 hours of " +
      "supervised experience behind the wheel, 10 of which must " +
      "be completed at night.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Driver Education and Behind the Wheel Experience (page 14)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=14",
  },
  {
    key: "permit-one-year",
    quote:
      "A Nevada instruction permit is valid for one year. You " +
      "must carry the permit with you when you are driving.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Instruction Permits; Passenger Restrictions and Curfews (page 15)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=15",
  },
  {
    key: "permit-requirements",
    quote:
      "To obtain an instruction permit, you must: Be at least 15½ " +
      "years old; Complete a driver license application; Pass a " +
      "vision test; Pass a knowledge test about Nevada's traffic " +
      "laws, highway signs, markings and safe driving practices; " +
      "and Have a parent or guardian available to authorize " +
      "issuance.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Instruction Permits; Passenger Restrictions and Curfews (page 15)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=15",
  },
  {
    key: "permit-supervisor",
    quote:
      "When you are driving, you must be accompanied by a " +
      "licensed driver who: Is 21 years of age or older; Has at " +
      "least one year of licensed driving experience; and Is " +
      "seated beside you.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Instruction Permits; Passenger Restrictions and Curfews (page 15)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=15",
  },
  {
    key: "permit-hold-6-months",
    quote:
      "If you are under the age of 18, you must hold an " +
      "instruction permit for at least 6 months prior to applying " +
      "for a driver license.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Instruction Permits; Passenger Restrictions and Curfews (page 15)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=15",
  },
  {
    key: "gdl-passengers",
    quote:
      "Applicants who are 16 or 17 years old when they receive " +
      "their driver's license will not be allowed to carry " +
      "passengers under the age of 18 (except for immediate " +
      "family members) for the first 6 months they drive per NRS " +
      "483.2523.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Instruction Permits; Passenger Restrictions and Curfews (page 15)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=15",
  },
  {
    key: "gdl-curfew",
    quote:
      "a minor shall not operate a motor vehicle between the " +
      "hours of 10 p.m. and 5 a.m. unless he/she is driving to or " +
      "from a scheduled event. This curfew remains in effect " +
      "until the driver turns 18, regardless of when the driver " +
      "license was issued.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Instruction Permits; Passenger Restrictions and Curfews (page 15)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=15",
  },
  {
    key: "mc-permit-daylight",
    quote:
      "When driving with a motorcycle instruction permit, you may " +
      "drive during daylight hours only. You may not carry " +
      "passengers or drive on freeways or other high-speed " +
      "roadways.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Motorcycle Instruction Permit and License (page 18)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=18",
  },
  {
    key: "mc-helmet",
    quote: "When driving your motorcycle, you are required to wear a helmet.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Motorcycle Instruction Permit and License (page 18)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=18",
  },
  {
    key: "address-30-days",
    quote:
      "Under Nevada law, you are required to notify the DMV of " +
      "any address or name change within 30 days.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Change of Address or Name; Restricted License (page 19)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=19",
  },
  {
    key: "restricted-license",
    quote:
      "Restricted licenses may be issued, under special " +
      "circumstances, to: Drivers age 14 and 15 who have " +
      "demonstrated family hardship or who need to drive to and " +
      "from school.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Change of Address or Name; Restricted License (page 19)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=19",
  },
  {
    key: "id-card-demerits",
    quote:
      "If you receive 12 or more demerits in a 12-month period, " +
      "you will be required to reinstate your driving privileges " +
      "before you are eligible to receive a driver license.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Identification Cards (page 20)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=20",
  },
  {
    key: "class-c",
    quote:
      "Class C - Cars, vans, pickups; may tow a vehicle 10,000 " +
      "pounds or less Combination of vehicles may not exceed 70 " +
      "feet",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Driver License Classifications; Restrictions (page 16)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=16",
  },
  {
    key: "restriction-b",
    quote: "Restriction B - Driver needs to wear glasses or contact lenses",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 1 - Driver License Classifications; Restrictions (page 16)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=16",
  },
  {
    key: "belt-age-six",
    quote:
      "The driver and any passengers age six and older must wear " +
      "safety belts if the vehicle is equipped with them.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 2 - Buckle Up; Unattended Children and Pets (page 25)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=25",
  },
  {
    key: "child-restraint",
    quote:
      "Children under age six and those who measure less than 57 " +
      "inches tall must be in an approved child restraint system " +
      "pursuant per NRS 484B.157.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 2 - Buckle Up; Unattended Children and Pets (page 25)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=25",
  },
  {
    key: "rear-facing-two",
    quote:
      "Children under the age of two must be secured in a " +
      "rear-facing child restraint system in the back seat of the " +
      "motor vehicle.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 2 - Buckle Up; Unattended Children and Pets (page 25)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=25",
  },
  {
    key: "child-lap",
    quote:
      "A child should never be held in a lap or buckled with " +
      "someone else into a single safety belt.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 2 - Buckle Up; Unattended Children and Pets (page 25)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=25",
  },
  {
    key: "unattended-child",
    quote:
      "Never leave a child aged 7 or younger unattended in a " +
      "vehicle if the conditions present a significant risk to " +
      "the health and safety of that child unless the child is " +
      "being supervised by and is within sight of a person at " +
      "least 12 years old.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 2 - Buckle Up; Unattended Children and Pets (page 25)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=25",
  },
  {
    key: "unattended-pet",
    quote:
      "It is illegal to leave a dog or cat unattended in a " +
      "vehicle during periods of extreme heat or cold.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 2 - Buckle Up; Unattended Children and Pets (page 25)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=25",
  },
  {
    key: "airbag-infant",
    quote: "Never put an infant in the front seat if the car has a passenger side airbag.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 2 - Traveling with Babies and Children (page 26)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=26",
  },
  {
    key: "backseat-safest",
    quote: "The back seat generally is the safest place in the car.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 2 - Traveling with Babies and Children (page 26)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=26",
  },
  {
    key: "penny-test",
    quote:
      "If any part of Lincoln's head is covered by the tread, the " +
      "tire has a safe amount of tread.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Getting Ready to Drive; Tire Safety (page 27)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=27",
  },
  {
    key: "signs-three-purposes",
    quote:
      "Signs have three purposes: they regulate, warn, and " +
      "inform. The shapes and colors of highway signs have " +
      "special meanings. This helps you understand the message " +
      "quickly.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signs (page 28)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=28",
  },
  {
    key: "signs-stop",
    quote:
      "Stop signs mean you must: Come to a full stop behind the " +
      "stop sign at the crosswalk or stop line. If the view of " +
      "the cross street is blocked, slowly move forward to " +
      "determine when it is safe to proceed.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signs (page 29)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=29",
  },
  {
    key: "four-way-stop",
    quote:
      "At a four-way stop, wait for other vehicles already in the " +
      "intersection. Allow vehicles that reach the intersection " +
      "before you to go first.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signs (page 29)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=29",
  },
  {
    key: "signs-yield",
    quote:
      "Yield signs mean the same as stop signs except you may " +
      "proceed without coming to a full stop if it is safe to do " +
      "so.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signs (page 29)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=29",
  },
  {
    key: "yield-uturn",
    quote: "Yield the right-of-way to vehicles making a U-turn from an intersection.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signs (page 29)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=29",
  },
  {
    key: "emergency-yield",
    quote:
      "You must yield the right-of-way to any police vehicle, " +
      "fire engine, ambulance, or other emergency vehicle using a " +
      "siren and red lights. Drive to the right edge of the road " +
      "and stop until the emergency vehicle(s) have passed. " +
      "However, never stop in an intersection.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signs (page 29)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=29",
  },
  {
    key: "signs-regulatory",
    quote:
      "Regulatory signs are rectangular and have a white " +
      "background. They inform you of traffic laws and " +
      "regulations. You must obey these signs.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signs (page 29)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=29",
  },
  {
    key: "signs-warning",
    quote:
      "Warning signs are yellow, diamond-shaped, with black " +
      "letters and symbols. They tell the driver there are " +
      "special conditions or hazards ahead.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signs (page 29)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=29",
  },
  {
    key: "signs-crossbuck",
    quote:
      "Railroad crossing signs warn drivers of the need to slow " +
      "down and possibly stop for a train. The crossbuck (X) " +
      "marks the actual location of the train tracks.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signs (page 29)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=29",
  },
  {
    key: "signs-route",
    quote:
      "Route signs and markers are usually shaped like a shield, " +
      "but there are different shapes and colors. These signs " +
      "show U.S., Interstate and state route numbers.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signs (page 29)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=29",
  },
  {
    key: "workzone-signs",
    quote:
      "Construction and maintenance signs are used to notify " +
      "drivers of possible danger in or near work areas. Most " +
      "signs used in highway and street work areas are " +
      "diamond-shaped.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "workzone-fines",
    quote: "Violations in work zones result in increased traffic fines.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "signal-dark",
    quote:
      "When traffic control lights are not working, drivers must " +
      "come to a full stop before proceeding through the " +
      "intersection.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "signal-red",
    quote:
      "A red light means STOP. Drivers must come to a complete " +
      "stop before they reach the intersection. Stop your vehicle " +
      "behind the crosswalk or stop line. If there is no stop " +
      "line or crosswalk, stop before entering the intersection. " +
      "Remain stopped until the light turns green.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "signal-right-on-red",
    quote:
      "Where not prohibited by signs, a right turn may be made on " +
      "a red light after coming to a complete stop.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "signal-yellow",
    quote:
      "A yellow light means CAUTION. A steady yellow light is a " +
      "warning that the light will be turning red. If a driver " +
      "has not entered the intersection, they must stop. If they " +
      "are already in the intersection, they should continue " +
      "moving and clear it safely.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "signal-green",
    quote:
      "A green light means drivers may go straight ahead, turn " +
      "right or turn left unless a sign forbids the turn.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "signal-flashing-red",
    quote:
      "A flashing red light means that drivers must come to a " +
      "full stop. They may go only when the road is clear and " +
      "they have the right-of-way. The signal has the same " +
      "meaning as a stop sign.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "signal-flashing-yellow",
    quote: "A flashing yellow light means drivers may proceed with caution.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "signal-red-arrow",
    quote:
      "A red arrow means drivers cannot make the movement shown " +
      "by the arrow. The red arrow may be shown alone or with " +
      "another signal. Unless entering the intersection to make a " +
      "movement allowed by another signal, drivers facing a red " +
      "arrow must stop.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "signal-fya",
    quote:
      "A flashing yellow arrow means drivers must yield to " +
      "oncoming traffic and pedestrians. They may complete the " +
      "turn when it is safe to do so.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "signal-green-arrow",
    quote:
      "A green arrow means drivers may go in the direction shown " +
      "by the arrow, but they must yield to pedestrians, bicycles " +
      "and traffic already in the intersection. When a green turn " +
      "arrow is showing, the turn is protected from other " +
      "traffic.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "signal-left-on-red",
    quote:
      "Drivers may make a left turn at a red light only when you " +
      "are turning from a one-way street onto another one-way " +
      "street that has traffic moving to the left.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signs, Signals and Markings: Signals (page 30)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=30",
  },
  {
    key: "ped-countdown",
    quote:
      "DON'T WALK, Wait, or Upraised Hand Symbol: If illuminated, " +
      "flashing, and accompanied by countdown timer, pedestrians " +
      "may proceed across the roadway in the direction of the " +
      "signal but must complete the crossing before the countdown " +
      "time gets to zero.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signals: Pedestrian Crossing; Walk and Don't Walk Signals (page 31)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=31",
  },
  {
    key: "mark-broken-white",
    quote:
      "Broken or dashed white lines are used to mark traffic " +
      "lanes on roads which have more than one lane moving in the " +
      "same direction. You should drive within these lanes and " +
      "not straddle the lines.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Highway Markings (page 32)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=32",
  },
  {
    key: "mark-solid-white",
    quote:
      "When solid white lines separate lanes of traffic moving in " +
      "the same direction, do not change lanes or pass.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Highway Markings (page 32)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=32",
  },
  {
    key: "mark-yellow",
    quote: "Yellow lines separate lanes of traffic moving in opposite directions.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Highway Markings (page 32)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=32",
  },
  {
    key: "mark-solid-yellow",
    quote: "Solid yellow lines indicate that you are not YES NO to cross over or pass.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Highway Markings (page 32)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=32",
  },
  {
    key: "mark-double-yellow",
    quote: "Double yellow lines mean you cannot pass if the lines on your side are solid",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Highway Markings (page 32)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=32",
  },
  {
    key: "mark-crosswalk-unmarked",
    quote:
      "At some intersections, especially in small towns or " +
      "residential areas, crosswalks may not be marked. Drivers " +
      "still must yield to pedestrians in the intersection.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Highway Markings (page 32)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=32",
  },
  {
    key: "mark-center-turn-lane",
    quote:
      "Drivers may not travel more than 200 feet in a center turn " +
      "lane before making a left-hand turn and they may not " +
      "travel more than 50 feet in a center lane after making a " +
      "left-hand turn onto the highway before merging with " +
      "traffic per NRS 484B.223 (3).",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Highway Markings (page 32)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=32",
  },
  {
    key: "mark-center-not-travel",
    quote: "These are not travel lanes and may not be used for passing.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Highway Markings (page 32)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=32",
  },
  {
    key: "rr-15-feet",
    quote:
      "If there is a stop sign at the crossing, drivers must " +
      "stop. If a train is coming, drivers must stop at least 15 " +
      "feet from the tracks.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Railroad Crossings; School Areas (page 33)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=33",
  },
  {
    key: "rr-buses",
    quote:
      "Even if there is no stop signal and no train is coming, " +
      "passenger buses and trucks carrying flammable or dangerous " +
      "materials must stop.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Railroad Crossings; School Areas (page 33)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=33",
  },
  {
    key: "rr-gate",
    quote: "If a gate is lowered, you may not proceed around it even if a train is not visible.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Railroad Crossings; School Areas (page 33)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=33",
  },
  {
    key: "rr-park-50",
    quote: "Never park within 50 feet of the nearest rail of a railroad.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Railroad Crossings; School Areas (page 33)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=33",
  },
  {
    key: "rr-stuck",
    quote:
      "If a driver gets stuck on the tracks, they should leave " +
      "the vehicle immediately, locate the Blue Emergency " +
      "Notification System sign at the railroad crossing and " +
      "notify the railroad and local law enforcement.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Railroad Crossings; School Areas (page 33)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=33",
  },
  {
    key: "school-zone-speed",
    quote:
      "In school zones, the speed limit is either 15 or 25 mph. " +
      "These speed limits are in effect on school days from a " +
      "half hour before school begins to a half hour after school " +
      "ends, unless otherwise posted.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Railroad Crossings; School Areas (page 33)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=33",
  },
  {
    key: "school-guard",
    quote:
      "If a crossing guard is present in a school zone crosswalk, " +
      "motorists must wait until the guard is completely out of " +
      "the crosswalk before proceeding.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Railroad Crossings; School Areas (page 33)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=33",
  },
  {
    key: "school-guard-misdemeanor",
    quote: "Violating the direction of a school crossing guard is a misdemeanor in Nevada.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Railroad Crossings; School Areas (page 33)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=33",
  },
  {
    key: "school-uturn",
    quote:
      "Nevada law prohibits the operator of a vehicle from making " +
      "a U-turn in a school zone except when there are no " +
      "children present, it is a day when no school is in session",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Railroad Crossings; School Areas (page 33)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=33",
  },
  {
    key: "row-no-right",
    quote: "Nevada law does not give anyone the \"right-of-way\" - it only says who must yield.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Right-of-Way (page 34)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=34",
  },
  {
    key: "row-failure-leading",
    quote: "Failure to yield the right-of-way is the leading cause of crashes in Nevada.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Right-of-Way (page 34)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=34",
  },
  {
    key: "row-uncontrolled",
    quote:
      "At an intersection where there are no traffic signs or " +
      "signals, the vehicle on your right should usually go " +
      "first.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Right-of-Way (page 34)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=34",
  },
  {
    key: "row-already-in",
    quote:
      "A vehicle already in the intersection has the right-of-way " +
      "over others just getting there.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Right-of-Way (page 34)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=34",
  },
  {
    key: "row-left-turn",
    quote:
      "A vehicle going straight ahead that is already in the " +
      "intersection has the right-of-way over one turning left. " +
      "After yielding (and properly signaling), the vehicle " +
      "turning left then has the right-of-way.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Right-of-Way (page 34)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=34",
  },
  {
    key: "row-minor-road",
    quote:
      "Vehicles entering a main road from a minor road, private " +
      "road or driveway must yield the right-of-way to all " +
      "traffic on the main road and to pedestrians.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Right-of-Way (page 34)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=34",
  },
  {
    key: "row-four-way",
    quote:
      "At a four-way stop, the driver reaching the intersection " +
      "first gets to go first, after stopping completely.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Right-of-Way (page 34)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=34",
  },
  {
    key: "row-freeway",
    quote:
      "When entering a freeway, yield the right-of-way to traffic " +
      "on the freeway. You may enter only when it is safe to do " +
      "so.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Right-of-Way (page 34)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=34",
  },
  {
    key: "row-funeral",
    quote:
      "Yield to funeral processions and let the vehicles with " +
      "headlights on pass as a group.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Right-of-Way (page 34)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=34",
  },
  {
    key: "row-blind",
    quote:
      "A person who is blind or visually impaired, on foot and " +
      "using a guide dog or other service animal, or carrying a " +
      "white cane or walking stick, has the right-of-way on a " +
      "highway, street or road in this state.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Right-of-Way (page 34)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=34",
  },
  {
    key: "speed-basic-rule",
    quote:
      "Nevada has a Basic Rule for driving at a \"reasonable or " +
      "proper\" speed. This means that in addition to any posted " +
      "speed limits, drivers must consider: The amount and type " +
      "of traffic",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Controlling Speed (page 35)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=35",
  },
  {
    key: "speed-safe-less",
    quote:
      "It also means that drivers are never to drive at a speed " +
      "that endangers you or anyone else. Depending on " +
      "conditions, the safe speed may be considerably less than " +
      "the posted speed limit.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Controlling Speed (page 35)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=35",
  },
  {
    key: "speed-slow-right",
    quote:
      "When there are two or more lanes of traffic moving in the " +
      "same direction, slower traffic must move to the right and " +
      "allow other drivers to pass.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Controlling Speed (page 35)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=35",
  },
  {
    key: "speed-normal-conditions",
    quote:
      "Remember: Speed limits are set for normal driving " +
      "conditions. When bad weather makes it hard to see or makes " +
      "the road slick, drivers need to adjust their speed.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Controlling Speed (page 35)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=35",
  },
  {
    key: "freeway-merge-yield",
    quote: "As you enter from a merging lane, you must yield to traffic already on the freeway.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Freeway Driving; Ramp Meters (page 36)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=36",
  },
  {
    key: "freeway-look-ahead",
    quote: "Look ahead much farther down the road - at least 20 to 30 seconds.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Freeway Driving; Ramp Meters (page 36)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=36",
  },
  {
    key: "freeway-left-lane",
    quote: "On these roads, drivers should leave the extreme left lane for faster traffic.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Freeway Driving; Ramp Meters (page 36)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=36",
  },
  {
    key: "ramp-meters",
    quote:
      "If a freeway entrance is equipped with ramp meters and " +
      "they are switched on, you must: Pull up to the stop line " +
      "and stop at a red light; Be alert. The signal will change " +
      "more rapidly than a signal at an intersection; Wait for " +
      "the green light;",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Freeway Driving; Ramp Meters (page 36)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=36",
  },
  {
    key: "hov-lines",
    quote:
      "For carpool lanes, there will be specific locations to " +
      "enter or exit the carpool lane. A double solid white line " +
      "means that you cannot cross the lines to enter or exit the " +
      "car pool lane. You can enter or exit the carpool lane " +
      "where there is a broken white line.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - High-Occupancy Vehicle Lanes (page 39)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=39",
  },
  {
    key: "lane-red-x",
    quote: "A red X with CLOSED means drivers cannot drive in the lane under the red X.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Active Traffic Management Signs (page 37)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=37",
  },
  {
    key: "lane-yellow-x-merge",
    quote:
      "A yellow X with MERGE means the lane is ending and the " +
      "driver should prepare to safely merge into another open " +
      "lane.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Active Traffic Management Signs (page 37)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=37",
  },
  {
    key: "exit-missed",
    quote:
      "If you miss the exit ramp, never turn around or back up. " +
      "Go to the next exit, get back on the freeway in the " +
      "opposite direction, and return to the exit.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Exiting a Freeway; Anti-Lock Braking Systems (page 40)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=40",
  },
  {
    key: "abs-brake-steer",
    quote:
      "In simple terms, all drivers must do is brake and steer: " +
      "push the brake pedal down hard, hold it down firmly and " +
      "steer in the direction you want the car to go.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Exiting a Freeway; Anti-Lock Braking Systems (page 40)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=40",
  },
  {
    key: "abs-pumping",
    quote:
      "Drivers should be aware that removing steady pressure from " +
      "the brake pedal or pumping the brakes will disengage, or " +
      "\"turn off,\" the ABS.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Exiting a Freeway; Anti-Lock Braking Systems (page 40)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=40",
  },
  {
    key: "stopping-rear-end",
    quote:
      "The rear-end collision is the number one crash type on " +
      "Nevada's streets and highways.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Stopping (page 41)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=41",
  },
  {
    key: "stopping-reaction",
    quote: "Highway safety studies show normal reaction times are 2 to 2.5 seconds.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Stopping (page 41)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=41",
  },
  {
    key: "stopping-four-times",
    quote:
      "The most important point for any driver to remember is " +
      "that if you double your speed - say from 30 mph to 60 mph " +
      "- your braking distance does not become twice as long. It " +
      "becomes four times as long.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Stopping (page 41)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=41",
  },
  {
    key: "stopping-ice",
    quote:
      "if you are going 30 mph, your stopping distance on ice " +
      "would be 373 feet, well over the length of a football " +
      "field.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Stopping (page 41)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=41",
  },
  {
    key: "hydroplane",
    quote:
      "Most cars will begin to lose traction and hydroplane " +
      "between speeds of 35 and 55 mph in heavy rainfall.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Stopping (page 41)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=41",
  },
  {
    key: "look-12-seconds",
    quote:
      "Look ahead at least 12 seconds. This means at a minimum " +
      "you look ahead to where your vehicle will be 12 seconds " +
      "from now.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Defensive Driving Tips (page 42)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=42",
  },
  {
    key: "follow-two-seconds",
    quote:
      "Stay behind at least two seconds. If you are driving 40 " +
      "mph or less, stay at least two seconds behind the vehicle " +
      "in front of you. This is a minimum following distance.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Defensive Driving Tips (page 42)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=42",
  },
  {
    key: "intersection-look",
    quote:
      "When approaching an intersection, it is important to look " +
      "in all directions. You should look left, right, and left " +
      "again just before entering the intersection.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Defensive Driving Tips (page 42)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=42",
  },
  {
    key: "cell-handsfree",
    quote:
      "The use of a cellular phone or other handheld wireless " +
      "communications device to engage in voice communications is " +
      "prohibited unless the device is used with a hands-free " +
      "accessory.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - Cell Phones and Texting; If You Are Stopped by " +
      "Law Enforcement (page 43)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=43",
  },
  {
    key: "cell-texting",
    quote:
      "The use of a cellular phone or other handheld wireless " +
      "communications device to manually send, read, search the " +
      "Internet, or engage in non-voice communications with " +
      "another person, including texting, electronic messaging " +
      "and instant messaging is prohibited.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - Cell Phones and Texting; If You Are Stopped by " +
      "Law Enforcement (page 43)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=43",
  },
  {
    key: "cell-emergency",
    quote:
      "You may use the device to report an emergency if stopping " +
      "the vehicle would be inadvisable, impractical or " +
      "dangerous.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - Cell Phones and Texting; If You Are Stopped by " +
      "Law Enforcement (page 43)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=43",
  },
  {
    key: "police-stop",
    quote:
      "Stop your vehicle as far out of the lane of traffic as " +
      "possible. Stay in your vehicle. If you are stopped at " +
      "night, turn on the interior light. Good lighting assists " +
      "good communication.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - Cell Phones and Texting; If You Are Stopped by " +
      "Law Enforcement (page 43)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=43",
  },
  {
    key: "police-hands",
    quote:
      "Keep your hands in plain view at all times (preferably on " +
      "the steering wheel) and refrain from making any sudden " +
      "movements. Wait for the officer to request your license, " +
      "registration and evidence of insurance.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - Cell Phones and Texting; If You Are Stopped by " +
      "Law Enforcement (page 43)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=43",
  },
  {
    key: "roundabout-yield",
    quote:
      "Entering traffic must yield the right-of-way to the " +
      "traffic circulating within the roundabout. All traffic " +
      "moves in ONE DIRECTION around the roundabout - " +
      "COUNTERCLOCKWISE.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Roundabouts (page 44)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=44",
  },
  {
    key: "roundabout-lane",
    quote:
      "Use the left lane to turn left, complete a U-turn, or to " +
      "go straight. Use the right lane to turn right or to go " +
      "straight.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Roundabouts (page 44)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=44",
  },
  {
    key: "roundabout-signal",
    quote: "Use your right turn signal when exiting.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Roundabouts (page 44)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=44",
  },
  {
    key: "roundabout-apron",
    quote: "Cars should not use the truck apron.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Roundabouts (page 44)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=44",
  },
  {
    key: "hand-signals",
    quote:
      "Left turn - Extend left arm horizontally out of open " +
      "window Right turn - Extend left arm with elbow bent upward " +
      "at about a 90-degree angle Slowing or stop - Extend left " +
      "arm downward, with palm of hand to the rear",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signaling; Turning (page 45)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=45",
  },
  {
    key: "signal-100-300",
    quote:
      "Signal your turn at least 100 feet ahead (about 10 car " +
      "lengths) on city streets or 300 feet (30 car lengths) on " +
      "open highways.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signaling; Turning (page 45)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=45",
  },
  {
    key: "turn-right-lane",
    quote:
      "When turning right, you must be in the extreme right-hand " +
      "travel lane or a lane designated for right turns. If a " +
      "single lane is provided to be used only for turning, you " +
      "may only enter the lane if you are making a right turn, " +
      "and may not travel through an intersection while driving " +
      "in the right-turn lane.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signaling; Turning (page 45)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=45",
  },
  {
    key: "turn-left-wheels",
    quote:
      "When turning left, keep your wheels pointed straight ahead " +
      "until you begin to actually complete the turn.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Signaling; Turning (page 45)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=45",
  },
  {
    key: "lane-change-signal",
    quote:
      "Signal ahead 100 feet (10 car lengths) on city streets or " +
      "300 feet (30 car lengths) on highways or freeways before " +
      "changing lanes Check blind spots by looking over your " +
      "shoulder and change lanes when traffic is clear Do not " +
      "change lanes in an intersection",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Lane Changes; U-Turns (page 46)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=46",
  },
  {
    key: "uturn-generally-allowed",
    quote: "In Nevada, U-turns are generally allowed on any road when they can be made safely.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Lane Changes; U-Turns (page 46)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=46",
  },
  {
    key: "uturn-legal-list",
    quote:
      "You may make a legal U-turn: Across a double yellow line " +
      "when it is safe and legal. In a residential district when " +
      "a traffic sign, light, or traffic signal light protects " +
      "you from approaching vehicles. At an intersection on a " +
      "green traffic signal light or green arrow, unless a \"No " +
      "U-turn\" sign is posted.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Lane Changes; U-Turns (page 46)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=46",
  },
  {
    key: "uturn-200-feet",
    quote:
      "Where you cannot see clearly 200 feet in each direction " +
      "because of a curve, hill, rain, fog, or other reason.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Lane Changes; U-Turns (page 46)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=46",
  },
  {
    key: "uturn-business",
    quote:
      "In business districts. Areas with churches, apartments, " +
      "multifamily housing units, and public buildings are also " +
      "considered to be business districts.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Lane Changes; U-Turns (page 46)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=46",
  },
  {
    key: "uturn-fire-station",
    quote:
      "In front of a fire station. Never use a fire station " +
      "driveway to turn your vehicle around.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Lane Changes; U-Turns (page 46)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=46",
  },
  {
    key: "uturn-500-grade",
    quote: "Near a grade where there is less than 500 feet of visibility in both directions.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Lane Changes; U-Turns (page 46)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=46",
  },
  {
    key: "pass-never-shoulder",
    quote:
      "However, you should never exceed the speed limit to pass " +
      "and you may never use the shoulder of the road to pass.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Another Vehicle (page 47)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=47",
  },
  {
    key: "pass-two-lane",
    quote:
      "you may pass on the left only when: - You can see clearly " +
      "ahead and there is no immediate oncoming traffic; - There " +
      "is a broken yellow line on the highway or when the broken " +
      "yellow line is in your lane; and - It is safe to do so",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Another Vehicle (page 47)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=47",
  },
  {
    key: "pass-signal-100-300",
    quote:
      "When passing on a two-lane road, turn your left signal " +
      "light on 100 feet ahead in business or residential areas " +
      "or 300 feet ahead in other areas.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Another Vehicle (page 47)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=47",
  },
  {
    key: "pass-return",
    quote:
      "After you have passed, pull back into your lane when you " +
      "can see the vehicle you passed in your rear-view mirror.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Another Vehicle (page 47)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=47",
  },
  {
    key: "pass-100-crossing",
    quote:
      "At or within 100 feet of a street crossing; - At or within " +
      "100 feet of a railroad crossing;",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Another Vehicle (page 47)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=47",
  },
  {
    key: "pass-being-passed",
    quote:
      "When another vehicle comes up behind yours and signals to " +
      "pass, move to the right in your travel lane and let it " +
      "pass. Never speed up when another vehicle is passing you.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Another Vehicle (page 47)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=47",
  },
  {
    key: "pass-left-turner",
    quote: "Never pass to the left of a driver who is making or signaling a left turn.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Another Vehicle (page 47)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=47",
  },
  {
    key: "left-lane-slow",
    quote:
      "While driving on a highway that has two lanes traveling in " +
      "the same direction, it is illegal to travel in the far " +
      "left lane at a speed that is less than the posted speed " +
      "limit and you are being overtaken in that same lane from " +
      "the rear by another vehicle that is traveling at a higher " +
      "rate of speed.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Another Vehicle (page 47)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=47",
  },
  {
    key: "pass-right-off-pavement",
    quote:
      "Never pass on the right when doing so would result in " +
      "driving off the paved portion of the highway.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Another Vehicle (page 47)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=47",
  },
  {
    key: "pass-bicycle-3-feet",
    quote:
      "If an adjacent lane does not exist, pass to the left of " +
      "the bicycle at a safe distance, which must be at least " +
      "three feet.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Bicyclists; Parking; Colored Curb Markings (page 48)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=48",
  },
  {
    key: "bike-lane-travel",
    quote: "Traveling in a marked bicycle lane is prohibited.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Bicyclists; Parking; Colored Curb Markings (page 48)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=48",
  },
  {
    key: "park-18-inches",
    quote:
      "The legal parking position is with the front and rear " +
      "wheels within 18 inches of the curb.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Bicyclists; Parking; Colored Curb Markings (page 48)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=48",
  },
  {
    key: "park-direction",
    quote: "Your vehicle should face in the direction that normal traffic flows.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Bicyclists; Parking; Colored Curb Markings (page 48)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=48",
  },
  {
    key: "park-200-feet",
    quote:
      "Your vehicle should be visible for 200 feet (about 20 car " +
      "lengths) in each direction.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Bicyclists; Parking; Colored Curb Markings (page 48)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=48",
  },
  {
    key: "curb-white",
    quote:
      "White usually indicates you are allowed a very short stop " +
      "only to take on or let off passengers, or to drop mail in " +
      "a mailbox.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Bicyclists; Parking; Colored Curb Markings (page 48)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=48",
  },
  {
    key: "curb-green",
    quote:
      "Green allows you to park for a limited time. The amount of " +
      "time is usually shown on a sign.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Bicyclists; Parking; Colored Curb Markings (page 48)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=48",
  },
  {
    key: "curb-yellow",
    quote: "Yellow means a loading zone and rules depend on local laws.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Bicyclists; Parking; Colored Curb Markings (page 48)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=48",
  },
  {
    key: "curb-red",
    quote: "Red means no stopping, standing or parking; local laws apply.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Bicyclists; Parking; Colored Curb Markings (page 48)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=48",
  },
  {
    key: "curb-blue",
    quote: "Blue designates handicapped parking areas.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Passing Bicyclists; Parking; Colored Curb Markings (page 48)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=48",
  },
  {
    key: "hill-general",
    quote:
      "When parking on a hill, turn your front tires so that if " +
      "your vehicle should start to roll, it will move away from " +
      "traffic or into the curb.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Parallel Parking; Parking on a Hill (page 49)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=49",
  },
  {
    key: "hill-downhill",
    quote:
      "When your vehicle is headed downhill, turn your front " +
      "tires toward or into the curb or road shoulder.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Parallel Parking; Parking on a Hill (page 49)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=49",
  },
  {
    key: "hill-uphill",
    quote:
      "When headed uphill and there is a curb, turn your front " +
      "tires away from the curb. When headed uphill and there is " +
      "no curb, turn your front tires toward the road shoulder. " +
      "Always set your parking brake.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 3 - Parallel Parking; Parking on a Hill (page 49)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=49",
  },
  {
    key: "noparking-hydrant",
    quote:
      "Within 15 feet of a fire hydrant in a place where parallel " +
      "parking is permitted or 20 feet of a fire hydrant if angle " +
      "parking is permitted",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - No Parking Allowed; In an Emergency; " +
      "International Symbol of Access (page 50)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=50",
  },
  {
    key: "noparking-crosswalk",
    quote: "On a crosswalk or within 20 feet of a crosswalk",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - No Parking Allowed; In an Emergency; " +
      "International Symbol of Access (page 50)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=50",
  },
  {
    key: "noparking-signal",
    quote: "Within 30 feet of a traffic control signal at the side of a highway",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - No Parking Allowed; In an Emergency; " +
      "International Symbol of Access (page 50)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=50",
  },
  {
    key: "noparking-firestation",
    quote:
      "Within 20 feet of a driveway entrance to any fire station " +
      "and, on the side of a highway opposite the entrance to any " +
      "fire station, within 75 feet of that entrance",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - No Parking Allowed; In an Emergency; " +
      "International Symbol of Access (page 50)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=50",
  },
  {
    key: "noparking-bridge",
    quote: "On any bridge or other elevated structure or within a highway tunnel",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - No Parking Allowed; In an Emergency; " +
      "International Symbol of Access (page 50)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=50",
  },
  {
    key: "noparking-double",
    quote: "Next to any vehicle already parked on the side of the roadway (double parking)",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - No Parking Allowed; In an Emergency; " +
      "International Symbol of Access (page 50)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=50",
  },
  {
    key: "noparking-bike-lane",
    quote: "Within a bicycle lane (unless your vehicle is disabled)",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - No Parking Allowed; In an Emergency; " +
      "International Symbol of Access (page 50)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=50",
  },
  {
    key: "accessible-fine",
    quote:
      "It is illegal for anyone else to park in spaces marked by " +
      "this symbol. The minimum fine for doing so is $250.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - No Parking Allowed; In an Emergency; " +
      "International Symbol of Access (page 50)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=50",
  },
  {
    key: "emergency-stay-with-car",
    quote:
      "If you have car trouble, move to the shoulder or emergency " +
      "stopping area as soon as you safely can. Turn on your " +
      "four-way flashers to warn other traffic.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - No Parking Allowed; In an Emergency; " +
      "International Symbol of Access (page 50)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=50",
  },
  {
    key: "emergency-trooper",
    quote: "If you stay with your car, a Nevada Highway Patrol trooper will stop to help you.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - No Parking Allowed; In an Emergency; " +
      "International Symbol of Access (page 50)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=50",
  },
  {
    key: "freeway-no-stop",
    quote: "DO NOT STOP ON A FREEWAY EXCEPT FOR AN EMERGENCY.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section:
      "Chapter 3 - No Parking Allowed; In an Emergency; " +
      "International Symbol of Access (page 50)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=50",
  },
  {
    key: "night-headlight-range",
    quote: "Always make sure you can stop within the range of your headlights.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Night Driving (page 56)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=56",
  },
  {
    key: "night-no-sunglasses",
    quote: "Never wear sunglasses when driving at night.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Night Driving (page 56)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=56",
  },
  {
    key: "night-glare",
    quote:
      "Do not look directly into the headlights of oncoming " +
      "vehicles; look down and to the right side of your lane.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Night Driving (page 56)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=56",
  },
  {
    key: "headlights-required",
    quote:
      "Headlights are legally required: From a half hour after " +
      "sunset until a half hour before sunrise. When there is " +
      "insufficient light. Whenever persons or vehicles cannot be " +
      "clearly seen at a distance of 1,000 feet. When directed by " +
      "an official traffic control device.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Night Driving (page 56)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=56",
  },
  {
    key: "highbeam-500-300",
    quote:
      "Use high beams in open country at night. Change to low " +
      "beams when you are at least 500 feet before any oncoming " +
      "vehicles and 300 feet before any vehicle you are " +
      "following.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Night Driving (page 56)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=56",
  },
  {
    key: "no-parking-lights-only",
    quote: "Drivers should not drive with just the parking lights on.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Night Driving (page 56)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=56",
  },
  {
    key: "bad-weather-slow",
    quote:
      "The most important thing to do when driving in bad weather " +
      "is slow down. Stopping distances on slippery roads may be " +
      "2 to 10 times greater than on dry pavement.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving in Bad Weather; Skidding (page 57)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=57",
  },
  {
    key: "studded-tires",
    quote: "Studded snow tires may only be used from October 1 through April 30.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving in Bad Weather; Skidding (page 57)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=57",
  },
  {
    key: "snow-no-safe-speed",
    quote:
      "Reduce speed. There is no such thing as a completely safe " +
      "speed on snow and ice. Each city block or stretch of " +
      "highway may be different, depending upon sun, shade, " +
      "amount of sanding and other conditions.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving in Bad Weather; Skidding (page 57)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=57",
  },
  {
    key: "skid-definition",
    quote:
      "Skidding means your vehicle's tires have lost traction. " +
      "Skidding usually happens on ice or packed snow, but it can " +
      "also occur on wet pavement or gravel roads.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving in Bad Weather; Skidding (page 57)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=57",
  },
  {
    key: "brakes-fail",
    quote:
      "Try pumping the brake pedal. If the brakes still do not " +
      "respond: Use the emergency parking brake. If possible, " +
      "shift to a lower gear.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving Emergencies (page 58)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=58",
  },
  {
    key: "wet-brakes",
    quote:
      "To dry the brakes, put your car in low gear, drive slowly " +
      "and lightly apply the brakes. Test them about every 200 " +
      "feet, continuing until braking action returns to normal.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving Emergencies (page 58)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=58",
  },
  {
    key: "gas-pedal-sticks",
    quote:
      "Quickly press your foot hard against the pedal and " +
      "release. This may free or release the pedal. If not: Shift " +
      "to neutral. Apply the brakes. Pull off the highway to the " +
      "right (if possible) and stop.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving Emergencies (page 58)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=58",
  },
  {
    key: "fire-no-water",
    quote: "DO NOT USE WATER because burning gasoline will float on water and spread the fire.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving Emergencies (page 58)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=58",
  },
  {
    key: "oncoming-in-lane",
    quote:
      "If you see a vehicle coming toward you in your lane, slow " +
      "down, sound your horn, flash your headlights and pull as " +
      "far to the right as you safely can.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving Emergencies (page 58)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=58",
  },
  {
    key: "off-pavement",
    quote:
      "Do not try to swerve back onto the pavement. Instead, stay " +
      "on the shoulder until you have your vehicle completely " +
      "under control and gently ease back onto the road.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving Emergencies; Tips for Driving in a Flash Flood (page 59)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=59",
  },
  {
    key: "blowout",
    quote: "Ease up on the gas pedal to slow down. Do not hit the brakes!",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving Emergencies; Tips for Driving in a Flash Flood (page 59)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=59",
  },
  {
    key: "flood-facts",
    quote:
      "Less than 1 inch of water can cause a driver to lose " +
      "control of his or her car. Most vehicles can float in 2 " +
      "feet of water or less. Cars traveling at a high rate of " +
      "speed can be pushed off the road by only 6 inches of " +
      "water.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving Emergencies; Tips for Driving in a Flash Flood (page 59)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=59",
  },
  {
    key: "flood-turn-around",
    quote:
      "If you encounter a flooded roadway, don't attempt to drive " +
      "through it. Turn around and seek an alternate route or " +
      "wait until the water subsides.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving Emergencies; Tips for Driving in a Flash Flood (page 59)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=59",
  },
  {
    key: "flood-barricades",
    quote:
      "If your route is blocked by floodwaters or barricades, " +
      "find another route. Barricades are put up by local " +
      "officials to protect people from unsafe roads. Never drive " +
      "around them.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Tips for Driving in a Flash Flood; Highway Work Zones (page 60)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=60",
  },
  {
    key: "flood-abandon",
    quote:
      "If your vehicle stalls in rising flood water and you can " +
      "safely do so, abandon it immediately and seek higher " +
      "ground.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Driving Emergencies; Tips for Driving in a Flash Flood (page 59)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=59",
  },
  {
    key: "workzone-double-fines",
    quote:
      "Fines for speeding double in work zones! Black and white " +
      "speed limit signs are regulatory. Orange speed limit signs " +
      "are advisory and indicate slower, safer speeds.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Tips for Driving in a Flash Flood; Highway Work Zones (page 60)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=60",
  },
  {
    key: "workzone-barriers",
    quote:
      "Do not move any barriers or signs to cross over a road " +
      "that is closed to traffic. Doing so is illegal and you " +
      "will be subject to double penalties for work-zone " +
      "violations.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Tips for Driving in a Flash Flood; Highway Work Zones (page 60)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=60",
  },
  {
    key: "workzone-orange",
    quote:
      "Whenever you see orange signs, slow down and watch for " +
      "equipment and people working on the road.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Tips for Driving in a Flash Flood; Highway Work Zones (page 60)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=60",
  },
  {
    key: "moveover-duties",
    quote:
      "Decrease the vehicle speed to a speed that is reasonable " +
      "and proper and less than the posted speed limit. Proceed " +
      "with caution. Be prepared to stop.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Approaching a Stopped Emergency Vehicle (page 61)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=61",
  },
  {
    key: "moveover-lane",
    quote:
      "If possible, drive in a lane that is not adjacent to the " +
      "lane in which the emergency vehicle is stopped unless the " +
      "roadway, traffic, weather or other conditions make doing " +
      "so unsafe or impossible.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Approaching a Stopped Emergency Vehicle (page 61)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=61",
  },
  {
    key: "shoulder-no-stop",
    quote:
      "Drivers of non-emergency vehicles may not stop on a " +
      "shoulder marked to allow emergency use.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 5 - Approaching a Stopped Emergency Vehicle (page 61)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=61",
  },
  {
    key: "nozone",
    quote:
      "The \"no-zone\" is the area around large commercial trucks " +
      "or buses where cars \"disappear\" into blind spots. If truck " +
      "drivers cannot see you, the possibility of a collision is " +
      "greatly increased. These blind spots are the side no-zone, " +
      "rear no-zone and front no-zone areas.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Commercial Vehicles (page 62)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=62",
  },
  {
    key: "truck-mirror",
    quote: "If you cannot see the driver's face in the side view mirror, they cannot see you.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Commercial Vehicles (page 62)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=62",
  },
  {
    key: "truck-pass-front",
    quote:
      "When passing, look for the whole front of the commercial " +
      "truck or bus in your rearview mirror before pulling into " +
      "the truck's lane - and then do not slow down!",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Commercial Vehicles; Motorcycles (page 63)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=63",
  },
  {
    key: "truck-wide-right",
    quote:
      "Large commercial truck and bus drivers sometimes need to " +
      "swing wide to the left in order to safely make a right " +
      "turn or swing wide to the right to safely make a left " +
      "turn.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Commercial Vehicles; Motorcycles (page 63)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=63",
  },
  {
    key: "truck-stop-distance",
    quote: "These large vehicles need nearly twice the time and distance to stop as cars.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Commercial Vehicles; Motorcycles (page 63)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=63",
  },
  {
    key: "mc-two-abreast",
    quote:
      "Motorcycles and mopeds may, with the consent of the " +
      "drivers, be operated no more than two abreast in a single " +
      "traffic lane.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Commercial Vehicles; Motorcycles (page 63)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=63",
  },
  {
    key: "mc-signals",
    quote: "Turn signals are not self-canceling on most motorcycles.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Commercial Vehicles; Motorcycles (page 63)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=63",
  },
  {
    key: "mc-dim",
    quote: "Always dim your headlights when approaching a motorcycle.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Motorcycles; Mopeds; School Buses (page 64)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=64",
  },
  {
    key: "moped-def",
    quote:
      "Nevada defines these difference based on motor size, " +
      "horsepower (maximum of two brake horsepower), and 30 miles " +
      "per hour maximum speed on a flat or near-flat surface.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Motorcycles; Mopeds; School Buses (page 64)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=64",
  },
  {
    key: "moped-right-lane",
    quote:
      "Moped operators must remain in the extreme right-hand lane " +
      "of any road unless: There is a single lane of traffic " +
      "Preparing to make a left turn (turn must be made within " +
      "one-quarter mile from entering lane) When driving in the " +
      "extreme right-hand lane would not be safe; or Directed by " +
      "a police officer",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Motorcycles; Mopeds; School Buses (page 64)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=64",
  },
  {
    key: "moped-helmet",
    quote: "Moped operators and passengers are required to wear helmets in the State of Nevada.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Motorcycles; Mopeds; School Buses (page 64)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=64",
  },
  {
    key: "moped-register",
    quote:
      "Moped owners must register their mopeds with the DMV but " +
      "are not required to insure their vehicles.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Motorcycles; Mopeds; School Buses (page 64)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=64",
  },
  {
    key: "schoolbus-stop",
    quote:
      "NRS 484B.353 requires a driver to stop at any location for " +
      "a school bus displaying a flashing red signal. You may not " +
      "attempt to overtake or proceed past the school bus until " +
      "the bus driver has turned off the flashing red lights.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Motorcycles; Mopeds; School Buses (page 64)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=64",
  },
  {
    key: "schoolbus-divided",
    quote:
      "There is one exception to this rule: on divided highways, " +
      "you are only required to stop when you are traveling in " +
      "the same direction as the school bus.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Motorcycles; Mopeds; School Buses (page 64)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=64",
  },
  {
    key: "schoolbus-report",
    quote:
      "Nevada law allows school bus drivers to report violations " +
      "to the school MUST STOP district and the Department of " +
      "Motor Vehicles.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Motorcycles; Mopeds; School Buses (page 64)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=64",
  },
  {
    key: "bike-reckless",
    quote:
      "Motorists who cause even a minor collision with a bicycle " +
      "or pedestrian or who intentionally interfere with the " +
      "movement of a bicycle may be charged with reckless " +
      "driving. Penalties include a driver's license suspension.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Bicycles (page 65)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=65",
  },
  {
    key: "bike-crosswalk-dismount",
    quote:
      "If a cyclist chooses to cross an intersection in a " +
      "crosswalk, they should dismount and cross as a pedestrian.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Bicycles (page 65)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=65",
  },
  {
    key: "bike-as-far-right",
    quote:
      "Cyclists may ride in a traffic lane, staying as far to the " +
      "right as practicable unless preparing to turn or " +
      "overtaking another vehicle.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Bicycles (page 65)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=65",
  },
  {
    key: "bike-no-drive-in-lane",
    quote:
      "Motorists may not stop, park or drive on a designated " +
      "bicycle path or lane unless they are entering or leaving " +
      "an alley or driveway, performing official duties, are " +
      "directed by a police officer, or an emergency situation " +
      "exists.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Bicycles (page 65)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=65",
  },
  {
    key: "truckbed-18",
    quote:
      "Anyone under the age of 18 may not ride on the bed of a " +
      "flatbed truck or within the bed of a pickup truck in " +
      "Nevada if the truck is being driven on a paved highway.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Passengers in the Bed of a Truck; Pedestrians (page 66)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=66",
  },
  {
    key: "truckbed-exception",
    quote:
      "The exception to this is if you are being driven in a " +
      "parade authorized by a local authority or if the vehicle " +
      "is being used while farming or ranching.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Passengers in the Bed of a Truck; Pedestrians (page 66)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=66",
  },
  {
    key: "crosswalk-exists",
    quote:
      "A crosswalk exists anywhere two streets intersect, even at " +
      "a \"T\" intersection. A crosswalk exists even if it is not " +
      "painted or marked.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Passengers in the Bed of a Truck; Pedestrians (page 66)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=66",
  },
  {
    key: "ped-green-still-crossing",
    quote:
      "When a traffic signal turns green, drivers must yield to " +
      "persons who are still crossing the street. Pedestrians " +
      "have the right of way over motorists making a right-hand " +
      "turn.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Passengers in the Bed of a Truck; Pedestrians (page 66)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=66",
  },
  {
    key: "ped-no-sidewalk",
    quote:
      "If there is a sidewalk, pedestrians should use it. If " +
      "there is no sidewalk, pedestrians should walk on the side " +
      "of the road facing the traffic.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Passengers in the Bed of a Truck; Pedestrians (page 66)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=66",
  },
  {
    key: "ped-wait-other-half",
    quote:
      "Vehicles yielding to a pedestrian should wait until the " +
      "pedestrian has crossed into the lanes going in the other " +
      "direction before proceeding.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Passengers in the Bed of a Truck; Pedestrians (page 66)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=66",
  },
  {
    key: "ped-overtake-stopped",
    quote:
      "It is illegal for motorists to overtake any vehicle that " +
      "is slowing down or stopped until the motorist slows down " +
      "enough to determine why the other vehicle has slowed or " +
      "stopped.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Passengers in the Bed of a Truck; Pedestrians (page 66)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=66",
  },
  {
    key: "blind-five-feet",
    quote:
      "Do not stop your car more than five feet from the " +
      "crosswalk. A pedestrian who is blind or visually impaired " +
      "uses the sound of your engine as a guide.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Pedestrians Who are Blind or Visually Impaired (page 67)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=67",
  },
  {
    key: "blind-right-of-way",
    quote:
      "A person who is blind or visually impaired crossing a " +
      "street on foot with a white cane or animal guide is " +
      "granted the right of way at all times on any highway, " +
      "street, or road in Nevada.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Pedestrians Who are Blind or Visually Impaired (page 67)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=67",
  },
  {
    key: "blind-3-4-seconds",
    quote:
      "Do give blind or visually impaired pedestrians time to " +
      "decide if they want to cross the street. Waiting 3-4 " +
      "seconds is a good rule of thumb.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 6 - Pedestrians Who are Blind or Visually Impaired (page 67)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=67",
  },
  {
    key: "tow-class-c",
    quote:
      "Non-commercial Class C drivers may tow a single vehicle or " +
      "a combination of vehicles with a gross vehicle weight " +
      "rating (GVWR) of 10,000 pounds or less and a total length " +
      "of no more than 70 feet.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 7 - Towing (page 68)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=68",
  },
  {
    key: "tow-heaviest-first",
    quote:
      "When towing a combination of vehicles, the heaviest " +
      "vehicle must always be in the first position behind the " +
      "towing vehicle. The lighter vehicle should be in the rear.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 7 - Towing Multiple Vehicles (page 73)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=73",
  },
  {
    key: "tow-backing",
    quote:
      "When backing a single vehicle, turn the top of the " +
      "steering wheel toward the direction you want to go. When " +
      "backing with a trailer, turn the steering wheel in the " +
      "opposite direction.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 7 - Backing With a Trailer (page 71)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=71",
  },
  {
    key: "tow-chains-crossed",
    quote: "The safety chains are attached and crossed.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 7 - Securing a Trailer (page 69)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=69",
  },
  {
    key: "tow-inspect-50",
    quote:
      "Inspect the trailer and the load-securing devices again " +
      "within 50 miles after beginning an extended trip. Make any " +
      "needed adjustments and inspect again after you have driven " +
      "for 3 hours or 150 miles.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 7 - Inspecting Your Trailer; Towing Safely (page 70)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=70",
  },
  {
    key: "tow-empty-stopping",
    quote:
      "Empty trucks actually require greater stopping distances " +
      "because they have less traction.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 7 - Inspecting Your Trailer; Towing Safely (page 70)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=70",
  },
  {
    key: "insurance-minimums",
    quote:
      "The minimum coverage is $25,000 for bodily injury or death " +
      "of one person in any one crash; $50,000 for bodily injury " +
      "or death of two or more persons in any one crash; and " +
      "$20,000 for injury to or destruction of property of others " +
      "in any one crash.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 8 - Insurance and Financial Responsibility (page 75)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=75",
  },
  {
    key: "insurance-card",
    quote:
      "An Evidence of Insurance Card furnished by the company " +
      "must be carried in the vehicle or be available in an " +
      "electronic format that can be displayed on a mobile " +
      "electronic device.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 8 - Insurance and Financial Responsibility (page 75)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=75",
  },
  {
    key: "sr1-750",
    quote:
      "If you are in a crash that is not investigated by law " +
      "enforcement and the crash causes $750 or more in damages " +
      "or anyone is injured, you must complete and send a Report " +
      "of Crash Form (SR-1) within 10 days",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 8 - Insurance and Financial Responsibility (page 75)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=75",
  },
  {
    key: "crash-steps",
    quote: "Stop. Get medical help for the injured. Warn traffic. Notify law enforcement.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 8 - What to Do in a Crash (page 76)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=76",
  },
  {
    key: "crash-fender-bender",
    quote:
      "If there is only damage to a vehicle or other property (no " +
      "injuries) and the vehicle can be moved safely, move to a " +
      "location that does not obstruct traffic and return to the " +
      "scene.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 8 - What to Do in a Crash (page 76)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=76",
  },
  {
    key: "crash-exchange",
    quote:
      "Exchange your name, address, driver license number, " +
      "registration, and insurance information with other drivers " +
      "involved.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 8 - What to Do in a Crash (page 76)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=76",
  },
  {
    key: "crash-unattended",
    quote:
      "If the crash involves an unattended vehicle or other " +
      "property, you must give the owner your name, address, " +
      "driver license number, registration and insurance " +
      "information, either in person or by leaving a note.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 8 - What to Do in a Crash (page 76)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=76",
  },
  {
    key: "crash-no-report",
    quote:
      "If you do not report a crash to the Department of Motor " +
      "Vehicles, your driver license and/or your vehicle " +
      "registration may be suspended.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 8 - What to Do in a Crash (page 76)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=76",
  },
  {
    key: "insurance-lapse-fines",
    quote:
      "the driver will be required to pay a reinstatement fee and " +
      "applicable fines (starting at $250 and totaling up to " +
      "$1,750) for each registered vehicle covered by that " +
      "insurance.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 8 - Insurance and Financial Responsibility (page 75)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=75",
  },
  {
    key: "record-dui-7-years",
    quote:
      "Most violations are reportable to your insurance company " +
      "for three years. Convictions related to DUI (Driving Under " +
      "the Influence) stay on your record for seven years.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 9 - Your Driving Record; Demerit Point System (page 77)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=77",
  },
  {
    key: "points-12",
    quote:
      "If you receive 12 or more points in any 12-month period, " +
      "your license will be suspended.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 9 - Your Driving Record; Demerit Point System (page 77)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=77",
  },
  {
    key: "points-traffic-school",
    quote:
      "If you have accumulated between three and 11 points, you " +
      "may have three points removed by completing a traffic " +
      "safety course at a school approved by the DMV. You may " +
      "attend traffic school only once in a 12-month period to " +
      "remove points from your record.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 9 - Your Driving Record; Demerit Point System (page 77)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=77",
  },
  {
    key: "points-major",
    quote:
      "A conviction of a major traffic offense, such as DUI or " +
      "causing substantial bodily harm, will result in your " +
      "license being revoked. These offenses are not assigned " +
      "demerit points.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 9 - Your Driving Record; Demerit Point System (page 77)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=77",
  },
  {
    key: "license-lend",
    quote:
      "It is also illegal to alter your license in any way, lend " +
      "it to someone else or use another person's license.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 9 - Demerit Point System (page 78)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=78",
  },
  {
    key: "dui-per-se",
    quote:
      "Under Nevada's Illegal Per Se Law, if chemical tests show " +
      "an alcohol concentration of .08% or more or any detectable " +
      "amount of a controlled substance, your driving privilege " +
      "will be revoked.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - Driving Under the Influence (page 79)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=79",
  },
  {
    key: "dui-under-21",
    quote:
      "If you are under the age of 21 and a chemical test shows " +
      "an alcohol concentration of .02%, but less than .08%, your " +
      "driving privilege will be suspended.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - Driving Under the Influence (page 79)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=79",
  },
  {
    key: "dui-lower-level",
    quote:
      "Even though an alcohol concentration of .08% is used as a " +
      "guide, you can be arrested and convicted with a lower " +
      "level.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - Driving Under the Influence (page 79)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=79",
  },
  {
    key: "implied-consent",
    quote:
      "Under Nevada's Implied Consent Law, if an officer suspects " +
      "you are driving under the influence, you will be asked to " +
      "take blood, breath or urine tests. If you fail to submit " +
      "to these tests, your license, permit or privilege to drive " +
      "will be revoked pursuant to NRS 484C.220",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - Driving Under the Influence (page 79)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=79",
  },
  {
    key: "dui-first-penalty",
    quote:
      "First DUI offense: - Driver license revoked for a minimum " +
      "of 185 days which may include the time served in the " +
      "administrative revocation at the judge's discretion. - " +
      "Jail sentence of two days to six months or 48 to 96 hours " +
      "of community service - Fine of $400 to $1,000",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - Penalties for DUI (page 80)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=80",
  },
  {
    key: "dui-second-penalty",
    quote:
      "Second DUI offense within 7 years: - Driver license " +
      "revoked for one year which may include the time served in " +
      "the administrative revocation at the judge's discretion. - " +
      "Jail sentence or residential confinement of 10 days to 6 " +
      "months - Fine of $750 to $1,000",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - Penalties for DUI (page 80)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=80",
  },
  {
    key: "dui-third-penalty",
    quote:
      "Subsequent DUI offense within 7 years: - Driver license " +
      "revoked for three years which may include the time served " +
      "in the administrative revocation at the judge's " +
      "discretion. - Prison sentence of 1 to 6 years - Fine of " +
      "$2,000 to $5,000",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - Penalties for DUI (page 80)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=80",
  },
  {
    key: "dui-interlock",
    quote:
      "The driving privileges of DUI offenders can be immediately " +
      "reinstated if a driver license with an ignition interlock " +
      "restriction is issued and an ignition interlock device is " +
      "installed in any vehicle the motorist operates at his or " +
      "her own expense.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - Penalties for DUI (page 80)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=80",
  },
  {
    key: "dui-young-185",
    quote:
      "A licensed driver under the age of 18 found by juvenile " +
      "court to have been driving under the influence of alcohol " +
      "or a controlled substance will have his or her license " +
      "suspended for 185 days.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - DUI Laws for Young Drivers; Other DUI Laws (page 81)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=81",
  },
  {
    key: "open-container",
    quote:
      "Nevada's open container law makes it illegal to have " +
      "alcoholic beverages which have been opened in the driver " +
      "or passenger areas when a vehicle is being driven.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - DUI Laws for Young Drivers; Other DUI Laws (page 81)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=81",
  },
  {
    key: "dui-child-15",
    quote:
      "If you are found guilty of a DUI offense and you had " +
      "passengers under the age of 15 in the vehicle you were " +
      "driving, the court will consider that as an aggravating " +
      "factor in determining your sentence.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - DUI Laws for Young Drivers; Other DUI Laws (page 81)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=81",
  },
  {
    key: "dui-marijuana",
    quote:
      "With the legalization of marijuana in Nevada, it is still " +
      "unlawful for any person to drive or be in actual physical " +
      "control of a vehicle on a highway or on premises to which " +
      "the public has access with an amount of marijuana or in " +
      "their system greater than two nanograms per milliliter of " +
      "blood",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - Driving Under the Influence (page 79)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=79",
  },
  {
    key: "report-drunk-nhp",
    quote:
      "You can report a suspected drunk driver or any highway " +
      "emergency on a cellular phone anywhere in Nevada by " +
      "dialing *NHP (*647).",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - DUI Laws for Young Drivers; Other DUI Laws (page 81)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=81",
  },
  {
    key: "dui-clues",
    quote:
      "Making a turn too widely Using two lanes, straddling the " +
      "center line Almost hitting someone or something Weaving or " +
      "drifting from one side of the lane or road to another",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 10 - DUI Laws for Young Drivers; Other DUI Laws (page 81)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=81",
  },
  {
    key: "suspend-security-deposit",
    quote:
      "Security Deposit: If a crash occurs with more than $750 in " +
      "damage (personal injury or property damage) and you do not " +
      "have liability insurance, your driver license and vehicle " +
      "registration are suspended.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 11 - License Suspensions and Revocations (page 82)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=82",
  },
  {
    key: "suspend-bike-ped",
    quote:
      "Collision with a Bicyclist or Pedestrian: If a driver " +
      "causes a collision with a pedestrian or person riding a " +
      "bicycle.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 11 - License Suspensions and Revocations (page 82)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=82",
  },
  {
    key: "reg-30-days",
    quote:
      "Drivers must register their vehicles within 30 days of " +
      "establishing residency in Nevada or at the time they " +
      "obtain a driver license, whichever occurs earlier.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 12 - New Resident Vehicle Registration Requirements (page 83)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=83",
  },
  {
    key: "smog-check",
    quote:
      "New vehicles are exempt on their first, second or third " +
      "registration (in any state).",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 12 - New Resident Vehicle Registration Requirements (page 83)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=83",
  },
  {
    key: "insurance-cancel-plates",
    quote:
      "If a driver cancels their Nevada insurance and does not " +
      "obtain new insurance, they must cancel their Nevada " +
      "vehicle registration and surrender their license plates on " +
      "the same day.",
    source: "Nevada Driver's Handbook (Nevada DMV, DMV 700, March 2024)",
    section: "Chapter 12 - New Resident Vehicle Registration Requirements (page 83)",
    url: "https://dmv.nv.gov/pdfforms/dlbook.pdf#page=83",
  },
  {
    key: "nrs-max-80",
    quote:
      "A rate of speed that results in the injury of another " +
      "person or of any property. (e) In any event, a rate of " +
      "speed greater than 80 miles per hour.",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section: "NRS 484B.600 - Basic rule; penalties",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec600",
  },
  {
    key: "nrs-ndot-80",
    quote:
      "the Department of Transportation may establish a speed " +
      "limit on such highways not to exceed 80 miles per hour",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484B.613 - Speed limit: Establishment for vehicles on " +
      "highways constructed and maintained by Department of " +
      "Transportation",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec613",
  },
  {
    key: "nrs-signal-100-300",
    quote:
      "A signal of intention to turn right or left, or otherwise " +
      "turn a vehicle from a direct course, shall be given " +
      "continuously during not less than the last 100 feet " +
      "traveled in a business or residential district and not " +
      "less than the last 300 feet traveled in any other area " +
      "prior to changing the course of a vehicle.",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484B.413 - Requirements for turning on highway; signal " +
      "for stopping or decreasing speed",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec413",
  },
  {
    key: "nrs-follow-prudent",
    quote:
      "The driver of a vehicle shall not follow another vehicle " +
      "more closely than is reasonable and prudent, having due " +
      "regard for the speed of such vehicles and the traffic upon " +
      "and the condition of the highway.",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section: "NRS 484B.127 - Following too closely",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec127",
  },
  {
    key: "nrs-truck-500",
    quote:
      "The driver of any truck or combination of vehicles 80 " +
      "inches or more in overall width, which is following a " +
      "truck, or combination of vehicles 80 inches or more in " +
      "overall width, shall, whenever conditions permit, leave a " +
      "space of 500 feet",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section: "NRS 484B.127 - Following too closely",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec127",
  },
  {
    key: "nrs-bike-3-feet",
    quote:
      "pass to the left of the bicycle, electric bicycle or " +
      "electric scooter at a safe distance, which must be not " +
      "less than 3 feet between any portion of the vehicle and " +
      "the bicycle, electric bicycle or electric scooter",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484B.270 - Vehicles, bicycles, electric bicycles, " +
      "electric scooters and pedestrians: Driver's duty of due " +
      "care",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec270",
  },
  {
    key: "nrs-schoolbus",
    quote:
      "which has stopped to receive or discharge any pupil and is " +
      "displaying a flashing red light signal visible from the " +
      "front and rear, shall bring the vehicle to an immediate " +
      "stop and shall not attempt to overtake or proceed past the " +
      "school bus until the flashing red signal ceases operation.",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484B.353 - Overtaking and passing school bus: Duties " +
      "of driver; exceptions; penalties",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec353",
  },
  {
    key: "nrs-schoolbus-divided",
    quote:
      "The driver of a vehicle upon a divided highway need not " +
      "stop upon meeting or passing a school bus which is " +
      "positioned in the other roadway.",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484B.353 - Overtaking and passing school bus: Duties " +
      "of driver; exceptions; penalties",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec353",
  },
  {
    key: "nrs-schoolbus-penalty",
    quote:
      "For a third or any subsequent offense within 2 years after " +
      "the most recent offense, shall be punished by a fine of " +
      "not more than $1,000 and the driver's license of the " +
      "person must be suspended for not more than 1 year.",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484B.353 - Overtaking and passing school bus: Duties " +
      "of driver; exceptions; penalties",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec353",
  },
  {
    key: "nrs-park-hydrant",
    quote:
      "Within 15 feet of a fire hydrant in a place where parallel " +
      "parking is permitted, or within 20 feet of a fire hydrant " +
      "if angle parking is permitted and a local ordinance " +
      "requires the greater distance",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484B.450 - Stopping, standing or parking prohibited in " +
      "specified places; exceptions",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec450",
  },
  {
    key: "nrs-dead-red",
    quote:
      "The person waits for two complete cycles of the lights or " +
      "lighted arrows of the applicable official traffic-control " +
      "device and the signal does not change because of a " +
      "malfunction or because the signal failed to detect the " +
      "presence of the motorcycle, moped, trimobile, bicycle, " +
      "electric bicycle or electric scooter;",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484B.307 - Traffic controlled by official " +
      "traffic-control devices exhibiting different colored " +
      "lights",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec307",
  },
  {
    key: "nrs-belt-secondary",
    quote:
      "A civil infraction citation may be issued pursuant to NRS " +
      "484A.7035 only if the violation is discovered when the " +
      "vehicle is halted or its driver arrested for another " +
      "alleged violation or offense.",
    source: "Nevada Revised Statutes, Chapter 484D (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section: "NRS 484D.495 - Safety belts and shoulder harness assembly",
    url: "https://www.leg.state.nv.us/NRS/NRS-484D.html#NRS484DSec495",
  },
  {
    key: "nrs-belt-penalty",
    quote:
      "Any person who violates the provisions of subsection 2 " +
      "shall be punished by a civil penalty of not more than $25 " +
      "or by a sentence to perform a certain number of hours of " +
      "community service.",
    source: "Nevada Revised Statutes, Chapter 484D (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section: "NRS 484D.495 - Safety belts and shoulder harness assembly",
    url: "https://www.leg.state.nv.us/NRS/NRS-484D.html#NRS484DSec495",
  },
  {
    key: "nrs-belt-not-moving",
    quote: "Is not a moving traffic violation under NRS 483.473",
    source: "Nevada Revised Statutes, Chapter 484D (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section: "NRS 484D.495 - Safety belts and shoulder harness assembly",
    url: "https://www.leg.state.nv.us/NRS/NRS-484D.html#NRS484DSec495",
  },
  {
    key: "nrs-gdl-passenger",
    quote:
      "A person to whom a driver's license is issued pursuant to " +
      "NRS 483.2521 shall not, during the first 6 months after " +
      "the date on which the driver's license is issued, " +
      "transport as a passenger a person who is under 18 years of " +
      "age, unless the person is a member of his or her immediate " +
      "family.",
    source: "Nevada Revised Statutes, Chapter 483 (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 483.2523 - Drivers who are 16 or 17 years of age: " +
      "Restriction on transporting certain passengers under 18 " +
      "years of age during initial period of licensure",
    url: "https://www.leg.state.nv.us/NRS/NRS-483.html#NRS483Sec2523",
  },
  {
    key: "nrs-gdl-50-hours",
    quote:
      "has at least 50 hours of supervised experience in driving " +
      "a motor vehicle with a restricted license, instruction " +
      "permit or restricted instruction permit",
    source: "Nevada Revised Statutes, Chapter 483 (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 483.2521 - Drivers who are 16 or 17 years of age: " +
      "Prerequisites to issuance of license",
    url: "https://www.leg.state.nv.us/NRS/NRS-483.html#NRS483Sec2521",
  },
  {
    key: "nrs-restricted-pupil",
    quote:
      "The Department may issue a restricted license to any pupil " +
      "between the ages of 14 and 18 years who is attending: (a) " +
      "A public school in a school district in this State in a " +
      "county whose population is less than 55,000 or in a city " +
      "or town whose population is less than 25,000",
    source: "Nevada Revised Statutes, Chapter 483 (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 483.270 - Restricted license for pupil in school: " +
      "Issuance; application; restrictions",
    url: "https://www.leg.state.nv.us/NRS/NRS-483.html#NRS483Sec270",
  },
  {
    key: "nrs-traffic-incident",
    quote:
      "the driver of the approaching vehicle shall, in the " +
      "absence of other direction given by a law enforcement " +
      "officer: (a) Decrease the speed of the vehicle to a speed " +
      "that is reasonable and proper, pursuant to the criteria " +
      "set forth in subsection 1 of NRS 484B.600 ; (b) Proceed " +
      "with caution; (c) Be prepared to stop",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section: "NRS 484B.607 - Duties of driver when approaching traffic incident; penalty",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec607",
  },
  {
    key: "nrs-rural-daylight-25",
    quote:
      "a person driving a motor vehicle during the hours of " +
      "daylight at a speed in excess of the speed limit posted by " +
      "a public authority for the portion of highway being " +
      "traversed shall be punished by a civil penalty of $25",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section: "NRS 484B.617 - Certain violations of speed limit in rural areas: Penalties",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec617",
  },
  {
    key: "nrs-school-zone-15",
    quote:
      "A person shall not drive a motor vehicle at a speed in " +
      "excess of 15 miles per hour in an area designated as a " +
      "school zone except:",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section: "NRS 484B.363 - School zone or school crossing zone: Speed limit; designation",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec363",
  },
  {
    key: "nrs-dui-08",
    quote:
      "It is unlawful for any person who: (a) Is under the " +
      "influence of intoxicating liquor; (b) Has a concentration " +
      "of alcohol of 0.08 or more in his or her blood or breath; " +
      "or",
    source: "Nevada Revised Statutes, Chapter 484C (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section: "NRS 484C.110 - Unlawful acts relating to operation of vehicle",
    url: "https://www.leg.state.nv.us/NRS/NRS-484C.html#NRS484CSec110",
  },
  {
    key: "nrs-hitrun-felony",
    quote:
      "A person failing to comply with the provisions of " +
      "subsection 1 is guilty of a category B felony and shall be " +
      "punished by imprisonment in the state prison for a minimum " +
      "term of not less than 2 years and a maximum term of not " +
      "more than 20 years and by a fine of not less than $2,000 " +
      "nor more than $5,000.",
    source: "Nevada Revised Statutes, Chapter 484E (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484E.010 - Duty to stop at scene of crash involving " +
      "death or personal injury; penalty",
    url: "https://www.leg.state.nv.us/NRS/NRS-484E.html#NRS484ESec010",
  },
  {
    key: "nrs-slow-impede",
    quote:
      "A person shall not drive a motor vehicle at such a slow " +
      "speed as to impede the normal and reasonable movement of " +
      "traffic except when reduced speed is necessary for safe " +
      "operation or in compliance with law.",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section: "NRS 484B.623 - Slow driving; establishment of minimum speed limit",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec623",
  },
  {
    key: "nrs-slow-right-lane",
    quote:
      "If the highway has two or more clearly marked lanes for " +
      "traffic traveling in the direction in which the driver or " +
      "operator is traveling, drive in the extreme right-hand " +
      "lane except when necessary to pass other slowly moving " +
      "vehicles",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484B.627 - Duties of driver or operator driving or " +
      "operating motor vehicle at speed so slow as to impede " +
      "forward movement of traffic",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec627",
  },
  {
    key: "nrs-handheld",
    quote:
      "Manually type or enter text into a cellular telephone or " +
      "other handheld wireless communications device, or send or " +
      "read data using any such device to access or search the " +
      "Internet or to engage in nonvoice communications with " +
      "another person",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484B.165 - Using handheld wireless communications " +
      "device to type or enter text, send or read data",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec165",
  },
  {
    key: "nrs-green-yield",
    quote:
      "Vehicular traffic facing the signal may proceed straight " +
      "through or turn right or left unless another device at the " +
      "place prohibits either or both such turns.",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484B.307 - Traffic controlled by official " +
      "traffic-control devices exhibiting different colored " +
      "lights",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec307",
  },
  {
    key: "nrs-red-right-turn",
    quote:
      "After complying with the requirement to stop, vehicular " +
      "traffic facing such a signal and situated on the extreme " +
      "right of the highway may proceed into the intersection for " +
      "a right turn only when the intersecting highway is " +
      "two-directional or one-way to the right",
    source: "Nevada Revised Statutes, Chapter 484B (Legislative Counsel Bureau, Rev. 4/15/2026)",
    section:
      "NRS 484B.307 - Traffic controlled by official " +
      "traffic-control devices exhibiting different colored " +
      "lights",
    url: "https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec307",
  },
  {
    key: "dmv-test-25",
    quote:
      "The Nevada knowledge test for a Class C, non-commercial " +
      "license consists of 25 multiple-choice questions.",
    source: "Nevada DMV - Driver License Testing (dmv.nv.gov, fetched 2026-09-06)",
    section: "Driver License Testing - Knowledge (Written) Test",
    url: "https://dmv.nv.gov/dltesting.htm",
  },
  {
    key: "dmv-test-pass",
    quote:
      "80 percent or better is a passing score. The test will " +
      "stop when you have reached 20 correct answers or six " +
      "incorrect.",
    source: "Nevada DMV - Driver License Testing (dmv.nv.gov, fetched 2026-09-06)",
    section: "Driver License Testing - Knowledge (Written) Test",
    url: "https://dmv.nv.gov/dltesting.htm",
  },
  {
    key: "dmv-test-online",
    quote:
      "The knowledge test is available to take online at " +
      "KnowToDrive Nevada. These results are transmitted to the " +
      "DMV automatically for the purposes of issuing instruction " +
      "permits or driver licenses.",
    source: "Nevada DMV - Driver License Testing (dmv.nv.gov, fetched 2026-09-06)",
    section: "Driver License Testing - Knowledge (Written) Test",
    url: "https://dmv.nv.gov/dltesting.htm",
  },
  {
    key: "dmv-test-fee",
    quote:
      "The DMV charges a Testing Fee of $25 for a first-time " +
      "knowledge and skills test and $10 for all retests.",
    source: "Nevada DMV - Driver License Testing (dmv.nv.gov, fetched 2026-09-06)",
    section: "Driver License Testing - Fees",
    url: "https://dmv.nv.gov/dltesting.htm",
  },
  {
    key: "dmv-k2d-fee",
    quote:
      "The KnowToDrive Nevada written exam charges a $6.75 fee " +
      "each time the exam is taken.",
    source: "Nevada DMV - Driver License Testing (dmv.nv.gov, fetched 2026-09-06)",
    section: "Driver License Testing - Fees",
    url: "https://dmv.nv.gov/dltesting.htm",
  },
  {
    key: "dmv-vision-2040",
    quote:
      "The minimum level of acceptable vision for full driving " +
      "privileges is 20/40. If a driver must wear glasses or " +
      "contact lenses to meet this standard, Restriction B will " +
      "be placed on the license.",
    source: "Nevada DMV - Driver License Testing (dmv.nv.gov, fetched 2026-09-06)",
    section: "Driver License Testing - Vision Test",
    url: "https://dmv.nv.gov/dltesting.htm",
  },
  {
    key: "dmv-permit-expire",
    quote:
      "Instruction Permit results are valid for 1 year. If " +
      "expired over 30 days, you must retake the test.",
    source: "Nevada DMV - Get a Teen Instruction Permit (dmv.nv.gov, fetched 2026-09-06)",
    section: "Get a Teen Instruction Permit - Step 2: Get Your Instruction Permit",
    url: "https://dmv.nv.gov/dlipteens.htm",
  },
  {
    key: "dmv-skills-after-permit",
    quote:
      "You must pass the knowledge test and obtain an instruction " +
      "permit for a given class of license or endorsement before " +
      "you schedule your skills test.",
    source: "Nevada DMV - Driver License Testing (dmv.nv.gov, fetched 2026-09-06)",
    section: "Driver License Testing - Skills (Driving) Test",
    url: "https://dmv.nv.gov/dltesting.htm",
  },
  {
    key: "dmv-interpreter",
    quote:
      "An applicant who has a lack of English or Spanish language " +
      "skills may use an interpreter during a written examination " +
      "for a non-commercial driver's license, driver " +
      "authorization card or instruction permit.",
    source: "Nevada DMV - Driver License Testing (dmv.nv.gov, fetched 2026-09-06)",
    section: "Driver License Testing - Interpreters",
    url: "https://dmv.nv.gov/dltesting.htm",
  },
  {
    key: "dmv-no-interpreter-drive",
    quote: "The DMV does not allow interpreters to be present during any drive test.",
    source: "Nevada DMV - Driver License Testing (dmv.nv.gov, fetched 2026-09-06)",
    section: "Driver License Testing - Interpreters",
    url: "https://dmv.nv.gov/dltesting.htm",
  },
];
