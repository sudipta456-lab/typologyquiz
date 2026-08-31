import { TestDefinition } from "../types";

// Personal Color (퍼스널 컬러): Korean four-season color analysis, quiz-ified.
// Type quiz over 4 season axes. Result = your palette family.

const questions = [
  // Spring — warm, light, bright
  { id: "pc_sp1", text: "Coral, peach, and warm coral-pink make me look awake and healthy.", type: "likert" as const, axis: "spring", direction: 1 as const },
  { id: "pc_sp2", text: "People say I have a bright, fresh energy about me.", type: "likert" as const, axis: "spring", direction: 1 as const },
  { id: "pc_sp3", text: "Muted, grayish colors make me look tired.", type: "likert" as const, axis: "spring", direction: 1 as const },
  // Summer — cool, light, soft
  { id: "pc_su1", text: "Soft blues, lavender, and dusty pink feel like 'my' colors.", type: "likert" as const, axis: "summer", direction: 1 as const },
  { id: "pc_su2", text: "My undertone leans cool; silver jewelry looks better on me than gold.", type: "likert" as const, axis: "summer", direction: 1 as const },
  { id: "pc_su3", text: "Harsh black next to my face overwhelms me; softer neutrals look better.", type: "likert" as const, axis: "summer", direction: 1 as const },
  // Autumn — warm, deep, muted
  { id: "pc_au1", text: "Rust, olive, mustard, and brown look rich on me, not drab.", type: "likert" as const, axis: "autumn", direction: 1 as const },
  { id: "pc_au2", text: "Gold jewelry clearly suits me more than silver.", type: "likert" as const, axis: "autumn", direction: 1 as const },
  { id: "pc_au3", text: "Icy pastels and neon shades look off on me.", type: "likert" as const, axis: "autumn", direction: 1 as const },
  // Winter — cool, high contrast
  { id: "pc_wi1", text: "Pure black and crisp white look sharp on me, not harsh.", type: "likert" as const, axis: "winter", direction: 1 as const },
  { id: "pc_wi2", text: "Jewel tones like emerald, royal blue, and fuchsia feel powerful on me.", type: "likert" as const, axis: "winter", direction: 1 as const },
  { id: "pc_wi3", text: "Earthy, faded tones blend into me instead of popping.", type: "likert" as const, axis: "winter", direction: 1 as const },
];

export const personalColor: TestDefinition = {
  slug: "personal-color",
  title: "Personal Color (퍼스널 컬러)",
  category: "perception",
  description:
    "Korea's favorite style test. Find your season (Spring, Summer, Autumn, or Winter) and the palette that makes you glow.",
  whatYoullLearn:
    "Your personal color season based on undertone, contrast, and which shades genuinely flatter you.",
  timeMinutes: 4,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "spring", label: "Spring", lowLabel: "Low", highLabel: "High", description: "Warm, light, bright, fresh." },
    { key: "summer", label: "Summer", lowLabel: "Low", highLabel: "High", description: "Cool, soft, muted, gentle." },
    { key: "autumn", label: "Autumn", lowLabel: "Low", highLabel: "High", description: "Warm, deep, earthy, rich." },
    { key: "winter", label: "Winter", lowLabel: "Low", highLabel: "High", description: "Cool, crisp, high-contrast." },
  ],

  terms: [
    {
      term: "퍼스널 컬러 (Personal Color)",
      note: "Konglish for 'personal color analysis', a hugely popular Korean styling system that matches people to palettes by skin undertone and contrast.",
    },
    {
      term: "Undertone",
      note: "The temperature under your skin: warm (golden/peachy) or cool (pink/blue). It decides whether gold or silver jewelry flatters you more.",
    },
    {
      term: "Four Season Typing",
      note: "The classic system this quiz uses: Spring (warm+bright), Summer (cool+soft), Autumn (warm+deep), Winter (cool+crisp). Seoul has entire studios for it.",
    },
  ],
  typeMeta: {
    spring: {
      label: "Spring: Warm & Bright",
      description:
        "Your palette: coral, peach, warm pinks, fresh greens, golden yellow. You glow in colors that look like a market in April. Skip heavy charcoal and icy tones near your face.",
    },
    summer: {
      label: "Summer: Cool & Soft",
      description:
        "Your palette: powder blue, lavender, dusty rose, soft navy, muted teal. Gentle, airy, quietly expensive-looking. Skip harsh orange and stark black. Your power move is looking calm in photos without trying.",
    },
    autumn: {
      label: "Autumn: Warm & Deep",
      description:
        "Your palette: rust, olive, mustard, camel, chocolate, forest green. Rich like a film set in October. Skip neon and icy pastels. Earth tones look intentional on you; gold is your metal forever.",
    },
    winter: {
      label: "Winter: Cool & Crisp",
      description:
        "Your palette: true black, pure white, emerald, royal blue, fuchsia, crimson. Colors that swallow other people look like armor on you. Skip dusty beiges; you were born for statement colors.",
    },
  },
  balanced: {
    label: "The Neutral Chameleon",
    description:
      "No single season owns you; stylists call this neutral undertone. Annoying for labels, great for your closet: several palettes work on you. Start with soft mid-tones and adjust warmer or cooler by trial.",
  },
  resultType: "radar",
  funFacts: [
    "Personal color studios are a real industry in South Korea; people get professionally typed before rebuilding a wardrobe.",
    "The four-season system started in the West, became a K-beauty staple, then spread back out globally.",
  ],
  disclaimer:
    "This quiz is for fun and style exploration. Professional analysis uses draping and lighting, so treat this result as a starting point, not a verdict.",
};
