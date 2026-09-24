import { createDigitalSkillsLesson } from '@/features/digital-skills/data/lesson-factory'

const trackId = 'email'

export const emailLessons = [
  createDigitalSkillsLesson({
    id: 'gmail-basics',
    trackId,
    order: 1,
    title: 'Gmail basics — inbox and compose',
    summary: 'Sign in, read mail, and find the Compose button.',
    whyItMatters: 'Email is how schools, banks, and services send important information. Gmail is free and widely used.',
    difficulty: 'gentle',
    estimatedMinutes: 10,
    learningObjective: 'You will open Gmail, read one message, and find where to write a new email.',
    steps: [
      {
        instruction: 'Go to mail.google.com and sign in with your Google account.',
        detail: 'Use your email address and password. If you share a computer, sign out when finished.',
      },
      {
        instruction: 'Look at the inbox list on the left or center.',
        detail: 'Bold lines often mean unread mail. Click a message to open it.',
      },
      {
        instruction: 'Find Compose — usually a pencil button or "Compose" text.',
        detail: 'This opens a blank email form.',
      },
      {
        instruction: 'Practice opening and closing a message without replying.',
        detail: 'Use the back arrow to return to the inbox.',
      },
    ],
    practicalTask: 'Open Gmail, read one email, and open the Compose window (you do not have to send yet).',
    completionAction: 'I opened my inbox and found Compose.',
  }),
  createDigitalSkillsLesson({
    id: 'send-email',
    trackId,
    order: 2,
    title: 'Send an email',
    summary: 'To, subject, message, and Send.',
    whyItMatters: 'Sending your own email lets you reach teachers, family, and services without waiting on someone else.',
    difficulty: 'gentle',
    estimatedMinutes: 12,
    learningObjective: 'You will send one short email to someone you trust.',
    steps: [
      {
        instruction: 'Click Compose.',
        detail: 'A small window or full page opens with empty fields.',
      },
      {
        instruction: 'Type the recipient in To.',
        detail: 'Use their full email address. One person is enough for your first try.',
      },
      {
        instruction: 'Add a short subject line.',
        detail: 'Example: "Hello from me" or "Question about school form". Helps them know what the email is about.',
      },
      {
        instruction: 'Write a few sentences, then click Send.',
        detail: 'Wait for "Message sent" or check Sent mail to confirm.',
      },
    ],
    practicalTask: 'Send a friendly note to your own email or a family member who agreed to receive it.',
    completionAction: 'I sent an email with To, subject, and message filled in.',
  }),
  createDigitalSkillsLesson({
    id: 'attach-files',
    trackId,
    order: 3,
    title: 'Attach files to email',
    summary: 'Paperclip icon, choose file, check size.',
    whyItMatters: 'Attachments let you send homework photos, PDFs, and forms without printing.',
    difficulty: 'moderate',
    estimatedMinutes: 10,
    learningObjective: 'You will attach one small file and see its name before sending.',
    steps: [
      {
        instruction: 'Start a new Compose message.',
        detail: 'Fill in To and subject first so you do not forget later.',
      },
      {
        instruction: 'Click the paperclip (Attach files) icon.',
        detail: 'Browse to the photo or document on your computer.',
      },
      {
        instruction: 'Select the file and confirm.',
        detail: 'You should see the file name under the message. Large files may fail — photos under 10 MB are usually fine.',
      },
      {
        instruction: 'Send or save as draft if you are not ready.',
        detail: 'Drafts let you finish later without losing the attachment.',
      },
    ],
    practicalTask: 'Attach one practice file to a draft email (send only if appropriate).',
    completionAction: 'I attached a file and saw its name on the email.',
  }),
  createDigitalSkillsLesson({
    id: 'download-attachments',
    trackId,
    order: 4,
    title: 'Download email attachments',
    summary: 'Open safely and save to a folder you choose.',
    whyItMatters: 'School and office mail often send PDFs you must save and print or upload elsewhere.',
    difficulty: 'moderate',
    estimatedMinutes: 9,
    learningObjective: 'You will download one attachment and move it to a folder.',
    steps: [
      {
        instruction: 'Open an email that has an attachment you expect.',
        detail: 'If you do not know the sender, do not download — ask first.',
      },
      {
        instruction: 'Look for the file name and a download or save icon.',
        detail: 'Gmail often shows a preview with a download arrow.',
      },
      {
        instruction: 'Save to Downloads, then move to your folder.',
        detail: 'File Explorer → Downloads → drag the file to "Her Growth practice" or Documents.',
      },
      {
        instruction: 'Open the file only after you trust the sender.',
        detail: 'PDFs and images are common; .exe files need extra caution.',
      },
    ],
    practicalTask: 'Download one attachment you already received (or from your own sent mail) and file it in a folder.',
    completionAction: 'I downloaded an attachment and saved it in a folder.',
  }),
]
