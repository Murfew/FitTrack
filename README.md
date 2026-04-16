# FitTrack

A full-stack workout tracking app to log sessions, track progress, and visualize improvements over time.

## Tech Stack

- **Framework:** [Next.js (App Router, TypeScript)](https://nextjs.org/docs/app)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Database:** [Supabase (Postgres)](https://supabase.com/) + [Prisma ORM](https://www.prisma.io/)
- **Auth:** [NextAuth v5](https://authjs.dev/)
- **Testing:** [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions) + [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node version specified in `.nvmrc`. Use `nvm use` to automatically use the correct version.
- Create a free project at Supabase and copy the connection string from Settings → Database.

### Setup

```bash
# Install dependencies
npm install

# Copy env file and fill in your values
cp .env.example .env.local

# Generate your AuthJs secret and use it as value for AUTH_SECRET
npx auth secret

# Run database migrations
npm run db:migrate

# Seed database
npm run db:seed

# Start the dev server
npm run dev
```

### OAuth Providers

**GitHub**

Create a GitHub OAuth App at [github.com/settings/developers](https://github.com/settings/developers). Set the callback URL to `http://localhost:3000/api/auth/callback/github`. Copy the Client ID and Secret into `.env.local`.

**Google**

1. Go to [Google Cloud Console](https://console.cloud.google.com/) and create a new project
2. Navigate to **APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID**
3. Set application type to **Web application**
4. Add authorized JavaScript origin: `http://localhost:3000`
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Secret into `.env.local`
7. In **APIs & Services → OAuth consent screen**, add your Google account as a test user

> **Production:** Add your Vercel URL to the origins and redirect URIs for both providers. For Google, also publish the consent screen. GitHub requires a separate OAuth App per environment.

App runs at [http://localhost:3000](http://localhost:3000).

## Environment Variables

See `.env.example` for all required variables.

## Conventions

See `.claude/rules/git-workflow.md` for all git related repo conventions.
Linting and formatting is handled by Biome. Run `npm run check:fix` to auto-fix issues or `npm run check:ci` to simply flag them.

## Contributing

All changes go through a PR. CI must pass before merging. See `.github/pull-request-template.md`.
