"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

/**
 * Carrega Analytics e SpeedInsights após a primeira pintura,
 * reduzindo solicitações que bloqueiam a renderização (melhora LCP).
 */
export function DeferredAnalytics() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const useIdle = typeof requestIdleCallback !== "undefined"
    const id = useIdle
      ? requestIdleCallback(() => setMounted(true), { timeout: 500 })
      : setTimeout(() => setMounted(true), 500)
    return () =>
      useIdle ? cancelIdleCallback(id as number) : clearTimeout(id)
  }, [])

  if (!mounted) return null
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
