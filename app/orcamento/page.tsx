import type { Metadata } from 'next'
import Link from 'next/link'
import { alternatesForPath } from '@/lib/alternates'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OrcamentoForm } from '@/components/orcamento-form'

const description =
  'Solicite orçamento de locação de guindastes, muncks, remoções e transportes especiais. Preencha o formulário e envie pelo WhatsApp para a Rodobras Guindastes.'

export const metadata: Metadata = {
  title: 'Solicitar orçamento',
  description,
  keywords: [
    'orçamento',
    'guindastes',
    'muncks',
    'locação',
    'Florianópolis',
    'Santa Catarina',
    'WhatsApp',
  ],
  alternates: alternatesForPath('/orcamento'),
  openGraph: {
    title: 'Solicitar orçamento | Rodobras Guindastes',
    description,
    url: '/orcamento/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solicitar orçamento | Rodobras Guindastes',
    description,
  },
}

export default function OrcamentoPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-10 pb-20 lg:px-8">
          <nav className="mb-8">
            <Link href="/" className="text-sm font-medium text-primary hover:underline">
              ← Voltar ao início
            </Link>
          </nav>
          <header className="mb-8">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Orçamento pelo <span className="text-accent">WhatsApp</span>
            </h1>
            <p className="mt-3 mb-3 text-pretty text-muted-foreground leading-relaxed">
              Preencha o que souber: as medidas ajudam no dimensionamento do equipamento. Ao enviar, o WhatsApp abre com
              a mensagem montada — confirme o envio no aplicativo.
            </p>
          </header>
          <OrcamentoForm />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
