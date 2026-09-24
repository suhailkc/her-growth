import { useEffect } from 'react'

import { appBrand } from '@/config/app'

export function DocumentTitle() {
  useEffect(() => {
    document.title = appBrand.documentTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', appBrand.metaDescription)
    }
  }, [])

  return null
}
