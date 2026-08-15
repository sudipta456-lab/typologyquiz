import type { Jurisdiction, DrivingTestSet } from "./types";
import { albertaSets1to3 } from "./alberta/sets-1-3";
import { albertaSets4to6 } from "./alberta/sets-4-6";
import { ontarioSets1to3 } from "./ontario/sets-1-3";
import { ontarioSets4to6 } from "./ontario/sets-4-6";
import { virginiaSets1to3 } from "./virginia/sets-1-3";
import { virginiaSets4to6 } from "./virginia/sets-4-6";
import { newjerseySets1to3 } from "./newjersey/sets-1-3";
import { newjerseySets4to6 } from "./newjersey/sets-4-6";
import { michiganSets1to3 } from "./michigan/sets-1-3";
import { michiganSets4to6 } from "./michigan/sets-4-6";
import { northcarolinaSets1to3 } from "./northcarolina/sets-1-3";
import { northcarolinaSets4to6 } from "./northcarolina/sets-4-6";
import { illinoisSets1to3 } from "./illinois/sets-1-3";
import { illinoisSets4to6 } from "./illinois/sets-4-6";
import { georgiaSets1to3 } from "./georgia/sets-1-3";
import { georgiaSets4to6 } from "./georgia/sets-4-6";
import { ohioSets1to3 } from "./ohio/sets-1-3";
import { ohioSets4to6 } from "./ohio/sets-4-6";
import { pennsylvaniaSets1to3 } from "./pennsylvania/sets-1-3";
import { pennsylvaniaSets4to6 } from "./pennsylvania/sets-4-6";
import { newyorkSets1to3 } from "./newyork/sets-1-3";
import { newyorkSets4to6 } from "./newyork/sets-4-6";
import { floridaSets1to3 } from "./florida/sets-1-3";
import { floridaSets4to6 } from "./florida/sets-4-6";
import { texasSets1to3 } from "./texas/sets-1-3";
import { texasSets4to6 } from "./texas/sets-4-6";
import { californiaSets1to3 } from "./california/sets-1-3";
import { californiaSets4to6 } from "./california/sets-4-6";
import { washingtonSets1to3 } from "./washington/sets-1-3";
import { washingtonSets4to6 } from "./washington/sets-4-6";
import { massachusettsSets1to3 } from "./massachusetts/sets-1-3";
import { massachusettsSets4to6 } from "./massachusetts/sets-4-6";
import { tennesseeSets1to3 } from "./tennessee/sets-1-3";
import { tennesseeSets4to6 } from "./tennessee/sets-4-6";
import { arizonaSets1to3 } from "./arizona/sets-1-3";
import { arizonaSets4to6 } from "./arizona/sets-4-6";

const byNumber = (a: DrivingTestSet, b: DrivingTestSet) => a.setNumber - b.setNumber;

export const JURISDICTIONS: Jurisdiction[] = [
  {
    slug: "alberta",
    name: "Alberta",
    code: "AB",
    country: "CA",
    countryLabel: "Canada",
    licenceName: "Class 7 Learner's Licence",
    intro:
      "Alberta's Class 7 knowledge test is 30 questions, and it stops the moment you've got 25 right or 6 wrong. These sets build up to that.",
    officialTest: {
      questionCount: 30,
      passCount: 25,
      passLabel: "25 of 30 (83%)",
      timeLimitMinutes: 60,
      notes: [
        "The real test ends early once you reach 25 correct (pass) or 6 wrong (fail).",
        "Taken on a computer at any registry agent - no appointment needed.",
      ],
    },
    handbookName: "Alberta Driver's Guide",
    handbookUrl: "https://www.alberta.ca/driver-guides-overview-and-pdf-versions",
    officialInfoUrl: "https://www.alberta.ca/graduated-drivers-licensing",
    localGotchas: [
      "Playground and school zone hours differ - and the limits apply on the days and times posted, not all day.",
      "GDL drivers are at zero alcohol. Not 'under the legal limit' - zero.",
      "A flashing green light in Alberta means something different than in some other provinces.",
    ],
    sets: [...albertaSets1to3, ...albertaSets4to6].sort(byNumber),
  },
  {
    slug: "ontario",
    name: "Ontario",
    code: "ON",
    country: "CA",
    countryLabel: "Canada",
    licenceName: "G1 Licence",
    intro:
      "The G1 knowledge test is commonly delivered as two 20-question sections - road signs and rules of the road. We practise them separately so a strong half can't hide a weak one.",
    officialTest: {
      questionCount: 40,
      passCount: 32,
      // Ontario publishes only "two or three sections" and 80% overall; the
      // 20+20 / 16-per-section shape is what candidates and every practice
      // resource actually see, but it is not stated on ontario.ca. The copy
      // below says so plainly rather than presenting it as official.
      passLabel: "80% overall (commonly 16 of 20 per section)",
      notes: [
        "Officially: the knowledge test has two or three sections and you need at least 80% overall.",
        "In practice it is delivered as 20 road-signs questions and 20 rules-of-the-road questions, and candidates and practice resources treat each half as needing 16 of 20.",
        "We score the two halves separately here, because that is the harder standard - clear both and you are covered either way.",
      ],
      sectionedBy: [
        { topics: ["signs", "signals"], label: "Road signs", passCount: 16 },
        {
          topics: [
            "rules",
            "rightOfWay",
            "speed",
            "parking",
            "safety",
            "impairment",
            "sharing",
            "emergencies",
            "licensing",
          ],
          label: "Rules of the road",
          passCount: 16,
        },
      ],
    },
    handbookName: "Official MTO Driver's Handbook",
    handbookUrl: "https://www.ontario.ca/document/official-mto-drivers-handbook",
    officialInfoUrl:
      "https://www.ontario.ca/document/official-mto-drivers-handbook/getting-your-drivers-licence",
    localGotchas: [
      "Signs and rules are usually delivered as separate halves, so people fail on signs while acing rules. We score them separately for that reason.",
      "School bus red flashers: whether you must stop depends on whether the road is divided.",
      "G1 holders are at zero blood alcohol and need a qualified accompanying driver.",
    ],
    sets: [...ontarioSets1to3, ...ontarioSets4to6].sort(byNumber),
  },
  {
    slug: "texas",
    name: "Texas",
    code: "TX",
    country: "US",
    countryLabel: "United States",
    licenceName: "Texas Driver License",
    intro:
      "Texas passes at 70% - the most forgiving mark in the US - but the questions still come straight out of the handbook.",
    officialTest: {
      questionCount: 30,
      passCount: 21,
      passLabel: "21 of 30 (70%)",
      notes: [
        "Texas passes at 70%, lower than most states - you can miss up to 9.",
        "Questions come from the Texas Driver Handbook (DL-7).",
      ],
    },
    handbookName: "Texas Driver Handbook (DL-7)",
    handbookUrl: "https://www.dps.texas.gov/section/driver-license/texas-driver-handbooks",
    officialInfoUrl: "https://www.dps.texas.gov/section/driver-license",
    localGotchas: [
      "Texas has both posted maximums and the 'reasonable and prudent' standard - speed questions test both.",
      "Under 21 is zero tolerance for alcohol, not 0.08.",
      "Move Over / Slow Down applies to more vehicle types than people expect.",
    ],
    sets: [...texasSets1to3, ...texasSets4to6].sort(byNumber),
  },
  {
    slug: "florida",
    name: "Florida",
    code: "FL",
    country: "US",
    countryLabel: "United States",
    licenceName: "Class E Learner License",
    intro:
      "Florida asks 50 questions and wants 40 right. The insurance rules catch people out - it is a no-fault state, so the minimums it tests are not the ones most drivers expect.",
    officialTest: {
      questionCount: 50,
      passCount: 40,
      passLabel: "40 of 50 (80%)",
      notes: [
        "50 multiple-choice questions on Florida traffic laws, safe driving practices and traffic controls.",
        "You need 40 correct - 80 percent.",
        "Applicants under 18 may take it online through an approved third party administrator; everyone else takes it at a service centre.",
      ],
    },
    handbookName: "Official Florida Driver License Handbook",
    handbookUrl: "https://www.flhsmv.gov/driver-licenses-id-cards/education-course-requirements/florida-driver-license-handbook/",
    officialInfoUrl: "https://www.flhsmv.gov/driver-licenses-id-cards/",
    localGotchas: [
      "Florida is a no-fault state - the PIP and PDL minimums it tests are not the liability figures people expect.",
      "Move Over now covers disabled vehicles too, and there is a 5 mph floor when you cannot change lanes.",
      "The under-18 curfew splits at 16 and 17 - the hours are different for each.",
    ],
    sets: [...floridaSets1to3, ...floridaSets4to6].sort(byNumber),
  },
  {
    slug: "newyork",
    name: "New York",
    code: "NY",
    country: "US",
    countryLabel: "United States",
    licenceName: "Learner Permit",
    intro:
      "New York has a second hurdle most people miss: 14 of 20 passes, but miss three of the four road-sign questions and you fail anyway.",
    officialTest: {
      questionCount: 20,
      passCount: 14,
      passLabel: "14 of 20 (70%), including 2 of 4 road sign questions",
      // Deliberately NOT scored with sectionedBy. Our scorer splits a set into
      // equal halves, so New York's 4-and-16 split would ask for 20% of the
      // sign questions instead of 50% - a LOOSER bar than the real test, which
      // is the wrong direction to be wrong in.
      notes: [
        "20 questions. You need at least 14 correct.",
        "Separately, you must get at least 2 of the 4 road sign questions right - 14 correct still fails if you miss three signs.",
        "Questions come from Chapters 4 to 11 of the manual plus the road signs section. Licensing and vehicle-ownership chapters are not tested.",
      ],
    },
    handbookName: "New York State Driver's Manual (MV-21)",
    handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-practice-tests",
    officialInfoUrl: "https://dmv.ny.gov/",
    localGotchas: [
      "Junior licence rules differ sharply between New York City, Long Island and upstate - and a junior permit is stricter again than a junior licence.",
      "Right turn on red is prohibited in New York City unless a sign allows it - the opposite of the rest of the state.",
      "Passing the written test needs 2 of the 4 sign questions, on top of 14 of 20 overall.",
    ],
    sets: [...newyorkSets1to3, ...newyorkSets4to6].sort(byNumber),
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    code: "PA",
    country: "US",
    countryLabel: "United States",
    licenceName: "Learner's Permit",
    intro:
      "Pennsylvania asks only 18 questions but wants 15 right, so there is almost no room to guess - one of the tightest margins anywhere.",
    officialTest: {
      questionCount: 18,
      passCount: 15,
      passLabel: "15 of 18 (83%)",
      notes: [
        "18 multiple-choice questions. You need 15 correct, so you can miss only three.",
        "Taken in person at a driver license center, no appointment needed. You may retake it the next business day, one attempt per day.",
      ],
    },
    handbookName: "Pennsylvania Driver's Manual (PUB 95)",
    handbookUrl: "https://www.pa.gov/agencies/dmv/driver-services/drivers-manuals.html",
    officialInfoUrl: "https://www.pa.gov/agencies/dmv.html",
    localGotchas: [
      "Only three wrong answers fail you - the tightest margin of any state here.",
      "The snow and ice rule changed in 2022: a flat fine for not clearing your car, and a much heavier one if dislodged ice hurts someone.",
      "Junior licence holders face an 11pm curfew and passenger limits that tighten after a crash or conviction.",
    ],
    sets: [...pennsylvaniaSets1to3, ...pennsylvaniaSets4to6].sort(byNumber),
  },
  {
    slug: "ohio",
    name: "Ohio",
    code: "OH",
    country: "US",
    countryLabel: "United States",
    licenceName: "Temporary Instruction Permit (TIPIC)",
    intro:
      "Ohio asks 40 questions and passes at 75%. Watch the probationary night hours - they change after your first year, not on your birthday.",
    officialTest: {
      questionCount: 40,
      passCount: 30,
      // The BMV publishes one flat 75% mark. The "20 signs + 20 rules with
      // 16 and 15 thresholds" figure circulating on practice-test sites is not
      // Ohio's - both bmv.ohio.gov and the manual state 40 questions at 75%.
      passLabel: "30 of 40 (75%)",
      notes: [
        "40 multiple-choice questions on motor vehicle regulations and traffic signs. You need 75% correct.",
        "There is no separate road-signs threshold - that rule belongs to other states.",
        "Fail and you wait at least 24 hours. In person you may retake once a day; online is capped at two attempts per six months.",
      ],
    },
    handbookName: "Ohio Driver Manual",
    handbookUrl: "https://www.bmv.ohio.gov/links-handbooks.aspx",
    officialInfoUrl: "https://www.bmv.ohio.gov/dl-gdl.aspx",
    localGotchas: [
      "Probationary night limits change after 12 months of holding the licence, not when you turn 17.",
      "Ohio calls it OVI, not DUI or DWI - the questions use the state's own term.",
      "The manual gives following distance two ways; four seconds is the number to hold yourself to.",
    ],
    sets: [...ohioSets1to3, ...ohioSets4to6].sort(byNumber),
  },
  {
    slug: "georgia",
    name: "Georgia",
    code: "GA",
    country: "US",
    countryLabel: "United States",
    licenceName: "Class CP Instructional Permit",
    intro:
      "Georgia scores road signs and road rules as two separate exams of 20, and you need 15 in each. Ace the rules and fluff the signs and you still fail.",
    officialTest: {
      questionCount: 40,
      passCount: 30,
      passLabel: "15 of 20 in EACH part (road signs and road rules)",
      // Georgia's two parts are equal halves of 20, so the scorer's
      // passCount / (questionCount / sections) works out to the correct 75%
      // per section. New York's 4-and-16 split could not be expressed this way.
      notes: [
        "Two separate 20-question exams: road signs, and road rules. You need 15 correct in each.",
        "Neither official source gives an aggregate score, so a strong half cannot rescue a weak one.",
        "Retake the next day after a first failure, then 7 days after a second. $10 per attempt.",
      ],
      sectionedBy: [
        { topics: ["signs", "signals"], label: "Road signs", passCount: 15 },
        {
          topics: [
            "rules",
            "rightOfWay",
            "speed",
            "parking",
            "safety",
            "impairment",
            "sharing",
            "emergencies",
            "licensing",
          ],
          label: "Road rules",
          passCount: 15,
        },
      ],
    },
    handbookName: "Georgia Driver's Manual",
    handbookUrl: "https://dds.georgia.gov/georgia-drivers-manual",
    officialInfoUrl: "https://dds.georgia.gov/section-3-testing-information",
    localGotchas: [
      "Signs and rules are scored separately - 15 of 20 in each, with no combined score to fall back on.",
      "Under 21, a single 4-point conviction suspends your licence. Under 18, it takes 4 points in 12 months.",
      "Joshua's Law shapes when a 16-year-old can be licensed at all.",
    ],
    sets: [...georgiaSets1to3, ...georgiaSets4to6].sort(byNumber),
  },
  {
    slug: "illinois",
    name: "Illinois",
    code: "IL",
    country: "US",
    countryLabel: "United States",
    licenceName: "Instruction Permit",
    intro:
      "Scott's Law is the single most-missed topic in Illinois, and the penalties are far heavier than people expect. These sets lean into it.",
    officialTest: {
      questionCount: 35,
      passCount: 28,
      passLabel: "80% correct (at least 35 questions)",
      // No ilsos.gov page states a question count. The authority is
      // 92 Ill. Adm. Code 1030.80(b), which sets a MINIMUM of 35 questions at
      // 80% - so 35 is a floor and "28" is arithmetic, not a published figure.
      notes: [
        "The rule sets a minimum of 35 written questions with 80% correct, so the exact count can be higher.",
        "Scott's Law, adverse conditions and warning-sign shapes are where Illinois learners measurably lose the most marks.",
      ],
    },
    handbookName: "Illinois Rules of the Road",
    handbookUrl: "https://www.ilsos.gov/content/dam/publications/pdf_publications/dsd_a112.pdf",
    officialInfoUrl: "https://www.ilsos.gov/departments/drivers/drivers_license/home.html",
    localGotchas: [
      "Scott's Law covers more than police cars, and a first offence starts at $250 and climbs steeply.",
      "The under-19 phone ban has no hands-free exception - unlike the rest of the state's rules, it keys off 19, not 18.",
      "Moving-violation limits differ by age: three in 12 months at 21+, but two in 24 months under 21.",
    ],
    sets: [...illinoisSets1to3, ...illinoisSets4to6].sort(byNumber),
  },
  {
    slug: "northcarolina",
    name: "North Carolina",
    code: "NC",
    country: "US",
    countryLabel: "United States",
    licenceName: "Learner Permit",
    intro:
      "North Carolina runs the signs test as a separate exam, and several of its rules are the opposite of what drivers from other states expect - the horn before overtaking, two feet of passing clearance, two seconds of following distance.",
    officialTest: {
      questionCount: 25,
      passCount: 20,
      // NCDMV publishes no question count anywhere. The administrative rule
      // (19A NCAC 03B .0201) sets 80% on the knowledge test and, separately,
      // nine of twelve on the road signs test - two different fractions, so
      // this cannot go through sectionedBy. 25/20 below is only a stand-in that
      // preserves the 80%; the notes give the rule as published.
      passLabel: "80% on the knowledge test, plus 9 of 12 road signs",
      notes: [
        "The rule sets 80% correct on the knowledge test. No official source states how many questions that is.",
        "Road signs is a SEPARATE test: identify 9 of 12 signs by colour, shape and meaning. Each test must be passed on its own.",
        "Retake after 7 calendar days.",
      ],
    },
    handbookName: "North Carolina Driver's Handbook",
    handbookUrl: "https://www.ncdot.gov/dmv/license-id/driver-licenses/new-drivers/Pages/driver-handbook.aspx",
    officialInfoUrl: "https://www.ncdot.gov/dmv/license-id/driver-licenses/Pages/driver-license-tests.aspx",
    localGotchas: [
      "You must sound the horn before overtaking, and the driver being passed is legally required to help you do it.",
      "Passing clearance is two feet and following distance is two seconds - lower than most states teach.",
      "The unposted limit inside a city or town is 35 mph, not 25.",
    ],
    sets: [...northcarolinaSets1to3, ...northcarolinaSets4to6].sort(byNumber),
  },
  {
    slug: "michigan",
    name: "Michigan",
    code: "MI",
    country: "US",
    countryLabel: "United States",
    licenceName: "Temporary Instruction Permit",
    intro:
      "Michigan runs the test as two separately-scored parts - operator rules and signs - and you have to clear both. Pass one and fail the other and you retake the whole thing.",
    officialTest: {
      // Michigan publishes NO question count and NO pass mark. Not on
      // michigan.gov, not in What Every Driver Must Know, not in law - MCL
      // 257.309 delegates rulemaking only for physical and mental fitness. The
      // "50 questions, 40 correct" figure in circulation is from commercial
      // practice-test sites. The numbers below only give our own sets a ratio
      // to score against; the notes say plainly that Michigan publishes none.
      questionCount: 40,
      passCount: 32,
      passLabel: "Both sections must be passed (Michigan publishes no score)",
      notes: [
        "The test has two separately-scored parts: an operator section of about 45 minutes and a signs section of about 15 minutes. Both must be passed.",
        "Pass one part and fail the other and you must return to a branch office and retake the whole test.",
        "Michigan does not publish a question count or a pass mark anywhere. Any specific figure you have seen came from a practice-test site, not the state.",
        "Applicants 18 and over may take it online; a pass is valid for one year.",
      ],
    },
    handbookName: "What Every Driver Must Know",
    handbookUrl: "https://www.michigan.gov/sos/all-services/manuals",
    officialInfoUrl: "https://www.michigan.gov/sos/license-id/new-drivers",
    localGotchas: [
      "A left turn on red is legal from a TWO-WAY street onto a one-way - broader than most states allow.",
      "The school-bus divided-highway exemption needs a physical barrier. A painted median or centre turn lane does not count.",
      "Move over is two duties at once: slow to 10 mph below the limit AND change lanes.",
    ],
    sets: [...michiganSets1to3, ...michiganSets4to6].sort(byNumber),
  },
  {
    slug: "newjersey",
    name: "New Jersey",
    code: "NJ",
    country: "US",
    countryLabel: "United States",
    licenceName: "Student Learner's Permit",
    intro:
      "New Jersey has more genuinely unusual rules than any other state here - it legislates for ice cream trucks, sets the curfew at 11:01pm, and declines to state a priority rule for traffic circles at all.",
    officialTest: {
      questionCount: 50,
      passCount: 40,
      passLabel: "40 of 50 (80%)",
      notes: [
        "50 questions, plus a survey question about organ donation. You need 40 correct.",
        "No signs/rules split and no per-section threshold - one flat 80%.",
        "The manual is the only authority here; the MVC's knowledge-test page publishes neither the count nor the pass mark.",
      ],
    },
    handbookName: "New Jersey Driver Manual",
    handbookUrl: "https://www.nj.gov/mvc/pdf/license/drivermanual.pdf",
    officialInfoUrl: "https://www.nj.gov/mvc/license/knowledgetest.htm",
    localGotchas: [
      "A dark or unlit traffic signal is a four-way stop - the single most-missed question in New Jersey, at a 55% error rate.",
      "The manual says outright there are no set rules for traffic circles; priority falls to signage, then the established flow.",
      "GDL holders wear Kyleigh's Law decals, face a 0.01% BAC limit, and cannot use hands-free at all.",
    ],
    sets: [...newjerseySets1to3, ...newjerseySets4to6].sort(byNumber),
  },
  {
    slug: "virginia",
    name: "Virginia",
    code: "VA",
    country: "US",
    countryLabel: "United States",
    licenceName: "Learner's Permit",
    intro:
      "Virginia gates the whole exam behind signs: all ten sign questions must be right before the 30-question second part even opens. Miss one and you are done for the day.",
    officialTest: {
      questionCount: 40,
      passCount: 34,
      // Not expressible through sectionedBy: the two parts use different
      // fractions - 10 of 10 on signs (100%) and 24 of 30 on knowledge (80%).
      // The scorer applies one pass fraction per section, so this is stated in
      // the notes instead of being wired up wrongly.
      passLabel: "All 10 sign questions, then 24 of 30 knowledge questions",
      notes: [
        "Part one is 10 road sign questions and you must get every one right. Miss a single sign and part two never opens.",
        "Part two is 30 general knowledge questions, needing 24 correct (80%).",
        "One attempt per business day. Under 18, a failure means waiting a full 15 days; three failures means finishing classroom driver education first.",
      ],
    },
    handbookName: "Virginia Driver's Manual (DMV 39)",
    handbookUrl: "https://www.dmv.virginia.gov/licenses-ids/driver-manuals",
    officialInfoUrl: "https://www.dmv.virginia.gov/licenses-ids/exams/know-exam",
    localGotchas: [
      "Failing to move over is reckless driving - a criminal misdemeanour, not a traffic infraction.",
      "85 mph is reckless driving on its own, so 86 in a posted 70 zone counts even though it is only 16 over.",
      "Radar detectors are unlawful to own in a vehicle, to use, and to sell - and carry no demerit points.",
    ],
    sets: [...virginiaSets1to3, ...virginiaSets4to6].sort(byNumber),
  },
  {
    slug: "california",
    name: "California",
    code: "CA",
    country: "US",
    countryLabel: "United States",
    licenceName: "California Driver License / Permit",
    intro:
      "California leans hard on parking rules - coloured curbs and which way your wheels point on a hill show up far more than people expect.",
    officialTest: {
      questionCount: 46,
      passCount: 38,
      passLabel: "38 of 46 (83%) for under-18",
      notes: [
        "Under-18 applicants get 46 questions and need 38; adults typically get 36 and need 30.",
        "Everything comes from the California Driver's Handbook.",
      ],
    },
    handbookName: "California Driver's Handbook",
    handbookUrl: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/",
    officialInfoUrl: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/",
    localGotchas: [
      "Coloured curbs (red, yellow, white, green, blue) each mean something specific - a classic stumper.",
      "Parking on a hill: which way the wheels turn depends on the slope and whether there's a curb.",
      "The Basic Speed Law can make you unsafe at a legal speed.",
    ],
    sets: [...californiaSets1to3, ...californiaSets4to6].sort(byNumber),
  },
  {
    slug: "washington",
    name: "Washington",
    code: "WA",
    country: "US",
    countryLabel: "United States",
    licenceName: "Instruction Permit",
    intro:
      "Washington's guide is unusually plain-spoken, which cuts both ways: it states some rules as memory aids rather than law, and it leaves out numbers the test still asks for.",
    officialTest: {
      questionCount: 40,
      passCount: 32,
      passLabel: "32 of 40 (80%)",
      notes: [
        "40 questions, 32 correct to pass. No section split and no published time limit.",
        "The Driver Guide itself never states the question count or the pass mark - only the DOL website does. Studying the handbook alone, you would never meet these numbers.",
        "A passing score stays valid for two years, and the test is offered in twelve languages.",
      ],
    },
    handbookName: "Washington State Driver Guide",
    handbookUrl:
      "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides",
    officialInfoUrl:
      "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/do-i-need-take-test",
    localGotchas: [
      "Permit and intermediate licence holders cannot use a phone at all - hands-free included, unlike every other driver in the state.",
      "There is no Washington wipers-on-headlights-on law. The guide offers it as a memory aid; the actual trigger is half an hour after sunset and the 1,000-foot visibility rule.",
      "Yield when you pull onto a paved road from an unpaved one, and treat a dark signal as a four-way stop.",
    ],
    sets: [...washingtonSets1to3, ...washingtonSets4to6].sort(byNumber),
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    code: "MA",
    country: "US",
    countryLabel: "United States",
    licenceName: "Class D Learner's Permit",
    intro:
      "The shortest exam on this site, and the least forgiving: 25 questions in 25 minutes, and a Junior Operator licence that punishes a single speeding ticket harder than most states punish three.",
    officialTest: {
      questionCount: 25,
      passCount: 18,
      passLabel: "18 of 25 (72%) in 25 minutes",
      notes: [
        "25 questions, 18 correct to pass, 25 minutes. No section split.",
        "Taken online, the exam fails you automatically after two minutes of inactivity, on timeout, or if you leave the browser window.",
        "Cheating costs you 60 days holding no permit or licence at all. Each attempt costs $30.",
      ],
    },
    handbookName: "Massachusetts Driver's Manual (revised April 2026)",
    handbookUrl: "https://www.mass.gov/doc/english-drivers-manual/download",
    officialInfoUrl:
      "https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit",
    localGotchas: [
      "Two curfews half an hour apart: a learner's permit under 18 is midnight to 5 a.m., a Junior Operator licence is 12:30 a.m. to 5 a.m. Only a parent or guardian lifts either.",
      "Breaking the Junior Operator night restriction is charged as operating without being licensed - a criminal matter, not a ticket.",
      "Unposted limits run 20/30/40/50. There is no 55 in the default list, and a hydrant is 10 feet, not the 15 most drivers bring in from elsewhere.",
    ],
    sets: [...massachusettsSets1to3, ...massachusettsSets4to6].sort(byNumber),
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    code: "TN",
    country: "US",
    countryLabel: "United States",
    licenceName: "Class D Learner Permit",
    intro:
      "Tennessee is the rare state that tells you the syllabus but not the score: the manual publishes an exact topic split and no question count at all.",
    officialTest: {
      // Tennessee publishes NO question count and NO pass mark for the
      // in-office Class D knowledge test. A full-text search of the 135-page
      // manual returns nothing for "30 questions", "passing score" or "80%".
      // The widely-repeated "30 questions, 80%" belongs to a DIFFERENT test -
      // the at-home proctored online exam, which is open only to applicants
      // aged 15 to 17. The numbers below exist so our own sets have a ratio to
      // score against; the notes say plainly that Tennessee publishes none.
      questionCount: 30,
      passCount: 24,
      passLabel: "Tennessee publishes no question count or pass mark",
      notes: [
        "The manual states the topic split exactly - traffic signs and signals 25%, safe driving principles 25%, rules of the road 25%, drugs and alcohol 25% - but never a question count or a score.",
        "The drugs and alcohol quarter is a statutory floor: by law at least 25 percent of the questions must cover it.",
        "The at-home proctored online test does publish 30 questions, 60 minutes and 80% - but it is open only to applicants aged 15 to 17, so those numbers do not describe the in-office exam.",
        "No test may be repeated the same day, and a failed knowledge test carries a mandatory one-day wait.",
      ],
    },
    handbookName: "Tennessee Comprehensive Driver License Manual",
    handbookUrl: "https://www.tn.gov/safety/driver-services/classd/dlmanual.html",
    officialInfoUrl: "https://www.tn.gov/safety/driver-services/classd.html",
    localGotchas: [
      "The manual says outright that the Basic Speed Rule is not Tennessee law, then teaches it anyway.",
      "Two interstate minimums, not one: 55 mph in the leftmost lane and 45 mph in the right lanes.",
      "School-zone speeding is charged as reckless driving - six points on its own, which is the whole under-18 suspension threshold.",
    ],
    sets: [...tennesseeSets1to3, ...tennesseeSets4to6].sort(byNumber),
  },
  {
    slug: "arizona",
    name: "Arizona",
    code: "AZ",
    country: "US",
    countryLabel: "United States",
    licenceName: "Instruction Permit",
    intro:
      "Arizona teaches two things no other manual does, and both run opposite to instinct: in a dust storm you turn your lights off, and driving around a flood barricade makes you pay for your own rescue.",
    officialTest: {
      questionCount: 30,
      passCount: 24,
      passLabel: "24 of 30 (80%)",
      notes: [
        "30 multiple-choice questions, 80% to pass. MVD publishes no time limit and no retake limit, so neither is stated here.",
        "Taken on a touch-screen at any MVD office without an appointment, or at home through a parent's AZ MVD Now account if you are under 18.",
        "Offered in eleven languages, with an audio version, and a verbal test after a second or third failure.",
      ],
    },
    handbookName: "Arizona Driver License Manual (99-0117, revised March 2026)",
    handbookUrl: "https://apps.azdot.gov/files/mvd/mvd-forms-lib/99-0117.pdf",
    officialInfoUrl: "https://azdot.gov/mvd/services/driver-license-ID/permit-test",
    localGotchas: [
      "Dust storm: pull well off the road, turn your lights OFF and take your foot off the brake. Any light draws blinded drivers toward you.",
      "Drive around a flood barricade and the Stupid Motorist Law makes you liable for the rescue, up to $2,000 - and your insurer may lawfully refuse to cover it.",
      "Seat belts are secondary enforcement with a $10 maximum penalty and no points, which the manual never mentions.",
    ],
    sets: [...arizonaSets1to3, ...arizonaSets4to6].sort(byNumber),
  },
];

export function getJurisdiction(slug: string): Jurisdiction | undefined {
  return JURISDICTIONS.find((j) => j.slug === slug);
}

export function getSet(
  jurisdictionSlug: string,
  setId: string
): { jurisdiction: Jurisdiction; set: DrivingTestSet } | undefined {
  const jurisdiction = getJurisdiction(jurisdictionSlug);
  const set = jurisdiction?.sets.find((s) => s.id === setId);
  if (!jurisdiction || !set) return undefined;
  return { jurisdiction, set };
}

/** Total practice questions available, for marketing copy on the hub page. */
export function totalQuestionCount(): number {
  return JURISDICTIONS.reduce(
    (sum, j) => sum + j.sets.reduce((s, set) => s + set.questions.length, 0),
    0
  );
}
