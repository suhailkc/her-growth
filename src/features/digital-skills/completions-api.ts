import { getSupabaseClient } from '@/lib/supabase/client'

export type RemoteJourneyState = {
  completedTopicIds: string[]
  celebratedStageCompleteIds: string[]
  lastVisitAt: string | null
}

export async function fetchRemoteProgress(userId: string): Promise<RemoteJourneyState> {
  const supabase = getSupabaseClient()
  if (!supabase) {
    return {
      completedTopicIds: [],
      celebratedStageCompleteIds: [],
      lastVisitAt: null,
    }
  }

  const [completionsResult, journeyResult] = await Promise.all([
    supabase.from('topic_completions').select('topic_key').eq('user_id', userId),
    supabase
      .from('user_journey_state')
      .select('celebrated_stage_ids, last_visit_at')
      .eq('user_id', userId)
      .maybeSingle(),
  ])

  if (completionsResult.error) {
    throw new Error(completionsResult.error.message)
  }
  if (journeyResult.error) {
    throw new Error(journeyResult.error.message)
  }

  return {
    completedTopicIds: (completionsResult.data ?? []).map((row) => row.topic_key),
    celebratedStageCompleteIds: journeyResult.data?.celebrated_stage_ids ?? [],
    lastVisitAt: journeyResult.data?.last_visit_at ?? null,
  }
}

export async function syncTopicCompletionRemote(
  userId: string,
  topicKey: string,
  completed: boolean,
): Promise<void> {
  const supabase = getSupabaseClient()
  if (!supabase) {
    return
  }

  if (completed) {
    const { error } = await supabase.from('topic_completions').upsert(
      {
        user_id: userId,
        topic_key: topicKey,
        completed_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,topic_key' },
    )
    if (error) {
      console.error('Failed to save topic completion', error.message)
    }
    return
  }

  const { error } = await supabase
    .from('topic_completions')
    .delete()
    .eq('user_id', userId)
    .eq('topic_key', topicKey)

  if (error) {
    console.error('Failed to remove topic completion', error.message)
  }
}

export async function syncJourneyStateRemote(
  userId: string,
  state: {
    celebratedStageCompleteIds: string[]
    lastVisitAt: string | null
  },
): Promise<void> {
  const supabase = getSupabaseClient()
  if (!supabase) {
    return
  }

  const { error } = await supabase.from('user_journey_state').upsert(
    {
      user_id: userId,
      celebrated_stage_ids: state.celebratedStageCompleteIds,
      last_visit_at: state.lastVisitAt,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id' },
  )

  if (error) {
    console.error('Failed to save journey state', error.message)
  }
}
