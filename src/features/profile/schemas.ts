import { z } from 'zod'

export const onboardingSchema = z.object({
  displayName: z.string().trim().min(1, 'Please enter your name'),
})

export type OnboardingFormValues = z.infer<typeof onboardingSchema>
