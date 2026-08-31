// The 13 Canadian provinces and territories: names, capitals, accepted
// spellings. Same alias rules as us-states.ts, with one difference: the
// abbreviations Canadians actually say out loud ARE accepted ("bc", "pei",
// "nwt", "sask") - refusing "pei" would just feel wrong to anyone who lives
// there. Postal codes nobody says ("mb", "on") are still not accepted.

import { assertNoAliasCollisions } from "../engine";
import type { TriviaAnswer } from "../types";

interface RegionRow {
  id: string;
  name: string;
  capital: string;
  /** "province" or "territory" - shown in the found list. */
  kind: "province" | "territory";
  nameAliases?: readonly string[];
  capitalAliases?: readonly string[];
}

const ROWS: readonly RegionRow[] = [
  { id: "AB", name: "Alberta", capital: "Edmonton", kind: "province" },
  { id: "BC", name: "British Columbia", capital: "Victoria", kind: "province", nameAliases: ["bc"] },
  { id: "MB", name: "Manitoba", capital: "Winnipeg", kind: "province", capitalAliases: ["winipeg"] },
  { id: "NB", name: "New Brunswick", capital: "Fredericton", kind: "province", capitalAliases: ["fredricton"] },
  {
    id: "NL",
    name: "Newfoundland and Labrador",
    capital: "St. John's",
    kind: "province",
    // "newfoundland" alone is how nearly everyone says it; the full name then
    // self-heals through the prefix pruner if they keep typing.
    nameAliases: ["newfoundland", "nfld"],
    capitalAliases: ["saintjohns"],
  },
  { id: "NS", name: "Nova Scotia", capital: "Halifax", kind: "province" },
  { id: "ON", name: "Ontario", capital: "Toronto", kind: "province" },
  {
    id: "PE",
    name: "Prince Edward Island",
    capital: "Charlottetown",
    kind: "province",
    nameAliases: ["pei"],
    capitalAliases: ["charlotttown", "charlottown"],
  },
  {
    id: "QC",
    name: "Quebec",
    capital: "Quebec City",
    kind: "province",
    // "Québec" normalizes to "quebec" already; no extra alias needed. For the
    // capitals quiz, plain "quebec" is accepted - it registers before "city"
    // lands and the pruner absorbs the rest.
    capitalAliases: ["quebec", "villedequebec"],
  },
  { id: "SK", name: "Saskatchewan", capital: "Regina", kind: "province", nameAliases: ["sask", "saskatchewn"] },
  { id: "NT", name: "Northwest Territories", capital: "Yellowknife", kind: "territory", nameAliases: ["nwt"] },
  { id: "NU", name: "Nunavut", capital: "Iqaluit", kind: "territory", capitalAliases: ["iquluit", "iqualuit"] },
  { id: "YT", name: "Yukon", capital: "Whitehorse", kind: "territory", nameAliases: ["theyukon", "yukonterritory"] },
];

function normalizeStatic(raw: string): string {
  return raw.toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g, "");
}

/** Answers for "name the provinces and territories" quizzes. */
export const CANADA_REGION_ANSWERS: readonly TriviaAnswer[] = ROWS.map((row) => ({
  id: row.id,
  display: row.name,
  aliases: [normalizeStatic(row.name), ...(row.nameAliases ?? []).map(normalizeStatic)],
}));

/** Answers for the capitals quiz ("Victoria - British Columbia"). */
export const CANADA_CAPITAL_ANSWERS: readonly TriviaAnswer[] = ROWS.map((row) => ({
  id: row.id,
  display: `${row.capital} - ${row.name}`,
  aliases: [
    normalizeStatic(row.capital),
    ...(row.capitalAliases ?? []).map(normalizeStatic),
  ],
}));

/** id -> display name, for map aria-labels and the sudden-death prompt. */
export const CANADA_REGION_NAMES: Readonly<Record<string, string>> = Object.fromEntries(
  ROWS.map((row) => [row.id, row.name])
);

assertNoAliasCollisions("canada/names", CANADA_REGION_ANSWERS);
assertNoAliasCollisions("canada/capitals", CANADA_CAPITAL_ANSWERS);
