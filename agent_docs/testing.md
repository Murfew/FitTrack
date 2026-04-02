# Testing

## Approach

- Tests are written alongside features, not after
- Unit tests cover business logic and utilities
- E2E tests cover critical user flows

## Unit Tests (Vitest)

- Test files colocated with source: `component.test.ts` next to `component.ts`
- Focus on business logic, data transformations, utility functions
- Do not test framework internals (Next.js rendering, Prisma queries directly)

## E2E Tests (Playwright)

- Located in `e2e/`
- Cover critical flows: sign in, create workout, view progress
- Run in CI on PRs to main (Phase 4+)

## Running Tests

```bash
npm run test           # Vitest unit tests
npm run test:e2e       # Playwright E2E tests
```
