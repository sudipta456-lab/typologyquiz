import Image from "next/image";
import { useState } from "react";
import styles from "./AnatomyReferenceFigures.module.css";

type Figure = {
  summary: string;
  caption: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  source: string;
};

const figures: Record<string, Figure> = {
  heart: {
    summary: "Inside-the-heart reference",
    caption: "Follow blood through the four chambers and the labeled valves in this section illustration.",
    image: "/anatomy/blausen-heart-section.png",
    width: 2200,
    height: 2200,
    alt: "Original labeled heart section illustration showing the four chambers, valves, and septum.",
    source: "https://commons.wikimedia.org/wiki/File:Blausen_0457_Heart_SectionalAnatomy.png",
  },
  brain: {
    summary: "Brain structures reference",
    caption: "See labeled brain structures in a transparent lateral illustration alongside the exterior model.",
    image: "/anatomy/blausen-brain.png",
    width: 1600,
    height: 1429,
    alt: "Original labeled transparent lateral brain illustration revealing several internal structures.",
    source: "https://commons.wikimedia.org/wiki/File:Blausen_0115_BrainStructures.png",
  },
  urinary: {
    summary: "Inside-the-kidney reference",
    caption: "Compare the outer kidney with a labeled section showing the cortex, medulla and urine-collecting spaces.",
    image: "/anatomy/blausen-kidney-section.png",
    width: 1600,
    height: 1200,
    alt: "Original labeled kidney section illustrating the cortex, medulla, collecting spaces, vessels and ureter, alongside a body-location inset.",
    source: "https://commons.wikimedia.org/wiki/File:Blausen_0592_KidneyAnatomy_01.png",
  },
  respiratory: {
    summary: "Airway route and diaphragm reference",
    caption: "Trace the labeled airway route and find the diaphragm below the lungs in this composite illustration.",
    image: "/anatomy/blausen-respiratory.png",
    width: 1600,
    height: 1280,
    alt: "Original labeled respiratory composite with a head side cutaway, front chest view, airways, lungs, and diaphragm.",
    source: "https://commons.wikimedia.org/wiki/File:Blausen_0770_RespiratorySystem_02.png",
  },
};

export function AnatomyReferenceFigures({ topicId }: { topicId: string }) {
  const [open, setOpen] = useState(false);
  const figure = figures[topicId];
  if (!figure) return null;

  return (
    <details
      className={styles.details}
      key={topicId}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary>{figure.summary}</summary>
      <p className={styles.caption}>{figure.caption}</p>
      {open && (
        <Image
          className={styles.image}
          src={figure.image}
          alt={figure.alt}
          width={figure.width}
          height={figure.height}
          loading="lazy"
          unoptimized
        />
      )}
      <p className={styles.links}>
        <a href={figure.image} target="_blank" rel="noopener noreferrer">Open full-resolution figure</a>
        <span aria-hidden="true"> · </span>
        <a href={figure.source} target="_blank" rel="noopener noreferrer">Original source</a>
      </p>
      <p className={styles.credit}>
        Blausen Medical Communications, Inc.; BruceBlaus · Original illustration, unmodified ·{" "}
        <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>
        . No endorsement implied.
      </p>
    </details>
  );
}
