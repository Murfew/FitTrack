# Database

## Conventions

- All models use `cuid()` for IDs
- `User` model has `createdAt` and `updatedAt` timestamps
- Field names are camelCase in Prisma, mapped to snake_case in the database via `@map`
- Table names are snake_case via `@@map`
- **Exception:** `Account` model fields are left as snake_case to match NextAuth adapter expectations

## Prisma Client

- Imported from `@/lib/prisma`
- Uses `@prisma/adapter-pg` driver adapter
- Never instantiate PrismaClient directly — always use the shared instance

## Migrations

- `npx prisma migrate dev` — development migrations
- `npx prisma migrate deploy` — production migrations (used in CI/CD)
- `npx prisma generate` — regenerate client after schema changes
- Always run generate after migrate
