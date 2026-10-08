export type RapidRoundChoice = {
  id: string;
  label: string;
};

export type RapidRoundQuestion = {
  id: string;
  prompt: string;
  choices: readonly RapidRoundChoice[];
  answerId: string;
  explanation: string;
};

export type RapidRound = {
  slug: "quickfire-10-in-90" | "which-came-first";
  eyebrow: string;
  title: string;
  description: string;
  seconds: number;
  startLabel: string;
  questions: readonly RapidRoundQuestion[];
};

const QUICKFIRE_10_IN_90: RapidRound = {
  slug: "quickfire-10-in-90",
  eyebrow: "Rapid round · general knowledge",
  title: "10 in 90: a general knowledge sprint",
  description:
    "Ten clear questions, ninety seconds, and no sign-up. Lock in an answer, see the short explanation, then keep moving.",
  seconds: 90,
  startLabel: "Start the 90-second round",
  questions: [
    {
      id: "canberra",
      prompt: "What is the capital of Australia?",
      choices: [
        { id: "sydney", label: "Sydney" },
        { id: "canberra", label: "Canberra" },
        { id: "melbourne", label: "Melbourne" },
        { id: "perth", label: "Perth" },
      ],
      answerId: "canberra",
      explanation: "Canberra was selected as a compromise location between Sydney and Melbourne.",
    },
    {
      id: "jupiter",
      prompt: "Which planet is the largest in the solar system?",
      choices: [
        { id: "saturn", label: "Saturn" },
        { id: "jupiter", label: "Jupiter" },
        { id: "neptune", label: "Neptune" },
        { id: "earth", label: "Earth" },
      ],
      answerId: "jupiter",
      explanation: "Jupiter is the solar system’s largest planet by both mass and diameter.",
    },
    {
      id: "frankenstein",
      prompt: "Who wrote Frankenstein?",
      choices: [
        { id: "mary-shelley", label: "Mary Shelley" },
        { id: "jane-austen", label: "Jane Austen" },
        { id: "emily-bronte", label: "Emily Brontë" },
        { id: "virginia-woolf", label: "Virginia Woolf" },
      ],
      answerId: "mary-shelley",
      explanation: "Mary Shelley first published the novel anonymously in 1818.",
    },
    {
      id: "au",
      prompt: "Which element uses the chemical symbol Au?",
      choices: [
        { id: "silver", label: "Silver" },
        { id: "gold", label: "Gold" },
        { id: "argon", label: "Argon" },
        { id: "aluminium", label: "Aluminium" },
      ],
      answerId: "gold",
      explanation: "Au comes from aurum, the Latin word for gold.",
    },
    {
      id: "suez",
      prompt: "The Suez Canal connects the Mediterranean Sea to which sea?",
      choices: [
        { id: "black", label: "The Black Sea" },
        { id: "red", label: "The Red Sea" },
        { id: "arabian", label: "The Arabian Sea" },
        { id: "adriatic", label: "The Adriatic Sea" },
      ],
      answerId: "red",
      explanation: "The canal crosses Egypt and creates a shipping route between the Mediterranean and Red Sea.",
    },
    {
      id: "green",
      prompt: "In ordinary paint mixing, blue and yellow make which colour?",
      choices: [
        { id: "purple", label: "Purple" },
        { id: "orange", label: "Orange" },
        { id: "green", label: "Green" },
        { id: "brown", label: "Brown" },
      ],
      answerId: "green",
      explanation: "This is the familiar subtractive colour-mixing result for paints and pigments.",
    },
    {
      id: "vienna",
      prompt: "Vienna is the capital of which country?",
      choices: [
        { id: "austria", label: "Austria" },
        { id: "hungary", label: "Hungary" },
        { id: "slovakia", label: "Slovakia" },
        { id: "slovenia", label: "Slovenia" },
      ],
      answerId: "austria",
      explanation: "Vienna sits in eastern Austria, near the Slovak border.",
    },
    {
      id: "moon",
      prompt: "What is Earth’s natural satellite called?",
      choices: [
        { id: "phobos", label: "Phobos" },
        { id: "titan", label: "Titan" },
        { id: "moon", label: "The Moon" },
        { id: "europa", label: "Europa" },
      ],
      answerId: "moon",
      explanation: "The Moon is Earth’s only permanent natural satellite.",
    },
    {
      id: "pacific",
      prompt: "Which ocean is the largest on Earth?",
      choices: [
        { id: "atlantic", label: "Atlantic" },
        { id: "indian", label: "Indian" },
        { id: "southern", label: "Southern" },
        { id: "pacific", label: "Pacific" },
      ],
      answerId: "pacific",
      explanation: "The Pacific Ocean covers more surface area than all of Earth’s land combined.",
    },
    {
      id: "four",
      prompt: "How many sides does a square have?",
      choices: [
        { id: "three", label: "Three" },
        { id: "four", label: "Four" },
        { id: "five", label: "Five" },
        { id: "six", label: "Six" },
      ],
      answerId: "four",
      explanation: "A square is a quadrilateral with four equal sides and four right angles.",
    },
  ],
};

const WHICH_CAME_FIRST: RapidRound = {
  slug: "which-came-first",
  eyebrow: "Rapid round · timeline recall",
  title: "Which came first? History in 60 seconds",
  description:
    "Choose the earlier event in each pair. The dates are revealed as you go, so the round doubles as a compact history refresher.",
  seconds: 60,
  startLabel: "Start the 60-second round",
  questions: [
    {
      id: "olympics-flight",
      prompt: "Which came first?",
      choices: [
        { id: "olympics", label: "The first modern Olympic Games" },
        { id: "flight", label: "The Wright brothers’ first powered flight" },
      ],
      answerId: "olympics",
      explanation: "The first modern Olympics were held in Athens in 1896; the Wright brothers’ first powered flight was in 1903.",
    },
    {
      id: "uranus-revolution",
      prompt: "Which came first?",
      choices: [
        { id: "uranus", label: "William Herschel’s discovery of Uranus" },
        { id: "revolution", label: "The start of the French Revolution" },
      ],
      answerId: "uranus",
      explanation: "Herschel observed Uranus in 1781; the French Revolution began in 1789.",
    },
    {
      id: "moon-email",
      prompt: "Which came first?",
      choices: [
        { id: "moon", label: "The first Moon landing" },
        { id: "email", label: "The first network email" },
      ],
      answerId: "moon",
      explanation: "Apollo 11 landed on the Moon in 1969. Ray Tomlinson sent the first network email in 1971.",
    },
    {
      id: "harry-wikipedia",
      prompt: "Which came first?",
      choices: [
        { id: "harry", label: "The first Harry Potter novel" },
        { id: "wikipedia", label: "Wikipedia launches" },
      ],
      answerId: "harry",
      explanation: "Harry Potter and the Philosopher’s Stone was published in 1997; Wikipedia launched in 2001.",
    },
    {
      id: "wall-hubble",
      prompt: "Which came first?",
      choices: [
        { id: "wall", label: "The fall of the Berlin Wall" },
        { id: "hubble", label: "The launch of the Hubble Space Telescope" },
      ],
      answerId: "wall",
      explanation: "The Berlin Wall opened in November 1989. Hubble launched in April 1990.",
    },
    {
      id: "declaration-constitution",
      prompt: "Which came first?",
      choices: [
        { id: "declaration", label: "The US Declaration of Independence" },
        { id: "constitution", label: "The US Constitution is signed" },
      ],
      answerId: "declaration",
      explanation: "The Declaration of Independence was adopted in 1776; the Constitution was signed in 1787.",
    },
    {
      id: "canal-telephone",
      prompt: "Which came first?",
      choices: [
        { id: "canal", label: "The Suez Canal opens" },
        { id: "telephone", label: "Alexander Graham Bell’s telephone patent" },
      ],
      answerId: "canal",
      explanation: "The Suez Canal opened in 1869. Bell received the telephone patent in 1876, so the canal came first.",
    },
    {
      id: "radio-tv",
      prompt: "Which came first?",
      choices: [
        { id: "radio", label: "The first regular radio broadcasts" },
        { id: "tv", label: "The first regular television broadcasts" },
      ],
      answerId: "radio",
      explanation: "Regular radio broadcasting began in the early 1920s; regular television services followed in the 1930s.",
    },
    {
      id: "penicillin-dna",
      prompt: "Which came first?",
      choices: [
        { id: "penicillin", label: "Alexander Fleming observes penicillin" },
        { id: "dna", label: "The DNA double-helix model is published" },
      ],
      answerId: "penicillin",
      explanation: "Fleming observed penicillin in 1928. Watson and Crick’s double-helix paper appeared in 1953.",
    },
    {
      id: "everest-space",
      prompt: "Which came first?",
      choices: [
        { id: "everest", label: "The first confirmed ascent of Mount Everest" },
        { id: "space", label: "The first human spaceflight" },
      ],
      answerId: "everest",
      explanation: "Edmund Hillary and Tenzing Norgay reached Everest’s summit in 1953; Yuri Gagarin flew to space in 1961.",
    },
  ],
};

export const RAPID_ROUNDS: readonly RapidRound[] = [QUICKFIRE_10_IN_90, WHICH_CAME_FIRST];

export function getRapidRound(slug: string): RapidRound | undefined {
  return RAPID_ROUNDS.find((round) => round.slug === slug);
}
