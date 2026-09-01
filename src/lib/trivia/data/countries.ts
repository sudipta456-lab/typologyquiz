// The countries of the world: names, capitals, continents, accepted spellings.
//
// INCLUSION RULE (also stated in the quiz caveat): the 193 UN member states,
// plus the 2 UN permanent observer states (Vatican City and Palestine), plus
// Taiwan = 196 entries. Kosovo, Western Sahara and other partially recognized
// states are NOT included, and neither are dependent territories (Greenland,
// Puerto Rico, Hong Kong). Continent assignment is geographic and follows the
// usual quiz convention: Russia and the whole of Turkey-excluded Europe count
// as Europe (44 entries including Vatican City); Turkey, Cyprus, Georgia,
// Armenia, Azerbaijan and Kazakhstan count as Asia. Verified against the UN
// member state list (un.org) as of 2026: the newest member is South Sudan
// (2011), so the 193 count has been stable for 15 years.
//
// Per-continent counts, enforced by the sanity check at the bottom:
//   Africa 54, Asia 49 (47 UN + Palestine + Taiwan), Europe 44 (43 UN +
//   Vatican City), North America 23, South America 12, Oceania 14 = 196.
//
// Alias rules: same as us-states.ts (pre-normalized, unique across the
// dataset, enforced by assertNoAliasCollisions in dev), but MORE generous -
// the short forms people actually use are accepted: "usa", "uk", "uae",
// "drc", "ivory coast", "burma", "czech republic", "swaziland". "congo" alone
// is deliberately NOT an alias for either Congo - the two are only accepted
// disambiguated (drc / dr congo / congo-kinshasa vs republic of the congo /
// congo-brazzaville). A few aliases are strict prefixes of a DIFFERENT
// country's alias (uk/ukraine, niger/nigeria, guinea/guinea-bissau,
// dominica/dominican republic); the play client defers those matches briefly
// so typing the longer country never hands out the shorter one for free.

import { assertNoAliasCollisions } from "../engine";
import type { TriviaAnswer } from "../types";

export type Continent =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "South America"
  | "Oceania";

export const CONTINENTS: readonly Continent[] = [
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Oceania",
];

interface CountryRow {
  id: string;
  name: string;
  capital: string;
  continent: Continent;
  nameAliases?: readonly string[];
}

const ROWS: readonly CountryRow[] = [
  // ----- Africa (54) -----
  { id: "dz", name: "Algeria", capital: "Algiers", continent: "Africa" },
  { id: "ao", name: "Angola", capital: "Luanda", continent: "Africa" },
  { id: "bj", name: "Benin", capital: "Porto-Novo", continent: "Africa" },
  { id: "bw", name: "Botswana", capital: "Gaborone", continent: "Africa" },
  { id: "bf", name: "Burkina Faso", capital: "Ouagadougou", continent: "Africa", nameAliases: ["burkina"] },
  { id: "bi", name: "Burundi", capital: "Gitega", continent: "Africa" },
  { id: "cv", name: "Cabo Verde", capital: "Praia", continent: "Africa", nameAliases: ["capeverde"] },
  { id: "cm", name: "Cameroon", capital: "Yaounde", continent: "Africa", nameAliases: ["cameroun"] },
  {
    id: "cf",
    name: "Central African Republic",
    capital: "Bangui",
    continent: "Africa",
    nameAliases: ["car"],
  },
  { id: "td", name: "Chad", capital: "N'Djamena", continent: "Africa" },
  { id: "km", name: "Comoros", capital: "Moroni", continent: "Africa", nameAliases: ["thecomoros"] },
  {
    id: "cd",
    name: "Democratic Republic of the Congo",
    capital: "Kinshasa",
    continent: "Africa",
    nameAliases: ["drc", "drcongo", "democraticrepublicofcongo", "congokinshasa"],
  },
  {
    id: "cg",
    name: "Republic of the Congo",
    capital: "Brazzaville",
    continent: "Africa",
    nameAliases: ["republicofcongo", "congobrazzaville", "congorepublic"],
  },
  {
    id: "ci",
    name: "Cote d'Ivoire",
    capital: "Yamoussoukro",
    continent: "Africa",
    nameAliases: ["ivorycoast"],
  },
  { id: "dj", name: "Djibouti", capital: "Djibouti City", continent: "Africa" },
  { id: "eg", name: "Egypt", capital: "Cairo", continent: "Africa" },
  { id: "gq", name: "Equatorial Guinea", capital: "Malabo", continent: "Africa" },
  { id: "er", name: "Eritrea", capital: "Asmara", continent: "Africa" },
  { id: "sz", name: "Eswatini", capital: "Mbabane", continent: "Africa", nameAliases: ["swaziland"] },
  { id: "et", name: "Ethiopia", capital: "Addis Ababa", continent: "Africa" },
  { id: "ga", name: "Gabon", capital: "Libreville", continent: "Africa" },
  { id: "gm", name: "Gambia", capital: "Banjul", continent: "Africa", nameAliases: ["thegambia"] },
  { id: "gh", name: "Ghana", capital: "Accra", continent: "Africa" },
  { id: "gn", name: "Guinea", capital: "Conakry", continent: "Africa" },
  { id: "gw", name: "Guinea-Bissau", capital: "Bissau", continent: "Africa", nameAliases: ["bissau"] },
  { id: "ke", name: "Kenya", capital: "Nairobi", continent: "Africa" },
  { id: "ls", name: "Lesotho", capital: "Maseru", continent: "Africa" },
  { id: "lr", name: "Liberia", capital: "Monrovia", continent: "Africa" },
  { id: "ly", name: "Libya", capital: "Tripoli", continent: "Africa" },
  { id: "mg", name: "Madagascar", capital: "Antananarivo", continent: "Africa" },
  { id: "mw", name: "Malawi", capital: "Lilongwe", continent: "Africa" },
  { id: "ml", name: "Mali", capital: "Bamako", continent: "Africa" },
  { id: "mr", name: "Mauritania", capital: "Nouakchott", continent: "Africa" },
  { id: "mu", name: "Mauritius", capital: "Port Louis", continent: "Africa" },
  { id: "ma", name: "Morocco", capital: "Rabat", continent: "Africa", nameAliases: ["morroco"] },
  { id: "mz", name: "Mozambique", capital: "Maputo", continent: "Africa" },
  { id: "na", name: "Namibia", capital: "Windhoek", continent: "Africa" },
  { id: "ne", name: "Niger", capital: "Niamey", continent: "Africa" },
  { id: "ng", name: "Nigeria", capital: "Abuja", continent: "Africa" },
  { id: "rw", name: "Rwanda", capital: "Kigali", continent: "Africa" },
  {
    id: "st",
    name: "Sao Tome and Principe",
    capital: "Sao Tome",
    continent: "Africa",
    nameAliases: ["saotome"],
  },
  { id: "sn", name: "Senegal", capital: "Dakar", continent: "Africa" },
  { id: "sc", name: "Seychelles", capital: "Victoria", continent: "Africa" },
  { id: "sl", name: "Sierra Leone", capital: "Freetown", continent: "Africa" },
  { id: "so", name: "Somalia", capital: "Mogadishu", continent: "Africa" },
  { id: "za", name: "South Africa", capital: "Pretoria", continent: "Africa" },
  { id: "ss", name: "South Sudan", capital: "Juba", continent: "Africa" },
  { id: "sd", name: "Sudan", capital: "Khartoum", continent: "Africa" },
  { id: "tz", name: "Tanzania", capital: "Dodoma", continent: "Africa" },
  { id: "tg", name: "Togo", capital: "Lome", continent: "Africa" },
  { id: "tn", name: "Tunisia", capital: "Tunis", continent: "Africa" },
  { id: "ug", name: "Uganda", capital: "Kampala", continent: "Africa" },
  { id: "zm", name: "Zambia", capital: "Lusaka", continent: "Africa" },
  { id: "zw", name: "Zimbabwe", capital: "Harare", continent: "Africa" },

  // ----- Asia (49: 47 UN members + Palestine + Taiwan) -----
  { id: "af", name: "Afghanistan", capital: "Kabul", continent: "Asia" },
  { id: "am", name: "Armenia", capital: "Yerevan", continent: "Asia" },
  { id: "az", name: "Azerbaijan", capital: "Baku", continent: "Asia" },
  { id: "bh", name: "Bahrain", capital: "Manama", continent: "Asia" },
  { id: "bd", name: "Bangladesh", capital: "Dhaka", continent: "Asia" },
  { id: "bt", name: "Bhutan", capital: "Thimphu", continent: "Asia" },
  {
    id: "bn",
    name: "Brunei",
    capital: "Bandar Seri Begawan",
    continent: "Asia",
    nameAliases: ["bruneidarussalam"],
  },
  { id: "kh", name: "Cambodia", capital: "Phnom Penh", continent: "Asia" },
  { id: "cn", name: "China", capital: "Beijing", continent: "Asia" },
  { id: "cy", name: "Cyprus", capital: "Nicosia", continent: "Asia" },
  { id: "ge", name: "Georgia", capital: "Tbilisi", continent: "Asia" },
  { id: "in", name: "India", capital: "New Delhi", continent: "Asia" },
  { id: "id", name: "Indonesia", capital: "Jakarta", continent: "Asia" },
  { id: "ir", name: "Iran", capital: "Tehran", continent: "Asia" },
  { id: "iq", name: "Iraq", capital: "Baghdad", continent: "Asia" },
  { id: "il", name: "Israel", capital: "Jerusalem", continent: "Asia" },
  { id: "jp", name: "Japan", capital: "Tokyo", continent: "Asia" },
  { id: "jo", name: "Jordan", capital: "Amman", continent: "Asia" },
  { id: "kz", name: "Kazakhstan", capital: "Astana", continent: "Asia", nameAliases: ["kazakstan"] },
  { id: "kw", name: "Kuwait", capital: "Kuwait City", continent: "Asia" },
  {
    id: "kg",
    name: "Kyrgyzstan",
    capital: "Bishkek",
    continent: "Asia",
    nameAliases: ["kyrgystan", "kirgizstan"],
  },
  { id: "la", name: "Laos", capital: "Vientiane", continent: "Asia" },
  { id: "lb", name: "Lebanon", capital: "Beirut", continent: "Asia" },
  { id: "my", name: "Malaysia", capital: "Kuala Lumpur", continent: "Asia" },
  { id: "mv", name: "Maldives", capital: "Male", continent: "Asia" },
  { id: "mn", name: "Mongolia", capital: "Ulaanbaatar", continent: "Asia" },
  { id: "mm", name: "Myanmar", capital: "Naypyidaw", continent: "Asia", nameAliases: ["burma"] },
  { id: "np", name: "Nepal", capital: "Kathmandu", continent: "Asia" },
  { id: "kp", name: "North Korea", capital: "Pyongyang", continent: "Asia", nameAliases: ["dprk"] },
  { id: "om", name: "Oman", capital: "Muscat", continent: "Asia" },
  { id: "pk", name: "Pakistan", capital: "Islamabad", continent: "Asia" },
  {
    id: "ps",
    name: "Palestine",
    capital: "Ramallah",
    continent: "Asia",
    nameAliases: ["stateofpalestine"],
  },
  {
    id: "ph",
    name: "Philippines",
    capital: "Manila",
    continent: "Asia",
    nameAliases: ["thephilippines", "phillipines", "philipines", "phillippines"],
  },
  { id: "qa", name: "Qatar", capital: "Doha", continent: "Asia", nameAliases: ["quatar"] },
  { id: "sa", name: "Saudi Arabia", capital: "Riyadh", continent: "Asia", nameAliases: ["saudi"] },
  { id: "sg", name: "Singapore", capital: "Singapore", continent: "Asia" },
  { id: "kr", name: "South Korea", capital: "Seoul", continent: "Asia" },
  {
    id: "lk",
    name: "Sri Lanka",
    capital: "Sri Jayawardenepura Kotte",
    continent: "Asia",
  },
  { id: "sy", name: "Syria", capital: "Damascus", continent: "Asia" },
  { id: "tw", name: "Taiwan", capital: "Taipei", continent: "Asia" },
  { id: "tj", name: "Tajikistan", capital: "Dushanbe", continent: "Asia" },
  { id: "th", name: "Thailand", capital: "Bangkok", continent: "Asia" },
  {
    id: "tl",
    name: "Timor-Leste",
    capital: "Dili",
    continent: "Asia",
    nameAliases: ["easttimor"],
  },
  { id: "tr", name: "Turkey", capital: "Ankara", continent: "Asia", nameAliases: ["turkiye"] },
  { id: "tm", name: "Turkmenistan", capital: "Ashgabat", continent: "Asia" },
  {
    id: "ae",
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
    continent: "Asia",
    nameAliases: ["uae", "emirates"],
  },
  { id: "uz", name: "Uzbekistan", capital: "Tashkent", continent: "Asia" },
  { id: "vn", name: "Vietnam", capital: "Hanoi", continent: "Asia" },
  { id: "ye", name: "Yemen", capital: "Sanaa", continent: "Asia" },

  // ----- Europe (44: 43 UN members + Vatican City) -----
  { id: "al", name: "Albania", capital: "Tirana", continent: "Europe" },
  { id: "ad", name: "Andorra", capital: "Andorra la Vella", continent: "Europe" },
  { id: "at", name: "Austria", capital: "Vienna", continent: "Europe" },
  { id: "by", name: "Belarus", capital: "Minsk", continent: "Europe" },
  { id: "be", name: "Belgium", capital: "Brussels", continent: "Europe" },
  {
    id: "ba",
    name: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    continent: "Europe",
    nameAliases: ["bosnia", "bosniaherzegovina"],
  },
  { id: "bg", name: "Bulgaria", capital: "Sofia", continent: "Europe" },
  { id: "hr", name: "Croatia", capital: "Zagreb", continent: "Europe" },
  {
    id: "cz",
    name: "Czechia",
    capital: "Prague",
    continent: "Europe",
    nameAliases: ["czechrepublic", "czech"],
  },
  { id: "dk", name: "Denmark", capital: "Copenhagen", continent: "Europe" },
  { id: "ee", name: "Estonia", capital: "Tallinn", continent: "Europe" },
  { id: "fi", name: "Finland", capital: "Helsinki", continent: "Europe" },
  { id: "fr", name: "France", capital: "Paris", continent: "Europe" },
  { id: "de", name: "Germany", capital: "Berlin", continent: "Europe" },
  { id: "gr", name: "Greece", capital: "Athens", continent: "Europe" },
  { id: "hu", name: "Hungary", capital: "Budapest", continent: "Europe" },
  { id: "is", name: "Iceland", capital: "Reykjavik", continent: "Europe" },
  { id: "ie", name: "Ireland", capital: "Dublin", continent: "Europe" },
  { id: "it", name: "Italy", capital: "Rome", continent: "Europe" },
  { id: "lv", name: "Latvia", capital: "Riga", continent: "Europe" },
  {
    id: "li",
    name: "Liechtenstein",
    capital: "Vaduz",
    continent: "Europe",
    nameAliases: ["lichtenstein"],
  },
  { id: "lt", name: "Lithuania", capital: "Vilnius", continent: "Europe" },
  {
    id: "lu",
    name: "Luxembourg",
    capital: "Luxembourg City",
    continent: "Europe",
    nameAliases: ["luxemburg"],
  },
  { id: "mt", name: "Malta", capital: "Valletta", continent: "Europe" },
  { id: "md", name: "Moldova", capital: "Chisinau", continent: "Europe" },
  { id: "mc", name: "Monaco", capital: "Monaco", continent: "Europe" },
  { id: "me", name: "Montenegro", capital: "Podgorica", continent: "Europe" },
  {
    id: "nl",
    name: "Netherlands",
    capital: "Amsterdam",
    continent: "Europe",
    nameAliases: ["thenetherlands", "holland"],
  },
  {
    id: "mk",
    name: "North Macedonia",
    capital: "Skopje",
    continent: "Europe",
    nameAliases: ["macedonia"],
  },
  { id: "no", name: "Norway", capital: "Oslo", continent: "Europe" },
  { id: "pl", name: "Poland", capital: "Warsaw", continent: "Europe" },
  { id: "pt", name: "Portugal", capital: "Lisbon", continent: "Europe" },
  { id: "ro", name: "Romania", capital: "Bucharest", continent: "Europe", nameAliases: ["rumania"] },
  { id: "ru", name: "Russia", capital: "Moscow", continent: "Europe", nameAliases: ["russianfederation"] },
  { id: "sm", name: "San Marino", capital: "San Marino", continent: "Europe" },
  { id: "rs", name: "Serbia", capital: "Belgrade", continent: "Europe" },
  { id: "sk", name: "Slovakia", capital: "Bratislava", continent: "Europe" },
  { id: "si", name: "Slovenia", capital: "Ljubljana", continent: "Europe" },
  { id: "es", name: "Spain", capital: "Madrid", continent: "Europe" },
  { id: "se", name: "Sweden", capital: "Stockholm", continent: "Europe" },
  { id: "ch", name: "Switzerland", capital: "Bern", continent: "Europe" },
  { id: "ua", name: "Ukraine", capital: "Kyiv", continent: "Europe" },
  {
    id: "gb",
    name: "United Kingdom",
    capital: "London",
    continent: "Europe",
    nameAliases: ["uk", "greatbritain", "britain"],
  },
  {
    id: "va",
    name: "Vatican City",
    capital: "Vatican City",
    continent: "Europe",
    nameAliases: ["vatican", "holysee"],
  },

  // ----- North America (23), Caribbean and Central America included -----
  {
    id: "ag",
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    continent: "North America",
    nameAliases: ["antigua"],
  },
  { id: "bs", name: "Bahamas", capital: "Nassau", continent: "North America", nameAliases: ["thebahamas"] },
  { id: "bb", name: "Barbados", capital: "Bridgetown", continent: "North America" },
  { id: "bz", name: "Belize", capital: "Belmopan", continent: "North America" },
  { id: "ca", name: "Canada", capital: "Ottawa", continent: "North America" },
  { id: "cr", name: "Costa Rica", capital: "San Jose", continent: "North America" },
  { id: "cu", name: "Cuba", capital: "Havana", continent: "North America" },
  { id: "dm", name: "Dominica", capital: "Roseau", continent: "North America" },
  {
    id: "do",
    name: "Dominican Republic",
    capital: "Santo Domingo",
    continent: "North America",
    nameAliases: ["thedominicanrepublic"],
  },
  {
    id: "sv",
    name: "El Salvador",
    capital: "San Salvador",
    continent: "North America",
    nameAliases: ["salvador"],
  },
  { id: "gd", name: "Grenada", capital: "Saint George's", continent: "North America" },
  { id: "gt", name: "Guatemala", capital: "Guatemala City", continent: "North America" },
  { id: "ht", name: "Haiti", capital: "Port-au-Prince", continent: "North America" },
  { id: "hn", name: "Honduras", capital: "Tegucigalpa", continent: "North America" },
  { id: "jm", name: "Jamaica", capital: "Kingston", continent: "North America" },
  { id: "mx", name: "Mexico", capital: "Mexico City", continent: "North America" },
  { id: "ni", name: "Nicaragua", capital: "Managua", continent: "North America" },
  { id: "pa", name: "Panama", capital: "Panama City", continent: "North America" },
  {
    id: "kn",
    name: "Saint Kitts and Nevis",
    capital: "Basseterre",
    continent: "North America",
    nameAliases: ["stkittsandnevis", "saintkitts", "stkitts"],
  },
  { id: "lc", name: "Saint Lucia", capital: "Castries", continent: "North America", nameAliases: ["stlucia"] },
  {
    id: "vc",
    name: "Saint Vincent and the Grenadines",
    capital: "Kingstown",
    continent: "North America",
    nameAliases: ["stvincentandthegrenadines", "saintvincent", "stvincent"],
  },
  {
    id: "tt",
    name: "Trinidad and Tobago",
    capital: "Port of Spain",
    continent: "North America",
    nameAliases: ["trinidad"],
  },
  {
    id: "us",
    name: "United States",
    capital: "Washington, D.C.",
    continent: "North America",
    nameAliases: ["usa", "unitedstatesofamerica", "america", "theunitedstates"],
  },

  // ----- South America (12) -----
  { id: "ar", name: "Argentina", capital: "Buenos Aires", continent: "South America" },
  { id: "bo", name: "Bolivia", capital: "Sucre", continent: "South America" },
  { id: "br", name: "Brazil", capital: "Brasilia", continent: "South America", nameAliases: ["brasil"] },
  { id: "cl", name: "Chile", capital: "Santiago", continent: "South America" },
  { id: "co", name: "Colombia", capital: "Bogota", continent: "South America", nameAliases: ["columbia"] },
  { id: "ec", name: "Ecuador", capital: "Quito", continent: "South America" },
  { id: "gy", name: "Guyana", capital: "Georgetown", continent: "South America" },
  { id: "py", name: "Paraguay", capital: "Asuncion", continent: "South America" },
  { id: "pe", name: "Peru", capital: "Lima", continent: "South America" },
  { id: "sr", name: "Suriname", capital: "Paramaribo", continent: "South America", nameAliases: ["surinam"] },
  { id: "uy", name: "Uruguay", capital: "Montevideo", continent: "South America" },
  { id: "ve", name: "Venezuela", capital: "Caracas", continent: "South America" },

  // ----- Oceania (14) -----
  { id: "au", name: "Australia", capital: "Canberra", continent: "Oceania" },
  { id: "fj", name: "Fiji", capital: "Suva", continent: "Oceania" },
  { id: "ki", name: "Kiribati", capital: "Tarawa", continent: "Oceania" },
  {
    id: "mh",
    name: "Marshall Islands",
    capital: "Majuro",
    continent: "Oceania",
    nameAliases: ["marshalls"],
  },
  {
    id: "fm",
    name: "Micronesia",
    capital: "Palikir",
    continent: "Oceania",
    nameAliases: ["federatedstatesofmicronesia", "fsm"],
  },
  { id: "nr", name: "Nauru", capital: "Yaren", continent: "Oceania" },
  { id: "nz", name: "New Zealand", capital: "Wellington", continent: "Oceania", nameAliases: ["nz"] },
  { id: "pw", name: "Palau", capital: "Ngerulmud", continent: "Oceania" },
  {
    id: "pg",
    name: "Papua New Guinea",
    capital: "Port Moresby",
    continent: "Oceania",
    nameAliases: ["png"],
  },
  { id: "ws", name: "Samoa", capital: "Apia", continent: "Oceania" },
  {
    id: "sb",
    name: "Solomon Islands",
    capital: "Honiara",
    continent: "Oceania",
    nameAliases: ["solomons"],
  },
  { id: "to", name: "Tonga", capital: "Nuku'alofa", continent: "Oceania" },
  { id: "tv", name: "Tuvalu", capital: "Funafuti", continent: "Oceania" },
  { id: "vu", name: "Vanuatu", capital: "Port Vila", continent: "Oceania" },
];

function normalizeStatic(raw: string): string {
  return raw.toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g, "");
}

/** Answers for "name the countries" quizzes; display carries the continent as group. */
export const COUNTRY_ANSWERS: readonly TriviaAnswer[] = ROWS.map((row) => ({
  id: row.id,
  display: row.name,
  group: row.continent,
  aliases: [normalizeStatic(row.name), ...(row.nameAliases ?? []).map(normalizeStatic)],
}));

/** Per-continent totals, for the play screen's continent columns. */
export const COUNTRY_CONTINENT_TOTALS: Readonly<Record<Continent, number>> = (() => {
  const totals = { Africa: 0, Asia: 0, Europe: 0, "North America": 0, "South America": 0, Oceania: 0 };
  for (const row of ROWS) totals[row.continent] += 1;
  return totals;
})();

assertNoAliasCollisions("countries/names", COUNTRY_ANSWERS);

// Sanity check on the inclusion rule, same dev-only pattern as the alias
// guard: 196 total and the per-continent counts stated at the top of the file.
if (process.env.NODE_ENV !== "production") {
  const expected: Record<Continent, number> = {
    Africa: 54,
    Asia: 49,
    Europe: 44,
    "North America": 23,
    "South America": 12,
    Oceania: 14,
  };
  if (ROWS.length !== 196) {
    throw new Error(`countries dataset: expected 196 entries, found ${ROWS.length}`);
  }
  for (const c of CONTINENTS) {
    if (COUNTRY_CONTINENT_TOTALS[c] !== expected[c]) {
      throw new Error(
        `countries dataset: expected ${expected[c]} in ${c}, found ${COUNTRY_CONTINENT_TOTALS[c]}`
      );
    }
  }
  const ids = new Set(ROWS.map((r) => r.id));
  if (ids.size !== ROWS.length) {
    throw new Error("countries dataset: duplicate id");
  }
}
