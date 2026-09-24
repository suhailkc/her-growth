import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ToolsTimerPage() {
  const [minutesInput, setMinutesInput] = useState('5')
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running || secondsLeft === null) return
    if (secondsLeft <= 0) {
      setRunning(false)
      return
    }
    const id = window.setInterval(() => {
      setSecondsLeft((value) => (value === null ? value : value - 1))
    }, 1000)
    return () => window.clearInterval(id)
  }, [running, secondsLeft])

  const displayMinutes =
    secondsLeft === null ? 0 : Math.floor(Math.max(0, secondsLeft) / 60)
  const displaySeconds = secondsLeft === null ? 0 : Math.max(0, secondsLeft) % 60

  return (
    <PageContainer width="narrow">
      <PageHeader
        title="Timer"
        description="Set minutes for cooking, study breaks, or child screen time."
        action={
          <Link
            to="/tools"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            All tools
          </Link>
        }
      />

      <label className="block max-w-xs space-y-2">
        <span className="text-sm font-medium">Minutes</span>
        <Input
          value={minutesInput}
          onChange={(event) => setMinutesInput(event.target.value)}
          inputMode="numeric"
          className="min-h-11 text-base"
          disabled={running}
        />
      </label>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          type="button"
          size="lg"
          disabled={running}
          onClick={() => {
            const minutes = Number.parseInt(minutesInput, 10)
            if (!Number.isFinite(minutes) || minutes <= 0) return
            setSecondsLeft(minutes * 60)
            setRunning(true)
          }}
        >
          Start
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          onClick={() => {
            setRunning(false)
            setSecondsLeft(null)
          }}
        >
          Reset
        </Button>
      </div>

      {secondsLeft !== null ? (
        <p
          className="mt-8 font-serif text-4xl font-semibold tabular-nums"
          role="timer"
          aria-live="polite"
        >
          {String(displayMinutes).padStart(2, '0')}:
          {String(displaySeconds).padStart(2, '0')}
        </p>
      ) : null}

      {secondsLeft === 0 ? (
        <p className="mt-4 text-lg font-medium text-primary" role="status">
          Time is up.
        </p>
      ) : null}
    </PageContainer>
  )
}
