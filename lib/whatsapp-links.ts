import { BUSINESS } from '@/lib/business'

const waDigits = BUSINESS.whatsappE164.replace(/\D/g, '')

/** Texto nos CTAs “Solicite um orçamento” da página inicial (não usar em /orcamento). */
export const SITE_HOME_WHATSAPP_PREFILL =
  'Oi! Vim do site da Rodobras e quero fazer um orçamento.'

export function getWhatsAppMeHref(text?: string): string {
  const trimmed = text?.trim()
  if (!trimmed) return `https://wa.me/${waDigits}`
  return `https://wa.me/${waDigits}?text=${encodeURIComponent(trimmed)}`
}

/** Em `/orcamento` o WhatsApp abre sem texto (a mensagem vem do formulário). */
export function isOrcamentoWhatsappPlainPath(pathname: string | null): boolean {
  if (!pathname) return false
  const p = pathname.replace(/\/$/, '') || '/'
  return p === '/orcamento'
}

/** CTAs do site: mensagem padrão, exceto na página de orçamento. */
export function getWhatsAppCtaHref(pathname: string | null): string {
  if (isOrcamentoWhatsappPlainPath(pathname)) return getWhatsAppMeHref()
  return getWhatsAppMeHref(SITE_HOME_WHATSAPP_PREFILL)
}
