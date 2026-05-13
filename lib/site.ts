/**
 * URL pública raiz do site, como aparece no navegador (inclui subpasta no GitHub Pages, se houver).
 * Defina NEXT_PUBLIC_SITE_URL no deploy (ex.: https://www.rodobrasguindastes.com.br).
 */
export function getPublicSiteRoot(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  return 'https://rodobrasguindastes.com.br'
}

export function getMetadataBase(): URL {
  const root = getPublicSiteRoot()
  return new URL(root.endsWith('/') ? root : `${root}/`)
}

export function absolutePageUrl(path: string): string {
  const root = getPublicSiteRoot()
  const p = path.startsWith('/') ? path : `/${path}`
  return `${root}${p}`
}
