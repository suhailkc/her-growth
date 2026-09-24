import { getSupabaseClient } from '@/lib/supabase/client'

export async function isEmailAllowlisted(email: string | undefined): Promise<boolean> {
  if (!email) {
    return false
  }
  const supabase = getSupabaseClient()
  if (!supabase) {
    return false
  }
  const normalized = email.trim().toLowerCase()
  const { data, error } = await supabase
    .from('allowed_emails')
    .select('email')
    .eq('email', normalized)
    .maybeSingle()

  if (error) {
    console.error('Allowlist check failed', error.message)
    return false
  }

  return data !== null
}
