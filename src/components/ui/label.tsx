import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

const labelVariants = cva(
  'flex items-center gap-2 font-medium leading-snug select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'text-sm',
        comfortable: 'text-base',
      },
    },
    defaultVariants: {
      size: 'comfortable',
    },
  },
)

function Label({
  className,
  size,
  ...props
}: React.ComponentProps<'label'> & VariantProps<typeof labelVariants>) {
  return (
    <label
      data-slot="label"
      className={cn(labelVariants({ size }), className)}
      {...props}
    />
  )
}

export { Label, labelVariants }
