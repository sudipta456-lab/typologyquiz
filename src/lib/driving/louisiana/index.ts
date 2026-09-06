import type { Jurisdiction, HandbookExcerpt } from "../types";
import { louisianaSets1to3 } from "./sets-1-3";
import { louisianaSets4to6 } from "./sets-4-6";
import { louisianaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = louisianaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/**
 * Hosts the excerpts cite that validate-driving.mjs does not already list.
 *
 * public.powerdms.com is the document portal the Louisiana Office of Motor
 * Vehicles publishes its own manuals through: the "Class D & E Driver's Guide"
 * link on expresslane.la.gov/omv/resources/driver-manuals/ points there, OMV
 * staff hand out powerdms links for their policy documents, and the PDF served
 * from it is byte-identical to the copy this bank was checked against. It is
 * the OMV's distribution host, not a third-party republisher.
 */
export const officialHosts: string[] = [
  "expresslane.la.gov",
  "expresslane.dps.louisiana.gov",
  "expresslane.org",
  "dps.louisiana.gov",
  "legis.la.gov",
  "public.powerdms.com",
];

export const jurisdiction: Jurisdiction = {
  slug: "louisiana",
  name: "Louisiana",
  code: "LA",
  country: "US",
  countryLabel: "United States",
  contentDate: "2026-09-06",
  handbookEdition: "DPSMV2052 (R03/2021)",
  researchNote: "docs/driving/research/louisiana.md",
  licenceName: "Class E Learner's Permit",
  intro:
    "Louisiana's knowledge test is 40 multiple-choice questions and you need 32 of them right. It is written from the Class D & E Driver's Guide, and in most cases your driving school gives it to you rather than the OMV. Everything below is checked against that guide and, where the guide leaves a number out, against Revised Statutes Title 32 and the OMV's own licensing handouts.",
  officialTest: {
    questionCount: 40,
    passCount: 32,
    passLabel: "32 of 40 (80%)",
    notes: [
      "Your driver education provider normally gives both the knowledge test and the road skills test. Only students at a secondary school that does not test can ask the OMV to do it instead.",
      "You need a Temporary Instruction Permit before the knowledge test, before any behind-the-wheel instruction, and before a road skills test. It converts to a learner's permit for free.",
      "The vision screening happens at the same visit: 20/40 in one or both eyes, and needing glasses to pass puts an 01 restriction on your licence.",
      "The law that sets the test says what it must cover: rules of the road, signs and signals, sharing the road with motorcycles and tractor-trailers, distracted driving, trailer safety, what to do when an officer stops you, accessible parking, and at least two questions on railroad crossings.",
      "Under 18 you also need the driver education course before you apply - 30 hours of classroom and 8 hours behind the wheel. At 18 or older a 6-hour pre-licensing class plus the same 8 hours behind the wheel is accepted instead.",
    ],
  },
  handbookName: "Class D & E Driver's Guide",
  handbookUrl: "https://public.powerdms.com/LADPSC/documents/347039",
  officialInfoUrl: "https://expresslane.la.gov/omv/drivers/personal-driver-s-licenses/permits/",
  localGotchas: [
    "The guide prints one speed number - 70 mph - and the test can still ask for the others. Title 32 sets 55 mph as the default where nothing is posted, 65 mph on a multi-lane divided highway with partial or no control of access, and 70 mph on an interstate or controlled-access highway.",
    "You stop at least 30 feet from a school bus flashing red, from either direction. A grassy median or barrier releases you; a two-way left turn lane down the middle does not, and the law says so in as many words.",
    "A shared centre left-turn lane is for turning, not travelling. Louisiana caps you at 200 feet in it, and it may never be used to pass.",
    "On a learner's permit there is no cell phone use at all, hands-free included. Since the 2025 hands-free law every driver must be hands-free, and doing it in a school zone or work zone is a primary offence with a $250 fine.",
    "Two different clocks catch new arrivals: you may drive on a valid out-of-state licence for 90 days, but once you are a resident you have 30 days to get a Louisiana one.",
  ],
  sets: [...louisianaSets1to3, ...louisianaSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
