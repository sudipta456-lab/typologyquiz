"use client";

import { AxisDef } from "@/lib/types";

interface Props {
  scores: Record<string, number>;
  axes: AxisDef[];
  color: string;
  ideology?: { label: string; description: string };
}

export function CompassChart({ scores, axes, color, ideology }: Props) {
  const size = 260;
  const center = size / 2;
  const pad = 20;
  const range = size - pad * 2;

  const xAxis = axes.find((a) => a.compassAxis === "x");
  const yAxis = axes.find((a) => a.compassAxis === "y");

  if (!xAxis || !yAxis) {
    return <div style={{ textAlign: "center", color: "#8b93a0" }}>No compass axes defined</div>;
  }

  const xScore = scores[xAxis.key] ?? 50;
  const yScore = scores[yAxis.key] ?? 50;
  const x = pad + (xScore / 100) * range;
  const y = pad + ((100 - yScore) / 100) * range;

  const quadrants = [
    { x: center - 60, y: center - 45, text: "Left-Libertarian", fontSize: 11 },
    { x: center + 10, y: center - 45, text: "Right-Libertarian", fontSize: 11 },
    { x: center - 60, y: center + 55, text: "Left-Authoritarian", fontSize: 11 },
    { x: center + 10, y: center + 55, text: "Right-Authoritarian", fontSize: 11 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: "100%", maxWidth: 300 }} role="img" aria-label="Political compass">
        <rect x={pad} y={pad} width={range / 2} height={range / 2} fill="rgba(255,107,157,0.05)" />
        <rect x={center} y={pad} width={range / 2} height={range / 2} fill="rgba(34,197,94,0.05)" />
        <rect x={pad} y={center} width={range / 2} height={range / 2} fill="rgba(45,92,246,0.05)" />
        <rect x={center} y={center} width={range / 2} height={range / 2} fill="rgba(124,92,255,0.05)" />
        {[0.25, 0.5, 0.75].map((pct) => (
          <g key={pct} opacity={0.3}>
            <line x1={pad + range * pct} y1={pad} x2={pad + range * pct} y2={pad + range} stroke="#e8ecf1" strokeWidth={1} />
            <line x1={pad} y1={pad + range * pct} x2={pad + range} y2={pad + range * pct} stroke="#e8ecf1" strokeWidth={1} />
          </g>
        ))}
        <line x1={center} y1={pad} x2={center} y2={pad + range} stroke="#e8ecf1" strokeWidth={1.5} />
        <line x1={pad} y1={center} x2={pad + range} y2={center} stroke="#e8ecf1" strokeWidth={1.5} />
        <text x={center} y={pad - 4} textAnchor="middle" fill="#8b93a0" fontSize={8}>{yAxis.highLabel}</text>
        <text x={center} y={pad + range + 12} textAnchor="middle" fill="#8b93a0" fontSize={8}>{yAxis.lowLabel}</text>
        <text x={pad - 2} y={center + 4} textAnchor="end" fill="#8b93a0" fontSize={8}>{xAxis.lowLabel}</text>
        <text x={pad + range + 2} y={center + 4} textAnchor="start" fill="#8b93a0" fontSize={8}>{xAxis.highLabel}</text>
        {quadrants.map((q, i) => (
          <text key={i} x={q.x} y={q.y} fill="#8b93a0" fontSize={q.fontSize} textAnchor="middle" opacity={0.5}>{q.text}</text>
        ))}
        <circle cx={x} cy={y} r={16} fill={color} opacity={0.1} />
        <circle cx={x} cy={y} r={8} fill={color} opacity={0.3} />
        <circle cx={x} cy={y} r={4} fill={color} />
        <circle cx={x} cy={y} r={2} fill="#fff" />
      </svg>
      <p style={{ fontSize: "0.85rem", color: "#8b93a0", marginTop: 12 }}>{xAxis.label}: {xScore} · {yAxis.label}: {yScore}</p>
      {ideology && (
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color }}>{ideology.label}</div>
          <p style={{ fontSize: "0.85rem", color: "#5a6170", maxWidth: 320, marginTop: 4 }}>{ideology.description}</p>
        </div>
      )}
    </div>
  );
}