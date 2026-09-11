import type { Metadata } from "next";
import Link from "next/link";
import { EDITIONS, latestEditions } from "@/lib/newsquiz/editions";
import { editionPath } from "@/lib/editorial/identity";
import SeriesFollow from "@/components/editorial-social/SeriesFollow";
import { reminderCadence } from "@/lib/editorial-social/follow";
import policy from "../../../content/publication-policy.json";

export const metadata: Metadata = {
  title: "Weekly news quizzes and edition archive",
  description: "Play a dated news quiz, learn from the sources, and challenge a friend to the same edition.",
  alternates: { canonical: "/weekly/" },
};

export default function WeeklyPage() {
  const editions = latestEditions();
  return <div className="section" style={{ maxWidth: "64rem" }}>
    <p className="eyebrow">Dated editions & sources</p>
    <h1 className="section-title">Weekly news quizzes</h1>
    <p className="section-lead">Pick an edition, test your news recall, and send a friend the same round.</p>
    <p>These are the latest available editions for their dates. New rounds appear after editorial review; the date below tells you which reporting period you are playing.</p>
    <div className="card-grid" style={{ marginTop: 28, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))" }}>
      {editions.map((edition, index) => <article key={edition.id} id={editions.findIndex(item => item.seriesId === edition.seriesId) === index ? `series-${edition.seriesId}` : undefined} className="quiz-card" style={{ cursor: "default" }}>
        <p className="eyebrow">{edition.questions.length} questions · <time dateTime={edition.publishedAt}>{edition.publishedAt}</time></p>
        <h2 className="quiz-card-title">{edition.title}</h2>
        <p className="quiz-card-desc">{edition.description}</p>
        <Link className="text-link" href={editionPath(edition)}>Play this edition →</Link>
        <SeriesFollow seriesId={edition.seriesId} label={edition.seriesId.replace(/^news-/, "").split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ") + " news"} cadence={reminderCadence(edition.seriesId, policy)} />
      </article>)}
    </div>
    <h2 className="font-display" style={{ marginTop: 40, fontSize: "1.8rem" }}>Edition archive</h2>
    <p>Every published version keeps its own link, so a shared challenge always opens the same questions.</p>
    <ul style={{ lineHeight: 2 }}>
      {[...EDITIONS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || b.version - a.version).map(edition => <li key={`${edition.id}@${edition.version}`}>
        <Link className="text-link" href={editionPath(edition)}>{edition.title} · Version {edition.version}</Link>{edition.legacy ? " · Original archive" : ""}
      </li>)}
    </ul>
    <p><Link href="/trivia/" className="text-link">More geography and science trivia →</Link></p>
  </div>;
}
