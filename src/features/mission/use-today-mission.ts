import { mockTodayMission, mockTodayMissionDetail } from '@/data/mock-mission'
import { mergeMissionProgress, useMissionStore } from '@/features/mission/mission-store'
import type { TodayMissionDetail } from '@/types/mission'
import type { DailyMission } from '@/types/user'

export function useTodayMissionDetail(): TodayMissionDetail {
  const phase = useMissionStore((s) => s.phase)
  const completedStepIds = useMissionStore((s) => s.completedStepIds)

  const progressPercent = mergeMissionProgress(
    mockTodayMission,
    completedStepIds,
    mockTodayMissionDetail.steps.length,
    phase,
  ).progressPercent

  let status = mockTodayMissionDetail.status
  if (phase === 'complete') {
    status = 'completed'
  } else if (phase === 'active' || completedStepIds.length > 0) {
    status = 'in_progress'
  }

  return {
    ...mockTodayMissionDetail,
    status,
    progressPercent,
  }
}

export function useTodayMissionSummary(): DailyMission {
  const phase = useMissionStore((s) => s.phase)
  const completedStepIds = useMissionStore((s) => s.completedStepIds)

  return mergeMissionProgress(
    mockTodayMission,
    completedStepIds,
    mockTodayMissionDetail.steps.length,
    phase,
  )
}
