import elementRecords from "./elements.json";

export type FamilyId =
  | "alkali"
  | "alkaline-earth"
  | "transition"
  | "post-transition"
  | "metalloid"
  | "nonmetal"
  | "halogen"
  | "noble-gas"
  | "lanthanide"
  | "actinide";

export interface ElementRecord {
  atomicNumber: number;
  symbol: string;
  name: string;
  aliases: string[];
  group: number | null;
  period: number;
  column: number;
  row: number;
  family: FamilyId;
  familyStatus: "reference" | "predicted";
  /** CIAAW relative atomic weight, dimensionless and distinct from a mass number. */
  atomicWeight: string | null;
  abridgedWeight: string | null;
  weightUncertainty: string | null;
  electronConfiguration: string;
  configurationStatus: "reference" | "predicted";
  /** Pauling electronegativity. */
  electronegativity: number | null;
  /** First ionization energy in eV. */
  ionizationEnergy: number | null;
  state: "solid" | "liquid" | "gas" | "unknown";
  stateStatus: "reference" | "estimated" | "unknown";
}

export interface FamilyDefinition {
  id: FamilyId;
  label: string;
  color: string;
  summary: string;
}

export const DATA_CHECKED_ON = "2026-11-21";

export const FAMILIES = [
  { id: "alkali", label: "Alkali metals", color: "#B42318", summary: "Group 1 metals, excluding hydrogen." },
  { id: "alkaline-earth", label: "Alkaline earth metals", color: "#A15C07", summary: "Group 2 elements, generally reactive metals." },
  { id: "transition", label: "Transition metals", color: "#176B87", summary: "Elements assigned to the transition-metal block; boundaries can vary by convention." },
  { id: "post-transition", label: "Post-transition metals", color: "#6B4E9B", summary: "Metals commonly placed after the transition block; category boundaries vary." },
  { id: "metalloid", label: "Metalloids", color: "#287A55", summary: "Elements often described as having both metallic and nonmetallic characteristics." },
  { id: "nonmetal", label: "Nonmetals", color: "#2663A8", summary: "Nonmetal elements outside the separately listed halogen and noble-gas families." },
  { id: "halogen", label: "Halogens", color: "#A33F7A", summary: "Group 17 elements, commonly characterized by reactive nonmetal chemistry." },
  { id: "noble-gas", label: "Noble gases", color: "#525B8C", summary: "Group 18 elements, generally less reactive than neighboring families." },
  { id: "lanthanide", label: "Lanthanides", color: "#8A5A2B", summary: "The 57–71 series, displayed together in a detached row." },
  { id: "actinide", label: "Actinides", color: "#6941C6", summary: "The 89–103 series, displayed together in a detached row." },
] as const satisfies readonly FamilyDefinition[];

export const REFERENCE_SOURCES = [
  { id: "iupac", title: "IUPAC Periodic Table of Elements", url: "https://iupac.org/what-we-do/periodic-table-of-elements/" },
  { id: "ciaaw", title: "CIAAW Standard Atomic Weights", url: "https://ciaaw.org/atomic-weights.htm" },
  { id: "ciaaw-abridged", title: "CIAAW Abridged Standard Atomic Weights", url: "https://ciaaw.org/abridged-atomic-weights.htm" },
  { id: "pubchem", title: "PubChem Periodic Table PUG REST", url: "https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON" },
  { id: "openstax-table", title: "OpenStax Chemistry 2e: The Periodic Table", url: "https://openstax.org/books/chemistry-2e/pages/2-5-the-periodic-table" },
  { id: "openstax-trends", title: "OpenStax Chemistry 2e: Periodic Variations in Element Properties", url: "https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties" },
] as const;

/** Detached-series placement is conventional and does not settle disputed group 3 membership. */
export const LAYOUT_NOTE =
  "Lanthanides and actinides are displayed in detached rows for readability; this conventional layout does not settle the disputed placement of group 3.";

const records = elementRecords as ElementRecord[];

export const ELEMENTS: readonly ElementRecord[] = records;

export function getElement(atomicNumber: number): ElementRecord | undefined {
  return ELEMENTS.find((element) => element.atomicNumber === atomicNumber);
}

export function searchElements(
  query: string,
  family: FamilyId | "all" = "all",
  state: ElementRecord["state"] | "all" = "all",
): ElementRecord[] {
  const normalizedQuery = query.trim().toLowerCase();

  const eligible = ELEMENTS.filter(
    (element) =>
      (family === "all" || element.family === family) &&
      (state === "all" || element.state === state),
  );

  if (!normalizedQuery) return eligible;

  if (/^\d+$/.test(normalizedQuery)) {
    const atomicNumber = Number(normalizedQuery);
    return eligible.filter((element) => element.atomicNumber === atomicNumber);
  }

  const exactMatches = eligible.filter((element) => {
    const symbolMatch = element.symbol.toLowerCase() === normalizedQuery;
    const nameMatch = element.name.toLowerCase() === normalizedQuery;
    const aliasMatch = element.aliases.some((alias) => alias.toLowerCase() === normalizedQuery);
    return symbolMatch || nameMatch || aliasMatch;
  });
  if (exactMatches.length > 0) return exactMatches;

  return eligible.filter((element) => element.name.toLowerCase().includes(normalizedQuery));
}
