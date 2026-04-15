import Link from "next/link"
import Image from "next/image"
import { basePath } from "@/lib/utils"

const WHATSAPP_URL = "https://wa.me/5548991582727"
const WHATSAPP_LABEL = "Contato WhatsApp Rodobras"

export function WhatsAppFloat() {
  return (
    <Link
      href={WHATSAPP_URL}
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
    </Link>
  )
}
