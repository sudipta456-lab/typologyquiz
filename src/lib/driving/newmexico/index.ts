import type { Jurisdiction, HandbookExcerpt } from "../types";
import { newmexicoSets1to3 } from "./sets-1-3";
import { newmexicoSets4to6 } from "./sets-4-6";
import { newmexicoExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = newmexicoExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 * realfile.tax.newmexico.gov is the Taxation and Revenue Department's document
 * host, and is where the MVD's own Driver's License Manuals page links the
 * driver manual PDF; mvd.newmexico.gov is the Motor Vehicle Division;
 * nmonesource.com is the New Mexico Compilation Commission's official
 * publisher of the New Mexico Statutes Annotated 1978.
 */
export const officialHosts: string[] = [
  "realfile.tax.newmexico.gov",
  "mvd.newmexico.gov",
  "nmonesource.com",
];

export const jurisdiction: Jurisdiction = {
  slug: "newmexico",
  name: "New Mexico",
  code: "NM",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "Version 11.19.19",
  researchNote: "docs/driving/research/newmexico.md",
  licenceName: "Instructional Permit",
  intro:
    "New Mexico starts you at 15, and it starts you in a classroom. You cannot walk into an MVD field office and take the knowledge exam cold if you are under 18 - you have to be enrolled in or finished with a driver education course approved by the Traffic Safety Bureau before the permit can be issued, and the school hands you the referral card that gets you tested. The exam itself comes from the New Mexico Driver Manual, a short book of forty printed pages published by the Motor Vehicle Division. It is short enough that it leaves several tested rules to Chapter 66 of the statutes, and this bank quotes both.",
  officialTest: {
    questionCount: 25,
    passCount: 18,
    passLabel: "70% correct (18 of 25)",
    notes: [
      "The 70 percent pass mark is the MVD's own published figure: 'All class D and M written test scores must be 70% or better to pass', in Chapter 11, Section E of the Driver Procedures Manual. MVD does not publish the number of questions anywhere. Twenty-five is what New Mexico applicants consistently report, and 70 percent of 25 means 18 right, so that is the shape shown here.",
      "You may take the non-commercial knowledge exam twice per week, and MVD says twice on the same day is allowed. Fail a third time and you cannot test again for six months from the date of the FIRST examination, not the third.",
      "A passing knowledge score is good for five years, so you can pass the written exam long before you are ready for the road test.",
      "The exam is offered in English, Spanish, Tagalog, Italian, German, French, Vietnamese and Chinese. MVD says there are no plans to add more languages, and it does not permit an outside interpreter or an electronic translator in the testing room.",
      "Under 18, the knowledge exam usually comes through the driver education course rather than at a counter: the exam may be given by an MVD-contracted driver education school, and you bring a referral card or a certificate of completion to the field office.",
      "Fees are set separately from the test: instructional permit $10.00, provisional license $18.00, and an unrestricted license $18.00 for four years or $34.00 for eight.",
      "The instructional permit itself is issued for a four-year period, though you only need to hold it six months before applying for the provisional license.",
    ],
  },
  handbookName: "New Mexico Driver Manual",
  handbookUrl: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf",
  officialInfoUrl:
    "https://www.mvd.newmexico.gov/nm-drivers-licenses-ids/drivers-license/apply-for-a-learners-permit/",
  localGotchas: [
    "Driver education comes BEFORE the permit, not after. A 15-year-old must already be enrolled in or have completed a Traffic Safety Bureau approved course to be issued an instructional permit, and that ordering is the single most common point of confusion among New Mexico parents.",
    "New Mexico teaches the three-second following rule, and a four-second one for six named situations - slippery roads, following a motorcycle, a heavy load or trailer, following emergency vehicles, approaching railroad crossings, and stopped on a hill. Four seconds is also the merging gap.",
    "The manual gives no move-over rule at all. Section 66-7-332 does: approaching a stopped emergency, recovery or repair vehicle with flashing lights, you move out of the adjacent lane if it is safe and slow down either way.",
    "The provisional curfew is midnight to 5:00 a.m., and the passenger limit rides with it - no more than one passenger under 21 who is not immediate family, unless a licensed driver 21 or older is in the car.",
    "The manual never states the age at which an unrestricted license becomes available. Section 66-5-5 does: sixteen years and six months, after twelve months on a provisional license.",
    "New Mexico's sight-distance test is a FOUR second rule, and it is a different rule from the three-second following distance. People blur the two together and answer the wrong one.",
  ],
  sets: [...newmexicoSets1to3, ...newmexicoSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
