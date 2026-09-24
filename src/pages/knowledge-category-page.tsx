import { BookOpen } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { buttonVariants } from '@/components/ui/button'
import { KnowledgeLessonListItem } from '@/features/knowledge/components/knowledge-lesson-list-item'
import { getKnowledgeLessonsByCategory } from '@/features/knowledge/data/lessons'
import { knowledgeCategoryLabels } from '@/features/knowledge/knowledge-labels'
import { useKnowledgeStore } from '@/features/knowledge/knowledge-store'
import {
  KNOWLEDGE_CATEGORY_IDS,
  type KnowledgeCategoryId,
} from '@/features/knowledge/types'

function isKnowledgeCategoryId(value: string): value is KnowledgeCategoryId {
  return (KNOWLEDGE_CATEGORY_IDS as readonly string[]).includes(value)
}

export function KnowledgeCategoryPage() {
  const { categoryId = '' } = useParams()
  const completedLessonIds = useKnowledgeStore((s) => s.completedLessonIds)

  if (!isKnowledgeCategoryId(categoryId)) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={BookOpen}
          title="Category not found"
          description="This topic is not available yet."
          action={
            <Link
              to="/knowledge"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              All categories
            </Link>
          }
        />
      </PageContainer>
    )
  }

  const lessons = getKnowledgeLessonsByCategory(categoryId)

  return (
    <PageContainer>
      <PageHeader
        title={knowledgeCategoryLabels[categoryId]}
        description="Work through one lesson at a time. Mark complete when you finish the practical task."
        action={
          <Link
            to="/knowledge"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            All categories
          </Link>
        }
      />
      {lessons.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="Lessons coming soon"
          description="We are preparing simple content for this category."
        />
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {lessons.map((lesson) => (
            <KnowledgeLessonListItem
              key={lesson.id}
              lesson={lesson}
              complete={completedLessonIds.includes(lesson.id)}
            />
          ))}
        </ul>
      )}
    </PageContainer>
  )
}
