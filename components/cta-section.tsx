import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-accent" aria-labelledby="cta-heading">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
      </div>
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center lg:py-20">
        <h2 id="cta-heading" className="text-balance text-3xl font-bold tracking-tight text-accent-foreground md:text-4xl">
          Precisa de um guindaste para seu projeto?
        </h2>
        <p className="max-w-2xl text-pretty text-lg text-accent-foreground/80 leading-relaxed">
          Entre em contato agora e receba um orçamento personalizado. <br />Atendimento rápido e soluções sob medida.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">

          <Button asChild variant="outline" size="lg" className="border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground">
          <a href="https://wa.me/5548991582727" target="_blank" title="(48) 99158-2727">
              Solicite um Orçamento
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
