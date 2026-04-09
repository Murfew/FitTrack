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

Route segments: `loading.tsx` (skeleton), `error.tsx` (boundary), `not-found.tsx` (404).

## shadcn/ui usage

- Install via `npx shadcn add <component>` — never copy-paste from docs
- Compose from primitives; don't rebuild what shadcn provides
- Brand icons: use `@icons-pack/react-simple-icons` (Lucide dropped brand icons in v1)
- Check `docs/design-system.md` for token values and spacing scale
