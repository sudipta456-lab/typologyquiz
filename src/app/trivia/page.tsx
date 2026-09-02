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
    "Can you name all 50 US states? All 196 countries? Free type-in and map trivia quizzes with a live timer - states, capitals, provinces, countries, planets and the periodic table. No signup, answers register as you type.",
  alternates: { canonical: "/trivia/" },
  openGraph: {
    title: `Trivia quizzes · ${SITE.legalName}`,
    description:
      "Type-in and map quizzes with a live timer: US states, capitals, Canadian provinces, countries of the world, planets and elements. Free, no signup.",
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
        "Free type-in and map trivia quizzes with a live timer: US states and capitals, Canadian provinces, countries of the world, Europe, the planets and the periodic table.",
      listName: "Geography and science trivia quizzes",
      items: TRIVIA_QUIZZES.map((q) => ({ name: q.title, path: `/trivia/${q.slug}/` })),
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
      <div className="section">
        <p className="eyebrow" style={{ display: "block", marginBottom: 10 }}>
          Trivia
        </p>
        <h1 className="section-title" style={{ marginBottom: 12 }}>
          Trivia quizzes
        </h1>
        <p className="section-lead" style={{ marginBottom: 24 }}>
          The classics, done properly: a live timer, a map that fills in as you
          type, and answers that register the moment you spell them - no Enter
          key, no signup, no ads between you and the clock. Your scores stay on
          this device.
        </p>

        <WeeklyFeatured />

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

        <section style={{ marginBottom: 36 }}>
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
                    padding: "0.15rem 0.5rem",
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
