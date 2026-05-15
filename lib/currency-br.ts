const MAX_DIGITS = 13

/** Extrai só dígitos e limita o tamanho (centavos). */
export function parseCurrencyDigits(value: string): string {
  return value.replace(/\D/g, '').slice(0, MAX_DIGITS)
}

/** Converte string de dígitos (centavos) para número em centavos. */
export function digitsToCents(digits: string): number {
  const d = parseCurrencyDigits(digits)
  return d ? Number.parseInt(d, 10) : 0
}

/** Formata centavos no padrão brasileiro: 1.000,00 */
export function formatCentsToBRL(cents: number): string {
  return (cents / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

/** Aplica máscara monetária a partir do que o usuário digitou. */
export function formatCurrencyInput(value: string): string {
  const cents = digitsToCents(value)
  if (cents === 0) return ''
  return formatCentsToBRL(cents)
}
