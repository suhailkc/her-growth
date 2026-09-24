import type { ParentingActivity } from '@/features/parenting/types'

export const parentingActivities: ParentingActivity[] = [
  {
    id: 'color-matching-game',
    title: 'Color Matching Game',
    categoryId: 'learning',
    ageRange: '3–5 years',
    durationMinutes: 15,
    difficulty: 'easy',
    description:
      'Help your child match everyday objects to colored paper squares. It builds color names and careful looking.',
    materials: [
      'Three sheets of colored paper (red, blue, yellow)',
      'Small safe objects from home',
    ],
    instructions: [
      'Cut or fold three paper squares and place them on a table.',
      'Gather a few small items in those colors (cup, toy block, cloth).',
      'Name each color slowly and ask your child to place the item on the matching square.',
      'Celebrate each match with a calm “well done” — no rush.',
      'Switch roles: let your child pick an object and you name the color together.',
    ],
    benefits:
      'Supports color recognition, listening, and turn-taking — skills that help later with reading and classroom routines.',
  },
  {
    id: 'story-picture-walk',
    title: 'Picture Walk Before Reading',
    categoryId: 'language',
    ageRange: '4–7 years',
    durationMinutes: 10,
    difficulty: 'easy',
    description:
      'Look through a picture book together before reading the words. Your child predicts what might happen.',
    materials: ['One picture storybook', 'A comfortable seat'],
    instructions: [
      'Open the book and look at the cover. Ask: “What do you see? What might this story be about?”',
      'Turn pages slowly without reading yet. Point to details and let your child describe them.',
      'Ask one gentle question per page, such as “How do you think they feel?”',
      'After the walk, read the story in your normal voice.',
      'Compare: “Was your guess close to what happened?”',
    ],
    benefits:
      'Builds vocabulary, confidence with books, and the habit of thinking before reading — useful for school later.',
  },
  {
    id: 'counting-snack-time',
    title: 'Counting at Snack Time',
    categoryId: 'numbers',
    ageRange: '3–6 years',
    durationMinutes: 8,
    difficulty: 'easy',
    description: 'Use fruit pieces or crackers to count aloud together during a snack.',
    materials: ['Small snack items (e.g. grapes, banana slices)', 'A clean plate'],
    instructions: [
      'Place five to ten pieces on the plate.',
      'Touch each piece once while counting together slowly.',
      'Ask your child to give you “three pieces” and count as they move them.',
      'Eat together and count what is left.',
      'Repeat tomorrow with a different number if your child enjoys it.',
    ],
    benefits:
      'Connects numbers to real life and builds one-to-one counting — a foundation for early math.',
  },
  {
    id: 'texture-tray',
    title: 'Texture Exploration Tray',
    categoryId: 'motor-skills',
    ageRange: '2–4 years',
    durationMinutes: 12,
    difficulty: 'easy',
    description:
      'A small tray with safe textures lets little hands explore while you name what they feel.',
    materials: [
      'A shallow tray',
      'Rice or lentils (supervised)',
      'A soft cloth',
      'A smooth spoon',
    ],
    instructions: [
      'Fill half the tray with dry rice or lentils (always supervise — not for mouthing).',
      'Add a cloth and spoon on the other side.',
      'Let your child scoop, pour, and pat while you say “soft,” “smooth,” “tiny.”',
      'Keep the session short and calm; stop if they lose interest.',
      'Wipe hands and put materials away together.',
    ],
    benefits:
      'Develops fine motor control and sensory awareness, which support writing and self-care skills later.',
  },
  {
    id: 'nature-scavenger-hunt',
    title: 'Gentle Nature Scavenger Hunt',
    categoryId: 'outdoor',
    ageRange: '4–8 years',
    durationMinutes: 20,
    difficulty: 'moderate',
    description:
      'On a short walk, find simple items from a list — leaves, something round, something rough.',
    materials: ['A short checklist on paper', 'Pencil', 'Comfortable shoes and water'],
    instructions: [
      'Write three to five items: something green, something smooth, something that makes a sound.',
      'Walk slowly in a safe area (yard, park, or quiet street).',
      'When your child finds an item, let them point — avoid picking unknown plants.',
      'Tick the list together and talk about what you noticed.',
      'End with a drink and rest — keep it enjoyable, not a race.',
    ],
    benefits:
      'Encourages observation, movement, and calm outdoor time — good for mood and curiosity.',
  },
  {
    id: 'family-gratitude-jar',
    title: 'Family Gratitude Jar',
    categoryId: 'family',
    ageRange: '5–10 years',
    durationMinutes: 15,
    difficulty: 'easy',
    description: 'Each person adds one small note about something nice from the day.',
    materials: ['A jar or box', 'Paper slips', 'Pen or pencil'],
    instructions: [
      'Place the jar where everyone can reach it.',
      'Each evening, write one short line: “Today I liked when…”',
      'Younger children can draw a picture instead of words.',
      'Once a week, read a few notes together — no pressure to read every one.',
      'Keep tone warm; this is not a test of good behavior.',
    ],
    benefits:
      'Builds positive family talk and emotional vocabulary without comparing children to each other.',
  },
  {
    id: 'shape-collage',
    title: 'Shape Collage from Old Magazines',
    categoryId: 'creativity',
    ageRange: '4–7 years',
    durationMinutes: 25,
    difficulty: 'moderate',
    description:
      'Cut simple shapes from magazines and arrange them into a picture on paper.',
    materials: [
      'Old magazines or flyers',
      'Child-safe scissors',
      'Glue stick',
      'One sheet of paper',
    ],
    instructions: [
      'Look for circles, squares, and rectangles in pictures together.',
      'Help with cutting if scissors are still tricky.',
      'Arrange shapes on paper before gluing — there is no wrong design.',
      'Name shapes as you work: “This door is a rectangle.”',
      'Display the collage where your child can see it.',
    ],
    benefits:
      'Combines art, shape recognition, and patience — useful for craft time at school.',
  },
  {
    id: 'rhyme-clap-game',
    title: 'Rhyme and Clap Game',
    categoryId: 'language',
    ageRange: '3–6 years',
    durationMinutes: 10,
    difficulty: 'easy',
    description:
      'Say simple rhyming words and clap on each syllable — playful, not a spelling lesson.',
    materials: ['No materials needed'],
    instructions: [
      'Start with your child’s name and clap each syllable.',
      'Say a word like “cat” and ask for a rhyming word (hat, mat — silly words are fine).',
      'Take turns — you rhyme, then they rhyme.',
      'Keep it to five minutes if attention fades.',
      'End with a hug or high-five, not a score.',
    ],
    benefits:
      'Rhythm and rhyme support listening skills and later reading — in a light, playful way.',
  },
  {
    id: 'button-sort',
    title: 'Button Sort by Size',
    categoryId: 'motor-skills',
    ageRange: '4–6 years',
    durationMinutes: 15,
    difficulty: 'moderate',
    description:
      'Sort large buttons into two bowls by size — supervised, not for very young toddlers.',
    materials: ['Large buttons (too big to swallow)', 'Two bowls'],
    instructions: [
      'Check buttons are safe for your child’s age and always supervise.',
      'Put mixed buttons in one bowl.',
      'Show one big and one small example in each bowl.',
      'Let your child sort; help only when they ask.',
      'Count how many in each bowl when finished.',
    ],
    benefits:
      'Strengthens sorting, comparison, and finger control used for buttons, zips, and writing.',
  },
  {
    id: 'cloud-watch',
    title: 'Cloud Watch and Sketch',
    categoryId: 'outdoor',
    ageRange: '5–9 years',
    durationMinutes: 15,
    difficulty: 'easy',
    description:
      'Lie or sit outside, describe cloud shapes, and optionally draw what you imagine.',
    materials: ['Blank paper and crayons (optional)', 'A mat or chair in shade'],
    instructions: [
      'Pick a safe, shaded spot.',
      'Look up for one minute in silence together.',
      'Take turns saying what a cloud reminds you of — animals, food, anything.',
      'If your child wants, draw one cloud shape.',
      'No need to finish a picture; the talk matters most.',
    ],
    benefits:
      'Calms the mind, builds descriptive language, and creates unhurried time together.',
  },
]

export function getParentingActivityById(
  activityId: string,
): ParentingActivity | undefined {
  return parentingActivities.find((activity) => activity.id === activityId)
}

/** Stable “activity of the day” from the catalog — same activity all day on this device. */
export function getTodaysRecommendedActivity(): ParentingActivity {
  const dayIndex = Math.floor(Date.now() / 86_400_000)
  const index = dayIndex % parentingActivities.length
  return parentingActivities[index]!
}

export function getParentingActivitiesByCategory(
  categoryId: ParentingActivity['categoryId'],
): ParentingActivity[] {
  return parentingActivities.filter((activity) => activity.categoryId === categoryId)
}
