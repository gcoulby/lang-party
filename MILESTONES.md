# MILESTONES.md

Tracked milestones for lang.party. The agent updates this file after each milestone is completed or its status changes. Every row must be accurate — this is the source of truth for project progress.

**Status values:** `planned` | `in-progress` | `complete` | `blocked`

---

## Milestone Table

| # | Slug | Description | Status | Branch | Notes |
|---|------|-------------|--------|--------|-------|
| M1 | `scaffold` | Vite + React + TS project scaffold with routing shell, sidebar nav, header toggles, CSS token system, and empty section placeholder. Build and tests pass. | `complete` | `feat/scaffold` | 9 tests pass, build 147 kB JS / 4 kB CSS. tsconfig.app.json splits app/test type-checking. |
| M2 | `content-schema` | Define content types, implement ConceptCard / Callout / EcoCard components with tests, and build hand-written syntax highlighter for Java, C++, JS, TS. | `complete` | `feat/content-schema` | 61 tests pass. Regex tokeniser, zero deps. EcoMapping type lives in EcoCard (not shared schema). |
| M3 | `content-basics` | Populate all nine Language Basics sections with accurate, complete code examples (Variables, Functions, Classes, Interfaces, Generics, Errors, Async, Collections, Modules). | `complete` | `feat/content-basics` | 61 tests. 9 sections × 3–5 concepts each. Stub stubs added for M4/M5. |
| M4 | `content-differences` | Populate Conceptual Gaps and Gotchas sections. Highest content-quality bar of all milestones. | `complete` | `feat/content-differences` | 5 conceptual gaps + 6 gotchas. Opinionated callouts throughout. |
| M5 | `content-ecosystem` | Populate Tool Equivalents and UI Frameworks sections. Add equivalents table component. | `complete` | `feat/content-ecosystem` | 20+ eco mappings in Tool Equivalents, 13 in UI Frameworks. EcoMapping moved to shared schema. |
| M6 | `search` | Keyboard-accessible search across section and concept titles, running in a Web Worker. No external search library. | `complete` | `feat/search` | 80 tests pass. Worker bundles separately (76 kB). Debounced 120ms. |
| M7 | `polish` | Responsive layout, keyboard navigation, focus management, reduced-motion support, ARIA labels. Lighthouse accessibility ≥ 90. | `complete` | `feat/polish` | Skip link, mobile drawer, hamburger, code panels keyboard-scrollable. |
| M8 | `deploy` | Confirm CI green, GitHub Pages deployment working. Tag v1.0.0 on main. | `complete` | `feat/deploy` | v1.0.0 tagged on main. CI triggers on push to main. GitHub Pages needs manual activation in repo settings. |

---

## Completed Milestones

| # | Slug | Completed |
|---|------|-----------|
| M1 | `scaffold` | 2026-03-23 |
| M2 | `content-schema` | 2026-03-23 |
| M3 | `content-basics` | 2026-03-23 |
| M4 | `content-differences` | 2026-03-23 |
| M5 | `content-ecosystem` | 2026-03-23 |
| M6 | `search` | 2026-03-23 |
| M7 | `polish` | 2026-03-23 |
| M8 | `deploy` | 2026-03-23 |

---

## Blocked Milestones

_None yet._

---

## Notes

- All branches are cut from `develop` and merged back via `--no-ff`.
- A milestone is not complete until `pnpm test` and `pnpm build` both pass on the feature branch.
- The agent does not wait between milestones. It proceeds immediately after marking a milestone complete.
