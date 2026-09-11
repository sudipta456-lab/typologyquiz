# Editorial publication controls

New editions begin as JSON files outside `content/published/`. Candidates must use a series listed in `content/publication-policy.json` and omit `legacy`; news editions need at least eight questions. Choice, image-choice, order, and match questions can be promoted. Every cited source needs its own evidence row with retrieval timestamp, supporting fact, and a `pass` verdict. News always requires real source-publication and event dates. A non-news evergreen reference may explicitly use `null` for both dates only with `dateContext: "evergreen"` and substantive notes explaining the undated source. Never invent dates. The named reviewer must differ from the drafter.

The evidence contract is:

```ts
type EvidenceFile = {
  editionId: string; version: number; drafter: string; reviewer: string;
  reviewedAt: string; // RFC 3339 with timezone
  questions: Array<{
    questionId: string; sourceUrl: string;
    sourcePublishedAt: string | null; eventDate: string | null;
    dateContext?: "evergreen"; retrievedAt: string; supportingFact: string;
    verdict: "pass" | "fail"; notes?: string;
  }>;
  media?: Array<{
    questionId: string; optionId: string; sourceUrl: string; licenseUrl: string;
    permittedUse: string; modificationNote: string; verdict: "pass" | "fail";
  }>;
};
```

Every image option requires a matching `media` rights review whose source and licence URLs exactly match the edition. `permittedUse` records the reviewer’s actual rights basis and `modificationNote` records changes or `none`. Original site SVGs still require an honest credits URL and a basis such as “Original TypologyQuiz artwork; used on this site.” A URL or licence label does not authorize use by itself.

Generate the readable review artifact and its machine-readable companion:

```powershell
npm run editorial:review -- content/drafts/<edition>.json content/drafts/<edition>.evidence.json
```

The command writes `.agents/reviews/newsquiz/<id>-v<version>.review.json` and `.md`. The readable file shows every prompt, option/item/column ID and label, complete answer key, explanation, source fact, and image provenance/rights review. It binds the complete edition and evidence, plus each question and its source/media evidence, to SHA-256 hashes. Hashes identify reviewed bytes; they do not prove that a fact is true.

Human approval is an external operator attestation, not an authentication mechanism. The tooling never creates it. Copy the review JSON to a separate approval file and add these fields without changing the review fields:

```json
{
  "approvedBy": "operator name",
  "approvedAt": "2026-09-10T18:00:00.000Z",
  "attestation": "I approve this exact reviewed edition for publication."
}
```

Promote only after that review:

```powershell
npm run editorial:promote -- .agents/reviews/newsquiz/<review>.review.json <external-approval>.json
```

Promotion re-reads all inputs, rejects changed or incomplete material, and creates a new immutable directory under `content/published/<series>/<edition>/v<version>/`. It refuses to replace an existing identity/version. `content/published/index.json` records the edition, evidence, review, and approval hashes. The application registry validates all of them while loading, so adding or editing a manifest entry cannot bypass the gate.

Validate the published registry alone, or validate a draft pair as well:

```powershell
npm run validate:editorial
npm run validate:editorial -- content/drafts/<edition>.json content/drafts/<edition>.evidence.json
```

The two September 10 editions are frozen legacy snapshots with locked content hashes. Their manifest entries explicitly say `legacy`; they do not contain fabricated approvals and this process makes no claim that their facts were rechecked.
