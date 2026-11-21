# Learning atlases — November 21, 2026

Status: reviewed, fully tested and built locally, **not deployed**. Final browser QA is blocked by the native browser-control tool; production release and live analytics receipts are pending. These are owner-authorized learning features, separate from the daily-five publication quota.

## Scope and counts

- `/learn/periodic-table/`: 118 recognized elements, 118 original element stories, three eight-step open-book tracks (24 learning steps), two-element comparison, search, family filtering and property views. These learning steps are not counted as canonical quiz-bank entries.
- `/learn/anatomy/`: eight illustrated topics, optional on-demand Three.js models, written structure notes, four optional licensed medical reference illustrations and links to eight canonical quizzes.
- Canonical interactive collection: 400 to 408 quizzes; 3,200 to 3,264 tasks. Science & Nature grows from 77 to 85. Every added quiz has exactly eight tasks in two sections, with multiple supported formats. There are 17 image-identification tasks.
- All 400 earlier quiz objects and all 400 earlier brief objects retain their exact original bytes and order. Initial identity/legacy fixtures are unchanged. Timed trivia, driving tests, news editions, worker routing/bindings, tracking privacy controls and accounts are outside this change.

| ID | Quiz | Tasks |
|---|---|---|
| SN-78 | [Body Regions & Directions](https://typologyquiz.com/quizzes/body-regions-and-directions/) | 8 |
| SN-79 | [Heart Chambers: Follow the Blood](https://typologyquiz.com/quizzes/heart-chambers-and-blood-route/) | 8 |
| SN-80 | [Brain Regions: A Map of Many Jobs](https://typologyquiz.com/quizzes/brain-regions-and-what-they-contribute/) | 8 |
| SN-81 | [Airways to Alveoli: The Gas-Exchange Route](https://typologyquiz.com/quizzes/airways-to-alveoli-gas-exchange/) | 8 |
| SN-82 | [A Meal’s Route: Inside the Digestive System](https://typologyquiz.com/quizzes/a-meals-route-inside-the-digestive-system/) | 8 |
| SN-83 | [Kidneys at Work: Blood In, Urine Out](https://typologyquiz.com/quizzes/kidneys-at-work-blood-in-urine-out/) | 8 |
| SN-84 | [Female Reproductive Anatomy: Structures and Pathways](https://typologyquiz.com/quizzes/female-reproductive-anatomy-structures-and-pathways/) | 8 |
| SN-85 | [Male Reproductive Anatomy: Ducts and Glands](https://typologyquiz.com/quizzes/male-reproductive-anatomy-ducts-and-glands/) | 8 |

## Chemistry research and treatment

Primary element identities come from [IUPAC](https://iupac.org/what-we-do/periodic-table-of-elements/). Standard atomic weights use [CIAAW 2024](https://ciaaw.org/atomic-weights.htm), including intervals and uncertainty; elements without an assigned standard atomic weight remain null rather than receiving an isotope mass masquerading as a standard weight. The Zr, Gd and Lu revisions are included. [PubChem](https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON) supplies selected configurations and properties. Original element stories link individual Royal Society of Chemistry references.

Four dated research/reference updates cover the revised weights, [seaborgium bond measurements](https://www.gsi.de/en/start/news/details/2026/10/14/chemische-bindung-mit-superschwerem-element?no_cache=1), [prompt-neutron research](https://www.jinr.ru/posts/jinr-physicists-performed-pioneering-measurement-of-prompt-neutron-yield-in-spontaneous-seaborgium-fission/) and the continuing [superheavy-element search](https://www.energy.gov/science/doe-explainssuperheavy-elements). The table contains 118 recognized elements; research targeting 119 or 120 is not represented as a confirmed discovery. Predicted properties and unknown bulk states remain labelled. Detached f-block rows retain actual periods 6/7 and do not assert a disputed group-3 placement.

The two existing timed element-recall quizzes remain intact. The new tracks provide an open-book learning experience; the older fictional A/B atom-count quiz is explicitly distinguished from real-element lookup. No ranking, engagement or demonstrated learning-effect claim is made.

## Anatomy sources and visual provenance

The rendered references and optional GLBs derive from the [HuBMAP HRA reference-object library](https://github.com/hubmapconsortium/ccf-3d-reference-object-library/tree/f1a3a63f110e27ff0736047d52d04dba5d3087f9), pinned at `f1a3a63f110e27ff0736047d52d04dba5d3087f9`. Seventeen GLBs are shipped with the source CC BY 4.0 license. Hashes, model versions, source URLs, coordinate frames, selected source meshes, camera settings, visible anchors and separate margin-badge positions are in `public/anatomy/provenance.json` and `manifest.json`. See `ANATOMY_ASSET_PROVENANCE_2026-11-21.md` for the source-selection audit.

Blender 5.3 rendered the actual source geometry. No AI-generated organ geometry, CT/MRI interpretation or invented internal section was used. The standalone body outline is not registered to the organ models; it is not overlaid with them. The male set has partial coverage and excludes testes/penis. The contradictory `VH_M_seminal_vesicle` name/ontology is not used as a verified named callout; the 3D inspector explicitly suppresses that uncertain label.

Separate original Blausen illustrations provide a heart section, a transparent lateral brain reference, a respiratory composite and a kidney section. Individual Commons file pages verify CC BY 3.0. Original PNG bytes, embedded labels and full-resolution files are retained, with source/creator/license links and no-endorsement wording. Exact sources and hashes are in `public/anatomy/blausen-provenance.json`. Current OpenStax anatomy artwork with NC terms was not copied.

Factual question references use [NCI SEER](https://training.seer.cancer.gov/anatomy/), [NHLBI heart](https://www.nhlbi.nih.gov/health/heart/anatomy) and [lung](https://www.nhlbi.nih.gov/health/lungs/respiratory-system) materials, [NIDDK digestion](https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works), [kidney](https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work) and [urinary-tract](https://www.niddk.nih.gov/health-information/urologic-diseases/urinary-tract-how-it-works) references, and NINDS brain materials. The independent reviewer accessed the official NINDS PDF while its HTML page returned 403; the coordinator's later PDF fetch was also blocked. Do not describe every access route as successful.

## Quality review

OpenCode Go handled the initial bulk research and implementation. Actual inference then returned a five-hour Go usage-limit error at 12:01 UTC, with reset in roughly 50 minutes. Owned blocked runs were stopped; the authorized authenticated GPT subscription fallback completed the bounded tasks. No credentials, billing, paid overages or account permissions changed. Fresh GPT sessions independently reviewed content and code.

- Periodic-table review checked all 118 data identities/weights, 24 task keys, 118 original stories and four updates. Initial chlorine, tungsten-direction, arsenic-use and DOE-date issues were corrected; a separate closure passed. Some RSC checks used cached source excerpts rather than a fresh full-page read of every element.
- Anatomy review covered all 64 tasks, all 32 letter endpoints and the eight actual plates. It held a visually ambiguous rectum marker, answer-revealing option labels and incomplete multi-model citations. The rectum anchor was moved to an exposed terminal portion with an exact `VH_M_rectum` raycast. All 17 scored image choices now use neutral letters; each image task cites every source model used.
- Two repetitive tasks were replaced with a typical-neuron axon question and the glomerulus/tubule two-step process, independently verified against NCI SEER and NIDDK. The closure proved 19 changed questions and 45 unchanged questions, and passed. Brain C is a small occipital pole and is the correct answer to SN-80 q4; the original review's statement that it was unused was corrected in the closure.
- Two unused overview references were subsequently removed from SN-84/SN-85. All 64 task objects and all other quiz fields stayed identical; `source-cleanup.json` records that metadata-only delta.
- Code review held view resets on resize and retained GPU resources after load failure. Both were corrected and independently re-reviewed. Model loads settle together, cleanup is idempotent, late results are disposed, and resize preserves the learner's view.

Reviewed closure packet: `08bfc5df24bc07f9c1b946394267f0a5e4b36712c227b03c6e12dfeaccecb1de`.
Final packet after deletion of uncited metadata only: `1a47b4d9d4ce954f1795e2aac9864556e8b98828e1761813f67bea881121aab9`.

The reviews are AI-assisted source and code reviews, not independent clinician certification. Image-identification tasks depend on the picture. Native controls and the same-choice radio list support keyboard operation; the linked written Atlas notes are an unscored study alternative, not an equivalent nonvisual scored assessment. These limits are disclosed in methodology.

## Verification and release

- Full `npm run verify`: 337 tests passed, zero failed, with typecheck/lint and generator checks.
- Production `npm run deploy -- --dry-run`: exit 0; GA activation flags enabled, 994 canonical sitemap URLs and 1,730 analytics-covered HTML pages verified. All existing Worker bindings/routing are unchanged; handbook assets were stripped from the export and remain served through R2. There are 17,884 regular static files (the Wrangler scan log also counted 2,211 directories), below the documented 20,000-file free-tier limit.
- The focused anatomy gate passes all five tests: image/model hashes, original reference dimensions, 44px containment/nonoverlap and badge alignment, strict validation and every 8/8 gold path.
- Seventeen local HTTP receipts passed for the two hubs, all eight new quiz pages and representative licensed images/model bytes. These are local export checks, not live-production receipts or browser playthroughs.
- Final browser checks are **blocked**. Chrome state/new-window attempts and Safari state returned `cgWindowNotFound`. The in-app preview request was queued because this chat was not visible. Earlier preliminary periodic-table smoke checks predate the final layout and do not count as final mobile/desktop verification.
- Review preview: `http://localhost:3055/__qa-harness.html`; its passive iframe harness offers explicit 320, 390 and 1280 CSS-pixel widths. The owned server uses `work/anatomy/2026-11-21/serve-preview.py`, with `out/` as its static root; the helper route is not a deployed asset.
- No production deployment/version was created. All new production URL checks and production analytics delivery remain unverified. The published canonical baseline remains 400. Do not count the prepared 408 as live or treat these eight owner-requested feature quizzes as a daily-five batch.
- Source/verification metadata is in the accompanying JSON record. Source commit: `3e15df63844a3d23af7beeee5d63bfb6ec690a39`. It remains a feature-branch checkpoint; it has not been activated in production.

Build note: the initial preview failed with malformed generated Tailwind CSS under default project-wide source detection. Restricting detection to application `src` resolved the failure (5.5-second compilation) without changing style declarations. The exact offending non-application token was not isolated.

Local evidence: `work/periodic-table/2026-11-21/` and `work/anatomy/2026-11-21/`. The large rendering cache, downloaded Blender application, provider transcripts and native screenshots are not production assets or repository additions. The temporary Blender volume was unmounted after rendering.

Reference access gap: the owner’s Visionlearning example URL returned “restricted URL” through the web tool. No claim is made to have inspected or reproduced its quiz contents.
