import { BUSINESS, getSocialSameAs } from '@/lib/business'
import { SITE_META_DESCRIPTION } from '@/lib/seo'
import { absolutePageUrl, getPublicSiteRoot } from '@/lib/site'
import { basePath } from '@/lib/utils'

export function StructuredData() {
  const siteUrl = getPublicSiteRoot()
  const homeUrl = absolutePageUrl('/')
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
        description: SITE_META_DESCRIPTION,
        url: siteUrl,
        logo: { '@type': 'ImageObject', url: logoUrl },
        image: [{ '@type': 'ImageObject', url: logoUrl }],
        email: BUSINESS.emailPublic,
        telephone: BUSINESS.telephoneE164,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: BUSINESS.geo.latitude,
          longitude: BUSINESS.geo.longitude,
        },
        identifier: {
          '@type': 'PropertyValue',
          propertyID: 'https://www.gov.br/receitafederal/pt-br',
          name: 'CNPJ',
          value: BUSINESS.cnpj,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: BUSINESS.telephoneE164,
          email: BUSINESS.emailPublic,
          availableLanguage: 'pt-BR',
          areaServed: {
            '@type': 'Country',
            name: 'BR',
          },
        },
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
        description: SITE_META_DESCRIPTION,
        inLanguage: 'pt-BR',
        publisher: { '@id': `${siteUrl}/#business` },
      },
      {
        '@type': 'WebPage',
        '@id': `${homeUrl}#webpage`,
        url: homeUrl,
        name: BUSINESS.tradeName,
        description: SITE_META_DESCRIPTION,
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#business` },
        primaryImageOfPage: { '@type': 'ImageObject', url: logoUrl },
      },
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  )
}
