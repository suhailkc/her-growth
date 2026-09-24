import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { OnboardingGuard } from '@/components/layout/onboarding-guard'
import { AppShell } from '@/components/layout/app-shell'
import { RouteErrorPage } from '@/pages/route-error-page'

const DashboardPage = lazy(() =>
  import('@/pages/dashboard-page').then((m) => ({ default: m.DashboardPage })),
)
const DigitalSkillsPage = lazy(() =>
  import('@/pages/digital-skills-page').then((m) => ({ default: m.DigitalSkillsPage })),
)
const DigitalSkillsTrackPage = lazy(() =>
  import('@/pages/digital-skills-track-page').then((m) => ({
    default: m.DigitalSkillsTrackPage,
  })),
)
const DigitalSkillsSkillPage = lazy(() =>
  import('@/pages/digital-skills-skill-page').then((m) => ({
    default: m.DigitalSkillsSkillPage,
  })),
)
const DigitalSkillsLessonPage = lazy(() =>
  import('@/pages/digital-skills-lesson-page').then((m) => ({
    default: m.DigitalSkillsLessonPage,
  })),
)
const AboutPage = lazy(() =>
  import('@/pages/about-page').then((m) => ({ default: m.AboutPage })),
)
const OnboardingPage = lazy(() =>
  import('@/pages/onboarding-page').then((m) => ({ default: m.OnboardingPage })),
)

export const appRouter = createBrowserRouter([
  {
    path: '/onboarding',
    element: <OnboardingPage />,
  },
  {
    path: '/',
    element: (
      <OnboardingGuard>
        <AppShell />
      </OnboardingGuard>
    ),
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'about', element: <AboutPage /> },
      {
        path: 'digital-skills',
        children: [
          { index: true, element: <DigitalSkillsPage /> },
          { path: ':stageId/skill/:topicId', element: <DigitalSkillsSkillPage /> },
          { path: ':stageId/:lessonId', element: <DigitalSkillsLessonPage /> },
          { path: ':stageId', element: <DigitalSkillsTrackPage /> },
        ],
      },
      { path: 'today', element: <Navigate to="/" replace /> },
      { path: 'journey', element: <Navigate to="/digital-skills" replace /> },
      { path: 'family', element: <Navigate to="/" replace /> },
      { path: 'finance/*', element: <Navigate to="/" replace /> },
      { path: 'parenting/*', element: <Navigate to="/" replace /> },
      { path: 'bed-career/*', element: <Navigate to="/" replace /> },
      { path: 'knowledge/*', element: <Navigate to="/" replace /> },
      { path: 'general-knowledge/*', element: <Navigate to="/" replace /> },
      { path: 'tools/*', element: <Navigate to="/" replace /> },
      { path: 'family-goals/*', element: <Navigate to="/" replace /> },
      { path: 'profile/*', element: <Navigate to="/about" replace /> },
    ],
  },
])
