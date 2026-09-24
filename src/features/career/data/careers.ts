import type { CareerOption } from '@/features/career/types'

export const careerOptions: CareerOption[] = [
  {
    id: 'school-teaching',
    title: 'School teaching',
    summary: 'Leading a classroom in a primary or secondary school after qualifying.',
    whatItInvolves: [
      'Planning lessons and teaching a group of students daily.',
      'Assessing learning and communicating with families.',
      'Working within school routines and team meetings.',
    ],
    skillsRequired: [
      'Lesson planning and classroom management',
      'Clear communication with children and adults',
      'Patience and consistent routines',
    ],
    exampleTasks: [
      'Prepare a week of lesson plans',
      'Conduct a parent–teacher meeting',
      'Adapt an activity for different learning speeds',
    ],
    optionalLearningPath: [
      'Complete B.Ed. with practice teaching',
      'Prepare for state eligibility tests if required in your region',
      'Observe experienced teachers when possible',
    ],
  },
  {
    id: 'tuition',
    title: 'Tuition (home or center)',
    summary:
      'Supporting students in small groups or one-to-one outside regular school hours.',
    whatItInvolves: [
      'Explaining school subjects at the learner’s pace.',
      'Scheduling sessions with families.',
      'Tracking progress informally with notes or simple checklists.',
    ],
    skillsRequired: [
      'Strong grasp of subjects you teach',
      'Scheduling and punctuality',
      'Encouraging tone without pressure',
    ],
    exampleTasks: [
      'Diagnose where a child stuck on homework',
      'Design a four-week revision plan',
      'Share gentle progress updates with parents',
    ],
    optionalLearningPath: [
      'Start by helping relatives or neighbors if comfortable',
      'Gather reference books and past papers',
      'Explore local tuition norms and safety practices',
    ],
  },
  {
    id: 'preschool-teaching',
    title: 'Preschool teaching',
    summary: 'Guiding very young children through play, routines, and early literacy.',
    whatItInvolves: [
      'Leading circle time, stories, and structured play.',
      'Supporting social skills and basic self-care routines.',
      'Partnering with assistants and families on daily updates.',
    ],
    skillsRequired: [
      'Energy and warmth with young children',
      'Safety awareness and supervision',
      'Simple, repeatable routines',
    ],
    exampleTasks: [
      'Plan a themed week (colors, animals, seasons)',
      'Set up a safe art activity',
      'Write a short daily note for parents',
    ],
    optionalLearningPath: [
      'Early childhood courses or certifications available in some regions',
      'Volunteer hours in preschool settings',
      'First-aid basics for childcare settings',
    ],
  },
  {
    id: 'online-tutoring',
    title: 'Online tutoring',
    summary: 'Teaching students through video calls and shared documents.',
    whatItInvolves: [
      'Scheduling video sessions across time zones or local hours.',
      'Sharing slides, worksheets, or whiteboard tools.',
      'Maintaining a quiet, reliable teaching space at home.',
    ],
    skillsRequired: [
      'Comfort with video tools (Meet, Zoom, etc.)',
      'Clear speaking and pacing on camera',
      'Basic digital file organization',
    ],
    exampleTasks: [
      'Send a pre-session checklist to families',
      'Screen-share a worked example',
      'Follow up with practice links after class',
    ],
    optionalLearningPath: [
      'Practice with friends before paid sessions',
      'Learn one whiteboard or slide tool well',
      'Set boundaries for hours and payment upfront',
    ],
  },
  {
    id: 'educational-content',
    title: 'Educational content creation',
    summary:
      'Making videos, posts, or printable resources that teach one idea at a time.',
    whatItInvolves: [
      'Choosing topics you understand well.',
      'Recording or writing in simple language.',
      'Publishing on platforms you are comfortable with.',
    ],
    skillsRequired: [
      'Explaining concepts clearly',
      'Basic recording or writing skills',
      'Consistency over perfection',
    ],
    exampleTasks: [
      'Script a three-minute explainer video',
      'Design a printable vocabulary sheet',
      'Respond kindly to learner questions online',
    ],
    optionalLearningPath: [
      'Start with unlisted videos for practice',
      'Study creators whose tone you admire',
      'Learn platform guidelines for child-safe content',
    ],
  },
  {
    id: 'teaching-materials',
    title: 'Teaching materials design',
    summary:
      'Creating worksheets, slide decks, or posters for other teachers or parents.',
    whatItInvolves: [
      'Understanding curriculum topics and age levels.',
      'Designing clear layouts in Canva, Docs, or similar tools.',
      'Selling or sharing materials ethically (respect copyright).',
    ],
    skillsRequired: [
      'Subject knowledge and editing',
      'Layout and readability',
      'Organizing files for reuse',
    ],
    exampleTasks: [
      'Build a worksheet pack on one math skill',
      'Create a slide template others can edit',
      'Gather feedback from two teacher friends',
    ],
    optionalLearningPath: [
      'Portfolio of sample materials',
      'Learn licensing basics for images and fonts',
      'Explore teacher marketplaces if interested',
    ],
  },
  {
    id: 'admin-digital-work',
    title: 'Administrative digital work',
    summary:
      'Supporting schools or small businesses with documents, scheduling, and email.',
    whatItInvolves: [
      'Organizing spreadsheets, forms, and correspondence.',
      'Coordinating calendars and reminders.',
      'Keeping information confidential and accurate.',
    ],
    skillsRequired: [
      'Spreadsheets and document tools',
      'Attention to detail',
      'Professional, friendly email tone',
    ],
    exampleTasks: [
      'Maintain an attendance sheet',
      'Draft a newsletter from bullet notes',
      'Sort files into labeled folders',
    ],
    optionalLearningPath: [
      'Practice with sample data at home',
      'Offer help to a community group to build confidence',
      'Learn one scheduling tool thoroughly',
    ],
  },
  {
    id: 'home-based-opportunities',
    title: 'Home-based opportunities',
    summary:
      'Flexible work from home that may combine teaching skills with other strengths.',
    whatItInvolves: [
      'Mixing tasks like tutoring, content, crafts, or remote admin depending on your interests.',
      'Setting your own hours within family responsibilities.',
      'Building trust slowly through small projects.',
    ],
    skillsRequired: [
      'Self-scheduling and boundaries',
      'Communication about availability',
      'Willingness to learn tools as needed',
    ],
    exampleTasks: [
      'Block focused work hours on a shared family calendar',
      'Track income and expenses simply for any paid work',
      'Review what tasks energize you versus drain you',
    ],
    optionalLearningPath: [
      'List skills you already use at home that transfer to paid work',
      'Talk with mentors about realistic local options',
      'No need to choose a label — combine paths if it suits your life',
    ],
  },
]

export function getCareerOptionById(careerId: string): CareerOption | undefined {
  return careerOptions.find((option) => option.id === careerId)
}
