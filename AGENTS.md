# AGENTS.md — Her Growth

Guidance for humans and AI agents working on this repository.

## Product context

**Her Growth** is a private personal-development app for an adult learner with limited computer experience (homemaker + B.Ed. student persona). Goals: digital confidence, organization, financial awareness, communication, and optional career/education exploration — **not** pressure to get a job.

Read first:

- `docs/product-spec.md` — vision, entities, phased plan
- `docs/design-system.md` — visual and UX rules
- `docs/information-architecture.md` — routes and navigation

**Do not** implement the full product in one change. Follow phased plan in the product spec.

## Tech stack

- React 19 + Vite + TypeScript (strict)
- Tailwind CSS v4 + shadcn/ui (base-nova)
- React Router 7
- TanStack Query (server/async state)
- React Hook Form + Zod (forms)
- Zustand **only** for client UI state that is awkward in Query (e.g. draft checklist); avoid duplicating server data
- Lucide icons

## Repository layout

```text
src/
  app/           # providers, router
  components/
    common/      # reusable product components
    layout/      # shell, sidebar, header
    ui/          # shadcn primitives (avoid business logic here)
  config/        # navigation, feature flags
  data/          # mock data until API exists
  features/      # [future] module-specific logic + hooks
  pages/         # route-level composition
  types/         # shared TypeScript types
  lib/           # utilities
docs/            # product + design docs
```

**Add new module UI under `features/<module>/` when logic grows**; keep `pages/` thin.

## Coding conventions

- **Strict TypeScript**: no `any`; enable strict flags in `tsconfig.app.json`.
- **Path alias**: `@/` → `src/`.
- Named exports for components; default export only for `App.tsx` if needed.
- Prefer `type` imports: `import type { X } from '...'`.
- Colocate Zod schemas with forms or `features/*/schemas.ts`.
- User-facing strings: prepare for i18n (no hardcoded paragraphs inside deep logic — config or locale files).
- Do not commit secrets (`.env`, keys).

## Architecture rules

1. **Pages compose; features implement.** Pages should not exceed ~150 lines; extract components.
2. **Single source for routes** — update `src/app/router.tsx` and `src/config/navigation.ts` together.
3. **No duplicate nav labels/paths** — use `NavItem` types from `src/types/navigation.ts`.
4. **Query keys** — namespace by domain: `['missions', id]`, `['profile']`.
5. **Mock → API** — keep mock data in `src/data/`; swap with Query fetchers without changing page structure.
6. **Optional modules** — set `optional: true` on nav items; never push on Dashboard unless user opts in.

## UI rules

- Follow `docs/design-system.md` (warm palette, Fraunces headings, DM Sans body).
- One primary CTA per screen region.
- Use existing building blocks: `PageHeader`, `ModuleCard`, `EmptyState`, `ProgressSummary`.
- shadcn components live in `components/ui/` — extend via `className`, do not fork unless necessary.
- Mobile-first; test bottom nav spacing (`pb-24` on main).
- **Optional** badge on B.Ed. & Career and any non-required flow.

## Accessibility rules

- Minimum 16px body text; touch targets ≥ 44px for primary actions.
- Every icon-only control needs visible text or `sr-only`.
- One `h1` per route; logical heading order.
- Focus visible (global styles in `index.css`).
- Progress: `aria-label` with human-readable percent.
- Support `prefers-reduced-motion` when adding animations.
- Future Malayalam: avoid fixed-width buttons; test line wrapping.

## Testing requirements

Current scaffold: **no test runner configured yet**.

When adding tests (Phase 1+):

- **Unit**: Vitest for utilities and Zod schemas.
- **Component**: Testing Library for mission stepper, forms, navigation active states.
- **E2E** (optional): Playwright for critical paths — Dashboard → Today → complete mission.

Before opening a PR:

```bash
npm run build
npm run lint
npm run format:check
```

All must pass.

## Making changes safely

1. Read relevant doc in `docs/` if touching UX or IA.
2. Keep diffs scoped to the phase/task (no drive-by refactors).
3. Update docs when assumptions change (`product-spec.md` open questions).
4. If adding a route: router + navigation + placeholder page (or feature).
5. If adding shadcn component: `npx shadcn@latest add <name>` — do not hand-copy from old projects.
6. Do not add dependencies without clear need; prefer platform and existing stack.
7. Never implement spouse monitoring, leaderboard, or mandatory career nudges.
8. **No `any`**, no disabling TypeScript rules without team agreement.

## Commands

| Command                | Purpose                       |
| ---------------------- | ----------------------------- |
| `npm run dev`          | Local dev server              |
| `npm run build`        | Typecheck + production bundle |
| `npm run lint`         | oxlint                        |
| `npm run format`       | Prettier write                |
| `npm run format:check` | Prettier check                |

## Visual reference gap

If a UI mockup image is provided, place it under `docs/reference/` and update `docs/design-system.md` tokens to match. Note the reconciliation in the PR description.
