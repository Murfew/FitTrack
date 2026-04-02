# Architecture

## Key Decisions

- **Server components by default** — use `'use client'` only when browser interactivity is required
- **Data fetching in server components** — no client-side data fetching unless necessary
- **Server actions** — used for all data mutations, no separate API routes for internal use
- **Protected routes** — handled via `proxy.ts` for redirects, with auth checks at the data layer

## File Conventions

- Pages and layouts: `src/app/`
- Reusable components: `src/components/`
- shadcn/ui primitives: `src/components/ui/`
- Server actions: `src/actions/` — named exports, verb-first (e.g. `createWorkout`)
- Utilities: `src/lib/`
- Custom hooks: `src/hooks/`

## Naming

- Components: PascalCase (`WorkoutCard.tsx`)
- Utilities and hooks: camelCase (`useWorkout.ts`)
- Server actions: camelCase, verb-first (`createWorkout.ts`)
- Branch naming: `feat/`, `fix/`, `chore/`
- PR titles: `feat|fix|chore: description`
