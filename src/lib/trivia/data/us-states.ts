// The 50 US states: names, capitals, and accepted spellings.
//
// Alias rules: aliases are pre-normalized (lowercase, alphanumerics only) and
// must be unique across the dataset - the matcher fires on an exact buffer
// match, so a duplicate alias would misfile answers. Two-letter postal codes
// are deliberately NOT accepted for states (typing "ca" for California would
// gut the challenge); a handful of common misspellings are, where unambiguous.
// assertNoAliasCollisions() enforces uniqueness at module load in dev.

import { assertNoAliasCollisions } from "../engine";
import type { TriviaAnswer } from "../types";

interface StateRow {
  id: string;
  name: string;
  capital: string;
  nameAliases?: readonly string[];
  capitalAliases?: readonly string[];
}

const ROWS: readonly StateRow[] = [
  { id: "AL", name: "Alabama", capital: "Montgomery" },
  { id: "AK", name: "Alaska", capital: "Juneau", capitalAliases: ["juno"] },
  { id: "AZ", name: "Arizona", capital: "Phoenix", capitalAliases: ["pheonix"] },
  { id: "AR", name: "Arkansas", capital: "Little Rock", nameAliases: ["arkansaw"] },
  { id: "CA", name: "California", capital: "Sacramento" },
  { id: "CO", name: "Colorado", capital: "Denver" },
  { id: "CT", name: "Connecticut", capital: "Hartford", nameAliases: ["conneticut"] },
  { id: "DE", name: "Delaware", capital: "Dover", nameAliases: ["deleware"] },
  { id: "FL", name: "Florida", capital: "Tallahassee", capitalAliases: ["talahassee"] },
  { id: "GA", name: "Georgia", capital: "Atlanta" },
  { id: "HI", name: "Hawaii", capital: "Honolulu" },
  { id: "ID", name: "Idaho", capital: "Boise" },
  { id: "IL", name: "Illinois", capital: "Springfield", nameAliases: ["ilinois", "illinios"] },
  { id: "IN", name: "Indiana", capital: "Indianapolis", capitalAliases: ["indy"] },
  { id: "IA", name: "Iowa", capital: "Des Moines", capitalAliases: ["demoines"] },
  { id: "KS", name: "Kansas", capital: "Topeka" },
  { id: "KY", name: "Kentucky", capital: "Frankfort", capitalAliases: ["frankfurt"] },
  { id: "LA", name: "Louisiana", capital: "Baton Rouge", nameAliases: ["lousiana", "louisianna"] },
  { id: "ME", name: "Maine", capital: "Augusta" },
  { id: "MD", name: "Maryland", capital: "Annapolis" },
  { id: "MA", name: "Massachusetts", capital: "Boston", nameAliases: ["massachusets", "masachusetts", "massachussetts"] },
  { id: "MI", name: "Michigan", capital: "Lansing" },
  { id: "MN", name: "Minnesota", capital: "Saint Paul", capitalAliases: ["stpaul"] },
  { id: "MS", name: "Mississippi", capital: "Jackson", nameAliases: ["missisippi", "mississipi", "misissippi"] },
  { id: "MO", name: "Missouri", capital: "Jefferson City", nameAliases: ["misouri"] },
  { id: "MT", name: "Montana", capital: "Helena" },
  { id: "NE", name: "Nebraska", capital: "Lincoln" },
  { id: "NV", name: "Nevada", capital: "Carson City" },
  { id: "NH", name: "New Hampshire", capital: "Concord", nameAliases: ["newhamshire"] },
  { id: "NJ", name: "New Jersey", capital: "Trenton" },
  { id: "NM", name: "New Mexico", capital: "Santa Fe" },
  { id: "NY", name: "New York", capital: "Albany" },
  { id: "NC", name: "North Carolina", capital: "Raleigh", capitalAliases: ["raliegh"] },
  { id: "ND", name: "North Dakota", capital: "Bismarck", capitalAliases: ["bismark"] },
  { id: "OH", name: "Ohio", capital: "Columbus" },
  { id: "OK", name: "Oklahoma", capital: "Oklahoma City", capitalAliases: ["okc"] },
  { id: "OR", name: "Oregon", capital: "Salem", nameAliases: ["oregan"] },
  { id: "PA", name: "Pennsylvania", capital: "Harrisburg", nameAliases: ["pensylvania", "pennsylvannia"] },
  { id: "RI", name: "Rhode Island", capital: "Providence", nameAliases: ["rhodeisland", "roadisland"] },
  { id: "SC", name: "South Carolina", capital: "Columbia" },
  { id: "SD", name: "South Dakota", capital: "Pierre" },
  { id: "TN", name: "Tennessee", capital: "Nashville", nameAliases: ["tennesee", "tenessee"] },
  { id: "TX", name: "Texas", capital: "Austin" },
  { id: "UT", name: "Utah", capital: "Salt Lake City", capitalAliases: ["slc"] },
  { id: "VT", name: "Vermont", capital: "Montpelier", capitalAliases: ["montpellier"] },
  { id: "VA", name: "Virginia", capital: "Richmond" },
  { id: "WA", name: "Washington", capital: "Olympia" },
  { id: "WV", name: "West Virginia", capital: "Charleston", nameAliases: ["westvirgina"] },
  { id: "WI", name: "Wisconsin", capital: "Madison", nameAliases: ["wisconson"] },
  { id: "WY", name: "Wyoming", capital: "Cheyenne", capitalAliases: ["cheyene", "cheyanne"] },
];

function normalizeStatic(raw: string): string {
  // Same rules as engine.normalizeAnswer, inlined so the dataset stays a plain
  // data module with no runtime work beyond building the arrays once.
  return raw.toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g, "");
}

/** Answers for "name the states" quizzes: aliases are the state names. */
export const US_STATE_ANSWERS: readonly TriviaAnswer[] = ROWS.map((row) => ({
  id: row.id,
  display: row.name,
  aliases: [normalizeStatic(row.name), ...(row.nameAliases ?? []).map(normalizeStatic)],
}));

/**
 * Answers for "name the capitals" quizzes: free recall of the capital names.
 * The display pairs the city with its state so the found list teaches as it
 * fills ("Concord - New Hampshire").
 */
export const US_CAPITAL_ANSWERS: readonly TriviaAnswer[] = ROWS.map((row) => ({
  id: row.id,
  display: `${row.capital} - ${row.name}`,
  aliases: [
    normalizeStatic(row.capital),
    ...(row.capitalAliases ?? []).map(normalizeStatic),
  ],
}));

/** id -> display name, for map aria-labels and the sudden-death prompt. */
export const US_STATE_NAMES: Readonly<Record<string, string>> = Object.fromEntries(
  ROWS.map((row) => [row.id, row.name])
);

/** id -> capital city, for the capitals sudden-death prompt ("Find: Pierre"). */
export const US_CAPITAL_NAMES: Readonly<Record<string, string>> = Object.fromEntries(
  ROWS.map((row) => [row.id, row.capital])
);

assertNoAliasCollisions("us-states/names", US_STATE_ANSWERS);
assertNoAliasCollisions("us-states/capitals", US_CAPITAL_ANSWERS);
