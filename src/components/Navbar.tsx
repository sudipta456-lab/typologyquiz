"use client";

import Link from "next/link";
import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
  /** Struck-through word shown before the label, e.g. crossing out "Account". */
  strikeLabel?: string;
}

const links: NavLink[] = [
  { href: "/tests", label: "Tests" },
  // Driving sits right after Tests: it is the other half of the catalogue now,
  // and it is what people arrive searching for.
  { href: "/driving", label: "Driving" },
  { href: "/daily", label: "Daily" },
  { href: "/room", label: "Rooms" },
  { href: "/compare", label: "Compare" },
  // Rendered as a struck-through "Account" followed by "Display Name". It is a
  // small joke that does real work: the thing people expect to find here is an
  // account, and crossing the word out says "there isn't one" faster than any
  // reassurance copy elsewhere on the page could.
  { href: "/account", label: "Display Name", strikeLabel: "Account" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-logo" onClick={() => setOpen(false)}>
          <img
            src="/assets/typologyquiz-logo.svg"
            alt="TypologyQuiz - discover your type"
            className="site-logo-img"
            width={220}
            height={52}
          />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? "nav-toggle-bar open" : "nav-toggle-bar"} />
          <span className={open ? "nav-toggle-bar open" : "nav-toggle-bar"} />
          <span className={open ? "nav-toggle-bar open" : "nav-toggle-bar"} />
        </button>

        <nav className={open ? "site-nav open" : "site-nav"} aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              onClick={() => setOpen(false)}
              // The struck word is decorative, so screen readers get the plain
              // label rather than "Account Display Name".
              aria-label={l.strikeLabel ? l.label : undefined}
            >
              {l.strikeLabel && (
                <span
                  aria-hidden="true"
                  style={{
                    textDecoration: "line-through",
                    textDecorationThickness: "2px",
                    textDecorationColor: "#f9684d",
                    opacity: 0.55,
                    marginRight: 5,
                    fontSize: "0.92em",
                  }}
                >
                  {l.strikeLabel}
                </span>
              )}
              {l.label}
            </Link>
          ))}
          <Link href="/test/friend-role" className="btn-primary nav-cta" onClick={() => setOpen(false)}>
            Friend Role
          </Link>
        </nav>
      </div>
    </header>
  );
}
