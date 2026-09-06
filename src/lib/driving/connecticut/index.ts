import type { Jurisdiction, HandbookExcerpt } from "../types";
import { connecticutSets1to3 } from "./sets-1-3";
import { connecticutSets4to6 } from "./sets-4-6";
import { connecticutExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = connecticutExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["portal.ct.gov", "ct.gov", "cga.ct.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "connecticut",
  name: "Connecticut",
  code: "CT",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "Revised March 2023",
  researchNote: "docs/driving/research/connecticut.md",
  licenceName: "Learner's Permit (Class D)",
  intro:
    "Connecticut's learner's permit test is 25 questions and you need 20 right - four wrong and you are still fine, five and you come back in a week. The DMV writes it from the Connecticut Driver's Manual, and the questions people actually lose are the teen driving rules and the exact numbers. Everything below is checked against the March 2023 manual and, where the manual leaves a number out, against Connecticut General Statutes Title 14.",
  officialTest: {
    questionCount: 25,
    passCount: 20,
    passLabel: "20 of 25 (80%)",
    notes: [
      "By appointment only, in person, at select DMV offices. There is no walk-in knowledge testing.",
      "The $40 exam fee is paid when you book. Fail and you wait seven days and pay $40 again to reschedule.",
      "You take the vision test first, in the same appointment. The standard is 20/40 with or without glasses.",
      "Since 1 January 2026 every permit applicant must also finish the free online Connecticut Work Zone Safety Course and hand in the certificate. The March 2023 manual predates that rule and does not mention it.",
      "The test is offered on screen in 11 languages and on paper in about 25 more.",
      "The permit is valid until you get your license or two years from issue, whichever comes first.",
    ],
  },
  handbookName: "Connecticut Driver's Manual",
  handbookUrl:
    "https://portal.ct.gov/dmv/-/media/dmv/dmv-pdfs/drivers-manual-english.pdf",
  officialInfoUrl:
    "https://portal.ct.gov/dmv/licenses-permits-ids/take-knowledge-vision-test",
  localGotchas: [
    "A school bus flashing red stops you from both directions. Extra lanes do not release you - only a median or a physical barrier does, and you have to be on the far side of it. The fine is $450 for a first offense.",
    "At 16 or 17 you may not touch a phone at all, hands-free included, and a conviction suspends your license. Drivers 18 and over may use a hands-free device.",
    "A permit holder aged 16 or 17 carries one qualified instructor and nobody else. Friends and siblings are not allowed in the car, and neither is a second adult unless a parent or legal guardian is accompanying the instructor.",
    "The manual prints no speed limit at all. The statutory maximum is 55 mph on ordinary highways and 65 mph only where a 65 limit has been posted under section 14-218a.",
    "Connecticut's parking numbers are 25 feet from a stop sign, 25 feet from a pedestrian safety zone, 10 feet from a hydrant, and no more than one foot from the curb.",
  ],
  sets: [...connecticutSets1to3, ...connecticutSets4to6].sort(
    (a, b) => a.setNumber - b.setNumber
  ),
};
