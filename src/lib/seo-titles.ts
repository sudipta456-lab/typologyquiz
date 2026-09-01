/**
 * SEO headline titles for quiz pages (GROWTH_PLAN section 4 "title grammar").
 *
 * These feed the <title> tag and og:title in /test/[slug] metadata ONLY.
 * On-page H1s, slugs, and share cards keep the canonical TestDefinition.title.
 *
 * House rules for every entry:
 * - Unique across the map, under 60 characters where possible.
 * - Keyword-bearing: the quiz subject stays in the title.
 * - Truthful: challenge/identity framings ("Which X Are You?", "Can You..."),
 *   never fabricated statistics presented as measured.
 * - No em-dashes, no emoji.
 *
 * The site-name suffix (" . TypologyQuiz") comes from the layout title
 * template; do not append it here.
 */

export const SEO_TITLES: Record<string, string> = {
  // 2026 additions: general / North American
  "mental-age": "Mental Age Test: How Old Is Your Brain Really?",
  "delulu-level": "Delulu Level Test: How Delusional Are You, Honestly?",
  "group-chat-archetype": "Which Group Chat Archetype Are You?",
  "flag-profile": "Red Flag or Green Flag? Get Your Honest Profile",
  "actually-the-problem": "Are You Actually the Problem? Take the Test",
  "internet-persona": "Which Internet Persona Are You?",
  "emotional-os": "Emotional OS Test: What System Runs Your Feelings?",
  "overthinker-level": "Overthinking Test: What Is Your Overthinker Level?",
  "brain-2am": "Your Brain at 2 AM: What Keeps You Up at Night?",
  "cringe-check": "Cringe Check: How Cringe Are You, Really?",
  "friends-see-you": "How Do Your Friends Actually See You? Quiz",
  // Korea
  "personal-color": "Personal Color Test: Which Color Season Are You?",
  "saju-pillar": "Saju Test: Which Korean Four-Pillar Type Are You?",
  "kkotmal-flower": "Kkotmal Test: Which Korean Flower Are You?",
  "kdrama-archetype": "Which K-Drama Character Are You?",
  "seoul-dating-tier": "Seoul Dating Test: What Tier Is Your Love Life?",
  // Japan
  "ketsueki-gata": "Japanese Blood Type Test: Which Ketsueki-Gata Are You?",
  "doubutsu-uranai": "Doubutsu Uranai: Which Japanese Animal Are You?",
  "shinrigaku-scene": "Japanese Psychology Test: What Does Your Scene Say?",
  "anime-protagonist": "Which Anime Protagonist Are You? Take the Test",
  // China
  "tangping-level": "Tangping Test: How Lying-Flat Are You?",
  "neijuan-race": "Neijuan Test: How Deep in the Rat Race Are You?",
  "wanghong-persona": "Wanghong Test: Which Influencer Persona Are You?",
  "huaren-netizen": "Huaren Netizen Test: Which Chinese Netizen Are You?",
  // Iran
  "hafez-mirror": "Fal-e Hafez Quiz: Which Verse Mirrors You?",
  "fal-qahveh": "Fal-e Qahveh Quiz: What Does Your Coffee Cup Say?",
  "shahnameh-hero": "Which Shahnameh Hero Are You?",
  "shahr-soul": "Which Iranian City Matches Your Soul? Shahr Quiz",
  // Arab world
  "ism-vibe": "Ism Vibe Quiz: What Does Your Name Energy Say?",
  "abjad-number": "Abjad Number Quiz: What Is Your Letter Number?",
  "badiya-desert": "Which Desert Archetype Are You? Badiya Quiz",
  // Africa
  "akan-day-name": "Akan Day Name Quiz: Which Day Were You Born to Be?",
  "anansi-archetype": "Which African Folklore Archetype Are You?",
  "naija-aunty": "Which Naija Aunty or Uncle Are You?",
  "nairobi-vibe": "Nairobi Vibe Test: Which Nairobi Energy Are You?",
  // India
  "prakriti-dosha": "Dosha Quiz: Vata, Pitta, or Kapha, Which Are You?",
  "nakshatra-mirror": "Nakshatra Quiz: Which Star Sign Mirrors You?",
  "filmi-hero": "Which Bollywood Filmi Hero Are You?",
  "desi-family-role": "Which Desi Family Role Do You Play?",
  // Europe
  "four-humors": "Four Humors Test: Which Temperament Are You?",
  // Core catalog
  "night-owl": "Night Owl or Early Bird? Find Your Chronotype",
  "humor-style": "What Is Your Sense of Humor? Humor Style Quiz",
  "enneagram-lite": "Which Enneagram Type Are You? Free Lite Test",
  "gaming-personality": "What Is Your Gaming Personality? Player Type Quiz",
  "growth-mindset": "Growth or Fixed Mindset? Test Yourself",
  "care-language": "How Do You Show You Care? Care Language Quiz",
  "social-persona": "Which Social Media Persona Are You?",
  "procrastination-type": "What Is Your Procrastination Style? Take the Quiz",
  "music-taste": "What Does Your Music Taste Say About You? Quiz",
  "decision-style": "Overthinker or Gut-Truster? Decision Style Quiz",
  "optimist-realist": "Optimist or Realist? See Where You Land",
  grit: "How Gritty Are You? The Grit Quiz",
  "how-bold": "How Bold Are You? Test Your Daring Level",
  "empathy-type": "Head or Heart? Find Your Empathy Type",
  "friend-role": "Which Friend Are You in Your Group? Friend Role Quiz",
  "social-battery": "Social Battery Test: How Fast Do You Drain?",
  "attachment-style": "What Is Your Attachment Style? Friends and Crushes",
  "texting-style": "What Is Your Texting Style? Take the Quiz",
  "class-archetype": "Which Class Project Archetype Are You?",
  "conflict-style": "What Is Your Conflict Style? Take the Quiz",
  "study-energy": "What Is Your Study Energy? Find Your Focus Type",
  "fomo-style": "FOMO Quiz: What Is Your Plans and FOMO Style?",
  "career-interests": "Career Interests Quiz: What Work Fits You? RIASEC",
  // Instruments
  "mini-ipip": "Big Five Personality Test: Free Mini-IPIP Quiz",
  "8values": "8values Political Test: Where Do Your Values Land?",
  "crt-7": "Can You Get 7/7 on the Cognitive Reflection Test?",
  vviq: "VVIQ Test: How Vivid Is Your Mind's Eye?",
};

/** Headline title for a quiz page, falling back to the canonical title. */
export function getSeoTitle(slug: string, fallback: string): string {
  return SEO_TITLES[slug] ?? fallback;
}
