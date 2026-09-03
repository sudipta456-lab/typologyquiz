"use client";

// The real periodic table, drawn as a CSS grid: 18 group columns by 7 period
// rows, with the lanthanide and actinide series pulled out into their own two
// rows underneath and a marker cell left in group 3 of periods 6 and 7 where
// they belong. Presentational only. Everything it knows arrives as props, so
// the play screen can hand it the same found-set it already keeps.
//
// Sizing: one custom property, --tq-cell, drives column width, row height and
// every font size in the chart, so the whole thing scales as a unit. It is a
// clamp against the viewport with a hard legibility floor; when 18 columns of
// floor-width no longer fit, the wrapper scrolls sideways and the period
// gutter sticks to the left edge. See the note above tqPeriodicTableCss.

import { useMemo } from "react";
import {
  ELEMENTS,
  ELEMENT_CATEGORY_LABELS,
  type ElementCategory,
  type PeriodicElement,
} from "@/lib/trivia/data/elements";

export interface PeriodicTableProps {
  /** Answer ids already found, e.g. "el1". Same set the play screen keeps. */
  found: ReadonlySet<string>;
  /** After give-up / time-up: paint the not-found cells in the warning colour. */
  revealMissing?: boolean;
  /**
   * Subset runs: only these elements are in play. The rest stay dimmed and are
   * left out of the reveal, matching how RegionMap treats off-target regions.
   */
  activeIds?: ReadonlySet<string> | null;
  /**
   * Choice mode: cells become real buttons, so they are focusable and Enter
   * and Space activate them natively. No key handler of our own: a button
   * turns Enter and Space into a click already, and handling keydown as well
   * would fire onCellClick twice per press.
   */
  interactive?: boolean;
  onCellClick?: (id: string) => void;
  /** The cell that just landed, for a one-shot reveal. */
  justFoundId?: string | null;
  reducedMotion?: boolean;
  /** Accessible name for the whole chart. */
  title: string;
}

/** Grid geometry. Column 1 is the period gutter, so group g sits in g + 1. */
const GUTTER_COL = 1;
const HEADER_ROW = 1;
/** Period p occupies row p + 1. Row 9 is the spacer, 10 and 11 the f-block. */
const PERIOD_ROW_OFFSET = 1;
const LANTHANIDE_ROW = 10;
const ACTINIDE_ROW = 11;
/** The series start under group 3 and run 15 wide, so columns 4 through 18. */
const F_BLOCK_START_COL = 4;

const GROUPS = Array.from({ length: 18 }, (_, i) => i + 1);
const PERIODS = Array.from({ length: 7 }, (_, i) => i + 1);

function isLanthanide(el: PeriodicElement): boolean {
  return el.number >= 57 && el.number <= 71;
}

function isActinide(el: PeriodicElement): boolean {
  return el.number >= 89 && el.number <= 103;
}

/**
 * Where a cell sits. The f-block rows are laid out by position in the series
 * rather than by group, because the series have no agreed group number.
 */
function placement(el: PeriodicElement): { row: number; col: number } {
  if (isLanthanide(el)) {
    return { row: LANTHANIDE_ROW, col: F_BLOCK_START_COL + (el.number - 57) };
  }
  if (isActinide(el)) {
    return { row: ACTINIDE_ROW, col: F_BLOCK_START_COL + (el.number - 89) };
  }
  // Every other element has a real group, guaranteed by the dataset.
  return { row: el.period + PERIOD_ROW_OFFSET, col: (el.group ?? 1) + 1 };
}

/** Category tints, as the var pair each cell reads once it is found. */
function categoryVars(category: ElementCategory): React.CSSProperties {
  return {
    ["--el-bg" as string]: `var(--el-${category}-bg)`,
    ["--el-line" as string]: `var(--el-${category}-line)`,
  } as React.CSSProperties;
}

/** Only the categories the dataset actually uses reach the legend. */
const LEGEND_CATEGORIES: readonly ElementCategory[] = (() => {
  const order: readonly ElementCategory[] = [
    "alkali-metal",
    "alkaline-earth-metal",
    "transition-metal",
    "post-transition-metal",
    "metalloid",
    "reactive-nonmetal",
    "noble-gas",
    "lanthanide",
    "actinide",
    "unknown",
  ];
  const present = new Set(ELEMENTS.map((el) => el.category));
  return order.filter((c) => present.has(c));
})();

export function PeriodicTable({
  found,
  revealMissing = false,
  activeIds = null,
  interactive = false,
  onCellClick,
  justFoundId = null,
  reducedMotion = false,
  title,
}: PeriodicTableProps) {
  const inPlay = useMemo(
    () => ELEMENTS.filter((el) => activeIds === null || activeIds.has(el.id)),
    [activeIds]
  );

  // The screen-reader summary. Names of found elements are safe to write out
  // (they are already known); names of missing ones appear only on reveal.
  const summary = useMemo(() => {
    const foundNames = inPlay.filter((el) => found.has(el.id)).map((el) => el.name);
    const missingNames = inPlay.filter((el) => !found.has(el.id)).map((el) => el.name);
    const parts = [
      `${title}. ${foundNames.length} of ${inPlay.length} elements found.`,
    ];
    if (foundNames.length > 0) parts.push(`Found: ${foundNames.join(", ")}.`);
    if (revealMissing && missingNames.length > 0) {
      parts.push(`Still missing: ${missingNames.join(", ")}.`);
    }
    return parts.join(" ");
  }, [found, inPlay, revealMissing, title]);

  const renderCell = (el: PeriodicElement) => {
    const { row, col } = placement(el);
    const isFound = found.has(el.id);
    const active = activeIds === null || activeIds.has(el.id);
    const state = !active
      ? "out"
      : isFound
        ? "found"
        : revealMissing
          ? "missed"
          : activeIds !== null
            ? "target"
            : "idle";
    // The name is written into the DOM only once it is no longer an answer.
    const nameShown = isFound || (revealMissing && active);
    const clickable = interactive && active && !isFound;
    const label = nameShown
      ? `${el.number}, ${el.symbol}, ${el.name}`
      : `Atomic number ${el.number}, symbol ${el.symbol}, not found yet`;

    const inner = (
      <>
        <span className="tq-el-num">{el.number}</span>
        <span className="tq-el-sym">{el.symbol}</span>
        <span className="tq-el-name">{nameShown ? el.name : ""}</span>
      </>
    );

    const style: React.CSSProperties = {
      ...categoryVars(el.category),
      gridRow: row,
      gridColumn: col,
    };
    const just = justFoundId === el.id && !reducedMotion ? "1" : undefined;
    const still = reducedMotion ? "1" : undefined;

    if (clickable) {
      return (
        <button
          key={el.id}
          type="button"
          className="tq-el"
          style={style}
          aria-label={label}
          title={label}
          data-state={state}
          data-just={just}
          data-still={still}
          onClick={() => onCellClick?.(el.id)}
        >
          {inner}
        </button>
      );
    }
    return (
      <div
        key={el.id}
        className="tq-el"
        style={style}
        title={label}
        data-state={state}
        data-just={just}
        data-still={still}
      >
        {inner}
      </div>
    );
  };

  return (
    <div className="tq-ptable">
      <style>{tqPeriodicTableCss}</style>

      <p className="tq-ptable-sr">{summary}</p>

      <div
        className="tq-ptable-scroll"
        tabIndex={0}
        role="group"
        aria-label={title}
      >
        <div className="tq-ptable-grid" aria-hidden={interactive ? undefined : true}>
          {/* Group numbers across the top. */}
          {GROUPS.map((g) => (
            <span
              key={`g${g}`}
              className="tq-axis tq-axis-group"
              style={{ gridRow: HEADER_ROW, gridColumn: g + 1 }}
            >
              {g}
            </span>
          ))}

          {/* Period numbers down the left, pinned while the chart scrolls. */}
          {PERIODS.map((p) => (
            <span
              key={`p${p}`}
              className="tq-axis tq-axis-period"
              style={{ gridRow: p + PERIOD_ROW_OFFSET, gridColumn: GUTTER_COL }}
            >
              {p}
            </span>
          ))}
          <span
            className="tq-axis tq-axis-period"
            style={{ gridRow: LANTHANIDE_ROW, gridColumn: GUTTER_COL }}
          >
            6
          </span>
          <span
            className="tq-axis tq-axis-period"
            style={{ gridRow: ACTINIDE_ROW, gridColumn: GUTTER_COL }}
          >
            7
          </span>

          {/* The two gaps in group 3, where the series were lifted out. */}
          <span
            className="tq-gap"
            style={{ gridRow: 6 + PERIOD_ROW_OFFSET, gridColumn: 4 }}
            title="Lanthanides, atomic numbers 57 to 71, shown in the row below"
          >
            57-71
          </span>
          <span
            className="tq-gap"
            style={{ gridRow: 7 + PERIOD_ROW_OFFSET, gridColumn: 4 }}
            title="Actinides, atomic numbers 89 to 103, shown in the row below"
          >
            89-103
          </span>

          {ELEMENTS.map(renderCell)}
        </div>
      </div>

      <p className="tq-ptable-note">The table scrolls sideways on a narrow screen.</p>

      <ul className="tq-legend">
        {LEGEND_CATEGORIES.map((c) => (
          <li key={c} className="tq-legend-item">
            <span className="tq-legend-swatch" style={categoryVars(c)} />
            {ELEMENT_CATEGORY_LABELS[c]}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Styles.
//
// Inline <style> rather than globals.css for the same reason GemPill does it:
// the rules belong to this component and nothing else on the site needs them.
// Colour lives entirely in custom properties so the dark theme is a second
// block of values, never a second set of rules.
//
// Responsive strategy, and why this one. Eighteen columns cannot honestly
// reflow: dropping to fewer columns destroys the one thing a periodic table
// is for, which is that position carries meaning, and a scale-to-fit wrapper
// at 375px would render 20px cells nobody can read. So the chart keeps its
// true shape and stays legible: --tq-cell is clamped between a 42px floor and
// a 56px cap, fluid in between, and every glyph is sized as a fraction of it.
// Above roughly 900px the whole table fits the content column with no scroll;
// below that the wrapper scrolls horizontally and the period gutter is
// position: sticky, so you always know which row you are reading. The floor is
// set where a two-letter symbol is comfortably readable, which is what makes
// the phone experience a wall chart you pan rather than a chart you squint at.
// ---------------------------------------------------------------------------

const tqPeriodicTableCss = `
.tq-ptable {
  --tq-cell: clamp(42px, 4.9vw, 56px);
  --tq-cell-h: calc(var(--tq-cell) * 1.22);
  --tq-gutter: calc(var(--tq-cell) * 0.5);
  --tq-gap: 2px;
  /* Missed cells sit on solid coral, which is the same colour in both themes,
     so their text colour is pinned rather than themed. */
  --tq-on-coral: #14141f;
  --el-alkali-metal-bg: #fdeae5;
  --el-alkali-metal-line: #b84425;
  --el-alkaline-earth-metal-bg: #fdf1dd;
  --el-alkaline-earth-metal-line: #965d0d;
  --el-transition-metal-bg: #e6eefc;
  --el-transition-metal-line: #2b56b5;
  --el-post-transition-metal-bg: #e9edf2;
  --el-post-transition-metal-line: #4d6076;
  --el-metalloid-bg: #ddf3ef;
  --el-metalloid-line: #0f7266;
  --el-reactive-nonmetal-bg: #e4f2df;
  --el-reactive-nonmetal-line: #38722a;
  --el-noble-gas-bg: #ece7fa;
  --el-noble-gas-line: #6247b8;
  --el-lanthanide-bg: #fbe6ef;
  --el-lanthanide-line: #b03f75;
  --el-actinide-bg: #f7e6f7;
  --el-actinide-line: #93368f;
  --el-unknown-bg: #eceae6;
  --el-unknown-line: #6b7280;
}

html[data-theme="dark"] .tq-ptable {
  --el-alkali-metal-bg: #3a2019;
  --el-alkali-metal-line: #ff9578;
  --el-alkaline-earth-metal-bg: #392a14;
  --el-alkaline-earth-metal-line: #e8b45c;
  --el-transition-metal-bg: #1a2540;
  --el-transition-metal-line: #8ab0ff;
  --el-post-transition-metal-bg: #232a33;
  --el-post-transition-metal-line: #a3b5c9;
  --el-metalloid-bg: #11312e;
  --el-metalloid-line: #4fd6c2;
  --el-reactive-nonmetal-bg: #1c3018;
  --el-reactive-nonmetal-line: #93d67f;
  --el-noble-gas-bg: #262046;
  --el-noble-gas-line: #b3a2ff;
  --el-lanthanide-bg: #38182a;
  --el-lanthanide-line: #ff96c0;
  --el-actinide-bg: #331634;
  --el-actinide-line: #e79ce9;
  --el-unknown-bg: #23262e;
  --el-unknown-line: #9aa3b0;
}

.tq-ptable-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

.tq-ptable-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  /* Room for the reveal animation, which scales a cell past its box and
     would otherwise be clipped in the first and last rows. */
  padding: 4px 0 6px;
  scrollbar-width: thin;
}

.tq-ptable-scroll:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.tq-ptable-grid {
  display: grid;
  grid-template-columns: var(--tq-gutter) repeat(18, var(--tq-cell));
  grid-template-rows:
    calc(var(--tq-cell) * 0.4)
    repeat(7, var(--tq-cell-h))
    calc(var(--tq-cell) * 0.34)
    repeat(2, var(--tq-cell-h));
  gap: var(--tq-gap);
  width: max-content;
}

.tq-axis {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: calc(var(--tq-cell) * 0.24);
  color: var(--ink-mute);
  line-height: 1;
}

.tq-axis-period {
  position: sticky;
  left: 0;
  z-index: 2;
  background: var(--white);
}

.tq-gap {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed var(--line);
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: calc(var(--tq-cell) * 0.2);
  color: var(--ink-mute);
  line-height: 1;
}

.tq-el {
  appearance: none;
  -webkit-appearance: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(var(--tq-cell) * 0.02);
  padding: 0 1px;
  margin: 0;
  overflow: hidden;
  border-radius: 3px;
  border: 1px solid var(--line);
  background: var(--paper);
  color: var(--ink-mute);
  font-family: var(--font-sans);
  text-align: center;
  transition:
    background-color 0.28s ease,
    border-color 0.28s ease,
    color 0.28s ease;
}

.tq-el[data-still="1"] {
  transition: none;
}

.tq-el-num {
  font-family: var(--font-mono);
  font-size: calc(var(--tq-cell) * 0.24);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  align-self: flex-start;
  padding-left: calc(var(--tq-cell) * 0.06);
}

.tq-el-sym {
  font-size: calc(var(--tq-cell) * 0.42);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.01em;
}

.tq-el-name {
  max-width: 100%;
  /* Reserved whether or not there is a name to show, so finding an element
     tints the cell without nudging the row height. */
  height: calc(var(--tq-cell) * 0.22);
  flex: none;
  font-size: calc(var(--tq-cell) * 0.185);
  line-height: 1.1;
  letter-spacing: -0.03em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--ink-soft);
}

/* Unfound: a quiet placeholder. Number and symbol only, no category tint,
   nothing that narrows the answer. */
.tq-el[data-state="idle"] .tq-el-sym {
  color: var(--ink-mute);
}

/* Subset runs: the elements actually in play read a shade stronger than the
   ones sitting the round out. */
.tq-el[data-state="target"] {
  background: var(--paper-warm);
  border-color: var(--ink-mute);
}

.tq-el[data-state="target"] .tq-el-sym {
  color: var(--ink-soft);
}

.tq-el[data-state="out"] {
  opacity: 0.4;
}

.tq-el[data-state="found"] {
  background: var(--el-bg);
  border-color: var(--el-line);
}

.tq-el[data-state="found"] .tq-el-num {
  color: var(--el-line);
}

.tq-el[data-state="found"] .tq-el-sym {
  color: var(--ink);
}

.tq-el[data-state="missed"] {
  background: var(--mark-coral);
  border-color: var(--mark-coral);
}

.tq-el[data-state="missed"] .tq-el-num,
.tq-el[data-state="missed"] .tq-el-sym,
.tq-el[data-state="missed"] .tq-el-name {
  color: var(--tq-on-coral);
}

button.tq-el {
  cursor: pointer;
}

button.tq-el:hover {
  border-color: var(--ink);
}

button.tq-el:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 1px;
  z-index: 3;
}

@keyframes tqElReveal {
  0% {
    transform: scale(0.84);
    box-shadow: 0 0 0 0 var(--el-line);
  }
  55% {
    transform: scale(1.09);
    box-shadow: 0 0 0 3px var(--el-line);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 transparent;
  }
}

.tq-el[data-just="1"] {
  animation: tqElReveal 420ms ease-out;
  z-index: 1;
}

@media (prefers-reduced-motion: reduce) {
  .tq-el {
    transition: none;
  }
  .tq-el[data-just="1"] {
    animation: none;
  }
}

.tq-ptable-note {
  margin: 6px 0 0;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--ink-mute);
}

@media (min-width: 1000px) {
  .tq-ptable-note {
    display: none;
  }
}

.tq-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
  font-size: 0.74rem;
  color: var(--ink-soft);
}

.tq-legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  line-height: 1.5;
}

.tq-legend-swatch {
  width: 11px;
  height: 11px;
  border-radius: 2px;
  background: var(--el-bg);
  border: 1px solid var(--el-line);
  flex: none;
}
`;
