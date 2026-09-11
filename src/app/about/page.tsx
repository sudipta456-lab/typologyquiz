import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About & privacy", description: "How TypologyQuiz handles answers, results, sharing, and private reflections.",
  alternates: { canonical: "/about/" },
};
export default function AboutPage() {
  return <div className="section methodology-page">
    <p className="eyebrow">About & privacy · September 11, 2026</p><h1 className="section-title">A little more self-understanding.</h1>
    <p className="section-lead">TypologyQuiz makes room for reflection, curiosity, and a good conversation. Most of our personality quizzes are original creations. A few use published instruments. Each test explains its purpose and evidence.</p>
    <div className="reflection-list">
      <section className="content-card"><h2 className="content-card-title">Answers and scores</h2><p>Personality-test answers are saved in browser storage and scored on your device. We do not upload individual answers. A result URL contains a readable, encoded score summary; it is not encrypted. Opening that URL sends it to our hosting service and may put it in browser history or service logs.</p><p>Anyone with a result link can view its scores. Creating a short link stores the destination result path on our server. Sharing a link or joining a room deliberately shares the information included in it.</p></section>
      <section className="content-card"><h2 className="content-card-title">Your reflections</h2><p>Optional reflection notes, ratings, action plans, and follow-up reviews stay in this browser profile. We do not receive them or use them to train a model or validate a test. There is no research enrollment or account requirement.</p><p>You can export or delete each note. Up to 25 notes can be stored. Notes older than a year are removed when you next visit. Clearing browser data also removes them. Exports are your own copies and must be deleted separately. People who share your device or browser profile may be able to read saved data.</p></section>
      <section className="content-card"><h2 className="content-card-title">Reminders and other services</h2><p>A reflection reminder is a calendar file you choose to import. It includes a generic review prompt and a link to your reflections page, without your notes or scores. We do not send reminder emails.</p><p>Trivia can submit a score and total to build aggregate play statistics. Short links and prediction receipts use server services with their own on-screen explanations. Our host processes requests needed to serve the site. Fonts load from Google Fonts.</p><p>The global Google Analytics script is currently disabled while we separate public traffic measurement from private result and reflection pages.</p></section>
      <section className="content-card"><h2 className="content-card-title">Evidence and contact</h2><p>We do not claim a site-wide accuracy percentage. Read <Link href="/methodology/" className="text-link">how our tests work</Link> and <Link href="/credits/" className="text-link">the source credits</Link>.</p><p>For questions or corrections, email <a className="text-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>. Avoid sending personal assessment answers or other sensitive details.</p></section>
    </div>
  </div>;
}
