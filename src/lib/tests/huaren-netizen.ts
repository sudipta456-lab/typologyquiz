import { TestDefinition } from "../types";

// Huaren Netizen Type (华人): diaspora Chinese internet identity.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Study comet
  { id: "hn_y1", text: "Deadlines activate a superpower in me that normal days never see.", type: "likert" as const, axis: "studycomet", direction: 1 as const },
  { id: "hn_y2", text: "My group projects survive because of my last-minute heroics.", type: "likert" as const, axis: "studycomet", direction: 1 as const },
  { id: "hn_y3", text: "I start tasks early; cramming isn't my style.", type: "likert" as const, axis: "studycomet", direction: -1 as const },
  // Archive keeper
  { id: "hn_a1", text: "I have screenshots, links, and receipts saved from years ago.", type: "likert" as const, axis: "archivist", direction: 1 as const },
  { id: "hn_a2", text: "When someone needs 'that one thing', I produce it in seconds.", type: "likert" as const, axis: "archivist", direction: 1 as const },
  { id: "hn_a3", text: "Old chats are dead weight; I clear them regularly.", type: "likert" as const, axis: "archivist", direction: -1 as const },
  // Voice-note overlord
  { id: "hn_v1", text: "Why type three paragraphs when a two-minute voice note does it better?", type: "likert" as const, axis: "voicenote", direction: 1 as const },
  { id: "hn_v2", text: "My friends have learned to stop me mid-story or lose ten minutes.", type: "likert" as const, axis: "voicenote", direction: 1 as const },
  { id: "hn_v3", text: "Voice messages feel invasive; I always type instead.", type: "likert" as const, axis: "voicenote", direction: -1 as const },
  // Group organizer
  { id: "hn_o1", text: "Every gathering exists because I made a plan, a list, and possibly a spreadsheet.", type: "likert" as const, axis: "organizer", direction: 1 as const },
  { id: "hn_o2", text: "I'm the one who books, splits bills, and chases confirmations.", type: "likert" as const, axis: "organizer", direction: 1 as const },
  { id: "hn_o3", text: "Organizing groups sounds like unpaid labor I'd decline.", type: "likert" as const, axis: "organizer", direction: -1 as const },
];

export const huarenNetizen: TestDefinition = {
  slug: "huaren-netizen",
  title: "Huaren Netizen Type (华人网友)",
  category: "character",
  description:
    "For the global Chinese diaspora and everyone raised on its internet culture. Which legendary netizen species are you?",
  whatYoullLearn:
    "Your diaspora-internet archetype (Study Comet, Archivist, Voice-Note Overlord, or Group Organizer) and why your friends can't function without you.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "studycomet", label: "Study Comet", lowLabel: "Low", highLabel: "High", description: "Deadline-day superhero physics." },
    { key: "archivist", label: "Archive Keeper", lowLabel: "Low", highLabel: "High", description: "All receipts, instantly retrievable." },
    { key: "voicenote", label: "Voice-Note Overlord", lowLabel: "Low", highLabel: "High", description: "Types nothing, explains everything." },
    { key: "organizer", label: "Group Organizer", lowLabel: "Low", highLabel: "High", description: "Plans exist because you made them." },
  ],
  terms: [
    {
      term: "华人网友 (Huárén wǎngyǒu)",
      note: "'Chinese netizens / diaspora netizens': the global community of Chinese-speaking internet users, whose chat culture gave the world voice-note marathons, bill-splitting apps, and legendary group-chat logistics.",
    },
    {
      term: "Study Comet",
      note: "Affectionate slang for the student who vanishes all term, then blazes through finals with impossible focus. Physics-defying. Grade-saving.",
    },
  ],
  typeMeta: {
    studycomet: {
      label: "The Study Comet",
      description:
        "Orbiting calmly all semester, then igniting into pure productivity 48 hours before deadline. It works; that's the maddening part. Watch-out: comets burn fuel too; one early start per project keeps the magic sustainable.",
    },
    archivist: {
      label: "The Archive Keeper",
      description:
        "That link from 2021? Saved. Who said what? Screenshotted. You're the group's external hard drive and search engine combined. Watch-out: archives are for settling debates, not winning them. Deploy gently.",
    },
    voicenote: {
      label: "The Voice-Note Overlord",
      description:
        "Two minutes of audio beats twenty lines of typing, obviously. Your storytelling has pacing, arcs, and sound effects. Watch-out: not everyone can listen at work; caption the highlights for the text-preferring civilians.",
    },
    organizer: {
      label: "The Group Organizer",
      description:
        "Every trip, dinner, and reunion exists because you built a plan, collected money, and chased six people for confirmations. Society runs on your unpaid labor. Watch-out: delegate one task per event or resentment becomes your second language.",
    },
  },
  balanced: {
    label: "The Group Chat MVP",
    description:
      "Studies in bursts, saves everything, narrates by voice, organizes by default. Your friends would need three apps and a personal assistant to replace you. Accept the tribute. Also accept some help.",
  },
  resultType: "bars",
  funFacts: [
    "Voice notes dominate Chinese messaging culture so much that typing long texts can read as distant or formal.",
    "Bill-splitting apps became essential infrastructure largely thanks to group-organizer personalities like yours.",
  ],
  disclaimer:
    "A fun quiz about diaspora internet culture: affectionate stereotypes only, zero judgment attached.",
};
