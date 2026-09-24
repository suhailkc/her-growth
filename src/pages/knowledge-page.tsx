import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { SectionHeader } from '@/components/common/section-header'
import { KnowledgeCategoryGrid } from '@/features/knowledge/components/knowledge-category-grid'

export function KnowledgePage() {
  return (
    <PageContainer>
      <PageHeader
        title="General Knowledge"
        description="Short, practical lessons for everyday confidence — not exams or heavy theory."
      />
      <SectionHeader
        title="Choose a topic"
        description="Each category has calm, step-by-step lessons you can finish in a few minutes."
      />
      <KnowledgeCategoryGrid />
    </PageContainer>
  )
}
