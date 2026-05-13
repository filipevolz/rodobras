import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { DeferredScripts } from '@/components/deferred-scripts'
import { DeferredAnalytics } from '@/components/deferred-analytics'
import { StructuredData } from '@/components/structured-data'
import { getMetadataBase } from '@/lib/site'
import { basePath } from '@/lib/utils'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const defaultTitle = 'Rodobras Guindastes | Locação de Guindastes e Muncks'
const defaultDescription =
  'Locação de guindastes, muncks, carretas rebaixadas e serviços de remoção de cargas pesadas. Atendemos Florianópolis (Coqueiros, Via Expressa, Norte da Ilha), São José, Palhoça e Biguaçu. Soluções integradas para qualquer porte de projeto desde 1999.'

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: defaultTitle,
    template: '%s | Rodobras Guindastes',
  },
  icons: {
    icon: [{ url: `${basePath}/rodobras-marca.png`, sizes: '312x312', type: 'image/png' }],
    apple: `${basePath}/rodobras-marca.png`,
  },
  description: defaultDescription,
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
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Rodobras Guindastes',
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
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
        <StructuredData />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <DeferredScripts />
          <DeferredAnalytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
