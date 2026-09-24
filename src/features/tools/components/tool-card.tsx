import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { ToolDefinition } from '@/features/tools/types'

type ToolCardProps = {
  tool: ToolDefinition
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon

  return (
    <Card variant="interactive" className="flex h-full flex-col">
      <CardHeader className="flex flex-row items-start gap-3 space-y-0">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <CardTitle className="font-serif text-lg">{tool.name}</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">{tool.description}</p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {tool.beginnerExplanation}
        </p>
        {tool.externalUrl ? (
          <a
            href={tool.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              size: 'lg',
              className: 'inline-flex w-full items-center gap-2 rounded-xl sm:w-auto',
            })}
          >
            Open
            <ExternalLink className="size-4" aria-hidden />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : tool.internalPath ? (
          <Link
            to={tool.internalPath}
            className={buttonVariants({
              size: 'lg',
              className: 'w-full rounded-xl sm:w-auto',
            })}
          >
            Open
          </Link>
        ) : null}
      </CardContent>
    </Card>
  )
}
