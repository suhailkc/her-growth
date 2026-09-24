import type { CareerProject } from '@/features/career/types'

export const careerProjects: CareerProject[] = [
  {
    id: 'create-worksheet',
    title: 'Create a worksheet',
    description:
      'Design one printable page that practices a single skill for your target age group.',
    skillsInvolved: ['Layout', 'Subject clarity', 'Canva or Docs'],
    estimatedMinutes: 45,
    steps: [
      'Pick one skill (e.g. two-digit addition, rhyming words).',
      'Write three instructions at the top in simple language.',
      'Add five to eight practice items with increasing difficulty.',
      'Include one worked example.',
      'Export or print a test copy and check spacing.',
    ],
  },
  {
    id: 'create-lesson-plan',
    title: 'Create a lesson plan',
    description:
      'Draft a full plan for one class period using the three-part structure.',
    skillsInvolved: ['Planning', 'Timing', 'Learning goals'],
    estimatedMinutes: 40,
    steps: [
      'Write one measurable learning goal.',
      'Outline opening, main activity, and closing with minutes noted.',
      'List materials needed.',
      'Add one way to check if students understood.',
      'Save the file with a clear name and date.',
    ],
  },
  {
    id: 'five-slide-presentation',
    title: 'Create a 5-slide teaching presentation',
    description:
      'Build a short slide deck you could use in practice teaching or tutoring.',
    skillsInvolved: ['Google Slides', 'Visual clarity', 'Pacing'],
    estimatedMinutes: 50,
    steps: [
      'Choose a topic you know well.',
      'Follow the five-slide pattern from the digital teaching lesson.',
      'Use large text and at most one image per slide.',
      'Rehearse aloud once with Present mode.',
      'Note one improvement for next time.',
    ],
  },
  {
    id: 'canva-poster',
    title: 'Create a simple Canva poster',
    description: 'Make a classroom or study-corner poster with three clear points.',
    skillsInvolved: ['Canva', 'Design basics', 'Messaging'],
    estimatedMinutes: 35,
    steps: [
      'Pick a template with plenty of white space.',
      'Write a short title and three bullet points.',
      'Choose readable fonts and calm colors.',
      'Download as PDF or PNG.',
      'Print or set as a phone wallpaper for practice.',
    ],
  },
  {
    id: 'teaching-portfolio',
    title: 'Build a basic teaching portfolio',
    description:
      'Collect your best plans, worksheets, and slides in one folder — for confidence, not job pressure.',
    skillsInvolved: ['Organization', 'Reflection', 'Digital files'],
    estimatedMinutes: 60,
    steps: [
      'Create a folder with subfolders: Plans, Worksheets, Slides, Notes.',
      'Add two items you are proud of to each subfolder (or leave empty with placeholders).',
      'Write a half-page reflection: what you enjoy teaching and why.',
      'Optional: share the folder link with one trusted mentor.',
      'Set a reminder to add one new item per month if you wish.',
    ],
  },
]

export function getCareerProjectById(projectId: string): CareerProject | undefined {
  return careerProjects.find((project) => project.id === projectId)
}
