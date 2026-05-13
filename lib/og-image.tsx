import { ImageResponse } from 'next/og'
import { BUSINESS } from '@/lib/business'

const width = 1200
const height = 630

export const ogImageSize = { width, height }
export const ogImageAlt = `${BUSINESS.tradeName} — locação de guindastes e muncks`

export function createShareImageResponse(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #0f172a 0%, #1a2744 42%, #0c1222 100%)',
          padding: 64,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 58,
              fontWeight: 700,
              color: '#f8fafc',
              lineHeight: 1.15,
              letterSpacing: -0.02,
            }}
          >
            {BUSINESS.tradeName}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              fontWeight: 500,
              color: '#38bdf8',
              lineHeight: 1.25,
            }}
          >
            Locação de guindastes, muncks e transportes especiais
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              color: '#94a3b8',
              lineHeight: 1.4,
            }}
          >
            {`Santa Catarina e Rio de Janeiro · desde 1999 · ${BUSINESS.telephoneDisplay}`}
          </div>
        </div>
      </div>
    ),
    { width, height }
  )
}
