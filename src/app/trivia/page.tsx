import type { Metadata } from "next";
import Link from "next/link";
import {
  COUNTRY_LETTER_PAGES,
  getRunSize,
  getTriviaQuiz,
  STATE_LETTER_PAGES,
  TRIVIA_GROUPS,
  TRIVIA_QUIZZES,
} from "@/lib/trivia/registry";
import { formatClock } from "@/lib/trivia/engine";
import { SITE } from "@/lib/site";
import { breadcrumbList, collectionPageNodes, jsonLdGraph } from "@/lib/structured-data";
import { WeeklyFeatured } from "@/components/trivia/WeeklyFeatured";

export const metadata: Metadata = {
  title: "Trivia Quizzes: Geography and Science",
  description:
    "Free geography, science, general-knowledge, and history trivia quizzes: type-in and map challenges plus rapid rounds with clear answers and a live timer. No signup.",
  alternates: { canonical: "/trivia/" },
  openGraph: {
    title: `Trivia quizzes · ${SITE.legalName}`,
    description:
      "Type-in, map, and rapid trivia quizzes with a live timer: geography, science, history, and general knowledge. Free, no signup.",
    url: `${SITE.url}/trivia/`,
    images: [
      {
        url: `${SITE.url}/og/trivia-hub.png`,
        width: 1200,
        height: 630,
        alt: "Trivia Quizzes: Geography and Science",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Trivia quizzes · ${SITE.legalName}`,
    images: [`${SITE.url}/og/trivia-hub.png`],
  },
};

const MODE_LABEL: Record<string, string> = {
  typein: "Type-in",
  choice: "Map click",
};

export default function TriviaHubPage() {
  // CollectionPage + ItemList + BreadcrumbList. The ItemList was already here;
  // it now comes from the shared builder so the hub and the quiz pages agree
  // on shape, and the breadcrumb gives the SERP entry a path to show.
  const jsonLd = jsonLdGraph([
    ...collectionPageNodes({
      path: "/trivia/",
      name: "Trivia quizzes",
      description:
        "Free type-in, map, and rapid trivia quizzes with a live timer: US states and capitals, Canadian provinces, countries of the world, Europe, the planets, elements, history, and general knowledge.",
      listName: "Trivia quiz collection",
      items: [
        ...TRIVIA_QUIZZES.map((q) => ({ name: q.title, path: `/trivia/${q.slug}/` })),
        { name: "10 in 90: General Knowledge Quiz", path: "/trivia/quickfire-10-in-90/" },
        { name: "Which Came First? History Timeline Quiz", path: "/trivia/which-came-first/" },
      ],
    }),
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Trivia", path: "/trivia/" },
    ]),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section directory-page trivia-directory">
        <p className="eyebrow" style={{ display: "block", marginBottom: 10 }}>
          Trivia
        </p>
        <h1 className="section-title" style={{ marginBottom: 12 }}>
          Trivia quizzes
        </h1>
        <p className="section-lead" style={{ marginBottom: 24 }}>
          Name the states, fill a map, or work your way through the periodic table.
          Type an answer and watch it count. Your best scores stay on this device.
        </p>

        <nav className="topic-jumps" aria-label="Trivia topics">{TRIVIA_GROUPS.map((group, index) => <a key={group.label} href={`#trivia-topic-${index}`}>{group.label}</a>)}<a href="#trivia-letters">A–Z quizzes</a><Link href="/weekly/">News quizzes ↗</Link></nav>

        <WeeklyFeatured />
        <section aria-label="Rapid rounds" className="card-grid" style={{ marginBottom: 28, gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))" }}>
          <Link href="/trivia/quickfire-10-in-90/" className="quiz-card" style={{ display: "block" }}>
            <p className="eyebrow" style={{ marginBottom: 6 }}>Rapid round</p>
            <h2 className="quiz-card-title" style={{ marginBottom: 6 }}>10 in 90: general knowledge</h2>
            <p className="quiz-card-desc">Ten straightforward questions, ninety seconds, and a short fact after every answer.</p>
          </Link>
          <Link href="/trivia/which-came-first/" className="quiz-card" style={{ display: "block" }}>
            <p className="eyebrow" style={{ marginBottom: 6 }}>Rapid round</p>
            <h2 className="quiz-card-title" style={{ marginBottom: 6 }}>Which came first?</h2>
            <p className="quiz-card-desc">Pick the earlier event in ten pairs, then see the dates before the next one.</p>
          </Link>
        </section>

        {TRIVIA_GROUPS.map((group, index) => {
          const quizzes = group.slugs
            .map(getTriviaQuiz)
            .filter((q): q is NonNullable<typeof q> => q !== undefined);
          return (
            <section id={`trivia-topic-${index}`} key={group.label} style={{ marginBottom: 36 }}>
              <h2
                className="font-display"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  margin: "0 0 12px",
                  paddingBottom: 8,
                  borderBottom: "1px solid var(--line)",
                }}
              >
                {group.label}
              </h2>
              <div
                className="card-grid"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                }}
              >
                {quizzes.map((q) => (
                  <Link key={q.slug} href={`/trivia/${q.slug}/`} className="quiz-card">
                    <h3 className="quiz-card-title" style={{ marginBottom: 6 }}>
                      {q.title}
                    </h3>
                    <p className="quiz-card-desc">{q.hook}</p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.4rem 0.9rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.875rem",
                        color: "var(--ink-mute)",
                        marginTop: "auto",
                        paddingTop: 6,
                      }}
                    >
                      <span>{MODE_LABEL[q.mode]}</span>
                      <span>{getRunSize(q)} answers</span>
                      <span>{formatClock(q.timerSeconds)} clock</span>
                      {q.modifiers?.lives !== undefined && <span>{q.modifiers.lives} lives</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <section id="trivia-letters" style={{ marginBottom: 36 }}>
          <h2
            className="font-display"
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "var(--ink)",
              margin: "0 0 6px",
              paddingBottom: 8,
              borderBottom: "1px solid var(--line)",
            }}
          >
            A to Z pages
          </h2>
          <p style={{ margin: "10px 0 12px", fontSize: "0.9rem", color: "var(--ink-soft)" }}>
            Quick-fire mini quizzes, one letter at a time. Pick a letter, name
            everything that starts with it.
          </p>
          {[
            { label: "US states that start with", pages: STATE_LETTER_PAGES },
            { label: "Countries that start with", pages: COUNTRY_LETTER_PAGES },
          ].map(({ label, pages }) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                gap: "0.4rem 0.5rem",
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--ink-mute)",
                  marginRight: 4,
                }}
              >
                {label}
              </span>
              {pages.map((p) => (
                <Link
                  key={p.slug}
                  href={`/trivia/${p.slug}/`}
                  className="text-link"
                  aria-label={`${label} ${p.letter} (${p.count} answers)`}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    padding: "0.6rem",
                    minHeight: 44, minWidth: 44, display: "inline-flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid var(--line)",
                    borderRadius: 8,
                  }}
                >
                  {p.letter}
                </Link>
              ))}
            </div>
          ))}
        </section>

        <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
          <h2 className="font-display" style={{ fontSize: "1.1rem", fontWeight: 600, margin: "0 0 8px" }}>
            How the type-in quizzes work
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "0.92rem",
              lineHeight: 1.65,
              color: "var(--ink-soft)",
              maxWidth: "38rem",
            }}
          >
            Start the clock and type. An answer counts the instant the spelling
            matches - capitals, spaces and punctuation are ignored, and the most
            common misspellings are forgiven. Give up and the map shows you what
            you missed. Every quiz keeps your best score and your fastest full
            run on this device, and a challenge link lets a friend chase your
            exact score and time.
          </p>
        </div>
      </div>
    </>
  );
}
