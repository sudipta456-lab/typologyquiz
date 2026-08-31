import { TestDefinition } from "../types";

// Nairobi Vibe Test: Kenyan urban archetypes.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Hustler
  { id: "nb_h1", text: "I always have three things in motion; one of them pays.", type: "likert" as const, axis: "hustler", direction: 1 as const },
  { id: "nb_h2", text: "'There's a way' (kuna chenye) is my answer to most problems.", type: "likert" as const, axis: "hustler", direction: 1 as const },
  { id: "nb_h3", text: "Grinding without rest is overrated; I protect my peace.", type: "likert" as const, axis: "hustler", direction: -1 as const },
  // Creative director
  { id: "nb_c1", text: "My aesthetic sense leads every decision, even small ones.", type: "likert" as const, axis: "creative", direction: 1 as const },
  { id: "nb_c2", text: "Friends copy my style ideas and somehow still miss the magic.", type: "likert" as const, axis: "creative", direction: 1 as const },
  { id: "nb_c3", text: "Trends pass me by; comfort beats cool every time.", type: "likert" as const, axis: "creative", direction: -1 as const },
  // Timekeeper — matatu punctuality paradox
  { id: "nb_t1", text: "I've developed supernatural timing for catching transport exactly when it arrives.", type: "likert" as const, axis: "timekeeper", direction: 1 as const },
  { id: "nb_t2", text: "Somehow I'm never early but also rarely catastrophically late.", type: "likert" as const, axis: "timekeeper", direction: 1 as const },
  { id: "nb_t3", text: "I'm chronically, famously, historically late.", type: "likert" as const, axis: "timekeeper", direction: -1 as const },
  // Chill organizer
  { id: "nb_o1", text: "The plan exists because I made it, quietly, days ago.", type: "likert" as const, axis: "organizer", direction: 1 as const },
  { id: "nb_o2", text: "Everyone asks me where to eat, go, and how much it'll cost.", type: "likert" as const, axis: "organizer", direction: 1 as const },
  { id: "nb_o3", text: "Planning ahead kills the vibe; spontaneity is superior.", type: "likert" as const, axis: "organizer", direction: -1 as const },
];

export const nairobiVibe: TestDefinition = {
  slug: "nairobi-vibe",
  title: "Nairobi Vibe Test",
  category: "character",
  description:
    "Kenya's capital runs on four urban species: the Hustler, the Creative, the Transport Timekeeper, and the Chill Organizer. Which one navigates your life?",
  whatYoullLearn:
    "Your Nairobi archetype, its signature move, and the superpower you didn't know was one.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public East African urban culture (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "hustler", label: "Hustler", lowLabel: "Low", highLabel: "High", description: "Three irons, always fire." },
    { key: "creative", label: "Creative", lowLabel: "Low", highLabel: "High", description: "Aesthetic leads everything." },
    { key: "timekeeper", label: "Transport Timekeeper", lowLabel: "Low", highLabel: "High", description: "Supernatural urban timing." },
    { key: "organizer", label: "Chill Organizer", lowLabel: "Low", highLabel: "High", description: "Plans made quietly, days ago." },
  ],
  terms: [
    {
      term: "Matatu",
      note: "Kenya's famous shared minibuses: loud music, wild art, unpredictable schedules. Mastering matatu timing is a genuine Nairobi life skill.",
    },
    {
      term: "'Kuna chenye'",
      note: "Sheng (Nairobi's Swahili-English blend) for 'there's a way', the city's unofficial motto of resourceful optimism.",
    },
  ],
  typeMeta: {
    hustler: {
      label: "The Hustler",
      description:
        "You move like opportunity is everywhere because for you, it is. Three projects minimum, all viable. Watch-out: the grind can eat the reason you started grinding. Schedule joy like it pays; it does.",
    },
    creative: {
      label: "The Creative Director",
      description:
        "Nairobi's fashion and music scene lives partly in your camera roll. You see looks before they exist. Watch-out: aesthetics are a gift, not a hierarchy; let comfort win occasionally without guilt.",
    },
    timekeeper: {
      label: "The Transport Timekeeper",
      description:
        "You arrive at the stop exactly as the right matatu pulls in. Scientists should study you. Watch-out: your timing superpower works because you're always calculating; take a day off from optimization.",
    },
    organizer: {
      label: "The Chill Organizer",
      description:
        "No stress, no drama, plan already made Tuesday. Groups function because you exist. Watch-out: quiet organizers get taken for granted loudest. Announce your work once in a while.",
    },
  },
  balanced: {
    label: "The True Nairobian",
    description:
      "Hustle, style, timing, planning: the complete city skill set. Nairobi built you specifically. Just remember even cities sleep between midnight and 4 AM. Allegedly.",
  },
  resultType: "radar",
  funFacts: [
    "Sheng evolves so fast that parents reportedly need translators for their own teenagers.",
    "Nairobi is the only world capital with a national park inside city limits; urban range matters.",
  ],
  disclaimer:
    "An affectionate quiz on Kenyan urban culture: celebration of vibes, not a geography exam.",
};
