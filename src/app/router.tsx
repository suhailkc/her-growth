import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { AuthGuard } from '@/components/layout/auth-guard'
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
const LoginPage = lazy(() =>
  import('@/pages/login-page').then((m) => ({ default: m.LoginPage })),
)
const DigitalSkillsLegacyRedirect = lazy(() =>
  import('@/pages/digital-skills-legacy-redirect').then((m) => ({
    default: m.DigitalSkillsLegacyRedirect,
  })),
)

export const appRouter = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/onboarding',
    element: (
      <AuthGuard>
        <OnboardingPage />
      </AuthGuard>
    ),
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <OnboardingGuard>
          <AppShell />
        </OnboardingGuard>
      </AuthGuard>
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
