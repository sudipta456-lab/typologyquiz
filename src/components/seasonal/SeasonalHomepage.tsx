'use client';

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import { HOMEPAGE_THEMES, getHomepageThemeId, subscribeToThemeClock, type HomepageTheme, type ThemeMotif } from './theme-calendar';
import styles from './SeasonalHomepage.module.css';

type Pick = { title: string; slug: string; minutes: number; questionCount: number };
export type SeasonalPicks = Record<string, Pick>;
const serverTheme = () => '';
const NEUTRAL_THEME: HomepageTheme = {
  id: 'curiosity-club', month: 0, fromDay: 1, name: 'The curiosity club',
  title: 'Follow your curiosity.', description: 'Good questions. Unexpected discoveries. Choose a starting point and follow it.',
  motif: 'orbit', accent: '#d0c0ff', companion: '#c8edb0', detours: [
    { label: 'A side quest', quizId: 'PC-04', hook: 'An ordinary errand. An unexpected lead. Which detour would you choose to follow?' },
    { label: 'Outside clues', quizId: 'SN-01', hook: 'Find a scientific question in everyday observations.' },
    { label: 'A good story', quizId: 'HC-03', hook: 'Explore the evidence in an incomplete archive.' },
  ],
};
const serverReducedMotion = () => true;
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function subscribeToMotion(onChange: () => void) {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

/** Original vector artwork: no image requests, video, audio or animation library. */
function ThemeArt({ motif, selected }: { motif: ThemeMotif; selected: number }) {
  return <div className={styles.scene} data-motif={motif} data-door={selected} aria-hidden="true">
    <div className={styles.sceneGrid} />
    <div className={styles.sceneCaption}><span>TYPOLOGY / CURIOSITY CLUB</span><span>EST. IN YOUR IMAGINATION</span></div>
    <svg className={styles.drawing} viewBox="0 0 480 330" fill="none" focusable="false">
      <defs>
        <radialGradient id={`halo-${motif}`}><stop stopColor="var(--season-accent)" stopOpacity=".22" /><stop offset="1" stopColor="var(--season-accent)" stopOpacity="0" /></radialGradient>
        <linearGradient id={`door-${motif}`} x1="240" y1="75" x2="240" y2="290" gradientUnits="userSpaceOnUse"><stop stopColor="var(--season-accent)" stopOpacity=".28" /><stop offset="1" stopColor="var(--season-accent)" stopOpacity=".02" /></linearGradient>
      </defs>
      <circle cx="240" cy="155" r="160" fill={`url(#halo-${motif})`} />
      {motif === 'portal' && <>
        <g className={styles.moon}><circle cx="325" cy="70" r="26" fill="var(--season-companion)" /><circle cx="336" cy="60" r="23" fill="#171426" /></g>
        <path d="M145 274V150a95 95 0 0 1 190 0v124" stroke="var(--season-accent)" strokeOpacity=".28" />
        <path d="M166 274V150a74 74 0 0 1 148 0v124Z" fill={`url(#door-${motif})`} stroke="var(--season-accent)" strokeWidth="2" />
        <g className={styles.innerDoor}><path d="M197 269V151q0-63 70-68v186Z" fill="#171426" stroke="var(--season-accent)" strokeWidth="1.5" /><circle cx="250" cy="193" r="3" fill="var(--season-companion)" /></g>
        <path d="M141 276h198l15 13H126Zm-15 13h228l14 13H112" stroke="var(--season-accent)" strokeOpacity=".5" />
        <g className={styles.bat}><path d="m93 112 13 8 12-4-5 13-11-3-8 8-3-13-12-4Z" fill="var(--season-companion)" /><path d="m364 145 9 5 8-2-4 9-7-2-6 5-2-8-8-3Z" fill="var(--season-accent)" /></g>
        <path className={styles.mist} d="M67 266q58-23 117 0t117 0 117 0M32 284q70-17 140 0t140 0 140 0" stroke="var(--season-accent)" strokeOpacity=".22" strokeWidth="2" />
      </>}
      {motif === 'paper' && <>
        <g className={styles.paperBack}><path d="m149 82 171 13-15 197-171-13Z" fill="#282337" stroke="var(--season-companion)" strokeOpacity=".7" /></g>
        <g className={styles.paperFront}><path d="m175 66 166 29-34 193-166-29Z" fill="var(--season-accent)" /><path d="m194 110 112 20m-119 17 112 20m-119 17 77 13m-84 24 99 18" stroke="#332d45" strokeWidth="2" strokeLinecap="round" /><path d="m259 88 30 5-14 49-11-16-17 7Z" fill="#332d45" /></g>
        <path className={styles.mist} d="M80 215q-18-55 35-60m249 44q44 24 21 60" stroke="var(--season-companion)" strokeDasharray="4 8" />
      </>}
      {motif === 'garden' && <>
        <circle cx="241" cy="158" r="99" stroke="var(--season-accent)" strokeOpacity=".35" />
        <g className={styles.sprout}><path d="M242 274V143m0 67q-81-3-73-68 71 1 73 68Zm0-24q72-2 71-63-70-3-71 63Z" fill="var(--season-companion)" fillOpacity=".14" stroke="var(--season-companion)" strokeWidth="2" /><path d="m184 159 58 51 57-68" stroke="var(--season-companion)" strokeOpacity=".6" /></g>
        <path d="M155 276h174m-156 10h139" stroke="var(--season-accent)" strokeOpacity=".6" /><g className={styles.orbitDot}><circle cx="341" cy="144" r="7" fill="var(--season-accent)" /></g>
      </>}
      {motif === 'signal' && <>
        <g className={styles.paperBack}><rect x="114" y="100" width="171" height="110" rx="18" fill="#282337" stroke="var(--season-companion)" /><path d="m139 210-9 23 35-23" fill="#282337" stroke="var(--season-companion)" /><path d="M143 132h111m-111 22h76m-76 22h92" stroke="var(--season-companion)" strokeWidth="2" /></g>
        <g className={styles.paperFront}><rect x="216" y="177" width="141" height="80" rx="16" fill="var(--season-accent)" /><path d="m326 257 10 23-36-23" fill="var(--season-accent)" /><circle cx="253" cy="217" r="4" fill="#332d45" /><circle cx="284" cy="217" r="4" fill="#332d45" /><circle cx="315" cy="217" r="4" fill="#332d45" /></g>
        <path className={styles.mist} d="M321 87q34 0 34 35m-31-17q13 0 13 14" stroke="var(--season-companion)" strokeWidth="2" strokeLinecap="round" />
      </>}
      {motif === 'atlas' && <>
        <g className={styles.paperFront}><path d="m108 124 88-30 88 26 88-28v160l-88 28-88-26-88 30Z" fill="#282337" stroke="var(--season-accent)" strokeWidth="2" /><path d="M196 94v160m88-134v160" stroke="var(--season-accent)" strokeOpacity=".5" /><path d="M133 235q21-87 71-60t51-13 92-27" stroke="var(--season-companion)" strokeWidth="2" strokeDasharray="5 8" /><circle cx="133" cy="235" r="5" fill="var(--season-companion)" /><path d="m341 119 12 12m0-12-12 12" stroke="var(--season-companion)" strokeWidth="3" /></g>
      </>}
      {motif === 'orbit' && <>
        <circle cx="240" cy="173" r="62" fill={`url(#door-${motif})`} stroke="var(--season-accent)" strokeWidth="2" /><ellipse cx="240" cy="173" rx="146" ry="47" transform="rotate(-24 240 173)" stroke="var(--season-companion)" /><ellipse cx="240" cy="173" rx="105" ry="124" transform="rotate(33 240 173)" stroke="var(--season-accent)" strokeOpacity=".4" /><g className={styles.orbitDot}><circle cx="113" cy="223" r="9" fill="var(--season-companion)" /><circle cx="309" cy="76" r="5" fill="var(--season-accent)" /></g>
      </>}
      <g className={styles.sparks} stroke="var(--season-companion)" strokeLinecap="round"><path d="M102 69v12m-6-6h12m278 133v12m-6-6h12M364 64v8m-4-4h8" /><circle cx="87" cy="175" r="1" /><circle cx="350" cy="277" r="1" /><circle cx="273" cy="44" r="1" /></g>
    </svg>
    <div className={styles.artStamp}>{motif === 'portal' ? ['READ THE', 'MEET THE', 'QUESTION THE'][selected] : 'FOLLOW THE'}<br /><strong>{motif === 'portal' ? ['CLUES.', 'NIGHT.', 'CUT.'][selected] : 'UNEXPECTED.'}</strong></div>
    <span className={styles.sceneFootnote}>{motif === 'portal' ? 'NO JUMP SCARES. JUST GOOD QUESTIONS.' : 'ONE SMALL QUESTION CAN OPEN A WORLD.'}</span>
  </div>;
}

function ThemePanel({ theme, picks, reduced, paused, onPause, onHide }: {
  theme: HomepageTheme; picks: SeasonalPicks; reduced: boolean; paused: boolean;
  onPause: () => void; onHide: () => void;
}) {
  const [selected, setSelected] = useState(0);
  const detour = theme.detours[selected];
  const pick = picks[detour.quizId];
  return <section className={styles.panel} aria-labelledby="season-heading" data-paused={paused || reduced}>
    <div className={styles.panelTop}><p><span className={styles.statusDot} />{theme.name}<span className={styles.edition}> / THE CURIOSITY EDIT</span></p><div className={styles.utility}>
      <button type="button" onClick={onPause} disabled={reduced} aria-pressed={paused || reduced} aria-label={reduced ? 'Motion off: reduced motion' : undefined}>{reduced ? 'Motion off' : paused ? 'Play motion' : 'Pause motion'}</button>
      <button type="button" onClick={onHide} aria-label="Hide seasonal theme">Hide <span aria-hidden="true">×</span></button>
    </div></div>
    <div className={styles.panelBody}>
      <div className={styles.copy}><p className={styles.kicker}>{theme.motif === 'portal' ? 'HALLOWEEN, WITH A PLOT.' : 'A DIFFERENT KIND OF DETOUR.'}</p><h2 id="season-heading" tabIndex={-1}>{theme.title}</h2><p className={styles.description}>{theme.description}</p>
        <div className={styles.choices} role="group" aria-label="Choose your curiosity detour">{theme.detours.map((choice, index) => <button type="button" key={choice.quizId} aria-pressed={selected === index} aria-controls="season-detour" onClick={() => setSelected(index)}><span className={styles.choiceNumber}>0{index + 1}</span><span className={styles.choiceLabel}>{choice.label}</span><span aria-hidden="true">↗</span></button>)}</div>
        <div id="season-detour" className={styles.detour} aria-live="polite" aria-atomic="true"><p>{detour.hook}</p>{pick && <Link className={styles.cta} href={`/quizzes/${pick.slug}/`}><span>{theme.motif === 'portal' ? 'Open this door' : 'Take this detour'} <span aria-hidden="true">↗</span></span><small>{pick.title} · {pick.questionCount} tasks · {pick.minutes} min</small></Link>}</div>
      </div>
      <ThemeArt motif={theme.motif} selected={selected} />
    </div>
    <div className={styles.panelBottom}><span>{theme.motif === 'portal' ? 'A LITTLE UNEASE. A LOT TO DISCOVER.' : 'MADE FOR CURIOUS PEOPLE.'}</span><Link href="/quizzes/">All quizzes <span aria-hidden="true">↗</span></Link></div>
  </section>;
}

export default function SeasonalHomepage({ children, intro, picks }: { children: ReactNode; intro: ReactNode; picks: SeasonalPicks }) {
  const id = useSyncExternalStore(subscribeToThemeClock, getHomepageThemeId, serverTheme);
  const reduced = useSyncExternalStore(subscribeToMotion, reducedMotion, serverReducedMotion);
  const [hidden, setHidden] = useState(false);
  const [paused, setPaused] = useState(false);
  const restoreFocus = useRef(false);
  useEffect(() => {
    if (!hidden && restoreFocus.current) {
      restoreFocus.current = false;
      document.getElementById('season-heading')?.focus({ preventScroll: true });
    }
  }, [hidden]);
  const theme = HOMEPAGE_THEMES.find(theme => theme.id === id);
  const variables = theme && !hidden ? { '--season-accent': theme.accent, '--season-companion': theme.companion } as CSSProperties : undefined;
  return <div className={`discovery section ${styles.home}`} style={variables} data-homepage-theme={hidden ? 'hidden' : theme?.id ?? 'loading'}>
    {intro}
    <div className={styles.themeSlot}>
      {hidden ? <button className={styles.restore} type="button" onClick={() => { restoreFocus.current = true; setHidden(false); }}>Show seasonal theme <span aria-hidden="true">↗</span></button> : <ThemePanel key={theme?.id ?? NEUTRAL_THEME.id} theme={theme ?? NEUTRAL_THEME} picks={picks} reduced={reduced} paused={paused} onPause={() => setPaused(value => !value)} onHide={() => {
        document.getElementById('home-heading')?.focus({ preventScroll: true });
        setHidden(true);
      }} />}
    </div>
    {children}
  </div>;
}
