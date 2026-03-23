# CLAUDE.md — Agent Operating Instructions

## Project Identity

**lang.party** is a developer reference tool for engineers migrating from Java or C++ into JavaScript/TypeScript. It is structured like component-party.dev: a sidebar-navigated, code-panel-driven reference where each entry shows the same concept side-by-side in the source language and the target language. The user can toggle source language (Java / C++ / Both) and target dialect (JS / TS) at any time.

This is not a tutorial. It is a reference. Dense, accurate, scannable. The kind of thing a competent engineer bookmarks and returns to.

---

## What "Good" Looks Like

A qualitative target, not just a feature list.

- **Every code example is correct.** It compiles, it runs, it demonstrates exactly what the label claims. No hand-waving. No pseudocode unless explicitly labelled.
- **The UI is sharp and readable.** Code panels have real whitespace, proper syntax highlighting, and horizontal scroll — never wrapping. The layout is confident, not generic.
- **Navigation is instant.** Switching sections, toggling languages, switching JS/TS — all synchronous and snappy.
- **The content is opinionated where it should be.** Gotchas are flagged. The "just never use ==" kind of advice is present and blunt.
- **The app is always shippable.** At the end of every milestone, `pnpm build` succeeds, all tests pass, and the deployed version is a coherent, working product.
- **The codebase is clean.** No dead code. No commented-out blocks. No `TODO`s left in merged branches. Types are explicit where they add clarity. Components are small and purposeful.
- **Performance is not an afterthought.** Heavy data (content, examples) is co-located with its section component, not loaded globally. Any future processing lives in a Web Worker.

---

## Agent Behaviour

**The agent is self-directed. It does not ask for permission between milestones.**

The full cycle for each milestone is:

1. **Plan** — Write the plan to `AGENT_LOG.md` before touching code. Include what will be built, what files will change, and what the acceptance criteria are.
2. **Branch** — Create a feature branch from `develop` following the naming convention (see Git Workflow).
3. **Implement** — Build the milestone. Commit incrementally with clear messages. Do not accumulate a single giant commit.
4. **Test** — Run `pnpm test`. If tests fail, fix them. Do not merge failing tests.
5. **Build** — Run `pnpm build`. If the build fails, fix it. Do not merge a broken build.
6. **Evaluate** — Write an honest evaluation to `AGENT_LOG.md`. Note what worked, what was cut, what debt was introduced.
7. **Merge** — Merge the feature branch back to `develop` using `--no-ff`. Delete the feature branch after merge.
8. **Update** — Update `MILESTONES.md`: mark the completed milestone, set the next to `in-progress`.
9. **Proceed** — Begin the next milestone immediately. Do not wait.

If the agent encounters a blocker that cannot be resolved within the milestone (e.g. a missing external dependency, an ambiguous requirement), it logs the blocker in `AGENT_LOG.md`, commits what is clean, and moves to the next unblocked milestone. It does not stall.


do not combine scripts with cd 

such as `cd lang-party && do a thing` as this means I have to approve permissions for every script 

do the cd and the action as separate things. 

---

## Git Workflow

### Branches

| Branch | Purpose |
|--------|---------|
| `main` | Production. Only receives merges from `develop` at release points. |
| `develop` | Integration branch. All feature branches merge here. Always shippable. |
| `feat/<slug>` | Feature work. Branched from `develop`, merged back via `--no-ff`. |
| `fix/<slug>` | Bug fixes. Same rules as `feat/`. |
| `content/<slug>` | Content additions (new sections, examples). Same rules. |

### Rules

- **Never commit directly to `develop` or `main`.**
- **Never force-push any branch.**
- **Never use `git push --force` or `git push --force-with-lease`.**
- **Always merge with `--no-ff`** to preserve branch history.
- **Delete feature branches after merge.**
- Commit messages follow the format: `type(scope): description` — e.g. `feat(variables): add union type examples`, `fix(panels): restore horizontal scroll on narrow viewports`.
- Every merge commit to `develop` should leave the app in a shippable state.

### Workflow Commands

```bash
# Start a milestone
git checkout develop
git pull origin develop
git checkout -b feat/my-milestone-slug

# During work — commit incrementally
git add -p
git commit -m "feat(scope): description"

# Finish a milestone
git checkout develop
git merge --no-ff feat/my-milestone-slug -m "feat: merge my-milestone-slug"
git branch -d feat/my-milestone-slug
git push origin develop
```

---

## Tech Stack

| Concern | Tool |
|---------|------|
| Framework | React 18 |
| Language | TypeScript (strict mode) |
| Build | Vite |
| Testing | Vitest + React Testing Library |
| Styling | CSS Modules + CSS custom properties (no Tailwind, no CSS-in-JS) |
| Package manager | pnpm |
| Deployment | GitHub Pages via GitHub Actions |
| Heavy processing | Web Worker (if/when needed) |

**No external simulation or domain libraries** unless explicitly listed in this file. Core logic is hand-written. If a utility is needed (e.g. a syntax tokeniser), it is either written from scratch or sourced from a zero-dependency package that is explicitly approved here.

### Approved dependencies (beyond dev tooling)

- None currently. Add to this list with justification before installing.

---

## Project Structure

```
lang-party/
├── .claude/
│   └── settings.local.json     # Claude Code permissions
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
│   ├── components/
│   │   ├── Layout/             # Shell, sidebar, header
│   │   ├── ConceptCard/        # Code panel pair + header
│   │   ├── Callout/            # Info/warn/alert callouts
│   │   └── EcoCard/            # Ecosystem mapping cards
│   ├── content/
│   │   ├── index.ts            # Content registry
│   │   ├── variables.ts        # Section: Variables & Types
│   │   ├── functions.ts        # Section: Functions
│   │   ├── classes.ts          # Section: Classes & OOP
│   │   ├── interfaces.ts       # Section: Interfaces
│   │   ├── generics.ts         # Section: Generics
│   │   ├── errors.ts           # Section: Error Handling
│   │   ├── async.ts            # Section: Async
│   │   ├── collections.ts      # Section: Collections
│   │   ├── modules.ts          # Section: Modules
│   │   ├── conceptual.ts       # Section: Conceptual Gaps
│   │   ├── gotchas.ts          # Section: Gotchas
│   │   ├── ecosystem.ts        # Section: Tool Equivalents
│   │   └── frameworks.ts       # Section: UI Frameworks
│   ├── hooks/
│   │   └── useAppState.ts      # Source/target toggle state
│   ├── types/
│   │   └── content.ts          # Content schema types
│   ├── workers/                # Web Workers (if needed)
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── main.tsx
│   └── index.css
├── AGENT_LOG.md
├── CLAUDE.md
├── MILESTONES.md
├── README.md
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

---

## Content Schema

All content lives in `src/content/`. Each section file exports a `Section` object. The types are defined in `src/types/content.ts`.

```typescript
// src/types/content.ts

export type SourceLang = 'java' | 'cpp';
export type TargetLang = 'js' | 'ts';
export type DiffTag = 'breaking' | 'similar' | 'gotcha';
export type CalloutVariant = 'warn' | 'info' | 'alert';

export interface CodePanel {
  lang: SourceLang | TargetLang;
  code: string;           // raw code string, no HTML
}

export interface ConceptEntry {
  id: string;
  title: string;
  tag?: DiffTag;
  note?: string;
  panels: CodePanel[];    // order: java?, cpp?, js?, ts?
  callout?: {
    variant: CalloutVariant;
    content: string;      // markdown-lite: **bold**, `code`
  };
}

export interface Section {
  id: string;
  slug: string;
  group: 'basics' | 'differences' | 'ecosystem';
  title: string;
  description: string;
  concepts: ConceptEntry[];
}
```

Syntax highlighting is applied at render time via a lightweight hand-written tokeniser (see `src/utils/highlight.ts`). Code strings in content files are plain text — no HTML spans in the content layer.

---

## Architecture Principles

1. **Content and UI are strictly separated.** Content files export data. Components render it. No JSX in content files.
2. **The content schema is the contract.** If a new content type is needed, the type is updated first, then the content, then the renderer.
3. **State is minimal.** The only global state is: active section, source language toggle, target language toggle. Everything else is derived or local.
4. **Components are dumb renderers.** Logic lives in hooks and utilities, not in components.
5. **CSS is co-located.** Each component has its own `.module.css`. Global tokens live in `src/index.css`.
6. **Tests cover behaviour, not implementation.** Test what the user sees and can do, not internal function signatures.
7. **The main thread does not block.** Any content processing (search indexing, future features) runs in a Web Worker.

---

## Milestone Roadmap

| # | Slug | Description |
|---|------|-------------|
| M1 | `scaffold` | Vite + React + TS scaffold, routing shell, sidebar nav, header with toggles, CSS token system, empty section placeholder. No content yet. Build and test pass. |
| M2 | `content-schema` | Define all types in `src/types/content.ts`. Implement `ConceptCard`, `Callout`, `EcoCard` components. Write tests for each. Implement hand-written syntax highlighter for Java, C++, JS, TS. |
| M3 | `content-basics` | Populate all Language Basics sections (Variables, Functions, Classes, Interfaces, Generics, Errors, Async, Collections, Modules) with accurate, tested content. |
| M4 | `content-differences` | Populate Conceptual Gaps and Gotchas sections. These are the highest-value pages — content quality matters most here. |
| M5 | `content-ecosystem` | Populate Tool Equivalents and UI Frameworks sections. Add the equivalents table component. |
| M6 | `search` | Add keyboard-accessible search across all section titles and concept titles. Runs in a Web Worker. No external search library. |
| M7 | `polish` | Responsive layout fixes, keyboard navigation, focus management, reduced motion support, ARIA labels on all interactive elements. Lighthouse accessibility score ≥ 90. |
| M8 | `deploy` | Confirm GitHub Actions workflow is green. Confirm GitHub Pages deployment. Tag `v1.0.0` on `main`. |

Each milestone must leave `pnpm build` green and `pnpm test` passing before merge.

---

## MILESTONES.md Entry Format

Each row in the milestones table must include:

| Column | Content |
|--------|---------|
| `#` | Milestone number |
| `Slug` | Short identifier matching the branch name |
| `Description` | One sentence |
| `Status` | `planned` / `in-progress` / `complete` / `blocked` |
| `Branch` | `feat/<slug>` or `-` if not yet started |
| `Notes` | Any cuts, blockers, or debt introduced |

---

## AGENT_LOG.md Entry Format

Each milestone gets one log entry. Format:

```markdown
## M<N> — <Slug> — <ISO date>

### Plan
What will be built. Which files will be created or modified. Acceptance criteria.

### Implementation Notes
What was actually built. Decisions made. Anything that deviated from the plan and why.

### Test Results
Output of `pnpm test`. Pass/fail counts. Any tests skipped and why.

### Build Result
Output of `pnpm build`. Bundle size if relevant.

### Evaluation
Honest assessment. What's good. What's rough. What debt was introduced. What was cut.

### Next Milestone
Which milestone follows and why (usually just "next in sequence" unless something changed).
```

---

## Definition of Done (per milestone)

- [ ] `pnpm test` passes with no skipped tests
- [ ] `pnpm build` succeeds with no warnings treated as errors
- [ ] Feature branch merged to `develop` via `--no-ff`
- [ ] Feature branch deleted
- [ ] `MILESTONES.md` updated
- [ ] `AGENT_LOG.md` entry written
- [ ] No `console.log` left in production code
- [ ] No TypeScript `any` introduced without a comment explaining why
- [ ] No commented-out code left in merged files
