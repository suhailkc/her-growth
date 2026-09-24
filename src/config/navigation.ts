import {
  Baby,
  BookOpen,
  Briefcase,
  Compass,
  GraduationCap,
  HeartHandshake,
  Home,
  Landmark,
  Settings,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'

import type { NavItem } from '@/types/navigation'

export const primaryNavItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Home',
    href: '/',
    icon: Home,
    description: 'Your calm overview for today',
  },
  {
    id: 'today',
    label: "Today's Mission",
    href: '/today',
    icon: Sparkles,
    description: 'One gentle step at a time',
  },
  {
    id: 'journey',
    label: 'My Journey',
    href: '/journey',
    icon: Compass,
    description: 'See how far you have come',
  },
  {
    id: 'digital-skills',
    label: 'Digital Skills',
    href: '/digital-skills',
    icon: GraduationCap,
    description: 'Practical computer confidence',
  },
  {
    id: 'family',
    label: 'Family Management',
    href: '/family',
    icon: Users,
    description: 'Organize everyday family tasks',
  },
  {
    id: 'finance',
    label: 'Finance',
    href: '/finance',
    icon: Landmark,
    description: 'Understand money with confidence',
  },
  {
    id: 'parenting',
    label: 'Parenting',
    href: '/parenting',
    icon: Baby,
    description: 'Support your child with clarity',
  },
  {
    id: 'bed-career',
    label: 'B.Ed. & Career',
    href: '/bed-career',
    icon: Briefcase,
    description: 'Study support and optional career paths',
    optional: true,
  },
  {
    id: 'knowledge',
    label: 'General Knowledge',
    href: '/knowledge',
    icon: BookOpen,
    description: 'Learn useful ideas at your pace',
  },
  {
    id: 'tools',
    label: 'Tools',
    href: '/tools',
    icon: Wrench,
    description: 'Simple helpers for daily life',
  },
]

/** Reachable from Home grid; not shown in primary sidebar list. */
export const supplementalNavItems: NavItem[] = [
  {
    id: 'family-goals',
    label: 'Family Goals',
    href: '/family-goals',
    icon: HeartHandshake,
    description: 'Shared goals without pressure',
  },
]

export const secondaryNavItems: NavItem[] = [
  {
    id: 'profile',
    label: 'Profile & Settings',
    href: '/profile',
    icon: Settings,
    description: 'Language, privacy, and preferences',
  },
]

export const homeGreeting = {
  title: 'Welcome back',
  subtitle: 'Small, steady steps build real confidence.',
}

export const missionPlaceholder = {
  title: 'Your mission will appear here',
  body: 'We will suggest one practical task when you are ready — never more than you can comfortably handle.',
}

export const moduleQuickLinks = [
  ...primaryNavItems.filter(
    (item) => !['dashboard', 'today', 'journey'].includes(item.id),
  ),
  ...supplementalNavItems,
]
