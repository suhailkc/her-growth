import { ChevronRight, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionHeader } from '@/components/common/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { parentingArticles } from '@/features/parenting/data/articles'

export function ParentingKnowledgeSection() {
  return (
    <section aria-labelledby="parenting-knowledge-heading">
      <SectionHeader
        id="parenting-knowledge-heading"
        title="Parenting knowledge"
        description="Beginner-friendly ideas about child development — not medical advice."
      />
      <p className="mb-4 rounded-xl border border-border/80 bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
        These articles support everyday parenting. For health concerns about your child,
        please speak with a qualified healthcare provider.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {parentingArticles.map((article) => (
          <li key={article.id}>
            <Link
              to={`/parenting/articles/${article.id}`}
              className="group block h-full"
            >
              <Card variant="interactive" className="h-full">
                <CardHeader className="flex flex-row items-start gap-3 space-y-0">
                  <Lightbulb className="size-5 shrink-0 text-primary" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <CardTitle className="font-serif text-lg">
                      {article.title}
                    </CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {article.summary}
                    </p>
                  </div>
                  <ChevronRight
                    className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">
                  {article.readMinutes} min read
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
