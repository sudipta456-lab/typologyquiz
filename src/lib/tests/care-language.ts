import { TestDefinition } from "../types";

// How You Show You Care — 5 platonic "care languages" (NEW).
// Type quiz: ipsative pick-top with flat-profile -> "The Mix".
// Each axis mixes forward + reverse items so straight-lining -> balanced.
// Platonic reframe of the classic love-languages idea (friends & family).

const questions = [
  // Words — hype-ups, encouragement, saying it out loud
  { id: "cl_wo1", text: "When a friend does something great, I say it out loud right away.", type: "likert" as const, axis: "words", direction: 1 as const },
  { id: "cl_wo2", text: "I'm the one dropping hype comments and encouragement in the group chat.", type: "likert" as const, axis: "words", direction: 1 as const },
  { id: "cl_wo3", text: "Telling people I appreciate them comes easily to me.", type: "likert" as const, axis: "words", direction: 1 as const },
  { id: "cl_wo4", text: "I feel awkward saying nice things out loud, so I mostly don't.", type: "likert" as const, axis: "words", direction: -1 as const },

  // Time — showing up, hanging out, undivided attention
  { id: "cl_ti1", text: "I show I care by clearing my schedule to actually hang out.", type: "likert" as const, axis: "time", direction: 1 as const },
  { id: "cl_ti2", text: "When a friend's talking, I put my phone down and fully tune in.", type: "likert" as const, axis: "time", direction: 1 as const },
  { id: "cl_ti3", text: "Just spending unhurried time together is my main way of caring.", type: "likert" as const, axis: "time", direction: 1 as const },
  { id: "cl_ti4", text: "I'd rather send a quick text than block out time to be together.", type: "likert" as const, axis: "time", direction: -1 as const },

  // Acts — doing helpful things, favors
  { id: "cl_ac1", text: "I show I care by actually doing something useful for someone.", type: "likert" as const, axis: "acts", direction: 1 as const },
  { id: "cl_ac2", text: "If a friend's overwhelmed, I jump in and handle a task for them.", type: "likert" as const, axis: "acts", direction: 1 as const },
  { id: "cl_ac3", text: "Doing a favor feels more real to me than saying nice words.", type: "likert" as const, axis: "acts", direction: 1 as const },
  { id: "cl_ac4", text: "I rarely think to lighten someone's load by doing a chore for them.", type: "likert" as const, axis: "acts", direction: -1 as const },

  // Gifts — little somethings, memes, snacks that made you think of them
  { id: "cl_gi1", text: "I send memes or links the second they remind me of a friend.", type: "likert" as const, axis: "gifts", direction: 1 as const },
  { id: "cl_gi2", text: "I'll grab a snack or little something just because it's so them.", type: "likert" as const, axis: "gifts", direction: 1 as const },
  { id: "cl_gi3", text: "A small 'saw this and thought of you' gift is how I show I care.", type: "likert" as const, axis: "gifts", direction: 1 as const },
  { id: "cl_gi4", text: "Picking out little somethings for people isn't really my move.", type: "likert" as const, axis: "gifts", direction: -1 as const },

  // Presence — hugs, sitting close, physical comfort (platonic/family)
  { id: "cl_pr1", text: "A hug or a shoulder-bump is my go-to way of saying 'I've got you.'", type: "likert" as const, axis: "presence", direction: 1 as const },
  { id: "cl_pr2", text: "When a friend's down, I sit close so they don't feel alone.", type: "likert" as const, axis: "presence", direction: 1 as const },
  { id: "cl_pr3", text: "Being physically there — same couch, same room — is how I comfort people.", type: "likert" as const, axis: "presence", direction: 1 as const },
  { id: "cl_pr4", text: "I keep my distance rather than offer a hug, even to close friends.", type: "likert" as const, axis: "presence", direction: -1 as const },
];

export const careLanguage: TestDefinition = {
  slug: "care-language",
  title: "How You Show You Care",
  category: "character",
  description:
    "Hype words, quality time, helpful favors, little gifts, or just being there — how do you actually show people you care?",
  whatYoullLearn:
    "Your main way of showing friends and family you care, what makes it land, and the small blind spot that comes with it.",
  timeMinutes: 4,
  itemCount: 20,
  license: "Original TypologyQuiz items, inspired by the love-languages idea reframed for friendship (self-reflection only).",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "words", label: "Words", lowLabel: "Low", highLabel: "High", description: "Hype-ups, encouragement, saying it out loud." },
    { key: "time", label: "Time", lowLabel: "Low", highLabel: "High", description: "Showing up and giving undivided attention." },
    { key: "acts", label: "Acts", lowLabel: "Low", highLabel: "High", description: "Doing helpful things and favors." },
    { key: "gifts", label: "Gifts", lowLabel: "Low", highLabel: "High", description: "Little somethings, memes, and snacks that fit them." },
    { key: "presence", label: "Presence", lowLabel: "Low", highLabel: "High", description: "Hugs, sitting close, being physically there." },
  ],
  typeMeta: {
    words: {
      label: "The Hype-Speaker",
      description:
        "You show care by saying it — encouragement, praise, and hype delivered out loud. Strength: people around you feel genuinely seen and backed. Watch-out: some friends trust actions more than words, so let a few of yours show too.",
    },
    time: {
      label: "The Time-Giver",
      description:
        "You show care by showing up — undivided attention and unhurried hangouts. Strength: people feel like a real priority to you. Watch-out: quieter or busier friends may care just as much with less time, so don't read distance as coldness.",
    },
    acts: {
      label: "The Doer",
      description:
        "You show care by handling things — favors, tasks, and quietly lightening the load. Strength: you're the friend people can actually rely on. Watch-out: not every problem needs fixing; sometimes people just want to be heard.",
    },
    gifts: {
      label: "The Little-Gift Giver",
      description:
        "You show care with the 'saw this and thought of you' energy — memes, snacks, tiny somethings. Strength: you make people feel remembered day to day. Watch-out: the thought is the gift, so don't stress about size or price.",
    },
    presence: {
      label: "The Comfort-Presence",
      description:
        "You show care by being physically there — a hug, a shoulder to lean on, the same couch. Strength: you're deeply comforting when things get hard. Watch-out: not everyone reads closeness the same way, so check what each friend is comfortable with.",
    },
  },
  balanced: {
    label: "The Mix",
    description:
      "No single lane owns how you care — you shift between hype, time, favors, little gifts, and just being there depending on the person and the moment. Flexible and easy to feel cared-for by.",
  },
  resultType: "bars",
  funFacts: [
    "The idea of different 'care languages' started as a way to explain why one person's love feels invisible to another — they're just speaking different dialects of care.",
    "How you show care and how you like to receive it aren't always the same — plenty of people give in one lane and want another.",
    "Compare with friends: knowing each other's top lane is a cheat code — a Doer and a Hype-Speaker can cover each other's blind spots.",
  ],
  disclaimer:
    "A light vibe check on how you show you care, not a fixed label. Your style shifts with mood, the person, and the moment.",
};
