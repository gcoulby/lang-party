# MILESTONES.md

Tracked milestones for lang.party. The agent updates this file after each milestone is completed or its status changes. Every row must be accurate — this is the source of truth for project progress.

**Status values:** `planned` | `in-progress` | `complete` | `blocked`

---

## Milestone Table

| # | Slug | Description | Status | Branch | Notes |
|---|------|-------------|--------|--------|-------|
| M1 | `scaffold` | Vite + React + TS project scaffold with routing shell, sidebar nav, header toggles, CSS token system, and empty section placeholder. Build and tests pass. | `planned` | - | Seed with existing prototype HTML as visual reference only — do not port HTML directly. |
| M2 | `content-schema` | Define content types, implement ConceptCard / Callout / EcoCard components with tests, and build hand-written syntax highlighter for Java, C++, JS, TS. | `planned` | - | Highlighter must be hand-written — no external tokeniser libraries. |
| M3 | `content-basics` | Populate all nine Language Basics sections with accurate, complete code examples (Variables, Functions, Classes, Interfaces, Generics, Errors, Async, Collections, Modules). | `planned` | - | All code examples must be syntactically correct. No pseudocode. |
| M4 | `content-differences` | Populate Conceptual Gaps and Gotchas sections. Highest content-quality bar of all milestones. | `planned` | - | Blunt, opinionated tone. These are the pages engineers bookmark. |
| M5 | `content-ecosystem` | Populate Tool Equivalents and UI Frameworks sections. Add equivalents table component. | `planned` | - | ★ markers indicate recommended-first picks. |
| M6 | `search` | Keyboard-accessible search across section and concept titles, running in a Web Worker. No external search library. | `planned` | - | Worker posts results back to main thread. Debounced input. |
| M7 | `polish` | Responsive layout, keyboard navigation, focus management, reduced-motion support, ARIA labels. Lighthouse accessibility ≥ 90. | `planned` | - | Mobile layout collapses sidebar into a drawer. |
| M8 | `deploy` | Confirm CI green, GitHub Pages deployment working. Tag v1.0.0 on main. | `planned` | - | Requires GitHub Pages configured on the repo before this milestone runs. |

---

## Completed Milestones

_None yet._

---

## Blocked Milestones

_None yet._

---

## Notes

- All branches are cut from `develop` and merged back via `--no-ff`.
- A milestone is not complete until `pnpm test` and `pnpm build` both pass on the feature branch.
- The agent does not wait between milestones. It proceeds immediately after marking a milestone complete.
