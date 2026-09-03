"use client";

// Shared renderer behind USMap, CanadaMap and WorldMap: one closed SVG path
// per region, filled by id.
//
// Everything here is additive on top of the original contract - a caller that
// passes only the original props gets exactly the original behaviour, a plain
// coloured-in map with no labels, no markers and no zoom.
//
// What the extras do:
//   showLabels + labelPoints   the region's name fades in where it was found,
//                              inside the shape when it fits and out in a
//                              gutter on a leader line when it does not
//   capitals (+ capitalIds)    a star at the capital's real position, with the
//                              city's name revealed alongside it once found
//   zoomable                   wheel / pinch / drag / double-tap / keyboard
//                              navigation, without which micro-states are
//                              unusable on a world map
//   hitPoints                  a minimum-size invisible target for regions
//                              drawn at a few pixels (Vatican, Monaco, Nauru)

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CapitalPoint, LabelPoint } from "@/lib/trivia/data/map-labels";

const FOUND_FILL = "var(--mark-teal)";
const MISSING_FILL = "var(--mark-coral)";
const IDLE_FILL = "var(--line)";
const TARGET_FILL = "var(--ink-mute)";
const EDGE = "var(--white)";

/** Label height as a fraction of the visible width - the number the label
 *  fit decisions in map-labels.ts were measured against. */
const LABEL_DIVISOR = 72;
/** Below this rendered width, full names stop fitting on any phone; the map
 *  drops to abbreviations rather than shipping a wall of overlapping text. */
const COMPACT_WIDTH_PX = 520;
const MIN_SCALE = 1;
const MAX_SCALE = 40;

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

function parseViewBox(vb: string): Box {
  const [x, y, w, h] = vb.trim().split(/[\s,]+/).map(Number);
  return { x, y, w, h };
}

const boxToString = (b: Box) => `${b.x} ${b.y} ${b.w} ${b.h}`;

/** Five-point star centred on (cx, cy). */
function starPath(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? r : r * 0.42;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`);
  }
  return `M${pts.join("L")}Z`;
}

/** Split a long parked label onto two lines at the most balanced word break. */
function splitLabel(name: string, maxChars: number): string[] {
  if (name.length <= maxChars) return [name];
  const words = name.split(" ");
  if (words.length < 2) return [name];
  let best: { lines: string[]; score: number } | null = null;
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(" ");
    const b = words.slice(i).join(" ");
    const score = Math.abs(a.length - b.length);
    // <= so a tie breaks towards the LATER split: "Prince Edward" / "Island"
    // rather than "Prince" / "Edward Island".
    if (!best || score <= best.score) best = { lines: [a, b], score };
  }
  return best!.lines;
}

export interface RegionMapProps {
  viewBox: string;
  paths: Readonly<Record<string, string>>;
  /** id -> display name, used for accessible labels. */
  names: Readonly<Record<string, string>>;
  found: ReadonlySet<string>;
  /** After give-up / time-up: paint the not-found regions coral. */
  revealMissing?: boolean;
  /** Choice mode: regions are clickable and keyboard-focusable. */
  interactive?: boolean;
  onRegionClick?: (id: string) => void;
  /** Region currently flashing after a wrong click. */
  wrongFlashId?: string | null;
  reducedMotion?: boolean;
  /** Accessible name for the whole graphic. */
  title: string;
  /**
   * Random-subset and letter quizzes: only these regions are in play. They
   * render darker as targets; the rest stay idle and never turn coral on
   * reveal (they were not part of the run).
   */
  activeIds?: ReadonlySet<string> | null;

  // --- optional, all defaulted so existing call sites are unchanged ---

  /** Reveal a region's name once it has been found. */
  showLabels?: boolean;
  /** Where each label goes. Required for showLabels to do anything. */
  labelPoints?: Readonly<Record<string, LabelPoint>>;
  /** Capital city markers, keyed by region id. */
  capitals?: Readonly<Record<string, CapitalPoint>>;
  /** Restrict capital markers to these regions (default: all of `capitals`). */
  capitalIds?: ReadonlySet<string> | null;
  /** Wheel / pinch / drag / keyboard navigation plus a reset control. */
  zoomable?: boolean;
  /**
   * Guaranteed click target for regions drawn at a few units across. An
   * invisible circle of constant on-screen size is placed here.
   */
  hitPoints?: Readonly<Record<string, { x: number; y: number }>>;
  /** Multiplier on the label font size, for callers that want it larger. */
  labelScale?: number;
}

export function RegionMap({
  viewBox,
  paths,
  names,
  found,
  revealMissing = false,
  interactive = false,
  onRegionClick,
  wrongFlashId = null,
  reducedMotion = false,
  title,
  activeIds = null,
  showLabels = false,
  labelPoints,
  capitals,
  capitalIds = null,
  zoomable = false,
  hitPoints,
  labelScale = 1,
}: RegionMapProps) {
  const base = useMemo(() => parseViewBox(viewBox), [viewBox]);
  const [view, setView] = useState<Box>(base);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [renderWidth, setRenderWidth] = useState(0);

  // A new map (or a new gutter) resets the camera. Adjusting state during
  // render is the documented way to react to a changed prop - an effect would
  // paint one frame with the old camera on the new map first.
  const [seenViewBox, setSeenViewBox] = useState(viewBox);
  if (seenViewBox !== viewBox) {
    setSeenViewBox(viewBox);
    setView(base);
  }

  useEffect(() => {
    const el = svgRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      if (w) setRenderWidth(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scale = base.w / view.w;
  const atBase = scale <= MIN_SCALE + 1e-6;

  const clamp = useCallback(
    (b: Box): Box => {
      const w = Math.min(base.w, Math.max(base.w / MAX_SCALE, b.w));
      const h = w * (base.h / base.w);
      return {
        w,
        h,
        x: Math.min(base.x + base.w - w, Math.max(base.x, b.x)),
        y: Math.min(base.y + base.h - h, Math.max(base.y, b.y)),
      };
    },
    [base]
  );

  /** Client coordinates -> user units in the current view. */
  const toUser = useCallback(
    (clientX: number, clientY: number): [number, number] => {
      const el = svgRef.current;
      if (!el) return [view.x + view.w / 2, view.y + view.h / 2];
      const r = el.getBoundingClientRect();
      const s = Math.min(r.width / view.w, r.height / view.h) || 1;
      const offX = (r.width - view.w * s) / 2;
      const offY = (r.height - view.h * s) / 2;
      return [view.x + (clientX - r.left - offX) / s, view.y + (clientY - r.top - offY) / s];
    },
    [view]
  );

  const zoomAbout = useCallback(
    (factor: number, ux: number, uy: number) => {
      setView((v) => {
        const w = v.w / factor;
        const h = v.h / factor;
        return clamp({ w, h, x: ux - (ux - v.x) * (w / v.w), y: uy - (uy - v.y) * (h / v.h) });
      });
    },
    [clamp]
  );

  const zoomCentre = useCallback(
    (factor: number) => zoomAbout(factor, view.x + view.w / 2, view.y + view.h / 2),
    [zoomAbout, view]
  );

  // Wheel has to be a native non-passive listener or preventDefault is ignored
  // and the page scrolls out from under the map.
  useEffect(() => {
    const el = svgRef.current;
    if (!el || !zoomable) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const [ux, uy] = toUser(e.clientX, e.clientY);
      zoomAbout(Math.exp(-e.deltaY * 0.0016), ux, uy);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomable, toUser, zoomAbout]);

  // --- pointer: drag to pan, two fingers to pinch ---
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const dragState = useRef<{ startView: Box; startClient: [number, number]; moved: number } | null>(null);
  const pinchState = useRef<{ dist: number; startView: Box } | null>(null);
  // Set while a drag is in flight so the pointerup does not also register as a
  // click on whichever region happened to be under the finger.
  const suppressClick = useRef(false);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (!zoomable) return;
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      suppressClick.current = false;
      if (pointers.current.size === 2) {
        const [a, b] = [...pointers.current.values()];
        pinchState.current = { dist: Math.hypot(a.x - b.x, a.y - b.y), startView: view };
        dragState.current = null;
      } else if (pointers.current.size === 1) {
        dragState.current = { startView: view, startClient: [e.clientX, e.clientY], moved: 0 };
      }
      (e.currentTarget as SVGSVGElement).setPointerCapture?.(e.pointerId);
    },
    [zoomable, view]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (!zoomable || !pointers.current.has(e.pointerId)) return;
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      const el = svgRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();

      if (pointers.current.size >= 2 && pinchState.current) {
        const [a, b] = [...pointers.current.values()];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        const factor = dist / (pinchState.current.dist || dist);
        if (Math.abs(factor - 1) > 0.01) {
          const [ux, uy] = toUser((a.x + b.x) / 2, (a.y + b.y) / 2);
          suppressClick.current = true;
          pinchState.current = { dist, startView: view };
          zoomAbout(factor, ux, uy);
        }
        return;
      }

      const d = dragState.current;
      if (!d) return;
      const dxPx = e.clientX - d.startClient[0];
      const dyPx = e.clientY - d.startClient[1];
      d.moved = Math.max(d.moved, Math.hypot(dxPx, dyPx));
      if (d.moved < 4) return;
      suppressClick.current = true;
      const s = r.width / d.startView.w || 1;
      setView(clamp({ ...d.startView, x: d.startView.x - dxPx / s, y: d.startView.y - dyPx / s }));
    },
    [zoomable, clamp, toUser, zoomAbout, view]
  );

  const endPointer = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinchState.current = null;
    if (pointers.current.size === 0) dragState.current = null;
  }, []);

  const onDoubleClick = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      if (!zoomable) return;
      const [ux, uy] = toUser(e.clientX, e.clientY);
      zoomAbout(e.shiftKey ? 1 / 2.2 : 2.2, ux, uy);
    },
    [zoomable, toUser, zoomAbout]
  );

  const onMapKeyDown = useCallback(
    (e: React.KeyboardEvent<SVGSVGElement>) => {
      if (!zoomable) return;
      const step = view.w * 0.14;
      const moves: Record<string, [number, number]> = {
        ArrowLeft: [-step, 0],
        ArrowRight: [step, 0],
        ArrowUp: [0, -step],
        ArrowDown: [0, step],
      };
      if (moves[e.key]) {
        e.preventDefault();
        const [dx, dy] = moves[e.key];
        setView((v) => clamp({ ...v, x: v.x + dx, y: v.y + dy }));
        return;
      }
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        zoomCentre(1.5);
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        zoomCentre(1 / 1.5);
      } else if (e.key === "0") {
        e.preventDefault();
        setView(base);
      }
    },
    [zoomable, view.w, clamp, zoomCentre, base]
  );

  const handleRegionKey = useCallback(
    (e: React.KeyboardEvent<SVGPathElement>, id: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onRegionClick?.(id);
      }
    },
    [onRegionClick]
  );

  const handleRegionClick = useCallback(
    (id: string) => {
      if (suppressClick.current) {
        suppressClick.current = false;
        return;
      }
      onRegionClick?.(id);
    },
    [onRegionClick]
  );

  // --- sizing that stays constant on screen at every zoom level ---
  const compact = renderWidth > 0 && renderWidth < COMPACT_WIDTH_PX;
  const fontUnits = (view.w / LABEL_DIVISOR) * labelScale;
  const capitalStar = view.w / 190;
  const hitRadius = view.w / 95;
  const leaderWidth = view.w / 1400;

  const labelLayer: React.ReactNode[] = [];
  const capitalLayer: React.ReactNode[] = [];
  // Micro-region targets overlap each other at low zoom (San Marino sits on
  // top of Italy, Vatican City on top of San Marino). Collected with the
  // region's size so the SMALLEST draws last and therefore wins the click -
  // the big neighbour is always reachable by its own shape.
  const hitEntries: { size: number; node: React.ReactNode }[] = [];

  const capitalSet = capitals ? capitalIds ?? new Set(Object.keys(capitals)) : null;

  // A label's rough footprint, centred on (x, y). The text is not measured - a
  // per-character advance is close enough to keep two names off each other,
  // and it costs no layout pass.
  const boxOf = (text: string, x: number, y: number, size: number, upper: boolean, lines = 1) => ({
    x,
    y,
    w:
      (upper ? 0.68 : 0.53) *
        size *
        (lines > 1 ? Math.max(...text.split("\n").map((l) => l.length)) : text.length) +
      size * 0.4,
    h: size * (lines > 1 ? 2.2 : 1.15),
  });
  type Placed = { x: number; y: number; w: number; h: number };
  const taken: Placed[] = [];
  /** Overlaps something already placed, or hangs off the edge of the map. */
  const blocked = (b: Placed) =>
    b.x - b.w / 2 < base.x ||
    b.x + b.w / 2 > base.x + base.w ||
    b.y - b.h / 2 < base.y ||
    b.y + b.h / 2 > base.y + base.h ||
    taken.some((r) => Math.abs(r.x - b.x) * 2 < r.w + b.w && Math.abs(r.y - b.y) * 2 < r.h + b.h);

  // Region names sit inside their own shape and cannot move, so they are
  // reserved first; the city names then take the best free slot around their
  // star and give up rather than print on top of something else. Iteration is
  // over a fixed key order, so the same map always resolves the same way.
  const ids = Object.keys(paths);

  for (const id of ids) {
    const isFound = found.has(id);
    const inPlay = activeIds === null || activeIds.has(id);

    // Minimum hit target for regions a few units across.
    const hp = hitPoints?.[id];
    if (hp && interactive && !isFound && inPlay) {
      hitEntries.push({
        size: labelPoints?.[id]?.r ?? 0,
        node: (
          <circle
            key={`hit-${id}`}
            cx={hp.x}
            cy={hp.y}
            r={hitRadius}
            fill="transparent"
            className="tq-hit"
            role="button"
            aria-label={names[id]}
            tabIndex={0}
            onClick={() => handleRegionClick(id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onRegionClick?.(id);
              }
            }}
          />
        ),
      });
    }

    // Capital star: shown for every region in play, so the map says where the
    // capitals are without saying which is which.
    const cap = capitals?.[id];
    if (cap && capitalSet?.has(id) && inPlay) {
      capitalLayer.push(
        <path
          key={`cap-${id}`}
          d={starPath(cap.x, cap.y, capitalStar)}
          className={isFound ? "tq-star tq-star-found" : "tq-star"}
        />
      );
    }

    if (!showLabels || !isFound) continue;
    const lp = labelPoints?.[id];
    if (!lp) continue;

    const full = names[id] ?? id;
    // With capitals in play the city is the answer, so the region drops to its
    // compact form and the city name gets the room.
    const wantAbbr = compact || Boolean(capitals);

    if (lp.fit === "out" && lp.out) {
      const parked = capitals && cap ? cap.name : full;
      const lines = splitLabel(parked, 14);
      const halfW = boxOf(lines[0], 0, 0, fontUnits, false).w / 2;
      taken.push(boxOf(lines.join("\n"), lp.out.x + halfW, lp.out.y, fontUnits, false, lines.length));
      labelLayer.push(
        <g key={`lbl-${id}`} className="tq-label" style={{ transformOrigin: `${lp.out.x}px ${lp.out.y}px` }}>
          <path
            d={`M${lp.x},${lp.y}L${lp.out.x - fontUnits * 0.45},${lp.out.y}`}
            className="tq-leader"
            strokeWidth={leaderWidth}
          />
          <circle cx={lp.x} cy={lp.y} r={fontUnits * 0.16} className="tq-leader-dot" />
          <text
            x={lp.out.x}
            y={lp.out.y}
            className="tq-text"
            textAnchor="start"
            dominantBaseline="middle"
            fontSize={fontUnits}
            strokeWidth={fontUnits * 0.28}
          >
            {lines.length === 1 ? (
              lines[0]
            ) : (
              <>
                <tspan x={lp.out.x} dy={-fontUnits * 0.55}>
                  {lines[0]}
                </tspan>
                <tspan x={lp.out.x} dy={fontUnits * 1.1}>
                  {lines[1]}
                </tspan>
              </>
            )}
          </text>
        </g>
      );
    } else if (lp.fit === "auto") {
      // World map: the decision is made at the CURRENT zoom, because the label
      // shrinks in user units as you zoom in. A country too small to hold its
      // name at world scale grows into it a couple of gestures later; until
      // then the name floats clear of the coastline on a hairline leader.
      const box = boxOf(full, lp.x, lp.y, fontUnits, false);
      const insideFits = box.w / 2 <= (lp.r ?? 0) * 0.95 && fontUnits * 0.62 <= (lp.r ?? 0);
      let place: Placed | null = null;
      if (insideFits && !blocked(box)) place = box;
      if (!place) {
        const d = fontUnits * 1.35;
        const candidates: [number, number][] = [
          [0, -d],
          [0, d],
          [box.w / 2 + fontUnits * 0.7, 0],
          [-(box.w / 2 + fontUnits * 0.7), 0],
          [0, -d * 2],
          [0, d * 2],
        ];
        for (const [dx, dy] of candidates) {
          const c = { ...box, x: lp.x + dx, y: lp.y + dy };
          if (!blocked(c)) {
            place = c;
            break;
          }
        }
      }
      if (!place) continue; // crowded out at this zoom; zooming in makes room
      taken.push(place);
      const offset = place.x !== lp.x || place.y !== lp.y;
      labelLayer.push(
        <g key={`lbl-${id}`} className="tq-label" style={{ transformOrigin: `${lp.x}px ${lp.y}px` }}>
          {offset && (
            <>
              <path d={`M${lp.x},${lp.y}L${place.x},${place.y}`} className="tq-leader" strokeWidth={leaderWidth} />
              <circle cx={lp.x} cy={lp.y} r={fontUnits * 0.13} className="tq-leader-dot" />
            </>
          )}
          <text
            x={place.x}
            y={place.y}
            className="tq-text"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontUnits}
            strokeWidth={fontUnits * 0.28}
          >
            {full}
          </text>
        </g>
      );
    } else {
      const twoLine = lp.fit === "name2" && !wantAbbr;
      const upper = wantAbbr || lp.fit === "abbr";
      const body = upper ? id : full;
      const lines = twoLine ? splitLabel(full, 0) : [body];
      taken.push(boxOf(lines.join("\n"), lp.x, lp.y, fontUnits, upper, lines.length));
      labelLayer.push(
        <g key={`lbl-${id}`} className="tq-label" style={{ transformOrigin: `${lp.x}px ${lp.y}px` }}>
          <text
            x={lp.x}
            y={lp.y}
            className="tq-text"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontUnits}
            strokeWidth={fontUnits * 0.28}
          >
            {lines.length === 1 ? (
              lines[0]
            ) : (
              <>
                <tspan x={lp.x} dy={-fontUnits * 0.55}>
                  {lines[0]}
                </tspan>
                <tspan x={lp.x} dy={fontUnits * 1.1}>
                  {lines[1]}
                </tspan>
              </>
            )}
          </text>
        </g>
      );
    }
  }

  // Second pass: the city names. They go on after every region name is placed,
  // try four slots around their star, and stay hidden rather than print over a
  // neighbour - the star still marks the spot either way.
  if (capitals && showLabels) {
    const citySize = fontUnits * 0.86;
    for (const id of ids) {
      if (!found.has(id)) continue;
      const cap = capitals[id];
      const lp = labelPoints?.[id];
      if (!cap || !capitalSet?.has(id)) continue;
      if (lp?.fit === "out") continue; // already parked in the gutter
      const box = boxOf(cap.name, cap.x, cap.y, citySize, false);
      const gap = capitalStar * 2.1;
      let place: Placed | null = null;
      const candidates: [number, number][] = [
        [0, gap + citySize * 0.5],
        [0, -(gap + citySize * 0.5)],
        [box.w / 2 + gap, 0],
        [-(box.w / 2 + gap), 0],
        [0, gap * 2 + citySize],
      ];
      for (const [dx, dy] of candidates) {
        const c = { ...box, x: cap.x + dx, y: cap.y + dy };
        if (!blocked(c)) {
          place = c;
          break;
        }
      }
      if (!place) continue;
      taken.push(place);
      labelLayer.push(
        <g key={`city-${id}`} className="tq-label" style={{ transformOrigin: `${cap.x}px ${cap.y}px` }}>
          <text
            x={place.x}
            y={place.y}
            className="tq-text tq-city"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={citySize}
            strokeWidth={citySize * 0.28}
          >
            {cap.name}
          </text>
        </g>
      );
    }
  }

  const zoomPct = Math.round(scale * 100);

  return (
    <div style={{ position: "relative" }}>
      <svg
        ref={svgRef}
        viewBox={boxToString(view)}
        role={interactive ? "group" : "img"}
        aria-label={title}
        tabIndex={zoomable ? 0 : undefined}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        onDoubleClick={onDoubleClick}
        onKeyDown={onMapKeyDown}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          touchAction: zoomable ? "none" : undefined,
          cursor: zoomable ? "grab" : undefined,
          outlineOffset: 2,
        }}
      >
        <style>{`
          .tq-region {
            transition: ${reducedMotion ? "none" : "fill .25s ease, stroke .12s ease"};
            outline: none;
          }
          .tq-region.tq-clickable { cursor: pointer; }
          /* Idle regions are a pale grey, so a brightness shift is invisible on
             them. An outline reads on every fill state instead. */
          .tq-region.tq-clickable:hover { stroke: var(--ink); stroke-width: 2; }
          .tq-region.tq-clickable:active { stroke: var(--ink); stroke-width: 3; }
          .tq-region:focus-visible { stroke: var(--mark-blue); stroke-width: 3.5; }
          .tq-hit { cursor: pointer; outline: none; }
          .tq-hit:focus-visible {
            stroke: var(--mark-blue);
            stroke-width: 3;
            vector-effect: non-scaling-stroke;
          }
          .tq-shake { ${reducedMotion ? "" : "animation: tq-shake .34s cubic-bezier(.36,.07,.19,.97) both;"} }
          @keyframes tq-shake {
            10%, 90% { transform: translateX(-.35%); }
            30%, 70% { transform: translateX(.7%); }
            50% { transform: translateX(-.7%); }
          }
          .tq-label {
            pointer-events: none;
            user-select: none;
            ${reducedMotion ? "" : "animation: tq-reveal .34s cubic-bezier(.2,.7,.3,1) both;"}
          }
          @keyframes tq-reveal {
            from { opacity: 0; transform: scale(.8); }
            to { opacity: 1; transform: none; }
          }
          .tq-text {
            fill: var(--ink);
            stroke: var(--white);
            paint-order: stroke fill;
            stroke-linejoin: round;
            font-family: var(--font-sans, system-ui, sans-serif);
            font-weight: 650;
            letter-spacing: .01em;
          }
          .tq-city { font-weight: 550; font-style: italic; }
          .tq-leader { fill: none; stroke: var(--ink-mute); vector-effect: non-scaling-stroke; }
          .tq-leader-dot { fill: var(--ink-mute); }
          .tq-capital { pointer-events: none; }
          .tq-star {
            fill: var(--white);
            stroke: var(--ink);
            stroke-width: .9;
            vector-effect: non-scaling-stroke;
            stroke-linejoin: round;
            transition: ${reducedMotion ? "none" : "fill .25s ease"};
          }
          .tq-star-found { fill: var(--mark-pink); }
        `}</style>

        {Object.entries(paths).map(([id, d]) => {
          const isFound = found.has(id);
          const isWrongFlash = wrongFlashId === id;
          const inPlay = activeIds === null || activeIds.has(id);
          let fill = IDLE_FILL;
          if (isFound) fill = FOUND_FILL;
          else if (isWrongFlash) fill = MISSING_FILL;
          else if (revealMissing && inPlay) fill = MISSING_FILL;
          else if (inPlay && activeIds !== null) fill = TARGET_FILL;
          const clickable = interactive && !isFound && inPlay;
          return (
            <path
              key={id}
              d={d}
              data-state={id}
              fill={fill}
              stroke={EDGE}
              strokeWidth={1}
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              className={`tq-region${clickable ? " tq-clickable" : ""}${isWrongFlash ? " tq-shake" : ""}`}
              role={interactive ? "button" : undefined}
              aria-label={interactive ? names[id] : undefined}
              aria-disabled={interactive && isFound ? true : undefined}
              tabIndex={clickable ? 0 : undefined}
              onClick={clickable ? () => handleRegionClick(id) : undefined}
              onKeyDown={clickable ? (e) => handleRegionKey(e, id) : undefined}
            />
          );
        })}

        {hitEntries.sort((a, b) => b.size - a.size).map((e) => e.node)}
        {capitalLayer}
        {labelLayer}
      </svg>

      {zoomable && (
        <div
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <ZoomButton label="Zoom in" onClick={() => zoomCentre(1.6)} disabled={scale >= MAX_SCALE - 1e-6}>
            +
          </ZoomButton>
          <ZoomButton label="Zoom out" onClick={() => zoomCentre(1 / 1.6)} disabled={atBase}>
            &minus;
          </ZoomButton>
          <ZoomButton label="Reset the map" onClick={() => setView(base)} disabled={atBase}>
            <span style={{ fontSize: "0.62rem", fontWeight: 600 }}>{atBase ? "1x" : `${zoomPct}%`}</span>
          </ZoomButton>
        </div>
      )}
    </div>
  );
}

function ZoomButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 30,
        height: 30,
        display: "grid",
        placeItems: "center",
        border: "1px solid var(--line)",
        borderRadius: 8,
        background: "var(--white)",
        color: "var(--ink)",
        font: "inherit",
        fontSize: "1rem",
        lineHeight: 1,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.4 : 1,
        boxShadow: "0 1px 2px rgba(0,0,0,.08)",
      }}
    >
      {children}
    </button>
  );
}
