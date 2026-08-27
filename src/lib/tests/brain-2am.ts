import { TestDefinition } from "../types";

// Brain at 2 AM: what your mind does when everyone else is asleep.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Existential
  { id: "b2_e1", text: "At night my brain suddenly asks what the point of anything is.", type: "likert" as const, axis: "existential", direction: 1 as const },
  { id: "b2_e2", text: "I've stared at the ceiling wondering how big the universe is. For a while.", type: "likert" as const, axis: "existential", direction: 1 as const },
  { id: "b2_e3", text: "Big questions stay out of my head until they're solved.", type: "likert" as const, axis: "existential", direction: -1 as const },
  // Creative
  { id: "b2_c1", text: "My best ideas arrive the exact moment I turn off the light.", type: "likert" as const, axis: "creative", direction: 1 as const },
  { id: "b2_c2", text: "I've gotten up at night to write down an idea I was sure would change everything.", type: "likert" as const, axis: "creative", direction: 1 as const },
  { id: "b2_c3", text: "My nights are for sleeping; ideas can wait their turn.", type: "likert" as const, axis: "creative", direction: -1 as const },
  // Anxious simulator
  { id: "b2_a1", text: "At 2 AM, small worries become full documentaries with sequels.", type: "likert" as const, axis: "simulator", direction: 1 as const },
  { id: "b2_a2", text: "I've mentally rehearsed tomorrow's awkward conversation in bed.", type: "likert" as const, axis: "simulator", direction: 1 as const },
  { id: "b2_a3", text: "Worries don't follow me to bed; sleep comes easily.", type: "likert" as const, axis: "simulator", direction: -1 as const },
  // Memory replayer
  { id: "b2_m1", text: "My brain replays embarrassing moments at night like it's contractually required.", type: "likert" as const, axis: "replay", direction: 1 as const },
  { id: "b2_m2", text: "I remember random people from years ago exactly when I'm trying to sleep.", type: "likert" as const, axis: "replay", direction: 1 as const },
  { id: "b2_m3", text: "Old memories rarely resurface; my brain lives forward.", type: "likert" as const, axis: "replay", direction: -1 as const },
];

export const brain2am: TestDefinition = {
  slug: "brain-2am",
  title: "Your Brain at 2 AM",
  category: "thinking",
  description:
    "Everyone's asleep. Your brain has scheduled a meeting. What does it actually get up to?",
  whatYoullLearn:
    "Your brain's signature after-hours mode — philosopher, inventor, simulator, or memory projector — and how to work with it instead of against it.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "existential", label: "Existential", lowLabel: "Low", highLabel: "High", description: "Asks the big questions at bad hours." },
    { key: "creative", label: "Creative", lowLabel: "Low", highLabel: "High", description: "Saves its best ideas for lights-out." },
    { key: "simulator", label: "Simulator", lowLabel: "Low", highLabel: "High", description: "Pre-renders tomorrow's disasters." },
    { key: "replay", label: "Replay", lowLabel: "Low", highLabel: "High", description: "Runs the archive of cringe on loop." },
  ],
  typeMeta: {
    existential: {
      label: "🌌 The 2 AM Philosopher",
      description:
        "Consciousness, the universe, whether we're all just patterns — your brain saves the biggest questions for when nobody can answer them. The daytime version of you usually finds these thoughts beautiful too. Write them down; sunrise-you is smarter about them.",
    },
    creative: {
      label: "💡 The Midnight Inventor",
      description:
        "The idea always arrives mid-yawn: a story, a project, a business plan, lyrics. Your brain hoards inspiration until the lights go off. Keep a notepad by the bed — half your best material is currently evaporating every night.",
    },
    simulator: {
      label: "🎬 The Disaster Director",
      description:
        "Tomorrow's presentation becomes a Marvel movie where everything goes wrong in order. Your brain means well — it's rehearsing protection. Thank it, then remind it you've survived 100% of your simulated catastrophes.",
    },
    replay: {
      label: "📼 The Cringe Projector",
      description:
        "2019 called. It wants to show you that one thing you said, in full HD, at 2 AM. Everyone's archive has these files; yours just auto-plays. Trick that works: narrate the replay in a silly voice until the file loses its power.",
    },
  },
  balanced: {
    label: "🛌 The Night Shift Generalist",
    description:
      "Your brain rotates shifts: philosophy tonight, invention tomorrow, a double feature of simulations and replays on weekends. Varied programming. Consider a strict bedtime policy anyway.",
  },
  resultType: "radar",
  funFacts: [
    "Night brains exaggerate: problems genuinely feel bigger at 2 AM because tired brains weigh negatives more heavily.",
    "The 'midnight idea' phenomenon is real — reduced filter plus low distraction equals unexpected connections.",
  ],
  disclaimer:
    "This is a lighthearted quiz about nighttime thinking habits, not medical advice about sleep. Persistent sleep trouble deserves real support.",
};
