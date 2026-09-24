import { BookMarked, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionHeader } from '@/components/common/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { parentingStories } from '@/features/parenting/data/stories'

export function StoriesSection() {
  return (
    <section aria-labelledby="parenting-stories-heading">
      <SectionHeader
        id="parenting-stories-heading"
        title="Stories to read together"
        description="Short, calm tales you can read aloud at bedtime or after school."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {parentingStories.map((story) => (
          <li key={story.id}>
            <Link to={`/parenting/stories/${story.id}`} className="group block h-full">
              <Card variant="interactive" className="h-full">
                <CardHeader className="flex flex-row items-start gap-3 space-y-0">
                  <BookMarked className="size-5 shrink-0 text-primary" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <CardTitle className="font-serif text-lg">{story.title}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {story.summary}
                    </p>
                  </div>
                  <ChevronRight
                    className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">
                  {story.ageRange} · {story.readMinutes} min read
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
