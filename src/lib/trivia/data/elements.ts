// The first 20 elements of the periodic table, by atomic number: hydrogen (1)
// through calcium (20). Names and symbols verified against the IUPAC periodic
// table; IUPAC spells 13 "aluminium" and 16 "sulfur", and the US spellings
// "aluminum" and "sulphur" are accepted as aliases. The symbol rides along as
// a hint the play screen can toggle.

import { assertNoAliasCollisions } from "../engine";
import type { TriviaAnswer } from "../types";

interface ElementRow {
  /** Atomic number, 1-20. Doubles as the stable id ("el1" ... "el20"). */
  number: number;
  symbol: string;
  name: string;
  nameAliases?: readonly string[];
}

const ROWS: readonly ElementRow[] = [
  { number: 1, symbol: "H", name: "Hydrogen" },
  { number: 2, symbol: "He", name: "Helium" },
  { number: 3, symbol: "Li", name: "Lithium" },
  { number: 4, symbol: "Be", name: "Beryllium", nameAliases: ["berylium", "berillium"] },
  { number: 5, symbol: "B", name: "Boron" },
  { number: 6, symbol: "C", name: "Carbon" },
  { number: 7, symbol: "N", name: "Nitrogen" },
  { number: 8, symbol: "O", name: "Oxygen" },
  { number: 9, symbol: "F", name: "Fluorine", nameAliases: ["flourine"] },
  { number: 10, symbol: "Ne", name: "Neon" },
  { number: 11, symbol: "Na", name: "Sodium" },
  { number: 12, symbol: "Mg", name: "Magnesium", nameAliases: ["magnesum"] },
  { number: 13, symbol: "Al", name: "Aluminium", nameAliases: ["aluminum"] },
  { number: 14, symbol: "Si", name: "Silicon" },
  { number: 15, symbol: "P", name: "Phosphorus", nameAliases: ["phosphorous"] },
  { number: 16, symbol: "S", name: "Sulfur", nameAliases: ["sulphur"] },
  { number: 17, symbol: "Cl", name: "Chlorine" },
  { number: 18, symbol: "Ar", name: "Argon" },
  { number: 19, symbol: "K", name: "Potassium", nameAliases: ["potasium"] },
  { number: 20, symbol: "Ca", name: "Calcium" },
];

function normalizeStatic(raw: string): string {
  return raw.toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g, "");
}

/**
 * Display pairs name and symbol ("Sodium (Na)") so the reveal teaches; the
 * hint field carries just the symbol for the in-run hint toggle.
 */
export const ELEMENT_ANSWERS: readonly TriviaAnswer[] = ROWS.map((row) => ({
  id: `el${row.number}`,
  display: `${row.number}. ${row.name} (${row.symbol})`,
  hint: row.symbol,
  aliases: [normalizeStatic(row.name), ...(row.nameAliases ?? []).map(normalizeStatic)],
}));

assertNoAliasCollisions("elements/names", ELEMENT_ANSWERS);

if (process.env.NODE_ENV !== "production" && ROWS.length !== 20) {
  throw new Error(`elements dataset: expected 20 entries, found ${ROWS.length}`);
}
