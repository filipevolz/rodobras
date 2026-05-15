import type { Metadata } from 'next'
import { absolutePageUrl } from '@/lib/site'

/** Canonical + hreflang para site monolíngue (pt-BR). */
export function alternatesForPath(path: string): NonNullable<Metadata['alternates']> {
  const canonical = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`
  const absolute = absolutePageUrl(canonical)
  return {
    canonical,
    languages: {
      'pt-BR': absolute,
      'x-default': absolute,
    },
  }
}
