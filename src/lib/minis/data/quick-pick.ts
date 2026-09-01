/**
 * Quick pick rounds: "tap all the X" from a 12-tile grid (6 correct + 6 decoys).
 *
 * Every round is fact-checked against stable, wide-margin facts:
 * - Capitals verified against current state and national capitals.
 * - EU membership as of 2026 (27 members; the UK left in 2020).
 * - Olympic sports checked against the current Summer program (skateboarding
 *   joined in Tokyo 2020; chess, darts, bowling, snooker, netball, kickball
 *   have never been on it).
 */

export type QuickPickRound = {
  id: string;
  prompt: string;
  /** Short label for the share line, e.g. "state capitals". */
  topic: string;
  correct: string[];
  decoys: string[];
};

export const QUICK_PICK_ROUNDS: QuickPickRound[] = [
  {
    id: "state-capitals",
    prompt: "Tap all the US state capitals",
    topic: "state capitals",
    correct: ["Austin", "Denver", "Boise", "Sacramento", "Atlanta", "Nashville"],
    decoys: ["New York City", "Los Angeles", "Chicago", "Miami", "Seattle", "Dallas"],
  },
  {
    id: "planets",
    prompt: "Tap all the planets",
    topic: "planets",
    correct: ["Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Neptune"],
    decoys: ["Europa", "Titan", "Ganymede", "Callisto", "Io", "Triton"],
  },
  {
    id: "primes",
    prompt: "Tap all the prime numbers",
    topic: "prime numbers",
    correct: ["2", "13", "29", "31", "47", "53"],
    decoys: ["21", "27", "33", "49", "51", "57"],
  },
  {
    id: "african-countries",
    prompt: "Tap all the African countries",
    topic: "African countries",
    correct: ["Kenya", "Ghana", "Morocco", "Ethiopia", "Senegal", "Zambia"],
    decoys: ["Peru", "Nepal", "Laos", "Ecuador", "Cambodia", "Bolivia"],
  },
  {
    id: "elements",
    prompt: "Tap all the chemical elements",
    topic: "chemical elements",
    correct: ["Neon", "Zinc", "Iodine", "Krypton", "Cobalt", "Titanium"],
    decoys: ["Bronze", "Brass", "Steel", "Quartz", "Marble", "Ozone"],
  },
  {
    id: "mammals",
    prompt: "Tap all the mammals",
    topic: "mammals",
    correct: ["Dolphin", "Bat", "Platypus", "Whale", "Otter", "Hedgehog"],
    decoys: ["Penguin", "Shark", "Crocodile", "Octopus", "Salamander", "Ostrich"],
  },
  {
    id: "eu-members",
    prompt: "Tap all the EU member countries",
    topic: "EU members",
    correct: ["Ireland", "Portugal", "Sweden", "Poland", "Croatia", "Denmark"],
    decoys: ["Norway", "Switzerland", "Iceland", "Serbia", "Albania", "United Kingdom"],
  },
  {
    id: "us-states",
    prompt: "Tap all the US states (the rest are Canadian provinces or territories)",
    topic: "US states",
    correct: ["Idaho", "Vermont", "Kansas", "Oregon", "Delaware", "Montana"],
    decoys: ["Alberta", "Manitoba", "Ontario", "Saskatchewan", "Yukon", "Nova Scotia"],
  },
  {
    id: "south-america",
    prompt: "Tap all the South American countries",
    topic: "South American countries",
    correct: ["Chile", "Uruguay", "Paraguay", "Suriname", "Colombia", "Peru"],
    decoys: ["Panama", "Honduras", "Mexico", "Jamaica", "Cuba", "Belize"],
  },
  {
    id: "multiples-of-7",
    prompt: "Tap all the multiples of 7",
    topic: "multiples of 7",
    correct: ["14", "35", "49", "63", "84", "91"],
    decoys: ["27", "44", "52", "65", "74", "87"],
  },
  {
    id: "string-instruments",
    prompt: "Tap all the string instruments",
    topic: "string instruments",
    correct: ["Violin", "Cello", "Viola", "Harp", "Double bass", "Guitar"],
    decoys: ["Flute", "Trumpet", "Clarinet", "Trombone", "Oboe", "Saxophone"],
  },
  {
    id: "shakespeare",
    prompt: "Tap all the Shakespeare plays (the rest are novels)",
    topic: "Shakespeare plays",
    correct: ["Hamlet", "Macbeth", "Othello", "Twelfth Night", "The Tempest", "King Lear"],
    decoys: ["Pride and Prejudice", "Moby-Dick", "Jane Eyre", "Great Expectations", "Dracula", "Frankenstein"],
  },
  {
    id: "olympic-sports",
    prompt: "Tap all the Summer Olympic sports",
    topic: "Olympic sports",
    correct: ["Archery", "Fencing", "Judo", "Skateboarding", "Badminton", "Rowing"],
    decoys: ["Chess", "Darts", "Bowling", "Snooker", "Netball", "Kickball"],
  },
  {
    id: "national-capitals",
    prompt: "Tap all the national capitals",
    topic: "national capitals",
    correct: ["Ottawa", "Canberra", "Ankara", "Wellington", "Bern", "Brasilia"],
    decoys: ["Sydney", "Toronto", "Istanbul", "Auckland", "Zurich", "Rio de Janeiro"],
  },
  {
    id: "palindromes",
    prompt: "Tap all the palindromes (words spelled the same backwards)",
    topic: "palindromes",
    correct: ["level", "radar", "kayak", "civic", "rotor", "madam"],
    decoys: ["paper", "water", "robot", "magic", "lemon", "siren"],
  },
];
