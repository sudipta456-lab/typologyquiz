import Link from "next/link";

interface Props {
  /** Name of the official handbook, when we're on a jurisdiction page. */
  handbookName?: string;
  handbookUrl?: string;
  compact?: boolean;
}

/**
 * The honesty panel. It appears on every driving page on purpose: people
 * searching "DMV practice test" land on plenty of sites that let them believe
 * they're on an official one. We say plainly that we aren't, and point at the
 * real handbook, which is the thing that actually gets them through the test.
 */
export function DrivingDisclaimer({ handbookName, handbookUrl, compact }: Props) {
  return (
    <div
      className="report-panel"
      style={{
        padding: compact ? "0.9rem 1rem" : "1.1rem 1.15rem",
        background: "var(--paper)",
      }}
    >
      <p
        style={{
          margin: "0 0 0.4rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
        }}
      >
        Unofficial practice
      </p>
      <p
        style={{
          margin: 0,
          fontSize: compact ? "0.82rem" : "0.88rem",
          lineHeight: 1.6,
          color: "var(--ink-soft)",
        }}
      >
        These are practice questions written by us. They are not real exam questions,
        and this site is not affiliated with, endorsed by, or connected to any
        government, ministry, registry, DMV, or licensing agency. Rules change. Before
        you book your test, confirm every answer against{" "}
        {handbookUrl ? (
          <a
            href={handbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", fontWeight: 600 }}
          >
            the {handbookName ?? "official handbook"}
          </a>
        ) : (
          "the official handbook for your jurisdiction"
        )}
        .
      </p>
      {!compact && (
        <p
          style={{
            margin: "0.55rem 0 0",
            fontSize: "0.78rem",
            lineHeight: 1.55,
            color: "var(--ink-mute)",
          }}
        >
          Nothing you answer leaves this device.{" "}
          <Link href="/about/" style={{ color: "var(--ink)", fontWeight: 600 }}>
            About this site
          </Link>
        </p>
      )}
    </div>
  );
}
