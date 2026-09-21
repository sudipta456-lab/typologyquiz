import type { Jurisdiction, HandbookExcerpt } from "../types";
import { wyomingSets1to3 } from "./sets-1-3";
import { wyomingSets4to6 } from "./sets-4-6";
import { wyomingExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = wyomingExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
export const officialHosts: string[] = ["dot.state.wy.us", "wyoleg.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "wyoming",
  name: "Wyoming",
  code: "WY",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-07",
  handbookEdition: "2021",
  researchNote: "docs/driving/research/wyoming.md",
  licenceName: "Instruction Permit",
  intro:
    "Use this practice bank to study the rules in WYDOT's 2021 Class C Driver License Manual. It covers signs, signals and pavement markings, along with traffic laws, safety, crash prevention and vehicle equipment. Wyoming's statutes and WYDOT's current testing pages provide additional licensing and testing details. The captured official sources do not publish the knowledge test's question count, passing score or time limit, so this practice bank does not claim to reproduce those parts of the exam. Check with WYDOT for current requirements before your appointment.",
  officialTest: {
    questionCount: null,
    passCount: null,
    passLabel: "WYDOT does not publish the question count or passing score",
    notes: [
      "The written knowledge test uses WYDOT's automated testing system and is taken in person at a driver exam station. The online practice tests linked from WYDOT are for preparation, not the official exam. Source: WYDOT Testing Requirements and Rules of the Road manual, printed page 7.",
      "WYDOT allows at most two attempts at the same written test in one day. Source: WYDOT Testing Requirements.",
      "The 2021 manual says to wait 24 hours after failing, or three days after missing 13 or more questions. WYDOT's current Testing Requirements page confirms the daily attempt limit but does not restate these wait periods; check with the exam station if you need a current retest date.",
      "An oral version is available by request. WYDOT's automated system can read questions aloud through a phone system, and you can select that option when setting up the test at the station. Source: WYDOT Testing Requirements and Rules of the Road manual, printed page 7.",
      "Wyoming tests are given in English. WYDOT says an interpreter may be used for a non-commercial written test if you cannot speak English; the 2021 manual also describes interpreter use for applicants unable to speak or write English. Source: WYDOT Testing Requirements and Rules of the Road manual, printed page 7.",
      "The captured official sources do not state a written-test time limit, question count or passing score. Do not infer those details from online practice tests.",
    ],
  },
  handbookName: "Rules of the Road: Wyoming Driver License Manual",
  handbookUrl:
    "https://www.dot.state.wy.us/files/live/sites/wydot/files/shared/Driver_Services/Help%20Documents%20and%20Manuals/2021_DriverManual_web_ClassC_w%20cover.pdf",
  officialInfoUrl:
    "https://www.dot.state.wy.us/home/driver_license_records/driver-license/learner-permits.html",
  localGotchas: [
    "Wyoming’s permit and testing sequence is where most new drivers trip: the permit is not a full privilege, the 10-day hold is real, and the move to intermediate and full privileges depends on age and time, not just pass count.",
    "The school-bus rule is strict on undivided roads: the stop is not a ‘nearby lanes only’ rule, and the stop applies from the side you are facing, so people coming from the other direction must also stop.",
    "Uncontrolled intersection right-of-way is a strict tie-breaker problem. The rule is not a free-for-all, and arriving together is different from clearly arriving first.",
    "A flashing red light is a full stop signal. Many people remember stop signs but treat it as caution; Wyoming applies the same yielding sequence after the stop.",
    "Move-over and safe passing are numerical in Wyoming: slow-down distances and signal distances come from the manual and statute, and that is where many people over-rely on memory from other states.",
  ],
  sets: [...wyomingSets1to3, ...wyomingSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
