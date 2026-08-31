import { TestDefinition } from "../types";

// Akan Day-Name Quiz: Ghana's day-name personality tradition (kradin).
// Type quiz, 4 weekday-archetype axes. Respectful, folklore-framed.

const questions = [
  // Monday — Kwadwo/Adwoa, the peace-maker
  { id: "ak_m1", text: "Calming things down comes naturally; heat makes people say what they regret.", type: "likert" as const, axis: "monday", direction: 1 as const },
  { id: "ak_m2", text: "Friends call me gentle, but with a stubborn streak underneath.", type: "likert" as const, axis: "monday", direction: 1 as const },
  { id: "ak_m3", text: "I enjoy a good argument and start them sometimes.", type: "likert" as const, axis: "monday", direction: -1 as const },
  // Wednesday — Kwaku, the truth-teller
  { id: "ak_w1", text: "If something needs saying, I say it, even when it's uncomfortable.", type: "likert" as const, axis: "wednesday", direction: 1 as const },
  { id: "ak_w2", text: "People know my word is honest even when it's not convenient.", type: "likert" as const, axis: "wednesday", direction: 1 as const },
  { id: "ak_w3", text: "White lies keep groups running; I use them freely.", type: "likert" as const, axis: "wednesday", direction: -1 as const },
  // Friday — Kofi/Frida, the rover-builder
  { id: "ak_f1", text: "I'm always planning or starting something new.", type: "likert" as const, axis: "friday", direction: 1 as const },
  { id: "ak_f2", text: "Restlessness with routine drives half my best decisions.", type: "likert" as const, axis: "friday", direction: 1 as const },
  { id: "ak_f3", text: "Staying put and repeating myself suits me fine.", type: "likert" as const, axis: "friday", direction: -1 as const },
  // Saturday — Kwame/Ama, the born leader
  { id: "ak_s1", text: "When no one steps up, I end up in charge. It keeps happening.", type: "likert" as const, axis: "saturday", direction: 1 as const },
  { id: "ak_s2", text: "I take responsibility personally when things go wrong around me.", type: "likert" as const, axis: "saturday", direction: 1 as const },
  { id: "ak_s3", text: "Leading sounds exhausting; I'd rather support someone else's vision.", type: "likert" as const, axis: "saturday", direction: -1 as const },
];

export const akanDayName: TestDefinition = {
  slug: "akan-day-name",
  title: "Akan Day-Name Quiz",
  category: "character",
  description:
    "In Ghana's Akan tradition, your birth day gives you a soul name with its own character. Which day-name energy matches yours?",
  whatYoullLearn:
    "Your matching day-name archetype: Monday's peacemaker, Wednesday's truth-teller, Friday's builder-rover, or Saturday's leader.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public Akan naming traditions (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "monday", label: "Monday (Kwadwo/Adwoa)", lowLabel: "Low", highLabel: "High", description: "The gentle peace-maker." },
    { key: "wednesday", label: "Wednesday (Kwaku)", lowLabel: "Low", highLabel: "High", description: "The bold truth-teller." },
    { key: "friday", label: "Friday (Kofi/Friwa)", lowLabel: "Low", highLabel: "High", description: "The restless rover-builder." },
    { key: "saturday", label: "Saturday (Kwame/Ama)", lowLabel: "Low", highLabel: "High", description: "The natural leader." },
  ],
  terms: [
    {
      term: "Kradin",
      note: "'Soul name': in Akan culture (Ghana), children receive a name based on their birth weekday, believed to carry that day's character traits. Kwame, Kofi, Ama, and Adwoa are all kradin.",
    },
    {
      term: "Akan",
      note: "Ghana's largest ethnic group, whose day-name system is a living tradition; global celebrities visiting Ghana have been given Akan names in welcome ceremonies.",
    },
  ],
  typeMeta: {
    monday: {
      label: "Monday Energy: The Peacemaker",
      description:
        "Your kradin would start with 'Kwadwo' or 'Adwoa': calm on the surface, iron underneath. You end fights people thought were permanent. Watch-out: peacemakers absorb shrapnel. Your comfort matters in the treaty too.",
    },
    wednesday: {
      label: "Wednesday Energy: The Truth-Teller",
      description:
        "'Kwaku' energy: honest to a fault, allergic to pretense, occasionally the bearer of sentences nobody wanted but everyone needed. Watch-out: truth lands better with a spoonful of sugar. You're allowed seasoning.",
    },
    friday: {
      label: "Friday Energy: The Rover-Builder",
      description:
        "'Kofi' spirit: always mid-project, mid-move, or mid-plan. Restlessness is your engine and your compass. Watch-out: rovers leave beautiful unfinished things. Finish one fully this year.",
    },
    saturday: {
      label: "Saturday Energy: The Leader",
      description:
        "'Kwame' or 'Ama' presence: responsibility finds you and you carry it without drama. People follow competence. Watch-out: leaders eat last too often. Delegate like you trust people, because you should.",
    },
  },
  balanced: {
    label: "The Full Week",
    description:
      "Peace-maker, truth-teller, rover, leader: you'd need four birth days to hold all these energies, and somehow you do. In Akan terms, an unusually complete soul name.",
  },
  resultType: "bars",
  funFacts: [
    "Day-names double as instant conversation starters across West Africa; your name tells strangers what day you were born.",
    "Famous Kofi: UN Secretary-General Kofi Annan, whose name means Friday-born male.",
  ],
  disclaimer:
    "An affectionate quiz inspired by Akan naming traditions: cultural appreciation, not a claim about your actual soul name.",
};
