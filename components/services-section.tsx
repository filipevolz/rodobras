"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Container, Truck, PackageOpen, Route } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"
import { basePath } from "@/lib/utils"

const guindastesCarouselImages = [
  "/guindastes_rodobras-01.jpg",
  "/guindastes_rodobras-02.jpg",
  "/guindastes_rodobras-03.jpg",
  "/guindastes_rodobras-05.jpg",
  "/guindastes_rodobras-04.jpg",
  "/guindastes_rodobras-06.jpg",
  "/guindastes_rodobras-07.jpg",
  "/guindastes_rodobras-08.jpg",
  "/guindastes_rodobras-09.jpg",
]

const munksCarouselImages = Array.from({ length: 10 }, (_, i) => `/munks_rodobras-${String(i + 1).padStart(2, "0")}.jpg`)

const remocoesCarouselImages = ["/remocoes_rodobras-01.jpg", "/remocoes_rodobras-02.jpg"]

const transportesCarouselImages = ["/transportes-especiais_rodobras-01.jpg", "/transportes-especiais_rodobras-02.jpg"]

const AUTOPLAY_DELAY_MS = 4500

function ServiceCarousel({
  images,
  title,
  badge,
}: {
  images: string[]
  title: string
  badge: string
}) {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return
    const t = setInterval(() => api.scrollNext(), AUTOPLAY_DELAY_MS)
    return () => clearInterval(t)
  }, [api])

  return (
    <>
      <Carousel className="size-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="ml-0 h-72">
          {images.map((src, i) => (
            <CarouselItem key={src} className="pl-0">
              <div className="relative h-72 w-full">
                <Image
                  src={`${basePath}${src}`}
                  alt={`${title} - imagem ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 border-border bg-background/80 hover:bg-background" />
        <CarouselNext className="right-2 border-border bg-background/80 hover:bg-background" />
      </Carousel>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent pointer-events-none" aria-hidden="true" />
      <Badge className="absolute bottom-4 left-4 bg-accent text-accent-foreground z-10">
        {badge}
      </Badge>
    </>
  )
}

const services = [
  {
    icon: Container,
    title: "Locação de Guindastes",
    description: "Icamentos de cargas pesadas ou delicadas a grandes alturas. Atendimentos com alcance de ate 95 metros e capacidade de ate 240 toneladas.",
    applications: ["Montagens de estruturas metalicas", "Icamento de equipamentos", "Lancamento de caixas d'agua", "Instalacao de silos e caldeiras"],
    image: "/guindastes_rodobras-01.jpg",
    badge: "Ate 240 toneladas",
    carouselImages: guindastesCarouselImages,
  },
  {
    icon: Truck,
    title: "Locação de Muncks",
    description: "Guindastes articulados sobre caminhao com carroceria. Icamentos, transporte, carga e descarga com o mesmo equipamento.",
    applications: ["Transporte com carga e descarga", "Icamento e transporte de moveis", "Apoio em montagens de silos", "Retirada de veiculos acidentados"],
    image: "/munks_rodobras-01.jpg",
    badge: "Ate 17 toneladas",
    carouselImages: munksCarouselImages,
  },
  {
    icon: PackageOpen,
    title: "Remocoes de Cargas",
    description: "Remocao em ambiente fechado de cargas pesadas ou delicadas. Movimentacao vertical e horizontal de maquinas e equipamentos.",
    applications: ["Movimentacao de injetoras e extrusoras", "Maquinas graficas em industrias", "Descida e subida por escadas", "Ambientes de dificil acesso"],
    image: "/remocoes_rodobras-01.jpg",
    badge: "Ambientes fechados",
    carouselImages: remocoesCarouselImages,
  },
  {
    icon: Route,
    title: "Transportes Especiais",
    description: "Transportes de maquinas e demais cargas com excessos de peso, altura, comprimento ou largura. Operacao sob condicoes especiais.",
    applications: ["Pranchas rebaixadas e extensivas", "Escolta credenciada", "Autorizacao de orgaos de transito", "Cargas de longa distancia"],
    image: "/transportes-especiais_rodobras-01.jpg",
    badge: "Cargas especiais",
    carouselImages: transportesCarouselImages,
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-20 lg:py-28" aria-labelledby="servicos-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Nossos Servicos</Badge>
          <h2 id="servicos-heading" className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Sua melhor contratacao para servicos de{" "}
            <span className="text-accent">movimentacao de cargas</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Oferecemos solucoes completas e integradas para qualquer tipo de necessidade em movimentacao, icamento e transporte de cargas.
          </p>
        </header>

        <ul className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.title}>
            <Card className="min-h-140 group overflow-hidden border-border/60 pt-0 transition-all hover:border-accent/40 hover:shadow-lg justify-between">
              {/* Image or Carousel com autoplay */}
              <div className="relative h-72 overflow-hidden">
                {"carouselImages" in service && service.carouselImages ? (
                  <ServiceCarousel
                    images={service.carouselImages}
                    title={service.title}
                    badge={service.badge}
                  />
                ) : (
                  <>
                    <Image
                      src={`${basePath}${service.image}`}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent pointer-events-none" aria-hidden="true" />
                    <Badge className="absolute bottom-4 left-4 bg-accent text-accent-foreground z-10">
                      {service.badge}
                    </Badge>
                  </>
                )}
              </div>

              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
                <CardDescription className="mt-2 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Aplicacoes
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.applications.map((app) => (
                    <li key={app} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {app}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
