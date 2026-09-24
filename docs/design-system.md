# Her Growth — Design System

## Design intent

The UI should feel **warm, calm, modern, friendly, premium but not corporate**, with generous whitespace and clear hierarchy. It must respect an adult learner — never childish gamification.

**Reference:** Place the primary mockup at `docs/reference/ui-primary.png` when available. Tokens in `src/index.css` are the implementation source of truth.

## Typography

| Role      | Font         | Usage                                           |
| --------- | ------------ | ----------------------------------------------- |
| Body / UI | **DM Sans**  | Navigation, body copy, buttons, forms           |
| Headings  | **Fraunces** | Page titles, section headings, emphasis numbers |

### Scale (defaults)

- Page title: `text-3xl` → `sm:text-4xl`, serif, semibold
- Section title: `text-2xl`, serif, semibold
- Body: `text-base`, `leading-relaxed`
- Form labels: `text-base`, medium weight (`Label` default `comfortable`)
- Secondary: `text-sm` / `text-muted-foreground`
- Minimum comfortable reading size on mobile: **16px** base

## Color (OKLCH)

Semantic tokens live in `src/index.css` (`:root` + `@theme inline`).

| Token / role                       | Usage                                          |
| ---------------------------------- | ---------------------------------------------- |
| `primary`                          | Deep teal — primary actions, active nav, links |
| `success`                          | Soft green — progress bars, gentle completion  |
| `learning` / `surface-learning`    | Lavender — knowledge & B.Ed. accents           |
| `family` / `surface-family`        | Peach — family goals accents                   |
| `info` / `surface-info`            | Soft blue — tips and neutral notices           |
| `background`, `secondary`, `muted` | Warm neutrals — canvas and surfaces            |
| `surface-warm`, `surface-sage`     | Hero panels and alternate card tints           |
| `warning`, `destructive`           | Rare; clear but not alarming                   |

**Rules**

- Restrained color: one accent hue per screen region.
- Module semantics (`learning`, `family`, `info`) via badge/card/button **variants**, not random hex values.
- Progress defaults to `success` tone, not pass/fail red/green.

## Spacing & layout

- Content max width: `max-w-6xl` (dashboard), `max-w-3xl` (focused flows) via `PageContainer`.
- Page padding: `px-4 sm:px-6 lg:px-8`, vertical `py-6`.
- Section gaps: **24px** (`gap-6`, `.section-stack`) and **32px** (`gap-8`, `.section-stack-lg`).
- Desktop grids: `PageGrid` / `.page-grid` — 12 columns, `gap-6 lg:gap-8`.
- Card padding: shadcn `Card` defaults + `rounded-2xl`.

## Radius & elevation

- Controls: `rounded-xl`
- Cards & dialogs: `rounded-2xl`, border `border-border/80`
- Icons containers: `rounded-xl`, size `size-11`
- Shadows: `shadow-[var(--shadow-soft)]`, hover `shadow-[var(--shadow-card)]`
- Background: subtle radial gradient on shell (`surface-warm` → transparent)

## Components (app-level)

| Component                         | Location                               | Use                                       |
| --------------------------------- | -------------------------------------- | ----------------------------------------- |
| `PageHeader`                      | `components/common/page-header.tsx`    | Title + description + optional action     |
| `SectionHeader`                   | `components/common/section-header.tsx` | In-page sections                          |
| `PageContainer`                   | `components/common/page-container.tsx` | Max width + vertical rhythm               |
| `PageGrid` / `PageGridItem`       | `components/common/page-grid.tsx`      | 12-column responsive layout               |
| `ModuleCard`                      | `components/common/module-card.tsx`    | Module discovery grid                     |
| `ProgressSummary` / `ProgressBar` | `components/common/`                   | Pace + labeled progress                   |
| `FormField`                       | `components/common/form-field.tsx`     | Large labels, hint, plain-language errors |
| `EmptyState`                      | `components/common/empty-state.tsx`    | Encouraging placeholders                  |
| `StatusBadge`                     | `components/common/status-badge.tsx`   | Mission/module status tones               |

## UI primitives (`components/ui/`)

Built on shadcn **base-nova** + project variants:

| Primitive                                                                          | Notable variants / props                                                |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `Button`                                                                           | `soft`, `learning`, `family`, `info`; `size="lg"` for 44px CTAs         |
| `Card`                                                                             | `elevated`, `warm`, `learning`, `family`, `info`, `sage`, `interactive` |
| `Badge`                                                                            | `success`, `optional`, `learning`, `family`, `info`                     |
| `Progress`                                                                         | `tone` (`success` default), `size`                                      |
| `Alert`                                                                            | `success`, `info`, `warning`, `destructive`                             |
| `Input`, `Textarea`                                                                | `fieldSize="comfortable"` for forms                                     |
| `Select`                                                                           | `size="comfortable"` full-width trigger                                 |
| `Label`                                                                            | `size="comfortable"` (default)                                          |
| `Avatar`                                                                           | `tone`: `warm`, `learning`, `family`, `info`                            |
| `Tabs`, `Dialog`, `Sheet`, `Dropdown`, `Tooltip`, `Accordion`, `Checkbox`, `Radio` | Calm spacing, readable type, minimal motion                             |

## Icons

- **Lucide** only, consistent `size-4` / `size-5` in UI
- Decorative icons: `aria-hidden`
- Icon-only buttons: `sr-only` label

## Motion

- Prefer CSS transitions on shadow/color only.
- `prefers-reduced-motion` wired in `index.css`.
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

Touch targets: minimum **44×44px** for primary actions (`Button` `size="lg"`, comfortable form controls).

## Dark mode

CSS variables include `.dark` from shadcn. **v1 ships light-first**; dark theme toggled only after contrast audit for Malayalam scripts.

## Figma / asset checklist (when reference arrives)

1. Extract primary, surface, and text colors → update `:root`.
2. Compare card radius and shadow blur.
3. Validate heading scale against mockup screenshots.
4. Export empty-state illustrations (optional) to `public/illustrations/`.
