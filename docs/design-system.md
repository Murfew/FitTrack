# FitTrack Design System

Reference this document when building or modifying any UI in FitTrack.

## Philosophy

Precise, deliberate, data-rich. FitTrack should feel like a well-made precision
instrument — a serious athlete's training log, Garmin telemetry, a high-quality
stopwatch. The interface recedes so the numbers come forward. Every element
earns its space. If something can be removed without losing meaning, remove it.

Dark, but not dramatic. The palette should feel like a well-lit gym at 5am —
functional and focused. Not a gaming UI. Not a wellness app.

Light mode ships in Phase 4. Until then, build dark-only but use CSS variables
so light mode doesn't require rewrites.

## Visual identity

### Mood

- Quiet confidence — not loud, not cluttered
- Numbers are the hero — weights, reps, PRs get visual priority; chrome supports them
- Restraint is the standard — if it doesn't carry information, it doesn't belong
- Precision in every detail — number alignment, unit placement, spacing all considered

### Colors

All color values use OKLCH. Neutrals are tinted with a faint cobalt coolness (hue ~255)
to create subconscious cohesion with the cobalt accent.

| Role          | Token                  | OKLCH value                      | Usage                                  |
|---------------|------------------------|----------------------------------|----------------------------------------|
| Background    | `--background`         | `oklch(0.13 0.005 255)`          | Page background                        |
| Card          | `--card`               | `oklch(0.19 0.005 255)`          | Card, dialog, popover surfaces         |
| Muted         | `--muted`              | `oklch(0.25 0.005 255)`          | Subtle backgrounds, disabled           |
| Border        | `--border`             | `oklch(0.28 0.005 255 / 60%)`    | Card borders, dividers                 |
| Foreground    | `--foreground`         | `oklch(0.96 0.006 255)`          | Primary text — cool white, never pure  |
| Muted fg      | `--muted-foreground`   | `oklch(0.58 0.01 255)`           | Secondary text, placeholders           |
| Accent        | `--primary`            | `oklch(0.52 0.18 255)`           | Buttons, links, focus — deep cobalt    |
| Accent hover  | —                      | `oklch(0.60 0.17 255)`           | Hover states on accent elements        |
| Accent fg     | `--primary-foreground` | `oklch(0.96 0.006 255)`          | Text on accent backgrounds (light)     |
| Destructive   | `--destructive`        | `oklch(0.65 0.22 25)`            | Errors, delete actions                 |
| Success       | —                      | `oklch(0.60 0.14 155)`           | Positive indicators                    |
| Warning       | —                      | `oklch(0.72 0.15 75)`            | Caution states                         |

Deep cobalt is the sole accent. Semantic colors (success, warning, destructive)
are for data states, not decoration.

### Gradients

Use sparingly for subtle depth only:

- **Surface gradient**: `from-[oklch(0.19_0.005_255)] to-[oklch(0.13_0.005_255)]` —
  subtle depth on large card surfaces. Almost invisible; if you can tell at a glance,
  it's too much.
- **Glow**: `shadow-[0_0_15px_oklch(0.52_0.18_255_/_12%)]` — barely visible cobalt
  glow on focused or active accent elements. Not neon.

Rule: if you can't tell the gradient is there at a glance, it's about right.
No gradient text. Ever.

### Typography

Two font families. Load both via `next/font/google` in root layout.

| Element         | Font                | Size / Weight               | Notes                              |
|-----------------|---------------------|-----------------------------|-------------------------------------|
| Page title      | Barlow Condensed    | text-2xl / font-bold        | Tight, athletic, uppercase optional |
| Section heading | Barlow Condensed    | text-lg / font-semibold     |                                     |
| Card title      | Barlow Condensed    | text-base / font-medium     |                                     |
| Body            | Figtree             | text-sm / font-normal       |                                     |
| Caption / meta  | Figtree             | text-xs / font-normal       | `text-muted-foreground`             |
| Mono / data     | Geist Mono          | text-sm / font-normal       | Weights, reps, distances, codes     |

- `--font-display`: Barlow Condensed (headings, titles)
- `--font-sans`: Figtree (body, labels, UI text)
- `--font-mono`: Geist Mono (numeric data, technical values)

Numbers and metrics get visual prominence — larger, heavier, monospaced.
Right-align numbers in tables and lists. Units in `text-muted-foreground`.

### Spacing

Use Tailwind's default scale. Preferred values for consistency:

| Context                | Tailwind class                    |
|------------------------|-----------------------------------|
| Page padding           | `p-6`                             |
| Card padding           | `p-4` or `p-5`                    |
| Between sections       | `space-y-6` or `space-y-8`        |
| Between cards in grid  | `gap-4`                           |
| Between form fields    | `space-y-4`                       |
| Inline element gap     | `gap-2`                           |

Desktop: generous whitespace. Mobile (gym context): tight but clear — space is
premium when you're between sets.

### Border radius

Small radius throughout. `rounded-md` (6px) for cards, inputs, buttons.
`rounded-full` for avatars only. Don't mix sizes in the same visual group.

### Icons

- **UI icons**: Lucide React (`lucide-react`) or Phosphor (`@phosphor-icons/react`)
- **Brand icons**: `@icons-pack/react-simple-icons`
- Size: `h-4 w-4` (16px) inline, `h-5 w-5` (20px) standalone
- Color: inherit from parent text color
- Don't add icons next to text that already communicates the action

## Animation and motion

Subtle and purposeful. The app should feel responsive, not animated.

### Transitions (use everywhere)

- **Color/opacity changes**: `transition-colors duration-150`
- **Transform changes**: `transition-transform duration-200`
- **Combined**: `transition-all duration-200 ease-out`

### Micro-interactions

- **Button press**: `active:scale-[0.98]`
- **Card hover** (interactive cards only): `hover:border-[oklch(0.38_0.005_255)] transition-colors`
- **Focus rings**: `ring-2 ring-[oklch(0.52_0.18_255_/_50%)] ring-offset-2 ring-offset-[oklch(0.13_0.005_255)]`

### Page-level motion

- **Skeleton loading**: pulse animation on `Skeleton` components
- **Content entrance**: `animate-in fade-in-0 duration-300` — use sparingly, main content area only

### What NOT to animate

- Page-to-page route transitions
- Scroll-triggered effects or parallax
- Decorative background animations
- Anything that loops continuously

## Components

### Buttons

| Variant       | Use for                           |
|---------------|-----------------------------------|
| `default`     | Primary actions (save, add, log)  |
| `secondary`   | Secondary actions (cancel, back)  |
| `outline`     | Tertiary, less emphasis           |
| `ghost`       | Toolbar/nav, minimal chrome       |
| `destructive` | Irreversible actions              |
| `link`        | Inline text actions               |

Navigation: `asChild` + Next.js `Link` to avoid client boundaries.
Don't make every button primary. Hierarchy matters.

### Cards

```
CardHeader → CardTitle + CardDescription (optional)
CardContent → main content
CardFooter → actions (optional)
```

One level only — never nest cards. Not every list item needs a card.

### Forms

- shadcn `Form` with React Hook Form for validation
- Simple forms: native `<form action={serverAction}>`
- Labels always visible — no floating labels, no placeholder-only
- Errors: `text-destructive text-xs` below the field
- Submit: `w-full` on mobile, auto width on desktop

### Data display

- `font-mono` for numbers (weights, reps, distances, durations)
- Right-align numbers in tables/lists
- Units in `text-muted-foreground`: `135 lbs`, `3.2 km`
- Trends: success color up, destructive color down, muted neutral
- Numbers get visual prominence — don't bury metrics in small text

### Empty states

Every list/table needs one:
- Simple: muted icon (48px) + heading + description + CTA
- Teach the interface — explain what will appear here and why it matters
- Example: dumbbell icon + "No workouts yet" + "Log your first session" + [Log workout]

### Loading states

- Route-level: `loading.tsx` with skeleton matching page layout
- Component-level: shadcn `Skeleton` matching content dimensions
- Buttons: disabled + spinner on submission

## Layout

### Page shell

```tsx
<main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
  {/* page title + description + actions */}
  <div className="mt-6">{children}</div>
</main>
```

### Responsive grid

```tsx
// Cards: 1 col → 2 col → 3 col
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

// Forms: 1 col → 2 col
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
```

### Context-specific design

Two primary usage contexts with different needs:

- **Gym / mobile**: Fast input, glanceable data, large touch targets (44px min),
  critical info above the fold, no nested navigation
- **Home / desktop**: Higher data density acceptable, charts and progress views,
  more screen real estate for comparison and review

Design each context for its purpose. Don't just shrink the desktop layout.

### Navigation

Phase 1–2: top bar (logo + sign out).
Phase 3+: TBD (sidebar or tabs).

## Charts (Phase 3)

Library TBD (likely Recharts via shadcn charts).

- Primary series: cobalt accent `oklch(0.52 0.18 255)`
- Secondary: `oklch(0.60 0.17 255)` (lighter cobalt)
- Tertiary: `oklch(0.45 0.005 85)` (muted neutral)
- Grid: `oklch(0.28 0.005 85)`
- Labels: `oklch(0.58 0.01 85)`

## Do NOT

- Use colors outside the defined palette
- Use `rounded-full` on cards or inputs
- Create custom button variants — use shadcn's built-in
- Override shadcn component internals — compose and extend
- Use Inter, Roboto, Arial, Geist Sans, or system fonts for UI text — Figtree + Barlow Condensed
- Add heavy shadows (`shadow-lg`, `shadow-xl`) — keep to `shadow-sm` or the defined glow
- Use decorative elements that don't carry information
- Apply gradients to text — ever
- Use a colored stripe (`border-left` > 1px) as a card or callout accent
- Use indigo, purple, or cyan-on-dark — that's the AI monoculture palette (cobalt at hue ~255 with restraint is intentional, not the cliché)
- Add icons that restate what the adjacent text already says
- Nest cards inside cards
