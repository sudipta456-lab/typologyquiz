import type { Jurisdiction, HandbookExcerpt } from "../types";
import { arkansasSets1to3 } from "./sets-1-3";
import { arkansasSets4to6 } from "./sets-4-6";
import { arkansasExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = arkansasExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 * media.ark.org is the State of Arkansas document host that serves the study
 * guide PDF; dps.arkansas.gov is the Department of Public Safety, which runs
 * the Arkansas State Police; quiz.ark.org serves the State Police's own
 * official practice test.
 */
export const officialHosts: string[] = ["media.ark.org", "dps.arkansas.gov", "quiz.ark.org"];

export const jurisdiction: Jurisdiction = {
  slug: "arkansas",
  name: "Arkansas",
  code: "AR",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "Volume 1 - Edition 10, July 2026",
  researchNote: "docs/driving/research/arkansas.md",
  licenceName: "Instruction Permit",
  intro:
    "Arkansas is a two-agency state and that trips people up before they even sit down. The Arkansas State Police write and administer the knowledge exam; the Department of Finance and Administration issues the license at a revenue office afterwards. Testing starts at 14, and the State Police say plainly that their study guide is the only source the exam is drawn from. Everything below is written from the July 2026 edition of that guide, including the statutes it reprints.",
  officialTest: {
    questionCount: 25,
    passCount: 20,
    passLabel: "20 of 25 (80%)",
    notes: [
      "The Arkansas State Police do not publish the exam's length or pass mark. Their own official practice test generates 25 questions drawn from the real knowledge test's question pool, and 25 questions at 80 percent is the figure Arkansas applicants consistently report, so that is what is shown here.",
      "The exam is taken on a computer at an Arkansas State Police testing site, in every county. Appointments are booked through the State Police scheduling tool.",
      "There is a $5.00 fee for each written examination under Act 1289 of 2015, but you do not pay it at the testing site - it is added to the cost of your license and collected by the Department of Finance and Administration.",
      "The State Police publish a free practice test at quiz.ark.org and an AR Driver Testing app, and warn that they are not associated with any third-party practice-test site.",
      "Pass, and the instruction permit is valid for two years from the date of the knowledge exam. You still need the vision test, and if you are under 18 the parent or guardian paperwork.",
      "The State Police reported that more than 63,000 of 111,123 written test applicants failed in 2019. Roughly half of first attempts do not pass.",
    ],
  },
  handbookName: "Arkansas Driver License Study Guide",
  handbookUrl: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf",
  officialInfoUrl:
    "https://dps.arkansas.gov/law-enforcement/arkansas-state-police/services-programs/driver-examination/",
  localGotchas: [
    "Testing starts at 14, and Arkansas uses instruction permit and Learner's License for two different stages. The permit comes first, at 14, after the knowledge and vision tests; the Learner's License comes after the skills test.",
    "Under 18 there is no phone use at all - not even hands-free. From 18 to 20 hands-free only. Texting is banned at every age.",
    "You stop for a school bus with red lights flashing from any position, in any lane. The only escape is a median twenty feet or more wide, and most urban medians are nowhere near that.",
    "The center left-turn lane may be used as part of a left turn and never as an acceleration lane. It is Arkansas's most-repeated lane rule and its most-ignored one.",
    "On an unposted county road the limit is 40 mph, and exceeding a county road limit by more than 15 mph is a Class C misdemeanor rather than a fine.",
    "Wipers on means headlights on. Arkansas ties the two together by law, and daytime rain is where people forget.",
  ],
  sets: [...arkansasSets1to3, ...arkansasSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
