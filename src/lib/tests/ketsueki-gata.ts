import { TestDefinition } from "../types";

// Ketsueki-Gata (血液型性格診断): Japan's blood-type personality tradition,
// quiz-ified. You answer questions; we map you to the type whose STEREOTYPE
// fits your behavior. Entertainment only — no scientific basis, and we say so.

const questions = [
  // Type A — careful, considerate, anxious
  { id: "kg_a1", text: "I double-check things — locks, emails, replies — more than once.", type: "likert" as const, axis: "typeA", direction: 1 as const },
  { id: "kg_a2", text: "I notice when something might upset someone before they say it.", type: "likert" as const, axis: "typeA", direction: 1 as const },
  { id: "kg_a3", text: "Mess and last-minute chaos don't really bother me.", type: "likert" as const, axis: "typeA", direction: -1 as const },
  // Type B — free, creative, at their own pace
  { id: "kg_b1", text: "I do things at my own pace, even if it annoys the schedule.", type: "likert" as const, axis: "typeB", direction: 1 as const },
  { id: "kg_b2", text: "My interests jump around a lot, and I follow them happily.", type: "likert" as const, axis: "typeB", direction: 1 as const },
  { id: "kg_b3", text: "I feel uneasy breaking rules or going off-plan.", type: "likert" as const, axis: "typeB", direction: -1 as const },
  // Type O — easygoing, confident, stubborn core
  { id: "kg_o1", text: "People say I'm easy to be around and hard to shake.", type: "likert" as const, axis: "typeO", direction: 1 as const },
  { id: "kg_o2", text: "Once I've decided something, good luck changing my mind.", type: "likert" as const, axis: "typeO", direction: 1 as const },
  { id: "kg_o3", text: "Small setbacks ruin my whole day.", type: "likert" as const, axis: "typeO", direction: -1 as const },
  // Type AB — complex, cool-headed, unreadable
  { id: "kg_x1", text: "People can't easily guess what I'm thinking, and I like it that way.", type: "likert" as const, axis: "typeAB", direction: 1 as const },
  { id: "kg_x2", text: "I switch between social mode and total hermit mode with no warning.", type: "likert" as const, axis: "typeAB", direction: 1 as const },
  { id: "kg_x3", text: "I show my feelings openly almost all the time.", type: "likert" as const, axis: "typeAB", direction: -1 as const },
];

export const ketsuekiGata: TestDefinition = {
  slug: "ketsueki-gata",
  title: "Ketsueki-Gata Blood Type Test (血液型)",
  category: "personality",
  description:
    "Japan's famous blood-type personality system — but instead of your actual blood type, we test which type's personality you actually act like.",
  whatYoullLearn:
    "Which of the four blood-type personalities matches your behavior, what Japanese pop culture says about it, and why it's fun but not science.",
  timeMinutes: 3,
  itemCount: 12,
  license:
    "Original TypologyQuiz items inspired by the public-domain folk typology (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,


  axes: [
    { key: "typeA", label: "Type A (A型)", lowLabel: "Low", highLabel: "High", description: "Careful, considerate, perfectionist." },
    { key: "typeB", label: "Type B (B型)", lowLabel: "Low", highLabel: "High", description: "Free, curious, own-pace." },
    { key: "typeO", label: "Type O (O型)", lowLabel: "Low", highLabel: "High", description: "Easygoing, confident, stubborn core." },
    { key: "typeAB", label: "Type AB (AB型)", lowLabel: "Low", highLabel: "High", description: "Cool-headed, complex, unreadable." },
  ],
  terms: [
    {
      term: "血液型性格診断 (Ketsueki-gata seikaku shindan)",
      note: "'Blood-type personality diagnosis' — a folk typology in Japan that links A/B/O/AB blood types to personality. It shows up in dating profiles, morning TV, and manga. Scientists have studied it and found no real effect; Japan knows, and enjoys it anyway.",
    },
    {
      term: "Type AB mystique",
      note: "Only about 10% of Japanese people are AB, so the stereotype paints them as rare geniuses or charming weirdos — sometimes both in the same anime episode.",
    },
  ],
  typeMeta: {
    typeA: {
      label: "🅰️ Type A Energy",
      description:
        "The stereotype: organized, considerate, quietly anxious, secretly the person everyone relies on. You triple-check things and notice feelings before they're spoken. The flip side: your brain treats relaxation as a task. Schedule doing nothing. Genuinely schedule it.",
    },
    typeB: {
      label: "🅱️ Type B Energy",
      description:
        "The stereotype: creative, free-spirited, allergic to being told the pace. You follow curiosity down hallways other people didn't know existed. The flip side: deadlines see you coming. Pair your wander with one anchor commitment.",
    },
    typeO: {
      label: "🅾️ Type O Energy",
      description:
        "The stereotype: warm, resilient, impossible to rush, impossible to move once decided. You roll with almost everything, then plant your feet on the one thing that matters. The flip side: 'stubborn' is what your friends say. 'Principled,' you say. Same letters.",
    },
    typeAB: {
      label: "🆎 Type AB Energy",
      description:
        "The stereotype: cool-headed, a little mysterious, socially fluent but privately hermit. People find you fascinating because they can't file you. The flip side: even close friends get whiplash from your mode switches. Send one 'still alive' text per disappearing act.",
    },
  },
  balanced: {
    label: "🩸 The Universal Donor Personality",
    description:
      "You match no single stereotype cleanly — a bit of the planner, a bit of the wanderer, unreadable at will. In ketsueki-gata terms, basically a walking transfusion. Adaptability is the superpower; identity crisis is the tax.",
  },
  resultType: "bars",
  funFacts: [
    "In Japan, blood type appears in dating profiles, job-hunting advice, and anime character sheets. Studio Ghibli lore says Miyazaki once sorted staff by it.",
    "Studies comparing blood type and personality keep finding nothing — which is exactly why this quiz tests your behavior instead of asking your blood type.",
    "Ask any Japanese friend their type; they know it instantly, the way Americans know their zodiac sign.",
  ],
  disclaimer:
    "Blood type has no proven link to personality. This quiz maps you to the stereotypes for fun — it is not science, medicine, or fate.",
};
