import { createClient, type SupabaseClient } from '@supabase/supabase-js'

import { getSupabasePublicConfig } from '@/lib/supabase/env'
import type { Database } from '@/types/database'

let client: SupabaseClient<Database> | null = null

export function getSupabaseClient(): SupabaseClient<Database> | null {
  const config = getSupabasePublicConfig()
  if (!config) {
    return null
  }
  if (!client) {
    client = createClient<Database>(config.url, config.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  }
  return client
}
