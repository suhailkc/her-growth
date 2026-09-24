import { Bell } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { mockNotifications } from '@/data/mock-notifications'
import { cn } from '@/lib/utils'

export function NotificationArea() {
  const unreadCount = mockNotifications.filter((item) => !item.read).length

  return (
    <details className="relative">
      <summary
        className={cn('list-none [&::-webkit-details-marker]:hidden', 'inline-flex')}
      >
        <Button
          variant="outline"
          size="icon-lg"
          className="relative rounded-xl border-border/80 bg-background/80"
          aria-label={
            unreadCount > 0 ? `Notifications, ${unreadCount} unread` : 'Notifications'
          }
        >
          <Bell className="size-5" aria-hidden />
          {unreadCount > 0 ? (
            <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
              {unreadCount}
            </span>
          ) : null}
        </Button>
      </summary>
      <div className="absolute right-0 z-50 mt-2 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-border bg-popover p-2 shadow-[var(--shadow-card)]">
        <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Updates
        </p>
        <ul className="max-h-64 space-y-1 overflow-y-auto">
          {mockNotifications.map((notification) => (
            <li
              key={notification.id}
              className={cn(
                'rounded-xl px-3 py-2.5 text-sm',
                notification.read ? 'text-muted-foreground' : 'bg-surface-warm/80',
              )}
            >
              <p className="font-medium text-foreground">{notification.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed">{notification.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </details>
  )
}
