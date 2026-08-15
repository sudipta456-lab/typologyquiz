import type { Jurisdiction, DrivingTestSet } from "./types";
import { albertaSets1to3 } from "./alberta/sets-1-3";
import { albertaSets4to6 } from "./alberta/sets-4-6";
import { ontarioSets1to3 } from "./ontario/sets-1-3";
import { ontarioSets4to6 } from "./ontario/sets-4-6";
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
