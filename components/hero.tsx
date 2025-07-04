import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
      <div className="absolute inset-0">
        <img src="/Camaro.jpeg" alt="Camaro" className="w-full h-full object-cover object-center" style={{ zIndex: 0 }} />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-playfair">
          Premium Mobile
          <span className="block text-blue-300">Detailing</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto font-inter">
          Experience luxury car care at your location. Professional, eco-friendly, and convenient detailing services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-3 text-white">
              Book Now
            </Button>
          </a>
          <Link href="/pricing">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              View Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
