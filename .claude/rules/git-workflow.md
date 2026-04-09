# Git and PR rules

## Branches

- `feat/short-description` for features
- `fix/short-description` for bug fixes
- `chore/short-description` for tooling, config, docs

## Commits

- Conventional format: `feat|fix|chore: lowercase description`
- Keep commits atomic — one logical change per commit
- Run `npm run typecheck && npm run check` before committing

## Pull requests

- Title matches commit convention: `feat|fix|chore: description`
- Fill in the PR template at `.github/pull-request-template.md`
- One PR per issue, reference the issue number
- Target `main`, squash-merge only

## CI must pass

The pipeline runs: typecheck → lint → build → test.
`prisma generate` must run before build step.
If CI fails, fix it before requesting review.
