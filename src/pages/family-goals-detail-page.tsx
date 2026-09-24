import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { buttonVariants } from '@/components/ui/button'
import { getFamilyGoalById } from '@/data/mock-modules'
import { HeartHandshake } from 'lucide-react'

export function FamilyGoalsDetailPage() {
  const { goalId = '' } = useParams()
  const goal = getFamilyGoalById(goalId)

  if (!goal) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={HeartHandshake}
          title="Goal not found"
          description="This family goal is not listed yet."
          action={
            <Link
              to="/family-goals"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Back to goals
            </Link>
          }
        />
      </PageContainer>
    )
  }

  return (
    <PageContainer width="narrow">
      <PageHeader
        title={goal.title}
        description={goal.summary}
        action={
          <Link
            to="/family-goals"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            All goals
          </Link>
        }
      />
      <EmptyState
        icon={HeartHandshake}
        title="Goal details coming soon"
        description="Checklists and notes for this goal will live here when you are ready to use them."
      />
    </PageContainer>
  )
}
