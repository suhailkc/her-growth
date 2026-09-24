import type { ParentingArticle } from '@/features/parenting/types'

export const parentingArticles: ParentingArticle[] = [
  {
    id: 'routine-without-rigidity',
    title: 'Gentle routines without rigidity',
    readMinutes: 5,
    summary:
      'Why predictable rhythms help children — and why perfection is not the goal.',
    sections: [
      {
        heading: 'Why routines matter',
        paragraphs: [
          'Children feel safer when they know what often happens next: bath, story, sleep — or homework, snack, play.',
          'A routine is a pattern, not a strict timetable. Missing one step does not mean you failed.',
        ],
      },
      {
        heading: 'Start with one anchor',
        paragraphs: [
          'Pick one daily anchor: morning teeth brushing, or evening story time.',
          'Keep it short and repeatable for two weeks before adding another habit.',
        ],
      },
      {
        heading: 'When days go off track',
        paragraphs: [
          'Travel, guests, or illness will change the day. Name it calmly: “Today is different; we will try our usual tomorrow.”',
          'Avoid comparing your home to others on social media — you only see a snapshot.',
        ],
      },
    ],
  },
  {
    id: 'screen-time-balance',
    title: 'Balancing screens at home',
    readMinutes: 6,
    summary: 'Practical ideas for media use without shame or endless battles.',
    sections: [
      {
        heading: 'Screens are tools',
        paragraphs: [
          'Video calls with family, educational clips, and music can be helpful. The question is balance and supervision.',
          'Young children learn best from real people and hands-on play — screens work best in small, planned doses.',
        ],
      },
      {
        heading: 'Make a simple family plan',
        paragraphs: [
          'Decide together: where devices charge at night, and which shows are okay.',
          'Use a timer your child can see: “When the sand runs out, we save the game and stretch.”',
        ],
      },
      {
        heading: 'Model pauses',
        paragraphs: [
          'When you put your phone down for meals or conversation, children notice.',
          'You do not need zero screens — you need clear start and stop moments.',
        ],
      },
    ],
  },
  {
    id: 'big-feelings',
    title: 'When feelings run big',
    readMinutes: 5,
    summary:
      'How to stay calm when your child cries, shouts, or shuts down — without fixing every emotion instantly.',
    sections: [
      {
        heading: 'Feelings are not misbehavior',
        paragraphs: [
          'Tantrums and tears often mean “I am overwhelmed,” not “I am bad.”',
          'Your steady presence teaches more than a long lecture in the moment.',
        ],
      },
      {
        heading: 'Name and wait',
        paragraphs: [
          'Say one simple line: “You are angry because the toy broke. I am here.”',
          'Wait a little before solving — sometimes children need to empty the feeling first.',
        ],
      },
      {
        heading: 'When to seek help',
        paragraphs: [
          'If your child’s mood or behavior worries you for many weeks, or they seem very withdrawn, talk with a pediatrician or school counselor.',
          'This article is general support — not a diagnosis or treatment plan.',
        ],
      },
    ],
  },
  {
    id: 'learning-through-play',
    title: 'Learning through everyday play',
    readMinutes: 4,
    summary:
      'Play is how young children practice life skills — no fancy toys required.',
    sections: [
      {
        heading: 'Play is work for children',
        paragraphs: [
          'Stacking cups, pretend cooking, and chasing games build math, language, and social skills.',
          'Adults can join for a few minutes, then step back to let imagination lead.',
        ],
      },
      {
        heading: 'Use what you have',
        paragraphs: [
          'Boxes, spoons, water in a basin, and walks outside are enough for rich play.',
          'Rotate a few toys instead of buying new ones each week.',
        ],
      },
      {
        heading: 'Praise effort, not labels',
        paragraphs: [
          'Say “You kept trying to balance those blocks” instead of “You are so smart.”',
          'Effort-focused praise helps children keep going when something is hard.',
        ],
      },
    ],
  },
]

export function getParentingArticleById(
  articleId: string,
): ParentingArticle | undefined {
  return parentingArticles.find((article) => article.id === articleId)
}
