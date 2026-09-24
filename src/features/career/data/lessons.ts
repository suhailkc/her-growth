import type { CareerLesson, CareerLessonTrackId } from '@/features/career/types'

export const careerLessons: CareerLesson[] = [
  {
    id: 'lesson-planning',
    trackId: 'bed-skills',
    title: 'Lesson planning basics',
    summary: 'A simple way to plan one class period without feeling overwhelmed.',
    readMinutes: 7,
    order: 1,
    sections: [
      {
        heading: 'Start with one clear goal',
        paragraphs: [
          'Ask: “What should students be able to do by the end of this lesson?” Write one sentence — for example, “Students can name three parts of a plant.”',
          'One goal keeps the lesson focused for you and clear for children.',
        ],
      },
      {
        heading: 'Three-part flow',
        paragraphs: [
          'Opening (5 minutes): greet, recall yesterday, state today’s goal.',
          'Main activity (20–30 minutes): hands-on work, discussion, or practice.',
          'Closing (5 minutes): quick review and preview of next time.',
        ],
      },
    ],
    tryItYourself:
      'Draft a one-page plan for a 40-minute primary lesson using the three-part flow.',
  },
  {
    id: 'classroom-activities',
    trackId: 'bed-skills',
    title: 'Classroom activity ideas',
    summary: 'Low-prep activities that keep learners involved.',
    readMinutes: 6,
    order: 2,
    sections: [
      {
        heading: 'Think–pair–share',
        paragraphs: [
          'Ask a question, give quiet think time, let pairs discuss, then invite a few shares to the class.',
          'Works well when you want every child to participate, not only those who raise hands quickly.',
        ],
      },
      {
        heading: 'Station rotation',
        paragraphs: [
          'Set up three simple stations (reading, drawing, puzzle). Small groups spend a few minutes at each.',
          'You can float and observe instead of lecturing the whole time.',
        ],
      },
    ],
    tryItYourself:
      'Choose one activity and note which age group and subject it fits best.',
  },
  {
    id: 'teaching-techniques',
    trackId: 'bed-skills',
    title: 'Teaching techniques that respect learners',
    summary: 'Clear instructions, pacing, and calm correction.',
    readMinutes: 6,
    order: 3,
    sections: [
      {
        heading: 'Model first',
        paragraphs: [
          'Show the steps once slowly before students try. Use simple language and point to what you are doing.',
        ],
      },
      {
        heading: 'Check understanding',
        paragraphs: [
          'Ask open questions: “What is the first step?” instead of only “Do you understand?”',
          'Walk around while students work — your presence prevents many small confusions.',
        ],
      },
    ],
  },
  {
    id: 'child-engagement',
    trackId: 'bed-skills',
    title: 'Child engagement',
    summary: 'Keep attention through variety, movement, and choice.',
    readMinutes: 5,
    order: 4,
    sections: [
      {
        heading: 'Short bursts',
        paragraphs: [
          'Young learners focus best in short segments. Switch from talk to action every few minutes when you can.',
        ],
      },
      {
        heading: 'Meaningful choice',
        paragraphs: [
          'Offer two acceptable options: “Draw or write three facts.” Choice increases ownership without chaos.',
        ],
      },
    ],
  },
  {
    id: 'presentation-skills',
    trackId: 'bed-skills',
    title: 'Presentation skills for teachers',
    summary: 'Speak clearly, use your voice, and connect with the room.',
    readMinutes: 5,
    order: 5,
    sections: [
      {
        heading: 'Voice and pace',
        paragraphs: [
          'Stand where everyone can see you. Pause after important points so ideas can land.',
          'Practice in front of a mirror or record a two-minute explanation on your phone.',
        ],
      },
      {
        heading: 'Visual support',
        paragraphs: [
          'One board or slide with key words beats crowded text. Point to words as you say them.',
        ],
      },
    ],
    tryItYourself:
      'Record a 90-second explanation of a topic you enjoy and listen once for clarity.',
  },
  {
    id: 'educational-worksheets',
    trackId: 'bed-skills',
    title: 'Educational worksheets',
    summary: 'Design sheets that practice one skill at a time.',
    readMinutes: 6,
    order: 6,
    sections: [
      {
        heading: 'One skill per page',
        paragraphs: [
          'Mixing too many ideas on one sheet confuses beginners. Title the sheet with the skill: “Matching rhyming words.”',
        ],
      },
      {
        heading: 'Clear layout',
        paragraphs: [
          'Leave white space, use consistent numbering, and include one worked example at the top.',
        ],
      },
    ],
  },
  {
    id: 'canva-basics',
    trackId: 'digital-teaching',
    title: 'Canva basics',
    summary: 'Create a simple poster or worksheet graphic without design experience.',
    readMinutes: 8,
    order: 1,
    sections: [
      {
        heading: 'Templates are a starting point',
        paragraphs: [
          'Search “worksheet” or “classroom poster” in Canva. Pick a calm template and change the text to your topic.',
        ],
      },
      {
        heading: 'Keep fonts readable',
        paragraphs: [
          'Use one heading font and one body font. Avoid tiny text — if you squint, students will too.',
        ],
      },
    ],
    tryItYourself: 'Make a one-page “class rules” poster with three bullet points.',
  },
  {
    id: 'google-docs',
    trackId: 'digital-teaching',
    title: 'Google Docs for teaching notes',
    summary: 'Write, share, and organize lesson notes in the cloud.',
    readMinutes: 6,
    order: 2,
    sections: [
      {
        heading: 'Create and name clearly',
        paragraphs: [
          'Use names like “Grade 3 – Plants – Lesson plan” so you can search later.',
        ],
      },
      {
        heading: 'Headings and lists',
        paragraphs: [
          'Use built-in heading styles for sections. Bullet lists make steps easy to scan during class.',
        ],
      },
    ],
  },
  {
    id: 'google-slides',
    trackId: 'digital-teaching',
    title: 'Google Slides for simple lessons',
    summary: 'Build a short slide deck students can follow.',
    readMinutes: 7,
    order: 3,
    sections: [
      {
        heading: 'One idea per slide',
        paragraphs: [
          'Title plus one image or three bullet points is enough for most classroom slides.',
        ],
      },
      {
        heading: 'Present mode',
        paragraphs: [
          'Use Present to rehearse timing. Note which slide needs more explanation in your plan.',
        ],
      },
    ],
  },
  {
    id: 'creating-worksheets-digital',
    trackId: 'digital-teaching',
    title: 'Creating worksheets digitally',
    summary: 'Combine Docs, tables, and export to PDF when needed.',
    readMinutes: 6,
    order: 4,
    sections: [
      {
        heading: 'Tables for alignment',
        paragraphs: [
          'Insert a table for matching exercises. Keep borders light so printing saves ink.',
        ],
      },
      {
        heading: 'Export and print',
        paragraphs: [
          'Download as PDF for consistent printing. Test print one copy before making many.',
        ],
      },
    ],
  },
  {
    id: 'simple-presentations',
    trackId: 'digital-teaching',
    title: 'Simple educational presentations',
    summary: 'Structure a five-slide mini lesson for practice or demo.',
    readMinutes: 5,
    order: 5,
    sections: [
      {
        heading: 'Five-slide pattern',
        paragraphs: [
          'Slide 1: title and goal. Slide 2: key idea. Slide 3: example. Slide 4: practice prompt. Slide 5: summary.',
        ],
      },
    ],
    tryItYourself:
      'Build this five-slide pattern for a topic you might teach in practice school.',
  },
  {
    id: 'online-teaching-basics',
    trackId: 'digital-teaching',
    title: 'Online teaching basics',
    summary: 'Calm setup for video classes — optional skill, useful for tutoring too.',
    readMinutes: 7,
    order: 6,
    sections: [
      {
        heading: 'Before you go live',
        paragraphs: [
          'Test camera, microphone, and internet in the same room you will teach from.',
          'Have materials open in tabs before students join to reduce fumbling.',
        ],
      },
      {
        heading: 'Engagement at a distance',
        paragraphs: [
          'Call students by name, use chat for quick answers, and keep sessions shorter than in-person when possible.',
        ],
      },
    ],
  },
]

export function getCareerLessonById(lessonId: string): CareerLesson | undefined {
  return careerLessons.find((lesson) => lesson.id === lessonId)
}

export function getCareerLessonsByTrack(trackId: CareerLessonTrackId): CareerLesson[] {
  return careerLessons
    .filter((lesson) => lesson.trackId === trackId)
    .sort((a, b) => a.order - b.order)
}
