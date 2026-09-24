# Digital Skills — Information Architecture

## Site map

```text
Digital Skills
├── Journey roadmap (/)
├── Stage checklist (/:stageId)
├── Onboarding (/onboarding)
└── Legacy /digital-skills/* → redirects
```

## Layout

Single column: page content inside `AppShell` → `PageContainer`. No sidebar or top nav — titles live on each route.

## Content hierarchy

1. **Journey** — all stages, overall progress
2. **Stage** — why it matters, topic checklist
3. **Topic** — checkbox row on stage or inline on current stage card

## State

| Data | Location |
| ---- | -------- |
| Profile | `features/profile/profile-store` |
| Completions | `features/digital-skills/digital-skills-store` |
| Stage copy | `features/digital-skills/data/stages.ts` |

Router: `src/app/router.tsx`.

## Accessibility

- `main#main-content` wraps routed pages
- One primary `h1` per route
- Checkbox labels tied to skill names
