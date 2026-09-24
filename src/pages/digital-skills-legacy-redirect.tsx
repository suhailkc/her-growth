import { Navigate, useParams } from 'react-router-dom'

import { resolveStageIdFromRouteParam } from '@/features/digital-skills/data/catalog'

export function DigitalSkillsLegacyRedirect() {
  const { stageId: stageParam = '' } = useParams()
  const stageId = resolveStageIdFromRouteParam(stageParam)
  return <Navigate to={`/${stageId}`} replace />
}
