import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { buttonVariants } from '@/components/ui/button'
import { getKnowledgeTopicById } from '@/data/mock-modules'
import { BookOpen } from 'lucide-react'

export function KnowledgeTopicPage() {
  const { topicId = '' } = useParams()
  const topic = getKnowledgeTopicById(topicId)

  if (!topic) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={BookOpen}
          title="Topic not found"
          description="This article is not available yet."
          action={
            <Link
              to="/knowledge"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Browse topics
            </Link>
          }
        />
      </PageContainer>
    )
  }

  return (
    <PageContainer width="narrow">
      <PageHeader
        title={topic.title}
        description={`${topic.readMinutes} min read · ${topic.summary}`}
        action={
          <Link
            to="/knowledge"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            All topics
          </Link>
        }
      />
      <EmptyState
        icon={BookOpen}
        title="Article content coming soon"
        description="We will add the full article here with comfortable spacing and simple language."
      />
    </PageContainer>
  )
}
