import type { Jurisdiction, HandbookExcerpt } from "../types";
import { rhodeislandSets1to3 } from "./sets-1-3";
import { rhodeislandSets4to6 } from "./sets-4-6";
import { rhodeislandExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = rhodeislandExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 *
 * dmv.ri.gov is the Rhode Island Division of Motor Vehicles, a division of the
 * state Department of Revenue, and it serves the Driver's Manual PDF itself.
 * webserver.rilegislature.gov is the Rhode Island General Assembly's own
 * server, where the Rhode Island General Laws are published.
 *
 * ccri.edu is the Community College of Rhode Island, a state institution. It
 * is here for one narrow reason: the DMV publishes the knowledge exam's
 * question count and time limit but never its pass mark, and CCRI - which the
 * manual itself names as the body that administers the RI DMV Knowledge
 * examination for driver-education students - is the only official Rhode
 * Island source that states the 70 percent figure. Two excerpts and the
 * driver-education facts are the whole of what is cited from it.
 */
export const officialHosts: string[] = [
  "dmv.ri.gov",
  "webserver.rilegislature.gov",
  "ccri.edu",
];

export const jurisdiction: Jurisdiction = {
  slug: "rhodeisland",
  name: "Rhode Island",
  code: "RI",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-07",
  handbookEdition: "April 2024",
  researchNote: "docs/driving/research/rhodeisland.md",
  licenceName: "Limited Instruction Permit",
  intro:
    "Rhode Island runs licensing through the Division of Motor Vehicles, a division of the Department of Revenue, and the computerized knowledge exam is what gets you the permit. It is 40 multiple-choice questions with a 90-minute maximum, taken at the DMV headquarters in Cranston by reservation - the manual states the length and the clock but never the pass mark, and the only official Rhode Island source for that is CCRI, the state college that runs the 33-hour driver education course and administers the same exam for its students. This bank is written from the April 2024 edition of the Rhode Island Driver's Manual, with Title 31 of the Rhode Island General Laws supplying the numbers the book leaves out and five dmv.ri.gov pages supplying the test format and the graduated licensing stages.",
  officialTest: {
    questionCount: 40,
    passCount: 28,
    passLabel: "28 of 40 (70%)",
    timeLimitMinutes: 90,
    notes: [
      "Forty multiple-choice questions with a 90-minute maximum. The manual states both figures on page 10; it is the only place either appears.",
      "The pass mark is 70 percent, which is 28 of 40. Be aware of where that number comes from: the DMV does not publish a pass mark anywhere. CCRI, the state community college that runs Rhode Island's driver education course and administers the RI DMV Knowledge Test as that course's final exam, states 70 percent in its own FAQ. Treat 28 as the floor and aim well above it.",
      "Fail and you wait at least 8 days before retaking it. That is the DMV's own rule, published on its Knowledge Exams page.",
      "It is computerized and taken at DMV headquarters, 600 New London Avenue, Cranston, Monday to Friday between 8:30 am and 2:45 pm, by reservation only. A vision test is given at the same appointment; you need 20/40 with corrective lenses.",
      "The computerized exam is offered in English, Spanish and Portuguese. Any other language means a printed foreign-language exam, booked separately and in advance, with someone who can translate for you before and after the test.",
      "Under 18 you must finish the 33-hour classroom driver education course before you can apply, and since 1 July 2022 no online driver education course is accepted in Rhode Island. From 18 you skip the course but still take the exam.",
      "Reservations are the practical obstacle rather than the exam. Rhode Island learners report the booking system showing nothing for weeks; the advice that recurs is to check right around 8:30 am on weekdays when cancellations and new slots appear, and to pick the reservation type that covers a written or computerized permit test rather than a license transaction.",
      "The permit costs $13.50 under 18 and $8.50 at 18 or over, both including the $3.50 technology surcharge.",
      "The exam is drawn from the motor vehicle laws and the rules of the road, and the DMV tells you to study the entire contents of the manual. There is no official practice test and no published question bank.",
    ],
  },
  handbookName: "Rhode Island Driver's Manual",
  handbookUrl: "https://dmv.ri.gov/media/966/download?language=en",
  officialInfoUrl: "https://dmv.ri.gov/licenses-permits-ids/permits-tests",
  localGotchas: [
    "A Rhode Island stop is three seconds long. The manual does not say \"come to a complete stop\" and leave it there - it says drivers should completely cease all forward motion for a minimum of three seconds, long enough to look left, right, center and left again. Rhode Island learners name rolling stops as the single most common way people lose the skills test.",
    "Park no closer than 8 feet to a fire hydrant. Most states use 15 feet, and every practice site that lifts its questions from a generic bank gets this wrong for Rhode Island. The rest of the list is equally specific: 20 feet from a crosswalk at an intersection, 30 feet from a stop sign, traffic light or flashing beacon, 50 feet from the nearest rail of a railroad crossing, and 20 feet from a fire station driveway.",
    "The unposted limit drops at night. Rhode Island's prima facie limits are 25 mph in a business or residence district, 50 mph elsewhere in the daytime and 45 mph elsewhere at night, with daytime defined as half an hour before sunrise to half an hour after sunset. The manual never prints the 45; it comes from section 31-14-2.",
    "The school-zone limit is 20 mph within 300 feet of a school's entrances and exits, in the daytime, on days when school is open - and only where the warning signs are actually posted. The manual does not mention it at all.",
    "The manual's phone section is out of date. It still frames the adult rule as a texting ban, but section 31-22-30 was amended effective 2 July 2025 to bar using a wireless handset while driving for any purpose unless it is hands-free, and it counts you as driving while stopped at a red light or a stop sign. Under 18 there is no lawful phone use at all, hands-free included.",
    "Signal 100 feet ahead, not just early. That distance covers turns and lane changes, and the same 100 feet governs the center two-way left-turn lane: you may not enter it more than 100 feet before the turn you are making.",
    "Stop for a school bus with red lights flashing from either direction, and that duty follows the bus onto private roads and into parking lots. The one exception is a divided highway when the bus is on the other roadway. Separately, the statute bars following a school bus in the same lane closer than 50 feet, a number the manual never prints.",
  ],
  sets: [...rhodeislandSets1to3, ...rhodeislandSets4to6].sort(
    (a, b) => a.setNumber - b.setNumber
  ),
};
