import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { Card, CardContent } from '@/components/ui/card'

export function AboutPage() {
  return (
    <PageContainer width="narrow">
      <PageHeader
        title="A personal note"
        description="This app was made with love, just for you."
      />
      <Card variant="warm">
        <CardContent className="space-y-4 p-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Dear Nasreena, this is your private place to grow with technology — not a
            course, not a test, and not something you need to hurry through.
          </p>
          <p>
            Every skill here is something you can actually use in daily life: finding
            information, organizing files, staying in touch, and feeling calm on the
            computer.
          </p>
          <p className="font-medium text-foreground">Made with love for Nasreena ❤️</p>
        </CardContent>
      </Card>
    </PageContainer>
  )
}
