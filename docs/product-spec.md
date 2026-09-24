# Her Growth — Product Specification

## Vision

**Her Growth** is a private personal-development and digital-confidence platform for an adult learner with limited computer experience (primary persona: homemaker studying B.Ed.).

The product helps her become more digitally confident, organized, financially aware, and capable in everyday life — **without pressure to pursue employment**. Career and B.Ed. exploration are **optional** modules, not requirements.

## Product principles

1. Adult, respectful, non-childish design.
2. Very simple UX for beginner computer users.
3. One useful skill at a time.
4. Practical tasks over theoretical lessons.
5. Encouraging progress, never judgmental framing.
6. Not surveillance — no “reporting to spouse” patterns.
7. Career exploration is optional.
8. English first; Malayalam planned (`en` + `ml`).
9. Responsive desktop and mobile.
10. Accessible typography and interaction targets.

## Primary persona (assumption)

| Attribute    | Assumption                                                        |
| ------------ | ----------------------------------------------------------------- |
| Age          | Adult (25–45)                                                     |
| Tech comfort | Low; prefers clear labels, large tap targets, minimal jargon      |
| Goals        | Independence, organization, study support, family task confidence |
| Constraints  | Limited time, may use phone more than desktop                     |
| Language     | English UI first; Malayalam copy added incrementally              |

## Core outcomes (non-goals)

**Outcomes we optimize for**

- Completing small practical missions (e.g. save a photo, pay a bill safely, organize documents).
- Visible but gentle progress (streaks framed as “consistency,” not competition).
- Optional deep dives (finance, parenting, B.Ed.).

**Explicit non-goals (v1)**

- Job placement or mandatory career pipelines.
- Social feeds, leaderboards, or comparison with others.
- Spouse/admin dashboards monitoring the user without consent.
- Full LMS replacement for B.Ed. (support layer only).

## Main modules

| Module                        | Purpose                                                                 |
| ----------------------------- | ----------------------------------------------------------------------- |
| Dashboard                     | Calm home: greeting, today’s focus, progress snapshot, module discovery |
| Today's Mission               | Single daily practical task with steps and celebration                  |
| My Journey / Progress         | History, milestones, skills completed                                   |
| Digital Skills                | Step-by-step computer/phone tasks                                       |
| Family Management             | Lists, reminders, documents (user-owned)                                |
| Finance & Money               | Budget basics, bills, savings concepts                                  |
| Parenting & Child Development | Age-appropriate tips and trackers                                       |
| B.Ed. & Career Exploration    | Study helpers + **optional** career paths                               |
| General Knowledge             | Short, useful articles/quizzes                                          |
| Useful Tools                  | Calculators, checklists, templates                                      |
| Profile / Settings            | Language, accessibility, privacy                                        |
| Family Goals                  | Shared aspirations (opt-in, non-pressure)                               |

## Major entities

| Entity          | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| `UserProfile`   | Identity, locale, onboarding state, optional study focus       |
| `Mission`       | Daily practical task: steps, estimated time, completion state  |
| `SkillTrack`    | Grouped lessons (Digital Skills, etc.)                         |
| `Lesson`        | Short guided steps + optional checklist                        |
| `ProgressEvent` | Mission/skill completion, streak updates                       |
| `ModuleContent` | CMS-ready content block (title, body, media, locale)           |
| `FamilyGoal`    | User-defined goal with optional family visibility (future)     |
| `Tool`          | Static or interactive helper (budget sheet, reminder template) |
| `Preference`    | Text size, reduced motion, language                            |

## Key workflows

### 1. First visit (onboarding — planned)

1. Warm welcome (no account jargon if local-first).
2. Choose language (`en` / `ml` when ready).
3. Pick **one** starting interest (Digital Skills recommended, not forced).
4. Land on Dashboard with empty-but-encouraging states.

### 2. Daily loop

1. Dashboard shows “Today’s focus” → Today's Mission.
2. User completes one mission (multi-step, save progress).
3. Gentle celebration + Journey update.
4. Optional: explore one module card.

### 3. Skill learning

1. Pick track → one lesson at a time.
2. Lesson = instructions + “Try it yourself” checklist.
3. Mark complete → unlock next lesson (no harsh locks in v1; soft sequencing).

### 4. Optional career / B.Ed.

1. Module clearly labeled **Optional**.
2. Content separated from “daily life” missions.
3. No nudges on Dashboard unless user opts in.

## Privacy & trust (assumptions)

- v1: **local-first mock data**; no backend until requirements confirmed.
- No sharing progress with family by default.
- Family Goals (future) require explicit user action to share.
- Copy avoids “your husband can see…” patterns.

## Internationalization

- All user-facing strings will move to a dictionary layer (`en`, then `ml`).
- Layout must support longer Malayalam strings (flexible cards, no fixed narrow labels).

## Visual reference

**Assumption:** A reference mockup image was described in the product brief but was **not available in the repository** at scaffold time. Tokens in `docs/design-system.md` and `src/index.css` implement a warm, calm, premium-friendly direction aligned with the written brief. **When the reference image is added** (e.g. `docs/reference/ui-primary.png`), reconcile colors, spacing, and component shapes in a dedicated design pass.

## Implementation plan (phased)

### Phase 0 — Foundation (current)

- [x] Vite + React + TypeScript + Tailwind + shadcn/ui
- [x] Docs: product, IA, design system, AGENTS
- [x] App shell, routing, dashboard shell, placeholder modules
- [x] Shared components: page header, module card, progress, empty state

### Phase 1 — Mission & Journey

- Mission model + Zod schemas
- Today's Mission step UI (single column, large type)
- Journey timeline + mock progress store (Zustand or TanStack Query + localStorage)
- Completion celebrations (accessible, reduced-motion aware)

### Phase 2 — Digital Skills v1

- `SkillTrack` / `Lesson` types
- Reusable lesson stepper component
- 2–3 real sample lessons (e.g. “Create a folder”, “Save a photo”)

### Phase 3 — Content modules (stubs → real)

- Finance, Family, Parenting: card-based content lists
- General Knowledge: readable article template
- Useful Tools: 1–2 tools (checklist, simple budget)

### Phase 4 — Profile & i18n

- Language toggle (UI strings)
- Accessibility settings (text size, motion)
- Malayalam strings for core flows

### Phase 5 — Backend (when specified)

- Auth strategy TBD (email magic link vs. local-only)
- Sync progress across devices
- Content CMS integration TBD

## Success metrics (product, not analytics-heavy)

- User completes ≥1 mission per week (self-reported comfort increase).
- User opens Digital Skills without abandoning mid-lesson (completion rate).
- Optional modules accessed only when chosen (no guilt copy).

## Open questions

1. Authentication: local-only vs. cloud account?
2. Content authoring: markdown files in repo vs. headless CMS?
3. Family Goals: shared account or invite link?
4. Offline support required for mobile?
5. Exact Malayalam rollout scope for v1?

Document new assumptions in this file when resolved.
