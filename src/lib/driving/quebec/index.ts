import type { Jurisdiction, HandbookExcerpt } from "../types";
import { quebecSets1to3 } from "./sets-1-3";
import { quebecSets4to6 } from "./sets-4-6";
import { quebecExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = quebecExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = [
  "saaq.gouv.qc.ca",
  "legisquebec.gouv.qc.ca",
  "quebec.ca",
  "transports.gouv.qc.ca",
];

export const jurisdiction: Jurisdiction = {
  slug: "quebec",
  name: "Quebec",
  code: "QC",
  country: "CA",
  countryLabel: "Canada",
  contentDate: "2026-09-06",
  handbookEdition: "Driver's Handbook, 2nd Edition",
  researchNote: "docs/driving/research/quebec.md",
  licenceName: "Class 5 Learner's Licence",
  intro:
    "Quebec's knowledge test is run by the SAAQ and scored in three separate sections, and you have to clear 75% in each one. About half of it is illustrated situations where you are asked which vehicles are breaking a rule, so knowing the rule is only half the job - you also have to spot the detail in the picture. These six sets cover the Highway Safety Code, the signs and signals, and the driving behaviour the third section asks about.",
  officialTest: {
    questionCount: 32,
    passCount: 24,
    passLabel: "75% in each of the three sections",
    sectionedBy: [
      {
        label: "Highway Safety Code",
        topics: ["rules", "rightOfWay", "speed", "parking", "licensing"],
        passCount: 8,
      },
      {
        label: "Road signs, pavement markings and traffic signals",
        topics: ["signs", "signals"],
        passCount: 8,
      },
      {
        label: "Behaviours and techniques for driving a passenger vehicle",
        topics: ["safety", "impairment", "sharing", "emergencies"],
        passCount: 8,
      },
    ],
    notes: [
      "Three sections, and you must score 75% in EACH of them. Failing one section means retaking that section only, after at least 28 days.",
      "The SAAQ does not publish how many questions the test has. Learners who have sat it usually describe about 30. The 32 shown here is our own arithmetic figure, chosen only so the three sections work out at exactly 75% each - treat the 75% per section as the number that matters, not the total.",
      "The test takes 30 to 60 minutes and is entirely multiple choice, with audio of the questions available in French and English.",
      "You must have held your learner's licence for at least 10 months before you can sit it, and 12 months before the road test.",
      "Many questions are illustrated situations with numbered vehicles, and the answer options are combinations of those numbers. Read every vehicle separately.",
      "The knowledge test costs $13.50. It is also available in Modern Standard Arabic, Spanish and Mandarin on request.",
    ],
  },
  handbookName: "Driver's Handbook (SAAQ)",
  handbookUrl: "https://saaq.gouv.qc.ca/blob/saaq/documents/publications/drivers-handbook.pdf",
  officialInfoUrl:
    "https://saaq.gouv.qc.ca/en/drivers-licences/obtaining-licence/passenger-vehicle-class-5",
  localGotchas: [
    "Turning right on a red light is legal everywhere in Quebec except the island of Montreal, where it is banned outright. The signs are at the bridges and tunnels, not at every intersection, so drivers from off-island get caught.",
    "The SAAQ's own driving guide sets the following interval at four or more seconds in the city and six or more on the highway, and eight to ten on ice or snow. That is much longer than the two-second rule taught almost everywhere else.",
    "The zero-alcohol rule covers every driver under 22, not just learners and probationary holders, and breaking it costs four demerit points - which is the entire bracket for a new licence.",
    "Winter tires are compulsory from December 1 to March 15 by the calendar, not by the weather, and only studded tires or ones carrying the winter pictogram count.",
    "Excessive speeding starts at 40 km/h over in a zone of 60 km/h or less, so 90 km/h in a 50 zone is already an immediate roadside suspension.",
  ],
  sets: [...quebecSets1to3, ...quebecSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
