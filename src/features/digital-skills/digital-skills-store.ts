import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { shouldShowWelcomeBack } from '@/features/digital-skills/lib/journey-insights'
import { topicKey } from '@/features/digital-skills/lib/topic-progress'

type DigitalSkillsStoreState = {
  completedTopicIds: string[]
  celebratedStageCompleteIds: string[]
  lastVisitAt: string | null
  isTopicComplete: (stageId: string, topicId: string) => boolean
  toggleTopicComplete: (stageId: string, topicId: string) => void
  markStageCelebrated: (stageId: string) => void
  hasCelebratedStage: (stageId: string) => boolean
  /** Updates last visit; returns whether to show welcome-back for this session. */
  recordVisit: () => boolean
}

export const useDigitalSkillsStore = create<DigitalSkillsStoreState>()(
  persist(
    (set, get) => ({
      completedTopicIds: [],
      celebratedStageCompleteIds: [],
      lastVisitAt: null,
      isTopicComplete: (stageId, topicId) => {
        return get().completedTopicIds.includes(topicKey(stageId, topicId))
      },
      toggleTopicComplete: (stageId, topicId) => {
        const key = topicKey(stageId, topicId)
        const current = get().completedTopicIds
        const next = current.includes(key)
          ? current.filter((id) => id !== key)
          : [...current, key]
        set({ completedTopicIds: next })
      },
      markStageCelebrated: (stageId) => {
        const current = get().celebratedStageCompleteIds
        if (current.includes(stageId)) {
          return
        }
        set({ celebratedStageCompleteIds: [...current, stageId] })
      },
      hasCelebratedStage: (stageId) => {
        return get().celebratedStageCompleteIds.includes(stageId)
      },
      recordVisit: () => {
        const lastVisitAt = get().lastVisitAt
        const showWelcomeBack = shouldShowWelcomeBack(lastVisitAt)
        set({ lastVisitAt: new Date().toISOString() })
        return showWelcomeBack
      },
    }),
    {
      name: 'digital-skills-progress',
      partialize: (state) => ({
        completedTopicIds: state.completedTopicIds,
        celebratedStageCompleteIds: state.celebratedStageCompleteIds,
        lastVisitAt: state.lastVisitAt,
      }),
      version: 3,
      migrate: (persisted) => {
        const state = persisted as {
          completedTopicIds?: string[]
          celebratedStageCompleteIds?: string[]
          lastVisitAt?: string | null
          lessons?: unknown
        }
        return {
          completedTopicIds: state.completedTopicIds ?? [],
          celebratedStageCompleteIds: state.celebratedStageCompleteIds ?? [],
          lastVisitAt: state.lastVisitAt ?? null,
        }
      },
    },
  ),
)

export function useCompletedTopicSet(): Set<string> {
  const completedTopicIds = useDigitalSkillsStore((s) => s.completedTopicIds)
  return new Set(completedTopicIds)
}
