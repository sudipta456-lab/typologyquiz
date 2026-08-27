import { TestDefinition } from "../types";

// K-Drama Archetype: which role you'd play in a Korean drama.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Second lead — loyal, always almost
  { id: "kd_s1", text: "I'm great at supporting someone else's story, sometimes too great.", type: "likert" as const, axis: "secondlead", direction: 1 as const },
  { id: "kd_s2", text: "I care quietly and deeply, and I rarely say so first.", type: "likert" as const, axis: "secondlead", direction: 1 as const },
  { id: "kd_s3", text: "When I want something, I say it immediately and clearly.", type: "likert" as const, axis: "secondlead", direction: -1 as const },
  // Sunshine lead — warm chaos engine
  { id: "kd_h1", text: "I charge into situations heart-first and figure it out later.", type: "likert" as const, axis: "sunshine", direction: 1 as const },
  { id: "kd_h2", text: "People call me refreshing, warm, or impossible to stay mad at.", type: "likert" as const, axis: "sunshine", direction: 1 as const },
  { id: "kd_h3", text: "I calculate carefully before letting anyone see how I feel.", type: "likert" as const, axis: "sunshine", direction: -1 as const },
  // Cold genius — walls, competence, slow melt
  { id: "kd_g1", text: "Competence first, feelings later — that's my operating order.", type: "likert" as const, axis: "genius", direction: 1 as const },
  { id: "kd_g2", text: "It takes people a long time to see the soft version of me.", type: "likert" as const, axis: "genius", direction: 1 as const },
  { id: "kd_g3", text: "My walls come down fast once I trust someone.", type: "likert" as const, axis: "genius", direction: -1 as const },
  // Chaos best friend — scenes, loyalty, comic timing
  { id: "kd_b1", text: "Wherever the main plot is, I provide the comic relief and the real talk.", type: "likert" as const, axis: "bestfriend", direction: 1 as const },
  { id: "kd_b2", text: "My friends' relationships are my personal entertainment and my genuine mission.", type: "likert" as const, axis: "bestfriend", direction: 1 as const },
  { id: "kd_b3", text: "I keep my opinions about other people's drama to myself.", type: "likert" as const, axis: "bestfriend", direction: -1 as const },
];

export const kdramaArchetype: TestDefinition = {
  slug: "kdrama-archetype",
  title: "K-Drama Character Test",
  category: "character",
  description:
    "If your life were a Korean drama, who would you actually be? Second lead? Sunshine protagonist? Find your episode count.",
  whatYoullLearn:
    "Your drama archetype, your character arc, and the scene you'd absolutely steal.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "secondlead", label: "Second Lead", lowLabel: "Low", highLabel: "High", description: "Loyal, quiet, always almost." },
    { key: "sunshine", label: "Sunshine Lead", lowLabel: "Low", highLabel: "High", description: "Heart-first, warm, unstoppable." },
    { key: "genius", label: "Cold Genius", lowLabel: "Low", highLabel: "High", description: "Walls up, competence high, slow melt." },
    { key: "bestfriend", label: "Chaos Best Friend", lowLabel: "Low", highLabel: "High", description: "Comic relief with real talk." },
  ],
  terms: [
    {
      term: "K-drama (케이드라마)",
      note: "Korean television drama — famous worldwide for emotional storylines, love triangles, and characters so archetypal they've become global shorthand.",
    },
    {
      term: "Second Lead Syndrome",
      note: "The fandom heartbreak of rooting for the loyal second lead who never gets chosen. If you know, you know.",
    },
  ],
  typeMeta: {
    secondlead: {
      label: "💔 The Second Lead",
      description:
        "You love steadily and announce it never. Everyone who knows you well is furious on your behalf in episode 8. Your arc: the season where you finally speak first. We'll be watching.",
    },
    sunshine: {
      label: "🌞 The Sunshine Protagonist",
      description:
        "You run on sincerity in a world of strategies, and it disarms everyone eventually. Your arc: the moment your warmth turns out to be strength, not naivety. Cue the rain scene where you refuse to give up.",
    },
    genius: {
      label: "🧊 The Cold Genius",
      description:
        "First impression: intimidating. Episode six revelation: you've been protecting something soft this whole time. Your arc: letting exactly one person past the wall — and the audience screaming when it happens.",
    },
    bestfriend: {
      label: "🍜 The Chaos Best Friend",
      description:
        "You deliver truth at the noodle shop at 1 AM, usually mid-bite. No subplot survives without you. Your arc: the episode where someone finally asks how YOU'RE doing. Take the scene. It's yours.",
    },
  },
  balanced: {
    label: "🎬 The Ensemble Favorite",
    description:
      "A little second lead devotion, protagonist warmth, genius composure, best-friend chaos. Casting directors love you; writers can put you anywhere. Just make sure somebody's writing YOUR storyline too.",
  },
  resultType: "orbit",
  funFacts: [
    "Second Lead Syndrome is so real that some dramas film alternate endings after fan outcry.",
    "K-drama character types have become a global shorthand — people describe real friends as 'total second lead energy.'",
  ],
  disclaimer:
    "A fun quiz about drama tropes and personality — not a casting decision or a prediction of your love life.",
};
