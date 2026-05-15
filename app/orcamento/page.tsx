import type { Metadata } from 'next'
import Link from 'next/link'
import { alternatesForPath } from '@/lib/alternates'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OrcamentoForm } from '@/components/orcamento-form'

const description =
  'Solicite orçamento de locação de guindastes, muncks, remoções e transportes especiais. Preencha o formulário e envie pelo whatsapp para a Rodobras Guindastes.'

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
    'whatsapp',
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
        <div className="mx-auto max-w-6xl px-4 py-10 pb-20 lg:px-8">
          <nav className="mb-8">
            <Link href="/" className="text-sm font-medium text-primary hover:underline">
              ← Voltar ao início
            </Link>
          </nav>
          <OrcamentoForm />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
