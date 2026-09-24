import { useMemo } from 'react'

import { useCompletedTopicSet } from '@/features/digital-skills/digital-skills-store'
import {
  allJourneyTopicsComplete,
  getTodaySkillFocus,
  todayFocusAsDailyMission,
  type TodaySkillFocus,
} from '@/features/mission/today-skill-focus'
import type { DailyMission } from '@/types/user'

const ALL_COMPLETE_MISSION: DailyMission = {
  id: 'digital-skills-journey-complete',
  title: 'Your roadmap is complete',
  summary: 'You marked every skill on the Digital Skills journey. Revisit any stage whenever you want a refresher.',
  estimatedMinutes: 0,
  status: 'completed',
  moduleId: 'digital-skills',
  skillCategory: 'Digital Skills',
  difficulty: 'gentle',
  progressPercent: 100,
}

export function useTodaySkillFocus(): TodaySkillFocus | null {
  const completedTopicIds = useCompletedTopicSet()
  return useMemo(() => getTodaySkillFocus(completedTopicIds), [completedTopicIds])
}

export function useTodayMissionSummary(): DailyMission {
  const completedTopicIds = useCompletedTopicSet()
  return useMemo(() => {
    if (allJourneyTopicsComplete(completedTopicIds)) {
      return ALL_COMPLETE_MISSION
    }
    const focus = getTodaySkillFocus(completedTopicIds)
    if (!focus) {
      return ALL_COMPLETE_MISSION
    }
    return todayFocusAsDailyMission(focus, completedTopicIds)
  }, [completedTopicIds])
}
