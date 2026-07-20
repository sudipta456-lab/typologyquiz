import { TestDefinition } from "../types";

// Which Enneagram Type Are You (Lite) — 9 types, one axis each (NEW).
// Type quiz: ipsative pick-top with flat-profile -> "The Blend".
// Each axis gets 2 forward + 1 reverse item so straight-lining -> balanced, not type-1-by-default.
// Original items, loosely inspired by the Enneagram framework (self-reflection only).

const questions = [
  // Type 1 — Reformer: principled, wants things right, self-disciplined
  { id: "en_t1a", text: "I notice mistakes and details other people breeze right past.", type: "likert" as const, axis: "type1", direction: 1 as const },
  { id: "en_t1b", text: "Doing things the right way matters to me, even when nobody's checking.", type: "likert" as const, axis: "type1", direction: 1 as const },
  { id: "en_t1c", text: "Good enough is usually good enough for me — I don't sweat the small stuff.", type: "likert" as const, axis: "type1", direction: -1 as const },

  // Type 2 — Helper: warm, generous, wants to be needed
  { id: "en_t2a", text: "I can usually tell what someone needs before they say it.", type: "likert" as const, axis: "type2", direction: 1 as const },
  { id: "en_t2b", text: "Being there for people is a big part of who I am.", type: "likert" as const, axis: "type2", direction: 1 as const },
  { id: "en_t2c", text: "I focus on my own stuff and let other people handle theirs.", type: "likert" as const, axis: "type2", direction: -1 as const },

  // Type 3 — Achiever: driven, image-aware, wants to succeed
  { id: "en_t3a", text: "I set goals and genuinely push myself to hit them.", type: "likert" as const, axis: "type3", direction: 1 as const },
  { id: "en_t3b", text: "I care about coming across as capable and put-together.", type: "likert" as const, axis: "type3", direction: 1 as const },
  { id: "en_t3c", text: "Winning or looking successful doesn't really motivate me.", type: "likert" as const, axis: "type3", direction: -1 as const },

  // Type 4 — Individualist: deep-feeling, wants to be authentic/unique
  { id: "en_t4a", text: "My feelings run deep, and I'd rather be real than fit in.", type: "likert" as const, axis: "type4", direction: 1 as const },
  { id: "en_t4b", text: "I've always felt a little different from everyone around me.", type: "likert" as const, axis: "type4", direction: 1 as const },
  { id: "en_t4c", text: "I'm pretty even-keeled and rarely feel like the odd one out.", type: "likert" as const, axis: "type4", direction: -1 as const },

  // Type 5 — Investigator: curious, private, wants to understand
  { id: "en_t5a", text: "I love going deep on a topic until I really understand how it works.", type: "likert" as const, axis: "type5", direction: 1 as const },
  { id: "en_t5b", text: "I need plenty of alone time to recharge and think.", type: "likert" as const, axis: "type5", direction: 1 as const },
  { id: "en_t5c", text: "I'd rather jump in and act than sit back and analyze.", type: "likert" as const, axis: "type5", direction: -1 as const },

  // Type 6 — Loyalist: loyal, prepares for problems, wants security
  { id: "en_t6a", text: "I like to think through what could go wrong so I'm ready for it.", type: "likert" as const, axis: "type6", direction: 1 as const },
  { id: "en_t6b", text: "Once I trust people, I'm loyal to them for the long haul.", type: "likert" as const, axis: "type6", direction: 1 as const },
  { id: "en_t6c", text: "I rarely worry about what might go wrong down the line.", type: "likert" as const, axis: "type6", direction: -1 as const },

  // Type 7 — Enthusiast: fun, spontaneous, wants options/adventure
  { id: "en_t7a", text: "I'm always chasing the next fun plan or new experience.", type: "likert" as const, axis: "type7", direction: 1 as const },
  { id: "en_t7b", text: "I like keeping my options open instead of locking things down.", type: "likert" as const, axis: "type7", direction: 1 as const },
  { id: "en_t7c", text: "I'm happy sticking to a steady routine without much variety.", type: "likert" as const, axis: "type7", direction: -1 as const },

  // Type 8 — Challenger: bold, protective, wants control/justice
  { id: "en_t8a", text: "I'll speak up and take charge when something isn't fair.", type: "likert" as const, axis: "type8", direction: 1 as const },
  { id: "en_t8b", text: "I stand up for people who can't stand up for themselves.", type: "likert" as const, axis: "type8", direction: 1 as const },
  { id: "en_t8c", text: "I'd rather go along with things than take control of a situation.", type: "likert" as const, axis: "type8", direction: -1 as const },

  // Type 9 — Peacemaker: easygoing, wants harmony, avoids conflict
  { id: "en_t9a", text: "I go out of my way to keep the peace and avoid drama.", type: "likert" as const, axis: "type9", direction: 1 as const },
  { id: "en_t9b", text: "I'm easygoing and can usually see everyone's side of things.", type: "likert" as const, axis: "type9", direction: 1 as const },
  { id: "en_t9c", text: "I don't mind conflict — I'll dive right into a disagreement.", type: "likert" as const, axis: "type9", direction: -1 as const },
];

export const enneagramLite: TestDefinition = {
  slug: "enneagram-lite",
  title: "Which Enneagram Type Are You (Lite)",
  category: "personality",
  description:
    "Reformer, Helper, Achiever, or one of six more? Get a quick read on which Enneagram type you lean toward.",
  whatYoullLearn:
    "The Enneagram type you tilt toward most, the strength that comes with it, and the gentle watch-out to keep in mind.",
  timeMinutes: 5,
  itemCount: 27,
  license: "Original TypologyQuiz items, inspired by the Enneagram framework (self-reflection only).",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "type1", label: "Reformer", lowLabel: "Low", highLabel: "High", description: "Principled and wants things done right." },
    { key: "type2", label: "Helper", lowLabel: "Low", highLabel: "High", description: "Warm, generous, wants to be needed." },
    { key: "type3", label: "Achiever", lowLabel: "Low", highLabel: "High", description: "Driven, image-aware, wants to succeed." },
    { key: "type4", label: "Individualist", lowLabel: "Low", highLabel: "High", description: "Deep-feeling, wants to be authentic." },
    { key: "type5", label: "Investigator", lowLabel: "Low", highLabel: "High", description: "Curious, private, wants to understand." },
    { key: "type6", label: "Loyalist", lowLabel: "Low", highLabel: "High", description: "Loyal, prepared, wants security." },
    { key: "type7", label: "Enthusiast", lowLabel: "Low", highLabel: "High", description: "Fun, spontaneous, wants options." },
    { key: "type8", label: "Challenger", lowLabel: "Low", highLabel: "High", description: "Bold, protective, wants justice." },
    { key: "type9", label: "Peacemaker", lowLabel: "Low", highLabel: "High", description: "Easygoing, wants harmony." },
  ],
  typeMeta: {
    type1: {
      label: "Type 1 · The Reformer",
      description:
        "You've got a built-in sense of how things should be, and you hold yourself to it. Strength: principled, reliable, quietly improving everything you touch. Watch-out: that inner critic can be harsh — 'good enough' is allowed to be good enough sometimes.",
    },
    type2: {
      label: "Type 2 · The Helper",
      description:
        "You read people well and show up for them without being asked. Strength: warm, generous, the friend everyone leans on. Watch-out: pour into others so much you forget your own needs matter just as much.",
    },
    type3: {
      label: "Type 3 · The Achiever",
      description:
        "You set your sights on something and go get it, image and all. Strength: driven, adaptable, gets things done. Watch-out: you're worth more than your wins — take care that the goals don't run the whole show.",
    },
    type4: {
      label: "Type 4 · The Individualist",
      description:
        "You feel things deeply and would rather be real than blend in. Strength: creative, authentic, emotionally honest. Watch-out: leaning into 'I'm different' can tip into feeling left out — you belong more than it seems.",
    },
    type5: {
      label: "Type 5 · The Investigator",
      description:
        "You go deep, protect your energy, and love truly understanding things. Strength: insightful, independent, calm under pressure. Watch-out: don't retreat so far into your head that people can't reach you.",
    },
    type6: {
      label: "Type 6 · The Loyalist",
      description:
        "You plan for what could go wrong and stay fiercely loyal to your people. Strength: prepared, trustworthy, a great friend in a crisis. Watch-out: not every worst-case scenario needs rehearsing — you can trust yourself more than you think.",
    },
    type7: {
      label: "Type 7 · The Enthusiast",
      description:
        "You chase fun, new experiences, and keep your options wide open. Strength: upbeat, spontaneous, brings the energy. Watch-out: staying with one thing (or one hard feeling) can be worth more than the next shiny plan.",
    },
    type8: {
      label: "Type 8 · The Challenger",
      description:
        "You're bold, direct, and quick to protect people and stand up for what's fair. Strength: strong, honest, a natural protector. Watch-out: not every moment is a battle — softness and trust are strengths too.",
    },
    type9: {
      label: "Type 9 · The Peacemaker",
      description:
        "You keep things calm, see every side, and are easy to be around. Strength: accepting, steady, a genuine peacemaker. Watch-out: keeping the peace shouldn't mean going quiet about what you actually want.",
    },
  },
  balanced: {
    label: "The Blend",
    description:
      "You don't map cleanly to one type — you're a mix of several, which is completely normal for a quick quiz like this. Real Enneagram types show up over time, not in a handful of questions.",
  },
  resultType: "radar",
  funFacts: [
    "The Enneagram sorts people into nine types arranged in a circle, each with its own core motivation — what you want, deep down.",
    "It isn't a scientifically validated personality test — it's a framework for self-reflection, so hold your result lightly and use it to think, not to box yourself in.",
    "Compare with friends — Enneagram fans love figuring out how a Type 8 and a Type 9, or a Helper and an Achiever, click (or clash).",
  ],
  disclaimer:
    "A quick vibe check on which Enneagram type you tilt toward, not a final verdict. Pinning down your real type takes more than a short quiz — treat this as a starting point for reflection.",
};
