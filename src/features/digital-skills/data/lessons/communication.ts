import { createDigitalSkillsLesson } from '@/features/digital-skills/data/lesson-factory'

const stageId = 'email-communication'

export const communicationLessons = [
  createDigitalSkillsLesson({
    id: 'whatsapp-web',
    stageId,
    order: 5,
    title: 'WhatsApp Web on your computer',
    summary: 'Link your phone and chat from the big screen.',
    whyItMatters:
      'Typing on a keyboard is easier for long messages and sharing files while you study or work at home.',
    difficulty: 'moderate',
    estimatedMinutes: 10,
    learningObjective:
      'You will open web.whatsapp.com and scan the QR code with your phone.',
    steps: [
      {
        instruction: 'On your computer, go to web.whatsapp.com.',
        detail: 'Use Chrome or Edge for best results.',
      },
      {
        instruction:
          'On your phone, open WhatsApp → Settings or menu → Linked devices.',
        detail: 'Tap Link a device.',
      },
      {
        instruction: 'Scan the QR code on the computer screen.',
        detail: 'Hold the phone steady until chats appear on the computer.',
      },
      {
        instruction: 'Sign out from WhatsApp Web on shared computers when done.',
        detail: 'Menu → Log out on the web version.',
      },
    ],
    practicalTask:
      'Link WhatsApp Web once and send yourself a test message from the computer.',
    completionAction: 'I linked WhatsApp Web and sent one message.',
  }),
  createDigitalSkillsLesson({
    id: 'video-calls',
    stageId,
    order: 6,
    title: 'Join a video call calmly',
    summary: 'Camera, microphone, and joining a Meet or Zoom link.',
    whyItMatters:
      'Video calls connect you to class, family abroad, and doctors — knowing the buttons reduces stress.',
    difficulty: 'moderate',
    estimatedMinutes: 12,
    learningObjective:
      'You will join a test call or preview your camera and mute/unmute.',
    steps: [
      {
        instruction: 'Click the meeting link from email or WhatsApp.',
        detail:
          'Allow camera and microphone when the browser asks — you can turn them off inside the call.',
      },
      {
        instruction: 'Find Mute and Stop video before joining if you prefer.',
        detail: 'You can enable them after you are comfortable.',
      },
      {
        instruction: 'Use headphones if the room is noisy.',
        detail: 'This helps others hear you clearly.',
      },
      {
        instruction: 'Leave the call with the red Leave or End button.',
        detail: 'Closing the browser tab also ends your connection.',
      },
    ],
    practicalTask:
      'Join a practice meeting (Google Meet has a "Check your audio and video" flow) or a family call.',
    completionAction: 'I joined a call and used mute or camera controls.',
  }),
  createDigitalSkillsLesson({
    id: 'sharing-files',
    stageId,
    order: 7,
    title: 'Share files in chats and email',
    summary: 'Photos, PDFs, and links — the right size and place.',
    whyItMatters:
      'Sharing homework photos and documents is daily life — doing it safely avoids leaks and confusion.',
    difficulty: 'moderate',
    estimatedMinutes: 9,
    learningObjective:
      'You will share one file in WhatsApp and know when email is better.',
    steps: [
      {
        instruction: 'In WhatsApp, open a chat and click the paperclip or +.',
        detail: 'Choose Document or Gallery depending on what you send.',
      },
      {
        instruction: 'Pick one file and confirm send.',
        detail: 'Wait for the check marks to show it uploaded.',
      },
      {
        instruction: 'Use email for formal files or when the teacher asks for email.',
        detail: 'Email keeps a clearer record for school submissions.',
      },
      {
        instruction: 'Avoid sharing passwords or OTP screenshots in any chat.',
        detail: 'Those stay private — never in group messages.',
      },
    ],
    practicalTask: 'Share one harmless photo or PDF with a trusted contact.',
    completionAction: 'I shared a file in chat and know when to use email instead.',
  }),
]
