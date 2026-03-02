import Image from "next/image"
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"
import { basePath } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(48) 3285-2727",
    href: "tel:+554832852727",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(48) 99158-2727",
    href: "https://wa.me/5548991582727",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@rodobrasguindastes.com.br",
    href: "mailto:contato@rodobrasguindastes.com.br",
  },
  {
    icon: MapPin,
    label: "Atuacao",
    value: "SC e RJ",
    href: "#",
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="bg-background py-20 lg:py-28" aria-labelledby="contato-heading">
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

            <ul className="mt-8 grid gap-4 sm:grid-cols-2" aria-label="Canais de contato">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
                    <Card className="border-border/60 transition-all hover:border-accent/40 hover:shadow-md">
                      <CardContent className="flex items-center gap-4 py-4">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10" aria-hidden="true">
                          <info.icon className="size-5 text-primary" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">{info.label}</span>
                          <span className="block truncate text-sm font-semibold text-foreground">{info.value}</span>
                        </span>
                      </CardContent>
                    </Card>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <aside className="w-full max-w-md flex-1" aria-label="Chamar no WhatsApp">
            <Card className="overflow-hidden border-0 bg-primary justify-between">
              <CardContent className="flex flex-col items-center gap-6 px-8 lg:pb-18 lg:pt-6 py-8 text-center">
                <span className="flex size-20 items-center justify-center" aria-hidden="true">
                  <Image
                    src={`${basePath}/rodobras-marca.png`}
                    alt="Rodobras Guindastes"
                    width={80}
                    height={80}
                    className="w-auto object-contain brightness-0 invert"
                  />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-primary-foreground">
                    Fale conosco pelo WhatsApp
                  </h3>
                  <p className="mt-3 text-primary-foreground leading-relaxed">
                    Resposta rápida e atendimento personalizado. Envie as informações do seu projeto e receba um orçamento sem compromisso.
                  </p>
                </div>
                <Button asChild variant="outline" size="lg" className="w-full border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground dark:border-accent-foreground/50 dark:bg-transparent dark:hover:bg-accent-foreground/20 dark:hover:border-accent-foreground/70">
                  <a href="https://wa.me/5548991582727" target="_blank">
                    <MessageCircle className="size-5" />
                    Iniciar Conversa
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
