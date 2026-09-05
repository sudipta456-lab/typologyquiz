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
//                              inside the shape when it fits, on a visible
//                              leader line beside it when it nearly does, and
//                              as a numbered marker plus a callout row under
//                              the map when neither is possible
//   capitals (+ capitalIds)    a hint dot at every capital while you play, a
//                              filled pin with the city's name once found
//   revealAll                  the study map: every region in play carries its
//                              name (and its capital's), found or not
//   tooltips                   hover, tap or focus a region to read its name
//                              and capital in a small floating tip
//   pulse                      flash one region, so a chip in the list below
//                              can point at its place on the map; a region
//                              too small to see is zoomed to first
//   zoomable                   wheel / pinch / drag / double-tap / keyboard
//                              navigation, without which micro-states are
//                              unusable on a world map
//   hitPoints                  a finger-sized invisible target for regions
//                              drawn at a few pixels (Vatican, Rhode Island)
//
// Three rules the label layer never breaks:
//   1. A label is never ambiguous. It sits inside its own shape, or it hangs
//      off a leader line thick enough to see at every zoom, ending in a dot
//      on the region. Nothing floats free over a neighbour.
//   2. Nothing in play is culled on the study map or the reveal. A name that
//      finds no room near its region becomes a numbered marker and a row in
//      the callout list under the map, which is HTML and therefore readable
//      at any width.
//   3. No label text is drawn under MIN_LABEL_PX on screen. Below that the
//      whole layer stands down in favour of the tooltip, the chips and the
//      zoom, and a one-line hint says so.

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
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
/** The readable floor: label text under this many CSS pixels is not drawn. */
const MIN_LABEL_PX = 9;
/** Finger target radius for tiny regions, CSS px, constant at every zoom. */
const HIT_RADIUS_PX = 12;
/** A pulsed region narrower than this on screen is zoomed to before it flashes. */
const PULSE_MIN_PX = 24;
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

/** Split a long label onto two lines at the most balanced word break. */
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

/** A pulse request: the same id can be pulsed twice by bumping `n`. */
export interface RegionPulse {
  id: string;
  n: number;
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
  /**
   * How much the labels may GROW on screen as the player zooms in, as a
   * multiple of their base size. 1 (the default) keeps them a constant size
   * on screen at every zoom, which is what a world map wants: zooming makes
   * room for more names rather than bigger ones. A single-country map read
   * on a phone wants the opposite - zoom in to make the names readable - so
   * it passes 2 or so; past that cap the labels hold steady and zooming
   * makes room again.
   */
  labelGrow?: number;
  /**
   * Label EVERY region in play, found or not, and pin every capital with its
   * name. The reveal after a run and the study map before one. Never set this
   * while a run is live in click mode: it is the answer key.
   */
  revealAll?: boolean;
  /**
   * Hover (mouse), tap (touch) or focus (keyboard) a region to read its name
   * and, where capitals are drawn, its capital. Regions become focusable.
   */
  tooltips?: boolean;
  /** Flash this region briefly. Bump `n` to pulse the same id again. */
  pulse?: RegionPulse | null;
  /**
   * One short clause appended to a region's tooltip and accessible name, for
   * a drawing that needs a word of explanation ("Kosovo is drawn inside it").
   */
  notes?: Readonly<Record<string, string>>;
}

interface Tip {
  id: string;
  /** Pixel position inside the wrapper. */
  x: number;
  y: number;
}

type Placed = { x: number; y: number; w: number; h: number };

interface TipHandlers {
  onPointerEnter?: (e: React.PointerEvent<SVGElement>) => void;
  onPointerMove?: (e: React.PointerEvent<SVGElement>) => void;
  onPointerLeave?: (e: React.PointerEvent<SVGElement>) => void;
  onClick?: (e: React.MouseEvent<SVGElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

/** A name that found no room on the map: a numbered marker and a list row. */
interface Callout {
  id: string;
  text: string;
  /** Where the marker points: the region's anchor, or its capital's pin. */
  x: number;
  y: number;
  missed: boolean;
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
  labelGrow = 1,
  revealAll = false,
  tooltips = false,
  pulse = null,
  notes,
}: RegionMapProps) {
  const base = useMemo(() => parseViewBox(viewBox), [viewBox]);
  const [view, setView] = useState<Box>(base);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [renderWidth, setRenderWidth] = useState(0);
  const [tip, setTip] = useState<Tip | null>(null);
  // Moving the mouse across a state fires pointermove ~100 times a second.
  // Routing each one through setTip re-rendered every path and label on the
  // map per pixel (a full React commit per mouse move, confirmed by a
  // MutationObserver; the per-move cost itself is small, but the commits are
  // pure waste). So: React owns WHICH region the
  // tip describes (enter, click, focus, leave), and the pointer owns WHERE it
  // sits, written straight onto the node. The clamp and flip below mirror
  // tipLeft/tipBelow exactly so a state-driven render and a move land the tip
  // in the same place.
  const tipRef = useRef<HTMLDivElement | null>(null);
  const tipIdRef = useRef<string | null>(null);
  useLayoutEffect(() => {
    tipIdRef.current = tip?.id ?? null;
  }, [tip]);

  // A new map (or a new gutter) resets the camera. Adjusting state during
  // render is the documented way to react to a changed prop - an effect would
  // paint one frame with the old camera on the new map first.
  const [seenViewBox, setSeenViewBox] = useState(viewBox);
  if (seenViewBox !== viewBox) {
    setSeenViewBox(viewBox);
    setView(base);
  }

  // Tooltips off (a run starting) takes any open tip with it.
  const [seenTooltips, setSeenTooltips] = useState(tooltips);
  if (seenTooltips !== tooltips) {
    setSeenTooltips(tooltips);
    if (!tooltips) setTip(null);
  }

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    // Seed from a synchronous measure: the observer's first notification
    // waits for a rendering frame, which a background tab may not get.
    const w0 = el.getBoundingClientRect().width;
    if (w0) setRenderWidth(w0);
    if (typeof ResizeObserver === "undefined") return;
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

  /** User units -> pixels inside the wrapper (the inverse of toUser). */
  const toLocal = useCallback(
    (ux: number, uy: number): [number, number] => {
      const el = svgRef.current;
      if (!el) return [0, 0];
      const r = el.getBoundingClientRect();
      const s = Math.min(r.width / view.w, r.height / view.h) || 1;
      const offX = (r.width - view.w * s) / 2;
      const offY = (r.height - view.h * s) / 2;
      return [offX + (ux - view.x) * s, offY + (uy - view.y) * s];
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

  // A short camera move (chip -> tiny region). One animation at a time; a new
  // one cancels the last. Instant under reduced motion.
  const animRef = useRef<number | null>(null);
  const animateTo = useCallback(
    (target: Box): Promise<void> =>
      new Promise((resolve) => {
        if (animRef.current !== null) cancelAnimationFrame(animRef.current);
        if (reducedMotion || typeof requestAnimationFrame === "undefined") {
          setView(target);
          resolve();
          return;
        }
        const from = view;
        const t0 = performance.now();
        const dur = 320;
        let done = false;
        const finish = () => {
          if (done) return;
          done = true;
          if (animRef.current !== null) cancelAnimationFrame(animRef.current);
          animRef.current = null;
          window.clearTimeout(guard);
          setView(target);
          resolve();
        };
        // A hidden or throttled tab never gets a frame; the camera still has
        // to arrive, so a timer lands it if the frames do not.
        const guard = window.setTimeout(finish, dur + 80);
        const step = (now: number) => {
          if (done) return;
          const t = Math.min(1, (now - t0) / dur);
          if (t >= 1) {
            finish();
            return;
          }
          const e = 1 - Math.pow(1 - t, 3);
          setView({
            x: from.x + (target.x - from.x) * e,
            y: from.y + (target.y - from.y) * e,
            w: from.w + (target.w - from.w) * e,
            h: from.h + (target.h - from.h) * e,
          });
          animRef.current = requestAnimationFrame(step);
        };
        animRef.current = requestAnimationFrame(step);
      }),
    [view, reducedMotion]
  );
  useEffect(() => {
    return () => {
      if (animRef.current !== null) cancelAnimationFrame(animRef.current);
    };
  }, []);

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
      // A tap on open water (the svg itself, not a region) closes the tip.
      if (e.target === e.currentTarget) setTip(null);
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
          setTip(null);
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
      setTip(null);
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
      if (e.key === "Escape" && tip !== null) {
        setTip(null);
        return;
      }
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
    [zoomable, view.w, clamp, zoomCentre, base, tip]
  );

  const handleRegionKey = useCallback(
    (e: React.KeyboardEvent<SVGElement>, id: string) => {
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
  // User units per CSS pixel at the current camera. Until the first measure
  // (or in a hidden tab) assume an 800px map, which is what the fit decisions
  // in map-labels.ts were looked at on.
  const pxUnit = view.w / (renderWidth > 0 ? renderWidth : 800);
  // "Compact" is judged on the EFFECTIVE width - the map's full size at the
  // current zoom - so a phone that pinches in past the threshold gets the full
  // names it now has room for.
  const compact = renderWidth > 0 && renderWidth * scale < COMPACT_WIDTH_PX;
  // Labels are sized in user units from the VISIBLE width, so they hold a
  // constant on-screen size as the camera moves; `grow` lets them scale up
  // with the zoom until the cap. Note that below the cap this leaves them a
  // constant size relative to the MAP, so the fit decisions measured at base
  // zoom still hold. Pins grow more gently than the type they sit beside.
  const grow = Math.max(1, Math.min(scale, labelGrow));
  const fontUnits = (view.w / LABEL_DIVISOR) * labelScale * grow;
  const fontPx = fontUnits / pxUnit;
  // The readable floor. On a 375px phone at 1x the type would be 5px, which
  // is noise; the layer stands down until the zoom brings it to size.
  const labelsReadable = renderWidth === 0 || fontPx >= MIN_LABEL_PX;
  const pinRadius = (view.w / 150) * Math.sqrt(grow);
  const hintRadius = (view.w / 320) * Math.sqrt(grow);
  const hitRadius = HIT_RADIUS_PX * pxUnit;
  // Leader lines and their dots are sized in user units to a fixed on-screen
  // size, ink coloured, so they read at every zoom. (They used to be a
  // non-scaling 0.35px hairline, which put Latvia's name over Estonia with
  // nothing visible joining it to Latvia.)
  const leaderWidth = 1.25 * pxUnit;
  const dotRadius = 2.4 * pxUnit;
  const markerRadius = 7 * pxUnit;
  const markerFont = 9 * pxUnit;

  const capitalSet = useMemo(
    () => (capitals ? capitalIds ?? new Set(Object.keys(capitals)) : null),
    [capitals, capitalIds]
  );

  /** What the tooltip and the accessible name say for a region. */
  const describe = useCallback(
    (id: string): string => {
      const name = names[id] ?? id;
      const cap = capitals?.[id];
      const core = cap && capitalSet?.has(id) ? `${name}, capital ${cap.name}` : name;
      const note = notes?.[id];
      return note !== undefined ? `${core} (${note})` : core;
    },
    [names, capitals, capitalSet, notes]
  );

  /** Where a keyboard-focused region's tip should point. */
  const anchorOf = useCallback(
    (id: string): [number, number] => {
      const cap = capitals?.[id];
      if (cap && capitalSet?.has(id)) return [cap.x, cap.y];
      const hp = hitPoints?.[id];
      if (hp) return [hp.x, hp.y];
      const lp = labelPoints?.[id];
      if (lp) return [lp.x, lp.y];
      return [view.x + view.w / 2, view.y + view.h / 2];
    },
    [capitals, capitalSet, hitPoints, labelPoints, view]
  );

  const tipFromPointer = useCallback((id: string, e: React.PointerEvent | React.MouseEvent) => {
    const el = svgRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setTip({ id, x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  /** Follow the pointer without a render. Same clamp and flip as tipLeft/tipBelow. */
  const moveTip = useCallback(
    (e: React.PointerEvent) => {
      const svg = svgRef.current;
      const node = tipRef.current;
      if (!svg || !node) return;
      const r = svg.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const left = Math.min(Math.max(x, 72), Math.max(72, renderWidth - 72));
      const below = y < 44;
      node.style.left = `${left}px`;
      node.style.top = `${y}px`;
      node.style.transform = below ? "translate(-50%, 14px)" : "translate(-50%, calc(-100% - 12px))";
    },
    [renderWidth]
  );

  /** Handlers shared by region paths and micro-state hit circles. */
  const tipHandlers = useCallback(
    (id: string): TipHandlers => {
      if (!tooltips) return {};
      return {
        onPointerEnter: (e: React.PointerEvent<SVGElement>) => {
          // Touch has no hover: a finger lifting off fires leave straight
          // after enter, so touch tips are placed on tap (click) instead.
          if (e.pointerType === "touch") return;
          tipFromPointer(id, e);
        },
        onPointerMove: (e: React.PointerEvent<SVGElement>) => {
          if (e.pointerType === "touch") return;
          if (tipIdRef.current === id) moveTip(e);
          else tipFromPointer(id, e);
        },
        onPointerLeave: (e: React.PointerEvent<SVGElement>) => {
          if (e.pointerType === "touch") return;
          setTip((t) => (t?.id === id ? null : t));
        },
        onClick: (e: React.MouseEvent<SVGElement>) => {
          if (suppressClick.current) {
            suppressClick.current = false;
            return;
          }
          setTip((t) => {
            if (t?.id === id) return null;
            const el = svgRef.current;
            if (!el) return t;
            const r = el.getBoundingClientRect();
            return { id, x: e.clientX - r.left, y: e.clientY - r.top };
          });
        },
        onFocus: () => {
          const [ux, uy] = anchorOf(id);
          const [x, y] = toLocal(ux, uy);
          setTip({ id, x, y });
        },
        onBlur: () => setTip((t) => (t?.id === id ? null : t)),
      };
    },
    [tooltips, tipFromPointer, anchorOf, toLocal, moveTip]
  );

  // Finger targets overlap each other on a phone (Rhode Island's covers the
  // middle of Connecticut and Massachusetts at 375px). A tap that lands in
  // one goes to whichever target CENTRE is nearest, among the targets that
  // are live in the same way (clickable during a run, tippable after), so
  // draw order never decides between neighbours.
  const liveHit = useCallback(
    (id: string): boolean => {
      const inPlay = activeIds === null || activeIds.has(id);
      if (!inPlay) return false;
      return (interactive && !found.has(id)) || tooltips;
    },
    [activeIds, interactive, found, tooltips]
  );
  const resolveHit = useCallback(
    (id: string, clientX: number, clientY: number): string => {
      if (!hitPoints) return id;
      const [ux, uy] = toUser(clientX, clientY);
      let bestId = id;
      let bestD = Infinity;
      for (const [hid, hp] of Object.entries(hitPoints)) {
        if (!liveHit(hid)) continue;
        const d = Math.hypot(hp.x - ux, hp.y - uy);
        if (d <= hitRadius && d < bestD) {
          bestD = d;
          bestId = hid;
        }
      }
      return bestId;
    },
    [hitPoints, toUser, liveHit, hitRadius]
  );

  // --- pulse: a chip pointing at its region. If the region is too small to
  // see at the current zoom, the camera goes there first, then it flashes.
  const [activePulse, setActivePulse] = useState<RegionPulse | null>(null);
  const pulseSeq = useRef(0);
  const zoomToRegion = useCallback(
    (id: string): Promise<boolean> => {
      const svg = svgRef.current;
      const path = svg?.querySelector<SVGPathElement>(`path[data-state="${CSS.escape(id)}"]`);
      if (!svg || !path || !zoomable) return Promise.resolve(false);
      const bb = path.getBBox();
      const s = Math.min(svg.getBoundingClientRect().width / view.w, 1e9) || 1;
      if (bb.width * s >= PULSE_MIN_PX && bb.height * s >= PULSE_MIN_PX) return Promise.resolve(false);
      // Fit with padding: the region ends up a quarter of the frame across.
      const aspect = base.w / base.h;
      const w = Math.max(base.w / MAX_SCALE, Math.max(bb.width, bb.height * aspect) * 4);
      const h = w / aspect;
      const target = clamp({ w, h, x: bb.x + bb.width / 2 - w / 2, y: bb.y + bb.height / 2 - h / 2 });
      return animateTo(target).then(() => true);
    },
    [zoomable, view.w, base, clamp, animateTo]
  );
  // The parent clearing its pulse clears ours in the same render (the adjust-
  // during-render pattern used for viewBox above); a NEW pulse is applied
  // once the camera has arrived, which is async by nature.
  const [seenPulse, setSeenPulse] = useState(pulse);
  if (seenPulse !== pulse) {
    setSeenPulse(pulse);
    if (pulse === null) setActivePulse(null);
  }
  useEffect(() => {
    if (pulse === null) return;
    const seq = ++pulseSeq.current;
    void zoomToRegion(pulse.id).then(() => {
      if (pulseSeq.current === seq) setActivePulse(pulse);
    });
    // Only a NEW pulse should move the camera; zoomToRegion changes with the
    // view it moves, and re-running on that would loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pulse]);

  // A callout row hovered or tapped flashes its region, same as a chip.
  const [rowPulse, setRowPulse] = useState<RegionPulse | null>(null);
  const rowPulseTimer = useRef<number | null>(null);
  const rowPulseN = useRef(0);
  const pulseFromRow = useCallback(
    (id: string, zoom: boolean) => {
      const fire = () => {
        rowPulseN.current += 1;
        setRowPulse({ id, n: rowPulseN.current });
        if (rowPulseTimer.current !== null) window.clearTimeout(rowPulseTimer.current);
        rowPulseTimer.current = window.setTimeout(() => {
          rowPulseTimer.current = null;
          setRowPulse(null);
        }, 950);
      };
      if (zoom) void zoomToRegion(id).then(fire);
      else fire();
    },
    [zoomToRegion]
  );
  useEffect(() => {
    return () => {
      if (rowPulseTimer.current !== null) window.clearTimeout(rowPulseTimer.current);
    };
  }, []);
  const pulseNow = activePulse ?? rowPulse;

  const labelLayer: React.ReactNode[] = [];
  const capitalLayer: React.ReactNode[] = [];
  // Micro-region targets overlap each other at low zoom (San Marino sits on
  // top of Italy, Vatican City on top of San Marino). Collected with the
  // region's size so the SMALLEST draws last; the click itself is resolved by
  // nearest centre in resolveHit, so this only settles hover and focus order.
  const hitEntries: { size: number; node: React.ReactNode }[] = [];
  const callouts: Callout[] = [];

  // A label's footprint, centred on (x, y). The text is not measured - a
  // per-character advance keeps two names off each other with no layout
  // pass. The advances are the WIDEST measured on the 50-capital map in Inter
  // at weight 650 (0.644em a character for "Montgomery", 0.894em for "WY"),
  // not averages: an average let "Olympia" print across "WA". The padding
  // covers the white outline (0.14em a side) the text is painted with.
  const boxOf = (text: string, x: number, y: number, size: number, upper: boolean, lines = 1) => ({
    x,
    y,
    w:
      (upper ? 0.9 : 0.65) *
        size *
        (lines > 1 ? Math.max(...text.split("\n").map((l) => l.length)) : text.length) +
      size * 0.6,
    // Inter's line box measures 1.18em; 1.25 leaves a hair between rows.
    h: size * (1.25 + (lines - 1) * 1.05),
  });
  const taken: Placed[] = [];
  /** Overlaps something already placed, or hangs off the edge of the map. */
  const blocked = (b: Placed) =>
    b.x - b.w / 2 < base.x ||
    b.x + b.w / 2 > base.x + base.w ||
    b.y - b.h / 2 < base.y ||
    b.y + b.h / 2 > base.y + base.h ||
    taken.some((r) => Math.abs(r.x - b.x) * 2 < r.w + b.w && Math.abs(r.y - b.y) * 2 < r.h + b.h);
  /** Outside the camera's frame (with a label of slack): not visible, not listed. */
  const offscreen = (x: number, y: number) =>
    x < view.x - fontUnits * 2 ||
    x > view.x + view.w + fontUnits * 2 ||
    y < view.y - fontUnits * 2 ||
    y > view.y + view.h + fontUnits * 2;

  /** Stacked lines of text, centred vertically on y. */
  const stacked = (x: number, lines: string[], size: number) => {
    if (lines.length === 1) return lines[0];
    const first = -((lines.length - 1) / 2) * size * 1.1;
    return lines.map((line, i) => (
      <tspan key={i} x={x} dy={i === 0 ? first : size * 1.1}>
        {line}
      </tspan>
    ));
  };

  /** A leader from the region's anchor to the edge of a placed box, plus the dot. */
  const leader = (fromX: number, fromY: number, box: Placed) => {
    const dx = box.x - fromX;
    const dy = box.y - fromY;
    const len = Math.hypot(dx, dy) || 1;
    // Stop at the box edge so the line never runs through the letters.
    const tx = dx !== 0 ? Math.abs(box.w / 2 / dx) : Infinity;
    const ty = dy !== 0 ? Math.abs(box.h / 2 / dy) : Infinity;
    const t = Math.max(0, 1 - Math.min(tx, ty));
    const endX = fromX + dx * t;
    const endY = fromY + dy * t;
    if (len * (1 - t) < 0.01) return null;
    return (
      <>
        <path d={`M${fromX},${fromY}L${endX},${endY}`} className="tq-leader" strokeWidth={leaderWidth} />
        <circle cx={fromX} cy={fromY} r={dotRadius} className="tq-leader-dot" />
      </>
    );
  };

  // Region names sit inside their own shape and cannot move, so they are
  // reserved first; the city names then take the best free slot around their
  // pin and give up to the callout list rather than print on top of something
  // else. Iteration is over a fixed key order, so the same map always
  // resolves the same way.
  const ids = Object.keys(paths);

  // The study map orders the world's floating labels by what matters: the
  // ones you missed first (they are the lesson), biggest first within that, so
  // a crowded frame spends its room on the countries a player can actually
  // see. Fixed-anchor maps (US, Canada) are unaffected: their region labels
  // never move and always draw.
  const labelOrder = revealAll
    ? [...ids].sort((a, b) => {
        const inA = activeIds === null || activeIds.has(a);
        const inB = activeIds === null || activeIds.has(b);
        if (inA !== inB) return inA ? -1 : 1;
        const missA = !found.has(a);
        const missB = !found.has(b);
        if (missA !== missB) return missA ? -1 : 1;
        return (labelPoints?.[b]?.r ?? 0) - (labelPoints?.[a]?.r ?? 0);
      })
    : ids;

  // Regions whose name label found a home on the map; the city pass and the
  // callout pass read this to decide what a row has to say.
  const namePlaced = new Set<string>();
  const drawLabels = showLabels && labelsReadable;

  for (const id of labelOrder) {
    const isFound = found.has(id);
    const inPlay = activeIds === null || activeIds.has(id);
    const revealed = isFound || (revealAll && inPlay);

    // Minimum hit target for regions a few units across. Also the tooltip
    // target for those regions after the run, since their own path is too
    // small to hover.
    const hp = hitPoints?.[id];
    if (hp && inPlay && ((interactive && !isFound) || tooltips)) {
      const clickable = interactive && !isFound;
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
            role={clickable ? "button" : "img"}
            aria-label={clickable ? names[id] : describe(id)}
            tabIndex={0}
            {...(clickable
              ? {
                  onClick: (e: React.MouseEvent<SVGElement>) =>
                    handleRegionClick(resolveHit(id, e.clientX, e.clientY)),
                  onKeyDown: (e: React.KeyboardEvent<SVGElement>) => handleRegionKey(e, id),
                }
              : {
                  ...tipHandlers(id),
                  onClick: (e: React.MouseEvent<SVGElement>) => {
                    const target = resolveHit(id, e.clientX, e.clientY);
                    tipHandlers(target).onClick?.(e);
                  },
                })}
          />
        ),
      });
    }

    if (!drawLabels || !revealed) continue;
    const lp = labelPoints?.[id];
    if (!lp) continue;
    if (offscreen(lp.x, lp.y)) continue;

    const full = names[id] ?? id;
    // With capitals in play the city is the answer, so the region drops to its
    // compact form and the city name gets the room.
    const wantAbbr = compact || Boolean(capitals);
    const missedClass = !isFound ? " tq-label-missed" : "";

    if (lp.fit === "out") {
      // Too small to hold any text and too crowded for a leader: a numbered
      // marker on the map and a row in the list under it. (These used to hang
      // in a gutter column inside the SVG, which shrank to 5px on a phone.)
      // On a capitals map the row carries the city too; see the city pass.
      const cap = capitals?.[id];
      const withCity = cap && capitalSet?.has(id);
      callouts.push({
        id,
        text: withCity ? `${full}, capital ${cap.name}` : full,
        x: withCity ? cap.x : lp.x,
        y: withCity ? cap.y : lp.y,
        missed: !isFound,
      });
    } else if (lp.fit === "auto") {
      // World map: the decision is made at the CURRENT zoom, because the label
      // shrinks in user units as you zoom in. A country too small to hold its
      // name at world scale grows into it a couple of gestures later; until
      // then the name sits just off the coastline on a visible leader, and a
      // country too small even to see gets a numbered marker instead.
      const box = boxOf(full, lp.x, lp.y, fontUnits, false);
      const insideFits = box.w / 2 <= (lp.r ?? 0) * 0.95 && fontUnits * 0.62 <= (lp.r ?? 0);
      let place: Placed | null = null;
      if (insideFits && !blocked(box)) place = box;
      // A floating callout is only spent on a country big enough to see at
      // this zoom - roughly half a label tall. Below that the leader would
      // point at a dot with nothing under it, so the marker takes over.
      const worthFloating = (lp.r ?? 0) >= fontUnits * 0.45;
      if (!place && worthFloating) {
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
      if (!place) {
        callouts.push({ id, text: full, x: lp.x, y: lp.y, missed: !isFound });
        continue;
      }
      taken.push(place);
      namePlaced.add(id);
      const offset = place.x !== lp.x || place.y !== lp.y;
      labelLayer.push(
        <g
          key={`lbl-${id}`}
          className={`tq-label${missedClass}`}
          style={{ transformOrigin: `${lp.x}px ${lp.y}px` }}
          aria-hidden="true"
        >
          {offset && leader(lp.x, lp.y, place)}
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
      namePlaced.add(id);
      labelLayer.push(
        <g
          key={`lbl-${id}`}
          className={`tq-label${missedClass}`}
          style={{ transformOrigin: `${lp.x}px ${lp.y}px` }}
          aria-hidden="true"
        >
          <text
            x={lp.x}
            y={lp.y}
            className="tq-text"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontUnits}
            strokeWidth={fontUnits * 0.28}
          >
            {stacked(lp.x, lines, fontUnits)}
          </text>
        </g>
      );
    }
  }

  // Second pass: the city names. They go on after every region name is
  // placed, in two sweeps so the crowded middle of a map gets a fair go:
  // everyone tries the four slots touching their pin first, then the wider
  // ring (with a leader back to the pin). Every placed name is the same size
  // and weight; a name that finds no room even then becomes a numbered marker
  // and a callout row rather than shrinking or hiding. (Frankfort, boxed in
  // by Indianapolis, Columbus and Charleston, is the case this exists for.)
  // Regions whose own name went to the callout list already carry their city
  // in that row, so they are skipped here.
  const cityCallout = new Set<string>();
  if (capitals && drawLabels) {
    const citySize = fontUnits * 0.95;
    const pending: string[] = [];
    for (const id of ids) {
      const inPlay = activeIds === null || activeIds.has(id);
      const isFound = found.has(id);
      if (!(isFound || (revealAll && inPlay))) continue;
      const cap = capitals[id];
      if (!cap || !capitalSet?.has(id)) continue;
      if (offscreen(cap.x, cap.y)) continue;
      if (labelPoints?.[id]?.fit === "out") continue; // in its region's callout row
      pending.push(id);
    }
    // Most crowded pin first: a city with many neighbours within a label's
    // reach has the fewest options, so it chooses before the roomy ones do.
    // The sweeps below walk the list from the END, so the sort is ascending.
    const reach = fontUnits * 6;
    const crowd = new Map<string, number>();
    for (const id of pending) {
      const c = capitals[id];
      let n = 0;
      for (const other of pending) {
        if (other !== id && Math.hypot(capitals[other].x - c.x, capitals[other].y - c.y) < reach) n++;
      }
      crowd.set(id, n);
    }
    pending.sort((a, b) => (crowd.get(a) ?? 0) - (crowd.get(b) ?? 0));
    const sweeps: number[] = [4, 24];
    for (const slots of sweeps) {
      const size = citySize;
      for (let p = pending.length - 1; p >= 0; p--) {
        const id = pending[p];
        const cap = capitals[id];
        const isFound = found.has(id);
        const box = boxOf(cap.name, cap.x, cap.y, size, false);
        const gap = pinRadius * 1.3;
        const near = gap + size * 0.6;
        const side = box.w / 2 + gap;
        const diag = 0.72;
        const candidates: [number, number][] = [
          [0, near],
          [0, -near],
          [side, 0],
          [-side, 0],
          [side * diag, near * diag],
          [-side * diag, near * diag],
          [side * diag, -near * diag],
          [-side * diag, -near * diag],
          [0, near * 2.1],
          [0, -near * 2.1],
          [side * 1.6, 0],
          [-side * 1.6, 0],
          [side * 1.3, near * 1.5],
          [-side * 1.3, near * 1.5],
          [side * 1.3, -near * 1.5],
          [-side * 1.3, -near * 1.5],
          [0, near * 3.2],
          [0, -near * 3.2],
          [side * 2.3, 0],
          [-side * 2.3, 0],
          [side * 1.8, near * 2.4],
          [-side * 1.8, near * 2.4],
          [side * 1.8, -near * 2.4],
          [-side * 1.8, -near * 2.4],
        ];
        let place: Placed | null = null;
        let far = false;
        for (let i = 0; i < Math.min(slots, candidates.length); i++) {
          const [dx, dy] = candidates[i];
          const c = { ...box, x: cap.x + dx, y: cap.y + dy };
          if (!blocked(c)) {
            place = c;
            far = i >= 8;
            break;
          }
        }
        if (!place) continue;
        pending.splice(p, 1);
        taken.push(place);
        labelLayer.push(
          <g
            key={`city-${id}`}
            className={`tq-label${!isFound ? " tq-label-missed" : ""}`}
            style={{ transformOrigin: `${cap.x}px ${cap.y}px` }}
            aria-hidden="true"
          >
            {far && (
              <path
                d={`M${cap.x},${cap.y}L${place.x},${place.y}`}
                className="tq-leader"
                strokeWidth={leaderWidth}
              />
            )}
            <text
              x={place.x}
              y={place.y}
              className="tq-text tq-city"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={size}
              strokeWidth={size * 0.28}
            >
              {cap.name}
            </text>
          </g>
        );
      }
    }
    for (const id of pending) {
      const cap = capitals[id];
      cityCallout.add(id);
      callouts.push({
        id,
        text: namePlaced.has(id) ? `${cap.name}, ${names[id] ?? id}` : `${names[id] ?? id}, capital ${cap.name}`,
        x: cap.x,
        y: cap.y,
        missed: !found.has(id),
      });
    }
  }

  // Capital markers, built after the city pass so a pin whose city went to
  // the callout list is drawn as the numbered marker instead of a plain pin.
  for (const id of ids) {
    const cap = capitals?.[id];
    const inPlay = activeIds === null || activeIds.has(id);
    if (!cap || !capitalSet?.has(id) || !inPlay) continue;
    const isFound = found.has(id);
    const revealed = isFound || (revealAll && inPlay);
    if (revealed && drawLabels && callouts.some((c) => c.id === id && c.x === cap.x && c.y === cap.y)) continue;
    if (revealed) {
      capitalLayer.push(
        <g
          key={`pin-${id}`}
          className={`tq-pin${isFound ? " tq-pin-found" : ""}`}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          aria-hidden="true"
        >
          <circle cx={cap.x} cy={cap.y} r={pinRadius} className="tq-pin-ring" />
          <circle cx={cap.x} cy={cap.y} r={pinRadius * 0.48} className="tq-pin-core" />
        </g>
      );
    } else {
      capitalLayer.push(
        <circle
          key={`hint-${id}`}
          cx={cap.x}
          cy={cap.y}
          r={hintRadius}
          className="tq-hint"
          aria-hidden="true"
        />
      );
    }
  }

  // Third pass: numbered markers for the callout list. Reading order top to
  // bottom, then left to right, so the numbers walk down the map. A marker
  // sits on its anchor when that is free, otherwise just beside it on a
  // leader; it is never dropped, so the row and the map always agree.
  callouts.sort((a, b) => a.y - b.y || a.x - b.x);
  const markerBox = (x: number, y: number): Placed => ({
    x,
    y,
    w: markerRadius * 2.2,
    h: markerRadius * 2.2,
  });
  callouts.forEach((c, i) => {
    const n = i + 1;
    let place: Placed = markerBox(c.x, c.y);
    if (blocked(place)) {
      // Eight directions at growing radii. The crowded north-east of the US
      // map blocks everything within two radii of Annapolis; the third and
      // fourth rings reach the open Atlantic, and the leader keeps the
      // marker honest however far it sits.
      const d = markerRadius * 2.6;
      const dirs: [number, number][] = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
        [0.75, -0.75],
        [-0.75, -0.75],
        [0.75, 0.75],
        [-0.75, 0.75],
      ];
      search: for (const ring of [1, 2, 3, 4, 5]) {
        for (const [ux, uy] of dirs) {
          const cand = markerBox(c.x + ux * d * ring, c.y + uy * d * ring);
          if (!blocked(cand)) {
            place = cand;
            break search;
          }
        }
      }
    }
    taken.push(place);
    const offset = place.x !== c.x || place.y !== c.y;
    const pulsing = pulseNow !== null && pulseNow.id === c.id;
    labelLayer.push(
      <g
        key={`mark-${c.id}`}
        className={`tq-label tq-marker${c.missed ? " tq-label-missed" : ""}${pulsing ? " tq-marker-pulse" : ""}`}
        style={{ transformOrigin: `${c.x}px ${c.y}px` }}
        aria-hidden="true"
      >
        {offset && leader(c.x, c.y, place)}
        <circle cx={place.x} cy={place.y} r={markerRadius} className="tq-marker-ring" strokeWidth={leaderWidth} />
        <text
          x={place.x}
          y={place.y}
          className="tq-marker-text"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={markerFont}
        >
          {n}
        </text>
      </g>
    );
  });

  const zoomPct = Math.round(scale * 100);

  // The tip hugs the map's edges rather than hanging off them, and flips
  // below the point when there is no room above.
  const tipText = tip ? describe(tip.id) : "";
  const tipLeft = tip ? Math.min(Math.max(tip.x, 72), Math.max(72, renderWidth - 72)) : 0;
  const tipBelow = tip !== null && tip.y < 44;

  // Regions are their own controls whenever they can be clicked or read, so
  // the SVG is a group of them, not a single picture.
  const svgRole = interactive || tooltips ? "group" : "img";
  const showFloorHint =
    showLabels && !labelsReadable && tooltips && zoomable && renderWidth > 0;

  return (
    <div style={{ position: "relative" }}>
      <svg
        ref={svgRef}
        viewBox={boxToString(view)}
        role={svgRole}
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
          // At 1x a finger still scrolls the page; two fingers pinch the map.
          // Once zoomed in, one finger pans the map instead.
          touchAction: zoomable ? (atBase ? "pan-y" : "none") : undefined,
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
          .tq-region.tq-tippable { cursor: help; }
          .tq-region.tq-tippable:hover { stroke: var(--ink); stroke-width: 2; }
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
          /* A chip below the map pointing at its region: a stroke that reads
             on every fill, plus a fill flash where motion is allowed. */
          .tq-pulse {
            stroke: var(--ink) !important;
            stroke-width: 3 !important;
            ${reducedMotion ? "" : "animation: tq-pulse .9s ease-out both;"}
          }
          @keyframes tq-pulse {
            0% { fill: var(--mark-blue); }
            45% { fill: var(--mark-blue); }
            100% { }
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
          .tq-city { font-weight: 700; }
          .tq-leader { fill: none; stroke: var(--ink); stroke-linecap: round; }
          .tq-leader-dot { fill: var(--ink); }
          .tq-marker-ring { fill: var(--white); stroke: var(--ink); }
          .tq-marker-pulse .tq-marker-ring { fill: var(--mark-blue); }
          .tq-marker-text {
            fill: var(--ink);
            font-family: var(--font-mono, ui-monospace, monospace);
            font-weight: 700;
          }
          .tq-hint {
            fill: var(--white);
            stroke: var(--ink-mute);
            stroke-width: 1;
            vector-effect: non-scaling-stroke;
            opacity: .85;
            pointer-events: none;
          }
          .tq-pin {
            pointer-events: none;
            ${reducedMotion ? "" : "animation: tq-drop .38s cubic-bezier(.2,.9,.3,1.2) both;"}
          }
          @keyframes tq-drop {
            from { opacity: 0; transform: translateY(-14%) scale(.5); }
            to { opacity: 1; transform: none; }
          }
          .tq-pin-ring {
            fill: var(--white);
            stroke: var(--ink);
            stroke-width: 1.4;
            vector-effect: non-scaling-stroke;
          }
          .tq-pin-core { fill: var(--mark-coral); }
          .tq-pin-found .tq-pin-core { fill: var(--mark-pink); }
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
          const tippable = tooltips && inPlay && !clickable;
          const pulsing = pulseNow !== null && pulseNow.id === id;
          return (
            <path
              // A fresh key on each pulse restarts the animation even when the
              // same region is pulsed twice in a row.
              key={pulsing ? `${id}#${pulseNow.n}` : id}
              d={d}
              data-state={id}
              fill={fill}
              stroke={EDGE}
              strokeWidth={1}
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              className={`tq-region${clickable ? " tq-clickable" : ""}${
                tippable ? " tq-tippable" : ""
              }${isWrongFlash ? " tq-shake" : ""}${pulsing ? " tq-pulse" : ""}`}
              role={interactive ? "button" : tippable ? "img" : undefined}
              aria-label={interactive ? names[id] : tippable ? describe(id) : undefined}
              aria-disabled={interactive && isFound ? true : undefined}
              tabIndex={clickable || tippable ? 0 : undefined}
              onClick={clickable ? () => handleRegionClick(id) : undefined}
              onKeyDown={clickable ? (e) => handleRegionKey(e, id) : undefined}
              {...(tippable ? tipHandlers(id) : {})}
            />
          );
        })}

        {hitEntries.sort((a, b) => b.size - a.size).map((e) => e.node)}
        {capitalLayer}
        {labelLayer}
      </svg>

      {tip !== null && (
        <div
          ref={tipRef}
          role="status"
          style={{
            position: "absolute",
            left: tipLeft,
            top: tip.y,
            transform: tipBelow ? "translate(-50%, 14px)" : "translate(-50%, calc(-100% - 12px))",
            pointerEvents: "none",
            background: "var(--ink)",
            color: "var(--white)",
            padding: "0.35rem 0.65rem",
            borderRadius: 8,
            fontFamily: "var(--font-sans)",
            fontSize: "0.82rem",
            fontWeight: 600,
            lineHeight: 1.3,
            whiteSpace: "nowrap",
            boxShadow: "0 2px 8px rgba(0,0,0,.18)",
            zIndex: 2,
          }}
        >
          {tipText}
        </div>
      )}

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

      {showFloorHint && (
        <p
          style={{
            margin: "8px 2px 0",
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--ink-mute)",
          }}
        >
          Pinch to zoom, tap a region to read it.
        </p>
      )}

      {callouts.length > 0 && (
        <ol
          aria-label="Regions too small to label on the map"
          style={{
            listStyle: "none",
            margin: "10px 0 0",
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))",
            gap: "4px 12px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.82rem",
            lineHeight: 1.3,
          }}
        >
          {callouts.map((c, i) => (
            <li key={c.id} style={{ margin: 0, padding: 0 }}>
              <button
                type="button"
                onMouseEnter={() => pulseFromRow(c.id, false)}
                onFocus={() => pulseFromRow(c.id, false)}
                onClick={() => pulseFromRow(c.id, true)}
                title="Show it on the map"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  width: "100%",
                  minHeight: 28,
                  padding: "2px 4px",
                  border: 0,
                  borderRadius: 6,
                  background: "transparent",
                  color: "var(--ink)",
                  font: "inherit",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "0 0 auto",
                    width: 20,
                    height: 20,
                    borderRadius: 999,
                    border: `1.5px solid ${c.missed ? MISSING_FILL : "var(--ink)"}`,
                    display: "grid",
                    placeItems: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </span>
                <span>
                  <span className="sr-only" style={{ position: "absolute", left: -9999 }}>
                    {i + 1}.{" "}
                  </span>
                  {c.text}
                </span>
              </button>
            </li>
          ))}
        </ol>
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
