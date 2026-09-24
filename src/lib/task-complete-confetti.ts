import confetti from 'canvas-confetti'

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Short, non-blocking burst when a checklist task is marked complete. */
export function fireTaskCompleteConfetti(): void {
  if (prefersReducedMotion()) return

  const count = 80
  const defaults = {
    origin: { y: 0.72 },
    zIndex: 40,
    disableForReducedMotion: true,
  }

  void confetti({
    ...defaults,
    particleCount: count * 0.35,
    spread: 52,
    startVelocity: 28,
    scalar: 0.9,
  })

  void confetti({
    ...defaults,
    particleCount: count * 0.2,
    spread: 72,
    startVelocity: 22,
    scalar: 0.75,
  })
}
