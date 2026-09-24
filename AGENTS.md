# AGENTS.md — Digital Skills

Guidance for humans and AI agents working on this repository.

## Product context

**Digital Skills** is a private roadmap app for one learner (Nasreena) with limited computer experience. The only product surface is **staged digital skills** (checklists + progress). Read `docs/product-spec.md` and `docs/design-system.md`.

**Do not** add other modules (missions, finance, family, career, etc.) or multi-tenant features.

## Deployment (MVP)

- Vercel Hobby + Supabase Auth/Postgres when connected
- Single user; rows scoped with `user_id` + RLS
- TanStack Query for server state later; Zustand for profile + completion persistence today

## Tech stack

- React 19 + Vite + TypeScript (strict)
- Tailwind CSS v4 + shadcn/ui (base-nova)
- React Router 7
- React Hook Form + Zod (onboarding)
- Zustand (profile, topic completions)
- Lucide icons

## Repository layout

```text
src/
  app/           # providers, router
  components/
    common/      # page shell helpers
    layout/      # app shell, onboarding guard
    ui/          # shadcn primitives
  config/        # app branding (app.ts)
  features/
    digital-skills/
    profile/
  pages/         # route-level composition
  types/
docs/
```

## Architecture rules

1. **Pages compose; features implement.** Keep pages thin.
2. **Routes:** `/` = journey, `/:stageId` = stage, `/onboarding` = welcome. Update `router.tsx` when adding routes.
3. **Content** lives in `features/digital-skills/data/` until CMS is needed.
4. **No `any`**, no secrets in git.

## UI rules

- Follow `docs/design-system.md`
- Building blocks: `PageContainer`, `PageHeader`, `ProgressBar`, `EmptyState`, `FormField`
- Mobile-first; minimum 16px body, 44px tap targets

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run format:check
```

All must pass before merge.
