import { TestDefinition } from "../types";

// Wanghong Persona (网红): your Chinese-internet influencer archetype.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Creator
  { id: "wh_c1", text: "I've made content — videos, posts, edits — that people actually watched.", type: "likert" as const, axis: "creator", direction: 1 as const },
  { id: "wh_c2", text: "My camera roll is organized like a studio archive.", type: "likert" as const, axis: "creator", direction: 1 as const },
  { id: "wh_c3", text: "Posting publicly feels more stressful than fun to me.", type: "likert" as const, axis: "creator", direction: -1 as const },
  // Comment commander
  { id: "wh_m1", text: "My comments and replies are funnier than most people's posts.", type: "likert" as const, axis: "commenter", direction: 1 as const },
  { id: "wh_m2", text: "I'm known in group chats for hot takes delivered perfectly.", type: "likert" as const, axis: "commenter", direction: 1 as const },
  { id: "wh_m3", text: "I lurk quietly; commenting isn't my scene.", type: "likert" as const, axis: "commenter", direction: -1 as const },
  // Curator
  { id: "wh_k1", text: "Friends ask ME what to watch, buy, or try before they decide.", type: "likert" as const, axis: "curator", direction: 1 as const },
  { id: "wh_k2", text: "I research everything to death and share the findings unprompted.", type: "likert" as const, axis: "curator", direction: 1 as const },
  { id: "wh_k3", text: "Trends reach me late; I couldn't care less.", type: "likert" as const, axis: "curator", direction: -1 as const },
  // Streamer energy
  { id: "wh_s1", text: "I could talk to a camera (or voice chat) for an hour with zero script.", type: "likert" as const, axis: "streamer", direction: 1 as const },
  { id: "wh_s2", text: "Long voice notes are my natural communication format.", type: "likert" as const, axis: "streamer", direction: 1 as const },
  { id: "wh_s3", text: "Being on the spot with an audience sounds exhausting.", type: "likert" as const, axis: "streamer", direction: -1 as const },
];

export const wanghongPersona: TestDefinition = {
  slug: "wanghong-persona",
  title: "Wanghong Persona Test (网红)",
  category: "personality",
  description:
    "China's internet runs on wanghong energy. Which role would you play in it: Creator, Comment Commander, Curator, or Streamer?",
  whatYoullLearn:
    "Your Chinese internet archetype, its strengths, and the platform culture where you'd naturally go viral.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "creator", label: "Creator", lowLabel: "Low", highLabel: "High", description: "Makes the content everyone scrolls." },
    { key: "commenter", label: "Comment Commander", lowLabel: "Low", highLabel: "High", description: "The replies section's main character." },
    { key: "curator", label: "Curator", lowLabel: "Low", highLabel: "High", description: "Researches everything, recommends the best." },
    { key: "streamer", label: "Streamer Energy", lowLabel: "Low", highLabel: "High", description: "Talks effortlessly to an audience." },
  ],
  terms: [
    {
      term: "网红 (Wǎnghóng)",
      note: "'Internet famous' — Chinese slang for influencers. Wanghong culture spans livestream shopping, food vlogs, and entire industries built on personality.",
    },
  ],
  typeMeta: {
    creator: {
      label: "🎬 The Creator",
      description:
        "You make the thing everyone else reposts. Studio-grade camera roll, ideas on tap, mild anxiety about metrics that you'd never admit. Watch-out: creation without rest is how burnout gets a content series.",
    },
    commenter: {
      label: "💬 The Comment Commander",
      description:
        "No posts, total presence. Your replies get more likes than originals — a genuinely elite skill. Watch-out: hot takes at full speed occasionally need an editor. Keep the wit; add a five-second delay.",
    },
    curator: {
      label: "🗂️ The Curator",
      description:
        "You've done the research before anyone asked and your recommendations are law. Every friend group has one oracle; you're it. Watch-out: curation can become control — let people enjoy their unoptimized choices sometimes.",
    },
    streamer: {
      label: "🎙️ The Streamer",
      description:
        "Unscripted talking is your native format — voice notes, live rants, hour-long stories with perfect pacing. Watch-out: monologue stamina isn't dialogue. Occasionally press stop and ask a question.",
    },
  },
  balanced: {
    label: "🌐 The Full-Stack Netizen",
    description:
      "Creates, comments, curates, AND streams — the whole stack. Platforms would fight to have you. Just remember: even the internet sleeps sometimes. Allegedly.",
  },
  resultType: "radar",
  funFacts: [
    "China's livestream commerce industry is bigger than most countries' entire e-commerce sectors.",
    "Wanghong careers now have real professional paths — some universities offer related coursework.",
  ],
  disclaimer:
    "A fun quiz about internet-culture archetypes, not career advice or a prediction of virality.",
};
