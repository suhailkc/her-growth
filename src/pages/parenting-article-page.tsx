import { Lightbulb } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { buttonVariants } from '@/components/ui/button'
import { getParentingArticleById } from '@/features/parenting/data/articles'

export function ParentingArticlePage() {
  const { articleId = '' } = useParams()
  const article = getParentingArticleById(articleId)

  if (!article) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={Lightbulb}
          title="Article not found"
          description="This article is not available yet."
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
        title={article.title}
        description={`${article.readMinutes} min read · ${article.summary}`}
        action={
          <Link
            to="/parenting"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            All articles
          </Link>
        }
      />

      <p className="mb-6 rounded-xl border border-border/80 bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
        General parenting support only — not medical diagnosis or treatment. Talk with
        your doctor or pediatrician for health questions about your child.
      </p>

      <article className="space-y-8">
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-xl font-semibold">{section.heading}</h2>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-foreground/90">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
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
