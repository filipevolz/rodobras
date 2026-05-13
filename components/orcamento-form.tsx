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
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
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
  tipoServico: undefined,
  descricao: '',
  peso: '',
  altura: '',
  raio: '',
  comprimento: '',
  largura: '',
  outrasInformacoes: '',
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
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-10"
          >
            <div className="flex min-h-0 flex-col gap-6">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" autoComplete="name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tipoServico"
                render={({ field }) => (
                  <FormItem>
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
                control={form.control}
                name="descricao"
                render={({ field }) => (
                  <FormItem className="flex flex-1 flex-col">
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex.: íçamento de equipamento na obra, prazo desejado, endereço ou cidade…"
                        rows={8}
                        className="min-h-36 flex-1 resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="peso"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Peso estimado</FormLabel>
                    <FormControl>
                      <Input placeholder="ex.: 8 t, 12 toneladas" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="altura"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Altura</FormLabel>
                    <FormControl>
                      <Input placeholder="ex.: 15 m, 3º andar" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="raio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Raio / alcance</FormLabel>
                    <FormControl>
                      <Input placeholder="ex.: 25 m de alcance" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comprimento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comprimento</FormLabel>
                    <FormControl>
                      <Input placeholder="ex.: carga 6 m" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="largura"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Largura</FormLabel>
                    <FormControl>
                      <Input placeholder="ex.: 2,4 m" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="outrasInformacoes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Outras informações</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Acesso ao local, restrições de horário, necessidade de ART, vistoria…"
                        rows={6}
                        className="min-h-32 resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-full flex flex-col gap-3 border-t border-border pt-6">
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
