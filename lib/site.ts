/**
 * URL pública raiz do site, como aparece no navegador (inclui subpasta no GitHub Pages, se houver).
 * Use sempre **www** e sem barra final no valor (ex.: https://www.rodobrasguindastes.com.br), alinhado ao Ads e ao redirect em `next.config.mjs`.
 */
export function getPublicSiteRoot(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  return 'https://www.rodobrasguindastes.com.br'
}

export function getMetadataBase(): URL {
  const root = getPublicSiteRoot()
  return new URL(root.endsWith('/') ? root : `${root}/`)
}

/** URL absoluta com barra final nas rotas (coerente com `trailingSlash: true` no Next). */
export function absolutePageUrl(path: string): string {
  const root = getPublicSiteRoot()
  let p = path.startsWith('/') ? path : `/${path}`
  if (p !== '/' && !p.endsWith('/')) {
    p = `${p}/`
  }
  return `${root}${p}`
}
