import type { Category } from "./types";

// Accents reuse the four site brand colors (--mark-blue, --mark-coral, --mark-teal, --mark-pink).
const BLUE = "#0795ea";
const CORAL = "#f9684d";
const TEAL = "#07ad9c";
const PINK = "#f47a9e";

/** Names and codes match content/interactive/briefs.json. Safe for client use: no quiz content. */
export const CATEGORIES: Category[] = [
  { id: "personality-choices", code: "PC", name: "Personality & Choices", description: "Small scenarios that show how you like to decide, plan and spend your time.", accent: BLUE },
  { id: "friends-social-play", code: "FS", name: "Friends & Social Play", description: "Games to play with the people next to you, from pass-and-play rounds to group puzzles.", accent: PINK },
  { id: "movies-tv", code: "MT", name: "Movies & TV", description: "Screen stories, genres and the craft behind them, with no clips or posters needed.", accent: CORAL },
  { id: "music", code: "MU", name: "Music", description: "Rhythm, pitch, instruments and the ideas behind songs, with listening tasks that use original tones.", accent: TEAL },
  { id: "geography-travel", code: "GT", name: "Geography & Travel", description: "Maps, routes, places and the practical puzzles of getting somewhere.", accent: BLUE },
  { id: "science-nature", code: "SN", name: "Science & Nature", description: "Living things, materials, weather and space, explained through short tasks.", accent: TEAL },
  { id: "history-culture", code: "HC", name: "History & Culture", description: "Timelines, traditions and the stories people have kept, told with sources.", accent: CORAL },
  { id: "food-everyday-life", code: "FE", name: "Food & Everyday Life", description: "Kitchens, habits, home and the little decisions of an ordinary day.", accent: PINK },
  { id: "sports-games", code: "SG", name: "Sports & Games", description: "Rules, strategy and play, from pitches and boards to puzzles on paper.", accent: BLUE },
  { id: "logic-wordplay", code: "LW", name: "Logic & Wordplay", description: "Deduction, patterns and language puzzles with answers you can check.", accent: CORAL },
];

export const CATEGORY_MAP: ReadonlyMap<string, Category> = new Map(CATEGORIES.map((category) => [category.id, category]));
