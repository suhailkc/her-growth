import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { SectionHeader } from '@/components/common/section-header'
import { ToolCard } from '@/features/tools/components/tool-card'
import { getToolsByCategory } from '@/features/tools/data/tools-catalog'
import {
  toolCategoryDescriptions,
  toolCategoryLabels,
} from '@/features/tools/tools-labels'
import { TOOL_CATEGORY_IDS } from '@/features/tools/types'

export function ToolsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Useful Tools"
        description="Open trusted websites or use simple helpers here — explained in plain language."
      />

      <div className="space-y-10">
        {TOOL_CATEGORY_IDS.map((categoryId) => {
          const tools = getToolsByCategory(categoryId)
          return (
            <section key={categoryId} aria-labelledby={`tools-cat-${categoryId}`}>
              <SectionHeader
                id={`tools-cat-${categoryId}`}
                title={toolCategoryLabels[categoryId]}
                description={toolCategoryDescriptions[categoryId]}
              />
              <ul className="grid gap-4 sm:grid-cols-2">
                {tools.map((tool) => (
                  <li key={tool.id} className="h-full">
                    <ToolCard tool={tool} />
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </PageContainer>
  )
}
