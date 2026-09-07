import type { Jurisdiction, HandbookExcerpt } from "../types";
import { northdakotaSets1to3 } from "./sets-1-3";
import { northdakotaSets4to6 } from "./sets-4-6";
import { northdakotaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = northdakotaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 *
 * dot.nd.gov is the North Dakota Department of Transportation, which runs
 * licensing through its Driver License Division and serves the Noncommercial
 * Driver License Manual PDF itself.
 *
 * ndlegis.gov is the North Dakota Legislative Branch, which publishes the
 * North Dakota Century Code and the North Dakota Administrative Code.
 *
 * knowtodrive.com is here for one narrow reason and five excerpts. NDDOT's own
 * Driver Education page describes KnowTo Drive as "the only official online
 * knowledge testing platform, brought to you by the North Dakota Department of
 * Transportation", the manual sends applicants to nd.knowtodrive.com to sit the
 * Class D knowledge test, and NDCC 39-06-13(2) requires the director to run the
 * written examination through an online medium. Its North Dakota FAQ is the
 * only published source for the exam's 60-minute limit, its retake intervals
 * and its disqualification rules. Nothing else is cited from it.
 */
export const officialHosts: string[] = [
  "dot.nd.gov",
  "ndlegis.gov",
  "knowtodrive.com",
];

export const jurisdiction: Jurisdiction = {
  slug: "northdakota",
  name: "North Dakota",
  code: "ND",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-07",
  handbookEdition: "2025-2027, Revised 2025 (DL0126)",
  researchNote: "docs/driving/research/northdakota.md",
  licenceName: "Class D Instruction Permit",
  intro:
    "North Dakota licenses drivers through the Driver License Division of the Department of Transportation, and the Class D knowledge test is what gets you the instruction permit. You can sit it at a driver license site by appointment for $5, one attempt a day, or at home through KnowTo Drive - the online exam NDDOT publishes as its own - for $10 with a 60-minute limit and a webcam watching. Applications open at 14, which is among the earliest starting ages in the country, and the whole test is drawn from the 2025-2027 Noncommercial Driver License Manual. This bank is written from that edition, with Title 39 of the North Dakota Century Code supplying the rules the manual leaves out and four dot.nd.gov pages supplying the graduated licensing stages, the fees and the point schedule.",
  officialTest: {
    questionCount: 25,
    passCount: 20,
    passLabel: "20 of 25 (80%)",
    timeLimitMinutes: 60,
    notes: [
      "Know where these two numbers come from. NDDOT does not publish the number of questions on the Class D knowledge test or the score that passes it - not in the manual, not on any dot.nd.gov page, and not in the Century Code or the Administrative Code. 25 questions and 20 correct is the figure every North Dakota study and testing source uses, and it is shown here so the practice sets have a target, but the department itself has never stated it. Treat it as indicative, and study for the whole manual rather than for a pass mark.",
      "The 60-minute limit IS official. It is published by KnowTo Drive, the online exam NDDOT describes as its only official online knowledge testing platform, and it is the only exam parameter either the department or its platform states anywhere.",
      "Two routes, two prices, two sets of rules. At a driver license site the test costs $5 per attempt with one attempt allowed per day, by appointment. Online at nd.knowtodrive.com it costs $10 per attempt - a figure fixed by NDCC 39-06-13(2) - with a 24-hour wait after a failure and a one-year lockout after five.",
      "Passing online does not get you a permit. You must then book an appointment at a driver license office to collect it, and the manual prints that reminder on a page of its own at the front of the book.",
      "The online test watches you. A session is disqualified if your mouse cursor leaves the test window's red border, if the photos it captures during the test do not match the one you submitted, or if a second person appears in frame. A disqualification means a 7-day wait, and five of them means a year.",
      "In-office testing has its own instant-fail rules, and they are unusual enough to catch people out. You get a failed score if you bring a phone, backpack, purse, notebook, pen, paper or any other electronic device into the testing area, and a failed score if you leave the testing area before the test is finished. Secure everything before you go in.",
      "Arrive early. If you are testing at an office that closes for lunch you must arrive no later than an hour before noon, and at any office no later than an hour before closing, or you may not be allowed to test.",
      "The Class D knowledge test is offered in 14 languages: English, Arabic, Spanish, Somali, Russian, Vietnamese, Turkish, Swahili, Nepali, Serbo-Croatian, French, Pashto, Dari and Chinese. Automated American Sign Language and audio testing is available at the Fargo, Jamestown, Bismarck, Dickinson, Williston, Minot, Devils Lake and Grand Forks offices.",
      "Applications start at 14. You need proof of legal presence and current name and date of birth, a social security number, and two documents proving a North Dakota residence address - a post office box is not accepted. Under 18 a parent or legal guardian signs approval and sponsorship, and that carries financial liability.",
      "A permit is $15 and the road test is $5. The road test can be waived by presenting a certificate showing 30 hours of classroom and six hours of behind-the-wheel training from an approved North Dakota driving school or the Department of Public Instruction.",
    ],
  },
  handbookName: "North Dakota Noncommercial Driver License Manual (Class D)",
  handbookUrl:
    "https://www.dot.nd.gov/sites/www/files/documents/Drivers%20-%20documents/noncommercial-manual.pdf",
  officialInfoUrl: "https://www.dot.nd.gov/driver/how-apply-learners-permit",
  localGotchas: [
    "The school-zone limit is 20 mph, not the 25 that covers business and residential districts generally. It applies during recess and while children are arriving or leaving at opening and closing hours, whether or not a beacon is flashing. North Dakota learners describe failing the road test for 23 in a school zone, which is the single most specific failure report the state's drivers give.",
    "Under 18, a licence is CANCELLED at six points, not suspended at twelve. The manual's point chapter prints only the adult figure of 12; NDDOT's points page and NDCC 39-06-01.1 both put the minor's threshold above five. Passing a stopped school bus is six points on its own, and cancellation is worse than suspension - a cancelled minor is treated as never having held a licence and starts again from an instruction permit.",
    "Park no closer than 10 feet to a fire hydrant and 10 feet to a crosswalk at an intersection, but 15 feet from a stop sign, flashing beacon or traffic signal. Most states use 15 for the hydrant and 20 or 30 for the sign, so a generic practice bank gets both wrong for North Dakota. The statute adds two the manual omits entirely: 15 feet from the nearest rail of a railroad crossing, and 20 feet from a fire station driveway with 75 feet on the opposite side of the street.",
    "The school-bus exception is in the statute and not in the manual. The manual says traffic in both directions must stop, full stop. NDCC 39-10-46(5) excuses a driver on a highway with separate roadways when the bus is on a different roadway, and there is a matching exception on a controlled-access highway for a loading zone pedestrians may not cross to. On an undivided road, both directions still stop.",
    "The seat belt law became primary enforcement in 2023 and the manual never mentions it. Section 39-21-41.5, the secondary-enforcement provision, was repealed by S.L. 2023 ch. 362, leaving 39-21-41.4 standing on its own: a driver may not operate unless every occupant is belted, in every seating position.",
    "North Dakota's phone rules are three different rules and the strictest one applies to permit holders of any age. An adult with a full licence may not text, but may lawfully hold a phone to make or take a call, because 39-08-23 exempts calls, navigation and hands-free use. A licensed 16 or 17 year old may not use an electronic communication device at all. Anyone on an instruction permit, including a 40-year-old new resident, may not use one at all either.",
    "Unposted paved two-lane county and township highways are 55 mph, not 65. The 65 mph figure in the manual's list exists only where a road is actually posted for it, and North Dakota county roads frequently carry no sign for miles. The statute also sets 20 mph whenever your view of the highway ahead is obstructed within 100 feet - a ninth speed limit the manual leaves out of its list of eight.",
    "Daytime running lights are not headlights. NDCC 39-21-01 requires lighted headlamps and taillamps whenever snow or rain leaves a person or vehicle not clearly discernible at 1,000 feet, at any hour. Running lights leave your tail lamps dark, which is exactly backwards in a ground blizzard where the vehicle most likely to hit you is behind you.",
  ],
  sets: [...northdakotaSets1to3, ...northdakotaSets4to6].sort(
    (a, b) => a.setNumber - b.setNumber
  ),
};
