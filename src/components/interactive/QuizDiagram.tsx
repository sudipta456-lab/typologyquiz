"use client";

import { useId } from "react";
import type { HotspotQuestion } from "@/lib/interactive/types";
import styles from "./InteractiveQuiz.module.css";

interface Props {
  diagram: HotspotQuestion["diagram"];
  options: HotspotQuestion["options"];
  value: string | undefined;
  onChange: (optionId: string) => void;
}

const HEX_COLOR = /^#[0-9a-f]{3,8}$/i;

const clamp = (n: number, lo: number, hi: number) => (Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : lo);

/**
 * Original rectangle diagram. Zone coordinates are percentages of the frame.
 * A zone is selectable when an option shares its id; every zone is also named
 * in the labelled radio list below, which is the full keyboard/screen-reader
 * equivalent of the picture.
 */
export function QuizDiagram({ diagram, options, value, onChange }: Props) {
  const uid = useId();
  const optionIds = new Set(options.map((o) => o.id));
  const zoneLabelById = new Map(diagram.zones.map((z) => [z.id, z.label]));

  return (
    <figure className={styles.diagram}>
      <figcaption className={styles.diagramCaption}>
        <strong>{diagram.title}</strong>
        <span>{diagram.description}</span>
      </figcaption>
      <div className={styles.diagramFrame}>
        {diagram.zones.map((zone) => {
          const selectable = optionIds.has(zone.id);
          const selected = selectable && value === zone.id;
          const color = zone.color && HEX_COLOR.test(zone.color) ? zone.color : undefined;
          const style = {
            left: `${clamp(zone.x, 0, 100)}%`,
            top: `${clamp(zone.y, 0, 100)}%`,
            width: `${clamp(zone.width, 1, 100)}%`,
            height: `${clamp(zone.height, 1, 100)}%`,
            ...(color ? { "--zone": color } : null),
          } as React.CSSProperties;
          if (!selectable) {
            return (
              <div key={zone.id} className={styles.zoneStatic} style={style}>
                <span>{zone.label}</span>
              </div>
            );
          }
          return (
            <button
              key={zone.id}
              type="button"
              className={styles.zone}
              style={style}
              aria-pressed={selected}
              onClick={() => onChange(zone.id)}
            >
              <span>{zone.label}</span>
            </button>
          );
        })}
      </div>
      <fieldset className={styles.diagramList}>
        <legend>Same choices as a list</legend>
        {options.map((option) => (
          <label key={option.id} className={styles.choice}>
            <input
              type="radio"
              name={`${uid}-zone`}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
            />
            <span>{zoneLabelById.get(option.id) ?? option.label}</span>
          </label>
        ))}
      </fieldset>
    </figure>
  );
}
