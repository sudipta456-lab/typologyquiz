"use client";

import { useEffect, useRef, useState } from "react";
import type { Tone } from "@/lib/interactive/types";
import styles from "./InteractiveQuiz.module.css";

interface Props {
  tones: Tone[];
  transcript: string;
}

interface Playback {
  ctx: AudioContext;
  oscillators: OscillatorNode[];
  timer: ReturnType<typeof setTimeout> | null;
}

const MASTER_GAIN = 0.2;
/*
 * Playback bounds match LIMITS in src/lib/interactive/validate.ts (tones 1-16,
 * toneDuration 0.05-5 s, toneDelay 0-20 s). They are repeated here so the player
 * does not ship the validator; keep the two in step.
 */
const MAX_TONES = 16;
const DURATION_RANGE = [0.05, 5] as const;
const DELAY_RANGE = [0, 20] as const;

const clamp = (n: number, lo: number, hi: number) => (Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : lo);

function teardown(playback: Playback | null) {
  if (!playback) return;
  if (playback.timer) clearTimeout(playback.timer);
  for (const osc of playback.oscillators) {
    try {
      osc.stop();
    } catch {
      /* already stopped */
    }
    try {
      osc.disconnect();
    } catch {
      /* already disconnected */
    }
  }
  void playback.ctx.close().catch(() => undefined);
}

/**
 * Plays a short sequence of tones synthesised on the spot with Web Audio.
 * Nothing is fetched; playback only starts from the button, is volume-bounded
 * and is stopped when replayed, stopped, or unmounted.
 */
export function OriginalAudio({ tones, transcript }: Props) {
  const playbackRef = useRef<Playback | null>(null);
  const [playing, setPlaying] = useState(false);
  const [unsupported, setUnsupported] = useState(false);

  useEffect(() => {
    return () => {
      teardown(playbackRef.current);
      playbackRef.current = null;
    };
  }, []);

  const stop = () => {
    teardown(playbackRef.current);
    playbackRef.current = null;
    setPlaying(false);
  };

  const play = () => {
    teardown(playbackRef.current);
    playbackRef.current = null;
    const Ctor: typeof AudioContext | undefined =
      typeof window === "undefined"
        ? undefined
        : window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) {
      setUnsupported(true);
      setPlaying(false);
      return;
    }
    let ctx: AudioContext | undefined;
    try {
      ctx = new Ctor();
      void ctx.resume().catch(() => undefined);
      const compressor = ctx.createDynamicsCompressor();
      const master = ctx.createGain();
      master.gain.value = MASTER_GAIN;
      master.connect(compressor);
      compressor.connect(ctx.destination);

      const oscillators: OscillatorNode[] = [];
      const start = ctx.currentTime + 0.05;
      let end = 0;
      for (const tone of tones.slice(0, MAX_TONES)) {
        const delay = clamp(tone.delay, DELAY_RANGE[0], DELAY_RANGE[1]);
        const duration = clamp(tone.duration, DURATION_RANGE[0], DURATION_RANGE[1]);
        const peak = clamp(tone.gain ?? 0.5, 0, 1);
        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        osc.type = tone.waveform ?? "sine";
        osc.frequency.value = clamp(tone.frequency, 40, 4000);
        const t0 = start + delay;
        const attack = Math.min(0.02, duration / 4);
        env.gain.setValueAtTime(0, t0);
        env.gain.linearRampToValueAtTime(peak, t0 + attack);
        env.gain.setValueAtTime(peak, t0 + duration - attack);
        env.gain.linearRampToValueAtTime(0, t0 + duration);
        osc.connect(env);
        env.connect(master);
        osc.start(t0);
        osc.stop(t0 + duration + 0.02);
        oscillators.push(osc);
        end = Math.max(end, delay + duration);
      }
      const timer = setTimeout(() => {
        teardown(playbackRef.current);
        playbackRef.current = null;
        setPlaying(false);
      }, (end + 0.3) * 1000);
      playbackRef.current = { ctx, oscillators, timer };
      setUnsupported(false);
      setPlaying(true);
    } catch {
      // Close a context that was created before the failure so it is not leaked.
      void ctx?.close().catch(() => undefined);
      setUnsupported(true);
      setPlaying(false);
    }
  };

  return (
    <div className={styles.audio}>
      <div className={styles.audioControls}>
        <button type="button" className={styles.secondaryBtn} onClick={playing ? stop : play}>
          {playing ? "Stop sound" : "Play sound"}
        </button>
        <span className={styles.audioNote}>Short tones made by your browser. Nothing is downloaded.</span>
      </div>
      {unsupported && (
        <p className={styles.errorText} role="alert">
          This browser cannot play generated audio. Use the transcript below.
        </p>
      )}
      <p className={styles.transcript}>
        <strong>Transcript: </strong>
        {transcript}
      </p>
    </div>
  );
}
