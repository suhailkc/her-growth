import type {
  ContinueLearningModule,
  DashboardActivityStats,
  FamilyFocusTask,
  JourneyAreaProgress,
  RecentAchievement,
} from '@/types/dashboard'

export const mockDashboardActivityStats: DashboardActivityStats = {
  activitiesCompleted: 12,
  learningTimeMinutes: 145,
  skillsLearned: 5,
}

export const mockJourneyAreaProgress: JourneyAreaProgress[] = [
  { moduleId: 'digital-skills', label: 'Digital Skills', progressPercent: 42 },
  { moduleId: 'family', label: 'Family Management', progressPercent: 28 },
  { moduleId: 'finance', label: 'Finance', progressPercent: 18 },
  { moduleId: 'parenting', label: 'Parenting', progressPercent: 35 },
  { moduleId: 'bed-career', label: 'B.Ed. & Career', progressPercent: 22 },
  { moduleId: 'knowledge', label: 'General Knowledge', progressPercent: 31 },
]

export const mockContinueLearning: ContinueLearningModule[] = [
  {
    id: 'cl-computer-basics',
    moduleId: 'digital-skills',
    title: 'Computer Confidence',
    subtitle: 'Your roadmap · start with Computer Confidence',
    progressPercent: 0,
    href: '/digital-skills',
  },
  {
    id: 'cl-budget',
    moduleId: 'knowledge',
    title: 'Household budget basics',
    subtitle: 'Short read · about 6 minutes left',
    progressPercent: 55,
    href: '/knowledge/household-budget-basics',
  },
  {
    id: 'cl-weekend',
    moduleId: 'family-goals',
    title: 'Calmer weekend mornings',
    subtitle: 'Family goal · checklist started',
    progressPercent: 25,
    href: '/family-goals/weekend-routine',
  },
]

export const mockFamilyFocusTasks: FamilyFocusTask[] = [
  {
    id: 'ff-school-form',
    title: 'Sign the school permission slip',
    dueLabel: 'Due tomorrow',
    href: '/family',
  },
  {
    id: 'ff-grocery',
    title: 'Update the shared grocery list',
    dueLabel: 'This week',
    href: '/family',
  },
  {
    id: 'ff-appointment',
    title: 'Note the pediatric check-up time',
    dueLabel: 'Saturday',
    href: '/parenting',
  },
]

export const mockRecentAchievements: RecentAchievement[] = [
  {
    id: 'ach-first-mission',
    title: 'First mission complete',
    description: 'You finished a full daily growth step.',
    earnedLabel: '2 days ago',
    icon: 'sparkles',
  },
  {
    id: 'ach-photo-folder',
    title: 'Photo organizer',
    description: 'Created a folder and saved a photo on your phone.',
    earnedLabel: 'Yesterday',
    icon: 'target',
  },
  {
    id: 'ach-family-list',
    title: 'Shared list starter',
    description: 'Added items to a family checklist.',
    earnedLabel: 'This week',
    icon: 'heart',
  },
  {
    id: 'ach-read',
    title: 'Curious reader',
    description: 'Finished a General Knowledge article.',
    earnedLabel: 'This week',
    icon: 'book',
  },
]
