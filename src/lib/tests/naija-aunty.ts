import { TestDefinition } from "../types";

// Naija Aunty Test: Nigeria's beloved meme archetypes.
// Type quiz, 4 axes x 3 items. Affectionate, meme-native.

const questions = [
  // Church aunty — prayer warrior energy
  { id: "na_c1", text: "'I will pray for you' is something I say with full sincerity and slight menace.", type: "likert" as const, axis: "church", direction: 1 as const },
  { id: "na_c2", text: "I have opinions about everyone's life choices and share them lovingly.", type: "likert" as const, axis: "church", direction: 1 as const },
  { id: "na_c3", text: "Unsolicited advice makes me uncomfortable to give or receive.", type: "likert" as const, axis: "church", direction: -1 as const },
  // Business matriarch
  { id: "na_b1", text: "I always have a side hustle, a plan, or an idea generating somewhere.", type: "likert" as const, axis: "matriarch", direction: 1 as const },
  { id: "na_b2", text: "I can price-negotiate anything down to the last naira.", type: "likert" as const, axis: "matriarch", direction: 1 as const },
  { id: "na_b3", text: "Money talk stresses me out; I avoid budgets entirely.", type: "likert" as const, axis: "matriarch", direction: -1 as const },
  // Over-preparer
  { id: "na_o1", text: "Guests leaving hungry is a personal failure I refuse to experience.", type: "likert" as const, axis: "preparer", direction: 1 as const },
  { id: "na_o2", text: "I bring extra food, extra clothes, extra everything — 'just in case' is my motto.", type: "likert" as const, axis: "preparer", direction: 1 as const },
  { id: "na_o3", text: "Travel light is my lifestyle; excess luggage is for amateurs.", type: "likert" as const, axis: "preparer", direction: -1 as const },
  // Loud truth-teller
  { id: "na_l1", text: "If the jollof is bad, everyone at the table hears about it.", type: "likert" as const, axis: "truthteller", direction: 1 as const },
  { id: "na_l2", text: "My volume rises with my conviction; it's a package deal.", type: "likert" as const, axis: "truthteller", direction: 1 as const },
  { id: "na_l3", text: "I keep disagreements private and my voice level low.", type: "likert" as const, axis: "truthteller", direction: -1 as const },
];

export const naijaAunty: TestDefinition = {
  slug: "naija-aunty",
  title: "Naija Aunty / Uncle Test",
  category: "character",
  description:
    "Nigerian meme culture's greatest gift: the archetypes. Church Aunty, Business Matriarch, Over-Preparer, Loud Truth-Teller. Which one raised you — or are you becoming one?",
  whatYoullLearn:
    "Your Naija archetype, its most iconic line, and why the group chat can't survive without you.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public Nigerian meme culture (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "church", label: "Church Aunty/Uncle", lowLabel: "Low", highLabel: "High", description: "Prayer, opinions, love — in that order." },
    { key: "matriarch", label: "Business Matriarch", lowLabel: "Low", highLabel: "High", description: "Always has a hustle and a price." },
    { key: "preparer", label: "Over-Preparer", lowLabel: "Low", highLabel: "High", description: "'Just in case' as life philosophy." },
    { key: "truthteller", label: "Loud Truth-Teller", lowLabel: "Low", highLabel: "High", description: "Volume included at no extra cost." },
  ],
  terms: [
    {
      term: "Naija",
      note: "Affectionate slang for Nigeria and its culture — home of arguably Africa's most influential meme economy.",
    },
    {
      term: "Aunty / Uncle",
      note: "In Nigerian (and wider West African) culture, these honorifics apply to any elder-adjacent adult, and each comes with a legendary personality type the internet loves to catalog.",
    },
  ],
  typeMeta: {
    church: {
      label: "⛪ The Church Aunty/Uncle",
      description:
        "You know everyone's business and have a prayer point ready for each item. Your care is real; your delivery is nuclear. Iconic line: 'I'm not saying anything o... but I saw it.' Watch-out: advice lands better when requested. Occasionally wait.",
    },
    matriarch: {
      label: "💼 The Business Matriarch/Patriarch",
      description:
        "Multiple streams, zero idle time, prices memorized. You could sell water to a river and make profit. Iconic line: 'Is that how they're selling it? Bring it, I know somewhere.' Watch-out: rest is also an investment.",
    },
    preparer: {
      label: "🥘 The Over-Preparer",
      description:
        "You cook for twelve when four are coming, 'because what if'. Your bag contains solutions to problems that don't exist yet — until they do, and you're the hero. Iconic line: 'Take some home now.' Watch-out: your own cup counts as a guest list.",
    },
    truthteller: {
      label: "📢 The Loud Truth-Teller",
      description:
        "Diplomacy is expensive; you deal in honesty at full volume. Every gathering needs one person who says the thing. Iconic line: 'Me, I will say my own.' Watch-out: truth with volume control reaches more people, not fewer.",
    },
  },
  balanced: {
    label: "🎊 The Family Gathering MVP",
    description:
      "A little prayer, a little business, extra food packed, honest words spoken. You're basically the whole reunion in one person. Nigeria would like a word about merchandising you.",
  },
  resultType: "bars",
  funFacts: [
    "Nigerian Twitter/X is one of the funniest places on the internet by common consent — the archetypes here are its cast.",
    "The over-preparer's 'take some home' instinct is hospitality culture so deep it predates the memes.",
  ],
  disclaimer:
    "An affectionate quiz built on beloved Nigerian meme archetypes — celebration, not stereotype enforcement.",
};
