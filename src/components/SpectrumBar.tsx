"use client";

interface Props {
  score: number;
  label: string;
  lowLabel: string;
  highLabel: string;
  color: string;
  category?: { label: string; description: string };
}

export function SpectrumBar({ score, lowLabel, highLabel, color, category }: Props) {
  const pct = Math.max(0, Math.min(100, score));

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: 280 }}>
        <div style={{ position: "relative", height: 12, background: "linear-gradient(to right, #e8ecf1, #c0c7d0, #5a6170)", borderRadius: 9999, marginBottom: 8 }}>
          <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: `calc(${pct}% - 10px)`, width: 20, height: 20, borderRadius: "50%", border: "2px solid #1a1a2e", backgroundColor: color, boxShadow: "0 1px 4px rgba(0,0,0,0.1)", transition: "left 1s ease" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#8b93a0" }}>
          <span>{lowLabel}</span>
          <span>{highLabel}</span>
        </div>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#5a6170", marginTop: 16 }}>
        Score: <span style={{ color: "#1a1a2e", fontWeight: 600 }}>{score}</span>/100
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