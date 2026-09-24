import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { getDigitalSkillsStageById } from '@/features/digital-skills/data/catalog'
import { pickTaskCompleteEncouragement } from '@/features/digital-skills/lib/encouragement-messages'
import {
  useDigitalSkillsStore,
  useCompletedTopicSet,
} from '@/features/digital-skills/digital-skills-store'
import {
  isStageTopicsComplete,
  topicKey,
} from '@/features/digital-skills/lib/topic-progress'
import { useProfileStore } from '@/features/profile/profile-store'
import { fireCompletionHaptic } from '@/lib/completion-haptic'
import {
  fireStageCompleteConfetti,
  fireTaskCompleteConfetti,
} from '@/lib/task-complete-confetti'

import { CelebrationToast } from './celebration-toast'
import { StageCompleteCelebration } from './stage-complete-celebration'

type StageCompletePayload = {
  stageId: string
  title: string
}

type CompletionDelightContextValue = {
  onTopicMarkedComplete: (stageId: string, topicId: string) => void
}

const CompletionDelightContext = createContext<CompletionDelightContextValue | null>(
  null,
)

export function CompletionDelightProvider({ children }: { children: ReactNode }) {
  const completedTopicIds = useCompletedTopicSet()
  const toggleTopicComplete = useDigitalSkillsStore((s) => s.toggleTopicComplete)
  const markStageCelebrated = useDigitalSkillsStore((s) => s.markStageCelebrated)
  const hasCelebratedStage = useDigitalSkillsStore((s) => s.hasCelebratedStage)
  const locale = useProfileStore((s) => s.profile.preferredLocale)
  const hapticsEnabled = useProfileStore((s) => s.settings.completionHaptics)

  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [toastSubtitle, setToastSubtitle] = useState<string | null>(null)
  const [stageComplete, setStageComplete] = useState<StageCompletePayload | null>(
    null,
  )

  const dismissToast = useCallback(() => {
    setToastMessage(null)
    setToastSubtitle(null)
  }, [])

  const dismissStageComplete = useCallback(() => {
    setStageComplete(null)
  }, [])

  const onTopicMarkedComplete = useCallback(
    (stageId: string, topicId: string) => {
      const stage = getDigitalSkillsStageById(stageId)
      const key = topicKey(stageId, topicId)
      const wasStageComplete = stage
        ? isStageTopicsComplete(stage, completedTopicIds)
        : false

      toggleTopicComplete(stageId, topicId)

      fireTaskCompleteConfetti()
      fireCompletionHaptic(hapticsEnabled)

      const encouragement = pickTaskCompleteEncouragement()
      if (locale === 'ml') {
        setToastMessage(encouragement.ml)
        setToastSubtitle(encouragement.en)
      } else {
        setToastMessage(encouragement.en)
        setToastSubtitle(encouragement.ml)
      }

      if (stage && !wasStageComplete) {
        const nextCompleted = new Set(completedTopicIds)
        nextCompleted.add(key)
        if (
          isStageTopicsComplete(stage, nextCompleted) &&
          !hasCelebratedStage(stageId)
        ) {
          markStageCelebrated(stageId)
          fireStageCompleteConfetti()
          setStageComplete({ stageId: stage.id, title: stage.title })
        }
      }
    },
    [
      completedTopicIds,
      hapticsEnabled,
      hasCelebratedStage,
      locale,
      markStageCelebrated,
      toggleTopicComplete,
    ],
  )

  const value = useMemo(
    () => ({
      onTopicMarkedComplete,
    }),
    [onTopicMarkedComplete],
  )

  return (
    <CompletionDelightContext.Provider value={value}>
      {children}
      <CelebrationToast
        message={toastMessage}
        subtitle={toastSubtitle}
        onDismiss={dismissToast}
      />
      <StageCompleteCelebration
        stage={stageComplete}
        onDismiss={dismissStageComplete}
      />
    </CompletionDelightContext.Provider>
  )
}

export function useCompletionDelight(): CompletionDelightContextValue {
  const ctx = useContext(CompletionDelightContext)
  if (!ctx) {
    throw new Error('useCompletionDelight must be used within CompletionDelightProvider')
  }
  return ctx
}
