import { TestDefinition } from "../types";
import { scoreLikertAxes, topAxis } from "./score-utils";

// Friend-group role typology for ages 10-21. Share-native.

const questions = [
  // Planner
  { id: "fr_p1", text: "I am usually the one making the plan, the time, and the group chat.", type: "likert" as const, axis: "planner", direction: 1 as const },
  { id: "fr_p2", text: "If nobody organizes, I feel itchy until there is a plan.", type: "likert" as const, axis: "planner", direction: 1 as const },
  // Comic
  { id: "fr_c1", text: "I lighten the mood with jokes when things get awkward.", type: "likert" as const, axis: "comic", direction: 1 as const },
  { id: "fr_c2", text: "Friends expect me to be the funny one.", type: "likert" as const, axis: "comic", direction: 1 as const },
  // Listener
  { id: "fr_l1", text: "People vent to me because I actually listen.", type: "likert" as const, axis: "listener", direction: 1 as const },
  { id: "fr_l2", text: "I notice when someone is quiet or left out.", type: "likert" as const, axis: "listener", direction: 1 as const },
  // Spark
  { id: "fr_s1", text: "I am the one suggesting wild ideas or last-minute adventures.", type: "likert" as const, axis: "spark", direction: 1 as const },
  { id: "fr_s2", text: "I get bored if the group always does the same safe thing.", type: "likert" as const, axis: "spark", direction: 1 as const },
  // Anchor
  { id: "fr_a1", text: "I am steady when everyone else is panicking.", type: "likert" as const, axis: "anchor", direction: 1 as const },
  { id: "fr_a2", text: "Friends trust me to keep secrets and stay solid.", type: "likert" as const, axis: "anchor", direction: 1 as const },
  // Extra
  { id: "fr_p3", text: "I track birthdays, schedules, or who still has not paid.", type: "likert" as const, axis: "planner", direction: 1 as const },
  { id: "fr_l3", text: "I would rather help a friend process feelings than go to a party.", type: "likert" as const, axis: "listener", direction: 1 as const },
];

const META: Record<string, { label: string; description: string }> = {
  planner: {
    label: "The Planner",
    description:
      "You make the group happen. Strength: reliability. Watch-out: resentment if nobody helps. Let others own a piece of the plan.",
  },
  comic: {
    label: "The Comic",
    description:
      "You keep energy light. Strength: connection through humor. Watch-out: jokes can hide real feelings. You get to be serious too.",
  },
  listener: {
    label: "The Listener",
    description:
      "You are the safe place. Strength: empathy. Watch-out: carrying everyone else weight. You deserve a turn to talk.",
  },
  spark: {
    label: "The Spark",
    description:
      "You bring novelty and nerve. Strength: adventure. Watch-out: leaving people behind. Check who needs a slower pace.",
  },
  anchor: {
    label: "The Anchor",
    description:
      "You stabilize the group. Strength: trust. Watch-out: becoming the default parent friend. You can ask for support too.",
  },
};

export const friendRole: TestDefinition = {
  slug: "friend-role",
  title: "Friend Role Type",
  category: "character",
  description:
    "In your group chat, are you the planner, comic, listener, spark, or anchor?",
  whatYoullLearn:
    "The role you naturally play with friends, what the group gains from you, and what you might need back.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  questions,
  axes: [
    { key: "planner", label: "Planner", lowLabel: "Low", highLabel: "High", description: META.planner.description },
    { key: "comic", label: "Comic", lowLabel: "Low", highLabel: "High", description: META.comic.description },
    { key: "listener", label: "Listener", lowLabel: "Low", highLabel: "High", description: META.listener.description },
    { key: "spark", label: "Spark", lowLabel: "Low", highLabel: "High", description: META.spark.description },
    { key: "anchor", label: "Anchor", lowLabel: "Low", highLabel: "High", description: META.anchor.description },
  ],
  resultType: "radar",
  funFacts: [
    "Groups work best when roles are different. Five planners argue about calendars. Five sparks forget the time.",
    "Your role can change by friend group. Home you might be the comic. At school you might be the listener.",
    "Share this with your group and compare. It is a fun map of how you fit together.",
  ],
  disclaimer:
    "This is a fun self-reflection quiz about friend dynamics, not a clinical personality test.",
};

export function scoreFriendRole(answers: Record<string, number>) {
  const keys = ["planner", "comic", "listener", "spark", "anchor"];
  const scores = scoreLikertAxes(questions, answers, keys);
  const top = topAxis(scores, META);
  return { scores, category: { label: top.label, description: top.description } };
}
