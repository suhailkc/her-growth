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
      {
        id: 'connect-wifi',
        label: 'Connect to Wi‑Fi',
        description: 'Open network settings — pick home Wi‑Fi, enter password once.',
      },
      {
        id: 'peripherals',
        label: 'Mouse and keyboard plug-in',
        description: 'USB in gently — wait a moment; unplug when the PC is off.',
      },
      {
        id: 'undo',
        label: 'Undo mistakes',
        description: 'Ctrl+Z in Notepad or Docs — one step back when you typo.',
      },
      {
        id: 'screenshot',
        label: 'Screenshot',
        description: 'Win+Shift+S — snip the error; save to share with family for help.',
      },
      {
        id: 'text-size',
        label: 'Make text easier to read',
        description: 'Settings → Display — bump text size; Ctrl + / − in browser too.',
      },
    ],
  },
  {
    id: 'smartphone-essentials',
    order: 2,
    title: 'Smartphone Essentials',
    subtitle: 'Your phone, day to day',
    whyItMatters:
      'Many tasks start on the phone — comfort here makes school chat, photos, and payments easier.',
    outcomeVision:
      'Wi‑Fi and data, safe apps, photos, scans, backup, and settings that feel right.',
    topics: [
      {
        id: 'wifi-mobile-data',
        label: 'Wi‑Fi and mobile data',
        description: 'Quick settings — Wi‑Fi on at home; data when you are out.',
      },
      {
        id: 'play-store-apps',
        label: 'Install apps safely',
        description: 'Play Store only — read reviews; Update when it asks.',
      },
      {
        id: 'photos-share',
        label: 'Take and share photos',
        description: 'Camera → one clear shot → share to family on WhatsApp.',
      },
      {
        id: 'scan-to-pdf',
        label: 'Scan paper to PDF',
        description: 'Drive scan or camera app — straight page for school or forms.',
      },
      {
        id: 'photo-backup',
        label: 'Back up photos',
        description: 'Turn on Google Photos backup — check “synced” once a month.',
      },
      {
        id: 'phone-settings',
        label: 'Comfort settings',
        description: 'Text size, brightness, ringtone — make the screen easy on your eyes.',
      },
      {
        id: 'malayalam-keyboard',
        label: 'Malayalam keyboard',
        description: 'Add Malayalam keyboard — type one short line in Keep or Notes.',
      },
      {
        id: 'voice-notes',
        label: 'Voice to notes',
        description: 'Mic on keyboard — speak a reminder; fix words before you save.',
      },
    ],
  },
  {
    id: 'files-organization',
    order: 3,
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
      {
        id: 'desktop-cleanup',
        label: 'Tidy the desktop',
        description: 'Move loose files into folders — leave only shortcuts you use daily.',
      },
      {
        id: 'zip-unzip',
        label: 'Zip and unzip',
        description: 'Right-click folder → Compress — attach zip to email; open zip to extract.',
      },
    ],
  },
  {
    id: 'internet-basics',
    order: 4,
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
      {
        id: 'bookmarks',
        label: 'Bookmarks',
        description: 'Star Gmail and school site — open from the bookmarks bar.',
      },
      {
        id: 'clear-cache',
        label: 'When a site acts odd',
        description: 'Refresh once; if still stuck, clear cache for that site only.',
      },
      {
        id: 'official-sites',
        label: 'Official websites',
        description: 'Look for .gov.in or your school domain — type it yourself.',
      },
      {
        id: 'google-translate',
        label: 'Google Translate',
        description: 'Type or speak a line — read both languages; copy carefully.',
      },
    ],
  },
  {
    id: 'email-communication',
    order: 5,
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
      {
        id: 'gmail-labels',
        label: 'Gmail labels',
        description: 'Label “School” or “Bills” — drag one email to try it.',
      },
      {
        id: 'unsubscribe',
        label: 'Unsubscribe safely',
        description: 'Unsubscribe at bottom of real newsletters — skip odd “you won” mail.',
      },
      {
        id: 'mute-groups',
        label: 'Mute busy groups',
        description: 'School group → mute notifications — read when you have time.',
      },
    ],
  },
  {
    id: 'documents-pdfs',
    order: 6,
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
      {
        id: 'docs-tables',
        label: 'Simple tables',
        description: 'Insert table in Docs — names and dates for a class list.',
      },
      {
        id: 'find-replace',
        label: 'Find and replace',
        description: 'Ctrl+H — fix the same typo everywhere in one go.',
      },
      {
        id: 'merge-pdf',
        label: 'Combine PDFs',
        description: 'Use a trusted merge tool — delete the upload after you download.',
      },
    ],
  },
  {
    id: 'school-family-online',
    order: 7,
    title: 'School & Family Online',
    subtitle: 'Homework, meetings, groups',
    whyItMatters:
      'School runs on PDFs, WhatsApp, and video calls — small habits save evening stress.',
    outcomeVision:
      'Join PTMs online, hand in homework files, and stay calm in school groups.',
    topics: [
      {
        id: 'homework-pdfs',
        label: 'Homework PDFs',
        description: 'Save from WhatsApp or email → rename → upload or print.',
      },
      {
        id: 'school-whatsapp',
        label: 'School WhatsApp groups',
        description: 'Mute when noisy; reply in full sentences; no forwarding rumors.',
      },
      {
        id: 'ptm-meet',
        label: 'Parent meetings online',
        description: 'Open Meet link on time — camera optional; mute until you speak.',
      },
      {
        id: 'permission-forms',
        label: 'Permission slips online',
        description: 'Read twice; fill every box; screenshot confirmation if asked.',
      },
      {
        id: 'share-with-teacher',
        label: 'Share work with teacher',
        description: 'Docs link or PDF attach — check name and class on the file.',
      },
    ],
  },
  {
    id: 'everyday-digital-life',
    order: 8,
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
      {
        id: 'youtube-basics',
        label: 'YouTube usefully',
        description: 'Subscribe to one trusted channel — avoid random “free prize” ads.',
      },
      {
        id: 'digilocker-login',
        label: 'DigiLocker basics',
        description: 'Official app or site only — view one document; never share OTP.',
      },
      {
        id: 'google-maps',
        label: 'Google Maps',
        description: 'Search a place — directions; share live location only with family.',
      },
    ],
  },
  {
    id: 'digital-safety',
    order: 9,
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
      {
        id: 'screen-lock',
        label: 'Screen lock',
        description: 'PIN or fingerprint on phone — auto-lock after a few minutes.',
      },
      {
        id: 'app-permissions',
        label: 'App permissions',
        description: 'Camera/mic only when needed — review in phone settings.',
      },
      {
        id: 'report-block',
        label: 'Report and block',
        description: 'Spam on WhatsApp — block; report if it feels threatening.',
      },
      {
        id: 'public-wifi',
        label: 'Public Wi‑Fi',
        description: 'Mall or café Wi‑Fi — avoid bank apps; use mobile data for payments.',
      },
    ],
  },
  {
    id: 'creative-professional',
    order: 10,
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
        id: 'google-slides',
        label: 'Google Slides',
        description: 'slides.google.com — title slide plus two big-text slides.',
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
        id: 'export-for-print',
        label: 'Export for print',
        description: 'PDF from Canva or Docs — check margins in print preview.',
      },
      {
        id: 'simple-video',
        label: 'Simple class video',
        description: 'Phone clip or short screen record — keep under two minutes.',
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
    order: 11,
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
        id: 'ai-phone-vs-pc',
        label: 'AI on phone vs computer',
        description: 'Same privacy rules — smaller screen; use official app or browser.',
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
    order: 12,
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
    order: 13,
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
  {
    id: 'staying-current',
    order: 14,
    title: 'Staying Current',
    subtitle: 'Calm monthly habits',
    whyItMatters: 'A few repeat checks keep devices fast, backed up, and safer over time.',
    outcomeVision:
      'Updates, storage, passwords, and restarts — without fear.',
    topics: [
      {
        id: 'updates',
        label: 'Install updates',
        description: 'Windows Update and phone system update — plug in Wi‑Fi, then restart.',
      },
      {
        id: 'storage-check',
        label: 'Free up storage',
        description: 'Delete old downloads and blurry photos — empty Recycle Bin once.',
      },
      {
        id: 'password-review',
        label: 'Password check-in',
        description: 'Once a season — change email password if you reused an old one.',
      },
      {
        id: 'restart-habit',
        label: 'Restart when sluggish',
        description: 'Restart PC or phone weekly — fixes many small glitches.',
      },
      {
        id: 'backup-check',
        label: 'Backup check',
        description: 'Open Photos or Drive — confirm recent files show as synced.',
      },
    ],
  },
]
