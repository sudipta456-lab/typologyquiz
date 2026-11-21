"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import type { AnatomyFunctionId } from "@/lib/anatomy-functions";
import { getAnatomyFunctionLesson } from "@/lib/anatomy-functions";
import { getAnatomyFunctionFrame, getAnatomyFunctionStepIndex } from "@/lib/anatomy-function-model";
import styles from "./Functions.module.css";

const FunctionSceneOnDemand = dynamic(
  () => import("./FunctionScene").then((module) => module.FunctionScene),
  {
    ssr: false,
    loading: () => <p className={styles.sceneStatus} role="status">Preparing the illustrative 3D view…</p>,
  },
);

type AnatomyFunctionExplorerProps = { systemId: AnatomyFunctionId; initialStepId?: string };
type DiagramFrame = ReturnType<typeof getAnatomyFunctionFrame>;

class SceneErrorBoundary extends Component<{ onError: () => void; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[anatomy-function-scene] 3D component failed to load", error);
    }
    this.props.onError();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const STRUCTURE_LABELS: Readonly<Record<AnatomyFunctionId, readonly string[]>> = {
  heart: ["Four volumetric chamber forms, grouped as atrial and ventricular chambers", "A pulmonary circuit and a systemic circuit; no anatomical left/right orientation is assigned", "Atrioventricular and outflow gate symbols, not valve leaflet anatomy", "Curved blood-flow paths; blood is red throughout"],
  respiratory: ["Branching airways", "Soft lung lobes that expand and recoil", "A moving diaphragm dome", "An enlarged alveolar-capillary exchange inset; gas exchange continues when bulk airflow pauses"],
  urinary: ["An enlarged, schematic glomerular filter tuft inside a Bowman's cup", "A coiled tubule and U-loop", "A collecting duct", "A separate nearby capillary return; cells and large proteins stay in the blood path"],
  brain: ["Branched dendrites and soma", "An initial segment and segmented axon with a local traveling signal", "Presynaptic vesicles and a chemical synaptic cleft", "Receptors on the receiving membrane; binding does not guarantee a new action potential"],
};

function observationForFrame(frame: DiagramFrame): string {
  switch (frame.systemId) {
    case "heart":
      return [
        "Both lower chambers fill through open inlet gates.",
        "Pressure rises while both gate sets stay closed.",
        "Both lower chambers eject through open outlet gates.",
        "Pressure falls while both gate sets stay closed.",
      ][frame.stageIndex];
    case "respiratory":
      return [
        "The diaphragm flattens as bulk air moves in.",
        "Bulk airflow pauses while gas exchange continues.",
        "The diaphragm domes upward as bulk air moves out.",
        "Bulk airflow pauses; gas exchange continues.",
      ][frame.stageIndex];
    case "urinary":
      return [
        "Small materials pass from blood into the capsule.",
        "Selected materials move from tubule back to blood.",
        "Selected materials move from blood into the tubule.",
        "Tubular fluid enters the collecting duct.",
      ][frame.stageIndex];
    case "brain":
      return [
        "The neuron receives local input.",
        "A membrane-change signal advances along the axon.",
        "Chemical messengers cross the synaptic gap.",
        "Messengers bind receptors on the receiving cell.",
      ][frame.stageIndex];
  }
}

function insetIdentification(systemId: AnatomyFunctionId): string | null {
  if (systemId === "respiratory") return "Enlarged inset: the alveolar-capillary boundary.";
  if (systemId === "urinary") return "Enlarged model: the nephron filter, tubule, and collecting duct.";
  return null;
}

function FunctionIllustration({ systemId, frame, showLabels }: { systemId: AnatomyFunctionId; frame: DiagramFrame; showLabels: boolean }) {
  if (systemId === "heart" && frame.systemId === "heart") {
    const filling = frame.flowDirection === "into-ventricles";
    const ejection = frame.flowDirection === "out-of-ventricles";
    const chamberScale = 0.72 + frame.ventricularVolume * 0.28;
    const pressureHeight = frame.ventricularPressure === "higher" ? 54 : frame.ventricularPressure === "rising" ? 38 + frame.progress * 16 : frame.ventricularPressure === "falling" ? 54 - frame.progress * 16 : 22;
    return (
      <svg className={styles.illustration} viewBox="0 0 600 390" aria-hidden="true">
        <defs><filter id="heart-soft"><feGaussianBlur stdDeviation="8" /></filter></defs>
        <ellipse cx="300" cy="196" rx="190" ry="155" fill="#ead9ca" opacity=".34" filter="url(#heart-soft)" />
        <path d="M220 106 C174 82 137 110 148 154 C157 189 201 198 222 232 C242 268 244 315 294 326 C333 335 342 286 356 251 C375 205 438 184 451 145 C465 101 425 78 382 106 C350 81 327 91 301 117 C278 92 247 89 220 106Z" fill="#f1e4d8" stroke="#cbb8a9" strokeWidth="5" />
        <path d="M203 136 C177 119 164 143 179 162 C192 177 222 180 251 190 L260 151Z" fill="#557fa9" stroke="#fff" strokeWidth="3" />
        <path d="M199 186 C183 198 186 232 203 265 C218 294 247 313 271 307 C291 302 292 266 287 222 C283 194 246 182 199 186Z" fill="#557fa9" stroke="#fff" strokeWidth="3" transform={`translate(${244 * (1 - chamberScale)} ${247 * (1 - chamberScale)}) scale(${chamberScale})`} />
        <path d="M397 137 C424 117 439 143 422 163 C407 180 378 180 349 190 L340 151Z" fill="#d65b55" stroke="#fff" strokeWidth="3" />
        <path d="M401 186 C417 198 414 232 397 265 C382 294 353 313 329 307 C309 302 308 266 313 222 C317 194 354 182 401 186Z" fill="#d65b55" stroke="#fff" strokeWidth="3" transform={`translate(${356 * (1 - chamberScale)} ${247 * (1 - chamberScale)}) scale(${chamberScale})`} />
        <path d="M190 112 C181 72 186 54 210 40" className={styles.diagramLine} stroke="#557fa9" strokeWidth="18" />
        <path d="M410 112 C420 73 416 53 392 40" className={styles.diagramLine} stroke="#d65b55" strokeWidth="18" />
        <path d="M238 169 C245 181 259 188 273 188 M362 169 C355 181 341 188 327 188" className={styles.diagramLine} stroke="#f4d6a1" strokeWidth="11" />
        <path d="M235 273 C225 325 225 346 208 354" className={styles.diagramLine} stroke="#557fa9" strokeWidth="13" />
        <path d="M365 273 C375 325 375 346 392 354" className={styles.diagramLine} stroke="#d65b55" strokeWidth="13" />
        <rect x="516" y={226 - pressureHeight} width="14" height={pressureHeight} rx="7" fill="#6256a5" />
        <path d="M510 226 H536 M510 170 H536" className={styles.diagramLine} stroke="#6256a5" strokeWidth="3" />
        <g stroke="#f4d6a1" strokeWidth="7" strokeLinecap="round">
          <path d={frame.avGate === "open" ? "M238 177 l-7 13 M252 177 l-7 13 M362 177 l7 13 M348 177 l7 13" : "M234 184 h13 M251 188 h13 M353 184 h13 M336 188 h13"} />
          <path d={frame.outflowGate === "open" ? "M221 285 l-10 9 M236 290 l-10 9 M379 285 l10 9 M364 290 l10 9" : "M214 291 h13 M230 296 h13 M373 291 h13 M357 296 h13"} />
        </g>
        {filling && <path d="M221 157 C235 176 252 188 266 202 M379 157 C365 176 348 188 334 202" className={styles.diagramLine} stroke="#fff3d3" strokeWidth="5" markerEnd="url(#arrow-heart)" />}
        {ejection && <path d="M233 278 C222 318 220 333 211 345 M367 278 C378 318 380 333 389 345" className={styles.diagramLine} stroke="#fff3d3" strokeWidth="5" markerEnd="url(#arrow-heart)" />}
        <defs><marker id="arrow-heart" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#fff3d3" /></marker></defs>
        {showLabels && <g><text x="102" y="96">Pulmonary circuit</text><text x="390" y="96">Systemic circuit</text><text x="166" y="150" className={styles.smallText}>atrium</text><text x="397" y="150" className={styles.smallText}>atrium</text><text x="245" y="220" className={styles.smallText}>ventricular chambers</text><text x="489" y="252" className={styles.smallText}>pressure cue</text></g>}
      </svg>
    );
  }

  if (systemId === "respiratory" && frame.systemId === "respiratory") {
    const domeY = 318 - frame.diaphragmDownwardOffset * 64;
    const expand = frame.lungExpansion;
    const airflowColor = frame.airflow === "out" ? "#ba6543" : "#2876a8";
    return (
      <svg className={styles.illustration} viewBox="0 0 600 390" aria-hidden="true">
        <defs><linearGradient id="lung-soft" x1="0" x2="1"><stop stopColor="#e2a898" /><stop offset="1" stopColor="#cb817a" /></linearGradient></defs>
        <path d="M300 54 L300 127 M300 125 C275 143 243 164 228 190 M300 125 C325 143 357 164 372 190" className={styles.diagramLine} stroke="#bd996d" strokeWidth="17" />
        <path d="M228 190 C208 214 194 232 181 268 M228 190 C234 219 236 240 233 267 M372 190 C392 214 406 232 419 268 M372 190 C366 219 364 240 367 267" className={styles.diagramLine} stroke="#5c9a92" strokeWidth="10" />
        <path d="M180 156 C125 168 110 239 133 292 C153 339 220 342 257 303 C279 279 271 214 251 178 C235 153 207 151 180 156Z" fill="url(#lung-soft)" stroke="#b8786e" strokeWidth="4" transform={`translate(0 ${12 * (1 - expand)}) scale(${0.95 + expand * 0.05} ${0.92 + expand * 0.08})`} />
        <path d="M420 156 C475 168 490 239 467 292 C447 339 380 342 343 303 C321 279 329 214 349 178 C365 153 393 151 420 156Z" fill="url(#lung-soft)" stroke="#b8786e" strokeWidth="4" transform={`translate(0 ${12 * (1 - expand)}) scale(${0.95 + expand * 0.05} ${0.92 + expand * 0.08})`} />
        <path d={`M110 ${domeY} Q300 ${domeY - 76 * frame.diaphragmDomeFactor} 490 ${domeY}`} className={styles.diagramLine} stroke="#d4a365" strokeWidth="16" />
        <circle cx="482" cy="94" r="62" fill="#f8eee1" stroke="#d5c4ac" strokeWidth="3" />
        <circle cx="461" cy="77" r="18" fill="#edc2b0" /><circle cx="491" cy="72" r="18" fill="#f0cbb7" /><circle cx="510" cy="96" r="18" fill="#eab5a3" /><circle cx="477" cy="108" r="18" fill="#f0cbb7" /><circle cx="500" cy="122" r="15" fill="#eab5a3" />
        <path d="M442 112 C452 91 473 62 500 71 C519 79 520 111 500 123" className={styles.diagramLine} stroke="#ad5b66" strokeWidth="5" />
        <defs>
          <marker id="arrow-o2" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#2e8b57" /></marker>
          <marker id="arrow-co2" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#7556a3" /></marker>
        </defs>
        <path d="M477 108 Q458 106 442 112" className={styles.diagramLine} stroke="#2e8b57" strokeWidth="4" markerEnd="url(#arrow-o2)" />
        <path d="M500 123 Q506 114 500 108" className={styles.diagramLine} stroke="#7556a3" strokeWidth="4" markerEnd="url(#arrow-co2)" />
        {frame.airflow !== "none" && <path d={frame.airflow === "in" ? "M300 67 L300 139 M300 139 L240 189 M300 139 L360 189" : "M180 237 L220 190 M420 237 L380 190 M300 139 L300 72"} className={styles.diagramLine} stroke={airflowColor} strokeWidth="5" markerEnd="url(#arrow-lung)" />}
        <defs><marker id="arrow-lung" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill={airflowColor} /></marker></defs>
        {showLabels && <g><text x="72" y="145">soft lung lobes</text><text x="282" y="38">branching airway</text><text x="246" y="365">diaphragm dome</text></g>}
      </svg>
    );
  }

  if (systemId === "urinary" && frame.systemId === "urinary") {
    const routeColor = frame.route === "tubule-to-blood" ? "#218a78" : frame.route === "blood-to-tubule" ? "#6657a8" : "#c28b35";
    return (
      <svg className={styles.illustration} viewBox="0 0 600 390" aria-hidden="true">
        <defs><marker id="arrow-nephron" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill={routeColor} /></marker></defs>
        <path d="M125 135 C169 116 202 119 224 142 C244 164 229 188 204 204 C182 217 177 252 211 278 C237 298 281 285 306 264 C330 244 341 222 358 214 C379 203 407 213 410 238 L410 336" className={styles.diagramLine} stroke="#c28b35" strokeWidth="19" />
        <path d="M72 154 C108 137 129 145 157 161 C186 180 181 215 158 241 C139 263 132 289 158 314 C185 341 240 340 278 315" className={styles.diagramLine} stroke="#a84545" strokeWidth="12" />
        <path d="M128 139 C112 95 164 73 192 101 C220 129 202 159 176 167 C151 174 124 160 128 139Z" fill="#f1e2ca" stroke="#c7a977" strokeWidth="5" />
        <g fill="#c97d73" stroke="#a95c58" strokeWidth="2"><circle cx="147" cy="127" r="14"/><circle cx="168" cy="112" r="15"/><circle cx="186" cy="128" r="13"/><circle cx="163" cy="143" r="13"/><circle cx="188" cy="149" r="12"/></g>
        {frame.stageIndex === 0 && <>
          <path d="M154 158 Q166 145 174 136" className={styles.diagramLine} stroke={routeColor} strokeWidth="6" strokeDasharray="3 8" markerEnd="url(#arrow-nephron)" />
          <path d="M174 136 Q148 125 127 136" className={styles.diagramLine} stroke={routeColor} strokeWidth="6" strokeDasharray="3 8" markerEnd="url(#arrow-nephron)" />
        </>}
        {frame.stageIndex === 1 && <path d="M204 206 Q188 216 169 232" className={styles.diagramLine} stroke={routeColor} strokeWidth="7" strokeDasharray="3 8" markerEnd="url(#arrow-nephron)" />}
        {frame.stageIndex === 2 && <path d="M169 232 Q191 216 205 206" className={styles.diagramLine} stroke={routeColor} strokeWidth="7" strokeDasharray="3 8" markerEnd="url(#arrow-nephron)" />}
        {frame.stageIndex === 3 && <path d="M358 214 Q385 204 408 230" className={styles.diagramLine} stroke={routeColor} strokeWidth="7" strokeDasharray="3 8" markerEnd="url(#arrow-nephron)" />}
        <path d="M65 122 C104 117 126 127 148 145" className={styles.diagramLine} stroke="#bf6865" strokeWidth="5" />
        {showLabels && <g><text x="35" y="96">capillary blood</text><text x="190" y="87">filter tuft</text><text x="194" y="239" className={styles.smallText}>coiled tubule</text><text x="324" y="325">U-loop</text><text x="421" y="286">collecting duct</text></g>}
      </svg>
    );
  }

  if (systemId === "brain" && frame.systemId === "brain") {
    const axonMembraneLoci = [296, 329, 362, 395, 428];
    const activeLocus = Math.min(Math.floor(frame.axonSignalPosition * axonMembraneLoci.length), axonMembraneLoci.length - 1);
    return (
      <svg className={styles.illustration} viewBox="0 0 700 390" aria-hidden="true">
        <g className={styles.diagramLine} stroke="#5b8f84" strokeWidth="13"><path d="M217 192 C170 161 146 128 121 94 M215 185 C165 184 126 176 87 157 M218 204 C172 226 148 262 123 299 M212 212 C188 253 181 292 181 331 M212 176 C176 133 170 99 178 66" /></g>
        <circle cx="229" cy="194" r="51" fill="#d29b70" stroke="#ad7954" strokeWidth="4" /><circle cx="239" cy="194" r="15" fill="#f0c69f" />
        <path d="M278 194 C333 193 382 193 459 194" className={styles.diagramLine} stroke="#5b8f84" strokeWidth="20" />
        <g fill="#ded0a8" stroke="#b5a57b" strokeWidth="2">{[318,356,397,437].map((x) => <rect key={x} x={x - 13} y="174" width="27" height="40" rx="12" />)}</g>
        {axonMembraneLoci.map((x, index) => <circle key={x} cx={x} cy="194" r="8" fill={frame.stageIndex === 1 && index === activeLocus ? "#2876a8" : "#cbd9d7"} stroke="#fff5da" strokeWidth="3" />)}
        <circle cx="120" cy="157" r="7" fill={frame.stageIndex === 0 ? "#4d8c72" : "#cbd9d7"} stroke="#fff5da" strokeWidth="2" />
        <path d="M457 194 C481 194 488 190 505 190" className={styles.diagramLine} stroke="#c78c72" strokeWidth="32" />
        <g fill="#9a5a9b"><circle cx="476" cy="174" r="8"/><circle cx="488" cy="172" r="8"/><circle cx="479" cy="207" r="8"/></g>
        <path d="M536 105 C521 155 520 234 540 284" className={styles.diagramLine} stroke="#6d9c88" strokeWidth="24" />
        <path d="M505 108 L520 108 M505 150 L520 150 M505 194 L520 194 M505 236 L520 236 M505 280 L520 280" className={styles.diagramLine} stroke={frame.stageIndex === 3 ? "#c28b35" : "#a9bd80"} strokeWidth="8" />
        <path d="M493 110 L508 110 M493 152 L508 152 M493 196 L508 196 M493 238 L508 238 M493 282 L508 282" className={styles.diagramLine} stroke="#c4d29f" strokeWidth="5" />
        <defs><marker id="arrow-synapse" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#9a5a9b" /></marker></defs>
        {frame.stageIndex === 2 && <path d="M501 190 Q510 190 519 194" className={styles.diagramLine} stroke="#9a5a9b" strokeWidth="4" markerEnd="url(#arrow-synapse)" />}
        {showLabels && <g><text x="73" y="46">branched dendrites</text><text x="202" y="271">soma</text><text x="312" y="147">segmented axon</text><text x="446" y="242">vesicles</text><text x="501" y="326">chemical cleft</text><text x="548" y="89">receptors</text></g>}
      </svg>
    );
  }

  return <svg className={styles.illustration} viewBox="0 0 600 390" aria-hidden="true"><rect x="65" y="54" width="470" height="282" rx="135" fill="#e8efec" /><text x="180" y="200">Illustrative function model</text></svg>;
}

export function AnatomyFunctionExplorer({ systemId, initialStepId }: AnatomyFunctionExplorerProps) {
  const instanceId = `function-explorer-${useId()}`;
  const lesson = getAnatomyFunctionLesson(systemId);
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef(0);
  const progressRef = useRef(0);
  const [stageIndex, setStageIndex] = useState(() => getAnatomyFunctionStepIndex(systemId, initialStepId));
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showLabels, setShowLabels] = useState(true);
  const [showScene, setShowScene] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  const previousDeepLink = useRef({ systemId, initialStepId });
  const currentStep = lesson?.steps[stageIndex];
  const stepCount = lesson?.steps.length ?? 0;

  const handleSceneError = useCallback(() => {
    setSceneFailed(true);
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const systemChanged = previousDeepLink.current.systemId !== systemId;
    const stepChanged = previousDeepLink.current.initialStepId !== initialStepId;
    if ((!systemChanged && !stepChanged) || !lesson) return;
    previousDeepLink.current = { systemId, initialStepId };
    const nextIndex = getAnatomyFunctionStepIndex(systemId, initialStepId);
    stageRef.current = nextIndex;
    progressRef.current = 0;
    setStageIndex(nextIndex);
    setProgress(0);
    setPlaying(false);
    if (systemChanged) {
      setShowScene(false);
      setSceneFailed(false);
    }
  }, [systemId, initialStepId, lesson]);

  useEffect(() => {
    if (!playing || !lesson) return;
    const root = rootRef.current;
    const visualFigure = root?.querySelector("figure");
    const duration = 5200 / playbackSpeed;
    let startedAt = performance.now() - progressRef.current * duration;
    let animationFrame = 0;
    let stopped = false;
    const pause = () => setPlaying(false);
    const onVisibilityChange = () => { if (document.hidden) pause(); };
    const observer = visualFigure && typeof IntersectionObserver !== "undefined"
      ? new IntersectionObserver((entries) => {
          if (entries.some((entry) => !entry.isIntersecting)) pause();
        }, { threshold: 0.05 })
      : null;
    if (visualFigure) observer?.observe(visualFigure);
    window.addEventListener("blur", pause);
    document.addEventListener("visibilitychange", onVisibilityChange);

    const tick = (now: number) => {
      if (stopped) return;
      const nextProgress = Math.min((now - startedAt) / duration, 1);
      if (nextProgress >= 1) {
        const nextIndex = (stageRef.current + 1) % lesson.steps.length;
        stageRef.current = nextIndex;
        progressRef.current = 0;
        setStageIndex(nextIndex);
        setProgress(0);
        startedAt = now;
      } else {
        progressRef.current = nextProgress;
        setProgress(nextProgress);
      }
      animationFrame = window.requestAnimationFrame(tick);
    };
    animationFrame = window.requestAnimationFrame(tick);
    return () => {
      stopped = true;
      window.cancelAnimationFrame(animationFrame);
      observer?.disconnect();
      window.removeEventListener("blur", pause);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [playing, playbackSpeed, lesson]);

  const frame = useMemo(() => getAnatomyFunctionFrame(systemId, stageIndex, progress), [systemId, stageIndex, progress]);

  if (!lesson || !currentStep) {
    return <section className={styles.explorer} aria-label="Anatomy function lesson"><p>This function lesson is not available yet.</p></section>;
  }

  function chooseStage(nextIndex: number) {
    const safeIndex = Math.max(0, Math.min(stepCount - 1, nextIndex));
    stageRef.current = safeIndex;
    progressRef.current = 0;
    setStageIndex(safeIndex);
    setProgress(0);
    setPlaying(false);
  }

  const stepSources = lesson.sources.filter((source) => currentStep.sourceIds.includes(source.id));
  const lessonPanelId = `${instanceId}-lesson-panel`;

  return (
    <section ref={rootRef} className={styles.explorer} id={`function-${lesson.id}`} aria-labelledby={`${instanceId}-title`}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>FUNCTIONAL ANATOMY · ILLUSTRATIVE LEARNING MODEL</p>
        <h2 id={`${instanceId}-title`}>{lesson.title}</h2>
        <p className={styles.summary}>{lesson.summary}</p>
        <p className={styles.scopeNote}>Illustrative teaching model · not to scale</p>
      </header>

      <div className={styles.lessonGrid}>
        <figure className={styles.visualCard} aria-labelledby={`${instanceId}-visual-title`}>
          <div className={styles.visualHeader}>
            <h3 id={`${instanceId}-visual-title`}>{lesson.title}: function view</h3>
            <div className={styles.viewToggle} role="group" aria-label="Choose visual view">
              <button className={`${styles.viewButton} ${!showScene || sceneFailed ? styles.viewButtonActive : ""}`} type="button" aria-pressed={!showScene || sceneFailed} onClick={() => setShowScene(false)}>2D</button>
              <button className={`${styles.viewButton} ${showScene && !sceneFailed ? styles.viewButtonActive : ""}`} type="button" aria-pressed={showScene && !sceneFailed} onClick={() => { setSceneFailed(false); setShowScene(true); }}>3D</button>
            </div>
          </div>
          <div className={styles.visualTools}>
            <div className={styles.playback} role="group" aria-label="Lesson playback controls">
              <button className={styles.controlButton} type="button" onClick={() => chooseStage(stageIndex - 1)} aria-label="Previous step">← Previous</button>
              <button className={`${styles.controlButton} ${styles.controlButtonPrimary}`} type="button" onClick={() => setPlaying((value) => !value)} aria-pressed={playing}>
                {playing ? "Pause" : prefersReducedMotion ? "Play motion" : "Play"}
              </button>
              <button className={styles.controlButton} type="button" onClick={() => chooseStage(stageIndex + 1)} aria-label="Next step">Next →</button>
              <label className={styles.speedLabel} htmlFor={`${instanceId}-speed`}>Speed
                <select id={`${instanceId}-speed`} className={styles.speedSelect} value={playbackSpeed} onChange={(event) => setPlaybackSpeed(Number(event.currentTarget.value))}>
                  <option value={0.65}>0.65×</option><option value={1}>1×</option><option value={1.4}>1.4×</option>
                </select>
              </label>
            </div>
            {(!showScene || sceneFailed) && <label className={styles.checkboxLabel}><input type="checkbox" checked={showLabels} onChange={(event) => setShowLabels(event.currentTarget.checked)} />Show diagram labels</label>}
          </div>
          {showScene && !sceneFailed ? (
            <div className={styles.sceneFrame}>
              <SceneErrorBoundary key={systemId} onError={handleSceneError}>
                <FunctionSceneOnDemand
                  systemId={systemId}
                  stageIndex={stageIndex}
                  progress={progress}
                  onError={handleSceneError}
                />
              </SceneErrorBoundary>
            </div>
          ) : (
            <div className={styles.illustrationFrame}>
              <FunctionIllustration systemId={systemId} frame={frame} showLabels={showLabels} />
            </div>
          )}
          <ul className={styles.visuallyHidden} aria-label="Diagram structures">
            {STRUCTURE_LABELS[systemId].map((label) => <li key={label}>{label}</li>)}
          </ul>
          <figcaption className={styles.figureCaption}>
            <span>{observationForFrame(frame)}</span>
            {insetIdentification(systemId) && <span>{insetIdentification(systemId)}</span>}
            <a href={`#source-model-${systemId}`}>Inspect the source anatomy</a>
          </figcaption>
          {sceneFailed && <p className={styles.fallbackMessage} role="status">3D is unavailable here. The 2D illustration and lesson remain available.</p>}
          <ul className={styles.sceneLegend} aria-label="Color and structure key">
            {lesson.legend.map((entry) => <li key={entry.id}><span className={styles.legendSwatch} style={{ backgroundColor: entry.color }} aria-hidden="true" />{entry.label}</li>)}
          </ul>
        </figure>

        <section className={styles.lessonCard} id={lessonPanelId} aria-labelledby={`${instanceId}-step-title`}>
          <p className={styles.stageCounter} aria-live="polite" aria-atomic="true">STEP {String(stageIndex + 1).padStart(2, "0")} / {String(lesson.steps.length).padStart(2, "0")}</p>
          <h3 id={`${instanceId}-step-title`}>{currentStep.title}</h3>
          <p className={styles.description}>{currentStep.description}</p>
          <p className={styles.notice}><strong>What to notice:</strong> {currentStep.watchFor}</p>
          <p className={styles.stepCitations}><strong>Sources for this step:</strong>{stepSources.map((source, index) => <span key={source.id}>{index > 0 ? " · " : " "}<a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></span>)}</p>

          <fieldset className={styles.stepNav}>
            <legend>Choose a stage</legend>
            <ol className={styles.stepList}>
              {lesson.steps.map((step, index) => (
                <li key={step.id}>
                  <span className={styles.visuallyHidden} id={`function-${lesson.id}-${step.id}`} aria-hidden="true" />
                  <button
                    type="button"
                    id={`${instanceId}-step-${step.id}`}
                    className={`${styles.stepButton} ${index === stageIndex ? styles.stepButtonActive : ""}`}
                    aria-current={index === stageIndex ? "step" : undefined}
                    aria-controls={lessonPanelId}
                    onClick={() => chooseStage(index)}
                  >
                    <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <span>{step.title}</span>
                  </button>
                </li>
              ))}
            </ol>
          </fieldset>

          <div className={styles.quizCta}>
            <p><strong>Try a short recall challenge</strong>{lesson.quiz.title}</p>
            <a className={styles.quizLink} href={`/quizzes/${lesson.quiz.slug}/`}>Take the quiz <span aria-hidden="true">↗</span></a>
          </div>

          <details className={styles.sources}>
            <summary>Sources and model notes</summary>
            <p className={styles.modelScope}>{lesson.scopeNote}</p>
            <p className={styles.modelScope}>The functional view is an original teaching model, separate from the source anatomy model. <a href="https://typologyquiz.com/credits/#functional-anatomy">Model credits and license</a>.</p>
            <ul className={styles.sourceList}>
              {stepSources.map((source) => <li key={source.id}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}
              {lesson.sources.filter((source) => !currentStep.sourceIds.includes(source.id)).map((source) => (
                <li key={source.id}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>
              ))}
            </ul>
          </details>
        </section>
      </div>
    </section>
  );
}
