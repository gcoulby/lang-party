# lang.party

A side-by-side language reference for engineers moving from **Java or C++** into **JavaScript or TypeScript**.

Structured like [component-party.dev](https://component-party.dev): a sidebar-navigated, code-panel-driven reference where each entry shows the same concept in the source language and the target language simultaneously. Toggle source (Java / C++ / Both) and target dialect (JS / TS) at any time.

Not a tutorial. A reference. The kind of thing you bookmark and return to.

## AI Declaration

This project is an agentic coding experiment. The architecture, specification, and code are being generated with AI assistance (Claude, Anthropic). It is exploratory by nature -- expect rough edges, evolving structure, and the occasional questionable decision made at speed.

---

## Current Features

- Side-by-side code panels: Java/C++ → JavaScript/TypeScript
- Source language toggle: Java, C++, or both simultaneously
- Target dialect toggle: JavaScript or TypeScript
- Sections: Variables & Types, Functions, Classes & OOP, Interfaces, Generics, Error Handling, Async & Concurrency, Collections, Modules & Packages
- Conceptual Gaps and Gotchas sections — opinionated, blunt
- Ecosystem mapping: Maven → pnpm, JUnit → Vitest, Spring → Next.js, Qt → Tauri, etc.
- UI Framework mapping: Swing/JavaFX → React/Vue/Svelte, Qt → Electron/Tauri, Spring MVC → Next.js
- Syntax highlighting (hand-written tokeniser, no external library)
- Dark theme with design system tokens

## Planned Features

- Keyword search across all sections (Web Worker, no external library)
- Mobile-responsive layout with collapsible sidebar
- Keyboard navigation throughout
- Additional sections: Destructuring, Module system gotchas, React patterns for OOP devs
- Copy-to-clipboard on code panels
- Permalink per concept

---

## Tech Stack

| Concern | Tool |
|---------|------|
| Framework | React 18 |
| Language | TypeScript (strict mode) |
| Build | Vite |
| Testing | Vitest + React Testing Library |
| Styling | CSS Modules + CSS custom properties |
| Package manager | pnpm |
| Deployment | GitHub Pages via GitHub Actions |
| Heavy processing | Web Worker |

No external domain or content libraries. Core logic is hand-written.

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Run tests
pnpm test

# Type check
pnpm typecheck

# Build for production
pnpm build

# Preview production build
pnpm preview
```

Requires Node 18+ and pnpm 8+.

---

## Project Structure

```
lang-party/
├── src/
│   ├── components/
│   │   ├── Layout/         # Shell, sidebar, header
│   │   ├── ConceptCard/    # Code panel pair + header
│   │   ├── Callout/        # Info/warn/alert callouts
│   │   └── EcoCard/        # Ecosystem mapping cards
│   ├── content/
│   │   ├── index.ts        # Content registry
│   │   ├── variables.ts    # Section: Variables & Types
│   │   ├── functions.ts    # Section: Functions
│   │   └── ...             # One file per section
│   ├── hooks/
│   │   └── useAppState.ts  # Source/target toggle state
│   ├── types/
│   │   └── content.ts      # Content schema types
│   ├── utils/
│   │   └── highlight.ts    # Hand-written syntax highlighter
│   ├── workers/            # Web Workers
│   ├── App.tsx
│   └── main.tsx
├── AGENT_LOG.md            # Agent activity log
├── CLAUDE.md               # Agent operating instructions
├── MILESTONES.md           # Milestone tracking
└── README.md
```

---

## How the Agent Works

This project is built by a self-directed Claude agent operating under instructions defined in `CLAUDE.md`. The agent does not wait for prompts between milestones.

For each milestone, the agent:

1. Writes a plan to `AGENT_LOG.md`
2. Creates a feature branch from `develop`
3. Implements the milestone with incremental commits
4. Runs `pnpm test` — fixes any failures before proceeding
5. Runs `pnpm build` — fixes any failures before proceeding
6. Writes an evaluation to `AGENT_LOG.md`
7. Merges the feature branch to `develop` via `--no-ff`
8. Updates `MILESTONES.md`
9. Begins the next milestone immediately

The agent's full operating instructions, git workflow, content schema, architecture principles, and milestone roadmap are in [`CLAUDE.md`](./CLAUDE.md).

Progress is tracked in [`MILESTONES.md`](./MILESTONES.md). The full activity log is in [`AGENT_LOG.md`](./AGENT_LOG.md).

---

## Contributing

This project is currently built autonomously by a Claude agent. If you want to contribute content or fixes, branch from `develop` and follow the git workflow described in `CLAUDE.md`.
