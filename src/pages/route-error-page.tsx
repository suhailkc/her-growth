import { useRouteError } from 'react-router-dom'

import { ErrorState } from '@/components/common/error-state'
import { PageContainer } from '@/components/common/page-container'

export function RouteErrorPage() {
  const error = useRouteError()
  const message =
    error instanceof Error ? error.message : 'We could not open this page right now.'

  return (
    <PageContainer width="narrow">
      <ErrorState description={message} />
    </PageContainer>
  )
}
