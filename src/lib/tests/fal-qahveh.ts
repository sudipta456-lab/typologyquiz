import { TestDefinition } from "../types";

// Fal-e Qahveh (فال قهوه): Persian/Turkish coffee-ground reading tradition,
// reframed as an honest perception quiz about which symbols you see.

const questions = [
  // Mountain — ambition & burden
  { id: "fq_m1", text: "Big challenges look like invitations to me before they look like threats.", type: "likert" as const, axis: "mountain", direction: 1 as const },
  { id: "fq_m2", text: "I carry other people's weight without being asked.", type: "likert" as const, axis: "mountain", direction: 1 as const },
  { id: "fq_m3", text: "I prefer the flat, easy path when one is offered.", type: "likert" as const, axis: "mountain", direction: -1 as const },
  // Bird — news & freedom
  { id: "fq_b1", text: "Change excites me more than it scares me.", type: "likert" as const, axis: "bird", direction: 1 as const },
  { id: "fq_b2", text: "Friends call me first when something happens; I'm a news hub.", type: "likert" as const, axis: "bird", direction: 1 as const },
  { id: "fq_b3", text: "Staying put somewhere familiar suits me best.", type: "likert" as const, axis: "bird", direction: -1 as const },
  // Path — journey & transition
  { id: "fq_p1", text: "I'm usually mid-transition: new phase, new place, or new plan.", type: "likert" as const, axis: "path", direction: 1 as const },
  { id: "fq_p2", text: "Uncertainty feels like possibility to me, not danger.", type: "likert" as const, axis: "path", direction: 1 as const },
  { id: "fq_p3", text: "Settled routines are where I do my best living.", type: "likert" as const, axis: "path", direction: -1 as const },
  // Fish — luck & flow
  { id: "fq_f1", text: "Good things seem to find me when I stop chasing them.", type: "likert" as const, axis: "fish", direction: 1 as const },
  { id: "fq_f2", text: "I trust timing; forcing things rarely works out for me.", type: "likert" as const, axis: "fish", direction: 1 as const },
  { id: "fq_f3", text: "Luck is made, never given; I make all of mine myself.", type: "likert" as const, axis: "fish", direction: -1 as const },
];

export const falQahveh: TestDefinition = {
  slug: "fal-qahveh",
  title: "Fal-e Qahveh Cup Reading (فال قهوه)",
  category: "perception",
  description:
    "The famous coffee-cup reading of Persia and Turkey, reimagined honestly. The symbols you're drawn to reveal how you meet life.",
  whatYoullLearn:
    "Your cup symbol (Mountain, Bird, Path, or Fish) and what your instinct toward it says about this season of your life.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public tasseography symbolism (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "mountain", label: "Mountain (کوه)", lowLabel: "Low", highLabel: "High", description: "Ambition, burden, standing firm." },
    { key: "bird", label: "Bird (پرنده)", lowLabel: "Low", highLabel: "High", description: "News, freedom, movement." },
    { key: "path", label: "Path (راه)", lowLabel: "Low", highLabel: "High", description: "Journey, transition, becoming." },
    { key: "fish", label: "Fish (ماهی)", lowLabel: "Low", highLabel: "High", description: "Luck, flow, trusting timing." },
  ],
  terms: [
    {
      term: "فال قهوه (Fal-e qahveh)",
      note: "'Coffee-cup reading': after Turkish/Persian coffee, the drinker flips the cup and a reader interprets the grounds' shapes. Beloved across Iran, Turkey, and the Arab world. Also called finjan reading (from the cup, فنجان).",
    },
    {
      term: "Tasseography",
      note: "The formal name for reading patterns in coffee grounds or tea leaves, a folk art with a shared symbol vocabulary: birds for news, mountains for struggles, fish for fortune.",
    },
  ],
  typeMeta: {
    mountain: {
      label: "The Mountain",
      description:
        "Your instinct is to climb and to carry. You meet challenges head-on and hold up more than your share. The cup's gentle warning: even mountains get climbers on their back; set some down this month.",
    },
    bird: {
      label: "The Bird",
      description:
        "Movement and news follow you; you're often first to know and first to fly. The cup's gentle warning: not every flight needs a reason. Land somewhere long enough to nest.",
    },
    path: {
      label: "The Path",
      description:
        "You live in transitions and somehow thrive there. Uncertainty is your native weather. The cup's gentle warning: paths need waypoints; mark where you've been so you can feel how far you've come.",
    },
    fish: {
      label: "The Fish",
      description:
        "You trust flow, and life keeps proving you right. Good things arrive when you stop gripping. The cup's gentle warning: fish still swim upstream sometimes; one deliberate push per season keeps luck honest.",
    },
  },
  balanced: {
    label: "The Full Cup",
    description:
      "Mountain, bird, path, and fish all appear in your grounds: a richly patterned cup. Traditional readers would call that a busy fate. We'd call it range.",
  },
  resultType: "orbit",
  funFacts: [
    "Real cup readers interpret shapes like birds (news coming), roads (journeys), and fish (fortune): our four symbols are straight from that vocabulary.",
    "Coffee-reading gatherings are social events as much as rituals; the reading is an excuse for a second cup and a longer conversation.",
  ],
  disclaimer:
    "Inspired by a beloved tradition, offered strictly as reflection and fun: not divination, prophecy, or prediction.",
};
