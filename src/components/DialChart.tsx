"use client";

interface Props { correctCount: number; totalQuestions: number; color: string; }

export function DialChart({ correctCount, totalQuestions, color }: Props) {
  const size = 200, center = size / 2, radius = 80, sw = 16;
  const fraction = totalQuestions > 0 ? correctCount / totalQuestions : 0;

  function arc(s: number, e: number) {
    const start = polar(center, center, radius, e);
    const end = polar(center, center, radius, s);
    const large = e - s > 180 ? "1" : "0";
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${large} 0 ${end.x} ${end.y}`;
  }
  function polar(cx: number, cy: number, r: number, deg: number) {
    const rad = ((deg - 180) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }
  function ctx() {
    if (fraction >= 1) return "Incredible - you got every question right! Only about 17% of people get the classic 3 correct.";
    if (fraction >= 0.7) return "Excellent - you score well above average on reflective thinking.";
    if (fraction >= 0.4) return "About average - you override some intuitive responses but not all.";
    return "You tend to go with your intuition. The good news: this is a skill you can practice.";
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: "100%", maxWidth: 220 }} role="img" aria-label="Score dial">
        <path d={arc(180, 360)} fill="none" stroke="#e8ecf1" strokeWidth={sw} strokeLinecap="round" />
        <path d={arc(180, 180 + fraction * 180)} fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" />
        <text x={center} y={center - 8} textAnchor="middle" fill="#1a1a2e" fontSize={28} fontWeight="bold">{correctCount}/{totalQuestions}</text>
        <text x={center} y={center + 16} textAnchor="middle" fill="#8b93a0" fontSize={12}>{Math.round(fraction * 100)}%</text>
      </svg>
      <p style={{ fontSize: "0.85rem", color: "#5a6170", marginTop: 12, textAlign: "center", maxWidth: 280 }}>{ctx()}</p>
    </div>
  );
}