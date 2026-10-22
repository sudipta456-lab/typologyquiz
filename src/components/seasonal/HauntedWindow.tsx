'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './HauntedWindow.module.css';
import { isHalloweenSeason } from './halloween-season';

const RIDDLES = [
  { text: 'What peeks without a sound?', reveal: 'A quiet shape behind the glass.', offset: 12 },
  { text: 'What glows but never speaks?', reveal: 'A small lantern keeping watch.', offset: 0 },
  { text: 'What stays when the panes stay still?', reveal: 'A friendly presence, just looking.', offset: 6 },
];

export default function HauntedWindow() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
      setActive(isHalloweenSeason(new Date()));
    }, 0);
    const check = () => setActive(isHalloweenSeason(new Date()));
    const interval = setInterval(check, 60000);
    const onVisibility = () => {
      if (document.visibilityState === 'visible') check();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  if (!mounted || dismissed || !active) return null;
  const riddle = RIDDLES[index];
  return (
    <div className={styles.wrapper} role="region" aria-label="Halloween window">
      <div className={`${styles.card} ${paused ? styles.paused : ''}`}>
        <div className={styles.layout}>
          <div className={styles.art} aria-hidden="true">
            <div className={styles.window}>
              <div className={styles.panes} />
              <div className={styles.ghostOuter} style={{ transform: `translateY(${riddle.offset}px)` }}>
                <svg className={styles.ghost} viewBox="0 0 60 80">
                  <path d="M10 40 Q10 10 30 10 Q50 10 50 40 L50 70 Q40 65 30 70 Q20 65 10 70 Z" fill="#faf8f5" />
                  <circle cx="22" cy="35" r="4" fill="#1a1a2e" />
                  <circle cx="38" cy="35" r="4" fill="#1a1a2e" />
                  <path d="M20 50 Q30 55 40 50" stroke="#1a1a2e" fill="none" strokeWidth="1.5" />
                </svg>
              </div>
              <svg className={styles.lantern} viewBox="0 0 40 52">
                <polygon points="20,2 26,10 14,10" fill="#3d3d5c" />
                <rect x="10" y="10" width="20" height="28" rx="3" fill="#e67e22" />
                <rect x="10" y="10" width="20" height="28" rx="3" fill="none" stroke="#d35400" strokeWidth="1" />
                <circle cx="20" cy="24" r="4" fill="#fff3e0" opacity="0.7" />
                <rect x="18" y="38" width="4" height="8" fill="#3d3d5c" />
              </svg>
              <svg className={styles.constellation} viewBox="0 0 120 100">
                <circle cx="25" cy="35" r="1.2" fill="#faf8f5" />
                <circle cx="48" cy="28" r="1.4" fill="#faf8f5" />
                <circle cx="72" cy="38" r="1.1" fill="#faf8f5" />
                <circle cx="95" cy="32" r="1.3" fill="#faf8f5" />
                <line x1="25" y1="35" x2="48" y2="28" stroke="#faf8f5" strokeWidth="0.4" opacity="0.6" />
                <line x1="48" y1="28" x2="72" y2="38" stroke="#faf8f5" strokeWidth="0.4" opacity="0.6" />
                <line x1="72" y1="38" x2="95" y2="32" stroke="#faf8f5" strokeWidth="0.4" opacity="0.6" />
              </svg>
            </div>
          </div>
          <div className={styles.text}>
            <h2 className={styles.heading}>A little haunted curiosity</h2>
            <p className={styles.tagline}>A friendly ghost. A different little mystery.</p>
            <p className={styles.riddle} aria-live="polite" aria-atomic="true">{revealed ? riddle.reveal : riddle.text}</p>
            <div className={styles.controls}>
              <button type="button" className={styles.btn} onClick={() => {
                if (!revealed) setRevealed(true);
                else { setRevealed(false); setIndex((index + 1) % RIDDLES.length); }
              }}>{revealed ? 'Next' : 'Knock on the window'}</button>
              <button type="button" className={styles.btn} onClick={() => setPaused(p => !p)} aria-pressed={paused} aria-label={paused ? 'Resume animation' : 'Pause animation'}>{paused ? 'Resume' : 'Pause'}</button>
              <Link href="/quizzes/" className={styles.link}>Browse all quizzes</Link>
              <button type="button" className={styles.btn} onClick={() => {
                document.getElementById('home-heading')?.focus({ preventScroll: true });
                setDismissed(true);
              }} aria-label="Close Halloween window">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
