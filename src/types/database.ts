export type ProfileSettingsRow = {
  theme: 'light' | 'dark' | 'system'
}

export type Database = {
  public: {
    Tables: {
      allowed_emails: {
        Row: {
          email: string
          created_at: string
        }
        Insert: {
          email: string
          created_at?: string
        }
        Update: {
          email?: string
          created_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          user_id: string
          display_name: string
          preferred_locale: 'en' | 'ml'
          onboarding_complete: boolean
          settings: ProfileSettingsRow
          updated_at: string
        }
        Insert: {
          user_id: string
          display_name?: string
          preferred_locale?: 'en' | 'ml'
          onboarding_complete?: boolean
          settings?: ProfileSettingsRow
          updated_at?: string
        }
        Update: {
          user_id?: string
          display_name?: string
          preferred_locale?: 'en' | 'ml'
          onboarding_complete?: boolean
          settings?: ProfileSettingsRow
          updated_at?: string
        }
        Relationships: []
      }
      topic_completions: {
        Row: {
          user_id: string
          topic_key: string
          completed_at: string
        }
        Insert: {
          user_id: string
          topic_key: string
          completed_at?: string
        }
        Update: {
          user_id?: string
          topic_key?: string
          completed_at?: string
        }
        Relationships: []
      }
      user_journey_state: {
        Row: {
          user_id: string
          celebrated_stage_ids: string[]
          last_visit_at: string | null
          updated_at: string
        }
        Insert: {
          user_id: string
          celebrated_stage_ids?: string[]
          last_visit_at?: string | null
          updated_at?: string
        }
        Update: {
          user_id?: string
          celebrated_stage_ids?: string[]
          last_visit_at?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}
