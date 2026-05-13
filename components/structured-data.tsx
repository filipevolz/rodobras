import { getPublicSiteRoot } from '@/lib/site'
import { basePath } from '@/lib/utils'

export function StructuredData() {
  const siteUrl = getPublicSiteRoot()
  const logoUrl = `${siteUrl}${basePath}/icon.svg`

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Rodobras Guindastes & Muncks LTDA',
        legalName: 'Rodobras Guindastes & Muncks LTDA',
        url: siteUrl,
        logo: { '@type': 'ImageObject', url: logoUrl },
        email: 'adm@rodobrasguindastes.com.br',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rua Paula Ramos, 702, Sala 1601, Coqueiros',
          addressLocality: 'Florianópolis',
          addressRegion: 'SC',
          postalCode: '88080-401',
          addressCountry: 'BR',
        },
        sameAs: [] as string[],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Rodobras Guindastes',
        description:
          'Locação de guindastes, muncks, carretas rebaixadas e serviços de remoção de cargas pesadas em Santa Catarina.',
        inLanguage: 'pt-BR',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  )
}
