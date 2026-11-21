"use client";

import { useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent, RefObject } from "react";
import { QuizSharePanel } from "@/components/QuizSharePanel";
import {
  ELEMENTS,
  FAMILIES,
  LAYOUT_NOTE,
  REFERENCE_SOURCES,
  type ElementRecord,
  type FamilyId,
  searchElements,
} from "./data";
import {
  DISCOVERY_UPDATES,
  ELEMENT_STORIES,
  LEARNING_SOURCES,
  LEARNING_TRACKS,
  gradeLearningAnswer,
} from "./learning";
import type { LearningStep, LearningTrack } from "./learning";
import styles from "./ElementAtlas.module.css";

type ViewMode = "table" | "cards";
type HeatmapMode = "family" | "electronegativity" | "ionization";
type AnswerRecord = { answer: string; correct: boolean };

const PERIODIC_TABLE_URL = "https://typologyquiz.com/learn/periodic-table/";
const DESKTOP_QUERY = "(min-width: 820px)";

function subscribeDesktop(callback: () => void) {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia(DESKTOP_QUERY).matches;
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function familyFor(element: ElementRecord) {
  return FAMILIES.find((family) => family.id === element.family);
}

function familyLabel(element: ElementRecord) {
  return familyFor(element)?.label ?? "Family not classified";
}

function stateLabel(element: ElementRecord) {
  if (element.stateStatus === "unknown" || element.state === "unknown") return "Unknown at 20 °C (status unknown)";
  if (element.stateStatus === "estimated") return `${element.state} at 20 °C · estimated`;
  return `${element.state} at 20 °C · reference`;
}

function weightLabel(element: ElementRecord) {
  if (!element.abridgedWeight) return "No assigned standard atomic weight";
  return element.weightUncertainty
    ? `${element.abridgedWeight} ± ${element.weightUncertainty}`
    : element.abridgedWeight;
}

function groupLabel(element: ElementRecord) {
  return element.group === null ? "Detached series; group not assigned here" : `Group ${element.group}`;
}

function metricValue(element: ElementRecord, lens: HeatmapMode) {
  if (lens === "electronegativity") return element.electronegativity;
  if (lens === "ionization") return element.ionizationEnergy;
  return null;
}

function heatStyle(element: ElementRecord, lens: HeatmapMode): CSSProperties {
  const family = familyFor(element);
  const base: CSSProperties & Record<`--${string}`, string> = {
    "--family-color": family?.color ?? "#6b7280",
  };
  if (lens === "family") return base;

  const values = ELEMENTS.map((record) => metricValue(record, lens)).filter(
    (value): value is number => value !== null,
  );
  const value = metricValue(element, lens);
  if (value === null || values.length === 0) {
    base["--tile-accent"] = "#858b94";
    base["--tile-fill"] = "color-mix(in srgb, var(--ink-mute) 12%, var(--white))";
    return base;
  }
  const min = Math.min(...values);
  const max = Math.max(...values);
  const amount = max === min ? 0.5 : (value - min) / (max - min);
  const hue = 213 - amount * 184;
  base["--tile-accent"] = `hsl(${hue} 52% 46%)`;
  base["--tile-fill"] = `color-mix(in srgb, ${base["--tile-accent"]} 18%, var(--white))`;
  return base;
}

function sourcesFor(ids: readonly string[]) {
  const allSources = [...LEARNING_SOURCES, ...REFERENCE_SOURCES];
  const byId = new Map(allSources.map((source) => [source.id, source]));
  return [...new Set(ids)].flatMap((id) => {
    const source = byId.get(id);
    return source ? [source] : [];
  });
}

function SourceLinks({ ids, label = "Sources" }: { ids: readonly string[]; label?: string }) {
  const sources = sourcesFor(ids);
  if (sources.length === 0) return null;
  return (
    <div className={styles.sourceLinks}>
      <span>{label}</span>
      {sources.map((source) => (
        <a key={source.id} href={source.url} target="_blank" rel="noopener noreferrer">
          {source.title}
        </a>
      ))}
    </div>
  );
}

function ElementTile({
  element,
  id,
  mode,
  lens,
  dimmed,
  tabIndex,
  openElement,
  onFocus,
  onKeyDown,
}: {
  element: ElementRecord;
  id: string;
  mode: ViewMode;
  lens: HeatmapMode;
  dimmed: boolean;
  tabIndex: number;
  openElement: (element: ElementRecord, trigger: HTMLButtonElement) => void;
  onFocus: (element: ElementRecord) => void;
  onKeyDown: (event: ReactKeyboardEvent<HTMLButtonElement>, element: ElementRecord) => void;
}) {
  const style = heatStyle(element, lens);
  const familyColor = familyFor(element)?.color;
  const tileStyle = {
    ...style,
    ...(lens === "family"
      ? { borderColor: familyColor, backgroundColor: "color-mix(in srgb, var(--family-color) 8%, var(--white))" }
      : {}),
  } as CSSProperties;

  return (
    <button
      id={id}
      data-atomic-number={element.atomicNumber}
      data-layout-mode={mode}
      type="button"
      className={`${styles.elementTile} ${mode === "cards" ? styles.elementCard : styles.elementCell} ${dimmed ? styles.dimmed : ""}`}
      style={tileStyle}
      tabIndex={tabIndex}
      onClick={(event) => openElement(element, event.currentTarget)}
      onFocus={() => onFocus(element)}
      onPointerEnter={() => onFocus(element)}
      onKeyDown={(event) => onKeyDown(event, element)}
      aria-label={`${element.name}, ${element.symbol}, atomic number ${element.atomicNumber}; period ${element.period}; ${groupLabel(element)}; ${familyLabel(element)}${element.familyStatus === "predicted" ? ", predicted family" : ""}${element.configurationStatus === "predicted" ? ", predicted electron configuration" : ""}; ${stateLabel(element)}`}
    >
      <span className={styles.atomicNumber}>{element.atomicNumber}</span>
      <span className={styles.symbol}>{element.symbol}</span>
      {mode === "cards" && <span className={styles.cardName}>{element.name}</span>}
      {mode === "cards" && <span className={styles.cardMeta}>{familyLabel(element)}{element.familyStatus === "predicted" ? " · predicted" : ""}</span>}
      {mode === "table" && <span className={styles.tileName}>{element.name}{element.familyStatus === "predicted" ? " · predicted" : ""}</span>}
    </button>
  );
}

function ElementDialog({
  element,
  dialogRef,
  closeDialog,
  onDialogClosed,
  pinElement,
  pinned,
  activeStep,
  setLessonElement,
  showStory,
}: {
  element: ElementRecord | null;
  dialogRef: RefObject<HTMLDialogElement | null>;
  closeDialog: () => void;
  onDialogClosed: () => void;
  pinElement: (element: ElementRecord) => void;
  pinned: boolean;
  activeStep?: LearningStep;
  setLessonElement: (element: ElementRecord) => void;
  showStory: boolean;
}) {
  const titleId = useId();
  const story = element ? ELEMENT_STORIES[element.atomicNumber] : undefined;
  const sourceIds = element
    ? ["iupac", "pubchem", "openstax-table", "openstax-trends", ...(element.atomicWeight ? ["ciaaw", "ciaaw-abridged"] : []), ...(story?.sourceIds ?? [])]
    : [];

  return (
    <dialog
      ref={dialogRef}
      className={styles.elementDialog}
      aria-labelledby={titleId}
      onClose={onDialogClosed}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
    >
      {element && (
        <article className={styles.dialogContent}>
          <header className={styles.dialogHeader}>
            <div className={styles.dialogIdentity}>
              <span className={styles.dialogNumber}>ELEMENT {element.atomicNumber}</span>
              <span className={styles.dialogSymbol} aria-hidden="true">{element.symbol}</span>
            </div>
            <button type="button" className={styles.closeButton} onClick={closeDialog}>
              <span aria-hidden="true">×</span><span className={styles.srOnly}>Close element details</span>
            </button>
            <div className={styles.dialogNameBlock}>
              <h2 id={titleId}>{element.name}</h2>
              <span className={styles.familyTag} style={{ "--family-color": familyFor(element)?.color ?? "#6b7280" } as CSSProperties}>
                {familyLabel(element)}{element.familyStatus === "predicted" ? " · predicted family" : ""}
              </span>
            </div>
          </header>

          {showStory && story && (
            <section className={styles.storyBlock}>
              <p className={styles.eyebrow}>A closer look</p>
              <h3>{story.headline}</h3>
              <p>{story.body}</p>
              <SourceLinks ids={story.sourceIds} label="Story sources" />
            </section>
          )}

          <dl className={styles.propertyGrid}>
            <div><dt>Protons</dt><dd>{element.atomicNumber}</dd></div>
            <div><dt>Electrons</dt><dd>{element.atomicNumber} in a neutral atom</dd></div>
            <div><dt>Period</dt><dd>{element.period}</dd></div>
            <div><dt>Group / series</dt><dd>{groupLabel(element)}</dd></div>
            <div><dt>Standard atomic weight</dt><dd>{weightLabel(element)}</dd></div>
            <div><dt>Electron configuration</dt><dd>{element.electronConfiguration}{element.configurationStatus === "predicted" ? " · predicted" : ""}</dd></div>
            <div><dt>Electronegativity</dt><dd>{element.electronegativity === null ? "Not listed" : `${element.electronegativity} on the Pauling scale`}</dd></div>
            <div><dt>First ionization energy</dt><dd>{element.ionizationEnergy === null ? "Not listed" : `${element.ionizationEnergy} eV`}</dd></div>
            <div><dt>State at 20 °C</dt><dd>{stateLabel(element)}</dd></div>
            <div><dt>Family confidence</dt><dd>{element.familyStatus === "predicted" ? "Predicted" : "Reference classification"}</dd></div>
          </dl>

          <details className={styles.readingNote}>
            <summary>How to read this</summary>
            <div>
              <p>The atomic number gives the proton count; the electron count shown above describes a neutral atom. Atomic weight is a relative, dimensionless quantity—not a neutron count or a mass number.</p>
              <p>{element.abridgedWeight ? `The abridged CIAAW value is ${weightLabel(element)}.` : "No assigned standard atomic weight is listed for this element."} The complete CIAAW entry is {element.atomicWeight ?? "not assigned"}. An interval stays an interval; it is not rounded into a neutron count.</p>
              <p>Configuration and family fields marked predicted are theoretical assignments. State labels marked estimated are not direct reference measurements.</p>
              <SourceLinks ids={["ciaaw", "ciaaw-abridged", "pubchem", "openstax-table"]} />
            </div>
          </details>

          <SourceLinks ids={sourceIds} label="References" />
          <div className={styles.dialogActions}>
            {activeStep?.format === "element" && (
              <button type="button" className={styles.primaryButton} onClick={() => setLessonElement(element)}>
                Use this element
              </button>
            )}
            <button type="button" className={styles.secondaryButton} onClick={() => pinElement(element)}>
              {pinned ? "Remove from compare" : "Compare this element"}
            </button>
          </div>
        </article>
      )}
    </dialog>
  );
}

function CompareTable({ elements, removeElement }: { elements: readonly ElementRecord[]; removeElement: (atomicNumber: number) => void }) {
  if (elements.length === 0) return null;
  const rows: { label: string; value: (element: ElementRecord) => string }[] = [
    { label: "Atomic number", value: (element) => String(element.atomicNumber) },
    { label: "Protons", value: (element) => String(element.atomicNumber) },
    { label: "Period", value: (element) => String(element.period) },
    { label: "Group / series", value: groupLabel },
    { label: "Standard atomic weight", value: weightLabel },
    { label: "State at 20 °C", value: stateLabel },
    { label: "Electronegativity · Pauling", value: (element) => element.electronegativity === null ? "Not listed" : String(element.electronegativity) },
    { label: "First ionization energy", value: (element) => element.ionizationEnergy === null ? "Not listed" : `${element.ionizationEnergy} eV` },
  ];
  return (
    <div className={styles.compareTableWrap}>
      <table className={styles.compareTable}>
        <caption>Reference properties for the selected elements. These are descriptive comparisons, not predictions of chemical behavior.</caption>
        <thead><tr><th scope="col">Property</th>{elements.map((element) => <th scope="col" key={element.atomicNumber}>
          <span className={styles.compareElementHeading}><strong>{element.symbol}</strong> {element.name}</span>
          <button type="button" className={styles.removeButton} onClick={() => removeElement(element.atomicNumber)}>Remove {element.symbol}</button>
        </th>)}</tr></thead>
        <tbody>{rows.map((row) => <tr key={row.label}><th scope="row">{row.label}</th>{elements.map((element) => <td key={element.atomicNumber}>{row.value(element)}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export function ElementAtlas({ referenceOnly = false }: { referenceOnly?: boolean }) {
  const uid = useId();
  const desktop = useSyncExternalStore(subscribeDesktop, getDesktopSnapshot, () => false);
  const [viewOverride, setViewOverride] = useState<ViewMode | null>(null);
  const view = viewOverride ?? (desktop ? "table" : "cards");
  const [query, setQuery] = useState("");
  const [familyFilter, setFamilyFilter] = useState<FamilyId | "all">("all");
  const [stateFilter, setStateFilter] = useState<ElementRecord["state"] | "all">("all");
  const [lens, setLens] = useState<HeatmapMode>("family");
  const [previewNumber, setPreviewNumber] = useState(6);
  const [focusedNumber, setFocusedNumber] = useState(1);
  const [dialogElement, setDialogElement] = useState<ElementRecord | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [compareNumbers, setCompareNumbers] = useState<number[]>([]);
  const [compareStatus, setCompareStatus] = useState("");
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [trackId, setTrackId] = useState<LearningTrack["id"]>("decode");
  const [stepByTrack, setStepByTrack] = useState<Record<string, number>>({});
  const [progressByTrack, setProgressByTrack] = useState<Record<string, Record<string, AnswerRecord>>>({});
  const [draftAnswers, setDraftAnswers] = useState<Record<string, string>>({});
  const [practiceStatus, setPracticeStatus] = useState("");
  const atlasRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const explorerRef = useRef<HTMLElement>(null);
  const explorerHeadingRef = useRef<HTMLHeadingElement>(null);
  const practiceRef = useRef<HTMLElement>(null);
  const practiceHeadingRef = useRef<HTMLHeadingElement>(null);
  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  const restoreTargetRef = useRef<HTMLElement | null>(null);

  const filteredElements = useMemo(
    () => searchElements(query, familyFilter, stateFilter),
    [familyFilter, query, stateFilter],
  );
  const visibleNumbers = useMemo(() => new Set(filteredElements.map((element) => element.atomicNumber)), [filteredElements]);
  const previewElement = ELEMENTS.find((element) => element.atomicNumber === previewNumber) ?? ELEMENTS[5];
  const currentTrack = LEARNING_TRACKS.find((track) => track.id === trackId) ?? LEARNING_TRACKS[0];
  const currentIndex = Math.min(stepByTrack[currentTrack.id] ?? 0, currentTrack.steps.length);
  const currentStep = currentTrack.steps[currentIndex];
  const trackProgress = progressByTrack[currentTrack.id] ?? {};
  const compareElements = compareNumbers.flatMap((number) => {
    const element = ELEMENTS.find((record) => record.atomicNumber === number);
    return element ? [element] : [];
  });
  const selectedDraft = currentStep ? draftAnswers[currentStep.id] ?? "" : "";
  const existingAnswer = currentStep ? trackProgress[currentStep.id] : undefined;
  const lessonSections = [...new Set(currentTrack.steps.map((step) => step.section))];

  function openElement(element: ElementRecord, trigger: HTMLButtonElement | null) {
    triggerRef.current = trigger;
    setDialogElement(element);
    setPreviewNumber(element.atomicNumber);
    setFocusedNumber(element.atomicNumber);
    if (dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal();
  }

  function closeDialog() {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
    else handleDialogClosed();
  }

  function handleDialogClosed() {
    setDialogElement(null);
    const preferred = restoreTargetRef.current;
    const trigger = triggerRef.current;
    restoreTargetRef.current = null;
    requestAnimationFrame(() => {
      if (preferred?.isConnected) {
        if (preferred === questionHeadingRef.current) {
          practiceRef.current?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
        }
        preferred.focus({ preventScroll: true });
      } else if (trigger?.isConnected) {
        trigger.focus();
      } else {
        searchRef.current?.focus();
      }
    });
  }

  function chooseForLesson(element: ElementRecord) {
    if (currentStep?.format !== "element" || existingAnswer) return;
    setDraftAnswers((answers) => ({ ...answers, [currentStep.id]: String(element.atomicNumber) }));
    setPracticeStatus(`${element.name} selected. Check your answer when you are ready.`);
    restoreTargetRef.current = questionHeadingRef.current;
    closeDialog();
  }

  function pinElement(element: ElementRecord) {
    if (compareNumbers.includes(element.atomicNumber)) {
      setCompareNumbers(compareNumbers.filter((number) => number !== element.atomicNumber));
      setCompareStatus(`${element.name} removed from comparison.`);
      return;
    }
    if (compareNumbers.length < 2) {
      setCompareNumbers([...compareNumbers, element.atomicNumber]);
      setCompareStatus(`${element.name} added to comparison.`);
      return;
    }
    const replaced = ELEMENTS.find((record) => record.atomicNumber === compareNumbers[0]);
    setCompareNumbers([compareNumbers[1], element.atomicNumber]);
    setCompareStatus(`${element.name} added; ${replaced?.name ?? "The first selection"} was replaced so the comparison stays at two elements.`);
  }

  function moveFocus(event: ReactKeyboardEvent<HTMLButtonElement>, element: ElementRecord, mode: ViewMode) {
    const direction = event.key;
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(direction)) return;
    const currentIndexInList = filteredElements.findIndex((record) => record.atomicNumber === element.atomicNumber);
    let target: ElementRecord | undefined;
    if (mode === "cards") {
      const delta = direction === "ArrowLeft" || direction === "ArrowUp" ? -1 : 1;
      target = filteredElements[currentIndexInList + delta];
    } else {
      const candidates = filteredElements.filter((record) => {
        if (direction === "ArrowLeft") return record.row === element.row && record.column < element.column;
        if (direction === "ArrowRight") return record.row === element.row && record.column > element.column;
        if (direction === "ArrowUp") return record.column === element.column && record.row < element.row;
        return record.column === element.column && record.row > element.row;
      });
      target = candidates.sort((a, b) => {
        const deltaA = direction === "ArrowLeft" || direction === "ArrowUp"
          ? (direction === "ArrowLeft" ? element.column - a.column : element.row - a.row)
          : (direction === "ArrowRight" ? a.column - element.column : a.row - element.row);
        const deltaB = direction === "ArrowLeft" || direction === "ArrowUp"
          ? (direction === "ArrowLeft" ? element.column - b.column : element.row - b.row)
          : (direction === "ArrowRight" ? b.column - element.column : b.row - element.row);
        return deltaA - deltaB;
      })[0];
    }
    if (!target) return;
    event.preventDefault();
    setFocusedNumber(target.atomicNumber);
    setPreviewNumber(target.atomicNumber);
    atlasRef.current?.querySelector<HTMLButtonElement>(
      `[data-layout-mode="${mode}"][data-atomic-number="${target.atomicNumber}"]`,
    )?.focus();
  }

  function clearFilters() {
    setQuery("");
    setFamilyFilter("all");
    setStateFilter("all");
  }

  function beginPractice() {
    setPracticeOpen(true);
    requestAnimationFrame(() => practiceRef.current?.scrollIntoView({ behavior: scrollBehavior(), block: "start" }));
  }

  function browseTable() {
    requestAnimationFrame(() => {
      explorerRef.current?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
      explorerHeadingRef.current?.focus({ preventScroll: true });
    });
  }

  function returnToQuestion() {
    requestAnimationFrame(() => {
      practiceRef.current?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
      (questionHeadingRef.current ?? practiceHeadingRef.current)?.focus({ preventScroll: true });
    });
  }

  function submitAnswer(step: LearningStep) {
    if (trackProgress[step.id]) return;
    const answer = draftAnswers[step.id]?.trim();
    if (!answer) return;
    const correct = gradeLearningAnswer(step, answer);
    setProgressByTrack((progress) => ({
      ...progress,
      [currentTrack.id]: { ...(progress[currentTrack.id] ?? {}), [step.id]: { answer, correct } },
    }));
    setPracticeStatus(correct ? "That is correct." : "Not quite. Read the explanation, then continue when you are ready.");
  }

  function advancePractice() {
    setStepByTrack((steps) => ({ ...steps, [currentTrack.id]: Math.min(currentTrack.steps.length, currentIndex + 1) }));
    setPracticeStatus("");
  }

  function resetTrack() {
    setProgressByTrack((progress) => ({ ...progress, [currentTrack.id]: {} }));
    setStepByTrack((steps) => ({ ...steps, [currentTrack.id]: 0 }));
    setDraftAnswers((answers) => {
      const next = { ...answers };
      currentTrack.steps.forEach((step) => delete next[step.id]);
      return next;
    });
    setPracticeStatus(`${currentTrack.title} progress reset for this visit.`);
  }

  const currentPinned = dialogElement ? compareNumbers.includes(dialogElement.atomicNumber) : false;
  const activeDialogStep = practiceOpen && !referenceOnly && !existingAnswer ? currentStep : undefined;

  return (
    <section ref={atlasRef} className={`${styles.atlas} ${referenceOnly ? styles.referenceOnly : ""}`} aria-labelledby={`${uid}-heading`}>
      {!referenceOnly && (
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>A field guide to the elements</p>
            <h1 id={`${uid}-heading`}>Explore the periodic table</h1>
            <p>Browse 118 elements, compare reference values, and follow a pattern that interests you.</p>
            <button type="button" className={styles.primaryButton} onClick={beginPractice}>Learn with the table <span aria-hidden="true">↓</span></button>
          </div>
          <div className={styles.heroMotif} aria-hidden="true">
            <svg viewBox="0 0 280 190" role="presentation">
              <path d="M28 152 94 92l43 26 75-77" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="28" cy="152" r="5" /><circle cx="94" cy="92" r="7" /><circle cx="137" cy="118" r="4" /><circle cx="212" cy="41" r="9" />
              <path d="M224 45h34M212 29V8M217 48l16 17M86 92H50M94 82V50" fill="none" stroke="currentColor" strokeWidth="1" />
              <text x="12" y="177">01</text><text x="75" y="80">06</text><text x="199" y="25">118</text>
              <path d="M36 35h32M52 19v32M244 127h21m-10-10v20" fill="none" stroke="currentColor" strokeWidth=".8" />
            </svg>
          </div>
        </header>
      )}

      {referenceOnly && <h2 id={`${uid}-heading`} className={styles.referenceHeading}>Explore the periodic table</h2>}

      {!referenceOnly && <section className={styles.practiceSection} id={`${uid}-practice`} ref={practiceRef} aria-labelledby={`${uid}-practice-title`}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>A short, open-book path</p>
          <h2 id={`${uid}-practice-title`} ref={practiceHeadingRef} tabIndex={-1}>Learn with the table</h2>
          <p>Choose a path, look things up, and check one idea at a time. Nothing is timed.</p>
        </div>
        {!practiceOpen ? <div className={styles.practiceInvite}>
          <div className={styles.trackPreviews}>{LEARNING_TRACKS.map((track, index) => <article key={track.id}>
            <span>0{index + 1} / 03</span><h3>{track.title}</h3><p>{track.description}</p>
          </article>)}</div>
          <button type="button" className={styles.primaryButton} onClick={() => setPracticeOpen(true)}>Choose a learning path</button>
        </div> : <div className={styles.practicePanel}>
          <div className={styles.trackPicker} role="group" aria-label="Learning paths">
            {LEARNING_TRACKS.map((track) => {
              const count = Object.values(progressByTrack[track.id] ?? {}).filter((answer) => answer.correct).length;
              const done = Object.keys(progressByTrack[track.id] ?? {}).length;
              return <button type="button" key={track.id} className={track.id === trackId ? styles.trackActive : ""} aria-pressed={track.id === trackId} onClick={() => { setTrackId(track.id); setPracticeStatus(""); }}>
                <span>{track.kicker}</span><strong>{track.title}</strong><small>{done}/8 checked · {count}/8 correct</small>
              </button>;
            })}
          </div>
          <div className={styles.trackContext}>
            <div><span className={styles.eyebrow}>{currentTrack.kicker}</span><h3>{currentTrack.title}</h3><p>{currentTrack.description}</p></div>
            <div className={styles.sectionChips} role="group" aria-label="Sections in this path">{lessonSections.map((section) => <span key={section}>{section}</span>)}</div>
          </div>

          {currentStep ? <article className={styles.practiceStep} aria-labelledby={`${uid}-step-title`}>
            <div className={styles.stepTop}><span>{currentStep.section}</span><span>Step {currentIndex + 1} of {currentTrack.steps.length}</span></div>
            <h4 id={`${uid}-step-title`} ref={questionHeadingRef} tabIndex={-1}>{currentStep.prompt}</h4>
            <p className={styles.clue}>{currentStep.clue}</p>
            {currentStep.format === "element" ? <div className={styles.elementAnswer}>
              <p>{selectedDraft ? <>Selected: <strong>{ELEMENTS.find((element) => element.atomicNumber === Number(selectedDraft))?.name} ({ELEMENTS.find((element) => element.atomicNumber === Number(selectedDraft))?.symbol})</strong></> : "Choose a table tile, inspect it, then explicitly use it as your answer."}</p>
              <button type="button" className={styles.secondaryButton} onClick={(event) => {
                const candidate = ELEMENTS.find((element) => element.atomicNumber === previewNumber) ?? ELEMENTS[0];
                openElement(candidate, event.currentTarget);
              }}>Inspect selected element</button>
            </div> : <fieldset className={styles.choiceFieldset} disabled={!!existingAnswer}>
              <legend>Choose one answer</legend>
              {currentStep.options?.map((option) => <label key={option.id} className={styles.choiceOption}>
                <input type="radio" name={`${uid}-${currentStep.id}`} value={option.id} checked={selectedDraft === option.id} onChange={() => setDraftAnswers((answers) => ({ ...answers, [currentStep.id]: option.id }))} />
                <span>{option.label}</span>
              </label>)}
            </fieldset>}

            {existingAnswer && <div className={`${styles.feedback} ${existingAnswer.correct ? styles.feedbackCorrect : styles.feedbackIncorrect}`}>
              <strong>{existingAnswer.correct ? "Correct" : "Here is the distinction"}</strong>
              <p>{currentStep.explanation}</p>
              <SourceLinks ids={currentStep.sourceIds} label="Read more" />
            </div>}
            <div className={styles.stepActions}>
              <button type="button" className={styles.secondaryButton} onClick={browseTable}>Browse table</button>
              {!existingAnswer ? <button type="button" className={styles.primaryButton} disabled={!selectedDraft} onClick={() => submitAnswer(currentStep)}>Check answer</button> : <button type="button" className={styles.primaryButton} onClick={advancePractice}>{currentIndex === currentTrack.steps.length - 1 ? "See practice summary" : "Next step"}<span aria-hidden="true"> →</span></button>}
              <span role="status" aria-live="polite">{practiceStatus}</span>
            </div>
          </article> : <article className={styles.practiceSummary}>
            <p className={styles.eyebrow}>Track complete</p><h4>{currentTrack.title}: {Object.values(trackProgress).filter((answer) => answer.correct).length} of {currentTrack.steps.length} correct</h4>
            <p>This reviews your first submitted answers; it is not a standardized score. Use the sources and explanations to revisit any step.</p>
            <ol className={styles.answerReview}>{currentTrack.steps.map((step, index) => {
              const answer = trackProgress[step.id];
              return <li key={step.id}>
                <span>0{index + 1} · {step.section}</span><strong>{answer?.correct ? "Correct" : "Review"}</strong>
                <p>{step.prompt}</p><p>{step.explanation}</p><SourceLinks ids={step.sourceIds} label="Sources" />
              </li>;
            })}</ol>
            <button type="button" className={styles.secondaryButton} onClick={resetTrack}>Reset this path</button>
            <QuizSharePanel key={currentTrack.id} title="Periodic table field guide" url={PERIODIC_TABLE_URL} defaultMessage="I spent a few minutes exploring the periodic table. Choose an element and follow a pattern that interests you." heading="Share the table" subheading="Invite someone to explore at their own pace." privacyNote="The shared link carries no answers or progress. Add your result only if you choose the option below." optionalText={`My first try on ${currentTrack.title}: ${Object.values(trackProgress).filter((answer) => answer.correct).length}/${currentTrack.steps.length}.`} optionalTextLabel="Add my result" cards />
          </article>}
          <p className={styles.progressNote}>Progress stays in this open page. Your first submitted answer is the one included in the review.</p>
        </div>}
      </section>}

      <section className={styles.explorer} ref={explorerRef} aria-labelledby={`${uid}-explorer-title`}>
        {!referenceOnly && <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>The atlas</p>
          <h2 id={`${uid}-explorer-title`} ref={explorerHeadingRef} tabIndex={-1}>Choose a starting point</h2>
          <p>Search an element or browse by family and state. Select any tile for its reference notes.</p>
        </div>}
        {referenceOnly && <h3 id={`${uid}-explorer-title`} className={styles.srOnly}>Periodic table explorer</h3>}
        {!referenceOnly && practiceOpen && <button type="button" className={styles.returnPractice} onClick={returnToQuestion}>
          Return to {currentStep ? "current question" : "practice summary"} <span aria-hidden="true">↑</span>
        </button>}

        <div className={styles.controls}>
          <label className={styles.searchLabel} htmlFor={`${uid}-search`}>Find an element
            <span className={styles.searchField}>
              <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 4 4" /></svg>
              <input ref={searchRef} id={`${uid}-search`} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, symbol, or atomic number" />
              {query && <button type="button" className={styles.clearSearch} onClick={() => setQuery("")} aria-label="Clear search">×</button>}
            </span>
          </label>
          <label className={styles.filterLabel}>Family
            <select value={familyFilter} onChange={(event) => setFamilyFilter(event.target.value as FamilyId | "all")}>
              <option value="all">All families</option>
              {FAMILIES.map((family) => <option key={family.id} value={family.id}>{family.label}</option>)}
            </select>
          </label>
          <label className={styles.filterLabel}>State at 20 °C
            <select value={stateFilter} onChange={(event) => setStateFilter(event.target.value as ElementRecord["state"] | "all")}>
              <option value="all">Any state</option><option value="solid">Solid</option><option value="liquid">Liquid</option><option value="gas">Gas</option><option value="unknown">Unknown</option>
            </select>
          </label>
          <div className={styles.viewControl} role="group" aria-label="Element layout">
            <button type="button" aria-pressed={view === "table"} className={view === "table" ? styles.controlActive : ""} onClick={() => setViewOverride("table")}>Table</button>
            <button type="button" aria-pressed={view === "cards"} className={view === "cards" ? styles.controlActive : ""} onClick={() => setViewOverride("cards")}>Cards</button>
          </div>
        </div>

        <div className={styles.filterSummary}>
          <p role="status" aria-live="polite">Showing <strong>{filteredElements.length}</strong> of 118 elements</p>
          {(query || familyFilter !== "all" || stateFilter !== "all") && <button type="button" className={styles.textButton} onClick={clearFilters}>Clear filters</button>}
          <label className={styles.lensControl}>Color by
            <select value={lens} onChange={(event) => setLens(event.target.value as HeatmapMode)}>
              <option value="family">Family</option><option value="electronegativity">Electronegativity</option><option value="ionization">First ionization energy</option>
            </select>
          </label>
        </div>

        {lens !== "family" && <p className={styles.legend}>
          <span className={styles.legendSwatch} aria-hidden="true" />
          {lens === "electronegativity" ? "Pauling electronegativity · lower to higher" : "First ionization energy · eV · lower to higher"}
          <span className={styles.missingKey}>Grey = value not listed</span>
        </p>}
        {lens === "family" && <div className={styles.familyLegend} role="group" aria-label="Element families">
          {FAMILIES.map((family) => <span key={family.id}><i style={{ "--family-color": family.color } as CSSProperties} aria-hidden="true" />{family.label}</span>)}
        </div>}

        {filteredElements.length === 0 ? <div className={styles.emptyState}>
          <h3>No elements match those filters</h3><p>Try a broader search or clear the family and state filters.</p><button type="button" className={styles.secondaryButton} onClick={clearFilters}>Clear search and filters</button>
        </div> : (
          <>
            {view === "table" ? <div className={styles.tableScroll} role="region" aria-label="Periodic table; scroll horizontally to see all groups" tabIndex={0}>
              <div className={styles.tableBoard}>
                <div className={styles.groupHeader} aria-hidden="true">
                  <span className={styles.axisCorner}>G</span>
                  {Array.from({ length: 18 }, (_, index) => <span key={index + 1}>{index + 1}</span>)}
                </div>
                <div className={styles.periodGrid} role="group" aria-label="Elements arranged by period and group">
                  <aside className={styles.spotlight} aria-live="polite" aria-label="Element spotlight">
                    {previewElement ? <>
                      <span className={styles.spotlightCode}>{String(previewElement.atomicNumber).padStart(3, "0")} / {previewElement.symbol}</span>
                      <strong>{previewElement.name}</strong>
                      <span>{familyLabel(previewElement)} · period {previewElement.period}{previewElement.group === null ? " · detached series" : ` · group ${previewElement.group}`}</span>
                      {ELEMENT_STORIES[previewElement.atomicNumber] && <span className={styles.spotlightStory}>{ELEMENT_STORIES[previewElement.atomicNumber].headline}</span>}
                      <button type="button" onClick={(event) => openElement(previewElement, event.currentTarget)}>
                        Inspect {previewElement.symbol} <span aria-hidden="true">↗</span>
                      </button>
                    </> : <p>Choose any element to see a closer view.</p>}
                  </aside>
                  {Array.from({ length: 7 }, (_, rowIndex) => {
                    const period = rowIndex + 1;
                    return <div className={styles.periodLabel} key={`period-${period}`} style={{ gridColumn: 1, gridRow: period }}><span>Period</span>{period}</div>;
                  })}
                  {ELEMENTS.filter((element) => element.row <= 7).map((element) => (
                    <div key={element.atomicNumber} className={styles.gridCell} style={{ gridColumn: element.column + 1, gridRow: element.row }}>
                      <ElementTile element={element} id={`${uid}-table-${element.atomicNumber}`} mode="table" lens={lens} dimmed={!visibleNumbers.has(element.atomicNumber)} tabIndex={(filteredElements.some((record) => record.atomicNumber === focusedNumber) ? focusedNumber : filteredElements[0]?.atomicNumber) === element.atomicNumber ? 0 : -1} openElement={openElement} onFocus={(record) => { setPreviewNumber(record.atomicNumber); setFocusedNumber(record.atomicNumber); }} onKeyDown={(event, record) => moveFocus(event, record, "table")} />
                    </div>
                  ))}
                  {[6, 7].map((period) => <a key={`series-link-${period}`} href={`#${uid}-periodic-layout-note`} className={styles.seriesPlaceholder} style={{ gridColumn: 4, gridRow: period }}>
                    <span>{period === 6 ? "57–71" : "89–103"}</span><small>{period === 6 ? "Lanthanides" : "Actinides"} below ↘</small>
                  </a>)}
                </div>
                <div className={styles.detachedRows} role="group" aria-label="Detached element series">
                    {[9, 10].map((row) => {
                      const series = ELEMENTS.filter((element) => element.row === row);
                      const title = row === 9 ? "Lanthanides" : "Actinides";
                      const period = row === 9 ? 6 : 7;
                      return <div className={styles.detachedLine} key={row}>
                      <div className={styles.detachedLabel}><span>Period {period}</span><strong>{title}</strong></div>
                      <div className={styles.detachedGrid} role="group" aria-label={`${title}, conventionally displayed in a detached row`}>
                        {series.map((element) => <div key={element.atomicNumber} className={styles.detachedCell} style={{ gridColumn: element.column - 2 }}>
                          <ElementTile element={element} id={`${uid}-table-${element.atomicNumber}`} mode="table" lens={lens} dimmed={!visibleNumbers.has(element.atomicNumber)} tabIndex={(filteredElements.some((record) => record.atomicNumber === focusedNumber) ? focusedNumber : filteredElements[0]?.atomicNumber) === element.atomicNumber ? 0 : -1} openElement={openElement} onFocus={(record) => { setPreviewNumber(record.atomicNumber); setFocusedNumber(record.atomicNumber); }} onKeyDown={(event, record) => moveFocus(event, record, "table")} />
                        </div>)}
                      </div>
                    </div>;
                  })}
                </div>
              </div>
            </div> : <div className={styles.cardGrid} role="group" aria-label="Element cards">
              {filteredElements.map((element) => <ElementTile key={element.atomicNumber} element={element} id={`${uid}-card-${element.atomicNumber}`} mode="cards" lens={lens} dimmed={false} tabIndex={(filteredElements.some((record) => record.atomicNumber === focusedNumber) ? focusedNumber : filteredElements[0]?.atomicNumber) === element.atomicNumber ? 0 : -1} openElement={openElement} onFocus={(record) => { setPreviewNumber(record.atomicNumber); setFocusedNumber(record.atomicNumber); }} onKeyDown={(event, record) => moveFocus(event, record, "cards")} />)}
            </div>}
            {view === "table" && <p id={`${uid}-periodic-layout-note`} className={styles.layoutNote}>{LAYOUT_NOTE}</p>}
          </>
        )}

        {view === "cards" && previewElement && <div className={styles.selectedToolbar}>
          <div><span className={styles.eyebrow}>Selected element</span><strong>{previewElement.name} <small>{previewElement.symbol} · {previewElement.atomicNumber}</small></strong></div>
          <button type="button" className={styles.secondaryButton} onClick={(event) => openElement(previewElement, event.currentTarget)}>Inspect details</button>
          {practiceOpen && currentStep?.format === "element" && !existingAnswer && <button type="button" className={styles.textButton} onClick={() => chooseForLesson(previewElement)}>Use this element</button>}
        </div>}
      </section>

      <ElementDialog element={dialogElement} dialogRef={dialogRef} closeDialog={closeDialog} onDialogClosed={handleDialogClosed} pinElement={pinElement} pinned={currentPinned} activeStep={activeDialogStep} setLessonElement={chooseForLesson} showStory={!referenceOnly} />

      <section className={styles.compareSection} aria-labelledby={`${uid}-compare-title`}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Side by side</p><h2 id={`${uid}-compare-title`}>Compare elements</h2>
          <p>Pin up to two elements from their detail panel. This view lines up reference values without making a prediction about behavior.</p>
        </div>
        <div className={styles.comparePicks} role="group" aria-label="Optional comparison examples">
          <span>Try a pair:</span>
          {[{ label: "Carbon and silicon", numbers: [6, 14] }, { label: "Sodium and chlorine", numbers: [11, 17] }, { label: "Seaborgium and tungsten", numbers: [106, 74] }].map((pair) => <button type="button" key={pair.label} onClick={() => { setCompareNumbers(pair.numbers); setCompareStatus(`${pair.label} comparison selected.`); }}>{pair.label}</button>)}
        </div>
        {compareElements.length > 0 ? <CompareTable elements={compareElements} removeElement={(number) => { setCompareNumbers(compareNumbers.filter((item) => item !== number)); setCompareStatus(`${ELEMENTS.find((element) => element.atomicNumber === number)?.name ?? "Element"} removed from comparison.`); }} /> : <p className={styles.emptyCompare}>Your comparison will appear here. Open an element and choose “Compare this element”.</p>}
        <p className={styles.srOnly} role="status" aria-live="polite">{compareStatus}</p>
      </section>

      {!referenceOnly && <>
        <section className={styles.discoverySection} aria-labelledby={`${uid}-discovery-title`}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>Notes from the field</p><h2 id={`${uid}-discovery-title`}>Research &amp; reference updates</h2><p>Dated research and reference notes, with links to the sources behind them.</p></div>
          <div className={styles.discoveryList}>{[...DISCOVERY_UPDATES].sort((a, b) => b.date.localeCompare(a.date)).map((update) => <article key={update.id} className={styles.discoveryCard}>
            <div className={styles.discoveryMeta}><time dateTime={update.date}>{update.date}</time><span>{update.status === "research" ? "Research note" : update.status === "data-update" ? "Data update" : "Search note"}</span></div>
            <h3>{update.title}</h3><p>{update.summary}</p><p className={styles.whyText}>{update.whyItMatters}</p>
            <div className={styles.jumpLinks} role="group" aria-label={`Related elements for ${update.title}`}>
              {update.elementNumbers.length === 0 && <span className={styles.noElementJump}>No confirmed element to open for this research target.</span>}
              {update.elementNumbers.flatMap((number) => {
              const element = ELEMENTS.find((record) => record.atomicNumber === number);
              return element ? <button type="button" key={number} onClick={(event) => openElement(element, event.currentTarget)}>{element.symbol} · {element.name}</button> : [];
              })}
            </div>
            <SourceLinks ids={update.sourceIds} label="Sources" />
          </article>)}</div>
        </section>

        <section className={styles.sourcesSection} aria-labelledby={`${uid}-sources-title`}>
          <div><p className={styles.eyebrow}>Reference shelf</p><h2 id={`${uid}-sources-title`}>Sources &amp; conventions</h2><p>Atomic weights follow CIAAW; other tabulated properties follow the cited periodic-table references. Data checked {"2026-11-21"}. Missing values stay unassigned.</p></div>
          <ul>{REFERENCE_SOURCES.map((source) => <li key={source.id}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}<span aria-hidden="true"> ↗</span></a></li>)}</ul>
          <p className={styles.layoutNote}>{LAYOUT_NOTE}</p>
        </section>

        <section className={styles.shareSection} aria-label="Share the periodic table">
          <QuizSharePanel title="Periodic table field guide" url={PERIODIC_TABLE_URL} defaultMessage="Come explore the periodic table with me. Pick an element, look up what you wonder about, and compare a pair." heading="Share the table" subheading="A small invitation to explore together." privacyNote="The shared link carries no answers, scores, or learning progress." cards />
        </section>
      </>}
    </section>
  );
}
