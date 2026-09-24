import { useEffect } from 'react'

import { TODAY_MISSION_ID } from '@/data/mock-mission'
import { useMissionStore } from '@/features/mission/mission-store'

/** Resets persisted progress when the daily mission content changes. */
export function useMissionSync() {
  const missionId = useMissionStore((s) => s.missionId)
  const resetMission = useMissionStore((s) => s.resetMission)

  useEffect(() => {
    if (missionId !== TODAY_MISSION_ID) {
      resetMission(TODAY_MISSION_ID)
    }
  }, [missionId, resetMission])
}
