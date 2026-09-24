import { ChevronRight, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionHeader } from '@/components/common/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { careerOptions } from '@/features/career/data/careers'

export function CareerExplorationSection() {
  return (
    <section aria-labelledby="career-explore-heading">
      <SectionHeader
        id="career-explore-heading"
        title="Career exploration"
        description="Options described neutrally — explore if curious. No ranking, no pressure to work outside the home."
      />
      <p className="mb-4 rounded-xl border border-border/80 bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
        These paths are examples only. Many people use teaching skills in daily life
        without a formal job title. Take what is useful and leave the rest.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {careerOptions.map((option) => (
          <li key={option.id}>
            <Link
              to={`/bed-career/careers/${option.id}`}
              className="group block h-full"
            >
              <Card variant="interactive" className="h-full">
                <CardHeader className="flex flex-row items-start gap-3 space-y-0">
                  <Compass className="size-5 shrink-0 text-primary" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <CardTitle className="font-serif text-lg">{option.title}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {option.summary}
                    </p>
                  </div>
                  <ChevronRight
                    className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </CardHeader>
                <CardContent className="pt-0">
                  <span className="text-sm font-medium text-primary">Learn more</span>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
