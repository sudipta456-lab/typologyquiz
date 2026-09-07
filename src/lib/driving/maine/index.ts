import type { Jurisdiction, HandbookExcerpt } from "../types";
import { maineSets1to3 } from "./sets-1-3";
import { maineSets4to6 } from "./sets-4-6";
import { maineExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = maineExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 * maine.gov is the State of Maine's own domain - the Bureau of Motor Vehicles
 * sits under maine.gov/sos, the Department of the Secretary of State, and the
 * manual PDF is served from there. legislature.maine.gov is the Maine
 * Legislature's site, where the Office of the Revisor of Statutes publishes
 * the Maine Revised Statutes.
 */
export const officialHosts: string[] = ["maine.gov", "legislature.maine.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "maine",
  name: "Maine",
  code: "ME",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-07",
  handbookEdition: "Rev 4/24",
  researchNote: "docs/driving/research/maine.md",
  licenceName: "Learner's Permit (Class C)",
  intro:
    "Maine starts the process at 15, and the written knowledge test is what gets you the learner's permit. The Bureau of Motor Vehicles - part of the Department of the Secretary of State, not a separate DMV - writes and administers it, and it is unusually quiet about the format: the manual never states it, and the only official source for 30 questions and 24 to pass is the BMV's exam page. This bank is written from the Rev 4/24 printing of the Maine Driver's License Manual, with Title 29-A of the Maine Revised Statutes supplying the numbers the book leaves out and the BMV's own pages supplying the test format and the graduated licensing stages.",
  officialTest: {
    questionCount: 30,
    passCount: 24,
    passLabel: "24 of 30 (80%)",
    notes: [
      "Thirty multiple-choice questions, and you need 24 right. That is 80 percent, so six wrong still passes and the seventh fails you. The BMV publishes this on its Drivers License Exam page; the manual itself never states the format anywhere.",
      "The BMV names the subject areas: rules of the road, the meaning of various signs, pedestrian and bicycle safety, an awareness of Maine's operating under the influence laws, and the dangers associated with distracted driving. The manual adds that special emphasis is placed on Maine's drinking and driving laws, and Maine learners say the same thing without prompting.",
      "No time limit is published. The BMV states neither a duration nor an early-stop rule, so do not assume one either way.",
      "It is taken at a BMV branch on the digital testing system, which offers the basic knowledge test in 8 languages: Arabic, Canadian French, English, French, Lingala, Portuguese, Somali, Spanish and Swahili. From 1 February 2026 the BMV provides a free professional interpreter for any other language, though scheduling one can take four weeks or more.",
      "The examination fee is $35. You mail or bring the application in; the BMV then schedules the test at the location nearest your mailing address and mails the appointment notice within about three weeks. There is no penalty fee for rescheduling more than 48 hours ahead.",
      "A free vision screening is given when you appear for the written exam, or your own doctor can complete the BMV's eye examination form beforehand.",
      "Under 18 you must complete an approved driver education course before you can apply for the permit. From 18 you do not need the course, but under 21 you still hold the permit six months and log 70 hours including 10 at night before the road test.",
      "Every section of the manual ends with practice questions, and Section 12 is a ten-question Test Your Knowledge quiz printed with its answers. The BMV says those chapter questions will aid your preparation, which makes them the closest thing to an official study set Maine publishes.",
      "The permit is valid for two years and is not renewable. If it expires you file a new application and retake both the vision screening and the written exam, though your logged driving hours carry over.",
    ],
  },
  handbookName: "Maine Driver's License Manual",
  handbookUrl:
    "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf",
  officialInfoUrl:
    "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/drivers-license-exam",
  localGotchas: [
    "Maine's unposted maximum on ordinary roads is 45 mph, not the 55 that most of the country uses, and it is 25 mph in any business or residential district or built-up portion. A built-up portion is defined by the buildings rather than the town line: structures less than 150 feet apart for at least a quarter of a mile.",
    "The following distance taught here is four seconds, not the two or three seconds most manuals use, and it grows from there on slick roads, behind motorcycles and large vehicles, at night, and behind anything that has to stop at railroad crossings.",
    "Stop at least 10 feet away from a pedestrian using a white cane or a guide dog. Maine learners name this specific number more often than any other as the item that caught them, and the fine for failing to yield runs from $50 to $1,000.",
    "Hands-free is not the whole rule. A driver 18 or over on a full licence may use a phone in hands-free mode, but on a learner's permit or an intermediate licence there is no lawful phone use at all - the statute names being stopped at a traffic light or a stop sign as still covered.",
    "You do not stop at every railroad crossing. A car slows, looks and listens and crosses without stopping unless a train, signal, gate, flagger or sign requires it. Buses and placarded trucks are the ones that must stop, between 50 feet and 15 feet from the nearest rail, and Maine learners report failing road tests for stopping when they should not have.",
    "The hydrant and crosswalk parking distances - 10 feet and 15 feet - are introduced in the manual as municipal ordinance material. Title 29-A's own parking section gives no distance list at all, only 10 feet of clear width and a 300-foot sight line. Both are examinable; only one is state law.",
    "The manual gives two different lengths for the extra suspension when an OUI involves a passenger under 21: 180 days on page 3-6 and 275 days on page 3-11. Title 29-A section 2411 says 275. Where a number is demanded, 275 is the one the statute and the OUI penalty section agree on.",
  ],
  sets: [...maineSets1to3, ...maineSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
