import type { Jurisdiction, HandbookExcerpt } from "../types";
import { nebraskaSets1to3 } from "./sets-1-3";
import { nebraskaSets4to6 } from "./sets-4-6";
import { nebraskaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = nebraskaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 * dmv.nebraska.gov is the Nebraska Department of Motor Vehicles, which
 * publishes the Driver's Manual, the Driver Licensing Examiner Policies and
 * Procedures Manual and the permit pages; nebraskalegislature.gov is the
 * Nebraska Legislature, which publishes the Revised Statutes.
 */
export const officialHosts: string[] = ["dmv.nebraska.gov", "nebraskalegislature.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "nebraska",
  name: "Nebraska",
  code: "NE",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "January 2025",
  researchNote: "docs/driving/research/nebraska.md",
  licenceName: "Learner's Permit (LPD)",
  intro:
    "Nebraska runs more entry-level permits than almost any other state - a Farm Husbandry Permit from 13, a School Learner's Permit from 14, a School Permit from 14 years and two months, the ordinary Learner's Permit (LPD) from 15, and a Provisional Operator's Permit from 16 - and the same 25-question written test stands in front of most of them. The Nebraska Department of Motor Vehicles writes it from the Nebraska Driver's Manual, whose current edition is dated January 2025. This bank is built on that edition, with Chapter 60 of the Nebraska Revised Statutes filling the numbers the manual leaves out and the DMV's own examiner manual supplying the test format the Driver's Manual never states.",
  officialTest: {
    questionCount: 25,
    passCount: 20,
    passLabel: "20 of 25 (80%)",
    notes: [
      "Twenty-five multiple-choice questions on the Class O written test. You may miss five; the sixth wrong answer fails you. The Driver's Manual itself never states the format - it is published in the DMV's Driver Licensing Examiner Policies and Procedures Manual, which is where these figures come from.",
      "Eighty percent to pass. A widely repeated claim that Nebraska passes at 70 percent is wrong.",
      "No time limit is published. The test runs on a testing tablet with a help button and a skip button, and headsets are available that read the questions aloud.",
      "Written and audio versions are offered in English and Spanish. There is also a 24-question non-verbal picture test, on which you may miss four, for applicants who read neither language comfortably.",
      "A failed test cannot be retaken the same day. Tests one to three need one day between them, the fourth is scheduled for the current date plus seven days, and after a sixth failure you must complete an approved driver training course or wait 90 days from the last failure.",
      "A passed written test is valid for six months. Separately, the Issuance Certificate from a passed exam must be presented to a county treasurer - or to the state driver licensing office in Douglas, Lancaster or Sarpy County - within 90 days.",
      "The manual prints its own practice exam on pages 76 and 77 with a full answer key: 25 true-or-false items and 14 multiple-choice ones, each tagged with the manual page the answer sits on. It is provided by AAA Nebraska and the Cornhusker Motor Club Foundation with the DMV's cooperation, and it is the closest thing to an official study guide the state publishes.",
      "Drive tests in Bellevue, Lincoln and Omaha are by appointment only. A drive test is scored on marks rather than a percentage, and a passing score is 15 marks or less with none of the twelve automatic-failure items checked.",
    ],
  },
  handbookName: "Nebraska Driver's Manual",
  handbookUrl:
    "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf",
  officialInfoUrl: "https://dmv.nebraska.gov/dl/learners-permit",
  localGotchas: [
    "The manual's PDF has a broken character map: the fi ligature comes out as the digit 4 and the fl ligature vanishes, so on screen you will read \"traf4c\", \"of4ce\", \"4ne\" and \"ashing\". Nothing is wrong with the rules - it is a font problem - but it makes several numbers hard to read, including the whole parking-distance list on page 57. Where that happened here, the number was taken from Chapter 60 instead.",
    "There are four unposted maximum speeds people confuse: 20 mph in a business district, 25 in a residential district, 50 on gravel or any surface that is not dustless, and 55 on a paved road that is not part of the state highway system. Business is LOWER than residential, which is the opposite of most guesses.",
    "The manual prints \"75 MPH on rural interstate highways\". Neb. Rev. Stat. 60-6,186 carves 65 mph out of that for the Interstate inside Douglas County, for I-180 in Lancaster County and for I-129 in Dakota County - which covers most of the Interstate an Omaha or Lincoln driver ever uses.",
    "You stop for a school bus with red lights flashing and the stop arm out from either direction unless the roadway is divided by a MEDIAN. A painted center line, a two-way turn lane or four lanes of pavement is not a median. The statute adds a second exception the manual never prints - traffic directed to proceed by a posted sign - and sets the penalty the manual also omits: a Class IV misdemeanor, a $500 fine and points.",
    "Uphill with a curb is the one time the front wheels point AWAY from the curb. In every other parking situation they point toward it, and Neb. Rev. Stat. 60-6,168 states the toward-the-curb rule with no hill exception at all. On a written test, answer from the manual.",
    "Nebraska's handheld device ban is enforced only as a SECONDARY action against an adult driver - an officer cannot stop you for it alone. Permit holders are under a much stricter rule: no use of any type of interactive wireless communication device at all.",
    "The Move Over law is two statutes, not one. The manual describes only 60-6,378, which covers multi-lane controlled-access highways. 60-6,378.01 applies the same duty on every other road in the state.",
  ],
  sets: [...nebraskaSets1to3, ...nebraskaSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
