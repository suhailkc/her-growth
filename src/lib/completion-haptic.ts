export function fireCompletionHaptic(enabled: boolean): void {
  if (!enabled) return
  if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') {
    return
  }
  navigator.vibrate(12)
}
