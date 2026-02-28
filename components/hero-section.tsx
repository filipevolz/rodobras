import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Shield, Clock, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Background pattern - decorativo, ignorado por leitores de tela */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[length:40px_40px]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-16 pt-20 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="flex-1 text-center lg:text-left">
          <Badge variant="outline" className="mb-6 border-border text-foreground">
            Desde 1999 movimentando cargas com seguranca
          </Badge>

          <h1 id="hero-heading" className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Soluções em{" "}
            <span className="text-accent">guindastes</span>{" "}
            para qualquer porte de projeto
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Locação de guindastes, muncks, transportes especiais e remocao de cargas. Atendemos com alcance de ate 95 metros e capacidade de ate 240 toneladas.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base font-semibold">
              <a href="https://wa.me/5548991582727" target="_blank" rel="noopener noreferrer">
                Solicite um Orcamento
                <ArrowRight className="size-4" />
              </a>
            </Button>

          </div>

          {/* Stats - lista semântica */}
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:justify-start" aria-label="Diferenciais">
            <li className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10" aria-hidden="true">
                <Shield className="size-5 text-primary" />
              </span>
              <span>
                <span className="block text-sm font-bold text-foreground">+25 anos</span>
                <span className="block text-xs text-muted-foreground">de experiencia</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10" aria-hidden="true">
                <Truck className="size-5 text-primary" />
              </span>
              <span>
                <span className="block text-sm font-bold text-foreground">240 ton</span>
                <span className="block text-xs text-muted-foreground">capacidade maxima</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10" aria-hidden="true">
                <Clock className="size-5 text-primary" />
              </span>
              <span>
                <span className="block text-sm font-bold text-foreground">95 metros</span>
                <span className="block text-xs text-muted-foreground">alcance maximo</span>
              </span>
            </li>
          </ul>
        </div>

        <figure className="mt-12 flex-1 lg:mt-0">
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-4 rounded-2xl bg-accent/20 blur-2xl" />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="munks_rodobras-01.jpg"
                alt="Guindaste Rodobras em operacao"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
          </div>
        </figure>
      </div>
    </section>
  )
}
