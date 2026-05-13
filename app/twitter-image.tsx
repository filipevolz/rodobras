import { createShareImageResponse, ogImageAlt, ogImageSize } from '@/lib/og-image'

export const alt = ogImageAlt
export const size = ogImageSize
export const contentType = 'image/png'
export const runtime = 'nodejs'

export default async function TwitterImage() {
  return createShareImageResponse()
}
