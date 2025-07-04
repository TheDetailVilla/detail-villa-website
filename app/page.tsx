import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Contact from "@/components/contact"
// Add the Gallery component to the home page
import Gallery from "@/components/gallery"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Gallery limit={6} />
      <Testimonials />
      <Contact />
    </main>
  )
}
