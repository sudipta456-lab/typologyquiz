import type { Metadata } from "next";
import Link from "next/link";
import { getTriviaQuiz, TRIVIA_GROUPS, TRIVIA_QUIZZES } from "@/lib/trivia/registry";
import { getAnswers } from "@/lib/trivia/registry";
import { formatClock } from "@/lib/trivia/engine";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Geography Trivia Quizzes",
  description:
    "Can you name all 50 US states in 4 minutes? Free type-in and map trivia quizzes - US states, state capitals, Canadian provinces and more. No signup, answers register as you type.",
  alternates: { canonical: "/trivia/" },
  openGraph: {
    title: `Geography trivia quizzes · ${SITE.legalName}`,
    description:
      "Type-in and map quizzes with a live timer: US states, capitals, Canadian provinces. Free, no signup.",
    url: `${SITE.url}/trivia/`,
  },
};

const MODE_LABEL: Record<string, string> = {
  typein: "Type-in",
  choice: "Map click",
};

export default function TriviaHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Geography trivia quizzes",
    itemListElement: TRIVIA_QUIZZES.map((q, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: q.title,
      url: `${SITE.url}/trivia/${q.slug}/`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section">
        <p className="eyebrow" style={{ display: "block", marginBottom: 10 }}>
          Trivia
        </p>
        <h1 className="section-title" style={{ marginBottom: 12 }}>
          Geography trivia quizzes
        </h1>
        <p className="section-lead" style={{ marginBottom: 24 }}>
          The classics, done properly: a live timer, a map that fills in as you
          type, and answers that register the moment you spell them - no Enter
          key, no signup, no ads between you and the clock. Your scores stay on
          this device.
        </p>

        {TRIVIA_GROUPS.map((group) => {
          const quizzes = group.slugs
            .map(getTriviaQuiz)
            .filter((q): q is NonNullable<typeof q> => q !== undefined);
          return (
            <section key={group.label} style={{ marginBottom: 36 }}>
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
                        fontSize: "0.72rem",
                        color: "var(--ink-mute)",
                        marginTop: "auto",
                        paddingTop: 6,
                      }}
                    >
                      <span>{MODE_LABEL[q.mode]}</span>
                      <span>{getAnswers(q).length} answers</span>
                      <span>{formatClock(q.timerSeconds)} clock</span>
                      {q.modifiers?.lives !== undefined && <span>{q.modifiers.lives} lives</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

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
