/** Design-token aligned colors for Recharts (see `src/index.css` --chart-*). */
export const journeyChartColors = {
  primary: 'oklch(0.47 0.085 198)',
  success: 'oklch(0.58 0.11 150)',
  learning: 'oklch(0.48 0.1 295)',
  family: 'oklch(0.52 0.11 45)',
  info: 'oklch(0.5 0.09 235)',
  muted: 'oklch(0.91 0.015 85)',
} as const

export const skillAreaBarColors = [
  journeyChartColors.primary,
  journeyChartColors.family,
  journeyChartColors.info,
  journeyChartColors.success,
  journeyChartColors.learning,
  journeyChartColors.primary,
] as const
