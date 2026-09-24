import type { DigitalSkillsStage } from '@/types/digital-skills'

export const digitalSkillsStages: DigitalSkillsStage[] = [
  {
    id: 'computer-confidence',
    order: 1,
    title: 'Computer Confidence',
    subtitle: 'Meet your computer',
    whyItMatters:
      'When the computer feels familiar, the internet, email, and documents feel easier too.',
    outcomeVision:
      'Turn the PC on and off, use mouse and keyboard, and find your way around the screen.',
    topics: [
      {
        id: 'turn-on-off',
        label: 'Turn the computer on/off',
        description:
          'Power on, wait for login, shut down from Start when you are done.',
      },
      {
        id: 'mouse',
        label: 'Mouse basics',
        description:
          'Click, double-click, right-click, scroll — open one desktop icon.',
      },
      {
        id: 'keyboard',
        label: 'Keyboard basics',
        description: 'Try Enter, Backspace, Space, Shift in Notepad.',
      },
      {
        id: 'typing',
        label: 'Typing',
        description:
          'Type slowly for a few minutes — look at the screen, not the keys.',
      },
      {
        id: 'desktop',
        label: 'Desktop basics',
        description:
          'Spot wallpaper, taskbar, and Start — your computer’s front table.',
      },
      {
        id: 'windows',
        label: 'Basic Windows controls',
        description: 'Open, minimize, and close a window; peek at the top menu bar.',
      },
    ],
  },
  {
    id: 'files-organization',
    order: 2,
    title: 'Files & Organization',
    subtitle: 'Tidy digital folders',
    whyItMatters: 'Neat files mean less “where did I save that?” stress.',
    outcomeVision:
      'Make folders, move and copy files, and keep family papers easy to find.',
    topics: [
      {
        id: 'folders',
        label: 'Create folders',
        description: 'New folder in Documents — try “School” or “Bills”.',
      },
      {
        id: 'rename',
        label: 'Rename files',
        description: 'Right-click → Rename — use clear names like Electricity-March.',
      },
      {
        id: 'move',
        label: 'Move files',
        description: 'Drag into a folder, or Cut and Paste to the right place.',
      },
      {
        id: 'copy-paste',
        label: 'Copy/paste',
        description: 'Ctrl+C then Ctrl+V to copy a file into another folder.',
      },
      {
        id: 'delete-restore',
        label: 'Delete/restore',
        description: 'Delete to Recycle Bin; open Recycle Bin to bring something back.',
      },
      {
        id: 'find',
        label: 'Find files',
        description: 'Search by name in File Explorer or the Start menu.',
      },
      {
        id: 'family-docs',
        label: 'Organize family documents',
        description: 'Group photos and papers by year or topic in folders.',
      },
      {
        id: 'downloads',
        label: 'Downloads folder',
        description: 'Move keepers to a real folder; delete old installers.',
      },
    ],
  },
  {
    id: 'internet-basics',
    order: 3,
    title: 'Internet Basics',
    subtitle: 'Browse with confidence',
    whyItMatters: 'The web has answers and services — basics keep you in control.',
    outcomeVision: 'Open sites, search, use tabs, and move files up and down safely.',
    topics: [
      {
        id: 'browser',
        label: 'Open a browser',
        description: 'Start Chrome or Edge; find the address bar at the top.',
      },
      {
        id: 'search',
        label: 'Search Google',
        description: 'Type a plain question — open one result you trust.',
      },
      {
        id: 'tabs',
        label: 'Use browser tabs',
        description: 'Keep Google, Gmail, and school sites open — switch with tabs.',
      },
      {
        id: 'navigate',
        label: 'Navigate websites',
        description: 'Back button, scroll, menus — look for Help if you are stuck.',
      },
      {
        id: 'download',
        label: 'Download files',
        description: 'Save downloads, then check the Downloads folder.',
      },
      {
        id: 'upload',
        label: 'Upload files',
        description: 'Choose file on a form or Drive — pick from your computer.',
      },
      {
        id: 'links',
        label: 'Understand links',
        description: 'Blue text opens pages — hover to preview the address.',
      },
      {
        id: 'troubleshoot',
        label: 'Basic troubleshooting',
        description: 'Wi‑Fi off? Toggle it, restart router once, try again calmly.',
      },
    ],
  },
  {
    id: 'email-communication',
    order: 4,
    title: 'Email & Communication',
    subtitle: 'Stay in touch online',
    whyItMatters:
      'Email and chat reach school, family, and offices — small skills help a lot.',
    outcomeVision:
      'Use Gmail, attachments, WhatsApp Web, and video calls when you want.',
    topics: [
      {
        id: 'gmail',
        label: 'Gmail basics',
        description: 'Inbox, Sent, and Compose — sign in at gmail.com.',
      },
      {
        id: 'send',
        label: 'Send an email',
        description: 'To, subject, message, Send — try emailing yourself first.',
      },
      {
        id: 'reply',
        label: 'Reply/forward',
        description: 'Reply to one person; Forward to share with someone else.',
      },
      {
        id: 'attach',
        label: 'Attach files',
        description: 'Paperclip → pick PDF or photo → wait → Send.',
      },
      {
        id: 'download-att',
        label: 'Download attachments',
        description: 'Save attachments to a folder you will remember.',
      },
      {
        id: 'whatsapp',
        label: 'WhatsApp Web',
        description: 'Scan QR at web.whatsapp.com — chat with your keyboard.',
      },
      {
        id: 'video',
        label: 'Video calls',
        description: 'Join Meet or Zoom; test mic/camera; mute until you speak.',
      },
    ],
  },
  {
    id: 'documents-pdfs',
    order: 5,
    title: 'Documents & PDFs',
    subtitle: 'Write and share',
    whyItMatters:
      'Letters and PDFs show up at school and home — Docs makes them simple.',
    outcomeVision: 'Write a note, share a link, open PDFs, print when needed.',
    topics: [
      {
        id: 'docs',
        label: 'Google Docs',
        description: 'Blank doc at docs.google.com — saves automatically.',
      },
      {
        id: 'format',
        label: 'Basic formatting',
        description: 'Bold, bullets, bigger headings — keep it easy to read.',
      },
      {
        id: 'create',
        label: 'Create a simple document',
        description: 'Short letter or list with title and date.',
      },
      {
        id: 'share',
        label: 'Save/share documents',
        description: 'Share link from Docs when school asks for a file.',
      },
      {
        id: 'open-pdf',
        label: 'Open PDFs',
        description: 'Double-click to read; zoom if text is tiny.',
      },
      {
        id: 'download-pdf',
        label: 'Download PDFs',
        description: 'Save PDFs into your “Important papers” folder.',
      },
      {
        id: 'print',
        label: 'Print documents',
        description: 'Ctrl+P → preview → print or Save as PDF.',
      },
    ],
  },
  {
    id: 'everyday-digital-life',
    order: 6,
    title: 'Everyday Digital Life',
    subtitle: 'Daily online tools',
    whyItMatters: 'Drive, calendar, and payments are part of normal life now.',
    outcomeVision: 'Store files online, plan dates, fill forms, shop and pay safely.',
    topics: [
      {
        id: 'drive',
        label: 'Google Drive',
        description: 'Keep photos and docs at drive.google.com — backed up online.',
      },
      {
        id: 'sheets',
        label: 'Google Sheets basics',
        description: 'Simple table for lists or a small budget.',
      },
      {
        id: 'calendar',
        label: 'Google Calendar',
        description: 'Add family appointments with reminders.',
      },
      {
        id: 'forms',
        label: 'Online forms',
        description: 'Read each box slowly; save before you submit.',
      },
      {
        id: 'bookings',
        label: 'Online bookings',
        description: 'Book on official sites — check date and confirmation SMS.',
      },
      {
        id: 'shopping',
        label: 'Online shopping',
        description: 'Trusted apps only; read returns before you pay.',
      },
      {
        id: 'payments',
        label: 'Digital payments',
        description: 'UPI on your phone only — never share PIN or OTP.',
      },
    ],
  },
  {
    id: 'digital-safety',
    order: 7,
    title: 'Digital Safety',
    subtitle: 'Protect yourself online',
    whyItMatters: 'Calm habits protect your money, privacy, and peace of mind.',
    outcomeVision: 'Strong passwords, spot scams, and download from safe places.',
    topics: [
      {
        id: 'passwords',
        label: 'Strong passwords',
        description: 'Long memorable phrase — different for email and bank.',
      },
      {
        id: 'otp',
        label: 'OTP safety',
        description: 'OTP is secret like ATM PIN — never tell anyone.',
      },
      {
        id: 'phishing',
        label: 'Phishing',
        description: 'Urgent fake emails? Check sender — skip odd links.',
      },
      {
        id: 'scams',
        label: 'Scam awareness',
        description: 'Too-good offers online? Pause and ask someone you trust.',
      },
      {
        id: 'links',
        label: 'Suspicious links',
        description: 'Weird WhatsApp links? Type the real website yourself.',
      },
      {
        id: 'privacy',
        label: 'Privacy',
        description: 'Limit who sees photos — avoid posting full phone numbers.',
      },
      {
        id: 'downloads',
        label: 'Safe downloads',
        description: 'Apps from Play Store or official sites only.',
      },
      {
        id: 'accounts',
        label: 'Account security',
        description: 'Two-step verification on Gmail and bank; log out on shared PCs.',
      },
    ],
  },
  {
    id: 'creative-professional',
    order: 8,
    title: 'Creative & Professional Skills',
    subtitle: 'Make and teach with tech',
    whyItMatters:
      'Simple design and slides help family projects and teaching practice.',
    outcomeVision: 'Posters, slides, worksheets, and learning sites at your pace.',
    topics: [
      {
        id: 'canva',
        label: 'Canva',
        description: 'Pick a template — export poster or invite as PDF.',
      },
      {
        id: 'presentations',
        label: 'Presentations',
        description: 'Three slides, big text, one idea each — practice out loud.',
      },
      {
        id: 'worksheets',
        label: 'Educational worksheets',
        description: 'Simple activity sheet — save as PDF to print.',
      },
      {
        id: 'spreadsheets',
        label: 'Basic spreadsheets',
        description: 'Rows for expenses or marks; try SUM when ready.',
      },
      {
        id: 'teaching',
        label: 'Digital teaching tools',
        description: 'Try one whiteboard or classroom app you like.',
      },
      {
        id: 'learning',
        label: 'Online learning tools',
        description: 'Bookmark one trusted channel — small weekly goals.',
      },
    ],
  },
  {
    id: 'ai-basics',
    order: 9,
    title: 'AI Basics',
    subtitle: 'Helpful chat, used safely',
    whyItMatters:
      'AI can explain things and draft text — when you know the basics and stay private.',
    outcomeVision:
      'Open a trusted AI site, ask clear questions, check answers, and keep secrets out of chat.',
    topics: [
      {
        id: 'what-is-ai',
        label: 'What AI assistants are',
        description: 'Plain-language helpers (Gemini, ChatGPT) — not people; they can slip up.',
      },
      {
        id: 'open-safely',
        label: 'Use official AI sites',
        description: 'Type the real address — skip random “free AI” links from ads or WhatsApp.',
      },
      {
        id: 'clear-questions',
        label: 'Ask a clear question',
        description: 'One or two sentences: what you need and if it is for home or school.',
      },
      {
        id: 'check-answers',
        label: 'Check the answer',
        description: 'For money, health, or big decisions — confirm with a trusted person too.',
      },
      {
        id: 'ai-privacy',
        label: 'Keep private things private',
        description: 'No passwords, OTPs, or ID numbers in AI chat — ever.',
      },
      {
        id: 'everyday-uses',
        label: 'Everyday uses at home',
        description: 'Try a polite email draft, simple recipe, or study note — low-stakes first.',
      },
      {
        id: 'copy-to-docs',
        label: 'Save useful replies',
        description: 'Copy into Google Docs; edit in your own words before you send.',
      },
      {
        id: 'when-not-ai',
        label: 'When to ask a person',
        description: 'Doctor, bank, or serious fights — talk to a real expert, not only AI.',
      },
    ],
  },
  {
    id: 'ai-comfortable',
    order: 10,
    title: 'AI — Daily Use',
    subtitle: 'Save time with follow-ups',
    whyItMatters: 'Better prompts and follow-ups make AI useful for real home and study tasks.',
    outcomeVision:
      'Refine answers, use AI inside Google, summarize text, and shape drafts you trust.',
    topics: [
      {
        id: 'follow-up',
        label: 'Follow-up questions',
        description: 'Same chat: “shorter please”, “step by step”, or “one example”.',
      },
      {
        id: 'role-audience',
        label: 'Say who it is for',
        description: '“Explain for a parent meeting” — so tone and depth fit.',
      },
      {
        id: 'summarize',
        label: 'Summarize long text',
        description: 'Paste a notice (no personal IDs) — ask for bullet points, then skim original.',
      },
      {
        id: 'rewrite-tone',
        label: 'Rewrite tone',
        description: 'Rough note → polite email or WhatsApp — fix names and facts yourself.',
      },
      {
        id: 'gemini-in-google',
        label: 'AI inside Google',
        description: 'Try Help me write in Gmail or Docs — read before you send.',
      },
      {
        id: 'safe-uploads',
        label: 'Upload only safe files',
        description: 'Generic worksheets OK — never bank statements or full ID scans.',
      },
      {
        id: 'lesson-outline',
        label: 'Lesson outline',
        description: 'Ask for a short class outline — adapt to your syllabus and kids.',
      },
      {
        id: 'compare-draft',
        label: 'Compare with your draft',
        description: 'Write yours first, then merge AI ideas that feel right.',
      },
    ],
  },
  {
    id: 'ai-confident',
    order: 11,
    title: 'AI — Thoughtful Use',
    subtitle: 'You stay in charge',
    whyItMatters:
      'Confident use means planning tasks, teaching well, and spotting weak or wrong answers.',
    outcomeVision:
      'Multi-step projects, reusable prompts, fact-checking, and calm family AI habits.',
    topics: [
      {
        id: 'multi-step-project',
        label: 'Multi-step projects',
        description: 'Brainstorm → outline in Docs → you write the final — not one paste-and-submit.',
      },
      {
        id: 'saved-prompts',
        label: 'Prompts that work for you',
        description: 'Keep a Doc of favorites — copy, fill blanks, edit the result.',
      },
      {
        id: 'fact-check',
        label: 'Fact-check answers',
        description: 'Dates, laws, exam facts — verify in a book or official site.',
      },
      {
        id: 'teaching-pack',
        label: 'Teaching materials',
        description: 'Worksheet + short quiz from one topic — adjust before class.',
      },
      {
        id: 'image-ai',
        label: 'AI images responsibly',
        description: 'Simple poster in Canva or Gemini — no strangers’ faces without OK.',
      },
      {
        id: 'voice-input',
        label: 'Voice to text',
        description: 'Speak ideas in Malayalam or English — edit transcript before saving.',
      },
      {
        id: 'sheets-ai',
        label: 'AI with spreadsheets',
        description: 'Ask how to SUM a budget column — type the formula yourself in Sheets.',
      },
      {
        id: 'family-ai-rules',
        label: 'AI rules at home',
        description: 'Agree: no private info, no copy-paste homework, check answers together.',
      },
      {
        id: 'free-vs-paid',
        label: 'Free vs paid AI',
        description: 'Know free limits; pay only on the official site — never odd payment links.',
      },
    ],
  },
]
