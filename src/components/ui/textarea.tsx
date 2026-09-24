import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

import { formControlSizeVariants } from '@/lib/form-control-styles'

type TextareaProps = React.ComponentProps<'textarea'> &
  VariantProps<typeof formControlSizeVariants>

function Textarea({ className, fieldSize = 'default', ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'field-sizing-content flex w-full rounded-xl border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
        fieldSize === 'default' && 'min-h-16 md:text-sm',
        fieldSize === 'comfortable' && 'min-h-24',
        formControlSizeVariants({ fieldSize }),
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
