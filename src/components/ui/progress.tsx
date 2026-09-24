import { Progress as ProgressPrimitive } from '@base-ui/react/progress'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

const progressTrackVariants = cva(
  'relative flex w-full items-center overflow-x-hidden rounded-full bg-muted',
  {
    variants: {
      size: {
        sm: 'h-1',
        default: 'h-2',
        lg: 'h-2.5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

const progressIndicatorVariants = cva(
  'h-full transition-[width] duration-300 ease-out',
  {
    variants: {
      tone: {
        default: 'bg-primary',
        success: 'bg-success',
        learning: 'bg-learning',
        family: 'bg-family',
        info: 'bg-info',
      },
    },
    defaultVariants: {
      tone: 'success',
    },
  },
)

type ProgressProps = ProgressPrimitive.Root.Props &
  VariantProps<typeof progressTrackVariants> &
  VariantProps<typeof progressIndicatorVariants>

function Progress({ className, children, value, size, tone, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      className={cn('flex flex-wrap gap-3', className)}
      {...props}
    >
      {children}
      <ProgressTrack size={size}>
        <ProgressIndicator tone={tone} />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  )
}

function ProgressTrack({
  className,
  size,
  ...props
}: ProgressPrimitive.Track.Props & VariantProps<typeof progressTrackVariants>) {
  return (
    <ProgressPrimitive.Track
      className={cn(progressTrackVariants({ size }), className)}
      data-slot="progress-track"
      {...props}
    />
  )
}

function ProgressIndicator({
  className,
  tone,
  ...props
}: ProgressPrimitive.Indicator.Props & VariantProps<typeof progressIndicatorVariants>) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(progressIndicatorVariants({ tone }), className)}
      {...props}
    />
  )
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      className={cn('text-base font-medium', className)}
      data-slot="progress-label"
      {...props}
    />
  )
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      className={cn('ml-auto text-sm text-muted-foreground tabular-nums', className)}
      data-slot="progress-value"
      {...props}
    />
  )
}

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
  progressIndicatorVariants,
  progressTrackVariants,
}
