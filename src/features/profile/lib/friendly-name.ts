import { learner } from '@/config/learner'

/** Warm name for greetings and encouragement (nickname). */
export function getFriendlyName(): string {
  return learner.nickname
}
