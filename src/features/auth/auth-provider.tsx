import type { Session, User } from '@supabase/supabase-js'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { isEmailAllowlisted } from '@/features/auth/lib/allowlist'
import { setActiveUserId } from '@/features/auth/lib/auth-session'
import { hydrateUserDataFromServer } from '@/features/auth/lib/sync-user-data'
import { getSupabaseClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/env'

export type AuthAccessState = 'unknown' | 'allowed' | 'denied'

type AuthContextValue = {
  configured: boolean
  isLoading: boolean
  session: Session | null
  user: User | null
  access: AuthAccessState
  gateMessage: string | null
  dataReady: boolean
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const configured = isSupabaseConfigured()
  const [isLoading, setIsLoading] = useState(configured)
  const [session, setSession] = useState<Session | null>(null)
  const [access, setAccess] = useState<AuthAccessState>('unknown')
  const [gateMessage, setGateMessage] = useState<string | null>(null)
  const [dataReady, setDataReady] = useState(false)

  const evaluateSession = useCallback(async (nextSession: Session | null) => {
    setSession(nextSession)
    setDataReady(false)

    if (!nextSession?.user) {
      setActiveUserId(null)
      setAccess('unknown')
      setDataReady(true)
      return
    }

    const email = nextSession.user.email
    const allowed = await isEmailAllowlisted(email)
    if (!allowed) {
      setActiveUserId(null)
      setAccess('denied')
      setGateMessage(
        'This Google account is not on the invite list. Ask Suhail to add your email in Supabase.',
      )
      const supabase = getSupabaseClient()
      if (supabase) {
        await supabase.auth.signOut()
      }
      setSession(null)
      setDataReady(true)
      return
    }

    setActiveUserId(nextSession.user.id)
    setAccess('allowed')
    setGateMessage(null)
    try {
      await hydrateUserDataFromServer(nextSession.user)
    } catch (error) {
      console.error('Failed to load your saved progress', error)
      setGateMessage('We could not load your saved progress. Try again in a moment.')
    }
    setDataReady(true)
  }, [])

  useEffect(() => {
    if (!configured) {
      setIsLoading(false)
      return
    }

    const supabase = getSupabaseClient()
    if (!supabase) {
      setIsLoading(false)
      return
    }

    let cancelled = false

    void (async () => {
      const { data, error } = await supabase.auth.getSession()
      if (cancelled) {
        return
      }
      if (error) {
        console.error('Auth session error', error.message)
      }
      await evaluateSession(data.session)
      if (!cancelled) {
        setIsLoading(false)
      }
    })()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      void evaluateSession(nextSession)
    })

    return () => {
      cancelled = true
      subscription.unsubscribe()
    }
  }, [configured, evaluateSession])

  const signInWithGoogle = useCallback(async () => {
    const supabase = getSupabaseClient()
    if (!supabase) {
      return
    }
    setGateMessage(null)
    const redirectTo = `${window.location.origin}/`
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo },
    })
    if (error) {
      setGateMessage(error.message)
    }
  }, [])

  const signOut = useCallback(async () => {
    const supabase = getSupabaseClient()
    if (supabase) {
      await supabase.auth.signOut()
    }
    setActiveUserId(null)
    setSession(null)
    setAccess('unknown')
    setGateMessage(null)
    setDataReady(true)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      configured,
      isLoading,
      session,
      user: session?.user ?? null,
      access,
      gateMessage,
      dataReady,
      signInWithGoogle,
      signOut,
    }),
    [
      access,
      gateMessage,
      configured,
      dataReady,
      isLoading,
      session,
      signInWithGoogle,
      signOut,
    ],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return ctx
}
