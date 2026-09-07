import type { Jurisdiction, HandbookExcerpt } from "../types";
import { newhampshireSets1to3 } from "./sets-1-3";
import { newhampshireSets4to6 } from "./sets-4-6";
import { newhampshireExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = newhampshireExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 * dmv.nh.gov is the Division of Motor Vehicles, a division of the New Hampshire
 * Department of Safety - New Hampshire has no standalone DMV department, and
 * the manual PDF is served from that host. gencourt.state.nh.us is the New
 * Hampshire General Court's own server, where the Revised Statutes Annotated
 * are published.
 */
export const officialHosts: string[] = ["dmv.nh.gov", "gencourt.state.nh.us"];

export const jurisdiction: Jurisdiction = {
  slug: "newhampshire",
  name: "New Hampshire",
  code: "NH",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-07",
  handbookEdition: "DSMV 360, Rev. 11/25",
  researchNote: "docs/driving/research/newhampshire.md",
  licenceName: "Class D Driver's License (Youth Operator License under 21)",
  intro:
    "New Hampshire is the state with no learner's permit. From 15 and a half you may practice drive with a licensed adult of 25 or older beside you and nothing else in your pocket; the knowledge test is taken once, at 16 or later, as one of the three tests that produce the license itself. The Division of Motor Vehicles - a division of the Department of Safety, not a department of its own - writes and administers a 40-question touch-screen exam with 40 minutes on the clock, and it ends the moment you have nine wrong. This bank is written from the Rev. 11/25 printing of the New Hampshire Driver's Manual, with Title XXI of the Revised Statutes Annotated supplying the numbers the book leaves out and the DMV's own pages supplying the pass mark, the practice-driving conditions and the Youth Operator rules.",
  officialTest: {
    questionCount: 40,
    passCount: 32,
    passLabel: "32 of 40 (80%)",
    timeLimitMinutes: 40,
    notes: [
      "Forty multiple-choice questions with four answers each, on a touch screen, and 40 minutes to finish. The DMV publishes the pass mark as 80 percent, which on 40 questions is 32 right. The manual gives the same result from the other side: the test ends automatically once more than 8 questions have been answered incorrectly.",
      "New Hampshire learners tell each other you only need 30 out of 40. That is 75 percent and it fails. Nothing official anywhere states 30.",
      "The clock is real. Exceeding the 40 minutes terminates the test the same way too many wrong answers does.",
      "Every exam is randomly generated, so a retake is a different paper rather than a second run at the same one. You cannot retest for ten calendar days after a failure.",
      "RSA 263:6 requires every license examination to include questions on distracted driving, driving under the influence, and driving during poor weather conditions. Those three subjects are guaranteed a place; sections 3, 5 and 10 of the manual are where they live.",
      "The test is offered in English, French, Spanish, Portuguese, Arabic, Farsi, Mandarin Chinese and American Sign Language, in both written and audible form. Tell the licensing representative before you start if you want the headphone audio version.",
      "Three tests produce the license: vision, knowledge and road. The vision and knowledge tests must both be passed before a road test can be scheduled, and a road test on the same day is possible only if an appointment happens to be free.",
      "There is no permit stage. New Hampshire issues no learner's permit and does not honor or transfer one from another state, so this exam is taken once, for the license itself.",
      "Pass and you leave with a 60-day paper temporary license; the permanent card is mailed. Anyone 16 or older and under 21 is issued a Youth Operator License, printed vertically, expiring on their 21st birthday.",
    ],
  },
  handbookName: "New Hampshire Driver's Manual",
  handbookUrl: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf",
  officialInfoUrl:
    "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements",
  localGotchas: [
    "There is no learner's permit in New Hampshire and there never has been. A person of 15 and a half may practice drive with a parent, legal guardian or other licensed responsible adult aged 25 or older in the front seat, carrying proof of age, in a non-commercial vehicle - and the accompanying adult is liable for any violation the unlicensed driver commits. A permit from another state is worth nothing here; the DMV says it does not honor or transfer them.",
    "The Youth Operator suspension ladder runs to 20, not to 18, and paying the ticket does not end it. Under RSA 263:14 the Director may suspend an original license held by anyone under 20 after a hearing: 20 to 40 days for a first conviction, 45 to 90 for a second, and 90 to 180 plus a driver attitude program for a third. New Hampshire learners consistently report discovering this after they have already paid the fine.",
    "Following distance here is four seconds, not the three most driver education books use, and it is four seconds behind a motorcycle too. Add at least one more second at night and at least two on an unfamiliar road at night.",
    "New Hampshire is the only state with no adult seat belt law, which leads people to answer that there is no belt law at all. There is: restraints are required for everyone under 18, both as passenger and as driver, and a child under 7 who is also under 57 inches needs a child restraint. RSA 265:107-a adds a rule the manual never prints - a passenger under 2 must be rear-facing.",
    "Right on red after a stop is the only turn New Hampshire's manual permits on a red signal. Most of the country also allows a left from a one-way onto a one-way; the New Hampshire manual does not carve that out, so do not bring it with you.",
    "The manual's speed table reads \"45 or 55 miles per hour in other locations\" and never says which applies where. RSA 265:60, II separates them: 45 on an unimproved rural highway, 55 everywhere else. On an ordinary paved road outside a district, the answer is 55.",
    "Jessica's Law has required drivers to clear snow and ice off the whole vehicle since 2002, and it is enforced through negligent driving at $250 to $500 for a first offense. The offense is that the vehicle is likely to endanger someone, so it does not wait for the ice to hit anything.",
  ],
  sets: [...newhampshireSets1to3, ...newhampshireSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
