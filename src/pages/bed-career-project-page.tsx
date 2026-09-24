import { CheckCircle2, Hammer } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getCareerProjectById } from '@/features/career/data/projects'
import { useCareerStore } from '@/features/career/career-store'

export function BedCareerProjectPage() {
  const { projectId = '' } = useParams()
  const project = getCareerProjectById(projectId)
  const completedProjectIds = useCareerStore((s) => s.completedProjectIds)
  const markProjectComplete = useCareerStore((s) => s.markProjectComplete)

  if (!project) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={Hammer}
          title="Project not found"
          description="This project is not available yet."
          action={
            <Link
              to="/bed-career"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Back to projects
            </Link>
          }
        />
      </PageContainer>
    )
  }

  const complete = completedProjectIds.includes(project.id)

  return (
    <PageContainer width="narrow">
      <PageHeader
        title={project.title}
        description={`About ${project.estimatedMinutes} min · ${project.description}`}
        action={
          <Link
            to="/bed-career"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            All projects
          </Link>
        }
      />

      <Card variant="learning" className="mb-6">
        <CardHeader>
          <CardTitle className="font-serif text-lg">Skills involved</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            {project.skillsInvolved.map((skill) => (
              <li key={skill} className="rounded-lg bg-muted/60 px-3 py-1">
                {skill}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <section>
        <h2 className="font-serif text-xl font-semibold">Steps</h2>
        <ol className="mt-3 list-decimal space-y-3 pl-5 text-base leading-relaxed text-foreground/90">
          {project.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        {complete ? (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="size-5 text-primary" aria-hidden />
            Project marked complete — nice work.
          </p>
        ) : (
          <Button
            type="button"
            size="lg"
            onClick={() => markProjectComplete(project.id)}
          >
            Mark project complete
          </Button>
        )}
        <Link
          to="/bed-career"
          className={buttonVariants({
            variant: 'secondary',
            size: 'lg',
            className: 'rounded-xl',
          })}
        >
          Back to B.Ed. & Career
        </Link>
      </div>
    </PageContainer>
  )
}
