import { cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'

import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

type FormFieldProps = {
  id: string
  label: string
  hint?: string
  error?: string
  children: ReactElement<{
    id?: string
    'aria-describedby'?: string
    'aria-invalid'?: boolean
  }>
  className?: string
}

export function FormField({
  id,
  label,
  hint,
  error,
  children,
  className,
}: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  const control =
    isValidElement(children) && describedBy
      ? cloneElement(children, {
          id,
          'aria-describedby': describedBy,
          'aria-invalid': error ? true : children.props['aria-invalid'],
        })
      : isValidElement(children)
        ? cloneElement(children, { id })
        : (children as ReactNode)

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label htmlFor={id}>{label}</Label>
      {control}
      {hint ? (
        <p id={hintId} className="text-sm leading-relaxed text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          id={errorId}
          className="text-sm leading-relaxed text-destructive"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  )
}
