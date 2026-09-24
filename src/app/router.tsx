import { createBrowserRouter } from 'react-router-dom'

import { AppShell } from '@/components/layout/app-shell'
import { DashboardPage } from '@/pages/dashboard-page'
import { ModulePlaceholderPage } from '@/pages/module-placeholder-page'
import { TodayPage } from '@/pages/today-page'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'today', element: <TodayPage /> },
      { path: 'journey', element: <ModulePlaceholderPage moduleId="journey" /> },
      {
        path: 'digital-skills',
        element: <ModulePlaceholderPage moduleId="digital-skills" />,
      },
      { path: 'family', element: <ModulePlaceholderPage moduleId="family" /> },
      { path: 'finance', element: <ModulePlaceholderPage moduleId="finance" /> },
      { path: 'parenting', element: <ModulePlaceholderPage moduleId="parenting" /> },
      { path: 'bed-career', element: <ModulePlaceholderPage moduleId="bed-career" /> },
      {
        path: 'general-knowledge',
        element: <ModulePlaceholderPage moduleId="general-knowledge" />,
      },
      { path: 'tools', element: <ModulePlaceholderPage moduleId="tools" /> },
      {
        path: 'family-goals',
        element: <ModulePlaceholderPage moduleId="family-goals" />,
      },
      { path: 'profile', element: <ModulePlaceholderPage moduleId="profile" /> },
    ],
  },
])
