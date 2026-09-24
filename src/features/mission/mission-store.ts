import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { TODAY_MISSION_ID } from '@/data/mock-mission'
import type { MissionPhase } from '@/types/mission'
import type { DailyMission } from '@/types/user'

type MissionStoreState = {
  missionId: string
  phase: MissionPhase
  currentStepIndex: number
  completedStepIds: string[]
  startedAt: number | null
  completedAt: number | null
  startMission: (missionId: string) => void
  setCurrentStepIndex: (index: number) => void
  toggleStepComplete: (stepId: string) => void
  goToNextStep: (stepCount: number) => void
  goToPreviousStep: () => void
  completeMission: () => void
  resetMission: (missionId: string) => void
}

function computeProgressPercent(
  completedCount: number,
  totalSteps: number,
  phase: MissionPhase,
): number {
  if (phase === 'complete') {
    return 100
  }
  if (totalSteps === 0) {
    return 0
  }
  return Math.round((completedCount / totalSteps) * 100)
}

export function mergeMissionProgress(
  mission: DailyMission,
  completedStepIds: string[],
  totalSteps: number,
  phase: MissionPhase,
): DailyMission {
  const progressPercent = computeProgressPercent(
    completedStepIds.length,
    totalSteps,
    phase,
  )

  let status: DailyMission['status'] = 'not_started'
  if (phase === 'complete') {
    status = 'completed'
  } else if (phase === 'active' || completedStepIds.length > 0) {
    status = 'in_progress'
  }

  return {
    ...mission,
    status,
    progressPercent,
  }
}

export const useMissionStore = create<MissionStoreState>()(
  persist(
    (set, get) => ({
      missionId: TODAY_MISSION_ID,
      phase: 'overview',
      currentStepIndex: 0,
      completedStepIds: [],
      startedAt: null,
      completedAt: null,
      startMission: (missionId) => {
        const state = get()
        if (state.missionId !== missionId) {
          set({
            missionId,
            phase: 'active',
            currentStepIndex: 0,
            completedStepIds: [],
            startedAt: Date.now(),
            completedAt: null,
          })
          return
        }
        set({
          phase: 'active',
          startedAt: state.startedAt ?? Date.now(),
        })
      },
      setCurrentStepIndex: (index) => {
        set({ currentStepIndex: Math.max(0, index) })
      },
      toggleStepComplete: (stepId) => {
        const { completedStepIds } = get()
        const next = completedStepIds.includes(stepId)
          ? completedStepIds.filter((id) => id !== stepId)
          : [...completedStepIds, stepId]
        set({ completedStepIds: next })
      },
      goToNextStep: (stepCount) => {
        const { currentStepIndex } = get()
        set({ currentStepIndex: Math.min(stepCount - 1, currentStepIndex + 1) })
      },
      goToPreviousStep: () => {
        const { currentStepIndex } = get()
        set({ currentStepIndex: Math.max(0, currentStepIndex - 1) })
      },
      completeMission: () => {
        set({
          phase: 'complete',
          completedAt: Date.now(),
        })
      },
      resetMission: (missionId) => {
        set({
          missionId,
          phase: 'overview',
          currentStepIndex: 0,
          completedStepIds: [],
          startedAt: null,
          completedAt: null,
        })
      },
    }),
    {
      name: 'her-growth-mission-progress',
      partialize: (state) => ({
        missionId: state.missionId,
        phase: state.phase,
        currentStepIndex: state.currentStepIndex,
        completedStepIds: state.completedStepIds,
        startedAt: state.startedAt,
        completedAt: state.completedAt,
      }),
    },
  ),
)
