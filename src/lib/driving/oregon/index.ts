import type { Jurisdiction, HandbookExcerpt } from "../types";
import { oregonSets1to3 } from "./sets-1-3";
import { oregonSets4to6 } from "./sets-4-6";
import { oregonExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = oregonExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["oregon.gov", "oregonlegislature.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "oregon",
  name: "Oregon",
  code: "OR",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "2026 - 2027 (form 735-37)",
  researchNote: "docs/driving/research/oregon.md",
  licenceName: "Class C Instruction Permit",
  intro:
    "Oregon's Class C knowledge test is 35 multiple-choice questions and you need 28 right - 80 percent. You can sit it at a DMV office on a touch screen or at home on a laptop with a webcam, and if you are under 18 the home version needs an adult proctor over 21. Everything below is written from the 2026-2027 Oregon Driver Manual and, where the manual leaves a number out, from Oregon Revised Statutes chapters 807, 811 and 813.",
  officialTest: {
    questionCount: 35,
    passCount: 28,
    passLabel: "28 of 35 (80%)",
    notes: [
      "There is no stated time limit. The test is multiple choice, and DMV offices stop giving it one hour before closing.",
      "You can take it online at DMV2U at any time, on a laptop or desktop with a keyboard, mouse and webcam - not a phone or tablet. The webcam photographs you at the start and at random during the test.",
      "Under 18 taking it online, a proctor over 21 must supervise, and a proctor may supervise only two tests in any 24 hours.",
      "Fail it and you may test again the same day, subject to office capacity. Online you get two attempts in 24 hours and four attempts in total before you must test at an office.",
      "The fee is $7 each time you take it. In an office the test is on a touch screen and is offered in eight languages; online it is English or Spanish.",
      "Get caught cheating - talking, notes, a phone, or letting someone else test for you - and you fail and cannot test again for 90 days.",
    ],
  },
  handbookName: "Oregon Driver Manual",
  handbookUrl: "https://www.oregon.gov/odot/Forms/DMV/37.pdf",
  officialInfoUrl: "https://www.oregon.gov/odot/dmv/teen/pages/permit.aspx",
  localGotchas: [
    "Oregon's following distance is 2 to 4 seconds, and above 30 mph the manual wants 4 seconds or more. The bare three seconds taught in most states is not Oregon's number.",
    "You stop for a pedestrian in your lane, in the lane next to yours, or in the lane you are turning into - and at a signaled intersection you may not start your turn until they are six feet clear of it.",
    "A painted median or a center turn lane does not divide a road. With a school bus flashing red across a painted median, every lane in both directions stops; only an unpaved median or a barrier lets the far side keep going.",
    "The manual gives no interstate speed limit at all - it just says limits vary. The statutory figure is 65 mph, with 70 mph posted on stretches of I-84 east of The Dalles and a few other rural highways.",
    "Left on red is legal whenever the road you turn INTO is one-way, so it works from a two-way street as well - what is never legal is a left on red onto a two-way road.",
    "Under 18 you may not touch a phone while driving at all - hands-free is no defense, on a permit or on a provisional license.",
  ],
  sets: [...oregonSets1to3, ...oregonSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
