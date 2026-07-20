import { TestDefinition } from "../types";

// Class Project Archetype — 5 group-project roles.
// Type quiz: ipsative pick-top with flat-profile -> "The Utility Player".
// Every axis mixes forward + reverse items so straight-lining lands balanced.

const questions = [
  // Leader — steering, delegating, speaking first
  { id: "ca_l1", text: "In group projects I usually end up assigning tasks or tracking the deadline.", type: "likert" as const, axis: "leader", direction: 1 as const },
  { id: "ca_l2", text: "I speak up first when the team is stuck.", type: "likert" as const, axis: "leader", direction: 1 as const },
  { id: "ca_l3", text: "People look at me when nobody knows what to do next.", type: "likert" as const, axis: "leader", direction: 1 as const },
  { id: "ca_l4", text: "I'd rather someone else set the plan and tell me my part.", type: "likert" as const, axis: "leader", direction: -1 as const },
  { id: "ca_l5", text: "Running the group chat or the meeting sounds like a nightmare.", type: "likert" as const, axis: "leader", direction: -1 as const },

  // Doer — quiet output, finishing the actual work
  { id: "ca_d1", text: "I quietly do a big chunk of the work so it actually gets finished.", type: "likert" as const, axis: "doer", direction: 1 as const },
  { id: "ca_d2", text: "I'd rather build the slides than run the meeting.", type: "likert" as const, axis: "doer", direction: 1 as const },
  { id: "ca_d3", text: "I fix the formatting and citations everyone else skipped.", type: "likert" as const, axis: "doer", direction: 1 as const },
  { id: "ca_d4", text: "I do my slice and stop there, even if the rest is unfinished.", type: "likert" as const, axis: "doer", direction: -1 as const },
  { id: "ca_d5", text: "Grinding through the boring execution part isn't my role.", type: "likert" as const, axis: "doer", direction: -1 as const },

  // Idea — concepts, angles, brainstorming
  { id: "ca_i1", text: "I bring the weird ideas that make the project more original.", type: "likert" as const, axis: "idea", direction: 1 as const },
  { id: "ca_i2", text: "Brainstorming is my favorite part of any group project.", type: "likert" as const, axis: "idea", direction: 1 as const },
  { id: "ca_i3", text: "I'm the one asking what if we did this completely differently.", type: "likert" as const, axis: "idea", direction: 1 as const },
  { id: "ca_i4", text: "I'm happy to run with the first decent idea someone suggests.", type: "likert" as const, axis: "idea", direction: -1 as const },
  { id: "ca_i5", text: "Coming up with the concept is the part I'd hand to someone else.", type: "likert" as const, axis: "idea", direction: -1 as const },

  // Glue — group harmony, checking on people
  { id: "ca_c1", text: "I keep the group from fighting and check that everyone's okay.", type: "likert" as const, axis: "glue", direction: 1 as const },
  { id: "ca_c2", text: "I notice when someone gets left out of the plan.", type: "likert" as const, axis: "glue", direction: 1 as const },
  { id: "ca_c3", text: "When two teammates are annoyed with each other, I'm the one smoothing it over.", type: "likert" as const, axis: "glue", direction: 1 as const },
  { id: "ca_c4", text: "Group tension isn't my problem to manage — I focus on the work.", type: "likert" as const, axis: "glue", direction: -1 as const },
  { id: "ca_c5", text: "I usually don't clock how my teammates are feeling.", type: "likert" as const, axis: "glue", direction: -1 as const },

  // Wildcard — bursts, late starts, clutch energy
  { id: "ca_w1", text: "I wait to see what everyone else does before I commit to anything.", type: "likert" as const, axis: "wildcard", direction: 1 as const },
  { id: "ca_w2", text: "I work best in short bursts right before the deadline.", type: "likert" as const, axis: "wildcard", direction: 1 as const },
  { id: "ca_w3", text: "My contribution shows up late, but it shows up big.", type: "likert" as const, axis: "wildcard", direction: 1 as const },
  { id: "ca_w4", text: "I start my part early and pace it out.", type: "likert" as const, axis: "wildcard", direction: -1 as const },
  { id: "ca_w5", text: "My teammates always know exactly what to expect from me and when.", type: "likert" as const, axis: "wildcard", direction: -1 as const },
];

export const classArchetype: TestDefinition = {
  slug: "class-archetype",
  title: "Class Project Archetype",
  category: "character",
  description: "Who are you on the group project: captain, finisher, idea person, glue, or deadline wildcard?",
  whatYoullLearn: "Your default team role, what it's good for, and how to stop getting stuck with the worst parts alone.",
  timeMinutes: 4,
  itemCount: 25,
  license: "Original TypologyQuiz items (self-reflection only)",
  scoreMode: "type",
  questions,
  axes: [
    { key: "leader", label: "Captain", lowLabel: "Low", highLabel: "High", description: "Setting direction and keeping the plan moving." },
    { key: "doer", label: "Finisher", lowLabel: "Low", highLabel: "High", description: "Turning the plan into finished work." },
    { key: "idea", label: "Ideas", lowLabel: "Low", highLabel: "High", description: "Concepts, angles, and originality." },
    { key: "glue", label: "Glue", lowLabel: "Low", highLabel: "High", description: "Keeping the people side of the team working." },
    { key: "wildcard", label: "Wildcard", lowLabel: "Low", highLabel: "High", description: "Late starts, big bursts, clutch delivery." },
  ],
  typeMeta: {
    leader: {
      label: "Project Captain",
      description:
        "You steer the ship — deadlines, roles, next steps. Strength: the team actually has a direction. Watch-out: quietly absorbing everyone else's job. Delegate on purpose, not out of desperation.",
    },
    doer: {
      label: "Quiet Finisher",
      description:
        "You're the reason it gets submitted. Strength: real, finished output while others are still debating. Watch-out: invisible labor. Say what you did out loud — nobody else will.",
    },
    idea: {
      label: "Idea Machine",
      description:
        "You supply the angle that makes the project worth looking at. Strength: originality nobody else brings. Watch-out: starting more than you finish. Pick one idea and see it through.",
    },
    glue: {
      label: "Team Glue",
      description:
        "You keep the people part of the group from falling apart. Strength: teams genuinely work better with you in them. Watch-out: carrying everyone's stress for free. Your comfort counts too.",
    },
    wildcard: {
      label: "Deadline Wildcard",
      description:
        "You go quiet, then deliver in one enormous burst. Strength: clutch energy under real pressure. Watch-out: your calm timeline is your teammates' panic. A heads-up costs you nothing.",
    },
  },
  balanced: {
    label: "The Utility Player",
    description:
      "You don't have one fixed role — you read the group and fill whatever's missing. Captain when nobody's leading, finisher when the work is stalling, glue when it gets tense. Underrated and very hard to replace.",
  },
  resultType: "radar",
  funFacts: [
    "Teams do better when the roles are different, not when everyone wants to be captain.",
    "The loudest role usually gets the credit. Finishers are chronically underrated.",
    "Knowing your default role helps you pick teammates on purpose next time.",
  ],
  disclaimer: "A light team-role reflection. Not a grade, a diagnosis, or an evaluation of anyone.",
};
