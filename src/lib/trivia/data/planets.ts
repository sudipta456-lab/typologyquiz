// The 8 planets of the solar system, in order from the Sun. Pluto has been a
// dwarf planet since the IAU vote in August 2006 and is deliberately not an
// answer - the quiz caveat says so, kindly, before anyone wastes a second on
// it. Ceres, Eris and the other dwarfs are likewise out.

import { assertNoAliasCollisions } from "../engine";
import type { TriviaAnswer } from "../types";

interface PlanetRow {
  id: string;
  name: string;
  nameAliases?: readonly string[];
}

const ROWS: readonly PlanetRow[] = [
  { id: "mercury", name: "Mercury" },
  { id: "venus", name: "Venus" },
  { id: "earth", name: "Earth" },
  { id: "mars", name: "Mars" },
  { id: "jupiter", name: "Jupiter", nameAliases: ["jupitor"] },
  { id: "saturn", name: "Saturn" },
  { id: "uranus", name: "Uranus" },
  { id: "neptune", name: "Neptune" },
];

function normalizeStatic(raw: string): string {
  return raw.toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g, "");
}

export const PLANET_ANSWERS: readonly TriviaAnswer[] = ROWS.map((row) => ({
  id: row.id,
  display: row.name,
  aliases: [normalizeStatic(row.name), ...(row.nameAliases ?? []).map(normalizeStatic)],
}));

assertNoAliasCollisions("planets/names", PLANET_ANSWERS);
