import Link from "next/link";

const PATHS = [
  {
    key: "friends",
    title: "Friends",
    blurb: "Group chat roles, social energy, how you attach.",
    href: "/test/friend-role",
    secondary: [
      { label: "Social Battery", href: "/test/social-battery" },
      { label: "Texting Style", href: "/test/texting-style" },
    ],
    code: "01",
  },
  {
    key: "school",
    title: "School",
    blurb: "Class projects, study energy, future interests.",
    href: "/test/class-archetype",
    secondary: [
      { label: "Study Energy", href: "/test/study-energy" },
      { label: "Career Interests", href: "/test/career-interests" },
    ],
    code: "02",
  },
  {
    key: "brain",
    title: "Brain",
    blurb: "Thinking, imagery, plans, FOMO vibes.",
    href: "/test/study-energy",
    secondary: [
      { label: "FOMO Style", href: "/test/fomo-style" },
      { label: "CRT", href: "/test/crt-7" },
    ],
    code: "03",
  },
];

export function StartHere() {
  return (
    <section id="start-here" className="band">
      <div className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Not sure? Start here</h2>
            <p className="section-sub">Pick a lane. Two minutes. No wrong door.</p>
          </div>
        </div>
        <div className="start-here-grid">
          {PATHS.map((p) => (
            <div key={p.key} className="start-here-card">
              <span className="start-here-code">{p.code}</span>
              <h3 className="start-here-title">{p.title}</h3>
              <p className="start-here-blurb">{p.blurb}</p>
              <Link href={p.href} className="btn-primary start-here-cta">
                Go
              </Link>
              <div className="start-here-also">
                <span className="start-here-also-label">Also:</span>
                {p.secondary.map((s, i) => (
                  <span key={s.href} className="start-here-also-item">
                    {i > 0 && <span className="start-here-dot" aria-hidden="true">·</span>}
                    <Link href={s.href} className="start-here-link">
                      {s.label}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
