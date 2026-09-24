import { Lightbulb, Map } from 'lucide-react'
import { Link } from 'react-router-dom'

import { StatusBadge } from '@/components/common/status-badge'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { JourneyTopicTodoItem } from '@/features/digital-skills/components/journey-topic-todo-item'
import type { TodaySkillFocus } from '@/features/mission/today-skill-focus'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'

type TodaySkillFocusCardProps = {
  focus: TodaySkillFocus
}

export function TodaySkillFocusCard({ focus }: TodaySkillFocusCardProps) {
  const complete = useDigitalSkillsStore((s) =>
    s.isTopicComplete(focus.stageId, focus.topicId),
  )

  return (
    <Card variant="warm" className="overflow-hidden">
      <CardHeader className="border-b border-border/60 bg-background/40">
        <div className="flex flex-wrap items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Map className="size-5" aria-hidden />
          </div>
          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="font-serif text-2xl sm:text-3xl">{focus.topic.label}</CardTitle>
              <StatusBadge
                label={complete ? 'Marked done' : 'Your focus for today'}
                tone={complete ? 'success' : 'active'}
              />
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              {focus.topic.description}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="font-normal">
            Digital Skills
          </Badge>
          <Badge variant="outline" className="font-normal">
            Stage {focus.stageOrder}: {focus.stageTitle}
          </Badge>
        </div>

        <div className="rounded-xl border border-border/70 bg-muted/30 p-4 sm:p-5">
          <div className="flex gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <div className="space-y-1">
              <p className="font-medium text-foreground">Why this stage matters</p>
              <p className="text-muted-foreground leading-relaxed">{focus.whyItMatters}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium text-foreground">When you have tried it yourself</p>
          <JourneyTopicTodoItem stageId={focus.stageId} topic={focus.topic} />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Research in your own way — search, watch a video, or ask someone you trust — then tick the
          box above. No step-by-step lesson here; you choose how to learn.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 border-t border-border/60 bg-muted/20 sm:flex-row">
        <Link
          to="/digital-skills"
          className={buttonVariants({
            variant: 'secondary',
            size: 'lg',
            className: 'w-full rounded-xl sm:w-auto',
          })}
        >
          See full journey
        </Link>
      </CardFooter>
    </Card>
  )
}
