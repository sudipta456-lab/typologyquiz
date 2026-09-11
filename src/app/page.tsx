import Link from "next/link";
import { TESTS } from "@/lib/tests/registry";
import { QuizShelf } from "@/components/QuizShelf";
import { RegionPicker } from "@/components/RegionPicker";
import { latestEditions } from "@/lib/newsquiz/editions";
import { editionPath } from "@/lib/editorial/identity";

const selections = [
  { slug: "friend-role", tone: "blue" },
  { slug: "social-battery", tone: "teal" },
  { slug: "brain-2am", tone: "pink" },
  { slug: "mini-ipip", tone: "coral", description: "Explore five traits: openness, conscientiousness, extraversion, agreeableness, and neuroticism." },
  { slug: "overthinker-level", tone: "blue" },
];
export default function Home() {
  const picks = selections.map(pick => { const test = TESTS.find(test => test.slug === pick.slug)!; return { ...pick, title: test.title, description: pick.description ?? test.description, timeMinutes: test.timeMinutes, itemCount: test.itemCount }; });
  const editions = latestEditions().slice(0, 2);
  return <div className="discovery section">
    <div className="discovery-intro"><h1>Find your next quiz.</h1><p>A few minutes for yourself, a challenge for friends, or practice for your learner’s test.</p></div>
    <nav className="discovery-paths" aria-label="Explore quiz categories">
      <Link className="tone-blue" href="/tests/"><span>Personality <span aria-hidden="true">↗</span></span><small>Traits & habits</small></Link>
      <Link className="tone-coral" href="/trivia/"><span>Trivia <span aria-hidden="true">↗</span></span><small>Maps & knowledge</small></Link>
      <Link className="tone-teal" href="/driving/"><span>Driving <span aria-hidden="true">↗</span></span><small>Learner’s test prep</small></Link>
      <Link className="tone-pink" href="/friends/"><span>With friends <span aria-hidden="true">↗</span></span><small>Quizzes to share</small></Link>
    </nav>
    <QuizShelf picks={picks} />
    <div className="discovery-columns">
      <section className="knowledge-picks"><p className="eyebrow">Against the clock</p><div className="discovery-section-head"><h2>How many can you name?</h2></div>
        {[["us-states", "50", "US states", "Fill the map, one state at a time."], ["countries-of-the-world", "196", "Countries of the world", "See how far your geography takes you."], ["periodic-table", "118", "The periodic table", "From hydrogen to oganesson."]].map(([slug, number, title, desc]) => <Link key={slug} className="knowledge-row" href={`/trivia/${slug}/`}><span className="knowledge-number">{number}</span><span><strong>{title}</strong><small>{desc}</small></span><span aria-hidden="true">↗</span></Link>)}
        <Link href="/trivia/" className="text-link shelf-browse">All trivia & map quizzes →</Link>
      </section>
      <section className="news-feature"><p className="eyebrow">The news quiz archive</p><h2>Remember the headlines?</h2><p>Choose a dated round and see what stuck. Each answer includes sources to read further.</p><div className="news-editions">{editions.map(edition => <Link key={edition.id} href={editionPath(edition)}><time dateTime={edition.publishedAt}>{new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(edition.publishedAt))}</time><strong>{edition.title} <span aria-hidden="true">↗</span></strong></Link>)}</div><Link href="/weekly/" className="text-link">Browse editions & follow a series →</Link></section>
    </div>
    <section className="driving-discovery"><div><p className="eyebrow">Before you take the wheel</p><h2>Practice for your learner’s test.</h2><p>Road signs, rules, and explanations linked to the official handbook. Start with where you’ll take the test.</p><Link href="/driving/" className="text-link">Browse all locations →</Link></div><RegionPicker /></section>
    <section className="friends-discovery"><p className="eyebrow">Better with a second opinion</p><div className="discovery-section-head"><h2>Send the group chat something to do.</h2><Link href="/friends/" className="text-link">Ways to play together →</Link></div><div className="friend-options"><Link href="/friend-quiz/"><strong>How well do they know you? <span aria-hidden="true">↗</span></strong><p>Make a quiz about yourself. Send the link and let your friends try.</p></Link><Link href="/compare/"><strong>Same quiz. Different people. <span aria-hidden="true">↗</span></strong><p>Put two personality results side by side and compare your traits.</p></Link></div></section>
  </div>;
}
