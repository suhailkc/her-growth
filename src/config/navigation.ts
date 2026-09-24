import {
  Baby,
  BookOpen,
  Briefcase,
  Compass,
  GraduationCap,
  HeartHandshake,
  Landmark,
  LayoutDashboard,
  Settings,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'

import type { NavItem } from '@/types/navigation'

export const primaryNavItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
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
    label: 'Finance & Money',
    href: '/finance',
    icon: Landmark,
    description: 'Understand money with confidence',
  },
  {
    id: 'parenting',
    label: 'Parenting & Child Development',
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
    id: 'general-knowledge',
    label: 'General Knowledge',
    href: '/general-knowledge',
    icon: BookOpen,
    description: 'Learn useful ideas at your pace',
  },
  {
    id: 'tools',
    label: 'Useful Tools',
    href: '/tools',
    icon: Wrench,
    description: 'Simple helpers for daily life',
  },
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

export const moduleQuickLinks = primaryNavItems.filter(
  (item) => !['dashboard', 'today', 'journey'].includes(item.id),
)
