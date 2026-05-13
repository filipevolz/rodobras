import type { MetadataRoute } from 'next'
import { absolutePageUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: absolutePageUrl('/'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: absolutePageUrl('/politica-de-privacidade'),
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
