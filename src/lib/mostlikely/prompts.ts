/**
 * Most Likely To prompt pool.
 *
 * Curation contract (do not break it when adding prompts):
 *   - Kind-spirited and school-safe. Every award is one someone would be
 *     happy to win in front of the whole class.
 *   - Zero prompts about appearance, romance rankings, money, or anything
 *     that could single a person out to be laughed AT instead of with.
 *   - No emoji, no em-dashes (house style, docs/QUIZ_STYLE.md).
 *
 * Names never touch these modules: prompts are static content, the
 * friend names live only in component state and the downloaded image.
 */

export type MostLikelyPrompt = {
  id: string;
  /** Full prompt shown during voting, always "Most likely to ..." */
  text: string;
  /** Short award title used on the ceremony list and the share card */
  award: string;
};

export const ROUND_SIZE = 15;
export const MIN_FRIENDS = 2;
export const MAX_FRIENDS = 8;
export const MAX_FRIEND_NAME = 20;

export const MOST_LIKELY_PROMPTS: MostLikelyPrompt[] = [
  { id: "ml01", text: "Most likely to become famous for something ridiculous", award: "Famous For No Reason" },
  { id: "ml02", text: "Most likely to survive a horror movie", award: "Horror Movie Survivor" },
  { id: "ml03", text: "Most likely to text back in 0.2 seconds", award: "Fastest Thumbs Alive" },
  { id: "ml04", text: "Most likely to laugh at the worst possible moment", award: "Worst Timing Laugher" },
  { id: "ml05", text: "Most likely to befriend a stray cat on the way home", award: "Stray Cat Magnet" },
  { id: "ml06", text: "Most likely to win a game show with useless trivia", award: "Useless Trivia Champion" },
  { id: "ml07", text: "Most likely to start a podcast about absolutely nothing", award: "Podcast Founder" },
  { id: "ml08", text: "Most likely to remember everyone's birthday without an app", award: "Human Calendar" },
  { id: "ml09", text: "Most likely to trip over nothing and play it off perfectly", award: "Smoothest Recovery" },
  { id: "ml10", text: "Most likely to bring snacks nobody asked for but everyone needed", award: "Snack Provider" },
  { id: "ml11", text: "Most likely to know every lyric to every song", award: "Walking Lyric Book" },
  { id: "ml12", text: "Most likely to become a teacher's favorite by accident", award: "Accidental Favorite" },
  { id: "ml13", text: "Most likely to sleep through three alarms", award: "Deepest Sleeper" },
  { id: "ml14", text: "Most likely to reveal a secret talent out of nowhere", award: "Hidden Talent" },
  { id: "ml15", text: "Most likely to talk their way out of anything", award: "Smooth Talker" },
  { id: "ml16", text: "Most likely to plan an entire trip at 2am", award: "Midnight Planner" },
  { id: "ml17", text: "Most likely to cry at a movie trailer", award: "Trailer Crier" },
  { id: "ml18", text: "Most likely to invent a new inside joke every week", award: "Inside Joke Factory" },
  { id: "ml19", text: "Most likely to become a legend in the group chat", award: "Group Chat Legend" },
  { id: "ml20", text: "Most likely to say one more episode and finish the season", award: "One More Episode" },
  { id: "ml21", text: "Most likely to make friends with the new kid first", award: "First Friend" },
  { id: "ml22", text: "Most likely to win a staring contest against a statue", award: "Staring Champion" },
  { id: "ml23", text: "Most likely to answer every question with a movie quote", award: "Movie Quote Machine" },
  { id: "ml24", text: "Most likely to have 999 unread notifications and zero stress", award: "Unbothered Inbox" },
  { id: "ml25", text: "Most likely to rescue the group from an awkward silence", award: "Silence Breaker" },
  { id: "ml26", text: "Most likely to start a trend without noticing", award: "Accidental Trendsetter" },
  { id: "ml27", text: "Most likely to become a quiz show host", award: "Future Quiz Host" },
  { id: "ml28", text: "Most likely to write a book about this friend group", award: "Group Historian" },
  { id: "ml29", text: "Most likely to know a weirdly specific fact for every situation", award: "Fact Dispenser" },
  { id: "ml30", text: "Most likely to laugh so hard no sound comes out", award: "Silent Laugher" },
  { id: "ml31", text: "Most likely to try adopting every animal at the shelter", award: "Shelter Softie" },
  { id: "ml32", text: "Most likely to reply with a meme instead of words", award: "Meme Correspondent" },
  { id: "ml33", text: "Most likely to stay calm while everything goes sideways", award: "Chaos Anchor" },
  { id: "ml34", text: "Most likely to invent something the world didn't know it needed", award: "Future Inventor" },
  { id: "ml35", text: "Most likely to give a pep talk that actually works", award: "Pep Talk Champion" },
  { id: "ml36", text: "Most likely to get lost with the map open", award: "Directionally Gifted" },
  { id: "ml37", text: "Most likely to carry the group project to glory", award: "Group Project Hero" },
  { id: "ml38", text: "Most likely to still be in this friend group in 50 years", award: "Lifetime Member" },
  { id: "ml39", text: "Most likely to cheer the loudest from the sidelines", award: "Loudest Supporter" },
  { id: "ml40", text: "Most likely to name their future car and talk to it", award: "Car Whisperer" },
];

/** Fisher-Yates over a copy; the pool itself is never reordered. */
export function samplePrompts(count = ROUND_SIZE): MostLikelyPrompt[] {
  const pool = [...MOST_LIKELY_PROMPTS];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
}

export function cleanFriendName(raw: string): string {
  return raw.replace(/\s+/g, " ").trim().slice(0, MAX_FRIEND_NAME);
}
