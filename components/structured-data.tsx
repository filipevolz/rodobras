import { BUSINESS, getSocialSameAs } from '@/lib/business'
import { getPublicSiteRoot } from '@/lib/site'
import { basePath } from '@/lib/utils'

export function StructuredData() {
  const siteUrl = getPublicSiteRoot()
  const logoUrl = `${siteUrl}${basePath}/rodobras-marca.png`
  const sameAs = getSocialSameAs()

  const states = new Set(['Santa Catarina', 'Rio de Janeiro'])
  const areaServed = BUSINESS.areaServedNames.map((name) => ({
    '@type': states.has(name) ? 'State' : 'City',
    name,
  }))

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: BUSINESS.tradeName,
        legalName: BUSINESS.legalName,
        url: siteUrl,
        logo: { '@type': 'ImageObject', url: logoUrl },
        image: logoUrl,
        email: BUSINESS.emailPublic,
        telephone: BUSINESS.telephoneE164,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: BUSINESS.whatsappE164,
            availableLanguage: ['Portuguese', 'pt-BR'],
            areaServed: 'BR',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS.streetAddress,
          addressLocality: BUSINESS.addressLocality,
          addressRegion: BUSINESS.addressRegion,
          postalCode: BUSINESS.postalCode,
          addressCountry: BUSINESS.addressCountry,
        },
        areaServed,
        ...(sameAs.length ? { sameAs } : {}),
        priceRange: '$$',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: BUSINESS.tradeName,
        description:
          'Locação de guindastes, muncks, carretas rebaixadas e serviços de remoção de cargas pesadas em Santa Catarina e Rio de Janeiro.',
        inLanguage: 'pt-BR',
        publisher: { '@id': `${siteUrl}/#business` },
      },
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  )
}
