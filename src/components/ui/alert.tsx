import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

const alertVariants = cva(
  "group/alert relative grid w-full gap-1 rounded-xl border px-4 py-3 text-left text-base has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-3 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: 'border-border/80 bg-card text-card-foreground',
        destructive:
          'border-destructive/30 bg-destructive/5 text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current',
        success:
          'border-success/25 bg-success/5 text-success-foreground *:data-[slot=alert-description]:text-[color-mix(in_oklch,var(--success-foreground),transparent_15%)] *:[svg]:text-success',
        info: 'border-[color-mix(in_oklch,var(--info),transparent_70%)] bg-surface-info text-foreground *:data-[slot=alert-description]:text-muted-foreground *:[svg]:text-info',
        warning:
          'border-warning/30 bg-warning/10 text-warning-foreground *:data-[slot=alert-description]:text-[color-mix(in_oklch,var(--warning-foreground),transparent_10%)] *:[svg]:text-[color-mix(in_oklch,var(--warning),black_15%)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'font-medium leading-snug group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-sm leading-relaxed text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-3',
        className,
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-action"
      className={cn('absolute top-3 right-3', className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction, alertVariants }
