# UI rules

## Every UI change must satisfy

- Semantic HTML elements (`nav`, `main`, `section`, `header`, not div soup)
- Aria attributes where semantics alone aren't enough
- Keyboard navigable (focus states, tab order, escape to close)
- Color contrast: WCAG AA minimum (4.5:1 text, 3:1 large text)
- Mobile-first responsive — built from small screens up, never retrofitted
- Touch targets: minimum 44x44px on interactive elements

## State handling

Every component that displays data must handle:
1. **Loading** — skeleton or spinner
2. **Empty** — helpful message, not blank screen
3. **Error** — recoverable message with retry action
4. **Success** — the happy path

## Next.js App Router folder naming

### Route segments

| Convention | Example | Effect |
|---|---|---|
| `folder` | `app/dashboard/` | Route segment — becomes `/dashboard` in URL |
| `[param]` | `app/posts/[slug]/` | Dynamic segment — `params.slug` in the page |
| `[...param]` | `app/docs/[...slug]/` | Catch-all — matches `/docs/a/b/c`, `params.slug` is an array |
| `[[...param]]` | `app/[[...slug]]/` | Optional catch-all — also matches the root `/` |
| `(group)` | `app/(marketing)/` | Route group — organises routes without affecting the URL |
| `@slot` | `app/@modal/` | Parallel route slot — rendered alongside the main page |
| `(.)segment` | `app/@modal/(.)photo/` | Intercepting route — same-level intercept |
| `(..)segment` | `app/@modal/(..)photo/` | Intercepting route — one level up |
| `(...)segment` | `app/@modal/(...)photo/` | Intercepting route — from app root |
| `_folder` | `app/_components/` | Private folder — excluded from routing entirely |

### When to use each

- **Route groups `(group)`** — separate layout trees (e.g. `(auth)` vs `(app)`), apply a layout to a subset of routes, or scope a `loading.tsx` / `error.tsx` to specific pages without affecting siblings.
- **Private folders `_folder`** — colocate components, utils, or tests inside `app/` without accidentally creating routes. Not required for colocation (Next.js ignores non-special files), but useful for clarity.
- **Dynamic segments `[param]`** — resource detail pages (`/workouts/[id]`). Name the param after the resource field it maps to.
- **Catch-all `[...param]`** — hierarchical paths with variable depth (e.g. docs). Avoid for simple cases where a fixed route works.
- **Parallel routes `@slot`** — only for layouts that need to render two independent page-level views simultaneously (modals, split dashboards).
- **Intercepting routes `(.)`** — only for modal-style navigation where the URL should update but the underlying page should remain visible beneath.

## Next.js App Router special files

Use these only when the route actually needs them — do not add them by default:

### Route segment UI files

- **`page.tsx`** — the unique UI for a route; makes the segment publicly accessible.
- **`layout.tsx`** — shared UI wrapping child segments; persists across navigations (state is preserved). Use for chrome that shouldn't remount (nav, sidebars).
- **`template.tsx`** — like `layout.tsx` but re-mounts on every navigation, resetting client state and re-running effects. Only use when you explicitly need fresh state per navigation (e.g., page-transition animations, per-route analytics events).
- **`loading.tsx`** — only when the route segment's `page.tsx` or `layout.tsx` does async work (data fetching). Wraps the whole segment in a Suspense boundary. For finer-grained loading (only part of the page), prefer `<Suspense fallback={<Skeleton />}>` directly in the page around the async component.
- **`error.tsx`** — only when the route can throw errors (e.g., failed data fetches, server actions that can reject). Not needed for static/pure UI pages.
- **`not-found.tsx`** — only when the route calls `notFound()` (e.g., resource detail pages where the record may not exist). Not needed on listing or static pages.
- **`default.tsx`** — required fallback for parallel route (`@slot`) segments when Next.js can't recover the slot's active state after a full-page refresh. Only relevant when using parallel routes.

### Route Handlers

- **`route.ts`** — HTTP endpoint (GET, POST, etc.) for a route segment. Use for external-facing APIs, webhooks, and OAuth callbacks. Do not use for internal data mutations — use server actions instead.

### Root-level app files

- **`instrumentation.ts`** — runs once when the server starts. Use only for observability setup (OpenTelemetry, etc.). Lives at the project root, not inside `app/`.

### Metadata files (inside `app/`)

Add only what the app actually needs:

- **`sitemap.ts`** — generates `sitemap.xml` for search engines.
- **`robots.ts`** — generates `robots.txt` crawler rules.
- **`manifest.ts`** — generates the PWA `manifest.json`.
- **`opengraph-image.tsx`** / **`twitter-image.tsx`** — dynamically generated OG/Twitter share images per route segment. Static images can use `.jpg`/`.png` files directly.
- **`icon.tsx`** / **`apple-icon.tsx`** — app icons. Static favicons can just be `favicon.ico` in `app/`.

## shadcn/ui usage

- Install via `npx shadcn add <component>` — never copy-paste from docs
- Compose from primitives; don't rebuild what shadcn provides
- Brand icons: use `@icons-pack/react-simple-icons` (Lucide dropped brand icons in v1)
- Check `docs/design-system.md` for token values and spacing scale
