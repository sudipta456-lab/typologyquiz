// The full periodic table: all 118 elements, by atomic number.
//
// PROVENANCE. Atomic numbers, symbols and names were generated from PubChem's
// periodic-table endpoint (https://pubchem.ncbi.nlm.nih.gov/rest/pug/
// periodictable/CSV, fetched 2026-09-02, 118 data rows), not typed by hand, so
// no symbol can drift from the reference. Two names carry the IUPAC spelling
// where PubChem publishes the US variant: 13 "Aluminium" and 55 "Caesium". In
// both cases the US spelling is an accepted alias, as are "aluminum" and
// "sulphur" (IUPAC spells 16 "sulfur", which PubChem agrees with).
//
// Group and period are computed from the atomic number by the standard block
// rules, not stored per row upstream: the 30 f-block elements (57-71 and
// 89-103) get group `null`, because which of lanthanum/lutetium sits in group
// 3 is a live IUPAC question and every printed table pulls the series out into
// its own row anyway. PeriodicTable.tsx renders those two rows separately.
//
// Category follows PubChem's GroupBlock, folded into the ten-way scheme used
// for the chart legend: its "Halogen" and "Nonmetal" both become
// "reactive-nonmetal". "unknown" is part of the union for elements whose
// chemistry is genuinely unmeasured; no row uses it today because the
// reference assigns a predicted block to all of 104-118.

import { assertNoAliasCollisions } from "../engine";
import type { TriviaAnswer } from "../types";

/** Legend buckets for the chart. Hyphenated so they double as CSS var stems. */
export type ElementCategory =
  | "alkali-metal"
  | "alkaline-earth-metal"
  | "transition-metal"
  | "post-transition-metal"
  | "metalloid"
  | "reactive-nonmetal"
  | "noble-gas"
  | "lanthanide"
  | "actinide"
  | "unknown";

export const ELEMENT_CATEGORY_LABELS: Readonly<Record<ElementCategory, string>> = {
  "alkali-metal": "Alkali metal",
  "alkaline-earth-metal": "Alkaline earth metal",
  "transition-metal": "Transition metal",
  "post-transition-metal": "Post-transition metal",
  metalloid: "Metalloid",
  "reactive-nonmetal": "Reactive nonmetal",
  "noble-gas": "Noble gas",
  lanthanide: "Lanthanide",
  actinide: "Actinide",
  unknown: "Unknown",
};

interface ElementRow {
  /** Atomic number, 1-118. Doubles as the stable id ("el1" ... "el118"). */
  number: number;
  symbol: string;
  /** IUPAC name, title case. */
  name: string;
  /** 1-18, or null for the lanthanide and actinide series. */
  group: number | null;
  /** 1-7. */
  period: number;
  category: ElementCategory;
  nameAliases?: readonly string[];
}

const ROWS: readonly ElementRow[] = [
  { number: 1, symbol: "H", name: "Hydrogen", group: 1, period: 1, category: "reactive-nonmetal" },
  { number: 2, symbol: "He", name: "Helium", group: 18, period: 1, category: "noble-gas" },
  { number: 3, symbol: "Li", name: "Lithium", group: 1, period: 2, category: "alkali-metal" },
  { number: 4, symbol: "Be", name: "Beryllium", group: 2, period: 2, category: "alkaline-earth-metal", nameAliases: ["berylium", "berillium"] },
  { number: 5, symbol: "B", name: "Boron", group: 13, period: 2, category: "metalloid" },
  { number: 6, symbol: "C", name: "Carbon", group: 14, period: 2, category: "reactive-nonmetal" },
  { number: 7, symbol: "N", name: "Nitrogen", group: 15, period: 2, category: "reactive-nonmetal" },
  { number: 8, symbol: "O", name: "Oxygen", group: 16, period: 2, category: "reactive-nonmetal" },
  { number: 9, symbol: "F", name: "Fluorine", group: 17, period: 2, category: "reactive-nonmetal", nameAliases: ["flourine"] },
  { number: 10, symbol: "Ne", name: "Neon", group: 18, period: 2, category: "noble-gas" },
  { number: 11, symbol: "Na", name: "Sodium", group: 1, period: 3, category: "alkali-metal" },
  { number: 12, symbol: "Mg", name: "Magnesium", group: 2, period: 3, category: "alkaline-earth-metal", nameAliases: ["magnesum"] },
  { number: 13, symbol: "Al", name: "Aluminium", group: 13, period: 3, category: "post-transition-metal", nameAliases: ["aluminum"] },
  { number: 14, symbol: "Si", name: "Silicon", group: 14, period: 3, category: "metalloid" },
  { number: 15, symbol: "P", name: "Phosphorus", group: 15, period: 3, category: "reactive-nonmetal", nameAliases: ["phosphorous"] },
  { number: 16, symbol: "S", name: "Sulfur", group: 16, period: 3, category: "reactive-nonmetal", nameAliases: ["sulphur"] },
  { number: 17, symbol: "Cl", name: "Chlorine", group: 17, period: 3, category: "reactive-nonmetal" },
  { number: 18, symbol: "Ar", name: "Argon", group: 18, period: 3, category: "noble-gas" },
  { number: 19, symbol: "K", name: "Potassium", group: 1, period: 4, category: "alkali-metal", nameAliases: ["potasium"] },
  { number: 20, symbol: "Ca", name: "Calcium", group: 2, period: 4, category: "alkaline-earth-metal" },
  { number: 21, symbol: "Sc", name: "Scandium", group: 3, period: 4, category: "transition-metal" },
  { number: 22, symbol: "Ti", name: "Titanium", group: 4, period: 4, category: "transition-metal" },
  { number: 23, symbol: "V", name: "Vanadium", group: 5, period: 4, category: "transition-metal" },
  { number: 24, symbol: "Cr", name: "Chromium", group: 6, period: 4, category: "transition-metal" },
  { number: 25, symbol: "Mn", name: "Manganese", group: 7, period: 4, category: "transition-metal", nameAliases: ["manganeese"] },
  { number: 26, symbol: "Fe", name: "Iron", group: 8, period: 4, category: "transition-metal" },
  { number: 27, symbol: "Co", name: "Cobalt", group: 9, period: 4, category: "transition-metal", nameAliases: ["cobolt"] },
  { number: 28, symbol: "Ni", name: "Nickel", group: 10, period: 4, category: "transition-metal" },
  { number: 29, symbol: "Cu", name: "Copper", group: 11, period: 4, category: "transition-metal" },
  { number: 30, symbol: "Zn", name: "Zinc", group: 12, period: 4, category: "transition-metal" },
  { number: 31, symbol: "Ga", name: "Gallium", group: 13, period: 4, category: "post-transition-metal" },
  { number: 32, symbol: "Ge", name: "Germanium", group: 14, period: 4, category: "metalloid" },
  { number: 33, symbol: "As", name: "Arsenic", group: 15, period: 4, category: "metalloid" },
  { number: 34, symbol: "Se", name: "Selenium", group: 16, period: 4, category: "reactive-nonmetal", nameAliases: ["selinium"] },
  { number: 35, symbol: "Br", name: "Bromine", group: 17, period: 4, category: "reactive-nonmetal" },
  { number: 36, symbol: "Kr", name: "Krypton", group: 18, period: 4, category: "noble-gas" },
  { number: 37, symbol: "Rb", name: "Rubidium", group: 1, period: 5, category: "alkali-metal" },
  { number: 38, symbol: "Sr", name: "Strontium", group: 2, period: 5, category: "alkaline-earth-metal" },
  { number: 39, symbol: "Y", name: "Yttrium", group: 3, period: 5, category: "transition-metal", nameAliases: ["ytrium"] },
  { number: 40, symbol: "Zr", name: "Zirconium", group: 4, period: 5, category: "transition-metal" },
  { number: 41, symbol: "Nb", name: "Niobium", group: 5, period: 5, category: "transition-metal", nameAliases: ["columbium"] },
  { number: 42, symbol: "Mo", name: "Molybdenum", group: 6, period: 5, category: "transition-metal", nameAliases: ["molybdenium"] },
  { number: 43, symbol: "Tc", name: "Technetium", group: 7, period: 5, category: "transition-metal" },
  { number: 44, symbol: "Ru", name: "Ruthenium", group: 8, period: 5, category: "transition-metal" },
  { number: 45, symbol: "Rh", name: "Rhodium", group: 9, period: 5, category: "transition-metal" },
  { number: 46, symbol: "Pd", name: "Palladium", group: 10, period: 5, category: "transition-metal" },
  { number: 47, symbol: "Ag", name: "Silver", group: 11, period: 5, category: "transition-metal" },
  { number: 48, symbol: "Cd", name: "Cadmium", group: 12, period: 5, category: "transition-metal" },
  { number: 49, symbol: "In", name: "Indium", group: 13, period: 5, category: "post-transition-metal" },
  { number: 50, symbol: "Sn", name: "Tin", group: 14, period: 5, category: "post-transition-metal" },
  { number: 51, symbol: "Sb", name: "Antimony", group: 15, period: 5, category: "metalloid", nameAliases: ["antimoney"] },
  { number: 52, symbol: "Te", name: "Tellurium", group: 16, period: 5, category: "metalloid" },
  { number: 53, symbol: "I", name: "Iodine", group: 17, period: 5, category: "reactive-nonmetal" },
  { number: 54, symbol: "Xe", name: "Xenon", group: 18, period: 5, category: "noble-gas" },
  { number: 55, symbol: "Cs", name: "Caesium", group: 1, period: 6, category: "alkali-metal", nameAliases: ["cesium"] },
  { number: 56, symbol: "Ba", name: "Barium", group: 2, period: 6, category: "alkaline-earth-metal" },
  { number: 57, symbol: "La", name: "Lanthanum", group: null, period: 6, category: "lanthanide", nameAliases: ["lanthanium"] },
  { number: 58, symbol: "Ce", name: "Cerium", group: null, period: 6, category: "lanthanide" },
  { number: 59, symbol: "Pr", name: "Praseodymium", group: null, period: 6, category: "lanthanide" },
  { number: 60, symbol: "Nd", name: "Neodymium", group: null, period: 6, category: "lanthanide" },
  { number: 61, symbol: "Pm", name: "Promethium", group: null, period: 6, category: "lanthanide" },
  { number: 62, symbol: "Sm", name: "Samarium", group: null, period: 6, category: "lanthanide" },
  { number: 63, symbol: "Eu", name: "Europium", group: null, period: 6, category: "lanthanide" },
  { number: 64, symbol: "Gd", name: "Gadolinium", group: null, period: 6, category: "lanthanide" },
  { number: 65, symbol: "Tb", name: "Terbium", group: null, period: 6, category: "lanthanide" },
  { number: 66, symbol: "Dy", name: "Dysprosium", group: null, period: 6, category: "lanthanide" },
  { number: 67, symbol: "Ho", name: "Holmium", group: null, period: 6, category: "lanthanide" },
  { number: 68, symbol: "Er", name: "Erbium", group: null, period: 6, category: "lanthanide" },
  { number: 69, symbol: "Tm", name: "Thulium", group: null, period: 6, category: "lanthanide" },
  { number: 70, symbol: "Yb", name: "Ytterbium", group: null, period: 6, category: "lanthanide", nameAliases: ["yterbium"] },
  { number: 71, symbol: "Lu", name: "Lutetium", group: null, period: 6, category: "lanthanide" },
  { number: 72, symbol: "Hf", name: "Hafnium", group: 4, period: 6, category: "transition-metal" },
  { number: 73, symbol: "Ta", name: "Tantalum", group: 5, period: 6, category: "transition-metal", nameAliases: ["tantulum"] },
  { number: 74, symbol: "W", name: "Tungsten", group: 6, period: 6, category: "transition-metal", nameAliases: ["wolfram"] },
  { number: 75, symbol: "Re", name: "Rhenium", group: 7, period: 6, category: "transition-metal" },
  { number: 76, symbol: "Os", name: "Osmium", group: 8, period: 6, category: "transition-metal" },
  { number: 77, symbol: "Ir", name: "Iridium", group: 9, period: 6, category: "transition-metal" },
  { number: 78, symbol: "Pt", name: "Platinum", group: 10, period: 6, category: "transition-metal", nameAliases: ["platinium"] },
  { number: 79, symbol: "Au", name: "Gold", group: 11, period: 6, category: "transition-metal" },
  { number: 80, symbol: "Hg", name: "Mercury", group: 12, period: 6, category: "transition-metal" },
  { number: 81, symbol: "Tl", name: "Thallium", group: 13, period: 6, category: "post-transition-metal" },
  { number: 82, symbol: "Pb", name: "Lead", group: 14, period: 6, category: "post-transition-metal" },
  { number: 83, symbol: "Bi", name: "Bismuth", group: 15, period: 6, category: "post-transition-metal" },
  { number: 84, symbol: "Po", name: "Polonium", group: 16, period: 6, category: "metalloid" },
  { number: 85, symbol: "At", name: "Astatine", group: 17, period: 6, category: "reactive-nonmetal" },
  { number: 86, symbol: "Rn", name: "Radon", group: 18, period: 6, category: "noble-gas" },
  { number: 87, symbol: "Fr", name: "Francium", group: 1, period: 7, category: "alkali-metal" },
  { number: 88, symbol: "Ra", name: "Radium", group: 2, period: 7, category: "alkaline-earth-metal" },
  { number: 89, symbol: "Ac", name: "Actinium", group: null, period: 7, category: "actinide" },
  { number: 90, symbol: "Th", name: "Thorium", group: null, period: 7, category: "actinide" },
  { number: 91, symbol: "Pa", name: "Protactinium", group: null, period: 7, category: "actinide" },
  { number: 92, symbol: "U", name: "Uranium", group: null, period: 7, category: "actinide" },
  { number: 93, symbol: "Np", name: "Neptunium", group: null, period: 7, category: "actinide" },
  { number: 94, symbol: "Pu", name: "Plutonium", group: null, period: 7, category: "actinide" },
  { number: 95, symbol: "Am", name: "Americium", group: null, period: 7, category: "actinide" },
  { number: 96, symbol: "Cm", name: "Curium", group: null, period: 7, category: "actinide" },
  { number: 97, symbol: "Bk", name: "Berkelium", group: null, period: 7, category: "actinide" },
  { number: 98, symbol: "Cf", name: "Californium", group: null, period: 7, category: "actinide" },
  { number: 99, symbol: "Es", name: "Einsteinium", group: null, period: 7, category: "actinide" },
  { number: 100, symbol: "Fm", name: "Fermium", group: null, period: 7, category: "actinide" },
  { number: 101, symbol: "Md", name: "Mendelevium", group: null, period: 7, category: "actinide" },
  { number: 102, symbol: "No", name: "Nobelium", group: null, period: 7, category: "actinide" },
  { number: 103, symbol: "Lr", name: "Lawrencium", group: null, period: 7, category: "actinide" },
  { number: 104, symbol: "Rf", name: "Rutherfordium", group: 4, period: 7, category: "transition-metal", nameAliases: ["unnilquadium"] },
  { number: 105, symbol: "Db", name: "Dubnium", group: 5, period: 7, category: "transition-metal", nameAliases: ["unnilpentium"] },
  { number: 106, symbol: "Sg", name: "Seaborgium", group: 6, period: 7, category: "transition-metal", nameAliases: ["unnilhexium"] },
  { number: 107, symbol: "Bh", name: "Bohrium", group: 7, period: 7, category: "transition-metal", nameAliases: ["unnilseptium"] },
  { number: 108, symbol: "Hs", name: "Hassium", group: 8, period: 7, category: "transition-metal", nameAliases: ["unniloctium"] },
  { number: 109, symbol: "Mt", name: "Meitnerium", group: 9, period: 7, category: "transition-metal", nameAliases: ["unnilennium"] },
  { number: 110, symbol: "Ds", name: "Darmstadtium", group: 10, period: 7, category: "transition-metal", nameAliases: ["ununnilium", "darmstatium"] },
  { number: 111, symbol: "Rg", name: "Roentgenium", group: 11, period: 7, category: "transition-metal", nameAliases: ["unununium", "rontgenium"] },
  { number: 112, symbol: "Cn", name: "Copernicium", group: 12, period: 7, category: "transition-metal", nameAliases: ["ununbium"] },
  { number: 113, symbol: "Nh", name: "Nihonium", group: 13, period: 7, category: "post-transition-metal", nameAliases: ["ununtrium"] },
  { number: 114, symbol: "Fl", name: "Flerovium", group: 14, period: 7, category: "post-transition-metal", nameAliases: ["ununquadium"] },
  { number: 115, symbol: "Mc", name: "Moscovium", group: 15, period: 7, category: "post-transition-metal", nameAliases: ["ununpentium"] },
  { number: 116, symbol: "Lv", name: "Livermorium", group: 16, period: 7, category: "post-transition-metal", nameAliases: ["ununhexium"] },
  { number: 117, symbol: "Ts", name: "Tennessine", group: 17, period: 7, category: "reactive-nonmetal", nameAliases: ["ununseptium"] },
  { number: 118, symbol: "Og", name: "Oganesson", group: 18, period: 7, category: "noble-gas", nameAliases: ["ununoctium"] },];

function normalizeStatic(raw: string): string {
  return raw.toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g, "");
}

/** One element, as the chart needs it. `id` matches the trivia answer id. */
export interface PeriodicElement {
  id: string;
  number: number;
  symbol: string;
  name: string;
  group: number | null;
  period: number;
  category: ElementCategory;
}

export const ELEMENTS: readonly PeriodicElement[] = ROWS.map((row) => ({
  id: `el${row.number}`,
  number: row.number,
  symbol: row.symbol,
  name: row.name,
  group: row.group,
  period: row.period,
  category: row.category,
}));

export const ELEMENT_BY_ID: ReadonlyMap<string, PeriodicElement> = new Map(
  ELEMENTS.map((el) => [el.id, el])
);

/**
 * `grouped` attaches the category as the answer's group, which the play screen
 * turns into found-count columns. Worth it across 118 answers; deliberately
 * off for the 20-answer quiz, whose shipped screen has no columns and should
 * not gain any from this change.
 */
function toAnswer(row: ElementRow, grouped: boolean): TriviaAnswer {
  return {
    id: `el${row.number}`,
    // Display pairs name and symbol ("11. Sodium (Na)") so the reveal teaches;
    // the hint field carries just the symbol for the in-run hint toggle.
    display: `${row.number}. ${row.name} (${row.symbol})`,
    hint: row.symbol,
    ...(grouped ? { group: ELEMENT_CATEGORY_LABELS[row.category] } : {}),
    aliases: [normalizeStatic(row.name), ...(row.nameAliases ?? []).map(normalizeStatic)],
  };
}

/** All 118, for the full-table quiz. */
export const ALL_ELEMENT_ANSWERS: readonly TriviaAnswer[] = ROWS.map((row) =>
  toAnswer(row, true)
);

/**
 * Hydrogen through calcium. This is what the existing `periodic-table-first-20`
 * registry entry plays against, and `ELEMENT_ANSWERS` still points at it so
 * that quiz keeps its 20-answer promise. A quiz that wants the whole table
 * should reach for `ALL_ELEMENT_ANSWERS` instead.
 */
export const ELEMENT_ANSWERS_FIRST_20: readonly TriviaAnswer[] = ROWS.filter(
  (row) => row.number <= 20
).map((row) => toAnswer(row, false));

/** Back-compatible name kept for the registry's existing import. */
export const ELEMENT_ANSWERS: readonly TriviaAnswer[] = ELEMENT_ANSWERS_FIRST_20;

assertNoAliasCollisions("elements/names", ALL_ELEMENT_ANSWERS);

if (process.env.NODE_ENV !== "production") {
  if (ROWS.length !== 118) {
    throw new Error(`elements dataset: expected 118 entries, found ${ROWS.length}`);
  }
  if (ELEMENT_ANSWERS_FIRST_20.length !== 20) {
    throw new Error(
      `elements dataset: expected 20 first-row entries, found ${ELEMENT_ANSWERS_FIRST_20.length}`
    );
  }
  ROWS.forEach((row, i) => {
    if (row.number !== i + 1) {
      throw new Error(`elements dataset: row ${i} has atomic number ${row.number}`);
    }
  });
}
