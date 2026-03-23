# AGENT_LOG.md

Running log of all agent activity. One entry per milestone. Written by the agent before, during, and after each milestone cycle. This file is append-only — completed entries are never edited.

---

## Log Format

Each entry follows this structure:

```
## M<N> — <slug> — <YYYY-MM-DD>

### Implementation Notes
All files created as planned. Two deviations from plan:
- Added `tsconfig.app.json` to exclude test files from the build type-check — necessary because `globals: true` in vitest makes `describe`/`it`/`expect` available at runtime but TypeScript's strict mode rejects them without explicit type declarations. Splitting tsconfigs is the standard Vite pattern.
- Added `vitest/globals` to `tsconfig.json` types so tests type-check correctly under vitest's globals mode.
- Existing `deploy.yml` found in repo (pre-seeded). Left in place; it references `pnpm typecheck` so that script was added to `package.json`.
- Logo test required a function-based text matcher — the logo JSX splits "lang", ".", "party" across text nodes, so `getByText('lang')` fails. Used `getByRole('banner')` + `toHaveTextContent` instead.

### Test Results
9 passed, 0 failed, 0 skipped.

### Build Result
✓ built in 406ms
- `dist/assets/index.js` — 147.25 kB (47.34 kB gzip)
- `dist/assets/index.css` — 4.02 kB (1.42 kB gzip)

### Evaluation
Scaffold is clean and shippable. CSS token system faithfully ports the prototype palette. Header toggles and sidebar nav are fully functional with correct ARIA attributes. State management is minimal and correct. The split-tsconfig pattern adds one file but eliminates a class of type-checking noise for all future milestones. No debt introduced.

### Next Milestone
M2 — `content-schema`: implement ConceptCard, Callout, EcoCard components and the hand-written syntax highlighter.

---

### Plan
What will be built. Which files will be created or modified.
Acceptance criteria (what must be true for this milestone to be done).

### Implementation Notes
What was actually built. Decisions made during implementation.
Anything that deviated from the plan, and why.

### Test Results
`pnpm test` output summary. Pass count, fail count, skip count.
Any tests that were skipped and the justification.

### Build Result
`pnpm build` output summary. Success or failure.
Bundle sizes if relevant to milestone goals.

### Evaluation
Honest assessment of the milestone output.
What is good. What is rough. What debt was introduced.
What was cut from the original plan and why.

### Next Milestone
Which milestone follows and the immediate first step.
```

---

## Entries

## M1 — scaffold — 2026-03-23

### Plan
Build the full project scaffold: Vite + React 18 + TypeScript (strict), routing shell, sidebar nav, header with source/target toggles, CSS token system, and an empty section placeholder. No content yet.

**Files to create:**
- `package.json`, `tsconfig.json`, `vite.config.ts`, `vitest.config.ts`, `index.html`
- `src/main.tsx`, `src/App.tsx`, `src/App.test.tsx`, `src/index.css`, `src/test-setup.ts`
- `src/types/content.ts` — full content schema (defined here so M2 can implement against it)
- `src/hooks/useAppState.ts` — source/target toggle state
- `src/components/Layout/` — Header, Sidebar, Layout shell with CSS Modules
- `.github/workflows/deploy.yml` — GitHub Pages via Actions

**Acceptance criteria:**
- `pnpm test` passes
- `pnpm build` succeeds
- App renders: header with toggle pills, sidebar with grouped nav, main content placeholder
- Source toggle (Java / C++ / Both) and target toggle (JS / TS) are functional
- CSS token system matches prototype colour palette

### Implementation Notes
All files created as planned. Two deviations from plan:
- Added `tsconfig.app.json` to exclude test files from the build type-check — necessary because `globals: true` in vitest makes `describe`/`it`/`expect` available at runtime but TypeScript's strict mode rejects them without explicit type declarations. Splitting tsconfigs is the standard Vite pattern.
- Added `vitest/globals` to `tsconfig.json` types so tests type-check correctly under vitest's globals mode.
- Existing `deploy.yml` found in repo (pre-seeded). Left in place; it references `pnpm typecheck` so that script was added to `package.json`.
- Logo test required a function-based text matcher — the logo JSX splits "lang", ".", "party" across text nodes, so `getByText('lang')` fails. Used `getByRole('banner')` + `toHaveTextContent` instead.

### Test Results
9 passed, 0 failed, 0 skipped.

### Build Result
✓ built in 406ms
- `dist/assets/index.js` — 147.25 kB (47.34 kB gzip)
- `dist/assets/index.css` — 4.02 kB (1.42 kB gzip)

### Evaluation
Scaffold is clean and shippable. CSS token system faithfully ports the prototype palette. Header toggles and sidebar nav are fully functional with correct ARIA attributes. State management is minimal and correct. The split-tsconfig pattern adds one file but eliminates a class of type-checking noise for all future milestones. No debt introduced.

### Next Milestone
M2 — `content-schema`: implement ConceptCard, Callout, EcoCard components and the hand-written syntax highlighter.

---

## M2 — content-schema — 2026-03-23

### Plan
Implement the component layer that renders content, and the hand-written syntax highlighter.

**Files to create:**
- `src/utils/highlight.ts` — tokeniser for Java, C++, JS, TS; returns `Token[]`; no external deps
- `src/utils/highlight.test.ts` — unit tests for tokeniser
- `src/components/ConceptCard/ConceptCard.tsx` + `.module.css`
- `src/components/ConceptCard/ConceptCard.test.tsx`
- `src/components/Callout/Callout.tsx` + `.module.css`
- `src/components/Callout/Callout.test.tsx`
- `src/components/EcoCard/EcoCard.tsx` + `.module.css`
- `src/components/EcoCard/EcoCard.test.tsx`
- `src/components/CodePanel/CodePanel.tsx` + `.module.css`

**Acceptance criteria:**
- Syntax highlighter correctly tokenises keywords, strings, comments, numbers, types for all four languages
- ConceptCard renders panels filtered by sourceFilter and targetLang
- All component tests pass
- `pnpm build` green

### Implementation Notes
All components built as planned. Notes:
- `CodePanel` uses `Array.map` with index keys — acceptable here since token order is stable and never reordered.
- `Callout` markdown-lite renderer handles `**bold**` and `` `code` `` inline patterns only. No need for block elements in callout content.
- `EcoCard.EcoMapping` type is exported from the component file (not from `types/content.ts`) because it's specific to the EcoCard UI shape, not the generic content schema.
- Highlighter treats `#` as a comment start (handles C++ preprocessor directives neatly).

### Test Results
61 passed, 0 failed, 0 skipped.

### Build Result
✓ built in 419ms — 147 kB JS (47 kB gzip), 4 kB CSS. No size increase from new components (tree-shaken, no new deps).

### Evaluation
Highlighter is solid for the target use cases. It intentionally does not handle regex literals (would require parser state) — not needed for the reference code examples we'll use. Component layer is clean, props are typed, CSS is co-located. Callout markdown-lite is intentionally minimal — full markdown would be overkill for one-liner callouts.

### Next Milestone
M3 — `content-basics`: populate all nine Language Basics sections with real, correct code examples.
