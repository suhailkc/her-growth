import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { SectionHeader } from '@/components/common/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { mockKnowledgeTopics } from '@/data/mock-modules'

export function KnowledgePage() {
  return (
    <PageContainer>
      <PageHeader
        title="General Knowledge"
        description="Short, useful reads you can finish in a few calm minutes."
      />
      <SectionHeader title="Topics for you" />
      <ul className="grid gap-4 sm:grid-cols-2">
        {mockKnowledgeTopics.map((topic) => (
          <li key={topic.id}>
            <Link to={`/knowledge/${topic.id}`} className="block h-full">
              <Card variant="interactive" className="h-full">
                <CardHeader>
                  <CardTitle className="font-serif text-lg">{topic.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{topic.summary}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {topic.readMinutes} min read
                  </p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  )
}
