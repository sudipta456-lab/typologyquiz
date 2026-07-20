"use client";

interface Props {
  score: number;
  label: string;
  lowLabel: string;
  highLabel: string;
  color: string;
  category?: { label: string; description: string };
}

const WIDTH = 280;
const HEIGHT = 170;
const CX = WIDTH / 2;
const CY = 132;
const R = 108;
const STROKE = 18;
const ARC_LENGTH = Math.PI * R;

function pointOnArc(pct: number): { x: number; y: number } {
  const rad = (Math.PI * (100 - pct)) / 100;
  return { x: CX + R * Math.cos(rad), y: CY - R * Math.sin(rad) };
}

export function ArcMeter({ score, label, lowLabel, highLabel, color, category }: Props) {
  const pct = Math.max(0, Math.min(100, score));
  const knob = pointOnArc(pct);
  const arcPath = `M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: 300 }}>
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          style={{ width: "100%", display: "block" }}
          role="img"
          aria-label={`${label}: ${pct} out of 100 on a scale from ${lowLabel} to ${highLabel}`}
        >
          <path d={arcPath} fill="none" stroke="#e8ecf1" strokeWidth={STROKE} strokeLinecap="round" />
          <path
            d={arcPath}
            fill="none"
            stroke={color}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={`${ARC_LENGTH} ${ARC_LENGTH}`}
            strokeDashoffset={ARC_LENGTH * (1 - pct / 100)}
            style={{ transition: "stroke-dashoffset 1s ease" }}
          />
          <line
            x1={CX}
            y1={CY}
            x2={CX + (knob.x - CX) * 0.78}
            y2={CY + (knob.y - CY) * 0.78}
            stroke="#14141f"
            strokeWidth={2}
            strokeLinecap="round"
            style={{ transition: "all 1s ease" }}
          />
          <circle cx={CX} cy={CY} r={5} fill="#14141f" />
          <circle
            cx={knob.x}
            cy={knob.y}
            r={9}
            fill={color}
            stroke="#1a1a2e"
            strokeWidth={2}
            style={{ transition: "all 1s ease" }}
          />
          <text x={CX} y={CY - 26} textAnchor="middle" fill="#1a1a2e" fontSize={38} fontWeight={700}>
            {pct}
          </text>
          <text x={CX} y={CY - 8} textAnchor="middle" fill="#8b93a0" fontSize={12}>
            /100
          </text>
        </svg>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.75rem",
            color: "#8b93a0",
            marginTop: -4,
          }}
        >
          <span>{lowLabel}</span>
          <span>{highLabel}</span>
        </div>
      </div>
      {category && (
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color }}>{category.label}</div>
          <p style={{ fontSize: "0.85rem", color: "#5a6170", maxWidth: 320, marginTop: 4 }}>{category.description}</p>
        </div>
      )}
    </div>
  );
}
