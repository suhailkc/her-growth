import type { LucideIcon } from 'lucide-react'

export type AppModuleId =
  | 'dashboard'
  | 'today'
  | 'journey'
  | 'digital-skills'
  | 'family'
  | 'finance'
  | 'parenting'
  | 'bed-career'
  | 'general-knowledge'
  | 'tools'
  | 'family-goals'
  | 'profile'

export type NavItem = {
  id: AppModuleId
  label: string
  href: string
  icon: LucideIcon
  description: string
  optional?: boolean
}
