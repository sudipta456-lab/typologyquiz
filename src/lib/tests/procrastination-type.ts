import { TestDefinition } from "../types";

// What's Your Procrastination Style — 5 delay styles (NEW).
// Type quiz: ipsative pick-top with flat-profile -> "The Balanced Starter".
// Each axis mixes forward + reverse items so straight-lining -> balanced.
// Warm framing: every style has a strength plus a small, shame-free nudge.

const questions = [
  // Perfectionist — won't start until the plan/conditions are perfect
  { id: "pr_pf1", text: "I hold off starting until I've got the perfect plan or setup.", type: "likert" as const, axis: "perfectionist", direction: 1 as const },
  { id: "pr_pf2", text: "If it can't be done really well, I'd rather not begin yet.", type: "likert" as const, axis: "perfectionist", direction: 1 as const },
  { id: "pr_pf3", text: "\"Not the right conditions\" is a real reason I delay things.", type: "likert" as const, axis: "perfectionist", direction: 1 as const },
  { id: "pr_pf4", text: "I'm happy to start messy and clean it up as I go.", type: "likert" as const, axis: "perfectionist", direction: -1 as const },

  // Dreamer — big plans, fuzzy follow-through
  { id: "pr_dr1", text: "I love dreaming up big plans more than doing the small steps.", type: "likert" as const, axis: "dreamer", direction: 1 as const },
  { id: "pr_dr2", text: "I've got a lot of exciting ideas I haven't actually started.", type: "likert" as const, axis: "dreamer", direction: 1 as const },
  { id: "pr_dr3", text: "The vision is vivid; the boring follow-through is where I fade.", type: "likert" as const, axis: "dreamer", direction: 1 as const },
  { id: "pr_dr4", text: "When I get an idea, I map out the concrete next step right away.", type: "likert" as const, axis: "dreamer", direction: -1 as const },

  // Crisis-maker — works best at the last minute, deadline adrenaline
  { id: "pr_cr1", text: "I do my best work when a deadline is breathing down my neck.", type: "likert" as const, axis: "crisisMaker", direction: 1 as const },
  { id: "pr_cr2", text: "The pressure of the last minute is what finally gets me moving.", type: "likert" as const, axis: "crisisMaker", direction: 1 as const },
  { id: "pr_cr3", text: "If it's not urgent yet, I struggle to feel the push to start.", type: "likert" as const, axis: "crisisMaker", direction: 1 as const },
  { id: "pr_cr4", text: "I like starting well ahead so there's no last-minute scramble.", type: "likert" as const, axis: "crisisMaker", direction: -1 as const },

  // Avoider — dodges the scary/hard task, distracts
  { id: "pr_av1", text: "When a task feels hard or stressful, I find ways to avoid it.", type: "likert" as const, axis: "avoider", direction: 1 as const },
  { id: "pr_av2", text: "I'll reach for a distraction rather than face the scary task.", type: "likert" as const, axis: "avoider", direction: 1 as const },
  { id: "pr_av3", text: "The tasks I dread are the ones I keep pushing to \"later.\"", type: "likert" as const, axis: "avoider", direction: 1 as const },
  { id: "pr_av4", text: "When something feels intimidating, I make myself start on it anyway.", type: "likert" as const, axis: "avoider", direction: -1 as const },

  // Busy-bee — does easy/low-priority tasks to feel productive
  { id: "pr_bb1", text: "I'll knock out little easy tasks to avoid the big important one.", type: "likert" as const, axis: "busyBee", direction: 1 as const },
  { id: "pr_bb2", text: "Staying \"busy\" with small stuff helps me dodge the real priority.", type: "likert" as const, axis: "busyBee", direction: 1 as const },
  { id: "pr_bb3", text: "I feel productive tidying and organising while the main task waits.", type: "likert" as const, axis: "busyBee", direction: 1 as const },
  { id: "pr_bb4", text: "I go after the most important task first, before the easy busywork.", type: "likert" as const, axis: "busyBee", direction: -1 as const },

  // --- Follow-up probes (only shown when an earlier answer triggers them) ---

  // Perfectionist — go deeper on waiting for the perfect setup
  { id: "pr_b1", text: "I've spent longer picking the app, playlist, or notebook than actually working.", type: "likert" as const, axis: "perfectionist", direction: 1 as const, showIf: { questionId: "pr_pf1", min: 4 } },

  // Dreamer — go deeper on the pile of unstarted ideas
  { id: "pr_b2", text: "I've got projects I've described out loud to friends but never begun.", type: "likert" as const, axis: "dreamer", direction: 1 as const, showIf: { questionId: "pr_dr2", min: 4 } },

  // Crisis-maker — re-verify a maxed-out deadline rush
  { id: "pr_b3", text: "Plenty of my best work has come together calmly, days before it was due.", type: "likert" as const, axis: "crisisMaker", direction: -1 as const, showIf: { questionId: "pr_cr1", min: 5 } },

  // Avoider — go deeper on reaching for a distraction
  { id: "pr_b4", text: "I somehow end up on my phone the exact moment I open the hard task.", type: "likert" as const, axis: "avoider", direction: 1 as const, showIf: { questionId: "pr_av2", min: 4 } },

  // Busy-bee — re-verify a maxed-out tidy-instead-of-work habit
  { id: "pr_b5", text: "When the big task is waiting, small chores lose their appeal completely.", type: "likert" as const, axis: "busyBee", direction: -1 as const, showIf: { questionId: "pr_bb3", min: 5 } },
];

export const procrastinationType: TestDefinition = {
  slug: "procrastination-type",
  title: "What's Your Procrastination Style",
  category: "character",
  description:
    "Perfect-plan waiter, big dreamer, deadline sprinter, task dodger, or busywork champion? Meet your procrastination style.",
  whatYoullLearn:
    "The way you tend to put things off, the strength hiding inside it, and one small nudge to get unstuck.",
  timeMinutes: 4,
  itemCount: 20,
  license: "Original TypologyQuiz items for self-reflection only.",
  isNew: true,
  hasBranching: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "perfectionist", label: "Perfectionist", lowLabel: "Low", highLabel: "High", description: "Waits for the perfect plan." },
    { key: "dreamer", label: "Dreamer", lowLabel: "Low", highLabel: "High", description: "Big ideas, fuzzy follow-through." },
    { key: "crisisMaker", label: "Crisis-Maker", lowLabel: "Low", highLabel: "High", description: "Runs on last-minute adrenaline." },
    { key: "avoider", label: "Avoider", lowLabel: "Low", highLabel: "High", description: "Dodges the hard, scary task." },
    { key: "busyBee", label: "Busy-Bee", lowLabel: "Low", highLabel: "High", description: "Busywork instead of the big thing." },
  ],
  typeMeta: {
    perfectionist: {
      label: "The Perfect-Plan Waiter",
      description:
        "You hold off until the plan and the conditions feel just right. Strength: when you do start, you care and it shows. Nudge: 'good enough to begin' beats 'perfect but not started' — a messy first step still counts.",
    },
    dreamer: {
      label: "The Big Dreamer",
      description:
        "You light up imagining what could be, more than grinding the small steps. Strength: vision and ideas most people don't have. Nudge: pick one tiny next action for one idea today — momentum turns dreams into things.",
    },
    crisisMaker: {
      label: "The Deadline Sprinter",
      description:
        "You come alive when the clock is almost out, and last-minute pressure gets it done. Strength: you can focus hard and deliver under fire. Nudge: the sprint works, but a little buffer means one surprise won't sink the whole thing.",
    },
    avoider: {
      label: "The Task Dodger",
      description:
        "When something feels hard or scary, you find somewhere else to be. Strength: you're honest that some tasks genuinely feel big. Nudge: shrink the scary thing to a two-minute starter — starting is usually worse in your head than in real life.",
    },
    busyBee: {
      label: "The Busywork Champion",
      description:
        "You stay genuinely busy — with everything except the one big thing. Strength: you get a ton of small stuff done and you're rarely idle. Nudge: give the important task the first slot of your day, before the little tasks quietly eat it.",
    },
  },
  balanced: {
    label: "The Balanced Starter",
    description:
      "No single delay style runs the show for you — a bit of planning, a bit of last-minute push, a bit of dodging, depending on the task. You mostly find your way to the start line without one habit owning you.",
  },
  resultType: "bars",
  funFacts: [
    "Procrastination is more about managing feelings than managing time — we put off tasks that stir up stress, boredom, or self-doubt.",
    "Almost everyone does it, and 'last-minute' people often aren't lazy — they're waiting for the pressure that finally flips their focus on.",
    "Compare with friends — a deadline sprinter paired with a perfect-plan waiter on a group project is a comedy waiting to happen.",
  ],
  disclaimer:
    "A kind, light look at how you put things off, not a flaw report. Everyone procrastinates, and your style shifts with the task and your mood.",
};
