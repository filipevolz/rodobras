"use client"

import dynamic from "next/dynamic"

const WhatsAppFloat = dynamic(
  () => import("@/components/whatsapp-float").then((m) => m.WhatsAppFloat),
  { ssr: false }
)

export function DeferredScripts() {
  return <WhatsAppFloat />
}
