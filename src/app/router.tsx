import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { AppShell } from '@/components/layout/app-shell'
import { RouteErrorPage } from '@/pages/route-error-page'

const DashboardPage = lazy(() =>
  import('@/pages/dashboard-page').then((m) => ({ default: m.DashboardPage })),
)
const TodayPage = lazy(() =>
  import('@/pages/today-page').then((m) => ({ default: m.TodayPage })),
)
const ModulePlaceholderPage = lazy(() =>
  import('@/pages/module-placeholder-page').then((m) => ({
    default: m.ModulePlaceholderPage,
  })),
)
const DigitalSkillsPage = lazy(() =>
  import('@/pages/digital-skills-page').then((m) => ({ default: m.DigitalSkillsPage })),
)
const DigitalSkillsTrackPage = lazy(() =>
  import('@/pages/digital-skills-track-page').then((m) => ({
    default: m.DigitalSkillsTrackPage,
  })),
)
const DigitalSkillsLessonPage = lazy(() =>
  import('@/pages/digital-skills-lesson-page').then((m) => ({
    default: m.DigitalSkillsLessonPage,
  })),
)
const KnowledgePage = lazy(() =>
  import('@/pages/knowledge-page').then((m) => ({ default: m.KnowledgePage })),
)
const KnowledgeTopicPage = lazy(() =>
  import('@/pages/knowledge-topic-page').then((m) => ({
    default: m.KnowledgeTopicPage,
  })),
)
const FamilyGoalsPage = lazy(() =>
  import('@/pages/family-goals-page').then((m) => ({ default: m.FamilyGoalsPage })),
)
const FamilyGoalsDetailPage = lazy(() =>
  import('@/pages/family-goals-detail-page').then((m) => ({
    default: m.FamilyGoalsDetailPage,
  })),
)
const ProfileLayoutPage = lazy(() =>
  import('@/pages/profile-layout-page').then((m) => ({ default: m.ProfileLayoutPage })),
)
const ProfileSectionPage = lazy(() =>
  import('@/pages/profile-section-page').then((m) => ({
    default: m.ProfileSectionPage,
  })),
)
const JourneyPage = lazy(() =>
  import('@/pages/journey-page').then((m) => ({ default: m.JourneyPage })),
)
const FamilyPage = lazy(() =>
  import('@/pages/family-page').then((m) => ({ default: m.FamilyPage })),
)
const FinancePage = lazy(() =>
  import('@/pages/finance-page').then((m) => ({ default: m.FinancePage })),
)
const FinanceLessonPage = lazy(() =>
  import('@/pages/finance-lesson-page').then((m) => ({ default: m.FinanceLessonPage })),
)

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'today', element: <TodayPage /> },
      { path: 'journey', element: <JourneyPage /> },
      {
        path: 'digital-skills',
        children: [
          { index: true, element: <DigitalSkillsPage /> },
          { path: ':trackId', element: <DigitalSkillsTrackPage /> },
          { path: ':trackId/:lessonId', element: <DigitalSkillsLessonPage /> },
        ],
      },
      { path: 'family', element: <FamilyPage /> },
      {
        path: 'finance',
        children: [
          { index: true, element: <FinancePage /> },
          { path: 'lessons/:lessonId', element: <FinanceLessonPage /> },
        ],
      },
      { path: 'parenting', element: <ModulePlaceholderPage moduleId="parenting" /> },
      { path: 'bed-career', element: <ModulePlaceholderPage moduleId="bed-career" /> },
      {
        path: 'knowledge',
        children: [
          { index: true, element: <KnowledgePage /> },
          { path: ':topicId', element: <KnowledgeTopicPage /> },
        ],
      },
      {
        path: 'general-knowledge',
        element: <Navigate to="/knowledge" replace />,
      },
      { path: 'tools', element: <ModulePlaceholderPage moduleId="tools" /> },
      {
        path: 'family-goals',
        children: [
          { index: true, element: <FamilyGoalsPage /> },
          { path: ':goalId', element: <FamilyGoalsDetailPage /> },
        ],
      },
      {
        path: 'profile',
        element: <ProfileLayoutPage />,
        children: [
          {
            index: true,
            element: (
              <ProfileSectionPage
                title="Your profile overview"
                description="Name, study focus, and gentle reminders will be editable here soon."
              />
            ),
          },
          {
            path: 'language',
            element: (
              <ProfileSectionPage
                title="Language"
                description="English and Malayalam options will appear here when localization is ready."
              />
            ),
          },
          {
            path: 'accessibility',
            element: (
              <ProfileSectionPage
                title="Accessibility"
                description="Text size, motion, and contrast preferences will live here."
              />
            ),
          },
          {
            path: 'privacy',
            element: (
              <ProfileSectionPage
                title="Privacy"
                description="Your data stays private. Export and account controls will be added here."
              />
            ),
          },
        ],
      },
    ],
  },
])
