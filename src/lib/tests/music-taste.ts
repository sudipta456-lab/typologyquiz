import { TestDefinition } from "../types";

// Music Taste Personality — 5 dimensions (NEW).
// Type quiz: ipsative pick-top with flat-profile -> "The Omnivore".
// Each axis mixes forward + reverse items so straight-lining -> balanced.
// Dimensions loosely inspired by the MUSIC model of musical preferences.

const questions = [
  // Mellow — chill, acoustic, soft, lo-fi
  { id: "mt_me1", text: "My favorite playlists are the calm, easygoing kind I can melt into.", type: "likert" as const, axis: "mellow", direction: 1 as const },
  { id: "mt_me2", text: "Soft, acoustic, or lo-fi tracks are my go-to for studying or chilling.", type: "likert" as const, axis: "mellow", direction: 1 as const },
  { id: "mt_me3", text: "I reach for gentle, mellow music way more than high-energy stuff.", type: "likert" as const, axis: "mellow", direction: 1 as const },
  { id: "mt_me4", text: "Slow, quiet songs bore me — I need something with more punch.", type: "likert" as const, axis: "mellow", direction: -1 as const },

  // Unpretentious — mainstream pop/country, sing-along, feel-good
  { id: "mt_un1", text: "Give me a catchy, feel-good song everyone can sing along to.", type: "likert" as const, axis: "unpretentious", direction: 1 as const },
  { id: "mt_un2", text: "I don't overthink music — if it's fun and easy to like, I'm in.", type: "likert" as const, axis: "unpretentious", direction: 1 as const },
  { id: "mt_un3", text: "The songs stuck in my head are usually big, sing-along hits.", type: "likert" as const, axis: "unpretentious", direction: 1 as const },
  { id: "mt_un4", text: "Straightforward crowd-pleaser songs feel too plain for me.", type: "likert" as const, axis: "unpretentious", direction: -1 as const },

  // Sophisticated — jazz/classical/complex/lyrical
  { id: "mt_so1", text: "I love music with layers — the kind that rewards a closer listen.", type: "likert" as const, axis: "sophisticated", direction: 1 as const },
  { id: "mt_so2", text: "Clever lyrics or complex arrangements genuinely impress me.", type: "likert" as const, axis: "sophisticated", direction: 1 as const },
  { id: "mt_so3", text: "I'll happily dig into a song that most people find a bit 'much'.", type: "likert" as const, axis: "sophisticated", direction: 1 as const },
  { id: "mt_so4", text: "If a track is too intricate or artsy, I usually lose interest.", type: "likert" as const, axis: "sophisticated", direction: -1 as const },

  // Intense — rock/metal/loud/aggressive
  { id: "mt_in1", text: "Loud, hard-hitting music is exactly what I want turned up.", type: "likert" as const, axis: "intense", direction: 1 as const },
  { id: "mt_in2", text: "I love the raw energy of heavy guitars and pounding drums.", type: "likert" as const, axis: "intense", direction: 1 as const },
  { id: "mt_in3", text: "When I need a boost, I blast something fierce and aggressive.", type: "likert" as const, axis: "intense", direction: 1 as const },
  { id: "mt_in4", text: "Anything too loud or aggressive is an instant skip for me.", type: "likert" as const, axis: "intense", direction: -1 as const },

  // Contemporary — rap/hip-hop/EDM/pop hits, rhythmic
  { id: "mt_co1", text: "A heavy beat I can move to is what makes a song for me.", type: "likert" as const, axis: "contemporary", direction: 1 as const },
  { id: "mt_co2", text: "Rap, hip-hop, or EDM is usually what's playing in my headphones.", type: "likert" as const, axis: "contemporary", direction: 1 as const },
  { id: "mt_co3", text: "I keep up with the latest rhythmic hits and drops.", type: "likert" as const, axis: "contemporary", direction: 1 as const },
  { id: "mt_co4", text: "Beat-driven, of-the-moment tracks just aren't my thing.", type: "likert" as const, axis: "contemporary", direction: -1 as const },
];

export const musicTaste: TestDefinition = {
  slug: "music-taste",
  title: "Music Taste Personality",
  category: "perception",
  description:
    "Chill curator, feel-good fan, deep listener, intensity seeker, or beat rider? Find the vibe your ears keep chasing.",
  whatYoullLearn:
    "The musical dimension you lean into most, what it says about how you listen, and the little watch-out that comes with it.",
  timeMinutes: 4,
  itemCount: 20,
  license: "Original TypologyQuiz items, inspired by the MUSIC model of musical preferences (self-reflection only).",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "mellow", label: "Mellow", lowLabel: "Low", highLabel: "High", description: "Chill, soft, acoustic, easy-listening vibes." },
    { key: "unpretentious", label: "Feel-Good", lowLabel: "Low", highLabel: "High", description: "Catchy, sing-along, crowd-pleasing songs." },
    { key: "sophisticated", label: "Deep", lowLabel: "Low", highLabel: "High", description: "Complex, lyrical, layered music." },
    { key: "intense", label: "Intense", lowLabel: "Low", highLabel: "High", description: "Loud, heavy, high-energy sound." },
    { key: "contemporary", label: "Rhythmic", lowLabel: "Low", highLabel: "High", description: "Beat-driven rap, hip-hop, and EDM." },
  ],
  typeMeta: {
    mellow: {
      label: "The Chill Curator",
      description:
        "You use music to slow the world down — soft, warm, easy to sink into. Strength: your playlists are pure comfort and focus fuel. Watch-out: let something loud crash the party once in a while.",
    },
    unpretentious: {
      label: "The Feel-Good Fan",
      description:
        "You don't overthink it — if a song is fun and singable, it's a winner. Strength: your taste is joyful and never gatekept. Watch-out: the occasional weird deep cut might surprise you if you let it in.",
    },
    sophisticated: {
      label: "The Deep Listener",
      description:
        "You chase the songs with layers, clever lyrics, and something to unpack. Strength: you actually hear the craft. Watch-out: not every track needs to be a masterpiece — sometimes a dumb catchy hook just slaps.",
    },
    intense: {
      label: "The Intensity Seeker",
      description:
        "You want music with force — loud, raw, turned all the way up. Strength: it's a genuine energy and mood boost. Watch-out: your ears (and your neighbors) appreciate the occasional volume break.",
    },
    contemporary: {
      label: "The Beat Rider",
      description:
        "You live for rhythm — the drop, the beat, the thing you can move to. Strength: you're plugged into what's now. Watch-out: don't sleep on the slower stuff; some of it hits different.",
    },
  },
  balanced: {
    label: "The Omnivore",
    description:
      "No single sound owns you — you listen across everything, from mellow to heavy to beat-driven, depending on the mood. Your playlist is impossible to predict, in the best way.",
  },
  resultType: "orbit",
  funFacts: [
    "Researchers have mapped musical taste onto a handful of broad dimensions — mellow, unpretentious, sophisticated, intense, and contemporary — and most people are a blend, not just one.",
    "Your taste isn't random: these dimensions tend to line up with things like how much you crave calm versus stimulation.",
    "Compare with friends — a chill curator and an intensity seeker sharing the aux is how road-trip playlists get interesting.",
  ],
  disclaimer:
    "A light vibe check on how you listen, not a verdict on your personality. Your music taste shifts with mood, phase, and whatever's on repeat this month.",
};
