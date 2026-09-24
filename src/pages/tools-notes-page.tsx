import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { buttonVariants } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToolsStore } from '@/features/tools/tools-store'

export function ToolsNotesPage() {
  const notesBody = useToolsStore((s) => s.notesBody)
  const setNotesBody = useToolsStore((s) => s.setNotesBody)

  return (
    <PageContainer width="narrow">
      <PageHeader
        title="Notes"
        description="Write anything you want to remember. Saves automatically on this device."
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
      <Textarea
        value={notesBody}
        onChange={(event) => setNotesBody(event.target.value)}
        placeholder="Shopping list, phone numbers, ideas…"
        className="min-h-64 text-base"
        aria-label="Your notes"
      />
    </PageContainer>
  )
}
