import Link from "next/link";
import { CodeEntry } from "./PlayerClient";
import styles from "./live.module.css";

export function LiveLanding() {
  return (
    <div className={styles.wrap}>
      <p className="eyebrow">Live Events</p>
      <h1 className="section-title">Quiz night, in the same room.</h1>
      <p className="section-lead">
        One person hosts on a laptop or TV. Players answer on phones: one each when playing alone, or one shared phone per team. The question, the reveal and the standings happen together.
      </p>

      <section className={styles.panelWarm} aria-labelledby="join-heading">
        <h2 id="join-heading" className="font-display" style={{ marginTop: 0 }}>Join a quiz</h2>
        <CodeEntry />
      </section>

      <section className={styles.panel} aria-labelledby="host-heading">
        <h2 id="host-heading" className="font-display" style={{ marginTop: 0 }}>Host a quiz</h2>
        <p className={styles.muted}>
          Choose one of ten ready-made sessions of eight questions in two rounds. Pick individual play or teams that each share a single phone, and either relaxed untimed scoring or timed play where quicker correct answers break ties.
        </p>
        <Link className={styles.button} href="/live/host/">Set up a room</Link>
      </section>

      <section className={styles.panel} aria-labelledby="how-heading">
        <h2 id="how-heading" className="font-display" style={{ marginTop: 0 }}>Good to know</h2>
        <ul className={styles.stack} style={{ paddingLeft: "1.1rem", margin: 0 }}>
          <li>No accounts or downloads. Players pick a nickname; there is no chat.</li>
          <li>The answer stays on the server until the host reveals it.</li>
          <li>Timing comes from when the server receives an answer, not from anyone&apos;s phone clock.</li>
          <li>Rooms and answers are deleted automatically after the event.</li>
          <li>General-knowledge questions with a source for each answer, suitable for adults and families.</li>
        </ul>
      </section>
    </div>
  );
}
