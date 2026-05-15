import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { BUSINESS } from '@/lib/business'
import { LOGO_ALT } from '@/lib/seo'

const width = 1200
const height = 630

/** Laranja marca (alinhado a `--primary` / comentário em globals.css) */
const brandOrange = '#EB720C'

export const ogImageSize = { width, height }
export const ogImageAlt = `${BUSINESS.tradeName} — locação de guindastes e muncks`

export async function createShareImageResponse(): Promise<ImageResponse> {
  const cwd = process.cwd()
  const [photoBuf, logoBuf] = await Promise.all([
    readFile(join(cwd, 'public/munks_rodobras-01.jpg')),
    readFile(join(cwd, 'public/logo-dark.png')),
  ])
  const photoSrc = `data:image/jpeg;base64,${photoBuf.toString('base64')}`
  const logoSrc = `data:image/png;base64,${logoBuf.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          background: brandOrange,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '52%',
            height: '100%',
            padding: '48px 44px 48px 52px',
            justifyContent: 'space-between',
            background: `linear-gradient(165deg, ${brandOrange} 0%, #c55f0a 55%, #a34e08 100%)`,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                padding: '14px 20px',
                background: '#ffffff',
                borderRadius: 14,
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- next/og ImageResponse */}
              <img src={logoSrc} alt={LOGO_ALT} width={250} height={48} />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: 46,
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 18px rgba(0,0,0,0.2)',
                }}
              >
                <span>Locação de guindastes</span>
                <span>e muncks</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 26,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.95)',
                  lineHeight: 1.35,
                  maxWidth: 480,
                }}
              >
                +25 anos movimentando cargas com segurança
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              background: '#ffffff',
              color: brandOrange,
              fontSize: 22,
              fontWeight: 800,
              padding: '18px 32px',
              borderRadius: 14,
              letterSpacing: '0.01em',
              boxShadow: '0 10px 28px rgba(0,0,0,0.18)',
            }}
          >
            Solicite um orçamento agora
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            width: '48%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og ImageResponse */}
          <img
            src={photoSrc}
            alt="Caminhão munck Rodobras em operação"
            width={576}
            height={630}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 48,
              background: 'linear-gradient(90deg, rgba(235,114,12,0.55) 0%, transparent 100%)',
            }}
          />
        </div>
      </div>
    ),
    { width, height }
  )
}
