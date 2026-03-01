import Image from "next/image"
import { basePath } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Wrench, Users, Award } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Equipamentos Novos e Modernos",
    description:
      "Contamos com uma frota nova e moderna preparada para qualquer desafio de peso e altura.",
  },
  {
    icon: Users,
    title: "Equipe Experiente",
    description:
      "Equipe comprometida e credenciada pela experiencia, capacitada em cursos e treinamentos.",
  },
  {
    icon: Award,
    title: "Qualidade Comprovada",
    description:
      "Ha mais de 25 anos nos dedicamos exclusivamente a elevacao e movimentacao de cargas.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background py-12 md:py-16 lg:py-28" aria-labelledby="sobre-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-4 md:mb-8 flex justify-center">
          <Badge variant="secondary">Sobre Nos</Badge>
        </div>

        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-16">
          <figure className="flex-1">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-accent/20" aria-hidden="true" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                src={`${basePath}/04.jpg`}
                alt="Rodobras Guindastes - solucoes para qualquer porte de projeto"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </figure>

          <article className="flex-1">
            <h2 id="sobre-heading" className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Grandes solucoes para qualquer porte de projeto{" "}
              <span className="text-accent">desde 1999</span>
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Geramos resultados inteligentes, economicos e seguros para problemas de peso e altura. Atuamos em atendimentos especificos e imediatos, contratos por periodos alongados em grandes obras nas cidades de Santa Catarina, com foco na grande Florianopolis, Tijucas, Itajai, Balneario Camboriu e demais cidades litoraneas. No estado do Rio de Janeiro, com forte presenca na Capital e Baixada Fluminense.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Orgulhamo-nos de nossa presenca em importantes obras e grandes projetos de nivel nacional, que nos deram referencia em bom atendimento em ambientes complexos e duradouros.
            </p>
          </article>
        </div>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" aria-label="Diferenciais">
          {features.map((feature) => (
            <li key={feature.title} className="flex gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10" aria-hidden="true">
                <feature.icon className="size-6 text-primary" />
              </span>
              <span>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
