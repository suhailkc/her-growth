import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { OnboardingGuard } from '@/components/layout/onboarding-guard'
import { AppShell } from '@/components/layout/app-shell'
import { RouteErrorPage } from '@/pages/route-error-page'

const DigitalSkillsPage = lazy(() =>
  import('@/pages/digital-skills-page').then((m) => ({ default: m.DigitalSkillsPage })),
)
const DigitalSkillsTrackPage = lazy(() =>
  import('@/pages/digital-skills-track-page').then((m) => ({
    default: m.DigitalSkillsTrackPage,
  })),
)
const OnboardingPage = lazy(() =>
  import('@/pages/onboarding-page').then((m) => ({ default: m.OnboardingPage })),
)
const DigitalSkillsLegacyRedirect = lazy(() =>
  import('@/pages/digital-skills-legacy-redirect').then((m) => ({
    default: m.DigitalSkillsLegacyRedirect,
  })),
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
      { index: true, element: <DigitalSkillsPage /> },
      {
        path: 'digital-skills',
        children: [
          { index: true, element: <Navigate to="/" replace /> },
          {
            path: ':stageId/skill/:topicId',
            element: <DigitalSkillsLegacyRedirect />,
          },
          { path: ':stageId/:lessonId', element: <DigitalSkillsLegacyRedirect /> },
          { path: ':stageId', element: <DigitalSkillsLegacyRedirect /> },
        ],
      },
      { path: ':stageId/skill/:topicId', element: <DigitalSkillsLegacyRedirect /> },
      { path: ':stageId/:lessonId', element: <DigitalSkillsLegacyRedirect /> },
      { path: ':stageId', element: <DigitalSkillsTrackPage /> },
    ],
  },
])
