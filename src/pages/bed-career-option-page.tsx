import { Compass } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getCareerOptionById } from '@/features/career/data/careers'

export function BedCareerOptionPage() {
  const { careerId = '' } = useParams()
  const option = getCareerOptionById(careerId)

  if (!option) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={Compass}
          title="Option not found"
          description="This career path is not listed yet."
          action={
            <Link
              to="/bed-career"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Back to exploration
            </Link>
          }
        />
      </PageContainer>
    )
  }

  return (
    <PageContainer width="narrow">
      <PageHeader
        title={option.title}
        description={option.summary}
        action={
          <Link
            to="/bed-career"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            All options
          </Link>
        }
      />

      <div className="space-y-6">
        <DetailListCard title="What it involves" items={option.whatItInvolves} />
        <DetailListCard title="Skills that help" items={option.skillsRequired} />
        <DetailListCard title="Example tasks" items={option.exampleTasks} />
        <DetailListCard
          title="Optional learning path"
          items={option.optionalLearningPath}
        />
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        This is information for exploration only — not a recommendation to pursue any
        particular job.
      </p>

      <div className="mt-4">
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

type DetailListCardProps = {
  title: string
  items: string[]
}

function DetailListCard({ title, items }: DetailListCardProps) {
  return (
    <Card variant="learning">
      <CardHeader>
        <CardTitle className="font-serif text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
