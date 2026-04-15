"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"
import { basePath } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contato", label: "Contato" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 py-10 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={`${basePath}/logo-dark.png`}
            alt="Rodobras Guindastes"
            width={140}
            height={40}
            className="h-9 w-auto dark:invert dark:[filter:invert(1)_hue-rotate(180deg)]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegacao principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="https://wa.me/5548991582727" target="_blank" title="(48) 3285-2727">
              <Phone className="size-4" />
              Entre em contato
            </a>
          </Button>
        </div>

        {/* Mobile: tema no header + botão do menu */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Menu de navegacao</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="https://wa.me/554832852727" target="_blank" title="(48) 3285-2727">
                    <Phone className="size-4" />
                    Entre em contato
                  </a>
                </Button>
              </div>
            </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
