import type { Jurisdiction, HandbookExcerpt } from "../types";
import { mississippiSets1to3 } from "./sets-1-3";
import { mississippiSets4to6 } from "./sets-4-6";
import { mississippiExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = mississippiExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["dps.ms.gov", "billstatus.ls.state.ms.us"];

export const jurisdiction: Jurisdiction = {
  slug: "mississippi",
  name: "Mississippi",
  code: "MS",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "Revised December 2024",
  researchNote: "docs/driving/research/mississippi.md",
  licenceName: "Regular Learner's Permit",
  intro:
    "Mississippi calls its knowledge test the Computerized Exam, and it is the only test between you and a license - the road test has not been given since 2020. Everything below is written from the Driver's License Manual revised in December 2024 and, where the manual leaves a rule out, from the Driver Service Bureau's own pages and from Section 63-1-21 of the Mississippi Code.",
  officialTest: {
    questionCount: 20,
    passCount: 16,
    passLabel: "16 of 20 (80%)",
    notes: [
      "The 20-question length and the 80% pass mark are DPS's own figures, but they come from the 2023 edition of the manual. The December 2024 revision deleted the appendix that carried them and nothing has replaced it, so treat 20 as a floor and study the whole book.",
      "The exam is taken in person at a Driver License Station. No cell phones, ear buds, smart watches or other electronics in the testing area - being caught with them, or cheating, cancels the test and bars you for six months.",
      "Fail and you may retake it the following business day. Fail three times and you wait thirty days before the next attempt.",
      "There is no road test. A parent, teacher or guardian signs an affidavit that they watched you drive at least fifty hours instead.",
      "The permit is $7 and lasts two years, and your exam score stays valid for two. You hold the permit twelve months before a Class R license, unless you are 17 or older, in which case both can be issued the same day.",
      "If you are reading impaired the machine reads the questions and answers aloud through a headset.",
    ],
  },
  handbookName: "Mississippi Driver's License Manual",
  handbookUrl:
    "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf",
  officialInfoUrl: "https://www.driverservicebureau.dps.ms.gov/Drivers/Learners_Permit",
  localGotchas: [
    "You stop at least 10 feet from a school bus with its red lights flashing, from either direction. The only escape is a divided highway of four or more lanes with traffic going both ways, and only if you are on the opposite side.",
    "Mississippi teaches following distance in car lengths, not seconds: one car length for every 10 mph, which is seven car lengths at 70 on the interstate.",
    "Right on red is allowed, but the manual says in as many words that yielding without stopping is illegal. The stop comes first, every time.",
    "At railroad crossings the manual's own phrase is that you stop \"within fifty to ten feet of the outer rail\", and school buses, vehicles for hire and loads of explosives or flammable liquids stop there whether or not a train is coming.",
    "Under 18, a full Class R license still carries a curfew - 10 p.m. Sunday through Thursday, 11:30 p.m. Friday and Saturday - written into Section 63-1-21 and mentioned nowhere in the manual.",
  ],
  sets: [...mississippiSets1to3, ...mississippiSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
