"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/tests", label: "Tests" },
  { href: "/daily", label: "Daily" },
  { href: "/room", label: "Rooms" },
  { href: "/compare", label: "Compare" },
  { href: "/account", label: "Account" },
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
            <Link key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
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
