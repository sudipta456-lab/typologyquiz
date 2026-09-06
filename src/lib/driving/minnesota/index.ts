import type { Jurisdiction, HandbookExcerpt } from "../types";
import { minnesotaSets1to3 } from "./sets-1-3";
import { minnesotaSets4to6 } from "./sets-4-6";
import { minnesotaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = minnesotaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["dps.mn.gov", "revisor.mn.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "minnesota",
  name: "Minnesota",
  code: "MN",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "June 2026",
  researchNote: "docs/driving/research/minnesota.md",
  licenceName: "Class D Instruction Permit",
  intro:
    "Minnesota's Class D knowledge test is written straight out of the Driver's Manual, and DVS says so: its own practice test tells you every answer is in the book. What catches people is the Minnesota-specific geometry - J-turns, zipper merges, bus shoulders - and the pile of distance numbers the manual prints without ever putting them in one place.",
  officialTest: {
    questionCount: 40,
    passCount: 32,
    passLabel: "32 of 40 (80%)",
    notes: [
      "The manual gives the pass mark as 80 percent. The 40-question figure comes from Minnesota driver education programs rather than from DVS, so treat it as the working shape rather than a published number.",
      "You may take only one written test per day.",
      "If you fail two consecutive written tests, a $10 fee is charged for the third and every test after it.",
      "The test may be taken on paper or on a computer, and DVS offers it in several languages as well as by group oral exam at some exam stations.",
      "Minnesota Statutes 171.13 lists the subjects the test must cover, including railroad crossing safety, slow-moving vehicles, school bus lights and stop arm, bicycle law, carbon monoxide and work zones.",
    ],
  },
  handbookName: "Minnesota Driver's Manual",
  handbookUrl: "https://assets.dps.mn.gov/files/dvs/dvs-class-d-drivers-manual-english.pdf",
  officialInfoUrl: "https://dps.mn.gov/divisions/dvs/pages/drivers-license-information.aspx",
  localGotchas: [
    "At a reduced conflict intersection (J-turn) you may never turn left from the side street. You turn right, then use the median opening to make a U-turn.",
    "Lane splitting and filtering by motorcyclists are legal in Minnesota, and drivers must not block a rider doing it.",
    "You stop for a school bus's flashing red lights at 20 feet even if the stop arm never swings out. The lights are the trigger, not the arm.",
    "You may cross the center line to pass a bicyclist even inside a no-passing zone, as long as it is safe and you leave three feet.",
    "Buses may drive on freeway shoulders, but only while main-line traffic is moving below 35 mph.",
  ],
  sets: [...minnesotaSets1to3, ...minnesotaSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
