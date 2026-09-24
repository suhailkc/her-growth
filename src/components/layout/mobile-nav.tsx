import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  primaryNavItems,
  secondaryNavItems,
  supplementalNavItems,
} from '@/config/navigation'
import { cn } from '@/lib/utils'

const mobilePrimary = primaryNavItems.filter((item) =>
  ['dashboard', 'today', 'journey', 'digital-skills'].includes(item.id),
)

const fullMenuItems = [
  ...primaryNavItems,
  ...supplementalNavItems,
  ...secondaryNavItems,
]

export function MobileNav() {
  return (
    <>
      <nav
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-border bg-background/95 px-2 py-2 backdrop-blur-md lg:hidden"
        aria-label="Quick navigation"
      >
        {mobilePrimary.map((item) => {
          const Icon = item.icon
          const shortLabel =
            item.id === 'dashboard'
              ? 'Home'
              : item.id === 'digital-skills'
                ? 'Skills'
                : item.label.split(' ')[0]

          return (
            <NavLink
              key={item.id}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                cn(
                  'flex min-h-11 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-[11px] font-medium',
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

      <details className="fixed right-4 bottom-[4.75rem] z-40 lg:hidden">
        <summary className="list-none [&::-webkit-details-marker]:hidden">
          <Button size="icon-lg" className="rounded-full shadow-[var(--shadow-card)]">
            <Menu className="size-5" />
            <span className="sr-only">Open full menu</span>
          </Button>
        </summary>
        <div className="absolute right-0 bottom-14 w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-border bg-popover p-2 shadow-[var(--shadow-card)]">
          <ul className="max-h-[50vh] space-y-1 overflow-y-auto">
            {fullMenuItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.href}
                  className="block min-h-11 rounded-lg px-3 py-2.5 text-sm hover:bg-accent"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </>
  )
}
