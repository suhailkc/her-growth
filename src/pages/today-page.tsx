import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { MissionCompletion } from '@/features/mission/mission-completion'
import { MissionOverview } from '@/features/mission/mission-overview'
import { MissionStepView } from '@/features/mission/mission-step-view'
import { useMissionStore } from '@/features/mission/mission-store'
import { useMissionSync } from '@/features/mission/use-mission-sync'
import { useTodayMissionDetail } from '@/features/mission/use-today-mission'

export function TodayPage() {
  useMissionSync()
  const mission = useTodayMissionDetail()
  const phase = useMissionStore((s) => s.phase)
  const currentStepIndex = useMissionStore((s) => s.currentStepIndex)
  const startMission = useMissionStore((s) => s.startMission)
  const completeMission = useMissionStore((s) => s.completeMission)
  const resetMission = useMissionStore((s) => s.resetMission)
  const setCurrentStepIndex = useMissionStore((s) => s.setCurrentStepIndex)

  const step = mission.steps[currentStepIndex] ?? mission.steps[0]

  const handleBackToOverview = () => {
    useMissionStore.setState({ phase: 'overview' })
  }

  const handlePracticeAgain = () => {
    resetMission(mission.id)
    startMission(mission.id)
    setCurrentStepIndex(0)
  }

  return (
    <PageContainer width="narrow">
      {phase !== 'active' ? (
        <PageHeader
          title="Today's Mission"
          description="One practical step. Take your time — there is no rush."
        />
      ) : null}

      {phase === 'complete' ? (
        <MissionCompletion mission={mission} onPracticeAgain={handlePracticeAgain} />
      ) : phase === 'active' && step ? (
        <MissionStepView
          mission={mission}
          step={step}
          stepIndex={currentStepIndex}
          onBackToOverview={handleBackToOverview}
          onCompleteMission={completeMission}
        />
      ) : (
        <MissionOverview mission={mission} onStart={() => startMission(mission.id)} />
      )}
    </PageContainer>
  )
}
