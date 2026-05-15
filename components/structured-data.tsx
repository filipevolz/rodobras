import { BUSINESS, getSocialSameAs } from '@/lib/business'
import { SITE_META_DESCRIPTION } from '@/lib/seo'
import { absolutePageUrl, getPublicSiteRoot } from '@/lib/site'
import { basePath } from '@/lib/utils'

export function StructuredData() {
  const siteUrl = getPublicSiteRoot()
  const homeUrl = absolutePageUrl('/')
  const logoUrl = `${siteUrl}${basePath}/rodobras-marca.png`
  const sameAs = getSocialSameAs()
  const mapsQuery = encodeURIComponent(
    `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion}, ${BUSINESS.addressCountry}`,
  )

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: BUSINESS.tradeName,
    description: SITE_META_DESCRIPTION,
    url: homeUrl,
    image: logoUrl,
    logo: logoUrl,
    email: BUSINESS.emailPublic,
    telephone: BUSINESS.telephoneE164,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    openingHoursSpecification: BUSINESS.openingHoursSpecification.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [...hours.dayOfWeek],
      opens: hours.opens,
      closes: hours.closes,
    })),
    areaServed: [...BUSINESS.areaServedNames],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: BUSINESS.telephoneE164,
        email: BUSINESS.emailPublic,
        availableLanguage: 'pt-BR',
        areaServed: 'BR',
      },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: BUSINESS.tradeName,
    url: homeUrl,
    description: SITE_META_DESCRIPTION,
    inLanguage: 'pt-BR',
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#localbusiness`,
      name: BUSINESS.tradeName,
      url: homeUrl,
      logo: logoUrl,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  )
}
