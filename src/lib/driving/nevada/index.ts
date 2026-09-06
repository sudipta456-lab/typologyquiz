import type { Jurisdiction, HandbookExcerpt } from "../types";
import { nevadaSets1to3 } from "./sets-1-3";
import { nevadaSets4to6 } from "./sets-4-6";
import { nevadaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = nevadaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["dmv.nv.gov", "leg.state.nv.us"];

export const jurisdiction: Jurisdiction = {
  slug: "nevada",
  name: "Nevada",
  code: "NV",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "March 2024 (DMV 700)",
  researchNote: "docs/driving/research/nevada.md",
  licenceName: "Class C Instruction Permit",
  intro:
    "Nevada's knowledge test is 25 multiple-choice questions and you need 20 right. It is short, which makes it unforgiving: five wrong answers is the whole margin, and the test stops the moment you reach six. Everything below is written from the March 2024 Nevada Driver's Handbook and, where the handbook leaves a number out, from the Nevada Revised Statutes.",
  officialTest: {
    questionCount: 25,
    passCount: 20,
    passLabel: "20 of 25 (80%)",
    notes: [
      "The test ends early either way: it stops as soon as you have 20 correct answers, and it stops as soon as you have six wrong.",
      "You can take it at a DMV office on a touch screen, in English or Spanish and with audio, or at home through KnowToDrive Nevada.",
      "The DMV testing fee is $25 for your first knowledge and skills test and $10 for each retest. KnowToDrive charges $6.75 per attempt on top of that.",
      "If reading the test is the problem, you may ask for an oral examination instead.",
      "Passing buys you an instruction permit that is good for one year. Let it lapse by more than 30 days and you sit the knowledge test again.",
      "Under 18 you also need a parent or guardian to co-sign, a DMV 301 Certification of Attendance from your school, and a vision check.",
    ],
  },
  handbookName: "Nevada Driver's Handbook",
  handbookUrl: "https://dmv.nv.gov/pdfforms/dlbook.pdf",
  officialInfoUrl: "https://dmv.nv.gov/dltesting.htm",
  localGotchas: [
    "Nevada school zones are 15 or 25 mph, and the limit runs from a half hour before school opens to a half hour after it closes - not only while children are visible.",
    "The school bus rule has exactly one exception: on a divided highway you stop only if you are traveling the same direction as the bus. Everywhere else, both directions stop.",
    "Signal distances are tested by the number: 100 feet on city streets, 300 feet on open highways, for turns and for lane changes alike.",
    "Riding in the bed of a pickup is legal in Nevada once you are 18. Only under-18s are barred from it on a paved highway, and people miss this by assuming a blanket ban.",
    "No speed limit anywhere in Nevada may exceed 80 mph, and 80 really is posted on some rural interstate. The handbook prints examples, not the ceiling.",
  ],
  sets: [...nevadaSets1to3, ...nevadaSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
