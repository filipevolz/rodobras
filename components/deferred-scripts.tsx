"use client"

import dynamic from "next/dynamic"

const Analytics = dynamic(
  () => import("@vercel/analytics/next").then((m) => m.Analytics),
  { ssr: false }
)

const WhatsAppFloat = dynamic(
  () => import("@/components/whatsapp-float").then((m) => m.WhatsAppFloat),
  { ssr: false }
)

export function DeferredScripts() {
  return (
    <>
      <Analytics />
      <WhatsAppFloat />
    </>
  )
}
