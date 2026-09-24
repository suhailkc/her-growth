import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type KnowledgeStoreState = {
  completedLessonIds: string[]
  markLessonComplete: (lessonId: string) => void
}

export const useKnowledgeStore = create<KnowledgeStoreState>()(
  persist(
    (set) => ({
      completedLessonIds: [],
      markLessonComplete: (lessonId) => {
        set((state) => {
          if (state.completedLessonIds.includes(lessonId)) {
            return state
          }
          return {
            completedLessonIds: [...state.completedLessonIds, lessonId],
          }
        })
      },
    }),
    {
      name: 'her-growth-knowledge',
      partialize: (state) => ({
        completedLessonIds: state.completedLessonIds,
      }),
    },
  ),
)
