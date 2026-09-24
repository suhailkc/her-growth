import { Heart, Home, Sprout } from 'lucide-react'

import type { NavItem } from '@/types/navigation'

export const primaryNavItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Home',
    href: '/',
    icon: Home,
    description: 'Your personal welcome space',
  },
  {
    id: 'digital-skills',
    label: 'My Digital Journey',
    href: '/digital-skills',
    icon: Sprout,
    description: 'Your roadmap of useful computer skills',
  },
]

export const supplementalNavItems: NavItem[] = []

export const secondaryNavItems: NavItem[] = [
  {
    id: 'about',
    label: 'A personal note',
    href: '/about',
    icon: Heart,
    description: 'Why this space exists',
  },
]

export const homeGreeting = {
  title: 'Hi Nasreena',
  subtitle: 'This is your little space to learn, explore and grow with technology.',
}
