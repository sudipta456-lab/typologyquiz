import type { Jurisdiction, HandbookExcerpt } from "../types";
import { hawaiiSets1to3 } from "./sets-1-3";
import { hawaiiSets4to6 } from "./sets-4-6";
import { hawaiiExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = hawaiiExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 *
 * Hawaii has no state DMV. hidot.hawaii.gov is the Hawaii Department of
 * Transportation, which publishes the Driver's Manual and the graduated
 * licensing brochure and runs the statewide online permit test.
 * capitol.hawaii.gov is the Hawaii State Legislature, which publishes the
 * Hawaii Revised Statutes. The other three are the counties that actually
 * issue licenses and administer the test: honolulu.gov (City and County of
 * Honolulu, Department of Customer Services), hawaiicounty.gov (County of
 * Hawaii, Vehicle Registration and Licensing Division) and kauai.gov (County
 * of Kauai, Division of Motor Vehicles).
 */
export const officialHosts: string[] = [
  "hidot.hawaii.gov",
  "capitol.hawaii.gov",
  "honolulu.gov",
  "hawaiicounty.gov",
  "kauai.gov",
];

export const jurisdiction: Jurisdiction = {
  slug: "hawaii",
  name: "Hawaii",
  code: "HI",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-07",
  handbookEdition: "2023 printing (web PDF dated 07/19/24)",
  researchNote: "docs/driving/research/hawaii.md",
  licenceName: "Instruction Permit (Class 3)",
  intro:
    "Hawaii has no state DMV. Licensing is run by the four counties - the City and County of Honolulu, Hawaii County, Maui County and Kauai County - while the State publishes the book you are tested on, the State of Hawaii Driver's Manual, and the law behind it in Title 17 of the Hawaii Revised Statutes. The knowledge test is 30 multiple-choice questions and you may miss six. This bank is written from the 2023 printing of that manual, with the statute filling the gaps the book leaves and the places it has gone stale.",
  officialTest: {
    questionCount: 30,
    passCount: 24,
    passLabel: "24 of 30 (80%)",
    timeLimitMinutes: 60,
    notes: [
      "Thirty multiple-choice questions drawn from the State of Hawaii Driver's Manual. Kauai County states the pass mark plainly: more than six errors and you fail, so 24 correct is the line.",
      "One hour, on the online version. The counties do not publish a time limit for the in-office test.",
      "You can take it online at knowtodrive.com/hawaii from a desktop or laptop with a webcam - no phone, no tablet, no touchscreen - or in person at a county driver licensing center by appointment.",
      "Fail on knowledge and you wait seven days to retake. Honolulu also caps you at two attempts in one day, and each attempt costs the fee again.",
      "The fee is set by your county, not the State: $12 in Honolulu, $11 in Hawaii County, $20 on Kauai and $25 on Maui for the online test, each including a $10 transaction charge.",
      "Choose the right county when you register. A certificate of completion issued for the wrong county is refused, there are no refunds, and you start over.",
      "The online test is proctored by webcam. Two warnings for looking away from the screen; the third stops the test and fails the attempt.",
      "Pass, then book a licensing appointment - within 30 days on the statewide page, 60 days on Honolulu's - and bring your documents, because the permit itself is issued in person after an eye test, a photograph and fingerprinting.",
      "The manual prints 177 practice questions with a page reference for each. They are the closest thing to an official study guide Hawaii publishes.",
    ],
  },
  handbookName: "State of Hawaii Driver's Manual",
  handbookUrl:
    "https://hidot.hawaii.gov/highways/files/2024/11/2023-Hawaii-Drivers-Manual_5.375x8.375_Final-r3-Digital-071924web.pdf",
  officialInfoUrl: "https://hidot.hawaii.gov/online-learners-permit-test/",
  localGotchas: [
    "Parking on a hill: turn the front wheels to the right whether you are facing uphill or downhill. Most states split the rule - left when you face uphill against a curb - and Hawaii does not. The manual says right both ways and the statute says toward the curb, which at a right-hand curb is the same thing.",
    "Hawaii sets no statewide default speed limit. A limit exists because a county ordinance created it or because the Department of Transportation posted a sign. There is no number to fall back on, so the basic rule - never faster than is reasonable and prudent - is what governs an unposted road.",
    "At a crosswalk you must STOP, not slow and yield, and you may not move until the pedestrian has passed your vehicle. A first offense is $150; a second in a year is $300 and a 90-day revocation. You also may not pass any vehicle stopped at a crosswalk.",
    "The hands-free law is stricter than the manual admits. Holding any mobile device while driving is illegal, and that includes while you are stopped at a red light, because the statute defines operating to include being temporarily stationary. It is $300, or $400 in a school or construction zone, and a driver under 18 may not use a hands-free device either.",
    "The child restraint rules changed in 2022 and the manual still prints the old ones. Under two is rear-facing, two to under four needs a harness, four to under ten needs a harness or booster, and only a child of seven to under ten who is over four feet nine inches may use the adult belt alone.",
    "Licensing is county business. The test fee, the appointment system, the office hours and even how long you have to come in after passing all differ by island, and a certificate of completion issued for the wrong county is worthless.",
  ],
  sets: [...hawaiiSets1to3, ...hawaiiSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
