import type { Jurisdiction, HandbookExcerpt } from "../types";
import { iowaSets1to3 } from "./sets-1-3";
import { iowaSets4to6 } from "./sets-4-6";
import { iowaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = iowaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["iowadot.gov", "legis.iowa.gov", "iowa.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "iowa",
  name: "Iowa",
  code: "IA",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "MM1170, 07/23/2026",
  researchNote: "docs/driving/research/iowa.md",
  licenceName: "Instruction Permit",
  intro:
    "Iowa lets you start at 14, which is younger than almost anywhere else, and the knowledge test is the only thing standing between you and an instruction permit. Everything below is written from the Iowa Driver's License Manual dated 07/23/2026 and, where the manual leaves a number out, from Iowa Code chapter 321 and the licensing rules in 761 Iowa Administrative Code chapter 604.",
  officialTest: {
    questionCount: 25,
    passCount: 20,
    passLabel: "80% correct",
    notes: [
      "The Iowa DOT does not publish how many questions the real knowledge test has. What it does publish is its own practice test: 25 questions drawn from the same bank the real test uses, and 80 percent to pass. That is the figure shown here.",
      "761 IAC 604.9(1) lets the department revise the test at any time and declare the minimum passing score for each test, so treat 80 percent as the number to beat and not as a ceiling.",
      "Three ways to sit it: at a DMV or county treasurer's office by appointment, at home with a parent proctoring it, or at a participating school under the Skip the Trip program.",
      "The at-home option needs an application filed 7 to 14 days ahead, a parent with a valid Iowa licence, and a computer - a phone or tablet will not do. The emailed link expires after 72 hours.",
      "A pass is good for 180 days (761 IAC 604.9(3)). Fail, and a retest is at the examiner's discretion. An oral test is available on request if you cannot read the written one.",
      "You still need the vision screening, and a parent or guardian has to sign consent every single time a permit or licence is issued to you.",
    ],
  },
  handbookName: "Iowa Driver's License Manual",
  handbookUrl: "https://iowadot.gov/media/7308/download?inline=",
  officialInfoUrl:
    "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18",
  localGotchas: [
    "Iowa's school bus rule is 15 feet, not the 20 or 25 most neighbouring states use, and meeting a bus with amber lights flashing means slowing to 20 mph before you ever reach it.",
    "You may pass a stopped school bus in exactly one situation: you are meeting it on a road with four or more lanes and it is on the other side. Lane count, not a median, is what decides it.",
    "Park no closer than five feet from a hydrant and ten feet from a stop sign. Both figures are smaller than the ones most states teach, and the fifty feet from the nearest rail is larger.",
    "At an uncontrolled intersection - and Iowa's gravel roads are full of them - the driver on the left yields. There is no sign to remind you.",
    "The manual teaches a three- to four-second following distance, but the DOT's own drive-test page tells examiners' candidates to use the two-second rule. Learn the manual's figure for the written test.",
    "Since July 2025 you cannot hold a phone at all, for any purpose. The old law only banned messaging, so scrolling music used to be a defence and is not one now.",
  ],
  sets: [...iowaSets1to3, ...iowaSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
