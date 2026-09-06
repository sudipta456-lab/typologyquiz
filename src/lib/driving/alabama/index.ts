import type { Jurisdiction, HandbookExcerpt } from "../types";
import { alabamaSets1to3 } from "./sets-1-3";
import { alabamaSets4to6 } from "./sets-4-6";
import { alabamaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = alabamaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = [
  "alea.gov",
  "legislature.state.al.us",
  "alison.legislature.state.al.us",
  "alabamaadministrativecode.state.al.us",
  "alabama.gov",
];

export const jurisdiction: Jurisdiction = {
  slug: "alabama",
  name: "Alabama",
  code: "AL",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "November 2024",
  researchNote: "docs/driving/research/alabama.md",
  licenceName: "Learner License",
  intro:
    "Alabama's knowledge test is written straight out of the ALEA Driver Manual, and the manual says so in as many words: the test is taken from material found in this booklet. It is one of the more complete state handbooks - it prints the statutory speed limits, the parking distances and the point schedule - but it never states how many questions the test has or what score passes, so this bank covers the whole book rather than betting on a section.",
  officialTest: {
    questionCount: 30,
    passCount: 24,
    passLabel: "24 of 30 (80%)",
    notes: [
      "ALEA does not publish a question count or a pass mark, in the manual or on alea.gov. The 30-question, 80% figure is what Alabama driving schools and testing offices consistently report; treat it as unconfirmed and aim well above it.",
      "The fee is $5.00 for each knowledge test, cash or card - the manual states plainly that no checks are accepted.",
      "The test covers Alabama traffic laws, road signs and rules of safe driving, and the manual states that every question comes from the booklet.",
      "Automated (computer) testing is available to everyone taking the knowledge test. Oral examinations are available if you cannot read and comprehend the written test.",
      "The written examination is offered in Arabic, Chinese, Farsi, French, German, Japanese, Korean, Russian, Spanish, Thai and Vietnamese as well as English.",
      "You take it at a Driver License Examining Office; a vision screening comes first, and failing that stops the rest of the testing until an eye specialist clears you.",
    ],
  },
  handbookName: "Alabama Driver Manual",
  handbookUrl: "https://www.alea.gov/sites/default/files/ALEA%20DL%20Manual.pdf",
  officialInfoUrl: "https://www.alea.gov/dps/driver-license/driver-license-information",
  localGotchas: [
    "Alabama's statutory speed limits are a six-step ladder, not one number: 30 in an urban district, 35 on an unpaved county road, 45 on a paved county road, 55 on other roads outside towns, 65 on a four-lane divided highway and 70 on an interstate. The 45 for paved county roads is the one people miss.",
    "You stop for a stopped school bus on a four-to-six lane UNDIVIDED highway in both directions. Only a divided highway releases oncoming traffic, and passing a stopped school bus is a 5-point offense with a fine starting at $150.",
    "The hands-free law took effect in June 2024 and is a primary offense - an officer can stop you for holding the phone alone. The GDL rules go further and ban any handheld device outright for a driver under 18.",
    "Four points on a GDL record, or two moving violations, suspends the license. For a full license the ladder does not start until 12 points in two years.",
    "A learner license holder aged 15 must have a licensed parent, guardian or someone 21 or older in the seat beside them. After the sixteenth birthday any licensed driver in that seat will do.",
    "Alabama law requires headlights any time your wipers are running for rain, sleet or snow, and forbids coasting downhill with the transmission in neutral.",
  ],
  sets: [...alabamaSets1to3, ...alabamaSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
