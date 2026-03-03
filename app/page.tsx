import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"

const SiteHeader = dynamic(
  () => import("@/components/site-header").then((m) => m.SiteHeader),
  { ssr: true }
)
const ServicesSection = dynamic(
  () => import("@/components/services-section").then((m) => m.ServicesSection),
  { ssr: true }
)
const AboutSection = dynamic(
  () => import("@/components/about-section").then((m) => m.AboutSection),
  { ssr: true }
)
const ClientsSection = dynamic(
  () => import("@/components/clients-section").then((m) => m.ClientsSection),
  { ssr: true }
)
const CtaSection = dynamic(
  () => import("@/components/cta-section").then((m) => m.CtaSection),
  { ssr: true }
)
const ContactSection = dynamic(
  () => import("@/components/contact-section").then((m) => m.ContactSection),
  { ssr: true }
)
const SiteFooter = dynamic(
  () => import("@/components/site-footer").then((m) => m.SiteFooter),
  { ssr: true }
)

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo-principal">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ClientsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
