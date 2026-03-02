"use client"

import "leaflet/dist/leaflet.css"
import dynamic from "next/dynamic"

export const LocationsMap = dynamic(
  () => import("@/components/locations-map").then((m) => m.LocationsMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[200px] w-full min-h-[200px] rounded-lg bg-muted animate-pulse flex items-center justify-center text-muted-foreground text-sm">
        Carregando mapa…
      </div>
    ),
  }
)
