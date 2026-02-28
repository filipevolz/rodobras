import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const equipment = [
  {
    name: "Guindastes",
    image: "/guindastes_rodobras-01.jpg",
    description: "Ate 240 toneladas de capacidade",
  },
  {
    name: "Muncks",
    image: "/munks_rodobras-01.jpg",
    description: "Articulados sobre caminhao",
  },
  {
    name: "Carreta Rebaixada",
    image: "/transportes-especiais_rodobras-01.jpg",
    description: "Para cargas de grande porte",
  },
  {
    name: "Manipuladores",
    image: "/03.png",
    description: "Versatilidade em movimentacao",
  },
  {
    name: "Empilhadeiras",
    image: "/05.png",
    description: "Para cargas em ambientes fechados",
  },
  {
    name: "Plataforma Elevatoria",
    image: "/01.png",
    description: "Elevacao segura de pessoal",
  },
  {
    name: "Equipamentos de Remocao",
    image: "/remocoes_rodobras-01.jpg",
    description: "Solucoes para ambientes restritos",
  },
]

export function EquipmentSection() {
  return (
    <section id="equipamentos" className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">Nossa Frota</Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Equipamentos modernos e preparados
          </h2>
          <p className="mt-4 text-pretty text-primary-foreground leading-relaxed">
            Contamos com uma frota nova e moderna, preparada para qualquer desafio de peso e altura.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {equipment.map((item) => (
            <Card
              key={item.name}
              className="group overflow-hidden border-primary-foreground/10 bg-primary-foreground/5 transition-all hover:bg-primary-foreground/10"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              <CardContent className="pt-4">
                <h3 className="font-semibold text-primary-foreground">{item.name}</h3>
                <p className="mt-1 text-sm text-primary-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
