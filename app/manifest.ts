import type { MetadataRoute } from 'next'
import { basePath } from '@/lib/utils'

export default function manifest(): MetadataRoute.Manifest {
  const start = basePath ? `${basePath}/` : '/'
  return {
    name: 'Rodobras Guindastes | Locação de Guindastes e Muncks',
    short_name: 'Rodobras',
    description:
      'Locação de guindastes, muncks, transportes especiais e remoção de cargas. Atendimento em Santa Catarina desde 1999.',
    start_url: start,
    display: 'browser',
    background_color: '#1a2744',
    theme_color: '#1a2744',
    icons: [
      {
        src: `${basePath}/icon.svg`,
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
