import { TestDefinition } from "../types";

// Group Chat Archetype: the role you play in the group chat.
// Type quiz, 5 axes x 3 items. Share instruction built into the concept.

const questions = [
  // Planner
  { id: "gc_p1", text: "I'm the one who actually picks the date, time, and place.", type: "likert" as const, axis: "planner", direction: 1 as const },
  { id: "gc_p2", text: "'So are we doing this or not?' is a sentence I send regularly.", type: "likert" as const, axis: "planner", direction: 1 as const },
  { id: "gc_p3", text: "If I don't organize it, it quietly never happens.", type: "likert" as const, axis: "planner", direction: -1 as const },
  // Ghost
  { id: "gc_g1", text: "I'll disappear from the chat for days and return like nothing happened.", type: "likert" as const, axis: "ghost", direction: 1 as const },
  { id: "gc_g2", text: "I read everything and reply to approximately none of it.", type: "likert" as const, axis: "ghost", direction: 1 as const },
  { id: "gc_g3", text: "People notice within hours when I've gone quiet in a chat.", type: "likert" as const, axis: "ghost", direction: -1 as const },
  // Therapist
  { id: "gc_t1", text: "When someone vents at 1 AM, I'm the one who answers.", type: "likert" as const, axis: "therapist", direction: 1 as const },
  { id: "gc_t2", text: "I remember what's going on in everyone's life, even the small stuff.", type: "likert" as const, axis: "therapist", direction: 1 as const },
  { id: "gc_t3", text: "Deep talks drain me more than they fill me up.", type: "likert" as const, axis: "therapist", direction: -1 as const },
  // Meme Dealer
  { id: "gc_m1", text: "Half the chat's best jokes came from me first.", type: "likert" as const, axis: "meme", direction: 1 as const },
  { id: "gc_m2", text: "My camera roll is a weapon and the chat knows it.", type: "likert" as const, axis: "meme", direction: 1 as const },
  { id: "gc_m3", text: "I mostly react to messages rather than starting things.", type: "likert" as const, axis: "meme", direction: -1 as const },
  // Archivist
  { id: "gc_a1", text: "I have receipts. Screenshots from years ago. Ask me anything.", type: "likert" as const, axis: "archivist", direction: 1 as const },
  { id: "gc_a2", text: "When the group argues about what was said, I can settle it.", type: "likert" as const, axis: "archivist", direction: 1 as const },
  { id: "gc_a3", text: "Old messages are dead to me; I don't scroll back through chats.", type: "likert" as const, axis: "archivist", direction: -1 as const },
];

export const groupChatArchetype: TestDefinition = {
  slug: "group-chat-archetype",
  title: "Group Chat Archetype",
  category: "character",
  description:
    "Every group chat has a Planner, a Ghost, a Therapist, a Meme Dealer, and an Archivist. Which one are you?",
  whatYoullLearn:
    "Your exact role in the chat ecosystem and who to send this to next.",
  timeMinutes: 4,
  itemCount: 15,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "planner", label: "Planner", lowLabel: "Low", highLabel: "High", description: "Turns 'we should hang out' into an actual event." },
    { key: "ghost", label: "Ghost", lowLabel: "Low", highLabel: "High", description: "Reads everything, replies selectively." },
    { key: "therapist", label: "Therapist", lowLabel: "Low", highLabel: "High", description: "The 1 AM emergency contact." },
    { key: "meme", label: "Meme Dealer", lowLabel: "Low", highLabel: "High", description: "Supplies the chat's comedy economy." },
    { key: "archivist", label: "Archivist", lowLabel: "Low", highLabel: "High", description: "Has the receipts, always." },
  ],
  typeMeta: {
    planner: {
      label: "The Planner 📋",
      description:
        "Without you, the group chat is just five people saying 'omg yes' into the void. You pick the place, chase the stragglers, and get everyone out of the house. Watch-out: recruit a deputy. You're allowed to be ghosted sometimes too.",
    },
    ghost: {
      label: "The Ghost 👻",
      description:
        "You vanish for three days and return with a meme and zero explanation. Nobody takes it personally (out loud). Your messages have higher impact per word than anyone else's. Watch-out: one actual reply a week keeps friendships charged.",
    },
    therapist: {
      label: "The Therapist 🛋️",
      description:
        "You know everyone's situationship status and current spiral. The chat runs on your emotional Wi-Fi. Watch-out: you deserve to vent too, without scheduling it around everyone else's crises.",
    },
    meme: {
      label: "The Meme Dealer 🔥",
      description:
        "Half the inside jokes trace back to you, and you keep the chat alive at its lowest-energy moments. Watch-out: humor can double as a check for whether people still like you. They do.",
    },
    archivist: {
      label: "The Archivist 📂",
      description:
        "Receipts available upon request. You remember who said what in 2023 and hold the exact screenshot that proves it. The chat's living constitution. Watch-out: deploy the archive for good, not vengeance. Mostly.",
    },
  },
  balanced: {
    label: "The Shapeshifter 🎭",
    description:
      "You plan, joke, listen, ghost, and archive depending on the week. The chat genuinely can't predict you, which is either chaos or range. Useful? Extremely. Mysterious? Also extremely.",
  },
  resultType: "bars",
  funFacts: [
    "Send this to your group chat and compare results. Healthy chats need at least two different archetypes.",
    "Your role shifts by group. Therapist in one chat, Ghost in another. Both are you.",
  ],
  disclaimer:
    "This is a fun self-reflection quiz about chat dynamics, not a personality diagnosis.",
};
