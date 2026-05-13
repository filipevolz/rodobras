import { z } from 'zod'
import { BUSINESS } from '@/lib/business'

export const tipoServicoValues = ['guindastes', 'muncks', 'remocoes', 'transportes', 'outro'] as const

export type TipoServico = (typeof tipoServicoValues)[number]

export const tipoServicoLabels: Record<TipoServico, string> = {
  guindastes: 'Locação de Guindastes',
  muncks: 'Locação de Muncks',
  remocoes: 'Remoções de Cargas',
  transportes: 'Transportes Especiais',
  outro: 'Outro / não sei informar',
}

const optionalMedida = z
  .string()
  .max(80, 'Máximo de 80 caracteres.')
  .optional()
  .transform((s) => (s?.trim() ? s.trim() : undefined))

export const orcamentoFormSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, 'Informe seu nome (mínimo 2 caracteres).')
    .max(120, 'Máximo de 120 caracteres.'),
  tipoServico: z.enum(tipoServicoValues, {
    message: 'Selecione o tipo de serviço.',
  }),
  descricao: z
    .string()
    .trim()
    .min(20, 'Descreva o pedido com pelo menos 20 caracteres.')
    .max(2000, 'Máximo de 2000 caracteres.'),
  peso: optionalMedida,
  altura: optionalMedida,
  raio: optionalMedida,
  comprimento: optionalMedida,
  largura: optionalMedida,
  outrasInformacoes: z
    .string()
    .max(3000, 'Máximo de 3000 caracteres.')
    .optional()
    .transform((s) => (s?.trim() ? s.trim() : undefined)),
})

export type OrcamentoFormValues = z.infer<typeof orcamentoFormSchema>

function linha(label: string, valor: string | undefined): string {
  if (valor === undefined || valor === '') return ''
  return `${label}: ${valor}`
}

/** Texto formatado para colar no WhatsApp (UTF-8). */
export function buildOrcamentoWhatsAppMessage(data: OrcamentoFormValues): string {
  const tipo = tipoServicoLabels[data.tipoServico]
  const partes = [
    '*Orçamento — Rodobras Guindastes*',
    '',
    linha('Nome', data.nome),
    linha('Tipo de serviço', tipo),
    '',
    '*Descrição do pedido*',
    data.descricao,
    '',
    '*Medidas e carga (quando souber)*',
    linha('Peso estimado', data.peso),
    linha('Altura', data.altura),
    linha('Raio / alcance', data.raio),
    linha('Comprimento', data.comprimento),
    linha('Largura', data.largura),
    data.outrasInformacoes
      ? ['', '*Outras informações*', data.outrasInformacoes].join('\n')
      : '',
    '',
    '— Enviado pelo formulário do site',
  ]
  return partes.filter(Boolean).join('\n')
}

const waDigits = BUSINESS.whatsappE164.replace(/\D/g, '')

export function getOrcamentoWhatsAppHref(message: string): string {
  const q = encodeURIComponent(message)
  return `https://wa.me/${waDigits}?text=${q}`
}
