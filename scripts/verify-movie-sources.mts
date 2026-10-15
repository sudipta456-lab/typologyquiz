import { MOVIE_QUIZZES } from "../src/lib/trivia/movies";

// Network check, deliberately not part of npm run verify. It fetches each
// cited official page once and confirms the page loads and contains the terms
// recorded for each question. It is a keyword check, not proof of meaning:
// a human still reads the claim next to the page text.
const AGENT = "TypologyQuiz-source-check/1.0 (+https://typologyquiz.com)";

function metaDescriptions(html: string): string {
  const found = [...html.matchAll(/<meta[^>]+(?:name|property)="(?:og:)?description"[^>]*>/gi)].map((tag) => /content="([^"]*)"/i.exec(tag[0])?.[1] ?? "");
  return found.join(" ");
}

function normalise(html: string): string {
  const text = `${metaDescriptions(html)} ${html}`;
  return text
    .replace(/<(script|style|noscript)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&#0?39;|&apos;|&rsquo;|&lsquo;/g, "'").replace(/&quot;|&ldquo;|&rdquo;/g, '"')
    .replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

const pages = new Map<string, string | null>();
const urls = [...new Set(MOVIE_QUIZZES.flatMap((quiz) => quiz.questions.map((question) => question.source.url)))];
for (const url of urls) {
  try {
    const response = await fetch(url, { headers: { "user-agent": AGENT, accept: "text/html" }, redirect: "follow", signal: AbortSignal.timeout(30000) });
    pages.set(url, response.ok ? normalise(await response.text()) : null);
    if (!response.ok) console.error(`HTTP ${response.status}: ${url}`);
  } catch (error) {
    pages.set(url, null);
    console.error(`FETCH FAILED: ${url} (${(error as Error).message})`);
  }
}

let questions = 0;
const failures: string[] = [];
for (const quiz of MOVIE_QUIZZES) {
  for (const question of quiz.questions) {
    questions++;
    const page = pages.get(question.source.url);
    if (!page) { failures.push(`${question.id}: page unavailable ${question.source.url}`); continue; }
    const missing = question.source.terms.filter((term) => !page.includes(term.toLowerCase()));
    if (missing.length) failures.push(`${question.id}: missing ${JSON.stringify(missing)} at ${question.source.url}`);
  }
}
console.log(`${questions} questions, ${urls.length} unique official pages, ${failures.length} problems`);
for (const failure of failures) console.log(failure);
if (failures.length) process.exitCode = 1;
