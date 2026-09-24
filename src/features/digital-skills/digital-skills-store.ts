import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { topicKey } from '@/features/digital-skills/lib/topic-progress'

type DigitalSkillsStoreState = {
  completedTopicIds: string[]
  isTopicComplete: (stageId: string, topicId: string) => boolean
  toggleTopicComplete: (stageId: string, topicId: string) => void
}

export const useDigitalSkillsStore = create<DigitalSkillsStoreState>()(
  persist(
    (set, get) => ({
      completedTopicIds: [],
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
    }),
    {
      name: 'digital-skills-progress',
      partialize: (state) => ({
        completedTopicIds: state.completedTopicIds,
      }),
      version: 2,
      migrate: (persisted) => {
        const state = persisted as { completedTopicIds?: string[]; lessons?: unknown }
        return { completedTopicIds: state.completedTopicIds ?? [] }
      },
    },
  ),
)

export function useCompletedTopicSet(): Set<string> {
  const completedTopicIds = useDigitalSkillsStore((s) => s.completedTopicIds)
  return new Set(completedTopicIds)
}
