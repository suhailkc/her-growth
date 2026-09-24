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
  | 'knowledge'
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

export type PageContainerWidth = 'narrow' | 'default' | 'wide'
