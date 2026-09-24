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

/** Bigger burst when an entire stage checklist is finished. */
export function fireStageCompleteConfetti(): void {
  if (prefersReducedMotion()) return

  const duration = 1200
  const end = Date.now() + duration
  const defaults = {
    startVelocity: 32,
    spread: 360,
    ticks: 48,
    zIndex: 40,
    disableForReducedMotion: true,
  }

  const frame = (): void => {
    void confetti({
      ...defaults,
      particleCount: 2,
      origin: { x: Math.random(), y: Math.random() * 0.35 + 0.1 },
    })
    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  }

  frame()
  void confetti({
    particleCount: 120,
    spread: 86,
    origin: { y: 0.55 },
    zIndex: 40,
    disableForReducedMotion: true,
  })
}
