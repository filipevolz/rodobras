'use client'

import type { Control } from 'react-hook-form'
import { formatCurrencyInput } from '@/lib/currency-br'
import type { OrcamentoFormValues } from '@/lib/orcamento-schema'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type ValorTotalFieldProps = {
  control: Control<OrcamentoFormValues>
  className?: string
}

export function ValorTotalField({ control, className }: ValorTotalFieldProps) {
  return (
    <FormField
      control={control}
      name="valorTotal"
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>Valor total (R$)</FormLabel>
          <FormControl>
            <Input
              type="text"
              inputMode="numeric"
              autoComplete="off"
              placeholder="0,00"
              value={field.value ?? ''}
              onChange={(e) => field.onChange(formatCurrencyInput(e.target.value))}
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
