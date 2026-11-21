export type AnatomyFunctionId = "heart" | "respiratory" | "urinary" | "brain";

export interface AnatomyFunctionStep {
  id: string;
  title: string;
  description: string;
  watchFor: string;
  sourceIds: string[];
}

export interface AnatomyFunctionLesson {
  id: AnatomyFunctionId;
  title: string;
  summary: string;
  scopeNote: string;
  legend: { id: string; label: string; color: string }[];
  steps: AnatomyFunctionStep[];
  sources: { id: string; label: string; url: string }[];
  quiz: { id: string; slug: string; title: string };
}

const OPENSTAX = "https://openstax.org/books/anatomy-and-physiology-2e/pages/";

export const ANATOMY_FUNCTION_LESSONS: readonly AnatomyFunctionLesson[] = [
  {
    id: "heart",
    title: "The Heart as a Pressure-Gated Pump",
    summary: "Follow one teaching-model cycle by asking which chamber pressure is rising and which valve gates are open. The two ventricles eject in the same coordinated cycle; their pressure levels differ because their downstream circuits differ.",
    scopeNote: "The functional renderer uses blue (#557fa9) for blood with lower oxygen content and red (#d65b55) for blood with higher oxygen content; blood itself is red, and oxygen content changes at lung exchange, not inside the heart. Gate symbols use #f4d6a1 and the indicative pressure cue uses #6256a5. The separate original quiz schematic uses phase-only colors. This is not a clinical simulation, ECG, measured pressure trace, or anatomically scaled 3D heart.",
    legend: [
      { id: "lower-oxygen", label: "Blood with lower oxygen content", color: "#557fa9" },
      { id: "higher-oxygen", label: "Blood with higher oxygen content", color: "#d65b55" },
      { id: "gate-symbol", label: "Valve gate symbol", color: "#f4d6a1" },
      { id: "pressure", label: "Indicative pressure cue (not quantitative)", color: "#6256a5" },
    ],
    steps: [
      { id: "filling", title: "Filling", description: "As the ventricles relax, atrial pressure exceeds ventricular pressure and the atrioventricular valves open. Blood moves into the ventricles while the semilunar valves remain closed.", watchFor: "An open inlet does not mean the outlet is open: the aortic and pulmonary valves remain closed during filling.", sourceIds: ["cycle", "flow"] },
      { id: "pressure-rise", title: "Pressure rises", description: "Ventricular muscle contracts and ventricular pressure rises. Once it exceeds atrial pressure, the atrioventricular valves close; before it exceeds downstream arterial pressure, the semilunar valves are still closed.", watchFor: "Both valve sets are closed in this isovolumetric pressure-rise interval; pressure changes while chamber volume is held in the model.", sourceIds: ["cycle"] },
      { id: "ejection", title: "Ejection", description: "When ventricular pressure exceeds pressure in the pulmonary trunk or aorta, the corresponding semilunar valve opens and blood is ejected. Both ventricles act in the same cycle, even though left- and right-sided pressures differ.", watchFor: "A valve opens because of a pressure gradient; oxygen loading occurs at the lungs, not as blood crosses a heart chamber.", sourceIds: ["cycle", "flow"] },
      { id: "relaxation", title: "Relaxation", description: "As ventricles relax, their pressure falls. The semilunar valves close when downstream pressure becomes greater; the atrioventricular valves remain closed until atrial pressure again exceeds ventricular pressure, beginning filling.", watchFor: "Early relaxation has both valve sets closed. The atrioventricular gates reopen only when the pressure relationship reverses.", sourceIds: ["cycle"] },
    ],
    sources: [
      { id: "cycle", label: "OpenStax Anatomy & Physiology 2e, 19.3 Cardiac Cycle", url: `${OPENSTAX}19-3-cardiac-cycle` },
      { id: "flow", label: "NHLBI, How Blood Flows through the Heart", url: "https://www.nhlbi.nih.gov/health/heart/blood-flow" },
    ],
    quiz: { id: "SN-86", slug: "heart-cycle-pressure-gates", title: "Heart Cycle: Pressure Opens the Gates" },
  },
  {
    id: "respiratory",
    title: "Breathing Pressure and Continuous Gas Exchange",
    summary: "Separate bulk air movement, driven by pressure changes, from gas exchange across the alveolar-capillary boundary. The model revisits both processes at inhale, pause-in, exhale, and pause-out.",
    scopeNote: "A quiet-breathing teaching model, not a measured breathing trace or a request to change or hold your own breathing. Pressure arrows are qualitative; gas exchange is not a four-step on/off switch and continues during the pauses in bulk airflow.",
    legend: [
      { id: "air-in", label: "Bulk airflow into lungs", color: "#2876a8" },
      { id: "air-out", label: "Bulk airflow out of lungs", color: "#ba6543" },
      { id: "exchange-o2", label: "Oxygen: alveolar air toward blood", color: "#2e8b57" },
      { id: "exchange-co2", label: "Carbon dioxide: blood toward alveolar air", color: "#7556a3" },
    ],
    steps: [
      { id: "inhale", title: "Inhale", description: "The diaphragm contracts downward and chest volume increases. Alveolar pressure briefly falls below ambient pressure, so bulk air flows inward. Gas exchange also occurs across the thin alveolar-capillary boundary.", watchFor: "Airflow direction follows the pressure difference; oxygen and carbon dioxide diffuse across the membrane at the same time.", sourceIds: ["breathing", "exchange"] },
      { id: "pause-in", title: "Pause-in", description: "At the end of inhalation, alveolar and ambient pressures are approximately equal, so net bulk airflow pauses. Oxygen still moves from alveolar air toward blood and carbon dioxide from blood toward alveolar air.", watchFor: "A pause in bulk flow is not a pause in gas exchange.", sourceIds: ["breathing", "exchange"] },
      { id: "exhale", title: "Exhale", description: "During quiet exhalation, the diaphragm relaxes and elastic recoil reduces chest and lung volume. Alveolar pressure briefly rises above ambient pressure, moving bulk air outward while gas exchange continues.", watchFor: "The airflow reverses; the exchange directions across the membrane remain the same in this simplified overview.", sourceIds: ["breathing", "exchange"] },
      { id: "pause-out", title: "Pause-out", description: "At the end of exhalation, alveolar and ambient pressures again approach equality, so net bulk airflow pauses. The alveolar-capillary boundary remains a site of oxygen and carbon-dioxide exchange.", watchFor: "Do not treat pause-out as a gas-exchange stage or infer that diffusion switches off.", sourceIds: ["breathing", "exchange"] },
    ],
    sources: [
      { id: "breathing", label: "NHLBI, What Breathing Does for the Body", url: "https://www.nhlbi.nih.gov/health/lungs/breathing-benefits" },
      { id: "pressure", label: "OpenStax Anatomy & Physiology 2e, 22.3 The Process of Breathing", url: `${OPENSTAX}22-3-the-process-of-breathing` },
      { id: "exchange", label: "OpenStax Anatomy & Physiology 2e, 22.4 Gas Exchange", url: `${OPENSTAX}22-4-gas-exchange` },
    ],
    quiz: { id: "SN-87", slug: "breathing-pressure-gas-exchange", title: "Breathing: Pressure Changes, Exchange Continues" },
  },
  {
    id: "urinary",
    title: "A Nephron Tracer: Filter, Recover, Add, Collect",
    summary: "Use a hypothetical tracer to reason about the direction of movement at the filtration barrier, tubule, nearby blood, and collecting duct. The four views are learning lenses on processes that can overlap in a real nephron.",
    scopeNote: "The enlarged nephron view is original, schematic, and not to scale; it is not part of the exterior HRA kidney model and makes no clinical, diagnostic, or quantitative claim. The example tracks hypothetical substances, not a personal health test.",
    legend: [
      { id: "blood", label: "Blood / nearby capillary path", color: "#a84545" },
      { id: "filtrate", label: "Tubular fluid / filtrate path", color: "#c28b35" },
      { id: "recover", label: "Reabsorption: tubule back to blood", color: "#218a78" },
      { id: "secrete", label: "Secretion: blood into tubule", color: "#6657a8" },
    ],
    steps: [
      { id: "filter", title: "Filter", description: "At the glomerular filter, water and many small solutes can pass from blood into the capsule and tubule. Blood cells and large proteins are retained in the blood in this teaching model.", watchFor: "Filtrate is not yet final urine; filtration does not send every blood component into the tubule.", sourceIds: ["kidneys", "formation"] },
      { id: "recover", title: "Recover", description: "Along the tubule, selected water and useful solutes move from tubular fluid back into nearby blood. This return movement is reabsorption.", watchFor: "Reabsorption is tubule-to-blood movement; it is not the same as filtering blood into the tubule.", sourceIds: ["kidneys", "reabsorption"] },
      { id: "secrete", title: "Add", description: "Selected substances can move from blood into the tubule by secretion. This adds them to the tubular fluid rather than returning them to blood.", watchFor: "Secretion is blood-to-tubule movement. The diagram is a process lens, not a claim that all substances follow one fixed path.", sourceIds: ["formation"] },
      { id: "collect", title: "Collect", description: "Fluid remaining in the tubule continues toward collecting ducts and is the portion that proceeds as urine. What was filtered may have been partly recovered or supplemented along the way.", watchFor: "The final tubular fluid is not identical to the initial filtrate; avoid treating all filtered fluid as urine.", sourceIds: ["kidneys", "formation"] },
    ],
    sources: [
      { id: "kidneys", label: "NIDDK, Your Kidneys & How They Work", url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work" },
      { id: "formation", label: "OpenStax Anatomy & Physiology 2e, 25.5 Physiology of Urine Formation", url: `${OPENSTAX}25-5-physiology-of-urine-formation` },
      { id: "reabsorption", label: "OpenStax Anatomy & Physiology 2e, 25.6 Tubular Reabsorption", url: `${OPENSTAX}25-6-tubular-reabsorption` },
    ],
    quiz: { id: "SN-88", slug: "nephron-tracer-filter-recover-secrete", title: "Nephron Tracer: Where Does It Go?" },
  },
  {
    id: "brain",
    title: "One Neuron-to-Neuron Chemical Handoff",
    summary: "Trace a model signal from graded input and threshold through a traveling electrical action potential, chemical release across a synaptic gap, and a receptor-dependent response in the next cell.",
    scopeNote: "An original, simplified multipolar-neuron teaching model with a chemical synapse, not a brain-region map, neural recording, or thought-reading model. Electrical synapses also exist; a postsynaptic response does not guarantee a new action potential.",
    legend: [
      { id: "graded", label: "Local graded input", color: "#4d8c72" },
      { id: "electrical", label: "Traveling electrical membrane change", color: "#2876a8" },
      { id: "chemical", label: "Chemical messenger across synaptic cleft", color: "#9a5a9b" },
      { id: "response", label: "Receptor-dependent postsynaptic change", color: "#c28b35" },
    ],
    steps: [
      { id: "receive", title: "Receive and sum", description: "A neuron receives local graded inputs. Their net effect at the axon initial segment can move the membrane toward or away from threshold; an action potential begins only if the net input reaches threshold.", watchFor: "A single incoming signal does not automatically produce an action potential; inputs can add or oppose one another.", sourceIds: ["action-potential", "communication"] },
      { id: "propagate", title: "Propagate", description: "Once initiated, an action potential propagates as a sequence of local membrane-voltage changes along the axon. It is not one ion traveling from one end of the neuron to the other.", watchFor: "The traveling event is a voltage change along the membrane, with local ion movement; it is not a single particle crossing the whole axon.", sourceIds: ["action-potential"] },
      { id: "release", title: "Release chemically", description: "When the action potential reaches a terminal, voltage-gated calcium channels open. Calcium entry helps vesicles release neurotransmitter into the chemical synaptic cleft.", watchFor: "The electrical event in the sending cell is converted to a chemical signal across the cleft.", sourceIds: ["communication"] },
      { id: "respond", title: "Respond at receptors", description: "Neurotransmitter diffuses across the cleft and binds compatible receptors on the receiving cell. The receptor can produce a local voltage change; whether a new action potential follows depends on the receiving cell's net input and threshold.", watchFor: "Chemical binding is not itself a guaranteed action potential. Receptor type and other inputs shape the response.", sourceIds: ["communication"] },
    ],
    sources: [
      { id: "action-potential", label: "OpenStax Anatomy & Physiology 2e, 12.4 The Action Potential", url: `${OPENSTAX}12-4-the-action-potential` },
      { id: "communication", label: "OpenStax Anatomy & Physiology 2e, 12.5 Communication Between Neurons", url: `${OPENSTAX}12-5-communication-between-neurons` },
    ],
    quiz: { id: "SN-89", slug: "neuron-signal-threshold-chemical-handoff", title: "Neuron Signals: From Threshold to Handoff" },
  },
];

const LESSON_BY_ID: ReadonlyMap<AnatomyFunctionId, AnatomyFunctionLesson> = new Map(
  ANATOMY_FUNCTION_LESSONS.map((lesson) => [lesson.id, lesson]),
);

export function getAnatomyFunctionLesson(id: string): AnatomyFunctionLesson | undefined {
  if (id !== "heart" && id !== "respiratory" && id !== "urinary" && id !== "brain") return undefined;
  return LESSON_BY_ID.get(id);
}

export function parseAnatomyFunctionHash(hash: string): { systemId: AnatomyFunctionId; stepId?: string } | null {
  const match = /^#function-(heart|respiratory|urinary|brain)(?:-([a-z-]+))?$/.exec(hash);
  if (!match) return null;
  const systemId = match[1] as AnatomyFunctionId;
  const stepId = match[2];
  if (!stepId) return { systemId };
  const lesson = LESSON_BY_ID.get(systemId);
  if (!lesson?.steps.some((step) => step.id === stepId)) return null;
  return { systemId, stepId };
}
