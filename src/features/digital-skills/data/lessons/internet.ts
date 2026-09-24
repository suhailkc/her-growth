import { createDigitalSkillsLesson } from '@/features/digital-skills/data/lesson-factory'

const stageId = 'internet-basics'

export const internetLessons = [
  createDigitalSkillsLesson({
    id: 'browser',
    stageId,
    order: 1,
    title: 'Open and use a web browser',
    summary: 'Chrome, Edge, or Firefox — open a browser and find the address bar.',
    whyItMatters:
      'The browser is your door to the internet — news, forms, and learning all start here.',
    difficulty: 'gentle',
    estimatedMinutes: 8,
    learningObjective:
      'You will open your browser and visit one safe website you trust.',
    steps: [
      {
        instruction: 'Click the browser icon on the taskbar or desktop.',
        detail:
          'Common names: Chrome, Microsoft Edge, Firefox. Only one needs to open.',
      },
      {
        instruction: 'Find the address bar at the top.',
        detail: 'It shows a web address like https://… Click inside it to type.',
      },
      {
        instruction: 'Type a site you know, then press Enter.',
        detail:
          'Example: your bank only if you already use it, or a familiar news site. Avoid random links from messages.',
      },
      {
        instruction: 'Use the refresh button if the page looks stuck.',
        detail:
          'The circular arrow reloads the page. Wait a few seconds before clicking again.',
      },
    ],
    practicalTask: 'Open your browser and visit one website you use often.',
    completionAction: 'I opened the browser and loaded a site I trust.',
  }),
  createDigitalSkillsLesson({
    id: 'search',
    stageId,
    order: 2,
    title: 'Search the web clearly',
    summary: 'Use Google or Bing with simple words.',
    whyItMatters: 'Good search words save time and help you find reliable answers.',
    difficulty: 'gentle',
    estimatedMinutes: 8,
    learningObjective:
      'You will run one search and open a result that matches what you needed.',
    steps: [
      {
        instruction: 'Go to google.com or use the search box in your browser.',
        detail: 'Click in the search box when the cursor is blinking.',
      },
      {
        instruction: 'Type what you want in plain language.',
        detail:
          'Example: "how to save photo on Android phone" instead of one vague word.',
      },
      {
        instruction: 'Press Enter and scan the titles before clicking.',
        detail:
          'Look for official sites (.gov, school sites, or brands you recognize).',
      },
      {
        instruction: 'Open one result in a new tab (optional).',
        detail:
          'Right-click a link → Open link in new tab — so you can go back to results easily.',
      },
    ],
    practicalTask:
      'Search for a recipe or school topic you care about and open one helpful page.',
    completionAction: 'I searched with clear words and opened one result.',
  }),
  createDigitalSkillsLesson({
    id: 'tabs',
    stageId,
    order: 3,
    title: 'Manage browser tabs',
    summary: 'Open, switch, and close tabs without losing your place.',
    whyItMatters:
      'Tabs let you keep several pages open — like bookmarks on a desk — without closing the browser.',
    difficulty: 'gentle',
    estimatedMinutes: 7,
    learningObjective: 'You will open two tabs and close one when finished.',
    steps: [
      {
        instruction: 'Click the + next to your current tab.',
        detail: 'A blank tab opens. You can search or type an address there.',
      },
      {
        instruction: 'Click each tab at the top to switch pages.',
        detail: 'The active tab is usually brighter or underlined.',
      },
      {
        instruction: 'Close a tab with the X on the tab itself.',
        detail: 'This closes only that page, not the whole browser.',
      },
      {
        instruction: 'Reopen a closed tab if your browser offers it.',
        detail:
          'Right-click the tab bar → Reopen closed tab, or use Ctrl+Shift+T on Windows.',
      },
    ],
    practicalTask:
      'Keep two tabs open for five minutes, then close the one you no longer need.',
    completionAction: 'I opened two tabs and closed one safely.',
  }),
  createDigitalSkillsLesson({
    id: 'downloads',
    stageId,
    order: 4,
    title: 'Download files safely',
    summary: 'Save a file from the web and find it on your computer.',
    whyItMatters:
      'Downloads bring PDFs, forms, and photos to your device — knowing where they land prevents panic later.',
    difficulty: 'moderate',
    estimatedMinutes: 10,
    learningObjective:
      'You will download a file from a trusted site and open it from Downloads.',
    steps: [
      {
        instruction: 'Download only from sites you trust.',
        detail:
          'School portals, government sites, or stores you already use are safer than random pop-ups.',
      },
      {
        instruction: 'Click Download and watch the bottom of the browser.',
        detail: 'Many browsers show progress. Wait until it says finished.',
      },
      {
        instruction: 'Open your Downloads folder.',
        detail:
          'File Explorer → Downloads, or click the downloaded file name in the browser bar.',
      },
      {
        instruction: 'Scan with your eyes: does the file name match what you expected?',
        detail:
          'If the name looks strange, do not open it — delete it and ask for help.',
      },
    ],
    practicalTask:
      'Download one file you need (form, photo, or PDF) and open it from Downloads.',
    completionAction: 'I downloaded a file and found it in Downloads.',
  }),
  createDigitalSkillsLesson({
    id: 'uploads',
    stageId,
    order: 5,
    title: 'Upload files to a website',
    summary: 'Attach or upload a photo or document when a form asks.',
    whyItMatters:
      'Many school and government forms need you to upload ID scans or homework files.',
    difficulty: 'moderate',
    estimatedMinutes: 10,
    learningObjective:
      'You will choose a file from your computer in an upload dialog (practice site or form).',
    steps: [
      {
        instruction: 'Find the Upload or Choose file button on the page.',
        detail: 'It may say Browse or Attach file — all mean the same thing.',
      },
      {
        instruction: 'Click it and a window opens showing your folders.',
        detail: 'Navigate to Desktop or Documents where you saved the file.',
      },
      {
        instruction: 'Click the file once, then Open.',
        detail: 'You should see the file name on the form before you submit.',
      },
      {
        instruction: 'Submit only when you are sure it is the right file.',
        detail: 'Double-check the name and size if shown.',
      },
    ],
    practicalTask:
      'Practice uploading a harmless text file to a form you are allowed to test (or a draft email attachment).',
    completionAction:
      'I selected a file using Choose file and saw its name on the form.',
  }),
  createDigitalSkillsLesson({
    id: 'basic-troubleshooting',
    stageId,
    order: 6,
    title: 'Basic internet troubleshooting',
    summary: 'When Wi‑Fi or a page fails — simple checks first.',
    whyItMatters:
      'Most small glitches fix themselves with a pause, refresh, or router check — no need to feel stuck.',
    difficulty: 'moderate',
    estimatedMinutes: 9,
    learningObjective: 'You will try three calm steps before asking for help.',
    steps: [
      {
        instruction: 'Check if other devices in the home have internet.',
        detail:
          'If nothing works, the Wi‑Fi router may need a restart — ask someone who manages it if unsure.',
      },
      {
        instruction:
          'Turn Wi‑Fi off and on on your device, or unplug and replug the router after asking.',
        detail: 'Wait two minutes after a router restart before testing again.',
      },
      {
        instruction: 'Refresh the page or close and reopen the browser.',
        detail: 'Save any work in forms before closing.',
      },
      {
        instruction: 'Write down the error message or take a photo of the screen.',
        detail: 'This helps when you call support or ask a family member.',
      },
    ],
    practicalTask:
      'Practice the three steps on a slow page (refresh, wait, try again).',
    completionAction: 'I tried refresh and Wi‑Fi check before giving up.',
  }),
]
