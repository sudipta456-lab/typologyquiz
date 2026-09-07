import type { Jurisdiction, HandbookExcerpt } from "../types";
import { westvirginiaSets1to3 } from "./sets-1-3";
import { westvirginiaSets4to6 } from "./sets-4-6";
import { westvirginiaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = westvirginiaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 * dmv.wv.gov is the West Virginia Division of Motor Vehicles, which writes and
 * administers the test; transportation.wv.gov and its webapps subdomain are the
 * WV Department of Transportation servers the handbook PDF is served from; and
 * code.wvlegislature.gov is the Legislature's own publication of the West
 * Virginia Code.
 */
export const officialHosts: string[] = [
  "dmv.wv.gov",
  "transportation.wv.gov",
  "code.wvlegislature.gov",
];

export const jurisdiction: Jurisdiction = {
  slug: "westvirginia",
  name: "West Virginia",
  code: "WV",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "Revised 07/2026",
  researchNote: "docs/driving/research/westvirginia.md",
  licenceName: "Level 1 GDL Instruction Permit",
  intro:
    "West Virginia starts at 15, and the knowledge test is the whole of what stands between you and a Level 1 GDL instruction permit. The Division of Motor Vehicles writes and marks that test from one book - the Driver's Licensing Handbook - and publishes twenty sample questions of its own drawn from the same handbook and from state law. This bank is written against the 07/2026 revision of that handbook, with Chapters 17C and 17B of the West Virginia Code filling the numbers the book leaves out.",
  officialTest: {
    questionCount: 25,
    passCount: 19,
    passLabel: "19 of 25 (76%)",
    notes: [
      "At least 25 multiple-choice questions on basic knowledge, traffic rules, regulations, signs and markings taken from the handbook. Automated testing is given at every DMV location.",
      "Nineteen of 25 correct passes, which is 76 percent. Six wrong answers still passes; the seventh is what fails you.",
      "The test is timed, and the DMV does not publish the limit. Any question you have not answered when the time runs out is scored as wrong, so never leave one blank.",
      "$7.50 per attempt. Fail the knowledge test or the road skills test and you may not be tested again within one week - that wait is in W. Va. Code 17B-2-6, not just DMV practice.",
      "One fee buys an applicant under 18 two attempts at the written test. An applicant 18 or over gets two attempts at the written test and three at the road skills test within 90 days of the permit being issued.",
      "You can take it online instead, through Know To Drive, on a computer with a keyboard, mouse and camera. The certificate that comes back is NOT permission to drive: you still have to bring it and your documents to a DMV office.",
      "No cell phones, smart glasses, PDAs, Bluetooth devices or other electronics are allowed in the exam room, and only the applicant taking the test may be in it.",
      "An audio version with headphones is available for the reading impaired. Headsets are limited, so you may have to wait.",
      "The DMV publishes twenty sample questions of its own at dmv.wv.gov, taken from state law and the handbook. They are not the real items, but they show what the state thinks is worth asking.",
    ],
  },
  handbookName: "West Virginia Driver's Licensing Handbook",
  handbookUrl: "https://dmv.wv.gov/driver-services/drivers/drivers-licensing-handbooks",
  officialInfoUrl: "https://dmv.wv.gov/graduated-drivers-licensing-gdl",
  localGotchas: [
    "A Level 1 GDL instruction permit is issued only up to your 18th birthday and expires on it, however old you were when you got it, and it cannot be renewed. There is a 30-day grace period after that birthday, and it exists for one purpose only: to let you finish the road skills examination.",
    "West Virginia is unusually strict about the school bus. Traffic in BOTH directions stops on every highway, street, parking lot, private road and driveway. A median does not excuse you - the only place oncoming traffic keeps going is an interstate, where the bus is on a separate roadway that pedestrians may not cross.",
    "The handbook tells you to steer INTO a skid, not away from it: if the back of the car slides right, you turn right. Learners name this as the item that beat them, because the instinct is to steer the other way.",
    "Dim your headlights within 500 feet of an oncoming vehicle but within 200 feet of one you are following. The DMV's own sample test uses \"200 feet of oncoming vehicles\" as the false answer, so the pair is deliberately tested.",
    "The parking distances come in three different numbers and they are easy to swap: 15 feet from a fire hydrant, 20 feet from a crosswalk at an intersection, 30 feet from a stop sign or traffic signal, and 50 feet from the nearest rail of a railroad crossing.",
    "Passing your knowledge test online through Know To Drive does not give you a permit. The certificate says so in capitals, and West Virginians keep finding that out at the roadside.",
  ],
  sets: [...westvirginiaSets1to3, ...westvirginiaSets4to6].sort(
    (a, b) => a.setNumber - b.setNumber
  ),
};
