import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { topicKey } from '@/features/digital-skills/lib/topic-progress'
import { EMPTY_LESSON_PROGRESS } from '@/features/digital-skills/progress-utils'
import type {
  DigitalSkillsLessonPhase,
  DigitalSkillsLessonProgress,
} from '@/types/digital-skills'

type DigitalSkillsStoreState = {
  lessons: Record<string, DigitalSkillsLessonProgress>
  completedTopicIds: string[]
  isTopicComplete: (stageId: string, topicId: string) => boolean
  toggleTopicComplete: (stageId: string, topicId: string) => void
  getLessonProgress: (lessonId: string) => DigitalSkillsLessonProgress
  startLesson: (lessonId: string) => void
  setLessonPhase: (lessonId: string, phase: DigitalSkillsLessonPhase) => void
  setCurrentStepIndex: (lessonId: string, index: number) => void
  toggleStepComplete: (lessonId: string, stepId: string) => void
  goToNextStep: (lessonId: string, stepCount: number) => void
  goToPreviousStep: (lessonId: string) => void
  completeLesson: (lessonId: string) => void
  resetLesson: (lessonId: string) => void
}

function mergeLessonProgress(
  current: DigitalSkillsLessonProgress | undefined,
  patch: Partial<DigitalSkillsLessonProgress>,
): DigitalSkillsLessonProgress {
  return {
    ...(current ?? EMPTY_LESSON_PROGRESS),
    ...patch,
  }
}

export const useDigitalSkillsStore = create<DigitalSkillsStoreState>()(
  persist(
    (set, get) => ({
      lessons: {},
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
      getLessonProgress: (lessonId) => {
        return get().lessons[lessonId] ?? EMPTY_LESSON_PROGRESS
      },
      startLesson: (lessonId) => {
        const current = get().lessons[lessonId]
        set({
          lessons: {
            ...get().lessons,
            [lessonId]: mergeLessonProgress(current, {
              phase: 'active',
              startedAt: current?.startedAt ?? Date.now(),
            }),
          },
        })
      },
      setLessonPhase: (lessonId, phase) => {
        const current = get().lessons[lessonId]
        set({
          lessons: {
            ...get().lessons,
            [lessonId]: mergeLessonProgress(current, { phase }),
          },
        })
      },
      setCurrentStepIndex: (lessonId, index) => {
        const current = get().lessons[lessonId]
        set({
          lessons: {
            ...get().lessons,
            [lessonId]: mergeLessonProgress(current, {
              currentStepIndex: Math.max(0, index),
            }),
          },
        })
      },
      toggleStepComplete: (lessonId, stepId) => {
        const current = get().lessons[lessonId] ?? EMPTY_LESSON_PROGRESS
        const nextIds = current.completedStepIds.includes(stepId)
          ? current.completedStepIds.filter((id) => id !== stepId)
          : [...current.completedStepIds, stepId]
        set({
          lessons: {
            ...get().lessons,
            [lessonId]: mergeLessonProgress(current, { completedStepIds: nextIds }),
          },
        })
      },
      goToNextStep: (lessonId, stepCount) => {
        const current = get().lessons[lessonId] ?? EMPTY_LESSON_PROGRESS
        set({
          lessons: {
            ...get().lessons,
            [lessonId]: mergeLessonProgress(current, {
              currentStepIndex: Math.min(stepCount - 1, current.currentStepIndex + 1),
            }),
          },
        })
      },
      goToPreviousStep: (lessonId) => {
        const current = get().lessons[lessonId] ?? EMPTY_LESSON_PROGRESS
        set({
          lessons: {
            ...get().lessons,
            [lessonId]: mergeLessonProgress(current, {
              currentStepIndex: Math.max(0, current.currentStepIndex - 1),
            }),
          },
        })
      },
      completeLesson: (lessonId) => {
        const current = get().lessons[lessonId]
        set({
          lessons: {
            ...get().lessons,
            [lessonId]: mergeLessonProgress(current, {
              phase: 'complete',
              completedAt: Date.now(),
            }),
          },
        })
      },
      resetLesson: (lessonId) => {
        set({
          lessons: {
            ...get().lessons,
            [lessonId]: { ...EMPTY_LESSON_PROGRESS },
          },
        })
      },
    }),
    {
      name: 'her-growth-digital-skills-progress',
      partialize: (state) => ({
        lessons: state.lessons,
        completedTopicIds: state.completedTopicIds,
      }),
    },
  ),
)

export function useCompletedTopicSet(): Set<string> {
  const completedTopicIds = useDigitalSkillsStore((s) => s.completedTopicIds)
  return new Set(completedTopicIds)
}
