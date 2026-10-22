import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { ORGANIZATION_REF, WEBSITE_REF, breadcrumbList, jsonLdGraph } from "@/lib/structured-data";
import { CATEGORIES } from "@/lib/interactive/categories";
import { SUMMARIES } from "@/lib/interactive/catalog.generated";
import type { QuizKind } from "@/lib/interactive/types";

const PATH = "/methodology/interactive-quizzes/";
const UPDATED_ISO = "2026-10-22";
const UPDATED_LABEL = "October 22, 2026";

// Everything numeric below is derived from the generated catalog, never typed in.
const TOTAL_TASKS = SUMMARIES.reduce((sum, quiz) => sum + quiz.questionCount, 0);
const TASK_COUNTS = [...new Set(SUMMARIES.map((quiz) => quiz.questionCount))].sort((a, b) => a - b);
const MINUTES = SUMMARIES.map((quiz) => quiz.minutes);
const FORMATS = [...new Set(SUMMARIES.flatMap((quiz) => quiz.formats))];

const FORMAT_LABELS: Record<string, string> = {
  choice: "single choice",
  rank: "ranking",
  order: "ordering",
  match: "matching",
  graph: "link maps",
  grid: "grids",
  slider: "sliders",
  reflection: "optional reflection",
  audio: "listening",
  hotspot: "diagrams",
};

const KIND_ROWS: { kind: QuizKind; label: string; shows: string }[] = [
  { kind: "knowledge", label: "Knowledge", shows: "Accuracy on the scored knowledge tasks; route choices and explicitly ungraded predictions do not count." },
  { kind: "logic", label: "Logic", shows: "Logic tasks are checked against supplied clues; ungraded route choices only choose the next case, and explicitly ungraded predictions do not count toward accuracy." },
  { kind: "cooperative", label: "Shared puzzle", shows: "A puzzle worked through together, with checkable tasks scored at the end." },
  { kind: "hybrid", label: "Hybrid", shows: "Some tasks are checked for accuracy and others describe your own choices. The two are reported separately and never merged into one number." },
  { kind: "preference", label: "Preference", shows: "No right answers. The summary describes the choices you made in this quiz only." },
];

const EXAMPLE_SLUGS = ["unplanned-saturday", "name-that-decision-trap", "four-neighbors-tiebreakers"];
const examples = EXAMPLE_SLUGS.flatMap((slug) => SUMMARIES.filter((quiz) => quiz.slug === slug));

const TITLE = "How our interactive quizzes work";
const DESCRIPTION = `How the ${SUMMARIES.length} interactive quizzes in ${CATEGORIES.length} categories are built, scored, sourced and reviewed, what they do not claim, and what stays in your browser.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: `${TITLE} · ${SITE.legalName}`,
    description: DESCRIPTION,
    url: `${SITE.url}${PATH}`,
    images: [{ url: `${SITE.url}${SITE.ogImage}`, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: { card: "summary_large_image", title: `${TITLE} · ${SITE.legalName}`, description: DESCRIPTION, images: [`${SITE.url}${SITE.ogImage}`] },
};

export default function InteractiveMethodologyPage() {
  const url = `${SITE.url}${PATH}`;
  const jsonLd = jsonLdGraph([
    {
      "@type": "AboutPage",
      "@id": `${url}#about`,
      name: TITLE,
      description: DESCRIPTION,
      url,
      inLanguage: "en",
      dateModified: UPDATED_ISO,
      isPartOf: WEBSITE_REF,
      publisher: ORGANIZATION_REF,
      about: { "@type": "Thing", name: "TypologyQuiz interactive quizzes", url: `${SITE.url}/quizzes/` },
    },
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Methodology", path: "/methodology/" },
      { name: "Interactive quizzes", path: PATH },
    ]),
  ]);
  const tasksPerQuiz = TASK_COUNTS.length === 1 ? `${TASK_COUNTS[0]}` : `${TASK_COUNTS[0]} to ${TASK_COUNTS[TASK_COUNTS.length - 1]}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="section methodology-page">
        <p className="eyebrow">Methods & evidence · Updated {UPDATED_LABEL}</p>
        <h1 className="section-title">How our interactive quizzes work</h1>
        <p className="section-lead">
          This page describes the {SUMMARIES.length} interactive quizzes in the collection, which launched on October 18, 2026 and has grown since: what is in them, how they are scored, where their facts come from, who checked them, and what stays on your device. It covers only these quizzes. The older personality tests are described on the <Link href="/methodology/" className="text-link">main methodology page</Link>.
        </p>

        <section className="test-block">
          <h2 className="test-block-title">What is in the collection</h2>
          <p>
            There are {SUMMARIES.length} quizzes in {CATEGORIES.length} categories, with {TOTAL_TASKS.toLocaleString("en-US")} authored tasks in total. Each quiz has {tasksPerQuiz} authored tasks arranged in two or three sections. Some quizzes branch: a later task appears only after a particular earlier choice, so the length of an attempt can vary and the intro says &ldquo;up to&rdquo; when that applies. The minutes shown on each quiz, from {Math.min(...MINUTES)} to {Math.max(...MINUTES)}, are our estimates and were not measured with timed players.
          </p>
          <p>
            Tasks come in {FORMATS.length} formats: {FORMATS.map((format) => FORMAT_LABELS[format] ?? format).join(", ")}. Every quiz mixes at least two of them. Browse all categories from the <Link href="/quizzes/" className="text-link">interactive quiz directory</Link>.
          </p>
          <p>
            Three quizzes that show the range: {examples.map((quiz, index) => (
              <span key={quiz.slug}>{index > 0 && (index === examples.length - 1 ? ", and " : ", ")}<Link href={`/quizzes/${quiz.slug}/`} className="text-link">{quiz.title}</Link></span>
            ))}.
          </p>
        </section>

        <section className="test-block">
          <h2 className="test-block-title">Knowledge, preference and hybrid quizzes</h2>
          <p>Each quiz declares one kind, and the result screen follows it.</p>
          <table style={{ width: "100%", borderCollapse: "collapse", margin: "1rem 0" }}>
            <caption style={{ textAlign: "left", paddingBottom: 6 }}>Quiz kinds in the collection</caption>
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: "left", padding: "6px 8px", borderBottom: "1px solid currentColor" }}>Kind</th>
                <th scope="col" style={{ textAlign: "left", padding: "6px 8px", borderBottom: "1px solid currentColor" }}>Quizzes</th>
                <th scope="col" style={{ textAlign: "left", padding: "6px 8px", borderBottom: "1px solid currentColor" }}>What the result shows</th>
              </tr>
            </thead>
            <tbody>
              {KIND_ROWS.map((row) => ({ ...row, count: SUMMARIES.filter((quiz) => quiz.kind === row.kind).length }))
                .filter((row) => row.count > 0)
                .map((row) => (
                  <tr key={row.kind}>
                    <th scope="row" style={{ textAlign: "left", padding: "6px 8px", verticalAlign: "top" }}>{row.label}</th>
                    <td style={{ padding: "6px 8px", verticalAlign: "top" }}>{row.count}</td>
                    <td style={{ padding: "6px 8px", verticalAlign: "top" }}>{row.shows}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <p>
            <strong>Scoring objective tasks.</strong> Every task with a right answer carries the same weight. A single-choice task earns full or no credit. Ordering, matching, link-map and grid tasks can earn fractional partial credit: the share of pairs, matches or cells you got right. Where an ordering task is defined by rules such as &ldquo;A must come before B&rdquo;, every order that satisfies all the rules earns full credit, not just one listed sequence. In a link map you tick every link that applies, and a link that is not in the answer subtracts from your credit, so ticking everything does not help. The accuracy figure is total credit divided by the number of scored tasks. That can be fewer than the authored tasks you see: a route choice that only opens a later branch, or a prediction marked as ungraded, is shown and reviewed but is not counted, so a quiz with eight authored tasks may report accuracy over five.
          </p>
          <p>
            <strong>Describing preferences.</strong> Preference tasks have no right answers. Each choice is placed between the lowest and highest options available in that same task, ranked items are weighted by position, and the results are averaged onto one or two scales labelled with their own poles. A scale therefore describes where your picks in this quiz leaned. It is not compared with other people, is not a population norm, is not a diagnosis, and has not been scientifically validated as a measure of a trait. We make no claim that any quiz is better or more accurate than another way of learning or reflecting.
          </p>
        </section>

        <section className="test-block">
          <h2 className="test-block-title">How the task formats work</h2>
          <p>
            Choices can be forced pairs, short scenarios or ranked lists. Matching tasks use layers of items and may reuse the same target for several items. Link maps are many-to-many: one item can connect to several others, or to none. Grids ask for one choice per row. Sliders put you between two labelled poles. Diagram tasks present an original labelled diagram and ask you to pick among labelled alternatives. Listening tasks use original tones generated in your browser, and each one has a written transcript. A reflection task is an optional free-text prompt. Branching tasks appear only after the earlier choice that opens them.
          </p>
          <p>
            Interaction uses buttons, selects, checkboxes and sliders. There is no drag and drop, no live multiplayer network, no countdown timer, no video, no AI analysis of your free text and no external AI service in the player. Scoring is a fixed, automatic calculation that runs in your browser. Pass-and-play quizzes are one device handed between two to four anonymous players. That is different from cooperative puzzles, which can be answered jointly by one group; not every cooperative puzzle uses a hand-off.
          </p>
        </section>

        <section className="test-block">
          <h2 className="test-block-title">What makes this collection distinctive</h2>
          <p>
            Four things are combined here, and the combination is the point. Original cases state every rule and piece of data they need in the task itself, so you can solve them without outside knowledge. Where a task rests on a real-world fact, it is tied to a reference source. Objective scoring and preference description are kept separate, so a quiz never blends a right-answer score with a description of your tastes. And play is private by default: no account, no upload of answers.
          </p>
        </section>

        <section className="test-block">
          <h2 className="test-block-title">Sources and invented data</h2>
          <p>
            After you finish, the task review shows the explanation for each task and lists its sources. A source is labelled either as a linked reference or as an original case written for the quiz. Each quiz page also lists any references under &ldquo;About this quiz&rdquo;. Reference links point to the places the facts were checked, but a link is not a guarantee that the page will stay unchanged.
          </p>
          <p>
            Invented contexts in original cases are labeled as such. Cases we wrote may still refer to real cities or facts, and when they do the reference is shown with the task. Survey-style quizzes use explicitly fictional datasets and own-choice questions; none reports a real poll. Quizzes on artificial intelligence topics are written tasks and do not use an AI service. We have not tested whether any quiz improves learning or any other outcome, and we make no claims about engagement or results from using them.
          </p>
        </section>

        <section className="test-block">
          <h2 className="test-block-title">How the quizzes were written and checked</h2>
          <p>
            The quizzes were authored with AI assistance. They then went through a separate AI-assisted content and code review, and corrections were applied after that separate review. Automated structural tests check that every quiz has the expected tasks, sources and answer keys, that perfect answers earn full credit, that malformed answers are rejected, and that partially correct objective answers earn only partial credit.
          </p>
          <p>
            This is not an independent human fact-check of every item, and it is not psychometric validation. Mistakes are possible. If you find one, email <a className="text-link" href={`mailto:${SITE.email}`}>{SITE.email}</a> and include the quiz name and task number. Please do not send personal answers or other sensitive details.
          </p>
        </section>

        <section className="test-block">
          <h2 className="test-block-title">No outside AI, and what stays on your device</h2>
          <p>
            The quiz player does not call any external AI service. Optional free-writing prompts are not scored, saved or sent anywhere; the text stays on the page until you leave it. No model infers your preferences from what you write. Preference summaries come only from the options you pick, computed in your browser.
          </p>
          <p>
            Solo progress is kept in your browser under its own storage namespace so you can resume, and it is cleared when you finish or discard it. Reflection text is never part of what is saved. In pass-and-play mode, each player&rsquo;s answers stay in the open tab, with hand-off screens that hide earlier answers; progress is not written to browser storage. A cooperative puzzle answered jointly uses the ordinary saved-progress behavior. The shared URL is the plain quiz URL, without answers or results. Sharing includes your editable message; if you choose &ldquo;Add my accuracy&rdquo;, the accuracy is added to that message and is visible to whoever receives it. No answers or results are automatically encoded in the URL.
          </p>
          <p>
            When traffic measurement is enabled, the new quizzes send an event when an attempt starts and when it finishes, carrying only the quiz ID, its version and the canonical page path of the quiz. Scores, answers, reflections and names are not sent. A start event also fires when you resume saved progress, and a complete event fires once per loaded attempt (for pass-and-play, once after the last player), so start counts are not unique people or unique attempts. Google identifiers and cookies are handled as described on the <Link href="/about/" className="text-link">About & privacy page</Link>.
          </p>
        </section>

        <p className="methodology-footer">
          <Link href="/methodology/" className="text-link">Main methodology</Link>{" · "}
          <Link href="/quizzes/" className="text-link">Interactive quizzes</Link>{" · "}
          <Link href="/credits/" className="text-link">Credits & rights</Link>{" · "}
          <Link href="/about/" className="text-link">Privacy & contact</Link>
        </p>
      </div>
    </>
  );
}
