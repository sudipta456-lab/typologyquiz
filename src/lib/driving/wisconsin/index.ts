import type { Jurisdiction, HandbookExcerpt } from "../types";
import { wisconsinSets1to3 } from "./sets-1-3";
import { wisconsinSets4to6 } from "./sets-4-6";
import { wisconsinExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = wisconsinExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["wisconsindot.gov", "docs.legis.wisconsin.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "wisconsin",
  name: "Wisconsin",
  code: "WI",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "2026 (BDS126)",
  researchNote: "docs/driving/research/wisconsin.md",
  licenceName: "Class D Instruction Permit",
  intro:
    "Wisconsin runs two separate written tests at the DMV, and you have to clear both: a 50-question knowledge test on the rules and a 15-question highway signs test. Both are marked at 80 percent. Everything below is written from the 2026 Wisconsin Motorists' Handbook and, where the handbook leaves a number out, from Wisconsin Statutes chapters 343 and 346.",
  officialTest: {
    questionCount: 50,
    passCount: 40,
    passLabel: "40 of 50 (80%)",
    notes: [
      "There is a second, separate test: 15 highway signs questions, 12 correct to pass. Failing one test does not cancel the other.",
      "Knowledge tests are walk-in at DMV customer service centers - no appointment - and take about 45 minutes on a touch screen.",
      "Free at a DMV service center. Applicants aged 15 to 17 may take it online through KnowTo Drive instead, for $10 per attempt.",
      "Fail and you can retake no sooner than the next day. You may take the same test five times in a one-year period before you need DMV permission.",
      "You still need the vision screening, and if you are under 18 you must be at least 15 and enrolled in driver education before the permit is issued.",
    ],
  },
  handbookName: "Wisconsin Motorists' Handbook",
  handbookUrl: "https://wisconsindot.gov/Documents/dmv/shared/bds126-motorists-handbook.pdf",
  officialInfoUrl: "https://wisconsindot.gov/Pages/dmv/teen-driver/teen-hw-aply/knowledge.aspx",
  localGotchas: [
    "At a roundabout you yield to anything over 40 feet long or 10 feet wide even if you got there first - a Wisconsin rule that exists in almost no other state.",
    "You stop 20 feet from a school bus flashing red from either direction. The only escape is a divided highway with a barrier, and you must be on the far side of it.",
    "Wisconsin's parking numbers are its own: 10 feet from a hydrant, 15 feet from a crosswalk, 4 feet from a driveway, 25 feet from the nearest rail.",
    "A flashing yellow arrow is permission to turn after yielding, not a protected turn. Oncoming traffic is looking at a green.",
    "Under 21 the limit is absolute sobriety - any detectable alcohol - not the 0.08 figure everyone memorises.",
  ],
  sets: [...wisconsinSets1to3, ...wisconsinSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
