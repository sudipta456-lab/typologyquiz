"use client";

import { AxisDef } from "@/lib/types";

interface Props { scores: Record<string, number>; axes: AxisDef[]; color: string; }

export function RadarChart({ scores, axes, color }: Props) {
  const size = 280, center = size / 2, maxRadius = 100, levels = 5;
  const angleSlice = (2 * Math.PI) / axes.length;

  function getPoint(axisIndex: number, value: number) {
    const angle = angleSlice * axisIndex - Math.PI / 2;
    const r = (value / 100) * maxRadius;
    return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: "100%", maxWidth: 300 }} role="img" aria-label="Radar chart">
        {Array.from({ length: levels }, (_, i) => {
          const r = (maxRadius / levels) * (i + 1);
          const points = axes.map((_, j) => {
            const a = angleSlice * j - Math.PI / 2;
            return `${center + r * Math.cos(a)},${center + r * Math.sin(a)}`;
          }).join(" ");
          return <polygon key={i} points={points} fill="none" stroke="#e8ecf1" strokeWidth={1} />;
        })}
        {axes.map((_, i) => {
          const angle = angleSlice * i - Math.PI / 2;
          return <line key={i} x1={center} y1={center} x2={center + maxRadius * Math.cos(angle)} y2={center + maxRadius * Math.sin(angle)} stroke="#e8ecf1" strokeWidth={1} />;
        })}
        {axes.length > 2 && (
          <polygon points={axes.map((axis, i) => { const p = getPoint(i, scores[axis.key] ?? 50); return `${p.x},${p.y}`; }).join(" ")} fill={color} fillOpacity={0.15} stroke={color} strokeWidth={2} />
        )}
        {axes.map((axis, i) => {
          const p = getPoint(i, scores[axis.key] ?? 50);
          return <circle key={i} cx={p.x} cy={p.y} r={4} fill={color} stroke="#fff" strokeWidth={1} />;
        })}
        {axes.map((axis, i) => {
          const angle = angleSlice * i - Math.PI / 2;
          const labelR = maxRadius + 22;
          return <text key={i} x={center + labelR * Math.cos(angle)} y={center + labelR * Math.sin(angle)} textAnchor="middle" dominantBaseline="middle" fill="#5a6170" fontSize={10}>{axis.label}</text>;
        })}
      </svg>
    </div>
  );
}