import Link from "next/link"
import Image from "next/image"
import { basePath } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { LocationsMap } from "@/components/locations-map-client"

const footerLinks = {
  servicos: [
    { label: "Locação de Guindastes", href: "#servicos" },
    { label: "Locação de Muncks", href: "#servicos" },
    { label: "Remoções de Cargas", href: "#servicos" },
    { label: "Transportes Especiais", href: "#servicos" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contato", href: "#contato" },
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          <div className="lg:col-span-2">
            <Image
              src={`${basePath}/logo-dark.png`}
              alt="Rodobras Guindastes"
              width={140}
              height={40}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground">
              Soluções integradas em locação de guindastes, muncks, transportes especiais e remoção de cargas. Atendemos Florianópolis (Coqueiros, Via Expressa, Norte da Ilha), São José, Palhoça e Biguaçu. Atendendo com excelência desde 1999.
            </p>
          </div>

          <nav aria-label="Serviços" className="lg:justify-self-center">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              Serviços
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground transition-colors hover:text-primary-foreground hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Empresa" className="lg:justify-self-center">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              Empresa
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground transition-colors hover:text-primary-foreground hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground mb-2">
              Localização
            </h4>
            <div className="overflow-hidden rounded-lg w-full">
              <LocationsMap />
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-center">
            <p className="text-xs text-primary-foreground text-center md:text-left">
              Rodobras Guindastes. Todos os direitos reservados.
            </p>
            <nav className="flex items-center gap-6" aria-label="Contato">
              <a
                href="tel:+5548991582727"
                className="text-xs text-primary-foreground transition-colors hover:text-primary-foreground hover:underline"
              >
                (48) 3285-2727
              </a>
              <a
                href="mailto:contato@rodobrasguindastes.com.br"
                className="text-xs text-primary-foreground transition-colors hover:text-primary-foreground hover:underline"
              >
                contato@rodobrasguindastes.com.br
              </a>
            </nav>
          </div>
          <p className="text-xs text-primary-foreground/80 text-center md:text-left">
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/filipe-volz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:underline"
            >
              Filipe Volz
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
