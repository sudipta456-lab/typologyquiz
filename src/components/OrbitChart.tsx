"use client";

import { AxisDef } from "@/lib/types";

interface Props {
  scores: Record<string, number>;
  axes: AxisDef[];
  color: string;
  category?: { label: string; description: string };
}

export function OrbitChart({ scores, axes, color, category }: Props) {
  const size = 320;
  const center = size / 2;
  const minDist = 42;
  const maxDist = 92;
  const minNode = 5;
  const maxNode = 11;
  const angleSlice = axes.length > 0 ? (2 * Math.PI) / axes.length : 0;

  const nodes = axes.map((axis, i) => {
    const score = Math.max(0, Math.min(100, scores[axis.key] ?? 50));
    const angle = angleSlice * i - Math.PI / 2;
    // Higher score = stronger pull = closer to the centre.
    const dist = maxDist - (score / 100) * (maxDist - minDist);
    const r = minNode + (score / 100) * (maxNode - minNode);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const labelDist = dist + r + 13;
    const rawLabelX = center + labelDist * cos;
    const labelX = Math.max(36, Math.min(size - 36, rawLabelX));
    const labelY = center + labelDist * sin;
    const anchor: "start" | "middle" | "end" = cos > 0.35 ? "start" : cos < -0.35 ? "end" : "middle";
    return {
      axis,
      score,
      x: center + dist * cos,
      y: center + dist * sin,
      r,
      labelX,
      labelY,
      anchor,
    };
  });

  let topIndex = 0;
  nodes.forEach((n, i) => {
    if (n.score > nodes[topIndex].score) topIndex = i;
  });
  const topLabel = nodes.length > 0 ? nodes[topIndex].axis.label : "";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        style={{ width: "100%", maxWidth: 320 }}
        role="img"
        aria-label={`Orbit chart of trait pull${topLabel ? `, strongest is ${topLabel}` : ""}`}
      >
        <circle cx={center} cy={center} r={maxDist} fill="none" stroke="#e8ecf1" strokeWidth={1} />
        <circle cx={center} cy={center} r={(maxDist + minDist) / 2} fill="none" stroke="#e8ecf1" strokeWidth={1} strokeDasharray="3 4" />
        <circle cx={center} cy={center} r={minDist} fill="none" stroke="#e8ecf1" strokeWidth={1} />

        {nodes.map((n) => (
          <line key={`l-${n.axis.key}`} x1={center} y1={center} x2={n.x} y2={n.y} stroke="#e8ecf1" strokeWidth={1} />
        ))}

        {nodes.map((n, i) => {
          const isTop = i === topIndex;
          return (
            <circle
              key={`n-${n.axis.key}`}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={isTop ? color : "#fff"}
              fillOpacity={isTop ? 1 : 0.9}
              stroke={color}
              strokeOpacity={isTop ? 1 : 0.45}
              strokeWidth={2}
              style={{ transition: "cx 0.9s ease, cy 0.9s ease, r 0.9s ease" }}
            />
          );
        })}

        <circle cx={center} cy={center} r={17} fill="#1a1a2e" />
        <text x={center} y={center} textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize={8} letterSpacing={1}>
          YOU
        </text>

        {nodes.map((n, i) => {
          const isTop = i === topIndex;
          return (
            <text
              key={`t-${n.axis.key}`}
              x={n.labelX}
              y={n.labelY}
              textAnchor={n.anchor}
              dominantBaseline="middle"
              fill={isTop ? "#14141f" : "#5a6170"}
              fontSize={10}
              fontWeight={isTop ? 700 : 400}
            >
              {n.axis.label}
            </text>
          );
        })}
      </svg>
      <p style={{ fontSize: "0.75rem", color: "#8b93a0", marginTop: 8 }}>Closer to the centre means a stronger pull</p>
      {category && (
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color }}>{category.label}</div>
          <p style={{ fontSize: "0.85rem", color: "#5a6170", maxWidth: 320, marginTop: 4 }}>{category.description}</p>
        </div>
      )}
    </div>
  );
}
