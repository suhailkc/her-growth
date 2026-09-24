import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { AppShell } from '@/components/layout/app-shell'
import { RouteErrorPage } from '@/pages/route-error-page'

const DashboardPage = lazy(() =>
  import('@/pages/dashboard-page').then((m) => ({ default: m.DashboardPage })),
)
const TodayPage = lazy(() =>
  import('@/pages/today-page').then((m) => ({ default: m.TodayPage })),
)
const DigitalSkillsPage = lazy(() =>
  import('@/pages/digital-skills-page').then((m) => ({ default: m.DigitalSkillsPage })),
)
const DigitalSkillsTrackPage = lazy(() =>
  import('@/pages/digital-skills-track-page').then((m) => ({
    default: m.DigitalSkillsTrackPage,
  })),
)
const DigitalSkillsLessonPage = lazy(() =>
  import('@/pages/digital-skills-lesson-page').then((m) => ({
    default: m.DigitalSkillsLessonPage,
  })),
)
const KnowledgePage = lazy(() =>
  import('@/pages/knowledge-page').then((m) => ({ default: m.KnowledgePage })),
)
const KnowledgeCategoryPage = lazy(() =>
  import('@/pages/knowledge-category-page').then((m) => ({
    default: m.KnowledgeCategoryPage,
  })),
)
const KnowledgeLessonPage = lazy(() =>
  import('@/pages/knowledge-lesson-page').then((m) => ({
    default: m.KnowledgeLessonPage,
  })),
)
const FamilyGoalsPage = lazy(() =>
  import('@/pages/family-goals-page').then((m) => ({ default: m.FamilyGoalsPage })),
)
const FamilyGoalsDetailPage = lazy(() =>
  import('@/pages/family-goals-detail-page').then((m) => ({
    default: m.FamilyGoalsDetailPage,
  })),
)
const ProfileLayoutPage = lazy(() =>
  import('@/pages/profile-layout-page').then((m) => ({ default: m.ProfileLayoutPage })),
)
const ProfileSectionPage = lazy(() =>
  import('@/pages/profile-section-page').then((m) => ({
    default: m.ProfileSectionPage,
  })),
)
const JourneyPage = lazy(() =>
  import('@/pages/journey-page').then((m) => ({ default: m.JourneyPage })),
)
const FamilyPage = lazy(() =>
  import('@/pages/family-page').then((m) => ({ default: m.FamilyPage })),
)
const FinancePage = lazy(() =>
  import('@/pages/finance-page').then((m) => ({ default: m.FinancePage })),
)
const FinanceLessonPage = lazy(() =>
  import('@/pages/finance-lesson-page').then((m) => ({ default: m.FinanceLessonPage })),
)
const ParentingPage = lazy(() =>
  import('@/pages/parenting-page').then((m) => ({ default: m.ParentingPage })),
)
const ParentingActivityPage = lazy(() =>
  import('@/pages/parenting-activity-page').then((m) => ({
    default: m.ParentingActivityPage,
  })),
)
const ParentingStoryPage = lazy(() =>
  import('@/pages/parenting-story-page').then((m) => ({
    default: m.ParentingStoryPage,
  })),
)
const ParentingArticlePage = lazy(() =>
  import('@/pages/parenting-article-page').then((m) => ({
    default: m.ParentingArticlePage,
  })),
)
const BedCareerPage = lazy(() =>
  import('@/pages/bed-career-page').then((m) => ({ default: m.BedCareerPage })),
)
const BedCareerLessonPage = lazy(() =>
  import('@/pages/bed-career-lesson-page').then((m) => ({
    default: m.BedCareerLessonPage,
  })),
)
const BedCareerOptionPage = lazy(() =>
  import('@/pages/bed-career-option-page').then((m) => ({
    default: m.BedCareerOptionPage,
  })),
)
const BedCareerProjectPage = lazy(() =>
  import('@/pages/bed-career-project-page').then((m) => ({
    default: m.BedCareerProjectPage,
  })),
)
const ToolsPage = lazy(() =>
  import('@/pages/tools-page').then((m) => ({ default: m.ToolsPage })),
)
const ToolsCalculatorPage = lazy(() =>
  import('@/pages/tools-calculator-page').then((m) => ({
    default: m.ToolsCalculatorPage,
  })),
)
const ToolsNotesPage = lazy(() =>
  import('@/pages/tools-notes-page').then((m) => ({ default: m.ToolsNotesPage })),
)
const ToolsTodoPage = lazy(() =>
  import('@/pages/tools-todo-page').then((m) => ({ default: m.ToolsTodoPage })),
)
const ToolsTimerPage = lazy(() =>
  import('@/pages/tools-timer-page').then((m) => ({ default: m.ToolsTimerPage })),
)

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'today', element: <TodayPage /> },
      { path: 'journey', element: <JourneyPage /> },
      {
        path: 'digital-skills',
        children: [
          { index: true, element: <DigitalSkillsPage /> },
          { path: ':trackId', element: <DigitalSkillsTrackPage /> },
          { path: ':trackId/:lessonId', element: <DigitalSkillsLessonPage /> },
        ],
      },
      { path: 'family', element: <FamilyPage /> },
      {
        path: 'finance',
        children: [
          { index: true, element: <FinancePage /> },
          { path: 'lessons/:lessonId', element: <FinanceLessonPage /> },
        ],
      },
      {
        path: 'parenting',
        children: [
          { index: true, element: <ParentingPage /> },
          { path: 'activities/:activityId', element: <ParentingActivityPage /> },
          { path: 'stories/:storyId', element: <ParentingStoryPage /> },
          { path: 'articles/:articleId', element: <ParentingArticlePage /> },
        ],
      },
      {
        path: 'bed-career',
        children: [
          { index: true, element: <BedCareerPage /> },
          { path: 'lessons/:lessonId', element: <BedCareerLessonPage /> },
          { path: 'careers/:careerId', element: <BedCareerOptionPage /> },
          { path: 'projects/:projectId', element: <BedCareerProjectPage /> },
        ],
      },
      {
        path: 'knowledge',
        children: [
          { index: true, element: <KnowledgePage /> },
          { path: 'categories/:categoryId', element: <KnowledgeCategoryPage /> },
          { path: 'lessons/:lessonId', element: <KnowledgeLessonPage /> },
        ],
      },
      {
        path: 'general-knowledge',
        element: <Navigate to="/knowledge" replace />,
      },
      {
        path: 'tools',
        children: [
          { index: true, element: <ToolsPage /> },
          { path: 'calculator', element: <ToolsCalculatorPage /> },
          { path: 'notes', element: <ToolsNotesPage /> },
          { path: 'todo', element: <ToolsTodoPage /> },
          { path: 'timer', element: <ToolsTimerPage /> },
        ],
      },
      {
        path: 'family-goals',
        children: [
          { index: true, element: <FamilyGoalsPage /> },
          { path: ':goalId', element: <FamilyGoalsDetailPage /> },
        ],
      },
      {
        path: 'profile',
        element: <ProfileLayoutPage />,
        children: [
          {
            index: true,
            element: (
              <ProfileSectionPage
                title="Your profile overview"
                description="Name, study focus, and gentle reminders will be editable here soon."
              />
            ),
          },
          {
            path: 'language',
            element: (
              <ProfileSectionPage
                title="Language"
                description="English and Malayalam options will appear here when localization is ready."
              />
            ),
          },
          {
            path: 'accessibility',
            element: (
              <ProfileSectionPage
                title="Accessibility"
                description="Text size, motion, and contrast preferences will live here."
              />
            ),
          },
          {
            path: 'privacy',
            element: (
              <ProfileSectionPage
                title="Privacy"
                description="Your data stays private. Export and account controls will be added here."
              />
            ),
          },
        ],
      },
    ],
  },
])
