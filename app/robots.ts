import type { MetadataRoute } from 'next'
import { getPublicSiteRoot } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  const base = getPublicSiteRoot()
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  }
}
