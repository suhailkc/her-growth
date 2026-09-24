import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'
import { shareWithKuttimon } from '@/config/share'
import { getStageIcon } from '@/features/digital-skills/data/stage-meta'
import { useProfileStore } from '@/features/profile/profile-store'
import { buildWhatsAppShareUrl } from '@/lib/whatsapp-share-url'
import { cn } from '@/lib/utils'

type StageCompleteCelebrationProps = {
  stage: { stageId: string; title: string } | null
  onDismiss: () => void
}

export function StageCompleteCelebration({
  stage,
  onDismiss,
}: StageCompleteCelebrationProps) {
  const displayName = useProfileStore((s) => s.profile.displayName)

  if (!stage) {
    return null
  }

  const icon = getStageIcon(stage.stageId)
  const shareMessage = `Hi ${shareWithKuttimon.recipientNickname}! It's ${displayName}. I finished "${stage.title}" ${icon} on my Digital Skills journey. 🎉`
  const whatsAppShareUrl = buildWhatsAppShareUrl(
    shareMessage,
    shareWithKuttimon.whatsAppPhoneE164,
  )

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/25 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="stage-complete-title"
    >
      <div
        className={cn(
          'enter-fade-up w-full max-w-md rounded-2xl border border-border/80 bg-card p-6 shadow-[var(--shadow-soft)]',
        )}
      >
        <p className="text-sm font-medium text-primary">Stage complete</p>
        <h2
          id="stage-complete-title"
          className="mt-1 font-serif text-2xl font-semibold leading-snug"
        >
          {icon} You finished {stage.title}
        </h2>
        <p className="mt-2 text-sm text-pretty text-muted-foreground">
          Every skill in this stage is ticked. Rest if you like — the next stage
          will be here when you&apos;re ready.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <a
            href={whatsAppShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: 'family',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            <MessageCircle aria-hidden />
            Tell {shareWithKuttimon.recipientNickname} on WhatsApp
          </a>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className={buttonVariants({
                size: 'lg',
                className: 'rounded-xl sm:flex-1',
              })}
              onClick={onDismiss}
            >
              Lovely, thanks
            </button>
            <Link
              to="/"
              className={buttonVariants({
                variant: 'secondary',
                size: 'lg',
                className: 'rounded-xl sm:flex-1',
              })}
              onClick={onDismiss}
            >
              Back to roadmap
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
