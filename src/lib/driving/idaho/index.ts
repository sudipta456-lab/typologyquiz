import type { Jurisdiction, HandbookExcerpt } from "../types";
import { idahoSets1to3 } from "./sets-1-3";
import { idahoSets4to6 } from "./sets-4-6";
import { idahoExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = idahoExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 * itd.idaho.gov is the Idaho Transportation Department, which publishes the
 * Driver's Handbook and runs the Division of Motor Vehicles; the same string
 * covers apps.itd.idaho.gov, where ITD serves its own sample knowledge test.
 * legislature.idaho.gov is the Idaho State Legislature, which publishes Idaho
 * Code.
 */
export const officialHosts: string[] = ["itd.idaho.gov", "legislature.idaho.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "idaho",
  name: "Idaho",
  code: "ID",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "July 2026",
  researchNote: "docs/driving/research/idaho.md",
  licenceName: "Class D Instruction Permit",
  intro:
    "Idaho's knowledge test is one of the strictest in the country: 40 questions and only six wrong answers allowed, which is 85 percent. The Idaho Transportation Department writes it and the county sheriff's driver's license offices give it, and page 32 of the handbook says the questions are taken directly from the handbook itself. This bank is written from the July 2026 edition, with Idaho Code filling the gaps the book leaves and correcting the one place where the book is out of date.",
  officialTest: {
    questionCount: 40,
    passCount: 34,
    passLabel: "34 of 40 (85%)",
    notes: [
      "Forty multiple-choice questions. The handbook says you can miss up to six before failing, so 34 correct is the pass mark - a higher bar than most states.",
      "The handbook states that knowledge test questions are taken directly from information included in the Driver's Handbook. There is no separate signs test; sign meanings are mixed in with everything else.",
      "Fail and you wait three days to retest, and you pay the $5 knowledge test fee again.",
      "You take it at a county sheriff's driver's license office, not at a state office. It is offered in twelve languages plus American Sign Language, in written and aural form.",
      "Nothing goes into the testing room with you: no phone, no smart watch, no earbuds, no notes, and no copy of the handbook.",
      "ITD publishes its own sample Class D test and says in the handbook that web-based practice tests are not an accurate representation of the real thing, with the exception of ITD's own. Treat any other site, including this one, as practice for the rules rather than a preview of the questions.",
      "You must be at least 15 to sit the knowledge test at all. Under 17, you take it after driver training and the supervised instruction period, not before.",
    ],
  },
  handbookName: "Idaho Driver's Handbook",
  handbookUrl: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf",
  officialInfoUrl: "https://itd.idaho.gov/dmv/drivers-licenses-id-cards/",
  localGotchas: [
    "Livestock have the right of way on open range, and if you hit one the owner owes you nothing. Idaho learners name this as the question that beat them more often than any other. Open range means almost everything outside city limits and herd districts, and a fence at the roadside does not mean the animals are behind it.",
    "The unposted maximum in a residential, business or urban district is 35 mph, not the 25 mph that most other states use. Three separate Idaho drivers have described guessing 25 and getting it wrong.",
    "Five seconds, not three blinks. Idaho requires a signal for at least five seconds before a lane change on a freeway or highway, and at least 100 feet in a business or residential area. Idaho Code adds that the five-second rule also covers pulling out of a parked position.",
    "The handbook's Cell Phones section on page 92 is out of date. It describes only the texting ban. Idaho Code 49-1401A has banned holding any mobile electronic device since 1 July 2020, it is a primary offense, and the fine starts at $75.",
    "You must give way to a funeral procession, and you may not enter the intersection it is crossing even on a green light. It is a real rule that catches people because almost nobody expects it to be tested.",
    "Headlights go on at sunset in Idaho, not thirty minutes after it. Wipers are not the trigger here; the triggers are sunset to sunrise and any time you cannot see 500 feet.",
  ],
  sets: [...idahoSets1to3, ...idahoSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
