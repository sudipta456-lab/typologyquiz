# Logic & Wordplay: 25 new quizzes

[Catalog index](README.md) · [Delivery plan](../QUIZ_EXPANSION_250_PLAN_2026-10-18.md) · [Evidence ledger](SOURCES.md)

Proposed concepts, October 18, 2026. All require newly authored question banks and separate slugs. Seeds illustrate tasks; they are not fact-checked answer keys. Wave A = category pilot; B = next four; C = next ten; D = final ten. Dependencies override wave priority. Most target 3–6 minutes; actual durations require playtesting. Research references support rationale, not factual answers.

<a id="lw-01"></a>

## LW-01 · The Elevator Schedule

**Wave A · Type: logic · evergreen · Build: base**

Arrange one elevator’s stop sequence using visible rules, then repair a schedule that violates a constraint.

**Rounds:** 4 schedules: order stop cards using all visible rules → 2 grids: reorder a broken schedule to satisfy all rules.

**Example task:** The lift visits Lobby, Mailroom, Lab and Roof once. Lobby is first, Mailroom precedes Lab, and Roof is last. Order the stops.

**Result:** Raw score of grids solved, plus a replay of the one rule that broke your first order.

**Audience:** Casual puzzle fans, commuters, teens and adults. **Proposed slug:** `elevator-schedule-logic`.

**Evidence:** [E00](SOURCES.md).

**Production:** Solver must prove exactly one valid order per grid. Second human reviewer replays every grid; reject any rule readable two ways. Existing move-button ordering is enough; dragging is optional and must retain alternatives.

<a id="lw-02"></a>

## LW-02 · One Rule Is Wrong

**Wave B · Type: logic · experimental · Build: base**

Find the one false rule in a small set, then check that removing it leaves one consistent solution.

**Rounds:** 5 puzzles: read 5 rules and choose the contradicting one → 2 puzzles: pick the rule whose removal gives one unique solution.

**Example task:** Exactly one rule is false: A precedes B; B precedes C; A precedes C; C precedes A; D is last. Which rule must go?

**Result:** Raw score and the contradiction chain explained for each missed puzzle.

**Audience:** Rule-checkers, logic hobbyists, students. **Proposed slug:** `one-rule-is-wrong`.

**Evidence:** [X00](SOURCES.md).

**Production:** Solver must confirm exactly one removable rule restores consistency or uniqueness. Human review checks no rule has ambiguous wording. Validate that exactly one removable rule restores consistency and a unique solution.

<a id="lw-03"></a>

## LW-03 · A Message With Missing Punctuation

**Wave B · Type: logic · evergreen · Build: base**

A text arrives with every comma and period stripped; choose the punctuation that makes only one reading possible.

**Rounds:** 6 messages: choose the punctuation placement matching a stated fact → 2 messages: pick the one fix that satisfies two facts.

**Example task:** Sam is being asked to call the cook. Add one comma to “Call the cook Sam” without changing any words.

**Result:** Raw score with each message shown in both readings and the deciding fact.

**Audience:** Texters, editors, word-puzzle fans. **Proposed slug:** `missing-punctuation-message`.

**Evidence:** [E00](SOURCES.md).

**Production:** Human editor verifies each reading is grammatical and only one fits the fact. English-only; avoid regional punctuation disputes.

<a id="lw-04"></a>

## LW-04 · The Two-Way Clue

**Wave B · Type: logic · evergreen · Build: base**

Each clue has a definition and a letter rule; only one word fits both, and decoys fit just one.

**Rounds:** 6 clues: choose the word satisfying definition and letter rule → 2 clues: reject the decoy that fits only one half.

**Example task:** Definition: a place to borrow books. Letter rule: seven letters, second letter I. Which listed word satisfies both?

**Result:** Raw score plus which half of the clue tripped you up most.

**Audience:** Crossword and word-game players. **Proposed slug:** `two-way-clue`.

**Evidence:** [E00](SOURCES.md).

**Production:** Dictionary-check every answer and decoy by hand. Solver confirms single fit among options; exclude words with disputed spelling.

<a id="lw-05"></a>

## LW-05 · The Helpful Red Herring

**Wave B · Type: logic · evergreen · Build: base**

One clue looks irrelevant, yet knowing why it's irrelevant is what cracks the puzzle.

**Rounds:** 5 mini-cases: pick the clue that can be ignored → 3 mini-cases: solve using only the remaining clues.

**Example task:** The bag is in locker 2 or 3. It is not in 2. Its owner likes red. Which clue is unnecessary for finding the locker?

**Result:** Raw score and a note showing which clue was the herring each time.

**Audience:** Mystery fans, teens and adults. **Proposed slug:** `helpful-red-herring`.

**Evidence:** [E00](SOURCES.md).

**Production:** Solver must show the herring is removable without changing the unique answer. Reviewer checks that no 'irrelevant' clue secretly matters.

<a id="lw-06"></a>

## LW-06 · The Three-Layer Alibi

**Wave C · Type: logic · experimental · Build: layers**

Match suspects to times, times to places, and places to witnesses, then spot the one alibi that cracks.

**Rounds:** 2 grids: match suspects to time slots → 2 grids: link each slot to a place; several slots may share a place → 2 grids: assign witnesses to places, one place to many witnesses.

**Example task:** Mara and Theo were both in the archive, but only one was seen at noon. Link slots, places, and witnesses.

**Result:** Raw score across layers plus the single broken alibi revealed.

**Audience:** Detective-puzzle fans, grid-puzzle beginners. **Proposed slug:** `three-layer-alibi`.

**Evidence:** [X00](SOURCES.md).

**Production:** Needs many-to-one and partial-credit matching. Solver proves unique full solution per grid; human reviewer checks for accidental extra solutions.

<a id="lw-07"></a>

## LW-07 · The Museum Label Mix-Up

**Wave C · Type: logic · experimental · Build: layers**

Labels fell off exhibits; reassign them using visible hints about size, order, and room, with some labels sharing a case.

**Rounds:** 3 rooms: match labels to cases, several labels per case → 3 rooms: use room-order hints to fix swapped pairs.

**Example task:** Case A holds the two smallest items. The longest label sits beside the quietest room's case. Where does each label go?

**Result:** Raw score and the room map showing correct label placement.

**Audience:** Museum-goers, grid-puzzle fans. **Proposed slug:** `museum-label-mixup`.

**Evidence:** [X00](SOURCES.md).

**Production:** Use invented fictional exhibits, no real artifacts. Solver proves uniqueness; reviewer confirms all hints are objective, not taste-based.

<a id="lw-08"></a>

## LW-08 · Repair the Transit Diagram

**Wave C · Type: logic · experimental · Build: visual**

A tiny fictional metro map has one wrong link; tap it so every stated route works.

**Rounds:** 4 maps: tap the single wrong connection → 2 maps: tap two links to restore every listed route.

**Example task:** The rules require the shortest Pine-to-Quay path to take exactly two edges via Mill. Which extra direct edge violates that requirement?

**Result:** Raw score and the corrected map shown with each route traced.

**Audience:** Transit-map fans, spatial thinkers. **Proposed slug:** `repair-transit-diagram`.

**Evidence:** [X00](SOURCES.md).

**Production:** Needs tappable diagram hotspots plus text alternative. Fictional stations only; solver verifies a unique repair; test keyboard and screen-reader paths.

<a id="lw-09"></a>

## LW-09 · The Awkward Seating Chart

**Wave C · Type: logic · experimental · Build: base**

Arrange named guests in a straight row using precise adjacency rules, then repair a seating conflict.

**Rounds:** 4 seating puzzles: order guests in a row using five explicit rules → 2 tables: fix a chart that breaks one rule.

**Example task:** Five seats in a row: Lee is first and Mo last. Kim, Pat and Jo sit consecutively in that left-to-right order. Place everyone.

**Result:** Raw score and your final chart with every satisfied rule ticked.

**Audience:** Party planners, casual puzzle players. **Proposed slug:** `awkward-seating-chart`.

**Evidence:** [X00](SOURCES.md).

**Production:** Use invented names only. Solver proves one valid seating; human review ensures no rule depends on social stereotypes.

<a id="lw-10"></a>

## LW-10 · Ask One Better Question

**Wave C · Type: logic · experimental · Build: branch**

Find the question that cuts a suspect list most efficiently, then follow the answer to a solution.

**Rounds:** 4 candidate tables: choose the yes/no question minimizing the larger remaining group → 2 branching investigations: use supplied answers to isolate the hidden item.

**Example task:** Eight candidate objects remain. One question divides them 4/4, another 7/1. Which minimizes the worst-case number left?

**Result:** Six deduction decisions and a visible question tree; no intelligence score.

**Audience:** Planners, students, adult puzzle fans. **Proposed slug:** `ask-one-better-question`.

**Evidence:** [X00](SOURCES.md).

**Production:** Explicit worst-case objective and fixed candidate tables. Accept tied optimal questions; verify all branches terminate with enough evidence.

<a id="lw-11"></a>

## LW-11 · The Unreliable Lighthouse Log

**Wave C · Type: logic · experimental · Build: layers**

Three keepers wrote logs, and some lines are false; sort the entries, then the keepers, then find the lamp's true state.

**Rounds:** 2 logs: label each entry true or false → 2 logs: link each keeper to many entries they wrote → 2 logs: deduce the lamp's true state from consistent entries.

**Example task:** Exactly one statement is false: A says the lamp is off; B says it is on; C says it is off. Identify the false statement.

**Result:** Raw score across three sections and the liar-chain explained.

**Audience:** Knights-and-knaves fans, logic students. **Proposed slug:** `unreliable-lighthouse-log`.

**Evidence:** [X00](SOURCES.md).

**Production:** Needs many-to-one entry-to-keeper linking. Solver proves unique truth assignment; human reviewer checks self-reference never creates paradox.

<a id="lw-12"></a>

## LW-12 · Fold, Punch, Unfold

**Wave C · Type: logic · experimental · Build: visual**

Predict where holes land after a paper is folded and punched, then check against the unfolded sheet.

**Rounds:** 4 folds: tap where holes appear after unfolding → 2 folds: choose the fold sequence that produces a shown hole pattern.

**Example task:** A square is folded in half left-to-right, then top-to-bottom, and punched at the lower-right corner. Where are the holes after unfolding?

**Result:** Raw score and an animation-free step diagram of each fold.

**Audience:** Spatial-puzzle fans, students, teens. **Proposed slug:** `fold-punch-unfold`.

**Evidence:** [X00](SOURCES.md).

**Production:** Needs hotspot grid and static diagrams with text descriptions. Solver simulates each fold; reviewer checks accessibility for color-free reading.

<a id="lw-13"></a>

## LW-13 · Homophone Radio Relay

**Wave C · Type: logic · evergreen · Build: audio**

Hear a short relay of sound-alike words and pick the spelling that fits each sentence's meaning.

**Rounds:** 6 clips: hear a sentence and choose the correct spelling → 2 clips: spot the sentence where two spellings both fit.

**Example task:** Clip: 'The knight rode all ___.' Options: night, knight. Choose the spelling that completes the sentence.

**Result:** Raw score plus the sound-alike pairs you mixed up.

**Audience:** Language learners, word-game fans. **Proposed slug:** `homophone-radio-relay`.

**Evidence:** [E00](SOURCES.md).

**Production:** Needs original voice recordings with transcripts. Human check on accent variation; reject pairs that are not homophones in common English varieties.

<a id="lw-14"></a>

## LW-14 · Mirror Sign Reader

**Wave C · Type: logic · experimental · Build: visual**

Signs appear flipped as if seen in a mirror; choose what they really say and where an arrow actually points.

**Rounds:** 4 signs: tap the true reading of a mirrored word → 2 signs: tap the true direction of a flipped arrow.

**Example task:** A mirrored banner shows letters reversed left-to-right. Options: LEVEL, DEIFIED, REVIVER. Which word does it really say?

**Result:** Raw score and each sign shown flipped and corrected.

**Audience:** Visual puzzle fans, teens and adults. **Proposed slug:** `mirror-sign-reader`.

**Evidence:** [X00](SOURCES.md).

**Production:** Needs original sign images with alt text. Solver or script confirms mirror transform per sign; avoid letters ambiguous when flipped.

<a id="lw-15"></a>

## LW-15 · Words Hiding Between Words

**Wave C · Type: logic · evergreen · Build: base**

A sentence hides a word across its spaces; find it using the given length and category hint.

**Rounds:** 6 sentences: choose the hidden word spanning two or more words → 2 sentences: find the hidden word with no hint but length.

**Example task:** Find a six-letter animal spanning words in “We watched a crab bite the rope”: rabbit, badger, or beaver.

**Result:** Raw score with each hidden word highlighted across the sentence.

**Audience:** Word-search and cryptic-clue fans. **Proposed slug:** `words-hiding-between-words`.

**Evidence:** [E00](SOURCES.md).

**Production:** Script plus human check that each sentence hides exactly one valid answer of the stated type. Dictionary-verify every hidden word.

<a id="lw-16"></a>

## LW-16 · Change One Letter, Fix the Sentence

**Wave D · Type: logic · evergreen · Build: base**

Each sentence is nonsense until one letter changes in one word, and only one change works.

**Rounds:** 6 sentences: choose which word needs a one-letter change → 2 sentences: choose the correct replacement letter.

**Example task:** 'The chef served a bowl of hot soap.' Which single-letter change makes sense? Options: soap to soup, hot to hat.

**Result:** Raw score and each sentence before and after the fix.

**Audience:** Word-game fans, editors, students. **Proposed slug:** `one-letter-sentence-fix`.

**Evidence:** [E00](SOURCES.md).

**Production:** Human editor confirms exactly one plausible fix per sentence. Avoid regional spellings; dictionary-check every changed word.

<a id="lw-17"></a>

## LW-17 · Half-Clue Handoff

**Wave D · Type: cooperative · experimental · Build: social**

You and a friend each see half the clues, so talk it through to solve one shared puzzle.

**Rounds:** 3 shared grids: each player sees different rules and picks answers → 2 shared grids: agree on one final order.

**Example task:** Red is not first; green is next to blue; blue is not first. Together, order the three houses.

**Result:** Shared score, and which half-clue each player's clues unlocked.

**Audience:** Friends, couples, classmates. **Proposed slug:** `half-clue-handoff`.

**Evidence:** [X00](SOURCES.md).

**Production:** Needs asynchronous or live pairing with split clue views. Solver proves unique answer only when both halves combined; test solo fallback.

<a id="lw-18"></a>

## LW-18 · Hunch or Proof

**Wave D · Type: hybrid · experimental · Build: preference**

Solve small mysteries and choose how many extra clues to reveal, then see your accuracy and your clue appetite.

**Rounds:** 4 mysteries: pick an answer, choosing to reveal 0, 1, or 2 extra clues → 2 mysteries: decide whether to answer now or reveal another clue.

**Example task:** Three suspects remain after two clues. Reveal a third clue for one point, or answer now? Choose and name the culprit.

**Result:** Accuracy score plus a playful clue-appetite note; no ranking claims.

**Audience:** Detective-game fans, curious adults. **Proposed slug:** `hunch-or-proof`.

**Evidence:** [X00](SOURCES.md).

**Production:** Needs new scoring separating correctness from reveal choices. Present reveal style as playful, not a trait or superior approach; solver confirms unique answers. Requires new preference scoring; never use correct/incorrect credit for taste choices. Store and display knowledge accuracy separately from preference results.

<a id="lw-19"></a>

## LW-19 · The Rule Sorting Machine

**Wave D · Type: logic · experimental · Build: layers**

Sort items through three rule gates, where several items can land in the same bin.

**Rounds:** 3 items: send each through the starts-with rule gate → 3 items: apply the length rule gate, many items per bin → 3 items: apply a combined rule and see the bins.

**Example task:** Vowels mean A, E, I, O, U. First sort by final letter, then length: lake, stone, planet, mountain. Which bins receive them?

**Result:** Raw score across three gates and a bin summary of your sorting.

**Audience:** Rule-based puzzle fans, students. **Proposed slug:** `rule-sorting-machine`.

**Evidence:** [X00](SOURCES.md).

**Production:** Needs many-to-one bin matching with partial credit. Scripted check that every item has one correct bin; reviewer avoids disputed spellings.

<a id="lw-20"></a>

## LW-20 · Build Order: What Comes First?

**Wave D · Type: logic · experimental · Build: sequence**

Order tasks when each one needs others finished first, then fix an order that breaks a prerequisite.

**Rounds:** 3 builds: order 4 tasks by stated prerequisites → 3 builds: find the task that blocks the plan → 2 builds: add one missing step to complete it.

**Example task:** Painting needs sanding done. Sanding needs the frame built. Hanging needs paint dry. Order: build, sand, paint, hang?

**Result:** Raw score and a prerequisite chain for each build.

**Audience:** Planners, DIYers, students. **Proposed slug:** `build-order-prerequisites`.

**Evidence:** [X00](SOURCES.md).

**Production:** Use neutral fictional projects with all prerequisites visible. Solver proves unique order or flags valid alternatives; reviewer rejects hidden domain knowledge. Accept every topological order meeting the stated prerequisites; use a unique-order fixture only when the clues establish one.

<a id="lw-21"></a>

## LW-21 · Double Duty Words

**Wave D · Type: logic · evergreen · Build: base**

One word must complete two different sentences with two different meanings; pick the one that bridges both.

**Rounds:** 6 pairs: choose the word completing both sentences → 2 pairs: reject the decoy that only fits one.

**Example task:** Complete both: “The ___ of the tree” and “I heard the dog ___.” Options: bark, root, leaf.

**Result:** Raw score and both meanings shown for each answer.

**Audience:** Word-game fans, language learners. **Proposed slug:** `double-duty-words`.

**Evidence:** [E00](SOURCES.md).

**Production:** Dictionary-verify both senses for every answer. Reviewer checks decoys fit exactly one sentence and no second bridging word exists.

<a id="lw-22"></a>

## LW-22 · Which Weighing Settles It?

**Wave D · Type: logic · experimental · Build: base**

Use a few scale comparisons to find the heaviest object, with every weighing shown upfront.

**Rounds:** 4 puzzles: read 3 weighings and pick the heaviest item → 2 puzzles: pick the single weighing needed to decide.

**Example task:** A beats B. B equals C. D is lighter than C. Which item is heaviest?

**Result:** Raw score and the weighing chain for each puzzle.

**Audience:** Logic-puzzle fans, students, teens. **Proposed slug:** `which-weighing-settles-it`.

**Evidence:** [X00](SOURCES.md).

**Production:** Solver proves unique answer from shown comparisons. Reviewer checks no hidden assumptions; use abstract objects and avoid unit conventions.

<a id="lw-23"></a>

## LW-23 · Guess the Gatekeeper's Rule

**Wave D · Type: logic · experimental · Build: base**

A gatekeeper accepts some words and rejects others; deduce the hidden rule from examples.

**Rounds:** 5 gates: see accepted and rejected examples, choose the rule → 3 gates: pick the next word the gate will accept.

**Example task:** Accepted: level, noon, kayak. Rejected: house, tree. Which rule fits? Options: palindromes, five letters, contains a vowel pair.

**Result:** Raw score and each rule shown with its full accept/reject list.

**Audience:** Pattern-seekers, puzzle fans. **Proposed slug:** `gatekeepers-rule`.

**Evidence:** [X00](SOURCES.md).

**Production:** Solver must check exactly one offered rule fits all examples. Human review rejects rules with subjective membership.

<a id="lw-24"></a>

## LW-24 · Read the Fine Print Conditionals

**Wave D · Type: logic · evergreen · Build: layers**

Match 'if', 'only if', and 'unless' statements to the situations they allow or forbid.

**Rounds:** 3 notices: mark situations as violating, satisfying, or not decided by the stated condition → 3 implication checks: choose what the rule does and does not establish.

**Example task:** “Pets allowed only if registered.” An unregistered pet violates this requirement. Does registration alone prove permission, or might other conditions remain?

**Result:** Raw score and each notice rewritten as a plain rule.

**Audience:** Renters, students, adult puzzle fans. **Proposed slug:** `fine-print-conditionals`.

**Evidence:** [E00](SOURCES.md).

**Production:** Needs many-to-one matching with partial credit. Reviewer checks logic wording and avoids legal advice; solver confirms single reading per notice. Distinguish necessary from sufficient conditions; add not-determined answers rather than treating only-if as if-and-only-if.

<a id="lw-25"></a>

## LW-25 · Shift Note Decoder

**Wave D · Type: logic · evergreen · Build: base**

Decode short notes written with a stated letter shift, then use them to answer a small clue.

**Rounds:** 4 notes: pick the decoded word using the stated shift → 2 notes: decode two words to pick the answer.

**Example task:** Shift each letter back by one. Note: 'DBU'. Options: cat, bat, car. Which word was sent?

**Result:** Raw score and each note with its shift table shown.

**Audience:** Cipher-curious teens and adults. **Proposed slug:** `shift-note-decoder`.

**Evidence:** [E00](SOURCES.md).

**Production:** Script verifies every encoding against its answer. Human review confirms shifts are stated clearly and no decoy also decodes validly.
