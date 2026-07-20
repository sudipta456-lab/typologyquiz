"use client";

import { useId } from "react";

interface Props {
  score: number;
  label: string;
  lowLabel: string;
  highLabel: string;
  color: string;
  category?: { label: string; description: string };
}

const WIDTH = 320;
const HEIGHT = 120;
const TOP = 14;
const BOTTOM = 106;
const MID = (TOP + BOTTOM) / 2;
const AMPLITUDE = 13;
const THICKNESS = 30;
const WAVELENGTH = 150;
const STEP = 4;

function centerlineY(x: number): number {
  return MID + AMPLITUDE * Math.sin((2 * Math.PI * x) / WAVELENGTH - Math.PI / 3);
}

function buildRibbonPath(): string {
  const top: string[] = [];
  const bottom: string[] = [];
  for (let x = 0; x <= WIDTH; x += STEP) {
    const y = centerlineY(x);
    top.push(`${x},${(y - THICKNESS / 2).toFixed(2)}`);
    bottom.push(`${x},${(y + THICKNESS / 2).toFixed(2)}`);
  }
  bottom.reverse();
  return `M ${top.join(" L ")} L ${bottom.join(" L ")} Z`;
}

const RIBBON_PATH = buildRibbonPath();
const TICKS = [0, 25, 50, 75, 100];

export function WaveSpectrum({ score, label, lowLabel, highLabel, color, category }: Props) {
  const pct = Math.max(0, Math.min(100, score));
  const rawId = useId();
  const gradientId = `wave-grad-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;

  const markerX = (pct / 100) * WIDTH;
  const markerY = centerlineY(markerX);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: 340 }}>
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          style={{ width: "100%", display: "block" }}
          role="img"
          aria-label={`${label}: ${pct} out of 100 on a scale from ${lowLabel} to ${highLabel}`}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c0c7d0" />
              <stop offset="45%" stopColor="#8b93a0" />
              <stop offset="100%" stopColor={color} />
            </linearGradient>
          </defs>

          {TICKS.map((t) => {
            const x = (t / 100) * WIDTH;
            const cx = Math.min(WIDTH - 0.5, Math.max(0.5, x));
            return <line key={t} x1={cx} y1={TOP} x2={cx} y2={BOTTOM} stroke="#e8ecf1" strokeWidth={1} />;
          })}

          <path d={RIBBON_PATH} fill={`url(#${gradientId})`} />

          <line
            x1={markerX}
            y1={TOP}
            x2={markerX}
            y2={BOTTOM}
            stroke="#14141f"
            strokeWidth={2}
            strokeLinecap="round"
            style={{ transition: "all 1s ease" }}
          />
          <circle
            cx={markerX}
            cy={markerY}
            r={9}
            fill={color}
            stroke="#1a1a2e"
            strokeWidth={2}
            style={{ transition: "all 1s ease" }}
          />
          <text
            x={Math.min(WIDTH - 16, Math.max(16, markerX))}
            y={BOTTOM + 12}
            textAnchor="middle"
            fill="#1a1a2e"
            fontSize={12}
            fontWeight={700}
            style={{ transition: "all 1s ease" }}
          >
            {pct}
          </text>
        </svg>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#8b93a0" }}>
          <span>{lowLabel}</span>
          <span>{highLabel}</span>
        </div>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#5a6170", marginTop: 16 }}>
        Score: <span style={{ color: "#1a1a2e", fontWeight: 600 }}>{pct}</span>/100
      </p>
      {category && (
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color }}>{category.label}</div>
          <p style={{ fontSize: "0.85rem", color: "#5a6170", maxWidth: 320, marginTop: 4 }}>{category.description}</p>
        </div>
      )}
    </div>
  );
}
