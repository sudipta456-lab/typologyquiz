/** Recurring editorial windows, using the publisher's calendar (not build time). */
export const THEME_TIME_ZONE = 'America/Edmonton';
export type ThemeMotif = 'portal' | 'orbit' | 'paper' | 'garden' | 'signal' | 'atlas';
export type ThemeDetour = { label: string; quizId: string; hook: string };
export type HomepageTheme = {
  id: string; month: number; fromDay: number; name: string; title: string;
  description: string; motif: ThemeMotif; accent: string; companion: string;
  detours: readonly ThemeDetour[];
};

export const HOMEPAGE_THEMES: readonly HomepageTheme[] = [
  { id: 'fresh-page', month: 1, fromDay: 1, name: 'Fresh page', title: 'A new year. An open tab.', description: 'Skip the perfect reinvention. Follow one small curiosity instead.', motif: 'orbit', accent: '#bde7fc', companion: '#ddd0ff', detours: [
    { label: 'A blank day', quizId: 'PC-01', hook: 'Your plans disappear. What do you do with the space?' },
    { label: 'Tiny rules', quizId: 'PC-02', hook: 'Which everyday decisions deserve a rule of their own?' },
    { label: 'A side quest', quizId: 'PC-04', hook: 'An ordinary errand becomes a detour. Follow it?' },
  ] },
  { id: 'better-together', month: 2, fromDay: 1, name: 'Better together', title: 'Send a little curiosity.', description: 'A shared question can be a better conversation starter than another reaction.', motif: 'signal', accent: '#ffd0df', companion: '#dacfff', detours: [
    { label: 'A shared mystery', quizId: 'FS-27', hook: 'Reconstruct the final performance at an invented theatre.' },
    { label: 'Team decisions', quizId: 'FS-26', hook: 'Pass the right clues through a fictional lost-and-found relay.' },
    { label: 'What matters', quizId: 'PC-06', hook: 'Spend an imaginary budget on the values you want to keep.' },
  ] },
  { id: 'new-growth', month: 3, fromDay: 1, name: 'New growth', title: 'Notice the small things.', description: 'Tiny observations. Surprisingly good questions. A fresh way to look outside.', motif: 'garden', accent: '#c9edb9', companion: '#f7ddad', detours: [
    { label: 'Outside evidence', quizId: 'SN-01', hook: 'Separate a backyard observation from a tempting explanation.' },
    { label: 'Weather clues', quizId: 'SN-04', hook: 'Read the evidence before you reach for a forecast.' },
    { label: 'Connected lives', quizId: 'SN-06', hook: 'Trace what changes when one part of a food web moves.' },
  ] },
  { id: 'human-in-the-loop', month: 3, fromDay: 20, name: 'Human in the loop', title: 'Curiosity is human.', description: 'Before you share a claim, follow the evidence. Keep your judgment in the loop.', motif: 'signal', accent: '#beece2', companion: '#c9d8ff', detours: [
    { label: 'Source check', quizId: 'HC-04', hook: 'Tell a fact, a source claim and an interpretation apart.' },
    { label: 'Echo chamber', quizId: 'HC-26', hook: 'Five repeated claims do not necessarily mean five sources.' },
    { label: 'Missing context', quizId: 'HC-03', hook: 'An archive has a gap. What can the surviving pages establish?' },
  ] },
  { id: 'margin-notes', month: 4, fromDay: 1, name: 'Margin notes', title: 'For the footnotes.', description: 'Bookshop corners, borrowed voices and the pleasure of a very good clue.', motif: 'paper', accent: '#e2d2ff', companion: '#f5ddbc', detours: [
    { label: 'Bookshop mood', quizId: 'PC-03', hook: 'Browse an invented bookshop and choose the details you would keep.' },
    { label: 'Between the lines', quizId: 'LW-27', hook: 'Follow a fictional cabinet mystery through language and clues.' },
    { label: 'Book connections', quizId: 'HC-07', hook: 'Connect a book with its place and era.' },
  ] },
  { id: 'tiny-planet', month: 4, fromDay: 16, name: 'Tiny planet', title: 'Small world. Big questions.', description: 'Look closer at the systems, materials and living things around you.', motif: 'garden', accent: '#bce6d1', companion: '#c5e5ff', detours: [
    { label: 'Food webs', quizId: 'SN-06', hook: 'Explore the connections that keep an ecosystem working.' },
    { label: 'Repair choices', quizId: 'PC-26', hook: 'Choose your priorities at an invented repair café.' },
    { label: 'Material clues', quizId: 'SN-05', hook: 'Use a material’s properties to test your first guess.' },
  ] },
  { id: 'next-chapter', month: 5, fromDay: 1, name: 'Next chapter', title: 'Your next chapter.', description: 'A little reflection before the next thing. Keep what feels like you.', motif: 'paper', accent: '#f7d8ac', companion: '#ebcfee', detours: [
    { label: 'Your priorities', quizId: 'PC-06', hook: 'See which values you protect when choices compete.' },
    { label: 'Your place', quizId: 'PC-07', hook: 'Explore what makes a place feel like yours.' },
    { label: 'Your world', quizId: 'PC-08', hook: 'Build an imagined small world from your own preferences.' },
  ] },
  { id: 'open-world', month: 6, fromDay: 1, name: 'Open world', title: 'Take the scenic route.', description: 'Different people. Different places. A summer of small discoveries.', motif: 'atlas', accent: '#c1eaf5', companion: '#f8dfb8', detours: [
    { label: 'Film locations', quizId: 'GT-27', hook: 'Connect spooky screen places with real-world geography.' },
    { label: 'Island clues', quizId: 'GT-26', hook: 'Navigate a fictional foggy island using contour evidence.' },
    { label: 'Local curiosity', quizId: 'SN-01', hook: 'Find a good scientific question without leaving the backyard.' },
  ] },
  { id: 'your-own-way', month: 7, fromDay: 1, name: 'Your own way', title: 'Find your own way.', description: 'Make room for independent choices and the stories behind everyday things.', motif: 'atlas', accent: '#ffd6b9', companion: '#bce8eb', detours: [
    { label: 'Small decisions', quizId: 'PC-02', hook: 'Write the imaginary rules you would actually want to live by.' },
    { label: 'Everyday history', quizId: 'HC-01', hook: 'A familiar object can hold a much bigger story.' },
    { label: 'Follow a detour', quizId: 'PC-04', hook: 'Discover which side paths catch your attention.' },
  ] },
  { id: 'new-season', month: 8, fromDay: 1, name: 'New season', title: 'New season. Still you.', description: 'A fresh notebook feeling, without the pressure to have everything figured out.', motif: 'signal', accent: '#d4d8ff', companion: '#c7edcb', detours: [
    { label: 'First-day choices', quizId: 'PC-01', hook: 'Start with an open day and make it your own.' },
    { label: 'Think together', quizId: 'FS-26', hook: 'Make sense of a fictional team’s scattered information.' },
    { label: 'Try a lab', quizId: 'SN-05', hook: 'Trade a quick guess for a useful material test.' },
  ] },
  { id: 'page-turner', month: 9, fromDay: 1, name: 'Page turner', title: 'Turn a new page.', description: 'A reading-season detour for people who always want to know what happens next.', motif: 'paper', accent: '#ead5ba', companion: '#dcd5ff', detours: [
    { label: 'A bookshop', quizId: 'PC-03', hook: 'Choose which corners of a fictional bookshop pull you in.' },
    { label: 'A lost page', quizId: 'HC-03', hook: 'Read the remaining evidence in an incomplete archive.' },
    { label: 'A word’s journey', quizId: 'HC-06', hook: 'Follow language across borders and through time.' },
  ] },
  { id: 'slow-fall', month: 9, fromDay: 22, name: 'Slow fall', title: 'A softer kind of scroll.', description: 'Step into warm colours, small observations and questions worth lingering over.', motif: 'garden', accent: '#f0c99c', companion: '#d6dfa9', detours: [
    { label: 'Outside clues', quizId: 'SN-04', hook: 'Notice the weather clues you usually walk past.' },
    { label: 'A place to stay', quizId: 'PC-07', hook: 'Which details make somewhere feel like your place?' },
    { label: 'An object’s story', quizId: 'HC-01', hook: 'Look again at the everyday things in an imaginary museum.' },
  ] },
  { id: 'curiosity-cabinet', month: 10, fromDay: 1, name: 'Curiosity cabinet', title: 'Open the cabinet.', description: 'Open a drawer of overlooked stories, curious materials and unexpected connections.', motif: 'paper', accent: '#e6c9a6', companion: '#d6caff', detours: [
    { label: 'Museum drawer', quizId: 'HC-01', hook: 'Follow the history hiding inside familiar objects.' },
    { label: 'Scratch lab', quizId: 'SN-26', hook: 'Use evidence from a mineral test to narrow the possibilities.' },
    { label: 'Unexpected scale', quizId: 'SN-03', hook: 'Test your intuition about how big things really are.' },
  ] },
  { id: 'after-hours', month: 10, fromDay: 16, name: 'After Hours', title: 'Curiosity, after dark.', description: 'Strange stories. Real discoveries. Pick a door and see what stays with you.', motif: 'portal', accent: '#d0c0ff', companion: '#c8edb0', detours: [
    { label: 'The story', quizId: 'LW-27', hook: 'A cabinet. A borrowed voice. Can you untangle the fictional mystery?' },
    { label: 'The night', quizId: 'SN-27', hook: 'Meet the real bats behind the vampire myth.' },
    { label: 'The screen', quizId: 'MT-27', hook: 'An invented trailer makes someone look guilty. What did the edit do?' },
  ] },
  { id: 'kindred-signals', month: 11, fromDay: 1, name: 'Kindred signals', title: 'Send a little signal.', description: 'Share a question. Compare a choice. Make a little room for each other.', motif: 'signal', accent: '#f1d5a9', companion: '#c8e5d9', detours: [
    { label: 'Make room', quizId: 'PC-07', hook: 'Explore the little things that create a sense of belonging.' },
    { label: 'Compare values', quizId: 'PC-06', hook: 'Which values would you keep when an imaginary budget gets tight?' },
    { label: 'Solve together', quizId: 'FS-27', hook: 'Piece together a fictional theatre’s final night.' },
  ] },
  { id: 'story-mode', month: 11, fromDay: 16, name: 'Story mode', title: 'Enter your story era.', description: 'A notebook. A mystery. A new point of view. Find another way into a story.', motif: 'paper', accent: '#ded2ff', companion: '#f2d7bd', detours: [
    { label: 'The reading nook', quizId: 'PC-03', hook: 'Find the fictional bookshop details that suit your browsing style.' },
    { label: 'The unreliable edit', quizId: 'MT-27', hook: 'Question the suspicion created by a fictional film trailer.' },
    { label: 'The language puzzle', quizId: 'LW-27', hook: 'Look for the voice hidden in an original cabinet mystery.' },
  ] },
  { id: 'small-wonders', month: 12, fromDay: 1, name: 'Small wonders', title: 'Collect small wonders.', description: 'A little light, an unexpected sound, something familiar seen differently.', motif: 'orbit', accent: '#cce9f4', companion: '#ebd9fa', detours: [
    { label: 'Follow the light', quizId: 'SN-07', hook: 'Trace light using the evidence left behind.' },
    { label: 'Hear differently', quizId: 'SN-08', hook: 'Explore sound beyond what your eyes can show you.' },
    { label: 'Look up', quizId: 'SN-02', hook: 'Work through decisions in a fictional moon mission.' },
  ] },
  { id: 'long-night', month: 12, fromDay: 21, name: 'Long night', title: 'Stay a little curious.', description: 'Night skies, soft signals and a mystery to keep you company. Settle in.', motif: 'orbit', accent: '#c7d2ff', companion: '#eee0b5', detours: [
    { label: 'Night sky', quizId: 'SN-02', hook: 'Make evidence-based choices at an invented moon mission control.' },
    { label: 'A soft signal', quizId: 'MU-27', hook: 'Follow the sound clues in a fictional radio sign-off mystery.' },
    { label: 'One last story', quizId: 'SG-27', hook: 'Save an atlas through decisions in an original archive story.' },
  ] },
];

const publisherDate = new Intl.DateTimeFormat('en-US', {
  timeZone: THEME_TIME_ZONE, month: 'numeric', day: 'numeric',
});
// Alberta adopts permanent UTC−6 on Nov 1, 2026. Older browser timezone databases
// may still fall back to UTC−7. Pin the published rule so all devices switch together.
// Source: https://www.alberta.ca/albertas-new-time-system-abt (checked Oct 25, 2026).
const PERMANENT_ALBERTA_TIME = Date.UTC(2026, 10, 1, 6);

export function getHomepageTheme(date: Date): HomepageTheme | undefined {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return undefined;
  const local = new Date(date.getTime() - 6 * 60 * 60 * 1000);
  const parts = date.getTime() < PERMANENT_ALBERTA_TIME ? publisherDate.formatToParts(date) : [];
  const month = parts.length ? Number(parts.find(p => p.type === 'month')?.value) : local.getUTCMonth() + 1;
  const day = parts.length ? Number(parts.find(p => p.type === 'day')?.value) : local.getUTCDate();
  return HOMEPAGE_THEMES.filter(theme => theme.month === month && theme.fromDay <= day).at(-1);
}

export function getHomepageThemeId(): string {
  return getHomepageTheme(new Date())?.id ?? '';
}

/** Clock checks also cover a laptop waking from sleep or a background tab returning. */
export function subscribeToThemeClock(onChange: () => void): () => void {
  const check = () => onChange();
  const timer = window.setInterval(check, 30_000);
  window.addEventListener('focus', check);
  document.addEventListener('visibilitychange', check);
  return () => {
    window.clearInterval(timer);
    window.removeEventListener('focus', check);
    document.removeEventListener('visibilitychange', check);
  };
}
