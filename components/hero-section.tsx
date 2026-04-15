import Image from "next/image"
import { basePath } from "@/lib/utils"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Gradiente radial saindo do centro com cor primária */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 50% 50%, color-mix(in oklch, var(--primary) 18%, transparent) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-10 pt-10 lg:flex-row lg:items-start lg:gap-16 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="min-w-0 w-full flex-1 text-center lg:text-left">
          <Badge variant="outline" className="mb-6 max-w-full shrink border-2 border-primary/40 bg-background/50 px-4 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm rounded-2xl whitespace-normal break-words">
            <span className="bg-primary w-2 h-2 rounded-full mr-2 shrink-0 hidden md:inline-block" aria-hidden></span>
            Desde 1999 movimentando cargas com segurança
          </Badge>

          <h1 id="hero-heading" className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Soluções em{" "}
            <span className="text-accent">guindastes</span>{" "}
            para qualquer porte de projeto
          </h1>

          <p className="mt-6 w-full max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground break-words lg:text-xl">
            Locação de guindastes, muncks, transportes especiais e remoção de cargas. Atendemos com máquinas de elevado alcance e grande capacidade de carga.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base font-semibold">
              <a href="https://wa.me/5548991582727" target="_blank" rel="noopener noreferrer">
                Solicite um Orçamento
                <ArrowRight className="size-4" />
              </a>
            </Button>

          </div>

          {/* Diferencial */}
          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start" aria-label="Diferencial">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10" aria-hidden="true">
                <Shield className="size-5 text-primary" />
              </span>
              <span>
                <span className="block text-sm font-bold text-foreground">+25 anos de experiência</span>
                <span className="block text-xs text-muted-foreground">para integrar ao seu projeto</span>
              </span>
            </div>
          </div>
        </div>

        <figure className="mt-12 min-w-0 w-full flex-[1.2] lg:mt-0 lg:pt-20">
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-4 rounded-2xl bg-accent/20 blur-2xl" />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border hidden md:block">
              <Image
                src={`${basePath}/munks_rodobras-01.jpg`}
                alt="Guindaste Rodobras em operação"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                fetchPriority="high"
              />
          </div>
        </figure>
      </div>
    </section>
  )
}
