# Functional anatomy lessons and quiz concepts — 2026-11-21

Release status and independent review closures: [functional anatomy release record](FUNCTIONAL_ANATOMY_RELEASE_2026-11-21.md). The reviewed feature is prepared on its source branch; final browser and production gates remain pending.

## Scope and status

This research record supports the four functional lesson drafts and quiz drafts SN-86–89. It is not evidence of publication, independent scientific approval, or deployment. The lesson API, four original SVG diagrams, four raw quiz objects, and four complete brief records are staged for independent review and later canonical integration.

The design shifts from structure naming to causal process reasoning:

| Quiz | Functional concept | Explicit distinction from nearby anatomy quiz |
|---|---|---|
| SN-86 | Cardiac-cycle valve gates as pressure relationships; predict the next event | SN-79 names chambers, matches valve boundaries, and traces blood route |
| SN-87 | Pressure/volume drives bulk ventilation while gas exchange continues across all four phases | SN-81 names airway structures, orders the air route, and identifies alveoli/gas directions |
| SN-88 | Hypothetical nephron tracers distinguish filtration, recovery, secretion, and remaining-fluid collection | SN-83 identifies paired-kidney surface landmarks, blood vessels, and urinary-tract route |
| SN-89 | Electrical signal threshold/propagation and chemical synapse handoff are different mechanisms | SN-80 maps broad brain regions and their contributions |

The four concepts are related but non-duplicative: each new task tests a process transition or a prediction from a fully supplied virtual case rather than another anatomical naming/route quiz. The closest existing concepts reviewed were the four adjacent Science & Nature anatomy records named in the handoff: SN-79, SN-80, SN-81, and SN-83. A metadata-only check across all 413 current brief records found no ID/slug collision; the anatomy-adjacent records are enumerated in the content report.

## Evidence notes

### Cardiac cycle

- The OpenStax cardiac-cycle reference describes pressure gradients, filling, isovolumetric contraction, ejection, isovolumetric relaxation, and valve opening/closing. NHLBI's heart-flow page describes valve directionality, the coordinated heart-to-lung/body circuit, and oxygen loading at the lungs.
- The teaching sequence uses only the qualitative relationships needed by the questions. It deliberately omits measured pressure/volume values, heart rate, ECG correlation, and clinical inference.
- Model state checks: filling — AV open / semilunar closed; pressure rise after ventricular pressure exceeds atrial but before downstream arterial pressure — both closed; ejection — AV closed / semilunar open; early relaxation — both closed until atrial pressure exceeds ventricular pressure. Both ventricles eject during the same coordinated cycle; their pressure demands differ by circuit.
- The original quiz SVG uses phase-only colors, as its own caption states. Separately, the interactive lesson renderer uses blue (#557fa9) for blood with lower oxygen content and red (#d65b55) for blood with higher oxygen content; blood itself is red, and oxygen content changes at lung exchange, not within a heart chamber. Its gate symbol is #f4d6a1 and its indicative pressure cue is #6256a5.

### Respiratory function

- NHLBI's breathing explainer describes diaphragm movement, chest-volume change, inward/outward air movement, oxygen movement from alveoli toward capillaries, carbon dioxide movement back toward alveoli, and quiet exhalation. The OpenStax process-of-breathing reference supports the qualitative pressure-gradient model; its gas-exchange section is included as a deep-link source for the membrane mechanism.
- Lesson stages preserve two concurrent processes: pressure/volume changes control bulk airflow, while oxygen and carbon dioxide continue crossing the alveolar-capillary boundary during inhale, pause-in, exhale, and pause-out.
- No question asks a learner to alter, hold, or measure their breathing, exercise, or interpret a health state. Pressures and flows are qualitative rather than numerical.

### Nephron tracer model

- NIDDK's kidney explainer supports the glomerular filter/tubule distinction, passage of water and smaller molecules, retention of cells and larger proteins, return of needed substances to blood, and the role of remaining fluid in urine formation. The OpenStax urine-formation and tubular-reabsorption pages are linked for the named filtration/reabsorption/secretion processes.
- All cases state their tracer properties and allowed movements in the question stimulus. No learner needs to memorize an external quantity or assume a clinical test result.
- Filter, recover, secrete, and collect are separate explanatory lenses. The lesson states that processes can overlap in a real nephron. The only ordered tracer-accounting task explicitly declares its order as a virtual case sequence, not a universal physiological timeline.
- The original nephron diagram is enlarged and not to scale, and is not derived from or represented as part of the separate HRA kidney geometry. No flow volumes, regional popularity, or clinical certification is claimed.

### Neuron-to-neuron handoff

- The OpenStax action-potential and neuron-communication references are linked for threshold, graded inputs, local electrical propagation, calcium-linked vesicle release, chemical transmission, and receptor-dependent postsynaptic response.
- The source-derived lesson distinction is electrical vs. chemical: local graded changes can sum at the initial segment; an action potential propagates as local membrane-voltage changes; terminal calcium entry supports vesicle release; neurotransmitter then binds compatible receiving-cell receptors. The postsynaptic response does not guarantee a new action potential.
- The figure is an original simplified multipolar-neuron teaching model with a chemical synapse. It is not a brain-region map, a neural recording, or a model of thought. Electrical synapses are acknowledged as another connection type.

## Primary/reference URLs

- NHLBI, heart blood flow: <https://www.nhlbi.nih.gov/health/heart/blood-flow>
- OpenStax 19.3, cardiac cycle: <https://openstax.org/books/anatomy-and-physiology-2e/pages/19-3-cardiac-cycle>
- NHLBI, breathing and gas exchange: <https://www.nhlbi.nih.gov/health/lungs/breathing-benefits>
- OpenStax 22.3, process of breathing: <https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing>
- OpenStax 22.4, gas exchange: <https://openstax.org/books/anatomy-and-physiology-2e/pages/22-4-gas-exchange>
- NIDDK, kidneys and nephron function: <https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work>
- OpenStax 25.5, physiology of urine formation: <https://openstax.org/books/anatomy-and-physiology-2e/pages/25-5-physiology-of-urine-formation>
- OpenStax 25.6, tubular reabsorption: <https://openstax.org/books/anatomy-and-physiology-2e/pages/25-6-tubular-reabsorption>
- OpenStax 12.4, action potential: <https://openstax.org/books/anatomy-and-physiology-2e/pages/12-4-the-action-potential>
- OpenStax 12.5, communication between neurons: <https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons>

Question-level source IDs in each raw quiz identify the evidence used for that task. No external question, prose passage, video, or source figure is reused. The four functional SVGs are original vector teaching diagrams and are all-rights-reserved under repository policy; citations to factual sources do not grant those sources' image rights to the diagrams.

## Source-use limitation for independent review

OpenStax's fetched pages state a CC BY-NC-SA reuse condition and a restriction on ingestion into large-language-model offerings without prior written permission. This authoring packet contains original wording and original SVG figures, not copied OpenStax passages or figures. Because the referenced OpenStax pages carry that explicit condition, the independent reviewer and later integrator should confirm the project's use of those references remains limited to citation/factual verification and does not reproduce protected text or illustrations. This record does not claim rights clearance or approval.

## Producer correction record — 2026-11-21

The corrected heart match now distinguishes both-closed pressure rise from both-closed pressure fall, and its second question tests constant chamber volume during the closed-gate interval. Respiratory pause matches name the end-inhalation and end-exhalation pauses; oxygen is labeled alveolus-to-blood and carbon dioxide blood-to-alveolus. The nephron example introduces marker C into blood after the initial filtration event without specifying an implausible size or initial-filter exclusion. The neuron match distinguishes presynaptic action-potential propagation, postsynaptic local voltage response, cleft diffusion, and receptor binding. These are producer corrections; this record does not claim a fresh independent closure or editorial approval.
