import { BookMarked } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { buttonVariants } from '@/components/ui/button'
import { getParentingStoryById } from '@/features/parenting/data/stories'

export function ParentingStoryPage() {
  const { storyId = '' } = useParams()
  const story = getParentingStoryById(storyId)

  if (!story) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={BookMarked}
          title="Story not found"
          description="This story is not available yet."
          action={
            <Link
              to="/parenting"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Back to Parenting
            </Link>
          }
        />
      </PageContainer>
    )
  }

  return (
    <PageContainer width="narrow">
      <PageHeader
        title={story.title}
        description={`${story.ageRange} · ${story.readMinutes} min read · ${story.summary}`}
        action={
          <Link
            to="/parenting"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            All stories
          </Link>
        }
      />

      <article className="space-y-4 text-base leading-relaxed text-foreground/90">
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>

      <div className="mt-8">
        <Link
          to="/parenting"
          className={buttonVariants({
            variant: 'secondary',
            size: 'lg',
            className: 'rounded-xl',
          })}
        >
          Back to Parenting
        </Link>
      </div>
    </PageContainer>
  )
}
