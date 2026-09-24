import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { NavItem } from '@/types/navigation'

type ModuleCardProps = {
  item: NavItem
  className?: string
}

export function ModuleCard({ item, className }: ModuleCardProps) {
  const Icon = item.icon

  return (
    <Link to={item.href} className={cn('group block h-full', className)}>
      <Card variant="interactive" className="h-full bg-card">
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" aria-hidden />
            </div>
            <ArrowUpRight
              className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="font-serif text-lg">{item.label}</CardTitle>
              {item.optional ? <Badge variant="optional">Optional</Badge> : null}
            </div>
            <CardDescription className="text-sm leading-relaxed">
              {item.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <span className="text-sm font-medium text-primary">Open module</span>
        </CardContent>
      </Card>
    </Link>
  )
}
