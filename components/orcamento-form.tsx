'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  orcamentoFormSchema,
  tipoServicoLabels,
  tipoServicoValues,
  buildOrcamentoWhatsAppMessage,
  getOrcamentoWhatsAppHref,
  type OrcamentoFormValues,
} from '@/lib/orcamento-schema'
import type { Control } from 'react-hook-form'

type MedidaFieldName =
  | 'nomeCarga'
  | 'quantidade'
  | 'peso'
  | 'largura'
  | 'comprimento'
  | 'altura'
  | 'alturaElevacao'
  | 'afastamentoGuindaste'
  | 'alturaObstaculo'
  | 'raio'
  | 'recuo'
import { LoadDiagram } from '@/components/load-diagram'
import { ValorTotalField } from '@/components/valor-total-field'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { MessageCircle } from 'lucide-react'

const defaultValues: Partial<OrcamentoFormValues> = {
  nome: '',
  nomeCarga: '',
  quantidade: '',
  valorTotal: '',
  tipoServico: undefined,
  descricao: '',
  peso: '',
  largura: '',
  comprimento: '',
  altura: '',
  alturaElevacao: '',
  afastamentoGuindaste: '',
  alturaObstaculo: '',
  raio: '',
  recuo: '',
  outrasInformacoes: '',
}

function MedidaField({
  control,
  name,
  label,
  placeholder,
  className,
}: {
  control: Control<OrcamentoFormValues>
  name: MedidaFieldName
  label: string
  placeholder?: string
  className?: string
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} value={field.value ?? ''} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export function OrcamentoForm() {
  const form = useForm<OrcamentoFormValues>({
    resolver: zodResolver(orcamentoFormSchema),
    defaultValues,
  })

  function onSubmit(data: OrcamentoFormValues) {
    const text = buildOrcamentoWhatsAppMessage(data)
    const href = getOrcamentoWhatsAppHref(text)
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  const { control } = form

  return (
    <Card className="border-border/80 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Solicitar orçamento</CardTitle>
        <CardDescription className="text-pretty leading-relaxed">
          Preencha os campos abaixo. Ao enviar, abrimos o WhatsApp com a mensagem pronta para a equipe da{' '}
          <span className="font-medium text-foreground">Rodobras</span> — é só confirmar o envio no app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={control}
              name="nome"
              render={({ field }) => (
                <FormItem className="max-w-md">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" autoComplete="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <FormField
                control={control}
                name="tipoServico"
                render={({ field }) => (
                  <FormItem className="max-w-md">
                    <FormLabel>Tipo de serviço</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full min-w-0">
                          <SelectValue placeholder="Selecione o serviço" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {tipoServicoValues.map((value) => (
                          <SelectItem key={value} value={value}>
                            {tipoServicoLabels[value]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="descricao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex.: íçamento de equipamento na obra, prazo desejado, endereço ou cidade…"
                        rows={4}
                        className="min-h-24 resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
              <div className="space-y-4 lg:col-span-7">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
                  <MedidaField
                    control={control}
                    name="nomeCarga"
                    label="Nome da carga"
                    placeholder="Ex.: transformador, máquina CNC…"
                    className="lg:col-span-6"
                  />
                  <MedidaField control={control} name="quantidade" label="Quantidade" className="lg:col-span-3" />
                  <ValorTotalField control={control} className="lg:col-span-3" />
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <MedidaField control={control} name="peso" label="Peso (kg)" />
                  <MedidaField control={control} name="largura" label="Largura (m)" />
                  <MedidaField control={control} name="comprimento" label="Comprimento (m)" />
                  <MedidaField control={control} name="altura" label="Altura (m)" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <MedidaField
                    control={control}
                    name="alturaElevacao"
                    label="E — Altura de elevação (m)"
                  />
                  <MedidaField
                    control={control}
                    name="afastamentoGuindaste"
                    label="A — Afastamento do guindaste (m)"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <MedidaField control={control} name="alturaObstaculo" label="B — Altura do obstáculo (m)" />
                  <MedidaField control={control} name="raio" label="R — Raio" />
                </div>

                <MedidaField control={control} name="recuo" label="D — Recuo (m)" className="max-w-xs" />
              </div>

              <figure className="flex items-center justify-center lg:col-span-5">
                <LoadDiagram className="max-w-md object-contain" />
              </figure>
            </div>

            <FormField
              control={control}
              name="outrasInformacoes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Outras informações</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Acesso ao local, restrições de horário, necessidade de ART, vistoria…"
                      rows={4}
                      className="min-h-24 resize-y"
                      {...field}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
              >
                <MessageCircle className="size-5" />
                Enviar pelo WhatsApp
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
