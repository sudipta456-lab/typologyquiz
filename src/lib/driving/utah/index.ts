import type { Jurisdiction, HandbookExcerpt } from "../types";
import { utahSets1to3 } from "./sets-1-3";
import { utahSets4to6 } from "./sets-4-6";
import { utahExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = utahExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["dld.utah.gov", "utah.gov", "le.utah.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "utah",
  name: "Utah",
  code: "UT",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "2026-2027",
  researchNote: "docs/driving/research/utah.md",
  licenceName: "Learner Permit",
  intro:
    "Utah's learner permit test is 50 questions, closed book, and marked at 80 percent - and it is only the first of two written hurdles, because every first-time driver also has to score 100 percent on the online Traffic Safety and Trends Exam before the license is issued. Everything below is written from the 2026-2027 Utah Driver Handbook and, where the handbook leaves a number out, from Title 41 Chapter 6a of the Utah Code.",
  officialTest: {
    questionCount: 50,
    passCount: 40,
    passLabel: "40 of 50 (80%)",
    notes: [
      "Closed book. The internet is full of people saying Utah's written test is open book - that is the 25-question exam an already-licensed driver moving in from another state takes, not the first-time learner permit test.",
      "There is no time limit, but the Division reckons on 30 to 45 minutes. You may sit two written tests in a day, and one permit fee covers three attempts within 12 months.",
      "A second exam comes later: the online Traffic Safety and Trends Exam, four videos and 40 questions, and you must score 100 percent. You cannot start it until you hold a permit, you may retake it as often as you like, and no permanent license is issued until it is passed.",
      "You must be 15 to apply. The permit and the test score are both valid for 18 months; let either lapse and you sit the written test again.",
      "The Division publishes a free 30-question practice test on its own site. It is a format sample, not the question bank.",
    ],
  },
  handbookName: "Utah Driver Handbook",
  handbookUrl: "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf",
  officialInfoUrl: "https://dld.utah.gov/learner-permit/",
  localGotchas: [
    "Utah teaches a TWO-second following distance, not the three or four seconds most neighboring states print, and it repeats the same two seconds for freeway driving and for following a motorcycle.",
    "0.05 is the DUI limit for everyone 21 and over - the lowest in the country, and half the 0.08 figure most study material still quotes. Under 21 the Not-a-Drop Act makes any measurable amount a six-month denial.",
    "Turn signals are timed, not distance-based: two seconds before a turn and two seconds before a lane change. Since May 2026 no signal at all is required entering or leaving a roundabout.",
    "The school-bus rule turns on the road, not on the lane count alone. Two lanes and four lanes without a median: everyone stops. Divided highway, or five or more lanes with a shared center turn lane: only traffic behind the bus stops.",
    "Passing the 50-question permit test does not finish the paperwork. The Traffic Safety and Trends Exam is a separate online test that demands a perfect score before the license is printed.",
  ],
  sets: [...utahSets1to3, ...utahSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
