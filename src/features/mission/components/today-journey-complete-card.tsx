import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function TodayJourneyCompleteCard() {
  return (
    <Card variant="sage" className="overflow-hidden text-center">
      <CardHeader className="border-b border-border/60 pb-6">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Sparkles className="size-7" aria-hidden />
        </div>
        <CardTitle className="font-serif text-3xl sm:text-4xl">You did it!</CardTitle>
        <p className="text-base text-muted-foreground leading-relaxed">
          Every skill on your Digital Skills roadmap is marked done. That is real progress — celebrate
          it, and revisit any topic when you want a refresher.
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground">
          Tomorrow, pick a skill to practice again or explore something new in another module.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 border-t border-border/60 sm:flex-row sm:justify-center">
        <Link
          to="/digital-skills"
          className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
        >
          Review roadmap
        </Link>
        <Link
          to="/"
          className={buttonVariants({
            variant: 'secondary',
            size: 'lg',
            className: 'rounded-xl',
          })}
        >
          Back to dashboard
        </Link>
      </CardFooter>
    </Card>
  )
}
