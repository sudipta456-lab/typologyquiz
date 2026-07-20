import { TestDefinition } from "../types";

// Friend-group role typology. Share-native.
// Type quiz: ipsative pick-top with flat-profile -> "The Shapeshifter".
// Each axis mixes forward + reverse items so straight-lining -> balanced.

const questions = [
  // Planner — organizes the group
  { id: "fr_p1", text: "I am usually the one making the plan, the time, and the group chat.", type: "likert" as const, axis: "planner", direction: 1 as const },
  { id: "fr_p2", text: "If nobody organizes, I feel itchy until there is a plan.", type: "likert" as const, axis: "planner", direction: 1 as const },
  { id: "fr_p3", text: "I track birthdays, schedules, or who still has not paid me back.", type: "likert" as const, axis: "planner", direction: 1 as const },
  { id: "fr_p4", text: "I'd rather someone else pick the place and time and just tell me where to show up.", type: "likert" as const, axis: "planner", direction: -1 as const },
  { id: "fr_p5", text: "Organizing a group hangout sounds like a chore I'd happily skip.", type: "likert" as const, axis: "planner", direction: -1 as const },

  // Comic — keeps the mood light
  { id: "fr_c1", text: "I lighten the mood with jokes when things get awkward.", type: "likert" as const, axis: "comic", direction: 1 as const },
  { id: "fr_c2", text: "Friends expect me to be the funny one.", type: "likert" as const, axis: "comic", direction: 1 as const },
  { id: "fr_c3", text: "I'm the one sending the meme that derails the whole group chat.", type: "likert" as const, axis: "comic", direction: 1 as const },
  { id: "fr_c4", text: "In a silence, I wait for someone else to break it rather than crack a joke.", type: "likert" as const, axis: "comic", direction: -1 as const },
  { id: "fr_c5", text: "Being the entertainment in a group isn't really my role.", type: "likert" as const, axis: "comic", direction: -1 as const },

  // Listener — the safe place
  { id: "fr_l1", text: "People vent to me because I actually listen.", type: "likert" as const, axis: "listener", direction: 1 as const },
  { id: "fr_l2", text: "I notice when someone is quiet or left out.", type: "likert" as const, axis: "listener", direction: 1 as const },
  { id: "fr_l3", text: "I would rather help a friend process feelings than go to a party.", type: "likert" as const, axis: "listener", direction: 1 as const },
  { id: "fr_l4", text: "When a friend starts unloading heavy stuff, I hope someone else takes that one.", type: "likert" as const, axis: "listener", direction: -1 as const },
  { id: "fr_l5", text: "I usually miss the small signs that someone's having a bad day.", type: "likert" as const, axis: "listener", direction: -1 as const },

  // Spark — novelty and nerve
  { id: "fr_s1", text: "I am the one suggesting wild ideas or last-minute adventures.", type: "likert" as const, axis: "spark", direction: 1 as const },
  { id: "fr_s2", text: "I get bored if the group always does the same safe thing.", type: "likert" as const, axis: "spark", direction: 1 as const },
  { id: "fr_s3", text: "\"We should just go right now\" is a very me thing to say.", type: "likert" as const, axis: "spark", direction: 1 as const },
  { id: "fr_s4", text: "I like knowing exactly what the plan is before I agree to it.", type: "likert" as const, axis: "spark", direction: -1 as const },
  { id: "fr_s5", text: "Doing the same familiar thing every weekend suits me fine.", type: "likert" as const, axis: "spark", direction: -1 as const },

  // Anchor — steady and trusted
  { id: "fr_a1", text: "I am steady when everyone else is panicking.", type: "likert" as const, axis: "anchor", direction: 1 as const },
  { id: "fr_a2", text: "Friends trust me to keep secrets and stay solid.", type: "likert" as const, axis: "anchor", direction: 1 as const },
  { id: "fr_a3", text: "When there's drama, people come to me for a level head.", type: "likert" as const, axis: "anchor", direction: 1 as const },
  { id: "fr_a4", text: "When the group gets stressed, I get just as stressed as everyone else.", type: "likert" as const, axis: "anchor", direction: -1 as const },
  { id: "fr_a5", text: "I'm not the person friends turn to when they need someone dependable.", type: "likert" as const, axis: "anchor", direction: -1 as const },
];

export const friendRole: TestDefinition = {
  slug: "friend-role",
  title: "Friend Role Type",
  category: "character",
  description:
    "In your group chat, are you the planner, comic, listener, spark, or anchor?",
  whatYoullLearn:
    "The role you naturally play with friends, what the group gains from you, and what you might need back.",
  timeMinutes: 4,
  itemCount: 25,
  license: "Original TypologyQuiz items (self-reflection only)",
  scoreMode: "type",
  questions,
  axes: [
    { key: "planner", label: "Planner", lowLabel: "Low", highLabel: "High", description: "The one who makes the group actually happen." },
    { key: "comic", label: "Comic", lowLabel: "Low", highLabel: "High", description: "The one who keeps the energy light." },
    { key: "listener", label: "Listener", lowLabel: "Low", highLabel: "High", description: "The safe place people vent to." },
    { key: "spark", label: "Spark", lowLabel: "Low", highLabel: "High", description: "The one bringing novelty and nerve." },
    { key: "anchor", label: "Anchor", lowLabel: "Low", highLabel: "High", description: "The steady one who holds it together." },
  ],
  typeMeta: {
    planner: {
      label: "The Planner",
      description:
        "You're the reason the hangout exists instead of staying a 'we should do something' text. Strength: people can count on you to make things real. Watch-out: quiet resentment when nobody helps — hand someone else a piece of the plan.",
    },
    comic: {
      label: "The Comic",
      description:
        "You keep the energy up and the awkward short. Strength: humor that pulls people closer. Watch-out: jokes make a great hiding spot — you're allowed to be serious with them too.",
    },
    listener: {
      label: "The Listener",
      description:
        "You're where people go when it's real. Strength: you notice what others miss. Watch-out: carrying everyone's weight gets heavy — you deserve a turn to be the one talking.",
    },
    spark: {
      label: "The Spark",
      description:
        "You're why the group has stories instead of just plans. Strength: adventure and nerve. Watch-out: not everyone runs at your speed — check who needs the slower version.",
    },
    anchor: {
      label: "The Anchor",
      description:
        "You're the calm the group borrows in a crisis. Strength: people trust you completely. Watch-out: sliding into the permanent 'parent friend' role — you're allowed to need support too.",
    },
  },
  balanced: {
    label: "The Shapeshifter",
    description:
      "No single role owns you — you plan, joke, listen, or steady the ship depending on who's in the room and what it needs. Useful in basically any group, though it can mean nobody quite knows what to expect from you.",
  },
  resultType: "bars",
  funFacts: [
    "Groups work best when roles are different. Five planners argue about calendars. Five sparks forget the time.",
    "Your role can change by friend group. At home you might be the comic. At school you might be the listener.",
    "Share this with your group and compare. It's a fun map of how you fit together.",
  ],
  disclaimer:
    "This is a fun self-reflection quiz about friend dynamics, not a clinical personality test.",
};
