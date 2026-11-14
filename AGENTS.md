<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


## TypologyQuiz project boundary

This project is typologyquiz.com at /Users/sudiptasarkar/dev/typologyquiz. Work only in a fresh chat attached to this project. Never import SignalEHR project instructions, memories, configuration, credentials, or code. Read .agents/HANDOFF.md first for current work. Keep durable memory under typologyquiz namespaces. The operator authorizes autonomous routine planning, implementation, testing, and scope decisions; do not request repeated scope approvals. Initial news editions still require the editorial review defined in docs/newsquiz/PLAYBOOK.md. Use the project-local skills under .agents/skills.

On this Mac, run project commands through `./scripts/mac-run.sh`, for example `./scripts/mac-run.sh npm run verify`. This selects the isolated Node 24 runtime without changing the global Node installation. The current Mac migration status at the top of .agents/HANDOFF.md supersedes old Windows checkpoints.

## Model routing preference

Use GPT-5.6 Luna for lightweight triage, task distribution, repository reconnaissance, and bounded routine work. Use the Fable model only for complex architecture or planning when that depth is needed. Use Claude Code Sonnet for ordinary implementation and Claude Code Opus for code review, security review, and high-risk verification. Route image and video generation to Codex ImageGen or Grok, choosing Codex ImageGen for original raster assets and Grok when its visual/video workflow is the better fit. Use Grok for targeted second opinions or research after Claude when it adds value. Use the OpenCode Go routing below for the quiz and search visibility scopes; elsewhere it remains available for economical bulk work. Minimize GPT usage outside Luna triage and use a higher-cost GPT model only when an external provider is unavailable or the task explicitly requires it.

The authenticated command paths are `claude -p --model sonnet` for implementation, `claude -p --model opus --permission-mode plan` for review, and `/Users/sudiptasarkar/.opencode/bin/opencode run -m opencode-go/grok-4.6` for a Grok pass. Check `claude auth status` and `opencode auth list` before using a provider; never print credentials or API-key values.

## OpenCode Go for quiz and search visibility work

The owner prefers the existing OpenCode Go subscription for new quiz research synthesis, duplicate checks, draft generation and routine integration, and for SEO and AI search audits and implementation. Use `./scripts/mac-run.sh opencode run -m opencode-go/gpt-6-luna "<bounded project task>"` from the isolated TypologyQuiz worktree. Give the model only relevant public sources and project material. Verify primary sources and distinguish observed demand from editorial ideas; for search work, verify the rendered pages, internal links, canonical URLs and discovery artifacts before claiming an improvement. Do not infer rankings, indexing, AI citations or traffic gains from a build.

Confirm a successful model response before counting work as done through Go. An expired key is a provider-wide blocker: do not cycle through Go models, log credentials, or change billing or enable overages. While Go is unavailable, report a changed blocker once and use the authorized fallback. For the daily five publisher, that is the authenticated GPT subscription for authoring and a fresh independent GPT session for content and code review; the independent review remains separate when Go authors. For other work retain the existing provider routing. Keep verification, release controls, privacy and the no-ads direction intact. This preference does not change provider routing for media, outreach or news editions.
