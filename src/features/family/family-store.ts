import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import {
  createInitialFamilyTasks,
  mockFamilyDocuments,
} from '@/data/mock-family'
import type {
  FamilyDocument,
  FamilyDocumentCategoryId,
  FamilyPlannerTask,
} from '@/features/family/types'

type FamilyStoreState = {
  tasks: FamilyPlannerTask[]
  documents: FamilyDocument[]
  addTask: (task: Omit<FamilyPlannerTask, 'id' | 'completed' | 'completedAt'>) => void
  updateTask: (
    id: string,
    patch: Omit<FamilyPlannerTask, 'id' | 'completed' | 'completedAt'>,
  ) => void
  toggleTaskComplete: (id: string) => void
  addDocumentPlaceholder: (name: string, categoryId: FamilyDocumentCategoryId) => void
}

function newTaskId(): string {
  return `family-task-${crypto.randomUUID()}`
}

function newDocumentId(): string {
  return `family-doc-${crypto.randomUUID()}`
}

export const useFamilyStore = create<FamilyStoreState>()(
  persist(
    (set) => ({
      tasks: createInitialFamilyTasks(),
      documents: mockFamilyDocuments,
      addTask: (input) => {
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              ...input,
              id: newTaskId(),
              completed: false,
            },
          ],
        }))
      },
      updateTask: (id, patch) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...patch } : task,
          ),
        }))
      },
      toggleTaskComplete: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) => {
            if (task.id !== id) {
              return task
            }
            const completed = !task.completed
            return {
              ...task,
              completed,
              completedAt: completed ? Date.now() : undefined,
            }
          }),
        }))
      },
      addDocumentPlaceholder: (name, categoryId) => {
        set((state) => ({
          documents: [
            {
              id: newDocumentId(),
              name,
              categoryId,
              updatedLabel: 'Added just now (sample)',
              kind: 'other',
              isPlaceholder: true,
            },
            ...state.documents,
          ],
        }))
      },
    }),
    {
      name: 'her-growth-family',
      partialize: (state) => ({
        tasks: state.tasks,
        documents: state.documents,
      }),
    },
  ),
)
