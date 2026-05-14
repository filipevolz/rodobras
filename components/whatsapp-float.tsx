"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { basePath } from "@/lib/utils"
import { getWhatsAppCtaHref } from "@/lib/whatsapp-links"

const WHATSAPP_LABEL = "Contato WhatsApp Rodobras"

export function WhatsAppFloat() {
  const pathname = usePathname()
  const href = getWhatsAppCtaHref(pathname)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={WHATSAPP_LABEL}
      title={WHATSAPP_LABEL}
      className="fixed bottom-2 right-2 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] p-2.5 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background"
    >
      <Image
        src={`${basePath}/whats.png`}
        alt=""
        width={32}
        height={32}
        className="size-full object-contain brightness-0 invert"
        aria-hidden
      />
    </a>
  )
}
