import type { Jurisdiction, HandbookExcerpt } from "../types";
import { coloradoSets1to3 } from "./sets-1-3";
import { coloradoSets4to6 } from "./sets-4-6";
import { coloradoExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = coloradoExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["dmv.colorado.gov", "leg.colorado.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "colorado",
  name: "Colorado",
  code: "CO",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "DR 2337 (12/05/24), January 2025 edition",
  researchNote: "docs/driving/research/colorado.md",
  licenceName: "Instruction Permit",
  intro:
    "A short handbook with a long memory for numbers: Colorado's test asks the school-bus distance, the headlight rule, the mountain-road tie-breaker and the under-21 alcohol limit that the 27-page book states exactly once each.",
  officialTest: {
    questionCount: 25,
    passCount: 20,
    passLabel: "80% - 20 of 25",
    timeLimitMinutes: 60,
    notes: [
      "The DMV does not publish the question count or pass mark on dmv.colorado.gov. The 25 questions and 80% used here are what Colorado driving schools and recent test-takers consistently report; the handbook itself says only that the test covers road signs, driving under the influence, driving rules, safety rules and legal items.",
      "You can take the test in a state driver license office, at a driving school, or online through the DMV's @Home Driving Knowledge Test, which gives you 60 minutes, requires a webcam, and needs an adult over 19 to act as proxy if you are under 19.",
      "There is no limit on attempts, but only two tests a day. Every retest costs an $11.50 state fee, and in-office tests are not started within 30 minutes of closing.",
      "Under-18 applicants must bring a parent or another eligible adult with a Colorado license to sign the Affidavit of Liability (DR 2460), and then hold the permit 12 months with 50 logged hours (10 at night) before the drive test.",
    ],
  },
  handbookName: "Colorado Driver Handbook (DR 2337, January 2025)",
  handbookUrl: "https://dmv.colorado.gov/sites/dmv/files/documents/DR_2337_Jan2025.pdf",
  officialInfoUrl: "https://dmv.colorado.gov/permits-first-time-driver-license",
  localGotchas: [
    "The under-21 alcohol limit is 0.02, not 0.08 - roughly one drink - and a purchase or possession conviction costs the license even when no driving was involved.",
    "On a steep, narrow mountain road the DOWNHILL driver yields, backing up to a turnout if needed; uphill traffic has the right-of-way.",
    "Headlights are required from sunset to sunrise or whenever you cannot see 1,000 feet - and on four-lane roads posted above 40 mph the signal distance doubles from 100 to 200 feet.",
    "A school bus with red lights flashing stops traffic in BOTH directions on any undivided road, including four-lane roads without a median; only a median lets oncoming traffic continue, and you stop 20 feet back.",
    "Passing does not suspend the speed limit: exceeding the posted limit to complete a pass is listed as an illegal passing behaviour.",
  ],
  sets: [...coloradoSets1to3, ...coloradoSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
