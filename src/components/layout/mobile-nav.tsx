import { NavLink } from 'react-router-dom'

import { primaryNavItems } from '@/config/navigation'
import { cn } from '@/lib/utils'

export function MobileNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 px-3 py-2 backdrop-blur-md lg:hidden"
      aria-label="Quick navigation"
    >
      {primaryNavItems.map((item) => {
        const Icon = item.icon
        const shortLabel = item.id === 'digital-skills' ? 'Journey' : item.label

        return (
          <NavLink
            key={item.id}
            to={item.href}
            end={item.href === '/'}
            className={({ isActive }) =>
              cn(
                'flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg px-2 py-2 text-xs font-medium',
                isActive ? 'text-primary' : 'text-muted-foreground',
              )
            }
          >
            <Icon className="size-5" aria-hidden />
            <span className="truncate">{shortLabel}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}
