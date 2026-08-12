import type { Metadata } from "next";
import Link from "next/link";
import { JURISDICTIONS, totalQuestionCount } from "@/lib/driving/jurisdictions";
import { DrivingDisclaimer } from "@/components/DrivingDisclaimer";
import { InstallHint } from "@/components/InstallHint";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Driving Licence Practice Tests",
  description:
    "Free practice questions for the written knowledge test in Alberta, Ontario, Texas and California. Scored against the real pass mark, with an explanation and a link to the official handbook on every question.",
  alternates: { canonical: "/driving/" },
  openGraph: {
    title: `Driving licence practice tests · ${SITE.legalName}`,
    description:
      "Practice for the real knowledge test. Every question explains itself and links to the official handbook.",
    url: `${SITE.url}/driving/`,
  },
};

const COUNTRY_ORDER: { key: "CA" | "US"; label: string }[] = [
  { key: "CA", label: "Canada" },
  { key: "US", label: "United States" },
];

export default function DrivingHubPage() {
  const totalQuestions = totalQuestionCount();
  const totalSets = JURISDICTIONS.reduce((sum, j) => sum + j.sets.length, 0);

  return (
    <div className="section">
      <p className="eyebrow" style={{ display: "block", marginBottom: 10 }}>
        Knowledge test prep
      </p>
      <h1 className="section-title" style={{ marginBottom: 12 }}>
        Driving licence practice tests
      </h1>
      <p className="section-lead" style={{ marginBottom: 20 }}>
        Practice for the written knowledge test you sit before you get a learner&apos;s
        permit or licence. Same rules, same style of question, scored against the real
        pass mark for your province or state. Every question tells you why the answer is
        right and links to the section of the official handbook it came from.
      </p>

      <div className="test-meta-grid" style={{ marginBottom: 24 }}>
        <div className="test-meta-cell">
          <div className="test-meta-value">{totalQuestions}</div>
          <div className="test-meta-label">Questions</div>
        </div>
        <div className="test-meta-cell">
          <div className="test-meta-value">{totalSets}</div>
          <div className="test-meta-label">Practice sets</div>
        </div>
        <div className="test-meta-cell">
          <div className="test-meta-value">{JURISDICTIONS.length}</div>
          <div className="test-meta-label">Jurisdictions</div>
        </div>
      </div>

      <InstallHint />

      <div style={{ marginBottom: 32 }}>
        <DrivingDisclaimer />
      </div>

      {COUNTRY_ORDER.map(({ key, label }) => {
        const group = JURISDICTIONS.filter((j) => j.country === key);
        if (group.length === 0) return null;

        return (
          <section key={key} style={{ marginBottom: 36 }}>
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
              {label}
            </h2>

            <div
              className="card-grid"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
              }}
            >
              {group.map((j) => {
                const questionCount = j.sets.reduce((s, set) => s + set.questions.length, 0);
                return (
                  <Link key={j.slug} href={`/driving/${j.slug}/`} className="quiz-card">
                    <div className="quiz-card-top">
                      <div className="quiz-emoji" aria-hidden="true">
                        {j.code}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h3 className="quiz-card-title">{j.name}</h3>
                        <span className="quiz-meta">{j.licenceName}</span>
                      </div>
                    </div>

                    <p className="quiz-card-desc">{j.intro}</p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.4rem 0.9rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--ink-mute)",
                        marginTop: "auto",
                        paddingTop: 4,
                      }}
                    >
                      <span>
                        Official pass mark:{" "}
                        <strong style={{ color: "var(--ink)" }}>
                          {j.officialTest.passLabel}
                        </strong>
                      </span>
                      <span>
                        {j.sets.length} sets · {questionCount} questions
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      <div
        style={{
          borderTop: "1px solid var(--line)",
          paddingTop: 24,
        }}
      >
        <h2
          className="font-display"
          style={{ fontSize: "1.1rem", fontWeight: 600, margin: "0 0 8px" }}
        >
          How to use these
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
          Read the handbook first, then use these sets to find the gaps. Work up through
          the difficulty tiers and finish on the exam simulation. If you keep missing the
          same topic, that is the chapter to reread - the results page tells you which one.
        </p>
        <p
          style={{
            margin: "0.8rem 0 0",
            fontSize: "0.92rem",
            lineHeight: 1.65,
            color: "var(--ink-soft)",
            maxWidth: "38rem",
          }}
        >
          <strong style={{ color: "var(--ink)" }}>
            Every jurisdiction also builds you a weak-spot drill.
          </strong>{" "}
          It is assembled from the questions you personally got wrong, weighted by how
          often you missed them, plus more from the topics that caused the trouble - and it
          is rebuilt every time you open it. Answer one correctly twice and it stops
          following you around. No account needed; it all lives in this browser.
        </p>
      </div>
    </div>
  );
}
