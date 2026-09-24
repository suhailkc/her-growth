import { createDigitalSkillsLesson } from '@/features/digital-skills/data/lesson-factory'

const stageId = 'digital-safety'

export const digitalSafetyLessons = [
  createDigitalSkillsLesson({
    id: 'passwords',
    stageId,
    order: 1,
    title: 'Strong passwords you can remember',
    summary: 'Long phrases, unique passwords, and a safe place to store them.',
    whyItMatters: 'A good password stops strangers from opening your email, bank, and social accounts.',
    difficulty: 'gentle',
    estimatedMinutes: 10,
    learningObjective: 'You will create one strong passphrase and store it safely (not on a sticky note on the monitor).',
    steps: [
      {
        instruction: 'Use a sentence you can remember with small changes.',
        detail: 'Example: "I drink chai at 7pm!" — add numbers and symbols where allowed.',
      },
      {
        instruction: 'Use a different password for email and banking.',
        detail: 'If one leaks, the others stay safe.',
      },
      {
        instruction: 'Write passwords in a notebook kept in a private drawer, or use a password manager a trusted person helps you set up.',
        detail: 'Never share passwords in WhatsApp groups.',
      },
      {
        instruction: 'Change a password if a site tells you there was a breach.',
        detail: 'Use the official site only — not a link from a random message.',
      },
    ],
    practicalTask: 'Update one account password using a passphrase and record it in your private place.',
    completionAction: 'I set a strong password and stored it safely.',
  }),
  createDigitalSkillsLesson({
    id: 'otp-safety',
    stageId,
    order: 2,
    title: 'OTP safety',
    summary: 'One-time codes are private — never share them.',
    whyItMatters: 'OTP messages prove it is really you. Scammers ask for them to steal money and accounts.',
    difficulty: 'gentle',
    estimatedMinutes: 7,
    learningObjective: 'You will explain why OTPs must stay secret and delete old OTP SMS if you like.',
    steps: [
      {
        instruction: 'Know that real banks and Google never ask for your OTP on a phone call.',
        detail: 'If someone asks, hang up and call the official number on your card or website.',
      },
      {
        instruction: 'Type OTPs only on the app or site you opened yourself.',
        detail: 'Not on a form linked from an unknown message.',
      },
      {
        instruction: 'Do not screenshot OTPs to send to "helpers" online.',
        detail: 'That gives them full access.',
      },
      {
        instruction: 'Delete OTP messages after use if your phone feels cluttered.',
        detail: 'This is optional — it does not change security much but keeps inbox tidy.',
      },
    ],
    practicalTask: 'Tell one family member the rule: "I never share OTPs, even with friends."',
    completionAction: 'I understand OTPs are secret and only for me.',
  }),
  createDigitalSkillsLesson({
    id: 'phishing',
    stageId,
    order: 3,
    title: 'Spot phishing messages',
    summary: 'Fake links, urgent tone, and odd sender addresses.',
    whyItMatters: 'Phishing tries to rush you into clicking — slowing down protects your money and identity.',
    difficulty: 'moderate',
    estimatedMinutes: 9,
    learningObjective: 'You will check a sender address and hover a link before clicking.',
    steps: [
      {
        instruction: 'Be wary of "Act now or account closed" messages.',
        detail: 'Real companies rarely threaten you in one line.',
      },
      {
        instruction: 'Check the sender email closely — small spelling mistakes mean fake.',
        detail: 'Example: amaz0n.com instead of amazon.com.',
      },
      {
        instruction: 'Hover over links (do not click) to see the real address.',
        detail: 'On phone, long-press a link to preview.',
      },
      {
        instruction: 'When unsure, open the app or type the website yourself.',
        detail: 'Do not use the link in the message.',
      },
    ],
    practicalTask: 'Review one old promotional email and decide if the sender looks real (no need to click).',
    completionAction: 'I can pause and check before clicking links.',
  }),
  createDigitalSkillsLesson({
    id: 'scam-awareness',
    stageId,
    order: 4,
    title: 'Common scams and how to respond',
    summary: 'Prize wins, job offers, and "help desk" calls.',
    whyItMatters: 'Scams target everyone. Recognizing patterns helps you protect family savings and peace of mind.',
    difficulty: 'moderate',
    estimatedMinutes: 10,
    learningObjective: 'You will name two scam signs and know who to ask before sending money.',
    steps: [
      {
        instruction: 'Ignore "You won a lottery" texts unless you entered that lottery.',
        detail: 'They often ask for a fee — that is the scam.',
      },
      {
        instruction: 'Reject remote access apps from unknown callers.',
        detail: 'They may say they are from Microsoft or your bank — verify independently.',
      },
      {
        instruction: 'Talk to a trusted person before sending money to new online "friends".',
        detail: 'Romance and investment scams build trust over weeks.',
      },
      {
        instruction: 'Report and block repeat scam numbers in your phone.',
        detail: 'You can also forward SMS spam to your carrier if they provide a number.',
      },
    ],
    practicalTask: 'Block one spam number or mark a suspicious email as spam in Gmail.',
    completionAction: 'I know two scam signs and will ask before sending money.',
  }),
  createDigitalSkillsLesson({
    id: 'privacy',
    stageId,
    order: 5,
    title: 'Privacy basics on phone and computer',
    summary: 'App permissions, location, and what you share online.',
    whyItMatters: 'You choose what apps and people can see — small settings changes add up to real privacy.',
    difficulty: 'moderate',
    estimatedMinutes: 11,
    learningObjective: 'You will review one app’s permissions and adjust location or photos access.',
    steps: [
      {
        instruction: 'Open Settings on your phone → Apps or Privacy.',
        detail: 'See which apps can use camera, contacts, and location.',
      },
      {
        instruction: 'Turn off location for apps that do not need it.',
        detail: 'Maps need location; a flashlight app usually does not.',
      },
      {
        instruction: 'Think before posting children’s photos with school names visible.',
        detail: 'Share with close friends lists when possible.',
      },
      {
        instruction: 'Log out of shared computers and clear downloads you do not need.',
        detail: 'Especially after using a cyber café or library PC.',
      },
    ],
    practicalTask: 'Review permissions for one app and turn off one access you do not need.',
    completionAction: 'I changed one privacy setting on my phone or computer.',
  }),
]
