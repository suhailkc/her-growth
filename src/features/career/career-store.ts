import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CareerStoreState = {
  completedLessonIds: string[]
  completedProjectIds: string[]
  markLessonComplete: (lessonId: string) => void
  markProjectComplete: (projectId: string) => void
}

function appendUnique(list: string[], id: string): string[] {
  if (list.includes(id)) return list
  return [...list, id]
}

export const useCareerStore = create<CareerStoreState>()(
  persist(
    (set) => ({
      completedLessonIds: [],
      completedProjectIds: [],
      markLessonComplete: (lessonId) => {
        set((state) => ({
          completedLessonIds: appendUnique(state.completedLessonIds, lessonId),
        }))
      },
      markProjectComplete: (projectId) => {
        set((state) => ({
          completedProjectIds: appendUnique(state.completedProjectIds, projectId),
        }))
      },
    }),
    {
      name: 'her-growth-career',
      partialize: (state) => ({
        completedLessonIds: state.completedLessonIds,
        completedProjectIds: state.completedProjectIds,
      }),
    },
  ),
)
