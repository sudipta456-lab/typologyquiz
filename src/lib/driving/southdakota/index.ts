import type { Jurisdiction, HandbookExcerpt } from "../types";
import { southdakotaSets1to3 } from "./sets-1-3";
import { southdakotaSets4to6 } from "./sets-4-6";
import { southdakotaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = southdakotaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 * Written with the leading dot on purpose: a bare "sd.gov" is not a substring
 * of any other state's domain, but the dot keeps it that way if one is added.
 */
export const officialHosts: string[] = [".sd.gov", "sdlegislature.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "southdakota",
  name: "South Dakota",
  code: "SD",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-07",
  handbookEdition: "REVISED 11/2024",
  researchNote: "docs/driving/research/southdakota.md",
  licenceName: "Instruction Permit",
  intro:
    "South Dakota starts drivers at 14 and asks for 80% on a knowledge test written from a 72-page manual that never prints a single speed limit. That is the shape of the problem: the book teaches technique in detail - four-second following distance, hands at 3 and 9, ten inches between your chest and the wheel - while the numbers people fail on live in Title 32 of the Codified Laws. These six sets cover both, and flag the two places where the manual and the statute do not agree.",
  officialTest: {
    questionCount: 25,
    passCount: 20,
    passLabel: "80% (about 20 of 25)",
    notes: [
      "The Department of Public Safety publishes the pass mark and not the length. Its testing and FAQ pages both say a score of 80% or higher on the knowledge test, and 80% on the driving test as well, but neither states how many questions the knowledge test has.",
      "Twenty-five questions is what South Dakotans who have sat it consistently describe, which puts 80% at 20 correct and gives you five wrong before you fail. Treat 80% as the number that matters and the 25 as unconfirmed.",
      "There is no official practice test. The testing page says so in as many words: download the manual, because there is no sample test.",
      "Testing appointments must be scheduled, online at dps.sd.gov or by phone. Drive tests are not given between 11:30 a.m. and 1:30 p.m. or within an hour of closing, and applications are not accepted in the last hour a station is open.",
      "Fail and you may not re-test before the next working day. One application fee covers three attempts, combined across the knowledge and drive tests, within a six-month period; after three failures or six months, the fee is payable again.",
      "Anyone caught cheating loses the next-working-day option and must wait a minimum of two weeks before testing again.",
      "A minor who has passed an approved Department of Education driver education course within the last year does not sit the knowledge test at all - it is waived on production of the certificate.",
      "If your South Dakota license has been expired for more than 30 days, a knowledge test is required to get it back, along with a vision test, a new photo and the renewal fee.",
      "The fee for an original or renewal driver license or instruction permit is $38.00.",
    ],
  },
  handbookName: "South Dakota Driver License Manual",
  handbookUrl: "https://www.sd.gov/sys_attachment.do?sys_id=d8e0b08e47bd0390a497127ba26d4348",
  officialInfoUrl: "https://www.sd.gov/dps?id=kb_article_view&sysparm_article=KB0043731",
  localGotchas: [
    "The manual prints no speed limit anywhere in its 72 pages, so every number the test can ask for comes from the statute. Learn them as a ladder: 80 mph on the interstates, 70 where the Transportation Commission has posted it on a rural divided four-lane, 65 as the general maximum on other streets and highways, 55 on township roads, 25 in an unposted urban area, and 15 in a school zone during recess or at opening and closing hours. The 25 is the one out-of-state applicants get wrong, because most states use 30 or 35.",
    "South Dakota lets you exceed the posted limit by 10 mph while overtaking - but only when four conditions all hold at once: a two-lane highway with one lane each way, a posted limit of 65 mph or more, an actual overtaking maneuver, and a vehicle ahead moving slower than the limit. It is SDCL 32-25-28, it is unusual, and the manual never mentions it.",
    "The following distance is four seconds, not three. The manual counts it out as one thousand one to one thousand four and says you are too close if you reach the fixed object before finishing. Add at least one second at night and at least two on an unfamiliar road at night, and a minimum of four seconds behind a motorcycle with more in the wet.",
    "The manual teaches hands at 3 and 9 and specifically says 2 and 10 is no longer recommended because of airbags. It is equally precise about the seat: ten inches between your chest and the wheel, the top of the wheel below chin level, and the head restraint touching the back of your head rather than sitting below your ears. These read like comfort preferences and they are tested as facts.",
    "Backing up has a prescribed body position in this manual: left hand at 12 o'clock, right arm across the back of the passenger seat, looking directly through the rear window - and it says not to depend on the mirrors at all. Anyone who learned on a car with a reversing camera answers this one wrong.",
    "Two places where the manual and the statute genuinely disagree. On parking, the manual asks for 15 feet of road width and visibility for 500 feet while SDCL 32-30-2 requires a clear width of 20 feet and a clear view from 200 feet. On school buses, the manual excuses you only where the roadway is separated by a physical barrier, while SDCL 32-32-6 excuses any driver meeting a bus on a highway with two or more lanes of travel in each direction. Where a question turns on it, the statute is the law.",
  ],
  sets: [...southdakotaSets1to3, ...southdakotaSets4to6].sort(
    (a, b) => a.setNumber - b.setNumber
  ),
};
