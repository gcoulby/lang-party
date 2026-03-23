# AGENT_LOG.md

Running log of all agent activity. One entry per milestone. Written by the agent before, during, and after each milestone cycle. This file is append-only — completed entries are never edited.

---

## Log Format

Each entry follows this structure:

```
## M<N> — <slug> — <YYYY-MM-DD>

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

_No entries yet. The agent writes the first entry when M1 begins._
