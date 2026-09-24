import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { countLessonsByCategory } from '@/features/knowledge/data/lessons'
import {
  knowledgeCategoryLabels,
  knowledgeCategorySummaries,
} from '@/features/knowledge/knowledge-labels'
import { KNOWLEDGE_CATEGORY_IDS } from '@/features/knowledge/types'

export function KnowledgeCategoryGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {KNOWLEDGE_CATEGORY_IDS.map((categoryId) => {
        const lessonCount = countLessonsByCategory(categoryId)
        return (
          <li key={categoryId}>
            <Link
              to={`/knowledge/categories/${categoryId}`}
              className="group block h-full"
            >
              <Card variant="interactive" className="h-full">
                <CardHeader className="flex flex-row items-start gap-3 space-y-0">
                  <div className="min-w-0 flex-1">
                    <CardTitle className="font-serif text-lg leading-snug">
                      {knowledgeCategoryLabels[categoryId]}
                    </CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {knowledgeCategorySummaries[categoryId]}
                    </p>
                  </div>
                  <ChevronRight
                    className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">
                  {lessonCount > 0
                    ? `${lessonCount} lesson${lessonCount === 1 ? '' : 's'}`
                    : 'Lessons coming soon'}
                </CardContent>
              </Card>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
