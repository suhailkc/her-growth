import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ParentingStoreState = {
  completedActivityIds: string[]
  markActivityComplete: (activityId: string) => void
}

export const useParentingStore = create<ParentingStoreState>()(
  persist(
    (set) => ({
      completedActivityIds: [],
      markActivityComplete: (activityId) => {
        set((state) => {
          if (state.completedActivityIds.includes(activityId)) {
            return state
          }
          return {
            completedActivityIds: [...state.completedActivityIds, activityId],
          }
        })
      },
    }),
    {
      name: 'her-growth-parenting',
      partialize: (state) => ({
        completedActivityIds: state.completedActivityIds,
      }),
    },
  ),
)
