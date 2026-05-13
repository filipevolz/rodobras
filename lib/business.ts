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
  areaServedNames: [
    'Florianópolis',
    'São José',
    'Palhoça',
    'Biguaçu',
    'Santa Catarina',
    'Rio de Janeiro',
  ] as const,
} as const

export function getSocialSameAs(): string[] {
  const raw = process.env.NEXT_PUBLIC_SOCIAL_PROFILES?.trim()
  if (!raw) return []
  return raw
    .split(/[\n,]+/)
    .map((s) => s.trim())
    .filter(Boolean)
}
