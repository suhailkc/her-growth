import { learner } from '@/config/learner'

export const appBrand = {
  name: 'Digital Skills',
  tagline: 'Practical computer skills, one step at a time.',
  /** Shown on welcome and in the browser tab. */
  documentTitle: `${learner.nickname} · Digital Skills`,
  metaDescription: `A calm, private digital skills roadmap — just for ${learner.nickname}.`,
  welcomeLead: `Hi, ${learner.nickname}`,
  welcomeBody: `This app is yours alone — a gentle place to build everyday computer confidence, at your pace.`,
  welcomePhotoSrc: '/images/welcome.jpg',
  welcomePhotoAlt: `${learner.nickname} and Suhail`,
  welcomeDedication: `I love you, ${learner.nickname}`,
} as const
