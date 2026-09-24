import type { ToolCategoryId } from '@/features/tools/types'

export const toolCategoryLabels: Record<ToolCategoryId, string> = {
  everyday: 'Everyday',
  google: 'Google',
  design: 'Design',
  communication: 'Communication',
}

export const toolCategoryDescriptions: Record<ToolCategoryId, string> = {
  everyday: 'Small helpers that stay on this device.',
  google: 'Popular Google apps on the web.',
  design: 'Make posters and simple graphics.',
  communication: 'Message and meet people online.',
}
