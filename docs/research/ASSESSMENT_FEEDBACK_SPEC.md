# Assessment and feedback system

Status: proposed implementation contract, September 11, 2026. No routes, collections, recruitment or scoring changes are activated by this document. Scientific rationale and limitations are in [Better personality tests and more useful feedback](ASSESSMENT_QUALITY_REVIEW_2026.md).

## First release

Deliver one source-faithful Big Five assessment with clear evidence labels and a private result. Add voluntary, separately consented research participation after the data lifecycle is implemented and verified. Preserve existing entertainment quizzes with accurate purpose labels. Complete the claim and norm audit before adding new “validated” assessments.

The first version should use deterministic source scoring. An IRT model, adaptive item selection, AI scoring, observer module and personalized activity recommender are later candidates requiring their own evidence. Report-writing assistance may use AI during authoring; released explanations remain reviewed and versioned.

## Ownership and proposed touch areas

| Scope | Proposed work |
|---|---|
| quiz-engine | Instrument metadata, immutable scoring manifests, per-instrument anchors, response validation and missingness, evidence eligibility rules. |
| site-tooling | Credits correction, evidence cards, readable result scales, voluntary feedback controls and research information. |
| social | Versioned share payload, historical-result handling, optional follow-up preferences; no research answers in ordinary analytics. |
| worker-services | Separate consented research ingest, access control, duplicate protection, withdrawals/deletion and aggregate exports. |

Implementation is cross-cutting and should be split into bounded changes with explicit interfaces. Existing static site hosting and Worker infrastructure can support the design; this document does not select a database, provision services or authorize a new third-party data processor.

## Versioned contracts

An instrument manifest should contain the following fields. Names below are proposals, not existing exported types.

| Record | Required fields and rules |
|---|---|
| Instrument | `instrumentId`, `instrumentVersion`, `purpose`, `intendedPopulation`, `language`, `constructMap`, `instructions`, `responseOptions`, `itemOrderPolicy`, `sourceInstrument`, `rightsRecord`, `adaptationNotes`, `evidenceStatus`. |
| Item | `itemId`, `itemVersion`, `text`, `construct`, `sourceItemReference`, `scoringDirection`, `responseScaleId`, `reviewStatus`. Preserve old item text when editing; never reuse an ID/version for different wording. |
| Scoring manifest | `scoringVersion`, `algorithm`, `key`, `missingnessPolicy`, `displayTransform`, `eligibleNormVersion`, optional `calibrationVersion`, `contentHash`, `reviewRecord`. |
| Result | `resultId`, instrument/item/scoring/report versions, `completedAt`, answered/missing counts, dimension scores, quality status, uncertainty provenance, optional norm reference. Raw answers need not be in the shareable result. |
| Norm set | `normId`, version, instrument/scale compatibility, recruitment population, unique N, collection dates, weighting, exclusion policy, distribution method, uncertainty, review record. No default means/SDs masquerading as observations. |
| Evidence record | Source DOI/URL, study design, population, exact form/language, sample sizes, dates, methods, estimates/intervals, limits, independence from development data, reviewer and review date. |
| Research consent | Random participant ID, consent text/version, explicit choices, timestamp, eligible study, withdrawal token hash. Contact information lives separately if the person requests reminders. |
| Feedback | Instrument/scoring/report/item references, optional fit/clarity/usefulness ratings, reason codes, optional comment, consent reference, timestamp. No automatic “correct type” label. |

`purpose` should distinguish `personality-measure`, `reflection`, `entertainment`, and specialist purposes outside this pilot. `evidenceStatus` should describe a claim precisely: `not-evaluated`, `source-evidence-only`, `pilot`, or `evaluated-for-stated-use`. Avoid a universal certified/uncertified badge. A modification may retain source evidence while needing new implementation evidence.

## Scoring and interpretation rules

Validate response values and the expected item set before computing a score. Do not silently clip an invalid value, treat a missing answer as neutral, or accept a client-supplied research score without checking its manifest. Preserve skip and not-applicable as distinct missing states where the instrument permits them.

Keep canonical scores distinct from display transformations. For a source mean on a 1–5 scale, a linear display such as `25 * (mean - 1)` is simply a rescaling; it creates neither a percentile nor a probability. Explain that distinction in result copy. Use the instrument's documented reverse key and minimum item requirements. If there is no suitable source missingness policy, freeze a conservative proposed policy and validate it before presenting affected scores.

Only show a percentile when an approved, compatible norm set exists. A website sample, if used, must be labelled as that sample rather than “people worldwide.” Do not assume normality for bounded/discrete scores. Uncertainty about the individual score and uncertainty about the estimated percentile are different quantities; document both when estimated. If either is unknown, say so.

The Mini-IPIP emotional axis needs one consistent direction. If the displayed construct is emotional reactivity, higher canonical neuroticism should mean more reported reactivity. If emotional stability is chosen instead, reverse the score, endpoints and all interpretation paths consistently. Version the reporting change; do not reinterpret legacy payloads without knowing the original direction.

### Historical results

Existing personality results identify a slug and timestamp but do not fully identify the administered instrument. Give these a distinct `legacy-unversioned` status; do not invent their historical item version. Preserve saved scores, show that current interpretations may differ, and suppress unsupported percentile presentation even if an old URL embeds a percentile. Never claim measured personal change by comparing incompatible versions.

New results should resolve their report using the frozen manifest, not the latest registry entry. An updated instrument generates a new result. Comparisons require a documented bridge or matching compatible versions. Version changes to wording, anchors, keys, norms and explanatory text separately.

## Mobile experience

The landing page should state the task in one sentence, the approximate burden, the intended use and a short evidence label. Keep the logo and brand palette. Use colour to aid navigation, with readable text and explicit selection states. Show full response anchors wherever ambiguity would change meaning.

During the test, keep one question or a small comprehensible group on screen; test both layouts rather than assuming one is universally superior. Provide visible progress, Back, pause/resume and clear missing-answer handling. Personality assessment should not reward speed. Avoid changing established item order merely for visual variety; order experiments require their own versions.

The result begins with the dimensions and two or three concrete statements tied to them. Then offer an optional activity, a concise evidence explanation and private saving/sharing. Make “This doesn't fit” as easy to find as positive feedback. Feedback is skippable and does not unlock the result.

Acceptance checks include keyboard and screen-reader use, narrow phone layouts, text enlargement, full-anchor visibility, accidental-tap recovery, pause/reload, unanswered items and historically shared results. Drag interactions must have tap/keyboard alternatives. Visual comfort is necessary, but does not substitute for measurement evaluation.

## Research data lifecycle

Ordinary completion remains usable without research participation. Before the first research upload, show the consent choice and stored fields. Declining must result in no assessment responses reaching the research endpoint. The existing statement that test responses are not stored server-side must be updated accurately before any optional storage launches.

Use a random study participant ID and separate contact records. Retests can be linked pseudonymously; do not call linkable records anonymous. Do not send raw answers, trait profiles, comments, observer relationships or withdrawal tokens to GA4, share URLs, logs or an LLM. Infrastructure may process IP addresses for request delivery/security; document and minimize retention rather than promising that no IP is ever processed.

The proposed initial retention policy is a twelve-month maximum for linkable research responses, subject to a finalized study protocol; delete reminder contact information within thirty days after the final requested follow-up. These are product proposals, not legal deadlines. Participants need a usable withdrawal/deletion mechanism without being forced to create an account. Explain which already-published, genuinely non-identifiable aggregate results cannot be withdrawn.

Server records need access control, encryption, bounded payloads, rate limiting, idempotent writes and manifest validation. Handle anonymous spam without treating duplicate browser activity as conclusive proof of duplicate people. A deduplication policy must specify its limits and avoid intrusive fingerprinting.

Keep free-text comments optional, bounded and explicitly marked “Please avoid names or other personal details.” Review comments in restricted tools. Never reuse research feedback as a testimonial without separate permission. Public reports use sufficiently aggregated statistics; low subgroup counts remain suppressed or described qualitatively.

## Validation and experiments

### Measurement study

Preregister intended constructs, inclusion/exclusion criteria, primary hypotheses, estimators, missing-data handling, sample-size justification and planned subgroup analyses. Conduct cognitive interviews before quantitative calibration. Recruit beyond existing typology enthusiasts, reporting the population actually reached.

Separate development, tuning and final evaluation by participant. Nested item sets must not be treated as independent validation against their own overlapping parent items; report overlap and include an external comparison or prospective cohort. Keep a stable-version retest cohort separate from people receiving a change intervention. Record relevant context changes and report both correlation and agreement, with intervals.

For IRT candidates, specify the model and estimator, test dimensionality/local dependence and category behaviour, quantify parameter uncertainty and conditional error, and compare with source sum/mean scoring. Adaptive candidates need content coverage, stopping rules, exposure limits and prospective checks. A complex method ships only if its measured advantage warrants the added assumptions and maintenance.

Group evaluation asks whether the same score has comparable meaning, not whether group means happen to be equal. Assess differential item functioning and measurement invariance for prespecified groups with sufficient samples. A small or missing subgroup cannot receive a blanket “fair” label. Translation and major accessibility changes need appropriate equivalence work.

### Feedback and outcome study

Keep four dashboard sections: measurement evidence, explanation quality, practical outcomes and product engagement. Give each metric its denominator and confidence interval where appropriate. Positive fit ratings are not the denominator for an accuracy claim.

The first outcome experiment compares the standard report with the same report plus one optional practical activity. Freeze the report and activity text, randomize the consenting participant once, and give both groups the same follow-up invitations. Record baseline behaviour, day-14 behaviour and six-week follow-up; retain original group assignment in analysis.

Choose the primary outcome, smallest worthwhile effect and statistical power before calculating sample size. Report all randomized participants, analysed participants, exclusions and missingness by arm. A later tailored-versus-generic activity experiment is needed to isolate the contribution of personality tailoring. Do not draw that conclusion from the first two-arm package comparison.

Feedback flags create review tickets, not online scoring updates. A reviewer can propose a clearer item/report, record the rationale and test a candidate version. Protect the final evaluation cohort from repeated tuning. Publish null results and failed candidates when they materially qualify product claims.

## Release checks

- Source and rights records resolve for every instrument; intended use and evidence labels are accurate.
- Scoring fixtures cover reverse keys, invalid/missing input, extremes and legacy results. The same manifest and answers reproduce the same canonical scores.
- No unsourced rank, diagnosis, maturity label or unsupported compatibility claim remains in relevant result/share paths.
- Declined and withdrawn consent, retry/duplicate submission, deletion, log redaction and unauthorized access are exercised.
- New collection is described accurately in the privacy notice and happens only after consent; reminders have their own choice.
- Actual sample, error estimates, limits and review evidence match the released version. No badge is awarded just for reaching an arbitrary response count.
- Run existing project verification and the full build sequentially, then check the real mobile flow. Disable research ingest independently if a problem occurs; ordinary local results should remain usable.

## Next bounded implementation

Start with the claims-and-interpretation correction: credits, unsupported percentile display and emotional-axis direction, including legacy share paths. Then add immutable instrument metadata and per-instrument response anchors. Pilot consent and collection come after those foundations. Recruitment, published scientific claims and adaptive scoring depend on evidence that does not yet exist.
