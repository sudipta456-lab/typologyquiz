import type { Jurisdiction, HandbookExcerpt } from "../types";
import { vermontSets1to3 } from "./sets-1-3";
import { vermontSets4to6 } from "./sets-4-6";
import { vermontExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = vermontExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 *
 * dmv.vermont.gov is the Vermont Department of Motor Vehicles, a department of
 * the state Agency of Transportation, and it serves the Driver's Manual PDF
 * itself. legislature.vermont.gov is the Vermont General Assembly's own server,
 * where the Vermont Statutes Online publishes Title 23 - the source for every
 * number the manual states without one.
 */
export const officialHosts: string[] = [
  "dmv.vermont.gov",
  "legislature.vermont.gov",
];

export const jurisdiction: Jurisdiction = {
  slug: "vermont",
  name: "Vermont",
  code: "VT",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-10-14",
  handbookEdition: "2025 edition (form VN-007)",
  researchNote: "docs/driving/research/vermont.md",
  licenceName: "Learner's Permit",
  intro:
    "Vermont licenses drivers through the Department of Motor Vehicles, part of the Agency of Transportation, and the knowledge test is what earns you a Learner's Permit. It is 20 multiple-choice questions with four answers each, 16 correct to pass, and since the DMV moved it off the counter it is taken online through mydmv.vermont.gov rather than in an office. Vermont issues the permit from age 15, and a 16- or 17-year-old then holds it a full year before a Junior Driver's License. This bank is written from the 2025 edition of the Vermont Driver's Manual, with Title 23 of the Vermont Statutes supplying what the book leaves out - the six-foot fire hydrant, the 100-foot signal, the four-foot bicycle clearance, the liability minimums.",
  officialTest: {
    questionCount: 20,
    passCount: 16,
    passLabel: "16 of 20 (80%)",
    notes: [
      "Twenty multiple-choice questions, four answers each, 16 correct to pass. The manual states all three figures on the page that describes the tests; no DMV web page repeats them.",
      "The permit test is no longer taken at a DMV counter. The manual says plainly that it is no longer taken in our office and is an online test on mydmv.vermont.gov, so you sit it at home and pay the test fee whether you pass or fail.",
      "The manual publishes no time limit for the knowledge test, and neither does the DMV website. Treat it as untimed but do not count on it.",
      "Fail and you wait a day. The rule is at least one day before taking another one - not the same afternoon. Every attempt costs the knowledge-test fee again.",
      "The manual may not be used during the test. That instruction is printed on its own page near the front.",
      "The book is the syllabus. Chapter 7 is the driving-rules chapter and the manual tells you to read the rest of it before you sit the test, because the licensing chapters are testable too.",
      "The DMV publishes DriveVermont, a free official web tutorial at drivevt.vermont.gov with quizzes and a practice exam the manual says looks very similar to the real one.",
      "At 18 the graduated ladder falls away. An adult applicant still needs a permit and still takes this same knowledge test, but not the one-year hold, the driver education course, or the 40 practice hours.",
      "The road test is separate and comes later. Vermont examiners ask for a hill start, a parallel park and the back-into-a-side-street turnaround, and they will turn you away before you start if the car has no valid inspection sticker, registration or insurance card.",
    ],
  },
  handbookName: "Vermont Driver's Manual",
  handbookUrl: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf",
  officialInfoUrl: "https://dmv.vermont.gov/licenses/new/learners-permit",
  localGotchas: [
    "Vermont's default maximum is 50 mph, not 55 and not 65. The manual says the maximum for any vehicle on all Vermont roads is 50 miles per hour or as posted, and 23 V.S.A. 1081 sets the same figure in law. Only the Interstate is 65. Drivers arriving from almost anywhere else answer this one wrong.",
    "The following distance Vermont teaches is FOUR seconds, not three. The manual gives the four-second count in full, repeats it for work zones, motorcycles, slow-moving vehicles and horses, and tells you to stretch past four in rain, snow or poor visibility.",
    "The fire hydrant distance is six feet. Nearly every other state says 15. Vermont's figure comes from 23 V.S.A. 1104, which also gives 20 feet from a crosswalk at an intersection, 30 feet on the approach to a stop sign or signal, and 50 feet from the nearest rail of a railroad crossing.",
    "You must hold the Learner's Permit for one full year before a Junior Driver's License, and there is no way around it except turning 18. The permit also needs a clean two-year record to get, and a clean six months before the junior licence.",
    "Junior passengers unlock in stages, not all at once. Three months alone, then immediate family only - siblings and parents - for the next three, then no limit after six months, and never more passengers than there are safety belts.",
    "Pass a bicyclist and you owe four feet. The manual asks for four feet of passing space and 23 V.S.A. 1033 makes it law with a civil penalty of at least $200. The same four-foot figure applies to any vehicle you overtake.",
    "Move over means change lanes if you can; if you cannot, the manual tells you to slow to 20 mph below the speed limit to get past a stopped emergency vehicle. The statute states the duty without that number, so learn the manual's figure and the duty behind it.",
    "Every rider on a motorcycle wears a helmet in Vermont - operator and passenger, no age exemption. 23 V.S.A. 1256 requires headgear meeting the federal standard.",
    "Refuse the breath test and you lose the licence for at least six months, and the DMV can suspend you through a civil process before any criminal DUI case is decided. Under 21, an alcohol concentration of .02 is enough for a civil violation and a suspension.",
  ],
  sets: [...vermontSets1to3, ...vermontSets4to6].sort(
    (a, b) => a.setNumber - b.setNumber
  ),
};
