import type { LucideIcon } from 'lucide-react'

export type AppModuleId = 'dashboard' | 'digital-skills' | 'about'

export type NavItem = {
  id: AppModuleId
  label: string
  href: string
  icon: LucideIcon
  description: string
  optional?: boolean
}

export type PageContainerWidth = 'narrow' | 'default' | 'wide'
