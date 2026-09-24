import { RouterProvider } from 'react-router-dom'

import { appRouter } from '@/app/router'
import { AppProviders } from '@/app/providers'
import { AuthProvider } from '@/features/auth/auth-provider'
import { DocumentTitle } from '@/features/profile/components/document-title'
import { ThemeSync } from '@/features/profile/components/theme-sync'

export default function App() {
  return (
    <AppProviders>
      <AuthProvider>
        <DocumentTitle />
        <ThemeSync />
        <RouterProvider router={appRouter} />
      </AuthProvider>
    </AppProviders>
  )
}
