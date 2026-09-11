import Link from "next/link";
import { SITE } from "@/lib/site";

const groups = [
  { title: "Explore", links: [["Personality quizzes", "/tests/"], ["Trivia & maps", "/trivia/"], ["Driving practice", "/driving/"], ["Weekly news", "/weekly/"], ["Daily question", "/daily/"]] },
  { title: "With friends", links: [["Make a friend quiz", "/friend-quiz/"], ["Fool your friends", "/fool/"], ["Compare results", "/compare/"], ["Create or join a room", "/room/"]] },
  { title: "Good to know", links: [["Name & appearance", "/account/"], ["About & privacy", "/about/"], ["Sources & credits", "/credits/"], ["How tests work", "/methodology/"], ["Your reflections", "/reflections/"]] },
];
export function Footer() {
  return <footer className="site-footer">
    <div className="site-footer-inner">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="site-logo"><img src="/assets/typologyquiz-logo.svg" alt={SITE.legalName} className="footer-logo-img" width={220} height={68} /></Link>
          <p className="footer-tagline">Personality, knowledge, and a little friendly competition. Free to play.</p>
        </div>
        <div className="footer-cols">
          {groups.map(group => <div key={group.title}><h2 className="footer-heading">{group.title}</h2><div className="footer-links">
            {group.links.map(([label, href]) => <Link key={href} href={href} className="footer-link">{label}</Link>)}
            {group.title === "Good to know" && <a href={`mailto:${SITE.email}`} className="footer-link">Contact</a>}
          </div></div>)}
        </div>
      </div>
      <div className="footer-bottom"><span className="footer-copy">© {new Date().getFullYear()} {SITE.legalName}</span><span className="footer-copy">Personality quizzes are for self-reflection.</span></div>
    </div>
  </footer>;
}
