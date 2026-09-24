import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { TodayJourneyCompleteCard } from '@/features/mission/components/today-journey-complete-card'
import { TodaySkillFocusCard } from '@/features/mission/components/today-skill-focus-card'
import { useTodaySkillFocus } from '@/features/mission/use-today-mission'

export function TodayPage() {
  const focus = useTodaySkillFocus()

  return (
    <PageContainer width="narrow">
      <PageHeader
        title="Today's Mission"
        description="One skill from your Digital Skills roadmap — learn it your way, then mark it done when you are ready."
      />
      {focus ? <TodaySkillFocusCard focus={focus} /> : <TodayJourneyCompleteCard />}
    </PageContainer>
  )
}
