# FitTrack Design System

Reference this document when building or modifying any UI in FitTrack.

## Philosophy

Minimal, modern, refined. FitTrack should feel like a premium tool — think
Linear, Vercel, or Raycast. Clean surfaces with subtle depth. Dark-first with
careful use of light and color to create hierarchy. Every element earns its
space, but the result should feel polished and pleasurable to use, not sterile.

Light mode ships in Phase 4. Until then, build dark-only but use CSS variables
so light mode doesn't require rewrites.

## Visual identity

### Mood

- Quiet confidence — not loud, not boring
- Subtle depth — soft gradients, gentle glows on accent elements
- Smooth interactions — transitions that feel responsive and intentional
- Data-forward — numbers and progress are the hero, not chrome

### Colors

| Role          | Token                  | Value        | Usage                             |
|---------------|------------------------|--------------|-----------------------------------|
| Background    | `--background`         | zinc-950     | Page background                   |
| Card          | `--card`               | zinc-900     | Card, dialog, popover surfaces    |
| Muted         | `--muted`              | zinc-800     | Subtle backgrounds, disabled      |
| Border        | `--border`             | zinc-800     | Card borders, dividers            |
| Foreground    | `--foreground`         | zinc-50      | Primary text                      |
| Muted fg      | `--muted-foreground`   | zinc-400     | Secondary text, placeholders      |
| Accent        | `--primary`            | indigo-500   | `#6366f1` — buttons, links, focus |
| Accent hover  | —                      | indigo-400   | `#818cf8` — hover states          |
| Accent fg     | `--primary-foreground` | white        | Text on accent backgrounds        |
| Destructive   | `--destructive`        | red-500      | Errors, delete actions            |
| Success       | —                      | emerald-500  | Positive indicators, PRs          |
| Warning       | —                      | amber-500    | Caution states                    |

Indigo is the sole accent. Semantic colors (success, warning, destructive)
are for data states, not decoration.

### Gradients

Use sparingly for subtle depth and visual interest:

- **Accent gradient**: `bg-gradient-to-r from-indigo-500 to-indigo-400` — primary
  CTAs, hero elements, or feature highlights. Not every button.
- **Surface gradient**: `bg-gradient-to-b from-zinc-900 to-zinc-950` — subtle
  depth on large card surfaces or page sections.
- **Text gradient** (rare): `bg-gradient-to-r from-indigo-400 to-indigo-200
  bg-clip-text text-transparent` — landing page headline or marketing moments
  only. Never in the app shell.
- **Glow**: `shadow-[0_0_15px_rgba(99,102,241,0.15)]` — subtle indigo glow on
  focused or active accent elements. Barely visible, not neon.

Rule: if you can't tell the gradient is there at a glance, it's about right.

### Typography

| Element         | Font          | Size / Weight               | Class                          |
|-----------------|---------------|-----------------------------|--------------------------------|
| Page title      | Geist Sans    | text-2xl / font-bold        | `text-2xl font-bold`           |
| Section heading | Geist Sans    | text-lg / font-semibold     | `text-lg font-semibold`        |
| Card title      | Geist Sans    | text-base / font-medium     | `text-base font-medium`        |
| Body            | Geist Sans    | text-sm / font-normal       | `text-sm`                      |
| Caption / meta  | Geist Sans    | text-xs / font-normal       | `text-xs text-muted-foreground`|
| Mono / data     | Geist Mono    | text-sm / font-normal       | `font-mono text-sm`            |

Geist loaded via `next/font/google` in root layout (Sans + Mono).
Use Mono for numeric data, codes, and technical values.

Custom typography components at `src/components/ui/typography.tsx`:
`H1`, `H2`, `H3`, `H4`, `P`, `Lead`, `Muted`, `InlineCode`.

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

### Border radius

Vega uses small radius. `rounded-md` (6px) for cards, inputs, buttons.
`rounded-full` for avatars only. Don't mix sizes in the same visual group.

### Icons

- **UI icons**: Lucide React (`lucide-react`)
- **Brand icons**: `@icons-pack/react-simple-icons`
- Size: `h-4 w-4` (16px) inline, `h-5 w-5` (20px) standalone
- Color: inherit from parent text color

## Animation and motion

Subtle, purposeful motion that makes the app feel alive without being distracting.

### Transitions (use everywhere)

- **Color/opacity changes**: `transition-colors duration-150` (buttons, links, hover states)
- **Transform changes**: `transition-transform duration-200` (scale, translate)
- **Combined**: `transition-all duration-200 ease-out` for multi-property transitions

### Micro-interactions

- **Button hover**: slight brightness shift, already handled by shadcn defaults
- **Button press**: `active:scale-[0.98]` — subtle press-down feel
- **Card hover** (interactive cards only): `hover:border-zinc-700 transition-colors`
  or `hover:shadow-md transition-shadow` — pick one, not both
- **Focus rings**: `ring-2 ring-indigo-500/50 ring-offset-2 ring-offset-zinc-950`

### Page-level motion

- **Skeleton loading**: pulse animation on `Skeleton` components (shadcn default)
- **Content entrance**: `animate-in fade-in-0 duration-300` for content appearing
  after loading — use sparingly, only on the main content area
- **Toast notifications**: slide in from top-right, auto-dismiss 5s

### What NOT to animate

- Page-to-page route transitions
- Scroll-triggered effects or parallax
- Decorative background animations
- Anything that loops continuously
- Layout shifts (elements changing size/position after render)

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

### Cards

```
CardHeader → CardTitle + CardDescription (optional)
CardContent → main content
CardFooter → actions (optional)
```

Cards on `zinc-900` over page `zinc-950`. One level only — never nest cards.

### Forms

- shadcn `Form` with React Hook Form for validation
- Simple forms: native `<form action={serverAction}>`
- Labels always visible — no floating labels, no placeholder-only
- Errors: `text-destructive text-xs` below the field
- Submit: `w-full` on mobile, auto width on desktop

### Data display

- `font-mono` for numbers (weights, reps, distances)
- Right-align numbers in tables/lists
- Units in `text-muted-foreground`: `135 lbs`
- Trends: emerald up, red down, zinc neutral

### Empty states

Every list/table needs one:
- Centered icon (muted, 48px) + heading + description + CTA
- Example: dumbbell icon + "No workouts yet" + "Log your first session" + [Add workout]

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

### Navigation

Phase 1–2: top bar (logo + sign out).
Phase 3+: TBD (sidebar or tabs).

## Charts (Phase 3)

Library TBD (likely Recharts via shadcn charts).

- Primary series: indigo-500
- Secondary: indigo-300
- Tertiary: zinc-500
- Grid: zinc-800
- Labels: zinc-400

## Do NOT

- Use colors outside the defined palette
- Use `rounded-full` on cards or inputs
- Create custom button variants — use shadcn's built-in
- Override shadcn component internals — compose and extend
- Use Inter, Roboto, Arial, or system fonts — Geist only
- Add heavy shadows (`shadow-lg`, `shadow-xl`) — keep to `shadow-sm` or the
  defined glow effect
- Use decorative elements that don't serve a function
- Apply gradients to every surface — they're accents, not defaults
