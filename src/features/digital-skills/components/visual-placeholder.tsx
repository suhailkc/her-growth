import { ImageIcon } from 'lucide-react'

type VisualPlaceholderProps = {
  label: string
  title?: string
}

export function VisualPlaceholder({ label, title }: VisualPlaceholderProps) {
  return (
    <figure className="overflow-hidden rounded-xl border border-dashed border-border bg-muted/25">
      <div
        className="flex aspect-video w-full flex-col items-center justify-center gap-3 px-6 text-center"
        role="img"
        aria-label={label}
      >
        <div className="flex size-12 items-center justify-center rounded-xl bg-background/80 text-muted-foreground">
          <ImageIcon className="size-6" aria-hidden />
        </div>
        {title ? (
          <p className="font-serif text-base text-foreground">{title}</p>
        ) : null}
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">Picture guide — coming in a future update</p>
      </div>
    </figure>
  )
}
