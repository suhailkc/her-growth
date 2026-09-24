# Her Growth — Information Architecture

## Site map

```text
Her Growth
├── Dashboard (/)
├── Today's Mission (/today)
├── My Journey (/journey)
├── Digital Skills (/digital-skills)
│   ├── /digital-skills/:trackId (category lesson list)
│   └── /digital-skills/:trackId/:lessonId (overview, step player, completion)
├── Family Management (/family)
├── Finance & Money (/finance)
├── Parenting & Child Development (/parenting)
├── B.Ed. & Career Exploration (/bed-career) [Optional]
├── General Knowledge (/knowledge)
├── Useful Tools (/tools)
├── Family Goals (/family-goals)
└── Profile & Settings (/profile)
    ├── Language (en / ml)
    ├── Accessibility
    └── Privacy
```

## Navigation model

### Primary (sidebar + full menu)

All modules in `src/config/navigation.ts` → `primaryNavItems`.

- **Dashboard** is home; always reachable via logo area / first nav item.
- **Today's Mission** is the primary action (also in header CTA).
- **B.Ed. & Career** marked optional in UI (`optional: true`).

### Secondary

- **Profile & Settings** separated below a divider (not mixed with learning modules).

### Mobile quick nav

Bottom bar (4 items): Dashboard, Today's Mission, My Journey, Digital Skills.

Full module list via floating menu (`MobileNav`).

## Content hierarchy

### Level 1 — Module

Module landing: purpose, progress summary, list of tracks or tools.

### Level 2 — Track / topic

Example: Digital Skills → “Using your phone safely”.

### Level 3 — Lesson / mission step

Single-focus screen: title, 3–7 steps max, one primary button (“Next”, “Mark done”).

### Level 4 — Detail (optional)

Checklists, downloadable templates, short articles (General Knowledge).

## Dashboard information priority

1. Personal greeting (name from profile)
2. Today's focus → link to mission
3. Weekly progress (non-judgmental copy)
4. Module discovery grid (self-serve)

## Routing conventions

| Rule                                 | Example                              |
| ------------------------------------ | ------------------------------------ |
| kebab-case paths                     | `/digital-skills`                    |
| Module id slug matches path          | `AppModuleId` ↔ route                |
| No deep nesting until content exists | placeholders at module root          |
| Future lesson routes                 | `/digital-skills/:trackId/:lessonId` |

Router definition: `src/app/router.tsx`.

## State & data (v1)

| Data           | Storage (current)          | Future                |
| -------------- | -------------------------- | --------------------- |
| Profile        | `src/data/mock-profile.ts` | API + local cache     |
| Journey stats  | mock                       | `ProgressEvent` store |
| Missions       | static copy                | mission service       |
| Module content | empty states               | CMS / markdown        |

## Search & findability (future)

- v1: navigation only (no global search).
- v2: simple search across lessons and tools (plain language placeholders).

## Localization structure (planned)

```text
src/locales/
  en/
    common.json
    dashboard.json
    missions.json
  ml/
    ...
```

Keys namespaced by module. Malayalam strings may be longer — layouts use flexible grids, not fixed button widths.

## Accessibility landmarks

- `main#main-content` — page body (`AppShell`)
- `nav[aria-label="Main"]` — sidebar
- `nav[aria-label="Quick navigation"]` — mobile bar
- One `h1` per page via `PageHeader`
