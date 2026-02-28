import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const clients = [
  { name: "Eletrobras Eletrosul", src: "/01.png" },
  { name: "Petrobras", src: "/02.png" },
  { name: "Tecnosolo", src: "/03.png" },
  { name: "Celesc", src: "/05.png" },
  { name: "Eletrobras Eletronuclear", src: "/07.png" },
]

export function ClientsSection() {
  return (
    <section id="clientes" className="bg-muted py-20 lg:py-28" aria-labelledby="clientes-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Nossos Clientes</Badge>
          <h2 id="clientes-heading" className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Confianca de grandes empresas
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Empresas de nivel nacional confiam na Rodobras para seus projetos mais exigentes.
          </p>
        </header>

        <ul className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5" aria-label="Logos de clientes">
          {clients.map((client) => (
            <li
              key={client.name}
              className="flex items-center justify-center rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <Image
                src={client.src}
                alt={`Logo ${client.name}`}
                width={120}
                height={48}
                className="h-12 w-auto max-w-[120px] object-contain grayscale transition-all hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
