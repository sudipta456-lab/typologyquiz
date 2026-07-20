"use client";

import { AxisDef } from "@/lib/types";

interface Props {
  scores: Record<string, number>;
  axes: AxisDef[];
  color: string;
  category?: { label: string; description: string };
}

const MONO = "IBM Plex Mono, ui-monospace, monospace";

export function RankedBars({ scores, axes, color, category }: Props) {
  const ranked = axes
    .map((axis) => ({ axis, score: Math.max(0, Math.min(100, scores[axis.key] ?? 50)) }))
    .sort((a, b) => b.score - a.score);

  const width = 340;
  const rowHeight = 30;
  const padTop = 6;
  const height = Math.max(rowHeight, ranked.length * rowHeight) + padTop;
  const labelWidth = 104;
  const trackX = labelWidth;
  const trackWidth = 190;
  const valueX = width;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: "100%", maxWidth: 340 }}
        role="img"
        aria-label={`Ranked scores${ranked.length > 0 ? `, highest is ${ranked[0].axis.label} at ${Math.round(ranked[0].score)} out of 100` : ""}`}
      >
        {ranked.map(({ axis, score }, i) => {
          const isTop = i === 0;
          const barHeight = isTop ? 12 : 8;
          const rowY = padTop + i * rowHeight;
          const centerY = rowY + rowHeight / 2;
          const barY = centerY - barHeight / 2;
          const fillWidth = (score / 100) * trackWidth;

          return (
            <g key={axis.key}>
              <text
                x={0}
                y={centerY}
                dominantBaseline="middle"
                fill={isTop ? "#1a1a2e" : "#5a6170"}
                fontSize={isTop ? 11 : 10}
                fontWeight={isTop ? 700 : 400}
              >
                {axis.label}
              </text>
              <rect
                x={trackX}
                y={barY}
                width={trackWidth}
                height={barHeight}
                rx={barHeight / 2}
                fill="#e8ecf1"
              />
              <rect
                x={trackX}
                y={barY}
                width={fillWidth}
                height={barHeight}
                rx={barHeight / 2}
                fill={color}
                fillOpacity={isTop ? 1 : 0.35}
                style={{ transition: "width 0.9s ease" }}
              />
              <text
                x={valueX}
                y={centerY}
                textAnchor="end"
                dominantBaseline="middle"
                fill={isTop ? "#14141f" : "#8b93a0"}
                fontSize={isTop ? 11 : 10}
                fontWeight={isTop ? 700 : 400}
                fontFamily={MONO}
              >
                {Math.round(score)}
              </text>
            </g>
          );
        })}
      </svg>
      {category && (
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color }}>{category.label}</div>
          <p style={{ fontSize: "0.85rem", color: "#5a6170", maxWidth: 320, marginTop: 4 }}>{category.description}</p>
        </div>
      )}
    </div>
  );
}
