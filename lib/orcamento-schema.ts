import { z } from 'zod'
import { BUSINESS } from '@/lib/business'

export const tipoServicoValues = ['guindastes', 'muncks', 'remocoes', 'transportes', 'outro'] as const

export type TipoServico = (typeof tipoServicoValues)[number]

export const tipoServicoLabels: Record<TipoServico, string> = {
  guindastes: 'Locação de guindastes',
  muncks: 'Locação de muncks',
  remocoes: 'Remoções de cargas',
  transportes: 'Transportes especiais',
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
  nomeCarga: optionalMedida,
  quantidade: optionalMedida,
  valorTotal: optionalMedida,
  tipoServico: z.enum(tipoServicoValues, {
    message: 'Selecione o tipo de serviço.',
  }),
  descricao: z
    .string()
    .trim()
    .min(20, 'Descreva o pedido com pelo menos 20 caracteres.')
    .max(2000, 'Máximo de 2000 caracteres.'),
  peso: optionalMedida,
  largura: optionalMedida,
  comprimento: optionalMedida,
  altura: optionalMedida,
  alturaElevacao: optionalMedida,
  afastamentoGuindaste: optionalMedida,
  alturaObstaculo: optionalMedida,
  raio: optionalMedida,
  recuo: optionalMedida,
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
  const medidas = [
    linha('Nome da carga', data.nomeCarga),
    linha('Quantidade', data.quantidade),
    data.valorTotal ? linha('Valor total (R$)', `R$ ${data.valorTotal}`) : '',
    linha('Peso (kg)', data.peso),
    linha('Largura (m)', data.largura),
    linha('Comprimento (m)', data.comprimento),
    linha('Altura (m)', data.altura),
    linha('E — Altura de elevação (m)', data.alturaElevacao),
    linha('A — Afastamento do guindaste (m)', data.afastamentoGuindaste),
    linha('B — Altura do obstáculo (m)', data.alturaObstaculo),
    linha('R — Raio', data.raio),
    linha('D — Recuo (m)', data.recuo),
  ].filter(Boolean)

  const partes = [
    '*Orçamento — Rodobras Guindastes*',
    '',
    linha('Nome', data.nome),
    linha('Tipo de serviço', tipo),
    '',
    '*Descrição do pedido*',
    data.descricao,
    '',
    medidas.length ? ['*Medidas e carga*', ...medidas].join('\n') : '',
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
