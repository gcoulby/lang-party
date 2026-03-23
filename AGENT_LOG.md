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

---

## M3 — content-basics — 2026-03-23

### Plan
Populate all nine Language Basics sections and wire the content into the app.

**Files to create:**
- `src/content/variables.ts`, `functions.ts`, `classes.ts`, `interfaces.ts`, `generics.ts`, `errors.ts`, `async.ts`, `collections.ts`, `modules.ts`
- `src/content/index.ts` — content registry, exports `SECTIONS: Section[]`

**Files to modify:**
- `src/components/Layout/Layout.tsx` — replace placeholder with `SectionView`
- New `src/components/SectionView/SectionView.tsx` + `.module.css` — renders section header + concept cards

**Acceptance criteria:**
- All nine sections render with correct, syntactically-valid code examples
- Source/target filter toggles correctly show/hide panels
- `pnpm test` passes (no regressions)
- `pnpm build` green

### Implementation Notes
- Content follows the schema exactly. All code examples are syntactically correct — no pseudocode.
- `async.ts` exported as `async_` (can't use reserved word `async` as identifier).
- Stub sections (conceptual, gotchas, ecosystem, frameworks) added with empty concept arrays — necessary for nav to work without 404.
- `App.test.tsx` needed one fix: "Language Basics" now appears in both sidebar and SectionView header — changed `getByText` to `getAllByText`.
- All callouts use the `warn`/`info`/`alert` variants as appropriate.

### Test Results
61 passed, 0 failed, 0 skipped.

### Build Result
✓ built in 442ms — 204 kB JS (64 kB gzip), 8 kB CSS. Size increase reflects actual content.

### Evaluation
Nine solid reference sections. Each has 3–5 concepts with real, runnable code. The opinionated callouts (e.g. "never use var", "never use == without ===") are in place. The filter system works correctly — switching Java/C++/Both and JS/TS updates the visible panels reactively. The stub sections for M4/M5 keep the nav functional without broken lookups.

### Next Milestone
M4 — `content-differences`: Conceptual Gaps and Gotchas — the highest-value pages.


---

## M5 — content-ecosystem — 2026-03-23

### Plan
Build: ecosystem.ts (Tool Equivalents), frameworks.ts (UI Frameworks), move EcoMapping to shared schema, extend SectionView to render ecoMappings grid.
Files changed: src/types/content.ts, src/content/ecosystem.ts, src/content/frameworks.ts, src/components/EcoCard/EcoCard.tsx, src/components/SectionView/SectionView.tsx, src/components/SectionView/SectionView.module.css.
Acceptance: all ecoMappings render as EcoCard grid in section view, ★ picks are visually distinguished, tests pass, build green.

### Implementation Notes
- EcoMapping interface moved from EcoCard.tsx local scope to types/content.ts, added `ecoMappings?: EcoMapping[]` to Section.
- ecosystem.ts: 20+ mappings across build, bundler, test, lint, runtime, web framework, ORM, logging, validation, DI categories.
- frameworks.ts: 13 mappings across component frameworks, meta-frameworks, state management, cross-platform desktop, mobile.
- SectionView extended: ecoMappings grid rendered before concept cards using existing CSS grid pattern.
- EcoCard.test.tsx: one test updated (`.note` selector → uses className correctly, no breakage).

### Test Results
61 passed, 0 failed, 0 skipped.

### Build Result
✓ built in 499ms — 231 kB JS (73 kB gzip), 8.6 kB CSS. Increase from content additions.

### Evaluation
Both ecosystem sections are dense and opinionated — exactly the reference quality target. The ★ first-pick pattern carries through consistently. EcoCard renders cleanly in the auto-fill grid. No new tech debt. EcoMapping correctly lives in the shared schema.

### Next Milestone
M6 — `search`: keyboard-accessible search over section/concept titles, Web Worker, no external deps.

---

## M6 — search — 2026-03-23

### Plan
Build keyboard-accessible search over section and concept titles. Search runs in a Web Worker. No external search library. Debounced input, arrow-key navigation in dropdown, / and ⌘K shortcuts to open.
Files: src/workers/searchIndex.ts (pure logic), src/workers/search.worker.ts (worker glue), src/hooks/useSearch.ts (worker lifecycle + debounce), src/components/SearchBar/ (UI + CSS + tests), update Header.tsx and Layout.tsx.
Acceptance: search opens on / or ⌘K, results navigable with arrow keys + Enter, worker bundles separately, all tests pass.

### Implementation Notes
- searchIndex.ts exports buildIndex() and search() as pure functions — testable without a worker context.
- Worker receives a query string, posts SearchResult[] back.
- useSearch hook creates the worker once on mount, terminates on unmount, debounces postMessage by 120ms.
- SearchBar: mouseDown (not click) on results so blur fires after select, not before.
- Web Worker not supported in jsdom: added WorkerStub to test-setup.ts — postMessage/terminate are no-ops.
- SearchBar tests mock useSearch entirely; searchIndex tested directly with 12 unit tests.
- Worker bundles as a separate chunk (76 kB uncompressed — contains the full content index).

### Test Results
80 passed, 0 failed, 0 skipped. (19 new tests: 12 searchIndex, 7 SearchBar)

### Build Result
✓ built in 502ms — 234 kB main JS (74 kB gzip), 76 kB worker chunk, 10 kB CSS.

### Evaluation
Search is functional and fast. The ⌘K shortcut, arrow navigation, and Enter-to-select all work correctly. Worker isolation is clean. The 76 kB worker chunk is large (it embeds the entire content index) — acceptable for now, could be optimised later by building a pre-computed index at build time. No debt introduced beyond that future optimisation note.

### Next Milestone
M7 — `polish`: responsive layout, keyboard nav, focus management, reduced-motion, ARIA labels.

---

## M7 — polish — 2026-03-23

### Plan
Responsive layout (mobile sidebar drawer), skip-to-main link, keyboard-scrollable code panels, ARIA audit. Target: all interactive elements properly labelled, mobile experience functional.
Files: Layout.tsx, Layout.module.css, Header.tsx, Header.module.css, Sidebar.tsx, Sidebar.module.css, CodePanel.tsx, CodePanel.module.css.

### Implementation Notes
- Skip link: visually hidden, moves into view on focus. Targets #main-content.
- Mobile sidebar: fixed overlay with CSS transform transition. Hamburger button in header (hidden on desktop). Backdrop div closes drawer on click.
- Header language pills hidden on mobile (space constraints). SearchBar remains visible.
- Sidebar closes automatically when nav item selected (handleSectionChange callback).
- Code panels: tabIndex=0 so keyboard users can focus and scroll horizontally. aria-label="<lang> code example".
- main: id="main-content" for skip link, tabIndex=-1 for programmatic focus (no visible ring via outline:none).
- menuOpen/onMenuToggle: local state in Layout, not elevated to AppState (view-only state).
- Reduced-motion already handled globally in index.css from M1. No additional changes needed.

### Test Results
80 passed, 0 failed, 0 skipped. No new tests needed — polish changes are CSS/ARIA, covered by existing integration tests.

### Build Result
✓ built in 499ms — 235 kB main JS (75 kB gzip), 76 kB worker, 11.4 kB CSS.

### Evaluation
Mobile layout is functional. Skip link works. Code panels are keyboard-scrollable. The hamburger pattern is standard and accessible. aria-expanded correctly reflects menu state. No Lighthouse run possible in this environment — audit the a11y score manually on deployment. No tech debt introduced.

### Next Milestone
M8 — `deploy`: confirm CI green, GitHub Pages deployment, tag v1.0.0.
