import { TestDefinition } from "../types";

// RIASEC-lite career interests (Holland codes simplified).
// Type quiz: ipsative pick-top with flat-profile -> "The Multi-Interest".
// Each axis mixes forward + reverse items so straight-lining -> balanced, not "Maker / Doer".
// Self-reflection only, not an official counseling tool.

const questions = [
  // Realistic — hands-on, build and fix
  { id: "ri_r01", text: "I like building, fixing, or making something with my hands.", type: "likert" as const, axis: "realistic", direction: 1 as const },
  { id: "ri_r02", text: "I'd rather do a hands-on project than write a long essay.", type: "likert" as const, axis: "realistic", direction: 1 as const },
  { id: "ri_r03", text: "Tools, machines, gear, or anything I can physically take apart interest me.", type: "likert" as const, axis: "realistic", direction: 1 as const },
  { id: "ri_r04", text: "Practical, hands-on work isn't really where I shine.", type: "likert" as const, axis: "realistic", direction: -1 as const },

  // Investigative — analyse, research, figure out
  { id: "ri_i01", text: "I enjoy figuring out how things work or solving puzzles.", type: "likert" as const, axis: "investigative", direction: 1 as const },
  { id: "ri_i02", text: "I get curious and research random topics just because.", type: "likert" as const, axis: "investigative", direction: 1 as const },
  { id: "ri_i03", text: "Digging into data or evidence to test an idea sounds fun to me.", type: "likert" as const, axis: "investigative", direction: 1 as const },
  { id: "ri_i04", text: "I'd rather just get the answer than spend ages analysing why.", type: "likert" as const, axis: "investigative", direction: -1 as const },

  // Artistic — create, express, invent
  { id: "ri_a01", text: "I like creating things: art, music, writing, video, or design.", type: "likert" as const, axis: "artistic", direction: 1 as const },
  { id: "ri_a02", text: "I'd rather invent my own approach than follow a strict template.", type: "likert" as const, axis: "artistic", direction: 1 as const },
  { id: "ri_a03", text: "Open-ended projects with no single right answer are my favourite kind.", type: "likert" as const, axis: "artistic", direction: 1 as const },
  { id: "ri_a04", text: "Creative or open-ended assignments mostly just stress me out.", type: "likert" as const, axis: "artistic", direction: -1 as const },

  // Social — help, teach, support
  { id: "ri_s01", text: "I like helping friends with problems or teaching someone something.", type: "likert" as const, axis: "social", direction: 1 as const },
  { id: "ri_s02", text: "Group work feels better when I can support people, not just finish tasks.", type: "likert" as const, axis: "social", direction: 1 as const },
  { id: "ri_s03", text: "Work that makes a real difference for someone appeals to me most.", type: "likert" as const, axis: "social", direction: 1 as const },
  { id: "ri_s04", text: "I'd rather work on a task alone than spend the day dealing with people.", type: "likert" as const, axis: "social", direction: -1 as const },

  // Enterprising — lead, pitch, persuade
  { id: "ri_e01", text: "I like leading, pitching ideas, or getting people excited about a plan.", type: "likert" as const, axis: "enterprising", direction: 1 as const },
  { id: "ri_e02", text: "Competitions, clubs, or starting something new give me energy.", type: "likert" as const, axis: "enterprising", direction: 1 as const },
  { id: "ri_e03", text: "Talking someone into a good idea is a skill I enjoy using.", type: "likert" as const, axis: "enterprising", direction: 1 as const },
  { id: "ri_e04", text: "Being in charge of a group is a job I'd happily hand to someone else.", type: "likert" as const, axis: "enterprising", direction: -1 as const },

  // Conventional — organise, systematise, keep order
  { id: "ri_c01", text: "I like organising plans, lists, schedules, or clean systems.", type: "likert" as const, axis: "conventional", direction: 1 as const },
  { id: "ri_c02", text: "Clear rules and structure help me do my best work.", type: "likert" as const, axis: "conventional", direction: 1 as const },
  { id: "ri_c03", text: "I get satisfaction from making messy information neat and accurate.", type: "likert" as const, axis: "conventional", direction: 1 as const },
  { id: "ri_c04", text: "Detailed, precise, follow-the-procedure work bores me quickly.", type: "likert" as const, axis: "conventional", direction: -1 as const },
];

export const riasecLite: TestDefinition = {
  slug: "career-interests",
  title: "Career Interests (RIASEC-lite)",
  category: "character",
  description:
    "Which kinds of projects, hobbies, and future paths fit your energy: make, explore, create, help, lead, or organise.",
  whatYoullLearn:
    "Your top Holland-style interest theme and what it might mean for the classes, clubs, and work you go looking for.",
  timeMinutes: 4,
  itemCount: 24,
  license: "Original TypologyQuiz items inspired by Holland RIASEC (self-reflection only)",
  scoreMode: "type",
  questions,
  axes: [
    { key: "realistic", label: "Realistic", lowLabel: "Low", highLabel: "High", description: "Hands-on, build-and-fix work." },
    { key: "investigative", label: "Investigative", lowLabel: "Low", highLabel: "High", description: "Puzzles, research, and figuring things out." },
    { key: "artistic", label: "Artistic", lowLabel: "Low", highLabel: "High", description: "Creating, expressing, inventing." },
    { key: "social", label: "Social", lowLabel: "Low", highLabel: "High", description: "Helping, teaching, working with people." },
    { key: "enterprising", label: "Enterprising", lowLabel: "Low", highLabel: "High", description: "Leading, pitching, starting things." },
    { key: "conventional", label: "Conventional", lowLabel: "Low", highLabel: "High", description: "Order, systems, and accuracy." },
  ],
  typeMeta: {
    realistic: {
      label: "The Maker",
      description:
        "Practical, build-and-fix energy — you learn by doing, not by reading about it. Strength: you finish real things while other people are still planning. Watch-out: some doors open faster if you sit through the theory first.",
    },
    investigative: {
      label: "The Analyst",
      description:
        "You want to know why, and you'll go down the rabbit hole to find out. Strength: you spot the thing everyone else skimmed past. Watch-out: at some point the research has to turn into a decision.",
    },
    artistic: {
      label: "The Creator",
      description:
        "Ideas, expression, and your own style matter more than the template. Strength: you make things nobody else would have thought of. Watch-out: constraints aren't the enemy — deadlines and briefs sharpen good work.",
    },
    social: {
      label: "The Connector",
      description:
        "People are your project — teaching, supporting, and teamwork feel like the point. Strength: others do better work around you. Watch-out: looking after everyone can quietly cost you your own time.",
    },
    enterprising: {
      label: "The Starter",
      description:
        "Influence, initiative, and momentum are your thing — you'd rather run it than watch it. Strength: you get people moving. Watch-out: starting is the easy half; the follow-through is where it counts.",
    },
    conventional: {
      label: "The Organiser",
      description:
        "Order, systems, and reliability are real strengths — you make chaos usable. Strength: people trust your work to be right. Watch-out: not every mess needs fixing, and some good ideas arrive untidy.",
    },
  },
  balanced: {
    label: "The Multi-Interest",
    description:
      "No single theme runs away with it — your interests spread across making, thinking, creating, helping, leading, and organising. That's normal and useful; most people are a blend of two or three. Try things and see which ones keep pulling you back.",
  },
  resultType: "radar",
  funFacts: [
    "RIASEC is one of the most widely used career interest models in schools and universities worldwide.",
    "Most people have two or three strong themes, not one pure type.",
    "Interests grow when you try new activities — this is a snapshot, not a sentence.",
  ],
  disclaimer:
    "A short interest quiz for exploration, not an official career counseling tool or aptitude test.",
};
