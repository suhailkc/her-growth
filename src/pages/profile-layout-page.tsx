import { NavLink, Outlet } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { cn } from '@/lib/utils'

const profileSections = [
  { label: 'Overview', href: '/profile' },
  { label: 'Language', href: '/profile/language' },
  { label: 'Accessibility', href: '/profile/accessibility' },
  { label: 'Privacy', href: '/profile/privacy' },
] as const

export function ProfileLayoutPage() {
  return (
    <PageContainer width="default">
      <PageHeader
        title="Profile & Settings"
        description="Language, accessibility, and privacy — all in your control."
      />
      <nav
        aria-label="Profile sections"
        className="flex flex-wrap gap-2 border-b border-border/80 pb-4"
      >
        {profileSections.map((section) => (
          <NavLink
            key={section.href}
            to={section.href}
            end={section.href === '/profile'}
            className={({ isActive }) =>
              cn(
                'inline-flex min-h-11 items-center rounded-xl px-4 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/60 text-muted-foreground hover:bg-accent hover:text-accent-foreground',
              )
            }
          >
            {section.label}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </PageContainer>
  )
}
