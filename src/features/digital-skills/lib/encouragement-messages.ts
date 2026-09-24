export type EncouragementMessage = {
  en: string
  ml: string
}

export const taskCompleteEncouragements: EncouragementMessage[] = [
  {
    en: 'Nice — that’s one more skill in your pocket.',
    ml: 'നന്നായി — ഇനി ഒരു കഴിവ് കൂടി നിങ്ങളുടേതാണ്.',
  },
  {
    en: 'Well done. Take a breath — you earned that tick.',
    ml: 'ശരി ചെയ്തു. ഒരു നിമിഷം വിശ്രമിക്കൂ — ഈ ടിക്ക് നിങ്ങൾക്ക് അർഹമാണ്.',
  },
  {
    en: 'Lovely. Small steps add up.',
    ml: 'സുന്ദരം. ചെറിയ ചുവടുകൾ കൂടിക്കൂടി വലുതാകും.',
  },
  {
    en: 'You did it — at your pace, and that counts.',
    ml: 'ചെയ്തു കഴിഞ്ഞു — നിങ്ങളുടെ വേഗത്തിൽ, അത് പ്രധാനമാണ്.',
  },
  {
    en: 'That felt easy enough to tick — brilliant.',
    ml: 'ടിക്ക് ചെയ്യാൻ മതിയായ എളുപ്പം — അത്ഭുതകരം.',
  },
  {
    en: 'One more comfortable skill. Keep going when you’re ready.',
    ml: 'ഇനി ഒരു കഴിവ് കൂടി സുഖപ്രദം. തയ്യാറാകുമ്പോൾ തുടരാം.',
  },
  {
    en: 'Gentle progress — exactly how this journey works.',
    ml: 'സൗമ്യമായ പുരോഗതി — ഈ യാത്ര ഇങ്ങനെയാണ്.',
  },
  {
    en: 'Tick! You’re building real everyday confidence.',
    ml: 'ടിക്ക്! നിത്യജീവിത വിശ്വാസം കെട്ടിപ്പടുക്കുന്നു.',
  },
]

export function pickTaskCompleteEncouragement(): EncouragementMessage {
  const index = Math.floor(Math.random() * taskCompleteEncouragements.length)
  return (
    taskCompleteEncouragements[index] ??
    taskCompleteEncouragements[0] ?? {
      en: 'Nice work.',
      ml: 'നന്നായി.',
    }
  )
}
