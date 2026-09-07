import type { Jurisdiction, HandbookExcerpt } from "../types";
import { kansasSets1to3 } from "./sets-1-3";
import { kansasSets4to6 } from "./sets-4-6";
import { kansasExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = kansasExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 * ksrevenue.gov is the Kansas Department of Revenue, which publishes the
 * handbook and runs the Division of Vehicles; ksrevisor.gov is the Kansas
 * Office of Revisor of Statutes, which publishes the Kansas Statutes.
 */
export const officialHosts: string[] = ["ksrevenue.gov", "ksrevisor.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "kansas",
  name: "Kansas",
  code: "KS",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "AAMVA 09 Model Test Version (Revised February 2022)",
  researchNote: "docs/driving/research/kansas.md",
  licenceName: "Instruction Permit (Class C or M)",
  intro:
    "Kansas starts younger than almost anywhere: the instruction permit is available at 14, and the knowledge test is what gets you it. The Kansas Department of Revenue's Division of Vehicles writes and administers that test, and it is unusually open about what is on it - the handbook states the format outright, ends every one of its twelve sections with a quiz headed \"These questions may be on the test\", and prints thirteen more sample questions with answers. This bank is written from the February 2022 revision of that handbook, with Chapter 8 of the Kansas Statutes filling the gaps the book leaves.",
  officialTest: {
    questionCount: 25,
    passCount: 20,
    passLabel: "20 of 25 (80%)",
    notes: [
      "Twenty-five multiple-choice questions on traffic signs, pavement markings, and Kansas laws and driving practices. The handbook says the questions are based on the information it provides.",
      "Not timed. The Division of Vehicles says it generally takes 15 to 20 minutes.",
      "Eighty percent to pass, which is 20 of 25. Five wrong answers still passes; the sixth is what fails you. A widely repeated claim that five wrong sends you home is off by one.",
      "You can take it at any Full-Service Driver License Center, through an approved driver's education course, or online at ks.knowtodrive.com - pass online and you bring the result in, and the in-office exam is waived.",
      "Four attempts. After a failure you may retest the next working day once you have paid a $1.50 re-exam fee; after the fourth failure you wait a minimum of six months from the most recent failed exam.",
      "Pass, and the Class C instruction permit is issued for one year. Renewing it means taking and passing the written exam again - there is no paperwork-only renewal for a permit.",
      "Every section of the handbook ends with a short Test Your Knowledge quiz, and Section 11 prints thirteen sample questions with answers. Kansas says these may be on the test, which makes them the closest thing to an official study guide the state publishes.",
    ],
  },
  handbookName: "Kansas Driving Handbook",
  handbookUrl: "https://www.ksrevenue.gov/pdf/dlhb.pdf",
  officialInfoUrl: "https://www.ksrevenue.gov/dovgdl.html",
  localGotchas: [
    "The handbook gives two different look-ahead distances a paragraph apart: at least two blocks or two traffic signals in the city, and at least three blocks or three traffic signals in an urban area. Kansas learners name this pair as the item that beat them, and choosing the bigger number because it sounds safer is how it goes wrong.",
    "There are four unposted maximum speeds, not one: 30 mph in any urban district, 55 on a county or township road, 65 on a state or federal highway, and 75 only on a separated multilane highway that the Secretary of Transportation has designated and posted. A properly marked school zone or business district is 20.",
    "You stop for a school bus with red lights flashing from either direction on a road divided by two solid yellow lines, by a center turning lane, on a multi-lane highway, and at an intersection. The only escape is a median or another physical barrier - a painted lane is not one.",
    "Talking on a phone is not specifically illegal for an adult in Kansas, but writing, sending or reading a written communication is. Under an instruction permit, a farm permit or a restricted license there is no wireless device use at all, except to report illegal activity or summon emergency help.",
    "Wipers on means headlights on. The handbook gives only that trigger; K.S.A. 8-1703 adds sunset to sunrise and any time people and vehicles are not clearly discernible at 1,000 feet.",
    "Permit time from another state does not carry over. Anyone under 17 must have held a Kansas-issued learner's permit for a full year before a license is issued, and driver's education permit slip time does not count toward it.",
  ],
  sets: [...kansasSets1to3, ...kansasSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
