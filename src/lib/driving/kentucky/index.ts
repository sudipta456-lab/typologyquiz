import type { Jurisdiction, HandbookExcerpt } from "../types";
import { kentuckySets1to3 } from "./sets-1-3";
import { kentuckySets4to6 } from "./sets-4-6";
import { kentuckyExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = kentuckyExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = [
  "drive.ky.gov",
  "transportation.ky.gov",
  "apps.legislature.ky.gov",
  "kentuckystatepolice.ky.gov",
  "wp.kentuckystatepolice.ky.gov",
];

export const jurisdiction: Jurisdiction = {
  slug: "kentucky",
  name: "Kentucky",
  code: "KY",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "10-11-2023",
  researchNote: "docs/driving/research/kentucky.md",
  licenceName: "Instruction Permit",
  intro:
    "Kentucky splits the job between two agencies: you apply at a Transportation Cabinet regional driver licensing office, and the Kentucky State Police give you the vision screening and the written test. The manual is the only study source KSP endorses, and it says the pass mark is 80 percent. Everything below is written from the Kentucky Driver Manual dated 10-11-2023 and, where the manual leaves a number out, from KRS chapters 186, 189 and 189A.",
  officialTest: {
    questionCount: 40,
    passCount: 32,
    passLabel: "32 of 40 (80%)",
    notes: [
      "The manual publishes the pass mark - a minimum score of 80 percent - but not the length of the test. Test-takers, including one who identified themselves as a Transportation Cabinet employee, consistently report 40 questions with 32 correct needed.",
      "Kentucky State Police administer the test, usually on a tablet, at a driver testing location. The Transportation Cabinet regional office takes the application first and issues the permit afterward.",
      "The test is reported to stop early once you have 32 right or 9 wrong, so a run of wrong answers can end it before question 40.",
      "KSP say the questions come straight from the manual and they publish no practice test of their own. The manual's own eleven sample questions at the back are the closest official thing.",
      "You need 20/40 vision, corrected or uncorrected, before you are allowed on to the written test at all.",
      "Under 18 you need a parent or legal guardian to sign at the testing location, plus a School Compliance Verification Form under the No Pass / No Drive law.",
    ],
  },
  handbookName: "Kentucky Driver Manual",
  handbookUrl:
    "https://wp.kentuckystatepolice.ky.gov/wp-content/uploads/2023/11/Kentucky-Driver-Manual-10-11-2023.pdf",
  officialInfoUrl: "https://drive.ky.gov/Drivers/Pages/GDLP.aspx",
  localGotchas: [
    "Kentucky's following distance is 4 seconds, not the 2 or 3 seconds most states teach, and the manual wants another second at night on top of that.",
    "The manual prints no parking distances at all. The numbers the test uses come from KRS 189.450(5): 15 feet from a hydrant and 30 feet from a stop sign, signal or flashing beacon.",
    "Off-street parking lots open to the public carry a 15 mph statutory limit, which almost nobody expects to be a real speed limit.",
    "The manual says you must be 16 to take the written test, but KRS 186.450(1) has set the instruction permit age at 15. The book has not caught up.",
    "On school buses the manual excuses oncoming traffic on any highway of four or more lanes, while KRS 189.370(1) excuses it only where those lanes are divided by an elevated barrier or unpaved median. When in doubt on a Kentucky road, stop.",
  ],
  sets: [...kentuckySets1to3, ...kentuckySets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
