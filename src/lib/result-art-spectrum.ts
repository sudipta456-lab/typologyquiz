import type { TestDefinition } from "./types";
import { scoreSpectrum } from "./tests/score-utils";

/**
 * Which band of a scoreMode "spectrum" quiz the results page is showing,
 * as an index into `test.spectrumBands`.
 *
 * The art must never contradict the band label printed next to it, so both
 * routes below end at the same lookup and neither restates the `score <=
 * band.max` comparison that lives inside scoreSpectrum:
 *
 * 1. `shownLabel` is the label already on screen. scoreSpectrum produced it
 *    when the quiz was submitted and it travels in the share link, so
 *    matching it is the strongest agreement available between art and copy.
 * 2. With no usable label (an old or hand-edited link), scoreSpectrum is
 *    asked directly. A two-item probe weighted to reproduce the decoded score
 *    exactly is fed through the real scorer, and the band it names is looked
 *    up. The probe is checked against the score it was built from first; if
 *    the scorer's arithmetic ever changes underneath it, this returns null
 *    and the caller shows no art rather than the wrong art.
 *
 * Returns null whenever the band cannot be established.
 */
export function spectrumBandIndex(
  test: TestDefinition,
  scores: Record<string, number>,
  shownLabel?: string
): number | null {
  const bands = test.spectrumBands;
  if (!bands || bands.length === 0) return null;

  if (shownLabel) {
    const labelled = bands.findIndex((b) => b.label === shownLabel);
    if (labelled >= 0) return labelled;
  }

  const primary = test.axes[0]?.key;
  if (!primary) return null;

  const raw = scores[primary];
  if (typeof raw !== "number" || !Number.isFinite(raw)) return null;
  const target = Math.round(Math.min(100, Math.max(0, raw)));

  // Weighted mean of a 100-point item and a 0-point item lands exactly on
  // `target`, which lets the real scorer decide the band for that score.
  const probe: TestDefinition = {
    ...test,
    questions: [
      {
        id: "__result_art_probe_high",
        text: "",
        type: "likert",
        axis: primary,
        direction: 1,
        weight: target,
      },
      {
        id: "__result_art_probe_low",
        text: "",
        type: "likert",
        axis: primary,
        direction: 1,
        weight: 100 - target,
      },
    ],
  };

  const probed = scoreSpectrum(probe, {
    __result_art_probe_high: 5,
    __result_art_probe_low: 1,
  });
  if (probed.scores[primary] !== target) return null;

  const matched = bands.findIndex((b) => b.label === probed.category.label);
  return matched >= 0 ? matched : null;
}
