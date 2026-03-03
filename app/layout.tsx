import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { DeferredScripts } from '@/components/deferred-scripts'
import { DeferredAnalytics } from '@/components/deferred-analytics'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rodobras Guindastes | Locação de Guindastes e Muncks',
  icons: {
    icon: '/favicon.ico',
  },
  description:
    'Locação de guindastes, muncks, carretas rebaixadas e serviços de remoção de cargas pesadas. Atendemos Florianópolis (Coqueiros, Via Expressa, Norte da Ilha), São José, Palhoça e Biguaçu. Soluções integradas para qualquer porte de projeto desde 1999.',
  keywords: [
    'guindastes',
    'muncks',
    'locação',
    'íçamento',
    'transporte especial',
    'remoção de cargas',
    'Santa Catarina',
    'Rio de Janeiro',
    'Coqueiros',
    'Florianópolis',
    'Via Expressa',
    'Norte da Ilha',
    'São José',
    'Palhoça',
    'Biguaçu',
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
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <DeferredScripts />
          <DeferredAnalytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
