import type { ParentingStory } from '@/features/parenting/types'

export const parentingStories: ParentingStory[] = [
  {
    id: 'the-sharing-tree',
    title: 'The Sharing Tree',
    ageRange: '4–7 years',
    readMinutes: 4,
    summary: 'A little tree learns that giving shade feels as good as keeping it all.',
    paragraphs: [
      'In a small garden stood a young tree with bright green leaves. Birds often rested on its branches, but the tree wished it could keep every leaf to itself.',
      'One hot afternoon, a child sat under the tree to read. The tree felt proud that its shade helped someone rest.',
      'The next day, the child brought water for the tree’s roots. “Thank you for the cool place,” the child said.',
      'The tree understood: when we share what we have, others share care back — not always with things, sometimes with kindness.',
      'From then on, the tree welcomed birds, readers, and even a cat nap or two. Its garden felt fuller, not emptier.',
    ],
  },
  {
    id: 'mira-finds-her-voice',
    title: 'Mira Finds Her Voice',
    ageRange: '5–8 years',
    readMinutes: 5,
    summary: 'Mira is quiet in class until a kind teacher gives her time to answer.',
    paragraphs: [
      'Mira loved stories but rarely spoke in class. When the teacher asked questions, her ideas stayed in her head like butterflies behind a window.',
      'One day the teacher said, “Take three breaths, then tell us one small thing you noticed in the story.”',
      'Mira breathed slowly. “The character was scared but still helped her friend,” she said softly.',
      'The class listened. No one laughed. The teacher smiled: “That is an important observation.”',
      'Mira learned she did not need a loud voice to be heard — only patience and one brave sentence at a time.',
    ],
  },
  {
    id: 'the-lost-sock-adventure',
    title: 'The Lost Sock Adventure',
    ageRange: '3–6 years',
    readMinutes: 3,
    summary: 'Two socks go on a silly search through the house after laundry day.',
    paragraphs: [
      'Red Sock and Blue Sock lived in the same drawer. After wash day, Red Sock could not find its partner anywhere.',
      'They looked under the bed — only dust bunnies. They peeked in the toy box — only blocks.',
      'In the laundry basket, Blue Sock was hiding inside a towel, still damp and cozy.',
      'They jumped back into the drawer together. “Next time,” said Red Sock, “we stick side by side on the line.”',
      'Mother laughed when she heard the story retold at dinner. Even chores can become a small adventure.',
    ],
  },
]

export function getParentingStoryById(storyId: string): ParentingStory | undefined {
  return parentingStories.find((story) => story.id === storyId)
}
