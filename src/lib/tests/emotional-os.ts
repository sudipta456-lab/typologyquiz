import { TestDefinition } from "../types";

// Emotional OS: your default way of processing feelings, as an operating system.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Reliable — steady, slow to change state
  { id: "eo_r1", text: "My mood doesn't swing much; people know what they're getting.", type: "likert" as const, axis: "reliable", direction: 1 as const },
  { id: "eo_r2", text: "When things crash around me, I keep running until they're fixed.", type: "likert" as const, axis: "reliable", direction: 1 as const },
  { id: "eo_r3", text: "My emotions flip fast — one text can reboot my whole day.", type: "likert" as const, axis: "reliable", direction: -1 as const },
  // Expressive — flashy, visible, updates constantly
  { id: "eo_e1", text: "Everyone knows how I feel because my face already posted it.", type: "likert" as const, axis: "expressive", direction: 1 as const },
  { id: "eo_e2", text: "I process feelings by talking about them immediately.", type: "likert" as const, axis: "expressive", direction: 1 as const },
  { id: "eo_e3", text: "I keep big feelings off-screen until I've sorted them alone.", type: "likert" as const, axis: "expressive", direction: -1 as const },
  // Deep — configurable, introspective
  { id: "eo_d1", text: "I take feelings apart piece by piece before deciding what they mean.", type: "likert" as const, axis: "deep", direction: 1 as const },
  { id: "eo_d2", text: "Journaling, long walks, or 2 AM thoughts are how I debug myself.", type: "likert" as const, axis: "deep", direction: 1 as const },
  { id: "eo_d3", text: "Analyzing feelings sounds exhausting; I'd rather just move on.", type: "likert" as const, axis: "deep", direction: -1 as const },
  // Reactive — fast, hot, quick recovery
  { id: "eo_x1", text: "I react instantly, then apologize or laugh about it ten minutes later.", type: "likert" as const, axis: "reactive", direction: 1 as const },
  { id: "eo_x2", text: "My anger or excitement arrives fast and leaves almost as fast.", type: "likert" as const, axis: "reactive", direction: 1 as const },
  { id: "eo_x3", text: "People would describe me as slow to react and slow to cool down.", type: "likert" as const, axis: "reactive", direction: -1 as const },
];

export const emotionalOs: TestDefinition = {
  slug: "emotional-os",
  title: "Emotional OS Test",
  category: "personality",
  description:
    "If your emotional life were an operating system, which one would it run? Find out — bugs included.",
  whatYoullLearn:
    "Your emotional processing system, its known strengths, and its most common crash pattern.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "reliable", label: "Reliable", lowLabel: "Low", highLabel: "High", description: "Stable, steady, rarely crashes." },
    { key: "expressive", label: "Expressive", lowLabel: "Low", highLabel: "High", description: "Live updates, all notifications on." },
    { key: "deep", label: "Deep", lowLabel: "Low", highLabel: "High", description: "Runs everything through analysis first." },
    { key: "reactive", label: "Reactive", lowLabel: "Low", highLabel: "High", description: "Instant response, fast recovery." },
  ],
  typeMeta: {
    reliable: {
      label: "🖥️ Windows XP — Slow but Reliable",
      description:
        "Old, unglamorous, and somehow still running everything important. You don't crash; you just quietly process while everyone else reboots. Known bug: updates (feelings) get postponed so long they arrive all at once. Run them monthly.",
    },
    expressive: {
      label: "✨ macOS Beta — Flashy but Unstable",
      description:
        "Beautiful interface, live reactions, gorgeous output — and occasionally crashes mid-presentation. Your openness is a gift; the instability isn't. Ship the stable version of a feeling before announcing it.",
    },
    deep: {
      label: "🐧 Linux — Configurable but Requires Effort",
      description:
        "You can understand literally anything about yourself if you open the terminal. Powerful, precise, respected by other nerds. Known issue: you'd rather configure than connect. Sometimes just feel the thing without reading its source code.",
    },
    reactive: {
      label: "🔋 Android on 2% — Fast Response, Quick Reboot",
      description:
        "You respond to everything instantly and recover shockingly fast. High performance, dramatic battery warnings. Known bug: replies sent at full speed sometimes need a recall. A ten-second buffer saves hours.",
    },
  },
  balanced: {
    label: "📱 The Well-Balanced Phone",
    description:
      "No single mode dominates — you switch between steady, expressive, analytical, and reactive depending on load. Boring answer, elite setup. Most operating systems aspire to what you already do.",
  },
  resultType: "bars",
  funFacts: [
    "Every OS has a crash pattern. Knowing yours turns surprises into maintenance.",
    "Emotional processing style is mostly habit, not hardware — systems can learn new defaults.",
  ],
  disclaimer:
    "This is a playful self-reflection quiz, not a psychological assessment. No actual operating systems were harmed.",
};
