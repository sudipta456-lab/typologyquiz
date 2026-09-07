import type { Jurisdiction, HandbookExcerpt } from "../types";
import { delawareSets1to3 } from "./sets-1-3";
import { delawareSets4to6 } from "./sets-4-6";
import { delawareExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = delawareExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["dmv.de.gov", "delcode.delaware.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "delaware",
  name: "Delaware",
  code: "DE",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-07",
  handbookEdition: "July 2026 (cover date; produced June 2026)",
  researchNote: "docs/driving/research/delaware.md",
  licenceName: "Class D Learner's Permit",
  intro:
    "Delaware's knowledge test is 32 questions and you need 26, which leaves room for six wrong answers and no more. Every answer comes from one book - the Delaware Driver Manual, reissued in July 2026 - and that book is unusually generous with numbers, printing the whole speed table, the whole parking-distance list and the 300-foot signaling rule that catches out drivers from every neighboring state. These six sets work through it section by section, flag the handful of figures the manual leaves to Title 21, and spend set 5 on the rules Delaware candidates actually report failing on.",
  officialTest: {
    questionCount: 32,
    passCount: 26,
    passLabel: "26 of 32 (81%)",
    notes: [
      "The Rules Of The Road Test is 32 questions and 26 must be correct. That figure comes from the Division's own Sample Written Test page; the manual itself never states it.",
      "The DMV's older FAQ page still says 30 questions with 24 to pass, and links to the page that says 32 and 26. The 32/26 figures are the ones used here. Either way the pass mark is about 81 percent.",
      "The written test is only one of four parts. The examination also includes a vision screening, a Highway Sign and Signal Test in which an examiner shows you signs, signal colors and symbols without labels and asks what they mean, and the road test.",
      "Minimum vision is 20/40 with or without glasses or contact lenses. Between 20/40 and 20/50 the Division may grant a daylight-only restriction.",
      "The Division publishes a ten-question sample test at dmv.de.gov. It is a fraction of the real 32-question exam, and Delaware candidates who study only the sample regularly report failing. The Division's own advice is that all of the answers are found in the Delaware Driver Manual.",
      "The Class D road exam cannot be taken until 30 days after the knowledge exam is passed. The motorcycle road exam waits 10 days. Road exams are given every weekday except Wednesday, at the Wilmington, Delaware City, Dover and Georgetown offices.",
      "Under 18, the permit is a GDL Level One Learner's Permit and requires a Delaware Driver Education Certificate plus a sponsor's signature. At 18 or over, the GDL program is optional and the permit is a Temporary Instruction Permit, with all exams to be passed within twelve months of application.",
      "The manual's own retest rule is written for the road exam - if you fail any part of it you must wait at least 30 days before taking it again.",
      "New residents have 60 days to obtain a Delaware license. Written and road exams may be given but are normally waived if the out-of-state license is valid; drivers licensed in other countries must pass the eye, knowledge and road exams unless they hold a license from Germany, France, Taiwan or a US territory.",
    ],
  },
  handbookName: "Delaware Driver Manual",
  handbookUrl: "https://dmv.de.gov/forms/driver_serv_forms/pdfs/dr_frm_manual.pdf",
  officialInfoUrl:
    "https://dmv.de.gov/DriverServices/drivers_license/index.shtml?dc=dr_lic_written",
  localGotchas: [
    "Delaware's signaling distance is 300 feet, not the 100 feet almost every neighboring state teaches. The manual states it twice - once under Signaling on page 81 and once on page 122, where it also suggests at least three seconds as a rule of thumb. A driver who arrives from Maryland, Pennsylvania or New Jersey with 100 feet memorized will get this wrong, and it is a favorite exam item precisely because it is the number that differs.",
    "The four-way stop rule has two halves and people learn only the second. The driver who reaches the intersection first goes first, after a complete stop; the vehicle on the right goes first only when more than one arrives at the same time. Delaware candidates report the four-way stop as the one genuinely tricky item on the exam, and the wrong answer they give is the right-hand rule applied to a case that is not a tie.",
    "You do not have to stop for a school bus coming the other way on a road with four or more lanes - and only there. On anything narrower, traffic in both directions stops. Title 21 Section 4166 writes the exception as four or more lanes with no divider required, while page 95 of the manual describes it as a divided highway with four or more lanes, so a road that satisfies neither reading is one where you stop. Counting a center turn lane to reach four is how drivers earn a $115 to $230 fine and a one-month suspension with no driving authority at all.",
    "Wipers on means headlights on, at any hour. Delaware ties headlights to three triggers - after sunset or before sunrise, whenever you cannot see beyond 1000 feet, and any time the wipers are running - and the wiper rule is the one drivers forget on a bright afternoon shower. Daytime running lights do not satisfy it, because on most cars they leave the tail lights dark.",
    "A Delaware cyclist may lawfully roll a stop sign. The Bicycle Friendly Delaware Act lets a bicyclist yield rather than stop, and Section 4196A sets the limits: a full stop is required where the intersecting road has three or more lanes for moving traffic, or where a vehicle is already stopped at the same sign. On a two-lane street the cyclist who does not stop is riding correctly, and the driver who pulls out expecting them to stop is the one at fault.",
  ],
  sets: [...delawareSets1to3, ...delawareSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
