import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Rodobras Guindastes | Locação de Guindastes e Muncks',
  icons: {
    icon: '/favicon.ico',
  },
  description:
    'Locação de guindastes, muncks, carretas rebaixadas e serviços de remoção de cargas pesadas. Soluções integradas para qualquer porte de projeto desde 1999.',
  keywords: [
    'guindastes',
    'muncks',
    'locação',
    'íçamento',
    'transporte especial',
    'remoção de cargas',
    'Santa Catarina',
    'Rio de Janeiro',
  ],
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
