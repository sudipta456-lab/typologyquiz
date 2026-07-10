"use client";

import Link from "next/link";
import { TESTS } from "@/lib/tests/registry";
import { CATEGORY_META } from "@/lib/types";
import { InviteFriends } from "@/components/InviteFriends";
import { StartHere } from "@/components/StartHere";
import { CommunityPulse } from "@/components/CommunityPulse";

const CATEGORY_CODE: Record<string, string> = {
  personality: "PERS",
  values: "VAL",
  thinking: "THNK",
  perception: "PERC",
  character: "CHAR",
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Free · Private · Research-based</span>
            <h1 className="hero-title">
              Figure yourself out
              <br />
              <em>before everyone else does</em>
            </h1>
            <p className="hero-lead">
              Free quizzes for how you think, vibe with friends, and show up in the world. Scored in
              your browser. No account, no paywall, no lecture.
            </p>
            <div className="hero-cta">
              <Link href="/test/friend-role" className="btn-primary btn-lg">
                Start with Friend Role
              </Link>
              <Link href="/tests" className="btn-outline btn-lg">
                Browse all tests
              </Link>
            </div>
            <p className="hero-path-hint">
              2 min · most shareable · then{" "}
              <Link href="/room" className="text-link">
                challenge your group
              </Link>
            </p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual-bg" />
            <img
              src="/assets/puzzle-head.png"
              alt=""
              className="hero-puzzle"
              width={420}
              height={480}
            />
          </div>
        </div>
      </section>

      <StartHere />

      <section id="quizzes" className="band band-light">
        <div className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">All tests</h2>
              <p className="section-sub">Pick one. Answer honestly. See what shows up.</p>
            </div>
            <Link href="/tests" className="text-link">
              Full catalog →
            </Link>
          </div>
          <div className="card-grid">
            {TESTS.slice(0, 6).map((test) => {
              const meta = CATEGORY_META[test.category as keyof typeof CATEGORY_META];
              const code = CATEGORY_CODE[test.category] || "TEST";
              return (
                <Link key={test.slug} href={`/test/${test.slug}`} className="quiz-card">
                  <div className="quiz-card-top">
                    <div className="quiz-emoji" aria-hidden="true">
                      {code}
                    </div>
                    <div>
                      <h3 className="quiz-card-title">{test.title}</h3>
                      <span className="quiz-meta">
                        {test.itemCount} items · ~{test.timeMinutes} min · {meta.label}
                      </span>
                    </div>
                  </div>
                  <p className="quiz-card-desc">{test.description}</p>
                </Link>
              );
            })}
          </div>
          {TESTS.length > 6 && (
            <p style={{ marginTop: 20, textAlign: "center" }}>
              <Link href="/tests" className="text-link">
                See all {TESTS.length} tests →
              </Link>
            </p>
          )}
        </div>
      </section>

      <section className="band band-cream">
        <div className="section split">
          <div className="split-media onion-media">
            <img
              src="/assets/onion_big.png"
              alt="Peeled onion with a question mark at its center"
              className="onion-img"
              width={736}
              height={574}
            />
          </div>
          <div className="split-copy">
            <h2 className="section-title tight onion-heading">How we peel the onion</h2>
            <div className="steps">
              {steps.map((s, i) => (
                <div key={i} className="step">
                  <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h4 className="step-title">{s.title}</h4>
                    <p className="step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/tests" className="btn-primary">
              Peel your onion
            </Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-num">{TESTS.length}</div>
              <div className="stat-label">Free tests, not vibes</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">0</div>
              <div className="stat-label">Accounts, trackers, or paywalls</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">100%</div>
              <div className="stat-label">Scoring runs on your device</div>
            </div>
          </div>
        </div>
      </section>

      <InviteFriends />

      <CommunityPulse />

      <section className="band band-light">
        <div className="section split reverse">
          <div className="split-media">
            <div className="profile-card">
              <div className="profile-card-top">
                <span className="profile-card-title">Sample result sheet</span>
                <span className="badge-new">Local only</span>
              </div>
              <div className="profile-brand">
                <img src="/assets/typologyquiz-mark.svg" alt="" width={28} height={28} />
                <div>
                  <div className="profile-brand-name">TypologyQuiz</div>
                  <div className="profile-brand-sub">Illustrative layout</div>
                </div>
              </div>
              <hr className="profile-hr" />
              <div className="profile-rows">
                <div className="profile-row">
                  <span>Openness</span>
                  <span>72</span>
                </div>
                <div className="profile-row">
                  <span>Conscientiousness</span>
                  <span>41</span>
                </div>
                <div className="profile-row">
                  <span>Shareable link</span>
                  <span>Optional</span>
                </div>
              </div>
            </div>
          </div>
          <div className="split-copy">
            <h2 className="section-title tight">A report, not a horoscope</h2>
            <p className="section-lead">
              Trait scores, percentiles where the instrument supports them, and a plain-language
              breakdown. Share a link if you want, or keep it to yourself.
            </p>
            <Link href="/tests" className="btn-primary">
              Browse tests
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const steps = [
  {
    title: "Embrace the doubt",
    desc: "Start where certainty ends. Choose a test that might challenge how you see yourself: friends, focus, values, or vibe.",
  },
  {
    title: "Answer honestly",
    desc: "Nobody is grading you. Skip the answer that sounds cool. First instinct usually tells you more than the performative one.",
  },
  {
    title: "See and share your results",
    desc: "Get a clear breakdown scored on your device. Keep it private, or send a results link if you want a second opinion.",
  },
];
