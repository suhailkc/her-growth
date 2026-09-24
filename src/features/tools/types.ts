import type { LucideIcon } from 'lucide-react'

export const TOOL_CATEGORY_IDS = [
  'everyday',
  'google',
  'design',
  'communication',
] as const

export type ToolCategoryId = (typeof TOOL_CATEGORY_IDS)[number]

export type ToolDefinition = {
  id: string
  categoryId: ToolCategoryId
  name: string
  description: string
  beginnerExplanation: string
  icon: LucideIcon
  /** External site — opens in a new tab with rel="noopener noreferrer" */
  externalUrl?: string
  /** In-app helper route under /tools/… */
  internalPath?: string
}
