import type { Jurisdiction, HandbookExcerpt } from "../types";
import { montanaSets1to3 } from "./sets-1-3";
import { montanaSets4to6 } from "./sets-4-6";
import { montanaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = montanaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 * mvdmt.gov is the Motor Vehicle Division's own site - the MVD is a division of
 * the Montana Department of Justice, and it moved off dojmt.gov onto this
 * domain, which is where the current driver manual PDF and the licensing pages
 * are served. legmt.gov is the Montana Legislature; the Montana Code Annotated
 * is published on its mca.legmt.gov host.
 */
export const officialHosts: string[] = ["mvdmt.gov", "legmt.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "montana",
  name: "Montana",
  code: "MT",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-07",
  handbookEdition: "Revised April 2024",
  researchNote: "docs/driving/research/montana.md",
  licenceName: "Non-Commercial Learner Permit (NCLP)",
  intro:
    "Montana has no DMV. Driver licensing runs through the Motor Vehicle Division, a division of the Department of Justice, and the written test is what gets you a Non-Commercial Learner Permit - Step 1 of the three-step graduated program. This bank is written from the Revised April 2024 printing of the Montana Driver Manual, with Title 61 of the Montana Code Annotated supplying the numbers the book leaves out and correcting two figures the book has not caught up with, and the MVD's own licensing pages supplying the permit steps.",
  officialTest: {
    questionCount: 33,
    passCount: 27,
    passLabel: "27 of 33 (82%)",
    notes: [
      "MVD publishes neither the question count nor the pass mark. Not in the manual, not on mvdmt.gov, not in its FAQ. The 33 questions and 27 correct shown here are the figures every Montana prep site reports and no official page confirms; a Montanan on r/Montana in 2024 called it \"an 80 percent pass rate\". Treat the shape as unconfirmed, treat 82 percent as the number to beat, and aim well above it.",
      "The subjects are set by statute rather than by a syllabus. Section 61-5-110, MCA requires a knowledge test of your ability to read and understand highway signs and of your knowledge of the traffic laws of this state, alongside an eyesight test and a road test.",
      "No time limit is published anywhere. Do not assume one either way.",
      "Every chapter of the manual ends with a quiz and the answers are printed on page 85. Montana learners consistently say those chapter questions are the closest thing to the real test the state publishes, and they are free.",
      "You pay once and get three tries. A driver license receipt is valid for one year and allows three attempts within that year to pass all required examinations. Receipts are not renewable: fail three times, or let the year run out, and you re-apply and start over.",
      "It is taken at an MVD driver exam station, by appointment. All stations require scheduled appointments, booked at cars.dojmt.gov or through the Customer Care Center. Montanans routinely report waits of weeks to months for a slot, so book before you are ready rather than after.",
      "A vision screening is part of the same visit: at least 20/40 in at least one eye, with or without corrective lenses.",
      "Under 18 you need a parent, guardian or responsible adult to sign a consent form before testing may begin, and that signature accepts financial responsibility for any damage you cause.",
      "A student in a state-approved traffic education course can be tested by the course instead. Section 61-5-110, MCA lets the department certify a high school traffic education course as a cooperative driver testing program that administers the department's own standardized knowledge and road tests.",
      "License fees are charged per year of validity - $5.00 a year for a Class D license or a learner license - so a 16-year-old pays for the years to their 21st birthday. The full current table is on the MVD's licensing fees page.",
    ],
  },
  handbookName: "Montana Driver Manual",
  handbookUrl:
    "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  officialInfoUrl: "https://mvdmt.gov/new-driver-license/",
  localGotchas: [
    "The manual's speed table is not the whole law. It never prints the 25 mph default for an urban district, which is the figure a town street carries when nothing is posted, and its interstate row reads \"75/80\" while Section 61-8-303, MCA now sets 80 mph outside an urbanized area of 50,000 or more and 65 mph inside one. Two-lane highways drop from 70 by day to 65 at night, and daytime here runs from half an hour before sunrise to half an hour after sunset.",
    "Signaling distance is two numbers, not one: 100 feet before the turn in town, 300 feet on a rural road. Montana learners report that the questions asking for a specific distance are the ones that catch them, and picking the larger, safer-sounding number is still marked wrong.",
    "The move-over rule in the manual is out of date. The book says slow to 20 mph below the limit on a road posted 50 mph or more. Section 61-8-388, MCA now says 20 below on the interstate, 30 below on a state highway or county road, and half the posted limit on any other road or whenever you cannot change lanes.",
    "Montana has no statewide texting or handheld phone ban. The manual says only that most Montana cities have passed their own laws, so whether a call is legal depends on the town you are driving through.",
    "Lane filtering is legal here, which surprises people from almost anywhere else. Section 61-8-392, MCA lets a two-wheeled motorcycle pass a stopped or slow-moving vehicle in the same lane, at up to 20 mph, when the traffic being passed is doing 10 mph or less.",
    "You get three attempts, not unlimited ones. The license receipt is valid for one year and covers three tries at all required examinations; it is not renewable, so a fourth failure means re-applying from the start.",
    "The manual's first-offense DUI penalty is stale. It prints a $300 to $1,000 fine and 1 to 60 days in jail; Section 61-8-1007, MCA sets not less than $600 and not more than $1,000, with 24 consecutive hours to 6 months. The BAC thresholds - 0.08, 0.02 under 21, 0.04 commercial, 5 ng/ml THC - are current in both.",
  ],
  sets: [...montanaSets1to3, ...montanaSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
