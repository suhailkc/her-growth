import type { DigitalSkillsStage } from '@/types/digital-skills'

export const digitalSkillsStages: DigitalSkillsStage[] = [
  {
    id: 'computer-confidence',
    order: 1,
    title: 'Computer Confidence',
    subtitle: 'Beginner foundation',
    whyItMatters:
      'When the machine feels familiar, everything else — internet, email, documents — becomes less scary.',
    outcomeVision:
      'You can turn the computer on and off, move the mouse and keyboard comfortably, and find your way around the screen.',
    topics: [
      {
        id: 'turn-on-off',
        label: 'Turn the computer on/off',
        description:
          'Find the power button, wait for the login screen, and shut down from the Start menu so open work is not lost.',
        lessonId: 'turn-on-off',
      },
      {
        id: 'mouse',
        label: 'Mouse basics',
        description:
          'Practice click, double-click, right-click, and scrolling — try opening one icon on the desktop.',
        lessonId: 'mouse',
      },
      {
        id: 'keyboard',
        label: 'Keyboard basics',
        description:
          'Learn Enter, Backspace, Space, and Shift. Try typing a short sentence in Notepad.',
        lessonId: 'keyboard',
      },
      {
        id: 'typing',
        label: 'Typing',
        description:
          'Sit comfortably, look at the screen, and type slowly for a few minutes each day to build muscle memory.',
        lessonId: 'typing',
      },
      {
        id: 'desktop',
        label: 'Desktop basics',
        description:
          'Know the wallpaper, taskbar, and Start button — like the “front table” of your computer.',
        lessonId: 'desktop',
      },
      {
        id: 'windows',
        label: 'Basic Windows controls',
        description:
          'Open, minimize, and close a window; use the menu at the top of an app when you need options.',
        lessonId: 'windows-basics',
      },
    ],
  },
  {
    id: 'files-organization',
    order: 2,
    title: 'Files & Organization',
    subtitle: 'Keep family papers tidy on the computer',
    whyItMatters:
      'Organized files save time when you need school forms, bills, or photos — and reduce the stress of “where did I save that?”',
    outcomeVision:
      'You can create folders, move and copy files, find downloads, and keep family documents in sensible places.',
    topics: [
      {
        id: 'folders',
        label: 'Create folders',
        description:
          'In File Explorer, make a new folder on Desktop or Documents — e.g. “School” or “Bills 2026”.',
        lessonId: 'files-folders',
      },
      {
        id: 'rename',
        label: 'Rename files',
        description:
          'Right-click a file, choose Rename, and use clear names like “Electricity-March.pdf”.',
        lessonId: 'files-folders',
      },
      {
        id: 'move',
        label: 'Move files',
        description:
          'Drag a file into a folder, or use Cut and Paste to put it in the right place.',
        lessonId: 'files-folders',
      },
      {
        id: 'copy-paste',
        label: 'Copy/paste',
        description:
          'Copy a file (Ctrl+C) and paste a duplicate (Ctrl+V) — useful for backups in another folder.',
        lessonId: 'files-folders',
      },
      {
        id: 'delete-restore',
        label: 'Delete/restore',
        description:
          'Send unneeded items to Recycle Bin; open Recycle Bin to restore if you deleted by mistake.',
        lessonId: 'files-folders',
      },
      {
        id: 'find',
        label: 'Find files',
        description:
          'Use the search box in File Explorer or the Start menu search to locate a file by name.',
        lessonId: 'file-organization',
      },
      {
        id: 'family-docs',
        label: 'Organize family documents',
        description:
          'Group photos, IDs, and school papers into folders by year or topic so everyone can find them.',
        lessonId: 'file-organization',
      },
      {
        id: 'downloads',
        label: 'Downloads folder',
        description:
          'Open Downloads, move important files to a permanent folder, and delete old installers you do not need.',
        lessonId: 'file-organization',
      },
    ],
  },
  {
    id: 'internet-basics',
    order: 3,
    title: 'Internet Basics',
    subtitle: 'Browse and search with calm',
    whyItMatters:
      'The internet opens help, information, and services — knowing the basics keeps you in control instead of feeling lost.',
    outcomeVision:
      'You can open a browser, search clearly, use tabs, download and upload files, and fix simple connection hiccups.',
    topics: [
      {
        id: 'browser',
        label: 'Open a browser',
        description:
          'Start Chrome or Edge from the taskbar; notice the address bar where you type website names.',
        lessonId: 'browser',
      },
      {
        id: 'search',
        label: 'Search Google',
        description:
          'Type a clear question in Google — e.g. “how to attach file in Gmail” — and open one trusted result.',
        lessonId: 'search',
      },
      {
        id: 'tabs',
        label: 'Open/use tabs',
        description:
          'Use the + button for a new tab, switch between tabs, and close tabs you no longer need.',
        lessonId: 'tabs',
      },
      {
        id: 'navigate',
        label: 'Navigate websites',
        description:
          'Use Back, menus, and the home page; scroll to read and look for Contact or Help when stuck.',
        lessonId: 'browser',
      },
      {
        id: 'download',
        label: 'Download files',
        description:
          'When a site offers Download, save the file, then find it in Downloads and scan it if it is from an unknown site.',
        lessonId: 'downloads',
      },
      {
        id: 'upload',
        label: 'Upload files',
        description:
          'On forms or Drive, click Upload or Choose file and pick a document from your computer.',
        lessonId: 'uploads',
      },
      {
        id: 'links',
        label: 'Understand links',
        description:
          'Blue or underlined text often opens another page — hover to see the address before you click.',
        lessonId: 'search',
      },
      {
        id: 'troubleshoot',
        label: 'Basic troubleshooting',
        description:
          'If the internet stops, check Wi‑Fi, restart the router once, or try again later — no need to panic.',
        lessonId: 'basic-troubleshooting',
      },
    ],
  },
  {
    id: 'email-communication',
    order: 4,
    title: 'Email & Communication',
    subtitle: 'Stay in touch online',
    whyItMatters:
      'Email and messaging connect you to school, family, and services — small skills here prevent big misunderstandings.',
    outcomeVision:
      'You can use Gmail, send and reply to messages, handle attachments, and join WhatsApp Web or video calls when you choose.',
    topics: [
      {
        id: 'gmail',
        label: 'Gmail basics',
        description:
          'Sign in at gmail.com, read Inbox vs Sent, and find the Compose button for a new message.',
        lessonId: 'gmail-basics',
      },
      {
        id: 'send',
        label: 'Send an email',
        description:
          'Add To, subject line, short body, and Send — start with a test email to yourself.',
        lessonId: 'send-email',
      },
      {
        id: 'reply',
        label: 'Reply/forward',
        description:
          'Use Reply to answer one person; Forward to send the same message to someone else with a note.',
        lessonId: 'send-email',
      },
      {
        id: 'attach',
        label: 'Attach files',
        description:
          'Click the paperclip in Gmail, choose a PDF or photo, wait for it to upload, then send.',
        lessonId: 'attach-files',
      },
      {
        id: 'download-att',
        label: 'Download attachments',
        description:
          'Open an email with an attachment, download it, and save to a folder you will remember.',
        lessonId: 'download-attachments',
      },
      {
        id: 'whatsapp',
        label: 'WhatsApp Web',
        description:
          'On web.whatsapp.com, scan the QR code with your phone to chat from the computer keyboard.',
        lessonId: 'whatsapp-web',
      },
      {
        id: 'video',
        label: 'Video calls',
        description:
          'Join a Google Meet or Zoom link, test camera and mic, and practice mute before speaking.',
        lessonId: 'video-calls',
      },
    ],
  },
  {
    id: 'documents-pdfs',
    order: 5,
    title: 'Documents & PDFs',
    subtitle: 'Write, save, and share',
    whyItMatters:
      'Letters, school notes, and official PDFs show up often — knowing Docs and PDFs helps you participate fully.',
    outcomeVision:
      'You can write a simple document, format it lightly, save and share it, open PDFs, and print when needed.',
    topics: [
      {
        id: 'docs',
        label: 'Google Docs',
        description:
          'Open docs.google.com, start a blank document — it saves automatically to your Google account.',
        lessonId: 'google-docs',
      },
      {
        id: 'format',
        label: 'Basic formatting',
        description:
          'Try bold, bullet lists, and slightly larger headings so notes are easy to read.',
        lessonId: 'google-docs',
      },
      {
        id: 'create',
        label: 'Create a simple document',
        description:
          'Write a half-page letter or shopping list with a title and date — good practice for school forms.',
        lessonId: 'google-docs',
      },
      {
        id: 'share',
        label: 'Save/share documents',
        description:
          'Use Share in Docs to email a link or set “anyone with link can view” when a teacher asks.',
        lessonId: 'google-docs',
      },
      {
        id: 'open-pdf',
        label: 'Open PDFs',
        description:
          'Double-click a PDF to read bills or forms; zoom in if the text is small.',
        lessonId: 'pdf-files',
      },
      {
        id: 'download-pdf',
        label: 'Download PDFs',
        description:
          'From email or a website, download a PDF and file it in the folder where you keep official papers.',
        lessonId: 'pdf-files',
      },
      {
        id: 'print',
        label: 'Print documents',
        description:
          'Use Ctrl+P, check Print preview, choose your printer or “Save as PDF” if you have no printer.',
        lessonId: 'printing',
      },
    ],
  },
  {
    id: 'everyday-digital-life',
    order: 6,
    title: 'Everyday Digital Life',
    subtitle: 'Tools for daily tasks',
    whyItMatters:
      'Drive, calendar, forms, and payments are part of modern life — learning them step by step builds real independence.',
    outcomeVision:
      'You can store files in Drive, use a simple sheet, manage calendar events, fill forms, book services, and pay safely online.',
    topics: [
      {
        id: 'drive',
        label: 'Google Drive',
        description:
          'Store photos and documents online at drive.google.com — frees space on your computer and backs up files.',
      },
      {
        id: 'sheets',
        label: 'Google Sheets basics',
        description:
          'A simple online table for lists or budgets — search “Google Sheets beginner” and try a small expense list.',
      },
      {
        id: 'calendar',
        label: 'Google Calendar',
        description:
          'Add appointments and reminders on your phone or computer so family events are in one place.',
      },
      {
        id: 'forms',
        label: 'Online forms',
        description:
          'Fill school or government forms in the browser — read each field slowly and save before submitting.',
      },
      {
        id: 'bookings',
        label: 'Online bookings',
        description:
          'Book doctor visits or tickets on official sites; double-check date, time, and confirmation SMS or email.',
      },
      {
        id: 'shopping',
        label: 'Online shopping',
        description:
          'Compare prices on trusted apps, read return policy, and avoid paying until you are sure of the seller.',
      },
      {
        id: 'payments',
        label: 'Digital payments',
        description:
          'Use UPI or bank apps only on your own phone; never share PIN or OTP with anyone who calls you.',
      },
    ],
  },
  {
    id: 'digital-safety',
    order: 7,
    title: 'Digital Safety',
    subtitle: 'Protect yourself and your family',
    whyItMatters:
      'Scams and tricks target everyone — a few calm habits protect your money, privacy, and peace of mind.',
    outcomeVision:
      'You can choose strong passwords, handle OTPs safely, spot phishing, and download and share with confidence.',
    topics: [
      {
        id: 'passwords',
        label: 'Strong passwords',
        description:
          'Use a long phrase you can remember, different for email and bank — or a family password manager.',
        lessonId: 'passwords',
      },
      {
        id: 'otp',
        label: 'OTP safety',
        description:
          'OTP codes are secret like ATM PINs — never share them on phone, chat, or with “bank officials”.',
        lessonId: 'otp-safety',
      },
      {
        id: 'phishing',
        label: 'Phishing',
        description:
          'Fake emails or texts urge urgency — check the sender address and do not click odd links.',
        lessonId: 'phishing',
      },
      {
        id: 'scams',
        label: 'Scam awareness',
        description:
          'If someone promises quick money or asks for fees upfront online, pause and ask a trusted person.',
        lessonId: 'scam-awareness',
      },
      {
        id: 'links',
        label: 'Suspicious links',
        description:
          'Short or strange links in WhatsApp may be traps — open the real website by typing it yourself.',
        lessonId: 'phishing',
      },
      {
        id: 'privacy',
        label: 'Privacy',
        description:
          'Review who can see your photos and profile; avoid posting full phone numbers or children’s school details publicly.',
        lessonId: 'privacy',
      },
      {
        id: 'downloads',
        label: 'Safe downloads',
        description:
          'Download apps only from official stores or company sites — free “cracked” software often hides viruses.',
        lessonId: 'scam-awareness',
      },
      {
        id: 'accounts',
        label: 'Account security',
        description:
          'Turn on two-step verification for Gmail and bank apps; log out on shared computers when finished.',
        lessonId: 'passwords',
      },
    ],
  },
  {
    id: 'creative-professional',
    order: 8,
    title: 'Creative & Professional Skills',
    subtitle: 'Teaching, creativity, and growth',
    whyItMatters:
      'Whether for B.Ed., family projects, or curiosity — creative tools help you express ideas and teach others.',
    outcomeVision:
      'You can make simple designs, slides, worksheets, and use online tools that support learning and teaching.',
    topics: [
      {
        id: 'canva',
        label: 'Canva',
        description:
          'Free templates for posters and invitations — search “Canva for beginners” and export as PDF or image.',
      },
      {
        id: 'presentations',
        label: 'Presentations',
        description:
          'Google Slides or PowerPoint: one idea per slide, large text, and a few pictures — practice a 3-slide talk.',
      },
      {
        id: 'worksheets',
        label: 'Educational worksheets',
        description:
          'Create or find printable activities for children — mix text and simple shapes; save as PDF to print.',
      },
      {
        id: 'spreadsheets',
        label: 'Basic spreadsheets',
        description:
          'Track marks or household expenses in rows and columns; learn sum and simple formulas when ready.',
      },
      {
        id: 'teaching',
        label: 'Digital teaching tools',
        description:
          'Explore whiteboard apps or Google Classroom ideas for B.Ed. practice — start with one tool you enjoy.',
      },
      {
        id: 'learning',
        label: 'Online learning tools',
        description:
          'Bookmark free courses or YouTube channels you trust; set small weekly goals instead of long binge sessions.',
      },
    ],
  },
]
