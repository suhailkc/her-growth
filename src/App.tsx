import { RouterProvider } from 'react-router-dom'

import { appRouter } from '@/app/router'
import { AppProviders } from '@/app/providers'
import { ThemeSync } from '@/features/profile/components/theme-sync'

export default function App() {
  return (
    <AppProviders>
      <ThemeSync />
      <RouterProvider router={appRouter} />
    </AppProviders>
  )
}
