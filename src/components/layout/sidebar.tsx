import type { ComponentType } from 'react'
import { NavLink } from 'react-router-dom'

import { Separator } from '@/components/ui/separator'
import { primaryNavItems, secondaryNavItems } from '@/config/navigation'
import { cn } from '@/lib/utils'

function SidebarLink({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: ComponentType<{ className?: string }>
}) {
  return (
    <NavLink
      to={href}
      end={href === '/'}
      className={({ isActive }) =>
        cn(
          'flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-[color,box-shadow,background]',
          isActive
            ? 'bg-primary text-primary-foreground shadow-[var(--shadow-soft)]'
            : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground',
        )
      }
    >
      <Icon className="size-4 shrink-0" aria-hidden />
      <span className="truncate">{label}</span>
    </NavLink>
  )
}

export function Sidebar() {
  return (
    <aside className="hidden w-[17rem] shrink-0 border-r border-border/80 bg-sidebar lg:flex lg:flex-col">
      <div className="border-b border-border/80 px-5 py-6">
        <p className="font-serif text-xl font-semibold text-sidebar-foreground">
          🌱 Her Growth
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Nasreena&apos;s digital journey
        </p>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4" aria-label="Main">
        {primaryNavItems.map((item) => (
          <SidebarLink
            key={item.id}
            href={item.href}
            label={item.label}
            icon={item.icon}
          />
        ))}
        <Separator className="my-4" />
        {secondaryNavItems.map((item) => (
          <SidebarLink
            key={item.id}
            href={item.href}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </nav>
      <div className="border-t border-border/80 p-4">
        <p className="text-center text-xs text-muted-foreground leading-relaxed">
          Made with love for Nasreena ❤️
        </p>
      </div>
    </aside>
  )
}

/** @deprecated Use `Sidebar` — kept for gradual migration */
export const AppSidebar = Sidebar
