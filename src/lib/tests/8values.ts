import { TestDefinition } from "../types";

// 8values - Political Values Test
// Forked from github.com/8values/8values.github.io (MIT licensed)
// Questions adapted to 5-point Likert, one per screen format

const questions = [
  // ── Economic axis (Markets vs Equality) ──
  { id: "8v_e01", text: "Free markets are the best way to distribute goods and services.", type: "likert" as const, axis: "economic", direction: 1 as const },
  { id: "8v_e02", text: "The government should ensure that everyone has a basic standard of living.", type: "likert" as const, axis: "economic", direction: -1 as const },
  { id: "8v_e03", text: "Corporations should be allowed to operate with minimal government regulation.", type: "likert" as const, axis: "economic", direction: 1 as const },
  { id: "8v_e04", text: "Wealth inequality is a serious problem that needs to be addressed.", type: "likert" as const, axis: "economic", direction: -1 as const },
  { id: "8v_e05", text: "High taxes on the wealthy are necessary to fund public services.", type: "likert" as const, axis: "economic", direction: -1 as const },
  { id: "8v_e06", text: "Labor unions do more harm than good.", type: "likert" as const, axis: "economic", direction: 1 as const },
  { id: "8v_e07", text: "Privatization of public services usually leads to better outcomes.", type: "likert" as const, axis: "economic", direction: 1 as const },
  { id: "8v_e08", text: "The minimum wage should be raised substantially.", type: "likert" as const, axis: "economic", direction: -1 as const },
  { id: "8v_e09", text: "Government bailouts of failing industries are a bad idea.", type: "likert" as const, axis: "economic", direction: 1 as const },
  { id: "8v_e10", text: "Universal basic income would be a positive development.", type: "likert" as const, axis: "economic", direction: -1 as const },
  { id: "8v_e11", text: "Economic growth should be prioritized over income equality.", type: "likert" as const, axis: "economic", direction: 1 as const },
  { id: "8v_e12", text: "The government should provide free healthcare for all citizens.", type: "likert" as const, axis: "economic", direction: -1 as const },
  { id: "8v_e13", text: "Inheritance taxes are unfair.", type: "likert" as const, axis: "economic", direction: 1 as const },
  { id: "8v_e14", text: "Workers should have more ownership in the companies they work for.", type: "likert" as const, axis: "economic", direction: -1 as const },

  // ── Diplomatic axis (Nationalism vs Globalism) ──
  { id: "8v_d01", text: "My country should prioritize its own citizens over foreign aid.", type: "likert" as const, axis: "diplomatic", direction: 1 as const },
  { id: "8v_d02", text: "International cooperation is essential for solving global problems.", type: "likert" as const, axis: "diplomatic", direction: -1 as const },
  { id: "8v_d03", text: "Immigration should be restricted to protect national identity.", type: "likert" as const, axis: "diplomatic", direction: 1 as const },
  { id: "8v_d04", text: "Borders should be more open than they currently are.", type: "likert" as const, axis: "diplomatic", direction: -1 as const },
  { id: "8v_d05", text: "My country should not intervene in the affairs of other nations.", type: "likert" as const, axis: "diplomatic", direction: 1 as const },
  { id: "8v_d06", text: "Free trade agreements benefit everyone involved.", type: "likert" as const, axis: "diplomatic", direction: -1 as const },
  { id: "8v_d07", text: "Patriotism is an important virtue.", type: "likert" as const, axis: "diplomatic", direction: 1 as const },
  { id: "8v_d08", text: "We have a moral obligation to accept refugees.", type: "likert" as const, axis: "diplomatic", direction: -1 as const },
  { id: "8v_d09", text: "My country's culture is superior to most others.", type: "likert" as const, axis: "diplomatic", direction: 1 as const },
  { id: "8v_d10", text: "Multinational organizations like the UN should have more authority.", type: "likert" as const, axis: "diplomatic", direction: -1 as const },
  { id: "8v_d11", text: "Military spending is a necessary and justified expense.", type: "likert" as const, axis: "diplomatic", direction: 1 as const },
  { id: "8v_d12", text: "Climate change requires binding international agreements.", type: "likert" as const, axis: "diplomatic", direction: -1 as const },
  { id: "8v_d13", text: "My country should withdraw from international trade deals.", type: "likert" as const, axis: "diplomatic", direction: 1 as const },
  { id: "8v_d14", text: "Foreign cultures enrich our society.", type: "likert" as const, axis: "diplomatic", direction: -1 as const },

  // ── Civil axis (Authoritarian vs Libertarian) ──
  { id: "8v_c01", text: "The government should have the power to monitor citizens for security reasons.", type: "likert" as const, axis: "civil", direction: 1 as const },
  { id: "8v_c02", text: "People should be free to make their own choices, even if they are harmful.", type: "likert" as const, axis: "civil", direction: -1 as const },
  { id: "8v_c03", text: "Strong authority figures are needed to maintain social order.", type: "likert" as const, axis: "civil", direction: 1 as const },
  { id: "8v_c04", text: "Government surveillance is a violation of privacy rights.", type: "likert" as const, axis: "civil", direction: -1 as const },
  { id: "8v_c05", text: "Hate speech should be legally restricted.", type: "likert" as const, axis: "civil", direction: 1 as const },
  { id: "8v_c06", text: "Drug use should be decriminalized.", type: "likert" as const, axis: "civil", direction: -1 as const },
  { id: "8v_c07", text: "The death penalty is a just punishment for serious crimes.", type: "likert" as const, axis: "civil", direction: 1 as const },
  { id: "8v_c08", text: "Individuals should have the right to own firearms for self-defense.", type: "likert" as const, axis: "civil", direction: -1 as const },
  { id: "8v_c09", text: "The government should promote traditional family values.", type: "likert" as const, axis: "civil", direction: 1 as const },
  { id: "8v_c10", text: "People should be free to express unpopular opinions without consequences.", type: "likert" as const, axis: "civil", direction: -1 as const },
  { id: "8v_c11", text: "National security justifies limiting some personal freedoms.", type: "likert" as const, axis: "civil", direction: 1 as const },
  { id: "8v_c12", text: "Sex work between consenting adults should be legal.", type: "likert" as const, axis: "civil", direction: -1 as const },
  { id: "8v_c13", text: "Mandatory national service would strengthen our country.", type: "likert" as const, axis: "civil", direction: 1 as const },
  { id: "8v_c14", text: "The right to protest should never be restricted.", type: "likert" as const, axis: "civil", direction: -1 as const },

  // ── Societal axis (Tradition vs Progress) ──
  { id: "8v_s01", text: "Traditional values are the foundation of a healthy society.", type: "likert" as const, axis: "societal", direction: 1 as const },
  { id: "8v_s02", text: "Society should embrace change and new ideas.", type: "likert" as const, axis: "societal", direction: -1 as const },
  { id: "8v_s03", text: "Religion plays an important positive role in society.", type: "likert" as const, axis: "societal", direction: 1 as const },
  { id: "8v_s04", text: "LGBTQ+ rights should be fully protected by law.", type: "likert" as const, axis: "societal", direction: -1 as const },
  { id: "8v_s05", text: "Children should be taught to respect authority.", type: "likert" as const, axis: "societal", direction: 1 as const },
  { id: "8v_s06", text: "Gender roles are outdated and should be challenged.", type: "likert" as const, axis: "societal", direction: -1 as const },
  { id: "8v_s07", text: "Schools should focus on teaching practical skills rather than critical theory.", type: "likert" as const, axis: "societal", direction: 1 as const },
  { id: "8v_s08", text: "Art should be allowed to challenge social norms without censorship.", type: "likert" as const, axis: "societal", direction: -1 as const },
  { id: "8v_s09", text: "The nuclear family is the ideal family structure.", type: "likert" as const, axis: "societal", direction: 1 as const },
  { id: "8v_s10", text: "Abortion should be legal and accessible.", type: "likert" as const, axis: "societal", direction: -1 as const },
  { id: "8v_s11", text: "Criminals should face harsher punishments.", type: "likert" as const, axis: "societal", direction: 1 as const },
  { id: "8v_s12", text: "Rehabilitation is more important than punishment in the justice system.", type: "likert" as const, axis: "societal", direction: -1 as const },
  { id: "8v_s13", text: "Cultural traditions should be preserved even when they conflict with modern values.", type: "likert" as const, axis: "societal", direction: 1 as const },
  { id: "8v_s14", text: "Science and technology will solve most of humanity's problems.", type: "likert" as const, axis: "societal", direction: -1 as const },
];

export const eightValues: TestDefinition = {
  slug: "8values",
  title: "8values Political Test",
  category: "values",
  description:
    "A political values test that maps your views across four independent axes: economic, diplomatic, civil, and societal. Based on the open-source 8values project.",
  whatYoullLearn:
    "Where you stand on the political spectrum across four dimensions - and which ideology is your closest match.",
  timeMinutes: 8,
  itemCount: 56,
  license: "MIT - adapted from github.com/8values/8values.github.io",
  sourceUrl: "https://github.com/8values/8values.github.io",
  questions,
  axes: [
    {
      key: "economic",
      label: "Economic",
      compassAxis: "x",
      lowLabel: "Equality",
      highLabel: "Markets",
      description:
        "Measures your views on economic regulation, redistribution, and the role of government in the economy. Higher scores favor free markets; lower scores favor equality and intervention.",
    },
    {
      key: "diplomatic",
      label: "Diplomatic",
      compassAxis: "y",
      lowLabel: "Globalism",
      highLabel: "Nationalism",
      description:
        "Measures your views on international cooperation, trade, and foreign policy. Higher scores favor national sovereignty; lower scores favor global cooperation.",
    },
    {
      key: "civil",
      label: "Civil",
      compassAxis: "x",
      lowLabel: "Libertarian",
      highLabel: "Authoritarian",
      description:
        "Measures your views on personal freedoms, government authority, and civil liberties. Higher scores favor authority and order; lower scores favor individual liberty.",
    },
    {
      key: "societal",
      label: "Societal",
      compassAxis: "y",
      lowLabel: "Progress",
      highLabel: "Tradition",
      description:
        "Measures your views on social change, tradition, and cultural values. Higher scores favor tradition; lower scores favor progress and change.",
    },
  ],
  resultType: "compass",
  funFacts: [
    "The 8values test was created in 2017 as an open-source alternative to existing political quizzes.",
    "Unlike many political tests, 8values separates economic and social views into independent axes - you can be economically left-wing but socially conservative.",
    "The four-axis model captures political views that a simple left-right spectrum misses entirely.",
  ],
  disclaimer:
    "This is a self-report tool based on the open-source 8values project. It measures political attitudes, not objective truth. No political test can fully capture the complexity of your beliefs.",
  norms: {
    economic: { mean: 50, sd: 25 },
    diplomatic: { mean: 50, sd: 25 },
    civil: { mean: 50, sd: 25 },
    societal: { mean: 50, sd: 25 },
  },
};

// Scoring: each question maps to 0-100 on its axis
// Response 1-5 (Strongly Disagree to Strongly Agree) -> 0-100
// direction=1: agree=higher, direction=-1: agree=lower
export function score8Values(answers: Record<string, number>): Record<string, number> {
  const axisScores: Record<string, { sum: number; count: number }> = {
    economic: { sum: 0, count: 0 },
    diplomatic: { sum: 0, count: 0 },
    civil: { sum: 0, count: 0 },
    societal: { sum: 0, count: 0 },
  };

  for (const q of questions) {
    const answer = answers[q.id];
    if (answer === undefined) continue;
    let score = (answer - 1) * 25;
    if (q.direction === -1) {
      score = 100 - score;
    }
    axisScores[q.axis].sum += score;
    axisScores[q.axis].count++;
  }

  const result: Record<string, number> = {};
  for (const [key, val] of Object.entries(axisScores)) {
    result[key] = val.count > 0 ? Math.round(val.sum / val.count) : 50;
  }
  return result;
}

// Map scores to closest ideology label
export function getClosestIdeology(scores: Record<string, number>): {
  label: string;
  description: string;
} {
  const e = scores.economic ?? 50;
  const d = scores.diplomatic ?? 50;
  const c = scores.civil ?? 50;
  const s = scores.societal ?? 50;

  const econLeft = e < 50;
  const diploGlobal = d < 50;
  const civilLib = c < 50;
  const socProg = s < 50;

  if (econLeft && diploGlobal && civilLib && socProg)
    return { label: "Libertarian Socialist", description: "You favor economic equality combined with strong personal freedoms and a global outlook." };
  if (econLeft && diploGlobal && civilLib && !socProg)
    return { label: "Social Democrat", description: "You support economic intervention and personal freedoms, with moderate traditional values." };
  if (econLeft && diploGlobal && !civilLib && socProg)
    return { label: "State Socialist", description: "You favor economic equality and social progress, but support a strong state role in maintaining order." };
  if (econLeft && diploGlobal && !civilLib && !socProg)
    return { label: "Authoritarian Left", description: "You support economic equality and traditional values, with a strong state to enforce both." };
  if (econLeft && !diploGlobal && civilLib && socProg)
    return { label: "Left-Wing Populist", description: "You favor economic equality and personal liberty, but prioritize national interests over global cooperation." };
  if (econLeft && !diploGlobal && civilLib && !socProg)
    return { label: "Communitarian", description: "You support economic equality and tradition, with personal freedoms balanced by community values." };
  if (econLeft && !diploGlobal && !civilLib && socProg)
    return { label: "National Bolshevik", description: "You combine far-left economics with nationalist and authoritarian social views." };
  if (econLeft && !diploGlobal && !civilLib && !socProg)
    return { label: "Paternalistic Conservative", description: "You favor economic intervention and traditional values, with a strong state and national focus." };
  if (!econLeft && diploGlobal && civilLib && socProg)
    return { label: "Libertarian", description: "You favor free markets, personal liberty, global cooperation, and social progress." };
  if (!econLeft && diploGlobal && civilLib && !socProg)
    return { label: "Classical Liberal", description: "You support free markets and personal freedoms, with moderate traditional values and global engagement." };
  if (!econLeft && diploGlobal && !civilLib && socProg)
    return { label: "Neoliberal", description: "You favor free markets and social progress, with support for strong institutions and global governance." };
  if (!econLeft && diploGlobal && !civilLib && !socProg)
    return { label: "Conservative Globalist", description: "You support free markets and traditional values, with a strong state engaged internationally." };
  if (!econLeft && !diploGlobal && civilLib && socProg)
    return { label: "Right-Libertarian", description: "You favor free markets, personal liberty, and social progress, but prioritize national sovereignty." };
  if (!econLeft && !diploGlobal && civilLib && !socProg)
    return { label: "Paleolibertarian", description: "You support free markets and personal freedoms, with traditional values and national sovereignty." };
  if (!econLeft && !diploGlobal && !civilLib && socProg)
    return { label: "Right-Wing Populist", description: "You favor free markets with nationalist policies, strong authority, and moderate social progress." };
  if (!econLeft && !diploGlobal && !civilLib && !socProg)
    return { label: "Traditionalist Nationalist", description: "You support free markets, traditional values, strong authority, and national sovereignty." };

  return { label: "Centrist", description: "Your views don't strongly align with any single quadrant - you may hold a mix of positions across the spectrum." };
}