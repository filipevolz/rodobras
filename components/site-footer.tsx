import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  servicos: [
    { label: "Locação de Guindastes", href: "#servicos" },
    { label: "Locação de Muncks", href: "#servicos" },
    { label: "Remocoes de Cargas", href: "#servicos" },
    { label: "Transportes Especiais", href: "#servicos" },
  ],
  empresa: [
    { label: "Sobre Nos", href: "#sobre" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contato", href: "#contato" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/logo-dark.png"
              alt="Rodobras Guindastes"
              width={140}
              height={40}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground">
              Soluções integradas em locação de guindastes, muncks, transportes especiais e remocao de cargas. Atendendo com excelencia desde 1999.
            </p>
          </div>

          <nav aria-label="Serviços">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              Servicos
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

          <nav aria-label="Empresa">
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
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-primary-foreground">
            Rodobras Guindastes. Todos os direitos reservados.
          </p>
          <nav className="flex items-center gap-6" aria-label="Contato">
            <a
              href="tel:+554832852727"
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
      </div>
    </footer>
  )
}
