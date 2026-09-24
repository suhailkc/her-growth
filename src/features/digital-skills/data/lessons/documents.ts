import { createDigitalSkillsLesson } from '@/features/digital-skills/data/lesson-factory'

const trackId = 'documents'

export const documentsLessons = [
  createDigitalSkillsLesson({
    id: 'google-docs',
    trackId,
    order: 1,
    title: 'Google Docs — write and save',
    summary: 'Create a document online that saves automatically.',
    whyItMatters: 'Docs lets you write from any computer without losing work when the power goes out.',
    difficulty: 'gentle',
    estimatedMinutes: 12,
    learningObjective: 'You will create a Doc, type a paragraph, and find it again in Google Drive.',
    steps: [
      {
        instruction: 'Go to docs.google.com while signed in to Google.',
        detail: 'Click Blank document or the + button.',
      },
      {
        instruction: 'Type a title at the top when prompted.',
        detail: 'Example: "Shopping list" or "Study notes".',
      },
      {
        instruction: 'Write a few lines in the main area.',
        detail: 'Changes save automatically — look for "Saved to Drive" at the top.',
      },
      {
        instruction: 'Close the tab and reopen docs.google.com to find your file.',
        detail: 'Recent documents appear on the home screen.',
      },
    ],
    practicalTask: 'Create a Doc with three lines about your week and find it again in Recent.',
    completionAction: 'I created a Google Doc and found it after closing the browser.',
  }),
  createDigitalSkillsLesson({
    id: 'pdf-files',
    trackId,
    order: 2,
    title: 'Open and read PDF files',
    summary: 'View forms and books without editing them.',
    whyItMatters: 'PDFs keep layout fixed — perfect for applications, bills, and study material.',
    difficulty: 'gentle',
    estimatedMinutes: 8,
    learningObjective: 'You will open a PDF and zoom in for comfortable reading.',
    steps: [
      {
        instruction: 'Double-click a PDF in File Explorer or open from email.',
        detail: 'It may open in Edge, Chrome, or Adobe Reader.',
      },
      {
        instruction: 'Use + or zoom controls to enlarge text.',
        detail: 'Ctrl and + on Windows also zooms in many viewers.',
      },
      {
        instruction: 'Scroll with mouse wheel or Page Down.',
        detail: 'Use the thumbnail sidebar if pages are many.',
      },
      {
        instruction: 'Close when done — you usually do not need to save unless you edited.',
        detail: 'Read-only viewing does not change the file.',
      },
    ],
    practicalTask: 'Open any PDF you have and read two pages at comfortable zoom.',
    completionAction: 'I opened a PDF and zoomed for easy reading.',
  }),
  createDigitalSkillsLesson({
    id: 'printing',
    trackId,
    order: 3,
    title: 'Print a document',
    summary: 'Print preview, copies, and paper settings.',
    whyItMatters: 'Printing lets you keep paper copies of forms and study sheets when required.',
    difficulty: 'moderate',
    estimatedMinutes: 10,
    learningObjective: 'You will open Print preview and print one page (or save as PDF if no printer).',
    steps: [
      {
        instruction: 'Open the document or PDF you want to print.',
        detail: 'Check that it is the final version.',
      },
      {
        instruction: 'Press Ctrl+P or choose File → Print.',
        detail: 'Print preview shows how pages will look on paper.',
      },
      {
        instruction: 'Choose your printer or "Microsoft Print to PDF" to practice.',
        detail: 'Select page range if you only need one page to save paper.',
      },
      {
        instruction: 'Click Print and wait for the printer or saved PDF.',
        detail: 'If the printer jams, cancel the job from the printer icon in the taskbar.',
      },
    ],
    practicalTask: 'Print one page or use Print to PDF and open the saved file.',
    completionAction: 'I used Print preview and printed or saved as PDF.',
  }),
  createDigitalSkillsLesson({
    id: 'file-organization',
    trackId,
    order: 4,
    title: 'Organize files on your computer',
    summary: 'Folders by topic and clear file names.',
    whyItMatters: 'Good names and folders mean you spend minutes, not hours, finding school and family documents.',
    difficulty: 'moderate',
    estimatedMinutes: 12,
    learningObjective: 'You will create three folders and move two files into the right places.',
    steps: [
      {
        instruction: 'Open Documents in File Explorer.',
        detail: 'This is a common home for personal files.',
      },
      {
        instruction: 'Create folders such as School, Family, and Personal.',
        detail: 'Right-click → New → Folder for each.',
      },
      {
        instruction: 'Rename messy files with dates or topics.',
        detail: 'Example: "2026-03-fee-receipt.pdf" instead of "scan001.pdf".',
      },
      {
        instruction: 'Drag files into the matching folder.',
        detail: 'If you are unsure, use a "To sort" folder and tidy once a week.',
      },
    ],
    practicalTask: 'Create three folders and move at least two real files into them.',
    completionAction: 'I sorted files into named folders.',
  }),
]
