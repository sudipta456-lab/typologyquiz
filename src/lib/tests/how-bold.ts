import { TestDefinition } from "../types";

// How Bold Are You — novelty & spontaneity vibe check (NEW).
// Single "boldness" axis: high = bold (seeks new/adventure), low = cautious (thoughtful).
// Balanced forward/reverse items so a constant answer lands mid-spectrum.
// Framed around adventure, novelty, and putting yourself out there — not risk-for-risk's-sake.

const questions = [
  // Forward = bold leaning (direction 1)
  { id: "bo_01", text: "A brand-new experience excites me more than it worries me.", type: "likert" as const, axis: "boldness", direction: 1 as const },
  { id: "bo_02", text: "I'll raise my hand or speak up even when I'm not sure how it'll land.", type: "likert" as const, axis: "boldness", direction: 1 as const },
  { id: "bo_03", text: "I like plans that leave room for a last-minute 'let's just go'.", type: "likert" as const, axis: "boldness", direction: 1 as const },
  { id: "bo_04", text: "Trying a hobby I might be bad at sounds fun, not scary.", type: "likert" as const, axis: "boldness", direction: 1 as const },
  { id: "bo_05", text: "I'll introduce myself to new people rather than wait to be approached.", type: "likert" as const, axis: "boldness", direction: 1 as const },
  { id: "bo_06", text: "Posting something creative online, even if it flops, feels worth it.", type: "likert" as const, axis: "boldness", direction: 1 as const },
  { id: "bo_07", text: "I'm drawn to the option I've never tried before.", type: "likert" as const, axis: "boldness", direction: 1 as const },
  { id: "bo_08", text: "Not knowing how something will turn out is part of the appeal.", type: "likert" as const, axis: "boldness", direction: 1 as const },
  { id: "bo_09", text: "I'd rather jump into a new group or club than watch from the edge.", type: "likert" as const, axis: "boldness", direction: 1 as const },

  // Reverse = cautious / thoughtful leaning (direction -1)
  { id: "bo_10", text: "I like to think a decision through before I commit to it.", type: "likert" as const, axis: "boldness", direction: -1 as const },
  { id: "bo_11", text: "I prefer the familiar option over the unknown one.", type: "likert" as const, axis: "boldness", direction: -1 as const },
  { id: "bo_12", text: "I'd rather plan the trip carefully than wing it.", type: "likert" as const, axis: "boldness", direction: -1 as const },
  { id: "bo_13", text: "In a new group, I hang back and read the room first.", type: "likert" as const, axis: "boldness", direction: -1 as const },
  { id: "bo_14", text: "I like knowing what to expect before I say yes to something.", type: "likert" as const, axis: "boldness", direction: -1 as const },
  { id: "bo_15", text: "Speaking up in front of people is something I'd rather avoid.", type: "likert" as const, axis: "boldness", direction: -1 as const },
  { id: "bo_16", text: "I weigh the downsides carefully before trying anything new.", type: "likert" as const, axis: "boldness", direction: -1 as const },
  { id: "bo_17", text: "Spontaneous changes of plan stress me out more than excite me.", type: "likert" as const, axis: "boldness", direction: -1 as const },
  { id: "bo_18", text: "I'd rather perfect something privately than share it before it's ready.", type: "likert" as const, axis: "boldness", direction: -1 as const },
];

export const howBold: TestDefinition = {
  slug: "how-bold",
  title: "How Bold Are You",
  category: "character",
  description:
    "Do you leap toward new experiences or size them up first? A quick vibe check on novelty, spontaneity, and putting yourself out there.",
  whatYoullLearn:
    "Where you sit on the cautious-to-bold spectrum, the strength your style gives you, and the gentle watch-out that comes with it.",
  timeMinutes: 3,
  itemCount: 18,
  license: "Original TypologyQuiz items, inspired by novelty-seeking research (self-reflection only).",
  isNew: true,
  scoreMode: "spectrum",
  questions,
  axes: [
    {
      key: "boldness",
      label: "Boldness",
      lowLabel: "Cautious",
      highLabel: "Bold",
      description:
        "How readily you reach for new experiences, adventure, and speaking up — higher means more novelty-seeking and spontaneity.",
    },
  ],
  resultType: "wave",
  spectrumBands: [
    {
      max: 20,
      label: "Steady Planner",
      description:
        "You like knowing what you're walking into, and you think things through before you leap. That's real thoughtfulness — you rarely get blindsided. The gentle nudge: every so often, say yes to a small unknown so the world doesn't shrink to only what's familiar.",
    },
    {
      max: 40,
      label: "Careful",
      description:
        "You lean toward the familiar and prefer a plan over a wild card. Great instincts for weighing things well. Try picking one low-stakes new thing to try each month — small doses of new keep your options open.",
    },
    {
      max: 60,
      label: "Balanced",
      description:
        "You can dive into something new or hang back and observe, depending on the moment. That flexibility is genuinely handy — you read situations before deciding which mode fits.",
    },
    {
      max: 80,
      label: "Adventurous",
      description:
        "New experiences pull you in and you're happy to put yourself out there. People love bringing you along. The watch-out isn't 'slow down' — it's giving the big decisions a beat of thought before the yes.",
    },
    {
      max: 100,
      label: "Full Send",
      description:
        "You run toward the new, the unknown, and the spotlight, and it opens a lot of doors. Massive strength for meeting people and finding opportunities. Just let the highest-stakes calls get a moment of 'is this actually a good idea?' before you leap.",
    },
  ],
  funFacts: [
    "Novelty-seeking tends to run high in the teen-to-early-adult years and mellows a bit later, so a bold streak now is pretty on-schedule.",
    "Boldness and caution each win in different situations: bold gets you the audition, cautious gets you the well-checked plan — most people flex between them.",
    "Compare with friends: a bold instigator plus a careful planner is a classic combo — one finds the adventure, the other makes sure everyone gets home.",
  ],
  disclaimer:
    "A light self-reflection vibe check, not a dare. Bold means putting yourself out there for new experiences, not doing anything unsafe — real courage still looks before it leaps.",
};
