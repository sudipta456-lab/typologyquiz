import type { Jurisdiction, HandbookExcerpt } from "../types";
import { alaskaSets1to3 } from "./sets-1-3";
import { alaskaSets4to6 } from "./sets-4-6";
import { alaskaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = alaskaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 *
 * dmv.alaska.gov is the Alaska Division of Motor Vehicles, a division of the
 * state Department of Administration, and it serves the Driver Manual PDF
 * itself. online.dmv.alaska.gov is the same division's online-services host,
 * where the Sample Knowledge Test lives - the only official Alaska page that
 * states the exam's length, pass mark and time limit. akleg.gov is the Alaska
 * State Legislature's own server, where Alaska Statutes Title 28 is published.
 */
export const officialHosts: string[] = [
  "dmv.alaska.gov",
  "akleg.gov",
];

export const jurisdiction: Jurisdiction = {
  slug: "alaska",
  name: "Alaska",
  code: "AK",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-07",
  handbookEdition: "REV.10/2025",
  researchNote: "docs/driving/research/alaska.md",
  licenceName: "Class IP Instruction Permit",
  intro:
    "Alaska runs licensing through the Division of Motor Vehicles, part of the state Department of Administration, and the written knowledge test is what gets you an instruction permit. It is 20 multiple-choice questions with 25 minutes on the clock and 16 correct to pass, and you can take it at a DMV office or from home through the DMV's Alaska KnowTo Drive system. Alaska issues that permit from age 14, earlier than any other state. This bank is written from the REV.10/2025 edition of the Alaska Driver Manual, with Alaska Statutes Title 28 supplying the numbers the book leaves out - the 30-foot school-bus stop, the DUI sentence a court must impose, the liability limits behind the manual's insurance figures.",
  officialTest: {
    questionCount: 20,
    passCount: 16,
    passLabel: "16 of 20 (80%)",
    timeLimitMinutes: 25,
    notes: [
      "Twenty multiple-choice questions, 25 minutes, 16 correct to pass. Those three figures come from one line on the DMV's own Sample Knowledge Test page; the manual states none of them.",
      "The manual is the whole syllabus and says so: the written test covers only information found in this manual, including traffic laws, safe driving practices, and highway sign recognition. Nothing outside the book is fair game.",
      "Fail and you wait a day. The manual's rule is that the test may be retaken the following day - not the same afternoon.",
      "You can take it from home. Alaska KnowTo Drive at ak.knowtodrive.com gives you the same knowledge test online, in a choice of languages and with audio playback, and returns an immediate pass or fail. Fees may apply.",
      "The manual may not be used during the test. That is printed in its own preface.",
      "Alaska learners say the test leans hard on the numbers rather than on judgment: DUI penalties, the liability insurance minimums, points, and railroad crossings come up again and again. Learn the figures, not just the principles.",
      "New residents are not exempt. A valid license from another state gets you out of the road test, not out of the written one, and you have 90 days from entering the state to hold an Alaska license.",
      "If you can understand English but have difficulty reading, you may bring someone to read the questions aloud to you - but you must answer them yourself.",
      "The DMV publishes a free practice knowledge test at online.dmv.alaska.gov/practiceknowledgetest. Use it, and use the manual: several Alaska drivers report the practice tool is short enough that people memorize its answers instead of learning the rules.",
    ],
  },
  handbookName: "Alaska Driver Manual",
  handbookUrl: "https://dmv.alaska.gov/media/t5ef5vi2/dlman.pdf",
  officialInfoUrl: "https://dmv.alaska.gov/credential-services/instruction-permit/",
  localGotchas: [
    "Alaska's following distance is four seconds, not three. The manual teaches the four-second interval and tells you to stretch it to six or more when towing or when the road is wet or slippery. The regulation behind it, 13 AAC 02.090, sets two seconds as the bare legal minimum, so a question offering both is asking which one the manual recommends: four.",
    "The DMV can take your license even when the court lets you go. Blow 0.08 or refuse the breath test and the Division revokes for 90 days on a first offense - and the manual says plainly that this happens even if the criminal charge is dismissed or you are found not guilty. Under 21, any measurable alcohol at all triggers a 30-day revocation on the same terms. Alaska learners name this as the question that catches people.",
    "Know the DUI numbers, not just the rule. Alaska's test asks for figures: a first DUI is a class A misdemeanor carrying at least 72 consecutive hours in jail, a fine of at least $1,500, and an ignition interlock for at least six months. Ten points go on your record. Three convictions in ten years makes it a class C felony.",
    "The liability minimums are 50/100/25. Fifty thousand dollars for injury or death to one person, one hundred thousand for two or more, and twenty-five thousand for property damage. Alaska drivers say the insurance questions are the ones out-of-state transfers get wrong, and the manual prints all three figures in one sentence.",
    "Stop 30 feet back from a school bus with red lights flashing, from either direction. The manual tells you to stop but never gives the distance; AS 28.35.145 does. It is a class B misdemeanor and a mandatory six points. The only excuse is a highway with separate roadways when the bus is on the other one.",
    "Alaska's unposted limits are low and specific: 15 mph in an alley, 20 mph in a business district or school zone, 25 mph in a residential district, and 55 mph on any other roadway. Some highways are posted at 65, and inside a designated Traffic Safety Corridor every traffic fine is doubled.",
    "You can get a permit at 14, but the clock still runs. The instruction permit is valid two years and may be renewed exactly once, and if you are 16 or 17 you must hold it for six full months - with no traffic conviction in the last six - before the DMV will issue a provisional license. Break a provisional restriction and it is an infraction: $200 and two points.",
  ],
  sets: [...alaskaSets1to3, ...alaskaSets4to6].sort(
    (a, b) => a.setNumber - b.setNumber
  ),
};
