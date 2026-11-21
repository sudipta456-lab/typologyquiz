import { ELEMENTS, REFERENCE_SOURCES } from "./data";

export type LearningSource = { id: string; title: string; url: string };

export type LearningStep = {
  id: string;
  format: "element" | "choice";
  section: string;
  prompt: string;
  clue: string;
  options?: readonly { id: string; label: string }[];
  correct: string;
  explanation: string;
  sourceIds: readonly string[];
};

export type LearningTrack = {
  id: "decode" | "patterns" | "frontier";
  title: string;
  kicker: string;
  description: string;
  steps: readonly LearningStep[];
};

export type DiscoveryUpdate = {
  id: string;
  date: string;
  title: string;
  summary: string;
  whyItMatters: string;
  elementNumbers: readonly number[];
  sourceIds: readonly string[];
  status: "research" | "data-update" | "search";
};

export type ElementStory = {
  headline: string;
  body: string;
  sourceIds: readonly string[];
};

export const LEARNING_CHECKED_ON = "2026-11-21";

const ADDITIONAL_SOURCES: readonly LearningSource[] = [
  {
    id: "iupac-weights",
    title: "IUPAC: Standard atomic weights of three technology-critical elements revised",
    url: "https://iupac.org/standard-atomic-weights-of-three-technology-critical-elements-revised/",
  },
  {
    id: "gsi-sg-bond",
    title: "GSI/FAIR: Chemical bond of a superheavy element compound probed",
    url: "https://www.gsi.de/en/start/news/details/2026/10/14/chemische-bindung-mit-superschwerem-element?no_cache=1",
  },
  {
    id: "nature-sg-bond",
    title: "Nature: Observation of relativistic bond weakening in seaborgium hexacarbonyl",
    url: "https://www.nature.com/articles/s41586-026-11105-2",
  },
  {
    id: "jinr-sg-fission",
    title: "JINR: Prompt neutron yield measured in spontaneous seaborgium fission",
    url: "https://www.jinr.ru/posts/jinr-physicists-performed-pioneering-measurement-of-prompt-neutron-yield-in-spontaneous-seaborgium-fission/",
  },
  {
    id: "doe-superheavy",
    title: "U.S. Department of Energy: Superheavy elements",
    url: "https://www.energy.gov/science/doe-explainssuperheavy-elements",
  },
  {
    id: "jinr-119-meeting",
    title: "JINR: 63rd PAC NP meeting discusses progress toward element 119",
    url: "https://www.jinr.ru/posts/63rd-pac-np-meeting-towards-element-119-and-new-neutron-source/",
  },
];

export const LEARNING_SOURCES: readonly LearningSource[] = [
  ...REFERENCE_SOURCES,
  ...ADDITIONAL_SOURCES,
  ...ELEMENTS.map((element) => ({
    id: `rsc-${element.atomicNumber}`,
    title: `Royal Society of Chemistry: ${element.name}`,
    url: `https://periodic-table.rsc.org/element/${element.atomicNumber}/${element.name.toLowerCase()}`,
  })),
];

const elementStep = (
  id: string,
  section: string,
  prompt: string,
  clue: string,
  atomicNumber: number,
  explanation: string,
  sourceIds: readonly string[],
): LearningStep => ({
  id,
  format: "element",
  section,
  prompt,
  clue,
  correct: String(atomicNumber),
  explanation,
  sourceIds,
});

const choiceStep = (
  id: string,
  section: string,
  prompt: string,
  clue: string,
  options: readonly { id: string; label: string }[],
  correct: string,
  explanation: string,
  sourceIds: readonly string[],
): LearningStep => ({
  id,
  format: "choice",
  section,
  prompt,
  clue,
  options,
  correct,
  explanation,
  sourceIds,
});

export const LEARNING_TRACKS: readonly LearningTrack[] = [
  {
    id: "decode",
    title: "Decode the table",
    kicker: "Read a tile, not a flash card",
    description:
      "Practice using position, atomic number, and the limits of what a tile actually tells you.",
    steps: [
      elementStep(
        "decode-hydrogen-position",
        "Tile coordinates",
        "Which element occupies the period 1, group 1 tile?",
        "Its tile is at the far left of the first horizontal row. Its family is nonmetal, despite sharing group 1 with alkali metals below.",
        1,
        "Hydrogen is element 1. Its position is period 1, group 1, while its nonmetal classification shows why position alone does not make it an alkali metal.",
        ["openstax-table", "pubchem"],
      ),
      elementStep(
        "decode-helium-tile",
        "Tile coordinates",
        "Which element is in group 18 at the end of period 1, even though its atom has only two electrons?",
        "Read the upper-right tile; group number describes its column, not an electron count.",
        2,
        "Helium is atomic number 2, so a neutral atom has two electrons. The group 18 tile position is not a claim that helium has 18 electrons.",
        ["openstax-table", "pubchem"],
      ),
      elementStep(
        "decode-period-two-group-fifteen",
        "Tile coordinates",
        "Which element is at period 2, group 15?",
        "Use the horizontal row and vertical column together; do not confuse a group with a period.",
        7,
        "Nitrogen is the period 2, group 15 tile and has atomic number 7. The coordinates locate the element; the number of protons defines its identity.",
        ["openstax-table", "pubchem"],
      ),
      elementStep(
        "decode-detached-lanthanide-start",
        "Tile coordinates",
        "Which element starts the detached row displayed for period 6?",
        "The series row begins in display column 3 and is shown separately to make the table fit; it still belongs to period 6.",
        57,
        "Lanthanum, element 57, begins the displayed lanthanide row. The separate row is a layout convention, not a new period or a settled group 3 ruling.",
        ["openstax-table", "pubchem"],
      ),
      choiceStep(
        "decode-atomic-number",
        "What tile numbers mean",
        "A tile shows atomic number 17. Which statement interprets that number correctly?",
        "Atomic number identifies the element by a count in its nucleus; it is not an average mass or an isotope label.",
        [
          { id: "protons", label: "Every atom of that element has 17 protons." },
          { id: "weight", label: "Its atoms all have an atomic weight of exactly 17." },
          { id: "neutrons", label: "Every isotope of it has 17 neutrons." },
          { id: "isotope-protons", label: "Chlorine's atomic number changes to 18 in isotope 37." },
        ],
        "protons",
        "Atomic number is proton count, so 17 identifies chlorine. Isotopes differ in neutron count, not proton count; atomic weight is a different quantity from atomic number.",
        ["openstax-table", "pubchem"],
      ),
      choiceStep(
        "decode-row-column",
        "What tile numbers mean",
        "Which pair correctly describes the table's basic directions?",
        "One coordinate runs left to right; the other runs top to bottom.",
        [
          { id: "period-group", label: "Periods run horizontally; groups run vertically." },
          { id: "group-period", label: "Groups run horizontally; periods run vertically." },
          { id: "weight-number", label: "Atomic weights run horizontally; atomic numbers run vertically." },
          { id: "family-state", label: "Families run horizontally; physical states run vertically." },
        ],
        "period-group",
        "A period is a horizontal row and a group a vertical column. The other choices mistake data fields or broad classifications for table coordinates.",
        ["openstax-table"],
      ),
      choiceStep(
        "decode-weight-not-mass-number",
        "What tile numbers mean",
        "A tile's standard atomic weight is 91.222(3). What can you safely conclude from that notation?",
        "Compare the standard-weight reference with the separate idea of an isotope's mass number.",
        [
          { id: "relative-weight", label: "It is a standard atomic-weight value, not an isotope's mass number." },
          { id: "neutrons", label: "A zirconium atom has exactly 91 neutrons." },
          { id: "fixed-isotope", label: "Every zirconium atom has mass number 91." },
          { id: "protons", label: "Zirconium has 91 protons because its weight is 91." },
        ],
        "relative-weight",
        "CIAAW lists 91.222(3) as zirconium's standard atomic weight. A rounded weight does not identify one isotope or give a neutron count.",
        ["ciaaw", "openstax-table"],
      ),
      choiceStep(
        "decode-helium-group",
        "What tile numbers mean",
        "Why does helium's group 18 position not mean a neutral helium atom has 18 electrons?",
        "For a neutral atom, use its atomic number to determine electron count; group is a location in the table.",
        [
          { id: "column-not-count", label: "Group labels a vertical column; helium's atomic number is 2." },
          { id: "lost-electrons", label: "Helium normally loses 16 electrons before it is placed there." },
          { id: "period-count", label: "Period 1 means every atom in the row has one electron." },
          { id: "weight-count", label: "Its standard atomic weight is rounded down to two electrons." },
        ],
        "column-not-count",
        "Helium's atomic number 2 means two protons and, when neutral, two electrons. Group 18 is its column, not a count; the alternatives invent a different rule.",
        ["openstax-table", "pubchem"],
      ),
    ],
  },
  {
    id: "patterns",
    title: "Notice patterns, test the limits",
    kicker: "Compare without overpromising",
    description:
      "Compare neighbors and family members using displayed values, then separate observed data from broad trend claims.",
    steps: [
      elementStep(
        "patterns-pauling-fluorine",
        "Comparing displayed values",
        "Which period 2 halogen has a PubChem Pauling electronegativity of 3.98, above chlorine's 3.16?",
        "Use the provided values and the group 17 column; do not assume every property follows one universal pattern.",
        9,
        "Fluorine is the period 2, group 17 element with the supplied value 3.98; chlorine's supplied value is 3.16. This is a specific comparison, not a guarantee about all trends.",
        ["pubchem", "openstax-trends"],
      ),
      elementStep(
        "patterns-nitrogen-ionization",
        "Comparing displayed values",
        "The first-ionization values shown are carbon 11.260 eV and nitrogen 14.534 eV. Which has the larger listed value?",
        "Compare the two stated data values directly rather than extrapolating across the entire row.",
        7,
        "Nitrogen's listed first-ionization energy, 14.534 eV, is greater than carbon's 11.260 eV. The conclusion applies to this pair of supplied values.",
        ["pubchem", "openstax-trends"],
      ),
      elementStep(
        "patterns-next-sulfur",
        "Comparing displayed values",
        "Which element sits below oxygen in the same group 16 column, one period lower?",
        "Follow a group vertically from period 2 to period 3.",
        16,
        "Sulfur is below oxygen in group 16, moving from period 2 to period 3. The table supports this positional comparison without claiming every property is identical.",
        ["openstax-table", "pubchem"],
      ),
      elementStep(
        "patterns-gadolinium-weight",
        "Comparing displayed values",
        "Which element has the CIAAW 2024 full standard atomic weight 157.249(2)?",
        "Look across the lanthanide tiles and use CIAAW's full 2024 value; an abridged display may round differently.",
        64,
        "Gadolinium is element 64. CIAAW's full standard weight is 157.249(2); the abridged table is not required to display every digit at that precision.",
        ["ciaaw", "ciaaw-abridged"],
      ),
      choiceStep(
        "patterns-no-guaranteed-sweep",
        "Where patterns stop",
        "A learner notices one property change across a few neighboring tiles. Which conclusion is best supported?",
        "Use the element data as observations, not as a promise that every property changes monotonically in every row or column.",
        [
          { id: "bounded", label: "Describe the compared values, then check more evidence before claiming a general trend." },
          { id: "always-right", label: "Every property must rise from left to right in every period." },
          { id: "always-down", label: "Every property must rise down every group without exceptions." },
          { id: "same-family", label: "Elements in one group have identical physical properties." },
        ],
        "bounded",
        "A comparison supports only the values actually checked. The other options turn useful periodic patterns into guaranteed rules or claim identical properties.",
        ["openstax-trends", "pubchem"],
      ),
      choiceStep(
        "patterns-pauling-null",
        "Where patterns stop",
        "A Pauling electronegativity field is null for an element. What does that mean in this dataset?",
        "The source marks some values as unavailable; it does not encode missing measurements as numerical zeroes.",
        [
          { id: "missing", label: "No value is supplied there; null is not zero." },
          { id: "zero", label: "The element has exactly zero electronegativity." },
          { id: "lowest", label: "It is guaranteed to be the least electronegative element." },
          { id: "predict", label: "A neighboring element's value can be copied into the blank." },
        ],
        "missing",
        "PubChem's missing value is represented as null, not zero. The blank supports neither a numerical ranking nor copying a neighbor's measurement.",
        ["pubchem", "openstax-trends"],
      ),
      choiceStep(
        "patterns-detached-periods",
        "Where patterns stop",
        "The lanthanides appear in a detached display row. Which interpretation preserves both their layout and period information?",
        "The detached position is a readability convention; series elements still carry their period 6 or 7 identity.",
        [
          { id: "display-convention", label: "The detached row is a display convention; the lanthanides remain period 6." },
          { id: "new-period", label: "Every detached element belongs to a new, unnumbered period." },
          { id: "group-three-settled", label: "The layout proves that every lanthanide is in group 3." },
          { id: "atomic-number-reset", label: "Atomic numbers restart at 1 in each detached row." },
        ],
        "display-convention",
        "Lanthanides 57–71 are period 6 and actinides 89–103 period 7, though their display rows are detached. This layout does not settle disputed group 3 membership.",
        ["openstax-table", "pubchem"],
      ),
      choiceStep(
        "patterns-state-conditions",
        "Where patterns stop",
        "What is needed before making a physical-state claim from a periodic-table reference?",
        "State depends on conditions. This dataset marks the states it reports at 20 °C and leaves superheavy bulk states unknown.",
        [
          { id: "conditions", label: "State the conditions, such as 20 °C, and keep unknown entries unknown." },
          { id: "family-predicts", label: "Infer each element's state from its family label alone." },
          { id: "solid-default", label: "Call every unreported element solid by default." },
          { id: "neighbor-copy", label: "Copy the state of the nearest element in the same group." },
        ],
        "conditions",
        "A phase claim needs conditions, and the source leaves bulk states for elements 104 and above unknown. Family or neighbor-based guesses overstate what the data establish.",
        ["pubchem", "openstax-trends"],
      ),
    ],
  },
  {
    id: "frontier",
    title: "Frontier: evidence and uncertainty",
    kicker: "Research changes what we know",
    description:
      "Read current research carefully: isotopes keep an element's identity, measurements can refine trends, and search targets are not discoveries.",
    steps: [
      elementStep(
        "frontier-seaborgium-isotopes",
        "Same element, different evidence",
        "JINR reported prompt-neutron measurements for isotopes 258 and 260 of which element?",
        "The isotope mass numbers differ, while the proton number—and therefore the element tile—stays fixed at 106.",
        106,
        "Both reported isotopes are seaborgium, atomic number 106. Their different mass numbers mean different neutron counts, not different elements.",
        ["jinr-sg-fission", "pubchem"],
      ),
      elementStep(
        "frontier-tungsten-comparison",
        "Same element, different evidence",
        "In the 2026 group 6 carbonyl comparison, which existing element is the neighbor benchmark above seaborgium?",
        "Find the group 6 column: the research compared Sg(CO)6 with the tungsten hexacarbonyl W(CO)6.",
        74,
        "Tungsten is element 74, above seaborgium 106 in group 6. The experiment compared compounds of two known elements; it did not announce a new element.",
        ["nature-sg-bond", "openstax-table", "pubchem"],
      ),
      elementStep(
        "frontier-zirconium-weight",
        "Same element, different evidence",
        "Which element received the CIAAW 2024 full standard atomic weight 91.222(3)?",
        "This is a 2024 standard-weight revision based on isotope-abundance evaluations, not a new 2026 element discovery.",
        40,
        "Zirconium is element 40 and its full CIAAW value is 91.222(3). The notation describes a standard atomic weight, not one isotope's mass number.",
        ["ciaaw", "iupac-weights"],
      ),
      elementStep(
        "frontier-lutetium-weight",
        "Same element, different evidence",
        "Which element's full CIAAW 2024 standard weight is 174.96669(5), with spaces sometimes used in the published table?",
        "Read the full CIAAW value rather than expecting the abridged table to show all of its precision.",
        71,
        "Lutetium is element 71. CIAAW lists the full value as 174.966 69(5); abridged values can be rounded to fewer digits.",
        ["ciaaw", "ciaaw-abridged", "iupac-weights"],
      ),
      choiceStep(
        "frontier-isotope-identity",
        "How to read new results",
        "JINR compared seaborgium-258 and seaborgium-260. Why are these isotopes of the same element?",
        "An element's identity comes from proton number; isotope mass number counts protons plus neutrons.",
        [
          { id: "same-z", label: "They have the same proton number 106 and differ in neutron number." },
          { id: "different-elements", label: "Each mass number names a different newly discovered element." },
          { id: "weight-equals-neutrons", label: "The standard atomic weight gives each isotope's exact neutron count." },
          { id: "new-symbol", label: "A new isotope requires a new chemical symbol and group." },
        ],
        "same-z",
        "Both isotopes have 106 protons, so both are seaborgium. Their mass numbers differ because neutron numbers differ; isotope notation does not create a new element.",
        ["jinr-sg-fission", "openstax-table"],
      ),
      choiceStep(
        "frontier-bond-result",
        "How to read new results",
        "What did the October 2026 seaborgium-carbonyl study report?",
        "It measured Sg(CO)6 against W(CO)6 and found a small reversal of the preceding group 6 bond-energy trend.",
        [
          { id: "bond-reversal", label: "The measured Sg–carbonyl bond dissociation energy was weaker than W's by 4(2) kJ/mol, reversing the preceding group 6 trend." },
          { id: "new-element", label: "The experiment discovered element 119 inside seaborgium's carbonyl." },
          { id: "all-bonds", label: "Every bond made by seaborgium is weaker than every tungsten bond." },
          { id: "weight-revision", label: "It revised seaborgium's standard atomic weight in the 2026 CIAAW table." },
        ],
        "bond-reversal",
        "The Nature paper measured this specific pair of hexacarbonyl compounds and reported the 4(2) kJ/mol difference; it does not generalize to every bond or identify a new element.",
        ["nature-sg-bond", "gsi-sg-bond"],
      ),
      choiceStep(
        "frontier-weights-date",
        "How to read new results",
        "A news card mentions updated zirconium, gadolinium, and lutetium weights. Which date and interpretation are accurate?",
        "IUPAC announced the CIAAW revisions in 2024; the precision update is not a 2026 discovery of new elements.",
        [
          { id: "weights-2024", label: "These are 2024 standard-weight revisions for existing elements, based on evaluated isotope data." },
          { id: "elements-2026", label: "These are three newly confirmed elements discovered in 2026." },
          { id: "mass-numbers", label: "The revised values are exact neutron counts for single isotopes." },
          { id: "abridged-exact", label: "Abridged weights must display every digit in the full CIAAW value." },
        ],
        "weights-2024",
        "CIAAW and IUPAC describe 2024 revisions to standard atomic weights for Zr, Gd, and Lu. These refine reference values; they neither add elements nor define isotope neutron counts.",
        ["ciaaw", "iupac-weights", "ciaaw-abridged"],
      ),
      choiceStep(
        "frontier-119-120-status",
        "How to read new results",
        "A 2026 report discusses experiments toward elements 119 and 120. What status should a learner record?",
        "The November 6 DOE page describes element 120 as a search target; JINR's June meeting discussed progress on a 119 experiment.",
        [
          { id: "targets", label: "They remain research targets; neither has a confirmed IUPAC name or discovery here." },
          { id: "confirmed", label: "Both are confirmed elements because experiment planning was discussed." },
          { id: "named", label: "Their temporary symbols prove that their names are approved." },
          { id: "not-elements", label: "The current recognized table has already removed elements 117 and 118." },
        ],
        "targets",
        "Planning and search updates are not confirmed discoveries. The recognized table ends at 118, and no confirmed IUPAC name for 119 or 120 is reported by these sources.",
        ["doe-superheavy", "jinr-119-meeting", "iupac"],
      ),
    ],
  },
];

export const DISCOVERY_UPDATES: readonly DiscoveryUpdate[] = [
  {
    id: "sg-carbonyl-bond-2026",
    date: "2026-10-14",
    title: "A seaborgium bond bends a group trend",
    summary:
      "A Nature study published October 7 measured the first bond dissociation energy for Sg(CO)6. It was 4(2) kJ/mol weaker than W(CO)6, reversing the preceding group 6 trend; relativistic calculations agree.",
    whyItMatters:
      "A measured exception shows why periodic patterns guide questions but do not guarantee every result for very heavy atoms.",
    elementNumbers: [106, 74],
    sourceIds: ["nature-sg-bond", "gsi-sg-bond"],
    status: "research",
  },
  {
    id: "sg-prompt-fission-neutrons-2026",
    date: "2026-11-03",
    title: "Prompt neutrons counted in seaborgium fission",
    summary:
      "JINR reported first prompt-neutron multiplicity measurements for spontaneous fission of seaborgium-258 and seaborgium-260: averages of 4.9±0.4 and 5.03±0.14 neutrons per fission event, respectively, in this isotope pair.",
    whyItMatters:
      "Comparing isotopes shows that one element can have different neutron counts while retaining the same proton-defined identity.",
    elementNumbers: [106],
    sourceIds: ["jinr-sg-fission"],
    status: "research",
  },
  {
    id: "ciaaw-three-weights-2024",
    date: "2024",
    title: "Three standard atomic weights revised",
    summary:
      "CIAAW's 2024 full table gives zirconium 91.222(3), gadolinium 157.249(2), and lutetium 174.966 69(5), reflecting evaluated isotope-abundance evidence for existing elements; abridged values may show fewer digits.",
    whyItMatters:
      "Standard atomic weights summarize evaluated isotope data and should not be mistaken for isotope mass numbers or neutron counts.",
    elementNumbers: [40, 64, 71],
    sourceIds: ["ciaaw", "ciaaw-abridged", "iupac-weights"],
    status: "data-update",
  },
  {
    id: "search-for-119-120-2026",
    date: "2026-11-06",
    title: "Searches beyond element 118 continue",
    summary:
      "The DOE page, last updated November 6, 2026, describes element 120 as a search target; a June JINR meeting discussed progress on an element 119 experiment. Neither report confirms a new element or IUPAC name.",
    whyItMatters:
      "Separating experiment progress from confirmation keeps the recognized periodic table distinct from its frontier research goals.",
    elementNumbers: [],
    sourceIds: ["doe-superheavy", "jinr-119-meeting", "iupac"],
    status: "search",
  },
];

export const ELEMENT_STORIES: Readonly<Record<number, ElementStory>> = {
  1: { headline: "The universe's lightest building block", body: "Hydrogen is the universe's most abundant element, yet on Earth much of it is bound in water rather than floating freely in the air.", sourceIds: ["rsc-1"] },
  2: { headline: "Cooling giant magnets", body: "Liquid helium cools the superconducting magnets used in the Large Hadron Collider, linking a very light gas with one of physics' largest machines.", sourceIds: ["rsc-2"] },
  3: { headline: "Lightweight alloy partner", body: "Lithium metal can join aluminium and magnesium in lightweight alloys, a different role from lithium compounds used inside rechargeable batteries.", sourceIds: ["rsc-3"] },
  4: { headline: "A clear path for X-rays", body: "Beryllium's relative transparency to X-rays makes very thin foil useful in X-ray lithography, beyond its better-known role in specialized alloys.", sourceIds: ["rsc-4"] },
  5: { headline: "Boron paints fireworks green", body: "Amorphous boron can help ignite pyrotechnic flares, where its use is associated with their distinctive green colour.", sourceIds: ["rsc-5"] },
  6: { headline: "One element, many forms", body: "Carbon appears as graphite, diamond, fullerenes, and graphene; these are different structural forms of the same element, not different elements.", sourceIds: ["rsc-6"] },
  7: { headline: "Most of the air", body: "Nitrogen makes up about 78 percent of air by volume, and industry separates it from air for uses ranging from materials to food preservation.", sourceIds: ["rsc-7"] },
  8: { headline: "A steelmaking workhorse", body: "Oxygen gas has its largest commercial use in steelmaking and is also used in oxy-acetylene welding and metal cutting.", sourceIds: ["rsc-8"] },
  9: { headline: "Fluorine reaches plastics", body: "Fluorine chemistry helps produce fluoropolymers such as PTFE; the useful material is a compound, not a piece of elemental fluorine.", sourceIds: ["rsc-9"] },
  10: { headline: "The red in neon signs", body: "A discharge tube filled with neon glows reddish orange; signs of other colours use different gases rather than pure neon alone.", sourceIds: ["rsc-10"] },
  11: { headline: "Metal versus table salt", body: "Sodium metal has specialized industrial uses, while common salt is sodium chloride, a compound whose properties are not those of the metal.", sourceIds: ["rsc-11"] },
  12: { headline: "A bright-burning metal", body: "Magnesium burns with intense light and is used in flares; separate magnesium compounds serve roles in products such as heat-resistant bricks.", sourceIds: ["rsc-12"] },
  13: { headline: "A metal made to travel", body: "Aluminium's low density and corrosion resistance help explain its use in aircraft parts, transport alloys, cans, and window frames.", sourceIds: ["rsc-13"] },
  14: { headline: "Silicon in electronics", body: "Highly purified elemental silicon is used as a semiconductor; silicones are different materials built from silicon-oxygen polymer chains.", sourceIds: ["rsc-14"] },
  15: { headline: "Two forms, different jobs", body: "Red phosphorus is part of the striking surface on safety matchboxes, while white and red phosphorus are distinct forms of the element.", sourceIds: ["rsc-15"] },
  16: { headline: "Sulfur's industrial route", body: "Much recovered sulfur goes into sulfuric-acid production, which in turn supports the manufacture of phosphoric acid and phosphate fertilizers.", sourceIds: ["rsc-16"] },
  17: { headline: "Chlorine to clear water", body: "Chlorine is used to disinfect drinking and swimming-pool water; natural chlorine is usually found in compounds such as chloride salts.", sourceIds: ["rsc-17"] },
  18: { headline: "A shield for hot work", body: "Argon can provide an inert atmosphere around a welding area, helping protect the work zone while the metal is joined.", sourceIds: ["rsc-18"] },
  19: { headline: "Fertilizer chemistry", body: "Demand for potassium compounds is especially high in fertilizers, while the element potassium itself is a soft, reactive metal.", sourceIds: ["rsc-19"] },
  20: { headline: "Limestone becomes building material", body: "Limestone is calcium carbonate, and heating it produces quicklime used in cement-making; the rock and the calcium metal are not interchangeable.", sourceIds: ["rsc-20"] },
  21: { headline: "An alloy with promise", body: "Small additions of scandium can strengthen aluminium alloys, including materials used in some high-performance bicycle frames.", sourceIds: ["rsc-21"] },
  22: { headline: "Strength without as much weight", body: "Titanium alloys combine high strength with lower density than steel, supporting uses in aircraft and spacecraft structures.", sourceIds: ["rsc-22"] },
  23: { headline: "A small addition to steel", body: "Most produced vanadium is used as a steel additive; vanadium-steel alloys are valued for toughness in tools and structural parts.", sourceIds: ["rsc-23"] },
  24: { headline: "Chromium's mirror finish", body: "A thin chromium plating can give steel a bright, polished appearance, while chromium is also used in alloys including stainless steel.", sourceIds: ["rsc-24"] },
  25: { headline: "Manganese strengthens steel", body: "Manganese is commonly used in alloys rather than as a pure metal; adding it can strengthen steel and improve workability.", sourceIds: ["rsc-25"] },
  26: { headline: "Most refined metal is iron", body: "The Royal Society of Chemistry describes iron as the basis of most refined metal production, with much of it converted into steel.", sourceIds: ["rsc-26"] },
  27: { headline: "Cobalt helps make magnets", body: "Cobalt can be alloyed with aluminium and nickel to produce powerful magnets, and cobalt metal itself can also be magnetised.", sourceIds: ["rsc-27"] },
  28: { headline: "A heating element alloy", body: "Nichrome, a nickel-chromium alloy, resists corrosion when hot and is used in appliances such as toasters and electric ovens.", sourceIds: ["rsc-28"] },
  29: { headline: "Wires that carry current", body: "Copper conducts electricity well and can be drawn into wires, making it a common choice for electrical equipment and motors.", sourceIds: ["rsc-29"] },
  30: { headline: "A protective zinc coat", body: "Galvanizing coats iron or steel with zinc to help prevent rust, extending the material's use in structures and transport parts.", sourceIds: ["rsc-30"] },
  31: { headline: "A compound in semiconductors", body: "Gallium arsenide is an important semiconductor compound used in electronics; the compound is not the same substance as elemental gallium.", sourceIds: ["rsc-31"] },
  32: { headline: "An early transistor material", body: "Pure germanium was widely used as a semiconductor in transistors before silicon became the more common material in many devices.", sourceIds: ["rsc-32"] },
  33: { headline: "A compound in solid-state devices", body: "Gallium arsenide is a semiconductor compound used in solid-state devices; arsenic is part of that compound, so this is not elemental arsenic alone.", sourceIds: ["rsc-31", "rsc-33"] },
  34: { headline: "Colour control in glass", body: "Selenium additives can remove unwanted colour from glass or create a deep red tint, depending on the selenium compound used.", sourceIds: ["rsc-34"] },
  35: { headline: "The liquid halogen", body: "Bromine is a deep-red liquid under ordinary room conditions, making it an unusual contrast with the gaseous halogens above it.", sourceIds: ["rsc-35"] },
  36: { headline: "A flash in the lamp", body: "Krypton is used in some flash lamps for high-speed photography and as a filling gas in energy-saving fluorescent lighting.", sourceIds: ["rsc-36"] },
  37: { headline: "Mostly a research element", body: "Rubidium has few uses outside research, though it has appeared in photocells and in specialized glass formulations.", sourceIds: ["rsc-37"] },
  38: { headline: "Red fireworks come from salts", body: "Strontium salts give fireworks and flares a vivid red colour; the effect belongs to the compounds, not the metallic element alone.", sourceIds: ["rsc-38"] },
  39: { headline: "A rare-earth source mineral", body: "Xenotime can contain substantial yttrium phosphate, making the mineral one source of yttrium used in alloying applications.", sourceIds: ["rsc-39"] },
  40: { headline: "A neutron-friendly reactor material", body: "Zirconium absorbs few neutrons and is widely used in nuclear-power settings; CIAAW's full 2024 standard weight is 91.222(3).", sourceIds: ["rsc-40", "ciaaw"] },
  41: { headline: "Strength at low temperature", body: "Adding niobium to stainless steel and other alloys can improve strength, particularly in applications that operate at low temperatures.", sourceIds: ["rsc-41"] },
  42: { headline: "A metal shaped from powder", body: "Molybdenum's very high melting point means many products begin as powder that is compressed under high pressure.", sourceIds: ["rsc-42"] },
  43: { headline: "A rare element made in reactors", body: "Technetium does not occur naturally in useful amounts; it is produced from uranium-fuel fission products and studied in research settings.", sourceIds: ["rsc-43"] },
  44: { headline: "Contacts for tiny circuits", body: "Much ruthenium production goes into chip resistors and electrical contacts, giving this relatively rare metal a role in electronics.", sourceIds: ["rsc-44"] },
  45: { headline: "A catalyst in exhaust systems", body: "Rhodium is widely used in vehicle catalytic converters, where catalysts help reduce nitrogen oxides in exhaust gases.", sourceIds: ["rsc-45"] },
  46: { headline: "Palladium in catalytic converters", body: "Most palladium is used in vehicle catalytic converters, where the metal helps catalyse reactions in engine exhaust.", sourceIds: ["rsc-46"] },
  47: { headline: "Sterling is an alloy", body: "Sterling silver contains 92.5 percent silver, with the remainder made from copper or another metal to form an alloy.", sourceIds: ["rsc-47"] },
  48: { headline: "A material under review", body: "Cadmium's uses are being limited because of its hazards; RSC notes its significance in older rechargeable battery technologies.", sourceIds: ["rsc-48"] },
  49: { headline: "Transparent conducting layers", body: "Indium tin oxide is a compound mixture that conducts electricity while remaining transparent, so it appears in touchscreens and display panels.", sourceIds: ["rsc-49"] },
  50: { headline: "Tin protects steel cans", body: "Many food cans are steel coated with tin, so the familiar name does not mean the whole container is made of elemental tin.", sourceIds: ["rsc-50"] },
  51: { headline: "A semiconductor ingredient", body: "Antimony is used in some semiconductor devices, including infrared detectors and diodes, and can also strengthen selected metal alloys.", sourceIds: ["rsc-51"] },
  52: { headline: "Tellurium improves machinability", body: "Small amounts of tellurium in copper and stainless-steel alloys can make those materials easier to machine into useful parts.", sourceIds: ["rsc-52"] },
  53: { headline: "A crystal that turns to vapour", body: "When heated, iodine crystals can sublime directly into purple vapour, changing phase without first becoming a liquid.", sourceIds: ["rsc-53"] },
  54: { headline: "A blue discharge glow", body: "An electric discharge can make xenon glow blue, a property used in specialized light sources rather than ordinary coloured glass.", sourceIds: ["rsc-54"] },
  55: { headline: "A metal with a golden look", body: "Caesium metal has a gold colour, while many industrial applications use caesium compounds rather than the reactive metal itself.", sourceIds: ["rsc-55"] },
  56: { headline: "Drilling fluids use barium compounds", body: "Most barium production serves drilling fluids for oil and gas wells; this industrial use commonly involves compounds rather than pure metal.", sourceIds: ["rsc-56"] },
  57: { headline: "The first detached lanthanide", body: "Lanthanum starts the 57–71 series often drawn beneath the main grid, a layout choice that keeps the periodic table compact.", sourceIds: ["rsc-57", "openstax-table"] },
  58: { headline: "A spark from mischmetal", body: "Cerium is a major ingredient in mischmetal, an alloy whose well-known use is the flint mechanism in some lighters.", sourceIds: ["rsc-58"] },
  59: { headline: "An alloy for aircraft engines", body: "A strong magnesium-praseodymium alloy is used in aircraft engines, showing how a lanthanide can contribute through an engineered mixture.", sourceIds: ["rsc-59"] },
  60: { headline: "Tiny devices, strong magnets", body: "Neodymium-iron-boron alloys form strong permanent magnets that helped make compact speakers, microphones, and other electronics possible.", sourceIds: ["rsc-60"] },
  61: { headline: "A short-lived research element", body: "Promethium's longest-lived isotope has a half-life of about 18 years, and the element is used mainly in specialized research contexts.", sourceIds: ["rsc-61"] },
  62: { headline: "Magnets that tolerate heat", body: "Samarium-cobalt magnets retain magnetic strength at high temperatures, making the alloy useful in demanding microwave applications.", sourceIds: ["rsc-62"] },
  63: { headline: "A banknote security signal", body: "Europium compounds in euro banknotes glow red under ultraviolet light, providing a feature that can help distinguish genuine notes.", sourceIds: ["rsc-63"] },
  64: { headline: "An updated lanthanide weight", body: "CIAAW revised gadolinium's standard atomic weight in 2024 to 157.249(2), reflecting evaluated isotope-abundance evidence rather than a new element.", sourceIds: ["rsc-64", "ciaaw", "iupac-weights"] },
  65: { headline: "Terbium in efficient lamps", body: "Terbium compounds are used in low-energy bulbs and mercury lamps, where small additions help produce useful light-emitting materials.", sourceIds: ["rsc-65"] },
  66: { headline: "Keeping magnets useful", body: "Dysprosium is added to some neodymium-based magnet alloys, helping tailor their performance for practical magnet applications.", sourceIds: ["rsc-66"] },
  67: { headline: "A neutron-absorbing lanthanide", body: "Holmium can absorb neutrons and is used in reactor control materials, a role tied to nuclear engineering rather than everyday metal objects.", sourceIds: ["rsc-67"] },
  68: { headline: "Tuning an alloy's workability", body: "Adding erbium to metals such as vanadium can reduce hardness and make the resulting alloy easier to work.", sourceIds: ["rsc-68"] },
  69: { headline: "An isotope for portable imaging", body: "Irradiated thulium can produce an isotope that emits X-rays, a specialized source used in compact X-ray equipment.", sourceIds: ["rsc-69"] },
  70: { headline: "A material for adjustable lasers", body: "Ytterbium is finding uses in tunable lasers and memory devices, extending the lanthanide's role beyond traditional alloys.", sourceIds: ["rsc-70"] },
  71: { headline: "Lutetium's precision update", body: "CIAAW's full 2024 standard atomic weight for lutetium is 174.96669(5); abridged tables may round it to fewer decimal places.", sourceIds: ["rsc-71", "ciaaw", "ciaaw-abridged", "iupac-weights"] },
  72: { headline: "Control rods absorb neutrons", body: "Hafnium absorbs neutrons and is used in control rods, where the material helps regulate nuclear reactions in engineered systems.", sourceIds: ["rsc-72"] },
  73: { headline: "A thin insulating oxide", body: "Tantalum's surface oxide can act as a very thin insulating layer, a feature used in electronic components such as capacitors.", sourceIds: ["rsc-73"] },
  74: { headline: "The tungsten comparison", body: "Tungsten is a group 6 neighbor used as the comparison metal in the 2026 study of seaborgium hexacarbonyl bonding.", sourceIds: ["rsc-74", "nature-sg-bond", "gsi-sg-bond"] },
  75: { headline: "Rhenium strengthens hot alloys", body: "Rhenium added to tungsten- or molybdenum-based alloys contributes useful performance in hot applications such as oven filaments.", sourceIds: ["rsc-75"] },
  76: { headline: "A very dense element", body: "Osmium is exceptionally dense and is used in very hard alloys for items such as instrument pivots and electrical contacts.", sourceIds: ["rsc-76"] },
  77: { headline: "A metal resistant to corrosion", body: "Iridium resists corrosion exceptionally well and is used in specialized alloys, including blends with osmium for durable instrument parts.", sourceIds: ["rsc-77"] },
  78: { headline: "Catalysis on the road", body: "Platinum's largest use is in vehicle catalytic converters, where the metal helps speed chemical reactions that treat exhaust.", sourceIds: ["rsc-78"] },
  79: { headline: "Gold occurs in native form", body: "Gold is one of the few elements found naturally as the uncombined metal, as well as being widely used in alloys and jewellery.", sourceIds: ["rsc-79"] },
  80: { headline: "The liquid metal", body: "Mercury is a liquid metal at 20 °C, unlike most elements; many historical uses have been reduced or reviewed because of toxicity.", sourceIds: ["rsc-80"] },
  81: { headline: "A metal with limited uses", body: "Thallium's applications are limited because it is toxic, and older uses such as rodent-control chemicals have been prohibited in many places.", sourceIds: ["rsc-81"] },
  82: { headline: "A corrosion-resistant sheet metal", body: "Lead's softness and corrosion resistance supported historical uses in pipes and sheets, though many older applications have since been restricted.", sourceIds: ["rsc-82"] },
  83: { headline: "Low-melting alloy blends", body: "Bismuth alloys with tin or cadmium can melt at relatively low temperatures, a property used in fire detectors, fuses, and solders.", sourceIds: ["rsc-83"] },
  84: { headline: "A rare element for research", body: "Polonium is a very rare natural element, and RSC describes its applications as limited to specialized sources and research.", sourceIds: ["rsc-84"] },
  85: { headline: "Research in tiny quantities", body: "Astatine's short-lived isotopes and very small production quantities leave it with no established use outside research.", sourceIds: ["rsc-85"] },
  86: { headline: "A gas from radioactive decay", body: "Radon forms naturally as radium-226 decays in rocks, making it part of a radioactive sequence rather than a stable mineral deposit.", sourceIds: ["rsc-86"] },
  87: { headline: "Minutes of existence", body: "Francium's most familiar isotope has a half-life measured in minutes, so the element has no practical use outside research.", sourceIds: ["rsc-87"] },
  88: { headline: "Found with uranium ores", body: "Radium occurs in uranium ores and can be recovered as a by-product of uranium processing, though its radioactivity limits its use.", sourceIds: ["rsc-88"] },
  89: { headline: "A luminous research element", body: "Actinium's radioactivity can excite nearby air and produce a blue glow, while the element itself is used mainly in research.", sourceIds: ["rsc-89"] },
  90: { headline: "A high-temperature alloy addition", body: "Thorium can strengthen magnesium alloys and improve their resistance to deformation at high temperatures in specialized engineering contexts.", sourceIds: ["rsc-90"] },
  91: { headline: "A rare actinide", body: "Protactinium occurs naturally in small amounts in uranium ores and has little use outside research.", sourceIds: ["rsc-91"] },
  92: { headline: "Fuel for nuclear power", body: "Uranium serves as nuclear fuel in power stations and is also a starting material for producing heavier synthetic elements.", sourceIds: ["rsc-92"] },
  93: { headline: "A reactor by-product", body: "Neptunium is obtained as a by-product of nuclear reactors and is used mostly in research rather than everyday technology.", sourceIds: ["rsc-93"] },
  94: { headline: "Made by irradiating uranium", body: "Much plutonium is produced when uranium is irradiated in reactors; its applications are tightly tied to specialized nuclear research and systems.", sourceIds: ["rsc-94"] },
  95: { headline: "A sealed source in alarms", body: "Americium is used in some smoke alarms, an example of a radioactive element serving inside a manufactured device rather than as bulk metal.", sourceIds: ["rsc-95"] },
  96: { headline: "An isotope-powered spacecraft", body: "Curium has supplied power to electrical equipment on space missions, through specialized isotope-based power systems.", sourceIds: ["rsc-96"] },
  97: { headline: "Made for research", body: "Berkelium is produced in quantities too small for commercial technology, so its role remains laboratory research.", sourceIds: ["rsc-97"] },
  98: { headline: "A neutron source for industry", body: "Californium emits neutrons and has been used in specialized industrial instruments that inspect materials and identify underground layers.", sourceIds: ["rsc-98"] },
  99: { headline: "A few milligrams each year", body: "Einsteinium is produced only in tiny amounts and has no established application outside research today.", sourceIds: ["rsc-99"] },
  100: { headline: "A microgram-scale element", body: "Fermium is obtained only in microgram quantities, keeping its role within experimental research rather than practical materials use.", sourceIds: ["rsc-100"] },
  101: { headline: "Only a few atoms at a time", body: "Mendelevium does not occur naturally and has been created only atom by atom for scientific research.", sourceIds: ["rsc-101"] },
  102: { headline: "A brief research window", body: "Nobelium's short-lived isotopes mean researchers create only small numbers of atoms to study its chemistry and nuclear properties.", sourceIds: ["rsc-102"] },
  103: { headline: "A laboratory-made element", body: "Lawrencium is made in tiny quantities and has no use beyond research, so its place in the table is known better than its bulk properties.", sourceIds: ["rsc-103"] },
  104: { headline: "Research, not a material", body: "Rutherfordium has been produced atom by atom for research; there is no practical bulk use established for this short-lived element.", sourceIds: ["rsc-104"] },
  105: { headline: "A few atoms under study", body: "Dubnium exists only in tiny, short-lived quantities, so current work focuses on laboratory research rather than everyday applications.", sourceIds: ["rsc-105"] },
  106: { headline: "A new chemical measurement", body: "A 2026 study measured Sg(CO)6 bonding against tungsten's compound, refining knowledge of existing seaborgium rather than discovering a new element.", sourceIds: ["rsc-106", "nature-sg-bond", "gsi-sg-bond"] },
  107: { headline: "A superheavy research element", body: "Bohrium has no established everyday application; experiments study a few atoms to learn how very heavy nuclei and atoms behave.", sourceIds: ["rsc-107"] },
  108: { headline: "Chemistry studied atom by atom", body: "Hassium is produced only in minute amounts, so its known chemistry comes from specialized laboratory experiments rather than bulk samples.", sourceIds: ["rsc-108"] },
  109: { headline: "Fewer than ten atoms", body: "The RSC page describes meitnerium as having been made in fewer than ten atoms, leaving it a subject of laboratory research.", sourceIds: ["rsc-109"] },
  110: { headline: "A synthetic element", body: "Darmstadtium is man-made and only a few atoms have been created, so scientists investigate it through brief experimental traces.", sourceIds: ["rsc-110"] },
  111: { headline: "A handful of atoms", body: "Roentgenium has been produced only as a few atoms in research experiments, with no practical use established beyond scientific study.", sourceIds: ["rsc-111"] },
  112: { headline: "A metal with uncertain chemistry", body: "Only a few copernicium atoms have been made; researchers test its chemistry rather than assuming its behavior from its table position.", sourceIds: ["rsc-112"] },
  113: { headline: "Still under laboratory study", body: "Nihonium is a superheavy element studied atom by atom, so the table records its identity without claiming a bulk appearance or use.", sourceIds: ["rsc-113"] },
  114: { headline: "A few atoms at a time", body: "Flerovium is produced in nuclear reactions and studied in very small quantities, with no established everyday application.", sourceIds: ["rsc-114"] },
  115: { headline: "Research beyond the bulk scale", body: "Moscovium's observed atoms are too scarce and short-lived for ordinary material uses; experiments focus on how the nucleus behaves.", sourceIds: ["rsc-115"] },
  116: { headline: "A synthetic, short-lived element", body: "Livermorium does not occur naturally and has no established practical use, making controlled laboratory research its central context.", sourceIds: ["rsc-116"] },
  117: { headline: "A target for careful experiments", body: "Tennessine is produced one atom at a time in research, and its bulk physical properties remain unknown rather than safely inferred.", sourceIds: ["rsc-117"] },
  118: { headline: "The current table's last tile", body: "Oganesson is element 118, the highest recognized atomic number; research studies a few atoms, not a usable bulk sample.", sourceIds: ["rsc-118", "iupac"] },
};

export function gradeLearningAnswer(step: LearningStep, answer: string): boolean {
  return answer.trim() === step.correct;
}
