# FitTrack

A full-stack workout tracking app to log sessions, track progress, and visualize
improvements over time. Built as both a portfolio project and a personal tool.

## Stack

- Next.js 16 (App Router, TypeScript strict mode)
- NextAuth v5, Prisma adapter (GitHub OAuth done, Google pending)
- Prisma + PostgreSQL via Supabase (`@prisma/adapter-pg` driver adapter)
- Tailwind CSS + shadcn/ui (Vega style)
- Biome (linting + formatting — not ESLint, not Prettier)
- Vitest (unit) + Playwright (E2E, Phase 4)
- npm, deployed on Vercel
- Node version specified in `.nvmrc`

## Commands

See `package.json` scripts. Key Prisma commands:
```bash
npx prisma generate        # Regenerate client (run after schema changes, before build)
npx prisma migrate dev     # Development migrations
npx prisma migrate deploy  # Production migrations (CI/CD)
```

## Verifying changes

Always run before considering a task complete:
```bash
npm run typecheck && npm run check && npm run build
```
If tests exist for the area, also run `npm run test`.

## Where things live

- **Pages and layouts**: `src/app/` (App Router)
- **Server actions**: `src/actions/` — `'use server'`, verb-first naming
- **shadcn/ui primitives**: `src/components/ui/`
- **App-level components**: `src/components/`
- **Custom hooks**: `src/hooks/`
- **Utilities**: `src/lib/` (includes `prisma.ts` singleton and `cn()` helper)
- **Types**: `src/types/`
- **Auth config**: `auth.ts` at project root
- **Route protection**: `proxy.ts` at project root (NOT `middleware.ts`)
- **Database schema**: `prisma/schema.prisma`

## Key conventions

- `@/` alias maps to `./src/*`
- Server components by default; `'use client'` only when hooks/listeners needed
- Server actions for all data mutations — no separate API routes for internal use
- No direct DB calls from client components
- Auth sign-in/sign-out via server actions in `src/actions/auth.ts`
- Protected routes: `proxy.ts` for redirects, auth checks at the data layer
- Prisma client: always import from `@/lib/prisma`, never instantiate directly

## Database conventions

- All models use `cuid()` for IDs
- Only `User` model has `createdAt`/`updatedAt` timestamps
- Field names: camelCase in Prisma, snake_case in DB via `@map`/`@@map`
- Exception: `Account` model fields left as-is for NextAuth adapter compatibility
- Always run `prisma generate` after `prisma migrate`

## Git workflow

- Branch naming: `feat/`, `fix/`, `chore/`
- PR titles: `feat|fix|chore: description`
- Squash-merge only, auto-delete branches
- One issue per feature, one PR per issue
- PR template at `.github/pull_request_template.md`

## CI pipeline

typecheck → lint (biome ci) → build → test
`prisma generate` runs before build.

## Design system

Read `@docs/DESIGN_SYSTEM.md` when working on any UI.

## MCP servers available

- **shadcn** — component installation and API documentation
- **GitHub** — PR management, issue operations, repo context
- **Context7** — up-to-date library docs (Next.js, Prisma, Tailwind, etc.)
- **next-devtools** — route inspection, component tree, dev server diagnostics
- **Superpowers** — enhanced coding capabilities (plugin)

## What NOT to do

- Don't use ESLint or Prettier — Biome handles both
- Don't use `middleware.ts` — Next.js 16 uses `proxy.ts`
- Don't add `createdAt`/`updatedAt` to models other than `User` unless discussed
- Don't install packages without checking if shadcn already provides the component
- Don't use `require()` — ES modules only
- Don't skip `prisma generate` before build
- Don't instantiate PrismaClient directly — use the shared instance from `@/lib/prisma`
