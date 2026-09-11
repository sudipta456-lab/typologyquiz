"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const destinations = [
  { href: "/tests/", label: "Personality", description: "Habits, traits & how you think", tone: "blue", paths: ["/tests", "/test/"] },
  { href: "/trivia/", label: "Trivia", description: "Maps, science & general knowledge", tone: "coral", paths: ["/trivia"] },
  { href: "/driving/", label: "Driving", description: "Find your province or state", tone: "teal", paths: ["/driving"] },
  { href: "/friends/", label: "With friends", description: "Make a quiz, compare & play together", tone: "pink", paths: ["/friends", "/friend-quiz", "/compare", "/room", "/fool"] },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuPath(null); toggle.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setMenuPath(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", outside); };
  }, [open]);
  const close = () => setMenuPath(null);
  return <header className="site-header" ref={header}>
    <div className="site-header-inner">
      <Link href="/" className="site-logo" onClick={close} aria-label="TypologyQuiz home">
        <img src="/assets/typologyquiz-logo.svg" alt="TypologyQuiz" className="site-logo-img" width={220} height={68} />
      </Link>
      <nav className="desktop-nav" aria-label="Primary">
        {destinations.map(item => <Link key={item.href} href={item.href} aria-current={item.paths.some(p => pathname.startsWith(p)) ? "page" : undefined}>{item.label}</Link>)}
        <Link href="/weekly/" aria-current={pathname.startsWith("/weekly") ? "page" : undefined}>Weekly news</Link>
      </nav>
      <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="site-menu" onClick={() => setMenuPath(open ? null : pathname)}>
        {open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "+"}</span>
      </button>
    </div>
    <nav id="site-menu" className="site-menu" aria-label="All destinations" hidden={!open} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== toggle.current) close(); }}>
      <div className="site-menu-inner">
        <div className="menu-destinations">
          {destinations.map(item => <Link key={item.href} href={item.href} className={`menu-destination tone-${item.tone}`} onClick={close} aria-current={item.paths.some(p => pathname.startsWith(p)) ? "page" : undefined}>
            <strong>{item.label}<span aria-hidden="true">↗</span></strong><span>{item.description}</span>
          </Link>)}
        </div>
        <div className="menu-utility">
          <Link href="/weekly/" onClick={close}>Weekly news quizzes <span>Play a dated edition</span></Link>
          <Link href="/daily/" onClick={close}>Daily question <span>A quick check-in</span></Link>
          <Link href="/account/" onClick={close}>Name & appearance <span>Display name, theme & school mode</span></Link>
          <Link href="/about/" onClick={close}>About TypologyQuiz</Link>
        </div>
      </div>
    </nav>
  </header>;
}
