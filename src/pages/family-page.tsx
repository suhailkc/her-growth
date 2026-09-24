import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { FamilyContactsSection } from '@/features/family/components/family-contacts-section'
import { FamilyDocumentsSection } from '@/features/family/components/family-documents-section'
import { FamilyPlannerSection } from '@/features/family/components/family-planner-section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function FamilyPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Family Management"
        description="Plan household tasks, keep documents together, and save numbers you reach for often."
      />

      <Tabs defaultValue="planner" className="gap-6">
        <TabsList className="flex h-auto w-full flex-wrap">
          <TabsTrigger value="planner" className="min-h-11 flex-1">
            Planner
          </TabsTrigger>
          <TabsTrigger value="documents" className="min-h-11 flex-1">
            Documents
          </TabsTrigger>
          <TabsTrigger value="contacts" className="min-h-11 flex-1">
            Contacts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="planner" className="mt-0">
          <FamilyPlannerSection />
        </TabsContent>
        <TabsContent value="documents" className="mt-0">
          <FamilyDocumentsSection />
        </TabsContent>
        <TabsContent value="contacts" className="mt-0">
          <FamilyContactsSection />
        </TabsContent>
      </Tabs>
    </PageContainer>
  )
}
