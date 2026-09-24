import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProgressBar } from '@/components/common/progress-bar'
import { SectionHeader } from '@/components/common/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { ContinueLearningModule } from '@/types/dashboard'

type ContinueLearningSectionProps = {
  modules: ContinueLearningModule[]
  id?: string
}

export function ContinueLearningSection({
  modules,
  id = 'continue-learning-heading',
}: ContinueLearningSectionProps) {
  return (
    <section aria-labelledby={id} className="space-y-4">
      <SectionHeader
        id={id}
        title="Continue Learning"
        description="Pick up where you left off — no pressure to finish today."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {modules.map((item) => (
          <Link key={item.id} to={item.href} className="group block h-full">
            <Card variant="interactive" className="h-full">
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-serif text-lg leading-snug">
                    {item.title}
                  </CardTitle>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </div>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </CardHeader>
              <CardContent>
                <ProgressBar
                  value={item.progressPercent}
                  label={`Progress on ${item.title}`}
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
