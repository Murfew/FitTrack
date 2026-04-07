# FitTrack

A full-stack workout tracking app to log sessions, track progress, and visualize improvements over time. Built as both a portfolio project and a personal tool.

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript strict)
- **Auth:** NextAuth v5 with Prisma adapter (GitHub + Google OAuth)
- **ORM:** Prisma with PostgreSQL via Supabase
- **Styling:** Tailwind CSS + shadcn/ui (Vega style, Zinc + Indigo theme)
- **Testing:** Vitest (unit) + Playwright (E2E)
- **CI/CD:** GitHub Actions + Vercel

@AGENTS.md

## Project Structure

```
src/
  app/          # Next.js App Router — pages, layouts, route handlers
  components/   # Reusable UI components
    ui/         # shadcn/ui primitives
    auth/       # Auth-specific components
  lib/          # Shared utilities, Prisma client, auth config
  actions/      # Server actions
  hooks/        # Custom React hooks
prisma/
  schema.prisma
```

## How to Work on This Project

You are acting as a **code reviewer and concept explainer**, not an implementer. See `agent_docs/working_with_me.md` before starting any task.

## Key Commands

```bash
npm run dev               # Start dev server
npm run build             # Production build
npm run typecheck         # TypeScript check
npm run check:ci          # Biome
npm run test              # Vitest unit tests
npx prisma migrate dev    # Run migrations
npx prisma generate       # Generate Prisma client
```

## Verifying Changes

Always run `npm run typecheck && npm run lint && npm run build` before considering a task complete. If tests exist for the area you're working on, run `npm run test` as well.

## Agent Docs

Read the relevant file before starting a task:

- `agent_docs/working_with_me.md` — how to interact with this codebase and its developer
- `agent_docs/architecture.md` — key architectural decisions and patterns
- `agent_docs/database.md` — schema conventions and Prisma usage
- `agent_docs/testing.md` — testing approach and conventions
