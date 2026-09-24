import { CheckCircle2, ChevronRight, Hammer } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionHeader } from '@/components/common/section-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { careerProjects } from '@/features/career/data/projects'
import { useCareerStore } from '@/features/career/career-store'

export function PracticalProjectsSection() {
  const completedProjectIds = useCareerStore((s) => s.completedProjectIds)

  return (
    <section aria-labelledby="career-projects-heading">
      <SectionHeader
        id="career-projects-heading"
        title="Practical projects"
        description="Hands-on builds for your portfolio or personal confidence — complete at your pace."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {careerProjects.map((project) => {
          const complete = completedProjectIds.includes(project.id)
          return (
            <li key={project.id}>
              <Link
                to={`/bed-career/projects/${project.id}`}
                className="group block h-full"
              >
                <Card variant="interactive" className="h-full">
                  <CardHeader className="flex flex-row items-start gap-3 space-y-0">
                    <Hammer className="size-5 shrink-0 text-primary" aria-hidden />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <CardTitle className="font-serif text-lg">
                          {project.title}
                        </CardTitle>
                        {complete ? (
                          <Badge variant="secondary" className="gap-1 font-normal">
                            <CheckCircle2 className="size-3.5" aria-hidden />
                            Done
                          </Badge>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <ChevronRight
                      className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-muted-foreground">
                    About {project.estimatedMinutes} min
                  </CardContent>
                </Card>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
