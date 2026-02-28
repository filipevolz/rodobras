import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ClientsSection } from "@/components/clients-section"
import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <>
      <a href="#conteudo-principal" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground">
        Pular para o conteúdo
      </a>
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
