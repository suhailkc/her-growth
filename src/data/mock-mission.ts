import { familyDocumentsStepImages } from '@/features/mission/mission-step-images'
import type { TodayMissionDetail } from '@/types/mission'
import type { DailyMission } from '@/types/user'

export const TODAY_MISSION_ID = 'mission-family-documents'

export const mockTodayMissionDetail: TodayMissionDetail = {
  id: TODAY_MISSION_ID,
  title: 'Create a folder for family documents',
  summary:
    'Set up one clear place on your computer for IDs, school papers, and medical records — so you can find them quickly when you need them.',
  whyItMatters:
    'Important papers are easier to manage when they live in one folder. You will spend less time searching and feel more in control of family paperwork.',
  estimatedMinutes: 15,
  status: 'not_started',
  moduleId: 'digital-skills',
  skillCategory: 'Digital Skills',
  difficulty: 'gentle',
  progressPercent: 0,
  skillGained: 'Desktop organization',
  learnedSummary:
    'You practiced using the desktop menu to create a named folder — a simple habit that keeps family documents in one trusted place.',
  nextSuggestion: {
    id: 'mission-move-photo',
    title: 'Move one photo into your new folder',
    summary:
      'Practice opening the folder you created and saving one photo there, so you know the full path from gallery to files.',
    estimatedMinutes: 10,
  },
  steps: [
    {
      id: 'step-1',
      instruction: 'Right-click an empty area on the desktop.',
      explanation:
        'The desktop is the main screen behind your open windows. Right-click means press the right button on your mouse (or two-finger tap on a trackpad).',
      tip: 'If icons cover the whole screen, minimize open windows first so you can see empty space.',
      imageSrc: familyDocumentsStepImages.step1,
      imageAlt: 'Illustration of a desktop with a plus sign where you can right-click',
    },
    {
      id: 'step-2',
      instruction: 'Select New.',
      explanation:
        'A small menu will appear. Look for the word “New” — it opens choices for things you can add to the desktop.',
      imageSrc: familyDocumentsStepImages.step2,
      imageAlt: 'Illustration of a menu with New highlighted',
    },
    {
      id: 'step-3',
      instruction: 'Select Folder.',
      explanation:
        'Under New, choose Folder. Your computer will create a new folder icon on the desktop, often with the name ready to edit.',
      tip: 'On some computers the option may say “New Folder” in one step — that works too.',
      imageSrc: familyDocumentsStepImages.step3,
      imageAlt: 'Illustration of selecting Folder from the menu',
    },
    {
      id: 'step-4',
      instruction: 'Enter “Family Documents”.',
      explanation:
        'Type a name you will remember. Clear names help everyone in the family know what belongs inside.',
      imageSrc: familyDocumentsStepImages.step4,
      imageAlt: 'Illustration of typing Family Documents as the folder name',
    },
    {
      id: 'step-5',
      instruction: 'Press Enter.',
      explanation:
        'Enter confirms the name and saves your new folder. You should now see “Family Documents” on your desktop.',
      tip: 'You can rename the folder later by right-clicking it and choosing Rename.',
      imageSrc: familyDocumentsStepImages.step5,
      imageAlt: 'Illustration of pressing Enter to confirm the folder name',
    },
  ],
}

/** Summary fields for dashboard cards — merged with live progress in hooks. */
export const mockTodayMission: DailyMission = {
  id: mockTodayMissionDetail.id,
  title: mockTodayMissionDetail.title,
  summary: mockTodayMissionDetail.summary,
  estimatedMinutes: mockTodayMissionDetail.estimatedMinutes,
  status: mockTodayMissionDetail.status,
  moduleId: mockTodayMissionDetail.moduleId,
  skillCategory: mockTodayMissionDetail.skillCategory,
  difficulty: mockTodayMissionDetail.difficulty,
  progressPercent: mockTodayMissionDetail.progressPercent,
}
