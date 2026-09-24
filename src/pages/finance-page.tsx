import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { ExpenseTrackerSection } from '@/features/finance/components/expense-tracker-section'
import { FinanceLearningSection } from '@/features/finance/components/finance-learning-section'
import { MoneySafetySection } from '@/features/finance/components/money-safety-section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function FinancePage() {
  return (
    <PageContainer>
      <PageHeader
        title="Finance & Money"
        description="Learn everyday money skills, track household spending on this device, and revisit safety reminders — no investment advice."
      />

      <Tabs defaultValue="learning" className="gap-6">
        <TabsList className="flex h-auto w-full flex-wrap">
          <TabsTrigger value="learning" className="min-h-11 flex-1">
            Learning
          </TabsTrigger>
          <TabsTrigger value="expenses" className="min-h-11 flex-1">
            Expense Tracker
          </TabsTrigger>
          <TabsTrigger value="safety" className="min-h-11 flex-1">
            Money Safety
          </TabsTrigger>
        </TabsList>

        <TabsContent value="learning" className="mt-0">
          <FinanceLearningSection />
        </TabsContent>
        <TabsContent value="expenses" className="mt-0">
          <ExpenseTrackerSection />
        </TabsContent>
        <TabsContent value="safety" className="mt-0">
          <MoneySafetySection />
        </TabsContent>
      </Tabs>
    </PageContainer>
  )
}
