import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { breadcrumbList, jsonLdGraph } from "@/lib/structured-data";

const path = "/world-space-week-2026/";
const url = `${SITE.url}${path}`;

export const metadata: Metadata = {
  title: "World Space Week 2026: a 10-minute group quiz",
  description:
    "A simple World Space Week activity for families, classrooms, libraries, and teams: host an eight-question Night Sky quiz with a shared screen and phone join code.",
  alternates: { canonical: path },
  openGraph: {
    title: `World Space Week 2026 group quiz · ${SITE.legalName}`,
    description:
      "A ten-minute Night Sky quiz activity for a shared screen and phones. General knowledge, not a science assessment.",
    url,
    images: [
      {
        url: `${SITE.url}/og/trivia-hub.png`,
        width: 1200,
        height: 630,
        alt: "World Space Week 2026 group quiz activity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Space Week 2026: a 10-minute group quiz",
    description: "Host a short Night Sky quiz with a shared screen and phone join code.",
    images: [`${SITE.url}/og/trivia-hub.png`],
  },
};

const faqs = [
  {
    question: "When is World Space Week 2026?",
    answer:
      "World Space Week is observed annually from October 4 to October 10. This page is for the 2026 observance.",
  },
  {
    question: "How long does this group activity take?",
    answer:
      "Plan for about ten minutes: a minute to join, around eight questions in two rounds, and a short discussion or replay at the end.",
  },
  {
    question: "Is this a science lesson or assessment?",
    answer:
      "No. It is a general-knowledge conversation starter. It can sit beside a science activity, but it does not measure learning or replace teaching.",
  },
  {
    question: "Can participants play as a team?",
    answer:
      "Yes. The host can set up team play, with one shared phone per team, or let each participant use a phone individually.",
  },
];

const jsonLd = jsonLdGraph([
  {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: "World Space Week 2026: a 10-minute group quiz",
    description: metadata.description,
    url,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: [
      { "@type": "Thing", name: "World Space Week 2026" },
      { "@type": "Thing", name: "Astronomy general knowledge" },
    ],
    isAccessibleForFree: true,
  },
  {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
  breadcrumbList([
    { name: "Home", path: "/" },
    { name: "Live Events", path: "/live/" },
    { name: "World Space Week 2026", path },
  ]),
]);

export default function WorldSpaceWeek2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="section" style={{ maxWidth: 880 }}>
        <p className="eyebrow">October 4–10, 2026</p>
        <h1 className="section-title">A small, shared space quiz for World Space Week</h1>
        <p className="section-lead">
          Put one screen in front of the room, let people join with a code or QR code, and run a short Night Sky round together. It is made for the moment after someone asks, “Want to try one?”
        </p>

        <section className="card" style={{ marginTop: 28 }} aria-labelledby="start-heading">
          <h2 id="start-heading" className="font-display" style={{ marginTop: 0 }}>Run it in ten minutes</h2>
          <ol style={{ paddingLeft: "1.2rem", margin: "0 0 20px", display: "grid", gap: 10 }}>
            <li><strong>Open a room.</strong> Choose the Night Sky session and decide whether people play on their own or in teams.</li>
            <li><strong>Share the join code.</strong> Participants scan the QR code or enter the short code on a phone. One shared phone per team works well.</li>
            <li><strong>Play two short rounds.</strong> Keep relaxed scoring for a low-pressure activity, or turn on timed scoring for a friendly tie-breaker.</li>
            <li><strong>Pause for one question.</strong> After a reveal, ask what surprised the room or what people would look up next.</li>
          </ol>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Link className="btn-primary" href="/live/host/">Host the Night Sky quiz</Link>
            <Link className="btn-outline" href="/trivia/planets/">Try the Planets quiz solo</Link>
          </div>
        </section>

        <section style={{ marginTop: 36 }} aria-labelledby="host-notes-heading">
          <h2 id="host-notes-heading" className="font-display">A few host notes</h2>
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))" }}>
            <article className="card">
              <h3 className="quiz-card-title">Keep the pace human</h3>
              <p className="quiz-card-desc">Read the prompt aloud if that helps the room. The goal is a shared guess and a good reveal, not fast tapping.</p>
            </article>
            <article className="card">
              <h3 className="quiz-card-title">Make room for different ways to join</h3>
              <p className="quiz-card-desc">Teams can discuss before one person answers. A host can also repeat a question or let the group answer verbally before selecting it.</p>
            </article>
            <article className="card">
              <h3 className="quiz-card-title">Use it as a conversation opener</h3>
              <p className="quiz-card-desc">This is general-knowledge play, not a science lesson or a measure of astronomy knowledge. Pair it with your own discussion, book, or activity.</p>
            </article>
          </div>
        </section>

        <section style={{ marginTop: 36 }} aria-labelledby="about-heading">
          <h2 id="about-heading" className="font-display">About World Space Week</h2>
          <p>
            World Space Week is observed each year from October 4 through 10. For official event information and ways to find or register activities, visit the <a className="text-link" href="https://www.worldspaceweek.org/" rel="noreferrer">World Space Week Association</a>.
          </p>
          <p style={{ color: "var(--ink-soft)" }}>
            TypologyQuiz is an independent activity provider. This page is not an official World Space Week event listing and does not imply endorsement by the World Space Week Association.
          </p>
        </section>

        <section style={{ marginTop: 36 }} aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="font-display">Questions hosts ask</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {faqs.map((faq) => (
              <details className="card" key={faq.question}>
                <summary style={{ cursor: "pointer", fontWeight: 700 }}>{faq.question}</summary>
                <p style={{ margin: "12px 0 0" }}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
