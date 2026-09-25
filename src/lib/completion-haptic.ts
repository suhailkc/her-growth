export function fireCompletionHaptic(): void {
  if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') {
    return
  }
  navigator.vibrate(12)
}
