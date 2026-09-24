import { useEffect } from 'react'

import { useProfileStore } from '@/features/profile/profile-store'

export function ThemeSync() {
  const theme = useProfileStore((s) => s.settings.theme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.classList.add(prefersDark ? 'dark' : 'light')
      return
    }
    root.classList.add(theme)
  }, [theme])

  return null
}
