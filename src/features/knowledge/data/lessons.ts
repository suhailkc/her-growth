import type { KnowledgeCategoryId, KnowledgeLesson } from '@/features/knowledge/types'

export const knowledgeLessons: KnowledgeLesson[] = [
  {
    id: 'polite-phone-phrases',
    categoryId: 'english-communication',
    title: 'Polite phrases on the phone',
    whyItMatters:
      'Clear, kind wording helps appointments, school calls, and everyday errands go smoothly.',
    readMinutes: 5,
    explanation: [
      'Start with a greeting and your name: “Hello, this is Priya.”',
      'State your reason simply: “I would like to ask about school fee payment.”',
      'End with thanks: “Thank you for your help.”',
    ],
    examples: [
      '“Could you please repeat that slowly?”',
      '“May I call back in ten minutes?”',
    ],
    practicalTask:
      'Write three sentences you might use when calling a school office. Read them aloud once.',
  },
  {
    id: 'read-train-ticket',
    categoryId: 'travel',
    title: 'How to read a train ticket',
    whyItMatters:
      'Knowing names, times, and seat details reduces stress at the station.',
    readMinutes: 6,
    explanation: [
      'Find passenger name, train number, date, and departure time — usually near the top.',
      'Check origin and destination stations; confirm they match your plan.',
      'Note coach or class and seat or berth number if printed.',
      'Keep the ticket accessible until you exit at your destination.',
    ],
    examples: [
      'PNR is a booking reference — useful if you need help at a counter.',
      'Arrive early during festival seasons; platforms can change — listen to announcements.',
    ],
    practicalTask:
      'Find a sample ticket image online or use an old ticket and point out each field aloud.',
    quiz: [
      {
        id: 'ticket-date',
        prompt: 'Which detail confirms which day you travel?',
        options: [
          { id: 'a', label: 'Passenger name' },
          { id: 'b', label: 'Date of journey' },
          { id: 'c', label: 'Train name color on the paper' },
        ],
        correctOptionId: 'b',
        explanation: 'The journey date tells you when the ticket is valid for travel.',
      },
    ],
  },
  {
    id: 'suspicious-website',
    categoryId: 'internet-literacy',
    title: 'How to spot a suspicious website',
    whyItMatters:
      'Fake sites can steal passwords or money. A quick check protects you.',
    readMinutes: 6,
    explanation: [
      'Look at the address bar: trusted sites often use https and a name you recognize.',
      'Be wary of urgent pop-ups: “Your phone is infected — click now.”',
      'If prices look unbelievably low, compare with the official brand site.',
      'When unsure, close the tab and open the site by typing a known address yourself.',
    ],
    examples: [
      'Misspelled brand names in the URL (e.g. extra letters) are a red flag.',
      'Legitimate banks do not ask for your full PIN by email link.',
    ],
    practicalTask:
      'Without clicking unknown links, compare one official site URL with a search result — notice spelling.',
    quiz: [
      {
        id: 'https-meaning',
        prompt: 'What is a sensible first step before entering a password on a site?',
        options: [
          {
            id: 'a',
            label: 'Check you are on the site you intended, with a familiar address',
          },
          { id: 'b', label: 'Type the password faster so no one sees' },
          { id: 'c', label: 'Share the link in a group chat to ask if it is real' },
        ],
        correctOptionId: 'a',
        explanation:
          'Confirm the web address matches the organization you trust before typing secrets.',
      },
    ],
  },
  {
    id: 'bank-statement-basics',
    categoryId: 'consumer-awareness',
    title: 'What information is on a bank statement?',
    whyItMatters:
      'Statements help you notice mistakes and understand where money went.',
    readMinutes: 6,
    explanation: [
      'Account holder name and account number (often partially hidden).',
      'Statement period: start and end dates.',
      'List of transactions: date, description, money in (credit), money out (debit), balance.',
      'Contact details for the bank if you need help.',
    ],
    examples: [
      'A UPI or transfer line may show a reference number — save it if you dispute a charge.',
      'Opening balance plus credits minus debits should match closing balance.',
    ],
    practicalTask:
      'On a sample statement, circle one credit and one debit and say what each might be.',
    quiz: [
      {
        id: 'statement-balance',
        prompt: 'The closing balance on a statement is…',
        options: [
          { id: 'a', label: 'Money available at the end of the period shown' },
          { id: 'b', label: 'Your credit card limit' },
          { id: 'c', label: 'A fixed amount the bank guarantees forever' },
        ],
        correctOptionId: 'a',
        explanation:
          'Closing balance is what remained in the account after all listed transactions.',
      },
    ],
  },
  {
    id: 'strong-password',
    categoryId: 'digital-citizenship',
    title: 'How to create a strong password',
    whyItMatters:
      'Strong passwords reduce the chance someone else accesses your accounts.',
    readMinutes: 5,
    explanation: [
      'Use a long passphrase you can remember: four unrelated words plus a number.',
      'Do not reuse the same password for email and banking.',
      'Consider a password manager when you are ready — it remembers complex ones for you.',
      'Turn on two-step verification where offered (code to phone after password).',
    ],
    examples: ['River-7-Notebook-Plant is easier to recall than random symbols alone.'],
    practicalTask:
      'Create one new passphrase for a low-risk account practice — not your real bank password yet.',
    quiz: [
      {
        id: 'password-reuse',
        prompt: 'Why avoid using one password everywhere?',
        options: [
          { id: 'a', label: 'If one site leaks it, other accounts become vulnerable' },
          { id: 'b', label: 'Banks require different fonts' },
          { id: 'c', label: 'Passwords expire every day' },
        ],
        correctOptionId: 'a',
        explanation: 'Reuse means one breach can unlock many services.',
      },
    ],
  },
  {
    id: 'online-scams',
    categoryId: 'internet-literacy',
    title: 'Common online scams to recognize',
    whyItMatters:
      'Scammers pressure you to act fast. Recognizing patterns keeps money and data safer.',
    readMinutes: 7,
    explanation: [
      'Unexpected lottery or prize messages asking for a fee upfront.',
      'Calls pretending to be bank staff asking for OTP or PIN — real banks do not ask this way.',
      'Investment schemes promising guaranteed high returns with no risk.',
      'Slow down: talk to a trusted person before sending money or sharing codes.',
    ],
    examples: [
      '“Your parcel is held — pay customs now” with a strange link.',
      'WhatsApp messages from unknown numbers posing as relatives needing urgent transfer.',
    ],
    practicalTask:
      'Discuss one scam example with a family member — what would you do instead?',
    quiz: [
      {
        id: 'otp-share',
        prompt: 'Someone claiming to be from the bank asks for your OTP. You should…',
        options: [
          {
            id: 'a',
            label: 'Never share it; hang up and call the official number on your card',
          },
          { id: 'b', label: 'Share it quickly so they fix the account' },
          { id: 'c', label: 'Post a screenshot online to warn others' },
        ],
        correctOptionId: 'a',
        explanation:
          'OTP codes are secrets. Contact the bank using a number you find yourself.',
      },
    ],
  },
  {
    id: 'emergency-contacts',
    categoryId: 'emergency-preparedness',
    title: 'Emergency contact plan at home',
    whyItMatters: 'Everyone knowing who to call saves precious minutes.',
    readMinutes: 5,
    explanation: [
      'Write numbers for local emergency services, a nearby hospital, and two family contacts.',
      'Post the list where adults and older children can see it — fridge or planner.',
      'Agree a meeting spot outside the home if you must leave quickly.',
      'Practice once: “If there is smoke, we meet at the gate.”',
    ],
    examples: ['Include doctor and school office numbers if helpful for your family.'],
    practicalTask:
      'Fill in a paper contact sheet and photograph it for your phone — keep the paper copy too.',
    quiz: [
      {
        id: 'meeting-spot',
        prompt: 'A family meeting spot outside the home helps when…',
        options: [
          {
            id: 'a',
            label: 'You need to leave the house quickly and phones are unavailable',
          },
          { id: 'b', label: 'You want to hide birthday presents' },
          { id: 'c', label: 'The Wi-Fi stops working' },
        ],
        correctOptionId: 'a',
        explanation:
          'A known outdoor spot reunites the family when communication is hard.',
      },
    ],
  },
  {
    id: 'aadhaar-purpose',
    categoryId: 'government-services',
    title: 'Understanding Aadhaar (basics)',
    whyItMatters:
      'Many services ask for Aadhaar — knowing what it is reduces confusion.',
    readMinutes: 5,
    explanation: [
      'Aadhaar is a government ID number linked to your biometrics, used for various services.',
      'Only share the number with organizations you trust for a clear reason.',
      'Use masked Aadhaar or last-four digits when a form allows it.',
      'Update address or phone through official channels if details change.',
    ],
    examples: ['Keep the physical letter or e-Aadhaar PDF in your document folder.'],
    practicalTask:
      'Locate where you store your Aadhaar copy and note one service that asked for it recently.',
  },
  {
    id: 'reading-food-labels',
    categoryId: 'household',
    title: 'Reading food labels simply',
    whyItMatters: 'Labels help you choose fresher items and notice allergens or dates.',
    readMinutes: 5,
    explanation: [
      'Check “best before” or “use by” dates on packaged food.',
      'Ingredient lists run from most to least — first items are the main contents.',
      'Look for allergen warnings if someone in the family has allergies.',
    ],
    examples: ['Storage instructions (“refrigerate after opening”) prevent spoilage.'],
    practicalTask:
      'Pick one item in your kitchen and read date and first three ingredients aloud.',
  },
  {
    id: 'fire-safety-home',
    categoryId: 'safety',
    title: 'Fire safety at home',
    whyItMatters: 'Small habits prevent common kitchen and wiring fires.',
    readMinutes: 6,
    explanation: [
      'Never leave cooking unattended on high flame.',
      'Keep a lid nearby to smother a small pan fire — do not throw water on oil fires.',
      'Do not overload extension boards; unplug unused heaters.',
      'If smoke spreads, leave and call emergency services — do not hunt for valuables.',
    ],
    examples: ['Test smoke alarms if you have them; replace batteries on a schedule.'],
    practicalTask:
      'Walk through your kitchen and note one cord or cloth that should move away from the stove.',
  },
  {
    id: 'handwashing-science',
    categoryId: 'science',
    title: 'Why handwashing works',
    whyItMatters: 'Soap removes germs that cause stomach and respiratory illness.',
    readMinutes: 4,
    explanation: [
      'Soap breaks oily films where germs hide.',
      'Scrubbing for about 20 seconds cleans thumbs, nails, and between fingers.',
      'Rinse and dry — damp hands pick up germs more easily.',
    ],
    examples: ['Wash before eating and after using the toilet or handling raw food.'],
    practicalTask: 'Time one thorough wash with a short song chorus as your timer.',
  },
  {
    id: 'kind-comments',
    categoryId: 'digital-citizenship',
    title: 'Kind comments online',
    whyItMatters: 'Words online still hurt or help real people.',
    readMinutes: 4,
    explanation: [
      'Pause before replying when you feel angry.',
      'Do not share private family photos without permission.',
      'Report bullying or hate speech using platform tools instead of fighting back.',
    ],
    examples: ['Compliment ideas, not appearance, in study groups.'],
    practicalTask:
      'Write one encouraging reply you could leave on a friend’s achievement post.',
  },
  {
    id: 'bus-travel-tips',
    categoryId: 'travel',
    title: 'Calm bus travel habits',
    whyItMatters: 'Simple routines make local and long buses easier.',
    readMinutes: 5,
    explanation: [
      'Keep ticket and ID in one pouch.',
      'Note your stop name; use maps offline if data is weak.',
      'Hold handrails when standing; offer seats when you can.',
    ],
    examples: ['Carry water and a light snack on long routes.'],
    practicalTask:
      'Plan tomorrow’s route on paper: boarding point, stop name, backup stop.',
  },
  {
    id: 'return-policy',
    categoryId: 'consumer-awareness',
    title: 'Return policies and receipts',
    whyItMatters: 'Receipts prove purchase date if something is faulty.',
    readMinutes: 5,
    explanation: [
      'Ask return windows at purchase — some items are final sale.',
      'Keep receipts in one envelope or photo folder for a month.',
      'Be polite at the counter; explain the defect calmly with proof.',
    ],
    examples: ['Card statements can backup a lost paper receipt sometimes.'],
    practicalTask:
      'Choose one recent purchase and store its receipt digitally or in your family folder.',
  },
]

export function getKnowledgeLessonById(lessonId: string): KnowledgeLesson | undefined {
  return knowledgeLessons.find((lesson) => lesson.id === lessonId)
}

export function getKnowledgeLessonsByCategory(
  categoryId: KnowledgeCategoryId,
): KnowledgeLesson[] {
  return knowledgeLessons.filter((lesson) => lesson.categoryId === categoryId)
}

export function countLessonsByCategory(categoryId: KnowledgeCategoryId): number {
  return getKnowledgeLessonsByCategory(categoryId).length
}
