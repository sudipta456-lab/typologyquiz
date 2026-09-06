import type { Jurisdiction, HandbookExcerpt } from "../types";
import { southcarolinaSets1to3 } from "./sets-1-3";
import { southcarolinaSets4to6 } from "./sets-4-6";
import { southcarolinaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = southcarolinaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["dmv.sc.gov", "scdmvonline.com", "scstatehouse.gov", "sc.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "southcarolina",
  name: "South Carolina",
  code: "SC",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "April 2026 edition (dmv.sc.gov upload 2026-04; generated 30 March 2026)",
  researchNote: "docs/driving/research/southcarolina.md",
  licenceName: "Beginner's Permit",
  intro:
    "South Carolina's beginner's permit knowledge test is written from the SCDMV Driver's License Manual, a 141-page book built on the AAMVA model manual. The manual leaves out most of the numbers people expect - every speed limit, every parking distance, the adult BAC limit - so this bank fills those from Title 56 of the South Carolina Code and tells you where each one came from.",
  officialTest: {
    questionCount: 30,
    passCount: 24,
    passLabel: "24 of 30 (80%)",
    notes: [
      "The SCDMV does not publish the question count or pass mark on dmv.sc.gov or in the manual. The 30-question, 80% figure is what every practice site and driving school reports; treat it as unconfirmed and aim well above it.",
      "Questions are multiple choice with three options (a, b or c), matching the manual's own sample questions and the SCDMV's official online practice exam at apps.sc.gov.",
      "Taken on a computer at any SCDMV branch, or through a One Stop third-party tester. The knowledge test fee is $2.00 and the permit is $2.50.",
      "You fail automatically if you leave the test area before finishing, talk to anyone, or bring written material or any electronic device into the test area.",
      "There is no published time limit. The official online practice exam restarts after three minutes of inactivity.",
    ],
  },
  handbookName: "South Carolina Driver's License Manual",
  handbookUrl: "https://dmv.sc.gov/sites/scdmv/files/2026-04/Driver's%20Manual.pdf",
  officialInfoUrl: "https://dmv.sc.gov/driver-services/drivers-license/beginner-permits",
  localGotchas: [
    "The manual's following distance is 4 seconds, not the 3 most other states teach - and it adds 1 more second at night, 2 on an unfamiliar road at night.",
    "School bus: on a two-lane road everyone stops. On a road with at least two lanes each way, only traffic BEHIND the bus stops. You must also stop for AMBER lights, not just red.",
    "The manual never states a speed limit. The defaults are in the Code: 70 interstate, 60 divided multilane, 55 elsewhere, 40 unpaved, 30 in an urban district.",
    "Headlights are required by law whenever your wipers are running for rain, sleet or snow, and from half an hour after sunset to half an hour before sunrise.",
    "A permit, conditional or special restricted holder is suspended at 6 points; a full licence holder at 12. Points halve after one year.",
    "Since 1 September 2025, simply holding a phone while driving is illegal: $100 first offence, $200 plus 2 points after that.",
  ],
  sets: [...southcarolinaSets1to3, ...southcarolinaSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
