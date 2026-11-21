"use client";

import { useState } from "react";
import { ElementAtlas } from "./ElementAtlas";
import styles from "./ElementAtlas.module.css";

export function PeriodicTableReference({ title = "Explore the periodic table" }: { title?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <details className={styles.referenceExpander} onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary>
        <span>{title}</span>
        <span className={styles.referenceSummaryHint}>118 elements · search, inspect, compare</span>
      </summary>
      {open && <ElementAtlas referenceOnly />}
    </details>
  );
}
