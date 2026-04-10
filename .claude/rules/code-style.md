# Code style

## TypeScript

- Annotate return types at boundaries: server actions, API handlers, complex/nullable returns
- Rely on inference for private helpers and simple transformations
- Use `ComponentProps<'element'>` + `cn()` for component prop types (shadcn pattern)
- Prefer `interface` for object shapes, `type` for unions/intersections

## React / Next.js

- Server components by default
- `'use client'` only when the component uses hooks, event handlers, or browser APIs
- `Button` with `asChild` + `Link` for navigation (avoids forcing client boundaries)
- Internal navigation: always `next/link`, never `<a href>`
- Images: always `next/image`, never `<img>` — handles sizing, lazy loading, and format optimisation automatically
- Forms use `<form action={serverAction}>` pattern, not `onSubmit`
- `loading.tsx` / `error.tsx` / `not-found.tsx` only when the route actually needs them — see `ui-rules.md` for when each applies

## Data fetching

- Fetch in server components and pass data down as props — no client-side fetching for initial data
- Parallel fetching with `Promise.all([...])` when a component needs multiple independent pieces of data — never sequential awaits
- Deduplicate repeated DB/fetch calls within a render pass using `React.cache()` — wrap the data-fetching function, not the call site
- Next.js 15 fetch is uncached by default; opt into caching explicitly with `revalidate` or `cache: 'force-cache'` only when stale data is acceptable

## Metadata

- Static routes: export a `metadata` object (`export const metadata: Metadata = { ... }`)
- Dynamic routes: export `generateMetadata` to build metadata from params or fetched data
- Every public-facing page should have at minimum `title` and `description`

## Naming

- Components: PascalCase files and exports (`WorkoutCard.tsx`)
- Utilities and hooks: camelCase (`useWorkout.ts`)
- Server actions: camelCase, verb-first (`createWorkout`, `signInWithGithub`)
- Prisma models: PascalCase, fields camelCase, DB columns snake_case via `@map`

## Imports

- Use `@/` alias for all project imports
- Destructure: `import { Button } from '@/components/ui/button'`
- Group order: external libs → `@/` project imports → relative imports
