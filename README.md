# FitTrack

A full-stack workout tracking app to log sessions, track progress, and visualize improvements over time.

## Tech Stack

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Supabase (Postgres) + Prisma ORM
- **Auth:** NextAuth v5
- **Testing:** Vitest + Playwright
- **CI/CD:** GitHub Actions + Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- A Supabase project with connection strings

### Setup

```bash
# Install dependencies
npm install

# Copy env file and fill in your values
cp .env.example .env

# Run database migrations
npm run db:migrate

# Generate Prisma client
npm run db:generate

# Seed database
npm run db:seed

# Start the dev server
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

## Environment Variables

See `.env.example` for all required variables.

## Contributing

All changes go through a PR. CI must pass before merging. See `.github/pull-request-template.md`.
