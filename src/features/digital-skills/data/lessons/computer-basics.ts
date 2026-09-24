import { createDigitalSkillsLesson } from '@/features/digital-skills/data/lesson-factory'

const trackId = 'computer-basics'

export const computerBasicsLessons = [
  createDigitalSkillsLesson({
    id: 'turn-on-off',
    trackId,
    order: 1,
    title: 'Turn the computer on and off safely',
    summary: 'Find the power button and shut down without losing your work.',
    whyItMatters:
      'Knowing how to start and stop your computer calmly saves time and prevents lost files.',
    difficulty: 'gentle',
    estimatedMinutes: 5,
    learningObjective:
      'You will turn the computer on, sign in if needed, and shut down using the proper menu.',
    steps: [
      {
        instruction: 'Find the power button on your computer or laptop.',
        detail:
          'On a laptop, it is usually on the keyboard row or on the side. On a desktop, look at the front of the tower or the monitor.',
        visualLabel: 'Power button on a laptop keyboard',
      },
      {
        instruction: 'Press the power button once and wait.',
        detail:
          'The screen may stay black for a few seconds. This is normal. Do not press the button again and again.',
        tip: 'If nothing happens after one minute, check that the power cable is plugged in.',
      },
      {
        instruction: 'Sign in when you see your name or picture.',
        detail:
          'Click your account, type your password if asked, and press Enter. If you share the computer, always choose your own account.',
      },
      {
        instruction: 'When you finish, use Shut down — do not pull the plug.',
        detail:
          'Open the Start menu (Windows icon), choose Power, then Shut down. Wait until the screen turns off before closing the laptop lid.',
      },
    ],
    practicalTask: 'Turn the computer on, wait until the desktop appears, then shut down properly once.',
    completionAction: 'I turned the computer on and off using Shut down.',
  }),
  createDigitalSkillsLesson({
    id: 'mouse',
    trackId,
    order: 2,
    title: 'Use the mouse with confidence',
    summary: 'Move, click, and scroll without rushing.',
    whyItMatters:
      'The mouse is how you point at things on the screen. Small, steady movements feel easier than big fast ones.',
    difficulty: 'gentle',
    estimatedMinutes: 6,
    learningObjective: 'You will move the pointer, click once, and scroll a page.',
    steps: [
      {
        instruction: 'Rest your hand lightly on the mouse.',
        detail: 'Keep your wrist relaxed. Move the mouse slowly on the desk and watch the arrow on the screen.',
      },
      {
        instruction: 'Practice a single click on an empty part of the desktop.',
        detail:
          'Press the left button once and release. You do not need to press hard. Double-clicking comes later — for now, one click is enough.',
      },
      {
        instruction: 'Open the Start menu with one click.',
        detail: 'Move the pointer to the Windows icon at the bottom of the screen and click once.',
      },
      {
        instruction: 'Try the scroll wheel or touchpad scroll.',
        detail:
          'Open any window with text, then roll the wheel or slide two fingers on the touchpad to move up and down.',
      },
    ],
    practicalTask: 'Open the Start menu, then close it by clicking outside the menu.',
    completionAction: 'I moved the mouse, clicked once, and scrolled a little.',
  }),
  createDigitalSkillsLesson({
    id: 'keyboard',
    trackId,
    order: 3,
    title: 'Keyboard essentials',
    summary: 'Letters, numbers, Enter, Backspace, and Space.',
    whyItMatters:
      'You use the keyboard whenever you search, write email, or fill forms. A few keys do most of the work.',
    difficulty: 'gentle',
    estimatedMinutes: 8,
    learningObjective: 'You will type a short sentence and fix a mistake with Backspace.',
    steps: [
      {
        instruction: 'Open Notepad or any place you can type.',
        detail:
          'Click the Start menu, type "Notepad", and press Enter. A blank page will open for practice.',
      },
      {
        instruction: 'Type your first name using both hands if comfortable.',
        detail: 'Look at the screen, not your fingers. Go slowly — speed comes with practice.',
      },
      {
        instruction: 'Press Space, then type one word you use every day.',
        detail: 'Examples: home, school, family. Press Enter when you finish the line.',
      },
      {
        instruction: 'Use Backspace to remove one wrong letter.',
        detail: 'Click where you want to fix, press Backspace once for each letter to remove, then type the correct letter.',
      },
    ],
    practicalTask: 'Type one line: your name, a space, and the word "learning".',
    completionAction: 'I typed a line and used Backspace to fix a letter.',
  }),
  createDigitalSkillsLesson({
    id: 'typing',
    trackId,
    order: 4,
    title: 'Comfortable typing practice',
    summary: 'Short practice without pressure to be fast.',
    whyItMatters:
      'Regular short practice builds muscle memory. You do not need perfect spelling on the first try.',
    difficulty: 'gentle',
    estimatedMinutes: 10,
    learningObjective: 'You will type three short lines with pauses to rest your hands.',
    steps: [
      {
        instruction: 'Sit with your back supported and screen at eye level.',
        detail: 'Feet flat on the floor if you can. Relax your shoulders.',
      },
      {
        instruction: 'Type: "I am learning at my own pace."',
        detail: 'Say each word in your mind as you type. Use Shift for the capital I.',
      },
      {
        instruction: 'Take a 10-second break. Shake your hands gently.',
        detail: 'Breaks prevent tired wrists. There is no timer — pause whenever you need.',
      },
      {
        instruction: 'Type two more lines about something you did today.',
        detail: 'Simple words are best. Press Enter at the end of each line.',
      },
    ],
    practicalTask: 'Write three lines in Notepad about your day.',
    completionAction: 'I typed three short lines and took a break in the middle.',
  }),
  createDigitalSkillsLesson({
    id: 'desktop',
    trackId,
    order: 5,
    title: 'Understand the desktop',
    summary: 'Icons, wallpaper, and the taskbar at the bottom.',
    whyItMatters:
      'The desktop is your home screen on a computer. Knowing what you see helps you open apps without feeling lost.',
    difficulty: 'gentle',
    estimatedMinutes: 7,
    learningObjective: 'You will name parts of the desktop and open one app from an icon.',
    steps: [
      {
        instruction: 'Look at the background picture — this is your wallpaper.',
        detail: 'It is decoration only. Icons sit on top of it.',
      },
      {
        instruction: 'Find small pictures called icons.',
        detail: 'Each icon opens a program or folder. Hover the mouse over one to see its name.',
      },
      {
        instruction: 'Find the taskbar — the strip at the bottom.',
        detail: 'It shows open apps and the clock. The Windows icon is usually on the left.',
      },
      {
        instruction: 'Double-click one desktop icon to open it.',
        detail: 'If nothing opens, try a single click and press Enter, or ask which icons are safe to use on your computer.',
      },
    ],
    practicalTask: 'Point to the taskbar, the clock, and one icon, then open that app once.',
    completionAction: 'I can find the taskbar and opened one app from the desktop.',
  }),
  createDigitalSkillsLesson({
    id: 'windows-basics',
    trackId,
    order: 6,
    title: 'Windows basics — windows and menus',
    summary: 'Resize, minimize, and close app windows.',
    whyItMatters:
      'Programs open in "windows" on the screen. Learning to close and switch between them keeps your workspace calm.',
    difficulty: 'moderate',
    estimatedMinutes: 10,
    learningObjective: 'You will open two apps, switch between them, and close one window.',
    steps: [
      {
        instruction: 'Open two simple apps (for example, Notepad and Calculator).',
        detail: 'Use the Start menu to search for each one.',
      },
      {
        instruction: 'Practice the minimize button (a dash line).',
        detail: 'The window hides to the taskbar but keeps running. Click its icon on the taskbar to bring it back.',
      },
      {
        instruction: 'Use the X to close a window you no longer need.',
        detail: 'Closing is different from minimizing. If asked to save, choose Save if you wrote something important.',
      },
      {
        instruction: 'Switch apps with Alt + Tab (optional).',
        detail: 'Hold Alt, tap Tab once, release Alt. This jumps between open windows quickly.',
      },
    ],
    practicalTask: 'Open Notepad and Calculator, switch between them, then close Calculator.',
    completionAction: 'I minimized a window and closed one app I did not need.',
  }),
  createDigitalSkillsLesson({
    id: 'files-folders',
    trackId,
    order: 7,
    title: 'Files and folders',
    summary: 'Create a folder and save a file inside it.',
    whyItMatters:
      'Folders keep documents and photos easy to find later — like drawers in a cupboard.',
    difficulty: 'moderate',
    estimatedMinutes: 12,
    learningObjective: 'You will create a folder on the desktop and save a Notepad file into it.',
    steps: [
      {
        instruction: 'Open File Explorer (folder icon on the taskbar).',
        detail: 'The left side shows places like Desktop and Documents.',
      },
      {
        instruction: 'Click Desktop, then New folder.',
        detail: 'Right-click empty space, choose New → Folder, or use the New folder button at the top.',
      },
      {
        instruction: 'Name the folder something you will remember.',
        detail: 'Example: "My practice files". Press Enter to save the name.',
      },
      {
        instruction: 'Save a Notepad file into that folder.',
        detail: 'In Notepad: File → Save As → pick Desktop → open your new folder → type a file name → Save.',
      },
    ],
    practicalTask: 'Create a folder called "Her Growth practice" and save one text file inside.',
    completionAction: 'I created a folder and saved a file in it.',
  }),
]
