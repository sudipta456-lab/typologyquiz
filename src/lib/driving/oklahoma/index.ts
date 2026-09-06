import type { Jurisdiction, HandbookExcerpt } from "../types";
import { oklahomaSets1to3 } from "./sets-1-3";
import { oklahomaSets4to6 } from "./sets-4-6";
import { oklahomaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = oklahomaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["oklahoma.gov", "oscn.net"];

export const jurisdiction: Jurisdiction = {
  slug: "oklahoma",
  name: "Oklahoma",
  code: "OK",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "Updated 11/24/25",
  researchNote: "docs/driving/research/oklahoma.md",
  licenceName: "Class D Learner Permit",
  intro:
    "Oklahoma's written knowledge test is 20 questions and you need 15 right, with 60 minutes on the clock. Everything below is written from the Oklahoma Driver Manual that Service Oklahoma publishes, and where the manual leaves a number out, from Title 47 of the Oklahoma Statutes and Service Oklahoma's own licensing pages.",
  officialTest: {
    questionCount: 20,
    passCount: 15,
    passLabel: "15 of 20 (75%)",
    timeLimitMinutes: 60,
    notes: [
      "The questions come from the Oklahoma Driver Manual, and cover traffic laws, safe driving practices and the drug and alcohol laws.",
      "You can take it online through KnowTo Drive or in person at a Service Oklahoma location. Online, you get two attempts before you have to come in.",
      "Fail it and by law you wait at least one day before retesting. A retest costs $4 on top of the issuance fee.",
      "You still take a vision screening in person, and if you are under 18 a parent or legal guardian has to be with you.",
      "Completing an approved driver education course can waive the written test. Parent-taught driver education does not waive it.",
    ],
  },
  handbookName: "Oklahoma Driver Manual",
  handbookUrl:
    "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf",
  officialInfoUrl: "https://oklahoma.gov/service/popular-services/written-test.html",
  localGotchas: [
    "Oklahoma prints a speed for every road type and they are all different: 75 on a controlled-access highway, 80 on a turnpike, 65 on an undivided state highway, 55 on a county road, 35 in a state park.",
    "Parking distances are the manual's own list of thirteen: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 30 feet from a stop sign or flashing beacon, 50 feet from the nearest rail.",
    "There is no distance for stopping behind a school bus. What there is instead is a mandatory one-year revocation for failing to stop, and the only escape is a bus on a different roadway.",
    "Under 21 the standard is any measurable quantity of alcohol, not 0.08, and a first offense costs six months of your licence. Any detectable cannabis is illegal to drive with, medical card or not.",
    "The graduated licence runs on hours and passengers: 5 a.m. to 10 p.m., one passenger unless everyone lives in your house, and a moving-violation conviction freezes you at your current level for six months.",
  ],
  sets: [...oklahomaSets1to3, ...oklahomaSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
