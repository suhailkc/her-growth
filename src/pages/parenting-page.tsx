import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { ActivityLibrarySection } from '@/features/parenting/components/activity-library-section'
import { ParentingKnowledgeSection } from '@/features/parenting/components/parenting-knowledge-section'
import { StoriesSection } from '@/features/parenting/components/stories-section'
import { TodaysActivitySection } from '@/features/parenting/components/todays-activity-section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function ParentingPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Parenting & Child Development"
        description="Simple activities, stories, and calm reading to support your child's learning at home."
      />

      <div className="mb-8">
        <TodaysActivitySection />
      </div>

      <Tabs defaultValue="activities" className="gap-6">
        <TabsList className="flex h-auto w-full flex-wrap">
          <TabsTrigger value="activities" className="min-h-11 flex-1">
            Activities
          </TabsTrigger>
          <TabsTrigger value="stories" className="min-h-11 flex-1">
            Stories
          </TabsTrigger>
          <TabsTrigger value="knowledge" className="min-h-11 flex-1">
            Knowledge
          </TabsTrigger>
        </TabsList>

        <TabsContent value="activities" className="mt-0">
          <ActivityLibrarySection />
        </TabsContent>
        <TabsContent value="stories" className="mt-0">
          <StoriesSection />
        </TabsContent>
        <TabsContent value="knowledge" className="mt-0">
          <ParentingKnowledgeSection />
        </TabsContent>
      </Tabs>
    </PageContainer>
  )
}
