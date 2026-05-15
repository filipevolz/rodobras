/** Dados públicos da empresa (SEO / Schema / conteúdo). Manter alinhado à seção de contato. */
export const BUSINESS = {
  tradeName: 'Rodobras Guindastes',
  legalName: 'Rodobras Guindastes & Muncks LTDA',
  cnpj: '23.694.035/0001-73',
  telephoneDisplay: '(48) 3285-2727',
  /** E.164 do telefone fixo exibido no site */
  telephoneE164: '+5548991582727',
  /** WhatsApp (mesmo número usado em wa.me no site) */
  whatsappE164: '+5548991582727',
  emailPublic: 'contato@rodobrasguindastes.com.br',
  emailPrivacy: 'adm@rodobrasguindastes.com.br',
  streetAddress: 'Rua Paula Ramos, 702, Sala 1601, Coqueiros',
  addressLocality: 'Florianópolis',
  addressRegion: 'SC',
  postalCode: '88080-401',
  addressCountry: 'BR',
  /** Sede — Rua Paula Ramos, Coqueiros, Florianópolis (para schema geo). */
  geo: {
    latitude: -27.606194,
    longitude: -48.593622,
  },
  areaServedNames: [
    'Florianópolis',
    'São José',
    'Palhoça',
    'Biguaçu',
    'Santa Catarina',
    'Rio de Janeiro',
  ] as const,
} as const

export const SOCIAL_PROFILES = [
  {
    platform: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/rodobrasguindastes/',
    handle: '@rodobrasguindastes',
  },
] as const

export function getSocialSameAs(): string[] {
  const fromConfig = SOCIAL_PROFILES.map((p) => p.href)
  const raw = process.env.NEXT_PUBLIC_SOCIAL_PROFILES?.trim()
  if (!raw) return fromConfig
  const fromEnv = raw
    .split(/[\n,]+/)
    .map((s) => s.trim())
    .filter(Boolean)
  return [...new Set([...fromConfig, ...fromEnv])]
}
