import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Operation = 'add' | 'subtract' | 'multiply' | 'divide'

function compute(a: number, b: number, op: Operation): number | null {
  if (op === 'divide' && b === 0) return null
  switch (op) {
    case 'add':
      return a + b
    case 'subtract':
      return a - b
    case 'multiply':
      return a * b
    case 'divide':
      return a / b
  }
}

export function ToolsCalculatorPage() {
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [operation, setOperation] = useState<Operation>('add')

  const result = useMemo(() => {
    const a = Number.parseFloat(first)
    const b = Number.parseFloat(second)
    if (!Number.isFinite(a) || !Number.isFinite(b)) return null
    return compute(a, b, operation)
  }, [first, second, operation])

  return (
    <PageContainer width="narrow">
      <PageHeader
        title="Calculator"
        description="Enter two numbers, choose an operation, and see the answer instantly."
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

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-medium">First number</span>
          <Input
            value={first}
            onChange={(event) => setFirst(event.target.value)}
            inputMode="decimal"
            className="min-h-11 text-base"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium">Second number</span>
          <Input
            value={second}
            onChange={(event) => setSecond(event.target.value)}
            inputMode="decimal"
            className="min-h-11 text-base"
          />
        </label>
      </div>

      <label className="mt-4 block max-w-xs space-y-2">
        <span className="text-sm font-medium">Operation</span>
        <Select
          value={operation}
          onValueChange={(value) => setOperation(value as Operation)}
        >
          <SelectTrigger size="comfortable">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="add">Add (+)</SelectItem>
            <SelectItem value="subtract">Subtract (−)</SelectItem>
            <SelectItem value="multiply">Multiply (×)</SelectItem>
            <SelectItem value="divide">Divide (÷)</SelectItem>
          </SelectContent>
        </Select>
      </label>

      {result !== null ? (
        <p
          className="mt-6 rounded-xl border border-border/80 bg-muted/40 px-4 py-3 text-lg"
          role="status"
        >
          Answer: <span className="font-semibold">{result}</span>
        </p>
      ) : first && second ? (
        <p className="mt-6 text-sm text-destructive" role="status">
          Enter valid numbers. You cannot divide by zero.
        </p>
      ) : null}
    </PageContainer>
  )
}
