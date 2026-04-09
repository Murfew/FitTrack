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
- Forms use `<form action={serverAction}>` pattern, not `onSubmit`
- Every route segment that fetches data needs `loading.tsx`, `error.tsx`, `not-found.tsx`

## Naming

- Components: PascalCase files and exports (`WorkoutCard.tsx`)
- Utilities and hooks: camelCase (`useWorkout.ts`)
- Server actions: camelCase, verb-first (`createWorkout`, `signInWithGithub`)
- Prisma models: PascalCase, fields camelCase, DB columns snake_case via `@map`

## Imports

- Use `@/` alias for all project imports
- Destructure: `import { Button } from '@/components/ui/button'`
- Group order: external libs → `@/` project imports → relative imports
