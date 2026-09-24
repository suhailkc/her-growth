# Digital Skills — Product Specification

## Vision

A **private** app for one learner (Nasreena) to build everyday **computer and phone confidence** through a staged roadmap and practical skill checklists — no grades, no pressure.

Deploy: **Vercel Hobby** + **Supabase** (auth + Postgres when wired). Single-user data model with RLS.

## What the app is

| Screen | Route | Purpose |
| ------ | ----- | ------- |
| Journey roadmap | `/` | Stages, progress, milestones |
| Stage checklist | `/:stageId` | Try skills on device; mark comfortable |
| Welcome | `/onboarding` | Name only (first visit) |

Legacy `/digital-skills/...` URLs redirect to the routes above.

## Product principles

1. Adult, respectful, non-childish design.
2. Very simple UX for beginner computer users.
3. One useful skill at a time.
4. Practical tasks over theory.
5. Encouraging progress, never judgmental.
6. English first; Malayalam planned (`en` + `ml`).

## Entities

| Entity | Description |
| ------ | ----------- |
| `UserProfile` | Display name, locale, onboarding flag (local → Supabase) |
| `DigitalSkillsStage` | Ordered stage with topics |
| `DigitalSkillsTopic` | Checklist item with short “try this” copy |
| `TopicCompletion` | User marked topic comfortable |

## Implementation status

- [x] Journey UI, stages config, local progress store
- [x] Onboarding (name)
- [x] Supabase auth (Google) + sync completions (server wins)
- [ ] Malayalam UI strings

## Non-goals

- Other life modules (finance, parenting, missions, career, family goals)
- Multi-user workspaces, billing, analytics dashboards
- Lesson LMS with step-by-step players (checklists only for now)

## Open questions

1. Offline support on mobile?
2. Malayalam rollout scope?

Document assumptions here when resolved.
