# Her Growth — Design System

## Design intent

The UI should feel **warm, calm, modern, friendly, premium but not corporate**, with generous whitespace and clear hierarchy. It must respect an adult learner — never childish gamification.

**Reference:** Primary visual mockup to be stored at `docs/reference/ui-primary.png` when available. Until then, tokens below are the source of truth.

## Typography

| Role      | Font         | Usage                                           |
| --------- | ------------ | ----------------------------------------------- |
| Body / UI | **DM Sans**  | Navigation, body copy, buttons, forms           |
| Headings  | **Fraunces** | Page titles, section headings, emphasis numbers |

### Scale (defaults)

- Page title: `text-3xl` → `sm:text-4xl`, serif, semibold
- Section title: `text-2xl`, serif, semibold
- Body: `text-base`, `leading-relaxed`
- Secondary: `text-sm` / `text-muted-foreground`
- Minimum comfortable reading size on mobile: **16px** base

## Color (OKLCH)

Semantic tokens live in `src/index.css` (`:root` + `@theme inline`).

| Token                                           | Role                                             |
| ----------------------------------------------- | ------------------------------------------------ |
| `background`                                    | Warm off-white app canvas                        |
| `foreground`                                    | Soft near-black text                             |
| `primary`                                       | Warm terracotta / rose accent (CTAs, active nav) |
| `secondary` / `muted`                           | Neutral warm surfaces                            |
| `accent`                                        | Soft highlight for hovers                        |
| `surface-warm`, `surface-blush`, `surface-sage` | Card tints (module icons, hero panels)           |
| `success`, `warning`                            | Progress and gentle alerts                       |
| `destructive`                                   | Rare; clear but not alarming                     |

**Rules**

- Restrained color: one accent per screen region.
- Avoid saturated rainbow category colors.
- Progress uses `primary`, not red/green pass/fail.

## Spacing & layout

- Content max width: `max-w-6xl` (dashboard), `max-w-3xl` (focused flows like Today).
- Page padding: `px-4 sm:px-6 lg:px-8`, vertical `py-6`.
- Card padding: shadcn `Card` defaults + `rounded-2xl` for marketing-style cards.
- Grid gaps: `gap-4` (dense), `gap-6` (sections), `gap-8` (page sections).

## Radius & elevation

- Cards: `rounded-2xl`, border `border-border/80`
- Icons containers: `rounded-xl`, size `size-11`
- Shadows: `shadow-[var(--shadow-soft)]`, hover `shadow-[var(--shadow-card)]`
- Background: subtle radial gradient on shell (`surface-warm` → transparent)

## Components (app-level)

| Component                                                 | Location                                 | Use                                   |
| --------------------------------------------------------- | ---------------------------------------- | ------------------------------------- |
| `PageHeader`                                              | `components/common/page-header.tsx`      | Title + description + optional action |
| `ModuleCard`                                              | `components/common/module-card.tsx`      | Module discovery grid                 |
| `ProgressSummary`                                         | `components/common/progress-summary.tsx` | Weekly pace + stats                   |
| `EmptyState`                                              | `components/common/empty-state.tsx`      | Encouraging placeholders              |
| shadcn `Button`, `Card`, `Badge`, `Progress`, `Separator` | `components/ui/`                         | Primitives                            |

### Planned (not yet built)

- `LessonStepper` — numbered steps, one visible at a time
- `MissionCard` — today’s task hero
- `StatPill` — compact metric
- `FormField` — large labels, help text, Zod errors in plain language

## Icons

- **Lucide** only, consistent `size-4` / `size-5` in UI
- Decorative icons: `aria-hidden`
- Icon-only buttons: `sr-only` label

## Motion

- Prefer CSS transitions on shadow/color only.
- Respect `prefers-reduced-motion` (to be wired in Phase 1).
- No autoplay carousels or confetti blocking content.

## Voice & copy

- Second person (“you”), warm and brief.
- Avoid: “failed”, “must”, “required”, “behind”, “rank”.
- Prefer: “when you’re ready”, “at your pace”, “optional”, “gentle step”.
- Career/B.Ed.: always allow **Optional** badge where shown.

## Responsive behavior

| Breakpoint | Navigation                                             |
| ---------- | ------------------------------------------------------ |
| `< lg`     | Bottom tab bar (4 items) + floating menu for full list |
| `≥ lg`     | Fixed left sidebar (272px)                             |

Touch targets: minimum **44×44px** for primary actions (`size-lg` buttons, padded nav items).

## Dark mode

CSS variables include `.dark` from shadcn. **v1 ships light-first**; dark theme toggled only after contrast audit for Malayalam scripts.

## Figma / asset checklist (when reference arrives)

1. Extract primary, surface, and text colors → update `:root`.
2. Compare card radius and shadow blur.
3. Validate heading scale against mockup screenshots.
4. Export empty-state illustrations (optional) to `public/illustrations/`.
