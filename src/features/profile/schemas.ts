import { z } from 'zod'

export const profileOverviewSchema = z.object({
  displayName: z.string().trim().min(1, 'Please enter your name'),
  preferredLocale: z.enum(['en', 'ml']),
  learningGoal: z.string().trim().max(200).optional(),
  dailyLearningMinutes: z.coerce
    .number()
    .int()
    .min(5, 'At least 5 minutes')
    .max(180, 'Keep it realistic — up to 3 hours'),
  childName: z.string().trim().max(80).optional(),
  childAgeRange: z.string().trim().max(40).optional(),
  interests: z.string().trim().max(300).optional(),
})

export type ProfileOverviewFormValues = z.infer<typeof profileOverviewSchema>

export const onboardingStep1Schema = z.object({
  displayName: z.string().trim().min(1, 'Please enter your name'),
})

export const onboardingStep2Schema = z.object({
  preferredLocale: z.enum(['en', 'ml']),
})

export const onboardingStep3Schema = z.object({
  dailyLearningMinutes: z.coerce.number().int().min(5).max(180),
})

export const onboardingStep4Schema = z.object({
  interests: z.string().trim().min(1, 'Add at least one interest'),
})

export const onboardingStep5Schema = z.object({
  learningPreferences: z.enum(['short-daily', 'few-longer', 'flexible']),
})

export type OnboardingStep5Values = z.infer<typeof onboardingStep5Schema>

export const passwordChangeSchema = z
  .object({
    currentPassword: z.string().min(1, 'Enter your current password'),
    newPassword: z.string().min(8, 'Use at least 8 characters'),
    confirmPassword: z.string().min(1, 'Confirm your new password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'New passwords do not match',
    path: ['confirmPassword'],
  })

export type PasswordChangeFormValues = z.infer<typeof passwordChangeSchema>
