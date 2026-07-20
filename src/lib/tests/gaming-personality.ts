import { TestDefinition } from "../types";

// Gaming Personality — 4 Bartle-inspired player types (NEW).
// Type quiz: ipsative pick-top with flat-profile -> "The All-Rounder".
// Each axis mixes forward + reverse items so straight-lining -> balanced.
// Types loosely inspired by Bartle's player taxonomy.

const questions = [
  // Achiever — grinding, 100%-ing, completion, leveling
  { id: "gp_ac1", text: "I'm not done with a game until I've hit 100% completion.", type: "likert" as const, axis: "achiever", direction: 1 as const },
  { id: "gp_ac2", text: "Leveling up and unlocking every reward is what keeps me playing.", type: "likert" as const, axis: "achiever", direction: 1 as const },
  { id: "gp_ac3", text: "I'll happily grind for hours to max out my stats or gear.", type: "likert" as const, axis: "achiever", direction: 1 as const },
  { id: "gp_ac4", text: "Chasing trophies and achievements isn't really my thing.", type: "likert" as const, axis: "achiever", direction: -1 as const },
  { id: "gp_ac5", text: "I'll leave a game unfinished the moment I get a little bored.", type: "likert" as const, axis: "achiever", direction: -1 as const },

  // Explorer — discovering secrets/lore/maps, trying everything
  { id: "gp_ex1", text: "I love wandering off the main path to find hidden areas.", type: "likert" as const, axis: "explorer", direction: 1 as const },
  { id: "gp_ex2", text: "Digging into a game's lore and backstory is half the fun.", type: "likert" as const, axis: "explorer", direction: 1 as const },
  { id: "gp_ex3", text: "I like testing weird mechanics just to see what happens.", type: "likert" as const, axis: "explorer", direction: 1 as const },
  { id: "gp_ex4", text: "I stick to the obvious route and skip the side stuff.", type: "likert" as const, axis: "explorer", direction: -1 as const },
  { id: "gp_ex5", text: "Secret rooms and easter eggs don't really tempt me.", type: "likert" as const, axis: "explorer", direction: -1 as const },

  // Socializer — playing with friends, co-op, chat/community
  { id: "gp_so1", text: "Games are way better when I'm playing with friends.", type: "likert" as const, axis: "socializer", direction: 1 as const },
  { id: "gp_so2", text: "I'm usually the one organizing the group for co-op nights.", type: "likert" as const, axis: "socializer", direction: 1 as const },
  { id: "gp_so3", text: "Chatting in the lobby or community is a big part of the fun.", type: "likert" as const, axis: "socializer", direction: 1 as const },
  { id: "gp_so4", text: "I'd rather play solo than deal with other people.", type: "likert" as const, axis: "socializer", direction: -1 as const },
  { id: "gp_so5", text: "Voice chat and group play mostly drain me.", type: "likert" as const, axis: "socializer", direction: -1 as const },

  // Competitor — winning, ranked, PvP, being the best
  { id: "gp_co1", text: "I play to win — a loss actually stings.", type: "likert" as const, axis: "competitor", direction: 1 as const },
  { id: "gp_co2", text: "Climbing the ranked ladder is what gets me hyped.", type: "likert" as const, axis: "competitor", direction: 1 as const },
  { id: "gp_co3", text: "Beating other players head-to-head is the best feeling in gaming.", type: "likert" as const, axis: "competitor", direction: 1 as const },
  { id: "gp_co4", text: "I don't really care where I land on the leaderboard.", type: "likert" as const, axis: "competitor", direction: -1 as const },
  { id: "gp_co5", text: "PvP stress isn't worth it — I'd skip ranked entirely.", type: "likert" as const, axis: "competitor", direction: -1 as const },
];

export const gamingPersonality: TestDefinition = {
  slug: "gaming-personality",
  title: "What's Your Gaming Personality",
  category: "personality",
  description:
    "Completionist, explorer, social player, or competitor? Find out what actually pulls you into a game.",
  whatYoullLearn:
    "The player type you lean into most, what it says about how you have fun, and a gentle watch-out for it.",
  timeMinutes: 4,
  itemCount: 20,
  license: "Original TypologyQuiz items, inspired by Bartle's player taxonomy (self-reflection only).",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "achiever", label: "Achiever", lowLabel: "Low", highLabel: "High", description: "Completion, leveling, and 100%-ing everything." },
    { key: "explorer", label: "Explorer", lowLabel: "Low", highLabel: "High", description: "Discovering secrets, lore, and every corner of the map." },
    { key: "socializer", label: "Socializer", lowLabel: "Low", highLabel: "High", description: "Co-op, friends, and community." },
    { key: "competitor", label: "Competitor", lowLabel: "Low", highLabel: "High", description: "Ranked, PvP, and being the best." },
  ],
  typeMeta: {
    achiever: {
      label: "The Completionist",
      description:
        "Every checkbox ticked, every level maxed — you love the satisfaction of finishing what you start. Strength: serious follow-through and patience. Watch-out: it's okay to drop a game you've stopped enjoying, even at 87%.",
    },
    explorer: {
      label: "The Explorer",
      description:
        "You wander, poke, and discover — the map and the lore are the real reward. Strength: curiosity that finds what everyone else walks past. Watch-out: sometimes the main quest is worth finishing too.",
    },
    socializer: {
      label: "The Social Player",
      description:
        "For you, games are a place to hang out — co-op nights and group chat make it fun. Strength: you turn playing into connecting. Watch-out: a quiet solo session now and then is allowed to recharge.",
    },
    competitor: {
      label: "The Competitor",
      description:
        "You're here to win — ranked, PvP, top of the board. Strength: drive and focus that push you to improve fast. Watch-out: a rough losing streak isn't a verdict on you; step back before it sours the fun.",
    },
  },
  balanced: {
    label: "The All-Rounder",
    description:
      "No single style owns you — some nights you grind, some you explore, some you're all about friends or the win. Flexible and hard to pin down, which means most games have something for you.",
  },
  resultType: "radar",
  funFacts: [
    "Researchers have long grouped players into a handful of types — most people are a blend, not just one.",
    "Your gaming type can shift with the game itself: a chill explorer in one title can turn full competitor in another.",
    "Compare with friends — an achiever plus an explorer basically 100% a game together, one grinding and one mapping every secret.",
  ],
  disclaimer:
    "A light vibe check on how you like to play, not a fixed label. Your gaming style shifts with mood, game, and who you're playing with.",
};
