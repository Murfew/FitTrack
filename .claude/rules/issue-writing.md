# Issue writing

## Titles

- Descriptive only — no conventional commit prefix (`feat:`, `chore:`, `fix:`)
- The label carries the type, not the title
- Example: "Migrate from Auth.js to Better Auth" not "chore: migrate from Auth.js to Better Auth"

## Labels

- `feat` — new user-facing functionality
- `fix` — bug fix
- `chore` — tooling, config, deps, migrations, refactors

## Scope

- Only include work the user has confirmed they want — don't add speculative tasks (spikes, research steps, stretch goals) unless asked
- If a task is genuinely unknown, note it as a callout in the body, not a checklist item

## Blocking relationships

- When an issue depends on another, add a comment: "Blocked by #X" with a sentence explaining what specifically will change
- Keep implementation notes accurate to the actual stack — if the stack changes, rewrite the notes, don't leave stale references

## Structure

Use this shape for non-trivial issues:

```
## Context
Why this work exists and what problem it solves.

## Acceptance Criteria
- [ ] Checklist of observable, verifiable outcomes

## Implementation Notes
Concrete guidance: relevant APIs, config options, gotchas, what NOT to do.
Keep this accurate to the actual libraries and patterns in use.

## Relevant Docs
Links to docs that are directly referenced in the implementation notes.
```

Omit sections that add no value (e.g. a simple chore may not need Implementation Notes).
