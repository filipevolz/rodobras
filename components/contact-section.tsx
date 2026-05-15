import Image from "next/image"
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"
import { basePath } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BUSINESS } from "@/lib/business"
import { getWhatsAppMeHref, SITE_HOME_WHATSAPP_PREFILL } from "@/lib/whatsapp-links"
import { SocialLinks } from "@/components/social-links"
import { LOGO_ALT } from "@/lib/seo"

const whatsAppComMensagemHref = getWhatsAppMeHref(SITE_HOME_WHATSAPP_PREFILL)
const phoneDisplay = BUSINESS.telephoneDisplay
const phoneTelHref = `tel:${BUSINESS.telephoneE164}`

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: phoneDisplay,
    href: phoneTelHref,
  },
  {
    icon: MessageCircle,
    label: "Whatsapp",
    value: phoneDisplay,
    href: whatsAppComMensagemHref,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@rodobrasguindastes.com.br",
    href: "mailto:contato@rodobrasguindastes.com.br",
  },
  {
    icon: MapPin,
    label: "Atuação",
    value: "SC - Grande Florianópolis e litoral catarinense",
    href: "#",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28" aria-labelledby="contato-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <Badge variant="secondary" className="mb-4">Contato</Badge>
            <h2 id="contato-heading" className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Solicite seu{" "}
              <span className="text-accent">orçamento</span>
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Entre em contato para orçamentos e informações. Nossa equipe está pronta para atender seu projeto.
            </p>

            <ul
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch"
              aria-label="Canais de contato"
            >
              {contactInfo.map((info) => (
                <li key={info.label} className="flex min-h-0">
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex w-full min-w-0"
                  >
                    <Card className="flex min-h-[6.75rem] w-full flex-col border-border/60 transition-all hover:border-accent/40 hover:shadow-md sm:min-h-[7rem]">
                      <CardContent className="flex flex-1 items-start gap-4 py-4">
                        <span
                          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                          aria-hidden="true"
                        >
                          <info.icon className="size-5 text-primary" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-left text-xs font-medium tracking-wider text-muted-foreground">
                            {info.label}
                          </span>
                          <span className="mt-1 block text-pretty text-left text-sm font-semibold leading-snug text-foreground">
                            {info.value}
                          </span>
                        </span>
                      </CardContent>
                    </Card>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-xs font-medium tracking-wider text-muted-foreground">Redes sociais</p>
              <SocialLinks className="mt-3 justify-center lg:justify-start" variant="text" iconClassName="text-primary" />
            </div>
          </div>

          <aside className="w-full max-w-md flex-1" aria-label="Chamar no whatsapp">
            <Card className="overflow-hidden border-0 bg-primary justify-between">
              <CardContent className="flex flex-col items-center gap-6 px-8 lg:pb-18 lg:pt-6 py-8 text-center">
                <span className="flex size-20 items-center justify-center" aria-hidden="true">
                  <Image
                    src={`${basePath}/rodobras-marca.png`}
                    alt={LOGO_ALT}
                    width={80}
                    height={80}
                    className="w-auto object-contain brightness-0 invert"
                  />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-primary-foreground">
                    Fale conosco pelo whatsapp
                  </h3>
                  <p className="mt-3 text-primary-foreground leading-relaxed">
                    Resposta rápida e atendimento personalizado. Envie as informações do seu projeto e receba um orçamento sem compromisso.
                  </p>
                </div>
                <Button asChild variant="outline" size="lg" className="w-full border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground dark:border-accent-foreground/50 dark:bg-transparent dark:hover:bg-accent-foreground/20 dark:hover:border-accent-foreground/70">
                  <a href={whatsAppComMensagemHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-5" />
                    Iniciar conversa
                  </a>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  )
}
