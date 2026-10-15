import type { MovieMotif } from "@/lib/trivia/movies";

/**
 * Original abstract cover art for the movie collection. Every motif is drawn
 * from plain shapes: no posters, stills, logos, characters or actor likenesses.
 * The art is decorative, so the SVG is hidden from assistive technology and
 * the nearby heading carries the meaning.
 */
function Motif({ motif }: { motif: MovieMotif }) {
  switch (motif) {
    case "clapper":
      return <g><rect x="92" y="92" width="136" height="80" rx="6" fill="#14141f" /><g transform="rotate(-14 92 92)"><rect x="92" y="62" width="136" height="26" rx="4" fill="#fff" /><path d="M110 62l-14 26h22l14-26zM152 62l-14 26h22l14-26zM194 62l-14 26h22l14-26z" fill="#14141f" /></g><rect x="92" y="88" width="136" height="14" fill="#fff" opacity=".9" /><circle cx="130" cy="136" r="14" fill="#fff" opacity=".25" /><path d="M170 128h40M170 144h28" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".6" /></g>;
    case "ticket":
      return <g transform="rotate(-8 160 100)"><path d="M70 68h180v22a14 14 0 0 0 0 28v22H70v-22a14 14 0 0 0 0-28z" fill="#fff" /><path d="M200 72v92" stroke="#14141f" strokeWidth="3" strokeDasharray="6 7" opacity=".4" /><path d="M120 102l8 17 19 3-14 13 3 19-16-9-17 9 3-19-14-13 19-3z" fill="currentColor" /><path d="M214 96h22M214 112h22M214 128h14" stroke="#14141f" strokeWidth="5" strokeLinecap="round" opacity=".5" /></g>;
    case "badge":
      return <g><path d="M138 20v54M182 20v54" stroke="#fff" strokeWidth="8" opacity=".7" /><rect x="100" y="70" width="120" height="104" rx="12" fill="#fff" /><circle cx="160" cy="108" r="19" fill="currentColor" /><path d="M126 160c4-22 16-28 34-28s30 6 34 28z" fill="currentColor" opacity=".8" /><rect x="128" y="76" width="64" height="8" rx="4" fill="#14141f" opacity=".5" /></g>;
    case "compass":
      return <g><circle cx="160" cy="100" r="68" fill="#fff" /><circle cx="160" cy="100" r="58" fill="none" stroke="#14141f" strokeWidth="3" opacity=".4" /><path d="M160 46l14 54-14 54-14-54z" fill="currentColor" /><path d="M160 46l14 54h-28z" fill="#14141f" /><circle cx="160" cy="100" r="7" fill="#fff" /><path d="M160 36v8M160 156v8M96 100h8M216 100h8" stroke="#14141f" strokeWidth="4" strokeLinecap="round" /></g>;
    case "sidekick":
      return <g><circle cx="132" cy="88" r="36" fill="#fff" /><path d="M78 176c4-44 28-58 54-58s50 14 54 58z" fill="#fff" /><circle cx="214" cy="116" r="24" fill="#14141f" opacity=".85" /><path d="M176 176c3-30 18-40 38-40s35 10 38 40z" fill="#14141f" opacity=".85" /><path d="M214 66l5 11 12 2-9 8 2 12-10-6-10 6 2-12-9-8 12-2z" fill="#fff" /></g>;
    case "mask":
      return <g><path d="M70 92c24-24 60-22 90-6 30-16 66-18 90 6-6 38-30 58-58 40-12-8-22-22-32-22s-20 14-32 22C100 150 76 130 70 92z" fill="#14141f" /><ellipse cx="116" cy="102" rx="20" ry="12" fill="#fff" /><ellipse cx="204" cy="102" rx="20" ry="12" fill="#fff" /><path d="M96 52l16 24 18-30 16 32 14-30 14 30 16-32 18 30 16-24" fill="none" stroke="#fff" strokeWidth="6" strokeLinejoin="round" opacity=".7" /></g>;
    case "key":
      return <g><circle cx="120" cy="100" r="40" fill="#fff" /><circle cx="120" cy="100" r="16" fill="currentColor" /><rect x="156" y="92" width="100" height="16" rx="5" fill="#fff" /><path d="M222 108v26h18v-26zM196 108v18h16v-18z" fill="#fff" /></g>;
    case "map":
      return <g><path d="M64 60l64 16 64-16 64 16v100l-64-16-64 16-64-16z" fill="#fff" /><path d="M128 76v100M192 60v100" stroke="#14141f" strokeWidth="3" opacity=".2" /><path d="M86 140c30-8 24-38 54-34s26 30 58 12" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="2 12" strokeLinecap="round" /><path d="M214 92l22 22M236 92l-22 22" stroke="#14141f" strokeWidth="8" strokeLinecap="round" /></g>;
    case "hearts":
      return <g><path d="M122 154C76 120 80 78 108 78c12 0 20 8 24 14 4-6 12-14 24-14 28 0 32 42-14 76z" fill="#fff" transform="translate(-14 -2)" /><path d="M214 164c-42-32-38-70-12-70 11 0 18 7 22 13 4-6 11-13 22-13 26 0 30 38-12 70z" fill="#14141f" opacity=".8" transform="translate(-10 6) scale(.96)" /><path d="M136 70q24-26 48 0" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".7" /></g>;
    case "rocket":
      return <g><g transform="rotate(35 160 100)"><path d="M160 22c26 24 30 62 20 96h-40c-10-34-6-72 20-96z" fill="#fff" /><circle cx="160" cy="74" r="13" fill="currentColor" /><path d="M140 108l-24 26 24 2zM180 108l24 26-24 2z" fill="#14141f" opacity=".8" /><path d="M148 124h24l-12 36z" fill="#14141f" opacity=".7" /></g><circle cx="76" cy="52" r="3" fill="#fff" /><circle cx="248" cy="148" r="3" fill="#fff" /><circle cx="262" cy="64" r="2" fill="#fff" /><circle cx="60" cy="150" r="2" fill="#fff" /></g>;
    case "wand":
      return <g><path d="M92 168L212 52" stroke="#fff" strokeWidth="12" strokeLinecap="round" /><path d="M214 24l7 16 17 2-13 11 4 17-15-9-15 9 4-17-13-11 17-2z" fill="#fff" /><path d="M96 70a30 30 0 1 0 40 40 24 24 0 1 1-40-40z" fill="#14141f" opacity=".75" /><circle cx="248" cy="130" r="4" fill="#fff" /><circle cx="76" cy="132" r="3" fill="#fff" /></g>;
    case "clock":
      return <g><circle cx="160" cy="100" r="64" fill="#fff" /><path d="M160 60v42l28 18" fill="none" stroke="#14141f" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" /><path d="M96 44c-24 14-38 40-34 66" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" opacity=".8" /><path d="M54 104l8 16 14-12z" fill="#fff" opacity=".8" /><circle cx="160" cy="100" r="6" fill="currentColor" /></g>;
    case "house":
      return <g><path d="M96 98l64-52 64 52v70H96z" fill="#fff" /><rect x="198" y="52" width="14" height="30" fill="#fff" /><rect x="124" y="112" width="26" height="26" rx="3" fill="currentColor" /><rect x="170" y="112" width="26" height="26" rx="3" fill="currentColor" /><path d="M148 168v-24a12 12 0 0 1 24 0v24z" fill="#14141f" opacity=".75" /></g>;
    case "vault":
      return <g><rect x="86" y="42" width="148" height="132" rx="12" fill="#fff" /><circle cx="160" cy="108" r="40" fill="none" stroke="#14141f" strokeWidth="6" opacity=".6" /><circle cx="160" cy="108" r="12" fill="currentColor" /><path d="M160 74v14M160 128v14M126 108h14M180 108h14" stroke="#14141f" strokeWidth="5" strokeLinecap="round" opacity=".6" /><rect x="100" y="174" width="20" height="10" fill="#fff" /><rect x="200" y="174" width="20" height="10" fill="#fff" /></g>;
    case "sequel":
      return <g><rect x="64" y="66" width="96" height="88" rx="8" fill="#fff" opacity=".45" /><rect x="100" y="52" width="96" height="88" rx="8" fill="#fff" opacity=".7" /><rect x="136" y="38" width="96" height="88" rx="8" fill="#fff" /><path d="M164 82h40m-14-16l16 16-16 16" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" /></g>;
  }
}

export function MovieCover({ motif, accent, className }: { motif: MovieMotif; accent: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 200" role="presentation" aria-hidden="true" focusable="false" style={{ color: accent }}>
      <rect width="320" height="200" fill={accent} />
      <circle cx="268" cy="-6" r="74" fill="#fff" opacity=".1" />
      <circle cx="30" cy="196" r="64" fill="#14141f" opacity=".12" />
      <path d="M0 150q80-30 160-8t160-24v82H0z" fill="#14141f" opacity=".1" />
      <Motif motif={motif} />
    </svg>
  );
}
