/**
 * Where a group room sends its players. Rooms created from the original
 * trivia quizzes use their plain registry slug; rooms created from the movie
 * collection use a `movies-` namespace so the two catalogs can never collide.
 */
const TRIVIA_SLUG = /^[a-z0-9][a-z0-9-]{0,79}$/;
const MOVIES_PREFIX = "movies-";

export function getGroupQuizPath(slug: string): string | null {
  if (typeof slug !== "string" || !TRIVIA_SLUG.test(slug)) return null;
  if (slug.startsWith(MOVIES_PREFIX)) {
    const movie = slug.slice(MOVIES_PREFIX.length);
    return movie && TRIVIA_SLUG.test(movie) ? `/trivia/movies/${movie}/` : null;
  }
  return `/trivia/${slug}/`;
}

/** Full play URL for a room: quiz path plus the room code and shared seed. */
export function getGroupPlayUrl(slug: string, code: string, seed: string): string | null {
  const path = getGroupQuizPath(slug);
  return path ? `${path}?group=${encodeURIComponent(code)}&seed=${encodeURIComponent(seed)}` : null;
}
